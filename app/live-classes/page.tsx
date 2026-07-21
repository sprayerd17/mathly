'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { useTranslations } from '@/src/i18n/useTranslations'
import SessionsBoard from './SessionsBoard'
import RequestLessonCard from './RequestLessonCard'
import type { PublicSession } from '@/src/lib/sessions'

export default function LiveClassesPage() {
  const t = useTranslations()

  const FEATURES = [
    {
      icon: '👥',
      title: t.live_feature_small_groups_title,
      detail: t.live_feature_small_groups_detail,
    },
    {
      icon: '📚',
      title: t.live_feature_grade_specific_title,
      detail: t.live_feature_grade_specific_detail,
    },
    {
      icon: '🎓',
      title: t.live_feature_expert_led_title,
      detail: t.live_feature_expert_led_detail,
    },
  ]

  // Upcoming bookable sessions — served sanitized by the server (the
  // sessions collection itself is closed to client reads).
  const [sessions, setSessions] = useState<PublicSession[]>([])
  useEffect(() => {
    fetch('/api/sessions/list')
      .then(r => r.json())
      .then(d => setSessions(Array.isArray(d.sessions) ? d.sessions : []))
      .catch(() => {})
  }, [])
  const hasSessions = sessions.length > 0

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />

      <main className="flex-1">

        {/* Hero */}
        <section className="pt-20 pb-14 px-6 text-center" style={{ backgroundColor: '#0f1f3d' }}>
          <div
            className="inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-5"
            style={hasSessions
              ? { backgroundColor: '#dcfce7', color: '#15803d' }
              : { backgroundColor: '#fef3c7', color: '#92400e' }}
          >
            {hasSessions ? t.live_open_badge : t.live_coming_soon_badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
            {t.live_hero_heading}
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-6" style={{ color: '#93c5fd' }}>
            {t.live_hero_subheading}
          </p>
          {!hasSessions && (
            <div
              className="inline-block text-sm font-semibold px-4 py-2 rounded-full"
              style={{ backgroundColor: '#1e40af', color: '#ffffff' }}
            >
              {t.live_first_session_free_banner}
            </div>
          )}
        </section>

        {/* Bookable sessions (once any are published) */}
        {hasSessions && <SessionsBoard sessions={sessions} />}

        {/* Request a specific lesson — always available, this is the demand signal */}
        <RequestLessonCard />

        {/* What to expect */}
        <section className="px-6 pb-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#0f1f3d' }}>
            {t.live_what_to_expect_heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {FEATURES.map(f => (
              <div
                key={f.title}
                className="bg-white rounded-2xl shadow-sm p-6 text-center"
                style={{ border: '1px solid #e5e7eb' }}
              >
                <span className="text-3xl block mb-3">{f.icon}</span>
                <h3 className="font-bold mb-2" style={{ color: '#0f1f3d' }}>{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>
          {!hasSessions && (
            <p className="text-sm text-center text-gray-400">
              {t.live_launch_info_text}
            </p>
          )}
        </section>

      </main>

      <Footer />
    </div>
  )
}
