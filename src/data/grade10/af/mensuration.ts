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
          correctAnswer: '197.82',
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
              correctAnswer: '282.6',
              correctAnswers: ['282.6', '282,6'],
              explanation: 'O = πr² + πrl = 3,14 × 25 + 3,14 × 5 × 13 = 78,5 + 204,1 = 282,6 cm² ✓',
            },
            {
              label: 'b) Volume van ʼn sfeer met radius 3 cm.',
              correctAnswer: '113.04',
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
              correctAnswer: '502.4',
              correctAnswers: ['502.4', '502,4'],
              explanation: 'V = πr²h = 3,14 × 16 × 10 = 502,4 cm³ ✓',
            },
            {
              label: 'b) Totale oppervlakte (cm²)',
              correctAnswer: '351.68',
              correctAnswers: ['351.68', '351,68'],
              explanation: 'O = 2πr² + 2πrh = 2 × 3,14 × 16 + 2 × 3,14 × 4 × 10 = 100,48 + 251,2 = 351,68 cm² ✓',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Labelled diagrams of a cylinder, cone, sphere and square pyramid each showing radius, height and slant height with colour coded dimensions" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video revising volume and surface area formulae for cylinders, cones, spheres and pyramids with colour coded worked examples" />',
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
          correctAnswer: '79.55',
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
              correctAnswer: '320.28',
              correctAnswers: ['320.28', '320,28'],
              explanation: 'Silinder: 3,14 × 9 × 10 = 282,6 cm³\nKeël: (1/3) × 3,14 × 9 × 4 = 37,68 cm³\nTotaal: 282,6 + 37,68 = 320,28 cm³ ✓',
            },
            {
              label: 'b) ʼn Sfeer (r = 3 cm) wat op ʼn soliede kubus (sy 6 cm) staan.',
              correctAnswer: '329.04',
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
              correctAnswer: '3.61',
              correctAnswers: ['3.61', '3,61'],
              explanation: 'l = √(r² + h²) = √(4 + 9) = √13 ≈ 3,61 cm ✓',
            },
            {
              label: 'b) Totale oppervlakte (cm², tot 2 d.p.)',
              correctAnswer: '110.60',
              correctAnswers: ['110.60', '110.6', '110,60', '110,6'],
              explanation: 'Silinder geboë: 2 × 3,14 × 2 × 6 = 75,36 cm²\nSilinder onderste sirkel: 3,14 × 4 = 12,56 cm²\nKeël geboë: 3,14 × 2 × 3,61 ≈ 22,68 cm²\nTotaal: 75,36 + 12,56 + 22,68 = 110,60 cm² ✓',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a cylinder with a cone on top showing the internal joined circular face highlighted in orange and each component labelled in a different colour" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the volume and surface area of combined solids by calculating each component separately and identifying internal faces to exclude" />',
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
              correctAnswer: '3.46',
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
        '<DiagramPlaceholder label="Diagram of a cylinder and cone each with one dimension marked as unknown, showing the rearranged formula with known values substituted in colour" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to rearrange volume and surface area formulae to find missing dimensions, with colour coded substitution steps" />',
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
      correctAnswer: '615.44',
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
      correctAnswer: '381.51',
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
      correctAnswer: '537.21',
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
      correctAnswer: '3.16',
      correctAnswers: ['3.16', '3,16'],
      explanation: 'V = πr²h → 251,2 = 3,14 × r² × 8 → r² = 251,2 ÷ 25,12 = 10 → r = √10 ≈ 3,16 cm ✓',
    },

    // ── Q11 Medium — find radius of cone ─────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Keël het volume 188,4 cm³ en hoogte 9 cm. Vind die radius daarvan (afgerond tot 2 desimale plekke). Gebruik π ≈ 3,14.',
      answer: '4,47 cm',
      checkMode: 'auto',
      correctAnswer: '4.47',
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
      correctAnswer: '6.0',
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
      correctAnswer: '23.83',
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
