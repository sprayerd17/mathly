import Navbar from '@/app/components/Navbar'

const LAST_UPDATED = '3 August 2026'

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
            This policy explains how Mathly (&quot;Mathly&quot;, &quot;we&quot;, &quot;us&quot;), a South African maths education
            service operated by an individual trading as Mathly, collects, uses, and protects personal
            information under the Protection of Personal Information Act, 2013 (&quot;POPIA&quot;). Divan Bosman is
            Mathly&apos;s Information Officer under POPIA. You can reach us about privacy matters at{' '}
            <a href="mailto:hello@mathly.co.za" style={{ color: '#1e40af', fontWeight: 600 }}>hello@mathly.co.za</a>.
          </p>
        </Section>

        <Section heading="2. Information we collect">
          <p><strong>Account information (from you, the parent/guardian):</strong> your name, email address, and password (handled securely by our authentication provider — we never see your password in plain text).</p>
          <p><strong>Child profile information (that you provide about your child):</strong> your child&apos;s first name, school grade, and preferred language.</p>
          <p><strong>Subscription and billing information:</strong> which plan each child is on, subscription status, payment amounts and dates, and a payment reference token from our payment processor. We do not collect or store your card number, expiry date, or CVV — these are entered directly with our payment processor, Paystack.</p>
          <p><strong>Live session bookings:</strong> the account holder&apos;s name and email, the child&apos;s name, the session booked, and its payment status.</p>
          <p><strong>Referral information:</strong> your referral code and, if someone signs up using it, a record linking the two accounts so we can apply referral credit.</p>
          <p><strong>AI assistant questions:</strong> the maths questions and study-guide text you send to the AI assistant, and its replies. We do not attach your name, email, or grade to this content when it is sent for processing. Where an AI assistant reply is separately checked for mathematical correctness, we may keep a text-only copy of that conversation (the questions, the answer, your child&apos;s grade, and language) to help us develop and train our own future AI tutoring model. This includes replies confirmed correct, and replies the check finds incorrect — which we keep flagged as incorrect, together with the checker&apos;s own written reasoning about the mistake, so the future model can learn to avoid it. This copy is never linked to your name, email, or account.</p>
          <p><strong>Test Analyzer submissions (Max plan):</strong> photos of a test paper and answer sheet you upload for AI-generated feedback, and your child&apos;s grade. By default, nothing about this changes: the photos are processed to generate your feedback and are deleted straight afterwards — they are not stored by us.</p>
          <p><strong>Optional photo retention for AI training:</strong> on the Test Analyzer form, you can tick an optional box — unticked by default — to let us keep your uploaded photos so we can use them to help train our own future AI tutoring model. Leaving the box unticked means your photos are deleted exactly as described above. If you tick it, the photos are stored privately, are never made public, and are never shared beyond the service providers already listed in Section 5 — they are used only for AI training. You can ask us to delete any retained photos at any time using the contact details in Section 11.</p>
          <p>We may separately keep a text-only, structured summary of that submission (the text of each question as printed on the paper, transcribed by the AI; topics covered; marks awarded and marks available; the answer given; the correct answer; a category describing the type of error made, such as conceptual, arithmetic, or misreading the question; the language of the paper; general strengths/weaknesses; any optional note you typed about what feedback you wanted; and, where your child reviews the feedback, any confirmation or correction they give of the AI&apos;s marking) for the same AI-training purpose described above. This text-only summary is kept regardless of whether you opt in to photo retention, and never includes the photos themselves. This summary does not contain your name, email, or account ID. It does carry a pseudonymous learner reference — a one-way cryptographic code derived from your account — which lets us group a learner&apos;s own submissions together over time to see how they progress. This reference is pseudonymous, not anonymous: because it is derived from your account, we could in principle recompute it to relink these records back to your account, even though the record itself does not store your name, email, or account ID.</p>
          <p><strong>Prep pack purchases:</strong> which prep pack you bought from our Store, the price paid, and a payment reference token from Paystack (see Section 5). We do not store your card details.</p>
          <p><strong>Contact and support messages:</strong> anything you send us via our contact form, including your name, email, grade, and message.</p>
        </Section>

        <Section heading="3. Children's personal information">
          <p>
            Mathly is used by children, but accounts are created and controlled by a parent or guardian,
            who provides their child&apos;s name, grade, and language preference for the sole purpose of
            personalising that child&apos;s access to age-appropriate study content. We collect the minimum
            information needed to provide the service and do not knowingly use children&apos;s personal
            information for direct marketing. If you are a parent or guardian and want to review, correct,
            or remove your child&apos;s information, contact us using the details in Section 11.
          </p>
        </Section>

        <Section heading="4. How we use your information">
          <ul className="list-disc pl-5 space-y-1">
            <li>to create and run your account and your children&apos;s profiles,</li>
            <li>to show the correct study content, difficulty, and language for each child,</li>
            <li>to process subscription payments and live session bookings,</li>
            <li>to send you service emails — for example booking confirmations, payment receipts, session
              reminders, and account/billing notices,</li>
            <li>to respond to support requests and contact-form submissions,</li>
            <li>to track and apply referral credit,</li>
            <li>to fulfil prep pack purchases from our Store,</li>
            <li>to develop and improve our AI features, including training our own future AI tutoring
              model using AI assistant exchanges (both those confirmed correct and those flagged
              incorrect, with the checker&apos;s reasoning) and Test Analyzer summaries, which carry a
              pseudonymous learner reference (see Section 2), and</li>
            <li>to keep the service secure and working as intended.</li>
          </ul>
          <p>
            We do not sell your personal information, and the main Mathly app does not use tracking
            cookies, advertising pixels, or analytics scripts. Our separate pre-launch waitlist page does
            use Google Analytics — see Section 7 for details.
          </p>
        </Section>

        <Section heading="5. Who we share information with">
          <p>We share personal information only with the service providers (&quot;operators&quot; under POPIA) that help us run Mathly, and only to the extent needed for them to do so:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Firebase / Google Cloud</strong> — hosts our account login system and database, and stores any Test Analyzer photos you have opted to retain (see Section 2).</li>
            <li><strong>Paystack</strong> — processes your subscription and session payments; we never see or store your card details.</li>
            <li><strong>Resend</strong> — sends transactional emails on our behalf (booking confirmations, receipts, reminders).</li>
            <li><strong>Anthropic</strong> — processes the text of questions sent to the AI maths assistant, and Test Analyzer photos you upload, without your name or email attached.</li>
            <li><strong>Google Meet</strong> — used to host live tutoring sessions; the meeting link is shared with you by email.</li>
            <li><strong>Google Analytics</strong> — used only on our pre-launch waitlist page to measure anonymised visit statistics; see Section 7.</li>
          </ul>
          <p>
            We do not share your information with third parties for their own marketing purposes.
          </p>
        </Section>

        <Section heading="6. Where your information is processed">
          <p>
            Some of the providers listed in Section 5 (Firebase/Google Cloud, Anthropic) are
            headquartered in, and may process data in, the United States and other countries outside
            South Africa. Under POPIA section 72, we may only allow this where the recipient is subject
            to a law, binding corporate rules, or a binding agreement that provides an adequate level of
            protection substantially similar to POPIA — Google Cloud/Firebase and Anthropic both
            contractually commit to data protection and security safeguards (including standard
            contractual-clause-equivalent terms) that meet this requirement, and we only engage
            processors on that basis.
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
            a browser extension such as Google&apos;s own{' '}
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
            <li>delete your account and associated personal information yourself, any time, from your
              profile page — or ask us to do it for you — subject to Section 8,</li>
            <li>object to how we process your information, and</li>
            <li>lodge a complaint with the Information Regulator of South Africa if you believe we have
              mishandled your information (<span style={{ color: '#1e40af' }}>inforegulator.org.za</span>).</li>
          </ul>
          <p>
            To exercise any of these rights, contact us using the details in Section 11 — we&apos;ll respond
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
            We may update this Privacy Policy as the service changes. We&apos;ll update the &quot;Last updated&quot;
            date above whenever we do.
          </p>
        </Section>
      </main>
    </div>
  )
}
