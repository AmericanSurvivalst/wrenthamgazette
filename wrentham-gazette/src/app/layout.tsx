import type { Metadata } from 'next';
import { Header, Footer } from '@/components';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'The Wrentham Gazette | Local News for Wrentham, MA',
    template: '%s | The Wrentham Gazette',
  },
  description:
    'Your source for local news in Wrentham, Massachusetts. Covering town government, King Philip schools, sports, police & fire, business, and community events.',
  keywords: [
    'Wrentham',
    'Wrentham MA',
    'Wrentham Massachusetts',
    'Wrentham news',
    'King Philip',
    'King Philip Warriors',
    'King Philip football',
    'King Philip marching band',
    'Wrentham town meeting',
    'Wrentham Select Board',
    'Wrentham police log',
    'Fiske Library',
    'Wrentham Premium Outlets',
    'Norfolk County news',
    'Hockomock League',
  ],
  authors: [{ name: 'The Wrentham Gazette' }],
  creator: 'The Wrentham Gazette',
  publisher: 'The Wrentham Gazette',
  metadataBase: new URL('https://wrenthamgazette.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'The Wrentham Gazette',
    description: 'Your source for local news in Wrentham, Massachusetts',
    type: 'website',
    locale: 'en_US',
    url: 'https://wrenthamgazette.com',
    siteName: 'The Wrentham Gazette',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Wrentham Gazette',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Wrentham Gazette',
    description: 'Your source for local news in Wrentham, Massachusetts',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
