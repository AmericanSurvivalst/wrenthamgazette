import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | The Wrentham Gazette',
  description: 'Terms of service for The Wrentham Gazette website.',
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-display text-4xl font-bold mb-6">Terms of Service</h1>
      
      <p className="text-muted mb-8">Last updated: January 2026</p>

      <div className="prose prose-lg space-y-6">
        <section>
          <h2 className="font-display text-2xl font-bold mb-4">Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using The Wrentham Gazette website, you accept and agree to be bound by these terms. If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-4">Use of Content</h2>
          <p className="mb-4">
            All content on this website, including articles, images, and graphics, is the property of The Wrentham Gazette unless otherwise noted. You may share our articles on social media and link to our content, but you may not reproduce entire articles without permission.
          </p>
          <p className="mb-4">
            Brief quotes with attribution and a link back to the original article are permitted for commentary, news reporting, and educational purposes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-4">User Submissions</h2>
          <p className="mb-4">
            When you submit news tips, comments, or other content to us, you grant The Wrentham Gazette a non-exclusive license to use, publish, and distribute that content. You represent that you have the right to submit any content you provide.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-4">Accuracy of Information</h2>
          <p className="mb-4">
            We strive for accuracy in our reporting. If you believe we have published incorrect information, please contact us and we will review and correct errors promptly. We are not liable for any damages arising from reliance on information published on this site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-4">Third Party Links</h2>
          <p className="mb-4">
            Our website may contain links to external websites. We are not responsible for the content or privacy practices of these sites. These links are provided for convenience and do not imply endorsement.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-4">Advertising</h2>
          <p className="mb-4">
            Advertisements on our website are clearly identified. Advertising content does not reflect the views or endorsement of The Wrentham Gazette. Sponsored content is labeled as such.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-4">Changes to Terms</h2>
          <p className="mb-4">
            We may update these terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-4">Contact</h2>
          <p className="mb-4">
            Questions about these terms can be directed to{' '}
            <a href="mailto:legal@wrenthamgazette.com" className="text-accent hover:underline">
              legal@wrenthamgazette.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
