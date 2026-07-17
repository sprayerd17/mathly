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

      diagramSvg:
        `<svg viewBox="0 0 210 182" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><circle cx="91" cy="91" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5" /><line x1="147" y1="49" x2="49" y2="147" stroke="#16a34a" stroke-width="2.5" /><line x1="91" y1="91" x2="147" y2="49" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3" /><line x1="91" y1="91" x2="189" y2="91" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3" /><line x1="111" y1="1" x2="183" y2="97" stroke="#ea580c" stroke-width="2.5" /><circle cx="91" cy="91" r="3.5" fill="#0f1f3d" /><circle cx="147" cy="49" r="3.5" fill="#2563eb" /><circle cx="49" cy="147" r="3.5" fill="#2563eb" /><circle cx="98" cy="98" r="3.5" fill="#16a34a" /><circle cx="189" cy="91" r="3.5" fill="#dc2626" /><text x="80" y="107" font-weight="700" font-size="11" fill="#0f1f3d" text-anchor="end">O(2, 1)</text><text x="152" y="42" font-weight="700" font-size="11" fill="#2563eb" text-anchor="start">A(6, 4)</text><text x="38" y="152" font-weight="700" font-size="11" fill="#2563eb" text-anchor="end">B(-1, -3)</text><text x="98" y="113" font-weight="700" font-size="11" fill="#16a34a" text-anchor="middle">M</text><text x="194" y="87" font-weight="700" font-size="11" fill="#dc2626" text-anchor="start">P(9, 1)</text><text x="172" y="16" font-weight="700" font-size="10" fill="#ea580c" text-anchor="middle">tangent</text></svg>`,

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

      diagramSvg:
        `<svg viewBox="0 0 182 182" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><circle cx="91" cy="91" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5" /><line x1="91" y1="91" x2="161" y2="91" stroke="#ea580c" stroke-width="2" stroke-dasharray="4 3" /><circle cx="91" cy="91" r="3.5" fill="#2563eb" /><circle cx="161" cy="91" r="3.5" fill="#16a34a" /><text x="80" y="80" font-weight="700" font-size="11" fill="#2563eb" text-anchor="end">centre (2, -3)</text><text x="166" y="87" font-weight="700" font-size="11" fill="#16a34a" text-anchor="start">P(7, -3)</text><text x="126" y="83" font-weight="700" font-size="11" fill="#ea580c" text-anchor="middle">r = 5</text></svg>`,

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

        // ── Q21 Hard — find an unknown parameter using the tangency condition ──
        {
          difficulty: 'Hard',
          question: 'Determine the value(s) of k for which the line y = 2x + k is a tangent to the circle x² + y² = 5.',
          answer: 'Substitute y = 2x + k into x² + y² = 5:\nx² + (2x + k)² = 5\nx² + 4x² + 4kx + k² = 5\n5x² + 4kx + (k² − 5) = 0\n\nFor the line to be a tangent, this quadratic must have a repeated root, so the discriminant must equal zero:\nΔ = (4k)² − 4(5)(k² − 5) = 0\n16k² − 20k² + 100 = 0\n−4k² + 100 = 0\nk² = 25\nk = ±5\n\nCheck k = 5: 5x² + 20x + 20 = 0 → x² + 4x + 4 = 0 → (x+2)² = 0 ✓ (repeated root at x = −2)\nCheck k = −5: 5x² − 20x + 20 = 0 → x² − 4x + 4 = 0 → (x−2)² = 0 ✓ (repeated root at x = 2)\n\nSo k = 5 or k = −5.',
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

  // ═══════════════════════════════════════════════════════════════════════════
  // PRACTICE SETS — 3 sets x 20 questions, skill blocks in matching positions:
  // Block 1 (Q1-3):   Standard circle equation — write eqn / read centre+radius / verify point on circle — Easy, Easy, Medium
  // Block 2 (Q4-6):   Completing the square to find centre and radius — Easy, Medium, Medium
  // Block 3 (Q7-9):   Tangent to a circle at a given point — Medium, Hard, Hard (diagram: Q9)
  // Block 4 (Q10-12): Distance to centre / tangent length from an external point — Easy, Medium, Hard (diagram: Q12)
  // Block 5 (Q13-16): Circle from diameter endpoints / chord midpoint perpendicularity — Medium, Medium, Hard, Hard (diagram: Q16)
  // Block 6 (Q17-20): Mixed hard combination — tangency by repeated root, claim evaluation, multi-part centre/radius — Hard, Hard, Hard, Hard (diagram: Q17)
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Standard circle equation
        { difficulty: 'Easy', question: 'Write the equation of the circle with centre (3, −1) and radius 6.', checkMode: 'auto', correctAnswer: '(x-3)^2+(y+1)^2=36', correctAnswers: ['(x-3)^2+(y+1)^2=36', '(x-3)2+(y+1)2=36'], answer: '(x-3)^2+(y+1)^2=36', explanation: 'Substitute a=3, b=−1, r=6 into (x−a)²+(y−b)²=r².\n(x−3)²+(y−(−1))²=6²\n(x−3)²+(y+1)²=36 ✓' },
        { difficulty: 'Easy', question: 'Find the centre and radius of (x+4)²+(y−6)²=100.', checkMode: 'auto', correctAnswer: '(-4, 6)', correctAnswers: ['(-4, 6)', '(-4,6)', '(−4, 6)', '(−4,6)'], answer: 'Centre = (-4, 6), radius = 10', explanation: 'Change the signs inside the brackets: centre = (−4, 6). r²=100 → r=10 ✓' },
        { difficulty: 'Medium', question: 'Verify that A(5, 7) lies on the circle (x−2)²+(y−3)²=25. What is the value of (5−2)²+(7−3)²?', checkMode: 'auto', correctAnswer: '25', answer: '25', explanation: '(5−2)²+(7−3)²=3²+4²=9+16=25=r² ✓\nA(5, 7) satisfies the equation and therefore lies on the circle.' },

        // Block 2 — Completing the square to find centre and radius
        { difficulty: 'Easy', question: 'Find the centre and radius of x²+y²−6x+2y−15=0 by completing the square.', answer: '(x²−6x+9)+(y²+2y+1)=15+9+1\n(x−3)²+(y+1)²=25\nCentre=(3, −1), radius=5', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A circle has equation x²+y²+4x−8y−5=0. Find its centre and radius by completing the square.', answer: '(x²+4x+4)+(y²−8y+16)=5+4+16\n(x+2)²+(y−4)²=25\nCentre=(−2, 4), radius=5', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Find the centre and radius of x²+y²−2x−4y−20=0 by completing the square.', answer: '(x²−2x+1)+(y²−4y+4)=20+1+4\n(x−1)²+(y−2)²=25\nCentre=(1, 2), radius=5', checkMode: 'self' },

        // Block 3 — Tangent to a circle at a given point
        { difficulty: 'Medium', question: 'For the circle (x−1)²+(y−2)²=169 with centre O(1, 2), find the gradient of the radius OA where A(6, 14).', checkMode: 'auto', correctAnswer: '12/5', correctAnswers: ['12/5', '2.4'], answer: '12/5', explanation: 'm = (14−2)/(6−1) = 12/5 ✓' },
        { difficulty: 'Hard', question: 'For the circle (x−1)²+(y−2)²=169, find the gradient of the tangent at the point A(6, 14), given that the radius OA has gradient 12/5.', checkMode: 'auto', correctAnswer: '-5/12', correctAnswers: ['-5/12', '−5/12'], answer: '-5/12', explanation: 'Tangent gradient is the negative reciprocal of the radius gradient: m = −1 ÷ (12/5) = −5/12 ✓' },
        { difficulty: 'Hard', question: 'Find the equation of the tangent to the circle (x−1)²+(y−2)²=169 at the point A(6, 14), given that the tangent gradient at A is −5/12.', answer: 'y − 14 = −5/12(x − 6)\n12y − 168 = −5x + 30\n5x + 12y = 198', checkMode: 'self' },

        // Block 4 — Distance to centre / tangent length from an external point
        { difficulty: 'Easy', question: 'Find the distance from external point P(8, 11) to the centre (3, −1) of the circle (x−3)²+(y+1)²=25.', checkMode: 'auto', correctAnswer: '13', answer: '13', explanation: 'd = √[(8−3)²+(11−(−1))²] = √[25+144] = √169 = 13 ✓' },
        { difficulty: 'Medium', question: 'The circle (x−3)²+(y+1)²=25 has centre (3, −1) and radius 5. The distance from external point P(8, 11) to the centre is 13. Calculate the length of the tangent from P to the circle.', checkMode: 'auto', correctAnswer: '12', answer: '12', explanation: 'Tangent length = √(d²−r²) = √(169−25) = √144 = 12 ✓' },
        { difficulty: 'Hard', question: 'Points are plotted on the Cartesian plane: the circle (x−3)²+(y+1)²=25 with centre O(3, −1), and an external point P(8, 11) with tangent length 12 to the circle. Explain, using Pythagoras, why tangent length = √(d²−r²), where d is the distance OP and r is the radius.', answer: 'The radius to the point of tangency is perpendicular to the tangent line, so triangle formed by O, P and the point of tangency T is right-angled at T. By Pythagoras, OP² = OT² + PT², so d² = r² + (tangent length)², giving tangent length = √(d²−r²).', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 210 176" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><circle cx="60" cy="150" r="90" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><line x1="60" y1="150" x2="60" y2="60" stroke="#0f1f3d" stroke-width="1.5" /><line x1="60" y1="60" x2="168" y2="60" stroke="#0f1f3d" stroke-width="1.5" /><line x1="60" y1="150" x2="168" y2="60" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4 3" /><rect x="60" y="60" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.2" /><circle cx="60" cy="150" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="60" cy="60" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="168" cy="60" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="52" y="166" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">O(3, -1)</text><text x="52" y="54" fill="#374151" font-weight="700" font-size="11" text-anchor="end">T</text><text x="176" y="54" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(8, 11)</text><text x="50" y="109" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">r = 5</text><text x="114" y="54" fill="#2563eb" font-weight="700" font-size="11" text-anchor="middle">PT = 12</text><text x="126" y="107" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">OP = 13</text></svg>` },

        // Block 5 — Circle from diameter endpoints / chord midpoint perpendicularity
        { difficulty: 'Medium', question: 'A circle has diameter endpoints at A(−1, 3) and B(7, 9). Find the centre of the circle.', checkMode: 'auto', correctAnswer: '(3, 6)', correctAnswers: ['(3, 6)', '(3,6)', '3, 6'], answer: '(3, 6)', explanation: 'Centre = midpoint of AB = ((−1+7)/2, (3+9)/2) = (3, 6) ✓' },
        { difficulty: 'Medium', question: 'A circle has diameter endpoints at A(−1, 3) and B(7, 9), giving centre (3, 6). Find the radius and equation of the circle.', answer: 'Radius = ½×|AB| = ½×√[(7−(−1))²+(9−3)²] = ½×√100 = 5\nEquation: (x−3)²+(y−6)²=25', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A circle has centre O(3, −1) and radius 5. Points C(6, 3) and D(−1, 2) both lie on the circle. Find the midpoint M of chord CD.', checkMode: 'auto', correctAnswer: '(2.5, 2.5)', correctAnswers: ['(2.5, 2.5)', '(5/2, 5/2)', '2.5, 2.5'], answer: '(2.5, 2.5)', explanation: 'M = ((6+(−1))/2, (3+2)/2) = (5/2, 5/2) = (2.5, 2.5) ✓' },
        { difficulty: 'Hard', question: 'A circle has centre O(3, −1) and radius 5, with chord CD where C(6, 3) and D(−1, 2), midpoint M(2.5, 2.5). Verify that OM is perpendicular to CD.', answer: 'Gradient CD = (2−3)/(−1−6) = −1/−7 = 1/7\nGradient OM = (2.5−(−1))/(2.5−3) = 3.5/(−0.5) = −7\nProduct = (1/7)×(−7) = −1 ✓ OM⊥CD confirmed.', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><circle cx="100" cy="60" r="70" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><line x1="46" y1="105" x2="154" y2="105" stroke="#0f1f3d" stroke-width="1.5" /><line x1="100" y1="60" x2="100" y2="105" stroke="#0f1f3d" stroke-width="1.5" /><rect x="90" y="95" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.2" /><circle cx="100" cy="60" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="46" cy="105" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="154" cy="105" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="100" cy="105" r="3" fill="#ea580c" stroke="#0f1f3d" stroke-width="1" /><text x="108" y="52" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">O(3, -1)</text><text x="38" y="121" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">C(6, 3)</text><text x="162" y="121" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">D(-1, 2)</text><text x="110" y="119" fill="#ea580c" font-weight="700" font-size="11" text-anchor="start">M(2.5, 2.5)</text><text x="110" y="84.5" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">OM</text><text x="133" y="66" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">r = 5</text></svg>` },

        // Block 6 — Mixed hard combination
        { difficulty: 'Hard', question: 'A circle has equation x²+y²=18. Show that the line y=x+6 is a tangent to this circle, and find the point of tangency.', answer: 'Substitute y=x+6: x²+(x+6)²=18 → x²+x²+12x+36=18 → 2x²+12x+18=0 → x²+6x+9=0 → (x+3)²=0.\nRepeated root x=−3 confirms tangency. y=−3+6=3. Point of tangency: (−3, 3).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho says any line with gradient −5/12 passing through a point on (x−1)²+(y−2)²=169 is a tangent to the circle. Is he correct? Explain.', answer: 'No. A gradient of −5/12 works as a tangent gradient only at the specific points on the circle where the radius gradient is 12/5 — namely at (6, 14) and the diametrically opposite point (−4, −10). At any other point on the circle the radius has a different gradient, so the tangent gradient is different.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato says a circle of radius 5 always has a larger circumference than a circle of radius 4, no matter where the two circles are centred. Is she correct? Explain.', answer: 'Yes. Circumference = 2πr, so circumference increases directly as radius increases. A circle of radius 5 has circumference 10π, which is always larger than 8π (the circumference of a circle of radius 4), regardless of where either circle is centred.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A circle has equation x²+y²−4x+6y−23=0. Answer the following.', answer: '', checkMode: 'auto', parts: [
          { label: 'Centre:', correctAnswer: '(2, -3)', correctAnswers: ['(2,-3)', '(2, -3)', '(2, −3)', '(2,−3)'], explanation: 'Complete the square: (x²−4x+4)+(y²+6y+9)=23+4+9 → (x−2)²+(y+3)²=36. Centre = (2, −3).' },
          { label: 'Radius:', correctAnswer: '6', explanation: 'r²=36 → r=6' },
        ] },
      ],
      scoreMessages: [
        { minScore: 17, message: 'Outstanding! You have mastered circle equations, tangents and combination problems. Excellent work!' },
        { minScore: 13, message: 'Great work! Review any missed questions on tangent equations or the mixed combination problems and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples on completing the square and finding tangent lines, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Standard circle equation
        { difficulty: 'Easy', question: 'Write the equation of the circle with centre (−2, 4) and radius 7.', checkMode: 'auto', correctAnswer: '(x+2)^2+(y-4)^2=49', correctAnswers: ['(x+2)^2+(y-4)^2=49', '(x+2)2+(y-4)2=49'], answer: '(x+2)^2+(y-4)^2=49', explanation: 'Substitute a=−2, b=4, r=7 into (x−a)²+(y−b)²=r².\n(x−(−2))²+(y−4)²=7²\n(x+2)²+(y−4)²=49 ✓' },
        { difficulty: 'Easy', question: 'Find the centre and radius of (x−7)²+(y+2)²=81.', checkMode: 'auto', correctAnswer: '(7, -2)', correctAnswers: ['(7, -2)', '(7,-2)', '(7, −2)', '(7,−2)'], answer: 'Centre = (7, -2), radius = 9', explanation: 'Change the signs inside the brackets: centre = (7, −2). r²=81 → r=9 ✓' },
        { difficulty: 'Medium', question: 'Verify that A(2, 6) lies on the circle (x+1)²+(y−2)²=25. What is the value of (2+1)²+(6−2)²?', checkMode: 'auto', correctAnswer: '25', answer: '25', explanation: '(2+1)²+(6−2)²=3²+4²=9+16=25=r² ✓\nA(2, 6) satisfies the equation and therefore lies on the circle.' },

        // Block 2 — Completing the square to find centre and radius
        { difficulty: 'Easy', question: 'Find the centre and radius of x²+y²−8x−4y−16=0 by completing the square.', answer: '(x²−8x+16)+(y²−4y+4)=16+16+4\n(x−4)²+(y−2)²=36\nCentre=(4, 2), radius=6', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A circle has equation x²+y²+6x−10y−2=0. Find its centre and radius by completing the square.', answer: '(x²+6x+9)+(y²−10y+25)=2+9+25\n(x+3)²+(y−5)²=36\nCentre=(−3, 5), radius=6', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Find the centre and radius of x²+y²−4x+8y−29=0 by completing the square.', answer: '(x²−4x+4)+(y²+8y+16)=29+4+16\n(x−2)²+(y+4)²=49\nCentre=(2, −4), radius=7', checkMode: 'self' },

        // Block 3 — Tangent to a circle at a given point
        { difficulty: 'Medium', question: 'For the circle (x−2)²+(y+1)²=169 with centre O(2, −1), find the gradient of the radius OA where A(14, 4).', checkMode: 'auto', correctAnswer: '5/12', correctAnswers: ['5/12'], answer: '5/12', explanation: 'm = (4−(−1))/(14−2) = 5/12 ✓' },
        { difficulty: 'Hard', question: 'For the circle (x−2)²+(y+1)²=169, find the gradient of the tangent at the point A(14, 4), given that the radius OA has gradient 5/12.', checkMode: 'auto', correctAnswer: '-12/5', correctAnswers: ['-12/5', '−12/5', '-2.4'], answer: '-12/5', explanation: 'Tangent gradient is the negative reciprocal of the radius gradient: m = −1 ÷ (5/12) = −12/5 ✓' },
        { difficulty: 'Hard', question: 'Find the equation of the tangent to the circle (x−2)²+(y+1)²=169 at the point A(14, 4), given that the tangent gradient at A is −12/5.', answer: 'y − 4 = −12/5(x − 14)\n5y − 20 = −12x + 168\n12x + 5y = 188', checkMode: 'self' },

        // Block 4 — Distance to centre / tangent length from an external point
        { difficulty: 'Easy', question: 'Find the distance from external point P(3, 16) to the centre (−2, 4) of the circle (x+2)²+(y−4)²=25.', checkMode: 'auto', correctAnswer: '13', answer: '13', explanation: 'd = √[(3−(−2))²+(16−4)²] = √[25+144] = √169 = 13 ✓' },
        { difficulty: 'Medium', question: 'The circle (x+2)²+(y−4)²=25 has centre (−2, 4) and radius 5. The distance from external point P(3, 16) to the centre is 13. Calculate the length of the tangent from P to the circle.', checkMode: 'auto', correctAnswer: '12', answer: '12', explanation: 'Tangent length = √(d²−r²) = √(169−25) = √144 = 12 ✓' },
        { difficulty: 'Hard', question: 'Points are plotted on the Cartesian plane: the circle (x+2)²+(y−4)²=25 with centre O(−2, 4), and an external point P(3, 16) with tangent length 12 to the circle. Explain, using Pythagoras, why tangent length = √(d²−r²), where d is the distance OP and r is the radius.', answer: 'The radius to the point of tangency is perpendicular to the tangent line, so triangle formed by O, P and the point of tangency T is right-angled at T. By Pythagoras, OP² = OT² + PT², so d² = r² + (tangent length)², giving tangent length = √(d²−r²).', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 210 176" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><circle cx="60" cy="150" r="90" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><line x1="60" y1="150" x2="60" y2="60" stroke="#0f1f3d" stroke-width="1.5" /><line x1="60" y1="60" x2="168" y2="60" stroke="#0f1f3d" stroke-width="1.5" /><line x1="60" y1="150" x2="168" y2="60" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4 3" /><rect x="60" y="60" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.2" /><circle cx="60" cy="150" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="60" cy="60" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="168" cy="60" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="52" y="166" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">O(-2, 4)</text><text x="52" y="54" fill="#374151" font-weight="700" font-size="11" text-anchor="end">T</text><text x="176" y="54" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(3, 16)</text><text x="50" y="109" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">r = 5</text><text x="114" y="54" fill="#2563eb" font-weight="700" font-size="11" text-anchor="middle">PT = 12</text><text x="126" y="107" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">OP = 13</text></svg>` },

        // Block 5 — Circle from diameter endpoints / chord midpoint perpendicularity
        { difficulty: 'Medium', question: 'A circle has diameter endpoints at A(2, 5) and B(8, −3). Find the centre of the circle.', checkMode: 'auto', correctAnswer: '(5, 1)', correctAnswers: ['(5, 1)', '(5,1)', '5, 1'], answer: '(5, 1)', explanation: 'Centre = midpoint of AB = ((2+8)/2, (5+(−3))/2) = (5, 1) ✓' },
        { difficulty: 'Medium', question: 'A circle has diameter endpoints at A(2, 5) and B(8, −3), giving centre (5, 1). Find the radius and equation of the circle.', answer: 'Radius = ½×|AB| = ½×√[(8−2)²+(−3−5)²] = ½×√100 = 5\nEquation: (x−5)²+(y−1)²=25', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A circle has centre O(−2, 4) and radius 5. Points C(1, 8) and D(−6, 7) both lie on the circle. Find the midpoint M of chord CD.', checkMode: 'auto', correctAnswer: '(-2.5, 7.5)', correctAnswers: ['(-2.5, 7.5)', '(-5/2, 15/2)', '-2.5, 7.5'], answer: '(-2.5, 7.5)', explanation: 'M = ((1+(−6))/2, (8+7)/2) = (−5/2, 15/2) = (−2.5, 7.5) ✓' },
        { difficulty: 'Hard', question: 'A circle has centre O(−2, 4) and radius 5, with chord CD where C(1, 8) and D(−6, 7), midpoint M(−2.5, 7.5). Verify that OM is perpendicular to CD.', answer: 'Gradient CD = (7−8)/(−6−1) = −1/−7 = 1/7\nGradient OM = (7.5−4)/(−2.5−(−2)) = 3.5/(−0.5) = −7\nProduct = (1/7)×(−7) = −1 ✓ OM⊥CD confirmed.', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><circle cx="100" cy="60" r="70" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><line x1="46" y1="105" x2="154" y2="105" stroke="#0f1f3d" stroke-width="1.5" /><line x1="100" y1="60" x2="100" y2="105" stroke="#0f1f3d" stroke-width="1.5" /><rect x="90" y="95" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.2" /><circle cx="100" cy="60" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="46" cy="105" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="154" cy="105" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="100" cy="105" r="3" fill="#ea580c" stroke="#0f1f3d" stroke-width="1" /><text x="108" y="52" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">O(-2, 4)</text><text x="38" y="121" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">C(1, 8)</text><text x="162" y="121" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">D(-6, 7)</text><text x="110" y="119" fill="#ea580c" font-weight="700" font-size="11" text-anchor="start">M(-2.5, 7.5)</text><text x="110" y="84.5" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">OM</text><text x="133" y="66" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">r = 5</text></svg>` },

        // Block 6 — Mixed hard combination
        { difficulty: 'Hard', question: 'A circle has equation x²+y²=8. Show that the line y=x+4 is a tangent to this circle, and find the point of tangency.', answer: 'Substitute y=x+4: x²+(x+4)²=8 → x²+x²+8x+16=8 → 2x²+8x+8=0 → x²+4x+4=0 → (x+2)²=0.\nRepeated root x=−2 confirms tangency. y=−2+4=2. Point of tangency: (−2, 2).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho says any line with gradient −12/5 passing through a point on (x−2)²+(y+1)²=169 is a tangent to the circle. Is he correct? Explain.', answer: 'No. A gradient of −12/5 works as a tangent gradient only at the specific points on the circle where the radius gradient is 5/12 — namely at (14, 4) and the diametrically opposite point (−10, −6). At any other point on the circle the radius has a different gradient, so the tangent gradient is different.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato says a circle of radius 6 always has a larger circumference than a circle of radius 5, no matter where the two circles are centred. Is she correct? Explain.', answer: 'Yes. Circumference = 2πr, so circumference increases directly as radius increases. A circle of radius 6 has circumference 12π, which is always larger than 10π (the circumference of a circle of radius 5), regardless of where either circle is centred.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A circle has equation x²+y²+2x+8y−32=0. Answer the following.', answer: '', checkMode: 'auto', parts: [
          { label: 'Centre:', correctAnswer: '(-1, -4)', correctAnswers: ['(-1,-4)', '(-1, -4)', '(−1, −4)', '(−1,−4)'], explanation: 'Complete the square: (x²+2x+1)+(y²+8y+16)=32+1+16 → (x+1)²+(y+4)²=49. Centre = (−1, −4).' },
          { label: 'Radius:', correctAnswer: '7', explanation: 'r²=49 → r=7' },
        ] },
      ],
      scoreMessages: [
        { minScore: 17, message: 'Outstanding! You have mastered circle equations, tangents and combination problems. Excellent work!' },
        { minScore: 13, message: 'Great work! Review any missed questions on tangent equations or the mixed combination problems and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples on completing the square and finding tangent lines, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Standard circle equation
        { difficulty: 'Easy', question: 'Write the equation of the circle with centre (5, −3) and radius 9.', checkMode: 'auto', correctAnswer: '(x-5)^2+(y+3)^2=81', correctAnswers: ['(x-5)^2+(y+3)^2=81', '(x-5)2+(y+3)2=81'], answer: '(x-5)^2+(y+3)^2=81', explanation: 'Substitute a=5, b=−3, r=9 into (x−a)²+(y−b)²=r².\n(x−5)²+(y−(−3))²=9²\n(x−5)²+(y+3)²=81 ✓' },
        { difficulty: 'Easy', question: 'Find the centre and radius of (x+1)²+(y−9)²=144.', checkMode: 'auto', correctAnswer: '(-1, 9)', correctAnswers: ['(-1, 9)', '(-1,9)', '(−1, 9)', '(−1,9)'], answer: 'Centre = (-1, 9), radius = 12', explanation: 'Change the signs inside the brackets: centre = (−1, 9). r²=144 → r=12 ✓' },
        { difficulty: 'Medium', question: 'Verify that A(7, 2) lies on the circle (x−4)²+(y+2)²=25. What is the value of (7−4)²+(2+2)²?', checkMode: 'auto', correctAnswer: '25', answer: '25', explanation: '(7−4)²+(2+2)²=3²+4²=9+16=25=r² ✓\nA(7, 2) satisfies the equation and therefore lies on the circle.' },

        // Block 2 — Completing the square to find centre and radius
        { difficulty: 'Easy', question: 'Find the centre and radius of x²+y²−10x−2y+10=0 by completing the square.', answer: '(x²−10x+25)+(y²−2y+1)=−10+25+1\n(x−5)²+(y−1)²=16\nCentre=(5, 1), radius=4', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A circle has equation x²+y²+8x+4y−16=0. Find its centre and radius by completing the square.', answer: '(x²+8x+16)+(y²+4y+4)=16+16+4\n(x+4)²+(y+2)²=36\nCentre=(−4, −2), radius=6', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Find the centre and radius of x²+y²−6y−16=0 by completing the square.', answer: '(x²)+(y²−6y+9)=16+9\n(x−0)²+(y−3)²=25\nCentre=(0, 3), radius=5', checkMode: 'self' },

        // Block 3 — Tangent to a circle at a given point
        { difficulty: 'Medium', question: 'For the circle (x+3)²+(y−4)²=169 with centre O(−3, 4), find the gradient of the radius OA where A(2, 16).', checkMode: 'auto', correctAnswer: '12/5', correctAnswers: ['12/5', '2.4'], answer: '12/5', explanation: 'm = (16−4)/(2−(−3)) = 12/5 ✓' },
        { difficulty: 'Hard', question: 'For the circle (x+3)²+(y−4)²=169, find the gradient of the tangent at the point A(2, 16), given that the radius OA has gradient 12/5.', checkMode: 'auto', correctAnswer: '-5/12', correctAnswers: ['-5/12', '−5/12'], answer: '-5/12', explanation: 'Tangent gradient is the negative reciprocal of the radius gradient: m = −1 ÷ (12/5) = −5/12 ✓' },
        { difficulty: 'Hard', question: 'Find the equation of the tangent to the circle (x+3)²+(y−4)²=169 at the point A(2, 16), given that the tangent gradient at A is −5/12.', answer: 'y − 16 = −5/12(x − 2)\n12y − 192 = −5x + 10\n5x + 12y = 202', checkMode: 'self' },

        // Block 4 — Distance to centre / tangent length from an external point
        { difficulty: 'Easy', question: 'Find the distance from external point P(6, 14) to the centre (1, 2) of the circle (x−1)²+(y−2)²=25.', checkMode: 'auto', correctAnswer: '13', answer: '13', explanation: 'd = √[(6−1)²+(14−2)²] = √[25+144] = √169 = 13 ✓' },
        { difficulty: 'Medium', question: 'The circle (x−1)²+(y−2)²=25 has centre (1, 2) and radius 5. The distance from external point P(6, 14) to the centre is 13. Calculate the length of the tangent from P to the circle.', checkMode: 'auto', correctAnswer: '12', answer: '12', explanation: 'Tangent length = √(d²−r²) = √(169−25) = √144 = 12 ✓' },
        { difficulty: 'Hard', question: 'Points are plotted on the Cartesian plane: the circle (x−1)²+(y−2)²=25 with centre O(1, 2), and an external point P(6, 14) with tangent length 12 to the circle. Explain, using Pythagoras, why tangent length = √(d²−r²), where d is the distance OP and r is the radius.', answer: 'The radius to the point of tangency is perpendicular to the tangent line, so triangle formed by O, P and the point of tangency T is right-angled at T. By Pythagoras, OP² = OT² + PT², so d² = r² + (tangent length)², giving tangent length = √(d²−r²).', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 210 176" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><circle cx="60" cy="150" r="90" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><line x1="60" y1="150" x2="60" y2="60" stroke="#0f1f3d" stroke-width="1.5" /><line x1="60" y1="60" x2="168" y2="60" stroke="#0f1f3d" stroke-width="1.5" /><line x1="60" y1="150" x2="168" y2="60" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4 3" /><rect x="60" y="60" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.2" /><circle cx="60" cy="150" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="60" cy="60" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="168" cy="60" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="52" y="166" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">O(1, 2)</text><text x="52" y="54" fill="#374151" font-weight="700" font-size="11" text-anchor="end">T</text><text x="176" y="54" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(6, 14)</text><text x="50" y="109" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">r = 5</text><text x="114" y="54" fill="#2563eb" font-weight="700" font-size="11" text-anchor="middle">PT = 12</text><text x="126" y="107" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">OP = 13</text></svg>` },

        // Block 5 — Circle from diameter endpoints / chord midpoint perpendicularity
        { difficulty: 'Medium', question: 'A circle has diameter endpoints at A(1, −2) and B(9, 4). Find the centre of the circle.', checkMode: 'auto', correctAnswer: '(5, 1)', correctAnswers: ['(5, 1)', '(5,1)', '5, 1'], answer: '(5, 1)', explanation: 'Centre = midpoint of AB = ((1+9)/2, (−2+4)/2) = (5, 1) ✓' },
        { difficulty: 'Medium', question: 'A circle has diameter endpoints at A(1, −2) and B(9, 4), giving centre (5, 1). Find the radius and equation of the circle.', answer: 'Radius = ½×|AB| = ½×√[(9−1)²+(4−(−2))²] = ½×√100 = 5\nEquation: (x−5)²+(y−1)²=25', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A circle has centre O(1, 2) and radius 5. Points C(4, 6) and D(−3, 5) both lie on the circle. Find the midpoint M of chord CD.', checkMode: 'auto', correctAnswer: '(0.5, 5.5)', correctAnswers: ['(0.5, 5.5)', '(1/2, 11/2)', '0.5, 5.5'], answer: '(0.5, 5.5)', explanation: 'M = ((4+(−3))/2, (6+5)/2) = (1/2, 11/2) = (0.5, 5.5) ✓' },
        { difficulty: 'Hard', question: 'A circle has centre O(1, 2) and radius 5, with chord CD where C(4, 6) and D(−3, 5), midpoint M(0.5, 5.5). Verify that OM is perpendicular to CD.', answer: 'Gradient CD = (5−6)/(−3−4) = −1/−7 = 1/7\nGradient OM = (5.5−2)/(0.5−1) = 3.5/(−0.5) = −7\nProduct = (1/7)×(−7) = −1 ✓ OM⊥CD confirmed.', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><circle cx="100" cy="60" r="70" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><line x1="46" y1="105" x2="154" y2="105" stroke="#0f1f3d" stroke-width="1.5" /><line x1="100" y1="60" x2="100" y2="105" stroke="#0f1f3d" stroke-width="1.5" /><rect x="90" y="95" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.2" /><circle cx="100" cy="60" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="46" cy="105" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="154" cy="105" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="100" cy="105" r="3" fill="#ea580c" stroke="#0f1f3d" stroke-width="1" /><text x="108" y="52" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">O(1, 2)</text><text x="38" y="121" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">C(4, 6)</text><text x="162" y="121" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">D(-3, 5)</text><text x="110" y="119" fill="#ea580c" font-weight="700" font-size="11" text-anchor="start">M(0.5, 5.5)</text><text x="110" y="84.5" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">OM</text><text x="133" y="66" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">r = 5</text></svg>` },

        // Block 6 — Mixed hard combination
        { difficulty: 'Hard', question: 'A circle has equation x²+y²=32. Show that the line y=x+8 is a tangent to this circle, and find the point of tangency.', answer: 'Substitute y=x+8: x²+(x+8)²=32 → x²+x²+16x+64=32 → 2x²+16x+32=0 → x²+8x+16=0 → (x+4)²=0.\nRepeated root x=−4 confirms tangency. y=−4+8=4. Point of tangency: (−4, 4).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho says any line with gradient −5/12 passing through a point on (x+3)²+(y−4)²=169 is a tangent to the circle. Is he correct? Explain.', answer: 'No. A gradient of −5/12 works as a tangent gradient only at the specific points on the circle where the radius gradient is 12/5 — namely at (2, 16) and the diametrically opposite point (−8, −8). At any other point on the circle the radius has a different gradient, so the tangent gradient is different.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato says a circle of radius 8 always has a larger circumference than a circle of radius 6, no matter where the two circles are centred. Is she correct? Explain.', answer: 'Yes. Circumference = 2πr, so circumference increases directly as radius increases. A circle of radius 8 has circumference 16π, which is always larger than 12π (the circumference of a circle of radius 6), regardless of where either circle is centred.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A circle has equation x²+y²−12x+4y−24=0. Answer the following.', answer: '', checkMode: 'auto', parts: [
          { label: 'Centre:', correctAnswer: '(6, -2)', correctAnswers: ['(6,-2)', '(6, -2)', '(6, −2)', '(6,−2)'], explanation: 'Complete the square: (x²−12x+36)+(y²+4y+4)=24+36+4 → (x−6)²+(y+2)²=64. Centre = (6, −2).' },
          { label: 'Radius:', correctAnswer: '8', explanation: 'r²=64 → r=8' },
        ] },
      ],
      scoreMessages: [
        { minScore: 17, message: 'Outstanding! You have mastered circle equations, tangents and combination problems. Excellent work!' },
        { minScore: 13, message: 'Great work! Review any missed questions on tangent equations or the mixed combination problems and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples on completing the square and finding tangent lines, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered analytical geometry.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
