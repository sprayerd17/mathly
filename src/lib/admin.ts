// The single account allowed to use /admin (tutor-only actions like
// cancelling a live session). A hardcoded literal rather than an env var —
// unlike OWNER_ALERT_EMAIL (just a destination for alert copies, freely
// reconfigurable), this must match one real Firebase Auth account's email
// exactly, and there's only ever one tutor running Mathly.
export const ADMIN_EMAIL = 'divanbosman06@gmail.com'
