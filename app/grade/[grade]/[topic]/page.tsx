import Link from 'next/link'
import TopicTabs from '@/app/components/TopicTabs'
import NavAuth from '@/app/components/NavAuth'
import AIAssistant from '@/app/components/AIAssistant'
import { topicData as grade4Topic1 } from '@/src/data/grade4/numbers-operations'
import { topicData as grade4Topic2 } from '@/src/data/grade4/addition-subtraction'
import { topicData as grade4Topic3 } from '@/src/data/grade4/multiplication'
import { topicData as grade4Topic4 } from '@/src/data/grade4/division'
import { topicData as grade4Topic5 } from '@/src/data/grade4/number-sentences'
import { topicData as grade4Topic6 } from '@/src/data/grade4/common-fractions'
import { topicData as grade4Topic7 } from '@/src/data/grade4/number-patterns'
import { topicData as grade4Topic8 } from '@/src/data/grade4/geometric-patterns'
import { topicData as grade4Topic9 } from '@/src/data/grade4/symmetry'
import { topicData as grade4Topic10 } from '@/src/data/grade4/2d-shapes'
import { topicData as grade4Topic11 } from '@/src/data/grade4/3d-objects'
import { topicData as grade4Topic12 } from '@/src/data/grade4/position-movement'
import { topicData as grade4Topic13 } from '@/src/data/grade4/transformations'
import { topicData as grade4Topic14 } from '@/src/data/grade4/length'
import { topicData as grade4Topic15 } from '@/src/data/grade4/mass'
import { topicData as grade4Topic16 } from '@/src/data/grade4/capacity-volume'
import { topicData as grade4Topic17 } from '@/src/data/grade4/perimeter-area'
import { topicData as grade4Topic18 } from '@/src/data/grade4/time'
import { topicData as grade4Topic19 } from '@/src/data/grade4/data-handling'
import { topicData as grade4Topic20 } from '@/src/data/grade4/probability'
import type { TopicData } from '@/src/data/grade4/numbers-operations'

// const FREE_TOPICS = new Set(['topic-1', 'topic-2']) // REVIEW MODE: re-enable to restore locking

function resolveStudyGuideData(grade: string, topic: string): TopicData | undefined {
  if (grade === '4' && topic === 'topic-1') return grade4Topic1
  if (grade === '4' && topic === 'topic-2') return grade4Topic2
  if (grade === '4' && topic === 'topic-3') return grade4Topic3
  if (grade === '4' && topic === 'topic-4') return grade4Topic4
  if (grade === '4' && topic === 'topic-5') return grade4Topic5
  if (grade === '4' && topic === 'topic-6') return grade4Topic6
  if (grade === '4' && topic === 'topic-7') return grade4Topic7
  if (grade === '4' && topic === 'topic-8') return grade4Topic8
  if (grade === '4' && topic === 'topic-9') return grade4Topic9
  if (grade === '4' && topic === 'topic-10') return grade4Topic10
  if (grade === '4' && topic === 'topic-11') return grade4Topic11
  if (grade === '4' && topic === 'topic-12') return grade4Topic12
  if (grade === '4' && topic === 'topic-13') return grade4Topic13
  if (grade === '4' && topic === 'topic-14') return grade4Topic14
  if (grade === '4' && topic === 'topic-15') return grade4Topic15
  if (grade === '4' && topic === 'topic-16') return grade4Topic16
  if (grade === '4' && topic === 'topic-17') return grade4Topic17
  if (grade === '4' && topic === 'topic-18') return grade4Topic18
  if (grade === '4' && topic === 'topic-19') return grade4Topic19
  if (grade === '4' && topic === 'topic-20') return grade4Topic20
  return undefined
}

function formatSlug(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ grade: string; topic: string }>
}) {
  const { grade, topic } = await params
  // const isLocked = !FREE_TOPICS.has(topic) // REVIEW MODE: re-enable to restore locking
  const isLocked = false
  const studyGuideData = resolveStudyGuideData(grade, topic)
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
              Back to Grade {grade}
            </Link>
            <nav className="hidden md:flex items-center gap-2 text-sm text-gray-400 min-w-0" aria-label="Breadcrumb">
              <span aria-hidden="true">/</span>
              <Link href="/" className="hover:text-[#0f1f3d] transition-colors shrink-0">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href={`/grade/${grade}`} className="hover:text-[#0f1f3d] transition-colors shrink-0">Grade {grade}</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#0f1f3d] font-medium truncate">{topicName}</span>
            </nav>
          </div>

          {/* Right: auth */}
          <NavAuth />
        </div>
      </header>

      <main>
        <TopicTabs topicName={topicName} grade={grade} isLocked={isLocked} studyGuideData={studyGuideData} />
      </main>

      <AIAssistant grade={grade} />
    </div>
  )
}
