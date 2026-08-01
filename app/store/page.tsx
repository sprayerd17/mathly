'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { collection, getDocs, query, where } from 'firebase/firestore'
import Navbar from '@/app/components/Navbar'
import { useAuth, getActiveTier, getActiveChild } from '@/app/providers'
import { useTranslations } from '@/src/i18n/useTranslations'
import { auth, db } from '@/src/lib/firebase'
import { EXAM_PREP_BAGS, EXAM_PREP_BAG_PRICE, type ExamPrepBag } from '@/src/lib/exam-prep'
import { initiateExamPrepCheckout, getExamPrepDownloadUrl, CheckoutError } from '@/src/lib/paystack-client'

function BagIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  )
}

export default function StorePage() {
  const t = useTranslations()
  const { user, openModal } = useAuth()
  const [purchased, setPurchased] = useState<Set<string>>(new Set())
  const [busy, setBusy] = useState<{ id: string; action: 'buying' | 'downloading' } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [banner, setBanner] = useState(false)

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('payment')
    if (p === 'return') {
      setBanner(true)
      window.history.replaceState({}, '', window.location.pathname)
    }
  }, [])

  async function refreshPurchases(uid: string) {
    const snap = await getDocs(query(
      collection(db, 'examPrepPurchases'),
      where('uid', '==', uid),
      where('status', '==', 'paid'),
    ))
    setPurchased(new Set(snap.docs.map(d => d.data().bagId as string)))
  }
  useEffect(() => {
    if (!user) { setPurchased(new Set()); return }
    refreshPurchases(user.uid).catch(() => {})
  }, [user, banner])

  const isMax = user ? getActiveTier(user) === 'max' : false
  const language = user ? getActiveChild(user).language : 'en'
  // Signed-in accounts only ever see packs for their active child's grade —
  // a Grade 10 kid shouldn't be browsing (or buying) a Grade 12 pack.
  // Guests see everything, same reasoning as the navbar topic search: they
  // haven't picked a child yet, so there's no grade to scope to.
  const activeGrade = user ? getActiveChild(user).grade : null
  const visibleBags = useMemo(
    () => activeGrade ? EXAM_PREP_BAGS.filter(b => b.grades.includes(activeGrade)) : EXAM_PREP_BAGS,
    [activeGrade],
  )

  async function handleBuy(bag: ExamPrepBag) {
    if (!user) { openModal('login'); return }
    setError(null)
    setBusy({ id: bag.id, action: 'buying' })
    try {
      await initiateExamPrepCheckout(auth.currentUser!, bag.id, user.activeChildIndex)
      // Redirects away on success — no further state update needed here.
    } catch (err) {
      setError(err instanceof CheckoutError ? err.message : t.store_error_generic)
      setBusy(null)
    }
  }

  async function handleDownload(bag: ExamPrepBag) {
    if (!user) { openModal('login'); return }
    setError(null)
    setBusy({ id: bag.id, action: 'downloading' })
    try {
      const url = await getExamPrepDownloadUrl(auth.currentUser!, bag.id, user.activeChildIndex)
      window.open(url, '_blank', 'noopener,noreferrer')
    } catch (err) {
      setError(err instanceof CheckoutError ? err.message : t.store_error_generic)
    } finally {
      setBusy(null)
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-3" style={{ color: '#0f1f3d' }}>
            {t.store_hero_heading}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t.store_hero_subheading}
          </p>
        </div>

        {banner && (
          <div
            className="rounded-xl px-5 py-4 text-sm font-medium mb-8 text-center"
            style={{ backgroundColor: '#dcfce7', color: '#15803d', border: '1px solid #bbf7d0' }}
          >
            {t.store_payment_success_banner}
          </div>
        )}

        {error && (
          <div
            className="rounded-xl px-5 py-4 text-sm font-medium mb-8 text-center"
            style={{ backgroundColor: '#fee2e2', color: '#b91c1c', border: '1px solid #fecaca' }}
          >
            {error}
          </div>
        )}

        {isMax ? (
          <div className="rounded-xl px-5 py-4 text-sm font-semibold mb-10 text-center" style={{ backgroundColor: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe' }}>
            {t.store_max_banner}
          </div>
        ) : (
          <div className="rounded-xl px-6 py-5 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ backgroundColor: '#0f1f3d' }}>
            <p className="text-sm font-medium text-center sm:text-left" style={{ color: '#c3d1ea' }}>
              {t.store_upgrade_banner}
            </p>
            <Link
              href="/pricing"
              className="shrink-0 inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: '#1e40af' }}
            >
              {t.store_upgrade_cta}
            </Link>
          </div>
        )}

        {visibleBags.length === 0 ? (
          <p className="text-center text-gray-500 py-16">
            {activeGrade ? t.store_empty_state_grade.replace('{grade}', String(activeGrade)) : t.store_empty_state}
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-6">
            {visibleBags.map(bag => {
              const isPurchased = purchased.has(bag.id)
              const canDownload = !bag.comingSoon && (isMax || isPurchased)
              const isBusy = busy?.id === bag.id

              return (
                <div key={bag.id} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm flex flex-col">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#eff6ff', color: '#1e40af' }}>
                    <BagIcon />
                  </div>
                  <h2 className="text-lg font-bold mb-1.5" style={{ color: '#0f1f3d' }}>
                    {language === 'af' ? bag.titleAf : bag.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                    {language === 'af' ? bag.descriptionAf : bag.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {bag.grades.map(g => (
                      <span key={g} className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ backgroundColor: '#f1f5f9', color: '#374151' }}>
                        {t.topic_grade_value.replace('{grade}', String(g))}
                      </span>
                    ))}
                  </div>

                  {bag.comingSoon ? (
                    <span className="text-sm font-semibold text-center py-2.5 rounded-lg" style={{ backgroundColor: '#f1f5f9', color: '#6b7280' }}>
                      {t.store_coming_soon_badge}
                    </span>
                  ) : canDownload ? (
                    <>
                      {isMax && !isPurchased && (
                        <span className="text-xs font-semibold mb-2 text-center" style={{ color: '#1e40af' }}>{t.store_included_badge}</span>
                      )}
                      {isPurchased && (
                        <span className="text-xs font-semibold mb-2 text-center" style={{ color: '#15803d' }}>{t.store_purchased_badge} ✓</span>
                      )}
                      <button
                        type="button"
                        onClick={() => handleDownload(bag)}
                        disabled={isBusy}
                        className="w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-colors disabled:opacity-60"
                        style={{ backgroundColor: '#1e40af' }}
                      >
                        {isBusy && busy?.action === 'downloading' ? t.store_downloading : t.store_download_button}
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleBuy(bag)}
                      disabled={isBusy}
                      className="w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-colors disabled:opacity-60"
                      style={{ backgroundColor: '#1e40af' }}
                    >
                      {isBusy && busy?.action === 'buying' ? t.store_buying : t.store_buy_button.replace('{price}', String(EXAM_PREP_BAG_PRICE))}
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
