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
}
