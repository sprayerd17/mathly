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
  title: 'Temperatuur',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — READING THERMOMETERS AND NEGATIVE TEMPERATURES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-thermometers-negative-temperatures',
      title: 'Termometers Lees en Negatiewe Temperature',
      icon: '🌡️',
      explanation:
        `<p style="margin-bottom:16px;">Temperatuur word gemeet in ${re('grade Celsius (°C)')}, met ʼn ${re('termometer')}. Water vries by ${re('0°C')} en kook by ${or('100°C')}. Temperature ${or('bo 0°C')} is ${or('positief')}, en temperature ${bl('onder 0°C')} is ${bl('negatief')} — geskryf met ʼn minusteken, soos ${bl('−5°C')}. Dit is jou eerste behoorlike kennismaking met ${bl('negatiewe getalle')} in ʼn werklike-wêreld-konteks.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('positief (bo 0°C)')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('negatief (onder 0°C)')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('0°C (vriespunt)')}</span>` +
        `</div>` +

        // ── Key reference points ────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Belangrike verwysingspunte</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">0°C — Water Vries</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die temperatuur waarby water in ys verander.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">100°C — Water Kook</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die temperatuur waarby water in stoom verander.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Ongeveer 37°C — Menslike Liggaam</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die normale interne temperatuur van die menslike liggaam.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">ʼn Termometerskaal lees</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Termometerskaal werk net soos ʼn vertikale getallelyn: ${re('0°C')} is die verwysingspunt, ${or('positiewe getalle gaan op')} daarbo, en ${bl('negatiewe getalle gaan af')} daaronder. Tel die merke versigtig — party termometers merk elke 1°, ander elke 2° of 5°.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Termometer wys die kwiksilwervlak 3 merke bo 0°C, waar elke merk 2°C verteenwoordig. Wat is die temperatuur?',
          answer: `${or('6°C')}`,
          steps: [
            `Elke merk verteenwoordig ${or('2°C')}, en die kwiksilwer is by ${or('3 merke bo 0')}.`,
            `Vermenigvuldig: ${or('3 × 2 = 6')}.`,
            `Aangesien dit bo 0 is, is die temperatuur ${or('positief')}.`,
            `<strong>Antwoord:</strong> Die temperatuur is ${or('6°C')}. ✓`,
          ],
        },
        {
          question: 'ʼn Termometer wys die kwiksilwervlak 4 merke onder 0°C, waar elke merk 1°C verteenwoordig. Wat is die temperatuur?',
          answer: `${bl('−4°C')}`,
          steps: [
            `Elke merk verteenwoordig ${bl('1°C')}, en die kwiksilwer is by ${bl('4 merke onder 0')}.`,
            `Aangesien dit onder 0 is, is die temperatuur ${bl('negatief')}.`,
            `<strong>Antwoord:</strong> Die temperatuur is ${bl('−4°C')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Is ʼn temperatuur van −8°C bo of onder die vriespunt van water?',
          answer: 'onder',
          checkMode: 'auto',
          correctAnswer: 'onder',
          explanation: 'ʼn Negatiewe temperatuur is altyd onder 0°C, die vriespunt van water ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Beantwoord elk van die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) ʼn Termometer wys die kwiksilwer 5 merke bo 0°C, met elke merk gelyk aan 2°C. Bepaal die temperatuur.',
              correctAnswer: '10',
              correctAnswers: ['10', '10°C', '10 °C'],
              explanation: '5 × 2 = 10°C ✓',
            },
            {
              label: 'b) ʼn Termometer wys die kwiksilwer 6 merke onder 0°C, met elke merk gelyk aan 1°C. Bepaal die temperatuur.',
              correctAnswer: '-6',
              correctAnswers: ['-6', '−6', '-6°C', '−6°C'],
              explanation: '6 merke onder 0, elk gelyk aan 1°C, gee −6°C ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Water word van 0°C verhit. Dit bereik kookpunt nadat dit met 100°C verhit is.\n\na) Bevestig die kookpunt van water in °C.\nb) ʼn Ander vloeistof vries by −20°C. Hoeveel grade onder water se vriespunt is dit?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Kookpunt van water (°C)',
              correctAnswer: '100',
              explanation: 'Water kook by 100°C ✓',
            },
            {
              label: 'b) Grade onder water se vriespunt',
              correctAnswer: '20',
              explanation: 'Water vries by 0°C. Die vloeistof vries by −20°C, wat 20 grade onder 0°C is ✓',
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
      title: 'Temperature Vergelyk en Rangskik',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Net soos op ʼn getallelyn, is ʼn temperatuur verder na ${gr('regs')} (of hoër op ʼn termometer) altyd ${gr('groter')} as een verder na ${re('links')} (of laer af) — selfs wanneer albei negatief is. Dit kan verrassend voel: ${bl('−2°C')} is ${gr('warmer')} as ${bl('−8°C')}, omdat −2 verder na regs op die getallelyn is as −8.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('warmer / groter')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('kouer / kleiner')}</span>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">ʼn Eenvoudige reël vir negatiewe temperature</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer twee negatiewe temperature vergelyk word, is die een met die ${re('kleiner getal na die minusteken')} eintlik die ${gr('warmer')} een. Byvoorbeeld, as −3°C en −15°C vergelyk word: 3 is kleiner as 15, dus is ${gr('−3°C warmer')} as ${re('−15°C')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Watter een is warmer: −6°C of −2°C?',
          answer: `${gr('−2°C')} is warmer`,
          steps: [
            `Albei temperature is negatief, dus vergelyk die getalle na die minusteken: ${re('6')} en ${gr('2')}.`,
            `Aangesien ${gr('2')} kleiner is as ${re('6')}, is ${gr('−2°C')} nader aan 0 en dus warmer.`,
            `<strong>Antwoord:</strong> ${gr('−2°C')} is warmer as −6°C. ✓`,
          ],
        },
        {
          question: 'Rangskik hierdie temperature van koudste na warmste: 5°C, −3°C, 0°C, −9°C.',
          answer: `${re('−9°C, −3°C, 0°C, 5°C')}`,
          steps: [
            `Negatiewe temperature is altyd ${re('kouer')} as 0°C, wat kouer is as positiewe temperature.`,
            `Onder die negatiewes is ${re('−9°C')} kouer as −3°C (9 > 3).`,
            `Rangskik van koudste na warmste: ${re('−9°C, −3°C, 0°C, 5°C')}.`,
            `<strong>Antwoord:</strong> ${re('−9°C, −3°C, 0°C, 5°C')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Watter een is warmer: −4°C of −10°C?',
          answer: '-4°C',
          checkMode: 'auto',
          correctAnswer: '-4',
          correctAnswers: ['-4', '−4', '-4°C', '−4°C'],
          explanation: '4 is kleiner as 10, dus is −4°C warmer ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Rangskik hierdie temperature van koudste na warmste: −7°C, 3°C, −1°C, −12°C.',
          answer: '-12°C, -7°C, -1°C, 3°C',
          checkMode: 'auto',
          correctAnswer: '-12, -7, -1, 3',
          correctAnswers: ['-12, -7, -1, 3', '−12, −7, −1, 3', '-12°C, -7°C, -1°C, 3°C', '−12°C, −7°C, −1°C, 3°C'],
          explanation: 'Van koudste na warmste: −12°C, −7°C, −1°C, 3°C ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Vyf Suid-Afrikaanse dorpe het hierdie oornagtemperature aangeteken: Dorp A: −5°C, Dorp B: 2°C, Dorp C: −11°C, Dorp D: 0°C, Dorp E: −2°C.\n\na) Watter dorp was die koudste?\nb) Watter dorp was die warmste?\nc) Rangskik al vyf temperature van koudste na warmste.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Koudste dorp',
              correctAnswer: 'Town C',
              correctAnswers: ['Town C', 'C', 'Dorp C'],
              explanation: 'Dorp C by −11°C het die grootste getal na die minusteken, dus is dit die koudste ✓',
            },
            {
              label: 'b) Warmste dorp',
              correctAnswer: 'Town B',
              correctAnswers: ['Town B', 'B', 'Dorp B'],
              explanation: 'Dorp B by 2°C is die enigste positiewe temperatuur, dus is dit die warmste ✓',
            },
            {
              label: 'c) Rangskik van koudste na warmste',
              correctAnswer: '-11, -5, -2, 0, 2',
              correctAnswers: ['-11, -5, -2, 0, 2', '−11, −5, −2, 0, 2', 'C, A, E, D, B', 'Town C, Town A, Town E, Town D, Town B', 'Dorp C, Dorp A, Dorp E, Dorp D, Dorp B'],
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
      title: 'Temperatuurverskille Bereken',
      icon: '➖',
      explanation:
        `<p style="margin-bottom:16px;">Om die ${gr('verskil')} tussen twee temperature te vind, tel hoeveel grade hulle op die getallelyn skei. Wanneer albei temperature ${or('positief')} is, trek eenvoudig die kleiner van die groter af. Wanneer een of albei temperature ${bl('negatief')} is, help dit om die totale afstand oorgesteek te tel — insluitend die afstand oor ${re('0°C')} self.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('positiewe temperatuur')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('negatiewe temperatuur')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('temperatuurverskil')}</span>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Oor nul steek — tel die twee afstande bymekaar</p>` +
        `<p style="margin:0;color:#1e3a8a;">As een temperatuur negatief is en die ander positief, is die totale verskil die ${bl('afstand vanaf die negatiewe temperatuur na 0')} <strong>plus</strong> die ${or('afstand vanaf 0 na die positiewe temperatuur')}. Byvoorbeeld, van −4°C na 6°C: 4 (om by 0 te kom) + 6 (om by 6 te kom) = ${gr('10°C verskil')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Die temperatuur met sonop was −3°C, en teen die middag het dit gestyg tot 9°C. Bepaal die temperatuurverskil.',
          answer: `Verskil = ${gr('12°C')}`,
          steps: [
            `Die temperatuur steek oor ${re('0°C')}, dus tel die twee afstande bymekaar.`,
            `Afstand vanaf ${bl('−3°C')} na 0: ${bl('3')}.`,
            `Afstand vanaf 0 na ${or('9°C')}: ${or('9')}.`,
            `Tel bymekaar: ${gr('3 + 9 = 12°C')}.`,
            `<strong>Antwoord:</strong> Die temperatuur het met ${gr('12°C')} gestyg. ✓`,
          ],
        },
        {
          question: 'ʼn Stad het ʼn maksimum temperatuur van 4°C en ʼn minimum van −10°C op dieselfde dag aangeteken. Bepaal die temperatuurwydte vir die dag.',
          answer: `Wydte = ${gr('14°C')}`,
          steps: [
            `Afstand vanaf ${bl('−10°C')} na 0: ${bl('10')}.`,
            `Afstand vanaf 0 na ${or('4°C')}: ${or('4')}.`,
            `Tel bymekaar: ${gr('10 + 4 = 14°C')}.`,
            `<strong>Antwoord:</strong> Die temperatuurwydte is ${gr('14°C')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Die temperatuur was −5°C in die oggend en het gestyg tot 8°C teen die middag. Bepaal die temperatuurverskil.',
          answer: '13°C',
          checkMode: 'auto',
          correctAnswer: '13',
          correctAnswers: ['13', '13°C', '13 °C'],
          explanation: '5 (om by 0 te kom) + 8 (om by 8 te kom) = 13°C ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Bergdorp het ʼn maksimum van 2°C en ʼn minimum van −6°C op dieselfde dag aangeteken.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bepaal die temperatuurwydte vir die dag.',
              correctAnswer: '8',
              correctAnswers: ['8', '8°C'],
              explanation: '6 (om by 0 te kom) + 2 (om by 2 te kom) = 8°C ✓',
            },
            {
              label: 'b) As die temperatuur met nog 5°C vanaf die minimum daal, wat is die nuwe temperatuur?',
              correctAnswer: '-11',
              correctAnswers: ['-11', '−11', '-11°C', '−11°C'],
              explanation: '−6°C − 5°C = −11°C ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Vrieskas is op −18°C gestel. ʼn Yskas is op 4°C gestel. ʼn Kamer is op 22°C.\n\na) Bepaal die temperatuurverskil tussen die vrieskas en die yskas.\nb) Bepaal die temperatuurverskil tussen die yskas en die kamer.\nc) Bepaal die temperatuurverskil tussen die vrieskas en die kamer.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Verskil tussen vrieskas en yskas',
              correctAnswer: '22',
              correctAnswers: ['22', '22°C'],
              explanation: '18 (om by 0 te kom) + 4 (om by 4 te kom) = 22°C ✓',
            },
            {
              label: 'b) Verskil tussen yskas en kamer',
              correctAnswer: '18',
              correctAnswers: ['18', '18°C'],
              explanation: '22 − 4 = 18°C (albei positief, trek af) ✓',
            },
            {
              label: 'c) Verskil tussen vrieskas en kamer',
              correctAnswer: '40',
              correctAnswers: ['40', '40°C'],
              explanation: '18 (om by 0 te kom) + 22 (om by 22 te kom) = 40°C ✓',
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
      { minScore: 20, message: 'Uitstekend! Jy het temperatuur bemeester.' },
      { minScore: 15, message: 'Goeie werk!' },
      { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
      { minScore: 0, message: 'Hou aan probeer, werk deur die gids weer.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het temperatuur bemeester.' },
    { minScore: 15, message: 'Goeie werk!' },
    { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk deur die gids weer.' },
  ],
}
