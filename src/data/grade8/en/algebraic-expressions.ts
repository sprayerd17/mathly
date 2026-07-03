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
        '<DiagramPlaceholder label="Diagram labelling the parts of an algebraic term — coefficient in blue, variable, exponent in orange — with examples of monomial, binomial and trinomial in green" />',
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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Side-by-side worked examples of adding like terms in blue, distribution in orange and division in green" />',
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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Step-by-step substitution example with x value highlighted in orange and the final answer in green" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      id: 'q1',
      number: 1,
      difficulty: 'Easy',
      question: 'Classify 6x+9 as a monomial, binomial or trinomial.',
      checkMode: 'auto',
      correctAnswer: 'binomial',
      answer: 'binomial',
    },

    // ── Q2 Easy ──────────────────────────────────────────────────────────────
    {
      id: 'q2',
      number: 2,
      difficulty: 'Easy',
      question: 'Identify the coefficient in 7x².',
      checkMode: 'auto',
      correctAnswer: '7',
      answer: '7',
    },

    // ── Q3 Medium ─────────────────────────────────────────────────────────────
    {
      id: 'q3',
      number: 3,
      difficulty: 'Medium',
      question: 'Sipho says 3x and 3x² are like terms. Is he correct? Explain.',
      checkMode: 'self',
      answer: 'No — they have different exponents (powers of x), so they are unlike terms.',
    },

    // ── Q4 Easy ──────────────────────────────────────────────────────────────
    {
      id: 'q4',
      number: 4,
      difficulty: 'Easy',
      question: 'Simplify 8a+5b−3a+2b.',
      checkMode: 'auto',
      correctAnswer: '5a+7b',
      answer: '5a+7b',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      id: 'q5',
      number: 5,
      difficulty: 'Medium',
      question: 'Multiply 5x(2x−3).',
      checkMode: 'auto',
      correctAnswer: '10x²-15x',
      correctAnswers: ['10x²-15x', '10x²−15x'],
      answer: '10x²−15x',
    },

    // ── Q6 Hard ──────────────────────────────────────────────────────────────
    {
      id: 'q6',
      number: 6,
      difficulty: 'Hard',
      question: 'Lerato simplifies 3(2x+4)−5x and gets x+12. Check her answer.',
      checkMode: 'self',
      answer: 'Correct — 3(2x+4)=6x+12. Then 6x+12−5x=x+12.',
    },

    // ── Q7 Easy ──────────────────────────────────────────────────────────────
    {
      id: 'q7',
      number: 7,
      difficulty: 'Easy',
      question: 'Divide 12x²÷4x.',
      checkMode: 'auto',
      correctAnswer: '3x',
      answer: '3x',
    },

    // ── Q8 Medium ─────────────────────────────────────────────────────────────
    {
      id: 'q8',
      number: 8,
      difficulty: 'Medium',
      question: 'Find the square of 2x³.',
      checkMode: 'auto',
      correctAnswer: '4x⁶',
      answer: '4x⁶',
    },

    // ── Q9 Hard ──────────────────────────────────────────────────────────────
    {
      id: 'q9',
      number: 9,
      difficulty: 'Hard',
      question: 'Thabo says the square root of 9x⁴ is 3x². Is he correct? Explain.',
      checkMode: 'self',
      answer: 'Yes — √9x⁴=√9 × √x⁴=3x², since (3x²)²=9x⁴.',
    },

    // ── Q10 Medium ────────────────────────────────────────────────────────────
    {
      id: 'q10',
      number: 10,
      difficulty: 'Medium',
      question: 'Evaluate 3x²−2x+1 when x=3.',
      checkMode: 'auto',
      correctAnswer: '22',
      answer: '22',
    },

    // ── Q11 Hard ─────────────────────────────────────────────────────────────
    {
      id: 'q11',
      number: 11,
      difficulty: 'Hard',
      question: 'Amahle says (−2x)² and −2x² are equal. Is she correct? Explain.',
      checkMode: 'self',
      answer: 'No — (−2x)²=4x², but −2x²=−(2x²)=−2x². They are different expressions.',
    },

    // ── Q12 Medium ────────────────────────────────────────────────────────────
    {
      id: 'q12',
      number: 12,
      difficulty: 'Medium',
      question: 'Simplify 4x(x+3)−2x².',
      checkMode: 'auto',
      correctAnswer: '2x²+12x',
      answer: '2x²+12x',
    },

    // ── Q13 Hard ─────────────────────────────────────────────────────────────
    {
      id: 'q13',
      number: 13,
      difficulty: 'Hard',
      question: 'Find the cube root of 27x⁶.',
      checkMode: 'auto',
      correctAnswer: '3x²',
      answer: '3x²',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      id: 'q14',
      number: 14,
      difficulty: 'Hard',
      question: 'Sipho evaluates x²+4x−5 when x=−2 and gets −9. Check his answer.',
      checkMode: 'self',
      answer: 'Substitute x=−2: 4−8−5=−9. Correct.',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      id: 'q15',
      number: 15,
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
}
