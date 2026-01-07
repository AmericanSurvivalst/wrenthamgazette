import { Article, Event, PoliceLog } from '@/types';

export const mockArticles: Article[] = [
  {
    id: '1',
    slug: 'warriors-complete-perfect-season-state-championship',
    title: 'Warriors Complete Perfect Season with State Championship Win at Gillette',
    subtitle: 'King Philip defeats North Attleborough 21-10 to claim Division III title',
    content: `The King Philip Warriors football team capped an undefeated season in the most emphatic way possible Friday night, defeating Hockomock League rival North Attleborough 21-10 at Gillette Stadium to claim the MIAA Division III State Championship.

It's the program's fourth state title in nine years and third in the last decade, cementing King Philip's status as one of the premier football programs in Massachusetts.

"These kids worked for this every single day," head coach Brian Lee said after the game. "From January through today, they never wavered. They believed in each other and they believed in the process."

The Warriors (13-0) jumped out to a 14-0 lead in the first half and never looked back. Senior quarterback led the offense with precision, while the defense held the Rocketeers to just 180 total yards.

For the seniors, it was a storybook ending to their high school careers.

"We talked about this moment since we were freshmen," said senior captain and linebacker. "To actually do it, to go undefeated and win it all at Gillette — there's nothing like it."

The victory parade is scheduled for Saturday at 11 AM, beginning at King Philip Regional High School and proceeding through downtown Wrentham.`,
    excerpt: 'King Philip defeats North Attleborough 21-10 to claim Division III title and cap undefeated 13-0 campaign. It\'s the program\'s fourth state championship in nine years.',
    featured_image: '/images/kp-football-champs.jpg',
    author_name: 'The Wrentham Gazette Staff',
    category: 'sports',
    tags: ['football', 'king-philip', 'state-championship', 'warriors'],
    is_premium: false,
    is_published: true,
    published_at: '2025-12-06T22:00:00Z',
    created_at: '2025-12-06T22:00:00Z',
    updated_at: '2025-12-06T22:00:00Z',
  },
  {
    id: '2',
    slug: 'town-meeting-approves-dpw-facility-mbta-zoning',
    title: 'Town Meeting Approves $4.2M DPW Facility, MBTA Zoning Amendment',
    subtitle: 'Voters green-light major infrastructure investment and state-mandated zoning changes',
    content: `Wrentham voters approved two major items at the Fall Town Meeting Monday night, including a $4.2 million appropriation for a new Department of Public Works facility and amendments to comply with the state's MBTA Communities Act.

The DPW facility article passed with overwhelming support after months of planning and outreach by town officials. The new facility will replace aging infrastructure that has served the town for over 40 years.

"This has been a long time coming," said DPW Director. "Our current facility simply cannot meet the needs of a growing community. This investment will serve Wrentham for the next 50 years."

The MBTA Communities zoning amendment, which creates an overlay district allowing for increased housing density near transit, passed after a more contentious debate. The state requires communities served by the MBTA to zone for multi-family housing or risk losing state funding.

Select Board Chair addressed concerns from residents worried about the impact on town character.

"We worked hard to craft zoning that meets state requirements while respecting what makes Wrentham special," she said. "This overlay affects a limited area and includes design standards that will ensure any development fits our community."

The meeting also approved several routine budget transfers and committee appointments.`,
    excerpt: 'Voters green-light major infrastructure investment and state-mandated zoning changes at Fall Town Meeting.',
    category: 'town-government',
    tags: ['town-meeting', 'dpw', 'zoning', 'mbta'],
    is_premium: false,
    is_published: true,
    published_at: '2025-11-18T21:00:00Z',
    created_at: '2025-11-18T21:00:00Z',
    updated_at: '2025-11-18T21:00:00Z',
  },
  {
    id: '3',
    slug: 'kp-marching-band-wins-national-championship',
    title: 'King Philip Marching Band Wins National Championship for Second Straight Year',
    subtitle: '"The Pride and The Passion" claims USBands Division II Open title',
    content: `The King Philip Regional High School Marching Band, known as "The Pride and The Passion," has done it again.

The band claimed the USBands Division II Open National Championship for the second consecutive year, continuing a tradition of excellence that has made King Philip one of the most respected marching band programs in the country.

"Our students put in thousands of hours of work to achieve this," said band director. "The dedication, the early mornings, the late nights — it all paid off on that field."

The band performed their 2025 show to a packed audience at the championship competition, earning top marks in music, visual, and general effect categories.

For the senior members, it was an emotional culmination of their high school marching careers.

"I've been part of this band since freshman year, and to go out with back-to-back national championships is incredible," said senior drum major. "This program taught me discipline, teamwork, and what it means to be part of something bigger than yourself."

The victory adds to an already impressive trophy case that includes 32 MICCA Finals Gold Medal awards and multiple state and regional titles spanning decades.`,
    excerpt: '"The Pride and The Passion" claims USBands Division II Open title for second consecutive year.',
    category: 'schools',
    tags: ['marching-band', 'king-philip', 'national-championship'],
    is_premium: false,
    is_published: true,
    published_at: '2025-11-10T18:00:00Z',
    created_at: '2025-11-10T18:00:00Z',
    updated_at: '2025-11-10T18:00:00Z',
  },
  {
    id: '4',
    slug: 'fiske-library-winter-reading-challenge',
    title: 'Fiske Library Launches Winter Reading Challenge for All Ages',
    subtitle: 'Program runs through February with prizes for participants',
    content: `The Fiske Public Library has launched its annual Winter Reading Challenge, inviting Wrentham residents of all ages to curl up with a good book during the cold months ahead.

The program runs from January 2 through February 28, with participants logging their reading to earn entries into prize drawings.

"Winter is the perfect time to discover new books and authors," said Library Director Kim Shipala. "Whether you prefer mysteries, biographies, or picture books, we have something for everyone."

Children, teens, and adults each have separate tracks with age-appropriate goals and prizes. Participants can sign up at the library or through the online catalog.

The library is also hosting a series of winter programs including a quilt exhibit opening January 10, a collectibles appraisal event January 17, and ongoing story times for young children.

For more information, visit fiskelib.org or call 508-384-5440.`,
    excerpt: 'Program runs through February with prizes for participants of all ages.',
    category: 'community',
    tags: ['library', 'fiske', 'reading', 'events'],
    is_premium: false,
    is_published: true,
    published_at: '2026-01-02T10:00:00Z',
    created_at: '2026-01-02T10:00:00Z',
    updated_at: '2026-01-02T10:00:00Z',
  },
  {
    id: '5',
    slug: 'new-stores-opening-premium-outlets-spring',
    title: 'Three New Stores Opening at Wrentham Village Premium Outlets This Spring',
    subtitle: 'Expansion continues at popular shopping destination',
    content: `Wrentham Village Premium Outlets will welcome three new retailers this spring as the popular shopping destination continues to attract national brands.

The new stores, expected to open between March and May, will add to the outlet center's already extensive lineup of over 170 stores.

"We're always looking to bring the best brands to our shoppers," said the outlet's general manager. "These additions reflect current trends and what our customers have been asking for."

The outlet center, located at the intersection of I-495 and Route 1A, draws shoppers from across New England and remains one of Wrentham's largest employers and tax revenue generators.

Specific store announcements and opening dates will be released in the coming weeks.`,
    excerpt: 'Expansion continues at popular shopping destination with three new retailers expected by May.',
    category: 'business',
    tags: ['premium-outlets', 'retail', 'business'],
    is_premium: false,
    is_published: true,
    published_at: '2025-12-28T14:00:00Z',
    created_at: '2025-12-28T14:00:00Z',
    updated_at: '2025-12-28T14:00:00Z',
  },
  {
    id: '6',
    slug: 'select-board-reviews-2026-budget-priorities',
    title: 'Select Board Reviews 2026 Budget Priorities, Eyes New Fire Station Study',
    subtitle: 'Town Administrator presents preliminary spending plan',
    content: `The Select Board began discussions on the fiscal year 2026 budget at their meeting Tuesday night, with Town Administrator presenting a preliminary spending plan that focuses on public safety infrastructure.

Among the priorities identified is funding for a feasibility study on a new fire station, which officials say is needed to address the town's growing population and aging facilities.

"We've been talking about fire station needs for several years now," the Town Administrator said. "It's time to move from discussion to action with a comprehensive study."

The preliminary budget also includes increases for education funding to the King Philip Regional School District and Wrentham Public Schools, as well as modest increases for town departments.

The Select Board will hold additional budget workshops in January and February before the final budget is presented at the Spring Town Meeting in June.

Residents can view budget documents on the town website and attend upcoming meetings to provide input.`,
    excerpt: 'Town Administrator presents preliminary spending plan with focus on public safety infrastructure.',
    category: 'town-government',
    tags: ['budget', 'select-board', 'fire-station'],
    is_premium: false,
    is_published: true,
    published_at: '2026-01-03T21:00:00Z',
    created_at: '2026-01-03T21:00:00Z',
    updated_at: '2026-01-03T21:00:00Z',
  },
  {
    id: '7',
    slug: 'planning-board-east-street-senior-housing',
    title: 'Planning Board Continues Hearing on East Street Senior Housing Project',
    subtitle: "King's Daughters proposal for 279-289 East Street returns for additional review",
    content: `The Planning Board continued its public hearing on a proposed senior housing development at 279-289 East Street Wednesday night, requesting additional information from the applicant before making a decision.

The King's Daughters and Sons Home for the Aged in Norfolk County is seeking approval for a senior living facility that would include independent living units and supportive services.

Neighbors have raised concerns about traffic, building height, and the project's impact on the rural character of the neighborhood. The applicant's team presented revised plans addressing some concerns from the previous hearing.

"We've listened to the feedback and made adjustments to the site plan," said the project engineer. "The building has been shifted further from the property line and additional landscaping is proposed."

The board requested a traffic study update and additional stormwater management details before the next hearing.

The hearing will continue at the Planning Board's next meeting on January 14 at 7 PM.`,
    excerpt: "King's Daughters proposal for 279-289 East Street returns for additional review with revised plans.",
    category: 'town-government',
    tags: ['planning-board', 'development', 'housing'],
    is_premium: false,
    is_published: true,
    published_at: '2026-01-02T21:00:00Z',
    created_at: '2026-01-02T21:00:00Z',
    updated_at: '2026-01-02T21:00:00Z',
  },
  {
    id: '8',
    slug: 'warriors-basketball-opens-with-win',
    title: 'Warriors Open Winter Season with Win Over Milford',
    subtitle: 'Boys basketball picks up where football left off',
    content: `The King Philip boys basketball team opened their winter season in style Friday night, defeating Milford at home in front of an energized crowd still riding high from the football team's state championship.

The Warriors controlled the game from the opening tip, building a double-digit lead by halftime and cruising to victory.

"Our guys were ready," said head coach. "The energy in this building has been incredible after the football championship, and our players fed off that."

The team returns several key players from last year's squad that reached the tournament, and expectations are high in the Hockomock League.

Next up, the Warriors travel to face Franklin on Tuesday before returning home to host Mansfield on Friday.`,
    excerpt: 'Boys basketball picks up where football left off with commanding home victory.',
    category: 'sports',
    tags: ['basketball', 'king-philip', 'warriors'],
    is_premium: false,
    is_published: true,
    published_at: '2025-12-15T22:00:00Z',
    created_at: '2025-12-15T22:00:00Z',
    updated_at: '2025-12-15T22:00:00Z',
  },
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Select Board Meeting',
    description: 'Regular meeting of the Wrentham Select Board',
    location: 'Town Hall, 79 South Street',
    event_date: '2026-01-08T19:00:00Z',
    category: 'town-meeting',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Quilt Exhibit Opening Reception',
    description: 'Opening reception for Mary Sandison\'s quilt exhibit',
    location: 'Fiske Public Library',
    event_date: '2026-01-10T12:00:00Z',
    category: 'library',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: '3',
    title: 'Planning Board Meeting',
    description: 'Regular meeting of the Wrentham Planning Board',
    location: 'Town Hall, 79 South Street',
    event_date: '2026-01-14T19:00:00Z',
    category: 'town-meeting',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: '4',
    title: 'Collectibles Appraisal Event',
    description: 'Bring your collectibles for free appraisal with Perfect Pastime 617',
    location: 'Fiske Public Library',
    event_date: '2026-01-17T10:15:00Z',
    category: 'library',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: '5',
    title: 'KP Boys Basketball vs. Franklin',
    location: 'Franklin High School',
    event_date: '2026-01-07T19:00:00Z',
    category: 'sports',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: '6',
    title: 'KP Boys Basketball vs. Mansfield',
    location: 'King Philip Regional High School',
    event_date: '2026-01-10T19:00:00Z',
    category: 'sports',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
];

export const mockPoliceLogs: PoliceLog[] = [
  {
    id: '1',
    log_type: 'incident',
    date: '2026-01-03',
    time: '14:15',
    location: 'Route 1A near Premium Outlets',
    description: 'Motor Vehicle Accident — Minor injuries reported. Traffic delayed approximately 45 minutes.',
    created_at: '2026-01-03T14:15:00Z',
  },
  {
    id: '2',
    log_type: 'incident',
    date: '2026-01-02',
    time: '11:30',
    location: 'Franklin Street',
    description: 'Suspicious Activity — Residents report unfamiliar vehicle circling neighborhood. Officers made contact, determined to be delivery driver.',
    created_at: '2026-01-02T11:30:00Z',
  },
  {
    id: '3',
    log_type: 'incident',
    date: '2026-01-01',
    time: '20:45',
    location: 'South Street',
    description: 'Noise Complaint — New Year\'s celebration. Verbal warning issued, parties dispersed without incident.',
    created_at: '2026-01-01T20:45:00Z',
  },
  {
    id: '4',
    log_type: 'arrest',
    date: '2025-12-31',
    time: '15:20',
    location: 'Premium Outlets',
    description: 'Larceny Report — Shoplifting reported. One adult male detained. Case referred to Wrentham District Court.',
    created_at: '2025-12-31T15:20:00Z',
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
