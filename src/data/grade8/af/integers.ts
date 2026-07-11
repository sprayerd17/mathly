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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 1-4 Meerstap gemengde bewerkings met heelgetalle | 5-8 Heelgetalle
    // gekombineer met eksponente (kwadrate/kubusse van negatiewe getalle) |
    // 9-12 Bewerkingsorde (BODMAS) met hakies, heelgetalle en eksponente |
    // 13-15 Wortels van heelgetalle gekombineer met ander bewerkings |
    // 16-18 Werklike-lewe meerstapvraagstukke | 19-20 Foutopsporing / meerstap-redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Medium', question: 'Bereken −14 + (−9) × 3.', answer: '-41', checkMode: 'auto', correctAnswer: '-41', explanation: 'Vermenigvuldiging voor optelling: −9 × 3 = −27 (verskillende tekens → negatief). Dan −14 + (−27) = −41.' },
        { difficulty: 'Medium', question: 'Bereken 30 − (−6) × 4.', answer: '54', checkMode: 'auto', correctAnswer: '54', explanation: 'Vermenigvuldiging voor aftrekking: −6 × 4 = −24. Dan 30 − (−24) = 30 + 24 = 54.' },
        { difficulty: 'Medium', question: 'Bereken −18 − (−7) + (−5).', answer: '-16', checkMode: 'auto', correctAnswer: '-16', explanation: 'Werk van links na regs. Stap 1: −18 − (−7) = −18 + 7 = −11. Stap 2: −11 + (−5) = −16.' },
        { difficulty: 'Medium-Hard', question: 'Palesa bereken −12 − 8 × 3 en kry −60, deur van links na regs te werk. Is sy korrek? Verduidelik en gee die korrekte antwoord.', answer: 'Nee — vermenigvuldiging moet voor aftrekking gedoen word: 8 × 3 = 24, dus −12 − 8 × 3 = −12 − 24 = −36, nie −60 nie.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Bereken (−4)².', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: '(−4)² = (−4) × (−4). Dieselfde tekens → positief. 4 × 4 = 16. Antwoord: 16.' },
        { difficulty: 'Easy', question: 'Bereken (−3)³.', answer: '-27', checkMode: 'auto', correctAnswer: '-27', explanation: '(−3)³ = (−3) × (−3) × (−3) = 9 × (−3) = −27 (ʼn onewe mag van ʼn negatiewe getal is negatief).' },
        { difficulty: 'Medium', question: 'Bereken (−2)² − (−3)³.', answer: '31', checkMode: 'auto', correctAnswer: '31', explanation: 'Stap 1: (−2)² = 4. Stap 2: (−3)³ = −27. Stap 3: 4 − (−27) = 4 + 27 = 31.' },
        { difficulty: 'Hard', question: 'Bereken −5² + (−2)³.', answer: '-33', checkMode: 'auto', correctAnswer: '-33', explanation: 'Geen hakies om −5 nie, dus geld die eksponent eerste: 5² = 25, dan −5² = −25. Volgende (−2)³ = −8. Laastens −25 + (−8) = −33.' },
        { difficulty: 'Medium', question: 'Gebruik die korrekte bewerkingsorde om 4 × (−3) + (−2)² te bereken.', answer: '-8', checkMode: 'auto', correctAnswer: '-8', explanation: 'Eksponente en vermenigvuldiging voor optelling. Stap 1: 4 × (−3) = −12. Stap 2: (−2)² = 4. Stap 3: −12 + 4 = −8.' },
        { difficulty: 'Medium', question: 'Gebruik die korrekte bewerkingsorde om (−6 + 2)² − 10 te bereken.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Hakies eerste: −6 + 2 = −4. Dan die eksponent: (−4)² = 16. Laastens 16 − 10 = 6.' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die korrekte bewerkingsorde om −3 × (4 − (−2)) te bereken.', answer: '-18', checkMode: 'auto', correctAnswer: '-18', explanation: 'Hakies eerste: 4 − (−2) = 4 + 2 = 6. Dan −3 × 6 = −18 (verskillende tekens → negatief).' },
        { difficulty: 'Hard', question: 'Gebruik die korrekte bewerkingsorde om (10 − (−2)) ÷ (−3) + (−4)² te bereken.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Hakies eerste: 10 − (−2) = 12. Dan deling: 12 ÷ (−3) = −4. Dan die eksponent: (−4)² = 16. Laastens −4 + 16 = 12.' },
        { difficulty: 'Medium', question: 'Bereken √81 + (−3)³.', answer: '-18', checkMode: 'auto', correctAnswer: '-18', explanation: 'Stap 1: √81 = 9 (aangesien 9 × 9 = 81). Stap 2: (−3)³ = −27. Stap 3: 9 + (−27) = −18.' },
        { difficulty: 'Hard', question: 'Bereken ∛(−27) − (−5)².', answer: '-28', checkMode: 'auto', correctAnswer: '-28', explanation: 'Stap 1: ∛(−27) = −3 (aangesien (−3) × (−3) × (−3) = −27). Stap 2: (−5)² = 25. Stap 3: −3 − 25 = −28.' },
        { difficulty: 'Hard', question: 'Bereken (−2)³ × √16.', answer: '-32', checkMode: 'auto', correctAnswer: '-32', explanation: 'Stap 1: (−2)³ = −8. Stap 2: √16 = 4. Stap 3: −8 × 4 = −32 (verskillende tekens → negatief).' },
        { difficulty: 'Medium', question: 'Die temperatuur by ʼn weerstasie was −7°C. Dit het snags nog ʼn verdere 5°C gedaal, en toe teen mid-oggend 9°C gestyg. Wat was die temperatuur teen mid-oggend?', answer: '-3°C', checkMode: 'auto', correctAnswer: '-3', correctAnswers: ['-3', '-3°c', '-3c'], explanation: 'Begin by −7°C, daal 5°C: −7 − 5 = −12°C. Styg dan 9°C: −12 + 9 = −3°C.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Wandelaar begin op ʼn hoogte van −240 m (onder seespieël). Sy klim 85 m, en klim daarna nog ʼn verdere 60 m. Wat is haar finale hoogte, as ʼn heelgetal?', answer: '-95', checkMode: 'auto', correctAnswer: '-95', explanation: 'Begin by −240 m. Klim 85 m: −240 + 85 = −155 m. Klim ʼn verdere 60 m: −155 + 60 = −95 m.' },
        { difficulty: 'Medium-Hard', question: 'Kagiso se rekening is R680 oorgetrek, geskryf as −R680. Hy maak ʼn deposito van R250, en trek dan nog ʼn verdere R90 uit. Wat is sy nuwe balans?', answer: '-R520', checkMode: 'auto', correctAnswer: '-520', correctAnswers: ['-520', '-r520'], explanation: 'Begin by −680. Deposito 250: −680 + 250 = −430. Onttrekking 90: −430 − 90 = −520. Nuwe balans: −R520.' },
        { difficulty: 'Hard', question: 'Bereken die korrekte waarde van −2 × (−6 + 4) − (−3)².', answer: '-5', checkMode: 'auto', correctAnswer: '-5', explanation: 'Hakies eerste: −6 + 4 = −2. Dan vermenigvuldiging: −2 × (−2) = 4. Dan die eksponent: (−3)² = 9. Laastens 4 − 9 = −5.' },
        { difficulty: 'Hard', question: 'Refilwe bereken (−3)² + (−2)³ × (−1) en kry −11, en sê die eksponente kanselleer mekaar voor die vermenigvuldiging. Is sy korrek? Wys die korrekte werk.', answer: 'Nee — pas eers die eksponente toe: (−3)² = 9 en (−2)³ = −8. Vermenigvuldig dan: −8 × (−1) = 8. Laastens 9 + 8 = 17, nie −11 nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het meerstap heelgetalbewerkings, eksponente, wortels en bewerkingsorde baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklegging as Stel 1, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Medium', question: 'Bereken −17 + (−6) × 5.', answer: '-47', checkMode: 'auto', correctAnswer: '-47', explanation: 'Vermenigvuldiging voor optelling: −6 × 5 = −30 (verskillende tekens → negatief). Dan −17 + (−30) = −47.' },
        { difficulty: 'Medium', question: 'Bereken 25 − (−8) × 3.', answer: '49', checkMode: 'auto', correctAnswer: '49', explanation: 'Vermenigvuldiging voor aftrekking: −8 × 3 = −24. Dan 25 − (−24) = 25 + 24 = 49.' },
        { difficulty: 'Medium', question: 'Bereken −21 − (−9) + (−6).', answer: '-18', checkMode: 'auto', correctAnswer: '-18', explanation: 'Werk van links na regs. Stap 1: −21 − (−9) = −21 + 9 = −12. Stap 2: −12 + (−6) = −18.' },
        { difficulty: 'Medium-Hard', question: 'Bandile bereken −15 − 6 × 4 en kry −84, deur van links na regs te werk. Is hy korrek? Verduidelik en gee die korrekte antwoord.', answer: 'Nee — vermenigvuldiging moet voor aftrekking gedoen word: 6 × 4 = 24, dus −15 − 6 × 4 = −15 − 24 = −39, nie −84 nie.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Bereken (−6)².', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: '(−6)² = (−6) × (−6). Dieselfde tekens → positief. 6 × 6 = 36. Antwoord: 36.' },
        { difficulty: 'Easy', question: 'Bereken (−4)³.', answer: '-64', checkMode: 'auto', correctAnswer: '-64', explanation: '(−4)³ = (−4) × (−4) × (−4) = 16 × (−4) = −64 (ʼn onewe mag van ʼn negatiewe getal is negatief).' },
        { difficulty: 'Medium', question: 'Bereken (−3)² − (−2)³.', answer: '17', checkMode: 'auto', correctAnswer: '17', explanation: 'Stap 1: (−3)² = 9. Stap 2: (−2)³ = −8. Stap 3: 9 − (−8) = 9 + 8 = 17.' },
        { difficulty: 'Hard', question: 'Bereken −6² + (−3)³.', answer: '-63', checkMode: 'auto', correctAnswer: '-63', explanation: 'Geen hakies om −6 nie, dus geld die eksponent eerste: 6² = 36, dan −6² = −36. Volgende (−3)³ = −27. Laastens −36 + (−27) = −63.' },
        { difficulty: 'Medium', question: 'Gebruik die korrekte bewerkingsorde om 5 × (−2) + (−3)² te bereken.', answer: '-1', checkMode: 'auto', correctAnswer: '-1', explanation: 'Eksponente en vermenigvuldiging voor optelling. Stap 1: 5 × (−2) = −10. Stap 2: (−3)² = 9. Stap 3: −10 + 9 = −1.' },
        { difficulty: 'Medium', question: 'Gebruik die korrekte bewerkingsorde om (−7 + 3)² − 12 te bereken.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'Hakies eerste: −7 + 3 = −4. Dan die eksponent: (−4)² = 16. Laastens 16 − 12 = 4.' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die korrekte bewerkingsorde om −4 × (5 − (−3)) te bereken.', answer: '-32', checkMode: 'auto', correctAnswer: '-32', explanation: 'Hakies eerste: 5 − (−3) = 5 + 3 = 8. Dan −4 × 8 = −32 (verskillende tekens → negatief).' },
        { difficulty: 'Hard', question: 'Gebruik die korrekte bewerkingsorde om (18 − (−6)) ÷ (−4) + (−3)² te bereken.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Hakies eerste: 18 − (−6) = 24. Dan deling: 24 ÷ (−4) = −6. Dan die eksponent: (−3)² = 9. Laastens −6 + 9 = 3.' },
        { difficulty: 'Medium', question: 'Bereken √64 + (−2)³.', answer: '0', checkMode: 'auto', correctAnswer: '0', explanation: 'Stap 1: √64 = 8 (aangesien 8 × 8 = 64). Stap 2: (−2)³ = −8. Stap 3: 8 + (−8) = 0.' },
        { difficulty: 'Hard', question: 'Bereken ∛(−8) − (−4)².', answer: '-18', checkMode: 'auto', correctAnswer: '-18', explanation: 'Stap 1: ∛(−8) = −2 (aangesien (−2) × (−2) × (−2) = −8). Stap 2: (−4)² = 16. Stap 3: −2 − 16 = −18.' },
        { difficulty: 'Hard', question: 'Bereken (−3)³ × √9.', answer: '-81', checkMode: 'auto', correctAnswer: '-81', explanation: 'Stap 1: (−3)³ = −27. Stap 2: √9 = 3. Stap 3: −27 × 3 = −81 (verskillende tekens → negatief).' },
        { difficulty: 'Medium', question: 'Die temperatuur by ʼn weerstasie was −9°C. Dit het snags nog ʼn verdere 6°C gedaal, en toe teen mid-oggend 14°C gestyg. Wat was die temperatuur teen mid-oggend?', answer: '-1°C', checkMode: 'auto', correctAnswer: '-1', correctAnswers: ['-1', '-1°c', '-1c'], explanation: 'Begin by −9°C, daal 6°C: −9 − 6 = −15°C. Styg dan 14°C: −15 + 14 = −1°C.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Wandelaar begin op ʼn hoogte van −310 m (onder seespieël). Sy klim 120 m, en klim daarna nog ʼn verdere 45 m. Wat is haar finale hoogte, as ʼn heelgetal?', answer: '-145', checkMode: 'auto', correctAnswer: '-145', explanation: 'Begin by −310 m. Klim 120 m: −310 + 120 = −190 m. Klim ʼn verdere 45 m: −190 + 45 = −145 m.' },
        { difficulty: 'Medium-Hard', question: 'Naledi se rekening is R540 oorgetrek, geskryf as −R540. Sy maak ʼn deposito van R300, en trek dan nog ʼn verdere R120 uit. Wat is haar nuwe balans?', answer: '-R360', checkMode: 'auto', correctAnswer: '-360', correctAnswers: ['-360', '-r360'], explanation: 'Begin by −540. Deposito 300: −540 + 300 = −240. Onttrekking 120: −240 − 120 = −360. Nuwe balans: −R360.' },
        { difficulty: 'Hard', question: 'Bereken die korrekte waarde van −3 × (−8 + 5) − (−2)².', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Hakies eerste: −8 + 5 = −3. Dan vermenigvuldiging: −3 × (−3) = 9. Dan die eksponent: (−2)² = 4. Laastens 9 − 4 = 5.' },
        { difficulty: 'Hard', question: 'Sibusiso bereken (−4)² + (−3)³ × (−1) en kry 13, en sê die eksponente kanselleer mekaar voor die vermenigvuldiging. Is hy korrek? Wys die korrekte werk.', answer: 'Nee — pas eers die eksponente toe: (−4)² = 16 en (−3)³ = −27. Vermenigvuldig dan: −27 × (−1) = 27. Laastens 16 + 27 = 43, nie 13 nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het meerstap heelgetalbewerkings, eksponente, wortels en bewerkingsorde baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklegging as Stel 1/2, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Medium', question: 'Bereken −20 + (−8) × 3.', answer: '-44', checkMode: 'auto', correctAnswer: '-44', explanation: 'Vermenigvuldiging voor optelling: −8 × 3 = −24 (verskillende tekens → negatief). Dan −20 + (−24) = −44.' },
        { difficulty: 'Medium', question: 'Bereken 18 − (−9) × 5.', answer: '63', checkMode: 'auto', correctAnswer: '63', explanation: 'Vermenigvuldiging voor aftrekking: −9 × 5 = −45. Dan 18 − (−45) = 18 + 45 = 63.' },
        { difficulty: 'Medium', question: 'Bereken −14 − (−8) + (−11).', answer: '-17', checkMode: 'auto', correctAnswer: '-17', explanation: 'Werk van links na regs. Stap 1: −14 − (−8) = −14 + 8 = −6. Stap 2: −6 + (−11) = −17.' },
        { difficulty: 'Medium-Hard', question: 'Ayanda bereken −9 − 7 × 5 en kry −80, deur van links na regs te werk. Is sy korrek? Verduidelik en gee die korrekte antwoord.', answer: 'Nee — vermenigvuldiging moet voor aftrekking gedoen word: 7 × 5 = 35, dus −9 − 7 × 5 = −9 − 35 = −44, nie −80 nie.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Bereken (−7)².', answer: '49', checkMode: 'auto', correctAnswer: '49', explanation: '(−7)² = (−7) × (−7). Dieselfde tekens → positief. 7 × 7 = 49. Antwoord: 49.' },
        { difficulty: 'Easy', question: 'Bereken (−5)³.', answer: '-125', checkMode: 'auto', correctAnswer: '-125', explanation: '(−5)³ = (−5) × (−5) × (−5) = 25 × (−5) = −125 (ʼn onewe mag van ʼn negatiewe getal is negatief).' },
        { difficulty: 'Medium', question: 'Bereken (−4)² − (−2)³.', answer: '24', checkMode: 'auto', correctAnswer: '24', explanation: 'Stap 1: (−4)² = 16. Stap 2: (−2)³ = −8. Stap 3: 16 − (−8) = 16 + 8 = 24.' },
        { difficulty: 'Hard', question: 'Bereken −4² + (−3)³.', answer: '-43', checkMode: 'auto', correctAnswer: '-43', explanation: 'Geen hakies om −4 nie, dus geld die eksponent eerste: 4² = 16, dan −4² = −16. Volgende (−3)³ = −27. Laastens −16 + (−27) = −43.' },
        { difficulty: 'Medium', question: 'Gebruik die korrekte bewerkingsorde om 6 × (−3) + (−4)² te bereken.', answer: '-2', checkMode: 'auto', correctAnswer: '-2', explanation: 'Eksponente en vermenigvuldiging voor optelling. Stap 1: 6 × (−3) = −18. Stap 2: (−4)² = 16. Stap 3: −18 + 16 = −2.' },
        { difficulty: 'Medium', question: 'Gebruik die korrekte bewerkingsorde om (−5 + 1)² − 8 te bereken.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Hakies eerste: −5 + 1 = −4. Dan die eksponent: (−4)² = 16. Laastens 16 − 8 = 8.' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die korrekte bewerkingsorde om −5 × (6 − (−1)) te bereken.', answer: '-35', checkMode: 'auto', correctAnswer: '-35', explanation: 'Hakies eerste: 6 − (−1) = 6 + 1 = 7. Dan −5 × 7 = −35 (verskillende tekens → negatief).' },
        { difficulty: 'Hard', question: 'Gebruik die korrekte bewerkingsorde om (14 − (−4)) ÷ (−3) + (−5)² te bereken.', answer: '19', checkMode: 'auto', correctAnswer: '19', explanation: 'Hakies eerste: 14 − (−4) = 18. Dan deling: 18 ÷ (−3) = −6. Dan die eksponent: (−5)² = 25. Laastens −6 + 25 = 19.' },
        { difficulty: 'Medium', question: 'Bereken √100 + (−4)³.', answer: '-54', checkMode: 'auto', correctAnswer: '-54', explanation: 'Stap 1: √100 = 10 (aangesien 10 × 10 = 100). Stap 2: (−4)³ = −64. Stap 3: 10 + (−64) = −54.' },
        { difficulty: 'Hard', question: 'Bereken ∛(−64) − (−3)².', answer: '-13', checkMode: 'auto', correctAnswer: '-13', explanation: 'Stap 1: ∛(−64) = −4 (aangesien (−4) × (−4) × (−4) = −64). Stap 2: (−3)² = 9. Stap 3: −4 − 9 = −13.' },
        { difficulty: 'Hard', question: 'Bereken (−1)³ × √25.', answer: '-5', checkMode: 'auto', correctAnswer: '-5', explanation: 'Stap 1: (−1)³ = −1. Stap 2: √25 = 5. Stap 3: −1 × 5 = −5 (verskillende tekens → negatief).' },
        { difficulty: 'Medium', question: 'Die temperatuur by ʼn weerstasie was −11°C. Dit het snags nog ʼn verdere 4°C gedaal, en toe teen mid-oggend 19°C gestyg. Wat was die temperatuur teen mid-oggend?', answer: '4°C', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4°c', '4c'], explanation: 'Begin by −11°C, daal 4°C: −11 − 4 = −15°C. Styg dan 19°C: −15 + 19 = 4°C.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Wandelaar begin op ʼn hoogte van −180 m (onder seespieël). Sy klim 95 m, en klim daarna nog ʼn verdere 40 m. Wat is haar finale hoogte, as ʼn heelgetal?', answer: '-45', checkMode: 'auto', correctAnswer: '-45', explanation: 'Begin by −180 m. Klim 95 m: −180 + 95 = −85 m. Klim ʼn verdere 40 m: −85 + 40 = −45 m.' },
        { difficulty: 'Medium-Hard', question: 'Thandeka se rekening is R415 oorgetrek, geskryf as −R415. Sy maak ʼn deposito van R275, en trek dan nog ʼn verdere R160 uit. Wat is haar nuwe balans?', answer: '-R300', checkMode: 'auto', correctAnswer: '-300', correctAnswers: ['-300', '-r300'], explanation: 'Begin by −415. Deposito 275: −415 + 275 = −140. Onttrekking 160: −140 − 160 = −300. Nuwe balans: −R300.' },
        { difficulty: 'Hard', question: 'Bereken die korrekte waarde van −4 × (−9 + 6) − (−5)².', answer: '-13', checkMode: 'auto', correctAnswer: '-13', explanation: 'Hakies eerste: −9 + 6 = −3. Dan vermenigvuldiging: −4 × (−3) = 12. Dan die eksponent: (−5)² = 25. Laastens 12 − 25 = −13.' },
        { difficulty: 'Hard', question: 'Katlego bereken (−2)² + (−4)³ × (−1) en kry −18, en sê die eksponente kanselleer mekaar voor die vermenigvuldiging. Is hy korrek? Wys die korrekte werk.', answer: 'Nee — pas eers die eksponente toe: (−2)² = 4 en (−4)³ = −64. Vermenigvuldig dan: −64 × (−1) = 64. Laastens 4 + 64 = 68, nie −18 nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het meerstap heelgetalbewerkings, eksponente, wortels en bewerkingsorde baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
