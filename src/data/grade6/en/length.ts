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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Two-step unit conversions mm-cm-m-km (0-4, Easy)
        { difficulty: 'Easy', question: 'A road sign shows the distance to the next town as 5.4 km. Convert this distance directly to cm.', answer: '540000 cm', checkMode: 'auto', correctAnswer: '540000', correctAnswers: ['540000', '540 000', '540000cm', '540 000 cm'], explanation: 'Jumping km straight to cm means multiplying by 1 000 then 100: 1 000 × 100 = 100 000.\n5.4 × 100 000 = 540 000 cm ✓' },
        { difficulty: 'Easy', question: 'A new pencil measures 720 mm when several are laid end to end. Convert this length directly to m.', answer: '0.72 m', checkMode: 'auto', correctAnswer: '0.72', correctAnswers: ['0.72', '0,72', '0.72m', '0,72m'], explanation: 'Jumping mm straight to m means dividing by 10 then 100: 10 × 100 = 1 000.\n720 ÷ 1 000 = 0.72 m ✓' },
        { difficulty: 'Easy', question: 'The long jump pit at a school sports field is 3.6 m from the take-off board to the far edge. Convert this length directly to mm.', answer: '3600 mm', checkMode: 'auto', correctAnswer: '3600', correctAnswers: ['3600', '3 600', '3600mm', '3 600 mm'], explanation: 'Jumping m straight to mm means multiplying by 100 then 10: 100 × 10 = 1 000.\n3.6 × 1 000 = 3 600 mm ✓' },
        { difficulty: 'Easy', question: 'A road sign at the edge of town measures a stretch of pavement as 8 200 cm long. Convert this length directly to km.', answer: '0.082 km', checkMode: 'auto', correctAnswer: '0.082', correctAnswers: ['0.082', '0,082', '0.082km', '0,082km'], explanation: 'Jumping cm straight to km means dividing by 100 then 1 000: 100 × 1 000 = 100 000.\n8 200 ÷ 100 000 = 0.082 km ✓' },
        { difficulty: 'Easy', question: 'A student says: "To go from km to mm, I can just multiply by 1 000, since that\'s the km-to-m factor." Using this method, they convert 3 km to "3 000 mm". Explain the mistake and give the correct answer.', answer: 'The student only used one conversion factor. Going from km to mm is three steps apart (km → m → cm → mm), so all the factors must be combined: 1 000 × 100 × 10 = 1 000 000. The correct conversion is 3 × 1 000 000 = 3 000 000 mm, not 3 000 mm.', checkMode: 'self' },

        // Block 2 — Mixed units km/m (5-8, Easy)
        { difficulty: 'Easy', question: 'A road sign gives the distance to the next rest stop as 6.75 km. Write this distance using mixed units (km and m).', answer: '6 km 750 m', checkMode: 'auto', correctAnswer: '6 km 750 m', correctAnswers: ['6 km 750 m', '6km750m', '6 km750m'], explanation: 'The whole number part, 6, stays as km. The decimal part, 0.75, is converted to m: 0.75 × 1 000 = 750 m.\n6.75 km = 6 km 750 m ✓' },
        { difficulty: 'Easy', question: 'A race distance is displayed on a finish-line banner as "5 km 300 m". Write this distance as a single decimal number of km.', answer: '5.3 km', checkMode: 'auto', correctAnswer: '5.3', correctAnswers: ['5.3', '5,3', '5.3km', '5,3km'], explanation: '300 m = 300 ÷ 1 000 = 0.3 km.\n5 km 300 m = 5.3 km ✓' },
        { difficulty: 'Easy', question: 'A hiking app shows a trail length of 4.9 km. A hiker writes this using mixed units as "4 km 90 m". Is this correct? Explain the mistake.', answer: 'No, the hiker made a mistake. The decimal part, 0.9, must be multiplied by 1 000 to convert it to metres: 0.9 × 1 000 = 900 m, not 90 m. So 4.9 km = 4 km 900 m, not 4 km 90 m.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Two hiking trail signs show the remaining distance as "4 km 250 m" and "4.3 km". Which distance is greater?', answer: '4.3 km is greater', checkMode: 'auto', correctAnswer: '4.3 km', correctAnswers: ['4.3 km', '4,3 km', '4.3km', '4,3km'], explanation: 'Convert both to the same form: 4 km 250 m = 4.25 km. Compare 4.25 km and 4.3 km: 4.3 km is greater than 4.25 km.\nSo 4.3 km is the greater distance ✓' },

        // Block 3 — Perimeter of rectangles/squares (9-12, Medium, DIAGRAM-FLAGGED)
        // Diagram data: rectangular field, length 60 m, width 35 m
        { difficulty: 'Medium', question: 'A rectangular sports field measures 60 m long and 35 m wide, as shown below. Find the perimeter of the field, then find the total distance covered by 4 laps around it.', answer: 'Perimeter = 190 m, total distance = 760 m', checkMode: 'auto', correctAnswer: '190,760', correctAnswers: ['190,760', '190m,760m', '190, 760', '190 m, 760 m'], explanation: 'Perimeter: P = 2 × (60 + 35) = 2 × 95 = 190 m.\nTotal distance for 4 laps: 190 × 4 = 760 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">60 m</text><text x="18" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb" transform="rotate(-90 18 86)">35 m</text></svg>' },
        { difficulty: 'Medium', question: 'A vegetable garden is fenced on a 40 m by 22 m rectangular plot, as shown below. A farmer walks around the outside edge 6 times while checking the fence. Find the perimeter of the plot, and the total distance walked, in km.', answer: 'Perimeter = 124 m, total distance = 0.744 km', checkMode: 'auto', correctAnswer: '124,0.744', correctAnswers: ['124,0.744', '124m,0.744km', '124, 0.744', '124 m, 0.744 km', '124,0,744', '124 m, 0,744 km'], explanation: 'Perimeter: P = 2 × (40 + 22) = 2 × 62 = 124 m.\nTotal distance for 6 laps: 124 × 6 = 744 m = 0.744 km ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="50" width="150" height="65" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="35" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">40 m</text><text x="18" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb" transform="rotate(-90 18 86)">22 m</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular assembly hall floor has a perimeter of 120 m. The hall is 42 m long, as shown below. Find its width.', answer: '18 m', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18m', '18 m'], explanation: 'Half the perimeter = length + width: 120 ÷ 2 = 60 m.\nWidth = 60 − 42 = 18 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">42 m</text><text x="16" y="90" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><path d="M 6 68 A 12 16 0 0 1 6 100" fill="none" stroke="#ea580c" stroke-width="1.5"/></svg>' },
        { difficulty: 'Medium', question: 'A tennis court is 26 m long and 14 m wide (including the surrounding run-off area). A student calculates the perimeter as "26 + 14 = 40 m". Explain the mistake and give the correct perimeter.', answer: 'The student only added the length and width once, forgetting that a rectangle has two lengths and two widths. The perimeter of a rectangle is found using P = 2 × (length + width). The correct perimeter is P = 2 × (26 + 14) = 2 × 40 = 80 m, not 40 m.', checkMode: 'self' },

        // Block 4 — Map scale problems (13-15, Medium, DIAGRAM-FLAGGED)
        // Diagram data: map scale 1:25 000, map distance 9 cm
        { difficulty: 'Medium', question: 'A map has a scale of 1 : 25 000. The distance between two towns on the map is 9 cm, as shown below. Find the real distance in km.', answer: '2.25 km', checkMode: 'auto', correctAnswer: '2.25', correctAnswers: ['2.25', '2,25', '2.25km', '2,25km'], explanation: 'Multiply the map distance by the scale: 9 × 25 000 = 225 000 cm.\nConvert to km: 225 000 ÷ 100 000 = 2.25 km ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="80" r="5" fill="#0f1f3d"/><circle cx="180" cy="80" r="5" fill="#0f1f3d"/><line x1="40" y1="80" x2="180" y2="80" stroke="#0f1f3d" stroke-width="2"/><text x="40" y="105" text-anchor="middle" font-size="12" fill="#374151">Town A</text><text x="180" y="105" text-anchor="middle" font-size="12" fill="#374151">Town B</text><text x="110" y="68" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">9 cm</text><text x="110" y="140" text-anchor="middle" font-size="13" fill="#374151">Scale 1 : 25 000</text></svg>' },
        { difficulty: 'Medium', question: 'A map has a scale of 1 : 25 000. Two towns are actually 5 km apart. Find the distance between them on the map, in cm.', answer: '20 cm', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20cm', '20 cm'], explanation: 'Convert the real distance to cm: 5 km = 500 000 cm.\nDivide by the scale: 500 000 ÷ 25 000 = 20 cm ✓' },
        { difficulty: 'Medium', question: 'A school hall floor plan is drawn at a scale of 1 : 150. On the plan, each of the 4 identical walls of the (square) hall measures 9 cm.\n\na) Find the real length of one wall, in metres.\nb) Find the perimeter of the hall, in metres.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Real length of one wall (m)', correctAnswer: '13.5', correctAnswers: ['13.5', '13,5', '13.5m', '13,5m'], explanation: '9 × 150 = 1 350 cm.\n1 350 ÷ 100 = 13.5 m ✓' },
          { label: 'b) Perimeter of the hall (m)', correctAnswer: '54', correctAnswers: ['54', '54m', '54 m'], explanation: '13.5 × 4 = 54 m ✓' },
        ] },

        // Block 5 — Adding/subtracting mixed-unit lengths (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'For a costume, Ayesha buys 1.85 m of blue ribbon, 60 cm of gold ribbon and 220 cm of white ribbon. Find the total length of ribbon she buys, in metres.', answer: '4.65 m', checkMode: 'auto', correctAnswer: '4.65', correctAnswers: ['4.65', '4,65', '4.65m', '4,65m'], explanation: 'Convert everything to the same unit (metres): 60 cm = 0.6 m, 220 cm = 2.2 m.\nAdd the three lengths: 1.85 + 0.6 + 2.2 = 4.65 m ✓' },
        { difficulty: 'Medium-Hard', question: 'A smallholding needs 52.4 m of fencing to enclose a paddock, but a 2.4 m gap is left for a gate. How much fencing wire must actually be bought?', answer: '50 m', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50m', '50 m'], explanation: 'Subtract the gate gap from the total distance: 52.4 − 2.4 = 50 m ✓' },

        // Block 6 — Multi-step real-world length word problems (18-19, Hard)
        { difficulty: 'Hard', question: 'A roll of rope is 8.4 m long. A scout leader cuts it into equal pieces, each 60 cm long, for a knot-tying activity.\n\na) How many pieces can be cut?\nb) A tailor separately buys 6.5 m of curtain fabric at R48 per metre. Find the total cost of the fabric.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Number of pieces of rope', correctAnswer: '14', correctAnswers: ['14', '14 pieces'], explanation: 'Convert the total length to the same unit as the pieces (cm): 8.4 m = 840 cm.\nDivide the total by the length of each piece: 840 ÷ 60 = 14 pieces ✓' },
          { label: 'b) Total cost of the fabric', correctAnswer: '312', correctAnswers: ['312', 'R312'], explanation: '6.5 × R48 = R312 ✓' },
        ] },
        { difficulty: 'Hard', question: 'A square garden has sides of 20 m. It is fenced all the way around, except for a 2.5 m gap left for a gate. Fencing costs R38 per metre.\n\na) Find the perimeter of the garden (m).\nb) Find the length of fencing needed, after leaving the gap (m).\nc) Find the total cost of the fencing.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Perimeter of the garden (m)', correctAnswer: '80', correctAnswers: ['80', '80m', '80 m'], explanation: 'P = 4 × 20 = 80 m ✓' },
          { label: 'b) Length of fencing needed (m)', correctAnswer: '77.5', correctAnswers: ['77.5', '77,5', '77.5m', '77,5m'], explanation: '80 − 2.5 = 77.5 m ✓' },
          { label: 'c) Total cost of fencing', correctAnswer: '2945', correctAnswers: ['2945', 'R2945', 'R2 945', '2 945'], explanation: '77.5 × R38 = R2 945 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered length conversions, mixed units, perimeter and scale problems.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the conversion chain and perimeter rules, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Two-step unit conversions mm-cm-m-km (0-4, Easy)
        { difficulty: 'Easy', question: 'A road sign shows the distance to the next town as 3.15 km. Convert this distance directly to cm.', answer: '315000 cm', checkMode: 'auto', correctAnswer: '315000', correctAnswers: ['315000', '315 000', '315000cm', '315 000 cm'], explanation: 'Jumping km straight to cm means multiplying by 1 000 then 100: 1 000 × 100 = 100 000.\n3.15 × 100 000 = 315 000 cm ✓' },
        { difficulty: 'Easy', question: 'The width of a classroom doorframe is measured as 940 mm. Convert this length directly to m.', answer: '0.94 m', checkMode: 'auto', correctAnswer: '0.94', correctAnswers: ['0.94', '0,94', '0.94m', '0,94m'], explanation: 'Jumping mm straight to m means dividing by 10 then 100: 10 × 100 = 1 000.\n940 ÷ 1 000 = 0.94 m ✓' },
        { difficulty: 'Easy', question: 'A netball court marking is measured as 1.8 m from the centre circle to the transverse line. Convert this length directly to mm.', answer: '1800 mm', checkMode: 'auto', correctAnswer: '1800', correctAnswers: ['1800', '1 800', '1800mm', '1 800 mm'], explanation: 'Jumping m straight to mm means multiplying by 100 then 10: 100 × 10 = 1 000.\n1.8 × 1 000 = 1 800 mm ✓' },
        { difficulty: 'Easy', question: 'A road sign records a section of newly resurfaced road as 15 400 cm long. Convert this length directly to km.', answer: '0.154 km', checkMode: 'auto', correctAnswer: '0.154', correctAnswers: ['0.154', '0,154', '0.154km', '0,154km'], explanation: 'Jumping cm straight to km means dividing by 100 then 1 000: 100 × 1 000 = 100 000.\n15 400 ÷ 100 000 = 0.154 km ✓' },
        { difficulty: 'Easy', question: 'A student says: "To go from cm to mm, I can just divide by 1 000, since that\'s the same as going up two units." Using this method, they convert 400 cm to "0.4 mm". Explain the mistake and give the correct answer.', answer: 'The student confused the direction of the conversion, and also used the wrong factor. Going from cm to mm means the unit is getting smaller, so you must multiply, not divide. Only one step is needed: 1 cm = 10 mm. The correct conversion is 400 × 10 = 4 000 mm, not 0.4 mm.', checkMode: 'self' },

        // Block 2 — Mixed units km/m (5-8, Easy)
        { difficulty: 'Easy', question: 'A cycling route map gives the distance to the next checkpoint as 2.4 km. Write this distance using mixed units (km and m).', answer: '2 km 400 m', checkMode: 'auto', correctAnswer: '2 km 400 m', correctAnswers: ['2 km 400 m', '2km400m', '2 km400m'], explanation: 'The whole number part, 2, stays as km. The decimal part, 0.4, is converted to m: 0.4 × 1 000 = 400 m.\n2.4 km = 2 km 400 m ✓' },
        { difficulty: 'Easy', question: 'A trail map shows the distance from the car park to the summit as "8 km 125 m". Write this distance as a single decimal number of km.', answer: '8.125 km', checkMode: 'auto', correctAnswer: '8.125', correctAnswers: ['8.125', '8,125', '8.125km', '8,125km'], explanation: '125 m = 125 ÷ 1 000 = 0.125 km.\n8 km 125 m = 8.125 km ✓' },
        { difficulty: 'Easy', question: 'A GPS watch shows a run of 5.15 km. The runner writes this using mixed units as "5 km 15 m". Is this correct? Explain the mistake.', answer: 'No, the runner made a mistake. The decimal part, 0.15, must be multiplied by 1 000 to convert it to metres: 0.15 × 1 000 = 150 m, not 15 m. So 5.15 km = 5 km 150 m, not 5 km 15 m.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Two race distance markers show "6 km 700 m" and "6.65 km" remaining. Which distance is greater?', answer: '6 km 700 m is greater', checkMode: 'auto', correctAnswer: '6 km 700 m', correctAnswers: ['6 km 700 m', '6km700m', '6 km700m'], explanation: 'Convert both to the same form: 6 km 700 m = 6.7 km. Compare 6.7 km and 6.65 km: 6.7 km is greater than 6.65 km.\nSo 6 km 700 m is the greater distance ✓' },

        // Block 3 — Perimeter of rectangles/squares (9-12, Medium, DIAGRAM-FLAGGED)
        // Diagram data: rectangular field, length 70 m, width 45 m
        { difficulty: 'Medium', question: 'A rectangular sports field measures 70 m long and 45 m wide, as shown below. Find the perimeter of the field, then find the total distance covered by 3 laps around it.', answer: 'Perimeter = 230 m, total distance = 690 m', checkMode: 'auto', correctAnswer: '230,690', correctAnswers: ['230,690', '230m,690m', '230, 690', '230 m, 690 m'], explanation: 'Perimeter: P = 2 × (70 + 45) = 2 × 115 = 230 m.\nTotal distance for 3 laps: 230 × 3 = 690 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">70 m</text><text x="18" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb" transform="rotate(-90 18 86)">45 m</text></svg>' },
        { difficulty: 'Medium', question: 'A basketball court practice area is marked out on a 34 m by 17 m rectangular section of the school grounds, as shown below. A coach walks around the outside edge 8 times while setting up cones. Find the perimeter of the section, and the total distance walked, in km.', answer: 'Perimeter = 102 m, total distance = 0.816 km', checkMode: 'auto', correctAnswer: '102,0.816', correctAnswers: ['102,0.816', '102m,0.816km', '102, 0.816', '102 m, 0.816 km', '102,0,816', '102 m, 0,816 km'], explanation: 'Perimeter: P = 2 × (34 + 17) = 2 × 51 = 102 m.\nTotal distance for 8 laps: 102 × 8 = 816 m = 0.816 km ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="50" width="150" height="65" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="35" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">34 m</text><text x="18" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb" transform="rotate(-90 18 86)">17 m</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular library floor has a perimeter of 84 m. The floor is 19 m wide, as shown below. Find its length.', answer: '23 m', checkMode: 'auto', correctAnswer: '23', correctAnswers: ['23', '23m', '23 m'], explanation: 'Half the perimeter = length + width: 84 ÷ 2 = 42 m.\nLength = 42 − 19 = 23 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="30" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><path d="M 90 18 A 20 12 0 0 1 130 18" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="18" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb" transform="rotate(-90 18 86)">19 m</text></svg>' },
        { difficulty: 'Medium', question: 'A hockey field storeroom is 32 m long and 21 m wide. A student calculates the perimeter as "32 × 21 = 672 m". Explain the mistake and give the correct perimeter.', answer: 'The student multiplied the length and width, which gives the area, not the perimeter. The perimeter of a rectangle is found using P = 2 × (length + width). The correct perimeter is P = 2 × (32 + 21) = 2 × 53 = 106 m, not 672 m.', checkMode: 'self' },

        // Block 4 — Map scale problems (13-15, Medium, DIAGRAM-FLAGGED)
        // Diagram data: map scale 1:25 000, map distance 12 cm
        { difficulty: 'Medium', question: 'A map has a scale of 1 : 25 000. The distance between two towns on the map is 12 cm, as shown below. Find the real distance in km.', answer: '3 km', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3km', '3 km'], explanation: 'Multiply the map distance by the scale: 12 × 25 000 = 300 000 cm.\nConvert to km: 300 000 ÷ 100 000 = 3 km ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="80" r="5" fill="#0f1f3d"/><circle cx="180" cy="80" r="5" fill="#0f1f3d"/><line x1="40" y1="80" x2="180" y2="80" stroke="#0f1f3d" stroke-width="2"/><text x="40" y="105" text-anchor="middle" font-size="12" fill="#374151">Town A</text><text x="180" y="105" text-anchor="middle" font-size="12" fill="#374151">Town B</text><text x="110" y="68" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">12 cm</text><text x="110" y="140" text-anchor="middle" font-size="13" fill="#374151">Scale 1 : 25 000</text></svg>' },
        { difficulty: 'Medium', question: 'A map has a scale of 1 : 25 000. Two towns are actually 8 km apart. Find the distance between them on the map, in cm.', answer: '32 cm', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32', '32cm', '32 cm'], explanation: 'Convert the real distance to cm: 8 km = 800 000 cm.\nDivide by the scale: 800 000 ÷ 25 000 = 32 cm ✓' },
        { difficulty: 'Medium', question: 'A hall floor plan is drawn at a scale of 1 : 100. On the plan, each of the 4 identical walls of the (square) hall measures 14 cm.\n\na) Find the real length of one wall, in metres.\nb) Find the perimeter of the hall, in metres.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Real length of one wall (m)', correctAnswer: '14', correctAnswers: ['14', '14m', '14 m'], explanation: '14 × 100 = 1 400 cm.\n1 400 ÷ 100 = 14 m ✓' },
          { label: 'b) Perimeter of the hall (m)', correctAnswer: '56', correctAnswers: ['56', '56m', '56 m'], explanation: '14 × 4 = 56 m ✓' },
        ] },

        // Block 5 — Adding/subtracting mixed-unit lengths (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'For a school play, Junaid buys 3.2 m of red curtain material, 75 cm of black material and 145 cm of gold material. Find the total length of material he buys, in metres.', answer: '5.4 m', checkMode: 'auto', correctAnswer: '5.4', correctAnswers: ['5.4', '5,4', '5.4m', '5,4m'], explanation: 'Convert everything to the same unit (metres): 75 cm = 0.75 m, 145 cm = 1.45 m.\nAdd the three lengths: 3.2 + 0.75 + 1.45 = 5.4 m ✓' },
        { difficulty: 'Medium-Hard', question: 'A dog shelter needs 68.5 m of fencing to enclose an exercise yard, but a 3.5 m gap is left for a gate. How much fencing wire must actually be bought?', answer: '65 m', checkMode: 'auto', correctAnswer: '65', correctAnswers: ['65', '65m', '65 m'], explanation: 'Subtract the gate gap from the total distance: 68.5 − 3.5 = 65 m ✓' },

        // Block 6 — Multi-step real-world length word problems (18-19, Hard)
        { difficulty: 'Hard', question: 'A ball of string is 9.6 m long. A gardener cuts it into equal pieces, each 80 cm long, to tie up tomato plants.\n\na) How many pieces can be cut?\nb) A hardware store separately sells chain by the metre at R36 per metre. Find the total cost of 8.5 m of chain.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Number of pieces of string', correctAnswer: '12', correctAnswers: ['12', '12 pieces'], explanation: 'Convert the total length to the same unit as the pieces (cm): 9.6 m = 960 cm.\nDivide the total by the length of each piece: 960 ÷ 80 = 12 pieces ✓' },
          { label: 'b) Total cost of the chain', correctAnswer: '306', correctAnswers: ['306', 'R306'], explanation: '8.5 × R36 = R306 ✓' },
        ] },
        { difficulty: 'Hard', question: 'A square vegetable plot has sides of 15 m. It is fenced all the way around, except for a 1.5 m gap left for a gate. Fencing costs R55 per metre.\n\na) Find the perimeter of the plot (m).\nb) Find the length of fencing needed, after leaving the gap (m).\nc) Find the total cost of the fencing.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Perimeter of the plot (m)', correctAnswer: '60', correctAnswers: ['60', '60m', '60 m'], explanation: 'P = 4 × 15 = 60 m ✓' },
          { label: 'b) Length of fencing needed (m)', correctAnswer: '58.5', correctAnswers: ['58.5', '58,5', '58.5m', '58,5m'], explanation: '60 − 1.5 = 58.5 m ✓' },
          { label: 'c) Total cost of fencing', correctAnswer: '3217.5', correctAnswers: ['3217.5', 'R3217.5', 'R3 217.50', '3 217.5', '3217,5', 'R3217,5', 'R3 217,50'], explanation: '58.5 × R55 = R3 217.50 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered length conversions, mixed units, perimeter and scale problems.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the conversion chain and perimeter rules, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Two-step unit conversions mm-cm-m-km (0-4, Easy)
        { difficulty: 'Easy', question: 'A road sign shows the distance to the next town as 6.4 km. Convert this distance directly to cm.', answer: '640000 cm', checkMode: 'auto', correctAnswer: '640000', correctAnswers: ['640000', '640 000', '640000cm', '640 000 cm'], explanation: 'Jumping km straight to cm means multiplying by 1 000 then 100: 1 000 × 100 = 100 000.\n6.4 × 100 000 = 640 000 cm ✓' },
        { difficulty: 'Easy', question: 'A set of coloured pencils, laid end to end, measures 560 mm. Convert this length directly to m.', answer: '0.56 m', checkMode: 'auto', correctAnswer: '0.56', correctAnswers: ['0.56', '0,56', '0.56m', '0,56m'], explanation: 'Jumping mm straight to m means dividing by 10 then 100: 10 × 100 = 1 000.\n560 ÷ 1 000 = 0.56 m ✓' },
        { difficulty: 'Easy', question: 'A soccer goalpost stands 4.25 m wide. Convert this length directly to mm.', answer: '4250 mm', checkMode: 'auto', correctAnswer: '4250', correctAnswers: ['4250', '4 250', '4250mm', '4 250 mm'], explanation: 'Jumping m straight to mm means multiplying by 100 then 10: 100 × 10 = 1 000.\n4.25 × 1 000 = 4 250 mm ✓' },
        { difficulty: 'Easy', question: 'A road sign notes a stretch of gravel road as measuring 62 000 cm. Convert this length directly to km.', answer: '0.62 km', checkMode: 'auto', correctAnswer: '0.62', correctAnswers: ['0.62', '0,62', '0.62km', '0,62km'], explanation: 'Jumping cm straight to km means dividing by 100 then 1 000: 100 × 1 000 = 100 000.\n62 000 ÷ 100 000 = 0.62 km ✓' },
        { difficulty: 'Easy', question: 'A student says: "To go from m to km, I just multiply by 1 000." Using this method, they convert 4 m to "4 000 km". Explain the mistake and give the correct answer.', answer: 'The student used the correct factor but the wrong operation. Going from a smaller unit (m) to a larger unit (km) means the number should get smaller, so you must divide, not multiply. The correct conversion is 4 ÷ 1 000 = 0.004 km, not 4 000 km.', checkMode: 'self' },

        // Block 2 — Mixed units km/m (5-8, Easy)
        { difficulty: 'Easy', question: 'A signpost at a nature reserve gives the distance to the next lookout point as 9.15 km. Write this distance using mixed units (km and m).', answer: '9 km 150 m', checkMode: 'auto', correctAnswer: '9 km 150 m', correctAnswers: ['9 km 150 m', '9km150m', '9 km150m'], explanation: 'The whole number part, 9, stays as km. The decimal part, 0.15, is converted to m: 0.15 × 1 000 = 150 m.\n9.15 km = 9 km 150 m ✓' },
        { difficulty: 'Easy', question: 'A parkrun results sheet shows a course length of "3 km 600 m". Write this distance as a single decimal number of km.', answer: '3.6 km', checkMode: 'auto', correctAnswer: '3.6', correctAnswers: ['3.6', '3,6', '3.6km', '3,6km'], explanation: '600 m = 600 ÷ 1 000 = 0.6 km.\n3 km 600 m = 3.6 km ✓' },
        { difficulty: 'Easy', question: 'A hiking app shows a distance covered of 7.09 km. The hiker writes this using mixed units as "7 km 9 m". Is this correct? Explain the mistake.', answer: 'No, the hiker made a mistake. The decimal part, 0.09, must be multiplied by 1 000 to convert it to metres: 0.09 × 1 000 = 90 m, not 9 m. So 7.09 km = 7 km 90 m, not 7 km 9 m.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Two hiking trail signs show the distance to the waterfall as "7 km 450 m" and "7.5 km". Which distance is greater?', answer: '7.5 km is greater', checkMode: 'auto', correctAnswer: '7.5 km', correctAnswers: ['7.5 km', '7,5 km', '7.5km', '7,5km'], explanation: 'Convert both to the same form: 7 km 450 m = 7.45 km. Compare 7.45 km and 7.5 km: 7.5 km is greater than 7.45 km.\nSo 7.5 km is the greater distance ✓' },

        // Block 3 — Perimeter of rectangles/squares (9-12, Medium, DIAGRAM-FLAGGED)
        // Diagram data: rectangular field, length 55 m, width 38 m
        { difficulty: 'Medium', question: 'A rectangular sports field measures 55 m long and 38 m wide, as shown below. Find the perimeter of the field, then find the total distance covered by 5 laps around it.', answer: 'Perimeter = 186 m, total distance = 930 m', checkMode: 'auto', correctAnswer: '186,930', correctAnswers: ['186,930', '186m,930m', '186, 930', '186 m, 930 m'], explanation: 'Perimeter: P = 2 × (55 + 38) = 2 × 93 = 186 m.\nTotal distance for 5 laps: 186 × 5 = 930 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">55 m</text><text x="18" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb" transform="rotate(-90 18 86)">38 m</text></svg>' },
        { difficulty: 'Medium', question: 'A rugby practice pitch is marked out on a 48 m by 27 m rectangular section of the school grounds, as shown below. A coach walks around the outside edge 5 times while setting up drills. Find the perimeter of the section, and the total distance walked, in km.', answer: 'Perimeter = 150 m, total distance = 0.75 km', checkMode: 'auto', correctAnswer: '150,0.75', correctAnswers: ['150,0.75', '150m,0.75km', '150, 0.75', '150 m, 0.75 km', '150,0,75', '150 m, 0,75 km'], explanation: 'Perimeter: P = 2 × (48 + 27) = 2 × 75 = 150 m.\nTotal distance for 5 laps: 150 × 5 = 750 m = 0.75 km ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="50" width="150" height="65" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="35" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">48 m</text><text x="18" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb" transform="rotate(-90 18 86)">27 m</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular assembly hall floor has a perimeter of 150 m. The hall is 55 m long, as shown below. Find its width.', answer: '20 m', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20m', '20 m'], explanation: 'Half the perimeter = length + width: 150 ÷ 2 = 75 m.\nWidth = 75 − 55 = 20 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">55 m</text><text x="16" y="90" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><path d="M 6 68 A 12 16 0 0 1 6 100" fill="none" stroke="#ea580c" stroke-width="1.5"/></svg>' },
        { difficulty: 'Medium', question: 'A computer lab is 40 m long and 17 m wide. A student calculates the perimeter as "40 × 17 = 680 m". Explain the mistake and give the correct perimeter.', answer: 'The student multiplied the length and width, which gives the area, not the perimeter. The perimeter of a rectangle is found using P = 2 × (length + width). The correct perimeter is P = 2 × (40 + 17) = 2 × 57 = 114 m, not 680 m.', checkMode: 'self' },

        // Block 4 — Map scale problems (13-15, Medium, DIAGRAM-FLAGGED)
        // Diagram data: map scale 1:40 000, map distance 7.5 cm
        { difficulty: 'Medium', question: 'A map has a scale of 1 : 40 000. The distance between two towns on the map is 7.5 cm, as shown below. Find the real distance in km.', answer: '3 km', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3km', '3 km'], explanation: 'Multiply the map distance by the scale: 7.5 × 40 000 = 300 000 cm.\nConvert to km: 300 000 ÷ 100 000 = 3 km ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="80" r="5" fill="#0f1f3d"/><circle cx="180" cy="80" r="5" fill="#0f1f3d"/><line x1="40" y1="80" x2="180" y2="80" stroke="#0f1f3d" stroke-width="2"/><text x="40" y="105" text-anchor="middle" font-size="12" fill="#374151">Town A</text><text x="180" y="105" text-anchor="middle" font-size="12" fill="#374151">Town B</text><text x="110" y="68" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">7.5 cm</text><text x="110" y="140" text-anchor="middle" font-size="13" fill="#374151">Scale 1 : 40 000</text></svg>' },
        { difficulty: 'Medium', question: 'A map has a scale of 1 : 40 000. Two towns are actually 4.8 km apart. Find the distance between them on the map, in cm.', answer: '12 cm', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], explanation: 'Convert the real distance to cm: 4.8 km = 480 000 cm.\nDivide by the scale: 480 000 ÷ 40 000 = 12 cm ✓' },
        { difficulty: 'Medium', question: 'A hall floor plan is drawn at a scale of 1 : 120. On the plan, each of the 4 identical walls of the (square) hall measures 18 cm.\n\na) Find the real length of one wall, in metres.\nb) Find the perimeter of the hall, in metres.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Real length of one wall (m)', correctAnswer: '21.6', correctAnswers: ['21.6', '21,6', '21.6m', '21,6m'], explanation: '18 × 120 = 2 160 cm.\n2 160 ÷ 100 = 21.6 m ✓' },
          { label: 'b) Perimeter of the hall (m)', correctAnswer: '86.4', correctAnswers: ['86.4', '86,4', '86.4m', '86,4m'], explanation: '21.6 × 4 = 86.4 m ✓' },
        ] },

        // Block 5 — Adding/subtracting mixed-unit lengths (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'For a market stall display, Karabo buys 2.6 m of green ribbon, 95 cm of yellow ribbon and 165 cm of red ribbon. Find the total length of ribbon she buys, in metres.', answer: '5.2 m', checkMode: 'auto', correctAnswer: '5.2', correctAnswers: ['5.2', '5,2', '5.2m', '5,2m'], explanation: 'Convert everything to the same unit (metres): 95 cm = 0.95 m, 165 cm = 1.65 m.\nAdd the three lengths: 2.6 + 0.95 + 1.65 = 5.2 m ✓' },
        { difficulty: 'Medium-Hard', question: 'A crèche needs 74.8 m of fencing to enclose a play area, but a 2.8 m gap is left for a gate. How much fencing wire must actually be bought?', answer: '72 m', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72m', '72 m'], explanation: 'Subtract the gate gap from the total distance: 74.8 − 2.8 = 72 m ✓' },

        // Block 6 — Multi-step real-world length word problems (18-19, Hard)
        { difficulty: 'Hard', question: 'A spool of wire is 13.5 m long. An electrician cuts it into equal pieces, each 45 cm long, for a wiring job.\n\na) How many pieces can be cut?\nb) A fabric shop separately sells lace trim at R64 per metre. Find the total cost of 4.5 m of lace trim.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Number of pieces of wire', correctAnswer: '30', correctAnswers: ['30', '30 pieces'], explanation: 'Convert the total length to the same unit as the pieces (cm): 13.5 m = 1 350 cm.\nDivide the total by the length of each piece: 1 350 ÷ 45 = 30 pieces ✓' },
          { label: 'b) Total cost of the lace trim', correctAnswer: '288', correctAnswers: ['288', 'R288'], explanation: '4.5 × R64 = R288 ✓' },
        ] },
        { difficulty: 'Hard', question: 'A square sports court has sides of 28 m. It is fenced all the way around, except for a 3 m gap left for an entrance. Fencing costs R42.50 per metre.\n\na) Find the perimeter of the court (m).\nb) Find the length of fencing needed, after leaving the gap (m).\nc) Find the total cost of the fencing.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Perimeter of the court (m)', correctAnswer: '112', correctAnswers: ['112', '112m', '112 m'], explanation: 'P = 4 × 28 = 112 m ✓' },
          { label: 'b) Length of fencing needed (m)', correctAnswer: '109', correctAnswers: ['109', '109m', '109 m'], explanation: '112 − 3 = 109 m ✓' },
          { label: 'c) Total cost of fencing', correctAnswer: '4632.5', correctAnswers: ['4632.5', 'R4632.5', 'R4 632.50', '4 632.5', '4632,5', 'R4632,5', 'R4 632,50'], explanation: '109 × R42.50 = R4 632.50 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered length conversions, mixed units, perimeter and scale problems.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the conversion chain and perimeter rules, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
