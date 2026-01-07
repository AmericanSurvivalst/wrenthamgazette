import Link from 'next/link';

interface BreakingNewsProps {
  headline: string;
  link: string;
}

export default function BreakingNews({ headline, link }: BreakingNewsProps) {
  return (
    <div className="bg-accent text-white py-3 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 text-sm font-sans-custom">
        <span className="bg-white text-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-sm">
          Breaking
        </span>
        <Link href={link} className="hover:underline">
          {headline}
        </Link>
      </div>
    </div>
  );
}
