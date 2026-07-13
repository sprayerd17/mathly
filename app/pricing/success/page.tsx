'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import { useTranslations } from '@/src/i18n/useTranslations'
import { auth, db } from '@/src/lib/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

// Paystack's browser redirect can land here before or after the server-to-server
// ITN POST — this page never sets package itself (ITN is the only trusted
// source of truth). It just polls for confirmation to show live feedback.
export default function PricingSuccessPage() {
  const t = useTranslations()
  const [status, setStatus] = useState<'waiting' | 'active' | 'timeout'>('waiting')

  useEffect(() => {
    let cancelled = false
    let attempts = 0
    let timeoutId: ReturnType<typeof setTimeout> | undefined

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
          style={{ backgroundColor: status === 'active' ? '#dcfce7' : '#eff6ff' }}
        >
          {status === 'active' ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <div className="w-5 h-5 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: '#1e40af transparent #1e40af #1e40af' }} />
          )}
        </div>

        <h1 className="text-2xl font-bold mb-3" style={{ color: '#0f1f3d' }}>
          {status === 'active' ? t.pricing_success_active_heading : t.pricing_success_waiting_heading}
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          {status === 'active'
            ? t.pricing_success_active_body
            : status === 'timeout'
            ? t.pricing_success_timeout_body
            : t.pricing_success_waiting_body}
        </p>

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
