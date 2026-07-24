'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import { useTranslations } from '@/src/i18n/useTranslations'
import { auth, db } from '@/src/lib/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { PAYMENTS_ENABLED } from '@/src/lib/launch-config'

// Paystack's browser redirect can land here before or after the server-to-server
// webhook — this page never sets package itself (the webhook is the only
// trusted source of truth). It just polls for confirmation to show live feedback.
export default function PricingSuccessPage() {
  const t = useTranslations()
  const [status, setStatus] = useState<'waiting' | 'active' | 'timeout'>('waiting')

  useEffect(() => {
    let cancelled = false
    let attempts = 0
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    // Paystack's webhook is the primary way subscriptionStatus flips to
    // 'active', but its delivery depends on the webhook URL being configured
    // correctly in the Paystack dashboard for the active mode (test vs
    // live) — a common sandbox setup gap, and one that otherwise leaves this
    // page polling forever with nothing to show for it. This independently
    // verifies the transaction and, if genuinely successful, applies it —
    // safe to call even if the webhook also fires, since the handler is
    // idempotent (a webhook arriving first just makes this a no-op).
    async function confirmWithPaystack() {
      const params = new URLSearchParams(window.location.search)
      const reference = params.get('reference') ?? params.get('trxref')
      if (!reference || !auth.currentUser) return
      try {
        const idToken = await auth.currentUser.getIdToken()
        await fetch('/api/paystack/verify-checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ idToken, reference }),
        })
      } catch {
        // Best-effort nudge — the Firestore poll below still catches a
        // webhook that arrives later, so a failure here isn't fatal.
      }
    }

    async function poll(uid: string) {
      const snap = await getDoc(doc(db, 'users', uid))
      if (cancelled) return
      if (snap.exists() && snap.data().subscriptionStatus === 'active') {
        setStatus('active')
        return
      }
      attempts += 1
      if (attempts >= 15) {
        setStatus('timeout')
        return
      }
      timeoutId = setTimeout(() => poll(uid), 2000)
    }

    // auth.currentUser is unreliable right after Paystack's external redirect
    // back to this page — Firebase Auth hasn't finished restoring the session
    // from storage yet, so it reads null on first render. onAuthStateChanged
    // fires once that restore completes (or confirms there's no session).
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      if (cancelled) return
      if (!user) {
        setStatus('timeout')
        return
      }
      confirmWithPaystack()
      poll(user.uid)
    })

    return () => {
      cancelled = true
      unsubscribe()
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />
      <main className="max-w-lg mx-auto px-6 py-24 text-center">
        <div
          className="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center"
          style={{ backgroundColor: status === 'active' ? '#dcfce7' : status === 'timeout' ? '#fef3c7' : '#eff6ff' }}
        >
          {status === 'active' ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : status === 'timeout' ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8v4l2.5 2.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="#b45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <div className="w-5 h-5 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: '#1e40af transparent #1e40af #1e40af' }} />
          )}
        </div>

        <h1 className="text-2xl font-bold mb-3" style={{ color: '#0f1f3d' }}>
          {status === 'active' ? t.pricing_success_active_heading : status === 'timeout' ? t.pricing_success_timeout_heading : t.pricing_success_waiting_heading}
        </h1>
        <p className={`text-sm text-gray-500 ${status === 'active' && !PAYMENTS_ENABLED ? 'mb-3' : 'mb-8'}`}>
          {status === 'active'
            ? t.pricing_success_active_body
            : status === 'timeout'
            ? t.pricing_success_timeout_body
            : t.pricing_success_waiting_body}
        </p>
        {status === 'active' && !PAYMENTS_ENABLED && (
          <p className="text-xs mb-8" style={{ color: '#92400e' }}>
            {t.pricing_success_active_paused_note}
          </p>
        )}

        <Link
          href="/profile"
          className="inline-flex items-center gap-2 bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
        >
          {t.pricing_success_profile_link}
        </Link>
      </main>
    </div>
  )
}
