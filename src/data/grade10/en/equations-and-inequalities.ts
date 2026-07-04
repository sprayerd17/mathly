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
}
