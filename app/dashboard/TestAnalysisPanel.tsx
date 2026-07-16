'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { collection, addDoc, getDocs, getDoc, doc, query, orderBy, serverTimestamp, Timestamp } from 'firebase/firestore'
import { db, auth } from '@/src/lib/firebase'
import { getActiveTier, type User } from '@/app/providers'

const MAX_IMAGES_PER_ZONE = 10
const MAX_IMAGES_TOTAL = 20
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024
const MAX_NOTES_LENGTH = 200
const MONTHLY_LIMIT = 2
const MIN_GRADE = 4
const MAX_GRADE = 12
const COMPRESS_MAX_DIMENSION = 1600
const COMPRESS_QUALITY = 0.75

type ZoneImage = { id: string; dataUrl: string; name: string }
type SavedReport = { id: string; grade: number; date: Date | null; report: string; imageCount: number }

function currentMonthStamp(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

// Every uploaded photo — including HEIC ones — is converted to a resized,
// recompressed JPEG before it ever leaves the browser. Up to 20 raw phone
// photos (allowed up to 5MB each by the size check below) would comfortably
// blow past both the hosting platform's request-size ceiling and Claude's
// own per-request image limits; this keeps the actual upload small
// regardless of what the original photos looked like.
async function fileToCompressedDataUrl(file: File): Promise<string> {
  const isHeic = file.type === 'image/heic' || file.type === 'image/heif' || /\.hei[cf]$/i.test(file.name)
  let blob: Blob = file
  if (isHeic) {
    const heic2any = (await import('heic2any')).default
    const converted = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.85 })
    blob = Array.isArray(converted) ? converted[0] : converted
  }

  const objectUrl = URL.createObjectURL(blob)
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image()
      el.onload = () => resolve(el)
      el.onerror = () => reject(new Error('image decode failed'))
      el.src = objectUrl
    })
    const scale = Math.min(1, COMPRESS_MAX_DIMENSION / Math.max(img.width, img.height))
    const canvas = document.createElement('canvas')
    canvas.width = Math.max(1, Math.round(img.width * scale))
    canvas.height = Math.max(1, Math.round(img.height * scale))
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('canvas unavailable')
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    return canvas.toDataURL('image/jpeg', COMPRESS_QUALITY)
  } finally {
    URL.revokeObjectURL(objectUrl)
  }
}

// ── Icons ─────────────────────────────────────────────────────────────────────

export function TestAnalysisIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" className="w-4 h-4 shrink-0" style={{ color: '#1e40af' }} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75M3.75 4.5h16.5v15a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-15z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9.75l1.5 1.5 3-3" />
    </svg>
  )
}

function SpinnerIcon() {
  return (
    <svg className="animate-spin w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z" />
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

// ── Markdown styling (no typography plugin installed — style explicitly) ──────

const markdownComponents = {
  h2: (props: React.ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="text-base font-bold mt-6 mb-3 first:mt-0" style={{ color: '#0f1f3d' }} {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<'p'>) => (
    <p className="text-sm text-gray-700 leading-relaxed mb-3" {...props} />
  ),
  ul: (props: React.ComponentPropsWithoutRef<'ul'>) => (
    <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700 mb-3" {...props} />
  ),
  ol: (props: React.ComponentPropsWithoutRef<'ol'>) => (
    <ol className="list-decimal pl-5 space-y-1.5 text-sm text-gray-700 mb-3" {...props} />
  ),
  li: (props: React.ComponentPropsWithoutRef<'li'>) => <li className="leading-relaxed" {...props} />,
  strong: (props: React.ComponentPropsWithoutRef<'strong'>) => <strong style={{ color: '#0f1f3d' }} {...props} />,
}

// ── Upload zone ─────────────────────────────────────────────────────────────

function UploadZone({
  label, images, onAdd, onRemove, disabled,
}: {
  label: string
  images: ZoneImage[]
  onAdd: (files: FileList) => void
  onRemove: (id: string) => void
  disabled: boolean
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold" style={{ color: '#0f1f3d' }}>{label}</span>
        <span className="text-xs text-gray-400">{images.length} of {MAX_IMAGES_PER_ZONE} images uploaded</span>
      </div>
      <div className="rounded-xl border-2 border-dashed p-4" style={{ borderColor: '#d1d5db', backgroundColor: '#f9fafb' }}>
        {images.length > 0 && (
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 mb-3">
            {images.map(img => (
              <div key={img.id} className="relative rounded-lg overflow-hidden border" style={{ borderColor: '#e5e7eb', aspectRatio: '1' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.dataUrl} alt={img.name} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => onRemove(img.id)}
                  className="absolute top-1 right-1 w-5 h-5 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: 'rgba(15,31,61,0.75)' }}
                  aria-label={`Remove ${img.name}`}
                >
                  <TrashIcon />
                </button>
              </div>
            ))}
          </div>
        )}
        <button
          type="button"
          disabled={disabled || images.length >= MAX_IMAGES_PER_ZONE}
          onClick={() => inputRef.current?.click()}
          className="w-full text-sm font-semibold py-2.5 rounded-lg border transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ backgroundColor: '#ffffff', color: '#1e40af', borderColor: '#bfdbfe' }}
        >
          + Add photos
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/heic,image/heif,.heic,.heif"
          multiple
          className="hidden"
          onChange={e => { if (e.target.files) onAdd(e.target.files); e.target.value = '' }}
        />
      </div>
    </div>
  )
}

// ── Main panel ────────────────────────────────────────────────────────────────

export default function TestAnalysisPanel({ user }: { user: User }) {
  const tier = getActiveTier(user)
  const isGuided = tier === 'guided'

  const [questionImages, setQuestionImages] = useState<ZoneImage[]>([])
  const [answerImages, setAnswerImages] = useState<ZoneImage[]>([])
  const [grade, setGrade] = useState<number | ''>('')
  const [notes, setNotes] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [saved, setSaved] = useState(false)
  const [saving, setSaving] = useState(false)

  const [usageCount, setUsageCount] = useState<number | null>(null)
  const [reports, setReports] = useState<SavedReport[]>([])
  const [reportsLoading, setReportsLoading] = useState(false)
  const [viewingReport, setViewingReport] = useState<SavedReport | null>(null)

  const loadUsage = useCallback(async () => {
    try {
      const snap = await getDoc(doc(db, 'users', user.uid))
      const raw = snap.data()?.testAnalysisUsage as { count?: number; monthStamp?: string } | undefined
      setUsageCount(raw?.monthStamp === currentMonthStamp() ? (raw.count ?? 0) : 0)
    } catch {
      setUsageCount(0)
    }
  }, [user.uid])

  const loadReports = useCallback(async () => {
    setReportsLoading(true)
    try {
      const q = query(collection(db, 'users', user.uid, 'testAnalysisReports'), orderBy('date', 'desc'))
      const snap = await getDocs(q)
      setReports(snap.docs.map(d => {
        const data = d.data()
        return {
          id: d.id,
          grade: typeof data.grade === 'number' ? data.grade : 0,
          date: data.date instanceof Timestamp ? data.date.toDate() : null,
          report: typeof data.report === 'string' ? data.report : '',
          imageCount: typeof data.imageCount === 'number' ? data.imageCount : 0,
        }
      }))
    } catch {
      // Previous reports are a nice-to-have list — a failed fetch shouldn't block the rest of the panel.
    } finally {
      setReportsLoading(false)
    }
  }, [user.uid])

  useEffect(() => {
    if (!isGuided) return
    loadUsage()
    loadReports()
  }, [isGuided, loadUsage, loadReports])

  function totalImageCount() {
    return questionImages.length + answerImages.length
  }

  async function addImages(zone: 'question' | 'answer', files: FileList) {
    setError(null)
    const setZone = zone === 'question' ? setQuestionImages : setAnswerImages
    const currentZoneCount = (zone === 'question' ? questionImages : answerImages).length
    const remainingZoneSlots = MAX_IMAGES_PER_ZONE - currentZoneCount
    const remainingTotalSlots = MAX_IMAGES_TOTAL - totalImageCount()
    const slotsAvailable = Math.max(0, Math.min(remainingZoneSlots, remainingTotalSlots))

    const fileArray = Array.from(files)
    const oversized = fileArray.some(f => f.size > MAX_FILE_SIZE_BYTES)
    if (oversized) {
      setError('One or more images are too large. Please use photos under 5MB each.')
      return
    }

    const toProcess = fileArray.slice(0, slotsAvailable)
    try {
      const processed = await Promise.all(toProcess.map(async f => ({
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        dataUrl: await fileToCompressedDataUrl(f),
        name: f.name,
      })))
      setZone(prev => [...prev, ...processed])
    } catch {
      setError('Something went wrong processing one of your photos. Please try a different image.')
    }
  }

  function removeImage(zone: 'question' | 'answer', id: string) {
    const setZone = zone === 'question' ? setQuestionImages : setAnswerImages
    setZone(prev => prev.filter(img => img.id !== id))
  }

  function resetForm() {
    setQuestionImages([])
    setAnswerImages([])
    setGrade('')
    setNotes('')
    setResult(null)
    setSaved(false)
    setError(null)
  }

  async function handleAnalyse() {
    setError(null)
    if (questionImages.length === 0 || answerImages.length === 0 || grade === '') {
      setError('Please add at least one photo to both the question paper and answer sheet zones, and select a grade.')
      return
    }
    if (!auth.currentUser) {
      setError('Something went wrong. Please try again.')
      return
    }
    setSubmitting(true)
    try {
      const idToken = await auth.currentUser.getIdToken()
      const res = await fetch('/api/analyse-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          idToken,
          grade,
          questionImages: questionImages.map(i => i.dataUrl),
          answerImages: answerImages.map(i => i.dataUrl),
          notes: notes.trim() || undefined,
        }),
      })
      if (!res.ok) {
        setError(await res.text().catch(() => 'Something went wrong. Please try again.'))
        return
      }
      const data = await res.json()
      setResult(data.report)
      setSaved(false)
      loadUsage()
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  async function handleSave() {
    if (!result || grade === '') return
    setSaving(true)
    try {
      await addDoc(collection(db, 'users', user.uid, 'testAnalysisReports'), {
        grade,
        date: serverTimestamp(),
        report: result,
        imageCount: totalImageCount(),
      })
      setSaved(true)
      loadReports()
    } catch {
      setError('Could not save this report. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  if (!isGuided) {
    return (
      <div className="rounded-xl p-5" style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}>
        <p className="text-sm font-semibold mb-1.5" style={{ color: '#0f1f3d' }}>Test Analysis is a Guided-tier feature</p>
        <p className="text-sm text-gray-600 mb-4">
          Upload photos of a test and get specific, CAPS-referenced feedback on exactly where marks were lost —
          available on the Guided plan.
        </p>
        <Link
          href="/pricing"
          className="inline-block text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-colors"
          style={{ backgroundColor: '#1e40af' }}
        >
          Upgrade to Guided
        </Link>
      </div>
    )
  }

  const atLimit = usageCount !== null && usageCount >= MONTHLY_LIMIT && !result
  const canSubmit = questionImages.length > 0 && answerImages.length > 0 && grade !== '' && !submitting

  return (
    <div>
      {usageCount !== null && (
        <div className="mb-4">
          <p className="text-sm font-semibold" style={{ color: '#0f1f3d' }}>
            {Math.max(0, MONTHLY_LIMIT - usageCount)} of {MONTHLY_LIMIT} analyses remaining this month
          </p>
          <p className="text-xs text-gray-400 mt-0.5">
            Each analysis uses one of your {MONTHLY_LIMIT}{' '}
            monthly uploads — reports aren&apos;t saved automatically, so click &quot;Save Report&quot; once you
            have your results if you want to keep them.
          </p>
        </div>
      )}

      {error && (
        <div className="rounded-xl px-4 py-3 mb-4 text-sm" style={{ backgroundColor: '#fff7f7', border: '1px solid #fecaca', color: '#b91c1c' }}>
          {error}
        </div>
      )}

      {atLimit ? (
        <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb' }}>
          <p className="text-sm font-semibold mb-1" style={{ color: '#0f1f3d' }}>You&apos;ve used both your analyses this month</p>
          <p className="text-sm text-gray-500">Your count resets at the start of next month — your Previous Reports are still available below.</p>
        </div>
      ) : result ? (
        <div className="mb-6">
          <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #e5e7eb' }}>
            <ReactMarkdown components={markdownComponents}>{result}</ReactMarkdown>
          </div>
          {!saved && (
            <p className="text-xs mt-3" style={{ color: '#b45309' }}>
              This report isn&apos;t saved yet — if you leave this page or start a new analysis without clicking
              &quot;Save Report&quot;, it will be lost for good.
            </p>
          )}
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <button
              onClick={handleSave}
              disabled={saving || saved}
              className="text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-colors disabled:opacity-50"
              style={{ backgroundColor: '#1e40af' }}
            >
              {saving ? 'Saving…' : saved ? 'Saved' : 'Save Report'}
            </button>
            <button
              onClick={resetForm}
              className="text-sm font-semibold px-5 py-2.5 rounded-xl border transition-colors"
              style={{ backgroundColor: '#ffffff', color: '#0f1f3d', borderColor: '#d1d5db' }}
            >
              Start New Analysis
            </button>
            {saved && <span className="text-sm font-semibold" style={{ color: '#16a34a' }}>Analysis saved</span>}
          </div>
        </div>
      ) : submitting ? (
        <div className="rounded-xl p-8 mb-6 flex flex-col items-center gap-3 text-center" style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb' }}>
          <span style={{ color: '#1e40af' }}><SpinnerIcon /></span>
          <p className="text-sm font-semibold" style={{ color: '#0f1f3d' }}>Analysing your test… this may take up to 30 seconds</p>
        </div>
      ) : (
        <div className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <UploadZone
              label="Question Paper"
              images={questionImages}
              onAdd={files => addImages('question', files)}
              onRemove={id => removeImage('question', id)}
              disabled={submitting}
            />
            <UploadZone
              label="Answer Sheet"
              images={answerImages}
              onAdd={files => addImages('answer', files)}
              onRemove={id => removeImage('answer', id)}
              disabled={submitting}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#0f1f3d' }}>Grade</label>
              <select
                value={grade}
                onChange={e => setGrade(e.target.value ? Number(e.target.value) : '')}
                className="w-full px-4 py-2.5 rounded-lg border text-sm"
                style={{ borderColor: '#d1d5db', color: '#0f1f3d' }}
              >
                <option value="">Select a grade</option>
                {Array.from({ length: MAX_GRADE - MIN_GRADE + 1 }, (_, i) => MIN_GRADE + i).map(g => (
                  <option key={g} value={g}>Grade {g}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#0f1f3d' }}>
                Anything specific you want feedback on? <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                value={notes}
                maxLength={MAX_NOTES_LENGTH}
                onChange={e => setNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border text-sm"
                style={{ borderColor: '#d1d5db', color: '#0f1f3d' }}
                placeholder="e.g. focus on my algebra questions"
              />
              <p className="text-xs text-gray-400 mt-1 text-right">{notes.length}/{MAX_NOTES_LENGTH}</p>
            </div>
          </div>

          <button
            onClick={handleAnalyse}
            disabled={!canSubmit}
            className="text-sm font-semibold px-6 py-3 rounded-xl text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#1e40af' }}
          >
            Analyse My Test
          </button>
        </div>
      )}

      {/* ── Previous Reports ─────────────────────────────────────────────── */}
      <div className="pt-5" style={{ borderTop: '1px solid #f3f4f6' }}>
        <h3 className="text-sm font-bold mb-3" style={{ color: '#0f1f3d' }}>Previous Reports</h3>
        {reportsLoading ? (
          <p className="text-sm text-gray-400">Loading…</p>
        ) : reports.length === 0 ? (
          <p className="text-sm text-gray-400">No saved reports yet.</p>
        ) : (
          <div className="flex flex-col gap-2">
            {reports.map(r => (
              <div key={r.id} className="flex items-center justify-between gap-3 rounded-lg px-4 py-3" style={{ backgroundColor: '#f9fafb' }}>
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate" style={{ color: '#0f1f3d' }}>
                    {r.date ? r.date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Unknown date'}
                  </p>
                  <p className="text-xs text-gray-400">Grade {r.grade}</p>
                </div>
                <button
                  onClick={() => setViewingReport(r)}
                  className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                  style={{ backgroundColor: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe' }}
                >
                  View Report
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── View-report modal ────────────────────────────────────────────── */}
      {viewingReport && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={() => setViewingReport(null)}
        >
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
          <div
            className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-bold" style={{ color: '#0f1f3d' }}>
                  {viewingReport.date ? viewingReport.date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Report'}
                </h3>
                <p className="text-sm text-gray-400">Grade {viewingReport.grade}</p>
              </div>
              <button
                onClick={() => setViewingReport(null)}
                className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
                aria-label="Close"
              >
                <TrashIcon />
              </button>
            </div>
            <ReactMarkdown components={markdownComponents}>{viewingReport.report}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  )
}
