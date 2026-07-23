import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (finance roles) ───────────────────────────────────────────
// principal P    → blue   (#2563eb)
// rate i         → orange (#ea580c)
// time n         → green  (#16a34a)
// final amount A → red    (#dc2626)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
// deposit (hire purchase only) → purple (#7c3aed)
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Finance, Growth and Decay',
  grade: 10,
  sections: [

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SIMPLE GROWTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simple-growth',
      title: 'Simple Growth — A = P(1 + ni)',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">Simple growth (also called <strong>simple interest</strong>) calculates interest only on the original ${bl('principal')} — it never includes previously earned interest. The same rand amount is added every period, so the total grows in a straight line. The formula is ${re('A')} = ${bl('P')}(1 + ${gr('n')} × ${or('i')}), used in simple loans, basic savings, and hire purchase agreements.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('principal P')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rate i')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('time n')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('final amount A')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The simple growth formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.5em;font-weight:700;color:#374151;margin:0 0 8px 0;">${re('A')} = ${bl('P')}(1 + ${gr('n')} × ${or('i')})</p>` +
        `<p style="font-size:0.9em;color:#6b7280;margin:0;">where ${or('i')} is written as a decimal — e.g. 6% → ${or('0.06')}</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">A — Final Amount</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The total value at the end of the investment or loan.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">P — Principal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The original amount invested or borrowed.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">n — Time Periods</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Number of periods (usually years) the money grows for.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">i — Interest Rate</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Annual rate as a decimal. Convert: 6% ÷ 100 = 0.06.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Where simple interest is used</p>` +
        `<p style="margin:0;color:#1e3a8a;">Simple interest is used in <strong>simple loans</strong>, <strong>hire purchase</strong> (buying goods on credit), and some <strong>basic savings accounts</strong>. Because the same fixed amount is added each period, the growth is <em>linear</em> — it forms a straight line on a graph.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato invests R8 000 at 6% simple interest per year for 5 years. Find the final amount.',
          answer: `${re('A')} = ${re('R10 400')}`,
          steps: [
            `Write the formula: ${re('A')} = ${bl('P')}(1 + ${gr('n')} × ${or('i')})`,
            `Substitute the values — ${bl('P')} = R8 000, ${gr('n')} = 5, ${or('i')} = 0.06:<br>${re('A')} = ${bl('8 000')}(1 + ${gr('5')} × ${or('0.06')})`,
            `Calculate the bracket: ${gr('5')} × ${or('0.06')} = 0.30, so (1 + 0.30) = 1.30`,
            `Multiply: ${re('A')} = ${bl('8 000')} × 1.30 = <strong>R10 400</strong> ✓`,
          ],
        },
        {
          question: 'Sipho buys furniture worth R12 000 on hire purchase at 15% simple interest over 3 years. Find his total repayment.',
          answer: `${re('A')} = ${re('R17 400')}`,
          steps: [
            `Write the formula: ${re('A')} = ${bl('P')}(1 + ${gr('n')} × ${or('i')})`,
            `Substitute: ${bl('P')} = R12 000, ${gr('n')} = 3, ${or('i')} = 0.15 (15% ÷ 100):<br>${re('A')} = ${bl('12 000')}(1 + ${gr('3')} × ${or('0.15')})`,
            `Calculate the bracket: ${gr('3')} × ${or('0.15')} = 0.45, so (1 + 0.45) = 1.45`,
            `Multiply: ${re('A')} = ${bl('12 000')} × 1.45 = <strong>R17 400</strong>`,
            `<strong>Answer:</strong> Sipho's total repayment is R17 400. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Zanele invests R4 000 at 8% simple interest per year for 2 years. Calculate the final amount.',
          answer: 'R4 640',
          checkMode: 'auto',
          correctAnswer: 'R4640',
          correctAnswers: ['R4640', '4640', 'R4 640', '4 640'],
          explanation: 'A = P(1 + ni)\nA = 4 000(1 + 2 × 0.08)\nA = 4 000(1 + 0.16)\nA = 4 000 × 1.16\nA = R4 640 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Thandi takes out a loan of R15 000 at 10% simple interest per year for 3 years.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the total amount owed after 3 years.',
              correctAnswer: 'R19500',
              correctAnswers: ['R19500', '19500', 'R19 500', '19 500'],
              explanation: 'A = 15 000(1 + 3 × 0.10) = 15 000(1.30) = R19 500 ✓',
            },
            {
              label: 'b) Find the total interest paid.',
              correctAnswer: 'R4500',
              correctAnswers: ['R4500', '4500', 'R4 500', '4 500'],
              explanation: 'Interest = A − P = R19 500 − R15 000 = R4 500 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'After 4 years of simple interest at 6% per year, an investment has grown to R12 400. Find the original principal.',
          answer: 'R10 000',
          checkMode: 'auto',
          correctAnswer: 'R10000',
          correctAnswers: ['R10000', '10000', 'R10 000', '10 000'],
          explanation: 'A = P(1 + ni)\n12 400 = P(1 + 4 × 0.06)\n12 400 = P(1.24)\nP = 12 400 ÷ 1.24\nP = R10 000 ✓',
        },
      ],

      videoPlaceholder:
        'Short video explaining simple interest formula A=P(1+ni) with colour coded worked examples showing hire purchase and savings contexts',

      diagramPlaceholder:
        'Linear graph of A against n for simple interest showing constant straight-line growth, with the same amount added every year',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="145" x2="205" y2="145" stroke="#374151" stroke-width="1.5"/><polygon points="205,145 197,141 197,149" fill="#374151"/><line x1="30" y1="145" x2="30" y2="15" stroke="#374151" stroke-width="1.5"/><polygon points="30,15 26,23 34,23" fill="#374151"/><text x="208" y="149" font-size="11" fill="#16a34a" font-weight="700">n</text><text x="22" y="13" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">A</text><line x1="30" y1="145" x2="190" y2="40" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="145" r="4" fill="#2563eb"/><text x="20" y="138" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">P</text><circle cx="70" cy="119.75" r="3" fill="#ea580c"/><circle cx="110" cy="92.5" r="3" fill="#ea580c"/><circle cx="150" cy="65.25" r="3" fill="#ea580c"/><line x1="70" y1="119.75" x2="110" y2="119.75" stroke="#16a34a" stroke-width="1.3" stroke-dasharray="3,2"/><line x1="110" y1="119.75" x2="110" y2="92.5" stroke="#16a34a" stroke-width="1.3" stroke-dasharray="3,2"/><line x1="110" y1="92.5" x2="150" y2="92.5" stroke="#16a34a" stroke-width="1.3" stroke-dasharray="3,2"/><line x1="150" y1="92.5" x2="150" y2="65.25" stroke="#16a34a" stroke-width="1.3" stroke-dasharray="3,2"/><text x="90" y="130" font-size="8" fill="#16a34a" font-weight="700" text-anchor="middle">Δn</text><text x="130" y="103" font-size="8" fill="#16a34a" font-weight="700" text-anchor="middle">Δn</text><circle cx="190" cy="40" r="4" fill="#dc2626"/><text x="196" y="36" font-size="11" fill="#dc2626" font-weight="700">A</text><text x="115" y="163" font-size="9" fill="#374151" text-anchor="middle">equal amount added every year → straight line</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPOUND GROWTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'compound-growth',
      title: 'Compound Growth — A = P(1 + i)ⁿ',
      icon: '↑',
      explanation:
        `<p style="margin-bottom:16px;">Compound growth calculates interest on the ${bl('principal')} <em>plus</em> any previously earned interest — the amount grows on itself each period. This causes exponential (curved) growth rather than the linear growth of simple interest. The formula is ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup style="font-weight:700;color:#16a34a;">n</sup>, used in savings accounts, population growth, and inflation calculations.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('principal P')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('interest rate i')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('growth over time n')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The compound growth formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.5em;font-weight:700;color:#374151;margin:0 0 8px 0;">${re('A')} = ${bl('P')}(1 + ${or('i')})<sup style="font-weight:700;color:#16a34a;">n</sup></p>` +
        `<p style="font-size:0.9em;color:#6b7280;margin:0;">where ${or('i')} is a decimal and ${gr('n')} is the exponent (power)</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Simple vs Compound interest compared</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Simple Interest</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Interest is calculated only on the original ${bl('principal')} each period.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Growth is <strong>linear</strong> — the same amount is added every year.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Compound Interest</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Interest is calculated on the ${bl('principal')} PLUS all previously earned interest.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Growth is <strong>exponential</strong> — more is added each year than the year before.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Compound interest grows faster over time</p>` +
        `<p style="margin:0;color:#1e3a8a;">The longer the investment period, the bigger the gap between simple and compound interest. Over short periods (1–2 years) the difference is small; over long periods (10+ years), compound interest produces significantly more — this is called the <strong>power of compounding</strong>.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo invests R5 000 at 8% compound interest per year for 4 years. Find the final amount.',
          answer: `${re('A')} ≈ ${re('R6 802.44')}`,
          steps: [
            `Write the formula: ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup>n</sup>`,
            `Substitute: ${bl('P')} = R5 000, ${or('i')} = 0.08, ${gr('n')} = 4:<br>${re('A')} = ${bl('5 000')}(1 + ${or('0.08')})<sup style="color:#16a34a;font-weight:700;">4</sup>`,
            `Simplify the bracket: (1 + ${or('0.08')}) = 1.08`,
            `Calculate the power: (1.08)<sup style="color:#16a34a;font-weight:700;">4</sup> ≈ 1.36049`,
            `Multiply: ${re('A')} = ${bl('5 000')} × 1.36049 ≈ <strong>R6 802.44</strong> ✓`,
          ],
        },
        {
          question: "A town's population of 25 000 grows at 3% per year. Find the population after 10 years (rounded to the nearest whole number).",
          answer: `Population ≈ ${re('33 598')}`,
          steps: [
            `Write the formula: ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup>n</sup>`,
            `Substitute: ${bl('P')} = 25 000, ${or('i')} = 0.03, ${gr('n')} = 10:<br>${re('A')} = ${bl('25 000')}(1.03)<sup style="color:#16a34a;font-weight:700;">10</sup>`,
            `Calculate: (1.03)<sup style="color:#16a34a;font-weight:700;">10</sup> ≈ 1.34392`,
            `Multiply: ${re('A')} = ${bl('25 000')} × 1.34392 ≈ 33 598`,
            `<strong>Answer:</strong> The population after 10 years is approximately ${re('33 598')} people. ✓`,
          ],
        },
        {
          question: 'Amahle compares simple and compound interest on R10 000 at 7% over 6 years. Find the difference.',
          answer: `Difference ≈ ${re('R807.30')} in favour of compound interest`,
          steps: [
            `<strong>Simple interest:</strong> ${re('A')} = ${bl('10 000')}(1 + ${gr('6')} × ${or('0.07')}) = 10 000(1.42) = <strong>R14 200</strong>`,
            `<strong>Compound interest:</strong> ${re('A')} = ${bl('10 000')}(1.07)<sup style="color:#16a34a;font-weight:700;">6</sup>`,
            `Calculate: (1.07)<sup style="color:#16a34a;font-weight:700;">6</sup> ≈ 1.50073`,
            `Compound amount: ${re('A')} = ${bl('10 000')} × 1.50073 ≈ <strong>R15 007.30</strong>`,
            `<strong>Difference:</strong> R15 007.30 − R14 200 ≈ ${re('R807.30')} more with compound interest ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Lebo invests R3 000 at 5% compound interest per year for 3 years. Calculate the final amount (round to 2 decimal places).',
          answer: 'R3 472.88',
          checkMode: 'auto',
          correctAnswer: 'R3472.88',
          correctAnswers: ['R3472.88', '3472.88', 'R3 472.88', '3 472.88'],
          explanation: 'A = 3 000(1.05)³\n(1.05)³ = 1.157625\nA = 3 000 × 1.157625 = R3 472.88 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Nomsa invests R8 000 at 7% per year for 5 years.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the final amount using simple interest.',
              correctAnswer: 'R10800',
              correctAnswers: ['R10800', '10800', 'R10 800', '10 800'],
              explanation: 'A = 8 000(1 + 5 × 0.07) = 8 000(1.35) = R10 800 ✓',
            },
            {
              label: 'b) Find the final amount using compound interest (round to 2 decimal places).',
              correctAnswer: 'R11220.40',
              correctAnswers: ['R11220.40', '11220.40', 'R11 220.40', '11 220.40', 'R11220.39', '11220.39'],
              explanation: 'A = 8 000(1.07)⁵\n(1.07)⁵ ≈ 1.40255\nA ≈ 8 000 × 1.40255 ≈ R11 220.40 ✓',
            },
            {
              label: 'c) How much more does compound interest earn?',
              correctAnswer: 'R420.40',
              correctAnswers: ['R420.40', '420.40', 'R420', '420', 'R420.39', '420.39'],
              explanation: 'Difference: R11 220.40 − R10 800 = R420.40 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: "A city's population of 150 000 grows at 4% compound growth per year.",
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the population after 5 years (round to the nearest whole number).',
              correctAnswer: '182497',
              correctAnswers: ['182497', '182 497'],
              explanation: 'A = 150 000(1.04)⁵\n(1.04)⁵ ≈ 1.21665\nA ≈ 150 000 × 1.21665 ≈ 182 497 ✓',
            },
            {
              label: 'b) Find the population after 10 years (round to the nearest whole number).',
              correctAnswer: '222036',
              correctAnswers: ['222036', '222 036'],
              explanation: 'A = 150 000(1.04)¹⁰\n(1.04)¹⁰ ≈ 1.48024\nA ≈ 150 000 × 1.48024 ≈ 222 036 ✓',
            },
            {
              label: 'c) By how many people does the population increase between year 5 and year 10?',
              correctAnswer: '39539',
              correctAnswers: ['39539', '39 539', '39540', '39 540'],
              explanation: '222 036 − 182 497 = 39 539 people ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Short video explaining compound interest formula A=P(1+i)^n with colour coded examples showing savings and population growth and comparison with simple interest',

      diagramPlaceholder:
        'Exponential growth curve comparing simple and compound interest over time on the same axes, showing compound interest overtaking simple interest',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="145" x2="205" y2="145" stroke="#374151" stroke-width="1.5"/><polygon points="205,145 197,141 197,149" fill="#374151"/><line x1="30" y1="145" x2="30" y2="15" stroke="#374151" stroke-width="1.5"/><polygon points="30,15 26,23 34,23" fill="#374151"/><text x="208" y="149" font-size="11" fill="#16a34a" font-weight="700">n</text><text x="22" y="13" font-size="11" fill="#374151" font-weight="700" text-anchor="middle">A</text><circle cx="30" cy="145" r="4" fill="#2563eb"/><text x="20" y="138" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">P</text><line x1="30" y1="145" x2="190" y2="72" stroke="#2563eb" stroke-width="2.2"/><text x="150" y="85" font-size="10" fill="#2563eb" font-weight="700">simple</text><path d="M30,145 C90,142 150,108 190,26" fill="none" stroke="#dc2626" stroke-width="2.5"/><text x="128" y="42" font-size="10" fill="#dc2626" font-weight="700">compound</text><text x="115" y="163" font-size="9" fill="#374151" text-anchor="middle">compound interest overtakes simple interest over time</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SIMPLE AND COMPOUND DECAY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simple-and-compound-decay',
      title: 'Simple and Compound Decay — A = P(1 − ni) and A = P(1 − i)ⁿ',
      icon: '↓',
      explanation:
        `<p style="margin-bottom:16px;">Decay describes an amount that <em>decreases</em> over time — most often the depreciation (loss of value) of an asset such as a car, machine, or piece of equipment. Just like growth, decay comes in two forms: <strong>simple decay</strong>, where the same rand amount is subtracted from the ${bl('principal')} every period, and <strong>compound decay</strong>, where a percentage of the <em>current</em> (already-reduced) value is subtracted every period. The formulas are ${re('A')} = ${bl('P')}(1 − ${gr('n')} × ${or('i')}) for simple decay and ${re('A')} = ${bl('P')}(1 − ${or('i')})<sup style="font-weight:700;color:#16a34a;">n</sup> for compound decay — mirror images of simple and compound growth, but with a minus sign.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('principal P')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rate i')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('time n')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('final amount A')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The simple decay formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.5em;font-weight:700;color:#374151;margin:0 0 8px 0;">${re('A')} = ${bl('P')}(1 − ${gr('n')} × ${or('i')})</p>` +
        `<p style="font-size:0.9em;color:#6b7280;margin:0;">the same amount is subtracted every period — used for straight-line (book value) depreciation</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The compound decay formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.5em;font-weight:700;color:#374151;margin:0 0 8px 0;">${re('A')} = ${bl('P')}(1 − ${or('i')})<sup style="font-weight:700;color:#16a34a;">n</sup></p>` +
        `<p style="font-size:0.9em;color:#6b7280;margin:0;">a percentage of the current value is subtracted every period — used for reducing-balance (resale/market value) depreciation</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Simple vs Compound decay compared</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Simple Decay</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">The same rand amount is subtracted every period, based on the original ${bl('principal')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Value decreases in a <strong>straight line</strong> — commonly used for book value (tax) depreciation.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Compound Decay</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">A percentage of the ${bl('current')} (already-reduced) value is subtracted every period.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Value decreases <strong>exponentially</strong> — the rand amount lost shrinks each year as the value shrinks.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Compound decay is more realistic</p>` +
        `<p style="margin:0;color:#1e3a8a;">Most assets — cars, machinery, electronics — actually lose value the way <strong>compound decay</strong> describes: a percentage of whatever the item is currently worth. This means the rand value lost shrinks year after year, matching how second-hand prices really behave. <strong>Simple decay</strong> is mainly used for accounting purposes, where a business needs a predictable, straight-line book value for tax calculations.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A delivery vehicle valued at R280 000 depreciates using simple decay at 15% per year. Find its value after 4 years.',
          answer: `${re('A')} = ${re('R112 000')}`,
          steps: [
            `Write the formula: ${re('A')} = ${bl('P')}(1 − ${gr('n')} × ${or('i')})`,
            `Substitute the values — ${bl('P')} = R280 000, ${gr('n')} = 4, ${or('i')} = 0.15:<br>${re('A')} = ${bl('280 000')}(1 − ${gr('4')} × ${or('0.15')})`,
            `Calculate the bracket: ${gr('4')} × ${or('0.15')} = 0.60, so (1 − 0.60) = 0.40`,
            `Multiply: ${re('A')} = ${bl('280 000')} × 0.40 = <strong>R112 000</strong> ✓`,
          ],
        },
        {
          question: 'A car valued at R320 000 depreciates using compound decay at 12% per year. Find its value after 5 years (round to the nearest Rand).',
          answer: `${re('A')} ≈ ${re('R168 874')}`,
          steps: [
            `Write the formula: ${re('A')} = ${bl('P')}(1 − ${or('i')})<sup>n</sup>`,
            `Substitute: ${bl('P')} = R320 000, ${or('i')} = 0.12, ${gr('n')} = 5:<br>${re('A')} = ${bl('320 000')}(1 − ${or('0.12')})<sup style="color:#16a34a;font-weight:700;">5</sup>`,
            `Simplify the bracket: (1 − ${or('0.12')}) = 0.88`,
            `Calculate the power: (0.88)<sup style="color:#16a34a;font-weight:700;">5</sup> ≈ 0.52773`,
            `Multiply: ${re('A')} = ${bl('320 000')} × 0.52773 ≈ <strong>R168 874</strong> ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A laptop valued at R12 000 depreciates using simple decay at 20% per year. Calculate its value after 3 years.',
          answer: 'R4 800',
          checkMode: 'auto',
          correctAnswer: 'R4800',
          correctAnswers: ['R4800', '4800', 'R4 800', '4 800'],
          explanation: 'A = P(1 − ni)\nA = 12 000(1 − 3 × 0.20)\nA = 12 000(1 − 0.60)\nA = 12 000 × 0.40\nA = R4 800 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A generator valued at R60 000 depreciates at 10% per year.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find its value after 5 years using simple decay.',
              correctAnswer: 'R30000',
              correctAnswers: ['R30000', '30000', 'R30 000', '30 000'],
              explanation: 'A = 60 000(1 − 5 × 0.10) = 60 000(0.50) = R30 000 ✓',
            },
            {
              label: 'b) Find its value after 5 years using compound decay (round to 2 decimal places).',
              correctAnswer: 'R35429.40',
              correctAnswers: ['R35429.40', '35429.40', 'R35 429.40', '35 429.40'],
              explanation: 'A = 60 000(0.90)⁵\n(0.90)⁵ = 0.59049\nA = 60 000 × 0.59049 = R35 429.40 ✓',
            },
            {
              label: 'c) Find the difference between the two values (round to 2 decimal places).',
              correctAnswer: 'R5429.40',
              correctAnswers: ['R5429.40', '5429.40', 'R5 429.40', '5 429.40'],
              explanation: 'Difference = R35 429.40 − R30 000 = R5 429.40 (compound decay keeps more value) ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: "A car valued at R200 000 depreciates at 15% per year over 3 years. Compare its value using simple decay versus compound decay, and explain why compound decay is considered more realistic for modelling a car's resale value.",
          answer: 'Simple decay: A = 200 000(1 − 3 × 0.15) = 200 000(0.55) = R110 000. Compound decay: A = 200 000(0.85)³ ≈ 200 000 × 0.614125 ≈ R122 825. Compound decay gives a higher (more realistic) resale value because each year\'s loss is a percentage of the already-reduced value — so the rand amount lost shrinks over time, matching how second-hand cars actually depreciate (fast at first, then more slowly), rather than losing the same fixed amount every year.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video explaining simple decay formula A=P(1-ni) and compound decay formula A=P(1-i)^n with colour coded worked examples showing car and machine depreciation contexts',

      diagramPlaceholder:
        'Linear graph of A against n for simple decay showing constant straight-line decline, with the same amount subtracted every year (compound decay would curve instead, decreasing more slowly as the value shrinks)',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="145" x2="205" y2="145" stroke="#374151" stroke-width="1.5"/><polygon points="205,145 197,141 197,149" fill="#374151"/><line x1="30" y1="145" x2="30" y2="15" stroke="#374151" stroke-width="1.5"/><polygon points="30,15 26,23 34,23" fill="#374151"/><text x="208" y="149" font-size="11" fill="#16a34a" font-weight="700">n</text><text x="22" y="13" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">A</text><line x1="30" y1="40" x2="190" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="40" r="4" fill="#2563eb"/><text x="20" y="47" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">P</text><circle cx="70" cy="65.25" r="3" fill="#ea580c"/><circle cx="110" cy="92.5" r="3" fill="#ea580c"/><circle cx="150" cy="119.75" r="3" fill="#ea580c"/><line x1="70" y1="65.25" x2="110" y2="65.25" stroke="#16a34a" stroke-width="1.3" stroke-dasharray="3,2"/><line x1="110" y1="65.25" x2="110" y2="92.5" stroke="#16a34a" stroke-width="1.3" stroke-dasharray="3,2"/><line x1="110" y1="92.5" x2="150" y2="92.5" stroke="#16a34a" stroke-width="1.3" stroke-dasharray="3,2"/><line x1="150" y1="92.5" x2="150" y2="119.75" stroke="#16a34a" stroke-width="1.3" stroke-dasharray="3,2"/><text x="90" y="55" font-size="8" fill="#16a34a" font-weight="700" text-anchor="middle">Δn</text><text x="130" y="82" font-size="8" fill="#16a34a" font-weight="700" text-anchor="middle">Δn</text><circle cx="190" cy="145" r="4" fill="#dc2626"/><text x="196" y="138" font-size="11" fill="#dc2626" font-weight="700">A</text><text x="115" y="163" font-size="9" fill="#374151" text-anchor="middle">same amount lost every year → straight line</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SOLVING FOR n
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-for-n',
      title: 'Solving for n in Growth Problems (Trial and Improvement)',
      icon: 'n',
      explanation:
        `<p style="margin-bottom:16px;">Sometimes we know the ${or('target amount')} and the growth rate but need to find ${bl('n')} — how many time periods it takes to reach the target. Because ${bl('n')} appears as an exponent, we cannot isolate it using basic algebra at this level. Instead we use <strong>trial and improvement</strong>: test values of ${bl('n')}, observe whether we are too low or too high, and refine our answer step by step.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('trial values of n')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('target multiplier')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('refined answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps for trial and improvement</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Set up the equation')} — Write the condition you need to satisfy, e.g. (1 + i)<sup>n</sup> = ${or('target multiplier')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Try a value')} — Choose a starting value of ${bl('n')} and calculate (1 + i)<sup>n</sup>. A reasonable starting point is n = 5.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Compare</strong> — If your result is below the ${or('target')}, try a higher ${bl('n')}. If above, try a lower ${bl('n')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Refine')} — Continue until you find the smallest whole-number ${bl('n')} that meets or exceeds the condition. This is your ${gr('refined answer')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Logarithms come later</p>` +
        `<p style="margin:0;color:#1e3a8a;">In later grades you will learn to use logarithms to solve for ${bl('n')} exactly in one algebraic step. At Grade 10 level, trial and improvement is the correct method — it develops your number sense and understanding of exponential growth patterns.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'How long will it take a population of 1.2 million to double if it grows at 12% per year?',
          answer: `Approximately ${gr('6')} years`,
          steps: [
            `We need (1.12)<sup>${bl('n')}</sup> = ${or('2')} (doubling means the multiplier must reach 2).`,
            `${bl('Try n = 5:')} (1.12)<sup>5</sup> ≈ 1.762 — this is below the ${or('target of 2')}, so n = 5 is too low.`,
            `${bl('Try n = 6:')} (1.12)<sup>6</sup> ≈ 1.974 — very close to the ${or('target of 2')} but not yet reached.`,
            `${bl('Try n = 7:')} (1.12)<sup>7</sup> ≈ 2.211 — this exceeds the ${or('target of 2')}.`,
            `<strong>Conclusion:</strong> Since population must be counted in whole years, it takes approximately ${gr('n ≈ 6')} years (rounding up to ensure doubling is reached). ✓`,
          ],
        },
        {
          question: "Sipho invests money at 9% compound interest and wants to know how many years until it grows by 50%.",
          answer: `Approximately ${gr('5')} years`,
          steps: [
            `A 50% increase means the amount becomes 1.5 times the original, so we need (1.09)<sup>${bl('n')}</sup> = ${or('1.5')}.`,
            `${bl('Try n = 4:')} (1.09)<sup>4</sup> ≈ 1.412 — below the ${or('target of 1.5')}, so n = 4 is too low.`,
            `${bl('Try n = 5:')} (1.09)<sup>5</sup> ≈ 1.539 — this just exceeds the ${or('target of 1.5')}.`,
            `<strong>Conclusion:</strong> It takes approximately ${gr('n = 5')} years for Sipho's investment to grow by 50%. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'How many years will it take for an investment to double if it grows at 10% compound interest per year? Use trial and improvement to find the smallest n where (1.10)ⁿ ≥ 2.',
          answer: '8 years',
          checkMode: 'auto',
          correctAnswer: '8',
          correctAnswers: ['8', '8 years'],
          explanation: 'Try n = 7: (1.10)⁷ ≈ 1.949 — too low.\nTry n = 8: (1.10)⁸ ≈ 2.144 — exceeds 2.\nAnswer: 8 years ✓',
        },
        {
          difficulty: 'Medium',
          question: 'An amount grows at 15% compound interest per year. Use trial and improvement.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) How many years until the amount triples? Find the smallest n where (1.15)ⁿ ≥ 3.',
              correctAnswer: '8',
              correctAnswers: ['8', '8 years'],
              explanation: 'Try n = 7: (1.15)⁷ ≈ 2.660 — too low.\nTry n = 8: (1.15)⁸ ≈ 3.059 — exceeds 3.\nAnswer: 8 years ✓',
            },
            {
              label: 'b) How many years until the amount quadruples? Find the smallest n where (1.15)ⁿ ≥ 4.',
              correctAnswer: '10',
              correctAnswers: ['10', '10 years'],
              explanation: 'Try n = 9: (1.15)⁹ ≈ 3.518 — too low.\nTry n = 10: (1.15)¹⁰ ≈ 4.046 — exceeds 4.\nAnswer: 10 years ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: "Sipho's R20 000 investment at 9% compound interest per year needs to grow to at least R32 000. Using trial and improvement, find the minimum number of whole years needed.",
          answer: '6 years',
          checkMode: 'auto',
          correctAnswer: '6',
          correctAnswers: ['6', '6 years'],
          explanation: 'We need 20 000(1.09)ⁿ ≥ 32 000, i.e. (1.09)ⁿ ≥ 1.6.\nTry n = 5: (1.09)⁵ ≈ 1.539 — too low.\nTry n = 6: (1.09)⁶ ≈ 1.677 — exceeds 1.6.\nAnswer: minimum 6 years ✓',
        },
      ],

      videoPlaceholder:
        'Short video demonstrating trial and improvement to find n in compound growth problems showing how to test refine and interpret results',

      diagramPlaceholder:
        'Graph of trial values of n against the calculated multiplier, with a dashed target line in orange and the refined answer that first reaches the target highlighted in green',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="145" x2="205" y2="145" stroke="#374151" stroke-width="1.5"/><polygon points="205,145 197,141 197,149" fill="#374151"/><line x1="30" y1="145" x2="30" y2="15" stroke="#374151" stroke-width="1.5"/><polygon points="30,15 26,23 34,23" fill="#374151"/><text x="208" y="149" font-size="10" fill="#374151" font-weight="700">n</text><text x="6" y="12" font-size="9" fill="#374151" font-weight="700">multiplier</text><line x1="30" y1="77" x2="190" y2="77" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,3"/><text x="192" y="73" font-size="10" fill="#ea580c" font-weight="700">target = 2</text><path d="M70,117.46 L115,81.42 L160,41.13" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="70" cy="117.46" r="4.5" fill="#0f1f3d"/><circle cx="115" cy="81.42" r="4.5" fill="#0f1f3d"/><circle cx="160" cy="41.13" r="5.5" fill="#16a34a" stroke="#0f1f3d" stroke-width="1.5"/><text x="70" y="160" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">n=5</text><text x="115" y="160" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">n=6</text><text x="160" y="160" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">n=7</text><text x="160" y="32" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">refined answer</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — FOREIGN EXCHANGE RATES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'foreign-exchange-rates',
      title: 'Implications of Fluctuating Foreign Exchange Rates',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;">An <strong>${bl('exchange rate')}</strong> tells you how much of one currency you receive for one unit of another. Exchange rates <strong>fluctuate</strong> (change constantly) based on economic factors such as inflation, interest rates, and trade balances. Understanding exchange rates helps us calculate costs for international travel, imported goods, and overseas study fees.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('exchange rate')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('currency conversion')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final amount')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Conversion rules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Rands → Foreign currency</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;"><strong>Multiply</strong> rands by the ${bl('exchange rate')} (foreign units per rand).</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">e.g. R15 000 × 0.049 = ${gr('€735')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Foreign currency → Rands</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;"><strong>Divide</strong> the foreign amount by the ${bl('exchange rate')} (foreign units per rand).</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">e.g. $250 ÷ 0.054 = ${gr('R4 629.63')}</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Implications of a weaker or stronger Rand</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Weaker Rand (rate falls)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">You get <strong>fewer</strong> foreign units per rand.</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>Imports cost more</strong> — fuel, electronics, and foreign study fees become more expensive in rands.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Stronger Rand (rate rises)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">You get <strong>more</strong> foreign units per rand.</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>Imports cost less</strong> — but South African exports become more expensive for foreign buyers.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always check the format of the exchange rate</p>` +
        `<p style="margin:0;color:#1e3a8a;">A rate written as <strong>R1 = $0.054</strong> means multiply rands by 0.054 to get dollars, or divide dollars by 0.054 to get rands. Always confirm whether the rate gives foreign units per rand or rands per foreign unit before calculating.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'If R1 = $0.054 (USD), find the cost in Rands of a $250 item.',
          answer: `${gr('≈ R4 629.63')}`,
          steps: [
            `The ${bl('exchange rate')} is R1 = $0.054, so $1 = R(1 ÷ 0.054).`,
            `To ${or('convert from dollars to rands')}: divide the dollar amount by the exchange rate.`,
            `${gr('Cost in Rands')} = $250 ÷ ${bl('0.054')} ≈ ${gr('R4 629.63')} ✓`,
          ],
        },
        {
          question: 'Lerato wants to convert R15 000 to Euros at an exchange rate of R1 = €0.049. Find the amount in Euros.',
          answer: `${gr('€735')}`,
          steps: [
            `The ${bl('exchange rate')} is R1 = €0.049.`,
            `To ${or('convert from rands to euros')}: multiply the rand amount by the exchange rate.`,
            `${gr('Amount in Euros')} = R15 000 × ${bl('0.049')} = ${gr('€735')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'If R1 = $0.054, convert R3 000 to US dollars.',
          answer: '$162',
          checkMode: 'auto',
          correctAnswer: '$162',
          correctAnswers: ['$162', '162', '$162.00'],
          explanation: 'To convert Rands to Dollars: multiply by the exchange rate.\nR3 000 × 0.054 = $162 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'The exchange rate is R1 = £0.043 (British pounds).',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Convert R25 000 to British pounds.',
              correctAnswer: '£1075',
              correctAnswers: ['£1075', '1075', '£1 075', '1 075', '£1075.00'],
              explanation: 'R25 000 × 0.043 = £1 075 ✓',
            },
            {
              label: 'b) An item costs £850 in the UK. Find its cost in Rands (round to 2 decimal places).',
              correctAnswer: 'R19767.44',
              correctAnswers: ['R19767.44', '19767.44', 'R19 767.44', '19 767.44'],
              explanation: 'Cost in Rands = £850 ÷ 0.043 ≈ R19 767.44 ✓',
            },
            {
              label: 'c) The Rand weakens to R1 = £0.038. Find the new Rand cost of the same £850 item (round to 2 decimal places).',
              correctAnswer: 'R22368.42',
              correctAnswers: ['R22368.42', '22368.42', 'R22 368.42', '22 368.42', 'R22368.43', '22368.43'],
              explanation: 'New cost in Rands = £850 ÷ 0.038 ≈ R22 368.42\nThe weaker Rand makes the import more expensive. ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A South African student needs to pay tuition fees of $12 500 to study abroad.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) At R1 = $0.054, find the cost in Rands (round to 2 decimal places).',
              correctAnswer: 'R231481.48',
              correctAnswers: ['R231481.48', '231481.48', 'R231 481.48', '231 481.48'],
              explanation: 'Cost = $12 500 ÷ 0.054 ≈ R231 481.48 ✓',
            },
            {
              label: 'b) The Rand strengthens to R1 = $0.060. Find the new cost in Rands (round to 2 decimal places).',
              correctAnswer: 'R208333.33',
              correctAnswers: ['R208333.33', '208333.33', 'R208 333.33', '208 333.33'],
              explanation: 'New cost = $12 500 ÷ 0.060 ≈ R208 333.33 ✓',
            },
            {
              label: 'c) How much does the student save due to the Rand strengthening (round to 2 decimal places)?',
              correctAnswer: 'R23148.15',
              correctAnswers: ['R23148.15', '23148.15', 'R23 148.15', '23 148.15'],
              explanation: 'Saving = R231 481.48 − R208 333.33 = R23 148.15\nA stronger Rand reduces the Rand cost of imported services. ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Short video explaining foreign exchange rates how to convert between currencies using multiplication and division and what happens when the Rand weakens or strengthens',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — HIRE PURCHASE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'hire-purchase',
      title: 'Hire Purchase — Deposit, Balance and Instalments',
      icon: '🛒',
      explanation:
        `<p style="margin-bottom:16px;">${pu('Hire purchase')} (HP) lets you take an item home immediately by paying a ${pu('deposit')} up front, then paying off the rest — the ${bl('balance')} — through equal monthly instalments that include ${or('simple interest')}. It uses the same simple interest formula as Simple Growth, ${re('A')} = ${bl('P')}(1 + ${gr('n')} × ${or('i')}), but the ${bl('principal P')} being financed is the <strong>cash price minus the deposit</strong>, not the full price.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('deposit')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('balance financed P')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('interest rate i')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('repayment period n')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('total repayment A')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The hire purchase formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.5em;font-weight:700;color:#374151;margin:0 0 8px 0;">${re('A')} = ${bl('P')}(1 + ${gr('n')} × ${or('i')})</p>` +
        `<p style="font-size:0.9em;color:#6b7280;margin:0;">where ${bl('P')} = Cash price − ${pu('Deposit')}, and ${gr('n')} is the repayment period in years</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps to solve a hire purchase problem</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${pu('Deposit')} — Multiply the cash price by the deposit percentage (or use the fixed deposit amount if one is given).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Balance (P)')} — Subtract the ${pu('deposit')} from the cash price. Only this remaining balance is charged interest.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Total repayment (A)')} — Apply simple interest to the balance: ${re('A')} = ${bl('P')}(1 + ${gr('n')} × ${or('i')}).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Monthly instalment')} — Divide ${re('A')} by the total number of months (${gr('n')} × 12).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;">${or('Total cost')} — Add the ${pu('deposit')} back on: Total cost = ${pu('Deposit')} + ${re('A')}. This is what you actually pay in the end.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hire purchase always costs more than the cash price</p>` +
        `<p style="margin:0;color:#1e3a8a;">Because interest is charged on the balance, the total cost of buying on hire purchase is always more than the original cash price. The trade-off is convenience — you get to use the item immediately instead of saving up first.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A fridge has a cash price of R15 000. Zinhle pays a 10% deposit and repays the balance on hire purchase at 15% simple interest per year over 3 years. Find her monthly instalment and the total cost of the fridge.',
          answer: `Monthly instalment = ${re('R543.75')}; Total cost = ${re('R21 075')}`,
          steps: [
            `${pu('Deposit')} = 10% × R15 000 = <strong>R1 500</strong>`,
            `${bl('Balance (P)')} = R15 000 − R1 500 = <strong>R13 500</strong>`,
            `${re('Total repayment')}: ${re('A')} = ${bl('P')}(1 + ${gr('n')} × ${or('i')}) = ${bl('13 500')}(1 + ${gr('3')} × ${or('0.15')}) = 13 500(1.45) = <strong>R19 575</strong>`,
            `${gr('Monthly instalment')} = R19 575 ÷ (3 × 12) = R19 575 ÷ 36 = <strong>R543.75</strong>`,
            `${or('Total cost')} = ${pu('R1 500')} + R19 575 = <strong>R21 075</strong> ✓`,
          ],
        },
        {
          question: 'A motorbike has a cash price of R24 000. Kagiso pays a 15% deposit and repays the balance on hire purchase at 12% simple interest per year over 2 years. Find his monthly instalment and the total cost.',
          answer: `Monthly instalment = ${re('R1 054')}; Total cost = ${re('R28 896')}`,
          steps: [
            `${pu('Deposit')} = 15% × R24 000 = <strong>R3 600</strong>`,
            `${bl('Balance (P)')} = R24 000 − R3 600 = <strong>R20 400</strong>`,
            `${re('Total repayment')}: ${re('A')} = ${bl('20 400')}(1 + ${gr('2')} × ${or('0.12')}) = 20 400(1.24) = <strong>R25 296</strong>`,
            `${gr('Monthly instalment')} = R25 296 ÷ (2 × 12) = R25 296 ÷ 24 = <strong>R1 054</strong>`,
            `${or('Total cost')} = ${pu('R3 600')} + R25 296 = <strong>R28 896</strong> ✓`,
          ],
        },
        {
          question: 'A laptop has a cash price of R20 000. Naledi pays a fixed deposit of R4 000 and repays the balance on hire purchase at 16% simple interest per year over 4 years. Find her monthly instalment (round to the nearest cent) and the total cost.',
          answer: `Monthly instalment ≈ ${re('R546.67')}; Total cost = ${re('R30 240')}`,
          steps: [
            `${pu('Deposit')} = <strong>R4 000</strong> (a fixed amount, not a percentage this time)`,
            `${bl('Balance (P)')} = R20 000 − R4 000 = <strong>R16 000</strong>`,
            `${re('Total repayment')}: ${re('A')} = ${bl('16 000')}(1 + ${gr('4')} × ${or('0.16')}) = 16 000(1.64) = <strong>R26 240</strong>`,
            `${gr('Monthly instalment')} = R26 240 ÷ (4 × 12) = R26 240 ÷ 48 ≈ <strong>R546.67</strong>`,
            `${or('Total cost')} = ${pu('R4 000')} + R26 240 = <strong>R30 240</strong> ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A stove has a cash price of R9 000. Lindiwe pays a 15% deposit. Calculate the balance that must be financed on hire purchase.',
          answer: 'R7 650',
          checkMode: 'auto',
          correctAnswer: 'R7650',
          correctAnswers: ['R7650', '7650', 'R7 650', '7 650'],
          explanation: 'Deposit = 15% × R9 000 = R1 350\nBalance = R9 000 − R1 350 = R7 650 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A couch has a cash price of R12 000. Sipho pays a 10% deposit and repays the balance on hire purchase at 16% simple interest per year over 3 years.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the deposit amount.',
              correctAnswer: 'R1200',
              correctAnswers: ['R1200', '1200', 'R1 200', '1 200'],
              explanation: 'Deposit = 10% × R12 000 = R1 200 ✓',
            },
            {
              label: 'b) Find the total repayment on the balance (using simple interest).',
              correctAnswer: 'R15984',
              correctAnswers: ['R15984', '15984', 'R15 984', '15 984'],
              explanation: 'Balance = 12 000 − 1 200 = R10 800\nA = 10 800(1 + 3 × 0.16) = 10 800(1.48) = R15 984 ✓',
            },
            {
              label: 'c) Find the monthly instalment.',
              correctAnswer: 'R444',
              correctAnswers: ['R444', '444', 'R444.00'],
              explanation: 'Monthly instalment = R15 984 ÷ (3 × 12) = R15 984 ÷ 36 = R444 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A dining set has a cash price of R18 000. Amahle pays a 12% deposit and repays the balance on hire purchase at 18% simple interest per year over 4 years.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the total cost of the dining set (deposit plus total repayment).',
              correctAnswer: 'R29404.80',
              correctAnswers: ['R29404.80', '29404.80', 'R29 404.80', '29 404.80', 'R29404.8', '29404.8'],
              explanation: 'Deposit = 12% × 18 000 = R2 160\nBalance = 18 000 − 2 160 = R15 840\nA = 15 840(1 + 4 × 0.18) = 15 840(1.72) = R27 244.80\nTotal cost = R2 160 + R27 244.80 = R29 404.80 ✓',
            },
            {
              label: 'b) Find the monthly instalment.',
              correctAnswer: 'R567.60',
              correctAnswers: ['R567.60', '567.60', 'R567.6', '567.6'],
              explanation: 'Monthly instalment = R27 244.80 ÷ (4 × 12) = R27 244.80 ÷ 48 = R567.60 ✓',
            },
            {
              label: 'c) How much more does Amahle pay in total compared to the original cash price?',
              correctAnswer: 'R11404.80',
              correctAnswers: ['R11404.80', '11404.80', 'R11 404.80', '11 404.80', 'R11404.8', '11404.8'],
              explanation: 'Extra paid = Total cost − Cash price = R29 404.80 − R18 000 = R11 404.80 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Short video working through a hire purchase problem step by step showing deposit in purple balance in blue interest rate in orange repayment period in green and total repayment in red',

      diagramPlaceholder:
        'Bar breakdown of a hire purchase showing the deposit segment in purple next to the financed balance segment in blue, then the same deposit next to a larger total repayment segment in red once simple interest has been added',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="95" y="16" font-size="10.5" font-weight="700" fill="#374151" text-anchor="middle">Cash price</text><rect x="30" y="24" width="13" height="22" fill="#7c3aed"/><rect x="43" y="24" width="117" height="22" fill="#2563eb"/><rect x="30" y="24" width="130" height="22" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="36.5" y="60" font-size="8" font-weight="700" fill="#7c3aed" text-anchor="middle">deposit</text><text x="101" y="39" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Balance (P)</text><line x1="101" y1="46" x2="101" y2="70" stroke="#ea580c" stroke-width="2"/><polygon points="101,74 96,66 106,66" fill="#ea580c"/><text x="150" y="76" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">+ simple interest</text><rect x="30" y="94" width="13" height="22" fill="#7c3aed"/><rect x="43" y="94" width="169.7" height="22" fill="#dc2626"/><rect x="30" y="94" width="182.7" height="22" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="128" y="109" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Total repayment (A)</text><text x="112" y="132" font-size="10.5" font-weight="700" fill="#374151" text-anchor="middle">Total cost = deposit + A</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 7 — INFLATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'inflation',
      title: 'Inflation and Purchasing Power',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">${or('Inflation')} is the rate at which prices rise over time, which reduces the buying power of your money. Because each year's price increase is calculated on the <em>already-inflated</em> price from the year before, inflation grows exponentially — exactly like ${gr('compound growth')}. We use the same formula: ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup style="font-weight:700;color:#16a34a;">n</sup>, but here ${bl('P')} is a ${bl('current price')}, ${or('i')} is the ${or('inflation rate')}, and ${re('A')} is a ${re('future price')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('current price P')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('inflation rate i')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('number of years n')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('future price A')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The inflation formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.5em;font-weight:700;color:#374151;margin:0 0 8px 0;">${re('A')} = ${bl('P')}(1 + ${or('i')})<sup style="font-weight:700;color:#16a34a;">n</sup></p>` +
        `<p style="font-size:0.9em;color:#6b7280;margin:0;">the same compound growth formula, applied to prices instead of investments</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">P — Current Price</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">What the item costs today, before any further inflation.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">i — Inflation Rate</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The average yearly percentage increase in prices, written as a decimal.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">n — Number of Years</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">How many years of inflation the price is projected over.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">A — Future Price</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">What the item is expected to cost after n years of inflation.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Purchasing power</p>` +
        `<p style="margin:0;color:#1e3a8a;">Your <strong>purchasing power</strong> is how much you can actually buy with your money. If prices rise 6% a year but your salary only rises 3% a year, your purchasing power falls — the same rand amount buys less each year, even though the number on your payslip is bigger.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A loaf of bread costs R18 today. If inflation averages 6% per year, find the expected price of the loaf after 5 years (round to 2 decimal places).',
          answer: `${re('A')} ≈ ${re('R24.09')}`,
          steps: [
            `Write the formula: ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup>n</sup>`,
            `Substitute: ${bl('P')} = R18, ${or('i')} = 0.06, ${gr('n')} = 5:<br>${re('A')} = ${bl('18')}(1.06)<sup style="color:#16a34a;font-weight:700;">5</sup>`,
            `Calculate the power: (1.06)<sup style="color:#16a34a;font-weight:700;">5</sup> ≈ 1.33823`,
            `Multiply: ${re('A')} = ${bl('18')} × 1.33823 ≈ <strong>R24.09</strong> ✓`,
          ],
        },
        {
          question: 'A grocery basket costs R2 500 today. If inflation averages 5.5% per year, find the expected cost after 8 years, and how much extra money you would need compared to today (round to 2 decimal places).',
          answer: `Cost ≈ ${re('R3 836.72')}; Extra needed ≈ ${re('R1 336.72')}`,
          steps: [
            `Write the formula: ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup>n</sup>`,
            `Substitute: ${bl('P')} = R2 500, ${or('i')} = 0.055, ${gr('n')} = 8:<br>${re('A')} = ${bl('2 500')}(1.055)<sup style="color:#16a34a;font-weight:700;">8</sup>`,
            `Calculate the power: (1.055)<sup style="color:#16a34a;font-weight:700;">8</sup> ≈ 1.53469`,
            `Multiply: ${re('A')} = ${bl('2 500')} × 1.53469 ≈ <strong>R3 836.72</strong>`,
            `Extra money needed = R3 836.72 − R2 500 = <strong>R1 336.72</strong> ✓`,
          ],
        },
        {
          question: 'A textbook now costs R450, after 3 years of inflation averaging 7% per year. Find what the textbook cost 3 years ago (round to 2 decimal places).',
          answer: `${bl('P')} ≈ ${bl('R367.33')}`,
          steps: [
            `Write the formula: ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup>n</sup>, and solve for ${bl('P')} this time.`,
            `Substitute: ${re('A')} = R450, ${or('i')} = 0.07, ${gr('n')} = 3:<br>450 = ${bl('P')}(1.07)<sup style="color:#16a34a;font-weight:700;">3</sup>`,
            `Calculate the power: (1.07)<sup style="color:#16a34a;font-weight:700;">3</sup> ≈ 1.22504`,
            `Divide: ${bl('P')} = 450 ÷ 1.22504 ≈ <strong>R367.33</strong>`,
            `<strong>Answer:</strong> The textbook cost approximately ${bl('R367.33')} three years ago. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A loaf of bread costs R16 today. If inflation averages 6% per year, find the expected price after 3 years (round to 2 decimal places).',
          answer: 'R19.06',
          checkMode: 'auto',
          correctAnswer: 'R19.06',
          correctAnswers: ['R19.06', '19.06'],
          explanation: 'A = P(1 + i)ⁿ = 16(1.06)³\n(1.06)³ = 1.191016\nA = 16 × 1.191016 ≈ R19.06 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A school charges annual fees of R32 000. If fees rise with inflation at 8% per year, find:',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) The fees after 3 years (round to the nearest Rand).',
              correctAnswer: 'R40311',
              correctAnswers: ['R40311', '40311', 'R40 311', '40 311'],
              explanation: 'A = 32 000(1.08)³ ≈ 32 000 × 1.259712 ≈ R40 311 ✓',
            },
            {
              label: 'b) The fees after 6 years (round to the nearest Rand).',
              correctAnswer: 'R50780',
              correctAnswers: ['R50780', '50780', 'R50 780', '50 780'],
              explanation: 'A = 32 000(1.08)⁶ ≈ 32 000 × 1.586874 ≈ R50 780 ✓',
            },
            {
              label: 'c) The increase in fees between year 3 and year 6 (round to the nearest Rand).',
              correctAnswer: 'R10469',
              correctAnswers: ['R10469', '10469', 'R10 469', '10 469'],
              explanation: 'R50 780 − R40 311 = R10 469 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A textbook now costs R620. If the average inflation rate over the past 4 years was 6.5% per year, find what the textbook would have cost 4 years ago (round to the nearest Rand).',
          answer: 'R482',
          checkMode: 'auto',
          correctAnswer: 'R482',
          correctAnswers: ['R482', '482'],
          explanation: '620 = P(1.065)⁴\n(1.065)⁴ ≈ 1.28647\nP = 620 ÷ 1.28647 ≈ R482 ✓',
        },
      ],

      videoPlaceholder:
        'Short video explaining inflation using the compound growth formula A=P(1+i)^n to project future prices with current price in blue inflation rate in orange years in green and future price in red and how purchasing power is affected',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 8 — POPULATION GROWTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'population-growth',
      title: 'Population Growth',
      icon: '👥',
      explanation:
        `<p style="margin-bottom:16px;">Population growth follows the exact same exponential pattern as compound interest — each year's growth happens on top of the already-larger population from the year before. We reuse the ${gr('compound growth')} formula ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup style="font-weight:700;color:#16a34a;">n</sup>, but here ${bl('P')} is a ${bl('starting population')}, ${or('i')} is an ${or('annual growth rate')}, and ${re('A')} is a ${re('future population')}. Since you cannot have part of a person, population answers are always rounded to the nearest whole number.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('starting population P')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('growth rate i')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('number of years n')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('future population A')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The population growth formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.5em;font-weight:700;color:#374151;margin:0 0 8px 0;">${re('A')} = ${bl('P')}(1 + ${or('i')})<sup style="font-weight:700;color:#16a34a;">n</sup></p>` +
        `<p style="font-size:0.9em;color:#6b7280;margin:0;">the same compound growth formula — money is replaced by people!</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Growth, decay, and doubling time</p>` +
        `<p style="margin:0;color:#1e3a8a;">Not all populations grow — a town losing residents to emigration shrinks using the same idea as simple/compound <strong>decay</strong>. And just like with investments, you can use <strong>trial and improvement</strong> (see Solving for n) to work out how many years it takes a population to double, or to reach a target size.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "A village's population is 8 200 and grows at 2.8% per year. Find the population after 6 years (round to the nearest whole number).",
          answer: `Population ≈ ${re('9 678')}`,
          steps: [
            `Write the formula: ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup>n</sup>`,
            `Substitute: ${bl('P')} = 8 200, ${or('i')} = 0.028, ${gr('n')} = 6:<br>${re('A')} = ${bl('8 200')}(1.028)<sup style="color:#16a34a;font-weight:700;">6</sup>`,
            `Calculate the power: (1.028)<sup style="color:#16a34a;font-weight:700;">6</sup> ≈ 1.18021`,
            `Multiply: ${re('A')} = ${bl('8 200')} × 1.18021 ≈ <strong>9 678</strong> people ✓`,
          ],
        },
        {
          question: "A city's population grew at 3% per year for 8 years to reach 96 000. Find the population 8 years ago (round to the nearest whole number).",
          answer: `${bl('P')} ≈ ${bl('75 783')}`,
          steps: [
            `Write the formula: ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup>n</sup>, and solve for ${bl('P')} this time.`,
            `Substitute: ${re('A')} = 96 000, ${or('i')} = 0.03, ${gr('n')} = 8:<br>96 000 = ${bl('P')}(1.03)<sup style="color:#16a34a;font-weight:700;">8</sup>`,
            `Calculate the power: (1.03)<sup style="color:#16a34a;font-weight:700;">8</sup> ≈ 1.26677`,
            `Divide: ${bl('P')} = 96 000 ÷ 1.26677 ≈ <strong>75 783</strong> people`,
            `<strong>Answer:</strong> The population 8 years ago was approximately ${bl('75 783')}. ✓`,
          ],
        },
        {
          question: "A rural population of 5 000 grows at 4.5% per year. Use trial and improvement to find how many years it takes for the population to double.",
          answer: `Approximately ${gr('16')} years`,
          steps: [
            `Doubling means we need (1.045)<sup>${bl('n')}</sup> = ${or('2')}.`,
            `${bl('Try n = 15:')} (1.045)<sup>15</sup> ≈ 1.935 — this is below the ${or('target of 2')}, so n = 15 is too low.`,
            `${bl('Try n = 16:')} (1.045)<sup>16</sup> ≈ 2.022 — this exceeds the ${or('target of 2')}.`,
            `<strong>Conclusion:</strong> Since population is counted in whole years, it takes approximately ${gr('n = 16')} years for the population to double. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: "A town's population is 12 000 and grows at 3.2% per year. Find the population after 4 years (round to the nearest whole number).",
          answer: '13 611',
          checkMode: 'auto',
          correctAnswer: '13611',
          correctAnswers: ['13611', '13 611'],
          explanation: 'A = P(1 + i)ⁿ = 12 000(1.032)⁴\n(1.032)⁴ ≈ 1.13428\nA ≈ 12 000 × 1.13428 ≈ 13 611 ✓',
        },
        {
          difficulty: 'Medium',
          question: "A city's population of 55 000 grows at 2.5% per year.",
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the population after 5 years (round to the nearest whole number).',
              correctAnswer: '62227',
              correctAnswers: ['62227', '62 227'],
              explanation: 'A = 55 000(1.025)⁵\n(1.025)⁵ ≈ 1.13141\nA ≈ 55 000 × 1.13141 ≈ 62 227 ✓',
            },
            {
              label: 'b) Find the population after 10 years (round to the nearest whole number).',
              correctAnswer: '70405',
              correctAnswers: ['70405', '70 405'],
              explanation: 'A = 55 000(1.025)¹⁰\n(1.025)¹⁰ ≈ 1.28008\nA ≈ 55 000 × 1.28008 ≈ 70 405 ✓',
            },
            {
              label: 'c) By how many people does the population increase between year 5 and year 10?',
              correctAnswer: '8177',
              correctAnswers: ['8177', '8 177', '8178', '8 178'],
              explanation: '70 405 − 62 227 = 8 177 people (small rounding differences of a person are acceptable) ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: "A district's population grew at 3.5% per year for 7 years to reach 140 000. Find the district's population 7 years ago (round to the nearest whole number).",
          answer: '110 039',
          checkMode: 'auto',
          correctAnswer: '110039',
          correctAnswers: ['110039', '110 039'],
          explanation: '140 000 = P(1.035)⁷\n(1.035)⁷ ≈ 1.27228\nP = 140 000 ÷ 1.27228 ≈ 110 039 ✓',
        },
      ],

      videoPlaceholder:
        'Short video applying the compound growth formula A=P(1+i)^n to population figures with starting population in blue growth rate in orange years in green and future population in red including doubling time by trial and improvement',

      diagramPlaceholder:
        'Growing crowd of dots showing a small starting population growing to a much larger population over time, illustrating exponential population growth',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="112" y="16" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">population grows faster as it gets bigger</text><text x="40" y="120" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">P</text><circle cx="35" cy="144" r="3.2" fill="#2563eb"/><circle cx="45" cy="144" r="3.2" fill="#2563eb"/><circle cx="40" cy="135" r="3.2" fill="#2563eb"/><circle cx="100" cy="135" r="3.2" fill="#ea580c"/><circle cx="112" cy="135" r="3.2" fill="#ea580c"/><circle cx="124" cy="135" r="3.2" fill="#ea580c"/><circle cx="100" cy="144" r="3.2" fill="#ea580c"/><circle cx="112" cy="144" r="3.2" fill="#ea580c"/><circle cx="124" cy="144" r="3.2" fill="#ea580c"/><text x="185" y="104" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">A</text><circle cx="167" cy="126" r="3.2" fill="#dc2626"/><circle cx="177" cy="126" r="3.2" fill="#dc2626"/><circle cx="187" cy="126" r="3.2" fill="#dc2626"/><circle cx="197" cy="126" r="3.2" fill="#dc2626"/><circle cx="167" cy="135" r="3.2" fill="#dc2626"/><circle cx="177" cy="135" r="3.2" fill="#dc2626"/><circle cx="187" cy="135" r="3.2" fill="#dc2626"/><circle cx="197" cy="135" r="3.2" fill="#dc2626"/><circle cx="167" cy="144" r="3.2" fill="#dc2626"/><circle cx="177" cy="144" r="3.2" fill="#dc2626"/><circle cx="187" cy="144" r="3.2" fill="#dc2626"/><circle cx="197" cy="144" r="3.2" fill="#dc2626"/><line x1="20" y1="152" x2="210" y2="152" stroke="#16a34a" stroke-width="1.8"/><polygon points="210,152 202,148 202,156" fill="#16a34a"/><text x="40" y="164" font-size="9" font-weight="700" fill="#2563eb" text-anchor="middle">t = 0</text><text x="112" y="164" font-size="9" font-weight="700" fill="#16a34a" text-anchor="middle">t = n/2</text><text x="185" y="164" font-size="9" font-weight="700" fill="#dc2626" text-anchor="middle">t = n</text></svg>',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate the simple interest on R4,000 at 5% per year for 3 years.',
      answer: 'R600',
      checkMode: 'auto',
      correctAnswer: 'R600',
      correctAnswers: ['R600', '600'],
      explanation: 'SI = P × n × i = 4 000 × 3 × 0.05 = R600 ✓',
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the final amount after 6 years if R7,500 is invested at 6% simple interest.',
      answer: 'R10,200',
      checkMode: 'auto',
      correctAnswer: 'R10200',
      correctAnswers: ['R10200', '10200', 'R10 200', '10 200'],
      explanation: 'A = P(1 + ni) = 7 500(1 + 6 × 0.06) = 7 500(1.36) = R10 200 ✓',
    },

    // ── Q3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says simple interest of R500 over 2 years on R5,000 means the rate was 10%. Check his reasoning.',
      answer: 'SI = P × n × i. 500 = 5 000 × 2 × i. i = 0.05 = 5%, not 10%. He is incorrect.',
      checkMode: 'self',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate the compound interest amount on R3,000 at 4% per year for 5 years.',
      answer: 'R3,649.96',
      checkMode: 'auto',
      correctAnswer: 'R3649.96',
      correctAnswers: ['R3649.96', '3649.96', 'R3 649.96', '3 649.96'],
      explanation: 'A = 3 000(1.04)⁵ = 3 000 × 1.21665 ≈ R3 649.96 ✓',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the final amount after 8 years if R6,000 is invested at 7% compound interest.',
      answer: 'R10,309.14',
      checkMode: 'auto',
      correctAnswer: 'R10309.14',
      correctAnswers: ['R10309.14', '10309.14', 'R10 309.14', '10 309.14'],
      explanation: 'A = 6 000(1.07)⁸ = 6 000 × 1.71819 ≈ R10 309.14 ✓',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato compares simple and compound interest on R8,000 at 6% over 4 years. Find the difference between the two methods.',
      answer: 'Simple: 8 000(1 + 4 × 0.06) = R9,920. Compound: 8 000(1.06)⁴ ≈ R10,099.82. Difference ≈ R179.82.',
      checkMode: 'self',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A population of 40,000 grows at 4% per year. Find the population after 7 years, rounded to the nearest whole number.',
      answer: '52,637',
      checkMode: 'auto',
      correctAnswer: '52637',
      correctAnswers: ['52637', '52 637'],
      explanation: 'A = 40 000(1.04)⁷ = 40 000 × 1.31593 ≈ 52 637 ✓',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'How long will it take an investment to double at 10% compound interest, using trial and improvement?',
      answer: 'Need (1.10)ⁿ = 2. Try n = 7: 1.10⁷ ≈ 1.949 (close). Try n = 8: 1.10⁸ ≈ 2.144. It takes approximately 8 years (rounding up).',
      checkMode: 'self',
    },

    // ── Q9 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo invests R20,000 at 5% compound interest. Find how many years it takes to grow to at least R25,000, using trial and improvement.',
      answer: 'Need (1.05)ⁿ = 1.25. Try n = 4: 1.05⁴ ≈ 1.216. Try n = 5: 1.05⁵ ≈ 1.276. It takes approximately 5 years.',
      checkMode: 'self',
    },

    // ── Q10 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'If R1 = $0.06, find the cost in Rands of a $300 item.',
      answer: 'R5,000',
      checkMode: 'auto',
      correctAnswer: 'R5000',
      correctAnswers: ['R5000', '5000', 'R5 000', '5 000'],
      explanation: 'Cost in Rands = $300 ÷ 0.06 = R5 000 ✓',
    },

    // ── Q11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Convert R10,000 to British Pounds at an exchange rate of R1 = £0.043.',
      answer: '£430',
      checkMode: 'auto',
      correctAnswer: '£430',
      correctAnswers: ['£430', '430', '£430.00'],
      explanation: 'R10 000 × 0.043 = £430 ✓',
    },

    // ── Q12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle buys an item costing $450 (USD) when R1 = $0.055. Find the cost in Rands, rounded to the nearest Rand.',
      answer: '450 ÷ 0.055 ≈ R8,182.',
      checkMode: 'self',
    },

    // ── Q13 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho buys a TV worth R9,000 on hire purchase at 18% simple interest over 2 years. Find his total repayment.',
      answer: 'R12,240',
      checkMode: 'auto',
      correctAnswer: 'R12240',
      correctAnswers: ['R12240', '12240', 'R12 240', '12 240'],
      explanation: 'A = 9 000(1 + 2 × 0.18) = 9 000(1.36) = R12 240 ✓',
    },

    // ── Q14 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato invests R15,000 at 9% compound interest for 10 years. Find the final amount, rounded to the nearest Rand.',
      answer: 'R35,510',
      checkMode: 'auto',
      correctAnswer: 'R35510',
      correctAnswers: ['R35510', '35510', 'R35 510', '35 510'],
      explanation: 'A = 15 000(1.09)¹⁰ = 15 000 × 2.367363 ≈ R35 510 ✓',
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A car valued at R250,000 depreciates using simple decay at 12% per year. Find its value after 5 years.',
      answer: 'R100,000',
      checkMode: 'auto',
      correctAnswer: 'R100000',
      correctAnswers: ['R100000', '100000', 'R100 000', '100 000', 'R100,000'],
      explanation: 'A = P(1 − ni) = 250 000(1 − 5 × 0.12) = 250 000(0.4) = R100 000 ✓',
    },

    // ── Q16 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says doubling the interest rate always doubles the final amount in compound interest. Is he correct? Explain with an example.',
      answer: 'No — for example R1,000 at 5% for 10 years gives ≈ R1,628.89, while at 10% for 10 years gives ≈ R2,593.74, which is not simply double, since compound growth is exponential, not linear.',
      checkMode: 'self',
    },

    // ── Q17 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Amahle's population of 60,000 grows at 2.5% per year. Find how many years until the population exceeds 80,000, using trial and improvement.",
      answer: 'Need (1.025)ⁿ = 1.333. Try n = 11: 1.025¹¹ ≈ 1.319. Try n = 12: 1.025¹² ≈ 1.352. It takes approximately 12 years.',
      checkMode: 'self',
    },

    // ── Q18 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho converts R5,000 to US Dollars at R1 = $0.055, then back to Rands a month later at R1 = $0.052. Find his Rand value after both conversions, and explain why it changed.',
      answer: 'First conversion: 5 000 × 0.055 = $275. Second conversion back: 275 ÷ 0.052 ≈ R5,288.46. The value increased because the Rand weakened against the Dollar (each Dollar now buys more Rand), benefiting the conversion back.',
      checkMode: 'self',
    },

    // ── Q19 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Compare investing R12,000 at 6% simple interest for 8 years versus 6% compound interest for 8 years. Find both final amounts and the difference.',
      answer: 'Simple: 12 000(1 + 8 × 0.06) = R17,760. Compound: 12 000(1.06)⁸ ≈ R19,126.05. Difference ≈ R1,366.05.',
      checkMode: 'self',
    },

    // ── Q20 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato invests R18,000 at an unknown compound interest rate and after 6 years it grows to R24,000. Use trial and improvement to estimate the interest rate to the nearest percent.',
      answer: 'Need (1 + i)⁶ = 24 000/18 000 = 1.333. Try i = 5%: 1.05⁶ ≈ 1.340 (close). The interest rate is approximately 5%.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered finance, growth and decay.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs) — no diagrams, pure formula/word-problem content
    // Block 1 (0-3):   Simple interest calculations
    // Block 2 (4-7):   Compound interest calculations
    // Block 3 (8-10):  Comparing simple vs compound interest
    // Block 4 (11-13): Hire purchase problems
    // Block 5 (14-16): Simple growth/decay word problems
    // Block 6 (17-19): Combined multi-step problems
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Simple interest (Easy, Easy, Medium, Medium)
        { difficulty: 'Easy', question: 'Calculate the final amount if R2,500 is invested at 6% simple interest per year for 3 years.', checkMode: 'auto', correctAnswer: 'R2950', correctAnswers: ['R2950', '2950', 'R2 950', '2 950', 'R2950.00', 'R2 950.00'], answer: 'R2 950', explanation: 'A = P(1 + ni) = 2 500(1 + 3 × 0.06) = 2 500(1.18) = R2 950 ✓' },
        { difficulty: 'Easy', question: 'Calculate the final amount if R5,000 is invested at 8% simple interest per year for 2 years.', checkMode: 'auto', correctAnswer: 'R5800', correctAnswers: ['R5800', '5800', 'R5 800', '5 800', 'R5800.00', 'R5 800.00'], answer: 'R5 800', explanation: 'A = P(1 + ni) = 5 000(1 + 2 × 0.08) = 5 000(1.16) = R5 800 ✓' },
        { difficulty: 'Medium', question: 'Thabo invests R9,000 at 5% simple interest per year for 4 years. Find the total interest earned (not the final amount).', checkMode: 'auto', correctAnswer: 'R1800', correctAnswers: ['R1800', '1800', 'R1 800', '1 800', 'R1800.00', 'R1 800.00'], answer: 'R1 800', explanation: 'Interest = P × n × i = 9 000 × 4 × 0.05 = R1 800 ✓' },
        { difficulty: 'Medium', question: 'An investment earning 5% simple interest per year grows to R6,000 after 4 years. Find the original principal.', checkMode: 'auto', correctAnswer: 'R5000', correctAnswers: ['R5000', '5000', 'R5 000', '5 000', 'R5000.00', 'R5 000.00'], answer: 'R5 000', explanation: 'A = P(1 + ni)\n6 000 = P(1 + 4 × 0.05) = P(1.20)\nP = 6 000 ÷ 1.20 = R5 000 ✓' },

        // Block 2 — Compound interest (Easy, Medium, Medium, Hard)
        { difficulty: 'Easy', question: 'Calculate the final amount if R2,000 is invested at 10% compound interest per year for 2 years.', checkMode: 'auto', correctAnswer: 'R2420', correctAnswers: ['R2420', '2420', 'R2 420', '2 420', 'R2420.00', 'R2 420.00'], answer: 'R2 420', explanation: 'A = P(1 + i)ⁿ = 2 000(1.10)² = 2 000 × 1.21 = R2 420 ✓' },
        { difficulty: 'Medium', question: 'Calculate the final amount if R3,200 is invested at 5% compound interest per year for 3 years (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R3704.40', correctAnswers: ['R3704.40', '3704.40', 'R3 704.40', '3 704.40'], answer: 'R3 704.40', explanation: 'A = 3 200(1.05)³ = 3 200 × 1.157625 ≈ R3 704.40 ✓' },
        { difficulty: 'Medium', question: 'Calculate the final amount if R4,500 is invested at 6% compound interest per year for 4 years (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R5681.15', correctAnswers: ['R5681.15', '5681.15', 'R5 681.15', '5 681.15'], answer: 'R5 681.15', explanation: 'A = 4 500(1.06)⁴ = 4 500 × 1.26247696 ≈ R5 681.15 ✓' },
        { difficulty: 'Hard', question: 'Calculate the final amount if R12,000 is invested at 7% compound interest per year for 6 years (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R18008.76', correctAnswers: ['R18008.76', '18008.76', 'R18 008.76', '18 008.76'], answer: 'R18 008.76', explanation: 'A = 12 000(1.07)⁶ = 12 000 × 1.50073 ≈ R18 008.76 ✓' },

        // Block 3 — Comparing simple vs compound interest (Medium, Hard, Hard)
        { difficulty: 'Medium', question: 'Compare investing R7,000 at 7% for 4 years using simple interest versus compound interest. Find the difference between the two final amounts (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R215.57', correctAnswers: ['R215.57', '215.57'], answer: 'R215.57', explanation: 'Simple: 7 000(1 + 4 × 0.07) = R8 960.\nCompound: 7 000(1.07)⁴ ≈ R9 175.57.\nDifference ≈ R215.57 ✓' },
        { difficulty: 'Hard', question: 'Compare investing R9,000 at 6% for 8 years using simple interest versus compound interest. Find the difference between the two final amounts (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R1024.63', correctAnswers: ['R1024.63', '1024.63', 'R1 024.63', '1 024.63'], answer: 'R1 024.63', explanation: 'Simple: 9 000(1 + 8 × 0.06) = R13 320.\nCompound: 9 000(1.06)⁸ ≈ R14 344.63.\nDifference ≈ R1 024.63 ✓' },
        { difficulty: 'Hard', question: 'Compare investing R5,000 at 8% for 6 years using simple interest versus compound interest. Find the difference between the two final amounts (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R534.37', correctAnswers: ['R534.37', '534.37'], answer: 'R534.37', explanation: 'Simple: 5 000(1 + 6 × 0.08) = R7 400.\nCompound: 5 000(1.08)⁶ ≈ R7 934.37.\nDifference ≈ R534.37 ✓' },

        // Block 4 — Hire purchase (Medium, Medium, Hard)
        { difficulty: 'Medium', question: 'Sipho buys a fridge worth R6,000 on hire purchase at 15% simple interest over 2 years, with no deposit. Find his total repayment.', checkMode: 'auto', correctAnswer: 'R7800', correctAnswers: ['R7800', '7800', 'R7 800', '7 800', 'R7800.00', 'R7 800.00'], answer: 'R7 800', explanation: 'A = P(1 + ni) = 6 000(1 + 2 × 0.15) = 6 000(1.30) = R7 800 ✓' },
        { difficulty: 'Medium', question: 'Lerato buys a laptop worth R10,000 on hire purchase at 20% simple interest over 3 years, with no deposit. Find her total repayment.', checkMode: 'auto', correctAnswer: 'R16000', correctAnswers: ['R16000', '16000', 'R16 000', '16 000', 'R16000.00', 'R16 000.00'], answer: 'R16 000', explanation: 'A = 10 000(1 + 3 × 0.20) = 10 000(1.60) = R16 000 ✓' },
        { difficulty: 'Hard', question: 'Amahle buys furniture with a cash price of R18,000. She pays a 15% deposit and repays the balance on hire purchase at 12% simple interest per year over 4 years. Find her total repayment (deposit plus hire purchase instalments), rounded to the nearest cent.', checkMode: 'auto', correctAnswer: 'R25344', correctAnswers: ['R25344', '25344', 'R25 344', '25 344', 'R25344.00', 'R25 344.00'], answer: 'R25 344', explanation: 'Deposit = 15% × 18 000 = R2 700.\nBalance = 18 000 − 2 700 = R15 300.\nHire purchase amount on balance = 15 300(1 + 4 × 0.12) = 15 300(1.48) = R22 644.\nTotal repayment = R2 700 + R22 644 = R25 344 ✓' },

        // Block 5 — Simple growth/decay word problems (Medium, Medium, Hard)
        { difficulty: 'Medium', question: "A town's population of 15,000 grows at 4% compound growth per year. Find the population after 5 years, rounded to the nearest whole number.", checkMode: 'auto', correctAnswer: '18250', correctAnswers: ['18250', '18 250'], answer: '18 250', explanation: 'A = 15 000(1.04)⁵ = 15 000 × 1.21665 ≈ 18 250 ✓' },
        { difficulty: 'Medium', question: 'A machine valued at R150,000 depreciates using simple (straight-line) decay at 10% per year. Find its value after 4 years.', checkMode: 'auto', correctAnswer: 'R90000', correctAnswers: ['R90000', '90000', 'R90 000', '90 000', 'R90000.00', 'R90 000.00'], answer: 'R90 000', explanation: 'A = P(1 − ni) = 150 000(1 − 4 × 0.10) = 150 000(0.60) = R90 000 ✓' },
        { difficulty: 'Hard', question: 'A car valued at R220,000 depreciates using simple (straight-line) decay at 18% per year. Find its value after 3 years.', checkMode: 'auto', correctAnswer: 'R101200', correctAnswers: ['R101200', '101200', 'R101 200', '101 200', 'R101200.00', 'R101 200.00'], answer: 'R101 200', explanation: 'A = P(1 − ni) = 220 000(1 − 3 × 0.18) = 220 000(0.46) = R101 200 ✓' },

        // Block 6 — Combined multi-step problems (Hard, Hard, Hard)
        { difficulty: 'Hard', question: 'Thabo invests R8,000 at 9% compound interest per year for 5 years. Find the final amount (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R12308.99', correctAnswers: ['R12308.99', '12308.99', 'R12 308.99', '12 308.99'], answer: 'R12 308.99', explanation: 'A = 8 000(1.09)⁵ = 8 000 × 1.53862 ≈ R12 308.99 ✓' },
        { difficulty: 'Hard', question: 'Nomsa invests R6,000 at 7.5% compound interest per year for 4 years. Find the final amount (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R8012.81', correctAnswers: ['R8012.81', '8012.81', 'R8 012.81', '8 012.81'], answer: 'R8 012.81', explanation: 'A = 6 000(1.075)⁴ = 6 000 × 1.33546... ≈ R8 012.81 ✓' },
        { difficulty: 'Hard', question: 'Sipho earns R1,500 simple interest on a principal of R5,000 invested for 3 years. Find the annual interest rate used.', checkMode: 'auto', correctAnswer: '10%', correctAnswers: ['10%', '10', '0.1', '0.10'], answer: '10%', explanation: 'Interest = P × n × i\n1 500 = 5 000 × 3 × i\n1 500 = 15 000i\ni = 1 500 ÷ 15 000 = 0.10 = 10% ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered simple interest, compound interest and hire purchase problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions on comparing simple and compound interest, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on the finance formulas, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Simple interest (Easy, Easy, Medium, Medium)
        { difficulty: 'Easy', question: 'Calculate the final amount if R3,200 is invested at 5% simple interest per year for 4 years.', checkMode: 'auto', correctAnswer: 'R3840', correctAnswers: ['R3840', '3840', 'R3 840', '3 840', 'R3840.00', 'R3 840.00'], answer: 'R3 840', explanation: 'A = P(1 + ni) = 3 200(1 + 4 × 0.05) = 3 200(1.20) = R3 840 ✓' },
        { difficulty: 'Easy', question: 'Calculate the final amount if R4,000 is invested at 9% simple interest per year for 3 years.', checkMode: 'auto', correctAnswer: 'R5080', correctAnswers: ['R5080', '5080', 'R5 080', '5 080', 'R5080.00', 'R5 080.00'], answer: 'R5 080', explanation: 'A = P(1 + ni) = 4 000(1 + 3 × 0.09) = 4 000(1.27) = R5 080 ✓' },
        { difficulty: 'Medium', question: 'Lerato invests R11,000 at 4.5% simple interest per year for 6 years. Find the total interest earned (not the final amount).', checkMode: 'auto', correctAnswer: 'R2970', correctAnswers: ['R2970', '2970', 'R2 970', '2 970', 'R2970.00', 'R2 970.00'], answer: 'R2 970', explanation: 'Interest = P × n × i = 11 000 × 6 × 0.045 = R2 970 ✓' },
        { difficulty: 'Medium', question: 'An investment earning 6% simple interest per year grows to R9,000 after 5 years. Find the original principal.', checkMode: 'auto', correctAnswer: 'R6923.08', correctAnswers: ['R6923.08', '6923.08', 'R6 923.08', '6 923.08', 'R6923.07', '6923.07'], answer: 'R6 923.08', explanation: 'A = P(1 + ni)\n9 000 = P(1 + 5 × 0.06) = P(1.30)\nP = 9 000 ÷ 1.30 ≈ R6 923.08 ✓' },

        // Block 2 — Compound interest (Easy, Medium, Medium, Hard)
        { difficulty: 'Easy', question: 'Calculate the final amount if R3,000 is invested at 8% compound interest per year for 2 years.', checkMode: 'auto', correctAnswer: 'R3499.20', correctAnswers: ['R3499.20', '3499.20', 'R3 499.20', '3 499.20', 'R3499.2', '3499.2'], answer: 'R3 499.20', explanation: 'A = P(1 + i)ⁿ = 3 000(1.08)² = 3 000 × 1.1664 = R3 499.20 ✓' },
        { difficulty: 'Medium', question: 'Calculate the final amount if R4,800 is invested at 4% compound interest per year for 3 years (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R5399.35', correctAnswers: ['R5399.35', '5399.35', 'R5 399.35', '5 399.35'], answer: 'R5 399.35', explanation: 'A = 4 800(1.04)³ = 4 800 × 1.124864 ≈ R5 399.35 ✓' },
        { difficulty: 'Medium', question: 'Calculate the final amount if R6,000 is invested at 7% compound interest per year for 5 years (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R8415.31', correctAnswers: ['R8415.31', '8415.31', 'R8 415.31', '8 415.31'], answer: 'R8 415.31', explanation: 'A = 6 000(1.07)⁵ = 6 000 × 1.40255... ≈ R8 415.31 ✓' },
        { difficulty: 'Hard', question: 'Calculate the final amount if R15,000 is invested at 6.5% compound interest per year for 7 years (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R23309.80', correctAnswers: ['R23309.80', '23309.80', 'R23 309.80', '23 309.80', 'R23309.8', '23309.8'], answer: 'R23 309.80', explanation: 'A = 15 000(1.065)⁷ = 15 000 × 1.55399... ≈ R23 309.80 ✓' },

        // Block 3 — Comparing simple vs compound interest (Medium, Hard, Hard)
        { difficulty: 'Medium', question: 'Compare investing R8,000 at 8% for 3 years using simple interest versus compound interest. Find the difference between the two final amounts (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R157.70', correctAnswers: ['R157.70', '157.70', 'R157.7', '157.7'], answer: 'R157.70', explanation: 'Simple: 8 000(1 + 3 × 0.08) = R9 920.\nCompound: 8 000(1.08)³ ≈ R10 077.70.\nDifference ≈ R157.70 ✓' },
        { difficulty: 'Hard', question: 'Compare investing R10,000 at 5% for 10 years using simple interest versus compound interest. Find the difference between the two final amounts (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R1288.95', correctAnswers: ['R1288.95', '1288.95', 'R1 288.95', '1 288.95'], answer: 'R1 288.95', explanation: 'Simple: 10 000(1 + 10 × 0.05) = R15 000.\nCompound: 10 000(1.05)¹⁰ ≈ R16 288.95.\nDifference ≈ R1 288.95 ✓' },
        { difficulty: 'Hard', question: 'Compare investing R6,500 at 9% for 7 years using simple interest versus compound interest. Find the difference between the two final amounts (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R1287.25', correctAnswers: ['R1287.25', '1287.25', 'R1 287.25', '1 287.25'], answer: 'R1 287.25', explanation: 'Simple: 6 500(1 + 7 × 0.09) = R10 595.\nCompound: 6 500(1.09)⁷ ≈ R11 882.25.\nDifference ≈ R1 287.25 ✓' },

        // Block 4 — Hire purchase (Medium, Medium, Hard)
        { difficulty: 'Medium', question: 'Sipho buys a TV worth R7,500 on hire purchase at 18% simple interest over 3 years, with no deposit. Find his total repayment.', checkMode: 'auto', correctAnswer: 'R11550', correctAnswers: ['R11550', '11550', 'R11 550', '11 550', 'R11550.00', 'R11 550.00'], answer: 'R11 550', explanation: 'A = P(1 + ni) = 7 500(1 + 3 × 0.18) = 7 500(1.54) = R11 550 ✓' },
        { difficulty: 'Medium', question: 'Naledi buys a motorbike worth R12,000 on hire purchase at 22% simple interest over 2 years, with no deposit. Find her total repayment.', checkMode: 'auto', correctAnswer: 'R17280', correctAnswers: ['R17280', '17280', 'R17 280', '17 280', 'R17280.00', 'R17 280.00'], answer: 'R17 280', explanation: 'A = 12 000(1 + 2 × 0.22) = 12 000(1.44) = R17 280 ✓' },
        { difficulty: 'Hard', question: 'Kagiso buys a couch with a cash price of R24,000. He pays a 20% deposit and repays the balance on hire purchase at 14% simple interest per year over 3 years. Find his total repayment (deposit plus hire purchase instalments), rounded to the nearest cent.', checkMode: 'auto', correctAnswer: 'R32064', correctAnswers: ['R32064', '32064', 'R32 064', '32 064', 'R32064.00', 'R32 064.00'], answer: 'R32 064', explanation: 'Deposit = 20% × 24 000 = R4 800.\nBalance = 24 000 − 4 800 = R19 200.\nHire purchase amount on balance = 19 200(1 + 3 × 0.14) = 19 200(1.42) = R27 264.\nTotal repayment = R4 800 + R27 264 = R32 064 ✓' },

        // Block 5 — Simple growth/decay word problems (Medium, Medium, Hard)
        { difficulty: 'Medium', question: "A town's population of 25,000 grows at 3% compound growth per year. Find the population after 6 years, rounded to the nearest whole number.", checkMode: 'auto', correctAnswer: '29851', correctAnswers: ['29851', '29 851'], answer: '29 851', explanation: 'A = 25 000(1.03)⁶ = 25 000 × 1.19405... ≈ 29 851 ✓' },
        { difficulty: 'Medium', question: 'A machine valued at R180,000 depreciates using simple (straight-line) decay at 12% per year. Find its value after 5 years.', checkMode: 'auto', correctAnswer: 'R72000', correctAnswers: ['R72000', '72000', 'R72 000', '72 000', 'R72000.00', 'R72 000.00'], answer: 'R72 000', explanation: 'A = P(1 − ni) = 180 000(1 − 5 × 0.12) = 180 000(0.40) = R72 000 ✓' },
        { difficulty: 'Hard', question: 'A delivery van valued at R300,000 depreciates using simple (straight-line) decay at 20% per year. Find its value after 4 years.', checkMode: 'auto', correctAnswer: 'R60000', correctAnswers: ['R60000', '60000', 'R60 000', '60 000', 'R60000.00', 'R60 000.00'], answer: 'R60 000', explanation: 'A = P(1 − ni) = 300 000(1 − 4 × 0.20) = 300 000(0.20) = R60 000 ✓' },

        // Block 6 — Combined multi-step problems (Hard, Hard, Hard)
        { difficulty: 'Hard', question: 'Amahle invests R10,000 at 10% compound interest per year for 6 years. Find the final amount (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R17715.61', correctAnswers: ['R17715.61', '17715.61', 'R17 715.61', '17 715.61'], answer: 'R17 715.61', explanation: 'A = 10 000(1.10)⁶ = 10 000 × 1.771561 = R17 715.61 ✓' },
        { difficulty: 'Hard', question: 'Zanele invests R9,000 at 5.5% compound interest per year for 5 years. Find the final amount (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R11762.64', correctAnswers: ['R11762.64', '11762.64', 'R11 762.64', '11 762.64'], answer: 'R11 762.64', explanation: 'A = 9 000(1.055)⁵ = 9 000 × 1.30696... ≈ R11 762.64 ✓' },
        { difficulty: 'Hard', question: 'Thabo earns R2,100 simple interest on a principal of R7,000 invested for 6 years. Find the annual interest rate used.', checkMode: 'auto', correctAnswer: '5%', correctAnswers: ['5%', '5', '0.05'], answer: '5%', explanation: 'Interest = P × n × i\n2 100 = 7 000 × 6 × i\n2 100 = 42 000i\ni = 2 100 ÷ 42 000 = 0.05 = 5% ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered simple interest, compound interest and hire purchase problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions on comparing simple and compound interest, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on the finance formulas, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Simple interest (Easy, Easy, Medium, Medium)
        { difficulty: 'Easy', question: 'Calculate the final amount if R4,800 is invested at 7% simple interest per year for 2 years.', checkMode: 'auto', correctAnswer: 'R5472', correctAnswers: ['R5472', '5472', 'R5 472', '5 472', 'R5472.00', 'R5 472.00'], answer: 'R5 472', explanation: 'A = P(1 + ni) = 4 800(1 + 2 × 0.07) = 4 800(1.14) = R5 472 ✓' },
        { difficulty: 'Easy', question: 'Calculate the final amount if R6,500 is invested at 4% simple interest per year for 5 years.', checkMode: 'auto', correctAnswer: 'R7800', correctAnswers: ['R7800', '7800', 'R7 800', '7 800', 'R7800.00', 'R7 800.00'], answer: 'R7 800', explanation: 'A = P(1 + ni) = 6 500(1 + 5 × 0.04) = 6 500(1.20) = R7 800 ✓' },
        { difficulty: 'Medium', question: 'Amahle invests R13,000 at 5.5% simple interest per year for 4 years. Find the total interest earned (not the final amount).', checkMode: 'auto', correctAnswer: 'R2860', correctAnswers: ['R2860', '2860', 'R2 860', '2 860', 'R2860.00', 'R2 860.00'], answer: 'R2 860', explanation: 'Interest = P × n × i = 13 000 × 4 × 0.055 = R2 860 ✓' },
        { difficulty: 'Medium', question: 'An investment earning 8% simple interest per year grows to R8,400 after 3 years. Find the original principal.', checkMode: 'auto', correctAnswer: 'R6774.19', correctAnswers: ['R6774.19', '6774.19', 'R6 774.19', '6 774.19'], answer: 'R6 774.19', explanation: 'A = P(1 + ni)\n8 400 = P(1 + 3 × 0.08) = P(1.24)\nP = 8 400 ÷ 1.24 ≈ R6 774.19 ✓' },

        // Block 2 — Compound interest (Easy, Medium, Medium, Hard)
        { difficulty: 'Easy', question: 'Calculate the final amount if R3,500 is invested at 9% compound interest per year for 3 years (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R4532.60', correctAnswers: ['R4532.60', '4532.60', 'R4 532.60', '4 532.60', 'R4532.6', '4532.6'], answer: 'R4 532.60', explanation: 'A = P(1 + i)ⁿ = 3 500(1.09)³ = 3 500 × 1.295029 ≈ R4 532.60 ✓' },
        { difficulty: 'Medium', question: 'Calculate the final amount if R5,200 is invested at 4.5% compound interest per year for 3 years (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R5934.06', correctAnswers: ['R5934.06', '5934.06', 'R5 934.06', '5 934.06'], answer: 'R5 934.06', explanation: 'A = 5 200(1.045)³ = 5 200 × 1.141166... ≈ R5 934.06 ✓' },
        { difficulty: 'Medium', question: 'Calculate the final amount if R5,500 is invested at 7.5% compound interest per year for 6 years (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R8488.16', correctAnswers: ['R8488.16', '8488.16', 'R8 488.16', '8 488.16'], answer: 'R8 488.16', explanation: 'A = 5 500(1.075)⁶ = 5 500 × 1.54330... ≈ R8 488.16 ✓' },
        { difficulty: 'Hard', question: 'Calculate the final amount if R18,000 is invested at 8% compound interest per year for 9 years (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R35982.08', correctAnswers: ['R35982.08', '35982.08', 'R35 982.08', '35 982.08'], answer: 'R35 982.08', explanation: 'A = 18 000(1.08)⁹ = 18 000 × 1.99900... ≈ R35 982.08 ✓' },

        // Block 3 — Comparing simple vs compound interest (Medium, Hard, Hard)
        { difficulty: 'Medium', question: 'Compare investing R6,000 at 9% for 5 years using simple interest versus compound interest. Find the difference between the two final amounts (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R531.74', correctAnswers: ['R531.74', '531.74'], answer: 'R531.74', explanation: 'Simple: 6 000(1 + 5 × 0.09) = R8 700.\nCompound: 6 000(1.09)⁵ ≈ R9 231.74.\nDifference ≈ R531.74 ✓' },
        { difficulty: 'Hard', question: 'Compare investing R12,000 at 7% for 9 years using simple interest versus compound interest. Find the difference between the two final amounts (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R2501.51', correctAnswers: ['R2501.51', '2501.51', 'R2 501.51', '2 501.51'], answer: 'R2 501.51', explanation: 'Simple: 12 000(1 + 9 × 0.07) = R19 560.\nCompound: 12 000(1.07)⁹ ≈ R22 061.51.\nDifference ≈ R2 501.51 ✓' },
        { difficulty: 'Hard', question: 'Compare investing R8,000 at 10% for 6 years using simple interest versus compound interest. Find the difference between the two final amounts (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R1372.49', correctAnswers: ['R1372.49', '1372.49', 'R1 372.49', '1 372.49'], answer: 'R1 372.49', explanation: 'Simple: 8 000(1 + 6 × 0.10) = R12 800.\nCompound: 8 000(1.10)⁶ ≈ R14 172.49.\nDifference ≈ R1 372.49 ✓' },

        // Block 4 — Hire purchase (Medium, Medium, Hard)
        { difficulty: 'Medium', question: 'Buhle buys a stove worth R9,000 on hire purchase at 16% simple interest over 4 years, with no deposit. Find her total repayment.', checkMode: 'auto', correctAnswer: 'R14760', correctAnswers: ['R14760', '14760', 'R14 760', '14 760', 'R14760.00', 'R14 760.00'], answer: 'R14 760', explanation: 'A = P(1 + ni) = 9 000(1 + 4 × 0.16) = 9 000(1.64) = R14 760 ✓' },
        { difficulty: 'Medium', question: 'Sipho buys office equipment worth R14,000 on hire purchase at 19% simple interest over 3 years, with no deposit. Find his total repayment.', checkMode: 'auto', correctAnswer: 'R21980', correctAnswers: ['R21980', '21980', 'R21 980', '21 980', 'R21980.00', 'R21 980.00'], answer: 'R21 980', explanation: 'A = 14 000(1 + 3 × 0.19) = 14 000(1.57) = R21 980 ✓' },
        { difficulty: 'Hard', question: 'Lerato buys a bedroom suite with a cash price of R30,000. She pays a 10% deposit and repays the balance on hire purchase at 15% simple interest per year over 5 years. Find her total repayment (deposit plus hire purchase instalments), rounded to the nearest cent.', checkMode: 'auto', correctAnswer: 'R50250', correctAnswers: ['R50250', '50250', 'R50 250', '50 250', 'R50250.00', 'R50 250.00'], answer: 'R50 250', explanation: 'Deposit = 10% × 30 000 = R3 000.\nBalance = 30 000 − 3 000 = R27 000.\nHire purchase amount on balance = 27 000(1 + 5 × 0.15) = 27 000(1.75) = R47 250.\nTotal repayment = R3 000 + R47 250 = R50 250 ✓' },

        // Block 5 — Simple growth/decay word problems (Medium, Medium, Hard)
        { difficulty: 'Medium', question: "A town's population of 40,000 grows at 3.5% compound growth per year. Find the population after 7 years, rounded to the nearest whole number.", checkMode: 'auto', correctAnswer: '50891', correctAnswers: ['50891', '50 891'], answer: '50 891', explanation: 'A = 40 000(1.035)⁷ = 40 000 × 1.27228... ≈ 50 891 ✓' },
        { difficulty: 'Medium', question: 'A machine valued at R210,000 depreciates using simple (straight-line) decay at 14% per year. Find its value after 4 years.', checkMode: 'auto', correctAnswer: 'R92400', correctAnswers: ['R92400', '92400', 'R92 400', '92 400', 'R92400.00', 'R92 400.00'], answer: 'R92 400', explanation: 'A = P(1 − ni) = 210 000(1 − 4 × 0.14) = 210 000(0.44) = R92 400 ✓' },
        { difficulty: 'Hard', question: 'A tractor valued at R260,000 depreciates using simple (straight-line) decay at 16% per year. Find its value after 5 years.', checkMode: 'auto', correctAnswer: 'R52000', correctAnswers: ['R52000', '52000', 'R52 000', '52 000', 'R52000.00', 'R52 000.00'], answer: 'R52 000', explanation: 'A = P(1 − ni) = 260 000(1 − 5 × 0.16) = 260 000(0.20) = R52 000 ✓' },

        // Block 6 — Combined multi-step problems (Hard, Hard, Hard)
        { difficulty: 'Hard', question: 'Nomsa invests R14,000 at 8.5% compound interest per year for 6 years. Find the final amount (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R22840.55', correctAnswers: ['R22840.55', '22840.55', 'R22 840.55', '22 840.55'], answer: 'R22 840.55', explanation: 'A = 14 000(1.085)⁶ = 14 000 × 1.63147... ≈ R22 840.55 ✓' },
        { difficulty: 'Hard', question: 'Kagiso invests R7,000 at 9.5% compound interest per year for 5 years. Find the final amount (round to 2 decimal places).', checkMode: 'auto', correctAnswer: 'R11019.67', correctAnswers: ['R11019.67', '11019.67', 'R11 019.67', '11 019.67'], answer: 'R11 019.67', explanation: 'A = 7 000(1.095)⁵ = 7 000 × 1.57424... ≈ R11 019.67 ✓' },
        { difficulty: 'Hard', question: 'Zanele earns R1,440 simple interest on a principal of R6,000 invested for 4 years. Find the annual interest rate used.', checkMode: 'auto', correctAnswer: '6%', correctAnswers: ['6%', '6', '0.06'], answer: '6%', explanation: 'Interest = P × n × i\n1 440 = 6 000 × 4 × i\n1 440 = 24 000i\ni = 1 440 ÷ 24 000 = 0.06 = 6% ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered simple interest, compound interest and hire purchase problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions on comparing simple and compound interest, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on the finance formulas, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
