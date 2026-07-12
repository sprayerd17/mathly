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
        '<VideoPlaceholder label="Kort video wat ʼn termometer as ʼn vertikale getallelyn wys, met nul grade in rooi gemerk, positiewe temperature wat opwaarts in oranje styg, en negatiewe temperature wat afwaarts in blou daal" />',

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
        '<VideoPlaceholder label="Kort video wat pare negatiewe temperature op ʼn getallelyn vergelyk, en wys dat die temperatuur nader aan nul altyd warmer is, selfs al is die getal na die minusteken kleiner" />',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om die verskil tussen twee temperature op ʼn getallelyn te vind, insluitend ʼn geval wat oor nul beweeg deur die afstand onder nul by die afstand bo nul te tel" />',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // Blokke: 0-3 Termometers lees & +/- (Maklik) | 4-8 Vergelyk/rangskik
    // (Maklik-Medium) | 9-12 Selfde-teken verskille (Medium) | 13-16 Oor-nul
    // verskille (Medium-Moeilik) | 17-19 Multi-stap redenering (Moeilik)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Termometers lees & positief/negatief (0-3, Maklik)
        { difficulty: 'Easy', question: 'ʼn Termometer wys die kwiksilwervlak soos afgebeeld. Elke gemerkte punt is 10°C uitmekaar, met ʼn ekstra ongemerkte merkie halfpad tussen elke paar punte. Wat is die temperatuur?', answer: '20°C', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20°C', '20 °C'], explanation: 'Die kwiksilwer lyn op presies met die gemerkte 20°C punt ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="70" width="18" height="108" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-20</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#dc2626" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">0</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Termometer wys die kwiksilwervlak soos afgebeeld. Elke gemerkte punt is 10°C uitmekaar, met ʼn ekstra ongemerkte merkie halfpad tussen elke paar punte. Wat is die temperatuur?', answer: '-15°C', checkMode: 'auto', correctAnswer: '-15', correctAnswers: ['-15', '−15', '-15°C', '−15°C'], explanation: 'Die kwiksilwer lyn op met die ongemerkte merkie halfpad tussen die -10°C en -20°C punte, wat -15°C is ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="157.5" width="18" height="20.5" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-20</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#dc2626" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">0</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'Is ʼn temperatuur van −6°C bo of onder die vriespunt van water?', answer: 'onder', checkMode: 'auto', correctAnswer: 'onder', correctAnswers: ['onder'], explanation: 'Enige negatiewe temperatuur is onder 0°C, wat die vriespunt van water is ✓' },
        { difficulty: 'Easy', question: 'Water vries by 0°C. Menslike liggaamstemperatuur is normaalweg ongeveer 37°C. Is 37°C ʼn positiewe of negatiewe temperatuur?', answer: 'positief', checkMode: 'auto', correctAnswer: 'positief', correctAnswers: ['positief'], explanation: '37°C is bo 0°C, dus is dit ʼn positiewe temperatuur ✓' },

        // Blok 2 — Vergelyk en rangskik (4-8, Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'Watter een is warmer: −8°C of −2°C?', answer: '-2°C', checkMode: 'auto', correctAnswer: '-2', correctAnswers: ['-2', '−2', '-2°C', '−2°C'], explanation: '2 is kleiner as 8, dus is −2°C nader aan 0 en dus warmer ✓' },
        { difficulty: 'Easy-Medium', question: 'Rangskik hierdie temperature van koudste na warmste: 4°C, −6°C, −1°C, 9°C.', answer: '-6°C, -1°C, 4°C, 9°C', checkMode: 'auto', correctAnswer: '-6, -1, 4, 9', correctAnswers: ['-6, -1, 4, 9', '−6, −1, 4, 9', '-6°C, -1°C, 4°C, 9°C', '−6°C, −1°C, 4°C, 9°C'], explanation: 'Negatiewes is kouer as 0, en onder hulle is −6°C kouer as −1°C. Volgorde: −6°C, −1°C, 4°C, 9°C ✓' },
        { difficulty: 'Medium', question: 'Sipho sê −15°C is warmer as −9°C omdat 15 ʼn groter getal is. Is Sipho korrek? Verduidelik.', answer: 'Nee — vir negatiewe temperature is die kleiner getal na die minusteken warmer. Aangesien 9 kleiner is as 15, is −9°C eintlik warmer as −15°C, nie −15°C nie.', checkMode: 'self', explanation: 'Sipho het die reël vir negatiewe getalle verwar. −9°C is nader aan 0 as −15°C, dus is −9°C warmer. Sipho is verkeerd.' },
        { difficulty: 'Medium', question: 'Kaapstad het −1°C een winteroggend aangeteken, terwyl Johannesburg −5°C op dieselfde tyd aangeteken het. Watter stad was kouer?', answer: 'Johannesburg', checkMode: 'auto', correctAnswer: 'Johannesburg', correctAnswers: ['Johannesburg', 'johannesburg'], explanation: '−5°C is verder onder 0 as −1°C, dus was Johannesburg kouer ✓' },
        { difficulty: 'Medium', question: 'Skryf die korrekte simbool (< of >) om −3°C en −11°C te vergelyk.', answer: '-3°C > -11°C', checkMode: 'auto', correctAnswer: '-3 > -11', correctAnswers: ['-3 > -11', '−3 > −11', '-3°C > -11°C', '−3°C > −11°C', '>'], explanation: '−3 is nader aan 0 as −11, dus is −3°C groter (warmer): −3°C > −11°C ✓' },

        // Blok 3 — Selfde-teken verskille (9-12, Medium)
        { difficulty: 'Medium', question: 'Bepaal die verskil tussen −2°C en −8°C.', answer: '6°C', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6°C', '6 °C'], explanation: 'Albei temperature is negatief, dus trek af: 8 − 2 = 6°C ✓' },
        { difficulty: 'Medium', question: 'ʼn Dorp het ʼn maksimum van 20°C en ʼn minimum van 9°C op dieselfde dag aangeteken. Bepaal die temperatuurwydte vir die dag.', answer: '11°C', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', '11°C', '11 °C'], explanation: 'Albei temperature is positief, dus trek af: 20 − 9 = 11°C ✓' },
        { difficulty: 'Medium', question: 'Die temperatuur om 6 vm was −15°C. Teen 8 vm het dit met 5°C gestyg. Wat was die temperatuur om 8 vm?', answer: '-10°C', checkMode: 'auto', correctAnswer: '-10', correctAnswers: ['-10', '−10', '-10°C', '−10°C'], explanation: 'ʼn Styging beteken bytel: −15°C + 5°C = −10°C ✓' },
        { difficulty: 'Medium', question: 'ʼn Vrieskasafdeling was op −3°C. Dit is aangepas na ʼn kouer instelling van −19°C. Met hoeveel grade het die temperatuur gedaal?', answer: '16°C', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16°C', '16 °C'], explanation: 'Albei temperature is negatief, dus trek af: 19 − 3 = 16°C ✓' },

        // Blok 4 — Oor-nul verskille (13-16, Medium-Moeilik)
        { difficulty: 'Medium-Hard', question: 'Bepaal die verskil tussen −6°C en 9°C.', answer: '15°C', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15°C', '15 °C'], explanation: 'Dit steek oor nul, dus tel die twee afstande bymekaar: afstand van −6°C na 0 is 6, en van 0 na 9°C is 9. 6 + 9 = 15°C ✓' },
        { difficulty: 'Medium-Hard', question: 'Met sonop was die temperatuur −4°C. Teen die middag het dit gestyg tot 15°C. Bepaal die temperatuurstyging.', answer: '19°C', checkMode: 'auto', correctAnswer: '19', correctAnswers: ['19', '19°C', '19 °C'], explanation: 'Oor nul: afstand van −4°C na 0 is 4, en van 0 na 15°C is 15. 4 + 15 = 19°C ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Leerder bereken die verskil tussen −12°C en 5°C deur te skryf "12 − 5 = 7°C". Verduidelik die fout en gee die korrekte verskil.', answer: 'Die leerder het die twee getalle afgetrek asof albei aan dieselfde kant van nul is, maar −12°C en 5°C is aan teenoorgestelde kante van 0. Die korrekte metode tel die twee afstande na nul bymekaar: 12 (om by 0 te kom) + 5 (om by 5 te kom) = 17°C, nie 7°C nie.', checkMode: 'self', explanation: 'Aangesien die temperature oor nul steek, moet die afstande bymekaar getel word, nie afgetrek word nie: 12 + 5 = 17°C.' },
        { difficulty: 'Medium-Hard', question: 'Die temperatuur binne ʼn vrieskas is −20°C. Kamertemperatuur is 22°C. Bepaal die verskil tussen die vrieskas en die kamer.', answer: '42°C', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42°C', '42 °C'], explanation: 'Oor nul: afstand van −20°C na 0 is 20, en van 0 na 22°C is 22. 20 + 22 = 42°C ✓' },

        // Blok 5 — Multi-stap redenering en werklike-wêreld toepassings (17-19, Moeilik)
        { difficulty: 'Hard', question: 'Drie dorpe het oornagtemperature aangeteken: Dorp A: −9°C, Dorp B: 6°C, Dorp C: −2°C.\n\na) Watter dorp was die koudste?\nb) Bepaal die temperatuurverskil tussen die koudste en warmste dorpe.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Koudste dorp', correctAnswer: 'Dorp A', correctAnswers: ['Dorp A', 'A', 'Town A'], explanation: 'Dorp A by −9°C is die verste onder 0, dus is dit die koudste ✓' }, { label: 'b) Verskil tussen koudste en warmste', correctAnswer: '15', correctAnswers: ['15', '15°C'], explanation: 'Koudste is Dorp A (−9°C), warmste is Dorp B (6°C). Dit steek oor nul: 9 + 6 = 15°C ✓' } ] },
        { difficulty: 'Hard', question: 'ʼn Koelkamer begin by 5°C en daal elke uur met 4°C, vir 3 uur.\n\na) Bepaal die temperatuur na 3 uur.\nb) Bepaal die verskil tussen die begintemperatuur en die temperatuur na 3 uur.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Temperatuur na 3 uur', correctAnswer: '-7', correctAnswers: ['-7', '−7', '-7°C', '−7°C'], explanation: 'Totale daling: 4 × 3 = 12°C. Begin by 5°C: 5 − 12 = −7°C ✓' }, { label: 'b) Verskil tussen begin en na 3 uur', correctAnswer: '12', correctAnswers: ['12', '12°C'], explanation: 'Die temperatuur het van 5°C na −7°C gedaal, ʼn verskil van 12°C, wat ooreenstem met die totale daling wat bereken is ✓' } ] },
        { difficulty: 'Hard', question: 'Lerato sê: "Die temperatuur het van 3°C na −11°C gedaal, dus het dit met 8 grade gedaal, want 11 − 3 = 8." Is Lerato korrek? Verduidelik en gee die korrekte daling.', answer: 'Nee, Lerato is verkeerd. Aangesien 3°C en −11°C aan teenoorgestelde kante van nul is, moet die afstande bymekaar getel word, nie afgetrek word nie. Die temperatuur het van 3°C na 0 gedaal (3 grade) en toe van 0 na −11°C (11 grade), dus is die totale daling 3 + 11 = 14 grade, nie 8 nie.', checkMode: 'self', explanation: 'Oor nul steek vereis dat die twee afstande bymekaar getel word: 3 + 11 = 14°C, wat die korrekte daling is.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het termometers lees, temperature vergelyk en temperatuurverskille bereken bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van die meeste van hierdie werk — hersien enige gemiste vrae.' },
        { minScore: 10, message: 'Goeie poging! Hersien die oor-nul-strategie, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Termometers lees & positief/negatief (0-3, Maklik)
        { difficulty: 'Easy', question: 'ʼn Termometer wys die kwiksilwervlak soos afgebeeld. Elke gemerkte punt is 10°C uitmekaar, met ʼn ekstra ongemerkte merkie halfpad tussen elke paar punte. Wat is die temperatuur?', answer: '15°C', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15°C', '15 °C'], explanation: 'Die kwiksilwer lyn op met die ongemerkte merkie halfpad tussen die 10°C en 20°C punte, wat 15°C is ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="82.5" width="18" height="95.5" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-20</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#dc2626" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">0</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Termometer wys die kwiksilwervlak soos afgebeeld. Elke gemerkte punt is 10°C uitmekaar, met ʼn ekstra ongemerkte merkie halfpad tussen elke paar punte. Wat is die temperatuur?', answer: '-10°C', checkMode: 'auto', correctAnswer: '-10', correctAnswers: ['-10', '−10', '-10°C', '−10°C'], explanation: 'Die kwiksilwer lyn op presies met die gemerkte -10°C punt ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="145" width="18" height="33" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-20</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#dc2626" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">0</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'Water kook by 100°C. Is 100°C ʼn positiewe of negatiewe temperatuur?', answer: 'positief', checkMode: 'auto', correctAnswer: 'positief', correctAnswers: ['positief'], explanation: '100°C is bo 0°C, dus is dit ʼn positiewe temperatuur ✓' },
        { difficulty: 'Easy', question: 'ʼn Weerberig wys −3°C vir ʼn vroeë oggend in Bloemfontein. Is hierdie temperatuur bo of onder vriespunt?', answer: 'onder', checkMode: 'auto', correctAnswer: 'onder', correctAnswers: ['onder'], explanation: '−3°C is ʼn negatiewe temperatuur, dus is dit onder 0°C, die vriespunt ✓' },

        // Blok 2 — Vergelyk en rangskik (4-8, Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'Watter een is kouer: −5°C of −13°C?', answer: '-13°C', checkMode: 'auto', correctAnswer: '-13', correctAnswers: ['-13', '−13', '-13°C', '−13°C'], explanation: '13 is groter as 5, dus is −13°C verder onder 0 en dus kouer ✓' },
        { difficulty: 'Easy-Medium', question: 'Rangskik hierdie temperature van koudste na warmste: −2°C, 7°C, −10°C, 0°C.', answer: '-10°C, -2°C, 0°C, 7°C', checkMode: 'auto', correctAnswer: '-10, -2, 0, 7', correctAnswers: ['-10, -2, 0, 7', '−10, −2, 0, 7', '-10°C, -2°C, 0°C, 7°C', '−10°C, −2°C, 0°C, 7°C'], explanation: 'Negatiewes is kouer as 0, en onder hulle is −10°C kouer as −2°C. Volgorde: −10°C, −2°C, 0°C, 7°C ✓' },
        { difficulty: 'Medium', question: 'Thabo sê −20°C is kouer as −18°C omdat 20 ʼn groter getal is. Is Thabo korrek? Verduidelik.', answer: 'Ja — vir negatiewe temperature beteken ʼn groter getal na die minusteken verder onder 0. Aangesien 20 groter is as 18, is −20°C inderdaad kouer as −18°C.', checkMode: 'self', explanation: 'Thabo is korrek. −20°C is verder van 0 as −18°C, dus is dit kouer.' },
        { difficulty: 'Medium', question: 'Kimberley het −4°C een winternag aangeteken, terwyl Polokwane 2°C op dieselfde tyd aangeteken het. Watter dorp was warmer?', answer: 'Polokwane', checkMode: 'auto', correctAnswer: 'Polokwane', correctAnswers: ['Polokwane', 'polokwane'], explanation: '2°C is positief en −4°C is negatief, dus was Polokwane warmer ✓' },
        { difficulty: 'Medium', question: 'Skryf die korrekte simbool (< of >) om −7°C en −1°C te vergelyk.', answer: '-7°C < -1°C', checkMode: 'auto', correctAnswer: '-7 < -1', correctAnswers: ['-7 < -1', '−7 < −1', '-7°C < -1°C', '−7°C < −1°C', '<'], explanation: '−7 is verder van 0 as −1, dus is −7°C kleiner (kouer): −7°C < −1°C ✓' },

        // Blok 3 — Selfde-teken verskille (9-12, Medium)
        { difficulty: 'Medium', question: 'Bepaal die verskil tussen −5°C en −17°C.', answer: '12°C', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12°C', '12 °C'], explanation: 'Albei temperature is negatief, dus trek af: 17 − 5 = 12°C ✓' },
        { difficulty: 'Medium', question: 'ʼn Stad het ʼn maksimum van 28°C en ʼn minimum van 15°C op dieselfde dag aangeteken. Bepaal die temperatuurwydte vir die dag.', answer: '13°C', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13°C', '13 °C'], explanation: 'Albei temperature is positief, dus trek af: 28 − 15 = 13°C ✓' },
        { difficulty: 'Medium', question: 'Die temperatuur om 5 nm was 18°C. Teen 9 nm het dit met 7°C geval. Wat was die temperatuur om 9 nm?', answer: '11°C', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', '11°C', '11 °C'], explanation: 'ʼn Daling beteken aftrek: 18°C − 7°C = 11°C ✓' },
        { difficulty: 'Medium', question: 'ʼn Berghut was op −6°C. Dit het gedurende die nag verder gedaal na −25°C. Met hoeveel grade het die temperatuur gedaal?', answer: '19°C', checkMode: 'auto', correctAnswer: '19', correctAnswers: ['19', '19°C', '19 °C'], explanation: 'Albei temperature is negatief, dus trek af: 25 − 6 = 19°C ✓' },

        // Blok 4 — Oor-nul verskille (13-16, Medium-Moeilik)
        { difficulty: 'Medium-Hard', question: 'Bepaal die verskil tussen −12°C en 5°C.', answer: '17°C', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17°C', '17 °C'], explanation: 'Dit steek oor nul, dus tel die twee afstande bymekaar: afstand van −12°C na 0 is 12, en van 0 na 5°C is 5. 12 + 5 = 17°C ✓' },
        { difficulty: 'Medium-Hard', question: 'Met sonop was die temperatuur −7°C. Teen die middag het dit gestyg tot 11°C. Bepaal die temperatuurstyging.', answer: '18°C', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18°C', '18 °C'], explanation: 'Oor nul: afstand van −7°C na 0 is 7, en van 0 na 11°C is 11. 7 + 11 = 18°C ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Leerder bereken die verskil tussen −9°C en 3°C deur te skryf "9 − 3 = 6°C". Verduidelik die fout en gee die korrekte verskil.', answer: 'Die leerder het die twee getalle afgetrek asof albei aan dieselfde kant van nul is, maar −9°C en 3°C is aan teenoorgestelde kante van 0. Die korrekte metode tel die twee afstande na nul bymekaar: 9 (om by 0 te kom) + 3 (om by 3 te kom) = 12°C, nie 6°C nie.', checkMode: 'self', explanation: 'Aangesien die temperature oor nul steek, moet die afstande bymekaar getel word, nie afgetrek word nie: 9 + 3 = 12°C.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Vrieskas is op −16°C gestel. ʼn Kombuis is op 21°C. Bepaal die verskil tussen die vrieskas en die kombuis.', answer: '37°C', checkMode: 'auto', correctAnswer: '37', correctAnswers: ['37', '37°C', '37 °C'], explanation: 'Oor nul: afstand van −16°C na 0 is 16, en van 0 na 21°C is 21. 16 + 21 = 37°C ✓' },

        // Blok 5 — Multi-stap redenering en werklike-wêreld toepassings (17-19, Moeilik)
        { difficulty: 'Hard', question: 'Drie dorpe het oornagtemperature aangeteken: Dorp X: 8°C, Dorp Y: −14°C, Dorp Z: −3°C.\n\na) Watter dorp was die warmste?\nb) Bepaal die temperatuurverskil tussen die warmste en koudste dorpe.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Warmste dorp', correctAnswer: 'Dorp X', correctAnswers: ['Dorp X', 'X', 'Town X'], explanation: 'Dorp X by 8°C is die enigste positiewe temperatuur, dus is dit die warmste ✓' }, { label: 'b) Verskil tussen warmste en koudste', correctAnswer: '22', correctAnswers: ['22', '22°C'], explanation: 'Warmste is Dorp X (8°C), koudste is Dorp Y (−14°C). Dit steek oor nul: 8 + 14 = 22°C ✓' } ] },
        { difficulty: 'Hard', question: 'ʼn Koelkamer begin by 9°C en daal elke uur met 3°C, vir 4 uur.\n\na) Bepaal die temperatuur na 4 uur.\nb) Bepaal die verskil tussen die begintemperatuur en die temperatuur na 4 uur.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Temperatuur na 4 uur', correctAnswer: '-3', correctAnswers: ['-3', '−3', '-3°C', '−3°C'], explanation: 'Totale daling: 3 × 4 = 12°C. Begin by 9°C: 9 − 12 = −3°C ✓' }, { label: 'b) Verskil tussen begin en na 4 uur', correctAnswer: '12', correctAnswers: ['12', '12°C'], explanation: 'Die temperatuur het van 9°C na −3°C gedaal, ʼn verskil van 12°C, wat ooreenstem met die totale daling wat bereken is ✓' } ] },
        { difficulty: 'Hard', question: 'Naledi sê: "Die temperatuur het van −6°C na 10°C gestyg, dus het dit met 4 grade gestyg, want 10 − 6 = 4." Is Naledi korrek? Verduidelik en gee die korrekte styging.', answer: 'Nee, Naledi is verkeerd. Aangesien −6°C en 10°C aan teenoorgestelde kante van nul is, moet die afstande bymekaar getel word, nie afgetrek word nie. Die temperatuur het van −6°C na 0 gestyg (6 grade) en toe van 0 na 10°C (10 grade), dus is die totale styging 6 + 10 = 16 grade, nie 4 nie.', checkMode: 'self', explanation: 'Oor nul steek vereis dat die twee afstande bymekaar getel word: 6 + 10 = 16°C, wat die korrekte styging is.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het termometers lees, temperature vergelyk en temperatuurverskille bereken bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van die meeste van hierdie werk — hersien enige gemiste vrae.' },
        { minScore: 10, message: 'Goeie poging! Hersien die oor-nul-strategie, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Termometers lees & positief/negatief (0-3, Maklik)
        { difficulty: 'Easy', question: 'ʼn Termometer wys die kwiksilwervlak soos afgebeeld. Elke gemerkte punt is 10°C uitmekaar, met ʼn ekstra ongemerkte merkie halfpad tussen elke paar punte. Wat is die temperatuur?', answer: '20°C', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20°C', '20 °C'], explanation: 'Die kwiksilwer lyn op presies met die gemerkte 20°C punt ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="70" width="18" height="108" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-20</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#dc2626" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">0</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Termometer wys die kwiksilwervlak soos afgebeeld. Elke gemerkte punt is 10°C uitmekaar, met ʼn ekstra ongemerkte merkie halfpad tussen elke paar punte. Wat is die temperatuur?', answer: '-5°C', checkMode: 'auto', correctAnswer: '-5', correctAnswers: ['-5', '−5', '-5°C', '−5°C'], explanation: 'Die kwiksilwer lyn op met die ongemerkte merkie halfpad tussen die 0°C en -10°C punte, wat -5°C is ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="132.5" width="18" height="45.5" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-20</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">-10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#dc2626" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">0</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Vloeistof vries by −20°C. Is hierdie temperatuur bo of onder die vriespunt van water (0°C)?', answer: 'onder', checkMode: 'auto', correctAnswer: 'onder', correctAnswers: ['onder'], explanation: '−20°C is ʼn negatiewe temperatuur, dus is dit onder 0°C, die vriespunt van water ✓' },
        { difficulty: 'Easy', question: 'ʼn Somernamiddag in Durban bereik 31°C. Is hierdie temperatuur positief of negatief?', answer: 'positief', checkMode: 'auto', correctAnswer: 'positief', correctAnswers: ['positief'], explanation: '31°C is bo 0°C, dus is dit ʼn positiewe temperatuur ✓' },

        // Blok 2 — Vergelyk en rangskik (4-8, Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'Watter een is warmer: −11°C of −4°C?', answer: '-4°C', checkMode: 'auto', correctAnswer: '-4', correctAnswers: ['-4', '−4', '-4°C', '−4°C'], explanation: '4 is kleiner as 11, dus is −4°C nader aan 0 en dus warmer ✓' },
        { difficulty: 'Easy-Medium', question: 'Rangskik hierdie temperature van warmste na koudste: −5°C, 3°C, −14°C, 1°C.', answer: '3°C, 1°C, -5°C, -14°C', checkMode: 'auto', correctAnswer: '3, 1, -5, -14', correctAnswers: ['3, 1, -5, -14', '3, 1, −5, −14', '3°C, 1°C, -5°C, -14°C', '3°C, 1°C, −5°C, −14°C'], explanation: 'Positiewes kom eerste, grootste na kleinste, dan negatiewes van nader aan 0 na verder weg: 3°C, 1°C, −5°C, −14°C ✓' },
        { difficulty: 'Medium', question: 'Zinhle sê −2°C is kouer as −17°C omdat 2 ʼn kleiner getal is. Is Zinhle korrek? Verduidelik.', answer: 'Nee — ʼn kleiner getal na die minusteken beteken die temperatuur is nader aan 0 en dus warmer, nie kouer nie. −2°C is eintlik warmer as −17°C.', checkMode: 'self', explanation: 'Zinhle het die reël vir negatiewe getalle verwar. −2°C is nader aan 0 as −17°C, dus is −2°C warmer. Zinhle is verkeerd.' },
        { difficulty: 'Medium', question: 'ʼn Weer-app wys Nelspruit op −1°C en Upington op −8°C op dieselfde tyd. Watter dorp was kouer?', answer: 'Upington', checkMode: 'auto', correctAnswer: 'Upington', correctAnswers: ['Upington', 'upington'], explanation: '−8°C is verder onder 0 as −1°C, dus was Upington kouer ✓' },
        { difficulty: 'Medium', question: 'Skryf die korrekte simbool (< of >) om −20°C en −6°C te vergelyk.', answer: '-20°C < -6°C', checkMode: 'auto', correctAnswer: '-20 < -6', correctAnswers: ['-20 < -6', '−20 < −6', '-20°C < -6°C', '−20°C < −6°C', '<'], explanation: '−20 is verder van 0 as −6, dus is −20°C kleiner (kouer): −20°C < −6°C ✓' },

        // Blok 3 — Selfde-teken verskille (9-12, Medium)
        { difficulty: 'Medium', question: 'Bepaal die verskil tussen −10°C en −25°C.', answer: '15°C', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15°C', '15 °C'], explanation: 'Albei temperature is negatief, dus trek af: 25 − 10 = 15°C ✓' },
        { difficulty: 'Medium', question: 'ʼn Woestyndorp het ʼn maksimum van 38°C en ʼn minimum van 24°C op dieselfde dag aangeteken. Bepaal die temperatuurwydte vir die dag.', answer: '14°C', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', '14°C', '14 °C'], explanation: 'Albei temperature is positief, dus trek af: 38 − 24 = 14°C ✓' },
        { difficulty: 'Medium', question: 'Die temperatuur die middagete was 25°C. Teen laatmiddag het dit met 8°C geval. Wat was die temperatuur laatmiddag?', answer: '17°C', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17°C', '17 °C'], explanation: 'ʼn Daling beteken aftrek: 25°C − 8°C = 17°C ✓' },
        { difficulty: 'Medium', question: 'ʼn Ski-oord was op −14°C. ʼn Koue front het dit verder afgestoot na −30°C. Met hoeveel grade het die temperatuur gedaal?', answer: '16°C', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16°C', '16 °C'], explanation: 'Albei temperature is negatief, dus trek af: 30 − 14 = 16°C ✓' },

        // Blok 4 — Oor-nul verskille (13-16, Medium-Moeilik)
        { difficulty: 'Medium-Hard', question: 'Bepaal die verskil tussen −9°C en 16°C.', answer: '25°C', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25°C', '25 °C'], explanation: 'Dit steek oor nul, dus tel die twee afstande bymekaar: afstand van −9°C na 0 is 9, en van 0 na 16°C is 16. 9 + 16 = 25°C ✓' },
        { difficulty: 'Medium-Hard', question: 'Met sonop was die temperatuur −13°C. Teen die middag het dit gestyg tot 9°C. Bepaal die temperatuurstyging.', answer: '22°C', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', '22°C', '22 °C'], explanation: 'Oor nul: afstand van −13°C na 0 is 13, en van 0 na 9°C is 9. 13 + 9 = 22°C ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Leerder bereken die verskil tussen −18°C en 6°C deur te skryf "18 − 6 = 12°C". Verduidelik die fout en gee die korrekte verskil.', answer: 'Die leerder het die twee getalle afgetrek asof albei aan dieselfde kant van nul is, maar −18°C en 6°C is aan teenoorgestelde kante van 0. Die korrekte metode tel die twee afstande na nul bymekaar: 18 (om by 0 te kom) + 6 (om by 6 te kom) = 24°C, nie 12°C nie.', checkMode: 'self', explanation: 'Aangesien die temperature oor nul steek, moet die afstande bymekaar getel word, nie afgetrek word nie: 18 + 6 = 24°C.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Loop-in-vrieskas is op −25°C. Die bakkery-kombuis langsaan is op 10°C. Bepaal die verskil tussen die vrieskas en die kombuis.', answer: '35°C', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35°C', '35 °C'], explanation: 'Oor nul: afstand van −25°C na 0 is 25, en van 0 na 10°C is 10. 25 + 10 = 35°C ✓' },

        // Blok 5 — Multi-stap redenering en werklike-wêreld toepassings (17-19, Moeilik)
        { difficulty: 'Hard', question: 'Drie dorpe het oornagtemperature aangeteken: Dorp P: −13°C, Dorp Q: 7°C, Dorp R: −6°C.\n\na) Watter dorp was die koudste?\nb) Bepaal die temperatuurverskil tussen die koudste en warmste dorpe.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Koudste dorp', correctAnswer: 'Dorp P', correctAnswers: ['Dorp P', 'P', 'Town P'], explanation: 'Dorp P by −13°C is die verste onder 0, dus is dit die koudste ✓' }, { label: 'b) Verskil tussen koudste en warmste', correctAnswer: '20', correctAnswers: ['20', '20°C'], explanation: 'Koudste is Dorp P (−13°C), warmste is Dorp Q (7°C). Dit steek oor nul: 13 + 7 = 20°C ✓' } ] },
        { difficulty: 'Hard', question: 'ʼn Koelkamer begin by 6°C en daal elke uur met 5°C, vir 3 uur.\n\na) Bepaal die temperatuur na 3 uur.\nb) Bepaal die verskil tussen die begintemperatuur en die temperatuur na 3 uur.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Temperatuur na 3 uur', correctAnswer: '-9', correctAnswers: ['-9', '−9', '-9°C', '−9°C'], explanation: 'Totale daling: 5 × 3 = 15°C. Begin by 6°C: 6 − 15 = −9°C ✓' }, { label: 'b) Verskil tussen begin en na 3 uur', correctAnswer: '15', correctAnswers: ['15', '15°C'], explanation: 'Die temperatuur het van 6°C na −9°C gedaal, ʼn verskil van 15°C, wat ooreenstem met die totale daling wat bereken is ✓' } ] },
        { difficulty: 'Hard', question: 'Bongani sê: "Die temperatuur het van 2°C na −9°C gedaal, dus het dit met 7 grade gedaal, want 9 − 2 = 7." Is Bongani korrek? Verduidelik en gee die korrekte daling.', answer: 'Nee, Bongani is verkeerd. Aangesien 2°C en −9°C aan teenoorgestelde kante van nul is, moet die afstande bymekaar getel word, nie afgetrek word nie. Die temperatuur het van 2°C na 0 gedaal (2 grade) en toe van 0 na −9°C (9 grade), dus is die totale daling 2 + 9 = 11 grade, nie 7 nie.', checkMode: 'self', explanation: 'Oor nul steek vereis dat die twee afstande bymekaar getel word: 2 + 9 = 11°C, wat die korrekte daling is.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het termometers lees, temperature vergelyk en temperatuurverskille bereken bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van die meeste van hierdie werk — hersien enige gemiste vrae.' },
        { minScore: 10, message: 'Goeie poging! Hersien die oor-nul-strategie, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
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
