import Link from 'next/link';

export default function AdPlaceholder() {
  return (
    <div className="bg-highlight border-2 border-dashed border-border rounded py-8 px-6 text-center my-8">
      <p className="font-sans-custom text-xs text-muted">
        <strong className="text-ink block mb-1">Advertisement</strong>
        Your business here — Reach 12,000+ Wrentham residents.{' '}
        <Link href="/advertise" className="text-accent hover:underline">
          Advertise with us →
        </Link>
      </p>
    </div>
  );
}
