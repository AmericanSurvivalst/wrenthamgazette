import Link from 'next/link';
import { CATEGORIES } from '@/types';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/">
              <h2 className="font-display text-2xl font-bold mb-4">
                The Wrentham <span className="text-accent">Gazette</span>
              </h2>
            </Link>
            <p className="text-sm opacity-75 leading-relaxed mb-4">
              Independent local journalism for Wrentham, Massachusetts.
            </p>
            <Link
              href="/subscribe"
              className="inline-block bg-accent text-white px-4 py-2 rounded text-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              Subscribe Free
            </Link>
          </div>

          {/* Sections */}
          <div>
            <h3 className="font-sans-custom text-xs font-semibold uppercase tracking-wider opacity-60 mb-4">
              Sections
            </h3>
            <ul className="space-y-2">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm opacity-85 hover:opacity-100 transition-opacity"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/events"
                  className="text-sm opacity-85 hover:opacity-100 transition-opacity"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-sans-custom text-xs font-semibold uppercase tracking-wider opacity-60 mb-4">
              About
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm opacity-85 hover:opacity-100 transition-opacity"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm opacity-85 hover:opacity-100 transition-opacity"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/advertise"
                  className="text-sm opacity-85 hover:opacity-100 transition-opacity"
                >
                  Advertise
                </Link>
              </li>
              <li>
                <Link
                  href="/submit-tip"
                  className="text-sm opacity-85 hover:opacity-100 transition-opacity"
                >
                  Submit a Tip
                </Link>
              </li>
            </ul>
          </div>

          {/* Town Resources */}
          <div>
            <h3 className="font-sans-custom text-xs font-semibold uppercase tracking-wider opacity-60 mb-4">
              Town Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.wrentham.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-85 hover:opacity-100 transition-opacity"
                >
                  Town of Wrentham
                </a>
              </li>
              <li>
                <a
                  href="https://www.kingphilip.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-85 hover:opacity-100 transition-opacity"
                >
                  King Philip Schools
                </a>
              </li>
              <li>
                <a
                  href="https://fiskelib.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-85 hover:opacity-100 transition-opacity"
                >
                  Fiske Public Library
                </a>
              </li>
              <li>
                <a
                  href="https://www.premiumoutlets.com/outlet/wrentham-village"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-85 hover:opacity-100 transition-opacity"
                >
                  Wrentham Outlets
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans-custom opacity-60">
          <p>© 2026 The Wrentham Gazette</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:opacity-100 transition-opacity">
              Privacy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:opacity-100 transition-opacity">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
