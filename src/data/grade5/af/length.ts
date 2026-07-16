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
        'ʼn Liniaal met mm- en cm-merke, ʼn deur geëtiketteer in meter, en ʼn pad met ʼn afstandsbord geëtiketteer in kilometer — mm blou, cm groen, m oranje en km rooi',
      diagramSvg:
        '<svg viewBox="0 0 320 175" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="120" width="90" height="16" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="10" y1="120" x2="10" y2="136" stroke="#0f1f3d" stroke-width="1.5"/><line x1="28" y1="120" x2="28" y2="132" stroke="#0f1f3d" stroke-width="1.5"/><line x1="46" y1="120" x2="46" y2="132" stroke="#0f1f3d" stroke-width="1.5"/><line x1="64" y1="120" x2="64" y2="132" stroke="#0f1f3d" stroke-width="1.5"/><line x1="82" y1="120" x2="82" y2="132" stroke="#0f1f3d" stroke-width="1.5"/><line x1="100" y1="120" x2="100" y2="136" stroke="#0f1f3d" stroke-width="1.5"/><text x="10" y="150" font-size="9" fill="#16a34a" text-anchor="middle">0</text><text x="100" y="150" font-size="9" fill="#16a34a" text-anchor="middle">5cm</text><text x="55" y="112" font-size="12" font-weight="700" fill="#16a34a" text-anchor="middle">cm</text><line x1="10" y1="86" x2="28" y2="86" stroke="#2563eb" stroke-width="1.5"/><line x1="10" y1="82" x2="10" y2="90" stroke="#2563eb" stroke-width="1.5"/><line x1="14.8" y1="83" x2="14.8" y2="89" stroke="#2563eb" stroke-width="1"/><line x1="19.6" y1="83" x2="19.6" y2="89" stroke="#2563eb" stroke-width="1"/><line x1="24.4" y1="83" x2="24.4" y2="89" stroke="#2563eb" stroke-width="1"/><line x1="28" y1="82" x2="28" y2="90" stroke="#2563eb" stroke-width="1.5"/><text x="19" y="75" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">mm</text><line x1="10" y1="90" x2="10" y2="120" stroke="#2563eb" stroke-width="1" stroke-dasharray="2,2"/><line x1="28" y1="90" x2="28" y2="120" stroke="#2563eb" stroke-width="1" stroke-dasharray="2,2"/><rect x="140" y="40" width="46" height="100" rx="2" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="176" cy="90" r="2.5" fill="#0f1f3d"/><line x1="196" y1="40" x2="196" y2="140" stroke="#ea580c" stroke-width="1.5"/><line x1="192" y1="40" x2="200" y2="40" stroke="#ea580c" stroke-width="1.5"/><line x1="192" y1="140" x2="200" y2="140" stroke="#ea580c" stroke-width="1.5"/><text x="212" y="94" font-size="12" font-weight="700" fill="#ea580c" text-anchor="middle">2 m</text><line x1="230" y1="160" x2="270" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="310" y1="160" x2="280" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="245" y1="140" x2="295" y2="140" stroke="#0f1f3d" stroke-width="1" stroke-dasharray="4,4"/><line x1="290" y1="70" x2="290" y2="110" stroke="#dc2626" stroke-width="2.5"/><rect x="276" y="55" width="40" height="20" rx="3" fill="none" stroke="#dc2626" stroke-width="2.5"/><text x="296" y="69" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">5 km</text><text x="55" y="165" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Liniaal</text><text x="163" y="160" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Deur</text><text x="270" y="165" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Pad</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die vier eenhede van lengte mm cm m en km verduidelik met werklike-lewe-voorbeelde wat wys wanneer om elke eenheid te gebruik" />',
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
          answer: '2,5m',
          checkMode: 'auto',
          correctAnswer: '2,5m',
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
        'Omskakelingsketting van mm na cm na m na km, met groen vermenigvuldig-pyle om na ʼn kleiner eenheid om te skakel en rooi deel-pyle om na ʼn groter eenheid om te skakel, omskakelingsfeite in oranje',
      diagramSvg:
        '<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="58" width="70" height="34" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="80" font-size="15" font-weight="700" fill="#2563eb" text-anchor="middle">mm</text><rect x="110" y="58" width="70" height="34" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="145" y="80" font-size="15" font-weight="700" fill="#16a34a" text-anchor="middle">cm</text><rect x="210" y="58" width="70" height="34" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="245" y="80" font-size="15" font-weight="700" fill="#ea580c" text-anchor="middle">m</text><rect x="310" y="58" width="70" height="34" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="345" y="80" font-size="15" font-weight="700" fill="#dc2626" text-anchor="middle">km</text><line x1="85" y1="42" x2="105" y2="42" stroke="#dc2626" stroke-width="2"/><polygon points="109,42 101,37 101,47" fill="#dc2626"/><text x="97" y="30" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">÷10</text><line x1="185" y1="42" x2="205" y2="42" stroke="#dc2626" stroke-width="2"/><polygon points="209,42 201,37 201,47" fill="#dc2626"/><text x="197" y="30" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">÷100</text><line x1="285" y1="42" x2="305" y2="42" stroke="#dc2626" stroke-width="2"/><polygon points="309,42 301,37 301,47" fill="#dc2626"/><text x="297" y="30" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">÷1000</text><line x1="105" y1="108" x2="85" y2="108" stroke="#16a34a" stroke-width="2"/><polygon points="81,108 89,103 89,113" fill="#16a34a"/><text x="97" y="124" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">×10</text><line x1="205" y1="108" x2="185" y2="108" stroke="#16a34a" stroke-width="2"/><polygon points="181,108 189,103 189,113" fill="#16a34a"/><text x="197" y="124" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">×100</text><line x1="305" y1="108" x2="285" y2="108" stroke="#16a34a" stroke-width="2"/><polygon points="281,108 289,103 289,113" fill="#16a34a"/><text x="297" y="124" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">×1000</text><text x="200" y="146" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">10mm = 1cm · 100cm = 1m · 1 000m = 1km</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om tussen mm cm m en km om te skakel deur te vermenigvuldig en te deel, met drie uitgewerkte voorbeelde kleurgekodeer groen vir vermenigvuldig rooi vir deel oranje vir omskakelingsfeite blou vir antwoorde" />',
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
          answer: '18,5cm',
          checkMode: 'auto',
          correctAnswer: '18,5cm',
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
        'ʼn Liniaal met ʼn voorwerp geplaas vanaf 0 tot 24cm, die beginpunt uitgelig in blou, die eindpunt in groen, en die meting geëtiketteer in oranje',
      diagramSvg:
        '<svg viewBox="0 0 230 110" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="28" width="192" height="14" rx="2" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="202,28 202,42 214,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="10" y1="16" x2="10" y2="24" stroke="#ea580c" stroke-width="1.5"/><line x1="202" y1="16" x2="202" y2="24" stroke="#ea580c" stroke-width="1.5"/><line x1="10" y1="18" x2="202" y2="18" stroke="#ea580c" stroke-width="1.5"/><text x="106" y="12" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">24 cm</text><rect x="10" y="60" width="200" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="10" y1="60" x2="10" y2="78" stroke="#2563eb" stroke-width="2"/><line x1="50" y1="60" x2="50" y2="72" stroke="#0f1f3d" stroke-width="1"/><line x1="90" y1="60" x2="90" y2="72" stroke="#0f1f3d" stroke-width="1"/><line x1="130" y1="60" x2="130" y2="72" stroke="#0f1f3d" stroke-width="1"/><line x1="170" y1="60" x2="170" y2="72" stroke="#0f1f3d" stroke-width="1"/><line x1="202" y1="60" x2="202" y2="78" stroke="#16a34a" stroke-width="2"/><text x="10" y="95" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">0</text><text x="50" y="95" font-size="9" fill="#374151" text-anchor="middle">5</text><text x="90" y="95" font-size="9" fill="#374151" text-anchor="middle">10</text><text x="130" y="95" font-size="9" fill="#374151" text-anchor="middle">15</text><text x="170" y="95" font-size="9" fill="#374151" text-anchor="middle">20</text><text x="202" y="95" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">24</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn liniaal korrek te gebruik, deur by nul te begin, die eindpunt te lees, en die meting met die korrekte eenheid neer te skryf" />',
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

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om lengtes met verskillende eenhede op te tel en af te trek deur eers om te skakel en dan te bereken, met kleurgekodeerde stappe — omskakeling blou, optelling groen, aftrekking rooi, antwoord oranje" />',
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
        'ʼn Geëtiketteerde reghoek met sye 8cm en 5cm en ʼn vierkant met sye 12m, alle sylengtes uitgelig in blou en die omtrekantwoord getoon in oranje',
      diagramSvg:
        '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="35" width="80" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="60" y="28" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">8 cm</text><text x="8" y="64" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle" transform="rotate(-90 8 64)">5 cm</text><text x="60" y="105" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">P = 26 cm</text><rect x="180" y="15" width="80" height="80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="220" y="8" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">12 m</text><text x="270" y="59" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle" transform="rotate(-90 270 59)">12 m</text><text x="220" y="115" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">P = 48 m</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat verduidelik hoe om die omtrek van ʼn reghoek en ʼn vierkant te bereken deur al die sylengtes op te tel, met sye kleurgekodeer blou, optelling groen en omtrekantwoord oranje" />',
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Kies eenhede | 4-8 Omskakeling (berekening) |
    // 9-11 Foutopsporing | 12-15 Meting lees & Woordprobleme |
    // 16-17 Bereken (optel/aftrek gemengde eenhede) | 18-19 Omtrek-toepassings
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die lengte van ʼn swembad te meet: cm of m?', checkMode: 'auto', correctAnswer: 'm', correctAnswers: ['m', 'meter'], explanation: 'ʼn Swembad is ʼn redelik groot voorwerp, dus gee meter ʼn sinvolle, maklik leesbare getal. Sentimeter sou ʼn onnodig groot getal gee.' },
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die dikte van ʼn R5-muntstuk te meet: mm of km?', checkMode: 'auto', correctAnswer: 'mm', correctAnswers: ['mm', 'millimeter'], explanation: 'ʼn Muntstuk is uiters dun, dus word millimeter benodig om ʼn betekenisvolle getal te kry. Kilometer sou glad nie sin maak vir iets so klein nie.' },
        { difficulty: 'Easy', question: 'Om die lengte van ʼn sokkerveld te meet, wat is meer sinvol: om meter te gebruik, of om millimeter te gebruik?', checkMode: 'auto', correctAnswer: 'meter', correctAnswers: ['meter', 'm'], explanation: 'ʼn Sokkerveld is omtrent 100m lank. Meter gee ʼn hanteerbare getal soos 100, terwyl millimeter ʼn getal in die honderdduisende sou gee — te groot om nuttig te wees.' },
        { difficulty: 'Easy', question: 'Nomvula sê sy sal die lengte van haar klaskamer in millimeter meet, want "kleiner eenhede is altyd akkurater." Verduidelik waarom dit nie ʼn sinvolle keuse is nie, al is dit tegnies moontlik.', checkMode: 'self', answer: 'Dit is tegnies moontlik, maar nie sinvol nie — ʼn klaskamer is omtrent 8 000mm tot 10 000mm lank, wat ʼn lomp, moeilik leesbare getal is. Meter gee ʼn baie geriefliker getal (omtrent 8m tot 10m) vir alledaagse gebruik, sonder om betekenisvolle akkuraatheid vir ʼn kamer-grootte meting te verloor.' },
        { difficulty: 'Easy-Medium', question: 'Skakel 6cm om na millimeter.', checkMode: 'auto', correctAnswer: '60mm', correctAnswers: ['60mm', '60 mm', '60'], explanation: 'Om cm na mm om te skakel, vermenigvuldig met 10 (ʼn groter eenheid na ʼn kleiner eenheid). 6 × 10 = 60mm.' },
        { difficulty: 'Easy-Medium', question: 'Skakel 400cm om na meter.', checkMode: 'auto', correctAnswer: '4m', correctAnswers: ['4m', '4 m', '4'], explanation: 'Om cm na m om te skakel, deel deur 100 (ʼn kleiner eenheid na ʼn groter eenheid). 400 ÷ 100 = 4m.' },
        { difficulty: 'Medium', question: 'Skakel 3,4km om na meter.', checkMode: 'auto', correctAnswer: '3400m', correctAnswers: ['3400m', '3400 m', '3400', '3 400m', '3 400 m'], explanation: 'Om km na m om te skakel, vermenigvuldig met 1 000 (ʼn groter eenheid na ʼn kleiner eenheid). 3,4 × 1 000 = 3 400m.' },
        { difficulty: 'Medium', question: 'Skakel 850cm om na meter.', checkMode: 'auto', correctAnswer: '8,5m', correctAnswers: ['8,5m', '8,5 m', '8,5', '8.5m', '8.5 m', '8.5'], explanation: 'Om cm na m om te skakel, deel deur 100. 850 ÷ 100 = 8,5m.' },
        { difficulty: 'Medium', question: 'Skakel 2 500mm om na meter. (Wenk: skakel eers om na cm, dan na m.)', checkMode: 'auto', correctAnswer: '2,5m', correctAnswers: ['2,5m', '2,5 m', '2,5', '2.5m', '2.5 m', '2.5'], explanation: 'Skakel eers mm na cm om: 2 500 ÷ 10 = 250cm. Skakel dan cm na m om: 250 ÷ 100 = 2,5m.' },
        { difficulty: 'Medium', question: 'ʼn Leerder skakel 4m om na sentimeter en skryf 40cm. Is dit korrek? Verduidelik die fout en gee die korrekte antwoord.', checkMode: 'self', answer: 'Nee, dit is nie korrek nie. Om meter na sentimeter om te skakel, vermenigvuldig jy met 100, nie 10 nie. Die korrekte berekening is 4 × 100 = 400cm. Die leerder het die verkeerde omskakelingsfeit gebruik (hulle het die mm-na-cm-feit van 10 gebruik in plaas van die m-na-cm-feit van 100).' },
        { difficulty: 'Medium', question: 'ʼn Leerder skakel 6km om na meter deur te skryf 6 × 100 = 600m. Is dit korrek? Verduidelik die fout en gee die korrekte antwoord.', checkMode: 'self', answer: 'Nee, dit is nie korrek nie. Om km na m om te skakel, vermenigvuldig jy met 1 000, nie 100 nie. Die korrekte berekening is 6 × 1 000 = 6 000m. Die leerder het die verkeerde omskakelingsfeit gebruik.' },
        { difficulty: 'Medium', question: 'ʼn Leerder skakel 3,2cm om na millimeter en skryf 0,32mm, en sê "jy deel deur 10 om dit kleiner te maak." Is dit korrek? Verduidelik die fout en gee die korrekte antwoord.', checkMode: 'self', answer: 'Nee, dit is nie korrek nie. Om van ʼn groter eenheid (cm) na ʼn kleiner eenheid (mm) om te skakel, behoort die getal groter te word, nie kleiner nie, dus moet jy vermenigvuldig, nie deel nie. Die korrekte berekening is 3,2 × 10 = 32mm. Die leerder het die verkeerde rigting van die bewerking gebruik.' },
        { difficulty: 'Medium', question: 'ʼn Liniaal wys ʼn kryt wat presies op die 16cm-merk eindig. Hoe lank is die kryt?', checkMode: 'auto', correctAnswer: '16cm', correctAnswers: ['16cm', '16 cm', '16'], explanation: 'Om die liniaalmerk te lees waar die kryt eindig, gee direk 16cm.' },
        { difficulty: 'Medium', question: 'ʼn Lint word op ʼn liniaal gemeet en die punt val presies halfpad tussen die 21cm- en 22cm-merke. Wat is die lengte van die lint?', checkMode: 'auto', correctAnswer: '21,5cm', correctAnswers: ['21,5cm', '21,5 cm', '21,5', '21.5cm', '21.5 cm', '21.5'], explanation: 'Halfpad tussen 21cm en 22cm is 21,5cm, dus is die lint ongeveer 21,5cm lank.' },
        { difficulty: 'Medium', question: 'Sipho se tuinpaadjie is 14m lank. Sy buurman se paadjie is 1 350cm lank. Wie se paadjie is langer, en met hoeveel meter?', checkMode: 'auto', correctAnswer: 'buurman0,5m', correctAnswers: ['buurman0,5m', 'buurman, 0,5m', 'buurman se paadjie 0,5m', 'buurman 0,5m', 'buurman0.5m'], explanation: 'Skakel 1 350cm om na meter: 1 350 ÷ 100 = 13,5m. Vergelyk: Sipho se paadjie is 14m en die buurman s\'n is 13,5m. Sipho se paadjie is langer, met 14 − 13,5 = 0,5m.' },
        { difficulty: 'Medium', question: 'ʼn Kleremaker benodig 2,3m stof vir ʼn rok en 180cm stof vir ʼn romp. Watter kledingstuk benodig meer stof, en met hoeveel sentimeter?', checkMode: 'auto', correctAnswer: 'rok50cm', correctAnswers: ['rok50cm', 'rok, 50cm', 'rok 50cm'], explanation: 'Skakel 2,3m om na cm: 2,3 × 100 = 230cm. Vergelyk: die rok benodig 230cm, die romp benodig 180cm. Die rok benodig meer, met 230 − 180 = 50cm.' },
        { difficulty: 'Hard', question: 'ʼn Stuk tou is 4m lank. Thabo sny 65cm af om ʼn pakkie toe te bind. Hoeveel tou is oor? Gee jou antwoord in meter en sentimeter.', checkMode: 'auto', correctAnswer: '3m35cm', correctAnswers: ['3m35cm', '3m 35cm', '3 m 35 cm', '335cm', '335 cm'], explanation: 'Skakel 4m om na cm: 4 × 100 = 400cm. Trek af: 400 − 65 = 335cm. Skakel terug om: 335cm = 3m 35cm.' },
        { difficulty: 'Hard', question: 'ʼn Fietsryer ry 2,4km na die park en dan nog ʼn verdere 650m om die park se roete. Wat is die totale afstand afgelê, in kilometer?', checkMode: 'auto', correctAnswer: '3,05km', correctAnswers: ['3,05km', '3,05 km', '3,05', '3.05km', '3.05 km', '3.05', '3050m', '3 050m', '3050 m'], explanation: 'Skakel 2,4km om na m: 2,4 × 1 000 = 2 400m. Tel op: 2 400 + 650 = 3 050m. Skakel terug om na km: 3 050 ÷ 1 000 = 3,05km.' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige groentetuin is 9m lank en 4m breed. Lerato wil ʼn lae heining om die hele tuin bou. Hoeveel meter heiningmateriaal het sy nodig?', checkMode: 'auto', correctAnswer: '26m', correctAnswers: ['26m', '26 m', '26'], explanation: 'Omtrek van ʼn reghoek = lengte + lengte + breedte + breedte = 9 + 9 + 4 + 4 = 26m. Sy het 26m heiningmateriaal nodig.' },
        { difficulty: 'Hard', question: 'ʼn Vierkantige blombedding het sye van 15m. Amahle het 55m rand-stene om die grens te plaas. Het sy genoeg? Wys jou werk en verduidelik.', checkMode: 'self', answer: 'Omtrek van die vierkant = 15 + 15 + 15 + 15 = 60m (of 4 × 15 = 60m). Amahle het net 55m rand-stene, wat minder is as die 60m wat sy nodig het. Sy het nie genoeg nie — sy het nog 5m nodig.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het eenheidskeuse, omskakeling en die toepassing van lengte op werklike probleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van lengte — gaan enige gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor omskakeling en omtrek weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die lengte van ʼn eettafel te meet: cm of km?', checkMode: 'auto', correctAnswer: 'cm', correctAnswers: ['cm', 'sentimeter'], explanation: 'ʼn Eettafel is ʼn klein-tot-medium grootte voorwerp, dus gee sentimeter ʼn sinvolle getal, gewoonlik omtrent 150cm. Kilometer sou ʼn veels te groot eenheid wees.' },
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die afstand te meet wat ʼn taxi tussen twee dorpe aflê: m of km?', checkMode: 'auto', correctAnswer: 'km', correctAnswers: ['km', 'kilometer'], explanation: 'Die afstand tussen dorpe is baie groot, dus gee kilometer ʼn hanteerbare getal. Meter sou ʼn onnodig groot getal gee.' },
        { difficulty: 'Easy', question: 'Om die breedte van ʼn selfoonskerm te meet, wat is meer sinvol: om sentimeter te gebruik, of om kilometer te gebruik?', checkMode: 'auto', correctAnswer: 'sentimeter', correctAnswers: ['sentimeter', 'cm'], explanation: 'ʼn Selfoonskerm is maar ʼn paar sentimeter breed, dus gee sentimeter (of selfs mm) ʼn sinvolle getal. Kilometer sou ʼn onmoontlik klein desimale getal gee.' },
        { difficulty: 'Easy', question: 'Kagiso sê hy sal die lengte van die skoolgang in millimeter meet "sodat die antwoord meer syfers het en presieser lyk." Verduidelik waarom hierdie redenasie foutief is.', checkMode: 'self', answer: 'Meer syfers maak ʼn meting nie noodwendig nuttiger of presieser vir hierdie doel nie — ʼn gang mag omtrent 20 000mm lank wees, wat ʼn lomp getal is om te lees en mee te werk. Meter (20m) gee presies dieselfde werklike akkuraatheid vir ʼn lengte van hierdie grootte, maar is baie makliker om te verstaan en te gebruik.' },
        { difficulty: 'Easy-Medium', question: 'Skakel 8cm om na millimeter.', checkMode: 'auto', correctAnswer: '80mm', correctAnswers: ['80mm', '80 mm', '80'], explanation: 'Om cm na mm om te skakel, vermenigvuldig met 10. 8 × 10 = 80mm.' },
        { difficulty: 'Easy-Medium', question: 'Skakel 900cm om na meter.', checkMode: 'auto', correctAnswer: '9m', correctAnswers: ['9m', '9 m', '9'], explanation: 'Om cm na m om te skakel, deel deur 100. 900 ÷ 100 = 9m.' },
        { difficulty: 'Medium', question: 'Skakel 1,7km om na meter.', checkMode: 'auto', correctAnswer: '1700m', correctAnswers: ['1700m', '1700 m', '1700', '1 700m', '1 700 m'], explanation: 'Om km na m om te skakel, vermenigvuldig met 1 000. 1,7 × 1 000 = 1 700m.' },
        { difficulty: 'Medium', question: 'Skakel 620cm om na meter.', checkMode: 'auto', correctAnswer: '6,2m', correctAnswers: ['6,2m', '6,2 m', '6,2', '6.2m', '6.2 m', '6.2'], explanation: 'Om cm na m om te skakel, deel deur 100. 620 ÷ 100 = 6,2m.' },
        { difficulty: 'Medium', question: 'Skakel 4 200mm om na meter. (Wenk: skakel eers om na cm, dan na m.)', checkMode: 'auto', correctAnswer: '4,2m', correctAnswers: ['4,2m', '4,2 m', '4,2', '4.2m', '4.2 m', '4.2'], explanation: 'Skakel eers mm na cm om: 4 200 ÷ 10 = 420cm. Skakel dan cm na m om: 420 ÷ 100 = 4,2m.' },
        { difficulty: 'Medium', question: 'ʼn Leerder skakel 5m om na sentimeter en skryf 50cm. Is dit korrek? Verduidelik die fout en gee die korrekte antwoord.', checkMode: 'self', answer: 'Nee, dit is nie korrek nie. Om meter na sentimeter om te skakel, vermenigvuldig jy met 100, nie 10 nie. Die korrekte berekening is 5 × 100 = 500cm. Die leerder het die verkeerde omskakelingsfeit gebruik.' },
        { difficulty: 'Medium', question: 'ʼn Leerder skakel 8km om na meter deur te skryf 8 ÷ 1 000 = 0,008m. Is dit korrek? Verduidelik die fout en gee die korrekte antwoord.', checkMode: 'self', answer: 'Nee, dit is nie korrek nie. Om van ʼn groter eenheid (km) na ʼn kleiner eenheid (m) om te skakel, behoort die getal groter te word, nie kleiner nie, dus moet die leerder vermenigvuldig, nie deel nie. Die korrekte berekening is 8 × 1 000 = 8 000m. Die leerder het die verkeerde rigting van die bewerking gebruik.' },
        { difficulty: 'Medium', question: 'ʼn Leerder skakel 6,5cm om na millimeter en skryf net 6,5mm, en sê "die getal bly dieselfde, net die eenheid verander." Is dit korrek? Verduidelik die fout en gee die korrekte antwoord.', checkMode: 'self', answer: 'Nee, dit is nie korrek nie. Om cm na mm om te skakel, moet jy met 10 vermenigvuldig, want mm is kleiner eenhede — die getal moet verander. Die korrekte berekening is 6,5 × 10 = 65mm. Die leerder het vergeet om die omskakelingsberekening werklik uit te voer.' },
        { difficulty: 'Medium', question: 'ʼn Liniaal wys ʼn sleutel wat presies op die 5cm-merk eindig. Hoe lank is die sleutel?', checkMode: 'auto', correctAnswer: '5cm', correctAnswers: ['5cm', '5 cm'], explanation: 'Om die liniaalmerk te lees waar die sleutel eindig, gee direk 5cm.' },
        { difficulty: 'Medium', question: 'ʼn Blaar word op ʼn liniaal gemeet en die punt val presies halfpad tussen die 9cm- en 10cm-merke. Wat is die lengte van die blaar?', checkMode: 'auto', correctAnswer: '9,5cm', correctAnswers: ['9,5cm', '9,5 cm', '9,5', '9.5cm', '9.5 cm', '9.5'], explanation: 'Halfpad tussen 9cm en 10cm is 9,5cm, dus is die blaar ongeveer 9,5cm lank.' },
        { difficulty: 'Medium', question: 'By ʼn verspringkompetisie spring Palesa 3,85m en Karabo spring 372cm. Wie het verder gespring, en met hoeveel sentimeter?', checkMode: 'auto', correctAnswer: 'Palesa13cm', correctAnswers: ['Palesa13cm', 'Palesa, 13cm', 'Palesa 13cm'], explanation: 'Skakel 3,85m om na cm: 3,85 × 100 = 385cm. Vergelyk: Palesa het 385cm gespring, Karabo het 372cm gespring. Palesa het verder gespring, met 385 − 372 = 13cm.' },
        { difficulty: 'Medium', question: 'ʼn Selfdoen-rak benodig ʼn plank van minstens 1,4m. ʼn Hardeware-winkel het afvalstukke van 128cm en 145cm. Watter stuk is lank genoeg om te gebruik, en met hoeveel sentimeter oorskry dit die minimum?', checkMode: 'auto', correctAnswer: '145cm5cm', correctAnswers: ['145cm5cm', '145cm, 5cm', '145cm 5cm', 'die145cmstuk5cm'], explanation: 'Skakel 1,4m om na cm: 1,4 × 100 = 140cm minimum benodig. Die 128cm-stuk is te kort. Die 145cm-stuk is lank genoeg, en oorskry die minimum met 145 − 140 = 5cm.' },
        { difficulty: 'Hard', question: 'ʼn Rol lint is 5m lank. Zanele gebruik 1m 85cm om ʼn geskenk toe te draai. Hoeveel lint is oor? Gee jou antwoord in meter en sentimeter.', checkMode: 'auto', correctAnswer: '3m15cm', correctAnswers: ['3m15cm', '3m 15cm', '3 m 15 cm', '315cm', '315 cm'], explanation: 'Skakel 5m om na cm: 5 × 100 = 500cm. Skakel 1m 85cm om na cm: 100 + 85 = 185cm. Trek af: 500 − 185 = 315cm. Skakel terug om: 315cm = 3m 15cm.' },
        { difficulty: 'Hard', question: 'ʼn Gesin stap 3,6km langs ʼn rivierroete en dan nog ʼn verdere 750m op na ʼn uitkykpunt. Wat is die totale afstand gestap, in kilometer?', checkMode: 'auto', correctAnswer: '4,35km', correctAnswers: ['4,35km', '4,35 km', '4,35', '4.35km', '4.35 km', '4.35', '4350m', '4 350m', '4350 m'], explanation: 'Skakel 3,6km om na m: 3,6 × 1 000 = 3 600m. Tel op: 3 600 + 750 = 4 350m. Skakel terug om na km: 4 350 ÷ 1 000 = 4,35km.' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige sportbaan is 11m lank en 6m breed. Die skool wil ʼn grenslyn om die hele baan verf. Watter lengte verflyn word benodig?', checkMode: 'auto', correctAnswer: '34m', correctAnswers: ['34m', '34 m', '34'], explanation: 'Omtrek van ʼn reghoek = 11 + 11 + 6 + 6 = 34m. ʼn 34m-grenslyn word benodig.' },
        { difficulty: 'Hard', question: 'ʼn Vierkantige patio het sye van 9m. Bongani het 34m plaveisel-randstrook. Het hy genoeg om om die hele patio te gaan? Wys jou werk en verduidelik.', checkMode: 'self', answer: 'Omtrek van die vierkant = 9 + 9 + 9 + 9 = 36m (of 4 × 9 = 36m). Bongani het net 34m randstrook, wat minder is as die 36m wat hy nodig het. Hy het nie genoeg nie — hy het nog 2m nodig.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue eenhede kies, omskakel en lengte op werklike situasies toepas.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn goeie begrip — gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor omskakeling en omtrek weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die hoogte van ʼn dubbelverdieping-huis te meet: cm of m?', checkMode: 'auto', correctAnswer: 'm', correctAnswers: ['m', 'meter'], explanation: 'ʼn Dubbelverdieping-huis is redelik hoog, dus gee meter ʼn sinvolle getal, gewoonlik omtrent 6m tot 8m. Sentimeter sou ʼn onnodig groot getal gee.' },
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die breedte van ʼn stuk spaghetti te meet: mm of m?', checkMode: 'auto', correctAnswer: 'mm', correctAnswers: ['mm', 'millimeter'], explanation: 'ʼn Stuk spaghetti is uiters dun, dus gee millimeter ʼn betekenisvolle getal. Meter sou ʼn onmoontlik klein desimale getal gee.' },
        { difficulty: 'Easy', question: 'Om die afstand van ʼn veldloop-wedloop te meet, wat is meer sinvol: om kilometer te gebruik, of om sentimeter te gebruik?', checkMode: 'auto', correctAnswer: 'kilometer', correctAnswers: ['kilometer', 'km'], explanation: 'ʼn Veldloop-wedloop dek dikwels verskeie kilometer. Kilometer gee ʼn hanteerbare getal, terwyl sentimeter ʼn enorme, onleesbare getal sou gee.' },
        { difficulty: 'Easy', question: 'Thandiwe sê die lengte van haar vingernael moet in meter gemeet word "want meter is die standaardeenheid wat almal gebruik." Verduidelik waarom dit nie sinvol is nie.', checkMode: 'self', answer: 'Meter is ʼn standaardeenheid, maar dit maak dit nie die regte keuse vir elke voorwerp nie — ʼn vingernael is maar ʼn paar millimeter of sentimeter lank, dus sou dit in meter meet ʼn klein, lomp desimaal soos 0,01m gee. Millimeter of sentimeter is die sinvolle keuse, want dit gee ʼn duidelike, maklik leesbare getal vir iets so klein.' },
        { difficulty: 'Easy-Medium', question: 'Skakel 7cm om na millimeter.', checkMode: 'auto', correctAnswer: '70mm', correctAnswers: ['70mm', '70 mm', '70'], explanation: 'Om cm na mm om te skakel, vermenigvuldig met 10. 7 × 10 = 70mm.' },
        { difficulty: 'Easy-Medium', question: 'Skakel 650cm om na meter.', checkMode: 'auto', correctAnswer: '6,5m', correctAnswers: ['6,5m', '6,5 m', '6,5', '6.5m', '6.5 m', '6.5'], explanation: 'Om cm na m om te skakel, deel deur 100. 650 ÷ 100 = 6,5m.' },
        { difficulty: 'Medium', question: 'Skakel 2,9km om na meter.', checkMode: 'auto', correctAnswer: '2900m', correctAnswers: ['2900m', '2900 m', '2900', '2 900m', '2 900 m'], explanation: 'Om km na m om te skakel, vermenigvuldig met 1 000. 2,9 × 1 000 = 2 900m.' },
        { difficulty: 'Medium', question: 'Skakel 480cm om na meter.', checkMode: 'auto', correctAnswer: '4,8m', correctAnswers: ['4,8m', '4,8 m', '4,8', '4.8m', '4.8 m', '4.8'], explanation: 'Om cm na m om te skakel, deel deur 100. 480 ÷ 100 = 4,8m.' },
        { difficulty: 'Medium', question: 'Skakel 3 100mm om na meter. (Wenk: skakel eers om na cm, dan na m.)', checkMode: 'auto', correctAnswer: '3,1m', correctAnswers: ['3,1m', '3,1 m', '3,1', '3.1m', '3.1 m', '3.1'], explanation: 'Skakel eers mm na cm om: 3 100 ÷ 10 = 310cm. Skakel dan cm na m om: 310 ÷ 100 = 3,1m.' },
        { difficulty: 'Medium', question: 'ʼn Leerder skakel 7m om na sentimeter en skryf 70cm. Is dit korrek? Verduidelik die fout en gee die korrekte antwoord.', checkMode: 'self', answer: 'Nee, dit is nie korrek nie. Om meter na sentimeter om te skakel, vermenigvuldig jy met 100, nie 10 nie. Die korrekte berekening is 7 × 100 = 700cm. Die leerder het die verkeerde omskakelingsfeit gebruik.' },
        { difficulty: 'Medium', question: 'ʼn Leerder skakel 9km om na meter deur te skryf 9 × 10 = 90m. Is dit korrek? Verduidelik die fout en gee die korrekte antwoord.', checkMode: 'self', answer: 'Nee, dit is nie korrek nie. Om km na m om te skakel, vermenigvuldig jy met 1 000, nie 10 nie. Die korrekte berekening is 9 × 1 000 = 9 000m. Die leerder het die verkeerde omskakelingsfeit gebruik.' },
        { difficulty: 'Medium', question: 'ʼn Leerder skakel 4,8cm om na millimeter en skryf 4,80mm, en sê "jy voeg net ʼn nul by en hou die desimale punt waar dit is." Is dit korrek? Verduidelik die fout en gee die korrekte antwoord.', checkMode: 'self', answer: 'Nee, dit is nie korrek nie. Om cm na mm om te skakel, beteken om met 10 te vermenigvuldig, wat die desimale punt een plek na regs skuif, nie net ʼn nul aan die einde byvoeg nie. Die korrekte berekening is 4,8 × 10 = 48mm. Die leerder het die desimale punt verkeerd geplaas.' },
        { difficulty: 'Medium', question: 'ʼn Liniaal wys ʼn skuifspeld wat presies op die 3cm-merk eindig. Hoe lank is die skuifspeld?', checkMode: 'auto', correctAnswer: '3cm', correctAnswers: ['3cm', '3 cm'], explanation: 'Om die liniaalmerk te lees waar die skuifspeld eindig, gee direk 3cm.' },
        { difficulty: 'Medium', question: 'ʼn Uitveër word op ʼn liniaal gemeet en die rand val presies halfpad tussen die 4cm- en 5cm-merke. Wat is die lengte van die uitveër?', checkMode: 'auto', correctAnswer: '4,5cm', correctAnswers: ['4,5cm', '4,5 cm', '4,5', '4.5cm', '4.5 cm', '4.5'], explanation: 'Halfpad tussen 4cm en 5cm is 4,5cm, dus is die uitveër ongeveer 4,5cm lank.' },
        { difficulty: 'Medium', question: 'By ʼn spiesgooi-kompetisie beweeg Lindiwe se gooi 38,6m en Mandla se gooi beweeg 3 750cm. Wie se gooi was verder, en met hoeveel sentimeter?', checkMode: 'auto', correctAnswer: 'Lindiwe110cm', correctAnswers: ['Lindiwe110cm', 'Lindiwe, 110cm', 'Lindiwe 110cm'], explanation: 'Skakel 38,6m om na cm: 38,6 × 100 = 3 860cm. Vergelyk: Lindiwe se gooi was 3 860cm, Mandla s\'n was 3 750cm. Lindiwe se gooi was verder, met 3 860 − 3 750 = 110cm.' },
        { difficulty: 'Medium', question: 'ʼn Prentraam benodig draad van minstens 95cm lank om veilig op te hang. ʼn Handwerkboks het draadstukke van 0,8m en 1,02m. Watter stuk is lank genoeg, en met hoeveel sentimeter oorskry dit die minimum?', checkMode: 'auto', correctAnswer: '1,02m7cm', correctAnswers: ['1,02m7cm', '1,02m, 7cm', '1,02m 7cm', 'die1,02mstuk7cm', '1.02m7cm'], explanation: 'Die 0,8m-stuk = 80cm, wat te kort is. Skakel 1,02m om na cm: 1,02 × 100 = 102cm, wat lank genoeg is. Dit oorskry die minimum van 95cm met 102 − 95 = 7cm.' },
        { difficulty: 'Hard', question: 'ʼn Rol stof is 6m lank. ʼn Kleremaker sny 2m 45cm af om ʼn gordyn te maak. Hoeveel stof is oor? Gee jou antwoord in meter en sentimeter.', checkMode: 'auto', correctAnswer: '3m55cm', correctAnswers: ['3m55cm', '3m 55cm', '3 m 55 cm', '355cm', '355 cm'], explanation: 'Skakel 6m om na cm: 6 × 100 = 600cm. Skakel 2m 45cm om na cm: 200 + 45 = 245cm. Trek af: 600 − 245 = 355cm. Skakel terug om: 355cm = 3m 55cm.' },
        { difficulty: 'Hard', question: 'Op ʼn padreis ry ʼn gesin 12,5km op ʼn snelweg en dan nog ʼn verdere 3 200m op ʼn grondpad om by ʼn kampeerterrein te kom. Wat is die totale afstand afgelê, in kilometer?', checkMode: 'auto', correctAnswer: '15,7km', correctAnswers: ['15,7km', '15,7 km', '15,7', '15.7km', '15.7 km', '15.7', '15700m', '15 700m', '15700 m'], explanation: 'Skakel 12,5km om na m: 12,5 × 1 000 = 12 500m. Tel op: 12 500 + 3 200 = 15 700m. Skakel terug om na km: 15 700 ÷ 1 000 = 15,7km.' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige klaskamer is 14m lank en 8m breed. Die opsigter wil skerfplank om die hele basis van die mure pas. Watter lengte skerfplank word benodig?', checkMode: 'auto', correctAnswer: '44m', correctAnswers: ['44m', '44 m', '44'], explanation: 'Omtrek van ʼn reghoek = 14 + 14 + 8 + 8 = 44m. 44m skerfplank word benodig.' },
        { difficulty: 'Hard', question: 'ʼn Vierkantige binnehof het sye van 10m, en ʼn reghoekige binnehof meet 13m by 6m. Altwee benodig randstene om hulle volle grens. Watter binnehof benodig meer randstene, en met hoeveel meter?', checkMode: 'self', answer: 'Vierkantige binnehof se omtrek = 10 + 10 + 10 + 10 = 40m. Reghoekige binnehof se omtrek = 13 + 13 + 6 + 6 = 38m. Die vierkantige binnehof benodig meer randstene, met 40 − 38 = 2m.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan eenheidskeuse, omskakeling en lengteberekeninge op werklike probleme toepas.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van hierdie vaardighede — gaan enige gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor woordprobleme en omtrek weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
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
