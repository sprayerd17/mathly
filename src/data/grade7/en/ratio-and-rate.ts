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

      diagramPlaceholder: 'Visual showing R750 divided into 5 equal parts with 2 parts coloured blue for first share and 3 parts coloured red for second share',
      diagramSvg: '<svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg"><text x="95" y="15" font-size="11" text-anchor="middle" fill="#0f1f3d">Dividing R750 in the ratio 2:3</text><rect x="15" y="50" width="150" height="30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="15" y="50" width="60" height="30" fill="#93c5fd"/><rect x="75" y="50" width="90" height="30" fill="#fca5a5"/><line x1="45" y1="50" x2="45" y2="80" stroke="#0f1f3d" stroke-width="1"/><line x1="75" y1="50" x2="75" y2="80" stroke="#0f1f3d" stroke-width="1.5"/><line x1="105" y1="50" x2="105" y2="80" stroke="#0f1f3d" stroke-width="1"/><line x1="135" y1="50" x2="135" y2="80" stroke="#0f1f3d" stroke-width="1"/><text x="45" y="97" font-weight="700" font-size="11" text-anchor="middle" fill="#2563eb">R300 (2 parts)</text><text x="120" y="97" font-weight="700" font-size="11" text-anchor="middle" fill="#dc2626">R450 (3 parts)</text><text x="90" y="117" font-weight="700" font-size="12" text-anchor="middle" fill="#16a34a">Each part = R750 ÷ 5 = R150</text></svg>',
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

      diagramPlaceholder: 'Speed triangle diagram showing Distance at the top and Speed and Time at the bottom with colour coded labels',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 20,140 200,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="65" y1="80" x2="155" y2="80" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="140" x2="110" y2="80" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="58" font-weight="700" font-size="22" text-anchor="middle" fill="#2563eb">D</text><text x="110" y="72" font-size="9" text-anchor="middle" fill="#2563eb">Distance</text><text x="75" y="115" font-weight="700" font-size="22" text-anchor="middle" fill="#16a34a">S</text><text x="75" y="130" font-size="9" text-anchor="middle" fill="#16a34a">Speed</text><text x="145" y="115" font-weight="700" font-size="22" text-anchor="middle" fill="#ea580c">T</text><text x="145" y="130" font-size="9" text-anchor="middle" fill="#ea580c">Time</text><text x="110" y="158" font-size="10" text-anchor="middle" fill="#374151">Cover the letter you want to find</text></svg>',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Simplifying ratios & writing ratios from context (Easy) — positions 0-2
        { difficulty: 'Easy', question: 'Simplify the ratio 84:56.', answer: '3:2', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2'], explanation: 'HCF of 84 and 56 is 28.\n84 ÷ 28 = 3 and 56 ÷ 28 = 2.\nSimplified ratio = 3:2 ✓' },
        { difficulty: 'Easy', question: 'A netball club has 45 senior players and 30 junior players. Write the ratio of senior to junior players in simplest form.', answer: '3:2', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2'], explanation: 'HCF of 45 and 30 is 15.\n45 ÷ 15 = 3 and 30 ÷ 15 = 2.\nRatio of senior to junior players = 3:2 ✓' },
        { difficulty: 'Easy', question: 'A fruit farm has 42 orange trees, 70 lemon trees and 98 naartjie trees. Write the ratio of orange to lemon to naartjie trees in simplest form.', answer: '3:5:7', checkMode: 'auto', correctAnswer: '3:5:7', correctAnswers: ['3:5:7'], explanation: 'HCF of 42, 70 and 98 is 14.\n42 ÷ 14 = 3, 70 ÷ 14 = 5, 98 ÷ 14 = 7.\nSimplified ratio = 3:5:7 ✓' },

        // Block 2 — Equivalent ratios / finding a missing term (Easy-Medium) — positions 3-5
        { difficulty: 'Easy-Medium', question: 'Find the missing value: 5:8 = x:56', answer: '35', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', 'x = 35'], explanation: 'Find the scale factor: 56 ÷ 8 = 7.\nMultiply the first term by the same factor: 5 × 7 = 35.\nx = 35 ✓' },
        { difficulty: 'Medium', question: 'A fruit punch recipe uses juice and soda in the ratio 3:5. A caterer needs to use 45 cups of soda for a large event. How many cups of juice are needed?', answer: '27', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27 cups'], explanation: 'Ratio juice:soda = 3:5.\nScale factor = 45 ÷ 5 = 9.\nJuice needed = 3 × 9 = 27 cups ✓' },
        { difficulty: 'Medium', question: 'Which of these ratios is equivalent to 7:12 — 21:36 or 21:35?', answer: '21:36', checkMode: 'auto', correctAnswer: '21:36', correctAnswers: ['21:36', '21:36 only'], explanation: 'Multiply both parts of 7:12 by 3: 7 × 3 = 21 and 12 × 3 = 36.\nSo 21:36 = 7:12.\n21:35 is not equivalent since 35 ÷ 12 is not a whole-number scale factor match.\n21:36 is equivalent to 7:12 ✓' },

        // Block 3 — Sharing a quantity in a ratio: 2-part (Medium) — positions 6-8
        { difficulty: 'Medium', question: 'Divide R1 560 in the ratio 5:8.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) First share', correctAnswer: 'R600', correctAnswers: ['R600', '600'], explanation: 'Total parts = 5 + 8 = 13.\nOne part = R1 560 ÷ 13 = R120.\nFirst share = 5 × R120 = R600 ✓' },
          { label: 'b) Second share', correctAnswer: 'R960', correctAnswers: ['R960', '960'], explanation: 'Total parts = 5 + 8 = 13.\nOne part = R1 560 ÷ 13 = R120.\nSecond share = 8 × R120 = R960 ✓\nCheck: R600 + R960 = R1 560 ✓' },
        ] },
        { difficulty: 'Medium', question: 'A tailor has 130 m of fabric to divide between Grade 7A and Grade 7B for a sewing project, in the ratio 7:6. How many metres does each class receive?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Grade 7A', correctAnswer: '70', correctAnswers: ['70', '70m', '70 m'], explanation: 'Total parts = 7 + 6 = 13.\nOne part = 130 ÷ 13 = 10 m.\nGrade 7A = 7 × 10 = 70 m ✓' },
          { label: 'b) Grade 7B', correctAnswer: '60', correctAnswers: ['60', '60m', '60 m'], explanation: 'Total parts = 7 + 6 = 13.\nOne part = 130 ÷ 13 = 10 m.\nGrade 7B = 6 × 10 = 60 m ✓\nCheck: 70 + 60 = 130 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Two workshops share a delivery of chairs in the ratio 5:4. The workshop with the smaller share receives 68 chairs. How many chairs were delivered altogether?', answer: '153', checkMode: 'auto', correctAnswer: '153', correctAnswers: ['153'], explanation: 'The smaller share corresponds to the "4" part of the ratio.\nOne part = 68 ÷ 4 = 17.\nTotal parts = 5 + 4 = 9.\nTotal chairs = 9 × 17 = 153 ✓\nCheck: shares are 5 × 17 = 85 and 4 × 17 = 68, and 85 + 68 = 153 ✓' },

        // Block 4 — Sharing a quantity in a ratio: 3-part (Medium-Hard) — positions 9-11
        { difficulty: 'Medium', question: 'Divide R3 600 in the ratio 4:5:9.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) First share', correctAnswer: 'R800', correctAnswers: ['R800', '800'], explanation: 'Total parts = 4 + 5 + 9 = 18.\nOne part = R3 600 ÷ 18 = R200.\nFirst share = 4 × R200 = R800 ✓' },
          { label: 'b) Second share', correctAnswer: 'R1000', correctAnswers: ['R1000', '1000', 'R1 000', '1 000'], explanation: 'Total parts = 4 + 5 + 9 = 18.\nOne part = R3 600 ÷ 18 = R200.\nSecond share = 5 × R200 = R1 000 ✓' },
          { label: 'c) Third share', correctAnswer: 'R1800', correctAnswers: ['R1800', '1800', 'R1 800', '1 800'], explanation: 'Total parts = 4 + 5 + 9 = 18.\nOne part = R3 600 ÷ 18 = R200.\nThird share = 9 × R200 = R1 800 ✓\nCheck: R800 + R1 000 + R1 800 = R3 600 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Three business partners, Naledi, Kagiso and Refiloe, share a profit of R4 800 in the ratio 3:5:4 based on how much each invested. How much does each partner receive?', answer: '', checkMode: 'auto', parts: [
          { label: "a) Naledi's share", correctAnswer: 'R1200', correctAnswers: ['R1200', '1200', 'R1 200', '1 200'], explanation: 'Total parts = 3 + 5 + 4 = 12.\nOne part = R4 800 ÷ 12 = R400.\nNaledi = 3 × R400 = R1 200 ✓' },
          { label: "b) Kagiso's share", correctAnswer: 'R2000', correctAnswers: ['R2000', '2000', 'R2 000', '2 000'], explanation: 'Total parts = 3 + 5 + 4 = 12.\nOne part = R4 800 ÷ 12 = R400.\nKagiso = 5 × R400 = R2 000 ✓' },
          { label: "c) Refiloe's share", correctAnswer: 'R1600', correctAnswers: ['R1600', '1600', 'R1 600', '1 600'], explanation: 'Total parts = 3 + 5 + 4 = 12.\nOne part = R4 800 ÷ 12 = R400.\nRefiloe = 4 × R400 = R1 600 ✓\nCheck: R1 200 + R2 000 + R1 600 = R4 800 ✓' },
        ] },
        { difficulty: 'Hard', question: 'A learner divides R1 200 in the ratio 2:3:5 and writes: "Total parts = 2 + 3 + 5 = 10, one part = R1 200 ÷ 10 = R120, so the shares are R120, R360 and R600." Check whether the shares actually add up to R1 200, and correct any error.', answer: 'The one part value (R120) is correct, but the shares were multiplied incorrectly. The correct shares are 2 × R120 = R240, 3 × R120 = R360, and 5 × R120 = R600. Check: R240 + R360 + R600 = R1 200 ✓. The learner made an error on the first share only — R120 should have been R240.', checkMode: 'self' },

        // Block 5 — Unit rate & rate word problems, incl. best-buy comparisons (Medium) — positions 12-15
        { difficulty: 'Medium', question: 'A weather balloon rises 522 m in 6 minutes at a steady rate. What is its rate of ascent in metres per minute?', answer: '87 m/min', checkMode: 'auto', correctAnswer: '87', correctAnswers: ['87', '87m/min', '87 m/min', '87 metres per minute'], explanation: 'Rate = distance ÷ time.\n522 ÷ 6 = 87 m/min ✓' },
        { difficulty: 'Medium', question: 'A shop sells rice in two sizes: a 2.5 kg bag for R87.50 and a 4 kg bag for R128. Which bag gives the cheaper price per kilogram?', answer: '4 kg bag', checkMode: 'auto', correctAnswer: '4 kg bag', correctAnswers: ['4 kg bag', 'the 4 kg bag', '4kg bag', 'second bag', '4 kg'], explanation: '2.5 kg bag: R87.50 ÷ 2.5 = R35 per kg.\n4 kg bag: R128 ÷ 4 = R32 per kg.\nR32 is less than R35, so the 4 kg bag gives the cheaper price per kilogram ✓' },
        { difficulty: 'Medium', question: 'Zanele types 342 words in 6 minutes at a constant speed. At this rate, how many words could she type in 10 minutes?', answer: '570', checkMode: 'auto', correctAnswer: '570', correctAnswers: ['570', '570 words'], explanation: 'Unit rate = 342 ÷ 6 = 57 words per minute.\nIn 10 minutes: 57 × 10 = 570 words ✓' },
        { difficulty: 'Medium', question: 'A learner compares two internet deals: Deal A gives 15 GB for R225, Deal B gives 24 GB for R336. They conclude Deal A is cheaper because R225 is a smaller total price. Explain why this reasoning is flawed and state which deal actually offers better value.', answer: 'Comparing total prices alone is misleading because the deals offer different amounts of data. We need the price per GB (unit rate) to compare fairly: Deal A = R225 ÷ 15 = R15 per GB, Deal B = R336 ÷ 24 = R14 per GB. Since R14 is less than R15, Deal B actually offers better value per GB, even though its total price is higher.', checkMode: 'self' },

        // Block 6 — Direct proportion reasoning & multi-step/map-scale word problems (Hard) — positions 16-19
        { difficulty: 'Hard', question: '4 identical machines produce 560 bricks in one shift, all working at the same constant rate. Assuming direct proportion, how many bricks would 7 of these machines produce in one shift?', answer: '980', checkMode: 'auto', correctAnswer: '980', correctAnswers: ['980', '980 bricks'], explanation: 'Bricks and machines are in direct proportion (same rate per machine).\nUnit rate = 560 ÷ 4 = 140 bricks per machine.\n7 machines: 7 × 140 = 980 bricks ✓' },
        { difficulty: 'Hard', question: 'A map is drawn to a scale of 1:25 000. The distance between two towns on the map is 8.4 cm. Find the actual distance between the towns in kilometres.', answer: '2.1 km', checkMode: 'auto', correctAnswer: '2.1', correctAnswers: ['2.1', '2.1km', '2.1 km'], explanation: 'Actual distance = 8.4 × 25 000 = 210 000 cm.\nConvert to km: 210 000 ÷ 100 000 = 2.1 km ✓' },
        { difficulty: 'Hard', question: "Mr Dlamini's bakkie uses 8.4 litres of petrol for every 100 km travelled. Petrol costs R21.50 per litre. How much will the petrol cost for a 350 km trip?", answer: 'R632.10', checkMode: 'auto', correctAnswer: 'R632.10', correctAnswers: ['R632.10', '632.10', '632.1', 'R632.1'], explanation: 'Petrol needed = (8.4 ÷ 100) × 350 = 29.4 litres.\nCost = 29.4 × R21.50 = R632.10 ✓' },
        { difficulty: 'Hard', question: 'A recipe for 12 muffins uses 180 g of flour and 90 g of sugar. Zola wants to make 30 muffins using the same recipe proportions. How many grams of flour and how many grams of sugar does she need?', answer: 'Scale factor = 30 ÷ 12 = 2.5.\nFlour: 180 × 2.5 = 450 g.\nSugar: 90 × 2.5 = 225 g.\nZola needs 450 g of flour and 225 g of sugar.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered ratios, equivalent ratios, sharing in a ratio, rates and proportion.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit sharing a quantity in a ratio and unit rates, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Simplifying ratios & writing ratios from context (Easy) — positions 0-2
        { difficulty: 'Easy', question: 'Simplify the ratio 108:72.', answer: '3:2', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2'], explanation: 'HCF of 108 and 72 is 36.\n108 ÷ 36 = 3 and 72 ÷ 36 = 2.\nSimplified ratio = 3:2 ✓' },
        { difficulty: 'Easy', question: 'A hockey club has 60 senior members and 40 junior members. Write the ratio of senior to junior members in simplest form.', answer: '3:2', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2'], explanation: 'HCF of 60 and 40 is 20.\n60 ÷ 20 = 3 and 40 ÷ 20 = 2.\nRatio of senior to junior members = 3:2 ✓' },
        { difficulty: 'Easy', question: 'A community garden has 54 tomato plants, 90 bean plants and 126 spinach plants. Write the ratio of tomato to bean to spinach plants in simplest form.', answer: '3:5:7', checkMode: 'auto', correctAnswer: '3:5:7', correctAnswers: ['3:5:7'], explanation: 'HCF of 54, 90 and 126 is 18.\n54 ÷ 18 = 3, 90 ÷ 18 = 5, 126 ÷ 18 = 7.\nSimplified ratio = 3:5:7 ✓' },

        // Block 2 — Equivalent ratios / finding a missing term (Easy-Medium) — positions 3-5
        { difficulty: 'Easy-Medium', question: 'Find the missing value: 4:9 = x:63', answer: '28', checkMode: 'auto', correctAnswer: '28', correctAnswers: ['28', 'x = 28'], explanation: 'Find the scale factor: 63 ÷ 9 = 7.\nMultiply the first term by the same factor: 4 × 7 = 28.\nx = 28 ✓' },
        { difficulty: 'Medium', question: 'A paint mixture uses blue paint and white paint in the ratio 5:8. A decorator needs to use 40 litres of blue paint for a large wall. How many litres of white paint are needed?', answer: '64', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64', '64 litres', '64L'], explanation: 'Ratio blue:white = 5:8.\nScale factor = 40 ÷ 5 = 8.\nWhite paint needed = 8 × 8 = 64 litres ✓' },
        { difficulty: 'Medium', question: 'Which of these ratios is equivalent to 9:15 — 27:45 or 27:40?', answer: '27:45', checkMode: 'auto', correctAnswer: '27:45', correctAnswers: ['27:45', '27:45 only'], explanation: 'Multiply both parts of 9:15 by 3: 9 × 3 = 27 and 15 × 3 = 45.\nSo 27:45 = 9:15.\n27:40 is not equivalent since 40 ÷ 15 is not a whole-number scale factor match.\n27:45 is equivalent to 9:15 ✓' },

        // Block 3 — Sharing a quantity in a ratio: 2-part (Medium) — positions 6-8
        { difficulty: 'Medium', question: 'Divide R1 350 in the ratio 4:5.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) First share', correctAnswer: 'R600', correctAnswers: ['R600', '600'], explanation: 'Total parts = 4 + 5 = 9.\nOne part = R1 350 ÷ 9 = R150.\nFirst share = 4 × R150 = R600 ✓' },
          { label: 'b) Second share', correctAnswer: 'R750', correctAnswers: ['R750', '750'], explanation: 'Total parts = 4 + 5 = 9.\nOne part = R1 350 ÷ 9 = R150.\nSecond share = 5 × R150 = R750 ✓\nCheck: R600 + R750 = R1 350 ✓' },
        ] },
        { difficulty: 'Medium', question: 'A printing company has 154 m of banner material to divide between two orders, in the ratio 8:3. How many metres does each order receive?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) First order', correctAnswer: '112', correctAnswers: ['112', '112m', '112 m'], explanation: 'Total parts = 8 + 3 = 11.\nOne part = 154 ÷ 11 = 14 m.\nFirst order = 8 × 14 = 112 m ✓' },
          { label: 'b) Second order', correctAnswer: '42', correctAnswers: ['42', '42m', '42 m'], explanation: 'Total parts = 8 + 3 = 11.\nOne part = 154 ÷ 11 = 14 m.\nSecond order = 3 × 14 = 42 m ✓\nCheck: 112 + 42 = 154 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Two food stalls share a bulk order of bottled water in the ratio 8:3. The stall with the larger share receives 136 bottles. How many bottles were ordered altogether?', answer: '187', checkMode: 'auto', correctAnswer: '187', correctAnswers: ['187'], explanation: 'The larger share corresponds to the "8" part of the ratio.\nOne part = 136 ÷ 8 = 17.\nTotal parts = 8 + 3 = 11.\nTotal bottles = 11 × 17 = 187 ✓' },

        // Block 4 — Sharing a quantity in a ratio: 3-part (Medium-Hard) — positions 9-11
        { difficulty: 'Medium', question: 'Divide R4 200 in the ratio 3:4:7.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) First share', correctAnswer: 'R900', correctAnswers: ['R900', '900'], explanation: 'Total parts = 3 + 4 + 7 = 14.\nOne part = R4 200 ÷ 14 = R300.\nFirst share = 3 × R300 = R900 ✓' },
          { label: 'b) Second share', correctAnswer: 'R1200', correctAnswers: ['R1200', '1200', 'R1 200', '1 200'], explanation: 'Total parts = 3 + 4 + 7 = 14.\nOne part = R4 200 ÷ 14 = R300.\nSecond share = 4 × R300 = R1 200 ✓' },
          { label: 'c) Third share', correctAnswer: 'R2100', correctAnswers: ['R2100', '2100', 'R2 100', '2 100'], explanation: 'Total parts = 3 + 4 + 7 = 14.\nOne part = R4 200 ÷ 14 = R300.\nThird share = 7 × R300 = R2 100 ✓\nCheck: R900 + R1 200 + R2 100 = R4 200 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Three business partners, Bongani, Precious and Sibusiso, share a profit of R5 400 in the ratio 3:2:4 based on how much each invested. How much does each partner receive?', answer: '', checkMode: 'auto', parts: [
          { label: "a) Bongani's share", correctAnswer: 'R1800', correctAnswers: ['R1800', '1800', 'R1 800', '1 800'], explanation: 'Total parts = 3 + 2 + 4 = 9.\nOne part = R5 400 ÷ 9 = R600.\nBongani = 3 × R600 = R1 800 ✓' },
          { label: "b) Precious's share", correctAnswer: 'R1200', correctAnswers: ['R1200', '1200', 'R1 200', '1 200'], explanation: 'Total parts = 3 + 2 + 4 = 9.\nOne part = R5 400 ÷ 9 = R600.\nPrecious = 2 × R600 = R1 200 ✓' },
          { label: "c) Sibusiso's share", correctAnswer: 'R2400', correctAnswers: ['R2400', '2400', 'R2 400', '2 400'], explanation: 'Total parts = 3 + 2 + 4 = 9.\nOne part = R5 400 ÷ 9 = R600.\nSibusiso = 4 × R600 = R2 400 ✓\nCheck: R1 800 + R1 200 + R2 400 = R5 400 ✓' },
        ] },
        { difficulty: 'Hard', question: 'A learner divides R2 400 in the ratio 3:5:4 and writes: "Total parts = 3 + 5 + 4 = 12, one part = R2 400 ÷ 12 = R200, so the shares are R600, R1 000 and R800." Check whether the shares actually add up to R2 400, and correct any error.', answer: 'The one part value (R200) is correct, and the shares are also correct: 3 × R200 = R600, 5 × R200 = R1 000, and 4 × R200 = R800. Check: R600 + R1 000 + R800 = R2 400 ✓. The learner made no error — the working and the shares are all correct.', checkMode: 'self' },

        // Block 5 — Unit rate & rate word problems, incl. best-buy comparisons (Medium) — positions 12-15
        { difficulty: 'Medium', question: 'A drone rises 456 m in 8 minutes at a steady rate. What is its rate of ascent in metres per minute?', answer: '57 m/min', checkMode: 'auto', correctAnswer: '57', correctAnswers: ['57', '57m/min', '57 m/min', '57 metres per minute'], explanation: 'Rate = distance ÷ time.\n456 ÷ 8 = 57 m/min ✓' },
        { difficulty: 'Medium', question: 'A shop sells fruit juice in two sizes: a 1.5 L bottle for R34.50 and a 2 L bottle for R42. Which bottle gives the cheaper price per litre?', answer: '2 L bottle', checkMode: 'auto', correctAnswer: '2 L bottle', correctAnswers: ['2 L bottle', 'the 2 L bottle', '2L bottle', 'second bottle', '2 L'], explanation: '1.5 L bottle: R34.50 ÷ 1.5 = R23 per litre.\n2 L bottle: R42 ÷ 2 = R21 per litre.\nR21 is less than R23, so the 2 L bottle gives the cheaper price per litre ✓' },
        { difficulty: 'Medium', question: 'A printer prints 189 pages in 7 minutes at a constant speed. At this rate, how many pages could it print in 12 minutes?', answer: '324', checkMode: 'auto', correctAnswer: '324', correctAnswers: ['324', '324 pages'], explanation: 'Unit rate = 189 ÷ 7 = 27 pages per minute.\nIn 12 minutes: 27 × 12 = 324 pages ✓' },
        { difficulty: 'Medium', question: 'A learner compares two data deals: Deal A gives 12 GB for R216, Deal B gives 20 GB for R320. They conclude Deal A is cheaper because R216 is a smaller total price. Explain why this reasoning is flawed and state which deal actually offers better value.', answer: 'Comparing total prices alone is misleading because the deals offer different amounts of data. We need the price per GB (unit rate) to compare fairly: Deal A = R216 ÷ 12 = R18 per GB, Deal B = R320 ÷ 20 = R16 per GB. Since R16 is less than R18, Deal B actually offers better value per GB, even though its total price is higher.', checkMode: 'self' },

        // Block 6 — Direct proportion reasoning & multi-step/map-scale word problems (Hard) — positions 16-19
        { difficulty: 'Hard', question: '5 identical painters can paint 240 square metres of wall in one day, all working at the same constant rate. Assuming direct proportion, how many square metres could 8 of these painters paint in one day?', answer: '384', checkMode: 'auto', correctAnswer: '384', correctAnswers: ['384', '384 square metres', '384 m²'], explanation: 'Area painted and number of painters are in direct proportion (same rate per painter).\nUnit rate = 240 ÷ 5 = 48 square metres per painter.\n8 painters: 8 × 48 = 384 square metres ✓' },
        { difficulty: 'Hard', question: 'A map is drawn to a scale of 1:20 000. The distance between two schools on the map is 12 cm. Find the actual distance between the schools in kilometres.', answer: '2.4 km', checkMode: 'auto', correctAnswer: '2.4', correctAnswers: ['2.4', '2.4km', '2.4 km'], explanation: 'Actual distance = 12 × 20 000 = 240 000 cm.\nConvert to km: 240 000 ÷ 100 000 = 2.4 km ✓' },
        { difficulty: 'Hard', question: "Mrs Nkosi's car uses 7.5 litres of petrol for every 100 km travelled. Petrol costs R22.80 per litre. How much will the petrol cost for a 420 km trip?", answer: 'R718.20', checkMode: 'auto', correctAnswer: 'R718.20', correctAnswers: ['R718.20', '718.20', '718.2', 'R718.2'], explanation: 'Petrol needed = (7.5 ÷ 100) × 420 = 31.5 litres.\nCost = 31.5 × R22.80 = R718.20 ✓' },
        { difficulty: 'Hard', question: 'A recipe for 15 cupcakes uses 225 g of flour and 75 g of butter. Kabelo wants to make 24 cupcakes using the same recipe proportions. How many grams of flour and how many grams of butter does he need?', answer: 'Scale factor = 24 ÷ 15 = 1.6.\nFlour: 225 × 1.6 = 360 g.\nButter: 75 × 1.6 = 120 g.\nKabelo needs 360 g of flour and 120 g of butter.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered ratios, equivalent ratios, sharing in a ratio, rates and proportion.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit sharing a quantity in a ratio and unit rates, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Simplifying ratios & writing ratios from context (Easy) — positions 0-2
        { difficulty: 'Easy', question: 'Simplify the ratio 96:64.', answer: '3:2', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2'], explanation: 'HCF of 96 and 64 is 32.\n96 ÷ 32 = 3 and 64 ÷ 32 = 2.\nSimplified ratio = 3:2 ✓' },
        { difficulty: 'Easy', question: 'A cricket club has 75 senior members and 50 junior members. Write the ratio of senior to junior members in simplest form.', answer: '3:2', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2'], explanation: 'HCF of 75 and 50 is 25.\n75 ÷ 25 = 3 and 50 ÷ 25 = 2.\nRatio of senior to junior members = 3:2 ✓' },
        { difficulty: 'Easy', question: 'A nursery has 33 rose bushes, 55 hydrangea bushes and 77 fern plants. Write the ratio of rose to hydrangea to fern plants in simplest form.', answer: '3:5:7', checkMode: 'auto', correctAnswer: '3:5:7', correctAnswers: ['3:5:7'], explanation: 'HCF of 33, 55 and 77 is 11.\n33 ÷ 11 = 3, 55 ÷ 11 = 5, 77 ÷ 11 = 7.\nSimplified ratio = 3:5:7 ✓' },

        // Block 2 — Equivalent ratios / finding a missing term (Easy-Medium) — positions 3-5
        { difficulty: 'Easy-Medium', question: 'Find the missing value: 6:11 = x:77', answer: '42', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', 'x = 42'], explanation: 'Find the scale factor: 77 ÷ 11 = 7.\nMultiply the first term by the same factor: 6 × 7 = 42.\nx = 42 ✓' },
        { difficulty: 'Medium', question: 'A cordial mixture uses water and juice concentrate in the ratio 7:2. A caterer needs to use 18 cups of juice concentrate for a large batch. How many cups of water are needed?', answer: '63', checkMode: 'auto', correctAnswer: '63', correctAnswers: ['63', '63 cups'], explanation: 'Ratio water:juice = 7:2.\nScale factor = 18 ÷ 2 = 9.\nWater needed = 7 × 9 = 63 cups ✓' },
        { difficulty: 'Medium', question: 'Which of these ratios is equivalent to 8:14 — 32:56 or 32:50?', answer: '32:56', checkMode: 'auto', correctAnswer: '32:56', correctAnswers: ['32:56', '32:56 only'], explanation: 'Multiply both parts of 8:14 by 4: 8 × 4 = 32 and 14 × 4 = 56.\nSo 32:56 = 8:14.\n32:50 is not equivalent since 50 ÷ 14 is not a whole-number scale factor match.\n32:56 is equivalent to 8:14 ✓' },

        // Block 3 — Sharing a quantity in a ratio: 2-part (Medium) — positions 6-8
        { difficulty: 'Medium', question: 'Divide R2 100 in the ratio 7:5.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) First share', correctAnswer: 'R1225', correctAnswers: ['R1225', '1225', 'R1 225', '1 225'], explanation: 'Total parts = 7 + 5 = 12.\nOne part = R2 100 ÷ 12 = R175.\nFirst share = 7 × R175 = R1 225 ✓' },
          { label: 'b) Second share', correctAnswer: 'R875', correctAnswers: ['R875', '875'], explanation: 'Total parts = 7 + 5 = 12.\nOne part = R2 100 ÷ 12 = R175.\nSecond share = 5 × R175 = R875 ✓\nCheck: R1 225 + R875 = R2 100 ✓' },
        ] },
        { difficulty: 'Medium', question: 'A hardware store has 121 m of rope to divide between two orders, in the ratio 7:4. How many metres does each order receive?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) First order', correctAnswer: '77', correctAnswers: ['77', '77m', '77 m'], explanation: 'Total parts = 7 + 4 = 11.\nOne part = 121 ÷ 11 = 11 m.\nFirst order = 7 × 11 = 77 m ✓' },
          { label: 'b) Second order', correctAnswer: '44', correctAnswers: ['44', '44m', '44 m'], explanation: 'Total parts = 7 + 4 = 11.\nOne part = 121 ÷ 11 = 11 m.\nSecond order = 4 × 11 = 44 m ✓\nCheck: 77 + 44 = 121 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Two clinics share a delivery of face masks in the ratio 9:4. The clinic with the smaller share receives 52 boxes. How many boxes were delivered altogether?', answer: '169', checkMode: 'auto', correctAnswer: '169', correctAnswers: ['169'], explanation: 'The smaller share corresponds to the "4" part of the ratio.\nOne part = 52 ÷ 4 = 13.\nTotal parts = 9 + 4 = 13.\nTotal boxes = 13 × 13 = 169 ✓' },

        // Block 4 — Sharing a quantity in a ratio: 3-part (Medium-Hard) — positions 9-11
        { difficulty: 'Medium', question: 'Divide R3 900 in the ratio 2:5:6.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) First share', correctAnswer: 'R600', correctAnswers: ['R600', '600'], explanation: 'Total parts = 2 + 5 + 6 = 13.\nOne part = R3 900 ÷ 13 = R300.\nFirst share = 2 × R300 = R600 ✓' },
          { label: 'b) Second share', correctAnswer: 'R1500', correctAnswers: ['R1500', '1500', 'R1 500', '1 500'], explanation: 'Total parts = 2 + 5 + 6 = 13.\nOne part = R3 900 ÷ 13 = R300.\nSecond share = 5 × R300 = R1 500 ✓' },
          { label: 'c) Third share', correctAnswer: 'R1800', correctAnswers: ['R1800', '1800', 'R1 800', '1 800'], explanation: 'Total parts = 2 + 5 + 6 = 13.\nOne part = R3 900 ÷ 13 = R300.\nThird share = 6 × R300 = R1 800 ✓\nCheck: R600 + R1 500 + R1 800 = R3 900 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Three business partners, Palesa, Given and Onthatile, share a profit of R6 600 in the ratio 5:4:2 based on how much each invested. How much does each partner receive?', answer: '', checkMode: 'auto', parts: [
          { label: "a) Palesa's share", correctAnswer: 'R3000', correctAnswers: ['R3000', '3000', 'R3 000', '3 000'], explanation: 'Total parts = 5 + 4 + 2 = 11.\nOne part = R6 600 ÷ 11 = R600.\nPalesa = 5 × R600 = R3 000 ✓' },
          { label: "b) Given's share", correctAnswer: 'R2400', correctAnswers: ['R2400', '2400', 'R2 400', '2 400'], explanation: 'Total parts = 5 + 4 + 2 = 11.\nOne part = R6 600 ÷ 11 = R600.\nGiven = 4 × R600 = R2 400 ✓' },
          { label: "c) Onthatile's share", correctAnswer: 'R1200', correctAnswers: ['R1200', '1200', 'R1 200', '1 200'], explanation: 'Total parts = 5 + 4 + 2 = 11.\nOne part = R6 600 ÷ 11 = R600.\nOnthatile = 2 × R600 = R1 200 ✓\nCheck: R3 000 + R2 400 + R1 200 = R6 600 ✓' },
        ] },
        { difficulty: 'Hard', question: 'A learner divides R1 800 in the ratio 4:3:2 and writes: "Total parts = 4 + 3 + 2 = 9, one part = R1 800 ÷ 9 = R200, so the shares are R800, R600 and R400." Check whether the shares actually add up to R1 800, and correct any error.', answer: 'The one part value (R200) is correct: 4 × R200 = R800, 3 × R200 = R600, and 2 × R200 = R400. Check: R800 + R600 + R400 = R1 800 ✓. The learner made no error — all three shares and the total are correct.', checkMode: 'self' },

        // Block 5 — Unit rate & rate word problems, incl. best-buy comparisons (Medium) — positions 12-15
        { difficulty: 'Medium', question: "A hiker's resting heart rate is measured at 522 beats over 6 minutes. What is this rate in beats per minute?", answer: '87 beats/min', checkMode: 'auto', correctAnswer: '87', correctAnswers: ['87', '87 beats/min', '87 beats per minute'], explanation: 'Rate = total beats ÷ time.\n522 ÷ 6 = 87 beats per minute ✓' },
        { difficulty: 'Medium', question: 'A shop sells washing powder in two sizes: a 3 kg box for R148.50 and a 5 kg box for R230. Which box gives the cheaper price per kilogram?', answer: '5 kg box', checkMode: 'auto', correctAnswer: '5 kg box', correctAnswers: ['5 kg box', 'the 5 kg box', '5kg box', 'second box', '5 kg'], explanation: '3 kg box: R148.50 ÷ 3 = R49.50 per kg.\n5 kg box: R230 ÷ 5 = R46 per kg.\nR46 is less than R49.50, so the 5 kg box gives the cheaper price per kilogram ✓' },
        { difficulty: 'Medium', question: 'A factory machine stitches 522 shirts in 6 hours at a constant rate. At this rate, how many shirts could it stitch in 9 hours?', answer: '783', checkMode: 'auto', correctAnswer: '783', correctAnswers: ['783', '783 shirts'], explanation: 'Unit rate = 522 ÷ 6 = 87 shirts per hour.\nIn 9 hours: 87 × 9 = 783 shirts ✓' },
        { difficulty: 'Medium', question: 'A learner compares two airtime bundles: Bundle A gives 18 GB for R270, Bundle B gives 25 GB for R350. They conclude Bundle A is cheaper because R270 is a smaller total price. Explain why this reasoning is flawed and state which bundle actually offers better value.', answer: 'Comparing total prices alone is misleading because the bundles offer different amounts of data. We need the price per GB (unit rate) to compare fairly: Bundle A = R270 ÷ 18 = R15 per GB, Bundle B = R350 ÷ 25 = R14 per GB. Since R14 is less than R15, Bundle B actually offers better value per GB, even though its total price is higher.', checkMode: 'self' },

        // Block 6 — Direct proportion reasoning & multi-step/map-scale word problems (Hard) — positions 16-19
        { difficulty: 'Hard', question: '6 identical bakers can bake 450 loaves of bread in one shift, all working at the same constant rate. Assuming direct proportion, how many loaves could 9 of these bakers bake in one shift?', answer: '675', checkMode: 'auto', correctAnswer: '675', correctAnswers: ['675', '675 loaves'], explanation: 'Loaves baked and number of bakers are in direct proportion (same rate per baker).\nUnit rate = 450 ÷ 6 = 75 loaves per baker.\n9 bakers: 9 × 75 = 675 loaves ✓' },
        { difficulty: 'Hard', question: 'A map is drawn to a scale of 1:40 000. The distance between two dams on the map is 5.5 cm. Find the actual distance between the dams in kilometres.', answer: '2.2 km', checkMode: 'auto', correctAnswer: '2.2', correctAnswers: ['2.2', '2.2km', '2.2 km'], explanation: 'Actual distance = 5.5 × 40 000 = 220 000 cm.\nConvert to km: 220 000 ÷ 100 000 = 2.2 km ✓' },
        { difficulty: 'Hard', question: "Mr Botha's truck uses 9 litres of diesel for every 100 km travelled. Diesel costs R23.40 per litre. How much will the diesel cost for a 250 km trip?", answer: 'R526.50', checkMode: 'auto', correctAnswer: 'R526.50', correctAnswers: ['R526.50', '526.50', '526.5', 'R526.5'], explanation: 'Diesel needed = (9 ÷ 100) × 250 = 22.5 litres.\nCost = 22.5 × R23.40 = R526.50 ✓' },
        { difficulty: 'Hard', question: 'A recipe for 20 biscuits uses 300 g of flour and 100 g of butter. Naledi wants to make 16 biscuits using the same recipe proportions. How many grams of flour and how many grams of butter does she need?', answer: 'Scale factor = 16 ÷ 20 = 0.8.\nFlour: 300 × 0.8 = 240 g.\nButter: 100 × 0.8 = 80 g.\nNaledi needs 240 g of flour and 80 g of butter.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered ratios, equivalent ratios, sharing in a ratio, rates and proportion.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit sharing a quantity in a ratio and unit rates, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
