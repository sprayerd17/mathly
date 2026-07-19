import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (decimal fraction roles) ──────────────────────────────────
// brackets / squares / calculations → blue   (#2563eb)
// operations / cubes / rounding    → orange (#ea580c)
// final answer / roots             → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Decimal Fractions',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MULTIPLE OPERATIONS WITH DECIMAL FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiple-operations-decimal-fractions',
      title: 'Multiple Operations with Decimal Fractions',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">We consolidate all operations with decimal fractions, applying <strong>multiple operations</strong> with or without brackets in combined calculations, using a calculator where appropriate for efficiency.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('brackets')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('operations')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── BODMAS ───────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Order of operations (BODMAS)</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('B')}rackets — evaluate expressions inside brackets first.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('O')}rders — exponents, squares and roots come next.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('D')}ivision and ${or('M')}ultiplication — work from left to right.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('A')}ddition and ${gr('S')}ubtraction — work from left to right.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip ─────────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Calculator tip</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always apply BODMAS before entering values into a calculator. Write each step clearly so you can check your working. A calculator is a tool — you still need to understand the order of operations to use it correctly.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate (2.5 + 1.3) × 0.4.',
          answer: `${gr('1.52')}`,
          steps: [
            `${bl('Brackets first:')} 2.5 + 1.3 = ${bl('3.8')}`,
            `${or('Then multiply:')} ${bl('3.8')} × 0.4 = ${gr('1.52')}`,
          ],
        },
        {
          question: 'Calculate 6.4 ÷ 0.8 − 1.5 × 2.',
          answer: `${gr('5')}`,
          steps: [
            `${or('Division first')} (left to right with multiplication, BODMAS): 6.4 ÷ 0.8 = ${or('8')}`,
            `${or('Multiplication:')} 1.5 × 2 = ${or('3')}`,
            `${gr('Subtract:')} ${or('8')} − ${or('3')} = ${gr('5')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate (1.5 + 2.5) × 0.6.',
          answer: '2.4',
          checkMode: 'auto',
          correctAnswer: '2.4',
          explanation: 'Brackets first: 1.5 + 2.5 = 4.\nThen multiply: 4 × 0.6 = 2.4 ✓',
        },

        // ── Q2 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 8.4 ÷ 0.6 − 2.5 × 1.2.',
          answer: '11',
          checkMode: 'auto',
          correctAnswer: '11',
          explanation: 'Division: 8.4 ÷ 0.6 = 14.\nMultiplication: 2.5 × 1.2 = 3.\nSubtract: 14 − 3 = 11 ✓',
        },

        // ── Q3 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho calculates (3.2 − 1.7) × 2.5 and gets 2.75. Check his answer.',
          answer: '3.2 − 1.7 = 1.5. 1.5 × 2.5 = 3.75. He is incorrect — the correct answer is 3.75.',
          checkMode: 'self',
        },

        // ── Q11 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate (4.5 ÷ 1.5) + (2.4 × 0.5).',
          answer: '4.2',
          checkMode: 'auto',
          correctAnswer: '4.2',
          explanation: 'Brackets: 4.5 ÷ 1.5 = 3.\nBrackets: 2.4 × 0.5 = 1.2.\nAdd: 3 + 1.2 = 4.2 ✓',
        },

        // ── Q15 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Calculate (0.4 + 0.6)² − (0.2 × 0.3).',
          answer: '0.94',
          checkMode: 'auto',
          correctAnswer: '0.94',
          explanation: 'Brackets: 0.4 + 0.6 = 1. Square: 1² = 1.\nBrackets: 0.2 × 0.3 = 0.06.\nSubtract: 1 − 0.06 = 0.94 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply BODMAS to combined decimal fraction calculations with and without brackets" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SQUARES, CUBES AND ROOTS OF DECIMAL FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'squares-cubes-roots-decimal-fractions',
      title: 'Squares, Cubes and Roots of Decimal Fractions in Combined Calculations',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">We apply <strong>squares</strong>, <strong>cubes</strong>, <strong>square roots</strong> and <strong>cube roots</strong> of decimal fractions within larger combined calculations, integrating these skills with brackets and the order of operations.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('squares')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('cubes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('roots')}</span>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key facts to remember</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Squaring a decimal')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Multiply the decimal by itself. Example: 0.3² = 0.3 × 0.3 = ${bl('0.09')}. Note the result is smaller than the original.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Cubing a decimal')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Multiply the decimal by itself three times. Example: 0.2³ = 0.2 × 0.2 × 0.2 = ${or('0.008')}. Gets much smaller quickly.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Roots of decimals')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Find what multiplied by itself gives the decimal. Example: √0.09 = ${gr('0.3')} because 0.3 × 0.3 = 0.09.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip ─────────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Watch out: roots of decimals can be surprising</p>` +
        `<p style="margin:0;color:#1e3a8a;">The square root of a decimal between 0 and 1 is <strong>larger</strong> than the original — for example √0.25 = 0.5, and 0.5 &gt; 0.25. Always check your answer by squaring or cubing it back.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate 0.5² + √0.36.',
          answer: `${gr('0.85')}`,
          steps: [
            `${bl('Square:')} 0.5² = 0.5 × 0.5 = ${bl('0.25')}`,
            `${gr('Square root:')} √0.36 = ${gr('0.6')} (check: 0.6 × 0.6 = 0.36 ✓)`,
            `Add: ${bl('0.25')} + ${gr('0.6')} = ${gr('0.85')}`,
          ],
        },
        {
          question: 'Sipho calculates (0.2³) × 10 and gets 0.08. Check his answer.',
          answer: `${gr('0.08')} — Sipho is correct.`,
          steps: [
            `${or('Cube:')} 0.2³ = 0.2 × 0.2 × 0.2 = ${or('0.008')}`,
            `Multiply: ${or('0.008')} × 10 = ${gr('0.08')}`,
            `Sipho's answer is ${gr('correct')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 0.3² + 0.4².',
          answer: '0.25',
          checkMode: 'auto',
          correctAnswer: '0.25',
          explanation: '0.3² = 0.09. 0.4² = 0.16. Sum: 0.09 + 0.16 = 0.25 ✓',
        },

        // ── Q5 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate √0.64 − 0.2³.',
          answer: '0.792',
          checkMode: 'auto',
          correctAnswer: '0.792',
          explanation: '√0.64 = 0.8 (check: 0.8² = 0.64 ✓).\n0.2³ = 0.008.\nSubtract: 0.8 − 0.008 = 0.792 ✓',
        },

        // ── Q6 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato calculates (0.5²) × (0.1³) and gets 0.00025. Check her answer.',
          answer: '0.5² = 0.25. 0.1³ = 0.001. 0.25 × 0.001 = 0.00025. She is correct.',
          checkMode: 'self',
        },

        // ── Q12 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Calculate √1.21 + (0.3)² − 0.5.',
          answer: '0.69',
          checkMode: 'auto',
          correctAnswer: '0.69',
          explanation: '√1.21 = 1.1 (check: 1.1² = 1.21 ✓).\n(0.3)² = 0.09.\nCalculate: 1.1 + 0.09 − 0.5 = 0.69 ✓',
        },

        // ── Q13 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says √0.25 = 0.05. Is she correct? Explain.',
          answer: 'No — √0.25 = 0.5, since 0.5² = 0.25, not 0.05² = 0.0025.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate squares, cubes and roots of decimal fractions within combined calculations using BODMAS" />',

      diagramPlaceholder:
        'Number line showing that squaring a decimal between 0 and 1 makes it smaller, while taking its square root makes it larger',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 160" width="100%" style="max-width:400px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="160" y="14" text-anchor="middle" font-size="10" fill="#6b7280">Squaring and rooting decimals between 0 and 1</text>` +
        `<line x1="20" y1="80" x2="300" y2="80" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="20" y1="74" x2="20" y2="86" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="300" y1="74" x2="300" y2="86" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<circle cx="45" cy="80" r="4" fill="#ea580c"/>` +
        `<circle cx="104" cy="80" r="4" fill="#2563eb"/>` +
        `<text x="20" y="101" text-anchor="middle" font-size="10" fill="#6b7280">0</text>` +
        `<text x="45" y="101" text-anchor="middle" font-size="10" font-weight="700" fill="#ea580c">0.09</text>` +
        `<text x="104" y="101" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">0.3</text>` +
        `<text x="300" y="101" text-anchor="middle" font-size="10" fill="#6b7280">1</text>` +
        `<path d="M104,74 Q75,35 45,74" fill="none" stroke="#ea580c" stroke-width="1.5"/>` +
        `<polygon points="45,74 39,64 51,64" fill="#ea580c"/>` +
        `<text x="75" y="25" text-anchor="middle" font-size="10" font-weight="700" fill="#ea580c">0.3² = 0.09</text>` +
        `<text x="75" y="38" text-anchor="middle" font-size="8" fill="#6b7280">(squaring shrinks it)</text>` +
        `<path d="M45,86 Q75,125 104,86" fill="none" stroke="#16a34a" stroke-width="1.5"/>` +
        `<polygon points="104,86 98,96 110,96" fill="#16a34a"/>` +
        `<text x="75" y="135" text-anchor="middle" font-size="10" font-weight="700" fill="#16a34a">√0.09 = 0.3</text>` +
        `<text x="75" y="148" text-anchor="middle" font-size="8" fill="#6b7280">(rooting grows it)</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING PROBLEMS USING DECIMAL FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-problems-decimal-fractions',
      title: 'Solving Problems Using Decimal Fractions',
      icon: '📝',
      explanation:
        `<p style="margin-bottom:16px;">We solve <strong>multi-step, real-life problems</strong> involving decimal fractions, often combining several operations and rounding appropriately for the context — for example, rounding money to 2 decimal places.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('calculations')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rounding')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── Strategy ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">3-step strategy for real-life problems</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identify')} — Identify all the given values and what you need to find. Write a number sentence.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Calculate')} — Work through each step in BODMAS order. Show every step clearly.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Round and answer')} — Round to the correct number of decimal places for the context and write a full sentence answer.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip ─────────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#b45309;margin-bottom:6px;">Rounding for context</p>` +
        `<p style="margin:0;color:#92400e;">Money answers should be rounded to ${or('2 decimal places')} (nearest cent). For measurements like mass or volume, follow the instruction given. Only round at the ${or('final step')} — rounding too early causes errors.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato buys 3.5 kg of apples at R18.40 per kg and 2.2 kg of oranges at R15.60 per kg. Find the total cost.',
          answer: `${gr('R98.72')}`,
          steps: [
            `${bl('Apples:')} 3.5 × R18.40 = ${bl('R64.40')}`,
            `${bl('Oranges:')} 2.2 × R15.60 = ${bl('R34.32')}`,
            `${gr('Total:')} R64.40 + R34.32 = ${gr('R98.72')}`,
          ],
        },
        {
          question: "Thabo's car uses 6.8 litres per 100 km. How many litres are needed for a 350 km trip, to 2 decimal places?",
          answer: `${gr('23.80 litres')}`,
          steps: [
            `${bl('Rate per km:')} 6.8 ÷ 100 = ${bl('0.068')} litres per km`,
            `${bl('Multiply by distance:')} 0.068 × 350 = ${bl('23.8')}`,
            `${or('Round to 2 decimal places:')} ${or('23.80')} litres`,
            `<strong>Answer:</strong> ${gr('23.80 litres')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Thabo buys 4.2 kg of rice at R22.50 per kg. Find the total cost.',
          answer: 'R94.50',
          checkMode: 'auto',
          correctAnswer: 'R94.50',
          explanation: '4.2 × R22.50 = R94.50 ✓',
        },

        // ── Q8 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle buys 2.8 kg of beef at R85.40 per kg and 1.5 kg of chicken at R62.30 per kg. Find the total cost.',
          answer: 'R332.57',
          checkMode: 'auto',
          correctAnswer: 'R332.57',
          explanation: 'Beef: 2.8 × R85.40 = R239.12.\nChicken: 1.5 × R62.30 = R93.45.\nTotal: R239.12 + R93.45 = R332.57 ✓',
        },

        // ── Q9 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A car uses 7.2 litres per 100 km. How many litres are needed for a 250 km trip?',
          answer: '18 litres',
          checkMode: 'auto',
          correctAnswer: '18',
          explanation: '(7.2 ÷ 100) × 250 = 0.072 × 250 = 18 litres ✓',
        },

        // ── Q10 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Sipho's car uses 6.5 litres per 100 km. Find how many litres are needed for a 420 km trip, to 2 decimal places.",
          answer: '27.30 litres',
          checkMode: 'auto',
          correctAnswer: '27.30',
          explanation: '(6.5 ÷ 100) × 420 = 0.065 × 420 = 27.3 → rounded to 2 decimal places: 27.30 litres ✓',
        },

        // ── Q14 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A recipe requires 0.75 kg of flour per batch. Find the total flour needed for 3.5 batches.',
          answer: '2.625 kg',
          checkMode: 'auto',
          correctAnswer: '2.625',
          explanation: '0.75 × 3.5 = 2.625 kg ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve multi-step real-life problems involving decimal fractions, with rounding money to 2 decimal places" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered decimal fractions.' },
    { minScore: 11, message: 'Great work! Review any missed questions and you will have it perfect.' },
    { minScore: 8, message: 'Good effort — review the worked examples and try again.' },
    { minScore: 0, message: 'Keep going — work through the study guide again, section by section, then try again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 1-3 BODMAS with brackets | 4-6 BODMAS without brackets (mixed
    // operations) | 7-9 Squares & cubes in combined calculations | 10-13
    // Roots in combined calculations & error-checking | 14-17 Multi-step
    // real-life word problems | 18-20 Rounding to a given number of decimal
    // places & error-spotting reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block A — BODMAS with brackets (1-3)
        { difficulty: 'Medium', question: 'Calculate (4.5 + 2.3) × 1.6.', answer: '10.88', checkMode: 'auto', correctAnswer: '10.88', explanation: 'Brackets first: 4.5 + 2.3 = 6.8\nMultiply: 6.8 × 1.6 = 10.88 ✓' },
        { difficulty: 'Medium', question: 'Calculate (9.6 − 3.4) ÷ 2.', answer: '3.1', checkMode: 'auto', correctAnswer: '3.1', explanation: 'Brackets first: 9.6 − 3.4 = 6.2\nDivide: 6.2 ÷ 2 = 3.1 ✓' },
        { difficulty: 'Medium-Hard', question: 'A recipe scales its ingredients using the expression (2.4 + 1.8) × 0.5. Evaluate this expression.', answer: '2.1', checkMode: 'auto', correctAnswer: '2.1', explanation: 'Brackets first: 2.4 + 1.8 = 4.2\nMultiply: 4.2 × 0.5 = 2.1 ✓' },

        // Block B — BODMAS without brackets, mixed operations (4-6)
        { difficulty: 'Medium', question: 'Calculate 8.4 ÷ 1.4 + 2.5 × 3.2 − 1.5.', answer: '12.5', checkMode: 'auto', correctAnswer: '12.5', explanation: 'Division and multiplication first, left to right:\n8.4 ÷ 1.4 = 6\n2.5 × 3.2 = 8\nThen add and subtract left to right: 6 + 8 − 1.5 = 12.5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate 12.6 ÷ 0.9 − 2.4 × 1.5.', answer: '10.4', checkMode: 'auto', correctAnswer: '10.4', explanation: 'Division: 12.6 ÷ 0.9 = 14\nMultiplication: 2.4 × 1.5 = 3.6\nSubtract: 14 − 3.6 = 10.4 ✓' },
        { difficulty: 'Hard', question: 'Calculate 15 − 4.8 ÷ 0.6 + 0.5 × 3.4.', answer: '8.7', checkMode: 'auto', correctAnswer: '8.7', explanation: 'Division: 4.8 ÷ 0.6 = 8\nMultiplication: 0.5 × 3.4 = 1.7\nWork left to right: 15 − 8 + 1.7 = 8.7 ✓' },

        // Block C — Squares & cubes in combined calculations (7-9)
        { difficulty: 'Medium', question: 'Calculate 0.6² + 0.3².', answer: '0.45', checkMode: 'auto', correctAnswer: '0.45', explanation: '0.6² = 0.36\n0.3² = 0.09\nAdd: 0.36 + 0.09 = 0.45 ✓' },
        { difficulty: 'Medium', question: 'Calculate 0.4³ × 10.', answer: '0.64', checkMode: 'auto', correctAnswer: '0.64', explanation: '0.4³ = 0.4 × 0.4 × 0.4 = 0.064\nMultiply: 0.064 × 10 = 0.64 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate (0.5 + 0.3)² − 0.2 × 0.3.', answer: '0.58', checkMode: 'auto', correctAnswer: '0.58', explanation: 'Brackets: 0.5 + 0.3 = 0.8\nSquare: 0.8² = 0.64\nMultiplication: 0.2 × 0.3 = 0.06\nSubtract: 0.64 − 0.06 = 0.58 ✓' },

        // Block D — Roots in combined calculations & error-checking (10-13)
        { difficulty: 'Medium', question: 'Calculate √0.36 + 0.2³.', answer: '0.608', checkMode: 'auto', correctAnswer: '0.608', explanation: '√0.36 = 0.6 (check: 0.6 × 0.6 = 0.36 ✓)\n0.2³ = 0.008\nAdd: 0.6 + 0.008 = 0.608 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate √1.44 − 0.4².', answer: '1.04', checkMode: 'auto', correctAnswer: '1.04', explanation: '√1.44 = 1.2 (check: 1.2 × 1.2 = 1.44 ✓)\n0.4² = 0.16\nSubtract: 1.2 − 0.16 = 1.04 ✓' },
        { difficulty: 'Hard', question: 'Calculate ∛0.125 + 0.7².', answer: '0.99', checkMode: 'auto', correctAnswer: '0.99', explanation: '∛0.125 = 0.5 (check: 0.5 × 0.5 × 0.5 = 0.125 ✓)\n0.7² = 0.49\nAdd: 0.5 + 0.49 = 0.99 ✓' },
        { difficulty: 'Hard', question: 'Lerato calculates 0.9² and ∛0.027 × 10, and claims both give the same answer. Is she correct? Show your working.', answer: 'No — 0.9² = 0.81 and ∛0.027 × 10 = 0.3 × 10 = 3, so actually these are NOT equal. She is incorrect.', checkMode: 'self' },

        // Block E — Multi-step real-life word problems (14-17)
        { difficulty: 'Medium', question: 'Amahle buys 3.4 kg of potatoes at R24.50 per kg and 1.6 kg of onions at R38.20 per kg. Find the total cost.', answer: 'R144.42', checkMode: 'auto', correctAnswer: 'R144.42', correctAnswers: ['R144.42', '144.42'], explanation: 'Potatoes: 3.4 × R24.50 = R83.30\nOnions: 1.6 × R38.20 = R61.12\nTotal: R83.30 + R61.12 = R144.42 ✓' },
        { difficulty: 'Medium', question: "Sipho's bakkie uses 5.5 litres of fuel per 100 km. How many litres are needed for a 320 km trip?", answer: '17.6 litres', checkMode: 'auto', correctAnswer: '17.6', correctAnswers: ['17.6', '17.6 litres', '17.6litres', '17.6 l', '17.6l'], explanation: 'Rate per km: 5.5 ÷ 100 = 0.055 litres per km\nMultiply by distance: 0.055 × 320 = 17.6 litres ✓' },
        { difficulty: 'Medium-Hard', question: 'Thabo buys 4.8 kg of apples at R21.60 per kg and pays with a R150 note. How much change does he receive?', answer: 'R46.32', checkMode: 'auto', correctAnswer: 'R46.32', correctAnswers: ['R46.32', '46.32'], explanation: 'Cost: 4.8 × R21.60 = R103.68\nChange: R150 − R103.68 = R46.32 ✓' },
        { difficulty: 'Hard', question: 'A household uses 180.5 kWh of electricity in a month, billed at R2.40 per kWh. Find the total electricity bill.', answer: 'R433.20', checkMode: 'auto', correctAnswer: 'R433.20', correctAnswers: ['R433.20', '433.20', 'R433.2', '433.2'], explanation: 'Total: 180.5 × R2.40 = R433.20 ✓' },

        // Block F — Rounding to a given number of decimal places & error-spotting (18-20)
        { difficulty: 'Medium-Hard', question: "Lerato's car uses 6.5 litres per 100 km. Calculate the litres needed for a 480 km trip, correct to 2 decimal places.", answer: '31.20 litres', checkMode: 'auto', correctAnswer: '31.20', correctAnswers: ['31.20', '31.2', '31.20 litres', '31.2 litres', '31.20l', '31.2l'], explanation: 'Rate per km: 6.5 ÷ 100 = 0.065 litres per km\nMultiply: 0.065 × 480 = 31.2\nRounded to 2 decimal places: 31.20 litres ✓' },
        { difficulty: 'Hard', question: 'A prize of R22.50 is shared equally among 7 learners. Find each share, correct to 2 decimal places.', answer: 'R3.21', checkMode: 'auto', correctAnswer: 'R3.21', correctAnswers: ['R3.21', '3.21'], explanation: '22.50 ÷ 7 = 3.214285... \nRounded to 2 decimal places: R3.21 ✓' },
        { difficulty: 'Hard', question: 'A student calculates 0.8 ÷ 0.05 and writes the answer as 1.6. Explain the mistake and give the correct answer.', answer: 'The student divided incorrectly. The divisor 0.05 has 2 decimal places, so multiply both numbers by 100: 0.8 × 100 = 80 and 0.05 × 100 = 5. Then 80 ÷ 5 = 16, not 1.6.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered Grade 9 decimal fractions.' },
        { minScore: 14, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block A — BODMAS with brackets (1-3)
        { difficulty: 'Medium', question: 'Calculate (5.5 + 1.7) × 1.4.', answer: '10.08', checkMode: 'auto', correctAnswer: '10.08', explanation: 'Brackets first: 5.5 + 1.7 = 7.2\nMultiply: 7.2 × 1.4 = 10.08 ✓' },
        { difficulty: 'Medium', question: 'Calculate (8.4 − 2.6) ÷ 2.', answer: '2.9', checkMode: 'auto', correctAnswer: '2.9', explanation: 'Brackets first: 8.4 − 2.6 = 5.8\nDivide: 5.8 ÷ 2 = 2.9 ✓' },
        { difficulty: 'Medium-Hard', question: 'A tailor scales a pattern using the expression (3.6 + 2.4) × 0.5. Evaluate this expression.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Brackets first: 3.6 + 2.4 = 6\nMultiply: 6 × 0.5 = 3 ✓' },

        // Block B — BODMAS without brackets, mixed operations (4-6)
        { difficulty: 'Medium', question: 'Calculate 9.6 ÷ 1.2 + 3.5 × 2.8 − 2.5.', answer: '15.3', checkMode: 'auto', correctAnswer: '15.3', explanation: 'Division and multiplication first, left to right:\n9.6 ÷ 1.2 = 8\n3.5 × 2.8 = 9.8\nThen add and subtract left to right: 8 + 9.8 − 2.5 = 15.3 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate 18.9 ÷ 1.5 − 3.6 × 1.2.', answer: '8.28', checkMode: 'auto', correctAnswer: '8.28', explanation: 'Division: 18.9 ÷ 1.5 = 12.6\nMultiplication: 3.6 × 1.2 = 4.32\nSubtract: 12.6 − 4.32 = 8.28 ✓' },
        { difficulty: 'Hard', question: 'Calculate 18 − 5.4 ÷ 0.9 + 0.6 × 2.5.', answer: '13.5', checkMode: 'auto', correctAnswer: '13.5', explanation: 'Division: 5.4 ÷ 0.9 = 6\nMultiplication: 0.6 × 2.5 = 1.5\nWork left to right: 18 − 6 + 1.5 = 13.5 ✓' },

        // Block C — Squares & cubes in combined calculations (7-9)
        { difficulty: 'Medium', question: 'Calculate 0.5² + 0.6².', answer: '0.61', checkMode: 'auto', correctAnswer: '0.61', explanation: '0.5² = 0.25\n0.6² = 0.36\nAdd: 0.25 + 0.36 = 0.61 ✓' },
        { difficulty: 'Medium', question: 'Calculate 0.3³ × 100.', answer: '2.7', checkMode: 'auto', correctAnswer: '2.7', explanation: '0.3³ = 0.3 × 0.3 × 0.3 = 0.027\nMultiply: 0.027 × 100 = 2.7 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate (0.6 + 0.4)² − 0.3 × 0.2.', answer: '0.94', checkMode: 'auto', correctAnswer: '0.94', explanation: 'Brackets: 0.6 + 0.4 = 1\nSquare: 1² = 1\nMultiplication: 0.3 × 0.2 = 0.06\nSubtract: 1 − 0.06 = 0.94 ✓' },

        // Block D — Roots in combined calculations & error-checking (10-13)
        { difficulty: 'Medium', question: 'Calculate √0.49 + 0.3³.', answer: '0.727', checkMode: 'auto', correctAnswer: '0.727', explanation: '√0.49 = 0.7 (check: 0.7 × 0.7 = 0.49 ✓)\n0.3³ = 0.027\nAdd: 0.7 + 0.027 = 0.727 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate √1.69 − 0.6².', answer: '0.94', checkMode: 'auto', correctAnswer: '0.94', explanation: '√1.69 = 1.3 (check: 1.3 × 1.3 = 1.69 ✓)\n0.6² = 0.36\nSubtract: 1.3 − 0.36 = 0.94 ✓' },
        { difficulty: 'Hard', question: 'Calculate ∛0.064 + 0.8².', answer: '1.04', checkMode: 'auto', correctAnswer: '1.04', explanation: '∛0.064 = 0.4 (check: 0.4 × 0.4 × 0.4 = 0.064 ✓)\n0.8² = 0.64\nAdd: 0.4 + 0.64 = 1.04 ✓' },
        { difficulty: 'Hard', question: 'Thabo calculates 0.8² and ∛0.064 × 10, and claims both give the same answer. Is he correct? Show your working.', answer: 'No — 0.8² = 0.64 but ∛0.064 × 10 = 0.4 × 10 = 4, so these are NOT equal. He is incorrect.', checkMode: 'self' },

        // Block E — Multi-step real-life word problems (14-17)
        { difficulty: 'Medium', question: 'Zanele buys 2.6 kg of carrots at R26.50 per kg and 1.8 kg of spinach at R42.40 per kg. Find the total cost.', answer: 'R145.22', checkMode: 'auto', correctAnswer: 'R145.22', correctAnswers: ['R145.22', '145.22'], explanation: 'Carrots: 2.6 × R26.50 = R68.90\nSpinach: 1.8 × R42.40 = R76.32\nTotal: R68.90 + R76.32 = R145.22 ✓' },
        { difficulty: 'Medium', question: "Amahle's car uses 6.2 litres of fuel per 100 km. How many litres are needed for a 350 km trip?", answer: '21.7 litres', checkMode: 'auto', correctAnswer: '21.7', correctAnswers: ['21.7', '21.7 litres', '21.7litres', '21.7 l', '21.7l'], explanation: 'Rate per km: 6.2 ÷ 100 = 0.062 litres per km\nMultiply by distance: 0.062 × 350 = 21.7 litres ✓' },
        { difficulty: 'Medium-Hard', question: 'Sipho buys 3.6 kg of oranges at R18.40 per kg and pays with a R120 note. How much change does he receive?', answer: 'R53.76', checkMode: 'auto', correctAnswer: 'R53.76', correctAnswers: ['R53.76', '53.76'], explanation: 'Cost: 3.6 × R18.40 = R66.24\nChange: R120 − R66.24 = R53.76 ✓' },
        { difficulty: 'Hard', question: 'A household uses 195.5 kWh of electricity in a month, billed at R2.40 per kWh. Find the total electricity bill.', answer: 'R469.20', checkMode: 'auto', correctAnswer: 'R469.20', correctAnswers: ['R469.20', '469.20', 'R469.2', '469.2'], explanation: 'Total: 195.5 × R2.40 = R469.20 ✓' },

        // Block F — Rounding to a given number of decimal places & error-spotting (18-20)
        { difficulty: 'Medium-Hard', question: "Lerato's bakkie uses 7.5 litres per 100 km. Calculate the litres needed for a 340 km trip, correct to 2 decimal places.", answer: '25.50 litres', checkMode: 'auto', correctAnswer: '25.50', correctAnswers: ['25.50', '25.5', '25.50 litres', '25.5 litres', '25.50l', '25.5l'], explanation: 'Rate per km: 7.5 ÷ 100 = 0.075 litres per km\nMultiply: 0.075 × 340 = 25.5\nRounded to 2 decimal places: 25.50 litres ✓' },
        { difficulty: 'Hard', question: 'A prize of R35.60 is shared equally among 8 learners. Find each share, correct to 2 decimal places.', answer: 'R4.45', checkMode: 'auto', correctAnswer: 'R4.45', correctAnswers: ['R4.45', '4.45'], explanation: '35.60 ÷ 8 = 4.45\nAlready at 2 decimal places: R4.45 ✓' },
        { difficulty: 'Hard', question: 'A student calculates 0.6 ÷ 0.04 and writes the answer as 1.5. Explain the mistake and give the correct answer.', answer: 'The student divided incorrectly. The divisor 0.04 has 2 decimal places, so multiply both numbers by 100: 0.6 × 100 = 60 and 0.04 × 100 = 4. Then 60 ÷ 4 = 15, not 1.5.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered Grade 9 decimal fractions.' },
        { minScore: 14, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block A — BODMAS with brackets (1-3)
        { difficulty: 'Medium', question: 'Calculate (3.5 + 2.9) × 1.8.', answer: '11.52', checkMode: 'auto', correctAnswer: '11.52', explanation: 'Brackets first: 3.5 + 2.9 = 6.4\nMultiply: 6.4 × 1.8 = 11.52 ✓' },
        { difficulty: 'Medium', question: 'Calculate (7.6 − 2.4) ÷ 2.', answer: '2.6', checkMode: 'auto', correctAnswer: '2.6', explanation: 'Brackets first: 7.6 − 2.4 = 5.2\nDivide: 5.2 ÷ 2 = 2.6 ✓' },
        { difficulty: 'Medium-Hard', question: 'A carpenter scales a design using the expression (2.8 + 3.2) × 0.5. Evaluate this expression.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Brackets first: 2.8 + 3.2 = 6\nMultiply: 6 × 0.5 = 3 ✓' },

        // Block B — BODMAS without brackets, mixed operations (4-6)
        { difficulty: 'Medium', question: 'Calculate 6.4 ÷ 0.8 + 1.5 × 4.2 − 2.3.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Division and multiplication first, left to right:\n6.4 ÷ 0.8 = 8\n1.5 × 4.2 = 6.3\nThen add and subtract left to right: 8 + 6.3 − 2.3 = 12 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate 16.8 ÷ 1.2 − 3.5 × 2.5.', answer: '5.25', checkMode: 'auto', correctAnswer: '5.25', explanation: 'Division: 16.8 ÷ 1.2 = 14\nMultiplication: 3.5 × 2.5 = 8.75\nSubtract: 14 − 8.75 = 5.25 ✓' },
        { difficulty: 'Hard', question: 'Calculate 20 − 6.4 ÷ 0.8 + 0.9 × 3.5.', answer: '15.15', checkMode: 'auto', correctAnswer: '15.15', explanation: 'Division: 6.4 ÷ 0.8 = 8\nMultiplication: 0.9 × 3.5 = 3.15\nWork left to right: 20 − 8 + 3.15 = 15.15 ✓' },

        // Block C — Squares & cubes in combined calculations (7-9)
        { difficulty: 'Medium', question: 'Calculate 0.7² + 0.2².', answer: '0.53', checkMode: 'auto', correctAnswer: '0.53', explanation: '0.7² = 0.49\n0.2² = 0.04\nAdd: 0.49 + 0.04 = 0.53 ✓' },
        { difficulty: 'Medium', question: 'Calculate 0.5³ × 10.', answer: '1.25', checkMode: 'auto', correctAnswer: '1.25', explanation: '0.5³ = 0.5 × 0.5 × 0.5 = 0.125\nMultiply: 0.125 × 10 = 1.25 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate (0.4 + 0.6)² − 0.5 × 0.4.', answer: '0.8', checkMode: 'auto', correctAnswer: '0.8', explanation: 'Brackets: 0.4 + 0.6 = 1\nSquare: 1² = 1\nMultiplication: 0.5 × 0.4 = 0.2\nSubtract: 1 − 0.2 = 0.8 ✓' },

        // Block D — Roots in combined calculations & error-checking (10-13)
        { difficulty: 'Medium', question: 'Calculate √0.81 + 0.4³.', answer: '0.964', checkMode: 'auto', correctAnswer: '0.964', explanation: '√0.81 = 0.9 (check: 0.9 × 0.9 = 0.81 ✓)\n0.4³ = 0.064\nAdd: 0.9 + 0.064 = 0.964 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate √2.25 − 0.5².', answer: '1.25', checkMode: 'auto', correctAnswer: '1.25', explanation: '√2.25 = 1.5 (check: 1.5 × 1.5 = 2.25 ✓)\n0.5² = 0.25\nSubtract: 1.5 − 0.25 = 1.25 ✓' },
        { difficulty: 'Hard', question: 'Calculate ∛0.216 + 0.6².', answer: '0.96', checkMode: 'auto', correctAnswer: '0.96', explanation: '∛0.216 = 0.6 (check: 0.6 × 0.6 × 0.6 = 0.216 ✓)\n0.6² = 0.36\nAdd: 0.6 + 0.36 = 0.96 ✓' },
        { difficulty: 'Hard', question: 'Amahle calculates 0.6² and ∛0.216 × 10, and claims both give the same answer. Is she correct? Show your working.', answer: 'No — 0.6² = 0.36 but ∛0.216 × 10 = 0.6 × 10 = 6, so these are NOT equal. She is incorrect.', checkMode: 'self' },

        // Block E — Multi-step real-life word problems (14-17)
        { difficulty: 'Medium', question: 'Zinhle buys 4.5 kg of butternut at R19.80 per kg and 2.2 kg of tomatoes at R33.50 per kg. Find the total cost.', answer: 'R162.80', checkMode: 'auto', correctAnswer: 'R162.80', correctAnswers: ['R162.80', '162.80', 'R162.8', '162.8'], explanation: 'Butternut: 4.5 × R19.80 = R89.10\nTomatoes: 2.2 × R33.50 = R73.70\nTotal: R89.10 + R73.70 = R162.80 ✓' },
        { difficulty: 'Medium', question: "Thabo's bakkie uses 4.8 litres of fuel per 100 km. How many litres are needed for a 275 km trip?", answer: '13.2 litres', checkMode: 'auto', correctAnswer: '13.2', correctAnswers: ['13.2', '13.2 litres', '13.2litres', '13.2 l', '13.2l'], explanation: 'Rate per km: 4.8 ÷ 100 = 0.048 litres per km\nMultiply by distance: 0.048 × 275 = 13.2 litres ✓' },
        { difficulty: 'Medium-Hard', question: 'Lerato buys 5.2 kg of pears at R16.75 per kg and pays with a R140 note. How much change does she receive?', answer: 'R52.90', checkMode: 'auto', correctAnswer: 'R52.90', correctAnswers: ['R52.90', '52.90', 'R52.9', '52.9'], explanation: 'Cost: 5.2 × R16.75 = R87.10\nChange: R140 − R87.10 = R52.90 ✓' },
        { difficulty: 'Hard', question: 'A household uses 165.5 kWh of electricity in a month, billed at R2.60 per kWh. Find the total electricity bill.', answer: 'R430.30', checkMode: 'auto', correctAnswer: 'R430.30', correctAnswers: ['R430.30', '430.30', 'R430.3', '430.3'], explanation: 'Total: 165.5 × R2.60 = R430.30 ✓' },

        // Block F — Rounding to a given number of decimal places & error-spotting (18-20)
        { difficulty: 'Medium-Hard', question: "Sipho's car uses 8.4 litres per 100 km. Calculate the litres needed for a 225 km trip, correct to 2 decimal places.", answer: '18.90 litres', checkMode: 'auto', correctAnswer: '18.90', correctAnswers: ['18.90', '18.9', '18.90 litres', '18.9 litres', '18.90l', '18.9l'], explanation: 'Rate per km: 8.4 ÷ 100 = 0.084 litres per km\nMultiply: 0.084 × 225 = 18.9\nRounded to 2 decimal places: 18.90 litres ✓' },
        { difficulty: 'Hard', question: 'A prize of R48.30 is shared equally among 9 learners. Find each share, correct to 2 decimal places.', answer: 'R5.37', checkMode: 'auto', correctAnswer: 'R5.37', correctAnswers: ['R5.37', '5.37'], explanation: '48.30 ÷ 9 = 5.3666...\nRounded to 2 decimal places: R5.37 ✓' },
        { difficulty: 'Hard', question: 'A student calculates 0.9 ÷ 0.06 and writes the answer as 1.5. Explain the mistake and give the correct answer.', answer: 'The student divided incorrectly. The divisor 0.06 has 2 decimal places, so multiply both numbers by 100: 0.9 × 100 = 90 and 0.06 × 100 = 6. Then 90 ÷ 6 = 15, not 1.5.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered Grade 9 decimal fractions.' },
        { minScore: 14, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
