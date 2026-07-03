import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (position and movement roles) ─────────────────────────────
// direction words  → blue   (#2563eb)
// grid positions   → orange (#ea580c)
// compass dirs     → green  (#16a34a)
// vertical axis    → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Posisie en Beweging',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — POSISIE BESKRYF
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'describing-position',
      title: 'Posisie Beskryf',
      icon: '🧭',
      explanation:
        `<p style="margin-bottom:16px;">Posisie vertel ons waar iets is. Ons gebruik woorde soos ${bl('links')}, ${bl('regs')}, ${bl('bo')}, ${bl('onder')}, ${bl('langsaan')}, ${bl('tussen')}, ${bl('voor')} en ${bl('agter')} om te beskryf waar iets is. Ons kan ook kompasrigtings gebruik — ${gr('Noord')}, ${gr('Suid')}, ${gr('Oos')} en ${gr('Wes')}. Op ʼn kaart is ${gr('Noord')} gewoonlik heel bo. Ons kan posisie beskryf deur rye en kolomme op ʼn rooster te gebruik — die kolom word eerste gegee en dan die ry.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('rigtingwoorde')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('roosterposisies')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kompasrigtings')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Rigtingwoorde</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Woorde wat vir ons vertel waar iets is in verhouding tot iets anders: ${bl('links')}, ${bl('regs')}, ${bl('bo')}, ${bl('onder')}, ${bl('langsaan')}, ${bl('tussen')}, ${bl('voor')}, ${bl('agter')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Kompasrigtings</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Noord')}, ${gr('Suid')}, ${gr('Oos')} en ${gr('Wes')} gee ons presiese rigtings op ʼn kaart. ${gr('Noord')} is altyd heel bo op die kaart.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Roosterposisies</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Ons skryf ʼn roosterposisie as ${or('(kolom, ry)')} — die kolomgetal word altyd eerste geskryf, en dan die rygetal.</p>` +
        `</div>` +

        `</div>` +

        // ── Compass rose ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Kompasroos</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;">` +
        `<div style="display:grid;grid-template-columns:auto auto auto;grid-template-rows:auto auto auto;gap:8px;text-align:center;font-weight:700;font-size:1.05em;">` +
        `<div></div><div style="color:#16a34a;">${gr('Noord ↑')}</div><div></div>` +
        `<div style="color:#16a34a;">${gr('← Wes')}</div><div style="color:#374151;">✛</div><div style="color:#16a34a;">${gr('Oos →')}</div>` +
        `<div></div><div style="color:#16a34a;">${gr('↓ Suid')}</div><div></div>` +
        `</div>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Onthou: kolom eerste, dan ry</p>` +
        `<p style="margin:0;color:#9a3412;">Wanneer jy ʼn roosterposisie lees of skryf, gee altyd eers die ${or('kolom')}-getal en dan die ${or('ry')}-getal — net soos wanneer jy ʼn bladsy dwarsoor lees voordat jy op of af gaan. Byvoorbeeld, ${or('(2, 3)')} beteken kolom 2, ry 3.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho sit in ry 3, kolom 2 van sy klaskamer. Beskryf sy posisie.',
          answer: `Sipho is by roosterposisie ${or('(2, 3)')} — ${or('kolom 2')} van links en ${or('ry 3')} van voor`,
          steps: [
            `${or('Kolom')} vertel ons hoe ver dwars oor. ${or('Ry')} vertel ons hoe ver op of af.`,
            `Sipho is in die ${or('2de kolom')} van links en die ${or('3de ry')} van voor.`,
            `Ons skryf die kolom eerste en die ry tweede: sy posisie is ${or('(2, 3)')}.`,
          ],
        },
        {
          question: 'Op ʼn kaart is die biblioteek Noord van die skool en die park is Oos van die skool. As Lerato by die skool is, in watter rigting moet sy loop om by die biblioteek te kom?',
          answer: `Lerato moet ${gr('Noord')} loop`,
          steps: [
            `${gr('Noord')} is heel bo op die kaart.`,
            `Die biblioteek is ${gr('Noord')} van die skool.`,
            `Lerato moet ${gr('Noord')} loop om by die biblioteek te kom.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Grid showing columns and rows with a position marked at column 2 row 3 and a compass rose showing North South East West" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to describe position using direction words grid coordinates and compass directions" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — ROOSTERS LEES EN TEKEN
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-and-drawing-grids',
      title: 'Roosters Lees en Teken',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Rooster is ʼn patroon van ${bl('horisontale')} en ${re('vertikale')} lyne wat rye en kolomme vorm. Ons gebruik roosters om posisies presies te vind. Die ${bl('horisontale as')} loop links en regs en word gewoonlik met getalle of letters gemerk. Die ${re('vertikale as')} loop op en af. Wanneer ons ʼn roosterposisie gee, gee ons altyd eers die ${bl('horisontale')} posisie en dan die ${re('vertikale')} posisie — net soos wanneer jy ʼn boek lees, gaan ons eers dwars oor voordat ons op gaan.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('horisontaal')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('vertikaal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('roosterposisies')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Horisontale as</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${bl('horisontale as')} loop ${bl('links en regs')}. Dit word gewoonlik met getalle of letters gemerk en vertel ons hoe ver ${bl('dwars oor')} ʼn posisie is.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Vertikale as</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${re('vertikale as')} loop ${re('op en af')}. Dit vertel ons hoe ver ${re('op')} ʼn posisie vanaf die onderkant is.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Roosterposisie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn ${or('Roosterposisie')} word geskryf as ${or('(oor, op)')} — die ${bl('horisontale')} getal kom altyd eerste en die ${re('vertikale')} getal kom tweede.</p>` +
        `</div>` +

        `</div>` +

        // ── Across before up visual ───────────────────────────────────────────
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:120px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Stap 1</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${bl('Gaan dwars oor →')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">dan</div>` +
        `<div style="text-align:center;min-width:120px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Stap 2</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${re('Gaan op ↑')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">⟶</div>` +
        `<div style="text-align:center;min-width:120px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Posisie</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('(oor, op)')}</p>` +
        `</div>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Eers oor, dan op — altyd</p>` +
        `<p style="margin:0;color:#1e3a8a;">Dink daaraan soos lees: jy gaan altyd eers ${bl('dwars oor')} die bladsy voordat jy ${re('op')} gaan. In ${or('(3, 4)')} vertel die ${bl('3')} jou om ${bl('3 oor')} te beweeg en die ${re('4')} vertel jou om ${re('4 op')} te beweeg.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Op ʼn rooster plaas Amahle ʼn ster by posisie (3, 4). Waar is die ster?',
          answer: `Die ster is by die snypunt van ${bl('kolom 3')} en ${re('ry 4')} — ${or('posisie (3, 4)')}`,
          steps: [
            `Die eerste getal ${bl('3')} vertel ons om ${bl('3 oor')} vanaf links te beweeg.`,
            `Die tweede getal ${re('4')} vertel ons om ${re('4 op')} vanaf die onderkant te beweeg.`,
            `Vind eers ${bl('kolom 3')}, en beweeg dan ${re('op')} na ${re('ry 4')}.`,
            `Die ster is by die snypunt van ${bl('kolom 3')} en ${re('ry 4')} — ons skryf dit as ${or('(3, 4)')}.`,
          ],
        },
        {
          question: 'Thabo merk hierdie posisies op ʼn rooster — (1, 2), (2, 2), (3, 2). Wat merk jy op?',
          answer: `Die drie punte vorm ʼn ${bl('horisontale reguit lyn')} oor ${re('ry 2')}`,
          steps: [
            `Al drie posisies het dieselfde tweede getal — ${re('2')}. Die tweede getal is die ${re('vertikale')} waarde.`,
            `Dit beteken hulle is almal in ${re('ry 2')} — hulle is almal dieselfde hoogte ${re('op')}.`,
            `Hulle is in ${bl('kolomme 1, 2 en 3')} — hulle versprei oor drie verskillende ${bl('horisontale')} posisies.`,
            `Die drie punte vorm ʼn ${bl('horisontale reguit lyn')} oor ${re('ry 2')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Grid showing horizontal axis labelled 1 to 5 and vertical axis labelled 1 to 5 with a star marked at position (3, 4) and three dots forming a horizontal line at row 2" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read and plot positions on a grid by going across first then up with examples at (3, 4) and a horizontal line at row 2" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — BEWEGING EN RIGTING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'movement-and-direction',
      title: 'Beweging en Rigting',
      icon: '➡️',
      explanation:
        `<p style="margin-bottom:16px;">Beweging beskryf hoe iets van een posisie na ʼn ander beweeg. Ons kan beweging beskryf deur ${bl('rigting')} en afstand te gebruik — byvoorbeeld ${bl('3 tree na regs')} of ${bl('2 blokke Noord')}. Op ʼn rooster kan ons ${bl('horisontaal')} (${bl('links')} of ${bl('regs')}) of ${bl('vertikaal')} (${bl('op')} of ${bl('af')}) beweeg. Wanneer jy rigtings volg, begin altyd by die gegewe posisie en beweeg een stap op ʼn slag.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('rigtingwoorde')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('beginposisie')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('eindposisie')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Rigting</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Ons gebruik ${bl('rigtingwoorde')} om te beskryf in watter rigting om te beweeg: ${bl('links')}, ${bl('regs')}, ${bl('op')}, ${bl('af')}, ${bl('Noord')}, ${bl('Suid')}, ${bl('Oos')}, ${bl('Wes')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Beginposisie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${or('beginposisie')} is waar ons begin. Ons pas altyd ons bewegings hiervandaan toe.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Eindposisie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${gr('eindposisie')} is waar ons uitkom nadat al die bewegings voltooi is.</p>` +
        `</div>` +

        `</div>` +

        // ── Horizontal and vertical movement ─────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Horisontale en vertikale beweging</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Horisontale beweging</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Beweging na ${bl('links')} of ${bl('regs')} verander die <strong>horisontale posisie</strong>.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:4px;">${bl('Regs')}: <strong>tel by</strong> die horisontale getal.</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${bl('Links')}: <strong>trek af</strong> van die horisontale getal.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Vertikale beweging</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Beweging na ${bl('op')} of ${bl('af')} verander die <strong>vertikale posisie</strong>.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:4px;">${bl('Op')} / ${bl('Noord')}: <strong>tel by</strong> die vertikale getal.</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${bl('Af')} / ${bl('Suid')}: <strong>trek af</strong> van die vertikale getal.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Een stap op ʼn slag</p>` +
        `<p style="margin:0;color:#1e3a8a;">Begin altyd by die ${or('gegewe posisie')} en pas elke beweging apart toe. Voltooi eers die ${bl('horisontale')} beweging, dan die ${bl('vertikale')} beweging — of volg die volgorde wat in die vraag gegee word.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho begin by posisie (2, 1) op ʼn rooster. Hy beweeg 3 tree na regs en 2 tree op. Waar kom hy uit?',
          answer: `Sipho eindig by posisie ${gr('(5, 3)')}`,
          steps: [
            `Begin by ${or('(2, 1)')}.`,
            `Beweeg ${bl('3 tree na regs')} — ${bl('regs')} beteken tel 3 by die horisontale posisie: 2 + 3 = 5. Nou by (5, 1).`,
            `Beweeg ${bl('2 tree op')} — ${bl('op')} beteken tel 2 by die vertikale posisie: 1 + 2 = 3.`,
            `Sipho eindig by posisie ${gr('(5, 3)')}.`,
          ],
        },
        {
          question: 'Lerato loop van die winkel na haar huis. Sy loop 4 blokke Oos en dan 2 blokke Noord. As die winkel by (1, 1) is, waar is haar huis?',
          answer: `Haar huis is by ${gr('(5, 3)')}`,
          steps: [
            `Begin by ${or('(1, 1)')}.`,
            `Loop ${bl('4 blokke Oos')} — ${bl('Oos')} beteken ${bl('regs')}, so tel 4 by die horisontale posisie: 1 + 4 = 5. Nou by (5, 1).`,
            `Loop ${bl('2 blokke Noord')} — ${bl('Noord')} beteken ${bl('op')}, so tel 2 by die vertikale posisie: 1 + 2 = 3.`,
            `Haar huis is by ${gr('(5, 3)')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Grid showing a path from starting position (2, 1) moving 3 steps right then 2 steps up to ending position (5, 3) with arrows and colour coded steps" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to follow movement instructions on a grid using horizontal and vertical steps with compass direction examples" />',
    },
  ],
  topicPractice: [
    // ── V1 Maklik — lees ʼn roosterposisie ──────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Volgens die rooster hierbo, by watter posisie is die Skool?',
      answer: '(4,1)',
      checkMode: 'auto',
      correctAnswer: '(4,1)',
      correctAnswers: ['(4,1)', '4,1', '(4, 1)', '4, 1'],
      explanation: 'Die Skool is gemerk by kolom 4, ry 1 — ons skryf die kolom eerste en die ry tweede, so die posisie is (4,1).',
    },

    // ── V2 Maklik — identifiseer ʼn landmerk deur posisie ────────────────────
    {
      difficulty: 'Easy',
      question: 'Wat is by posisie (1,4) op die rooster?',
      answer: 'Park',
      checkMode: 'auto',
      correctAnswer: 'Park',
      explanation: 'Kolom 1, ry 4 is waar die Park op die rooster gemerk is.',
    },

    // ── V3 Medium — tel tree na regs ────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Hoeveel tree na regs beweeg jy om van die Huis na die Skool te kom?',
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
      explanation: 'Die Huis is by (1,1) en die Skool is by (4,1). Hulle is in dieselfde ry, so ons beweeg net na regs. 4 − 1 = 3 tree na regs.',
    },

    // ── V4 Medium — tel tree op ───────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Hoeveel tree op beweeg jy om van die Skool na die Biblioteek te kom?',
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
      explanation: 'Die Skool is by (4,1) en die Biblioteek is by (4,4). Hulle is in dieselfde kolom, so ons beweeg net op. 4 − 1 = 3 tree op.',
    },

    // ── V5 Medium — kompasrigting-beweging ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho loop van die Huis na die Park. Hoeveel tree Noord loop hy?',
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
      explanation: 'Die Huis is by (1,1) en die Park is by (1,4). Hulle is in dieselfde kolom (kolom 1). Noord beteken op, so Sipho loop 4 − 1 = 3 tree Noord.',
    },

    // ── V6 Moeilik — beskryf ʼn roete ───────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato loop van die Huis na die Biblioteek. Sy mag slegs regs of op beweeg. Beskryf haar roete deur tree te gebruik.',
      answer: 'Beweeg 3 tree na regs van (1,1) na (4,1) en dan 3 tree op van (4,1) na (4,4).',
      checkMode: 'self',
    },

    // ── V7 Moeilik — kortste roete ─────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Wat is die kortste roete van die Park na die Winkel in tree?',
      answer: 'Beweeg 2 tree na regs en 2 tree af van (1,4) om by (3,2) uit te kom.',
      checkMode: 'self',
    },

    // ── V8 Moeilik — pas beweging toe om ʼn posisie te vind ──────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle begin by die Biblioteek en loop 3 tree Suid en 1 tree links. Waar kom sy uit?',
      answer: '(3,1)',
      checkMode: 'auto',
      correctAnswer: '(3,1)',
      correctAnswers: ['(3,1)', '3,1', '(3, 1)', '3, 1'],
      explanation: 'Begin by Biblioteek (4,4). Suid beteken af: 4 − 3 = 1, so nou by (4,1). Links beteken trek af van die horisontale: 4 − 1 = 3. Finale posisie is (3,1).',
    },

    // ── V9 Moeilik — vergelyk afstande ──────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Watter twee landmerke is dieselfde afstand uitmekaar as die Huis en die Skool?',
      answer: 'Die Skool en Biblioteek is ook 3 tree uitmekaar — albei pare is 3 tree van mekaar af.',
      checkMode: 'self',
    },
  ],

  scoreMessages: [
    { minScore: 5, message: 'Uitstekend! ʼn Volpunt-telling — jy het posisie beskryf heeltemal baasgeraak. Hou so aan!' },
    { minScore: 4, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van posisie en beweging. Gaan enige gemiste dele na en jy sal dit perfek hê.' },
    { minScore: 3, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdeling waar jy punte laat val het en probeer weer.' },
    { minScore: 1, message: 'Goeie poging! Werk deur die studiegids en uitgewerkte voorbeelde, en probeer dan weer.' },
    { minScore: 0, message: 'Moenie tou opgooi nie — elke kenner was eers ʼn beginner! Kyk weer na die verduidelikings en uitgewerkte voorbeelde, en probeer dan weer.' },
  ],
}
