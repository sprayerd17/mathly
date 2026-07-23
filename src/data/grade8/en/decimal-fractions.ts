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
        'Short video showing how to multiply decimal fractions by counting decimal places and placing the decimal point correctly in the product',

      diagramPlaceholder:
        'Column layout showing 2.45 × 3.6 multiplied as whole numbers, decimal places counted, and the decimal point placed in the final answer',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 200" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:'Courier New',monospace;">` +
        `<text x="200" y="28" text-anchor="end" font-size="18" font-weight="700" fill="#0f1f3d">2.45</text>` +
        `<text x="200" y="54" text-anchor="end" font-size="18" font-weight="700" fill="#0f1f3d">×  3.6</text>` +
        `<line x1="20" y1="64" x2="200" y2="64" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="200" y="90" text-anchor="end" font-size="16" font-weight="700" fill="#16a34a">245 × 36 = 8 820</text>` +
        `<text x="150" y="102" text-anchor="end" font-size="9" fill="#16a34a">(ignore decimal points)</text>` +
        `<text x="200" y="128" text-anchor="end" font-size="14" font-weight="700" fill="#ea580c">2 + 1 = 3 decimal places</text>` +
        `<line x1="20" y1="140" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="200" y="168" text-anchor="end" font-size="20" font-weight="700" fill="#2563eb">8.82</text>` +
        `<text x="150" y="182" text-anchor="end" font-size="9" fill="#2563eb">(3 places from the right)</text>` +
        `</svg>`,
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
        'Short video showing how to divide decimal fractions by converting the divisor to a whole number using multiplication by powers of 10',

      diagramPlaceholder:
        'Flow diagram showing 4.8 ÷ 0.6 turned into 48 ÷ 6 by multiplying both numbers by 10, giving the final answer 8',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 190" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="110" y="24" text-anchor="middle" font-size="18" font-weight="700" fill="#0f1f3d">4.8 ÷ 0.6</text>` +
        `<line x1="110" y1="34" x2="110" y2="60" stroke="#ea580c" stroke-width="2"/>` +
        `<polygon points="110,66 104,56 116,56" fill="#ea580c"/>` +
        `<text x="140" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">×10 both</text>` +
        `<text x="110" y="90" text-anchor="middle" font-size="18" font-weight="700" fill="#2563eb">48 ÷ 6</text>` +
        `<line x1="110" y1="98" x2="110" y2="122" stroke="#2563eb" stroke-width="2"/>` +
        `<polygon points="110,128 104,118 116,118" fill="#2563eb"/>` +
        `<text x="135" y="116" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">divide</text>` +
        `<text x="110" y="160" text-anchor="middle" font-size="26" font-weight="700" fill="#16a34a">= 8</text>` +
        `</svg>`,
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
        'Short video showing how to calculate squares, cubes, square roots and cube roots of decimal fractions step by step',

      diagramPlaceholder:
        '10-by-10 grid area model showing 0.3² = 0.09, alongside three stacked layers showing 0.3³ = 0.027 so ∛0.027 = 0.3',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="15" y="15" width="100" height="100" fill="none" stroke="#0f1f3d" stroke-width="2"/>` +
        Array.from({ length: 9 }, (_, i) => `<line x1="${15 + 10 * (i + 1)}" y1="15" x2="${15 + 10 * (i + 1)}" y2="115" stroke="#cbd5e1" stroke-width="0.75"/>`).join('') +
        Array.from({ length: 9 }, (_, i) => `<line x1="15" y1="${15 + 10 * (i + 1)}" x2="115" y2="${15 + 10 * (i + 1)}" stroke="#cbd5e1" stroke-width="0.75"/>`).join('') +
        `<rect x="15" y="15" width="30" height="30" fill="rgba(37,99,235,0.28)" stroke="#2563eb" stroke-width="2.5"/>` +
        `<text x="30" y="10" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">0.3</text>` +
        `<text x="6" y="34" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb" transform="rotate(-90 6 34)">0.3</text>` +
        `<text x="65" y="135" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">0.3² = 0.09</text>` +
        `<rect x="190" y="70" width="36" height="36" fill="rgba(37,99,235,0.10)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<rect x="202" y="58" width="36" height="36" fill="rgba(37,99,235,0.16)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<rect x="214" y="46" width="36" height="36" fill="rgba(37,99,235,0.24)" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="232" y="130" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">∛0.027 = 0.3</text>` +
        `<text x="232" y="146" text-anchor="middle" font-size="9" fill="#6b7280">0.3 × 0.3 × 0.3 = 0.027</text>` +
        `</svg>`,
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered decimal fractions.' },
    { minScore: 12, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 1-4 Multi-step mixed operations | 5-8 Multiplying & dividing
    // decimals by decimals | 9-12 Squares, cubes & roots | 13-16 Converting
    // decimals/fractions/percentages | 17-20 Word problems & error-spotting
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Multi-step mixed operations with decimals (1-4)
        { difficulty: 'Medium', question: 'Calculate 12.5 + 3.6 × 2.4, applying the correct order of operations.', answer: '21.14', checkMode: 'auto', correctAnswer: '21.14', explanation: 'Multiplication before addition: 3.6 × 2.4 = 8.64\n12.5 + 8.64 = 21.14 ✓' },
        { difficulty: 'Medium', question: 'Calculate (8.4 - 2.9) × 1.5.', answer: '8.25', checkMode: 'auto', correctAnswer: '8.25', explanation: 'Brackets first: 8.4 − 2.9 = 5.5\n5.5 × 1.5 = 8.25 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate 15.6 ÷ 1.2 + 3.5 × 2.', answer: '20', checkMode: 'auto', correctAnswer: '20', explanation: 'Division and multiplication before addition:\n15.6 ÷ 1.2 = 13\n3.5 × 2 = 7\n13 + 7 = 20 ✓' },
        { difficulty: 'Hard', question: 'Calculate 2.5 × 0.4 + 6.3 ÷ 0.9.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Multiplication and division before addition:\n2.5 × 0.4 = 1\n6.3 ÷ 0.9 = 7\n1 + 7 = 8 ✓' },

        // Block 2 — Multiplying & dividing decimals by decimals (5-8)
        { difficulty: 'Medium', question: 'Calculate 3.6 × 0.24.', answer: '0.864', checkMode: 'auto', correctAnswer: '0.864', explanation: 'Ignore decimal points: 36 × 24 = 864.\nCount decimal places: 3.6 has 1, 0.24 has 2. Total = 3.\nPlace decimal point 3 places from the right: 0.864 ✓' },
        { difficulty: 'Medium', question: 'Calculate 0.84 ÷ 0.12.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Divisor 0.12 has 2 decimal places. Multiply both by 100: 84 ÷ 12 = 7 ✓' },
        { difficulty: 'Medium', question: 'Calculate 5.4 × 1.25.', answer: '6.75', checkMode: 'auto', correctAnswer: '6.75', explanation: 'Ignore decimal points: 54 × 125 = 6 750.\nCount decimal places: 5.4 has 1, 1.25 has 2. Total = 3.\nPlace decimal point 3 places from the right: 6.750 = 6.75 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate 9.36 ÷ 0.78.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Divisor 0.78 has 2 decimal places. Multiply both by 100: 936 ÷ 78 = 12 ✓' },

        // Block 3 — Squares, cubes & roots of decimals (9-12)
        { difficulty: 'Medium', question: 'Calculate 0.7².', answer: '0.49', checkMode: 'auto', correctAnswer: '0.49', explanation: '0.7² = 0.7 × 0.7 = 0.49 ✓' },
        { difficulty: 'Medium', question: 'Calculate 0.2³.', answer: '0.008', checkMode: 'auto', correctAnswer: '0.008', explanation: '0.2³ = 0.2 × 0.2 × 0.2\n0.2 × 0.2 = 0.04\n0.04 × 0.2 = 0.008 ✓' },
        { difficulty: 'Medium-Hard', question: 'Find the square root of 0.49.', answer: '0.7', checkMode: 'auto', correctAnswer: '0.7', explanation: '√0.49 = 0.7, since 0.7 × 0.7 = 0.49 ✓' },
        { difficulty: 'Hard', question: 'Find the cube root of 0.008.', answer: '0.2', checkMode: 'auto', correctAnswer: '0.2', explanation: '∛0.008 = 0.2, since 0.2 × 0.2 × 0.2 = 0.008 ✓' },

        // Block 4 — Converting decimals, fractions & percentages (13-16)
        { difficulty: 'Medium', question: 'Write 0.375 as a fraction in simplest form.', answer: '3/8', checkMode: 'auto', correctAnswer: '3/8', explanation: '0.375 = 375/1000. Divide top and bottom by 125: 375/1000 = 3/8 ✓' },
        { difficulty: 'Medium', question: 'Write 5/8 as a decimal.', answer: '0.625', checkMode: 'auto', correctAnswer: '0.625', explanation: '5 ÷ 8 = 0.625 (since 5/8 = 625/1000) ✓' },
        { difficulty: 'Medium', question: 'Write 7/8 as a percentage.', answer: '87.5%', checkMode: 'auto', correctAnswer: '87.5%', correctAnswers: ['87.5%', '87.5', '87,5%'], explanation: '7/8 = 0.875. Multiply by 100: 0.875 × 100 = 87.5% ✓' },
        { difficulty: 'Medium-Hard', question: 'Order these decimals from smallest to biggest: 0.55, 0.5, 0.505, 0.45', answer: '0.45, 0.5, 0.505, 0.55', checkMode: 'auto', correctAnswer: '0.45,0.5,0.505,0.55', correctAnswers: ['0.45,0.5,0.505,0.55', '0.45, 0.5, 0.505, 0.55'], explanation: 'Compare place by place: 0.45 (4 tenths) is smallest, then 0.5 = 0.500, then 0.505, then 0.55 = 0.550 is biggest.\nOrder: 0.45, 0.5, 0.505, 0.55 ✓' },

        // Block 5 — Word problems, error-spotting & multi-step reasoning (17-20)
        { difficulty: 'Hard', question: "A car uses 6.4 litres of petrol per 100 km. The tank starts with 45.5 litres. How many litres are left after a trip of 350 km?", answer: '23.1 litres', checkMode: 'auto', correctAnswer: '23.1', correctAnswers: ['23.1', '23.1 litres', '23.1litres', '23.1 l', '23.1l'], explanation: 'Fuel used: 6.4 × 350 ÷ 100 = 22.4 litres.\nFuel remaining: 45.5 − 22.4 = 23.1 litres ✓' },
        { difficulty: 'Hard', question: 'A shopper buys 2.5 kg of rice at R14.60 per kg, 1.8 kg of sugar at R12.40 per kg, and 0.75 kg of butter at R64 per kg. She pays with a R200 note. How much change does she get?', answer: 'R93.18', checkMode: 'auto', correctAnswer: 'R93.18', correctAnswers: ['R93.18', '93.18'], explanation: 'Rice: 2.5 × R14.60 = R36.50\nSugar: 1.8 × R12.40 = R22.32\nButter: 0.75 × R64 = R48.00\nTotal: R36.50 + R22.32 + R48.00 = R106.82\nChange: R200 − R106.82 = R93.18 ✓' },
        { difficulty: 'Hard', question: 'A student calculates 0.6 ÷ 0.03 and writes the answer as 0.2. Explain the mistake and give the correct answer.', answer: 'The student divided incorrectly. The divisor 0.03 has 2 decimal places, so multiply both numbers by 100: 0.6 × 100 = 60 and 0.03 × 100 = 3. Then 60 ÷ 3 = 20, not 0.2.', checkMode: 'self', explanation: '0.6 ÷ 0.03: multiply both by 100 → 60 ÷ 3 = 20. Correct answer: 20.' },
        { difficulty: 'Hard', question: 'Four offcuts of pipe measure 2.4 m, 3.15 m, 2.85 m and 3.6 m. What is the average (mean) length of the offcuts?', answer: '3 m', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3m', '3 m', '3.0', '3.00'], explanation: 'Sum: 2.4 + 3.15 + 2.85 + 3.6 = 12 m\nAverage: 12 ÷ 4 = 3 m ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered Grade 8 decimal fractions.' },
        { minScore: 14, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 9, message: 'Good effort! Revisit the rules for decimals, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Multi-step mixed operations with decimals (1-4)
        { difficulty: 'Medium', question: 'Calculate 18.4 + 2.5 × 3.6, applying the correct order of operations.', answer: '27.4', checkMode: 'auto', correctAnswer: '27.4', explanation: 'Multiplication before addition: 2.5 × 3.6 = 9\n18.4 + 9 = 27.4 ✓' },
        { difficulty: 'Medium', question: 'Calculate (9.6 - 4.7) × 2.5.', answer: '12.25', checkMode: 'auto', correctAnswer: '12.25', explanation: 'Brackets first: 9.6 − 4.7 = 4.9\n4.9 × 2.5 = 12.25 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate 24.8 ÷ 0.8 + 4.5 × 3.', answer: '44.5', checkMode: 'auto', correctAnswer: '44.5', explanation: 'Division and multiplication before addition:\n24.8 ÷ 0.8 = 31\n4.5 × 3 = 13.5\n31 + 13.5 = 44.5 ✓' },
        { difficulty: 'Hard', question: 'Calculate 3.5 × 0.6 + 8.4 ÷ 1.2.', answer: '9.1', checkMode: 'auto', correctAnswer: '9.1', explanation: 'Multiplication and division before addition:\n3.5 × 0.6 = 2.1\n8.4 ÷ 1.2 = 7\n2.1 + 7 = 9.1 ✓' },

        // Block 2 — Multiplying & dividing decimals by decimals (5-8)
        { difficulty: 'Medium', question: 'Calculate 4.8 × 0.35.', answer: '1.68', checkMode: 'auto', correctAnswer: '1.68', explanation: 'Ignore decimal points: 48 × 35 = 1 680.\nCount decimal places: 4.8 has 1, 0.35 has 2. Total = 3.\nPlace decimal point 3 places from the right: 1.680 = 1.68 ✓' },
        { difficulty: 'Medium', question: 'Calculate 0.96 ÷ 0.16.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Divisor 0.16 has 2 decimal places. Multiply both by 100: 96 ÷ 16 = 6 ✓' },
        { difficulty: 'Medium', question: 'Calculate 6.2 × 1.5.', answer: '9.3', checkMode: 'auto', correctAnswer: '9.3', explanation: 'Ignore decimal points: 62 × 15 = 930.\nCount decimal places: 6.2 has 1, 1.5 has 1. Total = 2.\nPlace decimal point 2 places from the right: 9.30 = 9.3 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate 12.42 ÷ 0.69.', answer: '18', checkMode: 'auto', correctAnswer: '18', explanation: 'Divisor 0.69 has 2 decimal places. Multiply both by 100: 1 242 ÷ 69 = 18 ✓' },

        // Block 3 — Squares, cubes & roots of decimals (9-12)
        { difficulty: 'Medium', question: 'Calculate 0.9².', answer: '0.81', checkMode: 'auto', correctAnswer: '0.81', explanation: '0.9² = 0.9 × 0.9 = 0.81 ✓' },
        { difficulty: 'Medium', question: 'Calculate 0.3³.', answer: '0.027', checkMode: 'auto', correctAnswer: '0.027', explanation: '0.3³ = 0.3 × 0.3 × 0.3\n0.3 × 0.3 = 0.09\n0.09 × 0.3 = 0.027 ✓' },
        { difficulty: 'Medium-Hard', question: 'Find the square root of 0.81.', answer: '0.9', checkMode: 'auto', correctAnswer: '0.9', explanation: '√0.81 = 0.9, since 0.9 × 0.9 = 0.81 ✓' },
        { difficulty: 'Hard', question: 'Find the cube root of 0.064.', answer: '0.4', checkMode: 'auto', correctAnswer: '0.4', explanation: '∛0.064 = 0.4, since 0.4 × 0.4 × 0.4 = 0.064 ✓' },

        // Block 4 — Converting decimals, fractions & percentages (13-16)
        { difficulty: 'Medium', question: 'Write 0.125 as a fraction in simplest form.', answer: '1/8', checkMode: 'auto', correctAnswer: '1/8', explanation: '0.125 = 125/1000. Divide top and bottom by 125: 125/1000 = 1/8 ✓' },
        { difficulty: 'Medium', question: 'Write 3/8 as a decimal.', answer: '0.375', checkMode: 'auto', correctAnswer: '0.375', explanation: '3 ÷ 8 = 0.375 (since 3/8 = 375/1000) ✓' },
        { difficulty: 'Medium', question: 'Write 9/40 as a percentage.', answer: '22.5%', checkMode: 'auto', correctAnswer: '22.5%', correctAnswers: ['22.5%', '22.5', '22,5%'], explanation: '9/40 = 0.225. Multiply by 100: 0.225 × 100 = 22.5% ✓' },
        { difficulty: 'Medium-Hard', question: 'Order these decimals from smallest to biggest: 0.72, 0.7, 0.702, 0.27', answer: '0.27, 0.7, 0.702, 0.72', checkMode: 'auto', correctAnswer: '0.27,0.7,0.702,0.72', correctAnswers: ['0.27,0.7,0.702,0.72', '0.27, 0.7, 0.702, 0.72'], explanation: 'Compare place by place: 0.27 (2 tenths) is smallest, then 0.7 = 0.700, then 0.702, then 0.72 = 0.720 is biggest.\nOrder: 0.27, 0.7, 0.702, 0.72 ✓' },

        // Block 5 — Word problems, error-spotting & multi-step reasoning (17-20)
        { difficulty: 'Hard', question: 'A car uses 7.2 litres of petrol per 100 km. The tank starts with 38.4 litres. How many litres are left after a trip of 250 km?', answer: '20.4 litres', checkMode: 'auto', correctAnswer: '20.4', correctAnswers: ['20.4', '20.4 litres', '20.4litres', '20.4 l', '20.4l'], explanation: 'Fuel used: 7.2 × 250 ÷ 100 = 18 litres.\nFuel remaining: 38.4 − 18 = 20.4 litres ✓' },
        { difficulty: 'Hard', question: 'A shopper buys 1.6 kg of flour at R16.80 per kg, 2.4 kg of apples at R18.50 per kg, and 0.5 kg of cheese at R89.40 per kg. She pays with a R150 note. How much change does she get?', answer: 'R34.02', checkMode: 'auto', correctAnswer: 'R34.02', correctAnswers: ['R34.02', '34.02'], explanation: 'Flour: 1.6 × R16.80 = R26.88\nApples: 2.4 × R18.50 = R44.40\nCheese: 0.5 × R89.40 = R44.70\nTotal: R26.88 + R44.40 + R44.70 = R115.98\nChange: R150 − R115.98 = R34.02 ✓' },
        { difficulty: 'Hard', question: 'A student calculates 0.8 ÷ 0.04 and writes the answer as 0.2. Explain the mistake and give the correct answer.', answer: 'The student divided incorrectly. The divisor 0.04 has 2 decimal places, so multiply both numbers by 100: 0.8 × 100 = 80 and 0.04 × 100 = 4. Then 80 ÷ 4 = 20, not 0.2.', checkMode: 'self', explanation: '0.8 ÷ 0.04: multiply both by 100 → 80 ÷ 4 = 20. Correct answer: 20.' },
        { difficulty: 'Hard', question: 'Four offcuts of pipe measure 4.2 m, 3.65 m, 4.85 m and 3.3 m. What is the average (mean) length of the offcuts?', answer: '4 m', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4m', '4 m', '4.0', '4.00'], explanation: 'Sum: 4.2 + 3.65 + 4.85 + 3.3 = 16 m\nAverage: 16 ÷ 4 = 4 m ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered Grade 8 decimal fractions.' },
        { minScore: 14, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 9, message: 'Good effort! Revisit the rules for decimals, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Multi-step mixed operations with decimals (1-4)
        { difficulty: 'Medium', question: 'Calculate 22.6 + 4.2 × 1.8, applying the correct order of operations.', answer: '30.16', checkMode: 'auto', correctAnswer: '30.16', explanation: 'Multiplication before addition: 4.2 × 1.8 = 7.56\n22.6 + 7.56 = 30.16 ✓' },
        { difficulty: 'Medium', question: 'Calculate (7.8 - 3.6) × 3.5.', answer: '14.7', checkMode: 'auto', correctAnswer: '14.7', explanation: 'Brackets first: 7.8 − 3.6 = 4.2\n4.2 × 3.5 = 14.7 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate 33.6 ÷ 1.4 + 2.8 × 4.', answer: '35.2', checkMode: 'auto', correctAnswer: '35.2', explanation: 'Division and multiplication before addition:\n33.6 ÷ 1.4 = 24\n2.8 × 4 = 11.2\n24 + 11.2 = 35.2 ✓' },
        { difficulty: 'Hard', question: 'Calculate 4.5 × 0.8 + 5.4 ÷ 0.6.', answer: '12.6', checkMode: 'auto', correctAnswer: '12.6', explanation: 'Multiplication and division before addition:\n4.5 × 0.8 = 3.6\n5.4 ÷ 0.6 = 9\n3.6 + 9 = 12.6 ✓' },

        // Block 2 — Multiplying & dividing decimals by decimals (5-8)
        { difficulty: 'Medium', question: 'Calculate 2.7 × 0.45.', answer: '1.215', checkMode: 'auto', correctAnswer: '1.215', explanation: 'Ignore decimal points: 27 × 45 = 1 215.\nCount decimal places: 2.7 has 1, 0.45 has 2. Total = 3.\nPlace decimal point 3 places from the right: 1.215 ✓' },
        { difficulty: 'Medium', question: 'Calculate 0.72 ÷ 0.09.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Divisor 0.09 has 2 decimal places. Multiply both by 100: 72 ÷ 9 = 8 ✓' },
        { difficulty: 'Medium', question: 'Calculate 8.4 × 1.25.', answer: '10.5', checkMode: 'auto', correctAnswer: '10.5', explanation: 'Ignore decimal points: 84 × 125 = 10 500.\nCount decimal places: 8.4 has 1, 1.25 has 2. Total = 3.\nPlace decimal point 3 places from the right: 10.500 = 10.5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate 14.72 ÷ 0.92.', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: 'Divisor 0.92 has 2 decimal places. Multiply both by 100: 1 472 ÷ 92 = 16 ✓' },

        // Block 3 — Squares, cubes & roots of decimals (9-12)
        { difficulty: 'Medium', question: 'Calculate 0.8².', answer: '0.64', checkMode: 'auto', correctAnswer: '0.64', explanation: '0.8² = 0.8 × 0.8 = 0.64 ✓' },
        { difficulty: 'Medium', question: 'Calculate 0.5³.', answer: '0.125', checkMode: 'auto', correctAnswer: '0.125', explanation: '0.5³ = 0.5 × 0.5 × 0.5\n0.5 × 0.5 = 0.25\n0.25 × 0.5 = 0.125 ✓' },
        { difficulty: 'Medium-Hard', question: 'Find the square root of 0.36.', answer: '0.6', checkMode: 'auto', correctAnswer: '0.6', explanation: '√0.36 = 0.6, since 0.6 × 0.6 = 0.36 ✓' },
        { difficulty: 'Hard', question: 'Find the cube root of 0.027.', answer: '0.3', checkMode: 'auto', correctAnswer: '0.3', explanation: '∛0.027 = 0.3, since 0.3 × 0.3 × 0.3 = 0.027 ✓' },

        // Block 4 — Converting decimals, fractions & percentages (13-16)
        { difficulty: 'Medium', question: 'Write 0.875 as a fraction in simplest form.', answer: '7/8', checkMode: 'auto', correctAnswer: '7/8', explanation: '0.875 = 875/1000. Divide top and bottom by 125: 875/1000 = 7/8 ✓' },
        { difficulty: 'Medium', question: 'Write 7/20 as a decimal.', answer: '0.35', checkMode: 'auto', correctAnswer: '0.35', explanation: '7 ÷ 20 = 0.35 (since 7/20 = 35/100) ✓' },
        { difficulty: 'Medium', question: 'Write 11/25 as a percentage.', answer: '44%', checkMode: 'auto', correctAnswer: '44%', correctAnswers: ['44%', '44'], explanation: '11/25 = 44/100 = 0.44. Multiply by 100: 0.44 × 100 = 44% ✓' },
        { difficulty: 'Medium-Hard', question: 'Order these decimals from smallest to biggest: 0.63, 0.6, 0.603, 0.36', answer: '0.36, 0.6, 0.603, 0.63', checkMode: 'auto', correctAnswer: '0.36,0.6,0.603,0.63', correctAnswers: ['0.36,0.6,0.603,0.63', '0.36, 0.6, 0.603, 0.63'], explanation: 'Compare place by place: 0.36 (3 tenths) is smallest, then 0.6 = 0.600, then 0.603, then 0.63 = 0.630 is biggest.\nOrder: 0.36, 0.6, 0.603, 0.63 ✓' },

        // Block 5 — Word problems, error-spotting & multi-step reasoning (17-20)
        { difficulty: 'Hard', question: 'A car uses 5.6 litres of petrol per 100 km. The tank starts with 42.8 litres. How many litres are left after a trip of 400 km?', answer: '20.4 litres', checkMode: 'auto', correctAnswer: '20.4', correctAnswers: ['20.4', '20.4 litres', '20.4litres', '20.4 l', '20.4l'], explanation: 'Fuel used: 5.6 × 400 ÷ 100 = 22.4 litres.\nFuel remaining: 42.8 − 22.4 = 20.4 litres ✓' },
        { difficulty: 'Hard', question: 'A shopper buys 3.2 kg of potatoes at R9.80 per kg, 1.4 kg of tomatoes at R22.60 per kg, and 0.6 kg of cheese at R95.50 per kg. She pays with a R180 note. How much change does she get?', answer: 'R59.70', checkMode: 'auto', correctAnswer: 'R59.70', correctAnswers: ['R59.70', '59.70'], explanation: 'Potatoes: 3.2 × R9.80 = R31.36\nTomatoes: 1.4 × R22.60 = R31.64\nCheese: 0.6 × R95.50 = R57.30\nTotal: R31.36 + R31.64 + R57.30 = R120.30\nChange: R180 − R120.30 = R59.70 ✓' },
        { difficulty: 'Hard', question: 'A student calculates 0.9 ÷ 0.03 and writes the answer as 0.3. Explain the mistake and give the correct answer.', answer: 'The student divided incorrectly. The divisor 0.03 has 2 decimal places, so multiply both numbers by 100: 0.9 × 100 = 90 and 0.03 × 100 = 3. Then 90 ÷ 3 = 30, not 0.3.', checkMode: 'self', explanation: '0.9 ÷ 0.03: multiply both by 100 → 90 ÷ 3 = 30. Correct answer: 30.' },
        { difficulty: 'Hard', question: 'Four offcuts of pipe measure 5.4 m, 4.15 m, 3.85 m and 4.6 m. What is the average (mean) length of the offcuts?', answer: '4.5 m', checkMode: 'auto', correctAnswer: '4.5', correctAnswers: ['4.5', '4.5m', '4.5 m', '4.50'], explanation: 'Sum: 5.4 + 4.15 + 3.85 + 4.6 = 18 m\nAverage: 18 ÷ 4 = 4.5 m ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered Grade 8 decimal fractions.' },
        { minScore: 14, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 9, message: 'Good effort! Revisit the rules for decimals, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
