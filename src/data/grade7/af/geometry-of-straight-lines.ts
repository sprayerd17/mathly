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
        '<VideoPlaceholder label="Short video classifying acute right obtuse straight and reflex angles with examples from diagrams" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Five angle diagrams labelled acute right obtuse straight and reflex with colour coding acute blue right green obtuse orange reflex red" />',
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
        '<VideoPlaceholder label="Short video showing how to find unknown angles using angles on a straight line 180 degrees and vertically opposite angles" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Two diagrams: one showing angles on a straight line adding to 180 with given angle blue and unknown angle red, one showing two intersecting lines with vertically opposite angles highlighted green" />',
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
        '<VideoPlaceholder label="Short video identifying corresponding alternate and co-interior angles formed by a transversal cutting two parallel lines" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two parallel lines cut by a transversal with corresponding angles highlighted green co-interior angles orange parallel lines blue transversal red" />',
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
}
