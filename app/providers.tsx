'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
  type FormEvent,
} from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile as updateAuthProfile,
  type User as FirebaseUser,
} from 'firebase/auth'
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from '@/src/lib/firebase'
import { useTranslations } from '@/src/i18n/useTranslations'
import { initiateCheckout } from '@/src/lib/paystack-client'
import { computeFamilyPrice, FOUNDING_PRICE, type Tier, type FoundingStatus } from '@/src/lib/pricing'

// ─── Types ──────────────────────────────────────────────────────────────────

export type Language = 'en' | 'af'
export type { Tier } from '@/src/lib/pricing'

const VALID_TIERS: Tier[] = ['free', 'pro', 'guided']

export type Child = {
  name: string
  grade: number
  language: Language
  languageChangeUsed: boolean
}

// Billing state, driven entirely by the Paystack webhook and the
// cancel-subscription/expire-cancelled-subscriptions server routes — never
// written directly by the client. 'none' until the first successful payment.
// 'cancelling' means the user has cancelled but is still inside their paid
// period (childPlans stays unchanged); the expire-cancelled-subscriptions
// cron flips it to 'cancelled' and drops childPlans to free once
// accessUntil passes.
export type SubscriptionStatus = 'none' | 'pending' | 'active' | 'past_due' | 'cancelling' | 'cancelled'

const VALID_SUBSCRIPTION_STATUSES: SubscriptionStatus[] = ['none', 'pending', 'active', 'past_due', 'cancelling', 'cancelled']

export type User = {
  uid: string
  name: string
  email: string
  initial: string
  // Index-aligned with `children` — each child's own tier, independent of
  // the others (a family of 3 can mix Free/Pro/Guided freely). Kept as a
  // separate top-level field rather than nested in Child so Firestore rules
  // can protect it as a whole field, the same way `package` used to be
  // protected — there's no clean way to lock just one sub-field of an
  // array-of-maps element while leaving the rest (name/grade/language)
  // freely editable.
  childPlans: Tier[]
  children: Child[]
  refCode: string
  activeChildIndex: number
  subscriptionStatus: SubscriptionStatus
  // Captured off Paystack's subscription.create webhook event (and the
  // synchronous lookup right after signup succeeds) — customerCode is set
  // as soon as the first payment succeeds, subscriptionCode/emailToken once
  // Paystack finishes creating the subscription record. Both are required
  // to call Paystack's Disable Subscription endpoint at cancel time.
  paystackCustomerCode: string | null
  paystackSubscriptionCode: string | null
  paystackEmailToken: string | null
  // The Paystack Plan this family's subscription bills against — persisted
  // by the webhook's signup-success branch (via pendingPlanCode, set by
  // checkout right after createPlan()). Needed to call Paystack's Update
  // Plan endpoint when a child is downgraded off a paid tier.
  paystackPlanCode: string | null
  // Whether this family locked in founding pricing per tier at signup —
  // persisted permanently by the webhook (unlike pendingFounding, which is
  // nulled out once consumed). Needed to recompute the correct price via
  // computeFamilyPrice() after a child is downgraded, without silently
  // dropping a founding family to full price.
  paystackFounding: FoundingStatus | null
  pendingChildPlans: Tier[] | null
  lastPaymentDate: string | null
  lastPaymentAmount: number | null
  // Set by /api/paystack/cancel-subscription the moment a user cancels — the
  // date their already-paid period ends. Only meaningful while
  // subscriptionStatus is 'cancelling'; null otherwise.
  accessUntil: string | null
  // Set once, server-side, by /api/referral/attach right after registration.
  // null for accounts that didn't sign up via a referral link.
  referredBy: string | null
  // Index-aligned with `children` — each child gets exactly one free live-
  // session booking ever (of either format), to lower the barrier to trying
  // a session at all. A given index flips true server-side, by
  // /api/sessions/book, the first time that child claims it. Same
  // whole-field-lock reasoning as childPlans above.
  freeSessionClaimed: boolean[]
}

// Tier of the child currently driving site-wide content access — clamped the
// same way getActiveChild() clamps activeChildIndex, so a stale index never
// crashes a gating check.
export function getActiveTier(user: User): Tier {
  const idx = Math.min(Math.max(user.activeChildIndex, 0), user.childPlans.length - 1)
  return user.childPlans[idx] ?? 'free'
}

// Generates a referral code from the account holder's name — stable, persisted to
// Firestore on the user doc so it survives across devices and doesn't collide
// between accounts sharing a browser.
function generateRefCode(name: string): string {
  const namepart = name.replace(/[^a-zA-Z]/g, '').toUpperCase().slice(0, 6) || 'USER'
  const digits = String(Math.floor(1000 + Math.random() * 9000))
  return namepart + digits
}

// The child that currently drives site-wide language and grade browsing. Clamped
// so a stale index (e.g. after downgrading from 3 children to 2) never crashes.
export function getActiveChild(user: User): Child {
  const idx = Math.min(Math.max(user.activeChildIndex, 0), user.children.length - 1)
  return user.children[idx]
}

type AuthContextType = {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (
    name: string,
    email: string,
    password: string,
    childTiers: Tier[],
    children: Array<{ name: string; grade: number; language: Language }>,
    referredByCode?: string
  ) => Promise<void>
  logout: () => void
  updateChildren: (children: Child[]) => void
  addChild: (name: string, grade: number, language: Language) => Promise<void>
  updateActiveChild: (index: number) => void
  openModal: (tab?: 'login' | 'register') => void
}

// Maps Firebase Auth error codes to translation keys for the auth modal.
function authErrorKey(err: unknown): 'auth_error_invalid_credentials' | 'auth_error_email_in_use' | 'auth_error_weak_password' | 'auth_error_invalid_email' | 'auth_error_generic' {
  const code = (err as { code?: string })?.code ?? ''
  if (code === 'auth/invalid-credential' || code === 'auth/wrong-password' || code === 'auth/user-not-found') {
    return 'auth_error_invalid_credentials'
  }
  if (code === 'auth/email-already-in-use') return 'auth_error_email_in_use'
  if (code === 'auth/weak-password') return 'auth_error_weak_password'
  if (code === 'auth/invalid-email') return 'auth_error_invalid_email'
  return 'auth_error_generic'
}

// ─── Context ─────────────────────────────────────────────────────────────────

export const AuthContext = createContext<AuthContextType | null>(null)

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

const GRADES = [4, 5, 6, 7, 8, 9, 10, 11, 12]

// ─── Language cards ───────────────────────────────────────────────────────────

// Note: language names/descriptions are intentionally NOT routed through the
// active UI locale — each card always describes itself in its own language
// (e.g. "Afrikaans" / "Studiegidse in Afrikaans" regardless of current UI language).
const LANGUAGES: { code: Language; name: string; desc: string }[] = [
  { code: 'en', name: 'English',   desc: 'Study material in English' },
  { code: 'af', name: 'Afrikaans', desc: 'Studiegidse in Afrikaans'  },
]

export function LanguageCards({
  selected,
  onSelect,
}: {
  selected: Language | null
  onSelect: (lang: Language) => void
}) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {LANGUAGES.map(({ code, name, desc }) => {
        const active = selected === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => onSelect(code)}
            className="flex flex-col items-start gap-1 p-5 rounded-xl border text-left transition-all"
            style={
              active
                ? { backgroundColor: '#eff6ff', borderColor: '#1e40af', borderWidth: '2px' }
                : { backgroundColor: '#fff', borderColor: '#d1d5db', borderWidth: '1px' }
            }
          >
            <span
              className="font-bold text-sm"
              style={{ color: active ? '#1e40af' : '#0f1f3d' }}
            >
              {name}
            </span>
            <span className="text-xs text-gray-500">{desc}</span>
          </button>
        )
      })}
    </div>
  )
}

// ─── Auth Modal ───────────────────────────────────────────────────────────────

function AuthModal({
  onClose,
  onLogin,
  onRegister,
  initialTab = 'login',
}: {
  onClose: () => void
  onLogin: (email: string, password: string) => Promise<void>
  onRegister: (
    name: string,
    email: string,
    password: string,
    childTiers: Tier[],
    children: Array<{ name: string; grade: number; language: Language }>,
    referredByCode?: string
  ) => Promise<void>
  initialTab?: 'login' | 'register'
}) {
  const t = useTranslations()
  const [tab, setTab] = useState<'login' | 'register'>(initialTab)
  const [registerStep, setRegisterStep] = useState<1 | 2 | 3>(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // Pre-filled from a /join?ref= link (see app/join/page.tsx) when present,
  // but always shown and editable — not everyone arrives via the link, so
  // typing a code in by hand has to work just as well.
  const [referralCode, setReferralCode] = useState(
    () => (typeof window !== 'undefined' && sessionStorage.getItem('mathly_pending_ref')) || ''
  )
  const [planSize, setPlanSize] = useState<'solo' | 'family2' | 'family3'>('solo')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [redirecting, setRedirecting] = useState(false)
  const [regChildren, setRegChildren] = useState<Array<{ name: string; grade: number | ''; language: Language | null; tier: Tier }>>(
    [{ name: '', grade: '', language: null, tier: 'free' }]
  )

  // Indicative preview only (assumes founding pricing for both tiers, same as
  // the old PLAN_PRICE constant did) — the actual charge is always computed
  // and verified server-side at checkout time, never trusted from here.
  const pricePreview = computeFamilyPrice(regChildren.map(c => c.tier), { pro: true, guided: true })

  function switchTab(t: 'login' | 'register') {
    setTab(t)
    setRegisterStep(1)
    setError('')
  }

  async function handleStep1Submit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      setError(t.auth_error_fill_required)
      return
    }
    if (tab === 'register') {
      if (!name.trim()) {
        setError(t.auth_error_enter_name)
        return
      }
      setError('')
      setRegisterStep(2)
      return
    }
    setError('')
    setSubmitting(true)
    try {
      await onLogin(email.trim(), password)
      onClose()
    } catch (err) {
      setError(t[authErrorKey(err)])
    } finally {
      setSubmitting(false)
    }
  }

  function goToChildrenStep() {
    const count = planSize === 'family3' ? 3 : planSize === 'family2' ? 2 : 1
    setRegChildren(prev => {
      const next = Array.from({ length: count }, (_, i) => prev[i] ?? { name: '', grade: '', language: null, tier: 'free' as Tier })
      if (count === 1) next[0] = { ...next[0], name: name.trim() }
      return next
    })
    setError('')
    setRegisterStep(3)
  }

  async function handleComplete() {
    if (regChildren.some(c => !c.name.trim() || c.grade === '' || c.language === null)) {
      setError(t.auth_error_fill_child_details)
      return
    }
    const children = regChildren.map(c => ({
      name: c.name.trim(),
      grade: c.grade as number,
      language: c.language as Language,
    }))
    const childTiers = regChildren.map(c => c.tier)
    setError('')
    setSubmitting(true)
    // A paid plan means onRegister will end in a real browser navigation to
    // Paystack, which isn't instant — closing the modal before that navigation
    // actually happens would flash the logged-in site underneath for a few
    // seconds first. Show a dedicated redirect screen instead and just leave
    // it up; the page is about to unload anyway.
    const goingToCheckout = childTiers.some(t => t !== 'free')
    if (goingToCheckout) setRedirecting(true)
    try {
      await onRegister(name.trim(), email.trim(), password, childTiers, children, referralCode.trim())
      if (!goingToCheckout) onClose()
    } catch (err) {
      setError(t[authErrorKey(err)])
      setRedirecting(false)
    } finally {
      setSubmitting(false)
    }
  }

  const onRegisterStep = tab === 'register' && registerStep > 1

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={redirecting ? undefined : onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />

      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {redirecting ? (
          <div className="px-8 py-16 flex flex-col items-center text-center gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: '#1e40af transparent #1e40af #1e40af' }} />
            <h2 className="text-base font-bold" style={{ color: '#0f1f3d' }}>
              {t.auth_redirecting_title}
            </h2>
            <p className="text-xs text-gray-500 max-w-xs">
              {t.auth_redirecting_body}
            </p>
          </div>
        ) : (
        <>
        {/* ── Modal header ──────────────────────────────────────────────── */}
        <div className="px-8 pt-7 pb-0 shrink-0">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <img src="/logo-icon.png" width={24} height={24} alt="" aria-hidden="true" />
              <span
                style={{
                  color: '#0f1f3d',
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                }}
              >
                Mathly
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md"
              aria-label={t.auth_close_label}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Tab bar — hidden during register steps 2 & 3 */}
          {!onRegisterStep && (
            <div className="flex border-b border-gray-200">
              {(['login', 'register'] as const).map((tabOption) => (
                <button
                  key={tabOption}
                  onClick={() => switchTab(tabOption)}
                  className={`px-5 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
                    tab === tabOption
                      ? 'border-[#1e40af] text-[#1e40af]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tabOption === 'login' ? t.auth_login_tab : t.auth_register_tab}
                </button>
              ))}
            </div>
          )}

          {/* Step indicator — shown during register steps 2 & 3 */}
          {onRegisterStep && (
            <div className="flex items-center gap-2.5 pb-5 border-b border-gray-100">
              <div className="flex gap-1.5">
                {([1, 2, 3] as const).map((s) => (
                  <span
                    key={s}
                    className="w-6 h-1.5 rounded-full"
                    style={{ backgroundColor: s === registerStep ? '#1e40af' : '#e5e7eb' }}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-400">{t.auth_step_of.replace('{step}', String(registerStep))}</span>
            </div>
          )}
        </div>

        {/* ── Scrollable step content ──────────────────────────────────── */}
        <div className="overflow-y-auto flex-1">
        {/* ── Step 1: details ───────────────────────────────────────────── */}
        {registerStep === 1 && (
          <form onSubmit={handleStep1Submit} className="px-8 py-6 space-y-4">
            {tab === 'register' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.auth_full_name_label}</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.auth_full_name_placeholder}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.auth_email_label}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.auth_email_placeholder}
                autoComplete="email"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.auth_password_label}</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete={tab === 'login' ? 'current-password' : 'new-password'}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
              />
            </div>

            {tab === 'register' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t.auth_referral_code_label}
                </label>
                <input
                  type="text"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                  placeholder={t.auth_referral_code_placeholder}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
                />
              </div>
            )}

            {error && (
              <p className="text-red-600 text-xs bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-semibold py-3 rounded-lg text-sm transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? '…' : (tab === 'login' ? t.auth_login_submit_button : t.auth_next_button)}
            </button>

            <p className="text-center text-xs text-gray-500 pt-1">
              {tab === 'login' ? (
                <>
                  {t.auth_no_account_prompt}{' '}
                  <button
                    type="button"
                    onClick={() => switchTab('register')}
                    className="text-[#1e40af] hover:underline font-medium"
                  >
                    {t.auth_register_for_free}
                  </button>
                </>
              ) : (
                <>
                  {t.auth_have_account_prompt}{' '}
                  <button
                    type="button"
                    onClick={() => switchTab('login')}
                    className="text-[#1e40af] hover:underline font-medium"
                  >
                    {t.auth_login_tab}
                  </button>
                </>
              )}
            </p>
          </form>
        )}

        {/* ── Step 2: how many people ───────────────────────────────────── */}
        {registerStep === 2 && (
          <div className="px-8 py-6">
            <h2 className="text-base font-bold mb-1" style={{ color: '#0f1f3d' }}>
              {t.auth_plan_step_title}
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              {t.auth_plan_step_subtitle}
            </p>

            <div className="grid grid-cols-3 gap-2.5">
              {(['solo', 'family2', 'family3'] as const).map(size => {
                const active = planSize === size
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setPlanSize(size)}
                    className="py-3 px-2 rounded-xl text-xs font-semibold transition-all border text-center"
                    style={
                      active
                        ? { backgroundColor: '#eff6ff', color: '#1e40af', borderColor: '#1e40af', borderWidth: '2px' }
                        : { backgroundColor: '#fff', color: '#374151', borderColor: '#d1d5db' }
                    }
                  >
                    {size === 'solo' ? t.auth_plan_size_solo : size === 'family2' ? t.auth_plan_size_family2 : t.auth_plan_size_family3}
                  </button>
                )
              })}
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mt-4">
              {t.auth_plan_size_note}
            </p>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => setRegisterStep(1)}
                className="flex-1 border border-gray-200 text-gray-600 font-semibold py-3 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                {t.auth_back_button}
              </button>
              <button
                type="button"
                onClick={goToChildrenStep}
                className="flex-1 bg-[#1e40af] text-white font-semibold py-3 rounded-lg text-sm transition-colors shadow-sm"
              >
                {t.auth_continue_button}
              </button>
            </div>
          </div>
        )}

        {/* ── Step 3: grade + language per child ───────────────────────────── */}
        {registerStep === 3 && (
          <div className="px-8 py-6">
            <h2 className="text-base font-bold mb-1" style={{ color: '#0f1f3d' }}>
              {t.auth_children_step_title}
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              {t.auth_children_step_subtitle}
            </p>

            <div className="flex flex-col gap-6 mb-4">
              {regChildren.map((child, i) => (
                <div key={i} className={regChildren.length > 1 ? 'pb-6' : ''} style={regChildren.length > 1 && i < regChildren.length - 1 ? { borderBottom: '1px solid #f3f4f6' } : undefined}>
                  {regChildren.length > 1 && (
                    <span className="text-xs font-semibold text-gray-500 block mb-3">
                      {t.auth_child_label.replace('{number}', String(i + 1))}
                    </span>
                  )}
                  <div className="flex flex-col gap-3">
                    {regChildren.length > 1 && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {i === 0 ? t.auth_child_name_label_first : t.auth_child_name_label_other}
                        </label>
                        <input
                          type="text"
                          value={child.name}
                          onChange={e => setRegChildren(prev => prev.map((c, idx) => idx === i ? { ...c, name: e.target.value } : c))}
                          placeholder={t.auth_child_name_placeholder}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
                        />
                      </div>
                    )}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {regChildren.length > 1 ? t.auth_child_grade_label : t.auth_grade_label_solo}
                      </label>
                      <select
                        value={child.grade}
                        onChange={e => setRegChildren(prev => prev.map((c, idx) => idx === i ? { ...c, grade: e.target.value === '' ? '' : Number(e.target.value) } : c))}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors bg-white"
                      >
                        <option value="">{t.auth_select_grade_placeholder}</option>
                        {GRADES.map(g => (
                          <option key={g} value={g}>{t.auth_grade_label.replace('{grade}', String(g))}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t.auth_child_language_label}
                      </label>
                      <LanguageCards
                        selected={child.language}
                        onSelect={lang => setRegChildren(prev => prev.map((c, idx) => idx === i ? { ...c, language: lang } : c))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t.auth_child_plan_label}
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['free', 'pro', 'guided'] as const).map(tier => {
                          const active = child.tier === tier
                          const price = tier === 'free' ? 'R0' : `R${FOUNDING_PRICE[tier]}${t.pricing_per_month}`
                          const desc = tier === 'free' ? t.profile_plan_desc_free : tier === 'pro' ? t.profile_plan_desc_pro : t.profile_plan_desc_guided
                          return (
                            <button
                              key={tier}
                              type="button"
                              onClick={() => setRegChildren(prev => prev.map((c, idx) => idx === i ? { ...c, tier } : c))}
                              className="py-2.5 px-2 rounded-xl text-xs font-semibold transition-all border text-center flex flex-col items-center gap-0.5"
                              style={
                                active
                                  ? { backgroundColor: '#1e40af', color: '#fff', borderColor: '#1e40af' }
                                  : { backgroundColor: '#fff', color: '#374151', borderColor: '#d1d5db' }
                              }
                            >
                              <span>{tier === 'free' ? t.dash_package_free : tier === 'pro' ? t.dash_package_pro : t.dash_package_guided}</span>
                              <span className="text-[10px] font-normal" style={{ color: active ? '#dbeafe' : '#9ca3af' }}>{price}</span>
                            </button>
                          )
                        })}
                      </div>
                      <p className="text-[11px] text-gray-400 leading-relaxed mt-1.5">
                        {child.tier === 'free' ? t.profile_plan_desc_free : child.tier === 'pro' ? t.profile_plan_desc_pro : t.profile_plan_desc_guided}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {pricePreview.total > 0 && (
              <div className="flex items-center justify-between rounded-lg px-4 py-3 mb-4" style={{ backgroundColor: '#f8fafc', border: '1px solid #e5e7eb' }}>
                <span className="text-xs font-medium text-gray-500">{t.auth_plan_running_total_label}</span>
                <span className="text-sm font-bold" style={{ color: '#0f1f3d' }}>
                  R{pricePreview.total}{t.pricing_per_month}
                </span>
              </div>
            )}

            {error && (
              <p className="text-red-600 text-xs bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-4">
                {error}
              </p>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => { setError(''); setRegisterStep(2) }}
                className="flex-1 border border-gray-200 text-gray-600 font-semibold py-3 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                {t.auth_back_button}
              </button>
              <button
                type="button"
                onClick={handleComplete}
                disabled={submitting || regChildren.some(c => !c.name.trim() || c.grade === '' || c.language === null)}
                className="flex-1 bg-[#1e40af] text-white font-semibold py-3 rounded-lg text-sm transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {submitting ? '…' : t.auth_complete_registration_button}
              </button>
            </div>
          </div>
        )}
        </div>
        </>
        )}
      </div>
    </div>
  )
}

// ─── Provider ─────────────────────────────────────────────────────────────────

function sanitizeTier(raw: unknown): Tier {
  const lower = (raw as string | undefined)?.toLowerCase() ?? 'free'
  return (VALID_TIERS as string[]).includes(lower) ? (lower as Tier) : 'free'
}

// Missing or wrong-length childPlans defaults to all-free rather than trying
// to derive from anything legacy — there's no pre-existing data to migrate.
function sanitizeChildPlans(raw: unknown, childCount: number): Tier[] {
  const arr = Array.isArray(raw) ? raw.map(sanitizeTier) : []
  return Array.from({ length: childCount }, (_, i) => arr[i] ?? 'free')
}

// Missing or wrong-length freeSessionClaimed defaults to all-unclaimed —
// same reasoning as childPlans, and correct for accounts created before this
// field existed (nobody has claimed anything yet).
function sanitizeFreeSessionClaimed(raw: unknown, childCount: number): boolean[] {
  const arr = Array.isArray(raw) ? raw.map(v => v === true) : []
  return Array.from({ length: childCount }, (_, i) => arr[i] ?? false)
}

function sanitizeSubscriptionStatus(raw: unknown): SubscriptionStatus {
  const lower = (raw as string | undefined)?.toLowerCase() ?? 'none'
  return (VALID_SUBSCRIPTION_STATUSES as string[]).includes(lower) ? (lower as SubscriptionStatus) : 'none'
}

function sanitizePendingChildPlans(raw: unknown): Tier[] | null {
  if (raw == null || !Array.isArray(raw)) return null
  return raw.map(sanitizeTier)
}

function sanitizePaystackFounding(raw: unknown): FoundingStatus | null {
  const f = raw as Partial<FoundingStatus> | null | undefined
  if (!f || typeof f !== 'object') return null
  return { pro: f.pro === true, guided: f.guided === true }
}

// A child record as it may exist in Firestore before the language fields were added.
function sanitizeChild(raw: unknown): Child {
  const c = (raw ?? {}) as Partial<Child>
  return {
    name: c.name ?? '',
    grade: typeof c.grade === 'number' ? c.grade : 0,
    language: c.language === 'af' ? 'af' : 'en',
    languageChangeUsed: c.languageChangeUsed ?? false,
  }
}

// Builds our app-level User from a Firebase Auth user + their Firestore profile doc.
async function loadUser(fbUser: FirebaseUser): Promise<User> {
  const snap = await getDoc(doc(db, 'users', fbUser.uid))
  const data = snap.exists() ? snap.data() : {}
  const name: string = data.name || fbUser.displayName || fbUser.email?.split('@')[0] || ''

  // Self-heal accounts created before refCode was stored on the user doc.
  let refCode: string = data.refCode
  if (!refCode) {
    refCode = generateRefCode(name)
    try {
      await updateDoc(doc(db, 'users', fbUser.uid), { refCode })
    } catch {
      // best-effort — still usable this session even if the write fails
    }
  }

  const children: Child[] = Array.isArray(data.children) && data.children.length > 0
    ? data.children.map(sanitizeChild)
    : [sanitizeChild({ name, grade: 0, language: 'en', languageChangeUsed: false })]
  const rawActiveIndex = typeof data.activeChildIndex === 'number' ? data.activeChildIndex : 0
  const activeChildIndex = Math.min(Math.max(rawActiveIndex, 0), children.length - 1)

  return {
    uid: fbUser.uid,
    name,
    email: fbUser.email ?? data.email ?? '',
    initial: (name.charAt(0) || 'U').toUpperCase(),
    childPlans: sanitizeChildPlans(data.childPlans, children.length),
    children,
    refCode,
    activeChildIndex,
    subscriptionStatus: sanitizeSubscriptionStatus(data.subscriptionStatus),
    paystackCustomerCode: typeof data.paystackCustomerCode === 'string' ? data.paystackCustomerCode : null,
    paystackSubscriptionCode: typeof data.paystackSubscriptionCode === 'string' ? data.paystackSubscriptionCode : null,
    paystackEmailToken: typeof data.paystackEmailToken === 'string' ? data.paystackEmailToken : null,
    paystackPlanCode: typeof data.paystackPlanCode === 'string' ? data.paystackPlanCode : null,
    paystackFounding: sanitizePaystackFounding(data.paystackFounding),
    pendingChildPlans: sanitizePendingChildPlans(data.pendingChildPlans),
    lastPaymentDate: typeof data.lastPaymentDate === 'string' ? data.lastPaymentDate : null,
    lastPaymentAmount: typeof data.lastPaymentAmount === 'number' ? data.lastPaymentAmount : null,
    accessUntil: typeof data.accessUntil === 'string' ? data.accessUntil : null,
    referredBy: typeof data.referredBy === 'string' ? data.referredBy : null,
    freeSessionClaimed: sanitizeFreeSessionClaimed(data.freeSessionClaimed, children.length),
  }
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalInitialTab, setModalInitialTab] = useState<'login' | 'register'>('login')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      if (fbUser) {
        try {
          setUser(await loadUser(fbUser))
        } catch {
          setUser(null)
        }
      } else {
        setUser(null)
      }
      setLoading(false)
    })
    return unsubscribe
  }, [])

  async function login(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password)
  }

  async function register(
    name: string,
    email: string,
    password: string,
    childTiers: Tier[],
    childInputs: Array<{ name: string; grade: number; language: Language }>,
    referredByCode?: string
  ) {
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    await updateAuthProfile(cred.user, { displayName: name })
    const children: Child[] = childInputs.map(c => ({ ...c, languageChangeUsed: false }))
    const refCode = generateRefCode(name)
    // Every account is created all-free, regardless of the tiers chosen in
    // the wizard — Firestore rules only allow childPlans with no paid tier
    // on create. Paid tiers are granted afterwards by the Paystack webhook,
    // never here.
    const freeChildPlans: Tier[] = children.map(() => 'free')
    await setDoc(doc(db, 'users', cred.user.uid), {
      name,
      email,
      childPlans: freeChildPlans,
      subscriptionStatus: 'none',
      paystackCustomerCode: null,
      paystackSubscriptionCode: null,
      paystackEmailToken: null,
      paystackPlanCode: null,
      paystackFounding: null,
      pendingChildPlans: null,
      lastPaymentDate: null,
      lastPaymentAmount: null,
      accessUntil: null,
      children,
      refCode,
      activeChildIndex: 0,
      createdAt: serverTimestamp(),
    })
    setUser({
      uid: cred.user.uid,
      name,
      email,
      initial: (name.charAt(0) || 'U').toUpperCase(),
      childPlans: freeChildPlans,
      subscriptionStatus: 'none',
      paystackCustomerCode: null,
      paystackSubscriptionCode: null,
      paystackEmailToken: null,
      paystackPlanCode: null,
      paystackFounding: null,
      pendingChildPlans: null,
      lastPaymentDate: null,
      lastPaymentAmount: null,
      accessUntil: null,
      children,
      refCode,
      activeChildIndex: 0,
      referredBy: null,
      freeSessionClaimed: children.map(() => false),
    })

    // Was a referral code entered (typed in manually, or pre-filled from a
    // /join?ref= link) or otherwise pending in sessionStorage? Attach it now,
    // server-side — best-effort, an invalid/missing code or a failed request
    // should never block registration.
    const pendingRefCode = referredByCode?.trim() || sessionStorage.getItem('mathly_pending_ref')
    if (pendingRefCode) {
      sessionStorage.removeItem('mathly_pending_ref')
      try {
        const idToken = await cred.user.getIdToken()
        await fetch('/api/referral/attach', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ idToken, refCode: pendingRefCode }),
        })
      } catch {
        // best-effort — a missed referral attach isn't worth failing signup over
      }
    }

    // Best-effort welcome email — never block registration on it.
    try {
      const idToken = await cred.user.getIdToken()
      await fetch('/api/auth/welcome-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      })
    } catch {
      // best-effort — a missed welcome email isn't worth failing signup over
    }

    // Chosen any paid tier for any child? Immediately continue into checkout
    // instead of granting it for free. This redirects the browser to
    // Paystack on success. Founding pricing is hardcoded true here (matches prior
    // behavior) — the checkout route clamps to one of the two known prices
    // per tier regardless.
    if (childTiers.some(t => t !== 'free')) {
      await initiateCheckout(cred.user, childTiers, { pro: true, guided: true })
    }
  }

  async function logout() {
    await signOut(auth)
  }

  async function updateChildren(children: Child[]) {
    if (!user) return
    setUser({ ...user, children })
    try {
      await updateDoc(doc(db, 'users', user.uid), { children })
    } catch {
      // best-effort — local state already reflects the change
    }
  }

  async function updateActiveChild(index: number) {
    if (!user) return
    setUser({ ...user, activeChildIndex: index })
    try {
      await updateDoc(doc(db, 'users', user.uid), { activeChildIndex: index })
    } catch {
      // best-effort — local state already reflects the change
    }
  }

  // Growing the family goes through a server route rather than a direct
  // updateDoc — childPlans is fully client-write-protected (see
  // firestore.rules), so appending its new 'free' entry has to happen with
  // the Admin SDK. See app/api/family/add-child/route.ts.
  async function addChild(name: string, grade: number, language: Language) {
    if (!user) return
    const idToken = await auth.currentUser?.getIdToken()
    if (!idToken) return
    const res = await fetch('/api/family/add-child', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken, name, grade, language }),
    })
    if (!res.ok) throw new Error('Could not add child')
    const { children, childPlans } = await res.json()
    setUser({ ...user, children, childPlans })
  }

  return (
    <AuthContext.Provider
      value={{
        user, loading, login, register, logout, updateChildren, addChild, updateActiveChild,
        openModal: (tab) => { setModalInitialTab(tab ?? 'login'); setModalOpen(true) },
      }}
    >
      {children}
      {modalOpen && (
        <AuthModal
          onClose={() => setModalOpen(false)}
          onLogin={login}
          onRegister={register}
          initialTab={modalInitialTab}
        />
      )}
    </AuthContext.Provider>
  )
}
