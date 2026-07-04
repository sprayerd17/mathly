'use client'

import { Suspense, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/app/providers'

// Landing point for referral links (mathly.co.za/join?ref=CODE, shown on the
// profile page's share card). Stashes the code for register() to attach via
// /api/referral/attach once the account actually exists, then sends the
// visitor straight into the register modal on the homepage.
function JoinRedirect() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { openModal } = useAuth()

  useEffect(() => {
    const refCode = searchParams.get('ref')
    if (refCode) {
      sessionStorage.setItem('mathly_pending_ref', refCode)
    }
    openModal('register')
    router.replace('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export default function JoinPage() {
  return (
    <Suspense fallback={null}>
      <JoinRedirect />
    </Suspense>
  )
}
