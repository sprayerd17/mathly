# Mathly Launch-Readiness Audit

Date: 2026-07-26
Scope: full-site sweep across legal/privacy/compliance, UI/UX/accessibility, content/links/SEO, and remaining payment/security gaps. This follows a long series of prior hardening passes (see git history) — this report only covers what's still open.

Severity legend: **Critical** (fix before/immediately at launch) · **High** (fix soon after launch) · **Medium** (fix when convenient) · **Low** (nice-to-have / defensive)

---

## Critical

### 1. No custom 404 or error pages — ✅ FIXED
~~`app/not-found.tsx`, `app/error.tsx`, and `app/loading.tsx` don't exist anywhere in the App Router tree. Any mistyped/old URL (very likely — Mathly is shared a lot via WhatsApp links in SA) or a thrown render error shows Next.js's generic/blank fallback instead of a branded page with a way back into the site. Cheap to fix, high visibility impact.~~
Added all three: `app/not-found.tsx` (branded 404 with a "Back to home" link), `app/error.tsx` (client error boundary with retry + home links, logs the error), and `app/loading.tsx` (spinner). Both text pages are bilingual via the existing `useTranslations()` hook. Live-verified: a bad URL now renders the branded 404 page correctly.

---

## High

### 2. No account/child-data deletion mechanism — ✅ FIXED
~~The Privacy Policy (`app/privacy/page.tsx`, Section 10) promises users can "ask us to delete your account," but there is no self-service delete-account feature anywhere (`app/profile/page.tsx` only has cancel-subscription and remove-child) and no deletion API route under `app/api/`. This is a direct promise-vs-reality gap — POPIA deletion requests would currently have to be handled manually via the `hello@mathly.co.za` inbox with no defined internal process.~~
Added a self-service "Danger Zone" section to the bottom of the profile page, gated behind a two-step confirm (link → explicit "I understand this is permanent" checkbox → red confirm button), matching the app's existing confirm-dialog conventions. New route `app/api/account/delete/route.ts`: cancels any active/past-due Paystack subscription first (never deletes data while billing might still be live — same defensive doctrine as `cancel-subscription`), then `recursiveDelete`s the Firestore user doc and all its subcollections (testAnalysisReports/activityLog/studyProgress), best-effort cleans up `bookings`/`lessonRequests`/`referrals` docs that reference the uid, and finally deletes the Firebase Auth account. Deliberately does **not** touch `payments` (the webhook audit log) — Privacy Policy Section 8 already discloses the 5-year SA tax-law retention requirement for financial records, independent of account deletion. Privacy Policy Section 10 updated to reflect that deletion is now self-service. Client helper: `src/lib/account-client.ts`. Live-verified the confirm UI (checkbox correctly gates the button) — did not execute an actual deletion against the long-lived test account.

### 3. Missing Open Graph / Twitter card metadata — ✅ FIXED
~~`app/layout.tsx` only sets `title`/`description` in its `metadata` export — no `openGraph` or `twitter` block. A link to Mathly shared on WhatsApp or social media renders with no image and a bare title, which meaningfully hurts click-through given how much of the target audience shares links this way.~~
Added `openGraph` and `twitter` blocks to `app/layout.tsx`'s metadata export, plus `metadataBase` so relative image URLs resolve correctly. Uses the existing `public/logo-icon.png` (256×256) as the share image — a proper 1200×630 OG image would look better, but this is a real image where there was none before. Live-verified: `og:title`, `og:description`, `og:image`, `og:url`, `twitter:card`, and `twitter:image` all render correctly in the page head with absolute URLs.

---

## Medium

### 4. No named Information Officer — ✅ FIXED
~~The Privacy Policy (Section 1) gives only a contact email and describes Mathly as "operated by an individual trading as Mathly." POPIA (s55) requires a designated Information Officer, and SA data subjects/Information Regulator complaints expect a named individual, not just a mailbox. Easy fix — add "Divan Bosman is Mathly's Information Officer" (or similar) to Section 1.~~
Added "Divan Bosman is Mathly's Information Officer under POPIA" to `app/privacy/page.tsx` Section 1.

### 5. Waitlist page loads Google Analytics with no consent gate — ✅ FIXED
~~`waitlist/index.html` loads `gtag.js` (measurement ID `G-VWN7ZZQMN7`) unconditionally on page load, before any user action. The main Privacy Policy discloses this after the fact (Section 7, with an opt-out extension link), but that's not the same as a consent mechanism — if this static waitlist page is still publicly reachable/linked, non-essential analytics cookies are being set with no prior-consent gate. Low effort to fix (gate the script behind a simple consent click), low risk since it's a separate static page from the main app.~~
Removed the unconditional gtag script from `waitlist/index.html`'s `<head>`. Added a bottom cookie-consent banner (Accept/Decline) matching the page's existing colour scheme; the gtag script is now only injected after the visitor clicks Accept, gated behind a `localStorage` consent flag (`mathly_analytics_consent`) so the choice persists across visits. Declining still lets visitors join the waitlist normally. Live-verified in-browser: script injection, `window.gtag` presence, localStorage value, and banner dismissal all confirmed after clicking Accept.

### 6. AI Assistant chat panel overflows small phone screens — ✅ FIXED
~~`app/components/AIAssistant.tsx:481-495` fixes the panel at `width: '380px'`, `right: '28px'` with no responsive override. On any viewport narrower than ~436px — common entry-level Android phones at 360-375px wide, a realistic share of the SA market this app targets — the panel is wider than the screen and gets clipped off-screen to the left.~~
Changed the panel's inline style to `right: '16px'` and `width: 'min(380px, calc(100vw - 32px))'`, so it now shrinks to fit any viewport down to 60px wide instead of clipping off-screen.

### 7. Pervasive low-contrast gray text — ✅ FIXED
~~`text-gray-400` is used 68 times across 14 files (dashboard, profile, pricing, TopicTabs, live-classes, etc.) for body copy, stat labels, and helper text on white/light backgrounds. `gray-400` (#9ca3af) on white is roughly 2.8:1 contrast — well under the WCAG AA 4.5:1 minimum for normal text. This is a systemic pattern, not an isolated typo, and affects things users actually need to read (referral stats, empty-state copy, dates).~~
Bumped `text-gray-400` → `text-gray-500` (#6b7280, ~4.6:1 on white — passes WCAG AA) for every actual text-content occurrence across `app/grade/[grade]/[topic]/page.tsx`, `app/select-grade/page.tsx`, `app/dashboard/TestAnalysisPanel.tsx`, `app/dashboard/page.tsx`, `app/refer/page.tsx`, `app/components/TopicTabs.tsx`, `app/profile/page.tsx`, `app/pricing/page.tsx`, `app/pricing/FamilyPlanBuilder.tsx`, `app/live-classes/page.tsx`, `app/live-classes/RequestLessonCard.tsx`, `app/live-classes/SessionsBoard.tsx`, `app/grade/[grade]/page.tsx`, and `app/providers.tsx`. Deliberately left decorative icon-only glyphs (the lock icon on locked topic cards, the modal close-X button) at `gray-400`, since WCAG's non-text contrast threshold (3:1) is different and lower than the text threshold this finding is actually about. `tsc --noEmit` clean after the sweep.

### 8. Paystack/internal error text passed straight to the client — ✅ FIXED
~~`app/api/paystack/cancel-subscription/route.ts:61`, `downgrade-child/route.ts:86`, and `update-tiers/route.ts:146` all build error responses using `result.message` straight from `paystackRequest()` — either Paystack's raw API message or, on a network failure, the raw Node fetch/AbortSignal error string. This surfaces third-party API internals and infrastructure details to end users on any billing-amendment failure, which could help an attacker fingerprint the backend. Fix: keep logging `result.message` server-side, but return a fixed generic string to the client.~~
All three routes now return a fixed generic message to the client ("Could not process the cancellation/this change — please try again or contact support") instead of the raw Paystack/network error string. The detailed `result.message`/`status` is still logged server-side via `console.error` for debugging. Confirmed via grep that no other client-facing Response in these routes (or `checkout/route.ts`) leaks Paystack internals.

---

## Low

### 9. No unsubscribe link in emails — no action needed
Not currently a problem — every template in `src/lib/email.ts` today is transactional (welcome, receipts, booking confirmations, reminders, dunning), which doesn't legally require an opt-out. Flagging only so this isn't forgotten if a promotional/marketing template is ever added later.

### 10. Cross-border data transfer disclosure is thin — ✅ FIXED
~~Privacy Policy Section 6 says Firebase/Google Cloud and Anthropic "may process data on servers located outside South Africa" and relies on "their own safeguards," without naming specific countries/regions or citing POPIA s72's adequacy/binding-agreement basis. Not a blocker, but worth tightening.~~
Section 6 now names the United States as the relevant jurisdiction (both providers are US-headquartered) and explicitly cites POPIA section 72's adequacy/binding-agreement basis, stating that Mathly only engages processors who contractually commit to safeguards meeting that standard.

### 11. `/admin` has no redirect for non-admins — ✅ FIXED
~~A logged-out or non-admin visitor to `/admin` sees a bare "Not authorized." in the normal page layout rather than being redirected home. The actual security gate is correct and server-side (verified) — this is purely a UX dead-end, low priority since it's an internal single-operator tool by design.~~
Added a client-side redirect to `/` once auth state resolves and the signed-in user isn't `ADMIN_EMAIL`. Live-verified: visiting `/admin` logged out now lands on the homepage instead of showing the bare "Not authorized." text.

### 12. No focus-visible styling beyond text inputs — ✅ FIXED
~~Text inputs get an explicit `focus:ring-2`, but buttons/icon links rely on default browser focus outlines only, with no global `:focus-visible` styling. Not broken, just visually inconsistent during keyboard navigation.~~
Added a global `:focus-visible` rule in `app/globals.css` for `a`, `button`, and `[role="button"]` (2px solid `#1e40af` outline, 2px offset) — only shows for keyboard navigation, not mouse clicks. Live-verified via Tab key: the outline renders correctly on the first focusable link.

### 13. `/admin` missing from `robots.txt` disallow list — ✅ FIXED
~~`app/robots.ts` disallows `/api/`, `/dashboard`, `/profile`, `/pricing/success`, `/pricing/cancelled` but omits `/admin`. The page itself is auth-gated, but the URL could still get crawled/indexed. Cheap defense-in-depth fix.~~
Added `/admin` to the disallow list.

### 14. Confirm `PAYSTACK_CALLBACK_BASE_URL` is actually set in production — action needed from you
`app/api/paystack/checkout/route.ts:130` falls back to `http://localhost:3000` if the env var is missing, and `.env.example` documents that same localhost value as the example. This is a one-time manual check only you can do (Netlify env var dashboard, not something fixable in code) — please confirm the production value is actually `https://mathly.co.za` and isn't silently falling back to localhost.

### 15. No HTTP security headers configured — ✅ FIXED
~~No `headers()` block in `next.config.ts`, no `middleware.ts` — so there's no Content-Security-Policy, X-Frame-Options, Strict-Transport-Security, or X-Content-Type-Options at the app level (relying entirely on host/CDN defaults, if any). Lower priority than the payment/auth items, but a straightforward addition.~~
Added a `headers()` block to `next.config.ts` setting `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, `Strict-Transport-Security` (2yr, includeSubDomains, preload), and a restrictive `Permissions-Policy` (camera/microphone/geolocation all disabled) on every route. Live-verified via `fetch()` response headers. Deliberately did **not** add a Content-Security-Policy — getting one right requires enumerating every Firebase/Paystack/Google Meet/Resend origin the app actually calls, and a wrong directive fails silently (blocked requests, not build errors) rather than breaking loudly; that's a separate, more careful pass, not a quick addition.

---

## Verified clean — no action needed

These were explicitly checked and found to be in good shape, listed here so they aren't re-audited later:

- **Card data handling**: no raw card data ever touches Mathly's server — checkout redirects to Paystack's hosted `authorization_url`; the webhook only consumes signed, HMAC-verified server-to-server payloads.
- **Recurring billing disclosure**: consistent wording in `app/providers.tsx`, `app/pricing/FamilyPlanBuilder.tsx`, and Terms Sections 4–5; cancellation path is clear.
- **Refund policy**: clearly stated in Terms Sections 6 and 8, not buried.
- **Children's data & consent framing**: Privacy Policy Section 3 / Terms Section 2 correctly frame the parent/guardian as the consenting account holder.
- **Third-party processor disclosure**: Firebase/Google Cloud, Paystack, Resend, Anthropic, and Google Meet are all named with purpose in Privacy Policy Section 5.
- **Data retention & POPIA rights language**: present and reasonably specific in Privacy Policy Sections 8 and 10 (including Information Regulator complaint path).
- **API auth coverage**: every sensitive route under `app/api/` verifies a Firebase ID token, cron secret, or admin email server-side before acting; no client-only gates found.
- **Firestore rules**: no cross-user read/write path found; all server-managed billing/referral/usage fields are locked to Admin-SDK-only writes.
- **Client-side secrets**: only standard Firebase client config is exposed via `NEXT_PUBLIC_*`; no server secrets leaked into the bundle.
- **Error-leakage spot-check**: other than the Paystack-message case above, catch blocks log real errors server-side and return generic messages to the client.
- **Session/token-in-URL**: no sensitive tokens found in query strings; only a non-secret referral code (`?ref=`) appears in a URL, and it's already locked server-side against hijacking.
- **Placeholder/dead content**: no TODO/FIXME/lorem-ipsum/dead text found in source files.
- **Internal links**: every nav/footer link resolves to a real route; no broken links found.
- **Contact info consistency**: `hello@mathly.co.za` used consistently everywhere with no stale/placeholder addresses.
- **Sitemap/robots domain**: both correctly hardcode the real production domain, not a preview/localhost URL.
- **Legal page cross-references**: all internal section references (Terms/Privacy) point at the correct, current section numbers.
- **Pricing copy accuracy**: every displayed price (site-wide, both languages) matches `src/lib/pricing.ts` constants exactly.
- **Translation parity**: EN/AF parity is enforced at compile time via TypeScript typing on the translations object; confirmed clean `tsc --noEmit`.
- **Loading/error states on key flows**: checkout, login, registration, add-child, cancel-subscription, downgrade-child, and the AI assistant all have visible loading indicators and user-facing error messages, not silent failures.
- **Empty states**: new-user dashboard and zero-referrals profile states are deliberately designed, not blank/broken.
- **Heading hierarchy & mobile nav**: clean single-h1-per-page structure on all pages checked; mobile nav menu is complete.
