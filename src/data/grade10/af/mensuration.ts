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
        'Gemerkte diagramme van ʼn silinder, keël, sfeer en vierkantige piramide wat elk radius, hoogte en skuinshoogte met kleurgekodeerde dimensies wys',
      diagramSvg:
        '<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg"><ellipse cx="55" cy="35" rx="35" ry="12" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2.5"/><line x1="20" y1="35" x2="20" y2="115" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="35" x2="90" y2="115" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 20,115 A 35,12 0 0 0 90,115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 20,115 A 35,12 0 0 1 90,115" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="35" x2="90" y2="35" stroke="#2563eb" stroke-width="2"/><text x="73" y="29" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">r</text><line x1="100" y1="35" x2="100" y2="115" stroke="#2563eb" stroke-width="1.6"/><text x="108" y="79" font-size="11" fill="#2563eb" font-weight="700">h</text><text x="55" y="148" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Silinder</text><ellipse cx="172" cy="115" rx="35" ry="12" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2.5"/><line x1="172" y1="20" x2="137" y2="115" stroke="#0f1f3d" stroke-width="2.5"/><line x1="172" y1="20" x2="207" y2="115" stroke="#0f1f3d" stroke-width="2.5"/><line x1="172" y1="115" x2="207" y2="115" stroke="#2563eb" stroke-width="2"/><text x="190" y="129" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">r</text><line x1="172" y1="20" x2="172" y2="115" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="178" y="72" font-size="11" fill="#2563eb" font-weight="700">h</text><text x="197" y="62" font-size="11" fill="#2563eb" font-weight="700">l</text><text x="172" y="148" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Keël</text><circle cx="290" cy="72" r="43" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="290" cy="72" rx="43" ry="14" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="4,3"/><line x1="290" y1="72" x2="333" y2="72" stroke="#2563eb" stroke-width="2"/><text x="311" y="66" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">r</text><text x="290" y="148" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Sfeer</text><polygon points="368,128 428,128 448,108 388,108" fill="#eff6ff" stroke="none"/><line x1="368" y1="128" x2="428" y2="128" stroke="#0f1f3d" stroke-width="2.5"/><line x1="368" y1="128" x2="388" y2="108" stroke="#0f1f3d" stroke-width="2.5"/><line x1="428" y1="128" x2="448" y2="108" stroke="#0f1f3d" stroke-width="2.5"/><line x1="388" y1="108" x2="448" y2="108" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="408" y1="25" x2="368" y2="128" stroke="#0f1f3d" stroke-width="2.5"/><line x1="408" y1="25" x2="428" y2="128" stroke="#0f1f3d" stroke-width="2.5"/><line x1="408" y1="25" x2="388" y2="108" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="408" y1="25" x2="448" y2="108" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="408" y1="25" x2="408" y2="118" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="426" y="75" font-size="11" fill="#2563eb" font-weight="700">h</text><text x="398" y="142" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">s</text><text x="408" y="160" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Piramide</text></svg>',

      videoPlaceholder:
        'Kort video wat volume- en oppervlakteformules vir silinders, keëls, sfere en piramides hersien, met kleurgekodeerde uitgewerkte voorbeelde',
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
        'Diagram van ʼn silinder met ʼn keël bo-op wat die interne verbindingsvlak in oranje uitgelig wys, met elke komponent in ʼn ander kleur gemerk',
      diagramSvg:
        '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#2563eb" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#2563eb" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#dc2626" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#dc2626" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="#fed7aa" fill-opacity="0.5" stroke="#ea580c" stroke-width="2.5"/><line x1="110" y1="70" x2="153" y2="70" stroke="#0f1f3d" stroke-width="1.6"/><text x="132" y="63" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">r</text><line x1="40" y1="70" x2="40" y2="165" stroke="#2563eb" stroke-width="1.6"/><text x="26" y="120" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 120)">h₁</text><line x1="180" y1="70" x2="180" y2="15" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="3,2"/><text x="193" y="45" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 193 45)">h₂</text><text x="110" y="200" font-size="10" fill="#ea580c" font-weight="700" text-anchor="middle">interne vlak — uitgesluit</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om die volume en oppervlakte van saamgestelde voorwerpe te vind deur elke komponent apart te bereken en interne vlakke te identifiseer wat uitgesluit moet word',
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
        'Gemerkte diagram van ʼn silinder wat ʼn bekende radius in blou en ʼn onbekende hoogte gemerk met ʼn vraagteken in groen wys, wat ʼn ontbrekende-dimensie-probleem illustreer',
      diagramSvg:
        '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="40" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="40" x2="55" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="40" x2="165" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 55,18 0 0 0 165,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 55,18 0 0 1 165,140" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="40" x2="163" y2="40" stroke="#2563eb" stroke-width="2"/><text x="137" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><line x1="30" y1="40" x2="30" y2="140" stroke="#16a34a" stroke-width="2"/><text x="16" y="90" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle" transform="rotate(-90 16 90)">h = ?</text><text x="110" y="175" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Volume = 628 cm³ — vind h</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om volume- en oppervlakteformules te herrangskik om ontbrekende afmetings te vind, met kleurgekodeerde substitusiestappe',
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
        { difficulty: 'Easy', question: 'ʼn Reghoekige prisma het lengte 8 cm, breedte 5 cm en hoogte 4 cm. Vind die volume daarvan.', checkMode: 'auto', options: ['160 cm³', '40 cm³', '17 cm³', '320 cm³'], correctIndex: 0, explanation: 'V = lengte × breedte × hoogte = 8 × 5 × 4 = 160 cm³. (40 cm³ vermenigvuldig net lengte × breedte en vergeet die hoogte; 17 cm³ tel per ongeluk die dimensies bymekaar in plaas daarvan om te vermenigvuldig; 320 cm³ verdubbel die korrekte volume.)' },
        { difficulty: 'Easy', question: 'ʼn Silinder het radius 4 cm en hoogte 9 cm. Vind die volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['326,56 cm³', '452,16 cm³', '144 cm³', '1 808,64 cm³'], correctIndex: 1, explanation: 'V = πr²h = 3,14 × 4² × 9 = 452,16 cm³. (326,56 cm³ is die oppervlakteformule wat per ongeluk in plaas van die volumeformule gebruik word; 144 cm³ laat π heeltemal weg; 1 808,64 cm³ gebruik per ongeluk die middellyn 8 cm as die radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 9 cm</text></svg>'},
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 5 cm. Vind die volume daarvan.', checkMode: 'auto', options: ['150 cm³', '25 cm³', '125 cm³', '15 cm³'], correctIndex: 2, explanation: 'V = sy³ = 5³ = 125 cm³. (150 cm³ pas per ongeluk die oppervlakteformule 6×sy² toe; 25 cm³ kwadreer net die sy; 15 cm³ vermenigvuldig die sy met 3 in plaas daarvan om dit te kubeer.)' },

        // Blok 2 — Oppervlakte van silinder / prisma / keël (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'ʼn Silinder het radius 5 cm en hoogte 8 cm. Vind die totale oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['628 cm²', '251,2 cm²', '1 130,4 cm²', '408,2 cm²'], correctIndex: 3, explanation: 'O = 2πr² + 2πrh = 2 × 3,14 × 25 + 2 × 3,14 × 5 × 8 = 157 + 251,2 = 408,2 cm². (628 cm² is per ongeluk die volumeformule wat toegepas word; 251,2 cm² sluit net die geboë kant in en vergeet die twee sirkelvormige punte; 1 130,4 cm² gebruik per ongeluk die middellyn 10 cm as die radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 8 cm</text></svg>'},
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige prisma het lengte 9 cm, breedte 6 cm en hoogte 4 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', options: ['228 cm²', '216 cm²', '114 cm²', '108 cm²'], correctIndex: 0, explanation: 'O = 2(lb + lh + bh) = 2(54 + 36 + 24) = 228 cm². (216 cm² is per ongeluk die volumeformule (l×b×h) wat gebruik word; 114 cm² vergeet om die som van die drie vlakoppervlaktes te verdubbel; 108 cm² tel net die boonste en onderste vlakke.)' },
        { difficulty: 'Easy-Medium', question: 'ʼn Keël het radius 3 cm en skuinshoogte 6 cm. Vind die totale oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['56,52 cm²', '84,78 cm²', '226,08 cm²', '169,56 cm²'], correctIndex: 1, explanation: 'O = πr² + πrl = 3,14 × 9 + 3,14 × 3 × 6 = 28,26 + 56,52 = 84,78 cm². (56,52 cm² vergeet die basissirkel πr² en vind net die geboë oppervlak; 226,08 cm² gebruik per ongeluk die middellyn 6 cm as die radius; 169,56 cm² verwissel die radius en skuinshoogte in die formule.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="165" y2="145" stroke="#2563eb" stroke-width="2.5"/><text x="150" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 6 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text></svg>'},

        // Blok 3 — Volume van sfeer / piramide / keël (Medium)
        { difficulty: 'Medium', question: 'ʼn Sfeer het radius 6 cm. Vind die volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['678,24 cm³', '452,16 cm³', '904,32 cm³', '7 234,56 cm³'], correctIndex: 2, explanation: 'V = (4/3)πr³ = (4/3) × 3,14 × 216 = 904,32 cm³. (678,24 cm³ laat die 4/3-faktor weg; 452,16 cm³ pas per ongeluk die oppervlakteformule 4πr² toe; 7 234,56 cm³ gebruik die middellyn 12 cm as die radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Vierkantige piramide het ʼn basissy van 9 cm en hoogte 10 cm. Vind die volume daarvan.', checkMode: 'auto', options: ['810 cm³', '30 cm³', '120 cm³', '270 cm³'], correctIndex: 3, explanation: 'V = ⅓ × basisoppervlakte × hoogte = ⅓ × 81 × 10 = 270 cm³. (810 cm³ vergeet die ⅓-faktor en gee die volume van ʼn volle prisma; 30 cm³ gebruik per ongeluk die basissy (9) in plaas van die basisoppervlakte (9² = 81); 120 cm³ gebruik die basisomtrek (4×9=36) in plaas van die basisoppervlakte.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="147" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="160" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">h = 10 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Keël het radius 5 cm en hoogte 12 cm. Vind die volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['314 cm³', '942 cm³', '1 256 cm³', '753,6 cm³'], correctIndex: 0, explanation: 'V = ⅓πr²h = ⅓ × 3,14 × 25 × 12 = 314 cm³. (942 cm³ vergeet die ⅓-faktor en bereken ʼn silinder se volume in plaas daarvan; 1 256 cm³ gebruik per ongeluk die middellyn 10 cm as die radius; 753,6 cm³ verwissel die radius- en hoogtewaardes in die formule.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="150" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">h = 12 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},

        // Blok 4 — Oppervlakte van sfeer / keël / piramide (Medium)
        { difficulty: 'Medium', question: 'ʼn Sfeer het radius 7 cm. Vind die oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['153,86 cm²', '615,44 cm²', '1 436,03 cm²', '2 461,76 cm²'], correctIndex: 1, explanation: 'O = 4πr² = 4 × 3,14 × 49 = 615,44 cm². (153,86 cm² laat die faktor 4 weg; 1 436,03 cm² pas per ongeluk die volumeformule (4/3)πr³ toe; 2 461,76 cm² gebruik die middellyn 14 cm as die radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Keël het radius 6 cm en skuinshoogte 10 cm. Vind die totale oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['188,4 cm²', '502,4 cm²', '301,44 cm²', '828,96 cm²'], correctIndex: 2, explanation: 'O = πr² + πrl = 3,14 × 36 + 3,14 × 6 × 10 = 113,04 + 188,4 = 301,44 cm². (188,4 cm² vergeet die basissirkel en vind net die geboë oppervlak; 502,4 cm² verwissel die radius en skuinshoogte in die formule; 828,96 cm² gebruik per ongeluk die middellyn 12 cm as die radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="165" y2="145" stroke="#2563eb" stroke-width="2.5"/><text x="150" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 10 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Vierkantige piramide het ʼn basissy van 6 cm en skuinshoogte 5 cm (die skuinshoogte van elke driehoekige vlak). Vind die totale oppervlakte daarvan.', checkMode: 'auto', options: ['60 cm²', '156 cm²', '36 cm²', '96 cm²'], correctIndex: 3, explanation: 'O = basisoppervlakte + 4 × (½ × basissy × skuinshoogte) = 36 + 4 × (½ × 6 × 5) = 36 + 60 = 96 cm². (60 cm² tel net die syvlakke bymekaar en vergeet die vierkantige basis; 156 cm² vergeet om elke driehoekige vlak te halveer voordat dit met 4 vermenigvuldig word; 36 cm² gee net die basisoppervlakte en ignoreer die vier driehoekige vlakke.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="172.5" y2="147.5" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="146" y="83" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">l = 5 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text></svg>'},

        // Blok 5 — Volume van saamgestelde voorwerpe (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 3 cm, hoogte 8 cm) met ʼn keël (dieselfde radius, hoogte 5 cm) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['273,18 cm³', '226,08 cm³', '47,1 cm³', '367,38 cm³'], correctIndex: 0, explanation: 'Silinder: πr²h = 3,14 × 9 × 8 = 226,08 cm³. Keël: ⅓πr²h = ⅓ × 3,14 × 9 × 5 = 47,1 cm³. Totaal = 226,08 + 47,1 = 273,18 cm³. (226,08 cm³ vergeet om die keël bo-op by te tel; 47,1 cm³ bereken net die keël en vergeet die silinderbasis; 367,38 cm³ vergeet die ⅓-faktor wanneer die keël se volume bygetel word.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 8 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 5 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="82" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp bestaan uit ʼn kubus (sy 6 cm) met ʼn halfrond (radius 3 cm) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['216 cm³', '272,52 cm³', '329,04 cm³', '56,52 cm³'], correctIndex: 1, explanation: 'Kubus: 6³ = 216 cm³. Halfrond: ½ × (4/3)πr³ = ½ × (4/3) × 3,14 × 27 = 56,52 cm³. Totaal = 216 + 56,52 = 272,52 cm³. (216 cm³ vergeet om die halfrond bo-op by te tel; 329,04 cm³ gebruik ʼn volle sfeer in plaas van ʼn halfrond; 56,52 cm³ bereken net die halfrond en vergeet die kubus.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 80,90 A 30,10 0 0 1 140,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,90 A 45,50 0 0 1 110,45 A 45,50 0 0 1 155,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="90" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="90" x2="65" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="90" x2="155" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 0 155,180" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 1 155,180" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="90" x2="153" y2="90" stroke="#2563eb" stroke-width="2"/><text x="132" y="100" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text><text x="110" y="205" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">sy = 6 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 5 cm, hoogte 9 cm) met ʼn keël (dieselfde radius, hoogte 6 cm) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['706,5 cm³', '157 cm³', '863,5 cm³', '1 177,5 cm³'], correctIndex: 2, explanation: 'Silinder: πr²h = 3,14 × 25 × 9 = 706,5 cm³. Keël: ⅓πr²h = ⅓ × 3,14 × 25 × 6 = 157 cm³. Totaal = 706,5 + 157 = 863,5 cm³. (706,5 cm³ vergeet om die keël by te tel; 157 cm³ bereken net die keël en vergeet die silinder; 1 177,5 cm³ vergeet die ⅓-faktor wanneer die keël se volume bereken word.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 9 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 6 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="82" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},

        // Blok 6 — Oppervlakte van saamgestelde voorwerpe, skalering, ontbrekende dimensies (Hard)
        { difficulty: 'Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 3 cm, hoogte 8 cm) met ʼn halfrond (dieselfde radius) bo-op. Vind die totale oppervlakte daarvan, met die interne verbindingsirkel uitgesluit. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['263,76 cm²', '207,24 cm²', '292,02 cm²', '235,5 cm²'], correctIndex: 3, explanation: 'Silinder geboë oppervlak: 2πrh = 2 × 3,14 × 3 × 8 = 150,72 cm². Silinder onderste sirkel: πr² = 3,14 × 9 = 28,26 cm². Halfrond geboë oppervlak: 2πr² = 2 × 3,14 × 9 = 56,52 cm². Totaal = 150,72 + 28,26 + 56,52 = 235,5 cm². (263,76 cm² sluit verkeerdelik ook die interne verbindingsirkel in; 207,24 cm² vergeet die silinder se onderste sirkel; 292,02 cm² gebruik die volle sfeer se geboë oppervlakte in plaas van net dié van die halfrond.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="82" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 8 cm</text></svg>'},
        { difficulty: 'Hard', question: 'ʼn Kubus het sylengte 4 cm. Dit word vergroot sodat die nuwe sylengte 12 cm is. Watter van die volgende gee korrek die skaalfaktor toegepas op (a) die oppervlakte en (b) die volume?', checkMode: 'auto', options: ['Oppervlakte × 9; Volume × 27', 'Oppervlakte × 27; Volume × 9', 'Oppervlakte × 3; Volume × 3', 'Oppervlakte × 6; Volume × 9'], correctIndex: 0, explanation: 'Lineêre skaalfaktor = 12 ÷ 4 = 3. Oppervlakte-skaalfaktor = 3² = 9. Volume-skaalfaktor = 3³ = 27. (Opsie B verwissel die kwadraat- en derdemagfaktore; Opsie C pas per ongeluk die lineêre faktor 3 op albei toe in plaas daarvan om dit te kwadreer/kubeer; Opsie D verdubbel die lineêre faktor vir oppervlakte in plaas daarvan om dit te kwadreer.)' , diagramSvg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="30" width="45" height="35" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="20" y1="45" x2="45" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="65" y1="45" x2="90" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="65" y1="80" x2="90" y2="65" stroke="#0f1f3d" stroke-width="1.4"/><rect x="20" y="45" width="45" height="35" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="42" y="98" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="55" y="115" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Oorspronklik</text><line x1="105" y1="90" x2="150" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSc2)"/><defs><marker id="arrowSc2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><rect x="200" y="15" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="170" y1="33" x2="200" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="260" y1="33" x2="290" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="260" y1="103" x2="290" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="170" y="33" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="215" y="122" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="215" y="150" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Vergroot</text></svg>'},
        { difficulty: 'Hard', question: 'ʼn Sfeer het ʼn oppervlakte van 452,16 cm². Vind die radius daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['36 cm', '6 cm', '8,49 cm', '12 cm'], correctIndex: 1, explanation: 'O = 4πr² → 452,16 = 4 × 3,14 × r² → r² = 452,16 ÷ 12,56 = 36 → r = √36 = 6 cm. (36 cm vergeet om die vierkantswortel van r² te trek; 8,49 cm gebruik per ongeluk die halfrond-oppervlakteformule 2πr²; 12 cm deel net deur π in plaas van 4π, en vergeet die faktor 4.)' },
        { difficulty: 'Hard', question: 'ʼn Vierkantige piramide het ʼn basissy van 6 cm en volume 216 cm³. Vind die hoogte daarvan.', checkMode: 'auto', options: ['6 cm', '108 cm', '18 cm', '27 cm'], correctIndex: 2, explanation: 'V = ⅓ × basisoppervlakte × h → 216 = ⅓ × 36 × h → 216 = 12h → h = 18 cm. (6 cm kom van die vergeet van die ⅓-faktor; 108 cm gebruik per ongeluk die basissy (6) in plaas van die basisoppervlakte (36); 27 cm gebruik die basisomtrek (4×6=24) in plaas van die basisoppervlakte.)' },
        { difficulty: 'Hard', question: "Lerato sê dat om die radius van ʼn sfeer te verdubbel (terwyl dit ʼn sfeer bly) die volume daarvan met 8 vermenigvuldig. Is sy korrek?", checkMode: 'auto', options: ['Nee — die verdubbeling van die radius verdubbel net die volume, aangesien volume direk eweredig is aan die radius.', 'Nee — die verdubbeling van die radius vermenigvuldig die volume met 4, aangesien volume van r² afhang.', 'Ja, maar net omdat π ook in die berekening verdubbel word.', 'Ja — aangesien V = (4/3)πr³ van r in die derde mag afhang, vermenigvuldig die verdubbeling van die radius die volume met 2³ = 8, wat haar stelling bevestig.'], correctIndex: 3, explanation: 'V = (4/3)πr³ hang van r in die derde mag af (nie lineêr nie, en nie van r² nie), so die verdubbeling van r vermenigvuldig V met 2³ = 8. Lerato is korrek.' },
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
        { difficulty: 'Easy', question: 'ʼn Reghoekige prisma het lengte 12 cm, breedte 5 cm en hoogte 3 cm. Vind die volume daarvan.', checkMode: 'auto', options: ['180 cm³', '60 cm³', '20 cm³', '360 cm³'], correctIndex: 0, explanation: 'V = lengte × breedte × hoogte = 12 × 5 × 3 = 180 cm³. (60 cm³ vermenigvuldig net lengte × breedte en vergeet die hoogte; 20 cm³ tel per ongeluk die dimensies bymekaar in plaas daarvan om te vermenigvuldig; 360 cm³ verdubbel die korrekte volume.)' },
        { difficulty: 'Easy', question: 'ʼn Silinder het radius 5 cm en hoogte 6 cm. Vind die volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['345,4 cm³', '471 cm³', '150 cm³', '1 884 cm³'], correctIndex: 1, explanation: 'V = πr²h = 3,14 × 5² × 6 = 3,14 × 25 × 6 = 471 cm³. (345,4 cm³ is die oppervlakteformule wat per ongeluk in plaas van die volumeformule gebruik word; 150 cm³ laat π heeltemal weg; 1 884 cm³ gebruik per ongeluk die middellyn 10 cm as die radius.)' },
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 7 cm. Vind die volume daarvan.', checkMode: 'auto', options: ['294 cm³', '49 cm³', '343 cm³', '21 cm³'], correctIndex: 2, explanation: 'V = sy³ = 7³ = 343 cm³. (294 cm³ pas per ongeluk die oppervlakteformule 6×sy² toe; 49 cm³ kwadreer net die sy; 21 cm³ vermenigvuldig die sy met 3 in plaas daarvan om dit te kubeer.)' },

        // Blok 2 — Oppervlakte van silinder / prisma / keël (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'ʼn Silinder het radius 4 cm en hoogte 9 cm. Vind die totale oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['452,16 cm²', '226,08 cm²', '854,08 cm²', '326,56 cm²'], correctIndex: 3, explanation: 'O = 2πr² + 2πrh = 2 × 3,14 × 16 + 2 × 3,14 × 4 × 9 = 100,48 + 226,08 = 326,56 cm². (452,16 cm² is per ongeluk die volumeformule wat toegepas word; 226,08 cm² sluit net die geboë kant in en vergeet die twee sirkelvormige punte; 854,08 cm² gebruik per ongeluk die middellyn 8 cm as die radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 9 cm</text></svg>'},
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige prisma het lengte 10 cm, breedte 4 cm en hoogte 3 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', options: ['164 cm²', '120 cm²', '82 cm²', '80 cm²'], correctIndex: 0, explanation: 'O = 2(lb + lh + bh) = 2(40 + 30 + 12) = 164 cm². (120 cm² is per ongeluk die volumeformule (l×b×h) wat gebruik word; 82 cm² vergeet om die som van die drie vlakoppervlaktes te verdubbel; 80 cm² tel net die boonste en onderste vlakke.)' },
        { difficulty: 'Easy-Medium', question: 'ʼn Keël het radius 4 cm en skuinshoogte 7 cm. Vind die totale oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['87,92 cm²', '138,16 cm²', '376,8 cm²', '241,78 cm²'], correctIndex: 1, explanation: 'O = πr² + πrl = 3,14 × 16 + 3,14 × 4 × 7 = 50,24 + 87,92 = 138,16 cm². (87,92 cm² vergeet die basissirkel πr² en vind net die geboë oppervlak; 376,8 cm² gebruik per ongeluk die middellyn 8 cm as die radius; 241,78 cm² verwissel die radius en skuinshoogte in die formule.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="165" y2="145" stroke="#2563eb" stroke-width="2.5"/><text x="150" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 7 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},

        // Blok 3 — Volume van sfeer / piramide / keël (Medium)
        { difficulty: 'Medium', question: 'ʼn Sfeer het radius 4,5 cm. Vind die volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['286,13 cm³', '254,34 cm³', '381,51 cm³', '3 052,08 cm³'], correctIndex: 2, explanation: 'V = (4/3)πr³ = (4/3) × 3,14 × 91,125 ≈ 381,51 cm³. (286,13 cm³ laat die 4/3-faktor weg; 254,34 cm³ pas per ongeluk die oppervlakteformule 4πr² toe; 3 052,08 cm³ gebruik die middellyn 9 cm as die radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4,5 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Vierkantige piramide het ʼn basissy van 8 cm en hoogte 9 cm. Vind die volume daarvan.', checkMode: 'auto', options: ['576 cm³', '24 cm³', '96 cm³', '192 cm³'], correctIndex: 3, explanation: 'V = ⅓ × basisoppervlakte × hoogte = ⅓ × 64 × 9 = 192 cm³. (576 cm³ vergeet die ⅓-faktor en gee die volume van ʼn volle prisma; 24 cm³ gebruik per ongeluk die basissy (8) in plaas van die basisoppervlakte (8²=64); 96 cm³ gebruik die basisomtrek (4×8=32) in plaas van die basisoppervlakte.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="147" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="160" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">h = 9 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Keël het radius 6 cm en hoogte 10 cm. Vind die volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['376,8 cm³', '1 130,4 cm³', '1 507,2 cm³', '628 cm³'], correctIndex: 0, explanation: 'V = ⅓πr²h = ⅓ × 3,14 × 36 × 10 = 376,8 cm³. (1 130,4 cm³ vergeet die ⅓-faktor en bereken ʼn silinder se volume in plaas daarvan; 1 507,2 cm³ gebruik per ongeluk die middellyn 12 cm as die radius; 628 cm³ verwissel die radius- en hoogtewaardes in die formule.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="150" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">h = 10 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text></svg>'},

        // Blok 4 — Oppervlakte van sfeer / keël / piramide (Medium)
        { difficulty: 'Medium', question: 'ʼn Sfeer het radius 9 cm. Vind die oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['254,34 cm²', '1 017,36 cm²', '3 052,08 cm²', '4 069,44 cm²'], correctIndex: 1, explanation: 'O = 4πr² = 4 × 3,14 × 81 = 1 017,36 cm². (254,34 cm² laat die faktor 4 weg; 3 052,08 cm² pas per ongeluk die volumeformule (4/3)πr³ toe; 4 069,44 cm² gebruik die middellyn 18 cm as die radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 9 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Keël het radius 5 cm en skuinshoogte 8 cm. Vind die totale oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['125,6 cm²', '326,56 cm²', '204,1 cm²', '565,2 cm²'], correctIndex: 2, explanation: 'O = πr² + πrl = 3,14 × 25 + 3,14 × 5 × 8 = 78,5 + 125,6 = 204,1 cm². (125,6 cm² vergeet die basissirkel en vind net die geboë oppervlak; 326,56 cm² verwissel die radius en skuinshoogte in die formule; 565,2 cm² gebruik per ongeluk die middellyn 10 cm as die radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="165" y2="145" stroke="#2563eb" stroke-width="2.5"/><text x="150" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 8 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Vierkantige piramide het ʼn basissy van 8 cm en skuinshoogte 6 cm (die skuinshoogte van elke driehoekige vlak). Vind die totale oppervlakte daarvan.', checkMode: 'auto', options: ['96 cm²', '256 cm²', '64 cm²', '160 cm²'], correctIndex: 3, explanation: 'O = basisoppervlakte + 4 × (½ × basissy × skuinshoogte) = 64 + 4 × (½ × 8 × 6) = 64 + 96 = 160 cm². (96 cm² tel net die syvlakke bymekaar en vergeet die vierkantige basis; 256 cm² vergeet om elke driehoekige vlak te halveer voordat dit met 4 vermenigvuldig word; 64 cm² gee net die basisoppervlakte en ignoreer die vier driehoekige vlakke.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="172.5" y2="147.5" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="146" y="83" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">l = 6 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text></svg>'},

        // Blok 5 — Volume van saamgestelde voorwerpe (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 4 cm, hoogte 10 cm) met ʼn keël (dieselfde radius, hoogte 6 cm) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['602,88 cm³', '502,4 cm³', '100,48 cm³', '803,84 cm³'], correctIndex: 0, explanation: 'Silinder: πr²h = 3,14 × 16 × 10 = 502,4 cm³. Keël: ⅓πr²h = ⅓ × 3,14 × 16 × 6 = 100,48 cm³. Totaal = 502,4 + 100,48 = 602,88 cm³. (502,4 cm³ vergeet om die keël bo-op by te tel; 100,48 cm³ bereken net die keël en vergeet die silinderbasis; 803,84 cm³ vergeet die ⅓-faktor wanneer die keël se volume bygetel word.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 10 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 6 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="82" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp bestaan uit ʼn kubus (sy 5 cm) met ʼn halfrond (radius 2,5 cm) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['125 cm³', '157,71 cm³', '190,42 cm³', '32,71 cm³'], correctIndex: 1, explanation: 'Kubus: 5³ = 125 cm³. Halfrond: ½ × (4/3)πr³ = ½ × (4/3) × 3,14 × 15,625 ≈ 32,71 cm³. Totaal ≈ 125 + 32,71 = 157,71 cm³. (125 cm³ vergeet om die halfrond bo-op by te tel; 190,42 cm³ gebruik ʼn volle sfeer in plaas van ʼn halfrond; 32,71 cm³ bereken net die halfrond en vergeet die kubus.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 80,90 A 30,10 0 0 1 140,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,90 A 45,50 0 0 1 110,45 A 45,50 0 0 1 155,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="90" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="90" x2="65" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="90" x2="155" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 0 155,180" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 1 155,180" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="90" x2="153" y2="90" stroke="#2563eb" stroke-width="2"/><text x="132" y="100" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2,5 cm</text><text x="110" y="205" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">sy = 5 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 6 cm, hoogte 7 cm) met ʼn keël (dieselfde radius, hoogte 5 cm) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['791,28 cm³', '188,4 cm³', '979,68 cm³', '1 356,48 cm³'], correctIndex: 2, explanation: 'Silinder: πr²h = 3,14 × 36 × 7 = 791,28 cm³. Keël: ⅓πr²h = ⅓ × 3,14 × 36 × 5 = 188,4 cm³. Totaal = 791,28 + 188,4 = 979,68 cm³. (791,28 cm³ vergeet om die keël by te tel; 188,4 cm³ bereken net die keël en vergeet die silinder; 1 356,48 cm³ vergeet die ⅓-faktor wanneer die keël se volume bereken word.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 7 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 5 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="82" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text></svg>'},

        // Blok 6 — Oppervlakte van saamgestelde voorwerpe, skalering, ontbrekende dimensies (Hard)
        { difficulty: 'Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 4 cm, hoogte 10 cm) met ʼn keël (dieselfde radius, hoogte 3 cm) bo-op. Vind die totale oppervlakte daarvan, met die interne verbindingsirkel uitgesluit. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['414,48 cm²', '314 cm²', '339,12 cm²', '364,24 cm²'], correctIndex: 3, explanation: 'Keël skuinshoogte: l = √(4² + 3²) = √25 = 5 cm. Silinder geboë oppervlak: 2πrh = 2 × 3,14 × 4 × 10 = 251,2 cm². Silinder onderste sirkel: πr² = 3,14 × 16 = 50,24 cm². Keël geboë oppervlak: πrl = 3,14 × 4 × 5 = 62,8 cm². Totaal = 251,2 + 50,24 + 62,8 = 364,24 cm². (414,48 cm² sluit verkeerdelik ook die interne verbindingsirkel in; 314 cm² vergeet die silinder se onderste sirkel; 339,12 cm² gebruik per ongeluk die keël se hoogte (3 cm) in plaas van die skuinshoogte (5 cm) in die geboë-oppervlakteformule.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 10 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 3 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="82" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},
        { difficulty: 'Hard', question: 'ʼn Sfeer het radius 2 cm. Dit word vergroot sodat die nuwe radius 6 cm is. Watter van die volgende gee korrek die skaalfaktor toegepas op (a) die oppervlakte en (b) die volume?', checkMode: 'auto', options: ['Oppervlakte × 9; Volume × 27', 'Oppervlakte × 27; Volume × 9', 'Oppervlakte × 3; Volume × 3', 'Oppervlakte × 6; Volume × 9'], correctIndex: 0, explanation: 'Lineêre skaalfaktor = 6 ÷ 2 = 3. Oppervlakte-skaalfaktor = 3² = 9. Volume-skaalfaktor = 3³ = 27. (Opsie B verwissel die kwadraat- en derdemagfaktore; Opsie C pas per ongeluk die lineêre faktor 3 op albei toe in plaas daarvan om dit te kwadreer/kubeer; Opsie D verdubbel die lineêre faktor vir oppervlakte in plaas daarvan om dit te kwadreer.)' , diagramSvg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg"><circle cx="55" cy="65" r="30" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><ellipse cx="55" cy="65" rx="30" ry="9" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="55" y="105" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 cm</text><text x="55" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Oorspronklik</text><line x1="105" y1="65" x2="150" y2="65" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSc3)"/><defs><marker id="arrowSc3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><circle cx="245" cy="65" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><ellipse cx="245" cy="65" rx="65" ry="18" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="245" y="150" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text><text x="245" y="170" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Vergroot</text></svg>'},
        { difficulty: 'Hard', question: 'ʼn Keël het volume 113,04 cm³ en radius 3 cm. Vind die hoogte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['4 cm', '12 cm', '3 cm', '18 cm'], correctIndex: 1, explanation: 'V = ⅓πr²h → 113,04 = ⅓ × 3,14 × 9 × h → 113,04 = 9,42h → h = 12 cm. (4 cm kom van die vergeet van die ⅓-faktor; 3 cm gebruik per ongeluk die middellyn 6 cm as die radius; 18 cm gebruik 2r (6) in plaas van r² (9) in die substitusie.)' },
        { difficulty: 'Hard', question: 'ʼn Keël het volume 392,5 cm³ en radius 5 cm. Vind die hoogte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['5 cm', '3,75 cm', '15 cm', '37,5 cm'], correctIndex: 2, explanation: 'V = ⅓πr²h → 392,5 = ⅓ × 3,14 × 25 × h → 392,5 = 26,1666...h → h = 15 cm. (5 cm kom van die vergeet van die ⅓-faktor; 3,75 cm gebruik per ongeluk die middellyn 10 cm as die radius; 37,5 cm gebruik 2r (10) in plaas van r² (25) in die substitusie.)' },
        { difficulty: 'Hard', question: "Sipho sê dat om die hoogte van ʼn keël te verdriedubbel (terwyl die radius dieselfde bly) die volume daarvan met 3 vermenigvuldig. Is hy korrek?", checkMode: 'auto', options: ['Nee — die verdriedubbeling van die hoogte vermenigvuldig die volume met 9, aangesien volume van h² afhang.', 'Nee — die verdriedubbeling van die hoogte vermenigvuldig die volume met 27, aangesien volume van h³ afhang soos by ʼn sfeer.', 'Ja, maar net as die radius ook gelyktydig verdriedubbel word.', 'Ja — aangesien V = ⅓πr²h slegs van h tot die eerste mag afhang (nie r nie), vermenigvuldig die verdriedubbeling van die hoogte die volume presies met 3, wat sy stelling bevestig.'], correctIndex: 3, explanation: 'V = ⅓πr²h hang slegs van h tot die eerste mag af (r bly onveranderd), so die verdriedubbeling van h vermenigvuldig V met presies 3. Sipho is korrek.' },
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
        { difficulty: 'Easy', question: 'ʼn Reghoekige prisma het lengte 11 cm, breedte 4 cm en hoogte 6 cm. Vind die volume daarvan.', checkMode: 'auto', options: ['264 cm³', '44 cm³', '21 cm³', '528 cm³'], correctIndex: 0, explanation: 'V = lengte × breedte × hoogte = 11 × 4 × 6 = 264 cm³. (44 cm³ vermenigvuldig net lengte × breedte en vergeet die hoogte; 21 cm³ tel per ongeluk die dimensies bymekaar in plaas daarvan om te vermenigvuldig; 528 cm³ verdubbel die korrekte volume.)' },
        { difficulty: 'Easy', question: 'ʼn Silinder het radius 2 cm en hoogte 12 cm. Vind die volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['175,84 cm³', '150,72 cm³', '48 cm³', '602,88 cm³'], correctIndex: 1, explanation: 'V = πr²h = 3,14 × 2² × 12 = 150,72 cm³. (175,84 cm³ is die oppervlakteformule wat per ongeluk in plaas van die volumeformule gebruik word; 48 cm³ laat π heeltemal weg; 602,88 cm³ gebruik per ongeluk die middellyn 4 cm as die radius.)' },
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 9 cm. Vind die volume daarvan.', checkMode: 'auto', options: ['486 cm³', '81 cm³', '729 cm³', '27 cm³'], correctIndex: 2, explanation: 'V = sy³ = 9³ = 729 cm³. (486 cm³ pas per ongeluk die oppervlakteformule 6×sy² toe; 81 cm³ kwadreer net die sy; 27 cm³ vermenigvuldig die sy met 3 in plaas daarvan om dit te kubeer.)' },

        // Blok 2 — Oppervlakte van silinder / prisma / keël (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'ʼn Silinder het radius 6 cm en hoogte 5 cm. Vind die totale oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['565,2 cm²', '188,4 cm²', '1 281,12 cm²', '414,48 cm²'], correctIndex: 3, explanation: 'O = 2πr² + 2πrh = 2 × 3,14 × 36 + 2 × 3,14 × 6 × 5 = 226,08 + 188,4 = 414,48 cm². (565,2 cm² is per ongeluk die volumeformule wat toegepas word; 188,4 cm² sluit net die geboë kant in en vergeet die twee sirkelvormige punte; 1 281,12 cm² gebruik per ongeluk die middellyn 12 cm as die radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 5 cm</text></svg>'},
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige prisma het lengte 12 cm, breedte 5 cm en hoogte 2 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', options: ['188 cm²', '120 cm²', '94 cm²', '68 cm²'], correctIndex: 0, explanation: 'O = 2(lb + lh + bh) = 2(60 + 24 + 10) = 188 cm². (120 cm² is per ongeluk die volumeformule (l×b×h) wat gebruik word; 94 cm² vergeet om die som van die drie vlakoppervlaktes te verdubbel; 68 cm² laat die boonste en onderste vlakke (2lb) uit die totaal.)' },
        { difficulty: 'Easy-Medium', question: 'ʼn Keël het radius 5 cm en skuinshoogte 9 cm. Vind die totale oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['141,3 cm²', '219,8 cm²', '596,6 cm²', '395,64 cm²'], correctIndex: 1, explanation: 'O = πr² + πrl = 3,14 × 25 + 3,14 × 5 × 9 = 78,5 + 141,3 = 219,8 cm². (141,3 cm² vergeet die basissirkel πr² en vind net die geboë oppervlak; 596,6 cm² gebruik per ongeluk die middellyn 10 cm as die radius; 395,64 cm² verwissel die radius en skuinshoogte in die formule.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="165" y2="145" stroke="#2563eb" stroke-width="2.5"/><text x="150" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 9 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},

        // Blok 3 — Volume van sfeer / piramide / keël (Medium)
        { difficulty: 'Medium', question: 'ʼn Sfeer het radius 3 cm. Vind die volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['84,78 cm³', '37,68 cm³', '113,04 cm³', '904,32 cm³'], correctIndex: 2, explanation: 'V = (4/3)πr³ = (4/3) × 3,14 × 27 = 113,04 cm³. (84,78 cm³ laat die 4/3-faktor weg; 37,68 cm³ gebruik per ongeluk r² in plaas van r³, en vergeet om die radius te kubeer; 904,32 cm³ gebruik die middellyn 6 cm as die radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Vierkantige piramide het ʼn basissy van 10 cm en hoogte 6 cm. Vind die volume daarvan.', checkMode: 'auto', options: ['600 cm³', '20 cm³', '80 cm³', '200 cm³'], correctIndex: 3, explanation: 'V = ⅓ × basisoppervlakte × hoogte = ⅓ × 100 × 6 = 200 cm³. (600 cm³ vergeet die ⅓-faktor en gee die volume van ʼn volle prisma; 20 cm³ gebruik per ongeluk die basissy (10) in plaas van die basisoppervlakte (10²=100); 80 cm³ gebruik die basisomtrek (4×10=40) in plaas van die basisoppervlakte.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="147" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="160" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">h = 6 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Keël het radius 4 cm en hoogte 15 cm. Vind die volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['251,2 cm³', '753,6 cm³', '1 004,8 cm³', '942 cm³'], correctIndex: 0, explanation: 'V = ⅓πr²h = ⅓ × 3,14 × 16 × 15 = 251,2 cm³. (753,6 cm³ vergeet die ⅓-faktor en bereken ʼn silinder se volume in plaas daarvan; 1 004,8 cm³ gebruik per ongeluk die middellyn 8 cm as die radius; 942 cm³ verwissel die radius- en hoogtewaardes in die formule.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="150" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">h = 15 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},

        // Blok 4 — Oppervlakte van sfeer / keël / piramide (Medium)
        { difficulty: 'Medium', question: 'ʼn Sfeer het radius 4 cm. Vind die oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['50,24 cm²', '200,96 cm²', '267,95 cm²', '803,84 cm²'], correctIndex: 1, explanation: 'O = 4πr² = 4 × 3,14 × 16 = 200,96 cm². (50,24 cm² laat die faktor 4 weg; 267,95 cm² pas per ongeluk die volumeformule (4/3)πr³ toe; 803,84 cm² gebruik die middellyn 8 cm as die radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Keël het radius 7 cm en skuinshoogte 12 cm. Vind die totale oppervlakte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['263,76 cm²', '715,92 cm²', '417,62 cm²', '1 142,96 cm²'], correctIndex: 2, explanation: 'O = πr² + πrl = 3,14 × 49 + 3,14 × 7 × 12 = 153,86 + 263,76 = 417,62 cm². (263,76 cm² vergeet die basissirkel en vind net die geboë oppervlak; 715,92 cm² verwissel die radius en skuinshoogte in die formule; 1 142,96 cm² gebruik per ongeluk die middellyn 14 cm as die radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="165" y2="145" stroke="#2563eb" stroke-width="2.5"/><text x="150" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 12 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Vierkantige piramide het ʼn basissy van 10 cm en skuinshoogte 13 cm (die skuinshoogte van elke driehoekige vlak). Vind die totale oppervlakte daarvan.', checkMode: 'auto', options: ['260 cm²', '620 cm²', '100 cm²', '360 cm²'], correctIndex: 3, explanation: 'O = basisoppervlakte + 4 × (½ × basissy × skuinshoogte) = 100 + 4 × (½ × 10 × 13) = 100 + 260 = 360 cm². (260 cm² tel net die syvlakke bymekaar en vergeet die vierkantige basis; 620 cm² vergeet om elke driehoekige vlak te halveer voordat dit met 4 vermenigvuldig word; 100 cm² gee net die basisoppervlakte en ignoreer die vier driehoekige vlakke.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="172.5" y2="147.5" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="146" y="83" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">l = 13 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text></svg>'},

        // Blok 5 — Volume van saamgestelde voorwerpe (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 5 cm, hoogte 6 cm) met ʼn keël (dieselfde radius, hoogte 9 cm) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['706,5 cm³', '471 cm³', '235,5 cm³', '1 177,5 cm³'], correctIndex: 0, explanation: 'Silinder: πr²h = 3,14 × 25 × 6 = 471 cm³. Keël: ⅓πr²h = ⅓ × 3,14 × 25 × 9 = 235,5 cm³. Totaal = 471 + 235,5 = 706,5 cm³. (471 cm³ vergeet om die keël bo-op by te tel; 235,5 cm³ bereken net die keël en vergeet die silinderbasis; 1 177,5 cm³ vergeet die ⅓-faktor wanneer die keël se volume bygetel word.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 6 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 9 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="82" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp bestaan uit ʼn kubus (sy 4 cm) met ʼn halfrond (radius 2 cm) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['64 cm³', '80,75 cm³', '33,49 cm³', '16,75 cm³'], correctIndex: 1, explanation: 'Kubus: 4³ = 64 cm³. Halfrond: ½ × (4/3)πr³ = ½ × (4/3) × 3,14 × 8 ≈ 16,75 cm³. Totaal ≈ 64 + 16,75 = 80,75 cm³. (64 cm³ vergeet om die halfrond bo-op by te tel; 33,49 cm³ gebruik ʼn volle sfeer in plaas van ʼn halfrond; 16,75 cm³ bereken net die halfrond en vergeet die kubus.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 80,90 A 30,10 0 0 1 140,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,90 A 45,50 0 0 1 110,45 A 45,50 0 0 1 155,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="90" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="90" x2="65" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="90" x2="155" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 0 155,180" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 1 155,180" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="90" x2="153" y2="90" stroke="#2563eb" stroke-width="2"/><text x="132" y="100" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 cm</text><text x="110" y="205" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">sy = 4 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 7 cm, hoogte 8 cm) met ʼn keël (dieselfde radius, hoogte 6 cm) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['1 230,88 cm³', '307,72 cm³', '1 538,6 cm³', '2 154,04 cm³'], correctIndex: 2, explanation: 'Silinder: πr²h = 3,14 × 49 × 8 = 1 230,88 cm³. Keël: ⅓πr²h = ⅓ × 3,14 × 49 × 6 = 307,72 cm³. Totaal = 1 230,88 + 307,72 = 1 538,6 cm³. (1 230,88 cm³ vergeet om die keël by te tel; 307,72 cm³ bereken net die keël en vergeet die silinder; 2 154,04 cm³ vergeet die ⅓-faktor wanneer die keël se volume bereken word.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 8 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 6 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="82" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 cm</text></svg>'},

        // Blok 6 — Oppervlakte van saamgestelde voorwerpe, skalering, ontbrekende dimensies (Hard)
        { difficulty: 'Hard', question: 'ʼn Voorwerp bestaan uit ʼn silinder (radius 2 cm, hoogte 9 cm) met ʼn halfrond (dieselfde radius) bo-op. Vind die totale oppervlakte daarvan, met die interne verbindingsirkel uitgesluit. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['163,28 cm²', '138,16 cm²', '175,84 cm²', '150,72 cm²'], correctIndex: 3, explanation: 'Silinder geboë oppervlak: 2πrh = 2 × 3,14 × 2 × 9 = 113,04 cm². Silinder onderste sirkel: πr² = 3,14 × 4 = 12,56 cm². Halfrond geboë oppervlak: 2πr² = 2 × 3,14 × 4 = 25,12 cm². Totaal = 113,04 + 12,56 + 25,12 = 150,72 cm². (163,28 cm² sluit verkeerdelik ook die interne verbindingsirkel in; 138,16 cm² vergeet die silinder se onderste sirkel; 175,84 cm² gebruik die volle sfeer se geboë oppervlakte in plaas van net dié van die halfrond.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="82" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 cm</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 9 cm</text></svg>'},
        { difficulty: 'Hard', question: 'ʼn Silinder het radius 3 cm en hoogte 5 cm. Albei dimensies word met ʼn skaalfaktor van 4 vergroot (nuwe radius 12 cm, nuwe hoogte 20 cm). Watter van die volgende gee korrek die skaalfaktor toegepas op (a) die oppervlakte en (b) die volume?', checkMode: 'auto', options: ['Oppervlakte × 16; Volume × 64', 'Oppervlakte × 64; Volume × 16', 'Oppervlakte × 4; Volume × 4', 'Oppervlakte × 8; Volume × 16'], correctIndex: 0, explanation: 'Lineêre skaalfaktor = 4. Oppervlakte-skaalfaktor = 4² = 16. Volume-skaalfaktor = 4³ = 64. (Opsie B verwissel die kwadraat- en derdemagfaktore; Opsie C pas per ongeluk die lineêre faktor 4 op albei toe in plaas daarvan om dit te kwadreer/kubeer; Opsie D verdubbel die lineêre faktor vir oppervlakte in plaas daarvan om dit te kwadreer, en gebruik die kwadraatwaarde in plaas van die derdemagwaarde vir volume.)' , diagramSvg: '<svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg"><ellipse cx="55" cy="35" rx="25" ry="9" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><line x1="30" y1="35" x2="30" y2="90" stroke="#0f1f3d" stroke-width="2.2"/><line x1="80" y1="35" x2="80" y2="90" stroke="#0f1f3d" stroke-width="2.2"/><path d="M 30,90 A 25,9 0 0 0 80,90" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><path d="M 30,90 A 25,9 0 0 1 80,90" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="55" y="115" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">r=3,h=5</text><text x="55" y="131" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Oorspronklik</text><line x1="105" y1="90" x2="150" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSc4)"/><defs><marker id="arrowSc4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><ellipse cx="270" cy="30" rx="70" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><line x1="200" y1="30" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2.2"/><line x1="340" y1="30" x2="340" y2="140" stroke="#0f1f3d" stroke-width="2.2"/><path d="M 200,140 A 70,18 0 0 0 340,140" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><path d="M 200,140 A 70,18 0 0 1 340,140" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="270" y="178" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r=12 cm, h=20 cm</text><text x="270" y="196" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Vergroot</text></svg>'},
        { difficulty: 'Hard', question: 'ʼn Silinder het volume 1 256 cm³ en radius 10 cm. Vind die hoogte daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['40 cm', '4 cm', '1 cm', '12,56 cm'], correctIndex: 1, explanation: 'V = πr²h → 1 256 = 3,14 × 100 × h → 1 256 = 314h → h = 4 cm. (40 cm vergeet om die radius te kwadreer, en deel deur r in plaas van r²; 1 cm gebruik per ongeluk die middellyn 20 cm as die radius; 12,56 cm laat π uit die berekening.)' },
        { difficulty: 'Hard', question: 'ʼn Sfeer het volume 113,04 cm³. Vind die radius daarvan. Gebruik π ≈ 3,14.', checkMode: 'auto', options: ['27 cm', '3,30 cm', '3 cm', '2,08 cm'], correctIndex: 2, explanation: 'V = (4/3)πr³ → 113,04 = (4/3) × 3,14 × r³ → r³ = 113,04 ÷ 4,18666... = 27 → r = ∛27 = 3 cm. (27 cm vergeet om die derdemagswortel te trek en gee r³ in plaas van r; 3,30 cm kom van die weglaat van die 4/3-faktor, deur r³ = 113,04 ÷ 3,14 = 36 op te los; 2,08 cm deel per ongeluk deur 4π asof die oppervlakteformule verkeerd herrangskik is.)' },
        { difficulty: 'Hard', question: "Amahle sê dat om die radius van ʼn silinder te halveer (terwyl die hoogte dieselfde bly) verminder die volume daarvan tot ʼn kwart van die oorspronklike. Is sy korrek?", checkMode: 'auto', options: ['Nee — die halvering van die radius halveer net die volume, aangesien volume direk eweredig is aan die radius.', 'Nee — die halvering van die radius verminder die volume tot ʼn agtste, aangesien volume van r³ afhang soos by ʼn sfeer.', 'Ja, maar net omdat π ook gehalveer word in die berekening.', 'Ja — aangesien V = πr²h van r in die kwadraat afhang, vermenigvuldig die halvering van die radius die volume met (½)² = ¼, wat haar stelling bevestig.'], correctIndex: 3, explanation: 'V = πr²h hang van r in die kwadraat af (nie lineêr nie, en nie van r³ soos by ʼn sfeer nie), so die halvering van r vermenigvuldig V met (½)² = ¼. Amahle is korrek.' },
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
      checkMode: 'auto',
      options: ['942 cm³', '533,8 cm³', '300 cm³', '3 768 cm³'],
      correctIndex: 0,
      explanation: 'V = πr²h = 3,14 × 25 × 12 = 942 cm³. (533,8 cm³ is die oppervlakteformule wat per ongeluk in plaas van die volumeformule gebruik word; 300 cm³ laat π heeltemal weg; 3 768 cm³ gebruik per ongeluk die middellyn 10 cm as die radius.)',
    },

    // ── Q2 Medium — surface area of sphere ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die oppervlakte van ʼn sfeer met radius 7 cm. Gebruik π ≈ 3,14.',
      checkMode: 'auto',
      options: ['153,86 cm²', '615,44 cm²', '1 436,03 cm²', '2 461,76 cm²'],
      correctIndex: 1,
      explanation: 'O = 4πr² = 4 × 3,14 × 49 = 615,44 cm². (153,86 cm² laat die faktor 4 weg; 1 436,03 cm² pas per ongeluk die volumeformule (4/3)πr³ toe; 2 461,76 cm² gebruik die middellyn 14 cm as die radius.)',
    },

    // ── Q3 Hard — check Sipho's cone calculation ──────────────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho bereken die volume van ʼn keël met radius 3 cm en hoogte 8 cm. Watter van die volgende is die korrekte volume?",
      checkMode: 'auto',
      options: ['226,08 cm³', '301,44 cm³', '75,36 cm³', '200,96 cm³'],
      correctIndex: 2,
      explanation: "V = ⅓πr²h = ⅓ × 3,14 × 9 × 8 = 75,36 cm³, dus is Sipho se antwoord korrek. (226,08 cm³ vergeet die ⅓-faktor en gee die volume van ʼn volle silinder; 301,44 cm³ gebruik per ongeluk die middellyn 6 cm as die radius; 200,96 cm³ verwissel die radius- en hoogtewaardes in die formule.)",
    },

    // ── Q4 Easy — volume of square pyramid ───────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die volume van ʼn vierkantige piramide met basissy 6 cm en hoogte 10 cm.',
      checkMode: 'auto',
      options: ['360 cm³', '20 cm³', '80 cm³', '120 cm³'],
      correctIndex: 3,
      explanation: 'V = ⅓ × basisoppervlakte × hoogte = ⅓ × 36 × 10 = 120 cm³. (360 cm³ vergeet die ⅓-faktor en gee die volume van ʼn volle prisma; 20 cm³ gebruik per ongeluk die basissy (6) in plaas van die basisoppervlakte (6²=36); 80 cm³ gebruik die basisomtrek (4×6=24) in plaas van die basisoppervlakte.)',
    },

    // ── Q5 Medium — volume of sphere ─────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die volume van ʼn sfeer met radius 4,5 cm. Gebruik π ≈ 3,14.',
      checkMode: 'auto',
      options: ['381,51 cm³', '286,13 cm³', '254,34 cm³', '3 052,08 cm³'],
      correctIndex: 0,
      explanation: 'V = (4/3)πr³ = (4/3) × 3,14 × 91,125 ≈ 381,51 cm³. (286,13 cm³ laat die 4/3-faktor weg; 254,34 cm³ pas per ongeluk die oppervlakteformule 4πr² toe; 3 052,08 cm³ gebruik die middellyn 9 cm as die radius.)',
    },

    // ── Q6 Hard — combined solid volume ──────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Voorwerp is ʼn silinder (radius 4 cm, hoogte 12 cm) met ʼn halfrond (dieselfde radius) bo-op. Vind die totale volume daarvan. Gebruik π ≈ 3,14.',
      checkMode: 'auto',
      options: ['602,88 cm³', '736,85 cm³', '870,83 cm³', '133,97 cm³'],
      correctIndex: 1,
      explanation: 'Silinder: πr²h = 3,14 × 16 × 12 = 602,88 cm³. Halfrond: ½ × (4/3)πr³ = ½ × (4/3) × 3,14 × 64 ≈ 133,97 cm³. Totaal ≈ 602,88 + 133,97 = 736,85 cm³. (602,88 cm³ vergeet om die halfrond bo-op by te tel; 870,83 cm³ gebruik ʼn volle sfeer in plaas van ʼn halfrond; 133,97 cm³ bereken net die halfrond en vergeet die silinder.)',
    },

    // ── Q7 Medium — capsule volume ────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Kapsule het ʼn silinder (radius 3 cm, hoogte 15 cm) met ʼn halfrond aan elke punt. Vind die totale volume. Gebruik π ≈ 3,14.',
      checkMode: 'auto',
      options: ['423,9 cm³', '480,42 cm³', '536,94 cm³', '649,98 cm³'],
      correctIndex: 2,
      explanation: 'Silinder: 3,14 × 9 × 15 = 423,9 cm³. Twee halfronde = een sfeer: (4/3) × 3,14 × 27 ≈ 113,04 cm³. Totaal ≈ 423,9 + 113,04 = 536,94 cm³. (423,9 cm³ vergeet om die twee halfrondpunte by te tel; 480,42 cm³ tel net een halfrond by in plaas van albei; 649,98 cm³ behandel elke punt per ongeluk as ʼn volle sfeer in plaas van ʼn halfrond.)',
    },

    // ── Q8 Hard — surface area of cone ───────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die oppervlakte van ʼn keël met radius 5 cm en skuinshoogte 13 cm. Gebruik π ≈ 3,14.',
      checkMode: 'auto',
      options: ['204,1 cm²', '722,2 cm²', '734,76 cm²', '282,6 cm²'],
      correctIndex: 3,
      explanation: 'O = πr² + πrl = 3,14 × 25 + 3,14 × 5 × 13 = 78,5 + 204,1 = 282,6 cm². (204,1 cm² vergeet die basissirkel en vind net die geboë oppervlak; 722,2 cm² gebruik per ongeluk die middellyn 10 cm as die radius; 734,76 cm² verwissel die radius en skuinshoogte in die formule.)',
    },

    // ── Q9 Hard — Lerato's claim about combining cylinders ────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê om twee silinders punt-aan-punt saam te voeg verdubbel die oppervlakte van een silinder. Is sy korrek?',
      checkMode: 'auto',
      options: [
        'Nee — wanneer saamgevoeg, word die twee sirkelvormige vlakke waar hulle verbind intern en is nie meer deel van die buitenste oppervlak nie, dus is die totale oppervlakte minder as dubbel.',
        'Ja — die samevoeging van twee identiese voorwerpe verdubbel altyd presies die totale oppervlakte, ongeag die vorm.',
        'Nee — die totale oppervlakte bly eintlik dieselfde as een silinder, aangesien die twee verbindende vlakke heeltemal kanselleer.',
        'Ja, maar net as die twee silinders verskillende radiusse het.',
      ],
      correctIndex: 0,
      explanation: "Wanneer twee silinders punt-aan-punt saamgevoeg word, word die twee sirkelvormige vlakke waar hulle verbind intern en word uitgesluit van die buitenste oppervlak, dus is die totaal minder as dubbel een silinder se oppervlakte — Lerato is verkeerd. (Opsie B ignoreer dat verbindende vlakke intern word; Opsie C neem verkeerdelik aan dat die verbindende vlakke heeltemal kanselleer tot net een silinder se oppervlakte; Opsie D is irrelevant aangesien die effek van samevoeging ongeag ooreenstemmende radiusse geld.)",
    },

    // ── Q10 Easy — find radius of cylinder ───────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Silinder het volume 251,2 cm³ en hoogte 8 cm. Vind die radius daarvan. Gebruik π ≈ 3,14.',
      checkMode: 'auto',
      options: ['10 cm', '3,16 cm', '5,60 cm', '2,24 cm'],
      correctIndex: 1,
      explanation: 'V = πr²h → 251,2 = 3,14 × r² × 8 → r² = 251,2 ÷ 25,12 = 10 → r = √10 ≈ 3,16 cm. (10 cm vergeet om die vierkantswortel van r² te trek; 5,60 cm laat π uit die berekening; 2,24 cm deel per ongeluk deur 2πh in plaas van πh, en verwar dit met die geboë-oppervlakteformule.)',
    },

    // ── Q11 Medium — find radius of cone ─────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Keël het volume 188,4 cm³ en hoogte 9 cm. Vind die radius daarvan (afgerond tot 2 desimale plekke). Gebruik π ≈ 3,14.',
      checkMode: 'auto',
      options: ['20 cm', '4,47 cm', '2,58 cm', '7,92 cm'],
      correctIndex: 1,
      explanation: 'V = ⅓πr²h → 188,4 = ⅓ × 3,14 × r² × 9 → 188,4 = 9,42r² → r² = 20 → r = √20 ≈ 4,47 cm. (20 cm vergeet om die vierkantswortel te trek en gee r² in plaas van r; 2,58 cm vergeet die ⅓-faktor, en los πr²h = 188,4 op; 7,92 cm laat π uit die berekening.)',
    },

    // ── Q12 Hard — find radius from sphere surface area ───────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Sfeer het oppervlakte 314 cm². Vind die radius daarvan. Gebruik π ≈ 3,14.',
      checkMode: 'auto',
      options: ['10 cm', '25 cm', '4,22 cm', '5 cm'],
      correctIndex: 3,
      explanation: 'O = 4πr² → 314 = 4 × 3,14 × r² → r² = 314 ÷ 12,56 = 25 → r = √25 = 5 cm. (10 cm vergeet die faktor 4, en deel net deur π in plaas van 4π; 25 cm vergeet om die vierkantswortel te trek en gee r² in plaas van r; 4,22 cm gebruik per ongeluk die volumeformule (4/3)πr³ in plaas van die oppervlakteformule.)',
    },

    // ── Q13 Hard — find height of pyramid ────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo se piramide het ʼn vierkantige basis met sy 5 cm en volume 100 cm³. Vind die hoogte daarvan.",
      checkMode: 'auto',
      options: ['12 cm', '4 cm', '60 cm', '15 cm'],
      correctIndex: 0,
      explanation: 'Volume = ⅓ × basisoppervlakte × hoogte → 100 = ⅓ × 25 × h → 100 = 8,33h → h = 12 cm. (4 cm kom van die vergeet van die ⅓-faktor, en los basisoppervlakte × h = 100 op; 60 cm gebruik per ongeluk die basissy (5) in plaas van die basisoppervlakte (25); 15 cm gebruik die basisomtrek (4×5=20) in plaas van die basisoppervlakte.)',
    },

    // ── Q14 Hard — volume of combined solid ──────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Voorwerp bestaan uit ʼn keël (radius 5 cm, hoogte 12 cm) bo-op ʼn silinder (dieselfde radius, hoogte 8 cm). Vind die totale volume. Gebruik π ≈ 3,14.',
      checkMode: 'auto',
      options: ['314 cm³', '942 cm³', '628 cm³', '1 570 cm³'],
      correctIndex: 1,
      explanation: 'Keël: ⅓ × 3,14 × 25 × 12 = 314 cm³. Silinder: 3,14 × 25 × 8 = 628 cm³. Totaal: 314 + 628 = 942 cm³. (314 cm³ bereken net die keël en vergeet die silinder; 628 cm³ bereken net die silinder en vergeet die keël; 1 570 cm³ vergeet die ⅓-faktor wanneer die keël se volume bereken word.)',
    },

    // ── Q15 Hard — surface area of combined solid ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die oppervlakte van die saamgestelde voorwerp in V14, met die interne verbindingsirkel uitgesluit. Gebruik π ≈ 3,14.',
      checkMode: 'auto',
      options: ['455,3 cm²', '518,1 cm²', '533,8 cm²', '612,3 cm²'],
      correctIndex: 2,
      explanation: 'Keël skuinshoogte = √(5² + 12²) = 13 cm. Keël geboë oppervlak = πrl = 3,14 × 5 × 13 = 204,1 cm². Silinder geboë oppervlak = 2πrh = 2 × 3,14 × 5 × 8 = 251,2 cm². Silinder onderkant = πr² = 78,5 cm². Totaal = 204,1 + 251,2 + 78,5 = 533,8 cm². (455,3 cm² vergeet die silinder se onderste sirkel; 518,1 cm² gebruik per ongeluk die keël se hoogte (12 cm) in plaas van die skuinshoogte (13 cm) in die geboë-oppervlakteformule; 612,3 cm² tel verkeerdelik ook die keël se basissirkel by, terwyl dit intern is.)',
    },

    // ── Q16 Hard — find radius from sphere volume ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle wil die radius van ʼn sfeer met volume 904,32 cm³ vind. Vind r, afgerond tot 1 desimale plek. Gebruik π ≈ 3,14.',
      checkMode: 'auto',
      options: ['216 cm', '6,6 cm', '8,5 cm', '6,0 cm'],
      correctIndex: 3,
      explanation: 'V = (4/3)πr³ → 904,32 = (4/3) × 3,14 × r³ → r³ = 216 → r = ∛216 = 6,0 cm. (216 cm vergeet om die derdemagswortel te trek en gee r³ in plaas van r; 6,6 cm kom van die weglaat van die 4/3-faktor, deur πr³ = 904,32 op te los; 8,5 cm gebruik per ongeluk die oppervlakteformule 4πr² in plaas van die volumeformule.)',
    },

    // ── Q17 Hard — Sipho's claim about hemisphere surface area ────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê ʼn halfrond het presies die helfte van die oppervlakte van ʼn volle sfeer met dieselfde radius. Is hy korrek?',
      checkMode: 'auto',
      options: [
        "Nee — ʼn halfrond se totale oppervlakte sluit die geboë helfte in (2πr², wat die helfte van 4πr² is) plus die plat sirkelvormige basis (πr²), wat dit meer as die helfte van die volle sfeer se oppervlakte maak.",
        "Ja — aangesien ʼn halfrond letterlik die helfte van ʼn sfeer is, is die totale oppervlakte altyd presies die helfte van 4πr².",
        "Nee — ʼn halfrond het geen plat basis nie, dus is die totale oppervlakte eintlik minder as die helfte van die volle sfeer se oppervlakte.",
        'Ja, maar net vir halfronde met ʼn radius groter as 5 cm.',
      ],
      correctIndex: 0,
      explanation: "ʼn Halfrond se totale oppervlakte = geboë oppervlak (2πr², presies die helfte van die sfeer se 4πr²) plus die plat sirkelvormige basis (πr²). Deur die basis by te tel, is die totaal meer as die helfte van die volle sfeer se oppervlakte, dus is Sipho verkeerd. (Opsie B vergeet om die plat basis by te tel; Opsie C beweer verkeerdelik dat daar geen plat basis is nie; Opsie D is irrelevant — die verhouding hang nie van die grootte van die radius af nie.)",
    },

    // ── Q18 Hard — total surface area of hemisphere ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die totale oppervlakte van ʼn halfrond met radius 6 cm, met die plat sirkelvormige basis ingesluit. Gebruik π ≈ 3,14.',
      checkMode: 'auto',
      options: ['226,08 cm²', '339,12 cm²', '452,16 cm²', '113,04 cm²'],
      correctIndex: 1,
      explanation: 'Geboë deel = 2πr² = 2 × 3,14 × 36 = 226,08 cm². Plat basis = πr² = 3,14 × 36 = 113,04 cm². Totaal = 226,08 + 113,04 = 339,12 cm². (226,08 cm² sluit net die geboë deel in en vergeet die plat sirkelvormige basis; 452,16 cm² gebruik per ongeluk die volle sfeer se oppervlakte (4πr²) in plaas van dié van die halfrond; 113,04 cm² sluit net die plat basis in en vergeet die geboë deel.)',
    },

    // ── Q19 Hard — water tank total volume ───────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Watertenk is ʼn silinder (radius 1,5 m, hoogte 3 m) met ʼn keëlvormige bopunt (dieselfde radius, hoogte 1 m) vir dreinering. Vind die totale volume in kubieke meter. Gebruik π ≈ 3,14.',
      checkMode: 'auto',
      options: ['21,2 m³', '2,36 m³', '23,55 m³', '28,26 m³'],
      correctIndex: 2,
      explanation: 'Silinder: 3,14 × 1,5² × 3 = 21,195 m³. Keël: ⅓ × 3,14 × 1,5² × 1 = 2,355 m³. Totaal ≈ 21,195 + 2,355 = 23,55 m³. (21,2 m³ vergeet om die keëlvormige bopunt by te tel; 2,36 m³ bereken net die keël en vergeet die silindriese basis; 28,26 m³ vergeet die ⅓-faktor wanneer die keël se volume bereken word.)',
    },

    // ── Q20 Hard — Lerato's claim about doubling radius ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê om die radius van ʼn keël te verdubbel (terwyl die hoogte konstant bly) vervierdubbel die volume daarvan. Is sy korrek?',
      checkMode: 'auto',
      options: [
        'Nee — die verdubbeling van die radius verdubbel net die volume, aangesien volume direk eweredig is aan die radius.',
        'Nee — die verdubbeling van die radius vermenigvuldig die volume met 8, aangesien volume van r³ afhang soos by ʼn sfeer.',
        'Ja, maar net omdat π ook verdubbel word in die berekening.',
        'Ja — aangesien Volume = ⅓πr²h van radius in die kwadraat afhang, vermenigvuldig die verdubbeling van die radius die volume met 2² = 4, wat haar stelling bevestig.',
      ],
      correctIndex: 3,
      explanation: 'Volume = ⅓πr²h hang van radius in die kwadraat af (nie lineêr nie, en nie van r³ soos by ʼn sfeer nie), so die verdubbeling van r vermenigvuldig V met 2² = 4. Lerato is korrek.',
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
