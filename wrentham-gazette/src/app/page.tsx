import Link from 'next/link';
import {
  ArticleCard,
  NewsletterSignup,
  PoliceLogSection,
  EventsSection,
  BreakingNews,
  AdPlaceholder,
} from '@/components';
import {
  getLatestArticles,
  getArticlesByCategory,
  getUpcomingEvents,
  getRecentPoliceLogs,
} from '@/lib/mock-data';

export default function HomePage() {
  const latestArticles = getLatestArticles(10);
  const heroArticle = latestArticles[0];
  const sidebarArticles = latestArticles.slice(1, 5);
  
  const townGovArticles = getArticlesByCategory('town-government', 3);
  const sportsArticles = getArticlesByCategory('sports', 3);
  const communityArticles = getArticlesByCategory('community', 3);
  const businessArticles = getArticlesByCategory('business', 3);
  
  const upcomingEvents = getUpcomingEvents(4);
  const policeLogs = getRecentPoliceLogs(4);

  return (
    <>
      <BreakingNews
        headline="King Philip Football wins Division 3 State Championship at Gillette Stadium"
        link="/articles/king-philip-football-wins-division-3-state-championship"
      />

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 pb-8 border-b border-border mb-8">
          {/* Main Hero */}
          <div>
            {heroArticle && <ArticleCard article={heroArticle} size="large" />}
          </div>

          {/* Sidebar */}
          <aside className="lg:border-l lg:border-border lg:pl-8">
            <h3 className="font-display text-lg font-bold mb-4 pb-2 border-b-2 border-ink">
              Top Stories
            </h3>
            {sidebarArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                size="small"
                showImage={false}
              />
            ))}
          </aside>
        </section>

        {/* Town Government Section */}
        <section className="mb-10 animate-fade-in">
          <div className="section-header">
            <h2 className="section-title">Town Government</h2>
            <Link href="/category/town-government" className="section-link">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {townGovArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* Ad */}
        <AdPlaceholder />

        {/* Sports Section */}
        <section className="mb-10 animate-fade-in">
          <div className="section-header">
            <h2 className="section-title">King Philip Sports</h2>
            <Link href="/category/sports" className="section-link">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {sportsArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* Police Log Section */}
        <PoliceLogSection logs={policeLogs} />

        {/* Newsletter CTA */}
        <NewsletterSignup />

        {/* Events Section */}
        <EventsSection events={upcomingEvents} />

        {/* Community & Business Section */}
        <section className="mt-10 mb-10 animate-fade-in">
          <div className="section-header">
            <h2 className="section-title">Business & Community</h2>
            <Link href="/category/community" className="section-link">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {[...businessArticles, ...communityArticles].slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
