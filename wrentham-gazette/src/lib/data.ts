import { createClient } from '@supabase/supabase-js';
import { Article, Event, PoliceLog } from '@/types';
import * as mockData from './mock-data';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create client only if credentials exist
const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// Check if we should use Supabase (has data) or mock
async function hasSupabaseData(): Promise<boolean> {
  if (!supabase) return false;
  
  try {
    const { count } = await supabase
      .from('articles')
      .select('*', { count: 'exact', head: true })
      .eq('is_published', true);
    
    return (count || 0) > 0;
  } catch {
    return false;
  }
}

// Get latest articles
export async function getLatestArticles(limit: number = 10): Promise<Article[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false })
        .limit(limit);
      
      if (!error && data && data.length > 0) {
        return data as Article[];
      }
    } catch (e) {
      console.error('Supabase error:', e);
    }
  }
  
  // Fallback to mock data
  return mockData.getLatestArticles(limit);
}

// Get articles by category
export async function getArticlesByCategory(category: string, limit?: number): Promise<Article[]> {
  if (supabase) {
    try {
      let query = supabase
        .from('articles')
        .select('*')
        .eq('is_published', true)
        .eq('category', category)
        .order('published_at', { ascending: false });
      
      if (limit) {
        query = query.limit(limit);
      }
      
      const { data, error } = await query;
      
      if (!error && data && data.length > 0) {
        return data as Article[];
      }
    } catch (e) {
      console.error('Supabase error:', e);
    }
  }
  
  return mockData.getArticlesByCategory(category, limit);
}

// Get article by slug
export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();
      
      if (!error && data) {
        return data as Article;
      }
    } catch (e) {
      console.error('Supabase error:', e);
    }
  }
  
  return mockData.getArticleBySlug(slug);
}

// Get upcoming events
export async function getUpcomingEvents(limit: number = 4): Promise<Event[]> {
  if (supabase) {
    try {
      const now = new Date().toISOString();
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('is_published', true)
        .gte('event_date', now)
        .order('event_date', { ascending: true })
        .limit(limit);
      
      if (!error && data && data.length > 0) {
        return data as Event[];
      }
    } catch (e) {
      console.error('Supabase error:', e);
    }
  }
  
  return mockData.getUpcomingEvents(limit);
}

// Get recent police logs
export async function getRecentPoliceLogs(limit: number = 5): Promise<PoliceLog[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('public_safety_logs')
        .select('*')
        .eq('is_published', true)
        .order('date', { ascending: false })
        .order('time', { ascending: false })
        .limit(limit);
      
      if (!error && data && data.length > 0) {
        return data as PoliceLog[];
      }
    } catch (e) {
      console.error('Supabase error:', e);
    }
  }
  
  return mockData.getRecentPoliceLogs(limit);
}

// Get all article slugs (for sitemap and static generation)
export async function getAllArticleSlugs(): Promise<string[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('slug')
        .eq('is_published', true);
      
      if (!error && data && data.length > 0) {
        return data.map(a => a.slug);
      }
    } catch (e) {
      console.error('Supabase error:', e);
    }
  }
  
  return mockData.mockArticles.map(a => a.slug);
}
