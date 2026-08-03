'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { collection, addDoc, getDocs, getDoc, doc, query, orderBy, serverTimestamp, Timestamp } from 'firebase/firestore'
import { getStorage, ref as storageRef, uploadBytes } from 'firebase/storage'
import firebaseApp, { db, auth } from '@/src/lib/firebase'
import { getActiveTier, getActiveChild, type User } from '@/app/providers'
import { useTranslations } from '@/src/i18n/useTranslations'

const MAX_IMAGES_PER_ZONE = 10
const MAX_IMAGES_TOTAL = 20
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024
const MAX_NOTES_LENGTH = 200
const MAX_DISPUTE_NOTE_LENGTH = 500
const MONTHLY_LIMIT = 2
const MIN_GRADE = 4
const MAX_GRADE = 12
// 2000px / q0.85 — raised from 1600px / q0.75. The old, tighter values
// existed only to keep up to 20 raw phone photos, inlined as base64, under
// the hosting platform's request-size ceiling and Claude's own per-request
// image limits. Now that compressed photos are uploaded straight to
// Firebase Storage (see uploadZoneImages below) and the API request only
// carries a submissionId, neither constraint applies — so quality can go up,
// which directly improves handwriting transcription accuracy.
const COMPRESS_MAX_DIMENSION = 2000
const COMPRESS_QUALITY = 0.85

// Client-side Storage instance, built off the same app singleton firebase.ts
// already initialises for Auth/Firestore. Safe to construct at module scope
// — like getAuth()/getFirestore() in firebase.ts, this doesn't touch the
// network until something is actually uploaded.
const storage = getStorage(firebaseApp)

type ZoneImage = { id: string; blob: Blob; previewUrl: string; name: string }
type SavedReport = { id: string; grade: number; date: Date | null; report: string; imageCount: number; submissionId: string | null }

function currentMonthStamp(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

// ── Local bilingual strings ─────────────────────────────────────────────────
// New copy introduced by this change (upload progress, retention consent,
// and the post-report correction control) follows the exact en/af
// keyed-object convention used in src/i18n/translations.ts — but lives here
// instead, because this change is scoped to this file only and
// translations.ts may not be edited. Worth folding into the shared file
// alongside the existing dash_test_analysis_* keys in a follow-up so this
// duplication doesn't linger.
const localStrings = {
  en: {
    uploading: 'Uploading {done} of {total}…',
    uploadFailed: 'Something went wrong uploading your photos. Please check your connection and try again.',
    retainLabel: 'Let Mathly keep these photos to help train our own maths AI.',
    retainHint: 'Optional — if you leave this unticked, your photos are deleted right after your feedback is generated.',
    correctionPrompt: 'Did we get this right?',
    confirmCorrect: 'This looks right',
    disputeCorrect: "Something's wrong",
    disputeNotePlaceholder: 'Optional — tell us what seems off',
    disputeSubmit: 'Send feedback',
    thankYouConfirmed: 'Thanks for letting us know!',
    thankYouDisputed: 'Thanks — this helps us improve.',
  },
  af: {
    uploading: 'Laai {done} van {total} op…',
    uploadFailed: 'Iets het verkeerd geloop met die oplaai van jou foto\'s. Gaan jou verbinding na en probeer asseblief weer.',
    retainLabel: 'Laat Mathly hierdie foto\'s hou om ons eie wiskunde-KI mee op te lei.',
    retainHint: 'Opsioneel — as jy dit ongemerk laat, word jou foto\'s uitgevee sodra jou terugvoer gegenereer is.',
    correctionPrompt: 'Het ons dit reg gekry?',
    confirmCorrect: 'Dit lyk reg',
    disputeCorrect: 'Iets is verkeerd',
    disputeNotePlaceholder: 'Opsioneel — vertel ons wat verkeerd lyk',
    disputeSubmit: 'Stuur terugvoer',
    thankYouConfirmed: 'Dankie dat jy ons laat weet het!',
    thankYouDisputed: 'Dankie — dit help ons verbeter.',
  },
} as const

// Every uploaded photo — including HEIC ones — is converted to a resized,
// recompressed JPEG Blob before it ever leaves the browser. It's then
// uploaded straight to Firebase Storage (see uploadZoneImages) rather than
// inlined into the API request as base64. Compression still matters even
// though the inline size ceiling that originally motivated it no longer
// applies: it keeps upload times reasonable on a slow connection and keeps
// the photos a sensible size for the model to read.
async function fileToCompressedImage(file: File): Promise<{ blob: Blob; previewUrl: string }> {
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
    const compressed = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/jpeg', COMPRESS_QUALITY))
    if (!compressed) throw new Error('compression failed')
    return { blob: compressed, previewUrl: URL.createObjectURL(compressed) }
  } finally {
    URL.revokeObjectURL(objectUrl)
  }
}

// Uploads one zone's images to testAnalysis/{uid}/{submissionId}/{prefix}-{i}.jpg
// as JPEG blobs, invoking onProgress once per completed upload so the caller
// can show a running "Uploading X of Y" count across both zones.
async function uploadZoneImages(
  uid: string,
  submissionId: string,
  prefix: 'q' | 'a',
  images: ZoneImage[],
  onProgress: () => void
): Promise<void> {
  await Promise.all(images.map(async (img, i) => {
    const path = `testAnalysis/${uid}/${submissionId}/${prefix}-${i}.jpg`
    await uploadBytes(storageRef(storage, path), img.blob, { contentType: 'image/jpeg' })
    onProgress()
  }))
}

// ── Icons ─────────────────────────────────────────────────────────────────────

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
  const t = useTranslations()
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold" style={{ color: '#0f1f3d' }}>{label}</span>
        <span className="text-xs text-gray-500">
          {t.dash_test_analysis_images_uploaded.replace('{count}', String(images.length)).replace('{max}', String(MAX_IMAGES_PER_ZONE))}
        </span>
      </div>
      <div className="rounded-xl border-2 border-dashed p-4" style={{ borderColor: '#d1d5db', backgroundColor: '#f9fafb' }}>
        {images.length > 0 && (
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 mb-3">
            {images.map(img => (
              <div key={img.id} className="relative rounded-lg overflow-hidden border" style={{ borderColor: '#e5e7eb', aspectRatio: '1' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.previewUrl} alt={img.name} className="w-full h-full object-cover" />
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
          {t.dash_test_analysis_add_photos}
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
  const t = useTranslations()
  const tier = getActiveTier(user)
  const isMax = tier === 'max'
  // Same language resolution useTranslations() uses internally, but read
  // directly off the `user` prop already in scope — this drives localStrings
  // (see comment above) rather than the shared t object.
  const lt = localStrings[getActiveChild(user).language]

  const [questionImages, setQuestionImages] = useState<ZoneImage[]>([])
  const [answerImages, setAnswerImages] = useState<ZoneImage[]>([])
  const [grade, setGrade] = useState<number | ''>('')
  const [notes, setNotes] = useState('')
  // Unticked by default on every submission — deliberate, not an oversight.
  // These are photographs of a child's handwriting and exam paper, and the
  // privacy policy's default promise is that they're deleted; keeping this
  // is opt-in, per-submission consent, so it must never be persisted or
  // pre-ticked from a previous submission. resetForm() below always resets
  // it to false, and it's otherwise plain component state — never written
  // to storage — so there is nothing to persist across submissions.
  const [retainImages, setRetainImages] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [uploadProgress, setUploadProgress] = useState<{ done: number; total: number } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [submissionId, setSubmissionId] = useState<string | null>(null)
  const [saved, setSaved] = useState(false)
  const [saving, setSaving] = useState(false)

  // Learner correction control (post-report "did we get this right?").
  const [correctionStatus, setCorrectionStatus] = useState<'idle' | 'sending' | 'confirmed' | 'disputed' | 'failed'>('idle')
  const [disputing, setDisputing] = useState(false)
  const [disputeNote, setDisputeNote] = useState('')

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
          submissionId: typeof data.submissionId === 'string' ? data.submissionId : null,
        }
      }))
    } catch {
      // Previous reports are a nice-to-have list — a failed fetch shouldn't block the rest of the panel.
    } finally {
      setReportsLoading(false)
    }
  }, [user.uid])

  useEffect(() => {
    if (!isMax) return
    loadUsage()
    loadReports()
  }, [isMax, loadUsage, loadReports])

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
      setError(t.dash_test_analysis_error_oversized)
      return
    }

    const toProcess = fileArray.slice(0, slotsAvailable)
    try {
      const processed = await Promise.all(toProcess.map(async f => {
        const { blob, previewUrl } = await fileToCompressedImage(f)
        return { id: `${Date.now()}-${Math.random().toString(36).slice(2)}`, blob, previewUrl, name: f.name }
      }))
      setZone(prev => [...prev, ...processed])
    } catch {
      setError(t.dash_test_analysis_error_photo_processing)
    }
  }

  function removeImage(zone: 'question' | 'answer', id: string) {
    const setZone = zone === 'question' ? setQuestionImages : setAnswerImages
    setZone(prev => {
      const target = prev.find(img => img.id === id)
      if (target) URL.revokeObjectURL(target.previewUrl)
      return prev.filter(img => img.id !== id)
    })
  }

  function resetForm() {
    questionImages.forEach(img => URL.revokeObjectURL(img.previewUrl))
    answerImages.forEach(img => URL.revokeObjectURL(img.previewUrl))
    setQuestionImages([])
    setAnswerImages([])
    setGrade('')
    setNotes('')
    setRetainImages(false)
    setResult(null)
    setSubmissionId(null)
    setSaved(false)
    setError(null)
    setUploadProgress(null)
    setCorrectionStatus('idle')
    setDisputing(false)
    setDisputeNote('')
  }

  async function handleAnalyse() {
    setError(null)
    if (questionImages.length === 0 || answerImages.length === 0 || grade === '') {
      setError(t.dash_test_analysis_error_missing_fields)
      return
    }
    if (!auth.currentUser) {
      setError(t.auth_error_generic)
      return
    }
    setSubmitting(true)
    const total = questionImages.length + answerImages.length
    let doneCount = 0
    setUploadProgress({ done: 0, total })
    try {
      const idToken = await auth.currentUser.getIdToken()
      const uid = auth.currentUser.uid
      const newSubmissionId = crypto.randomUUID().replace(/-/g, '')

      try {
        await Promise.all([
          uploadZoneImages(uid, newSubmissionId, 'q', questionImages, () => setUploadProgress({ done: ++doneCount, total })),
          uploadZoneImages(uid, newSubmissionId, 'a', answerImages, () => setUploadProgress({ done: ++doneCount, total })),
        ])
      } catch (uploadErr) {
        console.error('[TestAnalysisPanel] photo upload failed', uploadErr)
        setError(lt.uploadFailed)
        return
      }
      setUploadProgress(null)

      const res = await fetch('/api/analyse-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          idToken,
          grade,
          submissionId: newSubmissionId,
          questionCount: questionImages.length,
          answerCount: answerImages.length,
          notes: notes.trim() || undefined,
          childIndex: user.activeChildIndex,
          retainImages,
        }),
      })
      if (!res.ok) {
        setError(await res.text().catch(() => t.auth_error_generic))
        return
      }
      const data = await res.json()
      setResult(data.report)
      setSubmissionId(typeof data.submissionId === 'string' ? data.submissionId : newSubmissionId)
      setSaved(false)
      setCorrectionStatus('idle')
      setDisputing(false)
      setDisputeNote('')
      loadUsage()
    } catch {
      setError(t.auth_error_generic)
    } finally {
      setSubmitting(false)
      setUploadProgress(null)
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
        submissionId,
      })
      setSaved(true)
      loadReports()
    } catch {
      setError(t.dash_test_analysis_error_save_failed)
    } finally {
      setSaving(false)
    }
  }

  // "This looks right" / "Something's wrong" — fires after a report is
  // shown. A lost correction must never disrupt the student, so failures
  // are swallowed (logged only) rather than surfaced as a panel error; the
  // control still disables either way so it can't be sent twice.
  async function submitCorrection(verdict: 'confirmed' | 'disputed') {
    if (!submissionId || !auth.currentUser) return
    setCorrectionStatus('sending')
    try {
      const idToken = await auth.currentUser.getIdToken()
      const res = await fetch('/api/test-analysis-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          idToken,
          submissionId,
          verdict,
          note: verdict === 'disputed' && disputeNote.trim() ? disputeNote.trim() : undefined,
        }),
      })
      if (!res.ok) throw new Error(`feedback request failed: ${res.status}`)
      setCorrectionStatus(verdict)
    } catch (err) {
      console.error('[TestAnalysisPanel] correction feedback failed', err)
      setCorrectionStatus('failed')
    }
  }

  if (!isMax) {
    return (
      <div className="rounded-xl p-5" style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}>
        <p className="text-sm font-semibold mb-1.5" style={{ color: '#0f1f3d' }}>{t.dash_test_analysis_gate_heading}</p>
        <p className="text-sm text-gray-600 mb-4">
          {t.dash_test_analysis_gate_body}
        </p>
        <Link
          href="/pricing"
          className="inline-block text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-colors"
          style={{ backgroundColor: '#1e40af' }}
        >
          {t.dash_test_analysis_gate_cta}
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
            {t.dash_test_analysis_remaining.replace('{count}', String(Math.max(0, MONTHLY_LIMIT - usageCount))).replace('{max}', String(MONTHLY_LIMIT))}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            {t.dash_test_analysis_remaining_hint.replace('{max}', String(MONTHLY_LIMIT))}
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
          <p className="text-sm font-semibold mb-1" style={{ color: '#0f1f3d' }}>{t.dash_test_analysis_limit_heading}</p>
          <p className="text-sm text-gray-500">{t.dash_test_analysis_limit_body}</p>
        </div>
      ) : result ? (
        <div className="mb-6">
          <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #e5e7eb' }}>
            <ReactMarkdown components={markdownComponents}>{result}</ReactMarkdown>
          </div>
          {!saved && (
            <p className="text-xs mt-3" style={{ color: '#b45309' }}>
              {t.dash_test_analysis_unsaved_warning}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <button
              onClick={handleSave}
              disabled={saving || saved}
              className="text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-colors disabled:opacity-50"
              style={{ backgroundColor: '#1e40af' }}
            >
              {saving ? t.dash_test_analysis_saving : saved ? t.dash_test_analysis_saved : t.dash_test_analysis_save_report}
            </button>
            <button
              onClick={resetForm}
              className="text-sm font-semibold px-5 py-2.5 rounded-xl border transition-colors"
              style={{ backgroundColor: '#ffffff', color: '#0f1f3d', borderColor: '#d1d5db' }}
            >
              {t.dash_test_analysis_start_new}
            </button>
            {saved && <span className="text-sm font-semibold" style={{ color: '#16a34a' }}>{t.dash_test_analysis_saved_badge}</span>}
          </div>

          {/* ── Learner correction control ───────────────────────────────── */}
          {submissionId && correctionStatus !== 'failed' && (
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid #f3f4f6' }}>
              {correctionStatus === 'confirmed' ? (
                <p className="text-sm font-semibold" style={{ color: '#16a34a' }}>{lt.thankYouConfirmed}</p>
              ) : correctionStatus === 'disputed' ? (
                <p className="text-sm font-semibold" style={{ color: '#16a34a' }}>{lt.thankYouDisputed}</p>
              ) : (
                <div>
                  <p className="text-sm font-semibold mb-2" style={{ color: '#0f1f3d' }}>{lt.correctionPrompt}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => submitCorrection('confirmed')}
                      disabled={correctionStatus === 'sending'}
                      className="text-xs font-semibold px-4 py-2 rounded-lg border transition-colors disabled:opacity-50"
                      style={{ backgroundColor: '#ffffff', color: '#1e40af', borderColor: '#bfdbfe' }}
                    >
                      {lt.confirmCorrect}
                    </button>
                    <button
                      type="button"
                      onClick={() => setDisputing(true)}
                      disabled={correctionStatus === 'sending' || disputing}
                      className="text-xs font-semibold px-4 py-2 rounded-lg border transition-colors disabled:opacity-50"
                      style={{ backgroundColor: '#ffffff', color: '#0f1f3d', borderColor: '#d1d5db' }}
                    >
                      {lt.disputeCorrect}
                    </button>
                  </div>
                  {disputing && (
                    <div className="mt-3">
                      <textarea
                        value={disputeNote}
                        maxLength={MAX_DISPUTE_NOTE_LENGTH}
                        onChange={e => setDisputeNote(e.target.value)}
                        placeholder={lt.disputeNotePlaceholder}
                        rows={2}
                        disabled={correctionStatus === 'sending'}
                        className="w-full px-3 py-2 rounded-lg border text-sm"
                        style={{ borderColor: '#d1d5db', color: '#0f1f3d' }}
                      />
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-gray-500">{disputeNote.length}/{MAX_DISPUTE_NOTE_LENGTH}</p>
                        <button
                          type="button"
                          onClick={() => submitCorrection('disputed')}
                          disabled={correctionStatus === 'sending'}
                          className="text-xs font-semibold px-4 py-2 rounded-lg text-white transition-colors disabled:opacity-50"
                          style={{ backgroundColor: '#1e40af' }}
                        >
                          {lt.disputeSubmit}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      ) : submitting ? (
        <div className="rounded-xl p-8 mb-6 flex flex-col items-center gap-3 text-center" style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb' }}>
          <span style={{ color: '#1e40af' }}><SpinnerIcon /></span>
          <p className="text-sm font-semibold" style={{ color: '#0f1f3d' }}>
            {uploadProgress
              ? lt.uploading.replace('{done}', String(uploadProgress.done)).replace('{total}', String(uploadProgress.total))
              : t.dash_test_analysis_analysing}
          </p>
        </div>
      ) : (
        <div className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <UploadZone
              label={t.dash_test_analysis_question_paper}
              images={questionImages}
              onAdd={files => addImages('question', files)}
              onRemove={id => removeImage('question', id)}
              disabled={submitting}
            />
            <UploadZone
              label={t.dash_test_analysis_answer_sheet}
              images={answerImages}
              onAdd={files => addImages('answer', files)}
              onRemove={id => removeImage('answer', id)}
              disabled={submitting}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#0f1f3d' }}>{t.dash_form_grade}</label>
              <select
                value={grade}
                onChange={e => setGrade(e.target.value ? Number(e.target.value) : '')}
                className="w-full px-4 py-2.5 rounded-lg border text-sm"
                style={{ borderColor: '#d1d5db', color: '#0f1f3d' }}
              >
                <option value="">{t.auth_select_grade_placeholder}</option>
                {Array.from({ length: MAX_GRADE - MIN_GRADE + 1 }, (_, i) => MIN_GRADE + i).map(g => (
                  <option key={g} value={g}>{t.dash_grade_label.replace('{grade}', String(g))}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#0f1f3d' }}>
                {t.dash_test_analysis_feedback_focus_label} <span className="font-normal text-gray-500">{t.dash_test_analysis_optional_label}</span>
              </label>
              <input
                type="text"
                value={notes}
                maxLength={MAX_NOTES_LENGTH}
                onChange={e => setNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border text-sm"
                style={{ borderColor: '#d1d5db', color: '#0f1f3d' }}
                placeholder={t.dash_test_analysis_feedback_focus_placeholder}
              />
              <p className="text-xs text-gray-500 mt-1 text-right">{notes.length}/{MAX_NOTES_LENGTH}</p>
            </div>
          </div>

          <div className="mb-5">
            <label className="flex items-start gap-2.5 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={retainImages}
                onChange={e => setRetainImages(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded shrink-0"
                style={{ accentColor: '#1e40af' }}
              />
              <span>
                <span className="font-semibold" style={{ color: '#0f1f3d' }}>{lt.retainLabel}</span>{' '}
                <span className="text-gray-500">{lt.retainHint}</span>
              </span>
            </label>
          </div>

          <button
            onClick={handleAnalyse}
            disabled={!canSubmit}
            className="text-sm font-semibold px-6 py-3 rounded-xl text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#1e40af' }}
          >
            {t.dash_test_analysis_submit}
          </button>
        </div>
      )}

      {/* ── Previous Reports ─────────────────────────────────────────────── */}
      <div className="pt-5" style={{ borderTop: '1px solid #f3f4f6' }}>
        <h3 className="text-sm font-bold mb-3" style={{ color: '#0f1f3d' }}>{t.dash_test_analysis_previous_reports}</h3>
        {reportsLoading ? (
          <p className="text-sm text-gray-500">{t.dash_test_analysis_loading}</p>
        ) : reports.length === 0 ? (
          <p className="text-sm text-gray-500">{t.dash_test_analysis_no_reports}</p>
        ) : (
          <div className="flex flex-col gap-2">
            {reports.map(r => (
              <div key={r.id} className="flex items-center justify-between gap-3 rounded-lg px-4 py-3" style={{ backgroundColor: '#f9fafb' }}>
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate" style={{ color: '#0f1f3d' }}>
                    {r.date ? r.date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : t.dash_test_analysis_unknown_date}
                  </p>
                  <p className="text-xs text-gray-500">{t.dash_grade_label.replace('{grade}', String(r.grade))}</p>
                </div>
                <button
                  onClick={() => setViewingReport(r)}
                  className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                  style={{ backgroundColor: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe' }}
                >
                  {t.dash_test_analysis_view_report}
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
                  {viewingReport.date ? viewingReport.date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : t.dash_test_analysis_report_fallback_heading}
                </h3>
                <p className="text-sm text-gray-500">{t.dash_grade_label.replace('{grade}', String(viewingReport.grade))}</p>
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
