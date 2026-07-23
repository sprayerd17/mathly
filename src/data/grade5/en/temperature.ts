import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (temperature roles) ──────────────────────────────────────
// reference point (0°C freezing) → red    (#dc2626)
// warm / higher temperature      → orange (#ea580c)
// cool / lower temperature       → blue   (#2563eb)
// difference / change            → green  (#16a34a)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Temperature',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — READING THERMOMETERS AND COMMON TEMPERATURE REFERENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-thermometers-referents',
      title: 'Reading Thermometers and Common Temperature Referents',
      icon: '🌡️',
      explanation:
        `<p style="margin-bottom:16px;">Temperature tells us <strong>how hot or cold something is</strong>. We measure temperature using a ${re('thermometer')}, in units called ${re('degrees Celsius (°C)')}. A thermometer scale works like a number line: as the liquid inside rises, the temperature gets ${or('higher (warmer)')}, and as it falls, the temperature gets ${bl('lower (cooler)')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('reference point')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('warmer')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('cooler')}</span>` +
        `</div>` +

        // ── Common temperature referents ────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Common temperature referents</p>` +
        `<p style="margin-bottom:12px;">Learning a few well-known reference temperatures helps you develop a sense of how hot or cold a temperature in °C actually feels.</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">0°C — Water Freezes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The freezing point of pure water — ice starts to form.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">100°C — Water Boils</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The boiling point of pure water — it turns to steam.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Around 37°C — Human Body</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The average normal internal temperature of a healthy human body.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Reading a thermometer scale</p>` +
        `<p style="margin:0;color:#1e3a8a;">Count the gradation marks carefully — on many thermometers, not every mark is numbered. Some marks may represent 1°C, others 2°C or 5°C. Find two labelled marks, work out what each unlabelled mark in between is worth, then read off the level of the liquid.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A thermometer shows the liquid level at 3 labelled marks above 0°C, where each labelled mark represents 10°C. What is the temperature?',
          answer: `${or('30°C')}`,
          steps: [
            `Each mark represents ${or('10°C')}, and the liquid is at the ${or('3rd mark above 0')}.`,
            `Multiply: ${or('3 × 10 = 30')}.`,
            `<strong>Answer:</strong> The temperature is ${or('30°C')}. ✓`,
          ],
        },
        {
          question: 'A digital thermometer used in the school garden shows a reading of 22°C on a warm afternoon. Is this closer to the freezing point of water or the boiling point of water?',
          answer: `Closer to the ${bl('freezing point')}`,
          steps: [
            `The freezing point of water is ${bl('0°C')}, and the boiling point is ${or('100°C')}.`,
            `22°C is only 22 degrees above 0°C, but it is 78 degrees below 100°C.`,
            `<strong>Answer:</strong> 22°C is much closer to the ${bl('freezing point (0°C)')} than to the boiling point. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'What is the freezing point of pure water, in degrees Celsius?',
          answer: '0°C',
          checkMode: 'auto',
          correctAnswer: '0',
          correctAnswers: ['0', '0°C', '0 °C'],
          explanation: 'Pure water freezes at 0°C ✓',
        },
        {
          difficulty: 'Easy',
          question: 'What is the average normal temperature of a healthy human body, in degrees Celsius?',
          answer: '37°C',
          checkMode: 'auto',
          correctAnswer: '37',
          correctAnswers: ['37', '37°C', '37 °C'],
          explanation: 'The average normal human body temperature is about 37°C ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A thermometer shows the liquid level at 4 labelled marks above 0°C, with each mark worth 5°C. What is the temperature?',
          answer: '20°C',
          checkMode: 'auto',
          correctAnswer: '20',
          correctAnswers: ['20', '20°C', '20 °C'],
          explanation: '4 × 5 = 20°C ✓',
        },
        {
          difficulty: 'Hard',
          question: 'A pot of water is heated on a stove. Answer the following about this everyday situation.\n\na) At what temperature, in °C, will the water start to boil?\nb) A nurse reads a patient\'s temperature as 39°C. Is this higher or lower than the normal human body temperature of 37°C?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Boiling point of water (°C)',
              correctAnswer: '100',
              correctAnswers: ['100', '100°C'],
              explanation: 'Water boils at 100°C ✓',
            },
            {
              label: 'b) Higher or lower than normal body temperature',
              correctAnswer: 'higher',
              correctAnswers: ['higher', 'Higher'],
              explanation: '39°C is 2 degrees above the normal 37°C, so it is higher ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Short video showing a thermometer scale with zero degrees marked in red as the freezing point of water, one hundred degrees marked as the boiling point, and thirty seven degrees marked as normal human body temperature',

      diagramPlaceholder:
        'Diagram of a vertical thermometer scale from 0 to 100 degrees Celsius, with the freezing point, boiling point and average human body temperature labelled and the liquid level shown at a sample reading',

      diagramSvg:
        '<svg viewBox="0 0 230 215" xmlns="http://www.w3.org/2000/svg"><text x="115" y="14" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Thermometer Scale (0-100&#176;C)</text><rect x="98" y="28" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="194" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="194" r="13" fill="#ea580c"/><rect x="101" y="80.5" width="18" height="97.5" rx="4" fill="#ea580c"/><line x1="98" y1="178" x2="90" y2="178" stroke="#2563eb" stroke-width="2"/><text x="86" y="182" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="98" y1="148" x2="90" y2="148" stroke="#2563eb" stroke-width="2"/><text x="86" y="152" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="118" x2="90" y2="118" stroke="#2563eb" stroke-width="2"/><text x="86" y="122" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="88" x2="90" y2="88" stroke="#2563eb" stroke-width="2"/><text x="86" y="92" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">60</text><line x1="98" y1="58" x2="90" y2="58" stroke="#2563eb" stroke-width="2"/><text x="86" y="62" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">80</text><line x1="98" y1="28" x2="90" y2="28" stroke="#2563eb" stroke-width="2"/><text x="86" y="32" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">100</text><line x1="98" y1="163" x2="94" y2="163" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="133" x2="94" y2="133" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="103" x2="94" y2="103" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="73" x2="94" y2="73" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="43" x2="94" y2="43" stroke="#9ca3af" stroke-width="1"/><line x1="122" y1="28" x2="128" y2="28" stroke="#ea580c" stroke-width="2"/><text x="132" y="32" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="start">100&#176;C - Boiling</text><line x1="122" y1="80.5" x2="128" y2="80.5" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="2,2"/><text x="132" y="84.5" font-size="9.5" fill="#0f1f3d" font-weight="700" text-anchor="start">65&#176;C reading</text><line x1="122" y1="122.5" x2="128" y2="122.5" stroke="#16a34a" stroke-width="2"/><text x="132" y="126.5" font-size="9.5" fill="#16a34a" font-weight="700" text-anchor="start">37&#176;C - Body</text><line x1="122" y1="178" x2="128" y2="178" stroke="#dc2626" stroke-width="2"/><text x="132" y="182" font-size="9.5" fill="#dc2626" font-weight="700" text-anchor="start">0&#176;C - Freezing</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — RECORDING TEMPERATURE MEASUREMENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'recording-temperature-measurements',
      title: 'Recording Temperature Measurements',
      icon: '📋',
      explanation:
        `<p style="margin-bottom:16px;">After reading a thermometer, we need to ${gr('record')} the measurement correctly. Temperature readings are always recorded in ${re('whole numbers of degrees Celsius')}, written with the ${or('°C')} symbol. If the liquid level does not line up exactly with a whole-degree mark, we round to the nearest whole degree.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('recorded reading')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('unit symbol')}</span>` +
        `</div>` +

        // ── Steps to record ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to record a temperature reading</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Find where the top of the liquid lines up on the scale.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">If it lines up exactly with a mark, that is your reading. If it falls between two marks, round to the ${gr('nearest whole degree')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Write the reading with the ${or('°C')} symbol, e.g. ${gr('24°C')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always include the unit</p>` +
        `<p style="margin:0;color:#1e3a8a;">A reading without a unit is incomplete. Writing "24" on its own does not tell anyone it is a temperature — always write "${or('24°C')}" so the record is clear.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A thermometer\'s liquid level lines up exactly with the 18°C mark. How should this reading be recorded?',
          answer: `${gr('18°C')}`,
          steps: [
            `The liquid lines up exactly with a labelled mark, so no rounding is needed.`,
            `<strong>Answer:</strong> Record the reading as ${gr('18°C')}. ✓`,
          ],
        },
        {
          question: 'A classroom weather chart records the outdoor temperature at 8:00 as 15°C and at 14:00 as 26°C. Which reading shows the warmer temperature, and what unit is used?',
          answer: `${or('26°C at 14:00')}; the unit is degrees Celsius (°C)`,
          steps: [
            `Compare the two readings: 15°C and 26°C.`,
            `26 is greater than 15, so the ${or('14:00 reading of 26°C')} is warmer.`,
            `Both readings use the unit ${or('degrees Celsius (°C)')}.`,
            `<strong>Answer:</strong> The 14:00 reading of ${or('26°C')} is warmer. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'What unit and symbol should always be written next to a temperature reading?',
          answer: 'degrees Celsius, °C',
          checkMode: 'auto',
          correctAnswer: '°C',
          correctAnswers: ['°C', 'degrees Celsius', 'C', 'celsius'],
          explanation: 'Temperature is recorded in degrees Celsius, using the symbol °C ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A thermometer\'s liquid level lines up exactly with the 33°C mark. Record this reading correctly, with its unit.',
          answer: '33°C',
          checkMode: 'auto',
          correctAnswer: '33',
          correctAnswers: ['33', '33°C', '33 °C'],
          explanation: 'The liquid lines up exactly with 33°C, so the reading is recorded as 33°C ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Themba records a fridge temperature as "5" without a unit. Explain why this is an incomplete record.',
          answer: 'A number on its own does not tell us what was measured. Without the °C symbol, "5" could mean anything. It should be recorded as 5°C so anyone reading it knows it is a temperature measured in degrees Celsius.',
          checkMode: 'self',
          explanation: 'A complete record always includes the unit symbol, °C, so the measurement is clear to anyone reading it.',
        },
        {
          difficulty: 'Hard',
          question: 'A weather station records the temperature every 2 hours during a school day: 09:00 — 17°C, 11:00 — 21°C, 13:00 — 25°C.\n\na) What was the temperature recorded at 11:00?\nb) At which time was the temperature the warmest?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Temperature at 11:00',
              correctAnswer: '21',
              correctAnswers: ['21', '21°C'],
              explanation: 'The table shows 21°C recorded at 11:00 ✓',
            },
            {
              label: 'b) Warmest time',
              correctAnswer: '13:00',
              correctAnswers: ['13:00', '1pm', '1 pm'],
              explanation: '25°C at 13:00 is the highest of the three readings ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Short video demonstrating how to read the liquid level on a thermometer scale and correctly record the temperature with the degrees Celsius symbol',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — COMPARING AND ORDERING TEMPERATURES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering-temperatures',
      title: 'Comparing and Ordering Temperatures',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Just like whole numbers, temperatures in °C can be ${gr('compared')} and ${gr('ordered')}. A ${or('higher number')} of degrees Celsius means a ${or('warmer')} temperature, and a ${bl('lower number')} means a ${bl('cooler')} temperature. In Grade 5 all the temperatures we work with are ${re('positive whole numbers')} — above 0°C.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('warmer / greater')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('cooler / smaller')}</span>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Comparing temperatures</p>` +
        `<p style="margin:0;color:#1e3a8a;">To compare two temperatures, simply compare the numbers — just like comparing whole numbers. ${or('27°C')} is warmer than ${bl('19°C')} because 27 is greater than 19. To order a list of temperatures, arrange the numbers from smallest to largest (coldest to warmest) or largest to smallest (warmest to coldest).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Which is warmer: 24°C or 31°C?',
          answer: `${or('31°C')} is warmer`,
          steps: [
            `Compare the two numbers: ${bl('24')} and ${or('31')}.`,
            `Since ${or('31')} is greater than ${bl('24')}, ${or('31°C')} is the warmer temperature.`,
            `<strong>Answer:</strong> ${or('31°C')} is warmer than 24°C. ✓`,
          ],
        },
        {
          question: 'Order these temperatures from coldest to warmest: 18°C, 27°C, 9°C, 22°C.',
          answer: `${bl('9°C, 18°C, 22°C, 27°C')}`,
          steps: [
            `Compare all four numbers: 18, 27, 9, 22.`,
            `Arrange from smallest to largest: ${bl('9, 18, 22, 27')}.`,
            `<strong>Answer:</strong> ${bl('9°C, 18°C, 22°C, 27°C')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Which is warmer: 16°C or 12°C?',
          answer: '16°C',
          checkMode: 'auto',
          correctAnswer: '16',
          correctAnswers: ['16', '16°C', '16 °C'],
          explanation: '16 is greater than 12, so 16°C is warmer ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Order these temperatures from coldest to warmest: 14°C, 29°C, 6°C, 20°C.',
          answer: '6°C, 14°C, 20°C, 29°C',
          checkMode: 'auto',
          correctAnswer: '6, 14, 20, 29',
          correctAnswers: ['6, 14, 20, 29', '6°C, 14°C, 20°C, 29°C'],
          explanation: 'Ordering from smallest to largest: 6°C, 14°C, 20°C, 29°C ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Five towns recorded these midday temperatures: Town A: 19°C, Town B: 24°C, Town C: 11°C, Town D: 30°C, Town E: 16°C.\n\na) Which town was the coldest?\nb) Which town was the warmest?\nc) Order all five temperatures from coldest to warmest.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Coldest town',
              correctAnswer: 'Town C',
              correctAnswers: ['Town C', 'C'],
              explanation: 'Town C at 11°C has the smallest number, so it is coldest ✓',
            },
            {
              label: 'b) Warmest town',
              correctAnswer: 'Town D',
              correctAnswers: ['Town D', 'D'],
              explanation: 'Town D at 30°C has the largest number, so it is warmest ✓',
            },
            {
              label: 'c) Order from coldest to warmest',
              correctAnswer: '11, 16, 19, 24, 30',
              correctAnswers: ['11, 16, 19, 24, 30', 'C, E, A, B, D', 'Town C, Town E, Town A, Town B, Town D'],
              explanation: '11°C (C), 16°C (E), 19°C (A), 24°C (B), 30°C (D) ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Short video comparing pairs of positive temperatures and showing how to order a list of temperatures from coldest to warmest by comparing the whole numbers',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — CALCULATING TEMPERATURE DIFFERENCES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-temperature-differences',
      title: 'Calculating Temperature Differences',
      icon: '➖',
      explanation:
        `<p style="margin-bottom:16px;">The ${gr('difference')} between two temperatures tells us how many degrees warmer or cooler one reading is than another. In Grade 5, all temperature calculations use ${re('positive whole numbers')}. To find the difference, simply ${gr('subtract the smaller temperature from the larger temperature')} — the same way you subtract any two whole numbers.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('larger temperature')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('smaller temperature')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('difference')}</span>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Finding a temperature difference</p>` +
        `<p style="margin:0;color:#1e3a8a;">Subtract the ${bl('smaller')} temperature from the ${or('larger')} one. For example, if the temperature rises from ${bl('14°C')} to ${or('23°C')}, the increase is ${or('23')} − ${bl('14')} = ${gr('9°C')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'The temperature at sunrise was 12°C, and by midday it had risen to 25°C. Find the temperature difference.',
          answer: `Difference = ${gr('13°C')}`,
          steps: [
            `Subtract the smaller temperature from the larger temperature.`,
            `${or('25')} − ${bl('12')} = ${gr('13')}.`,
            `<strong>Answer:</strong> The temperature rose by ${gr('13°C')}. ✓`,
          ],
        },
        {
          question: 'A town recorded a maximum temperature of 28°C and a minimum temperature of 17°C on the same day. Find the temperature range for the day.',
          answer: `Range = ${gr('11°C')}`,
          steps: [
            `The range is the difference between the maximum and minimum.`,
            `${or('28')} − ${bl('17')} = ${gr('11')}.`,
            `<strong>Answer:</strong> The temperature range is ${gr('11°C')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'The temperature was 15°C in the morning and rose to 23°C by afternoon. Find the temperature difference.',
          answer: '8°C',
          checkMode: 'auto',
          correctAnswer: '8',
          correctAnswers: ['8', '8°C', '8 °C'],
          explanation: '23 − 15 = 8°C ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A mountain town recorded a maximum temperature of 19°C and a minimum of 6°C on the same day.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the temperature range for the day.',
              correctAnswer: '13',
              correctAnswers: ['13', '13°C'],
              explanation: '19 − 6 = 13°C ✓',
            },
            {
              label: 'b) If the temperature then drops by another 4°C from the minimum, what is the new temperature?',
              correctAnswer: '2',
              correctAnswers: ['2', '2°C'],
              explanation: '6°C − 4°C = 2°C ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A classroom fridge for science experiments is kept at 4°C. The classroom itself is at 21°C, and outside on a hot day it is 33°C.\n\na) Find the temperature difference between the fridge and the classroom.\nb) Find the temperature difference between the classroom and outside.\nc) Find the temperature difference between the fridge and outside.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Fridge to classroom difference',
              correctAnswer: '17',
              correctAnswers: ['17', '17°C'],
              explanation: '21 − 4 = 17°C ✓',
            },
            {
              label: 'b) Classroom to outside difference',
              correctAnswer: '12',
              correctAnswers: ['12', '12°C'],
              explanation: '33 − 21 = 12°C ✓',
            },
            {
              label: 'c) Fridge to outside difference',
              correctAnswer: '29',
              correctAnswers: ['29', '29°C'],
              explanation: '33 − 4 = 29°C ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Short video demonstrating how to find the difference between two positive temperatures by subtracting the smaller from the larger, including a temperature range example',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Reading thermometers & referents (Easy) | 4-8 Recording
    // measurements (Easy-Medium) | 9-12 Comparing/ordering (Medium) |
    // 13-16 Calculating differences (Medium-Hard) | 17-19 Multi-step (Hard)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Reading thermometers & referents (0-3, Easy)
        { difficulty: 'Easy', question: 'A thermometer shows the liquid level as pictured. Each labelled mark is 10°C apart, with an extra unlabelled tick halfway between each pair of marks. What is the temperature?', answer: '30°C', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30°C', '30 °C'], explanation: 'The liquid lines up exactly with the labelled 30°C mark ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="95" width="18" height="83" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#2563eb" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">50</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'A thermometer shows the liquid level as pictured. Each labelled mark is 10°C apart, with an extra unlabelled tick halfway between each pair of marks. What is the temperature?', answer: '15°C', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15°C', '15 °C'], explanation: 'The liquid lines up with the unlabelled tick halfway between the 10°C and 20°C marks, which is 15°C ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="132.5" width="18" height="45.5" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#2563eb" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">50</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'What is the freezing point of pure water, in degrees Celsius?', answer: '0°C', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', '0°C'], explanation: 'Pure water freezes at 0°C ✓' },
        { difficulty: 'Easy', question: 'What is the boiling point of pure water, in degrees Celsius?', answer: '100°C', checkMode: 'auto', correctAnswer: '100', correctAnswers: ['100', '100°C'], explanation: 'Pure water boils at 100°C ✓' },

        // Block 2 — Recording measurements (4-8, Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A thermometer\'s liquid level lines up exactly with the 27°C mark. How should this reading be recorded, including the unit?', answer: '27°C', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27°C', '27 °C'], explanation: 'The liquid lines up exactly with 27°C, so the reading is recorded as 27°C ✓' },
        { difficulty: 'Easy-Medium', question: 'Why must a temperature reading always include the °C symbol when it is recorded?', answer: 'Because a number alone does not say what was measured — the °C symbol shows the reading is a temperature in degrees Celsius, so the record is clear to anyone reading it.', checkMode: 'self', explanation: 'Recording only a number leaves out essential information; the unit makes the measurement meaningful.' },
        { difficulty: 'Medium', question: 'A classroom weather chart shows: Monday 16°C, Tuesday 21°C, Wednesday 18°C. Which day was the coolest?', answer: 'Monday', checkMode: 'auto', correctAnswer: 'Monday', correctAnswers: ['Monday', 'monday'], explanation: '16°C is the smallest of the three readings, so Monday was coolest ✓' },
        { difficulty: 'Medium', question: 'A nurse reads a patient\'s temperature but the thermometer display is smudged and only shows "8". The patient feels warm, not freezing cold. What extra information does the nurse need to record a complete, sensible reading?', answer: 'The nurse needs the unit and the full reading — a temperature of just "8" is meaningless without knowing it is in °C and without the correct full number. Human body temperature is normally about 37°C, so a reading of 8°C would be far too low. The nurse should re-check the thermometer to get the correct full reading, such as 38°C, and record it with the °C symbol.', checkMode: 'self', explanation: 'A record needs both a believable, complete number and the correct unit to be useful.' },
        { difficulty: 'Medium', question: 'A thermometer\'s liquid level lines up exactly with the 41°C mark. Record this reading correctly, with its unit.', answer: '41°C', checkMode: 'auto', correctAnswer: '41', correctAnswers: ['41', '41°C', '41 °C'], explanation: 'The liquid lines up exactly with 41°C, so the reading is recorded as 41°C ✓' },

        // Block 3 — Comparing and ordering (9-12, Medium)
        { difficulty: 'Medium', question: 'Which is warmer: 22°C or 18°C?', answer: '22°C', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', '22°C', '22 °C'], explanation: '22 is greater than 18, so 22°C is warmer ✓' },
        { difficulty: 'Medium', question: 'Order these temperatures from coldest to warmest: 24°C, 9°C, 17°C, 31°C.', answer: '9°C, 17°C, 24°C, 31°C', checkMode: 'auto', correctAnswer: '9, 17, 24, 31', correctAnswers: ['9, 17, 24, 31', '9°C, 17°C, 24°C, 31°C'], explanation: 'Ordering from smallest to largest: 9°C, 17°C, 24°C, 31°C ✓' },
        { difficulty: 'Medium', question: 'Zanele says 8°C is warmer than 15°C because 8 comes before 15 when counting. Is Zanele correct? Explain.', answer: 'No, Zanele is incorrect. For temperatures in °C, a larger number always means a warmer temperature. 15 is greater than 8, so 15°C is warmer, not 8°C.', checkMode: 'self', explanation: 'Comparing temperatures works the same way as comparing any two whole numbers: the larger number is warmer.' },
        { difficulty: 'Medium', question: 'Durban recorded 26°C one afternoon, while Bloemfontein recorded 19°C at the same time. Which city was cooler?', answer: 'Bloemfontein', checkMode: 'auto', correctAnswer: 'Bloemfontein', correctAnswers: ['Bloemfontein', 'bloemfontein'], explanation: '19°C is less than 26°C, so Bloemfontein was cooler ✓' },

        // Block 4 — Calculating differences (13-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Find the difference between 14°C and 29°C.', answer: '15°C', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15°C', '15 °C'], explanation: '29 − 14 = 15°C ✓' },
        { difficulty: 'Medium-Hard', question: 'A town recorded a maximum of 27°C and a minimum of 13°C on the same day. Find the temperature range for the day.', answer: '14°C', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', '14°C', '14 °C'], explanation: '27 − 13 = 14°C ✓' },
        { difficulty: 'Medium-Hard', question: 'The temperature at 6 a.m. was 11°C. By 10 a.m. it had risen by 9°C. What was the temperature at 10 a.m.?', answer: '20°C', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20°C', '20 °C'], explanation: 'A rise means adding: 11°C + 9°C = 20°C ✓' },
        { difficulty: 'Medium-Hard', question: 'A greenhouse was kept at 24°C. It was adjusted to a cooler setting of 16°C. By how many degrees did the temperature drop?', answer: '8°C', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8°C', '8 °C'], explanation: '24 − 16 = 8°C ✓' },

        // Block 5 — Multi-step reasoning and real-world applications (17-19, Hard)
        { difficulty: 'Hard', question: 'Three towns recorded midday temperatures: Town A: 21°C, Town B: 34°C, Town C: 12°C.\n\na) Which town was the coolest?\nb) Find the temperature difference between the coolest and warmest towns.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Coolest town', correctAnswer: 'Town C', correctAnswers: ['Town C', 'C'], explanation: 'Town C at 12°C is the smallest reading, so it is the coolest ✓' }, { label: 'b) Difference between coolest and warmest', correctAnswer: '22', correctAnswers: ['22', '22°C'], explanation: 'Coolest is Town C (12°C), warmest is Town B (34°C). 34 − 12 = 22°C ✓' } ] },
        { difficulty: 'Hard', question: 'A classroom starts the day at 18°C and warms up by 3°C every hour for 4 hours as the sun comes through the windows.\n\na) Find the temperature after 4 hours.\nb) Find the difference between the starting temperature and the temperature after 4 hours.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Temperature after 4 hours', correctAnswer: '30', correctAnswers: ['30', '30°C'], explanation: 'Total rise: 3 × 4 = 12°C. Starting at 18°C: 18 + 12 = 30°C ✓' }, { label: 'b) Difference between start and after 4 hours', correctAnswer: '12', correctAnswers: ['12', '12°C'], explanation: 'The temperature rose from 18°C to 30°C, a difference of 12°C, matching the total rise calculated ✓' } ] },
        { difficulty: 'Hard', question: 'Karabo says: "The temperature rose from 9°C to 26°C, so it must have risen by 35 degrees, because I added 9 and 26." Is Karabo correct? Explain and give the correct rise.', answer: 'No, Karabo is incorrect. To find a temperature difference (rise or fall), you must subtract the smaller value from the larger value, not add them. The correct working is 26 − 9 = 17 degrees, not 35.', checkMode: 'self', explanation: 'A temperature difference always uses subtraction of the smaller from the larger: 26 − 9 = 17°C.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered reading thermometers, recording, comparing and calculating temperature differences.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on reading and comparing temperatures, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Reading thermometers & referents (0-3, Easy)
        { difficulty: 'Easy', question: 'A thermometer shows the liquid level as pictured. Each labelled mark is 10°C apart, with an extra unlabelled tick halfway between each pair of marks. What is the temperature?', answer: '40°C', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40°C', '40 °C'], explanation: 'The liquid lines up exactly with the labelled 40°C mark ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="70" width="18" height="108" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#2563eb" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">50</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'A thermometer shows the liquid level as pictured. Each labelled mark is 10°C apart, with an extra unlabelled tick halfway between each pair of marks. What is the temperature?', answer: '55°C', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55', '55°C', '55 °C'], explanation: 'The liquid lines up with the unlabelled tick halfway between the 50°C and 60°C marks, which is 55°C ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="32.5" width="18" height="145.5" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#2563eb" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">50</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'What is the average normal temperature of a healthy human body, in degrees Celsius?', answer: '37°C', checkMode: 'auto', correctAnswer: '37', correctAnswers: ['37', '37°C'], explanation: 'The average normal human body temperature is about 37°C ✓' },
        { difficulty: 'Easy', question: 'Is 100°C the freezing point or the boiling point of pure water?', answer: 'boiling point', checkMode: 'auto', correctAnswer: 'boiling point', correctAnswers: ['boiling point', 'boiling'], explanation: '100°C is the boiling point of pure water; the freezing point is 0°C ✓' },

        // Block 2 — Recording measurements (4-8, Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A thermometer\'s liquid level lines up exactly with the 34°C mark. How should this reading be recorded, including the unit?', answer: '34°C', checkMode: 'auto', correctAnswer: '34', correctAnswers: ['34', '34°C', '34 °C'], explanation: 'The liquid lines up exactly with 34°C, so the reading is recorded as 34°C ✓' },
        { difficulty: 'Easy-Medium', question: 'A cook wants to record how hot an oven is. Which unit should be used, and why?', answer: 'Degrees Celsius (°C), because that is the standard unit for measuring temperature — it lets anyone reading the record understand exactly how hot the oven is.', checkMode: 'self', explanation: 'Degrees Celsius is the standard unit CAPS specifies for recording temperature.' },
        { difficulty: 'Medium', question: 'A classroom weather chart shows: Thursday 20°C, Friday 25°C, Saturday 15°C. Which day was the warmest?', answer: 'Friday', checkMode: 'auto', correctAnswer: 'Friday', correctAnswers: ['Friday', 'friday'], explanation: '25°C is the greatest of the three readings, so Friday was warmest ✓' },
        { difficulty: 'Medium', question: 'Aisha reads a thermometer and records the temperature as "twenty-nine" without writing any number or symbol clearly. Explain what is missing from this record and how it should be written instead.', answer: 'A temperature record should be written using digits and the correct unit symbol so it can be read and used quickly and without confusion, for example 29°C rather than spelling the number out with no unit. Writing it clearly with °C removes any doubt about what was measured.', checkMode: 'self', explanation: 'Clear, standard recording (digits plus the °C symbol) avoids confusion when a temperature is read again later.' },
        { difficulty: 'Medium', question: 'A thermometer\'s liquid level lines up exactly with the 12°C mark. Record this reading correctly, with its unit.', answer: '12°C', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12°C', '12 °C'], explanation: 'The liquid lines up exactly with 12°C, so the reading is recorded as 12°C ✓' },

        // Block 3 — Comparing and ordering (9-12, Medium)
        { difficulty: 'Medium', question: 'Which is cooler: 28°C or 33°C?', answer: '28°C', checkMode: 'auto', correctAnswer: '28', correctAnswers: ['28', '28°C', '28 °C'], explanation: '28 is less than 33, so 28°C is cooler ✓' },
        { difficulty: 'Medium', question: 'Order these temperatures from coldest to warmest: 13°C, 27°C, 20°C, 8°C.', answer: '8°C, 13°C, 20°C, 27°C', checkMode: 'auto', correctAnswer: '8, 13, 20, 27', correctAnswers: ['8, 13, 20, 27', '8°C, 13°C, 20°C, 27°C'], explanation: 'Ordering from smallest to largest: 8°C, 13°C, 20°C, 27°C ✓' },
        { difficulty: 'Medium', question: 'Sipho says 30°C is cooler than 25°C because "3 is a smaller digit than the 2 and 5 combined." Is Sipho correct? Explain.', answer: 'No, Sipho is incorrect and his reasoning does not make sense. To compare temperatures you compare the whole numbers directly: 30 is greater than 25, so 30°C is warmer, not cooler, than 25°C.', checkMode: 'self', explanation: 'Comparing temperatures means comparing the whole numbers directly — 30 > 25, so 30°C is warmer.' },
        { difficulty: 'Medium', question: 'Polokwane recorded 31°C one afternoon, while Kimberley recorded 29°C at the same time. Which city was warmer?', answer: 'Polokwane', checkMode: 'auto', correctAnswer: 'Polokwane', correctAnswers: ['Polokwane', 'polokwane'], explanation: '31°C is greater than 29°C, so Polokwane was warmer ✓' },

        // Block 4 — Calculating differences (13-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Find the difference between 18°C and 32°C.', answer: '14°C', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', '14°C', '14 °C'], explanation: '32 − 18 = 14°C ✓' },
        { difficulty: 'Medium-Hard', question: 'A city recorded a maximum of 24°C and a minimum of 15°C on the same day. Find the temperature range for the day.', answer: '9°C', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9°C', '9 °C'], explanation: '24 − 15 = 9°C ✓' },
        { difficulty: 'Medium-Hard', question: 'The temperature at 7 a.m. was 13°C. By 11 a.m. it had risen by 12°C. What was the temperature at 11 a.m.?', answer: '25°C', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25°C', '25 °C'], explanation: 'A rise means adding: 13°C + 12°C = 25°C ✓' },
        { difficulty: 'Medium-Hard', question: 'A swimming pool heater warms the water from 19°C to 27°C. By how many degrees did the water temperature rise?', answer: '8°C', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8°C', '8 °C'], explanation: '27 − 19 = 8°C ✓' },

        // Block 5 — Multi-step reasoning and real-world applications (17-19, Hard)
        { difficulty: 'Hard', question: 'Three towns recorded midday temperatures: Town A: 16°C, Town B: 29°C, Town C: 23°C.\n\na) Which town was the warmest?\nb) Find the temperature difference between the warmest and coolest towns.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Warmest town', correctAnswer: 'Town B', correctAnswers: ['Town B', 'B'], explanation: 'Town B at 29°C is the greatest reading, so it is the warmest ✓' }, { label: 'b) Difference between warmest and coolest', correctAnswer: '13', correctAnswers: ['13', '13°C'], explanation: 'Warmest is Town B (29°C), coolest is Town A (16°C). 29 − 16 = 13°C ✓' } ] },
        { difficulty: 'Hard', question: 'A walk-in freezer room starts a test at 30°C and is cooled down by 5°C every hour for 4 hours.\n\na) Find the temperature after 4 hours.\nb) Find the difference between the starting temperature and the temperature after 4 hours.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Temperature after 4 hours', correctAnswer: '10', correctAnswers: ['10', '10°C'], explanation: 'Total drop: 5 × 4 = 20°C. Starting at 30°C: 30 − 20 = 10°C ✓' }, { label: 'b) Difference between start and after 4 hours', correctAnswer: '20', correctAnswers: ['20', '20°C'], explanation: 'The temperature dropped from 30°C to 10°C, a difference of 20°C, matching the total drop calculated ✓' } ] },
        { difficulty: 'Hard', question: 'Lindiwe says: "The temperature dropped from 28°C to 11°C, so it dropped by 39 degrees, because I added 28 and 11 by mistake." Is Lindiwe correct? Explain and give the correct drop.', answer: 'No, Lindiwe is incorrect. To find how much the temperature dropped, you must subtract the smaller value from the larger value, not add them. The correct working is 28 − 11 = 17 degrees, not 39.', checkMode: 'self', explanation: 'A temperature drop is found using subtraction: 28 − 11 = 17°C.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered reading thermometers, recording, comparing and calculating temperature differences.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on reading and comparing temperatures, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Reading thermometers & referents (0-3, Easy)
        { difficulty: 'Easy', question: 'A thermometer shows the liquid level as pictured. Each labelled mark is 10°C apart, with an extra unlabelled tick halfway between each pair of marks. What is the temperature?', answer: '20°C', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20°C', '20 °C'], explanation: 'The liquid lines up exactly with the labelled 20°C mark ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="120" width="18" height="58" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#2563eb" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">50</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'A thermometer shows the liquid level as pictured. Each labelled mark is 10°C apart, with an extra unlabelled tick halfway between each pair of marks. What is the temperature?', answer: '5°C', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5°C', '5 °C'], explanation: 'The liquid lines up with the unlabelled tick halfway between the 0°C and 10°C marks, which is 5°C ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="157.5" width="18" height="20.5" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#2563eb" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">50</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'A summer\'s day is recorded at 32°C. Is this closer to the freezing point or the boiling point of water?', answer: 'freezing point', checkMode: 'auto', correctAnswer: 'freezing point', correctAnswers: ['freezing point', 'freezing'], explanation: '32°C is 32 degrees above 0°C but 68 degrees below 100°C, so it is closer to the freezing point ✓' },
        { difficulty: 'Easy', question: 'Which measuring instrument is used to measure temperature?', answer: 'thermometer', checkMode: 'auto', correctAnswer: 'thermometer', correctAnswers: ['thermometer', 'a thermometer'], explanation: 'A thermometer is the instrument used to measure temperature ✓' },

        // Block 2 — Recording measurements (4-8, Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A thermometer\'s liquid level lines up exactly with the 9°C mark. How should this reading be recorded, including the unit?', answer: '9°C', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9°C', '9 °C'], explanation: 'The liquid lines up exactly with 9°C, so the reading is recorded as 9°C ✓' },
        { difficulty: 'Easy-Medium', question: 'A farmer records the temperature in a greenhouse three times a day. Why is it useful to record the actual time next to each temperature reading?', answer: 'Recording the time alongside each reading shows how the temperature changes throughout the day, so the farmer can compare readings meaningfully and spot patterns, such as which time of day is warmest or coolest.', checkMode: 'self', explanation: 'Recording context (like time) alongside a measurement makes the data useful for comparison.' },
        { difficulty: 'Medium', question: 'A classroom weather chart shows: Week 1 average 17°C, Week 2 average 23°C, Week 3 average 19°C. Which week had the highest average temperature?', answer: 'Week 2', checkMode: 'auto', correctAnswer: 'Week 2', correctAnswers: ['Week 2', 'week 2', '2'], explanation: '23°C is the greatest of the three averages, so Week 2 was warmest ✓' },
        { difficulty: 'Medium', question: 'Boitumelo reads a thermometer and writes down "36 degrees" for what she believes is a fridge temperature, but a fridge should usually be much closer to 4°C or 5°C to keep food safely cold. What might have gone wrong, and what should Boitumelo do next?', answer: 'A reading of 36°C would be far too warm for a fridge — it is close to human body temperature, not fridge temperature. Boitumelo probably misread the thermometer, read the wrong scale, or the thermometer was not actually inside the fridge. She should re-check the thermometer placement and reading carefully before recording the temperature again.', checkMode: 'self', explanation: 'Checking whether a reading makes sense for the real-world context is an important recording skill.' },
        { difficulty: 'Medium', question: 'A thermometer\'s liquid level lines up exactly with the 48°C mark. Record this reading correctly, with its unit.', answer: '48°C', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48', '48°C', '48 °C'], explanation: 'The liquid lines up exactly with 48°C, so the reading is recorded as 48°C ✓' },

        // Block 3 — Comparing and ordering (9-12, Medium)
        { difficulty: 'Medium', question: 'Which is cooler: 21°C or 17°C?', answer: '17°C', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17°C', '17 °C'], explanation: '17 is less than 21, so 17°C is cooler ✓' },
        { difficulty: 'Medium', question: 'Order these temperatures from coldest to warmest: 26°C, 11°C, 33°C, 19°C.', answer: '11°C, 19°C, 26°C, 33°C', checkMode: 'auto', correctAnswer: '11, 19, 26, 33', correctAnswers: ['11, 19, 26, 33', '11°C, 19°C, 26°C, 33°C'], explanation: 'Ordering from smallest to largest: 11°C, 19°C, 26°C, 33°C ✓' },
        { difficulty: 'Medium', question: 'A student says that to find the warmer of two positive temperatures, you should compare which number has more digits. Does this always work? Explain using 9°C and 12°C.', answer: 'Comparing digit count alone is not a reliable method for numbers with different amounts of digits in general, but with 9°C and 12°C it does happen to give the right answer here: 12 has more digits than 9, and 12°C is indeed warmer. The safest method is always to compare the actual value of the numbers, not just how many digits they have.', checkMode: 'self', explanation: 'Comparing full numeric value (not digit count) is the reliable method for comparing temperatures.' },
        { difficulty: 'Medium', question: 'Upington recorded 35°C one afternoon, while Cape Town recorded 22°C at the same time. Which city was cooler?', answer: 'Cape Town', checkMode: 'auto', correctAnswer: 'Cape Town', correctAnswers: ['Cape Town', 'cape town'], explanation: '22°C is less than 35°C, so Cape Town was cooler ✓' },

        // Block 4 — Calculating differences (13-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Find the difference between 21°C and 38°C.', answer: '17°C', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17°C', '17 °C'], explanation: '38 − 21 = 17°C ✓' },
        { difficulty: 'Medium-Hard', question: 'A coastal town recorded a maximum of 26°C and a minimum of 20°C on the same day. Find the temperature range for the day.', answer: '6°C', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6°C', '6 °C'], explanation: '26 − 20 = 6°C ✓' },
        { difficulty: 'Medium-Hard', question: 'The temperature at 8 a.m. was 14°C. By midday it had risen by 11°C. What was the temperature at midday?', answer: '25°C', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25°C', '25 °C'], explanation: 'A rise means adding: 14°C + 11°C = 25°C ✓' },
        { difficulty: 'Medium-Hard', question: 'A science classroom cools a beaker of water from 35°C to 22°C for an experiment. By how many degrees did the temperature drop?', answer: '13°C', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13°C', '13 °C'], explanation: '35 − 22 = 13°C ✓' },

        // Block 5 — Multi-step reasoning and real-world applications (17-19, Hard)
        { difficulty: 'Hard', question: 'Three towns recorded midday temperatures: Town A: 25°C, Town B: 14°C, Town C: 31°C.\n\na) Which town was the coolest?\nb) Find the temperature difference between the coolest and warmest towns.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Coolest town', correctAnswer: 'Town B', correctAnswers: ['Town B', 'B'], explanation: 'Town B at 14°C is the smallest reading, so it is the coolest ✓' }, { label: 'b) Difference between coolest and warmest', correctAnswer: '17', correctAnswers: ['17', '17°C'], explanation: 'Coolest is Town B (14°C), warmest is Town C (31°C). 31 − 14 = 17°C ✓' } ] },
        { difficulty: 'Hard', question: 'A kettle heats water starting at 16°C, rising by 21°C every minute for 3 minutes.\n\na) Find the temperature after 3 minutes.\nb) Find the difference between the starting temperature and the temperature after 3 minutes.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Temperature after 3 minutes', correctAnswer: '79', correctAnswers: ['79', '79°C'], explanation: 'Total rise: 21 × 3 = 63°C. Starting at 16°C: 16 + 63 = 79°C ✓' }, { label: 'b) Difference between start and after 3 minutes', correctAnswer: '63', correctAnswers: ['63', '63°C'], explanation: 'The temperature rose from 16°C to 79°C, a difference of 63°C, matching the total rise calculated ✓' } ] },
        { difficulty: 'Hard', question: 'Naledi says: "The maximum today was 33°C and the minimum was 24°C, so the range must be 57°C, because I added them." Is Naledi correct? Explain and give the correct range.', answer: 'No, Naledi is incorrect. A temperature range is found by subtracting the minimum from the maximum, not adding them. The correct working is 33 − 24 = 9 degrees, not 57.', checkMode: 'self', explanation: 'Temperature range = maximum − minimum = 33 − 24 = 9°C.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered reading thermometers, recording, comparing and calculating temperature differences.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on reading and comparing temperatures, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
