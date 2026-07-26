'use client'

import { useState, useRef, useEffect, useLayoutEffect, type RefObject } from 'react'
import { useTranslations } from '@/src/i18n/useTranslations'
import type { NavbarHandle } from './Navbar'

type Props = { onClose: () => void; navbarRef: RefObject<NavbarHandle | null> }

type Step = {
  kind: 'modal' | 'spotlight'
  headingKey: string
  bodyKey: string
  desktopId?: string
  mobileId?: string
  needsMobileMenu?: boolean
  needsAccountMenu?: boolean
}

// The nav-heading steps target the *real* nav elements (see the
// id="tour-nav-*" / id="tour-mobile-*" attributes in Navbar.tsx) rather than
// an abstract icon, so the desktop and mobile (hamburger-menu) variants need
// separate ids — they're literally different DOM nodes. needsMobileMenu/
// needsAccountMenu tell the engine below to open those panels via
// navbarRef before it measures the target's position.
const STEPS: Step[] = [
  { kind: 'modal', headingKey: 'tour_welcome_heading', bodyKey: 'tour_welcome_body' },
  { kind: 'spotlight', headingKey: 'tour_home_heading', bodyKey: 'tour_home_body',
    desktopId: 'tour-nav-nav_home', mobileId: 'tour-mobile-nav_home', needsMobileMenu: true },
  { kind: 'spotlight', headingKey: 'tour_dashboard_heading', bodyKey: 'tour_dashboard_body',
    desktopId: 'tour-nav-dashboard', mobileId: 'tour-mobile-dashboard', needsMobileMenu: true },
  { kind: 'spotlight', headingKey: 'tour_contact_heading', bodyKey: 'tour_contact_body',
    desktopId: 'tour-nav-nav_contact', mobileId: 'tour-mobile-nav_contact', needsMobileMenu: true },
  { kind: 'spotlight', headingKey: 'tour_account_heading', bodyKey: 'tour_account_body',
    desktopId: 'tour-nav-account', mobileId: 'tour-mobile-account', needsMobileMenu: true, needsAccountMenu: true },
  { kind: 'spotlight', headingKey: 'tour_subscription_heading', bodyKey: 'tour_subscription_body',
    desktopId: 'tour-subscription-section', mobileId: 'tour-subscription-section' },
  { kind: 'spotlight', headingKey: 'tour_profile_heading', bodyKey: 'tour_profile_body',
    desktopId: 'tour-children-section', mobileId: 'tour-children-section' },
  { kind: 'modal', headingKey: 'tour_closing_heading', bodyKey: 'tour_closing_body' },
]

const SPOTLIGHT_PAD = 8
const PANEL_TRANSITION_MS = 340
const SCROLL_SETTLE_MS = 400

function sleep(ms: number) {
  return new Promise<void>(resolve => setTimeout(resolve, ms))
}

function computeIsMobile() {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
}

type Rect = { top: number; left: number; width: number; height: number }

type TooltipPos = { top: number; left: number; arrowAtTop: boolean; arrowLeft: number }

function computeTooltipPos(rect: Rect, tw: number, th: number, vw: number, vh: number): TooltipPos {
  const GAP = 14
  const MARGIN = 16
  const spaceBelow = vh - rect.top - rect.height
  const placeBelow = spaceBelow >= th + GAP || spaceBelow >= rect.top
  let top = placeBelow ? rect.top + rect.height + GAP : rect.top - GAP - th
  top = Math.min(Math.max(MARGIN, top), Math.max(MARGIN, vh - th - MARGIN))
  let left = rect.left + rect.width / 2 - tw / 2
  left = Math.min(Math.max(MARGIN, left), Math.max(MARGIN, vw - tw - MARGIN))
  const arrowLeft = Math.min(Math.max(20, rect.left + rect.width / 2 - left), tw - 20)
  return { top, left, arrowAtTop: placeBelow, arrowLeft }
}

function SparkleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1e40af" className="w-7 h-7" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

// A real spotlight-style product tour: it highlights the actual nav bar
// items (or, on mobile, opens the hamburger menu first) with a dark cutout
// + an anchored tooltip bubble, then walks into the Subscription and My
// Kinders sections already on this page. navbarRef gives it imperative
// control (see NavbarHandle) over the mobile menu / account dropdown so it
// can open them for the steps that live inside those panels.
export default function OnboardingTour({ onClose, navbarRef }: Props) {
  const t = useTranslations()
  const [stepIndex, setStepIndex] = useState(0)
  const [rect, setRect] = useState<Rect | null>(null)
  const [tooltipPos, setTooltipPos] = useState<TooltipPos | null>(null)
  const [breakpointTick, setBreakpointTick] = useState(0)

  const tooltipRef = useRef<HTMLDivElement>(null)
  const currentTargetIdRef = useRef<string | null>(null)
  const transitionTokenRef = useRef(0)
  const panelStateRef = useRef({ mobileMenuOpen: false, accountMenuOpen: false })

  const step = STEPS[stepIndex]
  const isFirst = stepIndex === 0
  const isLast = stepIndex === STEPS.length - 1

  function closePanels() {
    navbarRef.current?.closeMobileMenu()
    navbarRef.current?.closeAccountMenu()
    panelStateRef.current = { mobileMenuOpen: false, accountMenuOpen: false }
  }

  function handleClose() {
    closePanels()
    onClose()
  }

  function next() {
    if (isLast) { handleClose(); return }
    setStepIndex(i => i + 1)
  }

  function back() {
    setStepIndex(i => Math.max(0, i - 1))
  }

  // Watch for the layout flipping across the mobile breakpoint mid-tour
  // (e.g. a tablet rotated) so the active step re-targets the right ids.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia('(max-width: 767px)')
    const handler = () => setBreakpointTick(v => v + 1)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => () => closePanels(), [])

  // Core state machine: for each step, open/close the mobile menu and/or
  // account dropdown as needed, wait out their transitions, scroll the
  // target into view, then measure it.
  useEffect(() => {
    let cancelled = false
    const token = ++transitionTokenRef.current

    async function run() {
      const mobile = computeIsMobile()
      const current = STEPS[stepIndex]

      const wantMobileMenu = current.kind === 'spotlight' && mobile && !!current.needsMobileMenu
      const wantAccountMenu = current.kind === 'spotlight' && !mobile && !!current.needsAccountMenu
      const prev = panelStateRef.current

      let waited = false
      if (wantMobileMenu !== prev.mobileMenuOpen) {
        if (wantMobileMenu) navbarRef.current?.openMobileMenu()
        else navbarRef.current?.closeMobileMenu()
        waited = true
      }
      if (wantAccountMenu !== prev.accountMenuOpen) {
        if (wantAccountMenu) navbarRef.current?.openAccountMenu()
        else navbarRef.current?.closeAccountMenu()
      }
      panelStateRef.current = { mobileMenuOpen: wantMobileMenu, accountMenuOpen: wantAccountMenu }

      if (waited) await sleep(PANEL_TRANSITION_MS)
      if (cancelled || token !== transitionTokenRef.current) return

      if (current.kind === 'modal') {
        currentTargetIdRef.current = null
        setRect(null)
        return
      }

      const targetId = mobile ? (current.mobileId ?? current.desktopId) : (current.desktopId ?? current.mobileId)
      currentTargetIdRef.current = targetId ?? null
      const el = targetId ? document.getElementById(targetId) : null
      if (!el) { setRect(null); return }

      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      await sleep(SCROLL_SETTLE_MS)
      if (cancelled || token !== transitionTokenRef.current) return

      const r = el.getBoundingClientRect()
      setRect({ top: r.top, left: r.left, width: r.width, height: r.height })
    }

    run()
    return () => { cancelled = true }
  }, [stepIndex, breakpointTick, navbarRef])

  // Keep the spotlight glued to its target while the page scrolls (the
  // smooth scrollIntoView above fires a burst of scroll events itself).
  useEffect(() => {
    if (step.kind !== 'spotlight') return
    let rafPending = false
    function onScroll() {
      if (rafPending) return
      rafPending = true
      requestAnimationFrame(() => {
        rafPending = false
        const id = currentTargetIdRef.current
        const el = id ? document.getElementById(id) : null
        if (el) {
          const r = el.getBoundingClientRect()
          setRect({ top: r.top, left: r.left, width: r.width, height: r.height })
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [step.kind])

  // Position the tooltip against the just-measured spotlight rect. Runs
  // before paint so there's no visible jump from the default guess position.
  useLayoutEffect(() => {
    if (!rect || !tooltipRef.current) {
      setTooltipPos(null)
      return
    }
    const tw = tooltipRef.current.offsetWidth
    const th = tooltipRef.current.offsetHeight
    setTooltipPos(computeTooltipPos(rect, tw, th, window.innerWidth, window.innerHeight))
  }, [rect])

  if (step.kind === 'modal') {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} aria-hidden="true" />
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
          <button
            onClick={handleClose}
            aria-label={t.auth_close_label}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md"
          >
            <CloseIcon />
          </button>

          <div className="px-8 pt-10 pb-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: '#eff6ff' }}>
              <SparkleIcon />
            </div>
            <h2 className="text-lg font-bold mb-2" style={{ color: '#0f1f3d' }}>
              {t[step.headingKey as keyof typeof t]}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              {t[step.bodyKey as keyof typeof t]}
            </p>

            <div className="flex items-center gap-1.5 mb-6" aria-hidden="true">
              {STEPS.map((_, i) => (
                <span
                  key={i}
                  className="rounded-full transition-all duration-200"
                  style={{ width: i === stepIndex ? '18px' : '6px', height: '6px', backgroundColor: i === stepIndex ? '#1e40af' : '#e5e7eb' }}
                />
              ))}
            </div>

            <div className="flex gap-3 w-full">
              {!isFirst && (
                <button
                  onClick={back}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-colors"
                  style={{ borderColor: '#e5e7eb', color: '#374151' }}
                >
                  {t.tour_back_button}
                </button>
              )}
              <button
                onClick={next}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors"
                style={{ backgroundColor: '#1e40af' }}
              >
                {isLast ? t.tour_done_button : t.tour_next_button}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const viewportW = typeof window !== 'undefined' ? window.innerWidth : 1280
  const tooltipWidth = Math.min(320, viewportW - 32)

  return (
    <>
      {/* Full-viewport click blocker — during the tour, real nav links stay
          unclickable so the user can't accidentally navigate away and tear
          down the Profile page (and the tour with it) mid-walkthrough. */}
      <div className="fixed inset-0" style={{ zIndex: 249, backgroundColor: rect ? 'transparent' : 'rgba(10,20,40,0.72)' }} />

      {rect && (
        <div
          style={{
            position: 'fixed',
            top: rect.top - SPOTLIGHT_PAD,
            left: rect.left - SPOTLIGHT_PAD,
            width: rect.width + SPOTLIGHT_PAD * 2,
            height: rect.height + SPOTLIGHT_PAD * 2,
            borderRadius: 12,
            boxShadow: '0 0 0 3px rgba(96,165,250,0.9), 0 0 0 9999px rgba(10,20,40,0.72)',
            transition: 'top .35s cubic-bezier(.4,0,.2,1), left .35s cubic-bezier(.4,0,.2,1), width .35s cubic-bezier(.4,0,.2,1), height .35s cubic-bezier(.4,0,.2,1)',
            pointerEvents: 'none',
            zIndex: 250,
          }}
        />
      )}

      <div
        ref={tooltipRef}
        className="bg-white rounded-2xl shadow-2xl p-5"
        style={{
          position: 'fixed',
          top: tooltipPos?.top ?? '40%',
          left: tooltipPos?.left ?? viewportW / 2 - tooltipWidth / 2,
          width: tooltipWidth,
          zIndex: 260,
          transition: tooltipPos ? 'top .35s cubic-bezier(.4,0,.2,1), left .35s cubic-bezier(.4,0,.2,1)' : undefined,
        }}
      >
        {tooltipPos && (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              width: 12,
              height: 12,
              left: tooltipPos.arrowLeft - 6,
              backgroundColor: '#ffffff',
              transform: 'rotate(45deg)',
              ...(tooltipPos.arrowAtTop
                ? { top: -6, boxShadow: '-1px -1px 2px rgba(0,0,0,0.06)' }
                : { bottom: -6, boxShadow: '1px 1px 2px rgba(0,0,0,0.06)' }),
            }}
          />
        )}

        <div className="flex items-start justify-between gap-3 mb-1.5">
          <h3 className="text-sm font-bold" style={{ color: '#0f1f3d' }}>
            {t[step.headingKey as keyof typeof t]}
          </h3>
          <button onClick={handleClose} className="text-xs font-medium text-gray-400 hover:text-gray-600 transition-colors shrink-0">
            {t.tour_skip_button}
          </button>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          {t[step.bodyKey as keyof typeof t]}
        </p>

        <div className="flex items-center gap-1.5 mb-4" aria-hidden="true">
          {STEPS.map((_, i) => (
            <span
              key={i}
              className="rounded-full transition-all duration-200"
              style={{ width: i === stepIndex ? '18px' : '6px', height: '6px', backgroundColor: i === stepIndex ? '#1e40af' : '#e5e7eb' }}
            />
          ))}
        </div>

        <div className="flex gap-2">
          {!isFirst && (
            <button
              onClick={back}
              className="flex-1 py-2 rounded-lg text-xs font-semibold border transition-colors"
              style={{ borderColor: '#e5e7eb', color: '#374151' }}
            >
              {t.tour_back_button}
            </button>
          )}
          <button
            onClick={next}
            className="flex-1 py-2 rounded-lg text-xs font-semibold text-white transition-colors"
            style={{ backgroundColor: '#1e40af' }}
          >
            {isLast ? t.tour_done_button : t.tour_next_button}
          </button>
        </div>
      </div>
    </>
  )
}
