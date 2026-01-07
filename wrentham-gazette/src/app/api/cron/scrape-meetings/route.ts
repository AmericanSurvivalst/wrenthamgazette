import { NextRequest, NextResponse } from 'next/server';
import { 
  fetchPage, 
  stripHtml,
  verifyCronRequest,
  generateArticleFromContent
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
  const completedMeetings = meetings.filter(m => m.status === 'completed');
  
  // This would:
  // 1. Check if we have minutes PDF available
  // 2. Extract text from PDF
  // 3. Use AI to generate article summary
  // 4. Save as draft article for review
  
  // For now, just log
  console.log(`${completedMeetings.length} completed meetings to check for minutes`);
  
  // Example of AI article generation (would need ANTHROPIC_API_KEY):
  // for (const meeting of completedMeetings) {
  //   if (meeting.minutes_url) {
  //     const pdfText = await extractPdfText(meeting.minutes_url);
  //     const article = await generateArticleFromContent(
  //       pdfText,
  //       'town-government',
  //       meeting.minutes_url
  //     );
  //     if (article) {
  //       await saveArticleDraft(article);
  //     }
  //   }
  // }
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
