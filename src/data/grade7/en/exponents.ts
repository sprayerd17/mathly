import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (exponent roles) ──────────────────────────────────────────
// base number          → blue   (#2563eb)
// exponent             → orange (#ea580c)
// square/cube root     → green  (#16a34a)
// repeated mult/result → green  (#16a34a)  [sections 1–2]
// final answer         → red    (#dc2626)  [section 3]
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Exponents',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SQUARE NUMBERS AND SQUARE ROOTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'square-numbers-roots',
      title: 'Square Numbers and Square Roots',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>square number</strong> is the result of multiplying a number by itself. The notation is a small ${or('2')} written after the number — for example ${bl('7')}${or('²')} means ${bl('7')} × ${bl('7')} = 49. A <strong>perfect square</strong> is a number that has a whole number ${gr('square root')}. The ${gr('square root')} symbol is ${gr('√')}. To find the ${gr('square root')} we ask what number multiplied by itself gives the original number.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('base number')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('exponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('square root')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Square number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The result of multiplying a number by itself — for example, ${bl('5')}${or('²')} = 25.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Exponent</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The small raised number that tells us how many times to multiply. In ${bl('5')}${or('²')}, the exponent is ${or('2')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Square root (√)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The number that was multiplied by itself to give the square number — ${gr('√')}25 = ${bl('5')} because ${bl('5')} × ${bl('5')} = 25.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Perfect square</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A number whose ${gr('square root')} is a whole number — 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, …</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why perfect squares matter</p>` +
        `<p style="margin:0;color:#1e3a8a;">Knowing the first <strong>15 perfect squares</strong> (${bl('1')}${or('²')} to ${bl('15')}${or('²')}) by heart will help you quickly evaluate and simplify expressions involving ${or('exponents')} and ${gr('square roots')} throughout your mathematics career.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate 12² and find √144.',
          answer: `${bl('12')}${or('²')} = 144 and ${gr('√')}144 = ${bl('12')}`,
          steps: [
            `${bl('12')}${or('²')} = ${bl('12')} × ${bl('12')} = 144`,
            `${gr('√')}144 = ${bl('12')} because ${bl('12')} × ${bl('12')} = 144`,
          ],
        },
        {
          question: 'Is 50 a perfect square?',
          answer: '50 is not a perfect square.',
          steps: [
            `Check nearby squares — ${bl('7')}${or('²')} = 49 and ${bl('8')}${or('²')} = 64`,
            `50 is between these so it has no whole number ${gr('square root')}`,
            `50 is not a perfect square`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining square numbers and square roots with visual examples of squaring and finding the square root" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual grid showing square numbers from 1² to 12² with colour coded base number blue and exponent orange and matching square root green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CUBE NUMBERS AND CUBE ROOTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'cube-numbers-roots',
      title: 'Cube Numbers and Cube Roots',
      icon: '³',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>cube number</strong> is the result of multiplying a number by itself three times. The notation uses a small ${or('3')} — for example ${bl('4')}${or('³')} = ${bl('4')} × ${bl('4')} × ${bl('4')} = 64. The ${gr('cube root')} symbol is ${gr('∛')}. To find the ${gr('cube root')} we ask what number multiplied by itself three times gives the original number.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('base number')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('exponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('cube root')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Cube number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The result of multiplying a number by itself three times — for example, ${bl('3')}${or('³')} = 27.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Cube root (∛)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The number that was multiplied by itself three times to give the cube number — ${gr('∛')}27 = ${bl('3')} because ${bl('3')} × ${bl('3')} × ${bl('3')} = 27.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Perfect cubes to know</p>` +
        `<p style="margin:0;color:#1e3a8a;">Learn the cube numbers from ${bl('1')}${or('³')} to ${bl('10')}${or('³')}: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000. Recognising these helps you find ${gr('cube roots')} instantly.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate 6³ and find ∛216.',
          answer: `${bl('6')}${or('³')} = 216 and ${gr('∛')}216 = ${bl('6')}`,
          steps: [
            `${bl('6')}${or('³')} = ${bl('6')} × ${bl('6')} × ${bl('6')} = 216`,
            `${gr('∛')}216 = ${bl('6')} because ${bl('6')} × ${bl('6')} × ${bl('6')} = 216`,
          ],
        },
        {
          question: 'Find ∛1000.',
          answer: `${gr('∛')}1000 = ${bl('10')}`,
          steps: [
            `We need a number that cubed gives 1000`,
            `${bl('10')} × ${bl('10')} × ${bl('10')} = 1000`,
            `${gr('∛')}1000 = ${bl('10')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining cube numbers and cube roots with visual 3D cube examples and colour coded working" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual diagram showing cube numbers from 1³ to 5³ as 3D cubes with colour coded base number blue exponent orange and cube root green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — EXPONENTIAL NOTATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'exponential-notation',
      title: 'Exponential Notation',
      icon: 'xⁿ',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Exponential notation</strong> is a shorter way of writing repeated multiplication. The ${bl('base')} is the number being multiplied and the ${or('exponent')} tells us how many times to multiply it by itself. Any number to the power of ${or('1')} equals itself. Any number to the power of ${or('0')} equals ${re('1')} (except 0 itself).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('base')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('exponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('repeated multiplication')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('final answer')}</span>` +
        `</div>` +

        // ── Key rules ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key rules</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Base')} to the power of ${or('1')} — any number to the power of 1 equals itself: ${bl('n')}${or('¹')} = ${bl('n')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Base')} to the power of ${or('0')} — any non-zero number to the power of 0 equals ${re('1')}: ${bl('n')}${or('⁰')} = ${re('1')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Base')} to the power of ${or('n')} — expand as ${gr('repeated multiplication')}: ${bl('a')}${or('ⁿ')} = ${gr('a × a × ⋯ × a')} (n times) = ${re('answer')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Reading exponential notation</p>` +
        `<p style="margin:0;color:#1e3a8a;">${bl('2')}${or('⁵')} is read as "two to the power of five" or "two to the fifth". The ${bl('base')} is always written first and the ${or('exponent')} is always the small raised number.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Write 3 × 3 × 3 × 3 in exponential notation and calculate the answer.',
          answer: `${bl('3')}${or('⁴')} = ${re('81')}`,
          steps: [
            `There are ${or('4')} threes multiplied together: ${bl('3')}${or('⁴')}`,
            `Calculate: ${gr('3 × 3 × 3 × 3')} = ${re('81')}`,
          ],
        },
        {
          question: 'Calculate 2⁵.',
          answer: `${bl('2')}${or('⁵')} = ${re('32')}`,
          steps: [
            `${gr('2 × 2 × 2 × 2 × 2')} = ${re('32')}`,
          ],
        },
        {
          question: 'Calculate 10⁰.',
          answer: `${bl('10')}${or('⁰')} = ${re('1')}`,
          steps: [
            `Any number to the power of ${or('0')} equals ${re('1')}`,
            `${bl('10')}${or('⁰')} = ${re('1')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining exponential notation showing how to expand and evaluate expressions with any base and exponent including the power of 0 and power of 1 rules" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the structure of exponential notation with base blue exponent orange expanded repeated multiplication green and final answer red" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — square a single-digit number ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate 9².',
      answer: '81',
      checkMode: 'auto',
      correctAnswer: '81',
      explanation: '9² = 9 × 9 = 81',
    },

    // ── Q2 Easy — find a square root ─────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find √121.',
      answer: '11',
      checkMode: 'auto',
      correctAnswer: '11',
      explanation: '√121 = 11 because 11 × 11 = 121',
    },

    // ── Q3 Medium — identify a non-perfect square ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Is 75 a perfect square? Explain.',
      answer: 'No — 8²=64 and 9²=81, so 75 falls between perfect squares and has no whole number square root.',
      checkMode: 'self',
    },

    // ── Q4 Medium — square then root to show inverse relationship ────────────
    {
      difficulty: 'Medium',
      question: 'Calculate 14² then find its square root.',
      answer: '14²=196. √196=14, confirming the square root undoes the squaring.',
      checkMode: 'self',
    },

    // ── Q5 Easy — cube a single-digit number ─────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate 5³.',
      answer: '125',
      checkMode: 'auto',
      correctAnswer: '125',
      explanation: '5³ = 5 × 5 × 5 = 125',
    },

    // ── Q6 Easy — find a cube root ───────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find ∛64.',
      answer: '4',
      checkMode: 'auto',
      correctAnswer: '4',
      explanation: '∛64 = 4 because 4 × 4 × 4 = 64',
    },

    // ── Q7 Medium — find a larger cube root ──────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find ∛729.',
      answer: '9',
      checkMode: 'auto',
      correctAnswer: '9',
      explanation: '∛729 = 9 because 9 × 9 × 9 = 729',
    },

    // ── Q8 Hard — spot an error involving cube roots and cube numbers ─────────
    {
      difficulty: 'Hard',
      question: 'Sipho says ∛27=3 and also that 3³=9. Spot his error.',
      answer: 'His cube root is correct but his second statement is wrong — 3³=3×3×3=27, not 9.',
      checkMode: 'self',
    },

    // ── Q9 Easy — write repeated multiplication in exponential notation ───────
    {
      difficulty: 'Easy',
      question: 'Write 4×4×4×4×4 in exponential notation.',
      answer: '4⁵',
      checkMode: 'auto',
      correctAnswer: '4^5',
      correctAnswers: ['4^5', '4⁵'],
      explanation: 'There are 5 fours multiplied together, so the exponential notation is 4⁵.',
    },

    // ── Q10 Easy — apply the zero exponent rule ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate 6⁰.',
      answer: '1',
      checkMode: 'auto',
      correctAnswer: '1',
      explanation: 'Any non-zero number raised to the power of 0 equals 1. So 6⁰ = 1.',
    },

    // ── Q11 Medium — evaluate a power of 2 ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate 2⁶.',
      answer: '64',
      checkMode: 'auto',
      correctAnswer: '64',
      explanation: '2⁶ = 2×2×2×2×2×2 = 64',
    },

    // ── Q12 Medium — evaluate and add two exponential expressions ────────────
    {
      difficulty: 'Medium',
      question: 'Calculate 3³ + 4².',
      answer: '43',
      checkMode: 'auto',
      correctAnswer: '43',
      explanation: '3³ = 27 and 4² = 16. 27 + 16 = 43.',
    },

    // ── Q13 Hard — correct a common misconception about squaring ─────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says 5²=10 because 5×2=10. Is she correct? Explain.',
      answer: 'No — squaring means multiplying a number by itself, so 5²=5×5=25, not 5×2.',
      checkMode: 'self',
    },

    // ── Q14 Hard — evaluate a compound exponent expression and explain ────────
    {
      difficulty: 'Hard',
      question: 'Calculate (2³)² and explain what this means.',
      answer: '2³=8, then 8²=64. This means we first cube 2 then square the result.',
      checkMode: 'self',
    },

    // ── Q15 Hard — evaluate a claim about cube roots with a counter-example ───
    {
      difficulty: 'Hard',
      question: 'Amahle says every number has a whole number cube root. Is she correct? Give an example to support your answer.',
      answer: 'No — for example ∛10 is not a whole number since no whole number cubed gives exactly 10.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered exponents.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
