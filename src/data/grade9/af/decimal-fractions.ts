import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (decimal fraction roles) ──────────────────────────────────
// brackets / squares / calculations → blue   (#2563eb)
// operations / cubes / rounding    → orange (#ea580c)
// final answer / roots             → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Desimale Breuke',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — MEERVOUDIGE BEWERKINGS MET DESIMALE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiple-operations-decimal-fractions',
      title: 'Meervoudige Bewerkings met Desimale Breuke',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">Ons konsolideer alle bewerkings met desimale breuke, deur <strong>meervoudige bewerkings</strong> met of sonder hakies in saamgestelde berekeninge toe te pas, en gebruik ʼn sakrekenaar waar toepaslik vir doeltreffendheid.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('hakies')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('bewerkings')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── BODMAS ───────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Volgorde van bewerkings (BODMAS)</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('B')}rackets (Hakies) — bereken eers uitdrukkings binne hakies.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('O')}rders (Magte) — eksponente, kwadrate en wortels volg vervolgens.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('D')}ivision (Deling) en ${or('M')}ultiplication (Vermenigvuldiging) — werk van links na regs.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('A')}ddition (Optelling) en ${gr('S')}ubtraction (Aftrekking) — werk van links na regs.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip ─────────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sakrekenaar-wenk</p>` +
        `<p style="margin:0;color:#1e3a8a;">Pas altyd BODMAS toe voordat jy waardes in ʼn sakrekenaar invoer. Skryf elke stap duidelik neer sodat jy jou werk kan nagaan. ʼn Sakrekenaar is ʼn hulpmiddel — jy moet steeds die volgorde van bewerkings verstaan om dit korrek te gebruik.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken (2,5 + 1,3) × 0,4.',
          answer: `${gr('1,52')}`,
          steps: [
            `${bl('Hakies eerste:')} 2,5 + 1,3 = ${bl('3,8')}`,
            `${or('Vermenigvuldig dan:')} ${bl('3,8')} × 0,4 = ${gr('1,52')}`,
          ],
        },
        {
          question: 'Bereken 6,4 ÷ 0,8 − 1,5 × 2.',
          answer: `${gr('5')}`,
          steps: [
            `${or('Deling eerste')} (van links na regs saam met vermenigvuldiging, BODMAS): 6,4 ÷ 0,8 = ${or('8')}`,
            `${or('Vermenigvuldiging:')} 1,5 × 2 = ${or('3')}`,
            `${gr('Trek af:')} ${or('8')} − ${or('3')} = ${gr('5')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken (1,5 + 2,5) × 0,6.',
          answer: '2,4',
          checkMode: 'auto',
          correctAnswer: '2.4',
          correctAnswers: ['2.4', '2,4'],
          explanation: 'Hakies eerste: 1,5 + 2,5 = 4.\nVermenigvuldig dan: 4 × 0,6 = 2,4 ✓',
        },

        // ── V2 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 8,4 ÷ 0,6 − 2,5 × 1,2.',
          answer: '11',
          checkMode: 'auto',
          correctAnswer: '11',
          explanation: 'Deling: 8,4 ÷ 0,6 = 14.\nVermenigvuldiging: 2,5 × 1,2 = 3.\nTrek af: 14 − 3 = 11 ✓',
        },

        // ── V3 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho bereken (3,2 − 1,7) × 2,5 en kry 2,75. Kontroleer sy antwoord.',
          answer: '3,2 − 1,7 = 1,5. 1,5 × 2,5 = 3,75. Hy is verkeerd — die korrekte antwoord is 3,75.',
          checkMode: 'self',
        },

        // ── V11 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken (4,5 ÷ 1,5) + (2,4 × 0,5).',
          answer: '4,2',
          checkMode: 'auto',
          correctAnswer: '4.2',
          correctAnswers: ['4.2', '4,2'],
          explanation: 'Hakies: 4,5 ÷ 1,5 = 3.\nHakies: 2,4 × 0,5 = 1,2.\nTel op: 3 + 1,2 = 4,2 ✓',
        },

        // ── V15 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Bereken (0,4 + 0,6)² − (0,2 × 0,3).',
          answer: '0,94',
          checkMode: 'auto',
          correctAnswer: '0.94',
          correctAnswers: ['0.94', '0,94'],
          explanation: 'Hakies: 0,4 + 0,6 = 1. Kwadraat: 1² = 1.\nHakies: 0,2 × 0,3 = 0,06.\nTrek af: 1 − 0,06 = 0,94 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply BODMAS to combined decimal fraction calculations with and without brackets" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Step-by-step BODMAS diagram showing the order of operations applied to a combined decimal fraction calculation" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — KWADRATE, KUBUSSE EN WORTELS VAN DESIMALE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'squares-cubes-roots-decimal-fractions',
      title: 'Kwadrate, Kubusse en Wortels van Desimale Breuke in Saamgestelde Berekeninge',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">Ons pas <strong>kwadrate</strong>, <strong>kubusse</strong>, <strong>vierkantswortels</strong> en <strong>kubuswortels</strong> van desimale breuke binne groter saamgestelde berekeninge toe, en integreer hierdie vaardighede met hakies en die volgorde van bewerkings.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kwadrate')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kubusse')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('wortels')}</span>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelfeite om te onthou</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Kwadreer ʼn desimale getal')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vermenigvuldig die desimale getal met homself. Voorbeeld: 0,3² = 0,3 × 0,3 = ${bl('0,09')}. Let daarop dat die resultaat kleiner is as die oorspronklike getal.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Kubeer ʼn desimale getal')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vermenigvuldig die desimale getal drie keer met homself. Voorbeeld: 0,2³ = 0,2 × 0,2 × 0,2 = ${or('0,008')}. Word vinnig baie kleiner.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Wortels van desimale breuke')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vind wat, wanneer dit met homself vermenigvuldig word, die desimale getal gee. Voorbeeld: √0,09 = ${gr('0,3')} omdat 0,3 × 0,3 = 0,09.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip ─────────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Let wel: wortels van desimale breuke kan verrassend wees</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die vierkantswortel van ʼn desimale getal tussen 0 en 1 is <strong>groter</strong> as die oorspronklike getal — byvoorbeeld √0,25 = 0,5, en 0,5 &gt; 0,25. Kontroleer jou antwoord altyd deur dit weer te kwadreer of te kubeer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken 0,5² + √0,36.',
          answer: `${gr('0,85')}`,
          steps: [
            `${bl('Kwadraat:')} 0,5² = 0,5 × 0,5 = ${bl('0,25')}`,
            `${gr('Vierkantswortel:')} √0,36 = ${gr('0,6')} (kontroleer: 0,6 × 0,6 = 0,36 ✓)`,
            `Tel op: ${bl('0,25')} + ${gr('0,6')} = ${gr('0,85')}`,
          ],
        },
        {
          question: 'Sipho bereken (0,2³) × 10 en kry 0,08. Kontroleer sy antwoord.',
          answer: `${gr('0,08')} — Sipho is korrek.`,
          steps: [
            `${or('Kubus:')} 0,2³ = 0,2 × 0,2 × 0,2 = ${or('0,008')}`,
            `Vermenigvuldig: ${or('0,008')} × 10 = ${gr('0,08')}`,
            `Sipho se antwoord is ${gr('korrek')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 0,3² + 0,4².',
          answer: '0,25',
          checkMode: 'auto',
          correctAnswer: '0.25',
          correctAnswers: ['0.25', '0,25'],
          explanation: '0,3² = 0,09. 0,4² = 0,16. Som: 0,09 + 0,16 = 0,25 ✓',
        },

        // ── V5 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken √0,64 − 0,2³.',
          answer: '0,792',
          checkMode: 'auto',
          correctAnswer: '0.792',
          correctAnswers: ['0.792', '0,792'],
          explanation: '√0,64 = 0,8 (kontroleer: 0,8² = 0,64 ✓).\n0,2³ = 0,008.\nTrek af: 0,8 − 0,008 = 0,792 ✓',
        },

        // ── V6 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato bereken (0,5²) × (0,1³) en kry 0,00025. Kontroleer haar antwoord.',
          answer: '0,5² = 0,25. 0,1³ = 0,001. 0,25 × 0,001 = 0,00025. Sy is korrek.',
          checkMode: 'self',
        },

        // ── V12 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Bereken √1,21 + (0,3)² − 0,5.',
          answer: '0,69',
          checkMode: 'auto',
          correctAnswer: '0.69',
          correctAnswers: ['0.69', '0,69'],
          explanation: '√1,21 = 1,1 (kontroleer: 1,1² = 1,21 ✓).\n(0,3)² = 0,09.\nBereken: 1,1 + 0,09 − 0,5 = 0,69 ✓',
        },

        // ── V13 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê √0,25 = 0,05. Is sy korrek? Verduidelik.',
          answer: 'Nee — √0,25 = 0,5, aangesien 0,5² = 0,25, nie 0,05² = 0,0025 nie.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate squares, cubes and roots of decimal fractions within combined calculations using BODMAS" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing squares, cubes and roots of common decimal fractions with worked examples integrated into combined calculations" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — OPLOS VAN PROBLEME MET DESIMALE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-problems-decimal-fractions',
      title: 'Oplos van Probleme met Desimale Breuke',
      icon: '📝',
      explanation:
        `<p style="margin-bottom:16px;">Ons los <strong>meerstap-, werklike-lewe-probleme</strong> op wat desimale breuke behels, dikwels deur verskeie bewerkings te kombineer en toepaslik af te rond vir die konteks — byvoorbeeld, om geld tot 2 desimale plekke af te rond.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('berekeninge')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('afronding')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── Strategy ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">3-stap-strategie vir werklike-lewe-probleme</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identifiseer')} — Identifiseer al die gegewe waardes en wat jy moet vind. Skryf ʼn getalsin.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Bereken')} — Werk deur elke stap in BODMAS-volgorde. Wys elke stap duidelik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Rond af en beantwoord')} — Rond af tot die korrekte aantal desimale plekke vir die konteks en skryf ʼn volsin-antwoord.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip ─────────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#b45309;margin-bottom:6px;">Afronding vir die konteks</p>` +
        `<p style="margin:0;color:#92400e;">Geldantwoorde moet afgerond word tot ${or('2 desimale plekke')} (naaste sent). Vir metings soos massa of volume, volg die gegewe instruksie. Rond slegs af by die ${or('laaste stap')} — te vroeg afrond veroorsaak foute.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato koop 3,5 kg appels teen R18,40 per kg en 2,2 kg lemoene teen R15,60 per kg. Bereken die totale koste.',
          answer: `${gr('R98,72')}`,
          steps: [
            `${bl('Appels:')} 3,5 × R18,40 = ${bl('R64,40')}`,
            `${bl('Lemoene:')} 2,2 × R15,60 = ${bl('R34,32')}`,
            `${gr('Totaal:')} R64,40 + R34,32 = ${gr('R98,72')}`,
          ],
        },
        {
          question: "Thabo se motor gebruik 6,8 liter per 100 km. Hoeveel liter word benodig vir ʼn 350 km-rit, tot 2 desimale plekke?",
          answer: `${gr('23,80 liter')}`,
          steps: [
            `${bl('Tempo per km:')} 6,8 ÷ 100 = ${bl('0,068')} liter per km`,
            `${bl('Vermenigvuldig met afstand:')} 0,068 × 350 = ${bl('23,8')}`,
            `${or('Rond af tot 2 desimale plekke:')} ${or('23,80')} liter`,
            `<strong>Antwoord:</strong> ${gr('23,80 liter')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V7 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Thabo koop 4,2 kg rys teen R22,50 per kg. Bereken die totale koste.',
          answer: 'R94,50',
          checkMode: 'auto',
          correctAnswer: 'R94.50',
          correctAnswers: ['R94.50', 'R94,50', '94.50', '94,50'],
          explanation: '4,2 × R22,50 = R94,50 ✓',
        },

        // ── V8 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle koop 2,8 kg beesvleis teen R85,40 per kg en 1,5 kg hoender teen R62,30 per kg. Bereken die totale koste.',
          answer: 'R332,57',
          checkMode: 'auto',
          correctAnswer: 'R332.57',
          correctAnswers: ['R332.57', 'R332,57', '332.57', '332,57'],
          explanation: 'Beesvleis: 2,8 × R85,40 = R239,12.\nHoender: 1,5 × R62,30 = R93,45.\nTotaal: R239,12 + R93,45 = R332,57 ✓',
        },

        // ── V9 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Motor gebruik 7,2 liter per 100 km. Hoeveel liter word benodig vir ʼn 250 km-rit?',
          answer: '18 liter',
          checkMode: 'auto',
          correctAnswer: '18',
          explanation: '(7,2 ÷ 100) × 250 = 0,072 × 250 = 18 liter ✓',
        },

        // ── V10 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Sipho se motor gebruik 6,5 liter per 100 km. Bereken hoeveel liter benodig word vir ʼn 420 km-rit, tot 2 desimale plekke.",
          answer: '27,30 liter',
          checkMode: 'auto',
          correctAnswer: '27.30',
          correctAnswers: ['27.30', '27,30', '27.3', '27,3'],
          explanation: '(6,5 ÷ 100) × 420 = 0,065 × 420 = 27,3 → afgerond tot 2 desimale plekke: 27,30 liter ✓',
        },

        // ── V14 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Resep vereis 0,75 kg meel per baksel. Bereken die totale meel benodig vir 3,5 baksels.',
          answer: '2,625 kg',
          checkMode: 'auto',
          correctAnswer: '2.625',
          correctAnswers: ['2.625', '2,625'],
          explanation: '0,75 × 3,5 = 2,625 kg ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve multi-step real-life problems involving decimal fractions, with rounding money to 2 decimal places" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Worked problem diagram showing the 3-step strategy applied to a real-life decimal fractions word problem involving money" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het desimale breuke bemeester.' },
    { minScore: 11, message: 'Uitstekende werk! Gaan enige gemiste vrae na en jy sal dit perfek kry.' },
    { minScore: 8, message: 'Goeie poging — gaan die uitgewerkte voorbeelde na en probeer weer.' },
    { minScore: 0, message: 'Hou aan — werk deur die studiegids weer, afdeling vir afdeling, en probeer dan weer.' },
  ],
}
