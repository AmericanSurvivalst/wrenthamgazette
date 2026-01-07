export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  content: string;
  excerpt?: string;
  featured_image?: string;
  author_id?: string;
  author_name?: string;
  category: Category;
  tags?: string[];
  is_premium: boolean;
  is_published: boolean;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export type Category = 
  | 'town-government'
  | 'schools'
  | 'sports'
  | 'police-fire'
  | 'business'
  | 'community'
  | 'opinion';

export interface CategoryInfo {
  slug: Category;
  name: string;
  description: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { slug: 'town-government', name: 'Town Government', description: 'Select Board, Planning, Town Meeting, and local policy' },
  { slug: 'schools', name: 'Schools', description: 'King Philip Regional and Wrentham Public Schools' },
  { slug: 'sports', name: 'Sports', description: 'King Philip Warriors athletics coverage' },
  { slug: 'police-fire', name: 'Police & Fire', description: 'Public safety news and incident logs' },
  { slug: 'business', name: 'Business', description: 'Local business news and economic development' },
  { slug: 'community', name: 'Community', description: 'Events, people, and community life' },
  { slug: 'opinion', name: 'Opinion', description: 'Editorials and letters to the editor' },
];

export interface Event {
  id: string;
  title: string;
  description?: string;
  location?: string;
  event_date: string;
  event_end_date?: string;
  category?: string;
  source_url?: string;
  is_published: boolean;
  created_at: string;
}

export interface PoliceLog {
  id: string;
  log_type: 'arrest' | 'incident' | 'fire';
  date: string;
  time?: string;
  location?: string;
  description: string;
  source?: string;
  created_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  is_confirmed: boolean;
  subscribed_at: string;
  unsubscribed_at?: string;
}
