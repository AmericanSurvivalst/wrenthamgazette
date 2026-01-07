import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import { getArticleBySlug, getLatestArticles, getAllArticleSlugs } from '@/lib/data';
import { formatDate, getCategoryName, getReadingTime } from '@/lib/utils';
import { ArticleCard, NewsletterSignup, AdPlaceholder } from '@/components';

// Revalidate every 5 minutes
export const revalidate = 300;

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.excerpt || article.subtitle,
    keywords: article.tags,
    authors: [{ name: article.author_name || 'The Wrentham Gazette' }],
    openGraph: {
      title: article.title,
      description: article.excerpt || article.subtitle,
      type: 'article',
      publishedTime: article.published_at,
      modifiedTime: article.updated_at,
      authors: [article.author_name || 'The Wrentham Gazette'],
      images: article.featured_image ? [article.featured_image] : [],
      siteName: 'The Wrentham Gazette',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt || article.subtitle,
      images: article.featured_image ? [article.featured_image] : [],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = await getLatestArticles(4);
  const relatedArticles = allArticles.filter((a) => a.id !== article.id);
  const readingTime = getReadingTime(article.content);

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt || article.subtitle,
    image: article.featured_image,
    datePublished: article.published_at,
    dateModified: article.updated_at,
    author: {
      '@type': 'Organization',
      name: article.author_name || 'The Wrentham Gazette',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Wrentham Gazette',
      logo: {
        '@type': 'ImageObject',
        url: 'https://wrenthamgazette.com/logo.png',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
        {article.content.split('\n\n').map((paragraph, index) => {
          // Convert **text** to bold
          const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
          return (
            <p key={index}>
              {parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={i}>{part.slice(2, -2)}</strong>;
                }
                return part;
              })}
            </p>
          );
        })}
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
    </>
  );
}

// Generate static params for all articles
export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}
