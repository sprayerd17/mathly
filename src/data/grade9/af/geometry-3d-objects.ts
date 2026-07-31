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
        'Kort video wat die 5 Platoniese vaste liggame bekendstel en dit vergelyk met sfere en silinders, met die klem op geboë oppervlaktes',

      diagramPlaceholder:
        'ʼn Sfeer en ʼn silinder langs die 5 Platoniese vaste liggame getoon, met die geboë oppervlaktes wat hulle onderskei uitgelig',
      diagramSvg:
        '<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg"><circle cx="55" cy="85" r="38" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/><ellipse cx="55" cy="85" rx="38" ry="13" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3"/><text x="55" y="140" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">Sfeer</text><text x="55" y="153" font-size="10" fill="#374151" text-anchor="middle">1 geboë oppervlak</text><ellipse cx="150" cy="47" rx="32" ry="11" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5"/><line x1="118" y1="47" x2="118" y2="113" stroke="#16a34a" stroke-width="2.5"/><line x1="182" y1="47" x2="182" y2="113" stroke="#16a34a" stroke-width="2.5"/><path d="M 118,113 A 32,11 0 0 0 182,113" fill="none" stroke="#16a34a" stroke-width="2.5"/><path d="M 118,113 A 32,11 0 0 1 182,113" fill="none" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/><text x="150" y="140" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">Silinder</text><text x="150" y="153" font-size="10" fill="#374151" text-anchor="middle">2 plat + 1 geboë</text><polygon points="225,60 258,60 258,93 225,93" fill="#fff7ed" stroke="#ea580c" stroke-width="2.5"/><polygon points="225,60 240,45 273,45 258,60" fill="#fff7ed" stroke="#ea580c" stroke-width="2.5"/><polygon points="258,60 273,45 273,78 258,93" fill="#fff7ed" stroke="#ea580c" stroke-width="2.5"/><text x="248" y="140" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">Kubus</text><text x="210" y="153" font-size="8" fill="#374151" text-anchor="middle">(Platoniese vaste liggaam)</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — BUILDING 3D MODELS INCLUDING CYLINDERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'building-3d-models-cylinders',
      title: 'Bou van 3D-modelle Insluitend Silinders',
      icon: '🔵',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik nette om modelle van meetkundige vaste liggame te maak, nou met inbegrip van ${gr('silinders')}. ʼn ${gr('Silinder')} se net bestaan uit ${bl('2 sirkels')} (die bo- en onderkant) en ${gr('1 reghoek')} (wat omvou om die geboë oppervlak te vorm), waar die reghoek se lengte gelyk is aan die sirkel se ${or('omtrek')}.</p>` +

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
        `<p style="margin:0;color:#9a3412;">${or('Omtrek')} = 2 × π × r &nbsp;(gebruik π ≈ 3,14). Wanneer hierdie reghoek omvou, moet sy lengte presies ooreenstem met die sirkel se ${or('omtrek')} sodat die rande belyn.</p>` +
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
          answer: `${gr('Reghoek')} breedte = 10 cm; lengte = ${or('omtrek')} = 25,12 cm`,
          steps: [
            `${gr('Reghoek')} breedte = hoogte van silinder = <strong>10 cm</strong>.`,
            `${gr('Reghoek')} lengte = ${or('omtrek')} = 2 × π × r = 2 × 3,14 × 4 = <strong>25,12 cm</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        'Kort video wat die net van ʼn silinder wys — twee sirkels en ʼn reghoek — en hoe dit vou om die 3D-voorwerp te vorm',

      diagramPlaceholder:
        'ʼn Silinder se net plat getoon — twee sirkels en ʼn reghoek — met ʼn pyl wat wys hoe die reghoek omvou om die twee sirkels te verbind wanneer dit gevou word',
      diagramSvg:
        '<svg viewBox="0 0 260 195" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrEdgeAf" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#374151"/></marker></defs><circle cx="45" cy="45" r="30" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/><text x="45" y="49" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">sirkel</text><rect x="90" y="75" width="120" height="45" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5"/><text x="150" y="65" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">lengte = omtrek (2πr)</text><text x="150" y="101" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">reghoek</text><text x="82" y="100" font-size="11" fill="#16a34a" font-weight="700">h</text><circle cx="45" cy="150" r="30" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/><text x="45" y="154" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">sirkel</text><path d="M 74,55 Q 82,68 90,78" fill="none" stroke="#374151" stroke-width="1.5" stroke-dasharray="3,3" marker-end="url(#arrEdgeAf)"/><path d="M 74,140 Q 82,127 90,117" fill="none" stroke="#374151" stroke-width="1.5" stroke-dasharray="3,3" marker-end="url(#arrEdgeAf)"/></svg>',
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
        'Kort video wat 3D-voorwerpe vergelyk en klassifiseer volgens vlakke, rande en hoekpunte, en verduidelik wanneer Euler se formule van toepassing is',
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
      answer: 'Breedte = hoogte = 12 cm. Lengte = omtrek = 2 × 3,14 × 5 = 31,40 cm.',
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
      answer: '18,84cm',
      checkMode: 'auto',
      correctAnswer: '18,84cm',
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
      answer: 'Radius = 7 cm. Breedte = hoogte = 20 cm. Lengte = omtrek = 2 × 3,14 × 7 = 43,96 cm.',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-2):   Benoem 'n vaste liggaam vanaf 'n woordbeskrywing van sy vlakke
    // Blok 2 (3-6):   Tel vlakke / hoekpunte / rande van 'n benoemde vaste liggaam
    // Blok 3 (7-10):  Euler se formule — verifieer of los op vir 'n ontbrekende waarde
    // Blok 4 (11-13): Netidentifikasie (BENODIG DIAGRAM — hieronder gemerk)
    // Blok 5 (14-16): Vergelyking/klassifikasie van vaste liggame volgens eienskappe
    // Blok 6 (17-19): Multi-stap Euler-formule woordprobleme / foutopsporing
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Benoem 'n vaste liggaam vanaf 'n beskrywing (Easy)
        { difficulty: 'Easy', question: 'ʼn Vaste liggaam het 6 identiese vierkantige vlakke, 8 hoekpunte en 12 rande. Wat word hierdie vaste liggaam genoem?', checkMode: 'auto', options: ['kubus', 'reghoekige prisma', 'vierkantige piramide', 'oktaëder'], correctIndex: 0, explanation: '6 vierkantige vlakke, 8 hoekpunte, 12 rande is die bepalende eienskappe van ʼn kubus. ʼn Reghoekige prisma het ook 6 vlakke, maar dit is nie almal identiese vierkante nie; ʼn vierkantige piramide het slegs 5 vlakke; ʼn oktaëder het 8 driehoekige vlakke.' },
        { difficulty: 'Easy', question: 'ʼn Vaste liggaam het 2 identiese driehoekige vlakke en 3 reghoekige vlakke. Watter tipe vaste liggaam is dit?', checkMode: 'auto', options: ['tetraëder', 'driehoekige prisma', 'driehoekige piramide', 'reghoekige prisma'], correctIndex: 1, explanation: 'Twee identiese (kongruente) driehoekige vlakke wat deur drie reghoeke verbind word, vorm ʼn driehoekige prisma. ʼn Tetraëder (driehoekige piramide) het 4 driehoekige vlakke en geen reghoeke nie; ʼn reghoekige prisma het glad geen driehoekige vlakke nie.' },
        { difficulty: 'Easy', question: 'ʼn Vaste liggaam het 1 vierkantige basis en 4 driehoekige vlakke wat by ʼn enkele apeks ontmoet. Wat word hierdie vaste liggaam genoem?', checkMode: 'auto', options: ['kubus', 'reghoekige prisma', 'vierkantige piramide', 'driehoekige piramide'], correctIndex: 2, explanation: 'Een vierkantige basis plus 4 driehoeke wat by ʼn apeks ontmoet, is die definisie van ʼn vierkantige piramide. ʼn Kubus en ʼn reghoekige prisma het geen apeks nie; ʼn driehoekige piramide het ʼn driehoekige basis, nie ʼn vierkantige een nie.' },

        // Blok 2 — Tel vlakke/hoekpunte/rande van ʼn benoemde vaste liggaam (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Hoeveel hoekpunte het ʼn driehoekige prisma?', checkMode: 'auto', options: ['8', '5', '3', '6'], correctIndex: 3, explanation: 'ʼn Driehoekige prisma het twee driehoekige eindes, elk met 3 hoekpunte: 3 + 3 = 6 hoekpunte. (8 is die hoekpuntgetal van ʼn reghoekige prisma; 5 verwar dit met ʼn vierkantige piramide; 3 tel slegs een driehoekige einde.)' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel rande het ʼn vierkantige piramide?', checkMode: 'auto', options: ['8', '6', '5', '4'], correctIndex: 0, explanation: 'ʼn Vierkantige piramide het 4 basisrande (rondom die vierkant) plus 4 skuinsrande (op na die apeks): 4 + 4 = 8 rande. (6 is die randgetal van ʼn driehoekige prisma; 5 is sy vlakgetal, nie sy randgetal nie; 4 tel slegs die basisrande.)' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel vlakke het ʼn seshoekige prisma?', checkMode: 'auto', options: ['6', '8', '12', '2'], correctIndex: 1, explanation: 'ʼn Seshoekige prisma het 2 seshoekige eindes plus 6 reghoekige syvlakke: 2 + 6 = 8 vlakke. (6 tel slegs die reghoekige sykante; 12 is die randgetal; 2 tel slegs die seshoekige eindes.)' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel hoekpunte het ʼn oktaëder?', checkMode: 'auto', options: ['8', '12', '6', '4'], correctIndex: 2, explanation: 'ʼn Oktaëder (8 driehoekige vlakke) het 6 hoekpunte — dit is een van die 5 Platoniese vaste liggame. (8 is sy vlakgetal; 12 is sy randgetal; 4 is die hoekpuntgetal van ʼn tetraëder.)' },

        // Blok 3 — Euler se formule: verifieer of los op vir ʼn ontbrekende waarde (Medium)
        { difficulty: 'Medium', question: 'ʼn Vaste liggaam het 5 vlakke en 6 hoekpunte. Gebruik Euler se formule (V + H − R = 2) om die aantal rande te vind.', checkMode: 'auto', options: ['11', '13', '7', '9'], correctIndex: 3, explanation: 'V + H − R = 2, so 5 + 6 − R = 2. Dit gee 11 − R = 2, so R = 9. (11 is V + H sonder om op te los; 13 kom van die 2 by te tel in plaas daarvan om dit af te trek; 7 is ʼn algemene rekenfout.)' },
        { difficulty: 'Medium', question: 'ʼn Vaste liggaam het 8 hoekpunte en 12 rande. Gebruik Euler se formule om die aantal vlakke te vind.', checkMode: 'auto', options: ['6', '20', '2', '4'], correctIndex: 0, explanation: 'V + H − R = 2, so V + 8 − 12 = 2. Dit gee V − 4 = 2, so V = 6. (20 is bloot H + R bymekaar getel; 2 verwar Euler se konstante met die antwoord; 4 stop een stap te vroeg en vergeet om die 2 by te tel.)' },
        { difficulty: 'Medium', question: 'ʼn Dodekaëder het 12 vlakke en 30 rande. Gebruik Euler se formule om die aantal hoekpunte te vind.', checkMode: 'auto', options: ['18', '20', '42', '2'], correctIndex: 1, explanation: 'V + H − R = 2, so 12 + H − 30 = 2. Dit gee H − 18 = 2, so H = 20. (18 stop een stap te vroeg; 42 is V + R bymekaar getel; 2 verwar Euler se konstante met die antwoord.)' },
        { difficulty: 'Medium', question: 'Verifieer Euler se formule vir ʼn driehoekige prisma, wat 5 vlakke, 6 hoekpunte en 9 rande het. Wat is V + H − R gelyk aan?', checkMode: 'auto', options: ['0', '1', '2', '3'], correctIndex: 2, explanation: 'V + H − R = 5 + 6 − 9 = 2, wat bevestig dat Euler se formule geld vir die driehoekige prisma. (Ander waardes sou van rekenfoute kom, soos om al drie getalle bymekaar te tel in plaas daarvan om R af te trek.)' },

        // Blok 4 — Netidentifikasie (Medium-Hard) — BENODIG DIAGRAM, selfstandige teks
        { difficulty: 'Medium-Hard', question: 'ʼn Net bestaan uit 6 identiese vierkante soos getoon, rand-aan-rand verbind in ʼn kruisvormige uitleg. In watter vaste liggaam vou hierdie net op?', checkMode: 'auto', options: ['reghoekige prisma', 'vierkantige piramide', 'oktaëder', 'kubus'], correctIndex: 3, explanation: 'ʼn Net van 6 identiese vierkante vou op in ʼn kubus — 6 vierkantige vlakke, wat ooreenstem met V = 6. ʼn Reghoekige prisma se net het nie-vierkantige reghoeke; ʼn vierkantige piramide se net het slegs 1 vierkant plus 4 driehoeke; ʼn oktaëder se net gebruik 8 driehoeke.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="76" y="8" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="76" y="42" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="76" y="76" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="76" y="110" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="42" y="42" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="110" y="42" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Net bestaan uit 2 driehoeke en 3 reghoeke soos getoon, waar die twee driehoeke die teenoorgestelde punte vorm en die 3 reghoeke ʼn aaneenlopende strook vorm wat hulle rand-aan-rand verbind. In watter vaste liggaam vou hierdie net op?', checkMode: 'auto', options: ['driehoekige prisma', 'tetraëder', 'driehoekige piramide', 'seshoekige prisma'], correctIndex: 0, explanation: 'ʼn Net met 2 driehoekige eindes en 3 reghoekige syvlakke vou op in ʼn driehoekige prisma. ʼn Tetraëder (driehoekige piramide) se net gebruik 4 driehoeke sonder reghoeke; ʼn seshoekige prisma se net benodig 2 seshoeke en 6 reghoeke.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="70" width="30" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="70" y="70" width="30" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="100" y="70" width="30" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="40,70 40,120 8,95" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="130,70 130,120 162,95" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Net bestaan uit 1 vyfhoek met 5 driehoeke vasgemaak aan sy kante, soos getoon sodat elke driehoek een rand met die vyfhoek deel. Hoeveel vlakke sal die opgevoude 3D-vaste liggaam hê?', checkMode: 'auto', options: ['5', '6', '7', '10'], correctIndex: 1, explanation: 'Die net vou op in ʼn vyfhoekige piramide: 1 vyfhoekige basis + 5 driehoekige vlakke = 6 vlakke in totaal. (5 tel slegs die driehoeke; 7 verwar dit met ʼn seshoekige piramide; 10 verdubbel per ongeluk.)', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,66 142.3,89.5 130,127.5 90,127.5 77.7,89.5" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,66 142.3,89.5 143.8,53.5" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="142.3,89.5 130,127.5 164.7,117.8" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="130,127.5 90,127.5 110,157.5" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="90,127.5 77.7,89.5 55.3,117.8" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="77.7,89.5 110,66 76.2,53.5" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/></svg>' },

        // Blok 5 — Vergelyking/klassifikasie van vaste liggame volgens eienskappe (Hard)
        { difficulty: 'Hard', question: 'Thabo vergelyk ʼn silinder en ʼn seshoekige prisma — albei het 2 plat parallelle eindvlakke. Op watter vaste liggaam is Euler se formule (V + H − R = 2) van toepassing, en waarom?', checkMode: 'auto', options: ['Die silinder, omdat dit meer simmetrie as die seshoekige prisma het.', 'Geeneen van die twee nie, omdat albei geboë dele het.', 'Die seshoekige prisma, omdat al sy vlakke plat veelhoeke is met duidelik gedefinieerde rande en hoekpunte; die silinder se geboë oppervlak het geen reguit rande of hoekpunte nie.', 'Albei vaste liggame ewe veel, omdat hulle albei 2 parallelle eindvlakke het.'], correctIndex: 2, explanation: 'Euler se formule is van toepassing op die seshoekige prisma omdat al sy vlakke plat veelhoeke is met duidelik gedefinieerde rande en hoekpunte. Dit is nie van toepassing op die silinder nie, omdat sy geboë oppervlak geen reguit rande of hoekpunte in die tradisionele sin het nie.' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn vierkantige piramide en ʼn reghoekige prisma in terme van hul aantal vlakke.', checkMode: 'auto', options: ['ʼn vierkantige piramide het 4 vlakke, ʼn reghoekige prisma het 6 vlakke', 'ʼn vierkantige piramide het 5 vlakke, ʼn reghoekige prisma het 8 vlakke', 'ʼn vierkantige piramide het 6 vlakke, ʼn reghoekige prisma het 5 vlakke', 'ʼn vierkantige piramide het 5 vlakke, ʼn reghoekige prisma het 6 vlakke'], correctIndex: 3, explanation: 'ʼn Vierkantige piramide het 1 basis + 4 driehoeke = 5 vlakke. ʼn Reghoekige prisma het 6 reghoekige vlakke. (4 tel slegs die piramide se driehoeke; 8 verwar die prisma se vlakgetal met sy hoekpuntgetal; die derde opsie ruil die twee totale om.)' },
        { difficulty: 'Hard', question: 'Amahle sê alle prismas en alle piramides voldoen aan Euler se formule, ongeag hoeveel kante die basis het. Watter stelling is korrek?', checkMode: 'auto', options: ['Ja — alle prismas en piramides is veelvlakke met plat veelhoekvlakke en goed gedefinieerde rande en hoekpunte, so Euler se formule geld altyd vir hulle.', 'Nee — Euler se formule werk slegs vir vaste liggame met vierkantige vlakke.', 'Nee — piramides voldoen nooit aan Euler se formule nie omdat hulle ʼn apeks het.', 'Ja, maar slegs wanneer die basis ʼn ewe aantal kante het.'], correctIndex: 0, explanation: 'Amahle is korrek — alle prismas en piramides is veelvlakke wat heeltemal uit plat veelhoekvlakke met goed gedefinieerde rande en hoekpunte bestaan, so Euler se formule (V + H − R = 2) geld vir enige prisma of piramide, ongeag hoeveel kante sy basis het.' },

        // Blok 6 — Multi-stap Euler-formule woordprobleme / foutopsporing (Hard)
        { difficulty: 'Hard', question: 'ʼn Vaste liggaam het 6 vlakke en sy aantal rande is dubbel sy aantal vlakke. Gebruik Euler se formule: hoeveel hoekpunte het dit, en watter vaste liggaam pas by hierdie waardes?', checkMode: 'auto', options: ['H = 10; ʼn vyfhoekige prisma', 'H = 8; ʼn kubus of reghoekige prisma', 'H = 6; ʼn driehoekige prisma', 'H = 4; ʼn tetraëder'], correctIndex: 1, explanation: 'Rande = 2 × 6 = 12. Euler se formule: V + H − R = 2, so 6 + H − 12 = 2, wat H = 8 gee. ʼn Vaste liggaam met 6 vlakke, 8 hoekpunte en 12 rande stem ooreen met ʼn kubus of enige reghoekige prisma.' },
        { difficulty: 'Hard', question: 'Sipho sê ʼn vaste liggaam kan 7 vlakke, 9 hoekpunte en 12 rande hê. Is dit moontlik volgens Euler se formule?', checkMode: 'auto', options: ['Ja, want 7 + 9 + 12 is ʼn ewe getal.', 'Ja, want Euler se formule is slegs van toepassing op prismas.', 'Nee — V + H − R = 7 + 9 − 12 = 4, wat nie gelyk is aan 2 nie, dus is hierdie kombinasie onmoontlik.', 'Nee — Euler se formule kan nie gebruik word tensy die vaste liggaam eers benoem word nie.'], correctIndex: 2, explanation: 'Kontroleer: V + H − R = 7 + 9 − 12 = 4, wat nie gelyk is aan 2 nie. Aangesien Euler se formule misluk, is hierdie kombinasie van vlakke, hoekpunte en rande nie moontlik vir ʼn veelvlak nie.' },
        { difficulty: 'Hard', question: 'ʼn Vyfhoekige piramide het 6 vlakke en 6 hoekpunte. Gebruik Euler se formule: hoeveel rande het dit?', checkMode: 'auto', options: ['12', '8', '9', '10'], correctIndex: 3, explanation: 'Euler se formule: V + H − R = 2, so 6 + 6 − R = 2, wat R = 10 gee. Direkte kontrole: die vyfhoekige basis het 5 rande, plus 5 skuinsrande van elke basishoekpunt na die apeks, wat 5 + 5 = 10 rande gee. (12 verwar dit met ʼn seshoekige piramide se randgetal; 8 is ʼn vierkantige piramide se randgetal; 9 is ʼn driehoekige prisma se randgetal.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die klassifisering van 3D-vaste liggame en die toepassing van Euler se formule bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor nette of Euler se formule na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor vlakke, rande en hoekpunte weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Benoem 'n vaste liggaam vanaf 'n beskrywing (Easy)
        { difficulty: 'Easy', question: 'ʼn Vaste liggaam het 4 identiese gelyksydige driehoekige vlakke, 4 hoekpunte en 6 rande. Wat word hierdie vaste liggaam genoem?', checkMode: 'auto', options: ['tetraëder', 'oktaëder', 'driehoekige prisma', 'vierkantige piramide'], correctIndex: 0, explanation: '4 gelyksydige driehoekige vlakke, 4 hoekpunte, 6 rande is die bepalende eienskappe van ʼn tetraëder (ook driehoekige piramide genoem). ʼn Oktaëder het 8 vlakke; ʼn driehoekige prisma het 2 driehoeke plus 3 reghoeke; ʼn vierkantige piramide het ʼn vierkantige basis.' },
        { difficulty: 'Easy', question: 'ʼn Vaste liggaam het 2 identiese vyfhoekige vlakke en 5 reghoekige vlakke. Watter tipe vaste liggaam is dit?', checkMode: 'auto', options: ['seshoekige prisma', 'vyfhoekige prisma', 'vyfhoekige piramide', 'dodekaëder'], correctIndex: 1, explanation: 'Twee identiese (kongruente) vyfhoekige vlakke wat deur vyf reghoeke verbind word, vorm ʼn vyfhoekige prisma. ʼn Seshoekige prisma benodig seshoekige eindes; ʼn vyfhoekige piramide het slegs 1 vyfhoek en geen reghoeke nie; ʼn dodekaëder het altesaam 12 vyfhoekige vlakke.' },
        { difficulty: 'Easy', question: 'ʼn Vaste liggaam het 1 driehoekige basis en nog 3 driehoekige vlakke wat by ʼn enkele apeks ontmoet. Wat word hierdie vaste liggaam genoem?', checkMode: 'auto', options: ['driehoekige prisma', 'vierkantige piramide', 'driehoekige piramide', 'vyfhoekige piramide'], correctIndex: 2, explanation: 'Een driehoekige basis plus nog 3 driehoeke wat by ʼn apeks ontmoet, is die definisie van ʼn driehoekige piramide (tetraëder). ʼn Driehoekige prisma het reghoeke, nie bykomende driehoeke wat by ʼn punt ontmoet nie; ʼn vierkantige/vyfhoekige piramide het ʼn basis met ʼn ander aantal kante.' },

        // Blok 2 — Tel vlakke/hoekpunte/rande van ʼn benoemde vaste liggaam (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Hoeveel hoekpunte het ʼn reghoekige prisma?', checkMode: 'auto', options: ['6', '4', '12', '8'], correctIndex: 3, explanation: 'ʼn Reghoekige prisma het twee reghoekige eindes, elk met 4 hoekpunte: 4 + 4 = 8 hoekpunte. (6 is sy vlakgetal; 4 tel slegs een einde; 12 is sy randgetal.)' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel rande het ʼn seshoekige piramide?', checkMode: 'auto', options: ['12', '6', '7', '18'], correctIndex: 0, explanation: 'ʼn Seshoekige piramide het 6 basisrande (rondom die seshoek) plus 6 skuinsrande (op na die apeks): 6 + 6 = 12 rande. (6 tel slegs die basisrande; 7 is sy vlakgetal; 18 is die randgetal van ʼn seshoekige prisma.)' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel vlakke het ʼn vyfhoekige prisma?', checkMode: 'auto', options: ['5', '7', '10', '2'], correctIndex: 1, explanation: 'ʼn Vyfhoekige prisma het 2 vyfhoekige eindes plus 5 reghoekige syvlakke: 2 + 5 = 7 vlakke. (5 tel slegs die reghoeke; 10 is die hoekpuntgetal; 2 tel slegs die vyfhoekige eindes.)' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel hoekpunte het ʼn ikosaëder?', checkMode: 'auto', options: ['20', '30', '12', '6'], correctIndex: 2, explanation: 'ʼn Ikosaëder (20 driehoekige vlakke) het 12 hoekpunte — dit is een van die 5 Platoniese vaste liggame. (20 is sy vlakgetal; 30 is sy randgetal; 6 is die hoekpuntgetal van ʼn oktaëder.)' },

        // Blok 3 — Euler se formule: verifieer of los op vir ʼn ontbrekende waarde (Medium)
        { difficulty: 'Medium', question: 'ʼn Vaste liggaam het 7 vlakke en 10 hoekpunte. Gebruik Euler se formule (V + H − R = 2) om die aantal rande te vind.', checkMode: 'auto', options: ['17', '3', '19', '15'], correctIndex: 3, explanation: 'V + H − R = 2, so 7 + 10 − R = 2. Dit gee 17 − R = 2, so R = 15. (17 is V + H sonder om op te los; 3 kom van ʼn tekenfout; 19 tel die konstante by in plaas daarvan om dit af te trek.)' },
        { difficulty: 'Medium', question: 'ʼn Vaste liggaam het 5 hoekpunte en 8 rande. Gebruik Euler se formule om die aantal vlakke te vind.', checkMode: 'auto', options: ['5', '3', '13', '2'], correctIndex: 0, explanation: 'V + H − R = 2, so V + 5 − 8 = 2. Dit gee V − 3 = 2, so V = 5. (3 stop een stap te vroeg; 13 is H + R bymekaar getel; 2 verwar Euler se konstante met die antwoord.)' },
        { difficulty: 'Medium', question: 'ʼn Ikosaëder het 20 vlakke en 30 rande. Gebruik Euler se formule om die aantal hoekpunte te vind.', checkMode: 'auto', options: ['10', '12', '50', '2'], correctIndex: 1, explanation: 'V + H − R = 2, so 20 + H − 30 = 2. Dit gee H − 10 = 2, so H = 12. (10 stop een stap te vroeg; 50 is V + R bymekaar getel; 2 verwar Euler se konstante met die antwoord.)' },
        { difficulty: 'Medium', question: 'Verifieer Euler se formule vir ʼn vierkantige piramide, wat 5 vlakke, 5 hoekpunte en 8 rande het. Wat is V + H − R gelyk aan?', checkMode: 'auto', options: ['0', '1', '2', '3'], correctIndex: 2, explanation: 'V + H − R = 5 + 5 − 8 = 2, wat bevestig dat Euler se formule geld vir die vierkantige piramide.' },

        // Blok 4 — Netidentifikasie (Medium-Hard) — BENODIG DIAGRAM, selfstandige teks
        { difficulty: 'Medium-Hard', question: 'ʼn Net bestaan uit 1 vierkant met 4 driehoeke vasgemaak aan sy kante, soos getoon sodat elke driehoek een rand met die vierkant deel. In watter vaste liggaam vou hierdie net op?', checkMode: 'auto', options: ['driehoekige prisma', 'tetraëder', 'reghoekige prisma', 'vierkantige piramide'], correctIndex: 3, explanation: 'ʼn Net met ʼn vierkantige basis en 4 driehoeke daarom heen vou op in ʼn vierkantige piramide. ʼn Driehoekige prisma of tetraëder se net gebruik slegs driehoeke (met reghoeke vir die prisma) sonder ʼn vierkantige basis; ʼn reghoekige prisma se net gebruik 6 reghoeke, nie driehoeke nie.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="85" y="70" width="50" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="85,70 135,70 110,35" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="85,120 135,120 110,155" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="85,70 85,120 50,95" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="135,70 135,120 170,95" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Net bestaan uit 2 seshoeke en 6 reghoeke soos getoon, waar die twee seshoeke die teenoorgestelde punte vorm en die 6 reghoeke ʼn aaneenlopende strook vorm wat hulle rand-aan-rand verbind. In watter vaste liggaam vou hierdie net op?', checkMode: 'auto', options: ['seshoekige prisma', 'vyfhoekige prisma', 'seshoekige piramide', 'oktaëder'], correctIndex: 0, explanation: 'ʼn Net met 2 seshoekige eindes en 6 reghoekige syvlakke vou op in ʼn seshoekige prisma. ʼn Vyfhoekige prisma benodig vyfhoeke, nie seshoeke nie; ʼn seshoekige piramide se net het slegs 1 seshoek plus driehoeke; ʼn oktaëder se net gebruik 8 driehoeke.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="53,82 30.5,69 8,82 8,108 30.5,121 53,108" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="53" y="82" width="19" height="26" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="72" y="82" width="19" height="26" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="91" y="82" width="19" height="26" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="110" y="82" width="19" height="26" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="129" y="82" width="19" height="26" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="148" y="82" width="19" height="26" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="167,82 189.5,69 212,82 212,108 189.5,121 167,108" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Net bestaan uit 4 identiese driehoeke soos getoon, rand-aan-rand verbind met 1 driehoek in die middel en die ander 3 vasgemaak aan sy kante. Hoeveel vlakke sal die opgevoude 3D-vaste liggaam hê?', checkMode: 'auto', options: ['3', '4', '6', '8'], correctIndex: 1, explanation: 'Die net vou op in ʼn tetraëder (driehoekige piramide): al 4 driehoeke word die 4 vlakke van die vaste liggaam. (3 tel te min; 6 verwar dit met ʼn oktaëder se vlakgetal; 8 verdubbel die driehoekgetal.)', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,60 75,121 145,121" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="75,121 145,121 110,182" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,60 75,121 41,79" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,60 145,121 179,79" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/></svg>' },

        // Blok 5 — Vergelyking/klassifikasie van vaste liggame volgens eienskappe (Hard)
        { difficulty: 'Hard', question: 'Lerato vergelyk ʼn sfeer en ʼn dodekaëder — albei word soms beskryf as "rond-lykende" vaste liggame. Op watter vaste liggaam is Euler se formule van toepassing, en waarom?', checkMode: 'auto', options: ['Die sfeer, omdat dit die meeste simmetrie van enige vaste liggaam het.', 'Geeneen van die twee nie, omdat albei te veel vlakke het om te tel.', 'Die dodekaëder, omdat al sy vlakke plat vyfhoeke is met duidelik gedefinieerde rande en hoekpunte; die sfeer se oppervlak is heeltemal geboë, sonder plat vlakke, rande of hoekpunte.', 'Albei ewe veel, omdat hulle albei van ver af rond lyk.'], correctIndex: 2, explanation: 'Euler se formule is van toepassing op die dodekaëder omdat al sy vlakke plat vyfhoeke is met duidelik gedefinieerde rande en hoekpunte. Dit is nie van toepassing op die sfeer nie, omdat sy hele oppervlak geboë is, met geen plat vlakke, reguit rande of hoekpunte nie.' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn driehoekige piramide en ʼn driehoekige prisma in terme van hul aantal hoekpunte.', checkMode: 'auto', options: ['ʼn driehoekige piramide het 6 hoekpunte, ʼn driehoekige prisma het 4 hoekpunte', 'ʼn driehoekige piramide het 3 hoekpunte, ʼn driehoekige prisma het 6 hoekpunte', 'ʼn driehoekige piramide het 4 hoekpunte, ʼn driehoekige prisma het 9 hoekpunte', 'ʼn driehoekige piramide het 4 hoekpunte, ʼn driehoekige prisma het 6 hoekpunte'], correctIndex: 3, explanation: 'ʼn Driehoekige piramide het 4 hoekpunte (3 basis + 1 apeks). ʼn Driehoekige prisma het 6 hoekpunte (3 + 3 op sy twee driehoekige eindes). (Die eerste opsie ruil die totale om; die tweede tel te min basishoekpunte vir die piramide; die derde verwar 9 met die prisma se randgetal.)' },
        { difficulty: 'Hard', question: 'Kagiso sê alle Platoniese vaste liggame voldoen aan Euler se formule omdat hulle almal uit identiese reëlmatige plat vlakke bestaan. Watter stelling is korrek?', checkMode: 'auto', options: ['Ja — elke Platoniese vaste liggaam is ʼn veelvlak met plat veelhoekvlakke en goed gedefinieerde rande en hoekpunte, so Euler se formule geld vir al 5 daarvan.', 'Nee — Euler se formule is slegs van toepassing op die kubus onder die Platoniese vaste liggame.', 'Nee — Platoniese vaste liggame het geboë oppervlaktes, so Euler se formule is nooit van toepassing nie.', 'Ja, maar slegs vir vaste liggame met driehoekige vlakke.'], correctIndex: 0, explanation: 'Kagiso is korrek — elke Platoniese vaste liggaam is ʼn veelvlak met slegs plat veelhoekvlakke en duidelik gedefinieerde rande en hoekpunte, so Euler se formule (V + H − R = 2) geld vir al 5 Platoniese vaste liggame, ongeag watter reëlmatige veelhoek sy vlakke vorm.' },

        // Blok 6 — Multi-stap Euler-formule woordprobleme / foutopsporing (Hard)
        { difficulty: 'Hard', question: 'ʼn Vaste liggaam het 8 vlakke en 12 rande. Gebruik Euler se formule: hoeveel hoekpunte het dit, en watter vaste liggaam pas by hierdie waardes?', checkMode: 'auto', options: ['H = 8; ʼn kubus', 'H = 6; ʼn oktaëder', 'H = 12; ʼn seshoekige prisma', 'H = 2; ʼn driehoekige prisma'], correctIndex: 1, explanation: 'Euler se formule: V + H − R = 2, so 8 + H − 12 = 2, wat H = 6 gee. ʼn Vaste liggaam met 8 vlakke, 6 hoekpunte en 12 rande stem ooreen met ʼn oktaëder.' },
        { difficulty: 'Hard', question: 'Naledi sê ʼn vaste liggaam kan 6 vlakke, 6 hoekpunte en 10 rande hê. Is dit moontlik volgens Euler se formule?', checkMode: 'auto', options: ['Nee — V + H − R = 6 + 6 − 10 = 4, wat nie gelyk is aan 2 nie.', 'Nee — Euler se formule is slegs van toepassing wanneer V = H.', 'Ja — V + H − R = 6 + 6 − 10 = 2, so hierdie kombinasie is moontlik (byvoorbeeld ʼn vyfhoekige piramide).', 'Ja, maar slegs vir vaste liggame met geboë oppervlaktes.'], correctIndex: 2, explanation: 'Kontroleer: V + H − R = 6 + 6 − 10 = 2, wat gelyk is aan 2. Aangesien Euler se formule geld, is hierdie kombinasie van vlakke, hoekpunte en rande moontlik vir ʼn veelvlak (byvoorbeeld ʼn vyfhoekige piramide).' },
        { difficulty: 'Hard', question: 'ʼn Seshoekige piramide het 7 vlakke en 7 hoekpunte. Gebruik Euler se formule: hoeveel rande het dit?', checkMode: 'auto', options: ['10', '8', '9', '12'], correctIndex: 3, explanation: 'Euler se formule: V + H − R = 2, so 7 + 7 − R = 2, wat R = 12 gee. Direkte kontrole: die seshoekige basis het 6 rande, plus 6 skuinsrande van elke basishoekpunt na die apeks, wat 6 + 6 = 12 rande gee. (10 is ʼn vyfhoekige piramide se randgetal; 8 is ʼn vierkantige piramide se randgetal; 9 is ʼn driehoekige prisma se randgetal.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die klassifisering van 3D-vaste liggame en die toepassing van Euler se formule bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor nette of Euler se formule na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor vlakke, rande en hoekpunte weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Benoem 'n vaste liggaam vanaf 'n beskrywing (Easy)
        { difficulty: 'Easy', question: 'ʼn Vaste liggaam het 8 identiese gelyksydige driehoekige vlakke, 6 hoekpunte en 12 rande. Wat word hierdie vaste liggaam genoem?', checkMode: 'auto', options: ['oktaëder', 'ikosaëder', 'tetraëder', 'seshoekige prisma'], correctIndex: 0, explanation: '8 gelyksydige driehoekige vlakke, 6 hoekpunte, 12 rande is die bepalende eienskappe van ʼn oktaëder. ʼn Ikosaëder het 20 vlakke; ʼn tetraëder het slegs 4 vlakke; ʼn seshoekige prisma het seshoekige eindes, nie net driehoeke nie.' },
        { difficulty: 'Easy', question: 'ʼn Vaste liggaam het 2 identiese seshoekige vlakke en 6 reghoekige vlakke. Watter tipe vaste liggaam is dit?', checkMode: 'auto', options: ['vyfhoekige prisma', 'seshoekige prisma', 'seshoekige piramide', 'oktaëder'], correctIndex: 1, explanation: 'Twee identiese (kongruente) seshoekige vlakke wat deur ses reghoeke verbind word, vorm ʼn seshoekige prisma. ʼn Vyfhoekige prisma benodig vyfhoeke; ʼn seshoekige piramide het slegs 1 seshoek en geen reghoeke nie; ʼn oktaëder het 8 driehoekige vlakke.' },
        { difficulty: 'Easy', question: 'ʼn Vaste liggaam het 1 vyfhoekige basis en 5 driehoekige vlakke wat by ʼn enkele apeks ontmoet. Wat word hierdie vaste liggaam genoem?', checkMode: 'auto', options: ['vyfhoekige prisma', 'seshoekige piramide', 'vyfhoekige piramide', 'vierkantige piramide'], correctIndex: 2, explanation: 'Een vyfhoekige basis plus 5 driehoeke wat by ʼn apeks ontmoet, is die definisie van ʼn vyfhoekige piramide. ʼn Vyfhoekige prisma het reghoeke in plaas van ontmoetende driehoeke; ʼn seshoekige piramide het ʼn basis met 6 kante; ʼn vierkantige piramide het ʼn basis met 4 kante.' },

        // Blok 2 — Tel vlakke/hoekpunte/rande van ʼn benoemde vaste liggaam (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Hoeveel hoekpunte het ʼn vyfhoekige prisma?', checkMode: 'auto', options: ['7', '5', '15', '10'], correctIndex: 3, explanation: 'ʼn Vyfhoekige prisma het twee vyfhoekige eindes, elk met 5 hoekpunte: 5 + 5 = 10 hoekpunte. (7 is sy vlakgetal; 5 tel slegs een einde; 15 is sy randgetal.)' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel rande het ʼn driehoekige piramide?', checkMode: 'auto', options: ['6', '4', '3', '9'], correctIndex: 0, explanation: 'ʼn Driehoekige piramide het 3 basisrande (rondom die driehoek) plus 3 skuinsrande (op na die apeks): 3 + 3 = 6 rande. (4 is sy vlak-/hoekpuntgetal; 3 tel slegs die basis; 9 is die randgetal van ʼn driehoekige prisma.)' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel vlakke het ʼn reghoekige prisma?', checkMode: 'auto', options: ['8', '6', '12', '4'], correctIndex: 1, explanation: 'ʼn Reghoekige prisma het 6 reghoekige vlakke in totaal (bo, onder en 4 kante). (8 is sy hoekpuntgetal; 12 is sy randgetal; 4 tel slegs die sykante.)' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel hoekpunte het ʼn dodekaëder?', checkMode: 'auto', options: ['12', '30', '20', '8'], correctIndex: 2, explanation: 'ʼn Dodekaëder (12 vyfhoekige vlakke) het 20 hoekpunte — dit is een van die 5 Platoniese vaste liggame. (12 is sy vlakgetal; 30 is sy randgetal; 8 is die hoekpuntgetal van ʼn kubus.)' },

        // Blok 3 — Euler se formule: verifieer of los op vir ʼn ontbrekende waarde (Medium)
        { difficulty: 'Medium', question: 'ʼn Vaste liggaam het 6 vlakke en 8 hoekpunte. Gebruik Euler se formule (V + H − R = 2) om die aantal rande te vind.', checkMode: 'auto', options: ['14', '2', '16', '12'], correctIndex: 3, explanation: 'V + H − R = 2, so 6 + 8 − R = 2. Dit gee 14 − R = 2, so R = 12. (14 is V + H sonder om op te los; 2 verwar Euler se konstante met die antwoord; 16 tel by in plaas daarvan om af te trek.)' },
        { difficulty: 'Medium', question: 'ʼn Vaste liggaam het 6 hoekpunte en 9 rande. Gebruik Euler se formule om die aantal vlakke te vind.', checkMode: 'auto', options: ['5', '3', '15', '2'], correctIndex: 0, explanation: 'V + H − R = 2, so V + 6 − 9 = 2. Dit gee V − 3 = 2, so V = 5. (3 stop een stap te vroeg; 15 is H + R bymekaar getel; 2 verwar Euler se konstante met die antwoord.)' },
        { difficulty: 'Medium', question: 'ʼn Oktaëder het 8 vlakke en 12 rande. Gebruik Euler se formule om die aantal hoekpunte te vind.', checkMode: 'auto', options: ['4', '6', '20', '2'], correctIndex: 1, explanation: 'V + H − R = 2, so 8 + H − 12 = 2. Dit gee H − 4 = 2, so H = 6. (4 stop een stap te vroeg; 20 is V + R bymekaar getel; 2 verwar Euler se konstante met die antwoord.)' },
        { difficulty: 'Medium', question: 'Verifieer Euler se formule vir ʼn seshoekige prisma, wat 8 vlakke, 12 hoekpunte en 18 rande het. Wat is V + H − R gelyk aan?', checkMode: 'auto', options: ['0', '1', '2', '4'], correctIndex: 2, explanation: 'V + H − R = 8 + 12 − 18 = 2, wat bevestig dat Euler se formule geld vir die seshoekige prisma.' },

        // Blok 4 — Netidentifikasie (Medium-Hard) — BENODIG DIAGRAM, selfstandige teks
        { difficulty: 'Medium-Hard', question: 'ʼn Net bestaan uit drie pare passende reghoeke soos getoon, rand-aan-rand verbind om op te vou tot ʼn geslote boks. In watter vaste liggaam vou hierdie net op?', checkMode: 'auto', options: ['driehoekige prisma', 'vyfhoekige prisma', 'seshoekige prisma', 'reghoekige prisma'], correctIndex: 3, explanation: 'ʼn Net met drie pare passende reghoeke vou op in ʼn reghoekige prisma. ʼn Driehoekige, vyfhoekige of seshoekige prisma se net benodig 2 passende veelhoekige eindes plus reghoeke, nie drie pare reghoeke alleen nie.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="60" width="26" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="56" y="60" width="40" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="96" y="60" width="26" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="122" y="60" width="40" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="56" y="34" width="40" height="26" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="56" y="94" width="40" height="26" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Net bestaan uit 2 vyfhoeke en 5 reghoeke soos getoon, waar die twee vyfhoeke die teenoorgestelde punte vorm en die 5 reghoeke ʼn aaneenlopende strook vorm wat hulle rand-aan-rand verbind. In watter vaste liggaam vou hierdie net op?', checkMode: 'auto', options: ['vyfhoekige prisma', 'seshoekige prisma', 'vyfhoekige piramide', 'oktaëder'], correctIndex: 0, explanation: 'ʼn Net met 2 vyfhoekige eindes en 5 reghoekige syvlakke vou op in ʼn vyfhoekige prisma. ʼn Seshoekige prisma benodig seshoeke; ʼn vyfhoekige piramide se net het slegs 1 vyfhoek en geen reghoeke nie; ʼn oktaëder se net gebruik 8 driehoeke.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,80 26.5,70.7 8.8,95 26.5,119.3 55,110" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="55" y="80" width="22" height="30" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="77" y="80" width="22" height="30" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="99" y="80" width="22" height="30" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="121" y="80" width="22" height="30" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="143" y="80" width="22" height="30" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="165,80 193.5,70.7 211.2,95 193.5,119.3 165,110" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Net bestaan uit 1 seshoek met 6 driehoeke vasgemaak aan sy kante, soos getoon sodat elke driehoek een rand met die seshoek deel. Hoeveel vlakke sal die opgevoude 3D-vaste liggaam hê?', checkMode: 'auto', options: ['6', '7', '8', '12'], correctIndex: 1, explanation: 'Die net vou op in ʼn seshoekige piramide: 1 seshoekige basis + 6 driehoekige vlakke = 7 vlakke in totaal. (6 tel slegs die driehoeke; 8 verwar dit met ʼn oktaëder se vlakgetal; 12 verdubbel per ongeluk.)', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="142,100 126,127.7 94,127.7 78,100 94,72.3 126,72.3" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="142,100 126,127.7 156.5,126.9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="126,127.7 94,127.7 110,153.7" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="94,127.7 78,100 63.5,126.9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="78,100 94,72.3 63.5,73.1" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="94,72.3 126,72.3 110,46.3" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="126,72.3 142,100 156.5,73.1" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/></svg>' },

        // Blok 5 — Vergelyking/klassifikasie van vaste liggame volgens eienskappe (Hard)
        { difficulty: 'Hard', question: 'Zanele vergelyk ʼn keël en ʼn driehoekige piramide — albei vernou van ʼn basis na ʼn enkele punt. Op watter vaste liggaam is Euler se formule van toepassing, en waarom?', checkMode: 'auto', options: ['Die keël, omdat sy apeks net soos ʼn piramide se apeks as ʼn hoekpunt tel.', 'Geeneen van die twee nie, omdat albei tot ʼn punt vernou.', 'Die driehoekige piramide, omdat al sy vlakke plat driehoeke is met duidelik gedefinieerde rande en hoekpunte; die keël het ʼn geboë oppervlak sonder reguit rande, en sy apeks is nie ʼn ware veelvlak-hoekpunt nie.', 'Albei ewe veel, omdat hulle albei presies een basis het.'], correctIndex: 2, explanation: 'Euler se formule is van toepassing op die driehoekige piramide omdat al sy vlakke plat driehoeke is met duidelik gedefinieerde rande en hoekpunte. Dit is nie van toepassing op die keël nie, omdat dit ʼn geboë oppervlak sonder reguit rande het, en sy apeks nie ʼn ware veelvlak-hoekpunt in die tradisionele sin is nie.' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn vyfhoekige piramide en ʼn vyfhoekige prisma in terme van hul aantal rande.', checkMode: 'auto', options: ['ʼn vyfhoekige piramide het 15 rande, ʼn vyfhoekige prisma het 10 rande', 'ʼn vyfhoekige piramide het 5 rande, ʼn vyfhoekige prisma het 15 rande', 'ʼn vyfhoekige piramide het 10 rande, ʼn vyfhoekige prisma het 12 rande', 'ʼn vyfhoekige piramide het 10 rande, ʼn vyfhoekige prisma het 15 rande'], correctIndex: 3, explanation: 'ʼn Vyfhoekige piramide het 10 rande (5 basis + 5 skuins). ʼn Vyfhoekige prisma het 15 rande (5 + 5 op sy twee vyfhoekige eindes, plus 5 verbindingsrande). (Die eerste opsie ruil die totale om; die tweede tel te min basisrande vir die piramide; die derde verwar 12 met ʼn seshoekige prisma se randgetal.)' },
        { difficulty: 'Hard', question: 'Bongani sê alle prismas voldoen aan Euler se formule omdat hul syvlakke altyd reghoeke is. Watter stelling evalueer sy redenasie die beste?', checkMode: 'auto', options: ['Sy gevolgtrekking is korrek, maar sy redenasie is onvolledig — Euler se formule geld omdat elke vlak (die reghoekige kante ÉN die veelhoekige eindes) plat is, nie net oor die reghoeke nie.', 'Hy is heeltemal korrek — slegs die reghoekige syvlakke tel vir Euler se formule.', 'Hy is verkeerd — prismas voldoen nooit aan Euler se formule nie.', 'Hy is korrek, maar slegs vir prismas met ʼn ewe aantal kante.'], correctIndex: 0, explanation: 'Sy gevolgtrekking is korrek, maar sy redenasie is onvolledig — Euler se formule geld vir alle prismas nie net omdat die syvlakke reghoeke is nie, maar omdat elke vlak (die reghoekige kante ÉN die veelhoekige eindes) plat is, met goed gedefinieerde rande en hoekpunte regdeur die hele vaste liggaam.' },

        // Blok 6 — Multi-stap Euler-formule woordprobleme / foutopsporing (Hard)
        { difficulty: 'Hard', question: 'ʼn Vaste liggaam het 5 vlakke en 6 hoekpunte. Gebruik Euler se formule: hoeveel rande het dit, en watter vaste liggaam pas by hierdie waardes?', checkMode: 'auto', options: ['R = 7; ʼn vierkantige piramide', 'R = 9; ʼn driehoekige prisma', 'R = 11; ʼn vyfhoekige prisma', 'R = 9; ʼn tetraëder'], correctIndex: 1, explanation: 'Euler se formule: V + H − R = 2, so 5 + 6 − R = 2, wat R = 9 gee. ʼn Vaste liggaam met 5 vlakke, 6 hoekpunte en 9 rande stem ooreen met ʼn driehoekige prisma. (ʼn Tetraëder het slegs 4 vlakke, so ondanks die passende randgetal, is daardie naam verkeerd.)' },
        { difficulty: 'Hard', question: 'Sibusiso sê ʼn vaste liggaam kan 5 vlakke, 5 hoekpunte en 9 rande hê. Is dit moontlik volgens Euler se formule?', checkMode: 'auto', options: ['Ja — V + H − R = 5 + 5 − 9 = 2, so dit is moontlik.', 'Ja, want 5 + 5 + 9 is onewe, wat altyd aan Euler se formule voldoen.', 'Nee — V + H − R = 5 + 5 − 9 = 1, wat nie gelyk is aan 2 nie, dus is hierdie kombinasie onmoontlik.', 'Nee — Euler se formule kan nie getoets word sonder om eers die vaste liggaam se naam te ken nie.'], correctIndex: 2, explanation: 'Kontroleer: V + H − R = 5 + 5 − 9 = 1, wat nie gelyk is aan 2 nie. Aangesien Euler se formule misluk, is hierdie kombinasie van vlakke, hoekpunte en rande nie moontlik vir ʼn veelvlak nie.' },
        { difficulty: 'Hard', question: 'ʼn Driehoekige prisma het 5 vlakke en 6 hoekpunte. Gebruik Euler se formule: hoeveel rande het dit?', checkMode: 'auto', options: ['12', '6', '8', '9'], correctIndex: 3, explanation: 'Euler se formule: V + H − R = 2, so 5 + 6 − R = 2, wat R = 9 gee. Direkte kontrole: elke driehoekige einde het 3 rande (3 + 3 = 6), plus 3 rande wat die twee driehoeke verbind, wat 6 + 3 = 9 rande gee. (12 is ʼn seshoekige piramide se randgetal; 6 tel slegs die twee driehoekige eindes; 8 is ʼn vierkantige piramide se randgetal.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die klassifisering van 3D-vaste liggame en die toepassing van Euler se formule bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor nette of Euler se formule na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor vlakke, rande en hoekpunte weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
