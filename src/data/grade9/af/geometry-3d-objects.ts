import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (geometry of 3D objects roles) ────────────────────────────
// spheres / curved solids                → blue   (#2563eb)
// cylinders / rectangular wrap           → green  (#16a34a)
// Platonic solids / flat-faced solids    → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Meetkunde van 3D-voorwerpe',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISING PLATONIC SOLIDS AND INTRODUCING SPHERES AND CYLINDERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'platonic-solids-spheres-cylinders',
      title: 'Hersiening van Platoniese Vaste Liggame en Bekendstelling van Sfere en Silinders',
      icon: '⬡',
      explanation:
        `<p style="margin-bottom:16px;">Ons hersien die eienskappe van die 5 ${or('Platoniese vaste liggame')} (tetraëder, kubus, oktaëder, dodekaëder, ikosaëder), en leer dan die eienskappe van ${bl('sfere')} (perfek rond, een geboë oppervlak, geen vlakke/rande/hoekpunte nie) en ${gr('silinders')} (2 sirkelvormige plat vlakke, 1 geboë oppervlak, 2 rande, geen hoekpunte nie).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('sfere')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('silinders')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('Platoniese vaste liggame')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die 5 Platoniese vaste liggame</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Tetraëder</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">4 gelyksydige driehoekige vlakke, 4 hoekpunte, 6 rande.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Kubus</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">6 vierkantige vlakke, 8 hoekpunte, 12 rande.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Oktaëder</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">8 gelyksydige driehoekige vlakke, 6 hoekpunte, 12 rande.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Dodekaëder</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">12 reëlmatige vyfhoekige vlakke, 20 hoekpunte, 30 rande.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Ikosaëder</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">20 gelyksydige driehoekige vlakke, 12 hoekpunte, 30 rande.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sfere en silinders</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Sfeer</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Perfek rond. 1 geboë oppervlak. Elke punt op die oppervlak is dieselfde afstand van die middelpunt af. Geen plat vlakke, geen rande, geen hoekpunte nie.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Silinder</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">2 sirkelvormige plat vlakke (bo en onder). 1 geboë oppervlak. 2 sirkelvormige rande. Geen hoekpunte nie.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom sfere en silinders nie Platoniese vaste liggame is nie</p>` +
        `<p style="margin:0;color:#1e3a8a;">${or('Platoniese vaste liggame')} vereis dat alle plat veelhoekvlakke identiese reëlmatige vorms is. Beide ${bl('sfere')} en ${gr('silinders')} het geboë oppervlaktes, wat hulle onmiddellik diskwalifiseer om Platoniese vaste liggame te wees.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Beskryf die eienskappe van ʼn sfeer.',
          answer: `ʼn ${bl('Sfeer')} het 1 geboë oppervlak, geen plat vlakke, geen rande en geen hoekpunte nie.`,
          steps: [
            `ʼn ${bl('Sfeer')} het <strong>1 geboë oppervlak</strong>, met elke punt op sy oppervlak dieselfde afstand van die middelpunt af.`,
            `Dit het <strong>geen plat vlakke</strong>, <strong>geen rande</strong> en <strong>geen hoekpunte</strong> nie.`,
          ],
        },
        {
          question: 'Sipho vergelyk ʼn silinder met ʼn Platoniese vaste liggaam. Waarom word ʼn silinder nie as ʼn Platoniese vaste liggaam geklassifiseer nie?',
          answer: `ʼn ${gr('Silinder')} is nie ʼn ${or('Platoniese vaste liggaam')} nie omdat dit geboë oppervlaktes het.`,
          steps: [
            `${or('Platoniese vaste liggame')} moet alle plat veelhoekvlakke hê wat identiese reëlmatige vorms is.`,
            `ʼn ${gr('Silinder')} het geboë oppervlaktes, wat dit diskwalifiseer om ʼn ${or('Platoniese vaste liggaam')} te wees.`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video introducing the 5 Platonic solids and comparing them to spheres and cylinders highlighting curved surfaces" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a sphere and a cylinder shown alongside the 5 Platonic solids, highlighting the curved surfaces that distinguish them" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — BUILDING 3D MODELS INCLUDING CYLINDERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'building-3d-models-cylinders',
      title: 'Bou van 3D-modelle Insluitend Silinders',
      icon: '🔵',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik nette om modelle van meetkundige vaste liggame te maak, nou met inbegrip van ${gr('silinders')}. ʼn ${gr('Silinder')} se net bestaan uit ${bl('2 sirkels')} (die bo- en onderkant) en ${gr('1 reghoek')} (wat omvou om die geboë oppervlak te vorm), waar die reghoek se breedte gelyk is aan die sirkel se ${or('omtrek')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('sirkelvormige eindes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('reghoekige omvouing')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('omtrek')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Dele van ʼn silinder se net</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Twee sirkels (bo en onder)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Beide ${bl('sirkels')} is identies. Hul radius is gelyk aan die radius van die silinder.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Reghoek (geboë oppervlak)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${gr('reghoek')} se lengte = die ${or('omtrek')} van die sirkels (2πr). Sy breedte = die hoogte van die silinder.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Sleutelformule</p>` +
        `<p style="margin:0;color:#9a3412;">${or('Omtrek')} = 2 × π × r &nbsp;(gebruik π ≈ 3.14). Wanneer hierdie reghoek omvou, moet sy lengte presies ooreenstem met die sirkel se ${or('omtrek')} sodat die rande belyn.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Beskryf die net van ʼn silinder.',
          answer: `Die net het ${bl('2 identiese sirkels')} (bo en onder) en ${gr('1 reghoek')} waarvan die lengte gelyk is aan die ${or('omtrek')} van die sirkels.`,
          steps: [
            `Die net het ${bl('2 identiese sirkels')} (bo en onder) en ${gr('1 reghoek')}.`,
            `Die ${gr('reghoek')} se lengte is gelyk aan die ${or('omtrek')} van die sirkels, en sy breedte is gelyk aan die hoogte van die silinder.`,
            `Sien die diagram hieronder wat hierdie net plat en gevou wys.`,
          ],
        },
        {
          question: 'Lerato het ʼn silinder met radius 4 cm en hoogte 10 cm. Vind die afmetings van die reghoekige deel van sy net.',
          answer: `${gr('Reghoek')} breedte = 10 cm; lengte = ${or('omtrek')} = 25.12 cm`,
          steps: [
            `${gr('Reghoek')} breedte = hoogte van silinder = <strong>10 cm</strong>.`,
            `${gr('Reghoek')} lengte = ${or('omtrek')} = 2 × π × r = 2 × 3.14 × 4 = <strong>25.12 cm</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing the net of a cylinder — two circles and a rectangle — and how it folds to form the 3D solid" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a cylinder\'s net shown flat — two circles and a rectangle — with an arrow showing how the rectangle wraps around to connect the two circles when folded" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — COMPARING AND CLASSIFYING ALL 3D OBJECTS BY PROPERTIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-classifying-3d-objects',
      title: 'Vergelyking en Klassifisering van Alle 3D-voorwerpe volgens Eienskappe',
      icon: '📦',
      explanation:
        `<p style="margin-bottom:16px;">Ons klassifiseer en vergelyk alle 3D-voorwerpe wat tot dusver behandel is — ${or('Platoniese vaste liggame')}, prismas, piramides, ${bl('sfere')} en ${gr('silinders')} — deur hul vlakke (plat of geboë), rande, hoekpunte, en of Euler se formule van toepassing is (dit is slegs van toepassing op vaste liggame met alle plat vlakke, nie dié met geboë oppervlaktes nie), te ondersoek.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('plat-vlak vaste liggame')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('geboë vaste liggame')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vergelykingspunte')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Euler se formule: V + H − R = 2</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Van toepassing op ${bl('plat-vlak vaste liggame')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Alle ${bl('veelvlakke')} (prismas, piramides, Platoniese vaste liggame) met slegs plat vlakke het goed gedefinieerde vlakke, rande en hoekpunte — Euler se formule geld.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">NIE van toepassing op ${or('geboë vaste liggame')} nie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('Sfere')} en ${or('silinders')} het geboë oppervlaktes en het nie duidelik gedefinieerde hoekpunte nie, dus is Euler se formule nie in die tradisionele sin van toepassing nie.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Klassifikasie-opsomming</p>` +
        `<p style="margin:0;color:#14532d;">Gebruik ${gr('drie vergelykingspunte')} by klassifisering: (1) Is die vlakke plat of geboë? (2) Hoeveel rande en hoekpunte? (3) Is Euler se formule van toepassing? Hierdie onderskeidings skei veelvlakke van geboë vaste liggame.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Is Euler se formule van toepassing op ʼn silinder? Verduidelik.',
          answer: `Nee — Euler se formule (V + H − R = 2) is nie van toepassing op ʼn ${gr('silinder')} nie.`,
          steps: [
            `Euler se formule (V + H − R = 2) is slegs van toepassing op ${bl('veelvlakke')} met plat vlakke en goed gedefinieerde hoekpunte.`,
            `ʼn ${gr('Silinder')} het ${or('geboë oppervlaktes')} en geen hoekpunte nie, dus is die formule nie op dieselfde manier van toepassing nie.`,
          ],
        },
        {
          question: 'Thabo vergelyk ʼn sfeer en ʼn kubus. Lys twee sleutelverskille.',
          answer: `ʼn ${or('Sfeer')} het 1 geboë oppervlak met geen rande of hoekpunte nie. ʼn ${bl('Kubus')} het 6 plat vierkantige vlakke, 12 rande en 8 hoekpunte.`,
          steps: [
            `ʼn ${or('Sfeer')} het 1 geboë oppervlak met geen rande of hoekpunte nie.`,
            `ʼn ${bl('Kubus')} het 6 plat vierkantige vlakke, 12 rande en 8 hoekpunte.`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video comparing and classifying 3D objects by faces edges and vertices and explaining when Euler\'s formula applies" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a comparison table showing Platonic solids, prisms, pyramids, spheres and cylinders side by side with their faces edges vertices and Euler formula applicability" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Hoeveel geboë oppervlaktes het ʼn sfeer?',
      answer: '1',
      checkMode: 'auto',
      correctAnswer: '1',
    },

    // ── Q2 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Hoeveel plat sirkelvormige vlakke het ʼn silinder?',
      answer: '2',
      checkMode: 'auto',
      correctAnswer: '2',
    },

    // ── Q3 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho sê ʼn sfeer het rande. Is hy korrek? Verduidelik.',
      answer: 'Nee — ʼn sfeer het geen rande, geen hoekpunte en geen plat vlakke nie; dit het slegs 1 aaneenlopende geboë oppervlak.',
      checkMode: 'self',
    },

    // ── Q4 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Beskryf die net van ʼn silinder.',
      answer: 'Dit bestaan uit 2 identiese sirkels (bo en onder) en 1 reghoek wat omvou om die geboë sykant te vorm.',
      checkMode: 'self',
    },

    // ── Q5 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Silinder het radius 5 cm en hoogte 12 cm. Vind die afmetings van die reghoekige deel van sy net (tot 2 desimale plekke).',
      answer: 'Breedte = hoogte = 12 cm. Lengte = omtrek = 2 × 3.14 × 5 = 31.4 cm.',
      checkMode: 'self',
    },

    // ── Q6 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Is Euler se formule van toepassing op ʼn sfeer?',
      answer: 'nee',
      checkMode: 'auto',
      correctAnswer: 'nee',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vergelyk ʼn kubus en ʼn sfeer in terme van hoekpunte.',
      answer: 'ʼn kubus het 8 hoekpunte, ʼn sfeer het 0 hoekpunte',
      checkMode: 'auto',
      correctAnswer: 'ʼn kubus het 8 hoekpunte, ʼn sfeer het 0 hoekpunte',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê ʼn silinder is tegnies ʼn soort prisma. Is dit oor die algemeen akkuraat volgens KABV-klassifikasie? Verduidelik.',
      answer: 'Nee — alhoewel ʼn silinder sekere ooreenkomste met ʼn prisma het (twee parallelle sirkelvormige eindes), word dit apart geklassifiseer omdat dit geboë oppervlaktes het, anders as ware prismas wat plat veelhoekvlakke het.',
      checkMode: 'self',
    },

    // ── Q9 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Hoeveel rande het ʼn silinder?',
      answer: '2',
      checkMode: 'auto',
      correctAnswer: '2',
    },

    // ── Q10 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo vergelyk ʼn ikosaëder (20 vlakke, 12 hoekpunte, 30 rande) deur Euler se formule te gebruik. Verifieer dat dit van toepassing is.',
      answer: 'V + H − R = 20 + 12 − 30 = 2. Euler se formule is geverifieer vir hierdie Platoniese vaste liggaam.',
      checkMode: 'self',
    },

    // ── Q11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Silinder het radius 3 cm en hoogte 8 cm. Vind die omtrek van sy sirkelvormige eindes (tot 2 desimale plekke).',
      answer: '18.84cm',
      checkMode: 'auto',
      correctAnswer: '18.84cm',
    },

    // ── Q12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê ʼn keël en ʼn silinder het dieselfde aantal geboë oppervlaktes. Is sy korrek? Verduidelik.',
      answer: 'Ja — albei het presies 1 geboë oppervlak, alhoewel hul algehele vorms verskil (ʼn keël vernou tot ʼn punt, ʼn silinder nie).',
      checkMode: 'self',
    },

    // ── Q13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê alle 3D-voorwerpe met geboë oppervlaktes kan nie Euler se formule volg nie. Is hy heeltemal korrek? Verduidelik.',
      answer: 'Oor die algemeen ja vir eenvoudige geboë vaste liggame soos sfere en silinders, aangesien Euler se formule staatmaak op duidelik gedefinieerde plat vlakke, rande en hoekpunte, wat geboë vaste liggame in die tradisionele sin nie het nie.',
      checkMode: 'self',
    },

    // ── Q14 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die afmetings van die netreghoek vir ʼn silinder met deursnee 14 cm en hoogte 20 cm (tot 2 desimale plekke).',
      answer: 'Radius = 7 cm. Breedte = hoogte = 20 cm. Lengte = omtrek = 2 × 3.14 × 7 = 43.96 cm.',
      checkMode: 'self',
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato vergelyk ʼn tetraëder en ʼn sfeer, en lys verskille in vlakke, rande en hoekpunte.',
      answer: 'ʼn Tetraëder het 4 plat driehoekige vlakke, 6 rande en 4 hoekpunte. ʼn Sfeer het 1 geboë oppervlak, 0 rande en 0 hoekpunte.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het meetkunde van 3D-voorwerpe onder die knie.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },
}
