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
// deposito (net huurkoop) → pers (#7c3aed)
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

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
        'Kort video wat wys hoe om die enkelvoudige-rente-formule A=P(1+ni) te gebruik met kleurgekodeerde uitgewerkte voorbeelde in huurkoop- en spaarkonteks',

      diagramPlaceholder:
        'Lineêre grafiek van A teenoor n vir enkelvoudige rente wat konstante reguitlyn-groei wys, met dieselfde bedrag wat elke jaar bygevoeg word',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="145" x2="205" y2="145" stroke="#374151" stroke-width="1.5"/><polygon points="205,145 197,141 197,149" fill="#374151"/><line x1="30" y1="145" x2="30" y2="15" stroke="#374151" stroke-width="1.5"/><polygon points="30,15 26,23 34,23" fill="#374151"/><text x="208" y="149" font-size="11" fill="#16a34a" font-weight="700">n</text><text x="22" y="13" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">A</text><line x1="30" y1="145" x2="190" y2="40" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="145" r="4" fill="#2563eb"/><text x="20" y="138" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">P</text><circle cx="70" cy="119.75" r="3" fill="#ea580c"/><circle cx="110" cy="92.5" r="3" fill="#ea580c"/><circle cx="150" cy="65.25" r="3" fill="#ea580c"/><line x1="70" y1="119.75" x2="110" y2="119.75" stroke="#16a34a" stroke-width="1.3" stroke-dasharray="3,2"/><line x1="110" y1="119.75" x2="110" y2="92.5" stroke="#16a34a" stroke-width="1.3" stroke-dasharray="3,2"/><line x1="110" y1="92.5" x2="150" y2="92.5" stroke="#16a34a" stroke-width="1.3" stroke-dasharray="3,2"/><line x1="150" y1="92.5" x2="150" y2="65.25" stroke="#16a34a" stroke-width="1.3" stroke-dasharray="3,2"/><text x="90" y="130" font-size="8" fill="#16a34a" font-weight="700" text-anchor="middle">Δn</text><text x="130" y="103" font-size="8" fill="#16a34a" font-weight="700" text-anchor="middle">Δn</text><circle cx="190" cy="40" r="4" fill="#dc2626"/><text x="196" y="36" font-size="11" fill="#dc2626" font-weight="700">A</text><text x="115" y="163" font-size="9" fill="#374151" text-anchor="middle">dieselfde bedrag elke jaar bygevoeg → reguit lyn</text></svg>',
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
          answer: `${re('A')} ≈ ${re('R6 802,44')}`,
          steps: [
            `Skryf die formule neer: ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup>n</sup>`,
            `Vervang: ${bl('P')} = R5 000, ${or('i')} = 0,08, ${gr('n')} = 4:<br>${re('A')} = ${bl('5 000')}(1 + ${or('0,08')})<sup style="color:#16a34a;font-weight:700;">4</sup>`,
            `Vereenvoudig die hakie: (1 + ${or('0,08')}) = 1,08`,
            `Bereken die mag: (1,08)<sup style="color:#16a34a;font-weight:700;">4</sup> ≈ 1,36049`,
            `Vermenigvuldig: ${re('A')} = ${bl('5 000')} × 1,36049 ≈ <strong>R6 802,44</strong> ✓`,
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
          answer: `Verskil ≈ ${re('R807,30')} ten gunste van saamgestelde rente`,
          steps: [
            `<strong>Enkelvoudige rente:</strong> ${re('A')} = ${bl('10 000')}(1 + ${gr('6')} × ${or('0,07')}) = 10 000(1,42) = <strong>R14 200</strong>`,
            `<strong>Saamgestelde rente:</strong> ${re('A')} = ${bl('10 000')}(1,07)<sup style="color:#16a34a;font-weight:700;">6</sup>`,
            `Bereken: (1,07)<sup style="color:#16a34a;font-weight:700;">6</sup> ≈ 1,50073`,
            `Saamgestelde bedrag: ${re('A')} = ${bl('10 000')} × 1,50073 ≈ <strong>R15 007,30</strong>`,
            `<strong>Verskil:</strong> R15 007,30 − R14 200 ≈ ${re('R807,30')} meer met saamgestelde rente ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Lebo belê R3 000 teen 5% saamgestelde rente per jaar vir 3 jaar. Bereken die finale bedrag (rond af tot 2 desimale plekke).',
          answer: 'R3 472,88',
          checkMode: 'auto',
          correctAnswer: 'R3472,88',
          correctAnswers: ['R3472.88', '3472.88', 'R3 472.88', '3 472.88'],
          explanation: 'A = 3 000(1,05)³\n(1,05)³ = 1,157625\nA = 3 000 × 1,157625 = R3 472,88 ✓',
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
              correctAnswer: 'R11220,41',
              correctAnswers: ['R11220.41', '11220.41', 'R11 220.41', '11 220.41', 'R11220,41'],
              explanation: 'A = 8 000(1,07)⁵\n(1,07)⁵ ≈ 1,4025517\nA ≈ 8 000 × 1,4025517 ≈ R11 220,41 ✓',
            },
            {
              label: 'c) Hoeveel meer verdien saamgestelde rente?',
              correctAnswer: 'R420,41',
              correctAnswers: ['R420.41', '420.41', 'R420', '420', 'R420,41'],
              explanation: 'Verskil: R11 220,41 − R10 800 = R420,41 ✓',
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
              correctAnswer: '182498',
              correctAnswers: ['182498', '182 498'],
              explanation: 'A = 150 000(1,04)⁵\n(1,04)⁵ ≈ 1,2166529\nA ≈ 150 000 × 1,2166529 ≈ 182 498 ✓',
            },
            {
              label: 'b) Vind die bevolking na 10 jaar (rond af na die naaste heelgetal).',
              correctAnswer: '222037',
              correctAnswers: ['222037', '222 037'],
              explanation: 'A = 150 000(1,04)¹⁰\n(1,04)¹⁰ ≈ 1,4802443\nA ≈ 150 000 × 1,4802443 ≈ 222 037 ✓',
            },
            {
              label: 'c) Met hoeveel mense neem die bevolking toe tussen jaar 5 en jaar 10?',
              correctAnswer: '39539',
              correctAnswers: ['39539', '39 539', '39540', '39 540'],
              explanation: '222 037 − 182 498 = 39 539 mense ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om die saamgestelde-rente-formule A=P(1+i)^n te gebruik met kleurgekodeerde voorbeelde oor spaargeld en bevolkingsgroei, en ʼn vergelyking met enkelvoudige rente',

      diagramPlaceholder:
        'Eksponensiële groeikurwe wat enkelvoudige en saamgestelde rente oor tyd op dieselfde asse vergelyk, wat wys hoe saamgestelde rente enkelvoudige rente oortref',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="145" x2="205" y2="145" stroke="#374151" stroke-width="1.5"/><polygon points="205,145 197,141 197,149" fill="#374151"/><line x1="30" y1="145" x2="30" y2="15" stroke="#374151" stroke-width="1.5"/><polygon points="30,15 26,23 34,23" fill="#374151"/><text x="208" y="149" font-size="11" fill="#16a34a" font-weight="700">n</text><text x="22" y="13" font-size="11" fill="#374151" font-weight="700" text-anchor="middle">A</text><circle cx="30" cy="145" r="4" fill="#2563eb"/><text x="20" y="138" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">P</text><line x1="30" y1="145" x2="190" y2="72" stroke="#2563eb" stroke-width="2.2"/><text x="150" y="85" font-size="10" fill="#2563eb" font-weight="700">enkelvoudig</text><path d="M30,145 C90,142 150,108 190,26" fill="none" stroke="#dc2626" stroke-width="2.5"/><text x="128" y="42" font-size="10" fill="#dc2626" font-weight="700">saamgesteld</text><text x="115" y="163" font-size="9" fill="#374151" text-anchor="middle">saamgestelde rente oortref enkelvoudige rente mettertyd</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SIMPLE AND COMPOUND DECAY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simple-and-compound-decay',
      title: 'Enkelvoudige en Saamgestelde Verval — A = P(1 − ni) en A = P(1 − i)ⁿ',
      icon: '↓',
      explanation:
        `<p style="margin-bottom:16px;">Verval beskryf ʼn bedrag wat oor tyd <em>afneem</em> — meestal die waardevermindering (verlies aan waarde) van ʼn bate soos ʼn motor, masjien, of stuk toerusting. Net soos groei, kom verval in twee vorme voor: <strong>enkelvoudige verval</strong>, waar dieselfde randbedrag elke tydperk van die ${bl('hoofsom')} afgetrek word, en <strong>saamgestelde verval</strong>, waar ʼn persentasie van die <em>huidige</em> (reeds-verminderde) waarde elke tydperk afgetrek word. Die formules is ${re('A')} = ${bl('P')}(1 − ${gr('n')} × ${or('i')}) vir enkelvoudige verval en ${re('A')} = ${bl('P')}(1 − ${or('i')})<sup style="font-weight:700;color:#16a34a;">n</sup> vir saamgestelde verval — spieëlbeelde van enkelvoudige en saamgestelde groei, maar met ʼn minusteken.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('hoofsom P')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('koers i')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tyd n')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('finale bedrag A')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die enkelvoudige-verval-formule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.5em;font-weight:700;color:#374151;margin:0 0 8px 0;">${re('A')} = ${bl('P')}(1 − ${gr('n')} × ${or('i')})</p>` +
        `<p style="font-size:0.9em;color:#6b7280;margin:0;">dieselfde bedrag word elke tydperk afgetrek — gebruik vir reguitlyn (boekwaarde) waardevermindering</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die saamgestelde-verval-formule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.5em;font-weight:700;color:#374151;margin:0 0 8px 0;">${re('A')} = ${bl('P')}(1 − ${or('i')})<sup style="font-weight:700;color:#16a34a;">n</sup></p>` +
        `<p style="font-size:0.9em;color:#6b7280;margin:0;">ʼn persentasie van die huidige waarde word elke tydperk afgetrek — gebruik vir verminderende-balans (herverkoop-/markwaarde) waardevermindering</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Enkelvoudige teenoor saamgestelde verval vergelyk</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Enkelvoudige Verval</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Dieselfde randbedrag word elke tydperk afgetrek, gebaseer op die oorspronklike ${bl('hoofsom')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Waarde neem in ʼn <strong>reguit lyn</strong> af — algemeen gebruik vir boekwaarde (belasting) waardevermindering.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Saamgestelde Verval</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">ʼn Persentasie van die ${bl('huidige')} (reeds-verminderde) waarde word elke tydperk afgetrek.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Waarde neem <strong>eksponensieel</strong> af — die randbedrag wat verloor word, krimp elke jaar namate die waarde krimp.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Saamgestelde verval is meer realisties</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die meeste bates — motors, masjinerie, elektronika — verloor eintlik waarde soos <strong>saamgestelde verval</strong> beskryf: ʼn persentasie van wat die item tans werd is. Dit beteken die randwaarde wat verloor word, krimp jaar na jaar, wat ooreenstem met hoe tweedehandse pryse werklik optree. <strong>Enkelvoudige verval</strong> word hoofsaaklik vir rekeningkundige doeleindes gebruik, waar ʼn besigheid ʼn voorspelbare, reguitlyn-boekwaarde vir belastingberekenings benodig.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Afleweringsvoertuig ter waarde van R280 000 verval deur enkelvoudige verval teen 15% per jaar. Vind sy waarde na 4 jaar.',
          answer: `${re('A')} = ${re('R112 000')}`,
          steps: [
            `Skryf die formule neer: ${re('A')} = ${bl('P')}(1 − ${gr('n')} × ${or('i')})`,
            `Vervang die waardes — ${bl('P')} = R280 000, ${gr('n')} = 4, ${or('i')} = 0,15:<br>${re('A')} = ${bl('280 000')}(1 − ${gr('4')} × ${or('0,15')})`,
            `Bereken die hakie: ${gr('4')} × ${or('0,15')} = 0,60, dus (1 − 0,60) = 0,40`,
            `Vermenigvuldig: ${re('A')} = ${bl('280 000')} × 0,40 = <strong>R112 000</strong> ✓`,
          ],
        },
        {
          question: 'ʼn Motor ter waarde van R320 000 verval deur saamgestelde verval teen 12% per jaar. Vind sy waarde na 5 jaar (rond af na die naaste rand).',
          answer: `${re('A')} ≈ ${re('R168 874')}`,
          steps: [
            `Skryf die formule neer: ${re('A')} = ${bl('P')}(1 − ${or('i')})<sup>n</sup>`,
            `Vervang: ${bl('P')} = R320 000, ${or('i')} = 0,12, ${gr('n')} = 5:<br>${re('A')} = ${bl('320 000')}(1 − ${or('0,12')})<sup style="color:#16a34a;font-weight:700;">5</sup>`,
            `Vereenvoudig die hakie: (1 − ${or('0,12')}) = 0,88`,
            `Bereken die mag: (0,88)<sup style="color:#16a34a;font-weight:700;">5</sup> ≈ 0,52773`,
            `Vermenigvuldig: ${re('A')} = ${bl('320 000')} × 0,52773 ≈ <strong>R168 874</strong> ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Skootrekenaar ter waarde van R12 000 verval deur enkelvoudige verval teen 20% per jaar. Bereken sy waarde na 3 jaar.',
          answer: 'R4 800',
          checkMode: 'auto',
          correctAnswer: 'R4800',
          correctAnswers: ['R4800', '4800', 'R4 800', '4 800'],
          explanation: 'A = P(1 − ni)\nA = 12 000(1 − 3 × 0,20)\nA = 12 000(1 − 0,60)\nA = 12 000 × 0,40\nA = R4 800 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Kragopwekker ter waarde van R60 000 verval teen 10% per jaar.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vind sy waarde na 5 jaar met enkelvoudige verval.',
              correctAnswer: 'R30000',
              correctAnswers: ['R30000', '30000', 'R30 000', '30 000'],
              explanation: 'A = 60 000(1 − 5 × 0,10) = 60 000(0,50) = R30 000 ✓',
            },
            {
              label: 'b) Vind sy waarde na 5 jaar met saamgestelde verval (rond af tot 2 desimale plekke).',
              correctAnswer: 'R35429,40',
              correctAnswers: ['R35429.40', '35429.40', 'R35 429.40', '35 429.40'],
              explanation: 'A = 60 000(0,90)⁵\n(0,90)⁵ = 0,59049\nA = 60 000 × 0,59049 = R35 429,40 ✓',
            },
            {
              label: 'c) Vind die verskil tussen die twee waardes (rond af tot 2 desimale plekke).',
              correctAnswer: 'R5429,40',
              correctAnswers: ['R5429.40', '5429.40', 'R5 429.40', '5 429.40'],
              explanation: 'Verskil = R35 429,40 − R30 000 = R5 429,40 (saamgestelde verval behou meer waarde) ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: "ʼn Motor ter waarde van R200 000 verval teen 15% per jaar oor 3 jaar. Vergelyk sy waarde met enkelvoudige verval teenoor saamgestelde verval, en verduidelik waarom saamgestelde verval as meer realisties beskou word om ʼn motor se herverkoopwaarde te modelleer.",
          answer: 'Enkelvoudige verval: A = 200 000(1 − 3 × 0,15) = 200 000(0,55) = R110 000. Saamgestelde verval: A = 200 000(0,85)³ ≈ 200 000 × 0,614125 ≈ R122 825. Saamgestelde verval gee ʼn hoër (meer realistiese) herverkoopwaarde omdat elke jaar se verlies ʼn persentasie van die reeds-verminderde waarde is — sodat die randbedrag wat verloor word oor tyd krimp, wat ooreenstem met hoe tweedehandse motors werklik in waarde verminder (vinnig aan die begin, dan stadiger), eerder as om elke jaar dieselfde vaste bedrag te verloor.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Kort video wat die enkelvoudige-verval-formule A=P(1-ni) en die saamgestelde-verval-formule A=P(1-i)^n verduidelik met kleurgekodeerde uitgewerkte voorbeelde oor motor- en masjienwaardevermindering',

      diagramPlaceholder:
        'Lineêre grafiek van A teenoor n vir enkelvoudige verval wat konstante reguitlyn-afname wys, met dieselfde bedrag wat elke jaar afgetrek word (saamgestelde verval sou eerder krom wees, en stadiger afneem namate die waarde krimp)',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="145" x2="205" y2="145" stroke="#374151" stroke-width="1.5"/><polygon points="205,145 197,141 197,149" fill="#374151"/><line x1="30" y1="145" x2="30" y2="15" stroke="#374151" stroke-width="1.5"/><polygon points="30,15 26,23 34,23" fill="#374151"/><text x="208" y="149" font-size="11" fill="#16a34a" font-weight="700">n</text><text x="22" y="13" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">A</text><line x1="30" y1="40" x2="190" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="40" r="4" fill="#2563eb"/><text x="20" y="47" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">P</text><circle cx="70" cy="65.25" r="3" fill="#ea580c"/><circle cx="110" cy="92.5" r="3" fill="#ea580c"/><circle cx="150" cy="119.75" r="3" fill="#ea580c"/><line x1="70" y1="65.25" x2="110" y2="65.25" stroke="#16a34a" stroke-width="1.3" stroke-dasharray="3,2"/><line x1="110" y1="65.25" x2="110" y2="92.5" stroke="#16a34a" stroke-width="1.3" stroke-dasharray="3,2"/><line x1="110" y1="92.5" x2="150" y2="92.5" stroke="#16a34a" stroke-width="1.3" stroke-dasharray="3,2"/><line x1="150" y1="92.5" x2="150" y2="119.75" stroke="#16a34a" stroke-width="1.3" stroke-dasharray="3,2"/><text x="90" y="55" font-size="8" fill="#16a34a" font-weight="700" text-anchor="middle">Δn</text><text x="130" y="82" font-size="8" fill="#16a34a" font-weight="700" text-anchor="middle">Δn</text><circle cx="190" cy="145" r="4" fill="#dc2626"/><text x="196" y="138" font-size="11" fill="#dc2626" font-weight="700">A</text><text x="115" y="163" font-size="9" fill="#374151" text-anchor="middle">dieselfde bedrag elke jaar verloor → reguit lyn</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SOLVING FOR n
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
          answer: `Ongeveer ${gr('7')} jaar`,
          steps: [
            `Ons moet (1,12)<sup>${bl('n')}</sup> = ${or('2')} kry (verdubbeling beteken die vermenigvuldiger moet 2 bereik).`,
            `${bl('Probeer n = 5:')} (1,12)<sup>5</sup> ≈ 1,762 — dit is onder die ${or('teiken van 2')}, dus is n = 5 te laag.`,
            `${bl('Probeer n = 6:')} (1,12)<sup>6</sup> ≈ 1,974 — baie naby aan die ${or('teiken van 2')} maar nog nie bereik nie.`,
            `${bl('Probeer n = 7:')} (1,12)<sup>7</sup> ≈ 2,211 — dit oorskry die ${or('teiken van 2')}.`,
            `<strong>Gevolgtrekking:</strong> Aangesien bevolking in heel jare getel moet word, neem dit ${gr('n = 7')} jaar (na bo afgerond om te verseker dat verdubbeling bereik word). ✓`,
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
        'Kort video wat wys hoe om probeer en verbeter te gebruik om n in saamgestelde-groeiprobleme te vind, met stappe om te toets, te verfyn en die resultate te interpreteer',

      diagramPlaceholder:
        'Grafiek van probeerwaardes van n teenoor die berekende vermenigvuldiger, met ʼn stippel-teikenlyn in oranje en die verfynde antwoord wat eerste die teiken bereik, uitgelig in groen',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="145" x2="205" y2="145" stroke="#374151" stroke-width="1.5"/><polygon points="205,145 197,141 197,149" fill="#374151"/><line x1="30" y1="145" x2="30" y2="15" stroke="#374151" stroke-width="1.5"/><polygon points="30,15 26,23 34,23" fill="#374151"/><text x="208" y="149" font-size="10" fill="#374151" font-weight="700">n</text><text x="6" y="12" font-size="9" fill="#374151" font-weight="700">vermenigvuldiger</text><line x1="30" y1="77" x2="190" y2="77" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,3"/><text x="192" y="73" font-size="10" fill="#ea580c" font-weight="700">teiken = 2</text><path d="M70,117.46 L115,81.42 L160,41.13" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="70" cy="117.46" r="4.5" fill="#0f1f3d"/><circle cx="115" cy="81.42" r="4.5" fill="#0f1f3d"/><circle cx="160" cy="41.13" r="5.5" fill="#16a34a" stroke="#0f1f3d" stroke-width="1.5"/><text x="70" y="160" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">n=5</text><text x="115" y="160" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">n=6</text><text x="160" y="160" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">n=7</text><text x="160" y="32" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">verfynde antwoord</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — FOREIGN EXCHANGE RATES
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
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">bv. $250 ÷ 0,054 = ${gr('R4 629,63')}</p>` +
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
          answer: `${gr('≈ R4 629,63')}`,
          steps: [
            `Die ${bl('wisselkoers')} is R1 = $0,054, dus $1 = R(1 ÷ 0,054).`,
            `Om ${or('van dollar na rand om te skakel')}: deel die dollarbedrag deur die wisselkoers.`,
            `${gr('Koste in Rand')} = $250 ÷ ${bl('0,054')} ≈ ${gr('R4 629,63')} ✓`,
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
              correctAnswer: 'R19767,44',
              correctAnswers: ['R19767.44', '19767.44', 'R19 767.44', '19 767.44'],
              explanation: 'Koste in Rand = £850 ÷ 0,043 ≈ R19 767,44 ✓',
            },
            {
              label: 'c) Die Rand verswak na R1 = £0,038. Vind die nuwe Rand-koste van dieselfde £850-item (rond af tot 2 desimale plekke).',
              correctAnswer: 'R22368,42',
              correctAnswers: ['R22368.42', '22368.42', 'R22 368.42', '22 368.42', 'R22368.43', '22368.43'],
              explanation: 'Nuwe koste in Rand = £850 ÷ 0,038 ≈ R22 368,42\nDie swakker Rand maak die invoer duurder. ✓',
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
              correctAnswer: 'R231481,48',
              correctAnswers: ['R231481.48', '231481.48', 'R231 481.48', '231 481.48'],
              explanation: 'Koste = $12 500 ÷ 0,054 ≈ R231 481,48 ✓',
            },
            {
              label: 'b) Die Rand versterk na R1 = $0,060. Vind die nuwe koste in Rand (rond af tot 2 desimale plekke).',
              correctAnswer: 'R208333,33',
              correctAnswers: ['R208333.33', '208333.33', 'R208 333.33', '208 333.33'],
              explanation: 'Nuwe koste = $12 500 ÷ 0,060 ≈ R208 333,33 ✓',
            },
            {
              label: 'c) Hoeveel spaar die student weens die versterking van die Rand (rond af tot 2 desimale plekke)?',
              correctAnswer: 'R23148,15',
              correctAnswers: ['R23148.15', '23148.15', 'R23 148.15', '23 148.15'],
              explanation: 'Besparing = R231 481,48 − R208 333,33 = R23 148,15\nʼn Sterker Rand verminder die Rand-koste van ingevoerde dienste. ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat wisselkoerse verduidelik, hoe om tussen geldeenhede om te skakel deur te vermenigvuldig en te deel, en wat gebeur wanneer die Rand verswak of versterk',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — HUURKOOP
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'hire-purchase',
      title: 'Huurkoop — Deposito, Balans en Paaiemente',
      icon: '🛒',
      explanation:
        `<p style="margin-bottom:16px;">${pu('Huurkoop')} laat jou toe om ʼn item dadelik huis toe te neem deur ʼn ${pu('deposito')} vooraf te betaal, en dan die res — die ${bl('balans')} — deur gelyke maandelikse paaiemente wat ${or('enkelvoudige rente')} insluit, af te betaal. Dit gebruik dieselfde enkelvoudige-rente-formule as Enkelvoudige Groei, ${re('A')} = ${bl('P')}(1 + ${gr('n')} × ${or('i')}), maar die ${bl('hoofsom P')} wat gefinansier word, is die <strong>kontantprys minus die deposito</strong>, nie die volle prys nie.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('deposito')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gefinansierde balans P')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rentekoers i')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('terugbetalingstydperk n')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('totale terugbetaling A')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die huurkoop-formule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.5em;font-weight:700;color:#374151;margin:0 0 8px 0;">${re('A')} = ${bl('P')}(1 + ${gr('n')} × ${or('i')})</p>` +
        `<p style="font-size:0.9em;color:#6b7280;margin:0;">waar ${bl('P')} = Kontantprys − ${pu('Deposito')}, en ${gr('n')} die terugbetalingstydperk in jare is</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ʼn huurkoopprobleem op te los</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${pu('Deposito')} — Vermenigvuldig die kontantprys met die depositopersentasie (of gebruik die vaste depositobedrag indien gegee).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Balans (P)')} — Trek die ${pu('deposito')} van die kontantprys af. Slegs hierdie oorblywende balans word rente op gehef.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Totale terugbetaling (A)')} — Pas enkelvoudige rente op die balans toe: ${re('A')} = ${bl('P')}(1 + ${gr('n')} × ${or('i')}).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Maandelikse paaiement')} — Deel ${re('A')} deur die totale aantal maande (${gr('n')} × 12).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;">${or('Totale koste')} — Tel die ${pu('deposito')} weer by: Totale koste = ${pu('Deposito')} + ${re('A')}. Dit is wat jy uiteindelik werklik betaal.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Huurkoop kos altyd meer as die kontantprys</p>` +
        `<p style="margin:0;color:#1e3a8a;">Omdat rente op die balans gehef word, is die totale koste om op huurkoop te koop altyd meer as die oorspronklike kontantprys. Die kompromie is gerief — jy kry die item dadelik in plaas daarvan om eers te spaar.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Yskas het ʼn kontantprys van R15 000. Zinhle betaal ʼn 10%-deposito en betaal die balans op huurkoop teen 15% enkelvoudige rente per jaar oor 3 jaar terug. Vind haar maandelikse paaiement en die totale koste van die yskas.',
          answer: `Maandelikse paaiement = ${re('R543,75')}; Totale koste = ${re('R21 075')}`,
          steps: [
            `${pu('Deposito')} = 10% × R15 000 = <strong>R1 500</strong>`,
            `${bl('Balans (P)')} = R15 000 − R1 500 = <strong>R13 500</strong>`,
            `${re('Totale terugbetaling')}: ${re('A')} = ${bl('P')}(1 + ${gr('n')} × ${or('i')}) = ${bl('13 500')}(1 + ${gr('3')} × ${or('0,15')}) = 13 500(1,45) = <strong>R19 575</strong>`,
            `${gr('Maandelikse paaiement')} = R19 575 ÷ (3 × 12) = R19 575 ÷ 36 = <strong>R543,75</strong>`,
            `${or('Totale koste')} = ${pu('R1 500')} + R19 575 = <strong>R21 075</strong> ✓`,
          ],
        },
        {
          question: 'ʼn Motorfiets het ʼn kontantprys van R24 000. Kagiso betaal ʼn 15%-deposito en betaal die balans op huurkoop teen 12% enkelvoudige rente per jaar oor 2 jaar terug. Vind sy maandelikse paaiement en die totale koste.',
          answer: `Maandelikse paaiement = ${re('R1 054')}; Totale koste = ${re('R28 896')}`,
          steps: [
            `${pu('Deposito')} = 15% × R24 000 = <strong>R3 600</strong>`,
            `${bl('Balans (P)')} = R24 000 − R3 600 = <strong>R20 400</strong>`,
            `${re('Totale terugbetaling')}: ${re('A')} = ${bl('20 400')}(1 + ${gr('2')} × ${or('0,12')}) = 20 400(1,24) = <strong>R25 296</strong>`,
            `${gr('Maandelikse paaiement')} = R25 296 ÷ (2 × 12) = R25 296 ÷ 24 = <strong>R1 054</strong>`,
            `${or('Totale koste')} = ${pu('R3 600')} + R25 296 = <strong>R28 896</strong> ✓`,
          ],
        },
        {
          question: 'ʼn Skootrekenaar het ʼn kontantprys van R20 000. Naledi betaal ʼn vaste deposito van R4 000 en betaal die balans op huurkoop teen 16% enkelvoudige rente per jaar oor 4 jaar terug. Vind haar maandelikse paaiement (rond af tot die naaste sent) en die totale koste.',
          answer: `Maandelikse paaiement ≈ ${re('R546,67')}; Totale koste = ${re('R30 240')}`,
          steps: [
            `${pu('Deposito')} = <strong>R4 000</strong> (ʼn vaste bedrag, nie ʼn persentasie hierdie keer nie)`,
            `${bl('Balans (P)')} = R20 000 − R4 000 = <strong>R16 000</strong>`,
            `${re('Totale terugbetaling')}: ${re('A')} = ${bl('16 000')}(1 + ${gr('4')} × ${or('0,16')}) = 16 000(1,64) = <strong>R26 240</strong>`,
            `${gr('Maandelikse paaiement')} = R26 240 ÷ (4 × 12) = R26 240 ÷ 48 ≈ <strong>R546,67</strong>`,
            `${or('Totale koste')} = ${pu('R4 000')} + R26 240 = <strong>R30 240</strong> ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Stoof het ʼn kontantprys van R9 000. Lindiwe betaal ʼn 15%-deposito. Bereken die balans wat op huurkoop gefinansier moet word.',
          answer: 'R7 650',
          checkMode: 'auto',
          correctAnswer: 'R7650',
          correctAnswers: ['R7650', '7650', 'R7 650', '7 650'],
          explanation: 'Deposito = 15% × R9 000 = R1 350\nBalans = R9 000 − R1 350 = R7 650 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Rusbank het ʼn kontantprys van R12 000. Sipho betaal ʼn 10%-deposito en betaal die balans op huurkoop teen 16% enkelvoudige rente per jaar oor 3 jaar terug.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vind die depositobedrag.',
              correctAnswer: 'R1200',
              correctAnswers: ['R1200', '1200', 'R1 200', '1 200'],
              explanation: 'Deposito = 10% × R12 000 = R1 200 ✓',
            },
            {
              label: 'b) Vind die totale terugbetaling op die balans (met enkelvoudige rente).',
              correctAnswer: 'R15984',
              correctAnswers: ['R15984', '15984', 'R15 984', '15 984'],
              explanation: 'Balans = 12 000 − 1 200 = R10 800\nA = 10 800(1 + 3 × 0,16) = 10 800(1,48) = R15 984 ✓',
            },
            {
              label: 'c) Vind die maandelikse paaiement.',
              correctAnswer: 'R444',
              correctAnswers: ['R444', '444', 'R444.00'],
              explanation: 'Maandelikse paaiement = R15 984 ÷ (3 × 12) = R15 984 ÷ 36 = R444 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Eetkamerstel het ʼn kontantprys van R18 000. Amahle betaal ʼn 12%-deposito en betaal die balans op huurkoop teen 18% enkelvoudige rente per jaar oor 4 jaar terug.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vind die totale koste van die eetkamerstel (deposito plus totale terugbetaling).',
              correctAnswer: 'R29404,80',
              correctAnswers: ['R29404.80', '29404.80', 'R29 404.80', '29 404.80', 'R29404.8', '29404.8'],
              explanation: 'Deposito = 12% × 18 000 = R2 160\nBalans = 18 000 − 2 160 = R15 840\nA = 15 840(1 + 4 × 0,18) = 15 840(1,72) = R27 244,80\nTotale koste = R2 160 + R27 244,80 = R29 404,80 ✓',
            },
            {
              label: 'b) Vind die maandelikse paaiement.',
              correctAnswer: 'R567,60',
              correctAnswers: ['R567.60', '567.60', 'R567.6', '567.6'],
              explanation: 'Maandelikse paaiement = R27 244,80 ÷ (4 × 12) = R27 244,80 ÷ 48 = R567,60 ✓',
            },
            {
              label: 'c) Hoeveel meer betaal Amahle in totaal in vergelyking met die oorspronklike kontantprys?',
              correctAnswer: 'R11404,80',
              correctAnswers: ['R11404.80', '11404.80', 'R11 404.80', '11 404.80', 'R11404.8', '11404.8'],
              explanation: 'Ekstra betaal = Totale koste − Kontantprys = R29 404,80 − R18 000 = R11 404,80 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat ʼn huurkoopprobleem stap vir stap deurwerk en wys hoe die deposito in pers, balans in blou, rentekoers in oranje, terugbetalingstydperk in groen, en totale terugbetaling in rooi saamwerk',

      diagramPlaceholder:
        'Staafdiagram van ʼn huurkoopaankoop wat die deposito-segment in pers langs die gefinansierde balans-segment in blou wys, en dan dieselfde deposito langs ʼn groter totale terugbetaling-segment in rooi sodra enkelvoudige rente bygetel is',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="95" y="16" font-size="10.5" font-weight="700" fill="#374151" text-anchor="middle">Kontantprys</text><rect x="30" y="24" width="13" height="22" fill="#7c3aed"/><rect x="43" y="24" width="117" height="22" fill="#2563eb"/><rect x="30" y="24" width="130" height="22" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="36.5" y="60" font-size="8" font-weight="700" fill="#7c3aed" text-anchor="middle">deposito</text><text x="101" y="39" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Balans (P)</text><line x1="101" y1="46" x2="101" y2="70" stroke="#ea580c" stroke-width="2"/><polygon points="101,74 96,66 106,66" fill="#ea580c"/><text x="150" y="76" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">+ enkelvoudige rente</text><rect x="30" y="94" width="13" height="22" fill="#7c3aed"/><rect x="43" y="94" width="169.7" height="22" fill="#dc2626"/><rect x="30" y="94" width="182.7" height="22" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="128" y="109" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Totale terugbetaling (A)</text><text x="112" y="132" font-size="10.5" font-weight="700" fill="#374151" text-anchor="middle">Totale koste = deposito + A</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 7 — INFLASIE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'inflation',
      title: 'Inflasie en Koopkrag',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">${or('Inflasie')} is die tempo waarteen pryse mettertyd styg, wat die koopkrag van jou geld verminder. Omdat elke jaar se prysstyging op die <em>reeds-verhoogde</em> prys van die vorige jaar bereken word, groei inflasie eksponensieel — presies soos ${gr('saamgestelde groei')}. Ons gebruik dieselfde formule: ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup style="font-weight:700;color:#16a34a;">n</sup>, maar hier is ${bl('P')} ʼn ${bl('huidige prys')}, ${or('i')} is die ${or('inflasiekoers')}, en ${re('A')} is ʼn ${re('toekomstige prys')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('huidige prys P')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('inflasiekoers i')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('aantal jare n')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('toekomstige prys A')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die inflasieformule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.5em;font-weight:700;color:#374151;margin:0 0 8px 0;">${re('A')} = ${bl('P')}(1 + ${or('i')})<sup style="font-weight:700;color:#16a34a;">n</sup></p>` +
        `<p style="font-size:0.9em;color:#6b7280;margin:0;">dieselfde saamgestelde-groei-formule, toegepas op pryse in plaas van beleggings</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">P — Huidige Prys</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wat die item vandag kos, voor enige verdere inflasie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">i — Inflasiekoers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die gemiddelde jaarlikse persentasietoename in pryse, as ʼn desimale breuk geskryf.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">n — Aantal Jare</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Oor hoeveel jare van inflasie die prys geprojekteer word.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">A — Toekomstige Prys</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wat verwag word die item na n jaar se inflasie sal kos.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Koopkrag</p>` +
        `<p style="margin:0;color:#1e3a8a;">Jou <strong>koopkrag</strong> is hoeveel jy werklik met jou geld kan koop. As pryse 6% per jaar styg, maar jou salaris slegs 3% per jaar styg, val jou koopkrag — dieselfde randbedrag koop elke jaar minder, al is die getal op jou salarisstrokie groter.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Brood kos vandag R18. As inflasie gemiddeld 6% per jaar is, vind die verwagte prys van die brood na 5 jaar (rond af tot 2 desimale plekke).',
          answer: `${re('A')} ≈ ${re('R24,09')}`,
          steps: [
            `Skryf die formule neer: ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup>n</sup>`,
            `Vervang: ${bl('P')} = R18, ${or('i')} = 0,06, ${gr('n')} = 5:<br>${re('A')} = ${bl('18')}(1,06)<sup style="color:#16a34a;font-weight:700;">5</sup>`,
            `Bereken die mag: (1,06)<sup style="color:#16a34a;font-weight:700;">5</sup> ≈ 1,33823`,
            `Vermenigvuldig: ${re('A')} = ${bl('18')} × 1,33823 ≈ <strong>R24,09</strong> ✓`,
          ],
        },
        {
          question: 'ʼn Kruideniersmandjie kos vandag R2 500. As inflasie gemiddeld 5,5% per jaar is, vind die verwagte koste na 8 jaar, en hoeveel ekstra geld jy sou benodig in vergelyking met vandag (rond af tot 2 desimale plekke).',
          answer: `Koste ≈ ${re('R3 836,72')}; Ekstra benodig ≈ ${re('R1 336,72')}`,
          steps: [
            `Skryf die formule neer: ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup>n</sup>`,
            `Vervang: ${bl('P')} = R2 500, ${or('i')} = 0,055, ${gr('n')} = 8:<br>${re('A')} = ${bl('2 500')}(1,055)<sup style="color:#16a34a;font-weight:700;">8</sup>`,
            `Bereken die mag: (1,055)<sup style="color:#16a34a;font-weight:700;">8</sup> ≈ 1,53469`,
            `Vermenigvuldig: ${re('A')} = ${bl('2 500')} × 1,53469 ≈ <strong>R3 836,72</strong>`,
            `Ekstra geld benodig = R3 836,72 − R2 500 = <strong>R1 336,72</strong> ✓`,
          ],
        },
        {
          question: 'ʼn Handboek kos nou R450, na 3 jaar se inflasie wat gemiddeld 7% per jaar was. Vind wat die handboek 3 jaar gelede gekos het (rond af tot 2 desimale plekke).',
          answer: `${bl('P')} ≈ ${bl('R367,33')}`,
          steps: [
            `Skryf die formule neer: ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup>n</sup>, en los hierdie keer vir ${bl('P')} op.`,
            `Vervang: ${re('A')} = R450, ${or('i')} = 0,07, ${gr('n')} = 3:<br>450 = ${bl('P')}(1,07)<sup style="color:#16a34a;font-weight:700;">3</sup>`,
            `Bereken die mag: (1,07)<sup style="color:#16a34a;font-weight:700;">3</sup> ≈ 1,22504`,
            `Deel: ${bl('P')} = 450 ÷ 1,22504 ≈ <strong>R367,33</strong>`,
            `<strong>Antwoord:</strong> Die handboek het ongeveer ${bl('R367,33')} drie jaar gelede gekos. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Brood kos vandag R16. As inflasie gemiddeld 6% per jaar is, vind die verwagte prys na 3 jaar (rond af tot 2 desimale plekke).',
          answer: 'R19,06',
          checkMode: 'auto',
          correctAnswer: 'R19,06',
          correctAnswers: ['R19.06', '19.06'],
          explanation: 'A = P(1 + i)ⁿ = 16(1,06)³\n(1,06)³ = 1,191016\nA = 16 × 1,191016 ≈ R19,06 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Skool hef jaarlikse skoolgeld van R32 000. As skoolgeld met inflasie van 8% per jaar styg, vind:',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Die skoolgeld na 3 jaar (rond af na die naaste Rand).',
              correctAnswer: 'R40311',
              correctAnswers: ['R40311', '40311', 'R40 311', '40 311'],
              explanation: 'A = 32 000(1,08)³ ≈ 32 000 × 1,259712 ≈ R40 311 ✓',
            },
            {
              label: 'b) Die skoolgeld na 6 jaar (rond af na die naaste Rand).',
              correctAnswer: 'R50780',
              correctAnswers: ['R50780', '50780', 'R50 780', '50 780'],
              explanation: 'A = 32 000(1,08)⁶ ≈ 32 000 × 1,586874 ≈ R50 780 ✓',
            },
            {
              label: 'c) Die toename in skoolgeld tussen jaar 3 en jaar 6 (rond af na die naaste Rand).',
              correctAnswer: 'R10469',
              correctAnswers: ['R10469', '10469', 'R10 469', '10 469'],
              explanation: 'R50 780 − R40 311 = R10 469 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Handboek kos nou R620. As die gemiddelde inflasiekoers oor die afgelope 4 jaar 6,5% per jaar was, vind wat die handboek 4 jaar gelede sou gekos het (rond af na die naaste Rand).',
          answer: 'R482',
          checkMode: 'auto',
          correctAnswer: 'R482',
          correctAnswers: ['R482', '482'],
          explanation: '620 = P(1,065)⁴\n(1,065)⁴ ≈ 1,28647\nP = 620 ÷ 1,28647 ≈ R482 ✓',
        },
      ],

      videoPlaceholder:
        'Kort video wat inflasie verduidelik deur die saamgestelde-groei-formule A=P(1+i)^n te gebruik om toekomstige pryse te projekteer, met huidige prys in blou, inflasiekoers in oranje, jare in groen, toekomstige prys in rooi, en hoe koopkrag geraak word',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 8 — BEVOLKINGSGROEI
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'population-growth',
      title: 'Bevolkingsgroei',
      icon: '👥',
      explanation:
        `<p style="margin-bottom:16px;">Bevolkingsgroei volg presies dieselfde eksponensiële patroon as saamgestelde rente — elke jaar se groei vind bo-op die reeds-groter bevolking van die vorige jaar plaas. Ons hergebruik die ${gr('saamgestelde-groei')}-formule ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup style="font-weight:700;color:#16a34a;">n</sup>, maar hier is ${bl('P')} ʼn ${bl('beginbevolking')}, ${or('i')} is ʼn ${or('jaarlikse groeikoers')}, en ${re('A')} is ʼn ${re('toekomstige bevolking')}. Aangesien jy nie deel van ʼn persoon kan hê nie, word bevolkingsantwoorde altyd na die naaste heelgetal afgerond.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('beginbevolking P')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('groeikoers i')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('aantal jare n')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('toekomstige bevolking A')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die bevolkingsgroei-formule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.5em;font-weight:700;color:#374151;margin:0 0 8px 0;">${re('A')} = ${bl('P')}(1 + ${or('i')})<sup style="font-weight:700;color:#16a34a;">n</sup></p>` +
        `<p style="font-size:0.9em;color:#6b7280;margin:0;">dieselfde saamgestelde-groei-formule — geld word deur mense vervang!</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Groei, verval en verdubbelingstyd</p>` +
        `<p style="margin:0;color:#1e3a8a;">Nie alle bevolkings groei nie — ʼn dorp wat inwoners aan emigrasie verloor, krimp met dieselfde idee as enkelvoudige/saamgestelde <strong>verval</strong>. En net soos met beleggings kan jy <strong>probeer en verbeter</strong> gebruik (sien Oplos vir n) om te bereken hoeveel jare dit neem vir ʼn bevolking om te verdubbel, of om ʼn teikengrootte te bereik.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Dorp se bevolking is 8 200 en groei teen 2,8% per jaar. Vind die bevolking na 6 jaar (rond af na die naaste heelgetal).',
          answer: `Bevolking ≈ ${re('9 678')}`,
          steps: [
            `Skryf die formule neer: ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup>n</sup>`,
            `Vervang: ${bl('P')} = 8 200, ${or('i')} = 0,028, ${gr('n')} = 6:<br>${re('A')} = ${bl('8 200')}(1,028)<sup style="color:#16a34a;font-weight:700;">6</sup>`,
            `Bereken die mag: (1,028)<sup style="color:#16a34a;font-weight:700;">6</sup> ≈ 1,18021`,
            `Vermenigvuldig: ${re('A')} = ${bl('8 200')} × 1,18021 ≈ <strong>9 678</strong> mense ✓`,
          ],
        },
        {
          question: 'ʼn Stad se bevolking het teen 3% per jaar oor 8 jaar gegroei om 96 000 te bereik. Vind die bevolking 8 jaar gelede (rond af na die naaste heelgetal).',
          answer: `${bl('P')} ≈ ${bl('75 783')}`,
          steps: [
            `Skryf die formule neer: ${re('A')} = ${bl('P')}(1 + ${or('i')})<sup>n</sup>, en los hierdie keer vir ${bl('P')} op.`,
            `Vervang: ${re('A')} = 96 000, ${or('i')} = 0,03, ${gr('n')} = 8:<br>96 000 = ${bl('P')}(1,03)<sup style="color:#16a34a;font-weight:700;">8</sup>`,
            `Bereken die mag: (1,03)<sup style="color:#16a34a;font-weight:700;">8</sup> ≈ 1,26677`,
            `Deel: ${bl('P')} = 96 000 ÷ 1,26677 ≈ <strong>75 783</strong> mense`,
            `<strong>Antwoord:</strong> Die bevolking 8 jaar gelede was ongeveer ${bl('75 783')}. ✓`,
          ],
        },
        {
          question: 'ʼn Landelike bevolking van 5 000 groei teen 4,5% per jaar. Gebruik probeer en verbeter om te vind hoeveel jare dit neem vir die bevolking om te verdubbel.',
          answer: `Ongeveer ${gr('16')} jaar`,
          steps: [
            `Verdubbeling beteken ons moet (1,045)<sup>${bl('n')}</sup> = ${or('2')} kry.`,
            `${bl('Probeer n = 15:')} (1,045)<sup>15</sup> ≈ 1,935 — dit is onder die ${or('teiken van 2')}, dus is n = 15 te laag.`,
            `${bl('Probeer n = 16:')} (1,045)<sup>16</sup> ≈ 2,022 — dit oorskry die ${or('teiken van 2')}.`,
            `<strong>Gevolgtrekking:</strong> Aangesien bevolking in heel jare getel word, neem dit ongeveer ${gr('n = 16')} jaar vir die bevolking om te verdubbel. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Dorp se bevolking is 12 000 en groei teen 3,2% per jaar. Vind die bevolking na 4 jaar (rond af na die naaste heelgetal).',
          answer: '13 611',
          checkMode: 'auto',
          correctAnswer: '13611',
          correctAnswers: ['13611', '13 611'],
          explanation: 'A = P(1 + i)ⁿ = 12 000(1,032)⁴\n(1,032)⁴ ≈ 1,13428\nA ≈ 12 000 × 1,13428 ≈ 13 611 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Stad se bevolking van 55 000 groei teen 2,5% per jaar.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vind die bevolking na 5 jaar (rond af na die naaste heelgetal).',
              correctAnswer: '62227',
              correctAnswers: ['62227', '62 227'],
              explanation: 'A = 55 000(1,025)⁵\n(1,025)⁵ ≈ 1,13141\nA ≈ 55 000 × 1,13141 ≈ 62 227 ✓',
            },
            {
              label: 'b) Vind die bevolking na 10 jaar (rond af na die naaste heelgetal).',
              correctAnswer: '70405',
              correctAnswers: ['70405', '70 405'],
              explanation: 'A = 55 000(1,025)¹⁰\n(1,025)¹⁰ ≈ 1,28008\nA ≈ 55 000 × 1,28008 ≈ 70 405 ✓',
            },
            {
              label: 'c) Met hoeveel mense neem die bevolking toe tussen jaar 5 en jaar 10?',
              correctAnswer: '8177',
              correctAnswers: ['8177', '8 177', '8178', '8 178'],
              explanation: '70 405 − 62 227 = 8 177 mense (klein afrondingsverskille van een persoon is aanvaarbaar) ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Distrik se bevolking het teen 3,5% per jaar oor 7 jaar gegroei om 140 000 te bereik. Vind die distrik se bevolking 7 jaar gelede (rond af na die naaste heelgetal).',
          answer: '110 039',
          checkMode: 'auto',
          correctAnswer: '110039',
          correctAnswers: ['110039', '110 039'],
          explanation: '140 000 = P(1,035)⁷\n(1,035)⁷ ≈ 1,27228\nP = 140 000 ÷ 1,27228 ≈ 110 039 ✓',
        },
      ],

      videoPlaceholder:
        'Kort video wat die saamgestelde-groei-formule A=P(1+i)^n op bevolkingsyfers toepas, met beginbevolking in blou, groeikoers in oranje, jare in groen, en toekomstige bevolking in rooi, insluitend verdubbelingstyd deur probeer en verbeter',

      diagramPlaceholder:
        'Groeiende skare kolletjies wat ʼn klein beginbevolking wys wat oor tyd na ʼn veel groter bevolking groei, wat eksponensiële bevolkingsgroei illustreer',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="112" y="16" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">bevolking groei vinniger namate dit groter word</text><text x="40" y="120" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">P</text><circle cx="35" cy="144" r="3.2" fill="#2563eb"/><circle cx="45" cy="144" r="3.2" fill="#2563eb"/><circle cx="40" cy="135" r="3.2" fill="#2563eb"/><circle cx="100" cy="135" r="3.2" fill="#ea580c"/><circle cx="112" cy="135" r="3.2" fill="#ea580c"/><circle cx="124" cy="135" r="3.2" fill="#ea580c"/><circle cx="100" cy="144" r="3.2" fill="#ea580c"/><circle cx="112" cy="144" r="3.2" fill="#ea580c"/><circle cx="124" cy="144" r="3.2" fill="#ea580c"/><text x="185" y="104" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">A</text><circle cx="167" cy="126" r="3.2" fill="#dc2626"/><circle cx="177" cy="126" r="3.2" fill="#dc2626"/><circle cx="187" cy="126" r="3.2" fill="#dc2626"/><circle cx="197" cy="126" r="3.2" fill="#dc2626"/><circle cx="167" cy="135" r="3.2" fill="#dc2626"/><circle cx="177" cy="135" r="3.2" fill="#dc2626"/><circle cx="187" cy="135" r="3.2" fill="#dc2626"/><circle cx="197" cy="135" r="3.2" fill="#dc2626"/><circle cx="167" cy="144" r="3.2" fill="#dc2626"/><circle cx="177" cy="144" r="3.2" fill="#dc2626"/><circle cx="187" cy="144" r="3.2" fill="#dc2626"/><circle cx="197" cy="144" r="3.2" fill="#dc2626"/><line x1="20" y1="152" x2="210" y2="152" stroke="#16a34a" stroke-width="1.8"/><polygon points="210,152 202,148 202,156" fill="#16a34a"/><text x="40" y="164" font-size="9" font-weight="700" fill="#2563eb" text-anchor="middle">t = 0</text><text x="112" y="164" font-size="9" font-weight="700" fill="#16a34a" text-anchor="middle">t = n/2</text><text x="185" y="164" font-size="9" font-weight="700" fill="#dc2626" text-anchor="middle">t = n</text></svg>',
    },
  ],

  topicPractice: [
    // ── V1 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken die enkelvoudige rente (nie die finale bedrag nie) op R4 000 teen 5% per jaar vir 3 jaar.',
      checkMode: 'auto',
      options: ['R600', 'R4 600', 'R400', 'R200'],
      correctIndex: 0,
      explanation: 'Slegs die enkelvoudige rente = P × n × i = 4 000 × 3 × 0,05 = R600. (R4 600 is die finale bedrag A, nie net die rente nie; R400 gebruik verkeerdelik n = 2; R200 gebruik verkeerdelik n = 1.)',
    },

    // ── V2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die finale bedrag na 6 jaar as R7 500 teen 6% enkelvoudige rente belê word.',
      checkMode: 'auto',
      options: ['R10 638,90', 'R10 200', 'R9 750', 'R2 700'],
      correctIndex: 1,
      explanation: 'A = P(1 + ni) = 7 500(1 + 6 × 0,06) = 7 500(1,36) = R10 200. (R10 638,90 gebruik verkeerdelik saamgestelde rente; R9 750 gebruik verkeerdelik n = 5; R2 700 gee net die rente, nie die finale bedrag nie.)',
    },

    // ── V3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê enkelvoudige rente van R500 oor 2 jaar op R5 000 beteken die rentekoers was 10%. Wat is die korrekte rentekoers?',
      checkMode: 'auto',
      options: ['10%', '20%', '5%', '2,5%'],
      correctIndex: 2,
      explanation: 'ER = P × n × i, dus i = ER ÷ (P × n) = 500 ÷ (5 000 × 2) = 0,05 = 5%. Sipho het vergeet om deur n = 2 te deel, wat is hoe hy die verkeerde 10% gekry het.',
    },

    // ── V4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken die saamgestelde-rente-bedrag op R3 000 teen 4% per jaar vir 5 jaar.',
      checkMode: 'auto',
      options: ['R3 600', 'R3 509,58', 'R649,96', 'R3 649,96'],
      correctIndex: 3,
      explanation: 'A = 3 000(1,04)⁵ = 3 000 × 1,21665 ≈ R3 649,96. (R3 600 gebruik verkeerdelik enkelvoudige rente; R3 509,58 gebruik verkeerdelik n = 4; R649,96 gee net die rente verdien, nie die totale bedrag nie.)',
    },

    // ── V5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die finale bedrag na 8 jaar as R6 000 teen 7% saamgestelde rente belê word.',
      checkMode: 'auto',
      options: ['R10 309,12', 'R9 360', 'R9 634,69', 'R4 309,12'],
      correctIndex: 0,
      explanation: 'A = 6 000(1,07)⁸ = 6 000 × 1,718186 ≈ R10 309,12. (R9 360 gebruik verkeerdelik enkelvoudige rente; R9 634,69 gebruik verkeerdelik n = 7; R4 309,12 gee net die rente verdien.)',
    },

    // ── V6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato vergelyk enkelvoudige en saamgestelde rente op R8 000 teen 6% oor 4 jaar. Vind die verskil tussen die twee finale bedrae.',
      checkMode: 'auto',
      options: ['R9 920', 'R179,82', 'R10 099,82', 'R199,82'],
      correctIndex: 1,
      explanation: 'Enkelvoudig: 8 000(1 + 4 × 0,06) = R9 920. Saamgesteld: 8 000(1,06)⁴ ≈ R10 099,82. Verskil ≈ R179,82. (R9 920 en R10 099,82 is die individuele bedrae, nie die verskil nie; R199,82 het ʼn rekenfout.)',
    },

    // ── V7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Bevolking van 40 000 groei teen 4% per jaar. Vind die bevolking na 7 jaar, afgerond na die naaste heelgetal.',
      checkMode: 'auto',
      options: ['51 200', '50 613', '52 637', '54 743'],
      correctIndex: 2,
      explanation: 'A = 40 000(1,04)⁷ = 40 000 × 1,31593 ≈ 52 637. (51 200 gebruik verkeerdelik enkelvoudige groei; 50 613 gebruik verkeerdelik n = 6; 54 743 gebruik verkeerdelik n = 8.)',
    },

    // ── V8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Hoe lank sal dit ʼn belegging neem om te verdubbel teen 10% saamgestelde rente, deur probeer en verbeter te gebruik?',
      checkMode: 'auto',
      options: ['7 jaar', '9 jaar', '10 jaar', '8 jaar'],
      correctIndex: 3,
      explanation: 'Ons benodig (1,10)ⁿ ≥ 2. Probeer n = 7: 1,10⁷ ≈ 1,949 (nog nie dubbel nie). Probeer n = 8: 1,10⁸ ≈ 2,144 (oorskry dubbel). Dit neem dus 8 jaar — die kleinste heelgetal jare waar die bedrag minstens verdubbel het.',
    },

    // ── V9 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo belê R20 000 teen 5% saamgestelde rente. Vind hoeveel jare dit neem om tot minstens R25 000 te groei, deur probeer en verbeter te gebruik.',
      checkMode: 'auto',
      options: ['5 jaar', '4 jaar', '6 jaar', '3 jaar'],
      correctIndex: 0,
      explanation: 'Ons benodig (1,05)ⁿ ≥ 1,25. Probeer n = 4: 1,05⁴ ≈ 1,216 (te laag). Probeer n = 5: 1,05⁵ ≈ 1,276 (oorskry 1,25). Dit neem ongeveer 5 jaar.',
    },

    // ── V10 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'As R1 = $0,06, vind die koste in Rand van ʼn $300-item.',
      checkMode: 'auto',
      options: ['R18', 'R5 000', 'R300', 'R50 000'],
      correctIndex: 1,
      explanation: 'Skakel Dollar na Rand om: deel deur die wisselkoers: $300 ÷ 0,06 = R5 000. (R18 kom van vermenigvuldig in plaas van deel; R50 000 kom van die koers verkeerdelik as 0,006 te lees.)',
    },

    // ── V11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Skakel R10 000 om na Britse Pond teen ʼn wisselkoers van R1 = £0,043.',
      checkMode: 'auto',
      options: ['£232 558,14', '£43', '£430', '£4 300'],
      correctIndex: 2,
      explanation: 'Skakel Rand na Britse Pond om: vermenigvuldig met die wisselkoers: R10 000 × 0,043 = £430. (£232 558,14 kom van deel in plaas van vermenigvuldig; £43 en £4 300 kom van die desimale punt verkeerd te plaas.)',
    },

    // ── V12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle koop ʼn item wat $450 (USD) kos wanneer R1 = $0,055. Vind die koste in Rand, afgerond na die naaste Rand.',
      checkMode: 'auto',
      options: ['R25', 'R818', 'R81 818', 'R8 182'],
      correctIndex: 3,
      explanation: 'Skakel Dollar na Rand om: deel deur die wisselkoers: $450 ÷ 0,055 ≈ R8 182. (R25 kom van vermenigvuldig in plaas van deel; R818 en R81 818 kom van die desimale punt in 0,055 verkeerd te plaas.)',
    },

    // ── V13 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho koop ʼn TV ter waarde van R9 000 op huurkoop teen 18% enkelvoudige rente oor 2 jaar. Vind sy totale terugbetaling.',
      checkMode: 'auto',
      options: ['R12 240', 'R12 531,60', 'R3 240', 'R13 860'],
      correctIndex: 0,
      explanation: 'A = P(1 + ni) = 9 000(1 + 2 × 0,18) = 9 000(1,36) = R12 240. (R12 531,60 gebruik verkeerdelik saamgestelde rente; R3 240 gee net die rente, nie die totale terugbetaling nie; R13 860 gebruik verkeerdelik n = 3.)',
    },

    // ── V14 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato belê R15 000 teen 9% saamgestelde rente vir 10 jaar. Vind die finale bedrag, afgerond na die naaste Rand.',
      checkMode: 'auto',
      options: ['R28 500', 'R35 510', 'R32 578', 'R20 510'],
      correctIndex: 1,
      explanation: 'A = 15 000(1,09)¹⁰ = 15 000 × 2,367363 ≈ R35 510. (R28 500 gebruik verkeerdelik enkelvoudige rente; R32 578 gebruik verkeerdelik n = 9; R20 510 gee net die rente verdien.)',
    },

    // ── V15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Motor met ʼn waarde van R250 000 verval deur enkelvoudige verval teen 12% per jaar. Vind sy waarde na 5 jaar.',
      checkMode: 'auto',
      options: ['R131 933', 'R130 000', 'R100 000', 'R70 000'],
      correctIndex: 2,
      explanation: 'A = P(1 − ni) = 250 000(1 − 5 × 0,12) = 250 000(0,4) = R100 000. (R131 933 gebruik verkeerdelik saamgestelde verval; R130 000 gebruik verkeerdelik n = 4; R70 000 gebruik verkeerdelik n = 6.)',
    },

    // ── V16 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo belê R1 000 vir 10 jaar en vergelyk 5% teenoor 10% saamgestelde rente. Is hy korrek dat die verdubbeling van die rentekoers die finale bedrag verdubbel?',
      checkMode: 'auto',
      options: [
        'Ja — 5% gee R1 500 en 10% gee R3 000, dus verdubbel die bedrag presies.',
        'Ja — saamgestelde rente skaal altyd lineêr met die rentekoers.',
        'Nee — maar slegs omdat die aantal jare onewe is; vir ʼn ewe aantal jare sou die verdubbeling van die koers die bedrag verdubbel.',
        'Nee — 5% vir 10 jaar gee ≈ R1 628,89 terwyl 10% vir 10 jaar ≈ R2 593,74 gee, wat nie dubbel is nie, aangesien saamgestelde groei eksponensieel is, nie lineêr nie.',
      ],
      correctIndex: 3,
      explanation: 'R1 000(1,05)¹⁰ ≈ R1 628,89 en R1 000(1,10)¹⁰ ≈ R2 593,74. R2 593,74 is nie dubbel R1 628,89 nie, dus is Thabo verkeerd — saamgestelde groei is eksponensieel, sodat die verdubbeling van die koers nie eenvoudig die uitkoms verdubbel nie, ongeag of n ewe of onewe is.',
    },

    // ── V17 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Amahle se bevolking van 60 000 groei teen 2,5% per jaar. Vind hoeveel jare dit neem voordat die bevolking 80 000 oorskry, deur probeer en verbeter te gebruik.",
      checkMode: 'auto',
      options: ['12 jaar', '11 jaar', '13 jaar', '10 jaar'],
      correctIndex: 0,
      explanation: 'Ons benodig (1,025)ⁿ ≥ 1,333. Probeer n = 11: 1,025¹¹ ≈ 1,312 (te laag). Probeer n = 12: 1,025¹² ≈ 1,345 (oorskry 1,333). Dit neem ongeveer 12 jaar.',
    },

    // ── V18 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho skakel R5 000 om na Amerikaanse Dollar teen R1 = $0,055, en skakel dan die Dollarbedrag ʼn maand later terug na Rand teen R1 = $0,052. Wat is sy Rand-waarde na albei omskakelings?',
      checkMode: 'auto',
      options: ['R14,30', 'R5 288,46', 'R5 000', 'R96 153,85'],
      correctIndex: 1,
      explanation: 'Eerste omskakeling: R5 000 × 0,055 = $275. Tweede omskakeling terug: $275 ÷ 0,052 ≈ R5 288,46. Die waarde het toegeneem omdat die Rand tussen die omskakelings verswak het, sodat elke Dollar op pad terug meer Rand gekoop het. (R14,30 vermenigvuldig verkeerdelik met die tweede koers in plaas van te deel; R5 000 neem verkeerdelik aan daar was geen verandering nie; R96 153,85 skakel die oorspronklike R5 000 direk met die tweede koers om in plaas daarvan om die $275 om te skakel.)',
    },

    // ── V19 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vergelyk die belegging van R12 000 teen 6% enkelvoudige rente vir 8 jaar met 6% saamgestelde rente vir 8 jaar. Vind die verskil tussen die twee finale bedrae.',
      checkMode: 'auto',
      options: ['R17 760', 'R19 126,18', 'R1 366,18', 'R1 266,18'],
      correctIndex: 2,
      explanation: 'Enkelvoudig: 12 000(1 + 8 × 0,06) = R17 760. Saamgesteld: 12 000(1,06)⁸ ≈ R19 126,18. Verskil ≈ R1 366,18. (R17 760 en R19 126,18 is die individuele bedrae, nie die verskil nie; R1 266,18 het ʼn rekenfout.)',
    },

    // ── V20 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato belê R18 000 teen ʼn onbekende saamgestelde rentekoers en na 6 jaar groei dit tot R24 000. Gebruik probeer en verbeter om die rentekoers na die naaste persent te skat.',
      checkMode: 'auto',
      options: ['4%', '6%', '3%', '5%'],
      correctIndex: 3,
      explanation: 'Ons benodig (1 + i)⁶ = 24 000 ÷ 18 000 ≈ 1,333. Probeer i = 4%: 1,04⁶ ≈ 1,265 (te laag). Probeer i = 5%: 1,05⁶ ≈ 1,340 (naaste passing). Probeer i = 6%: 1,06⁶ ≈ 1,419 (te hoog). Dus is die koers ongeveer 5%.',
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
        { difficulty: 'Easy', question: 'Bereken die finale bedrag as R2 500 teen 6% enkelvoudige rente per jaar vir 3 jaar belê word.', checkMode: 'auto', options: ['R2 950', 'R2 977,54', 'R2 800', 'R450'], correctIndex: 0, explanation: 'A = P(1 + ni) = 2 500(1 + 3 × 0,06) = 2 500(1,18) = R2 950. (R2 977,54 gebruik verkeerdelik saamgestelde rente; R2 800 gebruik verkeerdelik n = 2; R450 gee net die rente, nie die finale bedrag nie.)' },
        { difficulty: 'Easy', question: 'Bereken die finale bedrag as R5 000 teen 8% enkelvoudige rente per jaar vir 2 jaar belê word.', checkMode: 'auto', options: ['R5 832', 'R5 800', 'R5 400', 'R800'], correctIndex: 1, explanation: 'A = P(1 + ni) = 5 000(1 + 2 × 0,08) = 5 000(1,16) = R5 800. (R5 832 gebruik verkeerdelik saamgestelde rente; R5 400 gebruik verkeerdelik n = 1; R800 gee net die rente, nie die finale bedrag nie.)' },
        { difficulty: 'Medium', question: 'Thabo belê R9 000 teen 5% enkelvoudige rente per jaar vir 4 jaar. Vind die totale rente verdien (nie die finale bedrag nie).', checkMode: 'auto', options: ['R10 800', 'R1 350', 'R1 800', 'R2 250'], correctIndex: 2, explanation: 'Rente = P × n × i = 9 000 × 4 × 0,05 = R1 800. (R10 800 is die finale bedrag, nie net die rente nie; R1 350 en R2 250 gebruik verkeerdelik n = 3 en n = 5.)' },
        { difficulty: 'Medium', question: 'ʼn Belegging wat 5% enkelvoudige rente per jaar verdien, groei na R6 000 na 4 jaar. Vind die oorspronklike hoofsom.', checkMode: 'auto', options: ['R4 936,14', 'R5 217,39', 'R30 000', 'R5 000'], correctIndex: 3, explanation: 'A = P(1 + ni)\n6 000 = P(1 + 4 × 0,05) = P(1,20)\nP = 6 000 ÷ 1,20 = R5 000. (R4 936,14 deel verkeerdelik deur (1,05)⁴; R5 217,39 gebruik verkeerdelik n = 3; R30 000 behandel R6 000 verkeerdelik as die rente in plaas van die finale bedrag.)' },

        // Blok 2 — Saamgestelde rente (Easy, Medium, Medium, Hard)
        { difficulty: 'Easy', question: 'Bereken die finale bedrag as R2 000 teen 10% saamgestelde rente per jaar vir 2 jaar belê word.', checkMode: 'auto', options: ['R2 420', 'R2 400', 'R2 200', 'R420'], correctIndex: 0, explanation: 'A = P(1 + i)ⁿ = 2 000(1,10)² = 2 000 × 1,21 = R2 420. (R2 400 gebruik verkeerdelik enkelvoudige rente; R2 200 gebruik verkeerdelik n = 1; R420 gee net die rente verdien.)' },
        { difficulty: 'Medium', question: 'Bereken die finale bedrag as R3 200 teen 5% saamgestelde rente per jaar vir 3 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R3 680', 'R3 704,40', 'R3 528', 'R504,40'], correctIndex: 1, explanation: 'A = 3 200(1,05)³ = 3 200 × 1,157625 ≈ R3 704,40. (R3 680 gebruik verkeerdelik enkelvoudige rente; R3 528 gebruik verkeerdelik n = 2; R504,40 gee net die rente verdien.)' },
        { difficulty: 'Medium', question: 'Bereken die finale bedrag as R4 500 teen 6% saamgestelde rente per jaar vir 4 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R5 580', 'R5 359,57', 'R5 681,15', 'R1 181,15'], correctIndex: 2, explanation: 'A = 4 500(1,06)⁴ = 4 500 × 1,26247696 ≈ R5 681,15. (R5 580 gebruik verkeerdelik enkelvoudige rente; R5 359,57 gebruik verkeerdelik n = 3; R1 181,15 gee net die rente verdien.)' },
        { difficulty: 'Hard', question: 'Bereken die finale bedrag as R12 000 teen 7% saamgestelde rente per jaar vir 6 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R17 040', 'R16 830,62', 'R6 008,76', 'R18 008,76'], correctIndex: 3, explanation: 'A = 12 000(1,07)⁶ = 12 000 × 1,50073 ≈ R18 008,76. (R17 040 gebruik verkeerdelik enkelvoudige rente; R16 830,62 gebruik verkeerdelik n = 5; R6 008,76 gee net die rente verdien.)' },

        // Blok 3 — Vergelyking van enkelvoudige en saamgestelde rente (Medium, Hard, Hard)
        { difficulty: 'Medium', question: 'Vergelyk die belegging van R7 000 teen 7% vir 4 jaar met enkelvoudige rente teenoor saamgestelde rente. Vind die verskil tussen die twee finale bedrae (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R215,57', 'R8 960', 'R9 175,57', 'R205,57'], correctIndex: 0, explanation: 'Enkelvoudig: 7 000(1 + 4 × 0,07) = R8 960.\nSaamgesteld: 7 000(1,07)⁴ ≈ R9 175,57.\nVerskil ≈ R215,57. (R8 960 en R9 175,57 is die individuele bedrae, nie die verskil nie; R205,57 het ʼn rekenfout.)' },
        { difficulty: 'Hard', question: 'Vergelyk die belegging van R9 000 teen 6% vir 8 jaar met enkelvoudige rente teenoor saamgestelde rente. Vind die verskil tussen die twee finale bedrae (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R13 320', 'R1 024,63', 'R14 344,63', 'R1 124,63'], correctIndex: 1, explanation: 'Enkelvoudig: 9 000(1 + 8 × 0,06) = R13 320.\nSaamgesteld: 9 000(1,06)⁸ ≈ R14 344,63.\nVerskil ≈ R1 024,63. (R13 320 en R14 344,63 is die individuele bedrae, nie die verskil nie; R1 124,63 het ʼn rekenfout.)' },
        { difficulty: 'Hard', question: 'Vergelyk die belegging van R5 000 teen 8% vir 6 jaar met enkelvoudige rente teenoor saamgestelde rente. Vind die verskil tussen die twee finale bedrae (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R7 400', 'R7 934,37', 'R534,37', 'R634,37'], correctIndex: 2, explanation: 'Enkelvoudig: 5 000(1 + 6 × 0,08) = R7 400.\nSaamgesteld: 5 000(1,08)⁶ ≈ R7 934,37.\nVerskil ≈ R534,37. (R7 400 en R7 934,37 is die individuele bedrae, nie die verskil nie; R634,37 het ʼn rekenfout.)' },

        // Blok 4 — Huurkoop (Medium, Medium, Hard)
        { difficulty: 'Medium', question: 'Sipho koop ʼn yskas ter waarde van R6 000 op huurkoop teen 15% enkelvoudige rente oor 2 jaar, sonder ʼn deposito. Vind sy totale terugbetaling.', checkMode: 'auto', options: ['R7 935', 'R1 800', 'R8 700', 'R7 800'], correctIndex: 3, explanation: 'A = P(1 + ni) = 6 000(1 + 2 × 0,15) = 6 000(1,30) = R7 800. (R7 935 gebruik verkeerdelik saamgestelde rente; R1 800 gee net die rente, nie die totale terugbetaling nie; R8 700 gebruik verkeerdelik n = 3.)' },
        { difficulty: 'Medium', question: 'Lerato koop ʼn skootrekenaar ter waarde van R10 000 op huurkoop teen 20% enkelvoudige rente oor 3 jaar, sonder ʼn deposito. Vind haar totale terugbetaling.', checkMode: 'auto', options: ['R16 000', 'R17 280', 'R6 000', 'R14 000'], correctIndex: 0, explanation: 'A = 10 000(1 + 3 × 0,20) = 10 000(1,60) = R16 000. (R17 280 gebruik verkeerdelik saamgestelde rente; R6 000 gee net die rente, nie die totale terugbetaling nie; R14 000 gebruik verkeerdelik n = 2.)' },
        { difficulty: 'Hard', question: 'Amahle koop meubels met ʼn kontantprys van R18 000. Sy betaal ʼn 15%-deposito en betaal die balans op huurkoop terug teen 12% enkelvoudige rente per jaar oor 4 jaar. Vind haar totale terugbetaling (deposito plus huurkoop-paaiemente), afgerond na die naaste sent.', checkMode: 'auto', options: ['R26 640', 'R25 344', 'R22 644', 'R23 508'], correctIndex: 1, explanation: 'Deposito = 15% × 18 000 = R2 700.\nBalans = 18 000 − 2 700 = R15 300.\nHuurkoopbedrag op balans = 15 300(1 + 4 × 0,12) = 15 300(1,48) = R22 644.\nTotale terugbetaling = R2 700 + R22 644 = R25 344. (R26 640 pas rente verkeerdelik op die volle kontantprys toe in plaas van die balans; R22 644 vergeet om die deposito weer by te tel; R23 508 gebruik verkeerdelik n = 3.)' },

        // Blok 5 — Enkelvoudige groei-/verval-woordprobleme (Medium, Medium, Hard)
        { difficulty: 'Medium', question: 'ʼn Dorp se bevolking van 15 000 groei teen 4% saamgestelde groei per jaar. Vind die bevolking na 5 jaar, afgerond na die naaste heelgetal.', checkMode: 'auto', options: ['18 000', '17 548', '18 250', '18 980'], correctIndex: 2, explanation: 'A = 15 000(1,04)⁵ = 15 000 × 1,21665 ≈ 18 250. (18 000 gebruik verkeerdelik enkelvoudige groei; 17 548 gebruik verkeerdelik n = 4; 18 980 gebruik verkeerdelik n = 6.)' },
        { difficulty: 'Medium', question: 'ʼn Masjien ter waarde van R150 000 verval deur enkelvoudige (reguitlyn) verval teen 10% per jaar. Vind sy waarde na 4 jaar.', checkMode: 'auto', options: ['R98 415', 'R105 000', 'R75 000', 'R90 000'], correctIndex: 3, explanation: 'A = P(1 − ni) = 150 000(1 − 4 × 0,10) = 150 000(0,60) = R90 000. (R98 415 gebruik verkeerdelik saamgestelde verval; R105 000 gebruik verkeerdelik n = 3; R75 000 gebruik verkeerdelik n = 5.)' },
        { difficulty: 'Hard', question: 'ʼn Motor ter waarde van R220 000 verval deur enkelvoudige (reguitlyn) verval teen 18% per jaar. Vind sy waarde na 3 jaar.', checkMode: 'auto', options: ['R101 200', 'R121 301', 'R140 800', 'R61 600'], correctIndex: 0, explanation: 'A = P(1 − ni) = 220 000(1 − 3 × 0,18) = 220 000(0,46) = R101 200. (R121 301 gebruik verkeerdelik saamgestelde verval; R140 800 gebruik verkeerdelik n = 2; R61 600 gebruik verkeerdelik n = 4.)' },

        // Blok 6 — Gekombineerde multi-stap probleme (Hard, Hard, Hard)
        { difficulty: 'Hard', question: 'Thabo belê R8 000 teen 9% saamgestelde rente per jaar vir 5 jaar. Vind die finale bedrag (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R11 600', 'R12 308,99', 'R11 292,66', 'R4 308,99'], correctIndex: 1, explanation: 'A = 8 000(1,09)⁵ = 8 000 × 1,53862 ≈ R12 308,99. (R11 600 gebruik verkeerdelik enkelvoudige rente; R11 292,66 gebruik verkeerdelik n = 4; R4 308,99 gee net die rente verdien.)' },
        { difficulty: 'Hard', question: 'Nomsa belê R6 000 teen 7,5% saamgestelde rente per jaar vir 4 jaar. Vind die finale bedrag (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R7 800', 'R7 453,78', 'R8 012,81', 'R2 012,81'], correctIndex: 2, explanation: 'A = 6 000(1,075)⁴ = 6 000 × 1,33546... ≈ R8 012,81. (R7 800 gebruik verkeerdelik enkelvoudige rente; R7 453,78 gebruik verkeerdelik n = 3; R2 012,81 gee net die rente verdien.)' },
        { difficulty: 'Hard', question: 'Sipho verdien R1 500 enkelvoudige rente op ʼn hoofsom van R5 000 belê vir 3 jaar. Vind die jaarlikse rentekoers wat gebruik is.', checkMode: 'auto', options: ['30%', '15%', '5%', '10%'], correctIndex: 3, explanation: 'Rente = P × n × i, dus i = Rente ÷ (P × n) = 1 500 ÷ (5 000 × 3) = 0,10 = 10%. (30% vergeet om deur n = 3 te deel; 15% gebruik verkeerdelik n = 2; 5% halveer verkeerdelik die korrekte koers.)' },
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
        { difficulty: 'Easy', question: 'Bereken die finale bedrag as R3 200 teen 5% enkelvoudige rente per jaar vir 4 jaar belê word.', checkMode: 'auto', options: ['R3 840', 'R3 889,62', 'R3 680', 'R640'], correctIndex: 0, explanation: 'A = P(1 + ni) = 3 200(1 + 4 × 0,05) = 3 200(1,20) = R3 840. (R3 889,62 gebruik verkeerdelik saamgestelde rente; R3 680 gebruik verkeerdelik n = 3; R640 gee net die rente, nie die finale bedrag nie.)' },
        { difficulty: 'Easy', question: 'Bereken die finale bedrag as R4 000 teen 9% enkelvoudige rente per jaar vir 3 jaar belê word.', checkMode: 'auto', options: ['R5 180,12', 'R5 080', 'R4 720', 'R1 080'], correctIndex: 1, explanation: 'A = P(1 + ni) = 4 000(1 + 3 × 0,09) = 4 000(1,27) = R5 080. (R5 180,12 gebruik verkeerdelik saamgestelde rente; R4 720 gebruik verkeerdelik n = 2; R1 080 gee net die rente, nie die finale bedrag nie.)' },
        { difficulty: 'Medium', question: 'Lerato belê R11 000 teen 4,5% enkelvoudige rente per jaar vir 6 jaar. Vind die totale rente verdien (nie die finale bedrag nie).', checkMode: 'auto', options: ['R13 970', 'R2 475', 'R2 970', 'R3 465'], correctIndex: 2, explanation: 'Rente = P × n × i = 11 000 × 6 × 0,045 = R2 970. (R13 970 is die finale bedrag, nie net die rente nie; R2 475 en R3 465 gebruik verkeerdelik n = 5 en n = 7.)' },
        { difficulty: 'Medium', question: 'ʼn Belegging wat 6% enkelvoudige rente per jaar verdien, groei na R9 000 na 5 jaar. Vind die oorspronklike hoofsom.', checkMode: 'auto', options: ['R6 725,05', 'R7 258,06', 'R30 000', 'R6 923,08'], correctIndex: 3, explanation: 'A = P(1 + ni)\n9 000 = P(1 + 5 × 0,06) = P(1,30)\nP = 9 000 ÷ 1,30 ≈ R6 923,08. (R6 725,05 deel verkeerdelik deur (1,06)⁵; R7 258,06 gebruik verkeerdelik n = 4; R30 000 behandel R9 000 verkeerdelik as die rente in plaas van die finale bedrag.)' },

        // Blok 2 — Saamgestelde rente (Easy, Medium, Medium, Hard)
        { difficulty: 'Easy', question: 'Bereken die finale bedrag as R3 000 teen 8% saamgestelde rente per jaar vir 2 jaar belê word.', checkMode: 'auto', options: ['R3 499,20', 'R3 480', 'R3 240', 'R499,20'], correctIndex: 0, explanation: 'A = P(1 + i)ⁿ = 3 000(1,08)² = 3 000 × 1,1664 = R3 499,20. (R3 480 gebruik verkeerdelik enkelvoudige rente; R3 240 gebruik verkeerdelik n = 1; R499,20 gee net die rente verdien.)' },
        { difficulty: 'Medium', question: 'Bereken die finale bedrag as R4 800 teen 4% saamgestelde rente per jaar vir 3 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R5 376', 'R5 399,35', 'R5 191,68', 'R599,35'], correctIndex: 1, explanation: 'A = 4 800(1,04)³ = 4 800 × 1,124864 ≈ R5 399,35. (R5 376 gebruik verkeerdelik enkelvoudige rente; R5 191,68 gebruik verkeerdelik n = 2; R599,35 gee net die rente verdien.)' },
        { difficulty: 'Medium', question: 'Bereken die finale bedrag as R6 000 teen 7% saamgestelde rente per jaar vir 5 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R8 100', 'R7 864,78', 'R8 415,31', 'R2 415,31'], correctIndex: 2, explanation: 'A = 6 000(1,07)⁵ = 6 000 × 1,40255... ≈ R8 415,31. (R8 100 gebruik verkeerdelik enkelvoudige rente; R7 864,78 gebruik verkeerdelik n = 4; R2 415,31 gee net die rente verdien.)' },
        { difficulty: 'Hard', question: 'Bereken die finale bedrag as R15 000 teen 6,5% saamgestelde rente per jaar vir 7 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R21 825', 'R21 887,13', 'R8 309,80', 'R23 309,80'], correctIndex: 3, explanation: 'A = 15 000(1,065)⁷ = 15 000 × 1,55399... ≈ R23 309,80. (R21 825 gebruik verkeerdelik enkelvoudige rente; R21 887,13 gebruik verkeerdelik n = 6; R8 309,80 gee net die rente verdien.)' },

        // Blok 3 — Vergelyking van enkelvoudige en saamgestelde rente (Medium, Hard, Hard)
        { difficulty: 'Medium', question: 'Vergelyk die belegging van R8 000 teen 8% vir 3 jaar met enkelvoudige rente teenoor saamgestelde rente. Vind die verskil tussen die twee finale bedrae (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R157,70', 'R9 920', 'R10 077,70', 'R147,70'], correctIndex: 0, explanation: 'Enkelvoudig: 8 000(1 + 3 × 0,08) = R9 920.\nSaamgesteld: 8 000(1,08)³ ≈ R10 077,70.\nVerskil ≈ R157,70. (R9 920 en R10 077,70 is die individuele bedrae, nie die verskil nie; R147,70 het ʼn rekenfout.)' },
        { difficulty: 'Hard', question: 'Vergelyk die belegging van R10 000 teen 5% vir 10 jaar met enkelvoudige rente teenoor saamgestelde rente. Vind die verskil tussen die twee finale bedrae (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R15 000', 'R1 288,95', 'R16 288,95', 'R1 388,95'], correctIndex: 1, explanation: 'Enkelvoudig: 10 000(1 + 10 × 0,05) = R15 000.\nSaamgesteld: 10 000(1,05)¹⁰ ≈ R16 288,95.\nVerskil ≈ R1 288,95. (R15 000 en R16 288,95 is die individuele bedrae, nie die verskil nie; R1 388,95 het ʼn rekenfout.)' },
        { difficulty: 'Hard', question: 'Vergelyk die belegging van R6 500 teen 9% vir 7 jaar met enkelvoudige rente teenoor saamgestelde rente. Vind die verskil tussen die twee finale bedrae (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R10 595', 'R11 882,25', 'R1 287,25', 'R1 187,25'], correctIndex: 2, explanation: 'Enkelvoudig: 6 500(1 + 7 × 0,09) = R10 595.\nSaamgesteld: 6 500(1,09)⁷ ≈ R11 882,25.\nVerskil ≈ R1 287,25. (R10 595 en R11 882,25 is die individuele bedrae, nie die verskil nie; R1 187,25 het ʼn rekenfout.)' },

        // Blok 4 — Huurkoop (Medium, Medium, Hard)
        { difficulty: 'Medium', question: 'Sipho koop ʼn TV ter waarde van R7 500 op huurkoop teen 18% enkelvoudige rente oor 3 jaar, sonder ʼn deposito. Vind sy totale terugbetaling.', checkMode: 'auto', options: ['R12 322,74', 'R4 050', 'R10 200', 'R11 550'], correctIndex: 3, explanation: 'A = P(1 + ni) = 7 500(1 + 3 × 0,18) = 7 500(1,54) = R11 550. (R12 322,74 gebruik verkeerdelik saamgestelde rente; R4 050 gee net die rente, nie die totale terugbetaling nie; R10 200 gebruik verkeerdelik n = 2.)' },
        { difficulty: 'Medium', question: 'Naledi koop ʼn motorfiets ter waarde van R12 000 op huurkoop teen 22% enkelvoudige rente oor 2 jaar, sonder ʼn deposito. Vind haar totale terugbetaling.', checkMode: 'auto', options: ['R17 280', 'R17 860,80', 'R5 280', 'R14 640'], correctIndex: 0, explanation: 'A = 12 000(1 + 2 × 0,22) = 12 000(1,44) = R17 280. (R17 860,80 gebruik verkeerdelik saamgestelde rente; R5 280 gee net die rente, nie die totale terugbetaling nie; R14 640 gebruik verkeerdelik n = 1.)' },
        { difficulty: 'Hard', question: 'Kagiso koop ʼn rusbank met ʼn kontantprys van R24 000. Hy betaal ʼn 20%-deposito en betaal die balans op huurkoop terug teen 14% enkelvoudige rente per jaar oor 3 jaar. Vind sy totale terugbetaling (deposito plus huurkoop-paaiemente), afgerond na die naaste sent.', checkMode: 'auto', options: ['R38 880', 'R32 064', 'R27 264', 'R29 376'], correctIndex: 1, explanation: 'Deposito = 20% × 24 000 = R4 800.\nBalans = 24 000 − 4 800 = R19 200.\nHuurkoopbedrag op balans = 19 200(1 + 3 × 0,14) = 19 200(1,42) = R27 264.\nTotale terugbetaling = R4 800 + R27 264 = R32 064. (R38 880 pas rente verkeerdelik op die volle kontantprys toe en tel steeds die deposito by; R27 264 vergeet om die deposito weer by te tel; R29 376 gebruik verkeerdelik n = 2.)' },

        // Blok 5 — Enkelvoudige groei-/verval-woordprobleme (Medium, Medium, Hard)
        { difficulty: 'Medium', question: 'ʼn Dorp se bevolking van 25 000 groei teen 3% saamgestelde groei per jaar. Vind die bevolking na 6 jaar, afgerond na die naaste heelgetal.', checkMode: 'auto', options: ['29 500', '28 982', '29 851', '30 747'], correctIndex: 2, explanation: 'A = 25 000(1,03)⁶ = 25 000 × 1,19405... ≈ 29 851. (29 500 gebruik verkeerdelik enkelvoudige groei; 28 982 gebruik verkeerdelik n = 5; 30 747 gebruik verkeerdelik n = 7.)' },
        { difficulty: 'Medium', question: 'ʼn Masjien ter waarde van R180 000 verval deur enkelvoudige (reguitlyn) verval teen 12% per jaar. Vind sy waarde na 5 jaar.', checkMode: 'auto', options: ['R94 991,80', 'R93 600', 'R50 400', 'R72 000'], correctIndex: 3, explanation: 'A = P(1 − ni) = 180 000(1 − 5 × 0,12) = 180 000(0,40) = R72 000. (R94 991,80 gebruik verkeerdelik saamgestelde verval; R93 600 gebruik verkeerdelik n = 4; R50 400 gebruik verkeerdelik n = 6.)' },
        { difficulty: 'Hard', question: 'ʼn Afleweringsvoertuig ter waarde van R300 000 verval deur enkelvoudige (reguitlyn) verval teen 20% per jaar. Vind sy waarde na 4 jaar.', checkMode: 'auto', options: ['R60 000', 'R122 880', 'R120 000', 'R180 000'], correctIndex: 0, explanation: 'A = P(1 − ni) = 300 000(1 − 4 × 0,20) = 300 000(0,20) = R60 000. (R122 880 gebruik verkeerdelik saamgestelde verval; R120 000 gebruik verkeerdelik n = 3; R180 000 gebruik verkeerdelik n = 2.)' },

        // Blok 6 — Gekombineerde multi-stap probleme (Hard, Hard, Hard)
        { difficulty: 'Hard', question: 'Amahle belê R10 000 teen 10% saamgestelde rente per jaar vir 6 jaar. Vind die finale bedrag (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R16 000', 'R17 715,61', 'R16 105,10', 'R7 715,61'], correctIndex: 1, explanation: 'A = 10 000(1,10)⁶ = 10 000 × 1,771561 = R17 715,61. (R16 000 gebruik verkeerdelik enkelvoudige rente; R16 105,10 gebruik verkeerdelik n = 5; R7 715,61 gee net die rente verdien.)' },
        { difficulty: 'Hard', question: 'Zanele belê R9 000 teen 5,5% saamgestelde rente per jaar vir 5 jaar. Vind die finale bedrag (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R11 475', 'R11 149,43', 'R11 762,64', 'R2 762,64'], correctIndex: 2, explanation: 'A = 9 000(1,055)⁵ = 9 000 × 1,30696... ≈ R11 762,64. (R11 475 gebruik verkeerdelik enkelvoudige rente; R11 149,43 gebruik verkeerdelik n = 4; R2 762,64 gee net die rente verdien.)' },
        { difficulty: 'Hard', question: 'Thabo verdien R2 100 enkelvoudige rente op ʼn hoofsom van R7 000 belê vir 6 jaar. Vind die jaarlikse rentekoers wat gebruik is.', checkMode: 'auto', options: ['30%', '6%', '2,5%', '5%'], correctIndex: 3, explanation: 'Rente = P × n × i, dus i = Rente ÷ (P × n) = 2 100 ÷ (7 000 × 6) = 0,05 = 5%. (30% vergeet om deur n = 6 te deel; 6% gebruik verkeerdelik n = 5; 2,5% halveer verkeerdelik die korrekte koers.)' },
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
        { difficulty: 'Easy', question: 'Bereken die finale bedrag as R4 800 teen 7% enkelvoudige rente per jaar vir 2 jaar belê word.', checkMode: 'auto', options: ['R5 472', 'R5 495,52', 'R5 136', 'R672'], correctIndex: 0, explanation: 'A = P(1 + ni) = 4 800(1 + 2 × 0,07) = 4 800(1,14) = R5 472. (R5 495,52 gebruik verkeerdelik saamgestelde rente; R5 136 gebruik verkeerdelik n = 1; R672 gee net die rente, nie die finale bedrag nie.)' },
        { difficulty: 'Easy', question: 'Bereken die finale bedrag as R6 500 teen 4% enkelvoudige rente per jaar vir 5 jaar belê word.', checkMode: 'auto', options: ['R7 908,24', 'R7 800', 'R7 540', 'R1 300'], correctIndex: 1, explanation: 'A = P(1 + ni) = 6 500(1 + 5 × 0,04) = 6 500(1,20) = R7 800. (R7 908,24 gebruik verkeerdelik saamgestelde rente; R7 540 gebruik verkeerdelik n = 4; R1 300 gee net die rente, nie die finale bedrag nie.)' },
        { difficulty: 'Medium', question: 'Amahle belê R13 000 teen 5,5% enkelvoudige rente per jaar vir 4 jaar. Vind die totale rente verdien (nie die finale bedrag nie).', checkMode: 'auto', options: ['R15 860', 'R2 145', 'R2 860', 'R3 575'], correctIndex: 2, explanation: 'Rente = P × n × i = 13 000 × 4 × 0,055 = R2 860. (R15 860 is die finale bedrag, nie net die rente nie; R2 145 en R3 575 gebruik verkeerdelik n = 3 en n = 5.)' },
        { difficulty: 'Medium', question: 'ʼn Belegging wat 8% enkelvoudige rente per jaar verdien, groei na R8 400 na 3 jaar. Vind die oorspronklike hoofsom.', checkMode: 'auto', options: ['R6 668,34', 'R7 241,38', 'R35 000', 'R6 774,19'], correctIndex: 3, explanation: 'A = P(1 + ni)\n8 400 = P(1 + 3 × 0,08) = P(1,24)\nP = 8 400 ÷ 1,24 ≈ R6 774,19. (R6 668,34 deel verkeerdelik deur (1,08)³; R7 241,38 gebruik verkeerdelik n = 2; R35 000 behandel R8 400 verkeerdelik as die rente in plaas van die finale bedrag.)' },

        // Blok 2 — Saamgestelde rente (Easy, Medium, Medium, Hard)
        { difficulty: 'Easy', question: 'Bereken die finale bedrag as R3 500 teen 9% saamgestelde rente per jaar vir 3 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R4 532,60', 'R4 445', 'R4 158,35', 'R1 032,60'], correctIndex: 0, explanation: 'A = P(1 + i)ⁿ = 3 500(1,09)³ = 3 500 × 1,295029 ≈ R4 532,60. (R4 445 gebruik verkeerdelik enkelvoudige rente; R4 158,35 gebruik verkeerdelik n = 2; R1 032,60 gee net die rente verdien.)' },
        { difficulty: 'Medium', question: 'Bereken die finale bedrag as R5 200 teen 4,5% saamgestelde rente per jaar vir 3 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R5 902', 'R5 934,06', 'R5 678,53', 'R734,06'], correctIndex: 1, explanation: 'A = 5 200(1,045)³ = 5 200 × 1,141166... ≈ R5 934,06. (R5 902 gebruik verkeerdelik enkelvoudige rente; R5 678,53 gebruik verkeerdelik n = 2; R734,06 gee net die rente verdien.)' },
        { difficulty: 'Medium', question: 'Bereken die finale bedrag as R5 500 teen 7,5% saamgestelde rente per jaar vir 6 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R7 975', 'R7 895,96', 'R8 488,16', 'R2 988,16'], correctIndex: 2, explanation: 'A = 5 500(1,075)⁶ = 5 500 × 1,54330... ≈ R8 488,16. (R7 975 gebruik verkeerdelik enkelvoudige rente; R7 895,96 gebruik verkeerdelik n = 5; R2 988,16 gee net die rente verdien.)' },
        { difficulty: 'Hard', question: 'Bereken die finale bedrag as R18 000 teen 8% saamgestelde rente per jaar vir 9 jaar belê word (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R30 960', 'R33 316,74', 'R17 982,08', 'R35 982,08'], correctIndex: 3, explanation: 'A = 18 000(1,08)⁹ = 18 000 × 1,99900... ≈ R35 982,08. (R30 960 gebruik verkeerdelik enkelvoudige rente; R33 316,74 gebruik verkeerdelik n = 8; R17 982,08 gee net die rente verdien.)' },

        // Blok 3 — Vergelyking van enkelvoudige en saamgestelde rente (Medium, Hard, Hard)
        { difficulty: 'Medium', question: 'Vergelyk die belegging van R6 000 teen 9% vir 5 jaar met enkelvoudige rente teenoor saamgestelde rente. Vind die verskil tussen die twee finale bedrae (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R531,74', 'R8 700', 'R9 231,74', 'R521,74'], correctIndex: 0, explanation: 'Enkelvoudig: 6 000(1 + 5 × 0,09) = R8 700.\nSaamgesteld: 6 000(1,09)⁵ ≈ R9 231,74.\nVerskil ≈ R531,74. (R8 700 en R9 231,74 is die individuele bedrae, nie die verskil nie; R521,74 het ʼn rekenfout.)' },
        { difficulty: 'Hard', question: 'Vergelyk die belegging van R12 000 teen 7% vir 9 jaar met enkelvoudige rente teenoor saamgestelde rente. Vind die verskil tussen die twee finale bedrae (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R19 560', 'R2 501,51', 'R22 061,51', 'R2 401,51'], correctIndex: 1, explanation: 'Enkelvoudig: 12 000(1 + 9 × 0,07) = R19 560.\nSaamgesteld: 12 000(1,07)⁹ ≈ R22 061,51.\nVerskil ≈ R2 501,51. (R19 560 en R22 061,51 is die individuele bedrae, nie die verskil nie; R2 401,51 het ʼn rekenfout.)' },
        { difficulty: 'Hard', question: 'Vergelyk die belegging van R8 000 teen 10% vir 6 jaar met enkelvoudige rente teenoor saamgestelde rente. Vind die verskil tussen die twee finale bedrae (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R12 800', 'R14 172,49', 'R1 372,49', 'R1 272,49'], correctIndex: 2, explanation: 'Enkelvoudig: 8 000(1 + 6 × 0,10) = R12 800.\nSaamgesteld: 8 000(1,10)⁶ ≈ R14 172,49.\nVerskil ≈ R1 372,49. (R12 800 en R14 172,49 is die individuele bedrae, nie die verskil nie; R1 272,49 het ʼn rekenfout.)' },

        // Blok 4 — Huurkoop (Medium, Medium, Hard)
        { difficulty: 'Medium', question: 'Buhle koop ʼn stoof ter waarde van R9 000 op huurkoop teen 16% enkelvoudige rente oor 4 jaar, sonder ʼn deposito. Vind haar totale terugbetaling.', checkMode: 'auto', options: ['R16 306,16', 'R5 760', 'R13 320', 'R14 760'], correctIndex: 3, explanation: 'A = P(1 + ni) = 9 000(1 + 4 × 0,16) = 9 000(1,64) = R14 760. (R16 306,16 gebruik verkeerdelik saamgestelde rente; R5 760 gee net die rente, nie die totale terugbetaling nie; R13 320 gebruik verkeerdelik n = 3.)' },
        { difficulty: 'Medium', question: 'Sipho koop kantoortoerusting ter waarde van R14 000 op huurkoop teen 19% enkelvoudige rente oor 3 jaar, sonder ʼn deposito. Vind sy totale terugbetaling.', checkMode: 'auto', options: ['R21 980', 'R23 592,23', 'R7 980', 'R19 320'], correctIndex: 0, explanation: 'A = 14 000(1 + 3 × 0,19) = 14 000(1,57) = R21 980. (R23 592,23 gebruik verkeerdelik saamgestelde rente; R7 980 gee net die rente, nie die totale terugbetaling nie; R19 320 gebruik verkeerdelik n = 2.)' },
        { difficulty: 'Hard', question: 'Lerato koop ʼn slaapkamerstel met ʼn kontantprys van R30 000. Sy betaal ʼn 10%-deposito en betaal die balans op huurkoop terug teen 15% enkelvoudige rente per jaar oor 5 jaar. Vind haar totale terugbetaling (deposito plus huurkoop-paaiemente), afgerond na die naaste sent.', checkMode: 'auto', options: ['R55 500', 'R50 250', 'R47 250', 'R46 200'], correctIndex: 1, explanation: 'Deposito = 10% × 30 000 = R3 000.\nBalans = 30 000 − 3 000 = R27 000.\nHuurkoopbedrag op balans = 27 000(1 + 5 × 0,15) = 27 000(1,75) = R47 250.\nTotale terugbetaling = R3 000 + R47 250 = R50 250. (R55 500 pas rente verkeerdelik op die volle kontantprys toe en tel steeds die deposito by; R47 250 vergeet om die deposito weer by te tel; R46 200 gebruik verkeerdelik n = 4.)' },

        // Blok 5 — Enkelvoudige groei-/verval-woordprobleme (Medium, Medium, Hard)
        { difficulty: 'Medium', question: 'ʼn Dorp se bevolking van 40 000 groei teen 3,5% saamgestelde groei per jaar. Vind die bevolking na 7 jaar, afgerond na die naaste heelgetal.', checkMode: 'auto', options: ['49 800', '49 170', '50 891', '52 672'], correctIndex: 2, explanation: 'A = 40 000(1,035)⁷ = 40 000 × 1,27228... ≈ 50 891. (49 800 gebruik verkeerdelik enkelvoudige groei; 49 170 gebruik verkeerdelik n = 6; 52 672 gebruik verkeerdelik n = 8.)' },
        { difficulty: 'Medium', question: 'ʼn Masjien ter waarde van R210 000 verval deur enkelvoudige (reguitlyn) verval teen 14% per jaar. Vind sy waarde na 4 jaar.', checkMode: 'auto', options: ['R114 871,68', 'R121 800', 'R63 000', 'R92 400'], correctIndex: 3, explanation: 'A = P(1 − ni) = 210 000(1 − 4 × 0,14) = 210 000(0,44) = R92 400. (R114 871,68 gebruik verkeerdelik saamgestelde verval; R121 800 gebruik verkeerdelik n = 3; R63 000 gebruik verkeerdelik n = 5.)' },
        { difficulty: 'Hard', question: 'ʼn Trekker ter waarde van R260 000 verval deur enkelvoudige (reguitlyn) verval teen 16% per jaar. Vind sy waarde na 5 jaar.', checkMode: 'auto', options: ['R52 000', 'R108 735,12', 'R93 600', 'R10 400'], correctIndex: 0, explanation: 'A = P(1 − ni) = 260 000(1 − 5 × 0,16) = 260 000(0,20) = R52 000. (R108 735,12 gebruik verkeerdelik saamgestelde verval; R93 600 gebruik verkeerdelik n = 4; R10 400 gebruik verkeerdelik n = 6.)' },

        // Blok 6 — Gekombineerde multi-stap probleme (Hard, Hard, Hard)
        { difficulty: 'Hard', question: 'Nomsa belê R14 000 teen 8,5% saamgestelde rente per jaar vir 6 jaar. Vind die finale bedrag (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R21 140', 'R22 840,55', 'R21 051,20', 'R8 840,55'], correctIndex: 1, explanation: 'A = 14 000(1,085)⁶ = 14 000 × 1,63147... ≈ R22 840,55. (R21 140 gebruik verkeerdelik enkelvoudige rente; R21 051,20 gebruik verkeerdelik n = 5; R8 840,55 gee net die rente verdien.)' },
        { difficulty: 'Hard', question: 'Kagiso belê R7 000 teen 9,5% saamgestelde rente per jaar vir 5 jaar. Vind die finale bedrag (rond af tot 2 desimale plekke).', checkMode: 'auto', options: ['R10 325', 'R10 063,63', 'R11 019,67', 'R4 019,67'], correctIndex: 2, explanation: 'A = 7 000(1,095)⁵ = 7 000 × 1,57424... ≈ R11 019,67. (R10 325 gebruik verkeerdelik enkelvoudige rente; R10 063,63 gebruik verkeerdelik n = 4; R4 019,67 gee net die rente verdien.)' },
        { difficulty: 'Hard', question: 'Zanele verdien R1 440 enkelvoudige rente op ʼn hoofsom van R6 000 belê vir 4 jaar. Vind die jaarlikse rentekoers wat gebruik is.', checkMode: 'auto', options: ['24%', '8%', '3%', '6%'], correctIndex: 3, explanation: 'Rente = P × n × i, dus i = Rente ÷ (P × n) = 1 440 ÷ (6 000 × 4) = 0,06 = 6%. (24% vergeet om deur n = 4 te deel; 8% gebruik verkeerdelik n = 3; 3% halveer verkeerdelik die korrekte koers.)' },
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
