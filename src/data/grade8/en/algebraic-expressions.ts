import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// coefficient → blue   (#2563eb)
// exponent    → orange (#ea580c)
// term type   → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebraic Expressions',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — CONVENTIONS, LIKE/UNLIKE TERMS, COEFFICIENTS AND MONOMIALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'conventions-like-unlike-terms',
      title: 'Conventions, Like/Unlike Terms, Coefficients and Monomials',
      icon: '𝑥',
      explanation:
        `<p style="margin-bottom:16px;">We learn the <strong>conventions</strong> for writing algebraic expressions (e.g. 3xy not x3y), classify <strong>like</strong> and <strong>unlike terms</strong>, identify <strong>coefficients</strong> and <strong>exponents</strong>, and recognise and differentiate between <strong>monomials</strong> (one term), <strong>binomials</strong> (two terms) and <strong>trinomials</strong> (three terms).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('coefficients')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('exponents')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('term type')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key definitions</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Coefficient</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The number multiplied by the variable. In ${bl('4')}x², the coefficient is ${bl('4')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Exponent</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The power to which a variable is raised. In 4x${or('²')}, the exponent is ${or('2')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Monomial / Binomial / Trinomial</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Monomial')}: 1 term. ${gr('Binomial')}: 2 terms. ${gr('Trinomial')}: 3 terms.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Like vs Unlike Terms</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>Like terms</strong> have the same variable and exponent. <strong>Unlike terms</strong> do not.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Writing convention</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always write the coefficient before the variable: write <strong>3xy</strong>, not x3y or y3x. Variables are written alphabetically by convention: <strong>3xy</strong>, not 3yx.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Classify 4x²+3x−7 as a monomial, binomial or trinomial.',
          answer: `It is a ${gr('trinomial')}`,
          steps: [
            `Count the terms: ${bl('4')}x${or('²')}, ${bl('3')}x, and −7. There are <strong>3 terms</strong>.`,
            `An expression with 3 terms is a ${gr('trinomial')}.`,
          ],
        },
        {
          question: 'Identify the coefficient and exponent in −5x³.',
          answer: `Coefficient: ${bl('−5')}. Exponent: ${or('3')}.`,
          steps: [
            `The ${bl('coefficient')} is the number multiplied by the variable: ${bl('−5')}.`,
            `The ${or('exponent')} is the power of x: ${or('3')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining conventions for writing algebraic expressions, like and unlike terms, coefficients, exponents, monomials, binomials and trinomials" />',

      diagramPlaceholder:
        'Labelled diagram of the term 4x² showing the coefficient, variable and exponent, with small examples of a monomial, binomial and trinomial',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 175" width="100%" style="max-width:380px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="130" y="55" text-anchor="middle" font-size="40" font-weight="700" fill="#0f1f3d">4x<tspan font-size="24" dy="-16" fill="#ea580c">2</tspan></text>` +
        `<line x1="100" y1="70" x2="100" y2="90" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="100" y="102" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">coefficient</text>` +
        `<line x1="130" y1="70" x2="130" y2="90" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="130" y="102" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">variable</text>` +
        `<line x1="160" y1="40" x2="185" y2="90" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="185" y="102" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">exponent</text>` +
        `<rect x="10" y="120" width="72" height="42" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="46" y="138" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">5x</text>` +
        `<text x="46" y="153" text-anchor="middle" font-size="9" fill="#15803d">monomial</text>` +
        `<rect x="94" y="120" width="72" height="42" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="130" y="138" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">3x+2</text>` +
        `<text x="130" y="153" text-anchor="middle" font-size="9" fill="#15803d">binomial</text>` +
        `<rect x="178" y="120" width="72" height="42" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="214" y="138" text-anchor="middle" font-size="10" font-weight="700" fill="#16a34a">x²+3x−7</text>` +
        `<text x="214" y="153" text-anchor="middle" font-size="9" fill="#15803d">trinomial</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — ADDING, SUBTRACTING, MULTIPLYING AND DIVIDING EXPRESSIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'operations-on-expressions',
      title: 'Adding, Subtracting, Multiplying and Dividing Expressions',
      icon: '±',
      explanation:
        `<p style="margin-bottom:16px;">We <strong>add and subtract like terms</strong>, <strong>multiply</strong> integers and monomials by monomials, binomials and trinomials using the <strong>distributive law</strong>, and <strong>divide</strong> monomials, binomials and trinomials by integers or monomials.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('like terms grouped')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('distribution')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('division')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key rules</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<p style="margin:0;font-size:14px;">${bl('Adding/subtracting:')} Only combine ${bl('like terms')} — same variable, same exponent.</p>` +
        `</div>` +

        `<div style="padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<p style="margin:0;font-size:14px;">${or('Multiplying:')} Use the ${or('distributive law')} — multiply the factor outside the brackets by every term inside.</p>` +
        `</div>` +

        `<div style="padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<p style="margin:0;font-size:14px;">${gr('Dividing:')} ${gr('Divide coefficients')} separately and ${gr('divide variables')} by subtracting exponents.</p>` +
        `</div>` +

        `</div>`,

      workedExamples: [
        {
          question: 'Simplify 5x+3y−2x+7y.',
          answer: `3x+10y`,
          steps: [
            `Group ${bl('like terms')}: (${bl('5x−2x')})+(${bl('3y+7y')}).`,
            `Simplify: ${bl('5x−2x')} = 3x and ${bl('3y+7y')} = 10y.`,
            `<strong>Answer:</strong> 3x+10y`,
          ],
        },
        {
          question: 'Multiply 4x(3x+5).',
          answer: `12x²+20x`,
          steps: [
            `Use the ${or('distributive law')}: multiply 4x by each term inside the brackets.`,
            `${or('(4x)(3x)')} + ${or('(4x)(5)')} = 12x²+20x.`,
            `<strong>Answer:</strong> 12x²+20x`,
          ],
        },
        {
          question: 'Divide 15x³÷3x.',
          answer: `5x²`,
          steps: [
            `${gr('Divide the coefficients')}: 15÷3 = 5.`,
            `${gr('Divide the variables')}: x³÷x = x³⁻¹ = x².`,
            `<strong>Answer:</strong> 5x²`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to add and subtract like terms, apply the distributive law when multiplying, and divide monomials by dividing coefficients and subtracting exponents" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SQUARES, CUBES, ROOTS AND SUBSTITUTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'squares-cubes-roots-substitution',
      title: 'Squares, Cubes, Roots of Algebraic Terms and Substitution',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">We determine the <strong>squares</strong>, <strong>cubes</strong>, <strong>square roots</strong> and <strong>cube roots</strong> of single algebraic terms or like algebraic terms, and determine the numerical value of algebraic expressions by <strong>substitution</strong>.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('algebraic terms')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('substitution')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key rules for powers and roots</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Squaring a term</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Square the coefficient and double the exponent: (${bl('ax')}ⁿ)² = a²x²ⁿ.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Cubing a term</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Cube the coefficient and triple the exponent: (${bl('ax')}ⁿ)³ = a³x³ⁿ.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Square/cube root</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Take the root of the coefficient and halve/third the exponent.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Substitution</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('Replace')} each variable with its given value, then calculate using BODMAS.</p>` +
        `</div>` +

        `</div>`,

      workedExamples: [
        {
          question: 'Find the square of 3x².',
          answer: `${gr('9x⁴')}`,
          steps: [
            `Apply (${bl('3x²')})²: square the coefficient and double the exponent.`,
            `3² = 9 and (x²)² = x⁴.`,
            `<strong>Answer:</strong> ${gr('9x⁴')}`,
          ],
        },
        {
          question: 'Evaluate 2x²+5x−3 when x=4.',
          answer: `${gr('49')}`,
          steps: [
            `${or('Substitute')} x = 4: 2(${or('4')})²+5(${or('4')})−3.`,
            `Calculate: 2(16)+20−3 = 32+20−3.`,
            `<strong>Answer:</strong> ${gr('49')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to square and cube algebraic terms, find square and cube roots of algebraic terms, and evaluate expressions by substitution" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Classify 6x+9 as a monomial, binomial or trinomial.',
      checkMode: 'auto',
      correctAnswer: 'binomial',
      answer: 'binomial',
    },

    // ── Q2 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Identify the coefficient in 7x².',
      checkMode: 'auto',
      correctAnswer: '7',
      answer: '7',
    },

    // ── Q3 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho says 3x and 3x² are like terms. Is he correct? Explain.',
      checkMode: 'self',
      answer: 'No — they have different exponents (powers of x), so they are unlike terms.',
    },

    // ── Q4 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Simplify 8a+5b−3a+2b.',
      checkMode: 'auto',
      correctAnswer: '5a+7b',
      answer: '5a+7b',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Multiply 5x(2x−3).',
      checkMode: 'auto',
      correctAnswer: '10x²-15x',
      correctAnswers: ['10x²-15x', '10x²−15x'],
      answer: '10x²−15x',
    },

    // ── Q6 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato simplifies 3(2x+4)−5x and gets x+12. Check her answer.',
      checkMode: 'self',
      answer: 'Correct — 3(2x+4)=6x+12. Then 6x+12−5x=x+12.',
    },

    // ── Q7 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Divide 12x²÷4x.',
      checkMode: 'auto',
      correctAnswer: '3x',
      answer: '3x',
    },

    // ── Q8 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the square of 2x³.',
      checkMode: 'auto',
      correctAnswer: '4x⁶',
      answer: '4x⁶',
    },

    // ── Q9 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says the square root of 9x⁴ is 3x². Is he correct? Explain.',
      checkMode: 'self',
      answer: 'Yes — √9x⁴=√9 × √x⁴=3x², since (3x²)²=9x⁴.',
    },

    // ── Q10 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Evaluate 3x²−2x+1 when x=3.',
      checkMode: 'auto',
      correctAnswer: '22',
      answer: '22',
    },

    // ── Q11 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says (−2x)² and −2x² are equal. Is she correct? Explain.',
      checkMode: 'self',
      answer: 'No — (−2x)²=4x², but −2x²=−(2x²)=−2x². They are different expressions.',
    },

    // ── Q12 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Simplify 4x(x+3)−2x².',
      checkMode: 'auto',
      correctAnswer: '2x²+12x',
      answer: '2x²+12x',
    },

    // ── Q13 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the cube root of 27x⁶.',
      checkMode: 'auto',
      correctAnswer: '3x²',
      answer: '3x²',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho evaluates x²+4x−5 when x=−2 and gets −9. Check his answer.',
      checkMode: 'self',
      answer: 'Substitute x=−2: 4−8−5=−9. Correct.',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says dividing −18x³ by −6x gives 3x². Is she correct? Explain.',
      checkMode: 'self',
      answer: 'Yes — dividing two negatives gives a positive, and −18÷−6=3, x³÷x=x², so the answer is 3x².',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered algebraic expressions.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered algebraic expressions.' },
    { minScore: 11, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-2): Simplifying with multiple variables/exponents
    // Block 2 (3-6): Expanding brackets (distributive law)
    // Block 3 (7-10): Factorising using a common factor
    // Block 4 (11-14): Substitution with negative/fractional values
    // Block 5 (15-17): Multi-step simplification combining several skills
    // Block 6 (18-19): Error-spotting / critique
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Simplifying with multiple variables/exponents (Easy)
        { difficulty: 'Easy', question: 'Simplify 5x²+3x−2x²+4x.', checkMode: 'auto', correctAnswer: '3x²+7x', correctAnswers: ['3x²+7x', '3x^2+7x', '7x+3x²'], answer: '3x²+7x', explanation: 'Group like terms: (5x²−2x²)+(3x+4x).\n5x²−2x²=3x² and 3x+4x=7x.\nAnswer: 3x²+7x' },
        { difficulty: 'Easy', question: 'Simplify 6xy+4x−2xy+x.', checkMode: 'auto', correctAnswer: '4xy+5x', correctAnswers: ['4xy+5x', '5x+4xy'], answer: '4xy+5x', explanation: 'Group like terms: (6xy−2xy)+(4x+x).\n6xy−2xy=4xy and 4x+x=5x.\nAnswer: 4xy+5x' },
        { difficulty: 'Easy', question: 'Simplify 4a²b+3ab−2a²b.', checkMode: 'auto', correctAnswer: '2a²b+3ab', correctAnswers: ['2a²b+3ab', '2a^2b+3ab', '3ab+2a²b'], answer: '2a²b+3ab', explanation: 'Only the a²b terms are like terms: 4a²b−2a²b=2a²b.\n3ab has a different exponent on a, so it cannot be combined.\nAnswer: 2a²b+3ab' },

        // Block 2 — Expanding brackets, distributive law (Medium)
        { difficulty: 'Medium', question: 'Expand 3x(2x+5).', checkMode: 'auto', correctAnswer: '6x²+15x', correctAnswers: ['6x²+15x', '6x^2+15x'], answer: '6x²+15x', explanation: 'Multiply 3x by each term inside the brackets.\n(3x)(2x)=6x² and (3x)(5)=15x.\nAnswer: 6x²+15x' },
        { difficulty: 'Medium', question: 'Expand −4x(x−3).', checkMode: 'auto', correctAnswer: '-4x²+12x', correctAnswers: ['-4x²+12x', '−4x²+12x', '-4x^2+12x'], answer: '−4x²+12x', explanation: 'Multiply −4x by each term inside the brackets.\n(−4x)(x)=−4x² and (−4x)(−3)=+12x.\nAnswer: −4x²+12x' },
        { difficulty: 'Medium', question: 'Expand and simplify 2(3x+4)+5x.', checkMode: 'auto', correctAnswer: '11x+8', correctAnswers: ['11x+8', '8+11x'], answer: '11x+8', explanation: 'Expand the brackets: 2(3x+4)=6x+8.\nAdd the remaining term: 6x+8+5x.\nCombine like terms: 6x+5x=11x.\nAnswer: 11x+8' },
        { difficulty: 'Medium', question: 'A rectangular table has length (x+6) cm and width 3 cm. Write an expression for its area, and expand it.', checkMode: 'auto', correctAnswer: '3x+18', correctAnswers: ['3x+18', '18+3x'], answer: 'Area = 3(x+6) = 3x+18', explanation: 'Area of a rectangle = length × width = 3(x+6).\nExpand: (3)(x)+(3)(6)=3x+18.\nAnswer: 3x+18' },

        // Block 3 — Factorising using a common factor (Medium)
        { difficulty: 'Medium', question: 'Factorise 6x+9 fully.', checkMode: 'auto', correctAnswer: '3(2x+3)', correctAnswers: ['3(2x+3)'], answer: '3(2x+3)', explanation: 'The HCF of 6 and 9 is 3.\nDivide each term by 3: 6x÷3=2x and 9÷3=3.\nAnswer: 3(2x+3)' },
        { difficulty: 'Medium', question: 'Factorise 8x²+12x fully.', checkMode: 'auto', correctAnswer: '4x(2x+3)', correctAnswers: ['4x(2x+3)'], answer: '4x(2x+3)', explanation: 'The HCF of the coefficients 8 and 12 is 4, and both terms share a factor of x.\nDivide each term by 4x: 8x²÷4x=2x and 12x÷4x=3.\nAnswer: 4x(2x+3)' },
        { difficulty: 'Medium', question: 'Factorise 15xy−10x fully.', checkMode: 'auto', correctAnswer: '5x(3y-2)', correctAnswers: ['5x(3y-2)', '5x(3y−2)'], answer: '5x(3y−2)', explanation: 'The HCF of 15 and 10 is 5, and both terms share a factor of x.\nDivide each term by 5x: 15xy÷5x=3y and 10x÷5x=2.\nAnswer: 5x(3y−2)' },
        { difficulty: 'Medium', question: 'A student factorises 12x+18 and writes 6(2x+3). Check whether this is fully factorised and correct.', checkMode: 'self', answer: 'Correct and fully factorised. Checking: 6(2x)=12x and 6(3)=18, so the product is right. The HCF of 12 and 18 is 6, and 2x and 3 share no further common factor, so 6(2x+3) is the fully factorised form.' },

        // Block 4 — Substitution with negative/fractional values (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Evaluate 3x²−2x when x=−2.', checkMode: 'auto', correctAnswer: '16', answer: '16', explanation: 'Substitute x=−2: 3(−2)²−2(−2).\n(−2)²=4, so 3(4)=12. Also −2(−2)=+4.\n12+4=16' },
        { difficulty: 'Medium-Hard', question: 'Evaluate 2x+5y when x=0.5 and y=−3.', checkMode: 'auto', correctAnswer: '-14', correctAnswers: ['-14', '−14'], answer: '−14', explanation: 'Substitute x=0.5 and y=−3: 2(0.5)+5(−3).\n2(0.5)=1 and 5(−3)=−15.\n1−15=−14' },
        { difficulty: 'Medium-Hard', question: 'Evaluate x²−3x+4 when x=−1.', checkMode: 'auto', correctAnswer: '8', answer: '8', explanation: 'Substitute x=−1: (−1)²−3(−1)+4.\n(−1)²=1 and −3(−1)=+3.\n1+3+4=8' },
        { difficulty: 'Medium-Hard', question: 'The cost in rand to rent a paddleboard is C=6h+12, where h is the number of hours. Find the cost when h=2.5 hours.', checkMode: 'auto', correctAnswer: '27', answer: '27', explanation: 'Substitute h=2.5: C=6(2.5)+12.\n6(2.5)=15, so C=15+12=27.\nThe cost is R27.' },

        // Block 5 — Multi-step simplification combining several skills (Hard)
        { difficulty: 'Hard', question: 'Simplify 3x(x+2)−5x.', checkMode: 'auto', correctAnswer: '3x²+x', correctAnswers: ['3x²+x', '3x^2+x', 'x+3x²'], answer: '3x²+x', explanation: 'Expand first: 3x(x+2)=3x²+6x.\nSubtract 5x: 3x²+6x−5x.\nCombine like terms: 6x−5x=x.\nAnswer: 3x²+x' },
        { difficulty: 'Hard', question: 'Simplify 4x+8+2x, then factorise the result fully.', checkMode: 'auto', correctAnswer: '2(3x+4)', correctAnswers: ['2(3x+4)'], answer: '2(3x+4)', explanation: 'Simplify first: 4x+8+2x=6x+8.\nFactorise: the HCF of 6 and 8 is 2.\nDivide each term by 2: 6x÷2=3x and 8÷2=4.\nAnswer: 2(3x+4)' },
        { difficulty: 'Hard', question: 'Expand and simplify 2(x+3)+3(x−1).', checkMode: 'auto', correctAnswer: '5x+3', correctAnswers: ['5x+3', '3+5x'], answer: '5x+3', explanation: 'Expand each bracket: 2(x+3)=2x+6 and 3(x−1)=3x−3.\nAdd: 2x+6+3x−3.\nCombine like terms: (2x+3x)+(6−3)=5x+3.\nAnswer: 5x+3' },

        // Block 6 — Error-spotting / critique (Hard)
        { difficulty: 'Hard', question: 'A student expands 5x(2x−3) and writes 10x−15. Find the error and give the correct answer.', checkMode: 'self', answer: 'The student forgot to multiply the x in 2x by the x in 5x, and dropped the x from the second term. The correct expansion is (5x)(2x)=10x² and (5x)(−3)=−15x, giving 10x²−15x, not 10x−15.' },
        { difficulty: 'Hard', question: 'A student substitutes x=−3 into x²+2x and gets −3. Check the working and give the correct answer.', checkMode: 'self', answer: 'The student made an error, likely by treating (−3)² as −9 instead of +9. The correct working is (−3)²+2(−3)=9−6=3, so the correct answer is 3, not −3.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered simplifying, expanding, factorising and substitution.' },
        { minScore: 15, message: 'Great work! Review any missed questions on expanding brackets or factorising and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on the distributive law and substitution, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Simplifying with multiple variables/exponents (Easy)
        { difficulty: 'Easy', question: 'Simplify 7x²+2x−3x²+5x.', checkMode: 'auto', correctAnswer: '4x²+7x', correctAnswers: ['4x²+7x', '4x^2+7x', '7x+4x²'], answer: '4x²+7x', explanation: 'Group like terms: (7x²−3x²)+(2x+5x).\n7x²−3x²=4x² and 2x+5x=7x.\nAnswer: 4x²+7x' },
        { difficulty: 'Easy', question: 'Simplify 5xy+6x−3xy+2x.', checkMode: 'auto', correctAnswer: '2xy+8x', correctAnswers: ['2xy+8x', '8x+2xy'], answer: '2xy+8x', explanation: 'Group like terms: (5xy−3xy)+(6x+2x).\n5xy−3xy=2xy and 6x+2x=8x.\nAnswer: 2xy+8x' },
        { difficulty: 'Easy', question: 'Simplify 6a²b+2ab−3a²b.', checkMode: 'auto', correctAnswer: '3a²b+2ab', correctAnswers: ['3a²b+2ab', '3a^2b+2ab', '2ab+3a²b'], answer: '3a²b+2ab', explanation: 'Only the a²b terms are like terms: 6a²b−3a²b=3a²b.\n2ab has a different exponent on a, so it cannot be combined.\nAnswer: 3a²b+2ab' },

        // Block 2 — Expanding brackets, distributive law (Medium)
        { difficulty: 'Medium', question: 'Expand 4x(3x+2).', checkMode: 'auto', correctAnswer: '12x²+8x', correctAnswers: ['12x²+8x', '12x^2+8x'], answer: '12x²+8x', explanation: 'Multiply 4x by each term inside the brackets.\n(4x)(3x)=12x² and (4x)(2)=8x.\nAnswer: 12x²+8x' },
        { difficulty: 'Medium', question: 'Expand −5x(x−2).', checkMode: 'auto', correctAnswer: '-5x²+10x', correctAnswers: ['-5x²+10x', '−5x²+10x', '-5x^2+10x'], answer: '−5x²+10x', explanation: 'Multiply −5x by each term inside the brackets.\n(−5x)(x)=−5x² and (−5x)(−2)=+10x.\nAnswer: −5x²+10x' },
        { difficulty: 'Medium', question: 'Expand and simplify 3(2x+5)+4x.', checkMode: 'auto', correctAnswer: '10x+15', correctAnswers: ['10x+15', '15+10x'], answer: '10x+15', explanation: 'Expand the brackets: 3(2x+5)=6x+15.\nAdd the remaining term: 6x+15+4x.\nCombine like terms: 6x+4x=10x.\nAnswer: 10x+15' },
        { difficulty: 'Medium', question: 'A classroom poster has length 4 cm and width (x+8) cm. Write an expression for its area, and expand it.', checkMode: 'auto', correctAnswer: '4x+32', correctAnswers: ['4x+32', '32+4x'], answer: 'Area = 4(x+8) = 4x+32', explanation: 'Area of a rectangle = length × width = 4(x+8).\nExpand: (4)(x)+(4)(8)=4x+32.\nAnswer: 4x+32' },

        // Block 3 — Factorising using a common factor (Medium)
        { difficulty: 'Medium', question: 'Factorise 8x+12 fully.', checkMode: 'auto', correctAnswer: '4(2x+3)', correctAnswers: ['4(2x+3)'], answer: '4(2x+3)', explanation: 'The HCF of 8 and 12 is 4.\nDivide each term by 4: 8x÷4=2x and 12÷4=3.\nAnswer: 4(2x+3)' },
        { difficulty: 'Medium', question: 'Factorise 10x²+15x fully.', checkMode: 'auto', correctAnswer: '5x(2x+3)', correctAnswers: ['5x(2x+3)'], answer: '5x(2x+3)', explanation: 'The HCF of the coefficients 10 and 15 is 5, and both terms share a factor of x.\nDivide each term by 5x: 10x²÷5x=2x and 15x÷5x=3.\nAnswer: 5x(2x+3)' },
        { difficulty: 'Medium', question: 'Factorise 21xy−14x fully.', checkMode: 'auto', correctAnswer: '7x(3y-2)', correctAnswers: ['7x(3y-2)', '7x(3y−2)'], answer: '7x(3y−2)', explanation: 'The HCF of 21 and 14 is 7, and both terms share a factor of x.\nDivide each term by 7x: 21xy÷7x=3y and 14x÷7x=2.\nAnswer: 7x(3y−2)' },
        { difficulty: 'Medium', question: 'A student factorises 20x+30 and writes 5(4x+6). Check whether this is fully factorised.', checkMode: 'self', answer: 'Not fully factorised. Checking the product: 5(4x)=20x and 5(6)=30, so the multiplication is correct, but 4x and 6 still share a common factor of 2. The HCF of 20 and 30 is actually 10, so the fully factorised form is 10(2x+3).' },

        // Block 4 — Substitution with negative/fractional values (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Evaluate 4x²−3x when x=−2.', checkMode: 'auto', correctAnswer: '22', answer: '22', explanation: 'Substitute x=−2: 4(−2)²−3(−2).\n(−2)²=4, so 4(4)=16. Also −3(−2)=+6.\n16+6=22' },
        { difficulty: 'Medium-Hard', question: 'Evaluate 3x+4y when x=0.5 and y=−2.', checkMode: 'auto', correctAnswer: '-6.5', correctAnswers: ['-6.5', '−6.5'], answer: '−6.5', explanation: 'Substitute x=0.5 and y=−2: 3(0.5)+4(−2).\n3(0.5)=1.5 and 4(−2)=−8.\n1.5−8=−6.5' },
        { difficulty: 'Medium-Hard', question: 'Evaluate x²−4x+2 when x=−1.', checkMode: 'auto', correctAnswer: '7', answer: '7', explanation: 'Substitute x=−1: (−1)²−4(−1)+2.\n(−1)²=1 and −4(−1)=+4.\n1+4+2=7' },
        { difficulty: 'Medium-Hard', question: 'The cost in rand to rent a kayak is C=8h+15, where h is the number of hours. Find the cost when h=1.5 hours.', checkMode: 'auto', correctAnswer: '27', answer: '27', explanation: 'Substitute h=1.5: C=8(1.5)+15.\n8(1.5)=12, so C=12+15=27.\nThe cost is R27.' },

        // Block 5 — Multi-step simplification combining several skills (Hard)
        { difficulty: 'Hard', question: 'Simplify 4x(x+3)−7x.', checkMode: 'auto', correctAnswer: '4x²+5x', correctAnswers: ['4x²+5x', '4x^2+5x', '5x+4x²'], answer: '4x²+5x', explanation: 'Expand first: 4x(x+3)=4x²+12x.\nSubtract 7x: 4x²+12x−7x.\nCombine like terms: 12x−7x=5x.\nAnswer: 4x²+5x' },
        { difficulty: 'Hard', question: 'Simplify 6x+9+3x, then factorise the result fully.', checkMode: 'auto', correctAnswer: '9(x+1)', correctAnswers: ['9(x+1)'], answer: '9(x+1)', explanation: 'Simplify first: 6x+9+3x=9x+9.\nFactorise: the HCF of 9 and 9 is 9.\nDivide each term by 9: 9x÷9=x and 9÷9=1.\nAnswer: 9(x+1)' },
        { difficulty: 'Hard', question: 'Expand and simplify 3(x+2)+2(x−4).', checkMode: 'auto', correctAnswer: '5x-2', correctAnswers: ['5x-2', '5x−2'], answer: '5x−2', explanation: 'Expand each bracket: 3(x+2)=3x+6 and 2(x−4)=2x−8.\nAdd: 3x+6+2x−8.\nCombine like terms: (3x+2x)+(6−8)=5x−2.\nAnswer: 5x−2' },

        // Block 6 — Error-spotting / critique (Hard)
        { difficulty: 'Hard', question: 'A student expands 4x(3x−2) and writes 12x−8. Find the error and give the correct answer.', checkMode: 'self', answer: 'The student forgot to multiply the x in 3x by the x in 4x, and dropped the x from the second term. The correct expansion is (4x)(3x)=12x² and (4x)(−2)=−8x, giving 12x²−8x, not 12x−8.' },
        { difficulty: 'Hard', question: 'A student substitutes x=−4 into x²+3x and gets −4. Check the working and give the correct answer.', checkMode: 'self', answer: 'The student made an error, likely by treating (−4)² as −16 instead of +16. The correct working is (−4)²+3(−4)=16−12=4, so the correct answer is 4, not −4.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered simplifying, expanding, factorising and substitution.' },
        { minScore: 15, message: 'Great work! Review any missed questions on expanding brackets or factorising and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on the distributive law and substitution, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Simplifying with multiple variables/exponents (Easy)
        { difficulty: 'Easy', question: 'Simplify 8x²+4x−5x²+3x.', checkMode: 'auto', correctAnswer: '3x²+7x', correctAnswers: ['3x²+7x', '3x^2+7x', '7x+3x²'], answer: '3x²+7x', explanation: 'Group like terms: (8x²−5x²)+(4x+3x).\n8x²−5x²=3x² and 4x+3x=7x.\nAnswer: 3x²+7x' },
        { difficulty: 'Easy', question: 'Simplify 4xy+7x−2xy+3x.', checkMode: 'auto', correctAnswer: '2xy+10x', correctAnswers: ['2xy+10x', '10x+2xy'], answer: '2xy+10x', explanation: 'Group like terms: (4xy−2xy)+(7x+3x).\n4xy−2xy=2xy and 7x+3x=10x.\nAnswer: 2xy+10x' },
        { difficulty: 'Easy', question: 'Simplify 5a²b+4ab−3a²b.', checkMode: 'auto', correctAnswer: '2a²b+4ab', correctAnswers: ['2a²b+4ab', '2a^2b+4ab', '4ab+2a²b'], answer: '2a²b+4ab', explanation: 'Only the a²b terms are like terms: 5a²b−3a²b=2a²b.\n4ab has a different exponent on a, so it cannot be combined.\nAnswer: 2a²b+4ab' },

        // Block 2 — Expanding brackets, distributive law (Medium)
        { difficulty: 'Medium', question: 'Expand 5x(2x+3).', checkMode: 'auto', correctAnswer: '10x²+15x', correctAnswers: ['10x²+15x', '10x^2+15x'], answer: '10x²+15x', explanation: 'Multiply 5x by each term inside the brackets.\n(5x)(2x)=10x² and (5x)(3)=15x.\nAnswer: 10x²+15x' },
        { difficulty: 'Medium', question: 'Expand −3x(x−5).', checkMode: 'auto', correctAnswer: '-3x²+15x', correctAnswers: ['-3x²+15x', '−3x²+15x', '-3x^2+15x'], answer: '−3x²+15x', explanation: 'Multiply −3x by each term inside the brackets.\n(−3x)(x)=−3x² and (−3x)(−5)=+15x.\nAnswer: −3x²+15x' },
        { difficulty: 'Medium', question: 'Expand and simplify 4(2x+3)+3x.', checkMode: 'auto', correctAnswer: '11x+12', correctAnswers: ['11x+12', '12+11x'], answer: '11x+12', explanation: 'Expand the brackets: 4(2x+3)=8x+12.\nAdd the remaining term: 8x+12+3x.\nCombine like terms: 8x+3x=11x.\nAnswer: 11x+12' },
        { difficulty: 'Medium', question: 'A rectangular garden bed is 5 m wide and (x+7) m long. Write an expression for its area, and expand it.', checkMode: 'auto', correctAnswer: '5x+35', correctAnswers: ['5x+35', '35+5x'], answer: 'Area = 5(x+7) = 5x+35', explanation: 'Area of a rectangle = length × width = 5(x+7).\nExpand: (5)(x)+(5)(7)=5x+35.\nAnswer: 5x+35' },

        // Block 3 — Factorising using a common factor (Medium)
        { difficulty: 'Medium', question: 'Factorise 9x+15 fully.', checkMode: 'auto', correctAnswer: '3(3x+5)', correctAnswers: ['3(3x+5)'], answer: '3(3x+5)', explanation: 'The HCF of 9 and 15 is 3.\nDivide each term by 3: 9x÷3=3x and 15÷3=5.\nAnswer: 3(3x+5)' },
        { difficulty: 'Medium', question: 'Factorise 12x²+18x fully.', checkMode: 'auto', correctAnswer: '6x(2x+3)', correctAnswers: ['6x(2x+3)'], answer: '6x(2x+3)', explanation: 'The HCF of the coefficients 12 and 18 is 6, and both terms share a factor of x.\nDivide each term by 6x: 12x²÷6x=2x and 18x÷6x=3.\nAnswer: 6x(2x+3)' },
        { difficulty: 'Medium', question: 'Factorise 24xy−16x fully.', checkMode: 'auto', correctAnswer: '8x(3y-2)', correctAnswers: ['8x(3y-2)', '8x(3y−2)'], answer: '8x(3y−2)', explanation: 'The HCF of 24 and 16 is 8, and both terms share a factor of x.\nDivide each term by 8x: 24xy÷8x=3y and 16x÷8x=2.\nAnswer: 8x(3y−2)' },
        { difficulty: 'Medium', question: 'A student factorises 16x+24 and writes 4(4x+6). Check whether this is fully factorised.', checkMode: 'self', answer: 'Not fully factorised. Checking the product: 4(4x)=16x and 4(6)=24, so the multiplication is correct, but 4x and 6 still share a common factor of 2. The HCF of 16 and 24 is actually 8, so the fully factorised form is 8(2x+3).' },

        // Block 4 — Substitution with negative/fractional values (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Evaluate 2x²−5x when x=−3.', checkMode: 'auto', correctAnswer: '33', answer: '33', explanation: 'Substitute x=−3: 2(−3)²−5(−3).\n(−3)²=9, so 2(9)=18. Also −5(−3)=+15.\n18+15=33' },
        { difficulty: 'Medium-Hard', question: 'Evaluate 4x+3y when x=0.5 and y=−4.', checkMode: 'auto', correctAnswer: '-10', correctAnswers: ['-10', '−10'], answer: '−10', explanation: 'Substitute x=0.5 and y=−4: 4(0.5)+3(−4).\n4(0.5)=2 and 3(−4)=−12.\n2−12=−10' },
        { difficulty: 'Medium-Hard', question: 'Evaluate x²−5x+3 when x=−1.', checkMode: 'auto', correctAnswer: '9', answer: '9', explanation: 'Substitute x=−1: (−1)²−5(−1)+3.\n(−1)²=1 and −5(−1)=+5.\n1+5+3=9' },
        { difficulty: 'Medium-Hard', question: 'The cost in rand to rent a bicycle is C=10h+20, where h is the number of hours. Find the cost when h=3.5 hours.', checkMode: 'auto', correctAnswer: '55', answer: '55', explanation: 'Substitute h=3.5: C=10(3.5)+20.\n10(3.5)=35, so C=35+20=55.\nThe cost is R55.' },

        // Block 5 — Multi-step simplification combining several skills (Hard)
        { difficulty: 'Hard', question: 'Simplify 5x(x+1)−4x.', checkMode: 'auto', correctAnswer: '5x²+x', correctAnswers: ['5x²+x', '5x^2+x', 'x+5x²'], answer: '5x²+x', explanation: 'Expand first: 5x(x+1)=5x²+5x.\nSubtract 4x: 5x²+5x−4x.\nCombine like terms: 5x−4x=x.\nAnswer: 5x²+x' },
        { difficulty: 'Hard', question: 'Simplify 5x+10+3x, then factorise the result fully.', checkMode: 'auto', correctAnswer: '2(4x+5)', correctAnswers: ['2(4x+5)'], answer: '2(4x+5)', explanation: 'Simplify first: 5x+10+3x=8x+10.\nFactorise: the HCF of 8 and 10 is 2.\nDivide each term by 2: 8x÷2=4x and 10÷2=5.\nAnswer: 2(4x+5)' },
        { difficulty: 'Hard', question: 'Expand and simplify 4(x+1)+2(x−5).', checkMode: 'auto', correctAnswer: '6x-6', correctAnswers: ['6x-6', '6x−6'], answer: '6x−6', explanation: 'Expand each bracket: 4(x+1)=4x+4 and 2(x−5)=2x−10.\nAdd: 4x+4+2x−10.\nCombine like terms: (4x+2x)+(4−10)=6x−6.\nAnswer: 6x−6' },

        // Block 6 — Error-spotting / critique (Hard)
        { difficulty: 'Hard', question: 'A student expands 6x(2x−5) and writes 12x−30. Find the error and give the correct answer.', checkMode: 'self', answer: 'The student forgot to multiply the x in 2x by the x in 6x, and dropped the x from the second term. The correct expansion is (6x)(2x)=12x² and (6x)(−5)=−30x, giving 12x²−30x, not 12x−30.' },
        { difficulty: 'Hard', question: 'A student substitutes x=−5 into x²+4x and gets −5. Check the working and give the correct answer.', checkMode: 'self', answer: 'The student made an error, likely by treating (−5)² as −25 instead of +25. The correct working is (−5)²+4(−5)=25−20=5, so the correct answer is 5, not −5.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered simplifying, expanding, factorising and substitution.' },
        { minScore: 15, message: 'Great work! Review any missed questions on expanding brackets or factorising and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on the distributive law and substitution, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
