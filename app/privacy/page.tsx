import Navbar from '@/app/components/Navbar'

const LAST_UPDATED = '9 July 2026'

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-3" style={{ color: '#0f1f3d' }}>{heading}</h2>
      <div className="space-y-3 text-sm leading-relaxed" style={{ color: '#374151' }}>
        {children}
      </div>
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight" style={{ color: '#0f1f3d' }}>
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>
          <p className="mt-4 text-sm text-gray-500">
            This policy is written and maintained in English only. If any translated version of this
            site conflicts with this English text, this English version governs.
          </p>
        </div>

        <Section heading="1. Who is responsible for your information">
          <p>
            This policy explains how Mathly ("Mathly", "we", "us"), a South African maths education
            service operated by an individual trading as Mathly, collects, uses, and protects personal
            information under the Protection of Personal Information Act, 2013 ("POPIA"). You can reach
            us about privacy matters at{' '}
            <a href="mailto:hello@mathly.co.za" style={{ color: '#1e40af', fontWeight: 600 }}>hello@mathly.co.za</a>.
          </p>
        </Section>

        <Section heading="2. Information we collect">
          <p><strong>Account information (from you, the parent/guardian):</strong> your name, email address, and password (handled securely by our authentication provider — we never see your password in plain text).</p>
          <p><strong>Child profile information (that you provide about your child):</strong> your child's first name, school grade, and preferred language.</p>
          <p><strong>Subscription and billing information:</strong> which plan each child is on, subscription status, payment amounts and dates, and a payment reference token from our payment processor. We do not collect or store your card number, expiry date, or CVV — these are entered directly with our payment processor, Paystack.</p>
          <p><strong>Live session bookings:</strong> the account holder's name and email, the child's name, the session booked, and its payment status.</p>
          <p><strong>Referral information:</strong> your referral code and, if someone signs up using it, a record linking the two accounts so we can apply referral credit.</p>
          <p><strong>AI assistant questions:</strong> the maths questions and study-guide text you send to the AI assistant, and its replies. We do not attach your name, email, or grade to this content when it is sent for processing.</p>
          <p><strong>Contact and support messages:</strong> anything you send us via our contact form, including your name, email, grade, and message.</p>
        </Section>

        <Section heading="3. Children's personal information">
          <p>
            Mathly is used by children, but accounts are created and controlled by a parent or guardian,
            who provides their child's name, grade, and language preference for the sole purpose of
            personalising that child's access to age-appropriate study content. We collect the minimum
            information needed to provide the service and do not knowingly use children's personal
            information for direct marketing. If you are a parent or guardian and want to review, correct,
            or remove your child's information, contact us using the details in Section 10.
          </p>
        </Section>

        <Section heading="4. How we use your information">
          <ul className="list-disc pl-5 space-y-1">
            <li>to create and run your account and your children's profiles,</li>
            <li>to show the correct study content, difficulty, and language for each child,</li>
            <li>to process subscription payments and live session bookings,</li>
            <li>to send you service emails — for example booking confirmations, payment receipts, session
              reminders, and account/billing notices,</li>
            <li>to respond to support requests and contact-form submissions,</li>
            <li>to track and apply referral credit, and</li>
            <li>to keep the service secure and working as intended.</li>
          </ul>
          <p>
            We do not sell your personal information, and the main Mathly app does not use tracking
            cookies, advertising pixels, or analytics scripts. Our separate pre-launch waitlist page does
            use Google Analytics — see Section 7 for details.
          </p>
        </Section>

        <Section heading="5. Who we share information with">
          <p>We share personal information only with the service providers ("operators" under POPIA) that help us run Mathly, and only to the extent needed for them to do so:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Firebase / Google Cloud</strong> — hosts our account login system and database.</li>
            <li><strong>Paystack</strong> — processes your subscription and session payments; we never see or store your card details.</li>
            <li><strong>Resend</strong> — sends transactional emails on our behalf (booking confirmations, receipts, reminders).</li>
            <li><strong>Anthropic</strong> — processes the text of questions sent to the AI maths assistant, without your name, email, or grade attached.</li>
            <li><strong>Google Meet</strong> — used to host live tutoring sessions; the meeting link is shared with you by email.</li>
            <li><strong>Google Analytics</strong> — used only on our pre-launch waitlist page to measure anonymised visit statistics; see Section 7.</li>
          </ul>
          <p>
            We do not share your information with third parties for their own marketing purposes.
          </p>
        </Section>

        <Section heading="6. Where your information is processed">
          <p>
            Some of the providers listed in Section 5 (Firebase/Google Cloud, Anthropic) may process
            data on servers located outside South Africa. Where this happens, we rely on providers that
            maintain their own security and data protection safeguards for the information they process
            on our behalf.
          </p>
        </Section>

        <Section heading="7. Cookies and local storage">
          <p>
            The main Mathly app does not use advertising or analytics tracking cookies. Our login system
            uses standard authentication session storage to keep you signed in. We also store a small
            amount of non-sensitive information in your browser (such as your AI assistant usage count
            for the month, or in-progress form data) purely so the site works correctly — this stays on
            your device and is not sent to any third-party tracker.
          </p>
          <p>
            Our standalone pre-launch waitlist page uses <strong>Google Analytics</strong> to measure how
            many people visit it before launch. Google Analytics uses cookies and similar technology to
            recognise your browser and collect anonymised, aggregate visit statistics (such as page views
            and general location). This is separate from your Mathly account and is not linked to your
            name, email, or any account data. You can opt out of Google Analytics tracking generally using
            a browser extension such as Google's own{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1e40af', fontWeight: 600 }}
            >
              Analytics Opt-out Browser Add-on
            </a>.
          </p>
        </Section>

        <Section heading="8. How long we keep your information">
          <p>
            We keep your account information for as long as your account is active. If you close your
            account, we delete or de-identify your personal information within a reasonable period,
            except where we are legally required to keep financial records (such as payment records) for
            longer — South African tax law generally requires financial records to be kept for 5 years.
          </p>
        </Section>

        <Section heading="9. Security">
          <p>
            We use reasonable technical and organisational measures to protect your information,
            including encrypted connections (HTTPS), secure password handling through our authentication
            provider, database access rules that restrict who can read or write your data, and a
            payment processor (Paystack) that is responsible for card-data security on its own PCI-DSS
            compliant systems. No system is completely secure, but we take reasonable steps to protect
            your information against loss, misuse, or unauthorised access.
          </p>
        </Section>

        <Section heading="10. Your rights under POPIA">
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>ask us what personal information we hold about you or your child,</li>
            <li>ask us to correct information that is inaccurate or out of date,</li>
            <li>ask us to delete your account and associated personal information, subject to Section 8,</li>
            <li>object to how we process your information, and</li>
            <li>lodge a complaint with the Information Regulator of South Africa if you believe we have
              mishandled your information (<span style={{ color: '#1e40af' }}>inforegulator.org.za</span>).</li>
          </ul>
          <p>
            To exercise any of these rights, contact us using the details in Section 11 — we'll respond
            within a reasonable time.
          </p>
        </Section>

        <Section heading="11. Contact us">
          <p>
            For any privacy question, or to exercise your rights under Section 10, email{' '}
            <a href="mailto:hello@mathly.co.za" style={{ color: '#1e40af', fontWeight: 600 }}>hello@mathly.co.za</a>{' '}
            or use our{' '}
            <a href="/contact" style={{ color: '#1e40af', fontWeight: 600 }}>Contact page</a>.
          </p>
        </Section>

        <Section heading="12. Changes to this policy">
          <p>
            We may update this Privacy Policy as the service changes. We'll update the "Last updated"
            date above whenever we do.
          </p>
        </Section>
      </main>
    </div>
  )
}
