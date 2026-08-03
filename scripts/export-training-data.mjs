// READ-ONLY export of the in-house training-data corpus. This script never
// writes to, updates, or deletes any Firestore document — it only reads.
//
// `aiTrainingData` and `testAnalysisSubmissions` are locked collections
// (firestore.rules: `allow read, write: if false`) written only by the
// Firebase Admin SDK from server code. Nothing else in this repo reads them
// back out, so running this script is currently the ONLY way to get a
// backup/export of that corpus — treat its output as the backup, not just a
// convenience dump. There is no automated schedule for it; run it manually
// / periodically (e.g. before any migration, or on a regular cadence) to
// keep an off-Firestore copy.
//
// Output: one newline-delimited JSON (JSONL) file per collection, written
// into an output directory (default ./training-export/). Each line is one
// complete, self-contained record:
//   - aiTrainingData.jsonl        -> one line per aiTrainingData doc
//   - testAnalysisSubmissions.jsonl -> one line per submission doc, with its
//     `questions` subcollection docs nested under a `questions` array so
//     one line is one complete submission (no separate join needed later).
//
// Firestore Timestamp fields are converted to ISO 8601 strings (recursively,
// at any nesting depth) so the JSONL is portable and diffable outside of
// Firestore/Node.
//
// Run from the project root with Node's built-in env-file support:
//   node --env-file=.env.local scripts/export-training-data.mjs [outDir] [--since=YYYY-MM-DD]
//
// Examples:
//   node --env-file=.env.local scripts/export-training-data.mjs
//   node --env-file=.env.local scripts/export-training-data.mjs ./backups/2026-08-03
//   node --env-file=.env.local scripts/export-training-data.mjs --since=2026-07-01
//
// --since=YYYY-MM-DD limits the export to records whose top-level
// `createdAt` is on/after that date (inclusive), for incremental dumps.
// Docs that have no `createdAt` field at all are still exported when
// --since is omitted, but are SKIPPED when --since is given (their recency
// can't be verified) — a note is logged for each one skipped this way.

import { mkdirSync, createWriteStream } from 'node:fs'
import { join, resolve } from 'node:path'
import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore, Timestamp, FieldPath } from 'firebase-admin/firestore'

const BATCH_SIZE = 200

function parseArgs(argv) {
  let outDir = './training-export/'
  let since = null
  for (const arg of argv) {
    if (arg.startsWith('--since=')) {
      const raw = arg.slice('--since='.length)
      const parsed = new Date(`${raw}T00:00:00.000Z`)
      if (Number.isNaN(parsed.getTime())) {
        console.error(`Invalid --since value ${JSON.stringify(raw)} — expected YYYY-MM-DD.`)
        process.exit(1)
      }
      since = parsed
    } else if (!arg.startsWith('--')) {
      outDir = arg
    }
  }
  return { outDir, since }
}

// Recursively converts Firestore Timestamps (at any depth, including inside
// arrays and nested objects like `context`) into ISO 8601 strings. Leaves
// everything else untouched.
function convertValue(value) {
  if (value instanceof Timestamp) return value.toDate().toISOString()
  if (Array.isArray(value)) return value.map(convertValue)
  if (value && typeof value === 'object' && typeof value.toDate !== 'function' && value.constructor === Object) {
    const out = {}
    for (const [k, v] of Object.entries(value)) out[k] = convertValue(v)
    return out
  }
  return value
}

function docToRecord(doc) {
  return { id: doc.id, ...convertValue(doc.data()) }
}

// Pages through a top-level collection ordered by document id (works
// regardless of which fields any given doc has), applying an optional
// in-memory --since filter on a top-level `createdAt` field. Calls
// `onRecord` for each exported record and returns the total exported count
// plus the total scanned count.
async function exportCollection(db, collectionName, since, onRecord) {
  const collectionRef = db.collection(collectionName)
  let lastDoc = null
  let scanned = 0
  let exported = 0
  let skippedNoCreatedAt = 0

  for (;;) {
    let query = collectionRef.orderBy(FieldPath.documentId()).limit(BATCH_SIZE)
    if (lastDoc) query = query.startAfter(lastDoc)
    const snap = await query.get()
    if (snap.empty) break

    for (const doc of snap.docs) {
      scanned++
      const data = doc.data()
      if (since) {
        const createdAt = data.createdAt
        if (!(createdAt instanceof Timestamp)) { skippedNoCreatedAt++; continue }
        if (createdAt.toDate() < since) continue
      }
      await onRecord(doc)
      exported++
    }

    lastDoc = snap.docs[snap.docs.length - 1]
    console.log(`  [${collectionName}] scanned ${scanned}, exported ${exported}...`)
    if (snap.docs.length < BATCH_SIZE) break
  }

  if (skippedNoCreatedAt > 0) {
    console.log(`  [${collectionName}] skipped ${skippedNoCreatedAt} doc(s) with no createdAt (can't verify --since).`)
  }

  return { scanned, exported }
}

async function main() {
  const { outDir, since } = parseArgs(process.argv.slice(2))

  const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL
  const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n')
  if (!projectId || !clientEmail || !privateKey) {
    console.error(
      'Missing Firebase Admin env vars (FIREBASE_ADMIN_PROJECT_ID / FIREBASE_ADMIN_CLIENT_EMAIL / ' +
      'FIREBASE_ADMIN_PRIVATE_KEY) — run with: node --env-file=.env.local scripts/export-training-data.mjs',
    )
    process.exit(1)
  }

  const resolvedOutDir = resolve(process.cwd(), outDir)
  mkdirSync(resolvedOutDir, { recursive: true })
  console.log(`Exporting to ${resolvedOutDir}${since ? ` (since ${since.toISOString().slice(0, 10)})` : ''}`)

  initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) })
  const db = getFirestore()

  // --- aiTrainingData ---------------------------------------------------
  const aiTrainingPath = join(resolvedOutDir, 'aiTrainingData.jsonl')
  const aiTrainingStream = createWriteStream(aiTrainingPath, { encoding: 'utf8' })
  console.log('\nExporting aiTrainingData...')
  const aiTrainingResult = await exportCollection(db, 'aiTrainingData', since, async (doc) => {
    aiTrainingStream.write(JSON.stringify(docToRecord(doc)) + '\n')
  })
  await new Promise((res) => aiTrainingStream.end(res))

  // --- testAnalysisSubmissions (+ nested questions subcollection) -------
  const submissionsPath = join(resolvedOutDir, 'testAnalysisSubmissions.jsonl')
  const submissionsStream = createWriteStream(submissionsPath, { encoding: 'utf8' })
  console.log('\nExporting testAnalysisSubmissions (with nested questions)...')
  let totalQuestions = 0
  let uncertainQuestions = 0
  const submissionsResult = await exportCollection(db, 'testAnalysisSubmissions', since, async (doc) => {
    const record = docToRecord(doc)
    const questionsSnap = await doc.ref.collection('questions').get()
    const questions = questionsSnap.docs.map((qDoc) => {
      const q = docToRecord(qDoc)
      totalQuestions++
      if (q.uncertain === true) uncertainQuestions++
      return q
    })
    record.questions = questions
    submissionsStream.write(JSON.stringify(record) + '\n')
  })
  await new Promise((res) => submissionsStream.end(res))

  // --- Summary ------------------------------------------------------------
  console.log('\n=== Export summary ===')
  console.log(`aiTrainingData:            ${aiTrainingResult.exported} exported (${aiTrainingResult.scanned} scanned) -> ${aiTrainingPath}`)
  console.log(`testAnalysisSubmissions:   ${submissionsResult.exported} exported (${submissionsResult.scanned} scanned) -> ${submissionsPath}`)
  console.log(`  questions (nested):      ${totalQuestions} total, ${uncertainQuestions} flagged uncertain:true`)
}

main().catch((err) => {
  console.error('Export failed:', err)
  process.exit(1)
})
