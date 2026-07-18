import type { Tier } from './pricing'

// Live-session catalogue: the two bookable formats and their pricing.
// Shared by the booking API (server-side price computation — never trust the
// client), the public sessions list, and the live-classes page UI. The admin
// dashboard mirrors these values when scheduling.

export type SessionType = 'lesson' | 'crash'

export const SESSION_PRICE: Record<SessionType, number> = {
  lesson: 100, // 60 min, semi-interactive live lesson
  crash: 50,   // 30 min crash course on exam pitfalls — watch-only
}

export const SESSION_DURATION: Record<SessionType, number> = {
  lesson: 60,
  crash: 30,
}

// Lessons are capped so the group stays small enough for questions; crash
// courses are broadcast-style and uncapped (spots = 0 means no limit).
export const SESSION_DEFAULT_SPOTS: Record<SessionType, number> = {
  lesson: 10,
  crash: 0,
}

export const MAX_SESSION_DISCOUNT = 0.2

// Booking a spot doesn't require immediate payment — it holds the spot as a
// 'reserved' booking with a payment deadline. Inside this many hours of the
// session starting, there's no time left to defer: booking goes straight to
// Paystack instead (same as the old always-immediate-payment behaviour).
export const DEPOSIT_HOURS_BEFORE_START = 48

export function depositDeadlineFor(startsAt: Date): Date {
  return new Date(startsAt.getTime() - DEPOSIT_HOURS_BEFORE_START * 60 * 60 * 1000)
}

// A child on the Max tier books at 20% off; everyone else pays full price.
export function sessionPriceFor(type: SessionType, tier: Tier): number {
  const base = SESSION_PRICE[type]
  return tier === 'max' ? Math.round(base * (1 - MAX_SESSION_DISCOUNT)) : base
}

// The sanitized shape the public list API returns — everything a visitor may
// see. meetLink, notes and attendance stay server-side (paid students get the
// Meet link on their own booking doc and by email).
export type PublicSession = {
  id: string
  date: string // YYYY-MM-DD
  time: string // HH:MM
  durationMins: number
  grade: number
  topic: string
  description: string
  language: 'en' | 'af'
  type: SessionType
  price: number
  spots: number // 0 = uncapped
  bookedCount: number
}
