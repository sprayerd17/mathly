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
}
