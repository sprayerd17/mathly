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
        '<VideoPlaceholder label="Kort video wat konvensies vir die skryf van algebraïese uitdrukkings verduidelik, gelyksoortige en ongelyksoortige terme, koëffisiënte, eksponente, monome, binome en trinome" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat die dele van ʼn algebraïese term merk — koëffisiënt in blou, veranderlike, eksponent in oranje — met voorbeelde van monoom, binoom en trinoom in groen" />',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om gelyksoortige terme op te tel en af te trek, die distributiewe wet toe te pas by vermenigvuldiging, en monome te deel deur koëffisiënte te deel en eksponente af te trek" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Newenmekaar uitgewerkte voorbeelde van optel van gelyksoortige terme in blou, distribusie in oranje en deling in groen" />',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om algebraïese terme te kwadreer en te kubeer, vierkantswortels en kubuswortels van algebraïese terme te vind, en uitdrukkings deur vervanging te bereken" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Stap-vir-stap vervangingsvoorbeeld met die x-waarde uitgelig in oranje en die finale antwoord in groen" />',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-2): Vereenvoudiging met veelvuldige veranderlikes/eksponente
    // Blok 2 (3-6): Uitbrei van hakies (distributiewe wet)
    // Blok 3 (7-10): Faktorisering deur gemeenskaplike faktor
    // Blok 4 (11-14): Vervanging met negatiewe/breukwaardes
    // Blok 5 (15-17): Multi-stap vereenvoudiging wat verskeie vaardighede kombineer
    // Blok 6 (18-19): Foutopsporing / kritiek
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Vereenvoudiging met veelvuldige veranderlikes/eksponente (Easy)
        { difficulty: 'Easy', question: 'Vereenvoudig 5x²+3x−2x²+4x.', checkMode: 'auto', correctAnswer: '3x²+7x', correctAnswers: ['3x²+7x', '3x^2+7x', '7x+3x²'], answer: '3x²+7x', explanation: 'Groepeer gelyksoortige terme: (5x²−2x²)+(3x+4x).\n5x²−2x²=3x² en 3x+4x=7x.\nAntwoord: 3x²+7x' },
        { difficulty: 'Easy', question: 'Vereenvoudig 6xy+4x−2xy+x.', checkMode: 'auto', correctAnswer: '4xy+5x', correctAnswers: ['4xy+5x', '5x+4xy'], answer: '4xy+5x', explanation: 'Groepeer gelyksoortige terme: (6xy−2xy)+(4x+x).\n6xy−2xy=4xy en 4x+x=5x.\nAntwoord: 4xy+5x' },
        { difficulty: 'Easy', question: 'Vereenvoudig 4a²b+3ab−2a²b.', checkMode: 'auto', correctAnswer: '2a²b+3ab', correctAnswers: ['2a²b+3ab', '2a^2b+3ab', '3ab+2a²b'], answer: '2a²b+3ab', explanation: 'Slegs die a²b-terme is gelyksoortig: 4a²b−2a²b=2a²b.\n3ab het ʼn ander eksponent op a, dus kan dit nie gekombineer word nie.\nAntwoord: 2a²b+3ab' },

        // Blok 2 — Uitbrei van hakies, distributiewe wet (Medium)
        { difficulty: 'Medium', question: 'Brei uit: 3x(2x+5).', checkMode: 'auto', correctAnswer: '6x²+15x', correctAnswers: ['6x²+15x', '6x^2+15x'], answer: '6x²+15x', explanation: 'Vermenigvuldig 3x met elke term binne die hakies.\n(3x)(2x)=6x² en (3x)(5)=15x.\nAntwoord: 6x²+15x' },
        { difficulty: 'Medium', question: 'Brei uit: −4x(x−3).', checkMode: 'auto', correctAnswer: '-4x²+12x', correctAnswers: ['-4x²+12x', '−4x²+12x', '-4x^2+12x'], answer: '−4x²+12x', explanation: 'Vermenigvuldig −4x met elke term binne die hakies.\n(−4x)(x)=−4x² en (−4x)(−3)=+12x.\nAntwoord: −4x²+12x' },
        { difficulty: 'Medium', question: 'Brei uit en vereenvoudig: 2(3x+4)+5x.', checkMode: 'auto', correctAnswer: '11x+8', correctAnswers: ['11x+8', '8+11x'], answer: '11x+8', explanation: 'Brei die hakies uit: 2(3x+4)=6x+8.\nTel die oorblywende term by: 6x+8+5x.\nKombineer gelyksoortige terme: 6x+5x=11x.\nAntwoord: 11x+8' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige tafel het lengte (x+6) cm en breedte 3 cm. Skryf ʼn uitdrukking vir die oppervlakte, en brei dit uit.', checkMode: 'auto', correctAnswer: '3x+18', correctAnswers: ['3x+18', '18+3x'], answer: 'Oppervlakte = 3(x+6) = 3x+18', explanation: 'Oppervlakte van ʼn reghoek = lengte × breedte = 3(x+6).\nBrei uit: (3)(x)+(3)(6)=3x+18.\nAntwoord: 3x+18' },

        // Blok 3 — Faktorisering deur gemeenskaplike faktor (Medium)
        { difficulty: 'Medium', question: 'Faktoriseer 6x+9 volledig.', checkMode: 'auto', correctAnswer: '3(2x+3)', correctAnswers: ['3(2x+3)'], answer: '3(2x+3)', explanation: 'Die GGF van 6 en 9 is 3.\nDeel elke term deur 3: 6x÷3=2x en 9÷3=3.\nAntwoord: 3(2x+3)' },
        { difficulty: 'Medium', question: 'Faktoriseer 8x²+12x volledig.', checkMode: 'auto', correctAnswer: '4x(2x+3)', correctAnswers: ['4x(2x+3)'], answer: '4x(2x+3)', explanation: 'Die GGF van die koëffisiënte 8 en 12 is 4, en albei terme deel ʼn faktor van x.\nDeel elke term deur 4x: 8x²÷4x=2x en 12x÷4x=3.\nAntwoord: 4x(2x+3)' },
        { difficulty: 'Medium', question: 'Faktoriseer 15xy−10x volledig.', checkMode: 'auto', correctAnswer: '5x(3y-2)', correctAnswers: ['5x(3y-2)', '5x(3y−2)'], answer: '5x(3y−2)', explanation: 'Die GGF van 15 en 10 is 5, en albei terme deel ʼn faktor van x.\nDeel elke term deur 5x: 15xy÷5x=3y en 10x÷5x=2.\nAntwoord: 5x(3y−2)' },
        { difficulty: 'Medium', question: 'ʼn Leerder faktoriseer 12x+18 en skryf 6(2x+3). Kontroleer of dit volledig gefaktoriseer en korrek is.', checkMode: 'self', answer: 'Korrek en volledig gefaktoriseer. Kontrole: 6(2x)=12x en 6(3)=18, so die produk is reg. Die GGF van 12 en 18 is 6, en 2x en 3 deel geen verdere gemeenskaplike faktor nie, so 6(2x+3) is die volledig gefaktoriseerde vorm.' },

        // Blok 4 — Vervanging met negatiewe/breukwaardes (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Bereken 3x²−2x wanneer x=−2.', checkMode: 'auto', correctAnswer: '16', answer: '16', explanation: 'Vervang x=−2: 3(−2)²−2(−2).\n(−2)²=4, dus 3(4)=12. Ook −2(−2)=+4.\n12+4=16' },
        { difficulty: 'Medium-Hard', question: 'Bereken 2x+5y wanneer x=0,5 en y=−3.', checkMode: 'auto', correctAnswer: '-14', correctAnswers: ['-14', '−14'], answer: '−14', explanation: 'Vervang x=0,5 en y=−3: 2(0,5)+5(−3).\n2(0,5)=1 en 5(−3)=−15.\n1−15=−14' },
        { difficulty: 'Medium-Hard', question: 'Bereken x²−3x+4 wanneer x=−1.', checkMode: 'auto', correctAnswer: '8', answer: '8', explanation: 'Vervang x=−1: (−1)²−3(−1)+4.\n(−1)²=1 en −3(−1)=+3.\n1+3+4=8' },
        { difficulty: 'Medium-Hard', question: 'Die koste in rand om ʼn peddelplank te huur is C=6h+12, waar h die aantal ure is. Bepaal die koste wanneer h=2,5 ure.', checkMode: 'auto', correctAnswer: '27', answer: '27', explanation: 'Vervang h=2,5: C=6(2,5)+12.\n6(2,5)=15, dus C=15+12=27.\nDie koste is R27.' },

        // Blok 5 — Multi-stap vereenvoudiging wat verskeie vaardighede kombineer (Hard)
        { difficulty: 'Hard', question: 'Vereenvoudig 3x(x+2)−5x.', checkMode: 'auto', correctAnswer: '3x²+x', correctAnswers: ['3x²+x', '3x^2+x', 'x+3x²'], answer: '3x²+x', explanation: 'Brei eers uit: 3x(x+2)=3x²+6x.\nTrek 5x af: 3x²+6x−5x.\nKombineer gelyksoortige terme: 6x−5x=x.\nAntwoord: 3x²+x' },
        { difficulty: 'Hard', question: 'Vereenvoudig 4x+8+2x, en faktoriseer dan die resultaat volledig.', checkMode: 'auto', correctAnswer: '2(3x+4)', correctAnswers: ['2(3x+4)'], answer: '2(3x+4)', explanation: 'Vereenvoudig eers: 4x+8+2x=6x+8.\nFaktoriseer: die GGF van 6 en 8 is 2.\nDeel elke term deur 2: 6x÷2=3x en 8÷2=4.\nAntwoord: 2(3x+4)' },
        { difficulty: 'Hard', question: 'Brei uit en vereenvoudig: 2(x+3)+3(x−1).', checkMode: 'auto', correctAnswer: '5x+3', correctAnswers: ['5x+3', '3+5x'], answer: '5x+3', explanation: 'Brei elke hakie uit: 2(x+3)=2x+6 en 3(x−1)=3x−3.\nTel op: 2x+6+3x−3.\nKombineer gelyksoortige terme: (2x+3x)+(6−3)=5x+3.\nAntwoord: 5x+3' },

        // Blok 6 — Foutopsporing / kritiek (Hard)
        { difficulty: 'Hard', question: 'ʼn Leerder brei 5x(2x−3) uit en skryf 10x−15. Vind die fout en gee die korrekte antwoord.', checkMode: 'self', answer: 'Die leerder het vergeet om die x in 2x met die x in 5x te vermenigvuldig, en het die x by die tweede term weggelaat. Die korrekte uitbreiding is (5x)(2x)=10x² en (5x)(−3)=−15x, wat 10x²−15x gee, nie 10x−15 nie.' },
        { difficulty: 'Hard', question: 'ʼn Leerder vervang x=−3 in x²+2x en kry −3. Kontroleer die werk en gee die korrekte antwoord.', checkMode: 'self', answer: 'Die leerder het ʼn fout gemaak, waarskynlik deur (−3)² as −9 in plaas van +9 te hanteer. Die korrekte berekening is (−3)²+2(−3)=9−6=3, dus die korrekte antwoord is 3, nie −3 nie.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het vereenvoudiging, uitbreiding, faktorisering en vervanging bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor die uitbrei van hakies of faktorisering weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde oor die distributiewe wet en vervanging, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Vereenvoudiging met veelvuldige veranderlikes/eksponente (Easy)
        { difficulty: 'Easy', question: 'Vereenvoudig 7x²+2x−3x²+5x.', checkMode: 'auto', correctAnswer: '4x²+7x', correctAnswers: ['4x²+7x', '4x^2+7x', '7x+4x²'], answer: '4x²+7x', explanation: 'Groepeer gelyksoortige terme: (7x²−3x²)+(2x+5x).\n7x²−3x²=4x² en 2x+5x=7x.\nAntwoord: 4x²+7x' },
        { difficulty: 'Easy', question: 'Vereenvoudig 5xy+6x−3xy+2x.', checkMode: 'auto', correctAnswer: '2xy+8x', correctAnswers: ['2xy+8x', '8x+2xy'], answer: '2xy+8x', explanation: 'Groepeer gelyksoortige terme: (5xy−3xy)+(6x+2x).\n5xy−3xy=2xy en 6x+2x=8x.\nAntwoord: 2xy+8x' },
        { difficulty: 'Easy', question: 'Vereenvoudig 6a²b+2ab−3a²b.', checkMode: 'auto', correctAnswer: '3a²b+2ab', correctAnswers: ['3a²b+2ab', '3a^2b+2ab', '2ab+3a²b'], answer: '3a²b+2ab', explanation: 'Slegs die a²b-terme is gelyksoortig: 6a²b−3a²b=3a²b.\n2ab het ʼn ander eksponent op a, dus kan dit nie gekombineer word nie.\nAntwoord: 3a²b+2ab' },

        // Blok 2 — Uitbrei van hakies, distributiewe wet (Medium)
        { difficulty: 'Medium', question: 'Brei uit: 4x(3x+2).', checkMode: 'auto', correctAnswer: '12x²+8x', correctAnswers: ['12x²+8x', '12x^2+8x'], answer: '12x²+8x', explanation: 'Vermenigvuldig 4x met elke term binne die hakies.\n(4x)(3x)=12x² en (4x)(2)=8x.\nAntwoord: 12x²+8x' },
        { difficulty: 'Medium', question: 'Brei uit: −5x(x−2).', checkMode: 'auto', correctAnswer: '-5x²+10x', correctAnswers: ['-5x²+10x', '−5x²+10x', '-5x^2+10x'], answer: '−5x²+10x', explanation: 'Vermenigvuldig −5x met elke term binne die hakies.\n(−5x)(x)=−5x² en (−5x)(−2)=+10x.\nAntwoord: −5x²+10x' },
        { difficulty: 'Medium', question: 'Brei uit en vereenvoudig: 3(2x+5)+4x.', checkMode: 'auto', correctAnswer: '10x+15', correctAnswers: ['10x+15', '15+10x'], answer: '10x+15', explanation: 'Brei die hakies uit: 3(2x+5)=6x+15.\nTel die oorblywende term by: 6x+15+4x.\nKombineer gelyksoortige terme: 6x+4x=10x.\nAntwoord: 10x+15' },
        { difficulty: 'Medium', question: 'ʼn Klaskamerplakkaat het lengte 4 cm en breedte (x+8) cm. Skryf ʼn uitdrukking vir die oppervlakte, en brei dit uit.', checkMode: 'auto', correctAnswer: '4x+32', correctAnswers: ['4x+32', '32+4x'], answer: 'Oppervlakte = 4(x+8) = 4x+32', explanation: 'Oppervlakte van ʼn reghoek = lengte × breedte = 4(x+8).\nBrei uit: (4)(x)+(4)(8)=4x+32.\nAntwoord: 4x+32' },

        // Blok 3 — Faktorisering deur gemeenskaplike faktor (Medium)
        { difficulty: 'Medium', question: 'Faktoriseer 8x+12 volledig.', checkMode: 'auto', correctAnswer: '4(2x+3)', correctAnswers: ['4(2x+3)'], answer: '4(2x+3)', explanation: 'Die GGF van 8 en 12 is 4.\nDeel elke term deur 4: 8x÷4=2x en 12÷4=3.\nAntwoord: 4(2x+3)' },
        { difficulty: 'Medium', question: 'Faktoriseer 10x²+15x volledig.', checkMode: 'auto', correctAnswer: '5x(2x+3)', correctAnswers: ['5x(2x+3)'], answer: '5x(2x+3)', explanation: 'Die GGF van die koëffisiënte 10 en 15 is 5, en albei terme deel ʼn faktor van x.\nDeel elke term deur 5x: 10x²÷5x=2x en 15x÷5x=3.\nAntwoord: 5x(2x+3)' },
        { difficulty: 'Medium', question: 'Faktoriseer 21xy−14x volledig.', checkMode: 'auto', correctAnswer: '7x(3y-2)', correctAnswers: ['7x(3y-2)', '7x(3y−2)'], answer: '7x(3y−2)', explanation: 'Die GGF van 21 en 14 is 7, en albei terme deel ʼn faktor van x.\nDeel elke term deur 7x: 21xy÷7x=3y en 14x÷7x=2.\nAntwoord: 7x(3y−2)' },
        { difficulty: 'Medium', question: 'ʼn Leerder faktoriseer 20x+30 en skryf 5(4x+6). Kontroleer of dit volledig gefaktoriseer is.', checkMode: 'self', answer: 'Nie volledig gefaktoriseer nie. Kontrole van die produk: 5(4x)=20x en 5(6)=30, so die vermenigvuldiging is korrek, maar 4x en 6 deel steeds ʼn gemeenskaplike faktor van 2. Die GGF van 20 en 30 is eintlik 10, dus die volledig gefaktoriseerde vorm is 10(2x+3).' },

        // Blok 4 — Vervanging met negatiewe/breukwaardes (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Bereken 4x²−3x wanneer x=−2.', checkMode: 'auto', correctAnswer: '22', answer: '22', explanation: 'Vervang x=−2: 4(−2)²−3(−2).\n(−2)²=4, dus 4(4)=16. Ook −3(−2)=+6.\n16+6=22' },
        { difficulty: 'Medium-Hard', question: 'Bereken 3x+4y wanneer x=0,5 en y=−2.', checkMode: 'auto', correctAnswer: '-6,5', correctAnswers: ['-6,5', '−6,5', '-6.5', '−6.5'], answer: '−6,5', explanation: 'Vervang x=0,5 en y=−2: 3(0,5)+4(−2).\n3(0,5)=1,5 en 4(−2)=−8.\n1,5−8=−6,5' },
        { difficulty: 'Medium-Hard', question: 'Bereken x²−4x+2 wanneer x=−1.', checkMode: 'auto', correctAnswer: '7', answer: '7', explanation: 'Vervang x=−1: (−1)²−4(−1)+2.\n(−1)²=1 en −4(−1)=+4.\n1+4+2=7' },
        { difficulty: 'Medium-Hard', question: 'Die koste in rand om ʼn kajak te huur is C=8h+15, waar h die aantal ure is. Bepaal die koste wanneer h=1,5 ure.', checkMode: 'auto', correctAnswer: '27', answer: '27', explanation: 'Vervang h=1,5: C=8(1,5)+15.\n8(1,5)=12, dus C=12+15=27.\nDie koste is R27.' },

        // Blok 5 — Multi-stap vereenvoudiging wat verskeie vaardighede kombineer (Hard)
        { difficulty: 'Hard', question: 'Vereenvoudig 4x(x+3)−7x.', checkMode: 'auto', correctAnswer: '4x²+5x', correctAnswers: ['4x²+5x', '4x^2+5x', '5x+4x²'], answer: '4x²+5x', explanation: 'Brei eers uit: 4x(x+3)=4x²+12x.\nTrek 7x af: 4x²+12x−7x.\nKombineer gelyksoortige terme: 12x−7x=5x.\nAntwoord: 4x²+5x' },
        { difficulty: 'Hard', question: 'Vereenvoudig 6x+9+3x, en faktoriseer dan die resultaat volledig.', checkMode: 'auto', correctAnswer: '9(x+1)', correctAnswers: ['9(x+1)'], answer: '9(x+1)', explanation: 'Vereenvoudig eers: 6x+9+3x=9x+9.\nFaktoriseer: die GGF van 9 en 9 is 9.\nDeel elke term deur 9: 9x÷9=x en 9÷9=1.\nAntwoord: 9(x+1)' },
        { difficulty: 'Hard', question: 'Brei uit en vereenvoudig: 3(x+2)+2(x−4).', checkMode: 'auto', correctAnswer: '5x-2', correctAnswers: ['5x-2', '5x−2'], answer: '5x−2', explanation: 'Brei elke hakie uit: 3(x+2)=3x+6 en 2(x−4)=2x−8.\nTel op: 3x+6+2x−8.\nKombineer gelyksoortige terme: (3x+2x)+(6−8)=5x−2.\nAntwoord: 5x−2' },

        // Blok 6 — Foutopsporing / kritiek (Hard)
        { difficulty: 'Hard', question: 'ʼn Leerder brei 4x(3x−2) uit en skryf 12x−8. Vind die fout en gee die korrekte antwoord.', checkMode: 'self', answer: 'Die leerder het vergeet om die x in 3x met die x in 4x te vermenigvuldig, en het die x by die tweede term weggelaat. Die korrekte uitbreiding is (4x)(3x)=12x² en (4x)(−2)=−8x, wat 12x²−8x gee, nie 12x−8 nie.' },
        { difficulty: 'Hard', question: 'ʼn Leerder vervang x=−4 in x²+3x en kry −4. Kontroleer die werk en gee die korrekte antwoord.', checkMode: 'self', answer: 'Die leerder het ʼn fout gemaak, waarskynlik deur (−4)² as −16 in plaas van +16 te hanteer. Die korrekte berekening is (−4)²+3(−4)=16−12=4, dus die korrekte antwoord is 4, nie −4 nie.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het vereenvoudiging, uitbreiding, faktorisering en vervanging bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor die uitbrei van hakies of faktorisering weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde oor die distributiewe wet en vervanging, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Vereenvoudiging met veelvuldige veranderlikes/eksponente (Easy)
        { difficulty: 'Easy', question: 'Vereenvoudig 8x²+4x−5x²+3x.', checkMode: 'auto', correctAnswer: '3x²+7x', correctAnswers: ['3x²+7x', '3x^2+7x', '7x+3x²'], answer: '3x²+7x', explanation: 'Groepeer gelyksoortige terme: (8x²−5x²)+(4x+3x).\n8x²−5x²=3x² en 4x+3x=7x.\nAntwoord: 3x²+7x' },
        { difficulty: 'Easy', question: 'Vereenvoudig 4xy+7x−2xy+3x.', checkMode: 'auto', correctAnswer: '2xy+10x', correctAnswers: ['2xy+10x', '10x+2xy'], answer: '2xy+10x', explanation: 'Groepeer gelyksoortige terme: (4xy−2xy)+(7x+3x).\n4xy−2xy=2xy en 7x+3x=10x.\nAntwoord: 2xy+10x' },
        { difficulty: 'Easy', question: 'Vereenvoudig 5a²b+4ab−3a²b.', checkMode: 'auto', correctAnswer: '2a²b+4ab', correctAnswers: ['2a²b+4ab', '2a^2b+4ab', '4ab+2a²b'], answer: '2a²b+4ab', explanation: 'Slegs die a²b-terme is gelyksoortig: 5a²b−3a²b=2a²b.\n4ab het ʼn ander eksponent op a, dus kan dit nie gekombineer word nie.\nAntwoord: 2a²b+4ab' },

        // Blok 2 — Uitbrei van hakies, distributiewe wet (Medium)
        { difficulty: 'Medium', question: 'Brei uit: 5x(2x+3).', checkMode: 'auto', correctAnswer: '10x²+15x', correctAnswers: ['10x²+15x', '10x^2+15x'], answer: '10x²+15x', explanation: 'Vermenigvuldig 5x met elke term binne die hakies.\n(5x)(2x)=10x² en (5x)(3)=15x.\nAntwoord: 10x²+15x' },
        { difficulty: 'Medium', question: 'Brei uit: −3x(x−5).', checkMode: 'auto', correctAnswer: '-3x²+15x', correctAnswers: ['-3x²+15x', '−3x²+15x', '-3x^2+15x'], answer: '−3x²+15x', explanation: 'Vermenigvuldig −3x met elke term binne die hakies.\n(−3x)(x)=−3x² en (−3x)(−5)=+15x.\nAntwoord: −3x²+15x' },
        { difficulty: 'Medium', question: 'Brei uit en vereenvoudig: 4(2x+3)+3x.', checkMode: 'auto', correctAnswer: '11x+12', correctAnswers: ['11x+12', '12+11x'], answer: '11x+12', explanation: 'Brei die hakies uit: 4(2x+3)=8x+12.\nTel die oorblywende term by: 8x+12+3x.\nKombineer gelyksoortige terme: 8x+3x=11x.\nAntwoord: 11x+12' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige plantbed is 5 m breed en (x+7) m lank. Skryf ʼn uitdrukking vir die oppervlakte, en brei dit uit.', checkMode: 'auto', correctAnswer: '5x+35', correctAnswers: ['5x+35', '35+5x'], answer: 'Oppervlakte = 5(x+7) = 5x+35', explanation: 'Oppervlakte van ʼn reghoek = lengte × breedte = 5(x+7).\nBrei uit: (5)(x)+(5)(7)=5x+35.\nAntwoord: 5x+35' },

        // Blok 3 — Faktorisering deur gemeenskaplike faktor (Medium)
        { difficulty: 'Medium', question: 'Faktoriseer 9x+15 volledig.', checkMode: 'auto', correctAnswer: '3(3x+5)', correctAnswers: ['3(3x+5)'], answer: '3(3x+5)', explanation: 'Die GGF van 9 en 15 is 3.\nDeel elke term deur 3: 9x÷3=3x en 15÷3=5.\nAntwoord: 3(3x+5)' },
        { difficulty: 'Medium', question: 'Faktoriseer 12x²+18x volledig.', checkMode: 'auto', correctAnswer: '6x(2x+3)', correctAnswers: ['6x(2x+3)'], answer: '6x(2x+3)', explanation: 'Die GGF van die koëffisiënte 12 en 18 is 6, en albei terme deel ʼn faktor van x.\nDeel elke term deur 6x: 12x²÷6x=2x en 18x÷6x=3.\nAntwoord: 6x(2x+3)' },
        { difficulty: 'Medium', question: 'Faktoriseer 24xy−16x volledig.', checkMode: 'auto', correctAnswer: '8x(3y-2)', correctAnswers: ['8x(3y-2)', '8x(3y−2)'], answer: '8x(3y−2)', explanation: 'Die GGF van 24 en 16 is 8, en albei terme deel ʼn faktor van x.\nDeel elke term deur 8x: 24xy÷8x=3y en 16x÷8x=2.\nAntwoord: 8x(3y−2)' },
        { difficulty: 'Medium', question: 'ʼn Leerder faktoriseer 16x+24 en skryf 4(4x+6). Kontroleer of dit volledig gefaktoriseer is.', checkMode: 'self', answer: 'Nie volledig gefaktoriseer nie. Kontrole van die produk: 4(4x)=16x en 4(6)=24, so die vermenigvuldiging is korrek, maar 4x en 6 deel steeds ʼn gemeenskaplike faktor van 2. Die GGF van 16 en 24 is eintlik 8, dus die volledig gefaktoriseerde vorm is 8(2x+3).' },

        // Blok 4 — Vervanging met negatiewe/breukwaardes (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Bereken 2x²−5x wanneer x=−3.', checkMode: 'auto', correctAnswer: '33', answer: '33', explanation: 'Vervang x=−3: 2(−3)²−5(−3).\n(−3)²=9, dus 2(9)=18. Ook −5(−3)=+15.\n18+15=33' },
        { difficulty: 'Medium-Hard', question: 'Bereken 4x+3y wanneer x=0,5 en y=−4.', checkMode: 'auto', correctAnswer: '-10', correctAnswers: ['-10', '−10'], answer: '−10', explanation: 'Vervang x=0,5 en y=−4: 4(0,5)+3(−4).\n4(0,5)=2 en 3(−4)=−12.\n2−12=−10' },
        { difficulty: 'Medium-Hard', question: 'Bereken x²−5x+3 wanneer x=−1.', checkMode: 'auto', correctAnswer: '9', answer: '9', explanation: 'Vervang x=−1: (−1)²−5(−1)+3.\n(−1)²=1 en −5(−1)=+5.\n1+5+3=9' },
        { difficulty: 'Medium-Hard', question: 'Die koste in rand om ʼn fiets te huur is C=10h+20, waar h die aantal ure is. Bepaal die koste wanneer h=3,5 ure.', checkMode: 'auto', correctAnswer: '55', answer: '55', explanation: 'Vervang h=3,5: C=10(3,5)+20.\n10(3,5)=35, dus C=35+20=55.\nDie koste is R55.' },

        // Blok 5 — Multi-stap vereenvoudiging wat verskeie vaardighede kombineer (Hard)
        { difficulty: 'Hard', question: 'Vereenvoudig 5x(x+1)−4x.', checkMode: 'auto', correctAnswer: '5x²+x', correctAnswers: ['5x²+x', '5x^2+x', 'x+5x²'], answer: '5x²+x', explanation: 'Brei eers uit: 5x(x+1)=5x²+5x.\nTrek 4x af: 5x²+5x−4x.\nKombineer gelyksoortige terme: 5x−4x=x.\nAntwoord: 5x²+x' },
        { difficulty: 'Hard', question: 'Vereenvoudig 5x+10+3x, en faktoriseer dan die resultaat volledig.', checkMode: 'auto', correctAnswer: '2(4x+5)', correctAnswers: ['2(4x+5)'], answer: '2(4x+5)', explanation: 'Vereenvoudig eers: 5x+10+3x=8x+10.\nFaktoriseer: die GGF van 8 en 10 is 2.\nDeel elke term deur 2: 8x÷2=4x en 10÷2=5.\nAntwoord: 2(4x+5)' },
        { difficulty: 'Hard', question: 'Brei uit en vereenvoudig: 4(x+1)+2(x−5).', checkMode: 'auto', correctAnswer: '6x-6', correctAnswers: ['6x-6', '6x−6'], answer: '6x−6', explanation: 'Brei elke hakie uit: 4(x+1)=4x+4 en 2(x−5)=2x−10.\nTel op: 4x+4+2x−10.\nKombineer gelyksoortige terme: (4x+2x)+(4−10)=6x−6.\nAntwoord: 6x−6' },

        // Blok 6 — Foutopsporing / kritiek (Hard)
        { difficulty: 'Hard', question: 'ʼn Leerder brei 6x(2x−5) uit en skryf 12x−30. Vind die fout en gee die korrekte antwoord.', checkMode: 'self', answer: 'Die leerder het vergeet om die x in 2x met die x in 6x te vermenigvuldig, en het die x by die tweede term weggelaat. Die korrekte uitbreiding is (6x)(2x)=12x² en (6x)(−5)=−30x, wat 12x²−30x gee, nie 12x−30 nie.' },
        { difficulty: 'Hard', question: 'ʼn Leerder vervang x=−5 in x²+4x en kry −5. Kontroleer die werk en gee die korrekte antwoord.', checkMode: 'self', answer: 'Die leerder het ʼn fout gemaak, waarskynlik deur (−5)² as −25 in plaas van +25 te hanteer. Die korrekte berekening is (−5)²+4(−5)=25−20=5, dus die korrekte antwoord is 5, nie −5 nie.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het vereenvoudiging, uitbreiding, faktorisering en vervanging bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor die uitbrei van hakies of faktorisering weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde oor die distributiewe wet en vervanging, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
