'use client'

import { useState, useRef, useEffect } from 'react'
import { useAuth } from '@/app/providers'

export default function NavAuth() {
  const { user, logout, openModal } = useAuth()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  if (!user) {
    return (
      <button
        onClick={openModal}
        className="text-sm font-medium text-[#0f1f3d] border border-[#0f1f3d]/20 hover:border-[#1e40af] hover:text-[#1e40af] px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
      >
        Log in / Register
      </button>
    )
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setDropdownOpen((o) => !o)}
        className="w-9 h-9 rounded-full bg-[#1e40af] text-white text-sm font-bold flex items-center justify-center hover:bg-[#1d3a9e] transition-colors select-none"
        aria-label="Account menu"
        aria-expanded={dropdownOpen}
        aria-haspopup="true"
      >
        {user.initial}
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 z-[100] overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
            <p className="text-xs text-gray-500">Signed in as</p>
            <p className="text-sm font-semibold text-[#0f1f3d] truncate mt-0.5">{user.email}</p>
          </div>
          <div className="py-1">
            <button className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1e40af] transition-colors">
              My Profile
            </button>
            <button className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1e40af] transition-colors">
              My Subscription
            </button>
          </div>
          <div className="border-t border-gray-100 py-1">
            <button
              onClick={() => { logout(); setDropdownOpen(false) }}
              className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
