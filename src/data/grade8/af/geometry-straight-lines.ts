import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (geometry of straight lines roles) ───────────────────────
// given angle      → blue   (#2563eb)
// unknown angle    → red    (#dc2626)
// vertically opp.  → green  (#16a34a)
// adjacent angles  → orange (#ea580c)
// angle rel.       → green  (#16a34a)
// parallel lines   → blue   (#2563eb)
// transversal      → red    (#dc2626)
// corresponding    → green  (#16a34a)
// co-interior      → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Meetkunde van Reguit Lyne',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — HOEKE GEVORM DEUR LOODREGTE EN SNYENDE LYNE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'angles-perpendicular-intersecting',
      title: 'Hoeke Gevorm deur Loodregte en Snyende Lyne',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">Ons hersien en skryf duidelike beskrywings van die verwantskappe tussen hoeke wat gevorm word wanneer twee lyne sny. <strong>Vertikaal-oorstaande hoeke</strong> is gelyk. <strong>Aangrensende hoeke op ʼn reguit lyn</strong> is supplementêr (tel op tot 180°). <strong>Loodregte lyne</strong> vorm vier hoeke van 90°.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gegewe hoek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vertikaal-oorstaande')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('aangrensende hoeke')}</span>` +
        `</div>` +

        // ── Key relationships ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutel hoekverwantskappe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Vertikaal-oorstaande hoeke</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wanneer twee lyne sny, is die hoeke direk oorkant mekaar gelyk.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Aangrensende hoeke op ʼn reguit lyn</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Hoeke wat ʼn gemeenskaplike kant deel en op ʼn reguit lyn lê, is supplementêr — hulle tel op tot 180°.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Loodregte lyne</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Twee lyne is loodreg as hulle by regte hoeke ontmoet. Hulle vorm vier gelyke hoeke van 90°.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer twee lyne sny, vorm hulle <strong>vier hoeke</strong>. Hierdie vier hoeke kom altyd in twee pare voor: twee pare vertikaal-oorstaande hoeke. Die hoeke in elke paar is gelyk, en enige twee aangrensende hoeke is supplementêr.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Twee lyne sny en vorm ʼn hoek van 110°. Bepaal die vertikaal-oorstaande hoek en die twee aangrensende hoeke.',
          answer: `Vertikaal-oorstaande hoek: ${gr('110°')}. Aangrensende hoeke: ${or('70°')} elk.`,
          steps: [
            `Die ${bl('gegewe hoek')} is ${bl('110°')}.`,
            `${gr('Vertikaal-oorstaande hoek')} = ${bl('110°')} (vertikaal-oorstaande hoeke is gelyk).`,
            `${or('Aangrensende hoeke')} = 180° − ${bl('110°')} = ${or('70°')} elk (aangrensende hoeke op ʼn reguit lyn is supplementêr).`,
            `<strong>Toets:</strong> 110° + 70° = 180° ✓ &nbsp; en &nbsp; 110° + 70° + 110° + 70° = 360° ✓`,
            `<em>Sien die diagram hieronder wat hierdie snypunt toon.</em>`,
          ],
        },
        {
          question: 'Sipho sê loodregte lyne vorm altyd vier gelyke hoeke. Is hy korrek?',
          answer: `Ja — loodregte lyne vorm altyd vier gelyke ${gr('90°')} hoeke.`,
          steps: [
            `Loodregte lyne ontmoet by regte hoeke.`,
            `ʼn Regte hoek = ${gr('90°')}.`,
            `Vier hoeke van 90° word by die snypunt gevorm, en hulle is almal gelyk.`,
            `<strong>Gevolgtrekking:</strong> Sipho is korrek — loodregte lyne vorm altyd vier gelyke hoeke van 90°. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram nodig: twee snyende lyne wat vier hoeke vorm, met een gemerk 110° en die ander wat bereken moet word" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat hoekverwantskappe wys wat gevorm word wanneer twee lyne sny, insluitend vertikaal-oorstaande en aangrensende supplementêre hoeke" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — HOEKE GEVORM DEUR PARALLELLE LYNE GESNY DEUR ʼN TRANSVERSAAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'angles-parallel-lines-transversal',
      title: 'Hoeke Gevorm deur Parallelle Lyne Gesny deur ʼn Transversaal',
      icon: '∥',
      explanation:
        `<p style="margin-bottom:16px;">Ons skryf duidelike beskrywings van die hoekverwantskappe wat gevorm word wanneer ʼn transversaal twee parallelle lyne sny: <strong>ooreenkomstige hoeke</strong> is gelyk, <strong>verwisselende hoeke</strong> is gelyk, en <strong>ko-binnehoeke</strong> is supplementêr.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('parallelle lyne')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('transversaal')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('ooreenkomstige hoeke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('ko-binnehoeke')}</span>` +
        `</div>` +

        // ── Three angle relationships ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Drie hoekverwantskappe met parallelle lyne</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Ooreenkomstige hoeke (F-vorm)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Hoeke wat in dieselfde posisie is by elke snypunt waar die transversaal die parallelle lyne kruis. Hulle is <strong>gelyk</strong>.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Verwisselende hoeke (Z-vorm)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Hoeke aan teenoorgestelde kante van die transversaal, tussen die parallelle lyne. Hulle is <strong>gelyk</strong>.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Ko-binnehoeke (C-vorm)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Hoeke aan dieselfde kant van die transversaal, tussen die parallelle lyne. Hulle is <strong>supplementêr</strong> (tel op tot 180°).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou-wenk</p>` +
        `<p style="margin:0;color:#1e3a8a;">Soek na die lettervorms: <strong>F</strong> vir ooreenkomstig (gelyk), <strong>Z</strong> vir verwisselend (gelyk), <strong>C</strong> of <strong>U</strong> vir ko-binnehoeke (supplementêr — tel op tot 180°).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny. Een verwisselende hoek is 65°. Bepaal die ander verwisselende hoek.',
          answer: `Die ander verwisselende hoek is ${gr('65°')}.`,
          steps: [
            `Identifiseer die verwantskap: die twee hoeke is ${gr('verwisselende hoeke')} (Z-vorm, tussen die parallelle lyne aan teenoorgestelde kante van die transversaal).`,
            `Verwisselende hoeke is gelyk wanneer lyne parallel is.`,
            `Ander verwisselende hoek = ${gr('65°')}. ✓`,
            `<em>Sien die diagram hieronder wat die transversaal en parallelle lyne toon.</em>`,
          ],
        },
        {
          question: 'Lerato vind ʼn ko-binnehoek van 100°. Bepaal die ander ko-binnehoek.',
          answer: `Die ander ko-binnehoek is ${or('80°')}.`,
          steps: [
            `Identifiseer die verwantskap: die twee hoeke is ${or('ko-binnehoeke')} (C-vorm, aan dieselfde kant van die transversaal tussen die parallelle lyne).`,
            `Ko-binnehoeke is supplementêr: hulle tel op tot 180°.`,
            `Ander ko-binnehoek = 180° − ${or('100°')} = ${or('80°')}. ✓`,
            `<strong>Toets:</strong> 100° + 80° = 180° ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram nodig: twee parallelle lyne gesny deur ʼn transversaal, met ooreenkomstige, verwisselende, en ko-binnehoekpare gemerk" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat ooreenkomstige, verwisselende en ko-binnehoeke verduidelik wat gevorm word wanneer ʼn transversaal twee parallelle lyne sny" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — OPLOS VAN MEETKUNDIGE PROBLEME MET HOEKVERWANTSKAPPE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-geometric-problems-angle-relationships',
      title: 'Oplos van Meetkundige Probleme met Hoekverwantskappe',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons los meetkundige probleme op deur die hoekverwantskappe van loodregte lyne, snyende lyne, en parallelle lyne gesny deur ʼn transversaal te gebruik, wat dikwels verskeie stappe vereis om onbekende hoeke te bepaal.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gegewe hoeke')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('onbekende hoeke')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('hoekverwantskappe')}</span>` +
        `</div>` +

        // ── Problem-solving strategy ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Probleemoplossingstrategie</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identifiseer')} — Kyk na die diagram en identifiseer watter tipe lyne teenwoordig is (parallel, snyend, of loodreg).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Benoem die verwantskap')} — Stel die hoekverwantskap wat jy gaan gebruik (bv. ooreenkomstige hoeke, ko-binnehoeke).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Bereken')} — Stel die vergelyking op en los dit op om die onbekende hoek te bepaal.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Gee altyd ʼn rede</p>` +
        `<p style="margin:0;color:#1e3a8a;">In formele meetkunde moet jy altyd die rede vir elke stap tussen hakies aandui. Byvoorbeeld: x = 75° (ooreenkomstige hoeke; AB ∥ CD). Dit toon jou begrip van watter eienskap jy toegepas het.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny. Een hoek is 75° en is ooreenkomstig met hoek x, terwyl hoek y ko-binne is met x. Bepaal x en y.',
          answer: `${re('x')} = ${bl('75°')}, &nbsp; ${re('y')} = ${or('105°')}`,
          steps: [
            `Bepaal ${re('x')}: ${re('x')} en die ${bl('gegewe 75°')} hoek is ${gr('ooreenkomstige hoeke')}.`,
            `${gr('Ooreenkomstige hoeke is gelyk')} (parallelle lyne gesny deur ʼn transversaal).`,
            `∴ ${re('x')} = ${bl('75°')}`,
            `Bepaal ${re('y')}: ${re('y')} en ${re('x')} is ${or('ko-binnehoeke')}.`,
            `${or('Ko-binnehoeke is supplementêr')}: ${re('y')} + ${re('x')} = 180°`,
            `${re('y')} = 180° − ${bl('75°')} = ${or('105°')} ✓`,
          ],
        },
        {
          question: 'Thabo het twee snyende lyne wat ʼn hoek van 48° vorm. Bepaal al vier hoeke wat gevorm word.',
          answer: `Die vier hoeke is ${bl('48°')}, ${or('132°')}, ${bl('48°')}, ${or('132°')}.`,
          steps: [
            `${bl('Gegewe hoek')} = ${bl('48°')}.`,
            `${bl('Vertikaal-oorstaande hoek')} = ${bl('48°')} (vertikaal-oorstaande hoeke is gelyk).`,
            `${or('Aangrensende hoeke')} = 180° − ${bl('48°')} = ${or('132°')} elk (aangrensende hoeke op ʼn reguit lyn is supplementêr).`,
            `<strong>Die vier hoeke is:</strong> ${bl('48°')}, ${or('132°')}, ${bl('48°')}, ${or('132°')}.`,
            `<strong>Toets:</strong> 48° + 132° + 48° + 132° = 360° ✓`,
          ],
        },
        {
          question: 'ʼn Transversaal sny twee parallelle lyne. Die verwisselende hoek van x is 110°, en y is supplementêr met x. Bepaal x en y.',
          answer: `${re('x')} = ${bl('110°')}, &nbsp; ${re('y')} = ${or('70°')}`,
          steps: [
            `Bepaal ${re('x')}: ${re('x')} en die ${bl('gegewe 110°')} hoek is ${gr('verwisselende hoeke')}.`,
            `${gr('Verwisselende hoeke is gelyk')} (parallelle lyne gesny deur ʼn transversaal).`,
            `∴ ${re('x')} = ${bl('110°')}`,
            `Bepaal ${re('y')}: ${re('y')} en ${re('x')} is ${re('supplementêr')}.`,
            `${re('y')} = 180° − ${re('x')} = 180° − ${bl('110°')} = ${or('70°')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram nodig: twee parallelle lyne gesny deur ʼn transversaal met hoeke x en y gemerk, en gegewe hoeke aangedui" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat meerstap-meetkundige probleemoplossing wys met behulp van ooreenkomstige, verwisselende en ko-binnehoekverwantskappe" />',
    },
  ],

  topicPractice: [
    // ── V1 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Twee lyne sny en vorm ʼn hoek van 65°. Bepaal die vertikaal-oorstaande hoek.',
      answer: '65°',
      checkMode: 'auto',
      correctAnswer: '65',
      correctAnswers: ['65', '65°'],
      explanation: 'Vertikaal-oorstaande hoeke is gelyk. Die vertikaal-oorstaande hoek is ook 65°.',
    },

    // ── V2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bepaal die twee aangrensende hoeke van ʼn hoek van 65° op ʼn reguit lyn.',
      answer: '115°',
      checkMode: 'auto',
      correctAnswer: '115',
      correctAnswers: ['115', '115°'],
      explanation: 'Aangrensende hoeke op ʼn reguit lyn is supplementêr: 180° − 65° = 115°. Albei aangrensende hoeke is 115°.',
    },

    // ── V3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê loodregte lyne vorm hoeke van verskillende groottes. Is hy korrek? Verduidelik.',
      answer: 'Nee — loodregte lyne vorm altyd vier gelyke hoeke van 90°.',
      checkMode: 'self',
    },

    // ── V4 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Twee parallelle lyne word deur ʼn transversaal gesny. Een ooreenkomstige hoek is 80°. Bepaal die ander.',
      answer: '80°',
      checkMode: 'auto',
      correctAnswer: '80',
      correctAnswers: ['80', '80°'],
      explanation: 'Ooreenkomstige hoeke is gelyk wanneer lyne parallel is. Die ander ooreenkomstige hoek is ook 80°.',
    },

    // ── V5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Verwisselende hoek is 55°. Bepaal die ander verwisselende hoek.',
      answer: '55°',
      checkMode: 'auto',
      correctAnswer: '55',
      correctAnswers: ['55', '55°'],
      explanation: 'Verwisselende hoeke is gelyk wanneer lyne parallel is. Die ander verwisselende hoek is ook 55°.',
    },

    // ── V6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato vind ʼn ko-binnehoek van 95°. Bepaal die ander ko-binnehoek en verduidelik die verwantskap wat gebruik is.',
      answer: '180° − 95° = 85°. Ko-binnehoeke is supplementêr, wat beteken hulle tel op tot 180°.',
      checkMode: 'self',
    },

    // ── V7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Twee snyende lyne vorm ʼn hoek van 38°. Bepaal al vier hoeke wat gevorm word.',
      answer: '38°, 142°, 38°, 142°',
      checkMode: 'auto',
      correctAnswer: '38,142,38,142',
      correctAnswers: ['38°,142°,38°,142°', '38, 142, 38, 142', '38°, 142°, 38°, 142°', '38,142,38,142'],
      explanation: 'Vertikaal-oorstaande hoek = 38°. Aangrensende hoeke = 180° − 38° = 142° elk. Die vier hoeke is 38°, 142°, 38°, 142°.',
    },

    // ── V8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Transversaal sny twee parallelle lyne. Een hoek is 72° en ooreenkomstig met hoek x, en y is ko-binne met x. Bepaal x en y.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) x =',
          correctAnswer: '72',
          correctAnswers: ['72', '72°'],
          explanation: 'Ooreenkomstige hoeke is gelyk. x = 72°.',
        },
        {
          label: 'b) y =',
          correctAnswer: '108',
          correctAnswers: ['108', '108°'],
          explanation: 'Ko-binnehoeke is supplementêr: y = 180° − 72° = 108°.',
        },
      ],
    },

    // ── V9 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Thabo sê vertikaal-oorstaande hoeke is altyd supplementêr. Is hy korrek? Verduidelik.',
      answer: 'Nee — vertikaal-oorstaande hoeke is altyd gelyk, nie supplementêr nie.',
      checkMode: 'self',
    },

    // ── V10 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Twee parallelle lyne word deur ʼn transversaal gesny. Die verwisselende hoek van x is 98°, en y is supplementêr met x. Bepaal x en y.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) x =',
          correctAnswer: '98',
          correctAnswers: ['98', '98°'],
          explanation: 'Verwisselende hoeke is gelyk. x = 98°.',
        },
        {
          label: 'b) y =',
          correctAnswer: '82',
          correctAnswers: ['82', '82°'],
          explanation: 'Supplementêre hoeke tel op tot 180°: y = 180° − 98° = 82°.',
        },
      ],
    },

    // ── V11 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Definieer ooreenkomstige hoeke.',
      answer: 'Hoeke wat in dieselfde relatiewe posisie is by elke snypunt waar ʼn transversaal twee parallelle lyne kruis, en wat gelyk is.',
      checkMode: 'self',
    },

    // ── V12 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Amahle het twee snyende lyne wat ʼn hoek van 105° vorm. Bepaal die kleinste hoek wat gevorm word.',
      answer: '75°',
      checkMode: 'auto',
      correctAnswer: '75',
      correctAnswers: ['75', '75°'],
      explanation: 'Aangrensende hoek = 180° − 105° = 75°. Die kleinste hoek wat gevorm word, is 75°.',
    },

    // ── V13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Transversaal skep ʼn ko-binnehoekpaar waar een hoek drie keer die ander is. Bepaal albei hoeke.',
      answer: 'Laat kleiner hoek = x, groter = 3x. x + 3x = 180. 4x = 180. x = 45°. Hoeke is 45° en 135°.',
      checkMode: 'self',
    },

    // ── V14 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê verwisselende hoeke en ko-binnehoeke is dieselfde ding. Is hy korrek? Verduidelik.',
      answer: 'Nee — verwisselende hoeke is gelyk aan mekaar, terwyl ko-binnehoeke supplementêr is (tel op tot 180°). Dit is verskillende verwantskappe.',
      checkMode: 'self',
    },

    // ── V15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Twee parallelle lyne word deur ʼn transversaal gesny. Bepaal al 8 hoeke wat gevorm word as een hoek 63° is.',
      answer: 'Hoeke wissel tussen 63° en 117° by elke snypunt volgens die reëls vir ooreenkomstige, verwisselende en ko-binnehoeke — vier hoeke van 63° en vier hoeke van 117°.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het meetkunde van reguit lyne bemeester.' },
      { minPercent: 75, message: 'Goeie werk! Jy het ʼn sterk begrip van hoekverwantskappe.' },
      { minPercent: 50, message: 'Goeie poging, gaan die hoekverwantskappe weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer, werk weer deur die studiegids en fokus op die hoekverwantskappe.' },
    ],
  },
}
