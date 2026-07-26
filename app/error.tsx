'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import { useTranslations } from '@/src/i18n/useTranslations'

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = useTranslations()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-bold mb-3" style={{ color: '#0f1f3d' }}>{t.error_page_heading}</h1>
        <p className="text-sm text-gray-500 mb-8 max-w-sm">{t.error_page_body}</p>
        <div className="flex gap-3">
          <button
            onClick={reset}
            className="text-sm font-semibold px-5 py-2.5 rounded-lg text-white"
            style={{ backgroundColor: '#1e40af' }}
          >
            {t.error_page_retry}
          </button>
          <Link
            href="/"
            className="text-sm font-semibold px-5 py-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            {t.not_found_cta}
          </Link>
        </div>
      </div>
    </div>
  )
}
