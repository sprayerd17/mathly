import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// coefficient → blue   (#2563eb)
// exponent    → orange (#ea580c)
// term type   → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebraïese Uitdrukkings',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — CONVENTIONS, LIKE/UNLIKE TERMS, COEFFICIENTS AND MONOMIALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'conventions-like-unlike-terms',
      title: 'Konvensies, Gelyksoortige/Ongelyksoortige Terme, Koëffisiënte en Monome',
      icon: '𝑥',
      explanation:
        `<p style="margin-bottom:16px;">Ons leer die <strong>konvensies</strong> vir die skryf van algebraïese uitdrukkings (bv. 3xy nie x3y nie), klassifiseer <strong>gelyksoortige</strong> en <strong>ongelyksoortige terme</strong>, identifiseer <strong>koëffisiënte</strong> en <strong>eksponente</strong>, en herken en onderskei tussen <strong>monome</strong> (een term), <strong>binome</strong> (twee terme) en <strong>trinome</strong> (drie terme).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('koëffisiënte')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eksponente')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('termtipe')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleuteldefinisies</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Koëffisiënt</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die getal wat met die veranderlike vermenigvuldig word. In ${bl('4')}x², is die koëffisiënt ${bl('4')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Eksponent</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die mag waartoe ʼn veranderlike verhef word. In 4x${or('²')}, is die eksponent ${or('2')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Monoom / Binoom / Trinoom</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Monoom')}: 1 term. ${gr('Binoom')}: 2 terme. ${gr('Trinoom')}: 3 terme.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Gelyksoortige teenoor Ongelyksoortige Terme</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>Gelyksoortige terme</strong> het dieselfde veranderlike en eksponent. <strong>Ongelyksoortige terme</strong> nie.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Skryfkonvensie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Skryf altyd die koëffisiënt voor die veranderlike: skryf <strong>3xy</strong>, nie x3y of y3x nie. Veranderlikes word volgens konvensie alfabeties geskryf: <strong>3xy</strong>, nie 3yx nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Klassifiseer 4x²+3x−7 as ʼn monoom, binoom of trinoom.',
          answer: `Dit is ʼn ${gr('trinoom')}`,
          steps: [
            `Tel die terme: ${bl('4')}x${or('²')}, ${bl('3')}x, en −7. Daar is <strong>3 terme</strong>.`,
            `ʼn Uitdrukking met 3 terme is ʼn ${gr('trinoom')}.`,
          ],
        },
        {
          question: 'Identifiseer die koëffisiënt en eksponent in −5x³.',
          answer: `Koëffisiënt: ${bl('−5')}. Eksponent: ${or('3')}.`,
          steps: [
            `Die ${bl('koëffisiënt')} is die getal wat met die veranderlike vermenigvuldig word: ${bl('−5')}.`,
            `Die ${or('eksponent')} is die mag van x: ${or('3')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining conventions for writing algebraic expressions, like and unlike terms, coefficients, exponents, monomials, binomials and trinomials" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram labelling the parts of an algebraic term — coefficient in blue, variable, exponent in orange — with examples of monomial, binomial and trinomial in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — ADDING, SUBTRACTING, MULTIPLYING AND DIVIDING EXPRESSIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'operations-on-expressions',
      title: 'Uitdrukkings Optel, Aftrek, Vermenigvuldig en Deel',
      icon: '±',
      explanation:
        `<p style="margin-bottom:16px;">Ons <strong>tel gelyksoortige terme op en trek hulle af</strong>, <strong>vermenigvuldig</strong> heelgetalle en monome met monome, binome en trinome deur die <strong>distributiewe wet</strong> te gebruik, en <strong>deel</strong> monome, binome en trinome deur heelgetalle of monome.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gelyksoortige terme gegroepeer')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('distribusie')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('deling')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelreëls</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<p style="margin:0;font-size:14px;">${bl('Optel/aftrek:')} Kombineer slegs ${bl('gelyksoortige terme')} — dieselfde veranderlike, dieselfde eksponent.</p>` +
        `</div>` +

        `<div style="padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<p style="margin:0;font-size:14px;">${or('Vermenigvuldig:')} Gebruik die ${or('distributiewe wet')} — vermenigvuldig die faktor buite die hakies met elke term binne.</p>` +
        `</div>` +

        `<div style="padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<p style="margin:0;font-size:14px;">${gr('Deel:')} ${gr('Deel koëffisiënte')} afsonderlik en ${gr('deel veranderlikes')} deur eksponente af te trek.</p>` +
        `</div>` +

        `</div>`,

      workedExamples: [
        {
          question: 'Vereenvoudig 5x+3y−2x+7y.',
          answer: `3x+10y`,
          steps: [
            `Groepeer ${bl('gelyksoortige terme')}: (${bl('5x−2x')})+(${bl('3y+7y')}).`,
            `Vereenvoudig: ${bl('5x−2x')} = 3x en ${bl('3y+7y')} = 10y.`,
            `<strong>Antwoord:</strong> 3x+10y`,
          ],
        },
        {
          question: 'Vermenigvuldig 4x(3x+5).',
          answer: `12x²+20x`,
          steps: [
            `Gebruik die ${or('distributiewe wet')}: vermenigvuldig 4x met elke term binne die hakies.`,
            `${or('(4x)(3x)')} + ${or('(4x)(5)')} = 12x²+20x.`,
            `<strong>Antwoord:</strong> 12x²+20x`,
          ],
        },
        {
          question: 'Deel 15x³÷3x.',
          answer: `5x²`,
          steps: [
            `${gr('Deel die koëffisiënte')}: 15÷3 = 5.`,
            `${gr('Deel die veranderlikes')}: x³÷x = x³⁻¹ = x².`,
            `<strong>Antwoord:</strong> 5x²`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to add and subtract like terms, apply the distributive law when multiplying, and divide monomials by dividing coefficients and subtracting exponents" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Side-by-side worked examples of adding like terms in blue, distribution in orange and division in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SQUARES, CUBES, ROOTS AND SUBSTITUTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'squares-cubes-roots-substitution',
      title: 'Vierkante, Kubusse, Wortels van Algebraïese Terme en Vervanging',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">Ons bepaal die <strong>vierkante</strong>, <strong>kubusse</strong>, <strong>vierkantswortels</strong> en <strong>kubuswortels</strong> van enkele algebraïese terme of gelyksoortige algebraïese terme, en bepaal die numeriese waarde van algebraïese uitdrukkings deur <strong>vervanging</strong>.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('algebraïese terme')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vervanging')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelreëls vir magte en wortels</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">ʼn Term kwadreer</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Kwadreer die koëffisiënt en verdubbel die eksponent: (${bl('ax')}ⁿ)² = a²x²ⁿ.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">ʼn Term kubeer</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Kubeer die koëffisiënt en verdriedubbel die eksponent: (${bl('ax')}ⁿ)³ = a³x³ⁿ.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vierkantswortel/kubuswortel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Neem die vierkantswortel van die koëffisiënt en halveer die eksponent, of neem die derdemagswortel daarvan en deel die eksponent deur 3.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Vervanging</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('Vervang')} elke veranderlike met die gegewe waarde, en bereken dan met behulp van BODMAS.</p>` +
        `</div>` +

        `</div>`,

      workedExamples: [
        {
          question: 'Bepaal die vierkant van 3x².',
          answer: `${gr('9x⁴')}`,
          steps: [
            `Pas (${bl('3x²')})² toe: kwadreer die koëffisiënt en verdubbel die eksponent.`,
            `3² = 9 en (x²)² = x⁴.`,
            `<strong>Antwoord:</strong> ${gr('9x⁴')}`,
          ],
        },
        {
          question: 'Bereken 2x²+5x−3 wanneer x=4.',
          answer: `${gr('49')}`,
          steps: [
            `${or('Vervang')} x = 4: 2(${or('4')})²+5(${or('4')})−3.`,
            `Bereken: 2(16)+20−3 = 32+20−3.`,
            `<strong>Antwoord:</strong> ${gr('49')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to square and cube algebraic terms, find square and cube roots of algebraic terms, and evaluate expressions by substitution" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Step-by-step substitution example with x value highlighted in orange and the final answer in green" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Klassifiseer 6x+9 as ʼn monoom, binoom of trinoom.',
      checkMode: 'auto',
      correctAnswer: 'binoom',
      answer: 'binoom',
    },

    // ── Q2 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Identifiseer die koëffisiënt in 7x².',
      checkMode: 'auto',
      correctAnswer: '7',
      answer: '7',
    },

    // ── Q3 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho sê 3x en 3x² is gelyksoortige terme. Is hy korrek? Verduidelik.',
      checkMode: 'self',
      answer: 'Nee — hulle het verskillende eksponente (magte van x), so hulle is ongelyksoortige terme.',
    },

    // ── Q4 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vereenvoudig 8a+5b−3a+2b.',
      checkMode: 'auto',
      correctAnswer: '5a+7b',
      answer: '5a+7b',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vermenigvuldig 5x(2x−3).',
      checkMode: 'auto',
      correctAnswer: '10x²-15x',
      correctAnswers: ['10x²-15x', '10x²−15x'],
      answer: '10x²−15x',
    },

    // ── Q6 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato vereenvoudig 3(2x+4)−5x en kry x+12. Kontroleer haar antwoord.',
      checkMode: 'self',
      answer: 'Korrek — 3(2x+4)=6x+12. Dan 6x+12−5x=x+12.',
    },

    // ── Q7 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Deel 12x²÷4x.',
      checkMode: 'auto',
      correctAnswer: '3x',
      answer: '3x',
    },

    // ── Q8 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bepaal die vierkant van 2x³.',
      checkMode: 'auto',
      correctAnswer: '4x⁶',
      answer: '4x⁶',
    },

    // ── Q9 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê die vierkantswortel van 9x⁴ is 3x². Is hy korrek? Verduidelik.',
      checkMode: 'self',
      answer: 'Ja — √9x⁴=√9 × √x⁴=3x², aangesien (3x²)²=9x⁴.',
    },

    // ── Q10 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken 3x²−2x+1 wanneer x=3.',
      checkMode: 'auto',
      correctAnswer: '22',
      answer: '22',
    },

    // ── Q11 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê (−2x)² en −2x² is gelyk. Is sy korrek? Verduidelik.',
      checkMode: 'self',
      answer: 'Nee — (−2x)²=4x², maar −2x²=−(2x²)=−2x². Dit is verskillende uitdrukkings.',
    },

    // ── Q12 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vereenvoudig 4x(x+3)−2x².',
      checkMode: 'auto',
      correctAnswer: '2x²+12x',
      answer: '2x²+12x',
    },

    // ── Q13 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Bepaal die kubuswortel van 27x⁶.',
      checkMode: 'auto',
      correctAnswer: '3x²',
      answer: '3x²',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho bereken x²+4x−5 wanneer x=−2 en kry −9. Kontroleer sy antwoord.',
      checkMode: 'self',
      answer: 'Vervang x=−2: 4−8−5=−9. Korrek.',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê om −18x³ deur −6x te deel gee 3x². Is sy korrek? Verduidelik.',
      checkMode: 'self',
      answer: 'Ja — die deling van twee negatiewe getalle gee ʼn positiewe getal, en −18÷−6=3, x³÷x=x², so die antwoord is 3x².',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het algebraïese uitdrukkings bemeester.' },
      { minPercent: 75, message: 'Puik werk!' },
      { minPercent: 50, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die studiegids.' },
    ],
  },

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het algebraïese uitdrukkings bemeester.' },
    { minScore: 11, message: 'Puik werk!' },
    { minScore: 8, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],
}
