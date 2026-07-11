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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-2 Substitute to find y given x | 3-5 Solve for x given y
    // (inverse operations) | 6-8 Verbal <-> equation translation | 9-11 Find
    // equation from table of values | 12-14 Flow diagrams/function machines
    // [DIAGRAM-FLAGGED] | 15-17 Ordered pairs via substitution incl. negatives
    // and a non-linear rule | 18-19 Error-spotting + multi-step word problem
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // ── Block 1: Substitute to find y given x ────────────────────────────
        { difficulty: 'Easy', question: 'Using y = 6x − 4, find y when x = 5.', answer: '26', checkMode: 'auto', correctAnswer: '26', explanation: 'Substitute x = 5: y = 6(5) − 4 = 30 − 4 = 26 ✓' },
        { difficulty: 'Easy', question: 'Using y = −3x + 10, find y when x = 4.', answer: '-2', checkMode: 'auto', correctAnswer: '-2', correctAnswers: ['-2', '−2'], explanation: 'Substitute x = 4: y = −3(4) + 10 = −12 + 10 = −2 ✓' },
        { difficulty: 'Medium', question: 'Using y = 2(x + 3) − 1, find y when x = 7.', answer: '19', checkMode: 'auto', correctAnswer: '19', explanation: 'Substitute x = 7: y = 2(7 + 3) − 1 = 2(10) − 1 = 20 − 1 = 19 ✓' },

        // ── Block 2: Solve for x given y (inverse operations) ────────────────
        { difficulty: 'Medium', question: 'Using y = 3x + 8, find x when y = 29.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '29 = 3x + 8 → 3x = 29 − 8 = 21 → x = 21 ÷ 3 = 7 ✓' },
        { difficulty: 'Medium', question: 'Using y = 5x − 12, find x when y = 33.', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '33 = 5x − 12 → 5x = 33 + 12 = 45 → x = 45 ÷ 5 = 9 ✓' },
        { difficulty: 'Medium-Hard', question: 'Using y = −2x + 7, find x when y = −11.', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '−11 = −2x + 7 → −2x = −11 − 7 = −18 → x = −18 ÷ −2 = 9 ✓' },

        // ── Block 3: Verbal <-> equation translation ──────────────────────────
        { difficulty: 'Medium', question: "A relationship is described as 'multiply the input by 4, then subtract 6'. Write this as an equation, then find y when x = 9.", answer: 'y = 4x − 6, y = 30', checkMode: 'self' },
        { difficulty: 'Medium', question: "A relationship is described as 'add 5 to the input, then multiply by 3'. Write this as an equation, then find y when x = 2.", answer: 'y = 3(x + 5), y = 21', checkMode: 'auto', correctAnswer: '21', correctAnswers: ['21', 'y=3(x+5), y=21', 'y = 3(x + 5), y = 21'], explanation: "Let x = input, y = output. 'Add 5': (x + 5). 'Multiply by 3': y = 3(x + 5). At x = 2: y = 3(2 + 5) = 3(7) = 21 ✓" },
        { difficulty: 'Hard', question: "Bongani says the equation y = 2x + 9 means 'add 9 to the input, then double it'. Test his verbal description against the equation. Is he correct?", answer: "No — 'add 9, then double' gives 2(x + 9) = 2x + 18, which is a different equation. The correct verbal description for y = 2x + 9 is 'double the input, then add 9'.", checkMode: 'self' },

        // ── Block 4: Find equation from table of values ──────────────────────
        { difficulty: 'Medium', question: 'A table shows x: 1, 2, 3, 4 and y: 8, 11, 14, 17. Find the equation.', answer: 'y = 3x + 5', checkMode: 'auto', correctAnswer: 'y=3x+5', correctAnswers: ['y=3x+5', 'y = 3x + 5'], explanation: 'Differences in y: 11−8=3, 14−11=3, 17−14=3 — constant difference of 3. Try y = 3x + c: x=1, y=8 → 8 = 3(1) + c → c = 5. Equation: y = 3x + 5. Check: x=4: y = 12 + 5 = 17 ✓' },
        { difficulty: 'Medium-Hard', question: 'A table shows x: 2, 4, 6, 8 and y: 5, 9, 13, 17. Find the equation.', answer: 'y = 2x + 1', checkMode: 'auto', correctAnswer: 'y=2x+1', correctAnswers: ['y=2x+1', 'y = 2x + 1'], explanation: 'Differences are 4 for every increase of 2 in x, so the rate is 4 ÷ 2 = 2 per unit. Try y = 2x + c: x=2, y=5 → 5 = 2(2) + c → c = 1. Equation: y = 2x + 1. Check: x=8: y = 16 + 1 = 17 ✓' },
        { difficulty: 'Hard', question: 'A plumber charges a call-out fee of R150 plus R80 per hour, using the rule cost = 80h + 150. The table shows hours: 1, 2, 3 and cost: R230, R310, R390. Use the rule to find the cost for 5 hours.', answer: '550', checkMode: 'auto', correctAnswer: '550', correctAnswers: ['550', 'R550'], explanation: 'cost = 80(5) + 150 = 400 + 150 = R550. Check against table: 80(1)+150=230 ✓, 80(2)+150=310 ✓, 80(3)+150=390 ✓' },

        // ── Block 5: Flow diagrams/function machines [DIAGRAM-FLAGGED] ────────
        { difficulty: 'Easy', question: 'A flow diagram, as shown, has input 5 → ×3 → +2 → output. Find the output.', answer: '17', checkMode: 'auto', correctAnswer: '17', explanation: '5 × 3 = 15, then 15 + 2 = 17 ✓', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">5</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×3</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+2</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text></svg>' },
        { difficulty: 'Medium', question: 'A flow diagram, as shown, shows input x → −4 → ×2 → output 10. Find the input x.', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '(x − 4) × 2 = 10 → x − 4 = 5 → x = 9. Check: (9 − 4) × 2 = 5 × 2 = 10 ✓', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−4</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×2</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">10</text></svg>' },
        { difficulty: 'Hard', question: 'A flow diagram, as shown, applies input → ×4 → −3 → output. The table shows: input 2 gives output 5, and input 5 gives output 17. Find the output for input 8.', answer: '29', checkMode: 'auto', correctAnswer: '29', explanation: 'Rule: output = 4 × input − 3. Check: 4(2)−3=5 ✓, 4(5)−3=17 ✓. Input 8: 4(8) − 3 = 32 − 3 = 29 ✓', diagramSvg: '<svg viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×4</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−3</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><text x="10" y="80" font-size="11" font-weight="700" fill="#374151">Known input/output pairs:</text><rect x="30" y="88" width="90" height="55" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="75" y1="88" x2="75" y2="143" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="106" x2="120" y2="106" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="124" x2="120" y2="124" stroke="#0f1f3d" stroke-width="1"/><text x="52" y="100" text-anchor="middle" font-size="10" fill="#374151">input</text><text x="97" y="100" text-anchor="middle" font-size="10" fill="#374151">output</text><text x="52" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">2</text><text x="97" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">5</text><text x="52" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">5</text><text x="97" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">17</text></svg>' },

        // ── Block 6: Ordered pairs via substitution incl. negatives ──────────
        { difficulty: 'Medium', question: 'Generate a table of ordered pairs using y = 3x − 2 for x = 0, 1, 2, 3.', answer: '(0,-2),(1,1),(2,4),(3,7)', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Generate ordered pairs using y = −2x + 5 for x = −1, 0, 1, 2.', answer: '(-1,7),(0,5),(1,3),(2,1)', checkMode: 'auto', correctAnswer: '(-1,7),(0,5),(1,3),(2,1)', correctAnswers: ['(-1,7),(0,5),(1,3),(2,1)', '(−1,7),(0,5),(1,3),(2,1)', '(-1, 7), (0, 5), (1, 3), (2, 1)', '(−1, 7), (0, 5), (1, 3), (2, 1)'], explanation: 'x=−1: y=−2(−1)+5=2+5=7 → (−1,7). x=0: y=5 → (0,5). x=1: y=−2+5=3 → (1,3). x=2: y=−4+5=1 → (2,1) ✓' },
        { difficulty: 'Hard', question: 'Generate ordered pairs using y = x² − 2 for x = −2, −1, 0, 1.', answer: '(-2,2),(-1,-1),(0,-2),(1,-1)', checkMode: 'self' },

        // ── Block 7: Error-spotting + multi-step word problem ────────────────
        { difficulty: 'Hard', question: 'Thabo generates ordered pairs using y = 2x + 3 for x = −1, 0, 1 and gets (−1, 1), (0, 3), (1, 6). Check his table and correct any errors.', answer: 'x=−1: y=2(−1)+3=1 ✓. x=0: y=3 ✓. x=1: y=2(1)+3=5, but Thabo wrote 6 — this pair is wrong. The correct pair is (1, 5), not (1, 6).', checkMode: 'self' },
        { difficulty: 'Hard', question: "A cellphone plan costs a monthly base fee of R60 plus R2 per minute used, using the rule cost = 2m + 60. a) Find the cost for 45 minutes. b) If Zanele was billed R190 for the month, how many minutes did she use?", answer: 'a) cost = 2(45) + 60 = 90 + 60 = R150. b) 190 = 2m + 60 → 2m = 130 → m = 65 minutes.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered substitution, inverse operations, equivalent forms, and ordered pairs — a perfect score!' },
        { minScore: 15, message: 'Great work! You have a strong grasp of functions and relationships. Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on equations and tables, then try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set. You will get there!' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // ── Block 1: Substitute to find y given x ────────────────────────────
        { difficulty: 'Easy', question: 'Using y = 7x − 5, find y when x = 4.', answer: '23', checkMode: 'auto', correctAnswer: '23', explanation: 'Substitute x = 4: y = 7(4) − 5 = 28 − 5 = 23 ✓' },
        { difficulty: 'Easy', question: 'Using y = −4x + 15, find y when x = 3.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Substitute x = 3: y = −4(3) + 15 = −12 + 15 = 3 ✓' },
        { difficulty: 'Medium', question: 'Using y = 3(x + 2) − 4, find y when x = 6.', answer: '20', checkMode: 'auto', correctAnswer: '20', explanation: 'Substitute x = 6: y = 3(6 + 2) − 4 = 3(8) − 4 = 24 − 4 = 20 ✓' },

        // ── Block 2: Solve for x given y (inverse operations) ────────────────
        { difficulty: 'Medium', question: 'Using y = 4x + 6, find x when y = 38.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '38 = 4x + 6 → 4x = 38 − 6 = 32 → x = 32 ÷ 4 = 8 ✓' },
        { difficulty: 'Medium', question: 'Using y = 6x − 15, find x when y = 45.', answer: '10', checkMode: 'auto', correctAnswer: '10', explanation: '45 = 6x − 15 → 6x = 45 + 15 = 60 → x = 60 ÷ 6 = 10 ✓' },
        { difficulty: 'Medium-Hard', question: 'Using y = −3x + 9, find x when y = −15.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '−15 = −3x + 9 → −3x = −15 − 9 = −24 → x = −24 ÷ −3 = 8 ✓' },

        // ── Block 3: Verbal <-> equation translation ──────────────────────────
        { difficulty: 'Medium', question: "A relationship is described as 'multiply the input by 5, then subtract 8'. Write this as an equation, then find y when x = 7.", answer: 'y = 5x − 8, y = 27', checkMode: 'self' },
        { difficulty: 'Medium', question: "A relationship is described as 'add 3 to the input, then multiply by 4'. Write this as an equation, then find y when x = 5.", answer: 'y = 4(x + 3), y = 32', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32', 'y=4(x+3), y=32', 'y = 4(x + 3), y = 32'], explanation: "Let x = input, y = output. 'Add 3': (x + 3). 'Multiply by 4': y = 4(x + 3). At x = 5: y = 4(5 + 3) = 4(8) = 32 ✓" },
        { difficulty: 'Hard', question: "Amahle says the equation y = 3x + 7 means 'add 7 to the input, then triple it'. Test her verbal description against the equation. Is she correct?", answer: "No — 'add 7, then triple' gives 3(x + 7) = 3x + 21, which is a different equation. The correct verbal description for y = 3x + 7 is 'triple the input, then add 7'.", checkMode: 'self' },

        // ── Block 4: Find equation from table of values ──────────────────────
        { difficulty: 'Medium', question: 'A table shows x: 1, 2, 3, 4 and y: 6, 10, 14, 18. Find the equation.', answer: 'y = 4x + 2', checkMode: 'auto', correctAnswer: 'y=4x+2', correctAnswers: ['y=4x+2', 'y = 4x + 2'], explanation: 'Differences in y: 10−6=4, 14−10=4, 18−14=4 — constant difference of 4. Try y = 4x + c: x=1, y=6 → 6 = 4(1) + c → c = 2. Equation: y = 4x + 2. Check: x=4: y = 16 + 2 = 18 ✓' },
        { difficulty: 'Medium-Hard', question: 'A table shows x: 2, 4, 6, 8 and y: 7, 13, 19, 25. Find the equation.', answer: 'y = 3x + 1', checkMode: 'auto', correctAnswer: 'y=3x+1', correctAnswers: ['y=3x+1', 'y = 3x + 1'], explanation: 'Differences are 6 for every increase of 2 in x, so the rate is 6 ÷ 2 = 3 per unit. Try y = 3x + c: x=2, y=7 → 7 = 3(2) + c → c = 1. Equation: y = 3x + 1. Check: x=8: y = 24 + 1 = 25 ✓' },
        { difficulty: 'Hard', question: 'An electrician charges a call-out fee of R120 plus R90 per hour, using the rule cost = 90h + 120. The table shows hours: 1, 2, 3 and cost: R210, R300, R390. Use the rule to find the cost for 6 hours.', answer: '660', checkMode: 'auto', correctAnswer: '660', correctAnswers: ['660', 'R660'], explanation: 'cost = 90(6) + 120 = 540 + 120 = R660. Check against table: 90(1)+120=210 ✓, 90(2)+120=300 ✓, 90(3)+120=390 ✓' },

        // ── Block 5: Flow diagrams/function machines [DIAGRAM-FLAGGED] ────────
        { difficulty: 'Easy', question: 'A flow diagram, as shown, has input 4 → ×5 → −3 → output. Find the output.', answer: '17', checkMode: 'auto', correctAnswer: '17', explanation: '4 × 5 = 20, then 20 − 3 = 17 ✓', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">4</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×5</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−3</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text></svg>' },
        { difficulty: 'Medium', question: 'A flow diagram, as shown, shows input x → −6 → ×3 → output 21. Find the input x.', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: '(x − 6) × 3 = 21 → x − 6 = 7 → x = 13. Check: (13 − 6) × 3 = 7 × 3 = 21 ✓', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−6</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×3</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">21</text></svg>' },
        { difficulty: 'Hard', question: 'A flow diagram, as shown, applies input → ×3 → +5 → output. The table shows: input 3 gives output 14, and input 6 gives output 23. Find the output for input 9.', answer: '32', checkMode: 'auto', correctAnswer: '32', explanation: 'Rule: output = 3 × input + 5. Check: 3(3)+5=14 ✓, 3(6)+5=23 ✓. Input 9: 3(9) + 5 = 27 + 5 = 32 ✓', diagramSvg: '<svg viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×3</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+5</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><text x="10" y="80" font-size="11" font-weight="700" fill="#374151">Known input/output pairs:</text><rect x="30" y="88" width="90" height="55" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="75" y1="88" x2="75" y2="143" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="106" x2="120" y2="106" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="124" x2="120" y2="124" stroke="#0f1f3d" stroke-width="1"/><text x="52" y="100" text-anchor="middle" font-size="10" fill="#374151">input</text><text x="97" y="100" text-anchor="middle" font-size="10" fill="#374151">output</text><text x="52" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">3</text><text x="97" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">14</text><text x="52" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">6</text><text x="97" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">23</text></svg>' },

        // ── Block 6: Ordered pairs via substitution incl. negatives ──────────
        { difficulty: 'Medium', question: 'Generate a table of ordered pairs using y = 4x − 3 for x = 0, 1, 2, 3.', answer: '(0,-3),(1,1),(2,5),(3,9)', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Generate ordered pairs using y = −3x + 4 for x = −1, 0, 1, 2.', answer: '(-1,7),(0,4),(1,1),(2,-2)', checkMode: 'auto', correctAnswer: '(-1,7),(0,4),(1,1),(2,-2)', correctAnswers: ['(-1,7),(0,4),(1,1),(2,-2)', '(−1,7),(0,4),(1,1),(2,−2)', '(-1, 7), (0, 4), (1, 1), (2, -2)', '(−1, 7), (0, 4), (1, 1), (2, −2)'], explanation: 'x=−1: y=−3(−1)+4=3+4=7 → (−1,7). x=0: y=4 → (0,4). x=1: y=−3+4=1 → (1,1). x=2: y=−6+4=−2 → (2,−2) ✓' },
        { difficulty: 'Hard', question: 'Generate ordered pairs using y = x² + 1 for x = −2, −1, 0, 1.', answer: '(-2,5),(-1,2),(0,1),(1,2)', checkMode: 'self' },

        // ── Block 7: Error-spotting + multi-step word problem ────────────────
        { difficulty: 'Hard', question: 'Lerato generates ordered pairs using y = 3x − 1 for x = −1, 0, 1 and gets (−1, −4), (0, 1), (1, 2). Check her table and correct any errors.', answer: 'x=−1: y=3(−1)−1=−4 ✓. x=0: y=3(0)−1=−1, but Lerato wrote 1 — this pair is wrong (sign error). The correct pair is (0, −1), not (0, 1). x=1: y=3(1)−1=2 ✓.', checkMode: 'self' },
        { difficulty: 'Hard', question: "A plumbing call charges a fee of R90 plus R45 per hour, using the rule cost = 45h + 90. a) Find the cost for 3 hours. b) If Sam was billed R360, how many hours of work were done?", answer: 'a) cost = 45(3) + 90 = 135 + 90 = R225. b) 360 = 45h + 90 → 45h = 270 → h = 6 hours.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered substitution, inverse operations, equivalent forms, and ordered pairs — a perfect score!' },
        { minScore: 15, message: 'Great work! You have a strong grasp of functions and relationships. Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on equations and tables, then try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set. You will get there!' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout as Set 1/2, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // ── Block 1: Substitute to find y given x ────────────────────────────
        { difficulty: 'Easy', question: 'Using y = 5x − 9, find y when x = 6.', answer: '21', checkMode: 'auto', correctAnswer: '21', explanation: 'Substitute x = 6: y = 5(6) − 9 = 30 − 9 = 21 ✓' },
        { difficulty: 'Easy', question: 'Using y = −2x + 18, find y when x = 5.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Substitute x = 5: y = −2(5) + 18 = −10 + 18 = 8 ✓' },
        { difficulty: 'Medium', question: 'Using y = 4(x − 1) + 3, find y when x = 5.', answer: '19', checkMode: 'auto', correctAnswer: '19', explanation: 'Substitute x = 5: y = 4(5 − 1) + 3 = 4(4) + 3 = 16 + 3 = 19 ✓' },

        // ── Block 2: Solve for x given y (inverse operations) ────────────────
        { difficulty: 'Medium', question: 'Using y = 7x + 2, find x when y = 44.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: '44 = 7x + 2 → 7x = 44 − 2 = 42 → x = 42 ÷ 7 = 6 ✓' },
        { difficulty: 'Medium', question: 'Using y = 8x − 20, find x when y = 44.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '44 = 8x − 20 → 8x = 44 + 20 = 64 → x = 64 ÷ 8 = 8 ✓' },
        { difficulty: 'Medium-Hard', question: 'Using y = −5x + 6, find x when y = −19.', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: '−19 = −5x + 6 → −5x = −19 − 6 = −25 → x = −25 ÷ −5 = 5 ✓' },

        // ── Block 3: Verbal <-> equation translation ──────────────────────────
        { difficulty: 'Medium', question: "A relationship is described as 'multiply the input by 6, then subtract 10'. Write this as an equation, then find y when x = 8.", answer: 'y = 6x − 10, y = 38', checkMode: 'self' },
        { difficulty: 'Medium', question: "A relationship is described as 'add 7 to the input, then multiply by 2'. Write this as an equation, then find y when x = 6.", answer: 'y = 2(x + 7), y = 26', checkMode: 'auto', correctAnswer: '26', correctAnswers: ['26', 'y=2(x+7), y=26', 'y = 2(x + 7), y = 26'], explanation: "Let x = input, y = output. 'Add 7': (x + 7). 'Multiply by 2': y = 2(x + 7). At x = 6: y = 2(6 + 7) = 2(13) = 26 ✓" },
        { difficulty: 'Hard', question: "Sipho says the equation y = 4x + 5 means 'add 5 to the input, then multiply by 4'. Test his verbal description against the equation. Is he correct?", answer: "No — 'add 5, then multiply by 4' gives 4(x + 5) = 4x + 20, which is a different equation. The correct verbal description for y = 4x + 5 is 'multiply the input by 4, then add 5'.", checkMode: 'self' },

        // ── Block 4: Find equation from table of values ──────────────────────
        { difficulty: 'Medium', question: 'A table shows x: 1, 2, 3, 4 and y: 9, 13, 17, 21. Find the equation.', answer: 'y = 4x + 5', checkMode: 'auto', correctAnswer: 'y=4x+5', correctAnswers: ['y=4x+5', 'y = 4x + 5'], explanation: 'Differences in y: 13−9=4, 17−13=4, 21−17=4 — constant difference of 4. Try y = 4x + c: x=1, y=9 → 9 = 4(1) + c → c = 5. Equation: y = 4x + 5. Check: x=4: y = 16 + 5 = 21 ✓' },
        { difficulty: 'Medium-Hard', question: 'A table shows x: 2, 4, 6, 8 and y: 11, 17, 23, 29. Find the equation.', answer: 'y = 3x + 5', checkMode: 'auto', correctAnswer: 'y=3x+5', correctAnswers: ['y=3x+5', 'y = 3x + 5'], explanation: 'Differences are 6 for every increase of 2 in x, so the rate is 6 ÷ 2 = 3 per unit. Try y = 3x + c: x=2, y=11 → 11 = 3(2) + c → c = 5. Equation: y = 3x + 5. Check: x=8: y = 24 + 5 = 29 ✓' },
        { difficulty: 'Hard', question: 'A taxi charges a base fare of R100 plus R70 per hour of waiting, using the rule cost = 70h + 100. The table shows hours: 1, 2, 3 and cost: R170, R240, R310. Use the rule to find the cost for 4 hours.', answer: '380', checkMode: 'auto', correctAnswer: '380', correctAnswers: ['380', 'R380'], explanation: 'cost = 70(4) + 100 = 280 + 100 = R380. Check against table: 70(1)+100=170 ✓, 70(2)+100=240 ✓, 70(3)+100=310 ✓' },

        // ── Block 5: Flow diagrams/function machines [DIAGRAM-FLAGGED] ────────
        { difficulty: 'Easy', question: 'A flow diagram, as shown, has input 6 → ×2 → +7 → output. Find the output.', answer: '19', checkMode: 'auto', correctAnswer: '19', explanation: '6 × 2 = 12, then 12 + 7 = 19 ✓', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">6</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×2</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+7</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text></svg>' },
        { difficulty: 'Medium', question: 'A flow diagram, as shown, shows input x → +5 → ×4 → output 48. Find the input x.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '(x + 5) × 4 = 48 → x + 5 = 12 → x = 7. Check: (7 + 5) × 4 = 12 × 4 = 48 ✓', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+5</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×4</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">48</text></svg>' },
        { difficulty: 'Hard', question: 'A flow diagram, as shown, applies input → ×2 → +9 → output. The table shows: input 4 gives output 17, and input 7 gives output 23. Find the output for input 10.', answer: '29', checkMode: 'auto', correctAnswer: '29', explanation: 'Rule: output = 2 × input + 9. Check: 2(4)+9=17 ✓, 2(7)+9=23 ✓. Input 10: 2(10) + 9 = 20 + 9 = 29 ✓', diagramSvg: '<svg viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×2</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+9</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><text x="10" y="80" font-size="11" font-weight="700" fill="#374151">Known input/output pairs:</text><rect x="30" y="88" width="90" height="55" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="75" y1="88" x2="75" y2="143" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="106" x2="120" y2="106" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="124" x2="120" y2="124" stroke="#0f1f3d" stroke-width="1"/><text x="52" y="100" text-anchor="middle" font-size="10" fill="#374151">input</text><text x="97" y="100" text-anchor="middle" font-size="10" fill="#374151">output</text><text x="52" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">4</text><text x="97" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">17</text><text x="52" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">7</text><text x="97" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">23</text></svg>' },

        // ── Block 6: Ordered pairs via substitution incl. negatives ──────────
        { difficulty: 'Medium', question: 'Generate a table of ordered pairs using y = 5x − 4 for x = 0, 1, 2, 3.', answer: '(0,-4),(1,1),(2,6),(3,11)', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Generate ordered pairs using y = −4x + 6 for x = −1, 0, 1, 2.', answer: '(-1,10),(0,6),(1,2),(2,-2)', checkMode: 'auto', correctAnswer: '(-1,10),(0,6),(1,2),(2,-2)', correctAnswers: ['(-1,10),(0,6),(1,2),(2,-2)', '(−1,10),(0,6),(1,2),(2,−2)', '(-1, 10), (0, 6), (1, 2), (2, -2)', '(−1, 10), (0, 6), (1, 2), (2, −2)'], explanation: 'x=−1: y=−4(−1)+6=4+6=10 → (−1,10). x=0: y=6 → (0,6). x=1: y=−4+6=2 → (1,2). x=2: y=−8+6=−2 → (2,−2) ✓' },
        { difficulty: 'Hard', question: 'Generate ordered pairs using y = x² − 3 for x = −2, −1, 0, 1.', answer: '(-2,1),(-1,-2),(0,-3),(1,-2)', checkMode: 'self' },

        // ── Block 7: Error-spotting + multi-step word problem ────────────────
        { difficulty: 'Hard', question: 'Sipho generates ordered pairs using y = 4x + 2 for x = −1, 0, 1 and gets (−1, −2), (0, 2), (1, 7). Check his table and correct any errors.', answer: 'x=−1: y=4(−1)+2=−2 ✓. x=0: y=2 ✓. x=1: y=4(1)+2=6, but Sipho wrote 7 — this pair is wrong. The correct pair is (1, 6), not (1, 7).', checkMode: 'self' },
        { difficulty: 'Hard', question: "A car rental costs a fixed fee of R250 plus R120 per day, using the rule cost = 120d + 250. a) Find the cost for 4 days. b) If Naledi was billed R970, how many days did she rent the car?", answer: 'a) cost = 120(4) + 250 = 480 + 250 = R730. b) 970 = 120d + 250 → 120d = 720 → d = 6 days.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered substitution, inverse operations, equivalent forms, and ordered pairs — a perfect score!' },
        { minScore: 15, message: 'Great work! You have a strong grasp of functions and relationships. Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on equations and tables, then try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set. You will get there!' },
      ],
    },
  ],
}
