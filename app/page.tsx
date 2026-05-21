'use client'

import Link from 'next/link'
import Navbar from '@/app/components/Navbar'

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  )
}

const CTA_CLASS =
  'inline-flex items-center gap-2 bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors shadow-sm hover:shadow-md'

const WHY_POINTS = [
  {
    icon: '🇿🇦',
    title: 'Built for South Africa',
    body: 'The content is aligned to the SA curriculum — not recycled from American or British syllabi. What you study on Mathly is what comes up in your tests and exams.',
  },
  {
    icon: '💸',
    title: 'Affordable by design',
    body: "Mathly is priced as an alternative to expensive tutoring, not an addition to it. The goal was never to add another cost — it was to replace one that most families can't sustain.",
  },
  {
    icon: '🤝',
    title: 'Real support, not just content',
    body: 'The Guided and Live Class options mean you can get actual answers to actual questions — not just a PDF to figure out alone at 10pm before a test.',
  },
]

export default function Home() {
  return (
    <div className="text-gray-900" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />

      <main>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          className="relative flex flex-col items-center justify-center min-h-[calc(100vh-57px)] px-6 text-center overflow-hidden"
          style={{ backgroundColor: '#f8fafc' }}
        >
          {/* Atmospheric color blobs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full"
            style={{ background: 'radial-gradient(circle, #dbeafe 0%, transparent 70%)', opacity: 0.73 }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full"
            style={{ background: 'radial-gradient(circle, #bfdbfe 0%, transparent 70%)', opacity: 0.56 }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-0 w-[260px] h-[260px] rounded-full"
            style={{ background: 'radial-gradient(circle, #e0e7ff 0%, transparent 70%)', opacity: 0.5 }}
          />

          {/* Graph-paper grid SVG */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.163 }}
          >
            <defs>
              <pattern id="minor-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e40af" strokeWidth="0.5" />
              </pattern>
              <pattern id="major-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#minor-grid)" />
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1e40af" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#major-grid)" />
          </svg>

          {/* Hero content */}
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block bg-blue-50 text-[#1e40af] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8 border border-blue-200">
              From R49/month · Cancel anytime
            </span>

            <h1
              className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
              style={{ color: '#0f1f3d' }}
            >
              Extra maths help shouldn&apos;t break the bank
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg mx-auto">
              Mathly gives South African students from Grade 4 to Grade 12 access to clear study
              guides, worked examples, and practice questions — at a fraction of the cost of a
              private tutor
            </p>

            <Link href="/select-grade" className={CTA_CLASS}>
              Start Learning
              <ArrowRight />
            </Link>
          </div>

          {/* Wave divider */}
          <div aria-hidden="true" className="absolute bottom-0 left-0 w-full leading-none">
            <svg
              viewBox="0 0 1440 56"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full"
              style={{ display: 'block', height: '56px' }}
            >
              <path
                d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
                fill="#0f1f3d"
                fillOpacity="1"
              />
            </svg>
          </div>
        </section>

        {/* ── Story ─────────────────────────────────────────────────────────── */}
        <section className="py-24 px-6" style={{ backgroundColor: '#0f1f3d' }}>
          <div className="max-w-2xl mx-auto">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8 border"
              style={{ color: '#93c5fd', borderColor: 'rgba(147,197,253,0.3)', backgroundColor: 'rgba(147,197,253,0.08)' }}
            >
              Our story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white leading-tight">
              Built by a student,<br className="hidden sm:block" /> for students
            </h2>

            <div className="space-y-5 leading-[1.85] text-base" style={{ color: '#a8b8d8' }}>
              <p>
                I&apos;m a 20-year-old student from Durbanville, Cape Town. Like a lot of South African
                students, I hit a wall with maths at some point — the kind of wall where you know
                you need help but aren&apos;t sure where to find it without it costing a fortune.
              </p>
              <p>
                Private tutors in Cape Town can easily charge R300 to R500 an hour. Printed study
                guides go out of date fast and never quite match what&apos;s in your textbook. And most
                free stuff online? It&apos;s built for the American or British curriculum, so half the
                terminology doesn&apos;t even match what your teacher writes on the board.
              </p>
              <p>
                That gap bothered me. Not just for myself, but for the thousands of students in
                South Africa who are just as capable and just as motivated, but don&apos;t have parents
                who can write a cheque for weekly tutoring sessions.
              </p>
              <p>
                So I built Mathly. It started as a side project — a simple site with study guides
                for Grade 10 maths. Then Grade 11. Then Grade 12. Then down to Grade 4. The idea
                was always the same: give every South African student access to clear,
                curriculum-aligned content at a price that doesn&apos;t exclude anyone.
              </p>
              <p>
                It&apos;s still early days. There&apos;s a lot more content to build, and a lot more features
                to add. But the foundation is there — and the goal hasn&apos;t changed.
              </p>
            </div>
          </div>
        </section>

        {/* ── Why Mathly ────────────────────────────────────────────────────── */}
        <section className="py-20 px-6" style={{ backgroundColor: '#f1f5f9' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-12 text-center" style={{ color: '#0f1f3d' }}>
              Why Mathly is different
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {WHY_POINTS.map((point) => (
                <div
                  key={point.title}
                  className="bg-white rounded-2xl p-7 shadow-sm flex flex-col"
                  style={{ border: '1px solid #e5e7eb' }}
                >
                  <span className="text-3xl mb-5" role="img" aria-hidden="true">
                    {point.icon}
                  </span>
                  <h3 className="font-bold mb-3" style={{ color: '#0f1f3d' }}>
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission ───────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 text-center" style={{ backgroundColor: '#0f1f3d' }}>
          <div className="max-w-xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#93c5fd' }}>
              Our mission
            </p>
            <blockquote className="text-2xl sm:text-3xl font-bold leading-snug text-white">
              &ldquo;To make quality maths education accessible to every South African student,
              regardless of their budget&rdquo;
            </blockquote>
          </div>
        </section>

      </main>
    </div>
  )
}
