import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, Timestamp, where } from 'firebase/firestore'
import { db } from '@/src/lib/firebase'

export type StudyProgressParams = {
  uid: string
  childIndex: number
  grade: number
  topicSlug: string
}

// Deterministic id (one doc per child+grade+topic) so re-marking overwrites
// in place instead of piling up a new document every time, unlike the
// append-only activityLog history.
function studyProgressDocId(childIndex: number, grade: number, topicSlug: string): string {
  return `${childIndex}-${grade}-${topicSlug}`
}

export async function setTopicStudied(params: StudyProgressParams & { studied: boolean }): Promise<void> {
  const ref = doc(db, 'users', params.uid, 'studyProgress', studyProgressDocId(params.childIndex, params.grade, params.topicSlug))
  await setDoc(ref, {
    childIndex: params.childIndex,
    grade: params.grade,
    topicSlug: params.topicSlug,
    studied: params.studied,
    markedAt: serverTimestamp(),
  })
}

export async function getTopicStudied(params: StudyProgressParams): Promise<boolean> {
  const ref = doc(db, 'users', params.uid, 'studyProgress', studyProgressDocId(params.childIndex, params.grade, params.topicSlug))
  const snap = await getDoc(ref)
  return snap.exists() && snap.data().studied === true
}

export type StudyProgressEntry = {
  topicSlug: string
  studied: boolean
  markedAt: Date | null
}

export async function getStudyProgress(uid: string, childIndex: number, grade: number): Promise<StudyProgressEntry[]> {
  const q = query(
    collection(db, 'users', uid, 'studyProgress'),
    where('childIndex', '==', childIndex),
    where('grade', '==', grade),
  )
  const snap = await getDocs(q)
  return snap.docs.map(d => {
    const data = d.data()
    return {
      topicSlug: data.topicSlug,
      studied: data.studied === true,
      markedAt: data.markedAt instanceof Timestamp ? data.markedAt.toDate() : null,
    }
  })
}
