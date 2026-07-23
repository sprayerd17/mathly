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
        'Short video explaining the sign rules for multiplying and dividing integers with worked examples',
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
        'Short video explaining additive and multiplicative inverses of integers with examples showing why 0 is a special case',

      diagramPlaceholder:
        'Number line showing additive inverse pairs (-5,5) and (-3,3) linked by arcs summing to 0, with a small table of multiplicative inverse examples below',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 165" width="100%" style="max-width:440px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="160" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">Additive inverses: a + (−a) = 0</text>` +
        `<path d="M72.5,55 Q160,20 247.5,55" fill="none" stroke="#2563eb" stroke-width="2"/>` +
        `<path d="M107.5,55 Q160,38 212.5,55" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<line x1="20" y1="55" x2="300" y2="55" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="14,55 22,50 22,60" fill="#0f1f3d"/>` +
        `<polygon points="306,55 298,50 298,60" fill="#0f1f3d"/>` +
        `<circle cx="72.5" cy="55" r="5" fill="#2563eb"/>` +
        `<circle cx="107.5" cy="55" r="5" fill="#2563eb"/>` +
        `<circle cx="160" cy="55" r="4" fill="#6b7280"/>` +
        `<circle cx="212.5" cy="55" r="5" fill="#2563eb"/>` +
        `<circle cx="247.5" cy="55" r="5" fill="#2563eb"/>` +
        `<text x="72.5" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">-5</text>` +
        `<text x="107.5" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">-3</text>` +
        `<text x="160" y="72" text-anchor="middle" font-size="11" fill="#6b7280">0</text>` +
        `<text x="212.5" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">3</text>` +
        `<text x="247.5" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">5</text>` +
        `<rect x="40" y="95" width="240" height="55" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="160" y="111" text-anchor="middle" font-size="10" font-weight="700" fill="#ea580c">Multiplicative inverses: a × 1/a = 1</text>` +
        `<text x="160" y="129" text-anchor="middle" font-size="11" fill="#92400e">4 × ¼ = 1</text>` +
        `<text x="160" y="145" text-anchor="middle" font-size="11" fill="#92400e">−8 × (−⅛) = 1</text>` +
        `</svg>`,
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
        'Short video showing how to calculate with squares cubes and roots of integers including the difference between (negative a) squared and negative a squared',

      diagramPlaceholder:
        'Side-by-side comparison showing (-6) squared with brackets giving positive 36, versus negative 6 squared without brackets giving negative 36',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 150" width="100%" style="max-width:360px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="130" y1="10" x2="130" y2="130" stroke="#e2e8f0" stroke-width="1.5"/>` +
        `<text x="65" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">(−6)²</text>` +
        `<line x1="65" y1="30" x2="65" y2="45" stroke="#2563eb" stroke-width="2"/>` +
        `<polygon points="65,52 60,43 70,43" fill="#2563eb"/>` +
        `<text x="65" y="65" text-anchor="middle" font-size="11" fill="#2563eb">(−6) × (−6)</text>` +
        `<line x1="65" y1="73" x2="65" y2="88" stroke="#2563eb" stroke-width="2"/>` +
        `<polygon points="65,95 60,86 70,86" fill="#2563eb"/>` +
        `<text x="65" y="112" text-anchor="middle" font-size="16" font-weight="700" fill="#16a34a">= 36</text>` +
        `<text x="65" y="126" text-anchor="middle" font-size="8.5" fill="#6b7280">(same signs → positive)</text>` +
        `<text x="195" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">−6²</text>` +
        `<line x1="195" y1="30" x2="195" y2="45" stroke="#dc2626" stroke-width="2"/>` +
        `<polygon points="195,52 190,43 200,43" fill="#dc2626"/>` +
        `<text x="195" y="65" text-anchor="middle" font-size="11" fill="#dc2626">−(6 × 6)</text>` +
        `<line x1="195" y1="73" x2="195" y2="88" stroke="#dc2626" stroke-width="2"/>` +
        `<polygon points="195,95 190,86 200,86" fill="#dc2626"/>` +
        `<text x="195" y="112" text-anchor="middle" font-size="16" font-weight="700" fill="#dc2626">= −36</text>` +
        `<text x="195" y="126" text-anchor="middle" font-size="8.5" fill="#6b7280">(exponent applies first)</text>` +
        `<text x="130" y="144" text-anchor="middle" font-size="9" fill="#991b1b">Brackets change the order: (−a)² ≠ −a²</text>` +
        `</svg>`,
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered integers.' },
    { minScore: 12, message: 'Great work! You have a strong grasp of integers — review any missed questions and you will have it perfect.' },
    { minScore: 8, message: 'Good effort — review the sections where you lost marks and try again.' },
    { minScore: 0, message: 'Keep going — work through the guide again section by section, then try again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 1-4 Multi-step mixed operations with integers | 5-8 Integers
    // combined with exponents (squares/cubes of negatives) | 9-12 Order of
    // operations (BODMAS) with brackets, integers and exponents | 13-15 Roots
    // of integers combined with other operations | 16-18 Real-world multi-step
    // word problems | 19-20 Error-spotting / multi-step reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Medium', question: 'Calculate −14 + (−9) × 3.', answer: '-41', checkMode: 'auto', correctAnswer: '-41', explanation: 'Multiplication before addition: −9 × 3 = −27 (different signs → negative). Then −14 + (−27) = −41.' },
        { difficulty: 'Medium', question: 'Calculate 30 − (−6) × 4.', answer: '54', checkMode: 'auto', correctAnswer: '54', explanation: 'Multiplication before subtraction: −6 × 4 = −24. Then 30 − (−24) = 30 + 24 = 54.' },
        { difficulty: 'Medium', question: 'Calculate −18 − (−7) + (−5).', answer: '-16', checkMode: 'auto', correctAnswer: '-16', explanation: 'Work left to right. Step 1: −18 − (−7) = −18 + 7 = −11. Step 2: −11 + (−5) = −16.' },
        { difficulty: 'Medium-Hard', question: 'Palesa calculates −12 − 8 × 3 and gets −60, working left to right. Is she correct? Explain and give the correct answer.', answer: 'No — multiplication must be done before subtraction: 8 × 3 = 24, so −12 − 8 × 3 = −12 − 24 = −36, not −60.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Calculate (−4)².', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: '(−4)² = (−4) × (−4). Same signs → positive. 4 × 4 = 16. Answer: 16.' },
        { difficulty: 'Easy', question: 'Calculate (−3)³.', answer: '-27', checkMode: 'auto', correctAnswer: '-27', explanation: '(−3)³ = (−3) × (−3) × (−3) = 9 × (−3) = −27 (an odd power of a negative number is negative).' },
        { difficulty: 'Medium', question: 'Calculate (−2)² − (−3)³.', answer: '31', checkMode: 'auto', correctAnswer: '31', explanation: 'Step 1: (−2)² = 4. Step 2: (−3)³ = −27. Step 3: 4 − (−27) = 4 + 27 = 31.' },
        { difficulty: 'Hard', question: 'Calculate −5² + (−2)³.', answer: '-33', checkMode: 'auto', correctAnswer: '-33', explanation: 'No brackets around −5, so the exponent applies first: 5² = 25, then −5² = −25. Next (−2)³ = −8. Finally −25 + (−8) = −33.' },
        { difficulty: 'Medium', question: 'Use the correct order of operations to calculate 4 × (−3) + (−2)².', answer: '-8', checkMode: 'auto', correctAnswer: '-8', explanation: 'Exponents and multiplication before addition. Step 1: 4 × (−3) = −12. Step 2: (−2)² = 4. Step 3: −12 + 4 = −8.' },
        { difficulty: 'Medium', question: 'Use the correct order of operations to calculate (−6 + 2)² − 10.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Brackets first: −6 + 2 = −4. Then the exponent: (−4)² = 16. Finally 16 − 10 = 6.' },
        { difficulty: 'Medium-Hard', question: 'Use the correct order of operations to calculate −3 × (4 − (−2)).', answer: '-18', checkMode: 'auto', correctAnswer: '-18', explanation: 'Brackets first: 4 − (−2) = 4 + 2 = 6. Then −3 × 6 = −18 (different signs → negative).' },
        { difficulty: 'Hard', question: 'Use the correct order of operations to calculate (10 − (−2)) ÷ (−3) + (−4)².', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Brackets first: 10 − (−2) = 12. Then division: 12 ÷ (−3) = −4. Then the exponent: (−4)² = 16. Finally −4 + 16 = 12.' },
        { difficulty: 'Medium', question: 'Calculate √81 + (−3)³.', answer: '-18', checkMode: 'auto', correctAnswer: '-18', explanation: 'Step 1: √81 = 9 (since 9 × 9 = 81). Step 2: (−3)³ = −27. Step 3: 9 + (−27) = −18.' },
        { difficulty: 'Hard', question: 'Calculate ∛(−27) − (−5)².', answer: '-28', checkMode: 'auto', correctAnswer: '-28', explanation: 'Step 1: ∛(−27) = −3 (since (−3) × (−3) × (−3) = −27). Step 2: (−5)² = 25. Step 3: −3 − 25 = −28.' },
        { difficulty: 'Hard', question: 'Calculate (−2)³ × √16.', answer: '-32', checkMode: 'auto', correctAnswer: '-32', explanation: 'Step 1: (−2)³ = −8. Step 2: √16 = 4. Step 3: −8 × 4 = −32 (different signs → negative).' },
        { difficulty: 'Medium', question: 'The temperature at a weather station was −7°C. It dropped a further 5°C overnight, then rose 9°C by mid-morning. What was the temperature by mid-morning?', answer: '-3°C', checkMode: 'auto', correctAnswer: '-3', correctAnswers: ['-3', '-3°c', '-3c'], explanation: 'Start at −7°C, drop 5°C: −7 − 5 = −12°C. Then rise 9°C: −12 + 9 = −3°C.' },
        { difficulty: 'Medium-Hard', question: 'A hiker starts at an elevation of −240 m (below sea level). She climbs 85 m, then climbs a further 60 m. What is her final elevation, as an integer?', answer: '-95', checkMode: 'auto', correctAnswer: '-95', explanation: 'Start at −240 m. Climb 85 m: −240 + 85 = −155 m. Climb a further 60 m: −155 + 60 = −95 m.' },
        { difficulty: 'Medium-Hard', question: "Kagiso's account is overdrawn by R680, written as −R680. He deposits R250, then withdraws a further R90. What is his new balance?", answer: '-R520', checkMode: 'auto', correctAnswer: '-520', correctAnswers: ['-520', '-r520'], explanation: 'Start at −680. Deposit 250: −680 + 250 = −430. Withdraw 90: −430 − 90 = −520. New balance: −R520.' },
        { difficulty: 'Hard', question: 'Calculate the correct value of −2 × (−6 + 4) − (−3)².', answer: '-5', checkMode: 'auto', correctAnswer: '-5', explanation: 'Brackets first: −6 + 4 = −2. Then multiplication: −2 × (−2) = 4. Then the exponent: (−3)² = 9. Finally 4 − 9 = −5.' },
        { difficulty: 'Hard', question: 'Refilwe calculates (−3)² + (−2)³ × (−1) and gets −11, saying the exponents cancel out before multiplying. Is she correct? Show the correct working.', answer: 'No — first apply exponents: (−3)² = 9 and (−2)³ = −8. Then multiply: −8 × (−1) = 8. Finally 9 + 8 = 17, not −11.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered multi-step integer operations, exponents, roots and order of operations.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Medium', question: 'Calculate −17 + (−6) × 5.', answer: '-47', checkMode: 'auto', correctAnswer: '-47', explanation: 'Multiplication before addition: −6 × 5 = −30 (different signs → negative). Then −17 + (−30) = −47.' },
        { difficulty: 'Medium', question: 'Calculate 25 − (−8) × 3.', answer: '49', checkMode: 'auto', correctAnswer: '49', explanation: 'Multiplication before subtraction: −8 × 3 = −24. Then 25 − (−24) = 25 + 24 = 49.' },
        { difficulty: 'Medium', question: 'Calculate −21 − (−9) + (−6).', answer: '-18', checkMode: 'auto', correctAnswer: '-18', explanation: 'Work left to right. Step 1: −21 − (−9) = −21 + 9 = −12. Step 2: −12 + (−6) = −18.' },
        { difficulty: 'Medium-Hard', question: 'Bandile calculates −15 − 6 × 4 and gets −84, working left to right. Is he correct? Explain and give the correct answer.', answer: 'No — multiplication must be done before subtraction: 6 × 4 = 24, so −15 − 6 × 4 = −15 − 24 = −39, not −84.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Calculate (−6)².', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: '(−6)² = (−6) × (−6). Same signs → positive. 6 × 6 = 36. Answer: 36.' },
        { difficulty: 'Easy', question: 'Calculate (−4)³.', answer: '-64', checkMode: 'auto', correctAnswer: '-64', explanation: '(−4)³ = (−4) × (−4) × (−4) = 16 × (−4) = −64 (an odd power of a negative number is negative).' },
        { difficulty: 'Medium', question: 'Calculate (−3)² − (−2)³.', answer: '17', checkMode: 'auto', correctAnswer: '17', explanation: 'Step 1: (−3)² = 9. Step 2: (−2)³ = −8. Step 3: 9 − (−8) = 9 + 8 = 17.' },
        { difficulty: 'Hard', question: 'Calculate −6² + (−3)³.', answer: '-63', checkMode: 'auto', correctAnswer: '-63', explanation: 'No brackets around −6, so the exponent applies first: 6² = 36, then −6² = −36. Next (−3)³ = −27. Finally −36 + (−27) = −63.' },
        { difficulty: 'Medium', question: 'Use the correct order of operations to calculate 5 × (−2) + (−3)².', answer: '-1', checkMode: 'auto', correctAnswer: '-1', explanation: 'Exponents and multiplication before addition. Step 1: 5 × (−2) = −10. Step 2: (−3)² = 9. Step 3: −10 + 9 = −1.' },
        { difficulty: 'Medium', question: 'Use the correct order of operations to calculate (−7 + 3)² − 12.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'Brackets first: −7 + 3 = −4. Then the exponent: (−4)² = 16. Finally 16 − 12 = 4.' },
        { difficulty: 'Medium-Hard', question: 'Use the correct order of operations to calculate −4 × (5 − (−3)).', answer: '-32', checkMode: 'auto', correctAnswer: '-32', explanation: 'Brackets first: 5 − (−3) = 5 + 3 = 8. Then −4 × 8 = −32 (different signs → negative).' },
        { difficulty: 'Hard', question: 'Use the correct order of operations to calculate (18 − (−6)) ÷ (−4) + (−3)².', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Brackets first: 18 − (−6) = 24. Then division: 24 ÷ (−4) = −6. Then the exponent: (−3)² = 9. Finally −6 + 9 = 3.' },
        { difficulty: 'Medium', question: 'Calculate √64 + (−2)³.', answer: '0', checkMode: 'auto', correctAnswer: '0', explanation: 'Step 1: √64 = 8 (since 8 × 8 = 64). Step 2: (−2)³ = −8. Step 3: 8 + (−8) = 0.' },
        { difficulty: 'Hard', question: 'Calculate ∛(−8) − (−4)².', answer: '-18', checkMode: 'auto', correctAnswer: '-18', explanation: 'Step 1: ∛(−8) = −2 (since (−2) × (−2) × (−2) = −8). Step 2: (−4)² = 16. Step 3: −2 − 16 = −18.' },
        { difficulty: 'Hard', question: 'Calculate (−3)³ × √9.', answer: '-81', checkMode: 'auto', correctAnswer: '-81', explanation: 'Step 1: (−3)³ = −27. Step 2: √9 = 3. Step 3: −27 × 3 = −81 (different signs → negative).' },
        { difficulty: 'Medium', question: 'The temperature at a weather station was −9°C. It dropped a further 6°C overnight, then rose 14°C by mid-morning. What was the temperature by mid-morning?', answer: '-1°C', checkMode: 'auto', correctAnswer: '-1', correctAnswers: ['-1', '-1°c', '-1c'], explanation: 'Start at −9°C, drop 6°C: −9 − 6 = −15°C. Then rise 14°C: −15 + 14 = −1°C.' },
        { difficulty: 'Medium-Hard', question: 'A hiker starts at an elevation of −310 m (below sea level). She climbs 120 m, then climbs a further 45 m. What is her final elevation, as an integer?', answer: '-145', checkMode: 'auto', correctAnswer: '-145', explanation: 'Start at −310 m. Climb 120 m: −310 + 120 = −190 m. Climb a further 45 m: −190 + 45 = −145 m.' },
        { difficulty: 'Medium-Hard', question: "Naledi's account is overdrawn by R540, written as −R540. She deposits R300, then withdraws a further R120. What is her new balance?", answer: '-R360', checkMode: 'auto', correctAnswer: '-360', correctAnswers: ['-360', '-r360'], explanation: 'Start at −540. Deposit 300: −540 + 300 = −240. Withdraw 120: −240 − 120 = −360. New balance: −R360.' },
        { difficulty: 'Hard', question: 'Calculate the correct value of −3 × (−8 + 5) − (−2)².', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Brackets first: −8 + 5 = −3. Then multiplication: −3 × (−3) = 9. Then the exponent: (−2)² = 4. Finally 9 − 4 = 5.' },
        { difficulty: 'Hard', question: 'Sibusiso calculates (−4)² + (−3)³ × (−1) and gets 13, saying the exponents cancel out before multiplying. Is he correct? Show the correct working.', answer: 'No — first apply exponents: (−4)² = 16 and (−3)³ = −27. Then multiply: −27 × (−1) = 27. Finally 16 + 27 = 43, not 13.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered multi-step integer operations, exponents, roots and order of operations.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout as Set 1/2, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Medium', question: 'Calculate −20 + (−8) × 3.', answer: '-44', checkMode: 'auto', correctAnswer: '-44', explanation: 'Multiplication before addition: −8 × 3 = −24 (different signs → negative). Then −20 + (−24) = −44.' },
        { difficulty: 'Medium', question: 'Calculate 18 − (−9) × 5.', answer: '63', checkMode: 'auto', correctAnswer: '63', explanation: 'Multiplication before subtraction: −9 × 5 = −45. Then 18 − (−45) = 18 + 45 = 63.' },
        { difficulty: 'Medium', question: 'Calculate −14 − (−8) + (−11).', answer: '-17', checkMode: 'auto', correctAnswer: '-17', explanation: 'Work left to right. Step 1: −14 − (−8) = −14 + 8 = −6. Step 2: −6 + (−11) = −17.' },
        { difficulty: 'Medium-Hard', question: 'Ayanda calculates −9 − 7 × 5 and gets −80, working left to right. Is she correct? Explain and give the correct answer.', answer: 'No — multiplication must be done before subtraction: 7 × 5 = 35, so −9 − 7 × 5 = −9 − 35 = −44, not −80.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Calculate (−7)².', answer: '49', checkMode: 'auto', correctAnswer: '49', explanation: '(−7)² = (−7) × (−7). Same signs → positive. 7 × 7 = 49. Answer: 49.' },
        { difficulty: 'Easy', question: 'Calculate (−5)³.', answer: '-125', checkMode: 'auto', correctAnswer: '-125', explanation: '(−5)³ = (−5) × (−5) × (−5) = 25 × (−5) = −125 (an odd power of a negative number is negative).' },
        { difficulty: 'Medium', question: 'Calculate (−4)² − (−2)³.', answer: '24', checkMode: 'auto', correctAnswer: '24', explanation: 'Step 1: (−4)² = 16. Step 2: (−2)³ = −8. Step 3: 16 − (−8) = 16 + 8 = 24.' },
        { difficulty: 'Hard', question: 'Calculate −4² + (−3)³.', answer: '-43', checkMode: 'auto', correctAnswer: '-43', explanation: 'No brackets around −4, so the exponent applies first: 4² = 16, then −4² = −16. Next (−3)³ = −27. Finally −16 + (−27) = −43.' },
        { difficulty: 'Medium', question: 'Use the correct order of operations to calculate 6 × (−3) + (−4)².', answer: '-2', checkMode: 'auto', correctAnswer: '-2', explanation: 'Exponents and multiplication before addition. Step 1: 6 × (−3) = −18. Step 2: (−4)² = 16. Step 3: −18 + 16 = −2.' },
        { difficulty: 'Medium', question: 'Use the correct order of operations to calculate (−5 + 1)² − 8.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Brackets first: −5 + 1 = −4. Then the exponent: (−4)² = 16. Finally 16 − 8 = 8.' },
        { difficulty: 'Medium-Hard', question: 'Use the correct order of operations to calculate −5 × (6 − (−1)).', answer: '-35', checkMode: 'auto', correctAnswer: '-35', explanation: 'Brackets first: 6 − (−1) = 6 + 1 = 7. Then −5 × 7 = −35 (different signs → negative).' },
        { difficulty: 'Hard', question: 'Use the correct order of operations to calculate (14 − (−4)) ÷ (−3) + (−5)².', answer: '19', checkMode: 'auto', correctAnswer: '19', explanation: 'Brackets first: 14 − (−4) = 18. Then division: 18 ÷ (−3) = −6. Then the exponent: (−5)² = 25. Finally −6 + 25 = 19.' },
        { difficulty: 'Medium', question: 'Calculate √100 + (−4)³.', answer: '-54', checkMode: 'auto', correctAnswer: '-54', explanation: 'Step 1: √100 = 10 (since 10 × 10 = 100). Step 2: (−4)³ = −64. Step 3: 10 + (−64) = −54.' },
        { difficulty: 'Hard', question: 'Calculate ∛(−64) − (−3)².', answer: '-13', checkMode: 'auto', correctAnswer: '-13', explanation: 'Step 1: ∛(−64) = −4 (since (−4) × (−4) × (−4) = −64). Step 2: (−3)² = 9. Step 3: −4 − 9 = −13.' },
        { difficulty: 'Hard', question: 'Calculate (−1)³ × √25.', answer: '-5', checkMode: 'auto', correctAnswer: '-5', explanation: 'Step 1: (−1)³ = −1. Step 2: √25 = 5. Step 3: −1 × 5 = −5 (different signs → negative).' },
        { difficulty: 'Medium', question: 'The temperature at a weather station was −11°C. It dropped a further 4°C overnight, then rose 19°C by mid-morning. What was the temperature by mid-morning?', answer: '4°C', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4°c', '4c'], explanation: 'Start at −11°C, drop 4°C: −11 − 4 = −15°C. Then rise 19°C: −15 + 19 = 4°C.' },
        { difficulty: 'Medium-Hard', question: 'A hiker starts at an elevation of −180 m (below sea level). She climbs 95 m, then climbs a further 40 m. What is her final elevation, as an integer?', answer: '-45', checkMode: 'auto', correctAnswer: '-45', explanation: 'Start at −180 m. Climb 95 m: −180 + 95 = −85 m. Climb a further 40 m: −85 + 40 = −45 m.' },
        { difficulty: 'Medium-Hard', question: "Thandeka's account is overdrawn by R415, written as −R415. She deposits R275, then withdraws a further R160. What is her new balance?", answer: '-R300', checkMode: 'auto', correctAnswer: '-300', correctAnswers: ['-300', '-r300'], explanation: 'Start at −415. Deposit 275: −415 + 275 = −140. Withdraw 160: −140 − 160 = −300. New balance: −R300.' },
        { difficulty: 'Hard', question: 'Calculate the correct value of −4 × (−9 + 6) − (−5)².', answer: '-13', checkMode: 'auto', correctAnswer: '-13', explanation: 'Brackets first: −9 + 6 = −3. Then multiplication: −4 × (−3) = 12. Then the exponent: (−5)² = 25. Finally 12 − 25 = −13.' },
        { difficulty: 'Hard', question: 'Katlego calculates (−2)² + (−4)³ × (−1) and gets −18, saying the exponents cancel out before multiplying. Is he correct? Show the correct working.', answer: 'No — first apply exponents: (−2)² = 4 and (−4)³ = −64. Then multiply: −64 × (−1) = 64. Finally 4 + 64 = 68, not −18.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered multi-step integer operations, exponents, roots and order of operations.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
