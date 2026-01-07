# The Wrentham Gazette

A modern, digital-first local newspaper for Wrentham, Massachusetts. Built with Next.js 14, Supabase, and Tailwind CSS.

## Features

- 📰 **Article Management** — Full CRUD for news articles with categories, tags, and premium content flags
- 📅 **Events Calendar** — Community events from town meetings to library programs
- 🚔 **Police & Fire Log** — Public safety reports in an easy-to-read format
- 📧 **Newsletter Signup** — Email capture with confirmation workflow
- 💰 **Monetization Ready** — Ad placement system and subscription tier support
- 📱 **Fully Responsive** — Beautiful on desktop, tablet, and mobile
- ⚡ **Fast & SEO Optimized** — Static generation where possible, optimized metadata

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **Fonts**: Playfair Display, Source Serif 4, Inter

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account (free tier works)
- Vercel account (optional, for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wrentham-gazette.git
   cd wrentham-gazette
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to SQL Editor and run the contents of `supabase-schema.sql`
   - Copy your project URL and anon key from Settings > API

4. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your Supabase credentials.

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── articles/[slug]/   # Article detail pages
│   ├── category/[slug]/   # Category listing pages
│   ├── events/            # Events calendar page
│   ├── layout.tsx         # Root layout with header/footer
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ArticleCard.tsx
│   ├── NewsletterSignup.tsx
│   └── ...
├── lib/                   # Utilities and data
│   ├── supabase.ts       # Supabase client
│   ├── mock-data.ts      # Development mock data
│   └── utils.ts          # Helper functions
└── types/                 # TypeScript types
    └── index.ts
```

## Content Categories

- **Town Government** — Select Board, Planning, Town Meeting
- **Schools** — King Philip Regional, Wrentham Public Schools
- **Sports** — KP Warriors athletics coverage
- **Police & Fire** — Public safety news and logs
- **Business** — Local business news
- **Community** — Events, people, community life
- **Opinion** — Editorials and letters

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual

```bash
npm run build
npm start
```

## Adding Content

### During Development (Mock Data)

Edit `src/lib/mock-data.ts` to add articles, events, and police logs.

### Production (Supabase)

1. Set up Supabase with the provided schema
2. Use Supabase Studio or build an admin interface
3. Articles will be fetched from the database automatically

## Monetization

### Subscriptions

The schema supports subscription tiers:
- **Free** — Access to all non-premium content
- **Subscriber** — Full access, $6-8/month
- **Premium** — Early access, exclusive content

Integrate with Stripe for payments.

### Advertising

Built-in support for:
- Sidebar ads
- In-article ads
- Newsletter sponsorships
- Homepage placements

Track impressions and clicks automatically.

## Customization

### Styling

- Edit `src/app/globals.css` for global styles
- Customize colors in the `:root` CSS variables
- Fonts are loaded via `next/font/google`

### Branding

- Update masthead text in `Header.tsx`
- Replace favicon in `public/`
- Update metadata in `layout.tsx`

## License

MIT License — feel free to use this for your own local news project.

## Credits

Built with ❤️ for Wrentham, Massachusetts.

---

**Need help?** Open an issue or reach out.
