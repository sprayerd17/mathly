import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (mass units) ─────────────────────────────────────────────
// mg (milligrams) → blue   (#2563eb)
// g  (grams)      → green  (#16a34a)
// kg (kilograms)  → orange (#ea580c)
// t  (tonnes)     → red    (#dc2626)
const bl = (s: string) => `<span style="color:#2563eb;font-weight:700">${s}</span>`
const gr = (s: string) => `<span style="color:#16a34a;font-weight:700">${s}</span>`
const or = (s: string) => `<span style="color:#ea580c;font-weight:700">${s}</span>`
const re = (s: string) => `<span style="color:#dc2626;font-weight:700">${s}</span>`

export const topicData: TopicData = {
  title: 'Mass',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MULTI-STEP CONVERSIONS AND MIXED UNITS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multi-step-conversions-mixed-units',
      title: 'Multi-Step Conversions and Mixed Units',
      icon: '⚖️',
      explanation:
        `<p style="margin-bottom:16px;">You already know the key facts ${bl('1 000 mg = 1 g')}, ${gr('1 000 g = 1 kg')} and ${or('1 000 kg = 1 t')}. This year we combine these facts to convert directly between units that are ${bl('two steps apart')} (like mg to kg, or g to t), and to write mass measurements using ${gr('mixed units')} — for example, expressing 2,4 kg as "2 kg 400 g".</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('mg')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('g')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kg')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('t')}</span>` +
        `</div>` +

        // ── Conversion chain ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The conversion chain</p>` +
        `<div style="text-align:center;font-size:1.05em;font-weight:700;color:#0f1f3d;margin-bottom:20px;padding:12px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;">${re('t')} ${re('× 1 000')} → ${or('kg')} ${or('× 1 000')} → ${gr('g')} ${gr('× 1 000')} → ${bl('mg')}</div>` +

        `<p style="margin-bottom:16px;color:#374151;">To jump two steps (e.g. t straight to g), multiply by <strong>both</strong> conversion factors in a row: ${re('1 t = 1 000 kg = 1 000 000 g')} (1 000 × 1 000). Going the other way, divide by both factors in a row.</p>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Converting to mixed units</p>` +
        `<p style="margin:0;color:#1e3a8a;">To write 2,4 kg as kg and g: the whole number part (2) stays as ${or('kg')}, and the decimal part (0,4) is converted to ${gr('g')} by multiplying by 1 000 → ${gr('400 g')}. So 2,4 kg = <strong>2 kg 400 g</strong>.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Convert 2,5 t directly to g.',
          answer: `2,5 t = ${re('2 500 000 g')}`,
          steps: [
            `Going from ${re('t')} to ${gr('g')} means jumping two steps: t → kg → g.`,
            `Multiply by both factors: ${re('1 000 × 1 000 = 1 000 000')}.`,
            `${re('2,5 × 1 000 000 = 2 500 000')}.`,
            `<strong>Answer:</strong> 2,5 t = ${re('2 500 000 g')}. ✓`,
          ],
        },
        {
          question: 'Write 5,75 kg using mixed units (kg and g).',
          answer: `5,75 kg = ${or('5 kg 750 g')}`,
          steps: [
            `The whole number part, 5, stays as ${or('kg')}.`,
            `The decimal part, 0,75, is converted to ${gr('g')}: ${gr('0,75 × 1 000 = 750 g')}.`,
            `<strong>Answer:</strong> 5,75 kg = ${or('5 kg 750 g')}. ✓`,
          ],
        },
        {
          question: 'Convert 4 200 mg directly to g.',
          answer: `4 200 mg = ${gr('4,2 g')}`,
          steps: [
            `Going from ${bl('mg')} to ${gr('g')}: divide by 1 000.`,
            `${bl('4 200 ÷ 1 000 = 4,2')}.`,
            `<strong>Answer:</strong> 4 200 mg = ${gr('4,2 g')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Convert 3 t directly to kg.',
          answer: '3000 kg',
          checkMode: 'auto',
          correctAnswer: '3000',
          correctAnswers: ['3000', '3 000', '3000kg', '3 000 kg'],
          explanation: '1 t = 1 000 kg.\n3 × 1 000 = 3 000 kg ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Answer each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Write 7,2 kg using mixed units (kg and g).',
              correctAnswer: '7 kg 200 g',
              correctAnswers: ['7 kg 200 g', '7kg200g', '7 kg200g'],
              explanation: '0,2 kg = 0,2 × 1 000 = 200 g.\n7,2 kg = 7 kg 200 g ✓',
            },
            {
              label: 'b) Convert 1,8 t directly to kg.',
              correctAnswer: '1800',
              correctAnswers: ['1800', '1 800', '1800kg', '1 800 kg'],
              explanation: '1,8 × 1 000 = 1 800 kg ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A delivery truck carries a load of 3,08 t.\n\na) Write this mass using mixed units (t and kg).\nb) Convert this mass directly to g.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Mixed units (t and kg)',
              correctAnswer: '3 t 80 kg',
              correctAnswers: ['3 t 80 kg', '3t80kg', '3 t80kg'],
              explanation: '0,08 t = 0,08 × 1 000 = 80 kg.\n3,08 t = 3 t 80 kg ✓',
            },
            {
              label: 'b) Mass in g',
              correctAnswer: '3080000',
              correctAnswers: ['3080000', '3 080 000'],
              explanation: '1 t = 1 000 000 g.\n3,08 × 1 000 000 = 3 080 000 g ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing the full mass conversion chain from tonnes to kilograms to grams to milligrams, demonstrating how to jump two steps at once and how to convert a decimal kilogram measurement into mixed kg and g units" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CALCULATING WITH MASS IN CONTEXT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-with-mass-in-context',
      title: 'Calculating with Mass in Context',
      icon: '🧺',
      explanation:
        `<p style="margin-bottom:16px;">Mass problems often involve ${or('scaling a recipe')} up or down, or working out the ${gr('cost per unit of mass')}. When a recipe is scaled, every ingredient's mass is multiplied by the same scale factor. When comparing prices, we often need to find the ${gr('price per kilogram')} to see which option is better value.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('scale factor')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('price per kg')}</span>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Finding the better value</p>` +
        `<p style="margin:0;color:#1e3a8a;">To compare two differently-sized packages, divide the ${or('price')} by the ${bl('mass')} for each one to find the ${gr('price per kilogram (or per gram)')}. The option with the lower price per unit is the better value.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A recipe for 8 muffins needs 240 g of flour. Sipho wants to make 20 muffins. How much flour does he need?',
          answer: `${gr('600 g of flour')}`,
          steps: [
            `Find the ${or('scale factor')}: ${or('20 ÷ 8 = 2,5')}.`,
            `Multiply the flour amount by the scale factor: ${gr('240 × 2,5 = 600 g')}.`,
            `<strong>Answer:</strong> Sipho needs ${gr('600 g')} of flour. ✓`,
          ],
        },
        {
          question: 'A 2 kg bag of rice costs R58, and a 5 kg bag costs R135. Which bag offers better value per kg?',
          answer: `${gr('The 5 kg bag')} is better value`,
          steps: [
            `2 kg bag: ${or('R58 ÷ 2 = R29')} per kg.`,
            `5 kg bag: ${or('R135 ÷ 5 = R27')} per kg.`,
            `Compare: ${gr('R27')} per kg is less than ${or('R29')} per kg.`,
            `<strong>Answer:</strong> The ${gr('5 kg bag')} offers better value. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A recipe for 6 biscuits needs 90 g of butter. How much butter is needed for 12 biscuits?',
          answer: '180 g',
          checkMode: 'auto',
          correctAnswer: '180',
          correctAnswers: ['180', '180g', '180 g'],
          explanation: 'Scale factor = 12 ÷ 6 = 2.\n90 × 2 = 180 g ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A 1,5 kg box of cereal costs R54.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the price per kg.',
              correctAnswer: '36',
              correctAnswers: ['36', 'R36'],
              explanation: 'R54 ÷ 1,5 = R36 per kg ✓',
            },
            {
              label: 'b) At the same price per kg, find the cost of a 4 kg box.',
              correctAnswer: '144',
              correctAnswers: ['144', 'R144'],
              explanation: 'R36 × 4 = R144 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A bakery recipe for 15 rolls needs 450 g of flour and 60 g of butter. The bakery wants to make 45 rolls.\n\na) Find the scale factor.\nb) Find the mass of flour needed (g).\nc) Find the mass of butter needed (g).',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Scale factor',
              correctAnswer: '3',
              explanation: '45 ÷ 15 = 3 ✓',
            },
            {
              label: 'b) Mass of flour needed (g)',
              correctAnswer: '1350',
              explanation: '450 × 3 = 1 350 g ✓',
            },
            {
              label: 'c) Mass of butter needed (g)',
              correctAnswer: '180',
              explanation: '60 × 3 = 180 g ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how to scale a recipe up using a scale factor, followed by an example comparing the price per kilogram of two different package sizes to find the better value" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — REAL-WORLD MASS PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'real-world-mass-problems',
      title: 'Real-World Mass Problems',
      icon: '🌍',
      explanation:
        `<p style="margin-bottom:16px;">Many real-world mass problems require you to ${or('convert between units')} before you can add, subtract, multiply or divide. Always check that all the given masses are in the ${gr('same unit')} before calculating.</p>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">A simple problem-solving checklist</p>` +
        `<p style="margin:0;color:#9a3412;">1) What is being asked, and in which unit? 2) Are all the given masses in the ${or('same unit')}? Convert first if not. 3) What calculation(s) are needed? 4) Does your final answer make sense for the situation?</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A grocery bag contains a 1,2 kg bag of rice, a 750 g bag of sugar, and a 500 g packet of pasta. Find the total mass, in kg.',
          answer: `Total = ${gr('2,45 kg')}`,
          steps: [
            `Convert everything to the ${or('same unit')} (kg): 750 g = 0,75 kg, 500 g = 0,5 kg.`,
            `Add the three masses: ${gr('1,2 + 0,75 + 0,5 = 2,45 kg')}.`,
            `<strong>Answer:</strong> Total mass = ${gr('2,45 kg')}. ✓`,
          ],
        },
        {
          question: 'A delivery van can carry a maximum of 1,5 t. It already carries 8 crates of 85 kg each. How much more mass (in kg) can it carry?',
          answer: `${gr('820 kg more')}`,
          steps: [
            `Convert the maximum load to kg: ${or('1,5 t = 1 500 kg')}.`,
            `Find the mass already loaded: ${or('8 × 85 = 680 kg')}.`,
            `Subtract: ${gr('1 500 − 680 = 820 kg')}.`,
            `<strong>Answer:</strong> The van can carry ${gr('820 kg more')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A hamper contains a 900 g box of tea, a 1,1 kg jar of jam, and a 600 g bag of coffee. Find the total mass, in kg.',
          answer: '2.6 kg',
          checkMode: 'auto',
          correctAnswer: '2.6',
          correctAnswers: ['2.6', '2,6', '2.6kg', '2,6kg'],
          explanation: '900 g = 0,9 kg, 600 g = 0,6 kg.\n0,9 + 1,1 + 0,6 = 2,6 kg ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A lift has a maximum weight limit of 800 kg. 6 people, each with an average mass of 70 kg, are already in the lift.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the total mass of the 6 people (kg).',
              correctAnswer: '420',
              explanation: '6 × 70 = 420 kg ✓',
            },
            {
              label: 'b) Find the remaining mass allowance (kg).',
              correctAnswer: '380',
              explanation: '800 − 420 = 380 kg ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A farmer harvests 2,4 t of maize. It is packed into bags of 25 kg each, and the farmer sells each bag for R110.\n\na) Convert the total harvest to kg.\nb) Find how many bags can be filled.\nc) Find the total amount earned from selling all the bags.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Total harvest in kg',
              correctAnswer: '2400',
              correctAnswers: ['2400', '2 400'],
              explanation: '2,4 t × 1 000 = 2 400 kg ✓',
            },
            {
              label: 'b) Number of bags',
              correctAnswer: '96',
              explanation: '2 400 ÷ 25 = 96 bags ✓',
            },
            {
              label: 'c) Total amount earned',
              correctAnswer: '10560',
              correctAnswers: ['10560', 'R10560', 'R10 560', '10 560'],
              explanation: '96 × R110 = R10 560 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video working through a multi-step real-world mass word problem, converting between units before adding, subtracting, multiplying or dividing to reach the final answer" />',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered mass.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered mass.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
