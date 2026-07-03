import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (common fractions roles) ──────────────────────────────────
// whole number   → blue   (#2563eb)
// numerator      → orange (#ea580c)
// denominator    → red    (#dc2626)
// improper frac  → green  (#16a34a)
// common denom   → orange (#ea580c)
// final answer   → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Common Fractions',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MIXED NUMBERS AND IMPROPER FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mixed-numbers-improper-fractions',
      title: 'Mixed Numbers and Improper Fractions',
      icon: '½',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>mixed number</strong> has a ${bl('whole number')} part and a fraction part. An <strong>improper fraction</strong> has a ${or('numerator')} that is bigger than the ${re('denominator')}. We can convert between these two forms.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('whole number')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('numerator')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('denominator')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('improper fraction')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Mixed Number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A number with a ${bl('whole number')} part and a proper fraction part, e.g. ${bl('4')}${or('2')}/${re('5')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Improper Fraction</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A fraction where the ${or('numerator')} is greater than or equal to the ${re('denominator')}, e.g. ${gr('22/5')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Numerator</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${or('top number')} of a fraction — how many parts we have.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Denominator</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${re('bottom number')} of a fraction — how many equal parts the whole is divided into.</p>` +
        `</div>` +

        `</div>` +

        // ── Conversion rules ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Conversion rules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Mixed number → Improper fraction</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Multiply the ${bl('whole number')} by the ${re('denominator')}, then add the ${or('numerator')}. Keep the same ${re('denominator')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Formula: (${bl('whole')} × ${re('denom')} + ${or('num')}) / ${re('denom')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Improper fraction → Mixed number</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Divide the ${or('numerator')} by the ${re('denominator')}. The quotient is the ${bl('whole number')} and the remainder becomes the new ${or('numerator')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Formula: ${or('num')} ÷ ${re('denom')} = ${bl('whole')} remainder ${or('new num')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why both forms are useful</p>` +
        `<p style="margin:0;color:#1e3a8a;">Mixed numbers are easier to read and compare. Improper fractions are easier to use when <strong>multiplying or dividing</strong> fractions. You will often need to convert before calculating.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Convert 4 and 2/5 to an improper fraction.',
          answer: `${gr('22/5')}`,
          steps: [
            `Multiply the ${bl('whole number')} by the ${re('denominator')}: ${bl('4')} × ${re('5')} = ${bl('20')}`,
            `Add the ${or('numerator')}: ${bl('20')} + ${or('2')} = ${or('22')}`,
            `<strong>Answer:</strong> ${gr('22/5')} — keep the same ${re('denominator')} (5) ✓`,
          ],
        },
        {
          question: 'Convert 37/6 to a mixed number.',
          answer: `${bl('6')} and ${or('1')}/${re('6')}`,
          steps: [
            `Divide the ${or('numerator')} by the ${re('denominator')}: ${or('37')} ÷ ${re('6')} = ${bl('6')} remainder ${or('1')}`,
            `The quotient ${bl('6')} is the ${bl('whole number')} and the remainder ${or('1')} becomes the new ${or('numerator')}`,
            `<strong>Answer:</strong> ${bl('6')} and ${or('1')}/${re('6')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — convert mixed number to improper fraction ──────────────
        {
          difficulty: 'Easy',
          question: 'Convert 3 and 1/4 to an improper fraction.',
          answer: '13/4',
          checkMode: 'auto',
          correctAnswer: '13/4',
          explanation: 'Step 1: Multiply the whole number by the denominator: 3 × 4 = 12.\nStep 2: Add the numerator: 12 + 1 = 13.\nAnswer: 13/4 ✓',
        },

        // ── Q2 Easy — convert improper fraction to mixed number ──────────────
        {
          difficulty: 'Easy',
          question: 'Convert 29/5 to a mixed number.',
          answer: '5 and 4/5',
          checkMode: 'auto',
          correctAnswer: '5 and 4/5',
          correctAnswers: ['5 and 4/5', '5 4/5'],
          explanation: 'Step 1: Divide the numerator by the denominator: 29 ÷ 5 = 5 remainder 4.\nStep 2: The quotient 5 is the whole number and the remainder 4 becomes the new numerator.\nAnswer: 5 and 4/5 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to convert between mixed numbers and improper fractions with colour coded steps" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual diagram showing a mixed number and its equivalent improper fraction with whole number in blue, numerator in orange, and denominator in red" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — ALL OPERATIONS WITH FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'operations-with-fractions',
      title: 'All Operations with Fractions',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">We can <strong>add, subtract, multiply, and divide</strong> fractions. Each operation has its own method. Always simplify your answer to its lowest terms.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('numerators')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('denominators')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('common denominator')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── Four operations ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The four operations</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">+</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Addition</strong> — Find a ${or('common denominator')} (LCM of the ${re('denominators')}), convert each fraction, then add the ${bl('numerators')}. Keep the ${or('common denominator')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">−</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#dc2626;">Subtraction</strong> — Find a ${or('common denominator')}, convert each fraction, then subtract the ${bl('numerators')}. Keep the ${or('common denominator')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">×</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#ea580c;">Multiplication</strong> — Multiply the ${bl('numerators')} together and the ${re('denominators')} together. No common denominator needed. Then simplify.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">÷</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Division</strong> — Multiply by the <strong>reciprocal</strong> of the second fraction. Flip the second fraction and then multiply.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always simplify your answer</p>` +
        `<p style="margin:0;color:#1e3a8a;">After any fraction calculation, check whether your answer can be simplified. Divide both the ${bl('numerator')} and ${re('denominator')} by their highest common factor (HCF). If the ${gr('answer')} is an improper fraction, convert it to a mixed number.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate 2/3 + 3/4.',
          answer: `${gr('1 and 5/12')}`,
          steps: [
            `Find the LCM of ${re('3')} and ${re('4')}: LCM = ${or('12')}`,
            `Convert: ${bl('2')}/${re('3')} = ${bl('8')}/${or('12')} &nbsp; (multiply top and bottom by 4)`,
            `Convert: ${bl('3')}/${re('4')} = ${bl('9')}/${or('12')} &nbsp; (multiply top and bottom by 3)`,
            `Add the ${bl('numerators')}: ${bl('8')} + ${bl('9')} = ${bl('17')}/${or('12')}`,
            `Convert to a mixed number: ${bl('17')} ÷ ${or('12')} = 1 remainder 5`,
            `<strong>Answer:</strong> ${gr('1 and 5/12')} ✓`,
          ],
        },
        {
          question: 'Calculate 5/6 − 1/3.',
          answer: `${gr('1/2')}`,
          steps: [
            `Find the LCM of ${re('6')} and ${re('3')}: LCM = ${or('6')}`,
            `Convert: ${bl('1')}/${re('3')} = ${bl('2')}/${or('6')} &nbsp; (multiply top and bottom by 2)`,
            `Subtract the ${bl('numerators')}: ${bl('5')} − ${bl('2')} = ${bl('3')}/${or('6')}`,
            `Simplify: ${bl('3')}/${or('6')} = ${gr('1/2')} &nbsp; (divide both by 3)`,
            `<strong>Answer:</strong> ${gr('1/2')} ✓`,
          ],
        },
        {
          question: 'Calculate 2/3 × 3/5.',
          answer: `${gr('2/5')}`,
          steps: [
            `Multiply the ${bl('numerators')}: ${bl('2')} × ${bl('3')} = ${bl('6')}`,
            `Multiply the ${re('denominators')}: ${re('3')} × ${re('5')} = ${re('15')}`,
            `Result: ${bl('6')}/${re('15')}`,
            `Simplify by dividing both by 3: ${bl('6')} ÷ 3 = ${bl('2')} and ${re('15')} ÷ 3 = ${re('5')}`,
            `<strong>Answer:</strong> ${gr('2/5')} ✓`,
          ],
        },
        {
          question: 'Calculate 3/4 ÷ 2/5.',
          answer: `${gr('1 and 7/8')}`,
          steps: [
            `To divide by a fraction, multiply by its <strong>reciprocal</strong> — flip the second fraction`,
            `${bl('3')}/${re('4')} ÷ ${bl('2')}/${re('5')} = ${bl('3')}/${re('4')} × ${bl('5')}/${re('2')}`,
            `Multiply the ${bl('numerators')}: ${bl('3')} × ${bl('5')} = ${bl('15')}`,
            `Multiply the ${re('denominators')}: ${re('4')} × ${re('2')} = ${re('8')}`,
            `Result: ${bl('15')}/${re('8')} — this is an improper fraction`,
            `Convert to a mixed number: ${bl('15')} ÷ ${re('8')} = 1 remainder 7`,
            `<strong>Answer:</strong> ${gr('1 and 7/8')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q3 Medium — addition with unlike denominators ────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 1/3 + 1/4.',
          answer: '7/12',
          checkMode: 'auto',
          correctAnswer: '7/12',
          explanation: 'Step 1: Find the LCM of 3 and 4: LCM = 12.\nStep 2: Convert: 1/3 = 4/12, 1/4 = 3/12.\nStep 3: Add the numerators: 4 + 3 = 7.\nAnswer: 7/12 ✓',
        },

        // ── Q4 Medium — subtraction with unlike denominators ─────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 5/8 − 1/4.',
          answer: '3/8',
          checkMode: 'auto',
          correctAnswer: '3/8',
          explanation: 'Step 1: Find the LCM of 8 and 4: LCM = 8.\nStep 2: Convert: 1/4 = 2/8.\nStep 3: Subtract the numerators: 5 − 2 = 3.\nAnswer: 3/8 ✓',
        },

        // ── Q5 Hard — identify addition error and explain ────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho calculates 2/5 + 1/3 and gets 3/8. Is he correct? Explain.',
          answer: 'No — he added numerators and denominators directly. The LCM of 5 and 3 is 15, so 2/5 = 6/15 and 1/3 = 5/15. Sum = 11/15.',
          checkMode: 'self',
        },

        // ── Q6 Easy — multiply two proper fractions ──────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 2/3 × 1/4.',
          answer: '1/6',
          checkMode: 'auto',
          correctAnswer: '1/6',
          explanation: 'Step 1: Multiply the numerators: 2 × 1 = 2.\nStep 2: Multiply the denominators: 3 × 4 = 12.\nStep 3: Result: 2/12. Simplify by dividing both by 2: 1/6.\nAnswer: 1/6 ✓',
        },

        // ── Q7 Medium — multiply two proper fractions and simplify ───────────
        {
          difficulty: 'Medium',
          question: 'Calculate 3/5 × 2/3.',
          answer: '2/5',
          checkMode: 'auto',
          correctAnswer: '2/5',
          explanation: 'Step 1: Multiply the numerators: 3 × 2 = 6.\nStep 2: Multiply the denominators: 5 × 3 = 15.\nStep 3: Result: 6/15. Simplify by dividing both by 3: 2/5.\nAnswer: 2/5 ✓',
        },

        // ── Q8 Hard — challenge multiplication misconception ─────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says multiplying fractions always gives a bigger answer. Is she correct? Explain.',
          answer: 'No — multiplying two fractions less than 1 gives a smaller answer, since you are finding a fraction of a fraction.',
          checkMode: 'self',
        },

        // ── Q9 Easy — divide a fraction by a unit fraction ───────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 1/2 ÷ 1/4.',
          answer: '2',
          checkMode: 'auto',
          correctAnswer: '2',
          explanation: 'Step 1: To divide by a fraction, multiply by its reciprocal. Flip 1/4 to get 4/1.\nStep 2: 1/2 × 4/1 = 4/2 = 2.\nAnswer: 2 ✓',
        },

        // ── Q10 Medium — divide two fractions ───────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 2/3 ÷ 3/5.',
          answer: '10/9',
          checkMode: 'auto',
          correctAnswer: '10/9',
          correctAnswers: ['10/9', '1 and 1/9', '1 1/9'],
          explanation: 'Step 1: Flip the second fraction to get its reciprocal: 5/3.\nStep 2: 2/3 × 5/3.\nStep 3: Multiply the numerators: 2 × 5 = 10.\nStep 4: Multiply the denominators: 3 × 3 = 9.\nResult: 10/9 = 1 and 1/9 ✓',
        },

        // ── Q11 Hard — explain dividing by 1/2 ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo says dividing by 1/2 is the same as multiplying by 2. Is he correct? Explain.',
          answer: 'Yes — dividing by a fraction means multiplying by its reciprocal, and the reciprocal of 1/2 is 2.',
          checkMode: 'self',
        },

        // ── Q12 Hard — add two mixed numbers ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Calculate 1 and 1/2 + 2 and 2/3.',
          answer: '4 and 1/6',
          checkMode: 'auto',
          correctAnswer: '4 and 1/6',
          correctAnswers: ['4 and 1/6', '4 1/6', '25/6'],
          explanation: 'Step 1: Convert to improper fractions: 1 and 1/2 = 3/2, 2 and 2/3 = 8/3.\nStep 2: Find the LCM of 2 and 3: LCM = 6.\nStep 3: Convert: 3/2 = 9/6, 8/3 = 16/6.\nStep 4: Add the numerators: 9 + 16 = 25. Result: 25/6.\nStep 5: Convert to a mixed number: 25 ÷ 6 = 4 remainder 1.\nAnswer: 4 and 1/6 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to add subtract multiply and divide fractions with colour coded numerators and denominators" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing all four fraction operations side by side with numerators in blue denominators in red common denominator in orange and final answer in green" />',
    },
  ],
  scoreMessages: [
    { minScore: 12, message: 'Outstanding! You have mastered common fractions.' },
    { minScore: 9, message: 'Great work!' },
    { minScore: 6, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
