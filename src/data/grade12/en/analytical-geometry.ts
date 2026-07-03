import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// Section 1: distance formula → blue   (#2563eb)
//            gradient         → orange (#ea580c)
//            midpoint         → green  (#16a34a)
// Section 2: centre coords    → blue   (#2563eb)
//            radius           → orange (#ea580c)
//            completed square → green  (#16a34a)
// Section 3: radius gradient  → blue   (#2563eb)
//            tangent gradient → orange (#ea580c)
//            tangent equation → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Analytical Geometry',
  grade: 12,
  subject: 'Mathematics',
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISION: DISTANCE, GRADIENT AND MIDPOINT FORMULAE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'distance-gradient-midpoint',
      title: 'Revision — Distance, Gradient and Midpoint Formulae',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We revise the three core formulae from Grade 10 that underpin all analytical geometry work. The ${bl('distance formula')}, the ${or('gradient formula')}, and the ${gr('midpoint formula')} appear in almost every question in this topic.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('distance formula')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gradient')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('midpoint')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The three formulae</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:8px;">Distance Formula</p>` +
        `<p style="font-family:monospace;font-size:1.05em;color:#1e3a8a;margin-bottom:6px;">d = √[(x₂−x₁)² + (y₂−y₁)²]</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Gives the length of the segment joining two points.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:8px;">Gradient Formula</p>` +
        `<p style="font-family:monospace;font-size:1.05em;color:#9a3412;margin-bottom:6px;">m = (y₂−y₁) / (x₂−x₁)</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Gives the slope (steepness) of a line segment.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:8px;">Midpoint Formula</p>` +
        `<p style="font-family:monospace;font-size:1.05em;color:#14532d;margin-bottom:6px;">M = ((x₁+x₂)/2 , (y₁+y₂)/2)</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Gives the coordinates of the midpoint of a segment.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Parallel and perpendicular lines</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;">Parallel lines</p>` +
        `<p style="font-family:monospace;font-size:1.05em;color:#0f1f3d;margin-bottom:6px;">m₁ = m₂</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Two lines are parallel when their gradients are equal.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;">Perpendicular lines</p>` +
        `<p style="font-family:monospace;font-size:1.05em;color:#0f1f3d;margin-bottom:6px;">m₁ × m₂ = −1</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Two lines are perpendicular when their gradients are negative reciprocals.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Labelling your points</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always label the two points as (x₁, y₁) and (x₂, y₂) before substituting. It does not matter which point you call (x₁, y₁) — the final answers for ${bl('distance')}, ${or('gradient')}, and ${gr('midpoint')} will be the same either way.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the distance, gradient and midpoint of the segment joining A(2, 3) and B(8, 11).',
          answer: `${bl('Distance')} = 10 &nbsp;·&nbsp; ${or('Gradient')} = 4/3 &nbsp;·&nbsp; ${gr('Midpoint')} = (5, 7)`,
          steps: [
            `${bl('Distance:')} d = √[(8−2)² + (11−3)²] = √[36 + 64] = √100 = ${bl('10')}`,
            `${or('Gradient:')} m = (11−3) / (8−2) = 8/6 = ${or('4/3')}`,
            `${gr('Midpoint:')} M = ((2+8)/2 , (3+11)/2) = (10/2 , 14/2) = ${gr('(5, 7)')}`,
          ],
        },
        {
          question: 'Prove that the line through C(1, 2) and D(4, 6) is perpendicular to the line through E(0, 3) and F(4, 0).',
          answer: `The lines are perpendicular because m<sub>CD</sub> × m<sub>EF</sub> = (4/3) × (−3/4) = −1`,
          steps: [
            `${or('Gradient of CD:')} m<sub>CD</sub> = (6−2) / (4−1) = 4/3`,
            `${or('Gradient of EF:')} m<sub>EF</sub> = (0−3) / (4−0) = −3/4`,
            `Product of gradients: (4/3) × (−3/4) = −12/12 = <strong>−1</strong>`,
            `Since m<sub>CD</sub> × m<sub>EF</sub> = −1, the lines CD and EF are <strong>perpendicular</strong>. ✓`,
          ],
        },
        {
          question: 'Sipho says a line with gradient 2 is parallel to a line with gradient −2. Is he correct?',
          answer: `No — ${or('2 ≠ −2')}, so the lines are <strong>not</strong> parallel.`,
          steps: [
            `No — parallel lines have equal gradients (m₁ = m₂).`,
            `${or('2 ≠ −2')}, so the lines are not parallel.`,
            `A line parallel to a line with gradient 2 must also have gradient ${or('2')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — write the standard circle equation ──────────────────────
        {
          difficulty: 'Easy',
          question: 'Write the equation of the circle with centre O(2, 1) and radius 5.',
          answer: '(x−2)²+(y−1)²=25',
          checkMode: 'auto',
          correctAnswer: '(x-2)^2+(y-1)^2=25',
          correctAnswers: ['(x-2)^2+(y-1)^2=25', '(x-2)2+(y-1)2=25', 'x^2+y^2-4x-2y-20=0'],
          explanation: 'Substitute a=2, b=1, r=5 into (x−a)²+(y−b)²=r².\n(x−2)²+(y−1)²=5²\n(x−2)²+(y−1)²=25 ✓',
        },

        // ── Q2 Medium — verify a point lies on the circle ─────────────────────
        {
          difficulty: 'Medium',
          question: 'Verify that A(6, 4) lies on the circle (x−2)²+(y−1)²=25. What is the value of (6−2)²+(4−1)²?',
          answer: '25',
          checkMode: 'auto',
          correctAnswer: '25',
          explanation: '(6−2)²+(4−1)²=4²+3²=16+9=25=r² ✓\nA(6, 4) satisfies the equation and therefore lies on the circle.',
        },

        // ── Q3 Hard — gradient of radius then tangent equation ────────────────
        {
          difficulty: 'Hard',
          question: 'For the circle (x−2)²+(y−1)²=25 with centre O(2, 1), find the gradient of the radius OA where A(6, 4), then find the equation of the tangent to the circle at A.',
          answer: 'Gradient OA = (4−1)/(6−2) = 3/4. Tangent gradient = −4/3 (negative reciprocal).\nTangent: y−4 = −4/3(x−6) → 4x+3y=36',
          checkMode: 'self',
        },

        // ── Q4 Medium — midpoint of a chord ──────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the midpoint M of chord AB where A(6, 4) and B(−1, −3).',
          answer: '(2.5, 0.5)',
          checkMode: 'auto',
          correctAnswer: '(2.5, 0.5)',
          correctAnswers: ['(2.5, 0.5)', '(5/2, 1/2)', '(2,5 ; 0,5)', '2.5 ; 0.5'],
          explanation: 'M = ((6+(−1))/2, (4+(−3))/2) = (5/2, 1/2) = (2.5, 0.5) ✓',
        },

        // ── Q5 Hard — prove OM perpendicular to chord AB ─────────────────────
        {
          difficulty: 'Hard',
          question: 'Show that OM is perpendicular to chord AB, where O(2, 1) is the centre and M(2.5, 0.5) is the midpoint of AB with A(6, 4) and B(−1, −3).',
          answer: 'Gradient AB = (−3−4)/(−1−6) = −7/−7 = 1.\nGradient OM = (0.5−1)/(2.5−2) = −0.5/0.5 = −1.\nProduct = 1×(−1) = −1 ✓ OM⊥AB confirmed.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Cartesian plane showing circle with centre O(2,1) and radius 5, points A(6,4) and B(-1,-3) on circumference, tangent at A, chord AB with midpoint M marked, and external point P(9,1) outside the circle" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video revising the distance, gradient and midpoint formulae with worked examples using two coordinate points" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THE EQUATION OF A CIRCLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equation-of-a-circle',
      title: 'The Equation of a Circle',
      icon: '⭕',
      explanation:
        `<p style="margin-bottom:16px;">A circle with ${bl('centre (a, b)')} and ${or('radius r')} has the equation <strong>(x−a)² + (y−b)² = r²</strong>. This comes directly from the distance formula — every point (x, y) on the circle is exactly ${or('r')} units from the ${bl('centre (a, b)')}. When the centre is at the origin, the equation simplifies to x² + y² = r².</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('centre coordinates')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('radius')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('completed square form')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Standard form of a circle</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-family:monospace;font-size:1.2em;font-weight:700;color:#0f1f3d;margin:0;">(x − ${bl('a')})² + (y − ${bl('b')})² = ${or('r')}²</p>` +
        `<p style="color:#6b7280;font-size:13px;margin-top:8px;margin-bottom:0;">Centre ${bl('(a, b)')} &nbsp;·&nbsp; Radius ${or('r')}</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Expanded form — completing the square</p>` +
        `<p style="margin-bottom:12px;">A circle equation may also appear in the expanded form <strong>x² + y² + Dx + Ey + F = 0</strong>. To find the ${bl('centre')} and ${or('radius')}, we ${gr('complete the square')} on both the x and y terms.</p>` +

        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Group')} — Rearrange so that x-terms and y-terms are together on the left and the constant is on the right.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Complete the square')} — For each variable, take half the coefficient, square it, and add it to both sides.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Read off')} — The equation is now in standard form. Read the ${bl('centre')} and ${or('radius')} directly.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sign change when reading the centre</p>` +
        `<p style="margin:0;color:#1e3a8a;">In the standard form <strong>(x − a)² + (y − b)² = r²</strong>, the ${bl('centre')} is (a, b). When the equation shows <em>(x − 4)²</em>, the x-coordinate is <strong>+4</strong>. When it shows <em>(x + 3)²</em> — which is really (x − (−3))² — the x-coordinate is <strong>−3</strong>. Always change the sign of the values inside the brackets.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Write the equation of a circle with centre (3, −2) and radius 5.',
          answer: `(x − ${bl('3')})² + (y + ${bl('2')})² = ${or('25')}`,
          steps: [
            `Substitute ${bl('a = 3')}, ${bl('b = −2')}, ${or('r = 5')} into (x − a)² + (y − b)² = r²`,
            `(x − ${bl('3')})² + (y − (${bl('−2')}))² = ${or('5')}²`,
            `<strong>(x − ${bl('3')})² + (y + ${bl('2')})² = ${or('25')}</strong>`,
          ],
        },
        {
          question: 'Find the centre and radius of (x − 4)² + (y + 1)² = 49.',
          answer: `Centre = ${bl('(4, −1)')} &nbsp;·&nbsp; Radius = ${or('7')}`,
          steps: [
            `${bl('Centre = (4, −1)')} — change the signs of the values inside the brackets.`,
            `${or('Radius:')} r² = 49 → r = √49 = ${or('7')}`,
          ],
        },
        {
          question: 'Find the centre and radius of x² + y² − 6x + 4y − 12 = 0 by completing the square.',
          answer: `${gr('(x − 3)² + (y + 2)² = 25')} &nbsp;·&nbsp; Centre = ${bl('(3, −2)')} &nbsp;·&nbsp; Radius = ${or('5')}`,
          steps: [
            `Group x and y terms: (x² − 6x) + (y² + 4y) = 12`,
            `${gr('Complete the square:')} (x² − 6x + 9) + (y² + 4y + 4) = 12 + 9 + 4`,
            `${gr('(x − 3)² + (y + 2)² = 25')}`,
            `${bl('Centre = (3, −2)')} (change signs) &nbsp;&nbsp; ${or('Radius:')} r = √25 = ${or('5')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q6 Hard — completing the square to find centre and radius ─────────
        {
          difficulty: 'Hard',
          question: 'Find the centre and radius of the circle x²+y²−4x+6y−12=0 by completing the square.',
          answer: '(x²−4x+4)+(y²+6y+9)=12+4+9\n(x−2)²+(y+3)²=25\nCentre=(2,−3), radius=5',
          checkMode: 'self',
        },

        // ── Q7 Medium — distance from an external point to the centre ─────────
        {
          difficulty: 'Medium',
          question: 'Find the distance from external point P(7, −3) to the centre (2, −3) of the circle from Q6.',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'd = √[(7−2)²+(−3−(−3))²] = √[25+0] = √25 = 5 ✓',
        },

        // ── Q8 Hard — interpret P lying exactly on the circle ─────────────────
        {
          difficulty: 'Hard',
          question: 'Since P(7, −3) is exactly 5 units from the centre and the radius of the circle from Q6 is also 5, what does this tell you about P? What is the length of the tangent from P to the circle?',
          answer: 'P lies exactly on the circle since its distance from the centre equals the radius. A point on the circle is not external — the tangent length from a point on the circle is 0.',
          checkMode: 'self',
        },

        // ── Q9 Hard — tangent at a point on the circle from Q6 ───────────────
        {
          difficulty: 'Hard',
          question: 'Find the equation of the tangent to the circle (x−2)²+(y+3)²=25 at the point (2, 2). First verify that (2, 2) lies on the circle.',
          answer: 'Verify: (2−2)²+(2+3)²=0+25=25 ✓\nGradient from centre (2,−3) to (2,2): undefined (vertical line x=2).\nTangent is perpendicular to vertical radius, so tangent is horizontal: y=2.',
          checkMode: 'self',
        },

        // ── Q10 Easy — write equation for circle at origin ────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the equation of a circle with centre (0, 0) and radius 6.',
          answer: 'x²+y²=36',
          checkMode: 'auto',
          correctAnswer: 'x^2+y^2=36',
          correctAnswers: ['x^2+y^2=36', 'x²+y²=36'],
          explanation: 'Centre at origin → (x−0)²+(y−0)²=6² → x²+y²=36 ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Cartesian plane showing circle x²+y²-4x+6y-12=0 with its centre (2,-3) and radius 5 labelled after completing the square, and point P(7,-3) on the circumference" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the equation of a circle in standard form and how to find the centre and radius by completing the square" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — FINDING THE EQUATION OF A TANGENT TO A CIRCLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tangent-to-a-circle',
      title: 'Finding the Equation of a Tangent to a Circle',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">A tangent to a circle at a given point P is <strong>perpendicular to the radius</strong> at that point. To find the equation of the tangent at P: (1) find the ${bl('gradient of the radius')} from the centre to P, (2) find the ${or('negative reciprocal')} for the tangent gradient, (3) use the point-slope form y − y₁ = m(x − x₁) with point P to write the ${gr('tangent equation')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius gradient')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('tangent gradient')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tangent equation')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Three-step method</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Find the radius gradient')} — Use the gradient formula with the centre and the point of tangency P.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Find the tangent gradient')} — Take the negative reciprocal of the ${bl('radius gradient')}: m<sub>tan</sub> = −1 / m<sub>radius</sub>.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Write the tangent equation')} — Substitute the ${or('tangent gradient')} and point P into y − y₁ = m(x − x₁).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Point of tangency must lie on the circle</p>` +
        `<p style="margin:0;color:#1e3a8a;">Before you start, verify that point P satisfies the equation of the circle by substituting its coordinates. If it does not, you have the wrong point and your tangent equation will be incorrect.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the equation of the tangent to the circle x² + y² = 25 at the point (3, 4).',
          answer: `${gr('3x + 4y = 25')}`,
          steps: [
            `Centre = (0, 0). ${bl('Gradient of radius to (3, 4):')} m<sub>radius</sub> = (4−0) / (3−0) = ${bl('4/3')}`,
            `${or('Gradient of tangent:')} m<sub>tan</sub> = −1 ÷ (4/3) = ${or('−3/4')} (negative reciprocal)`,
            `Tangent equation: y − 4 = −3/4 · (x − 3)`,
            `Multiply by 4: 4y − 16 = −3x + 9 &nbsp;→&nbsp; 3x + 4y = 25`,
            `Or: 4y = −3x + 25 &nbsp;→&nbsp; ${gr('3x + 4y = 25')} ✓`,
          ],
        },
        {
          question: 'Find the equation of the tangent to (x − 2)² + (y − 1)² = 50 at the point (9, 8).',
          answer: `${gr('y = −x + 17')}`,
          steps: [
            `Centre = (2, 1). ${bl('Gradient of radius:')} m<sub>radius</sub> = (8−1) / (9−2) = 7/7 = ${bl('1')}`,
            `${or('Gradient of tangent:')} m<sub>tan</sub> = −1 ÷ 1 = ${or('−1')} (negative reciprocal)`,
            `Tangent equation: y − 8 = −1 · (x − 9)`,
            `${gr('y = −x + 17')} ✓`,
          ],
        },
        {
          question: 'Lerato says the tangent at any point on x² + y² = r² can be written as x·x₁ + y·y₁ = r², where (x₁, y₁) is the point of tangency. Verify this for the point (3, 4) on x² + y² = 25.',
          answer: `Lerato's formula gives ${gr('3x + 4y = 25')}, confirming Example 1.`,
          steps: [
            `Using Lerato's formula with (x₁, y₁) = (3, 4) and r² = 25: x·(3) + y·(4) = 25 &nbsp;→&nbsp; ${gr('3x + 4y = 25')}`,
            `This matches the answer from Example 1, confirming the formula is valid. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q11 Medium — centre and radius from standard form ─────────────────
        {
          difficulty: 'Medium',
          question: 'Find the centre and radius of (x+3)²+(y−5)²=64.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'Centre:',
              correctAnswer: '(-3, 5)',
              correctAnswers: ['(-3,5)', '(-3, 5)', '(−3, 5)', '(−3,5)'],
              explanation: 'Change the signs inside the brackets: x-coordinate is −3, y-coordinate is +5. Centre = (−3, 5).',
            },
            {
              label: 'Radius:',
              correctAnswer: '8',
              explanation: 'r² = 64 → r = √64 = 8',
            },
          ],
        },

        // ── Q12 Hard — circle passing through origin ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'A circle passes through the origin and has centre (3, 4). Find its radius and equation.',
          answer: 'Radius = distance from (3,4) to (0,0) = √(9+16) = √25 = 5.\nEquation: (x−3)²+(y−4)²=25',
          checkMode: 'self',
        },

        // ── Q13 Medium — tangent to circle at origin using formula ────────────
        {
          difficulty: 'Medium',
          question: 'Find the equation of the tangent to x²+y²=100 at the point (6, −8).',
          answer: '6x−8y=100 or 3x−4y=50',
          checkMode: 'auto',
          correctAnswer: '6x-8y=100',
          correctAnswers: ['6x-8y=100', '3x-4y=50', '6x−8y=100', '3x−4y=50'],
          explanation: 'Using x·x₁+y·y₁=r²: 6x+(−8)y=100 → 6x−8y=100 → 3x−4y=50 ✓',
        },

        // ── Q14 Hard — tangent at a given point on a shifted circle ───────────
        {
          difficulty: 'Hard',
          question: 'A tangent to the circle (x−1)²+(y−2)²=45 at point P(7, 8) is drawn. Find the equation of this tangent.',
          answer: 'Gradient of radius from (1,2) to (7,8): m = (8−2)/(7−1) = 1.\nTangent gradient = −1.\nTangent: y−8 = −1(x−7) → y = −x+15',
          checkMode: 'self',
        },

        // ── Q15 Hard — length of tangent from an external point ───────────────
        {
          difficulty: 'Hard',
          question: 'Find the length of the tangent from external point P(10, 0) to the circle x²+y²=36.',
          answer: 'Distance from P(10,0) to centre O(0,0): d=√(100)=10. Radius r=6.\nTangent length = √(d²−r²) = √(100−36) = √64 = 8',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the equation of a tangent to a circle using the radius gradient and perpendicularity condition" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SOLVING PROBLEMS COMBINING CIRCLE AND LINE GEOMETRY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-problems-combining-circle-and-line-geometry',
      title: 'Solving Problems Combining Circle and Line Geometry',
      icon: '🔗',
      explanation:
        `<p style="margin-bottom:16px;">We combine all the tools from this topic to solve multi-step problems involving circles, tangents, chords and straight lines on the Cartesian plane — finding intersection points, proving geometric properties, and determining unknown equations from given conditions. The key is identifying ${bl('what to substitute and verify')}, recognising ${or('perpendicularity conditions')}, and presenting the ${gr('final answer')} clearly.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('substitution check')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('perpendicularity proof')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">General approach for combination problems</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identify and verify')} — Substitute given points into the circle equation to confirm they lie on the circle before using them further.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Apply perpendicularity')} — Use m₁ × m₂ = −1 to prove or find perpendicular lines; use the midpoint theorem for chords.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('State the conclusion')} — Always write a clear statement answering the question, with the numerical result and a ✓ where a proof is required.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tangent length from an external point</p>` +
        `<p style="margin:0;color:#1e3a8a;">If a point P is outside a circle with centre O and radius r, the length of the tangent from P to the circle is given by <strong>tangent length = √(d² − r²)</strong>, where d = |PO| is the distance from P to the centre. This follows from Pythagoras' theorem on the right triangle formed by O, P, and the point of tangency.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Show that the point P(4, 5) lies on the circle (x − 1)² + (y − 1)² = 25.',
          answer: `${gr('P(4, 5) lies on the circle')} because (4−1)² + (5−1)² = 9 + 16 = 25 = r² ✓`,
          steps: [
            `${bl('Substitute P(4, 5) into (x − 1)² + (y − 1)² = 25:')}`,
            `${bl('(4 − 1)² + (5 − 1)²')} = 3² + 4² = 9 + 16 = ${bl('25')}`,
            `Since ${bl('25 = 25')}, the coordinates satisfy the equation. ${gr('P(4, 5) lies on the circle.')} ✓`,
          ],
        },
        {
          question: 'Find the length of the tangent drawn from external point P(8, 0) to the circle x² + y² = 16.',
          answer: `${gr('Tangent length = 4√3')}`,
          steps: [
            `Circle has centre O(0, 0) and radius r = √16 = 4.`,
            `${bl('Distance from P(8, 0) to centre O(0, 0):')} d = √[(8−0)² + (0−0)²] = √64 = ${bl('8')}`,
            `${or('Tangent length')} = √(d² − r²) = √(64 − 16) = √48 = ${gr('4√3')}`,
          ],
        },
        {
          question: 'Thabo has a circle with centre O(2, 3) and a chord with endpoints A(6, 3) and B(2, 7). Find the midpoint M of AB, then verify that OM is perpendicular to AB.',
          answer: `M = (4, 5) &nbsp;·&nbsp; ${or('mₐₙ × mₒₘ = −1 × 1 = −1')}, so ${gr('OM ⊥ AB')} ✓`,
          steps: [
            `${bl('Midpoint M of AB:')} M = ((6+2)/2 , (3+7)/2) = (8/2 , 10/2) = ${bl('(4, 5)')}`,
            `${or('Gradient of AB:')} mₐₙ = (7−3) / (2−6) = 4 / (−4) = ${or('−1')}`,
            `${or('Gradient of OM:')} mₒₘ = (5−3) / (4−2) = 2/2 = ${or('1')}`,
            `Product of gradients: ${or('−1 × 1 = −1')}`,
            `Since mₐₙ × mₒₘ = −1, ${gr('OM is perpendicular to AB.')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q16 Hard — evaluate a claim about tangent gradients ───────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says any line with gradient −3/4 passing through a point on x²+y²=25 is a tangent to the circle. Is he correct? Explain.',
          answer: 'No. A gradient of −3/4 works as a tangent gradient only at the specific points on x²+y²=25 where the radius gradient is 4/3 — namely at (3,4) and (−3,−4). At any other point on the circle the radius has a different gradient, so the tangent gradient is different.',
          checkMode: 'self',
        },

        // ── Q17 Hard — complete the square for expanded circle equation ────────
        {
          difficulty: 'Hard',
          question: 'Find the coordinates of the centre and radius of x²+y²+8x−10y+5=0.',
          answer: '(x²+8x+16)+(y²−10y+25)=−5+16+25\n(x+4)²+(y−5)²=36\nCentre=(−4, 5), radius=6',
          checkMode: 'self',
        },

        // ── Q18 Hard — evaluate a claim about congruent circles ───────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says two circles with the same radius must be congruent. Is she correct? Explain.',
          answer: 'Yes. Two circles with the same radius are always congruent, regardless of where their centres are. All circles of radius r are geometrically identical in shape and size — they can be mapped onto each other by a translation.',
          checkMode: 'self',
        },

        // ── Q19 Hard — circle from diameter endpoints ─────────────────────────
        {
          difficulty: 'Hard',
          question: 'A circle has diameter endpoints at A(1, 3) and B(7, 9). Find the centre, radius and equation of the circle.',
          answer: 'Centre = midpoint of AB = ((1+7)/2, (3+9)/2) = (4, 6).\nRadius = ½×|AB| = ½×√[(7−1)²+(9−3)²] = ½×√72 = 3√2.\nEquation: (x−4)²+(y−6)²=18',
          checkMode: 'self',
        },

        // ── Q20 Hard — prove a line is tangent by repeated root ───────────────
        {
          difficulty: 'Hard',
          question: 'Show that the line y=x+2 is a tangent to the circle x²+y²=2, and find the point of tangency.',
          answer: 'Substitute y=x+2: x²+(x+2)²=2 → x²+x²+4x+4=2 → 2x²+4x+2=0 → x²+2x+1=0 → (x+1)²=0.\nRepeated root x=−1 confirms tangency. y=−1+2=1. Point of tangency: (−1, 1).',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to combine circle and line geometry to verify points on a circle, find tangent lengths from external points, and prove chord-perpendicularity properties" />',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered analytical geometry.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered analytical geometry.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
