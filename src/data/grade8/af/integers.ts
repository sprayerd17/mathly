import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (integer roles) ───────────────────────────────────────────
// positive / same-sign result → green  (#16a34a)
// negative / diff-sign result → red    (#dc2626)
// additive inverse / squares  → blue   (#2563eb)
// multiplicative inverse / cubes → orange (#ea580c)
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Heelgetalle',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MULTIPLYING AND DIVIDING INTEGERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-dividing-integers',
      title: 'Vermenigvuldig en Deel van Heelgetalle',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">Ons hersien optel en aftrek van heelgetalle, en brei dit dan uit na <strong>vermenigvuldiging en deling van heelgetalle</strong>. Die teken van die antwoord hang af van die tekens van die betrokke getalle: <strong>dieselfde tekens gee ʼn positiewe antwoord; verskillende tekens gee ʼn negatiewe antwoord.</strong></p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('dieselfde teken → positief')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('verskillende tekens → negatief')}</span>` +
        `</div>` +

        // ── Sign rules ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Tekenreëls vir vermenigvuldiging en deling</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Dieselfde tekens → ${gr('Positief')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(+) × (+) = ${gr('+')}<br>(−) × (−) = ${gr('+')}<br>(+) ÷ (+) = ${gr('+')}<br>(−) ÷ (−) = ${gr('+')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Verskillende tekens → ${re('Negatief')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(+) × (−) = ${re('−')}<br>(−) × (+) = ${re('−')}<br>(+) ÷ (−) = ${re('−')}<br>(−) ÷ (+) = ${re('−')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Gebruik van absolute waardes</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om die <strong>waarde</strong> van die antwoord te vind, ignoreer die tekens en vermenigvuldig of deel soos gewoonlik. Pas dan die tekenreël toe om te bepaal of die antwoord ${gr('positief')} of ${re('negatief')} is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken −8 × −5.',
          answer: `${gr('40')}`,
          steps: [
            `Identifiseer die tekens: albei getalle is ${gr('negatief')} — die tekens is <strong>dieselfde</strong>.`,
            `${gr('Dieselfde tekens → positiewe antwoord.')}</strong>`,
            `Vermenigvuldig die absolute waardes: 8 × 5 = ${gr('40')}`,
            `<strong>Antwoord:</strong> −8 × −5 = ${gr('40')} ✓`,
          ],
        },
        {
          question: 'Bereken −36 ÷ 4.',
          answer: `${re('−9')}`,
          steps: [
            `Identifiseer die tekens: −36 is ${re('negatief')}, 4 is ${gr('positief')} — die tekens is <strong>verskillend</strong>.`,
            `${re('Verskillende tekens → negatiewe antwoord.')}`,
            `Deel die absolute waardes: 36 ÷ 4 = 9`,
            `<strong>Antwoord:</strong> −36 ÷ 4 = ${re('−9')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken −6 × −7.',
          answer: '42',
          checkMode: 'auto',
          correctAnswer: '42',
          explanation: 'Dieselfde tekens → positiewe antwoord.\n6 × 7 = 42.\nAntwoord: −6 × −7 = 42 ✓',
        },

        // ── Q2 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken −45 ÷ −9.',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'Dieselfde tekens → positiewe antwoord.\n45 ÷ 9 = 5.\nAntwoord: −45 ÷ −9 = 5 ✓',
        },

        // ── Q3 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken −8 × 6 ÷ −4.',
          answer: '12',
          checkMode: 'auto',
          correctAnswer: '12',
          explanation: 'Werk van links na regs.\nStap 1: −8 × 6 = −48 (verskillende tekens → negatief).\nStap 2: −48 ÷ −4 = 12 (dieselfde tekens → positief).\nAntwoord: 12 ✓',
        },

        // ── Q4 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê −9 × −9 = −81. Is hy korrek? Verduidelik.',
          answer: 'Nee — dieselfde tekens gee ʼn positiewe antwoord: −9 × −9 = 81.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die tekenreëls vir die vermenigvuldiging en deling van heelgetalle verduidelik met uitgewerkte voorbeelde" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Tekenreëldiagram wat toon dat dieselfde tekens ʼn positiewe antwoord gee en verskillende tekens ʼn negatiewe antwoord gee vir vermenigvuldiging en deling van heelgetalle" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PROPERTIES OF INTEGERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-of-integers',
      title: 'Eienskappe van Heelgetalle',
      icon: '±',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik die <strong>kommutatiewe, assosiatiewe en distributiewe eienskappe</strong> van optelling en vermenigvuldiging vir heelgetalle, en herken <strong>additiewe inverse</strong> (ʼn getal en sy teenoorgestelde tel op tot 0) en <strong>vermenigvuldigende inverse</strong> (ʼn getal en sy resiprook vermenigvuldig tot 1).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('additiewe inverse')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vermenigvuldigende inverse')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Additiewe inverse</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Die additiewe inverse van <em>a</em> is <em>−a</em>, want ${bl('a + (−a) = 0')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Voorbeeld: die additiewe inverse van 5 is −5, aangesien 5 + (−5) = 0.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Vermenigvuldigende inverse</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Die vermenigvuldigende inverse van <em>a</em> is <em>1/a</em>, want ${or('a × (1/a) = 1')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Voorbeeld: die vermenigvuldigende inverse van 4 is 1/4, aangesien 4 × 1/4 = 1.</p>` +
        `</div>` +

        `</div>` +

        // ── Properties ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Eienskappe van optelling en vermenigvuldiging</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<p style="margin:0;font-size:14px;"><strong>Kommutatief:</strong> a + b = b + a &nbsp; en &nbsp; a × b = b × a</p>` +
        `</div>` +

        `<div style="padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<p style="margin:0;font-size:14px;"><strong>Assosiatief:</strong> (a + b) + c = a + (b + c) &nbsp; en &nbsp; (a × b) × c = a × (b × c)</p>` +
        `</div>` +

        `<div style="padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<p style="margin:0;font-size:14px;"><strong>Distributief:</strong> a × (b + c) = a × b + a × c</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Spesiale gevalle</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die ${bl('additiewe inverse')} van 0 is 0 self, aangesien 0 + 0 = 0. Die getal 0 het <strong>geen</strong> ${or('vermenigvuldigende inverse')} nie, want deling deur 0 is onbepaald.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die additiewe inverse van −7.',
          answer: `${bl('7')}`,
          steps: [
            `Die ${bl('additiewe inverse')} is die getal wat tot 0 optel wanneer dit by die oorspronklike getal getel word.`,
            `Ons benodig: −7 + ? = 0`,
            `Dus is die additiewe inverse ${bl('7')}, aangesien −7 + ${bl('7')} = 0 ✓`,
          ],
        },
        {
          question: 'Vind die vermenigvuldigende inverse van −4.',
          answer: `${or('−¼')}`,
          steps: [
            `Die ${or('vermenigvuldigende inverse')} is die resiprook — die getal wat 1 gee wanneer dit met die oorspronklike getal vermenigvuldig word.`,
            `Ons benodig: −4 × ? = 1`,
            `Die resiprook van −4 is ${or('−¼')}, aangesien −4 × (${or('−¼')}) = 1 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q5 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die additiewe inverse van 12.',
          answer: '-12',
          checkMode: 'auto',
          correctAnswer: '-12',
          explanation: 'Die additiewe inverse van 12 is die getal wat tot 0 optel: 12 + (−12) = 0.\nAntwoord: −12 ✓',
        },

        // ── Q6 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die vermenigvuldigende inverse van −8.',
          answer: '-1/8',
          checkMode: 'auto',
          correctAnswer: '-1/8',
          explanation: 'Die vermenigvuldigende inverse is die resiprook: 1 ÷ (−8) = −1/8.\nKontroleer: −8 × (−1/8) = 1 ✓\nAntwoord: −1/8 ✓',
        },

        // ── Q7 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê die additiewe inverse van 0 is onbepaald. Is sy korrek? Verduidelik.',
          answer: 'Nee — die additiewe inverse van 0 is 0, aangesien 0 + 0 = 0.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat additiewe en vermenigvuldigende inverse van heelgetalle verduidelik met voorbeelde wat toon waarom 0 ʼn spesiale geval is" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat die getallelynparing van additiewe inverse toon en ʼn tabel van vermenigvuldigende inverse vir heelgetalle" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CALCULATIONS WITH SQUARES, CUBES AND ROOTS OF INTEGERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'squares-cubes-roots-integers',
      title: 'Berekeninge met Kwadrate, Kubusse en Wortels van Heelgetalle',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">Ons voer berekeninge uit met <strong>al vier bewerkings</strong> met heelgetalle, insluitend getalle wat <strong>kwadrate, kubusse, vierkantswortels en kubuswortels</strong> van heelgetalle behels.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kwadrate')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kubusse')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('wortels')}</span>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelfeite</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Kwadrate</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">${bl('(−a)²')} = (−a) × (−a) = ${bl('+a²')} (altyd positief)</p>` +
        `<p style="color:#dc2626;font-size:13px;margin:0;">Let wel: −a² beteken −(a²), wat negatief is.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Kubusse</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('(−a)³')} = (−a) × (−a) × (−a) = ${or('−a³')} (negatief wanneer a &gt; 0)</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Wortels</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('√a')} is slegs vir a ≥ 0 gedefinieer. ${gr('∛a')} is vir alle heelgetalle gedefinieer.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Let op: (−a)² ≠ −a²</p>` +
        `<p style="margin:0;color:#991b1b;">Die hakies is belangrik. ${bl('(−6)²')} = 36 maar −6² = −36. Pas altyd die eksponent toe voor die negatiewe teken wanneer daar geen hakies is nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken (−3)² + (−2)³.',
          answer: `${bl('9')} + (${or('−8')}) = 1`,
          steps: [
            `Bereken die ${bl('kwadraat')}: ${bl('(−3)²')} = (−3) × (−3) = ${bl('9')} (dieselfde tekens → positief)`,
            `Bereken die ${or('kubus')}: ${or('(−2)³')} = (−2) × (−2) × (−2) = 4 × (−2) = ${or('−8')} (verskillende tekens → negatief)`,
            `Tel die resultate bymekaar: ${bl('9')} + (${or('−8')}) = 9 − 8 = <strong>1</strong>`,
            `<strong>Antwoord:</strong> (−3)² + (−2)³ = 1 ✓`,
          ],
        },
        {
          question: 'Bereken √64 − (−3)².',
          answer: `${gr('8')} − ${bl('9')} = −1`,
          steps: [
            `Bereken die ${gr('vierkantswortel')}: ${gr('√64')} = ${gr('8')} (aangesien 8 × 8 = 64)`,
            `Bereken die ${bl('kwadraat')}: ${bl('(−3)²')} = (−3) × (−3) = ${bl('9')}`,
            `Trek af: ${gr('8')} − ${bl('9')} = <strong>−1</strong>`,
            `<strong>Antwoord:</strong> √64 − (−3)² = −1 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q8 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken (−2)³.',
          answer: '-8',
          checkMode: 'auto',
          correctAnswer: '-8',
          explanation: '(−2)³ = (−2) × (−2) × (−2)\n= 4 × (−2)\n= −8 (verskillende tekens → negatief)\nAntwoord: −8 ✓',
        },

        // ── Q9 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken (−5)² − 3³.',
          answer: '-2',
          checkMode: 'auto',
          correctAnswer: '-2',
          explanation: 'Stap 1: (−5)² = 25 (dieselfde tekens → positief)\nStap 2: 3³ = 27\nStap 3: 25 − 27 = −2\nAntwoord: −2 ✓',
        },

        // ── Q10 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Bereken √49 + (−4)².',
          answer: '23',
          checkMode: 'auto',
          correctAnswer: '23',
          explanation: 'Stap 1: √49 = 7 (aangesien 7 × 7 = 49)\nStap 2: (−4)² = 16 (dieselfde tekens → positief)\nStap 3: 7 + 16 = 23\nAntwoord: 23 ✓',
        },

        // ── Q11 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken −3³ + √25.',
          answer: '-22',
          checkMode: 'auto',
          correctAnswer: '-22',
          explanation: 'Stap 1: 3³ = 27, dus −3³ = −27 (let wel: geen hakies nie, dus geld die negatief eers ná die eksponent)\nStap 2: √25 = 5\nStap 3: −27 + 5 = −22\nAntwoord: −22 ✓',
        },

        // ── Q12 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo sê (−6)² en −6² is gelyk. Is hy korrek? Verduidelik.',
          answer: 'Nee — (−6)² = 36 maar −6² = −36. Hulle is verskillend.',
          checkMode: 'self',
        },

        // ── Q13 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken −18 ÷ −3 + (−4).',
          answer: '2',
          checkMode: 'auto',
          correctAnswer: '2',
          explanation: 'Stap 1: −18 ÷ −3 = 6 (dieselfde tekens → positief)\nStap 2: 6 + (−4) = 6 − 4 = 2\nAntwoord: 2 ✓',
        },

        // ── Q14 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vind twee heelgetalle waarvan die produk −24 is en die som −2 is.',
          answer: '4 en −6, aangesien 4 × (−6) = −24 en 4 + (−6) = −2.',
          checkMode: 'self',
        },

        // ── Q15 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Bereken (−2)³ × (−1)⁴.',
          answer: '-8',
          checkMode: 'auto',
          correctAnswer: '-8',
          explanation: 'Stap 1: (−2)³ = −8 (onewe mag van negatief → negatief)\nStap 2: (−1)⁴ = 1 (ewe mag van negatief → positief)\nStap 3: −8 × 1 = −8\nAntwoord: −8 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om te bereken met kwadrate, kubusse en wortels van heelgetalle, insluitend die verskil tussen (negatiewe a) in die kwadraat en negatiewe a in die kwadraat" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat die verskil tussen (−a)² en −a² illustreer met kleurgekodeerde kwadraat-, kubus- en wortelberekeninge" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het heelgetalle baasgeraak.' },
    { minScore: 12, message: 'Goeie werk! Jy het ʼn sterk begrip van heelgetalle — hersien enige gemiste vrae en jy sal dit perfek kry.' },
    { minScore: 8, message: 'Goeie poging — hersien die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 0, message: 'Hou aan — werk weer deur die gids afdeling vir afdeling, en probeer dan weer.' },
  ],
}
