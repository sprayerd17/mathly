import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (decimal fraction roles) ──────────────────────────────────
// decimal places  → orange  (#ea580c)
// multiplication  → green   (#16a34a)
// final answer    → blue    (#2563eb)
// power of 10     → orange  (#ea580c)
// division step   → blue    (#2563eb)
// base            → blue    (#2563eb)
// exponent        → orange  (#ea580c)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Decimal Fractions',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MULTIPLYING DECIMAL FRACTIONS BY DECIMAL FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-decimal-fractions',
      title: 'Multiplying Decimal Fractions by Decimal Fractions',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">We revise <strong>addition, subtraction and multiplication</strong> of decimal fractions to at least 3 decimal places, then extend multiplication to include decimal fractions multiplied by other decimal fractions (not limited to one decimal place). Count the total ${or('decimal places')} in both numbers to place the decimal point correctly in the ${bl('answer')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('decimal places counted')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('multiplication')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('final answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps for multiplying decimal fractions</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Multiply')} — Ignore the decimal points and ${gr('multiply')} the numbers as whole numbers.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Count')} — Count the total number of ${or('decimal places')} in both original numbers combined.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Place')} — Count that many places from the right of your product and insert the decimal point to get the ${bl('final answer')}. Add leading zeros if needed.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Key rule</p>` +
        `<p style="margin:0;color:#1e3a8a;">The total number of ${or('decimal places')} in the ${bl('answer')} always equals the total number of ${or('decimal places')} in both factors combined. If the whole-number product has fewer digits than required, insert leading zeros after the decimal point.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate 2.45 × 3.6.',
          answer: `${gr('2.45')} × ${gr('3.6')} = ${bl('8.82')}`,
          steps: [
            `${gr('Multiply')} ignoring decimal points: ${gr('245')} × ${gr('36')} = ${gr('8 820')}`,
            `${or('Count')} decimal places: 2.45 has ${or('2')} decimal places; 3.6 has ${or('1')} decimal place. Total: ${or('2 + 1 = 3')} decimal places.`,
            `${bl('Place')} the decimal point 3 places from the right of 8 820 → 8.820 = ${bl('8.82')}`,
          ],
        },
        {
          question: 'Calculate 0.125 × 0.04.',
          answer: `${gr('0.125')} × ${gr('0.04')} = ${bl('0.005')}`,
          steps: [
            `${gr('Multiply')} ignoring decimal points: ${gr('125')} × ${gr('4')} = ${gr('500')}`,
            `${or('Count')} decimal places: 0.125 has ${or('3')} decimal places; 0.04 has ${or('2')} decimal places. Total: ${or('3 + 2 = 5')} decimal places.`,
            `${bl('Place')} the decimal point 5 places from the right of 500 → 0.00500 = ${bl('0.005')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 1.5 × 2.4.',
          answer: '3.6',
          checkMode: 'auto',
          correctAnswer: '3.6',
          explanation: 'Multiply ignoring decimals: 15 × 24 = 360\nCount decimal places: 1 + 1 = 2\nPlace decimal: 360 → 3.60 = 3.6 ✓',
        },

        // ── Q2 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 3.25 × 1.6.',
          answer: '5.2',
          checkMode: 'auto',
          correctAnswer: '5.2',
          explanation: 'Multiply ignoring decimals: 325 × 16 = 5 200\nCount decimal places: 2 + 1 = 3\nPlace decimal: 5 200 → 5.200 = 5.2 ✓',
        },

        // ── Q3 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho calculates 0.05 × 0.3 and gets 0.15. Check his answer and correct it if needed.',
          answer: 'He is incorrect — 5 × 3 = 15, with 4 total decimal places gives 0.0015, not 0.15.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to multiply decimal fractions by counting decimal places and placing the decimal point correctly in the product" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing 2.45 x 3.6 with decimal places counted in orange, multiplication shown in green, and final answer in blue" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DIVIDING DECIMAL FRACTIONS BY DECIMAL FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'dividing-decimal-fractions',
      title: 'Dividing Decimal Fractions by Decimal Fractions',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">We extend division to dividing decimal fractions by other decimal fractions. To divide by a decimal, ${or('multiply both numbers by a power of 10')} to make the divisor a whole number, then ${bl('divide')} as normal.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('multiplying by powers of 10')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('division steps')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps for dividing by a decimal fraction</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${or('Choose a power of 10')} — Count the decimal places in the divisor. ${or('Multiply both')} the dividend and divisor by 10, 100, or 1 000 to make the divisor a whole number.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Divide')} — Perform the ${bl('division')} now that the divisor is a whole number.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Answer')} — The result is your ${gr('final answer')}. Multiplying both numbers by the same power of 10 does not change the value of the quotient.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why this works</p>` +
        `<p style="margin:0;color:#1e3a8a;">${or('Multiplying both')} the dividend and the divisor by the same number is equivalent to multiplying the fraction by 1, so the quotient is unchanged. Choose the smallest power of 10 that removes all decimal places from the divisor.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate 4.8 ÷ 0.6.',
          answer: `${or('4.8')} ÷ ${or('0.6')} = ${bl('48')} ÷ ${bl('6')} = ${gr('8')}`,
          steps: [
            `The divisor 0.6 has ${or('1')} decimal place. ${or('Multiply both by 10')}: 4.8 × 10 = ${or('48')} and 0.6 × 10 = ${or('6')}.`,
            `${bl('Divide')}: ${bl('48')} ÷ ${bl('6')} = ${gr('8')}`,
          ],
        },
        {
          question: 'Calculate 1.25 ÷ 0.05.',
          answer: `${or('1.25')} ÷ ${or('0.05')} = ${bl('125')} ÷ ${bl('5')} = ${gr('25')}`,
          steps: [
            `The divisor 0.05 has ${or('2')} decimal places. ${or('Multiply both by 100')}: 1.25 × 100 = ${or('125')} and 0.05 × 100 = ${or('5')}.`,
            `${bl('Divide')}: ${bl('125')} ÷ ${bl('5')} = ${gr('25')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 6.4 ÷ 0.8.',
          answer: '8',
          checkMode: 'auto',
          correctAnswer: '8',
          explanation: 'Divisor 0.8 has 1 decimal place. Multiply both by 10: 64 ÷ 8 = 8 ✓',
        },

        // ── Q5 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 7.2 ÷ 0.06.',
          answer: '120',
          checkMode: 'auto',
          correctAnswer: '120',
          explanation: 'Divisor 0.06 has 2 decimal places. Multiply both by 100: 720 ÷ 6 = 120 ✓',
        },

        // ── Q6 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says 0.9 ÷ 0.3 = 3. Is she correct? Explain.',
          answer: 'Yes — multiplying both by 10 gives 9 ÷ 3 = 3.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to divide decimal fractions by converting the divisor to a whole number using multiplication by powers of 10" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing 4.8 divided by 0.6 with both numbers multiplied by 10 in orange, division step in blue, and final answer in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SQUARES, CUBES AND ROOTS OF DECIMAL FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'squares-cubes-roots-decimal',
      title: 'Squares, Cubes and Roots of Decimal Fractions',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">We calculate the <strong>squares, cubes, square roots and cube roots</strong> of decimal fractions, applying the same operations as with whole numbers but tracking ${or('decimal places')} carefully.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('base')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('exponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key operations</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('base')}${or('²')} — Square</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Multiply the ${bl('base')} by itself. The decimal places in the result are doubled.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('base')}${or('³')} — Cube</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Multiply the ${bl('base')} by itself twice. The decimal places in the result are tripled.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('√')}${bl('base')} — Square root</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Find the number that, when squared, gives the ${bl('base')}. Ask: which value × itself = base?</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('∛')}${bl('base')} — Cube root</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Find the number that, when cubed, gives the ${bl('base')}. Ask: which value × itself × itself = base?</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tip: use your knowledge of whole numbers</p>` +
        `<p style="margin:0;color:#1e3a8a;">You can work out roots of decimal fractions by asking: "What ${bl('base')} raised to this ${or('power')} gives this result?" Knowing squares and cubes of whole numbers up to 10 makes this straightforward — just track the decimal places.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate 0.3².',
          answer: `${bl('0.3')}${or('²')} = ${gr('0.09')}`,
          steps: [
            `${bl('0.3')}${or('²')} = ${bl('0.3')} × ${bl('0.3')} = ${gr('0.09')}`,
          ],
        },
        {
          question: 'Find the cube root of 0.027.',
          answer: `${gr('∛')}${bl('0.027')} = ${gr('0.3')}`,
          steps: [
            `${gr('∛')}${bl('0.027')} = ${gr('0.3')}, since ${bl('0.3')}${or('³')} = ${bl('0.3')} × ${bl('0.3')} × ${bl('0.3')} = 0.027 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 0.6².',
          answer: '0.36',
          checkMode: 'auto',
          correctAnswer: '0.36',
          explanation: '0.6² = 0.6 × 0.6 = 0.36 ✓',
        },

        // ── Q8 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 0.4³.',
          answer: '0.064',
          checkMode: 'auto',
          correctAnswer: '0.064',
          explanation: '0.4³ = 0.4 × 0.4 × 0.4\n0.4 × 0.4 = 0.16\n0.16 × 0.4 = 0.064 ✓',
        },

        // ── Q9 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Find the square root of 0.16.',
          answer: '√0.16 = 0.4, since 0.4² = 0.16.',
          checkMode: 'self',
        },

        // ── Q10 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the cube root of 0.001.',
          answer: '0.1',
          checkMode: 'auto',
          correctAnswer: '0.1',
          explanation: '∛0.001 = 0.1, since 0.1³ = 0.1 × 0.1 × 0.1 = 0.001 ✓',
        },

        // ── Q11 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo says √0.25 = 0.05. Is he correct? Explain.',
          answer: 'No — √0.25 = 0.5, since 0.5² = 0.25, not 0.05.',
          checkMode: 'self',
        },

        // ── Q12 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Calculate 2.5 × 0.4 ÷ 0.5.',
          answer: '2',
          checkMode: 'auto',
          correctAnswer: '2',
          explanation: 'Step 1: 2.5 × 0.4 — multiply: 25 × 4 = 100, 2 decimal places → 1.00 = 1\nStep 2: 1 ÷ 0.5 — multiply both by 10: 10 ÷ 5 = 2 ✓',
        },

        // ── Q13 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A piece of fabric costs R45.60 per metre. Find the cost of 2.5 metres.',
          answer: 'R114',
          checkMode: 'auto',
          correctAnswer: 'R114',
          correctAnswers: ['R114', '114', 'R114.00', '114.00'],
          explanation: '45.60 × 2.5:\nMultiply ignoring decimals: 4 560 × 25 = 114 000\nCount decimal places: 2 + 1 = 3\nPlace decimal: 114 000 → 114.000 = R114 ✓',
        },

        // ── Q14 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle says dividing by a decimal less than 1 always makes the answer smaller. Is she correct? Explain with an example.',
          answer: 'No — for example 4 ÷ 0.5 = 8, which is bigger than 4. Dividing by a number less than 1 makes the answer bigger.',
          checkMode: 'self',
        },

        // ── Q15 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Calculate (0.2)³ + (0.5)².',
          answer: '0.258',
          checkMode: 'auto',
          correctAnswer: '0.258',
          explanation: '(0.2)³ = 0.2 × 0.2 × 0.2 = 0.008\n(0.5)² = 0.5 × 0.5 = 0.25\n0.008 + 0.25 = 0.258 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate squares, cubes, square roots and cube roots of decimal fractions step by step" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing 0.3 squared and the cube root of 0.027 with base in blue, exponent in orange, and final answer in green" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered decimal fractions.' },
    { minScore: 12, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
