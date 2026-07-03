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
        '<VideoPlaceholder label="Short video showing how to apply BODMAS with integer operations including squares cubes square roots and cube roots" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Colour coded step-by-step calculation showing squares (blue) cubes (orange) and final answers (green) using BODMAS order" />',
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
        '<VideoPlaceholder label="Short video explaining the distributive property and the difference between additive and multiplicative inverses for integers" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual showing distributive property (blue) additive inverse (orange) and multiplicative inverse (green) with integer examples" />',
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
        '<VideoPlaceholder label="Short video showing how to apply BODMAS with mixed integer operations in multi-step abstract and real-life problems" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Step-by-step multi-step integer calculation with order of operations (blue) integer signs (orange) and final answer (green) highlighted" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered integers.' },
    { minScore: 11, message: 'Great work! You scored 75% or above — keep pushing for full marks.' },
    { minScore: 8, message: 'Good effort! Review the worked examples and try again.' },
    { minScore: 0, message: 'Keep going — work through the guide again and you will get there.' },
  ],
}
