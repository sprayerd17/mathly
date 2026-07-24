import { timingSafeEqual } from 'crypto'
import type { NextRequest } from 'next/server'

// Each Netlify Scheduled Function (netlify/functions/cron-*.mts) calls its
// matching /api/cron/* route with `Authorization: Bearer <CRON_SECRET>` —
// see netlify/functions/lib/call-cron.ts. Every cron route checks against
// that convention. A plain !== comparison leaks timing information
// proportional to how many leading characters match, letting an attacker
// recover the secret byte-by-byte; timingSafeEqual compares in constant
// time instead.
export function isCronRequestAuthorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET
  if (!secret) return false
  const expected = Buffer.from(`Bearer ${secret}`)
  const received = Buffer.from(req.headers.get('authorization') ?? '')
  return expected.length === received.length && timingSafeEqual(expected, received)
}
