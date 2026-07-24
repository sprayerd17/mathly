'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import NavAuth from '@/app/components/NavAuth'
import { useAuth, getActiveChild, getActiveTier } from '@/app/providers'
import { useTranslations } from '@/src/i18n/useTranslations'
import { getTopics } from '@/src/data/topic-registry'

// Topic lists moved to src/data/topic-registry.ts (shared with the dashboard,
// so real topic slugs can't drift out of sync between the two).

function LockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-3.5 h-3.5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3A5.25 5.25 0 0 0 12 1.5Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4 shrink-0"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  )
}

export default function GradePage() {
  const params = useParams()
  const grade = params.grade as string
  const { user } = useAuth()
  const t = useTranslations()
  const [mounted, setMounted] = useState(false)

  // Intentional hydration-safe mount flag — server and first client render
  // must match, so client-only state (auth, active grade) applies post-mount.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true) }, [])

  const language = (user ? getActiveChild(user).language : 'en') as 'en' | 'af'
  const topics = getTopics(grade, language)

  // Only restrict after hydration, and only for the active child's paid tier —
  // free accounts can browse any grade (limited to 1 topic each), a paid
  // child gets full access only to the grade they're actually paying for.
  // Scoped to the active child, not "any child on the account", since tiers
  // are now independent per child.
  const isRestricted =
    mounted &&
    user !== null &&
    getActiveTier(user) !== 'free' &&
    getActiveChild(user).grade !== Number(grade)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0f1f3d] hover:underline underline-offset-4 transition-all"
          >
            <span aria-hidden="true">←</span>
            {t.grade_back_to_home}
          </Link>
          <NavAuth />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Grade heading */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1e40af] mb-2">
            {t.grade_curriculum}
          </p>
          <h1 className="text-4xl font-bold mb-2" style={{ color: '#0f1f3d' }}>
            {t.grade_heading.replace('{grade}', String(grade))}
          </h1>
          {!isRestricted && (
            <p className="text-gray-500">
              {t.grade_choose_topic_below}{' '}
              <span className="text-[#1e40af] font-medium">{t.grade_topics_1_2_free}</span>
            </p>
          )}
        </div>

        {isRestricted ? (
          <div className="flex flex-col items-center text-center py-16 max-w-sm mx-auto">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
              style={{ backgroundColor: '#eff6ff' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#1e40af"
                className="w-7 h-7"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
            <h2 className="font-semibold text-lg mb-2" style={{ color: '#0f1f3d' }}>
              {t.grade_not_in_profile.replace('{grade}', String(grade))}
            </h2>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              {t.grade_not_added_to_profile}
            </p>
            <Link
              href="/profile"
              className="text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-colors"
              style={{ backgroundColor: '#1e40af' }}
            >
              {t.grade_update_grades_in_profile}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/grade/${grade}/${topic.slug}`}
                className={`group bg-white rounded-xl p-6 border shadow-sm transition-all ${
                  topic.free
                    ? 'border-gray-100 hover:border-[#1e40af]/30 hover:shadow-md'
                    : 'border-gray-100 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h2
                    className={`font-semibold transition-colors ${
                      topic.free
                        ? 'text-[#0f1f3d] group-hover:text-[#1e40af]'
                        : 'text-gray-600 group-hover:text-gray-800'
                    }`}
                  >
                    {topic.name}
                  </h2>
                  <span className="mt-0.5 shrink-0">
                    {topic.free ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-[#1e40af] border border-blue-200">
                        {t.grade_free_badge}
                      </span>
                    ) : (
                      <span className="text-gray-400 group-hover:text-gray-500 transition-colors">
                        <LockIcon />
                      </span>
                    )}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{topic.description}</p>
                <div
                  className={`inline-flex items-center gap-1 text-xs font-medium transition-colors ${
                    topic.free
                      ? 'text-[#1e40af] group-hover:gap-1.5'
                      : 'text-gray-400'
                  }`}
                >
                  {topic.free ? (
                    <>{t.grade_start_learning} <ChevronRight /></>
                  ) : (
                    <>{t.grade_subscribe_to_unlock}</>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
