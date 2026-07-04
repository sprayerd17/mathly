import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (capacity/volume roles) ───────────────────────────────────
// capacity  → blue    (#2563eb)
// volume    → green   (#16a34a)
// ml        → orange  (#ea580c)
// litres    → red     (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Capacity and Volume',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MULTI-STEP CONVERSIONS AND MIXED UNITS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multi-step-conversions-mixed-units',
      title: 'Multi-Step Conversions and Mixed Units',
      icon: '🧴',
      explanation:
        `<p style="margin-bottom:16px;">You already know the key facts ${or('1 000 ml = 1 l')} and ${re('1 000 l = 1 kl')}. This year we combine these facts to convert directly between ${or('ml')} and ${re('kl')}, and to write capacity measurements using ${bl('mixed units')} — for example, expressing 2,3 l as "2 l 300 ml".</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('ml')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('l')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">kl</span>` +
        `</div>` +

        // ── Conversion chain ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The conversion chain</p>` +
        `<div style="text-align:center;font-size:1.05em;font-weight:700;color:#0f1f3d;margin-bottom:20px;padding:12px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;">kl ${re('× 1 000')} → ${re('l')} ${or('× 1 000')} → ${or('ml')}</div>` +

        `<p style="margin-bottom:16px;color:#374151;">To jump two steps (kl straight to ml), multiply by <strong>both</strong> conversion factors in a row: ${re('1 kl = 1 000 l = 1 000 000 ml')} (1 000 × 1 000). Going the other way, divide by both factors in a row.</p>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Converting to mixed units</p>` +
        `<p style="margin:0;color:#1e3a8a;">To write 2,3 l as l and ml: the whole number part (2) stays as ${re('l')}, and the decimal part (0,3) is converted to ${or('ml')} by multiplying by 1 000 → ${or('300 ml')}. So 2,3 l = <strong>2 l 300 ml</strong>.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Convert 1,5 kl directly to ml.',
          answer: `1,5 kl = ${or('1 500 000 ml')}`,
          steps: [
            `Going from kl to ${or('ml')} means jumping two steps: kl → l → ml.`,
            `Multiply by both factors: 1 000 × 1 000 = 1 000 000.`,
            `1,5 × 1 000 000 = 1 500 000.`,
            `<strong>Answer:</strong> 1,5 kl = ${or('1 500 000 ml')}. ✓`,
          ],
        },
        {
          question: 'Write 4,65 l using mixed units (l and ml).',
          answer: `4,65 l = ${re('4 l 650 ml')}`,
          steps: [
            `The whole number part, 4, stays as ${re('l')}.`,
            `The decimal part, 0,65, is converted to ${or('ml')}: ${or('0,65 × 1 000 = 650 ml')}.`,
            `<strong>Answer:</strong> 4,65 l = ${re('4 l 650 ml')}. ✓`,
          ],
        },
        {
          question: 'Convert 2 500 000 ml directly to kl.',
          answer: `2 500 000 ml = ${re('2,5 kl')}`,
          steps: [
            `Going from ${or('ml')} to kl: divide by 1 000 000.`,
            `2 500 000 ÷ 1 000 000 = 2,5.`,
            `<strong>Answer:</strong> 2 500 000 ml = ${re('2,5 kl')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Convert 2 kl directly to l.',
          answer: '2000 l',
          checkMode: 'auto',
          correctAnswer: '2000',
          correctAnswers: ['2000', '2 000', '2000l', '2 000 l'],
          explanation: '1 kl = 1 000 l.\n2 × 1 000 = 2 000 l ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Answer each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Write 6,4 l using mixed units (l and ml).',
              correctAnswer: '6 l 400 ml',
              correctAnswers: ['6 l 400 ml', '6l400ml', '6 l400ml'],
              explanation: '0,4 l = 0,4 × 1 000 = 400 ml.\n6,4 l = 6 l 400 ml ✓',
            },
            {
              label: 'b) Convert 0,8 kl directly to l.',
              correctAnswer: '800',
              correctAnswers: ['800', '800l', '800 l'],
              explanation: '0,8 × 1 000 = 800 l ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A water tank holds 2,25 kl of water.\n\na) Write this capacity using mixed units (kl and l).\nb) Convert this capacity directly to ml.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Mixed units (kl and l)',
              correctAnswer: '2 kl 250 l',
              correctAnswers: ['2 kl 250 l', '2kl250l', '2 kl250l'],
              explanation: '0,25 kl = 0,25 × 1 000 = 250 l.\n2,25 kl = 2 kl 250 l ✓',
            },
            {
              label: 'b) Capacity in ml',
              correctAnswer: '2250000',
              correctAnswers: ['2250000', '2 250 000'],
              explanation: '1 kl = 1 000 000 ml.\n2,25 × 1 000 000 = 2 250 000 ml ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing the full capacity conversion chain from kilolitres to litres to millilitres, demonstrating how to jump two steps at once and how to convert a decimal litre measurement into mixed litre and millilitre units" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — RELATING CAPACITY AND VOLUME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'relating-capacity-and-volume',
      title: 'Relating Capacity and Volume',
      icon: '🧊',
      explanation:
        `<p style="margin-bottom:16px;">${bl('Capacity')} is the amount a container can hold, measured in ${or('ml')}, ${re('l')} or kl. ${gr('Volume')} is the amount of space a 3D object takes up, measured in ${gr('cm³')} or ${gr('m³')}. These two ideas are directly connected by one key fact: ${gr('1 cm³ = 1 ml')}. This means if you know the volume of a container in cm³, you instantly know how much liquid it can hold in ml!</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('capacity')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('volume')}</span>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">1 cm³ = 1 ml</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A cube-shaped container with a volume of 1 cm³ holds exactly 1 ml of liquid.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">1 m³ = 1 000 l = 1 kl</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A container with a volume of 1 m³ holds exactly 1 kilolitre (1 000 litres) of liquid.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Using this connection</p>` +
        `<p style="margin:0;color:#1e3a8a;">To find how much a rectangular container can hold: 1) calculate its ${gr('volume')} using ${gr('V = length × width × height')} (in cm), 2) that number of cm³ equals the same number of ${bl('ml')}, 3) convert to litres if needed by dividing by 1 000.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A rectangular container is 20 cm long, 10 cm wide and 15 cm high. Find its capacity in ml.',
          answer: `Capacity = ${bl('3 000 ml')}`,
          steps: [
            `Calculate the ${gr('volume')}: ${gr('V = 20 × 10 × 15 = 3 000 cm³')}.`,
            `Use the fact ${gr('1 cm³ = 1 ml')}: ${bl('3 000 cm³ = 3 000 ml')}.`,
            `<strong>Answer:</strong> Capacity = ${bl('3 000 ml')}. ✓`,
          ],
        },
        {
          question: 'A fish tank is a rectangular prism 50 cm long, 30 cm wide and 40 cm high. Find its capacity in litres.',
          answer: `Capacity = ${bl('60 l')}`,
          steps: [
            `Calculate the ${gr('volume')}: ${gr('V = 50 × 30 × 40 = 60 000 cm³')}.`,
            `Convert to ml: ${bl('60 000 cm³ = 60 000 ml')}.`,
            `Convert to litres: ${bl('60 000 ÷ 1 000 = 60 l')}.`,
            `<strong>Answer:</strong> Capacity = ${bl('60 l')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A box has a volume of 500 cm³. Find its capacity in ml.',
          answer: '500 ml',
          checkMode: 'auto',
          correctAnswer: '500',
          correctAnswers: ['500', '500ml', '500 ml'],
          explanation: '1 cm³ = 1 ml, so 500 cm³ = 500 ml ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A rectangular container is 25 cm long, 20 cm wide and 10 cm high.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find its volume (cm³).',
              correctAnswer: '5000',
              correctAnswers: ['5000', '5 000'],
              explanation: '25 × 20 × 10 = 5 000 cm³ ✓',
            },
            {
              label: 'b) Find its capacity in litres.',
              correctAnswer: '5',
              correctAnswers: ['5', '5l', '5 l'],
              explanation: '5 000 cm³ = 5 000 ml = 5 000 ÷ 1 000 = 5 l ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A rectangular water tank is 2 m long, 1,5 m wide and 1 m high.\n\na) Find the volume of the tank in m³.\nb) Find its capacity in kilolitres.\nc) Find its capacity in litres.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Volume (m³)',
              correctAnswer: '3',
              explanation: 'V = 2 × 1,5 × 1 = 3 m³ ✓',
            },
            {
              label: 'b) Capacity (kl)',
              correctAnswer: '3',
              correctAnswers: ['3', '3kl', '3 kl'],
              explanation: '1 m³ = 1 kl, so 3 m³ = 3 kl ✓',
            },
            {
              label: 'c) Capacity (l)',
              correctAnswer: '3000',
              correctAnswers: ['3000', '3 000'],
              explanation: '3 kl × 1 000 = 3 000 l ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing a cube of exactly 1 cubic centimetre being filled with exactly 1 millilitre of water, then demonstrating how to find the capacity of a rectangular tank by first calculating its volume" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a small 1cm cube next to a measuring cylinder with 1ml marked, with an arrow and equals sign connecting them to show 1 cm cubed equals 1 ml" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — REAL-WORLD CAPACITY PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'real-world-capacity-problems',
      title: 'Real-World Capacity Problems',
      icon: '🌍',
      explanation:
        `<p style="margin-bottom:16px;">Many real-world capacity problems require you to ${or('convert between units')} before you can add, subtract, multiply or divide. Always check that all the given capacities are in the ${re('same unit')} before calculating.</p>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">A simple problem-solving checklist</p>` +
        `<p style="margin:0;color:#9a3412;">1) What is being asked, and in which unit? 2) Are all the given capacities in the ${or('same unit')}? Convert first if not. 3) What calculation(s) are needed? 4) Does your final answer make sense for the situation?</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A jug holds 1,5 l of juice. It is poured equally into 6 glasses. How much juice, in ml, does each glass get?',
          answer: `Each glass gets ${re('250 ml')}`,
          steps: [
            `Convert the total to ${or('ml')}: ${or('1,5 l = 1 500 ml')}.`,
            `Divide equally among 6 glasses: ${re('1 500 ÷ 6 = 250 ml')}.`,
            `<strong>Answer:</strong> Each glass gets ${re('250 ml')}. ✓`,
          ],
        },
        {
          question: 'A swimming pool holds 45 kl of water. Water is being pumped in at 500 l per hour. How many hours will it take to fill the empty pool?',
          answer: `${re('90 hours')}`,
          steps: [
            `Convert the pool capacity to litres: ${or('45 kl = 45 000 l')}.`,
            `Divide by the pumping rate: ${re('45 000 ÷ 500 = 90 hours')}.`,
            `<strong>Answer:</strong> It will take ${re('90 hours')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A 2 l bottle of juice is poured equally into 8 cups. How much juice, in ml, does each cup get?',
          answer: '250 ml',
          checkMode: 'auto',
          correctAnswer: '250',
          correctAnswers: ['250', '250ml', '250 ml'],
          explanation: '2 l = 2 000 ml.\n2 000 ÷ 8 = 250 ml ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A tank has a capacity of 12 kl. Water is pumped in at a rate of 300 l per hour.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Convert the tank capacity to litres.',
              correctAnswer: '12000',
              correctAnswers: ['12000', '12 000'],
              explanation: '12 kl × 1 000 = 12 000 l ✓',
            },
            {
              label: 'b) Find how many hours it takes to fill the empty tank.',
              correctAnswer: '40',
              explanation: '12 000 ÷ 300 = 40 hours ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A juice recipe makes 3,6 l of juice using a mix of 2 parts water to 1 part concentrate.\n\na) Find the total number of parts in the mix.\nb) Find the volume of concentrate used, in ml (1 part = total ÷ total number of parts).\nc) Find the volume of water used, in ml.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Total number of parts',
              correctAnswer: '3',
              explanation: '2 parts water + 1 part concentrate = 3 parts total ✓',
            },
            {
              label: 'b) Volume of concentrate (ml)',
              correctAnswer: '1200',
              correctAnswers: ['1200', '1 200'],
              explanation: '3,6 l = 3 600 ml.\n1 part = 3 600 ÷ 3 = 1 200 ml ✓',
            },
            {
              label: 'c) Volume of water (ml)',
              correctAnswer: '2400',
              correctAnswers: ['2400', '2 400'],
              explanation: '2 parts = 2 × 1 200 = 2 400 ml ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video working through a multi-step real-world capacity word problem, converting between units before dividing to share a quantity equally or find a filling rate" />',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered capacity and volume.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered capacity and volume.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
