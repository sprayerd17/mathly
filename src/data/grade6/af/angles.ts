import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (angle roles) ────────────────────────────────────────────
// acute / vertex / known angles → blue   (#2563eb)
// right / baseline              → green  (#16a34a)
// obtuse / measurement / sum    → orange (#ea580c)
// reflex / unknown angle        → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Hoeke',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — TIPES HOEKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'types-of-angles',
      title: 'Tipes Hoeke',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Hoek word gevorm waar twee lyne by ʼn punt ontmoet. Ons klassifiseer hoeke volgens hul grootte. ʼn ${bl('skerp')} hoek is kleiner as 90°. ʼn ${gr('regte')} hoek is presies 90°. ʼn ${or('stomp')} hoek is tussen 90° en 180°. ʼn gestrekte hoek is presies 180°. ʼn ${re('refleks')} hoek is tussen 180° en 360°. ʼn Volledige omwenteling is ʼn volle draai van 360°.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('skerp')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('regte')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('stomp')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('refleks')}</span>` +
        `</div>` +

        // ── Angle types ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Tipes hoeke</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Skerp hoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Groter as 0° en kleiner as 90°.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Regte hoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Presies 90° — gemerk met ʼn klein vierkantjie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Stomp hoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Groter as 90° en kleiner as 180°.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Refleks hoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Groter as 180° en kleiner as 360°.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Gestrekte hoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Presies 180° — vorm ʼn reguit lyn.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Volledige omwenteling</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Volle draai van presies 360°.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vinnige toets</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vergelyk die hoek altyd eers met <strong>90°</strong> — is dit kleiner, gelyk, of groter? Vergelyk dit dan met <strong>180°</strong> om tussen stomp, gestrek en refleks te onderskei.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Klassifiseer ʼn hoek van 35°.',
          answer: `35° is ʼn ${bl('skerp')} hoek`,
          steps: [
            `Vergelyk met 90°: <strong>35 &lt; 90</strong>, dus is die hoek kleiner as ʼn regte hoek.`,
            `ʼn Hoek wat groter as 0° en kleiner as 90° is, is ʼn ${bl('skerp')} hoek.`,
            `<strong>Antwoord:</strong> 35° is ʼn ${bl('skerp')} hoek. ✓`,
          ],
        },
        {
          question: 'Klassifiseer ʼn hoek van 210°.',
          answer: `210° is ʼn ${re('refleks')} hoek`,
          steps: [
            `Vergelyk met 180°: <strong>210 &gt; 180</strong>, dus is die hoek groter as ʼn gestrekte hoek.`,
            `Vergelyk met 360°: <strong>210 &lt; 360</strong>, dus is dit nie ʼn volledige omwenteling nie.`,
            `ʼn Hoek tussen 180° en 360° is ʼn ${re('refleks')} hoek.`,
            `<strong>Antwoord:</strong> 210° is ʼn ${re('refleks')} hoek. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Maklik — klassifiseer ʼn skerp hoek ────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Klassifiseer ʼn hoek van 45°.',
          answer: 'skerp',
          checkMode: 'auto',
          correctAnswer: 'skerp',
          explanation: '45° is kleiner as 90°, dus is dit ʼn skerp hoek. ʼn Hoek groter as 0° en kleiner as 90° is skerp.',
        },

        // ── V2 Maklik — klassifiseer ʼn stomp hoek ───────────────────────────
        {
          difficulty: 'Easy',
          question: 'Klassifiseer ʼn hoek van 95°.',
          answer: 'stomp',
          checkMode: 'auto',
          correctAnswer: 'stomp',
          explanation: '95° is groter as 90° en kleiner as 180°, dus is dit ʼn stomp hoek.',
        },

        // ── V3 Medium — onbekende hoek op ʼn reguit lyn ──────────────────────
        {
          difficulty: 'Medium',
          question: 'Twee hoeke op ʼn reguit lyn is 65° en x. Bepaal x.',
          answer: '115',
          checkMode: 'auto',
          correctAnswer: '115',
          explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°.\nx = 180° − 65° = 115°',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to identify and classify acute right obtuse straight reflex angles and revolutions with examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing all six angle types side by side with their degree ranges and colour coded labels" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — HOEKE MEET MET ʼN GRADEBOOG
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'measuring-angles-protractor',
      title: 'Hoeke Meet met ʼn Gradeboog',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons meet hoeke met ʼn gradeboog in grade. Plaas die ${bl('middelpunt')} van die gradeboog op die ${bl('hoekpunt')} van die hoek. Lyn die ${gr('basislyn')} van die gradeboog op met een arm van die hoek. Lees die graad waar die ander arm die skaal kruis — dit is die ${or('meting')}. Gradebole het twee skale — kyk altyd watter een ooreenstem met waar jy by nul begin tel het.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('hoekpunt')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('basislyn')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('meting')}</span>` +
        `</div>` +

        // ── Steps ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn hoek te meet</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Plaas die ${bl('middelpunt')} van die gradeboog presies op die ${bl('hoekpunt')} — die punt waar die twee arms ontmoet.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Lyn die ${gr('basislyn')} van die gradeboog op met een arm van die hoek. Let op watter skaal by 0° op daardie arm begin.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Lees die ${or('graadmeting')} waar die ander arm <em>dieselfde skaal</em> kruis waarmee jy begin het.</p>` +
        `</div>` +

        `</div>` +

        // ── Two-scale warning ─────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Algemene fout: die verkeerde skaal gebruik</p>` +
        `<p style="margin:0;color:#991b1b;">ʼn Gradeboog het ʼn binneskaal en ʼn buiteskaal wat saam optel tot 180°. As jy op een skaal by 0° begin, moet jy die ${or('meting')} van <strong>dieselfde skaal</strong> af lees, heeltemal tot by die ander arm. Om van skaal te verwissel, gee jou die supplementêre hoek in plaas van die korrekte een.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Hoek word gemeet vanaf 0° op die binneskaal, en die ander arm kruis by 65°. Wat is die hoek?',
          answer: `Die hoek is ${or('65°')}`,
          steps: [
            `Die ${gr('basislyn')} is opgelyn met een arm en die binneskaal begin by 0° op daardie arm.`,
            `Lees direk van die ${or('dieselfde skaal')} af — die skaal waarmee jy by 0° begin het.`,
            `Die ander arm kruis die binneskaal by <strong>65</strong>.`,
            `<strong>Antwoord:</strong> Die hoek is ${or('65°')}. ✓`,
          ],
        },
        {
          question: 'Sipho meet ʼn hoek en lees 130° op die buiteskaal, maar het by die binneskaal se 0° begin. Wat het verkeerd gegaan?',
          answer: `Sipho het van die verkeerde skaal af gelees — die korrekte lesing is ${or('50°')}`,
          steps: [
            `Sipho het die ${gr('basislyn')} korrek opgelyn en het by 0° op die ${bl('binneskaal')} begin.`,
            `Hy het toe 130° van die buiteskaal af gelees — maar dit is die <em>supplementêre</em> waarde (180° − 130° = 50°).`,
            `Om die verkeerde skaal te gebruik, gee ʼn foutiewe lesing. Hy moet konsekwent van dieselfde skaal af lees, van 0° tot by die ander arm.`,
            `<strong>Korrekte antwoord:</strong> Die hoek is ${or('50°')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V4 Medium — onbekende hoek rondom ʼn punt ─────────────────────────
        {
          difficulty: 'Medium',
          question: 'Drie hoeke rondom ʼn punt is 140°, 110° en y. Bepaal y.',
          answer: '110',
          checkMode: 'auto',
          correctAnswer: '110',
          explanation: 'Hoeke rondom ʼn punt tel op tot 360°.\ny = 360° − 140° − 110°\ny = 360° − 250°\ny = 110°',
        },

        // ── V5 Hard — Sipho klassifiseer 180° verkeerd ───────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê ʼn hoek van 180° is ʼn refleks hoek. Is hy korrek?',
          answer: 'Nee — 180° is ʼn gestrekte hoek, nie ʼn refleks hoek nie. Refleks hoeke is groter as 180° en kleiner as 360°.',
          checkMode: 'self',
        },

        // ── V6 Maklik — grade in ʼn volledige omwenteling ─────────────────────
        {
          difficulty: 'Easy',
          question: 'Hoeveel grade is daar in ʼn volledige omwenteling?',
          answer: '360',
          checkMode: 'auto',
          correctAnswer: '360',
          explanation: 'ʼn Volledige omwenteling is ʼn volle draai. Dit is presies 360°.',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to place a protractor on a vertex align the baseline and read the correct scale to measure an angle" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a protractor showing the vertex centre point the baseline and the two scales with the correct reading highlighted in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — HOEKE OP ʼN REGUIT LYN EN BY ʼN PUNT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'angles-straight-line-point',
      title: 'Hoeke op ʼn Reguit Lyn en by ʼn Punt',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;">Hoeke op ʼn reguit lyn tel op tot ${or('180°')}. Hoeke rondom ʼn punt tel op tot ${or('360°')}. Ons gebruik hierdie feite om ${re('onbekende hoeke')} te vind wanneer sommige ${bl('bekende hoeke')} reeds gegee is.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bekende hoeke')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('onbekende hoek')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('som')}</span>` +
        `</div>` +

        // ── Two key facts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Twee sleutelfeite</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Hoeke op ʼn reguit lyn</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Al die hoeke wat aan een kant van ʼn reguit lyn lê, deel ʼn ${or('som van 180°')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;font-style:italic;">${bl('a')} + ${bl('b')} + ${re('x')} = ${or('180°')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Hoeke rondom ʼn punt</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Al die hoeke wat by een punt ontmoet, vorm ʼn volledige omwenteling — hul ${or('som is 360°')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;font-style:italic;">${bl('a')} + ${bl('b')} + ${bl('c')} + ${re('y')} = ${or('360°')}</p>` +
        `</div>` +

        `</div>` +

        // ── Strategy tip ─────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategie</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Stap 1</strong> — Bepaal of die hoeke op ʼn reguit lyn (${or('som = 180°')}) of rondom ʼn punt (${or('som = 360°')}) is.<br><strong>Stap 2</strong> — Tel die ${bl('bekende hoeke')} bymekaar.<br><strong>Stap 3</strong> — Trek af van die ${or('som')} om die ${re('onbekende hoek')} te vind.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Twee hoeke op ʼn reguit lyn is 70° en x. Bepaal x.',
          answer: `${re('x')} = ${re('110°')}`,
          steps: [
            `Hoeke op ʼn reguit lyn tel op tot ${or('180°')}.`,
            `Skryf die vergelyking: ${bl('70°')} + ${re('x')} = ${or('180°')}`,
            `Trek die ${bl('bekende hoek')} af: ${re('x')} = ${or('180°')} − ${bl('70°')}`,
            `<strong>Antwoord:</strong> ${re('x')} = ${re('110°')} ✓`,
          ],
        },
        {
          question: 'Drie hoeke rondom ʼn punt is 120°, 95° en y. Bepaal y.',
          answer: `${re('y')} = ${re('145°')}`,
          steps: [
            `Hoeke rondom ʼn punt tel op tot ${or('360°')}.`,
            `Skryf die vergelyking: ${bl('120°')} + ${bl('95°')} + ${re('y')} = ${or('360°')}`,
            `Tel die ${bl('bekende hoeke')} bymekaar: ${bl('120 + 95')} = ${bl('215°')}`,
            `Trek af van ${or('360°')}: ${re('y')} = ${or('360°')} − ${bl('215°')}`,
            `<strong>Antwoord:</strong> ${re('y')} = ${re('145°')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V7 Medium — gelyke hoeke op ʼn reguit lyn ─────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Hoek en sy buurhoek op ʼn reguit lyn is gelyk. Watter grootte is elke hoek?',
          answer: '90',
          checkMode: 'auto',
          correctAnswer: '90',
          explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°. As albei hoeke gelyk is:\nelke hoek = 180° ÷ 2 = 90°.\nBeide hoeke is regte hoeke.',
        },

        // ── V8 Hard — vier hoeke by ʼn punt ───────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vier hoeke ontmoet by ʼn punt — 80°, 90°, 70° en z. Bepaal z.',
          answer: '120',
          checkMode: 'auto',
          correctAnswer: '120',
          explanation: 'Hoeke rondom ʼn punt tel op tot 360°.\nz = 360° − 80° − 90° − 70°\nz = 360° − 240°\nz = 120°',
        },

        // ── V9 Hard — klassifiseer en verduidelik ʼn refleks hoek ─────────────
        {
          difficulty: 'Hard',
          question: 'Lerato meet ʼn hoek as 200°. Klassifiseer dit en verduidelik.',
          answer: 'Refleks — dit is tussen 180° en 360°. ʼn Hoek groter as 180° en kleiner as 360° is ʼn refleks hoek.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to use the angle sum on a straight line 180 degrees and around a point 360 degrees to find unknown angles" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Two diagrams side by side showing angles on a straight line summing to 180 degrees and angles around a point summing to 360 degrees with known angles blue and unknown angle red" />',
    },
  ],
  scoreMessages: [
    { minScore: 9, message: 'Uitstekend! Jy het hoeke bemeester.' },
    { minScore: 7, message: 'Goeie werk!' },
    { minScore: 5, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk weer deur die studiegids.' },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-4 Klassifiseer tipes hoeke | 5-8 Gradeboogskale | 9-13 Hoeke
    // op ʼn reguit lyn (180°) | 14-17 Hoeke rondom ʼn punt (360°) | 18-19
    // Multi-stap gemengde hersiening
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Klassifiseer ʼn hoek van 72°.', checkMode: 'auto', correctAnswer: 'skerp', correctAnswers: ['skerp', 'skerp hoek'], explanation: '72° is groter as 0° en kleiner as 90°, dus is dit ʼn skerp hoek.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="140" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="140" x2="102" y2="45" stroke="#0f1f3d" stroke-width="2"/><path d="M 80 140 A 40 40 0 0 0 62 105" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="95" y="118" font-size="14" font-weight="700" fill="#2563eb">72°</text><circle cx="40" cy="140" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Easy', question: 'Thabo sê ʼn hoek van 130° is skerp omdat "dit nog steeds spits lyk". Is hy korrek?', checkMode: 'self', answer: 'Nee — 130° is groter as 90° en kleiner as 180°, dus is dit ʼn stomp hoek, nie ʼn skerp hoek nie. Skerp hoeke moet kleiner as 90° wees.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="140" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="140" x2="8" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 80 140 A 40 40 0 0 0 27 65" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="90" font-size="14" font-weight="700" fill="#2563eb">130°</text><circle cx="40" cy="140" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Easy', question: 'Rangskik hierdie drie hoeke van kleinste na grootste: ʼn regte hoek, ʼn hoek van 60°, en ʼn stomp hoek van 140°.', checkMode: 'auto', correctAnswer: '60,90,140', correctAnswers: ['60,90,140', '60°,90°,140°', '60, 90, 140'], explanation: 'Die hoek van 60° is die kleinste, die regte hoek is presies 90°, en 140° (stomp) is die grootste. Volgorde: 60° < 90° < 140°.' },
        { difficulty: 'Easy-Medium', question: 'Wat is die kleinste moontlike heelgetal-graadmeting vir ʼn stomp hoek?', checkMode: 'auto', correctAnswer: '91', correctAnswers: ['91', '91°'], explanation: 'ʼn Stomp hoek moet groter as 90° wees. Die kleinste heelgetal groter as 90 is 91, dus is 91° die kleinste heelgetal-graad stomp hoek.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Deur word oopgemaak sodat dit ʼn hoek van 40° met die deurkosyn maak. Klassifiseer hierdie hoek, en gee dan aan hoeveel grade meer dit nodig het om ʼn regte hoek te word.', checkMode: 'auto', correctAnswer: 'skerp,50', correctAnswers: ['skerp,50', 'skerp, 50°', 'skerp50'], explanation: '40° is kleiner as 90°, dus is dit skerp. Om ʼn regte hoek (90°) te bereik, benodig dit 90° − 40° = 50° meer.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="140" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="140" x2="150" y2="17" stroke="#0f1f3d" stroke-width="2"/><path d="M 90 140 A 50 50 0 0 0 71 100" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="98" y="118" font-size="14" font-weight="700" fill="#2563eb">40°</text><circle cx="40" cy="140" r="2.5" fill="#0f1f3d"/><text x="30" y="160" font-size="11" fill="#374151">deurkosyn</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Gradeboog se basislyn word met een arm van ʼn hoek by 0° op die binneskaal opgelyn. Die ander arm kruis die binneskaal by 72°. Wat is die hoek?', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72°'], explanation: 'Aangesien die basislyn by 0° op die binneskaal begin het, lees die meting direk van die binneskaal af waar die ander arm kruis: 72°.' },
        { difficulty: 'Medium', question: 'Zanele lyn haar basislyn op by 0° op die binneskaal, maar lees toe die buiteskaal af en kry 105°. As die binne- en buiteskaal-lesings vir hierdie hoek saam optel tot 180°, wat is die korrekte hoek?', checkMode: 'auto', correctAnswer: '75', correctAnswers: ['75', '75°'], explanation: 'Die twee skale is supplementêr (hulle tel op tot 180°). Zanele het van die verkeerde skaal af gelees, dus is die korrekte hoek 180° − 105° = 75°.' },
        { difficulty: 'Medium', question: 'Waar of onwaar: op ʼn gradeboog tel die binneskaal-lesing en die buiteskaal-lesing vir dieselfde arm altyd op tot 180°.', checkMode: 'auto', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Dit is waar. Die binne- en buiteskale loop in teenoorgestelde rigtings om dieselfde halfsirkel, dus tel hul lesings by enige punt altyd op tot 180°.' },
        { difficulty: 'Medium', question: 'Karabo meet die oopmaakhoek van ʼn boek deur die gradeboog se middelpunt op die rug te plaas. Sy lees 158° van die korrekte skaal af. Watter hoek maak die oop boek?', checkMode: 'auto', correctAnswer: '158', correctAnswers: ['158', '158°'], explanation: 'Aangesien Karabo direk van die korrekte skaal af gelees het (die een wat by 0° op die basislyn-arm begin het), is die hoek eenvoudig die lesing wat gewys word: 158°.' },
        { difficulty: 'Medium', question: 'Twee hoeke lê op ʼn reguit lyn. Een is 62°. Bepaal die ander hoek.', checkMode: 'auto', correctAnswer: '118', correctAnswers: ['118', '118°'], explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°. Die ander hoek = 180° − 62° = 118°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="130" x2="200" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="105" y1="130" x2="150" y2="35" stroke="#0f1f3d" stroke-width="2"/><path d="M 145 130 A 40 40 0 0 0 130 93" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="148" y="105" font-size="14" font-weight="700" fill="#2563eb">62°</text><path d="M 65 130 A 40 40 0 0 1 130 93" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="75" y="100" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="105" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'Drie hoeke op ʼn reguit lyn is 40°, 55° en x. Bepaal x.', checkMode: 'auto', correctAnswer: '85', correctAnswers: ['85', '85°'], explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°. x = 180° − 40° − 55° = 180° − 95° = 85°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="130" x2="210" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="163" y2="27" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="60" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 138 130 A 38 38 0 0 0 124 97" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="140" y="112" font-size="13" font-weight="700" fill="#2563eb">40°</text><path d="M 76 130 A 38 38 0 0 1 96 96" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="58" y="112" font-size="13" font-weight="700" fill="#2563eb">55°</text><path d="M 118 96 A 38 38 0 0 1 122 96" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="108" y="80" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="100" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Wegwyserpaal het twee hoeke wat op ʼn reguit lyn ontmoet en gelyk aan mekaar is. Watter grootte is elke hoek?', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', '90°'], explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°. As die twee hoeke gelyk is, is elkeen 180° ÷ 2 = 90°.' },
        { difficulty: 'Medium', question: 'ʼn Rolstoelhelling ontmoet die grond sodat die hoek tussen die helling en die grond 35° is. Wat is die hoek tussen die helling en ʼn denkbeeldige reguit lyn wat aan die ander kant van die grond voortgaan?', checkMode: 'auto', correctAnswer: '145', correctAnswers: ['145', '145°'], explanation: 'Die helling en die grondlyn vorm hoeke op ʼn reguit lyn, wat optel tot 180°. Die ander hoek = 180° − 35° = 145°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="140" x2="205" y2="140" stroke="#9ca3af" stroke-width="2" stroke-dasharray="4 3"/><line x1="150" y1="140" x2="30" y2="45" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 118 140 A 32 32 0 0 0 128 111" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="120" y="128" font-size="13" font-weight="700" fill="#2563eb">35°</text><path d="M 100 140 A 50 50 0 0 1 126 105" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="90" y="122" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="150" cy="140" r="2.5" fill="#0f1f3d"/><text x="150" y="155" font-size="11" fill="#374151">grond</text></svg>' },
        { difficulty: 'Medium', question: 'Gegewe dat hoeke op ʼn reguit lyn 90° en x is, skryf Lindiwe 360° − 90° = 270° vir x. Verduidelik haar fout en gee die korrekte waarde.', checkMode: 'self', answer: 'Lindiwe het die verkeerde totaal gebruik. Hoeke op ʼn reguit lyn tel op tot 180°, nie 360° nie (daardie reël is vir hoeke rondom ʼn punt). Die korrekte waarde is x = 180° − 90° = 90°.' },
        { difficulty: 'Medium-Hard', question: 'Drie hoeke rondom ʼn punt is 120°, 95° en y. Bepaal y.', checkMode: 'auto', correctAnswer: '145', correctAnswers: ['145', '145°'], explanation: 'Hoeke rondom ʼn punt tel op tot 360°. y = 360° − 120° − 95° = 360° − 215° = 145°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="85" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="195" y2="115" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="20" y2="50" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 30 30 0 0 1 133 105" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="70" font-size="13" font-weight="700" fill="#2563eb">120°</text><path d="M 133 105 A 30 30 0 0 1 78 62" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="112" y="118" font-size="13" font-weight="700" fill="#2563eb">95°</text><path d="M 78 62 A 30 30 0 0 1 110 55" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="72" y="72" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="85" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Vier hoeke ontmoet by ʼn punt: 90°, 85°, 70° en z. Bepaal z.', checkMode: 'auto', correctAnswer: '115', correctAnswers: ['115', '115°'], explanation: 'Hoeke rondom ʼn punt tel op tot 360°. z = 360° − 90° − 85° − 70° = 360° − 245° = 115°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="85" x2="200" y2="85" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="110" y2="10" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="30" y2="55" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="45" y2="140" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 85 A 30 30 0 0 0 110 55" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="122" y="72" font-size="12" font-weight="700" fill="#2563eb">90°</text><path d="M 110 55 A 30 30 0 0 0 57 68" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="70" y="55" font-size="12" font-weight="700" fill="#2563eb">85°</text><path d="M 57 68 A 30 30 0 0 0 68 111" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="38" y="95" font-size="12" font-weight="700" fill="#2563eb">70°</text><path d="M 68 111 A 30 30 0 0 0 140 85" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="95" y="118" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="85" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Vier gelyke hoeke ontmoet by ʼn punt. Watter grootte is elke hoek, en watter tipe hoek is dit?', checkMode: 'auto', correctAnswer: '90,regte', correctAnswers: ['90,regte', '90° regte hoek', '90regte'], explanation: 'Hoeke rondom ʼn punt tel op tot 360°. Elke hoek = 360° ÷ 4 = 90°, wat ʼn regte hoek is.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Fietswiel het 6 speke wat eweredig gespasieer is en die ruimte rondom die middelpunt in 6 gelyke hoeke verdeel. Wat is die grootte van elke hoek?', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60°'], explanation: 'Hoeke rondom ʼn punt tel op tot 360°. Met 6 gelyke hoeke is elkeen 360° ÷ 6 = 60°.' },
        { difficulty: 'Hard', question: 'Twee hoeke op ʼn reguit lyn is 48° en x. Bepaal x, en klassifiseer dit dan.', checkMode: 'auto', correctAnswer: '132,stomp', correctAnswers: ['132,stomp', '132° stomp', '132stomp'], explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°. x = 180° − 48° = 132°. Aangesien 132° tussen 90° en 180° is, is dit ʼn stomp hoek.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="130" x2="205" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="150" y1="130" x2="115" y2="22" stroke="#0f1f3d" stroke-width="2"/><path d="M 118 130 A 32 32 0 0 0 129 100" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="120" y="115" font-size="13" font-weight="700" fill="#2563eb">48°</text><path d="M 60 130 A 55 55 0 0 1 126 87" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="65" y="105" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="150" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Hard', question: 'ʼn Voubaar tafelpoot vorm twee hoeke waar dit die tafelblad raak: die hoek aan een kant is 105°. Sindiso sê die hoek aan die ander kant moet ook 105° wees "omdat voupote simmetries is". Is Sindiso korrek? Bepaal die ware hoek en verduidelik.', checkMode: 'self', answer: 'Nee — die twee hoeke lê op ʼn reguit lyn (die tafelblad se rand), dus tel hulle op tot 180°, hulle bly nie gelyk nie. Die ander hoek = 180° − 105° = 75°. Sindiso het verkeerdelik simmetrie aangeneem in plaas daarvan om die reguit-lyn-hoekreël te gebruik.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="45" x2="210" y2="45" stroke="#9ca3af" stroke-width="2" stroke-dasharray="4 3"/><line x1="110" y1="45" x2="150" y2="150" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 142 45 A 32 32 0 0 1 128 74" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="132" y="70" font-size="13" font-weight="700" fill="#2563eb">105°</text><path d="M 78 45 A 32 32 0 0 0 122 73" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="80" y="68" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="45" r="2.5" fill="#0f1f3d"/><text x="155" y="40" font-size="11" fill="#374151">tafelblad</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het hoeke klassifiseer, gradeboogaflesing en die reguit-lyn- en punt-hoekreëls bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiuit as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Klassifiseer ʼn hoek van 168°.', checkMode: 'auto', correctAnswer: 'stomp', correctAnswers: ['stomp', 'stomp hoek'], explanation: '168° is groter as 90° en kleiner as 180°, dus is dit ʼn stomp hoek.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="130" x2="205" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="130" x2="45" y2="35" stroke="#0f1f3d" stroke-width="2"/><path d="M 100 130 A 70 70 0 0 0 96 60" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="75" y="105" font-size="14" font-weight="700" fill="#2563eb">168°</text><circle cx="30" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Easy', question: 'Amahle sê ʼn hoek van 360° is ʼn refleks hoek "omdat dit ʼn baie groot draai is". Is sy korrek?', checkMode: 'self', answer: 'Nee — 360° is ʼn volledige omwenteling, nie ʼn refleks hoek nie. Refleks hoeke is groter as 180° maar kleiner as 360°; 360° is sy eie kategorie.' },
        { difficulty: 'Easy', question: 'Rangskik hierdie drie hoeke van grootste na kleinste: ʼn hoek van 88°, ʼn gestrekte hoek, en ʼn hoek van 250°.', checkMode: 'auto', correctAnswer: '250,180,88', correctAnswers: ['250,180,88', '250°,180°,88°', '250, 180, 88'], explanation: 'ʼn Gestrekte hoek is 180°. Rangskik van grootste na kleinste: 250° > 180° > 88°.' },
        { difficulty: 'Easy-Medium', question: 'Wat is die grootste moontlike heelgetal-graadmeting vir ʼn skerp hoek?', checkMode: 'auto', correctAnswer: '89', correctAnswers: ['89', '89°'], explanation: 'ʼn Skerp hoek moet kleiner as 90° wees. Die grootste heelgetal kleiner as 90 is 89, dus is 89° die grootste heelgetal-graad skerp hoek.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Skêr word oopgemaak sodat die lemme ʼn hoek van 110° maak. Klassifiseer hierdie hoek, en gee dan aan hoeveel grade meer dit nodig het om ʼn gestrekte hoek te word.', checkMode: 'auto', correctAnswer: 'stomp,70', correctAnswers: ['stomp,70', 'stomp, 70°', 'stomp70'], explanation: '110° is tussen 90° en 180°, dus is dit stomp. Om ʼn gestrekte hoek (180°) te bereik, benodig dit 180° − 110° = 70° meer.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="140" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="140" x2="120" y2="18" stroke="#0f1f3d" stroke-width="2"/><path d="M 95 140 A 65 65 0 0 0 87 78" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="88" y="112" font-size="14" font-weight="700" fill="#2563eb">110°</text><circle cx="30" cy="140" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Gradeboog se basislyn word met een arm van ʼn hoek by 0° op die buiteskaal opgelyn. Die ander arm kruis die buiteskaal by 47°. Wat is die hoek?', checkMode: 'auto', correctAnswer: '47', correctAnswers: ['47', '47°'], explanation: 'Aangesien die basislyn by 0° op die buiteskaal begin het, lees die meting direk van die buiteskaal af waar die ander arm kruis: 47°.' },
        { difficulty: 'Medium', question: 'Bongani lyn sy basislyn op by 0° op die buiteskaal, maar lees toe die binneskaal af en kry 158°. As die binne- en buiteskaal-lesings vir hierdie hoek saam optel tot 180°, wat is die korrekte hoek?', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', '22°'], explanation: 'Die twee skale is supplementêr. Bongani het van die verkeerde skaal af gelees, dus is die korrekte hoek 180° − 158° = 22°.' },
        { difficulty: 'Medium', question: 'Waarom het ʼn gradeboog twee getalskale nodig (ʼn binne- en ʼn buiteskaal) in plaas van net een?', checkMode: 'self', answer: 'Omdat die basislyn-arm van ʼn hoek in enige rigting kan wys (links of regs), laat die twee skale jou toe om van 0° af te tel vanaf watter kant ook al die arm lê, en die hoek altyd korrek af te lees sonder om die gradeboog om te draai.' },
        { difficulty: 'Medium', question: 'Sipho meet die oopmaakhoek van ʼn skootrekenaarskerm deur die gradeboog se middelpunt op die skarnier te plaas. Hy lees 96° van die korrekte skaal af. Watter hoek maak die oop skootrekenaar?', checkMode: 'auto', correctAnswer: '96', correctAnswers: ['96', '96°'], explanation: 'Aangesien Sipho direk van die korrekte skaal af gelees het, is die hoek eenvoudig die lesing wat gewys word: 96°.' },
        { difficulty: 'Medium', question: 'Twee hoeke lê op ʼn reguit lyn. Een is 48°. Bepaal die ander hoek.', checkMode: 'auto', correctAnswer: '132', correctAnswers: ['132', '132°'], explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°. Die ander hoek = 180° − 48° = 132°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="130" x2="200" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="105" y1="130" x2="145" y2="25" stroke="#0f1f3d" stroke-width="2"/><path d="M 145 130 A 40 40 0 0 0 133 94" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="148" y="108" font-size="14" font-weight="700" fill="#2563eb">48°</text><path d="M 65 130 A 40 40 0 0 1 133 94" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="75" y="100" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="105" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'Drie hoeke op ʼn reguit lyn is 30°, 65° en x. Bepaal x.', checkMode: 'auto', correctAnswer: '85', correctAnswers: ['85', '85°'], explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°. x = 180° − 30° − 65° = 180° − 95° = 85°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="130" x2="210" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="170" y2="45" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="60" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 143 130 A 38 38 0 0 0 133 101" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="145" y="115" font-size="13" font-weight="700" fill="#2563eb">30°</text><path d="M 76 130 A 38 38 0 0 1 96 96" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="56" y="112" font-size="13" font-weight="700" fill="#2563eb">65°</text><path d="M 121 100 A 38 38 0 0 1 128 101" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="112" y="80" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="100" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Heiningpaal ontmoet die grond en vorm twee hoeke op ʼn reguit lyn wat gelyk aan mekaar is. Watter grootte is elke hoek?', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', '90°'], explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°. As die twee hoeke gelyk is, is elkeen 180° ÷ 2 = 90°.' },
        { difficulty: 'Medium', question: 'ʼn Rolplankhelling ontmoet die plat grond sodat die hoek tussen die helling en die grond 128° is. Wat is die hoek tussen die helling en ʼn denkbeeldige reguit lyn wat aan die ander kant van die grond voortgaan?', checkMode: 'auto', correctAnswer: '52', correctAnswers: ['52', '52°'], explanation: 'Die helling en die grondlyn vorm hoeke op ʼn reguit lyn, wat optel tot 180°. Die ander hoek = 180° − 128° = 52°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="140" x2="205" y2="140" stroke="#9ca3af" stroke-width="2" stroke-dasharray="4 3"/><line x1="110" y1="140" x2="185" y2="80" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 142 140 A 32 32 0 0 1 130 116" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="128" y="130" font-size="13" font-weight="700" fill="#2563eb">128°</text><path d="M 78 140 A 32 32 0 0 0 122 116" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="80" y="128" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="140" r="2.5" fill="#0f1f3d"/><text x="10" y="155" font-size="11" fill="#374151">grond</text></svg>' },
        { difficulty: 'Medium', question: 'Gegewe dat hoeke op ʼn reguit lyn 75° en x is, vergeet Musa om die 75° neer te skryf en skryf net x = 180°. Verduidelik sy fout en gee die korrekte waarde.', checkMode: 'self', answer: 'Musa het vergeet om die bekende hoek af te trek voordat hy die onbekende hoek gevind het — hy het x behandel asof dit die enigste hoek op die lyn was. Die korrekte metode is x = 180° − 75° = 105°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="130" x2="200" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="128" y2="20" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 130 A 40 40 0 0 0 133 92" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="140" y="105" font-size="14" font-weight="700" fill="#2563eb">75°</text><path d="M 60 130 A 40 40 0 0 1 130 91" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="65" y="100" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="100" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Drie hoeke rondom ʼn punt is 150°, 80° en y. Bepaal y.', checkMode: 'auto', correctAnswer: '130', correctAnswers: ['130', '130°'], explanation: 'Hoeke rondom ʼn punt tel op tot 360°. y = 360° − 150° − 80° = 360° − 230° = 130°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="85" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="205" y2="95" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="20" y2="45" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 30 30 0 0 1 139 90" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="132" y="72" font-size="13" font-weight="700" fill="#2563eb">150°</text><path d="M 139 90 A 30 30 0 0 1 82 61" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="118" y="118" font-size="13" font-weight="700" fill="#2563eb">80°</text><path d="M 82 61 A 30 30 0 0 1 110 55" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="75" y="70" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="85" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Vyf hoeke ontmoet by ʼn punt: 60°, 55°, 70°, 85° en w. Bepaal w.', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', '90°'], explanation: 'Hoeke rondom ʼn punt tel op tot 360°. w = 360° − 60° − 55° − 70° − 85° = 360° − 270° = 90°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="90" x2="205" y2="90" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="90" x2="180" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="90" x2="110" y2="10" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="90" x2="35" y2="35" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="90" x2="35" y2="120" stroke="#0f1f3d" stroke-width="2"/><path d="M 138 90 A 28 28 0 0 0 130 68" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="132" y="76" font-size="11" font-weight="700" fill="#2563eb">60°</text><path d="M 130 68 A 28 28 0 0 0 110 62" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="105" y="55" font-size="11" font-weight="700" fill="#2563eb">55°</text><path d="M 110 62 A 28 28 0 0 0 79 71" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="68" y="60" font-size="11" font-weight="700" fill="#2563eb">70°</text><path d="M 79 71 A 28 28 0 0 0 79 109" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="60" y="95" font-size="14" font-weight="700" fill="#ea580c">?</text><path d="M 79 109 A 28 28 0 0 0 138 90" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="95" y="120" font-size="11" font-weight="700" fill="#2563eb">85°</text><circle cx="110" cy="90" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Drie gelyke hoeke ontmoet by ʼn punt. Watter grootte is elke hoek?', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120', '120°'], explanation: 'Hoeke rondom ʼn punt tel op tot 360°. Elke hoek = 360° ÷ 3 = 120°.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Verkeersirkel het 5 paaie wat eweredig gespasieer daaruit lei, en verdeel die ruimte rondom sy middelpunt in 5 gelyke hoeke. Wat is die grootte van elke hoek?', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72°'], explanation: 'Hoeke rondom ʼn punt tel op tot 360°. Met 5 gelyke hoeke is elkeen 360° ÷ 5 = 72°.' },
        { difficulty: 'Hard', question: 'Vergelyk hierdie twee situasies: (a) twee hoeke wat op ʼn reguit lyn ontmoet, en (b) drie hoeke wat by ʼn enkele punt ontmoet sonder enige reguit lyn betrokke. Watter somreël geld vir elkeen?', checkMode: 'self', answer: '(a) Hoeke op ʼn reguit lyn tel altyd op tot 180°. (b) Hoeke wat by ʼn punt ontmoet (sonder ʼn reguit lyn) tel op tot 360°, aangesien hulle ʼn volledige draai rondom daardie punt vorm.' },
        { difficulty: 'Hard', question: 'Drie hoeke op ʼn reguit lyn is 25°, 65° en x. Bepaal x, en klassifiseer dit dan.', checkMode: 'auto', correctAnswer: '90,regte', correctAnswers: ['90,regte', '90° regte hoek', '90regte'], explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°. x = 180° − 25° − 65° = 180° − 90° = 90°. Dit is presies 90°, dus is dit ʼn regte hoek.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="130" x2="210" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="178" y2="72" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="70" y2="27" stroke="#0f1f3d" stroke-width="2"/><path d="M 148 130 A 38 38 0 0 0 133 104" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="150" y="118" font-size="13" font-weight="700" fill="#2563eb">25°</text><path d="M 82 130 A 38 38 0 0 1 100 96" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="60" y="112" font-size="13" font-weight="700" fill="#2563eb">65°</text><path d="M 122 100 A 38 38 0 0 1 128 104" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="112" y="80" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="100" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan hoeke selfversekerd klassifiseer, ʼn gradeboog aflees, en albei somreëls toepas.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiuit, meer werklike-wêreld kontekste + redenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Klassifiseer ʼn hoek van 205°.', checkMode: 'auto', correctAnswer: 'refleks', correctAnswers: ['refleks', 'refleks hoek'], explanation: '205° is groter as 180° en kleiner as 360°, dus is dit ʼn refleks hoek.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="90" x2="200" y2="90" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="90" x2="75" y2="165" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 90 A 30 30 0 1 1 89 116" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="145" y="150" font-size="14" font-weight="700" fill="#2563eb">205°</text><circle cx="110" cy="90" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Easy', question: 'Palesa sê ʼn hoek van 90° "moet ʼn skerp hoek wees, want dit is nie so groot nie". Is sy korrek?', checkMode: 'self', answer: 'Nee — 90° is presies ʼn regte hoek, nie skerp nie. ʼn Skerp hoek moet streng kleiner as 90° wees, dus tel 90° self nie as skerp nie.' },
        { difficulty: 'Easy', question: 'ʼn Horlosiewyser wat 15° swaai, ʼn boek wat plat oopgemaak is teen 180°, en ʼn waaierlem-gaping van 300° is drie hoeke. Watter een is ʼn gestrekte hoek, en watter een is refleks?', checkMode: 'auto', correctAnswer: '180gestrek,300refleks', correctAnswers: ['180gestrek,300refleks', '180° gestrek, 300° refleks', 'gestrek180refleks300'], explanation: 'Die 180°-boekhoek is ʼn gestrekte hoek (presies 180°). Die 300°-waaierlem-gaping is ʼn refleks hoek (tussen 180° en 360°). Die 15°-horlosieswaai is skerp.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="45" x2="60" y2="45" stroke="#0f1f3d" stroke-width="2"/><line x1="10" y1="45" x2="58" y2="35" stroke="#0f1f3d" stroke-width="2"/><text x="8" y="65" font-size="12" font-weight="700" fill="#2563eb">15°</text><line x1="90" y1="45" x2="150" y2="45" stroke="#0f1f3d" stroke-width="2"/><line x1="90" y1="45" x2="30" y2="45" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="65" font-size="12" font-weight="700" fill="#2563eb">180°</text><line x1="175" y1="95" x2="215" y2="95" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="95" x2="175" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 205 95 A 30 30 0 1 1 175 65" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="170" y="140" font-size="12" font-weight="700" fill="#2563eb">300°</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Wat is die grootste moontlike heelgetal-graadmeting vir ʼn refleks hoek?', checkMode: 'auto', correctAnswer: '359', correctAnswers: ['359', '359°'], explanation: 'ʼn Refleks hoek moet kleiner as 360° wees. Die grootste heelgetal kleiner as 360 is 359, dus is 359° die grootste heelgetal-graad refleks hoek.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Leunstoel word agteroor gekantel sodat die rugleuning ʼn hoek van 158° met die sitplek maak. Klassifiseer hierdie hoek, en gee dan aan hoeveel grade meer dit nodig het om ʼn gestrekte hoek te word.', checkMode: 'auto', correctAnswer: 'stomp,22', correctAnswers: ['stomp,22', 'stomp, 22°', 'stomp22'], explanation: '158° is tussen 90° en 180°, dus is dit stomp. Om ʼn gestrekte hoek (180°) te bereik, benodig dit 180° − 158° = 22° meer.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="140" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="140" x2="52" y2="32" stroke="#0f1f3d" stroke-width="2"/><path d="M 100 140 A 70 70 0 0 0 98 70" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="75" y="112" font-size="14" font-weight="700" fill="#2563eb">158°</text><circle cx="30" cy="140" r="2.5" fill="#0f1f3d"/><text x="120" y="155" font-size="11" fill="#374151">sitplek</text></svg>' },
        { difficulty: 'Medium', question: 'Nomvula lyn die basislyn van ʼn gradeboog op met een arm by 0° op die binneskaal, en die ander arm kruis die binneskaal by 38°. Watter hoek meet sy?', checkMode: 'auto', correctAnswer: '38', correctAnswers: ['38', '38°'], explanation: 'Aangesien die basislyn by 0° op die binneskaal begin het, lees die meting direk van die binneskaal af waar die ander arm kruis: 38°.' },
        { difficulty: 'Medium', question: 'Tumi begin haar basislyn by 0° op die buiteskaal, maar lees die hoek per ongeluk van die binneskaal af, en kry ʼn waarde van 40°. As die twee skaal-lesings vir hierdie hoek saam optel tot 180°, wat behoort die korrekte lesing te wees?', checkMode: 'auto', correctAnswer: '140', correctAnswers: ['140', '140°'], explanation: 'Die twee skale is supplementêr. Tumi het van die verkeerde skaal af gelees, dus is die korrekte hoek 180° − 40° = 140°.' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê: "Dit maak nie saak watter skaal ek lees nie, solank ek ʼn getal lees." Verduidelik waarom hierdie nie goeie raad is nie.', checkMode: 'self', answer: 'Dit maak baie saak — jy moet die hoek van dieselfde skaal af lees waarop jy by 0° op die basislyn-arm begin tel het. Om van die ander skaal af te lees, gee jou die supplementêre hoek (180° minus die ware hoek), wat gewoonlik die verkeerde antwoord is.' },
        { difficulty: 'Medium', question: 'Aiden meet die hoek waartoe ʼn boek oopgemaak is deur die gradeboog se middelpunt op die rug te plaas. Hy lees 132° van die korrekte skaal af. Watter hoek maak die oop boek?', checkMode: 'auto', correctAnswer: '132', correctAnswers: ['132', '132°'], explanation: 'Aangesien Aiden direk van die korrekte skaal af gelees het, is die hoek eenvoudig die lesing wat gewys word: 132°.' },
        { difficulty: 'Medium', question: 'Twee hoeke lê op ʼn reguit lyn. Een is 97°. Bepaal die ander hoek.', checkMode: 'auto', correctAnswer: '83', correctAnswers: ['83', '83°'], explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°. Die ander hoek = 180° − 97° = 83°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="130" x2="200" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="105" y1="130" x2="97" y2="20" stroke="#0f1f3d" stroke-width="2"/><path d="M 145 130 A 40 40 0 0 0 106 90" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="118" y="105" font-size="14" font-weight="700" fill="#2563eb">97°</text><path d="M 65 130 A 40 40 0 0 1 104 90" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="72" y="100" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="105" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'Vier hoeke op ʼn reguit lyn is 20°, 40°, 55° en x. Bepaal x.', checkMode: 'auto', correctAnswer: '65', correctAnswers: ['65', '65°'], explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°. x = 180° − 20° − 40° − 55° = 180° − 115° = 65°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="130" x2="212" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="185" y2="112" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="168" y2="55" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="55" y2="35" stroke="#0f1f3d" stroke-width="2"/><path d="M 148 130 A 30 30 0 0 0 143 116" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="150" y="122" font-size="11" font-weight="700" fill="#2563eb">20°</text><path d="M 130 116 A 35 35 0 0 0 116 89" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="132" y="98" font-size="11" font-weight="700" fill="#2563eb">40°</text><path d="M 105 96 A 40 40 0 0 1 121 89" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="105" y="80" font-size="13" font-weight="700" fill="#ea580c">?</text><path d="M 75 129 A 45 45 0 0 1 100 92" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="60" y="105" font-size="11" font-weight="700" fill="#2563eb">55°</text><circle cx="100" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Leer leun teen ʼn muur en vorm twee hoeke met die grond op ʼn reguit lyn wat gelyk aan mekaar is. Watter grootte is elke hoek?', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', '90°'], explanation: 'Hoeke op ʼn reguit lyn tel op tot 180°. As die twee hoeke gelyk is, is elkeen 180° ÷ 2 = 90°.' },
        { difficulty: 'Medium', question: 'ʼn Tuinpaadjie ontmoet ʼn reguit tuinmuur sodat die hoek tussen die paadjie en die muur aan een kant 112° is. Wat is die hoek aan die ander kant van die paadjie, langs dieselfde muur?', checkMode: 'auto', correctAnswer: '68', correctAnswers: ['68', '68°'], explanation: 'Die paadjie en die muur vorm hoeke op ʼn reguit lyn, wat optel tot 180°. Die ander hoek = 180° − 112° = 68°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="140" x2="205" y2="140" stroke="#9ca3af" stroke-width="2" stroke-dasharray="4 3"/><line x1="110" y1="140" x2="165" y2="70" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 142 140 A 32 32 0 0 1 128 111" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="128" y="126" font-size="13" font-weight="700" fill="#2563eb">112°</text><path d="M 78 140 A 32 32 0 0 0 122 111" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="82" y="124" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="140" r="2.5" fill="#0f1f3d"/><text x="10" y="155" font-size="11" fill="#374151">muur</text></svg>' },
        { difficulty: 'Medium', question: 'Gegewe dat hoeke op ʼn reguit lyn 55°, 60° en x is, skryf Refilwe x = 360° − 55° − 60° = 245°. Verduidelik haar fout en gee die korrekte waarde.', checkMode: 'self', answer: 'Refilwe het die verkeerde totaal gebruik — sy het 360° gebruik, wat die som vir hoeke rondom ʼn punt is, nie op ʼn reguit lyn nie. Hoeke op ʼn reguit lyn tel op tot 180°, dus is die korrekte waarde x = 180° − 55° − 60° = 65°.' },
        { difficulty: 'Medium-Hard', question: 'Vier hoeke ontmoet by ʼn punt: 95°, 80°, 60° en t. Bepaal t.', checkMode: 'auto', correctAnswer: '125', correctAnswers: ['125', '125°'], explanation: 'Hoeke rondom ʼn punt tel op tot 360°. t = 360° − 95° − 80° − 60° = 360° − 235° = 125°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="85" x2="200" y2="85" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="110" y2="10" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="25" y2="55" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 85 A 30 30 0 0 0 110 55" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="122" y="72" font-size="12" font-weight="700" fill="#2563eb">95°</text><path d="M 110 55 A 30 30 0 0 0 60 71" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="68" y="55" font-size="12" font-weight="700" fill="#2563eb">80°</text><path d="M 60 71 A 30 30 0 0 0 87 111" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="42" y="98" font-size="12" font-weight="700" fill="#2563eb">60°</text><path d="M 87 111 A 30 30 0 0 0 140 85" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="108" y="120" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="85" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Ses hoeke ontmoet by ʼn punt: 40°, 55°, 60°, 65°, 70° en p. Bepaal p.', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70', '70°'], explanation: 'Hoeke rondom ʼn punt tel op tot 360°. p = 360° − 40° − 55° − 60° − 65° − 70° = 360° − 290° = 70°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="88" x2="205" y2="88" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="88" x2="188" y2="30" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="88" x2="140" y2="15" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="88" x2="55" y2="18" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="88" x2="20" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="88" x2="30" y2="140" stroke="#0f1f3d" stroke-width="2"/><path d="M 135 88 A 25 25 0 0 0 129 70" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="128" y="76" font-size="10" font-weight="700" fill="#2563eb">40°</text><path d="M 129 70 A 25 25 0 0 0 116 65" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="112" y="58" font-size="10" font-weight="700" fill="#2563eb">55°</text><path d="M 116 65 A 25 25 0 0 0 91 69" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="85" y="55" font-size="10" font-weight="700" fill="#2563eb">60°</text><path d="M 91 69 A 25 25 0 0 0 71 84" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="65" font-size="10" font-weight="700" fill="#2563eb">65°</text><path d="M 71 84 A 25 25 0 0 0 78 108" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="55" y="105" font-size="13" font-weight="700" fill="#ea580c">?</text><path d="M 78 108 A 25 25 0 0 0 135 88" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="90" y="120" font-size="10" font-weight="700" fill="#2563eb">70°</text><circle cx="110" cy="88" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Twee gelyke hoeke ontmoet by ʼn punt en vorm saam ʼn volledige omwenteling. Watter grootte is elke hoek, en watter tipe hoek is dit?', checkMode: 'auto', correctAnswer: '180,gestrekte', correctAnswers: ['180,gestrekte', '180° gestrekte hoek', '180gestrekte'], explanation: 'Hoeke rondom ʼn punt tel op tot 360°. Elke hoek = 360° ÷ 2 = 180°, wat ʼn gestrekte hoek is.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Sirkelgrafiek word in 8 gelyke skywe rondom sy middelpunt verdeel. Wat is die hoek van elke skyf?', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45', '45°'], explanation: 'Hoeke rondom ʼn punt tel op tot 360°. Met 8 gelyke skywe is elke hoek 360° ÷ 8 = 45°.' },
        { difficulty: 'Hard', question: 'Vergelyk hierdie twee situasies: (a) drie hoeke wat by ʼn punt ontmoet waar geeneen van hulle op ʼn reguit lyn lê nie, en (b) twee hoeke wat saam ʼn reguit lyn vorm. Watter somreël geld vir elkeen, en hoekom?', checkMode: 'self', answer: '(a) Die drie hoeke wat by ʼn punt ontmoet tel op tot 360°, want saam maak hulle een volledige draai. (b) Die twee hoeke op die reguit lyn tel op tot 180°, want saam maak hulle ʼn halwe draai langs een kant van die lyn.' },
        { difficulty: 'Hard', question: 'Drie hoeke ontmoet by ʼn punt by die basis van ʼn tuinsambreelpaal: 90°, 125° en die hoek gevorm deur die paadjie, x. Bepaal x, en klassifiseer dit dan.', checkMode: 'auto', correctAnswer: '145,stomp', correctAnswers: ['145,stomp', '145° stomp', '145stomp'], explanation: 'Hoeke rondom ʼn punt tel op tot 360°. x = 360° − 90° − 125° = 360° − 215° = 145°. Aangesien 145° tussen 90° en 180° is, is dit ʼn stomp hoek.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="85" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="195" y2="105" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="20" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 30 30 0 0 1 137 96" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="72" font-size="13" font-weight="700" fill="#2563eb">90°</text><path d="M 137 96 A 30 30 0 0 1 81 65" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="122" font-size="13" font-weight="700" fill="#2563eb">125°</text><path d="M 81 65 A 30 30 0 0 1 110 55" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="75" y="70" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="85" r="2.5" fill="#0f1f3d"/></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan hoekklassifikasie, gradeboogredenasie, en albei somreëls op werklike-wêreld probleme toepas.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
