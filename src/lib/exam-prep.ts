// Exam prep bags: downloadable PDF packs sold individually (once-off
// Paystack payment) or included free for Max-tier accounts. Add a new bag
// here once its PDF is uploaded to Firebase Storage at
// `examPrepStoragePath(bag.id)` — nothing else needs to change for a new
// bag to show up on /store.
export type ExamPrepBag = {
  id: string
  title: string
  titleAf: string
  description: string
  descriptionAf: string
  grades: number[]
  // Bags can be listed ahead of the PDF actually being uploaded — shows a
  // "Coming soon" state instead of a broken purchase/download flow.
  comingSoon?: boolean
}

// Flat price for now (per Divan — will likely change once real bags ship).
export const EXAM_PREP_BAG_PRICE = 49

export const EXAM_PREP_BAGS: ExamPrepBag[] = [
  {
    id: 'grade-12-final-exam-pack',
    title: 'Grade 12 Final Exam Prep Pack',
    titleAf: 'Graad 12 Finale-Eksamen Voorbereidingspak',
    description: 'A focused revision pack covering the highest-weighted topics for the Grade 12 final exams — worked examples, past-paper-style questions, and full memos.',
    descriptionAf: "'n Gefokusde hersieningspak wat die swaarste-geweegde onderwerpe vir die Graad 12 finale eksamens dek — uitgewerkte voorbeelde, vraestel-styl vrae en volledige memorandums.",
    grades: [12],
    comingSoon: true,
  },
]

export function examPrepStoragePath(bagId: string): string {
  return `exam-prep-bags/${bagId}.pdf`
}
