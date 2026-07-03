import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (exponent roles) ─────────────────────────────────────────
// negative exponent → orange  (#ea580c)
// reciprocal / rule → blue    (#2563eb)
// simplified answer → green   (#16a34a)
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Exponents',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — EXTENDING LAWS OF EXPONENTS TO INTEGER EXPONENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'integer-exponents',
      title: 'Extending Laws of Exponents to Integer Exponents',
      icon: 'xⁿ',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 8 you established the five laws of exponents for natural-number exponents. We now <strong>extend</strong> these laws to include <strong>integer (negative) exponents</strong>. The key rule is ${or('a⁻ᵏ')} = ${bl('1 / aᵏ')} — a ${or('negative exponent')} means taking the ${bl('reciprocal')} of the base raised to the positive version of that exponent. The result is always a ${gr('positive fraction')} when the base is greater than 1.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('negative exponent')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('reciprocal')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('simplified answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The key rule</p>` +
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">If a ≠ 0 and k is a positive integer:&nbsp;&nbsp;${or('a⁻ᵏ')} = ${bl('1 / aᵏ')}</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Quick examples</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('5⁻¹')} = ${bl('1/5')} = ${gr('0.2')}</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('2⁻³')} = ${bl('1/2³')} = ${gr('1/8')}</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('3⁻²')} = ${bl('1/3²')} = ${gr('1/9')}</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Common misconception</p>` +
        `<p style="margin:0;color:#1e3a8a;">A ${or('negative exponent')} does <strong>not</strong> make the result negative — it means take the ${bl('reciprocal')}. For example, ${or('2⁻³')} = ${gr('1/8')}, which is a positive fraction. Never write ${or('2⁻³')} = −8.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Simplify 2⁻³.',
          answer: `${or('2⁻³')} = ${bl('1/2³')} = ${gr('1/8')}`,
          steps: [
            `Apply the rule ${or('a⁻ᵏ')} = ${bl('1/aᵏ')}: ${or('2⁻³')} = ${bl('1/2³')}`,
            `Evaluate the denominator: 2³ = 2 × 2 × 2 = 8`,
            `<strong>Answer:</strong> ${or('2⁻³')} = ${bl('1/8')} = ${gr('1/8')} ✓`,
          ],
        },
        {
          question: 'Simplify 5² × 5⁻⁴.',
          answer: `5² × ${or('5⁻⁴')} = ${bl('5⁻²')} = ${gr('1/25')}`,
          steps: [
            `Same base — ${bl('add the exponents')}: 5² × ${or('5⁻⁴')} = 5^(2 + (${or('−4')})) = ${bl('5⁻²')}`,
            `Apply the ${or('negative exponent rule')}: ${bl('5⁻²')} = ${bl('1/5²')}`,
            `Evaluate: 5² = 25`,
            `<strong>Answer:</strong> 5² × ${or('5⁻⁴')} = ${gr('1/25')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Simplify 3⁻².',
          answer: '1/9',
          checkMode: 'auto',
          correctAnswer: '1/9',
          explanation: 'Apply a⁻ᵏ = 1/aᵏ:\n3⁻² = 1/3² = 1/9 ✓',
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Simplify 4³ × 4⁻⁵.',
          answer: '1/16',
          checkMode: 'auto',
          correctAnswer: '1/16',
          explanation: 'Same base — add exponents:\n4³ × 4⁻⁵ = 4^(3 + (−5)) = 4⁻²\nApply negative exponent rule:\n4⁻² = 1/4² = 1/16 ✓',
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says 2⁻⁴ = −16. Is he correct? Explain.',
          answer: 'No — 2⁻⁴ = 1/2⁴ = 1/16, a positive fraction, not −16. A negative exponent does not make the result negative; it means take the reciprocal of the base raised to the positive exponent.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply the negative exponent rule a⁻ᵏ = 1/aᵏ with worked examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the connection between negative exponents and reciprocals with colour coded examples" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SCIENTIFIC NOTATION WITH NEGATIVE EXPONENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'scientific-notation',
      title: 'Scientific Notation with Negative Exponents',
      icon: '×10ⁿ',
      explanation:
        `<p style="margin-bottom:16px;">We extend scientific notation to include ${or('negative exponents')}, used for writing <strong>very small numbers</strong> as a value between 1 and 10 multiplied by a ${or('negative power of 10')}. When we ${bl('move the decimal point to the right')}, the exponent is ${or('negative')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('decimal movement')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('negative exponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final form')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Converting a small number to scientific notation</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Step 1 — Move the decimal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Move the decimal point to the right')} until you have a number between 1 and 10. Count the number of places moved.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Step 2 — Write the exponent</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Since you moved the decimal <em>right</em> (making the number larger), the exponent is ${or('negative')}. It equals the number of places moved.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Step 3 — Write in scientific notation</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Write the ${gr('final form')}: (number between 1 and 10) × 10^(${or('negative exponent')}).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Large vs small numbers</p>` +
        `<p style="margin:0;color:#1e3a8a;">Moving the decimal <strong>left</strong> (large numbers, greater than 10) gives a <strong>positive</strong> exponent. Moving the decimal ${bl('right')} (small numbers, less than 1) gives a ${or('negative exponent')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Write 0.00045 in scientific notation.',
          answer: `0.00045 = ${gr('4.5 × 10⁻⁴')}`,
          steps: [
            `${bl('Move the decimal point to the right')} until you get a number between 1 and 10: 0.00045 → 4.5 (moved ${bl('4 places right')})`,
            `Since we moved the decimal right, the exponent is ${or('negative')}: the exponent is ${or('−4')}`,
            `<strong>Answer:</strong> 0.00045 = ${gr('4.5 × 10⁻⁴')} ✓`,
          ],
        },
        {
          question: 'Sipho writes 0.0072 in scientific notation as 7.2 × 10⁻³. Check his answer.',
          answer: `${gr('7.2 × 10⁻³')} is correct`,
          steps: [
            `${bl('Move the decimal point to the right')} from 0.0072 until you get a number between 1 and 10: 0.0072 → 7.2 (moved ${bl('3 places right')})`,
            `Since we moved the decimal right, the exponent is ${or('negative')}: the exponent is ${or('−3')}`,
            `Sipho wrote ${gr('7.2 × 10⁻³')} — this matches. His answer is ${gr('correct')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Write 0.0036 in scientific notation.',
          answer: '3.6 × 10⁻³',
          checkMode: 'auto',
          correctAnswer: '3.6 × 10⁻³',
          correctAnswers: ['3.6 × 10⁻³', '3.6×10⁻³', '3.6x10⁻³', '3.6 x 10⁻³', '3.6e-3'],
          explanation: 'Move the decimal 3 places right: 0.0036 → 3.6\nMoving right → negative exponent of −3\nAnswer: 3.6 × 10⁻³ ✓',
        },

        // ── Q5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Write 0.000089 in scientific notation.',
          answer: '8.9 × 10⁻⁵',
          checkMode: 'auto',
          correctAnswer: '8.9 × 10⁻⁵',
          correctAnswers: ['8.9 × 10⁻⁵', '8.9×10⁻⁵', '8.9x10⁻⁵', '8.9 x 10⁻⁵', '8.9e-5'],
          explanation: 'Move the decimal 5 places right: 0.000089 → 8.9\nMoving right → negative exponent of −5\nAnswer: 8.9 × 10⁻⁵ ✓',
        },

        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato converts 0.00056 to scientific notation and gets 5.6 × 10⁻⁴. Check her answer.',
          answer: 'Correct — moving the decimal 4 places right from 0.00056 gives 5.6, confirming 5.6 × 10⁻⁴.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to convert small decimal numbers into scientific notation using negative exponents" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing decimal point movement to the right with negative exponent annotation for small numbers" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING CALCULATIONS AND PROBLEMS USING ALL LAWS OF EXPONENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'exponent-calculations',
      title: 'Solving Calculations and Problems Using All Laws of Exponents',
      icon: 'xⁿ',
      explanation:
        `<p style="margin-bottom:16px;">We now apply <strong>all four operations</strong> to numbers in exponential form, using all the laws of exponents including ${or('integer (negative) exponents')}. We also solve real-life problems involving exponential notation such as scientific measurements and very small quantities.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('exponent rules')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('negative exponents')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Laws of exponents — complete summary</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Multiply same base:')} aᵐ × aⁿ = a^(m+n) — <em>add</em> the exponents</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Divide same base:')} aᵐ ÷ aⁿ = a^(m−n) — <em>subtract</em> the exponents</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Power of a power:')} (aᵐ)ⁿ = a^(m×n) — <em>multiply</em> the exponents</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${or('Negative exponent:')} ${or('a⁻ᵏ')} = 1/aᵏ — take the ${or('reciprocal')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Zero exponent:</strong> a⁰ = 1 for any a ≠ 0</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Scientific notation arithmetic tip</p>` +
        `<p style="margin:0;color:#1e3a8a;">When multiplying numbers in scientific notation, multiply the front numbers and ${bl('add the powers of 10')}. Always check that the front number in your ${gr('final answer')} is between 1 and 10 — adjust the power if needed.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Simplify (3⁻²)³.',
          answer: `(${or('3⁻²')})³ = ${bl('3⁻⁶')} = ${gr('1/729')}`,
          steps: [
            `${bl('Power of a power rule:')} multiply the exponents: (${or('3⁻²')})³ = 3^(${or('−2')} × 3) = ${bl('3⁻⁶')}`,
            `Apply the ${or('negative exponent rule')}: ${bl('3⁻⁶')} = 1/3⁶`,
            `Evaluate: 3⁶ = 729`,
            `<strong>Answer:</strong> (${or('3⁻²')})³ = ${gr('1/729')} ✓`,
          ],
        },
        {
          question: 'Simplify 4³ ÷ 4⁻².',
          answer: `4³ ÷ ${or('4⁻²')} = ${bl('4⁵')} = ${gr('1024')}`,
          steps: [
            `${bl('Divide same base rule:')} subtract the exponents: 4³ ÷ ${or('4⁻²')} = 4^(3 − (${or('−2')})) = 4^(3 + 2) = ${bl('4⁵')}`,
            `Evaluate: 4⁵ = 4 × 4 × 4 × 4 × 4 = 1024`,
            `<strong>Answer:</strong> 4³ ÷ ${or('4⁻²')} = ${gr('1024')} ✓`,
          ],
        },
        {
          question: 'Lerato calculates the mass of a virus as 2 × 10⁻⁷ grams. If she has 5 viruses, find the total mass in scientific notation.',
          answer: `Total mass = ${gr('1 × 10⁻⁶ grams')}`,
          steps: [
            `Multiply: 5 × (2 × ${or('10⁻⁷')}) = (5 × 2) × ${or('10⁻⁷')} = 10 × ${or('10⁻⁷')}`,
            `${bl('Multiply same base:')} 10 × ${or('10⁻⁷')} = 10¹ × ${or('10⁻⁷')} = 10^(1 + (${or('−7')})) = ${bl('10⁻⁶')}`,
            `Adjust to scientific notation: 10 is not between 1 and 10, so rewrite 10 × ${or('10⁻⁷')} = 1 × 10¹ × ${or('10⁻⁷')} = 1 × ${bl('10⁻⁶')}`,
            `<strong>Answer:</strong> Total mass = ${gr('1 × 10⁻⁶ grams')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Simplify (2⁻³)².',
          answer: '1/64',
          checkMode: 'auto',
          correctAnswer: '1/64',
          explanation: 'Power of a power — multiply exponents:\n(2⁻³)² = 2^(−3 × 2) = 2⁻⁶\nApply negative exponent rule:\n2⁻⁶ = 1/2⁶ = 1/64 ✓',
        },

        // ── Q8 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Simplify 6² ÷ 6⁻¹.',
          answer: '216',
          checkMode: 'auto',
          correctAnswer: '216',
          explanation: 'Divide same base — subtract exponents:\n6² ÷ 6⁻¹ = 6^(2 − (−1)) = 6^(2 + 1) = 6³\nEvaluate: 6³ = 216 ✓',
        },

        // ── Q9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo says 5⁰ = 5. Is he correct? Explain.',
          answer: 'No — any non-zero number raised to the power 0 equals 1, so 5⁰ = 1, not 5.',
          checkMode: 'self',
        },

        // ── Q10 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A bacterium has a mass of 3 × 10⁻¹² grams. Find the total mass of 4 bacteria in scientific notation.',
          answer: '1.2 × 10⁻¹¹ grams',
          checkMode: 'auto',
          correctAnswer: '1.2 × 10⁻¹¹ grams',
          correctAnswers: ['1.2 × 10⁻¹¹ grams', '1.2×10⁻¹¹ grams', '1.2x10⁻¹¹ grams', '1.2e-11 grams', '1.2 × 10⁻¹¹'],
          explanation: 'Multiply: 4 × (3 × 10⁻¹²) = 12 × 10⁻¹²\nAdjust to scientific notation: 12 × 10⁻¹² = 1.2 × 10¹ × 10⁻¹² = 1.2 × 10⁻¹¹ grams ✓',
        },

        // ── Q11 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Simplify 7⁻¹ × 7³.',
          answer: '49',
          checkMode: 'auto',
          correctAnswer: '49',
          explanation: 'Multiply same base — add exponents:\n7⁻¹ × 7³ = 7^(−1 + 3) = 7² = 49 ✓',
        },

        // ── Q12 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle says (3⁻¹)⁻² equals 9. Is she correct? Explain.',
          answer: 'Yes — (3⁻¹)⁻² = 3^(−1 × −2) = 3² = 9.',
          checkMode: 'self',
        },

        // ── Q13 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Simplify 10⁻³ × 10⁵ ÷ 10⁻¹.',
          answer: '1000',
          checkMode: 'auto',
          correctAnswer: '1000',
          explanation: 'Apply multiply/divide same base left to right:\n10⁻³ × 10⁵ = 10^(−3 + 5) = 10²\n10² ÷ 10⁻¹ = 10^(2 − (−1)) = 10³ = 1000 ✓',
        },

        // ── Q14 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A grain of sand has a mass of approximately 5 × 10⁻⁵ grams. Find the mass of 1000 grains in scientific notation.',
          answer: '5 × 10⁻² grams',
          checkMode: 'auto',
          correctAnswer: '5 × 10⁻² grams',
          correctAnswers: ['5 × 10⁻² grams', '5×10⁻² grams', '5x10⁻² grams', '5e-2 grams', '5 × 10⁻²'],
          explanation: 'Multiply: 1000 × (5 × 10⁻⁵)\n= 5000 × 10⁻⁵\n= 5 × 10³ × 10⁻⁵\n= 5 × 10^(3 + (−5))\n= 5 × 10⁻² grams ✓',
        },

        // ── Q15 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says negative exponents always make a number smaller than 1. Is he correct? Explain with reasoning.',
          answer: 'Yes (for a base greater than 1) — a negative exponent represents a reciprocal, which results in a fraction smaller than 1 when the base is greater than 1.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply all laws of exponents including negative exponents in calculations and real-life problems" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Summary diagram of all five laws of exponents with colour coded examples including negative and zero exponents" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered exponents.' },
    { minScore: 12, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
