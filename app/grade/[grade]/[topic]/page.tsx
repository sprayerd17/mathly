'use client'

import { use, useState, useEffect } from 'react'
import Link from 'next/link'
import TopicTabs from '@/app/components/TopicTabs'
import NavAuth from '@/app/components/NavAuth'
import { useAuth, getActiveChild } from '@/app/providers'
import { useTranslations } from '@/src/i18n/useTranslations'
import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

async function resolveStudyGuideData(
  grade: string,
  topic: string,
  language: 'en' | 'af',
): Promise<TopicData | undefined> {
  const langs: Array<'en' | 'af'> = language === 'af' ? ['af', 'en'] : ['en']
  for (const lang of langs) {
    try {
      let mod: { topicData: TopicData } | undefined
      if      (grade === '4')  mod = await import(`@/src/data/grade4/${lang}/${topic}`)
      else if (grade === '5')  mod = await import(`@/src/data/grade5/${lang}/${topic}`)
      else if (grade === '6')  mod = await import(`@/src/data/grade6/${lang}/${topic}`)
      else if (grade === '7')  mod = await import(`@/src/data/grade7/${lang}/${topic}`)
      else if (grade === '8')  mod = await import(`@/src/data/grade8/${lang}/${topic}`)
      else if (grade === '9')  mod = await import(`@/src/data/grade9/${lang}/${topic}`)
      else if (grade === '10') mod = await import(`@/src/data/grade10/${lang}/${topic}`)
      else if (grade === '11') mod = await import(`@/src/data/grade11/${lang}/${topic}`)
      else if (grade === '12') mod = await import(`@/src/data/grade12/${lang}/${topic}`)
      if (mod) return mod.topicData
    } catch {
      // language file not found; try next in fallback chain
    }
  }
  return undefined
}

function formatSlug(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default function TopicPage({
  params,
}: {
  params: Promise<{ grade: string; topic: string }>
}) {
  const { grade, topic } = use(params)
  const { user } = useAuth()
  const t = useTranslations()
  const language = (user ? getActiveChild(user).language : 'en') as 'en' | 'af'
  // const FREE_TOPICS = new Set(['topic-1', 'topic-2']) // REVIEW MODE: re-enable to restore locking
  const isLocked = false

  const [studyGuideData, setStudyGuideData] = useState<TopicData | undefined>(undefined)

  useEffect(() => {
    setStudyGuideData(undefined)
    resolveStudyGuideData(grade, topic, language).then(setStudyGuideData)
  }, [grade, topic, language])

  const topicName = studyGuideData ? studyGuideData.title : formatSlug(topic)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          {/* Left: back + breadcrumb */}
          <div className="flex items-center gap-3 min-w-0">
            <Link
              href={`/grade/${grade}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0f1f3d] hover:underline underline-offset-4 transition-all shrink-0"
            >
              <span aria-hidden="true">←</span>
              {t.grade_back_to_grade.replace('{grade}', String(grade))}
            </Link>
            <nav className="hidden md:flex items-center gap-2 text-sm text-gray-400 min-w-0" aria-label="Breadcrumb">
              <span aria-hidden="true">/</span>
              <Link href="/" className="hover:text-[#0f1f3d] transition-colors shrink-0">{t.nav_home}</Link>
              <span aria-hidden="true">/</span>
              <Link href={`/grade/${grade}`} className="hover:text-[#0f1f3d] transition-colors shrink-0">{t.grade_heading.replace('{grade}', String(grade))}</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#0f1f3d] font-medium truncate">{topicName}</span>
            </nav>
          </div>

          {/* Right: auth */}
          <NavAuth />
        </div>
      </header>

      <main>
        <TopicTabs topicName={topicName} topicSlug={topic} grade={grade} isLocked={isLocked} studyGuideData={studyGuideData} />
      </main>

    </div>
  )
}
