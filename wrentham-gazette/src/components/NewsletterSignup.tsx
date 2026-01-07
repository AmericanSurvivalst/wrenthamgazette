'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage('Thanks for subscribing! Check your inbox to confirm.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="bg-ink text-paper py-12 px-6 rounded text-center my-10">
      <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
        Get Wrentham News in Your Inbox
      </h2>
      <p className="text-base opacity-85 mb-6 max-w-md mx-auto">
        Free weekly digest every Sunday. Breaking news when it happens. No spam, ever.
      </p>

      {status === 'success' ? (
        <div className="bg-green-800/50 text-green-100 py-3 px-6 rounded max-w-md mx-auto">
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded bg-white text-gray-900 border-2 border-white font-sans-custom text-sm focus:outline-none focus:border-accent placeholder:text-gray-500"
            disabled={status === 'loading'}
            required
          />
          <button
            type="submit"
            className="btn-primary whitespace-nowrap disabled:opacity-50"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="text-red-400 text-sm mt-3">{message}</p>
      )}
    </section>
  );
}
