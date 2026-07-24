'use client'

import { use, useState, useEffect } from 'react'
import Link from 'next/link'
import TopicTabs from '@/app/components/TopicTabs'
import NavAuth from '@/app/components/NavAuth'
import { useAuth, getActiveChild, getActiveTier } from '@/app/providers'
import { useTranslations } from '@/src/i18n/useTranslations'
import { getTopics } from '@/src/data/topic-registry'
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

  const [mounted, setMounted] = useState(false)
  // Intentional hydration-safe mount flag — see isLocked below.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true) }, [])

  const topicMeta = getTopics(grade, language).find(tp => tp.slug === topic)
  const isTopicFree = topicMeta?.free ?? false
  const hasFullGradeAccess = !!user && getActiveTier(user) !== 'free' && getActiveChild(user).grade === Number(grade)
  // Free topics are always unlocked (safe pre-hydration). Paid topics stay
  // locked until we've confirmed access post-mount, so there's no flash of
  // real content before we know the user doesn't actually have access.
  const isLocked = isTopicFree ? false : (!mounted || !hasFullGradeAccess)

  const [studyGuideData, setStudyGuideData] = useState<TopicData | undefined>(undefined)

  useEffect(() => {
    // Clear stale data from the previous grade/topic/language before the new
    // fetch resolves, so a slow load never briefly shows the wrong topic's
    // content.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStudyGuideData(undefined)
    resolveStudyGuideData(grade, topic, language).then(setStudyGuideData)
  }, [grade, topic, language])

  const topicName = studyGuideData ? studyGuideData.title : formatSlug(topic)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header — sticky so it stays reachable without scrolling back to the
          top once a student is deep into a topic's content. */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          {/* Left: quick-back arrow + single breadcrumb trail (Home > Grade > Topic —
              previously duplicated "Grade N" between a separate back-link and the
              breadcrumb, and hid the breadcrumb on mobile entirely). */}
          <div className="flex items-center gap-3 min-w-0">
            <Link
              href={`/grade/${grade}`}
              aria-label={t.grade_back_to_grade.replace('{grade}', String(grade))}
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-[#0f1f3d] hover:bg-gray-100 transition-colors shrink-0"
            >
              <span aria-hidden="true">←</span>
            </Link>
            <nav className="flex items-center gap-2 text-sm text-gray-400 min-w-0" aria-label="Breadcrumb">
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
