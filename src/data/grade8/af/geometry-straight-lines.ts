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

  // ═══════════════════════════════════════════════════════════════════════
  // OEFENSTELLE — 3 parallelle vorms, 20 vrae elk (slegs inhoud — geen
  // diagramSvg in hierdie fase nie; diagramme word later deur ʼn ander agent bygevoeg)
  // Bloklaaguit (dieselfde relatiewe posisie in elke stel):
  //   0-2   Hoeke op ʼn lyn / om ʼn punt / vertikaal-oorstaande [diagram-bewus]
  //   3-6   Ooreenkomstige & verwisselende hoeke met parallelle lyne [diagram-bewus]
  //   7-9   Ko-binnehoeke met parallelle lyne [diagram-bewus]
  //   10-13 Algebraïese "los op vir x" met hierdie verwantskappe [diagram-bewus]
  //   14-17 Meerstapkettings wat 2-3 hoekverwantskappe kombineer [diagram-bewus]
  //   18-19 Foutopsporing / redenering (self-nasien)
  // ═══════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // ── Blok 1: Lyn / punt / vertikaal-oorstaande (0-2) ────────────────
        {
          difficulty: 'Easy',
          question: 'In die diagram lê twee hoeke op ʼn reguit lyn, soos getoon. Een hoek is 118°. Bepaal die grootte van die ander hoek.',
          checkMode: 'auto',
          correctAnswer: '62',
          correctAnswers: ['62', '62°'],
          explanation: 'Hoeke op ʼn reguit lyn is supplementêr — hulle tel op tot 180°.\nAnder hoek = 180° − 118° = 62°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="150" x2="150" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 60 150 A 55 55 0 0 1 129 100" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="52" y="105" font-size="15" font-weight="700" fill="#2563eb">118°</text><path d="M 145 150 A 32 32 0 0 0 132 121" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="150" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="150" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Vier hoeke ontmoet by ʼn punt, soos getoon. Drie daarvan is 95°, 110° en 86°. Bepaal die grootte van die vierde hoek, x.',
          checkMode: 'auto',
          correctAnswer: '69',
          correctAnswers: ['69', '69°'],
          explanation: 'Hoeke om ʼn punt tel op tot 360°.\nx = 360° − 95° − 110° − 86° = 360° − 291° = 69°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="95" x2="200" y2="95" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="30" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="45" y2="155" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 95 A 30 30 0 0 0 110 65" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="122" y="80" font-size="12" font-weight="700" fill="#2563eb">95°</text><path d="M 110 65 A 30 30 0 0 0 60 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="60" y="58" font-size="12" font-weight="700" fill="#2563eb">110°</text><path d="M 60 72 A 30 30 0 0 0 70 121" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="32" y="100" font-size="12" font-weight="700" fill="#2563eb">86°</text><path d="M 70 121 A 30 30 0 0 0 140 95" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="98" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee reguit lyne sny by ʼn punt, soos getoon. Een van die hoeke wat gevorm word, is 74°.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bepaal die hoek vertikaal-oorstaande aan 74°.',
              correctAnswer: '74',
              correctAnswers: ['74', '74°'],
              explanation: 'Vertikaal-oorstaande hoeke is altyd gelyk: 74°.',
            },
            {
              label: 'b) Bepaal die grootte van elke aangrensende hoek op die reguit lyn.',
              correctAnswer: '106',
              correctAnswers: ['106', '106°'],
              explanation: 'Aangrensende hoeke op ʼn reguit lyn is supplementêr: 180° − 74° = 106°.',
            },
          ],
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="30" x2="45" y2="160" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 40 40 0 0 1 133 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">74°</text><path d="M 110 135 A 40 40 0 0 1 87 118" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="88" y="152" font-size="15" font-weight="700" fill="#ea580c">?</text><path d="M 87 72 A 40 40 0 0 1 110 55" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="55" y="65" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Blok 2: Ooreenkomstige & verwisselende hoeke (3-6) ─────────────
        {
          difficulty: 'Easy',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een hoek wat gevorm word, is 82°. Bepaal die grootte van sy ooreenkomstige hoek.',
          checkMode: 'auto',
          correctAnswer: '82',
          correctAnswers: ['82', '82°'],
          explanation: 'Ooreenkomstige hoeke gevorm deur ʼn transversaal wat parallelle lyne sny, is gelyk.\nOoreenkomstige hoek = 82°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 95 55 A 26 26 0 0 1 108 34" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="98" y="40" font-size="14" font-weight="700" fill="#2563eb">82°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een hoek wat gevorm word, is 47°. Bepaal die grootte van sy verwisselende hoek.',
          checkMode: 'auto',
          correctAnswer: '47',
          correctAnswers: ['47', '47°'],
          explanation: 'Verwisselende hoeke gevorm deur ʼn transversaal wat parallelle lyne sny, is gelyk.\nVerwisselende hoek = 47°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">47°</text><path d="M 141 145 A 28 28 0 0 0 124 122" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="118" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een ooreenkomstige hoek is 3x en die ander ooreenkomstige hoek is 99°. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '33',
          correctAnswers: ['33'],
          explanation: 'Ooreenkomstige hoeke is gelyk: 3x = 99°.\nx = 99° ÷ 3 = 33°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 95 55 A 26 26 0 0 1 108 34" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="98" y="40" font-size="14" font-weight="700" fill="#2563eb">3x°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="155" y="130" font-size="14" font-weight="700" fill="#2563eb">99°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een verwisselende hoek is (2x + 5)° en die ander verwisselende hoek is 65°. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '30',
          correctAnswers: ['30'],
          explanation: 'Verwisselende hoeke is gelyk: 2x + 5 = 65°.\n2x = 60° → x = 30°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">(2x + 5)°</text><path d="M 141 145 A 28 28 0 0 0 124 122" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="118" y="128" font-size="14" font-weight="700" fill="#2563eb">65°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Blok 3: Ko-binnehoeke (7-9) ─────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een ko-binnehoek is 113°. Bepaal die grootte van die ander ko-binnehoek.',
          checkMode: 'auto',
          correctAnswer: '67',
          correctAnswers: ['67', '67°'],
          explanation: 'Ko-binnehoeke is supplementêr — hulle tel op tot 180°.\nAnder hoek = 180° − 113° = 67°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">113°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een ko-binnehoek is 128°. Bepaal die grootte van die ander ko-binnehoek.',
          checkMode: 'auto',
          correctAnswer: '52',
          correctAnswers: ['52', '52°'],
          explanation: 'Ko-binnehoeke is supplementêr — hulle tel op tot 180°.\nAnder hoek = 180° − 128° = 52°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">128°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Afdak het twee parallelle steunbalke wat deur ʼn diagonale skoor gesny word wat as ʼn transversaal optree, soos getoon. Die ko-binnehoek aan een kant is 75°. Bepaal die ko-binnehoek aan dieselfde kant tussen die ander paar balke.',
          checkMode: 'auto',
          correctAnswer: '105',
          correctAnswers: ['105', '105°'],
          explanation: 'Ko-binnehoeke tussen parallelle lyne is supplementêr.\nAnder hoek = 180° − 75° = 105°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">75°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Blok 4: Algebraïese "los op vir x" (10-13) ──────────────────────
        {
          difficulty: 'Medium',
          question: 'Twee hoeke op ʼn reguit lyn, soos getoon, is 3x en (x + 40)°. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '35',
          correctAnswers: ['35'],
          explanation: 'Hoeke op ʼn reguit lyn is supplementêr: 3x + (x + 40) = 180.\n4x + 40 = 180 → 4x = 140 → x = 35.\nToets: 3(35) = 105° en 35 + 40 = 75°; 105° + 75° = 180° ✓',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="150" x2="150" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 60 150 A 55 55 0 0 1 129 100" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="52" y="105" font-size="15" font-weight="700" fill="#2563eb">3x°</text><path d="M 145 150 A 32 32 0 0 0 132 121" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="145" y="128" font-size="14" font-weight="700" fill="#2563eb">(x + 40)°</text><circle cx="110" cy="150" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee reguit lyne sny mekaar, soos getoon. Een paar vertikaal-oorstaande hoeke is (2x + 10)° en 70°. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '30',
          correctAnswers: ['30'],
          explanation: 'Vertikaal-oorstaande hoeke is gelyk: 2x + 10 = 70.\n2x = 60 → x = 30.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="30" x2="45" y2="160" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 40 40 0 0 1 133 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">(2x + 10)°</text><path d="M 110 135 A 40 40 0 0 1 87 118" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="88" y="152" font-size="14" font-weight="700" fill="#2563eb">70°</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een verwisselende hoek is (4x − 5)° en die ander verwisselende hoek is 75°. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '20',
          correctAnswers: ['20'],
          explanation: 'Verwisselende hoeke is gelyk: 4x − 5 = 75.\n4x = 80 → x = 20.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">(4x − 5)°</text><path d="M 141 145 A 28 28 0 0 0 124 122" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="118" y="128" font-size="14" font-weight="700" fill="#2563eb">75°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een ko-binnehoek is (2x + 15)° en die ander is (x + 30)°.\na) Skryf ʼn vergelyking met die ko-binnehoek-eienskap.\nb) Los op vir x.\nc) Bepaal die grootte van elke hoek.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vergelyking',
              correctAnswer: '2x+15+x+30=180',
              correctAnswers: ['2x+15+x+30=180', '3x+45=180', '(2x+15)+(x+30)=180'],
              explanation: 'Ko-binnehoeke is supplementêr: (2x + 15) + (x + 30) = 180.',
            },
            {
              label: 'b) Waarde van x',
              correctAnswer: '45',
              explanation: '3x + 45 = 180 → 3x = 135 → x = 45.',
            },
            {
              label: 'c) Elke hoek',
              correctAnswer: '105 en 75',
              correctAnswers: ['105 en 75', '105° en 75°', '75 en 105'],
              explanation: '2(45) + 15 = 105°; 45 + 30 = 75°. Toets: 105° + 75° = 180° ✓',
            },
          ],
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">(2x + 15)°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="155" y="130" font-size="14" font-weight="700" fill="#2563eb">(x + 30)°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Blok 5: Meerstapkettings (14-17) ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een hoek gevorm waar die transversaal die eerste lyn sny, is 124°. Bepaal die ko-binnehoek op die tweede lyn, en bepaal dan die hoek vertikaal-oorstaande aan daardie ko-binnehoek.',
          checkMode: 'auto',
          correctAnswer: '56',
          correctAnswers: ['56', '56°'],
          explanation: 'Stap 1: Die ko-binnehoek is supplementêr tot 124°: 180° − 124° = 56°.\nStap 2: Die hoek vertikaal-oorstaande aan hierdie 56°-hoek is daaraan gelyk: 56°.\nFinale antwoord: 56°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">124°</text><path d="M 133 145 A 26 26 0 0 1 121 168" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="100" y="178" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Twee reguit lyne sny mekaar, soos getoon, en vorm ʼn hoek van 96°. Die hoek aangrensend daaraan op die reguit lyn is ooreenkomstig met hoek y op ʼn paar parallelle lyne wat deur ʼn transversaal gesny word. Bepaal die grootte van hoek y.',
          checkMode: 'auto',
          correctAnswer: '84',
          correctAnswers: ['84', '84°'],
          explanation: 'Stap 1: Die aangrensende hoek op die reguit lyn is supplementêr tot 96°: 180° − 96° = 84°.\nStap 2: y is ooreenkomstig met hierdie 84°-hoek, dus is ooreenkomstige hoeke gelyk: y = 84°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="30" x2="45" y2="160" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 40 40 0 0 1 133 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">96°</text><path d="M 110 135 A 40 40 0 0 1 87 118" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="88" y="152" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. ʼn Hoek van 58° is verwisselend met hoek p. Hoek p en hoek q is ko-binnehoeke. Bepaal die grootte van hoek q.',
          checkMode: 'auto',
          correctAnswer: '122',
          correctAnswers: ['122', '122°'],
          explanation: 'Stap 1: Verwisselende hoeke is gelyk, dus p = 58°.\nStap 2: p en q is ko-binnehoeke, dus is hulle supplementêr: q = 180° − 58° = 122°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">58°</text><path d="M 87 55 A 26 26 0 0 0 66 68" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="42" y="78" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Twee reguit lyne sny mekaar by 111°, soos getoon. Hierdie hoek se vertikaal-oorstaande hoek is ooreenkomstig met hoek m op ʼn paar parallelle lyne wat deur ʼn transversaal gesny word. Hoek m is ko-binne met hoek n. Bepaal die grootte van hoek n.',
          checkMode: 'auto',
          correctAnswer: '69',
          correctAnswers: ['69', '69°'],
          explanation: 'Stap 1: Die vertikaal-oorstaande hoek is gelyk aan 111° (vertikaal-oorstaande hoeke is gelyk).\nStap 2: m is ooreenkomstig met hierdie 111°-hoek, dus m = 111° (ooreenkomstige hoeke is gelyk).\nStap 3: m en n is ko-binnehoeke, dus is hulle supplementêr: n = 180° − 111° = 69°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="30" x2="45" y2="160" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 40 40 0 0 1 133 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">111°</text><path d="M 110 135 A 40 40 0 0 1 87 118" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="88" y="152" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Blok 6: Foutopsporing / redenering (18-19) ──────────────────────
        {
          difficulty: 'Hard',
          question: 'Zanele sê: "Vertikaal-oorstaande hoeke en ko-binnehoeke tel altwee op tot 180°, dus is dit dieselfde verwantskap." Is sy korrek? Verduidelik, met ʼn 65°-hoek as voorbeeld.',
          answer: 'Nee — Zanele is verkeerd. Vertikaal-oorstaande hoeke is altyd gelyk, nie supplementêr nie. As een hoek 65° is, is sy vertikaal-oorstaande hoek ook 65° (nie 115° nie). Ko-binnehoeke is die hoeke wat supplementêr is — as een ko-binnehoek 65° is, is die ander 180° − 65° = 115°. Dit is twee verskillende verwantskappe wat op verskillende hoekpare van toepassing is.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Transversaal sny twee lyne wat NIE parallel is nie. Mpho sê die ooreenkomstige hoeke moet steeds gelyk wees, want "ooreenkomstige hoeke is altyd gelyk." Is Mpho korrek? Verduidelik waarom dit saak maak dat die lyne parallel is.',
          answer: 'Nee — Mpho is verkeerd. Die ooreenkomstige-hoek-reël (en die verwisselende- en ko-binnehoek-reëls) geld slegs wanneer die twee lyne wat deur die transversaal gesny word, parallel is. As die lyne nie parallel is nie, sal die hoeke in ooreenkomstige posisies oor die algemeen van verskillende grootte wees, omdat daar geen konsekwente verwantskap is wat hulle dwing om te pas nie. Parallelle lyne is die sleutelvoorwaarde wat hierdie hoekverwantskappe waar maak.',
          checkMode: 'self',
        },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het hoeke op ʼn lyn, om ʼn punt, en met parallelle lyne gesny deur ʼn transversaal bemeester, insluitend algebraïese en meerstapprobleme.' },
        { minScore: 14, message: 'Uitstekende werk! Jy het ʼn sterk begrip van hierdie hoekverwantskappe. Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur, veral die algebraïese en meerstapvrae, en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids, fokus op elke hoekverwantskap een op ʼn slag, en probeer dan hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaguit as Stel 1, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // ── Blok 1: Lyn / punt / vertikaal-oorstaande (0-2) ────────────────
        {
          difficulty: 'Easy',
          question: 'In die diagram lê twee hoeke op ʼn reguit lyn, soos getoon. Een hoek is 137°. Bepaal die grootte van die ander hoek.',
          checkMode: 'auto',
          correctAnswer: '43',
          correctAnswers: ['43', '43°'],
          explanation: 'Hoeke op ʼn reguit lyn is supplementêr — hulle tel op tot 180°.\nAnder hoek = 180° − 137° = 43°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="150" x2="150" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 60 150 A 55 55 0 0 1 129 100" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="52" y="105" font-size="15" font-weight="700" fill="#2563eb">137°</text><path d="M 145 150 A 32 32 0 0 0 132 121" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="150" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="150" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Vier hoeke ontmoet by ʼn punt, soos getoon. Drie daarvan is 80°, 124° en 71°. Bepaal die grootte van die vierde hoek, x.',
          checkMode: 'auto',
          correctAnswer: '85',
          correctAnswers: ['85', '85°'],
          explanation: 'Hoeke om ʼn punt tel op tot 360°.\nx = 360° − 80° − 124° − 71° = 360° − 275° = 85°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="95" x2="200" y2="95" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="30" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="45" y2="155" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 95 A 30 30 0 0 0 110 65" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="122" y="80" font-size="12" font-weight="700" fill="#2563eb">80°</text><path d="M 110 65 A 30 30 0 0 0 60 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="60" y="58" font-size="12" font-weight="700" fill="#2563eb">124°</text><path d="M 60 72 A 30 30 0 0 0 70 121" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="32" y="100" font-size="12" font-weight="700" fill="#2563eb">71°</text><path d="M 70 121 A 30 30 0 0 0 140 95" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="98" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee reguit lyne sny by ʼn punt, soos getoon. Een van die hoeke wat gevorm word, is 63°.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bepaal die hoek vertikaal-oorstaande aan 63°.',
              correctAnswer: '63',
              correctAnswers: ['63', '63°'],
              explanation: 'Vertikaal-oorstaande hoeke is altyd gelyk: 63°.',
            },
            {
              label: 'b) Bepaal die grootte van elke aangrensende hoek op die reguit lyn.',
              correctAnswer: '117',
              correctAnswers: ['117', '117°'],
              explanation: 'Aangrensende hoeke op ʼn reguit lyn is supplementêr: 180° − 63° = 117°.',
            },
          ],
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="30" x2="45" y2="160" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 40 40 0 0 1 133 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">63°</text><path d="M 110 135 A 40 40 0 0 1 87 118" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="88" y="152" font-size="15" font-weight="700" fill="#ea580c">?</text><path d="M 87 72 A 40 40 0 0 1 110 55" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="55" y="65" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Blok 2: Ooreenkomstige & verwisselende hoeke (3-6) ─────────────
        {
          difficulty: 'Easy',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een hoek wat gevorm word, is 76°. Bepaal die grootte van sy ooreenkomstige hoek.',
          checkMode: 'auto',
          correctAnswer: '76',
          correctAnswers: ['76', '76°'],
          explanation: 'Ooreenkomstige hoeke gevorm deur ʼn transversaal wat parallelle lyne sny, is gelyk.\nOoreenkomstige hoek = 76°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 95 55 A 26 26 0 0 1 108 34" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="98" y="40" font-size="14" font-weight="700" fill="#2563eb">76°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een hoek wat gevorm word, is 132°. Bepaal die grootte van sy verwisselende hoek.',
          checkMode: 'auto',
          correctAnswer: '132',
          correctAnswers: ['132', '132°'],
          explanation: 'Verwisselende hoeke gevorm deur ʼn transversaal wat parallelle lyne sny, is gelyk.\nVerwisselende hoek = 132°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">132°</text><path d="M 141 145 A 28 28 0 0 0 124 122" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="118" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een ooreenkomstige hoek is 4x en die ander ooreenkomstige hoek is 108°. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '27',
          correctAnswers: ['27'],
          explanation: 'Ooreenkomstige hoeke is gelyk: 4x = 108°.\nx = 108° ÷ 4 = 27°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 95 55 A 26 26 0 0 1 108 34" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="98" y="40" font-size="14" font-weight="700" fill="#2563eb">4x°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="155" y="130" font-size="14" font-weight="700" fill="#2563eb">108°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een verwisselende hoek is (3x − 10)° en die ander verwisselende hoek is 95°. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '35',
          correctAnswers: ['35'],
          explanation: 'Verwisselende hoeke is gelyk: 3x − 10 = 95°.\n3x = 105° → x = 35°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">(3x − 10)°</text><path d="M 141 145 A 28 28 0 0 0 124 122" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="118" y="128" font-size="14" font-weight="700" fill="#2563eb">95°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Blok 3: Ko-binnehoeke (7-9) ─────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een ko-binnehoek is 122°. Bepaal die grootte van die ander ko-binnehoek.',
          checkMode: 'auto',
          correctAnswer: '58',
          correctAnswers: ['58', '58°'],
          explanation: 'Ko-binnehoeke is supplementêr — hulle tel op tot 180°.\nAnder hoek = 180° − 122° = 58°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">122°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een ko-binnehoek is 149°. Bepaal die grootte van die ander ko-binnehoek.',
          checkMode: 'auto',
          correctAnswer: '31',
          correctAnswers: ['31', '31°'],
          explanation: 'Ko-binnehoeke is supplementêr — hulle tel op tot 180°.\nAnder hoek = 180° − 149° = 31°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">149°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Wingerd het twee parallelle rye tralie-draad wat deur ʼn diagonale steundraad gesny word wat as ʼn transversaal optree, soos getoon. Die ko-binnehoek aan een kant is 84°. Bepaal die ko-binnehoek aan dieselfde kant tussen die ander paar drade.',
          checkMode: 'auto',
          correctAnswer: '96',
          correctAnswers: ['96', '96°'],
          explanation: 'Ko-binnehoeke tussen parallelle lyne is supplementêr.\nAnder hoek = 180° − 84° = 96°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">84°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Blok 4: Algebraïese "los op vir x" (10-13) ──────────────────────
        {
          difficulty: 'Medium',
          question: 'Twee hoeke op ʼn reguit lyn, soos getoon, is 2x en (x + 30)°. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '50',
          correctAnswers: ['50'],
          explanation: 'Hoeke op ʼn reguit lyn is supplementêr: 2x + (x + 30) = 180.\n3x + 30 = 180 → 3x = 150 → x = 50.\nToets: 2(50) = 100° en 50 + 30 = 80°; 100° + 80° = 180° ✓',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="150" x2="150" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 60 150 A 55 55 0 0 1 129 100" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="52" y="105" font-size="15" font-weight="700" fill="#2563eb">2x°</text><path d="M 145 150 A 32 32 0 0 0 132 121" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="145" y="128" font-size="14" font-weight="700" fill="#2563eb">(x + 30)°</text><circle cx="110" cy="150" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee reguit lyne sny mekaar, soos getoon. Een paar vertikaal-oorstaande hoeke is (3x − 15)° en 90°. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '35',
          correctAnswers: ['35'],
          explanation: 'Vertikaal-oorstaande hoeke is gelyk: 3x − 15 = 90.\n3x = 105 → x = 35.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="30" x2="45" y2="160" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 40 40 0 0 1 133 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">(3x − 15)°</text><path d="M 110 135 A 40 40 0 0 1 87 118" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="88" y="152" font-size="14" font-weight="700" fill="#2563eb">90°</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een verwisselende hoek is (5x − 10)° en die ander verwisselende hoek is 105°. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '23',
          correctAnswers: ['23'],
          explanation: 'Verwisselende hoeke is gelyk: 5x − 10 = 105.\n5x = 115 → x = 23.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">(5x − 10)°</text><path d="M 141 145 A 28 28 0 0 0 124 122" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="118" y="128" font-size="14" font-weight="700" fill="#2563eb">105°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een ko-binnehoek is (3x + 5)° en die ander is (x + 15)°.\na) Skryf ʼn vergelyking met die ko-binnehoek-eienskap.\nb) Los op vir x.\nc) Bepaal die grootte van elke hoek.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vergelyking',
              correctAnswer: '3x+5+x+15=180',
              correctAnswers: ['3x+5+x+15=180', '4x+20=180', '(3x+5)+(x+15)=180'],
              explanation: 'Ko-binnehoeke is supplementêr: (3x + 5) + (x + 15) = 180.',
            },
            {
              label: 'b) Waarde van x',
              correctAnswer: '40',
              explanation: '4x + 20 = 180 → 4x = 160 → x = 40.',
            },
            {
              label: 'c) Elke hoek',
              correctAnswer: '125 en 55',
              correctAnswers: ['125 en 55', '125° en 55°', '55 en 125'],
              explanation: '3(40) + 5 = 125°; 40 + 15 = 55°. Toets: 125° + 55° = 180° ✓',
            },
          ],
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">(3x + 5)°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="155" y="130" font-size="14" font-weight="700" fill="#2563eb">(x + 15)°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Blok 5: Meerstapkettings (14-17) ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een hoek gevorm waar die transversaal die eerste lyn sny, is 97°. Bepaal die ko-binnehoek op die tweede lyn, en bepaal dan die hoek vertikaal-oorstaande aan daardie ko-binnehoek.',
          checkMode: 'auto',
          correctAnswer: '83',
          correctAnswers: ['83', '83°'],
          explanation: 'Stap 1: Die ko-binnehoek is supplementêr tot 97°: 180° − 97° = 83°.\nStap 2: Die hoek vertikaal-oorstaande aan hierdie 83°-hoek is daaraan gelyk: 83°.\nFinale antwoord: 83°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">97°</text><path d="M 133 145 A 26 26 0 0 1 121 168" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="100" y="178" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Twee reguit lyne sny mekaar, soos getoon, en vorm ʼn hoek van 68°. Die hoek aangrensend daaraan op die reguit lyn is ooreenkomstig met hoek y op ʼn paar parallelle lyne wat deur ʼn transversaal gesny word. Bepaal die grootte van hoek y.',
          checkMode: 'auto',
          correctAnswer: '112',
          correctAnswers: ['112', '112°'],
          explanation: 'Stap 1: Die aangrensende hoek op die reguit lyn is supplementêr tot 68°: 180° − 68° = 112°.\nStap 2: y is ooreenkomstig met hierdie 112°-hoek, dus is ooreenkomstige hoeke gelyk: y = 112°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="30" x2="45" y2="160" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 40 40 0 0 1 133 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">68°</text><path d="M 110 135 A 40 40 0 0 1 87 118" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="88" y="152" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. ʼn Hoek van 73° is verwisselend met hoek p. Hoek p en hoek q is ko-binnehoeke. Bepaal die grootte van hoek q.',
          checkMode: 'auto',
          correctAnswer: '107',
          correctAnswers: ['107', '107°'],
          explanation: 'Stap 1: Verwisselende hoeke is gelyk, dus p = 73°.\nStap 2: p en q is ko-binnehoeke, dus is hulle supplementêr: q = 180° − 73° = 107°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">73°</text><path d="M 87 55 A 26 26 0 0 0 66 68" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="42" y="78" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Twee reguit lyne sny mekaar by 132°, soos getoon. Hierdie hoek se vertikaal-oorstaande hoek is ooreenkomstig met hoek m op ʼn paar parallelle lyne wat deur ʼn transversaal gesny word. Hoek m is ko-binne met hoek n. Bepaal die grootte van hoek n.',
          checkMode: 'auto',
          correctAnswer: '48',
          correctAnswers: ['48', '48°'],
          explanation: 'Stap 1: Die vertikaal-oorstaande hoek is gelyk aan 132° (vertikaal-oorstaande hoeke is gelyk).\nStap 2: m is ooreenkomstig met hierdie 132°-hoek, dus m = 132° (ooreenkomstige hoeke is gelyk).\nStap 3: m en n is ko-binnehoeke, dus is hulle supplementêr: n = 180° − 132° = 48°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="30" x2="45" y2="160" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 40 40 0 0 1 133 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">132°</text><path d="M 110 135 A 40 40 0 0 1 87 118" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="88" y="152" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Blok 6: Foutopsporing / redenering (18-19) ──────────────────────
        {
          difficulty: 'Hard',
          question: 'Kabelo sê: "Vertikaal-oorstaande hoeke en ko-binnehoeke tel altwee op tot 180°, dus is dit dieselfde verwantskap." Is hy korrek? Verduidelik, met ʼn 72°-hoek as voorbeeld.',
          answer: 'Nee — Kabelo is verkeerd. Vertikaal-oorstaande hoeke is altyd gelyk, nie supplementêr nie. As een hoek 72° is, is sy vertikaal-oorstaande hoek ook 72° (nie 108° nie). Ko-binnehoeke is die hoeke wat supplementêr is — as een ko-binnehoek 72° is, is die ander 180° − 72° = 108°. Dit is twee verskillende verwantskappe wat op verskillende hoekpare van toepassing is.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Transversaal sny twee lyne wat NIE parallel is nie. Naledi sê die verwisselende hoeke moet steeds gelyk wees, want "verwisselende hoeke is altyd gelyk." Is Naledi korrek? Verduidelik waarom dit saak maak dat die lyne parallel is.',
          answer: 'Nee — Naledi is verkeerd. Die verwisselende-hoek-reël (en die ooreenkomstige- en ko-binnehoek-reëls) geld slegs wanneer die twee lyne wat deur die transversaal gesny word, parallel is. As die lyne nie parallel is nie, sal die hoeke in verwisselende posisies oor die algemeen van verskillende grootte wees, omdat daar geen konsekwente verwantskap is wat hulle dwing om te pas nie. Parallelle lyne is die sleutelvoorwaarde wat hierdie hoekverwantskappe waar maak.',
          checkMode: 'self',
        },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het hoeke op ʼn lyn, om ʼn punt, en met parallelle lyne gesny deur ʼn transversaal bemeester, insluitend algebraïese en meerstapprobleme.' },
        { minScore: 14, message: 'Uitstekende werk! Jy het ʼn sterk begrip van hierdie hoekverwantskappe. Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur, veral die algebraïese en meerstapvrae, en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids, fokus op elke hoekverwantskap een op ʼn slag, en probeer dan hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaguit as Stel 1, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // ── Blok 1: Lyn / punt / vertikaal-oorstaande (0-2) ────────────────
        {
          difficulty: 'Easy',
          question: 'In die diagram lê twee hoeke op ʼn reguit lyn, soos getoon. Een hoek is 96°. Bepaal die grootte van die ander hoek.',
          checkMode: 'auto',
          correctAnswer: '84',
          correctAnswers: ['84', '84°'],
          explanation: 'Hoeke op ʼn reguit lyn is supplementêr — hulle tel op tot 180°.\nAnder hoek = 180° − 96° = 84°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="150" x2="150" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 60 150 A 55 55 0 0 1 129 100" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="52" y="105" font-size="15" font-weight="700" fill="#2563eb">96°</text><path d="M 145 150 A 32 32 0 0 0 132 121" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="150" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="150" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Vier hoeke ontmoet by ʼn punt, soos getoon. Drie daarvan is 102°, 58° en 140°. Bepaal die grootte van die vierde hoek, x.',
          checkMode: 'auto',
          correctAnswer: '60',
          correctAnswers: ['60', '60°'],
          explanation: 'Hoeke om ʼn punt tel op tot 360°.\nx = 360° − 102° − 58° − 140° = 360° − 300° = 60°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="95" x2="200" y2="95" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="30" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="45" y2="155" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 95 A 30 30 0 0 0 110 65" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="122" y="80" font-size="12" font-weight="700" fill="#2563eb">102°</text><path d="M 110 65 A 30 30 0 0 0 60 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="60" y="58" font-size="12" font-weight="700" fill="#2563eb">58°</text><path d="M 60 72 A 30 30 0 0 0 70 121" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="32" y="100" font-size="12" font-weight="700" fill="#2563eb">140°</text><path d="M 70 121 A 30 30 0 0 0 140 95" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="98" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee reguit lyne sny by ʼn punt, soos getoon. Een van die hoeke wat gevorm word, is 51°.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bepaal die hoek vertikaal-oorstaande aan 51°.',
              correctAnswer: '51',
              correctAnswers: ['51', '51°'],
              explanation: 'Vertikaal-oorstaande hoeke is altyd gelyk: 51°.',
            },
            {
              label: 'b) Bepaal die grootte van elke aangrensende hoek op die reguit lyn.',
              correctAnswer: '129',
              correctAnswers: ['129', '129°'],
              explanation: 'Aangrensende hoeke op ʼn reguit lyn is supplementêr: 180° − 51° = 129°.',
            },
          ],
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="30" x2="45" y2="160" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 40 40 0 0 1 133 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">51°</text><path d="M 110 135 A 40 40 0 0 1 87 118" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="88" y="152" font-size="15" font-weight="700" fill="#ea580c">?</text><path d="M 87 72 A 40 40 0 0 1 110 55" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="55" y="65" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Blok 2: Ooreenkomstige & verwisselende hoeke (3-6) ─────────────
        {
          difficulty: 'Easy',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een hoek wat gevorm word, is 68°. Bepaal die grootte van sy ooreenkomstige hoek.',
          checkMode: 'auto',
          correctAnswer: '68',
          correctAnswers: ['68', '68°'],
          explanation: 'Ooreenkomstige hoeke gevorm deur ʼn transversaal wat parallelle lyne sny, is gelyk.\nOoreenkomstige hoek = 68°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 95 55 A 26 26 0 0 1 108 34" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="98" y="40" font-size="14" font-weight="700" fill="#2563eb">68°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een hoek wat gevorm word, is 101°. Bepaal die grootte van sy verwisselende hoek.',
          checkMode: 'auto',
          correctAnswer: '101',
          correctAnswers: ['101', '101°'],
          explanation: 'Verwisselende hoeke gevorm deur ʼn transversaal wat parallelle lyne sny, is gelyk.\nVerwisselende hoek = 101°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">101°</text><path d="M 141 145 A 28 28 0 0 0 124 122" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="118" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een ooreenkomstige hoek is 5x en die ander ooreenkomstige hoek is 115°. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '23',
          correctAnswers: ['23'],
          explanation: 'Ooreenkomstige hoeke is gelyk: 5x = 115°.\nx = 115° ÷ 5 = 23°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 95 55 A 26 26 0 0 1 108 34" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="98" y="40" font-size="14" font-weight="700" fill="#2563eb">5x°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="155" y="130" font-size="14" font-weight="700" fill="#2563eb">115°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een verwisselende hoek is (2x + 8)° en die ander verwisselende hoek is 90°. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '41',
          correctAnswers: ['41'],
          explanation: 'Verwisselende hoeke is gelyk: 2x + 8 = 90°.\n2x = 82° → x = 41°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">(2x + 8)°</text><path d="M 141 145 A 28 28 0 0 0 124 122" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="118" y="128" font-size="14" font-weight="700" fill="#2563eb">90°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Blok 3: Ko-binnehoeke (7-9) ─────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een ko-binnehoek is 107°. Bepaal die grootte van die ander ko-binnehoek.',
          checkMode: 'auto',
          correctAnswer: '73',
          correctAnswers: ['73', '73°'],
          explanation: 'Ko-binnehoeke is supplementêr — hulle tel op tot 180°.\nAnder hoek = 180° − 107° = 73°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">107°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een ko-binnehoek is 136°. Bepaal die grootte van die ander ko-binnehoek.',
          checkMode: 'auto',
          correctAnswer: '44',
          correctAnswers: ['44', '44°'],
          explanation: 'Ko-binnehoeke is supplementêr — hulle tel op tot 180°.\nAnder hoek = 180° − 136° = 44°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">136°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Trap het twee parallelle trapreëlings wat deur ʼn diagonale steunstut gesny word wat as ʼn transversaal optree, soos getoon. Die ko-binnehoek aan een kant is 69°. Bepaal die ko-binnehoek aan dieselfde kant tussen die ander paar trapreëlings.',
          checkMode: 'auto',
          correctAnswer: '111',
          correctAnswers: ['111', '111°'],
          explanation: 'Ko-binnehoeke tussen parallelle lyne is supplementêr.\nAnder hoek = 180° − 69° = 111°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">69°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Blok 4: Algebraïese "los op vir x" (10-13) ──────────────────────
        {
          difficulty: 'Medium',
          question: 'Twee hoeke op ʼn reguit lyn, soos getoon, is 4x en (2x + 30)°. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '25',
          correctAnswers: ['25'],
          explanation: 'Hoeke op ʼn reguit lyn is supplementêr: 4x + (2x + 30) = 180.\n6x + 30 = 180 → 6x = 150 → x = 25.\nToets: 4(25) = 100° en 2(25) + 30 = 80°; 100° + 80° = 180° ✓',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="150" x2="150" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 60 150 A 55 55 0 0 1 129 100" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="52" y="105" font-size="15" font-weight="700" fill="#2563eb">4x°</text><path d="M 145 150 A 32 32 0 0 0 132 121" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="145" y="128" font-size="14" font-weight="700" fill="#2563eb">(2x + 30)°</text><circle cx="110" cy="150" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee reguit lyne sny mekaar, soos getoon. Een paar vertikaal-oorstaande hoeke is (2x + 20)° en 84°. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '32',
          correctAnswers: ['32'],
          explanation: 'Vertikaal-oorstaande hoeke is gelyk: 2x + 20 = 84.\n2x = 64 → x = 32.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="30" x2="45" y2="160" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 40 40 0 0 1 133 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">(2x + 20)°</text><path d="M 110 135 A 40 40 0 0 1 87 118" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="88" y="152" font-size="14" font-weight="700" fill="#2563eb">84°</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een ooreenkomstige hoek is (3x + 9)° en die ander ooreenkomstige hoek is 96°. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '29',
          correctAnswers: ['29'],
          explanation: 'Ooreenkomstige hoeke is gelyk: 3x + 9 = 96.\n3x = 87 → x = 29.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">(3x + 9)°</text><path d="M 141 145 A 28 28 0 0 0 124 122" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="118" y="128" font-size="14" font-weight="700" fill="#2563eb">96°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een ko-binnehoek is (4x − 10)° en die ander is (2x + 40)°.\na) Skryf ʼn vergelyking met die ko-binnehoek-eienskap.\nb) Los op vir x.\nc) Bepaal die grootte van elke hoek.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vergelyking',
              correctAnswer: '4x-10+2x+40=180',
              correctAnswers: ['4x-10+2x+40=180', '6x+30=180', '(4x-10)+(2x+40)=180'],
              explanation: 'Ko-binnehoeke is supplementêr: (4x − 10) + (2x + 40) = 180.',
            },
            {
              label: 'b) Waarde van x',
              correctAnswer: '25',
              explanation: '6x + 30 = 180 → 6x = 150 → x = 25.',
            },
            {
              label: 'c) Elke hoek',
              correctAnswer: '90 en 90',
              correctAnswers: ['90 en 90', '90° en 90°'],
              explanation: '4(25) − 10 = 90°; 2(25) + 40 = 90°. Toets: 90° + 90° = 180° ✓',
            },
          ],
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">(4x − 10)°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="155" y="130" font-size="14" font-weight="700" fill="#2563eb">(2x + 40)°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Blok 5: Meerstapkettings (14-17) ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een hoek gevorm waar die transversaal die eerste lyn sny, is 85°. Bepaal die ko-binnehoek op die tweede lyn, en bepaal dan die hoek vertikaal-oorstaande aan daardie ko-binnehoek.',
          checkMode: 'auto',
          correctAnswer: '95',
          correctAnswers: ['95', '95°'],
          explanation: 'Stap 1: Die ko-binnehoek is supplementêr tot 85°: 180° − 85° = 95°.\nStap 2: Die hoek vertikaal-oorstaande aan hierdie 95°-hoek is daaraan gelyk: 95°.\nFinale antwoord: 95°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">85°</text><path d="M 133 145 A 26 26 0 0 1 121 168" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="100" y="178" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Twee reguit lyne sny mekaar, soos getoon, en vorm ʼn hoek van 54°. Die hoek aangrensend daaraan op die reguit lyn is ooreenkomstig met hoek y op ʼn paar parallelle lyne wat deur ʼn transversaal gesny word. Bepaal die grootte van hoek y.',
          checkMode: 'auto',
          correctAnswer: '126',
          correctAnswers: ['126', '126°'],
          explanation: 'Stap 1: Die aangrensende hoek op die reguit lyn is supplementêr tot 54°: 180° − 54° = 126°.\nStap 2: y is ooreenkomstig met hierdie 126°-hoek, dus is ooreenkomstige hoeke gelyk: y = 126°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="30" x2="45" y2="160" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 40 40 0 0 1 133 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">54°</text><path d="M 110 135 A 40 40 0 0 1 87 118" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="88" y="152" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. ʼn Hoek van 88° is verwisselend met hoek p. Hoek p en hoek q is ko-binnehoeke. Bepaal die grootte van hoek q.',
          checkMode: 'auto',
          correctAnswer: '92',
          correctAnswers: ['92', '92°'],
          explanation: 'Stap 1: Verwisselende hoeke is gelyk, dus p = 88°.\nStap 2: p en q is ko-binnehoeke, dus is hulle supplementêr: q = 180° − 88° = 92°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">88°</text><path d="M 87 55 A 26 26 0 0 0 66 68" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="42" y="78" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Twee reguit lyne sny mekaar by 77°, soos getoon. Hierdie hoek se vertikaal-oorstaande hoek is ooreenkomstig met hoek m op ʼn paar parallelle lyne wat deur ʼn transversaal gesny word. Hoek m is ko-binne met hoek n. Bepaal die grootte van hoek n.',
          checkMode: 'auto',
          correctAnswer: '103',
          correctAnswers: ['103', '103°'],
          explanation: 'Stap 1: Die vertikaal-oorstaande hoek is gelyk aan 77° (vertikaal-oorstaande hoeke is gelyk).\nStap 2: m is ooreenkomstig met hierdie 77°-hoek, dus m = 77° (ooreenkomstige hoeke is gelyk).\nStap 3: m en n is ko-binnehoeke, dus is hulle supplementêr: n = 180° − 77° = 103°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="30" x2="45" y2="160" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 40 40 0 0 1 133 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">77°</text><path d="M 110 135 A 40 40 0 0 1 87 118" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="88" y="152" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Blok 6: Foutopsporing / redenering (18-19) ──────────────────────
        {
          difficulty: 'Hard',
          question: 'Karabo sê: "Vertikaal-oorstaande hoeke en ko-binnehoeke tel altwee op tot 180°, dus is dit dieselfde verwantskap." Is hy korrek? Verduidelik, met ʼn 80°-hoek as voorbeeld.',
          answer: 'Nee — Karabo is verkeerd. Vertikaal-oorstaande hoeke is altyd gelyk, nie supplementêr nie. As een hoek 80° is, is sy vertikaal-oorstaande hoek ook 80° (nie 100° nie). Ko-binnehoeke is die hoeke wat supplementêr is — as een ko-binnehoek 80° is, is die ander 180° − 80° = 100°. Dit is twee verskillende verwantskappe wat op verskillende hoekpare van toepassing is.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Transversaal sny twee lyne wat NIE parallel is nie. Thandiwe sê die ko-binnehoeke moet steeds optel tot 180°, want "ko-binnehoeke is altyd supplementêr." Is Thandiwe korrek? Verduidelik waarom dit saak maak dat die lyne parallel is.',
          answer: 'Nee — Thandiwe is verkeerd. Die ko-binnehoek-reël (en die ooreenkomstige- en verwisselende-hoek-reëls) geld slegs wanneer die twee lyne wat deur die transversaal gesny word, parallel is. As die lyne nie parallel is nie, sal die ko-binnehoeke oor die algemeen nie presies tot 180° optel nie, omdat daar geen konsekwente verwantskap is wat hulle dwing om supplementêr te wees nie. Parallelle lyne is die sleutelvoorwaarde wat hierdie hoekverwantskappe waar maak.',
          checkMode: 'self',
        },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het hoeke op ʼn lyn, om ʼn punt, en met parallelle lyne gesny deur ʼn transversaal bemeester, insluitend algebraïese en meerstapprobleme.' },
        { minScore: 14, message: 'Uitstekende werk! Jy het ʼn sterk begrip van hierdie hoekverwantskappe. Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur, veral die algebraïese en meerstapvrae, en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids, fokus op elke hoekverwantskap een op ʼn slag, en probeer dan hierdie stel weer.' },
      ],
    },
  ],
}
