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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Negative exponent → reciprocal (Q1-4)
        { difficulty: 'Easy', question: 'Simplify 2⁻⁴.', answer: '1/16', checkMode: 'auto', correctAnswer: '1/16', explanation: 'Apply a⁻ᵏ = 1/aᵏ:\n2⁻⁴ = 1/2⁴ = 1/16 ✓' },
        { difficulty: 'Easy', question: 'Write 5⁻³ as a fraction in simplest form.', answer: '1/125', checkMode: 'auto', correctAnswer: '1/125', explanation: 'Apply the negative exponent rule:\n5⁻³ = 1/5³ = 1/125 ✓' },
        { difficulty: 'Easy', question: 'What is the value of 10⁻²?', answer: '1/100', checkMode: 'auto', correctAnswer: '1/100', correctAnswers: ['1/100', '0.01'], explanation: '10⁻² = 1/10² = 1/100 ✓' },
        { difficulty: 'Medium', question: 'Evaluate 6⁻² and give your answer as a fraction.', answer: '1/36', checkMode: 'auto', correctAnswer: '1/36', explanation: '6⁻² = 1/6² = 1/36 ✓' },

        // Block 2 — Product law with negative exponents (Q5-7)
        { difficulty: 'Medium', question: 'Simplify 3⁵ × 3⁻².', answer: '27', checkMode: 'auto', correctAnswer: '27', explanation: 'Same base — add exponents:\n3⁵ × 3⁻² = 3^(5 + (−2)) = 3³ = 27 ✓' },
        { difficulty: 'Medium', question: 'Simplify 2⁻³ × 2⁷.', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: 'Same base — add exponents:\n2⁻³ × 2⁷ = 2^(−3 + 7) = 2⁴ = 16 ✓' },
        { difficulty: 'Hard', question: 'Simplify 6⁴ × 6⁻⁶, giving your answer as a fraction.', answer: '1/36', checkMode: 'auto', correctAnswer: '1/36', explanation: 'Same base — add exponents:\n6⁴ × 6⁻⁶ = 6^(4 + (−6)) = 6⁻² = 1/6² = 1/36 ✓' },

        // Block 3 — Quotient law with negative exponents (Q8-10)
        { difficulty: 'Medium', question: 'Simplify 5² ÷ 5⁻³.', answer: '3125', checkMode: 'auto', correctAnswer: '3125', explanation: 'Same base — subtract exponents:\n5² ÷ 5⁻³ = 5^(2 − (−3)) = 5⁵ = 3125 ✓' },
        { difficulty: 'Medium', question: 'Find the value of 7⁻² ÷ 7⁻⁵.', answer: '343', checkMode: 'auto', correctAnswer: '343', explanation: 'Same base — subtract exponents:\n7⁻² ÷ 7⁻⁵ = 7^(−2 − (−5)) = 7³ = 343 ✓' },
        { difficulty: 'Hard', question: 'Simplify 3⁻¹ ÷ 3², giving your answer as a fraction.', answer: '1/27', checkMode: 'auto', correctAnswer: '1/27', explanation: 'Same base — subtract exponents:\n3⁻¹ ÷ 3² = 3^(−1 − 2) = 3⁻³ = 1/27 ✓' },

        // Block 4 — Power of a power with negative exponents (Q11-13)
        { difficulty: 'Medium', question: 'Simplify (6⁻²)².', answer: '1/1296', checkMode: 'auto', correctAnswer: '1/1296', explanation: 'Power of a power — multiply exponents:\n(6⁻²)² = 6^(−2 × 2) = 6⁻⁴ = 1/1296 ✓' },
        { difficulty: 'Hard', question: 'Simplify (5⁻¹)⁻³.', answer: '125', checkMode: 'auto', correctAnswer: '125', explanation: 'Power of a power — multiply exponents:\n(5⁻¹)⁻³ = 5^(−1 × −3) = 5³ = 125 ✓' },
        { difficulty: 'Hard', question: 'Evaluate (3²)⁻², giving your answer as a fraction.', answer: '1/81', checkMode: 'auto', correctAnswer: '1/81', explanation: 'Power of a power — multiply exponents:\n(3²)⁻² = 3^(2 × −2) = 3⁻⁴ = 1/81 ✓' },

        // Block 5 — Scientific notation with negative exponents (Q14-16)
        { difficulty: 'Easy', question: 'Write 0.00052 in scientific notation.', answer: '5.2 × 10⁻⁴', checkMode: 'auto', correctAnswer: '5.2 × 10⁻⁴', correctAnswers: ['5.2 × 10⁻⁴', '5.2×10⁻⁴', '5.2x10⁻⁴', '5.2 x 10⁻⁴', '5.2e-4'], explanation: 'Move the decimal 4 places right: 0.00052 → 5.2\nMoving right → negative exponent of −4\nAnswer: 5.2 × 10⁻⁴ ✓' },
        { difficulty: 'Medium', question: 'Express 0.0000078 in scientific notation.', answer: '7.8 × 10⁻⁶', checkMode: 'auto', correctAnswer: '7.8 × 10⁻⁶', correctAnswers: ['7.8 × 10⁻⁶', '7.8×10⁻⁶', '7.8x10⁻⁶', '7.8 x 10⁻⁶', '7.8e-6'], explanation: 'Move the decimal 6 places right: 0.0000078 → 7.8\nMoving right → negative exponent of −6\nAnswer: 7.8 × 10⁻⁶ ✓' },
        { difficulty: 'Hard', question: 'Zanele writes 0.000416 in scientific notation as 4.16 × 10⁻⁴. Check her answer.', answer: 'Correct — moving the decimal 4 places right from 0.000416 gives 4.16, confirming 4.16 × 10⁻⁴.', checkMode: 'self' },

        // Block 6 — Combined laws, multi-step and real-life problems (Q17-20)
        { difficulty: 'Hard', question: 'Simplify 2⁷ × 2⁻⁴ ÷ 2².', answer: '2', checkMode: 'auto', correctAnswer: '2', explanation: 'Apply multiply/divide same base left to right:\n2⁷ × 2⁻⁴ = 2^(7 + (−4)) = 2³\n2³ ÷ 2² = 2^(3 − 2) = 2¹ = 2 ✓' },
        { difficulty: 'Hard', question: 'A skin cell has a mass of 3 × 10⁻⁸ grams. Find the total mass of 5 skin cells in scientific notation.', answer: '1.5 × 10⁻⁷ grams', checkMode: 'auto', correctAnswer: '1.5 × 10⁻⁷ grams', correctAnswers: ['1.5 × 10⁻⁷ grams', '1.5×10⁻⁷ grams', '1.5x10⁻⁷ grams', '1.5e-7 grams', '1.5 × 10⁻⁷'], explanation: 'Multiply: 5 × (3 × 10⁻⁸) = 15 × 10⁻⁸\nAdjust to scientific notation: 15 × 10⁻⁸ = 1.5 × 10¹ × 10⁻⁸ = 1.5 × 10⁻⁷ grams ✓' },
        { difficulty: 'Hard', question: 'Karabo says 4⁻¹ × 4⁰ × 4³ simplifies to 4². Is he correct? Explain.', answer: 'Yes — adding the exponents gives −1 + 0 + 3 = 2, so 4⁻¹ × 4⁰ × 4³ = 4² = 16.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Simplify 10⁻³ × 10⁶ ÷ 10².', answer: '10', checkMode: 'auto', correctAnswer: '10', explanation: 'Apply multiply/divide same base left to right:\n10⁻³ × 10⁶ = 10^(−3 + 6) = 10³\n10³ ÷ 10² = 10^(3 − 2) = 10¹ = 10 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered integer exponents and scientific notation.' },
        { minScore: 14, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 9, message: 'Good effort! Revisit negative exponents and the laws of exponents, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Negative exponent → reciprocal (Q1-4)
        { difficulty: 'Easy', question: 'Simplify 8⁻².', answer: '1/64', checkMode: 'auto', correctAnswer: '1/64', explanation: 'Apply a⁻ᵏ = 1/aᵏ:\n8⁻² = 1/8² = 1/64 ✓' },
        { difficulty: 'Easy', question: 'Write 4⁻⁴ as a fraction in simplest form.', answer: '1/256', checkMode: 'auto', correctAnswer: '1/256', explanation: 'Apply the negative exponent rule:\n4⁻⁴ = 1/4⁴ = 1/256 ✓' },
        { difficulty: 'Easy', question: 'What is the value of 3⁻³?', answer: '1/27', checkMode: 'auto', correctAnswer: '1/27', explanation: '3⁻³ = 1/3³ = 1/27 ✓' },
        { difficulty: 'Medium', question: 'Evaluate 9⁻² and give your answer as a fraction.', answer: '1/81', checkMode: 'auto', correctAnswer: '1/81', explanation: '9⁻² = 1/9² = 1/81 ✓' },

        // Block 2 — Product law with negative exponents (Q5-7)
        { difficulty: 'Medium', question: 'Simplify 4⁶ × 4⁻⁴.', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: 'Same base — add exponents:\n4⁶ × 4⁻⁴ = 4^(6 + (−4)) = 4² = 16 ✓' },
        { difficulty: 'Medium', question: 'Simplify 3⁻² × 3⁶.', answer: '81', checkMode: 'auto', correctAnswer: '81', explanation: 'Same base — add exponents:\n3⁻² × 3⁶ = 3^(−2 + 6) = 3⁴ = 81 ✓' },
        { difficulty: 'Hard', question: 'Simplify 5³ × 5⁻⁶, giving your answer as a fraction.', answer: '1/125', checkMode: 'auto', correctAnswer: '1/125', explanation: 'Same base — add exponents:\n5³ × 5⁻⁶ = 5^(3 + (−6)) = 5⁻³ = 1/5³ = 1/125 ✓' },

        // Block 3 — Quotient law with negative exponents (Q8-10)
        { difficulty: 'Medium', question: 'Simplify 9¹ ÷ 9⁻³.', answer: '6561', checkMode: 'auto', correctAnswer: '6561', explanation: 'Same base — subtract exponents:\n9¹ ÷ 9⁻³ = 9^(1 − (−3)) = 9⁴ = 6561 ✓' },
        { difficulty: 'Medium', question: 'Find the value of 6⁻¹ ÷ 6⁻⁴.', answer: '216', checkMode: 'auto', correctAnswer: '216', explanation: 'Same base — subtract exponents:\n6⁻¹ ÷ 6⁻⁴ = 6^(−1 − (−4)) = 6³ = 216 ✓' },
        { difficulty: 'Hard', question: 'Simplify 2⁻² ÷ 2³, giving your answer as a fraction.', answer: '1/32', checkMode: 'auto', correctAnswer: '1/32', explanation: 'Same base — subtract exponents:\n2⁻² ÷ 2³ = 2^(−2 − 3) = 2⁻⁵ = 1/32 ✓' },

        // Block 4 — Power of a power with negative exponents (Q11-13)
        { difficulty: 'Medium', question: 'Simplify (3⁻²)².', answer: '1/81', checkMode: 'auto', correctAnswer: '1/81', explanation: 'Power of a power — multiply exponents:\n(3⁻²)² = 3^(−2 × 2) = 3⁻⁴ = 1/81 ✓' },
        { difficulty: 'Hard', question: 'Simplify (2⁻¹)⁻⁴.', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: 'Power of a power — multiply exponents:\n(2⁻¹)⁻⁴ = 2^(−1 × −4) = 2⁴ = 16 ✓' },
        { difficulty: 'Hard', question: 'Evaluate (4²)⁻², giving your answer as a fraction.', answer: '1/256', checkMode: 'auto', correctAnswer: '1/256', explanation: 'Power of a power — multiply exponents:\n(4²)⁻² = 4^(2 × −2) = 4⁻⁴ = 1/256 ✓' },

        // Block 5 — Scientific notation with negative exponents (Q14-16)
        { difficulty: 'Easy', question: 'Write 0.0000031 in scientific notation.', answer: '3.1 × 10⁻⁶', checkMode: 'auto', correctAnswer: '3.1 × 10⁻⁶', correctAnswers: ['3.1 × 10⁻⁶', '3.1×10⁻⁶', '3.1x10⁻⁶', '3.1 x 10⁻⁶', '3.1e-6'], explanation: 'Move the decimal 6 places right: 0.0000031 → 3.1\nMoving right → negative exponent of −6\nAnswer: 3.1 × 10⁻⁶ ✓' },
        { difficulty: 'Medium', question: 'Express 0.0000091 in scientific notation.', answer: '9.1 × 10⁻⁶', checkMode: 'auto', correctAnswer: '9.1 × 10⁻⁶', correctAnswers: ['9.1 × 10⁻⁶', '9.1×10⁻⁶', '9.1x10⁻⁶', '9.1 x 10⁻⁶', '9.1e-6'], explanation: 'Move the decimal 6 places right: 0.0000091 → 9.1\nMoving right → negative exponent of −6\nAnswer: 9.1 × 10⁻⁶ ✓' },
        { difficulty: 'Hard', question: 'Thabo writes 0.000029 in scientific notation as 2.9 × 10⁻⁵. Check his answer.', answer: 'Correct — moving the decimal 5 places right from 0.000029 gives 2.9, confirming 2.9 × 10⁻⁵.', checkMode: 'self' },

        // Block 6 — Combined laws, multi-step and real-life problems (Q17-20)
        { difficulty: 'Hard', question: 'Simplify 3⁻² × 3⁵ ÷ 3⁻¹.', answer: '81', checkMode: 'auto', correctAnswer: '81', explanation: 'Apply multiply/divide same base left to right:\n3⁻² × 3⁵ = 3^(−2 + 5) = 3³\n3³ ÷ 3⁻¹ = 3^(3 − (−1)) = 3⁴ = 81 ✓' },
        { difficulty: 'Hard', question: 'A bacterium has a mass of 6 × 10⁻¹¹ grams. Find the total mass of 3 bacteria in scientific notation.', answer: '1.8 × 10⁻¹⁰ grams', checkMode: 'auto', correctAnswer: '1.8 × 10⁻¹⁰ grams', correctAnswers: ['1.8 × 10⁻¹⁰ grams', '1.8×10⁻¹⁰ grams', '1.8x10⁻¹⁰ grams', '1.8e-10 grams', '1.8 × 10⁻¹⁰'], explanation: 'Multiply: 3 × (6 × 10⁻¹¹) = 18 × 10⁻¹¹\nAdjust to scientific notation: 18 × 10⁻¹¹ = 1.8 × 10¹ × 10⁻¹¹ = 1.8 × 10⁻¹⁰ grams ✓' },
        { difficulty: 'Hard', question: 'Amahle says 6⁻² × 6⁵ equals 216. Is she correct? Explain.', answer: 'Yes — adding the exponents gives −2 + 5 = 3, so 6⁻² × 6⁵ = 6³ = 216.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Simplify 5⁻² × 5⁴ ÷ 5⁻¹.', answer: '125', checkMode: 'auto', correctAnswer: '125', explanation: 'Apply multiply/divide same base left to right:\n5⁻² × 5⁴ = 5^(−2 + 4) = 5²\n5² ÷ 5⁻¹ = 5^(2 − (−1)) = 5³ = 125 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered integer exponents and scientific notation.' },
        { minScore: 14, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 9, message: 'Good effort! Revisit negative exponents and the laws of exponents, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Negative exponent → reciprocal (Q1-4)
        { difficulty: 'Easy', question: 'Simplify 10⁻³.', answer: '1/1000', checkMode: 'auto', correctAnswer: '1/1000', correctAnswers: ['1/1000', '0.001'], explanation: 'Apply a⁻ᵏ = 1/aᵏ:\n10⁻³ = 1/10³ = 1/1000 ✓' },
        { difficulty: 'Easy', question: 'Write 2⁻⁶ as a fraction in simplest form.', answer: '1/64', checkMode: 'auto', correctAnswer: '1/64', explanation: 'Apply the negative exponent rule:\n2⁻⁶ = 1/2⁶ = 1/64 ✓' },
        { difficulty: 'Easy', question: 'What is the value of 5⁻²?', answer: '1/25', checkMode: 'auto', correctAnswer: '1/25', explanation: '5⁻² = 1/5² = 1/25 ✓' },
        { difficulty: 'Medium', question: 'Evaluate 6⁻³ and give your answer as a fraction.', answer: '1/216', checkMode: 'auto', correctAnswer: '1/216', explanation: '6⁻³ = 1/6³ = 1/216 ✓' },

        // Block 2 — Product law with negative exponents (Q5-7)
        { difficulty: 'Medium', question: 'Simplify 7⁻³ × 7⁻¹.', answer: '1/2401', checkMode: 'auto', correctAnswer: '1/2401', explanation: 'Same base — add exponents:\n7⁻³ × 7⁻¹ = 7^(−3 + (−1)) = 7⁻⁴ = 1/7⁴ = 1/2401 ✓' },
        { difficulty: 'Medium', question: 'Simplify 2⁵ × 2⁻⁸.', answer: '1/8', checkMode: 'auto', correctAnswer: '1/8', explanation: 'Same base — add exponents:\n2⁵ × 2⁻⁸ = 2^(5 + (−8)) = 2⁻³ = 1/2³ = 1/8 ✓' },
        { difficulty: 'Hard', question: 'Simplify 9⁻¹ × 9⁻², giving your answer as a fraction.', answer: '1/729', checkMode: 'auto', correctAnswer: '1/729', explanation: 'Same base — add exponents:\n9⁻¹ × 9⁻² = 9^(−1 + (−2)) = 9⁻³ = 1/9³ = 1/729 ✓' },

        // Block 3 — Quotient law with negative exponents (Q8-10)
        { difficulty: 'Medium', question: 'Simplify 9² ÷ 9⁻¹.', answer: '729', checkMode: 'auto', correctAnswer: '729', explanation: 'Same base — subtract exponents:\n9² ÷ 9⁻¹ = 9^(2 − (−1)) = 9³ = 729 ✓' },
        { difficulty: 'Medium', question: 'Find the value of 7³ ÷ 7⁻².', answer: '16807', checkMode: 'auto', correctAnswer: '16807', explanation: 'Same base — subtract exponents:\n7³ ÷ 7⁻² = 7^(3 − (−2)) = 7⁵ = 16807 ✓' },
        { difficulty: 'Hard', question: 'Simplify 3⁻³ ÷ 3⁻¹, giving your answer as a fraction.', answer: '1/9', checkMode: 'auto', correctAnswer: '1/9', explanation: 'Same base — subtract exponents:\n3⁻³ ÷ 3⁻¹ = 3^(−3 − (−1)) = 3⁻² = 1/9 ✓' },

        // Block 4 — Power of a power with negative exponents (Q11-13)
        { difficulty: 'Medium', question: 'Simplify (6⁻¹)⁻².', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: 'Power of a power — multiply exponents:\n(6⁻¹)⁻² = 6^(−1 × −2) = 6² = 36 ✓' },
        { difficulty: 'Hard', question: 'Simplify (10⁻²)².', answer: '1/10000', checkMode: 'auto', correctAnswer: '1/10000', explanation: 'Power of a power — multiply exponents:\n(10⁻²)² = 10^(−2 × 2) = 10⁻⁴ = 1/10000 ✓' },
        { difficulty: 'Hard', question: 'Evaluate (5⁻²)⁻¹, giving your answer as a whole number.', answer: '25', checkMode: 'auto', correctAnswer: '25', explanation: 'Power of a power — multiply exponents:\n(5⁻²)⁻¹ = 5^(−2 × −1) = 5² = 25 ✓' },

        // Block 5 — Scientific notation with negative exponents (Q14-16)
        { difficulty: 'Easy', question: 'Write 0.000000605 in scientific notation.', answer: '6.05 × 10⁻⁷', checkMode: 'auto', correctAnswer: '6.05 × 10⁻⁷', correctAnswers: ['6.05 × 10⁻⁷', '6.05×10⁻⁷', '6.05x10⁻⁷', '6.05 x 10⁻⁷', '6.05e-7'], explanation: 'Move the decimal 7 places right: 0.000000605 → 6.05\nMoving right → negative exponent of −7\nAnswer: 6.05 × 10⁻⁷ ✓' },
        { difficulty: 'Medium', question: 'Express 0.0000004 in scientific notation.', answer: '4 × 10⁻⁷', checkMode: 'auto', correctAnswer: '4 × 10⁻⁷', correctAnswers: ['4 × 10⁻⁷', '4×10⁻⁷', '4x10⁻⁷', '4 x 10⁻⁷', '4e-7', '4.0 × 10⁻⁷'], explanation: 'Move the decimal 7 places right: 0.0000004 → 4\nMoving right → negative exponent of −7\nAnswer: 4 × 10⁻⁷ ✓' },
        { difficulty: 'Hard', question: 'Lerato writes 0.000625 in scientific notation as 6.25 × 10⁻⁴. Check her answer.', answer: 'Correct — moving the decimal 4 places right from 0.000625 gives 6.25, confirming 6.25 × 10⁻⁴.', checkMode: 'self' },

        // Block 6 — Combined laws, multi-step and real-life problems (Q17-20)
        { difficulty: 'Hard', question: 'Simplify 7² × 7⁻³ ÷ 7⁻².', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Apply multiply/divide same base left to right:\n7² × 7⁻³ = 7^(2 + (−3)) = 7⁻¹\n7⁻¹ ÷ 7⁻² = 7^(−1 − (−2)) = 7¹ = 7 ✓' },
        { difficulty: 'Hard', question: 'A hair has a width of 8 × 10⁻⁵ metres. Find the combined width of 200 hairs laid side by side, in scientific notation.', answer: '1.6 × 10⁻² metres', checkMode: 'auto', correctAnswer: '1.6 × 10⁻² metres', correctAnswers: ['1.6 × 10⁻² metres', '1.6×10⁻² metres', '1.6x10⁻² metres', '1.6e-2 metres', '1.6 × 10⁻²', '1.6 × 10⁻² m'], explanation: 'Multiply: 200 × (8 × 10⁻⁵) = 1600 × 10⁻⁵\nAdjust to scientific notation: 1600 × 10⁻⁵ = 1.6 × 10³ × 10⁻⁵ = 1.6 × 10⁻² metres ✓' },
        { difficulty: 'Hard', question: 'Sipho says 2⁻⁴ × 2⁶ equals 4. Is he correct? Explain.', answer: 'Yes — adding the exponents gives −4 + 6 = 2, so 2⁻⁴ × 2⁶ = 2² = 4.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Simplify 6⁻³ × 6⁷ ÷ 6².', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: 'Apply multiply/divide same base left to right:\n6⁻³ × 6⁷ = 6^(−3 + 7) = 6⁴\n6⁴ ÷ 6² = 6^(4 − 2) = 6² = 36 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered integer exponents and scientific notation.' },
        { minScore: 14, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 9, message: 'Good effort! Revisit negative exponents and the laws of exponents, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
