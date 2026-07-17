'use client'

import { useState, useEffect, useRef, type ReactNode } from 'react'
import Link from 'next/link'
import { useAuth, getActiveChild, type Language } from '@/app/providers'
import type { TopicData, Section, WorkedExample, PracticeQuestion, OpenQuestion, QuestionPart, PracticeSet } from '@/src/data/grade4/en/numbers-operations'
import AIAssistant from '@/app/components/AIAssistant'
import { useTranslations } from '@/src/i18n/useTranslations'
import { logActivityCompletion } from '@/src/lib/activity-log'

// ─── Types ───────────────────────────────────────────────────────────────────

type Tab = 'Study Guide' | 'Practice' | 'Answers'

interface Props {
  topicName: string
  topicSlug: string
  grade: string
  isLocked: boolean
  studyGuideData?: TopicData
}

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
  const t = useTranslations()
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6 text-center max-w-md mx-auto">
      <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-[#1e40af]">
        <LockIcon />
      </div>
      <h2 className="text-xl font-bold text-[#0f1f3d] mb-3">{t.topic_premium_heading}</h2>
      <p className="text-gray-500 text-sm leading-relaxed mb-8">
        {t.topic_premium_message}
      </p>
      <button
        onClick={onLoginClick}
        className="bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-semibold px-7 py-3 rounded-xl text-sm transition-colors shadow-sm"
      >
        {t.nav_login}
      </button>
    </div>
  )
}

// ─── Locked: logged-in / upgrade view ────────────────────────────────────────

function UpgradePanel() {
  const t = useTranslations()
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6 text-center max-w-md mx-auto">
      <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-[#1e40af]">
        <LockIcon />
      </div>
      <h2 className="text-xl font-bold text-[#0f1f3d] mb-3">{t.topic_subscription_heading}</h2>
      <p className="text-gray-500 text-sm leading-relaxed mb-8">
        {t.topic_subscription_message}
      </p>
      <Link
        href="/pricing"
        className="bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-semibold px-7 py-3 rounded-xl text-sm transition-colors shadow-sm"
      >
        {t.topic_view_packages}
      </Link>
    </div>
  )
}

// ─── Tab content: Study Guide ─────────────────────────────────────────────────

function StudyGuide({ topicName }: { topicName: string }) {
  const t = useTranslations()
  return (
    <div className="flex items-center justify-center py-24">
      <p className="text-sm text-gray-500">{t.topic_content_coming_soon}</p>
    </div>
  )
}

// ─── Tab content: Practice ────────────────────────────────────────────────────

function Practice({ topicName }: { topicName: string }) {
  const t = useTranslations()
  return (
    <div className="flex items-center justify-center py-24">
      <p className="text-sm text-gray-500">{t.topic_content_coming_soon}</p>
    </div>
  )
}

// ─── Tab content: Answers ─────────────────────────────────────────────────────

function Answers() {
  const t = useTranslations()
  return (
    <div className="flex items-center justify-center py-24">
      <p className="text-sm text-gray-500">{t.topic_content_coming_soon}</p>
    </div>
  )
}

// ─── Real study guide renderers ───────────────────────────────────────────────

/** Splits a single explanation string into groups of ~3 sentences per paragraph. */
function splitIntoParagraphs(text: string, sentencesPerParagraph = 3): string[] {
  const sentences = text.split(/(?<=[.!?])\s+(?=[A-Z"'(])/)
  const paragraphs: string[] = []
  for (let i = 0; i < sentences.length; i += sentencesPerParagraph) {
    paragraphs.push(sentences.slice(i, i + sentencesPerParagraph).join(' '))
  }
  return paragraphs
}

function WorkedExampleCard({ example, number }: { example: WorkedExample; number: number }) {
  const [open, setOpen] = useState(true)
  const t = useTranslations()
  const exampleLabel = t.topic_example_label.replace('{number}', String(number))
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-5 bg-blue-50 hover:bg-blue-100 transition-colors text-left"
      >
        {example.question.includes('<') ? (
          <span
            className="topic-html text-sm font-semibold text-[#0f1f3d] leading-snug pr-4"
            dangerouslySetInnerHTML={{ __html: `${exampleLabel}: ${example.question}` }}
          />
        ) : (
          <span className="text-sm font-semibold text-[#0f1f3d] leading-snug pr-4">
            {exampleLabel}: {example.question}
          </span>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-4 h-4 shrink-0 text-[#1e40af] transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Body */}
      {open && (
        <div className="bg-white px-6 py-6">
          <ol className="space-y-4">
            {example.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="shrink-0 w-6 h-6 rounded-full bg-[#1e40af] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                {step.includes('<') ? (
                <div className="topic-html text-gray-700" style={{ lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: step }} />
              ) : (
                <span className="text-gray-700" style={{ lineHeight: 1.8 }}>{step}</span>
              )}
              </li>
            ))}
          </ol>
          <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide shrink-0">{t.topic_answer_label}</span>
            {example.answer.includes('<') ? (
              <span className="topic-html bg-blue-50 text-[#1e40af] font-semibold px-3 py-1.5 rounded-lg text-sm leading-snug" dangerouslySetInnerHTML={{ __html: example.answer }} />
            ) : (
              <span className="bg-blue-50 text-[#1e40af] font-semibold px-3 py-1.5 rounded-lg text-sm leading-snug">
                {example.answer}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function VideoPlaceholderCard({ label }: { label: string }) {
  const t = useTranslations()
  return (
    <div
      className="flex items-center gap-4 rounded-xl px-5 py-5"
      style={{ border: '1.5px dashed #bfdbfe', backgroundColor: '#f8faff' }}
    >
      <div
        className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
        style={{ backgroundColor: '#dbeafe' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e40af" className="w-5 h-5" aria-hidden="true">
          <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#1e40af' }}>{t.topic_video_label}</p>
        <p className="text-sm font-medium" style={{ color: '#0f1f3d', lineHeight: 1.5 }}>{label}</p>
        <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>{t.topic_video_coming_soon}</p>
      </div>
    </div>
  )
}

function DiagramPlaceholderCard({ label, svg }: { label: string; svg?: string }) {
  const t = useTranslations()
  if (svg) {
    return (
      <div
        className="rounded-xl px-5 py-5"
        style={{ border: '1.5px dashed #bfdbfe', backgroundColor: '#f8faff' }}
      >
        <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: '#1e40af' }}>{t.topic_diagram_label}</p>
        <p className="text-sm font-medium mb-3" style={{ color: '#0f1f3d', lineHeight: 1.5 }}>{label}</p>
        <div
          className="topic-html"
          dangerouslySetInnerHTML={{ __html: svg }}
          style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}
        />
      </div>
    )
  }

  return (
    <div
      className="flex items-center gap-4 rounded-xl px-5 py-5"
      style={{ border: '1.5px dashed #bfdbfe', backgroundColor: '#f8faff' }}
    >
      <div
        className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
        style={{ backgroundColor: '#dbeafe' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e40af" className="w-5 h-5" aria-hidden="true">
          <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625ZM21 9.375A.375.375 0 0 0 20.625 9h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5A.375.375 0 0 0 21 10.875v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5ZM10.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5ZM3.375 15h7.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h7.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 10.875 9h-7.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#1e40af' }}>{t.topic_diagram_label}</p>
        <p className="text-sm font-medium" style={{ color: '#0f1f3d', lineHeight: 1.5 }}>{label}</p>
        <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>{t.topic_diagram_coming_soon}</p>
      </div>
    </div>
  )
}

function PracticeCard({
  question,
  number,
  onAnswer,
}: {
  question: PracticeQuestion
  number: number
  onAnswer: (correct: boolean) => void
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const t = useTranslations()

  function handleSelect(idx: number) {
    if (selected !== null) return
    setSelected(idx)
    onAnswer(idx === question.correctIndex)
  }

  const answered = selected !== null

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm" style={{ padding: '24px' }}>
      <div className="flex items-start gap-4 mb-5">
        <span className="shrink-0 w-7 h-7 rounded-full bg-[#1e40af] text-white text-xs font-bold flex items-center justify-center mt-0.5">
          {number}
        </span>
        {question.question.includes('<') ? (
          <p className="topic-html text-sm text-gray-800 font-medium pt-0.5" style={{ lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: question.question }} />
        ) : (
          <p className="text-sm text-gray-800 font-medium pt-0.5" style={{ lineHeight: 1.8 }}>
            {question.question}
          </p>
        )}
      </div>

      <div className="ml-11 space-y-2">
        {Array.isArray(question.options) && question.options.map((opt, idx) => {
          const isCorrect = idx === question.correctIndex
          const isSelected = idx === selected

          let btnClass =
            'w-full text-left text-sm px-4 py-3 rounded-xl border transition-colors font-medium '
          if (!answered) {
            btnClass += 'border-gray-200 text-gray-700 hover:border-[#1e40af] hover:bg-blue-50 hover:text-[#1e40af]'
          } else if (isCorrect) {
            btnClass += 'border-green-400 bg-green-50 text-green-800'
          } else if (isSelected) {
            btnClass += 'border-red-300 bg-red-50 text-red-700'
          } else {
            btnClass += 'border-gray-100 text-gray-400'
          }

          return (
            <button key={idx} onClick={() => handleSelect(idx)} className={btnClass}>
              <span className="inline-flex items-center gap-2.5">
                <span className="shrink-0 w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-bold">
                  {answered && isCorrect ? '✓' : answered && isSelected ? '✗' : String.fromCharCode(65 + idx)}
                </span>
                {opt}
              </span>
            </button>
          )
        })}
      </div>

      {answered && selected !== question.correctIndex && (
        <div className="ml-11 mt-4 bg-blue-50 border border-blue-200 rounded-xl px-4 py-4">
          <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-2">{t.topic_how_to_work_it_out}</p>
          <p className="text-sm text-blue-900 whitespace-pre-line" style={{ lineHeight: 1.8 }}>
            {question.answer}
          </p>
        </div>
      )}
    </div>
  )
}

// ─── Open-ended question card ─────────────────────────────────────────────────

const DIFFICULTY_STYLE: Record<string, { bg: string; color: string; border: string }> = {
  'Easy':        { bg: '#f0fdf4', color: '#16a34a', border: '#86efac' },
  'Easy-Medium': { bg: '#ecfdf5', color: '#059669', border: '#6ee7b7' },
  'Medium':      { bg: '#fffbeb', color: '#d97706', border: '#fcd34d' },
  'Medium-Hard': { bg: '#fff7ed', color: '#ea580c', border: '#fdba74' },
  'Hard':        { bg: '#fef2f2', color: '#dc2626', border: '#fca5a5' },
}

function normalizeAnswer(s: string): string {
  return s.toLowerCase().replace(/×/g, 'x').replace(/\s+/g, '').replace(/,/g, '').replace(/[.;:!?]/g, '')
}

function matchesAnswer(input: string, correctAnswer: string, correctAnswers?: string[]): boolean {
  const n = normalizeAnswer(input)
  if (correctAnswers && correctAnswers.length > 0) {
    return correctAnswers.some((a) => normalizeAnswer(a) === n)
  }
  return n === normalizeAnswer(correctAnswer)
}

function FeedbackBox({
  correct,
  text,
}: {
  correct: boolean
  text: string
}) {
  const t = useTranslations()
  return correct ? (
    <div className="mt-3 rounded-xl px-4 py-4" style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac' }}>
      <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#16a34a' }}>{t.topic_correct_badge}</p>
      {text.includes('<') ? (
        <p className="topic-html text-sm whitespace-pre-line" style={{ color: '#14532d', lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
        <p className="text-sm whitespace-pre-line" style={{ color: '#14532d', lineHeight: 1.8 }}>{text}</p>
      )}
    </div>
  ) : (
    <div className="mt-3 rounded-xl px-4 py-4" style={{ backgroundColor: '#fef2f2', border: '1px solid #fca5a5' }}>
      <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#dc2626' }}>{t.topic_incorrect_badge}</p>
      {text.includes('<') ? (
        <p className="topic-html text-sm whitespace-pre-line" style={{ color: '#7f1d1d', lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
        <p className="text-sm whitespace-pre-line" style={{ color: '#7f1d1d', lineHeight: 1.8 }}>{text}</p>
      )}
    </div>
  )
}

function OpenQuestionCard({
  question,
  index,
  onResult,
}: {
  question: OpenQuestion
  index: number
  onResult: (partResults: boolean[]) => void
}) {
  const [singleInput, setSingleInput] = useState('')
  const [partInputs, setPartInputs] = useState<string[]>(
    question.parts ? question.parts.map(() => '') : []
  )
  const [checked, setChecked] = useState(false)
  const [singleCorrect, setSingleCorrect] = useState(false)
  const [partCorrects, setPartCorrects] = useState<boolean[]>([])
  const [partSelfResults, setPartSelfResults] = useState<(boolean | null)[]>(() =>
    (question.parts ?? []).map(() => null)
  )
  const [resultSent, setResultSent] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [selfMark, setSelfMark] = useState<boolean | null>(null)
  const t = useTranslations()

  const d = DIFFICULTY_STYLE[question.difficulty] ?? DIFFICULTY_STYLE['Medium']

  function handleAutoSingleCheck() {
    const correct = matchesAnswer(singleInput, question.correctAnswer ?? '', question.correctAnswers)
    setSingleCorrect(correct)
    setChecked(true)
    onResult([correct])
  }

  function handleAutoPartsCheck() {
    const hasSelfParts = (question.parts ?? []).some((p: QuestionPart) => p.checkMode === 'self')
    const results = (question.parts ?? []).map((p: QuestionPart, i: number) => {
      if (p.checkMode === 'self') return false
      return matchesAnswer(partInputs[i] ?? '', p.correctAnswer ?? '', p.correctAnswers)
    })
    setPartCorrects(results)
    setChecked(true)
    if (!hasSelfParts) onResult(results)
  }

  function handlePartSelfMark(pi: number, correct: boolean) {
    if (resultSent) return
    const newSelfResults = [...partSelfResults]
    newSelfResults[pi] = correct
    setPartSelfResults(newSelfResults)
    const parts = question.parts ?? []
    const allSelfDone = parts.every((p: QuestionPart, i: number) =>
      p.checkMode !== 'self' || newSelfResults[i] !== null
    )
    if (allSelfDone) {
      setResultSent(true)
      const combined = parts.map((p: QuestionPart, i: number) =>
        p.checkMode === 'self' ? (newSelfResults[i] ?? false) : (partCorrects[i] ?? false)
      )
      onResult(combined)
    }
  }

  function handleSelfMark(correct: boolean) {
    setSelfMark(correct)
    onResult([correct])
  }

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm" style={{ padding: '24px' }}>
      {/* Header */}
      <div className="flex items-start gap-4 mb-5">
        <span className="shrink-0 w-7 h-7 rounded-full bg-[#1e40af] text-white text-xs font-bold flex items-center justify-center mt-0.5">
          {index + 1}
        </span>
        <div className="flex-1">
          <span
            className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3"
            style={{ backgroundColor: d.bg, color: d.color, border: `1px solid ${d.border}` }}
          >
            {question.difficulty}
          </span>
          {question.question.includes('<') ? (
            <p className="topic-html text-sm text-gray-800 font-medium whitespace-pre-line" style={{ lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: question.question }} />
          ) : (
            <p className="text-sm text-gray-800 font-medium whitespace-pre-line" style={{ lineHeight: 1.8 }}>
              {question.question}
            </p>
          )}
        </div>
      </div>

      <div className="ml-11">
        {/* ── AUTO SINGLE ── */}
        {question.checkMode === 'auto' && !question.parts && (
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
              {t.topic_your_answer_label}
            </label>
            <input
              type="text"
              value={singleInput}
              onChange={(e) => setSingleInput(e.target.value)}
              disabled={checked}
              onKeyDown={(e) => { if (e.key === 'Enter' && !checked && singleInput.trim()) handleAutoSingleCheck() }}
              placeholder={t.topic_type_answer_placeholder}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#1e40af] transition-colors disabled:bg-gray-50 disabled:text-gray-500"
            />
            {!checked ? (
              <button
                onClick={handleAutoSingleCheck}
                disabled={!singleInput.trim()}
                className="mt-3 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors disabled:opacity-40"
                style={{ backgroundColor: '#1e40af' }}
              >
                {t.topic_check_answer}
              </button>
            ) : (
              <FeedbackBox correct={singleCorrect} text={question.explanation ?? ''} />
            )}
          </div>
        )}

        {/* ── AUTO PARTS (with optional per-part self-mark) ── */}
        {question.checkMode === 'auto' && question.parts && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {question.parts.map((part: QuestionPart, pi: number) => (
              <div key={pi}>
                {part.checkMode === 'self' ? (
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                      {t.topic_part_show_working_label.replace('{part}', part.label)}
                    </label>
                    <textarea
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 resize-none focus:outline-none focus:border-[#1e40af] transition-colors disabled:bg-gray-50 disabled:text-gray-500"
                      rows={3}
                      placeholder={t.topic_write_working_placeholder}
                      style={{ fontFamily: 'inherit' }}
                      disabled={checked}
                    />
                    {checked && (
                      <div className="mt-3 rounded-xl px-4 py-4" style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac' }}>
                        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#16a34a' }}>{t.topic_answer_label}</p>
                        <p className="text-sm whitespace-pre-line" style={{ color: '#14532d', lineHeight: 1.8 }}>
                          {part.answer ?? part.explanation ?? ''}
                        </p>
                        {partSelfResults[pi] === null ? (
                          <div className="flex gap-3 mt-3">
                            <button
                              onClick={() => handlePartSelfMark(pi, true)}
                              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                              style={{ backgroundColor: '#f0fdf4', color: '#16a34a', border: '1px solid #86efac' }}
                            >
                              {t.topic_i_got_it_right}
                            </button>
                            <button
                              onClick={() => handlePartSelfMark(pi, false)}
                              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                              style={{ backgroundColor: '#fef2f2', color: '#dc2626', border: '1px solid #fca5a5' }}
                            >
                              {t.topic_i_got_it_wrong}
                            </button>
                          </div>
                        ) : (
                          <p className="mt-3 text-sm font-semibold" style={{ color: partSelfResults[pi] ? '#16a34a' : '#dc2626' }}>
                            {partSelfResults[pi] ? t.topic_marked_correct : t.topic_marked_incorrect}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                      {t.topic_part_your_answer_label.replace('{part}', part.label)}
                    </label>
                    <input
                      type="text"
                      value={partInputs[pi] ?? ''}
                      onChange={(e) => {
                        const next = [...partInputs]
                        next[pi] = e.target.value
                        setPartInputs(next)
                      }}
                      disabled={checked}
                      placeholder={t.topic_type_answer_placeholder}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#1e40af] transition-colors disabled:bg-gray-50 disabled:text-gray-500"
                    />
                    {checked && (
                      <FeedbackBox
                        correct={partCorrects[pi] ?? false}
                        text={part.explanation ?? ''}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
            {!checked && (
              <button
                onClick={handleAutoPartsCheck}
                disabled={partInputs.some((v, i) => !v.trim() && question.parts?.[i]?.checkMode !== 'self')}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors disabled:opacity-40 self-start"
                style={{ backgroundColor: '#1e40af' }}
              >
                {t.topic_check_answer}
              </button>
            )}
          </div>
        )}

        {/* ── SELF MARK ── */}
        {question.checkMode === 'self' && (
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
              {t.topic_show_your_working_label}
            </label>
            <textarea
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 resize-none focus:outline-none focus:border-[#1e40af] transition-colors"
              rows={4}
              placeholder={t.topic_write_working_placeholder}
              style={{ fontFamily: 'inherit' }}
            />
            {!revealed ? (
              <button
                onClick={() => setRevealed(true)}
                className="mt-3 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: '#1e40af' }}
              >
                {t.topic_check_answer}
              </button>
            ) : (
              <div>
                <div className="mt-3 rounded-xl px-4 py-4" style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac' }}>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#16a34a' }}>{t.topic_answer_label}</p>
                  {(question.answer ?? '').includes('<') ? (
                    <p className="topic-html text-sm" style={{ color: '#14532d', lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: question.answer ?? '' }} />
                  ) : (
                    <p className="text-sm whitespace-pre-line" style={{ color: '#14532d', lineHeight: 1.8 }}>{question.answer}</p>
                  )}
                </div>
                {selfMark === null ? (
                  <div className="flex gap-3 mt-3">
                    <button
                      onClick={() => handleSelfMark(true)}
                      className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                      style={{ backgroundColor: '#f0fdf4', color: '#16a34a', border: '1px solid #86efac' }}
                    >
                      {t.topic_i_got_it_right}
                    </button>
                    <button
                      onClick={() => handleSelfMark(false)}
                      className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                      style={{ backgroundColor: '#fef2f2', color: '#dc2626', border: '1px solid #fca5a5' }}
                    >
                      {t.topic_i_got_it_wrong}
                    </button>
                  </div>
                ) : (
                  <p className="mt-3 text-sm font-semibold" style={{ color: selfMark ? '#16a34a' : '#dc2626' }}>
                    {selfMark ? t.topic_marked_correct : t.topic_marked_incorrect}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Results summary ──────────────────────────────────────────────────────────

function ResultsSummary({
  score,
  total,
  onReset,
  customMessages,
}: {
  score: number
  total: number
  onReset: () => void
  customMessages?: { minScore: number; message: string }[]
}) {
  const t = useTranslations()
  let message: string
  let barColor: string
  if (customMessages && customMessages.length > 0) {
    const sorted = [...customMessages].sort((a, b) => b.minScore - a.minScore)
    const match = sorted.find((m) => score >= m.minScore)
    message = match ? match.message : sorted[sorted.length - 1].message
    if (score === total) barColor = '#16a34a'
    else if (score / total >= 0.7) barColor = '#1e40af'
    else if (score / total >= 0.5) barColor = '#ea580c'
    else barColor = '#dc2626'
  } else if (score === total) {
    message = t.topic_score_excellent
    barColor = '#16a34a'
  } else if (score / total >= 0.6) {
    message = t.topic_score_good
    barColor = '#1e40af'
  } else {
    message = t.topic_score_keep_going
    barColor = '#dc2626'
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl px-6 py-6 shadow-sm">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <p className="text-2xl font-bold text-[#0f1f3d] mb-1">
            {score} <span className="text-base font-medium text-gray-400">/ {total}</span>
          </p>
          <p className="text-sm text-gray-600">{message}</p>
        </div>
        <button
          onClick={onReset}
          className="shrink-0 px-4 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 text-gray-700 hover:border-[#1e40af] hover:text-[#1e40af] transition-colors"
        >
          {t.topic_try_again}
        </button>
      </div>
      <div className="h-2.5 w-full rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${(score / total) * 100}%`, backgroundColor: barColor }}
        />
      </div>
    </div>
  )
}

// ─── Set-based practice (multiple named sets, e.g. 4 sets of 25) ──────────────

function SetPractice({ sets, topicSlug, grade }: { sets: PracticeSet[]; topicSlug: string; grade: number }) {
  const [activeSet, setActiveSet] = useState(0)
  const [resultsBySet, setResultsBySet] = useState<(boolean[] | null)[][]>(() =>
    sets.map((s) => Array(s.questions.length).fill(null))
  )
  const [resetKeyBySet, setResetKeyBySet] = useState<number[]>(() => sets.map(() => 0))
  const t = useTranslations()
  const { user } = useAuth()
  const loggedSetsRef = useRef<Set<number>>(new Set())

  const current = sets[activeSet]
  const currentResults = resultsBySet[activeSet]
  const totalMarks = current.questions.reduce(
    (sum, q) => sum + (q.parts && q.parts.length > 0 ? q.parts.length : 1),
    0
  )

  function handleResult(qIndex: number, partResults: boolean[]) {
    setResultsBySet((prev) => {
      const next = prev.map((arr) => [...arr])
      next[activeSet][qIndex] = partResults
      return next
    })
  }

  function handleReset() {
    setResultsBySet((prev) => {
      const next = prev.map((arr) => [...arr])
      next[activeSet] = Array(current.questions.length).fill(null)
      return next
    })
    setResetKeyBySet((prev) => {
      const next = [...prev]
      next[activeSet] = next[activeSet] + 1
      return next
    })
    loggedSetsRef.current.delete(activeSet)
  }

  const allAnswered = currentResults.every((r) => r !== null)
  const score = currentResults.reduce((sum, r) => sum + (r ? r.filter(Boolean).length : 0), 0)

  useEffect(() => {
    if (!allAnswered || !user || loggedSetsRef.current.has(activeSet)) return
    loggedSetsRef.current.add(activeSet)
    logActivityCompletion({
      uid: user.uid,
      childIndex: Math.min(Math.max(user.activeChildIndex, 0), user.children.length - 1),
      grade,
      topicSlug,
      activityType: 'practiceSet',
      setName: current.name ?? null,
      score,
      total: totalMarks,
    })
  }, [allAnswered, activeSet, score, totalMarks, user, grade, topicSlug, current.name])

  return (
    <div className="max-w-[720px]" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h2 className="text-base font-bold text-[#0f1f3d] mb-1">{t.topic_practice_questions_heading}</h2>
        <p className="text-sm text-gray-500" style={{ lineHeight: 1.7 }}>
          {t.topic_practice_instructions_prefix} <strong>{t.topic_check_answer}</strong>{t.topic_practice_instructions_suffix}
        </p>
      </div>

      {/* Set selector */}
      <div className="flex flex-wrap gap-2">
        {sets.map((set, i) => {
          const setResults = resultsBySet[i]
          const setAnswered = setResults.every((r) => r !== null)
          const setScore = setResults.reduce((sum, r) => sum + (r ? r.filter(Boolean).length : 0), 0)
          const setTotal = set.questions.reduce(
            (sum, q) => sum + (q.parts && q.parts.length > 0 ? q.parts.length : 1),
            0
          )
          return (
            <button
              key={i}
              onClick={() => setActiveSet(i)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold border transition-colors flex items-center gap-2 ${
                activeSet === i
                  ? 'border-[#1e40af] bg-blue-50 text-[#1e40af]'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              {set.name || t.topic_set_label.replace('{number}', String(i + 1))}
              {setAnswered && (
                <span
                  className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                    setScore === setTotal ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {t.topic_set_score_badge.replace('{score}', String(setScore)).replace('{total}', String(setTotal))}
                </span>
              )}
            </button>
          )
        })}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {(() => {
          const elements: ReactNode[] = []
          let lastSvg: string | undefined
          current.questions.forEach((q, i) => {
            if (q.diagramSvg && q.diagramSvg !== lastSvg) {
              elements.push(
                <DiagramPlaceholderCard
                  key={`set-${activeSet}-diagram-${i}-${resetKeyBySet[activeSet]}`}
                  label={t.topic_diagram_label}
                  svg={q.diagramSvg}
                />
              )
            }
            lastSvg = q.diagramSvg
            elements.push(
              <OpenQuestionCard
                key={`set-${activeSet}-q-${i}-${resetKeyBySet[activeSet]}`}
                question={q}
                index={i}
                onResult={(partResults) => handleResult(i, partResults)}
              />
            )
          })
          return elements
        })()}
      </div>

      {allAnswered && (
        <ResultsSummary
          score={score}
          total={totalMarks}
          onReset={handleReset}
          customMessages={current.scoreMessages}
        />
      )}
    </div>
  )
}

// ─── Open practice ────────────────────────────────────────────────────────────

function OpenPractice({
  questions,
  scoreMessages,
  topicSlug,
  grade,
}: {
  questions: OpenQuestion[]
  scoreMessages?: { minScore: number; message: string }[]
  topicSlug: string
  grade: number
}) {
  // 1 mark per part; questions without parts count as 1 mark
  const totalMarks = questions.reduce(
    (sum, q) => sum + (q.parts && q.parts.length > 0 ? q.parts.length : 1),
    0
  )

  const [results, setResults] = useState<(boolean[] | null)[]>(() =>
    Array(questions.length).fill(null)
  )
  const [resetKey, setResetKey] = useState(0)
  const { user } = useAuth()
  const loggedRef = useRef(false)

  function handleResult(index: number, partResults: boolean[]) {
    setResults((prev) => {
      const next = [...prev]
      next[index] = partResults
      return next
    })
  }

  function handleReset() {
    setResults(Array(questions.length).fill(null))
    setResetKey((k) => k + 1)
    loggedRef.current = false
  }

  const allAnswered = results.every((r) => r !== null)
  const score = results.reduce(
    (sum, r) => sum + (r ? r.filter(Boolean).length : 0),
    0
  )
  const t = useTranslations()

  useEffect(() => {
    if (!allAnswered || !user || loggedRef.current) return
    loggedRef.current = true
    logActivityCompletion({
      uid: user.uid,
      childIndex: Math.min(Math.max(user.activeChildIndex, 0), user.children.length - 1),
      grade,
      topicSlug,
      activityType: 'openPractice',
      score,
      total: totalMarks,
    })
  }, [allAnswered, score, totalMarks, user, grade, topicSlug])

  return (
    <div className="max-w-[720px]" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div>
        <h2 className="text-base font-bold text-[#0f1f3d] mb-1">{t.topic_practice_questions_heading}</h2>
        <p className="text-sm text-gray-500" style={{ lineHeight: 1.7 }}>
          {t.topic_practice_instructions_prefix} <strong>{t.topic_check_answer}</strong>{t.topic_practice_instructions_suffix}
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {questions.map((q, i) => (
          <OpenQuestionCard
            key={`q-${i}-${resetKey}`}
            question={q}
            index={i}
            onResult={(partResults) => handleResult(i, partResults)}
          />
        ))}
      </div>
      {allAnswered && (
        <ResultsSummary score={score} total={totalMarks} onReset={handleReset} customMessages={scoreMessages} />
      )}
    </div>
  )
}

// ─── Real study guide renderers ───────────────────────────────────────────────

function RealStudyGuide({ data }: { data: TopicData }) {
  const t = useTranslations()
  return (
    <div className="max-w-[720px]" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      {data.sections.map((section: Section, i: number) => (
        <div key={section.id}>
          {/* Section heading */}
          <div className="flex items-center gap-3" style={{ marginBottom: '32px' }}>
            <span className="text-2xl" aria-hidden="true">{section.icon}</span>
            <h2 className="text-lg font-bold text-[#0f1f3d]">
              {i + 1}. {section.title}
            </h2>
          </div>

          {/* Explanation card */}
          <div
            style={{
              border: '1.5px solid #1e40af',
              borderRadius: '12px',
              backgroundColor: 'rgba(239, 246, 255, 0.4)',
              padding: '24px',
              marginBottom: '32px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {section.explanation.includes('<') ? (
                <div
                  className="topic-html text-blue-900"
                  style={{ fontSize: '17px', lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{ __html: section.explanation }}
                />
              ) : (
                splitIntoParagraphs(section.explanation).map((para, pi) => (
                  <p key={pi} className="text-blue-900" style={{ fontSize: '17px', lineHeight: 1.8 }}>
                    {para}
                  </p>
                ))
              )}
            </div>
          </div>

          {/* Worked examples */}
          <h3
            className="text-sm font-semibold text-gray-500 uppercase tracking-wide"
            style={{ marginBottom: '16px' }}
          >
            {t.topic_worked_examples_heading}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {section.workedExamples.map((ex: WorkedExample, j: number) => (
              <WorkedExampleCard key={j} example={ex} number={j + 1} />
            ))}
          </div>

          {(section.diagramPlaceholder || section.diagramSvg) && (
            <div style={{ marginTop: '16px' }}>
              <DiagramPlaceholderCard label={section.diagramPlaceholder ?? ''} svg={section.diagramSvg} />
            </div>
          )}
          {section.videoPlaceholder && (
            <div style={{ marginTop: '12px' }}>
              <VideoPlaceholderCard label={section.videoPlaceholder} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Section-grouped open practice ───────────────────────────────────────────

function SectionOpenPractice({ data, topicSlug, grade }: { data: TopicData; topicSlug: string; grade: number }) {
  const sectionsWithQ = data.sections.filter(s => (s.openQuestions?.length ?? 0) > 0)

  // Build a stable flat list with global indices before any hooks
  const flatItems: Array<{ q: OpenQuestion; idx: number; sectionId: string }> = []
  sectionsWithQ.forEach(section => {
    ;(section.openQuestions ?? []).forEach(q => {
      flatItems.push({ q, idx: flatItems.length, sectionId: section.id })
    })
  })

  const totalMarks = flatItems.reduce(
    (sum, { q }) => sum + (q.parts && q.parts.length > 0 ? q.parts.length : 1),
    0
  )

  const [results, setResults] = useState<(boolean[] | null)[]>(() =>
    Array(flatItems.length).fill(null)
  )
  const [resetKey, setResetKey] = useState(0)

  function handleResult(idx: number, partResults: boolean[]) {
    setResults(prev => {
      const next = [...prev]
      next[idx] = partResults
      return next
    })
  }

  const { user } = useAuth()
  const loggedRef = useRef(false)

  function handleReset() {
    setResults(Array(flatItems.length).fill(null))
    setResetKey(k => k + 1)
    loggedRef.current = false
  }

  const allAnswered = results.every(r => r !== null)
  const score = results.reduce((sum, r) => sum + (r ? r.filter(Boolean).length : 0), 0)
  const t = useTranslations()

  useEffect(() => {
    if (!allAnswered || !user || loggedRef.current) return
    loggedRef.current = true
    logActivityCompletion({
      uid: user.uid,
      childIndex: Math.min(Math.max(user.activeChildIndex, 0), user.children.length - 1),
      grade,
      topicSlug,
      activityType: 'sectionPractice',
      score,
      total: totalMarks,
    })
  }, [allAnswered, score, totalMarks, user, grade, topicSlug])

  return (
    <div className="max-w-[720px]" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div>
        <h2 className="text-base font-bold text-[#0f1f3d] mb-1">{t.topic_practice_questions_heading}</h2>
        <p className="text-sm text-gray-500" style={{ lineHeight: 1.7 }}>
          {t.topic_practice_instructions_prefix} <strong>{t.topic_check_answer}</strong>{t.topic_practice_instructions_suffix}
        </p>
      </div>

      {sectionsWithQ.map(section => {
        const items = flatItems.filter(item => item.sectionId === section.id)
        return (
          <div key={section.id}>
            <h3
              className="text-sm font-semibold text-[#0f1f3d] uppercase tracking-wide flex items-center gap-2"
              style={{ marginBottom: '16px' }}
            >
              <span aria-hidden="true">{section.icon}</span>
              {section.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {items.map(({ q, idx }) => (
                <OpenQuestionCard
                  key={`q-${idx}-${resetKey}`}
                  question={q}
                  index={idx}
                  onResult={r => handleResult(idx, r)}
                />
              ))}
            </div>
          </div>
        )
      })}

      {allAnswered && (
        <ResultsSummary
          score={score}
          total={totalMarks}
          onReset={handleReset}
          customMessages={data.scoreMessages}
        />
      )}
    </div>
  )
}

function RealPractice({ data, topicSlug, grade }: { data: TopicData; topicSlug: string; grade: number }) {
  const hasSectionOpenQ = data.sections.some(s => (s.openQuestions?.length ?? 0) > 0)
  const total = data.sections.reduce((sum, s) => sum + (s.practiceQuestions?.length ?? 0), 0)
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const t = useTranslations()

  if (data.practiceSets && data.practiceSets.length > 0) {
    return <SetPractice sets={data.practiceSets} topicSlug={topicSlug} grade={grade} />
  }

  if (hasSectionOpenQ) return <SectionOpenPractice data={data} topicSlug={topicSlug} grade={grade} />

  if (data.topicPractice && data.topicPractice.length > 0) {
    return <OpenPractice questions={data.topicPractice} scoreMessages={data.scoreMessages} topicSlug={topicSlug} grade={grade} />
  }

  function handleAnswer(key: string, correct: boolean) {
    setAnswers((prev) => ({ ...prev, [key]: correct }))
  }

  const answered = Object.keys(answers).length
  const correct = Object.values(answers).filter(Boolean).length

  return (
    <div className="max-w-[720px]" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      {/* Score tracker */}
      <div className="bg-white border border-gray-200 rounded-2xl px-6 py-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-[#0f1f3d]">{t.topic_your_score}</p>
          <span className="text-sm font-bold text-[#1e40af]">
            {correct} / {total}
          </span>
        </div>
        <div className="h-2.5 w-full rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-[#1e40af] transition-all duration-500"
            style={{ width: total ? `${(correct / total) * 100}%` : '0%' }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-2">
          {answered === 0
            ? t.topic_select_answer_to_begin
            : answered < total
            ? (total - answered === 1
                ? t.topic_questions_remaining_singular.replace('{count}', String(total - answered))
                : t.topic_questions_remaining_plural.replace('{count}', String(total - answered)))
            : correct === total
            ? t.topic_perfect_score
            : t.topic_incorrect_review.replace('{count}', String(total - correct))}
        </p>
      </div>

      {data.sections.map((section: Section) => (
        <div key={section.id}>
          <h2
            className="text-sm font-semibold text-[#0f1f3d] uppercase tracking-wide flex items-center gap-2"
            style={{ marginBottom: '16px' }}
          >
            <span aria-hidden="true">{section.icon}</span>
            {section.title}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {(section.practiceQuestions ?? []).map((q: PracticeQuestion, i: number) => {
              const key = `${section.id}-${i}`
              return (
                <PracticeCard
                  key={key}
                  question={q}
                  number={i + 1}
                  onAnswer={(c) => handleAnswer(key, c)}
                />
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function TopicTabs({ topicName, topicSlug, grade, isLocked, studyGuideData }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('Study Guide')
  const [mounted, setMounted] = useState(false)
  const { user, openModal } = useAuth()
  const t = useTranslations()

  useEffect(() => {
    setMounted(true)
  }, [])

  const lang: Language = user ? getActiveChild(user).language : 'en'

  const TAB_LABELS: Record<Tab, string> = {
    'Study Guide': t.topic_tab_study_guide,
    'Practice': t.topic_tab_practice,
    'Answers': t.topic_tab_answers,
  }

  // ── Locked topic ──────────────────────────────────────────────────────────
  if (isLocked) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#0f1f3d] mb-1">{topicName}</h1>
          <p className="text-sm text-gray-500">{t.topic_grade_value.replace('{grade}', grade)}</p>
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
            {t.topic_back_to_grade.replace('{grade}', grade)}
          </Link>
        </div>
      </div>
    )
  }

  // ── Free topic ────────────────────────────────────────────────────────────
  const TABS: Tab[] = studyGuideData
    ? ['Study Guide', 'Practice']
    : ['Study Guide', 'Practice', 'Answers']

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-3xl font-bold text-[#0f1f3d]">{topicName}</h1>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-[#1e40af] border border-blue-200">
            {t.topic_free_badge}
          </span>
        </div>
        <p className="text-sm text-gray-500">{t.topic_grade_value.replace('{grade}', grade)}</p>
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
            {TAB_LABELS[tab]}
          </button>
        ))}
      </div>

      {/* Tab panels */}
      {activeTab === 'Study Guide' && (
        studyGuideData
          ? <RealStudyGuide data={studyGuideData} />
          : <StudyGuide topicName={topicName} />
      )}
      {activeTab === 'Practice' && (
        studyGuideData
          ? <RealPractice data={studyGuideData} topicSlug={topicSlug} grade={Number(grade)} />
          : <Practice topicName={topicName} />
      )}
      {activeTab === 'Answers' && !studyGuideData && <Answers />}

      {activeTab === 'Study Guide' && <AIAssistant grade={grade} />}

      <div className="mt-10 pt-6 border-t border-gray-100">
        <Link
          href={`/grade/${grade}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0f1f3d] hover:underline underline-offset-4 transition-all"
        >
          <span aria-hidden="true">←</span>
          {t.topic_back_to_grade.replace('{grade}', grade)}
        </Link>
      </div>
    </div>
  )
}
