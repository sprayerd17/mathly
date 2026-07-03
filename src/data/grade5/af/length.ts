import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (unit of length roles) ────────────────────────────────────
// mm (millimeter) → blou   (#2563eb)
// cm (sentimeter) → groen  (#16a34a)
// m  (meter)      → oranje (#ea580c)
// km (kilometer)  → rooi   (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Lengte',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — LENGTE-EENHEDE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'units-of-length',
      title: 'Lengte-eenhede',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">Lengte vertel ons hoe lank of hoog iets is. Ons meet lengte deur <strong>standaard-eenhede</strong> te gebruik. Die hoofeenhede van lengte is ${bl('millimeter (mm)')}, ${gr('sentimeter (cm)')}, ${or('meter (m)')} en ${re('kilometer (km)')}. Om die regte eenheid te kies, maak meet makliker en die getalle makliker om mee te werk.</p>` +

        // ── Kleursleutel ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('mm')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('cm')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('m')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('km')}</span>` +
        `</div>` +

        // ── Eenheidskaarte ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die vier hoofeenhede van lengte</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Millimeter (${bl('mm')})</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die kleinste algemene eenheid. Word gebruik vir baie klein metings soos die dikte van ʼn muntstuk of die breedte van ʼn liniaallyn.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Sentimeter (${gr('cm')})</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Word gebruik vir kleiner voorwerpe soos ʼn potlood, ʼn boek, of iemand se hand. Daar is 10 ${bl('mm')} in 1 ${gr('cm')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Meter (${or('m')})</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Word gebruik vir groter dinge soos die hoogte van ʼn deur of die lengte van ʼn kamer. Daar is 100 ${gr('cm')} in 1 ${or('m')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Kilometer (${re('km')})</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Word gebruik vir lang afstande soos die afstand tussen twee dorpe. Daar is 1 000 ${or('m')} in 1 ${re('km')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Kies die regte eenheid ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Kies die regte eenheid</p>` +
        `<p style="margin-bottom:12px;">Kies altyd die eenheid wat vir jou ʼn <strong>gerieflike getal</strong> gee — nie te groot en nie te klein nie. Vra jouself: hoe groot is die voorwerp of afstand wat ek meet?</p>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">` +
        `<div style="font-size:13px;color:#6b7280;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding-bottom:6px;border-bottom:1px solid #e2e8f0;">Voorwerp / Afstand</div>` +
        `<div style="font-size:13px;color:#6b7280;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding-bottom:6px;border-bottom:1px solid #e2e8f0;">Beste eenheid</div>` +
        `<div style="font-size:14px;color:#374151;padding:4px 0;">Dikte van ʼn muntstuk</div><div style="font-size:14px;padding:4px 0;">${bl('mm')}</div>` +
        `<div style="font-size:14px;color:#374151;padding:4px 0;">Lengte van ʼn potlood</div><div style="font-size:14px;padding:4px 0;">${gr('cm')}</div>` +
        `<div style="font-size:14px;color:#374151;padding:4px 0;">Hoogte van ʼn deur</div><div style="font-size:14px;padding:4px 0;">${or('m')}</div>` +
        `<div style="font-size:14px;color:#374151;padding:4px 0;">Afstand tussen twee dorpe</div><div style="font-size:14px;padding:4px 0;">${re('km')}</div>` +
        `</div>` +
        `</div>` +

        // ── Wenkboks ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom die regte eenheid saak maak</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om die verkeerde eenheid te gebruik, maak getalle onnodig groot of klein en lei tot foute. Byvoorbeeld, om die afstand van Kaapstad na Johannesburg in ${bl('mm')} te meet, sou ʼn getal in die miljarde gee — onmoontlik om mee te werk. ${re('Kilometer')} gee ʼn hanteerbare getal van ongeveer 1 400.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho wil die lengte van sy potlood meet. Watter eenheid moet hy gebruik?',
          answer: `Sipho moet ${gr('sentimeter (cm)')} gebruik`,
          steps: [
            `ʼn Potlood is ʼn klein voorwerp.`,
            `${bl('Millimeter')} sou te veel syfers gee en moeilik wees om mee te werk.`,
            `${re('Kilometer')} en ${or('meter')} is te groot vir ʼn potlood.`,
            `${gr('Sentimeter')} is die beste eenheid om ʼn potlood te meet — ʼn tipiese potlood is omtrent 19 ${gr('cm')} lank.`,
            `<strong>Antwoord:</strong> Sipho moet ${gr('sentimeter (cm)')} gebruik.`,
          ],
        },
        {
          question: 'Lerato wil die afstand van Kaapstad na Johannesburg meet. Watter eenheid moet sy gebruik?',
          answer: `Lerato moet ${re('kilometer (km)')} gebruik`,
          steps: [
            `Die afstand tussen twee stede is baie groot.`,
            `${bl('Millimeter')}, ${gr('sentimeter')} en ${or('meter')} sou enorme getalle gee wat moeilik is om mee te werk.`,
            `${re('Kilometer')} is die beste eenheid vir lang afstande.`,
            `<strong>Antwoord:</strong> Lerato moet ${re('kilometer (km)')} gebruik.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Easy — kies eenheid vir ʼn klaskamer ──────────────────────────
        {
          difficulty: 'Easy',
          question: 'Watter eenheid sou jy gebruik om die lengte van ʼn klaskamer te meet?',
          answer: 'meter',
          checkMode: 'auto',
          correctAnswer: 'meter',
          explanation: 'ʼn Klaskamer is ʼn groot kamer — meter gee ʼn gerieflike getal. Millimeter en sentimeter sou baie groot getalle gee en kilometer sou ʼn baie klein desimale getal gee.',
        },

        // ── V2 Easy — kies eenheid vir stad-afstand ────────────────────────
        {
          difficulty: 'Easy',
          question: 'Watter eenheid sou jy gebruik om die afstand tussen twee stede te meet?',
          answer: 'kilometer',
          checkMode: 'auto',
          correctAnswer: 'kilometer',
          explanation: 'Die afstand tussen twee stede is baie groot. Kilometer gee ʼn hanteerbare getal. Om meter of sentimeter te gebruik sou onnodig groot getalle gee.',
        },

        // ── V3 Medium — verkeerde eenheidskeuse verduidelik ──────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho sê hy sal sy vinger in kilometer meet. Is hy korrek? Verduidelik.',
          answer: 'Nee — kilometer word vir baie lang afstande gebruik. Hy moet millimeter of sentimeter gebruik om sy vinger te meet.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a ruler with mm and cm marked, a door with metres, and a road with kilometres — each unit colour coded blue cm green m orange km red" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the four units of length mm cm m and km with real-life examples showing when to use each unit" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — OMSKAKELING VAN LENGTE-EENHEDE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-units-of-length',
      title: 'Omskakeling van Lengte-eenhede',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">Ons kan tussen lengte-eenhede omskakel deur hierdie verwantskappe te gebruik — ${or('10mm = 1cm')}, ${or('100cm = 1m')}, ${or('1 000m = 1km')}. Om van ʼn groter eenheid na ʼn kleiner eenheid om te skakel, ${gr('vermenigvuldig')} ons. Om van ʼn kleiner eenheid na ʼn groter eenheid om te skakel, ${re('deel')} ons. Kyk altyd of jou antwoord sinvol is — ʼn kleiner eenheid behoort ʼn groter getal te gee en ʼn groter eenheid behoort ʼn kleiner getal te gee.</p>` +

        // ── Kleursleutel ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vermenigvuldig')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('deel')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('omskakelingsfeit')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('antwoord')}</span>` +
        `</div>` +

        // ── Omskakelingsverwantskappe ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Omskakelingsverwantskappe</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:16px;justify-content:center;align-items:center;">` +
        `<div style="text-align:center;min-width:120px;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${or('10mm')} = ${or('1cm')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">·</div>` +
        `<div style="text-align:center;min-width:120px;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${or('100cm')} = ${or('1m')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">·</div>` +
        `<div style="text-align:center;min-width:120px;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${or('1 000m')} = ${or('1km')}</p>` +
        `</div>` +
        `</div>` +

        // ── Twee omskakelingsreëls ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die twee omskakelingsreëls</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Groter eenheid → kleiner eenheid: ${gr('vermenigvuldig')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Wanneer jy na ʼn kleiner eenheid omskakel, word die getal groter. ${gr('Vermenigvuldig')} met die omskakelingsfeit.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: cm → mm: ${gr('× 10')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Kleiner eenheid → groter eenheid: ${re('deel')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Wanneer jy na ʼn groter eenheid omskakel, word die getal kleiner. ${re('Deel')} deur die omskakelingsfeit.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: cm → m: ${re('÷ 100')}</p>` +
        `</div>` +

        `</div>` +

        // ── Redelikheidstoets-wenk ─────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Toets of jou antwoord sinvol is</p>` +
        `<p style="margin:0;color:#1e3a8a;">Kyk altyd of jou omgeskakelde antwoord sinvol is. ʼn Kleiner eenheid behoort ʼn ${bl('groter getal')} te gee en ʼn groter eenheid behoort ʼn ${bl('kleiner getal')} te gee. As jou antwoord die verkeerde kant toe gaan, het jy die verkeerde bewerking gebruik — ruil ${gr('vermenigvuldig')} en ${re('deel')} om en probeer weer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skakel 5cm om na millimeter.',
          answer: `${bl('50mm')}`,
          steps: [
            `Ons skakel van ʼn groter eenheid (${gr('cm')}) na ʼn kleiner eenheid (${bl('mm')}) om. Ons ${gr('vermenigvuldig')}.`,
            `Skryf die omskakelingsfeit neer: ${or('1cm = 10mm')}.`,
            `${gr('Vermenigvuldig:')} 5 ${gr('× 10')} = ${bl('50')}.`,
            `<strong>Antwoord:</strong> 5cm = ${bl('50mm')} ✓`,
          ],
        },
        {
          question: 'Skakel 300cm om na meter.',
          answer: `${bl('3m')}`,
          steps: [
            `Ons skakel van ʼn kleiner eenheid (${gr('cm')}) na ʼn groter eenheid (${or('m')}) om. Ons ${re('deel')}.`,
            `Skryf die omskakelingsfeit neer: ${or('100cm = 1m')}.`,
            `${re('Deel:')} 300 ${re('÷ 100')} = ${bl('3')}.`,
            `<strong>Antwoord:</strong> 300cm = ${bl('3m')} ✓`,
          ],
        },
        {
          question: 'Skakel 2,5km om na meter.',
          answer: `${bl('2 500m')}`,
          steps: [
            `Ons skakel van ʼn groter eenheid (${re('km')}) na ʼn kleiner eenheid (${or('m')}) om. Ons ${gr('vermenigvuldig')}.`,
            `Skryf die omskakelingsfeit neer: ${or('1km = 1 000m')}.`,
            `${gr('Vermenigvuldig:')} 2,5 ${gr('× 1 000')} = ${bl('2 500')}.`,
            `<strong>Antwoord:</strong> 2,5km = ${bl('2 500m')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V4 Easy — cm na mm omskakeling ───────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Skakel 4cm om na millimeter.',
          answer: '40mm',
          checkMode: 'auto',
          correctAnswer: '40mm',
          explanation: 'Ons skakel van ʼn groter eenheid (cm) na ʼn kleiner eenheid (mm) om, dus vermenigvuldig ons. 1cm = 10mm. 4 × 10 = 40. Antwoord: 40mm ✓',
        },

        // ── V5 Medium — cm na m omskakeling ──────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Skakel 250cm om na meter.',
          answer: '2.5m',
          checkMode: 'auto',
          correctAnswer: '2.5m',
          correctAnswers: ['2.5m', '2,5m', '2.5', '2,5'],
          explanation: 'Ons skakel van ʼn kleiner eenheid (cm) na ʼn groter eenheid (m) om, dus deel ons. 100cm = 1m. 250 ÷ 100 = 2,5. Antwoord: 2,5m ✓',
        },

        // ── V6 Hard — km na m omskakelingsfout verduidelik ─────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato skakel 3,2km om na meter en kry 320m. Is sy korrek? Verduidelik.',
          answer: 'Nee — om km na m om te skakel, vermenigvuldig ons met 1000. 3,2 × 1000 = 3200m nie 320m nie. Sy het vergeet om met 1000 te vermenigvuldig.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the conversion chain mm cm m km with multiply arrows going left to right smaller to larger and divide arrows going right to left larger to smaller colour coded green for multiply red for divide orange for conversion facts" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to convert between mm cm m and km using multiply and divide with three worked examples colour coded green for multiply red for divide orange for conversion facts blue for answers" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — LENGTE MEET
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'measuring-length',
      title: 'Lengte Meet',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">Om lengte akkuraat te meet, gebruik ons ʼn liniaal of ʼn meetlint. Begin altyd om te meet vanaf <strong>nul</strong> — nie vanaf die rand van die liniaal nie. Plaas die liniaal plat teen die voorwerp en lees die meting by die einde van die voorwerp. As die meting tussen twee merke val, skat so noukeurig as moontlik. Skryf jou meting met die korrekte eenheid neer.</p>` +

        // ── Kleursleutel ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('beginpunt')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('eindpunt')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('meting')}</span>` +
        `</div>` +

        // ── Hoe om ʼn liniaal te gebruik ───────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn liniaal korrek te gebruik</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Begin altyd vanaf die ${bl('nulmerk')} — nie vanaf die rand van die liniaal nie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Plaas die liniaal plat teen die voorwerp sodat dit nie gly nie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Lees die merk waar die voorwerp ${gr('eindig')}. Dit is jou ${or('meting')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">As die ${gr('eindpunt')} tussen twee merke val, skat so noukeurig as moontlik en skryf die ${or('meting')} met die korrekte eenheid neer.</p>` +
        `</div>` +

        `</div>` +

        // ── Wenkboks ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sluit altyd die eenheid in</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Meting sonder ʼn eenheid is onvolledig. Om "24" te skryf, beteken niks op sy eie nie — skryf altyd "${or('24cm')}" of "${or('13,5cm')}" sodat die leser presies weet wat gemeet is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Amahle meet haar boek met ʼn liniaal. Die boek begin by 0cm en eindig by die 24cm-merk. Hoe lank is die boek?',
          answer: `Die boek is ${or('24cm')} lank`,
          steps: [
            `Plaas die liniaal by ${bl('nul')}.`,
            `Lees die merk waar die boek ${gr('eindig')}.`,
            `Die boek eindig by die ${gr('24cm')}-merk.`,
            `Die boek is ${or('24cm')} lank.`,
          ],
        },
        {
          question: 'Thabo meet ʼn potlood en dit eindig halfpad tussen die 13cm- en 14cm-merke. Hoe lank is die potlood?',
          answer: `Die potlood is ongeveer ${or('13,5cm')} lank`,
          steps: [
            `Die potlood eindig tussen ${bl('13cm')} en ${gr('14cm')}.`,
            `Halfpad tussen 13 en 14 is 13,5.`,
            `Die potlood is ongeveer ${or('13,5cm')} lank.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V7 Easy — ʼn liniaal lees ────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Potlood meet 14cm op ʼn liniaal. Hoe lank is dit?',
          answer: '14cm',
          checkMode: 'auto',
          correctAnswer: '14cm',
          explanation: 'Lees die merk waar die potlood eindig. Die potlood eindig by die 14cm-merk. Antwoord: 14cm ✓',
        },

        // ── V8 Medium — lees tussen merke ───────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Boek eindig halfpad tussen die 18cm- en 19cm-merke op ʼn liniaal. Hoe lank is die boek?',
          answer: '18.5cm',
          checkMode: 'auto',
          correctAnswer: '18.5cm',
          correctAnswers: ['18.5cm', '18,5cm', '18.5', '18,5'],
          explanation: 'Die boek eindig tussen 18cm en 19cm. Halfpad tussen 18 en 19 is 18,5. Antwoord: 18,5cm ✓',
        },

        // ── V9 Hard — beoordeel ʼn redelike skatting ───────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo meet ʼn stuk tou en sê dit is omtrent 23cm. Die werklike lengte is 23,4cm. Is sy skatting redelik? Verduidelik.',
          answer: 'Ja — 23cm is baie naby aan 23,4cm. Hy het tot die naaste sentimeter gemeet, wat ʼn redelike skatting is.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a ruler with an object placed from zero to 24cm, starting point highlighted in blue, ending point in green, and measurement labelled in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to use a ruler correctly, starting from zero, reading the ending point, and recording the measurement with the correct unit" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — BEREKEN MET LENGTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-with-length',
      title: 'Bereken met Lengte',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">Ons kan lengtes ${gr('optel')} en ${re('aftrek')} om probleme op te los. Maak altyd seker dat alle metings in dieselfde eenheid is voordat jy bereken. As die eenhede verskil, ${bl('skakel')} hulle eers om en bereken dan. Kontroleer na berekening dat jou ${or('antwoord')} die korrekte eenheid langs hom geskryf het.</p>` +

        // ── Kleursleutel ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('omskakeling')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('optelling')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('aftrekking')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('antwoord')}</span>` +
        `</div>` +

        // ── Drie stappe ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Drie stappe om met lengte te bereken</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Skakel om')} — As die eenhede verskil, skakel alle metings eers na dieselfde eenheid om.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Bereken')} — ${gr('Tel op')} of ${re('trek af')} die lengtes sodra hulle in dieselfde eenheid is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Antwoord')} — Skryf die ${or('antwoord')} met die korrekte eenheid. ${bl('Skakel')} terug na ʼn meer gerieflike eenheid indien nodig.</p>` +
        `</div>` +

        `</div>` +

        // ── Wenkboks ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Skryf altyd die eenheid neer</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Lengte sonder ʼn eenheid is onvolledig. Kontroleer na elke berekening dat jou ${or('antwoord')} die eenheid insluit. As jy tydens die berekening na ʼn ander eenheid ${bl('omgeskakel')} het, maak seker jou finale ${or('antwoord')} is in ʼn sinvolle eenheid.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho het ʼn stuk tou wat 3m lank is. Hy sny 75cm af. Hoeveel tou is oor?',
          answer: `${or('2m 25cm')} tou is oor`,
          steps: [
            `Die eenhede verskil — meter en sentimeter. ${bl('Skakel')} 3m om na sentimeter: ${bl('3 × 100 = 300cm')}.`,
            `Trek nou ${re('af')}: ${re('300cm − 75cm = 225cm')}.`,
            `${bl('Skakel')} terug na meter indien nodig: ${bl('225cm = 2m 25cm')}.`,
            `<strong>Antwoord:</strong> Daar is ${or('2m 25cm')} tou oor. ✓`,
          ],
        },
        {
          question: 'Lerato stap 1,5km skool toe en dan 800m na die winkels. Hoe ver stap sy altesaam?',
          answer: `${or('2 300m')} of ${or('2,3km')} altesaam`,
          steps: [
            `${bl('Skakel')} om na dieselfde eenheid. ${bl('1,5km = 1 500m')}.`,
            `${gr('Tel op')}: ${gr('1 500m + 800m = 2 300m')}.`,
            `${bl('Skakel')} om na kilometer: ${bl('2 300m = 2,3km')}.`,
            `<strong>Antwoord:</strong> Lerato stap ${or('2 300m')} of ${or('2,3km')} altesaam. ✓`,
          ],
        },
        {
          question: 'ʼn Plank hout is 2m 40cm lank. ʼn Ander plank is 1m 80cm lank. Wat is hulle totale lengte?',
          answer: `${or('4m 20cm')}`,
          steps: [
            `${gr('Tel')} die meter ${gr('op')}: ${gr('2m + 1m = 3m')}.`,
            `${gr('Tel')} die sentimeter ${gr('op')}: ${gr('40cm + 80cm = 120cm')}.`,
            `${bl('Skakel')} 120cm om na meter: ${bl('120cm = 1m 20cm')}.`,
            `Totaal: ${gr('3m')} + ${bl('1m 20cm')} = ${or('4m 20cm')}.`,
            `<strong>Antwoord:</strong> Die totale lengte is ${or('4m 20cm')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V10 Easy — lengtes aftrek ──────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Tou is 500cm lank. Amahle sny 200cm af. Hoeveel is oor?',
          answer: '300cm',
          checkMode: 'auto',
          correctAnswer: '300cm',
          explanation: 'Albei lengtes is in sentimeter. Trek af: 500cm − 200cm = 300cm. Antwoord: 300cm ✓',
        },

        // ── V11 Medium — gemengde eenhede optel ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho stap 1,2km skool toe en 900m na die biblioteek. Hoe ver stap hy altesaam? Gee jou antwoord in meter.',
          answer: '2100m',
          checkMode: 'auto',
          correctAnswer: '2100m',
          explanation: 'Skakel 1,2km om na meter: 1,2 × 1000 = 1200m. Tel op: 1200m + 900m = 2100m. Antwoord: 2100m ✓',
        },

        // ── V12 Hard — saamgestelde lengtes optel ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Plank is 3m 60cm lank. ʼn Ander plank is 1m 80cm lank. Wat is hulle gekombineerde lengte?',
          answer: '5m 40cm',
          checkMode: 'auto',
          correctAnswer: '5m 40cm',
          explanation: 'Tel die meter op: 3m + 1m = 4m. Tel die sentimeter op: 60cm + 80cm = 140cm. Skakel 140cm om: 140cm = 1m 40cm. Totaal: 4m + 1m 40cm = 5m 40cm. Antwoord: 5m 40cm ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two length calculations — one subtraction problem with unit conversion highlighted in blue and the subtraction step in red, one addition problem with centimetre overflow converted to metres, final answers in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to add and subtract lengths with different units by converting first then calculating, with colour coded steps — conversion blue addition green subtraction red answer orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — OMTREK EN LENGTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'perimeter-and-length',
      title: 'Omtrek en Lengte',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">Die <strong>omtrek</strong> van ʼn vorm is die totale afstand rondom die buitekant van die vorm. Om die omtrek te vind, tel ons al die ${bl('sylengtes')} bymekaar. Maak seker alle sye is in dieselfde eenheid voordat jy optel. Die ${or('omtrek')} word altyd in ʼn eenheid van lengte gegee, soos cm, m of km.</p>` +

        // ── Kleursleutel ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('sylengtes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('optelling')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('omtrek-antwoord')}</span>` +
        `</div>` +

        // ── Sleutelfeite ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelfeite oor omtrek</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Reghoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Het 2 pare gelyke ${bl('sye')}. Omtrek = ${bl('lengte')} + ${bl('lengte')} + ${bl('breedte')} + ${bl('breedte')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vierkant</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Al 4 ${bl('sye')} is gelyk. Omtrek = ${bl('sy')} × 4, of ${gr('tel')} al vier ${bl('sye')} bymekaar ${gr('op')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Enige vorm</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Tel')} al die ${bl('sylengtes')} bymekaar ${gr('op')}. Die ${or('omtrek-antwoord')} is altyd in ʼn eenheid van lengte.</p>` +
        `</div>` +

        `</div>` +

        // ── Wenkboks ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Reël van dieselfde eenheid</p>` +
        `<p style="margin:0;color:#1e3a8a;">Maak altyd seker dat alle ${bl('sylengtes')} in dieselfde eenheid is voordat jy hulle ${gr('optel')}. As die sye in verskillende eenhede gegee word, skakel eers om en ${gr('tel')} dan ${gr('op')}. Die ${or('omtrek-antwoord')} moet die korrekte eenheid insluit.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Reghoek is 8cm lank en 5cm breed. Wat is sy omtrek?',
          answer: `Die omtrek van die reghoek is ${or('26cm')}`,
          steps: [
            `ʼn Reghoek het 4 sye — 2 lang sye en 2 kort sye. Die ${bl('lang sye')} is elk ${bl('8cm')} en die ${bl('kort sye')} is elk ${bl('5cm')}.`,
            `${gr('Tel')} al vier sye ${gr('op')}: ${bl('8')} + ${bl('8')} + ${bl('5')} + ${bl('5')} = ${gr('26')}.`,
            `<strong>Antwoord:</strong> Die omtrek van die reghoek is ${or('26cm')}. ✓`,
          ],
        },
        {
          question: 'Thabo wil ʼn heining om sy vierkantige tuin sit. Elke sy van die tuin is 12m. Hoeveel heiningmateriaal het hy nodig?',
          answer: `Thabo het ${or('48m')} heiningmateriaal nodig`,
          steps: [
            `ʼn Vierkant het 4 gelyke sye. Elke ${bl('sy')} is ${bl('12m')}.`,
            `${gr('Tel')} al vier sye ${gr('op')}: ${bl('12')} + ${bl('12')} + ${bl('12')} + ${bl('12')} = ${gr('48')}. Of vermenigvuldig: 4 × ${bl('12')} = ${gr('48')}.`,
            `<strong>Antwoord:</strong> Thabo het ${or('48m')} heiningmateriaal nodig. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V13 Easy — omtrek van ʼn vierkant ────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Vierkant het sye van 6cm. Wat is sy omtrek?',
          answer: '24cm',
          checkMode: 'auto',
          correctAnswer: '24cm',
          explanation: 'ʼn Vierkant het 4 gelyke sye. Omtrek = 6 + 6 + 6 + 6 = 24cm. Of: 4 × 6 = 24cm. Antwoord: 24cm ✓',
        },

        // ── V14 Medium — omtrek van ʼn reghoek ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Reghoek is 12cm lank en 7cm breed. Wat is sy omtrek?',
          answer: '38cm',
          checkMode: 'auto',
          correctAnswer: '38cm',
          explanation: 'ʼn Reghoek het 2 lang sye en 2 kort sye. Omtrek = 12 + 12 + 7 + 7 = 38cm. Antwoord: 38cm ✓',
        },

        // ── V15 Hard — kontroleer of lint genoeg is ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato wil lint om ʼn reghoekige prentraam sit wat 30cm lank en 20cm breed is. Sy het 90cm lint. Het sy genoeg? Verduidelik.',
          answer: 'Omtrek = 30 + 30 + 20 + 20 = 100cm. Sy het net 90cm, dus het sy nie genoeg lint nie. Sy het 10cm meer nodig.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a labelled rectangle with sides 8cm and 5cm and a square with sides 12m, all side lengths highlighted in blue and the perimeter answer shown in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining how to find the perimeter of a rectangle and a square by adding all side lengths, with sides colour coded blue, addition green and perimeter answer orange" />',
    },
  ],
  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het lengte bemeester.' },
      { minPercent: 75, message: 'Goeie werk! Jy het ʼn sterk begrip van lengte.' },
      { minPercent: 50, message: 'Goeie poging! Gaan die afdelings waar jy punte verloor het weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },
}
