import { Article, Event, PoliceLog } from '@/types';

// NOTE: This is placeholder content for development.
// In production, all content will come from Supabase and the automated scrapers.
// Articles marked as placeholders should be replaced with real scraped content.

export const mockArticles: Article[] = [
  {
    id: '1',
    slug: 'site-launch-announcement',
    title: 'Welcome to The Wrentham Gazette',
    subtitle: 'A new source for local news in Wrentham, Massachusetts',
    content: `The Wrentham Gazette is now live.

We are an independent, digital-first news source dedicated to covering Wrentham, Massachusetts. Our mission is to keep residents informed about the decisions, events, and stories that shape daily life in our town.

What we cover:

Town Government: Select Board meetings, Planning Board hearings, Town Meeting votes, and local policy decisions.

Schools: News from the King Philip Regional School District and Wrentham Public Schools, including academics, sports, and activities.

Sports: Coverage of King Philip Warriors athletics across all seasons.

Police & Fire: Public safety news and weekly incident logs.

Business: Local business openings, closings, and economic developments.

Community: Events, people, and the stories that connect Wrentham residents.

Our content is updated daily through a combination of original reporting and automated monitoring of town sources. You can subscribe to our free newsletter to receive weekly digests and breaking news alerts.

Thank you for reading. We look forward to serving our community.`,
    excerpt: 'Introducing The Wrentham Gazette, an independent local news source for Wrentham, Massachusetts.',
    featured_image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop',
    author_name: 'The Wrentham Gazette',
    category: 'community',
    tags: ['announcement', 'wrentham'],
    is_premium: false,
    is_published: true,
    published_at: '2026-01-06T12:00:00Z',
    created_at: '2026-01-06T12:00:00Z',
    updated_at: '2026-01-06T12:00:00Z',
  },
  {
    id: '2',
    slug: 'upcoming-select-board-meeting-january-8',
    title: 'Select Board to Meet January 8',
    subtitle: 'Regular meeting scheduled for 7 PM at Town Hall',
    content: `The Wrentham Select Board will hold its regular meeting on Wednesday, January 8, 2026, at 7:00 PM in the Selectmen's Meeting Room at Town Hall, 79 South Street.

Meeting agendas are posted at least 48 hours in advance on the town website at wrentham.gov under Posted Meetings.

Residents can attend in person. Meeting minutes from previous sessions are available on the town website.

For more information about Select Board meetings and agendas, visit wrentham.gov or contact the Town Administrator's Office.`,
    excerpt: 'Regular meeting scheduled for Wednesday, January 8 at 7 PM at Town Hall.',
    featured_image: 'https://images.unsplash.com/photo-1577415124269-fc1140815f67?w=800&h=500&fit=crop',
    author_name: 'The Wrentham Gazette',
    category: 'town-government',
    tags: ['select-board', 'meeting', 'town-hall'],
    is_premium: false,
    is_published: true,
    published_at: '2026-01-06T10:00:00Z',
    created_at: '2026-01-06T10:00:00Z',
    updated_at: '2026-01-06T10:00:00Z',
  },
  {
    id: '3',
    slug: 'fiske-library-january-programs',
    title: 'Fiske Library Announces January Programs',
    subtitle: 'Quilt exhibit, collectibles appraisal, and winter reading challenge',
    content: `The Fiske Public Library has announced its lineup of programs for January 2026.

Quilt Exhibit: A new exhibit featuring quilts by Mary Sandison opens with a reception on Friday, January 10 at 12:00 PM. The exhibit will remain on display through the month.

Collectibles Appraisal: Perfect Pastime 617 will offer free appraisals of collectibles on Friday, January 17 at 10:15 AM. Bring your items to learn about their history and value.

Winter Reading Challenge: The library's annual Winter Reading Challenge runs through February 28. Participants of all ages can log their reading to earn entries into prize drawings. Sign up at the library or through the online catalog.

Regular Programs: Story times for children continue on their regular schedule. Check the library calendar at fiskelib.org for specific dates and times.

The Fiske Public Library is located at 110 Randall Road. For more information, visit fiskelib.org or call 508-384-5440.`,
    excerpt: 'Quilt exhibit, collectibles appraisal event, and winter reading challenge among January offerings at Fiske Library.',
    featured_image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=500&fit=crop',
    author_name: 'The Wrentham Gazette',
    category: 'community',
    tags: ['library', 'fiske', 'events'],
    is_premium: false,
    is_published: true,
    published_at: '2026-01-05T14:00:00Z',
    created_at: '2026-01-05T14:00:00Z',
    updated_at: '2026-01-05T14:00:00Z',
  },
  {
    id: '4',
    slug: 'planning-board-meeting-january-14',
    title: 'Planning Board Meeting Set for January 14',
    subtitle: 'Regular meeting at 7 PM in Town Hall',
    content: `The Wrentham Planning Board will hold its regular meeting on Tuesday, January 14, 2026, at 7:00 PM at Town Hall, 79 South Street.

The Planning Board reviews applications for subdivisions, site plans, special permits, and other land use matters. Meeting agendas are posted on the town website at wrentham.gov under Posted Meetings.

Residents interested in specific applications or land use matters can attend meetings in person. Previous meeting minutes and decisions are available on the town website.

For questions about Planning Board matters, contact the Planning Department at Town Hall.`,
    excerpt: 'Regular Planning Board meeting scheduled for Tuesday, January 14 at 7 PM.',
    featured_image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
    author_name: 'The Wrentham Gazette',
    category: 'town-government',
    tags: ['planning-board', 'meeting', 'town-hall'],
    is_premium: false,
    is_published: true,
    published_at: '2026-01-04T10:00:00Z',
    created_at: '2026-01-04T10:00:00Z',
    updated_at: '2026-01-04T10:00:00Z',
  },
  {
    id: '5',
    slug: 'about-king-philip-regional-schools',
    title: 'About King Philip Regional School District',
    subtitle: 'Serving students from Wrentham, Norfolk, and Plainville',
    content: `The King Philip Regional School District serves students in grades 7 through 12 from three communities: Wrentham, Norfolk, and Plainville.

The district operates King Philip Regional Middle School and King Philip Regional High School, both located in Wrentham.

King Philip is a member of the Hockomock League, competing in athletics against schools including North Attleborough, Franklin, Mansfield, Oliver Ames, and others.

The district is known for strong academic programs and award-winning extracurricular activities, including the King Philip Marching Band, known as "The Pride and The Passion."

For information about King Philip Regional Schools, visit kingphilip.org.

Wrentham also operates its own elementary schools through Wrentham Public Schools, separate from the regional district.`,
    excerpt: 'King Philip Regional School District serves students in grades 7-12 from Wrentham, Norfolk, and Plainville.',
    featured_image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
    author_name: 'The Wrentham Gazette',
    category: 'schools',
    tags: ['king-philip', 'schools', 'education'],
    is_premium: false,
    is_published: true,
    published_at: '2026-01-03T12:00:00Z',
    created_at: '2026-01-03T12:00:00Z',
    updated_at: '2026-01-03T12:00:00Z',
  },
  {
    id: '6',
    slug: 'wrentham-village-premium-outlets-info',
    title: 'About Wrentham Village Premium Outlets',
    subtitle: 'One of New England\'s largest outlet shopping destinations',
    content: `Wrentham Village Premium Outlets is one of the largest outlet shopping centers in New England, featuring over 170 stores.

Located at 1 Premium Outlets Boulevard, at the intersection of I-495 and Route 1A, the outlet center draws shoppers from across Massachusetts and neighboring states.

The center is open daily and features a mix of designer and name-brand stores offering discounted merchandise.

Wrentham Village Premium Outlets is one of the town's largest employers and a significant contributor to local tax revenue.

For store listings, hours, and directions, visit premiumoutlets.com/outlet/wrentham-village.`,
    excerpt: 'Wrentham Village Premium Outlets features over 170 stores at the intersection of I-495 and Route 1A.',
    featured_image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop',
    author_name: 'The Wrentham Gazette',
    category: 'business',
    tags: ['premium-outlets', 'shopping', 'business'],
    is_premium: false,
    is_published: true,
    published_at: '2026-01-02T12:00:00Z',
    created_at: '2026-01-02T12:00:00Z',
    updated_at: '2026-01-02T12:00:00Z',
  },
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Select Board Meeting',
    description: 'Regular meeting of the Wrentham Select Board. Agendas posted at wrentham.gov.',
    location: 'Town Hall, 79 South Street',
    event_date: '2026-01-08T19:00:00Z',
    category: 'town-meeting',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Quilt Exhibit Opening',
    description: 'Opening reception for Mary Sandison\'s quilt exhibit at Fiske Public Library.',
    location: 'Fiske Public Library, 110 Randall Road',
    event_date: '2026-01-10T12:00:00Z',
    category: 'library',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: '3',
    title: 'Planning Board Meeting',
    description: 'Regular meeting of the Wrentham Planning Board. Agendas posted at wrentham.gov.',
    location: 'Town Hall, 79 South Street',
    event_date: '2026-01-14T19:00:00Z',
    category: 'town-meeting',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: '4',
    title: 'Collectibles Appraisal',
    description: 'Free appraisals by Perfect Pastime 617. Bring your collectibles to learn about their history and value.',
    location: 'Fiske Public Library, 110 Randall Road',
    event_date: '2026-01-17T10:15:00Z',
    category: 'library',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
];

// Police logs will be populated by the automated scraper
// These are placeholder entries showing the format
export const mockPoliceLogs: PoliceLog[] = [
  {
    id: '1',
    log_type: 'incident',
    date: '2026-01-06',
    time: '08:00',
    location: 'Wrentham',
    description: 'Police log entries will be populated automatically from town sources. Check back for updates.',
    created_at: '2026-01-06T08:00:00Z',
  },
];

// Helper function to get articles by category
export function getArticlesByCategory(category: string, limit?: number): Article[] {
  const filtered = mockArticles.filter(a => a.category === category && a.is_published);
  return limit ? filtered.slice(0, limit) : filtered;
}

// Helper function to get latest articles
export function getLatestArticles(limit: number = 10): Article[] {
  return mockArticles
    .filter(a => a.is_published)
    .sort((a, b) => new Date(b.published_at!).getTime() - new Date(a.published_at!).getTime())
    .slice(0, limit);
}

// Helper function to get article by slug
export function getArticleBySlug(slug: string): Article | undefined {
  return mockArticles.find(a => a.slug === slug && a.is_published);
}

// Helper function to get upcoming events
export function getUpcomingEvents(limit: number = 4): Event[] {
  const now = new Date();
  return mockEvents
    .filter(e => new Date(e.event_date) >= now && e.is_published)
    .sort((a, b) => new Date(a.event_date).getTime() - new Date(b.event_date).getTime())
    .slice(0, limit);
}

// Helper function to get recent police logs
export function getRecentPoliceLogs(limit: number = 5): PoliceLog[] {
  return mockPoliceLogs
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, limit);
}
