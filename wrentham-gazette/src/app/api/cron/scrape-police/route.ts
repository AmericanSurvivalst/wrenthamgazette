import { NextRequest, NextResponse } from 'next/server';
import { 
  fetchPage, 
  stripHtml,
  savePoliceLogs,
  verifyCronRequest 
} from '@/lib/scraper-utils';

// Wrentham Police publishes logs on their website and Facebook
const POLICE_URL = 'https://www.wrentham.ma.us/wrentham-ma-depts/wrentham-ma-police-dept/downloads/158-town-departments/police-department/795-police-arrest-logs';

interface ScrapedLog {
  log_type: 'arrest' | 'incident' | 'fire';
  date: string;
  time?: string;
  location?: string;
  description: string;
}

async function scrapePoliceLog(): Promise<ScrapedLog[]> {
  const logs: ScrapedLog[] = [];
  
  try {
    const html = await fetchPage(POLICE_URL);
    
    // Police logs are typically PDF files listed on the page
    // We'd need to extract PDF links and parse them
    // For now, this shows the structure - PDF parsing would require additional tools
    
    // Look for log entries in page content
    const logPattern = /(\d{1,2}\/\d{1,2}\/\d{4})\s*[-–]\s*(.*?)(?=\d{1,2}\/\d{1,2}\/\d{4}|$)/gi;
    const textContent = stripHtml(html);
    const matches = textContent.matchAll(logPattern);
    
    for (const match of matches) {
      const dateStr = match[1];
      const description = match[2].trim();
      
      if (description.length > 10) {
        // Determine log type based on content
        let logType: 'arrest' | 'incident' | 'fire' = 'incident';
        const descLower = description.toLowerCase();
        
        if (descLower.includes('arrest') || descLower.includes('charged')) {
          logType = 'arrest';
        } else if (descLower.includes('fire') || descLower.includes('smoke') || descLower.includes('flames')) {
          logType = 'fire';
        }
        
        // Extract location if present
        const locationMatch = description.match(/(?:on|at|near)\s+([^,\.]+(?:Street|St|Avenue|Ave|Road|Rd|Way|Drive|Dr|Lane|Ln|Court|Ct|Boulevard|Blvd)[^,\.]*)/i);
        const location = locationMatch ? locationMatch[1].trim() : undefined;
        
        // Extract time if present
        const timeMatch = description.match(/(\d{1,2}:\d{2}\s*(?:AM|PM)?)/i);
        const time = timeMatch ? timeMatch[1] : undefined;
        
        logs.push({
          log_type: logType,
          date: dateStr,
          time,
          location,
          description: description.slice(0, 500), // Limit length
        });
      }
    }
    
    console.log(`Scraped ${logs.length} police log entries`);
    
  } catch (error) {
    console.error('Error scraping police log:', error);
  }
  
  return logs;
}

// Alternative: Scrape from Wrentham Patch which aggregates police news
async function scrapePatchPoliceNews(): Promise<ScrapedLog[]> {
  const logs: ScrapedLog[] = [];
  const PATCH_URL = 'https://patch.com/massachusetts/wrentham/police-fire';
  
  try {
    const html = await fetchPage(PATCH_URL);
    
    // Patch has a more structured format
    const articlePattern = /<article[^>]*>([\s\S]*?)<\/article>/gi;
    const matches = html.matchAll(articlePattern);
    
    for (const match of matches) {
      const articleHtml = match[1];
      
      // Extract headline
      const titleMatch = articleHtml.match(/<h\d[^>]*>(.*?)<\/h\d>/i);
      const title = titleMatch ? stripHtml(titleMatch[1]) : null;
      
      // Extract date
      const dateMatch = articleHtml.match(/datetime="([^"]+)"/i);
      const dateStr = dateMatch ? dateMatch[1].split('T')[0] : null;
      
      if (title && dateStr && title.toLowerCase().includes('wrentham')) {
        let logType: 'arrest' | 'incident' | 'fire' = 'incident';
        const titleLower = title.toLowerCase();
        
        if (titleLower.includes('arrest') || titleLower.includes('charged')) {
          logType = 'arrest';
        } else if (titleLower.includes('fire')) {
          logType = 'fire';
        }
        
        logs.push({
          log_type: logType,
          date: dateStr,
          description: title,
        });
      }
    }
    
    console.log(`Scraped ${logs.length} entries from Patch`);
    
  } catch (error) {
    console.error('Error scraping Patch:', error);
  }
  
  return logs;
}

export async function GET(request: NextRequest) {
  // Verify this is a legitimate cron request
  if (!verifyCronRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    // Scrape from multiple sources
    const [directLogs, patchLogs] = await Promise.all([
      scrapePoliceLog(),
      scrapePatchPoliceNews(),
    ]);
    
    // Combine and deduplicate (simple dedup by description similarity)
    const allLogs = [...directLogs];
    
    for (const patchLog of patchLogs) {
      const isDuplicate = allLogs.some(log => 
        log.description.toLowerCase().includes(patchLog.description.toLowerCase().slice(0, 30))
      );
      if (!isDuplicate) {
        allLogs.push(patchLog);
      }
    }
    
    // Save to database
    if (allLogs.length > 0) {
      await savePoliceLogs(allLogs);
    }
    
    return NextResponse.json({
      success: true,
      message: `Scraped and saved ${allLogs.length} police log entries`,
      breakdown: {
        direct: directLogs.length,
        patch: patchLogs.length,
      },
    });
    
  } catch (error) {
    console.error('Police log scraper error:', error);
    return NextResponse.json(
      { error: 'Failed to scrape police logs' },
      { status: 500 }
    );
  }
}
