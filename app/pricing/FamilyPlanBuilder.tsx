'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from '@/src/i18n/useTranslations'
import { useAuth } from '@/app/providers'
import { auth } from '@/src/lib/firebase'
import { initiateCheckout, updateTiers } from '@/src/lib/paystack-client'
import { FOUNDING_PRICE, FULL_PRICE, computeFamilyPrice, type Plan, type Tier } from '@/src/lib/pricing'
import { PAYMENTS_ENABLED } from '@/src/lib/launch-config'

function PlanSelect({
  value,
  onChange,
  prices,
  founding,
  labels,
  foundingSuffix,
  allowFree,
}: {
  value: Tier
  onChange: (v: Tier) => void
  prices: Record<Plan, number>
  founding: Record<Plan, boolean>
  labels: Record<Plan, string>
  foundingSuffix: string
  freeLabel?: string
  allowFree?: boolean
}) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value as Tier)}
      className="border rounded-lg px-3 py-2 text-sm bg-white font-medium w-full sm:w-auto sm:max-w-[220px]"
      style={{ borderColor: '#d1d5db', color: '#0f1f3d' }}
    >
      {allowFree && <option value="free">Free — R0/month</option>}
      <option value="pro">
        {`${labels.pro} — R${prices.pro}/month${founding.pro ? ' ' + foundingSuffix : ''}`}
      </option>
      <option value="max">
        {`${labels.max} — R${prices.max}/month${founding.max ? ' ' + foundingSuffix : ''}`}
      </option>
    </select>
  )
}

function FoundingBadge({ label }: { label: string }) {
  return (
    <span
      className="text-xs font-bold px-2 py-0.5 rounded-full"
      style={{ backgroundColor: '#dbeafe', color: '#1e3a8a', border: '1px solid #93c5fd' }}
    >
      {label}
    </span>
  )
}

export default function FamilyPlanBuilder() {
  const t = useTranslations()
  const { user, openModal } = useAuth()
  const LABEL: Record<Plan, string> = { pro: t.dash_package_pro, max: t.dash_package_max }
  const [mounted, setMounted] = useState(false)

  // Logged-out preview — purely illustrative (clicking "claim your spot" just
  // opens the register modal, which has its own per-child plan picker), so
  // this stays a free-form 1-3 toggleable comparison, pro/max only.
  const [c1, setC1]           = useState<Plan>('pro')
  const [c2On, setC2On]       = useState(false)
  const [c2, setC2]           = useState<Plan>('pro')
  const [c3On, setC3On]       = useState(false)
  const [c3, setC3]           = useState<Plan>('pro')

  // Logged-in checkout — the checkout API requires childTiers to align 1:1
  // with the account's actual children, so rows here are fixed to the real
  // family (no add/remove), one tier picker per existing child, defaulting
  // to whatever they're currently on.
  const [ownTiers, setOwnTiers] = useState<Tier[]>([])
  useEffect(() => {
    if (user) setOwnTiers(user.childPlans)
  }, [user])

  const [checkingOut, setCheckingOut]     = useState(false)
  const [checkoutError, setCheckoutError] = useState('')

  // Once a family already has an active subscription, re-submitting this
  // page must amend that subscription in place rather than starting a new
  // checkout — checkout unconditionally creates a brand-new Plan +
  // Transaction, which would leave the original subscription still billing
  // and double-charge any child who was already paid.
  const hasActiveSub = user?.subscriptionStatus === 'active' || user?.subscriptionStatus === 'past_due'

  useEffect(() => {
    setMounted(true)
  }, [])

  // Founding pricing is always offered client-side; the server is the sole
  // arbiter of real remaining capacity (settings/founding) and rejects
  // checkout if it's genuinely sold out — mirrors providers.tsx's register().
  const proFounding  = true
  const maxFounding   = true

  const prices: Record<Plan, number>    = {
    pro: proFounding ? FOUNDING_PRICE.pro : FULL_PRICE.pro,
    max:  maxFounding  ? FOUNDING_PRICE.max  : FULL_PRICE.max,
  }
  const founding: Record<Plan, boolean> = { pro: proFounding, max: maxFounding }

  const persons: { label: string; tier: Tier }[] = user
    ? user.children.map((c, i) => ({ label: c.name || `Person ${i + 1}`, tier: ownTiers[i] ?? 'free' }))
    : [
        { label: t.pricing_person_1_label, tier: c1 },
        ...(c2On ? [{ label: t.pricing_person_2_label, tier: c2 as Tier }] : []),
        ...(c3On ? [{ label: t.pricing_person_3_label, tier: c3 as Tier }] : []),
      ]
  const multiPerson = persons.length > 1

  const { total: grandTotal, perChild } = computeFamilyPrice(
    persons.map(p => p.tier),
    { pro: proFounding, max: maxFounding }
  )
  const personDetails = persons.map((p, i) => ({ label: p.label, ...perChild[i] }))
  const paidCount = persons.filter(p => p.tier !== 'free').length
  const noChange = hasActiveSub && !!user && persons.length === user.childPlans.length
    && persons.every((p, i) => p.tier === user.childPlans[i])
  const hasAnyDiscount = paidCount > 1 && personDetails.some(p => p.tier !== 'free' && !p.isFounding)
  const totalSaving = personDetails.reduce((sum, p) => {
    if (p.tier === 'free') return sum
    const base = p.isFounding ? FOUNDING_PRICE[p.tier] : FULL_PRICE[p.tier]
    return sum + (paidCount > 1 && !p.isFounding ? base - p.price : 0)
  }, 0)

  async function handleClaimSpot() {
    if (!user) {
      openModal('register')
      return
    }
    if (!auth.currentUser || paidCount === 0) return
    setCheckoutError('')
    setCheckingOut(true)
    try {
      if (hasActiveSub) {
        // Already subscribed — amend the existing Plan/childPlans directly
        // instead of starting a brand-new checkout, which would create a
        // duplicate subscription and double-bill any already-paid child.
        // If the total is increasing, updateTiers redirects to Paystack for
        // the incremental charge instead of returning — nothing to reload
        // in that case, the browser is navigating away.
        const result = await updateTiers(auth.currentUser, persons.map(p => p.tier))
        if (result) window.location.reload()
      } else {
        await initiateCheckout(auth.currentUser, persons.map(p => p.tier), founding)
      }
    } catch {
      // Always show the localized message — CheckoutError's own message is
      // English-only and meant for logs/debugging, not display.
      setCheckoutError(t.pricing_checkout_error)
      setCheckingOut(false)
    }
  }

  const p2Pro = proFounding ? prices.pro * 2 : Math.round(prices.pro * 0.8) * 2
  const p3Pro = proFounding ? prices.pro * 3 : Math.round(prices.pro * 0.8) * 3
  const p2Max  = maxFounding ? prices.max * 2  : Math.round(prices.max * 0.8) * 2
  const p3Max  = maxFounding ? prices.max * 3  : Math.round(prices.max * 0.8) * 3
  const pMixed = (proFounding ? prices.pro * 2 : Math.round(prices.pro * 0.8) * 2)
               + (maxFounding  ? prices.max      : Math.round(prices.max * 0.8))

  function slotBadgeAndSpots(tier: Tier) {
    if (!mounted || tier === 'free' || !founding[tier]) return null
    return <FoundingBadge label={t.pricing_founding_member_badge} />
  }

  return (
    <div>
      {/* Founding member note — shown while at least one plan is in founding period */}
      {(!mounted || proFounding || maxFounding) && (
        <div
          className="rounded-xl px-5 py-4 mb-6 max-w-2xl mx-auto"
          style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}
        >
          <p className="text-sm font-bold mb-2" style={{ color: '#0f1f3d' }}>
            {t.pricing_founding_explainer_heading}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {t.pricing_founding_explainer_body}
          </p>
          <p className="text-xs" style={{ color: '#9ca3af' }}>
            {t.pricing_founding_explainer_fine_print}
          </p>
        </div>
      )}

      {/* Tier comparison cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">

        {/* FREE */}
        <div className="rounded-xl p-5 bg-white flex flex-col" style={{ border: '1px solid #e5e7eb' }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#6b7280' }}>{t.dash_package_free}</p>
          <p className="text-2xl font-bold mb-4" style={{ color: '#0f1f3d' }}>
            R0<span className="text-sm font-normal text-gray-400"> {t.pricing_per_month}</span>
          </p>
          <ul className="flex-1 space-y-2.5 mb-5">
            {[
              t.pricing_free_feature_topics,
              t.pricing_free_feature_ai_assistant,
              t.pricing_free_feature_live_classes,
            ].map(f => (
              <li key={f} className="flex gap-2 text-xs leading-snug" style={{ color: '#4b5563' }}>
                <span className="shrink-0 font-bold mt-0.5" style={{ color: '#1e40af' }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* PRO */}
        <div className="rounded-xl p-5 bg-white flex flex-col" style={{ border: '2px solid #1e40af' }}>
          <div className="flex items-start justify-between gap-2 mb-1">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#1e40af' }}>{t.dash_package_pro}</p>
            {(!mounted || proFounding) && <FoundingBadge label={t.pricing_founding_member_badge} />}
          </div>
          <div className="mb-4">
            {(!mounted || proFounding) && (
              <p className="text-xs text-gray-400 line-through">R{FULL_PRICE.pro}{t.pricing_per_month}</p>
            )}
            <p className="text-2xl font-bold" style={{ color: '#0f1f3d' }}>
              R{prices.pro}<span className="text-sm font-normal text-gray-400"> {t.pricing_per_month}</span>
            </p>
          </div>
          <ul className="flex-1 space-y-2.5 mb-5">
            {[
              t.pricing_feature_study_guides,
              t.pricing_feature_practice_questions,
              t.pricing_feature_answers,
              t.pricing_pro_feature_ai_assistant,
              t.pricing_pro_feature_dashboard,
            ].map(f => (
              <li key={f} className="flex gap-2 text-xs leading-snug" style={{ color: '#4b5563' }}>
                <span className="shrink-0 font-bold mt-0.5" style={{ color: '#1e40af' }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* MAX */}
        <div className="rounded-xl p-5 bg-white flex flex-col" style={{ border: '1px solid #e5e7eb' }}>
          <div className="flex items-start justify-between gap-2 mb-1">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6b7280' }}>{t.dash_package_max}</p>
            {(!mounted || maxFounding) && <FoundingBadge label={t.pricing_founding_member_badge} />}
          </div>
          <div className="mb-4">
            {(!mounted || maxFounding) && (
              <p className="text-xs text-gray-400 line-through">R{FULL_PRICE.max}{t.pricing_per_month}</p>
            )}
            <p className="text-2xl font-bold" style={{ color: '#0f1f3d' }}>
              R{prices.max}<span className="text-sm font-normal text-gray-400"> {t.pricing_per_month}</span>
            </p>
          </div>
          <ul className="flex-1 space-y-2.5 mb-5">
            {[
              t.pricing_max_feature_everything_in_pro,
              t.pricing_max_feature_test_analyzer,
              t.pricing_max_feature_discount_live_classes,
              t.pricing_max_feature_exam_packs,
            ].map(f => (
              <li key={f} className="flex gap-2 text-xs leading-snug" style={{ color: '#4b5563' }}>
                <span className="shrink-0 font-bold mt-0.5" style={{ color: '#1e40af' }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="max-w-2xl mx-auto">
      {/* Builder card */}
      <div
        id="plan-builder"
        className="bg-white rounded-2xl shadow-sm p-8"
        style={{ border: '1px solid #e5e7eb' }}
      >
        <h3 className="text-lg font-bold mb-6" style={{ color: '#0f1f3d' }}>
          {t.pricing_choose_your_plan_heading}
        </h3>

        {/* Person rows */}
        <div className="mb-8">
          {user ? (
            // Logged in — one row per actual child, fixed count (add a child
            // from your profile page first if you need another slot).
            user.children.map((child, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 py-4"
                style={i < user.children.length - 1 ? { borderBottom: '1px solid #f3f4f6' } : undefined}
              >
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full self-start"
                  style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
                >
                  {child.name}
                </span>
                <div className="flex flex-col items-start sm:items-end gap-1 w-full sm:w-auto">
                  {slotBadgeAndSpots(ownTiers[i] ?? 'free')}
                  <PlanSelect
                    value={ownTiers[i] ?? 'free'}
                    onChange={tier => setOwnTiers(prev => prev.map((v, idx) => idx === i ? tier : v))}
                    prices={prices}
                    founding={founding}
                    labels={LABEL}
                    foundingSuffix={t.pricing_founding_suffix}
                    allowFree
                  />
                </div>
              </div>
            ))
          ) : (
            <>
              {/* Person 1 — always required */}
              <div
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 py-4"
                style={{ borderBottom: '1px solid #f3f4f6' }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
                  >
                    {t.pricing_person_1_label}
                  </span>
                  <span className="text-xs text-gray-400">{t.pricing_required_label}</span>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 w-full sm:w-auto">
                  {slotBadgeAndSpots(c1)}
                  <PlanSelect value={c1} onChange={tier => setC1(tier as Plan)} prices={prices} founding={founding} labels={LABEL} foundingSuffix={t.pricing_founding_suffix} />
                </div>
              </div>

              {/* Person 2 */}
              <div
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 py-4"
                style={{ borderBottom: '1px solid #f3f4f6' }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={c2On
                      ? { backgroundColor: '#dbeafe', color: '#1e40af' }
                      : { backgroundColor: '#f3f4f6', color: '#9ca3af' }
                    }
                  >
                    {t.pricing_person_2_label}
                  </span>
                  <button
                    onClick={() => setC2On(!c2On)}
                    className="text-xs font-semibold"
                    style={{ color: c2On ? '#b91c1c' : '#1e40af' }}
                  >
                    {c2On ? t.pricing_remove_person : t.pricing_add_person}
                  </button>
                </div>
                {c2On && (
                  <div className="flex flex-col items-start sm:items-end gap-1 w-full sm:w-auto">
                    {slotBadgeAndSpots(c2)}
                    <PlanSelect value={c2} onChange={tier => setC2(tier as Plan)} prices={prices} founding={founding} labels={LABEL} foundingSuffix={t.pricing_founding_suffix} />
                  </div>
                )}
              </div>

              {/* Person 3 */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 py-4">
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={c3On
                      ? { backgroundColor: '#dbeafe', color: '#1e40af' }
                      : { backgroundColor: '#f3f4f6', color: '#9ca3af' }
                    }
                  >
                    {t.pricing_person_3_label}
                  </span>
                  <button
                    onClick={() => setC3On(!c3On)}
                    className="text-xs font-semibold"
                    style={{ color: c3On ? '#b91c1c' : '#1e40af' }}
                  >
                    {c3On ? t.pricing_remove_person : t.pricing_add_person}
                  </button>
                </div>
                {c3On && (
                  <div className="flex flex-col items-start sm:items-end gap-1 w-full sm:w-auto">
                    {slotBadgeAndSpots(c3)}
                    <PlanSelect value={c3} onChange={tier => setC3(tier as Plan)} prices={prices} founding={founding} labels={LABEL} foundingSuffix={t.pricing_founding_suffix} />
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Running price summary */}
        <div
          className="rounded-xl p-5 mb-6"
          style={{ backgroundColor: '#f8fafc', border: '1px solid #e5e7eb' }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-wide mb-3"
            style={{ color: '#6b7280' }}
          >
            {t.pricing_monthly_total_label}
          </p>

          {/* Per-person breakdown */}
          <div className="flex flex-col gap-2 mb-4">
            {personDetails.map((p, i) => (
              <div key={i}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{p.label} — {p.tier === 'free' ? t.dash_package_free : LABEL[p.tier]}</span>
                  <span className="font-semibold" style={{ color: '#374151' }}>R{p.price}{t.pricing_per_month}</span>
                </div>
                {p.isFounding && (
                  <p className="text-xs mt-0.5" style={{ color: '#1e40af' }}>
                    {t.pricing_founding_rate_no_discount}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid #e5e7eb' }} className="pt-3">
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="text-3xl font-bold" style={{ color: hasAnyDiscount ? '#1e40af' : '#0f1f3d' }}>
                R{grandTotal}
              </span>
              <span className="text-sm text-gray-400">{t.pricing_per_month}</span>
            </div>
            {hasAnyDiscount ? (
              <p className="text-xs font-semibold" style={{ color: '#15803d' }}>
                {t.pricing_family_discount_applied.replace('{amount}', String(totalSaving))}
              </p>
            ) : multiPerson ? (
              <p className="text-xs text-gray-400">
                {t.pricing_all_slots_founding_rate}
              </p>
            ) : (
              <p className="text-xs text-gray-400">
                {t.pricing_add_second_person_prompt}
              </p>
            )}
          </div>
        </div>

        {checkoutError && (
          <p className="text-xs text-center mb-3 text-red-600">
            {checkoutError}
          </p>
        )}
        {!PAYMENTS_ENABLED && (
          <p className="text-xs text-center mb-3" style={{ color: '#92400e' }}>
            {t.pricing_payments_paused_note}
          </p>
        )}
        <button
          type="button"
          onClick={handleClaimSpot}
          disabled={checkingOut || (!!user && paidCount === 0) || noChange}
          className="block w-full text-center font-semibold py-3 rounded-xl text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: '#1e40af', color: '#fff' }}
        >
          {checkingOut
            ? (hasActiveSub ? t.pricing_plan_updating : t.pricing_checkout_redirecting)
            : (hasActiveSub ? t.pricing_update_plan : t.pricing_claim_your_spot)}
        </button>
      </div>

      {/* Price examples */}
      <div
        className="mt-5 rounded-xl px-5 py-4"
        style={{ backgroundColor: '#f3f4f6' }}
      >
        {[
          t.pricing_example_pro.replace('{p2}', String(p2Pro)).replace('{p3}', String(p3Pro)),
          t.pricing_example_max.replace('{p2}', String(p2Max)).replace('{p3}', String(p3Max)),
          t.pricing_example_mixed.replace('{amount}', String(pMixed)),
        ].map(ex => (
          <p key={ex} className="text-xs text-center py-0.5" style={{ color: '#9ca3af' }}>
            {ex}
          </p>
        ))}
      </div>
      </div>
    </div>
  )
}
