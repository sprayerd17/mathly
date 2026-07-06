// Transactional email via Resend's HTTP API (no SDK dependency). Dormant by
// design: without RESEND_API_KEY in the environment every send is a silent
// no-op, so the whole app keeps working before email is configured.
// Server-only — called from API routes (Admin SDK side), never the client.

const FROM_CLASSES = 'Mathly <classes@mathly.co.za>'
const FROM_PAYMENTS = 'Mathly <payments@mathly.co.za>'
const FROM_WELCOME = 'Mathly <welcome@mathly.co.za>'
const OWNER = process.env.OWNER_ALERT_EMAIL ?? 'divanbosman06@gmail.com'

export async function sendEmail(to: string, subject: string, html: string, from: string): Promise<boolean> {
  const key = process.env.RESEND_API_KEY
  if (!key || !to) return false
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to: [to], subject, html }),
    })
    if (!res.ok) {
      console.error('[email] Resend rejected send', res.status, await res.text().catch(() => ''))
      return false
    }
    return true
  } catch (err) {
    console.error('[email] send failed', err)
    return false
  }
}

export function sendOwnerAlert(subject: string, html: string) {
  return sendEmail(OWNER, subject, html, FROM_CLASSES)
}

// ── Templates ───────────────────────────────────────────────────────────────
// Deliberately simple, inline-styled HTML — renders fine everywhere.

const wrap = (body: string) => `
<div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:0 auto;padding:24px;color:#0f1f3d">
  <p style="font-size:20px;font-weight:bold;margin:0 0 20px">Mathly</p>
  ${body}
  <p style="font-size:12px;color:#9ca3af;margin-top:28px">Mathly · Extra maths, made simple. Questions? Reply to this email or write to support@mathly.co.za.</p>
</div>`

export function bookingConfirmedEmail(opts: {
  name: string
  childName: string
  topic: string
  date: string
  time: string
  durationMins: number
  amount: number
  meetLink: string
}) {
  return {
    from: FROM_CLASSES,
    subject: `You're booked: ${opts.topic} (${opts.date} at ${opts.time})`,
    html: wrap(`
      <p>Hi ${opts.name},</p>
      <p>Payment received — <strong>${opts.childName}</strong> is booked for:</p>
      <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:10px;padding:16px;margin:16px 0">
        <p style="margin:0;font-weight:bold">${opts.topic}</p>
        <p style="margin:6px 0 0;font-size:14px;color:#475569">${opts.date} at ${opts.time} · ${opts.durationMins} minutes</p>
        <p style="margin:6px 0 0;font-size:14px;color:#475569">Paid: R${opts.amount.toFixed(2)}</p>
        ${opts.meetLink
          ? `<p style="margin:12px 0 0"><a href="${opts.meetLink}" style="color:#1e40af;font-weight:bold">Join on Google Meet</a></p>`
          : `<p style="margin:12px 0 0;font-size:13px;color:#475569">The Google Meet link will appear on your account's live-classes page before the session.</p>`}
      </div>
      <p style="font-size:14px">See you there!</p>
    `),
  }
}

export function paymentReceiptEmail(opts: { name: string; amount: number; item: string }) {
  return {
    from: FROM_PAYMENTS,
    subject: `Payment received — R${opts.amount.toFixed(2)}`,
    html: wrap(`
      <p>Hi ${opts.name},</p>
      <p>We've received your payment of <strong>R${opts.amount.toFixed(2)}</strong> for <strong>${opts.item}</strong>. Your subscription is active.</p>
      <p style="font-size:14px">Thank you for being part of Mathly.</p>
    `),
  }
}

export function paymentFailedEmail(opts: { name: string }) {
  return {
    from: FROM_PAYMENTS,
    subject: 'Your Mathly payment didn\'t go through',
    html: wrap(`
      <p>Hi ${opts.name},</p>
      <p>Your latest Mathly subscription payment didn't complete, so your account is marked past due.</p>
      <p style="font-size:14px">Please check your payment method — you can restart the payment from the pricing page on the site. If you think this is a mistake, just reply to this email.</p>
    `),
  }
}

export function sessionReminderEmail(opts: {
  name: string
  childName: string
  topic: string
  date: string
  time: string
  durationMins: number
  meetLink: string
  window: '24h' | '1h'
}) {
  const whenPhrase = opts.window === '24h' ? 'tomorrow' : 'in about an hour'
  return {
    from: FROM_CLASSES,
    subject: opts.window === '24h'
      ? `Reminder: ${opts.topic} is tomorrow`
      : `Starting soon: ${opts.topic}`,
    html: wrap(`
      <p>Hi ${opts.name},</p>
      <p><strong>${opts.childName}</strong>'s live session is ${whenPhrase}:</p>
      <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:10px;padding:16px;margin:16px 0">
        <p style="margin:0;font-weight:bold">${opts.topic}</p>
        <p style="margin:6px 0 0;font-size:14px;color:#475569">${opts.date} at ${opts.time} · ${opts.durationMins} minutes</p>
        ${opts.meetLink
          ? `<p style="margin:12px 0 0"><a href="${opts.meetLink}" style="color:#1e40af;font-weight:bold">Join on Google Meet</a></p>`
          : `<p style="margin:12px 0 0;font-size:13px;color:#475569">The Google Meet link will appear on your live-classes page shortly before the session.</p>`}
      </div>
      <p style="font-size:14px">${opts.window === '1h' ? 'See you shortly!' : 'See you tomorrow!'}</p>
    `),
  }
}

export function welcomeEmail(opts: { name: string }) {
  return {
    from: FROM_WELCOME,
    subject: 'Welcome to Mathly!',
    html: wrap(`
      <p>Hi ${opts.name},</p>
      <p>Thanks for signing up — your account is ready to go.</p>
      <p style="font-size:14px">Head back to your dashboard any time to pick up where you left off. If you have any questions getting started, just reply to this email.</p>
    `),
  }
}

// ── Session reservations (book-now-pay-later) ───────────────────────────────

export function reservationHeldEmail(opts: {
  name: string
  childName: string
  topic: string
  date: string
  time: string
  amount: number
  depositDeadline: string
}) {
  const deadline = new Date(opts.depositDeadline)
  const deadlineLabel = deadline.toLocaleString('en-ZA', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
  return {
    from: FROM_CLASSES,
    subject: `Spot held: ${opts.topic} — pay by ${deadlineLabel} to keep it`,
    html: wrap(`
      <p>Hi ${opts.name},</p>
      <p><strong>${opts.childName}</strong>'s spot is reserved for:</p>
      <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:10px;padding:16px;margin:16px 0">
        <p style="margin:0;font-weight:bold">${opts.topic}</p>
        <p style="margin:6px 0 0;font-size:14px;color:#475569">${opts.date} at ${opts.time}</p>
        <p style="margin:6px 0 0;font-size:14px;color:#475569">Price: R${opts.amount.toFixed(2)}</p>
      </div>
      <p style="font-size:14px"><strong>Pay by ${deadlineLabel}</strong> to keep this spot — head to your live-classes page and tap "Pay now" on this booking. If payment isn't completed by then, the spot is automatically released for someone else.</p>
      <p style="font-size:14px">Changed your mind? You can cancel the reservation any time before the deadline from the same page — no payment means nothing to refund.</p>
    `),
  }
}

export function reservationExpiredEmail(opts: { name: string; childName: string; topic: string; date: string; time: string }) {
  return {
    from: FROM_CLASSES,
    subject: `Reservation expired: ${opts.topic}`,
    html: wrap(`
      <p>Hi ${opts.name},</p>
      <p><strong>${opts.childName}</strong>'s reserved spot for <strong>${opts.topic}</strong> (${opts.date} at ${opts.time}) has been released — payment wasn't completed before the deadline.</p>
      <p style="font-size:14px">If there's still space, you're welcome to book again from the live-classes page.</p>
    `),
  }
}

// ── Host cancels a session (refund handled manually by the coach) ──────────

export function sessionCancelledByHostEmail(opts: { name: string; childName: string; topic: string; date: string; time: string; wasPaid: boolean }) {
  return {
    from: FROM_CLASSES,
    subject: `Session cancelled: ${opts.topic}`,
    html: wrap(`
      <p>Hi ${opts.name},</p>
      <p>Unfortunately <strong>${opts.topic}</strong> (${opts.date} at ${opts.time}), which ${opts.childName} was booked into, has been cancelled.</p>
      <p style="font-size:14px">${opts.wasPaid
        ? 'A full refund will be processed back to your original payment method shortly.'
        : 'No payment was taken for this booking, so there\'s nothing to refund.'}</p>
      <p style="font-size:14px">Sorry for the inconvenience — we hope to see you at a future session.</p>
    `),
  }
}

// ── Subscription dunning (failed renewal follow-ups) ────────────────────────

export function paymentReminderEmail(opts: { name: string }) {
  return {
    from: FROM_PAYMENTS,
    subject: 'Reminder: your Mathly payment method needs updating',
    html: wrap(`
      <p>Hi ${opts.name},</p>
      <p>Your Mathly subscription payment still hasn't gone through. Your account remains past due.</p>
      <p style="font-size:14px">Please update your payment method from the pricing page to keep your access uninterrupted.</p>
    `),
  }
}

export function paymentFinalWarningEmail(opts: { name: string }) {
  return {
    from: FROM_PAYMENTS,
    subject: 'Final notice: your Mathly subscription will be cancelled soon',
    html: wrap(`
      <p>Hi ${opts.name},</p>
      <p>We still haven't been able to process your Mathly payment. <strong>Your subscription will be cancelled in 3 days</strong> if this isn't resolved.</p>
      <p style="font-size:14px">Update your payment method from the pricing page to avoid losing access.</p>
    `),
  }
}

export function subscriptionCancelledEmail(opts: { name: string }) {
  return {
    from: FROM_PAYMENTS,
    subject: 'Your Mathly subscription has been cancelled',
    html: wrap(`
      <p>Hi ${opts.name},</p>
      <p>Since payment couldn't be completed, your Mathly subscription has now been cancelled and your account has moved to the free tier.</p>
      <p style="font-size:14px">You're welcome back any time — just restart your subscription from the pricing page whenever you're ready.</p>
    `),
  }
}

// ── Waitlist launch announcement ────────────────────────────────────────────

export function launchAnnouncementEmail(opts: { name: string; grade: number }) {
  return {
    from: FROM_CLASSES,
    subject: `Live sessions are now open for Grade ${opts.grade}!`,
    html: wrap(`
      <p>Hi ${opts.name},</p>
      <p>You registered interest in live sessions for <strong>Grade ${opts.grade}</strong> — good news, they're now open for booking!</p>
      <p style="font-size:14px">Head to the live-classes page to see what's scheduled and grab a spot.</p>
    `),
  }
}
