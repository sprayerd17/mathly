// Scans exam-prep-source/ for PDFs and ZIPs, uploads each to Firebase
// Storage at exam-prep-bags/{filename-without-extension}.{pdf|zip}, and
// regenerates src/lib/exam-prep.ts's EXAM_PREP_BAGS array from the
// filenames — that folder is the single source of truth, so re-running
// after adding/removing files keeps the store in sync automatically.
//
// A .zip is a multi-document pack (e.g. cheat sheet + practice test + memo
// bundled together as one purchase); a lone .pdf is a single-document pack.
// Either way, one file = one bag = one grade + one language.
//
// Run from the project root with Node's built-in env-file support (no
// dotenv dependency needed):
//   node --env-file=.env.local scripts/upload-exam-prep.mjs
//
// Filename convention (case-insensitive, order doesn't matter):
//   - Must contain a grade: "Grade 10", "Grade Ten", "Graad 10" all work
//     (English digits/words 4-12, or Afrikaans "Graad" + digit/word).
//   - Afrikaans packs: use "Graad" instead of "Grade", or add "Afrikaans"/
//     "AF" anywhere in the name. Everything else defaults to English.
//   - Whatever's left after removing the grade/language tokens becomes the
//     pack's title, exactly as typed (dashes/underscores become spaces).
//
// Examples:
//   Grade 10 - Term 3 Pack.zip             -> Grade 10, English, "Term 3 Pack" (bundle)
//   Graad 10 - Kwartaal 3 Pak.zip          -> Grade 10, Afrikaans, "Kwartaal 3 Pak" (bundle)
//   Grade 12 Cheat Sheet.pdf               -> Grade 12, English, "Cheat Sheet" (single file)

import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, extname, basename } from 'node:path'
import { initializeApp, cert } from 'firebase-admin/app'
import { getStorage } from 'firebase-admin/storage'

const SOURCE_DIR = join(process.cwd(), 'exam-prep-source')
const OUT_FILE = join(process.cwd(), 'src', 'lib', 'exam-prep.ts')
const ALLOWED_EXTS = ['.pdf', '.zip']

const EN_WORDS = { four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12 }
const AF_WORDS = { vier: 4, vyf: 5, ses: 6, sewe: 7, agt: 8, nege: 9, tien: 10, elf: 11, twaalf: 12 }

function collectFiles(dir) {
  const out = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) out.push(...collectFiles(full))
    else if (ALLOWED_EXTS.includes(extname(entry).toLowerCase())) out.push(full)
  }
  return out
}

// Returns null if no grade 4-12 could be found — caller skips the file and
// flags it, rather than silently guessing.
function parseFilename(filePath) {
  const ext = extname(filePath).toLowerCase().slice(1) // 'pdf' | 'zip'
  const raw = basename(filePath, extname(filePath))
  const lower = raw.toLowerCase()

  const isAfrikaans = /\bgraad\b/.test(lower) || /\bafrikaans\b/.test(lower) || /\baf\b/.test(lower)

  let grade = null
  let matchText = null

  const digitMatch = lower.match(/\b(?:grade|graad)\s*-?\s*(\d{1,2})(?!\d)/)
  if (digitMatch && Number(digitMatch[1]) >= 4 && Number(digitMatch[1]) <= 12) {
    grade = Number(digitMatch[1])
    matchText = digitMatch[0]
  } else {
    const wordMap = isAfrikaans ? AF_WORDS : EN_WORDS
    const gradeWord = isAfrikaans ? 'graad' : 'grade'
    for (const [word, num] of Object.entries(wordMap)) {
      const re = new RegExp(`\\b${gradeWord}\\s+${word}\\b`)
      const m = lower.match(re)
      if (m) { grade = num; matchText = m[0]; break }
    }
  }

  if (grade === null) return null

  // Strip the matched grade phrase and any standalone language markers,
  // then tidy separators into a readable title.
  let title = raw
  const stripRe = new RegExp(matchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
  title = title.replace(stripRe, '')
  title = title.replace(/\b(afrikaans|af)\b/gi, '')
  title = title.replace(/[-_]+/g, ' ').replace(/\s{2,}/g, ' ').trim()
  title = title.replace(/^[\s,:-]+|[\s,:-]+$/g, '')
  if (!title) title = isAfrikaans ? `Graad ${grade} Pak` : `Grade ${grade} Pack`

  // A short, honest (not fabricated) description built from recognizable
  // keywords only — never claims specific content we haven't verified.
  const lowerTitle = title.toLowerCase()
  let description
  if (isAfrikaans) {
    if (ext === 'zip') description = "'n Volledige pak — oefeneksamen, memorandum en opsomming."
    else if (lowerTitle.includes('kortnota') || lowerTitle.includes('opsomming')) description = "'n Vinnige verwysingsopsomming."
    else if (lowerTitle.includes('oefen') || lowerTitle.includes('eksamen')) description = 'Oefenvrae om jou vir eksamens voor te berei.'
    else description = `Voorbereidingsmateriaal vir Graad ${grade}.`
  } else {
    if (ext === 'zip') description = 'A complete pack — practice exam, memo, and cheat sheet.'
    else if (lowerTitle.includes('cheat sheet') || lowerTitle.includes('summary')) description = 'A quick-reference summary sheet.'
    else if (lowerTitle.includes('practice') || lowerTitle.includes('exam')) description = 'Practice questions to help you prepare for exams.'
    else description = `Prep material for Grade ${grade}.`
  }

  const id = raw.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

  return { id, title, description, grade, language: isAfrikaans ? 'af' : 'en', fileExt: ext }
}

function generateFileContents(bags) {
  const entries = bags.map(b => `  {
    id: ${JSON.stringify(b.id)},
    title: ${JSON.stringify(b.title)},
    description: ${JSON.stringify(b.description)},
    grade: ${b.grade},
    language: ${JSON.stringify(b.language)},
    fileExt: ${JSON.stringify(b.fileExt)},
  },`).join('\n')

  return `// AUTO-GENERATED by scripts/upload-exam-prep.mjs from the filenames in
// exam-prep-source/ — do not hand-edit EXAM_PREP_BAGS, it gets overwritten
// every time that script runs. Add/rename files in exam-prep-source/ and
// re-run the script instead.
//
// Each file is exactly one language and one grade (a Grade 10 Afrikaans
// pack and its English equivalent are two separate files/bags, not one bag
// with two names) — that's what lets the store show only English packs to
// English-medium children and only Afrikaans packs to Afrikaans-medium ones.
export type ExamPrepBag = {
  id: string
  title: string
  description: string
  grade: number
  language: 'en' | 'af'
  // 'zip' for multi-document packs (cheat sheet + practice test + memo
  // bundled together), 'pdf' for a single-document pack.
  fileExt: 'pdf' | 'zip'
  // Bags can be listed ahead of the file actually being uploaded — shows a
  // "Coming soon" state instead of a broken purchase/download flow.
  comingSoon?: boolean
}

// Base price per pack. Pro gets 20% off (rounded); Free (and guests, once
// they sign up) pay full price; Max gets every pack included free — that
// path never reaches checkout at all, see /api/exam-prep/checkout.
export const EXAM_PREP_BAG_PRICE = 99
export const EXAM_PREP_PRO_DISCOUNT = 0.2

export function examPrepPriceFor(tier) {
  if (tier === 'pro') return Math.round(EXAM_PREP_BAG_PRICE * (1 - EXAM_PREP_PRO_DISCOUNT))
  return EXAM_PREP_BAG_PRICE
}

export const EXAM_PREP_BAGS: ExamPrepBag[] = [
${entries}
]

export function examPrepStoragePath(bagId, fileExt) {
  return \`exam-prep-bags/\${bagId}.\${fileExt}\`
}
`
}

async function main() {
  const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL
  const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
  if (!projectId || !clientEmail || !privateKey || !storageBucket) {
    console.error('Missing Firebase Admin env vars — run with: node --env-file=.env.local scripts/upload-exam-prep.mjs')
    process.exit(1)
  }

  const files = collectFiles(SOURCE_DIR)
  if (files.length === 0) {
    console.log(`No PDFs/ZIPs found in ${SOURCE_DIR} — drop some in and re-run.`)
    return
  }

  const bags = []
  const skipped = []
  for (const filePath of files) {
    const parsed = parseFilename(filePath)
    if (!parsed) { skipped.push(filePath); continue }
    bags.push({ ...parsed, filePath })
  }

  if (skipped.length > 0) {
    console.log('Skipped (no recognizable grade 4-12 in filename):')
    for (const f of skipped) console.log(`  - ${f}`)
  }

  if (bags.length === 0) {
    console.log('Nothing to upload.')
    return
  }

  console.log('\nParsed packs:')
  for (const b of bags) console.log(`  [${b.language.toUpperCase()}] Grade ${b.grade} — "${b.title}" (${b.fileExt})  (id: ${b.id})`)

  initializeApp({ credential: cert({ projectId, clientEmail, privateKey }), storageBucket })
  const bucket = getStorage().bucket()

  for (const b of bags) {
    const dest = `exam-prep-bags/${b.id}.${b.fileExt}`
    const contentType = b.fileExt === 'zip' ? 'application/zip' : 'application/pdf'
    await bucket.upload(b.filePath, { destination: dest, metadata: { contentType } })
    console.log(`Uploaded ${b.filePath} -> ${dest}`)
  }

  const fileBody = generateFileContents(bags)
    .replace(
      'export function examPrepStoragePath(bagId, fileExt) {',
      "export function examPrepStoragePath(bagId: string, fileExt: 'pdf' | 'zip'): string {",
    )
    .replace(
      'export function examPrepPriceFor(tier) {',
      "export function examPrepPriceFor(tier: 'free' | 'pro' | 'max'): number {",
    )
  writeFileSync(OUT_FILE, fileBody)
  console.log(`\nWrote ${bags.length} bag(s) to ${OUT_FILE}`)
  console.log('Review the parsed titles/grades/languages above — then commit & push.')
}

main().catch(err => {
  console.error('Upload failed:', err)
  process.exit(1)
})
