import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (mensuration roles) ──────────────────────────────────────
// dimension / scale factor k → blue   (#2563eb)
// formula / rule applied     → orange (#ea580c)
// final answer                → green  (#16a34a)
// component shape 2           → red    (#dc2626)
// component shape 3           → purple (#7c3aed)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Mensurasie',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — THE EFFECT OF A CONSTANT FACTOR k ON VOLUME AND SURFACE AREA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'effect-of-constant-factor',
      title: 'Die Effek van ʼn Konstante Faktor k op Volume en Oppervlakte',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">Dit bou direk voort op die volume- en oppervlakteformules wat jy in Graad 10 bemeester het. Nou vra ons ʼn nuwe vraag: as elke ${bl('lineêre afmeting')} van ʼn voorwerp (radius, hoogte, syde) met ʼn ${bl('konstante faktor k')} vermenigvuldig word, wat gebeur met sy oppervlakte en volume? Die sleutelinsig is dat oppervlakte uit <strong>twee</strong> lineêre afmetings bestaan wat met mekaar vermenigvuldig word, terwyl volume uit <strong>drie</strong> bestaan.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('skaalfaktor k')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('reël toegepas')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── The three rules ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die drie skaleringsreëls</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Lineêre Afmetings Skaleer met k</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">As radius, hoogte, of sylengte met ${bl('k')} vermenigvuldig word, word daardie enkele afmeting eenvoudig ${bl('k')} keer so lank.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Oppervlakte Skaleer met k²</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Oppervlakte word opgebou uit produkte van twee lengtes (bv. πr² of 2πrh). Aangesien albei met ${or('k')} skaleer, skaleer die totaal met ${or('k × k = k²')}.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">3</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Volume Skaleer met k³</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Volume word opgebou uit produkte van drie lengtes (bv. πr²h of ⅓πr²h). Aangesien al drie met ${gr('k')} skaleer, skaleer die totaal met ${gr('k × k × k = k³')}.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Dit werk sonder om die werklike afmetings te ken</p>` +
        `<p style="margin:0;color:#1e3a8a;">Jy hoef nie die oorspronklike radius of hoogte te ken om die vraag "hoe verander volume as elke afmeting verdubbel word?" te beantwoord nie — die antwoord is altyd ${gr('k³ = 2³ = 8 keer soveel')}, ongeag die voorwerp se werklike grootte. Dit geld vir ${bl('alle')} voorwerpe: prismas, piramides, silinders, keëls en sfere.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Die radius van ʼn sfeer word verdubbel. Met watter faktor neem die volume toe?',
          answer: `Die volume neem toe met ʼn faktor van ${gr('8')}`,
          steps: [
            `"Verdubbel" beteken elke lineêre afmeting word met ${bl('k = 2')} vermenigvuldig.`,
            `Volume skaleer met ${gr('k³')}.`,
            `${gr('k³ = 2³ = 2 × 2 × 2 = 8')}.`,
            `<strong>Antwoord:</strong> Die volume word ${gr('8 keer')} so groot. ✓`,
          ],
        },
        {
          question: 'ʼn Silinder het radius 3 cm en hoogte 5 cm. As albei afmetings verdriedubbel word, bepaal die nuwe volume, gegewe dat die oorspronklike volume 141,3 cm³ is.',
          answer: `Nuwe volume = ${gr('3 815,1 cm³')}`,
          steps: [
            `"Verdriedubbel" beteken ${bl('k = 3')}.`,
            `Volume skaleer met ${gr('k³ = 3³ = 27')}.`,
            `Nuwe volume = oorspronklike volume × 27 = ${or('141,3 × 27')}.`,
            `<strong>Antwoord:</strong> Nuwe volume = ${gr('3 815,1 cm³')}. ✓`,
          ],
        },
        {
          question: 'ʼn Kubus het oppervlakte 96 cm². As elke sylengte met 1,5 vermenigvuldig word, bepaal die nuwe oppervlakte.',
          answer: `Nuwe oppervlakte = ${gr('216 cm²')}`,
          steps: [
            `Hier is ${bl('k = 1,5')}.`,
            `Oppervlakte skaleer met ${or('k² = 1,5² = 2,25')}.`,
            `Nuwe oppervlakte = oorspronklike × 2,25 = ${or('96 × 2,25')}.`,
            `<strong>Antwoord:</strong> Nuwe oppervlakte = ${gr('216 cm²')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Elke afmeting van ʼn keël word met 4 vermenigvuldig. Met watter faktor neem die volume toe?',
          answer: '64',
          checkMode: 'auto',
          correctAnswer: '64',
          explanation: 'Volume skaleer met k³ = 4³ = 64 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Beantwoord elk van die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Elke afmeting van ʼn piramide word met 5 vermenigvuldig. Met watter faktor neem die oppervlakte toe?',
              correctAnswer: '25',
              explanation: 'Oppervlakte skaleer met k² = 5² = 25 ✓',
            },
            {
              label: 'b) ʼn Sfeer het volume 288 cm³. As die radius verdubbel word, bepaal die nuwe volume.',
              correctAnswer: '2304',
              explanation: 'Volume skaleer met k³ = 2³ = 8. Nuwe volume = 288 × 8 = 2304 cm³ ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Prisma het volume 60 cm³ en oppervlakte 94 cm². Elke afmeting word met ʼn faktor van k = 1,5 geskaleer.\n\na) Bepaal die nuwe volume (tot 2 desimale plekke).\nb) Bepaal die nuwe oppervlakte (tot 2 desimale plekke).',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Nuwe volume (cm³)',
              correctAnswer: '202.5',
              correctAnswers: ['202.5', '202,5', '202.50', '202,50'],
              explanation: 'Volume skaleer met k³ = 1,5³ = 3,375. Nuwe volume = 60 × 3,375 = 202,50 cm³ ✓',
            },
            {
              label: 'b) Nuwe oppervlakte (cm²)',
              correctAnswer: '211.5',
              correctAnswers: ['211.5', '211,5', '211.50', '211,50'],
              explanation: 'Oppervlakte skaleer met k² = 1,5² = 2,25. Nuwe oppervlakte = 94 × 2,25 = 211,50 cm² ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat demonstreer waarom oppervlakte skaleer met k in die kwadraat en volume skaleer met k in die derde mag wanneer elke afmeting van ʼn voorwerp met ʼn konstante faktor k vermenigvuldig word, met ʼn verdubbelde kubus as visuele voorbeeld" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat ʼn klein kubus langs ʼn groter kubus met sye geskaleer deur faktor k wys, met die oppervlakte gemerk as skalerend met k in die kwadraat en die volume gemerk as skalerend met k in die derde mag" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPLEX COMBINED SOLIDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'complex-combined-solids',
      title: 'Volume en Oppervlakte van Meer Komplekse Saamgestelde Voorwerpe',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 10 het jy twee basiese voorwerpe gekombineer (soos ʼn keël bo-op ʼn silinder). Graad 11-probleme brei dit verder uit: voorwerpe wat uit ${bl('drie of meer komponente')} bestaan, en voorwerpe waarvan ʼn stuk <strong>verwyder</strong> is (soos ʼn silindriese gat wat deur ʼn prisma geboor is, of ʼn keëlvormige holte wat uit ʼn voorwerp uitgeskep is). Die strategie bly dieselfde — bereken elke komponent apart, en tel dan by of trek af — maar jy moet die diagram noukeurig lees om te sien of ʼn stuk bygevoeg of verwyder is.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('komponent 1')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('komponent 2')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('verwyderde holte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gekombineerde resultaat')}</span>` +
        `</div>` +

        // ── Strategy ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategie vir voorwerpe met ʼn verwyderde stuk</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Volume:</strong> Bereken die volume van die buitenste voorwerp, en <strong>trek</strong> dan die volume van die ${pu('verwyderde holte')} af (bv. ʼn geboorde silinder of uitgeskepte keël).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Oppervlakte:</strong> Behou die buitenste oppervlak van die oorspronklike voorwerp (minus die opening waar die holte blootgestel word), en <strong>tel</strong> dan die nuut-blootgestelde binneoppervlak van die holte self by.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Bygevoeg of verwyder — lees noukeurig</p>` +
        `<p style="margin:0;color:#9a3412;">ʼn Vorm wat <strong>bo-op of langsaan</strong> ʼn ander voorwerp sit, is <strong>bygevoeg</strong> (volumes word bymekaar getel). ʼn Vorm wat <strong>geboor, gesny, of uitgehol</strong> is uit ʼn ander voorwerp, is <strong>verwyder</strong> (volumes word afgetrek). Eksamendiagramme wys gewoonlik ʼn verwyderde stuk met stippellyne of eksplisiete bewoording soos "ʼn gat word deurgeboor" of "ʼn holte word verwyder".</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Soliede silinder (radius 5 cm, hoogte 12 cm) het ʼn keëlvormige holte (radius 5 cm, hoogte 12 cm) uit sy boonste deel verwyder, wat ʼn hol keëlvormige gat laat. Bepaal die oorblywende volume. Gebruik π ≈ 3,14.',
          answer: `Oorblywende volume ${gr('≈ 628 cm³')}`,
          steps: [
            `${bl('Silinder')} se volume: ${bl('V = πr²h = 3,14 × 25 × 12 = 942 cm³')}`,
            `${pu('Keëlholte')} se volume (verwyder): ${pu('V = ⅓πr²h = ⅓ × 3,14 × 25 × 12 = 314 cm³')}`,
            `Trek die verwyderde holte af: ${gr('Oorblywend = 942 − 314 = 628 cm³')}`,
            `<strong>Antwoord:</strong> Oorblywende volume = ${gr('628 cm³')}. ✓`,
          ],
        },
        {
          question: 'ʼn Voorwerp bestaan uit ʼn kubus (sy 6 cm) met ʼn halfsfeer (radius 3 cm) bo-op, en ʼn silindriese gat (radius 1 cm, diepte 6 cm) wat reguit deur die kubus geboor is. Bepaal die totale volume. Gebruik π ≈ 3,14.',
          answer: `Totale volume ${gr('≈ 253,68 cm³')}`,
          steps: [
            `${bl('Kubus')} se volume: ${bl('V = 6³ = 216 cm³')}`,
            `${re('Halfsfeer')} se volume (bygevoeg): ${re('V = ½ × 4/3πr³ = ½ × 4/3 × 3,14 × 27 = 56,52 cm³')}`,
            `${pu('Silindriese gat')} se volume (verwyder): ${pu('V = πr²h = 3,14 × 1 × 6 = 18,84 cm³')}`,
            `Kombineer: ${gr('Totaal = 216 + 56,52 − 18,84 = 253,68 cm³')}`,
            `<strong>Antwoord:</strong> Totale volume ≈ ${gr('253,68 cm³')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Soliede kubus (sy 8 cm) het ʼn silindriese gat (radius 2 cm, diepte 8 cm) reguit daardeur geboor. Bepaal die oorblywende volume. Gebruik π ≈ 3,14.',
          answer: '411,52 cm³',
          checkMode: 'auto',
          correctAnswer: '411.52',
          correctAnswers: ['411.52', '411,52'],
          explanation: 'Kubus: 8³ = 512 cm³\nSilinder (verwyder): 3,14 × 4 × 8 = 100,48 cm³\nOorblywend: 512 − 100,48 = 411,52 cm³ ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 4 cm, hoogte 10 cm) met ʼn keëlvormige holte (dieselfde radius, hoogte 6 cm) wat uit die boonste deel verwyder is. Gebruik π ≈ 3,14.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Volume van die silinder (cm³)',
              correctAnswer: '502.4',
              correctAnswers: ['502.4', '502,4'],
              explanation: 'V = πr²h = 3,14 × 16 × 10 = 502,4 cm³ ✓',
            },
            {
              label: 'b) Oorblywende volume nadat die keëlvormige holte verwyder is (cm³)',
              correctAnswer: '401.92',
              correctAnswers: ['401.92', '401,92'],
              explanation: 'Keëlholte: ⅓ × 3,14 × 16 × 6 = 100,48 cm³.\nOorblywend: 502,4 − 100,48 = 401,92 cm³ ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Soliede sfeer met radius 6 cm het ʼn silindriese gat met radius 2 cm reguit deur die middelpunt geboor, heeltemal deur (die gat gaan deur die volle deursnee van die sfeer, 12 cm diep). Gebruik π ≈ 3,14.\n\na) Bepaal die volume van die volle sfeer.\nb) Bepaal die volume van die uitgeboorde silinder.\nc) Bepaal die oorblywende volume van die sfeer.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Volume van die volle sfeer (cm³)',
              correctAnswer: '904.32',
              correctAnswers: ['904.32', '904,32'],
              explanation: 'V = 4/3πr³ = 4/3 × 3,14 × 216 = 904,32 cm³ ✓',
            },
            {
              label: 'b) Volume van die uitgeboorde silinder (cm³)',
              correctAnswer: '150.72',
              correctAnswers: ['150.72', '150,72'],
              explanation: 'V = πr²h = 3,14 × 4 × 12 = 150,72 cm³ ✓',
            },
            {
              label: 'c) Oorblywende volume van die sfeer (cm³)',
              correctAnswer: '753.6',
              correctAnswers: ['753.6', '753,6'],
              explanation: 'Oorblywend = 904,32 − 150,72 = 753,6 cm³ ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat ʼn silinder met ʼn keëlvormige holte uit die boonste deel geboor wys, wat demonstreer hoe om die verwyderde volume van die buitenste voorwerp af te trek, gevolg deur ʼn voorbeeld met ʼn bygevoegde halfsfeer en ʼn verwyderde silindriese gat in dieselfde voorwerp" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram van ʼn soliede silinder met ʼn keëlvormige gat uitgelig in pers wat in die boonste oppervlak geboor is, en ʼn tweede diagram wat ʼn kubus wys met ʼn halfsfeer bygevoeg bo-op en ʼn dun silindriese gat verwyder deur die middel" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING REAL-WORLD MENSURATION PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'real-world-problems',
      title: 'Werklike-Lewe Mensurasieprobleme Oplos',
      icon: '🌍',
      explanation:
        `<p style="margin-bottom:16px;">Eksamen- en werklike-lewe probleme vra selde net vir ʼn kaal volume of oppervlakte — hulle verpak die berekening in ʼn konteks: die ${or('koste')} van materiaal, hoeveel ʼn houer kan ${or('hou')}, of hoeveel verf ${or('nodig')} is. Jou eerste taak is om die woorde in die korrekte formule en die korrekte hoeveelheid (volume of oppervlakte) te vertaal, en dan soos gewoonlik op te los.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gegewe afmetings')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('nodige hoeveelheid / kostetempo')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── Which quantity? ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Watter hoeveelheid het die vraag nodig?</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Gebruik Volume Wanneer...</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die vraag noem <strong>kapasiteit</strong>, hoeveel ʼn houer kan <strong>hou</strong>, of hoeveel <strong>vloeistof/sand/beton</strong> ʼn ruimte vul.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Gebruik Oppervlakte Wanneer...</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die vraag noem <strong>verf</strong>, <strong>toedraai</strong>, <strong>bedek</strong>, of die hoeveelheid <strong>materiaal</strong> wat benodig word om die buitekant van ʼn voorwerp te bou.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Let altyd op jou eenhede</p>` +
        `<p style="margin:0;color:#1e3a8a;">As ʼn koste per m² gegee word maar jou afmetings in cm is, skakel eers om (${bl('1 m = 100 cm')}, dus ${bl('1 m² = 10 000 cm²')} en ${bl('1 m³ = 1 000 000 cm³')}). Multi-stap werklike-lewe probleme verloor dikwels punte suiwer weens ʼn eenheidsversuim, nie ʼn formulefout nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Silindriese watertenk het radius 1,4 m en hoogte 2 m. Bepaal die kapasiteit daarvan in liter (1 m³ = 1 000 liter). Gebruik π ≈ 3,14.',
          answer: `Kapasiteit ${gr('≈ 12 308,8 liter')}`,
          steps: [
            `"Kapasiteit" beteken ons benodig ${or('volume')}.`,
            `Bereken die volume: ${bl('V = πr²h = 3,14 × 1,4² × 2 = 3,14 × 1,96 × 2 = 12,3088 m³')}`,
            `Skakel om na liter: ${or('12,3088 × 1 000 = 12 308,8 liter')}`,
            `<strong>Antwoord:</strong> Kapasiteit ≈ ${gr('12 308,8 liter')}. ✓`,
          ],
        },
        {
          question: 'ʼn Geslote silindriese blik (radius 5 cm, hoogte 12 cm) moet aan die buitekant geverf word. Verf kos R0,08 per cm². Bepaal die totale koste. Gebruik π ≈ 3,14.',
          answer: `Totale koste ${gr('≈ R42,70')}`,
          steps: [
            `"Geverf aan die buitekant" beteken ons benodig ${or('totale oppervlakte')}.`,
            `Bereken die oppervlakte: ${bl('OA = 2πr² + 2πrh = 2 × 3,14 × 25 + 2 × 3,14 × 5 × 12 = 157 + 376,8 = 533,8 cm²')}`,
            `Vermenigvuldig met die kostetempo: ${or('533,8 × R0,08 = R42,704')}`,
            `<strong>Antwoord:</strong> Totale koste ≈ ${gr('R42,70')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Reghoekige prisma-vormige boks het lengte 40 cm, wydte 25 cm en hoogte 20 cm. Bepaal die kapasiteit daarvan in liter (1 000 cm³ = 1 liter).',
          answer: '20 liter',
          checkMode: 'auto',
          correctAnswer: '20',
          correctAnswers: ['20', '20 liter', '20liter'],
          explanation: 'Volume = 40 × 25 × 20 = 20 000 cm³.\n20 000 ÷ 1 000 = 20 liter ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Sferiese watertenk het radius 2,5 m. Gebruik π ≈ 3,14.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bepaal die volume daarvan (m³, tot 2 desimale plekke).',
              correctAnswer: '65.42',
              correctAnswers: ['65.42', '65,42'],
              explanation: 'V = 4/3πr³ = 4/3 × 3,14 × 15,625 ≈ 65,42 m³ ✓',
            },
            {
              label: 'b) Bepaal die kapasiteit daarvan in liter (1 m³ = 1 000 liter).',
              correctAnswer: '65420',
              correctAnswers: ['65420', '65 420'],
              explanation: '65,42 × 1 000 = 65 420 liter ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Silindriese drom (radius 30 cm, hoogte 90 cm, oop bo-op) moet met roeswerende verf bedek word op die binneste geboë oppervlak en die basis alleenlik. Die verf kos R2,50 per 1 000 cm². Gebruik π ≈ 3,14.\n\na) Bepaal die geboë oppervlakte van die drom (cm²).\nb) Bepaal die basisoppervlakte (cm²).\nc) Bepaal die totale koste van die verf, tot die naaste rand.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Geboë oppervlakte (cm²)',
              correctAnswer: '16956',
              correctAnswers: ['16956', '16 956'],
              explanation: 'Geboë OA = 2πrh = 2 × 3,14 × 30 × 90 = 16 956 cm² ✓',
            },
            {
              label: 'b) Basisoppervlakte (cm²)',
              correctAnswer: '2826',
              correctAnswers: ['2826', '2 826'],
              explanation: 'Basisoppervlakte = πr² = 3,14 × 900 = 2 826 cm² ✓',
            },
            {
              label: 'c) Totale koste (naaste rand)',
              correctAnswer: '49',
              correctAnswers: ['49', 'R49'],
              explanation: 'Totale oppervlakte = 16 956 + 2 826 = 19 782 cm².\nKoste = (19 782 ÷ 1 000) × R2,50 = 19,782 × 2,50 = R49,46, wat afrond na R49 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat stap vir stap deur ʼn werklike-lewe woordprobleem werk, wat wys hoe om tussen volume en oppervlakte te kies gebaseer op die bewoording, en dan eenhede omskakel en ʼn kostetempo toepas om by ʼn finale randbedrag uit te kom" />',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het mensurasie bemeester.' },
      { minScore: 15, message: 'Goeie werk!' },
      { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
      { minScore: 0, message: 'Hou aan probeer, werk deur die gids weer deur.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het mensurasie bemeester.' },
    { minScore: 15, message: 'Goeie werk!' },
    { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk deur die gids weer deur.' },
  ],
}
