'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useAuth } from '@/app/providers'

// ─── Types ───────────────────────────────────────────────────────────────────

type Tab = 'Study Guide' | 'Practice' | 'Answers'

interface Props {
  topicName: string
  grade: string
  isLocked: boolean
}

// ─── Placeholder content ─────────────────────────────────────────────────────

const QUESTIONS = [
  {
    n: 1,
    q: 'Solve for x: 3x + 7 = 22',
    a: 'x = 5',
    working: 'Subtract 7 from both sides: 3x = 15. Divide both sides by 3: x = 5.',
  },
  {
    n: 2,
    q: 'Simplify the expression: 4a² × 2a³',
    a: '8a⁵',
    working: 'Multiply the coefficients (4 × 2 = 8) and add the exponents (2 + 3 = 5).',
  },
  {
    n: 3,
    q: 'A rectangle has length (2x + 1) cm and width 4 cm. Write an expression for its area.',
    a: 'Area = 8x + 4 cm²',
    working: 'Area = length × width = (2x + 1) × 4 = 8x + 4 cm².',
  },
  {
    n: 4,
    q: 'Factorise completely: x² + 7x + 12',
    a: '(x + 3)(x + 4)',
    working: 'Find two numbers that multiply to 12 and add to 7. These are 3 and 4.',
  },
]

// ─── Lock icon ───────────────────────────────────────────────────────────────

function LockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-10 h-10"
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

// ─── Locked: logged-out view ──────────────────────────────────────────────────

function LoggedOutLocked({ onLoginClick }: { onLoginClick: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6 text-center max-w-md mx-auto">
      <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-[#1e40af]">
        <LockIcon />
      </div>
      <h2 className="text-xl font-bold text-[#0f1f3d] mb-3">This is a premium topic</h2>
      <p className="text-gray-500 text-sm leading-relaxed mb-8">
        Create a free account to preview our free topics, or log in and subscribe to unlock all
        topics across every grade.
      </p>
      <button
        onClick={onLoginClick}
        className="bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-semibold px-7 py-3 rounded-xl text-sm transition-colors shadow-sm"
      >
        Log in / Register
      </button>
    </div>
  )
}

// ─── Locked: logged-in / upgrade view ────────────────────────────────────────

function UpgradePanel() {
  const [comingSoon, setComingSoon] = useState(false)

  return (
    <div className="max-w-2xl mx-auto py-14 px-6">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="w-18 h-18 w-[72px] h-[72px] rounded-full bg-blue-50 flex items-center justify-center mb-5 text-[#1e40af]">
          <LockIcon />
        </div>
        <h2 className="text-2xl font-bold text-[#0f1f3d] mb-2">Upgrade to Mathly Pro</h2>
        <p className="text-gray-500 text-sm max-w-sm">
          Unlock unlimited access to all topics and grades with a Pro subscription.
        </p>
      </div>

      {comingSoon && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-4 text-center mb-8">
          <p className="text-[#1e40af] text-sm font-semibold">
            Mathly Pro is coming soon!
          </p>
          <p className="text-blue-700 text-xs mt-1">
            Payment integration is on its way. Thank you for your interest.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Monthly */}
        <div className="bg-white border border-gray-200 rounded-2xl p-7 flex flex-col shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Monthly</p>
          <div className="mb-5">
            <span className="text-4xl font-bold text-[#0f1f3d]">$9.99</span>
            <span className="text-gray-400 text-sm ml-1.5">/ month</span>
          </div>
          <ul className="text-sm text-gray-600 space-y-2.5 mb-7 flex-1">
            {[
              'All grades & topics',
              'Study guides & worked examples',
              'Practice questions & answers',
              'Cancel anytime',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#1e40af] font-bold shrink-0 mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setComingSoon(true)}
            className="w-full bg-[#0f1f3d] hover:bg-[#1e40af] text-white font-semibold py-3 rounded-xl text-sm transition-colors"
          >
            Subscribe Monthly
          </button>
        </div>

        {/* Annual */}
        <div className="relative bg-[#0f1f3d] rounded-2xl p-7 flex flex-col shadow-md">
          <div className="absolute top-5 right-5">
            <span className="bg-[#1e40af] text-white text-xs font-bold px-2.5 py-1 rounded-full">
              Best value
            </span>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">Annual</p>
          <div className="mb-1">
            <span className="text-4xl font-bold text-white">$7.99</span>
            <span className="text-blue-300 text-sm ml-1.5">/ month</span>
          </div>
          <p className="text-blue-400 text-xs mb-5">Billed as $95.88 / year · Save 20%</p>
          <ul className="text-sm text-blue-100 space-y-2.5 mb-7 flex-1">
            {[
              'All grades & topics',
              'Study guides & worked examples',
              'Practice questions & answers',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-blue-400 font-bold shrink-0 mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setComingSoon(true)}
            className="w-full bg-[#1e40af] hover:bg-blue-500 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
          >
            Subscribe Annually
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Tab content: Study Guide ─────────────────────────────────────────────────

function StudyGuide({ topicName }: { topicName: string }) {
  return (
    <div className="space-y-5">
      {/* Overview callout */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <h2 className="font-semibold text-[#1e40af] mb-1.5">Overview</h2>
        <p className="text-blue-800 text-sm leading-relaxed">
          This topic introduces fundamental algebraic concepts that form the foundation for
          higher mathematics. You will learn to work with variables, simplify expressions, solve
          basic equations, and apply these techniques to real-world problems.
        </p>
      </div>

      {/* Key Definitions */}
      <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
        <h2 className="font-semibold text-[#0f1f3d] mb-4">Key Definitions</h2>
        <div className="space-y-4">
          {[
            {
              term: 'Variable',
              def: 'A letter (such as x, y, or n) that represents an unknown or changing quantity.',
            },
            {
              term: 'Expression',
              def: 'A combination of numbers, variables, and operations — for example, 3x + 7. An expression does not have an equals sign.',
            },
            {
              term: 'Equation',
              def: 'A mathematical statement that asserts two expressions are equal — for example, 3x + 7 = 22. Solving an equation means finding the value of the variable.',
            },
          ].map(({ term, def }) => (
            <div key={term} className="flex gap-3">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#1e40af] mt-2" />
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="font-semibold text-[#0f1f3d]">{term}: </strong>
                {def}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Rules */}
      <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
        <h2 className="font-semibold text-[#0f1f3d] mb-4">Key Rules &amp; Principles</h2>
        <div className="space-y-4">
          {[
            {
              rule: 'Balance method',
              detail:
                'Whatever you do to one side of an equation, you must do to the other. This keeps the equation balanced.',
            },
            {
              rule: 'Inverse operations',
              detail:
                'To isolate a variable, use the opposite operation. Addition undoes subtraction; multiplication undoes division.',
            },
            {
              rule: 'Collecting like terms',
              detail:
                'Only terms with the same variable and power can be combined — for example, 3x + 2x = 5x, but 3x + 2x² cannot be simplified.',
            },
          ].map(({ rule, detail }) => (
            <div key={rule} className="flex gap-3">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#1e40af] mt-2" />
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="font-semibold text-[#0f1f3d]">{rule}: </strong>
                {detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Worked Example */}
      <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
        <h2 className="font-semibold text-[#0f1f3d] mb-4">Worked Example</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm font-mono text-[#0f1f3d]">
          Solve: 2x + 5 = 17
        </div>
        <ol className="space-y-3">
          {[
            { step: 'Step 1', detail: 'Subtract 5 from both sides:', result: '2x = 12' },
            { step: 'Step 2', detail: 'Divide both sides by 2:', result: 'x = 6' },
          ].map(({ step, detail, result }) => (
            <li key={step} className="flex items-start gap-3 text-sm">
              <span className="shrink-0 bg-[#1e40af] text-white text-xs font-bold px-2 py-0.5 rounded-md mt-0.5">
                {step}
              </span>
              <span className="text-gray-700">
                {detail}{' '}
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[#0f1f3d] font-mono text-xs">
                  {result}
                </code>
              </span>
            </li>
          ))}
        </ol>
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-sm">
          <span className="text-gray-500">Answer:</span>
          <code className="bg-blue-50 text-[#1e40af] font-mono font-semibold px-2 py-0.5 rounded text-sm">
            x = 6
          </code>
        </div>
      </div>
    </div>
  )
}

// ─── Tab content: Practice ────────────────────────────────────────────────────

function Practice({ topicName }: { topicName: string }) {
  return (
    <div className="space-y-5">
      <p className="text-sm text-gray-500 leading-relaxed">
        Work through each question below. Try to solve it yourself before checking the answer in
        the <strong>Answers</strong> tab.
      </p>
      {QUESTIONS.map(({ n, q }) => (
        <div key={n} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <span className="shrink-0 w-7 h-7 rounded-full bg-[#1e40af] text-white text-xs font-bold flex items-center justify-center mt-0.5">
              {n}
            </span>
            <div className="flex-1">
              <p className="text-gray-800 text-sm leading-relaxed font-medium">{q}</p>
              <div className="mt-4 h-10 w-full rounded-lg border border-dashed border-gray-200 bg-gray-50 flex items-center px-3">
                <span className="text-xs text-gray-400">Your working / answer here…</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <p className="text-xs text-gray-400 text-center pt-2">
        When you are ready, open the <strong>Answers</strong> tab to check your work.
      </p>
    </div>
  )
}

// ─── Tab content: Answers ─────────────────────────────────────────────────────

function Answers() {
  const [revealed, setRevealed] = useState(false)

  if (!revealed) {
    return (
      <div className="flex flex-col items-center py-16 text-center">
        <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1e40af" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.355a14.998 14.998 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
        </div>
        <h3 className="font-semibold text-[#0f1f3d] mb-2">Have you attempted all the questions?</h3>
        <p className="text-sm text-gray-500 mb-7 max-w-xs">
          Try working through the Practice questions first, then come back to check your answers.
        </p>
        <button
          onClick={() => setRevealed(true)}
          className="bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors shadow-sm"
        >
          Reveal Answers
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-sm text-[#1e40af] font-medium">
        Compare your answers carefully. Understanding why an answer is correct matters more than getting it right first time.
      </div>
      {QUESTIONS.map(({ n, q, a, working }) => (
        <div key={n} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <span className="shrink-0 w-7 h-7 rounded-full bg-[#1e40af] text-white text-xs font-bold flex items-center justify-center mt-0.5">
              {n}
            </span>
            <div className="flex-1 space-y-3">
              <p className="text-gray-600 text-sm">{q}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Answer</span>
                <code className="bg-blue-50 text-[#1e40af] font-mono font-semibold px-2.5 py-1 rounded-lg text-sm">
                  {a}
                </code>
              </div>
              <div className="bg-gray-50 rounded-lg px-4 py-3">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Working</p>
                <p className="text-sm text-gray-700 leading-relaxed">{working}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function TopicTabs({ topicName, grade, isLocked }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('Study Guide')
  const [mounted, setMounted] = useState(false)
  const { user, openModal } = useAuth()

  useEffect(() => {
    setMounted(true)
  }, [])

  // ── Locked topic ──────────────────────────────────────────────────────────
  if (isLocked) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#0f1f3d] mb-1">{topicName}</h1>
          <p className="text-sm text-gray-500">Grade {grade}</p>
        </div>
        {/* Suppress auth-dependent content until hydrated to avoid mismatch */}
        {!mounted ? (
          <div className="h-80" />
        ) : user ? (
          <UpgradePanel />
        ) : (
          <LoggedOutLocked onLoginClick={openModal} />
        )}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link
            href={`/grade/${grade}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0f1f3d] hover:underline underline-offset-4 transition-all"
          >
            <span aria-hidden="true">←</span>
            Back to Grade {grade}
          </Link>
        </div>
      </div>
    )
  }

  // ── Free topic ────────────────────────────────────────────────────────────
  const TABS: Tab[] = ['Study Guide', 'Practice', 'Answers']

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-3xl font-bold text-[#0f1f3d]">{topicName}</h1>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-[#1e40af] border border-blue-200">
            Free
          </span>
        </div>
        <p className="text-sm text-gray-500">Grade {grade}</p>
      </div>

      {/* Tab bar */}
      <div className="flex border-b border-gray-200 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
              activeTab === tab
                ? 'border-[#1e40af] text-[#1e40af]'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab panels */}
      {activeTab === 'Study Guide' && <StudyGuide topicName={topicName} />}
      {activeTab === 'Practice' && <Practice topicName={topicName} />}
      {activeTab === 'Answers' && <Answers />}

      <div className="mt-10 pt-6 border-t border-gray-100">
        <Link
          href={`/grade/${grade}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0f1f3d] hover:underline underline-offset-4 transition-all"
        >
          <span aria-hidden="true">←</span>
          Back to Grade {grade}
        </Link>
      </div>
    </div>
  )
}
