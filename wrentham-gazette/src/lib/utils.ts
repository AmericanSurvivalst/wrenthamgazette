import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(dateString: string, options?: Intl.DateTimeFormatOptions): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options || {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export function formatEventDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  }) + ' • ' + date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });
}

export function formatLogDate(dateString: string, timeString?: string): string {
  const date = new Date(dateString);
  const monthDay = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  
  if (timeString) {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${monthDay}, ${displayHour}:${minutes} ${ampm}`;
  }
  
  return monthDay;
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'town-government': 'bg-emerald-900',
    'schools': 'bg-blue-900',
    'sports': 'bg-slate-800',
    'police-fire': 'bg-zinc-800',
    'business': 'bg-amber-900',
    'community': 'bg-stone-700',
    'opinion': 'bg-purple-900',
  };
  return colors[category] || 'bg-gray-800';
}

export function getCategoryName(slug: string): string {
  const names: Record<string, string> = {
    'town-government': 'Town Government',
    'schools': 'Schools',
    'sports': 'Sports',
    'police-fire': 'Police & Fire',
    'business': 'Business',
    'community': 'Community',
    'opinion': 'Opinion',
  };
  return names[slug] || slug;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
