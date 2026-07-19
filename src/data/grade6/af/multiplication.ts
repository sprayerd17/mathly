import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Kleurhulpfunksies (vermenigvuldigingsrolle) ───────────────────────────────
// eenhede-vermenigvuldiging → blou    (#2563eb)
// tiene-vermenigvuldiging   → groen   (#16a34a)
// §1/3: nul-plekhouer → oranje  (#ea580c)   §2: honderde-vermenigvuldiging
// §1/3: finale optelling   → rooi     (#dc2626)   §2: nul-plekhouers
// §2: finale antwoord      → pers     (#7c3aed)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Vermenigvuldiging',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — VERMENIGVULDIG MET 2-SYFERGETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-2-digit-numbers',
      title: 'Vermenigvuldig met 2-Syfergetalle',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 6 vermenigvuldig ons groot getalle met <strong>2-syfergetalle</strong>. Ons breek die 2-syfergetal op in <strong>tiene</strong> en <strong>ene</strong> en vermenigvuldig afsonderlik, en tel dan die resultate bymekaar. Dit word die <strong>lang vermenigvuldigingsmetode</strong> genoem. Vermenigvuldig altyd eers met die ${bl('eenhede-syfer')}, dan met die ${gr('tiene-syfer')} — en onthou om ${or('ʼn nul as plekhouer')} by te voeg wanneer jy met die tiene-syfer vermenigvuldig.</p>` +

        // ── Kleurgids ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eenhede-vermenigvuldiging')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tiene-vermenigvuldiging')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('nul-plekhouer')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('finale optelling')}</span>` +
        `</div>` +

        // ── Metode-stappe ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die lang vermenigvuldigingsmetode</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Vermenigvuldig met die eenhede-syfer')} — Vermenigvuldig die groot getal met die eenhede-syfer van die 2-syfergetal. Skryf die volledige resultaat op die eerste ry.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Vermenigvuldig met die tiene-syfer')} — Vermenigvuldig die groot getal met die tiene-syfer. Skryf die resultaat op die tweede ry, begin met ${or('ʼn nul-plekhouer')} in die eenhede-kolom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Plaas die nul')} — Die ${or('nul-plekhouer')} skuif die tweede gedeeltelike produk een plek na links, omdat die tiene-syfer tiene verteenwoordig, nie ene nie. Los dit nooit uit nie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${re('Tel die twee gedeeltelike produkte bymekaar')} — Tel die resultaat van Stap 1 en die resultaat van Stap 2 bymekaar. Hierdie som is die finale antwoord.</p>` +
        `</div>` +

        `</div>` +

        // ── Wenkboks ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom die nul-plekhouer belangrik is</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jy met die <strong>tiene-syfer</strong> vermenigvuldig, vermenigvuldig jy eintlik met ʼn veelvoud van tien (bv. 20, 30, 50). Die ${or('nul-plekhouer')} in die eenhede-kolom weerspieël dit. Om dit uit te laat sal ʼn antwoord gee wat tien keer te klein is — skryf dit altyd voordat jy met die tiene-syfer vermenigvuldig.</p>` +
        `</div>`,

      workedExamples: [
        // ── Voorbeeld 1: 3 456 × 24 = 82 944 ──────────────────────────────────
        {
          question: 'Bereken 3 456 × 24.',
          answer: `3 456 × 24 = ${re('82 944')}`,
          steps: [
            `${bl('Vermenigvuldig met die eenhede-syfer (4):')} 3 456 × ${bl('4')} = ${bl('13 824')}. Skryf ${bl('13 824')} op die eerste ry.`,
            `${gr('Vermenigvuldig met die tiene-syfer (2):')} 3 456 × ${gr('2')} tiene — skryf eers ${or('0')} as plekhouer in die eenhede-kolom, vermenigvuldig dan: 3 456 × ${gr('20')} = ${gr('69 120')}. Skryf ${gr('69 12')}${or('0')} op die tweede ry.`,
            `${re('Tel die gedeeltelike produkte bymekaar:')} ${bl('13 824')} + ${gr('69 120')} = ${re('82 944')}.`,
            `<strong>Antwoord:</strong> 3 456 × 24 = ${re('82 944')} ✓`,
          ],
        },

        // ── Voorbeeld 2: 12 345 × 36 = 444 420 ────────────────────────────────
        {
          question: 'Bereken 12 345 × 36.',
          answer: `12 345 × 36 = ${re('444 420')}`,
          steps: [
            `${bl('Vermenigvuldig met die eenhede-syfer (6):')} 12 345 × ${bl('6')} = ${bl('74 070')}. Skryf ${bl('74 070')} op die eerste ry.`,
            `${gr('Vermenigvuldig met die tiene-syfer (3):')} 12 345 × ${gr('3')} tiene — skryf eers ${or('0')} as plekhouer in die eenhede-kolom, vermenigvuldig dan: 12 345 × ${gr('30')} = ${gr('370 350')}. Skryf ${gr('370 35')}${or('0')} op die tweede ry.`,
            `${re('Tel die gedeeltelike produkte bymekaar:')} ${bl('74 070')} + ${gr('370 350')} = ${re('444 420')}.`,
            `<strong>Antwoord:</strong> 12 345 × 36 = ${re('444 420')} ✓`,
          ],
        },

        // ── Voorbeeld 3: Sipho-woordprobleem — 4 250 × 52 = 221 000 ─────────
        {
          question: 'Sipho verdien R4 250 per week. Hoeveel verdien hy in 52 weke?',
          answer: `Sipho verdien ${re('R221 000')} in 52 weke`,
          steps: [
            `Skryf die getalsin: 4 250 × 52 = ?`,
            `${bl('Vermenigvuldig met die eenhede-syfer (2):')} 4 250 × ${bl('2')} = ${bl('8 500')}. Skryf ${bl('8 500')} op die eerste ry.`,
            `${gr('Vermenigvuldig met die tiene-syfer (5):')} 4 250 × ${gr('5')} tiene — skryf eers ${or('0')} as plekhouer in die eenhede-kolom, vermenigvuldig dan: 4 250 × ${gr('50')} = ${gr('212 500')}. Skryf ${gr('212 50')}${or('0')} op die tweede ry.`,
            `${re('Tel die gedeeltelike produkte bymekaar:')} ${bl('8 500')} + ${gr('212 500')} = ${re('221 000')}.`,
            `<strong>Antwoord:</strong> Sipho verdien ${re('R221 000')} in 52 weke. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Maklik ──────────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 1 234 × 12.',
          answer: '14 808',
          checkMode: 'auto',
          correctAnswer: '14808',
          correctAnswers: ['14808', '14 808'],
          explanation: 'Stap 1 — Vermenigvuldig met eenhede-syfer (2): 1 234 × 2 = 2 468.\nStap 2 — Vermenigvuldig met tiene-syfer (1): skryf 0-plekhouer, dan 1 234 × 10 = 12 340.\nStap 3 — Tel die gedeeltelike produkte bymekaar: 2 468 + 12 340 = 14 808 ✓',
        },

        // ── V2 Maklik ──────────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 2 345 × 21.',
          answer: '49 245',
          checkMode: 'auto',
          correctAnswer: '49245',
          correctAnswers: ['49245', '49 245'],
          explanation: 'Stap 1 — Vermenigvuldig met eenhede-syfer (1): 2 345 × 1 = 2 345.\nStap 2 — Vermenigvuldig met tiene-syfer (2): skryf 0-plekhouer, dan 2 345 × 20 = 46 900.\nStap 3 — Tel die gedeeltelike produkte bymekaar: 2 345 + 46 900 = 49 245 ✓',
        },

        // ── V3 Medium ─────────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 4 567 × 34.',
          answer: '155 278',
          checkMode: 'auto',
          correctAnswer: '155278',
          correctAnswers: ['155278', '155 278'],
          explanation: 'Stap 1 — Vermenigvuldig met eenhede-syfer (4): 4 567 × 4 = 18 268.\nStap 2 — Vermenigvuldig met tiene-syfer (3): skryf 0-plekhouer, dan 4 567 × 30 = 137 010.\nStap 3 — Tel die gedeeltelike produkte bymekaar: 18 268 + 137 010 = 155 278 ✓',
        },

        // ── V4 Medium ─────────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 3 456 × 45.',
          answer: '155 520',
          checkMode: 'auto',
          correctAnswer: '155520',
          correctAnswers: ['155520', '155 520'],
          explanation: 'Stap 1 — Vermenigvuldig met eenhede-syfer (5): 3 456 × 5 = 17 280.\nStap 2 — Vermenigvuldig met tiene-syfer (4): skryf 0-plekhouer, dan 3 456 × 40 = 138 240.\nStap 3 — Tel die gedeeltelike produkte bymekaar: 17 280 + 138 240 = 155 520 ✓',
        },

        // ── V5 Moeilik ──────────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Bereken 12 345 × 67.',
          answer: '827 115',
          checkMode: 'auto',
          correctAnswer: '827115',
          correctAnswers: ['827115', '827 115'],
          explanation: 'Stap 1 — Vermenigvuldig met eenhede-syfer (7): 12 345 × 7 = 86 415.\nStap 2 — Vermenigvuldig met tiene-syfer (6): skryf 0-plekhouer, dan 12 345 × 60 = 740 700.\nStap 3 — Tel die gedeeltelike produkte bymekaar: 86 415 + 740 700 = 827 115 ✓',
        },

        // ── V6 Moeilik ──────────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê 3 456 × 24 = 82 904. Gaan sy antwoord na en verduidelik of hy korrek is.',
          answer: '3 456 × 4 = 13 824. 3 456 × 20 = 69 120. 13 824 + 69 120 = 82 944. Sipho is verkeerd — die korrekte antwoord is 82 944.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Lang vermenigvuldiging-uitleg wat 3 456 vermenigvuldig met 24 toon met die eenhede-ry in blou wat 13 824 wys, die tiene-ry in groen met oranje plekhouernul wat 69 120 wys, en die finale optelling in rooi wat 82 944 gee',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 145" width="100%" style="max-width:280px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="180" y="22" text-anchor="end" font-size="17" font-weight="700" fill="#0f1f3d">3 456</text>` +
        `<text x="180" y="46" text-anchor="end" font-size="17" font-weight="700" fill="#0f1f3d">× 24</text>` +
        `<line x1="55" y1="54" x2="180" y2="54" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="10" y="76" font-size="10" font-weight="700" fill="#6b7280">×4</text>` +
        `<text x="180" y="76" text-anchor="end" font-size="16" font-weight="700" fill="#2563eb">13 824</text>` +
        `<text x="10" y="98" font-size="10" font-weight="700" fill="#6b7280">×20</text>` +
        `<text x="180" y="98" text-anchor="end" font-size="16" font-weight="700" fill="#16a34a">69 12<tspan fill="#ea580c">0</tspan></text>` +
        `<line x1="35" y1="106" x2="180" y2="106" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="180" y="128" text-anchor="end" font-size="18" font-weight="700" fill="#dc2626">82 944</text>` +
        `</svg>`,

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn groot getal met ʼn 2-syfergetal te vermenigvuldig deur lang vermenigvuldiging te gebruik, met kleurgekodeerde stappe vir eenhede in blou, tiene in groen, plekhouernul in oranje en die finale optelling in rooi" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — VERMENIGVULDIG MET 3-SYFERGETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-3-digit-numbers',
      title: 'Vermenigvuldig met 3-Syfergetalle',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer ons met ʼn <strong>3-syfergetal</strong> vermenigvuldig, breek ons dit op in <strong>honderde</strong>, <strong>tiene</strong> en <strong>ene</strong> en vermenigvuldig afsonderlik. Ons voeg ${re('een nul-plekhouer')} by wanneer ons met die ${gr('tiene-syfer')} vermenigvuldig en ${re('twee nul-plekhouers')} wanneer ons met die ${or('honderde-syfer')} vermenigvuldig. Dan tel ons al drie resultate bymekaar. Dit is ʼn uitbreiding van die lang vermenigvuldigingsmetode wat vir 2-syfergetalle gebruik word.</p>` +

        // ── Kleurgids ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eenhede-vermenigvuldiging')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tiene-vermenigvuldiging')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('honderde-vermenigvuldiging')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('nul-plekhouers')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('finale antwoord')}</span>` +
        `</div>` +

        // ── Metode-stappe ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die lang vermenigvuldigingsmetode vir 3-syfergetalle</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Vermenigvuldig met die eenhede-syfer')} — Vermenigvuldig die groot getal met die eenhede-syfer. Skryf die volledige resultaat op die eerste ry.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Vermenigvuldig met die tiene-syfer')} — Skryf ${re('een nul-plekhouer')} in die eenhede-kolom, vermenigvuldig dan met die tiene-syfer. Skryf die resultaat op die tweede ry.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Vermenigvuldig met die honderde-syfer')} — Skryf ${re('twee nul-plekhouers')} in die eenhede- en tiene-kolomme, vermenigvuldig dan met die honderde-syfer. Skryf die resultaat op die derde ry.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${pu('Tel al drie gedeeltelike produkte bymekaar')} — Tel die resultate van Stappe 1, 2 en 3 bymekaar. Hierdie som is die ${pu('finale antwoord')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Wenkboks ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom nul-plekhouers belangrik is</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jy met die ${gr('tiene-syfer')} vermenigvuldig, vermenigvuldig jy eintlik met ʼn veelvoud van tien — dus voeg jy ${re('een nul')} by. Wanneer jy met die ${or('honderde-syfer')} vermenigvuldig, vermenigvuldig jy met ʼn veelvoud van 100 — dus voeg jy ${re('twee nulle')} by. Hierdie ${re('nul-plekhouers')} skuif elke gedeeltelike produk na die korrekte kolom voordat dit bymekaar getel word. Om hulle uit te laat sal ʼn antwoord gee wat te klein is.</p>` +
        `</div>`,

      workedExamples: [
        // ── Voorbeeld 1: 2 345 × 123 = 288 435 ────────────────────────────────
        {
          question: 'Bereken 2 345 × 123.',
          answer: `2 345 × 123 = ${pu('288 435')}`,
          steps: [
            `${bl('Vermenigvuldig met die eenhede-syfer (3):')} 2 345 × ${bl('3')} = ${bl('7 035')}. Skryf ${bl('7 035')} op die eerste ry.`,
            `${gr('Vermenigvuldig met die tiene-syfer (2):')} 2 345 × ${gr('2')} tiene — skryf eers ${re('0')} as plekhouer in die eenhede-kolom, vermenigvuldig dan: 2 345 × ${gr('20')} = ${gr('46 90')}${re('0')}. Skryf ${gr('46 90')}${re('0')} op die tweede ry.`,
            `${or('Vermenigvuldig met die honderde-syfer (1):')} 2 345 × ${or('1')} honderde — skryf eers ${re('00')} as twee nul-plekhouers in die eenhede- en tiene-kolomme, vermenigvuldig dan: 2 345 × ${or('100')} = ${or('234 5')}${re('00')}. Skryf ${or('234 5')}${re('00')} op die derde ry.`,
            `${pu('Tel al drie gedeeltelike produkte bymekaar:')} ${bl('7 035')} + ${gr('46 900')} + ${or('234 500')} = ${pu('288 435')}. <strong>Antwoord:</strong> 2 345 × 123 = ${pu('288 435')} ✓`,
          ],
        },

        // ── Voorbeeld 2: 1 245 × 365 = 454 425 (fabriekwoordprobleem) ─────────
        {
          question: 'ʼn Fabriek vervaardig 1 245 items per dag. Hoeveel items vervaardig dit in 365 dae?',
          answer: `Die fabriek vervaardig ${pu('454 425')} items in 365 dae`,
          steps: [
            `Skryf die getalsin: 1 245 × 365 = ?`,
            `${bl('Vermenigvuldig met die eenhede-syfer (5):')} 1 245 × ${bl('5')} = ${bl('6 225')}. Skryf ${bl('6 225')} op die eerste ry.`,
            `${gr('Vermenigvuldig met die tiene-syfer (6):')} 1 245 × ${gr('6')} tiene — skryf eers ${re('0')} as plekhouer in die eenhede-kolom, vermenigvuldig dan: 1 245 × ${gr('60')} = ${gr('74 70')}${re('0')}. Skryf ${gr('74 70')}${re('0')} op die tweede ry.`,
            `${or('Vermenigvuldig met die honderde-syfer (3):')} 1 245 × ${or('3')} honderde — skryf eers ${re('00')} as twee nul-plekhouers in die eenhede- en tiene-kolomme, vermenigvuldig dan: 1 245 × ${or('300')} = ${or('373 5')}${re('00')}. Skryf ${or('373 5')}${re('00')} op die derde ry.`,
            `${pu('Tel al drie gedeeltelike produkte bymekaar:')} ${bl('6 225')} + ${gr('74 700')} + ${or('373 500')} = ${pu('454 425')} items. <strong>Antwoord:</strong> Die fabriek vervaardig ${pu('454 425')} items in 365 dae. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V7 Moeilik ──────────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Bereken 2 345 × 123.',
          answer: '288 435',
          checkMode: 'auto',
          correctAnswer: '288435',
          correctAnswers: ['288435', '288 435'],
          explanation: 'Stap 1 — Vermenigvuldig met eenhede-syfer (3): 2 345 × 3 = 7 035.\nStap 2 — Vermenigvuldig met tiene-syfer (2): skryf 0-plekhouer, dan 2 345 × 20 = 46 900.\nStap 3 — Vermenigvuldig met honderde-syfer (1): skryf 00-plekhouers, dan 2 345 × 100 = 234 500.\nStap 4 — Tel al die gedeeltelike produkte bymekaar: 7 035 + 46 900 + 234 500 = 288 435 ✓',
        },
      ],

      diagramPlaceholder:
        'Lang vermenigvuldiging-uitleg wat 2 345 vermenigvuldig met 123 toon met die eenhede-ry in blou wat 7 035 wys, die tiene-ry in groen met een rooi plekhouernul wat 46 900 wys, die honderde-ry in oranje met twee rooi plekhouernulle wat 234 500 wys, en die finale optelling in pers wat 288 435 gee',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 155" width="100%" style="max-width:280px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="180" y="20" text-anchor="end" font-size="16" font-weight="700" fill="#0f1f3d">2 345</text>` +
        `<text x="180" y="40" text-anchor="end" font-size="16" font-weight="700" fill="#0f1f3d">× 123</text>` +
        `<line x1="50" y1="48" x2="180" y2="48" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="8" y="66" font-size="9" font-weight="700" fill="#6b7280">×3</text>` +
        `<text x="180" y="66" text-anchor="end" font-size="14" font-weight="700" fill="#2563eb">7 035</text>` +
        `<text x="8" y="86" font-size="9" font-weight="700" fill="#6b7280">×20</text>` +
        `<text x="180" y="86" text-anchor="end" font-size="14" font-weight="700" fill="#16a34a">46 90<tspan fill="#dc2626">0</tspan></text>` +
        `<text x="8" y="106" font-size="9" font-weight="700" fill="#6b7280">×100</text>` +
        `<text x="180" y="106" text-anchor="end" font-size="14" font-weight="700" fill="#ea580c">234 5<tspan fill="#dc2626">00</tspan></text>` +
        `<line x1="30" y1="114" x2="180" y2="114" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="180" y="136" text-anchor="end" font-size="17" font-weight="700" fill="#7c3aed">288 435</text>` +
        `</svg>`,

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn groot getal met ʼn 3-syfergetal te vermenigvuldig deur lang vermenigvuldiging te gebruik, met kleurgekodeerde stappe vir eenhede in blou, tiene in groen, honderdes in oranje, plekhouernulle in rooi en die finale antwoord in pers" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — VEELVOUDE VAN 10, 100 EN 1 000
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiples-of-10-100-1000',
      title: 'Veelvoude van 10, 100 en 1 000',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">Daar is ʼn vinnige hoofrekenmetode om met 10, 100, 1 000, of enige <strong>veelvoud hiervan</strong> (soos 20, 30 of 400) te vermenigvuldig. Wanneer jy met 10 vermenigvuldig, ${or('voeg jy een nul')} by aan die einde van die getal. Wanneer jy met 100 vermenigvuldig, ${or('voeg jy twee nulle')} by. Wanneer jy met 1 000 vermenigvuldig, ${or('voeg jy drie nulle')} by. Vir veelvoude soos 20, 30 of 400 ${bl('vermenigvuldig jy eers met die nie-nul-syfer')} en ${or('voeg dan die nulle')} by. Dit is ʼn vinnige hoofrekenmetode wat tyd bespaar.</p>` +

        // ── Kleurgids ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('nulle bygevoeg')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('nie-nul-syfervermenigvuldiging')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── Reëls ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die reëls op ʼn oogopslag</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${or('× 10')} — ${or('Voeg een nul')} by aan die einde van die getal. bv. 456 × 10 = 4 56${or('0')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('× 100')} — ${or('Voeg twee nulle')} by aan die einde van die getal. bv. 456 × 100 = 45 6${or('00')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('× 1 000')} — ${or('Voeg drie nulle')} by aan die einde van die getal. bv. 456 × 1 000 = 456 ${or('000')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${bl('× veelvoude (20, 300, 4 000 …)')} — Vermenigvuldig eers ${bl('met die nie-nul-syfer')}, tel dan al die nulle in die veelvoud en ${or('voeg hulle')} by aan die einde van die resultaat.</p>` +
        `</div>` +

        `</div>` +

        // ── Wenkboks ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tel die nulle in die vermenigvuldiger</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer die vermenigvuldiger op nulle eindig (bv. 200 het ${or('twee nulle')}), ${bl('vermenigvuldig eers met die nie-nul-deel')}, en ${or('heg dan al die nulle')} aan die einde vas. As die getal wat vermenigvuldig word ook op nulle eindig, bly daardie nulle ook — tel en heg net al die nulle saam vas.</p>` +
        `</div>`,

      workedExamples: [
        // ── Voorbeeld 1: 3 456 × 1 000 = 3 456 000 ────────────────────────────
        {
          question: 'Bereken 3 456 × 1 000.',
          answer: `3 456 × 1 000 = ${gr('3 456 000')}`,
          steps: [
            `Om met 1 000 te vermenigvuldig beteken ${or('drie nulle')} aan die einde van die getal by te voeg.`,
            `3 456 × 1 000 = 3 456${or('000')}`,
            `<strong>Antwoord:</strong> 3 456 × 1 000 = ${gr('3 456 000')} ✓`,
          ],
        },

        // ── Voorbeeld 2: 245 × 300 = 73 500 ───────────────────────────────────
        {
          question: 'Bereken 245 × 300.',
          answer: `245 × 300 = ${gr('73 500')}`,
          steps: [
            `Breek 300 op in ${bl('3')} × ${or('100')}.`,
            `${bl('Vermenigvuldig 245 × 3')} = ${bl('735')}.`,
            `Vermenigvuldig dan met 100 — ${or('voeg twee nulle')} by: ${bl('735')} × ${or('100')} = ${bl('735')}${or('00')} = 73 500.`,
            `<strong>Antwoord:</strong> ${gr('73 500')} ✓`,
          ],
        },

        // ── Voorbeeld 3: Lerato — 4 500 × 200 = 900 000 ───────────────────────
        {
          question: 'Lerato moet 4 500 × 200 bereken.',
          answer: `4 500 × 200 = ${gr('900 000')}`,
          steps: [
            `Breek op in 45 × ${or('100')} × ${or('200')}. Of dink daaraan as ${bl('4 500 × 2')} × ${or('100')}.`,
            `${bl('4 500 × 2')} = ${bl('9 000')}.`,
            `${bl('9 000')} × ${or('100')} — ${or('voeg twee nulle')} by: ${bl('9 000')}${or('00')} = 900 000.`,
            `<strong>Antwoord:</strong> ${gr('900 000')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V8 Maklik ──────────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 345 × 100.',
          answer: '34 500',
          checkMode: 'auto',
          correctAnswer: '34500',
          correctAnswers: ['34500', '34 500'],
          explanation: 'Om met 100 te vermenigvuldig beteken twee nulle aan die einde van die getal by te voeg.\n345 × 100 = 34 500 ✓',
        },

        // ── V9 Medium ─────────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 4 500 × 300.',
          answer: '1 350 000',
          checkMode: 'auto',
          correctAnswer: '1350000',
          correctAnswers: ['1350000', '1 350 000'],
          explanation: 'Breek 300 op in 3 × 100.\nStap 1 — Vermenigvuldig met 3: 4 500 × 3 = 13 500.\nStap 2 — Vermenigvuldig met 100 (voeg twee nulle by): 13 500 × 100 = 1 350 000 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om met 10, 100 en 1 000 te vermenigvuldig deur oranje nulle by te voeg, en hoe om met veelvoude soos 20, 300 en 4 000 te vermenigvuldig deur eers die blou nie-nul-syfer te vermenigvuldig en dan al die oranje nulle by te voeg" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — SKAT EN PROBLEEMOPLOSSING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating-and-problem-solving',
      title: 'Skat en Probleemoplossing',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">Ons kan vermenigvuldigingsantwoorde skat deur getalle ${or('af te rond')} na die naaste geskikte waarde voordat ons vermenigvuldig. Dit help ons om te kontroleer of ons ${gr('presiese antwoord')} redelik is. Wanneer jy vermenigvuldiging-woordprobleme oplos, soek na ${re('sleutelwoorde')} soos ${re('elk')}, ${re('per')}, ${re('elke')}, ${re('maal')} en ${re('groepe van')}. Hierdie woorde sê vir ons om te vermenigvuldig. Skryf jou finale antwoord altyd met die korrekte eenheid.</p>` +

        // ── Kleurgids ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('afgeronde getalle')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('skatting')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('presiese antwoord')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('sleutelwoorde')}</span>` +
        `</div>` +

        // ── Hoe om te skat ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn vermenigvuldigingsantwoord te skat</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${or('Rond af')} — Rond elke getal af na die naaste 10, 100 of 1 000 om die berekening makliker te maak.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Skat')} — Vermenigvuldig die ${or('afgeronde getalle')} met mekaar. Dit is jou ${bl('skatting')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Kontroleer')} — Bereken die ${gr('presiese antwoord')} en vergelyk dit met jou ${bl('skatting')}. As hulle naby aan mekaar is, is jou ${gr('presiese antwoord')} redelik.</p>` +
        `</div>` +

        `</div>` +

        // ── Sleutelwoorde ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelwoorde vir vermenigvuldiging-woordprobleme</p>` +
        `<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:14px 16px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;">` +
        ['elk', 'per', 'elke', 'maal', 'groepe van'].map(w => `<span style="background:#fecaca;border-radius:6px;padding:3px 10px;font-size:14px;font-weight:700;color:#dc2626;">${w}</span>`).join('<span style="color:#9ca3af;font-size:1.1em;">·</span>') +
        `</div>` +

        // ── Wenkboks ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sluit altyd die eenheid by jou antwoord in</p>` +
        `<p style="margin:0;color:#1e3a8a;">Herlees na berekening die vraag en skryf jou finale antwoord met die korrekte eenheid — byvoorbeeld km, rand (R), of items. ʼn Getal sonder ʼn eenheid is ʼn onvolledige antwoord.</p>` +
        `</div>`,

      workedExamples: [
        // ── Voorbeeld 1: Skat 4 876 × 32 ───────────────────────────────────
        {
          question: 'Skat 4 876 × 32.',
          answer: `${bl('Skatting:')} ${or('5 000')} × ${or('30')} = ${bl('150 000')}`,
          steps: [
            `${or('Rond')} 4 876 af na ${or('5 000')}.`,
            `${or('Rond')} 32 af na ${or('30')}.`,
            `${bl('Skatting:')} ${or('5 000')} × ${or('30')} = ${bl('150 000')}.`,
            `Die ${gr('presiese antwoord')} behoort naby aan ${bl('150 000')} te wees.`,
          ],
        },

        // ── Voorbeeld 2: Skool koop 24 sakrekenaars teen R345 elk ───────────────
        {
          question: 'ʼn Skool koop 24 sakrekenaars teen R345 elk. Wat is die totale koste?',
          answer: `Die totale koste is ${gr('R8 280')}`,
          steps: [
            `${re('Sleutelwoord:')} <em>"elk"</em> — vermenigvuldig 345 × 24.`,
            `345 × 4 = ${bl('1 380')}.`,
            `345 × 20 = ${bl('6 900')}.`,
            `Tel bymekaar: ${bl('1 380')} + ${bl('6 900')} = ${gr('8 280')}. Die totale koste is ${gr('R8 280')}.`,
            `${bl('Skattingskontrole:')} ${or('300')} × ${or('25')} = ${bl('7 500')} — naby aan ${gr('R8 280')}, dus redelik. ✓`,
          ],
        },

        // ── Voorbeeld 3: Amahle ry 125 km elke dag vir 365 dae ───────────
        {
          question: 'Amahle ry 125 km elke dag vir 365 dae. Hoeveel kilometer ry sy in ʼn jaar?',
          answer: `Amahle ry ${gr('45 625 km')} in ʼn jaar`,
          steps: [
            `${re('Sleutelwoord:')} <em>"elke"</em> — vermenigvuldig 125 × 365.`,
            `125 × 5 = ${bl('625')}.`,
            `125 × 60 = ${bl('7 500')}.`,
            `125 × 300 = ${bl('37 500')}.`,
            `Tel bymekaar: ${bl('625')} + ${bl('7 500')} + ${bl('37 500')} = ${gr('45 625')} km. Amahle ry ${gr('45 625 km')} in ʼn jaar.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V10 Medium ────────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Skat 5 876 × 42 deur af te rond na die naaste duisend en tiental.',
          answer: '240 000',
          checkMode: 'auto',
          correctAnswer: '240000',
          correctAnswers: ['240000', '240 000'],
          explanation: 'Rond 5 876 af na die naaste duisend: 6 000.\nRond 42 af na die naaste tiental: 40.\nSkatting: 6 000 × 40 = 240 000 ✓',
        },

        // ── V11 Moeilik ──────────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Fabriek vervaardig 2 345 items per dag. Hoeveel items vervaardig dit in 28 dae?',
          answer: '65 660',
          checkMode: 'auto',
          correctAnswer: '65660',
          correctAnswers: ['65660', '65 660'],
          explanation: 'Stap 1 — Vermenigvuldig met eenhede-syfer (8): 2 345 × 8 = 18 760.\nStap 2 — Vermenigvuldig met tiene-syfer (2): skryf 0-plekhouer, dan 2 345 × 20 = 46 900.\nStap 3 — Tel die gedeeltelike produkte bymekaar: 18 760 + 46 900 = 65 660.\nDie fabriek vervaardig 65 660 items in 28 dae ✓',
        },

        // ── V12 Moeilik ──────────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato koop 365 bokse sap. Elke boks bevat 24 pakkies en elke pakkie kos R4. Wat is die totale koste?',
          answer: 'Vind eers die totale aantal pakkies: 365 × 24 = 8 760. Vind dan die totale koste: 8 760 × R4 = R35 040.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn vermenigvuldigingsantwoord te skat deur getalle in oranje af te rond en dan te vermenigvuldig om die skatting in blou te kry, en dit met die presiese antwoord in groen te vergelyk, gevolg deur twee woordprobleme opgelos deur sleutelwoorde in rooi te identifiseer" />',
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-4 Vermenigvuldig met 2-syfergetalle | 5-8 Vermenigvuldig met
    // 3-syfergetalle | 9-12 Veelvoude van 10/100/1000 | 13-15 Skat deur af te
    // rond | 16-19 Woordprobleme met sleutelwoorde
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // ── Blok: Vermenigvuldig met 2-syfergetalle (0-4) ────────────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken:\n2 143 × 13', correctAnswer: '27859', correctAnswers: ['27859', '27 859'], explanation: 'Stap 1 — Vermenigvuldig met eenhede-syfer (3): 2 143 × 3 = 6 429.\nStap 2 — Vermenigvuldig met tiene-syfer (1): skryf 0-plekhouer, dan 2 143 × 10 = 21 430.\nStap 3 — Tel die gedeeltelike produkte bymekaar: 6 429 + 21 430 = 27 859 ✓', answer: '27 859' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bepaal die produk van 3 245 en 24, en wys die eenhede-ry en tiene-ry afsonderlik.', correctAnswer: '77880', correctAnswers: ['77880', '77 880'], explanation: 'Stap 1 — Vermenigvuldig met eenhede-syfer (4): 3 245 × 4 = 12 980.\nStap 2 — Vermenigvuldig met tiene-syfer (2): skryf 0-plekhouer, dan 3 245 × 20 = 64 900.\nStap 3 — Tel die gedeeltelike produkte bymekaar: 12 980 + 64 900 = 77 880 ✓', answer: '77 880' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Zanele verdien R3 850 per week. Hoeveel verdien sy in 24 weke?', correctAnswer: '92400', correctAnswers: ['92400', '92 400', 'r92400', 'R92 400'], explanation: '"Per week" sê vir ons om te vermenigvuldig: 3 850 × 24.\nEenhede (4): 3 850 × 4 = 15 400.\nTiene (2): skryf 0-plekhouer, 3 850 × 20 = 77 000.\nTel bymekaar: 15 400 + 77 000 = 92 400.\nZanele verdien R92 400 in 24 weke.', answer: 'R92 400' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Aflewervoertuig ry elke dag 245 km. Hoe ver ry dit in 36 dae?', correctAnswer: '8820', correctAnswers: ['8820', '8 820'], explanation: '"Elke dag" sê vir ons om te vermenigvuldig: 245 × 36.\nEenhede (6): 245 × 6 = 1 470.\nTiene (3): skryf 0-plekhouer, 245 × 30 = 7 350.\nTel bymekaar: 1 470 + 7 350 = 8 820.\nDie voertuig ry 8 820 km in 36 dae.', answer: '8 820 km' },
        { difficulty: 'Hard', checkMode: 'self', question: 'ʼn Leerder werk 4 256 × 23 so uit:\n\n  4 256\n×    23\n———————\n 12 768   (4 256 × 3)\n  8 512   (4 256 × 2, geen plekhouer-nul geskryf nie)\n———————\n 21 280\n\nDie leerder gee 21 280 as die finale antwoord, maar dit is verkeerd. Vind die fout, verduidelik wat verkeerd gegaan het, en gee die korrekte antwoord.', answer: 'Die korrekte antwoord is 4 256 × 23 = 97 888.\n\nStap 1 — Eenhede-syfer (3): 4 256 × 3 = 12 768.\nStap 2 — Tiene-syfer (2): dit beteken 4 256 × 20, nie 4 256 × 2 nie. Die leerder het die plekhouer-nul vergeet, dus was hulle tweede ry tien keer te klein (8 512 in plaas van 85 120).\nKorrekte Stap 2: skryf ʼn 0-plekhouer in die eenhede-kolom, dan 4 256 × 20 = 85 120.\nStap 3 — Tel bymekaar: 12 768 + 85 120 = 97 888.\n\nDie leerder se fout was om die plekhouer-nul uit te laat toe hulle met die tiene-syfer vermenigvuldig het, wat die hele tiene-ry (en dus die finale antwoord) tien keer te klein gemaak het.\n\nKorrekte antwoord: 97 888' },

        // ── Blok: Vermenigvuldig met 3-syfergetalle (5-8) ────────────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Bereken:\n3 124 × 213', correctAnswer: '665412', correctAnswers: ['665412', '665 412'], explanation: 'Stap 1 — Eenhede-syfer (3): 3 124 × 3 = 9 372.\nStap 2 — Tiene-syfer (1): skryf 0-plekhouer, 3 124 × 10 = 31 240.\nStap 3 — Honderde-syfer (2): skryf 00-plekhouers, 3 124 × 200 = 624 800.\nStap 4 — Tel bymekaar: 9 372 + 31 240 + 624 800 = 665 412 ✓', answer: '665 412' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Fabriek vervaardig 1 850 blikkies verf elke dag. Hoeveel blikkies vervaardig dit in ʼn jaar van 365 dae?', correctAnswer: '675250', correctAnswers: ['675250', '675 250'], explanation: '"Elke dag" vir 365 dae sê vir ons om te vermenigvuldig: 1 850 × 365.\nEenhede (5): 1 850 × 5 = 9 250.\nTiene (6): skryf 0-plekhouer, 1 850 × 60 = 111 000.\nHonderde (3): skryf 00-plekhouers, 1 850 × 300 = 555 000.\nTel bymekaar: 9 250 + 111 000 + 555 000 = 675 250.\nDie fabriek vervaardig 675 250 blikkies in ʼn jaar.', answer: '675 250 blikkies' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'ʼn Pakhuis bestel elke week 245 kratte vir ʼn skoolkwartaal van 112 weke. Elke krat bevat 6 blikkies gom. Hoeveel blikkies gom word altesaam vir die kwartaal bestel?\n\nVind eers die totale aantal kratte, en vermenigvuldig dan met die blikkies per krat.', correctAnswer: '164640', correctAnswers: ['164640', '164 640'], explanation: 'Stap 1 — Totale kratte: 245 × 112 = 27 440 kratte.\nStap 2 — Totale blikkies: 27 440 × 6 = 164 640.\n\nWerk vir Stap 1 (245 × 112): eenhede (2) 245×2=490, tiene (1) 2 450, honderde (1) 24 500. Tel bymekaar: 490 + 2 450 + 24 500 = 27 440.\n\nDie pakhuis bestel 164 640 blikkies gom vir die kwartaal.', answer: '164 640 blikkies' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Watter een gee die groter produk: 3 245 × 124 of 3 198 × 128? Bereken albei en sê watter een groter is, en met hoeveel.', answer: '3 245 × 124 = 402 380\n(Eenhede 4: 3 245×4=12 980. Tiene 2: 3 245×20=64 900. Honderde 1: 3 245×100=324 500. Tel bymekaar: 12 980+64 900+324 500=402 380.)\n\n3 198 × 128 = 409 344\n(Eenhede 8: 3 198×8=25 584. Tiene 2: 3 198×20=63 960. Honderde 1: 3 198×100=319 800. Tel bymekaar: 25 584+63 960+319 800=409 344.)\n\n3 198 × 128 gee die groter produk. Dit is groter met 409 344 − 402 380 = 6 964.' },

        // ── Blok: Veelvoude van 10, 100 en 1 000 (9-12) ──────────────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken 456 × 10.', correctAnswer: '4560', correctAnswers: ['4560', '4 560'], explanation: 'Om met 10 te vermenigvuldig beteken een nul aan die einde van die getal by te voeg.\n456 × 10 = 4 560 ✓', answer: '4 560' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken 782 × 100.', correctAnswer: '78200', correctAnswers: ['78200', '78 200'], explanation: 'Om met 100 te vermenigvuldig beteken twee nulle aan die einde van die getal by te voeg.\n782 × 100 = 78 200 ✓', answer: '78 200' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Bereken 645 × 1 000.', correctAnswer: '645000', correctAnswers: ['645000', '645 000'], explanation: 'Om met 1 000 te vermenigvuldig beteken drie nulle aan die einde van die getal by te voeg.\n645 × 1 000 = 645 000 ✓', answer: '645 000' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Winkel koop 45 bokse skryfbehoeftes teen R300 elk. Wat is die totale koste?', correctAnswer: '13500', correctAnswers: ['13500', '13 500', 'r13500', 'R13 500'], explanation: 'Breek 300 op in 3 × 100.\nStap 1 — Vermenigvuldig met die nie-nul-syfer: 45 × 3 = 135.\nStap 2 — Heg die twee nulle van 100 aan: 135 × 100 = 13 500.\nDie totale koste is R13 500.', answer: 'R13 500' },

        // ── Blok: Skat deur af te rond (13-15) ────────────────────────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Skat 4 876 × 38 deur 4 876 af te rond na die naaste duisend en 38 na die naaste tiental.', correctAnswer: '200000', correctAnswers: ['200000', '200 000'], explanation: 'Rond 4 876 af na die naaste duisend: 5 000.\nRond 38 af na die naaste tiental: 40.\nSkatting: 5 000 × 40 = 200 000\n\n(Die presiese antwoord, 4 876 × 38 = 185 288, is redelik naby aan hierdie skatting.)', answer: '200 000' },
        { difficulty: 'Medium', checkMode: 'self', question: 'ʼn Leerder bereken 3 245 × 47 en kry 15 251. Gebruik afronding om die antwoord te skat, en gebruik jou skatting om te besluit of 15 251 redelik is. As dit nie is nie, gee die korrekte presiese antwoord.', answer: 'Skatting: rond 3 245 af na 3 000 en 47 na 50.\n3 000 × 50 = 150 000\n\nDie leerder se antwoord van 15 251 is ongeveer tien keer te klein in vergelyking met die skatting van 150 000 — dit is nie redelik nie. Dit lyk of die leerder ʼn syfer laat val het, of dalk die plekhouer-nul vergeet het toe hulle met die tiene-syfer vermenigvuldig het.\n\nDie korrekte presiese antwoord is 3 245 × 47 = 152 515 (Eenhede 7: 3 245×7=22 715. Tiene 4: 3 245×40=129 800. Tel bymekaar: 22 715+129 800=152 515), wat inderdaad naby aan die skatting van 150 000 is.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Voordat sy ʼn voorraadbestelling plaas, wil ʼn winkeleienares haar begroting nagaan. Sy benodig 89 pakkies gloeilampe teen ongeveer R312 elk. Sy het R27 000 begroot. Skat die totale koste deur af te rond, en sê of haar begroting waarskynlik genoeg is. Bereken dan die presiese koste om dit te bevestig.', answer: 'Skatting: rond 89 af na 90 en 312 na 300.\n90 × 300 = 27 000\n\nHierdie skatting stem presies ooreen met haar begroting van R27 000, so dit lyk of dit net-net genoeg mag wees — maar dit is die moeite werd om presies te bereken om seker te maak, aangesien die skatting net benaderd is.\n\nPresiese koste: 89 × 312 = 27 768\n(Eenhede 2: 89×2=178. Tiene 1: 89×10=890. Honderde 3: 89×300=26 700. Tel bymekaar: 178+890+26 700=27 768.)\n\nDie presiese koste van R27 768 is R768 meer as haar begroting van R27 000, dus is haar begroting NIE heeltemal genoeg nie — die skatting het naby gelyk, maar afronding van 312 na 300 het die tekort weggesteek.' },

        // ── Blok: Woordprobleme met sleutelwoorde en eenhede (16-19) ─────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Skryfbehoeftewinkel verkoop 18 sakrekenaars teen R67 elk. Wat is die totale bedrag geld verdien?', correctAnswer: '1206', correctAnswers: ['1206', '1 206', 'r1206', 'R1 206'], explanation: '"Elk" sê vir ons om te vermenigvuldig: 67 × 18.\nEenhede (8): 67 × 8 = 536.\nTiene (1): skryf 0-plekhouer, 67 × 10 = 670.\nTel bymekaar: 536 + 670 = 1 206.\nDie winkel verdien R1 206.', answer: 'R1 206' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'Thabo verdien R485 per week met deeltydse werk. Hy werk 26 weke gedurende die skoolvakansies saam. Hoeveel verdien hy altesaam?', correctAnswer: '12610', correctAnswers: ['12610', '12 610', 'r12610', 'R12 610'], explanation: '"Per week" vir 26 weke sê vir ons om te vermenigvuldig: 485 × 26.\nEenhede (6): 485 × 6 = 2 910.\nTiene (2): skryf 0-plekhouer, 485 × 20 = 9 700.\nTel bymekaar: 2 910 + 9 700 = 12 610.\nThabo verdien R12 610 altesaam.', answer: 'R12 610' },
        { difficulty: 'Hard', checkMode: 'self', question: 'ʼn Gemeenskapsaal kan 213 mense huisves, en dit is vir 48 geleenthede hierdie jaar volbespreek. Skat eers die totale aantal mense wat sal bywoon deur af te rond, en bereken dan die presiese totaal.', answer: 'Skatting: rond 213 af na 200 en 48 na 50.\n200 × 50 = 10 000 mense (skatting).\n\nPresies: 213 × 48 = 10 224\n(Eenhede 8: 213×8=1 704. Tiene 4: 213×40=8 520. Tel bymekaar: 1 704+8 520=10 224.)\n\nDie presiese totaal is 10 224 mense, wat naby aan die skatting van 10 000 is, dus is dit redelik.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Twee deeltydse werksgeleenthede is beskikbaar vir Naledi vir die skoolvakansie. Werk A betaal R350 per week vir 24 weke. Werk B betaal R430 per week vir 18 weke. Watter werk betaal altesaam meer, en met hoeveel?', answer: 'Werk A: 350 × 24 = 8 400\n(Eenhede 4: 350×4=1 400. Tiene 2: 350×20=7 000. Tel bymekaar: 1 400+7 000=8 400.)\n\nWerk B: 430 × 18 = 7 740\n(Eenhede 8: 430×8=3 440. Tiene 1: 430×10=4 300. Tel bymekaar: 3 440+4 300=7 740.)\n\nWerk A betaal altesaam meer. Dit betaal 8 400 − 7 740 = R660 meer as Werk B, al is Werk B se weeklikse tarief hoër — want Werk A duur meer weke.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het vermenigvuldiging met 2-syfer- en 3-syfergetalle, hoofrekenstrategieë, skatting en woordprobleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiuit as Stel 1, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // ── Blok: Vermenigvuldig met 2-syfergetalle (0-4) ────────────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken:\n4 127 × 16', correctAnswer: '66032', correctAnswers: ['66032', '66 032'], explanation: 'Stap 1 — Eenhede-syfer (6): 4 127 × 6 = 24 762.\nStap 2 — Tiene-syfer (1): skryf 0-plekhouer, 4 127 × 10 = 41 270.\nStap 3 — Tel bymekaar: 24 762 + 41 270 = 66 032 ✓', answer: '66 032' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bepaal die produk van 5 236 en 32, en skryf albei gedeeltelike produkte voor jy bymekaar tel.', correctAnswer: '167552', correctAnswers: ['167552', '167 552'], explanation: 'Stap 1 — Eenhede-syfer (2): 5 236 × 2 = 10 472.\nStap 2 — Tiene-syfer (3): skryf 0-plekhouer, 5 236 × 30 = 157 080.\nStap 3 — Tel bymekaar: 10 472 + 157 080 = 167 552 ✓', answer: '167 552' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Bongani verdien R2 650 per maand. Hoeveel verdien hy oor 18 maande?', correctAnswer: '47700', correctAnswers: ['47700', '47 700', 'r47700', 'R47 700'], explanation: '"Per maand" sê vir ons om te vermenigvuldig: 2 650 × 18.\nEenhede (8): 2 650 × 8 = 21 200.\nTiene (1): skryf 0-plekhouer, 2 650 × 10 = 26 500.\nTel bymekaar: 21 200 + 26 500 = 47 700.\nBongani verdien R47 700 oor 18 maande.', answer: 'R47 700' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Bakkery vervaardig 156 brode elke dag. Hoeveel brode vervaardig dit in 45 dae?', correctAnswer: '7020', correctAnswers: ['7020', '7 020'], explanation: '"Elke dag" sê vir ons om te vermenigvuldig: 156 × 45.\nEenhede (5): 156 × 5 = 780.\nTiene (4): skryf 0-plekhouer, 156 × 40 = 6 240.\nTel bymekaar: 780 + 6 240 = 7 020.\nDie bakkery vervaardig 7 020 brode in 45 dae.', answer: '7 020 brode' },
        { difficulty: 'Hard', checkMode: 'self', question: 'ʼn Leerder werk 3 187 × 29 so uit:\n\n  3 187\n×    29\n———————\n 28 683   (3 187 × 9)\n  6 374   (3 187 × 2, geen plekhouer-nul geskryf nie)\n———————\n 35 057\n\nDie leerder gee 35 057 as die finale antwoord, maar dit is verkeerd. Vind die fout, verduidelik wat verkeerd gegaan het, en gee die korrekte antwoord.', answer: 'Die korrekte antwoord is 3 187 × 29 = 92 423.\n\nStap 1 — Eenhede-syfer (9): 3 187 × 9 = 28 683.\nStap 2 — Tiene-syfer (2): dit beteken 3 187 × 20, nie 3 187 × 2 nie. Die leerder het die plekhouer-nul vergeet, dus was hulle tweede ry tien keer te klein (6 374 in plaas van 63 740).\nKorrekte Stap 2: skryf ʼn 0-plekhouer in die eenhede-kolom, dan 3 187 × 20 = 63 740.\nStap 3 — Tel bymekaar: 28 683 + 63 740 = 92 423.\n\nDie leerder se fout was om die plekhouer-nul uit te laat toe hulle met die tiene-syfer vermenigvuldig het.\n\nKorrekte antwoord: 92 423' },

        // ── Blok: Vermenigvuldig met 3-syfergetalle (5-8) ────────────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Bereken:\n2 456 × 318', correctAnswer: '781008', correctAnswers: ['781008', '781 008'], explanation: 'Stap 1 — Eenhede-syfer (8): 2 456 × 8 = 19 648.\nStap 2 — Tiene-syfer (1): skryf 0-plekhouer, 2 456 × 10 = 24 560.\nStap 3 — Honderde-syfer (3): skryf 00-plekhouers, 2 456 × 300 = 736 800.\nStap 4 — Tel bymekaar: 19 648 + 24 560 + 736 800 = 781 008 ✓', answer: '781 008' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Fabriek vervaardig 2 140 plastiekbottels elke dag. Hoeveel bottels vervaardig dit in ʼn jaar van 365 dae?', correctAnswer: '781100', correctAnswers: ['781100', '781 100'], explanation: '"Elke dag" vir 365 dae sê vir ons om te vermenigvuldig: 2 140 × 365.\nEenhede (5): 2 140 × 5 = 10 700.\nTiene (6): skryf 0-plekhouer, 2 140 × 60 = 128 400.\nHonderde (3): skryf 00-plekhouers, 2 140 × 300 = 642 000.\nTel bymekaar: 10 700 + 128 400 + 642 000 = 781 100.\nDie fabriek vervaardig 781 100 bottels in ʼn jaar.', answer: '781 100 bottels' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'ʼn Skryfbehoeftesverskaffer lewer 36 bokse penne vir ʼn skoolkwartaal. Elke boks bevat 24 pakkies, en elke pakkie kos R8. Wat is die totale koste vir die kwartaal?\n\nVind eers die totale aantal pakkies, en vermenigvuldig dan met die koste per pakkie.', correctAnswer: '6912', correctAnswers: ['6912', '6 912', 'r6912', 'R6 912'], explanation: 'Stap 1 — Totale pakkies: 36 × 24 = 864 pakkies.\nStap 2 — Totale koste: 864 × 8 = 6 912.\n\nWerk vir Stap 1 (36 × 24): eenhede (4) 36×4=144, tiene (2) 720. Tel bymekaar: 144 + 720 = 864.\n\nDie totale koste vir die kwartaal is R6 912.', answer: 'R6 912' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Watter een gee die groter produk: 4 123 × 216 of 4 056 × 219? Bereken albei en sê watter een groter is, en met hoeveel.', answer: '4 123 × 216 = 890 568\n(Eenhede 6: 4 123×6=24 738. Tiene 1: 4 123×10=41 230. Honderde 2: 4 123×200=824 600. Tel bymekaar: 24 738+41 230+824 600=890 568.)\n\n4 056 × 219 = 888 264\n(Eenhede 9: 4 056×9=36 504. Tiene 1: 4 056×10=40 560. Honderde 2: 4 056×200=811 200. Tel bymekaar: 36 504+40 560+811 200=888 264.)\n\n4 123 × 216 gee die groter produk. Dit is groter met 890 568 − 888 264 = 2 304.' },

        // ── Blok: Veelvoude van 10, 100 en 1 000 (9-12) ──────────────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken 389 × 10.', correctAnswer: '3890', correctAnswers: ['3890', '3 890'], explanation: 'Om met 10 te vermenigvuldig beteken een nul aan die einde van die getal by te voeg.\n389 × 10 = 3 890 ✓', answer: '3 890' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken 214 × 100.', correctAnswer: '21400', correctAnswers: ['21400', '21 400'], explanation: 'Om met 100 te vermenigvuldig beteken twee nulle aan die einde van die getal by te voeg.\n214 × 100 = 21 400 ✓', answer: '21 400' },
        { difficulty: 'Medium', checkMode: 'self', question: 'ʼn Leerder sê 528 × 100 = 5 280. Is die leerder korrek? Verduidelik, en gee die korrekte antwoord.', answer: 'Die leerder is NIE korrek nie.\n\nOm met 100 te vermenigvuldig beteken twee nulle aan die einde van die getal by te voeg, nie een nie. Die leerder het net een nul bygevoeg (en 5 280 gekry), wat eintlik 528 × 10 is, nie 528 × 100 nie.\n\nKorrekte antwoord: 528 × 100 = 52 800.' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Liefdadigheidsorganisasie herhaal dieselfde voedselpakket-skenking 28 keer, en elke rondte kos R4 000. Wat is die totale bedrag geskenk?', correctAnswer: '112000', correctAnswers: ['112000', '112 000', 'r112000', 'R112 000'], explanation: 'Breek 4 000 op in 4 × 1 000.\nStap 1 — Vermenigvuldig met die nie-nul-syfer: 28 × 4 = 112.\nStap 2 — Heg die drie nulle van 1 000 aan: 112 × 1 000 = 112 000.\nDie totale bedrag geskenk is R112 000.', answer: 'R112 000' },

        // ── Blok: Skat deur af te rond (13-15) ────────────────────────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Skat 6 234 × 53 deur 6 234 af te rond na die naaste duisend en 53 na die naaste tiental.', correctAnswer: '300000', correctAnswers: ['300000', '300 000'], explanation: 'Rond 6 234 af na die naaste duisend: 6 000.\nRond 53 af na die naaste tiental: 50.\nSkatting: 6 000 × 50 = 300 000\n\n(Die presiese antwoord, 6 234 × 53 = 330 402, is redelik naby aan hierdie skatting.)', answer: '300 000' },
        { difficulty: 'Medium', checkMode: 'self', question: 'ʼn Leerder bereken 2 876 × 34 en kry 9 778. Gebruik afronding om die antwoord te skat, en gebruik jou skatting om te besluit of 9 778 redelik is. As dit nie is nie, gee die korrekte presiese antwoord.', answer: 'Skatting: rond 2 876 af na 3 000 en 34 na 30.\n3 000 × 30 = 90 000\n\nDie leerder se antwoord van 9 778 is ongeveer tien keer te klein in vergelyking met die skatting van 90 000 — dit is nie redelik nie. Dit lyk of die leerder ʼn syfer laat val het, moontlik deur die plekhouer-nul te vergeet toe hulle met die tiene-syfer vermenigvuldig het.\n\nDie korrekte presiese antwoord is 2 876 × 34 = 97 784 (Eenhede 4: 2 876×4=11 504. Tiene 3: 2 876×30=86 280. Tel bymekaar: 11 504+86 280=97 784), wat naby aan die skatting van 90 000 is.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Voordat sy ʼn voorraadbestelling plaas, wil ʼn winkeleienares haar begroting nagaan. Sy benodig 412 pakkies skryfbehoeftes teen ongeveer R58 elk. Sy het R23 200 begroot. Skat die totale koste deur af te rond, en sê of haar begroting waarskynlik genoeg is. Bereken dan die presiese koste om dit te bevestig.', answer: 'Skatting: rond 412 af na 400 en 58 na 60.\n400 × 60 = 24 000\n\nHierdie skatting is reeds meer as haar begroting van R23 200, so dit lyk of haar begroting dalk nie heeltemal genoeg gaan wees nie — maar dit is die moeite werd om presies te bereken om seker te maak.\n\nPresiese koste: 412 × 58 = 23 896\n(Eenhede 8: 412×8=3 296. Tiene 5: 412×50=20 600. Tel bymekaar: 3 296+20 600=23 896.)\n\nDie presiese koste van R23 896 is R696 meer as haar begroting van R23 200, dus is haar begroting NIE heeltemal genoeg nie.' },

        // ── Blok: Woordprobleme met sleutelwoorde en eenhede (16-19) ─────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Sportwinkel verkoop 34 rugbyballe teen R89 elk. Wat is die totale bedrag geld verdien?', correctAnswer: '3026', correctAnswers: ['3026', '3 026', 'r3026', 'R3 026'], explanation: '"Elk" sê vir ons om te vermenigvuldig: 89 × 34.\nEenhede (4): 89 × 4 = 356.\nTiene (3): skryf 0-plekhouer, 89 × 30 = 2 670.\nTel bymekaar: 356 + 2 670 = 3 026.\nDie winkel verdien R3 026.', answer: 'R3 026' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'Palesa verdien R625 per week met deeltydse werk. Sy werk 22 weke gedurende die jaar. Hoeveel verdien sy altesaam?', correctAnswer: '13750', correctAnswers: ['13750', '13 750', 'r13750', 'R13 750'], explanation: '"Per week" vir 22 weke sê vir ons om te vermenigvuldig: 625 × 22.\nEenhede (2): 625 × 2 = 1 250.\nTiene (2): skryf 0-plekhouer, 625 × 20 = 12 500.\nTel bymekaar: 1 250 + 12 500 = 13 750.\nPalesa verdien R13 750 altesaam.', answer: 'R13 750' },
        { difficulty: 'Hard', checkMode: 'self', question: 'ʼn Minibus kan 324 passasiers oor die verloop van ʼn dag vervoer, en dit ry dieselfde roete vir 56 dae aaneen. Skat eers die totale aantal passasiers deur af te rond, en bereken dan die presiese totaal.', answer: 'Skatting: rond 324 af na 300 en 56 na 60.\n300 × 60 = 18 000 passasiers (skatting).\n\nPresies: 324 × 56 = 18 144\n(Eenhede 6: 324×6=1 944. Tiene 5: 324×50=16 200. Tel bymekaar: 1 944+16 200=18 144.)\n\nDie presiese totaal is 18 144 passasiers, wat naby aan die skatting van 18 000 is, dus is dit redelik.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Twee deeltydse werksgeleenthede is beskikbaar vir Kagiso vir die skoolvakansie. Werk A betaal R245 per week vir 32 weke. Werk B betaal R275 per week vir 28 weke. Watter werk betaal altesaam meer, en met hoeveel?', answer: 'Werk A: 245 × 32 = 7 840\n(Eenhede 2: 245×2=490. Tiene 3: 245×30=7 350. Tel bymekaar: 490+7 350=7 840.)\n\nWerk B: 275 × 28 = 7 700\n(Eenhede 8: 275×8=2 200. Tiene 2: 275×20=5 500. Tel bymekaar: 2 200+5 500=7 700.)\n\nWerk A betaal altesaam meer. Dit betaal 7 840 − 7 700 = R140 meer as Werk B, want Werk A duur meer weke al is sy weeklikse tarief effens laer.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het vermenigvuldiging met 2-syfer- en 3-syfergetalle, hoofrekenstrategieë, skatting en woordprobleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiuit as Stel 1/2, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // ── Blok: Vermenigvuldig met 2-syfergetalle (0-4) ────────────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken:\n1 256 × 17', correctAnswer: '21352', correctAnswers: ['21352', '21 352'], explanation: 'Stap 1 — Eenhede-syfer (7): 1 256 × 7 = 8 792.\nStap 2 — Tiene-syfer (1): skryf 0-plekhouer, 1 256 × 10 = 12 560.\nStap 3 — Tel bymekaar: 8 792 + 12 560 = 21 352 ✓', answer: '21 352' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bepaal die produk van 6 234 en 19, en wys die eenhede-ry en tiene-ry afsonderlik.', correctAnswer: '118446', correctAnswers: ['118446', '118 446'], explanation: 'Stap 1 — Eenhede-syfer (9): 6 234 × 9 = 56 106.\nStap 2 — Tiene-syfer (1): skryf 0-plekhouer, 6 234 × 10 = 62 340.\nStap 3 — Tel bymekaar: 56 106 + 62 340 = 118 446 ✓', answer: '118 446' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Ayanda verdien R4 125 per week. Hoeveel verdien sy in 36 weke?', correctAnswer: '148500', correctAnswers: ['148500', '148 500', 'r148500', 'R148 500'], explanation: '"Per week" sê vir ons om te vermenigvuldig: 4 125 × 36.\nEenhede (6): 4 125 × 6 = 24 750.\nTiene (3): skryf 0-plekhouer, 4 125 × 30 = 123 750.\nTel bymekaar: 24 750 + 123 750 = 148 500.\nAyanda verdien R148 500 in 36 weke.', answer: 'R148 500' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Meubelwerkswinkel vervaardig 328 stoele elke maand. Hoeveel stoele vervaardig dit in 67 maande?', correctAnswer: '21976', correctAnswers: ['21976', '21 976'], explanation: '"Elke maand" sê vir ons om te vermenigvuldig: 328 × 67.\nEenhede (7): 328 × 7 = 2 296.\nTiene (6): skryf 0-plekhouer, 328 × 60 = 19 680.\nTel bymekaar: 2 296 + 19 680 = 21 976.\nDie werkswinkel vervaardig 21 976 stoele in 67 maande.', answer: '21 976 stoele' },
        { difficulty: 'Hard', checkMode: 'self', question: 'ʼn Leerder werk 5 142 × 38 so uit:\n\n  5 142\n×    38\n———————\n 41 136   (5 142 × 8)\n 15 426   (5 142 × 3, geen plekhouer-nul geskryf nie)\n———————\n 56 562\n\nDie leerder gee 56 562 as die finale antwoord, maar dit is verkeerd. Vind die fout, verduidelik wat verkeerd gegaan het, en gee die korrekte antwoord.', answer: 'Die korrekte antwoord is 5 142 × 38 = 195 396.\n\nStap 1 — Eenhede-syfer (8): 5 142 × 8 = 41 136.\nStap 2 — Tiene-syfer (3): dit beteken 5 142 × 30, nie 5 142 × 3 nie. Die leerder het die plekhouer-nul vergeet, dus was hulle tweede ry tien keer te klein (15 426 in plaas van 154 260).\nKorrekte Stap 2: skryf ʼn 0-plekhouer in die eenhede-kolom, dan 5 142 × 30 = 154 260.\nStap 3 — Tel bymekaar: 41 136 + 154 260 = 195 396.\n\nDie leerder se fout was om die plekhouer-nul uit te laat toe hulle met die tiene-syfer vermenigvuldig het.\n\nKorrekte antwoord: 195 396' },

        // ── Blok: Vermenigvuldig met 3-syfergetalle (5-8) ────────────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Bereken:\n1 832 × 145', correctAnswer: '265640', correctAnswers: ['265640', '265 640'], explanation: 'Stap 1 — Eenhede-syfer (5): 1 832 × 5 = 9 160.\nStap 2 — Tiene-syfer (4): skryf 0-plekhouer, 1 832 × 40 = 73 280.\nStap 3 — Honderde-syfer (1): skryf 00-plekhouers, 1 832 × 100 = 183 200.\nStap 4 — Tel bymekaar: 9 160 + 73 280 + 183 200 = 265 640 ✓', answer: '265 640' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Fabriek vervaardig 3 260 gesigmaskers elke dag. Hoeveel gesigmaskers vervaardig dit in ʼn jaar van 365 dae?', correctAnswer: '1189900', correctAnswers: ['1189900', '1 189 900'], explanation: '"Elke dag" vir 365 dae sê vir ons om te vermenigvuldig: 3 260 × 365.\nEenhede (5): 3 260 × 5 = 16 300.\nTiene (6): skryf 0-plekhouer, 3 260 × 60 = 195 600.\nHonderde (3): skryf 00-plekhouers, 3 260 × 300 = 978 000.\nTel bymekaar: 16 300 + 195 600 + 978 000 = 1 189 900.\nDie fabriek vervaardig 1 189 900 gesigmaskers in ʼn jaar.', answer: '1 189 900 gesigmaskers' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'ʼn Snoepiewinkel bestel 42 kratte sap vir ʼn kwartaal van 26 weke. Elke krat bevat 15 blikkies. Hoeveel blikkies sap word altesaam vir die kwartaal bestel?\n\nVind eers die totale aantal kratte, en vermenigvuldig dan met die blikkies per krat.', correctAnswer: '16380', correctAnswers: ['16380', '16 380'], explanation: 'Stap 1 — Totale kratte: 42 × 26 = 1 092 kratte.\nStap 2 — Totale blikkies: 1 092 × 15 = 16 380.\n\nWerk vir Stap 1 (42 × 26): eenhede (6) 42×6=252, tiene (2) 840. Tel bymekaar: 252 + 840 = 1 092.\n\nDie snoepiewinkel bestel 16 380 blikkies sap vir die kwartaal.', answer: '16 380 blikkies' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Watter een gee die groter produk: 2 789 × 312 of 2 745 × 318? Bereken albei en sê watter een groter is, en met hoeveel.', answer: '2 789 × 312 = 870 168\n(Eenhede 2: 2 789×2=5 578. Tiene 1: 2 789×10=27 890. Honderde 3: 2 789×300=836 700. Tel bymekaar: 5 578+27 890+836 700=870 168.)\n\n2 745 × 318 = 872 910\n(Eenhede 8: 2 745×8=21 960. Tiene 1: 2 745×10=27 450. Honderde 3: 2 745×300=823 500. Tel bymekaar: 21 960+27 450+823 500=872 910.)\n\n2 745 × 318 gee die groter produk. Dit is groter met 872 910 − 870 168 = 2 742.' },

        // ── Blok: Veelvoude van 10, 100 en 1 000 (9-12) ──────────────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken 623 × 10.', correctAnswer: '6230', correctAnswers: ['6230', '6 230'], explanation: 'Om met 10 te vermenigvuldig beteken een nul aan die einde van die getal by te voeg.\n623 × 10 = 6 230 ✓', answer: '6 230' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken 918 × 100.', correctAnswer: '91800', correctAnswers: ['91800', '91 800'], explanation: 'Om met 100 te vermenigvuldig beteken twee nulle aan die einde van die getal by te voeg.\n918 × 100 = 91 800 ✓', answer: '91 800' },
        { difficulty: 'Medium', checkMode: 'self', question: 'ʼn Leerder sê 734 × 1 000 = 73 400. Is die leerder korrek? Verduidelik, en gee die korrekte antwoord.', answer: 'Die leerder is NIE korrek nie.\n\nOm met 1 000 te vermenigvuldig beteken drie nulle aan die einde van die getal by te voeg, nie twee nie. Die leerder het net twee nulle bygevoeg (en 73 400 gekry), wat eintlik 734 × 100 is, nie 734 × 1 000 nie.\n\nKorrekte antwoord: 734 × 1 000 = 734 000.' },
        { difficulty: 'Medium', checkMode: 'self', question: 'Waar of Onwaar: 356 × 1 000 gee dieselfde antwoord as 356 × 200 + 356 × 800. Verduidelik jou antwoord.', answer: 'Waar.\n\n356 × 1 000 = 356 000.\n\n356 × 200 = 71 200 en 356 × 800 = 284 800. Tel bymekaar: 71 200 + 284 800 = 356 000.\n\nAlbei metodes gee 356 000, want 200 + 800 = 1 000, dus is dit om die vermenigvuldiger in 200 en 800 op te breek en die twee produkte bymekaar te tel dieselfde as om direk met 1 000 te vermenigvuldig.' },

        // ── Blok: Skat deur af te rond (13-15) ────────────────────────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Skat 7 145 × 62 deur 7 145 af te rond na die naaste duisend en 62 na die naaste tiental.', correctAnswer: '420000', correctAnswers: ['420000', '420 000'], explanation: 'Rond 7 145 af na die naaste duisend: 7 000.\nRond 62 af na die naaste tiental: 60.\nSkatting: 7 000 × 60 = 420 000\n\n(Die presiese antwoord, 7 145 × 62 = 442 990, is redelik naby aan hierdie skatting.)', answer: '420 000' },
        { difficulty: 'Medium', checkMode: 'self', question: 'ʼn Leerder bereken 5 124 × 29 en kry 14 859. Gebruik afronding om die antwoord te skat, en gebruik jou skatting om te besluit of 14 859 redelik is. As dit nie is nie, gee die korrekte presiese antwoord.', answer: 'Skatting: rond 5 124 af na 5 000 en 29 na 30.\n5 000 × 30 = 150 000\n\nDie leerder se antwoord van 14 859 is ongeveer tien keer te klein in vergelyking met die skatting van 150 000 — dit is nie redelik nie. Dit lyk of die leerder ʼn syfer laat val het, moontlik deur die plekhouer-nul te vergeet toe hulle met die tiene-syfer vermenigvuldig het.\n\nDie korrekte presiese antwoord is 5 124 × 29 = 148 596 (Eenhede 9: 5 124×9=46 116. Tiene 2: 5 124×20=102 480. Tel bymekaar: 46 116+102 480=148 596), wat naby aan die skatting van 150 000 is.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'ʼn Leerder is by die skool vir ongeveer 24 ure per week oor die loop van die jaar, wat oor 365 dae strek. Skat 24 × 365 deur 24 af te rond na die naaste tiental en 365 na die naaste honderd, en verduidelik dan of die presiese waarde hoër of laer as jou skatting sal wees.', answer: 'Skatting: rond 24 af na 20 en 365 na 400.\n20 × 400 = 8 000\n\nDie presiese waarde is 24 × 365 = 8 760 (Eenhede 5: 24×5=120. Tiene 6: 24×60=1 440. Honderde 3: 24×300=7 200. Tel bymekaar: 120+1 440+7 200=8 760.)\n\nDie presiese antwoord (8 760) is hoër as die skatting (8 000). Dit maak sin omdat 24 afgerond is na 20 (ʼn afname), terwyl 365 afgerond is na 400 (ʼn toename) — die opwaartse afronding van 365 het meer bygevoeg as wat die afwaartse afronding van 24 weggeneem het, sodat die presiese antwoord effens hoër as die skatting uitkom.' },

        // ── Blok: Woordprobleme met sleutelwoorde en eenhede (16-19) ─────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Boekwinkel verkoop 27 romans teen R58 elk. Wat is die totale bedrag geld verdien?', correctAnswer: '1566', correctAnswers: ['1566', '1 566', 'r1566', 'R1 566'], explanation: '"Elk" sê vir ons om te vermenigvuldig: 58 × 27.\nEenhede (7): 58 × 7 = 406.\nTiene (2): skryf 0-plekhouer, 58 × 20 = 1 160.\nTel bymekaar: 406 + 1 160 = 1 566.\nDie boekwinkel verdien R1 566.', answer: 'R1 566' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'Sibongile verdien R715 per week met deeltydse werk. Sy werk 19 weke gedurende die jaar. Hoeveel verdien sy altesaam?', correctAnswer: '13585', correctAnswers: ['13585', '13 585', 'r13585', 'R13 585'], explanation: '"Per week" vir 19 weke sê vir ons om te vermenigvuldig: 715 × 19.\nEenhede (9): 715 × 9 = 6 435.\nTiene (1): skryf 0-plekhouer, 715 × 10 = 7 150.\nTel bymekaar: 6 435 + 7 150 = 13 585.\nSibongile verdien R13 585 altesaam.', answer: 'R13 585' },
        { difficulty: 'Hard', checkMode: 'self', question: 'ʼn Taxistaanplek bedien 178 pendelaars op ʼn gemiddelde dag, en hierdie patroon hou vir 63 dae aaneen stand. Skat eers die totale aantal pendelaars deur af te rond, en bereken dan die presiese totaal.', answer: 'Skatting: rond 178 af na 200 en 63 na 60.\n200 × 60 = 12 000 pendelaars (skatting).\n\nPresies: 178 × 63 = 11 214\n(Eenhede 3: 178×3=534. Tiene 6: 178×60=10 680. Tel bymekaar: 534+10 680=11 214.)\n\nDie presiese totaal is 11 214 pendelaars, wat redelik naby aan die skatting van 12 000 is, dus is dit redelik.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Twee deeltydse werksgeleenthede is beskikbaar vir Thandiwe vir die skoolvakansie. Werk A betaal R185 per week vir 45 weke. Werk B betaal R212 per week vir 38 weke. Watter werk betaal altesaam meer, en met hoeveel?', answer: 'Werk A: 185 × 45 = 8 325\n(Eenhede 5: 185×5=925. Tiene 4: 185×40=7 400. Tel bymekaar: 925+7 400=8 325.)\n\nWerk B: 212 × 38 = 8 056\n(Eenhede 8: 212×8=1 696. Tiene 3: 212×30=6 360. Tel bymekaar: 1 696+6 360=8 056.)\n\nWerk A betaal altesaam meer. Dit betaal 8 325 − 8 056 = R269 meer as Werk B, want Werk A duur meer weke al is sy weeklikse tarief laer.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het vermenigvuldiging met 2-syfer- en 3-syfergetalle, hoofrekenstrategieë, skatting en woordprobleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minScore: 12, message: 'Uitstekend! Jy het vermenigvuldiging bemeester.' },
      { minScore: 9, message: 'Goeie werk! Jy het ʼn sterk begrip van vermenigvuldiging.' },
      { minScore: 6, message: 'Goeie poging! Gaan die afdelings waar jy punte verloor het weer deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan probeer! Werk weer deur die studiegids en probeer nog ʼn slag.' },
    ],
  },
}
