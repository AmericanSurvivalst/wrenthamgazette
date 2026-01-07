import Link from 'next/link';
import { Article } from '@/types';
import { formatDate, getCategoryColor, getCategoryName } from '@/lib/utils';

interface ArticleCardProps {
  article: Article;
  size?: 'small' | 'medium' | 'large';
  showImage?: boolean;
  showExcerpt?: boolean;
}

export default function ArticleCard({
  article,
  size = 'medium',
  showImage = true,
  showExcerpt = true,
}: ArticleCardProps) {
  const categoryColor = getCategoryColor(article.category);
  const categoryName = getCategoryName(article.category);

  if (size === 'large') {
    return (
      <article className="animate-fade-in">
        {showImage && (
          <div
            className={`w-full h-[360px] ${categoryColor} rounded mb-5 relative overflow-hidden`}
          >
            {article.featured_image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={article.featured_image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/20 text-8xl">📰</span>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-10">
              <p className="text-white/80 text-xs font-sans-custom">
                {article.author_name && `Photo: ${article.author_name}`}
              </p>
            </div>
          </div>
        )}
        <span className="category-tag mb-2">{categoryName}</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-3">
          <Link href={`/articles/${article.slug}`} className="article-link">
            {article.title}
          </Link>
        </h2>
        {showExcerpt && article.excerpt && (
          <p className="text-lg text-muted leading-relaxed mb-3">
            {article.excerpt}
          </p>
        )}
        <p className="byline">
          {article.author_name && (
            <>
              By <strong>{article.author_name}</strong> ·{' '}
            </>
          )}
          {article.published_at && formatDate(article.published_at)}
        </p>
      </article>
    );
  }

  if (size === 'small') {
    return (
      <article className="py-4 border-b border-border last:border-b-0">
        <span className="category-tag text-[10px] mb-1">{categoryName}</span>
        <h3 className="font-display text-[17px] font-semibold leading-snug mb-1">
          <Link href={`/articles/${article.slug}`} className="article-link">
            {article.title}
          </Link>
        </h3>
        <p className="byline">
          {article.published_at && formatDate(article.published_at)}
        </p>
      </article>
    );
  }

  // Medium size (default)
  return (
    <article className="flex flex-col animate-fade-in">
      {showImage && (
        <div
          className={`w-full h-[180px] ${categoryColor} rounded mb-3 relative overflow-hidden`}
        >
          {article.featured_image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={article.featured_image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/20 text-5xl">📰</span>
            </div>
          )}
        </div>
      )}
      <span className="category-tag text-[10px] mb-1">{categoryName}</span>
      <h3 className="font-display text-lg font-semibold leading-snug mb-2">
        <Link href={`/articles/${article.slug}`} className="article-link">
          {article.title}
        </Link>
      </h3>
      {showExcerpt && article.excerpt && (
        <p className="text-[15px] text-muted leading-relaxed mb-2 flex-grow">
          {article.excerpt.length > 120
            ? article.excerpt.slice(0, 120) + '...'
            : article.excerpt}
        </p>
      )}
      <p className="byline">
        {article.published_at && formatDate(article.published_at)}
      </p>
    </article>
  );
}
