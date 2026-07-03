import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (common fractions roles) ──────────────────────────────────
// conversion steps → blue   (#2563eb)
// operations       → orange (#ea580c)
// final answer     → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Common Fractions',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — ALL FOUR OPERATIONS WITH FRACTIONS AND MIXED NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'all-four-operations',
      title: 'All Four Operations with Fractions and Mixed Numbers',
      icon: '½',
      explanation:
        `<p style="margin-bottom:16px;">We consolidate addition, subtraction, multiplication and division of common fractions and mixed numbers, applying these skills confidently in multi-step problems without needing extra explanation of each individual operation.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('conversion steps')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('operations')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate 2⅓ + 1½ − ¾.',
          answer: gr('3 1/12'),
          steps: [
            `${bl('Convert to improper fractions:')} 2⅓ = ${bl('7/3')}, &nbsp; 1½ = ${bl('3/2')}. Expression: 7/3 ${or('+')} 3/2 ${or('−')} ¾.`,
            `${bl('LCM of 3, 2 and 4 = 12.')} Write equivalent fractions: 7/3 = 28/12, &nbsp; 3/2 = 18/12, &nbsp; 3/4 = 9/12.`,
            `${or('Calculate:')} 28/12 ${or('+')} 18/12 ${or('−')} 9/12 = 37/12.`,
            `${gr('Convert to a mixed number:')} 37/12 = ${gr('3 1/12')}.`,
          ],
        },
        {
          question: 'Calculate ⅗ × 2½ ÷ ¾.',
          answer: gr('2'),
          steps: [
            `${bl('Convert the mixed number:')} 2½ = ${bl('5/2')}. Expression: 3/5 ${or('×')} 5/2 ${or('÷')} 3/4.`,
            `${or('Multiply the first two fractions:')} 3/5 × 5/2 = 15/10 = ${or('3/2')}.`,
            `${or('Divide by ¾ — multiply by its reciprocal:')} 3/2 ${or('×')} 4/3 = 12/6 = ${gr('2')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing multi-step calculations with common fractions and mixed numbers using all four operations" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SQUARES, CUBES AND ROOTS OF COMMON FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'squares-cubes-roots',
      title: 'Squares, Cubes and Roots of Common Fractions in Multi-Step Problems',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">We apply squares, cubes, square roots and cube roots of common fractions within larger combined calculations, integrating these skills with other fraction operations.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('squares')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('roots')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate (⅔)² + 1/9.',
          answer: gr('5/9'),
          steps: [
            `${bl('Square the fraction:')} (2/3)² = ${bl('4/9')}.`,
            `${or('Add:')} 4/9 ${or('+')} 1/9 = ${gr('5/9')}.`,
          ],
        },
        {
          question: 'Sipho calculates √(4/25) × (½)³.',
          answer: gr('1/20'),
          steps: [
            `${or('Find the square root:')} √(4/25) = ${or('2/5')}.`,
            `${bl('Cube the fraction:')} (1/2)³ = ${bl('1/8')}.`,
            `${or('Multiply:')} 2/5 ${or('×')} 1/8 = 2/40 = ${gr('1/20')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply squares, cubes, square roots and cube roots of common fractions in multi-step problems" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual showing squaring and square rooting a common fraction with numerator and denominator treated separately" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PROBLEMS WITH FRACTIONS, MIXED NUMBERS AND PERCENTAGES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'fractions-mixed-numbers-percentages',
      title: 'Solving Problems Involving Fractions, Mixed Numbers and Percentages',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">We solve real-life, multi-step problems involving common fractions, mixed numbers and percentages together, applying our full range of fraction skills in context.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('fractions')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('percentages')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato has 3½ metres of ribbon. She uses 40% of it for one gift and ¼ of the remainder for a second gift. How much ribbon is left?',
          answer: gr('1.575 m'),
          steps: [
            `${or('40% of 3.5 m:')} 0.4 × 3.5 = ${or('1.4 m')} used for the first gift.`,
            `${bl('Remainder:')} 3.5 − 1.4 = ${bl('2.1 m')}.`,
            `${bl('¼ of 2.1 m:')} 2.1 ÷ 4 = ${bl('0.525 m')} used for the second gift.`,
            `${gr('Left:')} 2.1 − 0.525 = ${gr('1.575 m')}.`,
          ],
        },
        {
          question: 'Thabo earns R4 800. He saves ⅓ of it and spends 25% of the remainder on food. How much does he have left after both?',
          answer: gr('R2 400'),
          steps: [
            `${bl('Saved:')} ⅓ × 4 800 = ${bl('R1 600')}.`,
            `${bl('Remainder:')} 4 800 − 1 600 = ${bl('R3 200')}.`,
            `${or('Food:')} 25% × 3 200 = ${or('R800')}.`,
            `${gr('Left:')} 3 200 − 800 = ${gr('R2 400')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing multi-step real-life problems combining common fractions, mixed numbers and percentages" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Bar model showing a quantity split by a fraction first and then a percentage of the remainder" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate ¾ + ⅔.',
      answer: '1 5/12',
      checkMode: 'auto',
      correctAnswer: '1 5/12',
      explanation: 'LCM of 4 and 3 is 12.\n¾ = 9/12, ⅔ = 8/12.\n9/12 + 8/12 = 17/12 = 1 5/12 ✓',
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate 2½ − 1¾.',
      answer: '3/4',
      checkMode: 'auto',
      correctAnswer: '3/4',
      explanation: 'Convert: 2½ = 5/2 = 10/4, 1¾ = 7/4.\n10/4 − 7/4 = 3/4 ✓',
    },

    // ── Q3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho calculates 1⅓ × ⅖ ÷ ⅓ and gets 1⅗. Check his answer.',
      answer: 'Convert: 4/3 × 2/5 ÷ 1/3 = 4/3 × 2/5 × 3/1 = 24/15 = 1 3/5. He is correct.',
      checkMode: 'self',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate (⅗)².',
      answer: '9/25',
      checkMode: 'auto',
      correctAnswer: '9/25',
      explanation: '(3/5)² = 3²/5² = 9/25 ✓',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate √(9/16) + ¼.',
      answer: '1',
      checkMode: 'auto',
      correctAnswer: '1',
      explanation: '√(9/16) = 3/4.\n3/4 + 1/4 = 4/4 = 1 ✓',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the cube of ⅔ and add it to ⅓.',
      answer: '(2/3)³ = 8/27. 8/27 + 1/3 = 8/27 + 9/27 = 17/27.',
      checkMode: 'self',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Lerato has 4¼ litres of paint. She uses ⅓ of it on one wall. How much is left?',
      answer: '2 5/6 litres',
      checkMode: 'auto',
      correctAnswer: '2 5/6',
      correctAnswers: ['2 5/6', '17/6', '2.833'],
      explanation: '4¼ = 17/4. Used: 1/3 × 17/4 = 17/12.\nLeft: 17/4 − 17/12 = 51/12 − 17/12 = 34/12 = 2 10/12 = 2 5/6 litres ✓',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo earns R6 000. He saves ¼ of it and spends 30% of the remainder on transport. How much does he have left after both?',
      answer: 'Saved = 1 500. Remainder = 4 500. Transport = 30% × 4 500 = 1 350. Left = 4 500 − 1 350 = 3 150.',
      checkMode: 'self',
    },

    // ── Q9 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate ⅚ ÷ (½)².',
      answer: '3 1/3',
      checkMode: 'auto',
      correctAnswer: '3 1/3',
      correctAnswers: ['3 1/3', '10/3', '3.333'],
      explanation: '(1/2)² = 1/4.\n5/6 ÷ 1/4 = 5/6 × 4 = 20/6 = 10/3 = 3 1/3 ✓',
    },

    // ── Q10 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says (½)³ is greater than (½)². Is she correct? Explain.',
      answer: 'No — (1/2)³ = 1/8 is smaller than (1/2)² = 1/4, since multiplying fractions less than 1 by themselves makes the result smaller each time.',
      checkMode: 'self',
    },

    // ── Q11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate 2⅔ × ¾ − ½.',
      answer: '1 1/2',
      checkMode: 'auto',
      correctAnswer: '3/2',
      correctAnswers: ['3/2', '1 1/2', '1½', '1.5'],
      explanation: '2⅔ = 8/3. 8/3 × 3/4 = 24/12 = 2. 2 − 1/2 = 3/2 = 1½ ✓',
    },

    // ── Q12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A recipe needs 2¼ cups of flour. Sipho wants to make 60% of the recipe. How many cups does he need?',
      answer: '1 7/20 cups',
      checkMode: 'auto',
      correctAnswer: '1 7/20',
      correctAnswers: ['1 7/20', '27/20', '1.35'],
      explanation: '2¼ = 9/4. 60% = 3/5.\n3/5 × 9/4 = 27/20 = 1 7/20 cups ✓',
    },

    // ── Q13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Calculate √(1/9) + (2/3)² − 1/9.',
      answer: '4/9',
      checkMode: 'self',
    },

    // ── Q14 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato has R3 600. She spends ⅙ on rent and then ¼ of what remains on food. How much does she have left?',
      answer: 'Rent = 600. Remainder = 3 000. Food = ¼ × 3 000 = 750. Left = 3 000 − 750 = 2 250.',
      checkMode: 'self',
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says adding two fractions less than 1 can never give an answer bigger than 1. Is he correct? Explain with an example.',
      answer: 'No — for example ¾ + ⅔ = 1 5/12, which is greater than 1, even though both fractions were individually less than 1.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered common fractions.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
