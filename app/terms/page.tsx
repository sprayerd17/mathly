import Navbar from '@/app/components/Navbar'

const LAST_UPDATED = '8 July 2026'

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

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight" style={{ color: '#0f1f3d' }}>
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>
          <p className="mt-4 text-sm text-gray-500">
            This policy is written and maintained in English only. If any translated version of this
            site conflicts with this English text, this English version governs.
          </p>
        </div>

        <Section heading="1. Who we are">
          <p>
            Mathly ("Mathly", "we", "us") is a South African online maths education service for Grade 4
            to Grade 12 learners, operated by an individual trading as Mathly. You can reach us at{' '}
            <a href="mailto:hello@mathly.co.za" style={{ color: '#1e40af', fontWeight: 600 }}>hello@mathly.co.za</a>.
          </p>
          <p>
            By creating an account, subscribing to a paid plan, or booking a live session, you agree to
            these Terms &amp; Conditions. If you do not agree, please do not use Mathly.
          </p>
        </Section>

        <Section heading="2. Eligibility and accounts">
          <p>
            You must be at least 18 years old to register a Mathly account. Accounts are created and
            managed by a parent or guardian ("you", "the account holder") on behalf of one or more
            children ("your child" / "your children"), for whom you add a name, grade, and language
            preference. A single account supports up to 3 children.
          </p>
          <p>
            You are responsible for keeping your login details confidential and for all activity under
            your account. Accounts are for personal, family use only and may not be shared beyond your
            own household or resold or transferred to another person.
          </p>
        </Section>

        <Section heading="3. The service">
          <p>
            Mathly provides CAPS-aligned study guides, worked examples, and practice questions for
            Grade 4 to Grade 12 maths, an AI maths assistant, and optional paid live tutoring sessions.
            We may add, change, or remove features, topics, or content areas at any time as the service
            develops.
          </p>
        </Section>

        <Section heading="4. Subscription plans and billing">
          <p>
            Each child on your account can be assigned a Free, Pro, or Max plan independently. Paid
            plans are billed monthly in advance and renew automatically until cancelled. Payment is
            processed securely by Paystack; Mathly does not see or store your card details.
          </p>
          <p>
            Prices shown at checkout, including any limited-time "founding member" pricing, apply for
            as long as your subscription remains active without a break. We may change our prices for
            future billing periods; if we do, we'll give you reasonable notice before the change takes
            effect on your account.
          </p>
        </Section>

        <Section heading="5. Cancelling your subscription">
          <p>
            You can cancel a paid plan at any time from your account. Cancelling stops future billing —
            it does not refund the current billing period, and your child keeps access to their paid
            plan until the end of the period already paid for.
          </p>
          <p>
            <strong>It is your responsibility to cancel before your next billing date if you no longer
            want the subscription.</strong> Forgetting to cancel is not grounds for a refund of a
            payment already made — see Section 6.
          </p>
        </Section>

        <Section heading="6. Refunds — subscriptions">
          <p>We will refund a subscription payment only where Mathly billed you in error — for example:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>you were charged for a plan or child you did not select,</li>
            <li>you were charged the wrong amount, or</li>
            <li>you were billed after you had already successfully cancelled.</li>
          </ul>
          <p>
            We do not issue refunds where a subscription renewed because you did not cancel it in time,
            or because you or your child simply did not use the service during a billing period. If you
            believe you were billed in error, contact{' '}
            <a href="mailto:support@mathly.co.za" style={{ color: '#1e40af', fontWeight: 600 }}>support@mathly.co.za</a>{' '}
            with your account email and the date of the charge.
          </p>
        </Section>

        <Section heading="7. Live tutoring sessions">
          <p>
            Live sessions can be booked from the Live Classes page. If a session starts more than 48
            hours from the time you book, you can reserve your spot without paying immediately — payment
            is then due any time before the deposit deadline shown at booking, which is 48 hours before
            the session starts. If you book a session that starts within 48 hours, payment is required
            immediately to confirm the booking.
          </p>
          <p>
            If an unpaid reservation is not paid by its deposit deadline, the reservation automatically
            expires and the spot is released — it may then be booked and paid for by another student.
            You can also cancel your own unpaid reservation at any time before the deadline at no cost.
          </p>
          <p>
            Each child on a paid Pro or Max plan may claim one free introductory live session. This
            benefit is not available to children on the Free plan — since a Free account costs nothing
            to create, offering a free session to every Free-plan child would let the same person claim
            unlimited free sessions using different email addresses. The free session is a one-time
            offer per paid child, has no cash value, and cannot be exchanged, transferred, or repeated.
          </p>
        </Section>

        <Section heading="8. Refunds — live sessions">
          <p>
            Once a live session is paid for, that payment is final and non-refundable, except in one
            case: <strong>if Mathly cancels the session, you will receive a full refund.</strong> Paying
            for a spot and then not attending, or deciding not to attend after payment, does not qualify
            for a refund.
          </p>
        </Section>

        <Section heading="9. Referral programme">
          <p>
            Mathly may offer a referral programme through which you can earn account credit for
            referring other paying families. Referral relationships and credit amounts are tracked in
            your account, but credit is applied to your account manually by Mathly rather than
            automatically. Referral credit has no cash value, cannot be withdrawn or exchanged for
            money, and can only be used against future Mathly subscription charges. We may change the
            referral programme's structure, rewards, or availability, or end it, at any time.
          </p>
        </Section>

        <Section heading="10. AI maths assistant">
          <p>
            Mathly's AI assistant is a study aid, not a qualified teacher, and the number of questions
            you can ask it each month depends on your plan. Like any AI system, it can occasionally give
            an incorrect, incomplete, or confusing answer — always check its explanations against your
            study guide or ask a teacher if something seems wrong. The AI assistant should not be relied
            on as the sole source of truth for schoolwork, tests, or exams.
          </p>
        </Section>

        <Section heading="11. Acceptable use">
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>share your account or login details outside your own household,</li>
            <li>copy, scrape, redistribute, or resell Mathly's content or questions,</li>
            <li>attempt to bypass subscription limits, AI usage limits, or payment requirements, or</li>
            <li>use the service in a way that disrupts it for other students.</li>
          </ul>
          <p>We may suspend or close accounts that breach these Terms.</p>
        </Section>

        <Section heading="12. Content and intellectual property">
          <p>
            All study guides, questions, explanations, diagrams, and other content on Mathly belong to
            Mathly (or are licensed to us) and are provided for your and your children's personal,
            non-commercial, educational use only. You may not republish, distribute, or sell this
            content.
          </p>
        </Section>

        <Section heading="13. Educational disclaimer">
          <p>
            Mathly's content is designed to align with the CAPS curriculum, but we cannot guarantee any
            particular exam result, mark, or outcome. Mathly is a supplementary study resource and is
            not a substitute for classroom teaching or a full educational assessment of a learner's
            needs.
          </p>
        </Section>

        <Section heading="14. Limitation of liability">
          <p>
            Mathly is provided "as is." To the extent permitted by South African law, Mathly is not
            liable for any indirect or consequential loss arising from your use of the service. Nothing
            in these Terms limits any right you have that cannot lawfully be excluded.
          </p>
        </Section>

        <Section heading="15. Changes to these Terms">
          <p>
            We may update these Terms from time to time as the service changes. We'll update the "Last
            updated" date above when we do; continuing to use Mathly after a change means you accept the
            updated Terms.
          </p>
        </Section>

        <Section heading="16. Governing law">
          <p>These Terms are governed by the laws of the Republic of South Africa.</p>
        </Section>

        <Section heading="17. Contact us">
          <p>
            Questions about these Terms? Write to us at{' '}
            <a href="mailto:hello@mathly.co.za" style={{ color: '#1e40af', fontWeight: 600 }}>hello@mathly.co.za</a>{' '}
            or use our{' '}
            <a href="/contact" style={{ color: '#1e40af', fontWeight: 600 }}>Contact page</a>.
          </p>
        </Section>
      </main>
    </div>
  )
}
