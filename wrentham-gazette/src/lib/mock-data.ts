import { Article, Event, PoliceLog } from '@/types';

// Real news based on actual Wrentham events
export const mockArticles: Article[] = [
  {
    id: '1',
    slug: 'king-philip-football-wins-division-3-state-championship',
    title: 'King Philip Football Wins Division 3 State Championship at Gillette',
    subtitle: 'Warriors defeat North Attleborough 21-10 to cap undefeated 13-0 season',
    content: `**King Philip** utilized a strong rushing attack and clutch defensive efforts to claim a **21-10 victory** over North Attleborough and win the **MIAA Division 3 football state championship** at Gillette Stadium on December 5, 2025.

It was a rematch of an earlier meeting between the Hockomock League programs, with the Warriors having won that matchup 21-7. The Warriors finished the season a perfect **13-0**.

"We are really experienced and had a lot of seniors, so that helped a ton," Warriors quarterback **Zach Gebhard** said. "We went down early, but that experience kept us calm, stopped us from yelling at each other and let us just focus on the next play."

**Keigan Canto-Osorio** led the ground game with 22 carries for 103 yards and a touchdown. **Ryan Greenwood** added a two-yard rushing touchdown, and Gebhard punched in a two-yard score on fourth-and-goal.

**Patrick Terio** came up with a key interception that set up a King Philip scoring drive in the second half.

Warriors head coach **Brian Lee** said the effort showed the commitment the entire program has. King Philip had reached the Division 2 title game in the previous three seasons, winning the Division 2 crown in 2024.

This championship marks the program's **fourth state title**, adding to championships won in 2016, 2017, and 2023.

The victory parade was held the following Saturday, beginning at King Philip Regional High School and proceeding through downtown Wrentham.`,
    excerpt: 'Warriors defeat North Attleborough 21-10 at Gillette Stadium to cap undefeated 13-0 season. Fourth state championship for the program.',
    featured_image: '/images/kp-football-champs.jpg',
    author_name: 'The Wrentham Gazette',
    category: 'sports',
    tags: ['football', 'king-philip', 'state-championship', 'warriors', 'gillette-stadium'],
    is_premium: false,
    is_published: true,
    published_at: '2025-12-06T10:00:00Z',
    created_at: '2025-12-06T10:00:00Z',
    updated_at: '2025-12-06T10:00:00Z',
  },
  {
    id: '2',
    slug: 'king-philip-marching-band-wins-national-championship-2025',
    title: 'King Philip Marching Band Wins National Championship for Second Straight Year',
    subtitle: 'Band earns 96.050 score at USBands Division II Open at MetLife Stadium',
    content: `For the second year in a row, members of the **King Philip Regional High School Marching Band** have been named the **2025 USBands Division II Open National Champions**.

On Saturday, November 8, the KPRHS Marching Band traveled to **MetLife Stadium** in East Rutherford, New Jersey, to compete in the 2025 USBands National Championships. The band competed against 11 other top-tier bands and delivered a finals performance that earned them an impressive **96.050 score**, securing First Place in the Division II Open.

They performed three classics for band:

**"Reflections of Earth"** by Gavin Greenway
**"Mass"** by Leonard Bernstein
**"Rocky Point Holiday"** by Ron Nelson

Their performance theme was **"Timeless."**

"This competition capped off an exceptional and undefeated season for the Marching Band," said King Philip Regional High School Principal **Nicole Bottomley**.

The KPRHS Marching Band is made up of **50 members** from grades 8 through 12. The winning performance was the result of about **140 hours of practice** between May and November.

"Our musicians are the soul of our District," said King Philip Regional School District Superintendent **Rich Drolet**. "So many hard working and talented students pour their hearts into the King Philip Regional High School Marching Band. Their dedication to this artform is truly inspiring."

Before heading to compete at nationals, the band secured their spot as the **Massachusetts Division II Open Champions** after a competition at Stoughton High School, where they battled 21 other schools and finished with a score of 91.9.

The Marching Band also won caption awards for **Best Music** and **Best Visual**.

"It's always a great thrill to sit back and watch the students bring the show to life and put their full effort into the final product," said Band Director **Michael Keough**.`,
    excerpt: 'The Pride and The Passion claims USBands Division II Open title for second consecutive year with 96.050 score at MetLife Stadium.',
    featured_image: '/images/kp-marching-band.jpg',
    author_name: 'The Wrentham Gazette',
    category: 'schools',
    tags: ['marching-band', 'king-philip', 'national-championship', 'usbands'],
    is_premium: false,
    is_published: true,
    published_at: '2025-11-12T12:00:00Z',
    created_at: '2025-11-12T12:00:00Z',
    updated_at: '2025-11-12T12:00:00Z',
  },
  {
    id: '3',
    slug: 'fall-town-meeting-votes-on-mbta-communities-zoning',
    title: 'Fall Town Meeting to Vote on MBTA Communities Zoning',
    subtitle: 'Proposed zoning covers 37 acres on Elysium Street and 21 acres on Ledgeview Way',
    content: `The Town of Wrentham's **Fall Town Meeting** on November 3, 2025 will consider proposed zoning bylaw changes required under the **MBTA Communities Act**.

Wrentham is classified as an **Adjacent Community** because neighboring towns have MBTA transit stations within their boundaries, including Norfolk, Franklin, and Foxborough.

At the December 2024 Town Meeting, the Planning Board presented Elysium Street and East Street as proposed sites for rezoning. Based on resident feedback, the Planning Board revised the plan.

The initial proposal included 37 acres on Elysium Street and 22 acres on East Street. The revised proposal now includes:

**37 acres on Elysium Street**
**21 acres on Ledgeview Way**

Of the Ledgeview site, about eight acres are wetlands and protected land, leaving a smaller buildable area. Because the site already contains existing development, the Planning Board was able to increase density there, which in turn allowed for a reduction in density on the Elysium Street property.

"The outreach session is intended to inform residents on what the MBTA Communities Act means for Wrentham and the specifics of the local proposal," said Town Manager **Michael King**. "We encourage residents to attend and ask questions ahead of the Fall Town Meeting vote."

The MBTA Communities Act requires communities served by the MBTA to zone for multi-family housing. The zoning must allow for multi-family residential development **without special permits** or other discretionary approval.

Through the process, the Town of Wrentham must establish zoning districts of at least **50 acres**, and the districts must allow for a minimum density of **15 units per acre**.

For more information, residents can visit the MBTA Communities page on the town website at wrentham.gov.`,
    excerpt: 'Revised proposal includes 37 acres on Elysium Street and 21 acres on Ledgeview Way for multi-family zoning.',
    featured_image: '/images/town-hall.jpg',
    author_name: 'The Wrentham Gazette',
    category: 'town-government',
    tags: ['town-meeting', 'mbta-communities', 'zoning', 'planning-board'],
    is_premium: false,
    is_published: true,
    published_at: '2025-10-15T10:00:00Z',
    created_at: '2025-10-15T10:00:00Z',
    updated_at: '2025-10-15T10:00:00Z',
  },
  {
    id: '4',
    slug: 'fiske-library-quilt-exhibit-january-2026',
    title: 'Fiske Library to Host Quilt Exhibit by Mary Sandison',
    subtitle: 'Opening reception Saturday, January 10 from noon to 2 PM',
    content: `The **Fiske Public Library** will host a quilt exhibit by **Mary Sandison**, with an opening reception on **Saturday, January 10, 2026**, from noon to 2 PM.

Mary Sandison, a resident of Wrentham since 2018, is an accomplished quilter with **over 40 years of experience**. Having grown up in an environment where the sewing machines were nearly always running, she learned garment sewing from her mother and grandmother.

With a passion for creativity and a love of the math involved in making a pattern work, quilting was a natural fit and rewarding hobby. Sandison has had her work proudly displayed in the homes of friends and family, as well as the **Marshfield Fair** and **Maine Quilt Show**.

The exhibit will be on display in the **Fiske Library Sweatt Room** from January 10 through February 14, 2026.

Sandison is also excited to have the opportunity to share her knowledge with introductory sewing classes for both adults and children. Check the Fiske Library calendar for more information on dates.

**Other January Programs at Fiske Library:**

**Paint Night** on Thursday, January 8, from 6:30 to 8 PM. Space is limited to twenty adult participants and registration is required.

**Fiske Library Book Club** meets the fourth Tuesday of each month in the Genealogy Room. The January 27 discussion will feature "All the Colors of the Dark" by Chris Whitaker.

**Spice Club** for January features caraway. Pick up a kit at the library containing information about the spice, recipes, and a sample to try at home.

The library is located at **110 Randall Road**. For more information, visit fiskelib.org or call **508-384-5440**.`,
    excerpt: 'Exhibit features work by 40-year quilter Mary Sandison. On display January 10 through February 14 in the Sweatt Room.',
    featured_image: '/images/fiske-library.jpg',
    author_name: 'The Wrentham Gazette',
    category: 'community',
    tags: ['library', 'fiske', 'events', 'quilts', 'arts'],
    is_premium: false,
    is_published: true,
    published_at: '2026-01-02T10:00:00Z',
    created_at: '2026-01-02T10:00:00Z',
    updated_at: '2026-01-02T10:00:00Z',
  },
  {
    id: '5',
    slug: 'wrentham-day-2025-returns-to-town-common',
    title: '40th Annual Wrentham Day Returns to Town Common',
    subtitle: 'Community celebration set for Saturday, September 6, 2025',
    content: `The **40th Annual Wrentham Day** returns to the Town Common on **Saturday, September 6, 2025**.

Wrentham Day is a town tradition that brings the community together for a day of fun activities for the entire family. The event features:

**Food vendors** from local restaurants and organizations
**Local crafts** and artisan booths
**Games and activities** for children
**Live entertainment** throughout the day
**Community organizations** sharing information

The celebration on the historic **Town Common** gives residents a chance to connect with neighbors and enjoy what makes Wrentham special.

Vendor registration is open for those interested in participating. Visit wrentham.gov for more information and registration forms.

Wrentham Day has been a beloved annual tradition since **1985**, growing from a small community gathering to a full-day celebration that draws residents from across town.

The event is organized by the Wrentham Day Committee with support from local businesses and volunteers.`,
    excerpt: 'Annual community celebration marks 40 years on the Town Common with activities for the whole family.',
    featured_image: '/images/town-common.jpg',
    author_name: 'The Wrentham Gazette',
    category: 'community',
    tags: ['wrentham-day', 'events', 'town-common', 'community'],
    is_premium: false,
    is_published: true,
    published_at: '2025-07-15T10:00:00Z',
    created_at: '2025-07-15T10:00:00Z',
    updated_at: '2025-07-15T10:00:00Z',
  },
  {
    id: '6',
    slug: 'overnight-parking-ban-december-through-april',
    title: 'Overnight Parking Ban in Effect December 1 Through April 1',
    subtitle: 'Town reminds residents of annual winter parking restrictions',
    content: `The Town of Wrentham reminds residents that the **annual overnight parking ban** is in effect from **December 1 through April 1**.

The parking ban prohibits parking on town streets overnight during the winter months to allow for **snow removal operations**.

Vehicles parked on town roads overnight during this period may be **ticketed or towed** at the owner's expense.

The ban applies to all public roads in Wrentham between the hours of **midnight and 6 AM**.

Residents with questions about the parking ban can contact the **Wrentham Police Department** at 508-384-2121.

This annual restriction helps the Department of Public Works keep roads clear and safe during winter weather events.`,
    excerpt: 'Annual winter parking ban prohibits overnight street parking to allow for snow removal.',
    featured_image: '/images/winter-road.jpg',
    author_name: 'The Wrentham Gazette',
    category: 'town-government',
    tags: ['parking', 'winter', 'dpw', 'snow-removal'],
    is_premium: false,
    is_published: true,
    published_at: '2025-11-25T10:00:00Z',
    created_at: '2025-11-25T10:00:00Z',
    updated_at: '2025-11-25T10:00:00Z',
  },
  {
    id: '7',
    slug: 'select-board-reviews-fy2026-budget-priorities',
    title: 'Select Board Reviews FY2026 Budget Priorities',
    subtitle: 'Fire station feasibility study among key items under consideration',
    content: `The **Select Board** began discussions on the **fiscal year 2026 budget** at their meeting Tuesday night, with Town Manager presenting a preliminary spending plan that focuses on public safety infrastructure.

Among the priorities identified is funding for a **feasibility study on a new fire station**, which officials say is needed to address the town's growing population and aging facilities.

"We've been talking about fire station needs for several years now," the Town Manager said. "It's time to move from discussion to action with a comprehensive study."

The preliminary budget also includes:

**Education funding** increases for the King Philip Regional School District and Wrentham Public Schools

**Modest increases** for town departments to cover cost-of-living adjustments

**Infrastructure investments** for road maintenance and water system improvements

**Capital equipment** replacement for DPW and public safety

The Select Board will hold additional **budget workshops** in January and February before the final budget is presented at the **Spring Town Meeting** in June.

Residents can view budget documents on the town website and attend upcoming meetings to provide input. All Select Board meetings are held at **Town Hall, 79 South Street**, and are open to the public.`,
    excerpt: 'Town Manager presents preliminary spending plan with focus on public safety infrastructure and fire station study.',
    featured_image: '/images/select-board.jpg',
    author_name: 'The Wrentham Gazette',
    category: 'town-government',
    tags: ['budget', 'select-board', 'fire-station', 'fiscal-year'],
    is_premium: false,
    is_published: true,
    published_at: '2026-01-04T10:00:00Z',
    created_at: '2026-01-04T10:00:00Z',
    updated_at: '2026-01-04T10:00:00Z',
  },
  {
    id: '8',
    slug: 'king-philip-jazz-band-selected-for-essentially-ellington',
    title: 'King Philip Jazz Band Named Top 15 Finalist for Essentially Ellington',
    subtitle: 'Band to compete at Jazz at Lincoln Center in New York City in May',
    content: `**King Philip Regional High School** is a **top 15 finalist** for the prestigious **Essentially Ellington Festival** in New York City in May.

The competition, held at **Jazz at Lincoln Center**, brings together the best high school jazz bands from across the country to perform and be evaluated by professional jazz musicians.

Being selected as a finalist is a significant honor that reflects the dedication and talent of King Philip's jazz program. The band will travel to New York City to perform on one of the most prestigious stages in jazz music.

The Essentially Ellington competition focuses on the music of **Duke Ellington** and challenges students to master complex arrangements while developing their improvisational skills.

King Philip's music program has earned numerous accolades in recent years, including the marching band's back-to-back national championships. This jazz honor adds another achievement to the district's strong music tradition.

More details about the band's performance schedule in New York will be announced as the festival approaches.`,
    excerpt: 'High school jazz program earns spot among nation\'s best for prestigious competition at Jazz at Lincoln Center.',
    featured_image: '/images/jazz-band.jpg',
    author_name: 'The Wrentham Gazette',
    category: 'schools',
    tags: ['jazz', 'king-philip', 'music', 'essentially-ellington'],
    is_premium: false,
    is_published: true,
    published_at: '2025-02-15T10:00:00Z',
    created_at: '2025-02-15T10:00:00Z',
    updated_at: '2025-02-15T10:00:00Z',
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
    title: 'Paint Night at Fiske Library',
    description: 'Express your creativity at Paint Night with Ashwini. Space limited to 20 adults. Registration required.',
    location: 'Fiske Public Library, 110 Randall Road',
    event_date: '2026-01-08T18:30:00Z',
    category: 'library',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: '3',
    title: 'Quilt Exhibit Opening Reception',
    description: 'Opening reception for Mary Sandison\'s quilt exhibit. Over 40 years of quilting on display.',
    location: 'Fiske Public Library, 110 Randall Road',
    event_date: '2026-01-10T12:00:00Z',
    category: 'library',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: '4',
    title: 'Planning Board Meeting',
    description: 'Regular meeting of the Wrentham Planning Board. Agendas posted at wrentham.gov.',
    location: 'Town Hall, 79 South Street',
    event_date: '2026-01-14T19:00:00Z',
    category: 'town-meeting',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: '5',
    title: 'Fiske Library Book Club',
    description: 'Discussion of "All the Colors of the Dark" by Chris Whitaker. Meets 4th Tuesday of month.',
    location: 'Fiske Public Library, Genealogy Room',
    event_date: '2026-01-27T19:00:00Z',
    category: 'library',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
];

// Police logs will be populated by the automated scraper
export const mockPoliceLogs: PoliceLog[] = [
  {
    id: '1',
    log_type: 'incident',
    date: '2026-01-06',
    time: '08:00',
    location: 'Wrentham',
    description: 'Police log entries will be populated automatically from town sources.',
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
