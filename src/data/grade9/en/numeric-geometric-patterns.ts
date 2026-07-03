import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (pattern roles) ───────────────────────────────────────────
// pattern term / table value / rule verification → blue   (#2563eb)
// difference / pattern context                  → orange (#ea580c)
// algebraic rule / prediction                   → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Numeric and Geometric Patterns',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — INVESTIGATING AND EXTENDING PATTERNS REPRESENTED ALGEBRAICALLY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'investigating-extending-patterns-algebraically',
      title: 'Investigating and Extending Patterns Represented Algebraically',
      icon: 'ƒ',
      explanation:
        `<p style="margin-bottom:16px;">We investigate and extend numeric and geometric patterns, expressing relationships not just in words but <strong>represented algebraically</strong>, including patterns of the learner's own creation, and testing rules against multiple terms for verification.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('pattern terms')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('differences')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('algebraic rule')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Finding an algebraic rule</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('List the terms')} and find the <strong>first differences</strong> — subtract each term from the next.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Find the <strong>second differences</strong> — subtract each first difference from the next. If they are ${or('constant')}, the pattern is <strong>quadratic</strong>.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Test a rule')} — substitute n = 1, 2, 3 into your proposed formula and check it matches all terms. Adjust and verify until confirmed.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Key fact: second differences and quadratic patterns</p>` +
        `<p style="margin:0;color:#1e3a8a;">If the second differences are constant and equal to <em>d</em>, then the coefficient of n² in the algebraic rule is <strong>d ÷ 2</strong>. For example, a constant second difference of 4 means the leading term is <strong>2n²</strong>.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A pattern is 4, 11, 22, 37. Find the algebraic rule.',
          answer: `nth term = ${gr('2n² + n + 1')}`,
          steps: [
            `List the ${bl('pattern terms')}: ${bl('4')}, ${bl('11')}, ${bl('22')}, ${bl('37')}.`,
            `Find first differences: ${or('7')}, ${or('11')}, ${or('15')} — ${or('increasing by 4')}, which is the constant second difference. This confirms a quadratic relationship with leading coefficient 4 ÷ 2 = 2.`,
            `Testing ${gr('2n² + n + 1')}: n = 1 gives 2 + 1 + 1 = ${bl('4')} ✓, n = 2 gives 8 + 2 + 1 = ${bl('11')} ✓, n = 3 gives 18 + 3 + 1 = ${bl('22')} ✓.`,
            `Rule confirmed: nth term = ${gr('2n² + n + 1')} ✓`,
          ],
        },
        {
          question: 'Sipho creates his own pattern: 5, 13, 25, 41. Find the rule.',
          answer: `nth term = ${gr('2n² + n + 2')}`,
          steps: [
            `List the ${bl('pattern terms')}: ${bl('5')}, ${bl('13')}, ${bl('25')}, ${bl('41')}.`,
            `Find first differences: ${or('8')}, ${or('12')}, ${or('16')} — ${or('increasing by 4')}. The constant second difference of 4 confirms a quadratic with leading coefficient 2.`,
            `Testing ${gr('2n² + n + 2')}: n = 1 gives 2 + 1 + 2 = ${bl('5')} ✓, n = 2 gives 8 + 2 + 2 = ${bl('13')} ✓, n = 3 gives 18 + 3 + 2 = ${bl('25')} ✓.`,
            `Rule: nth term = ${gr('2n² + n + 2')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Find the next term in the pattern 3, 8, 15, 24.',
          answer: '35',
          checkMode: 'auto',
          correctAnswer: '35',
          explanation: 'First differences: 5, 7, 9 — increasing by 2. The next difference is 11. So the next term is 24 + 11 = 35.',
        },
        {
          difficulty: 'Medium',
          question: 'Find the algebraic rule for the pattern 2, 9, 20, 35.',
          answer: '2n²-n+1',
          checkMode: 'auto',
          correctAnswer: '2n²-n+1',
          explanation: 'First differences: 7, 11, 15 — increasing by 4. The constant second difference confirms a quadratic with leading coefficient 2. Testing 2n²-n+1: n=1 gives 2, n=2 gives 9, n=3 gives 20, n=4 gives 35 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho says the pattern 1, 6, 15, 28 follows the rule 2n²-n. Verify this for n=1,2,3,4.',
          answer: 'n=1: 2-1=1 ✓. n=2: 8-2=6 ✓. n=3: 18-3=15 ✓. n=4: 32-4=28 ✓. The rule is verified.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'A geometric pattern of dots gives 1, 5, 12, 22 (pentagonal numbers). Find the 6th term using the rule (3n²-n)/2.',
          answer: '51',
          checkMode: 'auto',
          correctAnswer: '51',
          explanation: 'For n=6: (3(36)-6)/2 = (108-6)/2 = 102/2 = 51.',
        },
        {
          difficulty: 'Hard',
          question: 'Lerato has a pattern of growing squares with 1,4,9,16 dots. Verify the rule n² for n=6 and explain the pattern shape.',
          answer: 'n=6: 6²=36 dots. The pattern forms increasingly larger square grids of dots as n increases.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the algebraic rule for numeric patterns by calculating first and second differences and testing formulas" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a numeric pattern sequence with first differences (orange) and second differences highlighted, leading to an algebraic rule (green)" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PATTERNS REPRESENTED IN DIAGRAMS, TABLES AND ALGEBRAIC LANGUAGE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'patterns-diagrams-tables-algebraic-language',
      title: 'Patterns Represented in Diagrams, Tables and Algebraic Language',
      icon: 'ƒ',
      explanation:
        `<p style="margin-bottom:16px;">We move flexibly between <strong>different representations</strong> of the same pattern — physical/diagram form, tables, and algebraic expressions — describing and justifying the general rule across all forms.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('table values')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('diagram pattern')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('algebraic rule')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Three representations of the same pattern</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Diagram / physical form</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A visual arrangement of dots, tiles, sticks or shapes that ${gr('grows')} according to a rule.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Table of values</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A table with rows for n (step number) and the corresponding term value — it shows the relationship clearly.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Algebraic expression</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A formula using n that ${or('generates any term')} in the sequence — the most powerful representation.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Moving between representations</p>` +
        `<p style="margin:0;color:#14532d;">Start from whatever representation you are given. Build a ${bl('table of values')} if you only have a ${gr('diagram')}. Then use the table to find the ${or('algebraic rule')} by calculating differences. Always verify the rule by substituting back into the formula.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A geometric pattern of dots forms pentagonal numbers: 1, 5, 12, 22. Represent this in a table and find the algebraic rule.',
          answer: `nth term = ${or('(3n² − n) / 2')}`,
          steps: [
            `Build a ${bl('table of values')}: n = 1, 2, 3, 4 and corresponding term = ${bl('1')}, ${bl('5')}, ${bl('12')}, ${bl('22')}.`,
            `Find first differences: ${or('4')}, ${or('7')}, ${or('10')} — ${or('increasing by 3')}. The constant second difference is 3, giving a leading coefficient of 3 ÷ 2.`,
            `The rule is nth term = ${or('(3n² − n) / 2')}. Verify: n=1 → (3-1)/2=1 ✓, n=2 → (12-2)/2=5 ✓, n=3 → (27-3)/2=12 ✓, n=4 → (48-4)/2=22 ✓`,
          ],
        },
        {
          question: 'Lerato has a pattern shown as growing squares: 1, 4, 9, 16 dots. Express this algebraically and verify for n=5.',
          answer: `nth term = ${or('n²')}`,
          steps: [
            `Build a ${bl('table')}: n = 1, 2, 3, 4 and term = ${bl('1')}, ${bl('4')}, ${bl('9')}, ${bl('16')}. This is n² — recognise it as perfect squares.`,
            `The ${or('algebraic rule')} is nth term = ${or('n²')}. For n = 5: 5² = ${gr('25')} dots. See the diagram below showing the dot pattern growth.`,
            `Verify: each step forms a larger ${gr('square grid')} of dots. n=1 gives a 1×1 grid, n=2 gives a 2×2 grid, n=5 gives a 5×5 grid of 25 dots ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Find the next term in the pattern 5, 12, 21, 32.',
          answer: '45',
          checkMode: 'auto',
          correctAnswer: '45',
          explanation: 'First differences: 7, 9, 11 — increasing by 2. The next difference is 13. So the next term is 32 + 13 = 45.',
        },
        {
          difficulty: 'Medium',
          question: 'Verify that the rule n²+2n works for the pattern 3, 8, 15, 24 at n=4.',
          answer: 'yes',
          checkMode: 'auto',
          correctAnswer: 'yes',
          explanation: 'n=4: 4²+2(4)=16+8=24 ✓. The rule n²+2n gives 24 at n=4, matching the 4th term of the pattern.',
        },
        {
          difficulty: 'Hard',
          question: "Thabo's pattern of stacked chairs follows legs=3n+1. Find the number of legs needed for 12 stacked chairs.",
          answer: '37',
          checkMode: 'auto',
          correctAnswer: '37',
          explanation: 'legs = 3(12)+1 = 36+1 = 37 legs.',
        },
        {
          difficulty: 'Medium',
          question: 'Find the rule for the pattern 4, 13, 28, 49.',
          answer: '3n²+n',
          checkMode: 'auto',
          correctAnswer: '3n²+n',
          explanation: 'First differences: 9, 15, 21 — increasing by 6. Second difference = 6, so coefficient of n² is 3. Testing 3n²+n: n=1 gives 4, n=2 gives 14, n=3 gives 30, n=4 gives 52. Rule: 3n²+n.',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle says the pattern 2, 7, 16, 29 follows the rule 2n²-n+1. Verify for n=1,2,3,4.',
          answer: 'n=1: 2-1+1=2 ✓. n=2: 8-2+1=7 ✓. n=3: 18-3+1=16 ✓. n=4: 32-4+1=29 ✓. The rule is verified.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to move between diagram, table and algebraic representations of the same pattern, with a worked example for pentagonal numbers" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a growing square dot pattern showing steps 1 through 4, with dots arranged to visually confirm n² for each step" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — JUSTIFYING GENERAL RULES AND SOLVING PATTERN PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'justifying-general-rules-solving-pattern-problems',
      title: 'Justifying General Rules and Solving Pattern Problems',
      icon: 'ƒ',
      explanation:
        `<p style="margin-bottom:16px;">We <strong>justify general rules</strong> for patterns using algebraic reasoning, applying multi-step verification, and solve real-life problems that require identifying and extending patterns.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('rule verification')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('pattern context')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('prediction')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to verify and justify a rule</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Substitute')} n = 1, 2, 3, 4 (at minimum) into the proposed rule and calculate the output for each.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Compare')} each calculated value against the corresponding term in the ${or('pattern context')}. Mark ✓ for a match and ✗ for a mismatch.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">If all terms match, the rule is verified. Use it to make a ${gr('prediction')} for any later term by substituting the desired value of n.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Real-life pattern problems</p>` +
        `<p style="margin:0;color:#1e3a8a;">Read the ${or('context')} carefully to identify the pattern. Build a table of values for a few steps, find the rule, verify it, then use it to predict the value at the required step. Always state your ${gr('answer in context')} (e.g. "25 legs are needed").</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo claims the pattern 3, 10, 21, 36 follows the rule 2n²+n. Verify this for n=1,2,3,4.',
          answer: `The rule ${bl('2n² + n')} is verified for all four terms`,
          steps: [
            `${bl('Substitute')} n = 1: 2(1)² + 1 = 2 + 1 = 3 ✓`,
            `${bl('Substitute')} n = 2: 2(4) + 2 = 8 + 2 = 10 ✓`,
            `${bl('Substitute')} n = 3: 2(9) + 3 = 18 + 3 = 21 ✓`,
            `${bl('Substitute')} n = 4: 2(16) + 4 = 32 + 4 = 36 ✓`,
            `All four terms match — the rule ${bl('2n² + n')} is verified ✓`,
          ],
        },
        {
          question: 'Amahle stacks chairs in a pattern — 1 chair needs 4 legs, 2 stacked chairs share legs and need 7 legs, 3 stacked need 10 legs. Find the rule and predict 8 stacked chairs.',
          answer: `Rule: legs = ${or('3n + 1')} → for n = 8: ${gr('25 legs')}`,
          steps: [
            `Identify the ${or('pattern context')}: 1 chair → 4 legs, 2 chairs → 7 legs, 3 chairs → 10 legs. The first differences are ${or('3, 3')} — constant, so this is a linear pattern.`,
            `A constant difference of 3 means the rule has the form 3n + c. Substituting n = 1: 3(1) + c = 4 → c = 1. Rule: legs = ${or('3n + 1')}.`,
            `${gr('Predict')} for n = 8: legs = 3(8) + 1 = 24 + 1 = ${gr('25 legs')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Using the rule 2n²+3, find the 5th term.',
          answer: '53',
          checkMode: 'auto',
          correctAnswer: '53',
          explanation: 'n=5: 2(25)+3=50+3=53.',
        },
        {
          difficulty: 'Medium',
          question: 'A pattern starts 6, 16, 30, 48. Find the rule.',
          answer: '2n²+4n',
          checkMode: 'auto',
          correctAnswer: '2n²+4n',
          explanation: 'First differences: 10, 14, 18 — increasing by 4. Second difference=4, coefficient of n²=2. Testing 2n²+4n: n=1 gives 6 ✓, n=2 gives 16 ✓, n=3 gives 30 ✓, n=4 gives 48 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho says all quadratic patterns have a constant second difference. Is he correct? Explain with the pattern 3,8,15,24.',
          answer: 'Yes — first differences are 5,7,9 (not constant), but second differences (7-5=2, 9-7=2) are constant at 2, confirming a quadratic pattern.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Find the 15th term of the pattern with rule n²+n+1.',
          answer: '241',
          checkMode: 'auto',
          correctAnswer: '241',
          explanation: 'n=15: 15²+15+1=225+15+1=241.',
        },
        {
          difficulty: 'Hard',
          question: 'Lerato says the pattern 6, 14, 26, 42 follows the rule 2n²+2n+2. Verify this for n=1 and n=4.',
          answer: 'n=1: 2+2+2=6 ✓. n=4: 32+8+2=42 ✓. The rule is verified.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to verify an algebraic rule by substitution and how to solve real-life pattern problems by identifying the rule and making predictions" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the stacked chairs pattern for steps 1 through 4, with legs counted and the rule legs=3n+1 annotated" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered numeric and geometric patterns.' },
    { minScore: 11, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
