import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (ratio-and-rate roles) ────────────────────────────────────
// Section 1 – Ratio:      first quantity → blue   second quantity → red
//                         total parts   → orange  shares         → green
// Section 2 – Rate:       distance      → blue    time           → orange
//                         rate          → green   comparison     → red
// Section 3 – Proportion: known ratio   → blue    unknown value  → red
//                         cross mult.   → orange
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Ratio and Rate',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — RATIO
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ratio',
      title: 'Ratio',
      icon: ':',
      explanation:
        `<p style="margin-bottom:16px;">A ratio compares two or more quantities of the <strong>same kind</strong>. In Grade 7 we simplify ratios, find equivalent ratios and divide amounts in a given ratio. We also solve problems involving ratios with three or more parts and compare ratios by writing them with a common term.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('first quantity')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('second quantity')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('total parts')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('shares')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Simplifying a ratio</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Divide both terms by their highest common factor (HCF) until no common factor remains.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Dividing in a ratio</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Find the total number of parts, calculate one part, then multiply by each ratio value.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Equivalent ratios</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Multiply or divide both terms by the same number to create an equivalent ratio.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Comparing ratios</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Write both ratios with the same first term using equivalent ratios, then compare the remaining terms.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Dividing in a ratio — the method</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Step 1:</strong> Add the ratio parts to find the ${or('total number of parts')}.<br><strong>Step 2:</strong> Divide the total amount by the ${or('total parts')} to find the value of one part.<br><strong>Step 3:</strong> Multiply one part by each ratio number to find the ${gr('shares')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Divide R750 in the ratio 2:3.',
          answer: `${bl('First share')} = ${gr('R300')}, ${re('Second share')} = ${gr('R450')}`,
          steps: [
            `Find the ${or('total number of parts')}: ${bl('2')} + ${re('3')} = ${or('5')} parts.`,
            `Find the value of one part: 750 ÷ ${or('5')} = 150.`,
            `${bl('First share')} = ${bl('2')} × 150 = ${gr('R300')}.`,
            `${re('Second share')} = ${re('3')} × 150 = ${gr('R450')}.`,
            `<strong>Check:</strong> ${gr('R300')} + ${gr('R450')} = R750 ✓`,
          ],
        },
        {
          question: 'Compare the ratios 3:4 and 5:8 by writing them with the same first term.',
          answer: `${re('5:8')} is the larger ratio`,
          steps: [
            `Find the LCM of the first terms (${bl('3')} and ${bl('5')}): LCM = ${or('15')}.`,
            `Write ${bl('3')}:4 as an equivalent ratio with first term ${or('15')}: multiply both terms by ${or('15')} ÷ ${bl('3')} = 5 → ${or('15')}:20.`,
            `Write ${bl('5')}:8 as an equivalent ratio with first term ${or('15')}: multiply both terms by ${or('15')} ÷ ${bl('5')} = 3 → ${or('15')}:24.`,
            `Compare: ${or('15')}:20 vs ${or('15')}:24. Since 24 > 20, the ratio ${re('5:8')} is the larger ratio.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to divide an amount in a given ratio and how to compare ratios using equivalent forms" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual showing R750 divided into 5 equal parts with 2 parts coloured blue for first share and 3 parts coloured red for second share" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — RATE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rate',
      title: 'Rate',
      icon: '/',
      explanation:
        `<p style="margin-bottom:16px;">A rate compares two quantities of <strong>different kinds</strong> and always has units. In Grade 7 we calculate rates including speed, calculate unit rates and use rates to solve multi-step real-life problems involving time, distance and cost.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('distance')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('time')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('rate')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('comparison')}</span>` +
        `</div>` +

        // ── Key formulas ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key formulas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Speed</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Speed')} = ${bl('Distance')} ÷ ${or('Time')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Distance</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Distance')} = ${gr('Speed')} × ${or('Time')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Time</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('Time')} = ${bl('Distance')} ÷ ${gr('Speed')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Unit rate</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Divide the total by the number of units to find the ${gr('rate')} for one unit (e.g. cost per item, km/h).</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Ratio vs Rate</p>` +
        `<p style="margin:0;color:#14532d;">A <strong>ratio</strong> compares quantities of the <em>same kind</em> (e.g. 3 boys : 5 girls). A <strong>${gr('rate')}</strong> compares quantities of <em>different kinds</em> and always shows units (e.g. 70 km/${or('h')}, R25 per kg, R120/${or('hour')}).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A car travels 315 km in 4.5 hours. Find its average speed.',
          answer: `Average speed = ${gr('70 km/h')}`,
          steps: [
            `Write the formula: ${gr('Speed')} = ${bl('Distance')} ÷ ${or('Time')}.`,
            `Substitute the values: ${gr('Speed')} = ${bl('315 km')} ÷ ${or('4.5 h')}.`,
            `Calculate: 315 ÷ 4.5 = ${gr('70')}.`,
            `<strong>Answer:</strong> The average speed is ${gr('70 km/h')} ✓`,
          ],
        },
        {
          question: 'Sipho earns R2 880 for 24 hours of work. Lerato earns R3 250 for 26 hours of work. Who earns more per hour?',
          answer: `${re('Lerato')} earns more per hour at ${gr('R125/h')}`,
          steps: [
            `Calculate Sipho's unit rate: ${gr('Rate')} = R2 880 ÷ ${or('24 h')} = ${gr('R120/h')}.`,
            `Calculate Lerato's unit rate: ${gr('Rate')} = R3 250 ÷ ${or('26 h')} = ${gr('R125/h')}.`,
            `${re('Compare:')} ${gr('R120/h')} vs ${gr('R125/h')} — since 125 > 120, ${re('Lerato')} earns more per hour.`,
            `<strong>Answer:</strong> ${re('Lerato')} earns more per hour at ${gr('R125/h')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate speed using the distance-time formula and how to find and compare unit rates" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Speed triangle diagram showing Distance at the top and Speed and Time at the bottom with colour coded labels" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PROPORTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'proportion',
      title: 'Proportion',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">Proportion describes the relationship between two ratios that are equal. We use proportion to solve problems where quantities change at the same rate. We can use <strong>cross multiplication</strong> to solve for an unknown value in a proportion.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known ratio')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('unknown value')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('cross multiplication')}</span>` +
        `</div>` +

        // ── Cross multiplication method ───────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Cross multiplication method</p>` +
        `<p style="margin-bottom:12px;">In a proportion <strong>a/b = c/d</strong>, the cross products are equal: <strong>a × d = b × c</strong>. Use this to find an unknown value.</p>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin-bottom:8px;">${bl('a')} / ${bl('b')} = ${re('c')} / ${re('x')}</p>` +
        `<p style="font-size:0.9em;color:#6b7280;margin-bottom:8px;">Cross multiply ↓</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin-bottom:4px;">${or('a × x')} = ${or('b × c')}</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${re('x')} = ${or('b × c')} ÷ ${bl('a')}</p>` +
        `</div>` +

        // ── Method cards ─────────────────────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Setting up the proportion</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Write the ${bl('known ratio')} as a fraction, then write the corresponding second ratio with the ${re('unknown (x)')} in the matching position.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Cross multiply to solve</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Multiply the numerator of each fraction by the denominator of the other (the ${or('cross products')}), then solve for ${re('x')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Always keep units consistent</p>` +
        `<p style="margin:0;color:#14532d;">Place the same type of quantity in the same position in both fractions. Books over cost on both sides, or hours over pay on both sides — never mix them up.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'If 4 books cost R220, how much would 7 books cost?',
          answer: `7 books cost ${re('R385')}`,
          steps: [
            `Set up the proportion: ${bl('4')} / ${bl('220')} = 7 / ${re('x')}.`,
            `${or('Cross multiply:')} ${bl('4')} × ${re('x')} = ${bl('220')} × 7.`,
            `Simplify the right side: ${or('4x')} = ${or('1 540')}.`,
            `Solve for ${re('x')}: ${re('x')} = 1 540 ÷ 4 = ${re('385')}.`,
            `<strong>Answer:</strong> 7 books cost ${re('R385')} ✓`,
          ],
        },
        {
          question: 'A recipe uses 3 cups of flour for 12 muffins. How much flour is needed for 20 muffins?',
          answer: `${re('5 cups')} of flour are needed for 20 muffins`,
          steps: [
            `Set up the proportion: ${bl('3')} / ${bl('12')} = ${re('x')} / 20.`,
            `${or('Cross multiply:')} ${bl('12')} × ${re('x')} = ${bl('3')} × 20.`,
            `Simplify the right side: ${or('12x')} = ${or('60')}.`,
            `Solve for ${re('x')}: ${re('x')} = 60 ÷ 12 = ${re('5')}.`,
            `<strong>Answer:</strong> ${re('5 cups')} of flour are needed for 20 muffins ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to set up and solve a proportion using cross multiplication with real-life examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two equal fractions side by side with arrows crossing to show cross multiplication highlighted in orange" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — simplify a ratio ───────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Simplify the ratio 24:36.',
      answer: '2:3',
      checkMode: 'auto',
      correctAnswer: '2:3',
      explanation: 'HCF of 24 and 36 is 12.\n24 ÷ 12 = 2 and 36 ÷ 12 = 3.\nSimplified ratio: 2:3 ✓',
    },

    // ── Q2 Medium — divide in a ratio (two parts) ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Divide R900 in the ratio 4:5.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) First share',
          correctAnswer: 'R400',
          correctAnswers: ['R400', '400'],
          explanation: 'Total parts: 4 + 5 = 9. One part: 900 ÷ 9 = R100.\nFirst share: 4 × 100 = R400 ✓',
        },
        {
          label: 'b) Second share',
          correctAnswer: 'R500',
          correctAnswers: ['R500', '500'],
          explanation: 'Total parts: 4 + 5 = 9. One part: 900 ÷ 9 = R100.\nSecond share: 5 × 100 = R500 ✓',
        },
      ],
    },

    // ── Q3 Hard — three-way share ─────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho, Lerato and Thabo share R2 400 in the ratio 3:4:5. How much does each get?',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Sipho',
          correctAnswer: 'R600',
          correctAnswers: ['R600', '600'],
          explanation: 'Total parts: 3 + 4 + 5 = 12. One part: 2 400 ÷ 12 = R200.\nSipho: 3 × 200 = R600 ✓',
        },
        {
          label: 'b) Lerato',
          correctAnswer: 'R800',
          correctAnswers: ['R800', '800'],
          explanation: 'Total parts: 3 + 4 + 5 = 12. One part: 2 400 ÷ 12 = R200.\nLerato: 4 × 200 = R800 ✓',
        },
        {
          label: 'c) Thabo',
          correctAnswer: 'R1000',
          correctAnswers: ['R1000', '1000', 'R1 000', '1 000'],
          explanation: 'Total parts: 3 + 4 + 5 = 12. One part: 2 400 ÷ 12 = R200.\nThabo: 5 × 200 = R1 000 ✓',
        },
      ],
    },

    // ── Q4 Medium — compare ratios (self-check) ───────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Compare 2:5 and 3:7 by writing with the same first term. Which ratio is larger?',
      answer: 'LCM of 2 and 3 is 6. 2:5 becomes 6:15. 3:7 becomes 6:14. Since 15 > 14, 2:5 is the larger ratio.',
      checkMode: 'self',
    },

    // ── Q5 Easy — calculate speed ─────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A car travels 240 km in 3 hours. Find its speed.',
      answer: '80 km/h',
      checkMode: 'auto',
      correctAnswer: '80km/h',
      correctAnswers: ['80km/h', '80 km/h', '80'],
      explanation: 'Speed = Distance ÷ Time = 240 ÷ 3 = 80 km/h ✓',
    },

    // ── Q6 Medium — compare unit rates (self-check) ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'Amahle earns R1 800 for 15 hours. Thabo earns R2 240 for 16 hours. Who earns more per hour?',
      answer: 'Amahle: 1800 ÷ 15 = R120/h. Thabo: 2240 ÷ 16 = R140/h. Thabo earns more per hour.',
      checkMode: 'self',
    },

    // ── Q7 Hard — total travel time (two segments) ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato drives 280 km at a rate of 70 km/h then 150 km at 50 km/h. Find her total travel time.',
      answer: '7 hours',
      checkMode: 'auto',
      correctAnswer: '7',
      correctAnswers: ['7', '7 hours'],
      explanation: 'Time 1: 280 ÷ 70 = 4 hours.\nTime 2: 150 ÷ 50 = 3 hours.\nTotal: 4 + 3 = 7 hours ✓',
    },

    // ── Q8 Easy — unit rate and proportion ────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'If 5 pens cost R45, how much do 8 pens cost?',
      answer: 'R72',
      checkMode: 'auto',
      correctAnswer: 'R72',
      correctAnswers: ['R72', '72'],
      explanation: 'Unit rate: R45 ÷ 5 = R9 per pen.\n8 pens: 8 × 9 = R72 ✓',
    },

    // ── Q9 Medium — proportion (recipe) ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A recipe uses 4 cups of sugar for 16 cupcakes. How much sugar is needed for 28 cupcakes?',
      answer: '7 cups',
      checkMode: 'auto',
      correctAnswer: '7',
      correctAnswers: ['7', '7 cups'],
      explanation: 'Unit rate: 4 ÷ 16 = 0.25 cups per cupcake.\n28 × 0.25 = 7 cups ✓',
    },

    // ── Q10 Hard — inverse proportion reasoning (self-check) ─────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says doubling the number of workers always halves the time to complete a job. Is this true in proportion problems? Explain.',
      answer: 'This applies to inverse proportion, not direct proportion. If workers and time are inversely proportional, doubling workers does halve the time, assuming equal work rates.',
      checkMode: 'self',
    },

    // ── Q11 Hard — map scale ──────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A map has a scale of 1:50 000. If a distance on the map is 6 cm, find the actual distance in km.',
      answer: '3 km',
      checkMode: 'auto',
      correctAnswer: '3',
      correctAnswers: ['3', '3km', '3 km'],
      explanation: 'Actual distance = 6 × 50 000 = 300 000 cm.\nConvert: 300 000 cm ÷ 100 000 = 3 km ✓',
    },

    // ── Q12 Hard — ratio and quantity ─────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle mixes paint in the ratio 2:7 (blue to white). She has 3.5 litres of blue paint. How much white paint does she need?',
      answer: '12.25 litres',
      checkMode: 'auto',
      correctAnswer: '12.25',
      correctAnswers: ['12.25', '12.25 litres'],
      explanation: 'White = blue × (7 ÷ 2) = 3.5 × 3.5 = 12.25 litres ✓',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered ratio and rate.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 12, message: 'Outstanding! You have mastered ratio and rate.' },
    { minScore: 9, message: 'Great work!' },
    { minScore: 6, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
