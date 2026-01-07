import { createServerSupabaseClient } from './supabase';

// Base scraper configuration
export const SCRAPER_CONFIG = {
  userAgent: 'WrenthamGazette/1.0 (Local News Bot; +https://wrenthamgazette.com)',
  timeout: 30000,
};

// Fetch HTML from a URL
export async function fetchPage(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      'User-Agent': SCRAPER_CONFIG.userAgent,
    },
    signal: AbortSignal.timeout(SCRAPER_CONFIG.timeout),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

// Simple HTML text extraction (no cheerio needed for basic parsing)
export function extractText(html: string, startMarker: string, endMarker: string): string {
  const startIndex = html.indexOf(startMarker);
  if (startIndex === -1) return '';
  
  const endIndex = html.indexOf(endMarker, startIndex);
  if (endIndex === -1) return '';
  
  return html.slice(startIndex + startMarker.length, endIndex).trim();
}

// Strip HTML tags
export function stripHtml(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Parse date strings commonly found on town websites
export function parseDate(dateStr: string): Date | null {
  const cleaned = dateStr.trim();
  
  // Try various formats
  const formats = [
    /(\d{1,2})\/(\d{1,2})\/(\d{4})/,  // MM/DD/YYYY
    /(\w+)\s+(\d{1,2}),?\s+(\d{4})/,   // Month DD, YYYY
    /(\d{4})-(\d{2})-(\d{2})/,          // YYYY-MM-DD
  ];

  for (const format of formats) {
    const match = cleaned.match(format);
    if (match) {
      const date = new Date(cleaned);
      if (!isNaN(date.getTime())) {
        return date;
      }
    }
  }

  // Last resort: let JS try to parse it
  const date = new Date(cleaned);
  return isNaN(date.getTime()) ? null : date;
}

// Save events to database
export async function saveEvents(events: Array<{
  title: string;
  description?: string;
  location?: string;
  event_date: string;
  category?: string;
  source_url?: string;
}>) {
  const supabase = createServerSupabaseClient();
  
  for (const event of events) {
    // Upsert based on title + date to avoid duplicates
    const { error } = await supabase
      .from('events')
      .upsert(
        {
          ...event,
          is_published: true,
        },
        {
          onConflict: 'title,event_date',
          ignoreDuplicates: true,
        }
      );

    if (error) {
      console.error('Error saving event:', error);
    }
  }
}

// Save police logs to database
export async function savePoliceLogs(logs: Array<{
  log_type: 'arrest' | 'incident' | 'fire';
  date: string;
  time?: string;
  location?: string;
  description: string;
}>) {
  const supabase = createServerSupabaseClient();
  
  const { error } = await supabase
    .from('public_safety_logs')
    .insert(logs.map(log => ({
      ...log,
      is_published: true,
    })));

  if (error) {
    console.error('Error saving police logs:', error);
  }
}

// Generate article from scraped content using AI
export async function generateArticleFromContent(
  content: string,
  category: string,
  sourceUrl: string
): Promise<{
  title: string;
  excerpt: string;
  content: string;
  slug: string;
} | null> {
  // This would call Claude API to generate article
  // For now, return null - implement when ready
  
  // Example implementation:
  // const response = await fetch('https://api.anthropic.com/v1/messages', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'x-api-key': process.env.ANTHROPIC_API_KEY!,
  //     'anthropic-version': '2023-06-01',
  //   },
  //   body: JSON.stringify({
  //     model: 'claude-sonnet-4-20250514',
  //     max_tokens: 2000,
  //     messages: [{
  //       role: 'user',
  //       content: `Write a local news article based on this content. Be factual and concise. Format as JSON with title, excerpt, and content fields.\n\nSource: ${sourceUrl}\n\nContent:\n${content}`
  //     }]
  //   })
  // });
  
  return null;
}

// Verify cron request is from Vercel
export function verifyCronRequest(request: Request): boolean {
  const authHeader = request.headers.get('authorization');
  
  // In production, verify with CRON_SECRET
  if (process.env.CRON_SECRET) {
    return authHeader === `Bearer ${process.env.CRON_SECRET}`;
  }
  
  // In development, allow all
  return process.env.NODE_ENV === 'development';
}
