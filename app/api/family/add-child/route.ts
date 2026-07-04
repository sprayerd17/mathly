import { NextRequest } from 'next/server'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'

const MAX_CHILDREN = 3

// Growing the family after registration has to happen server-side: childPlans
// is a fully client-write-protected field (see firestore.rules), and adding a
// child means appending a 'free' entry to it. Doing that append here — via
// the Admin SDK, which bypasses rules — means the client never needs write
// access to childPlans at all, not even to extend it with a harmless 'free'
// slot.
export async function POST(req: NextRequest) {
  const { idToken, name, grade, language } = await req.json() as {
    idToken?: string
    name?: string
    grade?: number
    language?: 'en' | 'af'
  }

  if (!idToken || !name?.trim() || typeof grade !== 'number' || (language !== 'en' && language !== 'af')) {
    return new Response('Bad request', { status: 400 })
  }

  let adminAuth, adminDb
  try {
    adminAuth = getAdminAuth()
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[family/add-child] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  let uid: string
  try {
    const decoded = await adminAuth.verifyIdToken(idToken)
    uid = decoded.uid
  } catch {
    return new Response('Unauthorized', { status: 401 })
  }

  const userRef = adminDb.doc(`users/${uid}`)
  const userSnap = await userRef.get()
  if (!userSnap.exists) {
    return new Response('User not found', { status: 404 })
  }
  const userData = userSnap.data()!
  const children = Array.isArray(userData.children) ? userData.children : []
  const childPlans = Array.isArray(userData.childPlans) ? userData.childPlans : []

  if (children.length >= MAX_CHILDREN) {
    return new Response('Child limit reached', { status: 400 })
  }

  const newChildren = [...children, { name: name.trim(), grade, language, languageChangeUsed: false }]
  // childPlans may be shorter than children if it predates this field —
  // pad with 'free' rather than trusting its length matches exactly.
  const newChildPlans = [...Array.from({ length: children.length }, (_, i) => childPlans[i] ?? 'free'), 'free']

  await userRef.update({ children: newChildren, childPlans: newChildPlans })

  return Response.json({ children: newChildren, childPlans: newChildPlans })
}
