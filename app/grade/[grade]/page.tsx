import Link from 'next/link'
import NavAuth from '@/app/components/NavAuth'

type Topic = {
  slug: string
  name: string
  description: string
  free: boolean
}

const topics: Topic[] = [
  {
    slug: 'topic-1',
    name: 'Topic 1',
    description: 'Foundational concepts and key definitions to build your understanding.',
    free: true,
  },
  {
    slug: 'topic-2',
    name: 'Topic 2',
    description: 'Core techniques and step-by-step methods explained clearly.',
    free: true,
  },
  {
    slug: 'topic-3',
    name: 'Topic 3',
    description: 'Visual approaches and real-world applications of the concept.',
    free: false,
  },
  {
    slug: 'topic-4',
    name: 'Topic 4',
    description: 'Practice patterns and common problem types you will encounter.',
    free: false,
  },
  {
    slug: 'topic-5',
    name: 'Topic 5',
    description: 'Deeper exploration with worked examples and key formulas.',
    free: false,
  },
  {
    slug: 'topic-6',
    name: 'Topic 6',
    description: 'Advanced techniques that build on earlier concepts in this grade.',
    free: false,
  },
  {
    slug: 'topic-7',
    name: 'Topic 7',
    description: 'Mixed problem solving with strategy guides and common mistakes to avoid.',
    free: false,
  },
  {
    slug: 'topic-8',
    name: 'Topic 8',
    description: 'Review and consolidation with exam-style questions and model answers.',
    free: false,
  },
]

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

export default async function GradePage({
  params,
}: {
  params: Promise<{ grade: string }>
}) {
  const { grade } = await params

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
            Back to Home
          </Link>
          <NavAuth />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Grade heading */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1e40af] mb-2">
            Curriculum
          </p>
          <h1 className="text-4xl font-bold mb-2" style={{ color: '#0f1f3d' }}>
            Grade {grade}
          </h1>
          <p className="text-gray-500">
            Choose a topic below to start learning.{' '}
            <span className="text-[#1e40af] font-medium">Topics 1–2 are free.</span>
          </p>
        </div>

        {/* Topic grid */}
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
                      Free
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
                  <>Start learning <ChevronRight /></>
                ) : (
                  <>Subscribe to unlock</>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
