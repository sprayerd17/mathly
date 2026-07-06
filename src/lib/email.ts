// Transactional email via Resend's HTTP API (no SDK dependency). Dormant by
// design: without RESEND_API_KEY in the environment every send is a silent
// no-op, so the whole app keeps working before email is configured.
// Server-only — called from API routes (Admin SDK side), never the client.

const FROM = 'Mathly <payments@mathly.co.za>'
const OWNER = process.env.OWNER_ALERT_EMAIL ?? 'divanbosman06@gmail.com'

export async function sendEmail(to: string, subject: string, html: string): Promise<boolean> {
  const key = process.env.RESEND_API_KEY
  if (!key || !to) return false
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from: FROM, to: [to], subject, html }),
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
  return sendEmail(OWNER, subject, html)
}

// ── Templates ───────────────────────────────────────────────────────────────
// Deliberately simple, inline-styled HTML — renders fine everywhere.

const wrap = (body: string) => `
<div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:0 auto;padding:24px;color:#0f1f3d">
  <p style="font-size:20px;font-weight:bold;margin:0 0 20px">Mathly</p>
  ${body}
  <p style="font-size:12px;color:#9ca3af;margin-top:28px">Mathly · Extra maths, made simple. Questions? Reply to this email or write to mathlyweb@outlook.com.</p>
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
