import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (shared across all three sections) ────────────────────────
// numerator / real solutions / general term → blue   (#2563eb)
// denominator / common difference           → orange (#ea580c)
// recurring pattern / specific term         → green  (#16a34a)
// non-real (no solution)                    → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Numbers and Patterns',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — IDENTIFYING RATIONAL NUMBERS AND CONVERTING DECIMAL FORMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rational-numbers-decimal-forms',
      title: 'Identifying Rational Numbers and Converting Decimal Forms',
      icon: '⅓',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>rational number</strong> can be written in the form ${bl('a')}/${or('b')} where ${bl('a')} and ${or('b')} are integers and ${or('b')} ≠ 0. We identify which numbers are rational, and we convert between terminating or recurring decimals and their fraction form ${bl('a')}/${or('b')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('numerator')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('denominator')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('recurring pattern')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key definitions</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Terminating decimal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A decimal that ends after a finite number of digits — for example, 0.75 or 3.5. These can always be written as a fraction.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Recurring decimal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A decimal where one or more digits repeat forever — for example, ${gr('0.333...')} or ${gr('0.142857142857...')}. These are also rational.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Irrational number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A number that cannot be written as ${bl('a')}/${or('b')} with integer ${bl('a')} and ${or('b')}. Examples: π, √2. Their decimals never terminate or recur.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Converting a recurring decimal to a fraction</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Let <strong>x</strong> equal the recurring decimal.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Multiply both sides by a power of 10 that shifts the ${gr('recurring block')} past the decimal point.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Subtract the original equation to eliminate the ${gr('recurring part')}, then solve for <strong>x</strong>.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">The fraction bar does not make a number rational</p>` +
        `<p style="margin:0;color:#1e3a8a;">Writing something with a fraction bar does not automatically make it rational. Both the ${bl('numerator')} and the ${or('denominator')} must be integers. π/2 looks like a fraction but is irrational because π is not an integer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Convert 0.75 to a fraction.',
          answer: `0.75 = ${bl('3')}/${or('4')}`,
          steps: [
            `Write the decimal over its place value: 0.75 = ${bl('75')}/${or('100')}.`,
            `Find the HCF of ${bl('75')} and ${or('100')}. The HCF is 25.`,
            `Simplify by dividing both by 25: ${bl('75')} ÷ 25 = ${bl('3')} and ${or('100')} ÷ 25 = ${or('4')}.`,
            `<strong>Answer:</strong> 0.75 = ${bl('3')}/${or('4')} ✓`,
          ],
        },
        {
          question: 'Convert the recurring decimal 0.333… to a fraction.',
          answer: `${gr('0.333…')} = ${bl('1')}/${or('3')}`,
          steps: [
            `Let <strong>x</strong> = ${gr('0.333…')}`,
            `Multiply both sides by 10: <strong>10x</strong> = ${gr('3.333…')}`,
            `Subtract the original equation: 10x − x = ${gr('3.333…')} − ${gr('0.333…')} = 3. So <strong>9x = 3</strong>.`,
            `Solve for x: x = ${bl('3')}/${or('9')} = ${bl('1')}/${or('3')}.`,
            `<strong>Answer:</strong> ${gr('0.333…')} = ${bl('1')}/${or('3')} ✓`,
          ],
        },
        {
          question: 'Sipho says π/2 is rational because it is written as a fraction. Is he correct?',
          answer: 'No — π/2 is irrational.',
          steps: [
            `For a number to be rational it must be expressible as ${bl('a')}/${or('b')} where both ${bl('a')} and ${or('b')} are <strong>integers</strong>.`,
            `In π/2, the ${bl('numerator')} is π — and π is an irrational number, not an integer.`,
            `The fraction bar alone does not make a number rational. Since π itself is irrational, π/2 is also irrational, even though it is written with a fraction bar.`,
            `<strong>Answer:</strong> No — Sipho is incorrect. π/2 is irrational. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Convert 0.6 to a fraction in simplest form.',
          answer: '3/5',
          checkMode: 'auto',
          correctAnswer: '3/5',
          explanation: '0.6 = 6/10. HCF of 6 and 10 is 2. Dividing both by 2: 6 ÷ 2 = 3, 10 ÷ 2 = 5. So 0.6 = 3/5 ✓',
        },

        // ── Q2 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Convert the recurring decimal 0.222... to a fraction.',
          answer: '2/9',
          checkMode: 'auto',
          correctAnswer: '2/9',
          explanation: 'Let x = 0.222... Multiply both sides by 10: 10x = 2.222... Subtract the original: 9x = 2. So x = 2/9 ✓',
        },

        // ── Q3 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Convert 0.454545... (repeating) to a fraction, showing your full method.',
          answer: 'Let x=0.454545... Then 100x=45.454545... Subtract: 100x-x=45. 99x=45. x=45/99=5/11.',
          checkMode: 'self',
        },

        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Is √4 rational or irrational?',
          answer: 'rational',
          checkMode: 'auto',
          correctAnswer: 'rational',
          explanation: '√4 = 2, which is an integer. It can be written as 2/1, a fraction of two integers, so it is rational ✓',
        },

        // ── Q5 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho says 0.125 is irrational because it has many decimal places. Is he correct? Explain.',
          answer: 'No — 0.125 is a terminating decimal, which means it can be written as an exact fraction (125/1000=1/8), making it rational.',
          checkMode: 'self',
        },

        // ── Q14 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle says every recurring decimal can be converted to a fraction. Is she correct? Explain.',
          answer: 'Yes — recurring decimals are, by definition, rational numbers, and all rational numbers can be expressed as a fraction a/b.',
          checkMode: 'self',
        },

        // ── Q15 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Convert 0.8333... (repeating from the 3) to a fraction.',
          answer: '5/6',
          checkMode: 'auto',
          correctAnswer: '5/6',
          explanation: 'Let x = 0.8333... Then 10x = 8.333... Subtract: 10x − x = 7.5. So 9x = 7.5, x = 7.5/9 = 75/90 = 5/6 ✓',
        },

        // ── Q19 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Convert 1.272727... (repeating from the 27) to a mixed number fraction.',
          answer: 'Let x=1.272727... Then 100x=127.2727... Subtract: 100x-x=126. 99x=126. x=126/99=14/11=1 and 3/11.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Number line showing rational numbers (terminating and recurring decimals as fractions) alongside irrational numbers such as π and √2 to contrast the two sets" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to convert a terminating decimal and a recurring decimal to fraction form a over b using the algebraic method" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — NON-REAL NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'non-real-numbers',
      title: 'Non-Real Numbers',
      icon: 'ℂ',
      explanation:
        `<p style="margin-bottom:16px;">Non-real numbers arise when we try to solve equations like x² = −1, where no real number squared gives a negative result. These numbers belong to the set of <strong>complex numbers</strong>, which is studied in more depth in later mathematics — at this level we simply recognise that such equations have ${re('no real solutions')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('real solutions')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('non-real / no real solution')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Why squaring never gives a negative result</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Positive × Positive</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(+3)² = (+3)(+3) = ${bl('+9')} — a positive result.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Negative × Negative</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(−3)² = (−3)(−3) = ${bl('+9')} — also a positive result.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Conclusion</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Squaring any real number always gives a ${bl('non-negative')} result. So x² = negative has ${re('no real solution')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">At Grade 10 level</p>` +
        `<p style="margin:0;color:#991b1b;">You only need to <em>recognise</em> when an equation has ${re('no real solutions')} because it requires the square root of a negative number. You are not expected to work with complex numbers yet — simply state that the equation has ${re('no real solutions')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Does x² = −9 have a real solution?',
          answer: `${re('No real solution')} — x² = −9 has no real solutions.`,
          steps: [
            `To solve x² = −9 we would need x = ±√(−9).`,
            `There is no real number that, when squared, gives a negative result — squaring any real number always gives a ${bl('non-negative')} result.`,
            `This equation has ${re('no real solutions')}. (Only non-real/complex solutions exist, which fall outside this course's scope.)`,
            `<strong>Answer:</strong> x² = −9 has ${re('no real solutions')}. ✓`,
          ],
        },
        {
          question: 'Lerato says x² = 4 and x² = −4 both have two real solutions. Is she correct?',
          answer: `No — only x² = 4 has ${bl('two real solutions')}; x² = −4 has ${re('no real solutions')}.`,
          steps: [
            `Consider x² = 4: we need x = ±√4 = ±2. Both ${bl('x = 2')} and ${bl('x = −2')} are real numbers. ✓ Two ${bl('real solutions')}.`,
            `Consider x² = −4: we would need x = ±√(−4). No real number squared gives −4, since squaring any real number gives a ${bl('non-negative')} result.`,
            `Therefore x² = −4 has ${re('no real solutions')}.`,
            `<strong>Answer:</strong> Lerato is incorrect. x² = 4 has two ${bl('real solutions')}, but x² = −4 has ${re('no real solutions')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q6 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Does x²=-16 have a real solution?',
          answer: 'no',
          checkMode: 'auto',
          correctAnswer: 'no',
          correctAnswers: ['no', 'No', 'no real solution', 'No real solution'],
          explanation: 'Squaring any real number always gives a non-negative result. x² = −16 has no real solution because the square root of a negative number is not real ✓',
        },

        // ── Q7 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Lerato solves x²=25 and says there is only one solution, x=5. Is she correct? Explain.',
          answer: 'No — there are two solutions, x=5 and x=-5, since both squared give 25.',
          checkMode: 'self',
        },

        // ── Q8 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Explain why x²+1=0 has no real solutions.',
          answer: 'This equation requires x²=-1, but no real number squared can produce a negative result, so there is no real solution.',
          checkMode: 'self',
        },

        // ── Q16 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says non-real solutions only occur with quadratic equations. Is this generally true at this level? Explain.',
          answer: 'Mostly yes at this level — equations like x²=negative number produce non-real results, while linear equations involving real coefficients typically have real solutions.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Number system diagram showing Real numbers containing Rational and Irrational subsets, with Complex numbers as the outer set that includes non-real numbers" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining why squaring a real number can never give a negative result and what it means for an equation to have no real solution" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — INVESTIGATING LINEAR NUMBER PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'linear-number-patterns',
      title: 'Investigating Linear Number Patterns',
      icon: '→',
      explanation:
        `<p style="margin-bottom:16px;">We investigate number patterns where there is a <strong>constant difference</strong> between consecutive terms, meaning the general term (nth term) is linear, of the form T<sub>n</sub> = ${or('d')}n + c, where ${or('d')} is the ${or('common difference')} and c is a constant found by working backwards from the pattern.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('common difference')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('general term (Tₙ)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('specific term value')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Finding the general term T<sub>n</sub> = ${or('d')}n + c</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Find the ${or('common difference')} <em>d</em> by subtracting any term from the next term.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Write the ${bl('general form')}: ${bl('Tₙ')} = ${or('d')}n + c.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Substitute a known term (usually n = 1) to find the constant c, then write the final ${bl('rule')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Substitute the required position number into the rule to find a ${gr('specific term')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#b45309;margin-bottom:6px;">Positive vs negative common difference</p>` +
        `<p style="margin:0;color:#78350f;">If the terms increase, the ${or('common difference')} is <strong>positive</strong> and the sequence goes up. If the terms decrease, the ${or('common difference')} is <strong>negative</strong> and the sequence goes down. Always check with more than one pair of consecutive terms.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the nth term of the pattern 5, 9, 13, 17.',
          answer: `${bl('Tₙ')} = ${or('4')}n + 1`,
          steps: [
            `Find the ${or('common difference')}: 9 − 5 = ${or('4')}, 13 − 9 = ${or('4')}, 17 − 13 = ${or('4')}. The ${or('common difference')} is ${or('4')}.`,
            `Write the ${bl('general form')}: ${bl('Tₙ')} = ${or('4')}n + c.`,
            `Substitute n = 1 with T₁ = 5: ${or('4')}(1) + c = 5 → c = 5 − 4 = 1.`,
            `<strong>Rule:</strong> ${bl('Tₙ')} = ${or('4')}n + 1 ✓`,
          ],
        },
        {
          question: 'Find the 5th and the nth term of the pattern 10, 7, 4, 1.',
          answer: `${bl('Tₙ')} = ${or('−3')}n + 13; 5th term = ${gr('−2')}`,
          steps: [
            `Find the ${or('common difference')}: 7 − 10 = ${or('−3')}, 4 − 7 = ${or('−3')}. The ${or('common difference')} is ${or('−3')}.`,
            `Write the ${bl('general form')}: ${bl('Tₙ')} = ${or('−3')}n + c.`,
            `Substitute n = 1 with T₁ = 10: ${or('−3')}(1) + c = 10 → c = 10 + 3 = 13.`,
            `<strong>Rule:</strong> ${bl('Tₙ')} = ${or('−3')}n + 13 ✓`,
            `Find the ${gr('5th term')}: T₅ = ${or('−3')}(5) + 13 = −15 + 13 = ${gr('−2')} ✓`,
          ],
        },
        {
          question: 'If the pattern MATHSMATHSMATHS… continues, what is the 267th letter?',
          answer: `The ${gr('267th')} letter is ${gr('A')}.`,
          steps: [
            `Identify the repeating block: M-A-T-H-S. The block has <strong>5 letters</strong> and repeats every ${or('5')} positions.`,
            `Divide 267 by ${or('5')} to find the position within the cycle: 267 ÷ ${or('5')} = 53 remainder <strong>2</strong>.`,
            `A remainder of 2 means the 267th letter is in position 2 of the repeating block MATHS.`,
            `Position 2 in MATHS is <strong>A</strong>.`,
            `<strong>Answer:</strong> The ${gr('267th')} letter is ${gr('A')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q9 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the next term in the pattern 6, 11, 16, 21.',
          answer: '26',
          checkMode: 'auto',
          correctAnswer: '26',
          explanation: 'Common difference = 11 − 6 = 5. Each term increases by 5. Next term: 21 + 5 = 26 ✓',
        },

        // ── Q10 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the nth term of the pattern 4, 10, 16, 22.',
          answer: 'Tₙ=6n-2',
          checkMode: 'auto',
          correctAnswer: 'Tₙ=6n-2',
          correctAnswers: ['Tₙ=6n-2', 'Tₙ = 6n - 2', '6n-2', '6n - 2'],
          explanation: 'Common difference = 6. General form: Tₙ = 6n + c. Substituting T₁ = 4: 6(1) + c = 4, so c = −2. Rule: Tₙ = 6n − 2 ✓',
        },

        // ── Q11 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Find the 5th and the nth term of the pattern 15, 11, 7, 3.',
          answer: 'Common difference=-4. Tₙ=-4n+c. Using n=1: -4+c=15, c=19. Rule: Tₙ=-4n+19. 5th term: -4(5)+19=-1.',
          checkMode: 'self',
        },

        // ── Q12 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: "Thabo's pattern is 8, 13, 18, 23. Find the 20th term.",
          answer: '103',
          checkMode: 'auto',
          correctAnswer: '103',
          explanation: 'Common difference = 5. Tₙ = 5n + c. T₁: 5(1) + c = 8, c = 3. Rule: Tₙ = 5n + 3. T₂₀ = 5(20) + 3 = 100 + 3 = 103 ✓',
        },

        // ── Q13 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'If the pattern XYZXYZXYZ... continues, what is the 50th letter?',
          answer: 'The pattern repeats every 3 letters. 50÷3=16 remainder 2. The 2nd letter in XYZ is Y. The 50th letter is Y.',
          checkMode: 'self',
        },

        // ── Q17 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the 100th term of the pattern 2, 6, 10, 14.',
          answer: '398',
          checkMode: 'auto',
          correctAnswer: '398',
          explanation: 'Common difference = 4. Tₙ = 4n + c. T₁: 4(1) + c = 2, c = −2. Rule: Tₙ = 4n − 2. T₁₀₀ = 4(100) − 2 = 400 − 2 = 398 ✓',
        },

        // ── Q18 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A pattern has nth term Tₙ=5n-3. Find which term number gives a value of 47.',
          answer: '5n-3=47. 5n=50. n=10. The 10th term equals 47.',
          checkMode: 'self',
        },

        // ── Q20 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Lerato's pattern is 20, 14, 8, 2. Find the term number when the value first becomes negative.",
          answer: 'Common difference=-6. Tₙ=-6n+26. Set Tₙ<0: -6n+26<0. -6n<-26. n>4.33. The 5th term is the first negative term: T₅=-6(5)+26=-4.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Table showing a linear pattern with term numbers n and term values T-n, arrows indicating the constant common difference between consecutive terms, and the general term formula T-n equals dn plus c labelled" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the common difference, set up the general term formula T-n equals dn plus c, and use it to calculate any specific term in a linear number pattern" />',
    },
  ],
  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered numbers and patterns.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered numbers and patterns.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
