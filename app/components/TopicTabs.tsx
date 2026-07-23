'use client'

import { useState, useEffect, useRef, type ReactNode } from 'react'
import Link from 'next/link'
import { useAuth, getActiveChild, type Language } from '@/app/providers'
import type { TopicData, Section, WorkedExample, PracticeQuestion, OpenQuestion, QuestionPart, PracticeSet } from '@/src/data/grade4/en/numbers-operations'
import AIAssistant from '@/app/components/AIAssistant'
import { useTranslations } from '@/src/i18n/useTranslations'
import { logActivityCompletion } from '@/src/lib/activity-log'
import { getTopicStudied, setTopicStudied } from '@/src/lib/study-progress'
import { getTopics } from '@/src/data/topic-registry'

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
// Content data files use HTML entities (&nbsp;, &times;, etc.) for spacing
// and symbols, expecting the browser to decode them. That only happens
// automatically on the dangerouslySetInnerHTML branch (raw strings that
// contain a literal '<'); plain-text JSX branches render entities literally
// since React escapes text content. This decodes the same entity set for
// those plain-text branches so "x &nbsp;→&nbsp; y" doesn't show up as-is.
const HTML_ENTITIES: Record<string, string> = {
  '&amp;': '&',
  '&apos;': "'",
  '&divide;': '÷',
  '&gt;': '>',
  '&ldquo;': '“',
  '&lt;': '<',
  '&minus;': '−',
  '&nbsp;': ' ',
  '&quot;': '"',
  '&rdquo;': '”',
  '&thinsp;': ' ',
  '&times;': '×',
}

function decodeEntities(text: string): string {
  return text.replace(/&[a-zA-Z]+;/g, (entity) => HTML_ENTITIES[entity] ?? entity)
}

// Content strings mix plain text with real HTML (color-coded <span>s,
// <strong>, tables, inline SVG diagrams). A bare `<` in maths like
// "-2<x<1/2" must NOT count as HTML — dangerouslySetInnerHTML would parse
// `<x...` as an unterminated tag and silently swallow the rest of the
// answer. Only route to the HTML branch when a genuine, properly-closed
// known tag is present. The tag whitelist was derived by scanning every
// src/data/**/*.ts content file for tags actually used inside question/
// answer/step/explanation strings (excluding diagramSvg fields, which are
// rendered through a separate always-HTML path): span, strong, em, sub,
// sup, br, p, div, ul, ol, li, table/thead/tbody/tr/td/th, h3, and the
// inline-SVG-diagram set (svg, circle, line, path, polygon, rect, text, g,
// polyline) used directly inside some worked-example steps. `b` and `i`
// were deliberately left out: they don't appear anywhere in real content,
// and being common maths variable names, keeping them would risk matching
// something like "a<b>c" as HTML.
const HTML_TAG_RE = /<\/?(?:span|strong|em|sub|sup|br|p|div|ul|ol|li|table|thead|tbody|tr|td|th|h3|svg|circle|line|path|polygon|rect|text|g|polyline)(?:\s[^<>]*)?\/?>/i
function looksLikeHtml(text: string): boolean {
  return HTML_TAG_RE.test(text)
}

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
        {looksLikeHtml(example.question) ? (
          <span
            className="topic-html text-sm font-semibold text-[#0f1f3d] leading-snug pr-4"
            dangerouslySetInnerHTML={{ __html: `${exampleLabel}: ${example.question}` }}
          />
        ) : (
          <span className="text-sm font-semibold text-[#0f1f3d] leading-snug pr-4">
            {exampleLabel}: {decodeEntities(example.question)}
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
                {looksLikeHtml(step) ? (
                <div className="topic-html text-gray-700" style={{ lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: step }} />
              ) : (
                <span className="text-gray-700" style={{ lineHeight: 1.8 }}>{decodeEntities(step)}</span>
              )}
              </li>
            ))}
          </ol>
          <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide shrink-0">{t.topic_answer_label}</span>
            {looksLikeHtml(example.answer) ? (
              <span className="topic-html bg-blue-50 text-[#1e40af] font-semibold px-3 py-1.5 rounded-lg text-sm leading-snug" dangerouslySetInnerHTML={{ __html: example.answer }} />
            ) : (
              <span className="bg-blue-50 text-[#1e40af] font-semibold px-3 py-1.5 rounded-lg text-sm leading-snug">
                {decodeEntities(example.answer)}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function DiagramPlaceholderCard({ label, svg }: { label: string; svg: string }) {
  const t = useTranslations()
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

function PracticeCard({
  question,
  number,
  revealed,
  onAnswer,
}: {
  question: PracticeQuestion
  number: number
  revealed: boolean
  onAnswer: (correct: boolean) => void
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const [selfMark, setSelfMark] = useState<boolean | null>(null)
  const t = useTranslations()

  function handleSelect(idx: number) {
    if (selected !== null || revealed) return
    setSelected(idx)
  }

  function handleSelfMark(correct: boolean) {
    if (selfMark !== null) return
    setSelfMark(correct)
    onAnswer(correct)
  }

  const isCorrectSelection = selected !== null && selected === question.correctIndex

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm" style={{ padding: '24px' }}>
      <div className="flex items-start gap-4 mb-5">
        <span className="shrink-0 w-7 h-7 rounded-full bg-[#1e40af] text-white text-xs font-bold flex items-center justify-center mt-0.5">
          {number}
        </span>
        {looksLikeHtml(question.question) ? (
          <p className="topic-html text-sm text-gray-800 font-medium pt-0.5" style={{ lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: question.question }} />
        ) : (
          <p className="text-sm text-gray-800 font-medium pt-0.5" style={{ lineHeight: 1.8 }}>
            {decodeEntities(question.question)}
          </p>
        )}
      </div>

      <div className="ml-11 space-y-2">
        {Array.isArray(question.options) && question.options.map((opt, idx) => {
          const isCorrect = idx === question.correctIndex
          const isSelected = idx === selected

          let btnClass =
            'w-full text-left text-sm px-4 py-3 rounded-xl border transition-colors font-medium '
          if (!revealed) {
            btnClass += isSelected
              ? 'border-[#1e40af] bg-blue-50 text-[#1e40af]'
              : 'border-gray-200 text-gray-700 hover:border-[#1e40af] hover:bg-blue-50 hover:text-[#1e40af]'
          } else if (isCorrect) {
            btnClass += 'border-green-400 bg-green-50 text-green-800'
          } else if (isSelected) {
            btnClass += 'border-red-300 bg-red-50 text-red-700'
          } else {
            btnClass += 'border-gray-100 text-gray-400'
          }

          return (
            <button key={idx} onClick={() => handleSelect(idx)} disabled={revealed} className={btnClass}>
              <span className="inline-flex items-center gap-2.5">
                <span className="shrink-0 w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-bold">
                  {revealed && isCorrect ? '✓' : revealed && isSelected ? '✗' : String.fromCharCode(65 + idx)}
                </span>
                {decodeEntities(opt)}
              </span>
            </button>
          )
        })}
      </div>

      {revealed && !isCorrectSelection && (
        <div className="ml-11 mt-4 bg-blue-50 border border-blue-200 rounded-xl px-4 py-4">
          <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-2">{t.topic_how_to_work_it_out}</p>
          <p className="text-sm text-blue-900 whitespace-pre-line" style={{ lineHeight: 1.8 }}>
            {decodeEntities(question.answer)}
          </p>
        </div>
      )}

      {revealed && (
        selfMark === null ? (
          <div className="ml-11 flex gap-3 mt-4">
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
          <p className="ml-11 mt-4 text-sm font-semibold" style={{ color: selfMark ? '#16a34a' : '#dc2626' }}>
            {selfMark ? t.topic_marked_correct : t.topic_marked_incorrect}
          </p>
        )
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

function OpenQuestionCard({
  question,
  index,
  revealed,
  onResult,
}: {
  question: OpenQuestion
  index: number
  revealed: boolean
  onResult: (partResults: boolean[]) => void
}) {
  const [singleInput, setSingleInput] = useState('')
  const [partInputs, setPartInputs] = useState<string[]>(
    question.parts ? question.parts.map(() => '') : []
  )
  const [selfMark, setSelfMark] = useState<boolean | null>(null)
  const [partSelfResults, setPartSelfResults] = useState<(boolean | null)[]>(() =>
    (question.parts ?? []).map(() => null)
  )
  const [resultSent, setResultSent] = useState(false)
  const t = useTranslations()

  const d = DIFFICULTY_STYLE[question.difficulty] ?? DIFFICULTY_STYLE['Medium']
  const parts = question.parts ?? []

  function handleSelfMark(correct: boolean) {
    if (resultSent) return
    setResultSent(true)
    setSelfMark(correct)
    onResult([correct])
  }

  function handlePartSelfMark(pi: number, correct: boolean) {
    if (resultSent) return
    const next = [...partSelfResults]
    next[pi] = correct
    setPartSelfResults(next)
    if (next.every((r) => r !== null)) {
      setResultSent(true)
      onResult(next as boolean[])
    }
  }

  const revealedAnswerText = question.answer || question.correctAnswer || question.correctAnswers?.[0] || ''

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
          {looksLikeHtml(question.question) ? (
            <p className="topic-html text-sm text-gray-800 font-medium whitespace-pre-line" style={{ lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: question.question }} />
          ) : (
            <p className="text-sm text-gray-800 font-medium whitespace-pre-line" style={{ lineHeight: 1.8 }}>
              {decodeEntities(question.question)}
            </p>
          )}
        </div>
      </div>

      <div className="ml-11">
        {parts.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {parts.map((part: QuestionPart, pi: number) => {
              // checkMode no longer drives grading — it's kept only to pick a short-input
              // vs long-working-space widget, matching how each question was originally authored.
              const longform = part.checkMode === 'self'
              const partAnswerText = part.answer || part.correctAnswer || part.correctAnswers?.[0] || ''
              return (
                <div key={pi}>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    {longform
                      ? t.topic_part_show_working_label.replace('{part}', part.label)
                      : t.topic_part_your_answer_label.replace('{part}', part.label)}
                  </label>
                  {longform ? (
                    <textarea
                      value={partInputs[pi] ?? ''}
                      onChange={(e) => {
                        const next = [...partInputs]
                        next[pi] = e.target.value
                        setPartInputs(next)
                      }}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 resize-none focus:outline-none focus:border-[#1e40af] transition-colors disabled:bg-gray-50 disabled:text-gray-500"
                      rows={3}
                      placeholder={t.topic_write_working_placeholder}
                      style={{ fontFamily: 'inherit' }}
                      disabled={revealed}
                    />
                  ) : (
                    <input
                      type="text"
                      value={partInputs[pi] ?? ''}
                      onChange={(e) => {
                        const next = [...partInputs]
                        next[pi] = e.target.value
                        setPartInputs(next)
                      }}
                      disabled={revealed}
                      placeholder={t.topic_type_answer_placeholder}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#1e40af] transition-colors disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  )}
                  {revealed && (
                    <div className="mt-3 rounded-xl px-4 py-4" style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac' }}>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#16a34a' }}>{t.topic_answer_label}</p>
                      <p className="text-sm whitespace-pre-line" style={{ color: '#14532d', lineHeight: 1.8 }}>
                        {decodeEntities(partAnswerText)}
                      </p>
                      {part.explanation && (
                        <p className="text-sm mt-2 whitespace-pre-line" style={{ color: '#14532d', lineHeight: 1.8 }}>
                          {decodeEntities(part.explanation)}
                        </p>
                      )}
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
              )
            })}
          </div>
        ) : (
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
              {question.checkMode === 'self' ? t.topic_show_your_working_label : t.topic_your_answer_label}
            </label>
            {question.checkMode === 'self' ? (
              <textarea
                value={singleInput}
                onChange={(e) => setSingleInput(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 resize-none focus:outline-none focus:border-[#1e40af] transition-colors disabled:bg-gray-50 disabled:text-gray-500"
                rows={4}
                placeholder={t.topic_write_working_placeholder}
                style={{ fontFamily: 'inherit' }}
                disabled={revealed}
              />
            ) : (
              <input
                type="text"
                value={singleInput}
                onChange={(e) => setSingleInput(e.target.value)}
                disabled={revealed}
                placeholder={t.topic_type_answer_placeholder}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#1e40af] transition-colors disabled:bg-gray-50 disabled:text-gray-500"
              />
            )}
            {revealed && (
              <div className="mt-3 rounded-xl px-4 py-4" style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac' }}>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#16a34a' }}>{t.topic_answer_label}</p>
                {looksLikeHtml(revealedAnswerText) ? (
                  <p className="topic-html text-sm" style={{ color: '#14532d', lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: revealedAnswerText }} />
                ) : (
                  <p className="text-sm whitespace-pre-line" style={{ color: '#14532d', lineHeight: 1.8 }}>{decodeEntities(revealedAnswerText)}</p>
                )}
                {question.explanation && (
                  <p className="text-sm mt-2 whitespace-pre-line" style={{ color: '#14532d', lineHeight: 1.8 }}>
                    {decodeEntities(question.explanation)}
                  </p>
                )}
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
  const [revealedBySet, setRevealedBySet] = useState<boolean[]>(() => sets.map(() => false))
  const [resetKeyBySet, setResetKeyBySet] = useState<number[]>(() => sets.map(() => 0))
  const t = useTranslations()
  const { user } = useAuth()
  const loggedSetsRef = useRef<Set<number>>(new Set())

  const current = sets[activeSet]
  const currentResults = resultsBySet[activeSet]
  const revealed = revealedBySet[activeSet]
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

  function handleReveal() {
    setRevealedBySet((prev) => {
      const next = [...prev]
      next[activeSet] = true
      return next
    })
  }

  function handleReset() {
    setResultsBySet((prev) => {
      const next = prev.map((arr) => [...arr])
      next[activeSet] = Array(current.questions.length).fill(null)
      return next
    })
    setRevealedBySet((prev) => {
      const next = [...prev]
      next[activeSet] = false
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
          {t.topic_reveal_instructions}
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
                revealed={revealed}
                onResult={(partResults) => handleResult(i, partResults)}
              />
            )
          })
          return elements
        })()}
      </div>

      {!revealed && (
        <div>
          <button
            onClick={handleReveal}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: '#1e40af' }}
          >
            {t.topic_reveal_answers}
          </button>
          <p className="text-xs text-gray-400 mt-2">{t.topic_reveal_all_prompt}</p>
        </div>
      )}

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
  const [revealed, setRevealed] = useState(false)
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
    setRevealed(false)
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
          {t.topic_reveal_instructions}
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {questions.map((q, i) => (
          <OpenQuestionCard
            key={`q-${i}-${resetKey}`}
            question={q}
            index={i}
            revealed={revealed}
            onResult={(partResults) => handleResult(i, partResults)}
          />
        ))}
      </div>
      {!revealed && (
        <div>
          <button
            onClick={() => setRevealed(true)}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: '#1e40af' }}
          >
            {t.topic_reveal_answers}
          </button>
          <p className="text-xs text-gray-400 mt-2">{t.topic_reveal_all_prompt}</p>
        </div>
      )}
      {allAnswered && (
        <ResultsSummary score={score} total={totalMarks} onReset={handleReset} customMessages={scoreMessages} />
      )}
    </div>
  )
}

// ─── Real study guide renderers ───────────────────────────────────────────────

function RealStudyGuide({ data, topicSlug, grade }: { data: TopicData; topicSlug: string; grade: number }) {
  const t = useTranslations()
  const { user } = useAuth()
  const [studied, setStudied] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!user) return
    const childIndex = Math.min(Math.max(user.activeChildIndex, 0), user.children.length - 1)
    let cancelled = false
    getTopicStudied({ uid: user.uid, childIndex, grade, topicSlug })
      .then(result => { if (!cancelled) setStudied(result) })
      .catch(err => console.error('[study-progress] read failed', err))
    return () => { cancelled = true }
  }, [user, grade, topicSlug])

  function handleToggle() {
    if (!user || saving) return
    const childIndex = Math.min(Math.max(user.activeChildIndex, 0), user.children.length - 1)
    const next = !studied
    setSaving(true)
    setStudied(next)
    setTopicStudied({ uid: user.uid, childIndex, grade, topicSlug, studied: next })
      .catch(err => { console.error('[study-progress] write failed', err); setStudied(!next) })
      .finally(() => setSaving(false))
  }

  const lang: Language = user ? getActiveChild(user).language : 'en'
  const gradeTopics = getTopics(String(grade), lang)
  const currentIndex = gradeTopics.findIndex(topic => topic.slug === topicSlug)
  const nextTopic = currentIndex >= 0 ? gradeTopics[currentIndex + 1] : undefined

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
              {looksLikeHtml(section.explanation) ? (
                <div
                  className="topic-html text-blue-900"
                  style={{ fontSize: '17px', lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{ __html: section.explanation }}
                />
              ) : (
                splitIntoParagraphs(decodeEntities(section.explanation)).map((para, pi) => (
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

          {section.diagramSvg && (
            <div style={{ marginTop: '16px' }}>
              <DiagramPlaceholderCard label={section.diagramPlaceholder ?? ''} svg={section.diagramSvg} />
            </div>
          )}
        </div>
      ))}

      {(user || nextTopic) && (
        <div className="flex flex-wrap items-center gap-3">
          {user && (
            <button
              onClick={handleToggle}
              disabled={saving}
              className="px-6 py-3 rounded-xl text-sm font-semibold transition-colors hover:opacity-90 disabled:opacity-60"
              style={
                studied
                  ? { backgroundColor: '#f0fdf4', color: '#16a34a', border: '1.5px solid #bbf7d0' }
                  : { backgroundColor: '#1e40af', color: '#ffffff' }
              }
            >
              {studied ? `✓ ${t.topic_studied_badge}` : t.topic_mark_as_studied}
            </button>
          )}
          {nextTopic && (
            <Link
              href={`/grade/${grade}/${nextTopic.slug}`}
              className="px-6 py-3 rounded-xl text-sm font-semibold transition-colors hover:opacity-90 inline-flex items-center gap-2"
              style={{ backgroundColor: '#ffffff', color: '#1e40af', border: '1.5px solid #bfdbfe' }}
            >
              {t.topic_next_topic_label.replace('{topic}', nextTopic.name)}
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      )}
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
  const [revealed, setRevealed] = useState(false)
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
    setRevealed(false)
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
          {t.topic_reveal_instructions}
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
              {(() => {
                const elements: ReactNode[] = []
                let lastSvg: string | undefined
                items.forEach(({ q, idx }) => {
                  if (q.diagramSvg && q.diagramSvg !== lastSvg) {
                    elements.push(
                      <DiagramPlaceholderCard
                        key={`section-${section.id}-diagram-${idx}-${resetKey}`}
                        label={t.topic_diagram_label}
                        svg={q.diagramSvg}
                      />
                    )
                  }
                  lastSvg = q.diagramSvg
                  elements.push(
                    <OpenQuestionCard
                      key={`q-${idx}-${resetKey}`}
                      question={q}
                      index={idx}
                      revealed={revealed}
                      onResult={r => handleResult(idx, r)}
                    />
                  )
                })
                return elements
              })()}
            </div>
          </div>
        )
      })}

      {!revealed && (
        <div>
          <button
            onClick={() => setRevealed(true)}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: '#1e40af' }}
          >
            {t.topic_reveal_answers}
          </button>
          <p className="text-xs text-gray-400 mt-2">{t.topic_reveal_all_prompt}</p>
        </div>
      )}

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

  if (data.practiceSets && data.practiceSets.length > 0) {
    return <SetPractice sets={data.practiceSets} topicSlug={topicSlug} grade={grade} />
  }

  if (hasSectionOpenQ) return <SectionOpenPractice data={data} topicSlug={topicSlug} grade={grade} />

  if (data.topicPractice && data.topicPractice.length > 0) {
    return <OpenPractice questions={data.topicPractice} scoreMessages={data.scoreMessages} topicSlug={topicSlug} grade={grade} />
  }

  return <FlatPracticeQuestions data={data} />
}

// ─── Flat multiple-choice fallback (no practice sets / open questions defined) ─

function FlatPracticeQuestions({ data }: { data: TopicData }) {
  const t = useTranslations()

  const flatItems: Array<{ q: PracticeQuestion; key: string; sectionId: string }> = []
  data.sections.forEach((section) => {
    ;(section.practiceQuestions ?? []).forEach((q, i) => {
      flatItems.push({ q, key: `${section.id}-${i}`, sectionId: section.id })
    })
  })
  const total = flatItems.length

  const [results, setResults] = useState<Record<string, boolean | null>>(() =>
    Object.fromEntries(flatItems.map((item) => [item.key, null]))
  )
  const [revealed, setRevealed] = useState(false)
  const [resetKey, setResetKey] = useState(0)

  function handleAnswer(key: string, correct: boolean) {
    setResults((prev) => ({ ...prev, [key]: correct }))
  }

  function handleReset() {
    setResults(Object.fromEntries(flatItems.map((item) => [item.key, null])))
    setRevealed(false)
    setResetKey((k) => k + 1)
  }

  const allAnswered = total > 0 && Object.values(results).every((r) => r !== null)
  const score = Object.values(results).filter(Boolean).length

  return (
    <div className="max-w-[720px]" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div>
        <h2 className="text-base font-bold text-[#0f1f3d] mb-1">{t.topic_practice_questions_heading}</h2>
        <p className="text-sm text-gray-500" style={{ lineHeight: 1.7 }}>
          {t.topic_reveal_instructions}
        </p>
      </div>

      {data.sections.map((section: Section) => {
        const items = flatItems.filter((item) => item.sectionId === section.id)
        if (items.length === 0) return null
        return (
          <div key={section.id}>
            <h2
              className="text-sm font-semibold text-[#0f1f3d] uppercase tracking-wide flex items-center gap-2"
              style={{ marginBottom: '16px' }}
            >
              <span aria-hidden="true">{section.icon}</span>
              {section.title}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {items.map(({ q, key }, i) => (
                <PracticeCard
                  key={`${key}-${resetKey}`}
                  question={q}
                  number={i + 1}
                  revealed={revealed}
                  onAnswer={(c) => handleAnswer(key, c)}
                />
              ))}
            </div>
          </div>
        )
      })}

      {!revealed && total > 0 && (
        <div>
          <button
            onClick={() => setRevealed(true)}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: '#1e40af' }}
          >
            {t.topic_reveal_answers}
          </button>
          <p className="text-xs text-gray-400 mt-2">{t.topic_reveal_all_prompt}</p>
        </div>
      )}

      {allAnswered && (
        <ResultsSummary score={score} total={total} onReset={handleReset} />
      )}
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
          <LoggedOutLocked onLoginClick={() => openModal('login')} />
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
          ? <RealStudyGuide data={studyGuideData} topicSlug={topicSlug} grade={Number(grade)} />
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
