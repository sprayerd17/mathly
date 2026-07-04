'use client'

import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import { useTranslations } from '@/src/i18n/useTranslations'

export default function PricingCancelledPage() {
  const t = useTranslations()

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />
      <main className="max-w-lg mx-auto px-6 py-24 text-center">
        <div
          className="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#f3f4f6' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18M6 18L18 6" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold mb-3" style={{ color: '#0f1f3d' }}>
          {t.pricing_cancelled_heading}
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          {t.pricing_cancelled_body}
        </p>

        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
        >
          {t.pricing_cancelled_back_link}
        </Link>
      </main>
    </div>
  )
}
