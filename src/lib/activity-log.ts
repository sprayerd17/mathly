import { addDoc, collection, deleteDoc, getDocs, query, serverTimestamp, Timestamp, where } from 'firebase/firestore'
import { db } from '@/src/lib/firebase'

export type ActivityType = 'practiceSet' | 'sectionPractice' | 'openPractice'

export type LogActivityParams = {
  uid: string
  childIndex: number
  grade: number
  topicSlug: string
  activityType: ActivityType
  setName?: string | null
  score: number
  total: number
}

// Fire-and-forget: a failed write here shouldn't interrupt or error out the
// student's practice session — this is progress tracking for the dashboard,
// not a gate on using the app, so it fails silently.
export function logActivityCompletion(params: LogActivityParams): void {
  addDoc(collection(db, 'users', params.uid, 'activityLog'), {
    childIndex: params.childIndex,
    grade: params.grade,
    topicSlug: params.topicSlug,
    activityType: params.activityType,
    setName: params.setName ?? null,
    score: params.score,
    total: params.total,
    completedAt: serverTimestamp(),
  }).catch(err => {
    console.error('[activity-log] write failed', err)
  })
}

export type ActivityLogEntry = {
  id: string
  childIndex: number
  grade: number
  topicSlug: string
  activityType: ActivityType
  setName: string | null
  score: number
  total: number
  completedAt: Date | null
}

// No orderBy here on purpose — combining it with the two equality filters
// below would require a composite Firestore index. Every attempt ever made
// for this child/grade is small enough to sort client-side instead.
export async function getActivityLog(uid: string, childIndex: number, grade: number): Promise<ActivityLogEntry[]> {
  const q = query(
    collection(db, 'users', uid, 'activityLog'),
    where('childIndex', '==', childIndex),
    where('grade', '==', grade),
  )
  const snap = await getDocs(q)
  return snap.docs.map(d => {
    const data = d.data()
    return {
      id: d.id,
      childIndex: data.childIndex,
      grade: data.grade,
      topicSlug: data.topicSlug,
      activityType: data.activityType,
      setName: data.setName ?? null,
      score: data.score,
      total: data.total,
      completedAt: data.completedAt instanceof Timestamp ? data.completedAt.toDate() : null,
    }
  })
}

// Explicit, separate action from the in-session "Try again" reset (which
// never touches Firestore) — batch-deletes every attempt logged for this
// topic so the student can start their Set 1→2→3 growth story over.
export async function resetTopicAttempts(uid: string, childIndex: number, topicSlug: string): Promise<void> {
  const q = query(
    collection(db, 'users', uid, 'activityLog'),
    where('childIndex', '==', childIndex),
    where('topicSlug', '==', topicSlug),
  )
  const snap = await getDocs(q)
  await Promise.all(snap.docs.map(d => deleteDoc(d.ref)))
}
