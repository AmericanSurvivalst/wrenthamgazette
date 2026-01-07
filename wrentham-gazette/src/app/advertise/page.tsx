import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Advertise | The Wrentham Gazette',
  description: 'Reach Wrentham residents with local advertising in The Wrentham Gazette.',
};

export default function AdvertisePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-display text-4xl font-bold mb-6">Advertise With Us</h1>
      
      <p className="text-lg text-muted mb-8">
        Reach engaged Wrentham residents who care about their community. The Wrentham Gazette offers affordable advertising options for local businesses.
      </p>

      <div className="bg-warm rounded-lg p-8 mb-8">
        <h2 className="font-display text-2xl font-bold mb-4">Why Advertise Locally?</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            <span>Reach 12,000+ Wrentham residents directly</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            <span>Target readers actively interested in local news and events</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            <span>Support independent local journalism</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            <span>Flexible options from banner ads to sponsored content</span>
          </li>
        </ul>
      </div>

      <h2 className="font-display text-2xl font-bold mb-4">Advertising Options</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="border border-border rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">Website Banner Ads</h3>
          <p className="text-muted mb-4">
            Prominent placement on our website sidebar and article pages. Seen by every visitor.
          </p>
          <p className="text-accent font-semibold">Starting at $75/month</p>
        </div>

        <div className="border border-border rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">Newsletter Sponsorship</h3>
          <p className="text-muted mb-4">
            Featured placement in our weekly email newsletter sent to subscribers.
          </p>
          <p className="text-accent font-semibold">Starting at $50/week</p>
        </div>

        <div className="border border-border rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">Sponsored Content</h3>
          <p className="text-muted mb-4">
            Tell your story with a dedicated article about your business or event.
          </p>
          <p className="text-accent font-semibold">Starting at $150/article</p>
        </div>

        <div className="border border-border rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">Event Listings</h3>
          <p className="text-muted mb-4">
            Promote your business event in our community calendar with enhanced visibility.
          </p>
          <p className="text-accent font-semibold">Starting at $25/listing</p>
        </div>
      </div>

      <div className="bg-ink text-paper rounded-lg p-8 text-center">
        <h2 className="font-display text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 opacity-85">
          Contact us to discuss advertising options that fit your budget and goals.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
        >
          Contact Us
        </Link>
        <p className="mt-4 text-sm opacity-75">
          Or email directly: <a href="mailto:advertise@wrenthamgazette.com" className="underline">advertise@wrenthamgazette.com</a>
        </p>
      </div>
    </main>
  );
}
