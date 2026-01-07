'use client';

import { useState } from 'react';

export default function SubmitTipPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tipType: '',
    tip: '',
    anonymous: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    console.log('Tip submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <h1 className="font-display text-2xl font-bold text-green-800 mb-4">Tip Received</h1>
          <p className="text-green-700">
            Thank you for your news tip. Our team will review it and follow up if we need more information.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-display text-4xl font-bold mb-6">Submit a News Tip</h1>
      
      <p className="text-lg text-muted mb-4">
        Have a story we should cover? Know about something happening in Wrentham? We want to hear from you.
      </p>
      
      <p className="text-muted mb-8">
        All tips are reviewed by our team. You can choose to remain anonymous. For urgent tips, email us directly at{' '}
        <a href="mailto:tips@wrenthamgazette.com" className="text-accent hover:underline">
          tips@wrenthamgazette.com
        </a>.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <input
            type="checkbox"
            id="anonymous"
            checked={formData.anonymous}
            onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
            className="w-5 h-5 rounded border-border"
          />
          <label htmlFor="anonymous" className="font-medium">
            Submit anonymously
          </label>
        </div>

        {!formData.anonymous && (
          <>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
          </>
        )}

        <div>
          <label htmlFor="tipType" className="block text-sm font-medium mb-2">
            What type of tip is this?
          </label>
          <select
            id="tipType"
            required
            value={formData.tipType}
            onChange={(e) => setFormData({ ...formData, tipType: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">Select a category</option>
            <option value="town-government">Town Government</option>
            <option value="schools">Schools</option>
            <option value="sports">Sports</option>
            <option value="business">Business</option>
            <option value="community">Community Event</option>
            <option value="police-fire">Police or Fire</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="tip" className="block text-sm font-medium mb-2">
            Your Tip
          </label>
          <textarea
            id="tip"
            required
            rows={8}
            placeholder="Tell us what you know. Include details like who, what, when, where, and why this matters to Wrentham residents."
            value={formData.tip}
            onChange={(e) => setFormData({ ...formData, tip: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <button
          type="submit"
          className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
        >
          Submit Tip
        </button>
      </form>
    </main>
  );
}
