import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (function transformation roles) ─────────────────────────
// original graph        → blue   (#1e40af)
// shifted / transformed → orange (#f59e0b)
// solved parameter      → green  (#16a34a)
const bl = (t: string) => `<span style="color:#1e40af;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#f59e0b;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Functions',
  grade: 11,
  sections: [

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — THE EFFECT OF k AND p ON LINEAR AND QUADRATIC FUNCTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'linear-quadratic-k-p',
      title: 'The Effect of k and p on Linear and Quadratic Functions',
      icon: 'f',
      explanation:
        `<p style="margin-bottom:16px;">We extend Grade 10's work on parameters <em>a</em> and <em>q</em> to now include <strong>k</strong> and <strong>p</strong>, which affect functions <em>horizontally</em>. For y=f(x+p), the parameter <strong>p</strong> shifts the graph horizontally — left if p is positive, right if p is negative. Refer to the diagram below showing ${bl('y=x²')} compared to ${or('y=(x+3)²')}, where the entire parabola shifts left by 3 units, moving the turning point from ${bl('(0,0)')} to ${or('(−3,0)')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original graph')}</span>` +
        `<span style="background:#fffbeb;border:1px solid #fde68a;border-radius:6px;padding:3px 10px;font-size:13px;">${or('shifted graph')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The effect of p on y=f(x+p)</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:4px;">p &gt; 0 (positive)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Graph shifts <strong>left</strong> by p units. The turning point of ${bl('y=x²')} moves to ${or('(−p, 0)')}.</p>` +
        `</div>` +
        `<div style="background:#fffbeb;border:1.5px solid #fde68a;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#d97706;margin-bottom:4px;">p &lt; 0 (negative)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Graph shifts <strong>right</strong> by |p| units. The turning point of ${bl('y=x²')} moves to ${or('(|p|, 0)')}.</p>` +
        `</div>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">The direction is opposite to the sign</p>` +
        `<p style="margin:0;color:#1e3a8a;">A <strong>+3</strong> inside the bracket moves the graph <strong>left</strong>; a <strong>−2</strong> inside moves it <strong>right</strong>. This is because the function evaluates at x+p instead of x — the graph reaches every y-value p units earlier on the x-axis.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Using the diagram, describe how the turning point of y=(x+3)² compares to y=x².',
          answer: `The turning point shifts from ${bl('(0,0)')} to ${or('(−3,0)')} — a horizontal shift of 3 units to the left`,
          steps: [
            `As shown in the diagram, the turning point shifts from ${bl('(0,0)')} to ${or('(−3,0)')} — a horizontal shift of 3 units to the left, matching the ${or('+3')} inside the bracket.`,
          ],
        },
        {
          question: 'Sipho compares y=x² to y=(x−2)². Using the same shifting logic shown in the diagram, describe the transformation.',
          answer: `The graph shifts ${or('2 units to the right')}, with the turning point moving from ${bl('(0,0)')} to ${or('(2,0)')}`,
          steps: [
            `Since p=−2 inside the bracket (written as x−2), the graph shifts ${or('2 units to the right')}, with the turning point moving from ${bl('(0,0)')} to ${or('(2,0)')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining how the parameter p shifts quadratic graphs horizontally, using y=x² and y=(x+3)² as shown in the diagram" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THE EFFECT OF k AND p ON THE HYPERBOLIC FUNCTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'hyperbolic-k-p',
      title: 'The Effect of k and p on the Hyperbolic Function',
      icon: 'f',
      explanation:
        `<p style="margin-bottom:16px;">For the hyperbolic function y=a/(x+p)+q, the parameter <strong>p</strong> shifts the <strong>vertical asymptote</strong> horizontally. Refer to the diagram below comparing ${bl('y=1/x')} to ${or('y=1/(x−2)')}, where the vertical asymptote shifts from ${bl('x=0')} to ${or('x=2')}, while the horizontal asymptote (y=0) stays unchanged.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original asymptote')}</span>` +
        `<span style="background:#fffbeb;border:1px solid #fde68a;border-radius:6px;padding:3px 10px;font-size:13px;">${or('shifted asymptote')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Asymptotes of y=a/(x+p)+q</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:4px;">Vertical asymptote</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">x = −p (the value of x that makes the denominator zero)</p>` +
        `</div>` +
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Horizontal asymptote</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">y = q (unaffected by p — just as shown in the diagram)</p>` +
        `</div>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">p shifts the vertical asymptote, not the horizontal one</p>` +
        `<p style="margin:0;color:#1e3a8a;">The vertical asymptote moves to x = −p, following the same left/right logic as the quadratic: positive p shifts the asymptote left, negative p shifts it right. The horizontal asymptote y=q is determined solely by q and never moves when p changes.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Using the diagram, state the vertical asymptote of y=1/(x−2).',
          answer: `Vertical asymptote: ${or('x=2')}`,
          steps: [
            `As shown in the diagram, the vertical asymptote shifts from ${bl('x=0')} (for y=1/x) to ${or('x=2')}, since p=−2 inside the bracket.`,
          ],
        },
        {
          question: 'Lerato has y=3/(x+4)+1. Find both asymptotes.',
          answer: `Vertical asymptote: ${or('x=−4')} &nbsp;&nbsp; Horizontal asymptote: ${gr('y=1')}`,
          steps: [
            `<strong>Vertical asymptote:</strong> x=−4 (since p=4, shifting ${or('left')}, the same direction shown in the diagram for positive p).`,
            `<strong>Horizontal asymptote:</strong> ${gr('y=1')} (the q value, unaffected by p, just as the diagram's horizontal asymptote y=0 didn't move).`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how the parameter p shifts the vertical asymptote of a hyperbolic function, comparing y=1/x and y=1/(x-2) using the diagram" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THE EFFECT OF k AND p ON THE EXPONENTIAL FUNCTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'exponential-k-p',
      title: 'The Effect of k and p on the Exponential Function',
      icon: 'f',
      explanation:
        `<p style="margin-bottom:16px;">For the exponential function y=a·b^(x+p)+q, the parameter <strong>p</strong> shifts the graph horizontally, while <strong>k</strong> (in y=a·b^(kx)+q) affects how quickly the graph grows. Refer to the diagram below comparing ${bl('y=2ˣ')} to ${or('y=2^(x+2)')} — notice the ${or('orange curve')} reaches any given height much further to the left, since it is effectively 2 steps ahead of the ${bl('blue curve')} at every point.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original graph')}</span>` +
        `<span style="background:#fffbeb;border:1px solid #fde68a;border-radius:6px;padding:3px 10px;font-size:13px;">${or('transformed graph')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The two horizontal parameters: p and k</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:4px;">Parameter p — horizontal shift</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Positive p shifts the graph <strong>left</strong>; negative p shifts it <strong>right</strong>. The horizontal asymptote y=q is unchanged.</p>` +
        `</div>` +
        `<div style="background:#fffbeb;border:1.5px solid #fde68a;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#d97706;margin-bottom:4px;">Parameter k — growth rate</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">k &gt; 1 makes the curve <strong>steeper</strong> (grows faster); 0 &lt; k &lt; 1 makes it <strong>flatter</strong> (grows slower).</p>` +
        `</div>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">The asymptote is unchanged by p</p>` +
        `<p style="margin:0;color:#1e3a8a;">The horizontal asymptote y=q does <strong>not move</strong> when p changes — only the horizontal position of the curve shifts. The y-intercept does change with p, just as the diagram's ${or('orange curve')} crosses the y-axis at a different height from the ${bl('blue curve')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Using the diagram, explain why y=2^(x+2) sits to the left of y=2ˣ.',
          answer: `Adding 2 inside the exponent shifts the entire curve ${or('2 units to the left')}`,
          steps: [
            `As shown, adding 2 inside the exponent means every x-value effectively behaves like ${or('x+2')} on the original graph, shifting the whole curve ${or('2 units left')} — visible in the diagram as the ${or('orange curve')} reaching the same heights as the ${bl('blue curve')}, but earlier (further left).`,
          ],
        },
        {
          question: 'Thabo has y=3^(2x). Compare its growth rate to y=3ˣ, using the same "steeper/faster" idea shown in the diagram.',
          answer: `With k=2, the graph grows ${or('twice as fast')} as y=3ˣ`,
          steps: [
            `With k=2, the graph grows ${or('twice as fast')} — similar to how the diagram's shifted curve reaches heights earlier, a k value greater than 1 makes the curve rise even more steeply, reaching large values much sooner.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video comparing y=2^x and y=2^(x+2) to show how p shifts exponential graphs, and explaining how k affects the growth rate" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — PROBLEM SOLVING AND GRAPH WORK WITH ALL PRESCRIBED FUNCTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'problem-solving-graph-work',
      title: 'Problem Solving and Graph Work with All Prescribed Functions',
      icon: 'f',
      explanation:
        `<p style="margin-bottom:16px;">We combine our knowledge of all parameters across ${bl('linear')}, ${bl('quadratic')}, ${bl('hyperbolic')} and ${bl('exponential')} functions to determine equations from graphs and solve real-life problems. Refer to the diagram below, which shows a hyperbola with its key features labelled — the vertical asymptote, horizontal asymptote, and a known point on the curve — exactly the kind of information you will be given to find an unknown equation.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known information')}</span>` +
        `<span style="background:#fffbeb;border:1px solid #fde68a;border-radius:6px;padding:3px 10px;font-size:13px;">${or('substitution')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('solved parameter')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategy: finding an equation from a graph</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#1e40af;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Read the graph')} — identify all ${bl('known information')}: asymptotes, turning point, intercepts, or labelled points.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fffbeb;border:1.5px solid #fde68a;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#d97706;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Substitute')} — use the known values to ${or('substitute')} into the general form of the equation to find the unknown parameter.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Solve')} — work out the unknown parameter and write the ${gr('complete equation')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Asymptotes give you p and q directly</p>` +
        `<p style="margin:0;color:#1e3a8a;">For hyperbolic and exponential functions, reading the asymptotes from the graph immediately gives you the values of p and q. Use the labelled point only to find the value of <em>a</em>.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A parabola has the same shape as y=x² but its turning point is at (2,−5). Write its equation.',
          answer: `y=${gr('(x−2)²−5')}`,
          steps: [
            `Since the shape (width) is unchanged, a=1. The ${bl('turning point (2,−5)')} gives p=−2 and q=−5.`,
            `Equation: y=(x−${or('2')})²${gr('−5')} &nbsp;→&nbsp; ${gr('y=(x−2)²−5')}`,
          ],
        },
        {
          question: 'An exponential graph passes through (0,4) with horizontal asymptote y=1, in the form y=a·bˣ+1. Find a.',
          answer: `${gr('a=3')}`,
          steps: [
            `${bl('Substitute')} the known point ${bl('(0,4)')} into the equation: ${or('4=a·b⁰+1=a+1')} (since b⁰=1 regardless of b).`,
            `Solve: ${gr('a=4−1=3')}`,
          ],
        },
        {
          question: 'Using the diagram below, find the equation of the hyperbola shown, in the form y=a/(x−3)−1.',
          answer: `${gr('y=2/(x−3)−1')}`,
          steps: [
            `From the diagram, the ${bl('vertical asymptote is x=3')} and the ${bl('horizontal asymptote is y=−1')}, confirming the form y=a/(x−3)−1.`,
            `The marked point ${or('(4,1)')} is on the curve. ${or('Substitute')} to find a: ${or('1=a/(4−3)−1')}.`,
            `Simplify: ${or('1=a/1−1=a−1')}, so ${gr('a=2')}.`,
            `<strong>Equation:</strong> ${gr('y=2/(x−3)−1')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the equation of a hyperbola from a graph using asymptotes and a known point, matching the diagram in the study guide" />',
    },
  ],

  topicPractice: [

    // ── Q1 Easy — turning point of a shifted parabola ────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the turning point of y=(x+5)².',
      answer: '(−5,0)',
      checkMode: 'auto',
      correctAnswer: '(-5,0)',
      correctAnswers: ['(-5,0)', '(−5,0)', '(-5, 0)', '(−5, 0)'],
      explanation: 'For y=(x+p)², the turning point is (−p, 0). Here p=5, so the turning point is (−5, 0). ✓',
    },

    // ── Q2 Medium — turning point with vertical shift ────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the turning point of y=(x−3)²+2.',
      answer: '(3,2)',
      checkMode: 'auto',
      correctAnswer: '(3,2)',
      correctAnswers: ['(3,2)', '(3, 2)'],
      explanation: 'For y=(x−p)²+q, the turning point is (p, q). Here p=3 and q=2, so the turning point is (3, 2). ✓',
    },

    // ── Q3 Hard — horizontal vs vertical shift misconception ─────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says y=(x+1)² and y=x²+1 represent the same horizontal shift. Is he correct? Explain.',
      answer: 'No — y=(x+1)² shifts the whole graph 1 unit left, while y=x²+1 shifts it 1 unit up (a vertical shift, not horizontal).',
      checkMode: 'self',
    },

    // ── Q4 Easy — vertical asymptote of a hyperbola ──────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the vertical asymptote of y=1/(x−5).',
      answer: 'x=5',
      checkMode: 'auto',
      correctAnswer: 'x=5',
      explanation: 'The denominator equals zero when x−5=0, so the vertical asymptote is x=5. ✓',
    },

    // ── Q5 Medium — both asymptotes of a hyperbola ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find both asymptotes of y=4/(x+2)−3.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'Vertical asymptote',
          correctAnswer: 'x=-2',
          correctAnswers: ['x=-2', 'x=−2', 'x = -2', 'x = −2'],
          explanation: 'The denominator equals zero when x+2=0, so the vertical asymptote is x=−2. ✓',
        },
        {
          label: 'Horizontal asymptote',
          correctAnswer: 'y=-3',
          correctAnswers: ['y=-3', 'y=−3', 'y = -3', 'y = −3'],
          explanation: 'The horizontal asymptote is y=q=−3. ✓',
        },
      ],
    },

    // ── Q6 Hard — substituting into a hyperbola ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato has y=2/(x+6)+1, passing through a point with x=−5. Find the corresponding y-value.',
      answer: 'y=2/(−5+6)+1=2/1+1=3.',
      checkMode: 'self',
    },

    // ── Q7 Medium — exponential horizontal shift direction ───────────────────
    {
      difficulty: 'Medium',
      question: 'Compare y=2ˣ to y=2^(x−3). Describe the transformation.',
      answer: 'shifts 3 units to the right',
      checkMode: 'auto',
      correctAnswer: 'shifts 3 units to the right',
      correctAnswers: ['shifts 3 units to the right', '3 units to the right', 'right by 3 units', 'right 3 units'],
      explanation: 'Since p=−3 inside the exponent (written as x−3), the graph shifts 3 units to the right. ✓',
    },

    // ── Q8 Hard — exponential growth rate with k ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo has y=5^(3x). Compare its growth rate to y=5ˣ.',
      answer: 'With k=3, the graph grows three times as fast — the exponent triples for any given x value compared to y=5ˣ.',
      checkMode: 'self',
    },

    // ── Q9 Medium — parabola equation from turning point ─────────────────────
    {
      difficulty: 'Medium',
      question: 'A parabola has the same shape as y=x² with turning point (−1,4). Write its equation.',
      answer: 'y=(x+1)²+4',
      checkMode: 'auto',
      correctAnswer: 'y=(x+1)²+4',
      correctAnswers: ['y=(x+1)²+4', 'y=(x+1)^2+4'],
      explanation: 'Turning point (−1,4) gives p=1 and q=4. Since a=1 (same shape as y=x²): y=(x+1)²+4. ✓',
    },

    // ── Q10 Hard — hyperbola equation from graph features ────────────────────
    {
      difficulty: 'Hard',
      question: 'A hyperbola has vertical asymptote x=2, horizontal asymptote y=3, and passes through (5,4). Find its equation in the form y=a/(x−2)+3.',
      answer: 'Substitute (5,4): 4=a/3+3. 1=a/3. a=3. Equation: y=3/(x−2)+3.',
      checkMode: 'self',
    },

    // ── Q11 Medium — finding a in an exponential from a point ────────────────
    {
      difficulty: 'Medium',
      question: 'An exponential graph passes through (0,6) with horizontal asymptote y=2, in the form y=a·bˣ+2. Find a.',
      answer: '4',
      checkMode: 'auto',
      correctAnswer: '4',
      explanation: 'Substitute (0,6): 6=a·b⁰+2=a+2 (since b⁰=1). So a=6−2=4. ✓',
    },

    // ── Q12 Hard — finding a in a parabola from two pieces of information ─────
    {
      difficulty: 'Hard',
      question: "Amahle's parabola has turning point (3,−2) and passes through (5,6). Find a in y=a(x−3)²−2.",
      answer: 'Substitute (5,6): 6=a(2)²−2. 8=4a. a=2.',
      checkMode: 'self',
    },

    // ── Q13 Medium — hyperbola equation with q=0 ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the equation of a hyperbola with asymptotes x=−1 and y=0, passing through (0,4).',
      answer: 'y=4/(x+1)',
      checkMode: 'auto',
      correctAnswer: 'y=4/(x+1)',
      correctAnswers: ['y=4/(x+1)', 'y = 4/(x+1)'],
      explanation: 'Asymptotes give p=1 and q=0: y=a/(x+1). Substitute (0,4): 4=a/(0+1)=a. Equation: y=4/(x+1). ✓',
    },

    // ── Q14 Hard — y-intercept of exponential always at a+q ─────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says all exponential graphs of the form y=a·bˣ+q pass through the point (0,a+q). Is he correct? Explain.',
      answer: 'Yes — substituting x=0 gives y=a·b⁰+q=a(1)+q=a+q, since any non-zero base raised to the power 0 equals 1.',
      checkMode: 'self',
    },

    // ── Q15 Hard — parabola with given width and turning point ───────────────
    {
      difficulty: 'Hard',
      question: 'Find the equation of a parabola with the same width as y=2x² and turning point at (1,3).',
      answer: 'y=2(x−1)²+3.',
      checkMode: 'self',
    },

    // ── Q16 Hard — finding a in a hyperbola from a point ─────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato has a hyperbola y=a/(x+3)−2 passing through (−1,2). Find a.',
      answer: '8',
      checkMode: 'auto',
      correctAnswer: '8',
      explanation: 'Substitute (−1,2): 2=a/(−1+3)−2=a/2−2. 4=a/2. a=8. ✓',
    },

    // ── Q17 Hard — exponential with p: shift and y-intercept effect ──────────
    {
      difficulty: 'Hard',
      question: 'Thabo compares y=3^(x+2) to y=3ˣ, describing both the shift direction and the value at x=0 for each.',
      answer: "y=3^(x+2) shifts 2 units left. At x=0: y=3^(0+2)=9, compared to y=3⁰=1 for the original — the shifted graph reaches a much higher value at x=0 since it's effectively further along the curve.",
      checkMode: 'self',
    },

    // ── Q18 Hard — finding both a and b in an exponential ────────────────────
    {
      difficulty: 'Hard',
      question: 'An exponential graph has horizontal asymptote y=−3 and passes through (0,1) and (1,5), in the form y=a·bˣ−3. Find a and b.',
      answer: 'At x=0: 1=a−3, so a=4. At x=1: 5=4b−3. 8=4b. b=2.',
      checkMode: 'self',
    },

    // ── Q19 Hard — turning point and min/max from vertex form ────────────────
    {
      difficulty: 'Hard',
      question: 'Find the turning point of y=3(x+4)²−7, and state whether it represents a minimum or maximum.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'Turning point',
          correctAnswer: '(-4,-7)',
          correctAnswers: ['(-4,-7)', '(−4,−7)', '(-4, -7)', '(−4, −7)'],
          explanation: 'For y=a(x+p)²+q, the turning point is (−p, q). With p=4 and q=−7: turning point is (−4, −7). ✓',
        },
        {
          label: 'Minimum or maximum?',
          correctAnswer: 'minimum',
          correctAnswers: ['minimum', 'min', 'Minimum', 'Min'],
          explanation: 'Since a=3>0, the parabola opens upward — the turning point is a minimum. ✓',
        },
      ],
    },

    // ── Q20 Hard — full hyperbola equation from asymptotes and a point ────────
    {
      difficulty: 'Hard',
      question: 'A hyperbola y=a/(x−p)+q has asymptotes x=4 and y=−1, and passes through (6,1). Find a, p and q, then write the full equation.',
      answer: 'p=4, q=−1 (from asymptotes). Substitute (6,1): 1=a/(6−4)−1. 2=a/2. a=4. Equation: y=4/(x−4)−1.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered functions.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 33, message: 'Outstanding! A perfect score — you have completely mastered Functions for Grade 11. Keep it up!' },
    { minScore: 27, message: 'Excellent work! You have a very strong grasp of function transformations. Review any missed parts and you will have it perfect.' },
    { minScore: 20, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 12, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
}
