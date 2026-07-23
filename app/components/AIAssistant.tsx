'use client'

import { useState, useEffect, useRef } from 'react'
import { useAuth, getActiveTier } from '@/app/providers'
import { auth } from '@/src/lib/firebase'

// ─── Types ────────────────────────────────────────────────────────────────────

type Plan = 'free' | 'pro' | 'max'

type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
  apiContent?: string
  image?: string
}

type AIUsage = {
  month: string
  count: number
  captures: number
}

// ─── Constants ────────────────────────────────────────────────────────────────

const PLAN_LIMITS: Record<Plan, number> = { free: 5, pro: 20, max: 100 }
// Same monthly allowances as CAPTURE_LIMITS in app/api/ai-assistant/route.ts
// — the server is the authority, this is optimistic UI only.
const CAPTURE_LIMITS: Record<Plan, number> = { free: 2, pro: 10, max: 30 }
const CAPTURE_MAX_DIMENSION = 1400
const CAPTURE_QUALITY = 0.8

// ─── localStorage helpers ─────────────────────────────────────────────────────

function getCurrentMonth(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

function readUsage(): AIUsage {
  try {
    const stored = localStorage.getItem('mathly_ai_usage')
    if (stored) {
      const parsed = JSON.parse(stored) as Partial<AIUsage>
      // captures may be missing on usage written before this feature shipped.
      if (parsed.month === getCurrentMonth()) {
        return { month: parsed.month, count: parsed.count ?? 0, captures: parsed.captures ?? 0 }
      }
    }
  } catch {}
  return { month: getCurrentMonth(), count: 0, captures: 0 }
}

function writeUsage(usage: AIUsage): void {
  localStorage.setItem('mathly_ai_usage', JSON.stringify(usage))
}

// Downscales a captured canvas so its longest edge is at most maxEdge px,
// then exports it as a JPEG data URL — same "shrink before it ever leaves
// the browser" approach as TestAnalysisPanel's fileToCompressedDataUrl.
function canvasToScaledDataUrl(canvas: HTMLCanvasElement, maxEdge: number, quality: number): string {
  const scale = Math.min(1, maxEdge / Math.max(canvas.width, canvas.height))
  if (scale === 1) return canvas.toDataURL('image/jpeg', quality)
  const scaled = document.createElement('canvas')
  scaled.width = Math.max(1, Math.round(canvas.width * scale))
  scaled.height = Math.max(1, Math.round(canvas.height * scale))
  const ctx = scaled.getContext('2d')
  if (!ctx) return canvas.toDataURL('image/jpeg', quality)
  ctx.drawImage(canvas, 0, 0, scaled.width, scaled.height)
  return scaled.toDataURL('image/jpeg', quality)
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function SparkleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M12 2.25l2.13 6.39h6.74l-5.45 3.97 2.08 6.39L12 15.02l-5.5 3.98 2.08-6.39L3.13 8.64H9.87L12 2.25z" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5a2 2 0 012-2h1.4l1.17-1.75A2 2 0 019.24 5h5.52a2 2 0 011.67.9L17.6 7.5H19a2 2 0 012 2V18a2 2 0 01-2 2H5a2 2 0 01-2-2V9.5z" />
      <circle cx="12" cy="13.5" r="3.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SmallSpinnerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ animation: 'ai-spin 0.8s linear infinite' }}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

// ─── Typing dots ──────────────────────────────────────────────────────────────

function TypingDots() {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '12px 16px',
        backgroundColor: '#f3f4f6',
        borderRadius: '18px 18px 18px 4px',
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: '#9ca3af',
            animation: 'ai-dot 1.3s ease-in-out infinite',
            animationDelay: `${i * 0.18}s`,
          }}
        />
      ))}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function AIAssistant({ grade }: { grade: string }) {
  const { user, openModal } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedText, setSelectedText] = useState('')
  const [pendingContext, setPendingContext] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [streamingContent, setStreamingContent] = useState<string | null>(null)
  const [usage, setUsage] = useState<AIUsage>({ month: getCurrentMonth(), count: 0, captures: 0 })
  const [mounted, setMounted] = useState(false)
  const [pendingCapture, setPendingCapture] = useState<string | null>(null)
  const [isCapturing, setIsCapturing] = useState(false)

  // Usage limit is tied to the active child's own plan tier, not the account
  // as a whole — a family can mix plans, so the assistant's allowance
  // follows whichever profile is currently active.
  const plan: Plan = user ? getActiveTier(user) : 'free'

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  // The chat dialog's own root — passed to html2canvas's ignoreElements so a
  // capture of the page doesn't photograph the assistant's own panel.
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setUsage(readUsage())
    setMounted(true)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, streamingContent])

  useEffect(() => {
    function handleSelectionChange() {
      const text = window.getSelection()?.toString().trim() ?? ''
      if (text.length > 5) {
        setSelectedText(text)
      } else if (!isOpen) {
        setSelectedText('')
      }
    }
    document.addEventListener('selectionchange', handleSelectionChange)
    return () => document.removeEventListener('selectionchange', handleSelectionChange)
  }, [isOpen])

  function openChat() {
    const ctx = window.getSelection()?.toString().trim() ?? selectedText
    setPendingContext(ctx.length > 5 ? ctx : '')
    setIsOpen(true)
    setTimeout(() => inputRef.current?.focus(), 120)
  }

  function closeChat() {
    setIsOpen(false)
  }

  const limit = PLAN_LIMITS[plan]
  const isLimitReached = usage.count >= limit
  const captureLimit = CAPTURE_LIMITS[plan]
  const isCaptureLimitReached = usage.captures >= captureLimit

  // Captures the current page (minus the assistant's own panel) as a
  // downscaled JPEG data URL and holds it as a pending attachment — it's
  // sent along with whatever the student types next, not immediately.
  async function handleCapture() {
    if (isCapturing || isCaptureLimitReached || !user || isLoading) return
    setIsCapturing(true)
    try {
      const html2canvas = (await import('html2canvas')).default
      const target = (document.querySelector('main') ?? document.body) as HTMLElement
      const canvas = await html2canvas(target, {
        // Cleaner than toggling visibility around the call: just skip the
        // assistant's own dialog so it doesn't photograph itself.
        ignoreElements: (el) => el === dialogRef.current,
      })
      setPendingCapture(canvasToScaledDataUrl(canvas, CAPTURE_MAX_DIMENSION, CAPTURE_QUALITY))
    } catch (err) {
      console.error('[AIAssistant] screen capture failed', err)
    } finally {
      setIsCapturing(false)
    }
  }

  async function sendMessage() {
    const text = input.trim()
    if (!text || isLoading || isLimitReached || !user) return

    // The chat input is hidden whenever !user (see the input area below), so
    // this is a defensive check against auth.currentUser being momentarily
    // out of sync with the useAuth() user object rather than an expected path.
    const fbUser = auth.currentUser
    if (!fbUser) return

    const isFirst = messages.length === 0 && pendingContext
    const apiContent = isFirst
      ? `From a study guide: "${pendingContext}"\n\nStudent question: "${text}"`
      : text

    // Captured once so the request and the optimistic message agree on what
    // was attached, even though pendingCapture is cleared right after.
    const capturedImage = pendingCapture

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      apiContent,
      image: capturedImage ?? undefined,
    }

    const historyForApi = messages.map((m) => ({
      role: m.role,
      content: m.apiContent ?? m.content,
    }))
    const apiMessages = [...historyForApi, { role: 'user' as const, content: apiContent }]

    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setPendingContext('')
    setPendingCapture(null)
    setIsLoading(true)
    setStreamingContent('')

    try {
      const idToken = await fbUser.getIdToken()
      const res = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken, messages: apiMessages, image: capturedImage ?? undefined }),
      })

      if (res.status === 401) {
        setMessages((prev) => [
          ...prev,
          { id: (Date.now() + 1).toString(), role: 'assistant', content: 'Your session has expired — please log in again.' },
        ])
        return
      }

      if (res.status === 429) {
        // The server is the authority on the limit — mirror it into whichever
        // count already drives the relevant limit-reached UI, rather than
        // showing a separate message. Captures and questions are distinct
        // limits, so tell the two 429s apart by the response body.
        const message = await res.text().catch(() => '')
        if (message.includes('captures')) {
          const captureLimitReachedUsage = { ...usage, month: getCurrentMonth(), captures: captureLimit }
          setUsage(captureLimitReachedUsage)
          writeUsage(captureLimitReachedUsage)
        } else {
          const limitReachedUsage = { ...usage, month: getCurrentMonth(), count: limit }
          setUsage(limitReachedUsage)
          writeUsage(limitReachedUsage)
        }
        return
      }

      if (!res.ok || !res.body) throw new Error('Request failed')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        accumulated += decoder.decode(value, { stream: true })
        setStreamingContent(accumulated)
      }

      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: 'assistant', content: accumulated },
      ])

      // Only counted once Claude actually answered — incrementing before the
      // fetch (as this used to) would burn a question (or capture) on a
      // failed request.
      const newUsage = {
        month: getCurrentMonth(),
        count: usage.count + 1,
        captures: usage.captures + (capturedImage ? 1 : 0),
      }
      setUsage(newUsage)
      writeUsage(newUsage)
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Sorry, something went wrong. Please try again.',
        },
      ])
    } finally {
      setIsLoading(false)
      setStreamingContent(null)
    }
  }

  const hasSelection = selectedText.length > 5

  return (
    <>
      {/* ── Keyframe styles ─────────────────────────────────────────────────── */}
      <style>{`
        @keyframes ai-slide-up {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes ai-dot {
          0%, 60%, 100% { transform: scale(0.75); opacity: 0.4; }
          30%            { transform: scale(1);    opacity: 1;   }
        }
        @keyframes ai-pulse {
          0%   { box-shadow: 0 4px 20px rgba(30,64,175,0.35), 0 0 0 0   rgba(30,64,175,0.45); }
          70%  { box-shadow: 0 4px 20px rgba(30,64,175,0.35), 0 0 0 10px rgba(30,64,175,0);   }
          100% { box-shadow: 0 4px 20px rgba(30,64,175,0.35), 0 0 0 0   rgba(30,64,175,0);   }
        }
        @keyframes ai-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* ── Floating button ─────────────────────────────────────────────────── */}
      {!isOpen && (
        <button
          onClick={openChat}
          aria-label={hasSelection ? 'Explain selected text with AI' : 'Ask AI a maths question'}
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            zIndex: 60,
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            backgroundColor: '#1e40af',
            color: '#fff',
            border: 'none',
            borderRadius: '9999px',
            padding: '13px 20px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(30,64,175,0.35)',
            animation: hasSelection ? 'ai-pulse 1.6s ease-out infinite' : undefined,
            transition: 'background-color 0.15s',
            fontFamily: 'inherit',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1d3a9e' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1e40af' }}
        >
          <SparkleIcon size={15} />
          {hasSelection ? 'Explain this' : 'Ask AI'}
        </button>
      )}

      {/* ── Chat box ────────────────────────────────────────────────────────── */}
      {isOpen && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-label="Mathly AI Assistant"
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            zIndex: 60,
            width: '380px',
            height: '480px',
            backgroundColor: '#fff',
            borderRadius: '16px',
            boxShadow: '0 8px 48px rgba(0,0,0,0.16), 0 2px 12px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'ai-slide-up 0.2s ease-out',
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: '#1e40af',
              color: '#fff',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <SparkleIcon size={15} />
              <span style={{ fontWeight: 600, fontSize: '14px', letterSpacing: '-0.01em' }}>
                Mathly AI Assistant
              </span>
            </div>
            <button
              onClick={closeChat}
              aria-label="Close chat"
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.8)',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                lineHeight: 1,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#fff' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.8)' }}
            >
              <CloseIcon />
            </button>
          </div>

          {/* Messages area */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {/* Selected text context block */}
            {pendingContext && (
              <div
                style={{
                  backgroundColor: '#dbeafe',
                  border: '1px solid #bfdbfe',
                  borderRadius: '12px',
                  padding: '12px 14px',
                  fontSize: '13px',
                }}
              >
                <p
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.07em',
                    color: '#3b82f6',
                    marginBottom: '6px',
                  }}
                >
                  Selected text
                </p>
                <p
                  style={{
                    color: '#1e3a8a',
                    lineHeight: 1.55,
                    fontStyle: 'italic',
                    marginBottom: '8px',
                  }}
                >
                  &ldquo;{pendingContext.length > 200 ? pendingContext.slice(0, 200) + '…' : pendingContext}&rdquo;
                </p>
                <p style={{ color: '#1e40af', fontWeight: 600, fontSize: '13px' }}>
                  How can I explain this to you?
                </p>
              </div>
            )}

            {/* Empty state */}
            {!pendingContext && messages.length === 0 && streamingContent === null && (
              <div
                style={{
                  color: '#6b7280',
                  fontSize: '14px',
                  lineHeight: 1.65,
                  marginTop: '4px',
                }}
              >
                Hi! Select any text on the page and I can explain it, or just ask me a maths question.
              </div>
            )}

            {/* Conversation messages */}
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '82%',
                    padding: '10px 14px',
                    borderRadius:
                      msg.role === 'user'
                        ? '18px 18px 4px 18px'
                        : '18px 18px 18px 4px',
                    backgroundColor: msg.role === 'user' ? '#dbeafe' : '#f3f4f6',
                    color: msg.role === 'user' ? '#1e3a8a' : '#111827',
                    fontSize: '14px',
                    lineHeight: 1.65,
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                >
                  {msg.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={msg.image}
                      alt="Attached screen capture"
                      style={{
                        display: 'block',
                        width: '100%',
                        maxWidth: '180px',
                        borderRadius: '10px',
                        marginBottom: '6px',
                        border: '1px solid rgba(0,0,0,0.08)',
                      }}
                    />
                  )}
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Streaming / typing state */}
            {streamingContent !== null && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                {streamingContent === '' ? (
                  <TypingDots />
                ) : (
                  <div
                    style={{
                      maxWidth: '82%',
                      padding: '10px 14px',
                      borderRadius: '18px 18px 18px 4px',
                      backgroundColor: '#f3f4f6',
                      color: '#111827',
                      fontSize: '14px',
                      lineHeight: 1.65,
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                    }}
                  >
                    {streamingContent}
                  </div>
                )}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Usage indicator — meaningless for a signed-out visitor, who has no
              server-side count yet, so it's gated on user like the input area below. */}
          {mounted && user && (
            <div
              style={{
                padding: '5px 16px',
                borderTop: '1px solid #f3f4f6',
                fontSize: '11px',
                color: isLimitReached ? '#dc2626' : '#9ca3af',
                lineHeight: 1.4,
                flexShrink: 0,
              }}
            >
              {isLimitReached ? (
                <>
                  You have used all your AI questions for this month.{' '}
                  {plan === 'free' && (
                    <a href="/pricing" style={{ color: '#1e40af', fontWeight: 600 }}>
                      Upgrade to Pro for 20 questions per month
                    </a>
                  )}
                </>
              ) : (
                `${usage.count}/${limit} question${limit === 1 ? '' : 's'} · ${usage.captures}/${captureLimit} capture${captureLimit === 1 ? '' : 's'} this month`
              )}
            </div>
          )}

          {/* Input area */}
          <div
            style={{
              padding: '10px 12px 12px',
              borderTop: '1px solid #e5e7eb',
              flexShrink: 0,
            }}
          >
            {!user ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '6px 0' }}>
                <p style={{ fontSize: '13px', color: '#6b7280', textAlign: 'center', margin: 0 }}>
                  Log in to ask the AI a question.
                </p>
                <button
                  onClick={() => openModal('login')}
                  style={{
                    backgroundColor: '#1e40af',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '8px 20px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  Log In
                </button>
              </div>
            ) : isLimitReached ? (
              <p
                style={{
                  fontSize: '13px',
                  color: '#6b7280',
                  textAlign: 'center',
                  padding: '6px 0',
                }}
              >
                Upgrade your plan for more questions.
              </p>
            ) : (
              <>
                {pendingCapture && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <div style={{ position: 'relative', flexShrink: 0 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={pendingCapture}
                        alt="Screen capture preview"
                        style={{ width: '44px', height: '44px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #e5e7eb', display: 'block' }}
                      />
                      <button
                        onClick={() => setPendingCapture(null)}
                        aria-label="Remove screen capture"
                        style={{
                          position: 'absolute',
                          top: '-6px',
                          right: '-6px',
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          backgroundColor: '#1e40af',
                          color: '#fff',
                          border: '2px solid #fff',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: 0,
                          lineHeight: 1,
                          fontSize: '11px',
                          fontWeight: 700,
                        }}
                      >
                        ×
                      </button>
                    </div>
                    <span style={{ fontSize: '12px', color: '#6b7280' }}>
                      Screen capture attached — sent with your next message
                    </span>
                  </div>
                )}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
                  <button
                    onClick={handleCapture}
                    disabled={isCapturing || isCaptureLimitReached || isLoading}
                    aria-label="Capture this page"
                    title={
                      isCaptureLimitReached
                        ? `You've used all ${captureLimit} of your screen captures for this month`
                        : 'Attach a screenshot of this page'
                    }
                    style={{
                      backgroundColor: '#fff',
                      color: isCapturing || isCaptureLimitReached || isLoading ? '#d1d5db' : '#1e40af',
                      border: '1.5px solid ' + (isCapturing || isCaptureLimitReached || isLoading ? '#e5e7eb' : '#bfdbfe'),
                      borderRadius: '12px',
                      padding: '9px 12px',
                      cursor: isCapturing || isCaptureLimitReached || isLoading ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'border-color 0.15s, color 0.15s',
                    }}
                  >
                    {isCapturing ? <SmallSpinnerIcon /> : <CameraIcon />}
                  </button>
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        sendMessage()
                      }
                    }}
                    placeholder="Ask a question…"
                    rows={1}
                    disabled={isLoading}
                    style={{
                      flex: 1,
                      border: '1.5px solid #e5e7eb',
                      borderRadius: '12px',
                      padding: '9px 13px',
                      fontSize: '14px',
                      resize: 'none',
                      outline: 'none',
                      fontFamily: 'inherit',
                      lineHeight: 1.5,
                      maxHeight: '80px',
                      overflowY: 'auto',
                      color: '#111827',
                      transition: 'border-color 0.15s',
                    }}
                    onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = '#1e40af' }}
                    onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = '#e5e7eb' }}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!input.trim() || isLoading}
                    aria-label="Send message"
                    style={{
                      backgroundColor: !input.trim() || isLoading ? '#e5e7eb' : '#1e40af',
                      color: !input.trim() || isLoading ? '#9ca3af' : '#fff',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '10px 13px',
                      cursor: !input.trim() || isLoading ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'background-color 0.15s',
                      fontFamily: 'inherit',
                    }}
                  >
                    <SendIcon />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
