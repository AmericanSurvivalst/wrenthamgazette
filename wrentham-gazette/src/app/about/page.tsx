import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | The Wrentham Gazette',
  description: 'Learn about The Wrentham Gazette, an independent local news source for Wrentham, Massachusetts.',
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-display text-4xl font-bold mb-6">About The Wrentham Gazette</h1>
      
      <div className="prose prose-lg">
        <p className="text-lg text-muted mb-6">
          The Wrentham Gazette is an independent, digital-first local news source dedicated to covering Wrentham, Massachusetts.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p className="mb-4">
          We believe every community deserves quality local journalism. Our mission is to keep Wrentham residents informed about the decisions, events, and stories that shape daily life in our town.
        </p>
        <p className="mb-4">
          From Select Board meetings to King Philip sports, from police logs to library programs, we cover the news that matters to the people who live here.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4">What We Cover</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Town Government:</strong> Select Board, Planning Board, Town Meeting, budgets, and local policy</li>
          <li><strong>Schools:</strong> King Philip Regional School District and Wrentham Public Schools</li>
          <li><strong>Sports:</strong> King Philip Warriors athletics across all seasons</li>
          <li><strong>Police & Fire:</strong> Public safety news and incident logs</li>
          <li><strong>Business:</strong> Local business openings, closings, and economic news</li>
          <li><strong>Community:</strong> Events, people, and the stories that connect us</li>
        </ul>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4">About Wrentham</h2>
        <p className="mb-4">
          Wrentham is a town of approximately 12,000 residents located in Norfolk County, Massachusetts, about 35 miles southwest of Boston. The town is known for its historic character, strong schools, and the Wrentham Village Premium Outlets shopping center.
        </p>
        <p className="mb-4">
          Wrentham is part of the King Philip Regional School District, which also serves Norfolk and Plainville. The district is home to the King Philip Warriors, whose athletic and performing arts programs have earned state and national recognition.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">
          Have a news tip, question, or feedback? We would love to hear from you.
        </p>
        <p className="mb-4">
          <a href="/contact" className="text-accent hover:underline">Contact us here</a> or email us directly at <a href="mailto:news@wrenthamgazette.com" className="text-accent hover:underline">news@wrenthamgazette.com</a>.
        </p>
      </div>
    </main>
  );
}
