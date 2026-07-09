import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (2D shapes roles) ─────────────────────────────────────────
// angle values              → orange  (#ea580c)
// equal sides               → blue    (#2563eb)
// triangle type / parallel sides → green   (#16a34a)
// sum of angles / shape names    → red     (#dc2626)
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: '2D-vorms',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — PROPERTIES OF TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-of-triangles',
      title: 'Eienskappe van Driehoeke',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Driehoek is ʼn 2D-vorm met <strong>3 sye</strong> en <strong>3 hoeke</strong>. Die drie hoeke van enige driehoek tel altyd op tot ${re('180°')}. Ons klassifiseer driehoeke op twee maniere — volgens hul <strong>sye</strong> en volgens hul <strong>hoeke</strong>.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hoekwaardes')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gelyke sye')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('driehoektipe')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('som van hoeke')}</span>` +
        `</div>` +

        // ── The 180° rule ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die hoeksomreël</p>` +
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#374151;">Die drie hoeke van <strong>enige</strong> driehoek tel altyd op tot ${re('180°')}. Ongeag watter tipe driehoek dit is, hierdie reël verander nooit.</p>` +
        `</div>` +

        // ── Classification by sides ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Klassifikasie volgens sye</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${gr('Gelyksydige')} driehoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('3 gelyke sye')} en ${bl('3 gelyke hoeke')} van ${or('60°')} elk.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${gr('Gelykbenige')} driehoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('2 gelyke sye')} en ${bl('2 gelyke hoeke')} (die hoeke oorkant die gelyke sye).</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${gr('Skalene')} driehoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Geen gelyke sye en geen gelyke hoeke nie.</p>` +
        `</div>` +

        `</div>` +

        // ── Classification by angles ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Klassifikasie volgens hoeke</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${gr('Skerphoekige')} driehoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Al die hoeke is kleiner as ${or('90°')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${gr('Reghoekige')} driehoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Het een hoek van presies ${or('90°')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${gr('Stomphoekige')} driehoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Het een hoek groter as ${or('90°')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Beide klassifikasies saam gebruik</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Driehoek kan benoem word deur <strong>beide</strong> ʼn syklassifikasie en ʼn hoekklassifikasie te gebruik. ʼn Driehoek kan byvoorbeeld ʼn ${gr('skerphoekige gelykbenige')} driehoek of ʼn ${gr('reghoekige skalene')} driehoek wees.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Driehoek het hoeke van 45° en 75°. Bepaal die derde hoek.',
          answer: `Die derde hoek is ${or('60°')}`,
          steps: [
            `Al die hoeke in ʼn driehoek tel op tot ${re('180°')}.`,
            `Derde hoek = ${re('180')} − ${or('45')} − ${or('75')} = ${or('60°')}.`,
            `Die derde hoek is ${or('60°')}.`,
          ],
        },
        {
          question: 'Klassifiseer hierdie driehoek — sye van 5 cm, 5 cm en 8 cm, hoeke van 66°, 66° en 48°.',
          answer: `Dit is ʼn ${gr('skerphoekige gelykbenige')} driehoek`,
          steps: [
            `Volgens sye — ${bl('twee sye is gelyk')} (5 cm en 5 cm), dus is dit ${gr('gelykbenig')}.`,
            `Volgens hoeke — al die hoeke (${or('66°')}, ${or('66°')}, ${or('48°')}) is kleiner as ${or('90°')}, dus is dit ${gr('skerphoekig')}.`,
            `Dit is ʼn ${gr('skerphoekige gelykbenige')} driehoek.`,
          ],
        },
        {
          question: 'Sipho sê ʼn driehoek kan twee stomp hoeke hê. Is hy korrek?',
          answer: `Sipho is verkeerd`,
          steps: [
            `ʼn Stomp hoek is groter as ${or('90°')}.`,
            `Twee stomp hoeke sou meer as ${re('180°')} optel.`,
            `Maar al drie hoeke moet presies ${re('180°')} optel.`,
            `As twee hoeke reeds meer as ${re('180°')} oorskry, sou die derde hoek negatief wees, wat onmoontlik is.`,
            `Sipho is verkeerd.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — angle sum of a triangle ──────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Waartoe tel die drie hoeke van enige driehoek op?',
          answer: '180 grade',
          checkMode: 'auto',
          correctAnswer: '180 grade',
          correctAnswers: ['180 grade', '180°', '180'],
          explanation: 'Die drie hoeke van enige driehoek tel altyd op tot 180°. Dit word die hoeksomeienskap van driehoeke genoem.',
        },

        // ── Q2 Easy — find the third angle ─────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Driehoek het hoeke van 60° en 80°. Wat is die derde hoek?',
          answer: '40 grade',
          checkMode: 'auto',
          correctAnswer: '40 grade',
          correctAnswers: ['40 grade', '40°', '40'],
          explanation: 'Som van al die hoeke = 180°.\nDerde hoek = 180 − 60 − 80 = 40°. ✓',
        },

        // ── Q3 Medium — classify a triangle by sides and angles ─────────────────
        {
          difficulty: 'Medium',
          question: 'Klassifiseer hierdie driehoek — al die sye is 7 cm en al die hoeke is 60°.',
          answer: 'gelyksydige driehoek',
          checkMode: 'auto',
          correctAnswer: 'gelyksydige driehoek',
          correctAnswers: ['gelyksydige driehoek', 'gelyksydig'],
          explanation: 'Al drie sye is gelyk (7 cm elk) en al drie hoeke is gelyk (60° elk). ʼn Driehoek met 3 gelyke sye en 3 gelyke hoeke is ʼn gelyksydige driehoek. ✓',
        },

        // ── Q4 Medium — dual classification by angles and sides ─────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Driehoek het hoeke van 90°, 45° en 45°. Klassifiseer dit volgens sy hoeke en volgens sy sye.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Klassifiseer volgens sy hoeke',
              correctAnswer: 'reghoekige driehoek',
              correctAnswers: ['reghoekige driehoek', 'reghoekige driehoek', 'reg-hoek driehoek'],
              explanation: 'Een hoek is presies 90°. ʼn Driehoek met een regte hoek word ʼn reghoekige driehoek genoem. ✓',
            },
            {
              label: 'b) Klassifiseer volgens sy sye',
              correctAnswer: 'gelykbenige driehoek',
              correctAnswers: ['gelykbenige driehoek', 'gelykbenig'],
              explanation: 'Twee hoeke is gelyk (45° en 45°). Die sye oorkant die gelyke hoeke is ook gelyk, wat dit ʼn gelykbenige driehoek maak. ✓',
            },
          ],
        },

        // ── Q5 Hard — can a right-angled triangle also be equilateral? ──────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê ʼn reghoekige driehoek kan ook gelyksydig wees. Is hy korrek? Verduidelik.',
          answer: 'Nee — ʼn gelyksydige driehoek het al die hoeke gelyk aan 60°. ʼn Reghoekige driehoek moet een hoek van 90° hê. Hierdie twee voorwaardes kan nie gelyktydig waar wees nie.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 120" width="100%" style="max-width:520px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<polygon points="65,12 18,95 112,95" fill="rgba(30,64,175,0.12)" stroke="#0f1f3d" stroke-width="2" stroke-linejoin="round"/>` +
        `<text x="65" y="113" text-anchor="middle" font-size="12" fill="#0f1f3d" font-weight="600">Gelyksydig</text>` +
        `<polygon points="195,10 165,95 225,95" fill="rgba(30,64,175,0.12)" stroke="#0f1f3d" stroke-width="2" stroke-linejoin="round"/>` +
        `<text x="195" y="113" text-anchor="middle" font-size="12" fill="#0f1f3d" font-weight="600">Gelykbenig</text>` +
        `<polygon points="285,10 263,95 375,95" fill="rgba(30,64,175,0.12)" stroke="#0f1f3d" stroke-width="2" stroke-linejoin="round"/>` +
        `<text x="319" y="113" text-anchor="middle" font-size="12" fill="#0f1f3d" font-weight="600">Skaleen</text>` +
        `<polygon points="405,95 405,12 490,95" fill="rgba(30,64,175,0.12)" stroke="#0f1f3d" stroke-width="2" stroke-linejoin="round"/>` +
        `<path d="M405,83 L417,83 L417,95" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="447" y="113" text-anchor="middle" font-size="12" fill="#0f1f3d" font-weight="600">Reghoekig</text>` +
        `</svg>`,

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining how to classify triangles by their sides and angles and how to find a missing angle using the 180 degree rule" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PROPERTIES OF QUADRILATERALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-of-quadrilaterals',
      title: 'Eienskappe van Vierhoeke',
      icon: '□',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Vierhoek</strong> is enige 2D-vorm met <strong>4 sye</strong> en <strong>4 hoeke</strong>. Die vier hoeke van enige vierhoek tel altyd op tot ${re('360°')}. Daar is baie tipes vierhoeke, elkeen met verskillende eienskappe.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hoekwaardes')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gelyke sye')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('parallelle sye')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('vormname')}</span>` +
        `</div>` +

        // ── The 360° rule ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die hoeksomreël</p>` +
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#374151;">Die vier hoeke van <strong>enige</strong> vierhoek tel altyd op tot ${re('360°')}. Ongeag watter tipe vierhoek dit is, hierdie reël verander nooit.</p>` +
        `</div>` +

        // ── Types of quadrilaterals ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Tipes vierhoeke</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Vierkant')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('4 gelyke sye')} en ${or('4 regte hoeke')} van ${or('90°')} elk.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Reghoek')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Oorstaande sye gelyk')} en ${or('4 regte hoeke')} van ${or('90°')} elk.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Parallelogram')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Oorstaande sye gelyk')} en ${gr('parallel')}; oorstaande hoeke gelyk. Geen regte hoeke nie.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Ruit')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('4 gelyke sye')}; oorstaande hoeke gelyk maar geen regte hoeke nie.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Trapesium')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Presies een paar ${gr('parallelle sye')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Vlieër')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Twee pare aangrensende ${bl('gelyke sye')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Spesiale verwantskappe</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn ${re('Vierkant')} is ʼn spesiale ${re('reghoek')} (dit het al die eienskappe van ʼn reghoek plus ${bl('gelyke sye')}). ʼn ${re('Reghoek')} is ʼn spesiale ${re('parallelogram')} (dit het al die eienskappe van ʼn parallelogram plus ${or('regte hoeke')}). ʼn ${re('Ruit')} is ʼn spesiale ${re('parallelogram')} (dit het al die eienskappe van ʼn parallelogram plus ${bl('4 gelyke sye')}).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Vierhoek het hoeke van 85°, 110° en 95°. Bepaal die vierde hoek.',
          answer: `Die vierde hoek is ${or('70°')}`,
          steps: [
            `Al die hoeke in ʼn vierhoek tel op tot ${re('360°')}.`,
            `Vierde hoek = ${re('360')} − ${or('85')} − ${or('110')} − ${or('95')} = ${or('70°')}.`,
          ],
        },
        {
          question: 'Hoe verskil ʼn parallelogram van ʼn reghoek?',
          answer: `ʼn ${re('Reghoek')} is ʼn spesiale tipe ${re('parallelogram')} — dit het ${or('regte hoeke')} terwyl ʼn parallelogram dit nie het nie`,
          steps: [
            `Beide ʼn ${re('reghoek')} en ʼn ${re('parallelogram')} het ${bl('oorstaande sye wat gelyk')} en ${gr('parallel')} is.`,
            `ʼn ${re('Reghoek')} het ${or('4 regte hoeke')} van ${or('90°')} elk.`,
            `ʼn ${re('Parallelogram')} het nie regte hoeke nie — sy hoeke kan enige grootte wees solank oorstaande hoeke gelyk is.`,
            `ʼn ${re('Reghoek')} is ʼn spesiale tipe ${re('parallelogram')}.`,
          ],
        },
        {
          question: 'Lerato teken ʼn vierhoek met 4 gelyke sye maar geen regte hoeke nie. Wat word dit genoem?',
          answer: `Dit is ʼn ${re('ruit')}`,
          steps: [
            `${bl('Vier gelyke sye')} — nie ʼn ${re('vierkant')} nie omdat daar geen regte hoeke is nie.`,
            `ʼn ${re('Ruit')} het ${bl('4 gelyke sye')} en oorstaande hoeke gelyk maar geen regte hoeke nie.`,
            `Dit is ʼn ${re('ruit')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q6 Easy — angle sum of a quadrilateral ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Waartoe tel die vier hoeke van enige vierhoek op?',
          answer: '360 grade',
          checkMode: 'auto',
          correctAnswer: '360 grade',
          correctAnswers: ['360 grade', '360°', '360'],
          explanation: 'Die vier hoeke van enige vierhoek tel altyd op tot 360°. Dit word die hoeksomeienskap van vierhoeke genoem.',
        },

        // ── Q7 Medium — find the fourth angle ──────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Vierhoek het hoeke van 75°, 110° en 85°. Bepaal die vierde hoek.',
          answer: '90 grade',
          checkMode: 'auto',
          correctAnswer: '90 grade',
          correctAnswers: ['90 grade', '90°', '90'],
          explanation: 'Som van al die hoeke = 360°.\nVierde hoek = 360 − 75 − 110 − 85 = 90°. ✓',
        },

        // ── Q8 Medium — difference between a rhombus and a square ───────────────
        {
          difficulty: 'Medium',
          question: 'Wat is die verskil tussen ʼn ruit en ʼn vierkant?',
          answer: 'Albei het 4 gelyke sye maar ʼn vierkant het 4 regte hoeke van 90° en ʼn ruit het nie regte hoeke nie — sy hoeke is nie 90° nie.',
          checkMode: 'self',
        },

        // ── Q9 Hard — identify a trapezium from its properties ──────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato teken ʼn vierhoek met een paar parallelle sye en geen gelyke sye nie. Wat word dit genoem?',
          answer: 'trapesium',
          checkMode: 'auto',
          correctAnswer: 'trapesium',
          correctAnswers: ['trapesium', 'ʼn trapesium'],
          explanation: 'ʼn Vierhoek met presies een paar parallelle sye is ʼn trapesium. Aangesien daar geen gelyke sye is nie, kan dit nie ʼn parallelogram of gelykbenige trapesium wees nie. ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagrams showing six types of quadrilaterals — square, rectangle, parallelogram, rhombus, trapezium and kite — each labelled with equal sides in blue, parallel sides in green, and angle values in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the properties of different quadrilaterals and how to find a missing angle using the 360 degree rule" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ANGLES IN SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'angles-in-shapes',
      title: 'Hoeke in Vorms',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">Die hoeke binne-in ʼn vorm word <strong>binnehoeke</strong> genoem. Die ${gr('som van binnehoeke')} hang af van die ${or('aantal sye')}. Ons kan die som vind met die ${bl('formule')}: ${bl('(aantal sye − 2) × 180°')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('formule')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('aantal sye')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('som van hoeke')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('elke hoek')}</span>` +
        `</div>` +

        // ── The formula ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die formule</p>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#1e40af;margin:0;">${bl('Som van binnehoeke = (aantal sye − 2) × 180°')}</p>` +
        `</div>` +

        // ── Interior angle sums ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Somme van binnehoeke</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Driehoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('3 sye')} → ${gr('180°')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vierhoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('4 sye')} → ${gr('360°')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vyfhoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('5 sye')} → ${gr('540°')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Heksagoon</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('6 sye')} → ${gr('720°')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom werk die formule?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Enige veelhoek kan in driehoeke verdeel word. ʼn Vorm met ${or('n sye')} kan in ${or('(n − 2)')} driehoeke verdeel word, en elke driehoek se hoeke tel op tot ${gr('180°')}. Die totaal is dus ${bl('(n − 2) × 180°')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bepaal die som van binnehoeke van ʼn heksagoon.',
          answer: `Die som van binnehoeke van ʼn heksagoon is ${gr('720°')}`,
          steps: [
            `Gebruik die ${bl('formule')}: ${bl('(aantal sye − 2) × 180°')}.`,
            `ʼn Heksagoon het ${or('6 sye')}: ${bl('(6 − 2) × 180')} = ${bl('4 × 180')} = ${gr('720°')}.`,
            `Die som van binnehoeke van ʼn heksagoon is ${gr('720°')}.`,
          ],
        },
        {
          question: 'ʼn Reëlmatige vyfhoek het al die hoeke gelyk. Wat is elke hoek?',
          answer: `Elke hoek van ʼn reëlmatige vyfhoek is ${re('108°')}`,
          steps: [
            `Som van binnehoeke van ʼn vyfhoek: ${bl('(5 − 2) × 180')} = ${bl('3 × 180')} = ${gr('540°')}.`,
            `Al ${or('5')} hoeke is gelyk: ${gr('540')} ÷ ${or('5')} = ${re('108°')}.`,
            `Elke hoek is ${re('108°')}.`,
          ],
        },
        {
          question: 'Amahle teken ʼn vierhoek met drie hoeke van 80°, 95° en 120°. Bepaal die vierde hoek en noem ʼn vierhoek wat dit kan wees.',
          answer: `Die vierde hoek is ${re('65°')} en dit kan ʼn trapesium wees`,
          steps: [
            `ʼn Vierhoek het ${or('4 sye')}, dus is die ${gr('som van hoeke')} = ${gr('360°')}.`,
            `Vierde hoek = ${gr('360')} − ${or('80')} − ${or('95')} − ${or('120')} = ${re('65°')}.`,
            `Die hoeke is almal verskillend, dus kan dit ʼn trapesium wees.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Medium — interior angle sum of a pentagon ───────────────────────
        {
          difficulty: 'Medium',
          question: 'Bepaal die som van binnehoeke van ʼn vyfhoek.',
          answer: '540 grade',
          checkMode: 'auto',
          correctAnswer: '540 grade',
          correctAnswers: ['540 grade', '540°', '540'],
          explanation: 'Gebruik die formule: (aantal sye − 2) × 180°.\nʼn Vyfhoek het 5 sye: (5 − 2) × 180 = 3 × 180 = 540°. ✓',
        },

        // ── Q11 Medium — each angle of a regular hexagon ────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Reëlmatige heksagoon het al die hoeke gelyk. Wat is die grootte van elke hoek?',
          answer: '120 grade',
          checkMode: 'auto',
          correctAnswer: '120 grade',
          correctAnswers: ['120 grade', '120°', '120'],
          explanation: 'Som van binnehoeke van ʼn heksagoon: (6 − 2) × 180 = 4 × 180 = 720°.\nAl 6 hoeke is gelyk: 720 ÷ 6 = 120°. ✓',
        },

        // ── Q12 Hard — regular octagon sum and each angle ───────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle teken ʼn reëlmatige agthoek. Bepaal die som van sy binnehoeke en die grootte van elke hoek.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Som van binnehoeke',
              correctAnswer: '1080 grade',
              correctAnswers: ['1080 grade', '1080°', '1080'],
              explanation: 'Gebruik die formule: (aantal sye − 2) × 180°.\nʼn Agthoek het 8 sye: (8 − 2) × 180 = 6 × 180 = 1080°. ✓',
            },
            {
              label: 'b) Grootte van elke binnehoek',
              correctAnswer: '135 grade',
              correctAnswers: ['135 grade', '135°', '135'],
              explanation: 'Al 8 hoeke van ʼn reëlmatige agthoek is gelyk.\n1080 ÷ 8 = 135°. ✓',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagrams showing a triangle, quadrilateral, pentagon and hexagon with their interior angles labelled in red and the angle sum shown in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining how to find the sum of interior angles using the formula (number of sides minus 2) times 180 degrees with worked examples" />',
    },
  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het 2D-vorms bemeester.' },
      { minPercent: 75, message: 'Goeie werk! Jy het ʼn sterk begrip van 2D-vorms.' },
      { minPercent: 50, message: 'Goeie poging! Gaan die afdelings waar jy punte verloor het weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },
  scoreMessages: [
    { minScore: 9, message: 'Uitstekend! ʼn Volpunt-telling — jy het die eienskappe van driehoeke heeltemal bemeester. Hou so aan!' },
    { minScore: 7, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van 2D-vorms. Gaan enige gemiste dele weer deur en jy sal dit perfek hê.' },
    { minScore: 5, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 3, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde, en probeer dan weer.' },
    { minScore: 0, message: "Moenie moed opgee nie — elke kenner was eers ʼn beginner! Gaan weer deur die verduidelikings en uitgewerkte voorbeelde, en probeer dan weer." },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Driehoek-hoeksom (180°) | 4-8 Klassifisering van driehoeke
    // volgens sye/hoeke | 9-11 Vierhoek-hoeksom (360°) | 12-15 Spesiale
    // vierhoeke | 16-19 Formule vir som van binnehoeke van veelhoeke
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Driehoek het hoeke van 52° en 67°, soos getoon. Wat is die grootte van die derde hoek?', answer: '61 grade', checkMode: 'auto', correctAnswer: '61 grade', correctAnswers: ['61 grade', '61°', '61'], explanation: 'Die drie hoeke van ʼn driehoek tel op tot 180°.\nDerde hoek = 180 − 52 − 67 = 61°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 95,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 28,28 0 0 1 45,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="128" font-size="14" fill="#2563eb" font-weight="700">52°</text><path d="M 165,140 A 28,28 0 0 0 178,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="148" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">67°</text><path d="M 85,38 A 18,18 0 0 1 106,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="95" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Dakspant is in die vorm van ʼn driehoek gebou, soos getoon. Twee van sy basishoeke is elk 58°. Wat is die grootte van die hoek bo-aan die spant?', answer: '64 grade', checkMode: 'auto', correctAnswer: '64 grade', correctAnswers: ['64 grade', '64°', '64'], explanation: 'Al drie hoeke van die driehoekige spant tel op tot 180°.\nBo-hoek = 180 − 58 − 58 = 64°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 50,140 A 28,28 0 0 1 41,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">58°</text><path d="M 170,140 A 28,28 0 0 0 179,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">58°</text><path d="M 99,38 A 18,18 0 0 1 121,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="110" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'Karabo sê ʼn driehoek kan hoeke van 100°, 90° en 30° hê, soos getoon. Is sy korrek? Verduidelik.', answer: 'Nee — 100 + 90 + 30 = 220°, maar die hoeke van enige driehoek moet presies 180° optel, dus is hierdie driehoek onmoontlik.', checkMode: 'self', explanation: '100 + 90 + 30 = 220°. Aangesien elke driehoek se hoeke presies tot 180° moet optel, kan ʼn stel hoeke wat tot 220° optel nie ʼn werklike driehoek vorm nie. Karabo is verkeerd.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 120,25" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="6,4"/><path d="M 50,140 A 28,28 0 0 1 38,113" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">100°</text><path d="M 170,140 A 28,28 0 0 0 178,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">90°</text><path d="M 109,38 A 18,18 0 0 1 131,38" fill="none" stroke="#2563eb" stroke-width="2"/><text x="120" y="58" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">30°</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Driehoek het hoeke van 73° en 54°, soos getoon. Verduidelik in woorde hoe jy die derde hoek sou vind, en gee die waarde daarvan.', answer: 'Tel die twee bekende hoeke bymekaar, trek dan die totaal van 180° af, want al drie hoeke van ʼn driehoek moet tot 180° optel. 180 − 73 − 54 = 53°.', checkMode: 'self', explanation: 'Aangesien die binnehoeke van enige driehoek tot 180° optel, word die ontbrekende hoek gevind deur die twee bekende hoeke van 180° af te trek: 180 − 73 − 54 = 53°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 80,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 28,28 0 0 1 41,115" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="128" font-size="14" fill="#2563eb" font-weight="700">73°</text><path d="M 165,140 A 28,28 0 0 0 176,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="148" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">54°</text><path d="M 68,38 A 18,18 0 0 1 90,40" fill="none" stroke="#ea580c" stroke-width="2"/><text x="80" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek het sye van 9 cm, 9 cm en 9 cm, soos getoon. Klassifiseer hierdie driehoek volgens sy sye.', answer: 'gelyksydige driehoek', checkMode: 'auto', correctAnswer: 'gelyksydige driehoek', correctAnswers: ['gelyksydige driehoek', 'gelyksydig'], explanation: 'Al drie sye is gelyk (9 cm elk), dus is dit ʼn gelyksydige driehoek.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="90" font-size="14" fill="#2563eb" font-weight="700">9 cm</text><text x="145" y="90" font-size="14" fill="#2563eb" font-weight="700">9 cm</text><text x="110" y="158" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek het hoeke van 40°, 65° en 75°, soos getoon. Klassifiseer hierdie driehoek volgens sy hoeke.', answer: 'skerphoekige driehoek', checkMode: 'auto', correctAnswer: 'skerphoekige driehoek', correctAnswers: ['skerphoekige driehoek', 'skerphoekig'], explanation: 'Al drie hoeke (40°, 65°, 75°) is kleiner as 90°, dus is dit ʼn skerphoekige driehoek.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 130,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 50,140 A 28,28 0 0 1 44,112" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">40°</text><path d="M 170,140 A 28,28 0 0 0 176,113" fill="none" stroke="#2563eb" stroke-width="2"/><text x="163" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">65°</text><path d="M 119,38 A 18,18 0 0 1 141,38" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="58" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">75°</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye van 6 cm, 6 cm en 4 cm, met hoeke van 90°, 45° en 45°, soos getoon. Gee beide sy syklassifikasie en sy hoekklassifikasie.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Klassifiseer volgens sye', correctAnswer: 'gelykbenig', correctAnswers: ['gelykbenig', 'gelykbenige driehoek'], explanation: 'Twee sye is gelyk (6 cm en 6 cm), dus is dit gelykbenig. ✓' }, { label: 'b) Klassifiseer volgens hoeke', correctAnswer: 'reghoekig', correctAnswers: ['reghoekig', 'reghoekige driehoek', 'reg hoek'], explanation: 'Een hoek is presies 90°, dus is dit reghoekig. ✓' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 30,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="26" y="88" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6 cm</text><text x="110" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="120" y="78" font-size="13" fill="#2563eb" font-weight="700">6 cm</text><path d="M 165,140 A 28,28 0 0 0 172,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="150" y="128" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">45°</text><path d="M 30,55 A 18,18 0 0 1 48,70" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="55" font-size="13" fill="#2563eb" font-weight="700">45°</text></svg>' },
        { difficulty: 'Medium', question: 'Tumi sê ʼn driehoek met sye 4 cm, 4 cm en 9 cm is moontlik en sal gelykbenig wees. Is hy korrek? Verduidelik.', answer: 'Nee — die twee korter sye (4 cm + 4 cm = 8 cm) moet saam meer wees as die derde sy sodat ʼn driehoek kan bestaan. Aangesien 8 cm minder is as 9 cm, kan hierdie driehoek glad nie gevorm word nie.', checkMode: 'self', explanation: 'Vir enige driehoek moet die som van die twee korter sye groter wees as die langste sy. Hier is 4 + 4 = 8, wat minder is as 9, dus kan die drie lengtes nie saamkom om ʼn driehoek te sluit nie. Tumi se driehoek is onmoontlik, dus kan dit nie gelykbenig of enige ander tipe wees nie.' },
        { difficulty: 'Medium', question: 'Driehoek A het sye 5 cm, 5 cm, 5 cm. Driehoek B het sye 5 cm, 5 cm, 7 cm. Noem een eienskap wat hulle deel en een verskil.', answer: 'Gedeel — beide is gelykbenig (Driehoek A het 2 gelyke sye as ʼn spesiale geval hiervan, trouens 3). Verskil — Driehoek A is gelyksydig met 3 gelyke sye en 3 gelyke hoeke van 60°, terwyl Driehoek B gelykbenig is met slegs 2 gelyke sye en 2 gelyke hoeke.', checkMode: 'self', explanation: 'Driehoek A (5, 5, 5) is gelyksydig, dus is al drie sye en al drie hoeke (60° elk) gelyk. Driehoek B (5, 5, 7) het slegs twee gelyke sye, wat dit gelykbenig maar nie gelyksydig maak nie. Aangesien gelyksydige driehoeke altyd aan die gelykbenige voorwaarde voldoen (minstens 2 gelyke sye), is beide driehoeke tegnies gelykbenig, maar slegs Driehoek A is ook gelyksydig.' },
        { difficulty: 'Medium', question: 'ʼn Padteken is in die vorm van ʼn driehoek met al drie sye gelyk en al drie hoeke gelyk. Watter tipe driehoek is die teken, geklassifiseer volgens beide sye en hoeke?', answer: 'gelyksydige en gelyk-hoekige (skerphoekige) driehoek', checkMode: 'auto', correctAnswer: 'gelyksydig skerphoekig', correctAnswers: ['gelyksydig skerphoekig', 'gelyksydig, skerphoekig', 'gelyksydige skerphoekige driehoek', 'skerphoekige gelyksydige driehoek'], explanation: 'Gelyke sye beteken dit is gelyksydig. ʼn Gelyksydige driehoek het altyd drie hoeke van 60°, en aangesien 60° minder as 90° is, is dit ook skerphoekig. Die teken is dus ʼn skerphoekige gelyksydige driehoek.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Vierhoek het hoeke van 90°, 95° en 100°, soos getoon. Bepaal die vierde hoek.', answer: '75 grade', checkMode: 'auto', correctAnswer: '75 grade', correctAnswers: ['75 grade', '75°', '75'], explanation: 'Die vier hoeke van ʼn vierhoek tel op tot 360°.\nVierde hoek = 360 − 90 − 95 − 100 = 75°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">90°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">95°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Vensterruit is in die vorm van ʼn vierhoek, soos getoon. Drie van sy hoeke is elk 90°. Wat moet die vierde hoek wees?', answer: '90 grade', checkMode: 'auto', correctAnswer: '90 grade', correctAnswers: ['90 grade', '90°', '90'], explanation: 'Die vier hoeke van ʼn vierhoek tel op tot 360°.\nVierde hoek = 360 − 90 − 90 − 90 = 90°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,135 185,35 35,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="35" y="117" width="16" height="16" fill="none" stroke="#2563eb" stroke-width="2"/><text x="30" y="110" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">90°</text><rect x="169" y="117" width="16" height="16" fill="none" stroke="#2563eb" stroke-width="2"/><text x="190" y="110" font-size="12" fill="#2563eb" font-weight="700">90°</text><rect x="169" y="35" width="16" height="16" fill="none" stroke="#2563eb" stroke-width="2"/><text x="190" y="55" font-size="12" fill="#2563eb" font-weight="700">90°</text><text x="45" y="58" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer ʼn vierhoek kan drie hoeke van 100° elk hê en een hoek van 40°, soos getoon. Is hierdie bewering korrek? Verduidelik.', answer: 'Nee — 100 + 100 + 100 + 40 = 340°, maar die vier hoeke van ʼn vierhoek moet presies 360° optel, dus is hierdie vierhoek NIE moontlik nie.', checkMode: 'self', explanation: '100 + 100 + 100 + 40 = 340°, wat minder is as die vereiste 360°. Aangesien elke vierhoek se hoeke presies tot 360° moet optel, kan hierdie stel hoeke nie ʼn werklike vierhoek vorm nie — die leerder se bewering is verkeerd.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="6,4"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">100°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100°</text><text x="65" y="62" font-size="13" fill="#2563eb" font-weight="700">40°</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vorm het 4 gelyke sye en 4 regte hoeke. Identifiseer die vorm.', answer: 'vierkant', checkMode: 'auto', correctAnswer: 'vierkant', correctAnswers: ['vierkant', 'ʼn vierkant'], explanation: 'ʼn Vierhoek met 4 gelyke sye en 4 regte hoeke (90° elk) is ʼn vierkant.' },
        { difficulty: 'Medium', question: 'Vergelyk ʼn reghoek en ʼn parallelogram: noem een eienskap wat hulle altyd deel en een eienskap wat hulle onderskei.', answer: 'Gedeel — beide het oorstaande sye gelyk en parallel. Verskil — ʼn reghoek het altyd 4 regte hoeke, terwyl ʼn parallelogram gewoonlik nie het nie.', checkMode: 'self', explanation: 'Beide ʼn reghoek en ʼn parallelogram het twee pare oorstaande sye wat gelyk in lengte en parallel aan mekaar is. Die bepalende verskil is dat ʼn reghoek se hoeke altyd 90° is, terwyl ʼn parallelogram se hoeke net in oorstaande pare gelyk hoef te wees — hulle hoef nie regte hoeke te wees nie.' },
        { difficulty: 'Medium', question: 'Anele sê alle reghoeke is vierkante omdat beide 4 regte hoeke het. Is sy korrek? Verduidelik.', answer: 'Nee — ʼn reghoek het net oorstaande sye gelyk en 4 regte hoeke nodig, maar ʼn vierkant het bykomend al 4 sye gelyk nodig. ʼn Reghoek met ongelyke lengte en breedte is nie ʼn vierkant nie.', checkMode: 'self', explanation: 'ʼn Vierkant is ʼn spesiale reghoek waar, benewens 4 regte hoeke, al 4 sye toevallig gelyk is. Die meeste reghoeke het ʼn lengte wat van hul breedte verskil, dus voldoen hulle aan die reghoek-definisie maar nie aan die "alle sye gelyk"-vereiste van ʼn vierkant nie. Anele se bewering is vals.' },
        { difficulty: 'Medium-Hard', question: 'Bepaal die som van die binnehoeke van ʼn sewehoek (7 sye).', answer: '900 grade', checkMode: 'auto', correctAnswer: '900 grade', correctAnswers: ['900 grade', '900°', '900'], explanation: 'Gebruik die formule: (aantal sye − 2) × 180°.\nʼn Sewehoek het 7 sye: (7 − 2) × 180 = 5 × 180 = 900°. ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Reëlmatige negehoek (9 sye) het al die hoeke gelyk. Wat is die grootte van elke binnehoek?', answer: '140 grade', checkMode: 'auto', correctAnswer: '140 grade', correctAnswers: ['140 grade', '140°', '140'], explanation: 'Som van binnehoeke van ʼn negehoek: (9 − 2) × 180 = 7 × 180 = 1260°.\nAl 9 hoeke is gelyk: 1260 ÷ 9 = 140°. ✓' },
        { difficulty: 'Hard', question: 'ʼn Reëlmatige tienhoek (10 sye) word gebruik vir ʼn teëlpatroon op ʼn vloer. Bepaal die som van sy binnehoeke en die grootte van elke individuele hoek.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Som van binnehoeke', correctAnswer: '1440 grade', correctAnswers: ['1440 grade', '1440°', '1440'], explanation: 'Gebruik die formule: (aantal sye − 2) × 180°.\nʼn Tienhoek het 10 sye: (10 − 2) × 180 = 8 × 180 = 1440°. ✓' }, { label: 'b) Grootte van elke binnehoek', correctAnswer: '144 grade', correctAnswers: ['144 grade', '144°', '144'], explanation: 'Al 10 hoeke van ʼn reëlmatige tienhoek is gelyk.\n1440 ÷ 10 = 144°. ✓' } ] },
        { difficulty: 'Hard', question: 'ʼn Veelhoek het ʼn binnehoeksom van 900°. Hoeveel sye het dit?', answer: '7 sye', checkMode: 'auto', correctAnswer: '7 sye', correctAnswers: ['7 sye', '7', 'sewe', 'sewe sye', 'sewehoek'], explanation: 'Som = (n − 2) × 180°, dus 900 = (n − 2) × 180.\nDeel altwee kante deur 180: n − 2 = 5.\nTel 2 by: n = 7. Die veelhoek het 7 sye (ʼn sewehoek). ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het hoeksomme, driehoek- en vierhoekklassifikasie, en die veelhoek-hoekformule bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiuit as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Driehoek het hoeke van 38° en 95°, soos getoon. Wat is die grootte van die derde hoek?', answer: '47 grade', checkMode: 'auto', correctAnswer: '47 grade', correctAnswers: ['47 grade', '47°', '47'], explanation: 'Die drie hoeke van ʼn driehoek tel op tot 180°.\nDerde hoek = 180 − 38 − 95 = 47°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 130,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 50,140 A 28,28 0 0 1 44,112" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">38°</text><path d="M 170,140 A 28,28 0 0 0 176,113" fill="none" stroke="#2563eb" stroke-width="2"/><text x="163" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">95°</text><path d="M 119,38 A 18,18 0 0 1 141,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="130" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Seiljag se seil is in die vorm van ʼn reghoekige driehoek, soos getoon. Een van sy ander hoeke is 27°. Wat is die grootte van die derde hoek?', answer: '63 grade', checkMode: 'auto', correctAnswer: '63 grade', correctAnswers: ['63 grade', '63°', '63'], explanation: 'ʼn Reghoekige driehoek het een hoek van 90°. Al drie hoeke tel op tot 180°.\nDerde hoek = 180 − 90 − 27 = 63°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 30,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M 165,140 A 28,28 0 0 0 173,117" fill="none" stroke="#2563eb" stroke-width="2"/><text x="150" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">27°</text><path d="M 30,55 A 18,18 0 0 1 46,68" fill="none" stroke="#ea580c" stroke-width="2"/><text x="55" y="58" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Easy', question: 'Gegee dat ʼn driehoek hoeke van 95°, 50° en 40° het, soos getoon, is dit ʼn geldige driehoek? Verduidelik.', answer: 'Nee — 95 + 50 + 40 = 185°, maar die hoeke van enige driehoek moet presies 180° optel, dus kan hierdie stel hoeke nie ʼn werklike driehoek vorm nie.', checkMode: 'self', explanation: '95 + 50 + 40 = 185°. Aangesien ʼn driehoek se drie hoeke altyd presies tot 180° moet optel, kan hoeke wat tot 185° optel nie ʼn werklike driehoek vorm nie.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 125,25" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="6,4"/><path d="M 50,140 A 28,28 0 0 1 40,114" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">95°</text><path d="M 170,140 A 28,28 0 0 0 178,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="163" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">50°</text><path d="M 114,38 A 18,18 0 0 1 136,38" fill="none" stroke="#2563eb" stroke-width="2"/><text x="125" y="58" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">40°</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Driehoek het twee gelyke hoeke van 61° elk, soos getoon. Verduidelik in woorde waarom die derde hoek 58° moet wees, en bevestig die berekening.', answer: 'Aangesien al drie hoeke van ʼn driehoek tot 180° optel, trek die twee bekende hoeke van 180° af: 180 − 61 − 61 = 58°. Dit moet die derde hoek wees, want daar is geen ander waarde wat die som gelyk aan 180° sou maak nie.', checkMode: 'self', explanation: 'Die binnehoeke van enige driehoek tel presies tot 180° op. Met twee hoeke van 61° elk, word die derde hoek gedwing om 180 − 61 − 61 = 58° te wees — geen ander waarde voldoen aan die hoeksomreël nie.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 28,28 0 0 1 45,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="128" font-size="14" fill="#2563eb" font-weight="700">61°</text><path d="M 165,140 A 28,28 0 0 0 177,117" fill="none" stroke="#2563eb" stroke-width="2"/><text x="150" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">61°</text><path d="M 99,38 A 18,18 0 0 1 121,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="110" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek het hoeke van 90°, 55° en 35°, soos getoon. Klassifiseer hierdie driehoek volgens sy hoeke.', answer: 'reghoekige driehoek', checkMode: 'auto', correctAnswer: 'reghoekige driehoek', correctAnswers: ['reghoekige driehoek', 'reghoekig'], explanation: 'Een hoek is presies 90°, dus is dit ʼn reghoekige driehoek.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 30,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M 165,140 A 28,28 0 0 0 173,117" fill="none" stroke="#2563eb" stroke-width="2"/><text x="150" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">55°</text><path d="M 30,55 A 18,18 0 0 1 46,68" fill="none" stroke="#2563eb" stroke-width="2"/><text x="52" y="58" font-size="14" fill="#2563eb" font-weight="700">35°</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek het sye van 8 cm, 3 cm en 6 cm, soos getoon. Klassifiseer hierdie driehoek volgens sy sye.', answer: 'skalene driehoek', checkMode: 'auto', correctAnswer: 'skalene driehoek', correctAnswers: ['skalene driehoek', 'skaleen'], explanation: 'Al drie sylengtes verskil (8 cm, 3 cm, 6 cm), dus is geen sye gelyk nie. Dit maak dit ʼn skalene driehoek.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 75,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="90" font-size="14" fill="#2563eb" font-weight="700">8 cm</text><text x="140" y="90" font-size="14" fill="#2563eb" font-weight="700">3 cm</text><text x="110" y="158" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye van 12 cm, 8 cm en 8 cm, met hoeke van 42°, 69° en 69°, soos getoon. Gee beide sy syklassifikasie en sy hoekklassifikasie.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Klassifiseer volgens sye', correctAnswer: 'gelykbenig', correctAnswers: ['gelykbenig', 'gelykbenige driehoek'], explanation: 'Twee sye is gelyk (8 cm en 8 cm), dus is dit gelykbenig. ✓' }, { label: 'b) Klassifiseer volgens hoeke', correctAnswer: 'skerphoekig', correctAnswers: ['skerphoekig', 'skerphoekige driehoek'], explanation: 'Al drie hoeke (42°, 69°, 69°) is kleiner as 90°, dus is dit skerphoekig. ✓' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="90" font-size="13" fill="#2563eb" font-weight="700">8 cm</text><text x="145" y="90" font-size="13" fill="#2563eb" font-weight="700">8 cm</text><text x="110" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><path d="M 55,140 A 28,28 0 0 1 45,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="128" font-size="12" fill="#2563eb" font-weight="700">69°</text><path d="M 165,140 A 28,28 0 0 0 177,117" fill="none" stroke="#2563eb" stroke-width="2"/><text x="150" y="128" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">69°</text><path d="M 99,38 A 18,18 0 0 1 121,38" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="55" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">42°</text></svg>' },
        { difficulty: 'Medium', question: 'Palesa sê ʼn gelyksydige driehoek kan ook stomphoekig wees. Is sy korrek? Verduidelik.', answer: 'Nee — elke gelyksydige driehoek het drie gelyke hoeke van 60° elk, en 60° is minder as 90°, dus is ʼn gelyksydige driehoek altyd skerphoekig en kan dit nooit stomphoekig wees nie.', checkMode: 'self', explanation: 'Aangesien al drie sye van ʼn gelyksydige driehoek gelyk is, moet al drie hoeke ook gelyk wees, en omdat hulle tot 180° optel, is elkeen presies 180 ÷ 3 = 60°. ʼn Hoek van 60° is skerp, dus is elke gelyksydige driehoek skerphoekig — dit kan nooit ʼn stomp hoek (groter as 90°) hê nie. Palesa is verkeerd.' },
        { difficulty: 'Medium', question: 'Driehoek C het sye 6 cm, 8 cm, 10 cm met hoeke 37°, 53°, 90°. Driehoek D het sye 6 cm, 6 cm, 6 cm met hoeke 60°, 60°, 60°. Noem een verskil tussen hierdie twee driehoeke volgens sye en een volgens hoeke.', answer: 'Volgens sye — Driehoek C is skalene (geen gelyke sye) terwyl Driehoek D gelyksydig is (al die sye gelyk). Volgens hoeke — Driehoek C is reghoekig (het ʼn hoek van 90°) terwyl Driehoek D skerphoekig is (al die hoeke 60°).', checkMode: 'self', explanation: 'Driehoek C (6, 8, 10) het drie verskillende sylengtes, dus is dit skalene, en sy hoek van 90° maak dit reghoekig. Driehoek D (6, 6, 6) het al die sye gelyk, dus is dit gelyksydig, en sy drie hoeke van 60° maak dit skerphoekig. Die twee driehoeke verskil in beide klassifikasies.' },
        { difficulty: 'Medium', question: 'ʼn Driehoekige tuinbedding het een sy van 5 m, nog een van 5 m, en hoeke van 90°, 45° en 45°. Klassifiseer die tuinbedding volgens beide sy sye en sy hoeke.', answer: 'gelykbenige reghoekige driehoek', checkMode: 'auto', correctAnswer: 'gelykbenig reghoekig', correctAnswers: ['gelykbenig reghoekig', 'gelykbenig, reghoekig', 'gelykbenige reghoekige driehoek', 'reghoekige gelykbenige driehoek'], explanation: 'Twee sye is gelyk (5 m en 5 m), dus is dit gelykbenig. Een hoek is presies 90°, dus is dit ook reghoekig. Saam is die tuinbedding ʼn gelykbenige reghoekige driehoek.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Vierhoek het hoeke van 72°, 108° en 95°, soos getoon. Bepaal die vierde hoek.', answer: '85 grade', checkMode: 'auto', correctAnswer: '85 grade', correctAnswers: ['85 grade', '85°', '85'], explanation: 'Die vier hoeke van ʼn vierhoek tel op tot 360°.\nVierde hoek = 360 − 72 − 108 − 95 = 85°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">72°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">108°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">95°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Vlieër-raam het hoeke van 120°, 60° en 120° by drie van sy hoekpunte, soos getoon. Bepaal die grootte van die vierde hoekpunt.', answer: '60 grade', checkMode: 'auto', correctAnswer: '60 grade', correctAnswers: ['60 grade', '60°', '60'], explanation: 'Die vier hoeke van ʼn vierhoek tel op tot 360°.\nVierde hoek = 360 − 120 − 60 − 120 = 60°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 185,80 110,150 35,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="115" y="45" font-size="13" fill="#2563eb" font-weight="700">120°</text><text x="150" y="82" font-size="13" fill="#2563eb" font-weight="700">60°</text><text x="115" y="132" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="50" y="82" font-size="13" fill="#2563eb" font-weight="700">120°</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige stuk grond het een hoek wat 115° meet weens ʼn opmeetfout, met die ander drie hoeke wat 78°, 92° en die onbekende vierde hoek meet, soos getoon. Bepaal die vierde hoek, en besluit dan of hierdie stuk grond werklik ʼn reghoek kan wees.', answer: 'Vierde hoek = 360 − 115 − 78 − 92 = 75°. Aangesien ʼn ware reghoek al vier hoeke presies op 90° moet hê, en hierdie hoeke 115°, 78°, 92° en 75° is, is hierdie stuk grond NIE werklik ʼn reghoek nie, al word dit so genoem.', checkMode: 'self', explanation: 'Vierde hoek = 360 − 115 − 78 − 92 = 75°. ʼn Reghoek vereis dat al vier binnehoeke gelyk aan 90° is. Aangesien geen van die vier hoeke hier (115°, 78°, 92°, 75°) 90° is nie, kan die stuk grond nie werklik ʼn reghoek wees nie, al tel die hoeke korrek tot 360° op.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,125 175,35 45,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">115°</text><text x="165" y="110" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">78°</text><text x="160" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">92°</text><text x="55" y="62" font-size="13" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vorm het oorstaande sye gelyk en parallel, met 4 regte hoeke, maar sy lengte en breedte verskil. Identifiseer die vorm.', answer: 'reghoek', checkMode: 'auto', correctAnswer: 'reghoek', correctAnswers: ['reghoek', 'ʼn reghoek'], explanation: 'Oorstaande sye gelyk en parallel met 4 regte hoeke, maar nie al 4 sye gelyk nie, beskryf ʼn reghoek (nie ʼn vierkant nie).' },
        { difficulty: 'Medium', question: 'Vergelyk ʼn ruit en ʼn vierkant: noem een eienskap wat hulle altyd deel en een eienskap wat hulle onderskei.', answer: 'Gedeel — beide het altyd 4 gelyke sye. Verskil — ʼn vierkant het altyd 4 regte hoeke, terwyl ʼn ruit nie regte hoeke nodig het nie.', checkMode: 'self', explanation: 'Beide vorms het al 4 sye gelyk in lengte. Die verskil lê in die hoeke: ʼn vierkant moet 4 regte hoeke (90° elk) hê, terwyl ʼn ruit se hoeke net in oorstaande pare gelyk hoef te wees — hulle hoef nie 90° te wees nie.' },
        { difficulty: 'Medium', question: 'Bheki sê alle parallelogramme is ruite omdat beide oorstaande sye gelyk het. Is hy korrek? Verduidelik.', answer: 'Nee — ʼn parallelogram het net oorstaande sye gelyk en parallel nodig, maar ʼn ruit het bykomend al 4 sye gelyk nodig. ʼn Parallelogram met ongelyke aangrensende sye is nie ʼn ruit nie.', checkMode: 'self', explanation: 'ʼn Ruit is ʼn spesiale parallelogram waar, benewens oorstaande sye gelyk en parallel, AL 4 sye gelyk in lengte is. Die meeste parallelogramme het aangrensende sye van verskillende lengtes, dus voldoen hulle aan die parallelogram-definisie maar nie aan die ruit-definisie nie. Bheki se bewering is vals.' },
        { difficulty: 'Medium-Hard', question: 'Bepaal die som van die binnehoeke van ʼn negehoek (9 sye).', answer: '1260 grade', checkMode: 'auto', correctAnswer: '1260 grade', correctAnswers: ['1260 grade', '1260°', '1260'], explanation: 'Gebruik die formule: (aantal sye − 2) × 180°.\nʼn Negehoek het 9 sye: (9 − 2) × 180 = 7 × 180 = 1260°. ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Reëlmatige tienhoek (10 sye) het al die hoeke gelyk. Wat is die grootte van elke binnehoek?', answer: '144 grade', checkMode: 'auto', correctAnswer: '144 grade', correctAnswers: ['144 grade', '144°', '144'], explanation: 'Som van binnehoeke van ʼn tienhoek: (10 − 2) × 180 = 8 × 180 = 1440°.\nAl 10 hoeke is gelyk: 1440 ÷ 10 = 144°. ✓' },
        { difficulty: 'Hard', question: 'ʼn Stopteken-ontwerper wil ʼn reëlmatige twaalfhoek (12 sye) vir ʼn nuwe teken gebruik. Bepaal die som van sy binnehoeke en die grootte van elke individuele hoek.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Som van binnehoeke', correctAnswer: '1800 grade', correctAnswers: ['1800 grade', '1800°', '1800'], explanation: 'Gebruik die formule: (aantal sye − 2) × 180°.\nʼn Twaalfhoek het 12 sye: (12 − 2) × 180 = 10 × 180 = 1800°. ✓' }, { label: 'b) Grootte van elke binnehoek', correctAnswer: '150 grade', correctAnswers: ['150 grade', '150°', '150'], explanation: 'Al 12 hoeke van ʼn reëlmatige twaalfhoek is gelyk.\n1800 ÷ 12 = 150°. ✓' } ] },
        { difficulty: 'Hard', question: 'Zola sê dat die verdubbeling van die aantal sye van ʼn veelhoek altyd die som van sy binnehoeke verdubbel. Is sy korrek? Gebruik ʼn vierhoek en ʼn agthoek om dit te toets.', answer: 'Nee — ʼn vierhoek (4 sye) het ʼn hoeksom van 360°, en ʼn agthoek (8 sye, dubbel die sye) het ʼn hoeksom van 1080°, nie 720° nie. Die verdubbeling van die sye verdubbel nie eenvoudig die hoeksom nie, weens die "−2" in die formule.', checkMode: 'self', explanation: 'Vierhoek: (4 − 2) × 180 = 360°. Agthoek: (8 − 2) × 180 = 1080°. As die verdubbeling van sye die hoeksom sou verdubbel, sou die agthoek 720° nodig gehad het, maar dit is eintlik 1080°. Die formule (n − 2) × 180° is nie direk eweredig aan n nie, dus is Zola se bewering vals.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan hoekreëls met vertroue toepas en driehoeke en vierhoeke klassifiseer.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiuit, meer werklike-lewe kontekste + redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Driehoek het hoeke van 49° en 88°, soos getoon. Wat is die grootte van die derde hoek?', answer: '43 grade', checkMode: 'auto', correctAnswer: '43 grade', correctAnswers: ['43 grade', '43°', '43'], explanation: 'Die drie hoeke van ʼn driehoek tel op tot 180°.\nDerde hoek = 180 − 49 − 88 = 43°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 115,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 50,140 A 28,28 0 0 1 42,114" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">49°</text><path d="M 170,140 A 28,28 0 0 0 178,115" fill="none" stroke="#2563eb" stroke-width="2"/><text x="163" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">88°</text><path d="M 104,38 A 18,18 0 0 1 126,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="115" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Enkele stuk wat van ʼn ronde pizza afgesny word, vorm ʼn driehoek, soos getoon. Die punt van die stuk by die middelpunt meet 90°, en een van die kors-rand-hoeke meet 63°. Wat is die grootte van die ander kors-rand-hoek?', answer: '27 grade', checkMode: 'auto', correctAnswer: '27 grade', correctAnswers: ['27 grade', '27°', '27'], explanation: 'Al drie hoeke van die driehoekige stuk tel op tot 180°.\nDerde hoek = 180 − 90 − 63 = 27°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 30,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M 165,140 A 28,28 0 0 0 175,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="150" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">63°</text><path d="M 30,55 A 18,18 0 0 1 46,68" fill="none" stroke="#ea580c" stroke-width="2"/><text x="55" y="58" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Easy', question: 'Gegee dat ʼn driehoek een hoek van 90° en nog een hoek van 90° het, soos getoon, kan dit ook ʼn derde hoek groter as 0° hê? Verduidelik.', answer: 'Nee — twee hoeke van 90° tel reeds op tot 180°, wat die hele hoeksom gebruik. Die derde hoek sou 0° moes wees, wat onmoontlik is vir ʼn werklike driehoek.', checkMode: 'self', explanation: '90 + 90 = 180°, wat reeds gelyk is aan die volle hoeksom van ʼn driehoek. Daar is geen ruimte oor vir ʼn derde hoek groter as 0° nie, dus kan ʼn driehoek nooit twee regte hoeke hê nie.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 25,25" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="6,4"/><rect x="25" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="88" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">90°</text><rect x="150" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="145" y="128" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">90°</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Driehoek het hoeke van 100° en 42°, soos getoon. Verduidelik in woorde waarom die derde hoek minder as 90° moet wees, en gee die presiese waarde.', answer: 'Die derde hoek = 180 − 100 − 42 = 38°, wat minder as 90° is omdat die ander twee hoeke reeds 142° optel, wat baie min van die 180°-som oorlaat.', checkMode: 'self', explanation: 'Derde hoek = 180 − 100 − 42 = 38°. Aangesien 100° en 42° reeds tot 142° uit die totale 180° optel, bly slegs 38° oor — dit is ver onder 90°, wat bevestig dat die derde hoek skerp moet wees.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 115,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 50,140 A 28,28 0 0 1 39,113" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">100°</text><path d="M 170,140 A 28,28 0 0 0 177,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="163" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">42°</text><path d="M 104,38 A 18,18 0 0 1 126,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="115" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek het sye van 11 cm, 6 cm en 9 cm, soos getoon. Klassifiseer hierdie driehoek volgens sy sye.', answer: 'skalene driehoek', checkMode: 'auto', correctAnswer: 'skalene driehoek', correctAnswers: ['skalene driehoek', 'skaleen'], explanation: 'Al drie sylengtes verskil (11 cm, 6 cm, 9 cm), dus is dit ʼn skalene driehoek.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 95,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="90" font-size="14" fill="#2563eb" font-weight="700">11 cm</text><text x="150" y="90" font-size="14" fill="#2563eb" font-weight="700">6 cm</text><text x="110" y="158" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek het hoeke van 112°, 40° en 28°, soos getoon. Klassifiseer hierdie driehoek volgens sy hoeke.', answer: 'stomphoekige driehoek', checkMode: 'auto', correctAnswer: 'stomphoekige driehoek', correctAnswers: ['stomphoekige driehoek', 'stomphoekig'], explanation: 'Een hoek (112°) is groter as 90°, dus is dit ʼn stomphoekige driehoek.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 50,140 A 28,28 0 0 1 30,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">112°</text><path d="M 170,140 A 28,28 0 0 0 178,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="163" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">40°</text><path d="M 44,58 A 18,18 0 0 1 66,60" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="55" font-size="14" fill="#2563eb" font-weight="700">28°</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye van 7 cm, 7 cm en 7 cm, met hoeke van 60°, 60° en 60°, soos getoon. Gee beide sy syklassifikasie en sy hoekklassifikasie.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Klassifiseer volgens sye', correctAnswer: 'gelyksydig', correctAnswers: ['gelyksydig', 'gelyksydige driehoek'], explanation: 'Al drie sye is gelyk (7 cm elk), dus is dit gelyksydig. ✓' }, { label: 'b) Klassifiseer volgens hoeke', correctAnswer: 'skerphoekig', correctAnswers: ['skerphoekig', 'skerphoekige driehoek'], explanation: 'Al drie hoeke (60° elk) is kleiner as 90°, dus is dit skerphoekig. ✓' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="90" font-size="13" fill="#2563eb" font-weight="700">7 cm</text><text x="145" y="90" font-size="13" fill="#2563eb" font-weight="700">7 cm</text><text x="110" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><path d="M 55,140 A 28,28 0 0 1 45,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="128" font-size="12" fill="#2563eb" font-weight="700">60°</text><path d="M 165,140 A 28,28 0 0 0 177,117" fill="none" stroke="#2563eb" stroke-width="2"/><text x="150" y="128" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60°</text><path d="M 99,38 A 18,18 0 0 1 121,38" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="55" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">60°</text></svg>' },
        { difficulty: 'Medium', question: 'Refilwe sê ʼn reghoekige driehoek kan nooit gelykbenig wees nie. Is sy korrek? Verduidelik.', answer: 'Nee — ʼn reghoekige driehoek kan twee gelyke hoeke van 45° elk hê saam met die 90°-hoek, wat dit beide reghoekig en gelykbenig terselfdertyd maak.', checkMode: 'self', explanation: 'ʼn Driehoek met hoeke 90°, 45° en 45° is ʼn geldige driehoek (90 + 45 + 45 = 180°). Dit het een regte hoek, dus is dit reghoekig, en dit het twee gelyke hoeke (en dus twee gelyke sye), dus is dit ook gelykbenig. Refilwe is verkeerd — ʼn reghoekige gelykbenige driehoek is beslis moontlik.' },
        { difficulty: 'Medium', question: 'Driehoek E het sye 9 cm, 9 cm, 9 cm. Driehoek F het sye 9 cm, 9 cm, 5 cm. Beide is gelykbenig volgens die breedste definisie. Verduidelik waarom slegs een van hulle ook gelyksydig is.', answer: 'Driehoek E het al drie sye gelyk (9, 9, 9), dus voldoen dit aan die bykomende vereiste vir gelyksydig. Driehoek F het slegs twee sye gelyk (9, 9) met ʼn verskillende derde sy (5), dus is dit gelykbenig maar nie gelyksydig nie.', checkMode: 'self', explanation: 'Gelyksydig vereis dat al drie sye gelyk is, wat ʼn strenger voorwaarde is as gelykbenig (minstens twee gelyke sye). Driehoek E (9, 9, 9) voldoen aan albei voorwaardes, dus is dit gelyksydig. Driehoek F (9, 9, 5) voldoen slegs aan die gelykbenige voorwaarde omdat sy derde sy van die ander twee verskil.' },
        { difficulty: 'Medium', question: 'ʼn Padteken in die vorm van ʼn driehoek het twee sye van 30 cm en hoeke van 90°, 45° en 45°. Klassifiseer die teken volgens beide sy sye en sy hoeke.', answer: 'gelykbenige reghoekige driehoek', checkMode: 'auto', correctAnswer: 'gelykbenig reghoekig', correctAnswers: ['gelykbenig reghoekig', 'gelykbenig, reghoekig', 'gelykbenige reghoekige driehoek', 'reghoekige gelykbenige driehoek'], explanation: 'Twee hoeke is gelyk (45° en 45°), dus is die sye oorkant hulle ook gelyk, wat dit gelykbenig maak. Een hoek is presies 90°, wat dit reghoekig maak. Saam is dit ʼn gelykbenige reghoekige driehoek.' },
        { difficulty: 'Medium', question: 'ʼn Vierhoek het hoeke van 61°, 146° en 83°, soos getoon. Bepaal die vierde hoek.', answer: '70 grade', checkMode: 'auto', correctAnswer: '70 grade', correctAnswers: ['70 grade', '70°', '70'], explanation: 'Die vier hoeke van ʼn vierhoek tel op tot 360°.\nVierde hoek = 360 − 61 − 146 − 83 = 70°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">61°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">146°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">83°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vlieër-raam vir ʼn skoolprojek het twee ooreenstemmende hoeke van 115° elk en nog een hoek van 65°, soos getoon. Bepaal die grootte van die vierde hoek.', answer: '65 grade', checkMode: 'auto', correctAnswer: '65 grade', correctAnswers: ['65 grade', '65°', '65'], explanation: 'Die vier hoeke van ʼn vierhoek tel op tot 360°.\nVierde hoek = 360 − 115 − 115 − 65 = 65°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 185,80 110,150 35,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="115" y="45" font-size="13" fill="#2563eb" font-weight="700">65°</text><text x="150" y="82" font-size="13" fill="#2563eb" font-weight="700">115°</text><text x="115" y="132" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="50" y="82" font-size="13" fill="#2563eb" font-weight="700">115°</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Leerder meet ʼn vierhoekige lap grond en noteer hoeke van 85°, 95°, 90° en 91°, soos getoon. Kontroleer of hierdie hoeke werklik aan dieselfde vierhoek kan behoort, en verduidelik jou redenasie.', answer: '85 + 95 + 90 + 91 = 361°, wat 1° te veel is. Aangesien ʼn vierhoek se hoeke presies tot 360° moet optel, kan hierdie vier metings nie almal korrek wees nie — die leerder moet ʼn klein meetfout gemaak het.', checkMode: 'self', explanation: '85 + 95 + 90 + 91 = 361°. ʼn Ware vierhoek het altyd binnehoeke wat presies tot 360° optel, dus is ʼn totaal van 361° onmoontlik. Dit wys dat minstens een van die vier metings ʼn klein fout bevat.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,125 175,35 45,45" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="6,4"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">85°</text><text x="165" y="110" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">95°</text><text x="160" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">90°</text><text x="55" y="62" font-size="13" fill="#2563eb" font-weight="700">91°</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vorm het presies een paar parallelle sye en geen gelyke sye nie. Identifiseer die vorm.', answer: 'trapesium', checkMode: 'auto', correctAnswer: 'trapesium', correctAnswers: ['trapesium', 'ʼn trapesium'], explanation: 'ʼn Vierhoek met presies een paar parallelle sye (en geen vereiste vir gelyke sye nie) is ʼn trapesium.' },
        { difficulty: 'Medium', question: 'Vergelyk ʼn vlieër en ʼn ruit: noem een eienskap wat hulle altyd deel en een eienskap wat hulle onderskei.', answer: 'Gedeel — beide kan al hul binnehoeke hê wat nie regte hoeke is nie, en beide het party gelyke sye. Verskil — ʼn ruit het al 4 sye gelyk, terwyl ʼn vlieër twee aparte pare aangrensende gelyke sye het wat nie aan mekaar gelyk is nie.', checkMode: 'self', explanation: 'ʼn Ruit het al 4 sye dieselfde lengte, terwyl ʼn vlieër twee pare aangrensende sye het wat binne elke paar aan mekaar gelyk is, maar die twee pare gewoonlik van mekaar verskil in lengte. Beide vorms kan sonder regte hoeke wees, maar slegs die ruit waarborg dat alle sye dieselfde lengte is.' },
        { difficulty: 'Medium', question: 'Naledi sê ʼn vorm met twee pare aangrensende gelyke sye moet ʼn ruit wees. Is sy korrek? Verduidelik, en noem die vorm wat sy eintlik beskryf.', answer: 'Nee — ʼn vorm met twee pare aangrensende gelyke sye (eerder as al 4 sye gelyk) is ʼn vlieër, nie ʼn ruit nie. ʼn Ruit het spesifiek al 4 sye gelyk nodig, nie net twee ooreenstemmende pare nie.', checkMode: 'self', explanation: 'ʼn Vlieër word gedefinieer deur twee pare aangrensende sye wat gelyk is, waar die twee pare van mekaar kan verskil in lengte. ʼn Ruit is strenger — dit vereis dat al 4 sye presies gelyk is. Aangesien Naledi se beskrywing net aangrensende pare waarborg (nie al 4 sye wat ooreenstem nie), beskryf sy eintlik ʼn vlieër.' },
        { difficulty: 'Medium-Hard', question: 'Bepaal die som van die binnehoeke van ʼn tienhoek (10 sye).', answer: '1440 grade', checkMode: 'auto', correctAnswer: '1440 grade', correctAnswers: ['1440 grade', '1440°', '1440'], explanation: 'Gebruik die formule: (aantal sye − 2) × 180°.\nʼn Tienhoek het 10 sye: (10 − 2) × 180 = 8 × 180 = 1440°. ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Reëlmatige negehoek (9 sye) het al die hoeke gelyk. Wat is die grootte van elke binnehoek?', answer: '140 grade', checkMode: 'auto', correctAnswer: '140 grade', correctAnswers: ['140 grade', '140°', '140'], explanation: 'Som van binnehoeke van ʼn negehoek: (9 − 2) × 180 = 7 × 180 = 1260°.\nAl 9 hoeke is gelyk: 1260 ÷ 9 = 140°. ✓' },
        { difficulty: 'Hard', question: 'ʼn Teëlmaatskappy wil ʼn reëlmatige veelhoek met 15 sye (ʼn vyftienhoek) vir ʼn dekoratiewe vloerpatroon gebruik. Bepaal die som van sy binnehoeke en die grootte van elke individuele hoek.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Som van binnehoeke', correctAnswer: '2340 grade', correctAnswers: ['2340 grade', '2340°', '2340'], explanation: 'Gebruik die formule: (aantal sye − 2) × 180°.\nʼn Veelhoek met 15 sye het: (15 − 2) × 180 = 13 × 180 = 2340°. ✓' }, { label: 'b) Grootte van elke binnehoek', correctAnswer: '156 grade', correctAnswers: ['156 grade', '156°', '156'], explanation: 'Al 15 hoeke van ʼn reëlmatige veelhoek met 15 sye is gelyk.\n2340 ÷ 15 = 156°. ✓' } ] },
        { difficulty: 'Hard', question: 'ʼn Veelhoek het ʼn binnehoeksom van 1800°. Hoeveel sye het dit?', answer: '12 sye', checkMode: 'auto', correctAnswer: '12 sye', correctAnswers: ['12 sye', '12', 'twaalf', 'twaalf sye', 'twaalfhoek'], explanation: 'Som = (n − 2) × 180°, dus 1800 = (n − 2) × 180.\nDeel altwee kante deur 180: n − 2 = 10.\nTel 2 by: n = 12. Die veelhoek het 12 sye (ʼn twaalfhoek). ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan hoekreëls en vorm-eienskappe op werklike-lewe probleme en redenering toepas.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
