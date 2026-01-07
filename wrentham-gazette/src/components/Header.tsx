'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { CATEGORIES } from '@/types';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <>
      {/* Top Bar */}
      <div className="bg-ink text-paper py-2">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-xs font-sans-custom">
          <div className="flex items-center gap-2">
            <span>☀️ 34°F Partly Cloudy</span>
            <span className="opacity-40">|</span>
            <span>Wrentham, MA</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/subscribe" className="opacity-85 hover:opacity-100 transition-opacity">
              Subscribe
            </Link>
            <span className="opacity-40">|</span>
            <Link href="/signin" className="opacity-85 hover:opacity-100 transition-opacity">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-border py-6 text-center bg-paper">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-sans-custom text-[11px] uppercase tracking-[2px] text-muted mb-3">
            {today}
          </p>
          <Link href="/">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-ink leading-none mb-2">
              The Wrentham <span className="text-accent">Gazette</span>
            </h1>
          </Link>
          <p className="font-sans-custom text-sm text-muted tracking-wide">
            Your Source for Local News in Wrentham, Massachusetts
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b-[3px] border-double border-border bg-paper sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center gap-1 flex-wrap">
            <Link href="/" className="nav-link active">
              Home
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="nav-link"
              >
                {cat.name}
              </Link>
            ))}
            <Link href="/events" className="nav-link">
              Events
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex justify-between items-center py-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <button className="p-2 -mr-2" aria-label="Search">
              <Search size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-paper">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-2">
              <Link
                href="/"
                className="nav-link py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="nav-link py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
              <Link
                href="/events"
                className="nav-link py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <hr className="border-border my-2" />
              <Link
                href="/subscribe"
                className="nav-link py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Subscribe
              </Link>
              <Link
                href="/signin"
                className="nav-link py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
