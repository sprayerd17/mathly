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
        'Diagram of a vertical thermometer scale from minus 10 to 40 degrees Celsius, with 0 degrees marked in red, water freezing and boiling points labelled, and the mercury level shown at a sample temperature',

      diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><text x="110" y="10" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">↑ boils at 100°C</text><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="65" width="18" height="113" rx="4" fill="#ea580c"/><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#dc2626" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">0</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="119" y1="65" x2="150" y2="65" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3,3"/><text x="155" y="69" font-size="13" fill="#ea580c" font-weight="700" text-anchor="start">22°C</text></svg>',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Reading thermometers & +/- (Easy) | 4-8 Comparing/ordering
    // (Easy-Medium) | 9-12 Same-sign differences (Medium) | 13-16 Zero-crossing
    // differences (Medium-Hard) | 17-19 Multi-step reasoning (Hard)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Reading thermometers & positive/negative (0-3, Easy)
        { difficulty: 'Easy', question: 'A thermometer shows the mercury level as pictured. Each labelled mark is 10°C apart, with an extra unlabelled tick halfway between each pair of marks. What is the temperature?', answer: '20°C', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20°C', '20 °C'], explanation: 'The mercury lines up exactly with the labelled 20°C mark ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="70" width="18" height="108" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-20</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#dc2626" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">0</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'A thermometer shows the mercury level as pictured. Each labelled mark is 10°C apart, with an extra unlabelled tick halfway between each pair of marks. What is the temperature?', answer: '-15°C', checkMode: 'auto', correctAnswer: '-15', correctAnswers: ['-15', '−15', '-15°C', '−15°C'], explanation: 'The mercury lines up with the unlabelled tick halfway between the -10°C and -20°C marks, which is -15°C ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="157.5" width="18" height="20.5" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-20</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#dc2626" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">0</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'Is a temperature of −6°C above or below the freezing point of water?', answer: 'below', checkMode: 'auto', correctAnswer: 'below', correctAnswers: ['below'], explanation: 'Any negative temperature is below 0°C, which is the freezing point of water ✓' },
        { difficulty: 'Easy', question: 'Water freezes at 0°C. Human body temperature is normally around 37°C. Is 37°C a positive or negative temperature?', answer: 'positive', checkMode: 'auto', correctAnswer: 'positive', correctAnswers: ['positive'], explanation: '37°C is above 0°C, so it is a positive temperature ✓' },

        // Block 2 — Comparing and ordering (4-8, Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Which is warmer: −8°C or −2°C?', answer: '-2°C', checkMode: 'auto', correctAnswer: '-2', correctAnswers: ['-2', '−2', '-2°C', '−2°C'], explanation: '2 is smaller than 8, so −2°C is closer to 0 and therefore warmer ✓' },
        { difficulty: 'Easy-Medium', question: 'Order these temperatures from coldest to warmest: 4°C, −6°C, −1°C, 9°C.', answer: '-6°C, -1°C, 4°C, 9°C', checkMode: 'auto', correctAnswer: '-6, -1, 4, 9', correctAnswers: ['-6, -1, 4, 9', '−6, −1, 4, 9', '-6°C, -1°C, 4°C, 9°C', '−6°C, −1°C, 4°C, 9°C'], explanation: 'Negatives are colder than 0, and among them −6°C is colder than −1°C. Order: −6°C, −1°C, 4°C, 9°C ✓' },
        { difficulty: 'Medium', question: 'Sipho says −15°C is warmer than −9°C because 15 is a bigger number. Is Sipho correct? Explain.', answer: 'No — for negative temperatures, the smaller number after the minus sign is warmer. Since 9 is smaller than 15, −9°C is actually warmer than −15°C, not −15°C.', checkMode: 'self', explanation: 'Sipho mixed up the rule for negative numbers. −9°C is closer to 0 than −15°C, so −9°C is warmer. Sipho is incorrect.' },
        { difficulty: 'Medium', question: 'Cape Town recorded −1°C one winter morning, while Johannesburg recorded −5°C at the same time. Which city was colder?', answer: 'Johannesburg', checkMode: 'auto', correctAnswer: 'Johannesburg', correctAnswers: ['Johannesburg', 'johannesburg'], explanation: '−5°C is further below 0 than −1°C, so Johannesburg was colder ✓' },
        { difficulty: 'Medium', question: 'Write the correct symbol (< or >) to compare −3°C and −11°C.', answer: '-3°C > -11°C', checkMode: 'auto', correctAnswer: '-3 > -11', correctAnswers: ['-3 > -11', '−3 > −11', '-3°C > -11°C', '−3°C > −11°C', '>'], explanation: '−3 is closer to 0 than −11, so −3°C is greater (warmer): −3°C > −11°C ✓' },

        // Block 3 — Same-sign differences (9-12, Medium)
        { difficulty: 'Medium', question: 'Find the difference between −2°C and −8°C.', answer: '6°C', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6°C', '6 °C'], explanation: 'Both temperatures are negative, so subtract: 8 − 2 = 6°C ✓' },
        { difficulty: 'Medium', question: 'A town recorded a maximum of 20°C and a minimum of 9°C on the same day. Find the temperature range for the day.', answer: '11°C', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', '11°C', '11 °C'], explanation: 'Both temperatures are positive, so subtract: 20 − 9 = 11°C ✓' },
        { difficulty: 'Medium', question: 'The temperature at 6 a.m. was −15°C. By 8 a.m. it had risen by 5°C. What was the temperature at 8 a.m.?', answer: '-10°C', checkMode: 'auto', correctAnswer: '-10', correctAnswers: ['-10', '−10', '-10°C', '−10°C'], explanation: 'A rise means adding: −15°C + 5°C = −10°C ✓' },
        { difficulty: 'Medium', question: 'A freezer compartment was at −3°C. It was adjusted to a colder setting of −19°C. By how many degrees did the temperature drop?', answer: '16°C', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16°C', '16 °C'], explanation: 'Both temperatures are negative, so subtract: 19 − 3 = 16°C ✓' },

        // Block 4 — Zero-crossing differences (13-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Find the difference between −6°C and 9°C.', answer: '15°C', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15°C', '15 °C'], explanation: 'This crosses zero, so add the two distances: distance from −6°C to 0 is 6, and from 0 to 9°C is 9. 6 + 9 = 15°C ✓' },
        { difficulty: 'Medium-Hard', question: 'At sunrise the temperature was −4°C. By midday it had risen to 15°C. Find the temperature increase.', answer: '19°C', checkMode: 'auto', correctAnswer: '19', correctAnswers: ['19', '19°C', '19 °C'], explanation: 'Crossing zero: distance from −4°C to 0 is 4, and from 0 to 15°C is 15. 4 + 15 = 19°C ✓' },
        { difficulty: 'Medium-Hard', question: 'A student calculates the difference between −12°C and 5°C by writing "12 − 5 = 7°C". Explain the mistake and give the correct difference.', answer: 'The student subtracted the two numbers as if both were on the same side of zero, but −12°C and 5°C are on opposite sides of 0. The correct method adds the two distances to zero: 12 (to reach 0) + 5 (to reach 5) = 17°C, not 7°C.', checkMode: 'self', explanation: 'Since the temperatures cross zero, the distances must be added, not subtracted: 12 + 5 = 17°C.' },
        { difficulty: 'Medium-Hard', question: 'The temperature inside a freezer is −20°C. Room temperature is 22°C. Find the difference between the freezer and the room.', answer: '42°C', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42°C', '42 °C'], explanation: 'Crossing zero: distance from −20°C to 0 is 20, and from 0 to 22°C is 22. 20 + 22 = 42°C ✓' },

        // Block 5 — Multi-step reasoning and real-world applications (17-19, Hard)
        { difficulty: 'Hard', question: 'Three towns recorded overnight temperatures: Town A: −9°C, Town B: 6°C, Town C: −2°C.\n\na) Which town was the coldest?\nb) Find the temperature difference between the coldest and warmest towns.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Coldest town', correctAnswer: 'Town A', correctAnswers: ['Town A', 'A'], explanation: 'Town A at −9°C is furthest below 0, so it is the coldest ✓' }, { label: 'b) Difference between coldest and warmest', correctAnswer: '15', correctAnswers: ['15', '15°C'], explanation: 'Coldest is Town A (−9°C), warmest is Town B (6°C). This crosses zero: 9 + 6 = 15°C ✓' } ] },
        { difficulty: 'Hard', question: 'A cold storage room starts at 5°C and drops by 4°C every hour for 3 hours.\n\na) Find the temperature after 3 hours.\nb) Find the difference between the starting temperature and the temperature after 3 hours.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Temperature after 3 hours', correctAnswer: '-7', correctAnswers: ['-7', '−7', '-7°C', '−7°C'], explanation: 'Total drop: 4 × 3 = 12°C. Starting at 5°C: 5 − 12 = −7°C ✓' }, { label: 'b) Difference between start and after 3 hours', correctAnswer: '12', correctAnswers: ['12', '12°C'], explanation: 'The temperature dropped from 5°C to −7°C, a difference of 12°C, which matches the total drop calculated ✓' } ] },
        { difficulty: 'Hard', question: 'Lerato says: "The temperature dropped from 3°C to −11°C, so it dropped by 8 degrees, because 11 − 3 = 8." Is Lerato correct? Explain and give the correct drop.', answer: 'No, Lerato is incorrect. Since 3°C and −11°C are on opposite sides of zero, the distances must be added, not subtracted. The temperature dropped from 3°C to 0 (3 degrees) and then from 0 to −11°C (11 degrees), so the total drop is 3 + 11 = 14 degrees, not 8.', checkMode: 'self', explanation: 'Crossing zero requires adding the two distances: 3 + 11 = 14°C, which is the correct drop.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered reading thermometers, comparing temperatures, and calculating temperature differences.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the zero-crossing strategy, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Reading thermometers & positive/negative (0-3, Easy)
        { difficulty: 'Easy', question: 'A thermometer shows the mercury level as pictured. Each labelled mark is 10°C apart, with an extra unlabelled tick halfway between each pair of marks. What is the temperature?', answer: '15°C', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15°C', '15 °C'], explanation: 'The mercury lines up with the unlabelled tick halfway between the 10°C and 20°C marks, which is 15°C ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="82.5" width="18" height="95.5" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-20</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#dc2626" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">0</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'A thermometer shows the mercury level as pictured. Each labelled mark is 10°C apart, with an extra unlabelled tick halfway between each pair of marks. What is the temperature?', answer: '-10°C', checkMode: 'auto', correctAnswer: '-10', correctAnswers: ['-10', '−10', '-10°C', '−10°C'], explanation: 'The mercury lines up exactly with the labelled -10°C mark ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="145" width="18" height="33" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-20</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#dc2626" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">0</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'Water boils at 100°C. Is 100°C a positive or negative temperature?', answer: 'positive', checkMode: 'auto', correctAnswer: 'positive', correctAnswers: ['positive'], explanation: '100°C is above 0°C, so it is a positive temperature ✓' },
        { difficulty: 'Easy', question: 'A weather report shows −3°C for an early morning in Bloemfontein. Is this temperature above or below freezing point?', answer: 'below', checkMode: 'auto', correctAnswer: 'below', correctAnswers: ['below'], explanation: '−3°C is a negative temperature, so it is below 0°C, the freezing point ✓' },

        // Block 2 — Comparing and ordering (4-8, Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Which is colder: −5°C or −13°C?', answer: '-13°C', checkMode: 'auto', correctAnswer: '-13', correctAnswers: ['-13', '−13', '-13°C', '−13°C'], explanation: '13 is bigger than 5, so −13°C is further below 0 and therefore colder ✓' },
        { difficulty: 'Easy-Medium', question: 'Order these temperatures from coldest to warmest: −2°C, 7°C, −10°C, 0°C.', answer: '-10°C, -2°C, 0°C, 7°C', checkMode: 'auto', correctAnswer: '-10, -2, 0, 7', correctAnswers: ['-10, -2, 0, 7', '−10, −2, 0, 7', '-10°C, -2°C, 0°C, 7°C', '−10°C, −2°C, 0°C, 7°C'], explanation: 'Negatives are colder than 0, and among them −10°C is colder than −2°C. Order: −10°C, −2°C, 0°C, 7°C ✓' },
        { difficulty: 'Medium', question: 'Thabo says −20°C is colder than −18°C because 20 is a bigger number. Is Thabo correct? Explain.', answer: 'Yes — for negative temperatures, the bigger number after the minus sign means further below 0. Since 20 is bigger than 18, −20°C is indeed colder than −18°C.', checkMode: 'self', explanation: 'Thabo is correct. −20°C is further from 0 than −18°C, so it is colder.' },
        { difficulty: 'Medium', question: 'Kimberley recorded −4°C one winter night, while Polokwane recorded 2°C at the same time. Which town was warmer?', answer: 'Polokwane', checkMode: 'auto', correctAnswer: 'Polokwane', correctAnswers: ['Polokwane', 'polokwane'], explanation: '2°C is positive and −4°C is negative, so Polokwane was warmer ✓' },
        { difficulty: 'Medium', question: 'Write the correct symbol (< or >) to compare −7°C and −1°C.', answer: '-7°C < -1°C', checkMode: 'auto', correctAnswer: '-7 < -1', correctAnswers: ['-7 < -1', '−7 < −1', '-7°C < -1°C', '−7°C < −1°C', '<'], explanation: '−7 is further from 0 than −1, so −7°C is smaller (colder): −7°C < −1°C ✓' },

        // Block 3 — Same-sign differences (9-12, Medium)
        { difficulty: 'Medium', question: 'Find the difference between −5°C and −17°C.', answer: '12°C', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12°C', '12 °C'], explanation: 'Both temperatures are negative, so subtract: 17 − 5 = 12°C ✓' },
        { difficulty: 'Medium', question: 'A city recorded a maximum of 28°C and a minimum of 15°C on the same day. Find the temperature range for the day.', answer: '13°C', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13°C', '13 °C'], explanation: 'Both temperatures are positive, so subtract: 28 − 15 = 13°C ✓' },
        { difficulty: 'Medium', question: 'The temperature at 5 p.m. was 18°C. By 9 p.m. it had fallen by 7°C. What was the temperature at 9 p.m.?', answer: '11°C', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', '11°C', '11 °C'], explanation: 'A fall means subtracting: 18°C − 7°C = 11°C ✓' },
        { difficulty: 'Medium', question: 'A mountain hut was at −6°C. Overnight it dropped further to −25°C. By how many degrees did the temperature drop?', answer: '19°C', checkMode: 'auto', correctAnswer: '19', correctAnswers: ['19', '19°C', '19 °C'], explanation: 'Both temperatures are negative, so subtract: 25 − 6 = 19°C ✓' },

        // Block 4 — Zero-crossing differences (13-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Find the difference between −12°C and 5°C.', answer: '17°C', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17°C', '17 °C'], explanation: 'This crosses zero, so add the two distances: distance from −12°C to 0 is 12, and from 0 to 5°C is 5. 12 + 5 = 17°C ✓' },
        { difficulty: 'Medium-Hard', question: 'At sunrise the temperature was −7°C. By midday it had risen to 11°C. Find the temperature increase.', answer: '18°C', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18°C', '18 °C'], explanation: 'Crossing zero: distance from −7°C to 0 is 7, and from 0 to 11°C is 11. 7 + 11 = 18°C ✓' },
        { difficulty: 'Medium-Hard', question: 'A student calculates the difference between −9°C and 3°C by writing "9 − 3 = 6°C". Explain the mistake and give the correct difference.', answer: 'The student subtracted the two numbers as if both were on the same side of zero, but −9°C and 3°C are on opposite sides of 0. The correct method adds the two distances to zero: 9 (to reach 0) + 3 (to reach 3) = 12°C, not 6°C.', checkMode: 'self', explanation: 'Since the temperatures cross zero, the distances must be added, not subtracted: 9 + 3 = 12°C.' },
        { difficulty: 'Medium-Hard', question: 'A freezer is set to −16°C. A kitchen is at 21°C. Find the difference between the freezer and the kitchen.', answer: '37°C', checkMode: 'auto', correctAnswer: '37', correctAnswers: ['37', '37°C', '37 °C'], explanation: 'Crossing zero: distance from −16°C to 0 is 16, and from 0 to 21°C is 21. 16 + 21 = 37°C ✓' },

        // Block 5 — Multi-step reasoning and real-world applications (17-19, Hard)
        { difficulty: 'Hard', question: 'Three towns recorded overnight temperatures: Town X: 8°C, Town Y: −14°C, Town Z: −3°C.\n\na) Which town was the warmest?\nb) Find the temperature difference between the warmest and coldest towns.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Warmest town', correctAnswer: 'Town X', correctAnswers: ['Town X', 'X'], explanation: 'Town X at 8°C is the only positive temperature, so it is the warmest ✓' }, { label: 'b) Difference between warmest and coldest', correctAnswer: '22', correctAnswers: ['22', '22°C'], explanation: 'Warmest is Town X (8°C), coldest is Town Y (−14°C). This crosses zero: 8 + 14 = 22°C ✓' } ] },
        { difficulty: 'Hard', question: 'A cold storage room starts at 9°C and drops by 3°C every hour for 4 hours.\n\na) Find the temperature after 4 hours.\nb) Find the difference between the starting temperature and the temperature after 4 hours.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Temperature after 4 hours', correctAnswer: '-3', correctAnswers: ['-3', '−3', '-3°C', '−3°C'], explanation: 'Total drop: 3 × 4 = 12°C. Starting at 9°C: 9 − 12 = −3°C ✓' }, { label: 'b) Difference between start and after 4 hours', correctAnswer: '12', correctAnswers: ['12', '12°C'], explanation: 'The temperature dropped from 9°C to −3°C, a difference of 12°C, which matches the total drop calculated ✓' } ] },
        { difficulty: 'Hard', question: 'Naledi says: "The temperature rose from −6°C to 10°C, so it rose by 4 degrees, because 10 − 6 = 4." Is Naledi correct? Explain and give the correct rise.', answer: 'No, Naledi is incorrect. Since −6°C and 10°C are on opposite sides of zero, the distances must be added, not subtracted. The temperature rose from −6°C to 0 (6 degrees) and then from 0 to 10°C (10 degrees), so the total rise is 6 + 10 = 16 degrees, not 4.', checkMode: 'self', explanation: 'Crossing zero requires adding the two distances: 6 + 10 = 16°C, which is the correct rise.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered reading thermometers, comparing temperatures, and calculating temperature differences.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the zero-crossing strategy, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Reading thermometers & positive/negative (0-3, Easy)
        { difficulty: 'Easy', question: 'A thermometer shows the mercury level as pictured. Each labelled mark is 10°C apart, with an extra unlabelled tick halfway between each pair of marks. What is the temperature?', answer: '20°C', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20°C', '20 °C'], explanation: 'The mercury lines up exactly with the labelled 20°C mark ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="70" width="18" height="108" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-20</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#dc2626" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">0</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'A thermometer shows the mercury level as pictured. Each labelled mark is 10°C apart, with an extra unlabelled tick halfway between each pair of marks. What is the temperature?', answer: '-5°C', checkMode: 'auto', correctAnswer: '-5', correctAnswers: ['-5', '−5', '-5°C', '−5°C'], explanation: 'The mercury lines up with the unlabelled tick halfway between the 0°C and -10°C marks, which is -5°C ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="132.5" width="18" height="45.5" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-20</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#dc2626" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">0</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'A liquid freezes at −20°C. Is this temperature above or below the freezing point of water (0°C)?', answer: 'below', checkMode: 'auto', correctAnswer: 'below', correctAnswers: ['below'], explanation: '−20°C is a negative temperature, so it is below 0°C, the freezing point of water ✓' },
        { difficulty: 'Easy', question: 'A summer afternoon in Durban reaches 31°C. Is this temperature positive or negative?', answer: 'positive', checkMode: 'auto', correctAnswer: 'positive', correctAnswers: ['positive'], explanation: '31°C is above 0°C, so it is a positive temperature ✓' },

        // Block 2 — Comparing and ordering (4-8, Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Which is warmer: −11°C or −4°C?', answer: '-4°C', checkMode: 'auto', correctAnswer: '-4', correctAnswers: ['-4', '−4', '-4°C', '−4°C'], explanation: '4 is smaller than 11, so −4°C is closer to 0 and therefore warmer ✓' },
        { difficulty: 'Easy-Medium', question: 'Order these temperatures from warmest to coldest: −5°C, 3°C, −14°C, 1°C.', answer: '3°C, 1°C, -5°C, -14°C', checkMode: 'auto', correctAnswer: '3, 1, -5, -14', correctAnswers: ['3, 1, -5, -14', '3, 1, −5, −14', '3°C, 1°C, -5°C, -14°C', '3°C, 1°C, −5°C, −14°C'], explanation: 'Positives come first, largest to smallest, then negatives from closest to 0 outward: 3°C, 1°C, −5°C, −14°C ✓' },
        { difficulty: 'Medium', question: 'Zinhle says −2°C is colder than −17°C because 2 is a smaller number. Is Zinhle correct? Explain.', answer: 'No — a smaller number after the minus sign means the temperature is closer to 0 and therefore warmer, not colder. −2°C is actually warmer than −17°C.', checkMode: 'self', explanation: 'Zinhle mixed up the rule for negative numbers. −2°C is closer to 0 than −17°C, so −2°C is warmer. Zinhle is incorrect.' },
        { difficulty: 'Medium', question: 'A weather app shows Nelspruit at −1°C and Upington at −8°C at the same time. Which town was colder?', answer: 'Upington', checkMode: 'auto', correctAnswer: 'Upington', correctAnswers: ['Upington', 'upington'], explanation: '−8°C is further below 0 than −1°C, so Upington was colder ✓' },
        { difficulty: 'Medium', question: 'Write the correct symbol (< or >) to compare −20°C and −6°C.', answer: '-20°C < -6°C', checkMode: 'auto', correctAnswer: '-20 < -6', correctAnswers: ['-20 < -6', '−20 < −6', '-20°C < -6°C', '−20°C < −6°C', '<'], explanation: '−20 is further from 0 than −6, so −20°C is smaller (colder): −20°C < −6°C ✓' },

        // Block 3 — Same-sign differences (9-12, Medium)
        { difficulty: 'Medium', question: 'Find the difference between −10°C and −25°C.', answer: '15°C', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15°C', '15 °C'], explanation: 'Both temperatures are negative, so subtract: 25 − 10 = 15°C ✓' },
        { difficulty: 'Medium', question: 'A desert town recorded a maximum of 38°C and a minimum of 24°C on the same day. Find the temperature range for the day.', answer: '14°C', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', '14°C', '14 °C'], explanation: 'Both temperatures are positive, so subtract: 38 − 24 = 14°C ✓' },
        { difficulty: 'Medium', question: 'The temperature at noon was 25°C. By late afternoon it had fallen by 8°C. What was the temperature in the late afternoon?', answer: '17°C', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17°C', '17 °C'], explanation: 'A fall means subtracting: 25°C − 8°C = 17°C ✓' },
        { difficulty: 'Medium', question: 'A ski resort was at −14°C. A cold front pushed it down further to −30°C. By how many degrees did the temperature drop?', answer: '16°C', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16°C', '16 °C'], explanation: 'Both temperatures are negative, so subtract: 30 − 14 = 16°C ✓' },

        // Block 4 — Zero-crossing differences (13-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Find the difference between −9°C and 16°C.', answer: '25°C', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25°C', '25 °C'], explanation: 'This crosses zero, so add the two distances: distance from −9°C to 0 is 9, and from 0 to 16°C is 16. 9 + 16 = 25°C ✓' },
        { difficulty: 'Medium-Hard', question: 'At sunrise the temperature was −13°C. By midday it had risen to 9°C. Find the temperature increase.', answer: '22°C', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', '22°C', '22 °C'], explanation: 'Crossing zero: distance from −13°C to 0 is 13, and from 0 to 9°C is 9. 13 + 9 = 22°C ✓' },
        { difficulty: 'Medium-Hard', question: 'A student calculates the difference between −18°C and 6°C by writing "18 − 6 = 12°C". Explain the mistake and give the correct difference.', answer: 'The student subtracted the two numbers as if both were on the same side of zero, but −18°C and 6°C are on opposite sides of 0. The correct method adds the two distances to zero: 18 (to reach 0) + 6 (to reach 6) = 24°C, not 12°C.', checkMode: 'self', explanation: 'Since the temperatures cross zero, the distances must be added, not subtracted: 18 + 6 = 24°C.' },
        { difficulty: 'Medium-Hard', question: 'A walk-in freezer is at −25°C. The bakery kitchen next to it is at 10°C. Find the difference between the freezer and the kitchen.', answer: '35°C', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35°C', '35 °C'], explanation: 'Crossing zero: distance from −25°C to 0 is 25, and from 0 to 10°C is 10. 25 + 10 = 35°C ✓' },

        // Block 5 — Multi-step reasoning and real-world applications (17-19, Hard)
        { difficulty: 'Hard', question: 'Three towns recorded overnight temperatures: Town P: −13°C, Town Q: 7°C, Town R: −6°C.\n\na) Which town was the coldest?\nb) Find the temperature difference between the coldest and warmest towns.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Coldest town', correctAnswer: 'Town P', correctAnswers: ['Town P', 'P'], explanation: 'Town P at −13°C is furthest below 0, so it is the coldest ✓' }, { label: 'b) Difference between coldest and warmest', correctAnswer: '20', correctAnswers: ['20', '20°C'], explanation: 'Coldest is Town P (−13°C), warmest is Town Q (7°C). This crosses zero: 13 + 7 = 20°C ✓' } ] },
        { difficulty: 'Hard', question: 'A cold storage room starts at 6°C and drops by 5°C every hour for 3 hours.\n\na) Find the temperature after 3 hours.\nb) Find the difference between the starting temperature and the temperature after 3 hours.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Temperature after 3 hours', correctAnswer: '-9', correctAnswers: ['-9', '−9', '-9°C', '−9°C'], explanation: 'Total drop: 5 × 3 = 15°C. Starting at 6°C: 6 − 15 = −9°C ✓' }, { label: 'b) Difference between start and after 3 hours', correctAnswer: '15', correctAnswers: ['15', '15°C'], explanation: 'The temperature dropped from 6°C to −9°C, a difference of 15°C, which matches the total drop calculated ✓' } ] },
        { difficulty: 'Hard', question: 'Bongani says: "The temperature dropped from 2°C to −9°C, so it dropped by 7 degrees, because 9 − 2 = 7." Is Bongani correct? Explain and give the correct drop.', answer: 'No, Bongani is incorrect. Since 2°C and −9°C are on opposite sides of zero, the distances must be added, not subtracted. The temperature dropped from 2°C to 0 (2 degrees) and then from 0 to −9°C (9 degrees), so the total drop is 2 + 9 = 11 degrees, not 7.', checkMode: 'self', explanation: 'Crossing zero requires adding the two distances: 2 + 9 = 11°C, which is the correct drop.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered reading thermometers, comparing temperatures, and calculating temperature differences.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the zero-crossing strategy, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
