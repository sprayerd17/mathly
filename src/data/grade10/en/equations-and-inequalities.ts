import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (equation roles) ─────────────────────────────────────────
// LCM / rearranged equation / substitution steps   → blue   (#2563eb)
// expanded / factorised brackets / other variables → orange (#ea580c)
// solution / isolated subject / intersection point → green  (#16a34a)
// inequality sign flip                             → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Equations and Inequalities',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SOLVING LINEAR EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'linear-equations',
      title: 'Solving Linear Equations',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">We revise solving <strong>linear equations</strong>, including those with fractions and brackets, by simplifying both sides, collecting like terms, and isolating the variable using inverse operations.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('LCM / multiply through')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('expanded brackets')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('solution')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key strategy</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Clear fractions')} — Multiply both sides by the ${bl('LCM')} of all denominators to eliminate fractions before anything else.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Expand brackets')} — Apply the distributive law to remove any brackets on both sides.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Collect like terms</strong> — Move all variable terms to one side and all constants to the other.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Isolate the variable')} — Divide both sides by the coefficient of the variable to find the ${gr('solution')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Finding the LCM for fractions</p>` +
        `<p style="margin:0;color:#1e3a8a;">List the multiples of each denominator and find the smallest one they share. Multiplying every term on both sides by the ${bl('LCM')} clears all fractions in one step.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve for x: (2x − 3)/3 = (x + 2)/6',
          answer: `x = ${gr('8/3')}`,
          steps: [
            `The denominators are 3 and 6. The ${bl('LCM is 6')}. Multiply every term on both sides by ${bl('6')}:<br>${bl('6')} × (2x − 3)/3 = ${bl('6')} × (x + 2)/6 &nbsp;→&nbsp; ${bl('2')}(2x − 3) = x + 2`,
            `${or('Expand the brackets:')} ${or('4x − 6')} = x + 2`,
            `Subtract x from both sides: 3x − 6 = 2`,
            `Add 6 to both sides: 3x = 8`,
            `Divide both sides by 3: x = ${gr('8/3')} ✓`,
          ],
        },
        {
          question: 'Solve for x: 3(x − 2) = 2(x + 5)',
          answer: `x = ${gr('16')}`,
          steps: [
            `${or('Expand both brackets:')} ${or('3x − 6')} = ${or('2x + 10')}`,
            `Subtract 2x from both sides: x − 6 = 10`,
            `Add 6 to both sides: x = ${gr('16')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve linear equations with fractions and brackets using LCM and inverse operations" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Step by step layout showing how to solve (2x−3)/3 = (x+2)/6 with colour coded steps: LCM blue, expanded brackets orange, solution green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING QUADRATIC EQUATIONS BY FACTORISATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadratic-equations-factorisation',
      title: 'Solving Quadratic Equations by Factorisation',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">We solve quadratic equations by first <strong>rearranging</strong> to set the equation equal to zero, <strong>factorising</strong> the resulting expression, then applying the <strong>zero product property</strong> to find both solutions.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('rearranged equation')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('factorised brackets')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('solutions')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key strategy</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Rearrange')} — Move all terms to one side so the equation equals ${bl('zero')}: ax² + bx + c = 0.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Factorise')} — Write the expression as a product of ${or('two brackets')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Zero product property')} — If A × B = 0 then A = 0 or B = 0. Set each factor equal to zero to find both ${gr('solutions')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Finding the right factors (a × c method)</p>` +
        `<p style="margin:0;color:#9a3412;">For ax² + bx + c, find two numbers that <strong>multiply to a × c</strong> and <strong>add to b</strong>. Use these numbers to split the middle term, then factorise by grouping.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve for x: x² − 5x − 14 = 0',
          answer: `x = ${gr('7')} or x = ${gr('−2')}`,
          steps: [
            `The equation is already ${bl('equal to zero:')} ${bl('x² − 5x − 14 = 0')}`,
            `${or('Factorise:')} Find two numbers that multiply to −14 and add to −5. Those numbers are <strong>−7</strong> and <strong>2</strong> (−7 × 2 = −14, −7 + 2 = −5).`,
            `Write the ${or('factorised brackets:')} ${or('(x − 7)(x + 2)')} = 0`,
            `Apply the zero product property: x − 7 = 0 &nbsp;or&nbsp; x + 2 = 0`,
            `Solutions: x = ${gr('7')} or x = ${gr('−2')} ✓`,
          ],
        },
        {
          question: 'Solve for x: 2x² + 3x = 20',
          answer: `x = ${gr('−4')} or x = ${gr('5/2')}`,
          steps: [
            `${bl('Rearrange')} to equal zero: ${bl('2x² + 3x − 20 = 0')}`,
            `${or('Factorise')} using the a × c method: a × c = 2 × (−20) = −40. Find two numbers that multiply to −40 and add to 3: <strong>−5</strong> and <strong>8</strong>.`,
            `Split the middle term: ${or('2x² − 5x + 8x − 20')} = 0`,
            `Group: x(2x − 5) + 4(2x − 5) = 0`,
            `${or('Factorised form:')} ${or('(x + 4)(2x − 5)')} = 0`,
            `Set each factor to zero: x + 4 = 0 &nbsp;or&nbsp; 2x − 5 = 0`,
            `Solutions: x = ${gr('−4')} or x = ${gr('5/2')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve quadratic equations by factorisation using the zero product property and the a×c method" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Layout showing the a×c method for factorising 2x²+3x−20=0 with rearranged equation blue, factorised brackets orange, and solutions green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING LITERAL EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'literal-equations',
      title: 'Solving Literal Equations (Changing the Subject of a Formula)',
      icon: '∀',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>literal equation</strong> contains multiple variables. We solve for one variable <em>in terms of the others</em> — this is also called <em>changing the subject of the formula</em>. We use the same inverse operation principles as regular equations, treating the other variables as constants.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('subject variable')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('other variables')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('isolated subject')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key strategy</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Identify the ${bl('variable to isolate')} — this will become the new subject on the left-hand side.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Treat ${or('all other variables')} as if they are constants — apply the same inverse operations you would use with numbers.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Isolate the subject')} completely — the final answer expresses ${gr('the subject')} in terms of the other variables.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Square roots and squared variables</p>` +
        `<p style="margin:0;color:#1e3a8a;">If the ${bl('subject variable')} is squared, divide first to isolate the squared term, then take the square root of both sides as the final step.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve for r in V = πr²h (in terms of V, π and h).',
          answer: `${gr('r')} = √(V / (πh))`,
          steps: [
            `Identify the ${bl('subject variable:')} ${bl('r')}. The formula is V = π${bl('r')}²${or('h')}.`,
            `Divide both sides by ${or('πh')}: V / (${or('πh')}) = ${bl('r')}²`,
            `Take the square root of both sides: ${gr('r')} = √(V / (${or('πh')})) ✓`,
          ],
        },
        {
          question: 'Solve for h in A = 2πr² + 2πrh (in terms of A, π and r).',
          answer: `${gr('h')} = (A − 2πr²) / (2πr)`,
          steps: [
            `Identify the ${bl('subject variable:')} ${bl('h')}. The formula is A = 2π${or('r')}² + 2π${or('r')}${bl('h')}.`,
            `Subtract 2π${or('r')}² from both sides: A − 2π${or('r')}² = 2π${or('r')}${bl('h')}`,
            `Divide both sides by 2π${or('r')}: ${gr('h')} = (A − 2π${or('r')}²) / (2π${or('r')}) ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to change the subject of a formula using inverse operations treating other variables as constants" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Two worked examples showing literal equation rearrangement with subject variable blue, other variables orange, and isolated subject green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — LINEAR INEQUALITIES AND SIMULTANEOUS EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'inequalities-simultaneous-equations',
      title: 'Solving Linear Inequalities and Simultaneous Equations',
      icon: '≤',
      explanation:
        `<p style="margin-bottom:16px;">Solving <strong>linear inequalities</strong> follows the same steps as linear equations, <strong>EXCEPT</strong> that multiplying or dividing both sides by a <em>negative number</em> ${re('reverses the inequality sign')}. <strong>Simultaneous equations</strong> (two equations, two unknowns) can be solved numerically, algebraically (substitution or elimination), or graphically (finding the intersection point).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('inequality sign flip')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('substitution')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('intersection point')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Critical rule for inequalities</p>` +
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">${re('Reverse the inequality sign')} when multiplying or dividing by a negative number</p>` +
        `<p style="margin:0;color:#991b1b;">Example: −2x ≤ 4 &nbsp;→&nbsp; divide by −2 &nbsp;→&nbsp; ${re('x ≥ −2')} (sign flips from ≤ to ≥)</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Methods for simultaneous equations</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Substitution')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Express one variable in terms of the other, then ${bl('substitute')} into the second equation.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Elimination</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Add or subtract the equations to eliminate one variable, then solve for the other.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Graphical')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Plot both lines on the same axes. The ${gr('intersection point')} is the simultaneous solution.</p>` +
        `</div>` +

        `</div>`,

      workedExamples: [
        {
          question: 'Solve for x: 3 − 2x ≤ 7',
          answer: `x ${gr('≥')} −2`,
          steps: [
            `Subtract 3 from both sides: −2x ≤ 4`,
            `Divide both sides by −2 — ${re('the inequality sign reverses:')} x ${re('≥')} −2`,
            `Answer: x ${gr('≥')} −2 ✓`,
          ],
        },
        {
          question: 'Solve simultaneously using substitution: 2x + y = 10 and x − y = 2',
          answer: `x = ${gr('4')}, y = ${gr('2')}`,
          steps: [
            `From the second equation, express x in terms of y: ${bl('x = y + 2')}`,
            `${bl('Substitute')} ${bl('x = y + 2')} into the first equation: 2(y + 2) + y = 10`,
            `Expand: 2y + 4 + y = 10 &nbsp;→&nbsp; 3y + 4 = 10`,
            `Subtract 4: 3y = 6 &nbsp;→&nbsp; y = ${gr('2')}`,
            `Substitute back: x = ${gr('2')} + 2 = ${gr('4')}`,
            `Solution: x = ${gr('4')}, y = ${gr('2')} ✓ &nbsp; Check: 2(4) + 2 = 10 ✓ and 4 − 2 = 2 ✓`,
          ],
        },
        {
          question: 'Solve graphically: y = x + 3 and y = −x + 7',
          answer: `Intersection point: ${gr('(2, 5)')}`,
          steps: [
            `Plot both lines on the same Cartesian plane. The line y = x + 3 has gradient 1 and y-intercept 3. The line y = −x + 7 has gradient −1 and y-intercept 7.`,
            `The point where the lines cross is the simultaneous solution. Algebraically: set x + 3 = −x + 7`,
            `Add x to both sides: 2x + 3 = 7 &nbsp;→&nbsp; 2x = 4 &nbsp;→&nbsp; x = 2`,
            `Substitute x = 2: y = 2 + 3 = 5`,
            `${gr('Intersection point:')} ${gr('(2, 5)')} ✓ &nbsp; See the diagram below.`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve linear inequalities including sign reversal and how to solve simultaneous equations by substitution and graphically" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Cartesian plane showing two lines y=x+3 and y=−x+7 intersecting at point (2,5) with the intersection clearly marked in green" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — factorisation, simple trinomial ─────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve for x: x² − 9x + 20 = 0',
      answer: 'x=4 or x=5',
      checkMode: 'auto',
      correctAnswers: ['x=4 or x=5', 'x=5 or x=4'],
      explanation: 'Find two numbers that multiply to 20 and add to −9: −4 and −5. So (x−4)(x−5)=0, giving x=4 or x=5.',
    },

    // ── Q2 Easy — factorisation with negative constant ────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve for x: x² + 2x − 15 = 0',
      answer: 'x=-5 or x=3',
      checkMode: 'auto',
      correctAnswers: ['x=-5 or x=3', 'x=3 or x=-5'],
      explanation: 'Find two numbers that multiply to −15 and add to 2: 5 and −3. So (x+5)(x−3)=0, giving x=−5 or x=3.',
    },

    // ── Q3 Medium — factorisation with a≠1 (a×c method) ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve for x: 2x² − x − 6 = 0',
      answer: 'x=-3/2 or x=2',
      checkMode: 'auto',
      correctAnswers: ['x=-3/2 or x=2', 'x=2 or x=-3/2', 'x=-1.5 or x=2', 'x=2 or x=-1.5'],
      explanation: 'a×c = 2×(−6) = −12. Find two numbers multiplying to −12 and adding to −1: −4 and 3. Split: 2x²−4x+3x−6=0 → 2x(x−2)+3(x−2)=0 → (2x+3)(x−2)=0, giving x=−3/2 or x=2.',
    },

    // ── Q4 Medium — rearrange before factorising ──────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve for x: x² = 7x − 12',
      answer: 'x=3 or x=4',
      checkMode: 'auto',
      correctAnswers: ['x=3 or x=4', 'x=4 or x=3'],
      explanation: 'Rearrange to x²−7x+12=0. Find two numbers that multiply to 12 and add to −7: −3 and −4. So (x−3)(x−4)=0, giving x=3 or x=4.',
    },

    // ── Q5 Medium — factorisation with fractional root ────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve for x: 3x² + 5x − 2 = 0',
      answer: 'x=1/3 or x=-2',
      checkMode: 'auto',
      correctAnswers: ['x=1/3 or x=-2', 'x=-2 or x=1/3'],
      explanation: 'a×c = 3×(−2) = −6. Find two numbers multiplying to −6 and adding to 5: 6 and −1. Split: 3x²+6x−x−2=0 → 3x(x+2)−1(x+2)=0 → (3x−1)(x+2)=0, giving x=1/3 or x=−2.',
    },

    // ── Q6 Medium — quadratic formula, irrational roots ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Use the quadratic formula to solve for x (correct to 2 decimal places): x² + 4x − 7 = 0',
      answer: 'x≈1.32 or x≈-5.32',
      checkMode: 'auto',
      correctAnswers: ['x≈1.32 or x≈-5.32', 'x≈-5.32 or x≈1.32', 'x=1.32 or x=-5.32'],
      explanation: 'a=1, b=4, c=−7. Discriminant = 4²−4(1)(−7) = 16+28 = 44. x = (−4±√44)/2 = −2±√11. So x = −2+√11 ≈ 1.32 or x = −2−√11 ≈ −5.32.',
    },

    // ── Q7 Medium — quadratic formula, irrational roots (leave in surd form) ──
    {
      difficulty: 'Medium',
      question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: 2x² − 3x − 4 = 0',
      answer: 'x=(3±√41)/4',
      checkMode: 'self',
    },

    // ── Q8 Hard — discriminant shows no real solutions ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Show that x² + 2x + 5 = 0 has no real solutions.',
      answer: 'Discriminant = b²−4ac = 2²−4(1)(5) = 4−20 = −16. Since the discriminant is negative, the square root of a negative number is not a real number, so this equation has no real solutions.',
      checkMode: 'self',
    },

    // ── Q9 Hard — quadratic formula, irrational roots ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: 3x² − 2x − 2 = 0',
      answer: 'x=(1±√7)/3',
      checkMode: 'self',
    },

    // ── Q10 Medium — discriminant shows equal roots ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'Use the discriminant to show that x² − 6x + 9 = 0 has two equal real roots, then solve the equation.',
      answer: 'Discriminant = (−6)²−4(1)(9) = 36−36 = 0, so there are two equal real roots. Factorising: (x−3)²=0, so x=3.',
      checkMode: 'self',
    },

    // ── Q11 Medium — quadratic inequality (>), roots outside ──────────────────
    {
      difficulty: 'Medium',
      question: 'Solve for x: x² − x − 6 > 0',
      answer: 'x<-2 or x>3',
      checkMode: 'auto',
      correctAnswers: ['x<-2 or x>3', 'x>3 or x<-2'],
      explanation: 'Factorise: (x−3)(x+2)>0. Critical values: x=−2 and x=3. Since the parabola opens upward, it is above the x-axis (positive) outside the roots: x<−2 or x>3.',
    },

    // ── Q12 Medium — quadratic inequality (≥), between roots after rearranging ─
    {
      difficulty: 'Medium',
      question: 'Solve for x: −x² + 2x + 8 ≥ 0',
      answer: '-2≤x≤4',
      checkMode: 'auto',
      correctAnswer: '-2≤x≤4',
      explanation: 'Multiply both sides by −1 and flip the inequality: x²−2x−8≤0. Factorise: (x−4)(x+2)≤0. Critical values: x=−2 and x=4. Since this parabola (after flipping) opens upward, it is ≤0 between the roots: −2≤x≤4.',
    },

    // ── Q13 Hard — quadratic inequality (<), a≠1 ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve for x: 2x² + 3x − 2 < 0',
      answer: '-2<x<1/2',
      checkMode: 'auto',
      correctAnswer: '-2<x<1/2',
      explanation: 'Factorise: (2x−1)(x+2)<0. Critical values: x=1/2 and x=−2. Since the parabola opens upward, it is below the x-axis (negative) between the roots: −2<x<1/2.',
    },

    // ── Q14 Medium — quadratic inequality (≤), perfect trinomial ──────────────
    {
      difficulty: 'Medium',
      question: 'Solve for x: x² − 5x + 6 ≤ 0',
      answer: '2≤x≤3',
      checkMode: 'auto',
      correctAnswer: '2≤x≤3',
      explanation: 'Factorise: (x−2)(x−3)≤0. Critical values: x=2 and x=3. Since the parabola opens upward, it is ≤0 between the roots: 2≤x≤3.',
    },

    // ── Q15 Hard — rational inequality, strict, both critical values excluded ──
    {
      difficulty: 'Hard',
      question: 'Solve for x: (x−1)/(x+2) > 0. Remember to exclude any value that makes the denominator zero.',
      answer: 'x<-2 or x>1',
      checkMode: 'auto',
      correctAnswers: ['x<-2 or x>1', 'x>1 or x<-2'],
      explanation: 'Critical values: x=1 (numerator zero) and x=−2 (denominator zero, excluded). Testing intervals shows the expression is positive when x<−2 or x>1. Note x=−2 is excluded (undefined) and x=1 is excluded since the inequality is strict.',
    },

    // ── Q16 Hard — rational inequality, ≤, one boundary included ──────────────
    {
      difficulty: 'Hard',
      question: 'Solve for x: (x+3)/(x−2) ≤ 0. Remember to exclude any value that makes the denominator zero.',
      answer: '-3≤x<2',
      checkMode: 'auto',
      correctAnswer: '-3≤x<2',
      explanation: 'Critical values: x=−3 (numerator zero, included since the expression equals 0 there) and x=2 (denominator zero, must be excluded). Testing intervals shows the expression is negative or zero for −3≤x<2.',
    },

    // ── Q17 Hard — rational inequality, ≥, one boundary included ──────────────
    {
      difficulty: 'Hard',
      question: 'Solve for x: (2x−1)/(x+4) ≥ 0. Explain why x=−4 must be excluded from your answer even though the sign pattern might suggest otherwise.',
      answer: 'x<-4 or x≥1/2. x=−4 makes the denominator zero, so the expression is undefined there — it can never be included in the solution set, regardless of the sign pattern either side of it.',
      checkMode: 'self',
    },

    // ── Q18 Medium — simultaneous linear-quadratic, two integer solutions ─────
    {
      difficulty: 'Medium',
      question: 'Solve simultaneously for x and y: y = x + 1 and y = x² − 1',
      answer: 'x=2,y=3 or x=-1,y=0',
      checkMode: 'auto',
      correctAnswers: ['x=2,y=3 or x=-1,y=0', 'x=-1,y=0 or x=2,y=3'],
      explanation: 'Set x+1 = x²−1, so x²−x−2=0, giving (x−2)(x+1)=0, so x=2 or x=−1. Substitute into y=x+1: when x=2, y=3; when x=−1, y=0. Check: (2)²−1=3 ✓ and (−1)²−1=0 ✓.',
    },

    // ── Q19 Medium — simultaneous linear-quadratic, two integer solutions ─────
    {
      difficulty: 'Medium',
      question: 'Solve simultaneously for x and y: y = 2x − 3 and y = x² − 4x + 5',
      answer: 'x=2,y=1 or x=4,y=5',
      checkMode: 'auto',
      correctAnswers: ['x=2,y=1 or x=4,y=5', 'x=4,y=5 or x=2,y=1'],
      explanation: 'Set 2x−3 = x²−4x+5, so x²−6x+8=0, giving (x−2)(x−4)=0, so x=2 or x=4. Substitute into y=2x−3: when x=2, y=1; when x=4, y=5. Check: (2)²−4(2)+5=1 ✓ and (4)²−4(4)+5=5 ✓.',
    },

    // ── Q20 Hard — simultaneous linear-quadratic, irrational solutions ────────
    {
      difficulty: 'Hard',
      question: 'Solve simultaneously for x and y, leaving your answers in simplest surd form: x + y = 5 and y = x² − 3x + 1',
      answer: 'From the first equation, y=5−x. Substitute: 5−x=x²−3x+1, so x²−2x−4=0. Using the quadratic formula: x=(2±√20)/2=1±√5. When x=1+√5, y=5−(1+√5)=4−√5. When x=1−√5, y=5−(1−√5)=4+√5.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! A perfect score — you have completely mastered equations and inequalities for Grade 10. Keep it up!' },
      { minScore: 15, message: 'Excellent work! You have a very strong grasp of the content. Review any missed parts and you will have it perfect.' },
      { minScore: 11, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
      { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! A perfect score — you have completely mastered equations and inequalities for Grade 10. Keep it up!' },
    { minScore: 15, message: 'Excellent work! You have a very strong grasp of the content. Review any missed parts and you will have it perfect.' },
    { minScore: 11, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 6, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block A — Linear equations with brackets / fractions (positions 0-2)
        { difficulty: 'Easy', question: 'Solve for x: 4(x − 3) = 20', answer: 'x=8', checkMode: 'auto', correctAnswer: 'x=8', correctAnswers: ['x=8', 'x = 8', '8'], explanation: 'Expand: 4x − 12 = 20.\nAdd 12: 4x = 32.\nDivide by 4: x = 8 ✓' },
        { difficulty: 'Easy-Medium', question: 'Solve for x: 5x − 2(x + 1) = 13', answer: 'x=5', checkMode: 'auto', correctAnswer: 'x=5', correctAnswers: ['x=5', 'x = 5', '5'], explanation: 'Expand (minus sign flips both signs): 5x − 2x − 2 = 13.\nCombine like terms: 3x − 2 = 13.\nAdd 2: 3x = 15.\nDivide by 3: x = 5 ✓' },
        { difficulty: 'Medium', question: 'Solve for x: (3x + 1)/4 = (x − 2)/2', answer: 'x=-5', checkMode: 'auto', correctAnswer: 'x=-5', correctAnswers: ['x=-5', 'x = -5', '-5'], explanation: 'The LCM of 4 and 2 is 4. Multiply every term by 4: (3x + 1) = 2(x − 2).\nExpand: 3x + 1 = 2x − 4.\nSubtract 2x: x + 1 = −4.\nSubtract 1: x = −5 ✓' },

        // Block B — Quadratic equations by factorisation (positions 3-5)
        { difficulty: 'Easy', question: 'Solve for x: x² − 3x − 10 = 0', answer: 'x=5 or x=-2', checkMode: 'auto', correctAnswers: ['x=5 or x=-2', 'x=-2 or x=5'], explanation: 'Find two numbers multiplying to −10 and adding to −3: −5 and 2.\n(x − 5)(x + 2) = 0, so x = 5 or x = −2 ✓' },
        { difficulty: 'Medium', question: 'Solve for x: 2x² − 7x + 3 = 0', answer: 'x=3 or x=1/2', checkMode: 'auto', correctAnswers: ['x=3 or x=1/2', 'x=1/2 or x=3', 'x=3 or x=0.5', 'x=0.5 or x=3'], explanation: 'a×c = 2×3 = 6. Find two numbers multiplying to 6 and adding to −7: −6 and −1.\nSplit: 2x² − 6x − x + 3 = 0 → 2x(x − 3) − 1(x − 3) = 0 → (2x − 1)(x − 3) = 0, so x = 1/2 or x = 3 ✓' },
        { difficulty: 'Medium', question: 'Solve for x: x² + 4x = 21', answer: 'x=3 or x=-7', checkMode: 'auto', correctAnswers: ['x=3 or x=-7', 'x=-7 or x=3'], explanation: 'Rearrange: x² + 4x − 21 = 0.\nFind two numbers multiplying to −21 and adding to 4: 7 and −3.\n(x + 7)(x − 3) = 0, so x = −7 or x = 3 ✓' },

        // Block C — Simultaneous linear equations (positions 6-9)
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y: x + y = 9 and x − y = 3', answer: 'x=6,y=3', checkMode: 'auto', correctAnswer: 'x=6,y=3', correctAnswers: ['x=6,y=3', 'x = 6, y = 3'], explanation: 'Add the equations: 2x = 12, so x = 6.\nSubstitute into x + y = 9: 6 + y = 9, so y = 3 ✓' },
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y using substitution: y = x − 1 and 3x + y = 15', answer: 'x=4,y=3', checkMode: 'auto', correctAnswer: 'x=4,y=3', correctAnswers: ['x=4,y=3', 'x = 4, y = 3'], explanation: 'Substitute y = x − 1 into 3x + y = 15: 3x + x − 1 = 15.\nCombine: 4x − 1 = 15, so 4x = 16, x = 4.\nSubstitute back: y = 4 − 1 = 3 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve simultaneously for x and y using elimination: 2x + 3y = 16 and 2x − y = 4', answer: 'x=3.5,y=3', checkMode: 'auto', correctAnswer: 'x=3.5,y=3', correctAnswers: ['x=3.5,y=3', 'x = 3.5, y = 3', 'x=7/2,y=3'], explanation: 'Subtract the second equation from the first: (2x + 3y) − (2x − y) = 16 − 4, so 4y = 12, y = 3.\nSubstitute y = 3 into 2x − y = 4: 2x − 3 = 4, so 2x = 7, x = 3.5.\nCheck: 2(3.5) + 3(3) = 7 + 9 = 16 ✓ and 2(3.5) − 3 = 7 − 3 = 4 ✓' },
        { difficulty: 'Hard', question: 'Two numbers have a sum of 20 and a difference of 6. Form two equations and solve simultaneously to find the two numbers.', answer: 'Let the numbers be x and y, with x > y.\nx + y = 20 and x − y = 6.\nAdd the equations: 2x = 26, so x = 13.\nSubstitute into x + y = 20: 13 + y = 20, so y = 7.\nThe numbers are 13 and 7.', checkMode: 'self' },

        // Block D — Linear inequalities, incl. sign-flip and number-line description (positions 10-12)
        { difficulty: 'Easy', question: 'Solve for x: 3x − 5 > 10', answer: 'x>5', checkMode: 'auto', correctAnswer: 'x>5', correctAnswers: ['x>5', 'x > 5'], explanation: 'Add 5 to both sides: 3x > 15.\nDivide by 3: x > 5 ✓' },
        { difficulty: 'Medium', question: 'Solve for x: −4x + 3 ≤ 15', answer: 'x≥-3', checkMode: 'auto', correctAnswer: 'x≥-3', correctAnswers: ['x≥-3', 'x >= -3', 'x≥−3'], explanation: 'Subtract 3 from both sides: −4x ≤ 12.\nDivide both sides by −4 — the inequality sign reverses: x ≥ −3 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve for x: 5 − 2x < 3(x − 5). Describe how you would represent the solution set on a number line.', answer: 'x>2', checkMode: 'auto', correctAnswer: 'x>2', correctAnswers: ['x>2', 'x > 2'], explanation: 'Expand the right side: 5 − 2x < 3x − 15.\nAdd 2x to both sides: 5 < 5x − 15.\nAdd 15: 20 < 5x.\nDivide by 5: 4 < x, i.e. x > 2.\nOn a number line this is shown with an open circle at 2 and shading/an arrow extending to the right toward positive infinity, since 2 itself is not included.' },

        // Block E — Simultaneous linear-quadratic systems (positions 13-16)
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y: y = x + 2 and y = x² − 4', answer: 'x=3,y=5 or x=-2,y=0', checkMode: 'auto', correctAnswers: ['x=3,y=5 or x=-2,y=0', 'x=-2,y=0 or x=3,y=5'], explanation: 'Set x + 2 = x² − 4, so x² − x − 6 = 0.\nFactorise: (x − 3)(x + 2) = 0, so x = 3 or x = −2.\nWhen x = 3: y = 5. When x = −2: y = 0.\nCheck: 3² − 4 = 5 ✓ and (−2)² − 4 = 0 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve simultaneously for x and y: y = 3x − 2 and y = x² + 2x − 8', answer: 'x=3,y=7 or x=-2,y=-8', checkMode: 'auto', correctAnswers: ['x=3,y=7 or x=-2,y=-8', 'x=-2,y=-8 or x=3,y=7'], explanation: 'Set 3x − 2 = x² + 2x − 8, so x² − x − 6 = 0.\nFactorise: (x − 3)(x + 2) = 0, so x = 3 or x = −2.\nWhen x = 3: y = 3(3) − 2 = 7. When x = −2: y = 3(−2) − 2 = −8.\nCheck: 3² + 2(3) − 8 = 7 ✓ and (−2)² + 2(−2) − 8 = −8 ✓' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y, leaving answers in simplest surd form: y = x + 4 and y = x² + x − 2', answer: 'From the first equation substitute into the second: x + 4 = x² + x − 2.\nSimplify: 4 = x² − 2, so x² = 6, x = ±√6.\nWhen x = √6: y = √6 + 4. When x = −√6: y = −√6 + 4.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y: 2x + y = 7 and y = x² − 3x + 5', answer: 'x=2,y=3 or x=-1,y=9', checkMode: 'auto', correctAnswers: ['x=2,y=3 or x=-1,y=9', 'x=-1,y=9 or x=2,y=3'], explanation: 'From the first equation, y = 7 − 2x. Substitute: 7 − 2x = x² − 3x + 5.\nRearrange: x² − x − 2 = 0.\nFactorise: (x − 2)(x + 1) = 0, so x = 2 or x = −1.\nWhen x = 2: y = 3. When x = −1: y = 9.\nCheck: 2² − 3(2) + 5 = 3 ✓ and (−1)² − 3(−1) + 5 = 9 ✓' },

        // Block F — Word problems and literal-equation style applications (positions 17-19)
        { difficulty: 'Medium', question: 'The length of a rectangle is 5 cm more than its width. If the perimeter is 34 cm, form an equation in terms of the width w and solve for w.', answer: 'w=6', checkMode: 'auto', correctAnswer: 'w=6', correctAnswers: ['w=6', 'w = 6'], explanation: 'Perimeter = 2(length + width) = 2((w + 5) + w) = 34.\nSimplify: 2(2w + 5) = 34, so 4w + 10 = 34.\nSubtract 10: 4w = 24.\nDivide by 4: w = 6 ✓' },
        { difficulty: 'Medium-Hard', question: 'A number increased by 3, then doubled, gives the same result as the number decreased by 1, then tripled. Find the number.', answer: 'x=9', checkMode: 'auto', correctAnswer: 'x=9', correctAnswers: ['x=9', 'x = 9'], explanation: 'Let the number be x. Equation: 2(x + 3) = 3(x − 1).\nExpand: 2x + 6 = 3x − 3.\nSubtract 2x: 6 = x − 3.\nAdd 3: x = 9.\nCheck: 2(9 + 3) = 24 and 3(9 − 1) = 24 ✓' },
        { difficulty: 'Hard', question: 'A school hires chairs for a matric dance at a set-up fee of R500 plus R15 per chair. Sipho has a budget of R1 400. Form an inequality for the number of chairs c he can afford, and solve for c.', answer: 'c≤60', checkMode: 'auto', correctAnswer: 'c≤60', correctAnswers: ['c≤60', 'c <= 60'], explanation: 'Total cost: 500 + 15c ≤ 1400.\nSubtract 500: 15c ≤ 900.\nDivide by 15: c ≤ 60. Sipho can afford at most 60 chairs ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered linear and quadratic equations, simultaneous systems, and inequalities.' },
        { minScore: 14, message: 'Great work! Review any missed questions on simultaneous systems or inequalities and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on factorising and solving simultaneous equations, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block A — Linear equations with brackets / fractions (positions 0-2)
        { difficulty: 'Easy', question: 'Solve for x: 3(x − 4) = 15', answer: 'x=9', checkMode: 'auto', correctAnswer: 'x=9', correctAnswers: ['x=9', 'x = 9', '9'], explanation: 'Expand: 3x − 12 = 15.\nAdd 12: 3x = 27.\nDivide by 3: x = 9 ✓' },
        { difficulty: 'Easy-Medium', question: 'Solve for x: 6x − 3(x + 2) = 12', answer: 'x=6', checkMode: 'auto', correctAnswer: 'x=6', correctAnswers: ['x=6', 'x = 6', '6'], explanation: 'Expand (minus sign flips both signs): 6x − 3x − 6 = 12.\nCombine like terms: 3x − 6 = 12.\nAdd 6: 3x = 18.\nDivide by 3: x = 6 ✓' },
        { difficulty: 'Medium', question: 'Solve for x: (2x − 1)/3 = (x + 4)/5', answer: 'x=17/7', checkMode: 'auto', correctAnswer: 'x=17/7', correctAnswers: ['x=17/7'], explanation: 'The LCM of 3 and 5 is 15. Multiply every term by 15: 5(2x − 1) = 3(x + 4).\nExpand: 10x − 5 = 3x + 12.\nSubtract 3x: 7x − 5 = 12.\nAdd 5: 7x = 17.\nDivide by 7: x = 17/7 ✓' },

        // Block B — Quadratic equations by factorisation (positions 3-5)
        { difficulty: 'Easy', question: 'Solve for x: x² − 2x − 8 = 0', answer: 'x=4 or x=-2', checkMode: 'auto', correctAnswers: ['x=4 or x=-2', 'x=-2 or x=4'], explanation: 'Find two numbers multiplying to −8 and adding to −2: −4 and 2.\n(x − 4)(x + 2) = 0, so x = 4 or x = −2 ✓' },
        { difficulty: 'Medium', question: 'Solve for x: 3x² − 5x − 2 = 0', answer: 'x=2 or x=-1/3', checkMode: 'auto', correctAnswers: ['x=2 or x=-1/3', 'x=-1/3 or x=2'], explanation: 'a×c = 3×(−2) = −6. Find two numbers multiplying to −6 and adding to −5: −6 and 1.\nSplit: 3x² − 6x + x − 2 = 0 → 3x(x − 2) + 1(x − 2) = 0 → (3x + 1)(x − 2) = 0, so x = −1/3 or x = 2 ✓' },
        { difficulty: 'Medium', question: 'Solve for x: x² + 3x = 18', answer: 'x=3 or x=-6', checkMode: 'auto', correctAnswers: ['x=3 or x=-6', 'x=-6 or x=3'], explanation: 'Rearrange: x² + 3x − 18 = 0.\nFind two numbers multiplying to −18 and adding to 3: 6 and −3.\n(x + 6)(x − 3) = 0, so x = −6 or x = 3 ✓' },

        // Block C — Simultaneous linear equations (positions 6-9)
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y: x + y = 11 and x − y = 5', answer: 'x=8,y=3', checkMode: 'auto', correctAnswer: 'x=8,y=3', correctAnswers: ['x=8,y=3', 'x = 8, y = 3'], explanation: 'Add the equations: 2x = 16, so x = 8.\nSubstitute into x + y = 11: 8 + y = 11, so y = 3 ✓' },
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y using substitution: y = 2x + 1 and 2x + y = 13', answer: 'x=3,y=7', checkMode: 'auto', correctAnswer: 'x=3,y=7', correctAnswers: ['x=3,y=7', 'x = 3, y = 7'], explanation: 'Substitute y = 2x + 1 into 2x + y = 13: 2x + 2x + 1 = 13.\nCombine: 4x + 1 = 13, so 4x = 12, x = 3.\nSubstitute back: y = 2(3) + 1 = 7 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve simultaneously for x and y using elimination: 3x + 2y = 18 and 3x − y = 3', answer: 'x=8/3,y=5', checkMode: 'auto', correctAnswer: 'x=8/3,y=5', correctAnswers: ['x=8/3,y=5', 'x = 8/3, y = 5', 'x=2.67,y=5'], explanation: 'Subtract the second equation from the first: (3x + 2y) − (3x − y) = 18 − 3, so 3y = 15, y = 5.\nSubstitute y = 5 into 3x − y = 3: 3x − 5 = 3, so 3x = 8, x = 8/3.\nCheck: 3(8/3) + 2(5) = 8 + 10 = 18 ✓ and 3(8/3) − 5 = 8 − 5 = 3 ✓' },
        { difficulty: 'Hard', question: 'Two numbers have a sum of 24 and a difference of 8. Form two equations and solve simultaneously to find the two numbers.', answer: 'Let the numbers be x and y, with x > y.\nx + y = 24 and x − y = 8.\nAdd the equations: 2x = 32, so x = 16.\nSubstitute into x + y = 24: 16 + y = 24, so y = 8.\nThe numbers are 16 and 8.', checkMode: 'self' },

        // Block D — Linear inequalities, incl. sign-flip and number-line description (positions 10-12)
        { difficulty: 'Easy', question: 'Solve for x: 2x − 7 > 9', answer: 'x>8', checkMode: 'auto', correctAnswer: 'x>8', correctAnswers: ['x>8', 'x > 8'], explanation: 'Add 7 to both sides: 2x > 16.\nDivide by 2: x > 8 ✓' },
        { difficulty: 'Medium', question: 'Solve for x: −3x + 4 ≥ 19', answer: 'x≤-5', checkMode: 'auto', correctAnswer: 'x≤-5', correctAnswers: ['x≤-5', 'x <= -5', 'x≤−5'], explanation: 'Subtract 4 from both sides: −3x ≥ 15.\nDivide both sides by −3 — the inequality sign reverses: x ≤ −5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve for x: 8 − 3x ≤ 2(x + 4). Describe how you would represent the solution set on a number line.', answer: 'x≥0', checkMode: 'auto', correctAnswer: 'x≥0', correctAnswers: ['x≥0', 'x >= 0'], explanation: 'Expand the right side: 8 − 3x ≤ 2x + 8.\nSubtract 8 from both sides: −3x ≤ 2x.\nSubtract 2x: −5x ≤ 0.\nDivide by −5 — the sign reverses: x ≥ 0.\nOn a number line this is shown with a closed (filled) circle at 0 and shading/an arrow extending to the right toward positive infinity, since 0 itself is included.' },

        // Block E — Simultaneous linear-quadratic systems (positions 13-16)
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y: y = x + 3 and y = x² − 3', answer: 'x=3,y=6 or x=-2,y=1', checkMode: 'auto', correctAnswers: ['x=3,y=6 or x=-2,y=1', 'x=-2,y=1 or x=3,y=6'], explanation: 'Set x + 3 = x² − 3, so x² − x − 6 = 0.\nFactorise: (x − 3)(x + 2) = 0, so x = 3 or x = −2.\nWhen x = 3: y = 6. When x = −2: y = 1.\nCheck: 3² − 3 = 6 ✓ and (−2)² − 3 = 1 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve simultaneously for x and y: y = 4x − 3 and y = x² + x − 3', answer: 'x=0,y=-3 or x=3,y=9', checkMode: 'auto', correctAnswers: ['x=0,y=-3 or x=3,y=9', 'x=3,y=9 or x=0,y=-3'], explanation: 'Set 4x − 3 = x² + x − 3, so x² − 3x = 0.\nFactorise: x(x − 3) = 0, so x = 0 or x = 3.\nWhen x = 0: y = −3. When x = 3: y = 9.\nCheck: 0² + 0 − 3 = −3 ✓ and 3² + 3 − 3 = 9 ✓' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y, leaving answers in simplest surd form: y = x + 2 and y = x² + x − 6', answer: 'From the first equation substitute into the second: x + 2 = x² + x − 6.\nSimplify: 2 = x² − 6, so x² = 8, x = ±√8 = ±2√2.\nWhen x = 2√2: y = 2√2 + 2. When x = −2√2: y = −2√2 + 2.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y: 3x + y = 11 and y = x² − 2x − 1', answer: 'x=3,y=2 or x=-4,y=23', checkMode: 'auto', correctAnswers: ['x=3,y=2 or x=-4,y=23', 'x=-4,y=23 or x=3,y=2'], explanation: 'From the first equation, y = 11 − 3x. Substitute: 11 − 3x = x² − 2x − 1.\nRearrange: x² + x − 12 = 0.\nFactorise: (x + 4)(x − 3) = 0, so x = −4 or x = 3.\nWhen x = 3: y = 2. When x = −4: y = 23.\nCheck: (3)²−2(3)−1=2 ✓ and (−4)²−2(−4)−1=23 ✓' },

        // Block F — Word problems and literal-equation style applications (positions 17-19)
        { difficulty: 'Medium', question: 'The length of a rectangle is 4 cm more than its width. If the perimeter is 28 cm, form an equation in terms of the width w and solve for w.', answer: 'w=5', checkMode: 'auto', correctAnswer: 'w=5', correctAnswers: ['w=5', 'w = 5'], explanation: 'Perimeter = 2(length + width) = 2((w + 4) + w) = 28.\nSimplify: 2(2w + 4) = 28, so 4w + 8 = 28.\nSubtract 8: 4w = 20.\nDivide by 4: w = 5 ✓' },
        { difficulty: 'Medium-Hard', question: 'A number increased by 4, then doubled, gives the same result as the number decreased by 2, then tripled. Find the number.', answer: 'x=14', checkMode: 'auto', correctAnswer: 'x=14', correctAnswers: ['x=14', 'x = 14'], explanation: 'Let the number be x. Equation: 2(x + 4) = 3(x − 2).\nExpand: 2x + 8 = 3x − 6.\nSubtract 2x: 8 = x − 6.\nAdd 6: x = 14.\nCheck: 2(14+4)=36 and 3(14-2)=36 ✓' },
        { difficulty: 'Hard', question: 'A venue charges a set-up fee of R800 plus R25 per guest for a Grade 10 farewell. The committee has a budget of R3 800. Form an inequality for the number of guests g they can afford, and solve for g.', answer: 'g≤120', checkMode: 'auto', correctAnswer: 'g≤120', correctAnswers: ['g≤120', 'g <= 120'], explanation: 'Total cost: 800 + 25g ≤ 3800.\nSubtract 800: 25g ≤ 3000.\nDivide by 25: g ≤ 120. The committee can afford at most 120 guests ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered linear and quadratic equations, simultaneous systems, and inequalities.' },
        { minScore: 14, message: 'Great work! Review any missed questions on simultaneous systems or inequalities and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on factorising and solving simultaneous equations, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block A — Linear equations with brackets / fractions (positions 0-2)
        { difficulty: 'Easy', question: 'Solve for x: 5(x − 2) = 25', answer: 'x=7', checkMode: 'auto', correctAnswer: 'x=7', correctAnswers: ['x=7', 'x = 7', '7'], explanation: 'Expand: 5x − 10 = 25.\nAdd 10: 5x = 35.\nDivide by 5: x = 7 ✓' },
        { difficulty: 'Easy-Medium', question: 'Solve for x: 7x − 4(x − 1) = 22', answer: 'x=6', checkMode: 'auto', correctAnswer: 'x=6', correctAnswers: ['x=6', 'x = 6', '6'], explanation: 'Expand (minus sign flips both signs): 7x − 4x + 4 = 22.\nCombine like terms: 3x + 4 = 22.\nSubtract 4: 3x = 18.\nDivide by 3: x = 6 ✓' },
        { difficulty: 'Medium', question: 'Solve for x: (4x − 3)/5 = (x + 6)/2', answer: 'x=12', checkMode: 'auto', correctAnswer: 'x=12', correctAnswers: ['x=12', 'x = 12'], explanation: 'The LCM of 5 and 2 is 10. Multiply every term by 10: 2(4x − 3) = 5(x + 6).\nExpand: 8x − 6 = 5x + 30.\nSubtract 5x: 3x − 6 = 30.\nAdd 6: 3x = 36.\nDivide by 3: x = 12 ✓' },

        // Block B — Quadratic equations by factorisation (positions 3-5)
        { difficulty: 'Easy', question: 'Solve for x: x² − 4x − 21 = 0', answer: 'x=7 or x=-3', checkMode: 'auto', correctAnswers: ['x=7 or x=-3', 'x=-3 or x=7'], explanation: 'Find two numbers multiplying to −21 and adding to −4: −7 and 3.\n(x − 7)(x + 3) = 0, so x = 7 or x = −3 ✓' },
        { difficulty: 'Medium', question: 'Solve for x: 4x² − 4x − 3 = 0', answer: 'x=3/2 or x=-1/2', checkMode: 'auto', correctAnswers: ['x=3/2 or x=-1/2', 'x=-1/2 or x=3/2'], explanation: 'a×c = 4×(−3) = −12. Find two numbers multiplying to −12 and adding to −4: −6 and 2.\nSplit: 4x² − 6x + 2x − 3 = 0 → 2x(2x − 3) + 1(2x − 3) = 0 → (2x + 1)(2x − 3) = 0, so x = −1/2 or x = 3/2 ✓' },
        { difficulty: 'Medium', question: 'Solve for x: x² + 2x = 24', answer: 'x=4 or x=-6', checkMode: 'auto', correctAnswers: ['x=4 or x=-6', 'x=-6 or x=4'], explanation: 'Rearrange: x² + 2x − 24 = 0.\nFind two numbers multiplying to −24 and adding to 2: 6 and −4.\n(x + 6)(x − 4) = 0, so x = −6 or x = 4 ✓' },

        // Block C — Simultaneous linear equations (positions 6-9)
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y: x + y = 14 and x − y = 2', answer: 'x=8,y=6', checkMode: 'auto', correctAnswer: 'x=8,y=6', correctAnswers: ['x=8,y=6', 'x = 8, y = 6'], explanation: 'Add the equations: 2x = 16, so x = 8.\nSubstitute into x + y = 14: 8 + y = 14, so y = 6 ✓' },
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y using substitution: y = 3x − 4 and x + y = 12', answer: 'x=4,y=8', checkMode: 'auto', correctAnswer: 'x=4,y=8', correctAnswers: ['x=4,y=8', 'x = 4, y = 8'], explanation: 'Substitute y = 3x − 4 into x + y = 12: x + 3x − 4 = 12.\nCombine: 4x − 4 = 12, so 4x = 16, x = 4.\nSubstitute back: y = 3(4) − 4 = 8 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve simultaneously for x and y using elimination: 4x + 3y = 26 and 4x − y = 6', answer: 'x=2.75,y=5', checkMode: 'auto', correctAnswer: 'x=2.75,y=5', correctAnswers: ['x=2.75,y=5', 'x = 2.75, y = 5', 'x=11/4,y=5'], explanation: 'Subtract the second equation from the first: (4x + 3y) − (4x − y) = 26 − 6, so 4y = 20, y = 5.\nSubstitute y = 5 into 4x − y = 6: 4x − 5 = 6, so 4x = 11, x = 2.75.\nCheck: 4(2.75) + 3(5) = 11 + 15 = 26 ✓ and 4(2.75) − 5 = 11 − 5 = 6 ✓' },
        { difficulty: 'Hard', question: 'Two numbers have a sum of 30 and a difference of 12. Form two equations and solve simultaneously to find the two numbers.', answer: 'Let the numbers be x and y, with x > y.\nx + y = 30 and x − y = 12.\nAdd the equations: 2x = 42, so x = 21.\nSubstitute into x + y = 30: 21 + y = 30, so y = 9.\nThe numbers are 21 and 9.', checkMode: 'self' },

        // Block D — Linear inequalities, incl. sign-flip and number-line description (positions 10-12)
        { difficulty: 'Easy', question: 'Solve for x: 4x − 3 > 13', answer: 'x>4', checkMode: 'auto', correctAnswer: 'x>4', correctAnswers: ['x>4', 'x > 4'], explanation: 'Add 3 to both sides: 4x > 16.\nDivide by 4: x > 4 ✓' },
        { difficulty: 'Medium', question: 'Solve for x: −5x + 2 ≤ 22', answer: 'x≥-4', checkMode: 'auto', correctAnswer: 'x≥-4', correctAnswers: ['x≥-4', 'x >= -4', 'x≥−4'], explanation: 'Subtract 2 from both sides: −5x ≤ 20.\nDivide both sides by −5 — the inequality sign reverses: x ≥ −4 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve for x: 10 − x ≥ 2(x − 1). Describe how you would represent the solution set on a number line.', answer: 'x≤4', checkMode: 'auto', correctAnswer: 'x≤4', correctAnswers: ['x≤4', 'x <= 4'], explanation: 'Expand the right side: 10 − x ≥ 2x − 2.\nAdd x to both sides: 10 ≥ 3x − 2.\nAdd 2: 12 ≥ 3x.\nDivide by 3: 4 ≥ x, i.e. x ≤ 4.\nOn a number line this is shown with a closed (filled) circle at 4 and shading/an arrow extending to the left toward negative infinity, since 4 itself is included.' },

        // Block E — Simultaneous linear-quadratic systems (positions 13-16)
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y: y = x + 1 and y = x² − 5', answer: 'x=3,y=4 or x=-2,y=-1', checkMode: 'auto', correctAnswers: ['x=3,y=4 or x=-2,y=-1', 'x=-2,y=-1 or x=3,y=4'], explanation: 'Set x + 1 = x² − 5, so x² − x − 6 = 0.\nFactorise: (x − 3)(x + 2) = 0, so x = 3 or x = −2.\nWhen x = 3: y = 4. When x = −2: y = −1.\nCheck: 3² − 5 = 4 ✓ and (−2)² − 5 = −1 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve simultaneously for x and y: y = 5x − 4 and y = x² + 2x − 4', answer: 'x=0,y=-4 or x=3,y=11', checkMode: 'auto', correctAnswers: ['x=0,y=-4 or x=3,y=11', 'x=3,y=11 or x=0,y=-4'], explanation: 'Set 5x − 4 = x² + 2x − 4, so x² − 3x = 0.\nFactorise: x(x − 3) = 0, so x = 0 or x = 3.\nWhen x = 0: y = −4. When x = 3: y = 11.\nCheck: 0² + 2(0) − 4 = −4 ✓ and 3² + 2(3) − 4 = 11 ✓' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y, leaving answers in simplest surd form: y = x + 5 and y = x² + x − 1', answer: 'From the first equation substitute into the second: x + 5 = x² + x − 1.\nSimplify: 5 = x² − 1, so x² = 6, x = ±√6.\nWhen x = √6: y = √6 + 5. When x = −√6: y = −√6 + 5.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y: 2x + y = 9 and y = x² − x − 3', answer: 'x=3,y=3 or x=-4,y=17', checkMode: 'auto', correctAnswers: ['x=3,y=3 or x=-4,y=17', 'x=-4,y=17 or x=3,y=3'], explanation: 'From the first equation, y = 9 − 2x. Substitute: 9 − 2x = x² − x − 3.\nRearrange: x² + x − 12 = 0.\nFactorise: (x + 4)(x − 3) = 0, so x = −4 or x = 3.\nWhen x = 3: y = 9 − 2(3) = 3. When x = −4: y = 9 − 2(−4) = 17.\nCheck: 3² − 3 − 3 = 3 ✓ and (−4)² − (−4) − 3 = 17 ✓' },

        // Block F — Word problems and literal-equation style applications (positions 17-19)
        { difficulty: 'Medium', question: 'The length of a rectangle is 6 cm more than its width. If the perimeter is 40 cm, form an equation in terms of the width w and solve for w.', answer: 'w=7', checkMode: 'auto', correctAnswer: 'w=7', correctAnswers: ['w=7', 'w = 7'], explanation: 'Perimeter = 2(length + width) = 2((w + 6) + w) = 40.\nSimplify: 2(2w + 6) = 40, so 4w + 12 = 40.\nSubtract 12: 4w = 28.\nDivide by 4: w = 7 ✓' },
        { difficulty: 'Medium-Hard', question: 'A number increased by 5, then doubled, gives the same result as the number decreased by 3, then tripled. Find the number.', answer: 'x=19', checkMode: 'auto', correctAnswer: 'x=19', correctAnswers: ['x=19', 'x = 19'], explanation: 'Let the number be x. Equation: 2(x + 5) = 3(x − 3).\nExpand: 2x + 10 = 3x − 9.\nSubtract 2x: 10 = x − 9.\nAdd 9: x = 19.\nCheck: 2(19+5)=48 and 3(19-3)=48 ✓' },
        { difficulty: 'Hard', question: 'A conference centre charges a set-up fee of R600 plus R20 per delegate. The organiser has a budget of R2 600. Form an inequality for the number of delegates d they can afford, and solve for d.', answer: 'd≤100', checkMode: 'auto', correctAnswer: 'd≤100', correctAnswers: ['d≤100', 'd <= 100'], explanation: 'Total cost: 600 + 20d ≤ 2600.\nSubtract 600: 20d ≤ 2000.\nDivide by 20: d ≤ 100. The organiser can afford at most 100 delegates ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered linear and quadratic equations, simultaneous systems, and inequalities.' },
        { minScore: 14, message: 'Great work! Review any missed questions on simultaneous systems or inequalities and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on factorising and solving simultaneous equations, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
