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
  title: 'Temperatuur',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — TERMOMETERS LEES EN ALGEMENE TEMPERATUURVERWYSINGSPUNTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-thermometers-referents',
      title: 'Termometers Lees en Algemene Temperatuurverwysingspunte',
      icon: '🌡️',
      explanation:
        `<p style="margin-bottom:16px;">Temperatuur vertel ons <strong>hoe warm of koud iets is</strong>. Ons meet temperatuur met ʼn ${re('termometer')}, in eenhede genoem ${re('grade Celsius (°C)')}. ʼn Termometerskaal werk soos ʼn getallelyn: soos die vloeistof binne-in styg, word die temperatuur ${or('hoër (warmer)')}, en soos dit daal, word die temperatuur ${bl('laer (kouer)')}.</p>` +

        // ── Kleursleutel ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('verwysingspunt')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('warmer')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kouer')}</span>` +
        `</div>` +

        // ── Algemene temperatuurverwysingspunte ─────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Algemene temperatuurverwysingspunte</p>` +
        `<p style="margin-bottom:12px;">Om ʼn paar bekende verwysingstemperature te leer, help jou om ʼn aanvoeling te ontwikkel vir hoe warm of koud ʼn temperatuur in °C werklik voel.</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">0°C — Water Vries</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die vriespunt van suiwer water — ys begin vorm.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">100°C — Water Kook</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die kookpunt van suiwer water — dit verander in stoom.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Ongeveer 37°C — Menslike Liggaam</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die gemiddelde normale binnetemperatuur van ʼn gesonde menslike liggaam.</p>` +
        `</div>` +

        `</div>` +

        // ── Wenkboks ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om ʼn termometerskaal te lees</p>` +
        `<p style="margin:0;color:#1e3a8a;">Tel die graderingsmerke versigtig — op baie termometers is nie elke merk genommer nie. Sommige merke kan 1°C verteenwoordig, ander 2°C of 5°C. Vind twee gemerkte punte, werk uit wat elke ongemerkte merk tussenin werd is, en lees dan die vlak van die vloeistof af.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Termometer wys die vloeistofvlak op 3 gemerkte punte bo 0°C, waar elke gemerkte punt 10°C verteenwoordig. Wat is die temperatuur?',
          answer: `${or('30°C')}`,
          steps: [
            `Elke merk verteenwoordig ${or('10°C')}, en die vloeistof is op die ${or('3de merk bo 0')}.`,
            `Vermenigvuldig: ${or('3 × 10 = 30')}.`,
            `<strong>Antwoord:</strong> Die temperatuur is ${or('30°C')}. ✓`,
          ],
        },
        {
          question: 'ʼn Digitale termometer wat in die skooltuin gebruik word, wys ʼn lesing van 22°C op ʼn warm middag. Is dit nader aan die vriespunt of die kookpunt van water?',
          answer: `Nader aan die ${bl('vriespunt')}`,
          steps: [
            `Die vriespunt van water is ${bl('0°C')}, en die kookpunt is ${or('100°C')}.`,
            `22°C is slegs 22 grade bo 0°C, maar dit is 78 grade onder 100°C.`,
            `<strong>Antwoord:</strong> 22°C is baie nader aan die ${bl('vriespunt (0°C)')} as aan die kookpunt. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Wat is die vriespunt van suiwer water, in grade Celsius?',
          answer: '0°C',
          checkMode: 'auto',
          correctAnswer: '0',
          correctAnswers: ['0', '0°C', '0 °C'],
          explanation: 'Suiwer water vries by 0°C ✓',
        },
        {
          difficulty: 'Easy',
          question: 'Wat is die gemiddelde normale temperatuur van ʼn gesonde menslike liggaam, in grade Celsius?',
          answer: '37°C',
          checkMode: 'auto',
          correctAnswer: '37',
          correctAnswers: ['37', '37°C', '37 °C'],
          explanation: 'Die gemiddelde normale menslike liggaamstemperatuur is ongeveer 37°C ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Termometer wys die vloeistofvlak op 4 gemerkte punte bo 0°C, met elke merk 5°C werd. Wat is die temperatuur?',
          answer: '20°C',
          checkMode: 'auto',
          correctAnswer: '20',
          correctAnswers: ['20', '20°C', '20 °C'],
          explanation: '4 × 5 = 20°C ✓',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Pot water word op ʼn stoof verhit. Beantwoord die volgende oor hierdie alledaagse situasie.\n\na) By watter temperatuur, in °C, sal die water begin kook?\nb) ʼn Verpleegster lees ʼn pasiënt se temperatuur as 39°C. Is dit hoër of laer as die normale menslike liggaamstemperatuur van 37°C?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Kookpunt van water (°C)',
              correctAnswer: '100',
              correctAnswers: ['100', '100°C'],
              explanation: 'Water kook by 100°C ✓',
            },
            {
              label: 'b) Hoër of laer as normale liggaamstemperatuur',
              correctAnswer: 'hoër',
              correctAnswers: ['hoër', 'Hoër', 'hoer', 'Hoer'],
              explanation: '39°C is 2 grade bo die normale 37°C, dus is dit hoër ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat ʼn termometerskaal wys met nul grade gemerk in rooi as die vriespunt van water, honderd grade gemerk as die kookpunt, en sewe-en-dertig grade gemerk as normale menslike liggaamstemperatuur',

      diagramPlaceholder:
        'Diagram van ʼn vertikale termometerskaal van 0 tot 100 grade Celsius, met die vriespunt, kookpunt en gemiddelde menslike liggaamstemperatuur gemerk en die vloeistofvlak by ʼn voorbeeldlesing gewys',

      diagramSvg:
        '<svg viewBox="0 0 230 215" xmlns="http://www.w3.org/2000/svg"><text x="115" y="14" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Termometerskaal (0-100&#176;C)</text><rect x="98" y="28" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="194" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="194" r="13" fill="#ea580c"/><rect x="101" y="80.5" width="18" height="97.5" rx="4" fill="#ea580c"/><line x1="98" y1="178" x2="90" y2="178" stroke="#2563eb" stroke-width="2"/><text x="86" y="182" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="98" y1="148" x2="90" y2="148" stroke="#2563eb" stroke-width="2"/><text x="86" y="152" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="118" x2="90" y2="118" stroke="#2563eb" stroke-width="2"/><text x="86" y="122" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="88" x2="90" y2="88" stroke="#2563eb" stroke-width="2"/><text x="86" y="92" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">60</text><line x1="98" y1="58" x2="90" y2="58" stroke="#2563eb" stroke-width="2"/><text x="86" y="62" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">80</text><line x1="98" y1="28" x2="90" y2="28" stroke="#2563eb" stroke-width="2"/><text x="86" y="32" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">100</text><line x1="98" y1="163" x2="94" y2="163" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="133" x2="94" y2="133" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="103" x2="94" y2="103" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="73" x2="94" y2="73" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="43" x2="94" y2="43" stroke="#9ca3af" stroke-width="1"/><line x1="122" y1="28" x2="128" y2="28" stroke="#ea580c" stroke-width="2"/><text x="132" y="32" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="start">100&#176;C - Kookpunt</text><line x1="122" y1="80.5" x2="128" y2="80.5" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="2,2"/><text x="132" y="84.5" font-size="9.5" fill="#0f1f3d" font-weight="700" text-anchor="start">65&#176;C lesing</text><line x1="122" y1="122.5" x2="128" y2="122.5" stroke="#16a34a" stroke-width="2"/><text x="132" y="126.5" font-size="9.5" fill="#16a34a" font-weight="700" text-anchor="start">37&#176;C - Liggaam</text><line x1="122" y1="178" x2="128" y2="178" stroke="#dc2626" stroke-width="2"/><text x="132" y="182" font-size="9.5" fill="#dc2626" font-weight="700" text-anchor="start">0&#176;C - Vriespunt</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — TEMPERATUURMETINGS AANTEKEN
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'recording-temperature-measurements',
      title: 'Temperatuurmetings Aanteken',
      icon: '📋',
      explanation:
        `<p style="margin-bottom:16px;">Nadat ons ʼn termometer gelees het, moet ons die meting korrek ${gr('aanteken')}. Temperatuurlesings word altyd aangeteken in ${re('heelgetal grade Celsius')}, geskryf met die ${or('°C')}-simbool. As die vloeistofvlak nie presies met ʼn heelgraad-merk ooreenstem nie, rond ons af na die naaste heelgraad.</p>` +

        // ── Kleursleutel ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('aangetekende lesing')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eenheidsimbool')}</span>` +
        `</div>` +

        // ── Stappe om aan te teken ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn temperatuurlesing aan te teken</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Kyk waar die boonste vlak van die vloeistof met die skaal ooreenstem.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">As dit presies met ʼn merk ooreenstem, is dit jou lesing. As dit tussen twee merke val, rond af na die ${gr('naaste heelgraad')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Skryf die lesing met die ${or('°C')}-simbool, bv. ${gr('24°C')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Wenkboks ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sluit altyd die eenheid in</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Lesing sonder ʼn eenheid is onvolledig. Om net "24" te skryf, sê vir niemand dat dit ʼn temperatuur is nie — skryf altyd "${or('24°C')}" sodat die aantekening duidelik is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Termometer se vloeistofvlak stem presies ooreen met die 18°C-merk. Hoe moet hierdie lesing aangeteken word?',
          answer: `${gr('18°C')}`,
          steps: [
            `Die vloeistof stem presies met ʼn gemerkte punt ooreen, dus is geen afronding nodig nie.`,
            `<strong>Antwoord:</strong> Teken die lesing aan as ${gr('18°C')}. ✓`,
          ],
        },
        {
          question: 'ʼn Klaskamer-weerkaart teken die buitetemperatuur om 8:00 aan as 15°C en om 14:00 as 26°C. Watter lesing wys die warmer temperatuur, en watter eenheid word gebruik?',
          answer: `${or('26°C om 14:00')}; die eenheid is grade Celsius (°C)`,
          steps: [
            `Vergelyk die twee lesings: 15°C en 26°C.`,
            `26 is groter as 15, dus is die ${or('14:00-lesing van 26°C')} warmer.`,
            `Albei lesings gebruik die eenheid ${or('grade Celsius (°C)')}.`,
            `<strong>Antwoord:</strong> Die 14:00-lesing van ${or('26°C')} is warmer. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Watter eenheid en simbool moet altyd langs ʼn temperatuurlesing geskryf word?',
          answer: 'grade Celsius, °C',
          checkMode: 'auto',
          correctAnswer: '°C',
          correctAnswers: ['°C', 'grade Celsius', 'C', 'celsius'],
          explanation: 'Temperatuur word aangeteken in grade Celsius, met die simbool °C ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Termometer se vloeistofvlak stem presies ooreen met die 33°C-merk. Teken hierdie lesing korrek aan, met die eenheid.',
          answer: '33°C',
          checkMode: 'auto',
          correctAnswer: '33',
          correctAnswers: ['33', '33°C', '33 °C'],
          explanation: 'Die vloeistof stem presies met 33°C ooreen, dus word die lesing aangeteken as 33°C ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Themba teken ʼn yskaste-temperatuur aan as "5" sonder ʼn eenheid. Verduidelik waarom dit ʼn onvolledige aantekening is.',
          answer: 'ʼn Getal op sy eie sê nie vir ons wat gemeet is nie. Sonder die °C-simbool kan "5" enigiets beteken. Dit moet as 5°C aangeteken word sodat enigiemand wat dit lees, weet dit is ʼn temperatuur gemeet in grade Celsius.',
          checkMode: 'self',
          explanation: 'ʼn Volledige aantekening sluit altyd die eenheidsimbool, °C, in sodat die meting duidelik is vir enigiemand wat dit lees.',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Weerstasie teken die temperatuur elke 2 uur gedurende ʼn skooldag aan: 09:00 — 17°C, 11:00 — 21°C, 13:00 — 25°C.\n\na) Wat was die temperatuur om 11:00 aangeteken?\nb) Op watter tyd was die temperatuur die warmste?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Temperatuur om 11:00',
              correctAnswer: '21',
              correctAnswers: ['21', '21°C'],
              explanation: 'Die tabel wys 21°C aangeteken om 11:00 ✓',
            },
            {
              label: 'b) Warmste tyd',
              correctAnswer: '13:00',
              correctAnswers: ['13:00', '1nm', '1 nm'],
              explanation: '25°C om 13:00 is die hoogste van die drie lesings ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat demonstreer hoe om die vloeistofvlak op ʼn termometerskaal te lees en die temperatuur korrek aan te teken met die grade Celsius-simbool',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — TEMPERATURE VERGELYK EN ORDEN
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering-temperatures',
      title: 'Temperature Vergelyk en Orden',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Net soos heelgetalle, kan temperature in °C ${gr('vergelyk')} en ${gr('georden')} word. ʼn ${or('Hoër getal')} grade Celsius beteken ʼn ${or('warmer')} temperatuur, en ʼn ${bl('laer getal')} beteken ʼn ${bl('kouer')} temperatuur. In Graad 5 is al die temperature waarmee ons werk ${re('positiewe heelgetalle')} — bo 0°C.</p>` +

        // ── Kleursleutel ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('warmer / groter')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kouer / kleiner')}</span>` +
        `</div>` +

        // ── Wenkboks ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Temperature vergelyk</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om twee temperature te vergelyk, vergelyk eenvoudig die getalle — net soos om heelgetalle te vergelyk. ${or('27°C')} is warmer as ${bl('19°C')} omdat 27 groter is as 19. Om ʼn lys temperature te orden, rangskik die getalle van kleinste na grootste (koudste na warmste) of grootste na kleinste (warmste na koudste).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Watter is warmer: 24°C of 31°C?',
          answer: `${or('31°C')} is warmer`,
          steps: [
            `Vergelyk die twee getalle: ${bl('24')} en ${or('31')}.`,
            `Aangesien ${or('31')} groter is as ${bl('24')}, is ${or('31°C')} die warmer temperatuur.`,
            `<strong>Antwoord:</strong> ${or('31°C')} is warmer as 24°C. ✓`,
          ],
        },
        {
          question: 'Orden hierdie temperature van koudste na warmste: 18°C, 27°C, 9°C, 22°C.',
          answer: `${bl('9°C, 18°C, 22°C, 27°C')}`,
          steps: [
            `Vergelyk al vier getalle: 18, 27, 9, 22.`,
            `Rangskik van kleinste na grootste: ${bl('9, 18, 22, 27')}.`,
            `<strong>Antwoord:</strong> ${bl('9°C, 18°C, 22°C, 27°C')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Watter is warmer: 16°C of 12°C?',
          answer: '16°C',
          checkMode: 'auto',
          correctAnswer: '16',
          correctAnswers: ['16', '16°C', '16 °C'],
          explanation: '16 is groter as 12, dus is 16°C warmer ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Orden hierdie temperature van koudste na warmste: 14°C, 29°C, 6°C, 20°C.',
          answer: '6°C, 14°C, 20°C, 29°C',
          checkMode: 'auto',
          correctAnswer: '6, 14, 20, 29',
          correctAnswers: ['6, 14, 20, 29', '6°C, 14°C, 20°C, 29°C'],
          explanation: 'Van kleinste na grootste: 6°C, 14°C, 20°C, 29°C ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Vyf dorpe teken hierdie middagtemperature aan: Dorp A: 19°C, Dorp B: 24°C, Dorp C: 11°C, Dorp D: 30°C, Dorp E: 16°C.\n\na) Watter dorp was die koudste?\nb) Watter dorp was die warmste?\nc) Orden al vyf temperature van koudste na warmste.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Koudste dorp',
              correctAnswer: 'Dorp C',
              correctAnswers: ['Dorp C', 'C'],
              explanation: 'Dorp C by 11°C het die kleinste getal, dus is dit die koudste ✓',
            },
            {
              label: 'b) Warmste dorp',
              correctAnswer: 'Dorp D',
              correctAnswers: ['Dorp D', 'D'],
              explanation: 'Dorp D by 30°C het die grootste getal, dus is dit die warmste ✓',
            },
            {
              label: 'c) Orden van koudste na warmste',
              correctAnswer: '11, 16, 19, 24, 30',
              correctAnswers: ['11, 16, 19, 24, 30', 'C, E, A, B, D', 'Dorp C, Dorp E, Dorp A, Dorp B, Dorp D'],
              explanation: '11°C (C), 16°C (E), 19°C (A), 24°C (B), 30°C (D) ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat pare positiewe temperature vergelyk en wys hoe om ʼn lys temperature van koudste na warmste te orden deur die heelgetalle te vergelyk',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — TEMPERATUURVERSKILLE BEREKEN
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-temperature-differences',
      title: 'Temperatuurverskille Bereken',
      icon: '➖',
      explanation:
        `<p style="margin-bottom:16px;">Die ${gr('verskil')} tussen twee temperature vertel ons hoeveel grade warmer of kouer een lesing as ʼn ander is. In Graad 5 gebruik alle temperatuurberekeninge ${re('positiewe heelgetalle')}. Om die verskil te vind, ${gr('trek eenvoudig die kleiner temperatuur van die groter temperatuur af')} — net soos jy enige twee heelgetalle aftrek.</p>` +

        // ── Kleursleutel ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('groter temperatuur')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kleiner temperatuur')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('verskil')}</span>` +
        `</div>` +

        // ── Wenkboks ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">ʼn Temperatuurverskil vind</p>` +
        `<p style="margin:0;color:#1e3a8a;">Trek die ${bl('kleiner')} temperatuur van die ${or('groter')} een af. Byvoorbeeld, as die temperatuur styg van ${bl('14°C')} na ${or('23°C')}, is die toename ${or('23')} − ${bl('14')} = ${gr('9°C')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Die temperatuur met sonop was 12°C, en teen middag het dit gestyg tot 25°C. Vind die temperatuurverskil.',
          answer: `Verskil = ${gr('13°C')}`,
          steps: [
            `Trek die kleiner temperatuur van die groter temperatuur af.`,
            `${or('25')} − ${bl('12')} = ${gr('13')}.`,
            `<strong>Antwoord:</strong> Die temperatuur het met ${gr('13°C')} gestyg. ✓`,
          ],
        },
        {
          question: 'ʼn Dorp teken ʼn maksimum temperatuur van 28°C en ʼn minimum temperatuur van 17°C op dieselfde dag aan. Vind die temperatuurwydte vir die dag.',
          answer: `Wydte = ${gr('11°C')}`,
          steps: [
            `Die wydte is die verskil tussen die maksimum en minimum.`,
            `${or('28')} − ${bl('17')} = ${gr('11')}.`,
            `<strong>Antwoord:</strong> Die temperatuurwydte is ${gr('11°C')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Die temperatuur was 15°C in die oggend en het gestyg tot 23°C teen die middag. Vind die temperatuurverskil.',
          answer: '8°C',
          checkMode: 'auto',
          correctAnswer: '8',
          correctAnswers: ['8', '8°C', '8 °C'],
          explanation: '23 − 15 = 8°C ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Bergdorp teken ʼn maksimum temperatuur van 19°C en ʼn minimum van 6°C op dieselfde dag aan.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vind die temperatuurwydte vir die dag.',
              correctAnswer: '13',
              correctAnswers: ['13', '13°C'],
              explanation: '19 − 6 = 13°C ✓',
            },
            {
              label: 'b) As die temperatuur dan nog ʼn 4°C van die minimum af daal, wat is die nuwe temperatuur?',
              correctAnswer: '2',
              correctAnswers: ['2', '2°C'],
              explanation: '6°C − 4°C = 2°C ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Klaskamer-yskas vir wetenskap-eksperimente word by 4°C gehou. Die klaskamer self is by 21°C, en buite op ʼn warm dag is dit 33°C.\n\na) Vind die temperatuurverskil tussen die yskas en die klaskamer.\nb) Vind die temperatuurverskil tussen die klaskamer en buite.\nc) Vind die temperatuurverskil tussen die yskas en buite.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Yskas na klaskamer-verskil',
              correctAnswer: '17',
              correctAnswers: ['17', '17°C'],
              explanation: '21 − 4 = 17°C ✓',
            },
            {
              label: 'b) Klaskamer na buite-verskil',
              correctAnswer: '12',
              correctAnswers: ['12', '12°C'],
              explanation: '33 − 21 = 12°C ✓',
            },
            {
              label: 'c) Yskas na buite-verskil',
              correctAnswer: '29',
              correctAnswers: ['29', '29°C'],
              explanation: '33 − 4 = 29°C ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat demonstreer hoe om die verskil tussen twee positiewe temperature te vind deur die kleiner van die groter af te trek, insluitend ʼn temperatuurwydte-voorbeeld',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Termometers & verwysingspunte lees (Maklik) | 4-8 Metings
    // aanteken (Maklik-Matig) | 9-12 Vergelyk/orden (Matig) | 13-16
    // Verskille bereken (Matig-Moeilik) | 17-19 Multi-stap (Moeilik)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Termometers & verwysingspunte lees (0-3, Maklik)
        { difficulty: 'Easy', question: 'ʼn Termometer wys die vloeistofvlak soos afgebeeld. Elke gemerkte punt is 10°C uitmekaar, met ʼn ekstra ongemerkte merk halfpad tussen elke paar punte. Wat is die temperatuur?', answer: '30°C', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30°C', '30 °C'], explanation: 'Die vloeistof stem presies met die gemerkte 30°C-punt ooreen ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="95" width="18" height="83" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#2563eb" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">50</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Termometer wys die vloeistofvlak soos afgebeeld. Elke gemerkte punt is 10°C uitmekaar, met ʼn ekstra ongemerkte merk halfpad tussen elke paar punte. Wat is die temperatuur?', answer: '15°C', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15°C', '15 °C'], explanation: 'Die vloeistof stem ooreen met die ongemerkte merk halfpad tussen die 10°C- en 20°C-punte, wat 15°C is ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="132.5" width="18" height="45.5" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#2563eb" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">50</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'Wat is die vriespunt van suiwer water, in grade Celsius?', answer: '0°C', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', '0°C'], explanation: 'Suiwer water vries by 0°C ✓' },
        { difficulty: 'Easy', question: 'Wat is die kookpunt van suiwer water, in grade Celsius?', answer: '100°C', checkMode: 'auto', correctAnswer: '100', correctAnswers: ['100', '100°C'], explanation: 'Suiwer water kook by 100°C ✓' },

        // Blok 2 — Metings aanteken (4-8, Maklik-Matig)
        { difficulty: 'Easy-Medium', question: 'ʼn Termometer se vloeistofvlak stem presies met die 27°C-merk ooreen. Hoe moet hierdie lesing aangeteken word, met die eenheid?', answer: '27°C', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27°C', '27 °C'], explanation: 'Die vloeistof stem presies met 27°C ooreen, dus word die lesing aangeteken as 27°C ✓' },
        { difficulty: 'Easy-Medium', question: 'Waarom moet ʼn temperatuurlesing altyd die °C-simbool insluit wanneer dit aangeteken word?', answer: 'Omdat ʼn getal alleen nie sê wat gemeet is nie — die °C-simbool wys dat die lesing ʼn temperatuur in grade Celsius is, sodat die aantekening duidelik is vir enigiemand wat dit lees.', checkMode: 'self', explanation: 'Om net ʼn getal aan te teken sonder die eenheid laat noodsaaklike inligting uit; die eenheid gee betekenis aan die meting.' },
        { difficulty: 'Medium', question: 'ʼn Klaskamer-weerkaart wys: Maandag 16°C, Dinsdag 21°C, Woensdag 18°C. Watter dag was die koelste?', answer: 'Maandag', checkMode: 'auto', correctAnswer: 'Maandag', correctAnswers: ['Maandag', 'maandag'], explanation: '16°C is die kleinste van die drie lesings, dus was Maandag die koelste ✓' },
        { difficulty: 'Medium', question: 'ʼn Verpleegster lees ʼn pasiënt se temperatuur, maar die termometerskerm is gesmeer en wys net "8". Die pasiënt voel warm, nie yskoud nie. Watter ekstra inligting het die verpleegster nodig om ʼn volledige, sinvolle lesing aan te teken?', answer: 'Die verpleegster het die eenheid en die volledige lesing nodig — ʼn temperatuur van net "8" is betekenisloos sonder om te weet dit is in °C en sonder die korrekte volledige getal. Menslike liggaamstemperatuur is normaalweg ongeveer 37°C, so ʼn lesing van 8°C sou veels te laag wees. Sy moet die termometer weer noukeurig nagaan om die korrekte volledige lesing te kry, soos 38°C, en dit aanteken met die °C-simbool.', checkMode: 'self', explanation: 'Om te kyk of ʼn lesing sin maak vir die werklike konteks is ʼn belangrike aantekenvaardigheid.' },
        { difficulty: 'Medium', question: 'ʼn Termometer se vloeistofvlak stem presies met die 41°C-merk ooreen. Teken hierdie lesing korrek aan, met die eenheid.', answer: '41°C', checkMode: 'auto', correctAnswer: '41', correctAnswers: ['41', '41°C', '41 °C'], explanation: 'Die vloeistof stem presies met 41°C ooreen, dus word die lesing aangeteken as 41°C ✓' },

        // Blok 3 — Vergelyk en orden (9-12, Matig)
        { difficulty: 'Medium', question: 'Watter is warmer: 22°C of 18°C?', answer: '22°C', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', '22°C', '22 °C'], explanation: '22 is groter as 18, dus is 22°C warmer ✓' },
        { difficulty: 'Medium', question: 'Orden hierdie temperature van koudste na warmste: 24°C, 9°C, 17°C, 31°C.', answer: '9°C, 17°C, 24°C, 31°C', checkMode: 'auto', correctAnswer: '9, 17, 24, 31', correctAnswers: ['9, 17, 24, 31', '9°C, 17°C, 24°C, 31°C'], explanation: 'Van kleinste na grootste: 9°C, 17°C, 24°C, 31°C ✓' },
        { difficulty: 'Medium', question: 'Zanele sê 8°C is warmer as 15°C omdat 8 voor 15 kom wanneer jy tel. Is Zanele korrek? Verduidelik.', answer: 'Nee, Zanele is verkeerd. Vir temperature in °C beteken ʼn groter getal altyd ʼn warmer temperatuur. 15 is groter as 8, dus is 15°C warmer, nie 8°C nie.', checkMode: 'self', explanation: 'Om temperature te vergelyk werk net soos om enige twee heelgetalle te vergelyk: die groter getal is warmer.' },
        { difficulty: 'Medium', question: 'Durban teken 26°C een middag aan, terwyl Bloemfontein 19°C op dieselfde tyd aanteken. Watter stad was koeler?', answer: 'Bloemfontein', checkMode: 'auto', correctAnswer: 'Bloemfontein', correctAnswers: ['Bloemfontein', 'bloemfontein'], explanation: '19°C is minder as 26°C, dus was Bloemfontein koeler ✓' },

        // Blok 4 — Verskille bereken (13-16, Matig-Moeilik)
        { difficulty: 'Medium-Hard', question: 'Vind die verskil tussen 14°C en 29°C.', answer: '15°C', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15°C', '15 °C'], explanation: '29 − 14 = 15°C ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Dorp teken ʼn maksimum van 27°C en ʼn minimum van 13°C op dieselfde dag aan. Vind die temperatuurwydte vir die dag.', answer: '14°C', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', '14°C', '14 °C'], explanation: '27 − 13 = 14°C ✓' },
        { difficulty: 'Medium-Hard', question: 'Die temperatuur om 6 vm. was 11°C. Teen 10 vm. het dit met 9°C gestyg. Wat was die temperatuur om 10 vm.?', answer: '20°C', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20°C', '20 °C'], explanation: 'ʼn Styging beteken optel: 11°C + 9°C = 20°C ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Kweekhuis is by 24°C gehou. Dit is aangepas na ʼn koeler instelling van 16°C. Met hoeveel grade het die temperatuur gedaal?', answer: '8°C', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8°C', '8 °C'], explanation: '24 − 16 = 8°C ✓' },

        // Blok 5 — Multi-stap redenering en werklike-lewe-toepassings (17-19, Moeilik)
        { difficulty: 'Hard', question: 'Drie dorpe teken middagtemperature aan: Dorp A: 21°C, Dorp B: 34°C, Dorp C: 12°C.\n\na) Watter dorp was die koelste?\nb) Vind die temperatuurverskil tussen die koelste en warmste dorpe.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Koelste dorp', correctAnswer: 'Dorp C', correctAnswers: ['Dorp C', 'C'], explanation: 'Dorp C by 12°C is die kleinste lesing, dus is dit die koelste ✓' }, { label: 'b) Verskil tussen koelste en warmste', correctAnswer: '22', correctAnswers: ['22', '22°C'], explanation: 'Koelste is Dorp C (12°C), warmste is Dorp B (34°C). 34 − 12 = 22°C ✓' } ] },
        { difficulty: 'Hard', question: 'ʼn Klaskamer begin die dag by 18°C en word elke uur vir 4 uur met 3°C warmer soos die son deur die vensters skyn.\n\na) Vind die temperatuur na 4 uur.\nb) Vind die verskil tussen die begintemperatuur en die temperatuur na 4 uur.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Temperatuur na 4 uur', correctAnswer: '30', correctAnswers: ['30', '30°C'], explanation: 'Totale styging: 3 × 4 = 12°C. Begin by 18°C: 18 + 12 = 30°C ✓' }, { label: 'b) Verskil tussen begin en na 4 uur', correctAnswer: '12', correctAnswers: ['12', '12°C'], explanation: 'Die temperatuur het van 18°C na 30°C gestyg, ʼn verskil van 12°C, wat ooreenstem met die totale styging wat bereken is ✓' } ] },
        { difficulty: 'Hard', question: 'Karabo sê: "Die temperatuur het van 9°C na 26°C gestyg, dus moes dit met 35 grade gestyg het, want ek het 9 en 26 opgetel." Is Karabo korrek? Verduidelik en gee die korrekte styging.', answer: 'Nee, Karabo is verkeerd. Om ʼn temperatuurverskil (styging of daling) te vind, moet jy die kleiner waarde van die groter waarde aftrek, nie hulle optel nie. Die korrekte berekening is 26 − 9 = 17 grade, nie 35 nie.', checkMode: 'self', explanation: 'ʼn Temperatuurverskil gebruik altyd aftrekking van die kleiner van die groter: 26 − 9 = 17°C.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het termometers lees, aanteken, vergelyk en temperatuurverskille bereken bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van die meeste hiervan — hersien enige gemiste vrae.' },
        { minScore: 10, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde oor temperature lees en vergelyk, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Termometers & verwysingspunte lees (0-3, Maklik)
        { difficulty: 'Easy', question: 'ʼn Termometer wys die vloeistofvlak soos afgebeeld. Elke gemerkte punt is 10°C uitmekaar, met ʼn ekstra ongemerkte merk halfpad tussen elke paar punte. Wat is die temperatuur?', answer: '40°C', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40°C', '40 °C'], explanation: 'Die vloeistof stem presies met die gemerkte 40°C-punt ooreen ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="70" width="18" height="108" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#2563eb" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">50</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Termometer wys die vloeistofvlak soos afgebeeld. Elke gemerkte punt is 10°C uitmekaar, met ʼn ekstra ongemerkte merk halfpad tussen elke paar punte. Wat is die temperatuur?', answer: '55°C', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55', '55°C', '55 °C'], explanation: 'Die vloeistof stem ooreen met die ongemerkte merk halfpad tussen die 50°C- en 60°C-punte, wat 55°C is ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="32.5" width="18" height="145.5" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#2563eb" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">50</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'Wat is die gemiddelde normale temperatuur van ʼn gesonde menslike liggaam, in grade Celsius?', answer: '37°C', checkMode: 'auto', correctAnswer: '37', correctAnswers: ['37', '37°C'], explanation: 'Die gemiddelde normale menslike liggaamstemperatuur is ongeveer 37°C ✓' },
        { difficulty: 'Easy', question: 'Is 100°C die vriespunt of die kookpunt van suiwer water?', answer: 'kookpunt', checkMode: 'auto', correctAnswer: 'kookpunt', correctAnswers: ['kookpunt', 'die kookpunt'], explanation: '100°C is die kookpunt van suiwer water; die vriespunt is 0°C ✓' },

        // Blok 2 — Metings aanteken (4-8, Maklik-Matig)
        { difficulty: 'Easy-Medium', question: 'ʼn Termometer se vloeistofvlak stem presies met die 34°C-merk ooreen. Hoe moet hierdie lesing aangeteken word, met die eenheid?', answer: '34°C', checkMode: 'auto', correctAnswer: '34', correctAnswers: ['34', '34°C', '34 °C'], explanation: 'Die vloeistof stem presies met 34°C ooreen, dus word die lesing aangeteken as 34°C ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Kok wil aanteken hoe warm ʼn oond is. Watter eenheid moet gebruik word, en waarom?', answer: 'Grade Celsius (°C), omdat dit die standaardeenheid vir die meet van temperatuur is — dit laat enigiemand wat die aantekening lees, presies verstaan hoe warm die oond is.', checkMode: 'self', explanation: 'Grade Celsius is die standaardeenheid wat CAPS vir die aanteken van temperatuur voorskryf.' },
        { difficulty: 'Medium', question: 'ʼn Klaskamer-weerkaart wys: Donderdag 20°C, Vrydag 25°C, Saterdag 15°C. Watter dag was die warmste?', answer: 'Vrydag', checkMode: 'auto', correctAnswer: 'Vrydag', correctAnswers: ['Vrydag', 'vrydag'], explanation: '25°C is die grootste van die drie lesings, dus was Vrydag die warmste ✓' },
        { difficulty: 'Medium', question: 'Aisha lees ʼn termometer en teken die temperatuur aan as "nege-en-twintig" sonder om enige duidelike getal of simbool te skryf. Verduidelik wat ontbreek in hierdie aantekening en hoe dit eerder geskryf moet word.', answer: 'ʼn Temperatuuraantekening moet met syfers en die korrekte eenheidsimbool geskryf word sodat dit vinnig en sonder verwarring gelees en gebruik kan word, byvoorbeeld 29°C eerder as om die getal uit te spel sonder ʼn eenheid. Om dit duidelik met °C te skryf, verwyder enige twyfel oor wat gemeet is.', checkMode: 'self', explanation: 'Duidelike, standaard aantekening (syfers plus die °C-simbool) voorkom verwarring wanneer ʼn temperatuur later weer gelees word.' },
        { difficulty: 'Medium', question: 'ʼn Termometer se vloeistofvlak stem presies met die 12°C-merk ooreen. Teken hierdie lesing korrek aan, met die eenheid.', answer: '12°C', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12°C', '12 °C'], explanation: 'Die vloeistof stem presies met 12°C ooreen, dus word die lesing aangeteken as 12°C ✓' },

        // Blok 3 — Vergelyk en orden (9-12, Matig)
        { difficulty: 'Medium', question: 'Watter is koeler: 28°C of 33°C?', answer: '28°C', checkMode: 'auto', correctAnswer: '28', correctAnswers: ['28', '28°C', '28 °C'], explanation: '28 is minder as 33, dus is 28°C koeler ✓' },
        { difficulty: 'Medium', question: 'Orden hierdie temperature van koudste na warmste: 13°C, 27°C, 20°C, 8°C.', answer: '8°C, 13°C, 20°C, 27°C', checkMode: 'auto', correctAnswer: '8, 13, 20, 27', correctAnswers: ['8, 13, 20, 27', '8°C, 13°C, 20°C, 27°C'], explanation: 'Van kleinste na grootste: 8°C, 13°C, 20°C, 27°C ✓' },
        { difficulty: 'Medium', question: 'Sipho sê 30°C is koeler as 25°C omdat "3 ʼn kleiner syfer as die 2 en 5 saam is." Is Sipho korrek? Verduidelik.', answer: 'Nee, Sipho is verkeerd en sy redenasie maak nie sin nie. Om temperature te vergelyk, vergelyk jy die heelgetalle direk: 30 is groter as 25, dus is 30°C warmer, nie koeler nie, as 25°C.', checkMode: 'self', explanation: 'Om temperature te vergelyk beteken om die heelgetalle direk te vergelyk — 30 > 25, dus is 30°C warmer.' },
        { difficulty: 'Medium', question: 'Polokwane teken 31°C een middag aan, terwyl Kimberley 29°C op dieselfde tyd aanteken. Watter stad was warmer?', answer: 'Polokwane', checkMode: 'auto', correctAnswer: 'Polokwane', correctAnswers: ['Polokwane', 'polokwane'], explanation: '31°C is groter as 29°C, dus was Polokwane warmer ✓' },

        // Blok 4 — Verskille bereken (13-16, Matig-Moeilik)
        { difficulty: 'Medium-Hard', question: 'Vind die verskil tussen 18°C en 32°C.', answer: '14°C', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', '14°C', '14 °C'], explanation: '32 − 18 = 14°C ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Stad teken ʼn maksimum van 24°C en ʼn minimum van 15°C op dieselfde dag aan. Vind die temperatuurwydte vir die dag.', answer: '9°C', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9°C', '9 °C'], explanation: '24 − 15 = 9°C ✓' },
        { difficulty: 'Medium-Hard', question: 'Die temperatuur om 7 vm. was 13°C. Teen 11 vm. het dit met 12°C gestyg. Wat was die temperatuur om 11 vm.?', answer: '25°C', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25°C', '25 °C'], explanation: 'ʼn Styging beteken optel: 13°C + 12°C = 25°C ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Swembadverwarmer verwarm die water van 19°C na 27°C. Met hoeveel grade het die watertemperatuur gestyg?', answer: '8°C', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8°C', '8 °C'], explanation: '27 − 19 = 8°C ✓' },

        // Blok 5 — Multi-stap redenering en werklike-lewe-toepassings (17-19, Moeilik)
        { difficulty: 'Hard', question: 'Drie dorpe teken middagtemperature aan: Dorp A: 16°C, Dorp B: 29°C, Dorp C: 23°C.\n\na) Watter dorp was die warmste?\nb) Vind die temperatuurverskil tussen die warmste en koelste dorpe.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Warmste dorp', correctAnswer: 'Dorp B', correctAnswers: ['Dorp B', 'B'], explanation: 'Dorp B by 29°C is die grootste lesing, dus is dit die warmste ✓' }, { label: 'b) Verskil tussen warmste en koelste', correctAnswer: '13', correctAnswers: ['13', '13°C'], explanation: 'Warmste is Dorp B (29°C), koelste is Dorp A (16°C). 29 − 16 = 13°C ✓' } ] },
        { difficulty: 'Hard', question: 'ʼn Wandelvriesvertrek begin ʼn toets by 30°C en word elke uur vir 4 uur met 5°C afgekoel.\n\na) Vind die temperatuur na 4 uur.\nb) Vind die verskil tussen die begintemperatuur en die temperatuur na 4 uur.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Temperatuur na 4 uur', correctAnswer: '10', correctAnswers: ['10', '10°C'], explanation: 'Totale daling: 5 × 4 = 20°C. Begin by 30°C: 30 − 20 = 10°C ✓' }, { label: 'b) Verskil tussen begin en na 4 uur', correctAnswer: '20', correctAnswers: ['20', '20°C'], explanation: 'Die temperatuur het van 30°C na 10°C gedaal, ʼn verskil van 20°C, wat ooreenstem met die totale daling wat bereken is ✓' } ] },
        { difficulty: 'Hard', question: 'Lindiwe sê: "Die temperatuur het van 28°C na 11°C gedaal, dus het dit met 39 grade gedaal, want ek het per ongeluk 28 en 11 opgetel." Is Lindiwe korrek? Verduidelik en gee die korrekte daling.', answer: 'Nee, Lindiwe is verkeerd. Om te vind hoeveel die temperatuur gedaal het, moet jy die kleiner waarde van die groter waarde aftrek, nie hulle optel nie. Die korrekte berekening is 28 − 11 = 17 grade, nie 39 nie.', checkMode: 'self', explanation: 'ʼn Temperatuurdaling word met aftrekking gevind: 28 − 11 = 17°C.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het termometers lees, aanteken, vergelyk en temperatuurverskille bereken bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van die meeste hiervan — hersien enige gemiste vrae.' },
        { minScore: 10, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde oor temperature lees en vergelyk, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Termometers & verwysingspunte lees (0-3, Maklik)
        { difficulty: 'Easy', question: 'ʼn Termometer wys die vloeistofvlak soos afgebeeld. Elke gemerkte punt is 10°C uitmekaar, met ʼn ekstra ongemerkte merk halfpad tussen elke paar punte. Wat is die temperatuur?', answer: '20°C', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20°C', '20 °C'], explanation: 'Die vloeistof stem presies met die gemerkte 20°C-punt ooreen ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="120" width="18" height="58" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#2563eb" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">50</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Termometer wys die vloeistofvlak soos afgebeeld. Elke gemerkte punt is 10°C uitmekaar, met ʼn ekstra ongemerkte merk halfpad tussen elke paar punte. Wat is die temperatuur?', answer: '5°C', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5°C', '5 °C'], explanation: 'Die vloeistof stem ooreen met die ongemerkte merk halfpad tussen die 0°C- en 10°C-punte, wat 5°C is ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="98" y="20" width="24" height="150" rx="12" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="16" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="178" r="13" fill="#ea580c"/><rect x="101" y="157.5" width="18" height="20.5" rx="4" fill="#ea580c"/><line x1="98" y1="170" x2="90" y2="170" stroke="#2563eb" stroke-width="2"/><text x="86" y="174" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="98" y1="145" x2="90" y2="145" stroke="#2563eb" stroke-width="2"/><text x="86" y="149" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10</text><line x1="98" y1="120" x2="90" y2="120" stroke="#2563eb" stroke-width="2"/><text x="86" y="124" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">20</text><line x1="98" y1="95" x2="90" y2="95" stroke="#2563eb" stroke-width="2"/><text x="86" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">30</text><line x1="98" y1="70" x2="90" y2="70" stroke="#2563eb" stroke-width="2"/><text x="86" y="74" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40</text><line x1="98" y1="45" x2="90" y2="45" stroke="#2563eb" stroke-width="2"/><text x="86" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">50</text><line x1="98" y1="20" x2="90" y2="20" stroke="#2563eb" stroke-width="2"/><text x="86" y="24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60</text><line x1="98" y1="157.5" x2="94" y2="157.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="132.5" x2="94" y2="132.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="107.5" x2="94" y2="107.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="82.5" x2="94" y2="82.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="57.5" x2="94" y2="57.5" stroke="#9ca3af" stroke-width="1"/><line x1="98" y1="32.5" x2="94" y2="32.5" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Somersdag word aangeteken as 32°C. Is dit nader aan die vriespunt of die kookpunt van water?', answer: 'vriespunt', checkMode: 'auto', correctAnswer: 'vriespunt', correctAnswers: ['vriespunt', 'die vriespunt'], explanation: '32°C is 32 grade bo 0°C maar 68 grade onder 100°C, dus is dit nader aan die vriespunt ✓' },
        { difficulty: 'Easy', question: 'Watter meetinstrument word gebruik om temperatuur te meet?', answer: 'termometer', checkMode: 'auto', correctAnswer: 'termometer', correctAnswers: ['termometer', 'ʼn termometer'], explanation: 'ʼn Termometer is die instrument wat gebruik word om temperatuur te meet ✓' },

        // Blok 2 — Metings aanteken (4-8, Maklik-Matig)
        { difficulty: 'Easy-Medium', question: 'ʼn Termometer se vloeistofvlak stem presies met die 9°C-merk ooreen. Hoe moet hierdie lesing aangeteken word, met die eenheid?', answer: '9°C', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9°C', '9 °C'], explanation: 'Die vloeistof stem presies met 9°C ooreen, dus word die lesing aangeteken as 9°C ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Boer teken die temperatuur in ʼn kweekhuis drie keer per dag aan. Waarom is dit nuttig om die werklike tyd langs elke temperatuurlesing aan te teken?', answer: 'Om die tyd saam met elke lesing aan te teken, wys hoe die temperatuur regdeur die dag verander, sodat die boer die lesings sinvol kan vergelyk en patrone kan raaksien, soos watter tyd van die dag die warmste of koelste is.', checkMode: 'self', explanation: 'Om konteks (soos tyd) saam met ʼn meting aan te teken, maak die data nuttig vir vergelyking.' },
        { difficulty: 'Medium', question: 'ʼn Klaskamer-weerkaart wys: Week 1 gemiddeld 17°C, Week 2 gemiddeld 23°C, Week 3 gemiddeld 19°C. Watter week het die hoogste gemiddelde temperatuur gehad?', answer: 'Week 2', checkMode: 'auto', correctAnswer: 'Week 2', correctAnswers: ['Week 2', 'week 2', '2'], explanation: '23°C is die grootste van die drie gemiddeldes, dus was Week 2 die warmste ✓' },
        { difficulty: 'Medium', question: 'Boitumelo lees ʼn termometer en skryf "36 grade" neer vir wat sy glo ʼn yskastemperatuur is, maar ʼn yskas behoort gewoonlik baie nader aan 4°C of 5°C te wees om kos veilig koud te hou. Wat kon verkeerd gegaan het, en wat moet Boitumelo volgende doen?', answer: 'ʼn Lesing van 36°C sou veels te warm wees vir ʼn yskas — dit is naby menslike liggaamstemperatuur, nie yskastemperatuur nie. Boitumelo het waarskynlik die termometer verkeerd gelees, die verkeerde skaal gelees, of die termometer was nie werklik in die yskas nie. Sy moet die termometer se plasing en lesing noukeurig nagaan voordat sy die temperatuur weer aanteken.', checkMode: 'self', explanation: 'Om te kyk of ʼn lesing sin maak vir die werklike konteks is ʼn belangrike aantekenvaardigheid.' },
        { difficulty: 'Medium', question: 'ʼn Termometer se vloeistofvlak stem presies met die 48°C-merk ooreen. Teken hierdie lesing korrek aan, met die eenheid.', answer: '48°C', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48', '48°C', '48 °C'], explanation: 'Die vloeistof stem presies met 48°C ooreen, dus word die lesing aangeteken as 48°C ✓' },

        // Blok 3 — Vergelyk en orden (9-12, Matig)
        { difficulty: 'Medium', question: 'Watter is koeler: 21°C of 17°C?', answer: '17°C', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17°C', '17 °C'], explanation: '17 is minder as 21, dus is 17°C koeler ✓' },
        { difficulty: 'Medium', question: 'Orden hierdie temperature van koudste na warmste: 26°C, 11°C, 33°C, 19°C.', answer: '11°C, 19°C, 26°C, 33°C', checkMode: 'auto', correctAnswer: '11, 19, 26, 33', correctAnswers: ['11, 19, 26, 33', '11°C, 19°C, 26°C, 33°C'], explanation: 'Van kleinste na grootste: 11°C, 19°C, 26°C, 33°C ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê dat om die warmer van twee positiewe temperature te vind, jy moet vergelyk watter getal meer syfers het. Werk dit altyd? Verduidelik met 9°C en 12°C.', answer: 'Om net syfertal te vergelyk is oor die algemeen nie ʼn betroubare metode nie, maar met 9°C en 12°C gee dit toevallig hier die regte antwoord: 12 het meer syfers as 9, en 12°C is inderdaad warmer. Die veiligste metode is om altyd die werklike waarde van die getalle te vergelyk, nie net hoeveel syfers hulle het nie.', checkMode: 'self', explanation: 'Om die volle numeriese waarde (nie syfertal nie) te vergelyk is die betroubare metode om temperature te vergelyk.' },
        { difficulty: 'Medium', question: 'Upington teken 35°C een middag aan, terwyl Kaapstad 22°C op dieselfde tyd aanteken. Watter stad was koeler?', answer: 'Kaapstad', checkMode: 'auto', correctAnswer: 'Kaapstad', correctAnswers: ['Kaapstad', 'kaapstad'], explanation: '22°C is minder as 35°C, dus was Kaapstad koeler ✓' },

        // Blok 4 — Verskille bereken (13-16, Matig-Moeilik)
        { difficulty: 'Medium-Hard', question: 'Vind die verskil tussen 21°C en 38°C.', answer: '17°C', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17°C', '17 °C'], explanation: '38 − 21 = 17°C ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Kusdorp teken ʼn maksimum van 26°C en ʼn minimum van 20°C op dieselfde dag aan. Vind die temperatuurwydte vir die dag.', answer: '6°C', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6°C', '6 °C'], explanation: '26 − 20 = 6°C ✓' },
        { difficulty: 'Medium-Hard', question: 'Die temperatuur om 8 vm. was 14°C. Teen middagete het dit met 11°C gestyg. Wat was die temperatuur teen middagete?', answer: '25°C', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25°C', '25 °C'], explanation: 'ʼn Styging beteken optel: 14°C + 11°C = 25°C ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Wetenskapklaskamer koel ʼn bekervol water af van 35°C na 22°C vir ʼn eksperiment. Met hoeveel grade het die temperatuur gedaal?', answer: '13°C', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13°C', '13 °C'], explanation: '35 − 22 = 13°C ✓' },

        // Blok 5 — Multi-stap redenering en werklike-lewe-toepassings (17-19, Moeilik)
        { difficulty: 'Hard', question: 'Drie dorpe teken middagtemperature aan: Dorp A: 25°C, Dorp B: 14°C, Dorp C: 31°C.\n\na) Watter dorp was die koelste?\nb) Vind die temperatuurverskil tussen die koelste en warmste dorpe.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Koelste dorp', correctAnswer: 'Dorp B', correctAnswers: ['Dorp B', 'B'], explanation: 'Dorp B by 14°C is die kleinste lesing, dus is dit die koelste ✓' }, { label: 'b) Verskil tussen koelste en warmste', correctAnswer: '17', correctAnswers: ['17', '17°C'], explanation: 'Koelste is Dorp B (14°C), warmste is Dorp C (31°C). 31 − 14 = 17°C ✓' } ] },
        { difficulty: 'Hard', question: 'ʼn Ketel verhit water wat by 16°C begin, en styg elke minuut vir 3 minute met 21°C.\n\na) Vind die temperatuur na 3 minute.\nb) Vind die verskil tussen die begintemperatuur en die temperatuur na 3 minute.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Temperatuur na 3 minute', correctAnswer: '79', correctAnswers: ['79', '79°C'], explanation: 'Totale styging: 21 × 3 = 63°C. Begin by 16°C: 16 + 63 = 79°C ✓' }, { label: 'b) Verskil tussen begin en na 3 minute', correctAnswer: '63', correctAnswers: ['63', '63°C'], explanation: 'Die temperatuur het van 16°C na 79°C gestyg, ʼn verskil van 63°C, wat ooreenstem met die totale styging wat bereken is ✓' } ] },
        { difficulty: 'Hard', question: 'Naledi sê: "Die maksimum vandag was 33°C en die minimum was 24°C, dus moet die wydte 57°C wees, want ek het hulle opgetel." Is Naledi korrek? Verduidelik en gee die korrekte wydte.', answer: 'Nee, Naledi is verkeerd. ʼn Temperatuurwydte word gevind deur die minimum van die maksimum af te trek, nie hulle op te tel nie. Die korrekte berekening is 33 − 24 = 9 grade, nie 57 nie.', checkMode: 'self', explanation: 'Temperatuurwydte = maksimum − minimum = 33 − 24 = 9°C.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het termometers lees, aanteken, vergelyk en temperatuurverskille bereken bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van die meeste hiervan — hersien enige gemiste vrae.' },
        { minScore: 10, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde oor temperature lees en vergelyk, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },
  ],
}
