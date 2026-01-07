import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getArticleBySlug, getLatestArticles } from '@/lib/mock-data';
import { formatDate, getCategoryName, getReadingTime } from '@/lib/utils';
import { ArticleCard, NewsletterSignup, AdPlaceholder } from '@/components';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getLatestArticles(4).filter((a) => a.id !== article.id);
  const readingTime = getReadingTime(article.content);

  return (
    <article className="max-w-4xl mx-auto px-6 py-8">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-sans-custom text-muted hover:text-accent transition-colors mb-6"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      {/* Article Header */}
      <header className="mb-8">
        <Link
          href={`/category/${article.category}`}
          className="category-tag hover:underline"
        >
          {getCategoryName(article.category)}
        </Link>
        
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-3 mb-4">
          {article.title}
        </h1>
        
        {article.subtitle && (
          <p className="text-xl text-muted leading-relaxed mb-4">
            {article.subtitle}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-sans-custom text-muted">
          {article.author_name && (
            <span>
              By <strong className="text-ink">{article.author_name}</strong>
            </span>
          )}
          {article.published_at && (
            <span>{formatDate(article.published_at)}</span>
          )}
          <span>{readingTime} min read</span>
        </div>
      </header>

      {/* Featured Image */}
      {article.featured_image && (
        <div className="relative h-[300px] sm:h-[400px] bg-gray-200 rounded-lg overflow-hidden mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.featured_image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="prose-article max-w-none">
        {article.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-highlight text-sm font-sans-custom rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Ad */}
      <AdPlaceholder />

      {/* Newsletter */}
      <NewsletterSignup />

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold mb-6 pb-2 border-b-2 border-ink">
            More Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.slice(0, 2).map((related) => (
              <ArticleCard key={related.id} article={related} showExcerpt={false} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

// Generate static params for all articles
export async function generateStaticParams() {
  const articles = getLatestArticles(100);
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
