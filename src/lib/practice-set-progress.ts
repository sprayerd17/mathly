import { deleteDoc, doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '@/src/lib/firebase'

export type SetProgressEntry = { done: boolean; score: number }

export type PracticeSetProgressParams = {
  uid: string
  childIndex: number
  grade: number
  topicSlug: string
}

// Deterministic id (one doc per child+grade+topic), same pattern as
// studyProgress, so re-saving overwrites in place.
function practiceSetProgressDocId(childIndex: number, grade: number, topicSlug: string): string {
  return `${childIndex}-${grade}-${topicSlug}`
}

export type PracticeSetProgress = {
  sets: SetProgressEntry[]
  lastCycleAverage: number | null
}

export async function getPracticeSetProgress(params: PracticeSetProgressParams): Promise<PracticeSetProgress | null> {
  const ref = doc(db, 'users', params.uid, 'practiceSetProgress', practiceSetProgressDocId(params.childIndex, params.grade, params.topicSlug))
  const snap = await getDoc(ref)
  if (!snap.exists()) return null
  const data = snap.data()
  return {
    sets: Array.isArray(data.sets) ? data.sets : [],
    lastCycleAverage: typeof data.lastCycleAverage === 'number' ? data.lastCycleAverage : null,
  }
}

export async function savePracticeSetProgress(
  params: PracticeSetProgressParams & PracticeSetProgress
): Promise<void> {
  const ref = doc(db, 'users', params.uid, 'practiceSetProgress', practiceSetProgressDocId(params.childIndex, params.grade, params.topicSlug))
  await setDoc(ref, {
    childIndex: params.childIndex,
    grade: params.grade,
    topicSlug: params.topicSlug,
    sets: params.sets,
    lastCycleAverage: params.lastCycleAverage,
    updatedAt: serverTimestamp(),
  })
}

// Parent/student override — deletes the lock state entirely so the set
// sequence unlocks from Set 1 again, same escape hatch as resetTopicAttempts.
export async function deletePracticeSetProgress(params: PracticeSetProgressParams): Promise<void> {
  const ref = doc(db, 'users', params.uid, 'practiceSetProgress', practiceSetProgressDocId(params.childIndex, params.grade, params.topicSlug))
  await deleteDoc(ref)
}
