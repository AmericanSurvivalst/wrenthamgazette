import type { Metadata } from 'next';
import { Header, Footer } from '@/components';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Wrentham Gazette — Local News for Wrentham, MA',
  description:
    'Your source for local news in Wrentham, Massachusetts. Covering town government, King Philip schools, sports, police & fire, business, and community events.',
  keywords: [
    'Wrentham',
    'Massachusetts',
    'local news',
    'King Philip',
    'Wrentham MA',
    'town meeting',
    'police log',
    'community news',
  ],
  authors: [{ name: 'The Wrentham Gazette' }],
  openGraph: {
    title: 'The Wrentham Gazette',
    description: 'Your source for local news in Wrentham, Massachusetts',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Wrentham Gazette',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Wrentham Gazette',
    description: 'Your source for local news in Wrentham, Massachusetts',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
