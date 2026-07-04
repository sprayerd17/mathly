import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (temperature roles) ──────────────────────────────────────
// positive temperature → orange (#ea580c)
// negative temperature → blue   (#2563eb)
// difference / change  → green  (#16a34a)
// reference point (0°) → red    (#dc2626)
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Temperature',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — READING THERMOMETERS AND NEGATIVE TEMPERATURES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-thermometers-negative-temperatures',
      title: 'Reading Thermometers and Negative Temperatures',
      icon: '🌡️',
      explanation:
        `<p style="margin-bottom:16px;">Temperature is measured in ${re('degrees Celsius (°C)')}, using a ${re('thermometer')}. Water freezes at ${re('0°C')} and boils at ${or('100°C')}. Temperatures ${or('above 0°C')} are ${or('positive')}, and temperatures ${bl('below 0°C')} are ${bl('negative')} — written with a minus sign, like ${bl('−5°C')}. This is your first proper introduction to ${bl('negative numbers')} in a real-world context.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('positive (above 0°C)')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('negative (below 0°C)')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('0°C (freezing point)')}</span>` +
        `</div>` +

        // ── Key reference points ────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key reference points</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">0°C — Water Freezes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The temperature at which water turns to ice.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">100°C — Water Boils</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The temperature at which water turns to steam.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Around 37°C — Human Body</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The normal internal temperature of the human body.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Reading a thermometer scale</p>` +
        `<p style="margin:0;color:#1e3a8a;">A thermometer scale works just like a vertical number line: ${re('0°C')} is the reference point, ${or('positive numbers go up')} above it, and ${bl('negative numbers go down')} below it. Count the marks carefully — some thermometers mark every 1°, others every 2° or 5°.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A thermometer shows the mercury level 3 marks above 0°C, where each mark represents 2°C. What is the temperature?',
          answer: `${or('6°C')}`,
          steps: [
            `Each mark represents ${or('2°C')}, and the mercury is at ${or('3 marks above 0')}.`,
            `Multiply: ${or('3 × 2 = 6')}.`,
            `Since it's above 0, the temperature is ${or('positive')}.`,
            `<strong>Answer:</strong> The temperature is ${or('6°C')}. ✓`,
          ],
        },
        {
          question: 'A thermometer shows the mercury level 4 marks below 0°C, where each mark represents 1°C. What is the temperature?',
          answer: `${bl('−4°C')}`,
          steps: [
            `Each mark represents ${bl('1°C')}, and the mercury is at ${bl('4 marks below 0')}.`,
            `Since it's below 0, the temperature is ${bl('negative')}.`,
            `<strong>Answer:</strong> The temperature is ${bl('−4°C')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Is a temperature of −8°C above or below the freezing point of water?',
          answer: 'below',
          checkMode: 'auto',
          correctAnswer: 'below',
          explanation: 'A negative temperature is always below 0°C, the freezing point of water ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Answer each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) A thermometer shows the mercury 5 marks above 0°C, with each mark worth 2°C. Find the temperature.',
              correctAnswer: '10',
              correctAnswers: ['10', '10°C', '10 °C'],
              explanation: '5 × 2 = 10°C ✓',
            },
            {
              label: 'b) A thermometer shows the mercury 6 marks below 0°C, with each mark worth 1°C. Find the temperature.',
              correctAnswer: '-6',
              correctAnswers: ['-6', '−6', '-6°C', '−6°C'],
              explanation: '6 marks below 0, each worth 1°C, gives −6°C ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Water is heated from 0°C. It reaches boiling point after being heated by 100°C.\n\na) Confirm the boiling point of water in °C.\nb) A different liquid freezes at −20°C. How many degrees below water\'s freezing point is this?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Boiling point of water (°C)',
              correctAnswer: '100',
              explanation: 'Water boils at 100°C ✓',
            },
            {
              label: 'b) Degrees below water\'s freezing point',
              correctAnswer: '20',
              explanation: 'Water freezes at 0°C. The liquid freezes at −20°C, which is 20 degrees below 0°C ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing a thermometer as a vertical number line, with zero degrees marked in red, positive temperatures shown climbing upward in orange, and negative temperatures shown going downward in blue" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a vertical thermometer scale from minus 10 to 40 degrees Celsius, with 0 degrees marked in red, water freezing and boiling points labelled, and the mercury level shown at a sample temperature" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPARING AND ORDERING TEMPERATURES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering-temperatures',
      title: 'Comparing and Ordering Temperatures',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Just like on a number line, a temperature further to the ${gr('right')} (or higher up on a thermometer) is always ${gr('greater')} than one further to the ${re('left')} (or lower down) — even when both are negative. This can feel surprising: ${bl('−2°C')} is ${gr('warmer')} than ${bl('−8°C')}, because −2 is further to the right on the number line than −8.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('warmer / greater')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('colder / smaller')}</span>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">A simple rule for negative temperatures</p>` +
        `<p style="margin:0;color:#1e3a8a;">When comparing two negative temperatures, the one with the ${re('smaller number after the minus sign')} is actually the ${gr('warmer')} one. For example, comparing −3°C and −15°C: 3 is smaller than 15, so ${gr('−3°C is warmer')} than ${re('−15°C')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Which is warmer: −6°C or −2°C?',
          answer: `${gr('−2°C')} is warmer`,
          steps: [
            `Both temperatures are negative, so compare the numbers after the minus sign: ${re('6')} and ${gr('2')}.`,
            `Since ${gr('2')} is smaller than ${re('6')}, ${gr('−2°C')} is closer to 0 and therefore warmer.`,
            `<strong>Answer:</strong> ${gr('−2°C')} is warmer than −6°C. ✓`,
          ],
        },
        {
          question: 'Order these temperatures from coldest to warmest: 5°C, −3°C, 0°C, −9°C.',
          answer: `${re('−9°C, −3°C, 0°C, 5°C')}`,
          steps: [
            `Negative temperatures are always ${re('colder')} than 0°C, which is colder than positive temperatures.`,
            `Among the negatives, ${re('−9°C')} is colder than −3°C (9 > 3).`,
            `Ordering from coldest to warmest: ${re('−9°C, −3°C, 0°C, 5°C')}.`,
            `<strong>Answer:</strong> ${re('−9°C, −3°C, 0°C, 5°C')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Which is warmer: −4°C or −10°C?',
          answer: '-4°C',
          checkMode: 'auto',
          correctAnswer: '-4',
          correctAnswers: ['-4', '−4', '-4°C', '−4°C'],
          explanation: '4 is smaller than 10, so −4°C is warmer ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Order these temperatures from coldest to warmest: −7°C, 3°C, −1°C, −12°C.',
          answer: '-12°C, -7°C, -1°C, 3°C',
          checkMode: 'auto',
          correctAnswer: '-12, -7, -1, 3',
          correctAnswers: ['-12, -7, -1, 3', '−12, −7, −1, 3', '-12°C, -7°C, -1°C, 3°C', '−12°C, −7°C, −1°C, 3°C'],
          explanation: 'From coldest to warmest: −12°C, −7°C, −1°C, 3°C ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Five South African towns recorded these overnight temperatures: Town A: −5°C, Town B: 2°C, Town C: −11°C, Town D: 0°C, Town E: −2°C.\n\na) Which town was the coldest?\nb) Which town was the warmest?\nc) Order all five temperatures from coldest to warmest.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Coldest town',
              correctAnswer: 'Town C',
              correctAnswers: ['Town C', 'C'],
              explanation: 'Town C at −11°C has the largest number after the minus sign, so it is coldest ✓',
            },
            {
              label: 'b) Warmest town',
              correctAnswer: 'Town B',
              correctAnswers: ['Town B', 'B'],
              explanation: 'Town B at 2°C is the only positive temperature, so it is warmest ✓',
            },
            {
              label: 'c) Order from coldest to warmest',
              correctAnswer: '-11, -5, -2, 0, 2',
              correctAnswers: ['-11, -5, -2, 0, 2', '−11, −5, −2, 0, 2', 'C, A, E, D, B', 'Town C, Town A, Town E, Town D, Town B'],
              explanation: '−11°C (C), −5°C (A), −2°C (E), 0°C (D), 2°C (B) ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video comparing pairs of negative temperatures on a number line, showing that the temperature closer to zero is always warmer even though its number after the minus sign is smaller" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CALCULATING TEMPERATURE DIFFERENCES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-temperature-differences',
      title: 'Calculating Temperature Differences',
      icon: '➖',
      explanation:
        `<p style="margin-bottom:16px;">To find the ${gr('difference')} between two temperatures, count how many degrees separate them on the number line. When both temperatures are ${or('positive')}, simply subtract the smaller from the larger. When one or both temperatures are ${bl('negative')}, it helps to count the total distance crossed — including the distance across ${re('0°C')} itself.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('positive temperature')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('negative temperature')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('temperature difference')}</span>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Crossing zero — add the two distances</p>` +
        `<p style="margin:0;color:#1e3a8a;">If one temperature is negative and the other is positive, the total difference is the ${bl('distance from the negative temperature to 0')} <strong>plus</strong> the ${or('distance from 0 to the positive temperature')}. For example, from −4°C to 6°C: 4 (to reach 0) + 6 (to reach 6) = ${gr('10°C difference')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'The temperature at sunrise was −3°C, and by midday it had risen to 9°C. Find the temperature difference.',
          answer: `Difference = ${gr('12°C')}`,
          steps: [
            `The temperature crosses ${re('0°C')}, so add the two distances.`,
            `Distance from ${bl('−3°C')} to 0: ${bl('3')}.`,
            `Distance from 0 to ${or('9°C')}: ${or('9')}.`,
            `Add: ${gr('3 + 9 = 12°C')}.`,
            `<strong>Answer:</strong> The temperature rose by ${gr('12°C')}. ✓`,
          ],
        },
        {
          question: 'A city recorded a maximum temperature of 4°C and a minimum of −10°C on the same day. Find the temperature range for the day.',
          answer: `Range = ${gr('14°C')}`,
          steps: [
            `Distance from ${bl('−10°C')} to 0: ${bl('10')}.`,
            `Distance from 0 to ${or('4°C')}: ${or('4')}.`,
            `Add: ${gr('10 + 4 = 14°C')}.`,
            `<strong>Answer:</strong> The temperature range is ${gr('14°C')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'The temperature was −5°C in the morning and rose to 8°C by afternoon. Find the temperature difference.',
          answer: '13°C',
          checkMode: 'auto',
          correctAnswer: '13',
          correctAnswers: ['13', '13°C', '13 °C'],
          explanation: '5 (to reach 0) + 8 (to reach 8) = 13°C ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A mountain town recorded a maximum of 2°C and a minimum of −6°C on the same day.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the temperature range for the day.',
              correctAnswer: '8',
              correctAnswers: ['8', '8°C'],
              explanation: '6 (to reach 0) + 2 (to reach 2) = 8°C ✓',
            },
            {
              label: 'b) If the temperature drops by another 5°C from the minimum, what is the new temperature?',
              correctAnswer: '-11',
              correctAnswers: ['-11', '−11', '-11°C', '−11°C'],
              explanation: '−6°C − 5°C = −11°C ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A freezer is set to −18°C. A fridge is set to 4°C. A room is at 22°C.\n\na) Find the temperature difference between the freezer and the fridge.\nb) Find the temperature difference between the fridge and the room.\nc) Find the temperature difference between the freezer and the room.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Freezer to fridge difference',
              correctAnswer: '22',
              correctAnswers: ['22', '22°C'],
              explanation: '18 (to reach 0) + 4 (to reach 4) = 22°C ✓',
            },
            {
              label: 'b) Fridge to room difference',
              correctAnswer: '18',
              correctAnswers: ['18', '18°C'],
              explanation: '22 − 4 = 18°C (both positive, subtract) ✓',
            },
            {
              label: 'c) Freezer to room difference',
              correctAnswer: '40',
              correctAnswers: ['40', '40°C'],
              explanation: '18 (to reach 0) + 22 (to reach 22) = 40°C ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how to find the difference between two temperatures on a number line, including a case that crosses zero by adding the distance below zero to the distance above zero" />',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered temperature.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered temperature.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
