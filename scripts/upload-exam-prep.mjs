// Uploads every PDF in exam-prep-source/ to Firebase Storage at
// exam-prep-bags/{filename-without-.pdf}.pdf, using the same Admin SDK
// credentials the app's server routes already use.
//
// Run from the project root with Node's built-in env-file support (no
// dotenv dependency needed):
//   node --env-file=.env.local scripts/upload-exam-prep.mjs
//
// The filename (minus .pdf) becomes the bag's id — must exactly match the
// `id` you use for that bag in src/lib/exam-prep.ts. Re-running overwrites
// whatever's already at that path, so updating a pack is just replacing the
// file and running this again.

import { readdirSync, statSync } from 'node:fs'
import { join, extname, basename } from 'node:path'
import { initializeApp, cert } from 'firebase-admin/app'
import { getStorage } from 'firebase-admin/storage'

const SOURCE_DIR = join(process.cwd(), 'exam-prep-source')

function collectPdfs(dir) {
  const out = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) out.push(...collectPdfs(full))
    else if (extname(entry).toLowerCase() === '.pdf') out.push(full)
  }
  return out
}

function main() {
  const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL
  const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
  if (!projectId || !clientEmail || !privateKey || !storageBucket) {
    console.error('Missing Firebase Admin env vars — run with: node --env-file=.env.local scripts/upload-exam-prep.mjs')
    process.exit(1)
  }

  const pdfs = collectPdfs(SOURCE_DIR)
  if (pdfs.length === 0) {
    console.log(`No PDFs found in ${SOURCE_DIR} — drop some in and re-run.`)
    return
  }

  initializeApp({ credential: cert({ projectId, clientEmail, privateKey }), storageBucket })
  const bucket = getStorage().bucket()

  let uploaded = 0
  const run = pdfs.reduce((p, filePath) => p.then(async () => {
    const id = basename(filePath, '.pdf')
    const dest = `exam-prep-bags/${id}.pdf`
    await bucket.upload(filePath, { destination: dest, metadata: { contentType: 'application/pdf' } })
    console.log(`Uploaded ${filePath} -> ${dest}`)
    uploaded++
  }), Promise.resolve())

  run.then(() => {
    console.log(`\nDone — ${uploaded} pack(s) uploaded.`)
    console.log('Remember: each bag id above must have a matching entry in src/lib/exam-prep.ts with comingSoon: false.')
  }).catch(err => {
    console.error('Upload failed:', err)
    process.exit(1)
  })
}

main()
