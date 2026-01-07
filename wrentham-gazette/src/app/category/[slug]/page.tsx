import { notFound } from 'next/navigation';
import { getArticlesByCategory } from '@/lib/data';
import { CATEGORIES } from '@/types';
import { ArticleCard, NewsletterSignup, AdPlaceholder } from '@/components';

// Revalidate every 5 minutes
export const revalidate = 300;

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const articles = await getArticlesByCategory(slug);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Category Header */}
      <header className="mb-8 pb-6 border-b border-border">
        <h1 className="font-display text-4xl font-bold mb-2">{category.name}</h1>
        <p className="text-lg text-muted">{category.description}</p>
      </header>

      {/* Articles Grid */}
      {articles.length > 0 ? (
        <>
          {/* Featured Article */}
          {articles[0] && (
            <div className="mb-10">
              <ArticleCard article={articles[0]} size="large" />
            </div>
          )}

          <AdPlaceholder />

          {/* Rest of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
            {articles.slice(1).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-muted">
            No articles in this category yet. Check back soon!
          </p>
        </div>
      )}

      <NewsletterSignup />
    </div>
  );
}

// Generate static params for all categories
export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}
