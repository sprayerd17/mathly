import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// factored-out coefficient / completed square form / factorised forms → blue   (#2563eb)
// completed square term  / turning point coordinates / LCM            → orange (#ea580c)
// constant adjustment    / max/min value / simplified result           → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebraic Expressions',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — COMPLETING THE SQUARE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'completing-the-square',
      title: 'Completing the Square',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">Completing the square rewrites a quadratic expression <strong>ax²+bx+c</strong> into the form <strong>a(x+p)²+q</strong>, which reveals the turning point of the related parabola directly. The method involves: factoring out <strong>a</strong> from the x² and x terms, then adding and subtracting <strong>(half the coefficient of x)²</strong> inside the bracket to create a perfect square.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('factored-out coefficient')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('completed square term')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('constant adjustment')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Method steps</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Factor out a')} — If a ≠ 1, factor out <em>a</em> from the x² and x terms only. Leave the constant term outside the bracket.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Half and square')} — Take half the coefficient of x inside the bracket, square it, then add and subtract that value inside the bracket.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Simplify')} — Write the first three terms inside the bracket as a perfect square, then collect the ${gr('constant terms')} outside.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Key identity</p>` +
        `<p style="margin:0;color:#1e3a8a;">x²+bx = (x + b/2)² − (b/2)² — adding and subtracting (b/2)² keeps the expression equal while creating the perfect square.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Write x²+6x+5 in completed square form.',
          answer: `${or('(x+3)²')}${gr('−4')}`,
          steps: [
            `Take half of 6 (the x coefficient): <strong>6 ÷ 2 = 3</strong>. Square it: <strong>3² = ${or('9')}</strong>.`,
            `Add and subtract ${or('9')} inside the expression: x²+6x+${or('9')}−${gr('9')}+5.`,
            `The first three terms form a perfect square: ${or('(x+3)²')}. Collect the constants: −${gr('9')}+5 = ${gr('−4')}.`,
            `<strong>Result:</strong> x²+6x+5 = ${or('(x+3)²')}${gr('−4')} ✓`,
          ],
        },
        {
          question: 'Write 2x²−8x+3 in completed square form.',
          answer: `${bl('2')}${or('(x−2)²')}${gr('−5')}`,
          steps: [
            `Factor out ${bl('2')} from the first two terms: ${bl('2')}(x²−4x)+3.`,
            `Inside the bracket: half of −4 is −2; squared is ${or('4')}. Add and subtract: ${bl('2')}(x²−4x+${or('4')}−${or('4')})+3.`,
            `Write as a perfect square and expand the subtracted term outside: ${bl('2')}${or('(x−2)²')}−${bl('2')}×${or('4')}+3.`,
            `Simplify the constants: −${gr('8')}+3 = ${gr('−5')}.`,
            `<strong>Result:</strong> 2x²−8x+3 = ${bl('2')}${or('(x−2)²')}${gr('−5')} ✓`,
          ],
        },
        {
          question: 'Sipho writes x²−10x+30 in completed square form and gets (x−5)²+5. Check his answer.',
          answer: `Sipho is ${gr('correct')}`,
          steps: [
            `Half of −10 is −5. Squared: (−5)² = ${or('25')}.`,
            `Add and subtract: x²−10x+${or('25')}−${gr('25')}+30 = ${or('(x−5)²')}+${gr('5')}.`,
            `His answer is ${or('(x−5)²')}+${gr('5')}, which matches. Sipho is ${gr('correct')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — completed square form, a=1 ─────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Write x²+8x+10 in completed square form.',
          answer: '(x+4)²−6',
          checkMode: 'auto',
          correctAnswer: '(x+4)²−6',
          correctAnswers: ['(x+4)²−6', '(x+4)^2−6', '(x+4)²-6', '(x+4)^2-6'],
          explanation: 'Half of 8 is 4; 4² = 16.\nAdd and subtract 16: x²+8x+16−16+10 = (x+4)²−16+10 = (x+4)²−6 ✓',
        },

        // ── Q2 Medium — completed square form with negative x-term ───────────
        {
          difficulty: 'Medium',
          question: 'Write x²−4x−7 in completed square form.',
          answer: '(x−2)²−11',
          checkMode: 'auto',
          correctAnswer: '(x−2)²−11',
          correctAnswers: ['(x−2)²−11', '(x-2)²-11', '(x−2)^2−11', '(x-2)^2-11'],
          explanation: 'Half of −4 is −2; (−2)² = 4.\nAdd and subtract 4: x²−4x+4−4−7 = (x−2)²−11 ✓',
        },

        // ── Q3 Hard — verify a peer's completed square working ────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho writes 3x²+12x+5 in completed square form and gets 3(x+2)²−7. Check his answer.',
          answer: '3(x²+4x)+5 = 3(x²+4x+4−4)+5 = 3(x+2)²−12+5 = 3(x+2)²−7. He is correct.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how to complete the square for quadratics with a=1 and a≠1, showing each step colour coded" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — FINDING MAXIMUM OR MINIMUM VALUES USING COMPLETING THE SQUARE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'max-min-completing-square',
      title: 'Finding Maximum or Minimum Values Using Completing the Square',
      icon: '⌃',
      explanation:
        `<p style="margin-bottom:16px;">Once a quadratic expression is written in completed square form <strong>a(x+p)²+q</strong>, the <strong>minimum value</strong> (if a&gt;0) or <strong>maximum value</strong> (if a&lt;0) occurs at <strong>x = −p</strong>, giving the minimum/maximum value of <strong>q</strong> itself, since (x+p)² is always ≥ 0.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('completed square form')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('turning point x-value')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('max/min value')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key rules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">a &gt; 0 → Minimum</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">The parabola opens upward. The expression has a <strong>minimum value</strong> of ${gr('q')} at ${or('x = −p')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">The squared term can only add to q, never subtract from it.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">a &lt; 0 → Maximum</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">The parabola opens downward. The expression has a <strong>maximum value</strong> of ${gr('q')} at ${or('x = −p')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">The squared term is multiplied by a negative, so it can only reduce q.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why this works</p>` +
        `<p style="margin:0;color:#1e3a8a;">(x+p)² ≥ 0 always. When a&gt;0: a(x+p)² ≥ 0, so a(x+p)²+q ≥ q — the smallest possible value is q, reached when x = −p. When a&lt;0: a(x+p)² ≤ 0, so the largest possible value is q.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the minimum value of x²+6x+5 using its completed square form (x+3)²−4.',
          answer: `Minimum value is ${gr('−4')}, occurring when ${or('x = −3')}`,
          steps: [
            `The completed square form is ${bl('(x+3)²−4')}.`,
            `Since a = 1 &gt; 0, the parabola opens upward — this is a <strong>minimum</strong>.`,
            `The minimum occurs at ${or('x = −3')} (where the squared term equals zero).`,
            `At ${or('x = −3')}: (−3+3)² − 4 = 0 − 4 = ${gr('−4')}.`,
            `<strong>Result:</strong> Minimum value is ${gr('−4')}, occurring at ${or('x = −3')} ✓`,
          ],
        },
        {
          question: 'I have 12 metres of fencing and want to enclose the largest rectangular area against an existing wall. Let the two equal sides (perpendicular to the wall) be x metres, so the side parallel to the wall is (12−2x) metres. Find the maximum area.',
          answer: `Maximum area = ${gr('18 m²')}, occurring when ${or('x = 3 m')}`,
          steps: [
            `Write the area expression: A = x(12−2x) = 12x−2x².`,
            `Rewrite in standard form: A = −2x²+12x.`,
            `Factor out −2 from both terms: A = ${bl('−2')}(x²−6x).`,
            `Complete the square inside the bracket: half of −6 is −3; squared is ${or('9')}. So A = ${bl('−2')}(x²−6x+${or('9')}−${or('9')}) = ${bl('−2')}${or('(x−3)²')}+${gr('18')}.`,
            `Since a = −2 &lt; 0, this is a <strong>maximum</strong>.`,
            `The maximum occurs at ${or('x = 3')} and the maximum value is ${gr('18 m²')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — minimum value from completing the square ────────────────
        {
          difficulty: 'Easy',
          question: 'Find the minimum value of x²−6x+13.',
          answer: '4',
          checkMode: 'auto',
          correctAnswer: '4',
          explanation: 'Complete the square: x²−6x+9−9+13 = (x−3)²+4.\nSince a=1>0, the minimum value is 4, occurring when x=3 ✓',
        },

        // ── Q5 Medium — maximum value, negative leading coefficient ──────────
        {
          difficulty: 'Medium',
          question: 'Find the maximum value of −x²+4x+1.',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: '−x²+4x+1 = −(x²−4x)+1 = −(x²−4x+4−4)+1 = −(x−2)²+4+1 = −(x−2)²+5.\nSince a=−1<0, the maximum value is 5, occurring when x=2 ✓',
        },

        // ── Q6 Hard — optimisation fencing problem ────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato has 20 m of fencing for a rectangular garden against a wall. Find the dimensions that give the maximum area, and state the maximum area.',
          answer: 'Let perpendicular sides = x. Parallel side = 20−2x.\nArea = x(20−2x) = −2x²+20x = −2(x−5)²+50.\nMaximum area = 50 m² when x = 5 m (so the garden is 5 m by 10 m).',
          checkMode: 'self',
        },

        // ── Q7 Medium — turning point via completing the square ───────────────
        {
          difficulty: 'Medium',
          question: 'Find the turning point of y = x²+10x+21 using completing the square.',
          answer: '(−5, −4)',
          checkMode: 'auto',
          correctAnswer: '(−5,−4)',
          correctAnswers: ['(−5,−4)', '(-5,-4)', '(−5, −4)', '(-5, -4)'],
          explanation: 'x²+10x+21 = (x+5)²−25+21 = (x+5)²−4.\nTurning point: x = −5, y = −4. Coordinates: (−5, −4) ✓',
        },

        // ── Q8 Hard — verify a peer's turning point claim ─────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo says the turning point of y = 2(x−3)²+7 is at (3, 7). Is he correct? Explain.',
          answer: 'Yes — in the form a(x−p)²+q, the turning point is always at (p, q), which here is (3, 7).',
          checkMode: 'self',
        },

        // ── Q8b Hard (problem-solving) — reconstruct equation from turning point + extra point ──
        {
          difficulty: 'Hard',
          question: 'A parabola in the form y = a(x−p)²+q has a maximum value of 20, occurring at x = 3. The parabola also passes through the point (0, 2). Determine the equation of the parabola in the form y = ax²+bx+c.',
          answer: 'y = −2x²+12x+2',
          checkMode: 'auto',
          correctAnswer: '−2x²+12x+2',
          correctAnswers: ['−2x²+12x+2', '-2x²+12x+2', '−2x^2+12x+2', '-2x^2+12x+2', 'y=−2x²+12x+2', 'y = −2x²+12x+2'],
          explanation: 'The turning point is (p, q) = (3, 20), and it is a maximum, so a<0: y = a(x−3)²+20.\nUse the point (0, 2): 2 = a(0−3)²+20 = 9a+20, so 9a = −18 and a = −2 (consistent with a<0).\nSo y = −2(x−3)²+20 = −2(x²−6x+9)+20 = −2x²+12x−18+20 = −2x²+12x+2 ✓',
        },
      ],

      diagramPlaceholder:
        'Parabola sketches side by side: one opening upward (a>0) with minimum at turning point labelled q in green and x-value in orange; one opening downward (a<0) with maximum labelled similarly',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 178" width="100%" style="max-width:400px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="160" y1="20" x2="160" y2="150" stroke="#e2e8f0" stroke-width="1.5"/>` +
        `<text x="85" y="13" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">a &gt; 0 → Minimum</text>` +
        `<line x1="85" y1="22" x2="85" y2="150" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,3"/>` +
        `<line x1="18" y1="128" x2="152" y2="128" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/>` +
        `<polyline points="25,20 35,53 45,80 55,101 65,116 75,125 85,128 95,125 105,116 115,101 125,80 135,53 145,20" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>` +
        `<circle cx="85" cy="128" r="4" fill="#16a34a"/>` +
        `<text x="85" y="144" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">q</text>` +
        `<text x="85" y="164" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">x = −p</text>` +
        `<text x="235" y="13" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">a &lt; 0 → Maximum</text>` +
        `<line x1="235" y1="22" x2="235" y2="150" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,3"/>` +
        `<line x1="168" y1="20" x2="302" y2="20" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/>` +
        `<polyline points="175,128 185,95 195,68 205,47 215,32 225,23 235,20 245,23 255,32 265,47 275,68 285,95 295,128" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>` +
        `<circle cx="235" cy="20" r="4" fill="#16a34a"/>` +
        `<text x="235" y="35" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">q</text>` +
        `<text x="235" y="164" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">x = −p</text>` +
        `</svg>`,

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read the minimum or maximum value and its x-position directly from a completed square form, including an applied fencing word problem" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SIMPLIFYING ALGEBRAIC FRACTIONS WITH BINOMIAL DENOMINATORS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'algebraic-fractions-binomial-denominators',
      title: 'Simplifying Algebraic Fractions with Binomial Denominators',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">To simplify, add or subtract algebraic fractions with <strong>binomial (two-term) denominators</strong>, we <strong>factorise</strong> where possible, find the <strong>LCM</strong> of the denominators, then combine into a single fraction and simplify.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('factorised forms')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('LCM')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('simplified result')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategy</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Factorise')} — Factorise every numerator and denominator fully. Look for common factors, difference of squares, and trinomials.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Find the LCM')} — The LCM of the denominators is the product of all distinct factors. Use it as the common denominator.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Combine and simplify')} — Convert each fraction to the common denominator, add or subtract the numerators, then cancel any common factors.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#b45309;margin-bottom:6px;">Important restriction</p>` +
        `<p style="margin:0;color:#92400e;">Always state the values of x for which the expression is undefined (where any denominator equals zero). These are called <strong>excluded values</strong>. For example, if a denominator is (x+3), state x ≠ −3.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Simplify (x²−9)/(x+3).',
          answer: `${gr('x−3')}`,
          steps: [
            `Factorise the numerator using the difference of squares identity: ${bl('x²−9')} = ${bl('(x−3)(x+3)')}.`,
            `Rewrite the fraction: ${bl('(x−3)(x+3)')}/(x+3).`,
            `Cancel the common factor (x+3): ${gr('x−3')}, where x ≠ −3.`,
            `<strong>Result:</strong> (x²−9)/(x+3) = ${gr('x−3')} ✓`,
          ],
        },
        {
          question: 'Calculate 2/(x+1) + 3/(x−2).',
          answer: `${gr('(5x−1)/[(x+1)(x−2)]')}`,
          steps: [
            `Identify the denominators: (x+1) and (x−2). Both are already fully factorised.`,
            `Find the ${or('LCM')}: ${or('(x+1)(x−2)')}.`,
            `Convert each fraction: 2/(x+1) = 2(x−2)/[${or('(x+1)(x−2)')}] and 3/(x−2) = 3(x+1)/[${or('(x+1)(x−2)')}].`,
            `Add the numerators: [2(x−2)+3(x+1)] / [${or('(x+1)(x−2)')}].`,
            `Expand the numerator: 2x−4+3x+3 = ${gr('5x−1')}.`,
            `<strong>Result:</strong> ${gr('(5x−1)/[(x+1)(x−2)]')}, where x ≠ −1 and x ≠ 2 ✓`,
          ],
        },
        {
          question: 'Simplify (x+4)/(x²−16) − 1/(x−4).',
          answer: `${gr('0')}`,
          steps: [
            `Factorise the denominator of the first fraction using the difference of squares: ${bl('x²−16')} = ${bl('(x−4)(x+4)')}.`,
            `Rewrite: (x+4)/[${bl('(x−4)(x+4)')}] − 1/(x−4).`,
            `Cancel (x+4) from the first fraction: ${bl('1/(x−4)')} − 1/(x−4).`,
            `Both fractions are now identical. Subtract: ${gr('0')}, where x ≠ ±4.`,
            `<strong>Result:</strong> (x+4)/(x²−16) − 1/(x−4) = ${gr('0')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q9 Easy — difference of squares simplification ────────────────────
        {
          difficulty: 'Easy',
          question: 'Simplify (x²−25) / (x+5).',
          answer: 'x−5',
          checkMode: 'auto',
          correctAnswer: 'x−5',
          correctAnswers: ['x−5', 'x-5'],
          explanation: 'Factorise numerator: x²−25 = (x−5)(x+5).\nCancel (x+5): x−5, where x ≠ −5 ✓',
        },

        // ── Q10 Medium — difference of squares simplification ─────────────────
        {
          difficulty: 'Medium',
          question: 'Simplify (x²−49) / (x−7).',
          answer: 'x+7',
          checkMode: 'auto',
          correctAnswer: 'x+7',
          correctAnswers: ['x+7'],
          explanation: 'Factorise numerator: x²−49 = (x−7)(x+7).\nCancel (x−7): x+7, where x ≠ 7 ✓',
        },

        // ── Q11 Hard — addition of fractions showing LCM and working ──────────
        {
          difficulty: 'Hard',
          question: 'Calculate 3/(x+2) + 4/(x−1), showing the LCM and combination steps.',
          answer: 'LCM = (x+2)(x−1).\nCombine: [3(x−1) + 4(x+2)] / [(x+2)(x−1)] = (3x−3+4x+8) / [(x+2)(x−1)] = (7x+5) / [(x+2)(x−1)].',
          checkMode: 'self',
        },

        // ── Q12 Medium — addition requiring factorisation first ───────────────
        {
          difficulty: 'Medium',
          question: 'Simplify (x+3)/(x²−9) + 1/(x−3).',
          answer: '2/(x−3)',
          checkMode: 'auto',
          correctAnswer: '2/(x−3)',
          correctAnswers: ['2/(x−3)', '2/(x-3)'],
          explanation: 'Factorise denominator: x²−9 = (x−3)(x+3).\nFirst fraction: (x+3)/[(x−3)(x+3)] = 1/(x−3).\nAdd: 1/(x−3) + 1/(x−3) = 2/(x−3), where x ≠ ±3 ✓',
        },

        // ── Q13 Hard — verify a peer's subtraction of fractions ───────────────
        {
          difficulty: 'Hard',
          question: 'Amahle simplifies 5/(x−4) − 2/(x+1) and gets (3x+13)/[(x−4)(x+1)]. Check her answer.',
          answer: 'Combine: [5(x+1) − 2(x−4)] / [(x−4)(x+1)] = (5x+5−2x+8) / [(x−4)(x+1)] = (3x+13) / [(x−4)(x+1)]. She is correct.',
          checkMode: 'self',
        },

        // ── Q14 Hard — minimum value via completing the square ────────────────
        {
          difficulty: 'Hard',
          question: 'Find the minimum value of 2x²−12x+25 using completing the square.',
          answer: '7',
          checkMode: 'auto',
          correctAnswer: '7',
          explanation: '2x²−12x+25 = 2(x²−6x)+25 = 2(x²−6x+9−9)+25 = 2(x−3)²−18+25 = 2(x−3)²+7.\nMinimum value is 7 (when x=3) ✓',
        },

        // ── Q15 Hard — optimisation fencing problem ───────────────────────────
        {
          difficulty: 'Hard',
          question: 'A farmer has 40 m of fencing to enclose a rectangular area against a barn wall on one side. Find the maximum possible area.',
          answer: 'Let perpendicular sides = x. Parallel side = 40−2x.\nArea = −2x²+40x = −2(x−10)²+200.\nMaximum area = 200 m² when x = 10 m.',
          checkMode: 'self',
        },

        // ── Q16 Hard — simplify by factorising trinomial numerator ────────────
        {
          difficulty: 'Hard',
          question: 'Simplify (x²−x−6) / (x−3), fully factorising the numerator first.',
          answer: 'Factorise numerator: x²−x−6 = (x−3)(x+2).\nCancel (x−3): x+2, where x ≠ 3.',
          checkMode: 'self',
        },

        // ── Q17 Hard — addition of fractions over difference of squares ────────
        {
          difficulty: 'Hard',
          question: 'Calculate 1/(x−5) + 1/(x+5), combining over a common denominator.',
          answer: 'LCM = (x−5)(x+5).\nCombine: [(x+5) + (x−5)] / [(x−5)(x+5)] = 2x / (x²−25).',
          checkMode: 'self',
        },

        // ── Q18 Hard — write equation from turning point ──────────────────────
        {
          difficulty: 'Hard',
          question: 'Find the equation of the parabola in completed square form if it has turning point (4, −9) and a = 1.',
          answer: 'y = (x−4)²−9',
          checkMode: 'auto',
          correctAnswer: '(x−4)²−9',
          correctAnswers: ['(x−4)²−9', '(x-4)²-9', '(x−4)^2−9', '(x-4)^2-9', 'y=(x−4)²−9', 'y=(x-4)²-9', 'y = (x−4)²−9'],
          explanation: 'In the form a(x−p)²+q, with turning point (p, q) = (4, −9) and a = 1:\ny = (x−4)²+(−9) = (x−4)²−9 ✓',
        },

        // ── Q19 Hard — conceptual question on universality of CTS ─────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says every quadratic in the form ax²+bx+c can be written in completed square form. Is he correct? Explain.',
          answer: 'Yes — completing the square is a universal algebraic technique that works for any quadratic expression, regardless of whether it can be factorised neatly using whole numbers.',
          checkMode: 'self',
        },

        // ── Q20 Hard — simplify by factorising numerator and denominator ───────
        {
          difficulty: 'Hard',
          question: 'Simplify (2x+6) / (x²+3x) fully.',
          answer: '2/x',
          checkMode: 'auto',
          correctAnswer: '2/x',
          explanation: 'Factorise numerator: 2x+6 = 2(x+3).\nFactorise denominator: x²+3x = x(x+3).\nCancel (x+3): 2/x, where x ≠ 0 and x ≠ −3 ✓',
        },

        // ── Q20b Hard (problem-solving) — work backwards from a combined result to find an unknown parameter ──
        {
          difficulty: 'Hard',
          question: 'The sum 3/(x+2) + k/(x−5) simplifies to (5x−11)/[(x+2)(x−5)]. Determine the value of k.',
          answer: 'k = 2',
          checkMode: 'auto',
          correctAnswer: '2',
          correctAnswers: ['2', 'k=2', 'k = 2'],
          explanation: 'Combine the left side over the common denominator: [3(x−5) + k(x+2)] / [(x+2)(x−5)] = [(3+k)x + (2k−15)] / [(x+2)(x−5)].\nCompare this to the given result (5x−11)/[(x+2)(x−5)]: matching the x-coefficient gives 3+k = 5, so k = 2.\nCheck the constant term: 2(2)−15 = −11, which matches ✓. So k = 2 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to simplify algebraic fractions with binomial denominators: factorising, finding the LCM, combining numerators and cancelling common factors" />',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered algebraic expressions.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-2):   Complete the square, a = 1
    // Block 2 (3-5):   Complete the square, a ≠ 1
    // Block 3 (6-8):   Minimum/maximum value via completing the square
    // Block 4 (9-11):  Turning point / optimisation word problem / peer check
    // Block 5 (12-15): Simplify a single algebraic fraction (binomial denominator)
    // Block 6 (16-19): Add/subtract algebraic fractions with binomial denominators
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Complete the square, a = 1 (Easy/Medium)
        { difficulty: 'Easy', question: 'Write x²+10x+18 in completed square form.', checkMode: 'auto', correctAnswer: '(x+5)²−7', correctAnswers: ['(x+5)²−7', '(x+5)^2−7', '(x+5)²-7', '(x+5)^2-7'], answer: '(x+5)²−7', explanation: 'Half of 10 is 5; 5²=25.\nAdd and subtract 25: x²+10x+25−25+18 = (x+5)²−7 ✓' },
        { difficulty: 'Easy', question: 'Write x²−8x+9 in completed square form.', checkMode: 'auto', correctAnswer: '(x−4)²−7', correctAnswers: ['(x−4)²−7', '(x-4)²-7', '(x−4)^2−7', '(x-4)^2-7'], answer: '(x−4)²−7', explanation: 'Half of −8 is −4; (−4)²=16.\nAdd and subtract 16: x²−8x+16−16+9 = (x−4)²−7 ✓' },
        { difficulty: 'Medium', question: 'Write x²+2x−11 in completed square form.', checkMode: 'auto', correctAnswer: '(x+1)²−12', correctAnswers: ['(x+1)²−12', '(x+1)^2−12', '(x+1)²-12', '(x+1)^2-12'], answer: '(x+1)²−12', explanation: 'Half of 2 is 1; 1²=1.\nAdd and subtract 1: x²+2x+1−1−11 = (x+1)²−12 ✓' },

        // Block 2 — Complete the square, a ≠ 1 (Medium)
        { difficulty: 'Medium', question: 'Write 2x²+8x+5 in completed square form.', checkMode: 'auto', correctAnswer: '2(x+2)²−3', correctAnswers: ['2(x+2)²−3', '2(x+2)^2−3', '2(x+2)²-3', '2(x+2)^2-3'], answer: '2(x+2)²−3', explanation: 'Factor out 2: 2(x²+4x)+5.\nComplete the square inside: half of 4 is 2, 2²=4. 2(x²+4x+4−4)+5 = 2(x+2)²−8+5 = 2(x+2)²−3 ✓' },
        { difficulty: 'Medium', question: 'Write 3x²−12x+7 in completed square form.', checkMode: 'auto', correctAnswer: '3(x−2)²−5', correctAnswers: ['3(x−2)²−5', '3(x-2)²-5', '3(x−2)^2−5', '3(x-2)^2-5'], answer: '3(x−2)²−5', explanation: 'Factor out 3: 3(x²−4x)+7.\nComplete the square inside: half of −4 is −2, (−2)²=4. 3(x²−4x+4−4)+7 = 3(x−2)²−12+7 = 3(x−2)²−5 ✓' },
        { difficulty: 'Medium', question: 'Write −2x²+8x−3 in completed square form.', checkMode: 'auto', correctAnswer: '−2(x−2)²+5', correctAnswers: ['−2(x−2)²+5', '-2(x-2)²+5', '−2(x−2)^2+5', '-2(x-2)^2+5'], answer: '−2(x−2)²+5', explanation: 'Factor out −2: −2(x²−4x)−3.\nComplete the square inside: half of −4 is −2, (−2)²=4. −2(x²−4x+4−4)−3 = −2(x−2)²+8−3 = −2(x−2)²+5 ✓' },

        // Block 3 — Minimum/maximum value via completing the square (Medium/Hard)
        { difficulty: 'Medium', question: 'Find the minimum value of x²−14x+53.', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4'], answer: '4', explanation: 'x²−14x+53 = (x−7)²−49+53 = (x−7)²+4.\nSince a=1>0, minimum value is 4, at x=7 ✓' },
        { difficulty: 'Medium', question: 'Find the maximum value of −x²+4x+2.', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], answer: '6', explanation: '−x²+4x+2 = −(x²−4x)+2 = −(x²−4x+4−4)+2 = −(x−2)²+4+2 = −(x−2)²+6.\nSince a=−1<0, maximum value is 6, at x=2 ✓' },
        { difficulty: 'Hard', question: 'Find the minimum value of 2x²−8x+15.', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], answer: '7', explanation: '2x²−8x+15 = 2(x²−4x)+15 = 2(x²−4x+4−4)+15 = 2(x−2)²−8+15 = 2(x−2)²+7.\nMinimum value is 7, at x=2 ✓' },

        // Block 4 — Turning point / optimisation word problem / peer check (Medium/Hard)
        { difficulty: 'Medium', question: 'Find the turning point of y = x²+8x+9 using completing the square.', checkMode: 'auto', correctAnswer: '(−4,−7)', correctAnswers: ['(−4,−7)', '(-4,-7)', '(−4, −7)', '(-4, -7)'], answer: '(−4, −7)', explanation: 'x²+8x+9 = (x+4)²−16+9 = (x+4)²−7.\nTurning point: x=−4, y=−7. Coordinates: (−4, −7) ✓' },
        { difficulty: 'Hard', question: 'A farmer has 16 m of fencing to enclose a rectangular area against a barn wall on one side. Let the two equal sides (perpendicular to the wall) be x metres. Find the maximum possible area.', answer: 'Let perpendicular sides = x. Parallel side = 16−2x.\nArea = x(16−2x) = −2x²+16x = −2(x−4)²+32.\nMaximum area = 32 m² when x = 4 m.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Zanele says the minimum value of 2(x+3)²−9 is −9, occurring at x=−3. Is she correct? Explain.', answer: 'Yes — in the form a(x+p)²+q with a=2>0, the minimum value is q=−9, occurring where the squared term is zero, i.e. x=−3.', checkMode: 'self' },

        // Block 5 — Simplify a single algebraic fraction (binomial denominator) (Hard)
        { difficulty: 'Hard', question: 'Simplify (x²−36) / (x+6).', checkMode: 'auto', correctAnswer: 'x−6', correctAnswers: ['x−6', 'x-6'], answer: 'x−6', explanation: 'Factorise numerator: x²−36 = (x−6)(x+6).\nCancel (x+6): x−6, where x ≠ −6 ✓' },
        { difficulty: 'Hard', question: 'Simplify (x²−64) / (x−8).', checkMode: 'auto', correctAnswer: 'x+8', correctAnswers: ['x+8'], answer: 'x+8', explanation: 'Factorise numerator: x²−64 = (x−8)(x+8).\nCancel (x−8): x+8, where x ≠ 8 ✓' },
        { difficulty: 'Hard', question: 'Simplify (x²−x−12) / (x−4).', checkMode: 'auto', correctAnswer: 'x+3', correctAnswers: ['x+3'], answer: 'x+3', explanation: 'Factorise numerator: x²−x−12 = (x−4)(x+3).\nCancel (x−4): x+3, where x ≠ 4 ✓' },
        { difficulty: 'Hard', question: 'Simplify (x+5)/(x²−25) − 1/(x−5).', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0'], answer: '0', explanation: 'Factorise: x²−25 = (x−5)(x+5). First fraction becomes (x+5)/[(x−5)(x+5)] = 1/(x−5).\nSubtract: 1/(x−5) − 1/(x−5) = 0, where x ≠ ±5 ✓' },

        // Block 6 — Add/subtract algebraic fractions with binomial denominators (Hard)
        { difficulty: 'Hard', question: 'Calculate 2/(x+3) + 5/(x−1), showing the LCM and combination steps.', answer: 'LCM = (x+3)(x−1).\nCombine: [2(x−1) + 5(x+3)] / [(x+3)(x−1)] = (2x−2+5x+15) / [(x+3)(x−1)] = (7x+13) / [(x+3)(x−1)].', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Calculate 3/(x−2) + 2/(x+4), showing the LCM and combination steps.', answer: 'LCM = (x−2)(x+4).\nCombine: [3(x+4) + 2(x−2)] / [(x−2)(x+4)] = (3x+12+2x−4) / [(x−2)(x+4)] = (5x+8) / [(x−2)(x+4)].', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Simplify (x+6)/(x²−36) + 1/(x−6).', checkMode: 'auto', correctAnswer: '2/(x−6)', correctAnswers: ['2/(x−6)', '2/(x-6)'], answer: '2/(x−6)', explanation: 'Factorise denominator: x²−36 = (x−6)(x+6).\nFirst fraction: (x+6)/[(x−6)(x+6)] = 1/(x−6).\nAdd: 1/(x−6) + 1/(x−6) = 2/(x−6), where x ≠ ±6 ✓' },
        { difficulty: 'Hard', question: 'Sipho simplifies 4/(x−4) − 1/(x+2) and gets (3x+12)/[(x−4)(x+2)]. Check his answer.', answer: 'Combine: [4(x+2) − 1(x−4)] / [(x−4)(x+2)] = (4x+8−x+4) / [(x−4)(x+2)] = (3x+12) / [(x−4)(x+2)]. He is correct.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered completing the square and algebraic fractions.' },
        { minScore: 15, message: 'Great work! Review any missed questions on completing the square or algebraic fractions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on completing the square and simplifying fractions, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Complete the square, a = 1 (Easy/Medium)
        { difficulty: 'Easy', question: 'Write x²+12x+20 in completed square form.', checkMode: 'auto', correctAnswer: '(x+6)²−16', correctAnswers: ['(x+6)²−16', '(x+6)^2−16', '(x+6)²-16', '(x+6)^2-16'], answer: '(x+6)²−16', explanation: 'Half of 12 is 6; 6²=36.\nAdd and subtract 36: x²+12x+36−36+20 = (x+6)²−16 ✓' },
        { difficulty: 'Easy', question: 'Write x²−6x−2 in completed square form.', checkMode: 'auto', correctAnswer: '(x−3)²−11', correctAnswers: ['(x−3)²−11', '(x-3)²-11', '(x−3)^2−11', '(x-3)^2-11'], answer: '(x−3)²−11', explanation: 'Half of −6 is −3; (−3)²=9.\nAdd and subtract 9: x²−6x+9−9−2 = (x−3)²−11 ✓' },
        { difficulty: 'Medium', question: 'Write x²+4x−9 in completed square form.', checkMode: 'auto', correctAnswer: '(x+2)²−13', correctAnswers: ['(x+2)²−13', '(x+2)^2−13', '(x+2)²-13', '(x+2)^2-13'], answer: '(x+2)²−13', explanation: 'Half of 4 is 2; 2²=4.\nAdd and subtract 4: x²+4x+4−4−9 = (x+2)²−13 ✓' },

        // Block 2 — Complete the square, a ≠ 1 (Medium)
        { difficulty: 'Medium', question: 'Write 2x²−12x+13 in completed square form.', checkMode: 'auto', correctAnswer: '2(x−3)²−5', correctAnswers: ['2(x−3)²−5', '2(x-3)²-5', '2(x−3)^2−5', '2(x-3)^2-5'], answer: '2(x−3)²−5', explanation: 'Factor out 2: 2(x²−6x)+13.\nComplete the square inside: half of −6 is −3, (−3)²=9. 2(x²−6x+9−9)+13 = 2(x−3)²−18+13 = 2(x−3)²−5 ✓' },
        { difficulty: 'Medium', question: 'Write 4x²+16x+9 in completed square form.', checkMode: 'auto', correctAnswer: '4(x+2)²−7', correctAnswers: ['4(x+2)²−7', '4(x+2)^2−7', '4(x+2)²-7', '4(x+2)^2-7'], answer: '4(x+2)²−7', explanation: 'Factor out 4: 4(x²+4x)+9.\nComplete the square inside: half of 4 is 2, 2²=4. 4(x²+4x+4−4)+9 = 4(x+2)²−16+9 = 4(x+2)²−7 ✓' },
        { difficulty: 'Medium', question: 'Write −3x²+18x−4 in completed square form.', checkMode: 'auto', correctAnswer: '−3(x−3)²+23', correctAnswers: ['−3(x−3)²+23', '-3(x-3)²+23', '−3(x−3)^2+23', '-3(x-3)^2+23'], answer: '−3(x−3)²+23', explanation: 'Factor out −3: −3(x²−6x)−4.\nComplete the square inside: half of −6 is −3, (−3)²=9. −3(x²−6x+9−9)−4 = −3(x−3)²+27−4 = −3(x−3)²+23 ✓' },

        // Block 3 — Minimum/maximum value via completing the square (Medium/Hard)
        { difficulty: 'Medium', question: 'Find the minimum value of x²−10x+28.', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3'], answer: '3', explanation: 'x²−10x+28 = (x−5)²−25+28 = (x−5)²+3.\nSince a=1>0, minimum value is 3, at x=5 ✓' },
        { difficulty: 'Medium', question: 'Find the maximum value of −x²+6x−1.', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], answer: '8', explanation: '−x²+6x−1 = −(x²−6x)−1 = −(x²−6x+9−9)−1 = −(x−3)²+9−1 = −(x−3)²+8.\nSince a=−1<0, maximum value is 8, at x=3 ✓' },
        { difficulty: 'Hard', question: 'Find the minimum value of 3x²+12x+10.', checkMode: 'auto', correctAnswer: '−2', correctAnswers: ['−2', '-2'], answer: '−2', explanation: '3x²+12x+10 = 3(x²+4x)+10 = 3(x²+4x+4−4)+10 = 3(x+2)²−12+10 = 3(x+2)²−2.\nMinimum value is −2, at x=−2 ✓' },

        // Block 4 — Turning point / optimisation word problem / peer check (Medium/Hard)
        { difficulty: 'Medium', question: 'Find the turning point of y = x²−12x+32 using completing the square.', checkMode: 'auto', correctAnswer: '(6,−4)', correctAnswers: ['(6,−4)', '(6,-4)', '(6, −4)', '(6, -4)'], answer: '(6, −4)', explanation: 'x²−12x+32 = (x−6)²−36+32 = (x−6)²−4.\nTurning point: x=6, y=−4. Coordinates: (6, −4) ✓' },
        { difficulty: 'Hard', question: 'A farmer has 24 m of fencing to enclose a rectangular area against a barn wall on one side. Let the two equal sides (perpendicular to the wall) be x metres. Find the maximum possible area.', answer: 'Let perpendicular sides = x. Parallel side = 24−2x.\nArea = x(24−2x) = −2x²+24x = −2(x−6)²+72.\nMaximum area = 72 m² when x = 6 m.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo says the maximum value of −3(x−1)²+8 is 8, occurring at x=1. Is he correct? Explain.', answer: 'Yes — in the form a(x−p)²+q with a=−3<0, the maximum value is q=8, occurring where the squared term is zero, i.e. x=1.', checkMode: 'self' },

        // Block 5 — Simplify a single algebraic fraction (binomial denominator) (Hard)
        { difficulty: 'Hard', question: 'Simplify (x²−4) / (x−2).', checkMode: 'auto', correctAnswer: 'x+2', correctAnswers: ['x+2'], answer: 'x+2', explanation: 'Factorise numerator: x²−4 = (x−2)(x+2).\nCancel (x−2): x+2, where x ≠ 2 ✓' },
        { difficulty: 'Hard', question: 'Simplify (x²−100) / (x+10).', checkMode: 'auto', correctAnswer: 'x−10', correctAnswers: ['x−10', 'x-10'], answer: 'x−10', explanation: 'Factorise numerator: x²−100 = (x−10)(x+10).\nCancel (x+10): x−10, where x ≠ −10 ✓' },
        { difficulty: 'Hard', question: 'Simplify (x²+x−20) / (x+5).', checkMode: 'auto', correctAnswer: 'x−4', correctAnswers: ['x−4', 'x-4'], answer: 'x−4', explanation: 'Factorise numerator: x²+x−20 = (x+5)(x−4).\nCancel (x+5): x−4, where x ≠ −5 ✓' },
        { difficulty: 'Hard', question: 'Simplify (x+7)/(x²−49) − 1/(x−7).', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0'], answer: '0', explanation: 'Factorise: x²−49 = (x−7)(x+7). First fraction becomes (x+7)/[(x−7)(x+7)] = 1/(x−7).\nSubtract: 1/(x−7) − 1/(x−7) = 0, where x ≠ ±7 ✓' },

        // Block 6 — Add/subtract algebraic fractions with binomial denominators (Hard)
        { difficulty: 'Hard', question: 'Calculate 4/(x+1) + 1/(x−3), showing the LCM and combination steps.', answer: 'LCM = (x+1)(x−3).\nCombine: [4(x−3) + 1(x+1)] / [(x+1)(x−3)] = (4x−12+x+1) / [(x+1)(x−3)] = (5x−11) / [(x+1)(x−3)].', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Calculate 2/(x−5) + 3/(x+2), showing the LCM and combination steps.', answer: 'LCM = (x−5)(x+2).\nCombine: [2(x+2) + 3(x−5)] / [(x−5)(x+2)] = (2x+4+3x−15) / [(x−5)(x+2)] = (5x−11) / [(x−5)(x+2)].', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Simplify (x+4)/(x²−16) + 1/(x−4).', checkMode: 'auto', correctAnswer: '2/(x−4)', correctAnswers: ['2/(x−4)', '2/(x-4)'], answer: '2/(x−4)', explanation: 'Factorise denominator: x²−16 = (x−4)(x+4).\nFirst fraction: (x+4)/[(x−4)(x+4)] = 1/(x−4).\nAdd: 1/(x−4) + 1/(x−4) = 2/(x−4), where x ≠ ±4 ✓' },
        { difficulty: 'Hard', question: 'Amahle simplifies 5/(x−3) − 2/(x+2) and gets (3x+16)/[(x−3)(x+2)]. Check her answer.', answer: 'Combine: [5(x+2) − 2(x−3)] / [(x−3)(x+2)] = (5x+10−2x+6) / [(x−3)(x+2)] = (3x+16) / [(x−3)(x+2)]. She is correct.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered completing the square and algebraic fractions.' },
        { minScore: 15, message: 'Great work! Review any missed questions on completing the square or algebraic fractions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on completing the square and simplifying fractions, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Complete the square, a = 1 (Easy/Medium)
        { difficulty: 'Easy', question: 'Write x²+14x+25 in completed square form.', checkMode: 'auto', correctAnswer: '(x+7)²−24', correctAnswers: ['(x+7)²−24', '(x+7)^2−24', '(x+7)²-24', '(x+7)^2-24'], answer: '(x+7)²−24', explanation: 'Half of 14 is 7; 7²=49.\nAdd and subtract 49: x²+14x+49−49+25 = (x+7)²−24 ✓' },
        { difficulty: 'Easy', question: 'Write x²−10x+3 in completed square form.', checkMode: 'auto', correctAnswer: '(x−5)²−22', correctAnswers: ['(x−5)²−22', '(x-5)²-22', '(x−5)^2−22', '(x-5)^2-22'], answer: '(x−5)²−22', explanation: 'Half of −10 is −5; (−5)²=25.\nAdd and subtract 25: x²−10x+25−25+3 = (x−5)²−22 ✓' },
        { difficulty: 'Medium', question: 'Write x²+6x−17 in completed square form.', checkMode: 'auto', correctAnswer: '(x+3)²−26', correctAnswers: ['(x+3)²−26', '(x+3)^2−26', '(x+3)²-26', '(x+3)^2-26'], answer: '(x+3)²−26', explanation: 'Half of 6 is 3; 3²=9.\nAdd and subtract 9: x²+6x+9−9−17 = (x+3)²−26 ✓' },

        // Block 2 — Complete the square, a ≠ 1 (Medium)
        { difficulty: 'Medium', question: 'Write 2x²−4x−9 in completed square form.', checkMode: 'auto', correctAnswer: '2(x−1)²−11', correctAnswers: ['2(x−1)²−11', '2(x-1)²-11', '2(x−1)^2−11', '2(x-1)^2-11'], answer: '2(x−1)²−11', explanation: 'Factor out 2: 2(x²−2x)−9.\nComplete the square inside: half of −2 is −1, (−1)²=1. 2(x²−2x+1−1)−9 = 2(x−1)²−2−9 = 2(x−1)²−11 ✓' },
        { difficulty: 'Medium', question: 'Write 3x²+6x−1 in completed square form.', checkMode: 'auto', correctAnswer: '3(x+1)²−4', correctAnswers: ['3(x+1)²−4', '3(x+1)^2−4', '3(x+1)²-4', '3(x+1)^2-4'], answer: '3(x+1)²−4', explanation: 'Factor out 3: 3(x²+2x)−1.\nComplete the square inside: half of 2 is 1, 1²=1. 3(x²+2x+1−1)−1 = 3(x+1)²−3−1 = 3(x+1)²−4 ✓' },
        { difficulty: 'Medium', question: 'Write −2x²−8x+1 in completed square form.', checkMode: 'auto', correctAnswer: '−2(x+2)²+9', correctAnswers: ['−2(x+2)²+9', '-2(x+2)²+9', '−2(x+2)^2+9', '-2(x+2)^2+9'], answer: '−2(x+2)²+9', explanation: 'Factor out −2: −2(x²+4x)+1.\nComplete the square inside: half of 4 is 2, 2²=4. −2(x²+4x+4−4)+1 = −2(x+2)²+8+1 = −2(x+2)²+9 ✓' },

        // Block 3 — Minimum/maximum value via completing the square (Medium/Hard)
        { difficulty: 'Medium', question: 'Find the minimum value of x²+4x−3.', checkMode: 'auto', correctAnswer: '−7', correctAnswers: ['−7', '-7'], answer: '−7', explanation: 'x²+4x−3 = (x+2)²−4−3 = (x+2)²−7.\nSince a=1>0, minimum value is −7, at x=−2 ✓' },
        { difficulty: 'Medium', question: 'Find the maximum value of −x²+8x−5.', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11'], answer: '11', explanation: '−x²+8x−5 = −(x²−8x)−5 = −(x²−8x+16−16)−5 = −(x−4)²+16−5 = −(x−4)²+11.\nSince a=−1<0, maximum value is 11, at x=4 ✓' },
        { difficulty: 'Hard', question: 'Find the minimum value of 2x²+4x+9.', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], answer: '7', explanation: '2x²+4x+9 = 2(x²+2x)+9 = 2(x²+2x+1−1)+9 = 2(x+1)²−2+9 = 2(x+1)²+7.\nMinimum value is 7, at x=−1 ✓' },

        // Block 4 — Turning point / optimisation word problem / peer check (Medium/Hard)
        { difficulty: 'Medium', question: 'Find the turning point of y = x²+6x−7 using completing the square.', checkMode: 'auto', correctAnswer: '(−3,−16)', correctAnswers: ['(−3,−16)', '(-3,-16)', '(−3, −16)', '(-3, -16)'], answer: '(−3, −16)', explanation: 'x²+6x−7 = (x+3)²−9−7 = (x+3)²−16.\nTurning point: x=−3, y=−16. Coordinates: (−3, −16) ✓' },
        { difficulty: 'Hard', question: 'A farmer has 32 m of fencing to enclose a rectangular area against a barn wall on one side. Let the two equal sides (perpendicular to the wall) be x metres. Find the maximum possible area.', answer: 'Let perpendicular sides = x. Parallel side = 32−2x.\nArea = x(32−2x) = −2x²+32x = −2(x−8)²+128.\nMaximum area = 128 m² when x = 8 m.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato says every quadratic ax²+bx+c with a≠0 can be completed to the square, regardless of whether b²−4ac is a perfect square. Is she correct? Explain.', answer: 'Yes — completing the square is a purely algebraic process (factor out a, halve and square the coefficient of x) that works for any quadratic, independent of whether it factorises neatly.', checkMode: 'self' },

        // Block 5 — Simplify a single algebraic fraction (binomial denominator) (Hard)
        { difficulty: 'Hard', question: 'Simplify (x²−1) / (x−1).', checkMode: 'auto', correctAnswer: 'x+1', correctAnswers: ['x+1'], answer: 'x+1', explanation: 'Factorise numerator: x²−1 = (x−1)(x+1).\nCancel (x−1): x+1, where x ≠ 1 ✓' },
        { difficulty: 'Hard', question: 'Simplify (x²−81) / (x+9).', checkMode: 'auto', correctAnswer: 'x−9', correctAnswers: ['x−9', 'x-9'], answer: 'x−9', explanation: 'Factorise numerator: x²−81 = (x−9)(x+9).\nCancel (x+9): x−9, where x ≠ −9 ✓' },
        { difficulty: 'Hard', question: 'Simplify (x²−2x−15) / (x−5).', checkMode: 'auto', correctAnswer: 'x+3', correctAnswers: ['x+3'], answer: 'x+3', explanation: 'Factorise numerator: x²−2x−15 = (x−5)(x+3).\nCancel (x−5): x+3, where x ≠ 5 ✓' },
        { difficulty: 'Hard', question: 'Simplify (x+2)/(x²−4) − 1/(x−2).', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0'], answer: '0', explanation: 'Factorise: x²−4 = (x−2)(x+2). First fraction becomes (x+2)/[(x−2)(x+2)] = 1/(x−2).\nSubtract: 1/(x−2) − 1/(x−2) = 0, where x ≠ ±2 ✓' },

        // Block 6 — Add/subtract algebraic fractions with binomial denominators (Hard)
        { difficulty: 'Hard', question: 'Calculate 5/(x+2) + 3/(x−4), showing the LCM and combination steps.', answer: 'LCM = (x+2)(x−4).\nCombine: [5(x−4) + 3(x+2)] / [(x+2)(x−4)] = (5x−20+3x+6) / [(x+2)(x−4)] = (8x−14) / [(x+2)(x−4)].', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Calculate 1/(x−6) + 4/(x+3), showing the LCM and combination steps.', answer: 'LCM = (x−6)(x+3).\nCombine: [1(x+3) + 4(x−6)] / [(x−6)(x+3)] = (x+3+4x−24) / [(x−6)(x+3)] = (5x−21) / [(x−6)(x+3)].', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Simplify (x+8)/(x²−64) + 1/(x−8).', checkMode: 'auto', correctAnswer: '2/(x−8)', correctAnswers: ['2/(x−8)', '2/(x-8)'], answer: '2/(x−8)', explanation: 'Factorise denominator: x²−64 = (x−8)(x+8).\nFirst fraction: (x+8)/[(x−8)(x+8)] = 1/(x−8).\nAdd: 1/(x−8) + 1/(x−8) = 2/(x−8), where x ≠ ±8 ✓' },
        { difficulty: 'Hard', question: 'Bongani simplifies 3/(x+4) − 2/(x−1) and gets (x−11)/[(x+4)(x−1)]. Check his answer.', answer: 'Combine: [3(x−1) − 2(x+4)] / [(x+4)(x−1)] = (3x−3−2x−8) / [(x+4)(x−1)] = (x−11) / [(x+4)(x−1)]. He is correct.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered completing the square and algebraic fractions.' },
        { minScore: 15, message: 'Great work! Review any missed questions on completing the square or algebraic fractions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on completing the square and simplifying fractions, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
