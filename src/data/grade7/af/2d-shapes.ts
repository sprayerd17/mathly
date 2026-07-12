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
        '<VideoPlaceholder label="Kort video wat driehoektipes volgens sye en hoeke wys en hoe om die hoeksomreël te gebruik om ontbrekende hoeke te vind, insluitend verhoudingsprobleme" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat al ses driehoektipes langs mekaar wys — gelyksydig, gelykbenig en skaleen volgens sye, en skerphoekig, reghoekig en stomphoekig volgens hoeke — met hoekmerkers" />',
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
          answer: 'a) 72°+108°=180° — bevestig dat die basissye parallel is (ko-binnehoeke)\nb) Laat die hoeke x en x+15° wees: 2x+15=180, x=82,5°, die bo-hoeke is 82,5° en 97,5°',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat vierhoektipes en hul eienskappe wys en hoe om die 360°-hoeksom te gebruik om ontbrekende hoeke te vind en vorms te klassifiseer" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat al ses vierhoektipes wys — vierkant, reghoek, parallelogram, ruit, trapesium, vlieër — met hoek- en syeienskappe gemerk" />',
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
          question: 'ʼn Sirkel het ʼn radius van 7 cm.\n\na) Skryf die deursnee neer.\nb) Die omtrek word bereken met O = π × deursnee. Gebruik π ≈ 3,14 en bereken die omtrek.\nc) ʼn Boog is die helfte van die omtrek. Wat is die lengte van hierdie boog?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Deursnee',
              correctAnswer: '14',
              explanation: 'Deursnee = 2 × 7 = 14 cm ✓',
            },
            {
              label: 'b) Omtrek (gebruik π ≈ 3,14)',
              correctAnswer: '43,96',
              explanation: 'O = π × deursnee = 3,14 × 14 = 43,96 cm ✓',
            },
            {
              label: 'c) Lengte van die helfte van die omtrek (boog)',
              correctAnswer: '21,98',
              explanation: 'Helfte omtrek = 43,96 ÷ 2 = 21,98 cm ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die dele van ʼn sirkel verduidelik — middelpunt, radius, deursnee, omtrek, koord en boog — met gemerkte diagramme en uitgewerkte voorbeelde" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram van ʼn sirkel met al die dele duidelik gemerk — middelpunt, radius, deursnee, omtrek, koord en boog — kleurgekodeer volgens die kleursleutel" />',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 1-3 Driehoek-hoeksom | 4-6 Dubbele klassifikasie (sye+hoeke) |
    // 7-10 Vierhoek-hoeksom, eienskappe & buitehoekstelling | 11-14
    // Vierhoekklassifikasie & eienskappe in diepte | 15-17 Veelhoek
    // binne-/buitehoekformules | 18-20 Omtrek, veelstap & sirkeltoepassing
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok A — driehoek-hoeksom
        { difficulty: 'Easy', question: 'In die driehoek soos gewys, is een hoek 48° en ʼn ander 97°. Bepaal die derde hoek.', answer: '35°', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35°', '35 grade'], explanation: 'Derde hoek = 180° − 48° − 97° = 35°. Kontroleer: 48 + 97 + 35 = 180 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="58.2,140 147.7,140 161.8,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 83.2,140 A 28,28 0 0 1 73.2,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="88.2" y="128" font-size="14" fill="#2563eb" font-weight="700">48°</text><path d="M 122.7,140 A 28,28 0 0 0 135.7,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="105.7" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">97°</text><path d="M 150.8,38 A 18,18 0 0 1 172.8,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="161.8" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Driehoekige vlag het twee hoeke van 84° en 51°. Wat is die grootte van die derde hoek?', answer: '45°', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45', '45°', '45 grade'], explanation: 'Derde hoek = 180° − 84° − 51° = 45°. Kontroleer: 84 + 51 + 45 = 180 ✓' },
        { difficulty: 'Medium', question: 'Zanele sê ʼn driehoek kan hoeke van 95°, 65° en 30° hê, soos gewys. Is sy korrek? Verduidelik.', answer: 'Nee — 95 + 65 + 30 = 190°, maar die drie hoeke van enige driehoek moet presies optel tot 180°, so hierdie driehoek is onmoontlik.', checkMode: 'self', explanation: '95 + 65 + 30 = 190°. Aangesien ʼn driehoek se hoeke presies moet optel tot 180°, kan ʼn hoekstel wat optel tot 190° nie ʼn werklike driehoek vorm nie.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="6,4"/><path d="M 50,140 A 28,28 0 0 1 38,115" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">95°</text><path d="M 170,140 A 28,28 0 0 0 182,115" fill="none" stroke="#2563eb" stroke-width="2"/><text x="153" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">65°</text><path d="M 99,40 A 18,18 0 0 1 121,40" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="60" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">30°</text></svg>' },

        // Blok B — dubbele klassifikasie (sye EN hoeke saam)
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye van 6 cm, 6 cm en 6 cm, met hoeke van 60°, 60° en 60°, soos gewys. Klassifiseer hierdie driehoek volgens sowel sy sye as sy hoeke.', answer: 'gelyksydige, skerphoekige driehoek', checkMode: 'auto', correctAnswer: 'gelyksydig skerphoekig', correctAnswers: ['gelyksydig skerphoekig', 'gelyksydig, skerphoekig', 'skerphoekig gelyksydig', 'gelyksydig en skerphoekig'], explanation: 'Al 3 sye is gelyk, dus is dit gelyksydig. Al 3 hoeke (60° elk) is kleiner as 90°, dus is dit ook skerphoekig.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="43.6,140 176.4,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="82" font-size="13" fill="#2563eb" font-weight="700">6 cm</text><text x="149" y="82" font-size="13" fill="#2563eb" font-weight="700">6 cm</text><text x="110" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><path d="M 68.6,140 A 28,28 0 0 1 58.6,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="73.6" y="110" font-size="12" fill="#2563eb" font-weight="700">60°</text><path d="M 151.4,140 A 28,28 0 0 0 161.4,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="146.4" y="110" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60°</text><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="54" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">60°</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het hoeke in die verhouding 2:2:5, soos gewys. Bepaal elke hoek, en klassifiseer dan die driehoek volgens sy hoeke.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Die twee gelyke hoeke', correctAnswer: '40', correctAnswers: ['40', '40°', '40 grade', '40 en 40', '40, 40'], explanation: 'Totale dele = 2+2+5 = 9. Een deel = 180 ÷ 9 = 20°. Elke gelyke hoek = 2 × 20 = 40°.' }, { label: 'b) Die grootste hoek', correctAnswer: '100', correctAnswers: ['100', '100°', '100 grade'], explanation: 'Grootste hoek = 5 × 20 = 100°. Kontroleer: 40 + 40 + 100 = 180 ✓' }, { label: 'c) Klassifiseer die driehoek volgens sy hoeke', correctAnswer: 'stomphoekig', correctAnswers: ['stomphoekig', 'stomphoekige driehoek'], explanation: 'Een hoek (100°) is groter as 90°, dus is die driehoek stomphoekig.' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 110,72.9" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 28,28 0 0 1 45,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="126" font-size="13" fill="#ea580c" font-weight="700">2</text><path d="M 165,140 A 28,28 0 0 0 175,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="160" y="126" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">2</text><path d="M 100,84 A 16,16 0 0 1 120,84" fill="none" stroke="#ea580c" stroke-width="2"/><text x="110" y="102" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">5</text></svg>' },
        { difficulty: 'Hard', question: 'Driehoek P het sye 10 cm, 10 cm, 10 cm. Driehoek Q het sye 10 cm, 10 cm, 6 cm. Verduidelik waarom albei driehoeke gelykbenig is, maar slegs een gelyksydig is.', answer: 'Gelykbenig vereis slegs minstens 2 gelyke sye, en albei driehoeke voldoen hieraan. Gelyksydig vereis al 3 sye gelyk — Driehoek P (10,10,10) voldoen hieraan, maar Driehoek Q (10,10,6) nie, omdat sy derde sy verskil.', checkMode: 'self', explanation: 'Gelykbenig is die swakker voorwaarde (2+ gelyke sye), dus sluit dit gelyksydige driehoeke as ʼn spesiale geval in. Aangesien Driehoek Q se derde sy (6 cm) verskil van die ander twee, misluk dit die "al die sye gelyk"-toets vir gelyksydig, maar slaag steeds die gelykbenige toets.' },

        // Blok C — vierhoek-hoeksom, eienskappe & buitehoekstelling
        { difficulty: 'Easy', question: 'In die vierhoek soos gewys, is drie van die hoeke 92°, 78° en 115°. Bepaal die vierde hoek.', answer: '75°', checkMode: 'auto', correctAnswer: '75', correctAnswers: ['75', '75°', '75 grade'], explanation: 'Vierde hoek = 360° − 92° − 78° − 115° = 75°. Kontroleer: 92+78+115+75 = 360 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">92°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">78°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">115°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Parallelogram, soos gewys, het een hoek van 58°. Bepaal die grootte van die grootste hoek in die parallelogram.', answer: '122°', checkMode: 'auto', correctAnswer: '122', correctAnswers: ['122', '122°', '122 grade'], explanation: 'Oorstaande hoeke in ʼn parallelogram is gelyk, dus is die hoek oorkant 58° ook 58°. Aangrensende hoeke is supplementêr: 180° − 58° = 122°. Die grootste hoek is 122°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">58°</text></svg>' },
        { difficulty: 'Hard', question: 'In die driehoek soos gewys, is twee binnehoeke 50° en 65°. Die buitehoek by die derde hoekpunt word gevorm deur een sy te verleng. Gebruik die buitehoekstelling (ʼn buitehoek is gelyk aan die som van die twee nie-aangrensende binnehoeke) om die grootte van hierdie buitehoek te bepaal.', answer: '115°', checkMode: 'auto', correctAnswer: '115', correctAnswers: ['115', '115°', '115 grade'], explanation: 'Volgens die buitehoekstelling is die buitehoek = som van die twee nie-aangrensende binnehoeke = 50° + 65° = 115°. Kontroleer: die binnehoek by daardie hoekpunt = 180 − 50 − 65 = 65°, en sy buitehoek = 180 − 65 = 115° ✓', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">50°</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">65°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Hard', question: 'Sibusiso sê die buitehoek van ʼn driehoek is altyd kleiner as elk van die twee binnehoeke waarmee dit nie aangrens nie. Is hy korrek? Verduidelik met ʼn voorbeeld.', answer: 'Nee — die buitehoek is gelyk aan die SOM van die twee nie-aangrensende binnehoeke, dus moet dit groter wees as elkeen afsonderlik (mits albei binnehoeke groter as 0° is).', checkMode: 'self', explanation: 'Byvoorbeeld, as die twee nie-aangrensende binnehoeke 50° en 65° is, is die buitehoek 50+65=115°, wat groter is as beide 50° en 65°. Dit sal altyd waar wees aangesien die buitehoek hul som is, nie ʼn breukdeel daarvan nie.' },

        // Blok D — vierhoekklassifikasie & eienskappe in diepte
        { difficulty: 'Medium', question: 'ʼn Vierhoek het 4 gelyke sye, sy diagonale halveer mekaar teen regte hoeke, en dit het geen regte hoeke nie. Identifiseer die vorm.', answer: 'ruit', checkMode: 'auto', correctAnswer: 'ruit', correctAnswers: ['ruit', 'ʼn ruit'], explanation: '4 gelyke sye met diagonale wat teen regte hoeke halveer, maar geen regte hoeke by die hoekpunte nie, beskryf ʼn ruit (nie ʼn vierkant nie).' },
        { difficulty: 'Medium', question: 'Verduidelik die verskil tussen ʼn vlieër en ʼn trapesium in terme van hul sye.', answer: 'ʼn Vlieër het twee afsonderlike pare aangrensende gelyke sye. ʼn Trapesium het presies een paar parallelle sye, en sy sye hoef glad nie gelyk te wees nie.', checkMode: 'self', explanation: 'ʼn Vlieër word gedefinieer deur sylengte-verwantskappe (twee pare aangrensende sye gelyk), terwyl ʼn trapesium gedefinieer word deur ʼn parallelle-sy-verwantskap (presies een paar sye parallel), sonder enige vereiste oor sylengtes.' },
        { difficulty: 'Medium', question: 'ʼn Reghoek het diagonale wat altyd gelyk in lengte is. As een diagonaal van ʼn reghoek 13 cm meet, wat is die lengte van die ander diagonaal?', answer: '13 cm', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13cm', '13 cm'], explanation: 'ʼn Sleuteleienskap van ʼn reghoek is dat sy diagonale gelyk in lengte is. As een diagonaal 13 cm is, moet die ander diagonaal ook 13 cm wees.' },
        { difficulty: 'Hard', question: 'Katlego beweer: "Elke ruit is ʼn vierkant, aangesien albei vorms 4 gelyke sye het." Is sy korrek? Verduidelik.', answer: 'Nee — ʼn ruit het net 4 gelyke sye nodig; dit het nie regte hoeke nodig nie. ʼn Vierkant is ʼn spesiale ruit wat ook 4 regte hoeke het. ʼn Ruit sonder regte hoeke is nie ʼn vierkant nie.', checkMode: 'self', explanation: '4 gelyke sye is nodig maar nie voldoende nie vir ʼn vorm om ʼn vierkant te wees — ʼn vierkant vereis addisioneel dat al 4 hoeke presies 90° is. Die meeste ruite het hoeke wat nie 90° is nie, dus misluk hulle die vierkant-toets al slaag hulle die "4 gelyke sye"-toets.' },

        // Blok E — veelhoek binne-/buitehoekformules
        { difficulty: 'Medium', question: 'Bepaal die som van die binnehoeke van ʼn vyfhoek (5 sye).', answer: '540°', checkMode: 'auto', correctAnswer: '540', correctAnswers: ['540', '540°', '540 grade'], explanation: 'Som van binnehoeke = (n − 2) × 180°. Vir ʼn vyfhoek, n = 5: (5 − 2) × 180 = 3 × 180 = 540°.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Reëlmatige agthoek (8 sye) het alle gelyke binnehoeke. Bepaal die grootte van elke binnehoek.', answer: '135°', checkMode: 'auto', correctAnswer: '135', correctAnswers: ['135', '135°', '135 grade'], explanation: 'Som van binnehoeke = (8 − 2) × 180 = 6 × 180 = 1080°. Elke hoek = 1080° ÷ 8 = 135°.' },
        { difficulty: 'Hard', question: 'ʼn Reëlmatige veelhoek het ʼn buitehoek van 40° by elke hoekpunt. Gebruik die feit dat die buitehoeke van enige veelhoek optel tot 360°, en bepaal die aantal sye van die veelhoek.', answer: '9 sye', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 sye', 'nege', 'nege sye', 'negehoek'], explanation: 'Die buitehoeke van enige veelhoek tel op tot 360°. Aantal sye = 360° ÷ 40° = 9. Die veelhoek is ʼn reëlmatige negehoek.' },

        // Blok F — omtrek, veelstap & sirkeltoepassing
        { difficulty: 'Medium', question: 'Die vorm soos gewys is ʼn reëlmatige sesnoek met sye van 9 cm. Bepaal sy omtrek.', answer: '54 cm', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54cm', '54 cm'], explanation: 'ʼn Reëlmatige sesnoek het 6 gelyke sye. Omtrek = 6 × 9 cm = 54 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,32 160.2,61 160.2,119 110,148 59.8,119 59.8,61" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180.2" y="90" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Gelykbenige driehoek het ʼn hoekpunthoek van 36°. Bepaal die grootte van elk van die twee basishoeke, en gee aan of die driehoek skerphoekig, reghoekig, of stomphoekig is.', answer: 'Elke basishoek = 72°; die driehoek is skerphoekig (36°, 72°, 72° is almal kleiner as 90°)', checkMode: 'self', explanation: 'Die twee basishoeke is gelyk. Basishoeke = (180° − 36°) ÷ 2 = 144° ÷ 2 = 72° elk. Aangesien al drie hoeke (36°, 72°, 72°) kleiner as 90° is, is die driehoek skerphoekig.' },
        { difficulty: 'Medium', question: 'ʼn Sirkel het ʼn deursnee van 34 cm. ʼn Koord word getrek wat nie deur die middelpunt gaan nie. Bepaal die radius van die sirkel, en gee aan of die koord langer of korter as die deursnee is.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Radius', correctAnswer: '17', correctAnswers: ['17', '17cm', '17 cm'], explanation: 'Radius = deursnee ÷ 2 = 34 ÷ 2 = 17 cm.' }, { label: 'b) Is die koord langer of korter as die deursnee?', correctAnswer: 'korter', correctAnswers: ['korter', 'korter as die deursnee'], explanation: 'Enige koord wat nie deur die middelpunt gaan nie, is korter as die deursnee, aangesien die deursnee die langste moontlike koord is.' } ] },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het driehoek- en vierhoek-hoekredenering, klassifikasie, en veelhoekhoekformules bemeester.' },
        { minScore: 14, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
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
        // Blok A — driehoek-hoeksom
        { difficulty: 'Easy', question: 'In die driehoek soos gewys, is een hoek 73° en ʼn ander 59°. Bepaal die derde hoek.', answer: '48°', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48', '48°', '48 grade'], explanation: 'Derde hoek = 180° − 73° − 59° = 48°. Kontroleer: 73 + 59 + 48 = 180 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="57.9,140 162.1,140 93,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 82.9,140 A 28,28 0 0 1 72.9,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="87.9" y="128" font-size="14" fill="#2563eb" font-weight="700">73°</text><path d="M 137.1,140 A 28,28 0 0 0 150.1,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="120.1" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">59°</text><path d="M 82,38 A 18,18 0 0 1 104,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="93" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Vlieërraamwerk het ʼn diagonaal wat dit in twee driehoeke verdeel. Een van hierdie driehoeke het hoeke van 110° en 34°. Bepaal die derde hoek van hierdie driehoek.', answer: '36°', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36°', '36 grade'], explanation: 'Derde hoek = 180° − 110° − 34° = 36°. Kontroleer: 110 + 34 + 36 = 180 ✓' },
        { difficulty: 'Medium', question: 'Tebogo sê ʼn driehoek kan hoeke van 120°, 45° en 20° hê, soos gewys. Is hy korrek? Verduidelik.', answer: 'Nee — 120 + 45 + 20 = 185°, maar die drie hoeke van enige driehoek moet presies optel tot 180°, so hierdie driehoek is onmoontlik.', checkMode: 'self', explanation: '120 + 45 + 20 = 185°. Aangesien ʼn driehoek se hoeke presies moet optel tot 180°, kan ʼn hoekstel wat optel tot 185° nie ʼn werklike driehoek vorm nie.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="6,4"/><path d="M 50,140 A 28,28 0 0 1 38,115" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">120°</text><path d="M 170,140 A 28,28 0 0 0 182,115" fill="none" stroke="#2563eb" stroke-width="2"/><text x="153" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">45°</text><path d="M 99,40 A 18,18 0 0 1 121,40" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="60" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">20°</text></svg>' },

        // Blok B — dubbele klassifikasie (sye EN hoeke saam)
        { difficulty: 'Medium', question: 'ʼn Driehoek het twee sye van 9 cm elk, met hoeke van 100°, 40° en 40°, soos gewys. Klassifiseer hierdie driehoek volgens sowel sy sye as sy hoeke.', answer: 'gelykbenige, stomphoekige driehoek', checkMode: 'auto', correctAnswer: 'gelykbenig stomphoekig', correctAnswers: ['gelykbenig stomphoekig', 'gelykbenig, stomphoekig', 'stomphoekig gelykbenig', 'gelykbenig en stomphoekig'], explanation: 'Twee sye is gelyk (9 cm en 9 cm), dus is dit gelykbenig. Een hoek (100°) is groter as 90°, dus is dit ook stomphoekig.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 110,72.9" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="48" y="106" font-size="13" fill="#2563eb" font-weight="700">9 cm</text><text x="156" y="106" font-size="13" fill="#2563eb" font-weight="700">9 cm</text><path d="M 55,140 A 28,28 0 0 1 45,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="110" font-size="12" fill="#2563eb" font-weight="700">40°</text><path d="M 165,140 A 28,28 0 0 0 175,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="160" y="110" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40°</text><path d="M 100,84 A 16,16 0 0 1 120,84" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="102" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">100°</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het hoeke in die verhouding 1:1:4, soos gewys. Bepaal elke hoek, en klassifiseer dan die driehoek volgens sy hoeke.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Die twee gelyke hoeke', correctAnswer: '30', correctAnswers: ['30', '30°', '30 grade', '30 en 30', '30, 30'], explanation: 'Totale dele = 1+1+4 = 6. Een deel = 180 ÷ 6 = 30°. Elke gelyke hoek = 1 × 30 = 30°.' }, { label: 'b) Die grootste hoek', correctAnswer: '120', correctAnswers: ['120', '120°', '120 grade'], explanation: 'Grootste hoek = 4 × 30 = 120°. Kontroleer: 30 + 30 + 120 = 180 ✓' }, { label: 'c) Klassifiseer die driehoek volgens sy hoeke', correctAnswer: 'stomphoekig', correctAnswers: ['stomphoekig', 'stomphoekige driehoek'], explanation: 'Een hoek (120°) is groter as 90°, dus is die driehoek stomphoekig.' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 110,93.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 28,28 0 0 1 45,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="126" font-size="13" fill="#ea580c" font-weight="700">1</text><path d="M 165,140 A 28,28 0 0 0 175,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="160" y="126" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">1</text><path d="M 100,105 A 16,16 0 0 1 120,105" fill="none" stroke="#ea580c" stroke-width="2"/><text x="110" y="123" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">4</text></svg>' },
        { difficulty: 'Hard', question: 'Driehoek R het sye 8 cm, 8 cm, 8 cm. Driehoek S het sye 8 cm, 8 cm, 3 cm. Verduidelik waarom albei driehoeke gelykbenig is, maar slegs een gelyksydig is.', answer: 'Gelykbenig vereis slegs minstens 2 gelyke sye, en albei driehoeke voldoen hieraan. Gelyksydig vereis al 3 sye gelyk — Driehoek R (8,8,8) voldoen hieraan, maar Driehoek S (8,8,3) nie, omdat sy derde sy verskil.', checkMode: 'self', explanation: 'Gelykbenig is die swakker voorwaarde (2+ gelyke sye), dus sluit dit gelyksydige driehoeke as ʼn spesiale geval in. Aangesien Driehoek S se derde sy (3 cm) verskil van die ander twee, misluk dit die "al die sye gelyk"-toets vir gelyksydig, maar slaag steeds die gelykbenige toets.' },

        // Blok C — vierhoek-hoeksom, eienskappe & buitehoekstelling
        { difficulty: 'Easy', question: 'In die vierhoek soos gewys, is drie van die hoeke 105°, 88° en 132°. Bepaal die vierde hoek.', answer: '35°', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35°', '35 grade'], explanation: 'Vierde hoek = 360° − 105° − 88° − 132° = 35°. Kontroleer: 105+88+132+35 = 360 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">105°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">88°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">132°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Ruit, soos gewys, het een hoek van 74°. Bepaal die grootte van die grootste hoek in die ruit.', answer: '106°', checkMode: 'auto', correctAnswer: '106', correctAnswers: ['106', '106°', '106 grade'], explanation: 'Oorstaande hoeke in ʼn ruit is gelyk, dus is die hoek oorkant 74° ook 74°. Aangrensende hoeke is supplementêr: 180° − 74° = 106°. Die grootste hoek is 106°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">74°</text></svg>' },
        { difficulty: 'Hard', question: 'In die driehoek soos gewys, is twee binnehoeke 72° en 48°. Die buitehoek by die derde hoekpunt word gevorm deur een sy te verleng. Gebruik die buitehoekstelling (ʼn buitehoek is gelyk aan die som van die twee nie-aangrensende binnehoeke) om die grootte van hierdie buitehoek te bepaal.', answer: '120°', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120', '120°', '120 grade'], explanation: 'Volgens die buitehoekstelling is die buitehoek = som van die twee nie-aangrensende binnehoeke = 72° + 48° = 120°. Kontroleer: die binnehoek by daardie hoekpunt = 180 − 72 − 48 = 60°, en sy buitehoek = 180 − 60 = 120° ✓', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="36.8,140 153.2,140 67.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="153.2" y1="140" x2="188.2" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 58.8,140 A 24,24 0 0 1 49.8,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="63.8" y="130" font-size="13" fill="#2563eb" font-weight="700">72°</text><path d="M 131.2,140 A 24,24 0 0 0 140.2,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="126.2" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">48°</text><path d="M 171.2,140 A 18,18 0 0 1 166.2,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="179.2" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Hard', question: 'Nomvula sê die buitehoek van ʼn driehoek kan soms kleiner wees as een van die twee binnehoeke waarmee dit nie aangrens nie. Is sy korrek? Verduidelik met ʼn voorbeeld.', answer: 'Nee — die buitehoek is gelyk aan die SOM van die twee nie-aangrensende binnehoeke, dus moet dit groter wees as elkeen afsonderlik (mits albei binnehoeke groter as 0° is).', checkMode: 'self', explanation: 'Byvoorbeeld, as die twee nie-aangrensende binnehoeke 72° en 48° is, is die buitehoek 72+48=120°, wat groter is as beide 72° en 48°. Dit sal altyd waar wees aangesien die buitehoek hul som is, nie ʼn breukdeel daarvan nie.' },

        // Blok D — vierhoekklassifikasie & eienskappe in diepte
        { difficulty: 'Medium', question: 'ʼn Vierhoek het oorstaande sye gelyk en parallel, oorstaande hoeke gelyk, geen regte hoeke nie, en sy diagonale halveer mekaar maar is nie gelyk in lengte nie. Identifiseer die vorm.', answer: 'parallelogram', checkMode: 'auto', correctAnswer: 'parallelogram', correctAnswers: ['parallelogram', 'ʼn parallelogram'], explanation: 'Oorstaande sye gelyk en parallel, oorstaande hoeke gelyk, geen regte hoeke nie, en diagonale wat halveer maar ongelyk is, beskryf ʼn parallelogram.' },
        { difficulty: 'Medium', question: 'Verduidelik die verskil tussen ʼn reghoek en ʼn parallelogram in terme van hul hoeke.', answer: 'ʼn Reghoek het altyd 4 regte hoeke (90° elk). ʼn Parallelogram vereis net oorstaande hoeke gelyk — sy hoeke hoef nie 90° te wees nie.', checkMode: 'self', explanation: 'ʼn Reghoek is ʼn spesiale parallelogram waar die hoekvoorwaarde strenger is: al vier hoeke moet presies 90° wees, nie net oorstaande pare gelyk aan mekaar nie.' },
        { difficulty: 'Medium', question: 'ʼn Reghoek het diagonale wat altyd gelyk in lengte is. As een diagonaal van ʼn reghoek 21 cm meet, wat is die lengte van die ander diagonaal?', answer: '21 cm', checkMode: 'auto', correctAnswer: '21', correctAnswers: ['21', '21cm', '21 cm'], explanation: 'ʼn Sleuteleienskap van ʼn reghoek is dat sy diagonale gelyk in lengte is. As een diagonaal 21 cm is, moet die ander diagonaal ook 21 cm wees.' },
        { difficulty: 'Hard', question: 'Bongani beweer: "Elke vierkant is ʼn ruit, en elke ruit is ʼn vierkant, aangesien albei 4 gelyke sye het." Is hy korrek? Verduidelik.', answer: 'Hy is half korrek — elke vierkant IS ʼn ruit (ʼn spesiale ruit met regte hoeke), maar nie elke ruit is ʼn vierkant nie, want ʼn ruit het nie regte hoeke nodig nie.', checkMode: 'self', explanation: 'Die verwantskap werk net een kant toe: ʼn vierkant voldoen aan al die vereistes van ʼn ruit (4 gelyke sye) plus ʼn ekstra vereiste (4 regte hoeke), so elke vierkant is ʼn ruit. Maar ʼn algemene ruit het dalk nie regte hoeke nie, dus is dit nie noodwendig ʼn vierkant nie.' },

        // Blok E — veelhoek binne-/buitehoekformules
        { difficulty: 'Medium', question: 'Bepaal die som van die binnehoeke van ʼn sesnoek (6 sye).', answer: '720°', checkMode: 'auto', correctAnswer: '720', correctAnswers: ['720', '720°', '720 grade'], explanation: 'Som van binnehoeke = (n − 2) × 180°. Vir ʼn sesnoek, n = 6: (6 − 2) × 180 = 4 × 180 = 720°.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Reëlmatige tienhoek (10 sye) het alle gelyke binnehoeke. Bepaal die grootte van elke binnehoek.', answer: '144°', checkMode: 'auto', correctAnswer: '144', correctAnswers: ['144', '144°', '144 grade'], explanation: 'Som van binnehoeke = (10 − 2) × 180 = 8 × 180 = 1440°. Elke hoek = 1440° ÷ 10 = 144°.' },
        { difficulty: 'Hard', question: 'ʼn Reëlmatige veelhoek het ʼn buitehoek van 24° by elke hoekpunt. Gebruik die feit dat die buitehoeke van enige veelhoek optel tot 360°, en bepaal die aantal sye van die veelhoek.', answer: '15 sye', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 sye', 'vyftien', 'vyftien sye'], explanation: 'Die buitehoeke van enige veelhoek tel op tot 360°. Aantal sye = 360° ÷ 24° = 15.' },

        // Blok F — omtrek, veelstap & sirkeltoepassing
        { difficulty: 'Medium', question: 'Die vorm soos gewys is ʼn reëlmatige vyfhoek met sye van 12 cm. Bepaal sy omtrek.', answer: '60 cm', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60cm', '60 cm'], explanation: 'ʼn Reëlmatige vyfhoek het 5 gelyke sye. Omtrek = 5 × 12 cm = 60 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,32 165.2,72.1 144.1,136.9 75.9,136.9 54.8,72.1" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="156.9" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Gelykbenige driehoek het twee basishoeke van 63° elk. Bepaal die grootte van die hoekpunthoek, en gee aan of die driehoek skerphoekig, reghoekig, of stomphoekig is.', answer: 'Hoekpunthoek = 54°; die driehoek is skerphoekig (63°, 63°, 54° is almal kleiner as 90°)', checkMode: 'self', explanation: 'Die drie hoeke moet optel tot 180°. Hoekpunthoek = 180° − 63° − 63° = 54°. Aangesien al drie hoeke (63°, 63°, 54°) kleiner as 90° is, is die driehoek skerphoekig.' },
        { difficulty: 'Medium', question: 'ʼn Sirkel het ʼn radius van 15 cm. ʼn Koord word getrek wat deur die middelpunt van die sirkel gaan. Bepaal die deursnee van die sirkel, en gee die spesiale naam vir hierdie spesifieke koord.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Deursnee', correctAnswer: '30', correctAnswers: ['30', '30cm', '30 cm'], explanation: 'Deursnee = 2 × radius = 2 × 15 = 30 cm.' }, { label: 'b) Spesiale naam vir ʼn koord deur die middelpunt', correctAnswer: 'deursnee', correctAnswers: ['deursnee', 'die deursnee'], explanation: 'ʼn Koord wat deur die middelpunt van ʼn sirkel gaan, word die deursnee genoem — dit is ook die langste moontlike koord.' } ] },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy kan hoekreëls, dubbele klassifikasie, en veelhoekformules met selfvertroue toepas.' },
        { minScore: 14, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiuit, meer werklike kontekste + redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok A — driehoek-hoeksom
        { difficulty: 'Easy', question: 'In die driehoek soos gewys, is een hoek 81° en ʼn ander 66°. Bepaal die derde hoek.', answer: '33°', checkMode: 'auto', correctAnswer: '33', correctAnswers: ['33', '33°', '33 grade'], explanation: 'Derde hoek = 180° − 81° − 66° = 33°. Kontroleer: 81 + 66 + 33 = 180 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="75.3,140 144.7,140 93.5,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100.3,140 A 28,28 0 0 1 90.3,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="105.3" y="128" font-size="14" fill="#2563eb" font-weight="700">81°</text><path d="M 119.7,140 A 28,28 0 0 0 132.7,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="102.7" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">66°</text><path d="M 82.5,38 A 18,18 0 0 1 104.5,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="93.5" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Seiljag se seil is in die vorm van ʼn reghoekige driehoek. Een van die ander hoeke meet 38°. Bepaal die grootte van die derde hoek.', answer: '52°', checkMode: 'auto', correctAnswer: '52', correctAnswers: ['52', '52°', '52 grade'], explanation: 'ʼn Reghoekige driehoek het een hoek van 90°. Derde hoek = 180° − 90° − 38° = 52°. Kontroleer: 90 + 38 + 52 = 180 ✓' },
        { difficulty: 'Medium', question: 'Ayanda sê ʼn driehoek kan hoeke van 40°, 40° en 110° hê, soos gewys. Is sy korrek? Verduidelik.', answer: 'Nee — 40 + 40 + 110 = 190°, maar die drie hoeke van enige driehoek moet presies optel tot 180°, so hierdie driehoek is onmoontlik.', checkMode: 'self', explanation: '40 + 40 + 110 = 190°. Aangesien ʼn driehoek se hoeke presies moet optel tot 180°, kan ʼn hoekstel wat optel tot 190° nie ʼn werklike driehoek vorm nie.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="6,4"/><path d="M 50,140 A 28,28 0 0 1 38,115" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">40°</text><path d="M 170,140 A 28,28 0 0 0 182,115" fill="none" stroke="#2563eb" stroke-width="2"/><text x="153" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">40°</text><path d="M 99,40 A 18,18 0 0 1 121,40" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="60" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">110°</text></svg>' },

        // Blok B — dubbele klassifikasie (sye EN hoeke saam)
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye van 7 cm, 9 cm en 11 cm, met hoeke van 40°, 60° en 80°, soos gewys. Klassifiseer hierdie driehoek volgens sowel sy sye as sy hoeke.', answer: 'skaleen, skerphoekige driehoek', checkMode: 'auto', correctAnswer: 'skaleen skerphoekig', correctAnswers: ['skaleen skerphoekig', 'skaleen, skerphoekig', 'skerphoekig skaleen', 'skaleen en skerphoekig'], explanation: 'Al 3 sye is verskillende lengtes, dus is dit skaleen. Al 3 hoeke (40°, 60°, 80°) is kleiner as 90°, dus is dit ook skerphoekig.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 137.8,49.6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="62" y="95" font-size="13" fill="#2563eb" font-weight="700">7 cm</text><text x="170" y="95" font-size="13" fill="#2563eb" font-weight="700">9 cm</text><text x="110" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><path d="M 55,140 A 28,28 0 0 1 45,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="110" font-size="12" fill="#2563eb" font-weight="700">40°</text><path d="M 165,140 A 28,28 0 0 0 175,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="160" y="110" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60°</text><path d="M 128,61 A 16,16 0 0 1 148,61" fill="none" stroke="#2563eb" stroke-width="2"/><text x="138" y="79" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">80°</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het hoeke in die verhouding 1:4:4, soos gewys. Bepaal elke hoek, en klassifiseer dan die driehoek volgens sy hoeke.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Die kleinste hoek', correctAnswer: '20', correctAnswers: ['20', '20°', '20 grade'], explanation: 'Totale dele = 1+4+4 = 9. Een deel = 180 ÷ 9 = 20°. Kleinste hoek = 1 × 20 = 20°.' }, { label: 'b) Die twee gelyke hoeke', correctAnswer: '80', correctAnswers: ['80', '80°', '80 grade', '80 en 80', '80, 80'], explanation: 'Elke gelyke hoek = 4 × 20 = 80°. Kontroleer: 20 + 80 + 80 = 180 ✓' }, { label: 'c) Klassifiseer die driehoek volgens sy hoeke', correctAnswer: 'skerphoekig', correctAnswers: ['skerphoekig', 'skerphoekige driehoek'], explanation: 'Al drie hoeke (20°, 80°, 80°) is kleiner as 90°, dus is die driehoek skerphoekig.' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="89.7,140 130.3,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 114.7,140 A 28,28 0 0 1 104.7,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="119.7" y="126" font-size="13" fill="#ea580c" font-weight="700">4</text><path d="M 105.3,140 A 28,28 0 0 0 115.3,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="100.3" y="126" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">4</text><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#ea580c" stroke-width="2"/><text x="110" y="54" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">1</text></svg>' },
        { difficulty: 'Hard', question: 'Driehoek T het sye 12 cm, 12 cm, 12 cm. Driehoek U het sye 12 cm, 12 cm, 7 cm. Verduidelik waarom albei driehoeke gelykbenig is, maar slegs een gelyksydig is.', answer: 'Gelykbenig vereis slegs minstens 2 gelyke sye, en albei driehoeke voldoen hieraan. Gelyksydig vereis al 3 sye gelyk — Driehoek T (12,12,12) voldoen hieraan, maar Driehoek U (12,12,7) nie, omdat sy derde sy verskil.', checkMode: 'self', explanation: 'Gelykbenig is die swakker voorwaarde (2+ gelyke sye), dus sluit dit gelyksydige driehoeke as ʼn spesiale geval in. Aangesien Driehoek U se derde sy (7 cm) verskil van die ander twee, misluk dit die "al die sye gelyk"-toets vir gelyksydig, maar slaag steeds die gelykbenige toets.' },

        // Blok C — vierhoek-hoeksom, eienskappe & buitehoekstelling
        { difficulty: 'Easy', question: 'In die vierhoek soos gewys, is drie van die hoeke 68°, 152° en 94°. Bepaal die vierde hoek.', answer: '46°', checkMode: 'auto', correctAnswer: '46', correctAnswers: ['46', '46°', '46 grade'], explanation: 'Vierde hoek = 360° − 68° − 152° − 94° = 46°. Kontroleer: 68+152+94+46 = 360 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">68°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">152°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">94°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Parallelogram, soos gewys, het een hoek van 111°. Bepaal die grootte van die kleinste hoek in die parallelogram.', answer: '69°', checkMode: 'auto', correctAnswer: '69', correctAnswers: ['69', '69°', '69 grade'], explanation: 'Oorstaande hoeke in ʼn parallelogram is gelyk, dus is die hoek oorkant 111° ook 111°. Aangrensende hoeke is supplementêr: 180° − 111° = 69°. Die kleinste hoek is 69°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">111°</text></svg>' },
        { difficulty: 'Hard', question: 'In die driehoek soos gewys, is twee binnehoeke 83° en 39°. Die buitehoek by die derde hoekpunt word gevorm deur een sy te verleng. Gebruik die buitehoekstelling (ʼn buitehoek is gelyk aan die som van die twee nie-aangrensende binnehoeke) om die grootte van hierdie buitehoek te bepaal.', answer: '122°', checkMode: 'auto', correctAnswer: '122', correctAnswers: ['122', '122°', '122 grade'], explanation: 'Volgens die buitehoekstelling is die buitehoek = som van die twee nie-aangrensende binnehoeke = 83° + 39° = 122°. Kontroleer: die binnehoek by daardie hoekpunt = 180 − 83 − 39 = 58°, en sy buitehoek = 180 − 58 = 122° ✓', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30.5,140 159.5,140 42.2,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="159.5" y1="140" x2="194.5" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 52.5,140 A 24,24 0 0 1 43.5,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="57.5" y="130" font-size="13" fill="#2563eb" font-weight="700">83°</text><path d="M 137.5,140 A 24,24 0 0 0 146.5,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="132.5" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">39°</text><path d="M 177.5,140 A 18,18 0 0 1 172.5,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="185.5" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Hard', question: 'Precious sê jy kan ʼn driehoek se buitehoek bepaal sonder om albei nie-aangrensende binnehoeke te ken, mits jy die binnehoek by daardie selfde hoekpunt ken. Is sy korrek? Verduidelik.', answer: 'Ja — die binne- en buitehoek by dieselfde hoekpunt is supplementêr (tel op tot 180°), so die buitehoek kan ook bepaal word deur 180° minus die binnehoek by daardie hoekpunt, sonder om die ander twee hoeke te benodig.', checkMode: 'self', explanation: 'ʼn Binnehoek en sy aangrensende buitehoek lê op ʼn reguit lyn, dus tel hulle op tot 180°. Dit gee ʼn tweede, onafhanklike manier om die buitehoek te bepaal: buitehoek = 180° − binnehoek by daardie hoekpunt, wat ooreenstem met die resultaat van die buitehoekstelling.' },

        // Blok D — vierhoekklassifikasie & eienskappe in diepte
        { difficulty: 'Medium', question: 'ʼn Vierhoek het twee pare aangrensende gelyke sye (die twee pare is verskillende lengtes van mekaar), een paar oorstaande hoeke gelyk, en diagonale wat teen regte hoeke sny. Identifiseer die vorm.', answer: 'vlieër', checkMode: 'auto', correctAnswer: 'vlieër', correctAnswers: ['vlieër', 'ʼn vlieër'], explanation: 'Twee pare aangrensende gelyke sye (van verskillende lengtes van mekaar), met een paar gelyke oorstaande hoeke en diagonale wat teen regte hoeke sny, beskryf ʼn vlieër.' },
        { difficulty: 'Medium', question: 'Verduidelik die verskil tussen ʼn vierkant en ʼn ruit in terme van hul hoeke.', answer: 'ʼn Vierkant het altyd 4 regte hoeke (90° elk). ʼn Ruit vereis net oorstaande hoeke gelyk — sy hoeke hoef nie 90° te wees nie.', checkMode: 'self', explanation: 'ʼn Vierkant is ʼn spesiale ruit waar die hoekvoorwaarde strenger is: al vier hoeke moet presies 90° wees, nie net oorstaande pare gelyk aan mekaar nie.' },
        { difficulty: 'Medium', question: 'ʼn Reghoek het diagonale wat altyd gelyk in lengte is. As een diagonaal van ʼn reghoek 25 cm meet, wat is die lengte van die ander diagonaal?', answer: '25 cm', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25cm', '25 cm'], explanation: 'ʼn Sleuteleienskap van ʼn reghoek is dat sy diagonale gelyk in lengte is. As een diagonaal 25 cm is, moet die ander diagonaal ook 25 cm wees.' },
        { difficulty: 'Hard', question: 'Lindiwe beweer: "ʼn Trapesium kan nooit ʼn parallelogram wees nie, want ʼn trapesium het net een paar parallelle sye." Is sy korrek? Verduidelik met behulp van die definisies.', answer: 'Ja, sy is korrek (volgens die presies-een-paar-definisie van trapesium) — ʼn trapesium word gedefinieer deur presies een paar parallelle sye te hê, terwyl ʼn parallelogram twee pare het. ʼn Vorm kan nie albei definisies gelyktydig bevredig nie.', checkMode: 'self', explanation: 'Volgens die standaard CAPS-definisie het ʼn trapesium presies een paar parallelle sye, terwyl ʼn parallelogram vereis dat albei pare oorstaande sye parallel is. Aangesien hierdie voorwaardes mekaar uitsluit (een paar teenoor albei pare), kan ʼn trapesium (volgens hierdie definisie) nie ook ʼn parallelogram wees nie.' },

        // Blok E — veelhoek binne-/buitehoekformules
        { difficulty: 'Medium', question: 'Bepaal die som van die binnehoeke van ʼn sewehoek (7 sye).', answer: '900°', checkMode: 'auto', correctAnswer: '900', correctAnswers: ['900', '900°', '900 grade'], explanation: 'Som van binnehoeke = (n − 2) × 180°. Vir ʼn sewehoek, n = 7: (7 − 2) × 180 = 5 × 180 = 900°.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Reëlmatige twaalfhoek (12 sye) het alle gelyke binnehoeke. Bepaal die grootte van elke binnehoek.', answer: '150°', checkMode: 'auto', correctAnswer: '150', correctAnswers: ['150', '150°', '150 grade'], explanation: 'Som van binnehoeke = (12 − 2) × 180 = 10 × 180 = 1800°. Elke hoek = 1800° ÷ 12 = 150°.' },
        { difficulty: 'Hard', question: 'ʼn Reëlmatige veelhoek het ʼn buitehoek van 30° by elke hoekpunt. Gebruik die feit dat die buitehoeke van enige veelhoek optel tot 360°, en bepaal die aantal sye van die veelhoek.', answer: '12 sye', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 sye', 'twaalf', 'twaalf sye', 'twaalfhoek'], explanation: 'Die buitehoeke van enige veelhoek tel op tot 360°. Aantal sye = 360° ÷ 30° = 12. Die veelhoek is ʼn reëlmatige twaalfhoek.' },

        // Blok F — omtrek, veelstap & sirkeltoepassing
        { difficulty: 'Medium', question: 'Die vorm soos gewys is ʼn reëlmatige agthoek met sye van 7 cm. Bepaal sy omtrek.', answer: '56 cm', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56', '56cm', '56 cm'], explanation: 'ʼn Reëlmatige agthoek het 8 gelyke sye. Omtrek = 8 × 7 cm = 56 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,32 151,49 168,90 151,131 110,148 69,131 52,90 69,49" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="178.0" y="118.2" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Vlieër het twee hoeke van 130° elk by die punte van een diagonaal. Die ander twee hoeke (by die punte van die ander diagonaal) is gelyk aan mekaar. Bepaal die grootte van elk van hierdie twee oorblywende hoeke, en gee aan of die vlieër konveks is (alle hoeke kleiner as 180°).', answer: 'Elke oorblywende hoek = 50°; die vlieër is konveks, aangesien al vier hoeke (130°, 130°, 50°, 50°) kleiner as 180° is', checkMode: 'self', explanation: 'Die vier hoeke van die vlieër tel op tot 360°. Die twee bekende hoeke tel op tot 130° + 130° = 260°, wat 360° − 260° = 100° oorlaat om gelyk tussen die ander twee hoeke verdeel te word: 100° ÷ 2 = 50° elk. Aangesien elke hoek (130°, 130°, 50°, 50°) kleiner as 180° is, is die vlieër konveks.' },
        { difficulty: 'Medium', question: 'ʼn Sirkel het ʼn deursnee van 9,2 cm. Bepaal die radius van die sirkel, en verduidelik waarom die radius altyd presies die helfte van die deursnee sal wees, ongeag die grootte van die sirkel.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Radius', correctAnswer: '4,6', correctAnswers: ['4.6', '4,6', '4.6cm', '4,6cm', '4.6 cm', '4,6 cm'], explanation: 'Radius = deursnee ÷ 2 = 9,2 ÷ 2 = 4,6 cm.' }, { label: 'b) Waarom is die radius altyd presies die helfte van die deursnee?', correctAnswer: 'die deursnee bestaan uit twee radiusse langs mekaar deur die middelpunt', correctAnswers: ['twee radiusse', 'deursnee is twee radiusse', 'die deursnee is twee radiusse langs mekaar'], explanation: 'Die deursnee is ʼn reguit lyn deur die middelpunt wat twee punte op die sirkel verbind. Hierdie lyn bestaan uit twee radiusse langs mekaar (middelpunt na een rand, dan middelpunt na die teenoorgestelde rand), so dit sal altyd presies gelyk wees aan 2 × radius, vir enige grootte sirkel.' } ] },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Fantasties! Jy kan hoekstellings, dubbele klassifikasie, en vormeienskappe op werklike redenering toepas.' },
        { minScore: 14, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
