import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (integer roles) ───────────────────────────────────────────
// positive / same-sign result → green  (#16a34a)
// negative / diff-sign result → red    (#dc2626)
// additive inverse / squares  → blue   (#2563eb)
// multiplicative inverse / cubes → orange (#ea580c)
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Integers',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MULTIPLYING AND DIVIDING INTEGERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-dividing-integers',
      title: 'Multiplying and Dividing Integers',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">We revise addition and subtraction with integers, then extend to <strong>multiplying and dividing integers</strong>. The sign of the answer depends on the signs of the numbers involved: <strong>same signs give a positive answer; different signs give a negative answer.</strong></p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('same sign → positive')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('different sign → negative')}</span>` +
        `</div>` +

        // ── Sign rules ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sign rules for multiplication and division</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Same signs → ${gr('Positive')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(+) × (+) = ${gr('+')}<br>(−) × (−) = ${gr('+')}<br>(+) ÷ (+) = ${gr('+')}<br>(−) ÷ (−) = ${gr('+')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Different signs → ${re('Negative')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(+) × (−) = ${re('−')}<br>(−) × (+) = ${re('−')}<br>(+) ÷ (−) = ${re('−')}<br>(−) ÷ (+) = ${re('−')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Using absolute values</p>` +
        `<p style="margin:0;color:#1e3a8a;">To find the <strong>value</strong> of the answer, ignore the signs and multiply or divide as usual. Then apply the sign rule to determine whether the answer is ${gr('positive')} or ${re('negative')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate −8 × −5.',
          answer: `${gr('40')}`,
          steps: [
            `Identify the signs: both numbers are ${gr('negative')} — the signs are the <strong>same</strong>.`,
            `${gr('Same signs → positive answer.')}</strong>`,
            `Multiply the absolute values: 8 × 5 = ${gr('40')}`,
            `<strong>Answer:</strong> −8 × −5 = ${gr('40')} ✓`,
          ],
        },
        {
          question: 'Calculate −36 ÷ 4.',
          answer: `${re('−9')}`,
          steps: [
            `Identify the signs: −36 is ${re('negative')}, 4 is ${gr('positive')} — the signs are <strong>different</strong>.`,
            `${re('Different signs → negative answer.')}`,
            `Divide the absolute values: 36 ÷ 4 = 9`,
            `<strong>Answer:</strong> −36 ÷ 4 = ${re('−9')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate −6 × −7.',
          answer: '42',
          checkMode: 'auto',
          correctAnswer: '42',
          explanation: 'Same signs → positive answer.\n6 × 7 = 42.\nAnswer: −6 × −7 = 42 ✓',
        },

        // ── Q2 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate −45 ÷ −9.',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'Same signs → positive answer.\n45 ÷ 9 = 5.\nAnswer: −45 ÷ −9 = 5 ✓',
        },

        // ── Q3 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate −8 × 6 ÷ −4.',
          answer: '12',
          checkMode: 'auto',
          correctAnswer: '12',
          explanation: 'Work left to right.\nStep 1: −8 × 6 = −48 (different signs → negative).\nStep 2: −48 ÷ −4 = 12 (same signs → positive).\nAnswer: 12 ✓',
        },

        // ── Q4 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says −9 × −9 = −81. Is he correct? Explain.',
          answer: 'No — same signs give a positive answer: −9 × −9 = 81.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the sign rules for multiplying and dividing integers with worked examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Sign rule diagram showing same signs give positive and different signs give negative for multiplication and division of integers" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PROPERTIES OF INTEGERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-of-integers',
      title: 'Properties of Integers',
      icon: '±',
      explanation:
        `<p style="margin-bottom:16px;">We use the <strong>commutative, associative and distributive properties</strong> of addition and multiplication for integers, and recognise <strong>additive inverses</strong> (a number and its opposite sum to 0) and <strong>multiplicative inverses</strong> (a number and its reciprocal multiply to 1).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('additive inverse')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('multiplicative inverse')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Additive inverse</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">The additive inverse of <em>a</em> is <em>−a</em>, because ${bl('a + (−a) = 0')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Example: the additive inverse of 5 is −5, since 5 + (−5) = 0.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Multiplicative inverse</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">The multiplicative inverse of <em>a</em> is <em>1/a</em>, because ${or('a × (1/a) = 1')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Example: the multiplicative inverse of 4 is 1/4, since 4 × 1/4 = 1.</p>` +
        `</div>` +

        `</div>` +

        // ── Properties ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Properties of addition and multiplication</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<p style="margin:0;font-size:14px;"><strong>Commutative:</strong> a + b = b + a &nbsp; and &nbsp; a × b = b × a</p>` +
        `</div>` +

        `<div style="padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<p style="margin:0;font-size:14px;"><strong>Associative:</strong> (a + b) + c = a + (b + c) &nbsp; and &nbsp; (a × b) × c = a × (b × c)</p>` +
        `</div>` +

        `<div style="padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<p style="margin:0;font-size:14px;"><strong>Distributive:</strong> a × (b + c) = a × b + a × c</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Special cases</p>` +
        `<p style="margin:0;color:#1e3a8a;">The ${bl('additive inverse')} of 0 is 0 itself, since 0 + 0 = 0. The number 0 has <strong>no</strong> ${or('multiplicative inverse')} because division by 0 is undefined.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the additive inverse of −7.',
          answer: `${bl('7')}`,
          steps: [
            `The ${bl('additive inverse')} is the number that sums to 0 when added to the original.`,
            `We need: −7 + ? = 0`,
            `So the additive inverse is ${bl('7')}, since −7 + ${bl('7')} = 0 ✓`,
          ],
        },
        {
          question: 'Find the multiplicative inverse of −4.',
          answer: `${or('−¼')}`,
          steps: [
            `The ${or('multiplicative inverse')} is the reciprocal — the number that gives 1 when multiplied by the original.`,
            `We need: −4 × ? = 1`,
            `The reciprocal of −4 is ${or('−¼')}, since −4 × (${or('−¼')}) = 1 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q5 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the additive inverse of 12.',
          answer: '-12',
          checkMode: 'auto',
          correctAnswer: '-12',
          explanation: 'The additive inverse of 12 is the number that sums to 0: 12 + (−12) = 0.\nAnswer: −12 ✓',
        },

        // ── Q6 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the multiplicative inverse of −8.',
          answer: '-1/8',
          checkMode: 'auto',
          correctAnswer: '-1/8',
          explanation: 'The multiplicative inverse is the reciprocal: 1 ÷ (−8) = −1/8.\nCheck: −8 × (−1/8) = 1 ✓\nAnswer: −1/8 ✓',
        },

        // ── Q7 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says the additive inverse of 0 is undefined. Is she correct? Explain.',
          answer: 'No — the additive inverse of 0 is 0, since 0 + 0 = 0.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining additive and multiplicative inverses of integers with examples showing why 0 is a special case" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the number line pairing of additive inverses and a table of multiplicative inverses for integers" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CALCULATIONS WITH SQUARES, CUBES AND ROOTS OF INTEGERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'squares-cubes-roots-integers',
      title: 'Calculations with Squares, Cubes and Roots of Integers',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">We perform calculations involving <strong>all four operations</strong> with integers, including numbers that involve <strong>squares, cubes, square roots and cube roots</strong> of integers.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('squares')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('cubes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('roots')}</span>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key facts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Squares</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">${bl('(−a)²')} = (−a) × (−a) = ${bl('+a²')} (always positive)</p>` +
        `<p style="color:#dc2626;font-size:13px;margin:0;">Note: −a² means −(a²), which is negative.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Cubes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('(−a)³')} = (−a) × (−a) × (−a) = ${or('−a³')} (negative when a &gt; 0)</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Roots</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('√a')} is only defined for a ≥ 0. ${gr('∛a')} is defined for all integers.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Watch: (−a)² ≠ −a²</p>` +
        `<p style="margin:0;color:#991b1b;">The brackets matter. ${bl('(−6)²')} = 36 but −6² = −36. Always apply the exponent before the negative sign when there are no brackets.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate (−3)² + (−2)³.',
          answer: `${bl('9')} + (${or('−8')}) = 1`,
          steps: [
            `Calculate the ${bl('square')}: ${bl('(−3)²')} = (−3) × (−3) = ${bl('9')} (same signs → positive)`,
            `Calculate the ${or('cube')}: ${or('(−2)³')} = (−2) × (−2) × (−2) = 4 × (−2) = ${or('−8')} (different signs → negative)`,
            `Add the results: ${bl('9')} + (${or('−8')}) = 9 − 8 = <strong>1</strong>`,
            `<strong>Answer:</strong> (−3)² + (−2)³ = 1 ✓`,
          ],
        },
        {
          question: 'Calculate √64 − (−3)².',
          answer: `${gr('8')} − ${bl('9')} = −1`,
          steps: [
            `Calculate the ${gr('square root')}: ${gr('√64')} = ${gr('8')} (since 8 × 8 = 64)`,
            `Calculate the ${bl('square')}: ${bl('(−3)²')} = (−3) × (−3) = ${bl('9')}`,
            `Subtract: ${gr('8')} − ${bl('9')} = <strong>−1</strong>`,
            `<strong>Answer:</strong> √64 − (−3)² = −1 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q8 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate (−2)³.',
          answer: '-8',
          checkMode: 'auto',
          correctAnswer: '-8',
          explanation: '(−2)³ = (−2) × (−2) × (−2)\n= 4 × (−2)\n= −8 (different signs → negative)\nAnswer: −8 ✓',
        },

        // ── Q9 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate (−5)² − 3³.',
          answer: '-2',
          checkMode: 'auto',
          correctAnswer: '-2',
          explanation: 'Step 1: (−5)² = 25 (same signs → positive)\nStep 2: 3³ = 27\nStep 3: 25 − 27 = −2\nAnswer: −2 ✓',
        },

        // ── Q10 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Calculate √49 + (−4)².',
          answer: '23',
          checkMode: 'auto',
          correctAnswer: '23',
          explanation: 'Step 1: √49 = 7 (since 7 × 7 = 49)\nStep 2: (−4)² = 16 (same signs → positive)\nStep 3: 7 + 16 = 23\nAnswer: 23 ✓',
        },

        // ── Q11 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate −3³ + √25.',
          answer: '-22',
          checkMode: 'auto',
          correctAnswer: '-22',
          explanation: 'Step 1: 3³ = 27, so −3³ = −27 (note: no brackets, so negative applies after)\nStep 2: √25 = 5\nStep 3: −27 + 5 = −22\nAnswer: −22 ✓',
        },

        // ── Q12 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo says (−6)² and −6² are equal. Is he correct? Explain.',
          answer: 'No — (−6)² = 36 but −6² = −36. They are different.',
          checkMode: 'self',
        },

        // ── Q13 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate −18 ÷ −3 + (−4).',
          answer: '2',
          checkMode: 'auto',
          correctAnswer: '2',
          explanation: 'Step 1: −18 ÷ −3 = 6 (same signs → positive)\nStep 2: 6 + (−4) = 6 − 4 = 2\nAnswer: 2 ✓',
        },

        // ── Q14 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Find two integers whose product is −24 and whose sum is −2.',
          answer: '4 and −6, since 4 × (−6) = −24 and 4 + (−6) = −2.',
          checkMode: 'self',
        },

        // ── Q15 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Calculate (−2)³ × (−1)⁴.',
          answer: '-8',
          checkMode: 'auto',
          correctAnswer: '-8',
          explanation: 'Step 1: (−2)³ = −8 (odd power of negative → negative)\nStep 2: (−1)⁴ = 1 (even power of negative → positive)\nStep 3: −8 × 1 = −8\nAnswer: −8 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate with squares cubes and roots of integers including the difference between (negative a) squared and negative a squared" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram illustrating the difference between (−a)² and −a² with colour coded squares cubes and root calculations" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered integers.' },
    { minScore: 12, message: 'Great work! You have a strong grasp of integers — review any missed questions and you will have it perfect.' },
    { minScore: 8, message: 'Good effort — review the sections where you lost marks and try again.' },
    { minScore: 0, message: 'Keep going — work through the guide again section by section, then try again.' },
  ],
}
