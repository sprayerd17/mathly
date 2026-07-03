import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (functions and relationships roles) ───────────────────────
// input value        → blue   (#2563eb)
// output value       → green  (#16a34a)
// equation           → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Functions and Relationships',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — INPUT, OUTPUT VALUES AND EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'input-output-equations',
      title: 'Input, Output Values and Equations',
      icon: '⟶',
      explanation:
        `<p style="margin-bottom:16px;">We determine <strong>input values</strong>, <strong>output values</strong> or rules for patterns and relationships using flow diagrams, tables, formulae and now <strong>equations</strong> as well. Given an equation, we <strong>substitute</strong> to find input or output values.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('input value')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('output value')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('equation')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Input value (x)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The value we substitute into the equation — the starting value.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Output value (y)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The value we get after applying the rule — the result of substitution.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Equation</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A mathematical statement with an equals sign that describes the relationship between input and output.</p>` +
        `</div>` +

        `</div>` +

        // ── How to find output and input ─────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Finding output and input values</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Finding the output (y)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Substitute the ${bl('input value')} into the ${or('equation')} and calculate the ${gr('output value')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: y = 4x − 3, ${bl('x = 6')} → y = 4(6) − 3 = ${gr('21')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Finding the input (x)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Substitute the ${gr('output value')} into the ${or('equation')}, then solve for ${bl('x')} using inverse operations.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: y = 2x + 7, ${gr('y = 19')} → solve for ${bl('x')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Substitution vs solving</p>` +
        `<p style="margin:0;color:#1e3a8a;">When you know ${bl('x')} and want ${gr('y')}: <strong>substitute directly</strong> and calculate. When you know ${gr('y')} and want ${bl('x')}: set up the ${or('equation')} with the known ${gr('y')} value, then <strong>solve using inverse operations</strong> (do the opposite of what was done to x).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Using the equation ${or('y = 4x − 3')}, find y when ${bl('x = 6')}.`,
          answer: `${gr('y = 21')}`,
          steps: [
            `Write the ${or('equation')}: ${or('y = 4x − 3')}.`,
            `Substitute ${bl('x = 6')}: y = 4(${bl('6')}) − 3.`,
            `Calculate: y = 24 − 3 = ${gr('21')}.`,
            `<strong>Answer:</strong> When ${bl('x = 6')}, ${gr('y = 21')} ✓`,
          ],
        },
        {
          question: `Using the equation ${or('y = 2x + 7')}, find x when ${gr('y = 19')}.`,
          answer: `${bl('x = 6')}`,
          steps: [
            `Write the ${or('equation')} with the known ${gr('output value')}: ${or('19 = 2x + 7')}.`,
            `<strong>Subtract 7 from both sides:</strong> 19 − 7 = 2x → 12 = 2x.`,
            `<strong>Divide both sides by 2:</strong> ${bl('x')} = 12 ÷ 2 = ${bl('6')}.`,
            `<strong>Check:</strong> y = 2(${bl('6')}) + 7 = 12 + 7 = ${gr('19')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to substitute input values into an equation to find output values, and how to use inverse operations to find input values from a given output" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Flow diagram showing the equation y=4x-3 with input value x in blue, the equation operation in orange, and output value y in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — EQUIVALENT FORMS OF A RELATIONSHIP
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equivalent-forms',
      title: 'Equivalent Forms of a Relationship',
      icon: '≡',
      explanation:
        `<p style="margin-bottom:16px;">We determine, interpret and justify <strong>equivalence</strong> of different descriptions of the same relationship presented <strong>verbally</strong>, in <strong>flow diagrams</strong>, in <strong>tables</strong>, by <strong>formulae</strong>, and now by <strong>equations</strong>. All these forms describe exactly the same rule.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('verbal description')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('table values')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('equation')}</span>` +
        `</div>` +

        // ── Five forms ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Five equivalent forms of a relationship</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Verbal description</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The rule written in words, e.g. "multiply by 3 then add 5."</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Flow diagram</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A diagram showing the input, the operation(s) applied, and the output.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Table of values</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A table showing matching ${gr('x and y values')} for the relationship.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Formula</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A symbolic rule such as y = 3x + 5 using algebraic notation.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Equation</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${or('equation')} form explicitly names both variables: ${or('y = 3x + 5')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Strategy ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategy: moving between forms</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Verbal → Equation:')} Let x = input and y = output. Translate each operation into algebraic notation in order.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Table → Equation:')} Look at the ${gr('differences')} in y-values. If constant, the rule is linear. Test y = (difference)x + c and solve for c using any ${gr('table value')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Check:')} Always verify your ${or('equation')} by substituting two or more x-values from the table and confirming the y-values match.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">All forms are equally valid</p>` +
        `<p style="margin:0;color:#1e3a8a;">A ${bl('verbal description')}, a ${gr('table of values')}, and an ${or('equation')} can all describe the <em>same</em> relationship. Being able to move between these forms — and justify that they are equivalent — is a core skill in this section.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `A relationship is described ${bl('verbally')} as "multiply by 3 and add 5". Write this as an ${or('equation')}.`,
          answer: `${or('y = 3x + 5')}`,
          steps: [
            `Let the ${bl('input')} be x and the output be y.`,
            `Translate the ${bl('verbal description')} step by step: "multiply by 3" → 3x; "add 5" → + 5.`,
            `Write the ${or('equation')}: ${or('y = 3x + 5')}.`,
            `<strong>Check:</strong> If x = 2, y = 3(2) + 5 = 11. Verbally: "multiply 2 by 3 = 6, add 5 = 11" ✓`,
          ],
        },
        {
          question: `Sipho has a ${gr('table')} showing x: 1, 2, 3, 4 and y: 6, 9, 12, 15. Write the ${or('equation')} describing this relationship.`,
          answer: `${or('y = 3x + 3')}`,
          steps: [
            `Look at the ${gr('differences')} in y: 9 − 6 = 3, 12 − 9 = 3, 15 − 12 = 3. The differences are constant at ${gr('3')}, so the rule is linear.`,
            `Try ${or('y = 3x + c')}: substitute ${gr('x = 1, y = 6')} → 6 = 3(1) + c → c = 3.`,
            `<strong>Equation:</strong> ${or('y = 3x + 3')}.`,
            `<strong>Check:</strong> x = 1: y = 3 + 3 = ${gr('6')} ✓ · x = 2: y = 6 + 3 = ${gr('9')} ✓ · x = 4: y = 12 + 3 = ${gr('15')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to convert a verbal description of a relationship into an equation, and how to find an equation from a table of values" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Side-by-side comparison of five equivalent forms of the relationship y=3x+5: verbal description in blue, flow diagram, table of values in green, formula, and equation in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — GENERATING TABLES OF ORDERED PAIRS USING SUBSTITUTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ordered-pairs-substitution',
      title: 'Generating Tables of Ordered Pairs Using Substitution',
      icon: '📋',
      explanation:
        `<p style="margin-bottom:16px;">We use <strong>substitution</strong> in equations to generate <strong>tables of ordered pairs</strong>. Each ordered pair has the form (x, y). These pairs can later be <strong>plotted as points</strong> on a Cartesian plane, producing the graph of the relationship.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-values')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-values')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('ordered pairs')}</span>` +
        `</div>` +

        // ── What is an ordered pair ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Ordered pairs</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin-bottom:10px;">An <strong>ordered pair</strong> is written as ${or('(x, y)')} where ${bl('x')} is the input value and ${gr('y')} is the output value. The order matters — ${bl('x')} always comes first.</p>` +
        `<p style="margin:0;color:#6b7280;font-size:14px;">Example: For y = 2x − 1 with ${bl('x = 3')}: y = 2(3) − 1 = ${gr('5')}. Ordered pair: ${or('(3, 5)')}</p>` +
        `</div>` +

        // ── Steps ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps to generate a table of ordered pairs</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('List the x-values')} given in the question.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Substitute</strong> each ${bl('x-value')} into the equation and calculate the corresponding ${gr('y-value')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Write each result as an ${or('ordered pair (x, y)')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Negative x-values</p>` +
        `<p style="margin:0;color:#1e3a8a;">Be careful when substituting negative ${bl('x-values')}. For example, if x = −1 and the equation is y = −x + 4: y = −(−1) + 4 = 1 + 4 = ${gr('5')}. Removing a negative sign from a negative value makes it <strong>positive</strong>.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Using ${or('y = 2x − 1')}, generate a table of ordered pairs for ${bl('x = 0, 1, 2, 3')}.`,
          answer: `${or('(0, −1), (1, 1), (2, 3), (3, 5)')}`,
          steps: [
            `Write the equation: ${or('y = 2x − 1')}.`,
            `${bl('x = 0')}: y = 2(0) − 1 = ${gr('−1')}. Ordered pair: ${or('(0, −1)')}.`,
            `${bl('x = 1')}: y = 2(1) − 1 = ${gr('1')}. Ordered pair: ${or('(1, 1)')}.`,
            `${bl('x = 2')}: y = 2(2) − 1 = ${gr('3')}. Ordered pair: ${or('(2, 3)')}.`,
            `${bl('x = 3')}: y = 2(3) − 1 = ${gr('5')}. Ordered pair: ${or('(3, 5)')}.`,
            `<strong>Answer:</strong> ${or('(0, −1), (1, 1), (2, 3), (3, 5)')} ✓`,
          ],
        },
        {
          question: `Lerato uses ${or('y = −x + 4')} for ${bl('x = −1, 0, 1, 2')}. Generate the ordered pairs.`,
          answer: `${or('(−1, 5), (0, 4), (1, 3), (2, 2)')}`,
          steps: [
            `Write the equation: ${or('y = −x + 4')}.`,
            `${bl('x = −1')}: y = −(−1) + 4 = 1 + 4 = ${gr('5')}. Ordered pair: ${or('(−1, 5)')}.`,
            `${bl('x = 0')}: y = −(0) + 4 = ${gr('4')}. Ordered pair: ${or('(0, 4)')}.`,
            `${bl('x = 1')}: y = −(1) + 4 = ${gr('3')}. Ordered pair: ${or('(1, 3)')}.`,
            `${bl('x = 2')}: y = −(2) + 4 = ${gr('2')}. Ordered pair: ${or('(2, 2)')}.`,
            `<strong>Answer:</strong> ${or('(−1, 5), (0, 4), (1, 3), (2, 2)')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to substitute x-values into an equation step by step and write the results as ordered pairs in a table" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Table of ordered pairs for y=2x-1 with x-values in blue and y-values in green, and the resulting ordered pairs in orange ready to be plotted on a Cartesian plane" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Using y = 5x + 2, find y when x = 4.',
      answer: '22',
      checkMode: 'auto',
      correctAnswer: '22',
      explanation: 'Substitute x = 4: y = 5(4) + 2 = 20 + 2 = 22 ✓',
    },

    // ── Q2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Using y = 3x − 7, find x when y = 11.',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      explanation: '11 = 3x − 7 → 3x = 11 + 7 = 18 → x = 18 ÷ 3 = 6 ✓',
    },

    // ── Q3 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says that using y = 2x + 9, when y = 21, x = 15. Is he correct? Explain.',
      answer: 'No — 21 = 2x + 9 gives 2x = 12, so x = 6, not 15.',
      checkMode: 'self',
    },

    // ── Q4 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "A relationship is described as 'subtract 4 then multiply by 2'. Write this as an equation.",
      answer: 'y = 2(x − 4)',
      checkMode: 'auto',
      correctAnswer: 'y=2(x-4)',
      correctAnswers: ['y=2(x-4)', 'y = 2(x - 4)', 'y=2(x−4)', 'y = 2(x − 4)'],
      explanation: 'Let x = input and y = output. "Subtract 4": (x − 4). "Then multiply by 2": y = 2(x − 4) ✓',
    },

    // ── Q5 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A table shows x: 1, 2, 3, 4 and y: 7, 10, 13, 16. Find the equation.',
      answer: 'y = 3x + 4',
      checkMode: 'auto',
      correctAnswer: 'y=3x+4',
      correctAnswers: ['y=3x+4', 'y = 3x + 4'],
      explanation: 'Differences in y: 10−7=3, 13−10=3 — constant difference of 3. Try y = 3x + c: x=1, y=7 → 7 = 3(1) + c → c = 4. Equation: y = 3x + 4. Check: x=4: y = 12 + 4 = 16 ✓',
    },

    // ── Q6 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato has a table showing x: 2, 4, 6, 8 and y: 9, 17, 25, 33. Find the equation.',
      answer: 'Differences are 8 for every increase of 2 in x, meaning the rate is 4 per unit. Equation: y = 4x + 1.',
      checkMode: 'self',
    },

    // ── Q7 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Generate a table of ordered pairs using y = 3x + 1 for x = 0, 1, 2, 3.',
      answer: '(0, 1), (1, 4), (2, 7), (3, 10).',
      checkMode: 'self',
    },

    // ── Q8 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Using y = −2x + 6, find y when x = 3.',
      answer: '0',
      checkMode: 'auto',
      correctAnswer: '0',
      explanation: 'Substitute x = 3: y = −2(3) + 6 = −6 + 6 = 0 ✓',
    },

    // ── Q9 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo generates ordered pairs using y = x² + 1 for x = 0, 1, 2, 3 and gets (0, 1), (1, 2), (2, 5), (3, 10). Check his table.',
      answer: 'Correct — substituting each x value into x² + 1 gives the listed y values.',
      checkMode: 'self',
    },

    // ── Q10 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Using y = 4x − 9, find x when y = 15.',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      explanation: '15 = 4x − 9 → 4x = 15 + 9 = 24 → x = 24 ÷ 4 = 6 ✓',
    },

    // ── Q11 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says the equation y = 5x − 2 and the table x: 1, 2, 3 — y: 3, 8, 13 describe the same relationship. Is she correct? Explain.',
      answer: 'No — substituting x = 1 into y = 5x − 2 gives y = 3 ✓, but x = 2 gives y = 8 ✓, and x = 3 gives y = 13 ✓. Actually all values match, so she is correct.',
      checkMode: 'self',
    },

    // ── Q12 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Generate ordered pairs using y = −x − 3 for x = −2, −1, 0, 1.',
      answer: '(-2,-1),(-1,-2),(0,-3),(1,-4)',
      checkMode: 'auto',
      correctAnswer: '(-2,-1),(-1,-2),(0,-3),(1,-4)',
      correctAnswers: [
        '(-2,-1),(-1,-2),(0,-3),(1,-4)',
        '(−2,−1),(−1,−2),(0,−3),(1,−4)',
        '(-2, -1), (-1, -2), (0, -3), (1, -4)',
        '(−2, −1), (−1, −2), (0, −3), (1, −4)',
      ],
      explanation: 'x=−2: y=−(−2)−3=2−3=−1 → (−2,−1). x=−1: y=−(−1)−3=1−3=−2 → (−1,−2). x=0: y=0−3=−3 → (0,−3). x=1: y=−1−3=−4 → (1,−4) ✓',
    },

    // ── Q13 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho's relationship is described verbally as 'double the input, then subtract 5'. Write the equation and find y when x = 10.",
      answer: 'y = 2x − 5, y = 15',
      checkMode: 'self',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A table shows x: 0, 3, 6, 9 and y: 2, 11, 20, 29. Find the equation.',
      answer: 'y = 3x + 2',
      checkMode: 'auto',
      correctAnswer: 'y=3x+2',
      correctAnswers: ['y=3x+2', 'y = 3x + 2'],
      explanation: 'Differences in y: 11−2=9, 20−11=9, 29−20=9 — but x increases by 3 each time. Rate = 9÷3 = 3 per unit of x. Try y = 3x + c: x=0, y=2 → c=2. Equation: y = 3x + 2. Check: x=9: y=27+2=29 ✓',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says any table of values can be described by exactly one equation. Is she correct? Explain.',
      answer: 'No — multiple different equations or rules can sometimes match a limited set of given points, especially for non-linear relationships, unless more terms confirm a single consistent pattern.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered functions and relationships.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
