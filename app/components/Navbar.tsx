'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NavAuth from './NavAuth'
import { useAuth } from '@/app/providers'
import { useTranslations } from '@/src/i18n/useTranslations'

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

const logoMark = (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <rect x="11" y="1.5" width="13" height="13" rx="1.5" transform="rotate(45 11 11)" fill="#0f1f3d" />
    <rect x="11" y="5.5" width="7.8" height="7.8" rx="0.8" transform="rotate(45 11 11)" fill="white" />
    <circle cx="11" cy="11" r="1.6" fill="#1e40af" />
  </svg>
)

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const { user, loading, logout, openModal } = useAuth()
  const t = useTranslations()

  const lastScrollY = useRef(0)

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
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {logoMark}
            <span style={{ color: '#0f1f3d', fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '1.35rem', fontWeight: 600, letterSpacing: '0.01em' }}>
              Mathly
            </span>
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-5">
            {navLinks.map(({ key, href }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-1.5 text-sm font-medium transition-colors"
                  style={{ color: isActive ? '#1e40af' : '#0f1f3d' }}
                >
                  {t[key]}
                  {href === '/live-classes' && (
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
            {user && (
              <Link
                href="/dashboard"
                className="text-sm font-medium transition-colors"
                style={{ color: pathname === '/dashboard' ? '#1e40af' : '#0f1f3d' }}
              >
                {t.nav_dashboard}
              </Link>
            )}
          </nav>

          {/* Right: desktop auth + mobile hamburger */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <NavAuth />
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
        className={`fixed top-0 left-0 h-full w-72 z-30 flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
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
                onClick={close}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: isActive ? '#fff' : '#a8b8d8',
                  backgroundColor: isActive ? '#1e40af' : 'transparent',
                }}
              >
                {t[key]}
                {href === '/live-classes' && (
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
          {user && (
            <Link
              href="/dashboard"
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
              <div className="flex items-center gap-3 mb-4">
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
                onClick={close}
                className="block text-sm py-2 transition-colors"
                style={{ color: '#a8b8d8' }}
              >
                {t.nav_my_profile}
              </Link>
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
}
