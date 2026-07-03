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
}
