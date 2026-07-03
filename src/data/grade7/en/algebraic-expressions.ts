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
        '<DiagramPlaceholder label="Diagram labelling the parts of the algebraic expression 5x plus 3y minus 7 with arrows pointing to each term coefficient constant and variable colour coded blue for variables orange for coefficients and green for the constant" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining what an algebraic expression is identifying terms coefficients and constants and showing how to evaluate an expression by substituting a value for the variable" />',
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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of the expression 3x plus 5y minus 2x plus 7y with like terms circled in matching colours blue for x terms and green for y terms showing which pairs can be combined" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the difference between like and unlike terms using colour coding and showing why terms with different variables or different powers cannot be combined" />',
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
        '<DiagramPlaceholder label="Diagram of the expression 6x plus 3y minus 2x plus 5y with like terms grouped using colour coded brackets blue for x terms and green for y terms then showing the final simplified result 4x plus 8y in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how to simplify algebraic expressions by grouping like terms with matching colours and combining their coefficients step by step" />',
    },
  ],
  scoreMessages: [
    { minScore: 12, message: 'Outstanding! You have mastered algebraic expressions.' },
    { minScore: 9, message: 'Great work!' },
    { minScore: 6, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
