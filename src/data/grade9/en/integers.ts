import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (integer topic roles) ─────────────────────────────────────
// squares / square roots  → blue   (#2563eb)
// cubes / cube roots      → orange (#ea580c)
// final answer            → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Integers',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISING CALCULATIONS WITH INTEGERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'revising-calculations',
      title: 'Revising Calculations with Integers',
      icon: '±',
      explanation:
        `<p style="margin-bottom:16px;">We consolidate all four operations with integers — addition, subtraction, multiplication and division — including calculations involving <strong>squares</strong>, <strong>cubes</strong>, <strong>square roots</strong> and <strong>cube roots</strong> of integers, often combined in multi-step problems.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('squares / square roots')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('cubes / cube roots')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── Key rules ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sign rules for operations</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Multiplication &amp; Division</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Same signs → <strong>positive</strong>.<br>Different signs → <strong>negative</strong>.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Powers of negatives</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Even power → <strong>positive</strong>.<br>Odd power → <strong>negative</strong>.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Watch: −4² vs (−4)²</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">−4² = −16 (square only the 4).<br>(−4)² = 16 (square the whole −4).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Roots of integers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('√36')} = 6 (positive square root).<br>${or('∛(−8)')} = −2 (negative cube root).</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Apply BODMAS</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always follow the order of operations: <strong>B</strong>rackets → <strong>O</strong>rders (powers and roots) → <strong>D</strong>ivision and <strong>M</strong>ultiplication (left to right) → <strong>A</strong>ddition and <strong>S</strong>ubtraction (left to right).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate −5 × (−3) + (−2)³.',
          answer: `${gr('7')}`,
          steps: [
            `<strong>Multiplication first (BODMAS):</strong> −5 × (−3) = <strong>15</strong> (negative × negative = positive).`,
            `<strong>${or('Cube')}:</strong> (−2)³ = ${or('−8')} (negative number raised to an odd power stays negative).`,
            `<strong>Add:</strong> 15 + (−8) = ${gr('7')} ✓`,
          ],
        },
        {
          question: 'Calculate (√36 − (−4)) ÷ 2.',
          answer: `${gr('5')}`,
          steps: [
            `<strong>${bl('Square root')}:</strong> ${bl('√36')} = ${bl('6')}.`,
            `<strong>Brackets — subtract a negative:</strong> 6 − (−4) = 6 + 4 = 10.`,
            `<strong>Divide:</strong> 10 ÷ 2 = ${gr('5')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate −8 × (−6).',
          answer: '48',
          checkMode: 'auto',
          correctAnswer: '48',
          explanation: 'Negative × negative = positive.\n−8 × (−6) = 48 ✓',
        },

        // ── Q2 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate −4² + (−3)³.',
          answer: '−43',
          checkMode: 'auto',
          correctAnswer: '-43',
          explanation: '−4² = −(4²) = −16 (the square applies only to 4, not the negative sign).\n(−3)³ = −27 (negative cubed stays negative).\n−16 + (−27) = −43 ✓',
        },

        // ── Q3 Hard (self) ───────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says −4² = 16. Is he correct? Explain.',
          answer: 'No — −4² means −(4²) = −16, not (−4)² = 16. Without brackets around the negative, only the 4 is squared.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video showing how to apply BODMAS with integer operations including squares cubes square roots and cube roots',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — REVISING PROPERTIES AND INVERSES OF INTEGERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'revising-properties-inverses',
      title: 'Revising Properties and Inverses of Integers',
      icon: '⇄',
      explanation:
        `<p style="margin-bottom:16px;">We consolidate the <strong>commutative</strong>, <strong>associative</strong> and <strong>distributive</strong> properties of addition and multiplication for integers, and revise <strong>additive</strong> and <strong>multiplicative inverses</strong>, applying these in multi-step calculations.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('distributive property')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('additive inverse')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('multiplicative inverse')}</span>` +
        `</div>` +

        // ── Properties ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Properties of integers</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Commutative</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">a + b = b + a &nbsp;and&nbsp; a × b = b × a.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Associative</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(a + b) + c = a + (b + c) — grouping does not change the result.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Distributive')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">a(b + c) = ${bl('ab + ac')}. Multiply each term inside the bracket.</p>` +
        `</div>` +

        `</div>` +

        // ── Inverses ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Additive and multiplicative inverses</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Additive inverse')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The number you add to get <strong>0</strong>.<br>The additive inverse of a is −a.<br>Example: additive inverse of −9 is <strong>9</strong>, since −9 + 9 = 0.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Multiplicative inverse')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The number you multiply by to get <strong>1</strong>.<br>The multiplicative inverse of a is 1/a.<br>Example: multiplicative inverse of −6 is <strong>−1/6</strong>, since −6 × −1/6 = 1.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Additive vs multiplicative inverse — do not confuse them</p>` +
        `<p style="margin:0;color:#7c2d12;">The ${or('additive inverse')} of −9 is <strong>9</strong> (add to get 0). The ${gr('multiplicative inverse')} of −9 is <strong>−1/9</strong> (multiply to get 1). They are very different!</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Use the distributive property to calculate −4(7 − 3).',
          answer: `${gr('−16')}`,
          steps: [
            `<strong>${bl('Distribute')}:</strong> ${bl('−4(7 − 3)')} = (${bl('−4 × 7')}) − (${bl('−4 × 3')}) = −28 − (−12).`,
            `<strong>Simplify:</strong> −28 − (−12) = −28 + 12 = ${gr('−16')} ✓`,
          ],
        },
        {
          question: 'Sipho says the additive inverse of −9 is 1/9. Is he correct?',
          answer: `No — the ${or('additive inverse')} of −9 is 9 (since −9 + 9 = 0). The value 1/9 is not correct — even the ${gr('multiplicative inverse')} of −9 is −1/9, not 1/9.`,
          steps: [
            `<strong>Definition:</strong> The ${or('additive inverse')} of a number is what you add to it to get 0.`,
            `<strong>Test Sipho's claim:</strong> −9 + 1/9 ≠ 0, so 1/9 is <strong>not</strong> the ${or('additive inverse')}.`,
            `<strong>Correct ${or('additive inverse')}:</strong> −9 + <strong>9</strong> = 0, so the ${or('additive inverse')} of −9 is <strong>9</strong>.`,
            `<strong>Note:</strong> 1/9 is not even the ${gr('multiplicative inverse')} — that would be −1/9, since −9 × (−1/9) = 1.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Use the distributive property to calculate −5(8 + 3).',
          answer: '−55',
          checkMode: 'auto',
          correctAnswer: '-55',
          explanation: '−5(8 + 3) = (−5 × 8) + (−5 × 3) = −40 + (−15) = −55 ✓',
        },

        // ── Q5 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the additive inverse of −17.',
          answer: '17',
          checkMode: 'auto',
          correctAnswer: '17',
          explanation: 'The additive inverse is the number that sums to 0.\n−17 + 17 = 0, so the additive inverse of −17 is 17 ✓',
        },

        // ── Q6 Hard (self) ───────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says the multiplicative inverse of −6 is 1/6. Is she correct? Explain.',
          answer: 'No — the multiplicative inverse of −6 is −1/6, since −6 × (−1/6) = 1, not −6 × (1/6) = −1.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video explaining the distributive property and the difference between additive and multiplicative inverses for integers',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING MULTI-STEP PROBLEMS WITH INTEGERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-multi-step-problems',
      title: 'Solving Multi-Step Problems with Integers',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">We solve real-life and abstract problems involving multiple operations with integers, applying our knowledge of <strong>order of operations (BODMAS)</strong> and <strong>integer rules</strong> together.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('order of operations')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('integer signs')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── BODMAS steps ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">BODMAS order of operations</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Brackets</strong> — simplify everything inside brackets first.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Orders</strong> — evaluate powers, roots, squares and cubes.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Division &amp; Multiplication</strong> — work left to right.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Addition &amp; Subtraction</strong> — work left to right.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Strategy for real-life problems</p>` +
        `<p style="margin:0;color:#14532d;">Write a number sentence first, then apply BODMAS. Positive changes are added, negative changes are subtracted — the ${or('sign of each integer')} tells you the direction of the change.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate −3² + (−2) × 5 − (−8).',
          answer: `${gr('−11')}`,
          steps: [
            `<strong>${bl('Orders first')}:</strong> ${or('−3²')} = ${or('−9')} (this is −(3²), not (−3)², so the result is negative).`,
            `<strong>${bl('Multiplication')}:</strong> (−2) × 5 = ${or('−10')}.`,
            `<strong>${bl('Addition and subtraction')} (left to right):</strong> −9 + (−10) − (−8) = −9 − 10 + 8 = ${gr('−11')} ✓`,
          ],
        },
        {
          question: "Lerato's bank balance changes by −150, then +320, then −75 over three months. Find her total change.",
          answer: `Her balance ${gr('increased by R95')} overall.`,
          steps: [
            `<strong>Write the number sentence:</strong> −150 + 320 + (${or('−75')}).`,
            `<strong>Calculate left to right:</strong> −150 + 320 = 170. Then 170 + (${or('−75')}) = 170 − 75 = ${gr('95')}.`,
            `<strong>Answer:</strong> Her balance ${gr('increased by R95')} overall ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate √81 − (−5)².',
          answer: '−16',
          checkMode: 'auto',
          correctAnswer: '-16',
          explanation: '√81 = 9 (square root).\n(−5)² = 25 (even power of a negative is positive).\n9 − 25 = −16 ✓',
        },

        // ── Q8 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Calculate −2³ + √64 ÷ (−4).',
          answer: '−10',
          checkMode: 'auto',
          correctAnswer: '-10',
          explanation: '−2³ = −(2³) = −8.\n√64 = 8.\nBODMAS — division before addition: 8 ÷ (−4) = −2.\n−8 + (−2) = −10 ✓',
        },

        // ── Q9 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate −7 + (−12) × 2 − (−5).',
          answer: '−26',
          checkMode: 'auto',
          correctAnswer: '-26',
          explanation: 'Multiplication first: (−12) × 2 = −24.\n−7 + (−24) − (−5) = −7 − 24 + 5 = −26 ✓',
        },

        // ── Q10 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Thabo's savings change by −200, then +450, then −120 over three months. Find his total change.",
          answer: 'R130',
          checkMode: 'auto',
          correctAnswer: '130',
          correctAnswers: ['130', 'R130'],
          explanation: '−200 + 450 + (−120).\n−200 + 450 = 250. Then 250 − 120 = 130.\nThabo\'s savings increased by R130 overall ✓',
        },

        // ── Q11 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate (−3)² × (−2)³.',
          answer: '−72',
          checkMode: 'auto',
          correctAnswer: '-72',
          explanation: '(−3)² = 9 (even power → positive).\n(−2)³ = −8 (odd power → negative).\n9 × (−8) = −72 ✓',
        },

        // ── Q12 Hard (self) ──────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle says (−2)⁴ and −2⁴ give the same result. Is she correct? Explain.',
          answer: 'No — (−2)⁴ = 16 (positive, since an even power of a negative is positive), but −2⁴ = −(2⁴) = −16. They are different.',
          checkMode: 'self',
        },

        // ── Q13 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate −36 ÷ (−9) + (−3)².',
          answer: '13',
          checkMode: 'auto',
          correctAnswer: '13',
          explanation: 'BODMAS — division first: −36 ÷ (−9) = 4 (negative ÷ negative = positive).\nThen (−3)² = 9.\n4 + 9 = 13 ✓',
        },

        // ── Q14 Hard (self) ──────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Find two integers whose sum is −3 and whose product is −40.',
          answer: '5 and −8, since 5 + (−8) = −3 and 5 × (−8) = −40.',
          checkMode: 'self',
        },

        // ── Q15 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Calculate −5² + (−2)⁴ − √25.',
          answer: '−14',
          checkMode: 'auto',
          correctAnswer: '-14',
          explanation: '−5² = −(5²) = −25.\n(−2)⁴ = 16 (even power → positive).\n√25 = 5.\n−25 + 16 − 5 = −14 ✓',
        },
      ],

      videoPlaceholder:
        'Short video showing how to apply BODMAS with mixed integer operations in multi-step abstract and real-life problems',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered integers.' },
    { minScore: 11, message: 'Great work! You scored 75% or above — keep pushing for full marks.' },
    { minScore: 8, message: 'Good effort! Review the worked examples and try again.' },
    { minScore: 0, message: 'Keep going — work through the guide again and you will get there.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-2):   Sign rules — multiplication and division of integers
    // Block 2 (3-5):   Squares, cubes and roots of integers
    // Block 3 (6-7):   Combining roots/powers in one calculation
    // Block 4 (8-11):  BODMAS multi-step calculations
    // Block 5 (12-14): Distributive property
    // Block 6 (15-16): Additive and multiplicative inverses
    // Block 7 (17-19): Real-life multi-step problems / error-spotting / reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Sign rules: multiplication and division (Easy)
        { difficulty: 'Easy', question: 'Calculate −7 × (−8).', checkMode: 'auto', options: ['56', '-56', '-15', '1'], correctIndex: 0, explanation: 'Negative × negative = positive.\n−7 × (−8) = 56 ✓ (−56 flips the sign; −15 and 1 come from adding or subtracting instead of multiplying.)' },
        { difficulty: 'Easy', question: 'Calculate −54 ÷ 6.', checkMode: 'auto', options: ['9', '-9', '-8', '-60'], correctIndex: 1, explanation: 'Negative ÷ positive = negative.\n−54 ÷ 6 = −9 ✓ (9 flips the sign; −8 comes from a division slip; −60 comes from subtracting instead of dividing.)' },
        { difficulty: 'Easy', question: 'Calculate −9 × 7.', checkMode: 'auto', options: ['63', '-2', '-63', '-56'], correctIndex: 2, explanation: 'Negative × positive = negative.\n−9 × 7 = −63 ✓ (63 flips the sign; −2 comes from adding instead of multiplying; −56 comes from a multiplication slip.)' },

        // Block 2 — Squares, cubes and roots of integers (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Calculate −6².', checkMode: 'auto', options: ['36', '-12', '12', '-36'], correctIndex: 3, explanation: '−6² means −(6²), so only the 6 is squared.\n−6² = −(36) = −36 ✓ (36 comes from squaring the whole −6 as if it were (−6)²; ±12 comes from doubling instead of squaring.)' },
        { difficulty: 'Easy-Medium', question: 'Calculate (−6)².', checkMode: 'auto', options: ['36', '-36', '-12', '12'], correctIndex: 0, explanation: 'The brackets mean the whole −6 is squared.\n(−6)² = (−6) × (−6) = 36 ✓ (−36 forgets the brackets protect the sign; ±12 comes from doubling instead of squaring.)' },
        { difficulty: 'Medium', question: 'Calculate (−3)³.', checkMode: 'auto', options: ['27', '-27', '-9', '9'], correctIndex: 1, explanation: 'An odd power of a negative number stays negative.\n(−3)³ = (−3)(−3)(−3) = −27 ✓ (27 wrongly assumes an odd power gives a positive result; ±9 comes from squaring instead of cubing.)' },

        // Block 3 — Combining roots and powers (Medium)
        { difficulty: 'Medium', question: 'Calculate √64 + ∛(−27).', checkMode: 'auto', options: ['11', '-5', '5', '-11'], correctIndex: 2, explanation: '√64 = 8 (positive square root).\n∛(−27) = −3 (negative cube root, since (−3)³ = −27).\n8 + (−3) = 5 ✓ (11 ignores the negative sign under the cube root; −5 and −11 come from further sign slips.)' },
        { difficulty: 'Medium', question: 'Calculate −8² + (−3)³.', checkMode: 'auto', options: ['37', '-37', '91', '-91'], correctIndex: 3, explanation: '−8² = −(64) = −64 (only the 8 is squared).\n(−3)³ = −27.\n−64 + (−27) = −91 ✓ (37 comes from squaring the whole −8 as (−8)²; −37 keeps only one sign error; 91 makes both sign errors.)' },

        // Block 4 — BODMAS multi-step calculations (Medium)
        { difficulty: 'Medium', question: 'Calculate √36 − (−5)².', checkMode: 'auto', options: ['-19', '31', '-31', '19'], correctIndex: 0, explanation: '√36 = 6.\n(−5)² = 25 (even power of a negative is positive).\n6 − 25 = −19 ✓ (31 drops the brackets and treats −5² as −25, so 6 − (−25) = 31; −31 and 19 come from further order slips.)' },
        { difficulty: 'Medium', question: 'Calculate −40 ÷ (−8) + (−2)³.', checkMode: 'auto', options: ['-13', '-3', '13', '3'], correctIndex: 1, explanation: 'Division first: −40 ÷ (−8) = 5.\n(−2)³ = −8.\n5 + (−8) = −3 ✓ (−13 comes from a division sign error; 13 from a cube sign error; 3 from making both errors.)' },
        { difficulty: 'Medium', question: 'Calculate −3² × (−2)².', checkMode: 'auto', options: ['36', '-5', '-36', '5'], correctIndex: 2, explanation: '−3² = −(9) = −9 (only the 3 is squared).\n(−2)² = 4.\n−9 × 4 = −36 ✓ (36 comes from squaring the whole −3 as (−3)²; −5 and 5 come from adding instead of multiplying.)' },
        { difficulty: 'Medium', question: 'Calculate −18 + (−7) × 3 − (−10).', checkMode: 'auto', options: ['-65', '-49', '13', '-29'], correctIndex: 3, explanation: 'Multiplication first: (−7) × 3 = −21.\n−18 + (−21) − (−10) = −18 − 21 + 10 = −29 ✓ (−65 ignores BODMAS and works left to right; −49 forgets subtracting a negative adds; 13 makes a multiplication sign error.)' },

        // Block 5 — Distributive property (Medium)
        { difficulty: 'Medium', question: 'Use the distributive property to calculate −5(9 − 4).', checkMode: 'auto', options: ['-25', '-65', '25', '-49'], correctIndex: 0, explanation: '−5(9 − 4) = (−5 × 9) − (−5 × 4) = −45 − (−20) = −45 + 20 = −25 ✓ (−65 forgets that subtracting a negative adds; 25 drops the negative sign entirely; −49 distributes to only the first term.)' },
        { difficulty: 'Medium', question: 'Use the distributive property to calculate −5(−8 + 3).', checkMode: 'auto', options: ['-55', '25', '43', '-25'], correctIndex: 1, explanation: '−5(−8 + 3) = (−5 × −8) + (−5 × 3) = 40 + (−15) = 25 ✓ (−55 makes a sign error on the first product; 43 distributes to only the first term; −25 flips the sign of the bracket first.)' },
        { difficulty: 'Medium', question: 'Use the distributive property to calculate 6(−4 + 7).', checkMode: 'auto', options: ['-66', '-17', '18', '-18'], correctIndex: 2, explanation: '6(−4 + 7) = (6 × −4) + (6 × 7) = −24 + 42 = 18 ✓ (−66 flips the sign inside the bracket first; −17 distributes to only the first term; −18 makes a final sign error.)' },

        // Block 6 — Additive and multiplicative inverses (Medium)
        { difficulty: 'Medium', question: 'Find the additive inverse of −23.', checkMode: 'auto', options: ['-23', '1/23', '-1/23', '23'], correctIndex: 3, explanation: 'The additive inverse is the number that sums to 0.\n−23 + 23 = 0, so the additive inverse of −23 is 23 ✓ (−23 confuses the inverse with the original number; the fractions confuse it with the multiplicative inverse.)' },
        { difficulty: 'Medium', question: 'Find the multiplicative inverse of −8.', checkMode: 'auto', options: ['-1/8', '1/8', '8', '-8'], correctIndex: 0, explanation: 'The multiplicative inverse is the number that multiplies to give 1.\n−8 × (−1/8) = 1, so the multiplicative inverse of −8 is −1/8 ✓ (1/8 drops the sign; 8 and −8 confuse it with the additive inverse.)' },

        // Block 7 — Real-life multi-step problems / error-spotting / reasoning (Hard)
        { difficulty: 'Hard', question: 'Which pair of integers has a sum of −2 and a product of −35?', checkMode: 'auto', options: ['−5 and 7', '5 and −7', '5 and 7', '−5 and −7'], correctIndex: 1, explanation: '5 + (−7) = −2 and 5 × (−7) = −35 ✓ (−5 and 7 give the right product but the wrong sum; 5 and 7 and −5 and −7 both give the wrong sign on the product.)' },
        { difficulty: 'Hard', question: 'Zinhle says −3² − (−4)³ = −55. What is the correct value?', checkMode: 'auto', options: ['-55', '73', '55', '-73'], correctIndex: 2, explanation: '−3² = −9 (only the 3 is squared) and (−4)³ = −64.\n−3² − (−4)³ = −9 − (−64) = −9 + 64 = 55 ✓ (−55 is Zinhle\'s mistaken claim; 73 and −73 come from squaring the whole −3 as (−3)² = 9.)' },
        { difficulty: 'Hard', question: "Karabo's account balance changes by −95, then +140, then −15 over three months. Find her total change.", checkMode: 'auto', options: ['250', '220', '60', '30'], correctIndex: 3, explanation: '−95 + 140 + (−15).\n−95 + 140 = 45. Then 45 − 15 = 30.\nKarabo\'s balance increased by R30 overall ✓ (250 and 220 flip the sign of one or both negative changes; 60 treats the final −15 as +15.)' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered calculations with integers.' },
        { minScore: 14, message: 'Great work! Review any missed questions on BODMAS or inverses and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on squares, cubes and roots, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Sign rules: multiplication and division (Easy)
        { difficulty: 'Easy', question: 'Calculate −6 × (−9).', checkMode: 'auto', options: ['54', '-54', '-15', '3'], correctIndex: 0, explanation: 'Negative × negative = positive.\n−6 × (−9) = 54 ✓ (−54 flips the sign; −15 and 3 come from adding or subtracting instead of multiplying.)' },
        { difficulty: 'Easy', question: 'Calculate −48 ÷ 8.', checkMode: 'auto', options: ['6', '-6', '-5', '-56'], correctIndex: 1, explanation: 'Negative ÷ positive = negative.\n−48 ÷ 8 = −6 ✓ (6 flips the sign; −5 comes from a division slip; −56 comes from subtracting instead of dividing.)' },
        { difficulty: 'Easy', question: 'Calculate −8 × 6.', checkMode: 'auto', options: ['48', '-2', '-48', '-42'], correctIndex: 2, explanation: 'Negative × positive = negative.\n−8 × 6 = −48 ✓ (48 flips the sign; −2 comes from adding instead of multiplying; −42 comes from a multiplication slip.)' },

        // Block 2 — Squares, cubes and roots of integers (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Calculate −4².', checkMode: 'auto', options: ['16', '-8', '8', '-16'], correctIndex: 3, explanation: '−4² means −(4²), so only the 4 is squared.\n−4² = −(16) = −16 ✓ (16 comes from squaring the whole −4 as (−4)²; ±8 comes from doubling instead of squaring.)' },
        { difficulty: 'Easy-Medium', question: 'Calculate (−4)².', checkMode: 'auto', options: ['16', '-16', '-8', '8'], correctIndex: 0, explanation: 'The brackets mean the whole −4 is squared.\n(−4)² = (−4) × (−4) = 16 ✓ (−16 forgets the brackets protect the sign; ±8 comes from doubling instead of squaring.)' },
        { difficulty: 'Medium', question: 'Calculate (−5)³.', checkMode: 'auto', options: ['125', '-125', '-25', '25'], correctIndex: 1, explanation: 'An odd power of a negative number stays negative.\n(−5)³ = (−5)(−5)(−5) = −125 ✓ (125 wrongly assumes an odd power gives a positive result; ±25 comes from squaring instead of cubing.)' },

        // Block 3 — Combining roots and powers (Medium)
        { difficulty: 'Medium', question: 'Calculate √81 + ∛(−125).', checkMode: 'auto', options: ['14', '-4', '4', '-14'], correctIndex: 2, explanation: '√81 = 9 (positive square root).\n∛(−125) = −5 (negative cube root, since (−5)³ = −125).\n9 + (−5) = 4 ✓ (14 ignores the negative sign under the cube root; −4 and −14 come from further sign slips.)' },
        { difficulty: 'Medium', question: 'Calculate −6² + (−4)³.', checkMode: 'auto', options: ['-28', '28', '100', '-100'], correctIndex: 3, explanation: '−6² = −(36) = −36 (only the 6 is squared).\n(−4)³ = −64.\n−36 + (−64) = −100 ✓ (−28 comes from squaring the whole −6 as (−6)²; 28 keeps only one sign error; 100 makes both sign errors.)' },

        // Block 4 — BODMAS multi-step calculations (Medium)
        { difficulty: 'Medium', question: 'Calculate √49 − (−6)².', checkMode: 'auto', options: ['-29', '43', '29', '-43'], correctIndex: 0, explanation: '√49 = 7.\n(−6)² = 36 (even power of a negative is positive).\n7 − 36 = −29 ✓ (43 drops the brackets and treats −6² as −36, so 7 − (−36) = 43; 29 and −43 come from further order slips.)' },
        { difficulty: 'Medium', question: 'Calculate −45 ÷ (−9) + (−3)³.', checkMode: 'auto', options: ['-32', '-22', '32', '22'], correctIndex: 1, explanation: 'Division first: −45 ÷ (−9) = 5.\n(−3)³ = −27.\n5 + (−27) = −22 ✓ (−32 comes from a division sign error; 32 from a cube sign error; 22 from making both errors.)' },
        { difficulty: 'Medium', question: 'Calculate −4² × (−3)².', checkMode: 'auto', options: ['144', '-7', '-144', '7'], correctIndex: 2, explanation: '−4² = −(16) = −16 (only the 4 is squared).\n(−3)² = 9.\n−16 × 9 = −144 ✓ (144 comes from squaring the whole −4 as (−4)²; −7 and 7 come from adding instead of multiplying.)' },
        { difficulty: 'Medium', question: 'Calculate −22 + (−6) × 4 − (−12).', checkMode: 'auto', options: ['-100', '-58', '14', '-34'], correctIndex: 3, explanation: 'Multiplication first: (−6) × 4 = −24.\n−22 + (−24) − (−12) = −22 − 24 + 12 = −34 ✓ (−100 ignores BODMAS and works left to right; −58 forgets subtracting a negative adds; 14 makes a multiplication sign error.)' },

        // Block 5 — Distributive property (Medium)
        { difficulty: 'Medium', question: 'Use the distributive property to calculate −4(7 − 6).', checkMode: 'auto', options: ['-4', '-52', '-34', '4'], correctIndex: 0, explanation: '−4(7 − 6) = (−4 × 7) − (−4 × 6) = −28 − (−24) = −28 + 24 = −4 ✓ (−52 forgets that subtracting a negative adds; 4 drops the negative sign entirely; −34 distributes to only the first term.)' },
        { difficulty: 'Medium', question: 'Use the distributive property to calculate −6(−5 + 2).', checkMode: 'auto', options: ['-42', '18', '32', '-18'], correctIndex: 1, explanation: '−6(−5 + 2) = (−6 × −5) + (−6 × 2) = 30 + (−12) = 18 ✓ (−42 makes a sign error on the first product; 32 distributes to only the first term; −18 flips the sign of the bracket first.)' },
        { difficulty: 'Medium', question: 'Use the distributive property to calculate 7(−3 + 8).', checkMode: 'auto', options: ['-77', '-13', '35', '-35'], correctIndex: 2, explanation: '7(−3 + 8) = (7 × −3) + (7 × 8) = −21 + 56 = 35 ✓ (−77 flips the sign inside the bracket first; −13 distributes to only the first term; −35 makes a final sign error.)' },

        // Block 6 — Additive and multiplicative inverses (Medium)
        { difficulty: 'Medium', question: 'Find the additive inverse of −31.', checkMode: 'auto', options: ['-31', '1/31', '-1/31', '31'], correctIndex: 3, explanation: 'The additive inverse is the number that sums to 0.\n−31 + 31 = 0, so the additive inverse of −31 is 31 ✓ (−31 confuses the inverse with the original number; the fractions confuse it with the multiplicative inverse.)' },
        { difficulty: 'Medium', question: 'Find the multiplicative inverse of −10.', checkMode: 'auto', options: ['-1/10', '1/10', '10', '-10'], correctIndex: 0, explanation: 'The multiplicative inverse is the number that multiplies to give 1.\n−10 × (−1/10) = 1, so the multiplicative inverse of −10 is −1/10 ✓ (1/10 drops the sign; 10 and −10 confuse it with the additive inverse.)' },

        // Block 7 — Real-life multi-step problems / error-spotting / reasoning (Hard)
        { difficulty: 'Hard', question: 'Which pair of integers has a sum of 1 and a product of −42?', checkMode: 'auto', options: ['−7 and 6', '7 and −6', '7 and 6', '−7 and −6'], correctIndex: 1, explanation: '7 + (−6) = 1 and 7 × (−6) = −42 ✓ (−7 and 6 give the right product but the wrong sum; 7 and 6 and −7 and −6 both give the wrong sign on the product.)' },
        { difficulty: 'Hard', question: 'Bandile says −4² − (−3)³ = −5. What is the correct value?', checkMode: 'auto', options: ['-5', '43', '11', '-43'], correctIndex: 2, explanation: '−4² = −16 (only the 4 is squared) and (−3)³ = −27.\n−4² − (−3)³ = −16 − (−27) = −16 + 27 = 11 ✓ (−5 is Bandile\'s mistaken claim; 43 and −43 come from squaring the whole −4 as (−4)² = 16.)' },
        { difficulty: 'Hard', question: "Naledi's account balance changes by −130, then +210, then −25 over three months. Find her total change.", checkMode: 'auto', options: ['315', '105', '365', '55'], correctIndex: 3, explanation: '−130 + 210 + (−25).\n−130 + 210 = 80. Then 80 − 25 = 55.\nNaledi\'s balance increased by R55 overall ✓ (315 and 365 flip the sign of one or both negative changes; 105 treats the final −25 as +25.)' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered calculations with integers.' },
        { minScore: 14, message: 'Great work! Review any missed questions on BODMAS or inverses and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on squares, cubes and roots, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Sign rules: multiplication and division (Easy)
        { difficulty: 'Easy', question: 'Calculate −5 × (−12).', checkMode: 'auto', options: ['60', '-60', '-17', '7'], correctIndex: 0, explanation: 'Negative × negative = positive.\n−5 × (−12) = 60 ✓ (−60 flips the sign; −17 and 7 come from adding or subtracting instead of multiplying.)' },
        { difficulty: 'Easy', question: 'Calculate −72 ÷ 9.', checkMode: 'auto', options: ['8', '-8', '-7', '-81'], correctIndex: 1, explanation: 'Negative ÷ positive = negative.\n−72 ÷ 9 = −8 ✓ (8 flips the sign; −7 comes from a division slip; −81 comes from subtracting instead of dividing.)' },
        { difficulty: 'Easy', question: 'Calculate −6 × 11.', checkMode: 'auto', options: ['66', '5', '-66', '-55'], correctIndex: 2, explanation: 'Negative × positive = negative.\n−6 × 11 = −66 ✓ (66 flips the sign; 5 comes from adding instead of multiplying; −55 comes from a multiplication slip.)' },

        // Block 2 — Squares, cubes and roots of integers (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Calculate −7².', checkMode: 'auto', options: ['49', '-14', '14', '-49'], correctIndex: 3, explanation: '−7² means −(7²), so only the 7 is squared.\n−7² = −(49) = −49 ✓ (49 comes from squaring the whole −7 as (−7)²; ±14 comes from doubling instead of squaring.)' },
        { difficulty: 'Easy-Medium', question: 'Calculate (−7)².', checkMode: 'auto', options: ['49', '-49', '-14', '14'], correctIndex: 0, explanation: 'The brackets mean the whole −7 is squared.\n(−7)² = (−7) × (−7) = 49 ✓ (−49 forgets the brackets protect the sign; ±14 comes from doubling instead of squaring.)' },
        { difficulty: 'Medium', question: 'Calculate (−4)³.', checkMode: 'auto', options: ['64', '-64', '-16', '16'], correctIndex: 1, explanation: 'An odd power of a negative number stays negative.\n(−4)³ = (−4)(−4)(−4) = −64 ✓ (64 wrongly assumes an odd power gives a positive result; ±16 comes from squaring instead of cubing.)' },

        // Block 3 — Combining roots and powers (Medium)
        { difficulty: 'Medium', question: 'Calculate √100 + ∛(−64).', checkMode: 'auto', options: ['14', '-6', '6', '-14'], correctIndex: 2, explanation: '√100 = 10 (positive square root).\n∛(−64) = −4 (negative cube root, since (−4)³ = −64).\n10 + (−4) = 6 ✓ (14 ignores the negative sign under the cube root; −6 and −14 come from further sign slips.)' },
        { difficulty: 'Medium', question: 'Calculate −9² + (−2)³.', checkMode: 'auto', options: ['73', '-73', '89', '-89'], correctIndex: 3, explanation: '−9² = −(81) = −81 (only the 9 is squared).\n(−2)³ = −8.\n−81 + (−8) = −89 ✓ (73 comes from squaring the whole −9 as (−9)²; −73 keeps only one sign error; 89 makes both sign errors.)' },

        // Block 4 — BODMAS multi-step calculations (Medium)
        { difficulty: 'Medium', question: 'Calculate √64 − (−4)².', checkMode: 'auto', options: ['-8', '24', '8', '-24'], correctIndex: 0, explanation: '√64 = 8.\n(−4)² = 16 (even power of a negative is positive).\n8 − 16 = −8 ✓ (24 drops the brackets and treats −4² as −16, so 8 − (−16) = 24; 8 and −24 come from further order slips.)' },
        { difficulty: 'Medium', question: 'Calculate −60 ÷ (−12) + (−2)⁴.', checkMode: 'auto', options: ['11', '21', '-11', '-21'], correctIndex: 1, explanation: 'Division first: −60 ÷ (−12) = 5.\n(−2)⁴ = 16 (even power of a negative is positive).\n5 + 16 = 21 ✓ (11 comes from a division sign error; −11 from a power sign error; −21 from making both errors.)' },
        { difficulty: 'Medium', question: 'Calculate −2² × (−5)².', checkMode: 'auto', options: ['100', '21', '-100', '-21'], correctIndex: 2, explanation: '−2² = −(4) = −4 (only the 2 is squared).\n(−5)² = 25.\n−4 × 25 = −100 ✓ (100 comes from squaring the whole −2 as (−2)²; 21 and −21 come from adding instead of multiplying.)' },
        { difficulty: 'Medium', question: 'Calculate −27 + (−5) × 6 − (−14).', checkMode: 'auto', options: ['-178', '-71', '17', '-43'], correctIndex: 3, explanation: 'Multiplication first: (−5) × 6 = −30.\n−27 + (−30) − (−14) = −27 − 30 + 14 = −43 ✓ (−178 ignores BODMAS and works left to right; −71 forgets subtracting a negative adds; 17 makes a multiplication sign error.)' },

        // Block 5 — Distributive property (Medium)
        { difficulty: 'Medium', question: 'Use the distributive property to calculate −3(11 − 4).', checkMode: 'auto', options: ['-21', '-45', '-37', '21'], correctIndex: 0, explanation: '−3(11 − 4) = (−3 × 11) − (−3 × 4) = −33 − (−12) = −33 + 12 = −21 ✓ (−45 forgets that subtracting a negative adds; −37 distributes to only the first term; 21 drops the negative sign entirely.)' },
        { difficulty: 'Medium', question: 'Use the distributive property to calculate −8(−3 + 5).', checkMode: 'auto', options: ['64', '-16', '29', '16'], correctIndex: 1, explanation: '−8(−3 + 5) = (−8 × −3) + (−8 × 5) = 24 + (−40) = −16 ✓ (64 flips the sign of the bracket first; 29 distributes to only the first term; 16 makes a final sign error.)' },
        { difficulty: 'Medium', question: 'Use the distributive property to calculate 9(−2 + 6).', checkMode: 'auto', options: ['-72', '-12', '36', '-36'], correctIndex: 2, explanation: '9(−2 + 6) = (9 × −2) + (9 × 6) = −18 + 54 = 36 ✓ (−72 flips the sign inside the bracket first; −12 distributes to only the first term; −36 makes a final sign error.)' },

        // Block 6 — Additive and multiplicative inverses (Medium)
        { difficulty: 'Medium', question: 'Find the additive inverse of −42.', checkMode: 'auto', options: ['-42', '1/42', '-1/42', '42'], correctIndex: 3, explanation: 'The additive inverse is the number that sums to 0.\n−42 + 42 = 0, so the additive inverse of −42 is 42 ✓ (−42 confuses the inverse with the original number; the fractions confuse it with the multiplicative inverse.)' },
        { difficulty: 'Medium', question: 'Find the multiplicative inverse of −12.', checkMode: 'auto', options: ['-1/12', '1/12', '12', '-12'], correctIndex: 0, explanation: 'The multiplicative inverse is the number that multiplies to give 1.\n−12 × (−1/12) = 1, so the multiplicative inverse of −12 is −1/12 ✓ (1/12 drops the sign; 12 and −12 confuse it with the additive inverse.)' },

        // Block 7 — Real-life multi-step problems / error-spotting / reasoning (Hard)
        { difficulty: 'Hard', question: 'Which pair of integers has a sum of −4 and a product of −60?', checkMode: 'auto', options: ['−6 and 10', '6 and −10', '6 and 10', '−6 and −10'], correctIndex: 1, explanation: '6 + (−10) = −4 and 6 × (−10) = −60 ✓ (−6 and 10 give the right product but the wrong sum; 6 and 10 and −6 and −10 both give the wrong sign on the product.)' },
        { difficulty: 'Hard', question: 'Sizwe says −5² − (−2)³ = −33. What is the correct value?', checkMode: 'auto', options: ['-33', '33', '-17', '17'], correctIndex: 2, explanation: '−5² = −25 (only the 5 is squared) and (−2)³ = −8.\n−5² − (−2)³ = −25 − (−8) = −25 + 8 = −17 ✓ (−33 is Sizwe\'s mistaken claim; 33 comes from squaring the whole −5 as (−5)² = 25; 17 flips the final sign.)' },
        { difficulty: 'Hard', question: "Palesa's account balance changes by −150, then +260, then −45 over three months. Find her total change.", checkMode: 'auto', options: ['365', '260', '455', '65'], correctIndex: 3, explanation: '−150 + 260 + (−45).\n−150 + 260 = 110. Then 110 − 45 = 65.\nPalesa\'s balance increased by R65 overall ✓ (365 and 455 flip the sign of one or both negative changes; 260 stops partway through the calculation.)' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered calculations with integers.' },
        { minScore: 14, message: 'Great work! Review any missed questions on BODMAS or inverses and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on squares, cubes and roots, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
