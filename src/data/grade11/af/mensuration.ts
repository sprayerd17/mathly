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
              correctAnswer: '202,5',
              correctAnswers: ['202.5', '202,5', '202.50', '202,50'],
              explanation: 'Volume skaleer met k³ = 1,5³ = 3,375. Nuwe volume = 60 × 3,375 = 202,50 cm³ ✓',
            },
            {
              label: 'b) Nuwe oppervlakte (cm²)',
              correctAnswer: '211,5',
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
          correctAnswer: '411,52',
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
              correctAnswer: '502,4',
              correctAnswers: ['502.4', '502,4'],
              explanation: 'V = πr²h = 3,14 × 16 × 10 = 502,4 cm³ ✓',
            },
            {
              label: 'b) Oorblywende volume nadat die keëlvormige holte verwyder is (cm³)',
              correctAnswer: '401,92',
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
              correctAnswer: '904,32',
              correctAnswers: ['904.32', '904,32'],
              explanation: 'V = 4/3πr³ = 4/3 × 3,14 × 216 = 904,32 cm³ ✓',
            },
            {
              label: 'b) Volume van die uitgeboorde silinder (cm³)',
              correctAnswer: '150,72',
              correctAnswers: ['150.72', '150,72'],
              explanation: 'V = πr²h = 3,14 × 4 × 12 = 150,72 cm³ ✓',
            },
            {
              label: 'c) Oorblywende volume van die sfeer (cm³)',
              correctAnswer: '753,6',
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
              correctAnswer: '65,42',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-2):   Basiese k² oppervlakte-skalering
    // Blok 2 (3-5):   Basiese k³ volume-skalering
    // Blok 3 (6-8):   Saamgestelde voorwerpe — bygevoegde komponente
    // Blok 4 (9-11):  Saamgestelde voorwerpe — verwyderde holte
    // Blok 5 (12-15): Omgekeerde skalering (bepaal k of oorspronklike waarde)
    // Blok 6 (16-19): Komplekse 3+ komponent / gemengde / werklike-lewe saamgestel
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Basiese k² oppervlakte-skalering (Easy)
        { difficulty: 'Easy', question: 'Elke afmeting van ʼn driehoekige prisma word met ʼn konstante faktor k = 3 vermenigvuldig. Met watter faktor neem die oppervlakte toe?', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Oppervlakte skaleer met k² = 3² = 9 ✓' },
        { difficulty: 'Easy', question: 'ʼn Kubus het oppervlakte 54 cm². As elke sylengte met k = 2 vermenigvuldig word, bepaal die nuwe oppervlakte.', answer: '216 cm²', checkMode: 'auto', correctAnswer: '216', correctAnswers: ['216', '216cm²', '216 cm²'], explanation: 'Oppervlakte skaleer met k² = 2² = 4. Nuwe oppervlakte = 54 × 4 = 216 cm² ✓' },
        { difficulty: 'Easy', question: 'ʼn Silinder het oppervlakte 150 cm². Elke afmeting word met k = 1,5 vermenigvuldig. Bepaal die nuwe oppervlakte.', answer: '337,5 cm²', checkMode: 'auto', correctAnswer: '337,5', correctAnswers: ['337.5', '337,5', '337.50', '337,50', '337.5cm²', '337,5cm²'], explanation: 'Oppervlakte skaleer met k² = 1,5² = 2,25. Nuwe oppervlakte = 150 × 2,25 = 337,5 cm² ✓' },

        // Blok 2 — Basiese k³ volume-skalering (Easy)
        { difficulty: 'Easy', question: 'Elke afmeting van ʼn keël word met ʼn konstante faktor k = 5 vermenigvuldig. Met watter faktor neem die volume toe?', answer: '125', checkMode: 'auto', correctAnswer: '125', explanation: 'Volume skaleer met k³ = 5³ = 125 ✓' },
        { difficulty: 'Easy', question: 'ʼn Sfeer het volume 40 cm³. As die radius met k = 2 vermenigvuldig word, bepaal die nuwe volume.', answer: '320 cm³', checkMode: 'auto', correctAnswer: '320', correctAnswers: ['320', '320cm³', '320 cm³'], explanation: 'Volume skaleer met k³ = 2³ = 8. Nuwe volume = 40 × 8 = 320 cm³ ✓' },
        { difficulty: 'Easy', question: 'ʼn Piramide se volume word met ʼn faktor van 0,125 geskaleer. Watter waarde van k gee ʼn volumeskaalfaktor van 0,125?', answer: '0,5', checkMode: 'auto', correctAnswer: '0,5', correctAnswers: ['0.5', '0,5', '1/2', '½'], explanation: 'k³ = 0,5³ = 0,125, dus k = 0,5 ✓' },

        // Blok 3 — Saamgestelde voorwerpe, bygevoegde komponente (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 3 cm, hoogte 8 cm) met ʼn keël (dieselfde radius, hoogte 4 cm) bo-op. Bepaal die totale volume. Gebruik π ≈ 3,14.', answer: '263,76 cm³', checkMode: 'auto', correctAnswer: '263,76', correctAnswers: ['263.76', '263,76', '263.76cm³', '263,76cm³'], explanation: 'Silinder: V = πr²h = 3,14 × 9 × 8 = 226,08 cm³.\nKeël: V = ⅓πr²h = ⅓ × 3,14 × 9 × 4 = 37,68 cm³.\nTotaal = 226,08 + 37,68 = 263,76 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 8 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 4 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Voorwerp bestaan uit ʼn reghoekige prisma (lengte 10 cm, wydte 6 cm, hoogte 4 cm) met ʼn vierkantige piramide (dieselfde basis 10 cm by 6 cm, hoogte 9 cm) bo-op. Bepaal die totale volume.', answer: '420 cm³', checkMode: 'auto', correctAnswer: '420', correctAnswers: ['420', '420cm³', '420 cm³'], explanation: 'Prisma: V = 10 × 6 × 4 = 240 cm³.\nPiramide: V = ⅓ × basisarea × h = ⅓ × 60 × 9 = 180 cm³.\nTotaal = 240 + 180 = 420 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="90" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="115" x2="75" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="115" x2="185" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="200" x2="185" y2="175" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="115" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="192" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="26" y="157.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 157.5)">4 cm</text><text x="173.5" y="98.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text><polygon points="40,115 150,115 185,90 75,90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="115" x2="95" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="115" x2="95" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="185" y1="90" x2="95" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="90" x2="95" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><text x="105" y="70" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">h = 9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Geslote voorwerp bestaan uit ʼn silinder (radius 5 cm, hoogte 12 cm) met ʼn halfsfeer (radius 5 cm) vasgemaak bo-op, wat die boonste sirkelvormige oppervlak vervang. Bepaal die totale oppervlakte van die voorwerp (geboë silinderoppervlak + silinderbasis + geboë halfsfeeroppervlak alleenlik). Gebruik π ≈ 3,14.', answer: '612,3 cm²', checkMode: 'auto', correctAnswer: '612,3', correctAnswers: ['612.3', '612,3', '612.30', '612,30'], explanation: 'Silinder geboë oppervlak: 2πrh = 2 × 3,14 × 5 × 12 = 376,8 cm².\nSilinderbasis: πr² = 3,14 × 25 = 78,5 cm².\nHalfsfeer geboë oppervlak: 2πr² = 2 × 3,14 × 25 = 157 cm².\nTotaal = 376,8 + 78,5 + 157 = 612,3 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 165,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 12 cm</text></svg>' },

        // Blok 4 — Saamgestelde voorwerpe, verwyderde holte (Medium)
        { difficulty: 'Medium', question: 'ʼn Soliede kubus (sy 10 cm) het ʼn silindriese gat (radius 2 cm, diepte 10 cm) reguit daardeur geboor. Bepaal die oorblywende volume. Gebruik π ≈ 3,14.', answer: '874,4 cm³', checkMode: 'auto', correctAnswer: '874,4', correctAnswers: ['874.4', '874,4', '874.40', '874,40'], explanation: 'Kubus: V = 10³ = 1 000 cm³.\nGeboorde silinder (verwyder): V = πr²h = 3,14 × 4 × 10 = 125,6 cm³.\nOorblywend = 1 000 − 125,6 = 874,4 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="95" cy="72.5" rx="20" ry="7" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="75" y1="72.5" x2="75" y2="122.5" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="115" y1="72.5" x2="115" y2="122.5" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 75,122.5 A 20,7 0 0 0 115,122.5" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">side = 10 cm</text><text x="120" y="66" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">r = 2 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Soliede silinder (radius 6 cm, hoogte 15 cm) het ʼn keëlvormige holte (dieselfde radius, hoogte 9 cm) uit die boonste deel verwyder. Bepaal die oorblywende volume. Gebruik π ≈ 3,14.', answer: '1 356,48 cm³', checkMode: 'auto', correctAnswer: '1356,48', correctAnswers: ['1356.48', '1 356.48', '1356,48', '1 356,48'], explanation: 'Silinder: V = πr²h = 3,14 × 36 × 15 = 1 695,6 cm³.\nKeëlholte (verwyder): V = ⅓πr²h = ⅓ × 3,14 × 36 × 9 = 339,12 cm³.\nOorblywend = 1 695,6 − 339,12 = 1 356,48 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="45" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="45" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><ellipse cx="110" cy="45" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="49" x2="110" y2="85" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="140" y1="49" x2="110" y2="85" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 80,49 A 30,10 0 0 0 140,49" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="30" y1="45" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 105)">h = 15 cm</text><line x1="110" y1="45" x2="153" y2="45" stroke="#2563eb" stroke-width="2"/><text x="132" y="38" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text><text x="125" y="70" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">h = 9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige boks (lengte 12 cm, wydte 8 cm, hoogte 6 cm) het twee identiese silindriese gate (radius 1 cm, diepte 6 cm elk) reguit van bo na onder daardeur geboor. Bepaal die oorblywende volume. Gebruik π ≈ 3,14.', answer: '538,32 cm³', checkMode: 'auto', correctAnswer: '538,32', correctAnswers: ['538.32', '538,32', '538.32cm³', '538,32cm³'], explanation: 'Boks: V = 12 × 8 × 6 = 576 cm³.\nEen gat: V = πr²h = 3,14 × 1 × 6 = 18,84 cm³. Twee gate = 37,68 cm³.\nOorblywend = 576 − 37,68 = 538,32 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="72" cy="70" rx="13" ry="5" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="59" y1="70" x2="59" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="85" y1="70" x2="85" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><path d="M 59,120 A 13,5 0 0 0 85,120" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><ellipse cx="118" cy="70" rx="13" ry="5" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="105" y1="70" x2="105" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="131" y1="70" x2="131" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><path d="M 105,120 A 13,5 0 0 0 131,120" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="95" y="158" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="26" y="97.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">6 cm</text><text x="173.5" y="38.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">8 cm</text><text x="97" y="63" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">r = 1 cm</text></svg>' },

        // Blok 5 — Omgekeerde skaleringsprobleme (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp het oppervlakte 40 cm². Elke afmeting word met ʼn konstante faktor k geskaleer, en die nuwe oppervlakte is 160 cm². Bepaal k.', answer: '2', checkMode: 'auto', correctAnswer: '2', explanation: 'Oppervlakte-skaalfaktor = nuwe ÷ oorspronklike = 160 ÷ 40 = 4 = k². Dus k = √4 = 2 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp het volume 27 cm³. Elke afmeting word met ʼn konstante faktor k = 4 geskaleer. Bepaal die nuwe volume, en bevestig dan wat die oorspronklike volume moes gewees het as daardie nuwe volume 1 728 cm³ is.', answer: '1 728 cm³; oorspronklike = 27 cm³', checkMode: 'auto', correctAnswer: '1728', correctAnswers: ['1728', '1 728'], explanation: 'Volumeskaalfaktor = k³ = 4³ = 64. Nuwe volume = 27 × 64 = 1 728 cm³. Terugwerkend: oorspronklike = 1 728 ÷ 64 = 27 cm³ ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp het oppervlakte 50 cm². Nadat elke afmeting met ʼn konstante faktor k geskaleer is, is die nuwe oppervlakte 450 cm². Bepaal k.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Oppervlakte-skaalfaktor = 450 ÷ 50 = 9 = k². Dus k = √9 = 3 ✓' },
        // Blok 6 — Komplekse saamgestel / gemengde / werklike-lewe (Hard)
        { difficulty: 'Hard', question: 'ʼn Soliede sfeer (radius 9 cm) het ʼn silindriese gat (radius 3 cm) reguit deur die middelpunt geboor, heeltemal deur (die gat gaan deur die volle deursnee, 18 cm diep). Bepaal die oorblywende volume. Gebruik π ≈ 3,14.', answer: '2 543,4 cm³', checkMode: 'auto', correctAnswer: '2543,4', correctAnswers: ['2543.4', '2 543.4', '2543,4', '2 543,4'], explanation: 'Sfeer: V = 4/3πr³ = 4/3 × 3,14 × 729 = 3 052,08 cm³.\nGeboorde silinder (verwyder): V = πr²h = 3,14 × 9 × 18 = 508,68 cm³.\nOorblywend = 3 052,08 − 508,68 = 2 543,4 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="110" r="75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="110" rx="75" ry="22" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="90" y1="37" x2="90" y2="183" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="130" y1="37" x2="130" y2="183" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><ellipse cx="110" cy="37" rx="20" ry="7" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 90,183 A 20,7 0 0 0 130,183" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 90,183 A 20,7 0 0 1 130,183" fill="none" stroke="#374151" stroke-width="1.4" stroke-dasharray="3,3"/><line x1="110" y1="110" x2="185" y2="110" stroke="#2563eb" stroke-width="2"/><text x="150" y="125" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">R = 9 cm</text><text x="140" y="55" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">r = 3 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Voorwerp bestaan uit drie dele wat saamgevoeg is: ʼn silinder (radius 4 cm, hoogte 10 cm) as die basis, ʼn keël (dieselfde radius, hoogte 9 cm) wat aan die boonste oppervlak vasgemaak is, en ʼn halfsfeer (dieselfde radius) wat ook aan die boonste oppervlak langs die keël vasgemaak is, alles gekombineer in een totale voorwerp. Bepaal die totale volume. Gebruik π ≈ 3,14.', answer: '787,09 cm³', checkMode: 'auto', correctAnswer: '787,09', correctAnswers: ['787.09', '787,09', '787.09cm³', '787,09cm³'], explanation: 'Silinder: V = πr²h = 3,14 × 16 × 10 = 502,4 cm³.\nKeël: V = ⅓πr²h = ⅓ × 3,14 × 16 × 9 = 150,72 cm³.\nHalfsfeer: V = ⅔πr³ = ⅔ × 3,14 × 64 = 133,97 cm³.\nTotaal = 502,4 + 150,72 + 133,97 = 787,09 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 80,50 A 30,33 0 0 1 110,17 A 30,33 0 0 1 140,50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="140" cy="50" rx="30" ry="10" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="80" y2="50" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="140" y2="50" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 10 cm</text><text x="185" y="60" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">h = 9 cm (cone)</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Prisma het volume 120 cm³ en oppervlakte 150 cm². Elke afmeting word met ʼn faktor van k = 1,5 geskaleer.\n\na) Bepaal die nuwe volume.\nb) Bepaal die nuwe oppervlakte.\nc) As verf R0,05 per cm² kos, bepaal die koste om die nuwe (geskaleerde) voorwerp te verf.', answer: 'a) 405 cm³ b) 337,5 cm² c) R16,88', checkMode: 'auto', correctAnswer: '405337,516,88', correctAnswers: ['405337.516.88', '405 337,5 16,88'], explanation: 'a) Volume skaleer met k³ = 1,5³ = 3,375. Nuwe volume = 120 × 3,375 = 405 cm³.\nb) Oppervlakte skaleer met k² = 1,5² = 2,25. Nuwe OA = 150 × 2,25 = 337,5 cm².\nc) Koste = 337,5 × R0,05 = R16,88 (tot die naaste sent) ✓' },
        { difficulty: 'Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 7 cm, hoogte 20 cm) met ʼn halfsferiese kap (radius 7 cm) bo-op vasgemaak, en ʼn keëlvormige holte (radius 7 cm, hoogte 6 cm) wat uit die onderkant van die silinder verwyder is. Bepaal die totale volume. Gebruik π ≈ 3,14.', answer: '3 487,49 cm³', checkMode: 'auto', correctAnswer: '3487,49', correctAnswers: ['3487.49', '3 487.49', '3487,49', '3 487,49'], explanation: 'Silinder: V = πr²h = 3,14 × 49 × 20 = 3 077,2 cm³.\nHalfsfeer (bygevoeg): V = ⅔πr³ = ⅔ × 3,14 × 343 = 718,01 cm³.\nKeëlholte (verwyder): V = ⅓πr²h = ⅓ × 3,14 × 49 × 6 = 307,72 cm³.\nTotaal = 3 077,2 + 718,01 − 307,72 = 3 487,49 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 240" xmlns="http://www.w3.org/2000/svg"><path d="M 65,45 A 45,50 0 0 1 110,0 A 45,50 0 0 1 155,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="45" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="45" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="45" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="85" y1="128" x2="110" y2="165" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="135" y1="128" x2="110" y2="165" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 85,128 A 25,8 0 0 0 135,128" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="110" y1="45" x2="153" y2="45" stroke="#2563eb" stroke-width="2"/><text x="132" y="38" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 cm</text><line x1="30" y1="45" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 105)">h = 20 cm</text><text x="140" y="150" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">h = 6 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Watertenk bestaan uit ʼn silinder (radius 2 m, hoogte 5 m) met ʼn halfsferiese koepel (radius 2 m) bo-op. Bepaal die kapasiteit van die tenk in liter (1 m³ = 1 000 liter). Gebruik π ≈ 3,14.', answer: '79 546,67 liter', checkMode: 'auto', correctAnswer: '79546,67', correctAnswers: ['79546.67', '79 546.67', '79546,67', '79 546,67'], explanation: 'Silinder: V = πr²h = 3,14 × 4 × 5 = 62,8 m³.\nHalfsfeer: V = ⅔πr³ = ⅔ × 3,14 × 8 = 16,75 m³ (16,7466... m³ onafgerond).\nTotaal = 62,8 + 16,7466... = 79,5466... m³.\nKapasiteit = 79,5466... × 1 000 ≈ 79 546,67 liter ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 165,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 m</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 5 m</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het skalering en saamgestelde voorwerpe bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor verwyderde holtes of omgekeerde skalering en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor k² en k³ skalering weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer deur en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Basiese k² oppervlakte-skalering (Easy)
        { difficulty: 'Easy', question: 'Elke afmeting van ʼn vierkantige piramide word met ʼn konstante faktor k = 4 vermenigvuldig. Met watter faktor neem die oppervlakte toe?', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: 'Oppervlakte skaleer met k² = 4² = 16 ✓' },
        { difficulty: 'Easy', question: 'ʼn Reghoekige prisma het oppervlakte 60 cm². As elke afmeting met k = 3 vermenigvuldig word, bepaal die nuwe oppervlakte.', answer: '540 cm²', checkMode: 'auto', correctAnswer: '540', correctAnswers: ['540', '540cm²', '540 cm²'], explanation: 'Oppervlakte skaleer met k² = 3² = 9. Nuwe oppervlakte = 60 × 9 = 540 cm² ✓' },
        { difficulty: 'Easy', question: 'ʼn Sfeer het oppervlakte 200 cm². Elke afmeting word met k = 0,8 vermenigvuldig. Bepaal die nuwe oppervlakte.', answer: '128 cm²', checkMode: 'auto', correctAnswer: '128', correctAnswers: ['128', '128cm²', '128 cm²'], explanation: 'Oppervlakte skaleer met k² = 0,8² = 0,64. Nuwe oppervlakte = 200 × 0,64 = 128 cm² ✓' },

        // Blok 2 — Basiese k³ volume-skalering (Easy)
        { difficulty: 'Easy', question: 'Elke afmeting van ʼn silinder word met ʼn konstante faktor k = 6 vermenigvuldig. Met watter faktor neem die volume toe?', answer: '216', checkMode: 'auto', correctAnswer: '216', explanation: 'Volume skaleer met k³ = 6³ = 216 ✓' },
        { difficulty: 'Easy', question: 'ʼn Keël het volume 16 cm³. As elke afmeting met k = 5 vermenigvuldig word, bepaal die nuwe volume.', answer: '2 000 cm³', checkMode: 'auto', correctAnswer: '2000', correctAnswers: ['2000', '2 000', '2000cm³', '2 000cm³'], explanation: 'Volume skaleer met k³ = 5³ = 125. Nuwe volume = 16 × 125 = 2 000 cm³ ✓' },
        { difficulty: 'Easy', question: 'ʼn Prisma word met ʼn faktor k = 2,5 geskaleer. Met watter faktor neem die volume toe?', answer: '15,625', checkMode: 'auto', correctAnswer: '15,625', correctAnswers: ['15.625', '15,625'], explanation: 'Volume skaleer met k³ = 2,5³ = 15,625 ✓' },

        // Blok 3 — Saamgestelde voorwerpe, bygevoegde komponente (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 4 cm, hoogte 9 cm) met ʼn keël (dieselfde radius, hoogte 6 cm) bo-op. Bepaal die totale volume. Gebruik π ≈ 3,14.', answer: '552,64 cm³', checkMode: 'auto', correctAnswer: '552,64', correctAnswers: ['552.64', '552,64', '552.64cm³', '552,64cm³'], explanation: 'Silinder: V = πr²h = 3,14 × 16 × 9 = 452,16 cm³.\nKeël: V = ⅓πr²h = ⅓ × 3,14 × 16 × 6 = 100,48 cm³.\nTotaal = 452,16 + 100,48 = 552,64 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 9 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 6 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Voorwerp bestaan uit ʼn reghoekige prisma (lengte 8 cm, wydte 5 cm, hoogte 3 cm) met ʼn vierkantige piramide (dieselfde basis 8 cm by 5 cm, hoogte 6 cm) bo-op. Bepaal die totale volume.', answer: '200 cm³', checkMode: 'auto', correctAnswer: '200', correctAnswers: ['200', '200cm³', '200 cm³'], explanation: 'Prisma: V = 8 × 5 × 3 = 120 cm³.\nPiramide: V = ⅓ × basisarea × h = ⅓ × 40 × 6 = 80 cm³.\nTotaal = 120 + 80 = 200 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="90" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="115" x2="75" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="115" x2="185" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="200" x2="185" y2="175" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="115" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="192" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="26" y="157.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 157.5)">3 cm</text><text x="173.5" y="98.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text><polygon points="40,115 150,115 185,90 75,90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="115" x2="95" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="115" x2="95" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="185" y1="90" x2="95" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="90" x2="95" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><text x="105" y="70" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">h = 6 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Geslote voorwerp bestaan uit ʼn silinder (radius 6 cm, hoogte 14 cm) met ʼn halfsfeer (radius 6 cm) vasgemaak bo-op, wat die boonste sirkelvormige oppervlak vervang. Bepaal die totale oppervlakte van die voorwerp (geboë silinderoppervlak + silinderbasis + geboë halfsfeeroppervlak alleenlik). Gebruik π ≈ 3,14.', answer: '866,64 cm²', checkMode: 'auto', correctAnswer: '866,64', correctAnswers: ['866.64', '866,64', '866.64cm²', '866,64cm²'], explanation: 'Silinder geboë oppervlak: 2πrh = 2 × 3,14 × 6 × 14 = 527,52 cm².\nSilinderbasis: πr² = 3,14 × 36 = 113,04 cm².\nHalfsfeer geboë oppervlak: 2πr² = 2 × 3,14 × 36 = 226,08 cm².\nTotaal = 527,52 + 113,04 + 226,08 = 866,64 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 165,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 14 cm</text></svg>' },

        // Blok 4 — Saamgestelde voorwerpe, verwyderde holte (Medium)
        { difficulty: 'Medium', question: 'ʼn Soliede kubus (sy 12 cm) het ʼn silindriese gat (radius 3 cm, diepte 12 cm) reguit daardeur geboor. Bepaal die oorblywende volume. Gebruik π ≈ 3,14.', answer: '1 388,88 cm³', checkMode: 'auto', correctAnswer: '1388,88', correctAnswers: ['1388.88', '1 388.88', '1388,88', '1 388,88'], explanation: 'Kubus: V = 12³ = 1 728 cm³.\nGeboorde silinder (verwyder): V = πr²h = 3,14 × 9 × 12 = 339,12 cm³.\nOorblywend = 1 728 − 339,12 = 1 388,88 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="95" cy="72.5" rx="20" ry="7" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="75" y1="72.5" x2="75" y2="122.5" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="115" y1="72.5" x2="115" y2="122.5" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 75,122.5 A 20,7 0 0 0 115,122.5" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">side = 12 cm</text><text x="120" y="66" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">r = 3 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Soliede silinder (radius 5 cm, hoogte 18 cm) het ʼn keëlvormige holte (dieselfde radius, hoogte 9 cm) uit die boonste deel verwyder. Bepaal die oorblywende volume. Gebruik π ≈ 3,14.', answer: '1 177,5 cm³', checkMode: 'auto', correctAnswer: '1177,5', correctAnswers: ['1177.5', '1 177.5', '1177,5', '1 177,5'], explanation: 'Silinder: V = πr²h = 3,14 × 25 × 18 = 1 413 cm³.\nKeëlholte (verwyder): V = ⅓πr²h = ⅓ × 3,14 × 25 × 9 = 235,5 cm³.\nOorblywend = 1 413 − 235,5 = 1 177,5 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="45" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="45" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><ellipse cx="110" cy="45" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="49" x2="110" y2="85" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="140" y1="49" x2="110" y2="85" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 80,49 A 30,10 0 0 0 140,49" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="30" y1="45" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 105)">h = 18 cm</text><line x1="110" y1="45" x2="153" y2="45" stroke="#2563eb" stroke-width="2"/><text x="132" y="38" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><text x="125" y="70" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">h = 9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige boks (lengte 15 cm, wydte 10 cm, hoogte 8 cm) het twee identiese silindriese gate (radius 1,5 cm, diepte 8 cm elk) reguit van bo na onder daardeur geboor. Bepaal die oorblywende volume. Gebruik π ≈ 3,14.', answer: '1 086,96 cm³', checkMode: 'auto', correctAnswer: '1086,96', correctAnswers: ['1086.96', '1 086.96', '1086,96', '1 086,96'], explanation: 'Boks: V = 15 × 10 × 8 = 1 200 cm³.\nEen gat: V = πr²h = 3,14 × 2,25 × 8 = 56,52 cm³. Twee gate = 113,04 cm³.\nOorblywend = 1 200 − 113,04 = 1 086,96 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="72" cy="70" rx="13" ry="5" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="59" y1="70" x2="59" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="85" y1="70" x2="85" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><path d="M 59,120 A 13,5 0 0 0 85,120" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><ellipse cx="118" cy="70" rx="13" ry="5" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="105" y1="70" x2="105" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="131" y1="70" x2="131" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><path d="M 105,120 A 13,5 0 0 0 131,120" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="95" y="158" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="26" y="97.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">8 cm</text><text x="173.5" y="38.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">10 cm</text><text x="97" y="63" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">r = 1,5 cm</text></svg>' },

        // Blok 5 — Omgekeerde skaleringsprobleme (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp het oppervlakte 60 cm². Elke afmeting word met ʼn konstante faktor k geskaleer, en die nuwe oppervlakte is 540 cm². Bepaal k.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Oppervlakte-skaalfaktor = nuwe ÷ oorspronklike = 540 ÷ 60 = 9 = k². Dus k = √9 = 3 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp het volume 16 cm³. Elke afmeting word met ʼn konstante faktor k = 5 geskaleer. Bepaal die nuwe volume, en bevestig dan wat die oorspronklike volume moes gewees het as daardie nuwe volume 2 000 cm³ is.', answer: '2 000 cm³; oorspronklike = 16 cm³', checkMode: 'auto', correctAnswer: '2000', correctAnswers: ['2000', '2 000'], explanation: 'Volumeskaalfaktor = k³ = 5³ = 125. Nuwe volume = 16 × 125 = 2 000 cm³. Terugwerkend: oorspronklike = 2 000 ÷ 125 = 16 cm³ ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp het oppervlakte 20 cm². Nadat elke afmeting met ʼn konstante faktor k geskaleer is, is die nuwe oppervlakte 500 cm². Bepaal k.', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Oppervlakte-skaalfaktor = 500 ÷ 20 = 25 = k². Dus k = √25 = 5 ✓' },
        // Blok 6 — Komplekse saamgestel / gemengde / werklike-lewe (Hard)
        { difficulty: 'Hard', question: 'ʼn Soliede sfeer (radius 10 cm) het ʼn silindriese gat (radius 4 cm) reguit deur die middelpunt geboor, heeltemal deur (die gat gaan deur die volle deursnee, 20 cm diep). Bepaal die oorblywende volume. Gebruik π ≈ 3,14.', answer: '3 181,87 cm³', checkMode: 'auto', correctAnswer: '3181,87', correctAnswers: ['3181.87', '3 181.87', '3181,87', '3 181,87'], explanation: 'Sfeer: V = 4/3πr³ = 4/3 × 3,14 × 1 000 = 4 186,67 cm³.\nGeboorde silinder (verwyder): V = πr²h = 3,14 × 16 × 20 = 1 004,8 cm³.\nOorblywend = 4 186,67 − 1 004,8 = 3 181,87 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="110" r="75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="110" rx="75" ry="22" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="90" y1="37" x2="90" y2="183" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="130" y1="37" x2="130" y2="183" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><ellipse cx="110" cy="37" rx="20" ry="7" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 90,183 A 20,7 0 0 0 130,183" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 90,183 A 20,7 0 0 1 130,183" fill="none" stroke="#374151" stroke-width="1.4" stroke-dasharray="3,3"/><line x1="110" y1="110" x2="185" y2="110" stroke="#2563eb" stroke-width="2"/><text x="150" y="125" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">R = 10 cm</text><text x="140" y="55" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">r = 4 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Voorwerp bestaan uit drie dele wat saamgevoeg is: ʼn silinder (radius 3 cm, hoogte 12 cm) as die basis, ʼn keël (dieselfde radius, hoogte 7 cm) wat aan die boonste oppervlak vasgemaak is, en ʼn halfsfeer (dieselfde radius) wat ook aan die boonste oppervlak langs die keël vasgemaak is, alles gekombineer in een totale voorwerp. Bepaal die totale volume. Gebruik π ≈ 3,14.', answer: '461,58 cm³', checkMode: 'auto', correctAnswer: '461,58', correctAnswers: ['461.58', '461,58', '461.58cm³', '461,58cm³'], explanation: 'Silinder: V = πr²h = 3,14 × 9 × 12 = 339,12 cm³.\nKeël: V = ⅓πr²h = ⅓ × 3,14 × 9 × 7 = 65,94 cm³.\nHalfsfeer: V = ⅔πr³ = ⅔ × 3,14 × 27 = 56,52 cm³.\nTotaal = 339,12 + 65,94 + 56,52 = 461,58 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 80,50 A 30,33 0 0 1 110,17 A 30,33 0 0 1 140,50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="140" cy="50" rx="30" ry="10" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="80" y2="50" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="140" y2="50" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 12 cm</text><text x="185" y="60" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">h = 7 cm (cone)</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Prisma het volume 200 cm³ en oppervlakte 180 cm². Elke afmeting word met ʼn faktor van k = 2 geskaleer.\n\na) Bepaal die nuwe volume.\nb) Bepaal die nuwe oppervlakte.\nc) As verf R0,06 per cm² kos, bepaal die koste om die nuwe (geskaleerde) voorwerp te verf.', answer: 'a) 1 600 cm³ b) 720 cm² c) R43,20', checkMode: 'auto', correctAnswer: '160072043,2', correctAnswers: ['160072043.2', '1600 720 43,20'], explanation: 'a) Volume skaleer met k³ = 2³ = 8. Nuwe volume = 200 × 8 = 1 600 cm³.\nb) Oppervlakte skaleer met k² = 2² = 4. Nuwe OA = 180 × 4 = 720 cm².\nc) Koste = 720 × R0,06 = R43,20 ✓' },
        { difficulty: 'Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 8 cm, hoogte 22 cm) met ʼn halfsferiese kap (radius 8 cm) bo-op vasgemaak, en ʼn keëlvormige holte (radius 8 cm, hoogte 7 cm) wat uit die onderkant van die silinder verwyder is. Bepaal die totale volume. Gebruik π ≈ 3,14.', answer: '5 024 cm³', checkMode: 'auto', correctAnswer: '5024', correctAnswers: ['5024', '5 024'], explanation: 'Silinder: V = πr²h = 3,14 × 64 × 22 = 4 421,12 cm³.\nHalfsfeer (bygevoeg): V = ⅔πr³ = ⅔ × 3,14 × 512 = 1 071,79 cm³.\nKeëlholte (verwyder): V = ⅓πr²h = ⅓ × 3,14 × 64 × 7 = 468,91 cm³.\nTotaal = 4 421,12 + 1 071,79 − 468,91 = 5 024 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 240" xmlns="http://www.w3.org/2000/svg"><path d="M 65,45 A 45,50 0 0 1 110,0 A 45,50 0 0 1 155,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="45" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="45" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="45" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="85" y1="128" x2="110" y2="165" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="135" y1="128" x2="110" y2="165" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 85,128 A 25,8 0 0 0 135,128" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="110" y1="45" x2="153" y2="45" stroke="#2563eb" stroke-width="2"/><text x="132" y="38" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 8 cm</text><line x1="30" y1="45" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 105)">h = 22 cm</text><text x="140" y="150" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">h = 7 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Watertenk bestaan uit ʼn silinder (radius 1,5 m, hoogte 4 m) met ʼn halfsferiese koepel (radius 1,5 m) bo-op. Bepaal die kapasiteit van die tenk in liter (1 m³ = 1 000 liter). Gebruik π ≈ 3,14.', answer: '35 325 liter', checkMode: 'auto', correctAnswer: '35325', correctAnswers: ['35325', '35 325'], explanation: 'Silinder: V = πr²h = 3,14 × 2,25 × 4 = 28,26 m³.\nHalfsfeer: V = ⅔πr³ = ⅔ × 3,14 × 3,375 = 7,065 m³.\nTotaal = 28,26 + 7,065 = 35,325 m³.\nKapasiteit = 35,325 × 1 000 = 35 325 liter ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 165,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 1,5 m</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 4 m</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het skalering en saamgestelde voorwerpe bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor verwyderde holtes of omgekeerde skalering en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor k² en k³ skalering weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer deur en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Basiese k² oppervlakte-skalering (Easy)
        { difficulty: 'Easy', question: 'Elke afmeting van ʼn keël word met ʼn konstante faktor k = 2,5 vermenigvuldig. Met watter faktor neem die oppervlakte toe?', answer: '6,25', checkMode: 'auto', correctAnswer: '6,25', correctAnswers: ['6.25', '6,25'], explanation: 'Oppervlakte skaleer met k² = 2,5² = 6,25 ✓' },
        { difficulty: 'Easy', question: 'ʼn Driehoekige prisma het oppervlakte 25 cm². As elke afmeting met k = 4 vermenigvuldig word, bepaal die nuwe oppervlakte.', answer: '400 cm²', checkMode: 'auto', correctAnswer: '400', correctAnswers: ['400', '400cm²', '400 cm²'], explanation: 'Oppervlakte skaleer met k² = 4² = 16. Nuwe oppervlakte = 25 × 16 = 400 cm² ✓' },
        { difficulty: 'Easy', question: 'ʼn Kubus het oppervlakte 30 cm². Elke afmeting word met k = 1,1 vermenigvuldig. Bepaal die nuwe oppervlakte.', answer: '36,3 cm²', checkMode: 'auto', correctAnswer: '36,3', correctAnswers: ['36.3', '36,3', '36.30', '36,30'], explanation: 'Oppervlakte skaleer met k² = 1,1² = 1,21. Nuwe oppervlakte = 30 × 1,21 = 36,3 cm² ✓' },

        // Blok 2 — Basiese k³ volume-skalering (Easy)
        { difficulty: 'Easy', question: 'Elke afmeting van ʼn piramide word met ʼn konstante faktor k = 3,5 vermenigvuldig. Met watter faktor neem die volume toe?', answer: '42,875', checkMode: 'auto', correctAnswer: '42,875', correctAnswers: ['42.875', '42,875'], explanation: 'Volume skaleer met k³ = 3,5³ = 42,875 ✓' },
        { difficulty: 'Easy', question: 'ʼn Silinder het volume 8 cm³. As elke afmeting met k = 3 vermenigvuldig word, bepaal die nuwe volume.', answer: '216 cm³', checkMode: 'auto', correctAnswer: '216', correctAnswers: ['216', '216cm³', '216 cm³'], explanation: 'Volume skaleer met k³ = 3³ = 27. Nuwe volume = 8 × 27 = 216 cm³ ✓' },
        { difficulty: 'Easy', question: 'ʼn Sfeer word met ʼn faktor k = 0,4 geskaleer. Met watter faktor neem sy volume af? Gee jou antwoord as ʼn desimaal.', answer: '0,064', checkMode: 'auto', correctAnswer: '0,064', correctAnswers: ['0.064', '0,064'], explanation: 'Volume skaleer met k³ = 0,4³ = 0,064 ✓' },

        // Blok 3 — Saamgestelde voorwerpe, bygevoegde komponente (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 5 cm, hoogte 10 cm) met ʼn keël (dieselfde radius, hoogte 7 cm) bo-op. Bepaal die totale volume. Gebruik π ≈ 3,14.', answer: '968,17 cm³', checkMode: 'auto', correctAnswer: '968,17', correctAnswers: ['968.17', '968,17', '968.17cm³', '968,17cm³'], explanation: 'Silinder: V = πr²h = 3,14 × 25 × 10 = 785 cm³.\nKeël: V = ⅓πr²h = ⅓ × 3,14 × 25 × 7 = 183,17 cm³.\nTotaal = 785 + 183,17 = 968,17 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 10 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 7 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Voorwerp bestaan uit ʼn reghoekige prisma (lengte 14 cm, wydte 9 cm, hoogte 5 cm) met ʼn vierkantige piramide (dieselfde basis 14 cm by 9 cm, hoogte 12 cm) bo-op. Bepaal die totale volume.', answer: '1 134 cm³', checkMode: 'auto', correctAnswer: '1134', correctAnswers: ['1134', '1 134'], explanation: 'Prisma: V = 14 × 9 × 5 = 630 cm³.\nPiramide: V = ⅓ × basisarea × h = ⅓ × 126 × 12 = 504 cm³.\nTotaal = 630 + 504 = 1 134 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="90" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="115" x2="75" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="115" x2="185" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="200" x2="185" y2="175" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="115" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="192" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="26" y="157.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 157.5)">5 cm</text><text x="173.5" y="98.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">9 cm</text><polygon points="40,115 150,115 185,90 75,90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="115" x2="95" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="115" x2="95" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="185" y1="90" x2="95" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="90" x2="95" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><text x="105" y="70" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">h = 12 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Geslote voorwerp bestaan uit ʼn silinder (radius 4,5 cm, hoogte 16 cm) met ʼn halfsfeer (radius 4,5 cm) vasgemaak bo-op, wat die boonste sirkelvormige oppervlak vervang. Bepaal die totale oppervlakte van die voorwerp (geboë silinderoppervlak + silinderbasis + geboë halfsfeeroppervlak alleenlik). Gebruik π ≈ 3,14.', answer: '642,92 cm²', checkMode: 'auto', correctAnswer: '642,92', correctAnswers: ['642.92', '642,92', '642.92cm²', '642,92cm²'], explanation: 'Silinder geboë oppervlak: 2πrh = 2 × 3,14 × 4,5 × 16 = 452,16 cm².\nSilinderbasis: πr² = 3,14 × 20,25 = 63,59 cm².\nHalfsfeer geboë oppervlak: 2πr² = 2 × 3,14 × 20,25 = 127,17 cm².\nTotaal = 452,16 + 63,59 + 127,17 = 642,92 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 165,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4,5 cm</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 16 cm</text></svg>' },

        // Blok 4 — Saamgestelde voorwerpe, verwyderde holte (Medium)
        { difficulty: 'Medium', question: 'ʼn Soliede kubus (sy 9 cm) het ʼn silindriese gat (radius 2,5 cm, diepte 9 cm) reguit daardeur geboor. Bepaal die oorblywende volume. Gebruik π ≈ 3,14.', answer: '552,38 cm³', checkMode: 'auto', correctAnswer: '552,38', correctAnswers: ['552.38', '552,38', '552.38cm³', '552,38cm³'], explanation: 'Kubus: V = 9³ = 729 cm³.\nGeboorde silinder (verwyder): V = πr²h = 3,14 × 6,25 × 9 = 176,63 cm³ (onafgerond 176,625).\nOorblywend = 729 − 176,63 = 552,38 cm³ ✓ (aanvaar 552,37–552,38)', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="95" cy="72.5" rx="20" ry="7" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="75" y1="72.5" x2="75" y2="122.5" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="115" y1="72.5" x2="115" y2="122.5" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 75,122.5 A 20,7 0 0 0 115,122.5" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">side = 9 cm</text><text x="120" y="66" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">r = 2,5 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Soliede silinder (radius 7 cm, hoogte 20 cm) het ʼn keëlvormige holte (dieselfde radius, hoogte 12 cm) uit die boonste deel verwyder. Bepaal die oorblywende volume. Gebruik π ≈ 3,14.', answer: '2 461,76 cm³', checkMode: 'auto', correctAnswer: '2461,76', correctAnswers: ['2461.76', '2 461.76', '2461,76', '2 461,76'], explanation: 'Silinder: V = πr²h = 3,14 × 49 × 20 = 3 077,2 cm³.\nKeëlholte (verwyder): V = ⅓πr²h = ⅓ × 3,14 × 49 × 12 = 615,44 cm³.\nOorblywend = 3 077,2 − 615,44 = 2 461,76 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="45" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="45" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><ellipse cx="110" cy="45" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="49" x2="110" y2="85" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="140" y1="49" x2="110" y2="85" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 80,49 A 30,10 0 0 0 140,49" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="30" y1="45" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 105)">h = 20 cm</text><line x1="110" y1="45" x2="153" y2="45" stroke="#2563eb" stroke-width="2"/><text x="132" y="38" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 cm</text><text x="125" y="70" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">h = 12 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige boks (lengte 20 cm, wydte 12 cm, hoogte 10 cm) het drie identiese silindriese gate (radius 2 cm, diepte 10 cm elk) reguit van bo na onder daardeur geboor. Bepaal die oorblywende volume. Gebruik π ≈ 3,14.', answer: '2 023,2 cm³', checkMode: 'auto', correctAnswer: '2023,2', correctAnswers: ['2023.2', '2 023.2', '2023,2', '2 023,2'], explanation: 'Boks: V = 20 × 12 × 10 = 2 400 cm³.\nEen gat: V = πr²h = 3,14 × 4 × 10 = 125,6 cm³. Drie gate = 376,8 cm³.\nOorblywend = 2 400 − 376,8 = 2 023,2 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="72" cy="70" rx="13" ry="5" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="59" y1="70" x2="59" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="85" y1="70" x2="85" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><path d="M 59,120 A 13,5 0 0 0 85,120" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><ellipse cx="118" cy="70" rx="13" ry="5" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="105" y1="70" x2="105" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="131" y1="70" x2="131" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><path d="M 105,120 A 13,5 0 0 0 131,120" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="95" y="158" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="26" y="97.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">10 cm</text><text x="173.5" y="38.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">12 cm</text><text x="97" y="63" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 cm</text></svg>' },

        // Blok 5 — Omgekeerde skaleringsprobleme (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp het oppervlakte 25 cm². Elke afmeting word met ʼn konstante faktor k geskaleer, en die nuwe oppervlakte is 400 cm². Bepaal k.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'Oppervlakte-skaalfaktor = nuwe ÷ oorspronklike = 400 ÷ 25 = 16 = k². Dus k = √16 = 4 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp het volume 8 cm³. Elke afmeting word met ʼn konstante faktor k = 3 geskaleer. Bepaal die nuwe volume, en bevestig dan wat die waarde van k moes gewees het as die oorspronklike volume 15 cm³ was en die nuwe volume 960 cm³ is.', answer: 'Nuwe volume van eerste voorwerp = 216 cm³; k vir die tweede voorwerp = 4', checkMode: 'auto', correctAnswer: '2164', correctAnswers: ['2164', '216 4', '216cm³ k=4'], explanation: 'Eerste voorwerp: volumeskaalfaktor = k³ = 3³ = 27. Nuwe volume = 8 × 27 = 216 cm³.\nTweede voorwerp: skaalfaktor = 960 ÷ 15 = 64 = k³. Dus k = ∛64 = 4 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp het oppervlakte 96 cm². Nadat elke afmeting met ʼn konstante faktor k = 2,5 geskaleer is, bepaal die nuwe oppervlakte.', answer: '600 cm²', checkMode: 'auto', correctAnswer: '600', correctAnswers: ['600', '600cm²', '600 cm²'], explanation: 'Oppervlakte skaleer met k² = 2,5² = 6,25. Nuwe oppervlakte = 96 × 6,25 = 600 cm² ✓' },
        // Blok 6 — Komplekse saamgestel / gemengde / werklike-lewe (Hard)
        { difficulty: 'Hard', question: 'ʼn Soliede sfeer (radius 12 cm) het ʼn silindriese gat (radius 5 cm) reguit deur die middelpunt geboor, heeltemal deur (die gat gaan deur die volle deursnee, 24 cm diep). Bepaal die oorblywende volume. Gebruik π ≈ 3,14.', answer: '5 350,56 cm³', checkMode: 'auto', correctAnswer: '5350,56', correctAnswers: ['5350.56', '5 350.56', '5350,56', '5 350,56'], explanation: 'Sfeer: V = 4/3πr³ = 4/3 × 3,14 × 1 728 = 7 234,56 cm³.\nGeboorde silinder (verwyder): V = πr²h = 3,14 × 25 × 24 = 1 884 cm³.\nOorblywend = 7 234,56 − 1 884 = 5 350,56 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="110" r="75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="110" rx="75" ry="22" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="90" y1="37" x2="90" y2="183" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="130" y1="37" x2="130" y2="183" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><ellipse cx="110" cy="37" rx="20" ry="7" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 90,183 A 20,7 0 0 0 130,183" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 90,183 A 20,7 0 0 1 130,183" fill="none" stroke="#374151" stroke-width="1.4" stroke-dasharray="3,3"/><line x1="110" y1="110" x2="185" y2="110" stroke="#2563eb" stroke-width="2"/><text x="150" y="125" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">R = 12 cm</text><text x="140" y="55" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">r = 5 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Voorwerp bestaan uit drie dele wat saamgevoeg is: ʼn silinder (radius 6 cm, hoogte 16 cm) as die basis, ʼn keël (dieselfde radius, hoogte 10 cm) wat aan die boonste oppervlak vasgemaak is, en ʼn halfsfeer (dieselfde radius) wat ook aan die boonste oppervlak langs die keël vasgemaak is, alles gekombineer in een totale voorwerp. Bepaal die totale volume. Gebruik π ≈ 3,14.', answer: '2 637,6 cm³', checkMode: 'auto', correctAnswer: '2637,6', correctAnswers: ['2637.6', '2 637.6', '2637,6', '2 637,6'], explanation: 'Silinder: V = πr²h = 3,14 × 36 × 16 = 1 808,64 cm³.\nKeël: V = ⅓πr²h = ⅓ × 3,14 × 36 × 10 = 376,8 cm³.\nHalfsfeer: V = ⅔πr³ = ⅔ × 3,14 × 216 = 452,16 cm³.\nTotaal = 1 808,64 + 376,8 + 452,16 = 2 637,6 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 80,50 A 30,33 0 0 1 110,17 A 30,33 0 0 1 140,50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="140" cy="50" rx="30" ry="10" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="80" y2="50" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="140" y2="50" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 16 cm</text><text x="185" y="60" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">h = 10 cm (cone)</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Prisma het volume 90 cm³ en oppervlakte 120 cm². Elke afmeting word met ʼn faktor van k = 1,5 geskaleer.\n\na) Bepaal die nuwe volume.\nb) Bepaal die nuwe oppervlakte.\nc) As verf R0,07 per cm² kos, bepaal die koste om die nuwe (geskaleerde) voorwerp te verf.', answer: 'a) 303,75 cm³ b) 270 cm² c) R18,90', checkMode: 'auto', correctAnswer: '303,7527018,9', correctAnswers: ['303.7527018.9', '303,75 270 18,90'], explanation: 'a) Volume skaleer met k³ = 1,5³ = 3,375. Nuwe volume = 90 × 3,375 = 303,75 cm³.\nb) Oppervlakte skaleer met k² = 1,5² = 2,25. Nuwe OA = 120 × 2,25 = 270 cm².\nc) Koste = 270 × R0,07 = R18,90 ✓' },
        { difficulty: 'Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 9 cm, hoogte 25 cm) met ʼn halfsferiese kap (radius 9 cm) bo-op vasgemaak, en ʼn keëlvormige holte (radius 9 cm, hoogte 8 cm) wat uit die onderkant van die silinder verwyder is. Bepaal die totale volume. Gebruik π ≈ 3,14.', answer: '7 206,3 cm³', checkMode: 'auto', correctAnswer: '7206,3', correctAnswers: ['7206.3', '7 206.3', '7206,3', '7 206,3'], explanation: 'Silinder: V = πr²h = 3,14 × 81 × 25 = 6 358,5 cm³.\nHalfsfeer (bygevoeg): V = ⅔πr³ = ⅔ × 3,14 × 729 = 1 526,04 cm³.\nKeëlholte (verwyder): V = ⅓πr²h = ⅓ × 3,14 × 81 × 8 = 678,24 cm³.\nTotaal = 6 358,5 + 1 526,04 − 678,24 = 7 206,3 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 240" xmlns="http://www.w3.org/2000/svg"><path d="M 65,45 A 45,50 0 0 1 110,0 A 45,50 0 0 1 155,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="45" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="45" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="45" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="85" y1="128" x2="110" y2="165" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="135" y1="128" x2="110" y2="165" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 85,128 A 25,8 0 0 0 135,128" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="110" y1="45" x2="153" y2="45" stroke="#2563eb" stroke-width="2"/><text x="132" y="38" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 9 cm</text><line x1="30" y1="45" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 105)">h = 25 cm</text><text x="140" y="150" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">h = 8 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Watertenk bestaan uit ʼn silinder (radius 1 m, hoogte 3 m) met ʼn halfsferiese koepel (radius 1 m) bo-op. Bepaal die kapasiteit van die tenk in liter (1 m³ = 1 000 liter). Gebruik π ≈ 3,14.', answer: '11 513,33 liter', checkMode: 'auto', correctAnswer: '11513,33', correctAnswers: ['11513.33', '11 513.33', '11513,33', '11 513,33'], explanation: 'Silinder: V = πr²h = 3,14 × 1 × 3 = 9,42 m³.\nHalfsfeer: V = ⅔πr³ = ⅔ × 3,14 × 1 = 2,0933... m³.\nTotaal = 9,42 + 2,0933... = 11,5133... m³.\nKapasiteit = 11,5133... × 1 000 ≈ 11 513,33 liter ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 165,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 1 m</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 3 m</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het skalering en saamgestelde voorwerpe bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor verwyderde holtes of omgekeerde skalering en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor k² en k³ skalering weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer deur en probeer hierdie stel weer.' },
      ],
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
