import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (algebraic expression roles) ──────────────────────────────
// variable / x term         → blue   (#2563eb)
// coefficient               → orange (#ea580c)
// constant / y term / final → green  (#16a34a)
// mismatched / error term   → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebraic Expressions',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS AN ALGEBRAIC EXPRESSION?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-an-algebraic-expression',
      title: 'What is an Algebraic Expression?',
      icon: 'x',
      explanation:
        `<p style="margin-bottom:16px;">An <strong>algebraic expression</strong> is a mathematical phrase that contains numbers, variables and operations, but <strong>no equals sign</strong>. A <strong>term</strong> is a single part of an expression separated by + or − signs. A <strong>coefficient</strong> is the number in front of a variable. A <strong>constant</strong> is a term with no variable. We can <strong>substitute</strong> values for variables to evaluate an expression.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('variable')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('coefficient')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('constant')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Algebraic expression</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A phrase with numbers, ${bl('variables')} and operations — but no equals sign. Example: ${or('5')}${bl('x')} + ${or('3')}${bl('y')} − ${gr('7')}.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Term</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A single part separated by + or − signs. In ${or('5')}${bl('x')} + ${or('3')}${bl('y')} − ${gr('7')}, the terms are ${or('5')}${bl('x')}, ${or('3')}${bl('y')} and ${gr('−7')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Coefficient</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${or('number in front of a variable')}. In ${or('5')}${bl('x')} the coefficient is ${or('5')}; in ${or('3')}${bl('y')} the coefficient is ${or('3')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Constant</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A term with ${gr('no variable')} — its value never changes. In ${or('5')}${bl('x')} + ${or('3')}${bl('y')} − ${gr('7')}, the constant is ${gr('−7')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Variable</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A letter that ${bl('represents an unknown value')}. Common variables are ${bl('x')}, ${bl('y')}, ${bl('a')} and ${bl('b')}. We substitute a number for it to evaluate the expression.</p>` +
        `</div>` +

        `</div>` +

        // ── Substitution tip ─────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to evaluate an expression</p>` +
        `<p style="margin:0;color:#1e3a8a;">Replace each ${bl('variable')} with the given number and then calculate using BODMAS. Always write the substitution step before you simplify — this helps you avoid errors.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Identify the terms, coefficients and constant in ${or('5')}${bl('x')} + ${or('3')}${bl('y')} − ${gr('7')}.`,
          answer: `Terms: ${or('5')}${bl('x')}, ${or('3')}${bl('y')}, ${gr('−7')} · Coefficients: ${or('5')} and ${or('3')} · Constant: ${gr('−7')}`,
          steps: [
            `Terms are separated by + or − signs. The three terms are ${or('5')}${bl('x')}, ${or('3')}${bl('y')} and ${gr('−7')}.`,
            `Coefficients are the numbers in front of variables. The coefficients are ${or('5')} (in front of ${bl('x')}) and ${or('3')} (in front of ${bl('y')}).`,
            `The constant is ${gr('−7')} — it has no variable and its value never changes.`,
          ],
        },
        {
          question: `Evaluate ${or('4')}${bl('x')} + ${gr('9')} when ${bl('x')} = 6.`,
          answer: `${or('4')}(6) + ${gr('9')} = 24 + 9 = <strong>33</strong>`,
          steps: [
            `Substitute ${bl('x')} = 6: replace ${bl('x')} with 6. The expression becomes ${or('4')}(6) + ${gr('9')}.`,
            `Multiply first (BODMAS): ${or('4')} × 6 = 24. The expression becomes 24 + ${gr('9')}.`,
            `Add: 24 + ${gr('9')} = <strong>33</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Identify the coefficient of x in 7x + 4.',
          answer: '7',
          checkMode: 'auto',
          correctAnswer: '7',
          explanation: 'The coefficient is the number in front of the variable. In 7x the number in front of x is 7.',
        },

        // ── Q2 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Evaluate 3x + 8 when x = 5.',
          answer: '23',
          checkMode: 'auto',
          correctAnswer: '23',
          explanation: 'Substitute x = 5: 3(5) + 8 = 15 + 8 = 23 ✓',
        },

        // ── Q3 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Evaluate 2x² − 3 when x = 4.',
          answer: '29',
          checkMode: 'auto',
          correctAnswer: '29',
          explanation: 'Substitute x = 4: 2(4²) − 3 = 2(16) − 3 = 32 − 3 = 29 ✓',
        },

        // ── Q4 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says the constant in 6x − 9 + 2y is −9. Is he correct? Explain.',
          answer: 'Yes — a constant is a term with no variable, and −9 has no variable attached.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Labeled breakdown of the expression 5x + 3y − 7 showing the coefficients 5 and 3 boxed in orange, the variables x and y boxed in blue, and the constant −7 boxed in green, with the three terms bracketed and labeled underneath',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 140" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="20" y="15" width="26" height="32" rx="4" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>` +
        `<text x="33" y="37" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">5</text>` +
        `<rect x="50" y="15" width="26" height="32" rx="4" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="63" y="37" text-anchor="middle" font-size="18" font-weight="700" fill="#2563eb">x</text>` +
        `<text x="85" y="37" text-anchor="middle" font-size="18" font-weight="700" fill="#0f1f3d">+</text>` +
        `<rect x="100" y="15" width="26" height="32" rx="4" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>` +
        `<text x="113" y="37" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">3</text>` +
        `<rect x="130" y="15" width="26" height="32" rx="4" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="143" y="37" text-anchor="middle" font-size="18" font-weight="700" fill="#2563eb">y</text>` +
        `<text x="165" y="37" text-anchor="middle" font-size="18" font-weight="700" fill="#16a34a">−</text>` +
        `<rect x="180" y="15" width="26" height="32" rx="4" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>` +
        `<text x="193" y="37" text-anchor="middle" font-size="18" font-weight="700" fill="#16a34a">7</text>` +
        `<line x1="33" y1="47" x2="33" y2="60" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="33" y="72" text-anchor="middle" font-size="9" font-weight="700" fill="#ea580c">coefficient</text>` +
        `<line x1="113" y1="47" x2="113" y2="60" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="113" y="72" text-anchor="middle" font-size="9" font-weight="700" fill="#ea580c">coefficient</text>` +
        `<line x1="193" y1="47" x2="193" y2="60" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="193" y="72" text-anchor="middle" font-size="9" font-weight="700" fill="#16a34a">constant</text>` +
        `<line x1="63" y1="47" x2="63" y2="85" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="63" y="97" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">variable</text>` +
        `<line x1="143" y1="47" x2="143" y2="85" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="143" y="97" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">variable</text>` +
        `<line x1="20" y1="104" x2="20" y2="108" stroke="#6b7280" stroke-width="1.5"/>` +
        `<line x1="76" y1="104" x2="76" y2="108" stroke="#6b7280" stroke-width="1.5"/>` +
        `<line x1="20" y1="108" x2="76" y2="108" stroke="#6b7280" stroke-width="1.5"/>` +
        `<text x="48" y="122" text-anchor="middle" font-size="8" font-weight="700" fill="#6b7280">term 1</text>` +
        `<line x1="100" y1="104" x2="100" y2="108" stroke="#6b7280" stroke-width="1.5"/>` +
        `<line x1="156" y1="104" x2="156" y2="108" stroke="#6b7280" stroke-width="1.5"/>` +
        `<line x1="100" y1="108" x2="156" y2="108" stroke="#6b7280" stroke-width="1.5"/>` +
        `<text x="128" y="122" text-anchor="middle" font-size="8" font-weight="700" fill="#6b7280">term 2</text>` +
        `<line x1="180" y1="104" x2="180" y2="108" stroke="#6b7280" stroke-width="1.5"/>` +
        `<line x1="206" y1="104" x2="206" y2="108" stroke="#6b7280" stroke-width="1.5"/>` +
        `<line x1="180" y1="108" x2="206" y2="108" stroke="#6b7280" stroke-width="1.5"/>` +
        `<text x="193" y="122" text-anchor="middle" font-size="8" font-weight="700" fill="#6b7280">term 3</text>` +
        `</svg>`,

      videoPlaceholder:
        'Short video explaining what an algebraic expression is identifying terms coefficients and constants and showing how to evaluate an expression by substituting a value for the variable',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — LIKE AND UNLIKE TERMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'like-and-unlike-terms',
      title: 'Like and Unlike Terms',
      icon: '≡',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Like terms</strong> have exactly the same variable raised to the same power — they can be combined by adding or subtracting their coefficients. <strong>Unlike terms</strong> have different variables or different powers and cannot be combined.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x terms')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y terms')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('mismatched terms')}</span>` +
        `</div>` +

        // ── Like vs unlike ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Like terms vs unlike terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Like terms ✓</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Same variable, <strong>same power</strong>. Their coefficients can be added or subtracted.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Examples: ${bl('3x')} and ${bl('−2x')} · ${gr('5y')} and ${gr('7y')} · 4 and 9</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Unlike terms ✗</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Different variables <strong>or</strong> different powers. They cannot be combined.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Examples: ${re('4x')} and ${re('4x²')} · ${re('3a')} and ${re('3b')} · ${re('5x')} and ${re('5')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Same variable AND same power</p>` +
        `<p style="margin:0;color:#1e3a8a;">Both conditions must be true for terms to be like terms. ${bl('x')} and ${re('x²')} look similar but are unlike terms — the powers differ (1 ≠ 2). The coefficient does <em>not</em> affect whether terms are like or unlike.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Identify the like terms in ${bl('3x')} + ${gr('5y')} − ${bl('2x')} + ${gr('7y')}.`,
          answer: `${bl('3x')} and ${bl('−2x')} are like terms · ${gr('5y')} and ${gr('7y')} are like terms`,
          steps: [
            `${bl('3x')} and ${bl('−2x')} are like terms — both have variable ${bl('x')} to the power 1.`,
            `${gr('5y')} and ${gr('7y')} are like terms — both have variable ${gr('y')} to the power 1.`,
          ],
        },
        {
          question: `Sipho says ${bl('4x')} and ${re('4x²')} are like terms. Is he correct?`,
          answer: `Sipho is <strong>incorrect</strong> — ${bl('4x')} and ${re('4x²')} are unlike terms`,
          steps: [
            `${bl('4x')} has variable ${bl('x')} to the power <strong>1</strong>.`,
            `${re('4x²')} has variable ${re('x')} to the power <strong>2</strong>.`,
            `Different powers mean they are unlike terms — even though the coefficient (4) and the variable letter (x) are the same.`,
            `Sipho is <strong>incorrect</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q5 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Are 7x and 3x like terms?',
          answer: 'Yes',
          checkMode: 'auto',
          correctAnswer: 'Yes',
          correctAnswers: ['Yes', 'yes'],
          explanation: 'Both terms have the same variable x to the power 1, so they are like terms.',
        },

        // ── Q6 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Are 5x and 5x² like terms? Explain.',
          answer: 'No — they have different powers of x, so they are unlike terms.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video explaining the difference between like and unlike terms using colour coding and showing why terms with different variables or different powers cannot be combined',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SIMPLIFYING EXPRESSIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simplifying-expressions',
      title: 'Simplifying Expressions',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">To <strong>simplify</strong> an algebraic expression we <strong>combine like terms</strong> by adding or subtracting their coefficients, keeping the variable the same. We work through the expression systematically, grouping like terms together before combining.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('like terms grouped in matching colour')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final simplified expression')}</span>` +
        `</div>` +

        // ── Steps to simplify ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps to simplify an expression</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identify like terms')} — look through the expression and find all terms that share the same variable and the same power.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Group like terms')} — rewrite the expression with like terms next to each other inside brackets. Always take the sign (+ or −) with the term.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Combine')} — add or subtract the coefficients within each group. Write the variable once. This gives the simplified expression.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Keep the sign with its term</p>` +
        `<p style="margin:0;color:#1e3a8a;">When grouping terms, always move the sign (+ or −) in front of a term together with that term. Losing a sign is the most common error when simplifying algebraic expressions.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Simplify ${bl('6x')} + ${gr('3y')} − ${bl('2x')} + ${gr('5y')}.`,
          answer: `${gr('4x + 8y')}`,
          steps: [
            `Group like terms: (${bl('6x')} − ${bl('2x')}) + (${gr('3y')} + ${gr('5y')}).`,
            `Combine: ${gr('4x + 8y')}.`,
          ],
        },
        {
          question: `Simplify ${bl('9a')} − ${gr('4b')} + ${bl('2a')} + ${gr('7b')} − ${bl('3a')}.`,
          answer: `${gr('8a + 3b')}`,
          steps: [
            `Group ${bl('a')} terms: ${bl('9a')} + ${bl('2a')} − ${bl('3a')} = ${bl('8a')}.`,
            `Group ${gr('b')} terms: −${gr('4b')} + ${gr('7b')} = ${gr('3b')}.`,
            `Answer: ${gr('8a + 3b')}.`,
          ],
        },
        {
          question: `Lerato simplifies ${bl('5x')} + ${gr('3')} − ${bl('2x')} + ${gr('8')} and gets ${re('3x + 5')}. Check her answer.`,
          answer: `Lerato is <strong>incorrect</strong> — the correct answer is ${gr('3x + 11')}`,
          steps: [
            `Group ${bl('x')} terms: ${bl('5x')} − ${bl('2x')} = ${bl('3x')}.`,
            `Group constants: ${gr('3')} + ${gr('8')} = ${gr('11')}.`,
            `Correct answer is ${gr('3x + 11')}, so Lerato made an error.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Simplify 4x + 3x.',
          answer: '7x',
          checkMode: 'auto',
          correctAnswer: '7x',
          explanation: '4x + 3x = (4 + 3)x = 7x ✓',
        },

        // ── Q8 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Simplify 8y − 3y + 2y.',
          answer: '7y',
          checkMode: 'auto',
          correctAnswer: '7y',
          explanation: '8y − 3y + 2y = (8 − 3 + 2)y = 7y ✓',
        },

        // ── Q9 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Simplify 5a + 3b − 2a + 6b.',
          answer: '3a + 9b',
          checkMode: 'auto',
          correctAnswer: '3a+9b',
          correctAnswers: ['3a+9b', '3a + 9b'],
          explanation: 'Group like terms: (5a − 2a) + (3b + 6b) = 3a + 9b ✓',
        },

        // ── Q10 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato simplifies 7x − 4 + 3x + 9 and gets 10x + 5. Check her answer.',
          answer: 'x terms: 7x + 3x = 10x. Constants: −4 + 9 = 5. Lerato\'s answer is correct.',
          checkMode: 'self',
        },

        // ── Q11 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Simplify 9m − 5n + 3m − 2n + 4.',
          answer: '12m − 7n + 4',
          checkMode: 'auto',
          correctAnswer: '12m-7n+4',
          correctAnswers: ['12m-7n+4', '12m - 7n + 4', '12m−7n+4', '12m − 7n + 4'],
          explanation: 'Group like terms: (9m + 3m) + (−5n − 2n) + 4 = 12m − 7n + 4 ✓',
        },

        // ── Q12 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo says simplifying 6x + 5 − 6x always gives 0. Is he correct? Explain.',
          answer: 'No — 6x and −6x cancel out, leaving just the constant 5. The answer is 5, not 0.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Diagram showing 6x + 3y − 2x + 5y with the x terms 6x and −2x boxed in blue, the y terms 3y and 5y boxed in orange, and an arrow leading to the simplified expression 4x + 8y boxed in green',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 324 85" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="10" y="15" width="34" height="32" rx="4" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="27" y="37" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">6x</text>` +
        `<text x="56" y="37" text-anchor="middle" font-size="16" font-weight="700" fill="#0f1f3d">+</text>` +
        `<rect x="68" y="15" width="34" height="32" rx="4" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>` +
        `<text x="85" y="37" text-anchor="middle" font-size="15" font-weight="700" fill="#ea580c">3y</text>` +
        `<text x="114" y="37" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">−</text>` +
        `<rect x="126" y="15" width="34" height="32" rx="4" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="143" y="37" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">2x</text>` +
        `<text x="172" y="37" text-anchor="middle" font-size="16" font-weight="700" fill="#0f1f3d">+</text>` +
        `<rect x="184" y="15" width="34" height="32" rx="4" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>` +
        `<text x="201" y="37" text-anchor="middle" font-size="15" font-weight="700" fill="#ea580c">5y</text>` +
        `<line x1="224" y1="31" x2="248" y2="31" stroke="#16a34a" stroke-width="2.5"/>` +
        `<polygon points="248,26 256,31 248,36" fill="#16a34a"/>` +
        `<rect x="260" y="15" width="60" height="32" rx="4" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5"/>` +
        `<text x="290" y="37" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">4x + 8y</text>` +
        `<line x1="27" y1="47" x2="27" y2="58" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="27" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">x term</text>` +
        `<line x1="85" y1="47" x2="85" y2="58" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="85" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#ea580c">y term</text>` +
        `<line x1="143" y1="47" x2="143" y2="58" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="143" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">x term</text>` +
        `<line x1="201" y1="47" x2="201" y2="58" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="201" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#ea580c">y term</text>` +
        `<line x1="290" y1="47" x2="290" y2="58" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="290" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#16a34a">simplified</text>` +
        `</svg>`,

      videoPlaceholder:
        'Short video demonstrating how to simplify algebraic expressions by grouping like terms with matching colours and combining their coefficients step by step',
    },
  ],
  scoreMessages: [
    { minScore: 12, message: 'Outstanding! You have mastered algebraic expressions.' },
    { minScore: 9, message: 'Great work!' },
    { minScore: 6, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Algebraic vocabulary: terms, coefficients, constants (Easy) — positions 0-2
        { difficulty: 'Easy', question: 'How many terms are in the expression 8x + 3y − 5?', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Terms are separated by + or − signs.\nThe terms are 8x, 3y and −5.\nThat is 3 terms.' },
        { difficulty: 'Easy', question: 'Identify the coefficient of y in 6y − 11.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'The coefficient is the number in front of the variable.\nIn 6y, the number in front of y is 6.' },
        { difficulty: 'Easy', question: 'Identify the constant term in 4a + 9b − 12.', answer: '−12', checkMode: 'auto', correctAnswer: '-12', correctAnswers: ['-12', '−12'], explanation: 'A constant is a term with no variable attached.\nIn 4a + 9b − 12, the only term without a variable is −12.' },

        // Block 2 — Writing expressions from word descriptions (Easy-Medium) — positions 3-6
        { difficulty: 'Easy', question: 'Write an expression for a number n increased by 8.', answer: 'n + 8', checkMode: 'auto', correctAnswer: 'n + 8', correctAnswers: ['n + 8', 'n+8', '8 + n', '8+n'], explanation: '"Increased by" means add.\nn + 8' },
        { difficulty: 'Easy-Medium', question: 'Write an expression for the total cost, in rand, of buying p pens at R4 each.', answer: '4p', checkMode: 'auto', correctAnswer: '4p', correctAnswers: ['4p', 'p*4', '4*p'], explanation: '"At R4 each" means multiply.\nCost = price per pen × number of pens\n4p' },
        { difficulty: 'Medium', question: 'Thandi has k sweets. Write an expression for 3 times her number of sweets, decreased by 5.', answer: '3k − 5', checkMode: 'auto', correctAnswer: '3k - 5', correctAnswers: ['3k - 5', '3k-5', '3k − 5'], explanation: '"3 times her sweets" means 3k.\n"Decreased by 5" means subtract 5.\n3k − 5' },
        { difficulty: 'Medium', question: 'A learner translates "the sum of a number y and 9" as 9 − y. Explain the error and give the correct expression.', answer: 'The learner is incorrect. "Sum" means addition, not subtraction, so the phrase should become y + 9, not 9 − y. The correct expression is y + 9.', checkMode: 'self' },

        // Block 3 — Simplifying by collecting like terms (Medium) — positions 7-10
        { difficulty: 'Medium', question: 'Simplify 9x + 4x − 2x.', answer: '11x', checkMode: 'auto', correctAnswer: '11x', explanation: 'All three terms have the same variable x to the power 1, so they are like terms.\n9x + 4x − 2x = (9 + 4 − 2)x = 11x' },
        { difficulty: 'Medium', question: 'Simplify 7a − 3b + 2a + 8b.', answer: '9a + 5b', checkMode: 'auto', correctAnswer: '9a + 5b', correctAnswers: ['9a + 5b', '9a+5b'], explanation: 'Group like terms: (7a + 2a) + (−3b + 8b)\na terms: 7a + 2a = 9a\nb terms: −3b + 8b = 5b\nAnswer: 9a + 5b' },
        { difficulty: 'Medium', question: 'Simplify 6x + 5 − 2x − 9.', answer: '4x − 4', checkMode: 'auto', correctAnswer: '4x - 4', correctAnswers: ['4x - 4', '4x-4', '4x − 4'], explanation: 'Group like terms: (6x − 2x) + (5 − 9)\nx terms: 6x − 2x = 4x\nConstants: 5 − 9 = −4\nAnswer: 4x − 4' },
        { difficulty: 'Medium', question: 'A learner simplifies 8y − 3 + 2y + 7 and gets 10y + 4. Check the working and say whether the learner is correct.', answer: 'y terms: 8y + 2y = 10y. Constants: −3 + 7 = 4. The correct simplified expression is 10y + 4, so the learner is correct.', checkMode: 'self' },

        // Block 4 — Substitution / evaluating expressions (Medium) — positions 11-14
        { difficulty: 'Medium', question: 'Evaluate 5x + 2 when x = 7.', answer: '37', checkMode: 'auto', correctAnswer: '37', explanation: 'Substitute x = 7: 5(7) + 2 = 35 + 2 = 37 ✓' },
        { difficulty: 'Medium', question: 'Evaluate 3a − 4b when a = 6 and b = 2.', answer: '10', checkMode: 'auto', correctAnswer: '10', explanation: 'Substitute a = 6 and b = 2: 3(6) − 4(2) = 18 − 8 = 10 ✓' },
        { difficulty: 'Medium', question: 'Evaluate 2x² + 3 when x = 5.', answer: '53', checkMode: 'auto', correctAnswer: '53', explanation: 'Substitute x = 5: 2(5²) + 3 = 2(25) + 3 = 50 + 3 = 53 ✓' },
        { difficulty: 'Medium', question: 'The cost in rand to hire a bicycle is given by C = 15h + 20, where h is the number of hours. Find the cost to hire a bicycle for 4 hours.', answer: '80', checkMode: 'auto', correctAnswer: '80', explanation: 'Substitute h = 4: C = 15(4) + 20 = 60 + 20 = 80\nThe cost is R80.' },

        // Block 5 — Adding and subtracting expressions (Medium-Hard) — positions 15-17
        { difficulty: 'Medium-Hard', question: 'Add the expressions (4x + 3) and (2x − 7).', answer: '6x − 4', checkMode: 'auto', correctAnswer: '6x - 4', correctAnswers: ['6x - 4', '6x-4', '6x − 4'], explanation: '(4x + 3) + (2x − 7)\nGroup like terms: (4x + 2x) + (3 − 7)\n= 6x − 4' },
        { difficulty: 'Medium-Hard', question: 'Subtract (3a − 2) from (7a + 5).', answer: '4a + 7', checkMode: 'auto', correctAnswer: '4a + 7', correctAnswers: ['4a + 7', '4a+7'], explanation: '(7a + 5) − (3a − 2)\nChange the sign of each term being subtracted: 7a + 5 − 3a + 2\nGroup like terms: (7a − 3a) + (5 + 2)\n= 4a + 7' },
        { difficulty: 'Medium-Hard', question: 'Add the expressions 5m − 2n and 3m + 6n.', answer: '8m + 4n', checkMode: 'auto', correctAnswer: '8m + 4n', correctAnswers: ['8m + 4n', '8m+4n'], explanation: '(5m − 2n) + (3m + 6n)\nGroup like terms: (5m + 3m) + (−2n + 6n)\n= 8m + 4n' },

        // Block 6 — Multi-step and error-spotting (Hard) — positions 18-19
        { difficulty: 'Hard', question: 'Simplify 5x + 3y − 2x + 4 − y − 6.', answer: '3x + 2y − 2', checkMode: 'auto', correctAnswer: '3x + 2y - 2', correctAnswers: ['3x + 2y - 2', '3x+2y-2', '3x + 2y − 2'], explanation: 'Group like terms: (5x − 2x) + (3y − y) + (4 − 6)\nx terms: 5x − 2x = 3x\ny terms: 3y − y = 2y\nConstants: 4 − 6 = −2\nAnswer: 3x + 2y − 2' },
        { difficulty: 'Hard', question: 'One learner is asked to evaluate 4x + 3x when x = 5. They simplify first to get 7x, then substitute to get 35. A second learner substitutes first: 4(5) + 3(5) = 20 + 15 = 35. Do both methods give the same answer? Explain why.', answer: 'Yes, both methods give 35. Simplifying an expression first and then substituting gives an equivalent result to substituting into the original expression first, because 4x + 3x and 7x represent the same value for any value of x — combining like terms does not change what the expression is worth.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered algebraic vocabulary, writing expressions, simplifying, substitution and combining expressions.' },
        { minScore: 15, message: 'Great work! Review any missed questions on collecting like terms or substitution and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on simplifying and adding or subtracting expressions, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Algebraic vocabulary: terms, coefficients, constants (Easy) — positions 0-2
        { difficulty: 'Easy', question: 'How many terms are in the expression 9a − 4b + 6?', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Terms are separated by + or − signs.\nThe terms are 9a, −4b and 6.\nThat is 3 terms.' },
        { difficulty: 'Easy', question: 'Identify the coefficient of x in 8x − 15.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'The coefficient is the number in front of the variable.\nIn 8x, the number in front of x is 8.' },
        { difficulty: 'Easy', question: 'Identify the constant term in 5m + 2n − 20.', answer: '−20', checkMode: 'auto', correctAnswer: '-20', correctAnswers: ['-20', '−20'], explanation: 'A constant is a term with no variable attached.\nIn 5m + 2n − 20, the only term without a variable is −20.' },

        // Block 2 — Writing expressions from word descriptions (Easy-Medium) — positions 3-6
        { difficulty: 'Easy', question: 'Write an expression for a number m decreased by 6.', answer: 'm − 6', checkMode: 'auto', correctAnswer: 'm - 6', correctAnswers: ['m - 6', 'm-6', 'm − 6'], explanation: '"Decreased by" means subtract.\nm − 6' },
        { difficulty: 'Easy-Medium', question: 'Write an expression for the total cost, in rand, of buying t T-shirts at R85 each.', answer: '85t', checkMode: 'auto', correctAnswer: '85t', correctAnswers: ['85t', 't*85', '85*t'], explanation: '"At R85 each" means multiply.\nCost = price per T-shirt × number of T-shirts\n85t' },
        { difficulty: 'Medium', question: 'Bongani has j jelly beans. Write an expression for 4 times his number of jelly beans, increased by 6.', answer: '4j + 6', checkMode: 'auto', correctAnswer: '4j + 6', correctAnswers: ['4j + 6', '4j+6', '6 + 4j', '6+4j'], explanation: '"4 times his jelly beans" means 4j.\n"Increased by 6" means add 6.\n4j + 6' },
        { difficulty: 'Medium', question: 'A learner translates "12 subtracted from a number w" as 12 − w. Explain the error and give the correct expression.', answer: 'The learner is incorrect. "12 subtracted from a number w" means starting with w and taking away 12, so the correct expression is w − 12, not 12 − w. Writing it the wrong way round reverses the order of subtraction and gives a different value.', checkMode: 'self' },

        // Block 3 — Simplifying by collecting like terms (Medium) — positions 7-10
        { difficulty: 'Medium', question: 'Simplify 6x + 7x − 3x.', answer: '10x', checkMode: 'auto', correctAnswer: '10x', explanation: 'All three terms have the same variable x to the power 1, so they are like terms.\n6x + 7x − 3x = (6 + 7 − 3)x = 10x' },
        { difficulty: 'Medium', question: 'Simplify 8a − 5b + 3a + 9b.', answer: '11a + 4b', checkMode: 'auto', correctAnswer: '11a + 4b', correctAnswers: ['11a + 4b', '11a+4b'], explanation: 'Group like terms: (8a + 3a) + (−5b + 9b)\na terms: 8a + 3a = 11a\nb terms: −5b + 9b = 4b\nAnswer: 11a + 4b' },
        { difficulty: 'Medium', question: 'Simplify 9x + 6 − 4x − 11.', answer: '5x − 5', checkMode: 'auto', correctAnswer: '5x - 5', correctAnswers: ['5x - 5', '5x-5', '5x − 5'], explanation: 'Group like terms: (9x − 4x) + (6 − 11)\nx terms: 9x − 4x = 5x\nConstants: 6 − 11 = −5\nAnswer: 5x − 5' },
        { difficulty: 'Medium', question: 'A learner simplifies 7y − 2 + 5y + 8 and gets 12y + 5. Check the working and say whether the learner is correct.', answer: 'y terms: 7y + 5y = 12y. Constants: −2 + 8 = 6. The correct simplified expression is 12y + 6, not 12y + 5, so the learner is incorrect — they made an error adding the constants.', checkMode: 'self' },

        // Block 4 — Substitution / evaluating expressions (Medium) — positions 11-14
        { difficulty: 'Medium', question: 'Evaluate 6x + 5 when x = 8.', answer: '53', checkMode: 'auto', correctAnswer: '53', explanation: 'Substitute x = 8: 6(8) + 5 = 48 + 5 = 53 ✓' },
        { difficulty: 'Medium', question: 'Evaluate 5a − 2b when a = 9 and b = 4.', answer: '37', checkMode: 'auto', correctAnswer: '37', explanation: 'Substitute a = 9 and b = 4: 5(9) − 2(4) = 45 − 8 = 37 ✓' },
        { difficulty: 'Medium', question: 'Evaluate 3x² − 7 when x = 4.', answer: '41', checkMode: 'auto', correctAnswer: '41', explanation: 'Substitute x = 4: 3(4²) − 7 = 3(16) − 7 = 48 − 7 = 41 ✓' },
        { difficulty: 'Medium', question: 'The cost in rand to hire a canoe is given by C = 12h + 35, where h is the number of hours. Find the cost to hire a canoe for 5 hours.', answer: '95', checkMode: 'auto', correctAnswer: '95', explanation: 'Substitute h = 5: C = 12(5) + 35 = 60 + 35 = 95\nThe cost is R95.' },

        // Block 5 — Adding and subtracting expressions (Medium-Hard) — positions 15-17
        { difficulty: 'Medium-Hard', question: 'Add the expressions (6x + 2) and (3x − 5).', answer: '9x − 3', checkMode: 'auto', correctAnswer: '9x - 3', correctAnswers: ['9x - 3', '9x-3', '9x − 3'], explanation: '(6x + 2) + (3x − 5)\nGroup like terms: (6x + 3x) + (2 − 5)\n= 9x − 3' },
        { difficulty: 'Medium-Hard', question: 'Subtract (5a − 6) from (9a + 4).', answer: '4a + 10', checkMode: 'auto', correctAnswer: '4a + 10', correctAnswers: ['4a + 10', '4a+10'], explanation: '(9a + 4) − (5a − 6)\nChange the sign of each term being subtracted: 9a + 4 − 5a + 6\nGroup like terms: (9a − 5a) + (4 + 6)\n= 4a + 10' },
        { difficulty: 'Medium-Hard', question: 'Add the expressions 7m − 3n and 2m + 8n.', answer: '9m + 5n', checkMode: 'auto', correctAnswer: '9m + 5n', correctAnswers: ['9m + 5n', '9m+5n'], explanation: '(7m − 3n) + (2m + 8n)\nGroup like terms: (7m + 2m) + (−3n + 8n)\n= 9m + 5n' },

        // Block 6 — Multi-step and error-spotting (Hard) — positions 18-19
        { difficulty: 'Hard', question: 'Simplify 6x + 4y − 3x + 2 − 3y − 8.', answer: '3x + y − 6', checkMode: 'auto', correctAnswer: '3x + y - 6', correctAnswers: ['3x + y - 6', '3x+y-6', '3x + y − 6'], explanation: 'Group like terms: (6x − 3x) + (4y − 3y) + (2 − 8)\nx terms: 6x − 3x = 3x\ny terms: 4y − 3y = y\nConstants: 2 − 8 = −6\nAnswer: 3x + y − 6' },
        { difficulty: 'Hard', question: 'One learner is asked to evaluate 5x − 2x when x = 6. They simplify first to get 3x, then substitute to get 18. A second learner substitutes first: 5(6) − 2(6) = 30 − 12 = 18. Do both methods give the same answer? Explain why.', answer: 'Yes, both methods give 18. Simplifying an expression first and then substituting gives an equivalent result to substituting into the original expression first, because 5x − 2x and 3x represent the same value for any value of x — combining like terms does not change what the expression is worth.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered algebraic vocabulary, writing expressions, simplifying, substitution and combining expressions.' },
        { minScore: 15, message: 'Great work! Review any missed questions on collecting like terms or substitution and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on simplifying and adding or subtracting expressions, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Algebraic vocabulary: terms, coefficients, constants (Easy) — positions 0-2
        { difficulty: 'Easy', question: 'How many terms are in the expression 7m + 2n − 9?', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Terms are separated by + or − signs.\nThe terms are 7m, 2n and −9.\nThat is 3 terms.' },
        { difficulty: 'Easy', question: 'Identify the coefficient of a in 9a − 14.', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'The coefficient is the number in front of the variable.\nIn 9a, the number in front of a is 9.' },
        { difficulty: 'Easy', question: 'Identify the constant term in 3x + 7y − 18.', answer: '−18', checkMode: 'auto', correctAnswer: '-18', correctAnswers: ['-18', '−18'], explanation: 'A constant is a term with no variable attached.\nIn 3x + 7y − 18, the only term without a variable is −18.' },

        // Block 2 — Writing expressions from word descriptions (Easy-Medium) — positions 3-6
        { difficulty: 'Easy', question: 'Write an expression for a number p increased by 15.', answer: 'p + 15', checkMode: 'auto', correctAnswer: 'p + 15', correctAnswers: ['p + 15', 'p+15', '15 + p', '15+p'], explanation: '"Increased by" means add.\np + 15' },
        { difficulty: 'Easy-Medium', question: 'Write an expression for the total cost, in rand, of buying b loaves of bread at R18 each.', answer: '18b', checkMode: 'auto', correctAnswer: '18b', correctAnswers: ['18b', 'b*18', '18*b'], explanation: '"At R18 each" means multiply.\nCost = price per loaf × number of loaves\n18b' },
        { difficulty: 'Medium', question: 'Zanele has c cards. Write an expression for 5 times her number of cards, decreased by 9.', answer: '5c − 9', checkMode: 'auto', correctAnswer: '5c - 9', correctAnswers: ['5c - 9', '5c-9', '5c − 9'], explanation: '"5 times her cards" means 5c.\n"Decreased by 9" means subtract 9.\n5c − 9' },
        { difficulty: 'Medium', question: 'A learner translates "the difference between a number h and 7" as 7 − h. Explain why this is risky and give the more standard expression.', answer: 'The phrase is ambiguous, but "the difference between h and 7" is conventionally read in the order given, meaning h − 7 (start with h, take away 7). Writing 7 − h reverses the order and gives the opposite value unless h = 7. The standard expression is h − 7.', checkMode: 'self' },

        // Block 3 — Simplifying by collecting like terms (Medium) — positions 7-10
        { difficulty: 'Medium', question: 'Simplify 10x − 3x + 2x.', answer: '9x', checkMode: 'auto', correctAnswer: '9x', explanation: 'All three terms have the same variable x to the power 1, so they are like terms.\n10x − 3x + 2x = (10 − 3 + 2)x = 9x' },
        { difficulty: 'Medium', question: 'Simplify 6a + 2b − 4a + 7b.', answer: '2a + 9b', checkMode: 'auto', correctAnswer: '2a + 9b', correctAnswers: ['2a + 9b', '2a+9b'], explanation: 'Group like terms: (6a − 4a) + (2b + 7b)\na terms: 6a − 4a = 2a\nb terms: 2b + 7b = 9b\nAnswer: 2a + 9b' },
        { difficulty: 'Medium', question: 'Simplify 7x + 9 − 3x − 14.', answer: '4x − 5', checkMode: 'auto', correctAnswer: '4x - 5', correctAnswers: ['4x - 5', '4x-5', '4x − 5'], explanation: 'Group like terms: (7x − 3x) + (9 − 14)\nx terms: 7x − 3x = 4x\nConstants: 9 − 14 = −5\nAnswer: 4x − 5' },
        { difficulty: 'Medium', question: 'A learner simplifies 9y − 6 + 4y + 10 and gets 13y + 4. Check the working and say whether the learner is correct.', answer: 'y terms: 9y + 4y = 13y. Constants: −6 + 10 = 4. The correct simplified expression is 13y + 4, so the learner is correct.', checkMode: 'self' },

        // Block 4 — Substitution / evaluating expressions (Medium) — positions 11-14
        { difficulty: 'Medium', question: 'Evaluate 4x + 9 when x = 6.', answer: '33', checkMode: 'auto', correctAnswer: '33', explanation: 'Substitute x = 6: 4(6) + 9 = 24 + 9 = 33 ✓' },
        { difficulty: 'Medium', question: 'Evaluate 7a − 3b when a = 5 and b = 6.', answer: '17', checkMode: 'auto', correctAnswer: '17', explanation: 'Substitute a = 5 and b = 6: 7(5) − 3(6) = 35 − 18 = 17 ✓' },
        { difficulty: 'Medium', question: 'Evaluate 4x² − 5 when x = 3.', answer: '31', checkMode: 'auto', correctAnswer: '31', explanation: 'Substitute x = 3: 4(3²) − 5 = 4(9) − 5 = 36 − 5 = 31 ✓' },
        { difficulty: 'Medium', question: 'The cost in rand to hire a kayak is given by C = 18h + 25, where h is the number of hours. Find the cost to hire a kayak for 3 hours.', answer: '79', checkMode: 'auto', correctAnswer: '79', explanation: 'Substitute h = 3: C = 18(3) + 25 = 54 + 25 = 79\nThe cost is R79.' },

        // Block 5 — Adding and subtracting expressions (Medium-Hard) — positions 15-17
        { difficulty: 'Medium-Hard', question: 'Add the expressions (5x + 9) and (4x − 3).', answer: '9x + 6', checkMode: 'auto', correctAnswer: '9x + 6', correctAnswers: ['9x + 6', '9x+6'], explanation: '(5x + 9) + (4x − 3)\nGroup like terms: (5x + 4x) + (9 − 3)\n= 9x + 6' },
        { difficulty: 'Medium-Hard', question: 'Subtract (2a − 7) from (8a + 3).', answer: '6a + 10', checkMode: 'auto', correctAnswer: '6a + 10', correctAnswers: ['6a + 10', '6a+10'], explanation: '(8a + 3) − (2a − 7)\nChange the sign of each term being subtracted: 8a + 3 − 2a + 7\nGroup like terms: (8a − 2a) + (3 + 7)\n= 6a + 10' },
        { difficulty: 'Medium-Hard', question: 'Add the expressions 4m + 5n and 6m − 2n.', answer: '10m + 3n', checkMode: 'auto', correctAnswer: '10m + 3n', correctAnswers: ['10m + 3n', '10m+3n'], explanation: '(4m + 5n) + (6m − 2n)\nGroup like terms: (4m + 6m) + (5n − 2n)\n= 10m + 3n' },

        // Block 6 — Multi-step and error-spotting (Hard) — positions 18-19
        { difficulty: 'Hard', question: 'Simplify 4x + 5y − 2x + 3 − 2y − 9.', answer: '2x + 3y − 6', checkMode: 'auto', correctAnswer: '2x + 3y - 6', correctAnswers: ['2x + 3y - 6', '2x+3y-6', '2x + 3y − 6'], explanation: 'Group like terms: (4x − 2x) + (5y − 2y) + (3 − 9)\nx terms: 4x − 2x = 2x\ny terms: 5y − 2y = 3y\nConstants: 3 − 9 = −6\nAnswer: 2x + 3y − 6' },
        { difficulty: 'Hard', question: 'One learner is asked to evaluate 6x + 3x when x = 4. They simplify first to get 9x, then substitute to get 36. A second learner substitutes first: 6(4) + 3(4) = 24 + 12 = 36. Do both methods give the same answer? Explain why.', answer: 'Yes, both methods give 36. Simplifying an expression first and then substituting gives an equivalent result to substituting into the original expression first, because 6x + 3x and 9x represent the same value for any value of x — combining like terms does not change what the expression is worth.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered algebraic vocabulary, writing expressions, simplifying, substitution and combining expressions.' },
        { minScore: 15, message: 'Great work! Review any missed questions on collecting like terms or substitution and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on simplifying and adding or subtracting expressions, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
