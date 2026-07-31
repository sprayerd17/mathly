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
        'Nested diagram showing natural numbers inside whole numbers, inside integers, inside rational numbers, with irrational numbers as a separate set, all inside the real numbers',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 225" width="100%" style="max-width:380px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="10" y="15" width="280" height="200" rx="14" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="18" y="30" font-size="10" font-weight="700" fill="#0f1f3d">Real Numbers (ℝ)</text>` +
        `<rect x="25" y="42" width="160" height="150" rx="12" fill="rgba(234,88,12,0.05)" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="33" y="58" font-size="9" font-weight="700" fill="#ea580c">Rational (ℚ)</text>` +
        `<rect x="38" y="68" width="125" height="105" rx="10" fill="rgba(22,163,74,0.06)" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="46" y="84" font-size="8.5" font-weight="700" fill="#16a34a">Integers (ℤ)</text>` +
        `<rect x="50" y="94" width="90" height="62" rx="8" fill="rgba(107,114,128,0.08)" stroke="#6b7280" stroke-width="1.5"/>` +
        `<text x="58" y="108" font-size="7.5" font-weight="700" fill="#6b7280">Whole (ℕ₀)</text>` +
        `<rect x="62" y="118" width="55" height="28" rx="6" fill="rgba(37,99,235,0.12)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="89.5" y="135" text-anchor="middle" font-size="6.5" font-weight="700" fill="#2563eb">Natural (ℕ)</text>` +
        `<rect x="200" y="90" width="75" height="60" rx="10" fill="rgba(220,38,38,0.05)" stroke="#dc2626" stroke-width="1.5"/>` +
        `<text x="237.5" y="115" text-anchor="middle" font-size="8.5" font-weight="700" fill="#dc2626">Irrational</text>` +
        `<text x="237.5" y="128" text-anchor="middle" font-size="7" fill="#dc2626">(π, √2, √3)</text>` +
        `</svg>`,

      videoPlaceholder:
        'Short video explaining the real number system and how to classify numbers as natural, whole, integer, rational or irrational',
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

      videoPlaceholder:
        'Short video showing how to identify rational and irrational numbers including how to test decimals and square roots',
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

      videoPlaceholder:
        'Short video showing examples of operations involving rational and irrational numbers and how to classify the results',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered the real number system.' },
    { minScore: 11, message: 'Great work! You have a strong understanding — review any questions you missed and try again.' },
    { minScore: 8, message: 'Good effort! Review the study guide and try again.' },
    { minScore: 0, message: 'Keep going — work through the guide again and you will get there.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-2):   Classify a number — list all sets it belongs to
    // Block 2 (3-5):   Rational or irrational? (decimals and square roots)
    // Block 3 (6-9):   Identify the irrational number in a list
    // Block 4 (10-12): Convert a recurring decimal to a fraction
    // Block 5 (13-15): Order a set of real numbers
    // Block 6 (16-19): True/false reasoning about number-set properties
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Classify a number (Easy)
        { difficulty: 'Easy', question: 'Classify the number 9. Which set(s) does it belong to?', checkMode: 'auto', options: ['Natural number, whole number, integer and rational number', 'Whole number, integer and rational number (not natural)', 'Integer and rational number only', 'Natural number and irrational number'], correctIndex: 0, explanation: '9 is a positive counting number, so it is natural, whole, an integer, and can be written as 9/1, so it is also rational.' },
        { difficulty: 'Easy', question: 'Classify the number −14. Which set(s) does it belong to?', checkMode: 'auto', options: ['Natural number, integer and rational number', 'Integer and rational number only (not natural, not whole)', 'Whole number, integer and rational number', 'Integer and irrational number'], correctIndex: 1, explanation: '−14 is negative, so it cannot be natural or whole. It is an integer, and since it can be written as −14/1, it is also rational.' },
        { difficulty: 'Easy', question: 'Classify the number 0. Which set(s) does it belong to?', checkMode: 'auto', options: ['Natural number, whole number, integer and rational number', 'Integer and rational number only (not whole)', 'Whole number, integer and rational number (not natural)', 'Whole number and irrational number'], correctIndex: 2, explanation: '0 is not a natural number (natural numbers start at 1), but it is a whole number, an integer, and rational since it can be written as 0/1.' },

        // Block 2 — Rational or irrational? (Easy/Medium)
        { difficulty: 'Easy', question: 'Which best classifies 0.8?', checkMode: 'auto', options: ['Irrational — the digits never terminate', 'Irrational — any number with a decimal point is non-repeating', 'Integer — the decimal simplifies to a whole number', 'Rational — 0.8 terminates, so it equals the fraction 4/5'], correctIndex: 3, explanation: '0.8 is a terminating decimal — it can be written as 4/5, so it is rational.' },
        { difficulty: 'Easy', question: 'Which best classifies √36?', checkMode: 'auto', options: ['Rational — √36 = 6, a whole number', 'Irrational — square roots are always irrational', 'Irrational — 36 is not a perfect square', 'Natural number only, not rational'], correctIndex: 0, explanation: '√36 = 6, since 6 × 6 = 36. 36 is a perfect square, so its square root is a whole number and therefore rational.' },
        { difficulty: 'Medium', question: 'Which best classifies √13?', checkMode: 'auto', options: ['Rational — every square root is rational once simplified', 'Irrational — 13 is not a perfect square, so √13 cannot be simplified to a whole number', 'Rational — 13 is a perfect square', 'Natural number — square roots are always whole numbers'], correctIndex: 1, explanation: '13 is not a perfect square (3² = 9 and 4² = 16), so √13 cannot be simplified to a whole number. Its decimal expansion is non-terminating and non-repeating, so it is irrational.' },

        // Block 3 — Identify the irrational number in a list (Medium/Hard)
        { difficulty: 'Medium', question: 'Which of these numbers is irrational?', checkMode: 'auto', options: ['7', '3/5', '√21', '√25'], correctIndex: 2, explanation: '7 is an integer (rational), 3/5 is already a fraction (rational), √25 = 5 (rational). 21 is not a perfect square, so √21 is irrational.' },
        { difficulty: 'Medium', question: 'Which of these numbers is irrational?', checkMode: 'auto', options: ['√49', '−6', '0.25', 'π'], correctIndex: 3, explanation: '√49 = 7 (rational), −6 is an integer (rational), 0.25 is a terminating decimal (rational). π is non-terminating and non-repeating, so it is irrational.' },
        { difficulty: 'Hard', question: 'Zinhle lists 4/9, √50, 8, and 1.6 and says √50 is the only irrational number. Which statement correctly evaluates her claim?', checkMode: 'auto', options: ['Yes — 4/9, 8 and 1.6 are all rational, and 50 is not a perfect square, so √50 is irrational', 'No — 8 is irrational because it has no decimal part', 'No — 1.6 is irrational because it is not a whole number', 'No — 4/9 is irrational because it is a fraction'], correctIndex: 0, explanation: '4/9 is a fraction (rational), 8 is an integer (rational), 1.6 is a terminating decimal (rational). 50 is not a perfect square, so √50 is irrational. Zinhle is correct.' },
        { difficulty: 'Hard', question: 'Which statement correctly explains why √64 belongs with the rational numbers?', checkMode: 'auto', options: ['√64 is irrational because 64 is not a perfect square', '√64 = 8, a whole number, because 64 is a perfect square', '√64 is irrational because square roots are never rational', '√64 is a natural number but not rational'], correctIndex: 1, explanation: 'Even though the expression √64 looks like it might be irrational, 64 is a perfect square (8 × 8 = 64), so √64 simplifies exactly to 8 — a whole number, which is rational. Only square roots of non-perfect squares are irrational.' },

        // Block 4 — Convert a recurring decimal to a fraction (Medium/Hard)
        { difficulty: 'Medium', question: 'Convert 0.777... (7 recurring) to a fraction.', checkMode: 'auto', options: ['7/10', '7/99', '7/9', '70/9'], correctIndex: 2, explanation: 'Let x = 0.777...\n10x = 7.777...\n10x − x = 7.777... − 0.777...\n9x = 7\nx = 7/9' },
        { difficulty: 'Medium', question: 'Convert 0.454545... (45 recurring) to a fraction in simplest form.', checkMode: 'auto', options: ['45/100', '4/9', '5/9', '5/11'], correctIndex: 3, explanation: 'Let x = 0.454545...\n100x = 45.454545...\n100x − x = 45.454545... − 0.454545...\n99x = 45\nx = 45/99 = 5/11 (dividing by the HCF, 9)' },
        { difficulty: 'Hard', question: 'Convert 0.1666... (6 recurring) to a fraction in simplest form.', checkMode: 'auto', options: ['1/6', '1/9', '16/99', '1/60'], correctIndex: 0, explanation: 'Let x = 0.1666...\n10x = 1.666...\n100x = 16.666...\n100x − 10x = 16.666... − 1.666...\n90x = 15\nx = 15/90 = 1/6 (dividing by the HCF, 15)' },

        // Block 5 — Order a set of real numbers (Hard)
        { difficulty: 'Hard', question: 'Arrange these numbers from smallest to largest: −3, √2, 0.5, −1.5, √9.', checkMode: 'auto', options: ['−3, −1.5, √2, 0.5, √9', '−3, −1.5, 0.5, √2, √9', '−1.5, −3, 0.5, √2, √9', '−3, −1.5, 0.5, √9, √2'], correctIndex: 1, explanation: '√2 ≈ 1.41 and √9 = 3. Ordering: −3 < −1.5 < 0.5 < √2 (≈1.41) < √9 (=3).' },
        { difficulty: 'Hard', question: 'Arrange these numbers from largest to smallest: 4, −2, π, −4.5, 0.', checkMode: 'auto', options: ['π, 4, 0, −2, −4.5', '4, 0, π, −2, −4.5', '4, π, 0, −2, −4.5', '4, π, 0, −4.5, −2'], correctIndex: 2, explanation: 'π ≈ 3.14. Comparing 4 and π: 4 > 3.14, so 4 is largest. Ordering from largest to smallest: 4 > π (≈3.14) > 0 > −2 > −4.5.' },
        { difficulty: 'Hard', question: 'Given the numbers √17, 4, −√1, 3.9 and −5, arrange them from smallest to largest.', checkMode: 'auto', options: ['−5, −√1, 4, 3.9, √17', '−√1, −5, 3.9, 4, √17', '−5, −√1, 3.9, √17, 4', '−5, −√1, 3.9, 4, √17'], correctIndex: 3, explanation: '−√1 = −1. √17 ≈ 4.12. Ordering: −5 < −1 < 3.9 < 4 < √17 (≈4.12).' },

        // Block 6 — True/false reasoning about number-set properties (Hard)
        { difficulty: 'Hard', question: 'Which of these statements is correct?', checkMode: 'auto', options: ['The sum of a rational number and an irrational number is always irrational.', 'The sum of a rational number and an irrational number is always rational.', 'The sum of a rational number and an irrational number is sometimes rational and sometimes irrational, depending on the numbers.', 'The sum of two irrational numbers is always irrational.'], correctIndex: 0, explanation: 'True. If you could write a rational number plus an irrational number as a fraction, then subtracting the rational part would mean the irrational number is also a fraction — a contradiction. So the sum is always irrational.' },
        { difficulty: 'Hard', question: 'Which of these statements is correct?', checkMode: 'auto', options: ['Every rational number is an integer.', 'Every integer is a rational number.', 'No integers are rational numbers.', 'Only positive integers are rational numbers.'], correctIndex: 1, explanation: 'True. Any integer n can be written as the fraction n/1, so every integer satisfies the definition of a rational number.' },
        { difficulty: 'Hard', question: 'Karabo calculates √2 + √2 = 2√2 and says the result must be irrational. Which statement correctly evaluates his reasoning?', checkMode: 'auto', options: ['He is incorrect — 2√2 simplifies to a whole number, so it is rational.', 'He is incorrect — adding two irrational numbers always produces a rational result.', 'He is correct — 2√2 is irrational, since multiplying an irrational number by a nonzero rational number keeps it irrational.', 'He is correct, but only because adding two identical irrational numbers always gives zero.'], correctIndex: 2, explanation: '√2 + √2 = 2√2. Since √2 is irrational, multiplying it by the rational number 2 keeps it irrational (2√2 cannot be written as an exact fraction). Karabo is correct, but note this does not mean adding two irrationals is always irrational — it depends on the numbers, as √5 − √5 = 0 shows.' },
        { difficulty: 'Hard', question: 'Thandeka says 0.3333... is irrational because the digits never stop. Which statement correctly evaluates her claim?', checkMode: 'auto', options: ['She is correct — any decimal that does not terminate is irrational.', 'She is correct — 1/3 cannot be written as an exact decimal, so it is irrational.', 'She is incorrect — 0.3333... is irrational, but all repeating decimals are actually integers.', 'She is incorrect — 0.3333... repeats forever in a pattern, so it equals 1/3 and is rational.'], correctIndex: 3, explanation: 'A decimal is only irrational if it is non-terminating AND non-repeating. 0.3333... does not terminate, but it does repeat (the digit 3 repeats forever), so it can be written as the fraction 1/3. It is rational.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered classifying and ordering real numbers.' },
        { minScore: 14, message: 'Great work! Review any missed questions on recurring decimals or ordering, then try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on rational and irrational numbers, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Classify a number (Easy)
        { difficulty: 'Easy', question: 'Classify the number 15. Which set(s) does it belong to?', checkMode: 'auto', options: ['Natural number, whole number, integer and rational number', 'Whole number, integer and rational number (not natural)', 'Integer and rational number only', 'Natural number and irrational number'], correctIndex: 0, explanation: '15 is a positive counting number, so it is natural, whole, an integer, and can be written as 15/1, so it is also rational.' },
        { difficulty: 'Easy', question: 'Classify the number −20. Which set(s) does it belong to?', checkMode: 'auto', options: ['Natural number, integer and rational number', 'Integer and rational number only (not natural, not whole)', 'Whole number, integer and rational number', 'Integer and irrational number'], correctIndex: 1, explanation: '−20 is negative, so it cannot be natural or whole. It is an integer, and since it can be written as −20/1, it is also rational.' },
        { difficulty: 'Easy', question: 'Classify the number −1. Which set(s) does it belong to?', checkMode: 'auto', options: ['Natural number, integer and rational number', 'Whole number, integer and rational number', 'Integer and rational number only (not natural, not whole)', 'Integer and irrational number'], correctIndex: 2, explanation: '−1 is negative, so it cannot be natural or whole. It is an integer, and since it can be written as −1/1, it is also rational.' },

        // Block 2 — Rational or irrational? (Easy/Medium)
        { difficulty: 'Easy', question: 'Which best classifies 0.45?', checkMode: 'auto', options: ['Irrational — the digits never terminate', 'Irrational — any number with a decimal point is non-repeating', 'Integer — the decimal simplifies to a whole number', 'Rational — 0.45 terminates, so it equals the fraction 9/20'], correctIndex: 3, explanation: '0.45 is a terminating decimal — it can be written as 9/20, so it is rational.' },
        { difficulty: 'Easy', question: 'Which best classifies √64?', checkMode: 'auto', options: ['Rational — √64 = 8, a whole number', 'Irrational — square roots are always irrational', 'Irrational — 64 is not a perfect square', 'Natural number only, not rational'], correctIndex: 0, explanation: '√64 = 8, since 8 × 8 = 64. 64 is a perfect square, so its square root is a whole number and therefore rational.' },
        { difficulty: 'Medium', question: 'Which best classifies √19?', checkMode: 'auto', options: ['Rational — every square root is rational once simplified', 'Irrational — 19 is not a perfect square, so √19 cannot be simplified to a whole number', 'Rational — 19 is a perfect square', 'Natural number — square roots are always whole numbers'], correctIndex: 1, explanation: '19 is not a perfect square (4² = 16 and 5² = 25), so √19 cannot be simplified to a whole number. Its decimal expansion is non-terminating and non-repeating, so it is irrational.' },

        // Block 3 — Identify the irrational number in a list (Medium/Hard)
        { difficulty: 'Medium', question: 'Which of these numbers is irrational?', checkMode: 'auto', options: ['9', '2/3', '√30', '√100'], correctIndex: 2, explanation: '9 is an integer (rational), 2/3 is already a fraction (rational), √100 = 10 (rational). 30 is not a perfect square, so √30 is irrational.' },
        { difficulty: 'Medium', question: 'Which of these numbers is irrational?', checkMode: 'auto', options: ['√81', '−11', '22/7', '√2'], correctIndex: 3, explanation: '√81 = 9 (rational), −11 is an integer (rational), 22/7 is already a fraction (rational). 2 is not a perfect square, so √2 is irrational.' },
        { difficulty: 'Hard', question: 'Mpho lists 5/6, √45, −3, and 2.4 and says √45 is the only irrational number. Which statement correctly evaluates her claim?', checkMode: 'auto', options: ['Yes — 5/6, −3 and 2.4 are all rational, and 45 is not a perfect square, so √45 is irrational', 'No — −3 is irrational because it is negative', 'No — 2.4 is irrational because it is not a whole number', 'No — 5/6 is irrational because it is a fraction'], correctIndex: 0, explanation: '5/6 is a fraction (rational), −3 is an integer (rational), 2.4 is a terminating decimal (rational). 45 is not a perfect square, so √45 is irrational. Mpho is correct.' },
        { difficulty: 'Hard', question: 'Which statement correctly explains why √100 belongs with the rational numbers?', checkMode: 'auto', options: ['√100 is irrational because 100 is not a perfect square', '√100 = 10, a whole number, because 100 is a perfect square', '√100 is irrational because square roots are never rational', '√100 is a natural number but not rational'], correctIndex: 1, explanation: 'Even though the expression √100 looks like it might be irrational, 100 is a perfect square (10 × 10 = 100), so √100 simplifies exactly to 10 — a whole number, which is rational. Only square roots of non-perfect squares are irrational.' },

        // Block 4 — Convert a recurring decimal to a fraction (Medium/Hard)
        { difficulty: 'Medium', question: 'Convert 0.888... (8 recurring) to a fraction.', checkMode: 'auto', options: ['8/10', '8/99', '8/9', '80/9'], correctIndex: 2, explanation: 'Let x = 0.888...\n10x = 8.888...\n10x − x = 8.888... − 0.888...\n9x = 8\nx = 8/9' },
        { difficulty: 'Medium', question: 'Convert 0.272727... (27 recurring) to a fraction in simplest form.', checkMode: 'auto', options: ['27/100', '2/9', '3/9', '3/11'], correctIndex: 3, explanation: 'Let x = 0.272727...\n100x = 27.272727...\n100x − x = 27.272727... − 0.272727...\n99x = 27\nx = 27/99 = 3/11 (dividing by the HCF, 9)' },
        { difficulty: 'Hard', question: 'Convert 0.2333... (3 recurring) to a fraction in simplest form.', checkMode: 'auto', options: ['7/30', '7/9', '23/99', '7/300'], correctIndex: 0, explanation: 'Let x = 0.2333...\n10x = 2.333...\n100x = 23.333...\n100x − 10x = 23.333... − 2.333...\n90x = 21\nx = 21/90 = 7/30 (dividing by the HCF, 3)' },

        // Block 5 — Order a set of real numbers (Hard)
        { difficulty: 'Hard', question: 'Arrange these numbers from smallest to largest: 3, −√5, 2.25, −3, √1.', checkMode: 'auto', options: ['−3, −√5, 2.25, √1, 3', '−3, −√5, √1, 2.25, 3', '−√5, −3, √1, 2.25, 3', '−3, −√5, √1, 3, 2.25'], correctIndex: 1, explanation: '√5 ≈ 2.24, so −√5 ≈ −2.24. √1 = 1. Ordering: −3 < −√5 (≈−2.24) < √1 (=1) < 2.25 < 3.' },
        { difficulty: 'Hard', question: 'Arrange these numbers from largest to smallest: 5, −6, √8, 0.9, −2.', checkMode: 'auto', options: ['√8, 5, 0.9, −2, −6', '5, 0.9, √8, −2, −6', '5, √8, 0.9, −2, −6', '5, √8, 0.9, −6, −2'], correctIndex: 2, explanation: '√8 ≈ 2.83. Ordering from largest to smallest: 5 > √8 (≈2.83) > 0.9 > −2 > −6.' },
        { difficulty: 'Hard', question: 'Given the numbers √99, 10, −√9, 8.7 and −6, arrange them from smallest to largest.', checkMode: 'auto', options: ['−6, −√9, 8.7, 10, √99', '−√9, −6, 8.7, √99, 10', '−6, −√9, √99, 8.7, 10', '−6, −√9, 8.7, √99, 10'], correctIndex: 3, explanation: '−√9 = −3. √99 ≈ 9.95. Ordering: −6 < −3 < 8.7 < √99 (≈9.95) < 10.' },

        // Block 6 — True/false reasoning about number-set properties (Hard)
        { difficulty: 'Hard', question: 'Which of these statements is correct?', checkMode: 'auto', options: ['Not all rational numbers are integers — for example, 1/2 is rational but not an integer.', 'All rational numbers are integers.', 'All rational numbers are natural numbers.', 'No rational numbers are integers.'], correctIndex: 0, explanation: 'False. Rational numbers include fractions like 1/2 that are not integers. All integers are rational, but not all rational numbers are integers.' },
        { difficulty: 'Hard', question: 'Which of these statements is correct?', checkMode: 'auto', options: ['The product of two irrational numbers is always irrational.', 'The product of two irrational numbers is not always irrational — for example, √2 × √2 = 2, which is rational.', 'The product of an irrational and a rational number is always rational.', 'The product of two irrational numbers is always a natural number.'], correctIndex: 1, explanation: 'False. For example, √2 × √2 = 2, which is rational, even though both factors were irrational.' },
        { difficulty: 'Hard', question: 'Prakash says every terminating decimal is irrational because it has digits after the decimal point. Which statement correctly evaluates his claim?', checkMode: 'auto', options: ['He is correct — any decimal with digits after the decimal point is irrational.', 'He is correct — only whole numbers are rational.', 'He is incorrect — a terminating decimal can always be written as a fraction (e.g. 0.5 = 1/2), so it is rational.', 'He is incorrect — terminating decimals are irrational, but repeating decimals are rational.'], correctIndex: 2, explanation: 'A terminating decimal always ends after a finite number of digits and can be written as a fraction (e.g. 0.5 = 1/2), which makes it rational. Having digits after the decimal point does not make a number irrational — only non-terminating, non-repeating decimals are irrational.' },
        { difficulty: 'Hard', question: 'Ayanda says √9 + √16 must be irrational because both numbers have square root signs. Which statement correctly evaluates her claim?', checkMode: 'auto', options: ['She is correct — any expression containing a square root sign is irrational.', 'She is correct — √9 and √16 are both irrational since they contain square root signs.', 'She is incorrect — √9 + √16 is irrational because 9 and 16 are not perfect squares.', 'She is incorrect — √9 = 3 and √16 = 4, so √9 + √16 = 7, which is rational.'], correctIndex: 3, explanation: 'Having a square root sign does not automatically make a number irrational. 9 and 16 are both perfect squares, so √9 = 3 and √16 = 4, both whole numbers. Their sum, 7, is rational.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered classifying and ordering real numbers.' },
        { minScore: 14, message: 'Great work! Review any missed questions on recurring decimals or ordering, then try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on rational and irrational numbers, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Classify a number (Easy)
        { difficulty: 'Easy', question: 'Classify the number 20. Which set(s) does it belong to?', checkMode: 'auto', options: ['Natural number, whole number, integer and rational number', 'Whole number, integer and rational number (not natural)', 'Integer and rational number only', 'Natural number and irrational number'], correctIndex: 0, explanation: '20 is a positive counting number, so it is natural, whole, an integer, and can be written as 20/1, so it is also rational.' },
        { difficulty: 'Easy', question: 'Classify the number −8. Which set(s) does it belong to?', checkMode: 'auto', options: ['Natural number, integer and rational number', 'Integer and rational number only (not natural, not whole)', 'Whole number, integer and rational number', 'Integer and irrational number'], correctIndex: 1, explanation: '−8 is negative, so it cannot be natural or whole. It is an integer, and since it can be written as −8/1, it is also rational.' },
        { difficulty: 'Easy', question: 'Classify the number −100. Which set(s) does it belong to?', checkMode: 'auto', options: ['Natural number, integer and rational number', 'Whole number, integer and rational number', 'Integer and rational number only (not natural, not whole)', 'Integer and irrational number'], correctIndex: 2, explanation: '−100 is negative, so it cannot be natural or whole. It is an integer, and since it can be written as −100/1, it is also rational.' },

        // Block 2 — Rational or irrational? (Easy/Medium)
        { difficulty: 'Easy', question: 'Which best classifies 0.125?', checkMode: 'auto', options: ['Irrational — the digits never terminate', 'Irrational — any number with a decimal point is non-repeating', 'Integer — the decimal simplifies to a whole number', 'Rational — 0.125 terminates, so it equals the fraction 1/8'], correctIndex: 3, explanation: '0.125 is a terminating decimal — it can be written as 1/8, so it is rational.' },
        { difficulty: 'Easy', question: 'Which best classifies √81?', checkMode: 'auto', options: ['Rational — √81 = 9, a whole number', 'Irrational — square roots are always irrational', 'Irrational — 81 is not a perfect square', 'Natural number only, not rational'], correctIndex: 0, explanation: '√81 = 9, since 9 × 9 = 81. 81 is a perfect square, so its square root is a whole number and therefore rational.' },
        { difficulty: 'Medium', question: 'Which best classifies √23?', checkMode: 'auto', options: ['Rational — every square root is rational once simplified', 'Irrational — 23 is not a perfect square, so √23 cannot be simplified to a whole number', 'Rational — 23 is a perfect square', 'Natural number — square roots are always whole numbers'], correctIndex: 1, explanation: '23 is not a perfect square (4² = 16 and 5² = 25), so √23 cannot be simplified to a whole number. Its decimal expansion is non-terminating and non-repeating, so it is irrational.' },

        // Block 3 — Identify the irrational number in a list (Medium/Hard)
        { difficulty: 'Medium', question: 'Which of these numbers is irrational?', checkMode: 'auto', options: ['11', '5/8', '√40', '√121'], correctIndex: 2, explanation: '11 is an integer (rational), 5/8 is already a fraction (rational), √121 = 11 (rational). 40 is not a perfect square, so √40 is irrational.' },
        { difficulty: 'Medium', question: 'Which of these numbers is irrational?', checkMode: 'auto', options: ['√144', '−9', '7/9', '√6'], correctIndex: 3, explanation: '√144 = 12 (rational), −9 is an integer (rational), 7/9 is already a fraction (rational). 6 is not a perfect square, so √6 is irrational.' },
        { difficulty: 'Hard', question: 'Sizwe lists 3/7, √28, −5, and 4.8 and says √28 is the only irrational number. Which statement correctly evaluates his claim?', checkMode: 'auto', options: ['Yes — 3/7, −5 and 4.8 are all rational, and 28 is not a perfect square, so √28 is irrational', 'No — −5 is irrational because it is negative', 'No — 4.8 is irrational because it is not a whole number', 'No — 3/7 is irrational because it is a fraction'], correctIndex: 0, explanation: '3/7 is a fraction (rational), −5 is an integer (rational), 4.8 is a terminating decimal (rational). 28 is not a perfect square, so √28 is irrational. Sizwe is correct.' },
        { difficulty: 'Hard', question: 'Which statement correctly explains why √144 belongs with the rational numbers?', checkMode: 'auto', options: ['√144 is irrational because 144 is not a perfect square', '√144 = 12, a whole number, because 144 is a perfect square', '√144 is irrational because square roots are never rational', '√144 is a natural number but not rational'], correctIndex: 1, explanation: 'Even though the expression √144 looks like it might be irrational, 144 is a perfect square (12 × 12 = 144), so √144 simplifies exactly to 12 — a whole number, which is rational. Only square roots of non-perfect squares are irrational.' },

        // Block 4 — Convert a recurring decimal to a fraction (Medium/Hard)
        { difficulty: 'Medium', question: 'Convert 0.111... (1 recurring) to a fraction.', checkMode: 'auto', options: ['1/10', '1/99', '1/9', '10/9'], correctIndex: 2, explanation: 'Let x = 0.111...\n10x = 1.111...\n10x − x = 1.111... − 0.111...\n9x = 1\nx = 1/9' },
        { difficulty: 'Medium', question: 'Convert 0.636363... (63 recurring) to a fraction in simplest form.', checkMode: 'auto', options: ['63/100', '6/9', '7/9', '7/11'], correctIndex: 3, explanation: 'Let x = 0.636363...\n100x = 63.636363...\n100x − x = 63.636363... − 0.636363...\n99x = 63\nx = 63/99 = 7/11 (dividing by the HCF, 9)' },
        { difficulty: 'Hard', question: 'Convert 0.484848... (48 recurring) to a fraction in simplest form.', checkMode: 'auto', options: ['16/33', '4/9', '48/100', '8/15'], correctIndex: 0, explanation: 'Let x = 0.484848...\n100x = 48.484848...\n100x − x = 48.484848... − 0.484848...\n99x = 48\nx = 48/99 = 16/33 (dividing by the HCF, 3)' },

        // Block 5 — Order a set of real numbers (Hard)
        { difficulty: 'Hard', question: 'Arrange these numbers from smallest to largest: −1, √7, −√4, 3.5, 0.', checkMode: 'auto', options: ['−1, −√4, 0, √7, 3.5', '−√4, −1, 0, √7, 3.5', '−√4, −1, 0, 3.5, √7', '−√4, 0, −1, √7, 3.5'], correctIndex: 1, explanation: '−√4 = −2. √7 ≈ 2.65. Comparing √7 and 3.5: 2.65 < 3.5. Ordering: −2 < −1 < 0 < √7 (≈2.65) < 3.5.' },
        { difficulty: 'Hard', question: 'Arrange these numbers from largest to smallest: 6, −7, √20, 1.2, −4.', checkMode: 'auto', options: ['√20, 6, 1.2, −4, −7', '6, 1.2, √20, −4, −7', '6, √20, 1.2, −4, −7', '6, √20, 1.2, −7, −4'], correctIndex: 2, explanation: '√20 ≈ 4.47. Ordering from largest to smallest: 6 > √20 (≈4.47) > 1.2 > −4 > −7.' },
        { difficulty: 'Hard', question: 'Given the numbers √80, 9, −√1, 6.5 and −7, arrange them from smallest to largest.', checkMode: 'auto', options: ['−7, −√1, 6.5, 9, √80', '−√1, −7, 6.5, √80, 9', '−7, −√1, √80, 6.5, 9', '−7, −√1, 6.5, √80, 9'], correctIndex: 3, explanation: '−√1 = −1. √80 ≈ 8.94. Ordering: −7 < −1 < 6.5 < √80 (≈8.94) < 9.' },

        // Block 6 — True/false reasoning about number-set properties (Hard)
        { difficulty: 'Hard', question: 'Which of these statements is correct?', checkMode: 'auto', options: ['Zero is not a natural number — natural numbers start counting from 1, though zero is a whole number.', 'Zero is a natural number.', 'Zero is neither a whole number nor a natural number.', 'Zero is an irrational number.'], correctIndex: 0, explanation: 'False. Natural numbers start counting from 1. Zero is a whole number, but it is not a natural number.' },
        { difficulty: 'Hard', question: 'Which of these statements is correct?', checkMode: 'auto', options: ['Not every whole number is an integer.', 'Every whole number is an integer.', 'Every integer is a natural number.', 'Whole numbers and integers never overlap.'], correctIndex: 1, explanation: 'True. The whole numbers (0, 1, 2, 3, ...) are all included within the integers, which also contain the negative whole numbers.' },
        { difficulty: 'Hard', question: 'Nomvula says √4 must be irrational because it has a square root sign in it. Which statement correctly evaluates her claim?', checkMode: 'auto', options: ['She is correct — every square root sign makes a number irrational.', 'She is correct — 4 is not a perfect square, so √4 is irrational.', 'She is incorrect — √4 = 2, and since 4 is a perfect square, √4 simplifies to the rational whole number 2.', 'She is incorrect — √4 is irrational, but only because it is a small number.'], correctIndex: 2, explanation: '√4 = 2, because 2 × 2 = 4. 4 is a perfect square, so √4 simplifies exactly to the whole number 2, which is rational. A square root sign alone does not make a number irrational.' },
        { difficulty: 'Hard', question: 'Lindiwe says π − π = 0, and since both terms were irrational, she expected an irrational answer. Which statement correctly explains why the result is actually rational?', checkMode: 'auto', options: ['The result is irrational, because subtracting two irrational numbers is always irrational.', 'The result is undefined, because π cannot be subtracted from itself.', 'The result is irrational, because π is irrational and irrationality is never lost.', 'The result is rational — subtracting an irrational number from itself always cancels to exactly 0, which is rational.'], correctIndex: 3, explanation: 'Subtracting an irrational number from itself always cancels out to exactly 0, which is rational. This shows that combining two irrational numbers does not always give an irrational result — it depends on the specific numbers involved.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered classifying and ordering real numbers.' },
        { minScore: 14, message: 'Great work! Review any missed questions on recurring decimals or ordering, then try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on rational and irrational numbers, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
