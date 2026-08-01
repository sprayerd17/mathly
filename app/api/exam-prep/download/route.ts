import { NextRequest } from 'next/server'
import { getAdminAuth, getAdminDb, getAdminStorage } from '@/src/lib/firebase-admin'
import { EXAM_PREP_BAGS, examPrepStoragePath } from '@/src/lib/exam-prep'
import type { Tier } from '@/src/lib/pricing'
import { PAYMENTS_ENABLED } from '@/src/lib/launch-config'

// Issues a short-lived signed download URL for one exam prep bag PDF —
// never exposes the Storage file directly. Entitlement is either "the
// active child is on Max" or "there's a paid purchase doc for this
// uid+bagId"; either grants the same signed URL.
export async function POST(req: NextRequest) {
  const { idToken, bagId, childIndex } = await req.json().catch(() => ({})) as {
    idToken?: string
    bagId?: string
    childIndex?: unknown
  }
  if (!idToken || !bagId) return new Response('Bad request', { status: 400 })

  const bag = EXAM_PREP_BAGS.find(b => b.id === bagId)
  if (!bag || bag.comingSoon) return new Response('Bag not available', { status: 404 })

  let adminDb, adminAuth
  try {
    adminAuth = getAdminAuth()
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[exam-prep/download] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  let uid: string
  try {
    uid = (await adminAuth.verifyIdToken(idToken)).uid
  } catch {
    return new Response('Unauthorized', { status: 401 })
  }

  const userSnap = await adminDb.doc(`users/${uid}`).get()
  if (!userSnap.exists) return new Response('User not found', { status: 404 })
  const userData = userSnap.data()!

  const childPlans: Tier[] = Array.isArray(userData.childPlans) ? userData.childPlans : []
  const fallbackIdx = typeof userData.activeChildIndex === 'number' ? userData.activeChildIndex : 0
  const idx = typeof childIndex === 'number' ? childIndex : fallbackIdx
  const tier: Tier = PAYMENTS_ENABLED ? (childPlans[idx] ?? 'free') : 'free'

  let entitled = tier === 'max'
  if (!entitled) {
    const purchase = await adminDb.collection('examPrepPurchases')
      .where('uid', '==', uid)
      .where('bagId', '==', bagId)
      .where('status', '==', 'paid')
      .limit(1)
      .get()
    entitled = !purchase.empty
  }
  if (!entitled) return new Response('Not purchased', { status: 403 })

  try {
    const [url] = await getAdminStorage()
      .bucket()
      .file(examPrepStoragePath(bagId, bag.fileExt))
      .getSignedUrl({ action: 'read', expires: Date.now() + 5 * 60 * 1000 })
    return Response.json({ url })
  } catch (err) {
    console.error('[exam-prep/download] could not sign URL — is the file uploaded?', { bagId, err })
    return new Response('This pack is not available for download yet. Please contact support.', { status: 404 })
  }
}
