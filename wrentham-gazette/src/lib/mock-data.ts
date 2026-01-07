import { Article, Event, PoliceLog } from '@/types';

// Real news based on actual Wrentham events
// Images use Picsum (Lorem Picsum) - reliable placeholder service
export const mockArticles: Article[] = [
  // SPORTS
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
    excerpt: 'Warriors defeat North Attleborough 21-10 at Gillette Stadium to cap undefeated 13-0 season.',
    featured_image: 'https://picsum.photos/seed/kp-football/800/500',
    author_name: 'The Wrentham Gazette',
    category: 'sports',
    tags: ['football', 'king-philip', 'state-championship', 'warriors'],
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

"Our musicians are the soul of our District," said King Philip Regional School District Superintendent **Rich Drolet**. "So many hard working and talented students pour their hearts into the King Philip Regional High School Marching Band."

Before heading to nationals, the band secured their spot as the **Massachusetts Division II Open Champions** at Stoughton High School, where they battled 21 other schools and finished with a score of 91.9.

The Marching Band also won caption awards for **Best Music** and **Best Visual**.`,
    excerpt: 'The Pride and The Passion claims USBands Division II Open title for second consecutive year.',
    featured_image: 'https://picsum.photos/seed/marching-band/800/500',
    author_name: 'The Wrentham Gazette',
    category: 'schools',
    tags: ['marching-band', 'king-philip', 'national-championship'],
    is_premium: false,
    is_published: true,
    published_at: '2025-11-12T12:00:00Z',
    created_at: '2025-11-12T12:00:00Z',
    updated_at: '2025-11-12T12:00:00Z',
  },
  {
    id: '3',
    slug: 'king-philip-advances-to-super-bowl-with-win-over-marshfield',
    title: 'King Philip Advances to Super Bowl with Dominant Win Over Marshfield',
    subtitle: 'Laplante and King combine for 229 yards and five touchdowns in 35-14 victory',
    content: `**Drew Laplante** and **Tallan King** combined for 229 yards and five touchdowns as No. 2 King Philip clinched a fourth consecutive Super Bowl berth with an impressive **35-14 win** over No. 3 Marshfield in the pouring rain on Friday night at Bridgewater-Raynham.

As the rain came down and soaked the field, it perfectly fit the Warriors' style of play. The ground and pound approach, fueled by King Philip's physicality and diverse run game, wore Marshfield down.

In the first half it was all King as the senior rushed for all 101 of his yards to go with three touchdowns. After King went down with a lower leg injury early in the third quarter with King Philip up 19-0, Laplante took over finding the end zone twice.

"Coach **Brian Lee** has always done such a good job of making us stay humble and keep our eyes on the prize," Laplante said. "Those seniors last year had such a good year and he had to bring us down to earth to show us seniors we could do it again. In order to do that though, we had to work even harder. And it starts in January running hills."

On its opening drive, the Warriors went 62 yards over nine plays, capped off by a 10-yard touchdown run by King. One possession later, the Warriors went 74 yards over 15 plays, all on the ground.

**Aiden Astorino** came up with an interception that set up King's second touchdown of the night.

The Warriors improved to **11-0** heading into the state championship.`,
    excerpt: 'Warriors clinch fourth consecutive Super Bowl berth with dominant performance in the rain.',
    featured_image: 'https://picsum.photos/seed/football-game/800/500',
    author_name: 'The Wrentham Gazette',
    category: 'sports',
    tags: ['football', 'king-philip', 'playoffs', 'warriors'],
    is_premium: false,
    is_published: true,
    published_at: '2025-11-23T10:00:00Z',
    created_at: '2025-11-23T10:00:00Z',
    updated_at: '2025-11-23T10:00:00Z',
  },
  {
    id: '4',
    slug: 'king-philip-jazz-band-selected-for-essentially-ellington',
    title: 'King Philip Jazz Band Named Top 15 Finalist for Essentially Ellington',
    subtitle: 'Band to compete at Jazz at Lincoln Center in New York City in May 2026',
    content: `**King Philip Regional High School** is a **top 15 finalist** for the prestigious **Essentially Ellington Festival** in New York City in May 2026.

The competition, held at **Jazz at Lincoln Center**, brings together the best high school jazz bands from across the country to perform and be evaluated by professional jazz musicians.

Being selected as a finalist is a significant honor that reflects the dedication and talent of King Philip's jazz program. The band will travel to New York City to perform on one of the most prestigious stages in jazz music.

The Essentially Ellington competition focuses on the music of **Duke Ellington** and challenges students to master complex arrangements while developing their improvisational skills.

King Philip's music program has earned numerous accolades in recent years, including the marching band's back-to-back national championships. This jazz honor adds another achievement to the district's strong music tradition.

The festival will take place in **May 2026** at Frederick P. Rose Hall, home of Jazz at Lincoln Center. Students will have the opportunity to work with professional musicians in masterclasses and workshops.

More details about the band's performance schedule in New York will be announced as the festival approaches.`,
    excerpt: 'High school jazz program earns spot among nation\'s best for prestigious competition.',
    featured_image: 'https://picsum.photos/seed/jazz-music/800/500',
    author_name: 'The Wrentham Gazette',
    category: 'schools',
    tags: ['jazz', 'king-philip', 'music', 'essentially-ellington'],
    is_premium: false,
    is_published: true,
    published_at: '2025-02-15T10:00:00Z',
    created_at: '2025-02-15T10:00:00Z',
    updated_at: '2025-02-15T10:00:00Z',
  },

  // TOWN GOVERNMENT
  {
    id: '5',
    slug: 'wrentham-voters-approve-mbta-communities-zoning',
    title: 'Wrentham Voters Approve MBTA Communities Zoning at Fall Town Meeting',
    subtitle: 'Town meets state deadline with zoning for 37 acres on Elysium Street and 21 acres on Ledgeview Way',
    content: `Wrentham voters approved proposed zoning changes required under the **MBTA Communities Act** at the Fall Town Meeting on November 3, 2025.

The vote brings Wrentham into compliance with the controversial state law before the deadline, avoiding potential penalties including loss of state grant funding.

Wrentham is classified as an **Adjacent Community** because neighboring towns have MBTA transit stations within their boundaries, including Norfolk, Franklin, and Foxborough.

The approved proposal includes:

**37 acres on Elysium Street**

**21 acres on Ledgeview Way**

Of the Ledgeview site, about eight acres are wetlands and protected land, leaving a smaller buildable area. Because the site already contains existing development, the Planning Board was able to increase density there, which in turn allowed for a reduction in density on the Elysium Street property.

"The Planning Board worked hard to find a solution that meets the state requirements while respecting the concerns of our residents," said Town Manager **Michael King**.

The MBTA Communities Act requires communities served by the MBTA to zone for multi-family housing without special permits. Wrentham was required to establish zoning districts of at least **50 acres** allowing a minimum density of **15 units per acre**.

The zoning change does not require any housing to be built. It simply allows multi-family development in the designated areas if property owners choose to pursue it.`,
    excerpt: 'Town meets state deadline with zoning for multi-family housing on Elysium Street and Ledgeview Way.',
    featured_image: 'https://picsum.photos/seed/town-hall/800/500',
    author_name: 'The Wrentham Gazette',
    category: 'town-government',
    tags: ['town-meeting', 'mbta-communities', 'zoning', 'planning-board'],
    is_premium: false,
    is_published: true,
    published_at: '2025-11-04T10:00:00Z',
    created_at: '2025-11-04T10:00:00Z',
    updated_at: '2025-11-04T10:00:00Z',
  },
  {
    id: '6',
    slug: 'select-board-reviews-fy2026-budget-priorities',
    title: 'Select Board Reviews FY2026 Budget Priorities',
    subtitle: 'Fire station feasibility study among key items under consideration',
    content: `The **Select Board** began discussions on the **fiscal year 2026 budget** at their meeting Tuesday night, with the Town Manager presenting a preliminary spending plan that focuses on public safety infrastructure.

Among the priorities identified is funding for a **feasibility study on a new fire station**, which officials say is needed to address the town's growing population and aging facilities.

"We've been talking about fire station needs for several years now," the Town Manager said. "It's time to move from discussion to action with a comprehensive study."

The preliminary budget also includes:

**Education funding** increases for the King Philip Regional School District and Wrentham Public Schools

**Modest increases** for town departments to cover cost-of-living adjustments

**Infrastructure investments** for road maintenance and water system improvements

**Capital equipment** replacement for DPW and public safety

The Select Board will hold additional **budget workshops** in January and February before the final budget is presented at the **Spring Town Meeting** in June.

Residents can view budget documents on the town website and attend upcoming meetings to provide input. All Select Board meetings are held at **Town Hall, 79 South Street**, and are open to the public.`,
    excerpt: 'Town Manager presents preliminary spending plan with focus on public safety infrastructure.',
    featured_image: 'https://picsum.photos/seed/library-wrentham/800/500',
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
    id: '7',
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
    featured_image: 'https://picsum.photos/seed/wrentham-street/800/500',
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
    id: '8',
    slug: 'new-dpw-facility-approved-at-town-meeting',
    title: 'Voters Approve New DPW Facility at Fall Town Meeting',
    subtitle: 'Project will replace aging Public Works complex on Taunton Street',
    content: `Wrentham voters approved funding for a **new Department of Public Works facility** at the December 2024 Town Meeting, giving the green light to replace the aging complex on Taunton Street.

The project, which has been in planning for several years, will provide modern facilities for the town's DPW operations including:

**Vehicle maintenance bays** with updated equipment

**Salt and sand storage** to meet environmental standards

**Administrative offices** for DPW staff

**Equipment storage** for plows, trucks, and maintenance vehicles

The current facility dates back several decades and has significant deferred maintenance issues. Town officials said the new building will improve efficiency and reduce long-term costs.

"This has been a priority for the town for many years," said DPW Director. "The current facility has served us well, but it's time for an upgrade that will serve Wrentham for the next 50 years."

Construction is expected to begin in **spring 2025** with completion targeted for **late 2026**. The project will be funded through a combination of borrowing and available reserves.

Residents can find more information about the project on the town website under the DPW section.`,
    excerpt: 'Project will replace aging Public Works complex on Taunton Street with modern facilities.',
    featured_image: 'https://picsum.photos/seed/dpw-building/800/500',
    author_name: 'The Wrentham Gazette',
    category: 'town-government',
    tags: ['dpw', 'town-meeting', 'construction', 'infrastructure'],
    is_premium: false,
    is_published: true,
    published_at: '2024-12-18T10:00:00Z',
    created_at: '2024-12-18T10:00:00Z',
    updated_at: '2024-12-18T10:00:00Z',
  },

  // COMMUNITY
  {
    id: '9',
    slug: 'fiske-library-quilt-exhibit-january-2026',
    title: 'Fiske Library to Host Quilt Exhibit by Mary Sandison',
    subtitle: 'Opening reception Saturday, January 10 from noon to 2 PM',
    content: `The **Fiske Public Library** will host a quilt exhibit by **Mary Sandison**, with an opening reception on **Saturday, January 10, 2026**, from noon to 2 PM.

Mary Sandison, a resident of Wrentham since 2018, is an accomplished quilter with **over 40 years of experience**. Having grown up in an environment where the sewing machines were nearly always running, she learned garment sewing from her mother and grandmother.

With a passion for creativity and a love of the math involved in making a pattern work, quilting was a natural fit and rewarding hobby. Sandison has had her work proudly displayed in the homes of friends and family, as well as the **Marshfield Fair** and **Maine Quilt Show**.

The exhibit will be on display in the **Fiske Library Sweatt Room** from January 10 through February 14, 2026.

**Other January Programs at Fiske Library:**

**Paint Night** on Thursday, January 8, from 6:30 to 8 PM. Space is limited to twenty adult participants and registration is required.

**Fiske Library Book Club** meets the fourth Tuesday of each month in the Genealogy Room. The January 27 discussion will feature "All the Colors of the Dark" by Chris Whitaker.

**Spice Club** for January features caraway. Pick up a kit at the library containing information about the spice, recipes, and a sample to try at home.

The library is located at **110 Randall Road**. For more information, visit fiskelib.org or call **508-384-5440**.`,
    excerpt: 'Exhibit features work by 40-year quilter Mary Sandison. On display January 10 through February 14.',
    featured_image: 'https://picsum.photos/seed/library-wrentham/800/500',
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
    id: '10',
    slug: 'wrentham-day-2025-celebrates-40-years',
    title: '40th Annual Wrentham Day Draws Thousands to Town Common',
    subtitle: 'Community celebration marks four decades of tradition',
    content: `The **40th Annual Wrentham Day** brought thousands of residents to the Town Common on **Saturday, September 6, 2025**, for a day of food, games, music, and community connection.

The milestone anniversary celebration featured expanded programming including:

**Live music** from local bands throughout the day

**Food vendors** offering everything from classic fair food to local restaurant specialties

**Craft booths** from area artisans

**Children's activities** including bounce houses, face painting, and games

**Community organization tables** from local nonprofits and town departments

"Wrentham Day is about bringing our community together," said a member of the organizing committee. "Forty years is a real milestone, and we wanted to make this year special."

The event began in **1985** as a small community gathering and has grown into one of the town's signature annual events.

Town officials estimated attendance at over **3,000 people** throughout the day, with families spread across the historic Town Common enjoying the late summer weather.

The Wrentham Day Committee thanked the many volunteers and sponsors who made the event possible. Planning for the **41st Annual Wrentham Day** in September 2026 will begin in early spring.`,
    excerpt: 'Milestone anniversary celebration brings thousands to Town Common for food, music, and community.',
    featured_image: 'https://picsum.photos/seed/wrentham-street/800/500',
    author_name: 'The Wrentham Gazette',
    category: 'community',
    tags: ['wrentham-day', 'events', 'town-common', 'community'],
    is_premium: false,
    is_published: true,
    published_at: '2025-09-07T10:00:00Z',
    created_at: '2025-09-07T10:00:00Z',
    updated_at: '2025-09-07T10:00:00Z',
  },
  {
    id: '11',
    slug: 'big-apple-farm-owners-announce-retirement',
    title: 'Big Apple Farm Owners Jon and Peg Morse Announce Retirement',
    subtitle: 'Future of beloved Wrentham farm destination remains uncertain',
    content: `**Jon and Peg Morse**, owners of **The Big Apple Farm** in Wrentham, have announced their retirement after decades of operating one of the region's most popular fall destinations.

The farm, located on South Street, has been a family tradition for generations of visitors who come each autumn for apple picking, cider donuts, hayrides, and the farm's famous corn maze.

The Morses have not yet announced what will happen to the property, leaving loyal customers wondering about the farm's future.

"We've been blessed to share this place with so many families over the years," the Morses said in a statement. "It's been an honor to be part of your fall traditions."

The Big Apple Farm has been a fixture in Wrentham for decades, drawing visitors from across southeastern Massachusetts and Rhode Island. The farm is particularly busy during peak apple picking season in September and October.

Local officials expressed hope that the property would continue as a farm in some form, noting its importance to the community and local agriculture.

No timeline has been announced for the Morses' departure or any decisions about the property's future.`,
    excerpt: 'Future of beloved Wrentham farm destination remains uncertain after retirement announcement.',
    featured_image: 'https://picsum.photos/seed/apple-farm/800/500',
    author_name: 'The Wrentham Gazette',
    category: 'community',
    tags: ['big-apple-farm', 'agriculture', 'business', 'retirement'],
    is_premium: false,
    is_published: true,
    published_at: '2024-11-23T10:00:00Z',
    created_at: '2024-11-23T10:00:00Z',
    updated_at: '2024-11-23T10:00:00Z',
  },

  // BUSINESS
  {
    id: '12',
    slug: 'wrentham-outlets-black-friday-traffic-snarls',
    title: 'Black Friday Crowds Create Traffic Backups Near Wrentham Outlets',
    subtitle: 'Shoppers faced hours-long delays on Route 1 and I-495',
    content: `**Black Friday shoppers** heading to **Wrentham Village Premium Outlets** faced hours-long traffic backups on Friday, November 29, as one of New England's largest outlet malls drew massive crowds.

Traffic on **Route 1** and **I-495** was backed up for miles during peak shopping hours, with some drivers reporting delays of over an hour just to reach the mall entrance.

Plainville Police implemented traffic control measures on **10 streets** near the outlets to help manage the flow of vehicles.

The outlet center, which features over **170 stores**, is one of the most popular shopping destinations in the region, particularly during the holiday season.

Despite the traffic, shoppers said the deals were worth the wait. Stores including **Gucci, Coach, Nike**, and other popular brands offered significant discounts.

The outlets management recommended that shoppers arrive early in the morning or later in the evening to avoid peak congestion. The center was open extended hours for Black Friday.

Traffic conditions returned to normal by Saturday morning, though the outlets remained busy throughout the holiday weekend.`,
    excerpt: 'Shoppers faced hours-long delays on Route 1 and I-495 as outlet mall drew massive crowds.',
    featured_image: 'https://picsum.photos/seed/shopping-crowds/800/500',
    author_name: 'The Wrentham Gazette',
    category: 'business',
    tags: ['premium-outlets', 'shopping', 'black-friday', 'traffic'],
    is_premium: false,
    is_published: true,
    published_at: '2024-11-30T10:00:00Z',
    created_at: '2024-11-30T10:00:00Z',
    updated_at: '2024-11-30T10:00:00Z',
  },
  {
    id: '13',
    slug: 'three-arrested-gucci-theft-wrentham-outlets',
    title: 'Three Arrested in Theft of Thousands from Gucci Store at Wrentham Outlets',
    subtitle: 'Suspects allegedly stole merchandise valued in the thousands',
    content: `Three men are facing charges after they allegedly stole thousands of dollars of merchandise from the **Gucci store** at **Wrentham Village Premium Outlets**.

Wrentham Police responded to a report of a theft at the luxury retailer and were able to locate and apprehend the suspects nearby.

The stolen merchandise was recovered. The three suspects were charged with:

**Larceny over $1,200**

**Conspiracy**

The suspects were arraigned in Wrentham District Court.

Retail theft has been a growing concern at shopping centers across the region. The Wrentham Outlets work closely with local police to prevent and respond to criminal activity.

Additional security measures have been implemented at high-value retailers in the outlet center.

Anyone with information about retail theft at the outlets is asked to contact the **Wrentham Police Department**.`,
    excerpt: 'Suspects allegedly stole merchandise valued in thousands from luxury retailer.',
    featured_image: 'https://picsum.photos/seed/retail-store/800/500',
    author_name: 'The Wrentham Gazette',
    category: 'police-fire',
    tags: ['crime', 'theft', 'premium-outlets', 'arrest'],
    is_premium: false,
    is_published: true,
    published_at: '2025-03-15T10:00:00Z',
    created_at: '2025-03-15T10:00:00Z',
    updated_at: '2025-03-15T10:00:00Z',
  },

  // POLICE & FIRE
  {
    id: '14',
    slug: 'abandoned-dog-found-wrentham-park',
    title: 'Emaciated Dog Found Abandoned at Wrentham Park',
    subtitle: 'Police seeking information about animal\'s owner',
    content: `An **emaciated dog** was found apparently abandoned at a park in Wrentham on Thursday morning, police said.

Officers responded to **Sweatt Park** after a report of a dog alone in the park. The animal appeared to have been **neglected for some time** given its condition.

"It appears the dog has been neglected for a while given his emaciated condition," Wrentham Police said in a statement.

The dog was transported to a local veterinarian for evaluation and treatment. Animal control officers are caring for the animal while the investigation continues.

Police are asking anyone with information about the dog or its owner to contact the **Wrentham Police Department** at **508-384-2121**.

Animal abandonment and neglect are serious offenses under Massachusetts law. Individuals found responsible can face criminal charges including animal cruelty.

The dog is expected to recover with proper care and nutrition. Information about potential adoption will be released once the animal is healthy and the investigation is complete.`,
    excerpt: 'Police seeking information about owner after dog found in poor condition at Sweatt Park.',
    featured_image: 'https://picsum.photos/seed/dog-rescue/800/500',
    author_name: 'The Wrentham Gazette',
    category: 'police-fire',
    tags: ['animal-cruelty', 'police', 'investigation'],
    is_premium: false,
    is_published: true,
    published_at: '2025-01-03T10:00:00Z',
    created_at: '2025-01-03T10:00:00Z',
    updated_at: '2025-01-03T10:00:00Z',
  },
  {
    id: '15',
    slug: 'pedestrian-killed-route-1-crash',
    title: 'Pedestrian Killed in Route 1 Crash During Icy Conditions',
    subtitle: 'SUV with plow attachment struck man in roadway',
    content: `A man was hit and killed by an SUV with a plow attached in Wrentham on Tuesday evening as **icy road conditions** caused problems across Massachusetts.

The crash occurred on **Route 1** between Madison and Thurston Streets around 6 PM.

Police Chief **Bill McGrath** confirmed the fatal crash. According to investigators, an SUV with a plow attachment struck a man who was in the roadway. One other vehicle may have been involved.

Route 1 was closed in both directions for several hours while police investigated the scene. Traffic was diverted to alternate routes.

The victim's identity has not been released pending notification of family.

The crash occurred as a winter storm brought ice and snow to the region, making road conditions hazardous throughout southeastern Massachusetts.

Police are continuing to investigate the circumstances of the crash. Anyone who witnessed the incident is asked to contact the **Wrentham Police Department**.`,
    excerpt: 'Fatal crash occurred on Route 1 during winter storm as icy conditions affected region.',
    featured_image: 'https://picsum.photos/seed/highway-road/800/500',
    author_name: 'The Wrentham Gazette',
    category: 'police-fire',
    tags: ['fatal-crash', 'route-1', 'winter-storm', 'traffic'],
    is_premium: false,
    is_published: true,
    published_at: '2025-01-15T22:00:00Z',
    created_at: '2025-01-15T22:00:00Z',
    updated_at: '2025-01-15T22:00:00Z',
  },

  // SCHOOLS
  {
    id: '16',
    slug: 'king-philip-screenagers-community-screening',
    title: 'King Philip Middle School Hosts "Screenagers" Community Screening',
    subtitle: 'Documentary explores impact of screen time on adolescent development',
    content: `**King Philip Regional Middle School** and the **Healthy KP Coalition** will host a community screening and panel discussion of the documentary **"Screenagers"** on Thursday evening.

The film explores the challenges facing families as they navigate the impact of **screen time** on adolescent development, including:

**Social media** and its effects on mental health

**Video games** and screen addiction

**Digital citizenship** and online safety

**Managing technology** in the home

Following the screening, a **panel discussion** will feature local experts including school counselors, pediatricians, and technology educators.

"This is an important topic for our community," said King Philip Regional Middle School Principal. "We want to give parents the tools and information they need to help their children develop healthy relationships with technology."

The event is **free and open to all community members**, not just King Philip families. Registration is encouraged but not required.

The screening will take place in the **King Philip Middle School Auditorium** beginning at **7 PM**.

Light refreshments will be provided by the Healthy KP Coalition.`,
    excerpt: 'Documentary explores impact of screen time on adolescent development with expert panel discussion.',
    featured_image: 'https://picsum.photos/seed/teen-phone/800/500',
    author_name: 'The Wrentham Gazette',
    category: 'schools',
    tags: ['king-philip', 'screenagers', 'parenting', 'technology'],
    is_premium: false,
    is_published: true,
    published_at: '2025-11-05T10:00:00Z',
    created_at: '2025-11-05T10:00:00Z',
    updated_at: '2025-11-05T10:00:00Z',
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
  {
    id: '6',
    title: 'Select Board Budget Workshop',
    description: 'Public workshop on FY2026 budget priorities. Residents welcome to attend.',
    location: 'Town Hall, 79 South Street',
    event_date: '2026-02-05T18:00:00Z',
    category: 'town-meeting',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: '7',
    title: 'Friends of the Fiske Book Sale',
    description: 'Annual winter book sale. Proceeds support library programs.',
    location: 'Fiske Public Library, 110 Randall Road',
    event_date: '2026-02-21T10:00:00Z',
    category: 'library',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
];

export const mockPoliceLogs: PoliceLog[] = [
  {
    id: '1',
    log_type: 'incident',
    date: '2026-01-05',
    time: '14:30',
    location: 'Route 1',
    description: 'Motor vehicle accident, minor injuries reported. One vehicle towed.',
    created_at: '2026-01-05T14:30:00Z',
  },
  {
    id: '2',
    log_type: 'incident',
    date: '2026-01-05',
    time: '09:15',
    location: 'Wrentham Premium Outlets',
    description: 'Shoplifting report. Suspect fled scene, investigation ongoing.',
    created_at: '2026-01-05T09:15:00Z',
  },
  {
    id: '3',
    log_type: 'incident',
    date: '2026-01-04',
    time: '22:45',
    location: 'South Street',
    description: 'Noise complaint. Officers responded and advised residents.',
    created_at: '2026-01-04T22:45:00Z',
  },
  {
    id: '4',
    log_type: 'incident',
    date: '2026-01-04',
    time: '16:00',
    location: 'Franklin Street',
    description: 'Suspicious vehicle report. Vehicle located and occupants identified. No charges.',
    created_at: '2026-01-04T16:00:00Z',
  },
];

// Helper functions
export function getArticlesByCategory(category: string, limit?: number): Article[] {
  const filtered = mockArticles.filter(a => a.category === category && a.is_published);
  return limit ? filtered.slice(0, limit) : filtered;
}

export function getLatestArticles(limit: number = 10): Article[] {
  return mockArticles
    .filter(a => a.is_published)
    .sort((a, b) => new Date(b.published_at!).getTime() - new Date(a.published_at!).getTime())
    .slice(0, limit);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return mockArticles.find(a => a.slug === slug && a.is_published);
}

export function getUpcomingEvents(limit: number = 4): Event[] {
  const now = new Date();
  return mockEvents
    .filter(e => new Date(e.event_date) >= now && e.is_published)
    .sort((a, b) => new Date(a.event_date).getTime() - new Date(b.event_date).getTime())
    .slice(0, limit);
}

export function getRecentPoliceLogs(limit: number = 5): PoliceLog[] {
  return mockPoliceLogs
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, limit);
}
