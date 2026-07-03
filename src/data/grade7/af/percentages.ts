import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (percentage / interest roles) ─────────────────────────────
// original amount / principal → blue   (#2563eb)
// percentage found / rate    → orange  (#ea580c)
// increase / time            → green   (#16a34a)
// decrease / interest        → red     (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Persentasies',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — PERSENTASIETOENAME EN -AFNAME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'percentage-increase-decrease',
      title: 'Persentasietoename en -afname',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Persentasietoename</strong> tel ʼn persentasie van die oorspronklike bedrag by daardie bedrag. ʼn <strong>Persentasieafname</strong> trek ʼn persentasie van die oorspronklike bedrag van daardie bedrag af. Om enige van die twee te bereken, vind ons eers die persentasie van die bedrag, en tel dit dan by of trek dit af van die oorspronklike.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike bedrag')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('persentasie gevind')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('toename')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('afname')}</span>` +
        `</div>` +

        // ── Steps reference ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn persentasietoename of -afname te bereken</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Skakel die persentasie om na ʼn desimale breuk (deel deur 100) en vermenigvuldig dit met die ${bl('oorspronklike bedrag')} om die ${or('persentasiewaarde')} te vind.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Toename')}:</strong> Tel die ${or('persentasiewaarde')} by die ${bl('oorspronklike bedrag')} om die nuwe, hoër bedrag te vind.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${re('Afname')}:</strong> Trek die ${or('persentasiewaarde')} van die ${bl('oorspronklike bedrag')} af om die nuwe, laer bedrag te vind.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Om ʼn persentasie na ʼn desimale breuk om te skakel</p>` +
        `<p style="margin:0;color:#1e3a8a;">Deel die persentasie deur 100: 15% = 0,15, 20% = 0,20, 8% = 0,08. Jy kan dit dan direk met die oorspronklike bedrag vermenigvuldig om die persentasiewaarde te vind.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Hemp kos R280. Die prys styg met 15%. Bereken die nuwe prys.',
          answer: `Nuwe prys = R${gr('322')}`,
          steps: [
            `Vind 15% van ${bl('280')}: 0,15 × ${bl('280')} = ${or('42')}`,
            `${gr('Toename')}: ${bl('280')} + ${or('42')} = ${gr('322')}`,
            `<strong>Nuwe prys = R${gr('322')}</strong>`,
          ],
        },
        {
          question: 'ʼn Skootrekenaar kos R8 500. Dit word met 20% afgeslaan. Bereken die verkoopprys.',
          answer: `Verkoopprys = R${re('6 800')}`,
          steps: [
            `Vind 20% van ${bl('8 500')}: 0,20 × ${bl('8 500')} = ${or('1 700')}`,
            `${re('Afname')}: ${bl('8 500')} − ${or('1 700')} = ${re('6 800')}`,
            `<strong>Verkoopprys = R${re('6 800')}</strong>`,
          ],
        },
        {
          question: "Sipho se salaris van R12 000 styg met 8%. Bereken sy nuwe salaris.",
          answer: `Nuwe salaris = R${gr('12 960')}`,
          steps: [
            `Vind 8% van ${bl('12 000')}: 0,08 × ${bl('12 000')} = ${or('960')}`,
            `${gr('Toename')}: ${bl('12 000')} + ${or('960')} = ${gr('12 960')}`,
            `<strong>Nuwe salaris = R${gr('12 960')}</strong>`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om persentasietoename en -afname te bereken deur die persentasie na ʼn desimale breuk om te skakel en dit dan by die oorspronklike bedrag te tel of daarvan af te trek" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat persentasietoename en -afname wys met die oorspronklike bedrag in blou, die gevonde persentasiewaarde in oranje, die toename-resultaat in groen en die afname-resultaat in rooi" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — ENKELVOUDIGE RENTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simple-interest',
      title: 'Enkelvoudige Rente',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">Enkelvoudige rente is geld wat verdien of betaal word op ʼn bedrag geld oor tyd, <strong>slegs op die oorspronklike bedrag</strong> (die hoofsom) bereken. Die formule is:</p>` +

        // ── Formula box ──────────────────────────────────────────────────────
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">Enkelvoudige Rente = ${bl('Hoofsom (P)')} × ${or('Koers (i)')} × ${gr('Tyd (n)')}</p>` +
        `<p style="font-size:0.88em;color:#6b7280;margin:8px 0 0 0;">waar ${or('Koers')} as ʼn desimale breuk geskryf word en ${gr('Tyd')} in jare is</p>` +
        `</div>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('hoofsom')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('koers')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tyd')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('rente')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Hoofsom (P)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die oorspronklike bedrag geld wat belê of geleen word.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Koers (i)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die rentekoers per jaar, as ʼn desimale breuk geskryf. Bv. 6% = 0,06.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Tyd (n)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die tydperk in jare waarvoor die geld belê of geleen word.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Enkelvoudige Rente (ER)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die bedrag rente wat verdien of betaal word, slegs op die hoofsom bereken.</p>` +
        `</div>` +

        `</div>` +

        // ── Total amount ─────────────────────────────────────────────────────
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">Totale Bedrag = ${bl('Hoofsom')} + ${re('Enkelvoudige Rente')}</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom "enkelvoudig"?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Enkelvoudige rente word <strong>elke jaar slegs op die hoofsom</strong> bereken — dit verdien nie rente op rente wat voorheen verdien is nie. Dit maak dit maklik om te bereken.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato belê R5 000 teen 6% enkelvoudige rente per jaar vir 3 jaar. Bereken die rente verdien.',
          answer: `Rente verdien = R${re('900')}`,
          steps: [
            `Skryf die waardes neer: ${bl('P')} = R${bl('5 000')}, ${or('i')} = ${or('0,06')} (6% ÷ 100), ${gr('n')} = ${gr('3')} jaar`,
            `Pas die formule toe: ER = ${bl('P')} × ${or('i')} × ${gr('n')} = ${bl('5 000')} × ${or('0,06')} × ${gr('3')} = ${re('900')}`,
            `<strong>Rente verdien = R${re('900')}</strong>`,
          ],
        },
        {
          question: 'Bereken die totale bedrag wat Lerato na 3 jaar het.',
          answer: `Totale bedrag = R${gr('5 900')}`,
          steps: [
            `Van die vorige voorbeeld: ${bl('Hoofsom')} = R${bl('5 000')}, ${re('Rente')} = R${re('900')}`,
            `Totaal = ${bl('Hoofsom')} + ${re('Rente')} = R${bl('5 000')} + R${re('900')} = R${gr('5 900')}`,
            `<strong>Totale bedrag = R${gr('5 900')}</strong>`,
          ],
        },
        {
          question: 'Amahle leen R8 000 teen 10% enkelvoudige rente vir 2 jaar. Hoeveel moet sy in totaal terugbetaal?',
          answer: `Totaal om terug te betaal = R${gr('9 600')}`,
          steps: [
            `Skryf die waardes neer: ${bl('P')} = R${bl('8 000')}, ${or('i')} = ${or('0,10')} (10% ÷ 100), ${gr('n')} = ${gr('2')} jaar`,
            `Bereken ER: ER = ${bl('8 000')} × ${or('0,10')} × ${gr('2')} = ${re('1 600')}`,
            `Totaal = ${bl('8 000')} + ${re('1 600')} = ${gr('9 600')}`,
            `<strong>Totaal om terug te betaal = R${gr('9 600')}</strong>`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die enkelvoudige-rente-formule ER = P x i x n toe te pas en die totale bedrag te vind deur rente by die hoofsom te tel" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat die enkelvoudige-rente-formule wys met hoofsom in blou, koers in oranje, tyd in groen en rente verdien in rooi, plus die totale bedrag berekening" />',
    },
  ],

  topicPractice: [
    // ── V1 Maklik — persentasietoename ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Baadjie kos R450. Dit styg met 10%. Bereken die nuwe prys.',
      answer: 'R495',
      checkMode: 'auto',
      correctAnswer: 'R495',
      correctAnswers: ['R495', '495'],
      explanation: 'Vind 10% van R450: 0,10 × 450 = R45\nNuwe prys: 450 + 45 = R495 ✓',
    },

    // ── V2 Maklik — persentasieafname ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn TV kos R6 000. Dit word met 25% afgeslaan. Bereken die verkoopprys.',
      answer: 'R4 500',
      checkMode: 'auto',
      correctAnswer: 'R4500',
      correctAnswers: ['R4500', '4500', 'R4 500', '4 500'],
      explanation: 'Vind 25% van R6 000: 0,25 × 6 000 = R1 500\nVerkoopprys: 6 000 − 1 500 = R4 500 ✓',
    },

    // ── V3 Medium — salaristoename ───────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "Sipho se salaris van R15 000 styg met 12%. Bereken sy nuwe salaris.",
      answer: 'R16 800',
      checkMode: 'auto',
      correctAnswer: 'R16800',
      correctAnswers: ['R16800', '16800', 'R16 800', '16 800'],
      explanation: 'Vind 12% van R15 000: 0,12 × 15 000 = R1 800\nNuwe salaris: 15 000 + 1 800 = R16 800 ✓',
    },

    // ── V4 Moeilik — opeenvolgende persentasieredenering ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê ʼn R200-item wat met 50% afgeslaan word en dan met 50% verhoog word, keer terug na R200. Is sy korrek? Verduidelik.',
      answer: 'Nee — met 50% afgeslaan gee R100, en dan met 50% van R100 (R50) verhoog gee R150, nie R200 nie.',
      checkMode: 'self',
    },

    // ── V5 Maklik — enkelvoudige rente berekening ────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken die enkelvoudige rente op R3 000 teen 5% vir 2 jaar.',
      answer: 'R300',
      checkMode: 'auto',
      correctAnswer: 'R300',
      correctAnswers: ['R300', '300'],
      explanation: 'ER = P × i × n = 3 000 × 0,05 × 2 = R300 ✓',
    },

    // ── V6 Maklik — enkelvoudige rente berekening ────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken die enkelvoudige rente op R4 500 teen 8% vir 1 jaar.',
      answer: 'R360',
      checkMode: 'auto',
      correctAnswer: 'R360',
      correctAnswers: ['R360', '360'],
      explanation: 'ER = P × i × n = 4 500 × 0,08 × 1 = R360 ✓',
    },

    // ── V7 Medium — totale bedrag na rente ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Thabo belê R6 000 teen 7% enkelvoudige rente vir 4 jaar. Bereken die totale bedrag na 4 jaar.',
      answer: 'R7 680',
      checkMode: 'auto',
      correctAnswer: 'R7680',
      correctAnswers: ['R7680', '7680', 'R7 680', '7 680'],
      explanation: 'ER = 6 000 × 0,07 × 4 = R1 680\nTotaal = 6 000 + 1 680 = R7 680 ✓',
    },

    // ── V8 Medium — totale terugbetaling ───────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Amahle leen R10 000 teen 12% enkelvoudige rente vir 3 jaar. Hoeveel moet sy in totaal terugbetaal?',
      answer: 'R13 600',
      checkMode: 'auto',
      correctAnswer: 'R13600',
      correctAnswers: ['R13600', '13600', 'R13 600', '13 600'],
      explanation: 'ER = 10 000 × 0,12 × 3 = R3 600\nTotaal = 10 000 + 3 600 = R13 600 ✓',
    },

    // ── V9 Moeilik — vind die tyd ───────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho belê R8 000 teen 6% enkelvoudige rente. Na hoeveel jaar sal hy R2 400 rente verdien?',
      answer: '5',
      checkMode: 'auto',
      correctAnswer: '5',
      correctAnswers: ['5', '5 jaar'],
      explanation: 'ER = P × i × n → 2 400 = 8 000 × 0,06 × n\n2 400 = 480 × n\nn = 2 400 ÷ 480 = 5 jaar ✓',
    },

    // ── V10 Moeilik — enkelvoudige-rente redenering ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê enkelvoudige rente groei elke jaar met dieselfde bedrag. Is sy korrek? Verduidelik.',
      answer: 'Ja — enkelvoudige rente word altyd op die oorspronklike hoofsom bereken, dus bly die rente wat elke jaar verdien word dieselfde.',
      checkMode: 'self',
    },

    // ── V11 Medium — kortingsbedrag en nuwe prys (twee dele) ───────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn R500-item word met 30% afgeslaan. Bereken die kortingsbedrag en die nuwe prys.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Kortingsbedrag',
          correctAnswer: 'R150',
          correctAnswers: ['R150', '150'],
          explanation: 'Korting = 30% van R500: 0,30 × 500 = R150 ✓',
        },
        {
          label: 'b) Nuwe prys',
          correctAnswer: 'R350',
          correctAnswers: ['R350', '350'],
          explanation: 'Nuwe prys = 500 − 150 = R350 ✓',
        },
      ],
    },

    // ── V12 Moeilik — totale bedrag met enkelvoudige rente ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle deponeer R12 000 teen 9% enkelvoudige rente vir 5 jaar. Bereken die totale bedrag in haar rekening.',
      answer: 'R17 400',
      checkMode: 'auto',
      correctAnswer: 'R17400',
      correctAnswers: ['R17400', '17400', 'R17 400', '17 400'],
      explanation: 'ER = 12 000 × 0,09 × 5 = R5 400\nTotaal = 12 000 + 5 400 = R17 400 ✓',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het persentasies bemeester.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer, werk weer deur die gids.' },
    ],
  },

  scoreMessages: [
    { minScore: 12, message: 'Uitstekend! Jy het persentasies bemeester.' },
    { minScore: 9, message: 'Goeie werk!' },
    { minScore: 6, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk weer deur die gids.' },
  ],
}
