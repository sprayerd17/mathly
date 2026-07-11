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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs) — no diagrams, pure word-problem/numeric content
    // Block 1 (0-2):   Simplifying ratios to simplest form
    // Block 2 (3-6):   Sharing an amount in a given ratio
    // Block 3 (7-10):  Direct proportion word problems
    // Block 4 (11-13): Indirect (inverse) proportion word problems
    // Block 5 (14-16): Rate problems (unit rate, speed/distance/time)
    // Block 6 (17-19): Scale/map problems and a combined multi-step problem
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Simplifying ratios (Easy)
        { difficulty: 'Easy', question: 'Simplify the ratio 24 : 36 to its simplest form.', checkMode: 'auto', correctAnswer: '2:3', correctAnswers: ['2:3', '2 : 3'], answer: '2 : 3', explanation: 'HCF of 24 and 36 is 12.\n24 ÷ 12 = 2 and 36 ÷ 12 = 3.\nSimplest form: 2 : 3' },
        { difficulty: 'Easy', question: 'Simplify the ratio 18 : 42 to its simplest form.', checkMode: 'auto', correctAnswer: '3:7', correctAnswers: ['3:7', '3 : 7'], answer: '3 : 7', explanation: 'HCF of 18 and 42 is 6.\n18 ÷ 6 = 3 and 42 ÷ 6 = 7.\nSimplest form: 3 : 7' },
        { difficulty: 'Easy', question: 'Simplify the ratio 150 : 90 to its simplest form.', checkMode: 'auto', correctAnswer: '5:3', correctAnswers: ['5:3', '5 : 3'], answer: '5 : 3', explanation: 'HCF of 150 and 90 is 30.\n150 ÷ 30 = 5 and 90 ÷ 30 = 3.\nSimplest form: 5 : 3' },

        // Block 2 — Sharing an amount in a given ratio (Medium)
        { difficulty: 'Medium', question: 'Share R360 between Thabo and Lerato in the ratio 4 : 5. Find Thabo\'s share.', checkMode: 'auto', correctAnswer: 'R160', correctAnswers: ['R160', '160'], answer: 'R160', explanation: 'Total parts = 4 + 5 = 9.\nValue of 1 part = 360 ÷ 9 = R40.\nThabo\'s share = 4 × R40 = R160' },
        { difficulty: 'Medium', question: 'Share R600 between three friends in the ratio 2 : 3 : 5. Find the largest share.', checkMode: 'auto', correctAnswer: 'R300', correctAnswers: ['R300', '300'], answer: 'R300', explanation: 'Total parts = 2 + 3 + 5 = 10.\nValue of 1 part = 600 ÷ 10 = R60.\nLargest share = 5 × R60 = R300' },
        { difficulty: 'Medium', question: 'Share R200 between Sipho and Amahle in the ratio 3 : 5. Find Amahle\'s share.', checkMode: 'auto', correctAnswer: 'R125', correctAnswers: ['R125', '125'], answer: 'R125', explanation: 'Total parts = 3 + 5 = 8.\nValue of 1 part = 200 ÷ 8 = R25.\nAmahle\'s share = 5 × R25 = R125' },
        { difficulty: 'Medium', question: 'A class of 40 learners is split into two groups in the ratio of boys to girls of 3 : 5. How many girls are in the class?', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25 girls'], answer: '25', explanation: 'Total parts = 3 + 5 = 8.\nValue of 1 part = 40 ÷ 8 = 5.\nGirls = 5 × 5 = 25' },

        // Block 3 — Direct proportion word problems (Medium/Hard)
        { difficulty: 'Medium', question: 'If 5 kg of rice costs R85, find the cost of 8 kg using direct proportion.', checkMode: 'auto', correctAnswer: 'R136', correctAnswers: ['R136', '136'], answer: 'R136', explanation: 'Set up equal ratios: 5/85 = 8/x.\nCross multiply: 5x = 8 × 85 = 680.\nx = 680 ÷ 5 = 136.\nCost = R136 ✓' },
        { difficulty: 'Medium', question: 'A school buys 12 textbooks for R540. Using direct proportion, find the cost of 20 textbooks.', checkMode: 'auto', correctAnswer: 'R900', correctAnswers: ['R900', '900'], answer: 'R900', explanation: 'Set up equal ratios: 12/540 = 20/x.\nCross multiply: 12x = 20 × 540 = 10 800.\nx = 10 800 ÷ 12 = 900.\nCost = R900 ✓' },
        { difficulty: 'Hard', question: 'The exchange rate is 6 US dollars for R114. Using direct proportion, find how many rand 15 US dollars is worth.', checkMode: 'auto', correctAnswer: 'R285', correctAnswers: ['R285', '285'], answer: 'R285', explanation: 'Set up equal ratios: 6/114 = 15/x.\nCross multiply: 6x = 15 × 114 = 1 710.\nx = 1 710 ÷ 6 = 285.\nValue = R285 ✓' },
        { difficulty: 'Hard', question: 'A recipe uses 400 g of flour for every 250 ml of milk. Using direct proportion, find how much flour is needed for 625 ml of milk.', checkMode: 'auto', correctAnswer: '1000g', correctAnswers: ['1000g', '1000', '1 000g', '1 000 g', '1kg', '1 kg'], answer: '1 000 g', explanation: 'Set up equal ratios: 250/400 = 625/x.\nCross multiply: 250x = 625 × 400 = 250 000.\nx = 250 000 ÷ 250 = 1 000.\nFlour needed = 1 000 g ✓' },

        // Block 4 — Indirect (inverse) proportion word problems (Hard)
        { difficulty: 'Hard', question: '4 workers can build a wall in 18 days. How many days would 6 workers take, assuming inverse proportion?', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 days'], answer: '12 days', explanation: 'x₁y₁ = x₂y₂.\n4 × 18 = 6 × y₂.\n72 = 6y₂.\ny₂ = 72 ÷ 6 = 12 days ✓' },
        { difficulty: 'Hard', question: 'A car travels at 90 km/h and takes 4 hours for a trip. Find the time taken if it travels at 60 km/h instead.', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 hours'], answer: '6 hours', explanation: 'x₁y₁ = x₂y₂.\n90 × 4 = 60 × y₂.\n360 = 60y₂.\ny₂ = 360 ÷ 60 = 6 hours ✓' },
        { difficulty: 'Hard', question: '10 taps fill a tank in 8 hours. How long would 16 taps take, assuming inverse proportion?', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 hours'], answer: '5 hours', explanation: 'x₁y₁ = x₂y₂.\n10 × 8 = 16 × y₂.\n80 = 16y₂.\ny₂ = 80 ÷ 16 = 5 hours ✓' },

        // Block 5 — Rate problems (Hard)
        { difficulty: 'Hard', question: 'A shop sells 12 identical items for R156. Find the price of one item (the unit rate).', checkMode: 'auto', correctAnswer: 'R13', correctAnswers: ['R13', '13'], answer: 'R13', explanation: 'Unit rate = total cost ÷ number of items.\n156 ÷ 12 = 13.\nPrice per item = R13 ✓' },
        { difficulty: 'Hard', question: 'A car travels at a constant speed of 72 km/h for 3.5 hours. Find the distance travelled.', checkMode: 'auto', correctAnswer: '252', correctAnswers: ['252', '252km', '252 km'], answer: '252 km', explanation: 'Distance = speed × time.\nDistance = 72 × 3.5 = 252 km ✓' },
        { difficulty: 'Hard', question: 'A learner types 210 words in 3.5 minutes at a constant rate. How long would it take to type 480 words at the same rate?', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 minutes', '8 min'], answer: '8 minutes', explanation: 'Rate = 210 ÷ 3.5 = 60 words per minute.\nTime for 480 words = 480 ÷ 60 = 8 minutes ✓' },

        // Block 6 — Scale/map problems and combined multi-step (Hard)
        { difficulty: 'Hard', question: 'A map has a scale of 1 : 50 000. The distance between two towns on the map is 6 cm. Find the real distance in km.', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3km', '3 km'], answer: '3 km', explanation: 'Real distance = 6 × 50 000 = 300 000 cm.\nConvert to km: 300 000 ÷ 100 000 = 3 km ✓' },
        { difficulty: 'Hard', question: 'A map has a scale of 1 : 20 000. Two landmarks are 3 km apart in real life. Find the distance between them on the map, in cm.', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], answer: '15 cm', explanation: 'Convert 3 km to cm: 3 × 100 000 = 300 000 cm.\nMap distance = 300 000 ÷ 20 000 = 15 cm ✓' },
        { difficulty: 'Hard', question: 'Cement, sand and stone are mixed in the ratio 1 : 2 : 3 to make 240 kg of concrete. Find the mass of sand needed. If the job is scaled up to 3 times the batch size, find the new mass of sand needed.', answer: 'Total parts = 1 + 2 + 3 = 6.\nValue of 1 part = 240 ÷ 6 = 40 kg.\nSand (2 parts) = 2 × 40 = 80 kg.\nScaled batch total = 240 × 3 = 720 kg, so sand scales the same way: 80 × 3 = 240 kg.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered ratio, sharing, proportion, rate and scale problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions on inverse proportion or scale, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on direct and indirect proportion, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Simplifying ratios (Easy)
        { difficulty: 'Easy', question: 'Simplify the ratio 28 : 42 to its simplest form.', checkMode: 'auto', correctAnswer: '2:3', correctAnswers: ['2:3', '2 : 3'], answer: '2 : 3', explanation: 'HCF of 28 and 42 is 14.\n28 ÷ 14 = 2 and 42 ÷ 14 = 3.\nSimplest form: 2 : 3' },
        { difficulty: 'Easy', question: 'Simplify the ratio 20 : 45 to its simplest form.', checkMode: 'auto', correctAnswer: '4:9', correctAnswers: ['4:9', '4 : 9'], answer: '4 : 9', explanation: 'HCF of 20 and 45 is 5.\n20 ÷ 5 = 4 and 45 ÷ 5 = 9.\nSimplest form: 4 : 9' },
        { difficulty: 'Easy', question: 'Simplify the ratio 126 : 84 to its simplest form.', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2', '3 : 2'], answer: '3 : 2', explanation: 'HCF of 126 and 84 is 42.\n126 ÷ 42 = 3 and 84 ÷ 42 = 2.\nSimplest form: 3 : 2' },

        // Block 2 — Sharing an amount in a given ratio (Medium)
        { difficulty: 'Medium', question: 'Share R280 between Sipho and Naledi in the ratio 3 : 4. Find Sipho\'s share.', checkMode: 'auto', correctAnswer: 'R120', correctAnswers: ['R120', '120'], answer: 'R120', explanation: 'Total parts = 3 + 4 = 7.\nValue of 1 part = 280 ÷ 7 = R40.\nSipho\'s share = 3 × R40 = R120' },
        { difficulty: 'Medium', question: 'Share R450 between three charities in the ratio 1 : 2 : 2. Find the value of each of the two equal (larger) shares.', checkMode: 'auto', correctAnswer: 'R180', correctAnswers: ['R180', '180'], answer: 'R180', explanation: 'Total parts = 1 + 2 + 2 = 5.\nValue of 1 part = 450 ÷ 5 = R90.\nEach larger share = 2 × R90 = R180' },
        { difficulty: 'Medium', question: 'Share R336 between Buhle and Kagiso in the ratio 4 : 3. Find Buhle\'s share.', checkMode: 'auto', correctAnswer: 'R192', correctAnswers: ['R192', '192'], answer: 'R192', explanation: 'Total parts = 4 + 3 = 7.\nValue of 1 part = 336 ÷ 7 = R48.\nBuhle\'s share = 4 × R48 = R192' },
        { difficulty: 'Medium', question: 'A farm has 1 050 chickens and ducks in the ratio 3 : 4. How many ducks are on the farm?', checkMode: 'auto', correctAnswer: '600', correctAnswers: ['600', '600 ducks'], answer: '600', explanation: 'Total parts = 3 + 4 = 7.\nValue of 1 part = 1 050 ÷ 7 = 150.\nDucks = 4 × 150 = 600' },

        // Block 3 — Direct proportion word problems (Medium/Hard)
        { difficulty: 'Medium', question: 'If 4 kg of rice costs R76, find the cost of 9 kg using direct proportion.', checkMode: 'auto', correctAnswer: 'R171', correctAnswers: ['R171', '171'], answer: 'R171', explanation: 'Set up equal ratios: 4/76 = 9/x.\nCross multiply: 4x = 9 × 76 = 684.\nx = 684 ÷ 4 = 171.\nCost = R171 ✓' },
        { difficulty: 'Medium', question: 'A school buys 15 textbooks for R675. Using direct proportion, find the cost of 24 textbooks.', checkMode: 'auto', correctAnswer: 'R1080', correctAnswers: ['R1080', '1080', 'R1 080', '1 080'], answer: 'R1 080', explanation: 'Set up equal ratios: 15/675 = 24/x.\nCross multiply: 15x = 24 × 675 = 16 200.\nx = 16 200 ÷ 15 = 1 080.\nCost = R1 080 ✓' },
        { difficulty: 'Hard', question: 'The exchange rate is 8 US dollars for R152. Using direct proportion, find how many rand 20 US dollars is worth.', checkMode: 'auto', correctAnswer: 'R380', correctAnswers: ['R380', '380'], answer: 'R380', explanation: 'Set up equal ratios: 8/152 = 20/x.\nCross multiply: 8x = 20 × 152 = 3 040.\nx = 3 040 ÷ 8 = 380.\nValue = R380 ✓' },
        { difficulty: 'Hard', question: 'A recipe uses 480 g of flour for every 300 ml of milk. Using direct proportion, find how much flour is needed for 750 ml of milk.', checkMode: 'auto', correctAnswer: '1200g', correctAnswers: ['1200g', '1200', '1 200g', '1 200 g', '1.2kg', '1,2kg'], answer: '1 200 g', explanation: 'Set up equal ratios: 300/480 = 750/x.\nCross multiply: 300x = 750 × 480 = 360 000.\nx = 360 000 ÷ 300 = 1 200.\nFlour needed = 1 200 g ✓' },

        // Block 4 — Indirect (inverse) proportion word problems (Hard)
        { difficulty: 'Hard', question: '6 workers can build a wall in 15 days. How many days would 9 workers take, assuming inverse proportion?', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 days'], answer: '10 days', explanation: 'x₁y₁ = x₂y₂.\n6 × 15 = 9 × y₂.\n90 = 9y₂.\ny₂ = 90 ÷ 9 = 10 days ✓' },
        { difficulty: 'Hard', question: 'A car travels at 80 km/h and takes 6 hours for a trip. Find the time taken if it travels at 96 km/h instead.', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 hours'], answer: '5 hours', explanation: 'x₁y₁ = x₂y₂.\n80 × 6 = 96 × y₂.\n480 = 96y₂.\ny₂ = 480 ÷ 96 = 5 hours ✓' },
        { difficulty: 'Hard', question: '12 taps fill a tank in 9 hours. How long would 18 taps take, assuming inverse proportion?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 hours'], answer: '6 hours', explanation: 'x₁y₁ = x₂y₂.\n12 × 9 = 18 × y₂.\n108 = 18y₂.\ny₂ = 108 ÷ 18 = 6 hours ✓' },

        // Block 5 — Rate problems (Hard)
        { difficulty: 'Hard', question: 'A shop sells 12 identical items for R204. Find the price of one item (the unit rate).', checkMode: 'auto', correctAnswer: 'R17', correctAnswers: ['R17', '17'], answer: 'R17', explanation: 'Unit rate = total cost ÷ number of items.\n204 ÷ 12 = 17.\nPrice per item = R17 ✓' },
        { difficulty: 'Hard', question: 'A car travels at a constant speed of 84 km/h for 2.5 hours. Find the distance travelled.', checkMode: 'auto', correctAnswer: '210', correctAnswers: ['210', '210km', '210 km'], answer: '210 km', explanation: 'Distance = speed × time.\nDistance = 84 × 2.5 = 210 km ✓' },
        { difficulty: 'Hard', question: 'A learner types 180 words in 3 minutes at a constant rate. How long would it take to type 420 words at the same rate?', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7 minutes', '7 min'], answer: '7 minutes', explanation: 'Rate = 180 ÷ 3 = 60 words per minute.\nTime for 420 words = 420 ÷ 60 = 7 minutes ✓' },

        // Block 6 — Scale/map problems and combined multi-step (Hard)
        { difficulty: 'Hard', question: 'A map has a scale of 1 : 25 000. The distance between two towns on the map is 8 cm. Find the real distance in km.', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2km', '2 km'], answer: '2 km', explanation: 'Real distance = 8 × 25 000 = 200 000 cm.\nConvert to km: 200 000 ÷ 100 000 = 2 km ✓' },
        { difficulty: 'Hard', question: 'A map has a scale of 1 : 40 000. Two landmarks are 6 km apart in real life. Find the distance between them on the map, in cm.', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], answer: '15 cm', explanation: 'Convert 6 km to cm: 6 × 100 000 = 600 000 cm.\nMap distance = 600 000 ÷ 40 000 = 15 cm ✓' },
        { difficulty: 'Hard', question: 'Red, blue and yellow paint are mixed in the ratio 2 : 3 : 5 to make 300 L of a special colour. Find the volume of blue paint needed. If the batch is scaled up to 2 times the size, find the new volume of blue paint needed.', answer: 'Total parts = 2 + 3 + 5 = 10.\nValue of 1 part = 300 ÷ 10 = 30 L.\nBlue paint (3 parts) = 3 × 30 = 90 L.\nScaled batch total = 300 × 2 = 600 L, so blue paint scales the same way: 90 × 2 = 180 L.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered ratio, sharing, proportion, rate and scale problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions on inverse proportion or scale, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on direct and indirect proportion, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Simplifying ratios (Easy)
        { difficulty: 'Easy', question: 'Simplify the ratio 32 : 48 to its simplest form.', checkMode: 'auto', correctAnswer: '2:3', correctAnswers: ['2:3', '2 : 3'], answer: '2 : 3', explanation: 'HCF of 32 and 48 is 16.\n32 ÷ 16 = 2 and 48 ÷ 16 = 3.\nSimplest form: 2 : 3' },
        { difficulty: 'Easy', question: 'Simplify the ratio 27 : 63 to its simplest form.', checkMode: 'auto', correctAnswer: '3:7', correctAnswers: ['3:7', '3 : 7'], answer: '3 : 7', explanation: 'HCF of 27 and 63 is 9.\n27 ÷ 9 = 3 and 63 ÷ 9 = 7.\nSimplest form: 3 : 7' },
        { difficulty: 'Easy', question: 'Simplify the ratio 180 : 120 to its simplest form.', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2', '3 : 2'], answer: '3 : 2', explanation: 'HCF of 180 and 120 is 60.\n180 ÷ 60 = 3 and 120 ÷ 60 = 2.\nSimplest form: 3 : 2' },

        // Block 2 — Sharing an amount in a given ratio (Medium)
        { difficulty: 'Medium', question: 'Share R420 between Amahle and Thabo in the ratio 5 : 7. Find Amahle\'s share.', checkMode: 'auto', correctAnswer: 'R175', correctAnswers: ['R175', '175'], answer: 'R175', explanation: 'Total parts = 5 + 7 = 12.\nValue of 1 part = 420 ÷ 12 = R35.\nAmahle\'s share = 5 × R35 = R175' },
        { difficulty: 'Medium', question: 'Share R360 between three cousins in the ratio 2 : 3 : 4. Find the smallest share.', checkMode: 'auto', correctAnswer: 'R80', correctAnswers: ['R80', '80'], answer: 'R80', explanation: 'Total parts = 2 + 3 + 4 = 9.\nValue of 1 part = 360 ÷ 9 = R40.\nSmallest share = 2 × R40 = R80' },
        { difficulty: 'Medium', question: 'Share R440 between Lerato and Sipho in the ratio 3 : 8. Find Sipho\'s share.', checkMode: 'auto', correctAnswer: 'R320', correctAnswers: ['R320', '320'], answer: 'R320', explanation: 'Total parts = 3 + 8 = 11.\nValue of 1 part = 440 ÷ 11 = R40.\nSipho\'s share = 8 × R40 = R320' },
        { difficulty: 'Medium', question: 'A garden has 725 rose bushes and shrubs in the ratio 3 : 2. How many rose bushes are there?', checkMode: 'auto', correctAnswer: '435', correctAnswers: ['435', '435 rose bushes'], answer: '435', explanation: 'Total parts = 3 + 2 = 5.\nValue of 1 part = 725 ÷ 5 = 145.\nRose bushes = 3 × 145 = 435' },

        // Block 3 — Direct proportion word problems (Medium/Hard)
        { difficulty: 'Medium', question: 'If 6 kg of rice costs R108, find the cost of 10 kg using direct proportion.', checkMode: 'auto', correctAnswer: 'R180', correctAnswers: ['R180', '180'], answer: 'R180', explanation: 'Set up equal ratios: 6/108 = 10/x.\nCross multiply: 6x = 10 × 108 = 1 080.\nx = 1 080 ÷ 6 = 180.\nCost = R180 ✓' },
        { difficulty: 'Medium', question: 'A school buys 18 textbooks for R720. Using direct proportion, find the cost of 25 textbooks.', checkMode: 'auto', correctAnswer: 'R1000', correctAnswers: ['R1000', '1000', 'R1 000', '1 000'], answer: 'R1 000', explanation: 'Set up equal ratios: 18/720 = 25/x.\nCross multiply: 18x = 25 × 720 = 18 000.\nx = 18 000 ÷ 18 = 1 000.\nCost = R1 000 ✓' },
        { difficulty: 'Hard', question: 'The exchange rate is 5 US dollars for R95. Using direct proportion, find how many rand 18 US dollars is worth.', checkMode: 'auto', correctAnswer: 'R342', correctAnswers: ['R342', '342'], answer: 'R342', explanation: 'Set up equal ratios: 5/95 = 18/x.\nCross multiply: 5x = 18 × 95 = 1 710.\nx = 1 710 ÷ 5 = 342.\nValue = R342 ✓' },
        { difficulty: 'Hard', question: 'A recipe uses 320 g of flour for every 200 ml of milk. Using direct proportion, find how much flour is needed for 550 ml of milk.', checkMode: 'auto', correctAnswer: '880g', correctAnswers: ['880g', '880', '880 g'], answer: '880 g', explanation: 'Set up equal ratios: 200/320 = 550/x.\nCross multiply: 200x = 550 × 320 = 176 000.\nx = 176 000 ÷ 200 = 880.\nFlour needed = 880 g ✓' },

        // Block 4 — Indirect (inverse) proportion word problems (Hard)
        { difficulty: 'Hard', question: '8 workers can build a wall in 21 days. How many days would 12 workers take, assuming inverse proportion?', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', '14 days'], answer: '14 days', explanation: 'x₁y₁ = x₂y₂.\n8 × 21 = 12 × y₂.\n168 = 12y₂.\ny₂ = 168 ÷ 12 = 14 days ✓' },
        { difficulty: 'Hard', question: 'A car travels at 75 km/h and takes 8 hours for a trip. Find the time taken if it travels at 60 km/h instead.', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 hours'], answer: '10 hours', explanation: 'x₁y₁ = x₂y₂.\n75 × 8 = 60 × y₂.\n600 = 60y₂.\ny₂ = 600 ÷ 60 = 10 hours ✓' },
        { difficulty: 'Hard', question: '15 taps fill a tank in 6 hours. How long would 9 taps take, assuming inverse proportion?', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 hours'], answer: '10 hours', explanation: 'x₁y₁ = x₂y₂.\n15 × 6 = 9 × y₂.\n90 = 9y₂.\ny₂ = 90 ÷ 9 = 10 hours ✓' },

        // Block 5 — Rate problems (Hard)
        { difficulty: 'Hard', question: 'A shop sells 15 identical items for R270. Find the price of one item (the unit rate).', checkMode: 'auto', correctAnswer: 'R18', correctAnswers: ['R18', '18'], answer: 'R18', explanation: 'Unit rate = total cost ÷ number of items.\n270 ÷ 15 = 18.\nPrice per item = R18 ✓' },
        { difficulty: 'Hard', question: 'A car travels at a constant speed of 96 km/h for 1.75 hours. Find the distance travelled.', checkMode: 'auto', correctAnswer: '168', correctAnswers: ['168', '168km', '168 km'], answer: '168 km', explanation: 'Distance = speed × time.\nDistance = 96 × 1.75 = 168 km ✓' },
        { difficulty: 'Hard', question: 'A learner types 240 words in 4 minutes at a constant rate. How long would it take to type 540 words at the same rate?', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 minutes', '9 min'], answer: '9 minutes', explanation: 'Rate = 240 ÷ 4 = 60 words per minute.\nTime for 540 words = 540 ÷ 60 = 9 minutes ✓' },

        // Block 6 — Scale/map problems and combined multi-step (Hard)
        { difficulty: 'Hard', question: 'A map has a scale of 1 : 200 000. The distance between two towns on the map is 4.5 cm. Find the real distance in km.', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9km', '9 km'], answer: '9 km', explanation: 'Real distance = 4.5 × 200 000 = 900 000 cm.\nConvert to km: 900 000 ÷ 100 000 = 9 km ✓' },
        { difficulty: 'Hard', question: 'A map has a scale of 1 : 100 000. Two landmarks are 8 km apart in real life. Find the distance between them on the map, in cm.', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], answer: '8 cm', explanation: 'Convert 8 km to cm: 8 × 100 000 = 800 000 cm.\nMap distance = 800 000 ÷ 100 000 = 8 cm ✓' },
        { difficulty: 'Hard', question: 'Orange, apple and mango juice are mixed in the ratio 3 : 4 : 5 to make 360 L of a fruit blend. Find the volume of apple juice needed. If the batch is scaled up to 4 times the size, find the new volume of apple juice needed.', answer: 'Total parts = 3 + 4 + 5 = 12.\nValue of 1 part = 360 ÷ 12 = 30 L.\nApple juice (4 parts) = 4 × 30 = 120 L.\nScaled batch total = 360 × 4 = 1 440 L, so apple juice scales the same way: 120 × 4 = 480 L.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered ratio, sharing, proportion, rate and scale problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions on inverse proportion or scale, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on direct and indirect proportion, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
