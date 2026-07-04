import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (unit of length roles) ────────────────────────────────────
// mm (millimetres) → blue   (#2563eb)
// cm (centimetres) → green  (#16a34a)
// m  (metres)      → orange (#ea580c)
// km (kilometres)  → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Length',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MULTI-STEP CONVERSIONS AND MIXED UNITS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multi-step-conversions-mixed-units',
      title: 'Multi-Step Conversions and Mixed Units',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">You already know how to convert between ${bl('millimetres')}, ${gr('centimetres')}, ${or('metres')} and ${re('kilometres')} using the key facts ${gr('10 mm = 1 cm')}, ${or('100 cm = 1 m')} and ${re('1 000 m = 1 km')}. This year we combine these facts to convert directly between units that are ${bl('two steps apart')} (like mm to m, or cm to km), and to write measurements using ${or('mixed units')} — for example, expressing 2,35 km as "2 km 350 m".</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('mm')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('cm')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('m')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('km')}</span>` +
        `</div>` +

        // ── Two-step conversion chain ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The conversion chain</p>` +
        `<div style="text-align:center;font-size:1.05em;font-weight:700;color:#0f1f3d;margin-bottom:20px;padding:12px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;">${re('km')} ${re('× 1 000')} → ${or('m')} ${or('× 100')} → ${gr('cm')} ${gr('× 10')} → ${bl('mm')}</div>` +

        `<p style="margin-bottom:16px;color:#374151;">To jump two steps (e.g. km straight to cm), simply multiply by <strong>both</strong> conversion factors in a row: ${re('1 km = 1 000 m = 100 000 cm')} (1 000 × 100). Going the other way, divide by both factors in a row.</p>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Converting to mixed units</p>` +
        `<p style="margin:0;color:#1e3a8a;">To write 2,35 km as km and m: the whole number part (2) stays as ${re('km')}, and the decimal part (0,35) is converted to ${or('m')} by multiplying by 1 000 → ${or('350 m')}. So 2,35 km = <strong>2 km 350 m</strong>.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Convert 4,2 km directly to cm.',
          answer: `4,2 km = ${re('420 000 cm')}`,
          steps: [
            `Going from ${re('km')} to ${gr('cm')} means jumping two steps: km → m → cm.`,
            `Multiply by both factors: ${re('1 000 × 100 = 100 000')}.`,
            `${re('4,2 × 100 000 = 420 000')}.`,
            `<strong>Answer:</strong> 4,2 km = ${re('420 000 cm')}. ✓`,
          ],
        },
        {
          question: 'Write 3,65 km using mixed units (km and m).',
          answer: `3,65 km = ${or('3 km 650 m')}`,
          steps: [
            `The whole number part, 3, stays as ${re('km')}.`,
            `The decimal part, 0,65, is converted to ${or('m')}: ${or('0,65 × 1 000 = 650 m')}.`,
            `<strong>Answer:</strong> 3,65 km = ${or('3 km 650 m')}. ✓`,
          ],
        },
        {
          question: 'Convert 3 500 mm directly to m.',
          answer: `3 500 mm = ${or('3,5 m')}`,
          steps: [
            `Going from ${bl('mm')} to ${or('m')} means jumping two steps: mm → cm → m.`,
            `Divide by both factors: ${bl('10 × 100 = 1 000')}.`,
            `${bl('3 500 ÷ 1 000 = 3,5')}.`,
            `<strong>Answer:</strong> 3 500 mm = ${or('3,5 m')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Convert 2 km directly to cm.',
          answer: '200 000 cm',
          checkMode: 'auto',
          correctAnswer: '200000',
          correctAnswers: ['200000', '200 000', '200000cm', '200 000 cm'],
          explanation: '1 km = 100 000 cm.\n2 × 100 000 = 200 000 cm ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Answer each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Write 5,4 km using mixed units (km and m).',
              correctAnswer: '5 km 400 m',
              correctAnswers: ['5 km 400 m', '5km400m', '5 km400m'],
              explanation: '0,4 km = 0,4 × 1 000 = 400 m.\n5,4 km = 5 km 400 m ✓',
            },
            {
              label: 'b) Convert 6 200 mm directly to m.',
              correctAnswer: '6.2',
              correctAnswers: ['6.2', '6,2', '6.2m', '6,2m'],
              explanation: '1 000 mm = 1 m.\n6 200 ÷ 1 000 = 6,2 m ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A road sign shows the distance to a town as 12,08 km.\n\na) Write this distance using mixed units (km and m).\nb) Convert this distance directly to cm.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Mixed units (km and m)',
              correctAnswer: '12 km 80 m',
              correctAnswers: ['12 km 80 m', '12km80m', '12 km80m'],
              explanation: '0,08 km = 0,08 × 1 000 = 80 m.\n12,08 km = 12 km 80 m ✓',
            },
            {
              label: 'b) Distance in cm',
              correctAnswer: '1208000',
              correctAnswers: ['1208000', '1 208 000'],
              explanation: '1 km = 100 000 cm.\n12,08 × 100 000 = 1 208 000 cm ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing the full length conversion chain from km to m to cm to mm, demonstrating how to jump two steps at once and how to convert a decimal kilometre measurement into mixed km and m units" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CALCULATING WITH LENGTH IN CONTEXT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-with-length-in-context',
      title: 'Calculating with Length in Context',
      icon: '🗺️',
      explanation:
        `<p style="margin-bottom:16px;">Length problems often combine several measurements, or connect length to other ideas like ${or('scale')} and ${gr('rate')}. A ${or('scale')} on a map or diagram tells us how a drawn distance relates to a real distance — for example, a scale of ${or('1 : 100 000')} means every 1 cm on the map represents 100 000 cm (which is 1 km) in real life.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('map/scale distance')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('real distance')}</span>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Working with a scale</p>` +
        `<p style="margin:0;color:#1e3a8a;">A scale of ${or('1 : 100 000')} means: map distance × 100 000 = ${gr('real distance')} (in the same unit). Always check whether the answer needs converting into a more sensible unit afterwards, like km instead of cm.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A map has a scale of 1 : 50 000. The distance between two towns on the map is 6 cm. Find the real distance in km.',
          answer: `Real distance = ${gr('3 km')}`,
          steps: [
            `Multiply the map distance by the scale: ${or('6 × 50 000 = 300 000 cm')}.`,
            `Convert to km: ${gr('300 000 ÷ 100 000 = 3 km')}.`,
            `<strong>Answer:</strong> The real distance is ${gr('3 km')}. ✓`,
          ],
        },
        {
          question: 'Sipho walks around a rectangular field 4 times. The field is 120 m long and 80 m wide. Find the total distance he walks, in km.',
          answer: `Total distance = ${gr('1,6 km')}`,
          steps: [
            `Find the perimeter of the field: ${or('P = 2 × (120 + 80) = 2 × 200 = 400 m')}.`,
            `Multiply by 4 laps: ${or('400 × 4 = 1 600 m')}.`,
            `Convert to km: ${gr('1 600 ÷ 1 000 = 1,6 km')}.`,
            `<strong>Answer:</strong> Sipho walks ${gr('1,6 km')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A map has a scale of 1 : 10 000. The distance between two schools on the map is 8 cm. Find the real distance in metres.',
          answer: '800 m',
          checkMode: 'auto',
          correctAnswer: '800',
          correctAnswers: ['800', '800m', '800 m'],
          explanation: '8 × 10 000 = 80 000 cm.\n80 000 cm ÷ 100 = 800 m ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A rectangular garden is 15 m long and 9 m wide. Lerato walks around the edge of the garden 3 times.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the perimeter of the garden (m).',
              correctAnswer: '48',
              explanation: 'P = 2 × (15 + 9) = 2 × 24 = 48 m ✓',
            },
            {
              label: 'b) Find the total distance Lerato walks (m).',
              correctAnswer: '144',
              explanation: '48 × 3 = 144 m ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A architectural plan of a house is drawn at a scale of 1 : 200. A wall measures 3,5 cm on the plan.\n\na) Find the real length of the wall in metres.\nb) If 4 identical walls form a square room, find the perimeter of the room in metres.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Real length of the wall (m)',
              correctAnswer: '7',
              explanation: '3,5 × 200 = 700 cm.\n700 ÷ 100 = 7 m ✓',
            },
            {
              label: 'b) Perimeter of the square room (m)',
              correctAnswer: '28',
              explanation: '7 × 4 = 28 m ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how to use a map scale to find real-world distances from a drawn measurement, followed by a perimeter example involving multiple laps around a field" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — REAL-WORLD LENGTH PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'real-world-length-problems',
      title: 'Real-World Length Problems',
      icon: '🌍',
      explanation:
        `<p style="margin-bottom:16px;">Many real-world length problems require you to choose the ${or('correct unit')}, ${gr('convert between units')}, and then perform a calculation — often more than one operation in a row. Read each problem carefully to work out exactly what is being asked before you start calculating.</p>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">A simple problem-solving checklist</p>` +
        `<p style="margin:0;color:#9a3412;">1) What is being asked, and in which unit? 2) Are all the given measurements in the ${or('same unit')}? Convert first if not. 3) What calculation(s) are needed? 4) Does your final answer make sense for the situation?</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thandi buys 3 pieces of ribbon: 1,25 m, 85 cm and 0,4 m. Find the total length of ribbon she buys, in metres.',
          answer: `Total = ${gr('2,5 m')}`,
          steps: [
            `Convert everything to the ${or('same unit')} (metres): 85 cm = 0,85 m.`,
            `Add the three lengths: ${gr('1,25 + 0,85 + 0,4 = 2,5 m')}.`,
            `<strong>Answer:</strong> Total ribbon = ${gr('2,5 m')}. ✓`,
          ],
        },
        {
          question: 'A ribbon that is 4,5 m long is cut into equal pieces, each 30 cm long. How many pieces can be cut?',
          answer: `${gr('15 pieces')}`,
          steps: [
            `Convert the total length to the ${or('same unit')} as the pieces (cm): ${or('4,5 m = 450 cm')}.`,
            `Divide the total by the length of each piece: ${gr('450 ÷ 30 = 15')}.`,
            `<strong>Answer:</strong> ${gr('15 pieces')} can be cut. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A rope 6 m long is cut into pieces that are each 75 cm long. How many pieces can be cut?',
          answer: '8 pieces',
          checkMode: 'auto',
          correctAnswer: '8',
          explanation: '6 m = 600 cm.\n600 ÷ 75 = 8 pieces ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Kagiso buys curtain material: 2,3 m for the lounge and 145 cm for the bedroom.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the total length of material bought, in metres.',
              correctAnswer: '3.75',
              correctAnswers: ['3.75', '3,75'],
              explanation: '145 cm = 1,45 m.\n2,3 + 1,45 = 3,75 m ✓',
            },
            {
              label: 'b) If material costs R60 per metre, find the total cost.',
              correctAnswer: '225',
              correctAnswers: ['225', 'R225'],
              explanation: '3,75 × R60 = R225 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A school is fencing a rectangular sports field 90 m long and 45 m wide, leaving a 3 m gap for a gate. Fencing costs R85 per metre.\n\na) Find the perimeter of the field (m).\nb) Find the length of fencing needed, after leaving the gap (m).\nc) Find the total cost of the fencing.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Perimeter of the field (m)',
              correctAnswer: '270',
              explanation: 'P = 2 × (90 + 45) = 2 × 135 = 270 m ✓',
            },
            {
              label: 'b) Length of fencing needed (m)',
              correctAnswer: '267',
              explanation: '270 − 3 = 267 m ✓',
            },
            {
              label: 'c) Total cost of fencing',
              correctAnswer: '22695',
              correctAnswers: ['22695', 'R22695', 'R22 695', '22 695'],
              explanation: '267 × R85 = R22 695 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video working through a multi-step real-world length word problem, converting between units before adding, subtracting, or dividing to reach the final answer" />',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered length.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered length.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
