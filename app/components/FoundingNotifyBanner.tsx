'use client'

import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/src/lib/firebase'
import { useTranslations } from '@/src/i18n/useTranslations'

// Shown while PAYMENTS_ENABLED is false. Distinct from registration: visitors
// can already sign up and browse for free, but paid plans aren't chargeable
// yet — this captures an email so we can notify them the moment paid plans
// (and the limited founding spots) go live. Writes to the same write-only
// `waitlist` collection the standalone coming-soon site used.
export default function FoundingNotifyBanner() {
  const t = useTranslations()

  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || submitting) return
    setSubmitting(true)
    setError(false)
    try {
      await addDoc(collection(db, 'waitlist'), {
        email: email.trim(),
        createdAt: serverTimestamp(),
      })
      setSubmitted(true)
      setEmail('')
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="px-6 py-14" style={{ backgroundColor: '#f1f5f9' }}>
      <div
        className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm p-8 text-center"
        style={{ border: '1px solid #e5e7eb' }}
      >
        <h2 className="text-lg font-bold mb-3" style={{ color: '#0f1f3d' }}>
          {t.home_founding_banner_heading}
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          {t.home_founding_banner_body}
        </p>

        {submitted ? (
          <div
            className="rounded-xl px-5 py-4 text-sm font-medium"
            style={{ backgroundColor: '#dcfce7', color: '#15803d', border: '1px solid #bbf7d0' }}
          >
            {t.home_founding_banner_success}
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t.home_founding_banner_email_placeholder}
              required
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
            />
            <button
              type="submit"
              disabled={submitting || !email.trim()}
              className="shrink-0 font-semibold px-6 py-2.5 rounded-lg text-sm text-white transition-colors disabled:opacity-50"
              style={{ backgroundColor: '#1e40af' }}
            >
              {submitting ? t.home_founding_banner_submitting : t.home_founding_banner_submit}
            </button>
          </form>
        )}

        {error && (
          <p className="text-xs font-medium rounded-lg px-3 py-2 mt-3" style={{ backgroundColor: '#fee2e2', color: '#b91c1c' }}>
            {t.home_founding_banner_error}
          </p>
        )}
      </div>
    </section>
  )
}
