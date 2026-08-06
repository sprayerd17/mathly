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
          answer: `nth term = ${gr('2n² + 2n + 1')}`,
          steps: [
            `List the ${bl('pattern terms')}: ${bl('5')}, ${bl('13')}, ${bl('25')}, ${bl('41')}.`,
            `Find first differences: ${or('8')}, ${or('12')}, ${or('16')} — ${or('increasing by 4')}. The constant second difference of 4 confirms a quadratic with leading coefficient 2.`,
            `Testing ${gr('2n² + 2n + 1')}: n = 1 gives 2 + 2 + 1 = ${bl('5')} ✓, n = 2 gives 8 + 4 + 1 = ${bl('13')} ✓, n = 3 gives 18 + 6 + 1 = ${bl('25')} ✓, n = 4 gives 32 + 8 + 1 = ${bl('41')} ✓.`,
            `Rule: nth term = ${gr('2n² + 2n + 1')} ✓`,
          ],
        },
      ],


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
          answer: '2n²+n-1',
          checkMode: 'auto',
          correctAnswer: '2n²+n-1',
          explanation: 'First differences: 7, 11, 15 — increasing by 4. The constant second difference confirms a quadratic with leading coefficient 2. Testing 2n²+n-1: n=1 gives 2+1-1=2, n=2 gives 8+2-1=9, n=3 gives 18+3-1=20, n=4 gives 32+4-1=35 ✓',
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
        'Short video showing how to find the algebraic rule for numeric patterns by calculating first and second differences and testing formulas',

      diagramPlaceholder:
        'A differences pyramid for the sequence 4, 11, 22, 37 showing the terms (blue), first differences (orange) and constant second differences (green), leading to the algebraic rule 2n² + n + 1',

      diagramSvg:
        '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg"><text x="130" y="14" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Finding the rule</text><line x1="30" y1="47" x2="53" y2="63" stroke="#9ca3af" stroke-width="1"/><line x1="90" y1="47" x2="67" y2="63" stroke="#9ca3af" stroke-width="1"/><line x1="90" y1="47" x2="113" y2="63" stroke="#9ca3af" stroke-width="1"/><line x1="150" y1="47" x2="127" y2="63" stroke="#9ca3af" stroke-width="1"/><line x1="150" y1="47" x2="173" y2="63" stroke="#9ca3af" stroke-width="1"/><line x1="210" y1="47" x2="187" y2="63" stroke="#9ca3af" stroke-width="1"/><line x1="60" y1="89" x2="83" y2="105" stroke="#9ca3af" stroke-width="1"/><line x1="120" y1="89" x2="97" y2="105" stroke="#9ca3af" stroke-width="1"/><line x1="120" y1="89" x2="143" y2="105" stroke="#9ca3af" stroke-width="1"/><line x1="180" y1="89" x2="157" y2="105" stroke="#9ca3af" stroke-width="1"/><rect x="15" y="21" width="30" height="26" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.2"/><text x="30" y="39" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">4</text><rect x="75" y="21" width="30" height="26" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.2"/><text x="90" y="39" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">11</text><rect x="135" y="21" width="30" height="26" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.2"/><text x="150" y="39" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">22</text><rect x="195" y="21" width="30" height="26" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.2"/><text x="210" y="39" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">37</text><rect x="45" y="63" width="30" height="26" rx="6" fill="#fff7ed" stroke="#ea580c" stroke-width="1.2"/><text x="60" y="81" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">7</text><rect x="105" y="63" width="30" height="26" rx="6" fill="#fff7ed" stroke="#ea580c" stroke-width="1.2"/><text x="120" y="81" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">11</text><rect x="165" y="63" width="30" height="26" rx="6" fill="#fff7ed" stroke="#ea580c" stroke-width="1.2"/><text x="180" y="81" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">15</text><rect x="75" y="105" width="30" height="26" rx="6" fill="#fff7ed" stroke="#ea580c" stroke-width="1.2"/><text x="90" y="123" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">4</text><rect x="135" y="105" width="30" height="26" rx="6" fill="#fff7ed" stroke="#ea580c" stroke-width="1.2"/><text x="150" y="123" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">4</text><line x1="120" y1="131" x2="120" y2="145" stroke="#16a34a" stroke-width="2"/><polygon points="120,150 116,142 124,142" fill="#16a34a"/><rect x="45" y="150" width="150" height="24" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/><text x="120" y="166" font-size="12" font-weight="700" fill="#16a34a" text-anchor="middle">nth term = 2n² + n + 1</text></svg>',
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
          answer: '3n²+1',
          checkMode: 'auto',
          correctAnswer: '3n²+1',
          explanation: 'First differences: 9, 15, 21 — increasing by 6. Second difference = 6, so coefficient of n² is 3. Testing 3n²+1: n=1 gives 3+1=4 ✓, n=2 gives 12+1=13 ✓, n=3 gives 27+1=28 ✓, n=4 gives 48+1=49 ✓. Rule: 3n²+1.',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle says the pattern 2, 7, 16, 29 follows the rule 2n²-n+1. Verify for n=1,2,3,4.',
          answer: 'n=1: 2-1+1=2 ✓. n=2: 8-2+1=7 ✓. n=3: 18-3+1=16 ✓. n=4: 32-4+1=29 ✓. The rule is verified.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video showing how to move between diagram, table and algebraic representations of the same pattern, with a worked example for pentagonal numbers',

      diagramPlaceholder:
        'A growing square dot pattern showing steps 1 through 4, with dots arranged to visually confirm n² for each step',

      diagramSvg:
        '<svg viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="40" r="3.2" fill="#0f1f3d"/><circle cx="85" cy="35" r="3.2" fill="#0f1f3d"/><circle cx="95" cy="35" r="3.2" fill="#0f1f3d"/><circle cx="85" cy="45" r="3.2" fill="#0f1f3d"/><circle cx="95" cy="45" r="3.2" fill="#0f1f3d"/><circle cx="146" cy="31" r="3.2" fill="#0f1f3d"/><circle cx="155" cy="31" r="3.2" fill="#0f1f3d"/><circle cx="164" cy="31" r="3.2" fill="#0f1f3d"/><circle cx="146" cy="40" r="3.2" fill="#0f1f3d"/><circle cx="155" cy="40" r="3.2" fill="#0f1f3d"/><circle cx="164" cy="40" r="3.2" fill="#0f1f3d"/><circle cx="146" cy="49" r="3.2" fill="#0f1f3d"/><circle cx="155" cy="49" r="3.2" fill="#0f1f3d"/><circle cx="164" cy="49" r="3.2" fill="#0f1f3d"/><circle cx="213" cy="28" r="3.2" fill="#0f1f3d"/><circle cx="221" cy="28" r="3.2" fill="#0f1f3d"/><circle cx="229" cy="28" r="3.2" fill="#0f1f3d"/><circle cx="237" cy="28" r="3.2" fill="#0f1f3d"/><circle cx="213" cy="36" r="3.2" fill="#0f1f3d"/><circle cx="221" cy="36" r="3.2" fill="#0f1f3d"/><circle cx="229" cy="36" r="3.2" fill="#0f1f3d"/><circle cx="237" cy="36" r="3.2" fill="#0f1f3d"/><circle cx="213" cy="44" r="3.2" fill="#0f1f3d"/><circle cx="221" cy="44" r="3.2" fill="#0f1f3d"/><circle cx="229" cy="44" r="3.2" fill="#0f1f3d"/><circle cx="237" cy="44" r="3.2" fill="#0f1f3d"/><circle cx="213" cy="52" r="3.2" fill="#0f1f3d"/><circle cx="221" cy="52" r="3.2" fill="#0f1f3d"/><circle cx="229" cy="52" r="3.2" fill="#0f1f3d"/><circle cx="237" cy="52" r="3.2" fill="#0f1f3d"/><text x="30" y="70" font-size="10" fill="#374151" text-anchor="middle">Stage 1</text><text x="30" y="83" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">1×1 = 1</text><text x="90" y="70" font-size="10" fill="#374151" text-anchor="middle">Stage 2</text><text x="90" y="83" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">2×2 = 4</text><text x="155" y="70" font-size="10" fill="#374151" text-anchor="middle">Stage 3</text><text x="155" y="83" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">3×3 = 9</text><text x="225" y="70" font-size="10" fill="#374151" text-anchor="middle">Stage 4</text><text x="225" y="83" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">4×4 = 16</text></svg>',
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
        'Short video showing how to verify an algebraic rule by substitution and how to solve real-life pattern problems by identifying the rule and making predictions',

      diagramPlaceholder:
        'A diagram showing the stacked chairs pattern for steps 1 through 4, with chairs and legs counted and the rule legs = 3n + 1 annotated',

      diagramSvg:
        '<svg viewBox="0 0 300 85" xmlns="http://www.w3.org/2000/svg"><text x="150" y="10" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">legs = 3n + 1</text><rect x="24" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><circle cx="21" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="27" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="33" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="39" cy="44" r="2.6" fill="#0f1f3d"/><text x="30" y="60" font-size="9" fill="#374151" text-anchor="middle">Stage 1</text><text x="30" y="72" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">legs = 4</text><rect x="88" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><rect x="96" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><circle cx="77" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="83" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="89" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="95" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="101" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="107" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="113" cy="44" r="2.6" fill="#0f1f3d"/><text x="95" y="60" font-size="9" fill="#374151" text-anchor="middle">Stage 2</text><text x="95" y="72" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">legs = 7</text><rect x="159" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><rect x="167" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><rect x="175" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><circle cx="143" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="149" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="155" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="161" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="167" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="173" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="179" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="185" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="191" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="197" cy="44" r="2.6" fill="#0f1f3d"/><text x="170" y="60" font-size="9" fill="#374151" text-anchor="middle">Stage 3</text><text x="170" y="72" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">legs = 10</text><rect x="235" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><rect x="243" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><rect x="251" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><rect x="259" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><circle cx="214" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="220" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="226" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="232" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="238" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="244" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="250" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="256" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="262" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="268" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="274" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="280" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="286" cy="44" r="2.6" fill="#0f1f3d"/><text x="250" y="60" font-size="9" fill="#374151" text-anchor="middle">Stage 4</text><text x="250" y="72" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">legs = 13</text></svg>',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered numeric and geometric patterns.' },
    { minScore: 11, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-2):   Next term of a LINEAR numeric sequence
    // Block 2 (3-5):   Next term of a QUADRATIC numeric sequence
    // Block 3 (6-9):   Finding the algebraic (nth term) rule for a quadratic pattern
    // Block 4 (10-12): Geometric growth pattern (shapes/tiles/dots) — NEEDS DIAGRAM
    // Block 5 (13-14): Verifying a proposed rule by substitution (self-check)
    // Block 6 (15-19): Real-life pattern context problems
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Next term, linear sequence (Easy)
        { difficulty: 'Easy', question: 'Find the next term in the pattern 4, 9, 14, 19.', checkMode: 'auto', options: ['24', '23', '25', '29'], correctIndex: 0, explanation: 'First differences: 5, 5, 5 — constant, so this is a linear pattern with common difference 5. The next term is 19 + 5 = 24. (23 uses a difference of 4, 25 uses a difference of 6, and 29 mistakenly adds the difference twice.)' },
        { difficulty: 'Easy', question: 'Find the next term in the pattern 7, 15, 23, 31.', checkMode: 'auto', options: ['38', '39', '40', '47'], correctIndex: 1, explanation: 'First differences: 8, 8, 8 — constant. The next term is 31 + 8 = 39. (38 uses a difference of 7, 40 uses a difference of 9, and 47 mistakenly adds the difference twice.)' },
        { difficulty: 'Easy', question: 'Find the next term in the pattern 6, 13, 20, 27.', checkMode: 'auto', options: ['33', '35', '34', '41'], correctIndex: 2, explanation: 'First differences: 7, 7, 7 — constant. The next term is 27 + 7 = 34. (33 uses a difference of 6, 35 uses a difference of 8, and 41 mistakenly adds the difference twice.)' },

        // Block 2 — Next term, quadratic sequence (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Find the 5th term in the pattern 2, 6, 12, 20.', checkMode: 'auto', options: ['28', '29', '32', '30'], correctIndex: 3, explanation: 'First differences: 4, 6, 8 — increasing by 2 each time. The next difference is 10, so the 5th term is 20 + 10 = 30. (28 wrongly assumes the difference stays constant at 8, 29 assumes the differences increase by only 1, and 32 uses an incorrect next difference of 12.)' },
        { difficulty: 'Easy-Medium', question: 'Find the 5th term in the pattern 1, 4, 9, 16.', checkMode: 'auto', options: ['25', '23', '26', '28'], correctIndex: 0, explanation: 'These are perfect squares: 1², 2², 3², 4². The 5th term is 5² = 25. (23 wrongly assumes the difference stays constant at 7, 26 assumes the differences increase by 3, and 28 uses an incorrect next difference.)' },
        { difficulty: 'Easy-Medium', question: 'Find the 5th term in the pattern 3, 9, 19, 33.', checkMode: 'auto', options: ['47', '51', '53', '55'], correctIndex: 1, explanation: 'First differences: 6, 10, 14 — increasing by 4 each time. The next difference is 18, so the 5th term is 33 + 18 = 51. (47 wrongly assumes the difference stays constant at 14, 53 assumes the differences increase by 6, and 55 uses an incorrect next difference of 22.)' },

        // Block 3 — Find the algebraic rule (quadratic) (Medium)
        { difficulty: 'Medium', question: 'Find the algebraic rule for the pattern 5, 10, 17, 26.', checkMode: 'auto', options: ['n²+2n+1', 'n²+n+3', 'n²+2n+2', '2n²+n-1'], correctIndex: 2, explanation: 'First differences: 5, 7, 9 — increasing by 2. The constant second difference of 2 gives a leading coefficient of 2 ÷ 2 = 1. Testing n²+2n+2: n=1 gives 5, n=2 gives 10, n=3 gives 17, n=4 gives 26. Rule: n²+2n+2. (n²+2n+1 has the wrong constant term, n²+n+3 has the wrong linear coefficient, and 2n²+n-1 has the wrong leading coefficient.)' },
        { difficulty: 'Medium', question: 'Find the algebraic rule for the pattern 3, 12, 27, 48.', checkMode: 'auto', options: ['3n²+n', '6n²', '3n²-3n', '3n²'], correctIndex: 3, explanation: 'First differences: 9, 15, 21 — increasing by 6. The constant second difference of 6 gives a leading coefficient of 6 ÷ 2 = 3. Testing 3n²: n=1 gives 3, n=2 gives 12, n=3 gives 27, n=4 gives 48. Rule: 3n². (3n²+n wrongly adds a linear term, 6n² doubles the leading coefficient, and 3n²-3n has a sign error.)' },
        { difficulty: 'Medium', question: 'Find the algebraic rule for the pattern 2, 11, 26, 47.', checkMode: 'auto', options: ['3n²-1', '3n²-2', '3n²+n-1', '6n²-1'], correctIndex: 0, explanation: 'First differences: 9, 15, 21 — increasing by 6. The constant second difference of 6 gives a leading coefficient of 3. Testing 3n²-1: n=1 gives 2, n=2 gives 11, n=3 gives 26, n=4 gives 47. Rule: 3n²-1. (3n²-2 has the wrong constant term, 3n²+n-1 wrongly adds a linear term, and 6n²-1 doubles the leading coefficient.)' },
        { difficulty: 'Medium', question: 'A pattern follows the rule n²+3n. Find the 6th term.', checkMode: 'auto', options: ['39', '54', '40', '114'], correctIndex: 1, explanation: 'Substitute n=6: 6²+3(6) = 36+18 = 54. (39 forgets to multiply the second term by n, 40 mistakenly substitutes n=5 instead of n=6, and 114 swaps the coefficients to get 3n²+n.)' },

        // Block 4 — Geometric growth pattern (NEEDS DIAGRAM)
        { difficulty: 'Medium', question: 'The diagram shows Stages 1, 2 and 3 of a growing pattern of squares. Stage 1 has 4 squares, Stage 2 has 7 squares, Stage 3 has 10 squares. How many squares will Stage 6 have?', checkMode: 'auto', options: ['18', '16', '19', '22'], correctIndex: 2, explanation: 'First differences: 3, 3 — constant. Rule: squares = 3n+1. For Stage 6: 3(6)+1 = 18+1 = 19 squares. (18 drops the +1 constant, 16 uses Stage 5 instead of Stage 6, and 22 uses Stage 7 instead of Stage 6.)', diagramSvg: '<svg viewBox="0 0 270 110" xmlns="http://www.w3.org/2000/svg"><rect x="40.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="51.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="40.0" y="44.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="40.0" y="66.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="141.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="44.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="66.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="152.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="33.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="77.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="220.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="231.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="220.0" y="44.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="220.0" y="66.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="242.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="220.0" y="33.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="220.0" y="77.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="253.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="220.0" y="22.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="220.0" y="88.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="40" y="98" font-size="11" fill="#374151" text-anchor="middle">Stage 1</text><text x="130" y="98" font-size="11" fill="#374151" text-anchor="middle">Stage 2</text><text x="220" y="98" font-size="11" fill="#374151" text-anchor="middle">Stage 3</text></svg>' },
        { difficulty: 'Medium', question: 'The diagram shows Stages 1 to 4 of a growing triangular pattern of dots. Stage 1 has 1 dot, Stage 2 has 3 dots, Stage 3 has 6 dots, Stage 4 has 10 dots. How many dots will Stage 7 have?', checkMode: 'auto', options: ['21', '36', '49', '28'], correctIndex: 3, explanation: 'This is the triangular number pattern with rule dots = n(n+1)/2. For Stage 7: 7(8)/2 = 56/2 = 28 dots. (21 mistakenly uses n=6, 36 mistakenly uses n=8, and 49 wrongly uses n² = 7² instead of the triangular-number formula.)', diagramSvg: '<svg viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg"><circle cx="35.0" cy="20.0" r="3.2" fill="#0f1f3d"/><circle cx="95.0" cy="20.0" r="3.2" fill="#0f1f3d"/><circle cx="89.5" cy="30.0" r="3.2" fill="#0f1f3d"/><circle cx="100.5" cy="30.0" r="3.2" fill="#0f1f3d"/><circle cx="165.0" cy="20.0" r="3.2" fill="#0f1f3d"/><circle cx="159.5" cy="30.0" r="3.2" fill="#0f1f3d"/><circle cx="170.5" cy="30.0" r="3.2" fill="#0f1f3d"/><circle cx="154.0" cy="40.0" r="3.2" fill="#0f1f3d"/><circle cx="165.0" cy="40.0" r="3.2" fill="#0f1f3d"/><circle cx="176.0" cy="40.0" r="3.2" fill="#0f1f3d"/><circle cx="230.0" cy="20.0" r="3.2" fill="#0f1f3d"/><circle cx="224.5" cy="30.0" r="3.2" fill="#0f1f3d"/><circle cx="235.5" cy="30.0" r="3.2" fill="#0f1f3d"/><circle cx="219.0" cy="40.0" r="3.2" fill="#0f1f3d"/><circle cx="230.0" cy="40.0" r="3.2" fill="#0f1f3d"/><circle cx="241.0" cy="40.0" r="3.2" fill="#0f1f3d"/><circle cx="213.5" cy="50.0" r="3.2" fill="#0f1f3d"/><circle cx="224.5" cy="50.0" r="3.2" fill="#0f1f3d"/><circle cx="235.5" cy="50.0" r="3.2" fill="#0f1f3d"/><circle cx="246.5" cy="50.0" r="3.2" fill="#0f1f3d"/><text x="35" y="80" font-size="10" fill="#374151" text-anchor="middle">Stage 1</text><text x="95" y="80" font-size="10" fill="#374151" text-anchor="middle">Stage 2</text><text x="165" y="80" font-size="10" fill="#374151" text-anchor="middle">Stage 3</text><text x="230" y="80" font-size="10" fill="#374151" text-anchor="middle">Stage 4</text></svg>' },
        { difficulty: 'Medium', question: 'The diagram shows Stages 1, 2 and 3 of a growing pattern of matchstick triangles joined in a row. Stage 1 uses 3 matchsticks, Stage 2 uses 5 matchsticks, Stage 3 uses 7 matchsticks. How many matchsticks will Stage 9 need?', checkMode: 'auto', options: ['19', '18', '17', '21'], correctIndex: 0, explanation: 'First differences: 2, 2 — constant. Rule: matchsticks = 2n+1. For Stage 9: 2(9)+1 = 18+1 = 19 matchsticks. (18 drops the +1 constant, 17 uses Stage 8 instead of Stage 9, and 21 uses Stage 10 instead of Stage 9.)', diagramSvg: '<svg viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg"><line x1="10.0" y1="55.0" x2="23.0" y2="39.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="10.0" y1="55.0" x2="36.0" y2="55.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="23.0" y1="39.0" x2="36.0" y2="55.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="90.0" y1="55.0" x2="103.0" y2="39.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="103.0" y1="39.0" x2="116.0" y2="55.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="116.0" y1="55.0" x2="129.0" y2="39.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="90.0" y1="55.0" x2="116.0" y2="55.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="103.0" y1="39.0" x2="129.0" y2="39.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="175.0" y1="55.0" x2="188.0" y2="39.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="201.0" y1="55.0" x2="227.0" y2="55.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="188.0" y1="39.0" x2="201.0" y2="55.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="214.0" y1="39.0" x2="227.0" y2="55.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="201.0" y1="55.0" x2="214.0" y2="39.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="175.0" y1="55.0" x2="201.0" y2="55.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="188.0" y1="39.0" x2="214.0" y2="39.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><text x="16" y="90" font-size="10" fill="#374151" text-anchor="middle">Stage 1</text><text x="103" y="90" font-size="10" fill="#374151" text-anchor="middle">Stage 2</text><text x="194" y="90" font-size="10" fill="#374151" text-anchor="middle">Stage 3</text></svg>' },

        // Block 5 — Verify a proposed rule by substitution (Hard)
        { difficulty: 'Hard', question: 'Zinhle claims the pattern 4, 15, 32, 55 follows the rule 3n²+2n-1. What value does the rule give for n=3, and is the rule verified?', checkMode: 'auto', options: ['30 — not verified', '32 — verified', '29 — not verified', '35 — not verified'], correctIndex: 1, explanation: 'Substitute n=3: 3(3)²+2(3)-1 = 27+6-1 = 32, which matches the 3rd term of the pattern, so the rule is verified. (30 and 29 come from arithmetic slips, and 35 mistakenly uses n=4.)' },
        { difficulty: 'Hard', question: 'Bongani claims the pattern 1, 6, 13, 22 follows the rule n²+2n-2. What value does the rule give for n=3, and is the rule verified?', checkMode: 'auto', options: ['15 — not verified', '11 — not verified', '13 — verified', '22 — not verified'], correctIndex: 2, explanation: 'Substitute n=3: 3²+2(3)-2 = 9+6-2 = 13, which matches the 3rd term of the pattern, so the rule is verified. (15 forgets to subtract 2, 11 has a sign error, and 22 mistakenly uses n=4.)' },

        // Block 6 — Real-life pattern context problems (Hard)
        { difficulty: 'Hard', question: 'Tables are pushed together in a row for a function. 1 table seats 6 people, 2 tables joined seat 10 people, 3 tables joined seat 14 people. Find the rule and predict how many people 9 joined tables will seat.', checkMode: 'auto', options: ['34', '42', '37', '38'], correctIndex: 3, explanation: 'First differences: 4, 4 — constant. Rule: seats = 4n+2. For 9 tables: 4(9)+2 = 36+2 = 38 people. (34 mistakenly uses n=8, 42 mistakenly uses n=10, and 37 uses the wrong constant +1 instead of +2.)' },
        { difficulty: 'Hard', question: 'A square patio is bordered by white tiles, with the number of border tiles following the rule 4n+4, where n is the side length of the patio in tiles. What value does the rule give for n=5, and does this confirm 24 border tiles?', checkMode: 'auto', options: ['24 — yes, confirmed', '20 — no, rule gives 20', '28 — no, rule gives 28', '9 — no, rule gives 9'], correctIndex: 0, explanation: '4(5)+4 = 20+4 = 24, confirming the rule gives 24 border tiles when n=5. (20 forgets the +4 constant, 28 mistakenly uses n=6, and 9 forgets to multiply n by 4.)' },
        { difficulty: 'Hard', question: 'A pattern of hexagonal number dots gives 1, 7, 19, 37. Find the algebraic rule and predict the number of dots in Stage 5.', checkMode: 'auto', options: ['60', '61', '76', '46'], correctIndex: 1, explanation: 'First differences: 6, 12, 18 — increasing by 6. The constant second difference of 6 gives a leading coefficient of 3, so the rule is 3n²-3n+1. Verify: n=1 gives 1, n=2 gives 7, n=3 gives 19, n=4 gives 37 ✓. For Stage 5: 3(25)-3(5)+1 = 75-15+1 = 61 dots. (60 forgets the +1 constant, 76 has a sign error on the linear term, and 46 wrongly extrapolates from the differences without using the rule.)' },
        { difficulty: 'Hard', question: 'A row of chairs is set out around square tables, following the rule chairs = 2n+4, where n is the number of tables. Predict the number of chairs needed for 15 tables.', checkMode: 'auto', options: ['30', '36', '34', '19'], correctIndex: 2, explanation: 'chairs = 2(15)+4 = 30+4 = 34 chairs. (30 forgets the +4 constant, 36 mistakenly uses n=16, and 19 forgets to multiply n by 2.)' },
        { difficulty: 'Hard', question: 'Using the rule n²-n+5, find the 20th term of the pattern.', checkMode: 'auto', options: ['380', '425', '400', '385'], correctIndex: 3, explanation: 'n=20: 20²-20+5 = 400-20+5 = 385. (380 forgets the +5 constant, 425 has a sign error on the linear term, and 400 only uses the n² term.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered numeric and geometric patterns.' },
        { minScore: 15, message: 'Great work! Review any missed questions on finding rules or geometric growth patterns and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on first and second differences, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Next term, linear sequence (Easy)
        { difficulty: 'Easy', question: 'Find the next term in the pattern 5, 11, 17, 23.', checkMode: 'auto', options: ['29', '28', '30', '35'], correctIndex: 0, explanation: 'First differences: 6, 6, 6 — constant. The next term is 23 + 6 = 29. (28 uses a difference of 5, 30 uses a difference of 7, and 35 mistakenly adds the difference twice.)' },
        { difficulty: 'Easy', question: 'Find the next term in the pattern 9, 17, 25, 33.', checkMode: 'auto', options: ['40', '41', '42', '49'], correctIndex: 1, explanation: 'First differences: 8, 8, 8 — constant. The next term is 33 + 8 = 41. (40 uses a difference of 7, 42 uses a difference of 9, and 49 mistakenly adds the difference twice.)' },
        { difficulty: 'Easy', question: 'Find the next term in the pattern 4, 10, 16, 22.', checkMode: 'auto', options: ['27', '29', '28', '34'], correctIndex: 2, explanation: 'First differences: 6, 6, 6 — constant. The next term is 22 + 6 = 28. (27 uses a difference of 5, 29 uses a difference of 7, and 34 mistakenly adds the difference twice.)' },

        // Block 2 — Next term, quadratic sequence (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Find the 5th term in the pattern 3, 7, 13, 21.', checkMode: 'auto', options: ['29', '30', '33', '31'], correctIndex: 3, explanation: 'First differences: 4, 6, 8 — increasing by 2. The next difference is 10, so the 5th term is 21 + 10 = 31. (29 wrongly assumes the difference stays constant at 8, 30 assumes the differences increase by only 1, and 33 uses an incorrect next difference of 12.)' },
        { difficulty: 'Easy-Medium', question: 'Find the 5th term in the pattern 2, 5, 10, 17.', checkMode: 'auto', options: ['26', '24', '25', '27'], correctIndex: 0, explanation: 'First differences: 3, 5, 7 — increasing by 2. The next difference is 9, so the 5th term is 17 + 9 = 26. (24 wrongly assumes the difference stays constant at 7, 25 assumes the differences increase by only 1, and 27 uses an incorrect next difference of 10.)' },
        { difficulty: 'Easy-Medium', question: 'Find the 5th term in the pattern 4, 12, 24, 40.', checkMode: 'auto', options: ['56', '60', '58', '64'], correctIndex: 1, explanation: 'First differences: 8, 12, 16 — increasing by 4. The next difference is 20, so the 5th term is 40 + 20 = 60. (56 wrongly assumes the difference stays constant at 16, 58 assumes the differences increase by only 2, and 64 uses an incorrect next difference of 24.)' },

        // Block 3 — Find the algebraic rule (quadratic) (Medium)
        { difficulty: 'Medium', question: 'Find the algebraic rule for the pattern 6, 11, 18, 27.', checkMode: 'auto', options: ['n²+2n+2', 'n²+n+4', 'n²+2n+3', '2n²+n-2'], correctIndex: 2, explanation: 'First differences: 5, 7, 9 — increasing by 2. The constant second difference of 2 gives a leading coefficient of 1. Testing n²+2n+3: n=1 gives 6, n=2 gives 11, n=3 gives 18, n=4 gives 27. Rule: n²+2n+3. (n²+2n+2 has the wrong constant term, n²+n+4 has the wrong linear coefficient, and 2n²+n-2 has the wrong leading coefficient.)' },
        { difficulty: 'Medium', question: 'Find the algebraic rule for the pattern 4, 16, 36, 64.', checkMode: 'auto', options: ['4n²+4n', '8n²', '4n²-4n', '4n²'], correctIndex: 3, explanation: 'First differences: 12, 20, 28 — increasing by 8. The constant second difference of 8 gives a leading coefficient of 8 ÷ 2 = 4. Testing 4n²: n=1 gives 4, n=2 gives 16, n=3 gives 36, n=4 gives 64. Rule: 4n². (4n²+4n wrongly adds a linear term, 8n² doubles the leading coefficient, and 4n²-4n has a sign error.)' },
        { difficulty: 'Medium', question: 'Find the algebraic rule for the pattern 3, 14, 31, 54.', checkMode: 'auto', options: ['3n²+2n-2', '3n²+2n-3', '3n²+n-2', '6n²+2n-2'], correctIndex: 0, explanation: 'First differences: 11, 17, 23 — increasing by 6. The constant second difference of 6 gives a leading coefficient of 3. Testing 3n²+2n-2: n=1 gives 3, n=2 gives 14, n=3 gives 31, n=4 gives 54. Rule: 3n²+2n-2. (3n²+2n-3 has the wrong constant term, 3n²+n-2 has the wrong linear coefficient, and 6n²+2n-2 doubles the leading coefficient.)' },
        { difficulty: 'Medium', question: 'A pattern follows the rule n²+5n. Find the 7th term.', checkMode: 'auto', options: ['54', '84', '66', '91'], correctIndex: 1, explanation: 'Substitute n=7: 7²+5(7) = 49+35 = 84. (54 forgets to multiply the second term by n, 66 mistakenly substitutes n=6 instead of n=7, and 91 comes from an addition slip.)' },

        // Block 4 — Geometric growth pattern (NEEDS DIAGRAM)
        { difficulty: 'Medium', question: 'The diagram shows Stages 1, 2 and 3 of a growing pattern of pentagons joined edge to edge. Stage 1 has 5 sides showing, Stage 2 has 9 sides showing, Stage 3 has 13 sides showing. How many sides will Stage 7 show?', checkMode: 'auto', options: ['28', '25', '29', '33'], correctIndex: 2, explanation: 'First differences: 4, 4 — constant. Rule: sides = 4n+1. For Stage 7: 4(7)+1 = 28+1 = 29 sides. (28 drops the +1 constant, 25 uses Stage 6 instead of Stage 7, and 33 uses Stage 8 instead of Stage 7.)', diagramSvg: '<svg viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg"><polygon points="30.0,29.0 42.4,38.0 37.6,52.5 22.4,52.5 17.6,38.0" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><polygon points="105.0,29.0 117.4,38.0 112.6,52.5 97.4,52.5 92.6,38.0" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><polygon points="125.2,29.0 137.5,38.0 132.8,52.5 117.5,52.5 112.8,38.0" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><polygon points="195.0,29.0 207.4,38.0 202.6,52.5 187.4,52.5 182.6,38.0" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><polygon points="215.2,29.0 227.5,38.0 222.8,52.5 207.5,52.5 202.8,38.0" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><polygon points="235.3,29.0 247.7,38.0 242.9,52.5 227.7,52.5 222.9,38.0" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><text x="30" y="80" font-size="10" fill="#374151" text-anchor="middle">Stage 1</text><text x="30" y="93" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">5 sides</text><text x="115" y="80" font-size="10" fill="#374151" text-anchor="middle">Stage 2</text><text x="115" y="93" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">9 sides</text><text x="215" y="80" font-size="10" fill="#374151" text-anchor="middle">Stage 3</text><text x="215" y="93" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">13 sides</text></svg>' },
        { difficulty: 'Medium', question: 'The diagram shows Stages 1, 2 and 3 of a growing star-tile pattern. Stage 1 uses 2 tiles, Stage 2 uses 6 tiles, Stage 3 uses 10 tiles. How many tiles will Stage 8 use?', checkMode: 'auto', options: ['32', '26', '34', '30'], correctIndex: 3, explanation: 'First differences: 4, 4 — constant. Rule: tiles = 4n−2. For Stage 8: 4(8)−2 = 32−2 = 30 tiles. (32 drops the −2 constant, 26 uses Stage 7 instead of Stage 8, and 34 uses Stage 9 instead of Stage 8.)', diagramSvg: '<svg viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg"><rect x="30.0" y="40.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="30.0" y="50.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="110.0" y="40.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="110.0" y="50.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="110.0" y="60.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="110.0" y="30.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="100.0" y="40.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="120.0" y="40.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="205.0" y="40.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="205.0" y="50.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="205.0" y="60.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="205.0" y="30.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="195.0" y="40.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="215.0" y="40.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="205.0" y="70.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="205.0" y="20.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="185.0" y="40.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="225.0" y="40.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><text x="30" y="90" font-size="10" fill="#374151" text-anchor="middle">Stage 1</text><text x="110" y="90" font-size="10" fill="#374151" text-anchor="middle">Stage 2</text><text x="205" y="90" font-size="10" fill="#374151" text-anchor="middle">Stage 3</text></svg>' },
        { difficulty: 'Medium', question: 'The diagram shows Stages 1, 2 and 3 of a growing hexagon-tile border pattern. Stage 1 has 6 border tiles, Stage 2 has 10 border tiles, Stage 3 has 14 border tiles. How many border tiles will Stage 11 have?', checkMode: 'auto', options: ['46', '44', '42', '50'], correctIndex: 0, explanation: 'First differences: 4, 4 — constant. Rule: tiles = 4n+2. For Stage 11: 4(11)+2 = 44+2 = 46 tiles. (44 drops the +2 constant, 42 uses Stage 10 instead of Stage 11, and 50 uses Stage 12 instead of Stage 11.)', diagramSvg: '<svg viewBox="0 0 260 112" xmlns="http://www.w3.org/2000/svg"><polygon points="26.0,15.0 23.0,20.2 17.0,20.2 14.0,15.0 17.0,9.8 23.0,9.8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="26.0,23.7 23.0,28.9 17.0,28.9 14.0,23.7 17.0,18.5 23.0,18.5" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="26.0,32.4 23.0,37.6 17.0,37.6 14.0,32.4 17.0,27.2 23.0,27.2" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="35.3,15.0 32.3,20.2 26.3,20.2 23.3,15.0 26.3,9.8 32.3,9.8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="35.3,23.7 32.3,28.9 26.3,28.9 23.3,23.7 26.3,18.5 32.3,18.5" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="35.3,32.4 32.3,37.6 26.3,37.6 23.3,32.4 26.3,27.2 32.3,27.2" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="81.0,12.0 78.0,17.2 72.0,17.2 69.0,12.0 72.0,6.8 78.0,6.8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="81.0,20.7 78.0,25.9 72.0,25.9 69.0,20.7 72.0,15.5 78.0,15.5" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="81.0,29.4 78.0,34.6 72.0,34.6 69.0,29.4 72.0,24.2 78.0,24.2" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="81.0,38.1 78.0,43.3 72.0,43.3 69.0,38.1 72.0,32.9 78.0,32.9" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="90.3,12.0 87.3,17.2 81.3,17.2 78.3,12.0 81.3,6.8 87.3,6.8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="90.3,38.1 87.3,43.3 81.3,43.3 78.3,38.1 81.3,32.9 87.3,32.9" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="99.6,12.0 96.6,17.2 90.6,17.2 87.6,12.0 90.6,6.8 96.6,6.8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="99.6,20.7 96.6,25.9 90.6,25.9 87.6,20.7 90.6,15.5 96.6,15.5" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="99.6,29.4 96.6,34.6 90.6,34.6 87.6,29.4 90.6,24.2 96.6,24.2" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="99.6,38.1 96.6,43.3 90.6,43.3 87.6,38.1 90.6,32.9 96.6,32.9" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="156.0,8.0 153.0,13.2 147.0,13.2 144.0,8.0 147.0,2.8 153.0,2.8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="156.0,16.7 153.0,21.9 147.0,21.9 144.0,16.7 147.0,11.5 153.0,11.5" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="156.0,25.4 153.0,30.6 147.0,30.6 144.0,25.4 147.0,20.2 153.0,20.2" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="156.0,34.1 153.0,39.3 147.0,39.3 144.0,34.1 147.0,28.9 153.0,28.9" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="156.0,42.8 153.0,48.0 147.0,48.0 144.0,42.8 147.0,37.6 153.0,37.6" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="165.3,8.0 162.3,13.2 156.3,13.2 153.3,8.0 156.3,2.8 162.3,2.8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="165.3,42.8 162.3,48.0 156.3,48.0 153.3,42.8 156.3,37.6 162.3,37.6" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="174.6,8.0 171.6,13.2 165.6,13.2 162.6,8.0 165.6,2.8 171.6,2.8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="174.6,42.8 171.6,48.0 165.6,48.0 162.6,42.8 165.6,37.6 171.6,37.6" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="183.9,8.0 180.9,13.2 174.9,13.2 171.9,8.0 174.9,2.8 180.9,2.8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="183.9,16.7 180.9,21.9 174.9,21.9 171.9,16.7 174.9,11.5 180.9,11.5" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="183.9,25.4 180.9,30.6 174.9,30.6 171.9,25.4 174.9,20.2 180.9,20.2" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="183.9,34.1 180.9,39.3 174.9,39.3 171.9,34.1 174.9,28.9 180.9,28.9" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="183.9,42.8 180.9,48.0 174.9,48.0 171.9,42.8 174.9,37.6 180.9,37.6" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="25" y="102" font-size="10" fill="#374151" text-anchor="middle">Stage 1</text><text x="84" y="102" font-size="10" fill="#374151" text-anchor="middle">Stage 2</text><text x="164" y="102" font-size="10" fill="#374151" text-anchor="middle">Stage 3</text></svg>' },

        // Block 5 — Verify a proposed rule by substitution (Hard)
        { difficulty: 'Hard', question: 'Sipho claims the pattern 2, 9, 20, 35 follows the rule 2n²+n-1. What value does the rule give for n=3, and is the rule verified?', checkMode: 'auto', options: ['21 — not verified', '20 — verified', '14 — not verified', '35 — not verified'], correctIndex: 1, explanation: 'Substitute n=3: 2(3)²+3-1 = 18+3-1 = 20, which matches the 3rd term of the pattern, so the rule is verified. (21 forgets to subtract 1, 14 has a sign error, and 35 mistakenly uses n=4.)' },
        { difficulty: 'Hard', question: 'Amahle claims the pattern 3, 8, 15, 24 follows the rule n²+2n. What value does the rule give for n=3, and is the rule verified?', checkMode: 'auto', options: ['12 — not verified', '24 — not verified', '15 — verified', '16 — not verified'], correctIndex: 2, explanation: 'Substitute n=3: 3²+2(3) = 9+6 = 15, which matches the 3rd term of the pattern, so the rule is verified. (12 forgets to multiply the second term by n, 24 mistakenly uses n=4, and 16 comes from an addition slip.)' },

        // Block 6 — Real-life pattern context problems (Hard)
        { difficulty: 'Hard', question: 'Desks are pushed together in a row in a classroom. 1 desk seats 5 people, 2 desks joined seat 9 people, 3 desks joined seat 13 people. Find the rule and predict how many people 10 joined desks will seat.', checkMode: 'auto', options: ['40', '37', '45', '41'], correctIndex: 3, explanation: 'First differences: 4, 4 — constant. Rule: seats = 4n+1. For 10 desks: 4(10)+1 = 40+1 = 41 people. (40 drops the +1 constant, 37 mistakenly uses n=9, and 45 mistakenly uses n=11.)' },
        { difficulty: 'Hard', question: 'A rectangular garden is bordered by paving tiles, with the number of border tiles following the rule 6n+2, where n is the side length of the garden in tiles. What value does the rule give for n=6, and does this confirm 38 border tiles?', checkMode: 'auto', options: ['38 — yes, confirmed', '36 — no, rule gives 36', '44 — no, rule gives 44', '8 — no, rule gives 8'], correctIndex: 0, explanation: '6(6)+2 = 36+2 = 38, confirming the rule gives 38 border tiles when n=6. (36 forgets the +2 constant, 44 mistakenly uses n=7, and 8 forgets to multiply n by 6.)' },
        { difficulty: 'Hard', question: 'A pattern of diamond-shaped dot arrangements gives 1, 5, 13, 25. Find the algebraic rule and predict the number of dots in Stage 6.', checkMode: 'auto', options: ['60', '61', '85', '36'], correctIndex: 1, explanation: 'First differences: 4, 8, 12 — increasing by 4. The constant second difference of 4 gives a leading coefficient of 2, so the rule is 2n²-2n+1. Verify: n=1 gives 1, n=2 gives 5, n=3 gives 13, n=4 gives 25 ✓. For Stage 6: 2(36)-2(6)+1 = 72-12+1 = 61 dots. (60 forgets the +1 constant, 85 has a sign error on the linear term, and 36 only uses the n² term.)' },
        { difficulty: 'Hard', question: 'Fence posts are placed along a straight fence, following the rule posts = 3n+2, where n is the number of fence sections. Predict the number of posts needed for 20 sections.', checkMode: 'auto', options: ['60', '65', '62', '22'], correctIndex: 2, explanation: 'posts = 3(20)+2 = 60+2 = 62 posts. (60 drops the +2 constant, 65 mistakenly uses n=21, and 22 forgets to multiply n by 3.)' },
        { difficulty: 'Hard', question: 'Using the rule 2n²-n+3, find the 18th term of the pattern.', checkMode: 'auto', options: ['630', '669', '648', '633'], correctIndex: 3, explanation: 'n=18: 2(18²)-18+3 = 2(324)-18+3 = 648-18+3 = 633. (630 forgets the +3 constant, 669 has a sign error on the linear term, and 648 only uses the 2n² term.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered numeric and geometric patterns.' },
        { minScore: 15, message: 'Great work! Review any missed questions on finding rules or geometric growth patterns and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on first and second differences, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Next term, linear sequence (Easy)
        { difficulty: 'Easy', question: 'Find the next term in the pattern 8, 14, 20, 26.', checkMode: 'auto', options: ['32', '31', '33', '38'], correctIndex: 0, explanation: 'First differences: 6, 6, 6 — constant. The next term is 26 + 6 = 32. (31 uses a difference of 5, 33 uses a difference of 7, and 38 mistakenly adds the difference twice.)' },
        { difficulty: 'Easy', question: 'Find the next term in the pattern 6, 16, 26, 36.', checkMode: 'auto', options: ['45', '46', '47', '56'], correctIndex: 1, explanation: 'First differences: 10, 10, 10 — constant. The next term is 36 + 10 = 46. (45 uses a difference of 9, 47 uses a difference of 11, and 56 mistakenly adds the difference twice.)' },
        { difficulty: 'Easy', question: 'Find the next term in the pattern 9, 16, 23, 30.', checkMode: 'auto', options: ['36', '38', '37', '44'], correctIndex: 2, explanation: 'First differences: 7, 7, 7 — constant. The next term is 30 + 7 = 37. (36 uses a difference of 6, 38 uses a difference of 8, and 44 mistakenly adds the difference twice.)' },

        // Block 2 — Next term, quadratic sequence (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Find the 5th term in the pattern 4, 9, 16, 25.', checkMode: 'auto', options: ['34', '35', '38', '36'], correctIndex: 3, explanation: 'These are (n+1)²: 2², 3², 4², 5². The 5th term is 6² = 36. (34 wrongly assumes the difference stays constant at 9, 35 assumes the differences increase by only 1, and 38 uses an incorrect next difference of 13.)' },
        { difficulty: 'Easy-Medium', question: 'Find the 5th term in the pattern 3, 6, 11, 18.', checkMode: 'auto', options: ['27', '25', '26', '29'], correctIndex: 0, explanation: 'First differences: 3, 5, 7 — increasing by 2. The next difference is 9, so the 5th term is 18 + 9 = 27. (25 wrongly assumes the difference stays constant at 7, 26 assumes the differences increase by only 1, and 29 uses an incorrect next difference of 11.)' },
        { difficulty: 'Easy-Medium', question: 'Find the 5th term in the pattern 5, 15, 29, 47.', checkMode: 'auto', options: ['65', '69', '67', '73'], correctIndex: 1, explanation: 'First differences: 10, 14, 18 — increasing by 4. The next difference is 22, so the 5th term is 47 + 22 = 69. (65 wrongly assumes the difference stays constant at 18, 67 assumes the differences increase by only 2, and 73 uses an incorrect next difference of 26.)' },

        // Block 3 — Find the algebraic rule (quadratic) (Medium)
        { difficulty: 'Medium', question: 'Find the algebraic rule for the pattern 7, 12, 19, 28.', checkMode: 'auto', options: ['n²+2n+3', 'n²+n+5', 'n²+2n+4', '2n²+n-1'], correctIndex: 2, explanation: 'First differences: 5, 7, 9 — increasing by 2. The constant second difference of 2 gives a leading coefficient of 1. Testing n²+2n+4: n=1 gives 7, n=2 gives 12, n=3 gives 19, n=4 gives 28. Rule: n²+2n+4. (n²+2n+3 has the wrong constant term, n²+n+5 has the wrong linear coefficient, and 2n²+n-1 has the wrong leading coefficient.)' },
        { difficulty: 'Medium', question: 'Find the algebraic rule for the pattern 5, 20, 45, 80.', checkMode: 'auto', options: ['5n²+5n', '10n²', '5n²-5n', '5n²'], correctIndex: 3, explanation: 'First differences: 15, 25, 35 — increasing by 10. The constant second difference of 10 gives a leading coefficient of 10 ÷ 2 = 5. Testing 5n²: n=1 gives 5, n=2 gives 20, n=3 gives 45, n=4 gives 80. Rule: 5n². (5n²+5n wrongly adds a linear term, 10n² doubles the leading coefficient, and 5n²-5n has a sign error.)' },
        { difficulty: 'Medium', question: 'Find the algebraic rule for the pattern 4, 17, 36, 61.', checkMode: 'auto', options: ['3n²+4n-3', '3n²+4n-4', '3n²+3n-3', '6n²+4n-3'], correctIndex: 0, explanation: 'First differences: 13, 19, 25 — increasing by 6. The constant second difference of 6 gives a leading coefficient of 3. Testing 3n²+4n-3: n=1 gives 4, n=2 gives 17, n=3 gives 36, n=4 gives 61. Rule: 3n²+4n-3. (3n²+4n-4 has the wrong constant term, 3n²+3n-3 has the wrong linear coefficient, and 6n²+4n-3 doubles the leading coefficient.)' },
        { difficulty: 'Medium', question: 'A pattern follows the rule n²+4n. Find the 8th term.', checkMode: 'auto', options: ['68', '96', '77', '104'], correctIndex: 1, explanation: 'Substitute n=8: 8²+4(8) = 64+32 = 96. (68 forgets to multiply the second term by n, 77 mistakenly substitutes n=7 instead of n=8, and 104 comes from an addition slip.)' },

        // Block 4 — Geometric growth pattern (NEEDS DIAGRAM)
        { difficulty: 'Medium', question: 'The diagram shows Stages 1, 2 and 3 of a growing pattern of plus-shaped tile crosses. Stage 1 has 5 tiles, Stage 2 has 9 tiles, Stage 3 has 13 tiles. How many tiles will Stage 9 have?', checkMode: 'auto', options: ['36', '33', '37', '41'], correctIndex: 2, explanation: 'First differences: 4, 4 — constant. Rule: tiles = 4n+1. For Stage 9: 4(9)+1 = 36+1 = 37 tiles. (36 drops the +1 constant, 33 uses Stage 8 instead of Stage 9, and 41 uses Stage 10 instead of Stage 9.)', diagramSvg: '<svg viewBox="0 0 270 112" xmlns="http://www.w3.org/2000/svg"><rect x="35.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="46.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="24.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="35.0" y="44.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="35.0" y="66.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="141.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="119.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="44.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="66.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="152.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="108.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="33.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="77.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="225.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="236.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="214.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="225.0" y="44.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="225.0" y="66.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="247.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="203.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="225.0" y="33.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="225.0" y="77.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="258.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="192.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="225.0" y="22.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="225.0" y="88.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="35" y="102" font-size="10" fill="#374151" text-anchor="middle">Stage 1</text><text x="130" y="102" font-size="10" fill="#374151" text-anchor="middle">Stage 2</text><text x="225" y="102" font-size="10" fill="#374151" text-anchor="middle">Stage 3</text></svg>' },
        { difficulty: 'Medium', question: 'The diagram shows Stages 1, 2 and 3 of a growing triangular border of dots. Stage 1 has 3 dots, Stage 2 has 7 dots, Stage 3 has 11 dots. How many dots will Stage 10 have?', checkMode: 'auto', options: ['40', '35', '43', '39'], correctIndex: 3, explanation: 'First differences: 4, 4 — constant. Rule: dots = 4n−1. For Stage 10: 4(10)−1 = 40−1 = 39 dots. (40 drops the −1 constant, 35 uses Stage 9 instead of Stage 10, and 43 uses Stage 11 instead of Stage 10.)', diagramSvg: '<svg viewBox="0 0 260 105" xmlns="http://www.w3.org/2000/svg"><circle cx="30.0" cy="15.0" r="3.2" fill="#0f1f3d"/><circle cx="20.0" cy="33.0" r="3.2" fill="#0f1f3d"/><circle cx="40.0" cy="33.0" r="3.2" fill="#0f1f3d"/><circle cx="120.0" cy="15.0" r="3.2" fill="#0f1f3d"/><circle cx="111.0" cy="30.0" r="3.2" fill="#0f1f3d"/><circle cx="129.0" cy="30.0" r="3.2" fill="#0f1f3d"/><circle cx="102.0" cy="45.0" r="3.2" fill="#0f1f3d"/><circle cx="114.0" cy="45.0" r="3.2" fill="#0f1f3d"/><circle cx="126.0" cy="45.0" r="3.2" fill="#0f1f3d"/><circle cx="138.0" cy="45.0" r="3.2" fill="#0f1f3d"/><circle cx="220.0" cy="10.0" r="3.2" fill="#0f1f3d"/><circle cx="211.0" cy="25.0" r="3.2" fill="#0f1f3d"/><circle cx="229.0" cy="25.0" r="3.2" fill="#0f1f3d"/><circle cx="202.0" cy="40.0" r="3.2" fill="#0f1f3d"/><circle cx="238.0" cy="40.0" r="3.2" fill="#0f1f3d"/><circle cx="193.0" cy="55.0" r="3.2" fill="#0f1f3d"/><circle cx="203.8" cy="55.0" r="3.2" fill="#0f1f3d"/><circle cx="214.6" cy="55.0" r="3.2" fill="#0f1f3d"/><circle cx="225.4" cy="55.0" r="3.2" fill="#0f1f3d"/><circle cx="236.2" cy="55.0" r="3.2" fill="#0f1f3d"/><circle cx="247.0" cy="55.0" r="3.2" fill="#0f1f3d"/><text x="30" y="95" font-size="10" fill="#374151" text-anchor="middle">Stage 1</text><text x="120" y="95" font-size="10" fill="#374151" text-anchor="middle">Stage 2</text><text x="220" y="95" font-size="10" fill="#374151" text-anchor="middle">Stage 3</text></svg>' },
        { difficulty: 'Medium', question: 'The diagram shows Stages 1, 2 and 3 of a growing pattern of L-shaped tiles. Stage 1 has 5 tiles, Stage 2 has 8 tiles, Stage 3 has 11 tiles. How many tiles will Stage 12 have?', checkMode: 'auto', options: ['38', '36', '35', '41'], correctIndex: 0, explanation: 'First differences: 3, 3 — constant. Rule: tiles = 3n+2. For Stage 12: 3(12)+2 = 36+2 = 38 tiles. (36 drops the +2 constant, 35 uses Stage 11 instead of Stage 12, and 41 uses Stage 13 instead of Stage 12.)', diagramSvg: '<svg viewBox="0 0 260 110" xmlns="http://www.w3.org/2000/svg"><rect x="15.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="15.0" y="24.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="15.0" y="33.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="24.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="33.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="90.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="90.0" y="24.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="90.0" y="33.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="90.0" y="42.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="99.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="108.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="117.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="126.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="180.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="180.0" y="24.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="180.0" y="33.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="180.0" y="42.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="180.0" y="51.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="189.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="198.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="207.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="216.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="225.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="234.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="24" y="100" font-size="10" fill="#374151" text-anchor="middle">Stage 1</text><text x="108" y="100" font-size="10" fill="#374151" text-anchor="middle">Stage 2</text><text x="207" y="100" font-size="10" fill="#374151" text-anchor="middle">Stage 3</text></svg>' },

        // Block 5 — Verify a proposed rule by substitution (Hard)
        { difficulty: 'Hard', question: 'Lerato claims the pattern 4, 13, 28, 49 follows the rule 3n²+1. What value does the rule give for n=3, and is the rule verified?', checkMode: 'auto', options: ['27 — not verified', '28 — verified', '13 — not verified', '30 — not verified'], correctIndex: 1, explanation: 'Substitute n=3: 3(3)²+1 = 27+1 = 28, which matches the 3rd term of the pattern, so the rule is verified. (27 forgets the +1 constant, 13 mistakenly uses n=2, and 30 comes from an arithmetic slip.)' },
        { difficulty: 'Hard', question: 'Thabo claims the pattern 2, 8, 18, 32 follows the rule 2n². What value does the rule give for n=3, and is the rule verified?', checkMode: 'auto', options: ['9 — not verified', '32 — not verified', '18 — verified', '16 — not verified'], correctIndex: 2, explanation: 'Substitute n=3: 2(3)² = 2(9) = 18, which matches the 3rd term of the pattern, so the rule is verified. (9 forgets to multiply by 2, 32 mistakenly uses n=4, and 16 comes from an arithmetic slip.)' },

        // Block 6 — Real-life pattern context problems (Hard)
        { difficulty: 'Hard', question: 'Benches are pushed together in a row at a stadium. 1 bench seats 4 people, 2 benches joined seat 7 people, 3 benches joined seat 10 people. Find the rule and predict how many people 11 joined benches will seat.', checkMode: 'auto', options: ['33', '31', '37', '34'], correctIndex: 3, explanation: 'First differences: 3, 3 — constant. Rule: seats = 3n+1. For 11 benches: 3(11)+1 = 33+1 = 34 people. (33 drops the +1 constant, 31 mistakenly uses n=10, and 37 mistakenly uses n=12.)' },
        { difficulty: 'Hard', question: 'A square courtyard is bordered by paving tiles, with the number of border tiles following the rule 5n+3, where n is the side length of the courtyard in tiles. What value does the rule give for n=7, and does this confirm 38 border tiles?', checkMode: 'auto', options: ['38 — yes, confirmed', '35 — no, rule gives 35', '43 — no, rule gives 43', '10 — no, rule gives 10'], correctIndex: 0, explanation: '5(7)+3 = 35+3 = 38, confirming the rule gives 38 border tiles when n=7. (35 forgets the +3 constant, 43 mistakenly uses n=8, and 10 forgets to multiply n by 5.)' },
        { difficulty: 'Hard', question: 'A pattern of star-shaped dot arrangements gives 2, 6, 14, 26. Find the algebraic rule and predict the number of dots in Stage 6.', checkMode: 'auto', options: ['60', '62', '86', '36'], correctIndex: 1, explanation: 'First differences: 4, 8, 12 — increasing by 4. The constant second difference of 4 gives a leading coefficient of 2, so the rule is 2n²-2n+2. Verify: n=1 gives 2, n=2 gives 6, n=3 gives 14, n=4 gives 26 ✓. For Stage 6: 2(36)-2(6)+2 = 72-12+2 = 62 dots. (60 forgets the +2 constant, 86 has a sign error on the linear term, and 36 only uses the n² term.)' },
        { difficulty: 'Hard', question: 'Rungs are fixed along a ladder frame, following the rule rungs = 2n+3, where n is the number of frame sections. Predict the number of rungs needed for 25 sections.', checkMode: 'auto', options: ['50', '55', '53', '28'], correctIndex: 2, explanation: 'rungs = 2(25)+3 = 50+3 = 53 rungs. (50 drops the +3 constant, 55 mistakenly uses n=26, and 28 forgets to multiply n by 2.)' },
        { difficulty: 'Hard', question: 'Using the rule 2n²+n-4, find the 16th term of the pattern.', checkMode: 'auto', options: ['508', '492', '512', '524'], correctIndex: 3, explanation: 'n=16: 2(16²)+16-4 = 2(256)+16-4 = 512+16-4 = 524. (508 forgets the +n linear term, 492 has a sign error on the linear term, and 512 only uses the 2n² term.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered numeric and geometric patterns.' },
        { minScore: 15, message: 'Great work! Review any missed questions on finding rules or geometric growth patterns and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on first and second differences, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
