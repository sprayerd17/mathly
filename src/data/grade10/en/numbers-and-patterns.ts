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
        'Number line showing rational numbers (terminating and recurring decimals as fractions) alongside irrational numbers such as π and √2 to contrast the two sets',
      diagramSvg:
        '<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg"><text x="160" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Rational vs irrational numbers on a number line</text><line x1="20" y1="70" x2="300" y2="70" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="300,70 292,65 292,75" fill="#0f1f3d"/><line x1="20" y1="65" x2="20" y2="75" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="92" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="160" y1="65" x2="160" y2="75" stroke="#0f1f3d" stroke-width="2"/><text x="160" y="92" font-size="11" fill="#374151" text-anchor="middle">1</text><line x1="300" y1="65" x2="300" y2="75" stroke="#0f1f3d" stroke-width="2"/><text x="300" y="92" font-size="11" fill="#374151" text-anchor="middle">2</text><circle cx="90" cy="70" r="4.5" fill="#2563eb"/><text x="90" y="55" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">1/2</text><circle cx="253" cy="70" r="4.5" fill="#2563eb"/><text x="253" y="55" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">5/3</text><circle cx="218" cy="70" r="4.5" fill="#dc2626"/><text x="218" y="112" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">√2</text><circle cx="263" cy="70" r="4.5" fill="#dc2626"/><text x="263" y="112" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">√3</text><text x="70" y="30" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">● rational (fraction a/b)</text><text x="240" y="30" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">● irrational (never repeats)</text></svg>',

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
        'Number system diagram showing Real numbers containing Rational and Irrational subsets, with Complex numbers as the outer set that includes non-real numbers',
      diagramSvg:
        '<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="20" width="240" height="170" rx="14" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/><text x="130" y="38" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">Complex numbers ℂ</text><text x="235" y="182" font-size="10" fill="#dc2626" font-weight="700" text-anchor="end">non-real, e.g. √−9</text><rect x="30" y="52" width="200" height="120" rx="12" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="130" y="68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">Real numbers ℝ</text><circle cx="95" cy="122" r="40" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="95" y="98" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">Rational ℚ</text><text x="95" y="130" font-size="10" fill="#166534" text-anchor="middle">1/2, 0.75,</text><text x="95" y="144" font-size="10" fill="#166534" text-anchor="middle">−3, 0.3̇</text><circle cx="185" cy="122" r="40" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/><text x="185" y="98" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">Irrational</text><text x="185" y="130" font-size="10" fill="#9a3412" text-anchor="middle">√2, π,</text><text x="185" y="144" font-size="10" fill="#9a3412" text-anchor="middle">non-repeating</text></svg>',

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
        'Table showing a linear pattern with term numbers n and term values Tₙ, arrows indicating the constant common difference between consecutive terms, and the general term formula Tₙ equals dn plus c labelled',
      diagramSvg:
        '<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg"><text x="150" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Pattern: 5, 9, 13, 17 …</text><g font-weight="700" text-anchor="middle"><rect x="15" y="30" width="55" height="34" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="42" y="52" font-size="16" fill="#2563eb">5</text><rect x="90" y="30" width="55" height="34" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="117" y="52" font-size="16" fill="#2563eb">9</text><rect x="165" y="30" width="55" height="34" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="192" y="52" font-size="16" fill="#2563eb">13</text><rect x="240" y="30" width="55" height="34" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="267" y="52" font-size="16" fill="#2563eb">17</text></g><path d="M 70,47 L 88,47" fill="none" stroke="#ea580c" stroke-width="2"/><polygon points="90,47 82,43 82,51" fill="#ea580c"/><text x="79" y="24" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">+4</text><path d="M 145,47 L 163,47" fill="none" stroke="#ea580c" stroke-width="2"/><polygon points="165,47 157,43 157,51" fill="#ea580c"/><text x="154" y="24" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">+4</text><path d="M 220,47 L 238,47" fill="none" stroke="#ea580c" stroke-width="2"/><polygon points="240,47 232,43 232,51" fill="#ea580c"/><text x="229" y="24" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">+4</text><text x="42" y="80" font-size="10" fill="#374151" text-anchor="middle">n = 1</text><text x="117" y="80" font-size="10" fill="#374151" text-anchor="middle">n = 2</text><text x="192" y="80" font-size="10" fill="#374151" text-anchor="middle">n = 3</text><text x="267" y="80" font-size="10" fill="#374151" text-anchor="middle">n = 4</text><rect x="60" y="98" width="180" height="30" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="150" y="119" font-size="14" fill="#16a34a" font-weight="700" text-anchor="middle">Tₙ = 4n + 1</text></svg>',

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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-2):   Classify a number as rational or irrational
    // Block 2 (3-5):   Convert a terminating decimal to a fraction
    // Block 3 (6-8):   Convert a recurring decimal to a fraction
    // Block 4 (9-11):  Non-real numbers — does x² = k have a real solution?
    // Block 5 (12-15): Linear number pattern — next term, nth term rule, specific term, find n
    // Block 6 (16-19): Hard — real-life pattern word problems, repeating-cycle problems, verification
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Classify rational or irrational (Easy)
        { difficulty: 'Easy', question: 'Is √49 rational or irrational?', checkMode: 'auto', correctAnswer: 'rational', answer: 'rational', explanation: '√49 = 7, which is an integer. It can be written as 7/1, a fraction of two integers, so it is rational ✓' },
        { difficulty: 'Easy', question: 'Is √10 rational or irrational?', checkMode: 'auto', correctAnswer: 'irrational', answer: 'irrational', explanation: '10 is not a perfect square, so √10 cannot be written as a whole number. Its decimal form never terminates or recurs, so it is irrational ✓' },
        { difficulty: 'Easy', question: 'Is 0.45 (a terminating decimal) rational or irrational?', checkMode: 'auto', correctAnswer: 'rational', answer: 'rational', explanation: 'A terminating decimal can always be written as a fraction of two integers (0.45 = 9/20), so it is rational ✓' },

        // Block 2 — Convert terminating decimal to fraction (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Convert 0.45 to a fraction in simplest form.', checkMode: 'auto', correctAnswer: '9/20', answer: '9/20', explanation: '0.45 = 45/100. HCF of 45 and 100 is 5. Dividing both by 5: 45 ÷ 5 = 9, 100 ÷ 5 = 20. So 0.45 = 9/20 ✓' },
        { difficulty: 'Easy-Medium', question: 'Convert 0.36 to a fraction in simplest form.', checkMode: 'auto', correctAnswer: '9/25', answer: '9/25', explanation: '0.36 = 36/100. HCF of 36 and 100 is 4. Dividing both by 4: 36 ÷ 4 = 9, 100 ÷ 4 = 25. So 0.36 = 9/25 ✓' },
        { difficulty: 'Easy-Medium', question: 'Convert 0.15 to a fraction in simplest form.', checkMode: 'auto', correctAnswer: '3/20', answer: '3/20', explanation: '0.15 = 15/100. HCF of 15 and 100 is 5. Dividing both by 5: 15 ÷ 5 = 3, 100 ÷ 5 = 20. So 0.15 = 3/20 ✓' },

        // Block 3 — Convert recurring decimal to fraction (Medium)
        { difficulty: 'Medium', question: 'Convert the recurring decimal 0.777... to a fraction.', checkMode: 'auto', correctAnswer: '7/9', answer: '7/9', explanation: 'Let x = 0.777... Multiply both sides by 10: 10x = 7.777... Subtract the original: 9x = 7. So x = 7/9 ✓' },
        { difficulty: 'Medium', question: 'Convert 0.1666... (repeating from the 6) to a fraction.', checkMode: 'auto', correctAnswer: '1/6', answer: '1/6', explanation: 'Let x = 0.1666... Then 10x = 1.666... and 100x = 16.666... Subtracting: 100x − 10x = 15, so 90x = 15, x = 15/90 = 1/6 ✓' },
        { difficulty: 'Medium', question: 'Convert 0.363636... (repeating) to a fraction.', checkMode: 'auto', correctAnswer: '4/11', answer: '4/11', explanation: 'Let x = 0.363636... Then 100x = 36.363636... Subtracting: 100x − x = 36, so 99x = 36, x = 36/99 = 4/11 ✓' },

        // Block 4 — Non-real numbers (Easy-Medium / Medium)
        { difficulty: 'Easy-Medium', question: 'Does x² = 36 have a real solution?', checkMode: 'auto', correctAnswer: 'yes', answer: 'yes', explanation: 'x = ±√36 = ±6. Both 6 and −6 are real numbers, so x² = 36 has two real solutions ✓' },
        { difficulty: 'Medium', question: 'Does x² = −81 have a real solution?', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No', 'no real solution', 'No real solution'], answer: 'no', explanation: 'Squaring any real number always gives a non-negative result. x² = −81 has no real solution because the square root of a negative number is not real ✓' },
        { difficulty: 'Medium', question: 'How many real solutions does x² + 49 = 0 have?', checkMode: 'auto', correctAnswer: '0', answer: '0', explanation: 'x² + 49 = 0 means x² = −49. No real number squared gives a negative result, so there are 0 real solutions ✓' },

        // Block 5 — Linear number pattern (Medium-Hard)
        { difficulty: 'Medium', question: 'Find the next term in the pattern 7, 12, 17, 22.', checkMode: 'auto', correctAnswer: '27', answer: '27', explanation: 'Common difference = 12 − 7 = 5. Each term increases by 5. Next term: 22 + 5 = 27 ✓' },
        { difficulty: 'Medium', question: 'Find the nth term of the pattern 4, 9, 14, 19.', checkMode: 'auto', correctAnswer: 'Tₙ=5n-1', correctAnswers: ['Tₙ=5n-1', 'Tₙ = 5n - 1', '5n-1', '5n - 1'], answer: 'Tₙ = 5n − 1', explanation: 'Common difference = 5. General form: Tₙ = 5n + c. Substituting T₁ = 4: 5(1) + c = 4, so c = −1. Rule: Tₙ = 5n − 1 ✓' },
        { difficulty: 'Medium-Hard', question: "Sipho's pattern is 4, 9, 14, 19. Find the 25th term.", checkMode: 'auto', correctAnswer: '124', answer: '124', explanation: 'Common difference = 5. Tₙ = 5n − 1 (from the rule above). T₂₅ = 5(25) − 1 = 125 − 1 = 124 ✓' },
        { difficulty: 'Hard', question: 'A pattern has nth term Tₙ=7n-3. Find which term number gives a value of 95.', checkMode: 'auto', correctAnswer: '14', answer: '14', explanation: '7n − 3 = 95. 7n = 98. n = 14. The 14th term equals 95 ✓' },

        // Block 6 — Hard: real-life pattern problems, repeating cycles, self-check verification
        { difficulty: 'Hard', question: "Lerato's savings (in rand) at the end of each week form the pattern 150, 280, 410, 540. Find the rule and predict her savings at the end of week 12.", checkMode: 'auto', correctAnswer: '1580', answer: '1580', explanation: 'Common difference = 130. Tₙ = 130n + c. T₁: 130(1) + c = 150, c = 20. Rule: Tₙ = 130n + 20. T₁₂ = 130(12) + 20 = 1560 + 20 = R1580 ✓' },
        { difficulty: 'Hard', question: 'If the pattern ALGEBRAALGEBRAALGEBRA... continues, what is the 100th letter?', checkMode: 'auto', correctAnswer: 'L', answer: 'L', explanation: 'The repeating block ALGEBRA has 7 letters. 100 ÷ 7 = 14 remainder 2. The 2nd letter of ALGEBRA is L. The 100th letter is L ✓' },
        { difficulty: 'Hard', question: 'Amahle says every terminating decimal is rational, but every recurring decimal is irrational. Is she correct? Explain.', answer: 'No — both terminating and recurring decimals are rational, because both can be written as a fraction a/b of two integers. Only decimals that never terminate or recur (like π) are irrational.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo says x²=64 and x²=-64 both have two real solutions. Verify whether this is true for each equation.', answer: 'x²=64: x=±8, both real, so two real solutions. x²=-64: would need x=±√(-64), but no real number squared gives a negative result, so no real solutions exist. Thabo is only correct for x²=64.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered numbers and patterns.' },
        { minScore: 15, message: 'Great work! Review any missed questions on decimals or number patterns and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on converting decimals and finding the nth term, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Classify rational or irrational (Easy)
        { difficulty: 'Easy', question: 'Is √81 rational or irrational?', checkMode: 'auto', correctAnswer: 'rational', answer: 'rational', explanation: '√81 = 9, which is an integer. It can be written as 9/1, a fraction of two integers, so it is rational ✓' },
        { difficulty: 'Easy', question: 'Is √2 rational or irrational?', checkMode: 'auto', correctAnswer: 'irrational', answer: 'irrational', explanation: '2 is not a perfect square, so √2 cannot be written as a whole number. Its decimal form never terminates or recurs, so it is irrational ✓' },
        { difficulty: 'Easy', question: 'Is 0.72 (a terminating decimal) rational or irrational?', checkMode: 'auto', correctAnswer: 'rational', answer: 'rational', explanation: 'A terminating decimal can always be written as a fraction of two integers (0.72 = 18/25), so it is rational ✓' },

        // Block 2 — Convert terminating decimal to fraction (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Convert 0.64 to a fraction in simplest form.', checkMode: 'auto', correctAnswer: '16/25', answer: '16/25', explanation: '0.64 = 64/100. HCF of 64 and 100 is 4. Dividing both by 4: 64 ÷ 4 = 16, 100 ÷ 4 = 25. So 0.64 = 16/25 ✓' },
        { difficulty: 'Easy-Medium', question: 'Convert 0.85 to a fraction in simplest form.', checkMode: 'auto', correctAnswer: '17/20', answer: '17/20', explanation: '0.85 = 85/100. HCF of 85 and 100 is 5. Dividing both by 5: 85 ÷ 5 = 17, 100 ÷ 5 = 20. So 0.85 = 17/20 ✓' },
        { difficulty: 'Easy-Medium', question: 'Convert 0.55 to a fraction in simplest form.', checkMode: 'auto', correctAnswer: '11/20', answer: '11/20', explanation: '0.55 = 55/100. HCF of 55 and 100 is 5. Dividing both by 5: 55 ÷ 5 = 11, 100 ÷ 5 = 20. So 0.55 = 11/20 ✓' },

        // Block 3 — Convert recurring decimal to fraction (Medium)
        { difficulty: 'Medium', question: 'Convert the recurring decimal 0.444... to a fraction.', checkMode: 'auto', correctAnswer: '4/9', answer: '4/9', explanation: 'Let x = 0.444... Multiply both sides by 10: 10x = 4.444... Subtract the original: 9x = 4. So x = 4/9 ✓' },
        { difficulty: 'Medium', question: 'Convert 0.4166... (repeating from the 6) to a fraction.', checkMode: 'auto', correctAnswer: '5/12', answer: '5/12', explanation: 'Let x = 0.4166... Then 10x = 4.166... and 100x = 41.666... Subtracting: 100x − 10x = 37.5, so 90x = 37.5, x = 37.5/90 = 5/12 ✓' },
        { difficulty: 'Medium', question: 'Convert 0.727272... (repeating) to a fraction.', checkMode: 'auto', correctAnswer: '8/11', answer: '8/11', explanation: 'Let x = 0.727272... Then 100x = 72.727272... Subtracting: 100x − x = 72, so 99x = 72, x = 72/99 = 8/11 ✓' },

        // Block 4 — Non-real numbers (Easy-Medium / Medium)
        { difficulty: 'Easy-Medium', question: 'Does x² = 144 have a real solution?', checkMode: 'auto', correctAnswer: 'yes', answer: 'yes', explanation: 'x = ±√144 = ±12. Both 12 and −12 are real numbers, so x² = 144 has two real solutions ✓' },
        { difficulty: 'Medium', question: 'Does x² = −121 have a real solution?', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No', 'no real solution', 'No real solution'], answer: 'no', explanation: 'Squaring any real number always gives a non-negative result. x² = −121 has no real solution because the square root of a negative number is not real ✓' },
        { difficulty: 'Medium', question: 'How many real solutions does x² + 25 = 0 have?', checkMode: 'auto', correctAnswer: '0', answer: '0', explanation: 'x² + 25 = 0 means x² = −25. No real number squared gives a negative result, so there are 0 real solutions ✓' },

        // Block 5 — Linear number pattern (Medium-Hard)
        { difficulty: 'Medium', question: 'Find the next term in the pattern 5, 11, 17, 23.', checkMode: 'auto', correctAnswer: '29', answer: '29', explanation: 'Common difference = 11 − 5 = 6. Each term increases by 6. Next term: 23 + 6 = 29 ✓' },
        { difficulty: 'Medium', question: 'Find the nth term of the pattern 6, 13, 20, 27.', checkMode: 'auto', correctAnswer: 'Tₙ=7n-1', correctAnswers: ['Tₙ=7n-1', 'Tₙ = 7n - 1', '7n-1', '7n - 1'], answer: 'Tₙ = 7n − 1', explanation: 'Common difference = 7. General form: Tₙ = 7n + c. Substituting T₁ = 6: 7(1) + c = 6, so c = −1. Rule: Tₙ = 7n − 1 ✓' },
        { difficulty: 'Medium-Hard', question: "Lerato's pattern is 6, 13, 20, 27. Find the 30th term.", checkMode: 'auto', correctAnswer: '209', answer: '209', explanation: 'Common difference = 7. Tₙ = 7n − 1 (from the rule above). T₃₀ = 7(30) − 1 = 210 − 1 = 209 ✓' },
        { difficulty: 'Hard', question: 'A pattern has nth term Tₙ=8n-6. Find which term number gives a value of 90.', checkMode: 'auto', correctAnswer: '12', answer: '12', explanation: '8n − 6 = 90. 8n = 96. n = 12. The 12th term equals 90 ✓' },

        // Block 6 — Hard: real-life pattern problems, repeating cycles, self-check verification
        { difficulty: 'Hard', question: "Thabo's savings (in rand) at the end of each week form the pattern 175, 320, 465, 610. Find the rule and predict his savings at the end of week 10.", checkMode: 'auto', correctAnswer: '1480', answer: '1480', explanation: 'Common difference = 145. Tₙ = 145n + c. T₁: 145(1) + c = 175, c = 30. Rule: Tₙ = 145n + 30. T₁₀ = 145(10) + 30 = 1450 + 30 = R1480 ✓' },
        { difficulty: 'Hard', question: 'If the pattern PATTERNPATTERNPATTERN... continues, what is the 130th letter?', checkMode: 'auto', correctAnswer: 'T', answer: 'T', explanation: 'The repeating block PATTERN has 7 letters. 130 ÷ 7 = 18 remainder 4. The 4th letter of PATTERN is T. The 130th letter is T ✓' },
        { difficulty: 'Hard', question: 'Sipho says every recurring decimal can be converted to a fraction, but π cannot. Is he correct? Explain.', answer: 'Yes — recurring decimals are, by definition, rational and can always be expressed as a/b. π is irrational: its decimal never terminates or recurs, so it cannot be written as an exact fraction of two integers.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle says x²=49 and x²=-49 both have two real solutions. Verify whether this is true for each equation.', answer: 'x²=49: x=±7, both real, so two real solutions. x²=-49: would need x=±√(-49), but no real number squared gives a negative result, so no real solutions exist. Amahle is only correct for x²=49.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered numbers and patterns.' },
        { minScore: 15, message: 'Great work! Review any missed questions on decimals or number patterns and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on converting decimals and finding the nth term, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Classify rational or irrational (Easy)
        { difficulty: 'Easy', question: 'Is √121 rational or irrational?', checkMode: 'auto', correctAnswer: 'rational', answer: 'rational', explanation: '√121 = 11, which is an integer. It can be written as 11/1, a fraction of two integers, so it is rational ✓' },
        { difficulty: 'Easy', question: 'Is √3 rational or irrational?', checkMode: 'auto', correctAnswer: 'irrational', answer: 'irrational', explanation: '3 is not a perfect square, so √3 cannot be written as a whole number. Its decimal form never terminates or recurs, so it is irrational ✓' },
        { difficulty: 'Easy', question: 'Is 0.28 (a terminating decimal) rational or irrational?', checkMode: 'auto', correctAnswer: 'rational', answer: 'rational', explanation: 'A terminating decimal can always be written as a fraction of two integers (0.28 = 7/25), so it is rational ✓' },

        // Block 2 — Convert terminating decimal to fraction (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Convert 0.35 to a fraction in simplest form.', checkMode: 'auto', correctAnswer: '7/20', answer: '7/20', explanation: '0.35 = 35/100. HCF of 35 and 100 is 5. Dividing both by 5: 35 ÷ 5 = 7, 100 ÷ 5 = 20. So 0.35 = 7/20 ✓' },
        { difficulty: 'Easy-Medium', question: 'Convert 0.65 to a fraction in simplest form.', checkMode: 'auto', correctAnswer: '13/20', answer: '13/20', explanation: '0.65 = 65/100. HCF of 65 and 100 is 5. Dividing both by 5: 65 ÷ 5 = 13, 100 ÷ 5 = 20. So 0.65 = 13/20 ✓' },
        { difficulty: 'Easy-Medium', question: 'Convert 0.125 to a fraction in simplest form.', checkMode: 'auto', correctAnswer: '1/8', answer: '1/8', explanation: '0.125 = 125/1000. HCF of 125 and 1000 is 125. Dividing both by 125: 125 ÷ 125 = 1, 1000 ÷ 125 = 8. So 0.125 = 1/8 ✓' },

        // Block 3 — Convert recurring decimal to fraction (Medium)
        { difficulty: 'Medium', question: 'Convert the recurring decimal 0.555... to a fraction.', checkMode: 'auto', correctAnswer: '5/9', answer: '5/9', explanation: 'Let x = 0.555... Multiply both sides by 10: 10x = 5.555... Subtract the original: 9x = 5. So x = 5/9 ✓' },
        { difficulty: 'Medium', question: 'Convert 0.91666... (repeating from the 6) to a fraction.', checkMode: 'auto', correctAnswer: '11/12', answer: '11/12', explanation: 'Let x = 0.91666... Then 10x = 9.1666... and 100x = 91.666... Subtracting: 100x − 10x = 82.5, so 90x = 82.5, x = 82.5/90 = 11/12 ✓' },
        { difficulty: 'Medium', question: 'Convert 0.636363... (repeating) to a fraction.', checkMode: 'auto', correctAnswer: '7/11', answer: '7/11', explanation: 'Let x = 0.636363... Then 100x = 63.636363... Subtracting: 100x − x = 63, so 99x = 63, x = 63/99 = 7/11 ✓' },

        // Block 4 — Non-real numbers (Easy-Medium / Medium)
        { difficulty: 'Easy-Medium', question: 'Does x² = 169 have a real solution?', checkMode: 'auto', correctAnswer: 'yes', answer: 'yes', explanation: 'x = ±√169 = ±13. Both 13 and −13 are real numbers, so x² = 169 has two real solutions ✓' },
        { difficulty: 'Medium', question: 'Does x² = −100 have a real solution?', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No', 'no real solution', 'No real solution'], answer: 'no', explanation: 'Squaring any real number always gives a non-negative result. x² = −100 has no real solution because the square root of a negative number is not real ✓' },
        { difficulty: 'Medium', question: 'How many real solutions does x² + 64 = 0 have?', checkMode: 'auto', correctAnswer: '0', answer: '0', explanation: 'x² + 64 = 0 means x² = −64. No real number squared gives a negative result, so there are 0 real solutions ✓' },

        // Block 5 — Linear number pattern (Medium-Hard)
        { difficulty: 'Medium', question: 'Find the next term in the pattern 9, 15, 21, 27.', checkMode: 'auto', correctAnswer: '33', answer: '33', explanation: 'Common difference = 15 − 9 = 6. Each term increases by 6. Next term: 27 + 6 = 33 ✓' },
        { difficulty: 'Medium', question: 'Find the nth term of the pattern 3, 8, 13, 18.', checkMode: 'auto', correctAnswer: 'Tₙ=5n-2', correctAnswers: ['Tₙ=5n-2', 'Tₙ = 5n - 2', '5n-2', '5n - 2'], answer: 'Tₙ = 5n − 2', explanation: 'Common difference = 5. General form: Tₙ = 5n + c. Substituting T₁ = 3: 5(1) + c = 3, so c = −2. Rule: Tₙ = 5n − 2 ✓' },
        { difficulty: 'Medium-Hard', question: "Amahle's pattern is 3, 8, 13, 18. Find the 40th term.", checkMode: 'auto', correctAnswer: '198', answer: '198', explanation: 'Common difference = 5. Tₙ = 5n − 2 (from the rule above). T₄₀ = 5(40) − 2 = 200 − 2 = 198 ✓' },
        { difficulty: 'Hard', question: 'A pattern has nth term Tₙ=6n+7. Find which term number gives a value of 97.', checkMode: 'auto', correctAnswer: '15', answer: '15', explanation: '6n + 7 = 97. 6n = 90. n = 15. The 15th term equals 97 ✓' },

        // Block 6 — Hard: real-life pattern problems, repeating cycles, self-check verification
        { difficulty: 'Hard', question: "Sipho's savings (in rand) at the end of each week form the pattern 210, 305, 400, 495. Find the rule and predict his savings at the end of week 15.", checkMode: 'auto', correctAnswer: '1540', answer: '1540', explanation: 'Common difference = 95. Tₙ = 95n + c. T₁: 95(1) + c = 210, c = 115. Rule: Tₙ = 95n + 115. T₁₅ = 95(15) + 115 = 1425 + 115 = R1540 ✓' },
        { difficulty: 'Hard', question: 'If the pattern NUMBERNUMBERNUMBER... continues, what is the 245th letter?', checkMode: 'auto', correctAnswer: 'E', answer: 'E', explanation: 'The repeating block NUMBER has 6 letters. 245 ÷ 6 = 40 remainder 5. The 5th letter of NUMBER is E. The 245th letter is E ✓' },
        { difficulty: 'Hard', question: 'Lerato says 0.125 is irrational because it has three decimal places, and 0.363636... is also irrational because it never ends. Is she correct? Explain.', answer: 'No — 0.125 is a terminating decimal, so it is rational (0.125 = 1/8). And 0.363636... is a recurring decimal, which is also rational (it equals 4/11), even though its digits never stop. Only non-terminating, non-recurring decimals like π are irrational.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bongani says x²=100 and x²=-100 both have two real solutions. Verify whether this is true for each equation.', answer: 'x²=100: x=±10, both real, so two real solutions. x²=-100: would need x=±√(-100), but no real number squared gives a negative result, so no real solutions exist. Bongani is only correct for x²=100.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered numbers and patterns.' },
        { minScore: 15, message: 'Great work! Review any missed questions on decimals or number patterns and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on converting decimals and finding the nth term, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
