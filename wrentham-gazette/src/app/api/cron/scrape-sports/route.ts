import { NextRequest, NextResponse } from 'next/server';
import { 
  fetchPage, 
  stripHtml,
  verifyCronRequest 
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

// Generate article from game result
function generateGameRecapTitle(game: GameResult): string {
  const result = game.is_win ? 'defeat' : 'fall to';
  const score = `${game.score_kp}-${game.score_opponent}`;
  return `Warriors ${result} ${game.opponent}, ${score}`;
}

function generateGameRecapContent(game: GameResult): string {
  const homeAway = game.is_home ? 'at home' : 'on the road';
  const result = game.is_win ? 'victory' : 'loss';
  
  return `The King Philip Warriors ${game.sport} team recorded a ${result} ${homeAway} against ${game.opponent} on ${game.date}. The final score was ${game.score_kp}-${game.score_opponent}.`;
}

// Save sports content to database
async function saveSportsArticle(game: GameResult) {
  const supabase = createServerSupabaseClient();
  
  const title = generateGameRecapTitle(game);
  const content = generateGameRecapContent(game);
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 100);
  
  const { error } = await supabase
    .from('articles')
    .upsert(
      {
        slug: `${slug}-${game.date.replace(/\//g, '-')}`,
        title,
        content,
        excerpt: content,
        category: 'sports',
        tags: [game.sport, 'king-philip', 'warriors', game.opponent.toLowerCase()],
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
