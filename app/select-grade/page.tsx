'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/app/components/Navbar'
import { useAuth, getActiveChild } from '@/app/providers'
import { useTranslations } from '@/src/i18n/useTranslations'

const ALL_GRADES = [4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function SelectGradePage() {
  const router = useRouter()
  const t = useTranslations()
  const { user, loading } = useAuth()

  if (loading) return null

  // Guests and free accounts browse any grade. Paid accounts (solo or family)
  // only see the one grade their currently active profile has full access to.
  const showAllGrades = !user || user.package === 'free'

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-16">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-3" style={{ color: '#0f1f3d' }}>
            {t.grade_select_heading}
          </h1>
          <p className="text-lg text-gray-500">
            {t.grade_select_description}
          </p>
        </div>

        {showAllGrades ? (
          /* Guests + free accounts — all grades grid */
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {ALL_GRADES.map(grade => (
              <Link
                key={grade}
                href={`/grade/${grade}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#1e40af]/30 hover:shadow-md transition-all flex flex-col items-center justify-center py-10 gap-2"
              >
                <span className="text-lg font-semibold" style={{ color: '#6b7280' }}>{t.grade_word}</span>
                <span className="text-5xl font-bold leading-none" style={{ color: '#0f1f3d' }}>
                  {grade}
                </span>
                <span className="text-xs font-medium mt-1" style={{ color: '#9ca3af' }}>
                  {t.grade_tap_to_explore}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          /* Paid accounts — only the active profile's grade */
          <>
            <div
              className="bg-white rounded-2xl border shadow-sm p-8 mb-5"
              style={{ borderColor: '#e5e7eb' }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#1e40af' }}>
                {t.grade_curriculum}
              </p>
              <h2 className="text-4xl font-bold mb-3" style={{ color: '#0f1f3d' }}>
                {t.grade_heading.replace('{grade}', String(getActiveChild(user).grade))}
              </h2>
              <p className="text-base text-gray-500 mb-8">
                {t.grade_ready_to_study.replace('{grade}', String(getActiveChild(user).grade))}
              </p>
              <button
                onClick={() => router.push(`/grade/${getActiveChild(user).grade}`)}
                className="px-8 py-4 rounded-xl text-base font-semibold text-white transition-colors"
                style={{ backgroundColor: '#1e40af' }}
              >
                {t.grade_go_to_topics.replace('{grade}', String(getActiveChild(user).grade))}
              </button>
            </div>

            {/* Profile link */}
            <p className="text-sm text-gray-400">
              {t.grade_not_your_grades}{' '}
              <Link
                href="/profile"
                className="underline underline-offset-2 hover:text-[#1e40af] transition-colors"
              >
                {t.grade_update_them_in_profile}
              </Link>
            </p>
          </>
        )}

      </main>
    </div>
  )
}
