import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (finance roles) ───────────────────────────────────────────
// principal P    → blue   (#2563eb)
// rate i         → orange (#ea580c)
// time n         → green  (#16a34a)
// final amount A → red    (#dc2626)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Finansies, Groei en Verval',
  grade: 10,
  sections: [

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SIMPLE GROWTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simple-growth',
      title: 'Enkelvoudige Groei — A = P(1 + ni)',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">Enkelvoudige groei (ook genoem <strong>enkelvoudige rente</strong>) bereken rente slegs op die oorspronklike ${bl('hoofsom')} — dit sluit nooit voorheen verdiende rente in nie. Dieselfde randbedrag word elke tydperk bygetel, sodat die totaal in ʼn reguit lyn groei. Die formule is ${re('A')} = ${bl('P')}(1 + ${gr('n')} × ${or('i')}), gebruik in enkelvoudige lenings, basiese spaarrekeninge en huurkoopooreenkomste.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('hoofsom P')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('koers i')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tyd n')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('finale bedrag A')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die enkelvoudige-groei-formule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.5em;font-weight:700;color:#374151;margin:0 0 8px 0;">${re('A')} = ${bl('P')}(1 + ${gr('n')} × ${or('i')})</p>` +
        `<p style="font-size:0.9em;color:#6b7280;margin:0;">waar ${or('i')} as ʼn desimale breuk geskryf word — bv. 6% → ${or('0,06')}</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">A — Finale Bedrag</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die totale waarde aan die einde van die belegging of lening.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">P — Hoofsom</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die oorspronklike bedrag wat belê of geleen word.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">n — Tydperke</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Aantal tydperke (gewoonlik jare) waarvoor die geld groei.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">i — Rentekoers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Jaarlikse koers as ʼn desimale breuk. Skakel om: 6% ÷ 100 = 0,06.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waar enkelvoudige rente gebruik word</p>` +
        `<p style="margin:0;color:#1e3a8a;">Enkelvoudige rente word gebruik in <strong>enkelvoudige lenings</strong>, <strong>huurkoop</strong> (goedere op krediet koop), en sommige <strong>basiese spaarrekeninge</strong>. Omdat dieselfde vaste bedrag elke tydperk bygetel word, is die groei <em>lineêr</em> — dit vorm ʼn reguit lyn op ʼn grafiek.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato belê R8 000 teen 6% enkelvoudige rente per jaar vir 5 jaar. Vind die finale bedrag.',
          answer: `${re('A')} = ${re('R10 400')}`,
          steps: [
            `Skryf die formule neer: ${re('A')} = ${bl('P')}(1 + ${gr('n')} × ${or('i')})`,
            `Vervang die waardes — ${bl('P')} = R8 000, ${gr('n')} = 5, ${or('i')} = 0,06:<br>${re('A')} = ${bl('8 000')}(1 + ${gr('5')} × ${or('0,06')})`,
            `Bereken die hakie: ${gr('5')} × ${or('0,06')} = 0,30, dus (1 + 0,30) = 1,30`,
            `Vermenigvuldig: ${re('A')} = ${bl('8 000')} × 1,30 = <strong>R10 400</strong> ✓`,
          ],
        },
        {
          question: 'Sipho koop meubels ter waarde van R12 000 op huurkoop teen 15% enkelvoudige rente oor 3 jaar. Vind sy totale terugbetaling.',
          answer: `${re('A')} = ${re('R17 400')}`,
          steps: [
            `Skryf die formule neer: ${re('A')} = ${bl('P')}(1 + ${gr('n')} × ${or('i')})`,
            `Vervang: ${bl('P')} = R12 000, ${gr('n')} = 3, ${or('i')} = 0,15 (15% ÷ 100):<br>${re('A')} = ${bl('12 000')}(1 + ${gr('3')} × ${or('0,15')})`,
            `Bereken die hakie: ${gr('3')} × ${or('0,15')} = 0,45, dus (1 + 0,45) = 1,45`,
            `Vermenigvuldig: ${re('A')} = ${bl('12 000')} × 1,45 = <strong>R17 400</strong>`,
            `<strong>Antwoord:</strong> Sipho se totale terugbetaling is R17 400. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Zanele belê R4 000 teen 8% enkelvoudige rente per jaar vir 2 jaar. Bereken die finale bedrag.',
          answer: 'R4 640',
          checkMode: 'auto',
          correctAnswer: 'R4640',
          correctAnswers: ['R4640', '4640', 'R4 640', '4 640'],
          explanation: 'A = P(1 + ni)\nA = 4 000(1 + 2 × 0,08)\nA = 4 000(1 + 0,16)\nA = 4 000 × 1,16\nA = R4 640 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Thandi neem ʼn lening van R15 000 teen 10% enkelvoudige rente per jaar vir 3 jaar.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vind die totale bedrag verskuldig na 3 jaar.',
              correctAnswer: 'R19500',
              correctAnswers: ['R19500', '19500', 'R19 500', '19 500'],
              explanation: 'A = 15 000(1 + 3 × 0,10) = 15 000(1,30) = R19 500 ✓',
            },
            {
              label: 'b) Vind die totale rente betaal.',
              correctAnswer: 'R4500',
              correctAnswers: ['R4500', '4500', 'R4 500', '4 500'],
              explanation: 'Rente = A − P = R19 500 − R15 000 = R4 500 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Na 4 jaar van enkelvoudige rente teen 6% per jaar het ʼn belegging tot R12 400 gegroei. Vind die oorspronklike hoofsom.',
          answer: 'R10 000',
          checkMode: 'auto',
          correctAnswer: 'R10000',
          correctAnswers: ['R10000', '10000', 'R10 000', '10 000'],
          explanation: 'A = P(1 + ni)\n12 400 = P(1 + 4 × 0,06)\n12 400 = P(1,24)\nP = 12 400 ÷ 1,24\nP = R10 000 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining simple interest formula A=P(1+ni) with colour coded worked examples showing hire purchase and savings contexts" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Linear graph of A against n for simple interest showing constant straight-line growth with principal blue rate orange time green and final amount red" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPOUND GROWTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'compound-growth',
      title: 'Saamgestelde Groei — A = P(1 + i)ⁿ',
      icon: '↑',
      explanation:
        `<p style="margin-bottom:16px;">Saamgestelde groei bereken rente op die ${bl('hoofsom')} <em>plus</em> enige voorheen verdiende rente — die bedrag groei elke tydperk op homself. Dit veroorsaak eksponensiële (geboë) groei eerder as die lineêre groei van enkelvoudige rente. Die formule is ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup style="font-weight:700;color:#16a34a;">n</sup>, gebruik in spaarrekeninge, bevolkingsgroei en inflasieberekeninge.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('hoofsom P')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rentekoers i')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('groei oor tyd n')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die saamgestelde-groei-formule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.5em;font-weight:700;color:#374151;margin:0 0 8px 0;">${re('A')} = ${bl('P')}(1 + ${or('i')})<sup style="font-weight:700;color:#16a34a;">n</sup></p>` +
        `<p style="font-size:0.9em;color:#6b7280;margin:0;">waar ${or('i')} ʼn desimale breuk is en ${gr('n')} die eksponent (mag) is</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Enkelvoudige teenoor saamgestelde rente vergelyk</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Enkelvoudige Rente</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Rente word elke tydperk slegs op die oorspronklike ${bl('hoofsom')} bereken.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Groei is <strong>lineêr</strong> — dieselfde bedrag word elke jaar bygetel.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Saamgestelde Rente</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Rente word bereken op die ${bl('hoofsom')} PLUS alle voorheen verdiende rente.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Groei is <strong>eksponensieel</strong> — meer word elke jaar bygetel as die jaar tevore.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Saamgestelde rente groei vinniger met verloop van tyd</p>` +
        `<p style="margin:0;color:#1e3a8a;">Hoe langer die beleggingstydperk, hoe groter die gaping tussen enkelvoudige en saamgestelde rente. Oor kort tydperke (1–2 jaar) is die verskil klein; oor lang tydperke (10+ jaar) lewer saamgestelde rente aansienlik meer — dit word die <strong>krag van saamstelling</strong> genoem.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo belê R5 000 teen 8% saamgestelde rente per jaar vir 4 jaar. Vind die finale bedrag.',
          answer: `${re('A')} ≈ ${re('R6 802.44')}`,
          steps: [
            `Skryf die formule neer: ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup>n</sup>`,
            `Vervang: ${bl('P')} = R5 000, ${or('i')} = 0,08, ${gr('n')} = 4:<br>${re('A')} = ${bl('5 000')}(1 + ${or('0,08')})<sup style="color:#16a34a;font-weight:700;">4</sup>`,
            `Vereenvoudig die hakie: (1 + ${or('0,08')}) = 1,08`,
            `Bereken die mag: (1,08)<sup style="color:#16a34a;font-weight:700;">4</sup> ≈ 1,36049`,
            `Vermenigvuldig: ${re('A')} = ${bl('5 000')} × 1,36049 ≈ <strong>R6 802.44</strong> ✓`,
          ],
        },
        {
          question: 'ʼn Dorp se bevolking van 25 000 groei teen 3% per jaar. Vind die bevolking na 10 jaar (afgerond na die naaste heelgetal).',
          answer: `Bevolking ≈ ${re('33 598')}`,
          steps: [
            `Skryf die formule neer: ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup>n</sup>`,
            `Vervang: ${bl('P')} = 25 000, ${or('i')} = 0,03, ${gr('n')} = 10:<br>${re('A')} = ${bl('25 000')}(1,03)<sup style="color:#16a34a;font-weight:700;">10</sup>`,
            `Bereken: (1,03)<sup style="color:#16a34a;font-weight:700;">10</sup> ≈ 1,34392`,
            `Vermenigvuldig: ${re('A')} = ${bl('25 000')} × 1,34392 ≈ 33 598`,
            `<strong>Antwoord:</strong> Die bevolking na 10 jaar is ongeveer ${re('33 598')} mense. ✓`,
          ],
        },
        {
          question: 'Amahle vergelyk enkelvoudige en saamgestelde rente op R10 000 teen 7% oor 6 jaar. Vind die verskil.',
          answer: `Verskil ≈ ${re('R807.30')} ten gunste van saamgestelde rente`,
          steps: [
            `<strong>Enkelvoudige rente:</strong> ${re('A')} = ${bl('10 000')}(1 + ${gr('6')} × ${or('0,07')}) = 10 000(1,42) = <strong>R14 200</strong>`,
            `<strong>Saamgestelde rente:</strong> ${re('A')} = ${bl('10 000')}(1,07)<sup style="color:#16a34a;font-weight:700;">6</sup>`,
            `Bereken: (1,07)<sup style="color:#16a34a;font-weight:700;">6</sup> ≈ 1,50073`,
            `Saamgestelde bedrag: ${re('A')} = ${bl('10 000')} × 1,50073 ≈ <strong>R15 007.30</strong>`,
            `<strong>Verskil:</strong> R15 007.30 − R14 200 ≈ ${re('R807.30')} meer met saamgestelde rente ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Lebo belê R3 000 teen 5% saamgestelde rente per jaar vir 3 jaar. Bereken die finale bedrag (rond af tot 2 desimale plekke).',
          answer: 'R3 472.88',
          checkMode: 'auto',
          correctAnswer: 'R3472.88',
          correctAnswers: ['R3472.88', '3472.88', 'R3 472.88', '3 472.88'],
          explanation: 'A = 3 000(1,05)³\n(1,05)³ = 1,157625\nA = 3 000 × 1,157625 = R3 472.88 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Nomsa belê R8 000 teen 7% per jaar vir 5 jaar.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vind die finale bedrag met enkelvoudige rente.',
              correctAnswer: 'R10800',
              correctAnswers: ['R10800', '10800', 'R10 800', '10 800'],
              explanation: 'A = 8 000(1 + 5 × 0,07) = 8 000(1,35) = R10 800 ✓',
            },
            {
              label: 'b) Vind die finale bedrag met saamgestelde rente (rond af tot 2 desimale plekke).',
              correctAnswer: 'R11220.40',
              correctAnswers: ['R11220.40', '11220.40', 'R11 220.40', '11 220.40', 'R11220.39', '11220.39'],
              explanation: 'A = 8 000(1,07)⁵\n(1,07)⁵ ≈ 1,40255\nA ≈ 8 000 × 1,40255 ≈ R11 220.40 ✓',
            },
            {
              label: 'c) Hoeveel meer verdien saamgestelde rente?',
              correctAnswer: 'R420.40',
              correctAnswers: ['R420.40', '420.40', 'R420', '420', 'R420.39', '420.39'],
              explanation: 'Verskil: R11 220.40 − R10 800 = R420.40 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Stad se bevolking van 150 000 groei teen 4% saamgestelde groei per jaar.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vind die bevolking na 5 jaar (rond af na die naaste heelgetal).',
              correctAnswer: '182497',
              correctAnswers: ['182497', '182 497'],
              explanation: 'A = 150 000(1,04)⁵\n(1,04)⁵ ≈ 1,21665\nA ≈ 150 000 × 1,21665 ≈ 182 497 ✓',
            },
            {
              label: 'b) Vind die bevolking na 10 jaar (rond af na die naaste heelgetal).',
              correctAnswer: '222036',
              correctAnswers: ['222036', '222 036'],
              explanation: 'A = 150 000(1,04)¹⁰\n(1,04)¹⁰ ≈ 1,48024\nA ≈ 150 000 × 1,48024 ≈ 222 036 ✓',
            },
            {
              label: 'c) Met hoeveel mense neem die bevolking toe tussen jaar 5 en jaar 10?',
              correctAnswer: '39539',
              correctAnswers: ['39539', '39 539', '39540', '39 540'],
              explanation: '222 036 − 182 497 = 39 539 mense ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining compound interest formula A=P(1+i)^n with colour coded examples showing savings and population growth and comparison with simple interest" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Exponential growth curve comparing simple and compound interest over 10 years on the same axes with principal blue interest rate orange and exponential growth curve green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING FOR n
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-for-n',
      title: 'Oplos vir n in Groeiprobleme (Probeer en Verbeter)',
      icon: 'n',
      explanation:
        `<p style="margin-bottom:16px;">Soms ken ons die ${or('teikenbedrag')} en die groeikoers, maar moet ${bl('n')} vind — hoeveel tydperke dit neem om die teiken te bereik. Omdat ${bl('n')} as ʼn eksponent voorkom, kan ons dit nie op hierdie vlak met basiese algebra isoleer nie. In plaas daarvan gebruik ons <strong>probeer en verbeter</strong>: toets waardes van ${bl('n')}, kyk of ons te laag of te hoog is, en verfyn ons antwoord stap vir stap.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('probeerwaardes van n')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('teikenvermenigvuldiger')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('verfynde antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe vir probeer en verbeter</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Stel die vergelyking op')} — Skryf die voorwaarde wat jy moet bevredig, bv. (1 + i)<sup>n</sup> = ${or('teikenvermenigvuldiger')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Probeer ʼn waarde')} — Kies ʼn beginwaarde van ${bl('n')} en bereken (1 + i)<sup>n</sup>. ʼn Redelike beginpunt is n = 5.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vergelyk</strong> — As jou resultaat onder die ${or('teiken')} is, probeer ʼn hoër ${bl('n')}. As dit hoër is, probeer ʼn laer ${bl('n')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Verfyn')} — Gaan voort totdat jy die kleinste heelgetal-${bl('n')} vind wat die voorwaarde bereik of oorskry. Dit is jou ${gr('verfynde antwoord')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Logaritmes kom later</p>` +
        `<p style="margin:0;color:#1e3a8a;">In latere grade sal jy leer om logaritmes te gebruik om presies vir ${bl('n')} in een algebraïese stap op te los. Op Graad 10-vlak is probeer en verbeter die korrekte metode — dit ontwikkel jou getalbegrip en begrip van eksponensiële groeipatrone.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Hoe lank sal dit ʼn bevolking van 1,2 miljoen neem om te verdubbel as dit teen 12% per jaar groei?',
          answer: `Ongeveer ${gr('6')} jaar`,
          steps: [
            `Ons moet (1,12)<sup>${bl('n')}</sup> = ${or('2')} kry (verdubbeling beteken die vermenigvuldiger moet 2 bereik).`,
            `${bl('Probeer n = 5:')} (1,12)<sup>5</sup> ≈ 1,762 — dit is onder die ${or('teiken van 2')}, dus is n = 5 te laag.`,
            `${bl('Probeer n = 6:')} (1,12)<sup>6</sup> ≈ 1,974 — baie naby aan die ${or('teiken van 2')} maar nog nie bereik nie.`,
            `${bl('Probeer n = 7:')} (1,12)<sup>7</sup> ≈ 2,211 — dit oorskry die ${or('teiken van 2')}.`,
            `<strong>Gevolgtrekking:</strong> Aangesien bevolking in heel jare getel moet word, neem dit ongeveer ${gr('n ≈ 6')} jaar (na bo afgerond om te verseker dat verdubbeling bereik word). ✓`,
          ],
        },
        {
          question: 'Sipho belê geld teen 9% saamgestelde rente en wil weet hoeveel jare dit neem om met 50% te groei.',
          answer: `Ongeveer ${gr('5')} jaar`,
          steps: [
            `ʼn Toename van 50% beteken die bedrag word 1,5 keer die oorspronklike, dus moet ons (1,09)<sup>${bl('n')}</sup> = ${or('1,5')} kry.`,
            `${bl('Probeer n = 4:')} (1,09)<sup>4</sup> ≈ 1,412 — onder die ${or('teiken van 1,5')}, dus is n = 4 te laag.`,
            `${bl('Probeer n = 5:')} (1,09)<sup>5</sup> ≈ 1,539 — dit oorskry net die ${or('teiken van 1,5')}.`,
            `<strong>Gevolgtrekking:</strong> Dit neem ongeveer ${gr('n = 5')} jaar vir Sipho se belegging om met 50% te groei. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Hoeveel jare sal dit ʼn belegging neem om te verdubbel as dit teen 10% saamgestelde rente per jaar groei? Gebruik probeer en verbeter om die kleinste n te vind waar (1,10)ⁿ ≥ 2.',
          answer: '8 jaar',
          checkMode: 'auto',
          correctAnswer: '8',
          correctAnswers: ['8', '8 jaar'],
          explanation: 'Probeer n = 7: (1,10)⁷ ≈ 1,949 — te laag.\nProbeer n = 8: (1,10)⁸ ≈ 2,144 — oorskry 2.\nAntwoord: 8 jaar ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Bedrag groei teen 15% saamgestelde rente per jaar. Gebruik probeer en verbeter.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Hoeveel jare tot die bedrag verdriedubbel? Vind die kleinste n waar (1,15)ⁿ ≥ 3.',
              correctAnswer: '8',
              correctAnswers: ['8', '8 jaar'],
              explanation: 'Probeer n = 7: (1,15)⁷ ≈ 2,660 — te laag.\nProbeer n = 8: (1,15)⁸ ≈ 3,059 — oorskry 3.\nAntwoord: 8 jaar ✓',
            },
            {
              label: 'b) Hoeveel jare tot die bedrag verviervoudig? Vind die kleinste n waar (1,15)ⁿ ≥ 4.',
              correctAnswer: '10',
              correctAnswers: ['10', '10 jaar'],
              explanation: 'Probeer n = 9: (1,15)⁹ ≈ 3,518 — te laag.\nProbeer n = 10: (1,15)¹⁰ ≈ 4,046 — oorskry 4.\nAntwoord: 10 jaar ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: "Sipho se R20 000-belegging teen 9% saamgestelde rente per jaar moet tot minstens R32 000 groei. Gebruik probeer en verbeter om die minimum aantal heel jare te vind wat nodig is.",
          answer: '6 jaar',
          checkMode: 'auto',
          correctAnswer: '6',
          correctAnswers: ['6', '6 jaar'],
          explanation: 'Ons benodig 20 000(1,09)ⁿ ≥ 32 000, d.w.s. (1,09)ⁿ ≥ 1,6.\nProbeer n = 5: (1,09)⁵ ≈ 1,539 — te laag.\nProbeer n = 6: (1,09)⁶ ≈ 1,677 — oorskry 1,6.\nAntwoord: minimum 6 jaar ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating trial and improvement to find n in compound growth problems showing how to test refine and interpret results" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Table showing trial values of n in blue against calculated multiplier versus target value in orange with the refined answer highlighted in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — FOREIGN EXCHANGE RATES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'foreign-exchange-rates',
      title: 'Implikasies van Wisselende Wisselkoerse',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>${bl('wisselkoers')}</strong> vertel jou hoeveel van een geldeenheid jy vir een eenheid van ʼn ander ontvang. Wisselkoerse <strong>wissel</strong> (verander voortdurend) op grond van ekonomiese faktore soos inflasie, rentekoerse en handelsbalanse. Om wisselkoerse te verstaan help ons om kostes vir internasionale reise, ingevoerde goedere en oorsese studiegelde te bereken.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('wisselkoers')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('geldeenheidomskakeling')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale bedrag')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Omskakelingsreëls</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Rand → Buitelandse geldeenheid</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;"><strong>Vermenigvuldig</strong> rand met die ${bl('wisselkoers')} (buitelandse eenhede per rand).</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">bv. R15 000 × 0,049 = ${gr('€735')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Buitelandse geldeenheid → Rand</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;"><strong>Deel</strong> die buitelandse bedrag deur die ${bl('wisselkoers')} (buitelandse eenhede per rand).</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">bv. $250 ÷ 0,054 = ${gr('R4 629.63')}</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Implikasies van ʼn swakker of sterker Rand</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Swakker Rand (koers val)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Jy kry <strong>minder</strong> buitelandse eenhede per rand.</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>Invoere kos meer</strong> — brandstof, elektronika en buitelandse studiegelde word duurder in rand.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Sterker Rand (koers styg)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Jy kry <strong>meer</strong> buitelandse eenhede per rand.</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>Invoere kos minder</strong> — maar Suid-Afrikaanse uitvoere word duurder vir buitelandse kopers.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kontroleer altyd die formaat van die wisselkoers</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Koers geskryf as <strong>R1 = $0,054</strong> beteken vermenigvuldig rand met 0,054 om dollars te kry, of deel dollars deur 0,054 om rand te kry. Bevestig altyd of die koers buitelandse eenhede per rand of rand per buitelandse eenheid gee voordat jy bereken.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'As R1 = $0,054 (USD), vind die koste in Rand van ʼn $250-item.',
          answer: `${gr('≈ R4 629.63')}`,
          steps: [
            `Die ${bl('wisselkoers')} is R1 = $0,054, dus $1 = R(1 ÷ 0,054).`,
            `Om ${or('van dollar na rand om te skakel')}: deel die dollarbedrag deur die wisselkoers.`,
            `${gr('Koste in Rand')} = $250 ÷ ${bl('0,054')} ≈ ${gr('R4 629.63')} ✓`,
          ],
        },
        {
          question: 'Lerato wil R15 000 na Euro omskakel teen ʼn wisselkoers van R1 = €0,049. Vind die bedrag in Euro.',
          answer: `${gr('€735')}`,
          steps: [
            `Die ${bl('wisselkoers')} is R1 = €0,049.`,
            `Om ${or('van rand na euro om te skakel')}: vermenigvuldig die randbedrag met die wisselkoers.`,
            `${gr('Bedrag in Euro')} = R15 000 × ${bl('0,049')} = ${gr('€735')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'As R1 = $0,054, skakel R3 000 om na Amerikaanse dollars.',
          answer: '$162',
          checkMode: 'auto',
          correctAnswer: '$162',
          correctAnswers: ['$162', '162', '$162.00'],
          explanation: 'Om Rand na Dollar om te skakel: vermenigvuldig met die wisselkoers.\nR3 000 × 0,054 = $162 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Die wisselkoers is R1 = £0,043 (Britse pond).',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skakel R25 000 om na Britse pond.',
              correctAnswer: '£1075',
              correctAnswers: ['£1075', '1075', '£1 075', '1 075', '£1075.00'],
              explanation: 'R25 000 × 0,043 = £1 075 ✓',
            },
            {
              label: 'b) ʼn Item kos £850 in die VK. Vind die koste in Rand (rond af tot 2 desimale plekke).',
              correctAnswer: 'R19767.44',
              correctAnswers: ['R19767.44', '19767.44', 'R19 767.44', '19 767.44'],
              explanation: 'Koste in Rand = £850 ÷ 0,043 ≈ R19 767.44 ✓',
            },
            {
              label: 'c) Die Rand verswak na R1 = £0,038. Vind die nuwe Rand-koste van dieselfde £850-item (rond af tot 2 desimale plekke).',
              correctAnswer: 'R22368.42',
              correctAnswers: ['R22368.42', '22368.42', 'R22 368.42', '22 368.42', 'R22368.43', '22368.43'],
              explanation: 'Nuwe koste in Rand = £850 ÷ 0,038 ≈ R22 368.42\nDie swakker Rand maak die invoer duurder. ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Suid-Afrikaanse student moet studiegelde van $12 500 betaal om oorsee te studeer.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Teen R1 = $0,054, vind die koste in Rand (rond af tot 2 desimale plekke).',
              correctAnswer: 'R231481.48',
              correctAnswers: ['R231481.48', '231481.48', 'R231 481.48', '231 481.48'],
              explanation: 'Koste = $12 500 ÷ 0,054 ≈ R231 481.48 ✓',
            },
            {
              label: 'b) Die Rand versterk na R1 = $0,060. Vind die nuwe koste in Rand (rond af tot 2 desimale plekke).',
              correctAnswer: 'R208333.33',
              correctAnswers: ['R208333.33', '208333.33', 'R208 333.33', '208 333.33'],
              explanation: 'Nuwe koste = $12 500 ÷ 0,060 ≈ R208 333.33 ✓',
            },
            {
              label: 'c) Hoeveel spaar die student weens die versterking van die Rand (rond af tot 2 desimale plekke)?',
              correctAnswer: 'R23148.15',
              correctAnswers: ['R23148.15', '23148.15', 'R23 148.15', '23 148.15'],
              explanation: 'Besparing = R231 481.48 − R208 333.33 = R23 148.15\nʼn Sterker Rand verminder die Rand-koste van ingevoerde dienste. ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining foreign exchange rates how to convert between currencies using multiplication and division and what happens when the Rand weakens or strengthens" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing currency conversion arrows between Rands and foreign currencies with exchange rate in blue conversion operation in orange and final converted amount in green" />',
    },
  ],

  topicPractice: [
    // ── V1 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken die enkelvoudige rente op R4 000 teen 5% per jaar vir 3 jaar.',
      answer: 'R600',
      checkMode: 'auto',
      correctAnswer: 'R600',
      correctAnswers: ['R600', '600'],
      explanation: 'ER = P × n × i = 4 000 × 3 × 0,05 = R600 ✓',
    },

    // ── V2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die finale bedrag na 6 jaar as R7 500 teen 6% enkelvoudige rente belê word.',
      answer: 'R10,200',
      checkMode: 'auto',
      correctAnswer: 'R10200',
      correctAnswers: ['R10200', '10200', 'R10 200', '10 200'],
      explanation: 'A = P(1 + ni) = 7 500(1 + 6 × 0,06) = 7 500(1,36) = R10 200 ✓',
    },

    // ── V3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê enkelvoudige rente van R500 oor 2 jaar op R5 000 beteken die koers was 10%. Kontroleer sy redenasie.',
      answer: 'ER = P × n × i. 500 = 5 000 × 2 × i. i = 0,05 = 5%, nie 10% nie. Hy is verkeerd.',
      checkMode: 'self',
    },

    // ── V4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken die saamgestelde-rente-bedrag op R3 000 teen 4% per jaar vir 5 jaar.',
      answer: 'R3,649.96',
      checkMode: 'auto',
      correctAnswer: 'R3649.96',
      correctAnswers: ['R3649.96', '3649.96', 'R3 649.96', '3 649.96'],
      explanation: 'A = 3 000(1,04)⁵ = 3 000 × 1,21665 ≈ R3 649.96 ✓',
    },

    // ── V5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die finale bedrag na 8 jaar as R6 000 teen 7% saamgestelde rente belê word.',
      answer: 'R10,305.49',
      checkMode: 'auto',
      correctAnswer: 'R10305.49',
      correctAnswers: ['R10305.49', '10305.49', 'R10 305.49', '10 305.49'],
      explanation: 'A = 6 000(1,07)⁸ = 6 000 × 1,71819 ≈ R10 305.49 ✓',
    },

    // ── V6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato vergelyk enkelvoudige en saamgestelde rente op R8 000 teen 6% oor 4 jaar. Vind die verskil tussen die twee metodes.',
      answer: 'Enkelvoudig: 8 000(1 + 4 × 0,06) = R9,920. Saamgesteld: 8 000(1,06)⁴ ≈ R10,096.91. Verskil ≈ R176.91.',
      checkMode: 'self',
    },

    // ── V7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Bevolking van 40,000 groei teen 4% per jaar. Vind die bevolking na 7 jaar, afgerond na die naaste heelgetal.',
      answer: '52,633',
      checkMode: 'auto',
      correctAnswer: '52633',
      correctAnswers: ['52633', '52 633'],
      explanation: 'A = 40 000(1,04)⁷ = 40 000 × 1,31593 ≈ 52 633 ✓',
    },

    // ── V8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Hoe lank sal dit ʼn belegging neem om te verdubbel teen 10% saamgestelde rente, deur probeer en verbeter te gebruik?',
      answer: 'Benodig (1,10)ⁿ = 2. Probeer n = 7: 1,10⁷ ≈ 1,949 (naby). Probeer n = 8: 1,10⁸ ≈ 2,144. Dit neem ongeveer 8 jaar (na bo afgerond).',
      checkMode: 'self',
    },

    // ── V9 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo belê R20,000 teen 5% saamgestelde rente. Vind hoeveel jare dit neem om tot minstens R25,000 te groei, deur probeer en verbeter te gebruik.',
      answer: 'Benodig (1,05)ⁿ = 1,25. Probeer n = 4: 1,05⁴ ≈ 1,216. Probeer n = 5: 1,05⁵ ≈ 1,276. Dit neem ongeveer 5 jaar.',
      checkMode: 'self',
    },

    // ── V10 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'As R1 = $0,06, vind die koste in Rand van ʼn $300-item.',
      answer: 'R5,000',
      checkMode: 'auto',
      correctAnswer: 'R5000',
      correctAnswers: ['R5000', '5000', 'R5 000', '5 000'],
      explanation: 'Koste in Rand = $300 ÷ 0,06 = R5 000 ✓',
    },

    // ── V11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Skakel R10,000 om na Britse Pond teen ʼn wisselkoers van R1 = £0,043.',
      answer: '£430',
      checkMode: 'auto',
      correctAnswer: '£430',
      correctAnswers: ['£430', '430', '£430.00'],
      explanation: 'R10 000 × 0,043 = £430 ✓',
    },

    // ── V12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle koop ʼn item wat $450 (USD) kos wanneer R1 = $0,055. Vind die koste in Rand, afgerond na die naaste Rand.',
      answer: '450 ÷ 0,055 ≈ R8,182.',
      checkMode: 'self',
    },

    // ── V13 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho koop ʼn TV ter waarde van R9,000 op huurkoop teen 18% enkelvoudige rente oor 2 jaar. Vind sy totale terugbetaling.',
      answer: 'R12,240',
      checkMode: 'auto',
      correctAnswer: 'R12240',
      correctAnswers: ['R12240', '12240', 'R12 240', '12 240'],
      explanation: 'A = 9 000(1 + 2 × 0,18) = 9 000(1,36) = R12 240 ✓',
    },

    // ── V14 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato belê R15,000 teen 9% saamgestelde rente vir 10 jaar. Vind die finale bedrag, afgerond na die naaste Rand.',
      answer: 'R35,516',
      checkMode: 'auto',
      correctAnswer: 'R35516',
      correctAnswers: ['R35516', '35516', 'R35 516', '35 516'],
      explanation: 'A = 15 000(1,09)¹⁰ = 15 000 × 2,36736 ≈ R35 516 ✓',
    },

    // ── V15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Motor met ʼn waarde van R250,000 verval deur enkelvoudige verval teen 12% per jaar. Vind sy waarde na 5 jaar.',
      answer: 'A = P(1 − ni) = 250 000(1 − 5 × 0,12) = 250 000(0,4) = R100,000.',
      checkMode: 'self',
    },

    // ── V16 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê om die rentekoers te verdubbel, verdubbel altyd die finale bedrag in saamgestelde rente. Is hy korrek? Verduidelik met ʼn voorbeeld.',
      answer: 'Nee — byvoorbeeld R1,000 teen 5% vir 10 jaar gee ≈ R1,628.89, terwyl teen 10% vir 10 jaar dit ≈ R2,593.74 gee, wat nie eenvoudig dubbel is nie, aangesien saamgestelde groei eksponensieel is, nie lineêr nie.',
      checkMode: 'self',
    },

    // ── V17 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Amahle se bevolking van 60,000 groei teen 2,5% per jaar. Vind hoeveel jare dit neem voordat die bevolking 80,000 oorskry, deur probeer en verbeter te gebruik.",
      answer: 'Benodig (1,025)ⁿ = 1,333. Probeer n = 11: 1,025¹¹ ≈ 1,319. Probeer n = 12: 1,025¹² ≈ 1,352. Dit neem ongeveer 12 jaar.',
      checkMode: 'self',
    },

    // ── V18 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho skakel R5,000 om na Amerikaanse Dollar teen R1 = $0,055, en dan terug na Rand ʼn maand later teen R1 = $0,052. Vind sy Rand-waarde na albei omskakelings, en verduidelik waarom dit verander het.',
      answer: 'Eerste omskakeling: 5 000 × 0,055 = $275. Tweede omskakeling terug: 275 ÷ 0,052 ≈ R5,288.46. Die waarde het toegeneem omdat die Rand teenoor die Dollar verswak het (elke Dollar koop nou meer Rand), wat die omskakeling terug bevoordeel het.',
      checkMode: 'self',
    },

    // ── V19 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vergelyk die belegging van R12,000 teen 6% enkelvoudige rente vir 8 jaar met 6% saamgestelde rente vir 8 jaar. Vind albei finale bedrae en die verskil.',
      answer: 'Enkelvoudig: 12 000(1 + 8 × 0,06) = R17,760. Saamgesteld: 12 000(1,06)⁸ ≈ R19,126.05. Verskil ≈ R1,366.05.',
      checkMode: 'self',
    },

    // ── V20 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato belê R18,000 teen ʼn onbekende saamgestelde rentekoers en na 6 jaar groei dit tot R24,000. Gebruik probeer en verbeter om die rentekoers na die naaste persent te skat.',
      answer: 'Benodig (1 + i)⁶ = 24 000/18 000 = 1,333. Probeer i = 5%: 1,05⁶ ≈ 1,340 (naby). Die rentekoers is ongeveer 5%.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het finansies, groei en verval bemeester.' },
      { minScore: 15, message: 'Puik werk!' },
      { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae) — geen diagramme nie, suiwer formule-/woordprobleem-inhoud
    // Blok 1 (0-3):   Enkelvoudige rente berekeninge
    // Blok 2 (4-7):   Saamgestelde rente berekeninge
    // Blok 3 (8-10):  Vergelyking van enkelvoudige en saamgestelde rente
    // Blok 4 (11-13): Huurkoopprobleme
    // Blok 5 (14-16): Enkelvoudige groei-/verval-woordprobleme
    // Blok 6 (17-19): Gekombineerde multi-stap probleme
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Enkelvoudige rente (Easy, Easy, Medium, Medium)
        { difficulty: 'Easy', question: 'Bereken die finale bedrag as R2 500 teen 6% enkelvoudige rente per jaar vir 3 jaar belê word.', checkMode: 'auto', correctAnswer: 'R2950', correctAnswers: ['R2950', '2950', 'R2 950', '2 950', 'R2950,00', 'R2 950,00'], answer: 'R2 950', explanation: 'A = P(1 + ni) = 2 500(1 + 3 × 0,06) = 2 500(1,18) = R2 950 ✓' },
        { difficulty: 'Easy', question: 'Bereken die finale bedrag as R5 000 teen 8% enkelvoudige rente per jaar vir 2 jaar belê word.', checkMode: 'auto', correctAnswer: 'R5800', correctAnswers: ['R5800', '5800', 'R5 800', '5 800', 'R5800,00', 'R5 800,00'], answer: 'R5 800', explanation: 'A = P(1 + ni) = 5 000(1 + 2 × 0,08) = 5 000(1,16) = R5 800 ✓' },
        { difficulty: 'Medium', question: 'Thabo belê R9 000 teen 5% enkelvoudige rente per jaar vir 4 jaar. Vind die totale rente verdien (nie die finale bedrag nie).', checkMode: 'auto', correctAnswer: 'R1800', correctAnswers: ['R1800', '1800', 'R1 800', '1 800', 'R1800,00', 'R1 800,00'], answer: 'R1 800', explanation: 'Rente = P × n × i = 9 000 × 4 × 0,05 = R1 800 ✓' },
        { difficulty: 'Medium', question: 'ʼn Belegging wat 5% enkelvoudige rente per jaar verdien, groei na R6 000 na 4 jaar. Vind die oorspronklike hoofsom.', checkMode: 'auto', correctAnswer: 'R5000', correctAnswers: ['R5000', '5000', 'R5 000', '5 000', 'R5000,00', 'R5 000,00'], answer: 'R5 000', explanation: 'A = P(1 + ni)\n6 000 = P(1 + 4 × 0,05) = P(1,20)\nP = 6 000 ÷ 1,20 = R5 000 ✓' },

        // Blok 2 — Saamgestelde rente (Easy, Medium, Medium, Hard)
        { difficulty: 'Easy', question: 'Bereken die finale bedrag as R2 000 teen 10% saamgestelde rente per jaar vir 2 jaar belê word.', checkMode: 'auto', correctAnswer: 'R2420', correctAnswers: ['R2420', '2420', 'R2 420', '2 420', 'R2420,00', 'R2 420,00'], answer: 'R2 420', explanation: 'A = P(1 + i)ⁿ = 2 000(1,10)² = 2 000 × 1,21 = R2 420 ✓' },
        { difficulty: 'Medium', question: 'Bereken die finale bedrag as R3 200 teen 5% saamgestelde rente per jaar vir 3 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R3704.40', correctAnswers: ['R3704.40', '3704.40', 'R3 704.40', '3 704.40', 'R3704,40', 'R3 704,40', '3704,40'], answer: 'R3 704,40', explanation: 'A = 3 200(1,05)³ = 3 200 × 1,157625 ≈ R3 704,40 ✓' },
        { difficulty: 'Medium', question: 'Bereken die finale bedrag as R4 500 teen 6% saamgestelde rente per jaar vir 4 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R5681.15', correctAnswers: ['R5681.15', '5681.15', 'R5 681.15', '5 681.15', 'R5681,15', 'R5 681,15'], answer: 'R5 681,15', explanation: 'A = 4 500(1,06)⁴ = 4 500 × 1,26247696 ≈ R5 681,15 ✓' },
        { difficulty: 'Hard', question: 'Bereken die finale bedrag as R12 000 teen 7% saamgestelde rente per jaar vir 6 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R18008.76', correctAnswers: ['R18008.76', '18008.76', 'R18 008.76', '18 008.76', 'R18008,76', 'R18 008,76'], answer: 'R18 008,76', explanation: 'A = 12 000(1,07)⁶ = 12 000 × 1,50073 ≈ R18 008,76 ✓' },

        // Blok 3 — Vergelyking van enkelvoudige en saamgestelde rente (Medium, Hard, Hard)
        { difficulty: 'Medium', question: 'Vergelyk die belegging van R7 000 teen 7% vir 4 jaar met enkelvoudige rente teenoor saamgestelde rente. Vind die verskil tussen die twee finale bedrae (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R215.57', correctAnswers: ['R215.57', '215.57', 'R215,57', '215,57'], answer: 'R215,57', explanation: 'Enkelvoudig: 7 000(1 + 4 × 0,07) = R8 960.\nSaamgesteld: 7 000(1,07)⁴ ≈ R9 175,57.\nVerskil ≈ R215,57 ✓' },
        { difficulty: 'Hard', question: 'Vergelyk die belegging van R9 000 teen 6% vir 8 jaar met enkelvoudige rente teenoor saamgestelde rente. Vind die verskil tussen die twee finale bedrae (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R1024.63', correctAnswers: ['R1024.63', '1024.63', 'R1 024.63', '1 024.63', 'R1024,63', 'R1 024,63'], answer: 'R1 024,63', explanation: 'Enkelvoudig: 9 000(1 + 8 × 0,06) = R13 320.\nSaamgesteld: 9 000(1,06)⁸ ≈ R14 344,63.\nVerskil ≈ R1 024,63 ✓' },
        { difficulty: 'Hard', question: 'Vergelyk die belegging van R5 000 teen 8% vir 6 jaar met enkelvoudige rente teenoor saamgestelde rente. Vind die verskil tussen die twee finale bedrae (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R534.37', correctAnswers: ['R534.37', '534.37', 'R534,37'], answer: 'R534,37', explanation: 'Enkelvoudig: 5 000(1 + 6 × 0,08) = R7 400.\nSaamgesteld: 5 000(1,08)⁶ ≈ R7 934,37.\nVerskil ≈ R534,37 ✓' },

        // Blok 4 — Huurkoop (Medium, Medium, Hard)
        { difficulty: 'Medium', question: 'Sipho koop ʼn yskas ter waarde van R6 000 op huurkoop teen 15% enkelvoudige rente oor 2 jaar, sonder ʼn deposito. Vind sy totale terugbetaling.', checkMode: 'auto', correctAnswer: 'R7800', correctAnswers: ['R7800', '7800', 'R7 800', '7 800', 'R7800,00', 'R7 800,00'], answer: 'R7 800', explanation: 'A = P(1 + ni) = 6 000(1 + 2 × 0,15) = 6 000(1,30) = R7 800 ✓' },
        { difficulty: 'Medium', question: 'Lerato koop ʼn skootrekenaar ter waarde van R10 000 op huurkoop teen 20% enkelvoudige rente oor 3 jaar, sonder ʼn deposito. Vind haar totale terugbetaling.', checkMode: 'auto', correctAnswer: 'R16000', correctAnswers: ['R16000', '16000', 'R16 000', '16 000', 'R16000,00', 'R16 000,00'], answer: 'R16 000', explanation: 'A = 10 000(1 + 3 × 0,20) = 10 000(1,60) = R16 000 ✓' },
        { difficulty: 'Hard', question: 'Amahle koop meubels met ʼn kontantprys van R18 000. Sy betaal ʼn 15%-deposito en betaal die balans op huurkoop terug teen 12% enkelvoudige rente per jaar oor 4 jaar. Vind haar totale terugbetaling (deposito plus huurkoop-paaiemente), afgerond na die naaste sent.', checkMode: 'auto', correctAnswer: 'R25344', correctAnswers: ['R25344', '25344', 'R25 344', '25 344', 'R25344,00', 'R25 344,00'], answer: 'R25 344', explanation: 'Deposito = 15% × 18 000 = R2 700.\nBalans = 18 000 − 2 700 = R15 300.\nHuurkoopbedrag op balans = 15 300(1 + 4 × 0,12) = 15 300(1,48) = R22 644.\nTotale terugbetaling = R2 700 + R22 644 = R25 344 ✓' },

        // Blok 5 — Enkelvoudige groei-/verval-woordprobleme (Medium, Medium, Hard)
        { difficulty: 'Medium', question: 'ʼn Dorp se bevolking van 15 000 groei teen 4% saamgestelde groei per jaar. Vind die bevolking na 5 jaar, afgerond na die naaste heelgetal.', checkMode: 'auto', correctAnswer: '18250', correctAnswers: ['18250', '18 250'], answer: '18 250', explanation: 'A = 15 000(1,04)⁵ = 15 000 × 1,21665 ≈ 18 250 ✓' },
        { difficulty: 'Medium', question: 'ʼn Masjien ter waarde van R150 000 verval deur enkelvoudige (reguitlyn) verval teen 10% per jaar. Vind sy waarde na 4 jaar.', checkMode: 'auto', correctAnswer: 'R90000', correctAnswers: ['R90000', '90000', 'R90 000', '90 000', 'R90000,00', 'R90 000,00'], answer: 'R90 000', explanation: 'A = P(1 − ni) = 150 000(1 − 4 × 0,10) = 150 000(0,60) = R90 000 ✓' },
        { difficulty: 'Hard', question: 'ʼn Motor ter waarde van R220 000 verval deur enkelvoudige (reguitlyn) verval teen 18% per jaar. Vind sy waarde na 3 jaar.', checkMode: 'auto', correctAnswer: 'R101200', correctAnswers: ['R101200', '101200', 'R101 200', '101 200', 'R101200,00', 'R101 200,00'], answer: 'R101 200', explanation: 'A = P(1 − ni) = 220 000(1 − 3 × 0,18) = 220 000(0,46) = R101 200 ✓' },

        // Blok 6 — Gekombineerde multi-stap probleme (Hard, Hard, Hard)
        { difficulty: 'Hard', question: 'Thabo belê R8 000 teen 9% saamgestelde rente per jaar vir 5 jaar. Vind die finale bedrag (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R12308.99', correctAnswers: ['R12308.99', '12308.99', 'R12 308.99', '12 308.99', 'R12308,99', 'R12 308,99'], answer: 'R12 308,99', explanation: 'A = 8 000(1,09)⁵ = 8 000 × 1,53862 ≈ R12 308,99 ✓' },
        { difficulty: 'Hard', question: 'Nomsa belê R6 000 teen 7,5% saamgestelde rente per jaar vir 4 jaar. Vind die finale bedrag (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R8012.81', correctAnswers: ['R8012.81', '8012.81', 'R8 012.81', '8 012.81', 'R8012,81', 'R8 012,81'], answer: 'R8 012,81', explanation: 'A = 6 000(1,075)⁴ = 6 000 × 1,33546... ≈ R8 012,81 ✓' },
        { difficulty: 'Hard', question: 'Sipho verdien R1 500 enkelvoudige rente op ʼn hoofsom van R5 000 belê vir 3 jaar. Vind die jaarlikse rentekoers wat gebruik is.', checkMode: 'auto', correctAnswer: '10%', correctAnswers: ['10%', '10', '0,1', '0,10'], answer: '10%', explanation: 'Rente = P × n × i\n1 500 = 5 000 × 3 × i\n1 500 = 15 000i\ni = 1 500 ÷ 15 000 = 0,10 = 10% ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het enkelvoudige rente, saamgestelde rente en huurkoopprobleme bemeester.' },
        { minScore: 15, message: 'Puik werk! Hersien enige gemiste vrae oor die vergelyking van enkelvoudige en saamgestelde rente, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die finansiële formules weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Enkelvoudige rente (Easy, Easy, Medium, Medium)
        { difficulty: 'Easy', question: 'Bereken die finale bedrag as R3 200 teen 5% enkelvoudige rente per jaar vir 4 jaar belê word.', checkMode: 'auto', correctAnswer: 'R3840', correctAnswers: ['R3840', '3840', 'R3 840', '3 840', 'R3840,00', 'R3 840,00'], answer: 'R3 840', explanation: 'A = P(1 + ni) = 3 200(1 + 4 × 0,05) = 3 200(1,20) = R3 840 ✓' },
        { difficulty: 'Easy', question: 'Bereken die finale bedrag as R4 000 teen 9% enkelvoudige rente per jaar vir 3 jaar belê word.', checkMode: 'auto', correctAnswer: 'R5080', correctAnswers: ['R5080', '5080', 'R5 080', '5 080', 'R5080,00', 'R5 080,00'], answer: 'R5 080', explanation: 'A = P(1 + ni) = 4 000(1 + 3 × 0,09) = 4 000(1,27) = R5 080 ✓' },
        { difficulty: 'Medium', question: 'Lerato belê R11 000 teen 4,5% enkelvoudige rente per jaar vir 6 jaar. Vind die totale rente verdien (nie die finale bedrag nie).', checkMode: 'auto', correctAnswer: 'R2970', correctAnswers: ['R2970', '2970', 'R2 970', '2 970', 'R2970,00', 'R2 970,00'], answer: 'R2 970', explanation: 'Rente = P × n × i = 11 000 × 6 × 0,045 = R2 970 ✓' },
        { difficulty: 'Medium', question: 'ʼn Belegging wat 6% enkelvoudige rente per jaar verdien, groei na R9 000 na 5 jaar. Vind die oorspronklike hoofsom.', checkMode: 'auto', correctAnswer: 'R6923.08', correctAnswers: ['R6923.08', '6923.08', 'R6 923.08', '6 923.08', 'R6923,08', 'R6 923,08', 'R6923,07', '6923,07'], answer: 'R6 923,08', explanation: 'A = P(1 + ni)\n9 000 = P(1 + 5 × 0,06) = P(1,30)\nP = 9 000 ÷ 1,30 ≈ R6 923,08 ✓' },

        // Blok 2 — Saamgestelde rente (Easy, Medium, Medium, Hard)
        { difficulty: 'Easy', question: 'Bereken die finale bedrag as R3 000 teen 8% saamgestelde rente per jaar vir 2 jaar belê word.', checkMode: 'auto', correctAnswer: 'R3499.20', correctAnswers: ['R3499.20', '3499.20', 'R3 499.20', '3 499.20', 'R3499,20', 'R3 499,20', 'R3499,2', '3499,2'], answer: 'R3 499,20', explanation: 'A = P(1 + i)ⁿ = 3 000(1,08)² = 3 000 × 1,1664 = R3 499,20 ✓' },
        { difficulty: 'Medium', question: 'Bereken die finale bedrag as R4 800 teen 4% saamgestelde rente per jaar vir 3 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R5399.35', correctAnswers: ['R5399.35', '5399.35', 'R5 399.35', '5 399.35', 'R5399,35', 'R5 399,35'], answer: 'R5 399,35', explanation: 'A = 4 800(1,04)³ = 4 800 × 1,124864 ≈ R5 399,35 ✓' },
        { difficulty: 'Medium', question: 'Bereken die finale bedrag as R6 000 teen 7% saamgestelde rente per jaar vir 5 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R8415.31', correctAnswers: ['R8415.31', '8415.31', 'R8 415.31', '8 415.31', 'R8415,31', 'R8 415,31'], answer: 'R8 415,31', explanation: 'A = 6 000(1,07)⁵ = 6 000 × 1,40255... ≈ R8 415,31 ✓' },
        { difficulty: 'Hard', question: 'Bereken die finale bedrag as R15 000 teen 6,5% saamgestelde rente per jaar vir 7 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R23309.80', correctAnswers: ['R23309.80', '23309.80', 'R23 309.80', '23 309.80', 'R23309,80', 'R23 309,80', 'R23309,8', '23309,8'], answer: 'R23 309,80', explanation: 'A = 15 000(1,065)⁷ = 15 000 × 1,55399... ≈ R23 309,80 ✓' },

        // Blok 3 — Vergelyking van enkelvoudige en saamgestelde rente (Medium, Hard, Hard)
        { difficulty: 'Medium', question: 'Vergelyk die belegging van R8 000 teen 8% vir 3 jaar met enkelvoudige rente teenoor saamgestelde rente. Vind die verskil tussen die twee finale bedrae (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R157.70', correctAnswers: ['R157.70', '157.70', 'R157,70', '157,70', 'R157,7', '157,7'], answer: 'R157,70', explanation: 'Enkelvoudig: 8 000(1 + 3 × 0,08) = R9 920.\nSaamgesteld: 8 000(1,08)³ ≈ R10 077,70.\nVerskil ≈ R157,70 ✓' },
        { difficulty: 'Hard', question: 'Vergelyk die belegging van R10 000 teen 5% vir 10 jaar met enkelvoudige rente teenoor saamgestelde rente. Vind die verskil tussen die twee finale bedrae (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R1288.95', correctAnswers: ['R1288.95', '1288.95', 'R1 288.95', '1 288.95', 'R1288,95', 'R1 288,95'], answer: 'R1 288,95', explanation: 'Enkelvoudig: 10 000(1 + 10 × 0,05) = R15 000.\nSaamgesteld: 10 000(1,05)¹⁰ ≈ R16 288,95.\nVerskil ≈ R1 288,95 ✓' },
        { difficulty: 'Hard', question: 'Vergelyk die belegging van R6 500 teen 9% vir 7 jaar met enkelvoudige rente teenoor saamgestelde rente. Vind die verskil tussen die twee finale bedrae (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R1287.25', correctAnswers: ['R1287.25', '1287.25', 'R1 287.25', '1 287.25', 'R1287,25', 'R1 287,25'], answer: 'R1 287,25', explanation: 'Enkelvoudig: 6 500(1 + 7 × 0,09) = R10 595.\nSaamgesteld: 6 500(1,09)⁷ ≈ R11 882,25.\nVerskil ≈ R1 287,25 ✓' },

        // Blok 4 — Huurkoop (Medium, Medium, Hard)
        { difficulty: 'Medium', question: 'Sipho koop ʼn TV ter waarde van R7 500 op huurkoop teen 18% enkelvoudige rente oor 3 jaar, sonder ʼn deposito. Vind sy totale terugbetaling.', checkMode: 'auto', correctAnswer: 'R11550', correctAnswers: ['R11550', '11550', 'R11 550', '11 550', 'R11550,00', 'R11 550,00'], answer: 'R11 550', explanation: 'A = P(1 + ni) = 7 500(1 + 3 × 0,18) = 7 500(1,54) = R11 550 ✓' },
        { difficulty: 'Medium', question: 'Naledi koop ʼn motorfiets ter waarde van R12 000 op huurkoop teen 22% enkelvoudige rente oor 2 jaar, sonder ʼn deposito. Vind haar totale terugbetaling.', checkMode: 'auto', correctAnswer: 'R17280', correctAnswers: ['R17280', '17280', 'R17 280', '17 280', 'R17280,00', 'R17 280,00'], answer: 'R17 280', explanation: 'A = 12 000(1 + 2 × 0,22) = 12 000(1,44) = R17 280 ✓' },
        { difficulty: 'Hard', question: 'Kagiso koop ʼn rusbank met ʼn kontantprys van R24 000. Hy betaal ʼn 20%-deposito en betaal die balans op huurkoop terug teen 14% enkelvoudige rente per jaar oor 3 jaar. Vind sy totale terugbetaling (deposito plus huurkoop-paaiemente), afgerond na die naaste sent.', checkMode: 'auto', correctAnswer: 'R32064', correctAnswers: ['R32064', '32064', 'R32 064', '32 064', 'R32064,00', 'R32 064,00'], answer: 'R32 064', explanation: 'Deposito = 20% × 24 000 = R4 800.\nBalans = 24 000 − 4 800 = R19 200.\nHuurkoopbedrag op balans = 19 200(1 + 3 × 0,14) = 19 200(1,42) = R27 264.\nTotale terugbetaling = R4 800 + R27 264 = R32 064 ✓' },

        // Blok 5 — Enkelvoudige groei-/verval-woordprobleme (Medium, Medium, Hard)
        { difficulty: 'Medium', question: 'ʼn Dorp se bevolking van 25 000 groei teen 3% saamgestelde groei per jaar. Vind die bevolking na 6 jaar, afgerond na die naaste heelgetal.', checkMode: 'auto', correctAnswer: '29851', correctAnswers: ['29851', '29 851'], answer: '29 851', explanation: 'A = 25 000(1,03)⁶ = 25 000 × 1,19405... ≈ 29 851 ✓' },
        { difficulty: 'Medium', question: 'ʼn Masjien ter waarde van R180 000 verval deur enkelvoudige (reguitlyn) verval teen 12% per jaar. Vind sy waarde na 5 jaar.', checkMode: 'auto', correctAnswer: 'R72000', correctAnswers: ['R72000', '72000', 'R72 000', '72 000', 'R72000,00', 'R72 000,00'], answer: 'R72 000', explanation: 'A = P(1 − ni) = 180 000(1 − 5 × 0,12) = 180 000(0,40) = R72 000 ✓' },
        { difficulty: 'Hard', question: 'ʼn Afleweringsvoertuig ter waarde van R300 000 verval deur enkelvoudige (reguitlyn) verval teen 20% per jaar. Vind sy waarde na 4 jaar.', checkMode: 'auto', correctAnswer: 'R60000', correctAnswers: ['R60000', '60000', 'R60 000', '60 000', 'R60000,00', 'R60 000,00'], answer: 'R60 000', explanation: 'A = P(1 − ni) = 300 000(1 − 4 × 0,20) = 300 000(0,20) = R60 000 ✓' },

        // Blok 6 — Gekombineerde multi-stap probleme (Hard, Hard, Hard)
        { difficulty: 'Hard', question: 'Amahle belê R10 000 teen 10% saamgestelde rente per jaar vir 6 jaar. Vind die finale bedrag (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R17715.61', correctAnswers: ['R17715.61', '17715.61', 'R17 715.61', '17 715.61', 'R17715,61', 'R17 715,61'], answer: 'R17 715,61', explanation: 'A = 10 000(1,10)⁶ = 10 000 × 1,771561 = R17 715,61 ✓' },
        { difficulty: 'Hard', question: 'Zanele belê R9 000 teen 5,5% saamgestelde rente per jaar vir 5 jaar. Vind die finale bedrag (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R11762.64', correctAnswers: ['R11762.64', '11762.64', 'R11 762.64', '11 762.64', 'R11762,64', 'R11 762,64'], answer: 'R11 762,64', explanation: 'A = 9 000(1,055)⁵ = 9 000 × 1,30696... ≈ R11 762,64 ✓' },
        { difficulty: 'Hard', question: 'Thabo verdien R2 100 enkelvoudige rente op ʼn hoofsom van R7 000 belê vir 6 jaar. Vind die jaarlikse rentekoers wat gebruik is.', checkMode: 'auto', correctAnswer: '5%', correctAnswers: ['5%', '5', '0,05'], answer: '5%', explanation: 'Rente = P × n × i\n2 100 = 7 000 × 6 × i\n2 100 = 42 000i\ni = 2 100 ÷ 42 000 = 0,05 = 5% ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het enkelvoudige rente, saamgestelde rente en huurkoopprobleme bemeester.' },
        { minScore: 15, message: 'Puik werk! Hersien enige gemiste vrae oor die vergelyking van enkelvoudige en saamgestelde rente, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die finansiële formules weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Enkelvoudige rente (Easy, Easy, Medium, Medium)
        { difficulty: 'Easy', question: 'Bereken die finale bedrag as R4 800 teen 7% enkelvoudige rente per jaar vir 2 jaar belê word.', checkMode: 'auto', correctAnswer: 'R5472', correctAnswers: ['R5472', '5472', 'R5 472', '5 472', 'R5472,00', 'R5 472,00'], answer: 'R5 472', explanation: 'A = P(1 + ni) = 4 800(1 + 2 × 0,07) = 4 800(1,14) = R5 472 ✓' },
        { difficulty: 'Easy', question: 'Bereken die finale bedrag as R6 500 teen 4% enkelvoudige rente per jaar vir 5 jaar belê word.', checkMode: 'auto', correctAnswer: 'R7800', correctAnswers: ['R7800', '7800', 'R7 800', '7 800', 'R7800,00', 'R7 800,00'], answer: 'R7 800', explanation: 'A = P(1 + ni) = 6 500(1 + 5 × 0,04) = 6 500(1,20) = R7 800 ✓' },
        { difficulty: 'Medium', question: 'Amahle belê R13 000 teen 5,5% enkelvoudige rente per jaar vir 4 jaar. Vind die totale rente verdien (nie die finale bedrag nie).', checkMode: 'auto', correctAnswer: 'R2860', correctAnswers: ['R2860', '2860', 'R2 860', '2 860', 'R2860,00', 'R2 860,00'], answer: 'R2 860', explanation: 'Rente = P × n × i = 13 000 × 4 × 0,055 = R2 860 ✓' },
        { difficulty: 'Medium', question: 'ʼn Belegging wat 8% enkelvoudige rente per jaar verdien, groei na R8 400 na 3 jaar. Vind die oorspronklike hoofsom.', checkMode: 'auto', correctAnswer: 'R6774.19', correctAnswers: ['R6774.19', '6774.19', 'R6 774.19', '6 774.19', 'R6774,19', 'R6 774,19'], answer: 'R6 774,19', explanation: 'A = P(1 + ni)\n8 400 = P(1 + 3 × 0,08) = P(1,24)\nP = 8 400 ÷ 1,24 ≈ R6 774,19 ✓' },

        // Blok 2 — Saamgestelde rente (Easy, Medium, Medium, Hard)
        { difficulty: 'Easy', question: 'Bereken die finale bedrag as R3 500 teen 9% saamgestelde rente per jaar vir 3 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R4532.60', correctAnswers: ['R4532.60', '4532.60', 'R4 532.60', '4 532.60', 'R4532,60', 'R4 532,60', 'R4532,6', '4532,6'], answer: 'R4 532,60', explanation: 'A = P(1 + i)ⁿ = 3 500(1,09)³ = 3 500 × 1,295029 ≈ R4 532,60 ✓' },
        { difficulty: 'Medium', question: 'Bereken die finale bedrag as R5 200 teen 4,5% saamgestelde rente per jaar vir 3 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R5934.06', correctAnswers: ['R5934.06', '5934.06', 'R5 934.06', '5 934.06', 'R5934,06', 'R5 934,06'], answer: 'R5 934,06', explanation: 'A = 5 200(1,045)³ = 5 200 × 1,141166... ≈ R5 934,06 ✓' },
        { difficulty: 'Medium', question: 'Bereken die finale bedrag as R5 500 teen 7,5% saamgestelde rente per jaar vir 6 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R8488.16', correctAnswers: ['R8488.16', '8488.16', 'R8 488.16', '8 488.16', 'R8488,16', 'R8 488,16'], answer: 'R8 488,16', explanation: 'A = 5 500(1,075)⁶ = 5 500 × 1,54330... ≈ R8 488,16 ✓' },
        { difficulty: 'Hard', question: 'Bereken die finale bedrag as R18 000 teen 8% saamgestelde rente per jaar vir 9 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R35982.08', correctAnswers: ['R35982.08', '35982.08', 'R35 982.08', '35 982.08', 'R35982,08', 'R35 982,08'], answer: 'R35 982,08', explanation: 'A = 18 000(1,08)⁹ = 18 000 × 1,99900... ≈ R35 982,08 ✓' },

        // Blok 3 — Vergelyking van enkelvoudige en saamgestelde rente (Medium, Hard, Hard)
        { difficulty: 'Medium', question: 'Vergelyk die belegging van R6 000 teen 9% vir 5 jaar met enkelvoudige rente teenoor saamgestelde rente. Vind die verskil tussen die twee finale bedrae (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R531.74', correctAnswers: ['R531.74', '531.74', 'R531,74'], answer: 'R531,74', explanation: 'Enkelvoudig: 6 000(1 + 5 × 0,09) = R8 700.\nSaamgesteld: 6 000(1,09)⁵ ≈ R9 231,74.\nVerskil ≈ R531,74 ✓' },
        { difficulty: 'Hard', question: 'Vergelyk die belegging van R12 000 teen 7% vir 9 jaar met enkelvoudige rente teenoor saamgestelde rente. Vind die verskil tussen die twee finale bedrae (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R2501.51', correctAnswers: ['R2501.51', '2501.51', 'R2 501.51', '2 501.51', 'R2501,51', 'R2 501,51'], answer: 'R2 501,51', explanation: 'Enkelvoudig: 12 000(1 + 9 × 0,07) = R19 560.\nSaamgesteld: 12 000(1,07)⁹ ≈ R22 061,51.\nVerskil ≈ R2 501,51 ✓' },
        { difficulty: 'Hard', question: 'Vergelyk die belegging van R8 000 teen 10% vir 6 jaar met enkelvoudige rente teenoor saamgestelde rente. Vind die verskil tussen die twee finale bedrae (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R1372.49', correctAnswers: ['R1372.49', '1372.49', 'R1 372.49', '1 372.49', 'R1372,49', 'R1 372,49'], answer: 'R1 372,49', explanation: 'Enkelvoudig: 8 000(1 + 6 × 0,10) = R12 800.\nSaamgesteld: 8 000(1,10)⁶ ≈ R14 172,49.\nVerskil ≈ R1 372,49 ✓' },

        // Blok 4 — Huurkoop (Medium, Medium, Hard)
        { difficulty: 'Medium', question: 'Buhle koop ʼn stoof ter waarde van R9 000 op huurkoop teen 16% enkelvoudige rente oor 4 jaar, sonder ʼn deposito. Vind haar totale terugbetaling.', checkMode: 'auto', correctAnswer: 'R14760', correctAnswers: ['R14760', '14760', 'R14 760', '14 760', 'R14760,00', 'R14 760,00'], answer: 'R14 760', explanation: 'A = P(1 + ni) = 9 000(1 + 4 × 0,16) = 9 000(1,64) = R14 760 ✓' },
        { difficulty: 'Medium', question: 'Sipho koop kantoortoerusting ter waarde van R14 000 op huurkoop teen 19% enkelvoudige rente oor 3 jaar, sonder ʼn deposito. Vind sy totale terugbetaling.', checkMode: 'auto', correctAnswer: 'R21980', correctAnswers: ['R21980', '21980', 'R21 980', '21 980', 'R21980,00', 'R21 980,00'], answer: 'R21 980', explanation: 'A = 14 000(1 + 3 × 0,19) = 14 000(1,57) = R21 980 ✓' },
        { difficulty: 'Hard', question: 'Lerato koop ʼn slaapkamerstel met ʼn kontantprys van R30 000. Sy betaal ʼn 10%-deposito en betaal die balans op huurkoop terug teen 15% enkelvoudige rente per jaar oor 5 jaar. Vind haar totale terugbetaling (deposito plus huurkoop-paaiemente), afgerond na die naaste sent.', checkMode: 'auto', correctAnswer: 'R50250', correctAnswers: ['R50250', '50250', 'R50 250', '50 250', 'R50250,00', 'R50 250,00'], answer: 'R50 250', explanation: 'Deposito = 10% × 30 000 = R3 000.\nBalans = 30 000 − 3 000 = R27 000.\nHuurkoopbedrag op balans = 27 000(1 + 5 × 0,15) = 27 000(1,75) = R47 250.\nTotale terugbetaling = R3 000 + R47 250 = R50 250 ✓' },

        // Blok 5 — Enkelvoudige groei-/verval-woordprobleme (Medium, Medium, Hard)
        { difficulty: 'Medium', question: 'ʼn Dorp se bevolking van 40 000 groei teen 3,5% saamgestelde groei per jaar. Vind die bevolking na 7 jaar, afgerond na die naaste heelgetal.', checkMode: 'auto', correctAnswer: '50891', correctAnswers: ['50891', '50 891'], answer: '50 891', explanation: 'A = 40 000(1,035)⁷ = 40 000 × 1,27228... ≈ 50 891 ✓' },
        { difficulty: 'Medium', question: 'ʼn Masjien ter waarde van R210 000 verval deur enkelvoudige (reguitlyn) verval teen 14% per jaar. Vind sy waarde na 4 jaar.', checkMode: 'auto', correctAnswer: 'R92400', correctAnswers: ['R92400', '92400', 'R92 400', '92 400', 'R92400,00', 'R92 400,00'], answer: 'R92 400', explanation: 'A = P(1 − ni) = 210 000(1 − 4 × 0,14) = 210 000(0,44) = R92 400 ✓' },
        { difficulty: 'Hard', question: 'ʼn Trekker ter waarde van R260 000 verval deur enkelvoudige (reguitlyn) verval teen 16% per jaar. Vind sy waarde na 5 jaar.', checkMode: 'auto', correctAnswer: 'R52000', correctAnswers: ['R52000', '52000', 'R52 000', '52 000', 'R52000,00', 'R52 000,00'], answer: 'R52 000', explanation: 'A = P(1 − ni) = 260 000(1 − 5 × 0,16) = 260 000(0,20) = R52 000 ✓' },

        // Blok 6 — Gekombineerde multi-stap probleme (Hard, Hard, Hard)
        { difficulty: 'Hard', question: 'Nomsa belê R14 000 teen 8,5% saamgestelde rente per jaar vir 6 jaar. Vind die finale bedrag (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R22840.55', correctAnswers: ['R22840.55', '22840.55', 'R22 840.55', '22 840.55', 'R22840,55', 'R22 840,55'], answer: 'R22 840,55', explanation: 'A = 14 000(1,085)⁶ = 14 000 × 1,63147... ≈ R22 840,55 ✓' },
        { difficulty: 'Hard', question: 'Kagiso belê R7 000 teen 9,5% saamgestelde rente per jaar vir 5 jaar. Vind die finale bedrag (rond af tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: 'R11019.67', correctAnswers: ['R11019.67', '11019.67', 'R11 019.67', '11 019.67', 'R11019,67', 'R11 019,67'], answer: 'R11 019,67', explanation: 'A = 7 000(1,095)⁵ = 7 000 × 1,57424... ≈ R11 019,67 ✓' },
        { difficulty: 'Hard', question: 'Zanele verdien R1 440 enkelvoudige rente op ʼn hoofsom van R6 000 belê vir 4 jaar. Vind die jaarlikse rentekoers wat gebruik is.', checkMode: 'auto', correctAnswer: '6%', correctAnswers: ['6%', '6', '0,06'], answer: '6%', explanation: 'Rente = P × n × i\n1 440 = 6 000 × 4 × i\n1 440 = 24 000i\ni = 1 440 ÷ 24 000 = 0,06 = 6% ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het enkelvoudige rente, saamgestelde rente en huurkoopprobleme bemeester.' },
        { minScore: 15, message: 'Puik werk! Hersien enige gemiste vrae oor die vergelyking van enkelvoudige en saamgestelde rente, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die finansiële formules weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
