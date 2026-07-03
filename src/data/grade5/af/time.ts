import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (time units) ─────────────────────────────────────────────
// seconds  → blue   (#2563eb)
// minutes  → green  (#16a34a)
// hours    → orange (#ea580c)
// days     → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Tyd',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — UNITS OF TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'units-of-time',
      title: 'Eenhede van Tyd',
      icon: '⏱',
      explanation:
        `<p style="margin-bottom:16px;">Ons meet tyd met verskillende eenhede, afhangend van hoe lank iets vat. Die hoofeenhede van tyd is ${bl('sekondes')} (s), ${gr('minute')} (min), ${or('ure')} (h), ${re('dae')}, weke, maande en jare. Om te weet hoe om tussen hierdie eenhede om te skakel, is ʼn belangrike vaardigheid.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('sekondes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('minute')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('ure')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('dae')}</span>` +
        `</div>` +

        // ── Conversion facts ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Belangrike omskakelingsfeite</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Sekondes → Minute</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('60 sekondes')} = ${gr('1 minuut')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Minute → Ure</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('60 minute')} = ${or('1 uur')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Ure → Dae</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('24 ure')} = ${re('1 dag')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Dae → Weke</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('7 dae')} = 1 week</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Maande → Jare</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">12 maande = 1 jaar<br>${re('365 dae')} = 1 jaar</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Skrikkeljaar</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('366 dae')} — gebeur elke 4 jaar</p>` +
        `</div>` +

        `</div>` +

        // ── Converting tip ───────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Omskakeling tussen eenhede</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jy van ʼn <strong>groter eenheid na ʼn kleiner eenheid</strong> omskakel (bv. ${gr('minute')} → ${bl('sekondes')}), <strong>vermenigvuldig</strong> jy met die omskakelingsgetal.<br>Wanneer jy van ʼn <strong>kleiner eenheid na ʼn groter eenheid</strong> omskakel (bv. ${bl('sekondes')} → ${gr('minute')}), <strong>deel</strong> jy deur die omskakelingsgetal.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho poets sy tande vir 2 minute. Hoeveel sekondes is dit?',
          answer: `2 ${gr('minute')} = 120 ${bl('sekondes')}`,
          steps: [
            `Ons skakel om van ʼn groter eenheid (${gr('minute')}) na ʼn kleiner eenheid (${bl('sekondes')}). Wanneer ons van groter na kleiner gaan, <strong>vermenigvuldig</strong> ons.`,
            `Gebruik die omskakelingsfeit: 1 ${gr('minuut')} = ${bl('60 sekondes')}.`,
            `2 ${gr('minute')} = 2 × ${bl('60')} = ${bl('120 sekondes')}.`,
            `<strong>Antwoord:</strong> Sipho poets sy tande vir ${bl('120 sekondes')}.`,
          ],
        },
        {
          question: 'ʼn Fliek is 150 minute lank. Hoe lank is dit in ure en minute?',
          answer: `150 ${gr('minute')} = 2 ${or('ure')} en 30 ${gr('minute')}`,
          steps: [
            `Ons skakel ${gr('minute')} om na ${or('ure')} en ${gr('minute')}. Gebruik die omskakelingsfeit: 1 ${or('uur')} = ${gr('60 minute')}.`,
            `Deel 150 deur 60 om die aantal volle ure te vind: 150 ÷ 60 = <strong>2 res 30</strong>.`,
            `Die kwosiënt 2 vertel ons daar is 2 volle ${or('ure')}. Die res 30 vertel ons daar is 30 ${gr('minute')} oor.`,
            `<strong>Antwoord:</strong> Die fliek is ${or('2 ure')} en ${gr('30 minute')} lank.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the units of time in order from smallest to largest — seconds blue, minutes green, hours orange, days red — with the conversion numbers between each unit" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the units of time and how to convert between them by multiplying or dividing with colour coded units" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — READING THE TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-the-time',
      title: 'Tyd Lees',
      icon: '🕐',
      explanation:
        `<p style="margin-bottom:16px;">Ons kan tyd op ʼn <strong>analoog horlosie</strong> of ʼn <strong>digitale horlosie</strong> lees. ʼn Analoog horlosie het twee wysers — die kort ${bl('uurwyser')} en die lang ${gr('minuutwyser')}. Die ${gr('minuutwyser')} vat 60 minute om heeltemal om te gaan. Elke syfer op die horlosie verteenwoordig 5 minute. ʼn Digitale horlosie wys die tyd met syfers wat deur ʼn dubbelpunt geskei word — byvoorbeeld 3:45 beteken 3 ure en 45 minute. Ons gebruik ook ${or('vm.')} vir tye tussen middernag en middag en ${re('nm.')} vir tye tussen middag en middernag.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('uurwyser')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('minuutwyser')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vm.')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('nm.')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Uurwyser (kort)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${bl('uurwyser')} wys na die huidige uur. Dit beweeg stadig — een volle draai elke 12 ure.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Minuutwyser (lank)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${gr('minuutwyser')} wys na die minute. Elke syfer waarna dit wys, verteenwoordig 5 minute. Een volle draai = 60 minute.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">vm. — voor middag</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('vm.')} dek middernag (12:00 vm.) tot net voor middag (11:59 vm.). Oggendtye gebruik ${or('vm.')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">nm. — na middag</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('nm.')} dek middag (12:00 nm.) tot net voor middernag (11:59 nm.). Middag- en aandtye gebruik ${re('nm.')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die minuutwyser lees</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vermenigvuldig die syfer waarna die ${gr('minuutwyser')} wys met <strong>5</strong> om die minute te kry. Byvoorbeeld: ${gr('minuutwyser')} by 9 → 9 × 5 = 45 minute oor die uur.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Die uurwyser wys na 4 en die minuutwyser wys na 6 op ʼn analoog horlosie. Wat is die tyd?',
          answer: `Die tyd is ${bl('4')}:${gr('30')} of half vyf`,
          steps: [
            `Die ${bl('uurwyser')} by 4 beteken dit is ${bl('4')} ure.`,
            `Die ${gr('minuutwyser')} by 6 beteken 6 × 5 = ${gr('30')} minute oor die uur.`,
            `<strong>Antwoord:</strong> Die tyd is ${bl('4')}:${gr('30')} of half vyf.`,
          ],
        },
        {
          question: 'Skryf 7:15 vm. in woorde.',
          answer: `Kwart oor sewe in die oggend`,
          steps: [
            `7:15 ${or('vm.')} beteken 15 minute oor 7 in die oggend — ${or('vm.')} vertel ons dit is voor middag.`,
            `15 minute oor die uur word <strong>kwart oor</strong> genoem (want 15 minute is ʼn kwart van 60 minute).`,
            `<strong>Antwoord:</strong> Kwart oor sewe in die oggend.`,
          ],
        },
        {
          question: 'Wat is die verskil tussen 6:20 vm. en 6:20 nm.?',
          answer: `Hulle is 12 ure uitmekaar`,
          steps: [
            `${or('vm.')} beteken voor middag — 6:20 ${or('vm.')} is vroeg in die oggend.`,
            `${re('nm.')} beteken na middag — 6:20 ${re('nm.')} is in die aand.`,
            `<strong>Antwoord:</strong> Hulle is 12 ure uitmekaar, al lyk die syfers dieselfde.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of an analogue clock showing the short hour hand in blue pointing to 4 and the long minute hand in green pointing to 6, with the time 4:30 labelled" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read time on an analogue clock using the blue hour hand and the green minute hand, and how am and pm are used" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CALCULATING TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-time',
      title: 'Tyd Bereken',
      icon: '⏰',
      explanation:
        `<p style="margin-bottom:16px;">Ons kan bereken hoeveel tyd tussen twee tye verloop het of die ${re('eindtyd')} vind wanneer ons die ${bl('begintyd')} en die ${gr('tydsduur')} ken. Wanneer jy tyd bereken, werk altyd in dieselfde eenhede. ʼn Nuttige metode is om van die ${bl('begintyd')} na die ${re('eindtyd')} op te tel in stappe. Onthou dat tyd nie in grondtal 10 werk nie — daar is 60 minute in ʼn uur, nie 100 nie.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('begintyd')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('eindtyd')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tydsduur')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('totaal')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Begintyd</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${bl('begintyd')} is wanneer die gebeurtenis begin. Ons tel vorentoe van hier af.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Eindtyd</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${re('eindtyd')} is wanneer die gebeurtenis eindig. Ons tel op tot by hierdie tyd.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Tydsduur</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${gr('tydsduur')} is hoe lank iets vat — die verskil tussen die ${bl('begin')}- en ${re('eind')}tye.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Totale tyd</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${or('totaal')} is die gekombineerde tyd wanneer jy twee of meer ${gr('tydsduurtes')} bymekaartel.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tyd is nie grondtal 10 nie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jy tyd optel of aftrek, onthou daar is <strong>60 minute in ʼn uur</strong>, nie 100 nie. As jou minute tot 60 of meer optel, skakel die ekstra minute om na ure. Byvoorbeeld: 45 minute + 20 minute = 65 minute = 1 uur 5 minute.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato begin haar huiswerk om 3:30 nm. en eindig om 5:10 nm. Hoe lank het sy gevat?',
          answer: `Lerato het ${or('1 uur 40 minute')} gevat`,
          steps: [
            `Tel op van die ${bl('begintyd')} (${bl('3:30 nm.')}) na die ${re('eindtyd')} (${re('5:10 nm.')}) in stappe.`,
            `Van ${bl('3:30')} tot ${bl('4:30')} is ${gr('1 uur')}.`,
            `Van ${bl('4:30')} tot ${re('5:10')} is ${gr('40 minute')}.`,
            `<strong>Antwoord:</strong> ${or('Totale tyd')} = ${gr('1 uur')} + ${gr('40 minute')} = ${or('1 uur 40 minute')}.`,
          ],
        },
        {
          question: 'ʼn Trein vertrek om 8:45 vm. en die reis vat 2 ure 30 minute. Hoe laat kom dit aan?',
          answer: `Die trein kom om ${re('11:15 vm.')} aan`,
          steps: [
            `${bl('Begintyd:')} ${bl('8:45 vm.')} Tel die ${gr('tydsduur')} by: ${gr('2 ure 30 minute')}.`,
            `Tel eers die ure by: ${bl('8:45')} + ${gr('2 ure')} = <strong>10:45</strong>.`,
            `Tel die minute by: <strong>10:45</strong> + ${gr('30 minute')} = ${re('11:15')}.`,
            `<strong>Antwoord:</strong> Die trein kom om ${re('11:15 vm.')} aan.`,
          ],
        },
        {
          question: 'Sipho kyk twee flieks. Die eerste is 1 uur 45 minute lank en die tweede is 2 ure 20 minute lank. Hoe lank kyk hy flieks in totaal?',
          answer: `Sipho kyk flieks vir ${or('4 ure 5 minute')} in totaal`,
          steps: [
            `Tel die ure by: ${gr('1 uur')} + ${gr('2 ure')} = <strong>3 ure</strong>.`,
            `Tel die minute by: ${gr('45 minute')} + ${gr('20 minute')} = <strong>65 minute</strong>.`,
            `Skakel 65 minute om: 65 = 60 + 5 = ${gr('1 uur')} 5 minute.`,
            `Tel die omgeskakelde uur by die uretotaal: <strong>3 ure</strong> + ${gr('1 uur')} 5 minute = ${or('4 ure 5 minute')}.`,
            `<strong>Antwoord:</strong> Sipho kyk flieks vir ${or('4 ure 5 minute')} in totaal.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a number line counting up from start time 3:30 pm in blue to 4:30 pm with a 1 hour step in green then to end time 5:10 pm in red with a 40 minute step in green and total 1 hour 40 minutes labelled in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate elapsed time by counting up from the start time in blue to the end time in red using hour and minute steps in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — READING CALENDARS AND TIMETABLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-calendars-and-timetables',
      title: 'Kalenders en Roosters Lees',
      icon: '📅',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Kalender wys al die ${bl('dae')}, weke en maande in ʼn jaar. Ons gebruik kalenders om gebeurtenisse te beplan en uit te vind op watter ${bl('dag')} ʼn ${or('datum')} val. ʼn Rooster wys wanneer gebeurtenisse in volgorde plaasvind. Ons gebruik roosters vir skoolskedules, bustye en treintye. Wanneer jy ʼn rooster lees, vind altyd die korrekte ry en kolom om die regte inligting te kry.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('dae')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('datums')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tye')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('tydsduur')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Kalender</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Kalender wys al die ${bl('dae')}, weke en maande in ʼn jaar. Gebruik dit om te vind op watter ${bl('dag')} ʼn ${or('datum')} val of om vooruit te beplan.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Datums</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn ${or('Datum')} vertel ons die presiese dag in ʼn maand. Om ʼn ${or('datum')} op ʼn kalender te vind, gebruik die kolom vir die ${bl('dag')} en die ry vir die week.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Rooster</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Rooster wys gebeurtenisse in ${gr('tyd')}sorde. Vind die korrekte ry en kolom waar ʼn vak en ʼn ${gr('tyd')} ontmoet om die regte inligting te kry.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Tydsduur</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${re('tydsduur')} vertel ons hoe lank ʼn les of gebeurtenis duur. Tel die ${re('tydsduur')} by die begin${gr('tyd')} om die eind${gr('tyd')} te vind.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">ʼn Rooster lees</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vind altyd die korrekte <strong>ry</strong> (die vak of gebeurtenis) en die korrekte <strong>kolom</strong> (die ${bl('dag')} of ${gr('tyd')}) om die regte inligting te kry. Kyk altyd albei twee keer na voordat jy jou antwoord skryf.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Kalender wys dat 1 Maart ʼn Maandag is. Op watter dag is 15 Maart?',
          answer: `Die ${or('15de van Maart')} val op ʼn ${bl('Maandag')}`,
          steps: [
            `Tel van die ${or('1ste')} tot die ${or('15de')} — dit is <strong>14 ${bl('dae')} later</strong>.`,
            `14 ${bl('dae')} = 2 volle weke (7 + 7 = 14).`,
            `Twee weke na ${bl('Maandag')} is ook ʼn ${bl('Maandag')} — die byvoeg van ʼn volle aantal weke land altyd op dieselfde ${bl('dag')}.`,
            `<strong>Antwoord:</strong> Die ${or('15de van Maart')} val op ʼn ${bl('Maandag')}.`,
          ],
        },
        {
          question: 'ʼn Skoolrooster wys dat Wiskunde om 8:00 vm. begin en 45 minute duur. Engels begin reg na Wiskunde. Hoe laat begin Engels?',
          answer: `Engels begin om ${gr('8:45 vm.')}`,
          steps: [
            `Wiskunde begin om ${gr('8:00 vm.')} en duur ${re('45 minute')}.`,
            `Tel die ${re('tydsduur')} by die begin${gr('tyd')}: ${gr('8:00')} + ${re('45 minute')}.`,
            `${gr('8:00')} + ${re('45 minute')} = ${gr('8:45 vm.')}.`,
            `<strong>Antwoord:</strong> Engels begin om ${gr('8:45 vm.')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a March calendar with the 1st highlighted in blue as Monday and the 15th highlighted in orange, and a school timetable showing Maths at 8:00 am in green lasting 45 minutes in red with English starting at 8:45 am in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read a calendar to find the day a date falls on and how to use a timetable to find start and end times using colour coded days blue dates orange times green and duration red" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — TIME PROBLEMS IN CONTEXT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'time-problems-in-context',
      title: 'Tydprobleme in Konteks',
      icon: '🧩',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik tyd elke dag om te beplan, te organiseer en probleme op te los. Wanneer jy tydprobleme oplos, lees die vraag noukeurig om te besluit wat jy moet vind — ʼn ${bl('begintyd')}, ʼn ${re('eindtyd')} of ʼn ${gr('tydsduur')}. Skryf jou antwoord duidelik met die korrekte eenheid. Onthou dat 60 minute ʼn uur maak, so wanneer jou minute tot meer as 60 optel, moet jy omskakel.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('begintyd')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('eindtyd')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('elke stap')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('totaal')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Begintyd</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${bl('begintyd')} is wanneer die gebeurtenis begin. Tel vorentoe van hier af om die eindtyd of totale tyd te vind.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Eindtyd</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${re('eindtyd')} is wanneer die gebeurtenis eindig. Tel al die ${gr('stappe')} by die ${bl('begintyd')} om by die ${re('eindtyd')} uit te kom.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Elke stap</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Elke ${gr('stap')} is ʼn individuele tydsbedrag wat jy optel. Werk deur die ${gr('stappe')} een op ʼn slag om foute te vermy.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Totaal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${or('totaal')} is die gekombineerde tyd. As jou minute tot 60 of meer optel, skakel die ekstra minute om na ure.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">60 minute = 1 uur</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jou minute tot meer as 60 optel, skakel die ekstra minute om na ure. Werk in klein ${gr('stappe')} — tel eers die ure by, dan die minute — om elke deel duidelik te volg.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Amahle vertrek van die huis af om 7:15 vm. Sy stap 25 minute na die bushalte en wag dan 10 minute vir die bus. Die busrit vat 35 minute. Hoe laat kom sy by die skool aan?',
          answer: `Amahle kom by die skool aan om ${re('8:25 vm.')}`,
          steps: [
            `${bl('Begintyd:')} Amahle vertrek van die huis af om ${bl('7:15 vm.')}`,
            `${gr('Stap 1 — Stap:')} ${bl('7:15')} + ${gr('25 minute')} = <strong>7:40</strong>.`,
            `${gr('Stap 2 — Wag:')} <strong>7:40</strong> + ${gr('10 minute')} = <strong>7:50</strong>.`,
            `${gr('Stap 3 — Busrit:')} <strong>7:50</strong> + ${gr('35 minute')} = ${re('8:25')}. (7:50 + 10 = 8:00, dan 8:00 + 25 = 8:25)`,
            `<strong>Antwoord:</strong> Amahle kom by die skool aan om ${re('8:25 vm.')}`,
          ],
        },
        {
          question: 'ʼn Sportdag begin om 9:00 vm. en eindig om 2:30 nm. Hoe lank is die sportdag?',
          answer: `Die sportdag duur ${or('5 ure 30 minute')}`,
          steps: [
            `Tel van die ${bl('begintyd')} (${bl('9:00 vm.')}) na die ${re('eindtyd')} (${re('2:30 nm.')}).`,
            `${gr('Stap 1:')} Van ${bl('9:00 vm.')} tot ${re('2:00 nm.')} is ${gr('5 ure')}.`,
            `${gr('Stap 2:')} Van ${re('2:00 nm.')} tot ${re('2:30 nm.')} is ${gr('30 minute')}.`,
            `<strong>Antwoord:</strong> Die sportdag duur ${or('5 ure')} + ${or('30 minute')} = ${or('5 ure 30 minute')}.`,
          ],
        },
        {
          question: 'Thabo oefen elke dag 40 minute kitaar. Hoeveel ure en minute oefen hy in een week?',
          answer: `Thabo oefen ${or('4 ure 40 minute')} per week`,
          steps: [
            `${gr('Stap 1:')} Vermenigvuldig die daaglikse oefening met die aantal dae: 7 × ${gr('40 minute')} = ${gr('280 minute')}.`,
            `${gr('Stap 2:')} Skakel ${gr('280 minute')} om na ure en minute: 280 ÷ 60 = <strong>4 res 40</strong> — dit is 4 volle ure en 40 minute oor.`,
            `<strong>Antwoord:</strong> Thabo oefen ${or('4 ure 40 minute')} per week.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a timeline for Amahle\'s journey: start time 7:15 am in blue, step 1 plus 25 minutes walking in green reaching 7:40, step 2 plus 10 minutes waiting in green reaching 7:50, step 3 plus 35 minutes bus ride in green reaching end time 8:25 am in red" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve time problems in context by counting forward from the start time in blue through each step in green to reach the end time in red and reading off the total in orange" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Hoeveel sekondes is daar in 1 minuut?',
      answer: '60',
      checkMode: 'auto',
      correctAnswer: '60',
      explanation: '1 minuut = 60 sekondes.',
    },

    // ── Q2 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Hoeveel ure is daar in 1 dag?',
      answer: '24',
      checkMode: 'auto',
      correctAnswer: '24',
      explanation: '1 dag = 24 ure.',
    },

    // ── Q3 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Fliek is 120 minute lank. Hoe lank is dit in ure?',
      answer: '2 ure',
      checkMode: 'auto',
      correctAnswer: '2 ure',
      correctAnswers: ['2 ure', '2'],
      explanation: '120 minute ÷ 60 = 2 ure.',
    },

    // ── Q4 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê daar is 400 minute in ʼn dag. Is hy korrek? Verduidelik.',
      answer: 'Nee — daar is 24 ure in ʼn dag en 60 minute in ʼn uur. 24 × 60 = 1 440 minute in ʼn dag.',
      checkMode: 'self',
    },

    // ── Q5 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Die minuutwyser wys na 9 op ʼn horlosie. Hoeveel minute oor die uur is dit?',
      answer: '45',
      checkMode: 'auto',
      correctAnswer: '45',
      explanation: '9 × 5 = 45 minute oor die uur.',
    },

    // ── Q6 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Skryf 2:30 nm. in woorde.',
      answer: 'half drie in die middag',
      checkMode: 'auto',
      correctAnswer: 'half drie in die middag',
      explanation: '2:30 nm. — 30 minute oor 2 in die middag is half drie in die middag.',
    },

    // ── Q7 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato word om 6:15 vm. wakker. Haar horlosie wys die uurwyser tussen 6 en 7 en die minuutwyser wys na 3. Is haar horlosie korrek? Verduidelik.',
      answer: 'Ja — die minuutwyser by 3 beteken 15 minute oor. Die uurwyser tussen 6 en 7 beteken dit is na 6 maar voor 7. Die horlosie wys 6:15 wat korrek is.',
      checkMode: 'self',
    },

    // ── Q8 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Amahle begin om 4:00 nm. lees en lees vir 45 minute. Hoe laat maak sy klaar?',
      answer: '4:45 nm.',
      checkMode: 'auto',
      correctAnswer: '4:45 nm.',
      explanation: '4:00 nm. + 45 minute = 4:45 nm.',
    },

    // ── Q9 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Bus vertrek om 9:20 vm. en kom 1 uur 50 minute later aan. Hoe laat kom dit aan?',
      answer: '11:10 vm.',
      checkMode: 'auto',
      correctAnswer: '11:10 vm.',
      explanation: '9:20 vm. + 1 uur = 10:20 vm. 10:20 vm. + 50 minute = 11:10 vm.',
    },

    // ── Q10 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo begin om 5:45 nm. kook. Die ete vat 1 uur 30 minute. Hoe laat sal die ete gereed wees?',
      answer: '7:15 nm.',
      checkMode: 'auto',
      correctAnswer: '7:15 nm.',
      explanation: '5:45 nm. + 1 uur = 6:45 nm. 6:45 nm. + 30 minute = 7:15 nm.',
    },

    // ── Q11 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: '1 Junie is ʼn Woensdag. Watter dag is 8 Junie?',
      answer: 'Woensdag',
      checkMode: 'auto',
      correctAnswer: 'Woensdag',
      explanation: 'Die 8ste is 7 dae na die 1ste. 7 dae = 1 volle week, so die dag bly dieselfde — Woensdag.',
    },

    // ── Q12 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho het Wiskunde van 8:00 tot 8:45, Engels van 8:45 tot 9:30 en Wetenskap van 9:45 tot 10:30. Hoeveel tyd spandeer hy in totaal in die klas?',
      answer: '2 ure 15 minute',
      checkMode: 'auto',
      correctAnswer: '2 ure 15 minute',
      explanation: 'Wiskunde: 8:00 tot 8:45 = 45 minute. Engels: 8:45 tot 9:30 = 45 minute. Wetenskap: 9:45 tot 10:30 = 45 minute. Totaal: 45 + 45 + 45 = 135 minute = 2 ure 15 minute.',
    },

    // ── Q13 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Lerato oefen elke dag 30 minute klavier. Hoeveel ure oefen sy in 2 weke?',
      answer: '7 ure',
      checkMode: 'auto',
      correctAnswer: '7 ure',
      correctAnswers: ['7 ure', '7'],
      explanation: '2 weke = 14 dae. 14 × 30 minute = 420 minute. 420 ÷ 60 = 7 ure.',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Skoolgebeurtenis begin om 10:15 vm. en elk van die 4 items vat 25 minute met ʼn 10-minute-pouse tussen elke item. Hoe laat eindig die gebeurtenis?',
      answer: '4 items × 25 minute = 100 minute. 3 pouses × 10 minute = 30 minute. Totaal = 130 minute = 2 ure 10 minute. 10:15 vm. + 2 ure 10 minute = 12:25 nm.',
      checkMode: 'self',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle vertrek van die huis af om 7:20 vm. Sy stap 15 minute na die taxistaanplek, wag 20 minute en die taxirit vat 40 minute. Sy stap dan 5 minute na die skool. Hoe laat kom sy aan?',
      answer: '8:40 vm.',
      checkMode: 'auto',
      correctAnswer: '8:40 vm.',
      explanation: '7:20 vm. + 15 minute = 7:35 vm. 7:35 vm. + 20 minute = 7:55 vm. 7:55 vm. + 40 minute = 8:35 vm. 8:35 vm. + 5 minute = 8:40 vm.',
    },
  ],
  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het tyd baasgeraak.' },
      { minPercent: 75, message: 'Puik werk! Jy het ʼn sterk begrip van tyd.' },
      { minPercent: 50, message: 'Goeie poging! Gaan die afdelings waar jy punte verloor het weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },
}
