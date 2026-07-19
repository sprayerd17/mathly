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

      diagramPlaceholder:
        'Diagram showing four connected boxes for t, kg, g and mg in a row, each in its own colour, with arrows labelled × 1 000 linking each step, illustrating the mass conversion chain from tonnes down to milligrams',

      diagramSvg:
        '<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="70" width="50" height="45" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/><text x="30" y="98" font-size="18" fill="#dc2626" font-weight="700" text-anchor="middle">t</text><line x1="57" y1="92" x2="83" y2="92" stroke="#374151" stroke-width="2"/><polygon points="83,92 75,87 75,97" fill="#374151"/><text x="70" y="60" font-size="10" fill="#374151" font-weight="700" text-anchor="middle">× 1 000</text><rect x="85" y="70" width="50" height="45" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/><text x="110" y="98" font-size="18" fill="#ea580c" font-weight="700" text-anchor="middle">kg</text><line x1="137" y1="92" x2="163" y2="92" stroke="#374151" stroke-width="2"/><polygon points="163,92 155,87 155,97" fill="#374151"/><text x="150" y="60" font-size="10" fill="#374151" font-weight="700" text-anchor="middle">× 1 000</text><rect x="165" y="70" width="50" height="45" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="190" y="98" font-size="18" fill="#16a34a" font-weight="700" text-anchor="middle">g</text><line x1="217" y1="92" x2="243" y2="92" stroke="#374151" stroke-width="2"/><polygon points="243,92 235,87 235,97" fill="#374151"/><text x="230" y="60" font-size="10" fill="#374151" font-weight="700" text-anchor="middle">× 1 000</text><rect x="245" y="70" width="50" height="45" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="270" y="98" font-size="18" fill="#2563eb" font-weight="700" text-anchor="middle">mg</text><text x="150" y="135" font-size="11" fill="#374151" text-anchor="middle">× 1 000 moving right, ÷ 1 000 moving left</text></svg>',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Two-step unit conversions t↔kg↔g↔mg (0-4, Easy) — bridges t↔g and mg↔kg
        { difficulty: 'Easy', question: 'Convert 4.5 t directly to g.', answer: '4500000 g', checkMode: 'auto', correctAnswer: '4500000', correctAnswers: ['4500000', '4 500 000', '4500000g', '4 500 000 g'], explanation: 'Jumping t straight to g means multiplying by 1 000 twice: 1 000 × 1 000 = 1 000 000.\n4.5 × 1 000 000 = 4 500 000 g ✓' },
        { difficulty: 'Easy', question: 'A shipping container is loaded with 7.25 t of goods. What is this mass in grams?', answer: '7250000 g', checkMode: 'auto', correctAnswer: '7250000', correctAnswers: ['7250000', '7 250 000', '7250000g', '7 250 000 g'], explanation: '1 t = 1 000 000 g.\n7.25 × 1 000 000 = 7 250 000 g ✓' },
        { difficulty: 'Easy', question: 'Convert 2 800 000 mg directly to kg.', answer: '2.8 kg', checkMode: 'auto', correctAnswer: '2.8', correctAnswers: ['2.8', '2.8kg', '2.8 kg'], explanation: 'Jumping mg straight to kg means dividing by 1 000 twice: 1 000 × 1 000 = 1 000 000.\n2 800 000 ÷ 1 000 000 = 2.8 kg ✓' },
        { difficulty: 'Easy', question: 'A vitamin tablet has a mass of 3.2 kg of active ingredient stored in bulk at a factory. Express this mass in milligrams.', answer: '3200000 mg', checkMode: 'auto', correctAnswer: '3200000', correctAnswers: ['3200000', '3 200 000', '3200000mg', '3 200 000 mg'], explanation: '1 kg = 1 000 000 mg.\n3.2 × 1 000 000 = 3 200 000 mg ✓' },
        { difficulty: 'Easy', question: 'A student converts 0.6 t to g like this: "0.6 × 1 000 = 600 g." Is this correct? Explain the mistake.', answer: 'No, the student only multiplied by 1 000 once, which converts t to kg, not t to g. Going from t to g is two steps apart, so both factors of 1 000 are needed: 0.6 × 1 000 × 1 000 = 600 000 g, not 600 g.', checkMode: 'self' },

        // Block 2 — Mixed units (5-8, Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Write 5.75 kg using mixed units (kg and g).', answer: '5 kg 750 g', checkMode: 'auto', correctAnswer: '5 kg 750 g', correctAnswers: ['5 kg 750 g', '5kg750g', '5 kg750g'], explanation: 'The whole number part, 5, stays as kg. The decimal part, 0.75, is converted to g: 0.75 × 1 000 = 750 g.\n5.75 kg = 5 kg 750 g ✓' },
        { difficulty: 'Easy-Medium', question: 'A delivery note lists a parcel\'s mass as "8 kg 60 g". Write this as a single decimal number of kilograms.', answer: '8.06 kg', checkMode: 'auto', correctAnswer: '8.06', correctAnswers: ['8.06', '8.06kg', '8.06 kg'], explanation: '60 g = 60 ÷ 1 000 = 0.06 kg.\n8 kg 60 g = 8.06 kg ✓' },
        { difficulty: 'Medium', question: 'Which is heavier: 4 kg 250 g or 4.3 kg? Explain how you know.', answer: '4.3 kg is heavier. Converting to the same form: 4 kg 250 g = 4.25 kg, and 4.3 kg is greater than 4.25 kg.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A student writes 5.75 kg as "5 kg 75 g". Is this correct? Explain the mistake.', answer: 'No, the student forgot to multiply the decimal part by 1 000 to convert it to grams. The decimal part 0.75 means 0.75 × 1 000 = 750 g, not 75 g. So 5.75 kg = 5 kg 750 g, not 5 kg 75 g.', checkMode: 'self' },

        // Block 3 — Scaling recipes by mass (9-12, Medium)
        { difficulty: 'Medium', question: 'A biscuit recipe for 8 biscuits needs 150 g of flour. Bongi wants to make 20 biscuits. Find the scale factor, then find how much flour she needs.', answer: '375 g', checkMode: 'auto', correctAnswer: '375', correctAnswers: ['375', '375g', '375 g'], explanation: 'Scale factor = 20 ÷ 8 = 2.5.\n150 × 2.5 = 375 g ✓' },
        { difficulty: 'Medium', question: 'A cake recipe for 8 people uses 320 g of flour and 160 g of sugar. Nadia wants to bake for 20 people. Find the mass of flour and sugar she needs.', answer: 'Flour: 800 g, Sugar: 400 g', checkMode: 'auto', correctAnswer: '800,400', correctAnswers: ['800,400', '800g,400g', 'flour800gsugar400g', '800 g, 400 g'], explanation: 'Scale factor = 20 ÷ 8 = 2.5.\nFlour: 320 × 2.5 = 800 g. Sugar: 160 × 2.5 = 400 g ✓' },
        { difficulty: 'Medium', question: 'A bread roll recipe was scaled up by a factor of 4 for a school fundraiser, and now needs 720 g of sugar. How much sugar did the original recipe need?', answer: '180 g', checkMode: 'auto', correctAnswer: '180', correctAnswers: ['180', '180g', '180 g'], explanation: '"Scaled up" means the original was multiplied by 4, so working backwards means dividing: 720 ÷ 4 = 180 g ✓' },
        { difficulty: 'Medium', question: 'A baker scales a recipe from 6 rolls to 15 rolls. She calculates the scale factor as 15 − 6 = 9. Is her method correct? Explain the mistake and give the correct scale factor.', answer: 'No, her method is incorrect. A scale factor is found by dividing the new quantity by the original quantity, not subtracting. The correct scale factor is 15 ÷ 6 = 2.5.', checkMode: 'self' },

        // Block 4 — Price per kg and value comparisons (13-15, Medium)
        { difficulty: 'Medium', question: 'A 1.5 kg bag of rice costs R58.50. Find the price per kilogram.', answer: 'R39', checkMode: 'auto', correctAnswer: '39', correctAnswers: ['39', 'R39'], explanation: 'R58.50 ÷ 1.5 = R39 per kg ✓' },
        { difficulty: 'Medium', question: 'A shop sells a 2 kg bag of rice for R84, and a 5 kg bag for R195. Which bag offers better value, and by how much per kg?', answer: '5 kg bag is better value, by R3 per kg', checkMode: 'auto', correctAnswer: '5kg bag, R3 per kg', correctAnswers: ['5kg,3', '5 kg bag by R3 per kg', '5kgbagbetterbyr3perkg', '5kg bag, R3 per kg'], explanation: '2 kg bag: R84 ÷ 2 = R42 per kg. 5 kg bag: R195 ÷ 5 = R39 per kg.\nR42 − R39 = R3. The 5 kg bag is better value, by R3 per kg ✓' },
        { difficulty: 'Medium', question: 'Rice costs R23.60 per kilogram at a farm stall. Find the cost of buying 3.5 kg.', answer: 'R82.60', checkMode: 'auto', correctAnswer: '82.60', correctAnswers: ['82.60', '82.6', 'R82.60', 'R82.6'], explanation: 'R23.60 × 3.5 = R82.60 ✓' },

        // Block 5 — Multi-step real-world mass problems (16-19, Hard)
        { difficulty: 'Hard', question: 'A grocery bag contains a 1.4 kg bag of maize meal, a 650 g bag of lentils, and a 300 g bag of nuts. Find the total mass, in kg.', answer: '2.35 kg', checkMode: 'auto', correctAnswer: '2.35', correctAnswers: ['2.35', '2.35kg', '2.35 kg'], explanation: 'Convert to kg: 650 g = 0.65 kg, 300 g = 0.3 kg.\n1.4 + 0.65 + 0.3 = 2.35 kg ✓' },
        { difficulty: 'Hard', question: 'A delivery van can carry a maximum of 2 t. It already carries 12 crates of 95 kg each. How much more mass, in kg, can it still carry?', answer: '860 kg', checkMode: 'auto', correctAnswer: '860', correctAnswers: ['860', '860kg', '860 kg'], explanation: 'Convert the limit to kg: 2 t = 2 000 kg. Mass already loaded: 12 × 95 = 1 140 kg.\n2 000 − 1 140 = 860 kg ✓' },
        { difficulty: 'Hard', question: 'A farmer packs maize into 8 bags of 4.5 kg each and sells it at R14.80 per kilogram. Find the total mass packed, and the total amount earned.', answer: '36 kg, R532.80', checkMode: 'auto', correctAnswer: '36,532.80', correctAnswers: ['36kg,r532.80', '36 kg, R532.80', '36,532.8', '36kg r532.80'], explanation: 'Total mass: 8 × 4.5 = 36 kg.\nTotal earned: 36 × R14.80 = R532.80 ✓' },
        { difficulty: 'Hard', question: 'A student adds a 750 g bag of oats directly to a 1.2 kg bag of rice, writing the total as "1.2 + 750 = 751.2 kg". Explain the mistake and give the correct total mass in kg.', answer: 'The student added the numbers without converting to the same unit first. 750 g must first be converted to kg: 750 g = 0.75 kg. Then add: 1.2 + 0.75 = 1.95 kg, not 751.2 kg.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered mass conversions, mixed units, scaling and real-world mass problems.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the conversion chain and mixed-unit rules, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Two-step unit conversions t↔kg↔g↔mg (0-4, Easy) — bridges kg↔mg and g↔t
        { difficulty: 'Easy', question: 'Convert 2.75 kg directly to mg.', answer: '2750000 mg', checkMode: 'auto', correctAnswer: '2750000', correctAnswers: ['2750000', '2 750 000', '2750000mg', '2 750 000 mg'], explanation: 'Jumping kg straight to mg means multiplying by 1 000 twice: 1 000 × 1 000 = 1 000 000.\n2.75 × 1 000 000 = 2 750 000 mg ✓' },
        { difficulty: 'Easy', question: 'A pharmacy stores 3.6 t of raw material at its warehouse. Express this mass in grams.', answer: '3600000 g', checkMode: 'auto', correctAnswer: '3600000', correctAnswers: ['3600000', '3 600 000', '3600000g', '3 600 000 g'], explanation: '1 t = 1 000 000 g.\n3.6 × 1 000 000 = 3 600 000 g ✓' },
        { difficulty: 'Easy', question: 'Convert 5 250 000 mg directly to kg.', answer: '5.25 kg', checkMode: 'auto', correctAnswer: '5.25', correctAnswers: ['5.25', '5.25kg', '5.25 kg'], explanation: 'Jumping mg straight to kg means dividing by 1 000 twice: 1 000 × 1 000 = 1 000 000.\n5 250 000 ÷ 1 000 000 = 5.25 kg ✓' },
        { difficulty: 'Easy', question: 'Convert 6 400 000 g directly to t.', answer: '6.4 t', checkMode: 'auto', correctAnswer: '6.4', correctAnswers: ['6.4', '6.4t', '6.4 t'], explanation: 'Jumping g straight to t means dividing by 1 000 twice: 1 000 × 1 000 = 1 000 000.\n6 400 000 ÷ 1 000 000 = 6.4 t ✓' },
        { difficulty: 'Easy', question: 'A student converts 0.085 t to g like this: "0.085 × 1 000 = 85 g." Is this correct? Explain the mistake.', answer: 'No, the student only multiplied by 1 000 once, which converts t to kg, not t to g. Going from t to g needs both factors of 1 000: 0.085 × 1 000 × 1 000 = 85 000 g, not 85 g.', checkMode: 'self' },

        // Block 2 — Mixed units (5-8, Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Write 6.25 kg using mixed units (kg and g).', answer: '6 kg 250 g', checkMode: 'auto', correctAnswer: '6 kg 250 g', correctAnswers: ['6 kg 250 g', '6kg250g', '6 kg250g'], explanation: 'The whole number part, 6, stays as kg. The decimal part, 0.25, is converted to g: 0.25 × 1 000 = 250 g.\n6.25 kg = 6 kg 250 g ✓' },
        { difficulty: 'Easy-Medium', question: 'A recipe label shows a mixture mass of "2 kg 80 g". Write this as a single decimal number of kilograms.', answer: '2.08 kg', checkMode: 'auto', correctAnswer: '2.08', correctAnswers: ['2.08', '2.08kg', '2.08 kg'], explanation: '80 g = 80 ÷ 1 000 = 0.08 kg.\n2 kg 80 g = 2.08 kg ✓' },
        { difficulty: 'Medium', question: 'Which is heavier: 2 kg 600 g or 2.65 kg? Explain how you know.', answer: '2.65 kg is heavier. Converting to the same form: 2 kg 600 g = 2.6 kg, and 2.65 kg is greater than 2.6 kg.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A parcel scale reads 1.5 kg. A student writes this using mixed units as "1 kg 5 g". Is this correct? Explain the mistake.', answer: 'No, the student forgot to multiply the decimal part by 1 000 to convert it to grams. The decimal part 0.5 means 0.5 × 1 000 = 500 g, not 5 g. So 1.5 kg = 1 kg 500 g, not 1 kg 5 g.', checkMode: 'self' },

        // Block 3 — Scaling recipes by mass (9-12, Medium)
        { difficulty: 'Medium', question: 'A cupcake recipe for 12 cupcakes needs 180 g of butter. Thabo wants to make 18 cupcakes. Find the scale factor, then find how much butter he needs.', answer: '270 g', checkMode: 'auto', correctAnswer: '270', correctAnswers: ['270', '270g', '270 g'], explanation: 'Scale factor = 18 ÷ 12 = 1.5.\n180 × 1.5 = 270 g ✓' },
        { difficulty: 'Medium', question: 'A pancake recipe for 12 servings uses 300 g of flour and 180 g of butter. Zanele wants to make 18 servings. Find the mass of flour and butter she needs.', answer: 'Flour: 450 g, Butter: 270 g', checkMode: 'auto', correctAnswer: '450,270', correctAnswers: ['450,270', '450g,270g', 'flour450gbutter270g', '450 g, 270 g'], explanation: 'Scale factor = 18 ÷ 12 = 1.5.\nFlour: 300 × 1.5 = 450 g. Butter: 180 × 1.5 = 270 g ✓' },
        { difficulty: 'Medium', question: 'A cake recipe was scaled up by a factor of 1.5, and now needs 375 g of sugar. How much sugar did the original recipe need?', answer: '250 g', checkMode: 'auto', correctAnswer: '250', correctAnswers: ['250', '250g', '250 g'], explanation: '"Scaled up" means the original was multiplied by 1.5, so working backwards means dividing: 375 ÷ 1.5 = 250 g ✓' },
        { difficulty: 'Medium', question: 'A baker scales a recipe from 12 cupcakes to 30 cupcakes. He calculates the scale factor as 30 − 12 = 18. Is his method correct? Explain the mistake and give the correct scale factor.', answer: 'No, his method is incorrect. A scale factor is found by dividing the new quantity by the original quantity, not subtracting. The correct scale factor is 30 ÷ 12 = 2.5.', checkMode: 'self' },

        // Block 4 — Price per kg and value comparisons (13-15, Medium)
        { difficulty: 'Medium', question: 'A 2.5 kg box of mielie meal costs R76.50. Find the price per kilogram.', answer: 'R30.60', checkMode: 'auto', correctAnswer: '30.60', correctAnswers: ['30.60', '30.6', 'R30.60', 'R30.6'], explanation: 'R76.50 ÷ 2.5 = R30.60 per kg ✓' },
        { difficulty: 'Medium', question: 'A shop sells a 750 g box of cereal for R33, and a 1.5 kg box for R60. Which box offers better value, and by how much per kg?', answer: '1.5 kg box is better value, by R4 per kg', checkMode: 'auto', correctAnswer: '1.5kg box, R4 per kg', correctAnswers: ['1.5kg,4', '1.5 kg box by R4 per kg', '1.5kgboxbetterbyr4perkg', '1.5 kg box, R4 per kg'], explanation: '750 g box: 750 g = 0.75 kg, so R33 ÷ 0.75 = R44 per kg. 1.5 kg box: R60 ÷ 1.5 = R40 per kg.\nR44 − R40 = R4. The 1.5 kg box is better value, by R4 per kg ✓' },
        { difficulty: 'Medium', question: 'Mielie meal costs R18.40 per kilogram at a spaza shop. Find the cost of buying 4 kg.', answer: 'R73.60', checkMode: 'auto', correctAnswer: '73.60', correctAnswers: ['73.60', '73.6', 'R73.60', 'R73.6'], explanation: 'R18.40 × 4 = R73.60 ✓' },

        // Block 5 — Multi-step real-world mass problems (16-19, Hard)
        { difficulty: 'Hard', question: 'A gift hamper contains a 2.6 kg fruitcake, a 480 g jar of jam, and a 750 g box of biscuits. Find the total mass, in kg.', answer: '3.83 kg', checkMode: 'auto', correctAnswer: '3.83', correctAnswers: ['3.83', '3.83kg', '3.83 kg'], explanation: 'Convert to kg: 480 g = 0.48 kg, 750 g = 0.75 kg.\n2.6 + 0.48 + 0.75 = 3.83 kg ✓' },
        { difficulty: 'Hard', question: 'A lift has a maximum weight limit of 900 kg. 7 people, each with an average mass of 68 kg, are already in the lift. How much more mass, in kg, can the lift still carry?', answer: '424 kg', checkMode: 'auto', correctAnswer: '424', correctAnswers: ['424', '424kg', '424 kg'], explanation: 'Mass already in the lift: 7 × 68 = 476 kg.\n900 − 476 = 424 kg ✓' },
        { difficulty: 'Hard', question: 'A market seller packs onions into 15 boxes of 2.4 kg each and sells at R9.60 per kilogram. Find the total mass packed, and the total amount earned.', answer: '36 kg, R345.60', checkMode: 'auto', correctAnswer: '36,345.60', correctAnswers: ['36kg,r345.60', '36 kg, R345.60', '36,345.6', '36kg r345.60'], explanation: 'Total mass: 15 × 2.4 = 36 kg.\nTotal earned: 36 × R9.60 = R345.60 ✓' },
        { difficulty: 'Hard', question: 'A student adds a 480 g tin of beans directly to a 2.1 kg box of vegetables, writing the total as "2.1 + 480 = 482.1 kg". Explain the mistake and give the correct total mass in kg.', answer: 'The student added the numbers without converting to the same unit first. 480 g must first be converted to kg: 480 g = 0.48 kg. Then add: 2.1 + 0.48 = 2.58 kg, not 482.1 kg.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered mass conversions, mixed units, scaling and real-world mass problems.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the conversion chain and mixed-unit rules, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Two-step unit conversions t↔kg↔g↔mg (0-4, Easy) — bridges t↔g and mg↔kg again, new numbers
        { difficulty: 'Easy', question: 'Convert 8.4 t directly to g.', answer: '8400000 g', checkMode: 'auto', correctAnswer: '8400000', correctAnswers: ['8400000', '8 400 000', '8400000g', '8 400 000 g'], explanation: 'Jumping t straight to g means multiplying by 1 000 twice: 1 000 × 1 000 = 1 000 000.\n8.4 × 1 000 000 = 8 400 000 g ✓' },
        { difficulty: 'Easy', question: 'A shipping container is loaded with 12.5 t of goods. What is this mass in grams?', answer: '12500000 g', checkMode: 'auto', correctAnswer: '12500000', correctAnswers: ['12500000', '12 500 000', '12500000g', '12 500 000 g'], explanation: '1 t = 1 000 000 g.\n12.5 × 1 000 000 = 12 500 000 g ✓' },
        { difficulty: 'Easy', question: 'Convert 1 950 000 mg directly to kg.', answer: '1.95 kg', checkMode: 'auto', correctAnswer: '1.95', correctAnswers: ['1.95', '1.95kg', '1.95 kg'], explanation: 'Jumping mg straight to kg means dividing by 1 000 twice: 1 000 × 1 000 = 1 000 000.\n1 950 000 ÷ 1 000 000 = 1.95 kg ✓' },
        { difficulty: 'Easy', question: 'A laboratory stores 4.6 kg of a chemical compound. Express this mass in milligrams.', answer: '4600000 mg', checkMode: 'auto', correctAnswer: '4600000', correctAnswers: ['4600000', '4 600 000', '4600000mg', '4 600 000 mg'], explanation: '1 kg = 1 000 000 mg.\n4.6 × 1 000 000 = 4 600 000 mg ✓' },
        { difficulty: 'Easy', question: 'A student converts 0.045 t to g like this: "0.045 × 1 000 = 45 g." Is this correct? Explain the mistake.', answer: 'No, the student only multiplied by 1 000 once, which converts t to kg, not t to g. Going from t to g needs both factors of 1 000: 0.045 × 1 000 × 1 000 = 45 000 g, not 45 g.', checkMode: 'self' },

        // Block 2 — Mixed units (5-8, Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Write 9.05 kg using mixed units (kg and g).', answer: '9 kg 50 g', checkMode: 'auto', correctAnswer: '9 kg 50 g', correctAnswers: ['9 kg 50 g', '9kg50g', '9 kg50g'], explanation: 'The whole number part, 9, stays as kg. The decimal part, 0.05, is converted to g: 0.05 × 1 000 = 50 g.\n9.05 kg = 9 kg 50 g ✓' },
        { difficulty: 'Easy-Medium', question: 'A parcel scale reading shows "7 kg 125 g". Write this as a single decimal number of kilograms.', answer: '7.125 kg', checkMode: 'auto', correctAnswer: '7.125', correctAnswers: ['7.125', '7.125kg', '7.125 kg'], explanation: '125 g = 125 ÷ 1 000 = 0.125 kg.\n7 kg 125 g = 7.125 kg ✓' },
        { difficulty: 'Medium', question: 'Which is heavier: 5 kg 80 g or 5.5 kg? Explain how you know.', answer: '5.5 kg is heavier. Converting to the same form: 5 kg 80 g = 5.08 kg, and 5.5 kg is greater than 5.08 kg.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A recipe label shows a mass of 3.4 kg. A student writes this using mixed units as "3 kg 4 g". Is this correct? Explain the mistake.', answer: 'No, the student forgot to multiply the decimal part by 1 000 to convert it to grams. The decimal part 0.4 means 0.4 × 1 000 = 400 g, not 4 g. So 3.4 kg = 3 kg 400 g, not 3 kg 4 g.', checkMode: 'self' },

        // Block 3 — Scaling recipes by mass (9-12, Medium)
        { difficulty: 'Medium', question: 'A bread roll recipe for 6 rolls needs 400 g of flour. Karabo wants to make 21 rolls. Find the scale factor, then find how much flour she needs.', answer: '1400 g', checkMode: 'auto', correctAnswer: '1400', correctAnswers: ['1400', '1 400', '1400g', '1 400 g'], explanation: 'Scale factor = 21 ÷ 6 = 3.5.\n400 × 3.5 = 1 400 g ✓' },
        { difficulty: 'Medium', question: 'A bread roll recipe for 6 rolls uses 400 g of flour and 12 g of yeast. A bakery wants to make 21 rolls. Find the mass of flour and yeast needed.', answer: 'Flour: 1400 g, Yeast: 42 g', checkMode: 'auto', correctAnswer: '1400,42', correctAnswers: ['1400,42', '1400g,42g', 'flour1400gyeast42g', '1 400 g, 42 g'], explanation: 'Scale factor = 21 ÷ 6 = 3.5.\nFlour: 400 × 3.5 = 1 400 g. Yeast: 12 × 3.5 = 42 g ✓' },
        { difficulty: 'Medium', question: 'A biscuit recipe was scaled up by a factor of 3.5, and now needs 1 050 g of flour. How much flour did the original recipe need?', answer: '300 g', checkMode: 'auto', correctAnswer: '300', correctAnswers: ['300', '300g', '300 g'], explanation: '"Scaled up" means the original was multiplied by 3.5, so working backwards means dividing: 1 050 ÷ 3.5 = 300 g ✓' },
        { difficulty: 'Medium', question: 'A baker scales a recipe from 10 rolls to 25 rolls. She calculates the scale factor as 25 − 10 = 15. Is her method correct? Explain the mistake and give the correct scale factor.', answer: 'No, her method is incorrect. A scale factor is found by dividing the new quantity by the original quantity, not subtracting. The correct scale factor is 25 ÷ 10 = 2.5.', checkMode: 'self' },

        // Block 4 — Price per kg and value comparisons (13-15, Medium)
        { difficulty: 'Medium', question: 'A 3 kg bag of sugar beans costs R99. Find the price per kilogram.', answer: 'R33', checkMode: 'auto', correctAnswer: '33', correctAnswers: ['33', 'R33'], explanation: 'R99 ÷ 3 = R33 per kg ✓' },
        { difficulty: 'Medium', question: 'A shop sells a 1 kg bag of flour for R21, and a 2.5 kg bag for R58. Which bag offers better value, and by how much per kg?', answer: '1 kg bag is better value, by R2.20 per kg', checkMode: 'auto', correctAnswer: '1kg bag, R2.20 per kg', correctAnswers: ['1kg,2.20', '1 kg bag by R2.20 per kg', '1kgbagbetterbyr2.20perkg', '1 kg bag, R2.20 per kg', '1kg,2.2'], explanation: '1 kg bag: R21 ÷ 1 = R21 per kg. 2.5 kg bag: R58 ÷ 2.5 = R23.20 per kg.\nR23.20 − R21 = R2.20. Since R21 is less than R23.20, the 1 kg bag is better value, by R2.20 per kg ✓' },
        { difficulty: 'Medium', question: 'A shopkeeper says: "A 3 kg bag of sugar beans for R99 is better value than a 5 kg bag for R150, because R99 is a smaller amount to pay." Is the shopkeeper correct? Explain, using price per kg.', answer: 'No, the shopkeeper is incorrect. Comparing the total price does not tell you which is better value — you must compare the price per kilogram. 3 kg bag: R99 ÷ 3 = R33 per kg. 5 kg bag: R150 ÷ 5 = R30 per kg. Since R30 is less than R33, the 5 kg bag is actually the better value.', checkMode: 'self' },

        // Block 5 — Multi-step real-world mass problems (16-19, Hard)
        { difficulty: 'Hard', question: 'A picnic basket contains a 3.2 kg roast chicken, a 275 g block of cheese, and a 900 g loaf of bread. Find the total mass, in kg.', answer: '4.375 kg', checkMode: 'auto', correctAnswer: '4.375', correctAnswers: ['4.375', '4.375kg', '4.375 kg'], explanation: 'Convert to kg: 275 g = 0.275 kg, 900 g = 0.9 kg.\n3.2 + 0.275 + 0.9 = 4.375 kg ✓' },
        { difficulty: 'Hard', question: 'An airline allows a luggage allowance of 23 kg per bag, for 2 bags. A traveller has packed one bag weighing 19.5 kg and another weighing 21.8 kg. How much of the total allowance is left unused, in kg?', answer: '4.7 kg', checkMode: 'auto', correctAnswer: '4.7', correctAnswers: ['4.7', '4.7kg', '4.7 kg'], explanation: 'Total allowance: 23 × 2 = 46 kg. Total packed: 19.5 + 21.8 = 41.3 kg.\n46 − 41.3 = 4.7 kg ✓' },
        { difficulty: 'Hard', question: 'A fruit seller packs apples into 6 crates of 3.5 kg each and sells at R11.20 per kilogram. Find the total mass packed, and the total amount earned.', answer: '21 kg, R235.20', checkMode: 'auto', correctAnswer: '21,235.20', correctAnswers: ['21kg,r235.20', '21 kg, R235.20', '21,235.2', '21kg r235.20'], explanation: 'Total mass: 6 × 3.5 = 21 kg.\nTotal earned: 21 × R11.20 = R235.20 ✓' },
        { difficulty: 'Hard', question: 'A student adds a 900 g bag of rice directly to a 1.8 kg bag of maize meal, writing the total as "1.8 + 900 = 901.8 kg". Explain the mistake and give the correct total mass in kg.', answer: 'The student added the numbers without converting to the same unit first. 900 g must first be converted to kg: 900 g = 0.9 kg. Then add: 1.8 + 0.9 = 2.7 kg, not 901.8 kg.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered mass conversions, mixed units, scaling and real-world mass problems.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the conversion chain and mixed-unit rules, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
