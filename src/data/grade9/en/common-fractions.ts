import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (common fractions roles) ──────────────────────────────────
// conversion steps → blue   (#2563eb)
// operations       → orange (#ea580c)
// final answer     → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
// Stacked numerator/denominator fraction notation instead of a plain "n/d"
// slash — renders as an actual fraction bar via the site's existing
// whitelisted-HTML pipeline.
const frac = (num: string, den: string) =>
  `<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 2px;line-height:1.15;font-size:0.95em;"><span style="border-bottom:1.5px solid currentColor;padding:0 3px;">${num}</span><span style="padding:0 3px;">${den}</span></span>`

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

      openQuestions: [],

      videoPlaceholder:
        'Short video showing multi-step calculations with common fractions and mixed numbers using all four operations',
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

      openQuestions: [],

      videoPlaceholder:
        'Short video showing how to apply squares, cubes, square roots and cube roots of common fractions in multi-step problems',

      diagramPlaceholder:
        'Visual showing squaring and square rooting a common fraction by treating the numerator and denominator separately',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 170" width="100%" style="max-width:400px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="10" y="25" font-size="11" fill="#6b7280">Squaring:</text>` +
        `<text x="70" y="25" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">2</text>` +
        `<line x1="55" y1="32" x2="85" y2="32" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="70" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">3</text>` +
        `<text x="120" y="28" text-anchor="middle" font-size="8" fill="#6b7280">square top &amp; bottom</text>` +
        `<line x1="95" y1="35" x2="140" y2="35" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<polygon points="146,35 138,31 138,39" fill="#0f1f3d"/>` +
        `<text x="185" y="25" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">4</text>` +
        `<line x1="170" y1="32" x2="200" y2="32" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="185" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">9</text>` +
        `<line x1="10" y1="85" x2="310" y2="85" stroke="#e2e8f0" stroke-width="1"/>` +
        `<text x="10" y="115" font-size="11" fill="#6b7280">Rooting:</text>` +
        `<text x="62" y="121" font-size="18" font-weight="700" fill="#2563eb">√</text>` +
        `<text x="85" y="108" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">4</text>` +
        `<line x1="70" y1="115" x2="100" y2="115" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="85" y="131" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">25</text>` +
        `<text x="135" y="108" text-anchor="middle" font-size="8" fill="#6b7280">root top &amp; bottom</text>` +
        `<line x1="110" y1="118" x2="155" y2="118" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<polygon points="161,118 153,114 153,122" fill="#0f1f3d"/>` +
        `<text x="200" y="108" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">2</text>` +
        `<line x1="185" y1="115" x2="215" y2="115" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="200" y="131" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">5</text>` +
        `<text x="160" y="160" text-anchor="middle" font-size="9" fill="#6b7280">Square or root the numerator and denominator separately</text>` +
        `</svg>`,
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

      openQuestions: [],

      videoPlaceholder:
        'Short video showing multi-step real-life problems combining common fractions, mixed numbers and percentages',

      diagramPlaceholder:
        'Bar model showing a quantity split by a fraction first, then a percentage taken from what remains',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 145" width="100%" style="max-width:400px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="160" y="12" text-anchor="middle" font-size="9" fill="#6b7280">Total quantity</text>` +
        `<rect x="20" y="18" width="280" height="24" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="20" y="18" width="112" height="24" fill="rgba(37,99,235,0.25)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="132" y="18" width="168" height="24" fill="rgba(22,163,74,0.15)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="76" y="34" text-anchor="middle" font-size="9" font-weight="700" fill="#1e3a8a">used (fraction)</text>` +
        `<text x="216" y="34" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">remainder</text>` +
        `<line x1="216" y1="42" x2="160" y2="72" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<polygon points="160,78 155,68 165,70" fill="#0f1f3d"/>` +
        `<text x="250" y="60" text-anchor="middle" font-size="8" fill="#6b7280">remainder becomes the new whole</text>` +
        `<text x="160" y="69" text-anchor="middle" font-size="9" fill="#6b7280">Remainder = new 100%</text>` +
        `<rect x="20" y="75" width="280" height="24" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="20" y="75" width="70" height="24" fill="rgba(234,88,12,0.25)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="90" y="75" width="210" height="24" fill="rgba(22,163,74,0.25)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="55" y="91" text-anchor="middle" font-size="9" font-weight="700" fill="#7c2d12">used (%)</text>` +
        `<text x="195" y="91" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">left</text>` +
        `<text x="160" y="130" text-anchor="middle" font-size="10" fill="#6b7280">Take a fraction first, then a percentage of what remains</text>` +
        `</svg>`,
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
      answer: '2/3',
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

  // ═══════════════════════════════════════════════════════════════════════════
  // PRACTICE SETS — 3 sets × 20 questions
  // Block layout per set: 1-3 multi-step order-of-operations expressions with
  // fractions/mixed numbers and brackets (Medium/Hard) | 4-6 squares, cubes and
  // roots of fractions combined into larger expressions (Medium-Hard/Hard) |
  // 7-9 single combined fraction-and-percentage word problems (Medium-Hard/
  // Hard) | 10-13 multi-step real-life problems with successive fraction and
  // percentage reductions of money/time/quantities (Hard) | 14-17 fraction
  // exponents/roots applied in context (area, money) plus complex multi-step
  // word problems (Hard) | 18-20 error-spotting, critique and comparison/
  // ordering (Hard)
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1: multi-step order-of-operations expressions (Q1-3)
        { difficulty: 'Medium', question: 'Calculate 2⅓ × ¾ + ½, using the correct order of operations.', checkMode: 'auto', options: [`2 ${frac('1', '4')}`, `2 ${frac('11', '12')}`, `1 ${frac('3', '4')}`, '2'], correctIndex: 0, explanation: 'Step 1: Convert the mixed number: 2⅓ = 7/3. Step 2: Multiply before adding: 7/3 × 3/4 = 21/12 = 7/4. Step 3: Add: 7/4 + 1/2 = 7/4 + 2/4 = 9/4 = 2¼. (Adding before multiplying, stopping after the multiplication, or dropping the ⅓ each give a wrong distractor.)' },
        { difficulty: 'Hard', question: 'Calculate (⅚ − ¼) × ⅔ − 1/9.', checkMode: 'auto', options: [frac('1', '2'), frac('5', '18'), frac('1', '3'), frac('7', '18')], correctIndex: 1, explanation: 'Step 1: Work out the bracket first: 5/6 − 1/4. LCM of 6 and 4 is 12: 10/12 − 3/12 = 7/12. Step 2: Multiply: 7/12 × 2/3 = 14/36 = 7/18. Step 3: Subtract: 7/18 − 1/9 = 7/18 − 2/18 = 5/18.' },
        { difficulty: 'Hard', question: 'Calculate 3½ − (⅔ + ⅙) × ⅗.', checkMode: 'auto', options: [`1 ${frac('3', '5')}`, `1 ${frac('7', '10')}`, '3', `2 ${frac('1', '2')}`], correctIndex: 2, explanation: 'Step 1: Work out the bracket: 2/3 + 1/6 = 4/6 + 1/6 = 5/6. Step 2: Multiply: 5/6 × 3/5 = 15/30 = 1/2. Step 3: Subtract from 3½ = 7/2: 7/2 − 1/2 = 6/2 = 3.' },

        // Block 2: squares, cubes and roots combined into larger expressions (Q4-6)
        { difficulty: 'Medium-Hard', question: 'Calculate (⅖)² + 3/10.', checkMode: 'auto', options: [frac('11', '10'), frac('1', '5'), frac('7', '10'), frac('23', '50')], correctIndex: 3, explanation: 'Step 1: Square the fraction: (2/5)² = 4/25. Step 2: Find the LCM of 25 and 10: LCM = 50. Convert: 4/25 = 8/50, 3/10 = 15/50. Step 3: Add the numerators: 8 + 15 = 23. Answer: 23/50.' },
        { difficulty: 'Medium-Hard', question: 'Calculate √(16/25) × ¾ + ⅕.', checkMode: 'auto', options: [frac('4', '5'), frac('8', '25'), frac('17', '25'), frac('3', '5')], correctIndex: 0, explanation: 'Step 1: Find the square root: √(16/25) = √16/√25 = 4/5. Step 2: Multiply: 4/5 × 3/4 = 12/20 = 3/5. Step 3: Add: 3/5 + 1/5 = 4/5.' },
        { difficulty: 'Hard', question: 'Calculate (½)³ + (⅔)² − ¼.', checkMode: 'auto', options: [frac('4', '9'), frac('23', '72'), frac('5', '9'), frac('41', '72')], correctIndex: 1, explanation: 'Step 1: Cube the first fraction: (1/2)³ = 1/8. Step 2: Square the second fraction: (2/3)² = 4/9. Step 3: Add using LCM of 8 and 9 = 72: 1/8 = 9/72, 4/9 = 32/72, so 9/72 + 32/72 = 41/72. Step 4: Subtract 1/4 = 18/72: 41/72 − 18/72 = 23/72.' },

        // Block 3: single combined fraction-and-percentage word problems (Q7-9)
        { difficulty: 'Medium-Hard', question: 'A jug holds 3⅗ litres of juice. If 20% of the juice is poured out, how many litres is that?', checkMode: 'auto', options: [frac('3', '5'), frac('9', '10'), frac('18', '25'), `2 ${frac('22', '25')}`], correctIndex: 2, explanation: 'Step 1: Convert the mixed number: 3⅗ = 18/5. Step 2: Write 20% as a fraction: 20% = 1/5. Step 3: Multiply: 1/5 × 18/5 = 18/25 litres.' },
        { difficulty: 'Hard', question: 'Find ⅜ of R960. Then calculate 25% of that result.', checkMode: 'auto', options: ['R240', 'R360', 'R75', 'R90'], correctIndex: 3, explanation: 'Step 1: Find 3/8 of R960: 3/8 × 960 = R360. Step 2: Find 25% of R360: 1/4 × 360 = R90.' },
        { difficulty: 'Hard', question: '⅖ of a number is 24. What is 75% of the same number?', checkMode: 'auto', options: ['45', '18', '42', '15'], correctIndex: 0, explanation: 'Step 1: Find the number: if 2/5 of it is 24, the number is 24 ÷ 2/5 = 24 × 5/2 = 60. Step 2: Find 75% of 60: 3/4 × 60 = 45.' },

        // Block 4: multi-step real-life problems with successive reductions (Q10-13)
        { difficulty: 'Hard', question: 'Thabo earns R5 400 for a holiday job. He saves ⅓ of it, then spends 20% of what remains on data. How much does he have left?', checkMode: 'auto', options: ['R2 520', 'R2 880', 'R4 320', 'R3 600'], correctIndex: 1, explanation: 'Step 1: Savings: 1/3 × 5 400 = R1 800. Remaining: 5 400 − 1 800 = R3 600. Step 2: Data: 20% × 3 600 = R720. Remaining: 3 600 − 720 = R2 880. (Taking 20% of the original R5 400 instead of the R3 600 remainder gives the R2 520 distractor.)' },
        { difficulty: 'Hard', question: 'Sarah has 3¾ hours of free time. She spends ⅖ of it studying, then ⅓ of what remains resting. How much time is left?', checkMode: 'auto', options: ['1', `2 ${frac('1', '4')}`, `1 ${frac('1', '2')}`, `1 ${frac('1', '4')}`], correctIndex: 2, explanation: 'Step 1: Convert 3¾ = 15/4. Studying: 2/5 × 15/4 = 30/20 = 3/2. Remaining: 15/4 − 3/2 = 15/4 − 6/4 = 9/4. Step 2: Resting: 1/3 × 9/4 = 9/12 = 3/4. Remaining: 9/4 − 3/4 = 6/4 = 3/2 = 1½ hours.' },
        { difficulty: 'Hard', question: 'A school has 720 learners. ⅝ of them play a sport. Of those who play a sport, 40% play soccer. How many learners play soccer?', checkMode: 'auto', options: ['288', '450', '108', '180'], correctIndex: 3, explanation: 'Step 1: Learners who play a sport: 5/8 × 720 = 450. Step 2: Of those, soccer players: 40% × 450 = 180. (Taking 40% of the full 720 instead of the 450 sport-players gives the 288 distractor.)' },
        { difficulty: 'Hard', question: 'A tin holds 2½ litres of paint. 30% is used on one wall, then ¼ of what remains is used on a second wall. How much paint is left?', checkMode: 'auto', options: [`1 ${frac('5', '16')}`, `1 ${frac('1', '8')}`, `1 ${frac('3', '4')}`, `1 ${frac('1', '4')}`], correctIndex: 0, explanation: 'Step 1: Convert 2½ = 5/2. First wall: 30% × 5/2 = 3/10 × 5/2 = 15/20 = 3/4. Remaining: 5/2 − 3/4 = 10/4 − 3/4 = 7/4. Step 2: Second wall: 1/4 × 7/4 = 7/16. Remaining: 7/4 − 7/16 = 28/16 − 7/16 = 21/16 = 1 5/16 litres.' },

        // Block 5: fraction exponents/roots in context plus complex multi-step problems (Q14-17)
        { difficulty: 'Hard', question: 'A square field has a side length of 2⅔ m. Calculate the area of the field, then subtract ½ m² for a gate. What is the remaining area?', checkMode: 'auto', options: [`4 ${frac('5', '6')}`, `6 ${frac('11', '18')}`, `7 ${frac('1', '9')}`, `3 ${frac('1', '2')}`], correctIndex: 1, explanation: 'Step 1: Convert 2⅔ = 8/3. Area = (8/3)² = 64/9. Step 2: Subtract 1/2: LCM of 9 and 2 is 18. 64/9 = 128/18, 1/2 = 9/18. 128/18 − 9/18 = 119/18 = 6 11/18 m².' },
        { difficulty: 'Hard', question: 'A business sets aside √(1/16) of its R2 800 profit for repairs. It then spends ⅗ of what remains on wages. How much profit is left?', checkMode: 'auto', options: ['R1 050', 'R420', 'R840', 'R1 120'], correctIndex: 2, explanation: 'Step 1: √(1/16) = 1/4. Repairs: 1/4 × 2 800 = R700. Remaining: 2 800 − 700 = R2 100. Step 2: Wages: 3/5 × 2 100 = R1 260. Remaining: 2 100 − 1 260 = R840.' },
        { difficulty: 'Hard', question: 'A recipe uses ¾ cup of flour per batch of muffins. Zinhle bakes 2⅓ batches, then adds an extra (½)² cup of flour for dusting. How much flour does she use in total?', checkMode: 'auto', options: [`1 ${frac('3', '4')}`, `2 ${frac('1', '4')}`, `2 ${frac('7', '12')}`, '2'], correctIndex: 3, explanation: 'Step 1: Flour for the batches: 3/4 × 2⅓ = 3/4 × 7/3 = 21/12 = 7/4. Step 2: Extra for dusting: (1/2)² = 1/4. Step 3: Add: 7/4 + 1/4 = 8/4 = 2 cups.' },
        { difficulty: 'Hard', question: 'A rectangular plot has a length of 4½ m. Its width is ⅔ of the length. Calculate the area of the plot, then subtract (⅓)² of the area for a path. What area remains?', checkMode: 'auto', options: ['12', '9', `10 ${frac('2', '3')}`, `13 ${frac('1', '2')}`], correctIndex: 0, explanation: 'Step 1: Width = 2/3 × 4½ = 2/3 × 9/2 = 18/6 = 3 m. Area = 4½ × 3 = 9/2 × 3 = 27/2 m². Step 2: Path fraction: (1/3)² = 1/9. Path area: 1/9 × 27/2 = 27/18 = 3/2 m². Step 3: Remaining area: 27/2 − 3/2 = 24/2 = 12 m².' },

        // Block 6: error-spotting, critique and comparison/ordering (Q18-20)
        { difficulty: 'Hard', question: 'Bongani calculates ½ + ¼ × ⅔ by first adding ½ and ¼, then multiplying by ⅔, getting ½ as his answer. What is the correct answer, using the proper order of operations?', checkMode: 'auto', options: [frac('1', '2'), frac('2', '3'), frac('19', '24'), frac('1', '6')], correctIndex: 1, explanation: 'Multiplication must be done before addition: 1/4 × 2/3 = 2/12 = 1/6. Add: 1/2 + 1/6 = 3/6 + 1/6 = 4/6 = 2/3. Bongani was wrong to add before multiplying — there was no bracket around ½ + ¼.' },
        { difficulty: 'Hard', question: 'Which of the following correctly orders (⅔)², 5/9 and √¼ + ⅙ from smallest to largest?', checkMode: 'auto', options: ['5/9, (⅔)², √¼ + ⅙', '√¼ + ⅙, 5/9, (⅔)²', '(⅔)², 5/9, √¼ + ⅙', '(⅔)², √¼ + ⅙, 5/9'], correctIndex: 2, explanation: 'Convert to a common denominator of 9: (⅔)² = 4/9, 5/9 stays 5/9, and √¼ + ⅙ = 1/2 + 1/6 = 3/6 + 1/6 = 4/6 = 2/3 = 6/9. Ordering from smallest to largest: 4/9 < 5/9 < 6/9, i.e. (⅔)², 5/9, √¼ + ⅙.' },
        { difficulty: 'Hard', question: 'Amahle says (¾)² + (¼)² gives the same answer as (¾ + ¼)². Which statement is correct?', checkMode: 'auto', options: ['She is correct — both sides equal 1, since squares distribute over addition.', 'She is correct — both sides equal 5/8.', 'She is incorrect — (¾)² + (¼)² = 1, but (¾ + ¼)² = 5/8.', 'She is incorrect — (¾)² + (¼)² = 9/16 + 1/16 = 5/8, but (¾ + ¼)² = 1² = 1, so squaring does not distribute over addition.'], correctIndex: 3, explanation: 'Calculate both sides: (¾)² + (¼)² = 9/16 + 1/16 = 10/16 = 5/8. (¾ + ¼)² = 1² = 1. Since 5/8 ≠ 1, the two expressions are not equal — squaring does not distribute over addition.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have a rock-solid grip on Grade 9 common fractions.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1: multi-step order-of-operations expressions (Q1-3)
        { difficulty: 'Medium', question: 'Calculate 1⅗ × ⅔ + ¼, using the correct order of operations.', checkMode: 'auto', options: [`1 ${frac('19', '60')}`, `1 ${frac('7', '15')}`, `1 ${frac('1', '15')}`, frac('11', '12')], correctIndex: 0, explanation: 'Step 1: Convert the mixed number: 1⅗ = 8/5. Step 2: Multiplication before addition: 8/5 × 2/3 = 16/15. Step 3: Add: 16/15 + 1/4. LCM of 15 and 4 is 60: 64/60 + 15/60 = 79/60 = 1 19/60.' },
        { difficulty: 'Hard', question: 'Calculate (¾ − ⅙) × ⅖ − 1/10.', checkMode: 'auto', options: [frac('1', '3'), frac('2', '15'), frac('1', '10'), frac('7', '30')], correctIndex: 1, explanation: 'Step 1: Work out the bracket first: 3/4 − 1/6. LCM of 4 and 6 is 12: 9/12 − 2/12 = 7/12. Step 2: Multiply: 7/12 × 2/5 = 14/60 = 7/30. Step 3: Subtract: 7/30 − 1/10 = 7/30 − 3/30 = 4/30 = 2/15.' },
        { difficulty: 'Hard', question: 'Calculate 4¼ − (⅗ + 1/10) × 2/7.', checkMode: 'auto', options: [`3 ${frac('4', '5')}`, frac('1', '5'), `4 ${frac('1', '20')}`, `4 ${frac('1', '2')}`], correctIndex: 2, explanation: 'Step 1: Work out the bracket: 3/5 + 1/10 = 6/10 + 1/10 = 7/10. Step 2: Multiply: 7/10 × 2/7 = 14/70 = 1/5. Step 3: Subtract from 4¼ = 17/4: 17/4 − 1/5. LCM of 4 and 5 is 20: 85/20 − 4/20 = 81/20 = 4 1/20.' },

        // Block 2: squares, cubes and roots combined into larger expressions (Q4-6)
        { difficulty: 'Medium-Hard', question: 'Calculate (⅗)² + 2/15.', checkMode: 'auto', options: [`1 ${frac('14', '15')}`, frac('11', '15'), frac('11', '40'), frac('37', '75')], correctIndex: 3, explanation: 'Step 1: Square the fraction: (3/5)² = 9/25. Step 2: Find the LCM of 25 and 15: LCM = 75. Convert: 9/25 = 27/75, 2/15 = 10/75. Step 3: Add the numerators: 27 + 10 = 37. Answer: 37/75.' },
        { difficulty: 'Medium-Hard', question: 'Calculate √(9/49) × 7/6 + ⅓.', checkMode: 'auto', options: [frac('5', '6'), frac('23', '42'), frac('17', '42'), frac('1', '2')], correctIndex: 0, explanation: 'Step 1: Find the square root: √(9/49) = √9/√49 = 3/7. Step 2: Multiply: 3/7 × 7/6 = 21/42 = 1/2. Step 3: Add: 1/2 + 1/3 = 3/6 + 2/6 = 5/6.' },
        { difficulty: 'Hard', question: 'Calculate (⅓)³ + (¾)² − ⅙.', checkMode: 'auto', options: [frac('73', '144'), frac('187', '432'), frac('259', '432'), frac('331', '432')], correctIndex: 1, explanation: 'Step 1: Cube the first fraction: (1/3)³ = 1/27. Step 2: Square the second fraction: (3/4)² = 9/16. Step 3: Add using LCM of 27 and 16 = 432: 1/27 = 16/432, 9/16 = 243/432, so 16/432 + 243/432 = 259/432. Step 4: Subtract 1/6 = 72/432: 259/432 − 72/432 = 187/432.' },

        // Block 3: single combined fraction-and-percentage word problems (Q7-9)
        { difficulty: 'Medium-Hard', question: 'A tank holds 4⅖ litres of water. If 15% of the water leaks out, how many litres is that?', checkMode: 'auto', options: [`1 ${frac('8', '25')}`, frac('3', '5'), frac('33', '50'), `3 ${frac('37', '50')}`], correctIndex: 2, explanation: 'Step 1: Convert the mixed number: 4⅖ = 22/5. Step 2: Write 15% as a fraction: 15% = 3/20. Step 3: Multiply: 3/20 × 22/5 = 66/100 = 33/50 litres.' },
        { difficulty: 'Hard', question: 'Find 5/12 of R840. Then calculate 40% of that result.', checkMode: 'auto', options: ['R350', 'R120', 'R336', 'R140'], correctIndex: 3, explanation: 'Step 1: Find 5/12 of R840: 5/12 × 840 = R350. Step 2: Find 40% of R350: 2/5 × 350 = R140.' },
        { difficulty: 'Hard', question: '⅜ of a number is 45. What is 60% of the same number?', checkMode: 'auto', options: ['72', '27', '48', '90'], correctIndex: 0, explanation: 'Step 1: Find the number: if 3/8 of it is 45, the number is 45 ÷ 3/8 = 45 × 8/3 = 120. Step 2: Find 60% of 120: 3/5 × 120 = 72.' },

        // Block 4: multi-step real-life problems with successive reductions (Q10-13)
        { difficulty: 'Hard', question: 'Palesa earns R7 200 for freelance work. She saves ¼ of it, then spends 15% of what remains on data. How much does she have left?', checkMode: 'auto', options: ['R4 320', 'R4 590', 'R5 400', 'R5 355'], correctIndex: 1, explanation: 'Step 1: Savings: 1/4 × 7 200 = R1 800. Remaining: 7 200 − 1 800 = R5 400. Step 2: Data: 15% × 5 400 = R810. Remaining: 5 400 − 810 = R4 590.' },
        { difficulty: 'Hard', question: 'Katlego has 5⅓ hours of free time. He spends ⅜ of it exercising, then ⅖ of what remains resting. How much time is left?', checkMode: 'auto', options: [`1 ${frac('1', '5')}`, `3 ${frac('1', '3')}`, '2', `2 ${frac('2', '3')}`], correctIndex: 2, explanation: 'Step 1: Convert 5⅓ = 16/3. Exercising: 3/8 × 16/3 = 48/24 = 2. Remaining: 16/3 − 2 = 16/3 − 6/3 = 10/3. Step 2: Resting: 2/5 × 10/3 = 20/15 = 4/3. Remaining: 10/3 − 4/3 = 6/3 = 2 hours.' },
        { difficulty: 'Hard', question: 'A school has 960 learners. ¾ of them play a sport. Of those who play a sport, 25% play netball. How many learners play netball?', checkMode: 'auto', options: ['240', '720', '160', '180'], correctIndex: 3, explanation: 'Step 1: Learners who play a sport: 3/4 × 960 = 720. Step 2: Of those, netball players: 25% × 720 = 180.' },
        { difficulty: 'Hard', question: 'A tin holds 3⅕ litres of paint. 40% is used on one wall, then ⅕ of what remains is used on a second wall. How much paint is left?', checkMode: 'auto', options: [`1 ${frac('67', '125')}`, `1 ${frac('7', '25')}`, `1 ${frac('23', '25')}`, frac('64', '125')], correctIndex: 0, explanation: 'Step 1: Convert 3⅕ = 16/5. First wall: 40% × 16/5 = 2/5 × 16/5 = 32/25. Remaining: 16/5 − 32/25 = 80/25 − 32/25 = 48/25. Step 2: Second wall: 1/5 × 48/25 = 48/125. Remaining: 48/25 − 48/125 = 240/125 − 48/125 = 192/125 = 1 67/125 litres.' },

        // Block 5: fraction exponents/roots in context plus complex multi-step problems (Q14-17)
        { difficulty: 'Hard', question: 'A square field has a side length of 3⅓ m. Calculate the area of the field, then subtract ⅓ m² for a gate. What is the remaining area?', checkMode: 'auto', options: [`6 ${frac('1', '3')}`, `10 ${frac('7', '9')}`, '33', `11 ${frac('1', '9')}`], correctIndex: 1, explanation: 'Step 1: Convert 3⅓ = 10/3. Area = (10/3)² = 100/9. Step 2: Subtract 1/3: 1/3 = 3/9. 100/9 − 3/9 = 97/9 = 10 7/9 m².' },
        { difficulty: 'Hard', question: 'A business sets aside √(1/9) of its R3 600 profit for repairs. It then spends ⅖ of what remains on wages. How much profit is left?', checkMode: 'auto', options: ['R1 920', 'R960', 'R1 440', 'R2 160'], correctIndex: 2, explanation: 'Step 1: √(1/9) = 1/3. Repairs: 1/3 × 3 600 = R1 200. Remaining: 3 600 − 1 200 = R2 400. Step 2: Wages: 2/5 × 2 400 = R960. Remaining: 2 400 − 960 = R1 440.' },
        { difficulty: 'Hard', question: 'A recipe uses ⅔ cup of sugar per batch of biscuits. Naledi bakes 1¾ batches, then adds an extra (⅓)² cup of sugar for a topping. How much sugar does she use in total?', checkMode: 'auto', options: [`1 ${frac('1', '6')}`, `1 ${frac('1', '2')}`, frac('7', '9'), `1 ${frac('5', '18')}`], correctIndex: 3, explanation: 'Step 1: Sugar for the batches: 2/3 × 1¾ = 2/3 × 7/4 = 14/12 = 7/6. Step 2: Extra for the topping: (1/3)² = 1/9. Step 3: Add using LCM of 6 and 9 = 18: 7/6 = 21/18, 1/9 = 2/18, so 21/18 + 2/18 = 23/18 = 1 5/18 cups.' },
        { difficulty: 'Hard', question: 'A rectangular plot has a length of 4 m. Its width is ⅝ of the length. Calculate the area of the plot, then subtract (¼)² of the area for a path. What area remains?', checkMode: 'auto', options: [`9 ${frac('3', '8')}`, `7 ${frac('1', '2')}`, '15', '10'], correctIndex: 0, explanation: 'Step 1: Width = 5/8 × 4 = 20/8 = 5/2 m. Area = 4 × 5/2 = 10 m². Step 2: Path fraction: (1/4)² = 1/16. Path area: 1/16 × 10 = 10/16 = 5/8 m². Step 3: Remaining area: 10 − 5/8 = 80/8 − 5/8 = 75/8 = 9 3/8 m².' },

        // Block 6: error-spotting, critique and comparison/ordering (Q18-20)
        { difficulty: 'Hard', question: 'Nomsa calculates ⅓ + ⅙ × ¾ by first adding ⅓ and ⅙, then multiplying by ¾, getting 3/8 as her answer. What is the correct answer, using the proper order of operations?', checkMode: 'auto', options: [frac('3', '8'), frac('11', '24'), frac('1', '8'), frac('29', '36')], correctIndex: 1, explanation: 'Multiplication must be done before addition: 1/6 × 3/4 = 3/24 = 1/8. Add: 1/3 + 1/8. LCM of 3 and 8 is 24: 8/24 + 3/24 = 11/24. Nomsa was wrong to add before multiplying — there was no bracket around ⅓ + ⅙.' },
        { difficulty: 'Hard', question: 'Which of the following correctly orders (¾)², 5/8 and √⅑ + ¼ from smallest to largest?', checkMode: 'auto', options: ['5/8, (¾)², √⅑ + ¼', '(¾)², 5/8, √⅑ + ¼', '(¾)², √⅑ + ¼, 5/8', '√⅑ + ¼, 5/8, (¾)²'], correctIndex: 2, explanation: 'Convert to forty-eighths: (¾)² = 9/16 = 27/48, 5/8 = 30/48, and √⅑ + ¼ = 1/3 + 1/4 = 4/12 + 3/12 = 7/12 = 28/48. Ordering from smallest to largest: 27/48 < 28/48 < 30/48, i.e. (¾)², √⅑ + ¼, 5/8.' },
        { difficulty: 'Hard', question: 'Sipho says (⅔)² + (⅓)² gives the same answer as (⅔ + ⅓)². Which statement is correct?', checkMode: 'auto', options: ['He is correct — both sides equal 1.', 'He is correct — both sides equal 5/9.', 'He is incorrect — (⅔)² + (⅓)² = 1, but (⅔ + ⅓)² = 5/9.', 'He is incorrect — (⅔)² + (⅓)² = 4/9 + 1/9 = 5/9, but (⅔ + ⅓)² = 1² = 1, so squaring does not distribute over addition.'], correctIndex: 3, explanation: 'Calculate both sides: (⅔)² + (⅓)² = 4/9 + 1/9 = 5/9. (⅔ + ⅓)² = 1² = 1. Since 5/9 ≠ 1, the two expressions are not equal — squaring does not distribute over addition.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have a rock-solid grip on Grade 9 common fractions.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout as Set 1, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1: multi-step order-of-operations expressions (Q1-3)
        { difficulty: 'Medium', question: 'Calculate 3¼ × ⅖ + ¼, using the correct order of operations.', checkMode: 'auto', options: [`1 ${frac('11', '20')}`, `2 ${frac('9', '80')}`, `1 ${frac('3', '10')}`, `1 ${frac('9', '20')}`], correctIndex: 0, explanation: 'Step 1: Convert the mixed number: 3¼ = 13/4. Step 2: Multiplication before addition: 13/4 × 2/5 = 26/20 = 13/10. Step 3: Add: 13/10 + 1/4. LCM of 10 and 4 is 20: 26/20 + 5/20 = 31/20 = 1 11/20.' },
        { difficulty: 'Hard', question: 'Calculate (⅞ − ⅓) × ⅗ − ⅙.', checkMode: 'auto', options: [frac('59', '120'), frac('19', '120'), frac('17', '60'), frac('13', '40')], correctIndex: 1, explanation: 'Step 1: Work out the bracket first: 7/8 − 1/3. LCM of 8 and 3 is 24: 21/24 − 8/24 = 13/24. Step 2: Multiply: 13/24 × 3/5 = 39/120 = 13/40. Step 3: Subtract: 13/40 − 1/6. LCM of 40 and 6 is 120: 39/120 − 20/120 = 19/120.' },
        { difficulty: 'Hard', question: 'Calculate 5⅓ − (½ + ¼) × 2/9.', checkMode: 'auto', options: [frac('55', '54'), frac('1', '6'), `5 ${frac('1', '6')}`, `4 ${frac('5', '6')}`], correctIndex: 2, explanation: 'Step 1: Work out the bracket: 1/2 + 1/4 = 2/4 + 1/4 = 3/4. Step 2: Multiply: 3/4 × 2/9 = 6/36 = 1/6. Step 3: Subtract from 5⅓ = 16/3: 16/3 − 1/6 = 32/6 − 1/6 = 31/6 = 5 1/6.' },

        // Block 2: squares, cubes and roots combined into larger expressions (Q4-6)
        { difficulty: 'Medium-Hard', question: 'Calculate (⅘)² − 3/25.', checkMode: 'auto', options: [`3 ${frac('2', '25')}`, frac('17', '25'), frac('19', '25'), frac('13', '25')], correctIndex: 3, explanation: 'Step 1: Square the fraction: (4/5)² = 16/25. Step 2: Subtract: 16/25 − 3/25 = 13/25.' },
        { difficulty: 'Medium-Hard', question: 'Calculate √(25/36) × ⅗ + ⅙.', checkMode: 'auto', options: [frac('2', '3'), frac('7', '12'), frac('1', '4'), frac('1', '2')], correctIndex: 0, explanation: 'Step 1: Find the square root: √(25/36) = √25/√36 = 5/6. Step 2: Multiply: 5/6 × 3/5 = 15/30 = 1/2. Step 3: Add: 1/2 + 1/6 = 3/6 + 1/6 = 4/6 = 2/3.' },
        { difficulty: 'Hard', question: 'Calculate (¼)³ + (½)² − ⅛.', checkMode: 'auto', options: [frac('3', '16'), frac('9', '64'), frac('17', '64'), frac('25', '64')], correctIndex: 1, explanation: 'Step 1: Cube the first fraction: (1/4)³ = 1/64. Step 2: Square the second fraction: (1/2)² = 1/4. Step 3: Add using LCM of 64 and 4 = 64: 1/4 = 16/64, so 1/64 + 16/64 = 17/64. Step 4: Subtract 1/8 = 8/64: 17/64 − 8/64 = 9/64.' },

        // Block 3: single combined fraction-and-percentage word problems (Q7-9)
        { difficulty: 'Medium-Hard', question: 'A bag holds 2⅘ kg of rice. If 35% of the rice is used, how many kilograms is that?', checkMode: 'auto', options: [frac('7', '10'), frac('21', '50'), frac('49', '50'), `1 ${frac('41', '50')}`], correctIndex: 2, explanation: 'Step 1: Convert the mixed number: 2⅘ = 14/5. Step 2: Write 35% as a fraction: 35% = 7/20. Step 3: Multiply: 7/20 × 14/5 = 98/100 = 49/50 kg.' },
        { difficulty: 'Hard', question: 'Find 7/10 of R650. Then calculate 20% of that result.', checkMode: 'auto', options: ['R455', 'R130', 'R84', 'R91'], correctIndex: 3, explanation: 'Step 1: Find 7/10 of R650: 7/10 × 650 = R455. Step 2: Find 20% of R455: 1/5 × 455 = R91.' },
        { difficulty: 'Hard', question: '⅚ of a number is 150. What is 40% of the same number?', checkMode: 'auto', options: ['72', '60', '50', '90'], correctIndex: 0, explanation: 'Step 1: Find the number: if 5/6 of it is 150, the number is 150 ÷ 5/6 = 150 × 6/5 = 180. Step 2: Find 40% of 180: 2/5 × 180 = 72.' },

        // Block 4: multi-step real-life problems with successive reductions (Q10-13)
        { difficulty: 'Hard', question: 'Vusi earns R8 400 for a part-time job. He saves ⅖ of it, then spends 10% of what remains on airtime. How much does he have left?', checkMode: 'auto', options: ['R4 200', 'R4 536', 'R5 040', 'R6 048'], correctIndex: 1, explanation: 'Step 1: Savings: 2/5 × 8 400 = R3 360. Remaining: 8 400 − 3 360 = R5 040. Step 2: Airtime: 10% × 5 040 = R504. Remaining: 5 040 − 504 = R4 536.' },
        { difficulty: 'Hard', question: 'Aisha has 6⅖ hours of free time. She spends ¼ of it on chores, then ⅓ of what remains on homework. How much time is left?', checkMode: 'auto', options: [`2 ${frac('2', '3')}`, `4 ${frac('4', '5')}`, `3 ${frac('1', '5')}`, `2 ${frac('4', '5')}`], correctIndex: 2, explanation: 'Step 1: Convert 6⅖ = 32/5. Chores: 1/4 × 32/5 = 32/20 = 8/5. Remaining: 32/5 − 8/5 = 24/5. Step 2: Homework: 1/3 × 24/5 = 24/15 = 8/5. Remaining: 24/5 − 8/5 = 16/5 = 3 1/5 hours.' },
        { difficulty: 'Hard', question: 'A school fair is attended by 840 learners. ⅚ of them attend. Of those who attend, 30% buy food. How many learners buy food?', checkMode: 'auto', options: ['252', '700', '168', '210'], correctIndex: 3, explanation: 'Step 1: Learners who attend: 5/6 × 840 = 700. Step 2: Of those, learners who buy food: 30% × 700 = 210.' },
        { difficulty: 'Hard', question: 'A tin holds 4⅘ litres of paint. 25% is used on one wall, then ⅙ of what remains is used on a second wall. How much paint is left?', checkMode: 'auto', options: ['3', `2 ${frac('4', '5')}`, `3 ${frac('3', '5')}`, `3 ${frac('1', '5')}`], correctIndex: 0, explanation: 'Step 1: Convert 4⅘ = 24/5. First wall: 25% × 24/5 = 1/4 × 24/5 = 6/5. Remaining: 24/5 − 6/5 = 18/5. Step 2: Second wall: 1/6 × 18/5 = 18/30 = 3/5. Remaining: 18/5 − 3/5 = 15/5 = 3 litres.' },

        // Block 5: fraction exponents/roots in context plus complex multi-step problems (Q14-17)
        { difficulty: 'Hard', question: 'A square field has a side length of 2½ m. Calculate the area of the field, then subtract ¾ m² for a gate. What is the remaining area?', checkMode: 'auto', options: [`4 ${frac('1', '4')}`, `5 ${frac('1', '2')}`, `11 ${frac('3', '4')}`, `6 ${frac('1', '4')}`], correctIndex: 1, explanation: 'Step 1: Convert 2½ = 5/2. Area = (5/2)² = 25/4. Step 2: Subtract 3/4: 25/4 − 3/4 = 22/4 = 11/2 = 5 1/2 m².' },
        { difficulty: 'Hard', question: 'A business sets aside √(1/25) of its R4 500 profit for repairs. It then spends ⅓ of what remains on wages. How much profit is left?', checkMode: 'auto', options: ['R2 880', 'R2 100', 'R2 400', 'R3 000'], correctIndex: 2, explanation: 'Step 1: √(1/25) = 1/5. Repairs: 1/5 × 4 500 = R900. Remaining: 4 500 − 900 = R3 600. Step 2: Wages: 1/3 × 3 600 = R1 200. Remaining: 3 600 − 1 200 = R2 400.' },
        { difficulty: 'Hard', question: 'A recipe uses ⅝ cup of flour per batch of pancakes. Lerato makes 2⅖ batches, then adds an extra (¼)² cup of flour for dusting. How much flour does she use in total?', checkMode: 'auto', options: [`1 ${frac('1', '2')}`, `1 ${frac('3', '4')}`, `1 ${frac('5', '16')}`, `1 ${frac('9', '16')}`], correctIndex: 3, explanation: 'Step 1: Flour for the batches: 5/8 × 2⅖ = 5/8 × 12/5 = 60/40 = 3/2. Step 2: Extra for dusting: (1/4)² = 1/16. Step 3: Add: 3/2 + 1/16 = 24/16 + 1/16 = 25/16 = 1 9/16 cups.' },
        { difficulty: 'Hard', question: 'A rectangular plot has a length of 5 m. Its width is ⅗ of the length. Calculate the area of the plot, then subtract (⅕)² of the area for a path. What area remains?', checkMode: 'auto', options: [`14 ${frac('2', '5')}`, '12', `9 ${frac('3', '5')}`, '15'], correctIndex: 0, explanation: 'Step 1: Width = 3/5 × 5 = 3 m. Area = 5 × 3 = 15 m². Step 2: Path fraction: (1/5)² = 1/25. Path area: 1/25 × 15 = 15/25 = 3/5 m². Step 3: Remaining area: 15 − 3/5 = 75/5 − 3/5 = 72/5 = 14 2/5 m².' },

        // Block 6: error-spotting, critique and comparison/ordering (Q18-20)
        { difficulty: 'Hard', question: 'Katlego calculates ⅖ + ¼ × ⅘ by first adding ⅖ and ¼, then multiplying by ⅘, getting 13/25 as his answer. What is the correct answer, using the proper order of operations?', checkMode: 'auto', options: [frac('13', '25'), frac('3', '5'), frac('1', '5'), frac('9', '10')], correctIndex: 1, explanation: 'Multiplication must be done before addition: 1/4 × 4/5 = 4/20 = 1/5. Add: 2/5 + 1/5 = 3/5. Katlego was wrong to add before multiplying — there was no bracket around ⅖ + ¼.' },
        { difficulty: 'Hard', question: 'Which of the following correctly orders ⅗, (⅖)² and √(1/16) + ⅜ from smallest to largest?', checkMode: 'auto', options: ['⅗, (⅖)², √(1/16) + ⅜', '√(1/16) + ⅜, ⅗, (⅖)²', '(⅖)², ⅗, √(1/16) + ⅜', '(⅖)², √(1/16) + ⅜, ⅗'], correctIndex: 2, explanation: 'Convert to a common denominator of 100 (or use decimals): (⅖)² = 4/25 = 16/100, ⅗ = 60/100, and √(1/16) + ⅜ = 1/4 + 3/8 = 2/8 + 3/8 = 5/8 = 62.5/100. Ordering from smallest to largest: 16/100 < 60/100 < 62.5/100, i.e. (⅖)², ⅗, √(1/16) + ⅜.' },
        { difficulty: 'Hard', question: 'Thandiwe says (⅗)² + (⅖)² gives the same answer as (⅗ + ⅖)². Which statement is correct?', checkMode: 'auto', options: ['She is correct — both sides equal 1.', 'She is correct — both sides equal 13/25.', 'She is incorrect — (⅗)² + (⅖)² = 1, but (⅗ + ⅖)² = 13/25.', 'She is incorrect — (⅗)² + (⅖)² = 9/25 + 4/25 = 13/25, but (⅗ + ⅖)² = 1² = 1, so squaring does not distribute over addition.'], correctIndex: 3, explanation: 'Calculate both sides: (⅗)² + (⅖)² = 9/25 + 4/25 = 13/25. (⅗ + ⅖)² = 1² = 1. Since 13/25 ≠ 1, the two expressions are not equal — squaring does not distribute over addition.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have a rock-solid grip on Grade 9 common fractions.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
