import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (geometry roles) ─────────────────────────────────────────
// equal sides / congruent / known values     → blue   (#2563eb)
// parallel sides / matching angles / properties used → green (#16a34a)
// angles / similar                           → orange (#ea580c)
// unknown values                             → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Meetkunde van 2D-vorms',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — FORMAL DEFINITIONS OF TRIANGLES AND QUADRILATERALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'formal-definitions-triangles-quadrilaterals',
      title: 'Formele Definisies van Driehoeke en Vierhoeke',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 8 skryf ons <strong>formele definisies</strong> van driehoeke en vierhoeke gebaseer op hul sye en hoeke. ʼn Presiese definisie identifiseer ʼn vorm presies — dit stel die minimum voorwaardes wat nodig is om dit van alle ander vorms te onderskei.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gelyke sye')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('parallelle sye')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hoeke')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Driehoeke</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Gelyksydig</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Al ${bl('drie sye gelyk')}; al ${or('drie hoeke gelyk')} aan ${or('60°')} elk.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Gelykbenig</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Ten minste ${bl('twee sye gelyk')}; die ${or('twee basishoeke')} oorkant die gelyke sye is ook gelyk.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Reghoekig</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Presies een ${or('regte hoek (90°)')}. Die sy oorkant die regte hoek is die skuinssy — die langste sy.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Vierhoeke</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Parallelogram</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Twee pare parallelle sye')}; ${bl('oorstaande sye gelyk')}; ${or('oorstaande hoeke gelyk')}. Geen regte hoeke word vereis nie.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Reghoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Parallelogram met ${or('al vier regte hoeke (90°)')}. ${bl('Oorstaande sye gelyk')}; ${gr('oorstaande sye parallel')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Vierkant</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Al vier sye gelyk')}; ${or('al vier regte hoeke (90°)')}; ${gr('oorstaande sye parallel')}. ʼn Spesiale reghoek en ruit.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Ruit</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Al vier sye gelyk')}; ${gr('oorstaande sye parallel')}; ${or('oorstaande hoeke gelyk')}. Hoeke is nie noodwendig 90° nie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Trapesium</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Presies ${gr('een paar parallelle sye')} (die basisse). Die ander twee sye is nie-parallel.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Vlieër</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Twee pare ${bl('aangrensende gelyke sye')} (gelyke sye is langs mekaar, nie oorstaande nie). Een paar ${or('oorstaande hoeke gelyk')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hiërargie van vierhoeke</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn <strong>Vierkant</strong> is ʼn spesiale <strong>reghoek</strong> (al die sye gelyk) en ʼn spesiale <strong>ruit</strong> (al die hoeke 90°). Albei is spesiale <strong>parallelogramme</strong>. ʼn <strong>Trapesium</strong> het slegs een paar parallelle sye; ʼn <strong>vlieër</strong> het geen parallelle sye nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skryf ʼn duidelike definisie van ʼn ruit.',
          answer: `ʼn ${bl('Ruit')} is ʼn vierhoek met al ${bl('vier sye gelyk in lengte')}, ${gr('oorstaande sye parallel')}, en ${or('oorstaande hoeke gelyk')}, maar sy hoeke is nie noodwendig 90° nie.`,
          steps: [
            `ʼn Ruit is ʼn <strong>vierhoek</strong> — dit het vier reguit sye en vier hoeke.`,
            `Al ${bl('vier sye is gelyk in lengte')} — dit is die bepalende eienskap wat dit van ʼn algemene parallelogram onderskei.`,
            `${gr('Oorstaande sye is parallel')} — dit beteken dit behoort tot die parallelogramfamilie.`,
            `${or('Oorstaande hoeke is gelyk')}, maar hoeke is <strong>nie noodwendig 90° nie</strong>. Wanneer die hoeke presies 90° is, word dit ʼn vierkant.`,
          ],
        },
        {
          question: 'Sipho sê ʼn vlieër en ʼn ruit is dieselfde vorm. Verduidelik die verskil.',
          answer: `ʼn ${bl('Ruit')} het ${bl('al vier sye gelyk')}; ʼn vlieër het twee pare ${bl('aangrensende gelyke sye')} — nie al vier gelyk nie — met tipies slegs een paar ${or('oorstaande hoeke gelyk')}.`,
          steps: [
            `ʼn ${bl('Ruit')} het ${bl('al vier sye gelyk')} — enige twee sye wat jy vergelyk, is dieselfde lengte. Dit het ook ${gr('twee pare parallelle sye')}.`,
            `ʼn Vlieër het twee pare ${bl('aangrensende gelyke sye')} — die gelyke sye is langs mekaar, nie oorstaande nie. Nie al vier sye is gelyk nie.`,
            `In ʼn ruit is ${or('albei pare oorstaande hoeke gelyk')}. In ʼn vlieër is tipies slegs ${or('een paar oorstaande hoeke gelyk')}.`,
            `ʼn Ruit het ${gr('twee pare parallelle sye')}; ʼn vlieër het <strong>geen parallelle sye nie</strong>.`,
            `Kyk na die diagram hieronder wat albei vorms vergelyk.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Definieer ʼn vierkant in terme van sy sye en hoeke.',
          answer: 'ʼn Vierkant het 4 gelyke sye en 4 regte hoeke (90°).',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Sipho sê alle reghoeke is parallelogramme. Is hy korrek? Verduidelik.',
          answer: 'Ja — ʼn reghoek het oorstaande sye gelyk en parallel, wat aan die definisie van ʼn parallelogram voldoen, met die bykomende eienskap van regte hoeke.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Lerato sê ʼn trapesium het twee pare parallelle sye. Is sy korrek? Verduidelik.',
          answer: 'Nee — ʼn trapesium het slegs een paar parallelle sye; ʼn vorm met twee pare sou ʼn parallelogram wees.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Sipho sê ʼn ruit het altyd 4 regte hoeke. Is hy korrek? Verduidelik.',
          answer: 'Nee — ʼn ruit het 4 gelyke sye, maar dit vereis nie regte hoeke nie. ʼn Vierkant is ʼn spesiale ruit met regte hoeke.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Definieer ʼn gelykbenige driehoek.',
          answer: 'ʼn Driehoek met ten minste twee gelyke sye en twee gelyke hoeke.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Lerato het ʼn vierhoek met een paar parallelle sye en geen ander gelyke eienskappe nie. Watter vorm is dit?',
          answer: 'trapesium',
          checkMode: 'auto',
          correctAnswer: 'trapesium',
          explanation: 'ʼn Trapesium het presies een paar parallelle sye. Met geen ander gelyke eienskappe nie (geen gelyke sye, geen regte hoeke), voldoen dit aan die definisie van ʼn trapesium.',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Newenmekaar vergelyking van ʼn ruit en ʼn vlieër, met gelyke sye gemerk in blou, parallelle sye in groen, en hoeke in oranje op elke vorm" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die formele definisies van driehoeke en vierhoeke verduidelik met kleurgekodeerde diagramme van gelyke sye, parallelle sye, en hoeke" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CONGRUENT AND SIMILAR SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'congruent-and-similar-shapes',
      title: 'Kongruente en Gelykvormige Vorms',
      icon: '≅',
      explanation:
        `<p style="margin-bottom:16px;">Twee vorms kan verwant wees deur hul grootte en vorm. <strong>Kongruente</strong> vorms is identies in beide vorm en grootte. <strong>Gelykvormige</strong> vorms het dieselfde vorm maar kan verskil in grootte — hul sye is in verhouding en hul ooreenstemmende hoeke is gelyk.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kongruent')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gelykvormig')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('ooreenstemmende hoeke')}</span>` +
        `</div>` +

        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Kongruente vorms</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Identies in <strong>beide vorm en grootte</strong>.</p>` +
        `<ul style="color:#374151;font-size:14px;margin:0;padding-left:16px;">` +
        `<li>Al die ooreenstemmende ${bl('sye is gelyk')} in lengte.</li>` +
        `<li>Al die ooreenstemmende ${gr('hoeke is gelyk')}.</li>` +
        `<li>Een vorm pas <em>presies</em> op die ander (na ʼn omkering, rotasie, of skuif).</li>` +
        `</ul>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Gelykvormige vorms</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Dieselfde <strong>vorm</strong>, grootte kan verskil.</p>` +
        `<ul style="color:#374151;font-size:14px;margin:0;padding-left:16px;">` +
        `<li>Al die ooreenstemmende ${gr('hoeke is gelyk')}.</li>` +
        `<li>Ooreenstemmende sye is ${or('in verhouding')} — hulle deel ʼn konstante skaalfaktor.</li>` +
        `<li>Een vorm is ʼn vergroting of verkleining van die ander.</li>` +
        `</ul>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sleutelverwantskap</p>` +
        `<p style="margin:0;color:#1e3a8a;">Alle ${bl('kongruente')} vorms is ook ${or('gelykvormig')} — hulle het dieselfde vorm met ʼn skaalfaktor van 1. Maar nie alle ${or('gelykvormige')} vorms is ${bl('kongruent')} nie — gelykvormige vorms kan verskillende groottes hê.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Twee driehoeke het identiese hoeke van 50°, 60° en 70° maar verskillende sylengtes. Is hulle kongruent of gelykvormig?',
          answer: `Die driehoeke is ${or('gelykvormig')}, nie ${bl('kongruent')} nie — hulle het dieselfde vorm maar verskillende groottes.`,
          steps: [
            `Kyk na die hoeke: albei driehoeke het ${gr('identiese hoeke')} van ${gr('50°')}, ${gr('60°')} en ${gr('70°')}.`,
            `Dieselfde hoeke beteken dieselfde vorm — dit voldoen aan die voorwaarde vir ${or('gelykvormigheid')}.`,
            `Kyk na die groottes: die sylengtes is <strong>verskillend</strong>. Kongruente vorms moet identies in grootte wees — dus is hulle <strong>nie kongruent nie</strong>.`,
            `Gevolgtrekking: die driehoeke is ${or('gelykvormig')} (dieselfde vorm, dieselfde hoeke, sye in verhouding) maar nie ${bl('kongruent')} nie (verskillende groottes).`,
          ],
        },
        {
          question: 'Lerato het twee vierkante — een met sy 4 cm en een met sy 4 cm. Is hulle kongruent?',
          answer: `Ja — die twee vierkante is ${bl('kongruent')} omdat hulle presies dieselfde vorm en grootte het.`,
          steps: [
            `Albei vorms is vierkante — hulle het dieselfde vorm (al die hoeke 90°, al die sye gelyk), dus is hulle ${or('gelykvormig')}.`,
            `Kyk na die groottes: albei het sylengte ${bl('4 cm')} — hulle is dieselfde grootte.`,
            `Aangesien hulle identies is in beide vorm en grootte, is hulle ${bl('kongruent')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Word twee vorms wat identies is in vorm en grootte kongruent of gelykvormig genoem?',
          answer: 'kongruent',
          checkMode: 'auto',
          correctAnswer: 'kongruent',
          explanation: 'Kongruente vorms is identies in beide vorm en grootte — al die ooreenstemmende sye en hoeke is gelyk.',
        },
        {
          difficulty: 'Medium',
          question: 'Twee driehoeke het dieselfde hoeke maar verskillende sylengtes. Is hulle kongruent of gelykvormig?',
          answer: 'gelykvormig',
          checkMode: 'auto',
          correctAnswer: 'gelykvormig',
          explanation: 'Hulle het dieselfde vorm (gelyke hoeke) maar verskillende groottes — dus is hulle gelykvormig maar nie kongruent nie.',
        },
        {
          difficulty: 'Hard',
          question: 'Thabo sê alle kongruente vorms is ook gelykvormig. Is hy korrek? Verduidelik.',
          answer: 'Ja — kongruente vorms het identiese grootte en vorm, wat ook aan die definisie van gelykvormigheid voldoen (dieselfde vorm, met ʼn skaalfaktor van 1).',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle sê twee vierkante van verskillende groottes is altyd gelykvormig maar nooit kongruent nie. Is sy korrek? Verduidelik.',
          answer: 'Ja — twee vierkante met verskillende sylengtes het dieselfde vorm (gelykvormig) maar kan nie kongruent wees nie, aangesien kongruente vorms ook identies in grootte moet wees.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Twee driehoeke van verskillende groottes maar identiese hoeke gemerk gelykvormig in oranje; twee identiese vierkante gemerk kongruent in blou" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om kongruente en gelykvormige vorms te identifiseer deur sylengtes en hoeke te vergelyk, met kleurgekodeerde ooreenstemmende hoeke in groen" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING GEOMETRIC PROBLEMS USING KNOWN PROPERTIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-geometric-problems',
      title: 'Meetkundige Probleme Oplos deur Bekende Eienskappe te Gebruik',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons kan die bekende <strong>eienskappe en definisies</strong> van driehoeke en vierhoeke gebruik om onbekende sye en hoeke te vind. Vir gelykvormige vorms stel ons ʼn <strong>verhouding</strong> op — die verhouding van ooreenstemmende sye is konstant. Vir kongruente vorms is ooreenstemmende sye en hoeke bloot gelyk.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bekende waardes')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('onbekende waardes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gebruikte eienskappe')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategie vir meetkundige probleme</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identifiseer')} — Benoem die vorm en gee sy relevante ${gr('eienskap')} (bv. al die sye gelyk, oorstaande hoeke supplementêr).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Pas toe')} — Gebruik die ${gr('eienskap')} om ʼn vergelyking te skryf wat die ${bl('bekende waardes')} en die ${re('onbekende waardes')} verbind.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Los op')} — Bereken die ${re('onbekende')} en kontroleer dat jou antwoord ooreenstem met al die eienskappe van die vorm.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Verhouding vir gelykvormige vorms</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vir gelykvormige vorms, stel ʼn verhouding op: <strong style="color:#2563eb;">kleiner sy / groter sy = gegewe verhouding</strong>. Kruisvermenigvuldig om die onbekende op te los, en kontroleer dan met die oorspronklike verhouding.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Vlieër ABCD het AB = 3,5 cm en BC = 6 cm. Bepaal AD en DC.',
          answer: `AD = ${bl('3,5')} cm en DC = ${bl('6')} cm`,
          steps: [
            `${gr('Eienskap:')} In ʼn vlieër is daar twee pare ${gr('aangrensende gelyke sye')}.`,
            `Die twee pare gelyke aangrensende sye is: AB = AD en BC = DC.`,
            `Aangesien ${bl('AB = 3,5 cm')}, volg dit dat AD = ${bl('3,5 cm')}.`,
            `Aangesien ${bl('BC = 6 cm')}, volg dit dat DC = ${bl('6 cm')}.`,
          ],
        },
        {
          question: 'Twee gelykvormige driehoeke het ooreenstemmende sye in die verhouding 2 : 5. As die kleiner driehoek se sy 8 cm is, bepaal die ooreenstemmende sy in die groter driehoek.',
          answer: `Die ooreenstemmende sy in die groter driehoek is ${re('20')} cm`,
          steps: [
            `${gr('Eienskap:')} Vir gelykvormige driehoeke is ooreenstemmende sye in verhouding.`,
            `Stel die verhouding op met die ${bl('bekende verhouding')} 2 : 5 en die ${bl('bekende sy')} 8 cm:<br>${bl('2')} / ${bl('5')} = ${bl('8')} / ${re('x')}`,
            `Kruisvermenigvuldig: ${bl('2')} × ${re('x')} = ${bl('5')} × ${bl('8')}<br>${bl('2')}${re('x')} = ${bl('40')}`,
            `Deel albei kante deur 2: ${re('x')} = ${bl('40')} ÷ ${bl('2')} = ${re('20')} cm`,
            `<strong>Kontroleer:</strong> 8 / 20 = 2 / 5 ✓ — die verhouding klop.`,
          ],
        },
        {
          question: 'Thabo het ʼn parallelogram waar een hoek 65° is. Bepaal al vier hoeke.',
          answer: `Die vier hoeke is ${or('65°')}, ${or('115°')}, ${or('65°')}, ${or('115°')}`,
          steps: [
            `${gr('Eienskap 1:')} In ʼn parallelogram is ${gr('oorstaande hoeke gelyk')}.`,
            `Aangesien een hoek ${bl('65°')} is, is die oorstaande hoek ook ${or('65°')}.`,
            `${gr('Eienskap 2:')} In ʼn parallelogram is ${gr('aangrensende hoeke supplementêr')} — hulle tel op tot 180°.`,
            `Elke hoek langs die 65°-hoek = 180° − ${bl('65°')} = ${or('115°')}.`,
            `<strong>Antwoord:</strong> Die vier hoeke is ${or('65°')}, ${or('115°')}, ${or('65°')}, ${or('115°')} ✓<br>Kontroleer: 65° + 115° + 65° + 115° = 360° ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Vlieër het AB = 4 cm en BC = 7 cm. Bepaal AD en DC.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) AD =',
              correctAnswer: '4cm',
              correctAnswers: ['4cm', '4 cm', '4'],
              explanation: 'In ʼn vlieër is aangrensende pare sye gelyk. AD = AB = 4 cm.',
            },
            {
              label: 'b) DC =',
              correctAnswer: '7cm',
              correctAnswers: ['7cm', '7 cm', '7'],
              explanation: 'In ʼn vlieër is aangrensende pare sye gelyk. DC = BC = 7 cm.',
            },
          ],
        },
        {
          difficulty: 'Medium',
          question: 'Twee gelykvormige driehoeke het ʼn syverhouding van 3 : 7. As die kleiner driehoek se sy 9 cm is, bepaal die ooreenstemmende sy in die groter driehoek.',
          answer: '21cm',
          checkMode: 'auto',
          correctAnswer: '21cm',
          correctAnswers: ['21cm', '21 cm', '21'],
          explanation: 'Stel verhouding op: 3/7 = 9/x. Kruisvermenigvuldig: 3x = 63. x = 63 ÷ 3 = 21 cm. Kontroleer: 9/21 = 3/7 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Parallelogram het een hoek van 72°. Bepaal al vier hoeke.',
          answer: 'Oorstaande hoek is ook 72°. Aangrensende hoeke is elk 180 − 72 = 108°. Hoeke: 72°, 108°, 72°, 108°.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Twee gelykvormige reghoeke het ooreenstemmende sye in die verhouding 4 : 9. As die kleiner reghoek se wydte 12 cm is, bepaal die groter reghoek se wydte.',
          answer: '27cm',
          checkMode: 'auto',
          correctAnswer: '27cm',
          correctAnswers: ['27cm', '27 cm', '27'],
          explanation: 'Stel verhouding op: 4/9 = 12/x. Kruisvermenigvuldig: 4x = 108. x = 108 ÷ 4 = 27 cm. Kontroleer: 12/27 = 4/9 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Vlieër het twee pare aangrensende gelyke sye — 5 cm en 8 cm. Bepaal die omtrek.',
          answer: '26cm',
          checkMode: 'auto',
          correctAnswer: '26cm',
          correctAnswers: ['26cm', '26 cm', '26'],
          explanation: 'ʼn Vlieër het vier sye: twee pare gelyke aangrensende sye. Omtrek = 2 × 5 + 2 × 8 = 10 + 16 = 26 cm ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Uitgewerkte voorbeelde wat ʼn vlieër ABCD met gelyke aangrensende sye gemerk in blou wys, twee gelykvormige driehoeke met ʼn verhouding opgestel, en ʼn parallelogram met al vier hoeke gemerk in oranje" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om bekende eienskappe van vierhoeke en gelykvormige driehoeke te gebruik om onbekende sye en hoeke stap vir stap te vind" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het meetkunde van 2D-vorms bemeester.' },
    { minScore: 12, message: 'Goeie werk! Jy het ʼn sterk begrip van 2D-meetkunde. Gaan enige gemiste vrae weer deur en mik vir ʼn volpunt-telling.' },
    { minScore: 8, message: 'Goeie poging! Werk weer deur die studiegids en probeer weer — jy is op die regte pad.' },
    { minScore: 0, message: 'Hou aan probeer! Werk weer deur die gids, fokus op die definisies en eienskappe, en probeer dan weer.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 1-4 Driehoek hoeksom & buitehoekstelling | 5-8 Driehoek
    // klassifikasie volgens sye+hoeke | 9-12 Vierhoek eienskappe &
    // hoeksom | 13-15 Veelhoek binne-/buitehoekformules | 16-18
    // Gelykvormigheid vs kongruensie redenasie | 19-20 Multi-stap/toegepas
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok A — driehoek hoeksom & buitehoekstelling
        { difficulty: 'Easy', question: 'In die driehoek getoon, is twee van die binnehoeke 52° en 79°. Bepaal die derde hoek.', answer: '49°', checkMode: 'auto', correctAnswer: '49', correctAnswers: ['49', '49°', '49 degrees'], explanation: 'Derde hoek = 180° − 52° − 79° = 49°. Kontroleer: 52 + 79 + 49 = 180 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="50,140 175,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 75,140 A 28,28 0 0 1 65,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="80" y="128" font-size="14" fill="#2563eb" font-weight="700">52°</text><path d="M 150,140 A 28,28 0 0 0 162,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="133" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">79°</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="128" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek getoon, is twee binnehoeke 68° en 75°. Een sy word verleng om ʼn buitehoek by die derde hoekpunt te vorm. Gebruik die buitehoekstelling om hierdie buitehoek te bepaal.', answer: '143°', checkMode: 'auto', correctAnswer: '143', correctAnswers: ['143', '143°', '143 degrees'], explanation: 'Volgens die buitehoekstelling is die buitehoek gelyk aan die som van die twee nie-aangrensende binnehoeke: 68° + 75° = 143°. Kontroleer: die binnehoek by daardie hoekpunt = 180 − 68 − 75 = 37°, en 180 − 37 = 143° ✓', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">68°</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">75°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het hoeke in die verhouding 3:4:5. Bepaal die grootte van elke hoek.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Kleinste hoek', correctAnswer: '45', correctAnswers: ['45', '45°', '45 degrees'], explanation: 'Totale dele = 3+4+5 = 12. Een deel = 180 ÷ 12 = 15°. Kleinste hoek = 3 × 15 = 45°.' }, { label: 'b) Middelste hoek', correctAnswer: '60', correctAnswers: ['60', '60°', '60 degrees'], explanation: 'Middelste hoek = 4 × 15 = 60°.' }, { label: 'c) Grootste hoek', correctAnswer: '75', correctAnswers: ['75', '75°', '75 degrees'], explanation: 'Grootste hoek = 5 × 15 = 75°. Kontroleer: 45 + 60 + 75 = 180 ✓' } ] },
        { difficulty: 'Hard', question: 'Nomsa sê: "In die driehoek getoon, as ek weet die buitehoek by een hoekpunt is 130°, kan ek altyd die binnehoek by dieselfde hoekpunt bepaal sonder enige ander inligting." Is sy korrek? Verduidelik, en gee dan die binnehoek vir hierdie geval.', answer: 'Ja — die binnehoek en sy aangrensende buitehoek by dieselfde hoekpunt lê op ʼn reguit lyn, dus is hulle supplementêr (tel op tot 180°). Binnehoek = 180° − 130° = 50°.', checkMode: 'self', explanation: 'ʼn Binnehoek en sy aangrensende buitehoek tel altyd op tot 180° omdat hulle op ʼn reguit lyn lê, ongeag die ander twee hoeke in die driehoek. Hier is binnehoek = 180° − 130° = 50°.', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#ea580c" font-weight="700">130°</text><text x="145" y="130" font-size="14" fill="#2563eb" font-weight="700">?</text></svg>' },

        // Blok B — driehoek klassifikasie volgens sye en hoeke (dubbel)
        { difficulty: 'Easy', question: 'ʼn Driehoek het drie sye van 5 cm, 5 cm en 5 cm, met al drie hoeke gelyk aan 60°, soos getoon. Klassifiseer hierdie driehoek volgens beide sy sye en sy hoeke.', answer: 'gelyksydig, skerphoekige driehoek', checkMode: 'auto', correctAnswer: 'gelyksydig skerphoekig', correctAnswers: ['gelyksydig skerphoekig', 'gelyksydig, skerphoekig', 'skerphoekig gelyksydig', 'gelyksydig en skerphoekig'], explanation: 'Al 3 sye is gelyk (5 cm elk), dus is dit gelyksydig. Al 3 hoeke (60° elk) is kleiner as 90°, dus is dit ook skerphoekig.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="43.6,140 176.4,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="82" font-size="13" fill="#2563eb" font-weight="700">5 cm</text><text x="149" y="82" font-size="13" fill="#2563eb" font-weight="700">5 cm</text><text x="110" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><path d="M 68.6,140 A 28,28 0 0 1 58.6,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="73.6" y="110" font-size="12" fill="#2563eb" font-weight="700">60°</text><path d="M 151.4,140 A 28,28 0 0 0 161.4,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="146.4" y="110" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60°</text><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="54" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">60°</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye van 9 cm, 12 cm en 15 cm, soos getoon. Een van sy hoeke meet presies 90°. Klassifiseer hierdie driehoek volgens beide sy sye en sy hoeke.', answer: 'ongelyksydig, reghoekige driehoek', checkMode: 'auto', correctAnswer: 'ongelyksydig reghoekig', correctAnswers: ['ongelyksydig reghoekig', 'ongelyksydig, reghoekig', 'reghoekig ongelyksydig', 'ongelyksydig en reghoekig'], explanation: 'Al 3 sye (9 cm, 12 cm, 15 cm) het verskillende lengtes, dus is dit ongelyksydig. Aangesien een hoek presies 90° is, is dit ook reghoekig — let op dat 9² + 12² = 81 + 144 = 225 = 15², wat bevestig dat die regte hoek oorkant die 15 cm-sy lê.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 35,68 155,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="35" y="128" width="12" height="12" fill="none" stroke="#2563eb" stroke-width="2"/><text x="20" y="104" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">9 cm</text><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="105" y="98" font-size="13" fill="#2563eb" font-weight="700">15 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het hoeke in die verhouding 2:5:5, soos getoon. Bepaal elke hoek, en klassifiseer dan die driehoek volgens sy hoeke.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Die kleinste hoek', correctAnswer: '30', correctAnswers: ['30', '30°', '30 degrees'], explanation: 'Totale dele = 2+5+5 = 12. Een deel = 180 ÷ 12 = 15°. Kleinste hoek = 2 × 15 = 30°.' }, { label: 'b) Die twee gelyke hoeke', correctAnswer: '75', correctAnswers: ['75', '75°', '75 degrees', '75 and 75', '75, 75'], explanation: 'Elke gelyke hoek = 5 × 15 = 75°. Kontroleer: 30 + 75 + 75 = 180 ✓' }, { label: 'c) Klassifiseer die driehoek volgens sy hoeke', correctAnswer: 'skerphoekig', correctAnswers: ['skerphoekig', 'skerphoekige driehoek'], explanation: 'Al drie hoeke (30°, 75°, 75°) is kleiner as 90°, dus is die driehoek skerphoekig.' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="89.7,140 130.3,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 114.7,140 A 28,28 0 0 1 104.7,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="119.7" y="126" font-size="13" fill="#ea580c" font-weight="700">5</text><path d="M 105.3,140 A 28,28 0 0 0 115.3,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="100.3" y="126" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">5</text><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#ea580c" stroke-width="2"/><text x="110" y="54" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">2</text></svg>' },
        { difficulty: 'Hard', question: 'Palesa sê: "ʼn Driehoek met sye 6 cm, 6 cm en 13 cm bestaan — dis net ʼn baie dun gelykbenige driehoek." Is sy korrek? Verduidelik met behulp van die driehoeksongelykheid.', answer: 'Nee — die driehoeksongelykheid vereis dat die som van enige twee sye groter moet wees as die derde sy. Hier is 6 + 6 = 12, wat kleiner is as 13, dus kan die twee kort sye nie mekaar bereik om die driehoek te sluit nie. Hierdie driehoek is onmoontlik.', checkMode: 'self', explanation: 'Driehoeksongelykheid-toets: 6 + 6 = 12 < 13. Aangesien die som van die twee korter sye kleiner is as die langste sy, kan so ʼn driehoek nie gevorm word nie — die twee 6 cm-sye sou nie lank genoeg wees om te ontmoet en die vorm te sluit nie.' },

        // Blok C — vierhoek eienskappe & hoeksom
        { difficulty: 'Easy', question: 'In die vierhoek getoon, is drie hoeke 84°, 97° en 120°. Bepaal die vierde hoek.', answer: '59°', checkMode: 'auto', correctAnswer: '59', correctAnswers: ['59', '59°', '59 degrees'], explanation: 'Vierde hoek = 360° − 84° − 97° − 120° = 59°. Kontroleer: 84+97+120+59 = 360 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">84°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">97°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">120°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Parallelogram, soos getoon, het een hoek van 63°. Bepaal die grootte van die grootste hoek in die parallelogram.', answer: '117°', checkMode: 'auto', correctAnswer: '117', correctAnswers: ['117', '117°', '117 degrees'], explanation: 'Oorstaande hoeke in ʼn parallelogram is gelyk, dus is die hoek oorkant 63° ook 63°. Aangrensende hoeke is supplementêr: 180° − 63° = 117°. Die grootste hoek is 117°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">63°</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vlieër ABCD, soos getoon, het AB = 6,5 cm en BC = 9 cm. Bepaal die omtrek van die vlieër.', answer: '31 cm', checkMode: 'auto', correctAnswer: '31', correctAnswers: ['31', '31cm', '31 cm'], explanation: 'In ʼn vlieër is AD = AB = 6,5 cm en DC = BC = 9 cm. Omtrek = AB + BC + DC + AD = 6,5 + 9 + 9 + 6,5 = 31 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,25 165,75 110,145 55,75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="145" y="55" font-size="13" fill="#2563eb" font-weight="700">6,5 cm</text><text x="145" y="115" font-size="13" fill="#2563eb" font-weight="700">9 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Trapesium, soos getoon, het mede-binnehoeke van 71° en 109° tussen die parallelle sye. Bongiwe sê hierdie twee hoeke bewys dat die basissye parallel is. Is sy korrek? Verduidelik.', answer: 'Ja — 71° + 109° = 180°, en mede-binnehoeke tussen twee lyne tel slegs op tot 180° wanneer die lyne parallel is. Dit bevestig dat die basissye parallel is.', checkMode: 'self', explanation: '71 + 109 = 180°. Aangesien mede-binnehoeke slegs presies op tot 180° optel wanneer die twee lyne waartussen hulle lê parallel is, bevestig dit dat die basissye van die trapesium parallel is — in ooreenstemming met die definisie van ʼn trapesium.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,135 190,135 155,45 65,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="122" font-size="13" fill="#2563eb" font-weight="700">71°</text><text x="165" y="122" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">109°</text></svg>' },

        // Blok D — veelhoek binne-/buitehoekformules
        { difficulty: 'Medium', question: 'Bepaal die som van die binnehoeke van ʼn negehoek (9 sye).', answer: '1260°', checkMode: 'auto', correctAnswer: '1260', correctAnswers: ['1260', '1260°', '1260 degrees'], explanation: 'Som van binnehoeke = (n − 2) × 180°. Vir ʼn negehoek, n = 9: (9 − 2) × 180 = 7 × 180 = 1260°.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Reëlmatige vyftienhoek (15 sye) het al sy binnehoeke gelyk. Bepaal die grootte van elke binnehoek.', answer: '156°', checkMode: 'auto', correctAnswer: '156', correctAnswers: ['156', '156°', '156 degrees'], explanation: 'Som van binnehoeke = (15 − 2) × 180 = 13 × 180 = 2340°. Elke hoek = 2340° ÷ 15 = 156°.' },
        { difficulty: 'Hard', question: 'ʼn Reëlmatige veelhoek het ʼn buitehoek van 18° by elke hoekpunt. Gebruik die feit dat die buitehoeke van enige veelhoek optel tot 360° om die aantal sye van die veelhoek te bepaal.', answer: '20 sye', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 sye', 'twintig', 'twintig sye'], explanation: 'Die buitehoeke van enige veelhoek tel op tot 360°. Aantal sye = 360° ÷ 18° = 20.' },

        // Blok E — gelykvormigheid vs kongruensie redenasie
        { difficulty: 'Easy', question: 'Twee driehoeke het presies dieselfde vorm en presies dieselfde grootte — elke ooreenstemmende sy en hoek stem ooreen. Is hierdie driehoeke kongruent of gelykvormig?', answer: 'kongruent', checkMode: 'auto', correctAnswer: 'kongruent', correctAnswers: ['kongruent'], explanation: 'Vorms wat identies is in beide vorm en grootte (al die ooreenstemmende sye en hoeke gelyk) is kongruent.' },
        { difficulty: 'Medium', question: 'Twee gelykvormige driehoeke het ooreenstemmende sye in die verhouding 3 : 8. Die kleiner driehoek se sy is 12 cm. Bepaal die ooreenstemmende sy in die groter driehoek.', answer: '32 cm', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32', '32cm', '32 cm'], explanation: 'Stel die verhouding op: 3/8 = 12/x. Kruisvermenigvuldig: 3x = 96. x = 96 ÷ 3 = 32 cm. Kontroleer: 12/32 = 3/8 ✓' },
        { difficulty: 'Hard', question: 'Vusi sê: "As twee driehoeke al drie pare ooreenstemmende hoeke gelyk het, moet hulle ook kongruent wees." Is hy korrek? Verduidelik.', answer: 'Nee — gelyke ooreenstemmende hoeke waarborg slegs dat die driehoeke gelykvormig is (dieselfde vorm). Kongruensie vereis addisioneel dat die ooreenstemmende sye gelyk in lengte moet wees (dieselfde grootte), wat nie gewaarborg word deur bloot ooreenstemmende hoeke nie.', checkMode: 'self', explanation: 'Ooreenstemmende hoeke bepaal die vorm van ʼn driehoek, maar nie sy grootte nie — jy kan ʼn driehoek vergroot of verklein en steeds al sy hoeke dieselfde hou. Gelyke hoeke gee dus slegs gelykvormigheid, nie kongruensie nie. Kongruensie vereis gelyke hoeke ÉN gelyke ooreenstemmende sylengtes.' },

        // Blok F — multi-stap / toegepas
        { difficulty: 'Medium', question: 'ʼn Reëlmatige seshoek, soos getoon, het sye van 8,5 cm. Bepaal sy omtrek, en gee die grootte van elke binnehoek met behulp van die veelhoek-hoekformule.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Omtrek', correctAnswer: '51', correctAnswers: ['51', '51cm', '51 cm'], explanation: 'ʼn Reëlmatige seshoek het 6 gelyke sye. Omtrek = 6 × 8,5 = 51 cm.' }, { label: 'b) Elke binnehoek', correctAnswer: '120', correctAnswers: ['120', '120°', '120 degrees'], explanation: 'Som van binnehoeke = (6 − 2) × 180 = 720°. Elke hoek = 720° ÷ 6 = 120°.' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,32 160.2,61 160.2,119 110,148 59.8,119 59.8,61" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180.2" y="90" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">8,5 cm</text></svg>' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het ooreenstemmende sye in die verhouding 2 : 7. Die kleiner driehoek het ʼn omtrek van 18 cm. Bepaal die omtrek van die groter driehoek, en verduidelik wat dit jou vertel oor die verwantskap tussen die verhouding van sye en die verhouding van omtrekke.', answer: 'Groter omtrek = 63 cm. Die verhouding van die omtrekke (18:63 = 2:7) is presies dieselfde as die verhouding van ooreenstemmende sye, omdat die omtrek van ʼn gelykvormige vorm met dieselfde faktor skaleer as sy sye.', checkMode: 'self', explanation: 'Stel die verhouding op met die skaalfaktor: 2/7 = 18/x. Kruisvermenigvuldig: 2x = 126, dus x = 63 cm. Aangesien elke sy van die groter driehoek 7/2 keer die ooreenstemmende sy van die kleiner driehoek is, is die omtrek (die som van al die sye) ook 7/2 keer so groot — dit bevestig dat die verhouding van omtrekke altyd ooreenstem met die verhouding van sye vir gelykvormige vorms.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het driehoek- en vierhoek-hoekredenasie, dubbele klassifikasie, veelhoekformules, en gelykvormigheid/kongruensie bemeester.' },
        { minScore: 14, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde blokuitleg as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok A — driehoek hoeksom & buitehoekstelling
        { difficulty: 'Easy', question: 'In die driehoek getoon, is twee van die binnehoeke 61° en 88°. Bepaal die derde hoek.', answer: '31°', checkMode: 'auto', correctAnswer: '31', correctAnswers: ['31', '31°', '31 degrees'], explanation: 'Derde hoek = 180° − 61° − 88° = 31°. Kontroleer: 61 + 88 + 31 = 180 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="60,140 172,140 148,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 85,140 A 28,28 0 0 1 75,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="90" y="128" font-size="14" fill="#2563eb" font-weight="700">61°</text><path d="M 147,140 A 28,28 0 0 0 159,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">88°</text><path d="M 137,38 A 18,18 0 0 1 159,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="148" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek getoon, is twee binnehoeke 82° en 54°. Een sy word verleng om ʼn buitehoek by die derde hoekpunt te vorm. Gebruik die buitehoekstelling om hierdie buitehoek te bepaal.', answer: '136°', checkMode: 'auto', correctAnswer: '136', correctAnswers: ['136', '136°', '136 degrees'], explanation: 'Volgens die buitehoekstelling is die buitehoek gelyk aan die som van die twee nie-aangrensende binnehoeke: 82° + 54° = 136°. Kontroleer: die binnehoek by daardie hoekpunt = 180 − 82 − 54 = 44°, en 180 − 44 = 136° ✓', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="36.8,140 153.2,140 67.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="153.2" y1="140" x2="188.2" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 58.8,140 A 24,24 0 0 1 49.8,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="63.8" y="130" font-size="13" fill="#2563eb" font-weight="700">82°</text><path d="M 131.2,140 A 24,24 0 0 0 140.2,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="126.2" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">54°</text><path d="M 171.2,140 A 18,18 0 0 1 166.2,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="179.2" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het hoeke in die verhouding 2:5:5. Bepaal die grootte van elke hoek.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Kleinste hoek', correctAnswer: '30', correctAnswers: ['30', '30°', '30 degrees'], explanation: 'Totale dele = 2+5+5 = 12. Een deel = 180 ÷ 12 = 15°. Kleinste hoek = 2 × 15 = 30°.' }, { label: 'b) Een van die twee gelyke hoeke', correctAnswer: '75', correctAnswers: ['75', '75°', '75 degrees'], explanation: 'Elke gelyke hoek = 5 × 15 = 75°.' }, { label: 'c) Die ander gelyke hoek', correctAnswer: '75', correctAnswers: ['75', '75°', '75 degrees'], explanation: 'Die ander gelyke hoek is ook 75°. Kontroleer: 30 + 75 + 75 = 180 ✓' } ] },
        { difficulty: 'Hard', question: 'Karabo sê: "In die driehoek getoon, as ek weet die buitehoek by een hoekpunt is 115°, kan ek altyd die binnehoek by dieselfde hoekpunt bepaal sonder enige ander inligting." Is sy korrek? Verduidelik, en gee dan die binnehoek vir hierdie geval.', answer: 'Ja — die binnehoek en sy aangrensende buitehoek by dieselfde hoekpunt lê op ʼn reguit lyn, dus is hulle supplementêr (tel op tot 180°). Binnehoek = 180° − 115° = 65°.', checkMode: 'self', explanation: 'ʼn Binnehoek en sy aangrensende buitehoek tel altyd op tot 180° omdat hulle op ʼn reguit lyn lê, ongeag die ander twee hoeke in die driehoek. Hier is binnehoek = 180° − 115° = 65°.', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#ea580c" font-weight="700">115°</text><text x="145" y="130" font-size="14" fill="#2563eb" font-weight="700">?</text></svg>' },

        // Blok B — driehoek klassifikasie volgens sye en hoeke (dubbel)
        { difficulty: 'Easy', question: 'ʼn Driehoek het drie sye van 7 cm, 7 cm en 7 cm, met al drie hoeke gelyk aan 60°, soos getoon. Klassifiseer hierdie driehoek volgens beide sy sye en sy hoeke.', answer: 'gelyksydig, skerphoekige driehoek', checkMode: 'auto', correctAnswer: 'gelyksydig skerphoekig', correctAnswers: ['gelyksydig skerphoekig', 'gelyksydig, skerphoekig', 'skerphoekig gelyksydig', 'gelyksydig en skerphoekig'], explanation: 'Al 3 sye is gelyk (7 cm elk), dus is dit gelyksydig. Al 3 hoeke (60° elk) is kleiner as 90°, dus is dit ook skerphoekig.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="43.6,140 176.4,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="82" font-size="13" fill="#2563eb" font-weight="700">7 cm</text><text x="149" y="82" font-size="13" fill="#2563eb" font-weight="700">7 cm</text><text x="110" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><path d="M 68.6,140 A 28,28 0 0 1 58.6,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="73.6" y="110" font-size="12" fill="#2563eb" font-weight="700">60°</text><path d="M 151.4,140 A 28,28 0 0 0 161.4,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="146.4" y="110" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60°</text><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="54" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">60°</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye van 8 cm, 15 cm en 17 cm, soos getoon. Een van sy hoeke meet presies 90°. Klassifiseer hierdie driehoek volgens beide sy sye en sy hoeke.', answer: 'ongelyksydig, reghoekige driehoek', checkMode: 'auto', correctAnswer: 'ongelyksydig reghoekig', correctAnswers: ['ongelyksydig reghoekig', 'ongelyksydig, reghoekig', 'reghoekig ongelyksydig', 'ongelyksydig en reghoekig'], explanation: 'Al 3 sye (8 cm, 15 cm, 17 cm) het verskillende lengtes, dus is dit ongelyksydig. Aangesien een hoek presies 90° is, is dit ook reghoekig — let op dat 8² + 15² = 64 + 225 = 289 = 17², wat bevestig dat die regte hoek oorkant die 17 cm-sy lê.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 35,64 160,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="35" y="128" width="12" height="12" fill="none" stroke="#2563eb" stroke-width="2"/><text x="20" y="102" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">8 cm</text><text x="97" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="105" y="96" font-size="13" fill="#2563eb" font-weight="700">17 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het hoeke in die verhouding 1:3:5, soos getoon. Bepaal elke hoek, en klassifiseer dan die driehoek volgens sy hoeke.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Die kleinste hoek', correctAnswer: '20', correctAnswers: ['20', '20°', '20 degrees'], explanation: 'Totale dele = 1+3+5 = 9. Een deel = 180 ÷ 9 = 20°. Kleinste hoek = 1 × 20 = 20°.' }, { label: 'b) Die middelste hoek', correctAnswer: '60', correctAnswers: ['60', '60°', '60 degrees'], explanation: 'Middelste hoek = 3 × 20 = 60°.' }, { label: 'c) Klassifiseer die driehoek volgens sy hoeke', correctAnswer: 'stomphoekig', correctAnswers: ['stomphoekig', 'stomphoekige driehoek'], explanation: 'Grootste hoek = 5 × 20 = 100°. Aangesien een hoek (100°) groter is as 90°, is die driehoek stomphoekig. Kontroleer: 20 + 60 + 100 = 180 ✓' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 110,93.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 28,28 0 0 1 45,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="126" font-size="13" fill="#ea580c" font-weight="700">1</text><path d="M 165,140 A 28,28 0 0 0 175,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="160" y="126" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">5</text><path d="M 100,105 A 16,16 0 0 1 120,105" fill="none" stroke="#ea580c" stroke-width="2"/><text x="110" y="123" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">3</text></svg>' },
        { difficulty: 'Hard', question: 'Sizwe sê: "ʼn Driehoek met sye 5 cm, 5 cm en 11 cm bestaan — dis net ʼn baie dun gelykbenige driehoek." Is hy korrek? Verduidelik met behulp van die driehoeksongelykheid.', answer: 'Nee — die driehoeksongelykheid vereis dat die som van enige twee sye groter moet wees as die derde sy. Hier is 5 + 5 = 10, wat kleiner is as 11, dus kan die twee kort sye nie mekaar bereik om die driehoek te sluit nie. Hierdie driehoek is onmoontlik.', checkMode: 'self', explanation: 'Driehoeksongelykheid-toets: 5 + 5 = 10 < 11. Aangesien die som van die twee korter sye kleiner is as die langste sy, kan so ʼn driehoek nie gevorm word nie — die twee 5 cm-sye sou nie lank genoeg wees om te ontmoet en die vorm te sluit nie.' },

        // Blok C — vierhoek eienskappe & hoeksom
        { difficulty: 'Easy', question: 'In die vierhoek getoon, is drie hoeke 76°, 142° en 58°. Bepaal die vierde hoek.', answer: '84°', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84', '84°', '84 degrees'], explanation: 'Vierde hoek = 360° − 76° − 142° − 58° = 84°. Kontroleer: 76+142+58+84 = 360 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">76°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">142°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">58°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Ruit, soos getoon, het een hoek van 84°. Bepaal die grootte van die grootste hoek in die ruit.', answer: '96°', checkMode: 'auto', correctAnswer: '96', correctAnswers: ['96', '96°', '96 degrees'], explanation: 'Oorstaande hoeke in ʼn ruit is gelyk, dus is die hoek oorkant 84° ook 84°. Aangrensende hoeke is supplementêr: 180° − 84° = 96°. Die vier hoeke is 84°, 96°, 84°, 96°, dus is die grootste hoek 96°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">84°</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vlieër ABCD, soos getoon, het AB = 5,5 cm en BC = 8 cm. Bepaal die omtrek van die vlieër.', answer: '27 cm', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27cm', '27 cm'], explanation: 'In ʼn vlieër is AD = AB = 5,5 cm en DC = BC = 8 cm. Omtrek = AB + BC + DC + AD = 5,5 + 8 + 8 + 5,5 = 27 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,25 165,75 110,145 55,75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="145" y="55" font-size="13" fill="#2563eb" font-weight="700">5,5 cm</text><text x="145" y="115" font-size="13" fill="#2563eb" font-weight="700">8 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Trapesium, soos getoon, het mede-binnehoeke van 64° en 116° tussen die parallelle sye. Ntando sê hierdie twee hoeke bewys dat die basissye parallel is. Is hy korrek? Verduidelik.', answer: 'Ja — 64° + 116° = 180°, en mede-binnehoeke tussen twee lyne tel slegs op tot 180° wanneer die lyne parallel is. Dit bevestig dat die basissye parallel is.', checkMode: 'self', explanation: '64 + 116 = 180°. Aangesien mede-binnehoeke slegs presies op tot 180° optel wanneer die twee lyne waartussen hulle lê parallel is, bevestig dit dat die basissye van die trapesium parallel is — in ooreenstemming met die definisie van ʼn trapesium.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,135 190,135 155,45 65,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="122" font-size="13" fill="#2563eb" font-weight="700">64°</text><text x="165" y="122" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">116°</text></svg>' },

        // Blok D — veelhoek binne-/buitehoekformules
        { difficulty: 'Medium', question: 'Bepaal die som van die binnehoeke van ʼn elfhoek (11 sye).', answer: '1620°', checkMode: 'auto', correctAnswer: '1620', correctAnswers: ['1620', '1620°', '1620 degrees'], explanation: 'Som van binnehoeke = (n − 2) × 180°. Vir ʼn veelhoek met 11 sye, n = 11: (11 − 2) × 180 = 9 × 180 = 1620°.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Reëlmatige veelhoek met 18 sye het al sy binnehoeke gelyk. Bepaal die grootte van elke binnehoek.', answer: '160°', checkMode: 'auto', correctAnswer: '160', correctAnswers: ['160', '160°', '160 degrees'], explanation: 'Som van binnehoeke = (18 − 2) × 180 = 16 × 180 = 2880°. Elke hoek = 2880° ÷ 18 = 160°.' },
        { difficulty: 'Hard', question: 'ʼn Reëlmatige veelhoek het ʼn buitehoek van 15° by elke hoekpunt. Gebruik die feit dat die buitehoeke van enige veelhoek optel tot 360° om die aantal sye van die veelhoek te bepaal.', answer: '24 sye', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 sye', 'vier-en-twintig', 'vier-en-twintig sye'], explanation: 'Die buitehoeke van enige veelhoek tel op tot 360°. Aantal sye = 360° ÷ 15° = 24.' },

        // Blok E — gelykvormigheid vs kongruensie redenasie
        { difficulty: 'Easy', question: 'Twee driehoeke het dieselfde hoeke maar verskillende sylengtes — een is ʼn vergroting van die ander. Is hierdie driehoeke kongruent of gelykvormig?', answer: 'gelykvormig', checkMode: 'auto', correctAnswer: 'gelykvormig', correctAnswers: ['gelykvormig'], explanation: 'Vorms met dieselfde vorm (gelyke hoeke, sye in verhouding) maar verskillende groottes is gelykvormig, nie kongruent nie.' },
        { difficulty: 'Medium', question: 'Twee gelykvormige driehoeke het ooreenstemmende sye in die verhouding 4 : 9. Die kleiner driehoek se sy is 16 cm. Bepaal die ooreenstemmende sy in die groter driehoek.', answer: '36 cm', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36cm', '36 cm'], explanation: 'Stel die verhouding op: 4/9 = 16/x. Kruisvermenigvuldig: 4x = 144. x = 144 ÷ 4 = 36 cm. Kontroleer: 16/36 = 4/9 ✓' },
        { difficulty: 'Hard', question: 'Refilwe sê: "As twee vierhoeke al vier pare ooreenstemmende sye in verhouding het, moet hulle ook gelykvormig wees." Is sy korrek? Verduidelik.', answer: 'Nee — anders as driehoeke kan vierhoeke proporsionele sye hê maar verskillende hoeke (byvoorbeeld, ʼn vierkant en ʼn nie-vierkantige ruit kan proporsionele sye hê maar verskillende hoekstelle), dus vereis gelykvormigheid ook dat al die ooreenstemmende hoeke gelyk moet wees.', checkMode: 'self', explanation: 'Vir gelykvormigheid word BEIDE voorwaardes vereis: ooreenstemmende hoeke gelyk ÉN ooreenstemmende sye in verhouding. Vir driehoeke dwing sye in ʼn vaste verhouding eintlik ook die hoeke om ooreen te stem, maar vir vierhoeke (en ander veelhoeke met 4+ sye) word die vorm nie streng bepaal deur syverhoudings alleen nie — die hoeke kan verskil selfs al is die sye proporsioneel, dus waarborg proporsionele sye nie gelykvormigheid vir vierhoeke nie.' },

        // Blok F — multi-stap / toegepas
        { difficulty: 'Medium', question: 'ʼn Reëlmatige vyfhoek, soos getoon, het sye van 7,5 cm. Bepaal sy omtrek, en gee die grootte van elke binnehoek met behulp van die veelhoek-hoekformule.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Omtrek', correctAnswer: '37.5', correctAnswers: ['37.5', '37,5', '37.5cm', '37,5cm', '37.5 cm', '37,5 cm'], explanation: 'ʼn Reëlmatige vyfhoek het 5 gelyke sye. Omtrek = 5 × 7,5 = 37,5 cm.' }, { label: 'b) Elke binnehoek', correctAnswer: '108', correctAnswers: ['108', '108°', '108 degrees'], explanation: 'Som van binnehoeke = (5 − 2) × 180 = 540°. Elke hoek = 540° ÷ 5 = 108°.' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,32 165.2,72.1 144.1,136.9 75.9,136.9 54.8,72.1" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="156.9" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">7,5 cm</text></svg>' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het ooreenstemmende sye in die verhouding 3 : 5. Die kleiner driehoek het ʼn omtrek van 24 cm. Bepaal die omtrek van die groter driehoek, en verduidelik wat dit jou vertel oor die verwantskap tussen die verhouding van sye en die verhouding van omtrekke.', answer: 'Groter omtrek = 40 cm. Die verhouding van die omtrekke (24:40 = 3:5) is presies dieselfde as die verhouding van ooreenstemmende sye, omdat die omtrek van ʼn gelykvormige vorm met dieselfde faktor skaleer as sy sye.', checkMode: 'self', explanation: 'Stel die verhouding op met die skaalfaktor: 3/5 = 24/x. Kruisvermenigvuldig: 3x = 120, dus x = 40 cm. Aangesien elke sy van die groter driehoek 5/3 keer die ooreenstemmende sy van die kleiner driehoek is, is die omtrek (die som van al die sye) ook 5/3 keer so groot — dit bevestig dat die verhouding van omtrekke altyd ooreenstem met die verhouding van sye vir gelykvormige vorms.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy kan met selfvertroue hoekstellings, dubbele klassifikasie, veelhoekformules, en gelykvormigheid/kongruensie-redenasie toepas.' },
        { minScore: 14, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde blokuitleg, meer werklike kontekste + redenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok A — driehoek hoeksom & buitehoekstelling
        { difficulty: 'Easy', question: 'In die driehoek getoon, is twee van die binnehoeke 47° en 71°. Bepaal die derde hoek.', answer: '62°', checkMode: 'auto', correctAnswer: '62', correctAnswers: ['62', '62°', '62 degrees'], explanation: 'Derde hoek = 180° − 47° − 71° = 62°. Kontroleer: 47 + 71 + 62 = 180 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="55,140 168,140 118,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 80,140 A 28,28 0 0 1 70,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="85" y="128" font-size="14" fill="#2563eb" font-weight="700">47°</text><path d="M 143,140 A 28,28 0 0 0 155,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="126" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">71°</text><path d="M 107,38 A 18,18 0 0 1 129,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="118" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek getoon, is twee binnehoeke 39° en 96°. Een sy word verleng om ʼn buitehoek by die derde hoekpunt te vorm. Gebruik die buitehoekstelling om hierdie buitehoek te bepaal.', answer: '135°', checkMode: 'auto', correctAnswer: '135', correctAnswers: ['135', '135°', '135 degrees'], explanation: 'Volgens die buitehoekstelling is die buitehoek gelyk aan die som van die twee nie-aangrensende binnehoeke: 39° + 96° = 135°. Kontroleer: die binnehoek by daardie hoekpunt = 180 − 39 − 96 = 45°, en 180 − 45 = 135° ✓', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30.5,140 159.5,140 42.2,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="159.5" y1="140" x2="194.5" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 52.5,140 A 24,24 0 0 1 43.5,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="57.5" y="130" font-size="13" fill="#2563eb" font-weight="700">39°</text><path d="M 137.5,140 A 24,24 0 0 0 146.5,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="132.5" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">96°</text><path d="M 177.5,140 A 18,18 0 0 1 172.5,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="185.5" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het hoeke in die verhouding 1:3:5. Bepaal die grootte van elke hoek.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Kleinste hoek', correctAnswer: '20', correctAnswers: ['20', '20°', '20 degrees'], explanation: 'Totale dele = 1+3+5 = 9. Een deel = 180 ÷ 9 = 20°. Kleinste hoek = 1 × 20 = 20°.' }, { label: 'b) Middelste hoek', correctAnswer: '60', correctAnswers: ['60', '60°', '60 degrees'], explanation: 'Middelste hoek = 3 × 20 = 60°.' }, { label: 'c) Grootste hoek', correctAnswer: '100', correctAnswers: ['100', '100°', '100 degrees'], explanation: 'Grootste hoek = 5 × 20 = 100°. Kontroleer: 20 + 60 + 100 = 180 ✓' } ] },
        { difficulty: 'Hard', question: 'Andile sê: "In die driehoek getoon, as ek weet die buitehoek by een hoekpunt is 152°, kan ek altyd die binnehoek by dieselfde hoekpunt bepaal sonder enige ander inligting." Is hy korrek? Verduidelik, en gee dan die binnehoek vir hierdie geval.', answer: 'Ja — die binnehoek en sy aangrensende buitehoek by dieselfde hoekpunt lê op ʼn reguit lyn, dus is hulle supplementêr (tel op tot 180°). Binnehoek = 180° − 152° = 28°.', checkMode: 'self', explanation: 'ʼn Binnehoek en sy aangrensende buitehoek tel altyd op tot 180° omdat hulle op ʼn reguit lyn lê, ongeag die ander twee hoeke in die driehoek. Hier is binnehoek = 180° − 152° = 28°.', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#ea580c" font-weight="700">152°</text><text x="145" y="130" font-size="14" fill="#2563eb" font-weight="700">?</text></svg>' },

        // Blok B — driehoek klassifikasie volgens sye en hoeke (dubbel)
        { difficulty: 'Easy', question: 'ʼn Driehoek het drie sye van 9 cm, 9 cm en 9 cm, met al drie hoeke gelyk aan 60°, soos getoon. Klassifiseer hierdie driehoek volgens beide sy sye en sy hoeke.', answer: 'gelyksydig, skerphoekige driehoek', checkMode: 'auto', correctAnswer: 'gelyksydig skerphoekig', correctAnswers: ['gelyksydig skerphoekig', 'gelyksydig, skerphoekig', 'skerphoekig gelyksydig', 'gelyksydig en skerphoekig'], explanation: 'Al 3 sye is gelyk (9 cm elk), dus is dit gelyksydig. Al 3 hoeke (60° elk) is kleiner as 90°, dus is dit ook skerphoekig.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="43.6,140 176.4,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="82" font-size="13" fill="#2563eb" font-weight="700">9 cm</text><text x="149" y="82" font-size="13" fill="#2563eb" font-weight="700">9 cm</text><text x="110" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><path d="M 68.6,140 A 28,28 0 0 1 58.6,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="73.6" y="110" font-size="12" fill="#2563eb" font-weight="700">60°</text><path d="M 151.4,140 A 28,28 0 0 0 161.4,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="146.4" y="110" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60°</text><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="54" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">60°</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye van 5 cm, 12 cm en 13 cm, soos getoon. Een van sy hoeke meet presies 90°. Klassifiseer hierdie driehoek volgens beide sy sye en sy hoeke.', answer: 'ongelyksydig, reghoekige driehoek', checkMode: 'auto', correctAnswer: 'ongelyksydig reghoekig', correctAnswers: ['ongelyksydig reghoekig', 'ongelyksydig, reghoekig', 'reghoekig ongelyksydig', 'ongelyksydig en reghoekig'], explanation: 'Al 3 sye (5 cm, 12 cm, 13 cm) het verskillende lengtes, dus is dit ongelyksydig. Aangesien een hoek presies 90° is, is dit ook reghoekig — let op dat 5² + 12² = 25 + 144 = 169 = 13², wat bevestig dat die regte hoek oorkant die 13 cm-sy lê.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 35,72 155,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="35" y="128" width="12" height="12" fill="none" stroke="#2563eb" stroke-width="2"/><text x="20" y="106" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5 cm</text><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="105" y="100" font-size="13" fill="#2563eb" font-weight="700">13 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het hoeke in die verhouding 3:4:5, soos getoon. Bepaal elke hoek, en klassifiseer dan die driehoek volgens sy hoeke.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Die kleinste hoek', correctAnswer: '45', correctAnswers: ['45', '45°', '45 degrees'], explanation: 'Totale dele = 3+4+5 = 12. Een deel = 180 ÷ 12 = 15°. Kleinste hoek = 3 × 15 = 45°.' }, { label: 'b) Die middelste hoek', correctAnswer: '60', correctAnswers: ['60', '60°', '60 degrees'], explanation: 'Middelste hoek = 4 × 15 = 60°.' }, { label: 'c) Klassifiseer die driehoek volgens sy hoeke', correctAnswer: 'skerphoekig', correctAnswers: ['skerphoekig', 'skerphoekige driehoek'], explanation: 'Grootste hoek = 5 × 15 = 75°. Al drie hoeke (45°, 60°, 75°) is kleiner as 90°, dus is die driehoek skerphoekig. Kontroleer: 45 + 60 + 75 = 180 ✓' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 137.8,49.6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 28,28 0 0 1 45,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="126" font-size="13" fill="#ea580c" font-weight="700">3</text><path d="M 165,140 A 28,28 0 0 0 175,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="160" y="126" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">4</text><path d="M 128,61 A 16,16 0 0 1 148,61" fill="none" stroke="#ea580c" stroke-width="2"/><text x="138" y="79" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">5</text></svg>' },
        { difficulty: 'Hard', question: 'Thandeka sê: "ʼn Driehoek met sye 4 cm, 4 cm en 9 cm bestaan — dis net ʼn baie dun gelykbenige driehoek." Is sy korrek? Verduidelik met behulp van die driehoeksongelykheid.', answer: 'Nee — die driehoeksongelykheid vereis dat die som van enige twee sye groter moet wees as die derde sy. Hier is 4 + 4 = 8, wat kleiner is as 9, dus kan die twee kort sye nie mekaar bereik om die driehoek te sluit nie. Hierdie driehoek is onmoontlik.', checkMode: 'self', explanation: 'Driehoeksongelykheid-toets: 4 + 4 = 8 < 9. Aangesien die som van die twee korter sye kleiner is as die langste sy, kan so ʼn driehoek nie gevorm word nie — die twee 4 cm-sye sou nie lank genoeg wees om te ontmoet en die vorm te sluit nie.' },

        // Blok C — vierhoek eienskappe & hoeksom
        { difficulty: 'Easy', question: 'In die vierhoek getoon, is drie hoeke 63°, 155° en 88°. Bepaal die vierde hoek.', answer: '54°', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54°', '54 degrees'], explanation: 'Vierde hoek = 360° − 63° − 155° − 88° = 54°. Kontroleer: 63+155+88+54 = 360 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">63°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">155°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">88°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Parallelogram, soos getoon, het een hoek van 47°. Bepaal die grootte van die grootste hoek in die parallelogram.', answer: '133°', checkMode: 'auto', correctAnswer: '133', correctAnswers: ['133', '133°', '133 degrees'], explanation: 'Oorstaande hoeke in ʼn parallelogram is gelyk, dus is die hoek oorkant 47° ook 47°. Aangrensende hoeke is supplementêr: 180° − 47° = 133°. Die grootste hoek is 133°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">47°</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vlieër ABCD, soos getoon, het AB = 4,5 cm en BC = 10 cm. Bepaal die omtrek van die vlieër.', answer: '29 cm', checkMode: 'auto', correctAnswer: '29', correctAnswers: ['29', '29cm', '29 cm'], explanation: 'In ʼn vlieër is AD = AB = 4,5 cm en DC = BC = 10 cm. Omtrek = AB + BC + DC + AD = 4,5 + 10 + 10 + 4,5 = 29 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,25 165,75 110,145 55,75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="145" y="55" font-size="13" fill="#2563eb" font-weight="700">4,5 cm</text><text x="145" y="115" font-size="13" fill="#2563eb" font-weight="700">10 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Trapesium, soos getoon, het mede-binnehoeke van 58° en 122° tussen die parallelle sye. Zinhle sê hierdie twee hoeke bewys dat die basissye parallel is. Is sy korrek? Verduidelik.', answer: 'Ja — 58° + 122° = 180°, en mede-binnehoeke tussen twee lyne tel slegs op tot 180° wanneer die lyne parallel is. Dit bevestig dat die basissye parallel is.', checkMode: 'self', explanation: '58 + 122 = 180°. Aangesien mede-binnehoeke slegs presies op tot 180° optel wanneer die twee lyne waartussen hulle lê parallel is, bevestig dit dat die basissye van die trapesium parallel is — in ooreenstemming met die definisie van ʼn trapesium.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,135 190,135 155,45 65,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="122" font-size="13" fill="#2563eb" font-weight="700">58°</text><text x="165" y="122" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">122°</text></svg>' },

        // Blok D — veelhoek binne-/buitehoekformules
        { difficulty: 'Medium', question: 'Bepaal die som van die binnehoeke van ʼn sewehoek (7 sye).', answer: '900°', checkMode: 'auto', correctAnswer: '900', correctAnswers: ['900', '900°', '900 degrees'], explanation: 'Som van binnehoeke = (n − 2) × 180°. Vir ʼn sewehoek, n = 7: (7 − 2) × 180 = 5 × 180 = 900°.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Reëlmatige twintighoek (20 sye) het al sy binnehoeke gelyk. Bepaal die grootte van elke binnehoek.', answer: '162°', checkMode: 'auto', correctAnswer: '162', correctAnswers: ['162', '162°', '162 degrees'], explanation: 'Som van binnehoeke = (20 − 2) × 180 = 18 × 180 = 3240°. Elke hoek = 3240° ÷ 20 = 162°.' },
        { difficulty: 'Hard', question: 'ʼn Reëlmatige veelhoek het ʼn buitehoek van 20° by elke hoekpunt. Gebruik die feit dat die buitehoeke van enige veelhoek optel tot 360° om die aantal sye van die veelhoek te bepaal.', answer: '18 sye', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18 sye', 'agttien', 'agttien sye'], explanation: 'Die buitehoeke van enige veelhoek tel op tot 360°. Aantal sye = 360° ÷ 20° = 18.' },

        // Blok E — gelykvormigheid vs kongruensie redenasie
        { difficulty: 'Easy', question: 'Twee reghoeke het dieselfde hoeke (almal 90°) en sye in verhouding, maar een is groter as die ander. Is hierdie reghoeke kongruent of gelykvormig?', answer: 'gelykvormig', checkMode: 'auto', correctAnswer: 'gelykvormig', correctAnswers: ['gelykvormig'], explanation: 'Vorms met dieselfde vorm maar verskillende groottes is gelykvormig, nie kongruent nie — kongruente vorms moet ook in grootte ooreenstem.' },
        { difficulty: 'Medium', question: 'Twee gelykvormige driehoeke het ooreenstemmende sye in die verhouding 5 : 6. Die kleiner driehoek se sy is 20 cm. Bepaal die ooreenstemmende sy in die groter driehoek.', answer: '24 cm', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], explanation: 'Stel die verhouding op: 5/6 = 20/x. Kruisvermenigvuldig: 5x = 120. x = 120 ÷ 5 = 24 cm. Kontroleer: 20/24 = 5/6 ✓' },
        { difficulty: 'Hard', question: 'Mpho sê: "Kongruente driehoeke is ʼn spesiale geval van gelykvormige driehoeke." Is sy korrek? Verduidelik met behulp van die idee van skaalfaktor.', answer: 'Ja — kongruente driehoeke voldoen aan elke voorwaarde vir gelykvormigheid (gelyke hoeke, sye in verhouding) met ʼn skaalfaktor van presies 1, wat beteken die sye is nie net proporsioneel nie, maar werklik gelyk. Kongruensie is dus gelykvormigheid met ʼn skaalfaktor van 1.', checkMode: 'self', explanation: 'Gelykvormigheid vereis gelyke hoeke en sye in ʼn konstante verhouding (skaalfaktor). Wanneer daardie skaalfaktor gelyk is aan 1, is ooreenstemmende sye nie net proporsioneel nie, maar identies in lengte, wat presies die addisionele voorwaarde is wat vir kongruensie nodig is. Elke kongruente paar driehoeke is dus outomaties gelykvormig, maar nie elke gelykvormige paar is kongruent nie (slegs dié met skaalfaktor 1 is).' },

        // Blok F — multi-stap / toegepas
        { difficulty: 'Medium', question: 'ʼn Reëlmatige agthoek, soos getoon, het sye van 6,5 cm. Bepaal sy omtrek, en gee die grootte van elke binnehoek met behulp van die veelhoek-hoekformule.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Omtrek', correctAnswer: '52', correctAnswers: ['52', '52cm', '52 cm'], explanation: 'ʼn Reëlmatige agthoek het 8 gelyke sye. Omtrek = 8 × 6,5 = 52 cm.' }, { label: 'b) Elke binnehoek', correctAnswer: '135', correctAnswers: ['135', '135°', '135 degrees'], explanation: 'Som van binnehoeke = (8 − 2) × 180 = 1080°. Elke hoek = 1080° ÷ 8 = 135°.' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,32 151,49 168,90 151,131 110,148 69,131 52,90 69,49" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="178.0" y="118.2" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6,5 cm</text></svg>' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het ooreenstemmende sye in die verhouding 4 : 11. Die kleiner driehoek het ʼn omtrek van 20 cm. Bepaal die omtrek van die groter driehoek, en verduidelik wat dit jou vertel oor die verwantskap tussen die verhouding van sye en die verhouding van omtrekke.', answer: 'Groter omtrek = 55 cm. Die verhouding van die omtrekke (20:55 = 4:11) is presies dieselfde as die verhouding van ooreenstemmende sye, omdat die omtrek van ʼn gelykvormige vorm met dieselfde faktor skaleer as sy sye.', checkMode: 'self', explanation: 'Stel die verhouding op met die skaalfaktor: 4/11 = 20/x. Kruisvermenigvuldig: 4x = 220, dus x = 55 cm. Aangesien elke sy van die groter driehoek 11/4 keer die ooreenstemmende sy van die kleiner driehoek is, is die omtrek (die som van al die sye) ook 11/4 keer so groot — dit bevestig dat die verhouding van omtrekke altyd ooreenstem met die verhouding van sye vir gelykvormige vorms.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Fantasties! Jy kan hoekstellings, dubbele klassifikasie, veelhoekformules, en gelykvormigheid/kongruensie-redenasie op werklike kontekste toepas.' },
        { minScore: 14, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
