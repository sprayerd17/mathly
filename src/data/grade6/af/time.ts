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
        '<VideoPlaceholder label="Short video demonstrating how to convert between 12-hour am/pm time and 24-hour time, showing both the morning case which stays the same and the afternoon case which adds 12 to the hour" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a 24-hour timeline from 00:00 to 23:59, with the am section highlighted in green from 00:00 to 11:59 and the pm section highlighted in red from 12:00 to 23:59, showing matching 12-hour times underneath" />',
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
        '<VideoPlaceholder label="Short video demonstrating how to calculate elapsed time by counting up in stages, including a case where the time period crosses midnight into the next day" />',
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
        '<VideoPlaceholder label="Short video working through a multi-step real-world time word problem combining a timetable, elapsed time and a subtracted break, ending with a final arrival or finishing time" />',
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
