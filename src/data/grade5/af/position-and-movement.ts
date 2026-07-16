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

// ─── Gedeelde verwysingsrooster-diagram (hergebruik oor alle diagram-gemerkte oefenvrae) ──
// Huis (1,1), Skool (4,1), Biblioteek (4,4), Park (1,4), Winkel (3,2)
const GRID_SVG = '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Buurt-rooster</text><line x1="40" y1="30" x2="40" y2="150" stroke="#9ca3af" stroke-width="1"/><line x1="90" y1="30" x2="90" y2="150" stroke="#9ca3af" stroke-width="1"/><line x1="140" y1="30" x2="140" y2="150" stroke="#9ca3af" stroke-width="1"/><line x1="190" y1="30" x2="190" y2="150" stroke="#9ca3af" stroke-width="1"/><line x1="40" y1="150" x2="190" y2="150" stroke="#9ca3af" stroke-width="1"/><line x1="40" y1="115" x2="190" y2="115" stroke="#9ca3af" stroke-width="1"/><line x1="40" y1="80" x2="190" y2="80" stroke="#9ca3af" stroke-width="1"/><line x1="40" y1="45" x2="190" y2="45" stroke="#9ca3af" stroke-width="1"/><line x1="40" y1="30" x2="40" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="150" x2="190" y2="150" stroke="#0f1f3d" stroke-width="2"/><text x="40" y="167" font-size="12" fill="#374151" text-anchor="middle">1</text><text x="90" y="167" font-size="12" fill="#374151" text-anchor="middle">2</text><text x="140" y="167" font-size="12" fill="#374151" text-anchor="middle">3</text><text x="190" y="167" font-size="12" fill="#374151" text-anchor="middle">4</text><text x="110" y="182" font-size="11" fill="#374151" text-anchor="middle">kolom</text><text x="28" y="154" font-size="12" fill="#374151" text-anchor="end">1</text><text x="28" y="119" font-size="12" fill="#374151" text-anchor="end">2</text><text x="28" y="84" font-size="12" fill="#374151" text-anchor="end">3</text><text x="28" y="49" font-size="12" fill="#374151" text-anchor="end">4</text><text x="12" y="90" font-size="11" fill="#374151" text-anchor="middle" transform="rotate(-90 12 90)">ry</text><circle cx="40" cy="150" r="5" fill="#2563eb"/><text x="46" y="146" font-size="13" fill="#2563eb" font-weight="700">Huis</text><circle cx="190" cy="150" r="5" fill="#2563eb"/><text x="184" y="146" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">Skool</text><circle cx="190" cy="45" r="5" fill="#2563eb"/><text x="184" y="41" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">Biblioteek</text><circle cx="40" cy="45" r="5" fill="#2563eb"/><text x="46" y="41" font-size="13" fill="#2563eb" font-weight="700">Park</text><circle cx="140" cy="115" r="5" fill="#ea580c"/><text x="146" y="111" font-size="13" fill="#ea580c" font-weight="700">Winkel</text></svg>'

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
        'Rooster wat kolomme en rye wys met ʼn posisie gemerk by kolom 2 ry 3 en ʼn kompasroos wat Noord Suid Oos Wes wys',

      diagramSvg:
        '<svg viewBox="0 0 230 190" xmlns="http://www.w3.org/2000/svg"><text x="85" y="14" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Roosterposisie (2, 3)</text><line x1="30" y1="30" x2="30" y2="150" stroke="#9ca3af" stroke-width="1"/><line x1="70" y1="30" x2="70" y2="150" stroke="#9ca3af" stroke-width="1"/><line x1="110" y1="30" x2="110" y2="150" stroke="#9ca3af" stroke-width="1"/><line x1="150" y1="30" x2="150" y2="150" stroke="#9ca3af" stroke-width="1"/><line x1="30" y1="150" x2="150" y2="150" stroke="#9ca3af" stroke-width="1"/><line x1="30" y1="110" x2="150" y2="110" stroke="#9ca3af" stroke-width="1"/><line x1="30" y1="70" x2="150" y2="70" stroke="#9ca3af" stroke-width="1"/><line x1="30" y1="30" x2="150" y2="30" stroke="#9ca3af" stroke-width="1"/><line x1="30" y1="30" x2="30" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="150" x2="150" y2="150" stroke="#0f1f3d" stroke-width="2"/><text x="30" y="164" font-size="11" fill="#374151" text-anchor="middle">1</text><text x="70" y="164" font-size="11" fill="#374151" text-anchor="middle">2</text><text x="110" y="164" font-size="11" fill="#374151" text-anchor="middle">3</text><text x="150" y="164" font-size="11" fill="#374151" text-anchor="middle">4</text><text x="90" y="180" font-size="10" fill="#374151" text-anchor="middle">kolom</text><text x="22" y="154" font-size="11" fill="#374151" text-anchor="end">1</text><text x="22" y="114" font-size="11" fill="#374151" text-anchor="end">2</text><text x="22" y="74" font-size="11" fill="#374151" text-anchor="end">3</text><text x="22" y="34" font-size="11" fill="#374151" text-anchor="end">4</text><text x="10" y="90" font-size="10" fill="#374151" text-anchor="middle" transform="rotate(-90 10 90)">ry</text><circle cx="70" cy="70" r="6" fill="#ea580c" stroke="#0f1f3d" stroke-width="1.5"/><text x="78" y="66" font-size="11" fill="#ea580c" font-weight="700">(2, 3)</text><line x1="185" y1="55" x2="185" y2="125" stroke="#16a34a" stroke-width="1.8"/><line x1="160" y1="90" x2="210" y2="90" stroke="#16a34a" stroke-width="1.8"/><path d="M 185,48 L 180,58 L 190,58 Z" fill="#16a34a"/><path d="M 185,132 L 180,122 L 190,122 Z" fill="#16a34a"/><path d="M 213,90 L 205,85 L 205,95 Z" fill="#16a34a"/><path d="M 157,90 L 165,85 L 165,95 Z" fill="#16a34a"/><circle cx="185" cy="90" r="2" fill="#0f1f3d"/><text x="185" y="42" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">N</text><text x="185" y="146" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">S</text><text x="219" y="94" font-size="11" fill="#16a34a" font-weight="700" text-anchor="start">O</text><text x="151" y="94" font-size="11" fill="#16a34a" font-weight="700" text-anchor="end">W</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om posisie te beskryf deur rigtingwoorde, roosterkoördinate en kompasrigtings te gebruik" />',
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
        'Rooster wat die horisontale as geëtiketteer 1 tot 5 en die vertikale as geëtiketteer 1 tot 5 wys, met ʼn ster gemerk by posisie (3, 4) en drie kolle wat ʼn horisontale lyn by ry 2 vorm',

      diagramSvg:
        '<svg viewBox="0 0 210 200" xmlns="http://www.w3.org/2000/svg"><text x="100" y="14" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Rooster: Ster by (3, 4)</text><line x1="28" y1="26" x2="28" y2="170" stroke="#9ca3af" stroke-width="1"/><line x1="64" y1="26" x2="64" y2="170" stroke="#9ca3af" stroke-width="1"/><line x1="100" y1="26" x2="100" y2="170" stroke="#9ca3af" stroke-width="1"/><line x1="136" y1="26" x2="136" y2="170" stroke="#9ca3af" stroke-width="1"/><line x1="172" y1="26" x2="172" y2="170" stroke="#9ca3af" stroke-width="1"/><line x1="28" y1="170" x2="172" y2="170" stroke="#9ca3af" stroke-width="1"/><line x1="28" y1="134" x2="172" y2="134" stroke="#9ca3af" stroke-width="1"/><line x1="28" y1="98" x2="172" y2="98" stroke="#9ca3af" stroke-width="1"/><line x1="28" y1="62" x2="172" y2="62" stroke="#9ca3af" stroke-width="1"/><line x1="28" y1="26" x2="172" y2="26" stroke="#9ca3af" stroke-width="1"/><line x1="28" y1="26" x2="28" y2="170" stroke="#2563eb" stroke-width="2"/><line x1="28" y1="170" x2="172" y2="170" stroke="#2563eb" stroke-width="2"/><text x="28" y="184" font-size="10" fill="#374151" text-anchor="middle">1</text><text x="64" y="184" font-size="10" fill="#374151" text-anchor="middle">2</text><text x="100" y="184" font-size="10" fill="#374151" text-anchor="middle">3</text><text x="136" y="184" font-size="10" fill="#374151" text-anchor="middle">4</text><text x="172" y="184" font-size="10" fill="#374151" text-anchor="middle">5</text><text x="100" y="197" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">horisontale as</text><text x="20" y="174" font-size="10" fill="#374151" text-anchor="end">1</text><text x="20" y="138" font-size="10" fill="#374151" text-anchor="end">2</text><text x="20" y="102" font-size="10" fill="#374151" text-anchor="end">3</text><text x="20" y="66" font-size="10" fill="#374151" text-anchor="end">4</text><text x="20" y="30" font-size="10" fill="#374151" text-anchor="end">5</text><text x="8" y="98" font-size="9.5" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 8 98)">vertikale as</text><line x1="28" y1="134" x2="100" y2="134" stroke="#dc2626" stroke-width="2.5"/><circle cx="28" cy="134" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="64" cy="134" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="100" cy="134" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="64" y="150" font-size="9" fill="#dc2626" font-weight="700" text-anchor="middle">dieselfde ry (ry 2)</text><text x="100" y="70" font-size="20" fill="#ea580c" text-anchor="middle">&#9733;</text><text x="110" y="66" font-size="10" fill="#ea580c" font-weight="700" text-anchor="start">(3, 4)</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om posisies op ʼn rooster te lees en te plot deur eers oor te gaan en dan op te gaan, met voorbeelde by (3, 4) en ʼn horisontale lyn by ry 2" />',
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
        'Rooster wat ʼn pad wys vanaf beginposisie (2, 1) wat 3 stappe regs dan 2 stappe op beweeg na eindposisie (5, 3) met pyle en kleurgekodeerde stappe',

      diagramSvg:
        '<svg viewBox="0 0 210 200" xmlns="http://www.w3.org/2000/svg"><text x="100" y="14" font-size="11.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Pad: (2, 1) &#8594; (5, 3)</text><line x1="28" y1="26" x2="28" y2="170" stroke="#9ca3af" stroke-width="1"/><line x1="56" y1="26" x2="56" y2="170" stroke="#9ca3af" stroke-width="1"/><line x1="84" y1="26" x2="84" y2="170" stroke="#9ca3af" stroke-width="1"/><line x1="112" y1="26" x2="112" y2="170" stroke="#9ca3af" stroke-width="1"/><line x1="140" y1="26" x2="140" y2="170" stroke="#9ca3af" stroke-width="1"/><line x1="168" y1="26" x2="168" y2="170" stroke="#9ca3af" stroke-width="1"/><line x1="28" y1="170" x2="168" y2="170" stroke="#9ca3af" stroke-width="1"/><line x1="28" y1="130" x2="168" y2="130" stroke="#9ca3af" stroke-width="1"/><line x1="28" y1="90" x2="168" y2="90" stroke="#9ca3af" stroke-width="1"/><line x1="28" y1="50" x2="168" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="28" y1="26" x2="28" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="28" y1="170" x2="168" y2="170" stroke="#0f1f3d" stroke-width="2"/><text x="28" y="184" font-size="9" fill="#374151" text-anchor="middle">1</text><text x="56" y="184" font-size="9" fill="#374151" text-anchor="middle">2</text><text x="84" y="184" font-size="9" fill="#374151" text-anchor="middle">3</text><text x="112" y="184" font-size="9" fill="#374151" text-anchor="middle">4</text><text x="140" y="184" font-size="9" fill="#374151" text-anchor="middle">5</text><text x="168" y="184" font-size="9" fill="#374151" text-anchor="middle">6</text><text x="20" y="174" font-size="9" fill="#374151" text-anchor="end">1</text><text x="20" y="134" font-size="9" fill="#374151" text-anchor="end">2</text><text x="20" y="94" font-size="9" fill="#374151" text-anchor="end">3</text><text x="20" y="54" font-size="9" fill="#374151" text-anchor="end">4</text><line x1="56" y1="170" x2="136" y2="170" stroke="#2563eb" stroke-width="2.5"/><path d="M 140,170 L 132,165.5 L 132,174.5 Z" fill="#2563eb"/><text x="96" y="182" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">3 regs</text><line x1="140" y1="170" x2="140" y2="94" stroke="#2563eb" stroke-width="2.5"/><path d="M 140,90 L 135.5,98 L 144.5,98 Z" fill="#2563eb"/><text x="152" y="130" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="start">2 op</text><circle cx="56" cy="170" r="6" fill="#ea580c" stroke="#0f1f3d" stroke-width="1.5"/><text x="56" y="158" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="middle">Begin (2, 1)</text><circle cx="140" cy="90" r="6" fill="#16a34a" stroke="#0f1f3d" stroke-width="1.5"/><text x="140" y="78" font-size="9.5" fill="#16a34a" font-weight="700" text-anchor="middle">Einde (5, 3)</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om bewegingsinstruksies op ʼn rooster te volg deur horisontale en vertikale stappe te gebruik met kompasrigting-voorbeelde" />',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Posisies en koördinate lees | 4-6 Kompasrigtings |
    // 7-10 Tel tree tussen roosterposisies | 11-14 Pas beweging toe | 15-17 Beskryf/vergelyk
    // roetes | 18-19 Multi-stap redenering & foutopsporing
    // Gedeelde rooster: Huis (1,1), Skool (4,1), Biblioteek (4,4), Park (1,4), Winkel (3,2)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Volgens die rooster hierbo, wat is die roosterposisie van die Winkel, geskryf as (kolom, ry)?', checkMode: 'auto', correctAnswer: '(3,2)', correctAnswers: ['(3,2)', '3,2', '(3, 2)', '3, 2'], explanation: 'Die Winkel is gemerk by kolom 3, ry 2 op die rooster. Ons skryf die kolom eerste en die ry tweede, so die posisie is (3,2).', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Watter landmerk word by posisie (4,4) op die rooster gevind?', checkMode: 'auto', correctAnswer: 'Biblioteek', correctAnswers: ['Biblioteek', 'biblioteek'], explanation: 'Kolom 4, ry 4 is waar die Biblioteek op die rooster gemerk is.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Die Huis is by (1,1) en die Park is by (1,4). Volgens die rooster hierbo, is die Park bo of onder die Huis?', checkMode: 'auto', correctAnswer: 'Bo', correctAnswers: ['bo'], explanation: 'Die Park het ʼn hoër rygetal (4) as die Huis (ry 1), en rygetalle neem toe soos jy op die rooster beweeg, so die Park is bo die Huis.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Volgens die rooster hierbo, watter landmerk is direk langsaan die Biblioteek in dieselfde ry — die Winkel of die Park?', checkMode: 'auto', correctAnswer: 'Park', correctAnswers: ['park', 'die park'], explanation: 'Die Biblioteek is by (4,4) en die Park is by (1,4) — hulle deel ry 4. Die Winkel is by (3,2), wat in ʼn ander ry as die Biblioteek is. Dus is die Park die landmerk wat die Biblioteek se ry deel.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'As jy by die Huis (1,1) staan en na die Winkel (3,2) kyk, is die Winkel aan jou linkerkant of jou regterkant?', checkMode: 'auto', correctAnswer: 'Regterkant', correctAnswers: ['regterkant', 'regs', 'aan jou regterkant'], explanation: 'Die Winkel is by kolom 3, wat verder oor is as die Huis se kolom 1, so die Winkel is aan die regterkant van die Huis.' },
        { difficulty: 'Easy', question: 'Noord is die kompasrigting wat na die bokant van die rooster wys. Volgens die rooster hierbo, is die Biblioteek Noord of Suid van die Skool?', checkMode: 'auto', correctAnswer: 'Noord', correctAnswers: ['noord'], explanation: 'Die Skool is by (4,1) en die Biblioteek is by (4,4) — dieselfde kolom, maar die Biblioteek het ʼn hoër rygetal, wat beteken dit is verder op die rooster. Op die rooster is Noord, so die Biblioteek is Noord van die Skool.' },
        { difficulty: 'Easy', question: 'Wat is die teenoorgestelde kompasrigting van Wes?', checkMode: 'auto', correctAnswer: 'Oos', correctAnswers: ['oos'], explanation: 'Noord en Suid is teenoorgesteldes, en Oos en Wes is teenoorgesteldes. Die teenoorgestelde van Wes is Oos.' },
        { difficulty: 'Easy', question: 'Thabo staan by die Skool en weet die Park is Wes van die Huis. As Thabo Wes van die Skool af loop, word die roosterkolomgetal waarheen hy beweeg kleiner of groter?', checkMode: 'auto', correctAnswer: 'Kleiner', correctAnswers: ['kleiner', 'ʼn kleiner een'], explanation: 'Wes beteken na links beweeg op die rooster, wat na kleiner kolomgetalle beweeg. Loop Wes vanaf die Skool (kolom 4) beweeg Thabo na kleiner kolomgetalle, soos kolom 1 waar die Huis en Park is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Volgens die rooster hierbo, hoeveel tree na regs is die Skool van die Huis?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 tree'], explanation: 'Die Huis is by (1,1) en die Skool is by (4,1) — dieselfde ry, so ons tel net horisontale tree. 4 − 1 = 3 tree na regs.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Die Biblioteek is by (4,4) en die Skool is by (4,1). Volgens die rooster hierbo, hoeveel tree op skei hierdie twee landmerke?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 tree'], explanation: 'Die Biblioteek en Skool deel kolom 4, so ons tel net vertikale tree. 4 − 1 = 3 tree op.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Amahle sê die Huis en die Park is 4 tree uitmekaar omdat "die rygetalle 1 en 4 is". Volgens die rooster hierbo, is Amahle korrek?', checkMode: 'self', answer: 'Amahle is nie korrek nie. Die Huis is by (1,1) en die Park is by (1,4), en albei is in kolom 1, so ons vind die afstand deur die rygetalle van mekaar af te trek, nie deur een van die rygetalle direk as die antwoord te gebruik nie. Die korrekte berekening is 4 − 1 = 3 tree, nie 4 nie. Amahle het een van die rygetalle verwar met die totale aantal tree tussen die twee posisies.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Volgens die rooster hierbo, hoeveel tree in totaal (regs plus op) sou jy trek om van die Winkel by (3,2) na die Biblioteek by (4,4) te beweeg, deur net regs en op te beweeg?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 tree'], explanation: 'Van (3,2) na (4,4): horisontale tree = 4 − 3 = 1, vertikale tree = 4 − 2 = 2. Totale tree = 1 + 2 = 3.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'ʼn Afleweringsrobot moet van die Huis by (1,1) na die Skool by (4,1) reis en dan verder na die Biblioteek by (4,4). Volgens die rooster hierbo, wat is die totale aantal tree vir die hele reis?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 tree'], explanation: 'Huis na Skool: 4 − 1 = 3 tree regs. Skool na Biblioteek: 4 − 1 = 3 tree op. Totaal: 3 + 3 = 6 tree.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Volgens die rooster hierbo, watter paar landmerke is presies 4 tree uitmekaar in totaal: die Winkel en die Park, of die Winkel en die Skool?', checkMode: 'auto', correctAnswer: 'Die Winkel en die Park', correctAnswers: ['winkel en park', 'die winkel en die park'], explanation: 'Winkel (3,2) na Park (1,4): horisontaal = 3 − 1 = 2, vertikaal = 4 − 2 = 2, totaal = 4 tree. Winkel (3,2) na Skool (4,1): horisontaal = 4 − 3 = 1, vertikaal = 2 − 1 = 1, totaal = 2 tree. Dus is die Winkel en Park die paar wat 4 tree uitmekaar is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Begin by die Huis (1,1) op die rooster hierbo, beweeg 3 tree regs en 3 tree op. Op watter landmerk beland jy?', checkMode: 'auto', correctAnswer: 'Biblioteek', correctAnswers: ['Biblioteek', 'biblioteek'], explanation: '3 tree regs vanaf kolom 1: 1 + 3 = 4. 3 tree op vanaf ry 1: 1 + 3 = 4. Dit beland by (4,4), wat die Biblioteek is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Sipho begin by die Park (1,4) en loop 2 tree regs en 2 tree af. Volgens die rooster hierbo, by watter roosterposisie kom hy uit?', checkMode: 'auto', correctAnswer: '(3,2)', correctAnswers: ['(3,2)', '3,2', '(3, 2)', '3, 2'], explanation: '2 tree regs vanaf kolom 1: 1 + 2 = 3. 2 tree af vanaf ry 4: 4 − 2 = 2. Sipho kom uit by (3,2), wat die Winkel is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Lerato begin by die Skool (4,1) en loop 3 tree Wes. Volgens die rooster hierbo, by watter roosterposisie kom sy uit?', checkMode: 'auto', correctAnswer: '(1,1)', correctAnswers: ['(1,1)', '1,1', '(1, 1)', '1, 1'], explanation: 'Wes beteken na links beweeg, wat die kolomgetal verminder. 3 tree Wes vanaf kolom 4: 4 − 3 = 1. Die ry bly by 1. Lerato kom uit by (1,1), wat die Huis is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'ʼn Afleweringsvoertuig begin by die Huis (1,1), ry 3 blokke Oos na die Skool, dan 3 blokke Noord na die Biblioteek. As dit nou 1 blok verder Suid ry, waar kom dit uit op die rooster hierbo?', checkMode: 'auto', correctAnswer: '(4,3)', correctAnswers: ['(4,3)', '4,3', '(4, 3)', '4, 3'], explanation: 'Huis (1,1) → Oos 3 blokke → Skool (4,1) → Noord 3 blokke → Biblioteek (4,4). Suid 1 blok vanaf (4,4): ry 4 − 1 = 3. Finale posisie is (4,3).', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'Beskryf ʼn roete van die Huis (1,1) na die Winkel (3,2) op die rooster hierbo deur net regs- en op-tree te gebruik.', checkMode: 'self', answer: 'Beweeg 2 tree regs vanaf (1,1) na (3,1), dan 1 tree op vanaf (3,1) na (3,2). Dit gebruik slegs regs- en op-bewegings en dek 2 + 1 = 3 tree in totaal, wat ooreenstem met die horisontale en vertikale afstande tussen die Huis en die Winkel.' },
        { difficulty: 'Hard', question: 'Vergelyk die roete van die Huis na die Skool met die roete van die Huis na die Biblioteek, albei deur net regs- en op-tree te gebruik. Watter roete is langer, en met hoeveel tree, volgens die rooster hierbo?', checkMode: 'self', answer: 'Huis na Skool (1,1) na (4,1) neem 3 tree regs en 0 tree op, dus 3 tree in totaal. Huis na Biblioteek (1,1) na (4,4) neem 3 tree regs en 3 tree op, dus 6 tree in totaal. Die roete na die Biblioteek is langer, met 6 − 3 = 3 tree.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het roosterposisies lees, kompasrigtings, tree tel, bewegingsinstruksies volg en roetes beskryf baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou so aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklayout as Stel 1, vars bewoording/konteks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Volgens die rooster hierbo, skryf die roosterposisie van die Huis as (kolom, ry).', checkMode: 'auto', correctAnswer: '(1,1)', correctAnswers: ['(1,1)', '1,1', '(1, 1)', '1, 1'], explanation: 'Die Huis is gemerk by kolom 1, ry 1 op die rooster. Ons skryf die kolom eerste en die ry tweede, so die posisie is (1,1).', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Watter landmerk is by roosterposisie (4,1) op die rooster hierbo?', checkMode: 'auto', correctAnswer: 'Skool', correctAnswers: ['Skool', 'skool'], explanation: 'Kolom 4, ry 1 is waar die Skool op die rooster gemerk is.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Die Winkel is by (3,2) en die Biblioteek is by (4,4). Volgens die rooster hierbo, is die Biblioteek voor of agter die Winkel, gegewe dat ʼn hoër rygetal verder agter op die rooster beteken?', checkMode: 'auto', correctAnswer: 'Agter', correctAnswers: ['agter'], explanation: 'Die Biblioteek het ʼn hoër rygetal (4) as die Winkel (ry 2). Aangesien ʼn hoër rygetal verder agter op die rooster beteken, is die Biblioteek agter die Winkel.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Volgens die rooster hierbo, watter landmerk is direk langsaan die Skool in dieselfde ry — die Huis of die Biblioteek?', checkMode: 'auto', correctAnswer: 'Huis', correctAnswers: ['huis', 'die huis'], explanation: 'Die Skool is by (4,1) en die Huis is by (1,1) — hulle deel ry 1. Die Biblioteek is by (4,4), wat in ʼn ander ry as die Skool is. Dus is die Huis die landmerk wat die Skool se ry deel.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'As jy by die Biblioteek (4,4) staan en na die Winkel (3,2) kyk, is die Winkel aan jou linkerkant of jou regterkant?', checkMode: 'auto', correctAnswer: 'Linkerkant', correctAnswers: ['linkerkant', 'links', 'aan jou linkerkant'], explanation: 'Die Winkel is by kolom 3, wat ʼn kleiner kolomgetal is as die Biblioteek se kolom 4, so die Winkel is aan die linkerkant van die Biblioteek.' },
        { difficulty: 'Easy', question: 'Volgens die rooster hierbo, is die Huis Suid of Noord van die Park?', checkMode: 'auto', correctAnswer: 'Suid', correctAnswers: ['suid'], explanation: 'Die Huis is by (1,1) en die Park is by (1,4) — dieselfde kolom, maar die Huis het ʼn laer rygetal, wat beteken dit is verder onder op die rooster. Onder op die rooster is Suid, so die Huis is Suid van die Park.' },
        { difficulty: 'Easy', question: 'Wat is die teenoorgestelde kompasrigting van Suid?', checkMode: 'auto', correctAnswer: 'Noord', correctAnswers: ['noord'], explanation: 'Noord en Suid is teenoorgestelde kompasrigtings, en Oos en Wes is teenoorgestelde kompasrigtings. Die teenoorgestelde van Suid is Noord.' },
        { difficulty: 'Easy', question: 'Zanele weet die Skool is Oos van die Huis op die rooster hierbo. As sy Oos van die Huis af loop, word die roosterkolomgetal waarheen sy beweeg kleiner of groter?', checkMode: 'auto', correctAnswer: 'Groter', correctAnswers: ['groter', 'ʼn groter een'], explanation: 'Oos beteken na regs beweeg op die rooster, wat na groter kolomgetalle beweeg. Loop Oos vanaf die Huis (kolom 1) beweeg Zanele na groter kolomgetalle, soos kolom 4 waar die Skool is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Volgens die rooster hierbo, hoeveel tree op is die Biblioteek van die Winkel?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2 tree'], explanation: 'Die Winkel is by (3,2) en die Biblioteek is by (4,4). As ons net na die vertikale afstand kyk: 4 − 2 = 2 tree op.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Die Park is by (1,4) en die Huis is by (1,1). Volgens die rooster hierbo, hoeveel tree af skei hierdie twee landmerke?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 tree'], explanation: 'Die Park en Huis deel kolom 1, so ons tel net vertikale tree. 4 − 1 = 3 tree (afwaarts vanaf die Park na die Huis).', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Kagiso sê die Winkel en die Skool is 3 tree uitmekaar omdat "3 die Winkel se kolomgetal is". Volgens die rooster hierbo, is Kagiso korrek?', checkMode: 'self', answer: 'Kagiso is nie korrek nie. Die Winkel is by (3,2) en die Skool is by (4,1). Die afstand word gevind deur albei roosterposisies te vergelyk: horisontale verskil = 4 − 3 = 1, vertikale verskil = 2 − 1 = 1, so die totale afstand is 1 + 1 = 2 tree, nie 3 nie. Kagiso het die Winkel se kolomgetal verwar met die werklike afstand tussen die twee landmerke — jy moet altyd die twee posisies vergelyk, nie net een koördinaat aflees nie.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Volgens die rooster hierbo, hoeveel tree in totaal (regs plus op) sou jy trek om van die Huis by (1,1) na die Winkel by (3,2) te beweeg, deur net regs en op te beweeg?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 tree'], explanation: 'Van (1,1) na (3,2): horisontale tree = 3 − 1 = 2, vertikale tree = 2 − 1 = 1. Totale tree = 2 + 1 = 3.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'ʼn Koerier moet van die Park by (1,4) na die Winkel by (3,2) reis en dan verder na die Skool by (4,1). Volgens die rooster hierbo, wat is die totale aantal tree vir die hele reis?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 tree'], explanation: 'Park na Winkel: horisontaal = 3 − 1 = 2, vertikaal = 4 − 2 = 2, dus 4 tree. Winkel na Skool: horisontaal = 4 − 3 = 1, vertikaal = 2 − 1 = 1, dus 2 tree. Totaal: 4 + 2 = 6 tree.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Volgens die rooster hierbo, watter paar landmerke is presies 6 tree uitmekaar in totaal: die Huis en die Biblioteek, of die Park en die Skool?', checkMode: 'auto', correctAnswer: 'Albei pare', correctAnswers: ['albei', 'albei pare', 'albei is 6 tree uitmekaar'], explanation: 'Huis (1,1) na Biblioteek (4,4): horisontaal = 4 − 1 = 3, vertikaal = 4 − 1 = 3, totaal = 6 tree. Park (1,4) na Skool (4,1): horisontaal = 4 − 1 = 3, vertikaal = 4 − 1 = 3, totaal = 6 tree. Albei pare is presies 6 tree uitmekaar.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Begin by die Park (1,4) op die rooster hierbo, beweeg 3 tree regs en 3 tree af. Op watter landmerk beland jy?', checkMode: 'auto', correctAnswer: 'Skool', correctAnswers: ['Skool', 'skool'], explanation: '3 tree regs vanaf kolom 1: 1 + 3 = 4. 3 tree af vanaf ry 4: 4 − 3 = 1. Dit beland by (4,1), wat die Skool is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Amahle begin by die Biblioteek (4,4) en loop 1 tree links en 2 tree af. Volgens die rooster hierbo, by watter roosterposisie kom sy uit?', checkMode: 'auto', correctAnswer: '(3,2)', correctAnswers: ['(3,2)', '3,2', '(3, 2)', '3, 2'], explanation: '1 tree links vanaf kolom 4: 4 − 1 = 3. 2 tree af vanaf ry 4: 4 − 2 = 2. Amahle kom uit by (3,2), wat die Winkel is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Thabo begin by die Huis (1,1) en loop 3 tree Noord. Volgens die rooster hierbo, by watter roosterposisie kom hy uit?', checkMode: 'auto', correctAnswer: '(1,4)', correctAnswers: ['(1,4)', '1,4', '(1, 4)', '1, 4'], explanation: 'Noord beteken na op beweeg, wat die rygetal vermeerder. 3 tree Noord vanaf ry 1: 1 + 3 = 4. Die kolom bly by 1. Thabo kom uit by (1,4), wat die Park is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'ʼn Fietsryer begin by die Park (1,4), ry 3 blokke Suid na die Huis, dan 3 blokke Oos na die Skool. As sy nou 1 blok verder Noord ry, waar kom sy uit op die rooster hierbo?', checkMode: 'auto', correctAnswer: '(4,2)', correctAnswers: ['(4,2)', '4,2', '(4, 2)', '4, 2'], explanation: 'Park (1,4) → Suid 3 blokke → Huis (1,1) → Oos 3 blokke → Skool (4,1). Noord 1 blok vanaf (4,1): ry 1 + 1 = 2. Finale posisie is (4,2).', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'Beskryf ʼn roete van die Winkel (3,2) na die Biblioteek (4,4) op die rooster hierbo deur net regs- en op-tree te gebruik.', checkMode: 'self', answer: 'Beweeg 1 tree regs vanaf (3,2) na (4,2), dan 2 tree op vanaf (4,2) na (4,4). Dit gebruik slegs regs- en op-bewegings en dek 1 + 2 = 3 tree in totaal, wat ooreenstem met die horisontale en vertikale afstande tussen die Winkel en die Biblioteek.' },
        { difficulty: 'Hard', question: 'Vergelyk die roete van die Park na die Huis met die roete van die Park na die Skool, albei deur net regs- en af-tree te gebruik. Watter roete is korter, en met hoeveel tree, volgens die rooster hierbo?', checkMode: 'self', answer: 'Park na Huis (1,4) na (1,1) neem 0 tree regs en 3 tree af, dus 3 tree in totaal. Park na Skool (1,4) na (4,1) neem 3 tree regs en 3 tree af, dus 6 tree in totaal. Die roete na die Huis is korter, met 6 − 3 = 3 tree.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het roosterposisies lees, kompasrigtings, tree tel, bewegingsinstruksies volg en roetes beskryf baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou so aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklayout as Stel 1/2, vars bewoording/konteks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Volgens die rooster hierbo, skryf die roosterposisie van die Biblioteek as (kolom, ry).', checkMode: 'auto', correctAnswer: '(4,4)', correctAnswers: ['(4,4)', '4,4', '(4, 4)', '4, 4'], explanation: 'Die Biblioteek is gemerk by kolom 4, ry 4 op die rooster. Ons skryf die kolom eerste en die ry tweede, so die posisie is (4,4).', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Watter landmerk is by roosterposisie (1,1) op die rooster hierbo?', checkMode: 'auto', correctAnswer: 'Huis', correctAnswers: ['Huis', 'huis'], explanation: 'Kolom 1, ry 1 is waar die Huis op die rooster gemerk is.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Die Skool is by (4,1) en die Winkel is by (3,2). Volgens die rooster hierbo, is die Winkel bo of onder die Skool?', checkMode: 'auto', correctAnswer: 'Bo', correctAnswers: ['bo'], explanation: 'Die Winkel het ʼn hoër rygetal (2) as die Skool (ry 1), en rygetalle neem toe soos jy op die rooster beweeg, so die Winkel is bo die Skool.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Volgens die rooster hierbo, watter landmerk is direk langsaan die Park in dieselfde ry — die Huis of die Biblioteek?', checkMode: 'auto', correctAnswer: 'Biblioteek', correctAnswers: ['biblioteek', 'die biblioteek'], explanation: 'Die Park is by (1,4) en die Biblioteek is by (4,4) — hulle deel ry 4. Die Huis is by (1,1), wat in ʼn ander ry as die Park is. Dus is die Biblioteek die landmerk wat die Park se ry deel.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'As jy by die Skool (4,1) staan en na die Huis (1,1) kyk, is die Huis aan jou linkerkant of jou regterkant?', checkMode: 'auto', correctAnswer: 'Linkerkant', correctAnswers: ['linkerkant', 'links', 'aan jou linkerkant'], explanation: 'Die Huis is by kolom 1, wat ʼn kleiner kolomgetal is as die Skool se kolom 4, so die Huis is aan die linkerkant van die Skool.' },
        { difficulty: 'Easy', question: 'Volgens die rooster hierbo, is die Winkel Oos of Wes van die Huis?', checkMode: 'auto', correctAnswer: 'Oos', correctAnswers: ['oos'], explanation: 'Die Huis is by (1,1) en die Winkel is by (3,2). Die Winkel het ʼn groter kolomgetal (3) as die Huis (kolom 1), wat beteken dit is verder regs op die rooster. Regs op die rooster is Oos, so die Winkel is Oos van die Huis.' },
        { difficulty: 'Easy', question: 'Wat is die teenoorgestelde kompasrigting van Oos?', checkMode: 'auto', correctAnswer: 'Wes', correctAnswers: ['wes'], explanation: 'Oos en Wes is teenoorgestelde kompasrigtings, net soos Noord en Suid teenoorgesteldes is. Die teenoorgestelde van Oos is Wes.' },
        { difficulty: 'Easy', question: 'Sipho weet die Park is Noord van die Huis op die rooster hierbo. As hy Noord van die Huis af loop, word die roosterrygetal waarheen hy beweeg kleiner of groter?', checkMode: 'auto', correctAnswer: 'Groter', correctAnswers: ['groter', 'ʼn groter een'], explanation: 'Noord beteken op beweeg op die rooster, wat na groter rygetalle beweeg. Loop Noord vanaf die Huis (ry 1) beweeg Sipho na groter rygetalle, soos ry 4 waar die Park is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Volgens die rooster hierbo, hoeveel tree regs is die Winkel van die Huis?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2 tree'], explanation: 'Die Huis is by (1,1) en die Winkel is by (3,2). As ons net na die horisontale afstand kyk: 3 − 1 = 2 tree regs.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Die Biblioteek is by (4,4) en die Park is by (1,4). Volgens die rooster hierbo, hoeveel tree links skei hierdie twee landmerke?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 tree'], explanation: 'Die Biblioteek en Park deel ry 4, so ons tel net horisontale tree. 4 − 1 = 3 tree links (vanaf die Biblioteek na die Park).', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Lerato sê die Huis en die Skool is 1 tree uitmekaar omdat "hulle albei in ry 1 is". Volgens die rooster hierbo, is Lerato korrek?', checkMode: 'self', answer: 'Lerato is nie korrek nie. Om in dieselfde ry te wees vertel ons net dat daar geen vertikale afstand tussen die Huis en Skool is nie — dit vertel ons niks van die horisontale afstand nie. Die Huis is by (1,1) en die Skool is by (4,1), so die horisontale afstand is 4 − 1 = 3 tree, en aangesien die vertikale afstand 0 is, is die totale afstand 3 tree, nie 1 nie. Lerato het die werklike kolomgetalle geïgnoreer en net na die gedeelde ry gekyk.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Volgens die rooster hierbo, hoeveel tree in totaal (links plus af) sou jy trek om van die Biblioteek by (4,4) na die Huis by (1,1) te beweeg, deur net links en af te beweeg?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 tree'], explanation: 'Van (4,4) na (1,1): horisontale tree = 4 − 1 = 3, vertikale tree = 4 − 1 = 3. Totale tree = 3 + 3 = 6.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'ʼn Hondeloper moet van die Skool by (4,1) na die Winkel by (3,2) reis en dan verder na die Park by (1,4). Volgens die rooster hierbo, wat is die totale aantal tree vir die hele reis?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 tree'], explanation: 'Skool na Winkel: horisontaal = 4 − 3 = 1, vertikaal = 2 − 1 = 1, dus 2 tree. Winkel na Park: horisontaal = 3 − 1 = 2, vertikaal = 4 − 2 = 2, dus 4 tree. Totaal: 2 + 4 = 6 tree.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Volgens die rooster hierbo, watter paar landmerke is presies 2 tree uitmekaar in totaal: die Winkel en die Skool, of die Huis en die Park?', checkMode: 'auto', correctAnswer: 'Die Winkel en die Skool', correctAnswers: ['winkel en skool', 'die winkel en die skool'], explanation: 'Winkel (3,2) na Skool (4,1): horisontaal = 4 − 3 = 1, vertikaal = 2 − 1 = 1, totaal = 2 tree. Huis (1,1) na Park (1,4): horisontaal = 0, vertikaal = 4 − 1 = 3, totaal = 3 tree. Dus is die Winkel en Skool die paar wat 2 tree uitmekaar is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Begin by die Skool (4,1) op die rooster hierbo, beweeg 3 tree links en 3 tree op. Op watter landmerk beland jy?', checkMode: 'auto', correctAnswer: 'Park', correctAnswers: ['Park', 'park'], explanation: '3 tree links vanaf kolom 4: 4 − 3 = 1. 3 tree op vanaf ry 1: 1 + 3 = 4. Dit beland by (1,4), wat die Park is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Kagiso begin by die Huis (1,1) en loop 2 tree regs en 1 tree op. Volgens die rooster hierbo, by watter roosterposisie kom sy uit?', checkMode: 'auto', correctAnswer: '(3,2)', correctAnswers: ['(3,2)', '3,2', '(3, 2)', '3, 2'], explanation: '2 tree regs vanaf kolom 1: 1 + 2 = 3. 1 tree op vanaf ry 1: 1 + 1 = 2. Kagiso kom uit by (3,2), wat die Winkel is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Zanele begin by die Biblioteek (4,4) en loop 3 tree Suid. Volgens die rooster hierbo, by watter roosterposisie kom sy uit?', checkMode: 'auto', correctAnswer: '(4,1)', correctAnswers: ['(4,1)', '4,1', '(4, 1)', '4, 1'], explanation: 'Suid beteken na af beweeg, wat die rygetal verminder. 3 tree Suid vanaf ry 4: 4 − 3 = 1. Die kolom bly by 4. Zanele kom uit by (4,1), wat die Skool is.', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'ʼn Posbode begin by die Skool (4,1), loop 3 blokke Wes na die Huis, dan 3 blokke Noord na die Park. As sy nou 1 blok verder Oos loop, waar kom sy uit op die rooster hierbo?', checkMode: 'auto', correctAnswer: '(2,4)', correctAnswers: ['(2,4)', '2,4', '(2, 4)', '2, 4'], explanation: 'Skool (4,1) → Wes 3 blokke → Huis (1,1) → Noord 3 blokke → Park (1,4). Oos 1 blok vanaf (1,4): kolom 1 + 1 = 2. Finale posisie is (2,4).', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'Beskryf ʼn roete van die Park (1,4) na die Skool (4,1) op die rooster hierbo deur net regs- en af-tree te gebruik.', checkMode: 'self', answer: 'Beweeg 3 tree regs vanaf (1,4) na (4,4), dan 3 tree af vanaf (4,4) na (4,1). Dit gebruik slegs regs- en af-bewegings en dek 3 + 3 = 6 tree in totaal, wat ooreenstem met die horisontale en vertikale afstande tussen die Park en die Skool.' },
        { difficulty: 'Hard', question: 'ʼn Leerder beweer dat die roete van die Huis na die Biblioteek en die roete van die Park na die Skool (albei deur net regs/links- en op/af-tree te gebruik) noodwendig dieselfde lengte moet wees, "omdat albei pare landmerke diagonaal teenoorgestelde hoeke van die rooster is". Volgens die rooster hierbo, gaan hierdie bewering na.', checkMode: 'self', answer: 'Die leerder se bewering klop toevallig vir hierdie spesifieke rooster, alhoewel "diagonaal teenoorgestelde hoeke" op sigself nie ʼn waarborg van gelyke afstand is nie — dit werk hier weens die spesifieke uitleg. Huis (1,1) na Biblioteek (4,4): horisontaal = 4 − 1 = 3, vertikaal = 4 − 1 = 3, totaal = 6 tree. Park (1,4) na Skool (4,1): horisontaal = 4 − 1 = 3, vertikaal = 4 − 1 = 3, totaal = 6 tree. Albei roetes is 6 tree, so die bewering is hier waar, aangesien albei pare die volle 3-kolom- en 3-ry-afstand van die rooster oorspan.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het roosterposisies lees, kompasrigtings, tree tel, bewegingsinstruksies volg en roetes beskryf baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou so aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
