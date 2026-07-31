'use client'

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NavAuth, { type NavAuthHandle } from './NavAuth'
import TopicSearch from './TopicSearch'
import { useAuth, getActiveChild } from '@/app/providers'
import { useTranslations } from '@/src/i18n/useTranslations'
import { ADMIN_EMAIL } from '@/src/lib/admin'

// Imperative controls the onboarding tour (OnboardingTour.tsx) uses to open
// the mobile menu / account dropdown so it can spotlight real nav items —
// there's no other way to reach this component's internal open/close state
// from a sibling rendered elsewhere on the page.
export type NavbarHandle = {
  openMobileMenu: () => void
  closeMobileMenu: () => void
  openAccountMenu: () => void
  closeAccountMenu: () => void
}

const navLinks = [
  { key: 'nav_home',         href: '/'            },
  { key: 'nav_packages',     href: '/pricing'     },
  { key: 'nav_live_classes', href: '/live-classes' },
  { key: 'nav_contact',      href: '/contact'     },
] as const

function HamburgerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
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

function ChevronDoubleIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
      className="w-4 h-4 transition-transform duration-200" aria-hidden="true"
      style={{ transform: open ? 'none' : 'rotate(180deg)' }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 16.5L5.5 11l5.5-5.5M18.5 16.5L13 11l5.5-5.5" />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
    </svg>
  )
}

function PricingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
  )
}

function LiveClassesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
    </svg>
  )
}

function ContactIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
    </svg>
  )
}

function TopicsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  )
}

function DashboardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  )
}

const navIcons: Record<string, () => React.ReactElement> = {
  nav_home: HomeIcon,
  nav_packages: PricingIcon,
  nav_live_classes: LiveClassesIcon,
  nav_contact: ContactIcon,
}

const Navbar = forwardRef<NavbarHandle>(function Navbar(_props, ref) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, loading, logout, openModal } = useAuth()
  const t = useTranslations()
  const language = (user ? getActiveChild(user).language : 'en') as 'en' | 'af'
  const activeGrade = user ? String(getActiveChild(user).grade) : null
  const navAuthRef = useRef<NavAuthHandle>(null)
  const sidebarRef = useRef<HTMLElement>(null)

  // Desktop sidebar collapses back to icon-only on an outside click, same
  // pattern as NavAuth's dropdown — it's an overlay when expanded (doesn't
  // reflow page content), so nothing else signals "you're done with this."
  useEffect(() => {
    if (!sidebarOpen) return
    function onClickOutside(e: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) setSidebarOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [sidebarOpen])

  useImperativeHandle(ref, () => ({
    openMobileMenu: () => setMenuOpen(true),
    closeMobileMenu: () => setMenuOpen(false),
    openAccountMenu: () => navAuthRef.current?.open(),
    closeAccountMenu: () => navAuthRef.current?.close(),
  }), [])

  const lastScrollY = useRef(0)

  // Same endpoint the live-classes page itself uses to decide "Bookings
  // open" vs "Coming Soon" — without this the nav badge always said "Soon"
  // even once real sessions were scheduled and bookable below.
  const [hasSessions, setHasSessions] = useState(false)
  useEffect(() => {
    fetch('/api/sessions/list')
      .then(r => r.json())
      .then(d => setHasSessions(Array.isArray(d.sessions) && d.sessions.length > 0))
      .catch(() => {})
  }, [])

  useEffect(() => {
    function onScroll() {
      const current = window.scrollY
      if (current <= 0) {
        setVisible(true)
      } else if (current < lastScrollY.current) {
        setVisible(true)
      } else if (current > lastScrollY.current) {
        setVisible(false)
      }
      lastScrollY.current = current
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out"
        style={{
          backgroundColor: '#ffffff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-icon.png" width={26} height={26} alt="" aria-hidden="true" />
            <span style={{ color: '#0f1f3d', fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '1.35rem', fontWeight: 600, letterSpacing: '0.01em' }}>
              Mathly
            </span>
          </Link>

          {/* Centre: topic search — desktop only, fills the space the sidebar
              made available now that the logo isn't parked there. */}
          <div className="hidden md:block md:col-start-2 md:w-72">
            <TopicSearch language={language} activeGrade={activeGrade} />
          </div>

          {/* Right: desktop auth + mobile hamburger */}
          <div className="flex items-center md:col-start-3 md:justify-self-end">
            <div className="hidden md:block">
              <NavAuth ref={navAuthRef} />
            </div>
            <button
              className="md:hidden p-1.5 -mr-1.5 text-[#0f1f3d] hover:text-[#1e40af] transition-colors rounded-md"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer so page content starts below the fixed navbar */}
      <div className="h-[57px]" aria-hidden="true" />

      {/* ── Desktop collapsible side panel ───────────────────────────────────
          Prototype: overlays page content rather than reflowing it (no page
          file needs to change to make room for it) — collapsed to an
          icon-only rail by default, widens on click. Replaces the old
          horizontal nav-link row in the top bar. Spans the full viewport
          height (top-0) rather than starting below the header — the header
          (z-50, opaque white) already draws over its top 57px while visible,
          so this is what fills that strip with matching white the moment
          the header slides away on scroll, instead of leaving a gap. */}
      <aside
        ref={sidebarRef}
        className="hidden md:flex fixed left-0 top-0 bottom-0 z-40 flex-col pt-[57px] transition-all duration-200 ease-in-out overflow-hidden"
        style={{
          width: sidebarOpen ? '224px' : '64px',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e5e7eb',
          boxShadow: sidebarOpen ? '4px 0 24px rgba(0,0,0,0.08)' : 'none',
        }}
        aria-label="Desktop navigation"
      >
        <button
          onClick={() => setSidebarOpen(o => !o)}
          className="flex items-center gap-3 px-5 py-4 text-[#6b7280] hover:text-[#1e40af] transition-colors shrink-0"
          aria-label={sidebarOpen ? 'Collapse navigation' : 'Expand navigation'}
        >
          <ChevronDoubleIcon open={sidebarOpen} />
          {sidebarOpen && <span className="text-xs font-semibold uppercase tracking-widest whitespace-nowrap">Menu</span>}
        </button>

        <nav className="flex flex-col gap-1 px-3 pt-1">
          {navLinks.map(({ key, href }) => {
            const isActive = pathname === href
            const Icon = navIcons[key]
            return (
              <Link
                key={href}
                href={href}
                id={`tour-nav-${key}`}
                title={sidebarOpen ? undefined : t[key]}
                className="flex items-center gap-3 px-2.5 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
                style={{
                  color: isActive ? '#1e40af' : '#374151',
                  backgroundColor: isActive ? '#eff6ff' : 'transparent',
                }}
              >
                <Icon />
                {sidebarOpen && (
                  <span className="flex items-center gap-1.5 min-w-0">
                    {t[key]}
                    {href === '/live-classes' && !hasSessions && (
                      <span
                        className="text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0"
                        style={{ backgroundColor: '#dbeafe', color: '#1e3a8a' }}
                      >
                        {t.nav_coming_soon}
                      </span>
                    )}
                  </span>
                )}
              </Link>
            )
          })}
          {user && (() => {
            const myTopicsHref = `/grade/${getActiveChild(user).grade}`
            const isActive = pathname === myTopicsHref
            return (
              <Link
                href={myTopicsHref}
                id="tour-nav-my-topics"
                title={sidebarOpen ? undefined : t.nav_my_topics}
                className="flex items-center gap-3 px-2.5 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
                style={{
                  color: isActive ? '#1e40af' : '#374151',
                  backgroundColor: isActive ? '#eff6ff' : 'transparent',
                }}
              >
                <TopicsIcon />
                {sidebarOpen && <span>{t.nav_my_topics}</span>}
              </Link>
            )
          })()}
          {user && (
            <Link
              href="/dashboard"
              id="tour-nav-dashboard"
              title={sidebarOpen ? undefined : t.nav_dashboard}
              className="flex items-center gap-3 px-2.5 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
              style={{
                color: pathname === '/dashboard' ? '#1e40af' : '#374151',
                backgroundColor: pathname === '/dashboard' ? '#eff6ff' : 'transparent',
              }}
            >
              <DashboardIcon />
              {sidebarOpen && <span>{t.nav_dashboard}</span>}
            </Link>
          )}
        </nav>
      </aside>

      {/* ── Mobile overlay ──────────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 bg-black/50 z-20 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* ── Mobile sliding menu ─────────────────────────────────────────────── */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 z-[60] flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: '#0f1f3d' }}
        aria-label="Mobile navigation"
      >
        {/* Menu header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
          <span className="text-white text-xl tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Mathly
          </span>
          <button
            onClick={close}
            className="text-white/60 hover:text-white transition-colors rounded-md p-1"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-0.5 px-3 pt-5 pb-6 flex-1">
          {navLinks.map(({ key, href }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                id={`tour-mobile-${key}`}
                onClick={close}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: isActive ? '#fff' : '#a8b8d8',
                  backgroundColor: isActive ? '#1e40af' : 'transparent',
                }}
              >
                {t[key]}
                {href === '/live-classes' && !hasSessions && (
                  <span
                    className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{ backgroundColor: '#dbeafe', color: '#1e3a8a' }}
                  >
                    {t.nav_coming_soon}
                  </span>
                )}
              </Link>
            )
          })}
          {user && (() => {
            const myTopicsHref = `/grade/${getActiveChild(user).grade}`
            const isActive = pathname === myTopicsHref
            return (
              <Link
                href={myTopicsHref}
                id="tour-mobile-my-topics"
                onClick={close}
                className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: isActive ? '#fff' : '#a8b8d8',
                  backgroundColor: isActive ? '#1e40af' : 'transparent',
                }}
              >
                {t.nav_my_topics}
              </Link>
            )
          })()}
          {user && (
            <Link
              href="/dashboard"
              id="tour-mobile-dashboard"
              onClick={close}
              className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: pathname === '/dashboard' ? '#fff' : '#a8b8d8',
                backgroundColor: pathname === '/dashboard' ? '#1e40af' : 'transparent',
              }}
            >
              {t.nav_dashboard}
            </Link>
          )}
        </nav>

        {/* Auth at bottom */}
        <div className="px-5 pb-8 pt-5 border-t border-white/10">
          {loading ? null : user ? (
            <div>
              <div id="tour-mobile-account" className="flex items-center gap-3 mb-4 rounded-lg">
                <div className="w-9 h-9 rounded-full bg-[#1e40af] text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {user.initial}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{user.name}</p>
                  <p className="text-xs truncate" style={{ color: '#a8b8d8' }}>{user.email}</p>
                </div>
              </div>
              <Link
                href="/profile"
                id="tour-mobile-my-profile"
                onClick={close}
                className="block text-sm py-2 transition-colors"
                style={{ color: '#a8b8d8' }}
              >
                {t.nav_my_profile}
              </Link>
              <Link
                href="/profile#tour-referral-section"
                onClick={close}
                className="block text-sm py-2 transition-colors"
                style={{ color: '#a8b8d8' }}
              >
                {t.nav_refer_earn}
              </Link>
              {user.email === ADMIN_EMAIL && (
                <Link
                  href="/admin"
                  onClick={close}
                  className="block text-sm py-2 transition-colors"
                  style={{ color: '#a8b8d8' }}
                >
                  Admin
                </Link>
              )}
              <button
                onClick={() => { logout(); close() }}
                className="block text-sm py-2 text-red-400 hover:text-red-300 transition-colors"
              >
                {t.nav_log_out}
              </button>
            </div>
          ) : (
            <button
              onClick={() => { openModal(); close() }}
              className="w-full py-2.5 rounded-xl text-sm font-semibold border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              {t.nav_login}
            </button>
          )}
        </div>
      </aside>
    </>
  )
})

export default Navbar
