import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (probability roles) ──────────────────────────────────────
// impossible         → red    (#dc2626)
// unlikely           → orange (#ea580c)
// equally likely     → yellow (#ca8a04)
// likely             → blue   (#2563eb)
// certain            → green  (#16a34a)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const ye = (t: string) => `<span style="color:#ca8a04;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Waarskynlikheid',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — PROBABILITY SCALE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'probability-scale',
      title: 'Waarskynlikheidskaal',
      icon: '🎲',
      explanation:
        `<p style="margin-bottom:16px;">Waarskynlikheid beskryf hoe waarskynlik dit is dat ʼn gebeurtenis sal plaasvind. Ons gebruik woorde soos ${re('onmoontlik')}, ${or('onwaarskynlik')}, ${ye('ewe waarskynlik')}, ${bl('waarskynlik')} en ${gr('seker')}. Op ʼn skaal van 0 tot 1 beteken <strong>0</strong> onmoontlik en <strong>1</strong> beteken seker. Gebeurtenisse kan enige plek op hierdie skaal geplaas word, afhangend van hoe waarskynlik hulle is.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('onmoontlik')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('onwaarskynlik')}</span>` +
        `<span style="background:#fefce8;border:1px solid #fef08a;border-radius:6px;padding:3px 10px;font-size:13px;">${ye('ewe waarskynlik')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('waarskynlik')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('seker')}</span>` +
        `</div>` +

        // ── Probability scale visual ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die waarskynlikheidskaal</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">` +
        `<span style="font-size:13px;font-weight:700;color:#dc2626;">0</span>` +
        `<span style="font-size:13px;font-weight:700;color:#ca8a04;">0.5</span>` +
        `<span style="font-size:13px;font-weight:700;color:#16a34a;">1</span>` +
        `</div>` +
        `<div style="height:12px;border-radius:6px;background:linear-gradient(to right,#dc2626,#ea580c,#ca8a04,#2563eb,#16a34a);margin-bottom:10px;"></div>` +
        `<div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 8px;font-size:12px;font-weight:700;color:#dc2626;">Onmoontlik</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 8px;font-size:12px;font-weight:700;color:#ea580c;">Onwaarskynlik</span>` +
        `<span style="background:#fefce8;border:1px solid #fef08a;border-radius:6px;padding:3px 8px;font-size:12px;font-weight:700;color:#ca8a04;">Ewe waarskynlik</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 8px;font-size:12px;font-weight:700;color:#2563eb;">Waarskynlik</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 8px;font-size:12px;font-weight:700;color:#16a34a;">Seker</span>` +
        `</div>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Onmoontlik</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die gebeurtenis kan nooit plaasvind nie. Waarskynlikheid = 0.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Onwaarskynlik</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die gebeurtenis kan gebeur, maar sal waarskynlik nie.</p>` +
        `</div>` +

        `<div style="background:#fefce8;border:1.5px solid #fef08a;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ca8a04;margin-bottom:4px;">Ewe waarskynlik</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die gebeurtenis het dieselfde kans om te gebeur as om nie te gebeur nie. Waarskynlikheid = 0.5.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Waarskynlik</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die gebeurtenis sal waarskynlik gebeur, maar is nie gewaarborg nie.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Seker</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die gebeurtenis sal altyd plaasvind. Waarskynlikheid = 1.</p>` +
        `</div>` +

        `</div>`,

      workedExamples: [
        {
          question: 'Sipho kies ʼn kaart uit ʼn pak waar elke kaart ʼn hartjie is. Wat is die waarskynlikheid om ʼn hartjie te kies?',
          answer: `Dit is ${gr('seker')} — waarskynlikheid = ${gr('1')}`,
          steps: [
            `Elke kaart is ʼn hartjie, so dit sal altyd gebeur.`,
            `Dit is ${gr('seker')}, waarskynlikheid = ${gr('1')}.`,
          ],
        },
        {
          question: 'Lerato gooi ʼn gewone dobbelsteen. Wat is die waarskynlikheid om ʼn 8 te gooi?',
          answer: `Dit is ${re('onmoontlik')} — waarskynlikheid = ${re('0')}`,
          steps: [
            `ʼn Dobbelsteen het net die getalle 1 tot 6, so ʼn 8 gooi kan nooit gebeur nie.`,
            `Dit is ${re('onmoontlik')}, waarskynlikheid = ${re('0')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the probability scale from 0 to 1 with everyday examples of impossible unlikely equally likely likely and certain events" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Probability scale from 0 to 1 showing impossible red unlikely orange equally likely yellow likely blue and certain green positions" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PROBABILITY AS A FRACTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'probability-as-fraction',
      title: 'Waarskynlikheid as ʼn Breuk',
      icon: '½',
      explanation:
        `<p style="margin-bottom:16px;">Ons skryf waarskynlikheid as ʼn breuk — ${gr('gunstige uitkomste')} oor ${bl('totale uitkomste')}. Waarskynlikheid = ${gr('aantal maniere waarop die gebeurtenis kan plaasvind')} gedeel deur ${bl('totale aantal moontlike uitkomste')}. Die waarskynlikheid is altyd tussen 0 en 1.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gunstige uitkomste')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('totale uitkomste')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('waarskynlikheidsbreuk')}</span>` +
        `</div>` +

        // ── Formula ──────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die waarskynlikheidsformule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('W(gebeurtenis)')} = <span style="display:inline-block;text-align:center;vertical-align:middle;margin-left:8px;"><span style="display:block;border-bottom:2px solid #374151;padding-bottom:3px;">${gr('aantal gunstige uitkomste')}</span><span style="display:block;padding-top:3px;">${bl('totale aantal moontlike uitkomste')}</span></span></p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vereenvoudig altyd jou breuk</p>` +
        `<p style="margin:0;color:#1e3a8a;">Sodra jy die ${or('waarskynlikheidsbreuk')} gevind het, vereenvoudig dit tot sy laagste terme deur die GGF te gebruik — net soos wanneer jy enige gewone breuk vereenvoudig.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Sak het 4 rooi balle en 6 blou balle. Vind die waarskynlikheid om ʼn rooi bal te kies.',
          answer: `W(rooi) = ${or('2/5')}`,
          steps: [
            `${gr('Gunstige uitkomste')} = ${gr('4')} rooi balle.`,
            `${bl('Totale uitkomste')} = ${bl('10')} balle (4 rooi + 6 blou).`,
            `${or('Waarskynlikheid')} = ${gr('4')} ÷ ${bl('10')} = ${or('4/10')} = ${or('2/5')}.`,
          ],
        },
        {
          question: 'Amahle gooi ʼn dobbelsteen. Vind die waarskynlikheid om ʼn getal groter as 4 te gooi.',
          answer: `W(groter as 4) = ${or('1/3')}`,
          steps: [
            `${gr('Gunstige uitkomste')}: getalle groter as 4 is 5 en 6 — dit is ${gr('2')} uitkomste.`,
            `${bl('Totale uitkomste')}: ʼn dobbelsteen het ${bl('6')} vlakke.`,
            `${or('Waarskynlikheid')} = ${gr('2')} ÷ ${bl('6')} = ${or('2/6')} = ${or('1/3')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to write probability as a fraction using favourable outcomes over total outcomes with worked examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a bag with 4 red and 6 blue balls labelling favourable outcomes green and total outcomes blue with the probability fraction orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — LISTING OUTCOMES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'listing-outcomes',
      title: 'Uitkomste Lys',
      icon: '📋',
      explanation:
        `<p style="margin-bottom:16px;">ʼn ${bl('Uitkoms')} is ʼn moontlike resultaat van ʼn eksperiment. Ons lys alle moontlike ${bl('uitkomste')} voordat ons waarskynlikheid bereken, sodat ons nie een mis nie. Vir gekombineerde gebeurtenisse, soos ʼn muntstuk opgooi en ʼn dobbelsteen gooi, vermenigvuldig ons die aantal ${bl('uitkomste')} vir elke gebeurtenis om die ${or('totaal')} te vind.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('uitkomste')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gunstige uitkomste')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('totaal')}</span>` +
        `</div>` +

        // ── Combined events rule ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Gekombineerde gebeurtenisse</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#374151;">${or('Totale uitkomste')} = aantal ${bl('uitkomste')} vir Gebeurtenis 1 <strong>×</strong> aantal ${bl('uitkomste')} vir Gebeurtenis 2.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Lys altyd eers uitkomste</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om alle moontlike ${bl('uitkomste')} neer te skryf help jou om die ${or('totaal')} akkuraat te tel en te sien watter ${gr('gunstig')} is. Raai nooit die totaal nie — lys of bereken dit altyd.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo gooi ʼn muntstuk op en gooi ʼn dobbelsteen. Hoeveel totale uitkomste is daar?',
          answer: `${or('Totale uitkomste')} = ${or('12')}`,
          steps: [
            `${bl('Muntstukuitkomste')}: kop of stert = ${bl('2')} uitkomste.`,
            `${bl('Dobbelsteenuitkomste')}: 1, 2, 3, 4, 5, 6 = ${bl('6')} uitkomste.`,
            `${or('Totale uitkomste')} = ${bl('2')} × ${bl('6')} = ${or('12')}.`,
          ],
        },
        {
          question: 'ʼn Wieletjie het 4 gelyke afdelings — rooi, blou, groen, geel. Vind die waarskynlikheid om op rooi of geel te land.',
          answer: `W(rooi of geel) = ${or('1/2')}`,
          steps: [
            `Lys ${bl('uitkomste')}: rooi, blou, groen, geel = ${or('4')} altesaam.`,
            `${gr('Gunstige uitkomste')}: rooi of geel = ${gr('2')}.`,
            `Waarskynlikheid = ${gr('2')} ÷ ${or('4')} = ${or('2/4')} = ${or('1/2')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to list all outcomes for single and combined events and use them to calculate probability" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a sample space table for flipping a coin and rolling a dice with all 12 outcomes listed outcomes blue favourable outcomes green total orange" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Watter woord beskryf ʼn gebeurtenis wat nooit sal gebeur nie?',
      answer: 'onmoontlik',
      checkMode: 'auto',
      correctAnswer: 'onmoontlik',
      explanation: 'ʼn Gebeurtenis wat nooit sal gebeur nie het ʼn waarskynlikheid van 0 en word beskryf as onmoontlik.',
    },

    // ── Q2 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Watter woord beskryf ʼn gebeurtenis wat altyd sal gebeur?',
      answer: 'seker',
      checkMode: 'auto',
      correctAnswer: 'seker',
      explanation: 'ʼn Gebeurtenis wat altyd sal gebeur het ʼn waarskynlikheid van 1 en word beskryf as seker.',
    },

    // ── Q3 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho gooi ʼn dobbelsteen. Plaas die gooi van ʼn ewe getal op die waarskynlikheidskaal.',
      answer: 'Ewe waarskynlik — 3 uit 6 uitkomste is ewe, wat presies die helfte is.',
      checkMode: 'self',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Sak het 3 rooi en 7 blou balle. Vind die waarskynlikheid om rooi te kies.',
      answer: '3/10',
      checkMode: 'auto',
      correctAnswer: '3/10',
      explanation: 'Gunstige uitkomste = 3 rooi balle.\nTotale uitkomste = 3 + 7 = 10 balle.\nW(rooi) = 3/10 ✓',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Dobbelsteen word gegooi. Vind die waarskynlikheid om ʼn getal kleiner as 3 te gooi.',
      answer: '1/3',
      checkMode: 'auto',
      correctAnswer: '1/3',
      correctAnswers: ['1/3', '2/6'],
      explanation: 'Getalle kleiner as 3: 1 en 2 — dit is 2 gunstige uitkomste.\nTotale uitkomste op ʼn dobbelsteen = 6.\nW(kleiner as 3) = 2/6 = 1/3 ✓',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê die waarskynlikheid om kop te gooi met ʼn muntstuk is 1/3. Is sy korrek? Verduidelik.',
      answer: 'Nee — ʼn muntstuk het net 2 uitkomste (kop of stert), so die waarskynlikheid van kop is 1/2 en nie 1/3 nie.',
      checkMode: 'self',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Wieletjie het 5 gelyke afdelings genommer 1 tot 5. Vind die waarskynlikheid om op ʼn onewe getal te land.',
      answer: '3/5',
      checkMode: 'auto',
      correctAnswer: '3/5',
      explanation: 'Onewe getalle van 1 tot 5: 1, 3, 5 — dit is 3 gunstige uitkomste.\nTotale afdelings = 5.\nW(onewe) = 3/5 ✓',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle gooi ʼn muntstuk op en draai ʼn wieletjie met 3 afdelings. Hoeveel totale uitkomste is daar?',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      explanation: 'Muntstukuitkomste: kop of stert = 2.\nWieletjie-uitkomste = 3.\nTotale uitkomste = 2 × 3 = 6 ✓',
    },

    // ── Q9 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Lys alle moontlike uitkomste wanneer ʼn gewone dobbelsteen gegooi word.',
      answer: '1,2,3,4,5,6',
      checkMode: 'auto',
      correctAnswer: '1,2,3,4,5,6',
      correctAnswers: ['1,2,3,4,5,6', '1, 2, 3, 4, 5, 6', '1 2 3 4 5 6'],
      explanation: 'ʼn Gewone dobbelsteen het 6 vlakke genommer 1 tot 6.\nAlle moontlike uitkomste: 1, 2, 3, 4, 5, 6 ✓',
    },

    // ── Q10 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Sak het 5 groen, 3 geel en 2 rooi fiches. Vind die waarskynlikheid om ʼn fiche te kies wat nie rooi is nie.',
      answer: '4/5',
      checkMode: 'auto',
      correctAnswer: '4/5',
      correctAnswers: ['4/5', '8/10'],
      explanation: 'Nie rooi nie = groen of geel = 5 + 3 = 8 gunstige uitkomste.\nTotale fiches = 5 + 3 + 2 = 10.\nW(nie rooi nie) = 8/10 = 4/5 ✓',
    },

    // ── Q11 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo gooi ʼn muntstuk 20 keer op en kry 8 keer kop. Wat is die eksperimentele waarskynlikheid van kop, en hoe vergelyk dit met die teoretiese waarskynlikheid?',
      answer: 'Eksperimenteel = 8/20 = 2/5. Teoreties = 1/2. Die eksperimentele resultaat is laer as verwag, maar dit kan gebeur met ʼn klein aantal proewe.',
      checkMode: 'self',
    },

    // ── Q12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Sak het 6 rooi en 4 blou albasters. As Sipho een kies, dit terugsit, en weer kies, wat is die waarskynlikheid dat hy albei kere rooi kies?',
      answer: 'Waarskynlikheid van rooi elke keer = 6/10 = 3/5. Aangesien hy dit terugsit, vermenigvuldig: 3/5 × 3/5 = 9/25.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het al Graad 6 voltooi en waarskynlikheid onder die knie.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die studiegids.' },
    ],
  },
}
