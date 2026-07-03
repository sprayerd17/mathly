import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (2D shapes roles) ────────────────────────────────────────
// given angle / radius     → blue   (#2563eb)
// calculated angle / circ. → green  (#16a34a)
// ratio parts / chord      → orange (#ea580c)
// unknown angle / diameter → red    (#dc2626)
// shape property           → purple (#7c3aed)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: '2D-vorms',
  grade: 7,
  subject: 'Wiskunde',
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — TRIANGLES: TYPES AND PROPERTIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'triangles-types-properties',
      title: 'Driehoeke — Tipes en Eienskappe',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 7 hersien en verdiep ons ons begrip van driehoektipes volgens sye en hoeke, en pas ons die hoeksomeienskap toe om ontbrekende hoeke te vind in meer ingewikkelde probleme met veelvuldige driehoeke of saamgestelde vorms.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gegewe hoeke')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('berekende hoek')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('verhoudingsdele')}</span>` +
        `</div>` +

        // ── Key property ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleuteleienskap: hoeksom</p>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#1e3a8a;">Die drie binnehoeke van enige driehoek tel altyd op tot <strong>180°</strong>. Jy kan dit gebruik om ʼn ontbrekende hoek te vind: <strong>ontbrekende hoek = 180° − (som van die ander twee hoeke)</strong>.</p>` +
        `</div>` +

        // ── Triangle types ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Driehoektipes volgens sye</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Gelyksydig</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Al drie sye gelyk. Al drie hoeke gelyk aan 60°.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Gelykbenig</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Twee sye gelyk. Die basishoeke (oorkant die gelyke sye) is gelyk.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Skaleen</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Al drie sye verskillend. Al drie hoeke verskillend.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Driehoektipes volgens hoeke</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Skerphoekig</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Al drie hoeke is kleiner as 90°.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Reghoekig</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Presies een hoek is gelyk aan 90°. Die sy oorkant die regte hoek is die langste sy (skuinssy).</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Stomphoekig</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Presies een hoek is groter as 90°.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Gebruik van verhoudings om hoeke te vind</p>` +
        `<p style="margin:0;color:#14532d;">Wanneer hoeke in ʼn verhouding gegee word, vind die waarde van een deel deur 180° te deel deur die totale aantal dele, en vermenigvuldig dan elke verhoudingsgetal met daardie waarde.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Driehoek het hoeke in die verhouding 2:3:4. Bepaal elke hoek.',
          answer: `Die hoeke is ${gr('40°')}, ${gr('60°')}, en ${gr('80°')}`,
          steps: [
            `Bepaal die totale aantal ${or('dele')}: ${or('2')} + ${or('3')} + ${or('4')} = ${or('9')} dele in totaal.`,
            `Bepaal die waarde van een deel: een deel = 180° ÷ ${or('9')} = ${gr('20°')}.`,
            `Bereken elke hoek deur te vermenigvuldig: ${or('2')} × ${gr('20°')} = ${gr('40°')} &nbsp;|&nbsp; ${or('3')} × ${gr('20°')} = ${gr('60°')} &nbsp;|&nbsp; ${or('4')} × ${gr('20°')} = ${gr('80°')}.`,
            `<strong>Kontroleer:</strong> ${gr('40°')} + ${gr('60°')} + ${gr('80°')} = 180° ✓`,
          ],
        },
        {
          question: 'Twee driehoeke deel ʼn sy. Een driehoek het hoeke van 50° en 70°. Bepaal die derde hoek van die eerste driehoek, en bepaal dan die ooreenstemmende hoek in die tweede driehoek as dit gelyk is aan die derde hoek van die eerste.',
          answer: `Derde hoek van eerste driehoek = ${gr('60°')}; ooreenstemmende hoek in tweede driehoek = ${gr('60°')}`,
          steps: [
            `Bepaal die derde hoek van die eerste driehoek met die hoeksomreël: derde hoek = 180° − ${bl('50°')} − ${bl('70°')} = ${gr('60°')}.`,
            `Die twee driehoeke deel ʼn sy. Die probleem stel dat die ooreenstemmende hoek in die tweede driehoek gelyk is aan die derde hoek van die eerste driehoek.`,
            `Daarom is die ooreenstemmende hoek in die tweede driehoek ook ${gr('60°')}.`,
            `<strong>Let wel:</strong> Die gedeelde sy beteken die ${gr('60°')}-hoek is by die punt waar die twee driehoeke ontmoet — dit is dieselfde fisiese hoek vir albei driehoeke.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Driehoek het hoeke van 55° en 75°. Bepaal die derde hoek.',
          answer: '50°',
          checkMode: 'auto',
          correctAnswer: '50',
          explanation: 'Derde hoek = 180° − 55° − 75° = 50°. Kontroleer: 55 + 75 + 50 = 180 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Driehoek het hoeke in die verhouding 1:2:3. Bepaal elke hoek en noem die driehoek volgens sy hoeke.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Kleinste hoek',
              correctAnswer: '30',
              explanation: 'Totale dele = 1+2+3 = 6. Een deel = 180÷6 = 30°. Kleinste hoek = 1×30 = 30°.',
            },
            {
              label: 'b) Middelste hoek',
              correctAnswer: '60',
              explanation: 'Middelste hoek = 2×30 = 60°.',
            },
            {
              label: 'c) Grootste hoek',
              correctAnswer: '90',
              explanation: 'Grootste hoek = 3×30 = 90°. Die driehoek is ʼn reghoekige driehoek omdat een hoek presies 90° is.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Gelykbenige driehoek het ʼn hoekpunthoek (die hoek tussen die twee gelyke sye) van 40°.\n\na) Bepaal die twee basishoeke.\nb) Is hierdie driehoek skerphoekig, reghoekig, of stomphoekig? Verduidelik.',
          answer: 'a) Elke basishoek = 70°\nb) Skerphoekig — al drie hoeke (40°, 70°, 70°) is kleiner as 90°',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing triangle types by side and angle and how to use the angle sum rule to find missing angles including ratio problems" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing all six triangle types side by side — equilateral isosceles and scalene by side, and acute right-angled and obtuse-angled by angle — with angle labels" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — QUADRILATERALS: TYPES AND PROPERTIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadrilaterals-types-properties',
      title: 'Vierhoeke — Tipes en Eienskappe',
      icon: '▭',
      explanation:
        `<p style="margin-bottom:16px;">Ons verdiep ons kennis van vierhoekeienskappe, insluitend diagonale. ʼn Diagonaal verdeel ʼn vierhoek in twee driehoeke. Ons gebruik die hoeksom van vierhoeke (360°) om meer ingewikkelde probleme met onbekende hoeke en vormklassifikasie op grond van gegewe eienskappe op te los.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bekende hoeke')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('onbekende hoek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vormeienskappe')}</span>` +
        `</div>` +

        // ── Angle sum ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleuteleienskap: hoeksom</p>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#1e3a8a;">Die vier binnehoeke van enige vierhoek tel altyd op tot <strong>360°</strong>. Dit is omdat ʼn diagonaal die vierhoek in twee driehoeke verdeel, elkeen wat 180° bydra: 2 × 180° = 360°.</p>` +
        `</div>` +

        // ── Quadrilateral types ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Vierhoektipes en hul eienskappe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Vierkant</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Al 4 sye gelyk')}. ${gr('Al 4 hoeke = 90°')}. ${gr('Diagonale halveer mekaar teen regte hoeke')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Reghoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Oorstaande sye gelyk en parallel')}. ${gr('Al 4 hoeke = 90°')}. ${gr('Diagonale is gelyk in lengte')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Parallelogram</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Oorstaande sye gelyk en parallel')}. ${gr('Oorstaande hoeke gelyk')}. ${gr('Aangrensende hoeke supplementêr (tel op tot 180°)')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Ruit</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Al 4 sye gelyk')}. ${gr('Oorstaande hoeke gelyk')}. ${gr('Diagonale halveer mekaar teen regte hoeke')}.</p>` +
        `</div>` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Trapesium</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Presies een paar parallelle sye')}. Ko-binnehoeke tussen die parallelle sye tel op tot 180°.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Vlieër</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Twee pare aangrensende gelyke sye')}. Een paar oorstaande hoeke gelyk. Diagonale sny teen regte hoeke.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#b45309;margin-bottom:6px;">Vierhoeke klassifiseer</p>` +
        `<p style="margin:0;color:#92400e;">Om ʼn vierhoek te klassifiseer, kyk na sy hoekgroottes, sylengtes, en of sye parallel is. Gebruik die bekende hoeksom (360°) om enige onbekende hoek te vind voordat jy klassifiseer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Vierhoek het drie hoeke van 95°, 80° en 110°. Bepaal die vierde hoek en klassifiseer die moontlike vorm.',
          answer: `Vierde hoek = ${re('75°')}. Met vier verskillende hoeke is dit waarskynlik ʼn algemene vierhoek of trapesium.`,
          steps: [
            `Gebruik die hoeksomreël: die vier hoeke van enige vierhoek tel op tot 360°.`,
            `Som van die drie ${bl('bekende hoeke')}: ${bl('95°')} + ${bl('80°')} + ${bl('110°')} = ${bl('285°')}.`,
            `Bepaal die ${re('onbekende hoek')}: ${re('vierde hoek')} = 360° − ${bl('285°')} = ${re('75°')}.`,
            `<strong>Klassifikasie:</strong> Al vier hoeke (95°, 80°, 110°, 75°) is verskillend en geeneen is 90° nie. Die vorm het nie die ${gr('spesiale eienskappe')} van ʼn reghoek, vierkant, ruit, of parallelogram nie. Dit is heel waarskynlik ʼn ${gr('algemene vierhoek')} of ʼn ${gr('trapesium')} (as een paar sye parallel is).`,
          ],
        },
        {
          question: 'ʼn Parallelogram het een hoek van 65°. Bepaal die ander drie hoeke.',
          answer: `Die hoeke is ${bl('65°')}, ${gr('115°')}, ${bl('65°')}, ${gr('115°')}`,
          steps: [
            `Gebruik die ${gr('eienskap van ʼn parallelogram')}: oorstaande hoeke is gelyk.`,
            `Die hoek oorkant die ${bl('65°')}-hoek is ook ${bl('65°')}.`,
            `Gebruik die ${gr('eienskap')}: aangrensende hoeke in ʼn parallelogram is supplementêr (tel op tot 180°).`,
            `Aangrensende hoek = 180° − ${bl('65°')} = ${gr('115°')}.`,
            `Die oorblywende hoek (oorkant die 115°-hoek) is ook ${gr('115°')}.`,
            `<strong>Antwoord:</strong> Die vier hoeke is ${bl('65°')}, ${gr('115°')}, ${bl('65°')}, ${gr('115°')}. Kontroleer: ${bl('65')} + ${gr('115')} + ${bl('65')} + ${gr('115')} = 360° ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Vierhoek het hoeke van 110°, 85° en 90°. Bepaal die vierde hoek.',
          answer: '75°',
          checkMode: 'auto',
          correctAnswer: '75',
          explanation: 'Vierde hoek = 360° − 110° − 85° − 90° = 75°. Kontroleer: 110+85+90+75 = 360 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Ruit het een hoek van 50°. Bepaal al vier hoeke.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Die hoek oorkant die 50°-hoek',
              correctAnswer: '50',
              explanation: 'In ʼn ruit is oorstaande hoeke gelyk. Dus is die oorstaande hoek ook 50°.',
            },
            {
              label: 'b) Elk van die oorblywende twee hoeke',
              correctAnswer: '130',
              explanation: 'Aangrensende hoeke is supplementêr: 180° − 50° = 130°. Albei oorblywende hoeke is 130°.\nKontroleer: 50+130+50+130 = 360 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Trapesium het hoeke by die basis van 72° en 108°. Die twee nie-parallelle sye vorm hoeke bo-aan.\n\na) Waartoe tel die basishoeke op? Wat bevestig dit oor die basis?\nb) Bepaal die twee bo-hoeke as een bo-hoek 15° meer as die ander is.',
          answer: 'a) 72°+108°=180° — bevestig dat die basissye parallel is (ko-binnehoeke)\nb) Laat die hoeke x en x+15° wees: 2x+15=180, x=82.5°, die bo-hoeke is 82.5° en 97.5°',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing quadrilateral types and their properties and how to use the 360° angle sum to find missing angles and classify shapes" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing all six quadrilateral types — square rectangle parallelogram rhombus trapezium kite — with angle and side properties labelled" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CIRCLES: PARTS AND PROPERTIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'circles-parts-properties',
      title: 'Sirkels — Dele en Eienskappe',
      icon: '○',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Sirkel het sleuteldele — die middelpunt, ${bl('radius')} (middelpunt na rand), ${re('deursnee')} (oor deur die middelpunt, dubbel die radius), ${gr('omtrek')} (afstand rondom) en ʼn ${or('koord')} (ʼn lyn wat twee punte op die sirkel verbind, nie noodwendig deur die middelpunt nie). ʼn Boog is ʼn deel van die omtrek.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('deursnee')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('omtrek')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('koord')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Middelpunt</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die vaste middelste punt van die sirkel. Elke punt op die sirkel is dieselfde afstand van die middelpunt.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Radius</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Reguit lyn vanaf die middelpunt na enige punt op die sirkel. Al die radiusse van dieselfde sirkel is gelyk.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Deursnee</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Reguit lyn deur die middelpunt wat twee punte op die sirkel verbind. Die deursnee = 2 × radius. Dit is die langste koord.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Omtrek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die omtrek (afstand rondom) die sirkel. Dit word bereken met π: O = π × deursnee.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Koord</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Reguit lyn wat enige twee punte op die sirkel verbind. ʼn Koord wat deur die middelpunt gaan, is die deursnee.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Boog</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Deel van die omtrek — ʼn geboë gedeelte van die sirkel tussen twee punte op die rand.</p>` +
        `</div>` +

        `</div>` +

        // ── Key relationship ──────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:140px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Verwantskap</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${re('deursnee')} = 2 × ${bl('radius')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">⟷</div>` +
        `<div style="text-align:center;min-width:140px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Ekwivalent</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${bl('radius')} = ${re('deursnee')} ÷ 2</p>` +
        `</div>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Sirkel het ʼn deursnee van 18 cm. Bepaal die radius.',
          answer: `${bl('Radius')} = ${bl('9 cm')}`,
          steps: [
            `Gebruik die verwantskap: ${bl('radius')} = ${re('deursnee')} ÷ 2.`,
            `Vervang die bekende ${re('deursnee')}: ${bl('radius')} = ${re('18 cm')} ÷ 2 = ${bl('9 cm')}.`,
            `<strong>Antwoord:</strong> Die ${bl('radius')} is ${bl('9 cm')}.`,
          ],
        },
        {
          question: 'Sipho teken ʼn koord wat deur die middelpunt van ʼn sirkel gaan. Wat word hierdie koord genoem?',
          answer: `Hierdie koord word die ${re('deursnee')} genoem`,
          steps: [
            `ʼn ${or('Koord')} is enige reguit lyn wat twee punte op die sirkel verbind.`,
            `Wanneer ʼn ${or('koord')} deur die middelpunt van die sirkel gaan, verbind dit twee punte op die sirkel met die middelpunt presies op die lyn.`,
            `ʼn ${or('Koord')} deur die middelpunt is die langste moontlike ${or('koord')} — dit strek oor die volle wydte van die sirkel.`,
            `<strong>Antwoord:</strong> Hierdie koord word die ${re('deursnee')} genoem. Die ${re('deursnee')} is die spesiale ${or('koord')} wat deur die middelpunt gaan.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Sirkel het ʼn radius van 11 cm. Wat is die deursnee?',
          answer: '22 cm',
          checkMode: 'auto',
          correctAnswer: '22',
          explanation: 'Deursnee = 2 × radius = 2 × 11 = 22 cm ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Bestudeer die dele van ʼn sirkel en beantwoord die vrae.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) ʼn Sirkel het ʼn deursnee van 30 cm. Bepaal die radius.',
              correctAnswer: '15',
              explanation: 'Radius = deursnee ÷ 2 = 30 ÷ 2 = 15 cm ✓',
            },
            {
              label: 'b) ʼn Koord wat NIE deur die middelpunt gaan nie — is dit langer of korter as die deursnee?',
              correctAnswer: 'korter',
              explanation: 'Enige koord wat nie deur die middelpunt gaan nie, is korter as die deursnee. Die deursnee is die langste moontlike koord.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Sirkel het ʼn radius van 7 cm.\n\na) Skryf die deursnee neer.\nb) Die omtrek word bereken met O = π × deursnee. Gebruik π ≈ 3.14 en bereken die omtrek.\nc) ʼn Boog is die helfte van die omtrek. Wat is die lengte van hierdie boog?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Deursnee',
              correctAnswer: '14',
              explanation: 'Deursnee = 2 × 7 = 14 cm ✓',
            },
            {
              label: 'b) Omtrek (gebruik π ≈ 3.14)',
              correctAnswer: '43.96',
              explanation: 'O = π × deursnee = 3.14 × 14 = 43.96 cm ✓',
            },
            {
              label: 'c) Lengte van die helfte van die omtrek (boog)',
              correctAnswer: '21.98',
              explanation: 'Helfte omtrek = 43.96 ÷ 2 = 21.98 cm ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the parts of a circle — centre radius diameter circumference chord and arc — with labelled diagrams and worked examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a circle with all parts clearly labelled — centre radius diameter circumference chord and arc — colour coded to match the colour key" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — missing triangle angle ────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Driehoek het hoeke van 55° en 65°. Bepaal die derde hoek.',
      answer: '60°',
      checkMode: 'auto',
      correctAnswer: '60',
      explanation: 'Derde hoek = 180° − 55° − 65° = 60°. Kontroleer: 55 + 65 + 60 = 180 ✓',
    },

    // ── Q2 Medium — triangle ratio 1:2:3 ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Driehoek het hoeke in die verhouding 1:2:3. Bepaal elke hoek.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Kleinste hoek',
          correctAnswer: '30',
          explanation: 'Totale dele = 1+2+3 = 6. Een deel = 180÷6 = 30°. Kleinste hoek = 1×30 = 30°.',
        },
        {
          label: 'b) Middelste hoek',
          correctAnswer: '60',
          explanation: 'Middelste hoek = 2×30 = 60°.',
        },
        {
          label: 'c) Grootste hoek',
          correctAnswer: '90',
          explanation: 'Grootste hoek = 3×30 = 90°. Kontroleer: 30+60+90 = 180 ✓',
        },
      ],
    },

    // ── Q3 Hard — equilateral triangle reasoning ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê ʼn driehoek kan hoeke in die verhouding 1:1:1 hê en steeds verskillende sylengtes hê. Is hy korrek? Verduidelik.',
      answer: 'Nee — ʼn hoekverhouding van 1:1:1 beteken al die hoeke is 60°, wat dit gelyksydig maak, wat beteken al die sye moet ook gelyk wees.',
      checkMode: 'self',
    },

    // ── Q4 Easy — quadrilateral angle sum ───────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Waartoe tel die hoeke van ʼn vierhoek op?',
      answer: '360°',
      checkMode: 'auto',
      correctAnswer: '360',
      explanation: 'Die vier binnehoeke van enige vierhoek tel altyd op tot 360°.',
    },

    // ── Q5 Medium — missing quadrilateral angle ──────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Vierhoek het hoeke van 90°, 85° en 95°. Bepaal die vierde hoek.',
      answer: '90°',
      checkMode: 'auto',
      correctAnswer: '90',
      explanation: 'Vierde hoek = 360° − 90° − 85° − 95° = 90°. Kontroleer: 90+85+95+90 = 360 ✓',
    },

    // ── Q6 Hard — parallelogram angles ──────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Parallelogram het een hoek van 72°. Bepaal die ander drie hoeke.',
      answer: 'Die oorstaande hoek is ook 72°. Die ander twee hoeke is elk 180−72=108°.',
      checkMode: 'self',
    },

    // ── Q7 Easy — radius from diameter ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Wat is die radius van ʼn sirkel met ʼn deursnee van 24cm?',
      answer: '12cm',
      checkMode: 'auto',
      correctAnswer: '12',
      explanation: 'Radius = deursnee ÷ 2 = 24 ÷ 2 = 12 cm ✓',
    },

    // ── Q8 Easy — diameter from radius ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Wat is die deursnee van ʼn sirkel met ʼn radius van 8cm?',
      answer: '16cm',
      checkMode: 'auto',
      correctAnswer: '16',
      explanation: 'Deursnee = 2 × radius = 2 × 8 = 16 cm ✓',
    },

    // ── Q9 Medium — diameter as chord reasoning ──────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Lerato sê elke deursnee is ook ʼn koord. Is sy korrek? Verduidelik.',
      answer: 'Ja — ʼn deursnee is ʼn koord wat deur die middelpunt gaan, wat dit die langste moontlike koord maak.',
      checkMode: 'self',
    },

    // ── Q10 Hard — algebraic triangle angles ─────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Driehoek het hoeke 4x, 3x en 2x. Bepaal die waarde van x en elke hoek.',
      answer: '4x+3x+2x=180. 9x=180. x=20. Hoeke: 80°, 60°, 40°.',
      checkMode: 'self',
    },

    // ── Q11 Medium — identify a chord ───────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Thabo teken ʼn sirkel en merk twee punte op die omtrek, en verbind hulle met ʼn reguit lyn wat nie deur die middelpunt gaan nie. Wat word hierdie lyn genoem?',
      answer: 'koord',
      checkMode: 'auto',
      correctAnswer: 'koord',
      explanation: 'ʼn Reguit lyn wat twee punte op ʼn sirkel verbind, word ʼn koord genoem. Aangesien dit nie deur die middelpunt gaan nie, is dit nie die deursnee nie.',
    },

    // ── Q12 Hard — rhombus vs square reasoning ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê ʼn ruit en ʼn vierkant is altyd uitruilbare vorms. Is sy korrek? Verduidelik.',
      answer: 'Nee — ʼn ruit het 4 gelyke sye maar vereis nie regte hoeke nie. ʼn Vierkant is ʼn spesiale ruit met regte hoeke, maar nie alle ruite is vierkante nie.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het 2D-vorms bemeester.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer, werk weer deur die studiegids.' },
    ],
  },

  scoreMessages: [
    { minScore: 18, message: 'Uitstekend! ʼn Volpunt-telling — jy het 2D-vorms vir Graad 7 heeltemal bemeester. Hou so aan!' },
    { minScore: 14, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van 2D-vorms. Gaan enige gemiste dele weer deur en jy sal dit perfek hê.' },
    { minScore: 10, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 6, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: "Moenie moed opgee nie — elke kenner was eers ʼn beginner! Gaan weer deur die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling, en probeer dan weer." },
  ],
}
