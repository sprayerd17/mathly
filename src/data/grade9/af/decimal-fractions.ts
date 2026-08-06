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


      openQuestions: [
        // ── V1 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken (1,5 + 2,5) × 0,6.',
          answer: '2,4',
          checkMode: 'auto',
          correctAnswer: '2,4',
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
          correctAnswer: '4,2',
          correctAnswers: ['4.2', '4,2'],
          explanation: 'Hakies: 4,5 ÷ 1,5 = 3.\nHakies: 2,4 × 0,5 = 1,2.\nTel op: 3 + 1,2 = 4,2 ✓',
        },

        // ── V15 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Bereken (0,4 + 0,6)² − (0,2 × 0,3).',
          answer: '0,94',
          checkMode: 'auto',
          correctAnswer: '0,94',
          correctAnswers: ['0.94', '0,94'],
          explanation: 'Hakies: 0,4 + 0,6 = 1. Kwadraat: 1² = 1.\nHakies: 0,2 × 0,3 = 0,06.\nTrek af: 1 − 0,06 = 0,94 ✓',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om BODMAS toe te pas op saamgestelde desimale breukberekeninge met en sonder hakies',
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


      openQuestions: [
        // ── V4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 0,3² + 0,4².',
          answer: '0,25',
          checkMode: 'auto',
          correctAnswer: '0,25',
          correctAnswers: ['0.25', '0,25'],
          explanation: '0,3² = 0,09. 0,4² = 0,16. Som: 0,09 + 0,16 = 0,25 ✓',
        },

        // ── V5 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken √0,64 − 0,2³.',
          answer: '0,792',
          checkMode: 'auto',
          correctAnswer: '0,792',
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
          correctAnswer: '0,69',
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
        'Kort video wat wys hoe om kwadrate, kubusse en wortels van desimale breuke binne saamgestelde berekeninge met BODMAS te bereken',

      diagramPlaceholder:
        'Getallelyn wat wys dat die kwadrering van ʼn desimale getal tussen 0 en 1 dit kleiner maak, terwyl die vierkantswortel dit groter maak',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 160" width="100%" style="max-width:400px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="160" y="14" text-anchor="middle" font-size="10" fill="#6b7280">Kwadrering en worteltrekking van desimale getalle tussen 0 en 1</text>` +
        `<line x1="20" y1="80" x2="300" y2="80" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="20" y1="74" x2="20" y2="86" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="300" y1="74" x2="300" y2="86" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<circle cx="45" cy="80" r="4" fill="#ea580c"/>` +
        `<circle cx="104" cy="80" r="4" fill="#2563eb"/>` +
        `<text x="20" y="101" text-anchor="middle" font-size="10" fill="#6b7280">0</text>` +
        `<text x="45" y="101" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">0,09</text>` +
        `<text x="104" y="101" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">0,3</text>` +
        `<text x="300" y="101" text-anchor="middle" font-size="10" fill="#6b7280">1</text>` +
        `<path d="M104,74 Q75,35 45,74" fill="none" stroke="#2563eb" stroke-width="1.5"/>` +
        `<polygon points="45,74 39,64 51,64" fill="#2563eb"/>` +
        `<text x="75" y="25" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">0,3² = 0,09</text>` +
        `<text x="75" y="38" text-anchor="middle" font-size="8" fill="#6b7280">(kwadrering maak dit kleiner)</text>` +
        `<path d="M45,86 Q75,125 104,86" fill="none" stroke="#16a34a" stroke-width="1.5"/>` +
        `<polygon points="104,86 98,96 110,96" fill="#16a34a"/>` +
        `<text x="75" y="135" text-anchor="middle" font-size="10" font-weight="700" fill="#16a34a">√0,09 = 0,3</text>` +
        `<text x="75" y="148" text-anchor="middle" font-size="8" fill="#6b7280">(worteltrekking maak dit groter)</text>` +
        `</svg>`,
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


      openQuestions: [
        // ── V7 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Thabo koop 4,2 kg rys teen R22,50 per kg. Bereken die totale koste.',
          answer: 'R94,50',
          checkMode: 'auto',
          correctAnswer: 'R94,50',
          correctAnswers: ['R94.50', 'R94,50', '94.50', '94,50'],
          explanation: '4,2 × R22,50 = R94,50 ✓',
        },

        // ── V8 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle koop 2,8 kg beesvleis teen R85,40 per kg en 1,5 kg hoender teen R62,30 per kg. Bereken die totale koste.',
          answer: 'R332,57',
          checkMode: 'auto',
          correctAnswer: 'R332,57',
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
          correctAnswer: '27,30',
          correctAnswers: ['27.30', '27,30', '27.3', '27,3'],
          explanation: '(6,5 ÷ 100) × 420 = 0,065 × 420 = 27,3 → afgerond tot 2 desimale plekke: 27,30 liter ✓',
        },

        // ── V14 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Resep vereis 0,75 kg meel per baksel. Bereken die totale meel benodig vir 3,5 baksels.',
          answer: '2,625 kg',
          checkMode: 'auto',
          correctAnswer: '2,625',
          correctAnswers: ['2.625', '2,625'],
          explanation: '0,75 × 3,5 = 2,625 kg ✓',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om veelstap werklike-lewe-probleme met desimale breuke op te los, met geld afgerond tot 2 desimale plekke',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het desimale breuke bemeester.' },
    { minScore: 11, message: 'Uitstekende werk! Gaan enige gemiste vrae na en jy sal dit perfek kry.' },
    { minScore: 8, message: 'Goeie poging — gaan die uitgewerkte voorbeelde na en probeer weer.' },
    { minScore: 0, message: 'Hou aan — werk deur die studiegids weer, afdeling vir afdeling, en probeer dan weer.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 1-3 BODMAS met hakies | 4-6 BODMAS sonder hakies (gemengde
    // bewerkings) | 7-9 Kwadrate & kubusse in saamgestelde berekeninge | 10-13
    // Wortels in saamgestelde berekeninge & foutopsporing | 14-17 Meerstap-
    // werklike-lewe-woordprobleme | 18-20 Afronding tot 'n gegewe aantal
    // desimale plekke & foutopsporingsredenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok A — BODMAS met hakies (1-3)
        { difficulty: 'Medium', question: 'Bereken (4,5 + 2,3) × 1,6.', checkMode: 'auto', options: ['10,88', '1,088', '9,68', '108,8'], correctIndex: 0, explanation: 'Hakies eerste: 4,5 + 2,3 = 6,8. Vermenigvuldig: 6,8 × 1,6 = 10,88 ✓' },
        { difficulty: 'Medium', question: 'Bereken (9,6 − 3,4) ÷ 2.', checkMode: 'auto', options: ['31', '3,1', '0,31', '6,2'], correctIndex: 1, explanation: 'Hakies eerste: 9,6 − 3,4 = 6,2. Deel: 6,2 ÷ 2 = 3,1 ✓' },
        { difficulty: 'Medium-Hard', question: "ʼn Resep skaal sy bestanddele met die uitdrukking (2,4 + 1,8) × 0,5. Bereken hierdie uitdrukking.", checkMode: 'auto', options: ['21', '0,21', '2,1', '4,2'], correctIndex: 2, explanation: 'Hakies eerste: 2,4 + 1,8 = 4,2. Vermenigvuldig: 4,2 × 0,5 = 2,1 ✓' },

        // Blok B — BODMAS sonder hakies, gemengde bewerkings (4-6)
        { difficulty: 'Medium', question: 'Bereken 8,4 ÷ 1,4 + 2,5 × 3,2 − 1,5.', checkMode: 'auto', options: ['7,1', '5,3', '125', '12,5'], correctIndex: 3, explanation: 'Deling en vermenigvuldiging eerste: 8,4 ÷ 1,4 = 6, 2,5 × 3,2 = 8. Werk dan van links na regs: 6 + 8 − 1,5 = 12,5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 12,6 ÷ 0,9 − 2,4 × 1,5.', checkMode: 'auto', options: ['10,4', '1,04', '104', '-2,2'], correctIndex: 0, explanation: 'Deling: 12,6 ÷ 0,9 = 14. Vermenigvuldiging: 2,4 × 1,5 = 3,6. Trek af: 14 − 3,6 = 10,4 ✓' },
        { difficulty: 'Hard', question: 'Bereken 15 − 4,8 ÷ 0,6 + 0,5 × 3,4.', checkMode: 'auto', options: ['15,9', '8,7', '0,87', '24'], correctIndex: 1, explanation: 'Deling: 4,8 ÷ 0,6 = 8. Vermenigvuldiging: 0,5 × 3,4 = 1,7. Werk van links na regs: 15 − 8 + 1,7 = 8,7 ✓' },

        // Blok C — Kwadrate & kubusse in saamgestelde berekeninge (7-9)
        { difficulty: 'Medium', question: 'Bereken 0,6² + 0,3².', checkMode: 'auto', options: ['0,9', '4,5', '0,45', '1,26'], correctIndex: 2, explanation: '0,6² = 0,36. 0,3² = 0,09. Tel op: 0,36 + 0,09 = 0,45 ✓' },
        { difficulty: 'Medium', question: 'Bereken 0,4³ × 10.', checkMode: 'auto', options: ['1,6', '6,4', '0,064', '0,64'], correctIndex: 3, explanation: '0,4³ = 0,4 × 0,4 × 0,4 = 0,064. Vermenigvuldig: 0,064 × 10 = 0,64 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken (0,5 + 0,3)² − 0,2 × 0,3.', checkMode: 'auto', options: ['0,58', '0,74', '5,8', '0,04'], correctIndex: 0, explanation: 'Hakies: 0,5 + 0,3 = 0,8. Kwadraat: 0,8² = 0,64. Vermenigvuldiging: 0,2 × 0,3 = 0,06. Trek af: 0,64 − 0,06 = 0,58 ✓' },

        // Blok D — Wortels in saamgestelde berekeninge & foutopsporing (10-13)
        { difficulty: 'Medium', question: 'Bereken √0,36 + 0,2³.', checkMode: 'auto', options: ['0,188', '0,608', '6,08', '1'], correctIndex: 1, explanation: '√0,36 = 0,6 (kontroleer: 0,6 × 0,6 = 0,36 ✓). 0,2³ = 0,008. Tel op: 0,6 + 0,008 = 0,608 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken √1,44 − 0,4².', checkMode: 'auto', options: ['0,56', '10,4', '1,04', '0,4'], correctIndex: 2, explanation: '√1,44 = 1,2 (kontroleer: 1,2 × 1,2 = 1,44 ✓). 0,4² = 0,16. Trek af: 1,2 − 0,16 = 1,04 ✓' },
        { difficulty: 'Hard', question: 'Bereken ∛0,125 + 0,7².', checkMode: 'auto', options: ['0,53', '9,9', '1,9', '0,99'], correctIndex: 3, explanation: '∛0,125 = 0,5 (kontroleer: 0,5 × 0,5 × 0,5 = 0,125 ✓). 0,7² = 0,49. Tel op: 0,5 + 0,49 = 0,99 ✓' },
        { difficulty: 'Hard', question: 'Bereken 0,9² en ∛0,027 × 10. Watter stelling is korrek?', checkMode: 'auto', options: ['0,9² = 0,81 en ∛0,027 × 10 = 3, dus is die twee resultate nie gelyk nie', '0,9² = 0,81 en ∛0,027 × 10 = 0,81, dus is die twee resultate gelyk', '0,9² = 0,081 en ∛0,027 × 10 = 3, dus is die twee resultate nie gelyk nie', '0,9² = 0,81 en ∛0,027 × 10 = 30, dus is die twee resultate nie gelyk nie'], correctIndex: 0, explanation: '0,9² = 0,9 × 0,9 = 0,81. ∛0,027 = 0,3 (kontroleer: 0,3 × 0,3 × 0,3 = 0,027 ✓), dus ∛0,027 × 10 = 3. Aangesien 0,81 ≠ 3, is die twee resultate NIE gelyk nie ✓' },

        // Blok E — Meerstap-werklike-lewe-woordprobleme (14-17)
        { difficulty: 'Medium', question: 'Amahle koop 3,4 kg aartappels teen R24,50 per kg en 1,6 kg uie teen R38,20 per kg. Bereken die totale koste.', checkMode: 'auto', options: ['R69,45', 'R144,42', 'R14,44', 'R154,42'], correctIndex: 1, explanation: 'Aartappels: 3,4 × R24,50 = R83,30. Uie: 1,6 × R38,20 = R61,12. Totaal: R83,30 + R61,12 = R144,42 ✓' },
        { difficulty: 'Medium', question: "Sipho se bakkie gebruik 5,5 liter brandstof per 100 km. Hoeveel liter word benodig vir ʼn 320 km-rit?", checkMode: 'auto', options: ['176 liter', '1,76 liter', '17,6 liter', '55,5 liter'], correctIndex: 2, explanation: 'Tempo per km: 5,5 ÷ 100 = 0,055 liter per km. Vermenigvuldig met afstand: 0,055 × 320 = 17,6 liter ✓' },
        { difficulty: 'Medium-Hard', question: 'Thabo koop 4,8 kg appels teen R21,60 per kg en betaal met ʼn R150-noot. Hoeveel kleingeld ontvang hy?', checkMode: 'auto', options: ['R139,63', 'R4,63', 'R53,68', 'R46,32'], correctIndex: 3, explanation: 'Koste: 4,8 × R21,60 = R103,68. Kleingeld: R150 − R103,68 = R46,32 ✓' },
        { difficulty: 'Hard', question: "ʼn Huishouding gebruik 180,5 kWh elektrisiteit in ʼn maand, gehef teen R2,40 per kWh. Bereken die totale elektrisiteitrekening.", checkMode: 'auto', options: ['R433,20', 'R43,32', 'R4332,00', 'R432,00'], correctIndex: 0, explanation: 'Totaal: 180,5 × R2,40 = R433,20 ✓' },

        // Blok F — Afronding tot 'n gegewe aantal desimale plekke & foutopsporing (18-20)
        { difficulty: 'Medium-Hard', question: "Lerato se motor gebruik 6,5 liter per 100 km. Bereken die liter benodig vir ʼn 480 km-rit, tot 2 desimale plekke.", checkMode: 'auto', options: ['312,00 liter', '31,20 liter', '3,12 liter', '31,02 liter'], correctIndex: 1, explanation: 'Tempo per km: 6,5 ÷ 100 = 0,065 liter per km. Vermenigvuldig: 0,065 × 480 = 31,2. Afgerond tot 2 desimale plekke: 31,20 liter ✓' },
        { difficulty: 'Hard', question: "ʼn Prys van R22,50 word gelykop tussen 7 leerders verdeel. Bereken elkeen se deel, tot 2 desimale plekke.", checkMode: 'auto', options: ['R32,14', 'R0,32', 'R3,21', 'R3,22'], correctIndex: 2, explanation: '22,50 ÷ 7 = 3,214285... Afgerond tot 2 desimale plekke: R3,21 ✓' },
        { difficulty: 'Hard', question: 'Wat is die korrekte antwoord op 0,8 ÷ 0,05?', checkMode: 'auto', options: ['1,6', '0,16', '160', '16'], correctIndex: 3, explanation: 'Die deler 0,05 het 2 desimale plekke, dus vermenigvuldig altwee getalle met 100: 0,8 × 100 = 80 en 0,05 × 100 = 5. Dan is 80 ÷ 5 = 16 (nie 1,6 nie, wat ontstaan as die desimale punt nie in albei getalle geskuif word nie) ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het Graad 9 desimale breuke bemeester.' },
        { minScore: 14, message: 'Uitstekende werk! Jy is seker van die meeste hiervan — gaan enige gemiste vrae na.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer na en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok A — BODMAS met hakies (1-3)
        { difficulty: 'Medium', question: 'Bereken (5,5 + 1,7) × 1,4.', checkMode: 'auto', options: ['10,08', '1,008', '100,8', '10,8'], correctIndex: 0, explanation: 'Hakies eerste: 5,5 + 1,7 = 7,2. Vermenigvuldig: 7,2 × 1,4 = 10,08 ✓' },
        { difficulty: 'Medium', question: 'Bereken (8,4 − 2,6) ÷ 2.', checkMode: 'auto', options: ['29', '2,9', '0,29', '5,8'], correctIndex: 1, explanation: 'Hakies eerste: 8,4 − 2,6 = 5,8. Deel: 5,8 ÷ 2 = 2,9 ✓' },
        { difficulty: 'Medium-Hard', question: "ʼn Kleremaker skaal ʼn patroon met die uitdrukking (3,6 + 2,4) × 0,5. Bereken hierdie uitdrukking.", checkMode: 'auto', options: ['30', '0,3', '3', '6'], correctIndex: 2, explanation: 'Hakies eerste: 3,6 + 2,4 = 6. Vermenigvuldig: 6 × 0,5 = 3 ✓' },

        // Blok B — BODMAS sonder hakies, gemengde bewerkings (4-6)
        { difficulty: 'Medium', question: 'Bereken 9,6 ÷ 1,2 + 3,5 × 2,8 − 2,5.', checkMode: 'auto', options: ['8,1', '6,48', '1,53', '15,3'], correctIndex: 3, explanation: 'Deling en vermenigvuldiging eerste: 9,6 ÷ 1,2 = 8, 3,5 × 2,8 = 9,8. Werk dan van links na regs: 8 + 9,8 − 2,5 = 15,3 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 18,9 ÷ 1,5 − 3,6 × 1,2.', checkMode: 'auto', options: ['8,28', '0,828', '82,8', '-3,06'], correctIndex: 0, explanation: 'Deling: 18,9 ÷ 1,5 = 12,6. Vermenigvuldiging: 3,6 × 1,2 = 4,32. Trek af: 12,6 − 4,32 = 8,28 ✓' },
        { difficulty: 'Hard', question: 'Bereken 18 − 5,4 ÷ 0,9 + 0,6 × 2,5.', checkMode: 'auto', options: ['18,9', '13,5', '1,35', '27'], correctIndex: 1, explanation: 'Deling: 5,4 ÷ 0,9 = 6. Vermenigvuldiging: 0,6 × 2,5 = 1,5. Werk van links na regs: 18 − 6 + 1,5 = 13,5 ✓' },

        // Blok C — Kwadrate & kubusse in saamgestelde berekeninge (7-9)
        { difficulty: 'Medium', question: 'Bereken 0,5² + 0,6².', checkMode: 'auto', options: ['1,1', '6,1', '0,61', '1,45'], correctIndex: 2, explanation: '0,5² = 0,25. 0,6² = 0,36. Tel op: 0,25 + 0,36 = 0,61 ✓' },
        { difficulty: 'Medium', question: 'Bereken 0,3³ × 100.', checkMode: 'auto', options: ['9', '0,27', '0,027', '2,7'], correctIndex: 3, explanation: '0,3³ = 0,3 × 0,3 × 0,3 = 0,027. Vermenigvuldig: 0,027 × 100 = 2,7 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken (0,6 + 0,4)² − 0,3 × 0,2.', checkMode: 'auto', options: ['0,94', '0,46', '9,4', '0,4'], correctIndex: 0, explanation: 'Hakies: 0,6 + 0,4 = 1. Kwadraat: 1² = 1. Vermenigvuldiging: 0,3 × 0,2 = 0,06. Trek af: 1 − 0,06 = 0,94 ✓' },

        // Blok D — Wortels in saamgestelde berekeninge & foutopsporing (10-13)
        { difficulty: 'Medium', question: 'Bereken √0,49 + 0,3³.', checkMode: 'auto', options: ['0,272', '0,727', '7,27', '1,6'], correctIndex: 1, explanation: '√0,49 = 0,7 (kontroleer: 0,7 × 0,7 = 0,49 ✓). 0,3³ = 0,027. Tel op: 0,7 + 0,027 = 0,727 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken √1,69 − 0,6².', checkMode: 'auto', options: ['0,29', '9,4', '0,94', '0,1'], correctIndex: 2, explanation: '√1,69 = 1,3 (kontroleer: 1,3 × 1,3 = 1,69 ✓). 0,6² = 0,36. Trek af: 1,3 − 0,36 = 0,94 ✓' },
        { difficulty: 'Hard', question: 'Bereken ∛0,064 + 0,8².', checkMode: 'auto', options: ['0,66', '10,4', '2', '1,04'], correctIndex: 3, explanation: '∛0,064 = 0,4 (kontroleer: 0,4 × 0,4 × 0,4 = 0,064 ✓). 0,8² = 0,64. Tel op: 0,4 + 0,64 = 1,04 ✓' },
        { difficulty: 'Hard', question: 'Bereken 0,8² en ∛0,064 × 10. Watter stelling is korrek?', checkMode: 'auto', options: ['0,8² = 0,64 en ∛0,064 × 10 = 4, dus is die twee resultate nie gelyk nie', '0,8² = 0,64 en ∛0,064 × 10 = 0,64, dus is die twee resultate gelyk', '0,8² = 0,064 en ∛0,064 × 10 = 4, dus is die twee resultate nie gelyk nie', '0,8² = 0,64 en ∛0,064 × 10 = 40, dus is die twee resultate nie gelyk nie'], correctIndex: 0, explanation: '0,8² = 0,8 × 0,8 = 0,64. ∛0,064 = 0,4 (kontroleer: 0,4 × 0,4 × 0,4 = 0,064 ✓), dus ∛0,064 × 10 = 4. Aangesien 0,64 ≠ 4, is die twee resultate NIE gelyk nie ✓' },

        // Blok E — Meerstap-werklike-lewe-woordprobleme (14-17)
        { difficulty: 'Medium', question: 'Zanele koop 2,6 kg wortels teen R26,50 per kg en 1,8 kg spinasie teen R42,40 per kg. Bereken die totale koste.', checkMode: 'auto', options: ['R83,21', 'R145,22', 'R14,52', 'R154,22'], correctIndex: 1, explanation: 'Wortels: 2,6 × R26,50 = R68,90. Spinasie: 1,8 × R42,40 = R76,32. Totaal: R68,90 + R76,32 = R145,22 ✓' },
        { difficulty: 'Medium', question: "Amahle se motor gebruik 6,2 liter brandstof per 100 km. Hoeveel liter word benodig vir ʼn 350 km-rit?", checkMode: 'auto', options: ['217 liter', '2,17 liter', '21,7 liter', '62 liter'], correctIndex: 2, explanation: 'Tempo per km: 6,2 ÷ 100 = 0,062 liter per km. Vermenigvuldig met afstand: 0,062 × 350 = 21,7 liter ✓' },
        { difficulty: 'Medium-Hard', question: 'Sipho koop 3,6 kg lemoene teen R18,40 per kg en betaal met ʼn R120-noot. Hoeveel kleingeld ontvang hy?', checkMode: 'auto', options: ['R113,38', 'R5,38', 'R63,76', 'R53,76'], correctIndex: 3, explanation: 'Koste: 3,6 × R18,40 = R66,24. Kleingeld: R120 − R66,24 = R53,76 ✓' },
        { difficulty: 'Hard', question: "ʼn Huishouding gebruik 195,5 kWh elektrisiteit in ʼn maand, gehef teen R2,40 per kWh. Bereken die totale elektrisiteitrekening.", checkMode: 'auto', options: ['R469,20', 'R46,92', 'R4692,00', 'R468,00'], correctIndex: 0, explanation: 'Totaal: 195,5 × R2,40 = R469,20 ✓' },

        // Blok F — Afronding tot 'n gegewe aantal desimale plekke & foutopsporing (18-20)
        { difficulty: 'Medium-Hard', question: "Lerato se bakkie gebruik 7,5 liter per 100 km. Bereken die liter benodig vir ʼn 340 km-rit, tot 2 desimale plekke.", checkMode: 'auto', options: ['255,00 liter', '25,50 liter', '2,55 liter', '25,05 liter'], correctIndex: 1, explanation: 'Tempo per km: 7,5 ÷ 100 = 0,075 liter per km. Vermenigvuldig: 0,075 × 340 = 25,5. Afgerond tot 2 desimale plekke: 25,50 liter ✓' },
        { difficulty: 'Hard', question: "ʼn Prys van R35,60 word gelykop tussen 8 leerders verdeel. Bereken elkeen se deel, tot 2 desimale plekke.", checkMode: 'auto', options: ['R44,50', 'R0,45', 'R4,45', 'R4,54'], correctIndex: 2, explanation: '35,60 ÷ 8 = 4,45, reeds tot 2 desimale plekke: R4,45 ✓' },
        { difficulty: 'Hard', question: 'Wat is die korrekte antwoord op 0,6 ÷ 0,04?', checkMode: 'auto', options: ['1,5', '0,15', '150', '15'], correctIndex: 3, explanation: 'Die deler 0,04 het 2 desimale plekke, dus vermenigvuldig altwee getalle met 100: 0,6 × 100 = 60 en 0,04 × 100 = 4. Dan is 60 ÷ 4 = 15 (nie 1,5 nie, wat ontstaan as die desimale punt nie in albei getalle geskuif word nie) ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het Graad 9 desimale breuke bemeester.' },
        { minScore: 14, message: 'Uitstekende werk! Jy is seker van die meeste hiervan — gaan enige gemiste vrae na.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer na en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok A — BODMAS met hakies (1-3)
        { difficulty: 'Medium', question: 'Bereken (3,5 + 2,9) × 1,8.', checkMode: 'auto', options: ['11,52', '1,152', '115,2', '11,2'], correctIndex: 0, explanation: 'Hakies eerste: 3,5 + 2,9 = 6,4. Vermenigvuldig: 6,4 × 1,8 = 11,52 ✓' },
        { difficulty: 'Medium', question: 'Bereken (7,6 − 2,4) ÷ 2.', checkMode: 'auto', options: ['26', '2,6', '0,26', '5,2'], correctIndex: 1, explanation: 'Hakies eerste: 7,6 − 2,4 = 5,2. Deel: 5,2 ÷ 2 = 2,6 ✓' },
        { difficulty: 'Medium-Hard', question: "ʼn Skrynwerker skaal ʼn ontwerp met die uitdrukking (2,8 + 3,2) × 0,5. Bereken hierdie uitdrukking.", checkMode: 'auto', options: ['30', '0,3', '3', '6'], correctIndex: 2, explanation: 'Hakies eerste: 2,8 + 3,2 = 6. Vermenigvuldig: 6 × 0,5 = 3 ✓' },

        // Blok B — BODMAS sonder hakies, gemengde bewerkings (4-6)
        { difficulty: 'Medium', question: 'Bereken 6,4 ÷ 0,8 + 1,5 × 4,2 − 2,3.', checkMode: 'auto', options: ['4,8', '6,33', '1,2', '12'], correctIndex: 3, explanation: 'Deling en vermenigvuldiging eerste: 6,4 ÷ 0,8 = 8, 1,5 × 4,2 = 6,3. Werk dan van links na regs: 8 + 6,3 − 2,3 = 12 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 16,8 ÷ 1,2 − 3,5 × 2,5.', checkMode: 'auto', options: ['5,25', '0,525', '52,5', '-7,35'], correctIndex: 0, explanation: 'Deling: 16,8 ÷ 1,2 = 14. Vermenigvuldiging: 3,5 × 2,5 = 8,75. Trek af: 14 − 8,75 = 5,25 ✓' },
        { difficulty: 'Hard', question: 'Bereken 20 − 6,4 ÷ 0,8 + 0,9 × 3,5.', checkMode: 'auto', options: ['22,35', '15,15', '1,515', '43,5'], correctIndex: 1, explanation: 'Deling: 6,4 ÷ 0,8 = 8. Vermenigvuldiging: 0,9 × 3,5 = 3,15. Werk van links na regs: 20 − 8 + 3,15 = 15,15 ✓' },

        // Blok C — Kwadrate & kubusse in saamgestelde berekeninge (7-9)
        { difficulty: 'Medium', question: 'Bereken 0,7² + 0,2².', checkMode: 'auto', options: ['0,9', '5,3', '0,53', '0,89'], correctIndex: 2, explanation: '0,7² = 0,49. 0,2² = 0,04. Tel op: 0,49 + 0,04 = 0,53 ✓' },
        { difficulty: 'Medium', question: 'Bereken 0,5³ × 10.', checkMode: 'auto', options: ['2,5', '0,125', '12,5', '1,25'], correctIndex: 3, explanation: '0,5³ = 0,5 × 0,5 × 0,5 = 0,125. Vermenigvuldig: 0,125 × 10 = 1,25 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken (0,4 + 0,6)² − 0,5 × 0,4.', checkMode: 'auto', options: ['0,8', '0,32', '8', '-1'], correctIndex: 0, explanation: 'Hakies: 0,4 + 0,6 = 1. Kwadraat: 1² = 1. Vermenigvuldiging: 0,5 × 0,4 = 0,2. Trek af: 1 − 0,2 = 0,8 ✓' },

        // Blok D — Wortels in saamgestelde berekeninge & foutopsporing (10-13)
        { difficulty: 'Medium', question: 'Bereken √0,81 + 0,4³.', checkMode: 'auto', options: ['0,469', '0,964', '9,64', '2,1'], correctIndex: 1, explanation: '√0,81 = 0,9 (kontroleer: 0,9 × 0,9 = 0,81 ✓). 0,4³ = 0,064. Tel op: 0,9 + 0,064 = 0,964 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken √2,25 − 0,5².', checkMode: 'auto', options: ['-0,1', '12,5', '1,25', '0,5'], correctIndex: 2, explanation: '√2,25 = 1,5 (kontroleer: 1,5 × 1,5 = 2,25 ✓). 0,5² = 0,25. Trek af: 1,5 − 0,25 = 1,25 ✓' },
        { difficulty: 'Hard', question: 'Bereken ∛0,216 + 0,6².', checkMode: 'auto', options: ['0,432', '9,6', '1,8', '0,96'], correctIndex: 3, explanation: '∛0,216 = 0,6 (kontroleer: 0,6 × 0,6 × 0,6 = 0,216 ✓). 0,6² = 0,36. Tel op: 0,6 + 0,36 = 0,96 ✓' },
        { difficulty: 'Hard', question: 'Bereken 0,6² en ∛0,216 × 10. Watter stelling is korrek?', checkMode: 'auto', options: ['0,6² = 0,36 en ∛0,216 × 10 = 6, dus is die twee resultate nie gelyk nie', '0,6² = 0,36 en ∛0,216 × 10 = 0,36, dus is die twee resultate gelyk', '0,6² = 0,036 en ∛0,216 × 10 = 6, dus is die twee resultate nie gelyk nie', '0,6² = 0,36 en ∛0,216 × 10 = 60, dus is die twee resultate nie gelyk nie'], correctIndex: 0, explanation: '0,6² = 0,6 × 0,6 = 0,36. ∛0,216 = 0,6 (kontroleer: 0,6 × 0,6 × 0,6 = 0,216 ✓), dus ∛0,216 × 10 = 6. Aangesien 0,36 ≠ 6, is die twee resultate NIE gelyk nie ✓' },

        // Blok E — Meerstap-werklike-lewe-woordprobleme (14-17)
        { difficulty: 'Medium', question: 'Zinhle koop 4,5 kg botterskorsie teen R19,80 per kg en 2,2 kg tamaties teen R33,50 per kg. Bereken die totale koste.', checkMode: 'auto', options: ['R82,61', 'R162,80', 'R16,28', 'R172,80'], correctIndex: 1, explanation: 'Botterskorsie: 4,5 × R19,80 = R89,10. Tamaties: 2,2 × R33,50 = R73,70. Totaal: R89,10 + R73,70 = R162,80 ✓' },
        { difficulty: 'Medium', question: "Thabo se bakkie gebruik 4,8 liter brandstof per 100 km. Hoeveel liter word benodig vir ʼn 275 km-rit?", checkMode: 'auto', options: ['132 liter', '1,32 liter', '13,2 liter', '1320 liter'], correctIndex: 2, explanation: 'Tempo per km: 4,8 ÷ 100 = 0,048 liter per km. Vermenigvuldig met afstand: 0,048 × 275 = 13,2 liter ✓' },
        { difficulty: 'Medium-Hard', question: 'Lerato koop 5,2 kg pere teen R16,75 per kg en betaal met ʼn R140-noot. Hoeveel kleingeld ontvang sy?', checkMode: 'auto', options: ['R131,29', 'R5,29', 'R59,20', 'R52,90'], correctIndex: 3, explanation: 'Koste: 5,2 × R16,75 = R87,10. Kleingeld: R140 − R87,10 = R52,90 ✓' },
        { difficulty: 'Hard', question: "ʼn Huishouding gebruik 165,5 kWh elektrisiteit in ʼn maand, gehef teen R2,60 per kWh. Bereken die totale elektrisiteitrekening.", checkMode: 'auto', options: ['R430,30', 'R43,03', 'R4303,00', 'R429,00'], correctIndex: 0, explanation: 'Totaal: 165,5 × R2,60 = R430,30 ✓' },

        // Blok F — Afronding tot 'n gegewe aantal desimale plekke & foutopsporing (18-20)
        { difficulty: 'Medium-Hard', question: "Sipho se motor gebruik 8,4 liter per 100 km. Bereken die liter benodig vir ʼn 225 km-rit, tot 2 desimale plekke.", checkMode: 'auto', options: ['189,00 liter', '18,90 liter', '1,89 liter', '18,09 liter'], correctIndex: 1, explanation: 'Tempo per km: 8,4 ÷ 100 = 0,084 liter per km. Vermenigvuldig: 0,084 × 225 = 18,9. Afgerond tot 2 desimale plekke: 18,90 liter ✓' },
        { difficulty: 'Hard', question: "ʼn Prys van R48,30 word gelykop tussen 9 leerders verdeel. Bereken elkeen se deel, tot 2 desimale plekke.", checkMode: 'auto', options: ['R53,70', 'R0,54', 'R5,37', 'R5,73'], correctIndex: 2, explanation: '48,30 ÷ 9 = 5,3666... Afgerond tot 2 desimale plekke: R5,37 ✓' },
        { difficulty: 'Hard', question: 'Wat is die korrekte antwoord op 0,9 ÷ 0,06?', checkMode: 'auto', options: ['1,5', '0,15', '150', '15'], correctIndex: 3, explanation: 'Die deler 0,06 het 2 desimale plekke, dus vermenigvuldig altwee getalle met 100: 0,9 × 100 = 90 en 0,06 × 100 = 6. Dan is 90 ÷ 6 = 15 (nie 1,5 nie, wat ontstaan as die desimale punt nie in albei getalle geskuif word nie) ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het Graad 9 desimale breuke bemeester.' },
        { minScore: 14, message: 'Uitstekende werk! Jy is seker van die meeste hiervan — gaan enige gemiste vrae na.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer na en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },
  ],
}
