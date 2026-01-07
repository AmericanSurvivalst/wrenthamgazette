'use client';

import { useState } from 'react';

export default function SubscribePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <h1 className="font-display text-2xl font-bold text-green-800 mb-4">You are Subscribed</h1>
          <p className="text-green-700">
            Thank you for subscribing. Check your inbox for a confirmation email.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-display text-4xl font-bold mb-6">Subscribe to The Wrentham Gazette</h1>
      
      <p className="text-lg text-muted mb-8">
        Get Wrentham news delivered to your inbox. Free weekly digest every Sunday, plus breaking news when it happens.
      </p>

      <div className="bg-ink text-paper rounded-lg p-8 mb-8">
        <h2 className="font-display text-2xl font-bold mb-6 text-center">Free Newsletter</h2>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2 opacity-85">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg text-ink focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50"
          >
            {loading ? 'Subscribing...' : 'Subscribe Free'}
          </button>
        </form>

        <p className="text-center text-sm opacity-75 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold mb-4">What You Will Receive</h2>
      
      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-4">
          <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">1</div>
          <div>
            <h3 className="font-bold mb-1">Weekly Digest (Sundays)</h3>
            <p className="text-muted">A roundup of the week's top stories, upcoming events, and police log summary.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">2</div>
          <div>
            <h3 className="font-bold mb-1">Breaking News Alerts</h3>
            <p className="text-muted">Important news that cannot wait, like severe weather, emergencies, or major town announcements.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">3</div>
          <div>
            <h3 className="font-bold mb-1">Town Meeting Reminders</h3>
            <p className="text-muted">Never miss an important vote. Get reminders before Select Board, Planning Board, and Town Meeting sessions.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
