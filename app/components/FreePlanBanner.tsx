'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAuth, getActiveTier } from '@/app/providers'
import { useTranslations } from '@/src/i18n/useTranslations'

const DISMISS_KEY = 'mathly_free_banner_dismissed'

// Persistent (but per-session dismissible) reminder for logged-in free-tier
// users, dropped in on the grade and topic pages — right below the header,
// above the real (limited) content those pages already show a free user.
export default function FreePlanBanner() {
  const { user, loading } = useAuth()
  const t = useTranslations()
  const [mounted, setMounted] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    setMounted(true)
    setDismissed(sessionStorage.getItem(DISMISS_KEY) === 'true')
  }, [])

  if (!mounted || loading || !user || getActiveTier(user) !== 'free' || dismissed) return null

  function handleDismiss() {
    sessionStorage.setItem(DISMISS_KEY, 'true')
    setDismissed(true)
  }

  return (
    <div className="w-full px-4 py-3 sm:px-6" style={{ backgroundColor: '#0f1f3d' }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center gap-3">
        <p className="flex-1 text-sm text-white leading-relaxed">
          {t.free_plan_banner_message}
        </p>
        <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
          <Link
            href="/pricing"
            className="text-sm font-semibold px-4 py-2 rounded-xl text-white text-center transition-colors whitespace-nowrap"
            style={{ backgroundColor: '#1e40af' }}
          >
            {t.dash_upgrade_cta}
          </Link>
          <button
            type="button"
            onClick={handleDismiss}
            aria-label={t.free_plan_banner_dismiss_label}
            className="text-gray-300 hover:text-white transition-colors p-1 rounded-md shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
