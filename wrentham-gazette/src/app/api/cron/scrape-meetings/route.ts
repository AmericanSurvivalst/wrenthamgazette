import { NextRequest, NextResponse } from 'next/server';
import { 
  fetchPage, 
  stripHtml,
  verifyCronRequest,
  generateArticleFromContent,
  extractImages,
  uploadImageToStorage,
  getUnsplashImage
} from '@/lib/scraper-utils';
import { createServerSupabaseClient } from '@/lib/supabase';

const MEETINGS_URL = 'https://www.wrentham.gov/270/Posted-Meetings';
const MEETING_MATERIALS_URL = 'https://www.wrentham.gov/534/Meeting-Materials';

interface ScrapedMeeting {
  board_name: string;
  meeting_date: string;
  meeting_time?: string;
  location?: string;
  agenda_url?: string;
  status: 'upcoming' | 'completed';
}

async function scrapePostedMeetings(): Promise<ScrapedMeeting[]> {
  const meetings: ScrapedMeeting[] = [];
  
  try {
    const html = await fetchPage(MEETINGS_URL);
    
    // Parse meeting listings
    // Town websites typically list meetings in tables or divs
    const meetingPattern = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    const matches = html.matchAll(meetingPattern);
    
    for (const match of matches) {
      const rowHtml = match[1];
      
      // Extract cells
      const cells = rowHtml.match(/<td[^>]*>([\s\S]*?)<\/td>/gi) || [];
      
      if (cells.length >= 3) {
        const boardName = stripHtml(cells[0] || '');
        const dateStr = stripHtml(cells[1] || '');
        const timeStr = stripHtml(cells[2] || '');
        
        // Look for agenda PDF link
        const agendaMatch = rowHtml.match(/href="([^"]*\.pdf)"/i);
        const agendaUrl = agendaMatch ? agendaMatch[1] : undefined;
        
        if (boardName && dateStr) {
          const meetingDate = new Date(dateStr);
          const now = new Date();
          
          meetings.push({
            board_name: boardName,
            meeting_date: meetingDate.toISOString().split('T')[0],
            meeting_time: timeStr || undefined,
            location: 'Town Hall, 79 South Street',
            agenda_url: agendaUrl,
            status: meetingDate > now ? 'upcoming' : 'completed',
          });
        }
      }
    }
    
    console.log(`Scraped ${meetings.length} posted meetings`);
    
  } catch (error) {
    console.error('Error scraping posted meetings:', error);
  }
  
  return meetings;
}

// Create event entries for upcoming meetings
async function createMeetingEvents(meetings: ScrapedMeeting[]) {
  const supabase = createServerSupabaseClient();
  
  const upcomingMeetings = meetings.filter(m => m.status === 'upcoming');
  
  for (const meeting of upcomingMeetings) {
    const eventDate = new Date(meeting.meeting_date);
    
    // Parse time if available
    if (meeting.meeting_time) {
      const timeMatch = meeting.meeting_time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
      if (timeMatch) {
        let hours = parseInt(timeMatch[1]);
        const minutes = parseInt(timeMatch[2]);
        const ampm = timeMatch[3]?.toUpperCase();
        
        if (ampm === 'PM' && hours !== 12) hours += 12;
        if (ampm === 'AM' && hours === 12) hours = 0;
        
        eventDate.setHours(hours, minutes);
      }
    } else {
      // Default to 7 PM for town meetings
      eventDate.setHours(19, 0);
    }
    
    const { error } = await supabase
      .from('events')
      .upsert(
        {
          title: `${meeting.board_name} Meeting`,
          description: meeting.agenda_url 
            ? `View agenda: ${meeting.agenda_url}` 
            : 'Agenda pending',
          location: meeting.location,
          event_date: eventDate.toISOString(),
          category: 'town-meeting',
          source_url: MEETINGS_URL,
          is_published: true,
        },
        {
          onConflict: 'title,event_date',
          ignoreDuplicates: true,
        }
      );
    
    if (error) {
      console.error('Error creating meeting event:', error);
    }
  }
}

// Check for new meeting minutes and potentially generate articles
async function checkForMeetingMinutes(meetings: ScrapedMeeting[]) {
  const supabase = createServerSupabaseClient();
  const completedMeetings = meetings.filter(m => m.status === 'completed');
  
  for (const meeting of completedMeetings) {
    // Check if we already have an article for this meeting
    const meetingDateStr = meeting.meeting_date.replace(/-/g, '');
    const { data: existing } = await supabase
      .from('articles')
      .select('id')
      .ilike('slug', `%${meeting.board_name.toLowerCase().replace(/\s+/g, '-')}%${meetingDateStr}%`)
      .limit(1);
    
    if (existing && existing.length > 0) {
      console.log(`Article already exists for ${meeting.board_name} on ${meeting.meeting_date}`);
      continue;
    }

    // If we have an agenda URL, try to generate an article
    if (meeting.agenda_url) {
      try {
        // Fetch the agenda page content
        const agendaContent = await fetchPage(
          meeting.agenda_url.startsWith('http') 
            ? meeting.agenda_url 
            : `https://www.wrentham.gov${meeting.agenda_url}`
        );
        
        const textContent = stripHtml(agendaContent).slice(0, 4000); // Limit content size
        
        if (textContent.length > 200) {
          const article = await generateArticleFromContent(
            textContent,
            'town-government',
            meeting.agenda_url
          );
          
          if (article) {
            // Try to get an image
            let featuredImage: string | null = null;
            
            // First try to extract from source page
            const images = extractImages(agendaContent, meeting.agenda_url);
            if (images.length > 0) {
              featuredImage = await uploadImageToStorage(images[0], article.slug);
            }
            
            // Fallback to category stock image
            if (!featuredImage) {
              featuredImage = await getUnsplashImage('town-government');
            }
            
            // Save as published article
            const { error } = await supabase
              .from('articles')
              .insert({
                slug: `${article.slug}-${meetingDateStr}`,
                title: article.title,
                content: article.content,
                excerpt: article.excerpt,
                featured_image: featuredImage,
                category: 'town-government',
                tags: [meeting.board_name.toLowerCase(), 'meeting', 'town-government'],
                is_published: true,
                is_premium: false,
                published_at: new Date().toISOString(),
              });
            
            if (error) {
              console.error('Error saving generated article:', error);
            } else {
              console.log(`Generated article for ${meeting.board_name}: ${article.title}`);
            }
          }
        }
      } catch (error) {
        console.error(`Error processing meeting ${meeting.board_name}:`, error);
      }
    }
  }
  
  console.log(`Processed ${completedMeetings.length} completed meetings for article generation`);
}

export async function GET(request: NextRequest) {
  // Verify this is a legitimate cron request
  if (!verifyCronRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    const meetings = await scrapePostedMeetings();
    
    // Create events for upcoming meetings
    await createMeetingEvents(meetings);
    
    // Check completed meetings for minutes
    await checkForMeetingMinutes(meetings);
    
    const upcoming = meetings.filter(m => m.status === 'upcoming').length;
    const completed = meetings.filter(m => m.status === 'completed').length;
    
    return NextResponse.json({
      success: true,
      message: `Processed ${meetings.length} meetings`,
      breakdown: {
        upcoming,
        completed,
      },
    });
    
  } catch (error) {
    console.error('Meeting scraper error:', error);
    return NextResponse.json(
      { error: 'Failed to scrape meetings' },
      { status: 500 }
    );
  }
}
