import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (real number system roles) ────────────────────────────────
// natural numbers  → blue   (#2563eb)
// integers         → green  (#16a34a)
// rational numbers → orange (#ea580c)
// irrational       → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Numbers and the Real Number System',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — CLASSIFYING NUMBERS IN THE REAL NUMBER SYSTEM
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'classifying-real-numbers',
      title: 'Classifying Numbers in the Real Number System',
      icon: 'ℝ',
      explanation:
        `<p style="margin-bottom:16px;">The real number system includes several types of numbers. ${bl('Natural numbers')} are counting numbers (1, 2, 3 ...). <strong>Whole numbers</strong> include 0 and the natural numbers. ${gr('Integers')} include negative numbers too. ${or('Rational numbers')} can be written as a fraction (including all integers, fractions, and terminating or repeating decimals). ${re('Irrational numbers')} cannot be written as exact fractions — their decimals go on forever without repeating, like π or √2.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('natural numbers')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('integers')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rational numbers')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('irrational numbers')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Natural Numbers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Counting numbers starting from 1: {1, 2, 3, 4, ...}</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Whole Numbers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Natural numbers plus zero: {0, 1, 2, 3, ...}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Integers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">All whole numbers and their negatives: {..., −2, −1, 0, 1, 2, ...}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Rational Numbers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Any number that can be written as a fraction p/q where q ≠ 0. Includes all integers, fractions, and terminating or repeating decimals.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Irrational Numbers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Numbers whose decimal expansion is non-terminating and non-repeating. Cannot be written as a fraction. Examples: π, √2, √3.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember: the sets are nested</p>` +
        `<p style="margin:0;color:#1e3a8a;">Every ${bl('natural number')} is also a whole number, an ${gr('integer')}, and a ${or('rational number')}. The ${re('irrational numbers')} are separate — they are real numbers that are <em>not</em> rational.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Classify the number −7.',
          answer: `−7 is an ${gr('integer')} and a ${or('rational number')}`,
          steps: [
            `−7 is a negative whole number, so it is an ${gr('integer')}.`,
            `It is also ${or('rational')}, since it can be written as the fraction −7/1.`,
            `It is <strong>not</strong> a ${bl('natural number')} or a whole number, since those sets exclude negatives.`,
            `<strong>Classification:</strong> ${gr('integer')} and ${or('rational number')} ✓`,
          ],
        },
        {
          question: 'Sipho says √16 is irrational. Is he correct?',
          answer: `No — √16 = ${bl('4')}, which is ${or('rational')}`,
          steps: [
            `Calculate: √16 = <strong>4</strong> (because 4 × 4 = 16).`,
            `4 is a ${bl('natural number')}, a whole number, an ${gr('integer')}, and therefore also ${or('rational')}.`,
            `Sipho is incorrect. Not all square roots are ${re('irrational')} — only square roots of non-perfect squares are ${re('irrational')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Classify the number 12. List all sets it belongs to.',
          answer: 'It is a natural number, whole number, integer, and rational number.',
          checkMode: 'self',
        },
        {
          difficulty: 'Easy',
          question: 'Classify the number −5. List all sets it belongs to.',
          answer: 'It is an integer and a rational number, but not a natural number or whole number.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho says all square roots are irrational. Is he correct? Explain with an example.',
          answer: 'No — square roots of perfect squares like √25 = 5 are rational. Only square roots of non-perfect squares are irrational.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Classify the number 0 in terms of natural numbers, whole numbers, integers and rational numbers.',
          answer: '0 is a whole number, an integer, and a rational number, but it is not a natural number (which starts from 1).',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Nested Venn-style diagram showing natural numbers inside whole numbers, inside integers, inside rational numbers, with irrational numbers as a separate circle, all inside the real number system" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the real number system and how to classify numbers as natural, whole, integer, rational or irrational" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — IDENTIFYING RATIONAL AND IRRATIONAL NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rational-irrational-numbers',
      title: 'Identifying Rational and Irrational Numbers',
      icon: '≈',
      explanation:
        `<p style="margin-bottom:16px;">To determine if a number is ${or('rational')}, check if it can be written as a fraction, or if its decimal ${bl('terminates')} or ${gr('repeats')} in a pattern. ${re('Irrational')} numbers have decimals that go on forever with no repeating pattern. Square roots of non-perfect squares (like √2, √3, √5) are ${re('irrational')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('terminating decimals')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('repeating decimals')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('non-repeating decimals')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to test a number</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Terminates')} — the decimal ends after a finite number of digits (e.g. 0.75 = 3/4). ${or('Rational')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Repeats')} — the decimal has a block of digits that repeats indefinitely (e.g. 0.333... = 1/3). ${or('Rational')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Non-repeating and non-terminating')} — the decimal goes on forever with no pattern (e.g. π, √2). ${re('Irrational')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Square roots: the key question</p>` +
        `<p style="margin:0;color:#7c2d12;">Is the number under the square root sign a <strong>perfect square</strong>? If yes, the result is ${or('rational')}. If no, the result is ${re('irrational')}. Perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, ...</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Is 0.333... (repeating) rational or irrational?',
          answer: `0.333... is ${or('rational')}`,
          steps: [
            `The decimal 0.333... has a ${gr('repeating')} pattern — the digit 3 repeats indefinitely.`,
            `A ${gr('repeating')} decimal can always be expressed as a fraction: 0.333... = 1/3.`,
            `Since it can be written as a fraction, it is ${or('rational')}. ✓`,
          ],
        },
        {
          question: 'Lerato says π is rational because it has a value of 3.14. Is she correct?',
          answer: `No — π is ${re('irrational')}`,
          steps: [
            `3.14 is only an <strong>approximation</strong> of π, used for convenience in calculations.`,
            `The actual decimal value of π continues forever without any ${gr('repeating')} pattern: 3.14159265358979...`,
            `Because π is ${re('non-terminating and non-repeating')}, it cannot be written as an exact fraction. It is ${re('irrational')}.`,
            `Lerato is incorrect. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Medium',
          question: 'Is √25 rational or irrational?',
          answer: 'rational',
          checkMode: 'auto',
          correctAnswer: 'rational',
          explanation: '√25 = 5, which is a whole number and therefore rational. 25 is a perfect square, so its square root is rational.',
        },
        {
          difficulty: 'Easy',
          question: 'Is 0.75 rational or irrational?',
          answer: 'rational',
          checkMode: 'auto',
          correctAnswer: 'rational',
          explanation: '0.75 is a terminating decimal. It can be written as the fraction 3/4, so it is rational.',
        },
        {
          difficulty: 'Medium',
          question: 'Is 0.101001000100001... (non-repeating) rational or irrational?',
          answer: 'irrational',
          checkMode: 'auto',
          correctAnswer: 'irrational',
          explanation: 'This decimal is non-terminating and non-repeating — there is no block of digits that repeats in a pattern. It cannot be written as a fraction, so it is irrational.',
        },
        {
          difficulty: 'Hard',
          question: 'Lerato says 22/7 is exactly equal to π. Is she correct? Explain.',
          answer: 'No — 22/7 is a rational approximation of π, but π itself is irrational and its exact value cannot be written as a fraction.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Classify √7.',
          answer: 'irrational',
          checkMode: 'auto',
          correctAnswer: 'irrational',
          explanation: '7 is not a perfect square, so √7 cannot be expressed as a whole number or simple fraction. Its decimal value is 2.6457513..., which is non-terminating and non-repeating. Therefore √7 is irrational.',
        },
        {
          difficulty: 'Easy',
          question: 'Is −3/4 a rational number?',
          answer: 'yes',
          checkMode: 'auto',
          correctAnswer: 'yes',
          explanation: '−3/4 is written directly as a fraction p/q where p = −3 and q = 4. Any number that can be expressed as a fraction is rational.',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing examples of terminating decimals, repeating decimals and non-repeating non-terminating decimals, illustrating which are rational and which are irrational" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to identify rational and irrational numbers including how to test decimals and square roots" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PROPERTIES AND OPERATIONS ACROSS THE REAL NUMBER SYSTEM
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'operations-real-number-system',
      title: 'Properties and Operations Across the Real Number System',
      icon: '+',
      explanation:
        `<p style="margin-bottom:16px;">We apply our knowledge of number types when performing calculations, recognising that operations between certain number types produce predictable results — for example, the sum of two ${or('rational')} numbers is always ${or('rational')}, but combinations involving ${re('irrational')} numbers can be ${re('irrational')} or sometimes ${bl('rational')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('rational result')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('irrational result')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('calculation steps')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Rules for operations</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">${bl('Rational')} + ${bl('Rational')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Always ${bl('rational')}. Example: 1/2 + 1/3 = 5/6.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">${bl('Rational')} + ${re('Irrational')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Always ${re('irrational')}. Example: 3 + √2 is irrational.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;">${re('Irrational')} + ${re('Irrational')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Usually ${re('irrational')}, but can be ${bl('rational')}. Example: √5 − √5 = 0.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">${re('Irrational')} × ${re('Irrational')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Can be ${bl('rational')} or ${re('irrational')}. Example: √3 × √3 = 3 (${bl('rational')}); √2 × √3 = √6 (${re('irrational')}).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always simplify first</p>` +
        `<p style="margin:0;color:#1e3a8a;">Before classifying the result, simplify the expression completely. A square root that simplifies to a whole number is ${bl('rational')}, even if it did not look ${bl('rational')} at first.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo adds √2 + 3. Is the result rational or irrational?',
          answer: `The result is ${re('irrational')}`,
          steps: [
            `${or('Identify the types:')} 3 is a ${bl('rational')} number. √2 is an ${re('irrational')} number (2 is not a perfect square).`,
            `${or('Apply the rule:')} Adding a ${bl('rational')} number to an ${re('irrational')} number always gives an ${re('irrational')} result.`,
            `The non-repeating decimal pattern of √2 is preserved — no amount of adding a rational number can make it terminate or repeat.`,
            `<strong>Conclusion:</strong> √2 + 3 is ${re('irrational')} ✓`,
          ],
        },
        {
          question: 'Amahle multiplies √3 × √3. Is the result rational or irrational?',
          answer: `The result is ${bl('rational')} — √3 × √3 = ${bl('3')}`,
          steps: [
            `${or('Calculate:')} √3 × √3 = (√3)² = <strong>3</strong>.`,
            `${or('Classify:')} 3 is a whole number, therefore ${bl('rational')}.`,
            `Multiplying an irrational number by itself (squaring a square root) cancels the radical and produces a ${bl('rational')} result.`,
            `<strong>Conclusion:</strong> √3 × √3 = ${bl('3')}, which is ${bl('rational')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Hard',
          question: 'Thabo adds 4 + √5. Is the result rational or irrational? Explain.',
          answer: 'Irrational — adding a rational number to an irrational number always produces an irrational result.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Calculate √9 × √16 and classify the result.',
          answer: '12, which is rational',
          checkMode: 'auto',
          correctAnswer: '12',
          explanation: '√9 = 3 and √16 = 4. So √9 × √16 = 3 × 4 = 12. Since 12 is a whole number, it is rational.',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle says √2 × √8 will be irrational because both numbers are irrational. Is she correct?',
          answer: 'No — √2 × √8 = √16 = 4, which is rational. Multiplying two irrational numbers can sometimes produce a rational result.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Is the sum of two rational numbers always rational?',
          answer: 'yes',
          checkMode: 'auto',
          correctAnswer: 'yes',
          explanation: 'Yes — the sum of two rational numbers is always rational. If a = p/q and b = r/s, then a + b = (ps + rq)/(qs), which is also a fraction and therefore rational.',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho says subtracting two irrational numbers always gives an irrational result. Is he correct? Give an example to support your answer.',
          answer: 'No — for example √5 − √5 = 0, which is rational, even though both numbers were irrational.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Table showing the results of adding, subtracting and multiplying rational and irrational numbers with examples of each combination" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing examples of operations involving rational and irrational numbers and how to classify the results" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered the real number system.' },
    { minScore: 11, message: 'Great work! You have a strong understanding — review any questions you missed and try again.' },
    { minScore: 8, message: 'Good effort! Review the study guide and try again.' },
    { minScore: 0, message: 'Keep going — work through the guide again and you will get there.' },
  ],
}
