import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Wrentham Gazette',
  description: 'Privacy policy for The Wrentham Gazette website.',
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-display text-4xl font-bold mb-6">Privacy Policy</h1>
      
      <p className="text-muted mb-8">Last updated: January 2026</p>

      <div className="prose prose-lg space-y-6">
        <section>
          <h2 className="font-display text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="mb-4">
            When you subscribe to our newsletter, we collect your email address. When you submit a contact form or news tip, we collect the information you provide, which may include your name, email, phone number, and message content.
          </p>
          <p className="mb-4">
            We also collect standard web analytics data, including pages visited, time spent on site, and referring websites. This data is aggregated and does not personally identify you.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Send you our newsletter if you have subscribed</li>
            <li>Respond to your inquiries and news tips</li>
            <li>Improve our website and content</li>
            <li>Understand how readers use our site</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-4">Information Sharing</h2>
          <p className="mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who help us operate our website and send emails, but they are bound to keep your information confidential.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-4">Cookies</h2>
          <p className="mb-4">
            We use cookies to improve your experience on our site. You can disable cookies in your browser settings, though some features may not work properly without them.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-4">Your Rights</h2>
          <p className="mb-4">
            You can unsubscribe from our newsletter at any time by clicking the unsubscribe link in any email. You can also contact us to request access to, correction of, or deletion of your personal information.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have questions about this privacy policy, please contact us at{' '}
            <a href="mailto:privacy@wrenthamgazette.com" className="text-accent hover:underline">
              privacy@wrenthamgazette.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
