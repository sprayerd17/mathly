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
