import Link from 'next/link'
import TopicTabs from '@/app/components/TopicTabs'
import NavAuth from '@/app/components/NavAuth'

const FREE_TOPICS = new Set(['topic-1', 'topic-2'])

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
  const topicName = formatSlug(topic)
  const isLocked = !FREE_TOPICS.has(topic)

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
        <TopicTabs topicName={topicName} grade={grade} isLocked={isLocked} />
      </main>
    </div>
  )
}
