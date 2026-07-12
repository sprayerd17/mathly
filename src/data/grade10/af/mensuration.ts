import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (mensuration roles) ──────────────────────────────────────
// radius/dimensions  → blue   (#2563eb)
// formula applied    → orange (#ea580c)
// final answer       → green  (#16a34a)
// component shape 2  → red    (#dc2626)
// component shape 3  → purple (#7c3aed)
// known values       → blue   (#2563eb)
// rearranged formula → orange (#ea580c)
// found dimension    → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Mensurasie',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — VOLUME AND SURFACE AREA OF PRISMS, PYRAMIDS, CYLINDERS, CONES AND SPHERES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'volume-surface-area-basic-solids',
      title: 'Volume en Oppervlakte van Prismas, Piramides, Silinders, Keëls en Sfere',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons hersien en pas formules toe vir <strong>volume</strong> en <strong>oppervlakte</strong> van 3D-voorwerpe wat in vorige grade bestudeer is. Volume meet die spasie binne-in ʼn voorwerp (in kubieke eenhede, bv. cm³); oppervlakte meet die totale oppervlakte van al die buitenste vlakke (in vierkante eenhede, bv. cm²).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius / dimensies')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('formule toegepas')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── Formula reference ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Formule-verwysing</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Prisma</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>V</strong> = basisoppervlakte × hoogte</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Piramide</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>V</strong> = ⅓ × basisoppervlakte × hoogte</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Silinder</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>V</strong> = πr²h</p>` +
        `<p style="color:#374151;font-size:14px;margin:4px 0 0;"><strong>O</strong> = 2πr² + 2πrh</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Keël</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>V</strong> = ⅓πr²h</p>` +
        `<p style="color:#374151;font-size:14px;margin:4px 0 0;"><strong>O</strong> = πr² + πrl &nbsp;<em>(l = skuinshoogte)</em></p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Sfeer</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>V</strong> = 4/3 πr³</p>` +
        `<p style="color:#374151;font-size:14px;margin:4px 0 0;"><strong>O</strong> = 4πr²</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Eenhede is belangrik</p>` +
        `<p style="margin:0;color:#9a3412;">Gee altyd die eenhede in jou antwoord aan. Volume is in <strong>kubieke eenhede</strong> (bv. cm³) en oppervlakte is in <strong>vierkante eenhede</strong> (bv. cm²). ʼn Ontbrekende of verkeerde eenheid kos punte.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die volume van ʼn keël met radius 4 cm en hoogte 9 cm.',
          answer: `Volume ${gr('≈ 150,72 cm³')}`,
          steps: [
            `Skryf die formule: ${or('V = ⅓πr²h')}`,
            `Vervang die bekende waardes: ${bl('r = 4 cm')}, ${bl('h = 9 cm')}<br>${or('V = ⅓ × 3,14 × 4² × 9')}`,
            `Bereken: ${or('V = ⅓ × 3,14 × 16 × 9 = ⅓ × 452,16 = 150,72')}`,
            `<strong>Antwoord:</strong> Volume = ${gr('150,72 cm³')} ✓`,
          ],
        },
        {
          question: 'Vind die oppervlakte van ʼn sfeer met radius 6 cm.',
          answer: `Oppervlakte ${gr('≈ 452,16 cm²')}`,
          steps: [
            `Skryf die formule: ${or('O = 4πr²')}`,
            `Vervang die bekende waarde: ${bl('r = 6 cm')}<br>${or('O = 4 × 3,14 × 6²')}`,
            `Bereken: ${or('O = 4 × 3,14 × 36 = 452,16')}`,
            `<strong>Antwoord:</strong> Oppervlakte = ${gr('452,16 cm²')} ✓`,
          ],
        },
        {
          question: 'ʼn Vierkantige piramide het ʼn basissy van 8 cm en hoogte 12 cm. Vind die volume daarvan.',
          answer: `Volume = ${gr('256 cm³')}`,
          steps: [
            `Skryf die formule: ${or('V = ⅓ × basisoppervlakte × hoogte')}`,
            `Vind die basisoppervlakte: ${bl('basissy = 8 cm')} → ${or('basisoppervlakte = 8 × 8 = 64 cm²')}`,
            `Vervang: ${or('V = ⅓ × 64 × 12')}`,
            `Bereken: ${or('V = ⅓ × 768 = 256')}`,
            `<strong>Antwoord:</strong> Volume = ${gr('256 cm³')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Vind die volume van ʼn silinder met radius 3 cm en hoogte 7 cm. Gebruik π ≈ 3,14.',
          answer: '197,82 cm³',
          checkMode: 'auto',
          correctAnswer: '197,82',
          correctAnswers: ['197.82', '197,82'],
          explanation: 'V = πr²h = 3,14 × 3² × 7 = 3,14 × 9 × 7 = 3,14 × 63 = 197,82 cm³ ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Bereken elk van die volgende. Gebruik π ≈ 3,14.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Oppervlakte van ʼn keël met radius 5 cm en skuinshoogte 13 cm.',
              correctAnswer: '282,6',
              correctAnswers: ['282.6', '282,6'],
              explanation: 'O = πr² + πrl = 3,14 × 25 + 3,14 × 5 × 13 = 78,5 + 204,1 = 282,6 cm² ✓',
            },
            {
              label: 'b) Volume van ʼn sfeer met radius 3 cm.',
              correctAnswer: '113,04',
              correctAnswers: ['113.04', '113,04'],
              explanation: 'V = (4/3)πr³ = (4/3) × 3,14 × 27 = (4/3) × 84,78 = 113,04 cm³ ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Geslote silinder het radius 4 cm en hoogte 10 cm. Gebruik π ≈ 3,14.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Volume (cm³)',
              correctAnswer: '502,4',
              correctAnswers: ['502.4', '502,4'],
              explanation: 'V = πr²h = 3,14 × 16 × 10 = 502,4 cm³ ✓',
            },
            {
              label: 'b) Totale oppervlakte (cm²)',
              correctAnswer: '351,68',
              correctAnswers: ['351.68', '351,68'],
              explanation: 'O = 2πr² + 2πrh = 2 × 3,14 × 16 + 2 × 3,14 × 4 × 10 = 100,48 + 251,2 = 351,68 cm² ✓',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Gemerkte diagramme van ʼn silinder, keël, sfeer en vierkantige piramide wat elk radius, hoogte en skuinshoogte met kleurgekodeerde dimensies wys" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat volume- en oppervlakteformules vir silinders, keëls, sfere en piramides hersien, met kleurgekodeerde uitgewerkte voorbeelde" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMBINING SOLIDS TO FORM COMPLEX SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'combining-solids',
      title: 'Saamgestelde Vaste Voorwerpe vir Komplekse Vorms',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Meer komplekse voorwerpe word gevorm deur <strong>twee of meer basiese vorms saam te voeg</strong> (bv. ʼn silinder met ʼn halfrond bo-op, of ʼn keël wat aan ʼn silinder vasgeheg is). Ons bereken elke komponent apart en kombineer dan die resultate.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('komponent 1 (bv. silinder)')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('komponent 2 (bv. keël)')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('komponent 3 (bv. halfrond)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gekombineerde totaal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('interne verbindingsvlak (uitgesluit)')}</span>` +
        `</div>` +

        // ── Strategy ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategie vir saamgestelde voorwerpe</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Volume:</strong> Bereken die volume van elke komponent apart, en <strong>tel</strong> dan al die volumes bymekaar.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Oppervlakte:</strong> Tel die buitenste oppervlaktes van elke komponent bymekaar, maar <strong>sluit uit</strong> enige verbindingsvlakke wat binne-in die saamgestelde voorwerp is — hierdie ${or('interne vlakke')} is nie deel van die buitenste oppervlak nie.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Interne vlakke identifiseer</p>` +
        `<p style="margin:0;color:#9a3412;">Wanneer twee voorwerpe langs ʼn sirkelvormige vlak saamgevoeg word (bv. ʼn keël bo-op ʼn silinder), word daardie sirkelvormige vlak ${or('intern')} — dit is binne-in die saamgestelde voorwerp en moet <strong>nie</strong> by die oppervlakteberekening ingesluit word nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 3 cm, hoogte 8 cm) met ʼn keël (dieselfde radius, hoogte 4 cm) bo-op. Vind die totale volume.',
          answer: `Totale volume ${gr('≈ 263,76 cm³')}`,
          steps: [
            `Bereken die ${bl('silinder')} se volume: ${bl('V = πr²h = 3,14 × 9 × 8 = 226,08 cm³')}`,
            `Bereken die ${re('keël')} se volume: ${re('V = ⅓πr²h = ⅓ × 3,14 × 9 × 4 ≈ 37,68 cm³')}`,
            `Tel die komponente bymekaar: ${gr('Totaal = 226,08 + 37,68 = 263,76 cm³')}`,
            `<strong>Antwoord:</strong> Totale volume = ${gr('263,76 cm³')} ✓`,
          ],
        },
        {
          question: 'ʼn Kapselvorm bestaan uit ʼn silinder (radius 2 cm, hoogte 10 cm) met ʼn halfrond (dieselfde radius) aan elke punt. Vind die totale volume.',
          answer: `Totale volume ${gr('≈ 159,09 cm³')}`,
          steps: [
            `Bereken die ${bl('silinder')} se volume: ${bl('V = πr²h = 3,14 × 4 × 10 = 125,6 cm³')}`,
            `Twee halfronde is gelyk aan een volle sfeer: ${pu('V = 4/3 πr³ = 4/3 × 3,14 × 8 ≈ 33,49 cm³')}`,
            `Tel die komponente bymekaar: ${gr('Totaal ≈ 125,6 + 33,49 = 159,09 cm³')}`,
            `<strong>Antwoord:</strong> Totale volume = ${gr('159,09 cm³')} ✓`,
          ],
        },
        {
          question: 'Vind die oppervlakte van die saamgestelde voorwerp in Voorbeeld 1 (silinder met keël bo-op), met inagneming dat die verbindingsvlak intern is en nie deel van die buitenste oppervlak nie.',
          answer: `Totale oppervlakte = ${gr('226,08 cm²')}`,
          steps: [
            `${bl('Silinder')} se geboë oppervlak: ${bl('2πrh = 2 × 3,14 × 3 × 8 = 150,72 cm²')}`,
            `${bl('Silinder')} se onderste sirkel (buitenste basis): ${bl('πr² = 3,14 × 9 = 28,26 cm²')}`,
            `${re('Keël')} se skuinshoogte: ${re('l = √(r² + h²) = √(9 + 16) = √25 = 5 cm')}`,
            `${re('Keël')} se geboë oppervlak: ${re('πrl = 3,14 × 3 × 5 = 47,1 cm²')}`,
            `Die ${or('verbindingsvlak (bo van silinder = basis van keël)')} is intern — ${or('sluit dit uit')} van die totaal.`,
            `Totale oppervlakte: ${gr('150,72 + 28,26 + 47,1 = 226,08 cm²')}`,
            `<strong>Antwoord:</strong> Oppervlakte = ${gr('226,08 cm²')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 2 cm, hoogte 5 cm) met ʼn halfrond (radius 2 cm) bo-op. Vind die totale volume. Gebruik π ≈ 3,14.',
          answer: '79,55 cm³',
          checkMode: 'auto',
          correctAnswer: '79,55',
          correctAnswers: ['79.55', '79,55'],
          explanation: 'Silinder: V = 3,14 × 4 × 5 = 62,8 cm³\nHalfrond: V = (1/2) × (4/3) × 3,14 × 8 = (2/3) × 3,14 × 8 ≈ 16,75 cm³\nTotaal ≈ 62,8 + 16,75 = 79,55 cm³ ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Bereken die totale volume van elke saamgestelde voorwerp. Gebruik π ≈ 3,14.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) ʼn Keël (r = 3 cm, h = 4 cm) bo-op ʼn silinder (r = 3 cm, h = 10 cm).',
              correctAnswer: '320,28',
              correctAnswers: ['320.28', '320,28'],
              explanation: 'Silinder: 3,14 × 9 × 10 = 282,6 cm³\nKeël: (1/3) × 3,14 × 9 × 4 = 37,68 cm³\nTotaal: 282,6 + 37,68 = 320,28 cm³ ✓',
            },
            {
              label: 'b) ʼn Sfeer (r = 3 cm) wat op ʼn soliede kubus (sy 6 cm) staan.',
              correctAnswer: '329,04',
              correctAnswers: ['329.04', '329,04'],
              explanation: 'Kubus: 6 × 6 × 6 = 216 cm³\nSfeer: (4/3) × 3,14 × 27 = 113,04 cm³\nTotaal: 216 + 113,04 = 329,04 cm³ ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Voorwerp word gevorm deur ʼn silinder (r = 2 cm, h = 6 cm) en ʼn keël (r = 2 cm, h = 3 cm) bo-op saam te voeg, wat dieselfde sirkelvormige vlak deel. Gebruik π ≈ 3,14.\n\na) Vind die skuinshoogte van die keël (tot 2 desimale plekke).\nb) Vind die totale oppervlakte van die saamgestelde voorwerp (die interne verbindingsvlak uitgesluit).',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skuinshoogte van keël (cm, tot 2 d.p.)',
              correctAnswer: '3,61',
              correctAnswers: ['3.61', '3,61'],
              explanation: 'l = √(r² + h²) = √(4 + 9) = √13 ≈ 3,61 cm ✓',
            },
            {
              label: 'b) Totale oppervlakte (cm², tot 2 d.p.)',
              correctAnswer: '110,60',
              correctAnswers: ['110.60', '110.6', '110,60', '110,6'],
              explanation: 'Silinder geboë: 2 × 3,14 × 2 × 6 = 75,36 cm²\nSilinder onderste sirkel: 3,14 × 4 = 12,56 cm²\nKeël geboë: 3,14 × 2 × 3,61 ≈ 22,68 cm²\nTotaal: 75,36 + 12,56 + 22,68 = 110,60 cm² ✓',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram van ʼn silinder met ʼn keël bo-op wat die interne verbindingsvlak in oranje uitgelig wys, met elke komponent in ʼn ander kleur gemerk" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die volume en oppervlakte van saamgestelde voorwerpe te vind deur elke komponent apart te bereken en interne vlakke te identifiseer wat uitgesluit moet word" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING PROBLEMS WITH MISSING DIMENSIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'missing-dimensions',
      title: 'Probleme Oplos met Ontbrekende Dimensies',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Sommige mensurasieprobleme gee ons die <strong>volume of oppervlakte</strong> en vra ons om ʼn <strong>ontbrekende dimensie</strong> te vind. Ons herrangskik die tersaaklike formule om die onbekende veranderlike op te los voordat ons bekende waardes vervang.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bekende waardes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('herrangskikte formule')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gevonde dimensie')}</span>` +
        `</div>` +

        // ── Steps ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategie om ʼn ontbrekende dimensie te vind</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Skryf die formule</strong> — identifiseer watter voorwerp betrokke is en skryf die formule vir die volume of oppervlakte daarvan neer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Vervang die bekende waardes')} — vervang alles wat jy weet, en los slegs die onbekende veranderlike oor.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Los op vir die onbekende</strong> — herrangskik die vergelyking en ${gr('bereken die ontbrekende dimensie')}, en onthou om eenhede in te sluit.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Gaan na deur terug te vervang</p>` +
        `<p style="margin:0;color:#1e3a8a;">Bevestig altyd jou ${gr('gevonde dimensie')} deur dit terug in die oorspronklike formule te vervang en te bevestig dat dit die gegewe volume of oppervlakte lewer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Silinder het volume 314 cm³ en hoogte 10 cm. Vind die radius daarvan.',
          answer: `Radius = ${gr('√10 ≈ 3,16 cm')}`,
          steps: [
            `Skryf die formule: V = πr²h`,
            `Vervang ${bl('bekende waardes')}: ${bl('314 = 3,14 × r² × 10')}`,
            `Vereenvoudig: ${or('314 = 31,4r²')}`,
            `${or('Herrangskik:')} ${or('r² = 314 ÷ 31,4 = 10')}`,
            `Los op: ${gr('r = √10 ≈ 3,16 cm')}`,
            `<strong>Toets:</strong> 3,14 × 10 × 10 = 314 ✓`,
          ],
        },
        {
          question: 'ʼn Keël het volume 100,48 cm³ en radius 4 cm. Vind die hoogte daarvan.',
          answer: `Hoogte = ${gr('≈ 6 cm')}`,
          steps: [
            `Skryf die formule: V = ⅓πr²h`,
            `Vervang ${bl('bekende waardes')}: ${bl('100,48 = ⅓ × 3,14 × 16 × h')}`,
            `Vereenvoudig: ${or('100,48 = ⅓ × 50,24 × h = 16,75h')} (by benadering)`,
            `${or('Herrangskik:')} ${or('h = 100,48 ÷ 16,75')}`,
            `Los op: ${gr('h ≈ 6 cm')}`,
            `<strong>Toets:</strong> ⅓ × 3,14 × 16 × 6 = ⅓ × 301,44 = 100,48 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Sfeer het ʼn oppervlakte van 314 cm². Vind die radius daarvan. Gebruik π ≈ 3,14.',
          answer: '5 cm',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'O = 4πr²\n314 = 4 × 3,14 × r²\n314 = 12,56r²\nr² = 314 ÷ 12,56 = 25\nr = √25 = 5 cm ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Vind die ontbrekende dimensie in elke geval. Gebruik π ≈ 3,14.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) ʼn Silinder het volume 628 cm³ en radius 5 cm. Vind die hoogte daarvan.',
              correctAnswer: '8',
              explanation: 'V = πr²h → 628 = 3,14 × 25 × h → 628 = 78,5h → h = 628 ÷ 78,5 = 8 cm ✓',
            },
            {
              label: 'b) ʼn Keël het volume 75,36 cm³ en hoogte 6 cm. Vind die radius daarvan (tot 2 d.p.).',
              correctAnswer: '3,46',
              correctAnswers: ['3.46', '3,46'],
              explanation: 'V = ⅓πr²h → 75,36 = ⅓ × 3,14 × r² × 6 → 75,36 = 6,28r² → r² = 12 → r = √12 ≈ 3,46 cm ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Vierkantige piramide het volume 192 cm³ en ʼn vierkantige basis met sylengte 8 cm.\n\na) Vind die hoogte van die piramide.\nb) Verifieer jou antwoord deur dit terug in die formule te vervang.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Hoogte van piramide (cm)',
              correctAnswer: '9',
              explanation: 'V = ⅓ × basisoppervlakte × h\n192 = ⅓ × 64 × h\n192 = (64/3)h\nh = 192 × 3 ÷ 64 = 576 ÷ 64 = 9 cm ✓',
            },
            {
              label: 'b) Verifikasie (skryf die resultaat van die vervangde formule)',
              correctAnswer: '192',
              explanation: 'V = ⅓ × 64 × 9 = ⅓ × 576 = 192 cm³ ✓ — dit stem ooreen met die gegewe volume, dus is h = 9 cm korrek.',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram van ʼn silinder en keël, elk met een afmeting as onbekend gemerk, wat die herrangskikte formule met bekende waardes in kleur ingevul wys" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om volume- en oppervlakteformules te herrangskik om ontbrekende afmetings te vind, met kleurgekodeerde substitusiestappe" />',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-2):   Volume van prisma / silinder / kubus
    // Blok 2 (3-5):   Oppervlakte van silinder / prisma / keël
    // Blok 3 (6-8):   Volume van sfeer / piramide / keël
    // Blok 4 (9-11):  Oppervlakte van sfeer / keël / piramide
    // Blok 5 (12-14): Volume van saamgestelde voorwerpe
    // Blok 6 (15-19): Oppervlakte van saamgestelde voorwerpe, skalering, ontbrekende dimensies
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Volume van prisma / silinder / kubus (Easy)
        { difficulty: 'Easy', question: 'ʼn Reghoekige prisma het lengte 8 cm, breedte 5 cm en hoogte 4 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '160cm³', correctAnswers: ['160cm³', '160', '160 cm³'], answer: '160 cm³', explanation: 'V = lengte × breedte × hoogte = 8 × 5 × 4 = 160 cm³' },
        { difficulty: 'Easy', question: 'ʼn Silinder het radius 4 cm en hoogte 9 cm. Vind die volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '452,16cm³', correctAnswers: ['452.16cm³', '452,16cm³', '452.16', '452,16', '452.16 cm³', '452,16 cm³'], answer: '452,16 cm³', explanation: 'V = πr²h = 3,14 × 4² × 9 = 3,14 × 16 × 9 = 452,16 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 9 cm</text></svg>'},
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 5 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '125cm³', correctAnswers: ['125cm³', '125', '125 cm³'], answer: '125 cm³', explanation: 'V = sy³ = 5³ = 125 cm³' },

        // Blok 2 — Oppervlakte van silinder / prisma / keël (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'ʼn Silinder het radius 5 cm en hoogte 8 cm. Vind die totale oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '408,2cm²', correctAnswers: ['408.2cm²', '408,2cm²', '408.2', '408,2', '408.2 cm²', '408,2 cm²', '408.20cm²', '408,20cm²', '408.20', '408,20'], answer: '408,2 cm²', explanation: 'O = 2πr² + 2πrh = 2 × 3,14 × 25 + 2 × 3,14 × 5 × 8 = 157 + 251,2 = 408,2 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 8 cm</text></svg>'},
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige prisma het lengte 9 cm, breedte 6 cm en hoogte 4 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '228cm²', correctAnswers: ['228cm²', '228', '228 cm²'], answer: '228 cm²', explanation: 'O = 2(lb + lh + bh) = 2(9×6 + 9×4 + 6×4) = 2(54 + 36 + 24) = 228 cm²' },
        { difficulty: 'Easy-Medium', question: 'ʼn Keël het radius 3 cm en skuinshoogte 6 cm. Vind die totale oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '84,78cm²', correctAnswers: ['84.78cm²', '84,78cm²', '84.78', '84,78', '84.78 cm²', '84,78 cm²'], answer: '84,78 cm²', explanation: 'O = πr² + πrl = 3,14 × 9 + 3,14 × 3 × 6 = 28,26 + 56,52 = 84,78 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 6 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text></svg>'},

        // Blok 3 — Volume van sfeer / piramide / keël (Medium)
        { difficulty: 'Medium', question: 'ʼn Sfeer het radius 6 cm. Vind die volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '904,32cm³', correctAnswers: ['904.32cm³', '904,32cm³', '904.32', '904,32', '904.32 cm³', '904,32 cm³'], answer: '904,32 cm³', explanation: 'V = (4/3)πr³ = (4/3) × 3,14 × 216 = 904,32 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Vierkantige piramide het ʼn basissy van 9 cm en hoogte 10 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '270cm³', correctAnswers: ['270cm³', '270', '270 cm³'], answer: '270 cm³', explanation: 'V = ⅓ × basisoppervlakte × hoogte = ⅓ × 81 × 10 = 270 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="147" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="122" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">h = 10 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Keël het radius 5 cm en hoogte 12 cm. Vind die volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '314cm³', correctAnswers: ['314cm³', '314', '314 cm³'], answer: '314 cm³', explanation: 'V = ⅓πr²h = ⅓ × 3,14 × 25 × 12 = 314 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">h = 12 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},

        // Blok 4 — Oppervlakte van sfeer / keël / piramide (Medium)
        { difficulty: 'Medium', question: 'ʼn Sfeer het radius 7 cm. Vind die oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '615,44cm²', correctAnswers: ['615.44cm²', '615,44cm²', '615.44', '615,44', '615.44 cm²', '615,44 cm²'], answer: '615,44 cm²', explanation: 'O = 4πr² = 4 × 3,14 × 49 = 615,44 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Keël het radius 6 cm en skuinshoogte 10 cm. Vind die totale oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '301,44cm²', correctAnswers: ['301.44cm²', '301,44cm²', '301.44', '301,44', '301.44 cm²', '301,44 cm²'], answer: '301,44 cm²', explanation: 'O = πr² + πrl = 3,14 × 36 + 3,14 × 6 × 10 = 113,04 + 188,4 = 301,44 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 10 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Vierkantige piramide het ʼn basissy van 6 cm en skuinshoogte 5 cm (die skuinshoogte van elke driehoekige vlak). Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '96cm²', correctAnswers: ['96cm²', '96', '96 cm²'], answer: '96 cm²', explanation: 'O = basisoppervlakte + 4 × (½ × basissy × skuinshoogte) = 36 + 4 × (½ × 6 × 5) = 36 + 60 = 96 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="147" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="122" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">l = 5 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text></svg>'},

        // Blok 5 — Volume van saamgestelde voorwerpe (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 3 cm, hoogte 8 cm) met ʼn keël (dieselfde radius, hoogte 5 cm) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '273,18cm³', correctAnswers: ['273.18cm³', '273,18cm³', '273.18', '273,18', '273.18 cm³', '273,18 cm³'], answer: '273,18 cm³', explanation: 'Silinder: πr²h = 3,14 × 9 × 8 = 226,08 cm³. Keël: ⅓πr²h = ⅓ × 3,14 × 9 × 5 = 47,1 cm³. Totaal = 226,08 + 47,1 = 273,18 cm³' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 8 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 5 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp bestaan uit ʼn kubus (sy 6 cm) met ʼn halfrond (radius 3 cm) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '272,52cm³', correctAnswers: ['272.52cm³', '272,52cm³', '272.52', '272,52', '272.52 cm³', '272,52 cm³'], answer: '272,52 cm³', explanation: 'Kubus: 6³ = 216 cm³. Halfrond: ½ × (4/3)πr³ = ½ × (4/3) × 3,14 × 27 = 56,52 cm³. Totaal = 216 + 56,52 = 272,52 cm³' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 80,90 A 30,10 0 0 1 140,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,90 A 45,50 0 0 1 110,45 A 45,50 0 0 1 155,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="90" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="90" x2="65" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="90" x2="155" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 0 155,180" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 1 155,180" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="90" x2="153" y2="90" stroke="#2563eb" stroke-width="2"/><text x="132" y="83" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text><text x="110" y="205" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">sy = 6 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 5 cm, hoogte 9 cm) met ʼn keël (dieselfde radius, hoogte 6 cm) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '863,5cm³', correctAnswers: ['863.5cm³', '863,5cm³', '863.5', '863,5', '863.5 cm³', '863,5 cm³', '863.50cm³', '863,50cm³', '863.50', '863,50'], answer: '863,5 cm³', explanation: 'Silinder: πr²h = 3,14 × 25 × 9 = 706,5 cm³. Keël: ⅓πr²h = ⅓ × 3,14 × 25 × 6 = 157 cm³. Totaal = 706,5 + 157 = 863,5 cm³' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 9 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 6 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},

        // Blok 6 — Oppervlakte van saamgestelde voorwerpe, skalering, ontbrekende dimensies (Hard)
        { difficulty: 'Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 3 cm, hoogte 8 cm) met ʼn halfrond (dieselfde radius) bo-op. Vind die totale oppervlakte daarvan, met die interne verbindingsirkel uitgesluit. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '235,5cm²', correctAnswers: ['235.5cm²', '235,5cm²', '235.5', '235,5', '235.5 cm²', '235,5 cm²', '235.50cm²', '235,50cm²', '235.50', '235,50'], answer: '235,5 cm²', explanation: 'Silinder geboë oppervlak: 2πrh = 2 × 3,14 × 3 × 8 = 150,72 cm². Silinder onderste sirkel: πr² = 3,14 × 9 = 28,26 cm². Halfrond geboë oppervlak: 2πr² = 2 × 3,14 × 9 = 56,52 cm². Totaal = 150,72 + 28,26 + 56,52 = 235,5 cm²' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 8 cm</text></svg>'},
        { difficulty: 'Hard', question: 'ʼn Kubus het sylengte 4 cm. Dit word vergroot sodat die nuwe sylengte 12 cm is. Vind die skaalfaktor toegepas op (a) die oppervlakte en (b) die volume.', answer: 'Lineêre skaalfaktor = 12 ÷ 4 = 3. Oppervlakte-skaalfaktor = 3² = 9. Volume-skaalfaktor = 3³ = 27.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="30" width="45" height="35" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="20" y1="45" x2="45" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="65" y1="45" x2="90" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="65" y1="80" x2="90" y2="65" stroke="#0f1f3d" stroke-width="1.4"/><rect x="20" y="45" width="45" height="35" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="42" y="98" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="55" y="115" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Original</text><line x1="105" y1="90" x2="150" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSc2)"/><defs><marker id="arrowSc2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><rect x="200" y="15" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="170" y1="33" x2="200" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="260" y1="33" x2="290" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="260" y1="103" x2="290" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="170" y="33" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="215" y="122" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="215" y="150" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Scaled</text></svg>'},
        { difficulty: 'Hard', question: 'ʼn Sfeer het ʼn oppervlakte van 452,16 cm². Vind die radius daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '6cm', correctAnswers: ['6cm', '6', '6 cm', '6.0cm', '6,0cm', '6.0', '6,0'], answer: '6 cm', explanation: 'O = 4πr² → 452,16 = 4 × 3,14 × r² → 452,16 = 12,56r² → r² = 36 → r = 6 cm' },
        { difficulty: 'Hard', question: 'ʼn Vierkantige piramide het ʼn basissy van 6 cm en volume 216 cm³. Vind die hoogte daarvan.', checkMode: 'auto', correctAnswer: '18cm', correctAnswers: ['18cm', '18', '18 cm'], answer: '18 cm', explanation: 'V = ⅓ × basisoppervlakte × h → 216 = ⅓ × 36 × h → 216 = 12h → h = 18 cm' },
        { difficulty: 'Hard', question: 'Lerato sê dat om die radius van ʼn sfeer te verdubbel (terwyl dit ʼn sfeer bly) die volume daarvan met 8 vermenigvuldig. Is sy korrek? Verduidelik met verwysing na die volumeformule.', answer: 'Ja — aangesien V = (4/3)πr³ van r in die derde mag afhang, vermenigvuldig die verdubbeling van die radius die volume met 2³ = 8, wat haar stelling bevestig.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het mensurasie vir prismas, silinders, sfere, keëls en piramides bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor saamgestelde voorwerpe of skalering weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde oor volume en oppervlakte weer deur, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Volume van prisma / silinder / kubus (Easy)
        { difficulty: 'Easy', question: 'ʼn Reghoekige prisma het lengte 12 cm, breedte 5 cm en hoogte 3 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '180cm³', correctAnswers: ['180cm³', '180', '180 cm³'], answer: '180 cm³', explanation: 'V = lengte × breedte × hoogte = 12 × 5 × 3 = 180 cm³' },
        { difficulty: 'Easy', question: 'ʼn Silinder het radius 5 cm en hoogte 6 cm. Vind die volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '471cm³', correctAnswers: ['471cm³', '471', '471 cm³'], answer: '471 cm³', explanation: 'V = πr²h = 3,14 × 5² × 6 = 3,14 × 25 × 6 = 471 cm³' },
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 7 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '343cm³', correctAnswers: ['343cm³', '343', '343 cm³'], answer: '343 cm³', explanation: 'V = sy³ = 7³ = 343 cm³' },

        // Blok 2 — Oppervlakte van silinder / prisma / keël (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'ʼn Silinder het radius 4 cm en hoogte 9 cm. Vind die totale oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '326,56cm²', correctAnswers: ['326.56cm²', '326,56cm²', '326.56', '326,56', '326.56 cm²', '326,56 cm²'], answer: '326,56 cm²', explanation: 'O = 2πr² + 2πrh = 2 × 3,14 × 16 + 2 × 3,14 × 4 × 9 = 100,48 + 226,08 = 326,56 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 9 cm</text></svg>'},
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige prisma het lengte 10 cm, breedte 4 cm en hoogte 3 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '164cm²', correctAnswers: ['164cm²', '164', '164 cm²'], answer: '164 cm²', explanation: 'O = 2(lb + lh + bh) = 2(10×4 + 10×3 + 4×3) = 2(40 + 30 + 12) = 164 cm²' },
        { difficulty: 'Easy-Medium', question: 'ʼn Keël het radius 4 cm en skuinshoogte 7 cm. Vind die totale oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '138,16cm²', correctAnswers: ['138.16cm²', '138,16cm²', '138.16', '138,16', '138.16 cm²', '138,16 cm²'], answer: '138,16 cm²', explanation: 'O = πr² + πrl = 3,14 × 16 + 3,14 × 4 × 7 = 50,24 + 87,92 = 138,16 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 7 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},

        // Blok 3 — Volume van sfeer / piramide / keël (Medium)
        { difficulty: 'Medium', question: 'ʼn Sfeer het radius 4,5 cm. Vind die volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '381,51cm³', correctAnswers: ['381.51cm³', '381,51cm³', '381.51', '381,51', '381.51 cm³', '381,51 cm³'], answer: '381,51 cm³', explanation: 'V = (4/3)πr³ = (4/3) × 3,14 × 91,125 ≈ 381,51 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4,5 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Vierkantige piramide het ʼn basissy van 8 cm en hoogte 9 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '192cm³', correctAnswers: ['192cm³', '192', '192 cm³'], answer: '192 cm³', explanation: 'V = ⅓ × basisoppervlakte × hoogte = ⅓ × 64 × 9 = 192 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="147" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="122" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">h = 9 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Keël het radius 6 cm en hoogte 10 cm. Vind die volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '376,8cm³', correctAnswers: ['376.8cm³', '376,8cm³', '376.8', '376,8', '376.8 cm³', '376,8 cm³', '376.80cm³', '376,80cm³', '376.80', '376,80'], answer: '376,8 cm³', explanation: 'V = ⅓πr²h = ⅓ × 3,14 × 36 × 10 = 376,8 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">h = 10 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text></svg>'},

        // Blok 4 — Oppervlakte van sfeer / keël / piramide (Medium)
        { difficulty: 'Medium', question: 'ʼn Sfeer het radius 9 cm. Vind die oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '1017,36cm²', correctAnswers: ['1017.36cm²', '1017,36cm²', '1017.36', '1017,36', '1017.36 cm²', '1017,36 cm²', '1 017.36cm²', '1 017,36cm²', '1 017.36', '1 017,36'], answer: '1 017,36 cm²', explanation: 'O = 4πr² = 4 × 3,14 × 81 = 1 017,36 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 9 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Keël het radius 5 cm en skuinshoogte 8 cm. Vind die totale oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '204,1cm²', correctAnswers: ['204.1cm²', '204,1cm²', '204.1', '204,1', '204.1 cm²', '204,1 cm²', '204.10cm²', '204,10cm²', '204.10', '204,10'], answer: '204,1 cm²', explanation: 'O = πr² + πrl = 3,14 × 25 + 3,14 × 5 × 8 = 78,5 + 125,6 = 204,1 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 8 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Vierkantige piramide het ʼn basissy van 8 cm en skuinshoogte 6 cm (die skuinshoogte van elke driehoekige vlak). Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '160cm²', correctAnswers: ['160cm²', '160', '160 cm²'], answer: '160 cm²', explanation: 'O = basisoppervlakte + 4 × (½ × basissy × skuinshoogte) = 64 + 4 × (½ × 8 × 6) = 64 + 96 = 160 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="147" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="122" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">l = 6 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text></svg>'},

        // Blok 5 — Volume van saamgestelde voorwerpe (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 4 cm, hoogte 10 cm) met ʼn keël (dieselfde radius, hoogte 6 cm) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '602,88cm³', correctAnswers: ['602.88cm³', '602,88cm³', '602.88', '602,88', '602.88 cm³', '602,88 cm³'], answer: '602,88 cm³', explanation: 'Silinder: πr²h = 3,14 × 16 × 10 = 502,4 cm³. Keël: ⅓πr²h = ⅓ × 3,14 × 16 × 6 = 100,48 cm³. Totaal = 502,4 + 100,48 = 602,88 cm³' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 10 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 6 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp bestaan uit ʼn kubus (sy 5 cm) met ʼn halfrond (radius 2,5 cm) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '157,71cm³', correctAnswers: ['157.71cm³', '157,71cm³', '157.71', '157,71', '157.71 cm³', '157,71 cm³'], answer: '157,71 cm³', explanation: 'Kubus: 5³ = 125 cm³. Halfrond: ½ × (4/3)πr³ = ½ × (4/3) × 3,14 × 15,625 ≈ 32,71 cm³. Totaal ≈ 125 + 32,71 = 157,71 cm³' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 80,90 A 30,10 0 0 1 140,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,90 A 45,50 0 0 1 110,45 A 45,50 0 0 1 155,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="90" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="90" x2="65" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="90" x2="155" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 0 155,180" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 1 155,180" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="90" x2="153" y2="90" stroke="#2563eb" stroke-width="2"/><text x="132" y="83" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2,5 cm</text><text x="110" y="205" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">sy = 5 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 6 cm, hoogte 7 cm) met ʼn keël (dieselfde radius, hoogte 5 cm) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '979,68cm³', correctAnswers: ['979.68cm³', '979,68cm³', '979.68', '979,68', '979.68 cm³', '979,68 cm³'], answer: '979,68 cm³', explanation: 'Silinder: πr²h = 3,14 × 36 × 7 = 791,28 cm³. Keël: ⅓πr²h = ⅓ × 3,14 × 36 × 5 = 188,4 cm³. Totaal = 791,28 + 188,4 = 979,68 cm³' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 7 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 5 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text></svg>'},

        // Blok 6 — Oppervlakte van saamgestelde voorwerpe, skalering, ontbrekende dimensies (Hard)
        { difficulty: 'Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 4 cm, hoogte 10 cm) met ʼn keël (dieselfde radius, hoogte 3 cm) bo-op. Vind die totale oppervlakte daarvan, met die interne verbindingsirkel uitgesluit. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '364,24cm²', correctAnswers: ['364.24cm²', '364,24cm²', '364.24', '364,24', '364.24 cm²', '364,24 cm²'], answer: '364,24 cm²', explanation: 'Keël skuinshoogte: l = √(4² + 3²) = √25 = 5 cm. Silinder geboë oppervlak: 2πrh = 2 × 3,14 × 4 × 10 = 251,2 cm². Silinder onderste sirkel: πr² = 3,14 × 16 = 50,24 cm². Keël geboë oppervlak: πrl = 3,14 × 4 × 5 = 62,8 cm². Totaal = 251,2 + 50,24 + 62,8 = 364,24 cm²' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 10 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 3 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},
        { difficulty: 'Hard', question: 'ʼn Sfeer het radius 2 cm. Dit word vergroot sodat die nuwe radius 6 cm is. Vind die skaalfaktor toegepas op (a) die oppervlakte en (b) die volume.', answer: 'Lineêre skaalfaktor = 6 ÷ 2 = 3. Oppervlakte-skaalfaktor = 3² = 9. Volume-skaalfaktor = 3³ = 27.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg"><circle cx="55" cy="65" r="30" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><ellipse cx="55" cy="65" rx="30" ry="9" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="55" y="105" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 cm</text><text x="55" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Original</text><line x1="105" y1="65" x2="150" y2="65" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSc3)"/><defs><marker id="arrowSc3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><circle cx="245" cy="65" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><ellipse cx="245" cy="65" rx="65" ry="18" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="245" y="150" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text><text x="245" y="170" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Scaled</text></svg>'},
        { difficulty: 'Hard', question: 'ʼn Keël het volume 113,04 cm³ en radius 3 cm. Vind die hoogte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '12cm', correctAnswers: ['12cm', '12', '12 cm'], answer: '12 cm', explanation: 'V = ⅓πr²h → 113,04 = ⅓ × 3,14 × 9 × h → 113,04 = 9,42h → h = 12 cm' },
        { difficulty: 'Hard', question: 'ʼn Keël het volume 392,5 cm³ en radius 5 cm. Vind die hoogte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15', '15 cm'], answer: '15 cm', explanation: 'V = ⅓πr²h → 392,5 = ⅓ × 3,14 × 25 × h → 392,5 = 26,1666...h → h = 15 cm' },
        { difficulty: 'Hard', question: 'Sipho sê dat om die hoogte van ʼn keël te verdriedubbel (terwyl die radius dieselfde bly) die volume daarvan met 3 vermenigvuldig. Is hy korrek? Verduidelik met verwysing na die volumeformule.', answer: 'Ja — aangesien V = ⅓πr²h slegs van h tot die eerste mag afhang (nie r nie), vermenigvuldig die verdriedubbeling van die hoogte die volume presies met 3, wat sy stelling bevestig.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het mensurasie vir prismas, silinders, sfere, keëls en piramides bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor saamgestelde voorwerpe of skalering weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde oor volume en oppervlakte weer deur, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Volume van prisma / silinder / kubus (Easy)
        { difficulty: 'Easy', question: 'ʼn Reghoekige prisma het lengte 11 cm, breedte 4 cm en hoogte 6 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '264cm³', correctAnswers: ['264cm³', '264', '264 cm³'], answer: '264 cm³', explanation: 'V = lengte × breedte × hoogte = 11 × 4 × 6 = 264 cm³' },
        { difficulty: 'Easy', question: 'ʼn Silinder het radius 2 cm en hoogte 12 cm. Vind die volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '150,72cm³', correctAnswers: ['150.72cm³', '150,72cm³', '150.72', '150,72', '150.72 cm³', '150,72 cm³'], answer: '150,72 cm³', explanation: 'V = πr²h = 3,14 × 2² × 12 = 3,14 × 4 × 12 = 150,72 cm³' },
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 9 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '729cm³', correctAnswers: ['729cm³', '729', '729 cm³'], answer: '729 cm³', explanation: 'V = sy³ = 9³ = 729 cm³' },

        // Blok 2 — Oppervlakte van silinder / prisma / keël (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'ʼn Silinder het radius 6 cm en hoogte 5 cm. Vind die totale oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '414,48cm²', correctAnswers: ['414.48cm²', '414,48cm²', '414.48', '414,48', '414.48 cm²', '414,48 cm²'], answer: '414,48 cm²', explanation: 'O = 2πr² + 2πrh = 2 × 3,14 × 36 + 2 × 3,14 × 6 × 5 = 226,08 + 188,4 = 414,48 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 5 cm</text></svg>'},
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige prisma het lengte 12 cm, breedte 5 cm en hoogte 2 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '188cm²', correctAnswers: ['188cm²', '188', '188 cm²'], answer: '188 cm²', explanation: 'O = 2(lb + lh + bh) = 2(12×5 + 12×2 + 5×2) = 2(60 + 24 + 10) = 188 cm²' },
        { difficulty: 'Easy-Medium', question: 'ʼn Keël het radius 5 cm en skuinshoogte 9 cm. Vind die totale oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '219,8cm²', correctAnswers: ['219.8cm²', '219,8cm²', '219.8', '219,8', '219.8 cm²', '219,8 cm²', '219.80cm²', '219,80cm²', '219.80', '219,80'], answer: '219,8 cm²', explanation: 'O = πr² + πrl = 3,14 × 25 + 3,14 × 5 × 9 = 78,5 + 141,3 = 219,8 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 9 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},

        // Blok 3 — Volume van sfeer / piramide / keël (Medium)
        { difficulty: 'Medium', question: 'ʼn Sfeer het radius 3 cm. Vind die volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '113,04cm³', correctAnswers: ['113.04cm³', '113,04cm³', '113.04', '113,04', '113.04 cm³', '113,04 cm³'], answer: '113,04 cm³', explanation: 'V = (4/3)πr³ = (4/3) × 3,14 × 27 = 113,04 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Vierkantige piramide het ʼn basissy van 10 cm en hoogte 6 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '200cm³', correctAnswers: ['200cm³', '200', '200 cm³'], answer: '200 cm³', explanation: 'V = ⅓ × basisoppervlakte × hoogte = ⅓ × 100 × 6 = 200 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="147" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="122" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">h = 6 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Keël het radius 4 cm en hoogte 15 cm. Vind die volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '251,2cm³', correctAnswers: ['251.2cm³', '251,2cm³', '251.2', '251,2', '251.2 cm³', '251,2 cm³', '251.20cm³', '251,20cm³', '251.20', '251,20'], answer: '251,2 cm³', explanation: 'V = ⅓πr²h = ⅓ × 3,14 × 16 × 15 = 251,2 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">h = 15 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},

        // Blok 4 — Oppervlakte van sfeer / keël / piramide (Medium)
        { difficulty: 'Medium', question: 'ʼn Sfeer het radius 4 cm. Vind die oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '200,96cm²', correctAnswers: ['200.96cm²', '200,96cm²', '200.96', '200,96', '200.96 cm²', '200,96 cm²'], answer: '200,96 cm²', explanation: 'O = 4πr² = 4 × 3,14 × 16 = 200,96 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Keël het radius 7 cm en skuinshoogte 12 cm. Vind die totale oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '417,62cm²', correctAnswers: ['417.62cm²', '417,62cm²', '417.62', '417,62', '417.62 cm²', '417,62 cm²'], answer: '417,62 cm²', explanation: 'O = πr² + πrl = 3,14 × 49 + 3,14 × 7 × 12 = 153,86 + 263,76 = 417,62 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 12 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Vierkantige piramide het ʼn basissy van 10 cm en skuinshoogte 13 cm (die skuinshoogte van elke driehoekige vlak). Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '360cm²', correctAnswers: ['360cm²', '360', '360 cm²'], answer: '360 cm²', explanation: 'O = basisoppervlakte + 4 × (½ × basissy × skuinshoogte) = 100 + 4 × (½ × 10 × 13) = 100 + 260 = 360 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="147" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="122" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">l = 13 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text></svg>'},

        // Blok 5 — Volume van saamgestelde voorwerpe (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 5 cm, hoogte 6 cm) met ʼn keël (dieselfde radius, hoogte 9 cm) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '706,5cm³', correctAnswers: ['706.5cm³', '706,5cm³', '706.5', '706,5', '706.5 cm³', '706,5 cm³', '706.50cm³', '706,50cm³', '706.50', '706,50'], answer: '706,5 cm³', explanation: 'Silinder: πr²h = 3,14 × 25 × 6 = 471 cm³. Keël: ⅓πr²h = ⅓ × 3,14 × 25 × 9 = 235,5 cm³. Totaal = 471 + 235,5 = 706,5 cm³' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 6 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 9 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp bestaan uit ʼn kubus (sy 4 cm) met ʼn halfrond (radius 2 cm) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '80,75cm³', correctAnswers: ['80.75cm³', '80,75cm³', '80.75', '80,75', '80.75 cm³', '80,75 cm³'], answer: '80,75 cm³', explanation: 'Kubus: 4³ = 64 cm³. Halfrond: ½ × (4/3)πr³ = ½ × (4/3) × 3,14 × 8 ≈ 16,75 cm³. Totaal ≈ 64 + 16,75 = 80,75 cm³' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 80,90 A 30,10 0 0 1 140,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,90 A 45,50 0 0 1 110,45 A 45,50 0 0 1 155,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="90" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="90" x2="65" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="90" x2="155" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 0 155,180" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 1 155,180" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="90" x2="153" y2="90" stroke="#2563eb" stroke-width="2"/><text x="132" y="83" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 cm</text><text x="110" y="205" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">sy = 4 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 7 cm, hoogte 8 cm) met ʼn keël (dieselfde radius, hoogte 6 cm) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '1538,6cm³', correctAnswers: ['1538.6cm³', '1538,6cm³', '1538.6', '1538,6', '1538.6 cm³', '1538,6 cm³', '1 538.6cm³', '1 538,6cm³', '1 538.6', '1 538,6', '1538.60cm³', '1538,60cm³', '1 538.60', '1 538,60'], answer: '1 538,6 cm³', explanation: 'Silinder: πr²h = 3,14 × 49 × 8 = 1 230,88 cm³. Keël: ⅓πr²h = ⅓ × 3,14 × 49 × 6 = 307,72 cm³. Totaal = 1 230,88 + 307,72 = 1 538,6 cm³' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 8 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 6 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 cm</text></svg>'},

        // Blok 6 — Oppervlakte van saamgestelde voorwerpe, skalering, ontbrekende dimensies (Hard)
        { difficulty: 'Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 2 cm, hoogte 9 cm) met ʼn halfrond (dieselfde radius) bo-op. Vind die totale oppervlakte daarvan, met die interne verbindingsirkel uitgesluit. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '150,72cm²', correctAnswers: ['150.72cm²', '150,72cm²', '150.72', '150,72', '150.72 cm²', '150,72 cm²'], answer: '150,72 cm²', explanation: 'Silinder geboë oppervlak: 2πrh = 2 × 3,14 × 2 × 9 = 113,04 cm². Silinder onderste sirkel: πr² = 3,14 × 4 = 12,56 cm². Halfrond geboë oppervlak: 2πr² = 2 × 3,14 × 4 = 25,12 cm². Totaal = 113,04 + 12,56 + 25,12 = 150,72 cm²' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 cm</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 9 cm</text></svg>'},
        { difficulty: 'Hard', question: 'ʼn Silinder het radius 3 cm en hoogte 5 cm. Albei dimensies word met ʼn skaalfaktor van 4 vergroot (nuwe radius 12 cm, nuwe hoogte 20 cm). Vind die skaalfaktor toegepas op (a) die oppervlakte en (b) die volume.', answer: 'Lineêre skaalfaktor = 4. Oppervlakte-skaalfaktor = 4² = 16. Volume-skaalfaktor = 4³ = 64.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg"><ellipse cx="55" cy="35" rx="25" ry="9" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><line x1="30" y1="35" x2="30" y2="90" stroke="#0f1f3d" stroke-width="2.2"/><line x1="80" y1="35" x2="80" y2="90" stroke="#0f1f3d" stroke-width="2.2"/><path d="M 30,90 A 25,9 0 0 0 80,90" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><path d="M 30,90 A 25,9 0 0 1 80,90" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="55" y="115" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">r=3,h=5</text><text x="55" y="131" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Original</text><line x1="105" y1="90" x2="150" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSc4)"/><defs><marker id="arrowSc4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><ellipse cx="270" cy="30" rx="70" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><line x1="200" y1="30" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2.2"/><line x1="340" y1="30" x2="340" y2="140" stroke="#0f1f3d" stroke-width="2.2"/><path d="M 200,140 A 70,18 0 0 0 340,140" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><path d="M 200,140 A 70,18 0 0 1 340,140" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="270" y="178" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r=12 cm, h=20 cm</text><text x="270" y="196" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Scaled</text></svg>'},
        { difficulty: 'Hard', question: 'ʼn Silinder het volume 1 256 cm³ en radius 10 cm. Vind die hoogte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '4cm', correctAnswers: ['4cm', '4', '4 cm'], answer: '4 cm', explanation: 'V = πr²h → 1 256 = 3,14 × 100 × h → 1 256 = 314h → h = 4 cm' },
        { difficulty: 'Hard', question: 'ʼn Sfeer het volume 113,04 cm³. Vind die radius daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', correctAnswer: '3cm', correctAnswers: ['3cm', '3', '3 cm'], answer: '3 cm', explanation: 'V = (4/3)πr³ → 113,04 = (4/3) × 3,14 × r³ → r³ = 113,04 ÷ 4,18666... = 27 → r = ∛27 = 3 cm' },
        { difficulty: 'Hard', question: 'Amahle sê dat om die radius van ʼn silinder te halveer (terwyl die hoogte dieselfde bly) verminder die volume daarvan tot ʼn kwart van die oorspronklike. Is sy korrek? Verduidelik met verwysing na die volumeformule.', answer: 'Ja — aangesien V = πr²h van r in die kwadraat afhang, vermenigvuldig die halvering van die radius die volume met (½)² = ¼, wat haar stelling bevestig.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het mensurasie vir prismas, silinders, sfere, keëls en piramides bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor saamgestelde voorwerpe of skalering weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde oor volume en oppervlakte weer deur, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  topicPractice: [
    // ── Q1 Easy — volume of cylinder ─────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die volume van ʼn silinder met radius 5 cm en hoogte 12 cm. Gebruik π ≈ 3,14.',
      answer: '942 cm³',
      checkMode: 'auto',
      correctAnswer: '942',
      explanation: 'V = πr²h = 3,14 × 25 × 12 = 942 cm³ ✓',
    },

    // ── Q2 Medium — surface area of sphere ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die oppervlakte van ʼn sfeer met radius 7 cm. Gebruik π ≈ 3,14.',
      answer: '615,44 cm²',
      checkMode: 'auto',
      correctAnswer: '615,44',
      correctAnswers: ['615.44', '615,44'],
      explanation: 'O = 4πr² = 4 × 3,14 × 49 = 615,44 cm² ✓',
    },

    // ── Q3 Hard — check Sipho's cone calculation ──────────────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho bereken die volume van ʼn keël met radius 3 cm en hoogte 8 cm en kry 75,36 cm³. Gaan sy antwoord na.",
      answer: 'Volume = ⅓ × 3,14 × 9 × 8 = 75,36 cm³. Hy is korrek.',
      checkMode: 'self',
    },

    // ── Q4 Easy — volume of square pyramid ───────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die volume van ʼn vierkantige piramide met basissy 6 cm en hoogte 10 cm.',
      answer: '120 cm³',
      checkMode: 'auto',
      correctAnswer: '120',
      explanation: 'V = ⅓ × basisoppervlakte × hoogte = ⅓ × 36 × 10 = 120 cm³ ✓',
    },

    // ── Q5 Medium — volume of sphere ─────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die volume van ʼn sfeer met radius 4,5 cm. Gebruik π ≈ 3,14.',
      answer: '381,51 cm³',
      checkMode: 'auto',
      correctAnswer: '381,51',
      correctAnswers: ['381.51', '381,51'],
      explanation: 'V = (4/3)πr³ = (4/3) × 3,14 × 4,5³ = (4/3) × 3,14 × 91,125 ≈ 381,51 cm³ ✓',
    },

    // ── Q6 Hard — combined solid volume ──────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Voorwerp is ʼn silinder (radius 4 cm, hoogte 12 cm) met ʼn halfrond (dieselfde radius) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.',
      answer: 'Silinder = πr²h = 3,14 × 16 × 12 = 602,88 cm³. Halfrond = ½ × (4/3)πr³ = ½ × (4/3) × 3,14 × 64 ≈ 133,97 cm³. Totaal ≈ 736,85 cm³.',
      checkMode: 'self',
    },

    // ── Q7 Medium — capsule volume ────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Kapsule het ʼn silinder (radius 3 cm, hoogte 15 cm) met ʼn halfrond aan elke punt. Vind die totale volume. Gebruik π ≈ 3,14.',
      answer: '537,21 cm³',
      checkMode: 'auto',
      correctAnswer: '537,21',
      correctAnswers: ['537.21', '537,21'],
      explanation: 'Silinder: 3,14 × 9 × 15 = 423,9 cm³\nTwee halfronde = een sfeer: (4/3) × 3,14 × 27 ≈ 113,31 cm³\nTotaal ≈ 537,21 cm³ ✓',
    },

    // ── Q8 Hard — surface area of cone ───────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die oppervlakte van ʼn keël met radius 5 cm en skuinshoogte 13 cm. Gebruik π ≈ 3,14.',
      answer: 'Oppervlakte = πr² + πrl = 3,14 × 25 + 3,14 × 5 × 13 = 78,5 + 204,1 = 282,6 cm².',
      checkMode: 'self',
    },

    // ── Q9 Hard — Lerato's claim about combining cylinders ────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê om twee silinders punt-aan-punt saam te voeg verdubbel die oppervlakte van een silinder. Is sy korrek? Verduidelik.',
      answer: 'Nee — wanneer saamgevoeg, word die twee sirkelvormige vlakke waar hulle verbind intern en is nie meer deel van die buitenste oppervlak nie, dus is die totale oppervlakte minder as dubbel.',
      checkMode: 'self',
    },

    // ── Q10 Easy — find radius of cylinder ───────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Silinder het volume 251,2 cm³ en hoogte 8 cm. Vind die radius daarvan. Gebruik π ≈ 3,14.',
      answer: '3,16 cm',
      checkMode: 'auto',
      correctAnswer: '3,16',
      correctAnswers: ['3.16', '3,16'],
      explanation: 'V = πr²h → 251,2 = 3,14 × r² × 8 → r² = 251,2 ÷ 25,12 = 10 → r = √10 ≈ 3,16 cm ✓',
    },

    // ── Q11 Medium — find radius of cone ─────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Keël het volume 188,4 cm³ en hoogte 9 cm. Vind die radius daarvan (afgerond tot 2 desimale plekke). Gebruik π ≈ 3,14.',
      answer: '4,47 cm',
      checkMode: 'auto',
      correctAnswer: '4,47',
      correctAnswers: ['4.47', '4,47'],
      explanation: 'V = ⅓πr²h → 188,4 = ⅓ × 3,14 × r² × 9 → 188,4 = 9,42r² → r² = 20 → r = √20 ≈ 4,47 cm ✓',
    },

    // ── Q12 Hard — find radius from sphere surface area ───────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Sfeer het oppervlakte 314 cm². Vind die radius daarvan. Gebruik π ≈ 3,14.',
      answer: '314 = 4πr². r² = 314 ÷ (4 × 3,14) = 25. r = 5 cm.',
      checkMode: 'self',
    },

    // ── Q13 Hard — find height of pyramid ────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo se piramide het ʼn vierkantige basis met sy 5 cm en volume 100 cm³. Vind die hoogte daarvan.",
      answer: 'Volume = ⅓ × basisoppervlakte × hoogte. 100 = ⅓ × 25 × h. h = 12 cm.',
      checkMode: 'self',
    },

    // ── Q14 Hard — volume of combined solid ──────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Voorwerp bestaan uit ʼn keël (radius 5 cm, hoogte 12 cm) bo-op ʼn silinder (dieselfde radius, hoogte 8 cm). Vind die totale volume. Gebruik π ≈ 3,14.',
      answer: '942 cm³',
      checkMode: 'auto',
      correctAnswer: '942',
      explanation: 'Keël: ⅓ × 3,14 × 25 × 12 = 314 cm³\nSilinder: 3,14 × 25 × 8 = 628 cm³\nTotaal: 314 + 628 = 942 cm³ ✓',
    },

    // ── Q15 Hard — surface area of combined solid ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die oppervlakte van die saamgestelde voorwerp in V14, met die interne verbindingsirkel uitgesluit. Gebruik π ≈ 3,14.',
      answer: 'Keël skuinshoogte = √(5² + 12²) = 13 cm. Keël geboë oppervlak = πrl = 3,14 × 5 × 13 = 204,1 cm². Silinder geboë oppervlak = 2πrh = 2 × 3,14 × 5 × 8 = 251,2 cm². Silinder onderkant = πr² = 78,5 cm². Totaal = 204,1 + 251,2 + 78,5 = 533,8 cm².',
      checkMode: 'self',
    },

    // ── Q16 Hard — find radius from sphere volume ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle wil die radius van ʼn sfeer met volume 904,32 cm³ vind. Vind r, afgerond tot 1 desimale plek. Gebruik π ≈ 3,14.',
      answer: '6,0 cm',
      checkMode: 'auto',
      correctAnswer: '6,0',
      correctAnswers: ['6.0', '6', '6,0'],
      explanation: 'V = (4/3)πr³ → 904,32 = (4/3) × 3,14 × r³ → r³ = 216 → r = ∛216 = 6,0 cm ✓',
    },

    // ── Q17 Hard — Sipho's claim about hemisphere surface area ────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê ʼn halfrond het presies die helfte van die oppervlakte van ʼn volle sfeer met dieselfde radius. Is hy korrek? Verduidelik.',
      answer: "Nee — ʼn halfrond se totale oppervlakte sluit die geboë helfte in (2πr², wat die helfte van 4πr² is) PLUS die plat sirkelvormige basis (πr²), wat dit meer as die helfte van die volle sfeer se oppervlakte maak.",
      checkMode: 'self',
    },

    // ── Q18 Hard — total surface area of hemisphere ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die totale oppervlakte van ʼn halfrond met radius 6 cm, met die plat sirkelvormige basis ingesluit. Gebruik π ≈ 3,14.',
      answer: 'Geboë deel = 2πr² = 2 × 3,14 × 36 = 226,08 cm². Plat basis = πr² = 3,14 × 36 = 113,04 cm². Totaal = 226,08 + 113,04 = 339,12 cm².',
      checkMode: 'self',
    },

    // ── Q19 Hard — water tank total volume ───────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Watertenk is ʼn silinder (radius 1,5 m, hoogte 3 m) met ʼn keëlvormige bopunt (dieselfde radius, hoogte 1 m) vir dreinering. Vind die totale volume in kubieke meter. Gebruik π ≈ 3,14.',
      answer: '23,83 m³',
      checkMode: 'auto',
      correctAnswer: '23,83',
      correctAnswers: ['23.83', '23,83'],
      explanation: 'Silinder: 3,14 × 1,5² × 3 = 21,195 m³\nKeël: ⅓ × 3,14 × 1,5² × 1 = 2,355 m³\nTotaal ≈ 23,83 m³ ✓',
    },

    // ── Q20 Hard — Lerato's claim about doubling radius ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê om die radius van ʼn keël te verdubbel (terwyl die hoogte konstant bly) vervierdubbel die volume daarvan. Is sy korrek? Verduidelik met berekeninge.',
      answer: 'Ja — aangesien volume van radius in die kwadraat afhang (Volume = ⅓πr²h), vermenigvuldig die verdubbeling van die radius die volume met 2² = 4, wat haar stelling bevestig.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het mensurasie bemeester.' },
      { minScore: 15, message: 'Goeie werk!' },
      { minScore: 10, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },

  scoreMessages: [
    { minScore: 18, message: 'Uitstekend! ʼn Perfekte telling — jy het mensurasie vir Graad 10 volkome bemeester. Hou so aan!' },
    { minScore: 14, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van mensurasie. Gaan enige gemiste dele weer deur en jy sal dit perfek kry.' },
    { minScore: 10, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
    { minScore: 6, message: 'Goeie poging! Werk weer deur die studiegids en voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: "Moenie tou opgooi nie — mensurasie verg oefening! Gaan die formules en voorbeelde afdeling vir afdeling weer deur, en probeer dan weer." },
  ],
}
