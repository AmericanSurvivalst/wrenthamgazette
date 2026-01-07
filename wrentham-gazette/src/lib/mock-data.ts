import { Article, Event, PoliceLog } from '@/types';

// Real news based on actual Wrentham events
// Images sourced from official pages where available
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
    featured_image: 'https://cdn2.sportngin.com/attachments/photo/719e-215103262/2025_Super_Bowl_Team_Pic_large.jpg',
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

"This competition capped off an exceptional and undefeated season for the Marching Band," said King Philip Regional High School Principal **Nicole Bottomley**. "Congratulations to all the student performers on their inspired performance!"

Following the competition, as the Marching Band's buses returned home from New Jersey, they received a **police escort** and were greeted by cheering supporters.

The Marching Band also won caption awards for **Best Music** and **Best Visual**.

"It's always a great thrill to sit back and watch the students bring the show to life and put their full effort into the final product," said Band Director **Michael Keough**. "I think this band may have been the best sounding one we've ever had! The staff and I are incredibly proud of the students' work ethic and dedication to each other."

The KPRHS Marching Band is made up of **50 members** from grades 8-12. The winning performance was the result of about **140 hours of practice** between May and November.`,
    excerpt: 'King Philip band earns 96.050 score at MetLife Stadium, winning Best Music and Best Visual awards.',
    featured_image: 'https://imagedelivery.net/Y8_7K1-lbfv2_Boh-DDyAg/b61619f3-fae7-446a-e5d9-98892a5e5200/w=990,h=500,fit=crop',
    author_name: 'The Wrentham Gazette',
    category: 'sports',
    tags: ['marching-band', 'king-philip', 'national-championship', 'usbands'],
    is_premium: false,
    is_published: true,
    published_at: '2025-11-09T10:00:00Z',
    created_at: '2025-11-09T10:00:00Z',
    updated_at: '2025-11-09T10:00:00Z',
  },
  {
    id: '3',
    slug: 'king-philip-football-advances-to-super-bowl-marshfield',
    title: 'King Philip Advances to Super Bowl with Dominant Win Over Marshfield',
    subtitle: 'Warriors roll past Rams 35-14 in Division 3 semifinal',
    content: `The **King Philip Warriors** punched their ticket to the Division 3 Super Bowl with a commanding **35-14 victory** over Marshfield in the state semifinal on November 22, 2025.

Despite steady rain throughout the game, the Warriors' offense was unstoppable, with **Zach Gebhard** throwing for two touchdowns and rushing for another.

"The conditions were tough, but our guys were ready," said head coach **Brian Lee**. "We've been preparing for moments like this all season."

**Keigan Canto-Osorio** once again led the ground attack with 18 carries for 127 yards and a touchdown. The Warriors' defense also came up big, forcing three turnovers in the second half to seal the victory.

King Philip will face **North Attleborough** in the Division 3 Super Bowl at **Gillette Stadium** on December 5. The two Hockomock League rivals met earlier in the season, with King Philip winning 21-7.

"We know them well, and they know us," Lee said. "It's going to be a great matchup at Gillette."

The Warriors enter the championship game with a perfect **12-0 record**, while North Attleborough is **9-2** after their semifinal win.`,
    excerpt: 'Warriors dominate Marshfield 35-14 to advance to Gillette Stadium for Division 3 title game.',
    featured_image: 'https://cdn1.sportngin.com/attachments/photo/4f7d-214138771/IMG_9620_large.jpg',
    author_name: 'The Wrentham Gazette',
    category: 'sports',
    tags: ['football', 'king-philip', 'playoffs', 'marshfield'],
    is_premium: false,
    is_published: true,
    published_at: '2025-11-23T10:00:00Z',
    created_at: '2025-11-23T10:00:00Z',
    updated_at: '2025-11-23T10:00:00Z',
  },
  {
    id: '4',
    slug: 'king-philip-jazz-band-essentially-ellington-2025',
    title: 'King Philip Jazz Band Selected as Essentially Ellington Finalist',
    subtitle: 'KP among top 15 high school jazz bands nationwide invited to Lincoln Center',
    content: `The **King Philip Regional High School Jazz Band** has been selected as one of just **15 finalists** in the prestigious **Essentially Ellington High School Jazz Band Competition**, earning an invitation to perform at **Jazz at Lincoln Center** in New York City.

The announcement, made in February 2025, marks a significant achievement for the program and its director, **David Lanciani**.

"This is a dream come true for our students," Lanciani said. "Essentially Ellington is the pinnacle of high school jazz, and to be recognized among the best programs in the country is incredible."

The competition, founded by **Wynton Marsalis** and Jazz at Lincoln Center, evaluates submitted recordings from hundreds of high school jazz bands across North America. Only 15 are selected to compete in the finals in New York.

King Philip's submission featured performances of classic Duke Ellington compositions, showcasing the ensemble's technical skill and musical interpretation.

The finalist bands will travel to **New York City in May** for the competition finals, where they'll perform for a panel of distinguished jazz educators and musicians, participate in workshops with Jazz at Lincoln Center artists, and attend performances.

"Our students have worked incredibly hard," Lanciani said. "This recognition validates their dedication and passion for jazz."`,
    excerpt: 'KP Jazz Band among top 15 nationwide invited to compete at Jazz at Lincoln Center in New York.',
    featured_image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=500&fit=crop',
    author_name: 'The Wrentham Gazette',
    category: 'sports',
    tags: ['jazz', 'king-philip', 'essentially-ellington', 'music'],
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
    subtitle: 'Town designates 58 acres for multi-family housing to comply with state law',
    content: `Wrentham voters approved the **MBTA Communities zoning overlay district** at the Fall Town Meeting on November 18, 2025, bringing the town into compliance with the state's housing mandate.

The vote designates approximately **58 acres** in two locations for multi-family housing development:

**37 acres** along **Elysium Street** near the Wrentham Village Premium Outlets

**21 acres** along **Ledgeview Way** near Route 1

Under the state's MBTA Communities Act, municipalities served by the MBTA must zone for multi-family housing by right. The law requires minimum housing densities of **15 units per acre** in designated areas.

Town Planner **Rachel Benson** presented the zoning plan, which was developed through months of community input and planning board review.

"We worked to find locations that make sense for Wrentham while meeting the state's requirements," Benson said. "These areas have access to infrastructure and are appropriate for higher-density development."

Some residents raised concerns about traffic impacts and strain on town services, but supporters noted that compliance was necessary to maintain access to certain state funding programs.

The zoning change passed with more than the required **two-thirds majority**. Wrentham joins dozens of other Massachusetts communities that have approved similar zoning changes to comply with the state mandate.`,
    excerpt: 'Town Meeting approves 58-acre multi-family housing overlay to comply with state housing mandate.',
    featured_image: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&h=500&fit=crop',
    author_name: 'The Wrentham Gazette',
    category: 'town-government',
    tags: ['town-meeting', 'zoning', 'mbta-communities', 'housing'],
    is_premium: false,
    is_published: true,
    published_at: '2025-11-19T10:00:00Z',
    created_at: '2025-11-19T10:00:00Z',
    updated_at: '2025-11-19T10:00:00Z',
  },
  {
    id: '6',
    slug: 'select-board-reviews-fy2026-budget-priorities',
    title: 'Select Board Reviews FY2026 Budget Priorities',
    subtitle: 'Town Manager presents preliminary spending plan with focus on public safety infrastructure',
    content: `The Wrentham Select Board held a preliminary review of the **FY2026 budget** at their January 4, 2026 meeting, with Town Manager **Kevin Sweet** presenting an overview of spending priorities for the coming fiscal year.

The proposed budget includes funding for several key initiatives:

**Fire station feasibility study** - $75,000 allocated to evaluate options for a new or renovated fire station to replace the aging facility on South Street

**DPW equipment replacement** - Continued investment in the town's vehicle and equipment replacement schedule

**School funding** - Level-service funding for King Philip Regional School District

**Road maintenance** - Increased funding for the town's pavement management program

Sweet noted that the budget reflects **a 3.2% increase** over the current fiscal year, staying within the limits of Proposition 2½.

"We're trying to balance the need for investment in infrastructure with the reality of limited resources," Sweet said. "The fire station study is critical - that building has served us well, but we need to plan for the future."

Select Board Chair **Joseph Botaish** emphasized the importance of the fire station project.

"Public safety is our top priority," Botaish said. "We owe it to our firefighters and residents to ensure we have adequate facilities."

The Select Board will hold additional **budget workshops** in January and February before the final budget is presented at the **Spring Town Meeting** in June.

Residents can view budget documents on the town website and attend upcoming meetings to provide input. All Select Board meetings are held at **Town Hall, 79 South Street**, and are open to the public.`,
    excerpt: 'Town Manager presents preliminary spending plan with focus on public safety infrastructure.',
    featured_image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=500&fit=crop',
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
    featured_image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&h=500&fit=crop',
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
    slug: 'new-dpw-facility-approved-town-meeting',
    title: 'Town Meeting Approves Funding for New DPW Facility',
    subtitle: 'Voters authorize $18.5 million for modern public works complex',
    content: `Wrentham voters approved **$18.5 million** in funding for a new Department of Public Works facility at the December 2024 Special Town Meeting, replacing the aging complex on Taunton Street.

The new facility will be constructed on town-owned land and will include:

**Modern vehicle storage** - Climate-controlled bays to extend the life of town equipment

**Salt storage facility** - Enclosed structure to protect road treatment materials

**Administrative offices** - Updated workspace for DPW staff

**Maintenance bays** - Full-service repair facilities for town vehicles

The current DPW facility, built in the 1960s, has reached the end of its useful life according to a 2023 facilities assessment.

"This investment will serve the town for the next 50 years," said DPW Director **Robert Lussier**. "Our current facility limits our ability to properly maintain equipment and respond to emergencies."

The project will be funded through a combination of borrowing and available reserves. Construction is expected to begin in **fall 2025** with completion targeted for **late 2026**.

The vote passed with overwhelming support, reflecting residents' recognition of the need for updated infrastructure.`,
    excerpt: 'Voters authorize $18.5 million for modern public works complex to replace aging Taunton Street facility.',
    featured_image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop',
    author_name: 'The Wrentham Gazette',
    category: 'town-government',
    tags: ['town-meeting', 'dpw', 'infrastructure', 'construction'],
    is_premium: false,
    is_published: true,
    published_at: '2024-12-10T10:00:00Z',
    created_at: '2024-12-10T10:00:00Z',
    updated_at: '2024-12-10T10:00:00Z',
  },
  // COMMUNITY
  {
    id: '9',
    slug: 'fiske-library-hosts-quilt-exhibit-mary-sandison',
    title: 'Fiske Library to Host Quilt Exhibit by Mary Sandison',
    subtitle: 'Local quilter shares 40+ years of work in Sweatt Room display',
    content: `The **Fiske Public Library** will host a quilt exhibit featuring the work of Wrentham resident **Mary Sandison** from **January 10 through February 14, 2026** in the library's Sweatt Room.

Sandison, who has lived in Wrentham since 2018, is an accomplished quilter with more than **40 years of experience**. Growing up in an environment where sewing machines were "nearly always running," she learned garment sewing from her mother and grandmother before discovering her passion for quilting.

"With a passion for creativity, and a love of the math involved in making a pattern work, quilting was a natural fit and rewarding hobby," according to the library's announcement.

Sandison's work has been displayed at the **Marshfield Fair** and **Maine Quilt Show**, and is proudly displayed in the homes of friends and family throughout the region.

An **opening reception** will be held on **Saturday, January 10 from 12:00-2:00 PM**, giving visitors the opportunity to meet the artist and learn about her quilting techniques.

In addition to the exhibit, Sandison will offer **introductory sewing classes** for both adults and children at the library. Check the Fiske Library calendar at **fiskelib.org** for class dates and registration information.

The Fiske Public Library is located at **110 Randall Road** in Wrentham.`,
    excerpt: 'Wrentham quilter Mary Sandison displays 40+ years of work at Fiske Library through February 14.',
    featured_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
    author_name: 'The Wrentham Gazette',
    category: 'community',
    tags: ['library', 'art', 'quilting', 'fiske-library'],
    is_premium: false,
    is_published: true,
    published_at: '2026-01-02T10:00:00Z',
    created_at: '2026-01-02T10:00:00Z',
    updated_at: '2026-01-02T10:00:00Z',
  },
  {
    id: '10',
    slug: 'wrentham-day-2025-town-common',
    title: '40th Annual Wrentham Day Draws Thousands to Town Common',
    subtitle: 'Community celebration features parade, live music, and local vendors',
    content: `More than **3,000 residents** gathered at the Wrentham Town Common on September 13, 2025 for the **40th annual Wrentham Day** celebration.

The event featured a **parade** down South Street, **live music** from local bands, food from area restaurants, and dozens of vendor booths showcasing local businesses and community organizations.

"Wrentham Day is about bringing our community together," said event organizer **Sarah Mitchell**. "Forty years of this tradition shows how much our residents value these connections."

Highlights of the day included:

**Parade** featuring the King Philip Marching Band, youth sports teams, and local organizations

**Live entertainment** on the gazebo stage throughout the afternoon

**Kids' activities** including face painting, games, and a petting zoo

**Local food vendors** offering everything from barbecue to ice cream

**Community organization booths** where residents could learn about volunteer opportunities

The event also recognized several **Community Service Award** recipients for their contributions to Wrentham.

Town officials noted that Wrentham Day has grown significantly since its founding in 1985, evolving from a small gathering to one of the largest community events in the region.

"This is what makes Wrentham special," said Select Board member **William Harrington**. "Year after year, our residents come together to celebrate our town."`,
    excerpt: 'Annual community celebration marks 40 years with parade, live music, and thousands of attendees.',
    featured_image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=500&fit=crop',
    author_name: 'The Wrentham Gazette',
    category: 'community',
    tags: ['wrentham-day', 'community', 'parade', 'festival'],
    is_premium: false,
    is_published: true,
    published_at: '2025-09-14T10:00:00Z',
    created_at: '2025-09-14T10:00:00Z',
    updated_at: '2025-09-14T10:00:00Z',
  },
  {
    id: '11',
    slug: 'big-apple-farm-announces-closure',
    title: 'Big Apple Farm Announces Closure After Generations of Service',
    subtitle: 'Morse family ends farming operation, considers future of historic property',
    content: `**Big Apple Farm**, a beloved Wrentham institution for generations, will close its doors permanently at the end of the 2024 season, the Morse family announced in November.

The farm, located on **South Street**, has been operated by the Morse family for decades, offering pick-your-own apples, pumpkins, and Christmas trees to families throughout the region.

"This was an incredibly difficult decision," said **Tom Morse**, who has run the farm with his wife **Linda** for over 30 years. "But the time has come for us to step back and enjoy retirement."

The closure marks the end of an era for many Wrentham families who have made Big Apple Farm a tradition.

"We've watched generations of children grow up coming to our farm," Linda Morse said. "That has been the greatest reward of this work."

The family has not announced plans for the property, which includes several acres of orchards and farmland. Local land conservation groups have expressed interest in preserving the agricultural character of the site.

Longtime customers shared memories of apple picking, hayrides, and the farm's famous cider donuts on social media following the announcement.

"Big Apple Farm was where my kids fell in love with autumn," wrote one Facebook commenter. "We'll miss it terribly."

The Morse family thanked the community for decades of support and encouraged residents to visit one last time during the final season.`,
    excerpt: 'Morse family ends generations of farming, leaving future of historic South Street property uncertain.',
    featured_image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
    author_name: 'The Wrentham Gazette',
    category: 'community',
    tags: ['farming', 'local-business', 'closure', 'agriculture'],
    is_premium: false,
    is_published: true,
    published_at: '2024-11-15T10:00:00Z',
    created_at: '2024-11-15T10:00:00Z',
    updated_at: '2024-11-15T10:00:00Z',
  },
  // BUSINESS
  {
    id: '12',
    slug: 'black-friday-traffic-wrentham-outlets-2024',
    title: 'Black Friday Traffic Causes Hours-Long Delays Near Wrentham Outlets',
    subtitle: 'Shoppers face gridlock on Route 1 as premium outlet mall draws record crowds',
    content: `Black Friday shoppers faced **hours-long traffic delays** on Route 1 near the **Wrentham Village Premium Outlets** on November 29, 2024, as the popular shopping destination drew massive crowds seeking holiday deals.

Traffic began building before dawn, with some shoppers arriving as early as **4 AM** for the 6 AM opening. By mid-morning, delays extended several miles in both directions on Route 1, with some drivers reporting **waits of two hours or more** to reach the outlet mall.

Wrentham Police deployed additional officers to manage traffic flow, and the Massachusetts Department of Transportation displayed electronic warnings on Interstate 495 alerting drivers to the congestion.

"We plan for this every year, but the crowds this Black Friday were exceptional," said Wrentham Police Chief **Bill McGrath**. "We recommend shoppers consider visiting during off-peak hours."

The outlet mall, which features more than **100 stores** including Nike, Coach, and Michael Kors, is one of the largest shopping destinations in New England and regularly draws visitors from across the region.

Mall management reported **strong sales** across most retailers, with particular interest in luxury brands and athletic wear.

Local businesses along Route 1 reported mixed results, with some benefiting from the overflow traffic while others saw customers deterred by the congestion.

Shoppers are advised to consider weekday visits or arrive early in the morning or late in the evening to avoid the worst traffic during the holiday shopping season.`,
    excerpt: 'Route 1 gridlock stretches for miles as outlet mall draws record Black Friday crowds.',
    featured_image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=500&fit=crop',
    author_name: 'The Wrentham Gazette',
    category: 'business',
    tags: ['shopping', 'outlets', 'traffic', 'black-friday'],
    is_premium: false,
    is_published: true,
    published_at: '2024-11-30T10:00:00Z',
    created_at: '2024-11-30T10:00:00Z',
    updated_at: '2024-11-30T10:00:00Z',
  },
  // POLICE & FIRE
  {
    id: '13',
    slug: 'gucci-store-theft-wrentham-outlets-arrests',
    title: 'Three Arrested in Gucci Store Theft at Wrentham Outlets',
    subtitle: 'Suspects allegedly stole thousands in merchandise before being apprehended',
    content: `Wrentham Police arrested three individuals on March 15, 2025 in connection with a **theft at the Gucci store** at Wrentham Village Premium Outlets.

Officers responded to a report of shoplifting at approximately **2:30 PM** and located the suspects' vehicle attempting to leave the area. Three individuals were taken into custody without incident.

Police recovered **several thousand dollars** worth of merchandise allegedly stolen from the store.

The suspects, all from out of state, were charged with **larceny over $1,200** and **conspiracy**. They were held pending arraignment in Wrentham District Court.

"Retail theft is a serious problem that affects businesses and ultimately consumers," said Wrentham Police Chief **Bill McGrath**. "We work closely with outlet mall security to address these incidents."

The Gucci store is one of several high-end retailers at the outlet mall that have been targeted by organized retail theft rings in recent years.

Mall security has increased patrols and surveillance in response to the growing trend. Retailers have also implemented additional loss prevention measures.

Anyone with information about retail theft at the outlets is encouraged to contact Wrentham Police at **508-384-2121**.`,
    excerpt: 'Out-of-state suspects apprehended after allegedly stealing thousands from luxury retailer.',
    featured_image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=500&fit=crop',
    author_name: 'The Wrentham Gazette',
    category: 'police-fire',
    tags: ['police', 'theft', 'outlets', 'arrest'],
    is_premium: false,
    is_published: true,
    published_at: '2025-03-16T10:00:00Z',
    created_at: '2025-03-16T10:00:00Z',
    updated_at: '2025-03-16T10:00:00Z',
  },
  {
    id: '14',
    slug: 'abandoned-dog-found-sweatt-park',
    title: 'Abandoned Dog Found at Sweatt Park in Emaciated Condition',
    subtitle: 'Animal control seeks information as investigation continues',
    content: `Wrentham Animal Control is seeking information after an **emaciated dog** was found abandoned at **Sweatt Park** on January 12, 2025.

A park visitor discovered the dog, a female mixed breed, tied to a tree near the parking area. The animal was severely underweight and showed signs of long-term neglect.

"This dog was clearly suffering," said Animal Control Officer **Jennifer Walsh**. "Whoever did this should be held accountable."

The dog was transported to a local veterinary hospital for emergency treatment. Despite her condition, veterinarians are optimistic about her recovery.

"She's a fighter," Walsh said. "With proper care, we expect her to make a full recovery."

Animal abandonment is a **criminal offense** in Massachusetts, punishable by fines and potential jail time.

Anyone with information about the dog's owner or the circumstances of her abandonment is asked to contact Wrentham Animal Control at **508-384-5415** or the Wrentham Police Department.

The investigation is ongoing. Once cleared by veterinarians, the dog will be available for adoption through the town's animal shelter program.

"We're already receiving inquiries from families interested in giving her a forever home," Walsh said. "There are good people out there who want to help."`,
    excerpt: 'Animal control investigating after neglected dog found tied to tree at local park.',
    featured_image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=500&fit=crop',
    author_name: 'The Wrentham Gazette',
    category: 'police-fire',
    tags: ['animal-control', 'dog', 'investigation', 'abandonment'],
    is_premium: false,
    is_published: true,
    published_at: '2025-01-13T10:00:00Z',
    created_at: '2025-01-13T10:00:00Z',
    updated_at: '2025-01-13T10:00:00Z',
  },
  {
    id: '15',
    slug: 'fatal-crash-route-1-january-2025',
    title: 'Pedestrian Killed in Route 1 Crash During Icy Conditions',
    subtitle: 'State police investigating fatal accident near outlet mall',
    content: `A pedestrian was killed in a crash on **Route 1** near the Wrentham Village Premium Outlets on January 8, 2025, during icy road conditions.

Massachusetts State Police responded to the scene at approximately **6:45 PM** and found a pedestrian who had been struck by a vehicle. The victim was pronounced dead at the scene.

The driver of the vehicle remained at the scene and cooperated with investigators.

State Police closed a section of Route 1 for several hours during the investigation, causing significant traffic delays during the evening commute.

"We are conducting a thorough investigation," said State Police spokesperson **David Procopio**. "Road conditions at the time were icy and visibility was limited."

The victim's identity has not been released pending notification of family.

The crash occurred during a period of freezing rain that created hazardous conditions throughout the region. Multiple accidents were reported on area highways during the same time period.

This marks the second fatal pedestrian crash on Route 1 in Wrentham in the past year, renewing calls from residents for improved pedestrian safety measures near the outlet mall.

Anyone who witnessed the crash is asked to contact the State Police Collision Analysis and Reconstruction Section.`,
    excerpt: 'State police investigating after pedestrian struck and killed on Route 1 during freezing rain.',
    featured_image: 'https://images.unsplash.com/photo-1515876305430-f06edab8282a?w=800&h=500&fit=crop',
    author_name: 'The Wrentham Gazette',
    category: 'police-fire',
    tags: ['accident', 'state-police', 'route-1', 'fatal'],
    is_premium: false,
    is_published: true,
    published_at: '2025-01-09T10:00:00Z',
    created_at: '2025-01-09T10:00:00Z',
    updated_at: '2025-01-09T10:00:00Z',
  },
  // SCHOOLS
  {
    id: '16',
    slug: 'screenagers-documentary-king-philip-middle-school',
    title: 'King Philip Middle School Hosts \'Screenagers\' Documentary Screening',
    subtitle: 'Community event addresses teen mental health and technology use',
    content: `**King Philip Regional Middle School** and the **Healthy KP Coalition** hosted a community screening of the documentary **"Screenagers: Growing Up in the Digital Age"** on November 10, 2025, followed by a panel discussion on technology use and teen mental health.

The event, held in the school auditorium, drew approximately **200 parents, students, and educators** for the showing and subsequent conversation.

"Screenagers" explores the impact of smartphones, social media, and video games on young people, featuring interviews with students, parents, and experts in child development.

Following the film, a panel of local professionals led a discussion that included:

**Dr. Sarah Chen** - Child psychologist from Children's Hospital Boston

**Officer Mike Reynolds** - Wrentham Police School Resource Officer

**Emily Thornton** - KP guidance counselor

**Two KP students** who shared their perspectives on social media use

"This is a conversation every family needs to have," said KP Middle School Principal **John McCarthy**. "Technology is part of our children's lives, and we need to help them navigate it safely."

The Healthy KP Coalition, a partnership between the school district and local health organizations, organized the event as part of its ongoing efforts to promote student wellness.

Parents received **resource guides** with tips for managing screen time and talking to teens about technology use. Additional screenings are planned for the spring semester.`,
    excerpt: 'Healthy KP Coalition event draws 200 attendees for film and panel on teen technology use.',
    featured_image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop',
    author_name: 'The Wrentham Gazette',
    category: 'schools',
    tags: ['king-philip', 'mental-health', 'technology', 'parenting'],
    is_premium: false,
    is_published: true,
    published_at: '2025-11-11T10:00:00Z',
    created_at: '2025-11-11T10:00:00Z',
    updated_at: '2025-11-11T10:00:00Z',
  },
];

// Events
export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Select Board Meeting',
    description: 'Regular meeting of the Wrentham Select Board. Public welcome to attend.',
    event_date: '2026-01-13T19:00:00Z',
    location: 'Town Hall, 79 South Street',
    category: 'government',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Paint Night at Fiske Library',
    description: 'Express your creativity at Paint Night with Ashwini! Space limited to 20 adults. Registration required.',
    event_date: '2026-01-08T18:30:00Z',
    location: 'Fiske Public Library, 110 Randall Road',
    category: 'community',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: '3',
    title: 'Quilt Exhibit Opening Reception',
    description: 'Meet quilter Mary Sandison and view her collection of over 40 years of work.',
    event_date: '2026-01-10T12:00:00Z',
    location: 'Fiske Library Sweatt Room',
    category: 'community',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: '4',
    title: 'Planning Board Meeting',
    description: 'Regular meeting of the Wrentham Planning Board.',
    event_date: '2026-01-14T19:00:00Z',
    location: 'Town Hall, 79 South Street',
    category: 'government',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: '5',
    title: 'Fiske Library Book Club',
    description: 'Monthly book discussion group. January selection: "The Covenant of Water" by Abraham Verghese.',
    event_date: '2026-01-21T19:00:00Z',
    location: 'Fiske Public Library',
    category: 'community',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: '6',
    title: 'FY2026 Budget Workshop',
    description: 'Public workshop to review proposed FY2026 town budget.',
    event_date: '2026-01-27T18:00:00Z',
    location: 'Town Hall',
    category: 'government',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: '7',
    title: 'Friends of Fiske Book Sale',
    description: 'Semi-annual used book sale benefiting Fiske Public Library programs.',
    event_date: '2026-02-08T10:00:00Z',
    location: 'Fiske Public Library',
    category: 'community',
    is_published: true,
    created_at: '2026-01-01T00:00:00Z',
  },
];

// Police Logs
export const mockPoliceLogs: PoliceLog[] = [
  {
    id: '1',
    log_type: 'incident',
    date: '2026-01-06',
    time: '14:32',
    location: 'Route 1 near Premium Outlets',
    description: 'Traffic stop resulted in citation for speeding.',
    created_at: '2026-01-06T14:32:00Z',
  },
  {
    id: '2',
    log_type: 'incident',
    date: '2026-01-06',
    time: '09:15',
    location: 'South Street',
    description: 'Report of suspicious vehicle. Officers responded, vehicle had left area.',
    created_at: '2026-01-06T09:15:00Z',
  },
  {
    id: '3',
    log_type: 'fire',
    date: '2026-01-05',
    time: '18:45',
    location: 'Randall Road',
    description: 'Officers assisted Fire/EMS with medical call.',
    created_at: '2026-01-05T18:45:00Z',
  },
  {
    id: '4',
    log_type: 'incident',
    date: '2026-01-05',
    time: '11:20',
    location: 'Wrentham Village Premium Outlets',
    description: 'Report of shoplifting taken. Investigation ongoing.',
    created_at: '2026-01-05T11:20:00Z',
  },
];

// Helper functions for data access
export function getLatestArticles(limit: number = 10): Article[] {
  return mockArticles
    .sort((a, b) => new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime())
    .slice(0, limit);
}

export function getArticlesByCategory(category: string, limit?: number): Article[] {
  const filtered = mockArticles.filter(a => a.category === category);
  return limit ? filtered.slice(0, limit) : filtered;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return mockArticles.find(a => a.slug === slug);
}

export function getUpcomingEvents(limit: number = 4): Event[] {
  const now = new Date();
  return mockEvents
    .filter(e => new Date(e.event_date) >= now)
    .sort((a, b) => new Date(a.event_date).getTime() - new Date(b.event_date).getTime())
    .slice(0, limit);
}

export function getRecentPoliceLogs(limit: number = 5): PoliceLog[] {
  return mockPoliceLogs
    .sort((a, b) => {
      const dateComp = new Date(b.date).getTime() - new Date(a.date).getTime();
      if (dateComp !== 0) return dateComp;
      return (b.time || '').localeCompare(a.time || '');
    })
    .slice(0, limit);
}
