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

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Speed formula</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Speed = Distance ÷ Time')}. Rearrange to find distance (Speed × Time) or time (Distance ÷ Speed).</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Price per unit (better value)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Divide price by quantity to find the ${bl('unit price')}. Compare unit prices to see which option is the better buy.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Sharing an amount in a ratio</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Add the ratio parts to find the ${bl('total parts')}. Divide the amount by the total parts to find ${bl('one part')}, then multiply by each ratio number.</p>` +
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
        {
          question: 'A minibus taxi travels 180 km in 2.5 hours at a constant speed. Find its average speed.',
          answer: `${bl('Average speed = 72 km/h')}`,
          steps: [
            `Write the formula: ${bl('Speed = Distance ÷ Time')}.`,
            `Substitute the values: Speed = ${bl('180 km')} ÷ ${bl('2.5 h')}.`,
            `Calculate: 180 ÷ 2.5 = ${bl('72')}.`,
            `<strong>Answer:</strong> The average speed is ${bl('72 km/h')} ✓`,
          ],
        },
        {
          question: 'A shop sells rice in a 3 kg bag for R45 and a 5 kg bag for R70. Which bag gives the cheaper price per kilogram?',
          answer: `${bl('The 5 kg bag is cheaper')} (R14/kg vs R15/kg)`,
          steps: [
            `Find the ${bl('unit price')} of the 3 kg bag: R45 ÷ 3 = ${bl('R15 per kg')}.`,
            `Find the ${bl('unit price')} of the 5 kg bag: R70 ÷ 5 = ${bl('R14 per kg')}.`,
            `Compare: R14 per kg is less than R15 per kg, so the 5 kg bag is the better buy.`,
            `<strong>Answer:</strong> ${bl('The 5 kg bag')} gives the cheaper price per kilogram ✓`,
          ],
        },
        {
          question: 'Thabo, Lerato and Sipho share R840 in the ratio 3:4:5. Find each person\'s share.',
          answer: `Thabo = ${bl('R210')}, Lerato = ${bl('R280')}, Sipho = ${bl('R350')}`,
          steps: [
            `Find the ${bl('total parts')}: 3 + 4 + 5 = ${bl('12')}.`,
            `Find the value of ${bl('one part')}: R840 ÷ 12 = ${bl('R70')}.`,
            `Thabo's share = 3 × R70 = ${bl('R210')}. Lerato's share = 4 × R70 = ${bl('R280')}. Sipho's share = 5 × R70 = ${bl('R350')}.`,
            `<strong>Check:</strong> R210 + R280 + R350 = R840 ✓`,
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

        // ── Q16 Easy — speed calculation ───────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A car travels 240 km in 4 hours at a constant speed. Find its average speed.',
          answer: '60 km/h',
          checkMode: 'auto',
          correctAnswer: '60km/h',
          correctAnswers: ['60km/h', '60 km/h', '60'],
          explanation: 'Speed = Distance ÷ Time = 240 ÷ 4 = 60 km/h ✓',
        },

        // ── Q17 Medium — price per unit / better value ─────────────────────────
        {
          difficulty: 'Medium',
          question: 'A shop sells beans in a 2 kg packet for R38 and a 4.5 kg packet for R81. Which packet gives the cheaper price per kilogram?',
          answer: '4.5 kg packet',
          checkMode: 'auto',
          correctAnswer: '4.5 kg packet',
          correctAnswers: ['4.5 kg packet', 'the 4.5 kg packet', '4.5kg packet', '4.5 kg'],
          explanation: '2 kg packet: R38 ÷ 2 = R19 per kg. 4.5 kg packet: R81 ÷ 4.5 = R18 per kg. R18 is less than R19, so the 4.5 kg packet is the better buy ✓',
        },

        // ── Q18 Medium — sharing an amount in a 2-part ratio ────────────────────
        {
          difficulty: 'Medium',
          question: 'Share R560 between Palesa and Kagiso in the ratio 3:5. How much does each receive?',
          answer: 'Total parts = 3+5 = 8. One part = 560÷8 = R70. Palesa = 3×70 = R210. Kagiso = 5×70 = R350. Check: R210+R350 = R560.',
          checkMode: 'self',
        },

        // ── Q19 Hard — sharing an amount in a 3-part ratio ──────────────────────
        {
          difficulty: 'Hard',
          question: 'Naledi, Kagiso and Zanele share a business profit of R960 in the ratio 2:3:5. How much does each receive?',
          answer: 'Total parts = 2+3+5 = 10. One part = 960÷10 = R96. Naledi = 2×96 = R192. Kagiso = 3×96 = R288. Zanele = 5×96 = R480. Check: R192+R288+R480 = R960.',
          checkMode: 'self',
        },

        // ── Q20 Medium — sharing in a ratio (single share, auto-checked) ────────
        {
          difficulty: 'Medium',
          question: 'R750 is shared between Naledi and Zanele in the ratio 2:3. Find Zanele\'s share (the larger share).',
          answer: 'R450',
          checkMode: 'auto',
          correctAnswer: 'R450',
          correctAnswers: ['R450', '450'],
          explanation: 'Total parts = 2+3 = 5. One part = R750 ÷ 5 = R150. Zanele\'s share = 3 × R150 = R450 ✓',
        },

        // ── Q21 Hard — rate error correction ────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says a car that travels 150 km in 2.5 hours has a speed of 75 km/h. Is she correct? Explain.',
          answer: 'No — Speed = Distance ÷ Time = 150 ÷ 2.5 = 60 km/h, not 75 km/h. Lerato is incorrect.',
          checkMode: 'self',
        },

        // ── Q22 Medium — finding distance from speed and time ───────────────────
        {
          difficulty: 'Medium',
          question: 'A bus travels at a constant speed of 80 km/h for 3.5 hours. Find the distance travelled.',
          answer: '280 km',
          checkMode: 'auto',
          correctAnswer: '280km',
          correctAnswers: ['280km', '280 km', '280'],
          explanation: 'Distance = Speed × Time = 80 × 3.5 = 280 km ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video covering ratio rate proportion profit loss VAT calculating speed and price per unit and sharing an amount in a given ratio" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Summary diagram showing profit loss VAT ratio increase or decrease speed and sharing an amount in a ratio formulas with colour coded labels" />',
    },

  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered whole numbers.' },
    { minScore: 12, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1: Order of operations / BODMAS (Q1-4)
    // Block 2: Properties of operations (Q5-8)
    // Block 3: Error-spotting / critique (Q9-11)
    // Block 4: Multi-step word problems (Q12-15)
    // Block 5: Large-number multi-step calculations (Q16-18)
    // Block 6: Mixed / applied reasoning (Q19-20)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Order of operations / BODMAS
        { difficulty: 'Easy', question: 'Calculate: 8 + 6 × 5', answer: '38', checkMode: 'auto', correctAnswer: '38', explanation: 'Multiplication before addition: 6 × 5 = 30, then 8 + 30 = 38 ✓' },
        { difficulty: 'Easy', question: 'Calculate: (14 − 6) × 3 + 7', answer: '31', checkMode: 'auto', correctAnswer: '31', explanation: 'Brackets first: 14 − 6 = 8. Then multiply: 8 × 3 = 24. Then add: 24 + 7 = 31 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 40 − 24 ÷ 4 + 2 × 3', answer: '40', checkMode: 'auto', correctAnswer: '40', explanation: 'Division and multiplication first: 24 ÷ 4 = 6 and 2 × 3 = 6. Then work left to right: 40 − 6 + 6 = 34 + 6 = 40 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 3² + 4 × 5', answer: '29', checkMode: 'auto', correctAnswer: '29', explanation: 'Powers first: 3² = 9. Then multiplication: 4 × 5 = 20. Then add: 9 + 20 = 29 ✓' },

        // Block 2 — Properties of operations
        { difficulty: 'Easy', question: 'Use the distributive property to write 8 × (50 + 3) as two separate products, then calculate the answer.', answer: '(8×50)+(8×3) = 400+24 = 424', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Use the associative property to calculate (7 × 25) × 4 by regrouping to make the calculation easier. What is the answer?', answer: '700', checkMode: 'auto', correctAnswer: '700', explanation: 'Associative property lets us regroup: 7 × (25 × 4) = 7 × 100 = 700. Calculating the original way also gives (7 × 25) × 4 = 175 × 4 = 700 ✓' },
        { difficulty: 'Medium', question: 'Use the distributive property to calculate 12 × (20 − 3).', answer: '204', checkMode: 'auto', correctAnswer: '204', explanation: 'Distribute: 12 × (20 − 3) = (12 × 20) − (12 × 3) = 240 − 36 = 204 ✓' },
        { difficulty: 'Medium', question: 'Nomvula says 25 × (8 + 2) gives the same answer whether she calculates the brackets first or uses the distributive property. Show both methods and state the answer.', answer: 'Brackets first: 25×(8+2)=25×10=250. Distributive: (25×8)+(25×2)=200+50=250. Both give 250, so Nomvula is correct.', checkMode: 'self' },

        // Block 3 — Error-spotting / critique
        { difficulty: 'Medium', question: 'Zanele calculates 6 + 4 × 2 by working left to right and gets (6+4) × 2 = 20. What is the correct answer, and what did she do wrong?', answer: '14. She should have done multiplication before addition: 6+4×2 = 6+8 = 14, not added first.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Bongani calculates 30 − (10 − 4) by ignoring the brackets and writing 30 − 10 − 4 = 16. What is the correct answer?', answer: '24', checkMode: 'auto', correctAnswer: '24', explanation: 'Brackets must be evaluated first: 10 − 4 = 6, then 30 − 6 = 24. Bongani\'s method of removing the brackets is incorrect ✓' },
        { difficulty: 'Hard', question: 'Kagiso says 5 × (6 + 4) is the same as 5 × 6 + 4. Calculate both expressions and explain whether he is correct.', answer: '5×(6+4)=5×10=50. 5×6+4=30+4=34. They are not equal, so Kagiso is incorrect — the brackets change which numbers are multiplied.', checkMode: 'self' },

        // Block 4 — Multi-step word problems
        { difficulty: 'Easy', question: 'Thabo buys 4 packs of apples with 12 apples in each pack. He eats 9 apples. How many apples does he have left?', answer: '39', checkMode: 'auto', correctAnswer: '39', explanation: 'Total apples = 4 × 12 = 48. Apples left = 48 − 9 = 39 ✓' },
        { difficulty: 'Medium', question: 'A cinema sells 45 child tickets at R15 each and 12 adult tickets at R25 each. What is the total amount collected?', answer: 'R975', checkMode: 'auto', correctAnswer: 'R975', correctAnswers: ['R975', '975'], explanation: 'Child tickets: 45 × R15 = R675. Adult tickets: 12 × R25 = R300. Total = R675 + R300 = R975 ✓' },
        { difficulty: 'Medium', question: 'A stationery shop has 6 boxes of 24 pencils. The shop sells 38 pencils. How many pencils are left?', answer: '106', checkMode: 'auto', correctAnswer: '106', explanation: 'Total pencils = 6 × 24 = 144. Pencils left = 144 − 38 = 106 ✓' },
        { difficulty: 'Hard', question: 'A school hires 8 buses that each carry 54 learners, and 3 minibuses that each carry 29 learners, for a trip. How many learners can travel in total?', answer: '519', checkMode: 'auto', correctAnswer: '519', explanation: 'Buses: 8 × 54 = 432. Minibuses: 3 × 29 = 87. Total = 432 + 87 = 519 ✓' },

        // Block 5 — Large-number multi-step calculations
        { difficulty: 'Medium', question: 'A factory produces 4 500 items on Monday and Tuesday combined at the same daily rate, plus a separate batch of 3 200 items already in stock. If it produced 4 500 items per day for those two days, calculate: 3 200 + 4 500 × 2.', answer: '12200', checkMode: 'auto', correctAnswer: '12200', correctAnswers: ['12200', '12 200'], explanation: 'Multiplication first: 4 500 × 2 = 9 000. Then add: 3 200 + 9 000 = 12 200 ✓' },
        { difficulty: 'Hard', question: 'A farmer harvests 1 250 kg of maize per hectare from 8 hectares, then sells 3 600 kg at the local market. How many kilograms of maize remain?', answer: '6400', checkMode: 'auto', correctAnswer: '6400', correctAnswers: ['6400', '6 400'], explanation: 'Total harvested = 1 250 × 8 = 10 000 kg. Remaining = 10 000 − 3 600 = 6 400 kg ✓' },
        { difficulty: 'Hard', question: 'A municipality starts the year with 15 000 households connected to water. It connects an extra 2 400 households every year for the next 5 years. Calculate the total number of connected households after 5 years, and show your working using the correct order of operations.', answer: '15000+2400×5. Multiplication first: 2400×5=12000. Then add: 15000+12000=27000 households.', checkMode: 'self' },

        // Block 6 — Mixed / applied reasoning
        { difficulty: 'Medium', question: 'A learner says 6 × (3 + 2) gives the same result as 6 × 3 + 6 × 2. Calculate both sides and state whether this shows the distributive property is true here.', answer: '6×(3+2)=6×5=30. 6×3+6×2=18+12=30. Both equal 30, confirming the distributive property.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Calculate 3 × (120 − 45) + 18 using the correct order of operations, and show each step.', answer: '243', checkMode: 'auto', correctAnswer: '243', explanation: 'Brackets first: 120 − 45 = 75. Then multiply: 3 × 75 = 225. Then add: 225 + 18 = 243 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered order of operations and the properties of whole numbers.' },
        { minScore: 14, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 9, message: 'Good effort! Revisit BODMAS and the distributive property, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Order of operations / BODMAS
        { difficulty: 'Easy', question: 'Calculate: 9 + 7 × 4', answer: '37', checkMode: 'auto', correctAnswer: '37', explanation: 'Multiplication before addition: 7 × 4 = 28, then 9 + 28 = 37 ✓' },
        { difficulty: 'Easy', question: 'Calculate: (18 − 9) × 4 + 5', answer: '41', checkMode: 'auto', correctAnswer: '41', explanation: 'Brackets first: 18 − 9 = 9. Then multiply: 9 × 4 = 36. Then add: 36 + 5 = 41 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 50 − 36 ÷ 6 + 3 × 4', answer: '56', checkMode: 'auto', correctAnswer: '56', explanation: 'Division and multiplication first: 36 ÷ 6 = 6 and 3 × 4 = 12. Then work left to right: 50 − 6 + 12 = 44 + 12 = 56 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 4² + 5 × 6', answer: '46', checkMode: 'auto', correctAnswer: '46', explanation: 'Powers first: 4² = 16. Then multiplication: 5 × 6 = 30. Then add: 16 + 30 = 46 ✓' },

        // Block 2 — Properties of operations
        { difficulty: 'Easy', question: 'Use the distributive property to write 6 × (40 + 7) as two separate products, then calculate the answer.', answer: '(6×40)+(6×7) = 240+42 = 282', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Use the associative property to calculate (4 × 50) × 6 by regrouping to make the calculation easier. What is the answer?', answer: '1200', checkMode: 'auto', correctAnswer: '1200', correctAnswers: ['1200', '1 200'], explanation: 'Associative property lets us regroup: 4 × (50 × 6) = 4 × 300 = 1 200. Calculating the original way also gives (4 × 50) × 6 = 200 × 6 = 1 200 ✓' },
        { difficulty: 'Medium', question: 'Use the distributive property to calculate 15 × (30 − 2).', answer: '420', checkMode: 'auto', correctAnswer: '420', explanation: 'Distribute: 15 × (30 − 2) = (15 × 30) − (15 × 2) = 450 − 30 = 420 ✓' },
        { difficulty: 'Medium', question: 'Sipho says 30 × (6 + 4) gives the same answer whether he calculates the brackets first or uses the distributive property. Show both methods and state the answer.', answer: 'Brackets first: 30×(6+4)=30×10=300. Distributive: (30×6)+(30×4)=180+120=300. Both give 300, so Sipho is correct.', checkMode: 'self' },

        // Block 3 — Error-spotting / critique
        { difficulty: 'Medium', question: 'Amahle calculates 5 + 6 × 3 by working left to right and gets (5+6) × 3 = 33. What is the correct answer, and what did she do wrong?', answer: '23. She should have done multiplication before addition: 5+6×3 = 5+18 = 23, not added first.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Lindiwe calculates 50 − (12 − 7) by ignoring the brackets and writing 50 − 12 − 7 = 31. What is the correct answer?', answer: '45', checkMode: 'auto', correctAnswer: '45', explanation: 'Brackets must be evaluated first: 12 − 7 = 5, then 50 − 5 = 45. Lindiwe\'s method of removing the brackets is incorrect ✓' },
        { difficulty: 'Hard', question: 'Tumelo says 7 × (4 + 5) is the same as 7 × 4 + 5. Calculate both expressions and explain whether he is correct.', answer: '7×(4+5)=7×9=63. 7×4+5=28+5=33. They are not equal, so Tumelo is incorrect — the brackets change which numbers are multiplied.', checkMode: 'self' },

        // Block 4 — Multi-step word problems
        { difficulty: 'Easy', question: 'Lerato buys 5 packs of apples with 14 apples in each pack. She eats 11 apples. How many apples does she have left?', answer: '59', checkMode: 'auto', correctAnswer: '59', explanation: 'Total apples = 5 × 14 = 70. Apples left = 70 − 11 = 59 ✓' },
        { difficulty: 'Medium', question: 'A theatre sells 38 child tickets at R18 each and 15 adult tickets at R22 each. What is the total amount collected?', answer: 'R1014', checkMode: 'auto', correctAnswer: 'R1014', correctAnswers: ['R1014', '1014', 'R1 014', '1 014'], explanation: 'Child tickets: 38 × R18 = R684. Adult tickets: 15 × R22 = R330. Total = R684 + R330 = R1 014 ✓' },
        { difficulty: 'Medium', question: 'A stationery shop has 9 boxes of 18 pens. The shop sells 47 pens. How many pens are left?', answer: '115', checkMode: 'auto', correctAnswer: '115', explanation: 'Total pens = 9 × 18 = 162. Pens left = 162 − 47 = 115 ✓' },
        { difficulty: 'Hard', question: 'A school hires 6 buses that each carry 63 learners, and 4 minibuses that each carry 35 learners, for a trip. How many learners can travel in total?', answer: '518', checkMode: 'auto', correctAnswer: '518', explanation: 'Buses: 6 × 63 = 378. Minibuses: 4 × 35 = 140. Total = 378 + 140 = 518 ✓' },

        // Block 5 — Large-number multi-step calculations
        { difficulty: 'Medium', question: 'A warehouse already has 2 900 items in stock and receives 5 200 more items per delivery for 2 deliveries. Calculate: 2 900 + 5 200 × 2.', answer: '13300', checkMode: 'auto', correctAnswer: '13300', correctAnswers: ['13300', '13 300'], explanation: 'Multiplication first: 5 200 × 2 = 10 400. Then add: 2 900 + 10 400 = 13 300 ✓' },
        { difficulty: 'Hard', question: 'A farmer harvests 1 800 kg of maize per hectare from 6 hectares, then sells 4 200 kg at the local market. How many kilograms of maize remain?', answer: '6600', checkMode: 'auto', correctAnswer: '6600', correctAnswers: ['6600', '6 600'], explanation: 'Total harvested = 1 800 × 6 = 10 800 kg. Remaining = 10 800 − 4 200 = 6 600 kg ✓' },
        { difficulty: 'Hard', question: 'A municipality starts the year with 22 000 households connected to electricity. It connects an extra 3 100 households every year for the next 4 years. Calculate the total number of connected households after 4 years, and show your working using the correct order of operations.', answer: '22000+3100×4. Multiplication first: 3100×4=12400. Then add: 22000+12400=34400 households.', checkMode: 'self' },

        // Block 6 — Mixed / applied reasoning
        { difficulty: 'Medium', question: 'A learner says 8 × (5 + 3) gives the same result as 8 × 5 + 8 × 3. Calculate both sides and state whether this shows the distributive property is true here.', answer: '8×(5+3)=8×8=64. 8×5+8×3=40+24=64. Both equal 64, confirming the distributive property.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Calculate 4 × (85 − 29) + 25 using the correct order of operations, and show each step.', answer: '249', checkMode: 'auto', correctAnswer: '249', explanation: 'Brackets first: 85 − 29 = 56. Then multiply: 4 × 56 = 224. Then add: 224 + 25 = 249 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered order of operations and the properties of whole numbers.' },
        { minScore: 14, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 9, message: 'Good effort! Revisit BODMAS and the distributive property, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Order of operations / BODMAS
        { difficulty: 'Easy', question: 'Calculate: 7 + 9 × 6', answer: '61', checkMode: 'auto', correctAnswer: '61', explanation: 'Multiplication before addition: 9 × 6 = 54, then 7 + 54 = 61 ✓' },
        { difficulty: 'Easy', question: 'Calculate: (20 − 11) × 5 + 9', answer: '54', checkMode: 'auto', correctAnswer: '54', explanation: 'Brackets first: 20 − 11 = 9. Then multiply: 9 × 5 = 45. Then add: 45 + 9 = 54 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 60 − 45 ÷ 9 + 4 × 5', answer: '75', checkMode: 'auto', correctAnswer: '75', explanation: 'Division and multiplication first: 45 ÷ 9 = 5 and 4 × 5 = 20. Then work left to right: 60 − 5 + 20 = 55 + 20 = 75 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 5² + 6 × 4', answer: '49', checkMode: 'auto', correctAnswer: '49', explanation: 'Powers first: 5² = 25. Then multiplication: 6 × 4 = 24. Then add: 25 + 24 = 49 ✓' },

        // Block 2 — Properties of operations
        { difficulty: 'Easy', question: 'Use the distributive property to write 9 × (60 + 4) as two separate products, then calculate the answer.', answer: '(9×60)+(9×4) = 540+36 = 576', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Use the associative property to calculate (5 × 20) × 9 by regrouping to make the calculation easier. What is the answer?', answer: '900', checkMode: 'auto', correctAnswer: '900', explanation: 'Associative property lets us regroup: 5 × (20 × 9) = 5 × 180 = 900. Calculating the original way also gives (5 × 20) × 9 = 100 × 9 = 900 ✓' },
        { difficulty: 'Medium', question: 'Use the distributive property to calculate 18 × (40 − 3).', answer: '666', checkMode: 'auto', correctAnswer: '666', explanation: 'Distribute: 18 × (40 − 3) = (18 × 40) − (18 × 3) = 720 − 54 = 666 ✓' },
        { difficulty: 'Medium', question: 'Naledi says 40 × (5 + 3) gives the same answer whether she calculates the brackets first or uses the distributive property. Show both methods and state the answer.', answer: 'Brackets first: 40×(5+3)=40×8=320. Distributive: (40×5)+(40×3)=200+120=320. Both give 320, so Naledi is correct.', checkMode: 'self' },

        // Block 3 — Error-spotting / critique
        { difficulty: 'Medium', question: 'Palesa calculates 8 + 3 × 7 by working left to right and gets (8+3) × 7 = 77. What is the correct answer, and what did she do wrong?', answer: '29. She should have done multiplication before addition: 8+3×7 = 8+21 = 29, not added first.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Mpho calculates 45 − (15 − 6) by ignoring the brackets and writing 45 − 15 − 6 = 24. What is the correct answer?', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: 'Brackets must be evaluated first: 15 − 6 = 9, then 45 − 9 = 36. Mpho\'s method of removing the brackets is incorrect ✓' },
        { difficulty: 'Hard', question: 'Katlego says 9 × (3 + 6) is the same as 9 × 3 + 6. Calculate both expressions and explain whether he is correct.', answer: '9×(3+6)=9×9=81. 9×3+6=27+6=33. They are not equal, so Katlego is incorrect — the brackets change which numbers are multiplied.', checkMode: 'self' },

        // Block 4 — Multi-step word problems
        { difficulty: 'Easy', question: 'Zinhle buys 6 packs of apples with 15 apples in each pack. She eats 13 apples. How many apples does she have left?', answer: '77', checkMode: 'auto', correctAnswer: '77', explanation: 'Total apples = 6 × 15 = 90. Apples left = 90 − 13 = 77 ✓' },
        { difficulty: 'Medium', question: 'A cinema sells 52 child tickets at R12 each and 20 adult tickets at R17 each. What is the total amount collected?', answer: 'R964', checkMode: 'auto', correctAnswer: 'R964', correctAnswers: ['R964', '964'], explanation: 'Child tickets: 52 × R12 = R624. Adult tickets: 20 × R17 = R340. Total = R624 + R340 = R964 ✓' },
        { difficulty: 'Medium', question: 'A bookshop has 7 boxes of 32 books. The shop sells 56 books. How many books are left?', answer: '168', checkMode: 'auto', correctAnswer: '168', explanation: 'Total books = 7 × 32 = 224. Books left = 224 − 56 = 168 ✓' },
        { difficulty: 'Hard', question: 'A school hires 5 buses that each carry 84 learners, and 6 minibuses that each carry 41 learners, for a trip. How many learners can travel in total?', answer: '666', checkMode: 'auto', correctAnswer: '666', explanation: 'Buses: 5 × 84 = 420. Minibuses: 6 × 41 = 246. Total = 420 + 246 = 666 ✓' },

        // Block 5 — Large-number multi-step calculations
        { difficulty: 'Medium', question: 'A warehouse already has 4 100 items in stock and receives 3 700 more items per delivery for 2 deliveries. Calculate: 4 100 + 3 700 × 2.', answer: '11500', checkMode: 'auto', correctAnswer: '11500', correctAnswers: ['11500', '11 500'], explanation: 'Multiplication first: 3 700 × 2 = 7 400. Then add: 4 100 + 7 400 = 11 500 ✓' },
        { difficulty: 'Hard', question: 'A farmer harvests 2 100 kg of maize per hectare from 5 hectares, then sells 3 800 kg at the local market. How many kilograms of maize remain?', answer: '6700', checkMode: 'auto', correctAnswer: '6700', correctAnswers: ['6700', '6 700'], explanation: 'Total harvested = 2 100 × 5 = 10 500 kg. Remaining = 10 500 − 3 800 = 6 700 kg ✓' },
        { difficulty: 'Hard', question: 'A municipality starts the year with 18 500 households connected to water. It connects an extra 2 600 households every year for the next 6 years. Calculate the total number of connected households after 6 years, and show your working using the correct order of operations.', answer: '18500+2600×6. Multiplication first: 2600×6=15600. Then add: 18500+15600=34100 households.', checkMode: 'self' },

        // Block 6 — Mixed / applied reasoning
        { difficulty: 'Medium', question: 'A learner says 9 × (6 + 2) gives the same result as 9 × 6 + 9 × 2. Calculate both sides and state whether this shows the distributive property is true here.', answer: '9×(6+2)=9×8=72. 9×6+9×2=54+18=72. Both equal 72, confirming the distributive property.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Calculate 5 × (96 − 38) + 30 using the correct order of operations, and show each step.', answer: '320', checkMode: 'auto', correctAnswer: '320', explanation: 'Brackets first: 96 − 38 = 58. Then multiply: 5 × 58 = 290. Then add: 290 + 30 = 320 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered order of operations and the properties of whole numbers.' },
        { minScore: 14, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 9, message: 'Good effort! Revisit BODMAS and the distributive property, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
