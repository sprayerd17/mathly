import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// shapes broken down / original dimensions / scale factor (linear) → blue   (#2563eb)
// unit conversion / doubled dimensions / area scale factor          → orange (#ea580c)
// final answer / area-perimeter change / final calculation          → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Oppervlakte en Omtrek',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — OPLOS VAN PROBLEME MET FORMULES EN EENHEIDOMSKAKELINGS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'formulae-and-unit-conversions',
      title: 'Oplos van Probleme met Formules en Eenheidomskakelings',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik toepaslike formules en omskakelings tussen SI-eenhede om probleme op te los en die omtrek en oppervlakte van veelhoeke en sirkels te bereken, terwyl ons met selfvertroue al ons vaardighede van vorige grade toepas.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vorms ontbind')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eenheidomskakeling')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelformules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Sirkel — Oppervlakte</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">O = πr²</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Sirkel — Omtrek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">O = πd = 2πr</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Halfsirkel — Oppervlakte</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">O = ½πr²</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Reghoek — Oppervlakte</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">O = l × b</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">SI-eenheidomskakelings vir oppervlakte</p>` +
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0 0 6px;font-size:14px;color:#374151;">${or('1 m = 100 cm')} → ${or('1 m² = 100 × 100 = 10 000 cm²')}</p>` +
        `<p style="margin:0 0 6px;font-size:14px;color:#374151;">${or('1 m = 1 000 mm')} → ${or('1 m² = 1 000 000 mm²')}</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">${or('1 km = 1 000 m')} → ${or('1 km² = 1 000 000 m²')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategie vir onreëlmatige vorms</p>` +
        `<p style="margin:0;color:#1e3a8a;">Verdeel die vorm in ${bl('herkenbare dele')} (reghoeke, driehoeke, halfsirkels), bereken elke deel apart, en tel dan bymekaar of trek af om die ${gr('totale oppervlakte')} te kry. Pas ${or('eenheidomskakelings')} eers by die laaste stap toe, waar nodig.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Sirkelvormige tuin het ʼn radius van 4,5 m. Vind die oppervlakte daarvan in m², en skakel dan om na cm².',
          answer: `Oppervlakte = ${gr('63,585 m²')} = ${or('635 850 cm²')}`,
          steps: [
            `Pas die formule toe: Oppervlakte = ${bl('πr²')} = 3,14 × ${bl('4,5²')} = 3,14 × ${bl('20,25')} = ${gr('63,585 m²')}`,
            `${or('Skakel om na cm²:')} 1 m² = 10 000 cm², dus ${or('63,585 × 10 000')} = ${or('635 850 cm²')}`,
            `<strong>Antwoord:</strong> Oppervlakte = ${gr('63,585 m²')} = ${or('635 850 cm²')} ✓`,
          ],
        },
        {
          question: 'Sipho se onreëlmatige perseel bestaan uit ʼn reghoek (10 m by 6 m) en ʼn halfsirkel (radius 3 m) wat aan een kant vasgeheg is. Vind die totale oppervlakte tot 2 desimale plekke.',
          answer: `Totale oppervlakte = ${gr('74,13 m²')}`,
          steps: [
            `${bl('Reghoek-oppervlakte:')} l × b = ${bl('10 × 6')} = ${bl('60 m²')}`,
            `${bl('Halfsirkel-oppervlakte:')} ½ × π × r² = 0,5 × 3,14 × ${bl('3²')} = 0,5 × 3,14 × ${bl('9')} = ${bl('14,13 m²')}`,
            `${gr('Totale oppervlakte:')} 60 + 14,13 = ${gr('74,13 m²')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Easy — sirkeloppervlakte ──────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Sirkel het ʼn radius van 6 m. Vind die oppervlakte daarvan tot 2 desimale plekke.',
          answer: '113,04 m²',
          checkMode: 'auto',
          correctAnswer: '113.04m²',
          correctAnswers: ['113.04m²', '113.04 m²', '113.04', '113,04m²', '113,04 m²', '113,04'],
          explanation: 'Oppervlakte = πr² = 3,14 × 6² = 3,14 × 36 = 113,04 m² ✓',
        },

        // ── V2 Medium — eenheidomskakeling ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Skakel 45 000 cm² om na m².',
          answer: '4,5 m²',
          checkMode: 'auto',
          correctAnswer: '4.5m²',
          correctAnswers: ['4.5m²', '4.5 m²', '4.5', '4,5m²', '4,5 m²', '4,5'],
          explanation: '1 m² = 10 000 cm²\n45 000 ÷ 10 000 = 4,5 m² ✓',
        },

        // ── V3 Hard — onreëlmatige perseel ──────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho se perseel is ʼn reghoek (8 m by 5 m) met ʼn halfsirkel (radius 2,5 m) daaraan vas. Vind die totale oppervlakte tot 2 desimale plekke.',
          answer: 'Reghoek = 8 × 5 = 40 m²\nHalfsirkel = 0,5 × 3,14 × 2,5² = 0,5 × 3,14 × 6,25 = 9,81 m²\nTotaal = 40 + 9,81 = 49,81 m²',
          checkMode: 'self',
        },

        // ── V9 Medium — sirkeldeursnee, aparte dele ───────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Sirkel het ʼn deursnee van 10 cm. Vind die omtrek en oppervlakte daarvan tot 2 desimale plekke.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Omtrek',
              correctAnswer: '31.4cm',
              correctAnswers: ['31.4cm', '31.4 cm', '31.4', '31,4cm', '31,4 cm', '31,4'],
              explanation: 'Omtrek = πd = 3,14 × 10 = 31,4 cm ✓',
            },
            {
              label: 'b) Oppervlakte',
              correctAnswer: '78.5cm²',
              correctAnswers: ['78.5cm²', '78.5 cm²', '78.5', '78.50cm²', '78.50 cm²', '78,5cm²', '78,5 cm²', '78,5', '78,50cm²', '78,50 cm²'],
              explanation: 'Radius = deursnee ÷ 2 = 5 cm\nOppervlakte = πr² = 3,14 × 5² = 3,14 × 25 = 78,5 cm² ✓',
            },
          ],
        },

        // ── V12 Hard — reghoek minus sirkeluitsnyding ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho se onreëlmatige vorm is ʼn reghoek (12 m by 7 m) met ʼn sirkelvormige uitsnyding (radius 2 m) uitgesny. Vind die oorblywende oppervlakte tot 2 desimale plekke.',
          answer: '71,44 m²',
          checkMode: 'auto',
          correctAnswer: '71.44m²',
          correctAnswers: ['71.44m²', '71.44 m²', '71.44', '71,44m²', '71,44 m²', '71,44'],
          explanation: 'Reghoek-oppervlakte = 12 × 7 = 84 m²\nSirkel-oppervlakte = π × r² = 3,14 × 2² = 3,14 × 4 = 12,56 m²\nOorblywende oppervlakte = 84 − 12,56 = 71,44 m² ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply area and perimeter formulae for circles and composite shapes, including SI unit conversions between cm² and m²" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of Sipho\'s irregular plot broken into a rectangle and a semicircle, with each part labelled in blue and the total area shown in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — ONDERSOEK VAN DIE EFFEK VAN VERDUBBELING VAN AFMETINGS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'effect-of-doubling-dimensions',
      title: 'Ondersoek van die Effek van Verdubbeling van Afmetings op Omtrek en Oppervlakte',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">Ons ondersoek hoe die verdubbeling van enige of al die afmetings van ʼn 2D-figuur die omtrek en die oppervlakte daarvan beïnvloed. Die verdubbeling van een afmeting van ʼn reghoek verdubbel óf die omtrekbydrae van daardie kant óf die oppervlakte eweredig; die verdubbeling van al die afmetings vermenigvuldig die omtrek met die skaalfaktor en die oppervlakte met die skaalfaktor in die kwadraat.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike afmetings')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('verdubbelde afmetings')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oppervlakte-/omtrekverandering')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutel skaleringsverwantskappe</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">As ${bl('slegs een afmeting')} met ʼn faktor k vermenigvuldig word, word die ${gr('oppervlakte met k vermenigvuldig')} (die ander afmeting bly onveranderd).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">As ${or('al die afmetings')} met k vermenigvuldig word, word die ${gr('omtrek met k vermenigvuldig')} en die ${gr('oppervlakte met k²')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Vir ʼn sirkel ${gr('verdubbel')} die verdubbeling van die radius die ${gr('omtrek')} (lineêr), maar dit ${gr('verviervoudig die oppervlakte')} (oppervlakte ∝ r²).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom omtrek en oppervlakte verskillend skaleer</p>` +
        `<p style="margin:0;color:#1e3a8a;">Omtrek is ʼn ${bl('een-dimensionele')} maatstaf (lengte), dus skaleer dit met dieselfde faktor as die afmetings. Oppervlakte is ʼn ${or('twee-dimensionele')} maatstaf, dus skaleer dit met die ${gr('kwadraat van die skaalfaktor')}. Dit is waarom die vergroting van ʼn vorm sy oppervlakte veel vinniger laat groei as sy omtrek.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Reghoek is 4 cm by 6 cm. Verdubbel slegs die lengte. Vergelyk die nuwe oppervlakte met die oorspronklike.',
          answer: `Oorspronklike oppervlakte = ${bl('24 cm²')}. Nuwe oppervlakte = ${or('48 cm²')} — die oppervlakte het ${gr('verdubbel')}.`,
          steps: [
            `${bl('Oorspronklike oppervlakte:')} 4 × 6 = ${bl('24 cm²')}`,
            `${or('Nuwe afmetings:')} lengte verdubbel → nuwe lengte = 12 cm, breedte onveranderd = 4 cm`,
            `${or('Nuwe oppervlakte:')} 4 × 12 = ${or('48 cm²')}`,
            `${gr('Vergelyking:')} 48 ÷ 24 = 2 — die oppervlakte het ${gr('verdubbel')}, eweredig aan die verandering in die enkele afmeting ✓`,
          ],
        },
        {
          question: 'ʼn Vierkant het sye van 5 cm. Verdubbel die sye. Vergelyk die nuwe omtrek en oppervlakte met die oorspronklike.',
          answer: `Omtrek: ${bl('20 cm')} → ${or('40 cm')} (${gr('verdubbel')}). Oppervlakte: ${bl('25 cm²')} → ${or('100 cm²')} (${gr('verviervoudig, aangesien 2² = 4')}).`,
          steps: [
            `${bl('Oorspronklik:')} omtrek = 4 × 5 = ${bl('20 cm')}, oppervlakte = 5² = ${bl('25 cm²')}`,
            `${or('Nuwe sye:')} 5 × 2 = ${or('10 cm')}`,
            `${or('Nuwe omtrek:')} 4 × 10 = ${or('40 cm')} — ${gr('verdubbel')} (omtrek skaleer met dieselfde faktor as die afmetings)`,
            `${or('Nuwe oppervlakte:')} 10² = ${or('100 cm²')} — ${gr('verviervoudig')} omdat 2² = 4 (oppervlakte skaleer met die kwadraat van die skaalfaktor) ✓`,
          ],
        },
        {
          question: 'Lerato sê die verdubbeling van slegs een afmeting (lengte OF breedte) van ʼn reghoek verdubbel altyd sy oppervlakte. Is dit altyd waar?',
          answer: `${gr('Ja — altyd waar.')} Die verdubbeling van een afmeting terwyl die ander vas bly, verdubbel altyd die oppervlakte.`,
          steps: [
            `Kom ons sê ʼn reghoek het afmetings ${bl('l')} en ${bl('b')}. Oorspronklike oppervlakte = ${bl('l × b')}.`,
            `Verdubbel slegs die lengte: nuwe oppervlakte = ${or('2l')} × ${bl('b')} = ${or('2lb')} = ${gr('2 × oorspronklike oppervlakte')}`,
            `Verdubbel slegs die breedte: nuwe oppervlakte = ${bl('l')} × ${or('2b')} = ${or('2lb')} = ${gr('2 × oorspronklike oppervlakte')}`,
            `${gr('Gevolgtrekking:')} Ja — as slegs een afmeting verdubbel terwyl die ander dieselfde bly, is die oppervlakte direk eweredig aan daardie afmeting, dus verdubbel die oppervlakte altyd wanneer dit verdubbel ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V4 Easy — verdubbel slegs die breedte ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Reghoek is 3 cm by 8 cm. Verdubbel slegs die breedte. Vind die nuwe oppervlakte.',
          answer: '48 cm²',
          checkMode: 'auto',
          correctAnswer: '48cm²',
          correctAnswers: ['48cm²', '48 cm²', '48'],
          explanation: 'Oorspronklik: 3 × 8 = 24 cm².\nNuwe breedte = 3 × 2 = 6 cm. Nuwe oppervlakte = 6 × 8 = 48 cm² (oppervlakte het verdubbel aangesien slegs een afmeting verander het) ✓',
        },

        // ── V5 Medium — verdubbel vierkant se sye, aparte dele ───────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Vierkant het sye van 6 cm. Verdubbel die sye. Vind die nuwe omtrek en oppervlakte.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Nuwe omtrek',
              correctAnswer: '48cm',
              correctAnswers: ['48cm', '48 cm', '48'],
              explanation: 'Oorspronklike omtrek = 4 × 6 = 24 cm.\nNuwe sye = 12 cm. Nuwe omtrek = 4 × 12 = 48 cm (verdubbel) ✓',
            },
            {
              label: 'b) Nuwe oppervlakte',
              correctAnswer: '144cm²',
              correctAnswers: ['144cm²', '144 cm²', '144'],
              explanation: 'Oorspronklike oppervlakte = 6² = 36 cm².\nNuwe oppervlakte = 12² = 144 cm² (verviervoudig, aangesien 2² = 4) ✓',
            },
          ],
        },

        // ── V6 Hard — Lerato verdriedubbeling (self) ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê die verdriedubbeling van een afmeting van ʼn reghoek verdriedubbel sy oppervlakte, terwyl die verdriedubbeling van albei afmetings die oppervlakte met 9 vermenigvuldig. Is sy korrek? Verduidelik.',
          answer: 'Ja — die verdriedubbeling van slegs een afmeting verdriedubbel die oppervlakte eweredig, maar die verdriedubbeling van albei afmetings beteken die oppervlakte skaleer met 3² = 9, aangesien beide die lengte- en breedtefaktore met mekaar vermenigvuldig word.',
          checkMode: 'self',
        },

        // ── V10 Hard — Amahle verdubbel radius (self) ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle sê die verdubbeling van die radius van ʼn sirkel verviervoudig sy oppervlakte, maar verdubbel slegs sy omtrek. Is sy korrek? Verduidelik.',
          answer: 'Ja — omtrek hang lineêr van die radius af (verdubbel), terwyl oppervlakte van die radius in die kwadraat afhang (verviervoudig wanneer die radius verdubbel).',
          checkMode: 'self',
        },

        // ── V11 Medium — gehalveerde reghoek ─────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Reghoek se afmetings word albei gehalveer. Die oorspronklike oppervlakte was 36 cm². Vind die nuwe oppervlakte.',
          answer: '9 cm²',
          checkMode: 'auto',
          correctAnswer: '9cm²',
          correctAnswers: ['9cm²', '9 cm²', '9'],
          explanation: 'Skaalfaktor = ½. Oppervlakte-skaalfaktor = (½)² = ¼.\nNuwe oppervlakte = 36 × ¼ = 9 cm² ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how doubling one dimension vs doubling all dimensions affects the perimeter and area of rectangles and squares differently" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a small square and a larger square with sides doubled, shown side by side with both perimeter and area labelled on each, illustrating the 2x perimeter vs 4x area relationship" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — OPLOS VAN GEKOMBINEERDE PROBLEME MET SKAALFAKTORE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'scale-factors-combined-problems',
      title: 'Oplos van Gekombineerde Probleme met Skaalfaktore',
      icon: '🔍',
      explanation:
        `<p style="margin-bottom:16px;">Ons los probleme op wat omtrek-/oppervlakteformules met skaalfaktorredenasie kombineer, deur dikwels oorspronklike en getransformeerde (vergrote of verkleinde) vorms in werklike-lewe kontekste te vergelyk.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('skaalfaktor (lineêr)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('oppervlakte-skaalfaktor (kwadraat)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale berekening')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Skaalfaktorreëls</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Lineêre skaalfaktor k</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Lengtes, omtrekke en radiusse word met ${bl('k')} vermenigvuldig.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Oppervlakte-skaalfaktor k²</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Oppervlaktes word altyd met ${or('k²')} vermenigvuldig, die kwadraat van die lineêre skaalfaktor.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Twee-stap-benadering</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Stap 1</strong> — Bepaal die ${bl('lineêre skaalfaktor k')} (direk gegee of bereken uit die verhouding van lengtes).<br><strong>Stap 2</strong> — Kwadreer dit om die ${or('oppervlakte-skaalfaktor k²')} te kry, en vermenigvuldig dan die bekende oppervlakte om die ${gr('werklike oppervlakte')} te kry.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Tuinplan word met ʼn skaalfaktor van 3 vergroot vir die werklike bou. As die plan se oppervlakte 8 m² is, vind die werklike tuin se oppervlakte.',
          answer: `Werklike oppervlakte = ${gr('72 m²')}`,
          steps: [
            `${bl('Lineêre skaalfaktor:')} k = ${bl('3')}`,
            `${or('Oppervlakte-skaalfaktor:')} k² = ${or('3² = 9')}`,
            `${gr('Werklike oppervlakte:')} 8 × ${or('9')} = ${gr('72 m²')} ✓`,
          ],
        },
        {
          question: 'Thabo se modelkar word gebou teen ʼn skaal van 1:20 (model tot werklik). As die model se oppervlak-oppervlakte 15 cm² is, vind die werklike kar se oppervlak-oppervlakte-skaalfaktor en beskryf die verwantskap.',
          answer: `Oppervlakte-skaalfaktor = ${or('400')}. Die werklike kar se oppervlak-oppervlakte sal ${gr('400 keer')} die model s'n wees.`,
          steps: [
            `${bl('Lineêre skaalfaktor:')} k = ${bl('20')} (die werklike kar is 20 keer groter as die model in elke lineêre afmeting)`,
            `${or('Oppervlakte-skaalfaktor:')} k² = ${or('20² = 400')}`,
            `${gr('Verwantskap:')} Die werklike kar se oppervlak-oppervlakte sal ${gr('400 keer')} die model s'n wees — al sou eenhede in die praktyk omgeskakel moet word (cm² na m²) vir ʼn werklike kar ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V7 Medium — tuinplan-skaalfaktor ──────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Tuinplan met oppervlakte 5 m² word met ʼn skaalfaktor van 4 vergroot. Vind die werklike tuin se oppervlakte.',
          answer: '80 m²',
          checkMode: 'auto',
          correctAnswer: '80m²',
          correctAnswers: ['80m²', '80 m²', '80'],
          explanation: 'Oppervlakte-skaalfaktor = 4² = 16. Werklike oppervlakte = 5 × 16 = 80 m² ✓',
        },

        // ── V8 Hard — model 1:15 (self) ───────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo se model word gebou teen skaal 1:15. As die model se oppervlakte 12 cm² is, vind die werklike oppervlakte se skaalfaktor en die werklike oppervlakte (met konstante eenhede aanvaar, vir eenvoud).',
          answer: 'Oppervlakte-skaalfaktor = 15² = 225. Werklike oppervlakte = 12 × 225 = 2700 cm² (in dieselfde eenhede, voor enige eenheidomskakeling indien nodig).',
          checkMode: 'self',
        },

        // ── V13 Hard — skaalmodel 1:10 (self) ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Skaalmodel het ʼn oppervlakte van 20 cm² teen ʼn skaal van 1:10. Vind die werklike oppervlakte, en verduidelik die verwantskap wat gebruik is.',
          answer: 'Oppervlakte-skaalfaktor = 10² = 100. Werklike oppervlakte = 20 × 100 = 2000 cm².',
          checkMode: 'self',
        },

        // ── V14 Hard — lengte verdriedubbel, breedte verdubbel (self) ──────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato se reghoek se lengte word verdriedubbel en breedte verdubbel. As die oorspronklike afmetings 4 cm by 5 cm was, vind die nuwe oppervlakte en vergelyk dit as ʼn veelvoud van die oorspronklike.',
          answer: 'Nuwe afmetings: 12 cm by 10 cm. Nuwe oppervlakte = 120 cm². Oorspronklike oppervlakte = 20 cm². Die nuwe oppervlakte is 6 keer die oorspronklike (3 × 2 = 6, wat ooreenstem met die gekombineerde skaalfaktore).',
          checkMode: 'self',
        },

        // ── V15 Hard — sirkelvormige swembad verdubbel oppervlakte (self) ─────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Sirkelvormige swembad met radius 5 m moet vergroot word sodat die oppervlakte daarvan verdubbel. Vind die nuwe radius tot 2 desimale plekke, en verduidelik jou redenasie.',
          answer: 'Oorspronklike oppervlakte = 3,14 × 25 = 78,5 m². Verdubbelde oppervlakte = 157 m². Nuwe radius: 157 = 3,14 × r², r² = 50, r = √50 ≈ 7,07 m.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply linear and area scale factors to solve real-life enlargement and reduction problems involving area and perimeter" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a small garden plan and its enlarged version with scale factor k labelled on sides, and k² labelled on the area, illustrating the difference between linear and area scaling" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het oppervlakte en omtrek bemeester.' },
    { minScore: 12, message: 'Goeie werk! Jy vaar goed — gaan enige afdelings weer deur waar jy punte laat val het.' },
    { minScore: 8, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer die vrae weer.' },
    { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en jy sal daar uitkom.' },
  ],
}
