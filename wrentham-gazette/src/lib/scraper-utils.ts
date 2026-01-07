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

// Extract images from HTML
export function extractImages(html: string, baseUrl: string): string[] {
  const images: string[] = [];
  
  // Match img tags
  const imgPattern = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  const matches = html.matchAll(imgPattern);
  
  for (const match of matches) {
    let src = match[1];
    
    // Skip tiny images, icons, tracking pixels
    if (src.includes('pixel') || src.includes('spacer') || src.includes('icon') || src.includes('logo')) {
      continue;
    }
    
    // Skip data URIs and SVGs
    if (src.startsWith('data:') || src.endsWith('.svg')) {
      continue;
    }
    
    // Make absolute URL if relative
    if (src.startsWith('//')) {
      src = 'https:' + src;
    } else if (src.startsWith('/')) {
      const url = new URL(baseUrl);
      src = `${url.protocol}//${url.host}${src}`;
    } else if (!src.startsWith('http')) {
      src = new URL(src, baseUrl).href;
    }
    
    images.push(src);
  }
  
  // Also check for og:image meta tag (often the best image)
  const ogImageMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
  if (ogImageMatch) {
    images.unshift(ogImageMatch[1]); // Put og:image first
  }
  
  return [...new Set(images)]; // Remove duplicates
}

// Download and upload image to Supabase Storage
export async function uploadImageToStorage(
  imageUrl: string, 
  articleSlug: string
): Promise<string | null> {
  const supabase = createServerSupabaseClient();
  
  try {
    // Fetch the image
    const response = await fetch(imageUrl, {
      headers: { 'User-Agent': SCRAPER_CONFIG.userAgent },
      signal: AbortSignal.timeout(15000),
    });
    
    if (!response.ok) {
      console.error(`Failed to fetch image: ${imageUrl}`);
      return null;
    }
    
    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const buffer = await response.arrayBuffer();
    
    // Skip if too small (likely an icon) or too large
    if (buffer.byteLength < 5000 || buffer.byteLength > 10000000) {
      console.log(`Skipping image (size: ${buffer.byteLength}): ${imageUrl}`);
      return null;
    }
    
    // Determine file extension
    let ext = 'jpg';
    if (contentType.includes('png')) ext = 'png';
    else if (contentType.includes('webp')) ext = 'webp';
    else if (contentType.includes('gif')) ext = 'gif';
    
    // Generate filename
    const filename = `articles/${articleSlug}-${Date.now()}.${ext}`;
    
    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('images')
      .upload(filename, buffer, {
        contentType,
        cacheControl: '31536000', // Cache for 1 year
      });
    
    if (error) {
      console.error('Error uploading to Supabase Storage:', error);
      return null;
    }
    
    // Get public URL
    const { data: publicUrlData } = supabase.storage
      .from('images')
      .getPublicUrl(filename);
    
    return publicUrlData.publicUrl;
    
  } catch (error) {
    console.error(`Error processing image ${imageUrl}:`, error);
    return null;
  }
}

// Get a relevant image for an article from Unsplash (fallback)
export async function getUnsplashImage(query: string): Promise<string | null> {
  // Unsplash Source URL (no API key needed, but limited)
  // For better results, sign up at unsplash.com/developers and use their API
  
  const categoryImages: Record<string, string> = {
    'town-government': 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&q=80', // Town hall
    'schools': 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80', // School
    'sports': 'https://images.unsplash.com/photo-1461896836934- voices-of-world?w=800&q=80', // Sports field
    'police-fire': 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=800&q=80', // Police car
    'business': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', // Storefront
    'community': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80', // Community gathering
  };
  
  return categoryImages[query] || categoryImages['community'];
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
  
  if (!process.env.ANTHROPIC_API_KEY) {
    console.log('ANTHROPIC_API_KEY not set, skipping AI generation');
    return null;
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2000,
        messages: [{
          role: 'user',
          content: `You are a local news writer for The Wrentham Gazette, a community newspaper in Wrentham, Massachusetts.

Write a news article based on the following source content. Be factual, concise, and write in a professional local newspaper style. Focus on what matters to Wrentham residents.

Rules:
- Write in third person
- Lead with the most important information
- Include relevant context for local readers
- Keep it between 300-600 words
- Be objective and balanced

Source URL: ${sourceUrl}
Category: ${category}

Source Content:
${content}

Respond ONLY with valid JSON in this exact format, no other text:
{
  "title": "Headline here (under 80 characters)",
  "excerpt": "One sentence summary (under 200 characters)",
  "content": "Full article text with paragraphs separated by double newlines"
}`
        }]
      })
    });

    if (!response.ok) {
      console.error('Claude API error:', response.status, await response.text());
      return null;
    }

    const data = await response.json();
    const text = data.content?.[0]?.text;
    
    if (!text) {
      console.error('No content in Claude response');
      return null;
    }

    // Parse the JSON response
    const article = JSON.parse(text);
    
    // Generate slug from title
    const slug = article.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .slice(0, 80);

    return {
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      slug,
    };
    
  } catch (error) {
    console.error('Error generating article with Claude:', error);
    return null;
  }
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
