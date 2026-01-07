'use client';

import { useState } from 'react';
import { Metadata } from 'next';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <h1 className="font-display text-2xl font-bold text-green-800 mb-4">Message Sent</h1>
          <p className="text-green-700">
            Thank you for reaching out. We will get back to you as soon as possible.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-display text-4xl font-bold mb-6">Contact Us</h1>
      
      <p className="text-lg text-muted mb-8">
        Have a question, comment, or news tip? Fill out the form below or email us directly at{' '}
        <a href="mailto:news@wrenthamgazette.com" className="text-accent hover:underline">
          news@wrenthamgazette.com
        </a>.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <select
            id="subject"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">Select a subject</option>
            <option value="news-tip">News Tip</option>
            <option value="correction">Correction Request</option>
            <option value="advertising">Advertising Inquiry</option>
            <option value="general">General Question</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <button
          type="submit"
          className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
