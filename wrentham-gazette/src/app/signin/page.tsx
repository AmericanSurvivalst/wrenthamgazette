'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would connect to Supabase Auth
    console.log('Sign in attempt:', email);
  };

  return (
    <main className="max-w-md mx-auto px-6 py-12">
      <h1 className="font-display text-3xl font-bold mb-6 text-center">Sign In</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-muted">
        <p>
          Do not have an account?{' '}
          <Link href="/subscribe" className="text-accent hover:underline">
            Subscribe for free
          </Link>
        </p>
      </div>
    </main>
  );
}
