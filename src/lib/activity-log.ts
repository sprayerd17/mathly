import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
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
