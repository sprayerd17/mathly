import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (whole number roles) ─────────────────────────────────────
// properties / prime factors / ratio → blue   (#2563eb)
// calculations / HCF / profit        → green  (#16a34a)
// undefined results / loss           → red    (#dc2626)
// LCM / VAT                          → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Whole Numbers',
  grade: 8,
  // @ts-ignore — subject field extends base type for Grade 8 topics
  subject: 'Mathematics',
  sections: [

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — PROPERTIES OF WHOLE NUMBERS AND THE DIVISION PROPERTY OF ZERO
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-division-zero',
      title: 'Properties of Whole Numbers and the Division Property of Zero',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">We revise the <strong>commutative</strong>, <strong>associative</strong> and <strong>distributive</strong> properties of whole numbers. A new rule in Grade 8 is the <strong>division property of zero</strong> — any number divided by 0 is <strong>undefined</strong>, because there is no number that, multiplied by 0, gives a non-zero result.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('properties')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('calculations')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('undefined')}</span>` +
        `</div>` +

        // ── Three properties ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The three properties</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">C</span>` +
        `<div>` +
        `<p style="margin:0 0 4px;font-size:14px;"><strong style="color:#2563eb;">Commutative property</strong> — the order of numbers does not affect the result for addition and multiplication.</p>` +
        `<p style="margin:0;font-size:13px;color:#1e3a8a;">${gr('a + b = b + a')} &nbsp;&nbsp; ${gr('a × b = b × a')}</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">A</span>` +
        `<div>` +
        `<p style="margin:0 0 4px;font-size:14px;"><strong style="color:#2563eb;">Associative property</strong> — the grouping of numbers does not affect the result for addition and multiplication.</p>` +
        `<p style="margin:0;font-size:13px;color:#1e3a8a;">${gr('(a + b) + c = a + (b + c)')} &nbsp;&nbsp; ${gr('(a × b) × c = a × (b × c)')}</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">D</span>` +
        `<div>` +
        `<p style="margin:0 0 4px;font-size:14px;"><strong style="color:#2563eb;">Distributive property</strong> — multiplication distributes over addition and subtraction.</p>` +
        `<p style="margin:0;font-size:13px;color:#1e3a8a;">${gr('a(b + c) = ab + ac')} &nbsp;&nbsp; ${gr('a(b − c) = ab − ac')}</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Division property of zero ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Division property of zero</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">0 ÷ any number = 0</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Zero divided by any non-zero number is always ${gr('0')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">any number ÷ 0 = undefined</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Division by zero is ${re('undefined')} — no number multiplied by 0 can give a non-zero result.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Why is division by zero undefined?</p>` +
        `<p style="margin:0;color:#991b1b;">Ask yourself: what number × 0 = 12? There is no answer — anything multiplied by 0 is 0, never 12. Because we cannot find any answer, we say the result is ${re('undefined')}, not zero.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Use the distributive property to calculate 7(15 + 9).',
          answer: `${gr('7(15 + 9) = 168')}`,
          steps: [
            `Identify the ${bl('distributive property')}: ${bl('a(b + c) = ab + ac')}. Here a = 7, b = 15, c = 9.`,
            `${bl('Distribute:')} ${gr('(7 × 15) + (7 × 9)')}`,
            `${gr('Calculate each part:')} 7 × 15 = ${gr('105')} &nbsp; and &nbsp; 7 × 9 = ${gr('63')}`,
            `${gr('Add the parts:')} ${gr('105 + 63 = 168')}`,
            `<strong>Answer:</strong> ${gr('7(15 + 9) = 168')} ✓`,
          ],
        },
        {
          question: 'Sipho says 12 ÷ 0 = 0. Is he correct?',
          answer: `${re('No — 12 ÷ 0 is undefined')}`,
          steps: [
            `Sipho claims 12 ÷ 0 = 0. To check, use the ${bl('inverse operation')}: if 12 ÷ 0 = 0, then 0 × 0 must equal 12.`,
            `${re('But 0 × 0 = 0, not 12.')} There is no number that when multiplied by 0 gives 12.`,
            `Therefore 12 ÷ 0 is ${re('undefined')} — Sipho is ${re('incorrect')}.`,
            `<strong>Answer:</strong> ${re('No')} — division by 0 is always ${re('undefined')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — distributive property ──────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Use the distributive property to calculate 6(12+8).',
          answer: '120',
          checkMode: 'auto',
          correctAnswer: '120',
          explanation: 'Apply the distributive property: 6(12+8) = (6×12) + (6×8) = 72 + 48 = 120 ✓',
        },

        // ── Q2 Easy — division by zero ────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'What is 9÷0?',
          answer: 'undefined',
          checkMode: 'auto',
          correctAnswer: 'undefined',
          correctAnswers: ['undefined', 'Undefined'],
          explanation: 'Division by zero is undefined — no number multiplied by 0 gives 9. Therefore 9÷0 is undefined.',
        },

        // ── Q3 Medium — zero divided by a number ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho says 0÷5=5. Is he correct? Explain.',
          answer: 'No — 0 divided by any non-zero number is 0, not 5.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the commutative associative and distributive properties of whole numbers and the division property of zero" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual table showing all three properties with examples and the division by zero rule highlighted in red" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PRIME FACTORS, LCM AND HCF
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'prime-factors-lcm-hcf',
      title: 'Prime Factors, LCM and HCF',
      icon: '🧮',
      explanation:
        `<p style="margin-bottom:16px;">We revise finding <strong>prime factors</strong> of 3-digit whole numbers, and use <strong>prime factorisation</strong>, inspection, or factorisation methods to find the <strong>LCM</strong> (Lowest Common Multiple) and <strong>HCF</strong> (Highest Common Factor) of numbers up to 3 digits.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('prime factors')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('HCF')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('LCM')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Prime number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A number with exactly two factors: 1 and itself. Examples: 2, 3, 5, 7, 11, 13…</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Prime factorisation</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Writing a number as a product of its ${bl('prime factors')} using a factor tree or repeated division.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">HCF</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Highest Common Factor')} — use the ${bl('prime factors')} common to all numbers, each taken to its <em>lowest</em> power.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">LCM</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('Lowest Common Multiple')} — use all ${bl('prime factors')} that appear in any number, each taken to its <em>highest</em> power.</p>` +
        `</div>` +

        `</div>` +

        // ── Method reminder ──────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">HCF vs LCM — quick rule</p>` +
        `<p style="margin:0;color:#1e3a8a;">${gr('HCF')} → common factors, <em>lowest</em> exponents. &nbsp;|&nbsp; ${or('LCM')} → all factors, <em>highest</em> exponents.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the HCF of 120, 300 and 900 using prime factors.',
          answer: `${gr('HCF = 60')}`,
          steps: [
            `${bl('Factorise 120:')} 120 = 2 × 60 = 2 × 2 × 30 = 2 × 2 × 2 × 15 = 2 × 2 × 2 × 3 × 5 = ${bl('2³ × 3 × 5')}`,
            `${bl('Factorise 300:')} 300 = 2 × 150 = 2 × 2 × 75 = 2 × 2 × 3 × 25 = 2 × 2 × 3 × 5 × 5 = ${bl('2² × 3 × 5²')}`,
            `${bl('Factorise 900:')} 900 = 2 × 450 = 2 × 2 × 225 = 2 × 2 × 9 × 25 = 2 × 2 × 3 × 3 × 5 × 5 = ${bl('2² × 3² × 5²')}`,
            `${gr('Find common factors with lowest powers:')} 2 appears in all three — lowest power is ${gr('2²')}. 3 appears in all three — lowest power is ${gr('3¹')}. 5 appears in all three — lowest power is ${gr('5¹')}.`,
            `${gr('HCF')} = ${gr('2² × 3 × 5')} = ${gr('4 × 3 × 5')} = ${gr('60')}`,
            `<strong>Answer:</strong> ${gr('HCF(120, 300, 900) = 60')} ✓`,
          ],
        },
        {
          question: 'Find the LCM of 18 and 24.',
          answer: `${or('LCM = 72')}`,
          steps: [
            `${bl('Factorise 18:')} 18 = 2 × 9 = ${bl('2 × 3²')}`,
            `${bl('Factorise 24:')} 24 = 2 × 12 = 2 × 2 × 6 = 2 × 2 × 2 × 3 = ${bl('2³ × 3')}`,
            `${or('Find all factors with highest powers:')} 2 appears in both — highest power is ${or('2³')}. 3 appears in both — highest power is ${or('3²')}.`,
            `${or('LCM')} = ${or('2³ × 3²')} = ${or('8 × 9')} = ${or('72')}`,
            `<strong>Answer:</strong> ${or('LCM(18, 24) = 72')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Medium — HCF of two numbers ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the HCF of 144 and 180.',
          answer: '36',
          checkMode: 'auto',
          correctAnswer: '36',
          explanation: '144 = 2⁴ × 3². 180 = 2² × 3² × 5. Common factors with lowest powers: 2² × 3² = 4 × 9 = 36. HCF(144, 180) = 36 ✓',
        },

        // ── Q5 Medium — LCM of two numbers ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the LCM of 15 and 20.',
          answer: '60',
          checkMode: 'auto',
          correctAnswer: '60',
          explanation: '15 = 3 × 5. 20 = 2² × 5. LCM uses all factors with highest powers: 2² × 3 × 5 = 4 × 3 × 5 = 60. LCM(15, 20) = 60 ✓',
        },

        // ── Q6 Hard — HCF of three numbers using prime factorisation ──────────
        {
          difficulty: 'Hard',
          question: 'Find the HCF of 90, 150 and 210 using prime factorisation.',
          answer: '90=2×3²×5. 150=2×3×5². 210=2×3×5×7. Common factors with lowest powers: 2×3×5=30.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing prime factorisation using a factor tree and how to find HCF and LCM from prime factors" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Factor tree for 120 300 and 900 with HCF highlighted in green and LCM highlighted in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — RATIO, RATE AND PROPORTION IN FINANCIAL CONTEXTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ratio-rate-proportion-financial',
      title: 'Ratio, Rate and Proportion in Financial Contexts',
      icon: '💰',
      explanation:
        `<p style="margin-bottom:16px;">We solve problems involving <strong>ratio</strong> (comparing quantities of the same kind), <strong>rate</strong> (comparing different kinds of quantities, often speed, distance or time), and increasing or decreasing a number in a given ratio. We also apply whole numbers, percentages and decimals to financial contexts including profit, loss, discount, VAT, budgets, loans, simple interest, hire purchase and exchange rates.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('profit')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('loss')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('VAT')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('ratio')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Ratio</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Compares quantities of the <em>same</em> kind. Written as ${bl('a : b')} or as a fraction. Always simplify by dividing by the HCF.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Rate</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Compares quantities of <em>different</em> kinds. Common examples: km/h, R/kg, litres/hour.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Profit</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Profit = selling price − cost price')}. Percentage profit = profit ÷ cost price × 100.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Loss</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('Loss = cost price − selling price')}. A loss occurs when the selling price is less than the cost price.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">VAT</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('VAT = rate × price excl. VAT')}. In South Africa VAT is 15%. Total price = price + VAT.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Increase/decrease in a ratio</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">To increase in ratio ${bl('a : b')}: new = original ÷ b × a. To decrease: new = original ÷ a × b.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Increase vs decrease in a ratio</p>` +
        `<p style="margin:0;color:#1e3a8a;">When a number is increased in ratio ${bl('a : b')} (a &gt; b), divide by the smaller part and multiply by the larger part. When decreased (a &lt; b), divide by the larger and multiply by the smaller.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A shop buys a jacket for R200 and sells it for R260. Find the profit and the percentage profit.',
          answer: `${gr('Profit = R60')}; ${gr('Percentage profit = 30%')}`,
          steps: [
            `${gr('Profit')} = selling price − cost price = ${gr('R260 − R200')} = ${gr('R60')}`,
            `Percentage profit = profit ÷ cost price × 100 = ${gr('60 ÷ 200 × 100')}`,
            `= ${gr('0.30 × 100')} = ${gr('30%')}`,
            `<strong>Answer:</strong> ${gr('Profit = R60')} and ${gr('percentage profit = 30%')} ✓`,
          ],
        },
        {
          question: 'An item costs R150 excluding 15% VAT. Find the price including VAT.',
          answer: `${or('Total price = R172.50')}`,
          steps: [
            `${or('VAT amount')} = ${or('VAT rate × price excl. VAT')} = ${or('0.15 × R150')} = ${or('R22.50')}`,
            `Total price = price excl. VAT + VAT = R150 + ${or('R22.50')} = ${or('R172.50')}`,
            `<strong>Answer:</strong> ${or('R172.50')} ✓`,
          ],
        },
        {
          question: 'Lerato increases R480 in the ratio 5 : 4. Find the new amount.',
          answer: `${bl('New amount = R600')}`,
          steps: [
            `The ${bl('ratio 5 : 4')} means we increase from 4 parts to 5 parts (the new value is larger).`,
            `New amount = original ÷ smaller part × larger part = R480 ÷ ${bl('4')} × ${bl('5')}`,
            `= ${gr('R120')} × ${bl('5')} = ${bl('R600')}`,
            `<strong>Answer:</strong> ${bl('R600')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — profit ──────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A shop buys an item for R80 and sells it for R100. Find the profit.',
          answer: 'R20',
          checkMode: 'auto',
          correctAnswer: 'R20',
          correctAnswers: ['R20', '20'],
          explanation: 'Profit = selling price − cost price = R100 − R80 = R20 ✓',
        },

        // ── Q8 Medium — percentage profit ────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the percentage profit on the item in Q7.',
          answer: '25%',
          checkMode: 'auto',
          correctAnswer: '25%',
          correctAnswers: ['25%', '25'],
          explanation: 'Percentage profit = profit ÷ cost price × 100 = R20 ÷ R80 × 100 = 0.25 × 100 = 25% ✓',
        },

        // ── Q9 Medium — price including VAT ──────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'An item costs R200 excluding 15% VAT. Find the price including VAT.',
          answer: 'R230',
          checkMode: 'auto',
          correctAnswer: 'R230',
          correctAnswers: ['R230', '230'],
          explanation: 'VAT = 15% × R200 = 0.15 × R200 = R30. Price including VAT = R200 + R30 = R230 ✓',
        },

        // ── Q10 Hard — decreasing in a ratio (error correction) ───────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says decreasing R600 in the ratio 3:2 gives R900. Is she correct? Explain.',
          answer: 'No — decreasing means the new amount should be smaller. 600÷3×2=400, not 900.',
          checkMode: 'self',
        },

        // ── Q11 Medium — simple interest ──────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A loan of R5000 has simple interest of 8% per year. Find the interest after 2 years.',
          answer: 'R800',
          checkMode: 'auto',
          correctAnswer: 'R800',
          correctAnswers: ['R800', '800'],
          explanation: 'Simple interest = P × r × t = R5 000 × 0.08 × 2 = R800 ✓',
        },

        // ── Q12 Hard — hire purchase ──────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo buys furniture through hire purchase, paying a deposit of R500 and 12 instalments of R350. Find the total amount paid.',
          answer: 'R4700',
          checkMode: 'auto',
          correctAnswer: 'R4700',
          correctAnswers: ['R4700', '4700'],
          explanation: 'Total = deposit + (number of instalments × monthly payment) = R500 + (12 × R350) = R500 + R4 200 = R4 700 ✓',
        },

        // ── Q13 Easy — increasing in a ratio ─────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Amahle increases R240 in the ratio 5:3. Find the new amount.',
          answer: 'R400',
          checkMode: 'auto',
          correctAnswer: 'R400',
          correctAnswers: ['R400', '400'],
          explanation: 'Increase in ratio 5:3 means divide by 3 and multiply by 5. R240 ÷ 3 × 5 = R80 × 5 = R400 ✓',
        },

        // ── Q14 Hard — discount then VAT ─────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A store offers a discount of 20% on a R650 item, then adds 15% VAT to the discounted price. Find the final price.',
          answer: 'Discount amount=0.2×650=R130. Discounted price=650-130=R520. VAT=0.15×520=R78. Final price=520+78=R598.',
          checkMode: 'self',
        },

        // ── Q15 Hard — exchange rate ──────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho exchanges R3000 for US dollars at an exchange rate of R18.50 per dollar. How many dollars does he receive, rounded to the nearest dollar?',
          answer: '162',
          checkMode: 'auto',
          correctAnswer: '162',
          explanation: 'Dollars = R3 000 ÷ R18.50 = 162.16... ≈ 162 (rounded to the nearest dollar) ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video covering ratio rate proportion profit loss VAT and increasing or decreasing a quantity in a given ratio" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Summary diagram showing profit loss VAT and ratio increase or decrease formulas with colour coded labels" />',
    },

  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered whole numbers.' },
    { minScore: 12, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
