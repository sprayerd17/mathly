'use client'

import { useState } from 'react'
import Link from 'next/link'
import NavAuth from '@/app/components/NavAuth'

const grades = [4, 5, 6, 7, 8, 9, 10, 11, 12]

function HamburgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const openSidebar = () => setSidebarOpen(true)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="min-h-screen text-gray-900" style={{ backgroundColor: '#f8fafc' }}>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-20 transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 z-30 flex flex-col transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: '#0f1f3d' }}
        aria-label="Grade navigation"
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
          <span
            className="text-white text-xl tracking-tight"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Mathly
          </span>
          <button
            onClick={closeSidebar}
            className="text-white/60 hover:text-white transition-colors rounded-md p-1"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="px-5 pt-6 pb-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300/50">
            Select Grade
          </p>
        </div>

        <nav className="flex flex-col gap-0.5 px-3 pb-6 overflow-y-auto">
          {grades.map((g) => (
            <Link
              key={g}
              href={`/grade/${g}`}
              onClick={closeSidebar}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-blue-100/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              Grade {g}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Navbar */}
      <header className="sticky top-0 z-10 backdrop-blur-sm border-b border-gray-100" style={{ backgroundColor: 'rgba(248,250,252,0.95)' }}>
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
          {/* Left: hamburger + brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={openSidebar}
              className="p-1.5 -ml-1.5 text-[#0f1f3d] hover:text-[#1e40af] transition-colors rounded-md"
              aria-label="Open menu"
            >
              <HamburgerIcon />
            </button>

            {/* Logo mark + brand name */}
            <div className="flex items-center gap-2">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <rect x="11" y="1.5" width="13" height="13" rx="1.5" transform="rotate(45 11 11)" fill="#0f1f3d" />
                <rect x="11" y="5.5" width="7.8" height="7.8" rx="0.8" transform="rotate(45 11 11)" fill="white" />
                <circle cx="11" cy="11" r="1.6" fill="#1e40af" />
              </svg>
              <span
                style={{
                  color: '#0f1f3d',
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '1.35rem',
                  fontWeight: 600,
                  letterSpacing: '0.01em',
                }}
              >
                Mathly
              </span>
            </div>
          </div>

          {/* Right: auth */}
          <NavAuth />
        </div>
      </header>

      {/* Hero */}
      <main className="relative flex flex-col items-center justify-center min-h-[calc(100vh-65px)] px-6 text-center overflow-hidden">

        {/* Atmospheric color blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #dbeafe 0%, transparent 70%)',
            opacity: 0.73,
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #bfdbfe 0%, transparent 70%)',
            opacity: 0.56,
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-0 w-[260px] h-[260px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #e0e7ff 0%, transparent 70%)',
            opacity: 0.5,
          }}
        />

        {/* Graph-paper grid SVG */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.163 }}
        >
          <defs>
            {/* Minor grid — 20px cells */}
            <pattern id="minor-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e40af" strokeWidth="0.5" />
            </pattern>
            {/* Major grid — 100px cells */}
            <pattern id="major-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#minor-grid)" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1e40af" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#major-grid)" />
        </svg>

        {/* Hero content */}
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block bg-blue-50 text-[#1e40af] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8 border border-blue-200">
            Grades 4 – 12 · Free to start
          </span>

          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            style={{ color: '#0f1f3d' }}
          >
            Master Maths,{' '}
            <span className="text-[#1e40af]">One Step</span>
            <br />
            at a Time
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg mx-auto">
            Clear explanations, worked examples, and practice problems — from fractions in
            Grade&nbsp;4 to calculus in Grade&nbsp;12.
          </p>

          <button
            onClick={openSidebar}
            className="inline-flex items-center gap-2 bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors shadow-sm hover:shadow-md"
          >
            Start Learning
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Wave divider */}
        <div aria-hidden="true" className="absolute bottom-0 left-0 w-full leading-none">
          <svg
            viewBox="0 0 1440 56"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full"
            style={{ display: 'block', height: '56px' }}
          >
            <path
              d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
              fill="#f1f5f9"
              fillOpacity="0.8"
            />
          </svg>
        </div>
      </main>
    </div>
  )
}
