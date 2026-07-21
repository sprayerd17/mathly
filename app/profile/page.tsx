'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import { useAuth, LanguageCards, type Language, type Tier } from '@/app/providers'
import { QRCodeCanvas } from 'qrcode.react'
import { useTranslations } from '@/src/i18n/useTranslations'
import { collection, query, where, getDocs, Timestamp } from 'firebase/firestore'
import { db, auth } from '@/src/lib/firebase'
import { cancelSubscription, downgradeChild } from '@/src/lib/paystack-client'
import { computeFamilyPrice, addOneMonth } from '@/src/lib/pricing'
import { PAYMENTS_ENABLED } from '@/src/lib/launch-config'

const MAX_CHILDREN = 3

type ReferralRecord = {
  referredName: string
  hasSubscribed: boolean
  creditAmount: number
  subscribedTiers: Tier[]
  createdAt: Date | null
}

const GRADES = [4, 5, 6, 7, 8, 9, 10, 11, 12]

const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'English',
  af: 'Afrikaans',
}

type ChildRecord = { name: string; grade: number; language: Language; languageChangeUsed: boolean }

export default function ProfilePage() {
  const { user, loading, updateChildren, addChild, updateActiveChild, openModal } = useAuth()
  const t = useTranslations()

  // Singular-profile editing (used when the plan only allows 1 profile)
  const [editingGrade, setEditingGrade] = useState(false)
  const [draftGrade, setDraftGrade]     = useState<number>(4)
  const [editingLang, setEditingLang]   = useState(false)
  const [draftLang, setDraftLang]       = useState<Language>('en')

  const [linkCopied, setLinkCopied] = useState(false)
  const [codeCopied, setCodeCopied] = useState(false)

  const [confirmingCancel, setConfirmingCancel] = useState(false)
  const [cancelInProgress, setCancelInProgress] = useState(false)
  const [cancelError, setCancelError] = useState<string | null>(null)

  async function handleCancelSubscription() {
    if (!auth.currentUser) return
    setCancelInProgress(true)
    setCancelError(null)
    try {
      await cancelSubscription(auth.currentUser)
      // No client-side refreshUser() exists — a full reload re-runs the
      // onAuthStateChanged listener, which re-fetches the user doc and picks
      // up the new subscriptionStatus/accessUntil.
      window.location.reload()
    } catch (err) {
      setCancelError(err instanceof Error ? err.message : String(err))
      setCancelInProgress(false)
    }
  }

  const [downgradingIndex, setDowngradingIndex]   = useState<number | null>(null)
  const [downgradeInProgress, setDowngradeInProgress] = useState(false)
  const [downgradeError, setDowngradeError]       = useState<string | null>(null)

  async function handleDowngradeChild(index: number) {
    if (!auth.currentUser) return
    setDowngradeInProgress(true)
    setDowngradeError(null)
    try {
      await downgradeChild(auth.currentUser, index)
      window.location.reload()
    } catch (err) {
      setDowngradeError(err instanceof Error ? err.message : String(err))
      setDowngradeInProgress(false)
    }
  }

  const [children, setChildren]               = useState<ChildRecord[]>([])
  const [editingChildIdx, setEditingChildIdx] = useState<number | null>(null)
  const [draftChildName, setDraftChildName]   = useState('')
  const [draftChildGrade, setDraftChildGrade] = useState<number>(4)
  const [draftChildLanguage, setDraftChildLanguage] = useState<Language>('en')
  const [addingChild, setAddingChild]         = useState(false)
  const [newChildName, setNewChildName]       = useState('')
  const [newChildGrade, setNewChildGrade]     = useState<number>(4)
  const [newChildLanguage, setNewChildLanguage] = useState<Language>('en')

  useEffect(() => {
    setChildren(user?.children ?? [])
  }, [user])

  const [referrals, setReferrals] = useState<ReferralRecord[]>([])

  useEffect(() => {
    if (!user) {
      setReferrals([])
      return
    }
    let cancelled = false
    async function loadReferrals() {
      const snap = await getDocs(
        query(collection(db, 'referrals'), where('referrerUid', '==', user!.uid))
      )
      if (cancelled) return
      setReferrals(snap.docs.map(d => {
        const data = d.data()
        return {
          referredName: typeof data.referredName === 'string' ? data.referredName : '',
          hasSubscribed: data.hasSubscribed === true,
          creditAmount: typeof data.creditAmount === 'number' ? data.creditAmount : 0,
          subscribedTiers: Array.isArray(data.subscribedTiers) ? data.subscribedTiers : [],
          createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : null,
        }
      }))
    }
    loadReferrals().catch(() => setReferrals([]))
    return () => { cancelled = true }
  }, [user])

  const subscribedReferrals = referrals.filter(r => r.hasSubscribed)
  const totalCredit = subscribedReferrals.reduce((sum, r) => sum + r.creditAmount, 0)

  const refCode = user?.refCode ?? ''

  const referralUrl = `mathly.co.za/join?ref=${refCode}`

  function copyLink() {
    navigator.clipboard?.writeText(`https://${referralUrl}`)
    setLinkCopied(true)
    setTimeout(() => setLinkCopied(false), 2000)
  }

  function copyCode() {
    navigator.clipboard?.writeText(refCode)
    setCodeCopied(true)
    setTimeout(() => setCodeCopied(false), 2000)
  }

  function downloadQR() {
    const canvas = document.getElementById('referral-qr') as HTMLCanvasElement | null
    if (!canvas) return
    const url = canvas.toDataURL('image/png')
    const a   = document.createElement('a')
    a.href     = url
    a.download = 'mathly-referral-qr.png'
    a.click()
  }

  function saveChildren(updated: ChildRecord[]) {
    setChildren(updated)
    updateChildren(updated)
  }

  function startEditChild(i: number) {
    setDraftChildName(children[i].name)
    setDraftChildGrade(children[i].grade)
    setDraftChildLanguage(children[i].language)
    setEditingChildIdx(i)
  }

  function saveEditChild() {
    if (editingChildIdx === null || !draftChildName.trim()) return
    const idx = editingChildIdx
    const languageChanged = draftChildLanguage !== children[idx].language
    const updated = children.map((c, i) => i === idx
      ? {
          name: draftChildName.trim(),
          grade: draftChildGrade,
          language: draftChildLanguage,
          languageChangeUsed: c.languageChangeUsed || languageChanged,
        }
      : c)
    saveChildren(updated)
    setEditingChildIdx(null)
  }

  function startAddChild() {
    setNewChildName('')
    setNewChildGrade(4)
    setNewChildLanguage('en')
    setAddingChild(true)
  }

  async function saveNewChild() {
    if (!newChildName.trim() || children.length >= MAX_CHILDREN) return
    // Growing the family goes through a server route rather than a direct
    // Firestore write — see app/api/family/add-child/route.ts.
    await addChild(newChildName.trim(), newChildGrade, newChildLanguage)
    setAddingChild(false)
  }

  function startEditGrade() {
    setDraftGrade(children[0]?.grade ?? 4)
    setEditingGrade(true)
  }

  function saveGrade() {
    if (!children[0]) return
    saveChildren(children.map((c, i) => i === 0 ? { ...c, grade: draftGrade } : c))
    setEditingGrade(false)
  }

  function startEditLangSingular() {
    setDraftLang(children[0]?.language ?? 'en')
    setEditingLang(true)
  }

  function saveLangSingular() {
    if (!children[0]) return
    const languageChanged = draftLang !== children[0].language
    saveChildren(children.map((c, i) => i === 0
      ? { ...c, language: draftLang, languageChangeUsed: c.languageChangeUsed || languageChanged }
      : c))
    setEditingLang(false)
  }

  if (loading) {
    return null
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f8fafc' }}>
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-gray-500 mb-4">{t.profile_login_required}</p>
          <button
            onClick={() => openModal()}
            className="text-sm font-semibold px-5 py-2.5 rounded-lg text-white"
            style={{ backgroundColor: '#1e40af' }}
          >
            {t.nav_login}
          </button>
        </div>
      </div>
    )
  }

  const atChildLimit = children.length >= MAX_CHILDREN
  const singularProfile = children.length === 1
  const tierLabel = (tier: Tier) => tier === 'pro' ? t.profile_plan_pro : tier === 'max' ? t.profile_plan_max : t.profile_plan_free
  const tierDesc = (tier: Tier) => tier === 'pro' ? t.profile_plan_desc_pro : tier === 'max' ? t.profile_plan_desc_max : t.profile_plan_desc_free

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />

      <main className="flex-1 w-full max-w-2xl mx-auto px-6 py-14">
        <h1 className="text-3xl font-bold mb-8" style={{ color: '#0f1f3d' }}>
          {t.profile_my_profile_heading}
        </h1>

        {/* Identity card */}
        <div
          className="bg-white rounded-2xl shadow-sm p-7 mb-5"
          style={{ border: '1px solid #e5e7eb' }}
        >
          {/* Avatar + name + email */}
          <div
            className={`flex items-center gap-5 ${singularProfile ? 'mb-8 pb-8' : ''}`}
            style={singularProfile ? { borderBottom: '1px solid #f3f4f6' } : undefined}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shrink-0"
              style={{ backgroundColor: '#1e40af' }}
            >
              {user.initial}
            </div>
            <div className="min-w-0">
              <p className="text-xl font-bold truncate" style={{ color: '#0f1f3d' }}>
                {user.name}
              </p>
              <p className="text-sm text-gray-500 mt-0.5 truncate">{user.email}</p>
            </div>
          </div>

          {singularProfile && children[0] && (
            <>
              {/* Grade section (single profile) */}
              <div className="pb-7 mb-7" style={{ borderBottom: '1px solid #f3f4f6' }}>
                <div className="flex items-center justify-between mb-3">
                  <h2
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: '#6b7280' }}
                  >
                    {t.profile_my_grades_heading}
                  </h2>
                  {!editingGrade && (
                    <button
                      onClick={startEditGrade}
                      className="text-xs font-semibold hover:underline underline-offset-2"
                      style={{ color: '#1e40af' }}
                    >
                      {t.profile_edit_grades}
                    </button>
                  )}
                </div>

                {!editingGrade ? (
                  <span
                    className="inline-block text-sm font-semibold px-3 py-1.5 rounded-lg"
                    style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
                  >
                    {t.profile_grade_label.replace('{grade}', String(children[0].grade))}
                  </span>
                ) : (
                  <div>
                    <select
                      value={draftGrade}
                      onChange={e => setDraftGrade(Number(e.target.value))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors bg-white mb-4"
                    >
                      {GRADES.map(g => (
                        <option key={g} value={g}>{t.profile_grade_label.replace('{grade}', String(g))}</option>
                      ))}
                    </select>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setEditingGrade(false)}
                        className="flex-1 border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                      >
                        {t.profile_cancel}
                      </button>
                      <button
                        type="button"
                        onClick={saveGrade}
                        className="flex-1 font-semibold py-2.5 rounded-lg text-sm text-white transition-colors"
                        style={{ backgroundColor: '#1e40af' }}
                      >
                        {t.profile_save_changes}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Language section (single profile) */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: '#6b7280' }}
                  >
                    {t.profile_language_heading}
                  </h2>
                  {!editingLang && !children[0].languageChangeUsed && (
                    <button
                      onClick={startEditLangSingular}
                      className="text-xs font-semibold hover:underline underline-offset-2"
                      style={{ color: '#1e40af' }}
                    >
                      {t.profile_edit_language}
                    </button>
                  )}
                </div>

                {!editingLang ? (
                  <div>
                    <span
                      className="inline-block text-sm font-semibold px-3 py-1.5 rounded-lg"
                      style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
                    >
                      {LANGUAGE_LABELS[children[0].language]}
                    </span>
                    {children[0].languageChangeUsed && (
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                        {t.profile_language_change_used_note}
                      </p>
                    )}
                  </div>
                ) : (
                  <div>
                    <LanguageCards selected={draftLang} onSelect={setDraftLang} />
                    <div className="flex gap-3 mt-5">
                      <button
                        type="button"
                        onClick={() => setEditingLang(false)}
                        className="flex-1 border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                      >
                        {t.profile_cancel}
                      </button>
                      <button
                        type="button"
                        onClick={saveLangSingular}
                        className="flex-1 font-semibold py-2.5 rounded-lg text-sm text-white transition-colors"
                        style={{ backgroundColor: '#1e40af' }}
                      >
                        {t.profile_save_changes}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Subscription card */}
        <div
          className="bg-white rounded-2xl shadow-sm p-7"
          style={{ border: '1px solid #e5e7eb' }}
        >
          <h2
            className="text-xs font-bold uppercase tracking-widest mb-5"
            style={{ color: '#6b7280' }}
          >
            {t.profile_my_subscription_heading}
          </h2>
          {!PAYMENTS_ENABLED && user.childPlans.some(tier => tier !== 'free') && (
            <p
              className="text-xs font-semibold mb-4 px-3 py-2 rounded-lg"
              style={{ color: '#92400e', backgroundColor: '#fffbeb', border: '1px solid #fde68a' }}
            >
              {t.profile_subscription_paused_note}
            </p>
          )}
          <div className="flex flex-col gap-4">
            {children.map((child, i) => {
              const tier: Tier = user.childPlans[i] ?? 'free'
              const paidCount = user.childPlans.filter(pt => pt !== 'free').length
              const canDowngrade = tier !== 'free' && paidCount > 1
              return (
                <div
                  key={i}
                  className={!singularProfile && i < children.length - 1 ? 'pb-4' : ''}
                  style={!singularProfile && i < children.length - 1 ? { borderBottom: '1px solid #f3f4f6' } : undefined}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      {!singularProfile && (
                        <p className="text-xs font-semibold text-gray-500 mb-0.5">{child.name}</p>
                      )}
                      <p className="font-bold text-lg" style={{ color: '#0f1f3d' }}>
                        {tierLabel(tier)}
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5">{tierDesc(tier)}</p>
                    </div>
                    {tier === 'free' && (
                      <Link
                        href="/pricing"
                        className="shrink-0 text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-colors"
                        style={{ backgroundColor: '#1e40af' }}
                      >
                        {t.profile_upgrade}
                      </Link>
                    )}
                    {canDowngrade && downgradingIndex !== i && (
                      <button
                        onClick={() => { setDowngradingIndex(i); setDowngradeError(null) }}
                        className="shrink-0 text-xs font-semibold hover:underline underline-offset-2"
                        style={{ color: '#6b7280' }}
                      >
                        {t.profile_remove_child_link.replace('{name}', child.name)}
                      </button>
                    )}
                  </div>
                  {canDowngrade && downgradingIndex === i && (
                    <div className="mt-3 p-4 rounded-xl" style={{ backgroundColor: '#f8fafc', border: '1px solid #e5e7eb' }}>
                      <p className="text-sm text-gray-600 mb-2">
                        {t.profile_remove_child_confirm_body.replace('{name}', child.name)}
                      </p>
                      <p className="text-xs font-semibold mb-3" style={{ color: '#0f1f3d' }}>
                        {t.profile_remove_child_new_total_label}: R
                        {computeFamilyPrice(
                          user.childPlans.map((pt, pi) => (pi === i ? 'free' : pt)),
                          user.paystackFounding ?? { pro: false, max: false },
                        ).total}
                        {t.pricing_per_month}
                      </p>
                      {downgradeError && (
                        <p className="text-xs font-semibold mb-3" style={{ color: '#b91c1c' }}>{downgradeError}</p>
                      )}
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => { setDowngradingIndex(null); setDowngradeError(null) }}
                          disabled={downgradeInProgress}
                          className="flex-1 border border-gray-200 text-gray-600 font-semibold py-2 rounded-lg text-xs hover:bg-gray-50 transition-colors disabled:opacity-50"
                        >
                          {t.profile_cancel_subscription_keep}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDowngradeChild(i)}
                          disabled={downgradeInProgress}
                          className="flex-1 font-semibold py-2 rounded-lg text-xs text-white transition-colors disabled:opacity-50"
                          style={{ backgroundColor: '#b91c1c' }}
                        >
                          {downgradeInProgress ? t.profile_remove_child_in_progress : t.profile_remove_child_confirm}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          {user.subscriptionStatus === 'active' && user.childPlans.some(tier => tier !== 'free') && (() => {
            const { total, perChild } = computeFamilyPrice(user.childPlans, user.paystackFounding ?? { pro: false, max: false })
            const groups: { tier: Tier; price: number; count: number }[] = []
            perChild.forEach(({ tier, price }) => {
              if (tier === 'free') return
              const existing = groups.find(g => g.tier === tier && g.price === price)
              if (existing) existing.count += 1
              else groups.push({ tier, price, count: 1 })
            })
            const locale = user.children[0]?.language === 'af' ? 'af-ZA' : 'en-ZA'
            const nextBillingDate = addOneMonth(user.lastPaymentDate)
            return (
              <div className="mt-5 pt-5" style={{ borderTop: '1px solid #f3f4f6' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2.5" style={{ color: '#6b7280' }}>
                  {t.profile_billing_summary_heading}
                </p>
                {user.lastPaymentDate && user.lastPaymentAmount != null && (
                  <p className="text-xs text-gray-500 mb-1.5">
                    {t.profile_billing_last_payment
                      .replace('{amount}', `R${user.lastPaymentAmount}`)
                      .replace('{date}', new Date(user.lastPaymentDate).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' }))}
                  </p>
                )}
                <p className="text-sm font-semibold mb-1.5" style={{ color: '#0f1f3d' }}>
                  {t.profile_billing_next_date.replace(
                    '{date}',
                    nextBillingDate.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })
                  )}
                </p>
                <p className="text-sm font-semibold mb-1.5" style={{ color: '#0f1f3d' }}>
                  R{total}{t.pricing_per_month}
                </p>
                <p className="text-xs text-gray-500">
                  {groups
                    .map(g => t.profile_billing_breakdown_item
                      .replace('{count}', String(g.count))
                      .replace('{tier}', tierLabel(g.tier))
                      .replace('{price}', String(g.price)))
                    .join(' + ')}
                </p>
              </div>
            )
          })()}
          {user.subscriptionStatus === 'pending' && (
            <p className="text-xs font-semibold mt-4" style={{ color: '#1e40af' }}>
              {t.profile_subscription_pending}
            </p>
          )}
          {user.subscriptionStatus === 'past_due' && (
            <p className="text-xs font-semibold mt-4" style={{ color: '#b91c1c' }}>
              {t.profile_subscription_past_due}{' '}
              <Link href="/pricing" className="underline underline-offset-2">
                {t.profile_subscription_past_due_cta}
              </Link>
            </p>
          )}
          {user.subscriptionStatus === 'cancelling' && user.accessUntil && (
            <p className="text-xs font-semibold mt-4" style={{ color: '#b45309' }}>
              {t.profile_subscription_cancelling.replace(
                '{date}',
                new Date(user.accessUntil).toLocaleDateString(user.children[0]?.language === 'af' ? 'af-ZA' : 'en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })
              )}
            </p>
          )}
          {(user.subscriptionStatus === 'active' || user.subscriptionStatus === 'past_due') && user.childPlans.some(tier => tier !== 'free') && (
            <div className="mt-5 pt-5" style={{ borderTop: '1px solid #f3f4f6' }}>
              {!confirmingCancel ? (
                <button
                  onClick={() => setConfirmingCancel(true)}
                  className="text-xs font-semibold hover:underline underline-offset-2"
                  style={{ color: '#6b7280' }}
                >
                  {t.profile_cancel_subscription_link}
                </button>
              ) : (
                <div>
                  <p className="text-sm text-gray-600 mb-4">{t.profile_cancel_subscription_confirm_body}</p>
                  {cancelError && (
                    <p className="text-xs font-semibold mb-3" style={{ color: '#b91c1c' }}>{cancelError}</p>
                  )}
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => { setConfirmingCancel(false); setCancelError(null) }}
                      disabled={cancelInProgress}
                      className="flex-1 border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors disabled:opacity-50"
                    >
                      {t.profile_cancel_subscription_keep}
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelSubscription}
                      disabled={cancelInProgress}
                      className="flex-1 font-semibold py-2.5 rounded-lg text-sm text-white transition-colors disabled:opacity-50"
                      style={{ backgroundColor: '#b91c1c' }}
                    >
                      {cancelInProgress ? t.profile_cancel_subscription_in_progress : t.profile_cancel_subscription_confirm}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* My Children section */}
        {!singularProfile && (
        <div
          className="bg-white rounded-2xl shadow-sm p-7 mt-5"
          style={{ border: '1px solid #e5e7eb' }}
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6b7280' }}>
              {t.profile_my_children_heading}
            </h2>
            {!addingChild && editingChildIdx === null && (
              atChildLimit ? (
                <button
                  disabled
                  title={t.profile_upgrade_family_plan_tooltip}
                  className="text-xs font-semibold opacity-40 cursor-not-allowed"
                  style={{ color: '#6b7280' }}
                >
                  {t.profile_add_child_link}
                </button>
              ) : (
                <button
                  onClick={startAddChild}
                  className="text-xs font-semibold hover:underline underline-offset-2"
                  style={{ color: '#1e40af' }}
                >
                  {t.profile_add_child_link}
                </button>
              )
            )}
          </div>

          {children.length > 1 && (
            <div className="mb-5 pb-5" style={{ borderBottom: '1px solid #f3f4f6' }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#6b7280' }}>
                {t.profile_active_child_heading}
              </p>
              <p className="text-xs text-gray-400 mb-3">
                {t.profile_active_child_hint}
              </p>
              <div className="flex flex-wrap gap-2">
                {children.map((child, i) => {
                  const active = i === user.activeChildIndex
                  return (
                    <button
                      key={i}
                      onClick={() => updateActiveChild(i)}
                      className="px-4 py-2 rounded-full text-sm font-semibold border transition-all"
                      style={
                        active
                          ? { backgroundColor: '#1e40af', color: '#fff', borderColor: '#1e40af' }
                          : { backgroundColor: '#fff', color: '#374151', borderColor: '#d1d5db' }
                      }
                    >
                      {child.name}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {children.length === 0 && !addingChild && (
            <p className="text-sm text-gray-400">
              {t.profile_no_children_added}{' '}
              {!atChildLimit && (
                <button onClick={startAddChild} className="font-semibold hover:underline" style={{ color: '#1e40af' }}>
                  {t.profile_add_a_child}
                </button>
              )}
            </p>
          )}

          <div className="flex flex-col gap-3">
            {children.map((child, i) => (
              <div key={i} className="rounded-xl border p-4" style={{ borderColor: '#e5e7eb' }}>
                {editingChildIdx === i ? (
                  <div>
                    <div className="flex flex-col gap-3 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.profile_child_name_label}</label>
                        <input
                          type="text"
                          value={draftChildName}
                          onChange={e => setDraftChildName(e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.profile_grade_field_label}</label>
                        <select
                          value={draftChildGrade}
                          onChange={e => setDraftChildGrade(Number(e.target.value))}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors bg-white"
                        >
                          {GRADES.map(g => (
                            <option key={g} value={g}>{t.profile_grade_label.replace('{grade}', String(g))}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.profile_language_heading}</label>
                        {child.languageChangeUsed ? (
                          <div>
                            <span
                              className="inline-block text-sm font-semibold px-3 py-1.5 rounded-lg"
                              style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
                            >
                              {LANGUAGE_LABELS[child.language]}
                            </span>
                            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                              {t.profile_language_change_used_note}
                            </p>
                          </div>
                        ) : (
                          <LanguageCards selected={draftChildLanguage} onSelect={setDraftChildLanguage} />
                        )}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setEditingChildIdx(null)}
                        className="flex-1 border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                      >
                        {t.profile_cancel}
                      </button>
                      <button
                        type="button"
                        onClick={saveEditChild}
                        disabled={!draftChildName.trim()}
                        className="flex-1 font-semibold py-2.5 rounded-lg text-sm text-white transition-colors disabled:opacity-40"
                        style={{ backgroundColor: '#1e40af' }}
                      >
                        {t.profile_save}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold flex items-center gap-2" style={{ color: '#0f1f3d' }}>
                        {child.name}
                        {i === user.activeChildIndex && children.length > 1 && (
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
                          >
                            {t.profile_active_child_badge}
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {t.profile_grade_label.replace('{grade}', String(child.grade))} · {LANGUAGE_LABELS[child.language]}
                      </p>
                    </div>
                    <button
                      onClick={() => startEditChild(i)}
                      className="text-xs font-semibold hover:underline underline-offset-2"
                      style={{ color: '#1e40af' }}
                    >
                      {t.profile_edit}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {addingChild && (
            <div className={`${children.length > 0 ? 'mt-3' : ''} rounded-xl border p-4`} style={{ borderColor: '#e5e7eb' }}>
              {children.length > 0 && (
                <p className="text-xs font-semibold text-gray-500 mb-3">{t.profile_new_child}</p>
              )}
              <div className="flex flex-col gap-3 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.profile_child_name_label}</label>
                  <input
                    type="text"
                    value={newChildName}
                    onChange={e => setNewChildName(e.target.value)}
                    placeholder={t.profile_child_name_placeholder}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.profile_grade_field_label}</label>
                  <select
                    value={newChildGrade}
                    onChange={e => setNewChildGrade(Number(e.target.value))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors bg-white"
                  >
                    {GRADES.map(g => (
                      <option key={g} value={g}>{t.profile_grade_label.replace('{grade}', String(g))}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.profile_language_heading}</label>
                  <LanguageCards selected={newChildLanguage} onSelect={setNewChildLanguage} />
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setAddingChild(false)}
                  className="flex-1 border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                >
                  {t.profile_cancel}
                </button>
                <button
                  type="button"
                  onClick={saveNewChild}
                  disabled={!newChildName.trim()}
                  className="flex-1 font-semibold py-2.5 rounded-lg text-sm text-white transition-colors disabled:opacity-40"
                  style={{ backgroundColor: '#1e40af' }}
                >
                  {t.profile_add_child_submit}
                </button>
              </div>
            </div>
          )}
        </div>
        )}

        {/* Referral section — any account with at least one paid child. Gated
            on PAYMENTS_ENABLED too: while payments are paused, a childPlans
            entry can reflect a Paystack test-mode "purchase" that shouldn't
            unlock referral perks either. */}
        {PAYMENTS_ENABLED && user.childPlans.some(tier => tier !== 'free') && (
          <div
            className="bg-white rounded-2xl shadow-sm p-7 mt-5"
            style={{ border: '1px solid #e5e7eb' }}
          >
            {/* Heading */}
            <h2 className="text-xl font-bold mb-1.5" style={{ color: '#0f1f3d' }}>
              {t.profile_referral_heading}
            </h2>
            <p className="text-sm text-gray-500 mb-7 leading-relaxed">
              {t.profile_referral_subheading}
            </p>

            {/* Sharing options card */}
            <div className="rounded-xl border mb-6" style={{ borderColor: '#e5e7eb' }}>

              {/* Referral link */}
              <div className="p-5" style={{ borderBottom: '1px solid #f3f4f6' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#6b7280' }}>
                  {t.profile_referral_link}
                </p>
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg" style={{ backgroundColor: '#f8fafc', border: '1px solid #e5e7eb' }}>
                  <code className="flex-1 text-sm font-mono truncate" style={{ color: '#374151' }}>
                    {refCode ? referralUrl : '—'}
                  </code>
                  <button
                    onClick={copyLink}
                    disabled={!refCode}
                    className="shrink-0 text-xs font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                    style={
                      linkCopied
                        ? { backgroundColor: '#dcfce7', color: '#15803d', border: '1px solid #bbf7d0' }
                        : { backgroundColor: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe' }
                    }
                  >
                    {linkCopied ? t.profile_copied : t.profile_copy_link}
                  </button>
                </div>
              </div>

              {/* Referral code */}
              <div className="p-5" style={{ borderBottom: '1px solid #f3f4f6' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#6b7280' }}>
                  {t.profile_referral_code}
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <div
                    className="flex-1 min-w-0 flex items-center justify-center py-4 rounded-xl px-2"
                    style={{ backgroundColor: '#0f1f3d' }}
                  >
                    <span
                      className="text-xl sm:text-2xl font-bold tracking-[0.15em] sm:tracking-[0.2em]"
                      style={{ color: '#ffffff', fontFamily: 'monospace' }}
                    >
                      {refCode || '——'}
                    </span>
                  </div>
                  <button
                    onClick={copyCode}
                    disabled={!refCode}
                    className="shrink-0 text-xs font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                    style={
                      codeCopied
                        ? { backgroundColor: '#dcfce7', color: '#15803d', border: '1px solid #bbf7d0' }
                        : { backgroundColor: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe' }
                    }
                  >
                    {codeCopied ? t.profile_copied : t.profile_copy_code}
                  </button>
                </div>
              </div>

              {/* QR code */}
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#6b7280' }}>
                  {t.profile_qr_code}
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                  <div className="p-3 rounded-xl bg-white border inline-flex shrink-0" style={{ borderColor: '#e5e7eb' }}>
                    {refCode ? (
                      <QRCodeCanvas
                        id="referral-qr"
                        value={`https://${referralUrl}`}
                        size={120}
                        bgColor="#ffffff"
                        fgColor="#0f1f3d"
                      />
                    ) : (
                      <div style={{ width: 120, height: 120, backgroundColor: '#f3f4f6', borderRadius: 4 }} />
                    )}
                  </div>
                  <div className="flex flex-col gap-2 min-w-0">
                    <p className="text-xs text-gray-500 leading-relaxed sm:max-w-[180px]">
                      {t.profile_qr_scan_hint}
                    </p>
                    <button
                      onClick={downloadQR}
                      disabled={!refCode}
                      className="text-xs font-semibold px-4 py-2 rounded-lg transition-colors self-start"
                      style={{ backgroundColor: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe' }}
                    >
                      {t.profile_download_qr}
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Referral stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { label: t.profile_stat_referrals_used,   value: `${subscribedReferrals.length} of 12` },
                { label: t.profile_stat_referrals_remaining, value: String(Math.max(12 - subscribedReferrals.length, 0)) },
                { label: t.profile_stat_total_credit,      value: `R${totalCredit}` },
                { label: t.profile_stat_months_active,     value: '0'        },
              ].map(stat => (
                <div key={stat.label} className="rounded-xl p-4 text-center" style={{ backgroundColor: '#f3f4f6' }}>
                  <p className="text-xl font-bold mb-1" style={{ color: '#0f1f3d' }}>{stat.value}</p>
                  <p className="text-xs text-gray-400 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Referral history */}
            <div className="mb-6">
              <h3 className="text-sm font-bold mb-3" style={{ color: '#0f1f3d' }}>{t.profile_referral_history_heading}</h3>
              <div className="rounded-xl border overflow-hidden" style={{ borderColor: '#e5e7eb' }}>
                <div
                  className="hidden sm:grid px-4 py-2.5"
                  style={{
                    gridTemplateColumns: '1fr 1fr 1fr 90px',
                    gap: '8px',
                    backgroundColor: '#f9fafb',
                    borderBottom: '1px solid #f3f4f6',
                  }}
                >
                  {[t.profile_th_date, t.profile_th_friends_plan, t.profile_th_amount_credited, t.profile_th_status].map(h => (
                    <span key={h} className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#9ca3af' }}>
                      {h}
                    </span>
                  ))}
                </div>
                {referrals.length === 0 ? (
                  <div className="px-4 py-10 text-center">
                    <p className="text-sm text-gray-400">
                      {t.profile_no_referrals_yet}
                    </p>
                  </div>
                ) : (
                  referrals.map((r, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-2 sm:grid-cols-[1fr_1fr_1fr_90px] gap-2 px-4 py-3"
                      style={{ borderBottom: i < referrals.length - 1 ? '1px solid #f3f4f6' : undefined }}
                    >
                      <span className="text-sm" style={{ color: '#374151' }}>
                        {r.createdAt ? r.createdAt.toLocaleDateString() : '—'}
                      </span>
                      <span className="text-sm" style={{ color: '#374151' }}>
                        {r.referredName || '—'}
                        {r.subscribedTiers.some(tr => tr !== 'free')
                          ? ` · ${r.subscribedTiers.filter(tr => tr !== 'free').map(tierLabel).join(' + ')}`
                          : ''}
                      </span>
                      <span className="text-sm" style={{ color: '#374151' }}>
                        {r.hasSubscribed ? `R${r.creditAmount}` : '—'}
                      </span>
                      <span
                        className="text-xs font-semibold px-2 py-1 rounded-full self-start"
                        style={
                          r.hasSubscribed
                            ? { backgroundColor: '#dcfce7', color: '#15803d' }
                            : { backgroundColor: '#f3f4f6', color: '#6b7280' }
                        }
                      >
                        {r.hasSubscribed ? 'Subscribed' : 'Signed up'}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Next year preview */}
            <div
              className="rounded-xl p-4 flex items-start gap-3"
              style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#1e40af' }} aria-hidden="true">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t.profile_next_year_preview}
              </p>
            </div>

          </div>
        )}
      </main>
    </div>
  )
}
