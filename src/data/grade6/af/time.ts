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
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — 24-HOUR TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: '24-hour-time',
      title: '24-Uur Tyd',
      icon: '🕑',
      explanation:
        `<p style="margin-bottom:16px;">Tot nou toe het jy ${or('12-uur tyd')} met ${gr('vm')} (middernag tot middag) en ${re('nm')} (middag tot middernag) gebruik. Baie roosters, kaartjies en digitale horlosies gebruik eerder ${bl('24-uur tyd')}, wat die ure van 00:00 (middernag) heeltemal deurtel tot by 23:59, sonder om vm of nm hoegenaamd nodig te hê.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('24-uur tyd')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vm')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('nm')}</span>` +
        `</div>` +

        // ── Conversion rules ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Omskakel tussen 12-uur en 24-uur tyd</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Oggend- (vm) tye</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">${gr('vm')} tye behou dieselfde uursyfer, net geskryf met ʼn voorloop-nul en sonder vm. 7:15 vm = ${bl('07:15')}. Middernag (12:00 vm) word ${bl('00:00')}.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Middag-/aand- (nm) tye</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Tel ${re('12')} by die uur (behalwe vir 12:00 nm self, wat ${bl('12:00')} bly). 3:45 nm = 3 + 12 = ${bl('15:45')}.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Terug na 12-uur tyd</p>` +
        `<p style="margin:0;color:#1e3a8a;">As die 24-uur tyd ${bl('13:00 of later')} is, trek 12 af en voeg ${re('nm')} by. As dit ${bl('voor 12:00')} is, hou die uur dieselfde en voeg ${gr('vm')} by (met 00:00 wat 12:00 vm word).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skakel 8:20 nm om na 24-uur tyd.',
          answer: `8:20 nm = ${bl('20:20')}`,
          steps: [
            `Dit is ʼn ${re('nm')} tyd, dus tel ${re('12')} by die uur: ${re('8 + 12 = 20')}.`,
            `Hou die minute dieselfde: ${bl('20:20')}.`,
            `<strong>Antwoord:</strong> 8:20 nm = ${bl('20:20')}. ✓`,
          ],
        },
        {
          question: 'Skakel 18:45 om na 12-uur tyd.',
          answer: `18:45 = ${re('6:45 nm')}`,
          steps: [
            `Aangesien 18:45 ${bl('13:00 of later')} is, trek 12 af: ${re('18 − 12 = 6')}.`,
            `Voeg ${re('nm')} by: ${re('6:45 nm')}.`,
            `<strong>Antwoord:</strong> 18:45 = ${re('6:45 nm')}. ✓`,
          ],
        },
        {
          question: 'Skakel 6:05 vm om na 24-uur tyd.',
          answer: `6:05 vm = ${bl('06:05')}`,
          steps: [
            `Dit is ʼn ${gr('vm')} tyd, dus bly die uur dieselfde, geskryf met ʼn voorloop-nul.`,
            `${gr('6')} word ${bl('06')}, so die tyd is ${bl('06:05')}.`,
            `<strong>Antwoord:</strong> 6:05 vm = ${bl('06:05')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Skakel 4:30 nm om na 24-uur tyd.',
          answer: '16:30',
          checkMode: 'auto',
          correctAnswer: '16:30',
          explanation: '4 + 12 = 16, so 4:30 nm = 16:30 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Skakel elkeen van die volgende om.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skakel 9:10 vm om na 24-uur tyd.',
              correctAnswer: '09:10',
              correctAnswers: ['09:10', '9:10'],
              explanation: '9:10 vm bly 09:10 (vm tye behou dieselfde uur) ✓',
            },
            {
              label: 'b) Skakel 21:35 om na 12-uur tyd.',
              correctAnswer: '9:35 nm',
              correctAnswers: ['9:35 nm', '9:35nm', '09:35 nm'],
              explanation: '21 − 12 = 9, so 21:35 = 9:35 nm ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Vlug vertrek om 11:40 nm en land om 02:15 die volgende dag.\n\na) Skakel die vertrektyd om na 24-uur tyd.\nb) Skakel die landingstyd om na 12-uur tyd.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vertrektyd (24-uur)',
              correctAnswer: '23:40',
              explanation: '11 + 12 = 23, so 11:40 nm = 23:40 ✓',
            },
            {
              label: 'b) Landingstyd (12-uur)',
              correctAnswer: '2:15 vm',
              correctAnswers: ['2:15 vm', '2:15vm', '02:15 vm'],
              explanation: '02:15 is voor 12:00, dus bly dit 2:15 vm ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om tussen 12-uur vm./nm.-tyd en 24-uur-tyd om te skakel, met beide die oggendgeval wat dieselfde bly en die middaggeval waar 12 by die uur getel word',

    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CALCULATING ELAPSED TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-elapsed-time',
      title: 'Verstreke Tyd Bereken',
      icon: '⏱️',
      explanation:
        `<p style="margin-bottom:16px;">Verstreke-tyd-probleme vra "hoeveel tyd het verloop?" tussen ʼn ${or('begintyd')} en ʼn ${re('eindtyd')}. Vanjaar pak ons meer ingewikkelde gevalle aan: tye wat ${bl('oor middernag')} in die volgende dag strek, en tydsverskille wat in ${gr('24-uur formaat')} gegee word.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('begintyd')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('eindtyd')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('verstreke tyd')}</span>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">ʼn Betroubare metode: tel op in stadiums</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vanaf die ${or('begintyd')}, tel eers op tot by die volgende volle uur, tel dan volle ure by, en voeg dan enige oorblywende minute by om by die ${re('eindtyd')} uit te kom. As die reis oor middernag strek, hanteer die tyd tot middernag en die tyd na middernag as twee aparte stadiums, en tel hulle dan bymekaar.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Fliek begin om 20:15 en eindig om 22:40. Hoe lank is die fliek?',
          answer: `${gr('2 h 25 min')}`,
          steps: [
            `Tel van ${or('20:15')} op tot by die volgende volle uur: ${or('20:15')} tot 21:00 is ${gr('45 min')}.`,
            `Tel van 21:00 tot ${re('22:00')}: dit is ${gr('1 h')}.`,
            `Tel van 22:00 tot ${re('22:40')}: dit is ${gr('40 min')}.`,
            `Tel die stadiums bymekaar: ${gr('45 min + 1 h + 40 min = 1 h 85 min = 2 h 25 min')}.`,
            `<strong>Antwoord:</strong> Die fliek is ${gr('2 h 25 min')} lank. ✓`,
          ],
        },
        {
          question: 'ʼn Nagskof begin om 22:30 en eindig om 06:15 die volgende oggend. Hoe lank is die skof?',
          answer: `${gr('7 h 45 min')}`,
          steps: [
            `Aangesien die skof ${bl('oor middernag strek')}, verdeel dit in twee stadiums.`,
            `Stadium 1 — van ${or('22:30')} tot middernag (00:00): dit is ${gr('1 h 30 min')}.`,
            `Stadium 2 — van middernag tot ${re('06:15')}: dit is ${gr('6 h 15 min')}.`,
            `Tel die stadiums bymekaar: ${gr('1 h 30 min + 6 h 15 min = 7 h 45 min')}.`,
            `<strong>Antwoord:</strong> Die skof is ${gr('7 h 45 min')} lank. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Sokkerwedstryd begin om 15:00 en eindig om 16:45. Hoe lank is die wedstryd?',
          answer: '1 h 45 min',
          checkMode: 'auto',
          correctAnswer: '1 h 45 min',
          correctAnswers: ['1 h 45 min', '1h45min', '1 hour 45 minutes', '105 minutes', '105 min'],
          explanation: '16:45 − 15:00 = 1 h 45 min ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Trein vertrek om 09:50 en kom om 12:20 aan.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vind die totale reistyd in ure en minute.',
              correctAnswer: '2 h 30 min',
              correctAnswers: ['2 h 30 min', '2h30min', '2 hours 30 minutes', '150 minutes', '150 min'],
              explanation: '09:50 tot 10:00 is 10 min. 10:00 tot 12:00 is 2 h. 2h + 10min tot 12:20 = nog 20min.\nTotaal: 10 min + 2 h + 20 min = 2 h 30 min ✓',
            },
            {
              label: 'b) As die trein 15 minute laat vertrek, vind die nuwe aankomstyd (24-uur formaat).',
              correctAnswer: '12:35',
              explanation: '12:20 + 15 min = 12:35 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Bus vertrek van die depot af om 23:40 en kom by sy bestemming aan om 03:25 die volgende oggend.\n\na) Vind die reistyd van 23:40 tot middernag (00:00).\nb) Vind die reistyd van middernag tot 03:25.\nc) Vind die totale reistyd.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Tyd van 23:40 tot middernag',
              correctAnswer: '20 min',
              correctAnswers: ['20 min', '20min', '20 minutes'],
              explanation: '00:00 − 23:40 = 20 min ✓',
            },
            {
              label: 'b) Tyd van middernag tot 03:25',
              correctAnswer: '3 h 25 min',
              correctAnswers: ['3 h 25 min', '3h25min', '3 hours 25 minutes', '205 minutes', '205 min'],
              explanation: '03:25 − 00:00 = 3 h 25 min ✓',
            },
            {
              label: 'c) Totale reistyd',
              correctAnswer: '3 h 45 min',
              correctAnswers: ['3 h 45 min', '3h45min', '3 hours 45 minutes', '225 minutes', '225 min'],
              explanation: '20 min + 3 h 25 min = 3 h 45 min ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om verstreke tyd te bereken deur in stadiums op te tel, insluitend ʼn geval waar die tydperk oor middernag na die volgende dag strek',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — REAL-WORLD TIME PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'real-world-time-problems',
      title: 'Werklike-Wêreld Tydprobleme',
      icon: '🌍',
      explanation:
        `<p style="margin-bottom:16px;">Werklike-wêreld tydprobleme kombineer dikwels ${bl('24-uur tyd')}, ${gr('verstreke tyd')} en ${or('roosters')} in een enkele vraag. Lees elke besonderheid noukeurig — veral of ʼn reis oor middernag strek, en of tye in 12-uur of 24-uur formaat gegee word.</p>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">ʼn Eenvoudige probleemoplossing-kontrolelys</p>` +
        `<p style="margin:0;color:#9a3412;">1) Wat word gevra — ʼn begintyd, eindtyd of tydsduur? 2) Is al die tye in ${or('dieselfde formaat')} (12-uur of 24-uur)? Skakel eers om indien nie. 3) Strek die tydperk oor middernag? 4) Maak jou finale antwoord sin vir die situasie?</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Rooster wys ʼn bus wat om 07:15 vertrek en 55 minute vat om by die skool te kom. Hoe laat (24-uur formaat) kom die bus aan?',
          answer: `${gr('08:10')}`,
          steps: [
            `Begintyd: ${or('07:15')}.`,
            `Tel ${gr('55 minute')} by: ${or('07:15')} + 45 min = 08:00, dan + nog 10 min = ${gr('08:10')}.`,
            `<strong>Antwoord:</strong> Die bus kom om ${gr('08:10')} aan. ✓`,
          ],
        },
        {
          question: 'Thandi begin haar huiswerk om 4:20 nm en maak klaar om 6:05 nm. As sy ʼn 10-minute-pouse in die middel neem, hoeveel werklike huiswerktyd het sy spandeer?',
          answer: `${gr('1 h 35 min')}`,
          steps: [
            `Vind die totale tyd van begin tot einde: ${or('4:20 nm')} tot ${re('6:05 nm')} = ${gr('1 h 45 min')}.`,
            `Trek die pouse af: ${gr('1 h 45 min − 10 min = 1 h 35 min')}.`,
            `<strong>Antwoord:</strong> Thandi het ${gr('1 h 35 min')} aan werklike huiswerk spandeer. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Fliek begin om 18:30 en duur 1 h 50 min. Vind die eindtyd (24-uur formaat).',
          answer: '20:20',
          checkMode: 'auto',
          correctAnswer: '20:20',
          explanation: '18:30 + 1 h 50 min = 20:20 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Kagiso studeer van 14:15 tot 16:00, met ʼn 15-minute-pouse in die middel.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vind die totale tyd van begin tot einde.',
              correctAnswer: '1 h 45 min',
              correctAnswers: ['1 h 45 min', '1h45min', '1 hour 45 minutes', '105 minutes', '105 min'],
              explanation: '16:00 − 14:15 = 1 h 45 min ✓',
            },
            {
              label: 'b) Vind die werklike studietyd (sonder die pouse).',
              correctAnswer: '1 h 30 min',
              correctAnswers: ['1 h 30 min', '1h30min', '1 hour 30 minutes', '90 minutes', '90 min'],
              explanation: '1 h 45 min − 15 min = 1 h 30 min ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Vragskip vertrek om 20:50 en die reis vat 9 h 40 min.\n\na) Vind die aankomstyd in 24-uur formaat.\nb) Skakel die aankomstyd om na 12-uur formaat.\nc) Kom die skip op dieselfde dag aan waarop dit vertrek het?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Aankomstyd (24-uur)',
              correctAnswer: '06:30',
              explanation: '20:50 tot middernag = 3 h 10 min. Oorblywende tyd: 9 h 40 min − 3 h 10 min = 6 h 30 min na middernag.\nAankoms: 06:30 ✓',
            },
            {
              label: 'b) Aankomstyd (12-uur)',
              correctAnswer: '6:30 vm',
              correctAnswers: ['6:30 vm', '6:30vm', '06:30 vm'],
              explanation: '06:30 is voor 12:00, dus bly dit 6:30 vm ✓',
            },
            {
              label: 'c) Dieselfde dag?',
              correctAnswer: 'nee',
              correctAnswers: ['nee', 'Nee'],
              explanation: 'Aangesien die reis oor middernag strek (20:50 + 9 h 40 min gaan verby 24:00), kom die skip die volgende dag aan ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat ʼn multistap-woordprobleem oor tyd uit die regte lewe deurwerk, met ʼn rooster, verstreke tyd en ʼn afgetrekte pouse, wat eindig met ʼn finale aankoms- of afsluitingstyd',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — TIME ZONES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'time-zones',
      title: 'Tydsones',
      icon: '🌐',
      explanation:
        `<p style="margin-bottom:16px;">Die Aarde is rond en bly draai, so die son kan nie op elke deel van die wêreld gelyktydig skyn nie — terwyl dit dag is op een plek, kan dit nag wees iewers anders. Om horlosies by die posisie van die son te hou, word die wêreld in verskillende ${bl('tydsones')} verdeel, meestal gebaseer op hoe ver oos of wes ʼn plek is (sy lengtegraad). Plekke in dieselfde tydsone stem ooreen om hul horlosies op dieselfde tyd te stel.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bekende stad/tyd')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('teikenstad')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('berekende tyd')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('dagverandering')}</span>` +
        `</div>` +

        // ── Reading a time-zone map ───────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">ʼn Tydsonekaart lees</p>` +
        `<p style="margin-bottom:10px;color:#374151;font-size:14px;">ʼn Tydsonekaart of -tabel wys hoeveel ure elke plek voor of agter ʼn verwysingspunt is, gewoonlik <strong>GMT</strong> (Greenwichgemiddelde Tyd, gebaseer in Londen). ʼn Stad op <strong>GMT+2</strong> is 2 ure voor Londen; ʼn stad op <strong>GMT−5</strong> is 5 ure agter Londen.</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px;margin-bottom:20px;">` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:10px 12px;text-align:center;"><p style="font-weight:700;color:#2563eb;margin:0 0 2px;">Londen</p><p style="margin:0;font-size:13px;color:#374151;">GMT+0</p></div>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:10px 12px;text-align:center;"><p style="font-weight:700;color:#2563eb;margin:0 0 2px;">Johannesburg</p><p style="margin:0;font-size:13px;color:#374151;">GMT+2</p></div>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:10px 12px;text-align:center;"><p style="font-weight:700;color:#2563eb;margin:0 0 2px;">Dubai</p><p style="margin:0;font-size:13px;color:#374151;">GMT+4</p></div>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:10px 12px;text-align:center;"><p style="font-weight:700;color:#2563eb;margin:0 0 2px;">Tokio</p><p style="margin:0;font-size:13px;color:#374151;">GMT+9</p></div>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:10px 12px;text-align:center;"><p style="font-weight:700;color:#2563eb;margin:0 0 2px;">New York</p><p style="margin:0;font-size:13px;color:#374151;">GMT−5</p></div>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:10px 12px;text-align:center;"><p style="font-weight:700;color:#2563eb;margin:0 0 2px;">Los Angeles</p><p style="margin:0;font-size:13px;color:#374151;">GMT−8</p></div>` +
        `</div>` +

        // ── Method ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die tyd in ʼn ander tydsone uitwerk</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vind die verskil in ure</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Trek die twee ${bl('GMT')}-verskuiwings van mekaar af om die ${gr('tydsverskil')} tussen die twee plekke te vind. Byvoorbeeld, Tokio (GMT+9) en Londen (GMT+0) verskil met ${gr('9 ure')}.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Besluit voor of agter</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">ʼn Plek verder oos (ʼn groter ${or('GMT-verskuiwing')}) is <strong>voor</strong> — tel ure by om daarheen te beweeg. ʼn Plek verder wes (ʼn kleiner ${or('GMT-verskuiwing')}) is <strong>agter</strong> — trek ure af om daarheen te beweeg.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">3</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Let op vir ʼn dagverandering</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">As die optel of aftrek van die ure die tyd verby 24:00 of onder 00:00 neem, beweeg die tyd na die ${re('volgende dag')} of die ${re('vorige dag')} — net soos verstreke tyd wat oor middernag strek.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Oos beweeg maak dit later, wes beweeg maak dit vroeër</p>` +
        `<p style="margin:0;color:#1e3a8a;">Reis oos (soos van Londen na Dubai en Tokio) beweeg jy na tydsones wat ${gr('verder voor')} is. Reis wes (soos van Londen na New York en Los Angeles) beweeg jy na tydsones wat ${gr('verder agter')} is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Dit is 14:00 in Johannesburg (GMT+2). Watter tyd is dit in Londen (GMT+0)?',
          answer: `${gr('12:00')} in Londen`,
          steps: [
            `Vind die ${gr('verskil')}: ${bl('GMT+2')} − ${or('GMT+0')} = ${gr('2 ure')}.`,
            `Londen het ʼn ${or('kleiner GMT-verskuiwing')}, so dit is ${gr('agter')} Johannesburg — trek die verskil af.`,
            `${bl('14:00')} − ${gr('2 ure')} = ${gr('12:00')}.`,
            `<strong>Antwoord:</strong> Dit is ${gr('12:00')} in Londen. ✓`,
          ],
        },
        {
          question: 'Dit is 09:00 in Londen (GMT+0). Watter tyd is dit in Tokio (GMT+9)?',
          answer: `${gr('18:00')} in Tokio`,
          steps: [
            `Vind die ${gr('verskil')}: ${or('GMT+9')} − ${bl('GMT+0')} = ${gr('9 ure')}.`,
            `Tokio het ʼn ${or('groter GMT-verskuiwing')}, so dit is ${gr('voor')} Londen — tel die verskil by.`,
            `${bl('09:00')} + ${gr('9 ure')} = ${gr('18:00')}.`,
            `<strong>Antwoord:</strong> Dit is ${gr('18:00')} in Tokio. ✓`,
          ],
        },
        {
          question: 'Dit is 05:00 op ʼn Dinsdag in Johannesburg (GMT+2). Watter tyd en dag is dit in Los Angeles (GMT−8)?',
          answer: `${gr('19:00')} op ${re('Maandag')} in Los Angeles`,
          steps: [
            `Vind die ${gr('verskil')}: ${bl('GMT+2')} − ${or('GMT−8')} = ${gr('10 ure')}.`,
            `Los Angeles het ʼn ${or('kleiner GMT-verskuiwing')}, so dit is ${gr('agter')} Johannesburg — trek die verskil af.`,
            `${bl('05:00')} − ${gr('10 ure')}: aangesien 5 kleiner as 10 is, tel terug verby middernag — ${re('05:00 − 10 h = 19:00 die vorige dag')}.`,
            `<strong>Antwoord:</strong> Dit is ${gr('19:00')} op ${re('Maandag')} in Los Angeles (die vorige dag). ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Dit is 10:00 in Londen (GMT+0). Johannesburg is GMT+2. Watter tyd is dit in Johannesburg?',
          answer: '12:00',
          checkMode: 'auto',
          correctAnswer: '12:00',
          explanation: 'Johannesburg is 2 ure voor Londen (GMT+2 teenoor GMT+0), so tel 2 ure by: 10:00 + 2 h = 12:00 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Dubai is GMT+4 en New York is GMT−5.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vind die tydsverskil tussen Dubai en New York, in ure.',
              correctAnswer: '9',
              correctAnswers: ['9', '9 ure', '9 h'],
              explanation: 'GMT+4 − (GMT−5) = 4 + 5 = 9 ure ✓',
            },
            {
              label: 'b) As dit 15:00 in Dubai is, watter tyd is dit in New York?',
              correctAnswer: '06:00',
              explanation: 'New York is 9 ure agter Dubai, trek dus af: 15:00 − 9 h = 06:00 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Tokio is GMT+9 en Los Angeles is GMT−8. Dit is 03:00 op ʼn Woensdag in Tokio.\n\na) Vind die tydsverskil tussen Tokio en Los Angeles, in ure.\nb) Vind die tyd (en dag) in Los Angeles.\nc) Vind die tyd (en dag) in Londen (GMT+0).',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Tydsverskil (ure)',
              correctAnswer: '17',
              correctAnswers: ['17', '17 ure', '17 h'],
              explanation: 'GMT+9 − (GMT−8) = 9 + 8 = 17 ure ✓',
            },
            {
              label: 'b) Tyd en dag in Los Angeles',
              correctAnswer: '10:00, Dinsdag',
              correctAnswers: ['10:00, Dinsdag', '10:00 Dinsdag', 'Dinsdag, 10:00', '10:00 vorige dag'],
              explanation: 'Los Angeles is 17 ure agter Tokio. 03:00 − 17 h: aangesien 3 kleiner as 17 is, tel terug verby middernag: 03:00 − 17 h = 10:00 die vorige dag, Dinsdag ✓',
            },
            {
              label: 'c) Tyd en dag in Londen',
              correctAnswer: '18:00, Dinsdag',
              correctAnswers: ['18:00, Dinsdag', '18:00 Dinsdag', 'Dinsdag, 18:00', '18:00 vorige dag'],
              explanation: 'Londen (GMT+0) is 9 ure agter Tokio (GMT+9). 03:00 − 9 h: aangesien 3 kleiner as 9 is, tel terug verby middernag: 03:00 − 9 h = 18:00 die vorige dag, Dinsdag ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om ʼn tydsonekaart te lees, die tydsverskil tussen twee stede te vind deur hul GMT-verskuiwings te gebruik, en die tyd in ʼn ander stad te bereken, insluitend gevalle wat na die volgende of vorige dag oorgaan',

      diagramPlaceholder:
        'ʼn Vereenvoudigde wêreld-tydsonekaart wat drie stede — Los Angeles, Londen en Tokio — elk gemerk met hul GMT-verskuiwing wys, met pyle wat wys oos beteken voor en wes beteken agter',

      diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="90" x2="205" y2="90" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="15,90 27,84 27,96" fill="#0f1f3d"/><polygon points="205,90 193,84 193,96" fill="#0f1f3d"/><line x1="35" y1="82" x2="35" y2="98" stroke="#0f1f3d" stroke-width="2"/><circle cx="35" cy="90" r="4" fill="#2563eb"/><text x="35" y="68" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">Los Angeles</text><text x="35" y="112" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">GMT−8</text><line x1="104" y1="82" x2="104" y2="98" stroke="#0f1f3d" stroke-width="2"/><circle cx="104" cy="90" r="4" fill="#2563eb"/><text x="104" y="68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">Londen</text><text x="104" y="112" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">GMT+0</text><line x1="185" y1="82" x2="185" y2="98" stroke="#0f1f3d" stroke-width="2"/><circle cx="185" cy="90" r="4" fill="#2563eb"/><text x="185" y="68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">Tokio</text><text x="185" y="112" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">GMT+9</text><text x="20" y="135" font-size="10" fill="#16a34a" font-weight="700" text-anchor="start">← Wes = agter</text><text x="200" y="135" font-size="10" fill="#16a34a" font-weight="700" text-anchor="end">Oos = voor →</text><text x="110" y="162" font-size="11" fill="#374151" text-anchor="middle"><tspan x="110" dy="0">Groter GMT-verskuiwing = verder oos</tspan><tspan x="110" dy="13">= later tyd</tspan></text></svg>',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — 12-uur na 24-uur omskakeling (0-3, Easy, DIAGRAM-FLAGGED)
        { difficulty: 'Easy', question: 'Lindiwe stel haar skoolwekker vir 6:45 vm sodat sy tyd het om reg te maak. Skryf 6:45 vm in 24-uur formaat.', answer: '06:45', checkMode: 'auto', correctAnswer: '06:45', correctAnswers: ['06:45', '6:45'], explanation: '6:45 vm is ʼn oggendtyd, dus bly die uur dieselfde, geskryf met ʼn voorloop-nul: 06:45 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="160" height="80" rx="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#0f1f3d"/><circle cx="190" cy="38" r="4" fill="#0f1f3d"/><text x="110" y="90" text-anchor="middle" font-size="28" font-weight="700" fill="#2563eb" font-family="monospace">6:45</text><rect x="78" y="126" width="64" height="24" rx="6" fill="#16a34a"/><text x="110" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="white">vm</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn TV-gids lys die aandsepie as om 8:30 nm te begin. Skryf hierdie tyd in 24-uur formaat.', answer: '20:30', checkMode: 'auto', correctAnswer: '20:30', explanation: 'Dit is ʼn nm tyd, dus tel 12 by die uur: 8 + 12 = 20. Hou die minute dieselfde: 20:30 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="100" height="26" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/><rect x="110" y="70" width="100" height="26" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/><text x="10" y="63" font-size="11" fill="#374151">00:00</text><text x="210" y="63" text-anchor="end" font-size="11" fill="#374151">23:59</text><line x1="110" y1="65" x2="110" y2="101" stroke="#9ca3af" stroke-width="1"/><text x="110" y="63" text-anchor="middle" font-size="11" fill="#374151">12:00</text><text x="35" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">vm</text><text x="185" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">nm</text><circle cx="180.8" cy="83" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="180.8" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">8:30 nm</text><line x1="180.8" y1="101" x2="180.8" y2="112" stroke="#ea580c" stroke-width="1.5"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn 24-uur vulstasie se opskrif lui: "Brandstof beskikbaar vanaf 12:00 middernag elke aand." Skryf "12:00 middernag" in 24-uur formaat.', answer: '00:00', checkMode: 'auto', correctAnswer: '00:00', explanation: 'Middernag is ʼn spesiale geval — 12:00 middernag (12:00 vm) volg nie die gewone "hou die uur dieselfde"-reël vir vm tye nie. Dit word geskryf as 00:00 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="160" height="80" rx="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#0f1f3d"/><circle cx="190" cy="38" r="4" fill="#0f1f3d"/><text x="110" y="90" text-anchor="middle" font-size="28" font-weight="700" fill="#2563eb" font-family="monospace">12:00</text><rect x="78" y="126" width="64" height="24" rx="6" fill="#16a34a"/><text x="110" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="white">vm</text></svg>' },
        { difficulty: 'Easy', question: 'Tebogo beweer: "12:00 nm (middag) moet 24:00 in 24-uur tyd word, want nm tye tel altyd 12 by." Is Tebogo korrek? Verduidelik, en gee die korrekte 24-uur tyd vir 12:00 nm.', answer: 'Nee, Tebogo is verkeerd. 12:00 nm (middag) is die spesiale middag-geval, en dit bly 12:00 — dit word NIE 24:00 nie (24:00 is nie ʼn geldige 24-uur lesing nie; die volgende dag begin weer by 00:00). Dus 12:00 nm = 12:00 in 24-uur formaat.', checkMode: 'self' },

        // Blok 2 — 24-uur na 12-uur omskakeling (4-7, Easy, DIAGRAM-FLAGGED)
        { difficulty: 'Easy', question: 'ʼn Winkel se digitale tjekstrokie is gestempel om 17:20. Skryf hierdie tyd in 12-uur formaat.', answer: '5:20 nm', checkMode: 'auto', correctAnswer: '5:20 nm', correctAnswers: ['5:20 nm', '5:20nm', '05:20 nm'], explanation: 'Aangesien 17:20 13:00 of later is, trek 12 af: 17 − 12 = 5. Voeg nm by: 5:20 nm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="100" height="26" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/><rect x="110" y="70" width="100" height="26" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/><text x="10" y="63" font-size="11" fill="#374151">00:00</text><text x="210" y="63" text-anchor="end" font-size="11" fill="#374151">23:59</text><line x1="110" y1="65" x2="110" y2="101" stroke="#9ca3af" stroke-width="1"/><text x="110" y="63" text-anchor="middle" font-size="11" fill="#374151">12:00</text><text x="35" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">vm</text><text x="185" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">nm</text><circle cx="154.4" cy="83" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="154.4" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">17:20</text><line x1="154.4" y1="101" x2="154.4" y2="112" stroke="#ea580c" stroke-width="1.5"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Digitale klokradio wys 00:15 in die middel van die nag. Skryf hierdie tyd in 12-uur formaat.', answer: '12:15 vm', checkMode: 'auto', correctAnswer: '12:15 vm', correctAnswers: ['12:15 vm', '12:15vm'], explanation: '00:15 is net na middernag, dus geld die middernag-spesiale geval: "00" word "12", wat 12:15 vm gee ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="160" height="80" rx="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#0f1f3d"/><circle cx="190" cy="38" r="4" fill="#0f1f3d"/><text x="110" y="90" text-anchor="middle" font-size="28" font-weight="700" fill="#2563eb" font-family="monospace">00:15</text><rect x="78" y="126" width="64" height="24" rx="6" fill="#16a34a"/><text x="110" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="white">vm</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Bioskooprooster wys twee vertonings: een om 13:45 en een om 01:45. Watter van hierdie twee is die middagvertoning, en wat is dit in 12-uur formaat?', answer: '13:45 is die middagvertoning, wat 1:45 nm is', checkMode: 'auto', correctAnswer: '13:45, 1:45 nm', correctAnswers: ['13:45, 1:45 nm', '13:45 is die middagvertoning, 1:45 nm', '1:45 nm', '13:45=1:45nm'], explanation: '13:45 is 13:00 of later, dus is dit ʼn middag-/nm tyd: 13 − 12 = 1, wat 1:45 nm gee. 01:45 is voor 12:00, dus is dit 1:45 vm (vroeg oggend), nie die middagvertoning nie ✓' },
        { difficulty: 'Easy', question: 'ʼn Vlugvertrekbord wys ʼn vlug wat om 23:10 vertrek. Skryf hierdie tyd in 12-uur formaat.', answer: '11:10 nm', checkMode: 'auto', correctAnswer: '11:10 nm', correctAnswers: ['11:10 nm', '11:10nm', '23:10 nm'], explanation: 'Aangesien 23:10 13:00 of later is, trek 12 af: 23 − 12 = 11. Voeg nm by: 11:10 nm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="100" height="26" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/><rect x="110" y="70" width="100" height="26" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/><text x="10" y="63" font-size="11" fill="#374151">00:00</text><text x="210" y="63" text-anchor="end" font-size="11" fill="#374151">23:59</text><line x1="110" y1="65" x2="110" y2="101" stroke="#9ca3af" stroke-width="1"/><text x="110" y="63" text-anchor="middle" font-size="11" fill="#374151">12:00</text><text x="35" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">vm</text><text x="185" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">nm</text><circle cx="203.1" cy="83" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="190" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">23:10</text><line x1="203.1" y1="101" x2="203.1" y2="112" stroke="#ea580c" stroke-width="1.5"/></svg>' },

        // Blok 3 — Verstreke tyd binne dieselfde dag (8-11, Medium)
        { difficulty: 'Medium', question: 'ʼn Gimnastiekklas begin om 07:40 en eindig om 09:15. Hoe lank duur die klas?', answer: '1 h 35 min', checkMode: 'auto', correctAnswer: '1 h 35 min', correctAnswers: ['1 h 35 min', '1h35min', '1 uur 35 minute', '95 minute', '95 min'], explanation: '07:40 tot 08:00 is 20 min. 08:00 tot 09:00 is 1 h. 09:00 tot 09:15 is 15 min.\nTotaal: 20 min + 1 h + 15 min = 1 h 35 min ✓' },
        { difficulty: 'Medium', question: 'ʼn Openbare biblioteek se leeskamer maak om 13:05 oop en bly 2 h 50 min oop voor dit vir die dag sluit. Vind die sluitingstyd (24-uur formaat).', answer: '15:55', checkMode: 'auto', correctAnswer: '15:55', explanation: '13:05 + 2 h 50 min = 15:55 ✓' },
        { difficulty: 'Medium', question: 'ʼn Kunsklas eindig om 17:20. As die klas 2 h 35 min geduur het, hoe laat (24-uur formaat) het dit begin?', answer: '14:45', checkMode: 'auto', correctAnswer: '14:45', explanation: 'Terugwerkend: 17:20 − 2 h 35 min = 14:45 ✓' },
        { difficulty: 'Medium', question: 'Zanele vind die verstreke tyd van 09:30 tot 14:45 so: "14:45 − 09:30 = (14 − 09) en (45 − 30) = 5 en 15, dus 5,15 uur." Verduidelik waarom dit verkeerd is om die antwoord as "5,15 uur" te skryf, en gee die korrekte verstreke tyd.', answer: 'Tyd is nie ʼn basis-10 (desimale) stelsel nie — daar is 60 minute in ʼn uur, nie 100 nie, dus kan die ure en minute nie eenvoudig saam geskryf en as ʼn desimale getal gelees word nie. Die syfers 5 en 15 is op hul eie korrek (5 uur en 15 minute), maar die antwoord moet as 5 h 15 min geskryf word, nie "5,15 uur" nie.', checkMode: 'self' },

        // Blok 4 — Verstreke tyd oor middernag (12-15, Medium)
        { difficulty: 'Medium', question: 'ʼn Laatnag-radioprogram begin om 23:15 en eindig om 06:40 die volgende oggend. Hoe lank duur die program?', answer: '7 h 25 min', checkMode: 'auto', correctAnswer: '7 h 25 min', correctAnswers: ['7 h 25 min', '7h25min', '7 uur 25 minute', '445 minute', '445 min'], explanation: 'Stadium 1 — van 23:15 tot middernag (00:00): 45 min. Stadium 2 — van middernag tot 06:40: 6 h 40 min.\nTel die stadiums bymekaar: 45 min + 6 h 40 min = 7 h 25 min ✓' },
        { difficulty: 'Medium', question: 'ʼn Oornag-goederetrein vertrek van die werf af om 22:40 en die reis vat 6 h 35 min. Vind die aankomstyd in 24-uur formaat.', answer: '05:15', checkMode: 'auto', correctAnswer: '05:15', explanation: '22:40 tot middernag is 1 h 20 min. Oorblywende tyd: 6 h 35 min − 1 h 20 min = 5 h 15 min na middernag.\nAankoms: 05:15 ✓' },
        { difficulty: 'Medium', question: 'ʼn Nuwejaar-aftel-geleentheid begin om 21:10 en duur 3 h 20 min. Eindig die geleentheid op dieselfde dag waarop dit begin het, of die volgende dag? Gee die eindtyd in 24-uur formaat.', answer: 'Volgende dag, 00:30', checkMode: 'auto', correctAnswer: 'volgende dag, 00:30', correctAnswers: ['volgende dag, 00:30', 'volgende dag 00:30', '00:30 volgende dag', 'volgendedag00:30'], explanation: '21:10 + 3 h 20 min: van 21:10 tot middernag is 2 h 50 min, wat 30 min oor laat na middernag.\nAangesien die totale tyd verby 24:00 gaan, eindig die geleentheid die volgende dag om 00:30 ✓' },
        { difficulty: 'Medium', question: 'Peter vind die lengte van ʼn oornag-sekuriteitskof van 21:40 tot 05:05 so: "05:05 − 21:40 = 21:40 omgekeer, dus trek ek net die kleinste van die grootste af: 21 − 05 = 16 uur." Verduidelik waarom hierdie redenasie verkeerd is, en vind die korrekte tydsduur.', answer: 'Peter probeer ʼn gewone aftrekking op ʼn situasie afdwing wat oor middernag strek, wat nie werk nie — die skof strek nie eenvoudig oor "16 uur" wat gevind word deur die uursyfers af te trek nie. Aangesien die skof oor middernag strek, moet dit in twee stadiums verdeel word: van 21:40 tot middernag is 2 h 20 min, en van middernag tot 05:05 is 5 h 5 min. Totaal: 2 h 20 min + 5 h 5 min = 7 h 25 min, nie 16 uur nie.', checkMode: 'self' },

        // Blok 5 — Multi-stap werklike-wêreld tydprobleme (16-19, Hard)
        { difficulty: 'Hard', question: 'ʼn Langafstandvlug vertrek om 08:15. Die eerste been vat 3 h 20 min, dan is daar ʼn 1 h 40 min tussenstop, gevolg deur ʼn tweede been van 4 h 5 min.\n\na) Vind die totale vlugtyd (albei bene bymekaar getel, sonder die tussenstop).\nb) Vind die aankomstyd in 24-uur formaat.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Totale vlugtyd', correctAnswer: '7 h 25 min', correctAnswers: ['7 h 25 min', '7h25min', '7 uur 25 minute', '445 minute', '445 min'], explanation: '3 h 20 min + 4 h 5 min = 7 h 25 min ✓' },
          { label: 'b) Aankomstyd (24-uur)', correctAnswer: '17:20', explanation: '08:15 + 3 h 20 min (been 1) = 11:35. 11:35 + 1 h 40 min (tussenstop) = 13:15. 13:15 + 4 h 5 min (been 2) = 17:20 ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Pakhuis se sekuriteitswag se oornagskof begin om 21:15. Die totale tyd aan diens is 8 h 40 min, en dit sluit een 30-minute etenspouse in.\n\na) Vind die tyd (24-uur formaat) waarop die skof eindig.\nb) Vind die werklike betaalde werktyd, sonder die etenspouse.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Skof-eindtyd (24-uur)', correctAnswer: '05:55', explanation: '21:15 tot middernag is 2 h 45 min, wat 5 h 55 min oor laat van die 8 h 40 min na middernag.\nSkof eindig: 05:55 ✓' },
          { label: 'b) Betaalde werktyd', correctAnswer: '8 h 10 min', correctAnswers: ['8 h 10 min', '8h10min', '8 uur 10 minute', '490 minute', '490 min'], explanation: 'Totale tyd aan diens − pouse: 8 h 40 min − 30 min = 8 h 10 min ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Skooldag-rooster: saal begin om 7:35 vm, en die eerste les begin om 08:00 en duur 55 minute. Daarna is daar ʼn 20-minute-pouse, gevolg deur ʼn tweede les wat om 11:10 eindig.\n\na) Skakel die saal se begintyd om na 24-uur formaat.\nb) Vind die tyd waarop die eerste les eindig.\nc) Vind die lengte van die tweede les.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Saal begin (24-uur)', correctAnswer: '07:35', explanation: '7:35 vm is ʼn oggendtyd, dus bly dit 07:35 ✓' },
          { label: 'b) Eerste les se eindtyd', correctAnswer: '08:55', explanation: '08:00 + 55 min = 08:55 ✓' },
          { label: 'c) Lengte van tweede les', correctAnswer: '1 h 55 min', correctAnswers: ['1 h 55 min', '1h55min', '1 uur 55 minute', '115 minute', '115 min'], explanation: 'Pouse eindig om 08:55 + 20 min = 09:15.\nTweede les: 09:15 tot 11:10 = 1 h 55 min ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Padreis: die gesin vertrek van die huis af om 10:00. Hulle ry 1 h 50 min om by ʼn piekniekplek aan te kom, stop daar vir 25 minute, en ry dan nog 1 h 15 min verder om by ʼn wildreservaat-hek aan te kom.\n\na) Vind die tyd waarop hulle by die piekniekplek aangekom het.\nb) Vind die tyd waarop hulle by die wildreservaat-hek aankom.\nc) Vind die totale tyd verloop vanaf vertrek by die huis tot aankoms by die hek (die stop ingesluit).', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Aankoms by piekniekplek', correctAnswer: '11:50', explanation: '10:00 + 1 h 50 min = 11:50 ✓' },
          { label: 'b) Aankoms by wildreservaat-hek', correctAnswer: '13:30', explanation: 'Vertrek van die piekniekplek om 11:50 + 25 min = 12:15. Ry nog 1 h 15 min: 12:15 + 1 h 15 min = 13:30 ✓' },
          { label: 'c) Totale verstreke tyd', correctAnswer: '3 h 30 min', correctAnswers: ['3 h 30 min', '3h30min', '3 uur 30 minute', '210 minute', '210 min'], explanation: '10:00 tot 13:30 = 3 h 30 min ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het 12-uur en 24-uur tyd, verstreke tyd, en werklike-wêreld tydprobleme baasgeraak.' },
        { minScore: 15, message: 'Puik werk! Jy is redelik seker van die meeste hiervan — gaan gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die omskakelingsreëls en die tel-op-in-stadiums-metode weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — 12-uur na 24-uur omskakeling (0-3, Easy, DIAGRAM-FLAGGED)
        { difficulty: 'Easy', question: 'ʼn Skoolkennisgewing sê die sportproewe begin om 3:20 nm stiptelik. Skryf hierdie tyd in 24-uur formaat.', answer: '15:20', checkMode: 'auto', correctAnswer: '15:20', explanation: 'Dit is ʼn nm tyd, dus tel 12 by die uur: 3 + 12 = 15. Hou die minute dieselfde: 15:20 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="100" height="26" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/><rect x="110" y="70" width="100" height="26" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/><text x="10" y="63" font-size="11" fill="#374151">00:00</text><text x="210" y="63" text-anchor="end" font-size="11" fill="#374151">23:59</text><line x1="110" y1="65" x2="110" y2="101" stroke="#9ca3af" stroke-width="1"/><text x="110" y="63" text-anchor="middle" font-size="11" fill="#374151">12:00</text><text x="35" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">vm</text><text x="185" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">nm</text><circle cx="137.8" cy="83" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="137.8" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">3:20 nm</text><line x1="137.8" y1="101" x2="137.8" y2="112" stroke="#ea580c" stroke-width="1.5"/></svg>' },
        { difficulty: 'Easy', question: 'Themba word elke oggend om 5:50 vm wakker om die hoenders te voer voor skool. Skryf hierdie tyd in 24-uur formaat.', answer: '05:50', checkMode: 'auto', correctAnswer: '05:50', correctAnswers: ['05:50', '5:50'], explanation: '5:50 vm is ʼn oggendtyd, dus bly die uur dieselfde, geskryf met ʼn voorloop-nul: 05:50 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="160" height="80" rx="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#0f1f3d"/><circle cx="190" cy="38" r="4" fill="#0f1f3d"/><text x="110" y="90" text-anchor="middle" font-size="28" font-weight="700" fill="#2563eb" font-family="monospace">5:50</text><rect x="78" y="126" width="64" height="24" rx="6" fill="#16a34a"/><text x="110" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="white">vm</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Apteek se laatnag-toonbankboek teken ʼn kliënt se aankoms aan om "12:25 vm". Skryf hierdie tyd in 24-uur formaat.', answer: '00:25', checkMode: 'auto', correctAnswer: '00:25', explanation: '12:25 vm is net na middernag, dus geld die middernag-spesiale geval: die "12" word "00", wat 00:25 gee ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="100" height="26" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/><rect x="110" y="70" width="100" height="26" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/><text x="10" y="63" font-size="11" fill="#374151">00:00</text><text x="210" y="63" text-anchor="end" font-size="11" fill="#374151">23:59</text><line x1="110" y1="65" x2="110" y2="101" stroke="#9ca3af" stroke-width="1"/><text x="110" y="63" text-anchor="middle" font-size="11" fill="#374151">12:00</text><text x="35" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">vm</text><text x="185" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">nm</text><circle cx="13.5" cy="83" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="30" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">12:25 vm</text><line x1="13.5" y1="101" x2="13.5" y2="112" stroke="#ea580c" stroke-width="1.5"/></svg>' },
        { difficulty: 'Easy', question: 'Gegewe die twee tye 00:00 en 12:00 in 24-uur formaat, is een middernag en een middag. Boitumelo sê albei moet as "12:00" geskryf word wanneer omgeskakel na 12-uur tyd, sonder enige ander manier om hulle uit mekaar te ken. Is sy korrek? Verduidelik die verskil.', answer: 'Boitumelo is net gedeeltelik reg — albei gebruik wel die getal 12, maar hulle is nie identies nie: 00:00 word 12:00 vm (middernag) en 12:00 word 12:00 nm (middag). Die vm/nm-etiket is wat hulle uit mekaar hou, dus word hulle nie op dieselfde manier geskryf nie.', checkMode: 'self' },

        // Blok 2 — 24-uur na 12-uur omskakeling (4-7, Easy, DIAGRAM-FLAGGED)
        { difficulty: 'Easy', question: 'ʼn Veerbootrooster wys die laaste oorvaart van die dag wat om 19:05 vertrek. Skryf hierdie tyd in 12-uur formaat.', answer: '7:05 nm', checkMode: 'auto', correctAnswer: '7:05 nm', correctAnswers: ['7:05 nm', '7:05nm', '07:05 nm'], explanation: 'Aangesien 19:05 13:00 of later is, trek 12 af: 19 − 12 = 7. Voeg nm by: 7:05 nm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="160" height="80" rx="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#0f1f3d"/><circle cx="190" cy="38" r="4" fill="#0f1f3d"/><text x="110" y="90" text-anchor="middle" font-size="28" font-weight="700" fill="#2563eb" font-family="monospace">19:05</text><rect x="78" y="126" width="64" height="24" rx="6" fill="#dc2626"/><text x="110" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="white">nm</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Babamonitor-app teken ʼn voedingstyd van 00:40 aan. Skryf hierdie tyd in 12-uur formaat.', answer: '12:40 vm', checkMode: 'auto', correctAnswer: '12:40 vm', correctAnswers: ['12:40 vm', '12:40vm'], explanation: '00:40 is net na middernag, dus geld die middernag-spesiale geval: "00" word "12", wat 12:40 vm gee ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="100" height="26" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/><rect x="110" y="70" width="100" height="26" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/><text x="10" y="63" font-size="11" fill="#374151">00:00</text><text x="210" y="63" text-anchor="end" font-size="11" fill="#374151">23:59</text><line x1="110" y1="65" x2="110" y2="101" stroke="#9ca3af" stroke-width="1"/><text x="110" y="63" text-anchor="middle" font-size="11" fill="#374151">12:00</text><text x="35" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">vm</text><text x="185" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">nm</text><circle cx="15.6" cy="83" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="30" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">00:40</text><line x1="15.6" y1="101" x2="15.6" y2="112" stroke="#ea580c" stroke-width="1.5"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Weer-app wys die sonopkomstyd as 05:50 en ʼn aparte waarskuwingstyd van 17:50. Watter van hierdie twee tye is die nm tyd, en wat is dit in 12-uur formaat?', answer: '17:50 is die nm tyd, wat 5:50 nm is', checkMode: 'auto', correctAnswer: '17:50, 5:50 nm', correctAnswers: ['17:50, 5:50 nm', '17:50 is die nm tyd, 5:50 nm', '5:50 nm', '17:50=5:50nm'], explanation: '17:50 is 13:00 of later, dus is dit ʼn nm tyd: 17 − 12 = 5, wat 5:50 nm gee. 05:50 is voor 12:00, dus is dit 5:50 vm (oggend), die sonopkomstyd ✓' },
        { difficulty: 'Easy', question: 'ʼn Bioskooprooster wys die laaste vertoning van die aand om 22:35. Skryf hierdie tyd in 12-uur formaat.', answer: '10:35 nm', checkMode: 'auto', correctAnswer: '10:35 nm', correctAnswers: ['10:35 nm', '10:35nm', '22:35 nm'], explanation: 'Aangesien 22:35 13:00 of later is, trek 12 af: 22 − 12 = 10. Voeg nm by: 10:35 nm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="160" height="80" rx="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#0f1f3d"/><circle cx="190" cy="38" r="4" fill="#0f1f3d"/><text x="110" y="90" text-anchor="middle" font-size="28" font-weight="700" fill="#2563eb" font-family="monospace">22:35</text><rect x="78" y="126" width="64" height="24" rx="6" fill="#dc2626"/><text x="110" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="white">nm</text></svg>' },

        // Blok 3 — Verstreke tyd binne dieselfde dag (8-11, Medium)
        { difficulty: 'Medium', question: 'ʼn Swemgala begin om 10:25 en eindig om 13:00. Hoe lank duur die gala?', answer: '2 h 35 min', checkMode: 'auto', correctAnswer: '2 h 35 min', correctAnswers: ['2 h 35 min', '2h35min', '2 uur 35 minute', '155 minute', '155 min'], explanation: '10:25 tot 11:00 is 35 min. 11:00 tot 13:00 is 2 h.\nTotaal: 35 min + 2 h = 2 h 35 min ✓' },
        { difficulty: 'Medium', question: 'ʼn Skoolorkes se repetisie begin om 15:40 en duur 2 h 35 min. Vind die eindtyd (24-uur formaat).', answer: '18:15', checkMode: 'auto', correctAnswer: '18:15', explanation: '15:40 + 2 h 35 min = 18:15 ✓' },
        { difficulty: 'Medium', question: 'ʼn Skaakklub-sessie eindig om 19:05. As die sessie 1 h 50 min geduur het, hoe laat (24-uur formaat) het dit begin?', answer: '17:15', checkMode: 'auto', correctAnswer: '17:15', explanation: 'Terugwerkend: 19:05 − 1 h 50 min = 17:15 ✓' },
        { difficulty: 'Medium', question: 'Sibusiso bereken die verstreke tyd van 08:15 tot 12:50 deur die tye soos gewone desimale te hanteer: "12,50 − 08,15 = 4,35, dus is die antwoord 4 uur en 35 honderdstes van ʼn uur." Verduidelik waarom dit verkeerd is om die syfers na die dubbelpunt as ʼn desimale breuk te lees, en gee dan die korrekte verstreke tyd in ure en minute.', answer: 'Die syfers na die dubbelpunt is minute uit 60, nie ʼn desimale breuk uit 100 nie, dus is "4,35" nie ʼn betekenisvolle tydsmeting nie en kan nie as "35 honderdstes van ʼn uur" gelees word nie. Deur eerder die tel-op-metode te gebruik: 08:15 tot 09:00 is 45 min, 09:00 tot 12:00 is 3 h, en 12:00 tot 12:50 is 50 min. Totaal: 45 min + 3 h + 50 min = 4 h 35 min.', checkMode: 'self' },

        // Blok 4 — Verstreke tyd oor middernag (12-15, Medium)
        { difficulty: 'Medium', question: 'ʼn Fabriek se oornag-produksielopie begin om 22:05 en eindig om 05:30 die volgende oggend. Hoe lank duur die lopie?', answer: '7 h 25 min', checkMode: 'auto', correctAnswer: '7 h 25 min', correctAnswers: ['7 h 25 min', '7h25min', '7 uur 25 minute', '445 minute', '445 min'], explanation: 'Stadium 1 — van 22:05 tot middernag (00:00): 1 h 55 min. Stadium 2 — van middernag tot 05:30: 5 h 30 min.\nTel die stadiums bymekaar: 1 h 55 min + 5 h 30 min = 7 h 25 min ✓' },
        { difficulty: 'Medium', question: 'ʼn Oornag-pakkiekoerier-bestelwa vertrek van die depot af om 23:50 en die afleweringsroete vat 4 h 25 min. Vind die aankomstyd in 24-uur formaat.', answer: '04:15', checkMode: 'auto', correctAnswer: '04:15', explanation: '23:50 tot middernag is 10 min. Oorblywende tyd: 4 h 25 min − 10 min = 4 h 15 min na middernag.\nAankoms: 04:15 ✓' },
        { difficulty: 'Medium', question: 'ʼn Tradisionele troue-viering begin om 20:55 en duur 5 h 20 min. Eindig die viering op dieselfde dag waarop dit begin het, of die volgende dag? Gee die eindtyd in 24-uur formaat.', answer: 'Volgende dag, 02:15', checkMode: 'auto', correctAnswer: 'volgende dag, 02:15', correctAnswers: ['volgende dag, 02:15', 'volgende dag 02:15', '02:15 volgende dag', 'volgendedag02:15'], explanation: '20:55 + 5 h 20 min: van 20:55 tot middernag is 3 h 5 min, wat 2 h 15 min oor laat na middernag.\nAangesien die totale tyd verby 24:00 gaan, eindig die viering die volgende dag om 02:15 ✓' },
        { difficulty: 'Medium', question: 'Refilwe vind die lengte van ʼn oornag-bakkerskof van 22:20 tot 02:15 so: "02:15 kom voor 22:20 op die horlosiegesig, dus kan die skof nie regtig gemeet word nie — ek raai net 2 uur 15 minute aangesien dit die eindtyd is." Verduidelik die fout in haar redenasie, en vind die korrekte tydsduur.', answer: 'Refilwe het reg opgemerk dat iets snaaks voel aan ʼn direkte aftrekking, maar om net die eindtyd as die antwoord te hergebruik is nie geldig nie — dit ignoreer hoeveel tyd werklik oornag verloop het. Aangesien die skof oor middernag strek, verdeel dit in twee stadiums: van 22:20 tot middernag is 1 h 40 min, en van middernag tot 02:15 is 2 h 15 min. Totaal: 1 h 40 min + 2 h 15 min = 3 h 55 min, nie eenvoudig "2 uur 15 minute" nie.', checkMode: 'self' },

        // Blok 5 — Multi-stap werklike-wêreld tydprobleme (16-19, Hard)
        { difficulty: 'Hard', question: 'ʼn Internasionale vlug vertrek om 10:40. Die eerste been vat 2 h 55 min, dan is daar ʼn 1 h 20 min tussenstop, gevolg deur ʼn tweede been van 5 h 15 min.\n\na) Vind die totale vlugtyd (albei bene bymekaar getel, sonder die tussenstop).\nb) Vind die aankomstyd in 24-uur formaat.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Totale vlugtyd', correctAnswer: '8 h 10 min', correctAnswers: ['8 h 10 min', '8h10min', '8 uur 10 minute', '490 minute', '490 min'], explanation: '2 h 55 min + 5 h 15 min = 8 h 10 min ✓' },
          { label: 'b) Aankomstyd (24-uur)', correctAnswer: '20:10', explanation: '10:40 + 2 h 55 min (been 1) = 13:35. 13:35 + 1 h 20 min (tussenstop) = 14:55. 14:55 + 5 h 15 min (been 2) = 20:10 ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Hospitaal se nagverpleegster se skof begin om 19:50. Die totale tyd aan diens is 9 h 25 min, en dit sluit een 40-minute-rusperiode in.\n\na) Vind die tyd (24-uur formaat) waarop die skof eindig.\nb) Vind die werklike werktyd, sonder die rusperiode.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Skof-eindtyd (24-uur)', correctAnswer: '05:15', explanation: '19:50 tot middernag is 4 h 10 min, wat 5 h 15 min oor laat van die 9 h 25 min na middernag.\nSkof eindig: 05:15 ✓' },
          { label: 'b) Werktyd', correctAnswer: '8 h 45 min', correctAnswers: ['8 h 45 min', '8h45min', '8 uur 45 minute', '525 minute', '525 min'], explanation: 'Totale tyd aan diens − pouse: 9 h 25 min − 40 min = 8 h 45 min ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Skooldag-rooster: saal begin om 7:50 vm, en die eerste les begin om 08:15 en duur 1 h 5 min. Daarna is daar ʼn 10-minute-pouse, gevolg deur ʼn tweede les wat om 10:55 eindig.\n\na) Skakel die saal se begintyd om na 24-uur formaat.\nb) Vind die tyd waarop die eerste les eindig.\nc) Vind die lengte van die tweede les.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Saal begin (24-uur)', correctAnswer: '07:50', explanation: '7:50 vm is ʼn oggendtyd, dus bly dit 07:50 ✓' },
          { label: 'b) Eerste les se eindtyd', correctAnswer: '09:20', explanation: '08:15 + 1 h 5 min = 09:20 ✓' },
          { label: 'c) Lengte van tweede les', correctAnswer: '1 h 25 min', correctAnswers: ['1 h 25 min', '1h25min', '1 uur 25 minute', '85 minute', '85 min'], explanation: 'Pouse eindig om 09:20 + 10 min = 09:30.\nTweede les: 09:30 tot 10:55 = 1 h 25 min ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Padreis: die gesin vertrek van die huis af om 08:00. Hulle ry 2 h 10 min om by ʼn plaasstalletjie aan te kom, stop daar vir 30 minute, en ry dan nog 1 h 35 min verder om by die kus aan te kom.\n\na) Vind die tyd waarop hulle by die plaasstalletjie aangekom het.\nb) Vind die tyd waarop hulle by die kus aankom.\nc) Vind die totale tyd verloop vanaf vertrek by die huis tot aankoms by die kus (die stop ingesluit).', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Aankoms by plaasstalletjie', correctAnswer: '10:10', explanation: '08:00 + 2 h 10 min = 10:10 ✓' },
          { label: 'b) Aankoms by die kus', correctAnswer: '12:15', explanation: 'Vertrek van die plaasstalletjie om 10:10 + 30 min = 10:40. Ry nog 1 h 35 min: 10:40 + 1 h 35 min = 12:15 ✓' },
          { label: 'c) Totale verstreke tyd', correctAnswer: '4 h 15 min', correctAnswers: ['4 h 15 min', '4h15min', '4 uur 15 minute', '255 minute', '255 min'], explanation: '08:00 tot 12:15 = 4 h 15 min ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het 12-uur en 24-uur tyd, verstreke tyd, en werklike-wêreld tydprobleme baasgeraak.' },
        { minScore: 15, message: 'Puik werk! Jy is redelik seker van die meeste hiervan — gaan gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die omskakelingsreëls en die tel-op-in-stadiums-metode weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — 12-uur na 24-uur omskakeling (0-3, Easy, DIAGRAM-FLAGGED)
        { difficulty: 'Easy', question: 'ʼn Netbal-afrigter roep die span elke Dinsdag om 4:15 nm bymekaar vir oefening. Skryf hierdie tyd in 24-uur formaat.', answer: '16:15', checkMode: 'auto', correctAnswer: '16:15', explanation: 'Dit is ʼn nm tyd, dus tel 12 by die uur: 4 + 12 = 16. Hou die minute dieselfde: 16:15 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="160" height="80" rx="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#0f1f3d"/><circle cx="190" cy="38" r="4" fill="#0f1f3d"/><text x="110" y="90" text-anchor="middle" font-size="28" font-weight="700" fill="#2563eb" font-family="monospace">4:15</text><rect x="78" y="126" width="64" height="24" rx="6" fill="#dc2626"/><text x="110" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="white">nm</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Bakkery begin elke dag om 4:20 vm deeg meng, lank voor die winkel oopmaak. Skryf hierdie tyd in 24-uur formaat.', answer: '04:20', checkMode: 'auto', correctAnswer: '04:20', correctAnswers: ['04:20', '4:20'], explanation: '4:20 vm is ʼn oggendtyd, dus bly die uur dieselfde, geskryf met ʼn voorloop-nul: 04:20 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="100" height="26" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/><rect x="110" y="70" width="100" height="26" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/><text x="10" y="63" font-size="11" fill="#374151">00:00</text><text x="210" y="63" text-anchor="end" font-size="11" fill="#374151">23:59</text><line x1="110" y1="65" x2="110" y2="101" stroke="#9ca3af" stroke-width="1"/><text x="110" y="63" text-anchor="middle" font-size="11" fill="#374151">12:00</text><text x="35" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">vm</text><text x="185" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">nm</text><circle cx="46.1" cy="83" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="46.1" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">4:20 vm</text><line x1="46.1" y1="101" x2="46.1" y2="112" stroke="#ea580c" stroke-width="1.5"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn 24-uur kliniek se toelatingsboek wys ʼn pasiënt wat aankom om "12:35 vm". Skryf hierdie tyd in 24-uur formaat.', answer: '00:35', checkMode: 'auto', correctAnswer: '00:35', explanation: '12:35 vm is net na middernag, dus geld die middernag-spesiale geval: die "12" word "00", wat 00:35 gee ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="160" height="80" rx="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#0f1f3d"/><circle cx="190" cy="38" r="4" fill="#0f1f3d"/><text x="110" y="90" text-anchor="middle" font-size="28" font-weight="700" fill="#2563eb" font-family="monospace">12:35</text><rect x="78" y="126" width="64" height="24" rx="6" fill="#16a34a"/><text x="110" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="white">vm</text></svg>' },
        { difficulty: 'Easy', question: 'Amahle sê: "00:00 en 12:00 moet dieselfde ding beteken in 24-uur tyd, aangesien ʼn horlosiegesig in beide gevalle 12 bo-aan wys." Is Amahle korrek? Verduidelik met behulp van albei se 12-uur ekwivalente.', answer: 'Nee, Amahle is verkeerd. 00:00 is middernag, wat 12:00 vm is, terwyl 12:00 in 24-uur tyd middag is, wat 12:00 nm is. Hulle is presies 12 uur uitmekaar — teenoorgestelde kante van die dag — al lyk ʼn 12-uur analoë horlosiegesig dieselfde op albei oomblikke.', checkMode: 'self' },

        // Blok 2 — 24-uur na 12-uur omskakeling (4-7, Easy, DIAGRAM-FLAGGED)
        { difficulty: 'Easy', question: 'ʼn Winkelsentrum se digitale gids wys die kosplein wat om 21:50 sluit. Skryf hierdie tyd in 12-uur formaat.', answer: '9:50 nm', checkMode: 'auto', correctAnswer: '9:50 nm', correctAnswers: ['9:50 nm', '9:50nm', '21:50 nm'], explanation: 'Aangesien 21:50 13:00 of later is, trek 12 af: 21 − 12 = 9. Voeg nm by: 9:50 nm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="100" height="26" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/><rect x="110" y="70" width="100" height="26" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/><text x="10" y="63" font-size="11" fill="#374151">00:00</text><text x="210" y="63" text-anchor="end" font-size="11" fill="#374151">23:59</text><line x1="110" y1="65" x2="110" y2="101" stroke="#9ca3af" stroke-width="1"/><text x="110" y="63" text-anchor="middle" font-size="11" fill="#374151">12:00</text><text x="35" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">vm</text><text x="185" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">nm</text><circle cx="191.9" cy="83" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="190" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">21:50</text><line x1="191.9" y1="101" x2="191.9" y2="112" stroke="#ea580c" stroke-width="1.5"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Sekuriteitskamera se tydstempel lees 00:50 gedurende die vroeë oggendure. Skryf hierdie tyd in 12-uur formaat.', answer: '12:50 vm', checkMode: 'auto', correctAnswer: '12:50 vm', correctAnswers: ['12:50 vm', '12:50vm'], explanation: '00:50 is net na middernag, dus geld die middernag-spesiale geval: "00" word "12", wat 12:50 vm gee ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="160" height="80" rx="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#0f1f3d"/><circle cx="190" cy="38" r="4" fill="#0f1f3d"/><text x="110" y="90" text-anchor="middle" font-size="28" font-weight="700" fill="#2563eb" font-family="monospace">00:50</text><rect x="78" y="126" width="64" height="24" rx="6" fill="#16a34a"/><text x="110" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="white">vm</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Gimnasium se klasrooster wys ʼn spinklas om 06:30 en ʼn joga-klas om 18:30. Watter van hierdie twee klasse is in die aand, en wat is daardie tyd in 12-uur formaat?', answer: 'Die 18:30-klas (joga) is in die aand, wat 6:30 nm is', checkMode: 'auto', correctAnswer: '18:30, 6:30 nm', correctAnswers: ['18:30, 6:30 nm', '18:30 is die aandklas, 6:30 nm', '6:30 nm', '18:30=6:30nm'], explanation: '18:30 is 13:00 of later, dus is dit ʼn nm tyd: 18 − 12 = 6, wat 6:30 nm gee. 06:30 is voor 12:00, dus is dit 6:30 vm, die oggend se spinklas ✓' },
        { difficulty: 'Easy', question: 'ʼn Laat bioskooprooster wys die middernagvertoning om 23:55. Skryf hierdie tyd in 12-uur formaat.', answer: '11:55 nm', checkMode: 'auto', correctAnswer: '11:55 nm', correctAnswers: ['11:55 nm', '11:55nm', '23:55 nm'], explanation: 'Aangesien 23:55 13:00 of later is, trek 12 af: 23 − 12 = 11. Voeg nm by: 11:55 nm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="100" height="26" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/><rect x="110" y="70" width="100" height="26" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/><text x="10" y="63" font-size="11" fill="#374151">00:00</text><text x="210" y="63" text-anchor="end" font-size="11" fill="#374151">23:59</text><line x1="110" y1="65" x2="110" y2="101" stroke="#9ca3af" stroke-width="1"/><text x="110" y="63" text-anchor="middle" font-size="11" fill="#374151">12:00</text><text x="35" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">vm</text><text x="185" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">nm</text><circle cx="209.3" cy="83" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="190" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">23:55</text><line x1="209.3" y1="101" x2="209.3" y2="112" stroke="#ea580c" stroke-width="1.5"/></svg>' },

        // Blok 3 — Verstreke tyd binne dieselfde dag (8-11, Medium)
        { difficulty: 'Medium', question: 'ʼn Skooldebatskompetisie begin om 10:50 en eindig om 13:15. Hoe lank duur die kompetisie?', answer: '2 h 25 min', checkMode: 'auto', correctAnswer: '2 h 25 min', correctAnswers: ['2 h 25 min', '2h25min', '2 uur 25 minute', '145 minute', '145 min'], explanation: '10:50 tot 11:00 is 10 min. 11:00 tot 13:00 is 2 h. 13:00 tot 13:15 is 15 min.\nTotaal: 10 min + 2 h + 15 min = 2 h 25 min ✓' },
        { difficulty: 'Medium', question: 'ʼn Gemeenskap-erdewerkwerkswinkel begin om 12:20 en duur 3 h 45 min. Vind die eindtyd (24-uur formaat).', answer: '16:05', checkMode: 'auto', correctAnswer: '16:05', explanation: '12:20 + 3 h 45 min = 16:05 ✓' },
        { difficulty: 'Medium', question: 'ʼn Wiskunde-tutorsessie eindig om 18:40. As die sessie 2 h 5 min geduur het, hoe laat (24-uur formaat) het dit begin?', answer: '16:35', checkMode: 'auto', correctAnswer: '16:35', explanation: 'Terugwerkend: 18:40 − 2 h 5 min = 16:35 ✓' },
        { difficulty: 'Medium', question: 'Gegewe die verstreke tyd van 07:55 tot 12:10, skryf Andile: "12:10 − 07:55 = 5:−45, dus draai ek net die teken om en sê 5 h 45 min." Verduidelik waarom hierdie "draai die teken om"-kortpad nie ʼn geldige metode is nie, en gebruik die tel-op-metode om die korrekte verstreke tyd te vind.', answer: 'ʼn Negatiewe getal minute is ʼn teken dat daar van die ure-kolom "geleen" moet word (want 60 minute maak ʼn uur, nie 100 nie), nie iets wat reggemaak kan word deur net ʼn teken om te draai nie — daardie stap volg geen werklike reël van tydsberekening nie en kan maklik ʼn verkeerde antwoord gee. Deur eerder die tel-op-metode te gebruik: 07:55 tot 08:00 is 5 min, 08:00 tot 12:00 is 4 h, en 12:00 tot 12:10 is 10 min. Totaal: 5 min + 4 h + 10 min = 4 h 15 min, nie 5 h 45 min nie.', checkMode: 'self' },

        // Blok 4 — Verstreke tyd oor middernag (12-15, Medium)
        { difficulty: 'Medium', question: 'ʼn Oornag-lughawesekuriteitskof begin om 23:35 en eindig om 04:50 die volgende oggend. Hoe lank is die skof?', answer: '5 h 15 min', checkMode: 'auto', correctAnswer: '5 h 15 min', correctAnswers: ['5 h 15 min', '5h15min', '5 uur 15 minute', '315 minute', '315 min'], explanation: 'Stadium 1 — van 23:35 tot middernag (00:00): 25 min. Stadium 2 — van middernag tot 04:50: 4 h 50 min.\nTel die stadiums bymekaar: 25 min + 4 h 50 min = 5 h 15 min ✓' },
        { difficulty: 'Medium', question: 'ʼn Oornag-langafstandbus vertrek van die stasie af om 21:15 en die reis vat 7 h 20 min. Vind die aankomstyd in 24-uur formaat.', answer: '04:35', checkMode: 'auto', correctAnswer: '04:35', explanation: '21:15 tot middernag is 2 h 45 min. Oorblywende tyd: 7 h 20 min − 2 h 45 min = 4 h 35 min na middernag.\nAankoms: 04:35 ✓' },
        { difficulty: 'Medium', question: 'ʼn Oujaarsaand-vuurwerkvertoning begin om 22:50 en duur 2 h 35 min. Eindig die vertoning op dieselfde dag waarop dit begin het, of die volgende dag? Gee die eindtyd in 24-uur formaat.', answer: 'Volgende dag, 01:25', checkMode: 'auto', correctAnswer: 'volgende dag, 01:25', correctAnswers: ['volgende dag, 01:25', 'volgende dag 01:25', '01:25 volgende dag', 'volgendedag01:25'], explanation: '22:50 + 2 h 35 min: van 22:50 tot middernag is 1 h 10 min, wat 1 h 25 min oor laat na middernag.\nAangesien die totale tyd verby 24:00 gaan, eindig die vertoning die volgende dag om 01:25 ✓' },
        { difficulty: 'Medium', question: 'Nomsa vind die lengte van ʼn oornag-speletjiesmarathon van 20:40 tot 02:45 so: "20:40 is groter as 02:45, dus moet die marathon agteruit in tyd gegaan het, wat onmoontlik is — die vraag moet dus ʼn tikfout hê en ek sal dit oorslaan." Verduidelik waarom die situasie volkome sin maak, en vind die korrekte tydsduur.', answer: 'Nomsa is reg dat 20:40 "groter" as 02:45 lyk as gewone getalle, maar dit is presies wat gebeur wanneer ʼn tydperk oor middernag na die volgende dag strek — dit is nie ʼn tikfout nie. Deur dit in twee stadiums te verdeel: van 20:40 tot middernag is 3 h 20 min, en van middernag tot 02:45 is 2 h 45 min. Totaal: 3 h 20 min + 2 h 45 min = 6 h 5 min.', checkMode: 'self' },

        // Blok 5 — Multi-stap werklike-wêreld tydprobleme (16-19, Hard)
        { difficulty: 'Hard', question: 'ʼn Langafstandvlug vertrek om 06:35. Die eerste been vat 4 h 10 min, dan is daar ʼn 55-minute tussenstop, gevolg deur ʼn tweede been van 3 h 40 min.\n\na) Vind die totale vlugtyd (albei bene bymekaar getel, sonder die tussenstop).\nb) Vind die aankomstyd in 24-uur formaat.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Totale vlugtyd', correctAnswer: '7 h 50 min', correctAnswers: ['7 h 50 min', '7h50min', '7 uur 50 minute', '470 minute', '470 min'], explanation: '4 h 10 min + 3 h 40 min = 7 h 50 min ✓' },
          { label: 'b) Aankomstyd (24-uur)', correctAnswer: '15:20', explanation: '06:35 + 4 h 10 min (been 1) = 10:45. 10:45 + 55 min (tussenstop) = 11:40. 11:40 + 3 h 40 min (been 2) = 15:20 ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Mynterrein se sekuriteitsbeampte se oornagskof begin om 22:30. Die totale tyd aan diens is 7 h 50 min, en dit sluit een 20-minute-etenspouse in.\n\na) Vind die tyd (24-uur formaat) waarop die skof eindig.\nb) Vind die werklike betaalde werktyd, sonder die etenspouse.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Skof-eindtyd (24-uur)', correctAnswer: '06:20', explanation: '22:30 tot middernag is 1 h 30 min, wat 6 h 20 min oor laat van die 7 h 50 min na middernag.\nSkof eindig: 06:20 ✓' },
          { label: 'b) Betaalde werktyd', correctAnswer: '7 h 30 min', correctAnswers: ['7 h 30 min', '7h30min', '7 uur 30 minute', '450 minute', '450 min'], explanation: 'Totale tyd aan diens − pouse: 7 h 50 min − 20 min = 7 h 30 min ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Skooldag-rooster: saal begin om 7:45 vm, en die eerste les begin om 08:10 en duur 1 h 15 min. Daarna is daar ʼn 15-minute-pouse, gevolg deur ʼn tweede les wat om 11:20 eindig.\n\na) Skakel die saal se begintyd om na 24-uur formaat.\nb) Vind die tyd waarop die eerste les eindig.\nc) Vind die lengte van die tweede les.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Saal begin (24-uur)', correctAnswer: '07:45', explanation: '7:45 vm is ʼn oggendtyd, dus bly dit 07:45 ✓' },
          { label: 'b) Eerste les se eindtyd', correctAnswer: '09:25', explanation: '08:10 + 1 h 15 min = 09:25 ✓' },
          { label: 'c) Lengte van tweede les', correctAnswer: '1 h 40 min', correctAnswers: ['1 h 40 min', '1h40min', '1 uur 40 minute', '100 minute', '100 min'], explanation: 'Pouse eindig om 09:25 + 15 min = 09:40.\nTweede les: 09:40 tot 11:20 = 1 h 40 min ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Padreis: die gesin vertrek van die huis af om 11:10. Hulle ry 1 h 35 min om by ʼn waterval-uitkykpunt aan te kom, stop daar vir 20 minute, en ry dan nog 55 minute verder om by die kampeerterrein aan te kom.\n\na) Vind die tyd waarop hulle by die waterval-uitkykpunt aangekom het.\nb) Vind die tyd waarop hulle by die kampeerterrein aankom.\nc) Vind die totale tyd verloop vanaf vertrek by die huis tot aankoms by die kampeerterrein (die stop ingesluit).', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Aankoms by waterval-uitkykpunt', correctAnswer: '12:45', explanation: '11:10 + 1 h 35 min = 12:45 ✓' },
          { label: 'b) Aankoms by die kampeerterrein', correctAnswer: '14:00', explanation: 'Vertrek van die uitkykpunt om 12:45 + 20 min = 13:05. Ry nog 55 minute: 13:05 + 55 min = 14:00 ✓' },
          { label: 'c) Totale verstreke tyd', correctAnswer: '2 h 50 min', correctAnswers: ['2 h 50 min', '2h50min', '2 uur 50 minute', '170 minute', '170 min'], explanation: '11:10 tot 14:00 = 2 h 50 min ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het 12-uur en 24-uur tyd, verstreke tyd, en werklike-wêreld tydprobleme baasgeraak.' },
        { minScore: 15, message: 'Puik werk! Jy is redelik seker van die meeste hiervan — gaan gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die omskakelingsreëls en die tel-op-in-stadiums-metode weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het tyd baasgeraak.' },
      { minScore: 15, message: 'Puik werk!' },
      { minScore: 10, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het tyd baasgeraak.' },
    { minScore: 15, message: 'Puik werk!' },
    { minScore: 10, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
