import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (angle roles) ────────────────────────────────────────────
// blue   → acute / given angle / parallel lines / corresponding angles (#2563eb)
// green  → right / vertically opposite / corresponding angles           (#16a34a)
// orange → obtuse / co-interior angles                                  (#ea580c)
// red    → reflex / unknown angle / transversal                         (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Meetkunde van Reguit Lyne',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — TIPES HOEKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'types-of-angles',
      title: 'Tipes Hoeke',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">Hoeke word volgens hul grootte geklassifiseer. ${bl('Skerp')} hoeke is kleiner as 90°, ${gr('regte')} hoeke is presies 90°, ${or('stomp')} hoeke is tussen 90° en 180°, gestrekte hoeke is presies 180°, en ${re('refleks')} hoeke is tussen 180° en 360°. Ons identifiseer en benoem hierdie hoektipes in diagramme.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('skerp')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('regte')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('stomp')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('refleks')}</span>` +
        `</div>` +

        // ── Angle types grid ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Tipes hoeke</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Skerp Hoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Kleiner as 90°. ʼn Klein, skerp hoek.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Regte Hoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Presies 90°. Word met ʼn klein vierkantjie-simbool in diagramme aangedui.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Stomp Hoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Tussen 90° en 180°. Wyer as ʼn regte hoek.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Gestrekte Hoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Presies 180°. Vorm ʼn reguit lyn.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Refleks Hoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Tussen 180° en 360°. Groter as ʼn gestrekte hoek.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om ʼn hoek te klassifiseer</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vergelyk die hoek met 90° en 180°. Kleiner as 90° → ${bl('skerp')}. Presies 90° → ${gr('regte')}. Tussen 90° en 180° → ${or('stomp')}. Presies 180° → gestrek. Meer as 180° → ${re('refleks')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Klassifiseer ʼn hoek van 142°.',
          answer: `142° is ${or('stomp')}`,
          steps: [
            `Vergelyk 142° met die hoekgrense: 90° < 142° < 180°.`,
            `142° is tussen 90° en 180°, dus is dit ʼn ${or('stomp')} hoek.`,
          ],
        },
        {
          question: 'Klassifiseer ʼn hoek van 195°.',
          answer: `195° is ${re('refleks')}`,
          steps: [
            `Vergelyk 195° met die hoekgrense: 195° > 180°.`,
            `195° is tussen 180° en 360°, dus is dit ʼn ${re('refleks')} hoek.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Klassifiseer elke hoek.\na) 35°\nb) 90°\nc) 160°',
          answer: 'a) Skerp (kleiner as 90°)\nb) Regte hoek (presies 90°)\nc) Stomp (tussen 90° en 180°)',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Gee die tipe van elke hoek.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 78° is ʼn ___ hoek.',
              correctAnswer: 'skerp',
              explanation: '78° is kleiner as 90°, dus is dit ʼn skerp hoek.',
            },
            {
              label: 'b) 215° is ʼn ___ hoek.',
              correctAnswer: 'refleks',
              explanation: '215° is tussen 180° en 360°, dus is dit ʼn refleks hoek.',
            },
            {
              label: 'c) 113° is ʼn ___ hoek.',
              correctAnswer: 'stomp',
              explanation: '113° is tussen 90° en 180°, dus is dit ʼn stomp hoek.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Hoek is 40° meer as ʼn regte hoek.\na) Wat is die grootte van die hoek?\nb) Watter tipe hoek is dit?\nc) Watter tipe hoek word gevorm deur die oorblywende deel van ʼn volledige omwenteling (360°) nadat hierdie hoek verwyder is?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Grootte van die hoek',
              correctAnswer: '130',
              explanation: 'Regte hoek = 90°. 90° + 40° = 130°.',
            },
            {
              label: 'b) Tipe hoek',
              correctAnswer: 'stomp',
              explanation: '130° is tussen 90° en 180°, dus is dit ʼn stomp hoek.',
            },
            {
              label: 'c) Tipe oorblywende hoek (360° − 130°)',
              correctAnswer: 'refleks',
              explanation: '360° − 130° = 230°. Aangesien 230° tussen 180° en 360° is, is dit ʼn refleks hoek.',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat skerp-, regte, stomp-, gestrekte en refleks hoeke klassifiseer met voorbeelde uit diagramme',

      diagramPlaceholder:
        'Vyf hoekdiagramme — skerp, reg, stomp, gestrek en refleks — elk geteken met twee strale vanaf ʼn hoekpunt en die geklassifiseerde hoek gemerk en kleurgekodeer volgens die kleursleutel.',

      diagramSvg:
        '<svg viewBox="0 0 460 160" xmlns="http://www.w3.org/2000/svg">' +
        '<g transform="translate(48,112)">' +
        '<line x1="0" y1="0" x2="40" y2="0" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="0" y1="0" x2="30.64" y2="-25.71" stroke="#0f1f3d" stroke-width="2"/>' +
        '<path d="M 18,0 A 18,18 0 0 0 13.79,-11.57" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<circle cx="0" cy="0" r="2" fill="#0f1f3d"/>' +
        '<text x="26" y="-15" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">40°</text>' +
        '<text x="0" y="38" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">Skerp</text>' +
        '</g>' +
        '<g transform="translate(140,112)">' +
        '<line x1="0" y1="0" x2="40" y2="0" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="0" y1="0" x2="0" y2="-40" stroke="#0f1f3d" stroke-width="2"/>' +
        '<polyline points="14,0 14,-14 0,-14" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<circle cx="0" cy="0" r="2" fill="#0f1f3d"/>' +
        '<text x="0" y="38" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">Reg</text>' +
        '</g>' +
        '<g transform="translate(232,112)">' +
        '<line x1="0" y1="0" x2="40" y2="0" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="0" y1="0" x2="-25.71" y2="-30.64" stroke="#0f1f3d" stroke-width="2"/>' +
        '<path d="M 18,0 A 18,18 0 0 0 -11.57,-13.79" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<circle cx="0" cy="0" r="2" fill="#0f1f3d"/>' +
        '<text x="6" y="-22" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">130°</text>' +
        '<text x="0" y="38" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">Stomp</text>' +
        '</g>' +
        '<g transform="translate(324,112)">' +
        '<line x1="0" y1="0" x2="40" y2="0" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="0" y1="0" x2="-40" y2="0" stroke="#0f1f3d" stroke-width="2"/>' +
        '<path d="M 18,0 A 18,18 0 0 1 -18,0" fill="none" stroke="#374151" stroke-width="2"/>' +
        '<circle cx="0" cy="0" r="2" fill="#0f1f3d"/>' +
        '<text x="0" y="-24" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">180°</text>' +
        '<text x="0" y="38" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Gestrek</text>' +
        '</g>' +
        '<g transform="translate(416,112)">' +
        '<line x1="0" y1="0" x2="40" y2="0" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="0" y1="0" x2="-13.68" y2="-37.59" stroke="#0f1f3d" stroke-width="2"/>' +
        '<path d="M 18,0 A 18,18 1 1 1 -6.16,-16.92" fill="none" stroke="#dc2626" stroke-width="2"/>' +
        '<circle cx="0" cy="0" r="2" fill="#0f1f3d"/>' +
        '<text x="0" y="24" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">250°</text>' +
        '<text x="0" y="42" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">Refleks</text>' +
        '</g>' +
        '</svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — HOEKE OP ʼN REGUIT LYN EN VERTIKAAL-OORSTAANDE HOEKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'straight-line-vertically-opposite',
      title: 'Hoeke op ʼn Reguit Lyn en Vertikaal-Oorstaande Hoeke',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">Hoeke op ʼn reguit lyn tel op tot <strong>180°</strong> — hierdie word <strong>supplementêre hoeke</strong> genoem. Wanneer twee reguit lyne kruis, vorm hulle <strong>vertikaal-oorstaande hoeke</strong> wat altyd gelyk is. Ons gebruik hierdie feite om onbekende hoeke in diagramme te bereken.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gegewe hoek')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('onbekende hoek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vertikaal-oorstaande')}</span>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelfeite</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Hoeke op ʼn reguit lyn</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Al die hoeke wat ʼn gemeenskaplike punt op ʼn reguit lyn deel, tel op tot <strong>180°</strong>.</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Formule: ${bl('a')} + ${re('b')} = 180°</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Vertikaal-oorstaande hoeke</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Wanneer twee lyne kruis, is die hoeke direk oorkant mekaar gelyk.</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Reël: ${bl('a')} = ${gr('c')} en ${re('b')} = ${re('d')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategie om onbekende hoeke te vind</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Stap 1</strong> — Bepaal of die hoeke op ʼn reguit lyn of vertikaal-oorstaande is.<br><strong>Stap 2</strong> — Stel die vergelyking op met 180° (reguit lyn) of gelykheid (vertikaal-oorstaande).<br><strong>Stap 3</strong> — Los op vir die ${re('onbekende hoek')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Twee hoeke op ʼn reguit lyn is 65° en x. Bepaal x.',
          answer: `${re('x')} = 115°`,
          steps: [
            `Hoeke op ʼn reguit lyn tel op tot 180°: ${bl('65°')} + ${re('x')} = 180°`,
            `Los op vir ${re('x')}: ${re('x')} = 180° − ${bl('65°')} = ${re('115°')}`,
            `<strong>Antwoord:</strong> ${re('x')} = 115° ✓`,
          ],
        },
        {
          question: 'Twee lyne kruis en vorm ʼn hoek van 70°. Bepaal die vertikaal-oorstaande hoek en die twee aangrensende hoeke.',
          answer: `Vertikaal-oorstaande hoek = ${gr('70°')}; elke aangrensende hoek = ${re('110°')}`,
          steps: [
            `Die ${gr('vertikaal-oorstaande')} hoek is gelyk aan die ${bl('gegewe hoek')}: ${gr('70°')} = ${bl('70°')} (vertikaal-oorstaande hoeke is gelyk).`,
            `Die aangrensende hoeke is op ʼn reguit lyn met die ${bl('gegewe hoek')}: ${re('aangrensend')} = 180° − ${bl('70°')} = ${re('110°')}`,
            `Daar is twee aangrensende hoeke (een aan elke kant), en albei is gelyk aan ${re('110°')}.`,
            `<strong>Toets:</strong> ${bl('70°')} + ${re('110°')} = 180° ✓ en ${gr('70°')} + ${re('110°')} = 180° ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Twee hoeke op ʼn reguit lyn is 48° en x. Bepaal x.',
          answer: '132',
          checkMode: 'auto',
          correctAnswer: '132',
          explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°.\nx = 180° − 48° = 132° ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Twee reguit lyne kruis. Een hoek wat gevorm word, is 55°.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bepaal die vertikaal-oorstaande hoek.',
              correctAnswer: '55',
              explanation: 'Vertikaal-oorstaande hoeke is gelyk: 55°.',
            },
            {
              label: 'b) Bepaal die twee aangrensende hoeke.',
              correctAnswer: '125',
              explanation: 'Aangrensende hoeke is supplementêr: 180° − 55° = 125°. Albei aangrensende hoeke is 125°.',
            },
            {
              label: 'c) Waartoe tel al vier hoeke op?',
              correctAnswer: '360',
              explanation: '55° + 125° + 55° + 125° = 360°. Hoeke rondom ʼn punt tel altyd op tot 360°.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Drie hoeke op ʼn reguit lyn is 3x, 2x en 25°. Bepaal die waarde van x en gee die grootte van elke hoek.',
          answer: 'x = 31°\n3x = 93°, 2x = 62°, 25°\nToets: 93 + 62 + 25 = 180 ✓',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om onbekende hoeke te vind deur hoeke op ʼn reguit lyn (180 grade) en vertikaal-oorstaande hoeke te gebruik',

      diagramPlaceholder:
        'Twee diagramme: een wat hoeke a en b op ʼn reguit lyn wys wat optel tot 180°, met die gegewe hoek in blou en die onbekende hoek in rooi; een wat twee snydende lyne wys met die 70°-vertikaal-oorstaande hoeke uitgelig in groen en ʼn aangrensende 110°-hoek in rooi.',

      diagramSvg:
        '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="80" y="14" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Hoeke op ʼn reguit lyn</text>' +
        '<line x1="10" y1="80" x2="150" y2="80" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="80" y1="80" x2="101.1" y2="34.7" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<path d="M 98,80 A 18,18 0 0 0 87.6,63.7" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<text x="97" y="68" font-size="11" font-weight="700" fill="#2563eb">a</text>' +
        '<path d="M 89.3,60.1 A 22,22 0 0 0 58,80" fill="none" stroke="#dc2626" stroke-width="2"/>' +
        '<text x="66" y="68" font-size="11" font-weight="700" fill="#dc2626">b</text>' +
        '<circle cx="80" cy="80" r="2.5" fill="#0f1f3d"/>' +
        '<text x="80" y="98" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">a + b = 180°</text>' +
        '<text x="230" y="14" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Vertikaal-oorstaande hoeke</text>' +
        '<line x1="170" y1="80" x2="290" y2="80" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="212.9" y1="127" x2="247.1" y2="33" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<path d="M 250,80 A 20,20 0 0 0 236.8,61.2" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<text x="248" y="68" font-size="10" font-weight="700" fill="#2563eb">70°</text>' +
        '<path d="M 238.9,55.6 A 26,26 0 0 0 204,80" fill="none" stroke="#dc2626" stroke-width="2"/>' +
        '<text x="215" y="63" font-size="10" font-weight="700" fill="#dc2626">110°</text>' +
        '<path d="M 210,80 A 20,20 0 0 0 223.2,98.8" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<text x="209" y="93" font-size="10" font-weight="700" fill="#16a34a">70°</text>' +
        '<circle cx="230" cy="80" r="2.5" fill="#0f1f3d"/>' +
        '</svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — PARALLELLE LYNE EN TRANSVERSALE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'parallel-lines-transversals',
      title: 'Parallelle Lyne en Transversale',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Transversaal</strong> is ʼn lyn wat twee parallelle lyne kruis. Dit skep pare gelyke hoeke — <strong>ooreenkomstige hoeke</strong> (dieselfde posisie by elke kruising) en <strong>verwisselende hoeke</strong> (teenoorgestelde kante van die transversaal, tussen die parallelle lyne). <strong>Kohoeke</strong>, aan dieselfde kant tussen die parallelle lyne, is supplementêr (tel op tot 180°).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('parallelle lyne')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('transversaal')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('ooreenkomstige hoeke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kohoeke')}</span>` +
        `</div>` +

        // ── Three angle relationships ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoekverwantskappe met parallelle lyne</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Ooreenkomstige hoeke')} — dieselfde posisie by elke kruising (een bo en een onder die parallelle lyne, aan dieselfde kant van die transversaal). Hulle is <strong>gelyk</strong>.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Verwisselende hoeke</strong> — aan teenoorgestelde kante van die ${re('transversaal')}, tussen die ${bl('parallelle lyne')}. Hulle is <strong>gelyk</strong>. Ook Z-hoeke genoem vanweë hul vorm.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Kohoeke')} — aan dieselfde kant van die ${re('transversaal')}, tussen die ${bl('parallelle lyne')}. Hulle tel op tot <strong>180°</strong> (supplementêr). Ook C-hoeke of binnehoeke aan dieselfde kant genoem.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om die verwantskap te identifiseer</p>` +
        `<p style="margin:0;color:#1e3a8a;">Bevestig eers dat die lyne ${bl('parallel')} is (met pyltjies gemerk). Kyk dan na die posisie van die hoeke relatief tot die ${re('transversaal')}: dieselfde kant en dieselfde posisie → ${gr('ooreenkomstig')} (gelyk); teenoorgestelde kante tussen die parallelle lyne → verwisselend (gelyk); dieselfde kant tussen die parallelle lyne → ${or('kohoeke')} (som = 180°).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny. Een ooreenkomstige hoek is 75°. Bepaal die ander ooreenkomstige hoek.',
          answer: `Die ander ${gr('ooreenkomstige hoek')} is ${gr('75°')}`,
          steps: [
            `Bevestig dat die lyne ${bl('parallel')} is en dat die hoeke by elke kruising in dieselfde posisie is — hulle is ${gr('ooreenkomstige hoeke')}.`,
            `${gr('Ooreenkomstige hoeke')} is gelyk wanneer lyne parallel is: die ander hoek = ${gr('75°')}.`,
            `<strong>Antwoord:</strong> Die ooreenkomstige hoek is ${gr('75°')} ✓`,
          ],
        },
        {
          question: 'ʼn Kohoek is 110°. Bepaal die ander kohoek.',
          answer: `Die ander ${or('kohoek')} is ${or('70°')}`,
          steps: [
            `Bevestig dat die lyne ${bl('parallel')} is en dat albei hoeke aan dieselfde kant van die ${re('transversaal')} is, tussen die parallelle lyne — hulle is ${or('kohoeke')}.`,
            `${or('Kohoeke')} is supplementêr: hulle tel op tot 180°.`,
            `Ander hoek = 180° − ${or('110°')} = ${or('70°')}`,
            `<strong>Toets:</strong> ${or('110°')} + ${or('70°')} = 180° ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny. ʼn Verwisselende hoek is 65°. Bepaal die ander verwisselende hoek.',
          answer: '65',
          checkMode: 'auto',
          correctAnswer: '65',
          explanation: 'Verwisselende hoeke is gelyk wanneer lyne parallel is: 65° = 65° ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny. Een van die hoeke wat gevorm word, is 48°.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bepaal die ooreenkomstige hoek.',
              correctAnswer: '48',
              explanation: 'Ooreenkomstige hoeke is gelyk: 48°.',
            },
            {
              label: 'b) Bepaal die verwisselende hoek.',
              correctAnswer: '48',
              explanation: 'Verwisselende hoeke is gelyk: 48°.',
            },
            {
              label: 'c) Bepaal die kohoek aan dieselfde kant.',
              correctAnswer: '132',
              explanation: 'Kohoeke is supplementêr: 180° − 48° = 132°.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny. Een kohoek is (2x + 10)° en die ander is (3x − 20)°.\n\na) Skryf ʼn vergelyking met behulp van die kohoek-eienskap.\nb) Los op vir x.\nc) Bepaal die grootte van elke kohoek.\nd) Bepaal die ooreenkomstige hoek van die kleiner kohoek.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vergelyking',
              correctAnswer: '2x+10+3x-20=180',
              correctAnswers: ['2x+10+3x-20=180', '5x-10=180', '(2x+10)+(3x-20)=180'],
              explanation: 'Kohoeke is supplementêr: (2x + 10) + (3x − 20) = 180.',
            },
            {
              label: 'b) Waarde van x',
              correctAnswer: '38',
              explanation: '5x − 10 = 180 → 5x = 190 → x = 38.',
            },
            {
              label: 'c) Elke kohoek',
              correctAnswer: '86 and 94',
              correctAnswers: ['86 and 94', '86° and 94°', '94 and 86'],
              explanation: '2(38) + 10 = 86°; 3(38) − 20 = 94°. Toets: 86 + 94 = 180 ✓',
            },
            {
              label: 'd) Ooreenkomstige hoek van die kleiner kohoek (86°)',
              correctAnswer: '86',
              explanation: 'Ooreenkomstige hoeke is gelyk: 86°.',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat ooreenkomstige, verwisselende en kohoeke identifiseer wat gevorm word deur ʼn transversaal wat twee parallelle lyne sny',

      diagramPlaceholder:
        'Twee parallelle lyne gesny deur ʼn transversaal, met die parallelle lyne in blou, die transversaal in rooi, een paar ooreenkomstige hoeke uitgelig in groen en een paar kohoeke uitgelig in oranje.',

      diagramSvg:
        '<svg viewBox="0 0 240 175" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="20" y1="50" x2="220" y2="50" stroke="#2563eb" stroke-width="2.2"/>' +
        '<polyline points="135,44 141,50 135,56" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="20" y1="130" x2="220" y2="130" stroke="#2563eb" stroke-width="2.2"/>' +
        '<polyline points="135,124 141,130 135,136" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="40" y1="20" x2="200" y2="160" stroke="#dc2626" stroke-width="2.2"/>' +
        '<path d="M 89.34,63.17 A 20,20 0 0 1 54.29,50" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<path d="M 145.71,130 A 20,20 0 0 1 150.66,116.83" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<path d="M 59.24,36.83 A 20,20 0 0 1 94.29,50" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<path d="M 150.66,116.83 A 20,20 0 0 1 185.71,130" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<circle cx="74.29" cy="50" r="2.5" fill="#0f1f3d"/>' +
        '<circle cx="165.71" cy="130" r="2.5" fill="#0f1f3d"/>' +
        '<text x="24" y="38" font-size="9" font-weight="700" fill="#ea580c">kohoeke</text>' +
        '<text x="150" y="112" font-size="9" font-weight="700" fill="#16a34a">ooreenkomstig</text>' +
        '</svg>',
    },
  ],

  topicPractice: [
    // ── V1 Maklik — klassifiseer 35° ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Klassifiseer ʼn hoek van 35°.',
      answer: 'skerp',
      checkMode: 'auto',
      correctAnswer: 'skerp',
      explanation: '35° is kleiner as 90°, dus is dit ʼn skerp hoek.',
    },

    // ── V2 Maklik — klassifiseer 180° ───────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Klassifiseer ʼn hoek van 180°.',
      answer: 'gestrek',
      checkMode: 'auto',
      correctAnswer: 'gestrek',
      explanation: '180° vorm ʼn reguit lyn, dus is dit ʼn gestrekte hoek.',
    },

    // ── V3 Medium — klassifiseer 250° ───────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Klassifiseer ʼn hoek van 250°.',
      answer: 'refleks',
      checkMode: 'auto',
      correctAnswer: 'refleks',
      explanation: '250° is tussen 180° en 360°, dus is dit ʼn refleks hoek.',
    },

    // ── V4 Hard — Sipho: 90° is skerp ───────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê ʼn hoek van 90° is skerp omdat dit klein is. Is hy korrek? Verduidelik.',
      answer: 'Nee — presies 90° word as ʼn regte hoek geklassifiseer, nie as skerp nie. Skerp hoeke moet streng kleiner as 90° wees.',
      checkMode: 'self',
    },

    // ── V5 Maklik — hoeke op ʼn reguit lyn ──────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Twee hoeke op ʼn reguit lyn is 110° en x. Bepaal x.',
      answer: '70°',
      checkMode: 'auto',
      correctAnswer: '70',
      explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°. x = 180° − 110° = 70° ✓',
    },

    // ── V6 Medium — vertikaal-oorstaande ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Twee lyne kruis en vorm ʼn hoek van 55°. Bepaal die vertikaal-oorstaande hoek.',
      answer: '55°',
      checkMode: 'auto',
      correctAnswer: '55',
      explanation: 'Vertikaal-oorstaande hoeke is gelyk: 55° ✓',
    },

    // ── V7 Hard — Lerato: vertikaal-oorstaande is supplementêr ─────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê vertikaal-oorstaande hoeke is altyd supplementêr. Is sy korrek? Verduidelik.',
      answer: 'Nee — vertikaal-oorstaande hoeke is altyd gelyk, nie supplementêr nie. Aangrensende hoeke op die lyn is supplementêr.',
      checkMode: 'self',
    },

    // ── V8 Maklik — ooreenkomstige hoeke ────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Twee parallelle lyne word deur ʼn transversaal gesny. Een ooreenkomstige hoek is 60°. Bepaal die ander ooreenkomstige hoek.',
      answer: '60°',
      checkMode: 'auto',
      correctAnswer: '60',
      explanation: 'Ooreenkomstige hoeke is gelyk wanneer lyne parallel is: 60° ✓',
    },

    // ── V9 Medium — kohoeke ─────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Kohoek is 95°. Bepaal die ander kohoek.',
      answer: '85°',
      checkMode: 'auto',
      correctAnswer: '85',
      explanation: 'Kohoeke tel op tot 180°. Ander hoek = 180° − 95° = 85° ✓',
    },

    // ── V10 Hard — Thabo: verwisselende hoeke is supplementêr ──────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê verwisselende hoeke tussen parallelle lyne is altyd supplementêr. Is hy korrek? Verduidelik.',
      answer: 'Nee — verwisselende hoeke is altyd gelyk, nie supplementêr nie.',
      checkMode: 'self',
    },

    // ── V11 Medium — hoeke rondom ʼn punt ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vier hoeke ontmoet by ʼn punt — 90°, 85°, 95° en x. Bepaal x.',
      answer: '90°',
      checkMode: 'auto',
      correctAnswer: '90',
      explanation: 'Hoeke rondom ʼn punt tel op tot 360°. x = 360° − 90° − 85° − 95° = 90° ✓',
    },

    // ── V12 Hard — Amahle: hoeke op ʼn reguit lyn in verhouding 2:3 ─────────
    {
      difficulty: 'Hard',
      question: 'Amahle vind dat twee hoeke op ʼn reguit lyn in die verhouding 2:3 is. Bepaal elke hoek.',
      answer: 'Totale dele = 5. Een deel = 180 ÷ 5 = 36. Hoeke: 72° en 108°.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het meetkunde van reguit lyne bemeester.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer, werk weer deur die studiegids.' },
    ],
  },

  scoreMessages: [
    { minScore: 18, message: 'Uitstekend! ʼn Volpunt — jy het meetkunde van reguit lyne vir Graad 7 heeltemal bemeester. Hou so aan!' },
    { minScore: 14, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van hoekmeetkunde. Gaan weer deur enige gemiste dele en jy sal dit perfek kry.' },
    { minScore: 10, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 6, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: 'Moenie tou opgooi nie — elke kenner was eers ʼn beginner! Gaan weer deur die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling, en probeer dan weer.' },
  ],

  // ═══════════════════════════════════════════════════════════════════════
  // OEFENSTELLE — 3 parallelle vorme, 20 vrae elk
  // Bloklaaiuit (dieselfde relatiewe posisie in elke stel):
  //   0-2   Hoeke op ʼn reguit lyn (supplementêr, tel op tot 180°)
  //   3-6   Hoeke rondom ʼn punt (tel op tot 360°) en vertikaal-oorstaande hoeke
  //   7-8   Komplementêre hoeke (tel op tot 90°)
  //   9-12  Ooreenkomstige en verwisselende hoeke met parallelle lyne
  //   13-16 Kohoeke met parallelle lyne
  //   17-19 Multi-stap redenering wat verskeie hoekverwantskappe kombineer
  // ═══════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // ── Blok 1: Hoeke op ʼn reguit lyn (0-2) ───────────────────────────
        {
          difficulty: 'Easy',
          question: 'In die diagram lê hoeke A en B op ʼn reguit lyn, soos getoon. Hoek A = 125°. Bepaal die grootte van hoek B.',
          checkMode: 'auto',
          correctAnswer: '55',
          correctAnswers: ['55', '55°'],
          explanation: 'Hoeke op ʼn reguit lyn is supplementêr — hulle tel op tot 180°.\nHoek B = 180° − 125° = 55°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="150" x2="175.96" y2="55.8" stroke="#0f1f3d" stroke-width="2"/><path d="M 58 150 A 52 52 0 0 1 139.83 107.4" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92.71" y="116.79" font-size="15" font-weight="700" text-anchor="middle" fill="#2563eb">125°</text><path d="M 142 150 A 32 32 0 0 0 128.35 123.79" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="145.48" y="131.53" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="110" cy="150" r="2.5" fill="#0f1f3d"/><text x="10" y="145" font-size="12" fill="#374151">A</text><text x="195" y="145" font-size="12" fill="#374151">B</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Drie hoeke ontmoet op ʼn reguit lyn, soos getoon. Hulle is 42°, 58° en x. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '80',
          correctAnswers: ['80', '80°'],
          explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°.\nx = 180° − 42° − 58° = 180° − 100° = 80°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="150" x2="210" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="150" x2="185.46" y2="73.05" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="150" x2="39.06" y2="52.47" stroke="#0f1f3d" stroke-width="2"/><path d="M 138 150 A 38 38 0 0 0 128.24 124.57" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="146.12" y="132.3" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">42°</text><path d="M 62 150 A 38 38 0 0 1 79.86 117.77" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="56.79" y="126.05" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">58°</text><path d="M 126.75 125.91 A 36 36 0 0 0 80.92 119.47" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="106.76" y="101.87" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="100" cy="150" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee hoeke op ʼn reguit lyn is in die verhouding 2 : 3. Bepaal die grootte van elke hoek.',
          checkMode: 'auto',
          correctAnswer: '72 and 108',
          correctAnswers: ['72 and 108', '72° and 108°', '108 and 72', '108° and 72°', '72 en 108', '108 en 72'],
          explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°. Totale dele = 2 + 3 = 5.\nEen deel = 180° ÷ 5 = 36°.\nHoeke: 2 × 36° = 72° en 3 × 36° = 108°. Toets: 72° + 108° = 180° ✓',
        },

        // ── Blok 2: Hoeke rondom ʼn punt & vertikaal-oorstaande (3-6) ─────
        {
          difficulty: 'Easy',
          question: 'Twee reguit lyne sny mekaar by ʼn punt, soos getoon. Een van die hoeke wat gevorm word, is 47°. Bepaal die grootte van die hoek wat vertikaal-oorstaande daaraan is.',
          checkMode: 'auto',
          correctAnswer: '47',
          correctAnswers: ['47', '47°'],
          explanation: 'Vertikaal-oorstaande hoeke is altyd gelyk.\nVertikaal-oorstaande hoek = 47°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="73.32" y1="10.63" x2="146.68" y2="179.37" stroke="#0f1f3d" stroke-width="2"/><line x1="146.68" y1="10.63" x2="73.32" y2="179.37" stroke="#0f1f3d" stroke-width="2"/><path d="M 94.05 58.32 A 40 40 0 0 1 125.95 58.32" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="110" y="43" font-size="15" font-weight="700" text-anchor="middle" fill="#2563eb">47°</text><path d="M 125.95 131.68 A 40 40 0 0 1 94.05 131.68" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="110" y="147" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee reguit lyne sny mekaar by ʼn punt. Een van die hoeke wat gevorm word, is 47°. Bepaal die grootte van die twee hoeke wat aangrensend daaraan is op die reguit lyn.',
          checkMode: 'auto',
          correctAnswer: '133',
          correctAnswers: ['133', '133°'],
          explanation: 'Aangrensende hoeke op ʼn reguit lyn is supplementêr.\nAangrensende hoek = 180° − 47° = 133°. Albei aangrensende hoeke is gelyk aan 133°.',
        },
        {
          difficulty: 'Medium',
          question: 'Vier hoeke ontmoet by ʼn punt, soos getoon. Hulle is 90°, 85°, 95° en x. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '90',
          correctAnswers: ['90', '90°'],
          explanation: 'Hoeke rondom ʼn punt tel op tot 360°.\nx = 360° − 90° − 85° − 95° = 360° − 270° = 90°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="95" x2="190" y2="95" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="30.3" y2="88.03" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="110" y2="175" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 95 A 30 30 0 0 0 110 65" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="140.76" y="64.24" font-size="12" font-weight="700" text-anchor="middle" fill="#2563eb">90°</text><path d="M 110 65 A 30 30 0 0 0 80.11 92.39" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="80.61" y="62.93" font-size="12" font-weight="700" text-anchor="middle" fill="#2563eb">85°</text><path d="M 80.11 92.39 A 30 30 0 0 0 110 125" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="77.93" y="124.39" font-size="12" font-weight="700" text-anchor="middle" fill="#2563eb">95°</text><path d="M 110 125 A 30 30 0 0 0 140 95" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="140.76" y="125.76" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Ses gelyke hoeke ontmoet by ʼn enkele punt en verdeel die volle draai eweredig. Wat is die grootte van elke hoek?',
          checkMode: 'auto',
          correctAnswer: '60',
          correctAnswers: ['60', '60°'],
          explanation: 'Hoeke rondom ʼn punt tel op tot 360°. Met 6 gelyke hoeke is elkeen 360° ÷ 6 = 60°.',
        },

        // ── Blok 3: Komplementêre hoeke (7-8) ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Twee hoeke is komplementêr. Een van die hoeke is 34°. Bepaal die grootte van die ander hoek.',
          checkMode: 'auto',
          correctAnswer: '56',
          correctAnswers: ['56', '56°'],
          explanation: 'Komplementêre hoeke tel op tot 90°.\nAnder hoek = 90° − 34° = 56°.',
        },
        {
          difficulty: 'Medium',
          question: 'Twee komplementêre hoeke is gelyk aan mekaar. Bepaal die grootte van elke hoek.',
          checkMode: 'auto',
          correctAnswer: '45',
          correctAnswers: ['45', '45°'],
          explanation: 'Komplementêre hoeke tel op tot 90°. As die twee hoeke gelyk is, is elkeen 90° ÷ 2 = 45°.',
        },

        // ── Blok 4: Ooreenkomstige en verwisselende hoeke (9-12) ───────────
        {
          difficulty: 'Easy',
          question: 'Lyne PQ en RS is parallel en word deur ʼn transversaal gesny, soos getoon. Een hoek wat gevorm word, is 73°. Bepaal die grootte van sy ooreenkomstige hoek.',
          checkMode: 'auto',
          correctAnswer: '73',
          correctAnswers: ['73', '73°'],
          explanation: 'Ooreenkomstige hoeke wat deur ʼn transversaal gevorm word wat parallelle lyne sny, is gelyk.\nOoreenkomstige hoek = 73°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="137.52" y1="10" x2="82.48" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 151.76 55 A 28 28 0 0 1 131.94 28.22" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="154.14" y="32.52" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">73°</text><path d="M 124.24 145 A 28 28 0 0 1 104.43 118.22" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="126.63" y="122.52" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="123.76" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="96.24" cy="145" r="2.5" fill="#0f1f3d"/><text x="10" y="45" font-size="11" fill="#374151">P</text><text x="195" y="45" font-size="11" fill="#374151">Q</text><text x="10" y="135" font-size="11" fill="#374151">R</text><text x="195" y="135" font-size="11" fill="#374151">S</text></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een hoek wat gevorm word, is 108°. Bepaal die grootte van sy verwisselende hoek.',
          checkMode: 'auto',
          correctAnswer: '108',
          correctAnswers: ['108', '108°'],
          explanation: 'Verwisselende hoeke wat deur ʼn transversaal gevorm word wat parallelle lyne sny, is gelyk.\nVerwisselende hoek = 108°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="80.76" y1="10" x2="139.24" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 67.38 55 A 28 28 0 0 0 104.03 81.63" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="73.16" y="85.58" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">108°</text><path d="M 152.62 145 A 28 28 0 0 1 115.97 118.37" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="146.84" y="114.42" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="95.38" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="124.62" cy="145" r="2.5" fill="#0f1f3d"/><text x="10" y="45" font-size="11" fill="#374151">P</text><text x="195" y="45" font-size="11" fill="#374151">Q</text><text x="10" y="135" font-size="11" fill="#374151">R</text><text x="195" y="135" font-size="11" fill="#374151">S</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een ooreenkomstige hoek is 3x en die ander ooreenkomstige hoek is 63°. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '21',
          correctAnswers: ['21'],
          explanation: 'Ooreenkomstige hoeke is gelyk: 3x = 63°.\nx = 63° ÷ 3 = 21°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="155.86" y1="10" x2="64.14" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 160.93 55 A 28 28 0 0 1 145.64 30.05" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="165.16" y="35.25" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">3x°</text><path d="M 115.07 145 A 28 28 0 0 1 99.78 120.05" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="119.3" y="125.25" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">63°</text><circle cx="132.93" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="87.07" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Musa sê: "As twee parallelle lyne deur ʼn transversaal gesny word, kan ʼn verwisselende hoek en sy ooreenstemmende ooreenkomstige hoek nooit gelyk aan mekaar wees nie." Is Musa korrek? Verduidelik, met ʼn hoek van 55° as voorbeeld.',
          answer: 'Nee — Musa is verkeerd. As een hoek 55° is, is beide die ooreenkomstige hoek en die verwisselende hoek wat daarmee gevorm word, ook 55°, want ooreenkomstige hoeke is gelyk en verwisselende hoeke is gelyk. Trouens, die ooreenkomstige hoek en die verwisselende hoek in hierdie situasie is ook gelyk aan mekaar (albei 55°), aangesien hulle by dieselfde kruisingspunt op die tweede parallelle lyn gevorm word.',
          checkMode: 'self',
        },

        // ── Blok 5: Kohoeke (13-16) ────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een kohoek is 115°. Bepaal die grootte van die ander kohoek.',
          checkMode: 'auto',
          correctAnswer: '65',
          correctAnswers: ['65', '65°'],
          explanation: 'Kohoeke is supplementêr — hulle tel op tot 180°.\nAnder hoek = 180° − 115° = 65°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="151.97" y1="10" x2="68.03" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 158.98 55 A 28 28 0 0 1 119.15 80.38" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="151.29" y="86.88" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">115°</text><path d="M 117.02 145 A 28 28 0 0 1 100.85 119.62" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="120.9" y="124.69" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="130.98" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="89.02" cy="145" r="2.5" fill="#0f1f3d"/><text x="10" y="45" font-size="11" fill="#374151">P</text><text x="195" y="45" font-size="11" fill="#374151">Q</text><text x="10" y="135" font-size="11" fill="#374151">R</text><text x="195" y="135" font-size="11" fill="#374151">S</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Leer rus so dat dit ʼn transversaal oor twee parallelle sporte van ʼn rakraamwerk vorm. Die kohoek aan een kant is 72°. Bepaal die kohoek aan dieselfde kant van die transversaal tussen die ander paar.',
          checkMode: 'auto',
          correctAnswer: '108',
          correctAnswers: ['108', '108°'],
          explanation: 'Kohoeke tussen parallelle lyne is supplementêr.\nAnder hoek = 180° − 72° = 108°.',
        },
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny. Een kohoek is (2x + 10)° en die ander is (x + 20)°.\na) Skryf ʼn vergelyking met behulp van die kohoek-eienskap.\nb) Los op vir x.\nc) Bepaal die grootte van elke kohoek.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vergelyking',
              correctAnswer: '2x+10+x+20=180',
              correctAnswers: ['2x+10+x+20=180', '3x+30=180', '(2x+10)+(x+20)=180'],
              explanation: 'Kohoeke is supplementêr: (2x + 10) + (x + 20) = 180.',
            },
            {
              label: 'b) Waarde van x',
              correctAnswer: '50',
              explanation: '3x + 30 = 180 → 3x = 150 → x = 50.',
            },
            {
              label: 'c) Elke kohoek',
              correctAnswer: '110 and 70',
              correctAnswers: ['110 and 70', '110° and 70°', '70 and 110', '110 en 70', '70 en 110'],
              explanation: '2(50) + 10 = 110°; 50 + 20 = 70°. Toets: 110° + 70° = 180° ✓',
            },
          ],
        },
        {
          difficulty: 'Medium',
          question: 'Palesa sê: "Kohoeke is altyd gelyk, net soos ooreenkomstige hoeke." Is sy korrek? Gebruik ʼn kohoek van 99° as voorbeeld om te verduidelik.',
          answer: 'Nee — Palesa is verkeerd. Kohoeke is supplementêr, nie gelyk nie — hulle tel op tot 180°. As een kohoek 99° is, is die ander 180° − 99° = 81°, nie 99° nie. Ooreenkomstige hoeke is gelyk, maar kohoeke is nie.',
          checkMode: 'self',
        },

        // ── Blok 6: Multi-stap redenering (17-19) ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. ʼn Hoek gevorm waar die transversaal die eerste lyn kruis, is 115°. Bepaal die kohoek op die tweede lyn, en bepaal dan die hoek wat vertikaal-oorstaande aan daardie kohoek is.',
          checkMode: 'auto',
          correctAnswer: '65',
          correctAnswers: ['65', '65°'],
          explanation: 'Stap 1: Die kohoek is supplementêr tot 115°: 180° − 115° = 65°.\nStap 2: Die hoek wat vertikaal-oorstaande aan hierdie 65°-hoek is, is daaraan gelyk (vertikaal-oorstaande hoeke is gelyk): 65°.\nFinale antwoord: 65°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="151.97" y1="10" x2="68.03" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 158.98 55 A 28 28 0 0 1 119.15 80.38" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="151.29" y="86.88" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">115°</text><path d="M 61.02 145 A 28 28 0 0 0 77.18 170.38" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="57.14" y="165.31" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="130.98" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="89.02" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Twee reguit lyne sny mekaar by punt O, soos getoon. Een van die hoeke wat gevorm word, hoek P, is 63°. Hoek P en hoek Q is vertikaal-oorstaande. Hoek Q en hoek R lê saam op ʼn reguit lyn. Bepaal die grootte van hoek R.',
          checkMode: 'auto',
          correctAnswer: '117',
          correctAnswers: ['117', '117°'],
          explanation: 'Stap 1: Hoek Q is vertikaal-oorstaande aan hoek P, dus Q = 63° (vertikaal-oorstaande hoeke is gelyk).\nStap 2: Q en R lê op ʼn reguit lyn, dus Q + R = 180°.\nR = 180° − 63° = 117°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="61.93" y1="16.56" x2="158.07" y2="173.44" stroke="#0f1f3d" stroke-width="2"/><line x1="158.07" y1="16.56" x2="61.93" y2="173.44" stroke="#0f1f3d" stroke-width="2"/><path d="M 89.1 60.89 A 40 40 0 0 1 130.9 60.89" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="110" y="43" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">P = 63°</text><path d="M 130.9 129.11 A 40 40 0 0 1 89.1 129.11" fill="none" stroke="#374151" stroke-width="1.5"/><text x="110" y="147" font-size="12" font-weight="700" text-anchor="middle" fill="#374151">Q</text><path d="M 89.1 129.11 A 40 40 0 0 1 89.1 60.89" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="58" y="95" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">R = ?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Dakspar het twee balke wat ʼn horisontale balk ontmoet, en vorm kohoeke aan weerskante van ʼn ondersteuningstut wat as transversaal tussen twee parallelle sparlyne optree. Een kohoek is 3x en die ander is (2x + 10)°.\na) Skryf ʼn vergelyking met behulp van die kohoek-eienskap.\nb) Los op vir x.\nc) Bepaal die grootte van elke hoek.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vergelyking',
              correctAnswer: '3x+2x+10=180',
              correctAnswers: ['3x+2x+10=180', '5x+10=180', '3x+(2x+10)=180'],
              explanation: 'Kohoeke is supplementêr: 3x + (2x + 10) = 180.',
            },
            {
              label: 'b) Waarde van x',
              correctAnswer: '34',
              explanation: '5x + 10 = 180 → 5x = 170 → x = 34.',
            },
            {
              label: 'c) Elke hoek',
              correctAnswer: '102 and 78',
              correctAnswers: ['102 and 78', '102° and 78°', '78 and 102', '102 en 78', '78 en 102'],
              explanation: '3(34) = 102°; 2(34) + 10 = 78°. Toets: 102° + 78° = 180° ✓',
            },
          ],
        },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het reguit-lyn-, punt-, komplementêre en parallelle-lyn-hoekverwantskappe bemeester.' },
        { minScore: 14, message: 'Uitstekende werk! Gaan weer deur enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiuit as Stel 1, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // ── Blok 1: Hoeke op ʼn reguit lyn (0-2) ───────────────────────────
        {
          difficulty: 'Easy',
          question: 'In die diagram lê hoeke C en D op ʼn reguit lyn, soos getoon. Hoek C = 97°. Bepaal die grootte van hoek D.',
          checkMode: 'auto',
          correctAnswer: '83',
          correctAnswers: ['83', '83°'],
          explanation: 'Hoeke op ʼn reguit lyn is supplementêr — hulle tel op tot 180°.\nHoek D = 180° − 97° = 83°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="150" x2="124.01" y2="35.86" stroke="#0f1f3d" stroke-width="2"/><path d="M 58 150 A 52 52 0 0 1 116.34 98.39" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="85.19" y="121.96" font-size="15" font-weight="700" text-anchor="middle" fill="#2563eb">97°</text><path d="M 142 150 A 32 32 0 0 0 113.9 118.24" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="139.96" y="123.5" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="110" cy="150" r="2.5" fill="#0f1f3d"/><text x="10" y="145" font-size="12" fill="#374151">C</text><text x="195" y="145" font-size="12" fill="#374151">D</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Drie hoeke ontmoet op ʼn reguit lyn, soos getoon. Hulle is 35°, 75° en x. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '70',
          correctAnswers: ['70', '70°'],
          explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°.\nx = 180° − 35° − 75° = 180° − 110° = 70°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="150" x2="210" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="150" x2="194.2" y2="84.04" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="150" x2="70.24" y2="38.92" stroke="#0f1f3d" stroke-width="2"/><path d="M 138 150 A 38 38 0 0 0 131.13 128.2" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="147.11" y="135.15" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">35°</text><path d="M 62 150 A 38 38 0 0 1 90.16 113.29" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="60.81" y="119.93" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">75°</text><path d="M 129.49 129.35 A 36 36 0 0 0 90.68 115.23" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="116.62" y="104.33" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="100" cy="150" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee hoeke op ʼn reguit lyn is (2x + 10)° en (3x − 10)°. Bepaal die waarde van x, en die grootte van elke hoek.',
          checkMode: 'auto',
          correctAnswer: 'x=36; 82 and 98',
          correctAnswers: ['x=36; 82 and 98', 'x=36, 82° en 98°', '36; 82 and 98', '82 and 98', 'x=36; 82 en 98'],
          explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°: (2x + 10) + (3x − 10) = 180.\n5x = 180 → x = 36.\nHoeke: 2(36) + 10 = 82° en 3(36) − 10 = 98°. Toets: 82° + 98° = 180° ✓',
        },

        // ── Blok 2: Hoeke rondom ʼn punt & vertikaal-oorstaande (3-6) ─────
        {
          difficulty: 'Easy',
          question: 'Twee reguit lyne sny mekaar by ʼn punt, soos getoon. Een van die hoeke wat gevorm word, is 132°. Bepaal die grootte van die hoek wat vertikaal-oorstaande daaraan is.',
          checkMode: 'auto',
          correctAnswer: '132',
          correctAnswers: ['132', '132°'],
          explanation: 'Vertikaal-oorstaande hoeke is altyd gelyk.\nVertikaal-oorstaande hoek = 132°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="25.95" y1="57.58" x2="194.05" y2="132.42" stroke="#0f1f3d" stroke-width="2"/><line x1="194.05" y1="57.58" x2="25.95" y2="132.42" stroke="#0f1f3d" stroke-width="2"/><path d="M 73.46 78.73 A 40 40 0 0 1 146.54 78.73" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="110" y="43" font-size="15" font-weight="700" text-anchor="middle" fill="#2563eb">132°</text><path d="M 146.54 111.27 A 40 40 0 0 1 73.46 111.27" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="110" y="147" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee reguit lyne sny mekaar by ʼn punt. Een van die hoeke wat gevorm word, is 132°. Bepaal die grootte van die twee hoeke wat aangrensend daaraan is op die reguit lyn.',
          checkMode: 'auto',
          correctAnswer: '48',
          correctAnswers: ['48', '48°'],
          explanation: 'Aangrensende hoeke op ʼn reguit lyn is supplementêr.\nAangrensende hoek = 180° − 132° = 48°. Albei aangrensende hoeke is gelyk aan 48°.',
        },
        {
          difficulty: 'Medium',
          question: 'Vier hoeke ontmoet by ʼn punt, soos getoon. Hulle is 100°, 75°, 110° en x. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '75',
          correctAnswers: ['75', '75°'],
          explanation: 'Hoeke rondom ʼn punt tel op tot 360°.\nx = 360° − 100° − 75° − 110° = 360° − 285° = 75°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="95" x2="190" y2="95" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="96.11" y2="16.22" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="30.3" y2="88.03" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="130.71" y2="172.27" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 95 A 30 30 0 0 0 104.79 65.46" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="137.96" y="61.68" font-size="12" font-weight="700" text-anchor="middle" fill="#2563eb">100°</text><path d="M 104.79 65.46 A 30 30 0 0 0 80.11 92.39" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="77.93" y="65.61" font-size="12" font-weight="700" text-anchor="middle" fill="#2563eb">75°</text><path d="M 80.11 92.39 A 30 30 0 0 0 117.76 123.98" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="82.04" y="128.32" font-size="12" font-weight="700" text-anchor="middle" fill="#2563eb">110°</text><path d="M 117.76 123.98 A 30 30 0 0 0 140 95" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="144.51" y="121.48" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Agt gelyke hoeke ontmoet by ʼn enkele punt en verdeel die volle draai eweredig. Wat is die grootte van elke hoek?',
          checkMode: 'auto',
          correctAnswer: '45',
          correctAnswers: ['45', '45°'],
          explanation: 'Hoeke rondom ʼn punt tel op tot 360°. Met 8 gelyke hoeke is elkeen 360° ÷ 8 = 45°.',
        },

        // ── Blok 3: Komplementêre hoeke (7-8) ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Twee hoeke is komplementêr. Een van die hoeke is 27°. Bepaal die grootte van die ander hoek.',
          checkMode: 'auto',
          correctAnswer: '63',
          correctAnswers: ['63', '63°'],
          explanation: 'Komplementêre hoeke tel op tot 90°.\nAnder hoek = 90° − 27° = 63°.',
        },
        {
          difficulty: 'Medium',
          question: 'Twee komplementêre hoeke is in die verhouding 1 : 2. Bepaal die grootte van elke hoek.',
          checkMode: 'auto',
          correctAnswer: '30 and 60',
          correctAnswers: ['30 and 60', '30° and 60°', '60 and 30', '60° and 30°', '30 en 60', '60 en 30'],
          explanation: 'Komplementêre hoeke tel op tot 90°. Totale dele = 1 + 2 = 3.\nEen deel = 90° ÷ 3 = 30°.\nHoeke: 1 × 30° = 30° en 2 × 30° = 60°. Toets: 30° + 60° = 90° ✓',
        },

        // ── Blok 4: Ooreenkomstige en verwisselende hoeke (9-12) ───────────
        {
          difficulty: 'Easy',
          question: 'Lyne EF en GH is parallel en word deur ʼn transversaal gesny, soos getoon. Een hoek wat gevorm word, is 84°. Bepaal die grootte van sy ooreenkomstige hoek.',
          checkMode: 'auto',
          correctAnswer: '84',
          correctAnswers: ['84', '84°'],
          explanation: 'Ooreenkomstige hoeke wat deur ʼn transversaal gevorm word wat parallelle lyne sny, is gelyk.\nOoreenkomstige hoek = 84°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="119.46" y1="10" x2="100.54" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 142.73 55 A 28 28 0 0 1 117.66 27.15" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="142.82" y="29.71" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">84°</text><path d="M 133.27 145 A 28 28 0 0 1 108.2 117.15" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="133.36" y="119.71" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="114.73" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="105.27" cy="145" r="2.5" fill="#0f1f3d"/><text x="10" y="45" font-size="11" fill="#374151">E</text><text x="195" y="45" font-size="11" fill="#374151">F</text><text x="10" y="135" font-size="11" fill="#374151">G</text><text x="195" y="135" font-size="11" fill="#374151">H</text></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een hoek wat gevorm word, is 126°. Bepaal die grootte van sy verwisselende hoek.',
          checkMode: 'auto',
          correctAnswer: '126',
          correctAnswers: ['126', '126°'],
          explanation: 'Verwisselende hoeke wat deur ʼn transversaal gevorm word wat parallelle lyne sny, is gelyk.\nVerwisselende hoek = 126°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="44.61" y1="10" x2="175.39" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 49.31 55 A 28 28 0 0 0 93.76 77.65" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="60.14" y="88.68" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">126°</text><path d="M 170.69 145 A 28 28 0 0 1 126.24 122.35" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="159.86" y="111.32" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="77.31" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="142.69" cy="145" r="2.5" fill="#0f1f3d"/><text x="10" y="45" font-size="11" fill="#374151">E</text><text x="195" y="45" font-size="11" fill="#374151">F</text><text x="10" y="135" font-size="11" fill="#374151">G</text><text x="195" y="135" font-size="11" fill="#374151">H</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een ooreenkomstige hoek is 4x en die ander ooreenkomstige hoek is 124°. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '31',
          correctAnswers: ['31'],
          explanation: 'Ooreenkomstige hoeke is gelyk: 4x = 124°.\nx = 124° ÷ 4 = 31°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="49.29" y1="10" x2="170.71" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 107.65 55 A 28 28 0 0 1 63.99 31.79" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="97.39" y="21.62" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">4x°</text><path d="M 168.35 145 A 28 28 0 0 1 124.7 121.79" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="158.1" y="111.62" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">124°</text><circle cx="79.65" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="140.35" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Bongani sê: "Verwisselende hoeke en ooreenkomstige hoeke is eintlik net verskillende name vir presies dieselfde paar hoeke." Is hy korrek? Verduidelik die verskil met behulp van ʼn diagram van twee parallelle lyne wat deur ʼn transversaal gesny word.',
          answer: 'Nee — Bongani is verkeerd. Ooreenkomstige hoeke is in dieselfde posisie by elke kruising (bv. albei boaan-regs), aan dieselfde kant van die transversaal. Verwisselende hoeke is aan teenoorgestelde kante van die transversaal, tussen die parallelle lyne (en vorm ʼn Z-vorm). Dit is verskillende pare hoeke, al is albei tipes gelyk aan mekaar wanneer die lyne parallel is.',
          checkMode: 'self',
        },

        // ── Blok 5: Kohoeke (13-16) ────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een kohoek is 128°. Bepaal die grootte van die ander kohoek.',
          checkMode: 'auto',
          correctAnswer: '52',
          correctAnswers: ['52', '52°'],
          explanation: 'Kohoeke is supplementêr — hulle tel op tot 180°.\nAnder hoek = 180° − 128° = 52°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="180.32" y1="10" x2="39.68" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 173.16 55 A 28 28 0 0 1 127.92 77.06" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="161.73" y="88.97" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">128°</text><path d="M 102.84 145 A 28 28 0 0 1 92.08 122.94" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="108.82" y="128.43" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="145.16" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="74.84" cy="145" r="2.5" fill="#0f1f3d"/><text x="10" y="45" font-size="11" fill="#374151">E</text><text x="195" y="45" font-size="11" fill="#374151">F</text><text x="10" y="135" font-size="11" fill="#374151">G</text><text x="195" y="135" font-size="11" fill="#374151">H</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Pad het twee parallelle baanmerke wat deur ʼn diagonale draaibaanlyn gesny word, wat as transversaal optree. Die kohoek aan een kant is 47°. Bepaal die kohoek aan dieselfde kant van die transversaal tussen die ander paar.',
          checkMode: 'auto',
          correctAnswer: '133',
          correctAnswers: ['133', '133°'],
          explanation: 'Kohoeke tussen parallelle lyne is supplementêr.\nAnder hoek = 180° − 47° = 133°.',
        },
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny. Een kohoek is (3x − 5)° en die ander is (x + 25)°.\na) Skryf ʼn vergelyking met behulp van die kohoek-eienskap.\nb) Los op vir x.\nc) Bepaal die grootte van elke kohoek.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vergelyking',
              correctAnswer: '3x-5+x+25=180',
              correctAnswers: ['3x-5+x+25=180', '4x+20=180', '(3x-5)+(x+25)=180'],
              explanation: 'Kohoeke is supplementêr: (3x − 5) + (x + 25) = 180.',
            },
            {
              label: 'b) Waarde van x',
              correctAnswer: '40',
              explanation: '4x + 20 = 180 → 4x = 160 → x = 40.',
            },
            {
              label: 'c) Elke kohoek',
              correctAnswer: '115 and 65',
              correctAnswers: ['115 and 65', '115° and 65°', '65 and 115', '115 en 65', '65 en 115'],
              explanation: '3(40) − 5 = 115°; 40 + 25 = 65°. Toets: 115° + 65° = 180° ✓',
            },
          ],
        },
        {
          difficulty: 'Medium',
          question: 'Thandi sê: "As ʼn kohoek 152° is, moet die ander kohoek ook stomp wees, want kohoeke is altyd dieselfde tipe." Is sy korrek? Verduidelik, met 152° as die gegewe hoek.',
          answer: 'Nee — Thandi is verkeerd. Kohoeke is supplementêr (hulle tel op tot 180°), nie dieselfde tipe nie. As een kohoek 152° is, is die ander 180° − 152° = 28°, wat skerp is, nie stomp nie. Wanneer een kohoek stomp is, is die ander altyd skerp (tensy albei 90° is).',
          checkMode: 'self',
        },

        // ── Blok 6: Multi-stap redenering (17-19) ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. ʼn Hoek gevorm waar die transversaal die eerste lyn kruis, is 100°. Bepaal die kohoek op die tweede lyn, en bepaal dan die hoek wat vertikaal-oorstaande aan daardie kohoek is.',
          checkMode: 'auto',
          correctAnswer: '80',
          correctAnswers: ['80', '80°'],
          explanation: 'Stap 1: Die kohoek is supplementêr tot 100°: 180° − 100° = 80°.\nStap 2: Die hoek wat vertikaal-oorstaande aan hierdie 80°-hoek is, is daaraan gelyk: 80°.\nFinale antwoord: 80°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="125.87" y1="10" x2="94.13" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 145.93 55 A 28 28 0 0 1 113.07 82.57" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="142.23" y="83.96" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">100°</text><path d="M 74.07 145 A 28 28 0 0 0 97.2 172.57" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="73.11" y="169.3" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="117.93" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="102.07" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Twee reguit lyne sny mekaar by punt O, soos getoon. Een van die hoeke wat gevorm word, hoek P, is 77°. Hoek P en hoek Q is vertikaal-oorstaande. Hoek Q en hoek R lê saam op ʼn reguit lyn. Bepaal die grootte van hoek R.',
          checkMode: 'auto',
          correctAnswer: '103',
          correctAnswers: ['103', '103°'],
          explanation: 'Stap 1: Hoek Q is vertikaal-oorstaande aan hoek P, dus Q = 77° (vertikaal-oorstaande hoeke is gelyk).\nStap 2: Q en R lê op ʼn reguit lyn, dus Q + R = 180°.\nR = 180° − 77° = 103°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="52.73" y1="23" x2="167.27" y2="167" stroke="#0f1f3d" stroke-width="2"/><line x1="167.27" y1="23" x2="52.73" y2="167" stroke="#0f1f3d" stroke-width="2"/><path d="M 85.1 63.7 A 40 40 0 0 1 134.9 63.7" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="110" y="43" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">P = 77°</text><path d="M 134.9 126.3 A 40 40 0 0 1 85.1 126.3" fill="none" stroke="#374151" stroke-width="1.5"/><text x="110" y="147" font-size="12" font-weight="700" text-anchor="middle" fill="#374151">Q</text><path d="M 85.1 126.3 A 40 40 0 0 1 85.1 63.7" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="58" y="95" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">R = ?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Boekrakstut word oor twee parallelle rakke vasgemaak en tree op as transversaal. Die ooreenkomstige hoek op die boonste rak is 132°. Bepaal die kohoek op die onderste rak wat aan dieselfde kant van die transversaal lê as hierdie ooreenkomstige hoek.',
          checkMode: 'auto',
          correctAnswer: '48',
          correctAnswers: ['48', '48°'],
          explanation: 'Stap 1: Die ooreenkomstige hoek op die onderste rak is gelyk aan die gegewe hoek (ooreenkomstige hoeke is gelyk): 132°.\nStap 2: Hierdie 132°-hoek en die kohoek aan dieselfde kant is supplementêr: 180° − 132° = 48°.\nFinale antwoord: 48°.',
        },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy kan reguit-lyn-, punt-, komplementêre en parallelle-lyn-hoekverwantskappe met selfvertroue toepas.' },
        { minScore: 14, message: 'Goeie werk! Gaan weer deur enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiuit, meer werklike kontekste + redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // ── Blok 1: Hoeke op ʼn reguit lyn (0-2) ───────────────────────────
        {
          difficulty: 'Easy',
          question: 'In die diagram lê hoeke E en F op ʼn reguit lyn, soos getoon. Hoek E = 118°. Bepaal die grootte van hoek F.',
          checkMode: 'auto',
          correctAnswer: '62',
          correctAnswers: ['62', '62°'],
          explanation: 'Hoeke op ʼn reguit lyn is supplementêr — hulle tel op tot 180°.\nHoek F = 180° − 118° = 62°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="150" x2="163.99" y2="48.46" stroke="#0f1f3d" stroke-width="2"/><path d="M 58 150 A 52 52 0 0 1 134.41 104.09" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="90.72" y="117.91" font-size="15" font-weight="700" text-anchor="middle" fill="#2563eb">118°</text><path d="M 142 150 A 32 32 0 0 0 125.02 121.75" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="144.29" y="129.4" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="110" cy="150" r="2.5" fill="#0f1f3d"/><text x="10" y="145" font-size="12" fill="#374151">E</text><text x="195" y="145" font-size="12" fill="#374151">F</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Drie hoeke ontmoet op ʼn reguit lyn, soos getoon. Hulle is 30°, 90° en x. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '60',
          correctAnswers: ['60', '60°'],
          explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°.\nx = 180° − 30° − 90° = 180° − 120° = 60°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="150" x2="210" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="150" x2="199.59" y2="92.5" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="150" x2="100" y2="35" stroke="#0f1f3d" stroke-width="2"/><path d="M 138 150 A 38 38 0 0 0 132.91 131" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="147.72" y="137.21" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">30°</text><path d="M 62 150 A 38 38 0 0 1 100 112" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="65.07" y="115.07" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">90°</text><path d="M 131.18 132 A 36 36 0 0 0 100 114" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="124.3" y="107.91" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="100" cy="150" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee hoeke op ʼn reguit lyn is in die verhouding 1 : 5. Bepaal die grootte van elke hoek.',
          checkMode: 'auto',
          correctAnswer: '30 and 150',
          correctAnswers: ['30 and 150', '30° and 150°', '150 and 30', '150° and 30°', '30 en 150', '150 en 30'],
          explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°. Totale dele = 1 + 5 = 6.\nEen deel = 180° ÷ 6 = 30°.\nHoeke: 1 × 30° = 30° en 5 × 30° = 150°. Toets: 30° + 150° = 180° ✓',
        },

        // ── Blok 2: Hoeke rondom ʼn punt & vertikaal-oorstaande (3-6) ─────
        {
          difficulty: 'Easy',
          question: 'Twee reguit lyne sny mekaar by ʼn punt, soos getoon. Een van die hoeke wat gevorm word, is 78°. Bepaal die grootte van die hoek wat vertikaal-oorstaande daaraan is.',
          checkMode: 'auto',
          correctAnswer: '78',
          correctAnswers: ['78', '78°'],
          explanation: 'Vertikaal-oorstaande hoeke is altyd gelyk.\nVertikaal-oorstaande hoek = 78°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="52.1" y1="23.5" x2="167.9" y2="166.5" stroke="#0f1f3d" stroke-width="2"/><line x1="167.9" y1="23.5" x2="52.1" y2="166.5" stroke="#0f1f3d" stroke-width="2"/><path d="M 84.83 63.91 A 40 40 0 0 1 135.17 63.91" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="110" y="43" font-size="15" font-weight="700" text-anchor="middle" fill="#2563eb">78°</text><path d="M 135.17 126.09 A 40 40 0 0 1 84.83 126.09" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="110" y="147" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee reguit lyne sny mekaar by ʼn punt. Een van die hoeke wat gevorm word, is 78°. Bepaal die grootte van die twee hoeke wat aangrensend daaraan is op die reguit lyn.',
          checkMode: 'auto',
          correctAnswer: '102',
          correctAnswers: ['102', '102°'],
          explanation: 'Aangrensende hoeke op ʼn reguit lyn is supplementêr.\nAangrensende hoek = 180° − 78° = 102°. Albei aangrensende hoeke is gelyk aan 102°.',
        },
        {
          difficulty: 'Medium',
          question: 'Vier hoeke ontmoet by ʼn punt, soos getoon. Hulle is 65°, 95°, 120° en x. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '80',
          correctAnswers: ['80', '80°'],
          explanation: 'Hoeke rondom ʼn punt tel op tot 360°.\nx = 360° − 65° − 95° − 120° = 360° − 280° = 80°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="95" x2="190" y2="95" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="143.81" y2="22.5" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="34.82" y2="67.64" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="123.89" y2="173.78" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 95 A 30 30 0 0 0 122.68 67.81" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="146.69" y="71.63" font-size="12" font-weight="700" text-anchor="middle" fill="#2563eb">65°</text><path d="M 122.68 67.81 A 30 30 0 0 0 81.81 84.74" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="93.35" y="54.81" font-size="12" font-weight="700" text-anchor="middle" fill="#2563eb">95°</text><path d="M 81.81 84.74 A 30 30 0 0 0 115.21 124.54" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="76.68" y="122.96" font-size="12" font-weight="700" text-anchor="middle" fill="#2563eb">120°</text><path d="M 115.21 124.54 A 30 30 0 0 0 140 95" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="143.32" y="122.96" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'ʼn Verkeersirkel het 5 paaie eweredig rondom sy middelpunt gespasieer, wat die volle draai in 5 gelyke hoeke verdeel. Wat is die grootte van elke hoek?',
          checkMode: 'auto',
          correctAnswer: '72',
          correctAnswers: ['72', '72°'],
          explanation: 'Hoeke rondom ʼn punt tel op tot 360°. Met 5 gelyke hoeke is elkeen 360° ÷ 5 = 72°.',
        },

        // ── Blok 3: Komplementêre hoeke (7-8) ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Twee hoeke is komplementêr. Een van die hoeke is 52°. Bepaal die grootte van die ander hoek.',
          checkMode: 'auto',
          correctAnswer: '38',
          correctAnswers: ['38', '38°'],
          explanation: 'Komplementêre hoeke tel op tot 90°.\nAnder hoek = 90° − 52° = 38°.',
        },
        {
          difficulty: 'Medium',
          question: 'Twee komplementêre hoeke is x en 2x. Bepaal die waarde van x en die grootte van elke hoek.',
          checkMode: 'auto',
          correctAnswer: 'x=30; 30 and 60',
          correctAnswers: ['x=30; 30 and 60', 'x=30, 30° en 60°', '30; 30 and 60', '30 and 60', 'x=30; 30 en 60'],
          explanation: 'Komplementêre hoeke tel op tot 90°: x + 2x = 90.\n3x = 90 → x = 30.\nHoeke: 30° en 2(30°) = 60°. Toets: 30° + 60° = 90° ✓',
        },

        // ── Blok 4: Ooreenkomstige en verwisselende hoeke (9-12) ───────────
        {
          difficulty: 'Easy',
          question: 'Lyne JK en LM is parallel en word deur ʼn transversaal gesny, soos getoon. Een hoek wat gevorm word, is 96°. Bepaal die grootte van sy ooreenkomstige hoek.',
          checkMode: 'auto',
          correctAnswer: '96',
          correctAnswers: ['96', '96°'],
          explanation: 'Ooreenkomstige hoeke wat deur ʼn transversaal gevorm word wat parallelle lyne sny, is gelyk.\nOoreenkomstige hoek = 96°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="100.54" y1="10" x2="119.46" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 133.27 55 A 28 28 0 0 1 102.34 27.15" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="130.56" y="26.91" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">96°</text><path d="M 142.73 145 A 28 28 0 0 1 111.8 117.15" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="140.02" y="116.91" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="105.27" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="114.73" cy="145" r="2.5" fill="#0f1f3d"/><text x="10" y="45" font-size="11" fill="#374151">J</text><text x="195" y="45" font-size="11" fill="#374151">K</text><text x="10" y="135" font-size="11" fill="#374151">L</text><text x="195" y="135" font-size="11" fill="#374151">M</text></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een hoek wat gevorm word, is 61°. Bepaal die grootte van sy verwisselende hoek.',
          checkMode: 'auto',
          correctAnswer: '61',
          correctAnswers: ['61', '61°'],
          explanation: 'Verwisselende hoeke wat deur ʼn transversaal gevorm word wat parallelle lyne sny, is gelyk.\nVerwisselende hoek = 61°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="159.89" y1="10" x2="60.11" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 106.94 55 A 28 28 0 0 0 121.37 79.49" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="102.37" y="74.18" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">61°</text><path d="M 113.06 145 A 28 28 0 0 1 98.63 120.51" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="117.63" y="125.82" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="134.94" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="85.06" cy="145" r="2.5" fill="#0f1f3d"/><text x="10" y="45" font-size="11" fill="#374151">J</text><text x="195" y="45" font-size="11" fill="#374151">K</text><text x="10" y="135" font-size="11" fill="#374151">L</text><text x="195" y="135" font-size="11" fill="#374151">M</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een ooreenkomstige hoek is 5x en die ander ooreenkomstige hoek is 115°. Bepaal die waarde van x.',
          checkMode: 'auto',
          correctAnswer: '23',
          correctAnswers: ['23'],
          explanation: 'Ooreenkomstige hoeke is gelyk: 5x = 115°.\nx = 115° ÷ 5 = 23°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="68.03" y1="10" x2="151.97" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 117.02 55 A 28 28 0 0 1 77.18 29.62" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="109.33" y="23.12" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">5x°</text><path d="M 158.98 145 A 28 28 0 0 1 119.15 119.62" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="151.29" y="113.12" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">115°</text><circle cx="89.02" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="130.98" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Sindiso beweer: "Ooreenkomstige hoeke is slegs gelyk as die transversaal die parallelle lyne teen presies 90° sny." Is hy korrek? Gebruik ʼn hoek van 142° om jou antwoord te verduidelik.',
          answer: 'Nee — Sindiso is verkeerd. Ooreenkomstige hoeke is gelyk wanneer die twee lyne wat gesny word parallel is, ongeag watter hoek die transversaal met hulle vorm. As een hoek byvoorbeeld 142° is, is sy ooreenkomstige hoek ook 142°, selfs al is die transversaal nie loodreg op die parallelle lyne nie.',
          checkMode: 'self',
        },

        // ── Blok 5: Kohoeke (13-16) ────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. Een kohoek is 101°. Bepaal die grootte van die ander kohoek.',
          checkMode: 'auto',
          correctAnswer: '79',
          correctAnswers: ['79', '79°'],
          explanation: 'Kohoeke is supplementêr — hulle tel op tot 180°.\nAnder hoek = 180° − 101° = 79°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="127.49" y1="10" x2="92.51" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 146.75 55 A 28 28 0 0 1 113.4 82.49" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="142.79" y="84.17" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">101°</text><path d="M 129.25 145 A 28 28 0 0 1 106.6 117.51" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="130.42" y="120.96" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="118.75" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="101.25" cy="145" r="2.5" fill="#0f1f3d"/><text x="10" y="45" font-size="11" fill="#374151">J</text><text x="195" y="45" font-size="11" fill="#374151">K</text><text x="10" y="135" font-size="11" fill="#374151">L</text><text x="195" y="135" font-size="11" fill="#374151">M</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Vensterraam het twee parallelle horisontale stawe wat deur ʼn diagonale steunstaaf gesny word, wat as transversaal optree. Die kohoek aan een kant is 66°. Bepaal die kohoek aan dieselfde kant van die transversaal tussen die ander paar.',
          checkMode: 'auto',
          correctAnswer: '114',
          correctAnswers: ['114', '114°'],
          explanation: 'Kohoeke tussen parallelle lyne is supplementêr.\nAnder hoek = 180° − 66° = 114°.',
        },
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny. Een kohoek is (2x + 30)° en die ander is 2x°.\na) Skryf ʼn vergelyking met behulp van die kohoek-eienskap.\nb) Los op vir x.\nc) Bepaal die grootte van elke kohoek.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vergelyking',
              correctAnswer: '2x+30+2x=180',
              correctAnswers: ['2x+30+2x=180', '4x+30=180', '(2x+30)+2x=180'],
              explanation: 'Kohoeke is supplementêr: (2x + 30) + 2x = 180.',
            },
            {
              label: 'b) Waarde van x',
              correctAnswer: '37,5',
              correctAnswers: ['37,5', '37.5'],
              explanation: '4x + 30 = 180 → 4x = 150 → x = 37,5.',
            },
            {
              label: 'c) Elke kohoek',
              correctAnswer: '105 and 75',
              correctAnswers: ['105 and 75', '105° and 75°', '75 and 105', '105 en 75', '75 en 105'],
              explanation: '2(37,5) + 30 = 105°; 2(37,5) = 75°. Toets: 105° + 75° = 180° ✓',
            },
          ],
        },
        {
          difficulty: 'Medium',
          question: 'Karabo sê: "ʼn Hoek van 88° en ʼn kohoek van 92° kan nie albei waar wees nie, want 88° en 92° is amper gelyk, nie supplementêr nie." Is sy korrek? Wys ʼn toets met optelling.',
          answer: 'Nee — Karabo is verkeerd. 88° en 92° IS supplementêr, want 88° + 92° = 180°. Twee hoeke wat na aan mekaar in grootte is, verhoed nie dat hulle op tot 180° kan optel nie — die kohoek-reël vereis net dat die twee hoeke op tot 180° optel, nie dat hulle baie verskillend van mekaar lyk nie.',
          checkMode: 'self',
        },

        // ── Blok 6: Multi-stap redenering (17-19) ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, soos getoon. ʼn Hoek gevorm waar die transversaal die eerste lyn kruis, het ʼn verwisselende hoek van 74° op die tweede lyn. Bepaal die kohoek wat aan dieselfde kant van die transversaal lê as hierdie verwisselende hoek, tussen die twee parallelle lyne.',
          checkMode: 'auto',
          correctAnswer: '106',
          correctAnswers: ['106', '106°'],
          explanation: 'Stap 1: Die verwisselende hoek is gelyk aan die oorspronklike hoek (verwisselende hoeke is gelyk): 74°.\nStap 2: Die kohoek aan dieselfde kant as hierdie 74°-hoek is daartoe supplementêr: 180° − 74° = 106°.\nFinale antwoord: 106°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="135.81" y1="10" x2="84.19" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 125.1 145 A 28 28 0 0 1 104.81 118.08" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="127.28" y="122.25" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">74°</text><path d="M 150.9 55 A 28 28 0 0 1 115.19 81.92" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="145.65" y="85.19" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">?</text><circle cx="122.9" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="97.1" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Twee reguit lyne sny mekaar by punt O, soos getoon. Een van die hoeke wat gevorm word, hoek P, is 48°. Hoek P en hoek Q is vertikaal-oorstaande. Hoek Q en hoek R lê saam op ʼn reguit lyn. Bepaal die grootte van hoek R.',
          checkMode: 'auto',
          correctAnswer: '132',
          correctAnswers: ['132', '132°'],
          explanation: 'Stap 1: Hoek Q is vertikaal-oorstaande aan hoek P, dus Q = 48° (vertikaal-oorstaande hoeke is gelyk).\nStap 2: Q en R lê op ʼn reguit lyn, dus Q + R = 180°.\nR = 180° − 48° = 132°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="72.58" y1="10.95" x2="147.42" y2="179.05" stroke="#0f1f3d" stroke-width="2"/><line x1="147.42" y1="10.95" x2="72.58" y2="179.05" stroke="#0f1f3d" stroke-width="2"/><path d="M 93.73 58.46 A 40 40 0 0 1 126.27 58.46" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="110" y="43" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">P = 48°</text><path d="M 126.27 131.54 A 40 40 0 0 1 93.73 131.54" fill="none" stroke="#374151" stroke-width="1.5"/><text x="110" y="147" font-size="12" font-weight="700" text-anchor="middle" fill="#374151">Q</text><path d="M 93.73 131.54 A 40 40 0 0 1 93.73 58.46" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="58" y="95" font-size="15" font-weight="700" text-anchor="middle" fill="#ea580c">R = ?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Padmerke wys twee parallelle baanlyne wat deur ʼn diagonale samevoegingslyn gesny word, wat as transversaal optree. Een kohoek is 4x en die ander is (2x + 30)°.\na) Skryf ʼn vergelyking met behulp van die kohoek-eienskap.\nb) Los op vir x.\nc) Bepaal die grootte van elke hoek.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vergelyking',
              correctAnswer: '4x+2x+30=180',
              correctAnswers: ['4x+2x+30=180', '6x+30=180', '4x+(2x+30)=180'],
              explanation: 'Kohoeke is supplementêr: 4x + (2x + 30) = 180.',
            },
            {
              label: 'b) Waarde van x',
              correctAnswer: '25',
              explanation: '6x + 30 = 180 → 6x = 150 → x = 25.',
            },
            {
              label: 'c) Elke hoek',
              correctAnswer: '100 and 80',
              correctAnswers: ['100 and 80', '100° and 80°', '80 and 100', '100 en 80', '80 en 100'],
              explanation: '4(25) = 100°; 2(25) + 30 = 80°. Toets: 100° + 80° = 180° ✓',
            },
          ],
        },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Fantasties! Jy kan reguit-lyn-, punt-, komplementêre en parallelle-lyn-hoekverwantskappe op werklike probleme toepas.' },
        { minScore: 14, message: 'Goeie werk! Gaan weer deur enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
