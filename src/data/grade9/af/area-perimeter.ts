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
          correctAnswer: '113,04m²',
          correctAnswers: ['113.04m²', '113.04 m²', '113.04', '113,04m²', '113,04 m²', '113,04'],
          explanation: 'Oppervlakte = πr² = 3,14 × 6² = 3,14 × 36 = 113,04 m² ✓',
        },

        // ── V2 Medium — eenheidomskakeling ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Skakel 45 000 cm² om na m².',
          answer: '4,5 m²',
          checkMode: 'auto',
          correctAnswer: '4,5m²',
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
              correctAnswer: '31,4cm',
              correctAnswers: ['31.4cm', '31.4 cm', '31.4', '31,4cm', '31,4 cm', '31,4'],
              explanation: 'Omtrek = πd = 3,14 × 10 = 31,4 cm ✓',
            },
            {
              label: 'b) Oppervlakte',
              correctAnswer: '78,5cm²',
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
          correctAnswer: '71,44m²',
          correctAnswers: ['71.44m²', '71.44 m²', '71.44', '71,44m²', '71,44 m²', '71,44'],
          explanation: 'Reghoek-oppervlakte = 12 × 7 = 84 m²\nSirkel-oppervlakte = π × r² = 3,14 × 2² = 3,14 × 4 = 12,56 m²\nOorblywende oppervlakte = 84 − 12,56 = 71,44 m² ✓',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om oppervlakte- en omtrekformules vir sirkels en saamgestelde vorms toe te pas, insluitend SI-eenheidomskakelings tussen cm² en m²',
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
        'Kort video wat wys hoe die verdubbeling van een dimensie teenoor die verdubbeling van al die dimensies die omtrek en oppervlakte van reghoeke en vierkante verskillend beïnvloed',

      diagramPlaceholder:
        'ʼn Klein vierkant en ʼn groter vierkant met sye verdubbel, langs mekaar getoon met beide omtrek en oppervlakte op elk gemerk, wat die 2x-omtrek teenoor 4x-oppervlakte-verhouding illustreer',
      diagramSvg:
        '<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="70" width="45" height="45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="42.5" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="42.5" y="132" font-size="11" fill="#374151" text-anchor="middle">Omtrek = 20 cm</text><text x="42.5" y="146" font-size="11" fill="#374151" text-anchor="middle">Opp = 25 cm²</text><text x="90" y="98" font-size="18" fill="#ea580c" font-weight="700" text-anchor="middle">→</text><text x="90" y="112" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">×2</text><rect x="115" y="25" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="160" y="18" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">10 cm</text><text x="160" y="132" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">Omtrek = 40 cm (×2)</text><text x="160" y="146" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">Opp = 100 cm² (×4)</text></svg>',
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
        'Kort video wat wys hoe om lineêre en oppervlakte-skaalfaktore toe te pas om werklike-lewe vergrotings- en verkleiningsprobleme met omtrek en oppervlakte op te los',
    },
  ],

  practiceSets: [
    {
      name: 'Stel 1',
      questions: [
        // ── Blok 1: Sirkeloppervlakte en -omtrek (voorwaarts + omgekeerd) ─────
        { difficulty: 'Easy', question: 'ʼn Sirkelvormige fontein het ʼn radius van 7 m, soos getoon. Vind die omtrek daarvan (π = 3,14).', answer: '43,96 m', checkMode: 'auto', correctAnswer: '43,96m', correctAnswers: ['43.96m', '43.96 m', '43.96', '43,96m', '43,96 m', '43,96'], explanation: 'O = 2πr = 2 × 3,14 × 7 = 43,96 m ✓' , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="110" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><text x="140" y="87" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sirkelvormige tafelblad het ʼn deursnee van 14 cm, soos getoon. Vind die oppervlakte daarvan (π = 3,14).', answer: '153,86 cm²', checkMode: 'auto', correctAnswer: '153,86cm²', correctAnswers: ['153.86cm²', '153.86 cm²', '153.86', '153,86cm²', '153,86 cm²', '153,86'], explanation: 'r = d ÷ 2 = 14 ÷ 2 = 7 cm\nO = πr² = 3,14 × 7² = 3,14 × 49 = 153,86 cm² ✓' , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="50" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><text x="110" y="87" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">d = 14 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sirkelvormige blombedding het ʼn radius van 4,2 m, soos getoon. Bereken die oppervlakte daarvan tot 2 desimale plekke (π = 3,14).', answer: '55,39 m²', checkMode: 'auto', correctAnswer: '55,39m²', correctAnswers: ['55.39m²', '55.39 m²', '55.39', '55,39m²', '55,39 m²', '55,39'], explanation: 'O = πr² = 3,14 × 4,2² = 3,14 × 17,64 = 55,3896 ≈ 55,39 m² ✓' , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="110" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><text x="140" y="87" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4,2 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Sirkelvormige wenbaan het ʼn omtrek van 62,8 m (π = 3,14). Vind die radius daarvan.', answer: '10 m', checkMode: 'auto', correctAnswer: '10m', correctAnswers: ['10m', '10 m', '10'], explanation: 'O = 2πr\n62,8 = 2 × 3,14 × r\n62,8 = 6,28r\nr = 62,8 ÷ 6,28 = 10 m ✓' , diagramSvg: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="110" y1="95" x2="170" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><text x="140" y="87" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">r = ?</text><text x="110" y="179" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">O = 62,8 m</text></svg>' },

        // ── Blok 2: Saamgestelde figure (dele bygetel of afgetrek) ─────────────
        { difficulty: 'Medium', question: 'ʼn Sportveld bestaan uit ʼn reghoek 9 m by 5 m met ʼn halfsirkel van radius 2,5 m aan een van die 5 m-kante vasgeheg, soos getoon. Vind die totale oppervlakte tot 2 desimale plekke (π = 3,14).', answer: '54,81 m²', checkMode: 'auto', correctAnswer: '54,81m²', correctAnswers: ['54.81m²', '54.81 m²', '54.81', '54,81m²', '54,81 m²', '54,81'], explanation: 'Reghoek-oppervlakte = 9 × 5 = 45 m²\nHalfsirkel-oppervlakte = ½ × π × 2,5² = 0,5 × 3,14 × 6,25 = 9,8125 m²\nTotale oppervlakte = 45 + 9,8125 = 54,8125 ≈ 54,81 m² ✓' , diagramSvg: '<svg viewBox="0 0 245 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="40" width="130" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 165,40 A 45,45 0 0 1 165,130" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="40" x2="165" y2="130" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><text x="100" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 m</text><text x="27" y="89" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5 m</text><line x1="165" y1="85" x2="210" y2="85" stroke="#2563eb" stroke-width="2"/><text x="215" y="79" font-size="12" fill="#2563eb" font-weight="700">r = 2,5 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Hout paneel van 11 m by 6 m het ʼn halfsirkelvormige keep met radius 3 m uit een kant gesny, soos getoon. Vind die oorblywende oppervlakte tot 2 desimale plekke (π = 3,14).', answer: '51,87 m²', checkMode: 'auto', correctAnswer: '51,87m²', correctAnswers: ['51.87m²', '51.87 m²', '51.87', '51,87m²', '51,87 m²', '51,87'], explanation: 'Reghoek-oppervlakte = 11 × 6 = 66 m²\nHalfsirkel-oppervlakte = ½ × π × 3² = 0,5 × 3,14 × 9 = 14,13 m²\nOorblywende oppervlakte = 66 − 14,13 = 51,87 m² ✓' , diagramSvg: '<svg viewBox="0 0 245 170" xmlns="http://www.w3.org/2000/svg"><path d="M 35,40 L 165,40 A 45,45 0 0 0 165,130 L 35,130 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="120" y1="85" x2="165" y2="85" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><text x="100" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 m</text><text x="27" y="89" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6 m</text><text x="114" y="79" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">r = 3 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn L-vormige klaskamer het ʼn buitenste reghoek van 14 m by 10 m, soos getoon, met ʼn reghoekige hoek van 5 m by 4 m wat ontbreek. Vind die vloeroppervlakte.', answer: '120 m²', checkMode: 'auto', correctAnswer: '120m²', correctAnswers: ['120m²', '120 m²', '120'], explanation: 'Buitenste reghoek = 14 × 10 = 140 m²\nOntbrekende hoek = 5 × 4 = 20 m²\nVloeroppervlakte = 140 − 20 = 120 m² ✓' , diagramSvg: '<svg viewBox="0 0 225 185" xmlns="http://www.w3.org/2000/svg"><polygon points="45,61 128.57,61 128.57,25 175,25 175,115 45,115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="128.57" y1="61" x2="128.57" y2="25" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><line x1="128.57" y1="61" x2="175" y2="61" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><text x="110" y="133" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 m</text><text x="37" y="74" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">10 m</text><text x="151.79" y="53" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">5 m</text><text x="183" y="47" font-size="12" fill="#2563eb" font-weight="700">4 m</text></svg>' },
        { difficulty: 'Hard', question: 'Sipho se onreëlmatige perseel is ʼn reghoek 15 m by 9 m met ʼn sirkelvormige visdam met radius 2,5 m daaruit gesny, soos getoon. Vind die oorblywende oppervlakte tot 2 desimale plekke (π = 3,14).', answer: '115,38 m²', checkMode: 'auto', correctAnswer: '115,38m²', correctAnswers: ['115.38m²', '115.38 m²', '115.38', '115,38m²', '115,38 m²', '115,38'], explanation: 'Reghoek-oppervlakte = 15 × 9 = 135 m²\nSirkel-oppervlakte = π × 2,5² = 3,14 × 6,25 = 19,625 m²\nOorblywende oppervlakte = 135 − 19,625 = 115,375 ≈ 115,38 m² ✓' , diagramSvg: '<svg viewBox="0 0 225 165" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="82.5" r="26.6" fill="none" stroke="#374151" stroke-width="2" stroke-dasharray="5,4"/><text x="110" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 m</text><text x="27" y="86.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">9 m</text><line x1="110" y1="82.5" x2="136.6" y2="82.5" stroke="#2563eb" stroke-width="2"/><text x="123.3" y="76.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2,5 m</text></svg>' },

        // ── Blok 3: SI-eenheidomskakelings vir oppervlakte ──────────────────────
        { difficulty: 'Easy', question: 'Skakel 3,2 m² om na cm².', answer: '32 000 cm²', checkMode: 'auto', correctAnswer: '32000cm²', correctAnswers: ['32000cm²', '32000 cm²', '32000', '32 000cm²', '32 000 cm²', '32 000'], explanation: '1 m² = 10 000 cm²\n3,2 × 10 000 = 32 000 cm² ✓' },
        { difficulty: 'Medium', question: 'Skakel 68 000 cm² om na m².', answer: '6,8 m²', checkMode: 'auto', correctAnswer: '6,8m²', correctAnswers: ['6.8m²', '6.8 m²', '6.8', '6,8m²', '6,8 m²', '6,8'], explanation: '1 m² = 10 000 cm²\n68 000 ÷ 10 000 = 6,8 m² ✓' },

        // ── Blok 4: Skalering van slegs een afmeting ────────────────────────────
        { difficulty: 'Easy', question: 'ʼn Reghoek is 5 cm by 9 cm. Verdriedubbel slegs die breedte. Vind die nuwe oppervlakte.', answer: '135 cm²', checkMode: 'auto', correctAnswer: '135cm²', correctAnswers: ['135cm²', '135 cm²', '135'], explanation: 'Oorspronklike oppervlakte = 5 × 9 = 45 cm².\nNuwe breedte = 5 × 3 = 15 cm. Nuwe oppervlakte = 15 × 9 = 135 cm² (oppervlakte het verdriedubbel aangesien slegs een afmeting verander het) ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoek se lengte word verdubbel terwyl die breedte dieselfde bly. Die oorspronklike oppervlakte was 42 cm². Vind die nuwe oppervlakte.', answer: '84 cm²', checkMode: 'auto', correctAnswer: '84cm²', correctAnswers: ['84cm²', '84 cm²', '84'], explanation: 'Die verdubbeling van slegs een afmeting verdubbel slegs die oppervlakte.\nNuwe oppervlakte = 42 × 2 = 84 cm² ✓' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige banier se hoogte word verviervoudig terwyl die basis vas bly. Die oorspronklike oppervlakte was 30 m². Vind die nuwe oppervlakte.', answer: '120 m²', checkMode: 'auto', correctAnswer: '120m²', correctAnswers: ['120m²', '120 m²', '120'], explanation: 'Die verviervoudiging van slegs een afmeting verviervoudig slegs die oppervlakte.\nNuwe oppervlakte = 30 × 4 = 120 m² ✓' },

        // ── Blok 5: Skalering van al die afmetings (omtrek ×k, oppervlakte ×k²) ─
        { difficulty: 'Medium', question: 'ʼn Vierkant het sye van 7 cm. Verdriedubbel al die sye. Vind die nuwe omtrek en oppervlakte.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Nuwe omtrek', correctAnswer: '84cm', correctAnswers: ['84cm', '84 cm', '84'], explanation: 'Nuwe sy = 7 × 3 = 21 cm.\nNuwe omtrek = 4 × 21 = 84 cm ✓' },
          { label: 'b) Nuwe oppervlakte', correctAnswer: '441cm²', correctAnswers: ['441cm²', '441 cm²', '441'], explanation: 'Nuwe oppervlakte = 21² = 441 cm² (oorspronklike oppervlakte 49 cm² × 3² = 441 cm²) ✓' },
        ], diagramSvg: '<svg viewBox="0 0 240 175" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrowSq" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><rect x="25" y="60" width="55" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="52.5" y="50" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><line x1="92" y1="87.5" x2="160" y2="87.5" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSq)"/><text x="126" y="75.5" font-size="16" fill="#ea580c" font-weight="700" text-anchor="middle">×3</text><rect x="175" y="43.5" width="88" height="88" fill="none" stroke="#9ca3af" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoek is 4 cm by 6 cm, met ʼn oppervlakte van 24 cm². Al die afmetings word met ʼn skaalfaktor van 2,5 vergroot. Vind die nuwe oppervlakte.', answer: '150 cm²', checkMode: 'auto', correctAnswer: '150cm²', correctAnswers: ['150cm²', '150 cm²', '150'], explanation: 'Oppervlakte-skaalfaktor = 2,5² = 6,25\nNuwe oppervlakte = 24 × 6,25 = 150 cm² ✓' },
        { difficulty: 'Hard', question: 'ʼn Sirkel het radius 3 cm. Die radius word verdriedubbel na 9 cm. Vergelyk die nuwe omtrek en oppervlakte met die oorspronklike, en gee al vier waardes (π = 3,14).', answer: 'Omtrek: 18,84 cm → 56,52 cm (verdriedubbel). Oppervlakte: 28,26 cm² → 254,34 cm² (× 9, aangesien 3² = 9).', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 240 175" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrowCi" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><circle cx="70" cy="90" r="42" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="70" cy="90" r="2.5" fill="#0f1f3d"/><line x1="70" y1="90" x2="112" y2="90" stroke="#2563eb" stroke-width="2"/><text x="91" y="82" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3 cm</text><line x1="126" y1="90" x2="180" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowCi)"/><text x="153" y="78" font-size="16" fill="#ea580c" font-weight="700" text-anchor="middle">×3</text><circle cx="207" cy="90" r="27.3" fill="none" stroke="#9ca3af" stroke-width="2" stroke-dasharray="5,4"/></svg>' },

        // ── Blok 6: Gekombineerde skaalfaktorprobleme ───────────────────────────
        { difficulty: 'Medium', question: 'ʼn Tuinplan het ʼn oppervlakte van 6 m². Dit word met ʼn lineêre skaalfaktor van 5 vergroot om die werklike tuin te bou. Vind die werklike tuin se oppervlakte.', answer: '150 m²', checkMode: 'auto', correctAnswer: '150m²', correctAnswers: ['150m²', '150 m²', '150'], explanation: 'Oppervlakte-skaalfaktor = 5² = 25\nWerklike oppervlakte = 6 × 25 = 150 m² ✓' },
        { difficulty: 'Hard', question: 'ʼn Model van ʼn gebou word gebou teen ʼn skaal van 1:12 (model tot werklik). Die model se basisoppervlakte is 9 cm². Vind die oppervlakte-skaalfaktor en die werklike basisoppervlakte (met konstante eenhede aanvaar).', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Oppervlakte-skaalfaktor', correctAnswer: '144', correctAnswers: ['144', '144x', '144 keer'], explanation: 'Lineêre skaalfaktor k = 12\nOppervlakte-skaalfaktor = k² = 12² = 144 ✓' },
          { label: 'b) Werklike basisoppervlakte', correctAnswer: '1296cm²', correctAnswers: ['1296cm²', '1296 cm²', '1296'], explanation: 'Werklike oppervlakte = 9 × 144 = 1296 cm² ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Speelgrondontwerp word met ʼn lineêre skaalfaktor van 5 vergroot om die werklike speelgrond te bou. Die werklike speelgrond het ʼn oppervlakte van 500 m². Vind die oppervlakte van die oorspronklike ontwerpplan.', answer: '20 m²', checkMode: 'auto', correctAnswer: '20m²', correctAnswers: ['20m²', '20 m²', '20'], explanation: 'Oppervlakte-skaalfaktor = 5² = 25\nPlanoppervlakte = werklike oppervlakte ÷ oppervlakte-skaalfaktor = 500 ÷ 25 = 20 m² ✓' },
        { difficulty: 'Hard', question: 'Lerato se reghoekige plakkaat, oorspronklik 6 cm by 4 cm, word herdruk met die lengte verdriedubbel en die breedte verdubbel. Vind die nuwe oppervlakte en druk dit uit as ʼn veelvoud van die oorspronklike oppervlakte.', answer: 'Nuwe afmetings: 18 cm by 8 cm. Nuwe oppervlakte = 144 cm². Oorspronklike oppervlakte = 24 cm². Die nuwe oppervlakte is 6 keer die oorspronklike (3 × 2 = 6, wat ooreenstem met die gekombineerde skaalfaktore).', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het oppervlakte, omtrek en skaalfaktorprobleme bemeester.' },
        { minScore: 14, message: 'Goeie werk! Jy het ʼn sterk begrip van hierdie vaardighede — gaan enige vrae wat jy verkeerd het weer deur en probeer nog ʼn stel.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids afdeling vir afdeling, en probeer dan weer.' },
      ],
    },
    {
      name: 'Stel 2',
      questions: [
        // ── Blok 1: Sirkeloppervlakte en -omtrek (voorwaarts + omgekeerd) ─────
        { difficulty: 'Easy', question: 'ʼn Sirkelvormige fontein het ʼn radius van 9 m, soos getoon. Vind die omtrek daarvan (π = 3,14).', answer: '56,52 m', checkMode: 'auto', correctAnswer: '56,52m', correctAnswers: ['56.52m', '56.52 m', '56.52', '56,52m', '56,52 m', '56,52'], explanation: 'O = 2πr = 2 × 3,14 × 9 = 56,52 m ✓' , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="110" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><text x="140" y="87" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">r = 9 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sirkelvormige tafelblad het ʼn deursnee van 20 cm, soos getoon. Vind die oppervlakte daarvan (π = 3,14).', answer: '314 cm²', checkMode: 'auto', correctAnswer: '314cm²', correctAnswers: ['314cm²', '314 cm²', '314', '314,00cm²', '314,00 cm²'], explanation: 'r = d ÷ 2 = 20 ÷ 2 = 10 cm\nO = πr² = 3,14 × 10² = 3,14 × 100 = 314 cm² ✓' , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="50" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><text x="110" y="87" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">d = 20 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sirkelvormige blombedding het ʼn radius van 5,5 m, soos getoon. Bereken die oppervlakte daarvan tot 2 desimale plekke (π = 3,14).', answer: '94,98 m²', checkMode: 'auto', correctAnswer: '94,98m²', correctAnswers: ['94.98m²', '94.98 m²', '94.98', '94,98m²', '94,98 m²', '94,98'], explanation: 'O = πr² = 3,14 × 5,5² = 3,14 × 30,25 = 94,985 ≈ 94,98 m² ✓' , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="110" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><text x="140" y="87" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5,5 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Sirkelvormige dam het ʼn oppervlakte van 200,96 m² (π = 3,14). Vind die radius daarvan.', answer: '8 m', checkMode: 'auto', correctAnswer: '8m', correctAnswers: ['8m', '8 m', '8'], explanation: 'O = πr²\n200,96 = 3,14 × r²\nr² = 200,96 ÷ 3,14 = 64\nr = √64 = 8 m ✓' , diagramSvg: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="110" y1="95" x2="170" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><text x="140" y="87" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">r = ?</text><text x="110" y="179" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">O = 200,96 m²</text></svg>' },

        // ── Blok 2: Saamgestelde figure (dele bygetel of afgetrek) ─────────────
        { difficulty: 'Medium', question: 'ʼn Sportveld bestaan uit ʼn reghoek 12 m by 6 m met ʼn halfsirkel van radius 3 m aan een van die 6 m-kante vasgeheg, soos getoon. Vind die totale oppervlakte tot 2 desimale plekke (π = 3,14).', answer: '86,13 m²', checkMode: 'auto', correctAnswer: '86,13m²', correctAnswers: ['86.13m²', '86.13 m²', '86.13', '86,13m²', '86,13 m²', '86,13'], explanation: 'Reghoek-oppervlakte = 12 × 6 = 72 m²\nHalfsirkel-oppervlakte = ½ × π × 3² = 0,5 × 3,14 × 9 = 14,13 m²\nTotale oppervlakte = 72 + 14,13 = 86,13 m² ✓' , diagramSvg: '<svg viewBox="0 0 245 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="40" width="130" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 165,40 A 45,45 0 0 1 165,130" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="40" x2="165" y2="130" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><text x="100" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 m</text><text x="27" y="89" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6 m</text><line x1="165" y1="85" x2="210" y2="85" stroke="#2563eb" stroke-width="2"/><text x="215" y="79" font-size="12" fill="#2563eb" font-weight="700">r = 3 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Hout paneel van 13 m by 7 m het ʼn halfsirkelvormige keep met radius 3,5 m uit een kant gesny, soos getoon. Vind die oorblywende oppervlakte tot 2 desimale plekke (π = 3,14).', answer: '71,77 m²', checkMode: 'auto', correctAnswer: '71,77m²', correctAnswers: ['71.77m²', '71.77 m²', '71.77', '71,77m²', '71,77 m²', '71,77'], explanation: 'Reghoek-oppervlakte = 13 × 7 = 91 m²\nHalfsirkel-oppervlakte = ½ × π × 3,5² = 0,5 × 3,14 × 12,25 = 19,2325 m²\nOorblywende oppervlakte = 91 − 19,2325 = 71,7675 ≈ 71,77 m² ✓' , diagramSvg: '<svg viewBox="0 0 245 170" xmlns="http://www.w3.org/2000/svg"><path d="M 35,40 L 165,40 A 45,45 0 0 0 165,130 L 35,130 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="120" y1="85" x2="165" y2="85" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><text x="100" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">13 m</text><text x="27" y="89" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">7 m</text><text x="114" y="79" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">r = 3,5 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn L-vormige klaskamer het ʼn buitenste reghoek van 16 m by 11 m, soos getoon, met ʼn reghoekige hoek van 6 m by 5 m wat ontbreek. Vind die vloeroppervlakte.', answer: '146 m²', checkMode: 'auto', correctAnswer: '146m²', correctAnswers: ['146m²', '146 m²', '146'], explanation: 'Buitenste reghoek = 16 × 11 = 176 m²\nOntbrekende hoek = 6 × 5 = 30 m²\nVloeroppervlakte = 176 − 30 = 146 m² ✓' , diagramSvg: '<svg viewBox="0 0 225 185" xmlns="http://www.w3.org/2000/svg"><polygon points="45,65.91 126.25,65.91 126.25,25 175,25 175,115 45,115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="126.25" y1="65.91" x2="126.25" y2="25" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><line x1="126.25" y1="65.91" x2="175" y2="65.91" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><text x="110" y="133" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">16 m</text><text x="37" y="74" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">11 m</text><text x="150.63" y="57.91" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">6 m</text><text x="183" y="49.45" font-size="12" fill="#2563eb" font-weight="700">5 m</text></svg>' },
        { difficulty: 'Hard', question: 'Sipho se onreëlmatige perseel is ʼn reghoek 14 m by 8 m met ʼn sirkelvormige visdam met radius 2,5 m daaruit gesny, soos getoon. Vind die oorblywende oppervlakte tot 2 desimale plekke (π = 3,14).', answer: '92,38 m²', checkMode: 'auto', correctAnswer: '92,38m²', correctAnswers: ['92.38m²', '92.38 m²', '92.38', '92,38m²', '92,38 m²', '92,38'], explanation: 'Reghoek-oppervlakte = 14 × 8 = 112 m²\nSirkel-oppervlakte = π × 2,5² = 3,14 × 6,25 = 19,625 m²\nOorblywende oppervlakte = 112 − 19,625 = 92,375 ≈ 92,38 m² ✓' , diagramSvg: '<svg viewBox="0 0 225 165" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="82.5" r="26.6" fill="none" stroke="#374151" stroke-width="2" stroke-dasharray="5,4"/><text x="110" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 m</text><text x="27" y="86.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">8 m</text><line x1="110" y1="82.5" x2="136.6" y2="82.5" stroke="#2563eb" stroke-width="2"/><text x="123.3" y="76.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2,5 m</text></svg>' },

        // ── Blok 3: SI-eenheidomskakelings vir oppervlakte ──────────────────────
        { difficulty: 'Easy', question: 'Skakel 5,6 m² om na cm².', answer: '56 000 cm²', checkMode: 'auto', correctAnswer: '56000cm²', correctAnswers: ['56000cm²', '56000 cm²', '56000', '56 000cm²', '56 000 cm²', '56 000'], explanation: '1 m² = 10 000 cm²\n5,6 × 10 000 = 56 000 cm² ✓' },
        { difficulty: 'Medium', question: 'Skakel 92 000 cm² om na m².', answer: '9,2 m²', checkMode: 'auto', correctAnswer: '9,2m²', correctAnswers: ['9.2m²', '9.2 m²', '9.2', '9,2m²', '9,2 m²', '9,2'], explanation: '1 m² = 10 000 cm²\n92 000 ÷ 10 000 = 9,2 m² ✓' },

        // ── Blok 4: Skalering van slegs een afmeting ────────────────────────────
        { difficulty: 'Easy', question: 'ʼn Reghoek is 4 cm by 11 cm. Verdriedubbel slegs die lengte. Vind die nuwe oppervlakte.', answer: '132 cm²', checkMode: 'auto', correctAnswer: '132cm²', correctAnswers: ['132cm²', '132 cm²', '132'], explanation: 'Oorspronklike oppervlakte = 4 × 11 = 44 cm².\nNuwe lengte = 4 × 3 = 12 cm. Nuwe oppervlakte = 12 × 11 = 132 cm² (oppervlakte het verdriedubbel aangesien slegs een afmeting verander het) ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoek se breedte word verdubbel terwyl die lengte dieselfde bly. Die oorspronklike oppervlakte was 36 cm². Vind die nuwe oppervlakte.', answer: '72 cm²', checkMode: 'auto', correctAnswer: '72cm²', correctAnswers: ['72cm²', '72 cm²', '72'], explanation: 'Die verdubbeling van slegs een afmeting verdubbel slegs die oppervlakte.\nNuwe oppervlakte = 36 × 2 = 72 cm² ✓' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige banier se basis word verviervoudig terwyl die hoogte vas bly. Die oorspronklike oppervlakte was 25 m². Vind die nuwe oppervlakte.', answer: '100 m²', checkMode: 'auto', correctAnswer: '100m²', correctAnswers: ['100m²', '100 m²', '100'], explanation: 'Die verviervoudiging van slegs een afmeting verviervoudig slegs die oppervlakte.\nNuwe oppervlakte = 25 × 4 = 100 m² ✓' },

        // ── Blok 5: Skalering van al die afmetings (omtrek ×k, oppervlakte ×k²) ─
        { difficulty: 'Medium', question: 'ʼn Vierkant het sye van 5 cm. Verviervoudig al die sye. Vind die nuwe omtrek en oppervlakte.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Nuwe omtrek', correctAnswer: '80cm', correctAnswers: ['80cm', '80 cm', '80'], explanation: 'Nuwe sy = 5 × 4 = 20 cm.\nNuwe omtrek = 4 × 20 = 80 cm ✓' },
          { label: 'b) Nuwe oppervlakte', correctAnswer: '400cm²', correctAnswers: ['400cm²', '400 cm²', '400'], explanation: 'Nuwe oppervlakte = 20² = 400 cm² (oorspronklike oppervlakte 25 cm² × 4² = 400 cm²) ✓' },
        ], diagramSvg: '<svg viewBox="0 0 240 175" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrowSq" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><rect x="25" y="60" width="55" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="52.5" y="50" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><line x1="92" y1="87.5" x2="160" y2="87.5" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSq)"/><text x="126" y="75.5" font-size="16" fill="#ea580c" font-weight="700" text-anchor="middle">×4</text><rect x="175" y="43.5" width="88" height="88" fill="none" stroke="#9ca3af" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoek is 5 cm by 8 cm, met ʼn oppervlakte van 40 cm². Al die afmetings word met ʼn skaalfaktor van 1,5 vergroot. Vind die nuwe oppervlakte.', answer: '90 cm²', checkMode: 'auto', correctAnswer: '90cm²', correctAnswers: ['90cm²', '90 cm²', '90'], explanation: 'Oppervlakte-skaalfaktor = 1,5² = 2,25\nNuwe oppervlakte = 40 × 2,25 = 90 cm² ✓' },
        { difficulty: 'Hard', question: 'ʼn Sirkel het radius 4 cm. Die radius word verdubbel na 8 cm. Vergelyk die nuwe omtrek en oppervlakte met die oorspronklike, en gee al vier waardes (π = 3,14).', answer: 'Omtrek: 25,12 cm → 50,24 cm (verdubbel). Oppervlakte: 50,24 cm² → 200,96 cm² (× 4, aangesien 2² = 4).', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 240 175" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrowCi" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><circle cx="70" cy="90" r="42" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="70" cy="90" r="2.5" fill="#0f1f3d"/><line x1="70" y1="90" x2="112" y2="90" stroke="#2563eb" stroke-width="2"/><text x="91" y="82" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><line x1="126" y1="90" x2="180" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowCi)"/><text x="153" y="78" font-size="16" fill="#ea580c" font-weight="700" text-anchor="middle">×2</text><circle cx="207" cy="90" r="27.3" fill="none" stroke="#9ca3af" stroke-width="2" stroke-dasharray="5,4"/></svg>' },

        // ── Blok 6: Gekombineerde skaalfaktorprobleme ───────────────────────────
        { difficulty: 'Medium', question: 'ʼn Tuinplan het ʼn oppervlakte van 4 m². Dit word met ʼn lineêre skaalfaktor van 6 vergroot om die werklike tuin te bou. Vind die werklike tuin se oppervlakte.', answer: '144 m²', checkMode: 'auto', correctAnswer: '144m²', correctAnswers: ['144m²', '144 m²', '144'], explanation: 'Oppervlakte-skaalfaktor = 6² = 36\nWerklike oppervlakte = 4 × 36 = 144 m² ✓' },
        { difficulty: 'Hard', question: 'ʼn Model van ʼn gebou word gebou teen ʼn skaal van 1:10 (model tot werklik). Die model se basisoppervlakte is 7 cm². Vind die oppervlakte-skaalfaktor en die werklike basisoppervlakte (met konstante eenhede aanvaar).', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Oppervlakte-skaalfaktor', correctAnswer: '100', correctAnswers: ['100', '100x', '100 keer'], explanation: 'Lineêre skaalfaktor k = 10\nOppervlakte-skaalfaktor = k² = 10² = 100 ✓' },
          { label: 'b) Werklike basisoppervlakte', correctAnswer: '700cm²', correctAnswers: ['700cm²', '700 cm²', '700'], explanation: 'Werklike oppervlakte = 7 × 100 = 700 cm² ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Speelgrondontwerp word met ʼn lineêre skaalfaktor van 11 vergroot om die werklike speelgrond te bou. Die werklike speelgrond het ʼn oppervlakte van 847 m². Vind die oppervlakte van die oorspronklike ontwerpplan.', answer: '7 m²', checkMode: 'auto', correctAnswer: '7m²', correctAnswers: ['7m²', '7 m²', '7'], explanation: 'Oppervlakte-skaalfaktor = 11² = 121\nPlanoppervlakte = werklike oppervlakte ÷ oppervlakte-skaalfaktor = 847 ÷ 121 = 7 m² ✓' },
        { difficulty: 'Hard', question: 'Lerato se reghoekige plakkaat, oorspronklik 5 cm by 3 cm, word herdruk met die lengte verviervoudig en die breedte verdubbel. Vind die nuwe oppervlakte en druk dit uit as ʼn veelvoud van die oorspronklike oppervlakte.', answer: 'Nuwe afmetings: 20 cm by 6 cm. Nuwe oppervlakte = 120 cm². Oorspronklike oppervlakte = 15 cm². Die nuwe oppervlakte is 8 keer die oorspronklike (4 × 2 = 8, wat ooreenstem met die gekombineerde skaalfaktore).', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het oppervlakte, omtrek en skaalfaktorprobleme bemeester.' },
        { minScore: 14, message: 'Goeie werk! Jy het ʼn sterk begrip van hierdie vaardighede — gaan enige vrae wat jy verkeerd het weer deur en probeer nog ʼn stel.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids afdeling vir afdeling, en probeer dan weer.' },
      ],
    },
    {
      name: 'Stel 3',
      questions: [
        // ── Blok 1: Sirkeloppervlakte en -omtrek (voorwaarts + omgekeerd) ─────
        { difficulty: 'Easy', question: 'ʼn Sirkelvormige fontein het ʼn radius van 11 m, soos getoon. Vind die omtrek daarvan (π = 3,14).', answer: '69,08 m', checkMode: 'auto', correctAnswer: '69,08m', correctAnswers: ['69.08m', '69.08 m', '69.08', '69,08m', '69,08 m', '69,08'], explanation: 'O = 2πr = 2 × 3,14 × 11 = 69,08 m ✓' , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="110" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><text x="140" y="87" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">r = 11 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sirkelvormige tafelblad het ʼn deursnee van 18 cm, soos getoon. Vind die oppervlakte daarvan (π = 3,14).', answer: '254,34 cm²', checkMode: 'auto', correctAnswer: '254,34cm²', correctAnswers: ['254.34cm²', '254.34 cm²', '254.34', '254,34cm²', '254,34 cm²', '254,34'], explanation: 'r = d ÷ 2 = 18 ÷ 2 = 9 cm\nO = πr² = 3,14 × 9² = 3,14 × 81 = 254,34 cm² ✓' , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="50" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><text x="110" y="87" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">d = 18 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sirkelvormige blombedding het ʼn radius van 6,4 m, soos getoon. Bereken die oppervlakte daarvan tot 2 desimale plekke (π = 3,14).', answer: '128,61 m²', checkMode: 'auto', correctAnswer: '128,61m²', correctAnswers: ['128.61m²', '128.61 m²', '128.61', '128,61m²', '128,61 m²', '128,61'], explanation: 'O = πr² = 3,14 × 6,4² = 3,14 × 40,96 = 128,6144 ≈ 128,61 m² ✓' , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="110" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><text x="140" y="87" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6,4 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Sirkelvormige wenbaan het ʼn omtrek van 94,2 m (π = 3,14). Vind die radius daarvan.', answer: '15 m', checkMode: 'auto', correctAnswer: '15m', correctAnswers: ['15m', '15 m', '15'], explanation: 'O = 2πr\n94,2 = 2 × 3,14 × r\n94,2 = 6,28r\nr = 94,2 ÷ 6,28 = 15 m ✓' , diagramSvg: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="110" y1="95" x2="170" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><text x="140" y="87" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">r = ?</text><text x="110" y="179" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">O = 94,2 m</text></svg>' },

        // ── Blok 2: Saamgestelde figure (dele bygetel of afgetrek) ─────────────
        { difficulty: 'Medium', question: 'ʼn Sportveld bestaan uit ʼn reghoek 8 m by 6 m met ʼn halfsirkel van radius 3 m aan een van die 6 m-kante vasgeheg, soos getoon. Vind die totale oppervlakte tot 2 desimale plekke (π = 3,14).', answer: '62,13 m²', checkMode: 'auto', correctAnswer: '62,13m²', correctAnswers: ['62.13m²', '62.13 m²', '62.13', '62,13m²', '62,13 m²', '62,13'], explanation: 'Reghoek-oppervlakte = 8 × 6 = 48 m²\nHalfsirkel-oppervlakte = ½ × π × 3² = 0,5 × 3,14 × 9 = 14,13 m²\nTotale oppervlakte = 48 + 14,13 = 62,13 m² ✓' , diagramSvg: '<svg viewBox="0 0 245 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="40" width="130" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 165,40 A 45,45 0 0 1 165,130" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="40" x2="165" y2="130" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><text x="100" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 m</text><text x="27" y="89" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6 m</text><line x1="165" y1="85" x2="210" y2="85" stroke="#2563eb" stroke-width="2"/><text x="215" y="79" font-size="12" fill="#2563eb" font-weight="700">r = 3 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Hout paneel van 10 m by 9 m het ʼn halfsirkelvormige keep met radius 4 m uit een kant gesny, soos getoon. Vind die oorblywende oppervlakte tot 2 desimale plekke (π = 3,14).', answer: '64,88 m²', checkMode: 'auto', correctAnswer: '64,88m²', correctAnswers: ['64.88m²', '64.88 m²', '64.88', '64,88m²', '64,88 m²', '64,88'], explanation: 'Reghoek-oppervlakte = 10 × 9 = 90 m²\nHalfsirkel-oppervlakte = ½ × π × 4² = 0,5 × 3,14 × 16 = 25,12 m²\nOorblywende oppervlakte = 90 − 25,12 = 64,88 m² ✓' , diagramSvg: '<svg viewBox="0 0 245 170" xmlns="http://www.w3.org/2000/svg"><path d="M 35,40 L 165,40 L 165,45 A 40,40 0 0 0 165,125 L 165,130 L 35,130 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="125" y1="85" x2="165" y2="85" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><text x="100" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 m</text><text x="27" y="89" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">9 m</text><text x="119" y="79" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">r = 4 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn L-vormige klaskamer het ʼn buitenste reghoek van 15 m by 9 m, soos getoon, met ʼn reghoekige hoek van 4 m by 3 m wat ontbreek. Vind die vloeroppervlakte.', answer: '123 m²', checkMode: 'auto', correctAnswer: '123m²', correctAnswers: ['123m²', '123 m²', '123'], explanation: 'Buitenste reghoek = 15 × 9 = 135 m²\nOntbrekende hoek = 4 × 3 = 12 m²\nVloeroppervlakte = 135 − 12 = 123 m² ✓' , diagramSvg: '<svg viewBox="0 0 225 185" xmlns="http://www.w3.org/2000/svg"><polygon points="45,55 140.33,55 140.33,25 175,25 175,115 45,115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140.33" y1="55" x2="140.33" y2="25" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><line x1="140.33" y1="55" x2="175" y2="55" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><text x="110" y="133" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 m</text><text x="37" y="74" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">9 m</text><text x="157.67" y="47" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">4 m</text><text x="183" y="44" font-size="12" fill="#2563eb" font-weight="700">3 m</text></svg>' },
        { difficulty: 'Hard', question: 'Sipho se onreëlmatige perseel is ʼn reghoek 10 m by 6 m met ʼn sirkelvormige visdam met radius 1,5 m daaruit gesny, soos getoon. Vind die oorblywende oppervlakte tot 2 desimale plekke (π = 3,14).', answer: '52,94 m²', checkMode: 'auto', correctAnswer: '52,94m²', correctAnswers: ['52.94m²', '52.94 m²', '52.94', '52,94m²', '52,94 m²', '52,94'], explanation: 'Reghoek-oppervlakte = 10 × 6 = 60 m²\nSirkel-oppervlakte = π × 1,5² = 3,14 × 2,25 = 7,065 m²\nOorblywende oppervlakte = 60 − 7,065 = 52,935 ≈ 52,94 m² ✓' , diagramSvg: '<svg viewBox="0 0 225 165" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="82.5" r="23" fill="none" stroke="#374151" stroke-width="2" stroke-dasharray="5,4"/><text x="110" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 m</text><text x="27" y="86.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6 m</text><line x1="110" y1="82.5" x2="133" y2="82.5" stroke="#2563eb" stroke-width="2"/><text x="121.5" y="76.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 1,5 m</text></svg>' },

        // ── Blok 3: SI-eenheidomskakelings vir oppervlakte ──────────────────────
        { difficulty: 'Easy', question: 'Skakel 2,4 m² om na cm².', answer: '24 000 cm²', checkMode: 'auto', correctAnswer: '24000cm²', correctAnswers: ['24000cm²', '24000 cm²', '24000', '24 000cm²', '24 000 cm²', '24 000'], explanation: '1 m² = 10 000 cm²\n2,4 × 10 000 = 24 000 cm² ✓' },
        { difficulty: 'Medium', question: 'Skakel 35 000 cm² om na m².', answer: '3,5 m²', checkMode: 'auto', correctAnswer: '3,5m²', correctAnswers: ['3.5m²', '3.5 m²', '3.5', '3,5m²', '3,5 m²', '3,5'], explanation: '1 m² = 10 000 cm²\n35 000 ÷ 10 000 = 3,5 m² ✓' },

        // ── Blok 4: Skalering van slegs een afmeting ────────────────────────────
        { difficulty: 'Easy', question: 'ʼn Reghoek is 6 cm by 7 cm. Verdriedubbel slegs die breedte. Vind die nuwe oppervlakte.', answer: '126 cm²', checkMode: 'auto', correctAnswer: '126cm²', correctAnswers: ['126cm²', '126 cm²', '126'], explanation: 'Oorspronklike oppervlakte = 6 × 7 = 42 cm².\nNuwe breedte = 6 × 3 = 18 cm. Nuwe oppervlakte = 18 × 7 = 126 cm² (oppervlakte het verdriedubbel aangesien slegs een afmeting verander het) ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoek se lengte word verdubbel terwyl die breedte dieselfde bly. Die oorspronklike oppervlakte was 54 cm². Vind die nuwe oppervlakte.', answer: '108 cm²', checkMode: 'auto', correctAnswer: '108cm²', correctAnswers: ['108cm²', '108 cm²', '108'], explanation: 'Die verdubbeling van slegs een afmeting verdubbel slegs die oppervlakte.\nNuwe oppervlakte = 54 × 2 = 108 cm² ✓' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige banier se hoogte word verviervoudig terwyl die basis vas bly. Die oorspronklike oppervlakte was 18 m². Vind die nuwe oppervlakte.', answer: '72 m²', checkMode: 'auto', correctAnswer: '72m²', correctAnswers: ['72m²', '72 m²', '72'], explanation: 'Die verviervoudiging van slegs een afmeting verviervoudig slegs die oppervlakte.\nNuwe oppervlakte = 18 × 4 = 72 m² ✓' },

        // ── Blok 5: Skalering van al die afmetings (omtrek ×k, oppervlakte ×k²) ─
        { difficulty: 'Medium', question: 'ʼn Vierkant het sye van 9 cm. Verdriedubbel al die sye. Vind die nuwe omtrek en oppervlakte.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Nuwe omtrek', correctAnswer: '108cm', correctAnswers: ['108cm', '108 cm', '108'], explanation: 'Nuwe sy = 9 × 3 = 27 cm.\nNuwe omtrek = 4 × 27 = 108 cm ✓' },
          { label: 'b) Nuwe oppervlakte', correctAnswer: '729cm²', correctAnswers: ['729cm²', '729 cm²', '729'], explanation: 'Nuwe oppervlakte = 27² = 729 cm² (oorspronklike oppervlakte 81 cm² × 3² = 729 cm²) ✓' },
        ], diagramSvg: '<svg viewBox="0 0 240 175" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrowSq" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><rect x="25" y="60" width="55" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="52.5" y="50" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><line x1="92" y1="87.5" x2="160" y2="87.5" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSq)"/><text x="126" y="75.5" font-size="16" fill="#ea580c" font-weight="700" text-anchor="middle">×3</text><rect x="175" y="43.5" width="88" height="88" fill="none" stroke="#9ca3af" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoek is 3 cm by 10 cm, met ʼn oppervlakte van 30 cm². Al die afmetings word met ʼn skaalfaktor van 2 vergroot. Vind die nuwe oppervlakte.', answer: '120 cm²', checkMode: 'auto', correctAnswer: '120cm²', correctAnswers: ['120cm²', '120 cm²', '120'], explanation: 'Oppervlakte-skaalfaktor = 2² = 4\nNuwe oppervlakte = 30 × 4 = 120 cm² ✓' },
        { difficulty: 'Hard', question: 'ʼn Sirkel het radius 5 cm. Die radius word verdriedubbel na 15 cm. Vergelyk die nuwe omtrek en oppervlakte met die oorspronklike, en gee al vier waardes (π = 3,14).', answer: 'Omtrek: 31,4 cm → 94,2 cm (verdriedubbel). Oppervlakte: 78,5 cm² → 706,5 cm² (× 9, aangesien 3² = 9).', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 240 175" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrowCi" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><circle cx="70" cy="90" r="42" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="70" cy="90" r="2.5" fill="#0f1f3d"/><line x1="70" y1="90" x2="112" y2="90" stroke="#2563eb" stroke-width="2"/><text x="91" y="82" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><line x1="126" y1="90" x2="180" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowCi)"/><text x="153" y="78" font-size="16" fill="#ea580c" font-weight="700" text-anchor="middle">×3</text><circle cx="207" cy="90" r="27.3" fill="none" stroke="#9ca3af" stroke-width="2" stroke-dasharray="5,4"/></svg>' },

        // ── Blok 6: Gekombineerde skaalfaktorprobleme ───────────────────────────
        { difficulty: 'Medium', question: 'ʼn Tuinplan het ʼn oppervlakte van 3 m². Dit word met ʼn lineêre skaalfaktor van 7 vergroot om die werklike tuin te bou. Vind die werklike tuin se oppervlakte.', answer: '147 m²', checkMode: 'auto', correctAnswer: '147m²', correctAnswers: ['147m²', '147 m²', '147'], explanation: 'Oppervlakte-skaalfaktor = 7² = 49\nWerklike oppervlakte = 3 × 49 = 147 m² ✓' },
        { difficulty: 'Hard', question: 'ʼn Model van ʼn gebou word gebou teen ʼn skaal van 1:8 (model tot werklik). Die model se basisoppervlakte is 5 cm². Vind die oppervlakte-skaalfaktor en die werklike basisoppervlakte (met konstante eenhede aanvaar).', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Oppervlakte-skaalfaktor', correctAnswer: '64', correctAnswers: ['64', '64x', '64 keer'], explanation: 'Lineêre skaalfaktor k = 8\nOppervlakte-skaalfaktor = k² = 8² = 64 ✓' },
          { label: 'b) Werklike basisoppervlakte', correctAnswer: '320cm²', correctAnswers: ['320cm²', '320 cm²', '320'], explanation: 'Werklike oppervlakte = 5 × 64 = 320 cm² ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Speelgrondontwerp word met ʼn lineêre skaalfaktor van 9 vergroot om die werklike speelgrond te bou. Die werklike speelgrond het ʼn oppervlakte van 486 m². Vind die oppervlakte van die oorspronklike ontwerpplan.', answer: '6 m²', checkMode: 'auto', correctAnswer: '6m²', correctAnswers: ['6m²', '6 m²', '6'], explanation: 'Oppervlakte-skaalfaktor = 9² = 81\nPlanoppervlakte = werklike oppervlakte ÷ oppervlakte-skaalfaktor = 486 ÷ 81 = 6 m² ✓' },
        { difficulty: 'Hard', question: 'Lerato se reghoekige plakkaat, oorspronklik 4 cm by 3 cm, word herdruk met die lengte met ʼn faktor van 5 vermenigvuldig en die breedte verdubbel. Vind die nuwe oppervlakte en druk dit uit as ʼn veelvoud van die oorspronklike oppervlakte.', answer: 'Nuwe afmetings: 20 cm by 6 cm. Nuwe oppervlakte = 120 cm². Oorspronklike oppervlakte = 12 cm². Die nuwe oppervlakte is 10 keer die oorspronklike (5 × 2 = 10, wat ooreenstem met die gekombineerde skaalfaktore).', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het oppervlakte, omtrek en skaalfaktorprobleme bemeester.' },
        { minScore: 14, message: 'Goeie werk! Jy het ʼn sterk begrip van hierdie vaardighede — gaan enige vrae wat jy verkeerd het weer deur en probeer nog ʼn stel.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids afdeling vir afdeling, en probeer dan weer.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het oppervlakte en omtrek bemeester.' },
    { minScore: 12, message: 'Goeie werk! Jy vaar goed — gaan enige afdelings weer deur waar jy punte laat val het.' },
    { minScore: 8, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer die vrae weer.' },
    { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en jy sal daar uitkom.' },
  ],
}
