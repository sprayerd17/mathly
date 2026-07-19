import type { PracticeSet, TopicData } from '@/src/data/grade4/en/numbers-operations'

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
        'Diagram showing a small 1cm cube next to a measuring cylinder with 1ml marked, with an arrow and equals sign connecting them to show 1 cm cubed equals 1 ml',

      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,80 70,80 85,65 45,65" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><polygon points="70,80 85,65 85,105 70,120" fill="#bfdbfe" stroke="#0f1f3d" stroke-width="2"/><rect x="30" y="80" width="40" height="40" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2"/><text x="55" y="52" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle">1 cm³</text><line x1="30" y1="128" x2="70" y2="128" stroke="#374151" stroke-width="1"/><text x="50" y="140" font-size="11" fill="#374151" text-anchor="middle">1 cm</text><text x="115" y="106" font-size="26" fill="#0f1f3d" font-weight="700" text-anchor="middle">=</text><ellipse cx="165" cy="65" rx="20" ry="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="145" y1="65" x2="145" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="185" y1="65" x2="185" y2="130" stroke="#0f1f3d" stroke-width="2"/><path d="M145,130 A20,6 0 0 0 185,130" fill="none" stroke="#0f1f3d" stroke-width="2"/><ellipse cx="165" cy="130" rx="20" ry="6" fill="#93c5fd"/><rect x="145" y="120" width="40" height="10" fill="#93c5fd"/><ellipse cx="165" cy="120" rx="20" ry="4" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/><text x="196" y="124" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">1 ml</text><text x="165" y="52" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">measuring cylinder</text><text x="110" y="148" font-size="12" fill="#374151" text-anchor="middle"><tspan x="110">1 cm³ of space holds</tspan><tspan x="110" dy="15">exactly 1 ml of liquid</tspan></text></svg>',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Basic unit conversions | 4-7 Multi-step kl↔ml & mixed units |
    // 8-10 Volume of rectangular prisms | 11-14 Relating volume to capacity |
    // 15-19 Real-world problems (sharing, rates, mixtures, comparisons)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Convert 0.45 l to millilitres.', checkMode: 'auto', correctAnswer: '450ml', correctAnswers: ['450ml', '450 ml', '450'], explanation: 'To convert litres to millilitres, multiply by 1 000. 0.45 × 1 000 = 450 ml.' },
        { difficulty: 'Easy', question: 'A medicine bottle contains 2 500 ml of syrup. Write this amount in litres.', checkMode: 'auto', correctAnswer: '2.5l', correctAnswers: ['2.5l', '2.5 l', '2.5'], explanation: 'To convert millilitres to litres, divide by 1 000. 2 500 ÷ 1 000 = 2.5 l.' },
        { difficulty: 'Easy', question: 'A farm water tank is filled to 2.7 kl. How many litres is this?', checkMode: 'auto', correctAnswer: '2700l', correctAnswers: ['2700l', '2700 l', '2700'], explanation: 'To convert kilolitres to litres, multiply by 1 000. 2.7 × 1 000 = 2 700 l.' },
        { difficulty: 'Easy', question: 'A reservoir holds 3 800 l of water. Convert this to kilolitres.', checkMode: 'auto', correctAnswer: '3.8kl', correctAnswers: ['3.8kl', '3.8 kl', '3.8'], explanation: 'To convert litres to kilolitres, divide by 1 000. 3 800 ÷ 1 000 = 3.8 kl.' },
        { difficulty: 'Easy-Medium', question: 'A fuel tanker carries 1.2 kl of diesel. Convert this directly to millilitres.', checkMode: 'auto', correctAnswer: '1200000ml', correctAnswers: ['1200000ml', '1200000 ml', '1200000', '1 200 000ml', '1 200 000 ml', '1 200 000'], explanation: 'kl to ml is a two-step jump: multiply by 1 000 000. 1.2 × 1 000 000 = 1 200 000 ml.' },
        { difficulty: 'Medium', question: 'A water reservoir contains 2 300 000 ml of water. Convert this directly to kilolitres.', checkMode: 'auto', correctAnswer: '2.3kl', correctAnswers: ['2.3kl', '2.3 kl', '2.3'], explanation: 'ml to kl is a two-step jump: divide by 1 000 000. 2 300 000 ÷ 1 000 000 = 2.3 kl.' },
        { difficulty: 'Medium', question: 'Write 3.85 l using mixed units (l and ml).', checkMode: 'auto', correctAnswer: '3l850ml', correctAnswers: ['3l850ml', '3 l 850 ml', '3l 850ml', '3 l850 ml'], explanation: 'The whole number part, 3, stays as litres. The decimal part, 0.85, converts to ml: 0.85 × 1 000 = 850 ml. So 3.85 l = 3 l 850 ml.' },
        { difficulty: 'Medium', question: 'Zinhle says that 0.6 kl equals 6 000 ml because she multiplied 0.6 by 10 000. Is Zinhle correct? Explain the mistake, if any.', checkMode: 'self', answer: 'Zinhle is incorrect. To convert kl directly to ml, you must multiply by 1 000 000, not 10 000. The correct working is 0.6 × 1 000 000 = 600 000 ml. Zinhle used far too small a conversion factor, which is why her answer is 100 times too small.' },
        { difficulty: 'Medium', question: 'A shoebox has length 12 cm, width 8 cm and height 5 cm. Calculate its volume.', checkMode: 'auto', correctAnswer: '480cm3', correctAnswers: ['480cm3', '480 cm3', '480', '480cm³', '480 cm³'], explanation: 'Volume of a rectangular prism: V = l × w × h. V = 12 × 8 × 5 = 480 cm³.' },
        { difficulty: 'Medium', question: 'A storage crate has a volume of 2 400 cm³. It is 20 cm long and 12 cm wide. Find its height.', checkMode: 'auto', correctAnswer: '10cm', correctAnswers: ['10cm', '10 cm', '10'], explanation: 'Since V = l × w × h, height = V ÷ (l × w). Height = 2 400 ÷ (20 × 12) = 2 400 ÷ 240 = 10 cm.' },
        { difficulty: 'Medium', question: 'Box A measures 10 cm by 8 cm by 6 cm. Box B measures 12 cm by 6 cm by 7 cm. Which box has the greater volume, and by how much?', checkMode: 'auto', correctAnswer: 'B24cm3', correctAnswers: ['B24cm3', 'B, 24cm3', 'B 24cm3', 'Box B 24cm3', 'boxB24cm3', 'B24cm³'], explanation: 'Box A: 10 × 8 × 6 = 480 cm³. Box B: 12 × 6 × 7 = 504 cm³. Box B is greater, by 504 − 480 = 24 cm³.' },
        { difficulty: 'Medium', question: 'A rectangular fish tank is 40 cm long, 25 cm wide and 30 cm high. Find its capacity in litres.', checkMode: 'auto', correctAnswer: '30l', correctAnswers: ['30l', '30 l', '30'], explanation: 'Volume: V = 40 × 25 × 30 = 30 000 cm³. Since 1 cm³ = 1 ml, this is 30 000 ml. Convert to litres: 30 000 ÷ 1 000 = 30 l.' },
        { difficulty: 'Medium', question: 'Kabelo says a rectangular water tank measuring 5 m by 3 m by 1.5 m has a capacity of 22.5 litres. Is Kabelo correct? Explain.', checkMode: 'self', answer: 'Kabelo is incorrect. The volume is V = 5 × 3 × 1.5 = 22.5 m³, but 1 m³ = 1 kl = 1 000 l, not 1 l. So the capacity is 22.5 kl, which equals 22 500 l — not 22.5 litres. Kabelo forgot to convert from cubic metres of volume into the much larger unit of litres.' },
        { difficulty: 'Medium', question: 'A water tank has a capacity of 8 000 l. Find its volume in m³.', checkMode: 'auto', correctAnswer: '8m3', correctAnswers: ['8m3', '8 m3', '8', '8m³', '8 m³'], explanation: 'Since 1 m³ = 1 000 l, divide by 1 000: 8 000 ÷ 1 000 = 8 m³.' },
        { difficulty: 'Medium', question: 'A swimming pool is 5 m long, 3 m wide and 1.5 m deep. Find its capacity in litres.', checkMode: 'auto', correctAnswer: '22500l', correctAnswers: ['22500l', '22500 l', '22500', '22 500l', '22 500 l', '22 500'], explanation: 'Volume: V = 5 × 3 × 1.5 = 22.5 m³. Since 1 m³ = 1 000 l, capacity = 22.5 × 1 000 = 22 500 l.' },
        { difficulty: 'Medium-Hard', question: 'A jug holds 18 l of lemonade. It is shared equally among 12 small bottles. How many millilitres does each bottle get?', checkMode: 'auto', correctAnswer: '1500ml', correctAnswers: ['1500ml', '1500 ml', '1500', '1.5l', '1.5 l'], explanation: 'Convert to ml: 18 × 1 000 = 18 000 ml. Share equally: 18 000 ÷ 12 = 1 500 ml per bottle.' },
        { difficulty: 'Medium-Hard', question: 'A tank with a capacity of 6 kl is being filled at a rate of 250 l per hour. How many hours will it take to fill the empty tank?', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 hours', '24hours'], explanation: 'Convert the tank capacity to litres: 6 × 1 000 = 6 000 l. Divide by the rate: 6 000 ÷ 250 = 24 hours.' },
        { difficulty: 'Medium-Hard', question: 'A juice recipe mixes concentrate and water in the ratio 3 : 2 to make 5 l of juice in total. Find the volume of concentrate needed, in ml.', checkMode: 'auto', correctAnswer: '3000ml', correctAnswers: ['3000ml', '3000 ml', '3000', '3l', '3 l'], explanation: 'Total parts = 3 + 2 = 5. Total juice in ml: 5 × 1 000 = 5 000 ml. One part = 5 000 ÷ 5 = 1 000 ml. Concentrate = 3 parts = 3 × 1 000 = 3 000 ml.' },
        { difficulty: 'Hard', question: 'A fuel tanker starts with a full 40 kl load. After deliveries it has 27.5 kl left. How many kilolitres of fuel were delivered?', checkMode: 'auto', correctAnswer: '12.5', correctAnswers: ['12.5', '12.5kl', '12.5 kl'], explanation: 'Fuel delivered = starting amount − amount left = 40 − 27.5 = 12.5 kl.' },
        { difficulty: 'Hard', question: 'A water reservoir holds 45 kl. A pump can move 3 000 l per hour, either filling or draining it. If the reservoir starts empty, how many hours does it take to fill completely, and how many litres does the pump move in total?', checkMode: 'self', answer: 'Convert the reservoir capacity to litres: 45 × 1 000 = 45 000 l. Time to fill = 45 000 ÷ 3 000 = 15 hours. Since the reservoir starts empty and ends full, the pump moves exactly 45 000 litres in total over those 15 hours.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You can convert confidently between ml, l and kl, calculate volume, and solve real-world capacity problems.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of capacity and volume — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on conversions and volume, then try again.' },
        { minScore: 0, message: 'Keep going! Work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'A cooldrink can holds 0.85 l of liquid. Convert this to millilitres.', checkMode: 'auto', correctAnswer: '850ml', correctAnswers: ['850ml', '850 ml', '850'], explanation: 'To convert litres to millilitres, multiply by 1 000. 0.85 × 1 000 = 850 ml.' },
        { difficulty: 'Easy', question: 'Convert 4 200 ml to litres.', checkMode: 'auto', correctAnswer: '4.2l', correctAnswers: ['4.2l', '4.2 l', '4.2'], explanation: 'To convert millilitres to litres, divide by 1 000. 4 200 ÷ 1 000 = 4.2 l.' },
        { difficulty: 'Easy', question: 'A water tank is filled to 1.35 kl. How many litres is this?', checkMode: 'auto', correctAnswer: '1350l', correctAnswers: ['1350l', '1350 l', '1350'], explanation: 'To convert kilolitres to litres, multiply by 1 000. 1.35 × 1 000 = 1 350 l.' },
        { difficulty: 'Easy', question: 'A dam contains 6 500 l of water. Convert this to kilolitres.', checkMode: 'auto', correctAnswer: '6.5kl', correctAnswers: ['6.5kl', '6.5 kl', '6.5'], explanation: 'To convert litres to kilolitres, divide by 1 000. 6 500 ÷ 1 000 = 6.5 kl.' },
        { difficulty: 'Easy-Medium', question: 'A water reservoir holds 2.4 kl. Convert this directly to millilitres.', checkMode: 'auto', correctAnswer: '2400000ml', correctAnswers: ['2400000ml', '2400000 ml', '2400000', '2 400 000ml', '2 400 000 ml', '2 400 000'], explanation: 'kl to ml is a two-step jump: multiply by 1 000 000. 2.4 × 1 000 000 = 2 400 000 ml.' },
        { difficulty: 'Medium', question: 'A fuel tanker carries 750 000 ml of petrol. Convert this directly to kilolitres.', checkMode: 'auto', correctAnswer: '0.75kl', correctAnswers: ['0.75kl', '0.75 kl', '0.75'], explanation: 'ml to kl is a two-step jump: divide by 1 000 000. 750 000 ÷ 1 000 000 = 0.75 kl.' },
        { difficulty: 'Medium', question: 'Write 5.08 l using mixed units (l and ml).', checkMode: 'auto', correctAnswer: '5l80ml', correctAnswers: ['5l80ml', '5 l 80 ml', '5l 80ml', '5 l80 ml'], explanation: 'The whole number part, 5, stays as litres. The decimal part, 0.08, converts to ml: 0.08 × 1 000 = 80 ml. So 5.08 l = 5 l 80 ml.' },
        { difficulty: 'Medium', question: 'Themba says that 0.15 kl equals 15 000 ml because he multiplied 0.15 by 100 000. Is Themba correct? Explain the mistake, if any.', checkMode: 'self', answer: 'Themba is incorrect. To convert kl directly to ml, you must multiply by 1 000 000, not 100 000. The correct working is 0.15 × 1 000 000 = 150 000 ml. Themba\'s conversion factor was 10 times too small, so his answer is 10 times too small.' },
        { difficulty: 'Medium', question: 'A storage crate has length 15 cm, width 10 cm and height 6 cm. Calculate its volume.', checkMode: 'auto', correctAnswer: '900cm3', correctAnswers: ['900cm3', '900 cm3', '900', '900cm³', '900 cm³'], explanation: 'Volume of a rectangular prism: V = l × w × h. V = 15 × 10 × 6 = 900 cm³.' },
        { difficulty: 'Medium', question: 'A shoebox has a volume of 3 000 cm³. It is 25 cm long and 10 cm wide. Find its height.', checkMode: 'auto', correctAnswer: '12cm', correctAnswers: ['12cm', '12 cm', '12'], explanation: 'Since V = l × w × h, height = V ÷ (l × w). Height = 3 000 ÷ (25 × 10) = 3 000 ÷ 250 = 12 cm.' },
        { difficulty: 'Medium', question: 'Crate P measures 9 cm by 9 cm by 9 cm. Crate Q measures 10 cm by 8 cm by 10 cm. Which crate has the greater volume, and by how much?', checkMode: 'auto', correctAnswer: 'Q71cm3', correctAnswers: ['Q71cm3', 'Q, 71cm3', 'Q 71cm3', 'Crate Q 71cm3', 'crateQ71cm3', 'Q71cm³'], explanation: 'Crate P: 9 × 9 × 9 = 729 cm³. Crate Q: 10 × 8 × 10 = 800 cm³. Crate Q is greater, by 800 − 729 = 71 cm³.' },
        { difficulty: 'Medium', question: 'A rectangular aquarium is 60 cm long, 30 cm wide and 35 cm high. Find its capacity in litres.', checkMode: 'auto', correctAnswer: '63l', correctAnswers: ['63l', '63 l', '63'], explanation: 'Volume: V = 60 × 30 × 35 = 63 000 cm³. Since 1 cm³ = 1 ml, this is 63 000 ml. Convert to litres: 63 000 ÷ 1 000 = 63 l.' },
        { difficulty: 'Medium', question: 'Naledi says a cooler box measuring 45 cm by 25 cm by 20 cm has a capacity of 22 500 ml. Is Naledi correct? Explain.', checkMode: 'self', answer: 'Naledi is correct. The volume is V = 45 × 25 × 20 = 22 500 cm³. Since 1 cm³ = 1 ml, the capacity is exactly 22 500 ml. Her working matches the volume-to-capacity rule correctly.' },
        { difficulty: 'Medium', question: 'A rectangular water tank has a capacity of 12 000 l. Find its volume in m³.', checkMode: 'auto', correctAnswer: '12m3', correctAnswers: ['12m3', '12 m3', '12', '12m³', '12 m³'], explanation: 'Since 1 m³ = 1 000 l, divide by 1 000: 12 000 ÷ 1 000 = 12 m³.' },
        { difficulty: 'Medium', question: 'A swimming pool is 4 m long, 2.5 m wide and 1.2 m deep. Find its capacity in litres.', checkMode: 'auto', correctAnswer: '12000l', correctAnswers: ['12000l', '12000 l', '12000', '12 000l', '12 000 l', '12 000'], explanation: 'Volume: V = 4 × 2.5 × 1.2 = 12 m³. Since 1 m³ = 1 000 l, capacity = 12 × 1 000 = 12 000 l.' },
        { difficulty: 'Medium-Hard', question: 'A container holds 15 l of fruit punch. It is shared equally among 25 small cups. How many millilitres does each cup get?', checkMode: 'auto', correctAnswer: '600ml', correctAnswers: ['600ml', '600 ml', '600'], explanation: 'Convert to ml: 15 × 1 000 = 15 000 ml. Share equally: 15 000 ÷ 25 = 600 ml per cup.' },
        { difficulty: 'Medium-Hard', question: 'A tank with a capacity of 4.5 kl is being filled at a rate of 150 l per hour. How many hours will it take to fill the empty tank?', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 hours', '30hours'], explanation: 'Convert the tank capacity to litres: 4.5 × 1 000 = 4 500 l. Divide by the rate: 4 500 ÷ 150 = 30 hours.' },
        { difficulty: 'Medium-Hard', question: 'A cordial recipe mixes concentrate and water in the ratio 1 : 5 to make 6 l of drink in total. Find the volume of concentrate needed, in ml.', checkMode: 'auto', correctAnswer: '1000ml', correctAnswers: ['1000ml', '1000 ml', '1000', '1l', '1 l'], explanation: 'Total parts = 1 + 5 = 6. Total drink in ml: 6 × 1 000 = 6 000 ml. One part = 6 000 ÷ 6 = 1 000 ml. Concentrate = 1 part = 1 000 ml.' },
        { difficulty: 'Hard', question: 'Tank X has a capacity of 8 kl and 3.6 kl has been drained out of it. Tank Y has a capacity of 7.5 kl and 2.9 kl has been drained out of it. Which tank has more water left, and by how many kilolitres?', checkMode: 'auto', correctAnswer: 'Y0.2kl', correctAnswers: ['Y0.2kl', 'Y, 0.2kl', 'Y 0.2kl', 'Tank Y 0.2kl', 'tankY0.2kl'], explanation: 'Tank X left: 8 − 3.6 = 4.4 kl. Tank Y left: 7.5 − 2.9 = 4.6 kl. Tank Y has more left, by 4.6 − 4.4 = 0.2 kl.' },
        { difficulty: 'Hard', question: 'A water reservoir holds 36 kl. A pump can move 2 400 l per hour, either filling or draining it. If the reservoir starts empty, how many hours does it take to fill completely, and how many litres does the pump move in total?', checkMode: 'self', answer: 'Convert the reservoir capacity to litres: 36 × 1 000 = 36 000 l. Time to fill = 36 000 ÷ 2 400 = 15 hours. Since the reservoir starts empty and ends full, the pump moves exactly 36 000 litres in total over those 15 hours.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can convert confidently between ml, l and kl, calculate volume, and solve real-world capacity problems.' },
        { minScore: 15, message: 'Great work! You have a solid understanding — review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on conversions and volume, then try again.' },
        { minScore: 0, message: 'Keep going! Work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'A small juice bottle holds 0.6 l. Convert this to millilitres.', checkMode: 'auto', correctAnswer: '600ml', correctAnswers: ['600ml', '600 ml', '600'], explanation: 'To convert litres to millilitres, multiply by 1 000. 0.6 × 1 000 = 600 ml.' },
        { difficulty: 'Easy', question: 'A cooldrink bottle holds 3 400 ml. Write this amount in litres.', checkMode: 'auto', correctAnswer: '3.4l', correctAnswers: ['3.4l', '3.4 l', '3.4'], explanation: 'To convert millilitres to litres, divide by 1 000. 3 400 ÷ 1 000 = 3.4 l.' },
        { difficulty: 'Easy', question: 'A municipal water tank is filled to 4.25 kl. How many litres is this?', checkMode: 'auto', correctAnswer: '4250l', correctAnswers: ['4250l', '4250 l', '4250'], explanation: 'To convert kilolitres to litres, multiply by 1 000. 4.25 × 1 000 = 4 250 l.' },
        { difficulty: 'Easy', question: 'A dam holds 9 200 l of water. Convert this to kilolitres.', checkMode: 'auto', correctAnswer: '9.2kl', correctAnswers: ['9.2kl', '9.2 kl', '9.2'], explanation: 'To convert litres to kilolitres, divide by 1 000. 9 200 ÷ 1 000 = 9.2 kl.' },
        { difficulty: 'Easy-Medium', question: 'A fuel tanker carries 3.6 kl of diesel. Convert this directly to millilitres.', checkMode: 'auto', correctAnswer: '3600000ml', correctAnswers: ['3600000ml', '3600000 ml', '3600000', '3 600 000ml', '3 600 000 ml', '3 600 000'], explanation: 'kl to ml is a two-step jump: multiply by 1 000 000. 3.6 × 1 000 000 = 3 600 000 ml.' },
        { difficulty: 'Medium', question: 'A water reservoir contains 1 850 000 ml of water. Convert this directly to kilolitres.', checkMode: 'auto', correctAnswer: '1.85kl', correctAnswers: ['1.85kl', '1.85 kl', '1.85'], explanation: 'ml to kl is a two-step jump: divide by 1 000 000. 1 850 000 ÷ 1 000 000 = 1.85 kl.' },
        { difficulty: 'Medium', question: 'Write 7.06 l using mixed units (l and ml).', checkMode: 'auto', correctAnswer: '7l60ml', correctAnswers: ['7l60ml', '7 l 60 ml', '7l 60ml', '7 l60 ml'], explanation: 'The whole number part, 7, stays as litres. The decimal part, 0.06, converts to ml: 0.06 × 1 000 = 60 ml. So 7.06 l = 7 l 60 ml.' },
        { difficulty: 'Medium', question: 'Refilwe says that 0.025 kl equals 250 ml because she multiplied 0.025 by 10 000. Is Refilwe correct? Explain the mistake, if any.', checkMode: 'self', answer: 'Refilwe is incorrect. To convert kl directly to ml, you must multiply by 1 000 000, not 10 000. The correct working is 0.025 × 1 000 000 = 25 000 ml. Refilwe\'s conversion factor was 100 times too small, so her answer is 100 times too small.' },
        { difficulty: 'Medium', question: 'A storage crate has length 20 cm, width 15 cm and height 8 cm. Calculate its volume.', checkMode: 'auto', correctAnswer: '2400cm3', correctAnswers: ['2400cm3', '2400 cm3', '2400', '2400cm³', '2400 cm³', '2 400cm3', '2 400 cm3'], explanation: 'Volume of a rectangular prism: V = l × w × h. V = 20 × 15 × 8 = 2 400 cm³.' },
        { difficulty: 'Medium', question: 'A shoebox has a volume of 1 800 cm³. It is 15 cm long and 8 cm wide. Find its height.', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15 cm', '15'], explanation: 'Since V = l × w × h, height = V ÷ (l × w). Height = 1 800 ÷ (15 × 8) = 1 800 ÷ 120 = 15 cm.' },
        { difficulty: 'Medium', question: 'Crate M measures 14 cm by 6 cm by 6 cm. Crate N measures 8 cm by 8 cm by 8 cm. Which crate has the greater volume, and by how much?', checkMode: 'auto', correctAnswer: 'N8cm3', correctAnswers: ['N8cm3', 'N, 8cm3', 'N 8cm3', 'Crate N 8cm3', 'crateN8cm3', 'N8cm³'], explanation: 'Crate M: 14 × 6 × 6 = 504 cm³. Crate N: 8 × 8 × 8 = 512 cm³. Crate N is greater, by 512 − 504 = 8 cm³.' },
        { difficulty: 'Medium', question: 'A rectangular fish tank is 50 cm long, 20 cm wide and 25 cm high. Find its capacity in litres.', checkMode: 'auto', correctAnswer: '25l', correctAnswers: ['25l', '25 l', '25'], explanation: 'Volume: V = 50 × 20 × 25 = 25 000 cm³. Since 1 cm³ = 1 ml, this is 25 000 ml. Convert to litres: 25 000 ÷ 1 000 = 25 l.' },
        { difficulty: 'Medium', question: 'Bongani says a cooler box measuring 20 cm by 15 cm by 8 cm has a capacity of 2 400 ml. Is Bongani correct? Explain.', checkMode: 'self', answer: 'Bongani is correct. The volume is V = 20 × 15 × 8 = 2 400 cm³. Since 1 cm³ = 1 ml, the capacity is exactly 2 400 ml. His working correctly applies the volume-to-capacity rule.' },
        { difficulty: 'Medium', question: 'A rectangular water tank has a capacity of 15 000 l. Find its volume in m³.', checkMode: 'auto', correctAnswer: '15m3', correctAnswers: ['15m3', '15 m3', '15', '15m³', '15 m³'], explanation: 'Since 1 m³ = 1 000 l, divide by 1 000: 15 000 ÷ 1 000 = 15 m³.' },
        { difficulty: 'Medium', question: 'A swimming pool is 6 m long, 3 m wide and 1.5 m deep. Find its capacity in litres.', checkMode: 'auto', correctAnswer: '27000l', correctAnswers: ['27000l', '27000 l', '27000', '27 000l', '27 000 l', '27 000'], explanation: 'Volume: V = 6 × 3 × 1.5 = 27 m³. Since 1 m³ = 1 000 l, capacity = 27 × 1 000 = 27 000 l.' },
        { difficulty: 'Medium-Hard', question: 'A jug holds 21 l of iced tea. It is shared equally among 14 bottles. How many millilitres does each bottle get?', checkMode: 'auto', correctAnswer: '1500ml', correctAnswers: ['1500ml', '1500 ml', '1500', '1.5l', '1.5 l'], explanation: 'Convert to ml: 21 × 1 000 = 21 000 ml. Share equally: 21 000 ÷ 14 = 1 500 ml per bottle.' },
        { difficulty: 'Medium-Hard', question: 'A tank with a capacity of 4.8 kl is being filled at a rate of 400 l per hour. How many hours will it take to fill the empty tank?', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 hours', '12hours'], explanation: 'Convert the tank capacity to litres: 4.8 × 1 000 = 4 800 l. Divide by the rate: 4 800 ÷ 400 = 12 hours.' },
        { difficulty: 'Medium-Hard', question: 'A squash recipe mixes concentrate and water in the ratio 1 : 3 to make 4 l of drink in total. Find the volume of concentrate needed, in ml.', checkMode: 'auto', correctAnswer: '1000ml', correctAnswers: ['1000ml', '1000 ml', '1000', '1l', '1 l'], explanation: 'Total parts = 1 + 3 = 4. Total drink in ml: 4 × 1 000 = 4 000 ml. One part = 4 000 ÷ 4 = 1 000 ml. Concentrate = 1 part = 1 000 ml.' },
        { difficulty: 'Hard', question: 'Tank M has a capacity of 12 kl and 4 750 l has been drained out of it. Tank N has a capacity of 11.5 kl and 4 200 l has been drained out of it. Which tank has more water left, and by how many litres?', checkMode: 'auto', correctAnswer: 'N50l', correctAnswers: ['N50l', 'N, 50l', 'N 50l', 'Tank N 50l', 'tankN50l'], explanation: 'Tank M left: 12 000 − 4 750 = 7 250 l. Tank N left: 11 500 − 4 200 = 7 300 l. Tank N has more left, by 7 300 − 7 250 = 50 l.' },
        { difficulty: 'Hard', question: 'A water reservoir holds 27 kl. A pump can move 1 800 l per hour, either filling or draining it. If the reservoir starts empty, how many hours does it take to fill completely, and how many litres does the pump move in total?', checkMode: 'self', answer: 'Convert the reservoir capacity to litres: 27 × 1 000 = 27 000 l. Time to fill = 27 000 ÷ 1 800 = 15 hours. Since the reservoir starts empty and ends full, the pump moves exactly 27 000 litres in total over those 15 hours.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply unit conversions, volume calculations, and capacity problem-solving to real-world situations.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of these skills — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on volume and real-world problems, then try again.' },
        { minScore: 0, message: 'Keep going! Work through the study guide again and retry this set.' },
      ],
    },
  ] as PracticeSet[],
}
