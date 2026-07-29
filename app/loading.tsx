'use client'

import { useEffect } from 'react'

export default function Loading() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#f8fafc' }}>
      <div
        className="w-10 h-10 rounded-full border-4 animate-spin"
        style={{ borderColor: '#dbeafe', borderTopColor: '#1e40af' }}
        role="status"
        aria-label="Loading"
      />
    </div>
  )
}
