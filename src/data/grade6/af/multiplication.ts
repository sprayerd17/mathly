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
        '<DiagramPlaceholder label="Long multiplication layout showing 3 456 multiplied by 24 with the units row in blue showing 13 824 the tens row in green with orange placeholder zero showing 69 120 and the final addition in red giving 82 944" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to multiply a large number by a 2-digit number using long multiplication with colour coded steps for units blue tens green placeholder zero orange and final addition red" />',
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
        '<DiagramPlaceholder label="Long multiplication layout showing 2 345 multiplied by 123 with the units row in blue showing 7 035 the tens row in green with one red placeholder zero showing 46 900 the hundreds row in orange with two red placeholder zeros showing 234 500 and the final addition in purple giving 288 435" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to multiply a large number by a 3-digit number using long multiplication with colour coded steps for units blue tens green hundreds orange placeholder zeros red and final answer purple" />',
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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three rows showing number times 10 with one orange zero appended, number times 100 with two orange zeros appended, and number times 1 000 with three orange zeros appended, plus a fourth row showing a multiple like 300 split into blue non-zero digit 3 times orange 100 with two zeros added" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to multiply by 10 100 and 1 000 by adding orange zeros and how to multiply by multiples like 20 300 and 4 000 by first multiplying the blue non-zero digit then adding all orange zeros" />',
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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three worked examples side by side: first showing 4 876 rounded in orange to 5 000 and 32 rounded in orange to 30 with blue estimate of 150 000, second showing 345 times 24 with partial products 1 380 and 6 900 in blue adding to exact answer in green R8 280 and estimate check 300 times 25 equals 7 500 in blue, third showing 125 times 365 split into three rows with partial products in blue adding to exact answer in green 45 625 km" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to estimate a multiplication answer by rounding numbers in orange then multiplying to get the estimate in blue and comparing to the exact answer in green, followed by two word problems solved by identifying key words in red" />',
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
