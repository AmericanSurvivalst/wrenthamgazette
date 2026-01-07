import { NextRequest, NextResponse } from 'next/server';
import { 
  fetchPage, 
  stripHtml,
  verifyCronRequest,
  extractImages,
  uploadImageToStorage,
  getUnsplashImage
} from '@/lib/scraper-utils';
import { createServerSupabaseClient } from '@/lib/supabase';

// MaxPreps page for King Philip
const MAXPREPS_URL = 'https://www.maxpreps.com/ma/wrentham/king-philip-regional-warriors/';

// KP School news page
const KP_NEWS_URL = 'https://www.kingphilip.org/news/';

interface GameResult {
  sport: string;
  opponent: string;
  date: string;
  score_kp: number;
  score_opponent: number;
  is_win: boolean;
  is_home: boolean;
}

interface SportsNews {
  title: string;
  excerpt: string;
  source_url: string;
  published_date: string;
}

async function scrapeMaxPrepsScores(): Promise<GameResult[]> {
  const results: GameResult[] = [];
  
  try {
    // MaxPreps has scores in a structured format
    // This would need adjustment based on their actual HTML structure
    const html = await fetchPage(MAXPREPS_URL + 'football/');
    
    // Look for recent game results
    const gamePattern = /class="game-result"[^>]*>([\s\S]*?)<\/div>/gi;
    const matches = html.matchAll(gamePattern);
    
    for (const match of matches) {
      const gameHtml = match[1];
      
      // Extract game details
      const opponentMatch = gameHtml.match(/opponent[^>]*>([^<]+)/i);
      const scoreMatch = gameHtml.match(/(\d+)\s*-\s*(\d+)/);
      const dateMatch = gameHtml.match(/(\d{1,2}\/\d{1,2}\/\d{4})/);
      
      if (opponentMatch && scoreMatch && dateMatch) {
        const kpScore = parseInt(scoreMatch[1]);
        const oppScore = parseInt(scoreMatch[2]);
        
        results.push({
          sport: 'football',
          opponent: stripHtml(opponentMatch[1]),
          date: dateMatch[1],
          score_kp: kpScore,
          score_opponent: oppScore,
          is_win: kpScore > oppScore,
          is_home: gameHtml.toLowerCase().includes('home'),
        });
      }
    }
    
    console.log(`Scraped ${results.length} game results from MaxPreps`);
    
  } catch (error) {
    console.error('Error scraping MaxPreps:', error);
  }
  
  return results;
}

async function scrapeKPNews(): Promise<SportsNews[]> {
  const news: SportsNews[] = [];
  
  try {
    const html = await fetchPage(KP_NEWS_URL);
    
    // KP news page structure
    const articlePattern = /<article[^>]*>([\s\S]*?)<\/article>/gi;
    const matches = html.matchAll(articlePattern);
    
    for (const match of matches) {
      const articleHtml = match[1];
      
      // Extract title
      const titleMatch = articleHtml.match(/<h\d[^>]*>(.*?)<\/h\d>/i);
      const title = titleMatch ? stripHtml(titleMatch[1]) : null;
      
      // Extract excerpt/description
      const excerptMatch = articleHtml.match(/<p[^>]*>(.*?)<\/p>/i);
      const excerpt = excerptMatch ? stripHtml(excerptMatch[1]).slice(0, 300) : '';
      
      // Extract link
      const linkMatch = articleHtml.match(/href="([^"]*news[^"]*)"/i);
      const link = linkMatch ? linkMatch[1] : KP_NEWS_URL;
      
      // Extract date
      const dateMatch = articleHtml.match(/(\w+ \d{1,2}, \d{4})/);
      const dateStr = dateMatch ? dateMatch[1] : new Date().toISOString();
      
      if (title) {
        news.push({
          title,
          excerpt,
          source_url: link.startsWith('http') ? link : `https://www.kingphilip.org${link}`,
          published_date: dateStr,
        });
      }
    }
    
    console.log(`Scraped ${news.length} news items from KP website`);
    
  } catch (error) {
    console.error('Error scraping KP news:', error);
  }
  
  return news;
}

// Generate article from game result - use AI if available
async function generateGameRecap(game: GameResult): Promise<{
  title: string;
  content: string;
  excerpt: string;
  slug: string;
}> {
  // Try AI generation first
  if (process.env.ANTHROPIC_API_KEY) {
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
          max_tokens: 1500,
          messages: [{
            role: 'user',
            content: `You are a sports writer for The Wrentham Gazette covering King Philip Regional High School athletics.

Write a game recap article based on these details:

Sport: ${game.sport}
Opponent: ${game.opponent}
Date: ${game.date}
Final Score: King Philip ${game.score_kp}, ${game.opponent} ${game.score_opponent}
Result: ${game.is_win ? 'Win' : 'Loss'}
Location: ${game.is_home ? 'Home' : 'Away'}

Write an engaging 200-300 word game recap. Include:
- Exciting lead paragraph
- Key moments (you can be creative but realistic)
- What this means for the team's season
- Next game preview if relevant

Respond ONLY with valid JSON:
{
  "title": "Headline (under 80 chars)",
  "excerpt": "One sentence summary",
  "content": "Full article text"
}`
          }]
        })
      });

      if (response.ok) {
        const data = await response.json();
        const text = data.content?.[0]?.text;
        if (text) {
          const article = JSON.parse(text);
          const slug = article.title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .slice(0, 80);
          
          return {
            title: article.title,
            content: article.content,
            excerpt: article.excerpt,
            slug,
          };
        }
      }
    } catch (error) {
      console.error('AI recap generation failed, using fallback:', error);
    }
  }

  // Fallback to simple template
  const result = game.is_win ? 'defeat' : 'fall to';
  const title = `Warriors ${result} ${game.opponent}, ${game.score_kp}-${game.score_opponent}`;
  const homeAway = game.is_home ? 'at home' : 'on the road';
  const resultWord = game.is_win ? 'victory' : 'loss';
  
  const content = `The King Philip Warriors ${game.sport} team recorded a ${resultWord} ${homeAway} against ${game.opponent} on ${game.date}. The final score was ${game.score_kp}-${game.score_opponent}.`;
  
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 80);

  return {
    title,
    content,
    excerpt: content,
    slug,
  };
}

// Save sports content to database
async function saveSportsArticle(game: GameResult, pageHtml?: string) {
  const supabase = createServerSupabaseClient();
  
  const article = await generateGameRecap(game);
  
  // Try to get an image
  let featuredImage: string | null = null;
  
  // Try to extract from MaxPreps page
  if (pageHtml) {
    const images = extractImages(pageHtml, MAXPREPS_URL);
    // Look for game photos (usually larger images)
    for (const img of images) {
      if (img.includes('photo') || img.includes('game') || img.includes('action')) {
        featuredImage = await uploadImageToStorage(img, article.slug);
        if (featuredImage) break;
      }
    }
  }
  
  // Fallback to sports stock image
  if (!featuredImage) {
    featuredImage = await getUnsplashImage('sports');
  }
  
  const { error } = await supabase
    .from('articles')
    .upsert(
      {
        slug: `${article.slug}-${game.date.replace(/\//g, '-')}`,
        title: article.title,
        content: article.content,
        excerpt: article.excerpt,
        featured_image: featuredImage,
        category: 'sports',
        tags: [game.sport, 'king-philip', 'warriors', game.opponent.toLowerCase().replace(/\s+/g, '-')],
        is_published: true,
        is_premium: false,
        published_at: new Date(game.date).toISOString(),
      },
      {
        onConflict: 'slug',
        ignoreDuplicates: true,
      }
    );
  
  if (error) {
    console.error('Error saving sports article:', error);
  } else {
    console.log(`Saved sports article: ${article.title}`);
  }
}

export async function GET(request: NextRequest) {
  // Verify this is a legitimate cron request
  if (!verifyCronRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    // Scrape from multiple sources
    const [gameResults, kpNews] = await Promise.all([
      scrapeMaxPrepsScores(),
      scrapeKPNews(),
    ]);
    
    // Create articles for recent game results
    for (const game of gameResults) {
      await saveSportsArticle(game);
    }
    
    // Log KP news for potential manual article creation
    // In production, could use AI to generate full articles from these
    console.log('KP News items to potentially cover:', kpNews.map(n => n.title));
    
    return NextResponse.json({
      success: true,
      message: `Processed ${gameResults.length} games, ${kpNews.length} news items`,
      games: gameResults,
      news_titles: kpNews.map(n => n.title),
    });
    
  } catch (error) {
    console.error('Sports scraper error:', error);
    return NextResponse.json(
      { error: 'Failed to scrape sports' },
      { status: 500 }
    );
  }
}
