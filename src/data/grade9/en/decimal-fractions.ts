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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Step-by-step BODMAS diagram showing the order of operations applied to a combined decimal fraction calculation" />',
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
        '<DiagramPlaceholder label="Diagram showing squares, cubes and roots of common decimal fractions with worked examples integrated into combined calculations" />',
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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Worked problem diagram showing the 3-step strategy applied to a real-life decimal fractions word problem involving money" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered decimal fractions.' },
    { minScore: 11, message: 'Great work! Review any missed questions and you will have it perfect.' },
    { minScore: 8, message: 'Good effort — review the worked examples and try again.' },
    { minScore: 0, message: 'Keep going — work through the study guide again, section by section, then try again.' },
  ],
}
