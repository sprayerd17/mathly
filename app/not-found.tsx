'use client'

import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import { useTranslations } from '@/src/i18n/useTranslations'

export default function NotFound() {
  const t = useTranslations()
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-7xl font-bold mb-4" style={{ color: '#1e40af' }}>404</p>
        <h1 className="text-2xl font-bold mb-3" style={{ color: '#0f1f3d' }}>{t.not_found_heading}</h1>
        <p className="text-sm text-gray-500 mb-8 max-w-sm">{t.not_found_body}</p>
        <Link
          href="/"
          className="text-sm font-semibold px-5 py-2.5 rounded-lg text-white"
          style={{ backgroundColor: '#1e40af' }}
        >
          {t.not_found_cta}
        </Link>
      </div>
    </div>
  )
}
