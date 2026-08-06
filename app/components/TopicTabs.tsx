'use client'

import { useState, useEffect, useRef, type ReactNode } from 'react'
import Link from 'next/link'
import { useAuth, getActiveChild, type Language } from '@/app/providers'
import type { TopicData, Section, WorkedExample, OpenQuestion, QuestionPart, PracticeSet } from '@/src/data/grade4/en/numbers-operations'
import AIAssistant from '@/app/components/AIAssistant'
import ReportIssueButton from '@/app/components/ReportIssueButton'
import { useTranslations } from '@/src/i18n/useTranslations'
import { logActivityCompletion } from '@/src/lib/activity-log'
import { getTopicStudied, setTopicStudied } from '@/src/lib/study-progress'
import { getPracticeSetProgress, savePracticeSetProgress } from '@/src/lib/practice-set-progress'
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

function StudyGuide() {
  const t = useTranslations()
  return (
    <div className="flex items-center justify-center py-24">
      <p className="text-sm text-gray-500">{t.topic_content_coming_soon}</p>
    </div>
  )
}

// ─── Tab content: Practice ────────────────────────────────────────────────────

function Practice() {
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

// Mirrors the `isMC` check inside OpenQuestionCard — used by the parent
// practice components to know, per-question, whether "answered" should mean
// "picked an option" (trackable before reveal) or fall back to the old
// always-unblocked behaviour for free-text questions (whose input state
// isn't lifted to the parent).
function isMCQuestion(q: OpenQuestion): boolean {
  return !(q.parts && q.parts.length > 0) && Array.isArray(q.options) && q.options.length > 0 && typeof q.correctIndex === 'number'
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
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide shrink-0">{t.topic_answer_label}</span>
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
      <p className="text-sm font-medium mb-3" style={{ color: '#0f1f3d', lineHeight: 1.5 }}>{decodeEntities(label)}</p>
      <div
        className="topic-html"
        dangerouslySetInnerHTML={{ __html: svg }}
        style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}
      />
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
  onAnswered,
}: {
  question: OpenQuestion
  index: number
  revealed: boolean
  onResult: (partResults: boolean[]) => void
  // MC questions only score on reveal (see the auto-grading effect below),
  // so a "have they engaged with every question" gate can't wait for
  // onResult — it fires this the instant an option is picked instead.
  onAnswered?: () => void
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
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const t = useTranslations()

  const d = DIFFICULTY_STYLE[question.difficulty] ?? DIFFICULTY_STYLE['Medium']
  const parts = question.parts ?? []
  const isMC = !parts.length && Array.isArray(question.options) && question.options.length > 0 && typeof question.correctIndex === 'number'

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

  // MC questions grade themselves off the option the student picked the
  // instant the set is revealed — no self-mark step, since that's exactly
  // the honesty gap MC exists to close.
  useEffect(() => {
    if (!isMC || !revealed) return
    handleSelfMark(selectedOption === question.correctIndex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMC, revealed])

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
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    {longform
                      ? t.topic_part_show_working_label.replace('{part}', decodeEntities(part.label))
                      : t.topic_part_your_answer_label.replace('{part}', decodeEntities(part.label))}
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
        ) : isMC ? (
          <div>
            <div className="space-y-2">
              {question.options!.map((opt, oi) => {
                const isCorrect = oi === question.correctIndex
                const isSelected = oi === selectedOption
                let btnClass = 'w-full text-left text-sm px-4 py-3 rounded-xl border transition-all duration-150 ease-out active:scale-[0.98] active:duration-75 font-medium '
                if (!revealed) {
                  btnClass += isSelected
                    ? 'border-[#1e40af] bg-blue-50 text-[#1e40af]'
                    : 'border-gray-200 text-gray-700 hover:border-[#1e40af] hover:bg-blue-50 hover:text-[#1e40af]'
                } else if (isCorrect) {
                  btnClass += 'border-green-400 bg-green-50 text-green-800'
                } else if (isSelected) {
                  btnClass += 'border-red-300 bg-red-50 text-red-700'
                } else {
                  btnClass += 'border-gray-100 text-gray-500'
                }
                return (
                  <button
                    key={oi}
                    onClick={() => { if (!revealed) { setSelectedOption(oi); onAnswered?.() } }}
                    disabled={revealed}
                    className={btnClass}
                  >
                    <span className="inline-flex items-center gap-2.5">
                      <span className="shrink-0 w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-bold">
                        {revealed && isCorrect ? '✓' : revealed && isSelected ? '✗' : String.fromCharCode(65 + oi)}
                      </span>
                      {looksLikeHtml(opt) ? (
                        <span className="topic-html" dangerouslySetInnerHTML={{ __html: opt }} />
                      ) : (
                        decodeEntities(opt)
                      )}
                    </span>
                  </button>
                )
              })}
            </div>
            {revealed && question.explanation && (
              <div
                className="mt-3 rounded-xl px-4 py-4"
                style={
                  selectedOption === question.correctIndex
                    ? { backgroundColor: '#f0fdf4', border: '1px solid #86efac' }
                    : { backgroundColor: '#fef2f2', border: '1px solid #fca5a5' }
                }
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-2"
                  style={{ color: selectedOption === question.correctIndex ? '#16a34a' : '#dc2626' }}
                >
                  {selectedOption === question.correctIndex ? t.topic_marked_correct : t.topic_marked_incorrect}
                </p>
                {looksLikeHtml(question.explanation) ? (
                  <p className="topic-html text-sm" style={{ color: '#374151', lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: question.explanation }} />
                ) : (
                  <p className="text-sm whitespace-pre-line" style={{ color: '#374151', lineHeight: 1.8 }}>{decodeEntities(question.explanation)}</p>
                )}
              </div>
            )}
          </div>
        ) : (
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
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
            {score} <span className="text-base font-medium text-gray-500">/ {total}</span>
          </p>
          <p className="text-sm text-gray-600">{decodeEntities(message)}</p>
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

// Temporary rollout notice shown above every practice surface while
// questions are being converted from free-text to multiple choice —
// remove once the conversion is complete for all grades.
function PracticeFormatNotice() {
  const t = useTranslations()
  return (
    <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0 text-[#1e40af] mt-0.5">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
      <p className="text-sm text-[#1e3a6d]" style={{ lineHeight: 1.6 }}>{t.topic_practice_format_notice}</p>
    </div>
  )
}

// ─── Set-based practice (multiple named sets, e.g. 4 sets of 25) ──────────────
//
// Sets must be completed in order (1 -> 2 -> 3) and, once submitted, a set is
// locked for good — no re-answering, no per-set "Try again". Otherwise a
// student can just keep re-taking Set 1 until they've memorised the answers,
// which isn't a real signal of understanding. Only once every set in the
// cycle is done do they get a combined average + improvement-vs-last-time,
// and a single "Retry all sets" that starts the whole cycle over.

function LockedSetCard({ score, total }: { score: number; total: number }) {
  const t = useTranslations()
  const pct = total > 0 ? score / total : 0
  const barColor = pct === 1 ? '#16a34a' : pct >= 0.6 ? '#1e40af' : '#dc2626'
  return (
    <div className="bg-white border border-gray-200 rounded-2xl px-6 py-6 shadow-sm">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <p className="text-2xl font-bold text-[#0f1f3d] mb-1">
            {score} <span className="text-base font-medium text-gray-500">/ {total}</span>
          </p>
          <p className="text-sm text-gray-600">{t.topic_set_locked_note}</p>
        </div>
        <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-green-50 text-green-700 border border-green-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
          </svg>
          {t.topic_set_completed_badge}
        </span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-gray-100 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${pct * 100}%`, backgroundColor: barColor }} />
      </div>
    </div>
  )
}

function CycleCompleteCard({
  average,
  previousAverage,
  onRetry,
}: {
  average: number
  previousAverage: number | null
  onRetry: () => void
}) {
  const t = useTranslations()
  const diff = previousAverage !== null ? average - previousAverage : null

  return (
    <div className="bg-white border border-gray-200 rounded-2xl px-6 py-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
            {t.topic_cycle_complete_heading}
          </p>
          <p className="text-2xl font-bold text-[#0f1f3d] mb-1">
            {average}% <span className="text-base font-medium text-gray-500">{t.topic_cycle_average_label}</span>
          </p>
          {diff === null ? (
            <p className="text-sm text-gray-500">{t.topic_cycle_first_attempt}</p>
          ) : diff > 0 ? (
            <p className="text-sm font-semibold text-green-600">{t.topic_cycle_improved.replace('{diff}', String(diff))}</p>
          ) : diff < 0 ? (
            <p className="text-sm font-semibold text-red-600">{t.topic_cycle_declined.replace('{diff}', String(Math.abs(diff)))}</p>
          ) : (
            <p className="text-sm text-gray-500">{t.topic_cycle_no_change}</p>
          )}
        </div>
        <button
          onClick={onRetry}
          className="shrink-0 px-4 py-2.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-colors"
          style={{ backgroundColor: '#1e40af' }}
        >
          {t.topic_retry_all_sets}
        </button>
      </div>
    </div>
  )
}

function SetPractice({ sets, topicSlug, grade }: { sets: PracticeSet[]; topicSlug: string; grade: number }) {
  const [activeSet, setActiveSet] = useState(0)
  const [resultsBySet, setResultsBySet] = useState<(boolean[] | null)[][]>(() =>
    sets.map((s) => Array(s.questions.length).fill(null))
  )
  const [revealedBySet, setRevealedBySet] = useState<boolean[]>(() => sets.map(() => false))
  const [resetKeyBySet, setResetKeyBySet] = useState<number[]>(() => sets.map(() => 0))
  // MC questions only land in `resultsBySet` once revealed (see the
  // auto-grading effect in OpenQuestionCard), so gating "Reveal Answers" on
  // that would be circular — it'd never unlock. This tracks "has the
  // student picked/typed something" instead, which is available pre-reveal.
  // Non-MC questions default to true (their input state isn't lifted here),
  // preserving the original always-enabled behaviour for free-text sets.
  const [answeredBySet, setAnsweredBySet] = useState<boolean[][]>(() =>
    sets.map((s) => s.questions.map((q) => !isMCQuestion(q)))
  )
  // Sequential lock state, persisted per child+topic so it survives a reload
  // or a return weeks later — see the comment above this component.
  const [setDone, setSetDone] = useState<boolean[]>(() => sets.map(() => false))
  const [setScore, setSetScore] = useState<number[]>(() => sets.map(() => 0))
  const [lastCycleAverage, setLastCycleAverage] = useState<number | null>(null)
  const [progressLoaded, setProgressLoaded] = useState(false)

  const t = useTranslations()
  const { user } = useAuth()
  const loggedSetsRef = useRef<Set<number>>(new Set())
  const childIndex = user ? Math.min(Math.max(user.activeChildIndex, 0), user.children.length - 1) : 0

  const totalsBySet = sets.map((s) =>
    s.questions.reduce((sum, q) => sum + (q.parts && q.parts.length > 0 ? q.parts.length : 1), 0)
  )

  useEffect(() => {
    let cancelled = false
    if (!user) {
      setProgressLoaded(true)
      return
    }
    getPracticeSetProgress({ uid: user.uid, childIndex, grade, topicSlug }).then((progress) => {
      if (cancelled) return
      if (progress && progress.sets.length === sets.length) {
        setSetDone(progress.sets.map((s) => s.done))
        setSetScore(progress.sets.map((s) => s.score))
        setLastCycleAverage(progress.lastCycleAverage)
        const firstIncomplete = progress.sets.findIndex((s) => !s.done)
        setActiveSet(firstIncomplete === -1 ? 0 : firstIncomplete)
        setRevealedBySet(progress.sets.map((s) => s.done))
      }
      setProgressLoaded(true)
    })
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.uid, childIndex, grade, topicSlug, sets.length])

  const current = sets[activeSet]
  const currentResults = resultsBySet[activeSet]
  const currentAnswered = answeredBySet[activeSet]
  const revealed = revealedBySet[activeSet]
  const totalMarks = totalsBySet[activeSet]

  function handleResult(qIndex: number, partResults: boolean[]) {
    setResultsBySet((prev) => {
      const next = prev.map((arr) => [...arr])
      next[activeSet][qIndex] = partResults
      return next
    })
  }

  function handleAnswered(qIndex: number) {
    setAnsweredBySet((prev) => {
      const next = prev.map((arr) => [...arr])
      next[activeSet][qIndex] = true
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

  const allAnswered = currentResults.every((r) => r !== null)
  const score = currentResults.reduce((sum, r) => sum + (r ? r.filter(Boolean).length : 0), 0)
  const hasLiveDetail = revealed && allAnswered
  const unlockedIndex = setDone.every(Boolean) ? -1 : setDone.findIndex((d) => !d)

  // The moment the active (unlocked) set is fully answered and revealed,
  // lock it in for good: record its score, persist it, and move on to the
  // next set in the sequence.
  useEffect(() => {
    if (!progressLoaded || !allAnswered || setDone[activeSet] || loggedSetsRef.current.has(activeSet)) return
    loggedSetsRef.current.add(activeSet)

    if (user) {
      logActivityCompletion({
        uid: user.uid,
        childIndex,
        grade,
        topicSlug,
        activityType: 'practiceSet',
        setName: current.name ?? null,
        score,
        total: totalMarks,
      })
    }

    const nextDone = setDone.map((d, i) => (i === activeSet ? true : d))
    const nextScores = setScore.map((s, i) => (i === activeSet ? score : s))
    setSetDone(nextDone)
    setSetScore(nextScores)

    if (user) {
      savePracticeSetProgress({
        uid: user.uid,
        childIndex,
        grade,
        topicSlug,
        sets: nextDone.map((done, i) => ({ done, score: nextScores[i] })),
        lastCycleAverage,
      }).catch((err) => console.error('[practice-set-progress] save failed', err))
    }

    if (activeSet + 1 < sets.length) {
      setActiveSet(activeSet + 1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressLoaded, allAnswered, activeSet, score, totalMarks, user, grade, topicSlug, current.name])

  function handleRetryAll() {
    const totalScore = setScore.reduce((sum, s) => sum + s, 0)
    const totalMarksAll = totalsBySet.reduce((sum, t) => sum + t, 0)
    const average = totalMarksAll > 0 ? Math.round((totalScore / totalMarksAll) * 100) : 0

    setResultsBySet(sets.map((s) => Array(s.questions.length).fill(null)))
    setRevealedBySet(sets.map(() => false))
    setAnsweredBySet(sets.map((s) => s.questions.map((q) => !isMCQuestion(q))))
    setResetKeyBySet((prev) => prev.map((k) => k + 1))
    setSetDone(sets.map(() => false))
    setSetScore(sets.map(() => 0))
    setLastCycleAverage(average)
    setActiveSet(0)
    loggedSetsRef.current.clear()

    if (user) {
      savePracticeSetProgress({
        uid: user.uid,
        childIndex,
        grade,
        topicSlug,
        sets: sets.map(() => ({ done: false, score: 0 })),
        lastCycleAverage: average,
      }).catch((err) => console.error('[practice-set-progress] save failed', err))
    }
  }

  const cycleAverage = (() => {
    if (unlockedIndex !== -1) return null
    const totalScore = setScore.reduce((sum, s) => sum + s, 0)
    const totalMarksAll = totalsBySet.reduce((sum, t) => sum + t, 0)
    return totalMarksAll > 0 ? Math.round((totalScore / totalMarksAll) * 100) : 0
  })()

  return (
    <div className="max-w-[720px]" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h2 className="text-base font-bold text-[#0f1f3d] mb-1">{t.topic_practice_questions_heading}</h2>
        <p className="text-sm text-gray-500" style={{ lineHeight: 1.7 }}>
          {t.topic_set_sequence_instructions}
        </p>
      </div>

      <PracticeFormatNotice />

      {!progressLoaded ? (
        <p className="text-sm text-gray-400">{t.topic_loading_progress}</p>
      ) : (
        <>
          {/* Set selector */}
          <div className="flex flex-wrap gap-2">
            {sets.map((set, i) => {
              const isDone = setDone[i]
              const isUnlocked = unlockedIndex === -1 || i <= unlockedIndex
              const label = set.name ? decodeEntities(set.name) : t.topic_set_label.replace('{number}', String(i + 1))
              return (
                <button
                  key={i}
                  onClick={() => {
                    if (isUnlocked) setActiveSet(i)
                  }}
                  disabled={!isUnlocked}
                  title={!isUnlocked ? t.topic_set_locked_tab : undefined}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold border transition-colors flex items-center gap-2 ${
                    !isUnlocked
                      ? 'border-gray-100 text-gray-300 cursor-not-allowed'
                      : activeSet === i
                        ? 'border-[#1e40af] bg-blue-50 text-[#1e40af]'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {!isUnlocked && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                      <path
                        fillRule="evenodd"
                        d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3A5.25 5.25 0 0 0 12 1.5Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {label}
                  {isDone && (
                    <span
                      className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                        setScore[i] === totalsBySet[i] ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {t.topic_set_score_badge.replace('{score}', String(setScore[i])).replace('{total}', String(totalsBySet[i]))}
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {setDone[activeSet] && !hasLiveDetail ? (
            <LockedSetCard score={setScore[activeSet]} total={totalsBySet[activeSet]} />
          ) : (
            <>
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
                        onAnswered={() => handleAnswered(i)}
                      />
                    )
                  })
                  return elements
                })()}
              </div>

              {!revealed ? (
                <div>
                  <button
                    onClick={handleReveal}
                    disabled={!currentAnswered.every(Boolean)}
                    className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:opacity-40"
                    style={{ backgroundColor: '#1e40af' }}
                  >
                    {t.topic_reveal_answers}
                  </button>
                  <p className="text-xs text-gray-500 mt-2">{t.topic_reveal_all_prompt}</p>
                </div>
              ) : setDone[activeSet] ? (
                <p className="text-xs text-gray-500">{t.topic_set_locked_note}</p>
              ) : null}
            </>
          )}

          {cycleAverage !== null && (
            <CycleCompleteCard average={cycleAverage} previousAverage={lastCycleAverage} onRetry={handleRetryAll} />
          )}
        </>
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
  // See the matching comment in SetPractice — MC results only land in
  // `results` on reveal, so the reveal gate needs its own pre-reveal signal.
  const [answered, setAnswered] = useState<boolean[]>(() =>
    questions.map((q) => !isMCQuestion(q))
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

  function handleAnswered(index: number) {
    setAnswered((prev) => {
      const next = [...prev]
      next[index] = true
      return next
    })
  }

  function handleReset() {
    setResults(Array(questions.length).fill(null))
    setAnswered(questions.map((q) => !isMCQuestion(q)))
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

      <PracticeFormatNotice />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {questions.map((q, i) => (
          <OpenQuestionCard
            key={`q-${i}-${resetKey}`}
            question={q}
            index={i}
            revealed={revealed}
            onResult={(partResults) => handleResult(i, partResults)}
            onAnswered={() => handleAnswered(i)}
          />
        ))}
      </div>
      {!revealed && (
        <div>
          <button
            onClick={() => setRevealed(true)}
            disabled={!answered.every(Boolean)}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:opacity-40"
            style={{ backgroundColor: '#1e40af' }}
          >
            {t.topic_reveal_answers}
          </button>
          <p className="text-xs text-gray-500 mt-2">{t.topic_reveal_all_prompt}</p>
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
              {i + 1}. {decodeEntities(section.title)}
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
  // See the matching comment in SetPractice — MC results only land in
  // `results` on reveal, so the reveal gate needs its own pre-reveal signal.
  const [answered, setAnswered] = useState<boolean[]>(() =>
    flatItems.map(({ q }) => !isMCQuestion(q))
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

  function handleAnswered(idx: number) {
    setAnswered(prev => {
      const next = [...prev]
      next[idx] = true
      return next
    })
  }

  const { user } = useAuth()
  const loggedRef = useRef(false)

  function handleReset() {
    setResults(Array(flatItems.length).fill(null))
    setAnswered(flatItems.map(({ q }) => !isMCQuestion(q)))
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

      <PracticeFormatNotice />

      {sectionsWithQ.map(section => {
        const items = flatItems.filter(item => item.sectionId === section.id)
        return (
          <div key={section.id}>
            <h3
              className="text-sm font-semibold text-[#0f1f3d] uppercase tracking-wide flex items-center gap-2"
              style={{ marginBottom: '16px' }}
            >
              <span aria-hidden="true">{section.icon}</span>
              {decodeEntities(section.title)}
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
                      onAnswered={() => handleAnswered(idx)}
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
            disabled={!answered.every(Boolean)}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:opacity-40"
            style={{ backgroundColor: '#1e40af' }}
          >
            {t.topic_reveal_answers}
          </button>
          <p className="text-xs text-gray-500 mt-2">{t.topic_reveal_all_prompt}</p>
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

  // Unreachable for any real topic — every one of the 339 content files
  // defines practiceSets, section-level openQuestions, or topicPractice, so
  // this is just a defensive floor in case a future topic is authored
  // without any of the three.
  return null
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function TopicTabs({ topicName, topicSlug, grade, isLocked, studyGuideData }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('Study Guide')
  const [mounted, setMounted] = useState(false)
  const { user, openModal } = useAuth()
  const t = useTranslations()

  // Intentional hydration-safe mount flag: server and first client render must
  // match, so client-only state (auth, locked content) is applied post-mount.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

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
          : <StudyGuide />
      )}
      {activeTab === 'Practice' && (
        studyGuideData
          ? <RealPractice data={studyGuideData} topicSlug={topicSlug} grade={Number(grade)} />
          : <Practice />
      )}
      {activeTab === 'Answers' && !studyGuideData && <Answers />}

      {activeTab === 'Study Guide' && <AIAssistant grade={grade} />}
      {user && <ReportIssueButton grade={grade} topicSlug={topicSlug} topicName={topicName} />}

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
