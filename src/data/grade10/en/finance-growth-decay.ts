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
        '<VideoPlaceholder label="Short video explaining simple interest formula A=P(1+ni) with colour coded worked examples showing hire purchase and savings contexts" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Linear graph of A against n for simple interest showing constant straight-line growth with principal blue rate orange time green and final amount red" />',
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
        '<VideoPlaceholder label="Short video explaining compound interest formula A=P(1+i)^n with colour coded examples showing savings and population growth and comparison with simple interest" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Exponential growth curve comparing simple and compound interest over 10 years on the same axes with principal blue interest rate orange and exponential growth curve green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING FOR n
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
        '<VideoPlaceholder label="Short video demonstrating trial and improvement to find n in compound growth problems showing how to test refine and interpret results" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Table showing trial values of n in blue against calculated multiplier versus target value in orange with the refined answer highlighted in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — FOREIGN EXCHANGE RATES
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
        '<VideoPlaceholder label="Short video explaining foreign exchange rates how to convert between currencies using multiplication and division and what happens when the Rand weakens or strengthens" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing currency conversion arrows between Rands and foreign currencies with exchange rate in blue conversion operation in orange and final converted amount in green" />',
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
      answer: 'R10,305.49',
      checkMode: 'auto',
      correctAnswer: 'R10305.49',
      correctAnswers: ['R10305.49', '10305.49', 'R10 305.49', '10 305.49'],
      explanation: 'A = 6 000(1.07)⁸ = 6 000 × 1.71819 ≈ R10 305.49 ✓',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato compares simple and compound interest on R8,000 at 6% over 4 years. Find the difference between the two methods.',
      answer: 'Simple: 8 000(1 + 4 × 0.06) = R9,920. Compound: 8 000(1.06)⁴ ≈ R10,096.91. Difference ≈ R176.91.',
      checkMode: 'self',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A population of 40,000 grows at 4% per year. Find the population after 7 years, rounded to the nearest whole number.',
      answer: '52,633',
      checkMode: 'auto',
      correctAnswer: '52633',
      correctAnswers: ['52633', '52 633'],
      explanation: 'A = 40 000(1.04)⁷ = 40 000 × 1.31593 ≈ 52 633 ✓',
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
      answer: 'R35,516',
      checkMode: 'auto',
      correctAnswer: 'R35516',
      correctAnswers: ['R35516', '35516', 'R35 516', '35 516'],
      explanation: 'A = 15 000(1.09)¹⁰ = 15 000 × 2.36736 ≈ R35 516 ✓',
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A car valued at R250,000 depreciates using simple decay at 12% per year. Find its value after 5 years.',
      answer: 'A = P(1 − ni) = 250 000(1 − 5 × 0.12) = 250 000(0.4) = R100,000.',
      checkMode: 'self',
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
}
