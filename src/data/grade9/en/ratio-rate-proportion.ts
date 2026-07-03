import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ────────────────────────────────────────────────────────────
// blue   → known ratio / constant product / commission   (#2563eb)
// red    → unknown value / decreasing quantity            (#dc2626)
// green  → proportional relationship / compound interest (#16a34a)
// orange → rentals                                        (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Ratio, Rate and Proportion',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — DIRECT PROPORTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'direct-proportion',
      title: 'Direct Proportion',
      icon: '∝',
      explanation:
        `<p style="margin-bottom:16px;">Two quantities are in <strong>direct proportion</strong> if they increase or decrease at the same rate — as one increases, the other increases proportionally (their ratio stays constant). We solve direct proportion problems using the relationship y = kx, or by setting up equal ratios.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known ratio')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('unknown value')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('proportional relationship')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key relationship</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:140px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Formula</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('y')} = ${bl('k')}${gr('x')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">or</div>` +
        `<div style="text-align:center;min-width:140px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Equal ratios</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${bl('x₁')}/y₁ = ${bl('x₂')}/${re('y₂')}</p>` +
        `</div>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Solving with equal ratios — cross multiplication</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Set up')} — Write the two ratios as equal fractions: ${bl('x₁/y₁')} = ${bl('x₂')}/${re('y₂')}, where ${re('y₂')} is the unknown value.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Cross multiply')} — Multiply the numerator of each fraction by the denominator of the other: x₁ × ${re('y₂')} = x₂ × y₁.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Solve')} — Divide both sides by the known coefficient to isolate ${re('y₂')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Recognising direct proportion</p>` +
        `<p style="margin:0;color:#1e3a8a;">If you double one quantity and the other also doubles, you have ${gr('direct proportion')}. The ratio between the two quantities always stays ${bl('constant')}. Graphs of direct proportion pass through the origin and form a straight line.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'If 4 kg of apples costs R72, find the cost of 7 kg using direct proportion.',
          answer: `Cost of 7 kg = ${gr('R126')}`,
          steps: [
            `<strong>Set up equal ratios:</strong> ${bl('4/72')} = ${bl('7')}/${re('x')}. The ${bl('known ratio')} is 4 kg for R72; ${re('x')} is the cost of 7 kg.`,
            `<strong>Cross multiply:</strong> 4 × ${re('x')} = 7 × 72`,
            `4${re('x')} = 504`,
            `${re('x')} = 504 ÷ 4 = ${gr('126')}`,
            `<strong>Answer:</strong> Cost of 7 kg = ${gr('R126')} ✓`,
          ],
        },
        {
          question: 'Sipho earns R450 for 6 hours of work. Using direct proportion, find his earnings for 9 hours.',
          answer: `Sipho earns ${gr('R675')} for 9 hours`,
          steps: [
            `<strong>Set up equal ratios:</strong> ${bl('6/450')} = ${bl('9')}/${re('x')}. The ${bl('known ratio')} is 6 hours earning R450.`,
            `<strong>Cross multiply:</strong> 6 × ${re('x')} = 9 × 450`,
            `6${re('x')} = 4 050`,
            `${re('x')} = 4 050 ÷ 6 = ${gr('675')}`,
            `<strong>Answer:</strong> Sipho earns ${gr('R675')} for 9 hours ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'If 3 kg of sugar costs R45, find the cost of 5 kg using direct proportion.',
          answer: 'R75',
          checkMode: 'auto',
          correctAnswer: 'R75',
          correctAnswers: ['R75', '75'],
          explanation: 'Set up equal ratios: 3/45 = 5/x.\nCross multiply: 3x = 5 × 45 = 225.\nx = 225 ÷ 3 = 75.\nCost = R75 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Sipho earns R600 for 8 hours of work. Find his earnings for 12 hours using direct proportion.',
          answer: 'R900',
          checkMode: 'auto',
          correctAnswer: 'R900',
          correctAnswers: ['R900', '900'],
          explanation: 'Set up equal ratios: 8/600 = 12/x.\nCross multiply: 8x = 12 × 600 = 7 200.\nx = 7 200 ÷ 8 = 900.\nEarnings = R900 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Lerato says doubling the hours worked always doubles the earnings, assuming a constant hourly rate. Is she correct? Explain.',
          answer: 'Yes — this is direct proportion; if the rate per hour stays the same, doubling hours doubles total earnings.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to set up and solve direct proportion problems using equal ratios and cross multiplication" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two quantities in direct proportion with a table of values and a straight-line graph through the origin" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — INDIRECT (INVERSE) PROPORTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'indirect-proportion',
      title: 'Indirect (Inverse) Proportion',
      icon: '⇄',
      explanation:
        `<p style="margin-bottom:16px;">Two quantities are in <strong>indirect (or inverse) proportion</strong> if one increases while the other decreases at a related rate — their product stays constant. We solve using the relationship xy = k, meaning x₁y₁ = x₂y₂.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('constant product')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('increasing quantity')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('decreasing quantity')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key relationship</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:140px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Formula</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">x × y = ${bl('k')} (constant)</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">so</div>` +
        `<div style="text-align:center;min-width:140px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Equal products</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${bl('x₁')} × ${re('y₁')} = ${gr('x₂')} × ${re('y₂')}</p>` +
        `</div>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Solving inverse proportion problems</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Find the constant')} — Multiply the first pair of values: ${bl('k')} = x₁ × y₁.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Set up the equation')} — Write ${bl('k')} = ${gr('x₂')} × ${re('y₂')}, substituting the ${bl('constant')} and the ${gr('new quantity')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Solve')} — Divide the ${bl('constant')} by the ${gr('new quantity')} to find the ${re('missing value')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Direct proportion</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">As one quantity increases, the other ${gr('increases')} at the same rate.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Ratio stays constant: x₁/y₁ = x₂/y₂</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Inverse proportion</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">As one quantity increases, the other ${re('decreases')} at a related rate.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Product stays constant: x₁ × y₁ = x₂ × y₂</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Key test for inverse proportion</p>` +
        `<p style="margin:0;color:#14532d;">If you double one quantity and the other ${re('halves')}, you have inverse proportion. The ${bl('product')} of the two quantities is always the same.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: '5 workers can complete a job in 12 days. How many days would 8 workers take, assuming inverse proportion?',
          answer: `8 workers take ${gr('7.5')} days — the ${bl('constant product')} is ${bl('60')}`,
          steps: [
            `<strong>Find the constant:</strong> ${bl('k')} = x₁ × y₁ = ${bl('5')} × 12 = ${bl('60')}. This is the total amount of work.`,
            `<strong>Set up:</strong> ${bl('60')} = ${gr('8')} × ${re('y₂')}`,
            `${re('y₂')} = ${bl('60')} ÷ ${gr('8')} = ${gr('7.5')} days`,
            `<strong>Answer:</strong> 8 workers take ${gr('7.5')} days ✓`,
          ],
        },
        {
          question: "Lerato's car travels at 80 km/h and takes 6 hours for a trip. If she travels at 100 km/h instead, how long would the same trip take?",
          answer: `At 100 km/h the trip takes ${gr('4.8')} hours — the ${bl('constant')} (distance) is ${bl('480')} km`,
          steps: [
            `<strong>Find the constant:</strong> ${bl('distance')} = speed × time = ${bl('80')} × 6 = ${bl('480')} km.`,
            `<strong>Set up:</strong> ${bl('480')} = ${gr('100')} × ${re('y₂')}`,
            `${re('y₂')} = ${bl('480')} ÷ ${gr('100')} = ${gr('4.8')} hours`,
            `<strong>Answer:</strong> At 100 km/h the trip takes ${gr('4.8')} hours ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Medium',
          question: '6 workers complete a job in 10 days. How many days would 15 workers take, assuming inverse proportion?',
          answer: '4 days',
          checkMode: 'auto',
          correctAnswer: '4',
          correctAnswers: ['4', '4 days'],
          explanation: 'x₁y₁ = x₂y₂.\n6 × 10 = 15 × y₂.\n60 = 15y₂.\ny₂ = 60 ÷ 15 = 4 days ✓',
        },
        {
          difficulty: 'Hard',
          question: 'A car travels at 60 km/h and takes 5 hours for a trip. Find the time taken if it travels at 75 km/h instead.',
          answer: '4 hours',
          checkMode: 'auto',
          correctAnswer: '4',
          correctAnswers: ['4', '4 hours'],
          explanation: 'x₁y₁ = x₂y₂.\n60 × 5 = 75 × y₂.\n300 = 75y₂.\ny₂ = 300 ÷ 75 = 4 hours ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Thabo says inverse proportion means as one quantity doubles, the other also doubles. Is he correct? Explain.',
          answer: 'No — in inverse proportion, as one quantity doubles, the other halves, since their product stays constant.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to identify and solve inverse proportion problems using the constant product method" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram comparing direct and inverse proportion with tables and graphs — straight line through origin for direct, curve for inverse" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING FINANCIAL PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'financial-problems',
      title: 'Solving Financial Problems — Commission, Rentals and Compound Interest',
      icon: 'R',
      explanation:
        `<p style="margin-bottom:16px;">We extend financial problem-solving to include <strong>commission</strong> (a percentage earned on sales), <strong>rentals</strong> (regular payments for using something), and <strong>compound interest</strong>, where interest is calculated on the growing total (principal plus previous interest) rather than just the original amount.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('commission')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rentals')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('compound interest')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Three financial concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Commission</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">A percentage of total sales earned as payment.</p>` +
        `<p style="color:#1e40af;font-size:13px;font-weight:600;margin:0;">Commission = rate% × total sales</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Rentals</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">A fixed rate paid regularly for the use of an item or property.</p>` +
        `<p style="color:#c2410c;font-size:13px;font-weight:600;margin:0;">Total rental = rate × number of periods</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Compound Interest</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Interest calculated on the growing total each period.</p>` +
        `<p style="color:#15803d;font-size:13px;font-weight:600;margin:0;">Amount = P × (1 + r)ⁿ</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Compound interest step by step</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin:0 0 10px;font-size:14px;">Multiply the ${gr('growing total')} by (1 + r) each year, where r is the interest rate as a decimal:</p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:100px;padding:8px 12px;background:white;border:1.5px solid #bbf7d0;border-radius:8px;">` +
        `<p style="font-size:0.7em;font-weight:700;color:#6b7280;text-transform:uppercase;margin-bottom:2px;">Start</p>` +
        `<p style="font-size:1em;font-weight:700;margin:0;">${gr('P')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.2em;">→</div>` +
        `<div style="text-align:center;min-width:100px;padding:8px 12px;background:white;border:1.5px solid #bbf7d0;border-radius:8px;">` +
        `<p style="font-size:0.7em;font-weight:700;color:#6b7280;text-transform:uppercase;margin-bottom:2px;">Year 1</p>` +
        `<p style="font-size:1em;font-weight:700;margin:0;">${gr('P')} × (1+r)</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.2em;">→</div>` +
        `<div style="text-align:center;min-width:100px;padding:8px 12px;background:white;border:1.5px solid #bbf7d0;border-radius:8px;">` +
        `<p style="font-size:0.7em;font-weight:700;color:#6b7280;text-transform:uppercase;margin-bottom:2px;">Year 2</p>` +
        `<p style="font-size:1em;font-weight:700;margin:0;">${gr('P')} × (1+r)²</p>` +
        `</div>` +
        `</div>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Simple vs compound interest</p>` +
        `<p style="margin:0;color:#14532d;">Simple interest is always calculated on the original principal only, so the interest earned each year is the same. ${gr('Compound interest')} is calculated on the growing total, so it earns more over time — especially over many years.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo earns a 5% commission on sales of R24 000. Find his commission.',
          answer: `Commission = ${bl('R1 200')}`,
          steps: [
            `${bl('Commission')} = rate% × total sales`,
            `= 5% × 24 000`,
            `= 0.05 × 24 000`,
            `= ${bl('R1 200')} ✓`,
          ],
        },
        {
          question: 'Amahle rents equipment for R350 per week. Find the total rental cost for 6 weeks.',
          answer: `Total rental = ${or('R2 100')}`,
          steps: [
            `${or('Total rental')} = rate × number of periods`,
            `= R350 × 6`,
            `= ${or('R2 100')} ✓`,
          ],
        },
        {
          question: 'Sipho invests R5 000 at 8% compound interest per year. Find the amount after 2 years.',
          answer: `Amount after 2 years = ${gr('R5 832')}`,
          steps: [
            `After year 1: 5 000 × 1.08 = ${gr('R5 400')}`,
            `After year 2: ${gr('5 400')} × 1.08 = ${gr('R5 832')}`,
            `<strong>Answer:</strong> Amount after 2 years = ${gr('R5 832')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Amahle earns a 6% commission on sales of R18 000. Find her commission.',
          answer: 'R1 080',
          checkMode: 'auto',
          correctAnswer: 'R1080',
          correctAnswers: ['R1080', '1080', 'R1 080', '1 080'],
          explanation: 'Commission = 6% × 18 000 = 0.06 × 18 000 = R1 080 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Sipho rents a car for R420 per day. Find the total cost for 5 days.',
          answer: 'R2 100',
          checkMode: 'auto',
          correctAnswer: 'R2100',
          correctAnswers: ['R2100', '2100', 'R2 100', '2 100'],
          explanation: 'Total cost = R420 × 5 = R2 100 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Lerato invests R4 000 at 6% compound interest per year. Find the amount after 2 years.',
          answer: 'R4 494.40',
          checkMode: 'auto',
          correctAnswer: 'R4494.40',
          correctAnswers: ['R4494.40', '4494.40', 'R4 494.40', 'R4494,40'],
          explanation: 'After year 1: 4 000 × 1.06 = 4 240.\nAfter year 2: 4 240 × 1.06 = 4 494.40.\nAmount = R4 494.40 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Thabo invests R6 000 at 10% compound interest per year for 3 years. Find the final amount.',
          answer: 'Year 1: 6 000 × 1.1 = 6 600.\nYear 2: 6 600 × 1.1 = 7 260.\nYear 3: 7 260 × 1.1 = 7 986.\nFinal amount = R7 986.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'A salesperson earns 8% commission on sales of R32 000. Find the commission earned.',
          answer: 'R2 560',
          checkMode: 'auto',
          correctAnswer: 'R2560',
          correctAnswers: ['R2560', '2560', 'R2 560', '2 560'],
          explanation: 'Commission = 8% × 32 000 = 0.08 × 32 000 = R2 560 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle says compound interest always earns more than simple interest over the same period. Is she correct? Explain.',
          answer: 'Yes — compound interest earns interest on previously earned interest too, so it grows faster than simple interest, which only calculates interest on the original principal.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: '8 taps fill a tank in 6 hours. How long would 12 taps take, assuming inverse proportion?',
          answer: '4 hours',
          checkMode: 'auto',
          correctAnswer: '4',
          correctAnswers: ['4', '4 hours'],
          explanation: 'x₁y₁ = x₂y₂.\n8 × 6 = 12 × y₂.\n48 = 12y₂.\ny₂ = 48 ÷ 12 = 4 hours ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho compares simple and compound interest on R5 000 at 8% for 2 years. Find the difference between the two methods.',
          answer: 'Simple interest: 5 000 × 0.08 × 2 = 800. Total = 5 800.\nCompound interest: 5 000 × 1.08² = 5 832.\nDifference = 5 832 − 5 800 = R32.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A rental company charges R280 per week for the first 4 weeks, then offers a 10% discount on weekly rates for any additional weeks. Find the total cost for 7 weeks.',
          answer: 'First 4 weeks: 280 × 4 = 1 120.\nDiscounted rate = 280 × 0.9 = 252.\nAdditional 3 weeks: 252 × 3 = 756.\nTotal = 1 120 + 756 = R1 876.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate commission, total rental costs and compound interest step by step with worked examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram comparing simple interest (constant growth) and compound interest (growing total each year) over multiple years" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered ratio, rate and proportion.' },
    { minScore: 11, message: 'Great work! You have a strong understanding of ratio, rate and proportion. Review any missed questions and you will have it perfect.' },
    { minScore: 8, message: 'Good effort! Review the sections and worked examples, then try again.' },
    { minScore: 0, message: 'Keep going! Work through the study guide again section by section, then give it another try.' },
  ],
}
