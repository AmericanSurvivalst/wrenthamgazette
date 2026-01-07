import { NextRequest, NextResponse } from 'next/server';
import { verifyCronRequest } from '@/lib/scraper-utils';
import { createServerSupabaseClient } from '@/lib/supabase';

// This runs every Sunday at 5 AM to generate the weekly digest
// It compiles the week's top stories and can send via email service

interface WeeklyDigest {
  week_start: string;
  week_end: string;
  top_articles: Array<{
    title: string;
    excerpt: string;
    slug: string;
    category: string;
  }>;
  upcoming_events: Array<{
    title: string;
    event_date: string;
    location?: string;
  }>;
  police_log_summary: string;
  subscriber_count: number;
}

async function generateWeeklyDigest(): Promise<WeeklyDigest> {
  const supabase = createServerSupabaseClient();
  
  // Calculate date range for past week
  const now = new Date();
  const weekEnd = now.toISOString();
  const weekStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
  
  // Get top articles from the past week
  const { data: articles } = await supabase
    .from('articles')
    .select('title, excerpt, slug, category, view_count')
    .eq('is_published', true)
    .gte('published_at', weekStart)
    .lte('published_at', weekEnd)
    .order('view_count', { ascending: false })
    .limit(10);
  
  // Get upcoming events for the next week
  const nextWeekEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString();
  
  const { data: events } = await supabase
    .from('events')
    .select('title, event_date, location')
    .eq('is_published', true)
    .gte('event_date', weekEnd)
    .lte('event_date', nextWeekEnd)
    .order('event_date', { ascending: true })
    .limit(10);
  
  // Get police log entries from past week
  const { data: logs } = await supabase
    .from('public_safety_logs')
    .select('log_type, description')
    .gte('created_at', weekStart)
    .lte('created_at', weekEnd);
  
  // Generate summary of police activity
  const incidentCount = logs?.filter(l => l.log_type === 'incident').length || 0;
  const arrestCount = logs?.filter(l => l.log_type === 'arrest').length || 0;
  const fireCount = logs?.filter(l => l.log_type === 'fire').length || 0;
  
  const policeSummary = `This week: ${incidentCount} incidents reported, ${arrestCount} arrests, ${fireCount} fire calls.`;
  
  // Get subscriber count
  const { count: subscriberCount } = await supabase
    .from('newsletter_subscribers')
    .select('*', { count: 'exact', head: true })
    .eq('is_confirmed', true);
  
  return {
    week_start: weekStart,
    week_end: weekEnd,
    top_articles: articles || [],
    upcoming_events: events || [],
    police_log_summary: policeSummary,
    subscriber_count: subscriberCount || 0,
  };
}

// Generate HTML email content for the digest
function generateDigestEmail(digest: WeeklyDigest): string {
  const formattedDate = new Date(digest.week_end).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Wrentham Gazette Weekly Digest</title>
</head>
<body style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #faf9f7;">
  <header style="text-align: center; border-bottom: 2px solid #1a1a1a; padding-bottom: 20px; margin-bottom: 20px;">
    <h1 style="font-size: 28px; margin: 0; color: #1a1a1a;">
      The Wrentham <span style="color: #8b2332;">Gazette</span>
    </h1>
    <p style="color: #6b6b6b; font-size: 14px; margin-top: 8px;">
      Weekly Digest — ${formattedDate}
    </p>
  </header>
  
  <section style="margin-bottom: 30px;">
    <h2 style="font-size: 20px; border-bottom: 1px solid #e0ddd8; padding-bottom: 8px;">
      Top Stories This Week
    </h2>
    ${digest.top_articles.map(article => `
      <article style="margin-bottom: 20px;">
        <h3 style="font-size: 18px; margin: 0 0 8px 0;">
          <a href="https://wrenthamgazette.com/articles/${article.slug}" 
             style="color: #1a1a1a; text-decoration: none;">
            ${article.title}
          </a>
        </h3>
        <p style="color: #6b6b6b; font-size: 14px; margin: 0;">
          ${article.excerpt || ''}
        </p>
      </article>
    `).join('')}
  </section>
  
  <section style="margin-bottom: 30px; background-color: #f5f3ef; padding: 15px; border-radius: 4px;">
    <h2 style="font-size: 18px; margin: 0 0 15px 0;">
      📅 Upcoming This Week
    </h2>
    <ul style="margin: 0; padding-left: 20px;">
      ${digest.upcoming_events.map(event => `
        <li style="margin-bottom: 8px; font-size: 14px;">
          <strong>${event.title}</strong><br>
          <span style="color: #6b6b6b;">
            ${new Date(event.event_date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            ${event.location ? ` — ${event.location}` : ''}
          </span>
        </li>
      `).join('')}
    </ul>
  </section>
  
  <section style="margin-bottom: 30px;">
    <h2 style="font-size: 18px;">🚔 Police & Fire Summary</h2>
    <p style="font-size: 14px; color: #6b6b6b;">
      ${digest.police_log_summary}
      <a href="https://wrenthamgazette.com/category/police-fire" style="color: #8b2332;">
        View full log →
      </a>
    </p>
  </section>
  
  <footer style="text-align: center; border-top: 1px solid #e0ddd8; padding-top: 20px; color: #6b6b6b; font-size: 12px;">
    <p>
      <a href="https://wrenthamgazette.com" style="color: #8b2332;">Visit Website</a> •
      <a href="https://wrenthamgazette.com/unsubscribe" style="color: #8b2332;">Unsubscribe</a>
    </p>
    <p>© 2026 The Wrentham Gazette</p>
  </footer>
</body>
</html>
  `.trim();
}

// Send the digest to all confirmed subscribers
async function sendDigestToSubscribers(digest: WeeklyDigest, htmlContent: string) {
  const supabase = createServerSupabaseClient();
  
  // Get all confirmed subscribers
  const { data: subscribers } = await supabase
    .from('newsletter_subscribers')
    .select('email')
    .eq('is_confirmed', true)
    .is('unsubscribed_at', null);
  
  if (!subscribers || subscribers.length === 0) {
    console.log('No subscribers to send digest to');
    return 0;
  }
  
  // In production, you'd use an email service like Resend, SendGrid, etc.
  // Example with Resend:
  //
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // 
  // for (const subscriber of subscribers) {
  //   await resend.emails.send({
  //     from: 'digest@wrenthamgazette.com',
  //     to: subscriber.email,
  //     subject: `Wrentham Gazette Weekly Digest — ${new Date().toLocaleDateString()}`,
  //     html: htmlContent,
  //   });
  // }
  
  console.log(`Would send digest to ${subscribers.length} subscribers`);
  return subscribers.length;
}

export async function GET(request: NextRequest) {
  // Verify this is a legitimate cron request
  if (!verifyCronRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    // Generate the digest
    const digest = await generateWeeklyDigest();
    
    // Generate email HTML
    const htmlContent = generateDigestEmail(digest);
    
    // Send to subscribers
    const sentCount = await sendDigestToSubscribers(digest, htmlContent);
    
    return NextResponse.json({
      success: true,
      message: `Generated weekly digest`,
      stats: {
        articles: digest.top_articles.length,
        events: digest.upcoming_events.length,
        subscribers: digest.subscriber_count,
        sent: sentCount,
      },
    });
    
  } catch (error) {
    console.error('Digest generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate digest' },
      { status: 500 }
    );
  }
}
