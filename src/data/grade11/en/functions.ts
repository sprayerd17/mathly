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

      diagramPlaceholder:
        'Cartesian plane showing y=x² in blue and y=(x+3)² in orange, with the turning point of each parabola marked and labelled — (0,0) for the original and (−3,0) for the shifted graph — illustrating the 3-unit shift to the left',

      diagramSvg:
        '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="26" y1="2" x2="26" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="2" x2="50" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="74" y1="2" x2="74" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="98" y1="2" x2="98" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="122" y1="2" x2="122" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="146" y1="2" x2="146" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="170" y1="2" x2="170" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="194" y1="2" x2="194" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="218" y1="2" x2="218" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="26" x2="218" y2="26" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="50" x2="218" y2="50" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="74" x2="218" y2="74" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="98" x2="218" y2="98" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="122" x2="218" y2="122" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="146" x2="218" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="170" x2="218" y2="170" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="194" x2="218" y2="194" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="194" x2="218" y2="194" stroke="#374151" stroke-width="1.5"/><text x="210" y="188" font-size="11" fill="#374151">x</text><line x1="146" y1="2" x2="146" y2="218" stroke="#374151" stroke-width="1.5"/><text x="152" y="12" font-size="11" fill="#374151">y</text><path d="M86,44 L98,98 L110,140 L122,170 L134,188 L146,194 L158,188 L170,170 L182,140 L194,98 L206,44" fill="none" stroke="#1e40af" stroke-width="2.5"/><path d="M14,44 L26,98 L38,140 L50,170 L62,188 L74,194 L86,188 L98,170 L110,140 L122,98 L134,44" fill="none" stroke="#f59e0b" stroke-width="2.5"/><circle cx="146" cy="194" r="3.5" fill="#1e40af"/><text x="150" y="210" font-size="11" fill="#1e40af" font-weight="700" text-anchor="start">(0, 0)</text><circle cx="74" cy="194" r="3.5" fill="#f59e0b"/><text x="70" y="210" font-size="11" fill="#f59e0b" font-weight="700" text-anchor="end">(-3, 0)</text><text x="196" y="36" font-size="12" fill="#1e40af" font-weight="700" text-anchor="end">y=x²</text><text x="18" y="36" font-size="12" fill="#f59e0b" font-weight="700" text-anchor="start">y=(x+3)²</text></svg>',

      videoPlaceholder:
        'Short video explaining how the parameter p shifts quadratic graphs horizontally, using y=x² and y=(x+3)² as shown in the diagram',
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

      diagramPlaceholder:
        'Cartesian plane showing y=1/x in blue with vertical asymptote x=0 and y=1/(x−2) in orange with vertical asymptote x=2, both sharing the unchanged horizontal asymptote y=0, illustrating the 2-unit shift to the right',

      diagramSvg:
        '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="26" y1="2" x2="26" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="2" x2="50" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="74" y1="2" x2="74" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="98" y1="2" x2="98" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="122" y1="2" x2="122" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="146" y1="2" x2="146" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="170" y1="2" x2="170" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="194" y1="2" x2="194" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="218" y1="2" x2="218" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="98" y1="2" x2="98" y2="218" stroke="#374151" stroke-width="1.5"/><line x1="146" y1="2" x2="146" y2="218" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="5,4"/><text x="150" y="16" font-size="12" fill="#f59e0b" font-weight="700" text-anchor="start">x = 2</text><text x="104" y="16" font-size="11" fill="#1e40af" font-weight="700" text-anchor="start">x = 0</text><text x="200" y="122" font-size="11" fill="#1e40af" font-weight="700" text-anchor="end">y = 0</text><path d="M107.6,50 L110,62 L112.4,70 L117.2,80 L122,86 L129.2,91.5 L138.8,95.9 L150.8,99.1 L170,102" fill="none" stroke="#1e40af" stroke-width="2.5"/><path d="M88.4,170 L86,158 L83.6,150 L78.8,140 L74,134 L66.8,128.5 L57.2,124.1 L45.2,120.9 L26,118" fill="none" stroke="#1e40af" stroke-width="2.5"/><path d="M155.6,50 L158,62 L160.4,70 L165.2,80 L170,86 L177.2,91.5 L186.8,95.9 L198.8,99.1 L218,102" fill="none" stroke="#f59e0b" stroke-width="2.5"/><path d="M136.4,170 L134,158 L131.6,150 L126.8,140 L122,134 L114.8,128.5 L105.2,124.1 L93.2,120.9 L74,118" fill="none" stroke="#f59e0b" stroke-width="2.5"/><text x="98" y="36" font-size="12" fill="#1e40af" font-weight="700" text-anchor="start">y=1/x</text><text x="216" y="40" font-size="11" fill="#f59e0b" font-weight="700" text-anchor="end">y=1/(x-2)</text></svg>',

      videoPlaceholder:
        'Short video showing how the parameter p shifts the vertical asymptote of a hyperbolic function, comparing y=1/x and y=1/(x-2) using the diagram',
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

      diagramPlaceholder:
        'Cartesian plane showing y=2ˣ in blue and y=2^(x+2) in orange, both approaching the shared horizontal asymptote y=0, with the orange curve visibly 2 units to the left of the blue curve at every height',

      diagramSvg:
        '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="26" x2="218" y2="26" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="50" x2="218" y2="50" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="74" x2="218" y2="74" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="98" x2="218" y2="98" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="122" x2="218" y2="122" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="146" x2="218" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="170" x2="218" y2="170" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="194" x2="218" y2="194" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="194" x2="218" y2="194" stroke="#374151" stroke-width="1.5"/><text x="210" y="204" font-size="11" fill="#374151">x</text><line x1="158" y1="2" x2="158" y2="218" stroke="#374151" stroke-width="1.5"/><text x="164" y="12" font-size="11" fill="#374151">y</text><text x="210" y="188" font-size="10" fill="#1e40af" font-weight="700" text-anchor="end">y = 0</text><path d="M62,192.5 L86,191 L110,188 L134,182 L158,170 L182,146 L206,98" fill="none" stroke="#1e40af" stroke-width="2.5"/><path d="M14,192.5 L38,191 L62,188 L86,182 L110,170 L134,146 L158,98" fill="none" stroke="#f59e0b" stroke-width="2.5"/><text x="170" y="90" font-size="12" fill="#1e40af" font-weight="700" text-anchor="start">y=2ˣ</text><text x="100" y="84" font-size="11" fill="#f59e0b" font-weight="700" text-anchor="start">y=2^(x+2)</text></svg>',

      videoPlaceholder:
        'Short video comparing y=2^x and y=2^(x+2) to show how p shifts exponential graphs, and explaining how k affects the growth rate',
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

      diagramPlaceholder:
        'Cartesian plane showing a hyperbola with vertical asymptote x=3 and horizontal asymptote y=−1, both labelled and dashed, with the known point (4,1) marked on the curve — matching the third worked example, y=a/(x−3)−1',

      diagramSvg:
        '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="194" x2="218" y2="194" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="170" x2="218" y2="170" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="146" x2="218" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="122" x2="218" y2="122" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="98" x2="218" y2="98" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="74" x2="218" y2="74" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="50" x2="218" y2="50" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="26" x2="218" y2="26" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="98" x2="218" y2="98" stroke="#374151" stroke-width="1.5"/><text x="210" y="92" font-size="11" fill="#374151">x</text><line x1="86" y1="2" x2="86" y2="218" stroke="#374151" stroke-width="1.5"/><text x="92" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="110" x2="203.12" y2="110" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="180.08" y="104" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = -1</text><line x1="122" y1="203.12" x2="122" y2="16.88" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="128" y="16" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">x = 3</text><path d="M124.64,1 L125.6,30 L126.8,50 L128,62 L130.04,74.18 L132.2,81.76 L134,86 L137.6,91.54 L142.4,95.89 L148.4,99.09 L158,102 L170,104 L188,105.64 L218,107" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M119.24,214.35 L118.4,190 L117.2,170 L116,158 L113.96,145.82 L111.8,138.24 L110,134 L106.4,128.46 L101.6,124.11 L95.6,120.91 L86,118 L74,116 L56,114.36 L26,113" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="134" cy="86" r="3.5" fill="#2563eb"/><text x="141" y="78" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(4, 1)</text></svg>',

      videoPlaceholder:
        'Short video showing how to find the equation of a hyperbola from a graph using asymptotes and a known point, matching the diagram in the study guide',
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

    // ── Q21 Hard (problem-solving) — general proof of average gradient identity ──
    {
      difficulty: 'Hard',
      question: 'Show that the average gradient of f(x)=x² between x=a and x=b (where a≠b) is always equal to a+b, for any values of a and b.',
      answer: 'Average gradient = (f(b)−f(a))/(b−a) = (b²−a²)/(b−a). Since b²−a²=(b−a)(b+a), this simplifies to (b−a)(b+a)/(b−a)=a+b (valid since a≠b, so b−a≠0 and the fraction may be cancelled). This result holds for any values of a and b — not just specific numbers.',
      checkMode: 'self',
    },

    // ── Q22 Hard (problem-solving) — unknown parameter from a given average gradient ──
    {
      difficulty: 'Hard',
      question: 'A parabola in the form y=a(x−1)²−3 has turning point (1,−3). The average gradient of the parabola between x=1 and x=4 is 6. Find a.',
      answer: '2',
      checkMode: 'auto',
      correctAnswer: '2',
      explanation: 'f(1)=a(1−1)²−3=−3. f(4)=a(4−1)²−3=9a−3. Average gradient=(f(4)−f(1))/(4−1)=(9a−3−(−3))/3=9a/3=3a. Since the average gradient is 6: 3a=6, so a=2. ✓',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-2 Parabola turning point (Easy) | 3-5 Hyperbola asymptotes (Easy-Medium) |
    // 6-8 Exponential transformations (Easy-Medium) | 9-12 Equation from description (Medium) |
    // 13-16 Average gradient (Medium-Hard) | 17-19 Mixed reasoning & graph reading (Hard)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Find the turning point of y=(x−4)²+3, and state whether it is a minimum or maximum.', answer: '', checkMode: 'auto', parts: [
          { label: 'Turning point', correctAnswer: '(4,3)', correctAnswers: ['(4,3)', '(4, 3)'], explanation: 'For y=a(x−p)²+q, the turning point is (p, q). Here p=4 and q=3, so the turning point is (4, 3). ✓' },
          { label: 'Minimum or maximum?', correctAnswer: 'minimum', correctAnswers: ['minimum', 'min', 'Minimum', 'Min'], explanation: 'Since a=1>0, the parabola opens upward — the turning point is a minimum. ✓' },
        ]},
        { difficulty: 'Easy', question: 'Find the turning point of y=−2(x+1)²−6, and state whether it is a minimum or maximum.', answer: '', checkMode: 'auto', parts: [
          { label: 'Turning point', correctAnswer: '(-1,-6)', correctAnswers: ['(-1,-6)', '(−1,−6)', '(-1, -6)', '(−1, −6)'], explanation: 'For y=a(x+p)²+q, the turning point is (−p, q). Here p=1 and q=−6, so the turning point is (−1, −6). ✓' },
          { label: 'Minimum or maximum?', correctAnswer: 'maximum', correctAnswers: ['maximum', 'max', 'Maximum', 'Max'], explanation: 'Since a=−2<0, the parabola opens downward — the turning point is a maximum. ✓' },
        ]},
        { difficulty: 'Easy', question: 'Find the turning point of y=3(x−2)²+5.', answer: '(2,5)', checkMode: 'auto', correctAnswer: '(2,5)', correctAnswers: ['(2,5)', '(2, 5)'], explanation: 'For y=a(x−p)²+q, the turning point is (p, q). Here p=2 and q=5, so the turning point is (2, 5). ✓' },

        { difficulty: 'Easy', question: 'Find the vertical and horizontal asymptotes of y=2/(x−3)+1.', answer: '', checkMode: 'auto', parts: [
          { label: 'Vertical asymptote', correctAnswer: 'x=3', correctAnswers: ['x=3', 'x = 3'], explanation: 'The denominator equals zero when x−3=0, so the vertical asymptote is x=3. ✓' },
          { label: 'Horizontal asymptote', correctAnswer: 'y=1', correctAnswers: ['y=1', 'y = 1'], explanation: 'The horizontal asymptote is y=q=1. ✓' },
        ]},
        { difficulty: 'Easy-Medium', question: 'A hyperbola y=6/(x+2)−4 passes through a point with x=1. Find the corresponding y-value.', answer: '−2', checkMode: 'auto', correctAnswer: '-2', correctAnswers: ['-2', '−2'], explanation: 'Substitute x=1: y=6/(1+2)−4=6/3−4=2−4=−2. ✓' },
        { difficulty: 'Easy-Medium', question: 'A hyperbola has vertical asymptote x=1 and horizontal asymptote y=2, and passes through (3,5), in the form y=a/(x−1)+2. Find a.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Substitute (3,5): 5=a/(3−1)+2. 3=a/2. a=6. ✓' },

        { difficulty: 'Easy-Medium', question: 'Compare y=2ˣ to y=2^(x−1)+3. State the horizontal asymptote and describe the shift.', answer: '', checkMode: 'auto', parts: [
          { label: 'Horizontal asymptote', correctAnswer: 'y=3', correctAnswers: ['y=3', 'y = 3'], explanation: 'The horizontal asymptote is y=q=3. ✓' },
          { label: 'Shift direction', correctAnswer: '1 unit right', correctAnswers: ['1 unit right', 'shifts 1 unit to the right', 'right 1 unit', '1 unit to the right'], explanation: 'Since p=−1 inside the exponent (written as x−1), the graph shifts 1 unit to the right. ✓' },
        ]},
        { difficulty: 'Easy-Medium', question: 'Find the y-intercept of y=3·2ˣ−1.', answer: '2', checkMode: 'auto', correctAnswer: '2', explanation: 'Substitute x=0: y=3·2⁰−1=3(1)−1=3−1=2 (since 2⁰=1). ✓' },
        { difficulty: 'Medium', question: 'An exponential graph passes through (0,5) with horizontal asymptote y=−3, in the form y=a·2ˣ−3. Find a.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Substitute (0,5): 5=a·2⁰−3=a−3 (since 2⁰=1). So a=5+3=8. ✓' },

        { difficulty: 'Medium', question: 'An exponential graph of the form y=a·bˣ−1 passes through (0,2) and (1,8). Find a and b.', answer: '', checkMode: 'auto', parts: [
          { label: 'Value of a', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Substitute (0,2): 2=a·b⁰−1=a−1 (since b⁰=1). So a=2+1=3. ✓' },
          { label: 'Value of b', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Substitute (1,8) with a=3: 8=3b−1. 9=3b. b=3. ✓' },
        ]},
        { difficulty: 'Medium', question: 'A parabola has the same shape as y=x² with turning point (3,−2). Write its equation.', answer: 'y=(x−3)²−2', checkMode: 'auto', correctAnswer: 'y=(x-3)²-2', correctAnswers: ['y=(x-3)²-2', 'y=(x−3)²−2', 'y=(x-3)^2-2'], explanation: 'Turning point (3,−2) gives p=3 and q=−2. Since a=1 (same shape as y=x²): y=(x−3)²−2. ✓' },
        { difficulty: 'Medium', question: 'A parabola in the form y=a(x+2)²+4 has turning point (−2,4) and passes through (0,0). Find a.', answer: '−1', checkMode: 'auto', correctAnswer: '-1', correctAnswers: ['-1', '−1'], explanation: 'Substitute (0,0): 0=a(0+2)²+4=4a+4. −4=4a. a=−1. ✓' },
        { difficulty: 'Medium', question: 'A hyperbola has asymptotes x=−3 and y=2, and passes through (−1,5), in the form y=a/(x+3)+2. Find a.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Substitute (−1,5): 5=a/(−1+3)+2. 3=a/2. a=6. ✓' },

        { difficulty: 'Medium', question: 'For f(x)=x², calculate the average gradient between x=1 and x=4.', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Average gradient = (f(4)−f(1))/(4−1) = (16−1)/3 = 15/3 = 5. ✓' },
        { difficulty: 'Medium', question: 'For f(x)=x²−3, calculate the average gradient between x=−1 and x=2.', answer: '1', checkMode: 'auto', correctAnswer: '1', explanation: 'Average gradient = (f(2)−f(−1))/(2−(−1)) = ((4−3)−(1−3))/3 = (1−(−2))/3 = 3/3 = 1. ✓' },
        { difficulty: 'Medium-Hard', question: 'For f(x)=2x²+1, calculate the average gradient between x=0 and x=3.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Average gradient = (f(3)−f(0))/(3−0) = (19−1)/3 = 18/3 = 6. ✓' },
        { difficulty: 'Medium-Hard', question: 'For f(x)=−x²+4x, calculate the average gradient between x=1 and x=3.', answer: '0', checkMode: 'auto', correctAnswer: '0', explanation: 'Average gradient = (f(3)−f(1))/(3−1) = (3−3)/2 = 0/2 = 0. ✓' },

        { difficulty: 'Hard', question: 'A hyperbola is shown on a set of axes with vertical asymptote x=2, horizontal asymptote y=−1, and passing through the point (4,1), in the form y=a/(x−2)−1. Using the diagram, find a and write the full equation.', answer: 'Substitute (4,1): 1=a/(4−2)−1. 2=a/2. a=4. Equation: y=4/(x−2)−1.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="194" x2="218" y2="194" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="170" x2="218" y2="170" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="146" x2="218" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="122" x2="218" y2="122" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="98" x2="218" y2="98" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="74" x2="218" y2="74" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="50" x2="218" y2="50" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="26" x2="218" y2="26" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="98" x2="218" y2="98" stroke="#374151" stroke-width="1.5"/><text x="210" y="92" font-size="11" fill="#374151">x</text><line x1="86" y1="2" x2="86" y2="218" stroke="#374151" stroke-width="1.5"/><text x="92" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="110" x2="203.12" y2="110" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="180.08" y="104" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = -1</text><line x1="110" y1="203.12" x2="110" y2="16.88" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="116" y="16" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">x = 2</text><path d="M115.76,10 L117.44,32.58 L119.12,46.84 L120.8,56.67 L122.48,63.85 L124.16,69.32 L125.84,73.64 L127.52,77.12 L129.2,80 L130.88,82.41 L132.56,84.47 L134.24,86.24 L135.92,87.78 L137.6,89.13 L139.28,90.33 L140.96,91.4 L142.64,92.35 L144.32,93.22 L146,94 L147.68,94.71 L149.36,95.37 L151.04,95.96 L152.72,96.52 L154.4,97.03 L156.08,97.5 L157.76,97.94 L159.44,98.35 L161.12,98.73 L162.8,99.09 L164.48,99.43 L166.16,99.74 L167.84,100.04 L169.52,100.32 L171.2,100.59 L172.88,100.84 L174.56,101.08 L176.24,101.3 L177.92,101.52 L179.6,101.72 L181.28,101.92 L182.96,102.11 L184.64,102.28 L186.32,102.45 L188,102.62 L189.68,102.77 L191.36,102.92 L193.04,103.06 L194.72,103.2 L196.4,103.33 L198.08,103.46 L199.76,103.58 L201.44,103.7 L203.12,103.81 L204.8,103.92 L206.48,104.03 L208.16,104.13 L209.84,104.23 L211.52,104.33 L213.2,104.42 L214.88,104.51 L216.56,104.59 L218.24,104.68 L219.92,104.76 L221.6,104.84 L223.28,104.92 L224.96,104.99 L226.64,105.06 L228.32,105.13 L230,105.2" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M104.24,210 L102.56,187.42 L100.88,173.16 L99.2,163.33 L97.52,156.15 L95.84,150.68 L94.16,146.36 L92.48,142.88 L90.8,140 L89.12,137.59 L87.44,135.53 L85.76,133.76 L84.08,132.22 L82.4,130.87 L80.72,129.67 L79.04,128.6 L77.36,127.65 L75.68,126.78 L74,126 L72.32,125.29 L70.64,124.63 L68.96,124.04 L67.28,123.48 L65.6,122.97 L63.92,122.5 L62.24,122.06 L60.56,121.65 L58.88,121.27 L57.2,120.91 L55.52,120.57 L53.84,120.26 L52.16,119.96 L50.48,119.68 L48.8,119.41 L47.12,119.16 L45.44,118.92 L43.76,118.7 L42.08,118.48 L40.4,118.28 L38.72,118.08 L37.04,117.89 L35.36,117.72 L33.68,117.55 L32,117.38 L30.32,117.23 L28.64,117.08 L26.96,116.94 L25.28,116.8 L23.6,116.67 L21.92,116.54 L20.24,116.42 L18.56,116.3 L16.88,116.19 L15.2,116.08 L13.52,115.97 L11.84,115.87 L10.16,115.77 L8.48,115.67 L6.8,115.58 L5.12,115.49 L3.44,115.41 L1.76,115.32 L0.08,115.24 L-1.6,115.16 L-3.28,115.08 L-4.96,115.01 L-6.64,114.94 L-8.32,114.87 L-10,114.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="134" cy="86" r="3.5" fill="#2563eb"/><text x="141" y="78" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(4, 1)</text></svg>' },
        { difficulty: 'Hard', question: 'Sipho says the average gradient of f(x)=x² between two points is always equal to the gradient at the midpoint of those two x-values. Is he correct for f(x)=x²? Explain by testing x=0 and x=4.', answer: 'His claim happens to hold for f(x)=x² — the average gradient between x=0 and x=4 is (16−0)/4=4, and this equals the actual (instantaneous) gradient of the curve at the midpoint x=2. This is a special property of parabolas, not true for all functions in general.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A parabola is shown on a set of axes with turning point (−1,−4), passing through the point (1,4), in the form y=a(x+1)²−4. Using the diagram, find a and write the full equation.', answer: 'Substitute (1,4): 4=a(1+1)²−4. 8=4a. a=2. Equation: y=2(x+1)²−4.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="26" y1="2" x2="26" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="2" x2="50" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="74" y1="2" x2="74" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="98" y1="2" x2="98" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="122" y1="2" x2="122" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="146" y1="2" x2="146" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="170" y1="2" x2="170" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="194" y1="2" x2="194" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#374151" stroke-width="1.5"/><text x="210" y="56" font-size="11" fill="#374151">x</text><line x1="122" y1="2" x2="122" y2="218" stroke="#374151" stroke-width="1.5"/><text x="128" y="12" font-size="11" fill="#374151">y</text><path d="M86,14 L89,36.5 L92,56 L95,72.5 L98,86 L101,96.5 L104,104 L107,108.5 L110,110 L113,108.5 L116,104 L119,96.5 L122,86 L125,72.5 L128,56 L131,36.5 L134,14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="110" r="3.5" fill="#2563eb"/><text x="116" y="126" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(-1, -4)</text><circle cx="134" cy="14" r="3.5" fill="#2563eb"/><text x="141" y="14" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(1, 4)</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered Grade 11 functions — parabolas, hyperbolas, exponentials and average gradient.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh numbers
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'Find the turning point of y=(x+2)²−5, and state whether it is a minimum or maximum.', answer: '', checkMode: 'auto', parts: [
          { label: 'Turning point', correctAnswer: '(-2,-5)', correctAnswers: ['(-2,-5)', '(−2,−5)', '(-2, -5)', '(−2, −5)'], explanation: 'For y=a(x+p)²+q, the turning point is (−p, q). Here p=2 and q=−5, so the turning point is (−2, −5). ✓' },
          { label: 'Minimum or maximum?', correctAnswer: 'minimum', correctAnswers: ['minimum', 'min', 'Minimum', 'Min'], explanation: 'Since a=1>0, the parabola opens upward — the turning point is a minimum. ✓' },
        ]},
        { difficulty: 'Easy', question: 'Find the turning point of y=−3(x−1)²+4, and state whether it is a minimum or maximum.', answer: '', checkMode: 'auto', parts: [
          { label: 'Turning point', correctAnswer: '(1,4)', correctAnswers: ['(1,4)', '(1, 4)'], explanation: 'For y=a(x−p)²+q, the turning point is (p, q). Here p=1 and q=4, so the turning point is (1, 4). ✓' },
          { label: 'Minimum or maximum?', correctAnswer: 'maximum', correctAnswers: ['maximum', 'max', 'Maximum', 'Max'], explanation: 'Since a=−3<0, the parabola opens downward — the turning point is a maximum. ✓' },
        ]},
        { difficulty: 'Easy', question: 'Find the turning point of y=2(x+5)²−1.', answer: '(−5,−1)', checkMode: 'auto', correctAnswer: '(-5,-1)', correctAnswers: ['(-5,-1)', '(−5,−1)', '(-5, -1)', '(−5, −1)'], explanation: 'For y=a(x+p)²+q, the turning point is (−p, q). Here p=5 and q=−1, so the turning point is (−5, −1). ✓' },

        { difficulty: 'Easy', question: 'Find the vertical and horizontal asymptotes of y=4/(x+2)−3.', answer: '', checkMode: 'auto', parts: [
          { label: 'Vertical asymptote', correctAnswer: 'x=-2', correctAnswers: ['x=-2', 'x=−2', 'x = -2', 'x = −2'], explanation: 'The denominator equals zero when x+2=0, so the vertical asymptote is x=−2. ✓' },
          { label: 'Horizontal asymptote', correctAnswer: 'y=-3', correctAnswers: ['y=-3', 'y=−3', 'y = -3', 'y = −3'], explanation: 'The horizontal asymptote is y=q=−3. ✓' },
        ]},
        { difficulty: 'Easy-Medium', question: 'A hyperbola y=5/(x−1)+2 passes through a point with x=6. Find the corresponding y-value.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Substitute x=6: y=5/(6−1)+2=5/5+2=1+2=3. ✓' },
        { difficulty: 'Easy-Medium', question: 'A hyperbola has vertical asymptote x=−2 and horizontal asymptote y=−1, and passes through (0,3), in the form y=a/(x+2)−1. Find a.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Substitute (0,3): 3=a/(0+2)−1. 4=a/2. a=8. ✓' },

        { difficulty: 'Easy-Medium', question: 'Compare y=3ˣ to y=3^(x+2)−1. State the horizontal asymptote and describe the shift.', answer: '', checkMode: 'auto', parts: [
          { label: 'Horizontal asymptote', correctAnswer: 'y=-1', correctAnswers: ['y=-1', 'y=−1', 'y = -1', 'y = −1'], explanation: 'The horizontal asymptote is y=q=−1. ✓' },
          { label: 'Shift direction', correctAnswer: '2 units left', correctAnswers: ['2 units left', 'shifts 2 units to the left', 'left 2 units', '2 units to the left'], explanation: 'Since p=2 inside the exponent (written as x+2), the graph shifts 2 units to the left. ✓' },
        ]},
        { difficulty: 'Easy-Medium', question: 'Find the y-intercept of y=2·3ˣ+4.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Substitute x=0: y=2·3⁰+4=2(1)+4=2+4=6 (since 3⁰=1). ✓' },
        { difficulty: 'Medium', question: 'An exponential graph passes through (0,7) with horizontal asymptote y=1, in the form y=a·3ˣ+1. Find a.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Substitute (0,7): 7=a·3⁰+1=a+1 (since 3⁰=1). So a=7−1=6. ✓' },

        { difficulty: 'Medium', question: 'An exponential graph of the form y=a·bˣ+2 passes through (0,5) and (1,11). Find a and b.', answer: '', checkMode: 'auto', parts: [
          { label: 'Value of a', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Substitute (0,5): 5=a·b⁰+2=a+2 (since b⁰=1). So a=5−2=3. ✓' },
          { label: 'Value of b', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Substitute (1,11) with a=3: 11=3b+2. 9=3b. b=3. ✓' },
        ]},
        { difficulty: 'Medium', question: 'A parabola has the same shape as y=x² with turning point (−4,1). Write its equation.', answer: 'y=(x+4)²+1', checkMode: 'auto', correctAnswer: 'y=(x+4)²+1', correctAnswers: ['y=(x+4)²+1', 'y=(x+4)^2+1'], explanation: 'Turning point (−4,1) gives p=4 and q=1. Since a=1 (same shape as y=x²): y=(x+4)²+1. ✓' },
        { difficulty: 'Medium', question: 'A parabola in the form y=a(x−1)²−3 has turning point (1,−3) and passes through (3,5). Find a.', answer: '2', checkMode: 'auto', correctAnswer: '2', explanation: 'Substitute (3,5): 5=a(3−1)²−3=4a−3. 8=4a. a=2. ✓' },
        { difficulty: 'Medium', question: 'A hyperbola has asymptotes x=2 and y=−3, and passes through (4,−1), in the form y=a/(x−2)−3. Find a.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'Substitute (4,−1): −1=a/(4−2)−3. 2=a/2. a=4. ✓' },

        { difficulty: 'Medium', question: 'For f(x)=x², calculate the average gradient between x=2 and x=5.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Average gradient = (f(5)−f(2))/(5−2) = (25−4)/3 = 21/3 = 7. ✓' },
        { difficulty: 'Medium', question: 'For f(x)=x²+2, calculate the average gradient between x=−2 and x=1.', answer: '−1', checkMode: 'auto', correctAnswer: '-1', correctAnswers: ['-1', '−1'], explanation: 'Average gradient = (f(1)−f(−2))/(1−(−2)) = ((1+2)−(4+2))/3 = (3−6)/3 = −3/3 = −1. ✓' },
        { difficulty: 'Medium-Hard', question: 'For f(x)=3x²−2, calculate the average gradient between x=0 and x=2.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Average gradient = (f(2)−f(0))/(2−0) = (10−(−2))/2 = 12/2 = 6. ✓' },
        { difficulty: 'Medium-Hard', question: 'For f(x)=−2x²+3x, calculate the average gradient between x=−1 and x=2.', answer: '1', checkMode: 'auto', correctAnswer: '1', explanation: 'Average gradient = (f(2)−f(−1))/(2−(−1)) = ((−8+6)−(−2−3))/3 = (−2−(−5))/3 = 3/3 = 1. ✓' },

        { difficulty: 'Hard', question: 'A hyperbola is shown on a set of axes with vertical asymptote x=−1, horizontal asymptote y=2, and passing through the point (1,5), in the form y=a/(x+1)+2. Using the diagram, find a and write the full equation.', answer: 'Substitute (1,5): 5=a/(1+1)+2. 3=a/2. a=6. Equation: y=6/(x+1)+2.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="26" y1="2" x2="26" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="2" x2="50" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="74" y1="2" x2="74" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="98" y1="2" x2="98" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="122" y1="2" x2="122" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="146" y1="2" x2="146" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="170" y1="2" x2="170" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="194" y1="2" x2="194" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#374151" stroke-width="1.5"/><text x="210" y="128" font-size="11" fill="#374151">x</text><line x1="122" y1="2" x2="122" y2="218" stroke="#374151" stroke-width="1.5"/><text x="128" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="110" x2="203.12" y2="110" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="212" y="104" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = 2</text><line x1="110" y1="203.12" x2="110" y2="16.88" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="116" y="16" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">x = -1</text><path d="M119.12,15.26 L120.8,30 L122.48,40.77 L124.16,48.98 L125.84,55.45 L127.52,60.68 L129.2,65 L130.88,68.62 L132.56,71.7 L134.24,74.36 L135.92,76.67 L137.6,78.7 L139.28,80.49 L140.96,82.09 L142.64,83.53 L144.32,84.83 L146,86 L147.68,87.07 L149.36,88.05 L151.04,88.95 L152.72,89.78 L154.4,90.54 L156.08,91.25 L157.76,91.91 L159.44,92.52 L161.12,93.1 L162.8,93.64 L164.48,94.14 L166.16,94.62 L167.84,95.06 L169.52,95.48 L171.2,95.88 L172.88,96.26 L174.56,96.62 L176.24,96.96 L177.92,97.28 L179.6,97.59 L181.28,97.88 L182.96,98.16 L184.64,98.42 L186.32,98.68 L188,98.92 L189.68,99.16 L191.36,99.38 L193.04,99.6 L194.72,99.8 L196.4,100 L198.08,100.19 L199.76,100.37 L201.44,100.55 L203.12,100.72 L204.8,100.89 L206.48,101.04 L208.16,101.2 L209.84,101.35 L211.52,101.49 L213.2,101.63 L214.88,101.76 L216.56,101.89 L218.24,102.02 L219.92,102.14 L221.6,102.26 L223.28,102.37 L224.96,102.48 L226.64,102.59 L228.32,102.7 L230,102.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M100.88,204.74 L99.2,190 L97.52,179.23 L95.84,171.02 L94.16,164.55 L92.48,159.32 L90.8,155 L89.12,151.38 L87.44,148.3 L85.76,145.64 L84.08,143.33 L82.4,141.3 L80.72,139.51 L79.04,137.91 L77.36,136.47 L75.68,135.17 L74,134 L72.32,132.93 L70.64,131.95 L68.96,131.05 L67.28,130.22 L65.6,129.46 L63.92,128.75 L62.24,128.09 L60.56,127.48 L58.88,126.9 L57.2,126.36 L55.52,125.86 L53.84,125.38 L52.16,124.94 L50.48,124.52 L48.8,124.12 L47.12,123.74 L45.44,123.38 L43.76,123.04 L42.08,122.72 L40.4,122.41 L38.72,122.12 L37.04,121.84 L35.36,121.58 L33.68,121.32 L32,121.08 L30.32,120.84 L28.64,120.62 L26.96,120.4 L25.28,120.2 L23.6,120 L21.92,119.81 L20.24,119.63 L18.56,119.45 L16.88,119.28 L15.2,119.11 L13.52,118.96 L11.84,118.8 L10.16,118.65 L8.48,118.51 L6.8,118.37 L5.12,118.24 L3.44,118.11 L1.76,117.98 L0.08,117.86 L-1.6,117.74 L-3.28,117.63 L-4.96,117.52 L-6.64,117.41 L-8.32,117.3 L-10,117.2" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="134" cy="74" r="3.5" fill="#2563eb"/><text x="141" y="66" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(1, 5)</text></svg>' },
        { difficulty: 'Hard', question: 'Lerato says the average gradient of any function between two points is always positive because "gradients measure how fast a graph increases." Use f(x)=−x²+4x between x=1 and x=3 to check her claim, and comment on whether she is correct in general.', answer: 'For f(x)=−x²+4x, the average gradient between x=1 and x=3 is (3−3)/2=0, which is neither positive nor negative. This already disproves her claim — average gradient can be zero, or negative, depending on whether the function is increasing, decreasing, or unchanged overall between the two points.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A parabola is shown on a set of axes with turning point (2,−5), passing through the point (4,3), in the form y=a(x−2)²−5. Using the diagram, find a and write the full equation.', answer: 'Substitute (4,3): 3=a(4−2)²−5. 8=4a. a=2. Equation: y=2(x−2)²−5.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="194" x2="218" y2="194" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="170" x2="218" y2="170" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="146" x2="218" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="122" x2="218" y2="122" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="98" x2="218" y2="98" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="74" x2="218" y2="74" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="50" x2="218" y2="50" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="26" x2="218" y2="26" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="50" x2="218" y2="50" stroke="#374151" stroke-width="1.5"/><text x="210" y="44" font-size="11" fill="#374151">x</text><line x1="86" y1="2" x2="86" y2="218" stroke="#374151" stroke-width="1.5"/><text x="92" y="12" font-size="11" fill="#374151">y</text><path d="M86,14 L89,36.5 L92,56 L95,72.5 L98,86 L101,96.5 L104,104 L107,108.5 L110,110 L113,108.5 L116,104 L119,96.5 L122,86 L125,72.5 L128,56 L131,36.5 L134,14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="110" r="3.5" fill="#2563eb"/><text x="116" y="126" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(2, -5)</text><circle cx="134" cy="14" r="3.5" fill="#2563eb"/><text x="141" y="14" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(4, 3)</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently work with parabolas, hyperbolas, exponentials and average gradient.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, fresh numbers, more graph-reading emphasis
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'Find the turning point of y=(x−6)²−2, and state whether it is a minimum or maximum.', answer: '', checkMode: 'auto', parts: [
          { label: 'Turning point', correctAnswer: '(6,-2)', correctAnswers: ['(6,-2)', '(6,−2)', '(6, -2)', '(6, −2)'], explanation: 'For y=a(x−p)²+q, the turning point is (p, q). Here p=6 and q=−2, so the turning point is (6, −2). ✓' },
          { label: 'Minimum or maximum?', correctAnswer: 'minimum', correctAnswers: ['minimum', 'min', 'Minimum', 'Min'], explanation: 'Since a=1>0, the parabola opens upward — the turning point is a minimum. ✓' },
        ]},
        { difficulty: 'Easy', question: 'Find the turning point of y=−4(x+3)²+7, and state whether it is a minimum or maximum.', answer: '', checkMode: 'auto', parts: [
          { label: 'Turning point', correctAnswer: '(-3,7)', correctAnswers: ['(-3,7)', '(−3,7)', '(-3, 7)', '(−3, 7)'], explanation: 'For y=a(x+p)²+q, the turning point is (−p, q). Here p=3 and q=7, so the turning point is (−3, 7). ✓' },
          { label: 'Minimum or maximum?', correctAnswer: 'maximum', correctAnswers: ['maximum', 'max', 'Maximum', 'Max'], explanation: 'Since a=−4<0, the parabola opens downward — the turning point is a maximum. ✓' },
        ]},
        { difficulty: 'Easy', question: 'Find the turning point of y=5(x−1)²−4.', answer: '(1,−4)', checkMode: 'auto', correctAnswer: '(1,-4)', correctAnswers: ['(1,-4)', '(1,−4)', '(1, -4)', '(1, −4)'], explanation: 'For y=a(x−p)²+q, the turning point is (p, q). Here p=1 and q=−4, so the turning point is (1, −4). ✓' },

        { difficulty: 'Easy', question: 'Find the vertical and horizontal asymptotes of y=3/(x−5)+2.', answer: '', checkMode: 'auto', parts: [
          { label: 'Vertical asymptote', correctAnswer: 'x=5', correctAnswers: ['x=5', 'x = 5'], explanation: 'The denominator equals zero when x−5=0, so the vertical asymptote is x=5. ✓' },
          { label: 'Horizontal asymptote', correctAnswer: 'y=2', correctAnswers: ['y=2', 'y = 2'], explanation: 'The horizontal asymptote is y=q=2. ✓' },
        ]},
        { difficulty: 'Easy-Medium', question: 'A hyperbola y=8/(x+4)−1 passes through a point with x=−2. Find the corresponding y-value.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Substitute x=−2: y=8/(−2+4)−1=8/2−1=4−1=3. ✓' },
        { difficulty: 'Easy-Medium', question: 'A hyperbola has vertical asymptote x=3 and horizontal asymptote y=1, and passes through (5,4), in the form y=a/(x−3)+1. Find a.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Substitute (5,4): 4=a/(5−3)+1. 3=a/2. a=6. ✓' },

        { difficulty: 'Easy-Medium', question: 'Compare y=4ˣ to y=4^(x−3)+2. State the horizontal asymptote and describe the shift.', answer: '', checkMode: 'auto', parts: [
          { label: 'Horizontal asymptote', correctAnswer: 'y=2', correctAnswers: ['y=2', 'y = 2'], explanation: 'The horizontal asymptote is y=q=2. ✓' },
          { label: 'Shift direction', correctAnswer: '3 units right', correctAnswers: ['3 units right', 'shifts 3 units to the right', 'right 3 units', '3 units to the right'], explanation: 'Since p=−3 inside the exponent (written as x−3), the graph shifts 3 units to the right. ✓' },
        ]},
        { difficulty: 'Easy-Medium', question: 'Find the y-intercept of y=4·2ˣ−5.', answer: '−1', checkMode: 'auto', correctAnswer: '-1', correctAnswers: ['-1', '−1'], explanation: 'Substitute x=0: y=4·2⁰−5=4(1)−5=4−5=−1 (since 2⁰=1). ✓' },
        { difficulty: 'Medium', question: 'An exponential graph passes through (0,10) with horizontal asymptote y=−2, in the form y=a·4ˣ−2. Find a.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Substitute (0,10): 10=a·4⁰−2=a−2 (since 4⁰=1). So a=10+2=12. ✓' },

        { difficulty: 'Medium', question: 'An exponential graph of the form y=a·bˣ−3 passes through (0,1) and (1,5). Find a and b.', answer: '', checkMode: 'auto', parts: [
          { label: 'Value of a', correctAnswer: '4', correctAnswers: ['4'], explanation: 'Substitute (0,1): 1=a·b⁰−3=a−3 (since b⁰=1). So a=1+3=4. ✓' },
          { label: 'Value of b', correctAnswer: '2', correctAnswers: ['2'], explanation: 'Substitute (1,5) with a=4: 5=4b−3. 8=4b. b=2. ✓' },
        ]},
        { difficulty: 'Medium', question: 'A parabola has the same shape as y=x² with turning point (5,−3). Write its equation.', answer: 'y=(x−5)²−3', checkMode: 'auto', correctAnswer: 'y=(x-5)²-3', correctAnswers: ['y=(x-5)²-3', 'y=(x−5)²−3', 'y=(x-5)^2-3'], explanation: 'Turning point (5,−3) gives p=5 and q=−3. Since a=1 (same shape as y=x²): y=(x−5)²−3. ✓' },
        { difficulty: 'Medium', question: 'A parabola in the form y=a(x+1)²+2 has turning point (−1,2) and passes through (1,10). Find a.', answer: '2', checkMode: 'auto', correctAnswer: '2', explanation: 'Substitute (1,10): 10=a(1+1)²+2=4a+2. 8=4a. a=2. ✓' },
        { difficulty: 'Medium', question: 'A hyperbola has asymptotes x=−4 and y=1, and passes through (−2,4), in the form y=a/(x+4)+1. Find a.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Substitute (−2,4): 4=a/(−2+4)+1. 3=a/2. a=6. ✓' },

        { difficulty: 'Medium', question: 'For f(x)=x², calculate the average gradient between x=−3 and x=0.', answer: '−3', checkMode: 'auto', correctAnswer: '-3', correctAnswers: ['-3', '−3'], explanation: 'Average gradient = (f(0)−f(−3))/(0−(−3)) = (0−9)/3 = −9/3 = −3. ✓' },
        { difficulty: 'Medium', question: 'For f(x)=x²−1, calculate the average gradient between x=1 and x=3.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'Average gradient = (f(3)−f(1))/(3−1) = (8−0)/2 = 8/2 = 4. ✓' },
        { difficulty: 'Medium-Hard', question: 'For f(x)=2x²−5, calculate the average gradient between x=−2 and x=1.', answer: '−2', checkMode: 'auto', correctAnswer: '-2', correctAnswers: ['-2', '−2'], explanation: 'Average gradient = (f(1)−f(−2))/(1−(−2)) = (−3−3)/3 = −6/3 = −2. ✓' },
        { difficulty: 'Medium-Hard', question: 'For f(x)=−x²+5x, calculate the average gradient between x=0 and x=4.', answer: '1', checkMode: 'auto', correctAnswer: '1', explanation: 'Average gradient = (f(4)−f(0))/(4−0) = (4−0)/4 = 4/4 = 1. ✓' },

        { difficulty: 'Hard', question: 'A hyperbola is shown on a set of axes with vertical asymptote x=4, horizontal asymptote y=−2, and passing through the point (6,1), in the form y=a/(x−4)−2. Using the diagram, find a and write the full equation.', answer: 'Substitute (6,1): 1=a/(6−4)−2. 3=a/2. a=6. Equation: y=6/(x−4)−2.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#374151" stroke-width="1.5"/><text x="210" y="80" font-size="11" fill="#374151">x</text><line x1="62" y1="2" x2="62" y2="218" stroke="#374151" stroke-width="1.5"/><text x="68" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="110" x2="203.12" y2="110" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="156.08" y="104" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = -2</text><line x1="110" y1="203.12" x2="110" y2="16.88" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="116" y="16" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">x = 4</text><path d="M119.12,15.26 L120.8,30 L122.48,40.77 L124.16,48.98 L125.84,55.45 L127.52,60.68 L129.2,65 L130.88,68.62 L132.56,71.7 L134.24,74.36 L135.92,76.67 L137.6,78.7 L139.28,80.49 L140.96,82.09 L142.64,83.53 L144.32,84.83 L146,86 L147.68,87.07 L149.36,88.05 L151.04,88.95 L152.72,89.78 L154.4,90.54 L156.08,91.25 L157.76,91.91 L159.44,92.52 L161.12,93.1 L162.8,93.64 L164.48,94.14 L166.16,94.62 L167.84,95.06 L169.52,95.48 L171.2,95.88 L172.88,96.26 L174.56,96.62 L176.24,96.96 L177.92,97.28 L179.6,97.59 L181.28,97.88 L182.96,98.16 L184.64,98.42 L186.32,98.68 L188,98.92 L189.68,99.16 L191.36,99.38 L193.04,99.6 L194.72,99.8 L196.4,100 L198.08,100.19 L199.76,100.37 L201.44,100.55 L203.12,100.72 L204.8,100.89 L206.48,101.04 L208.16,101.2 L209.84,101.35 L211.52,101.49 L213.2,101.63 L214.88,101.76 L216.56,101.89 L218.24,102.02 L219.92,102.14 L221.6,102.26 L223.28,102.37 L224.96,102.48 L226.64,102.59 L228.32,102.7 L230,102.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M100.88,204.74 L99.2,190 L97.52,179.23 L95.84,171.02 L94.16,164.55 L92.48,159.32 L90.8,155 L89.12,151.38 L87.44,148.3 L85.76,145.64 L84.08,143.33 L82.4,141.3 L80.72,139.51 L79.04,137.91 L77.36,136.47 L75.68,135.17 L74,134 L72.32,132.93 L70.64,131.95 L68.96,131.05 L67.28,130.22 L65.6,129.46 L63.92,128.75 L62.24,128.09 L60.56,127.48 L58.88,126.9 L57.2,126.36 L55.52,125.86 L53.84,125.38 L52.16,124.94 L50.48,124.52 L48.8,124.12 L47.12,123.74 L45.44,123.38 L43.76,123.04 L42.08,122.72 L40.4,122.41 L38.72,122.12 L37.04,121.84 L35.36,121.58 L33.68,121.32 L32,121.08 L30.32,120.84 L28.64,120.62 L26.96,120.4 L25.28,120.2 L23.6,120 L21.92,119.81 L20.24,119.63 L18.56,119.45 L16.88,119.28 L15.2,119.11 L13.52,118.96 L11.84,118.8 L10.16,118.65 L8.48,118.51 L6.8,118.37 L5.12,118.24 L3.44,118.11 L1.76,117.98 L0.08,117.86 L-1.6,117.74 L-3.28,117.63 L-4.96,117.52 L-6.64,117.41 L-8.32,117.3 L-10,117.2" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="134" cy="74" r="3.5" fill="#2563eb"/><text x="141" y="66" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(6, 1)</text></svg>' },
        { difficulty: 'Hard', question: 'Thabo says that if a parabola opens downward, its average gradient between any two points must always be negative. Use f(x)=−x²+5x between x=0 and x=4 to check his claim, and comment on whether he is correct in general.', answer: 'For f(x)=−x²+5x (which opens downward since a=−1<0), the average gradient between x=0 and x=4 is (4−0)/4=1, which is positive. This disproves his claim — even a downward-opening parabola can have a positive average gradient over an interval where the function is still increasing overall (before reaching its turning point).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A parabola is shown on a set of axes with turning point (3,2), passing through the point (5,10), in the form y=a(x−3)²+2. Using the diagram, find a and write the full equation.', answer: 'Substitute (5,10): 10=a(5−3)²+2. 8=4a. a=2. Equation: y=2(x−3)²+2.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="2" x2="20" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="2" x2="50" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="80" y1="2" x2="80" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="140" y1="2" x2="140" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="170" y1="2" x2="170" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="2" x2="200" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="190" x2="218" y2="190" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="160" x2="218" y2="160" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="130" x2="218" y2="130" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="100" x2="218" y2="100" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="70" x2="218" y2="70" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="40" x2="218" y2="40" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="130" x2="218" y2="130" stroke="#374151" stroke-width="1.5"/><text x="210" y="124" font-size="11" fill="#374151">x</text><line x1="80" y1="2" x2="80" y2="218" stroke="#374151" stroke-width="1.5"/><text x="86" y="12" font-size="11" fill="#374151">y</text><path d="M88,13.2 L90.75,35.89 L93.5,55.55 L96.25,72.19 L99,85.8 L101.75,96.39 L104.5,103.95 L107.25,108.49 L110,110 L112.75,108.49 L115.5,103.95 L118.25,96.39 L121,85.8 L123.75,72.19 L126.5,55.55 L129.25,35.89 L132,13.2" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="110" r="3.5" fill="#2563eb"/><text x="116" y="126" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(3, 2)</text><circle cx="130" cy="30" r="3.5" fill="#2563eb"/><text x="137" y="22" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(5, 10)</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply Grade 11 function transformations and average gradient to a wide range of problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
