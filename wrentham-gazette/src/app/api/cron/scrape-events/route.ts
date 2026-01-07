import { NextRequest, NextResponse } from 'next/server';
import { 
  fetchPage, 
  stripHtml, 
  parseDate, 
  saveEvents,
  verifyCronRequest 
} from '@/lib/scraper-utils';

const CALENDAR_URL = 'https://www.wrentham.gov/Calendar.aspx';

interface ScrapedEvent {
  title: string;
  description?: string;
  location?: string;
  event_date: string;
  category?: string;
  source_url: string;
}

async function scrapeWrenthamCalendar(): Promise<ScrapedEvent[]> {
  const events: ScrapedEvent[] = [];
  
  try {
    const html = await fetchPage(CALENDAR_URL);
    
    // Parse the calendar HTML
    // The town uses CivicPlus which has a specific structure
    // This is a simplified parser - you may need to adjust based on actual HTML
    
    const eventPattern = /<div class="calendar-item"[^>]*>([\s\S]*?)<\/div>/gi;
    const matches = html.matchAll(eventPattern);
    
    for (const match of matches) {
      const eventHtml = match[1];
      
      // Extract title
      const titleMatch = eventHtml.match(/<h\d[^>]*>(.*?)<\/h\d>/i);
      const title = titleMatch ? stripHtml(titleMatch[1]) : null;
      
      // Extract date
      const dateMatch = eventHtml.match(/(\d{1,2}\/\d{1,2}\/\d{4}|\w+ \d{1,2}, \d{4})/);
      const dateStr = dateMatch ? dateMatch[1] : null;
      
      // Extract time
      const timeMatch = eventHtml.match(/(\d{1,2}:\d{2}\s*(?:AM|PM)?)/i);
      const timeStr = timeMatch ? timeMatch[1] : '';
      
      // Extract location
      const locationMatch = eventHtml.match(/location[:\s]*(.*?)(?:<|$)/i);
      const location = locationMatch ? stripHtml(locationMatch[1]) : undefined;
      
      if (title && dateStr) {
        const parsedDate = parseDate(dateStr);
        if (parsedDate) {
          // Add time if available
          if (timeStr) {
            const timeParts = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
            if (timeParts) {
              let hours = parseInt(timeParts[1]);
              const minutes = parseInt(timeParts[2]);
              const ampm = timeParts[3]?.toUpperCase();
              
              if (ampm === 'PM' && hours !== 12) hours += 12;
              if (ampm === 'AM' && hours === 12) hours = 0;
              
              parsedDate.setHours(hours, minutes);
            }
          }
          
          // Determine category based on title/content
          let category = 'other';
          const titleLower = title.toLowerCase();
          if (titleLower.includes('board') || titleLower.includes('committee') || titleLower.includes('meeting')) {
            category = 'town-meeting';
          } else if (titleLower.includes('library') || titleLower.includes('fiske')) {
            category = 'library';
          } else if (titleLower.includes('school') || titleLower.includes('king philip')) {
            category = 'school';
          } else if (titleLower.includes('game') || titleLower.includes('tournament') || titleLower.includes('sport')) {
            category = 'sports';
          }
          
          events.push({
            title,
            location,
            event_date: parsedDate.toISOString(),
            category,
            source_url: CALENDAR_URL,
          });
        }
      }
    }
    
    console.log(`Scraped ${events.length} events from Wrentham calendar`);
    
  } catch (error) {
    console.error('Error scraping Wrentham calendar:', error);
  }
  
  return events;
}

// Also scrape Fiske Library events
async function scrapeFiskeLibraryEvents(): Promise<ScrapedEvent[]> {
  const events: ScrapedEvent[] = [];
  const FISKE_URL = 'https://fiskelib.org/';
  
  try {
    const html = await fetchPage(FISKE_URL);
    
    // Parse library events - adjust based on actual HTML structure
    const eventPattern = /<div class="event[^>]*>([\s\S]*?)<\/div>/gi;
    const matches = html.matchAll(eventPattern);
    
    for (const match of matches) {
      const eventHtml = match[1];
      
      const titleMatch = eventHtml.match(/<h\d[^>]*>(.*?)<\/h\d>/i);
      const title = titleMatch ? stripHtml(titleMatch[1]) : null;
      
      const dateMatch = eventHtml.match(/WHEN\s*:\s*(.*?)(?:TIME|<)/i);
      const dateStr = dateMatch ? stripHtml(dateMatch[1]) : null;
      
      if (title && dateStr) {
        const parsedDate = parseDate(dateStr);
        if (parsedDate) {
          events.push({
            title,
            location: 'Fiske Public Library',
            event_date: parsedDate.toISOString(),
            category: 'library',
            source_url: FISKE_URL,
          });
        }
      }
    }
    
    console.log(`Scraped ${events.length} events from Fiske Library`);
    
  } catch (error) {
    console.error('Error scraping Fiske Library:', error);
  }
  
  return events;
}

export async function GET(request: NextRequest) {
  // Verify this is a legitimate cron request
  if (!verifyCronRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    // Scrape from multiple sources
    const [townEvents, libraryEvents] = await Promise.all([
      scrapeWrenthamCalendar(),
      scrapeFiskeLibraryEvents(),
    ]);
    
    const allEvents = [...townEvents, ...libraryEvents];
    
    // Save to database
    if (allEvents.length > 0) {
      await saveEvents(allEvents);
    }
    
    return NextResponse.json({
      success: true,
      message: `Scraped and saved ${allEvents.length} events`,
      breakdown: {
        town: townEvents.length,
        library: libraryEvents.length,
      },
    });
    
  } catch (error) {
    console.error('Event scraper error:', error);
    return NextResponse.json(
      { error: 'Failed to scrape events' },
      { status: 500 }
    );
  }
}
