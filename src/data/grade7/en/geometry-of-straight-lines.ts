import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (angle roles) ────────────────────────────────────────────
// blue   → acute / given angle / parallel lines / corresponding angles (#2563eb)
// green  → right / vertically opposite / corresponding angles           (#16a34a)
// orange → obtuse / co-interior angles                                  (#ea580c)
// red    → reflex / unknown angle / transversal                         (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Geometry of Straight Lines',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — TYPES OF ANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'types-of-angles',
      title: 'Types of Angles',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">Angles are classified by their size. ${bl('Acute')} angles are less than 90°, ${gr('right')} angles are exactly 90°, ${or('obtuse')} angles are between 90° and 180°, straight angles are exactly 180°, and ${re('reflex')} angles are between 180° and 360°. We identify and name these angle types in diagrams.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('acute')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('right')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('obtuse')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('reflex')}</span>` +
        `</div>` +

        // ── Angle types grid ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Angle types</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Acute Angle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Less than 90°. A small, sharp angle.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Right Angle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Exactly 90°. Shown with a small square symbol in diagrams.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Obtuse Angle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Between 90° and 180°. Wider than a right angle.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Straight Angle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Exactly 180°. Forms a straight line.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Reflex Angle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Between 180° and 360°. Greater than a straight angle.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to classify an angle</p>` +
        `<p style="margin:0;color:#1e3a8a;">Compare the angle to 90° and 180°. Less than 90° → ${bl('acute')}. Exactly 90° → ${gr('right')}. Between 90° and 180° → ${or('obtuse')}. Exactly 180° → straight. More than 180° → ${re('reflex')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Classify an angle of 142°.',
          answer: `142° is ${or('obtuse')}`,
          steps: [
            `Compare 142° to the angle boundaries: 90° < 142° < 180°.`,
            `142° is between 90° and 180°, so it is ${or('obtuse')}.`,
          ],
        },
        {
          question: 'Classify an angle of 195°.',
          answer: `195° is ${re('reflex')}`,
          steps: [
            `Compare 195° to the angle boundaries: 195° > 180°.`,
            `195° is between 180° and 360°, so it is ${re('reflex')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Classify each angle.\na) 35°\nb) 90°\nc) 160°',
          answer: 'a) Acute (less than 90°)\nb) Right (exactly 90°)\nc) Obtuse (between 90° and 180°)',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'State the type of each angle.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 78° is a(n) ___ angle.',
              correctAnswer: 'acute',
              explanation: '78° is less than 90°, so it is an acute angle.',
            },
            {
              label: 'b) 215° is a(n) ___ angle.',
              correctAnswer: 'reflex',
              explanation: '215° is between 180° and 360°, so it is a reflex angle.',
            },
            {
              label: 'c) 113° is a(n) ___ angle.',
              correctAnswer: 'obtuse',
              explanation: '113° is between 90° and 180°, so it is an obtuse angle.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'An angle is 40° more than a right angle.\na) What is the size of the angle?\nb) What type of angle is it?\nc) What type of angle would be formed by the remaining part of a full revolution (360°) after removing this angle?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Size of the angle',
              correctAnswer: '130',
              explanation: 'Right angle = 90°. 90° + 40° = 130°.',
            },
            {
              label: 'b) Type of angle',
              correctAnswer: 'obtuse',
              explanation: '130° is between 90° and 180°, so it is an obtuse angle.',
            },
            {
              label: 'c) Type of remaining angle (360° − 130°)',
              correctAnswer: 'reflex',
              explanation: '360° − 130° = 230°. Since 230° is between 180° and 360°, it is a reflex angle.',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video classifying acute right obtuse straight and reflex angles with examples from diagrams" />',

      diagramPlaceholder:
        'Five angle diagrams — acute, right, obtuse, straight and reflex — each drawn with two rays from a vertex and the classified angle marked and colour-coded to match the colour key.',

      diagramSvg:
        '<svg viewBox="0 0 460 160" xmlns="http://www.w3.org/2000/svg">' +
        '<g transform="translate(48,112)">' +
        '<line x1="0" y1="0" x2="40" y2="0" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="0" y1="0" x2="30.64" y2="-25.71" stroke="#0f1f3d" stroke-width="2"/>' +
        '<path d="M 18,0 A 18,18 0 0 0 13.79,-11.57" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<circle cx="0" cy="0" r="2" fill="#0f1f3d"/>' +
        '<text x="26" y="-15" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">40°</text>' +
        '<text x="0" y="38" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">Acute</text>' +
        '</g>' +
        '<g transform="translate(140,112)">' +
        '<line x1="0" y1="0" x2="40" y2="0" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="0" y1="0" x2="0" y2="-40" stroke="#0f1f3d" stroke-width="2"/>' +
        '<polyline points="14,0 14,-14 0,-14" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<circle cx="0" cy="0" r="2" fill="#0f1f3d"/>' +
        '<text x="0" y="38" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">Right</text>' +
        '</g>' +
        '<g transform="translate(232,112)">' +
        '<line x1="0" y1="0" x2="40" y2="0" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="0" y1="0" x2="-25.71" y2="-30.64" stroke="#0f1f3d" stroke-width="2"/>' +
        '<path d="M 18,0 A 18,18 0 0 0 -11.57,-13.79" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<circle cx="0" cy="0" r="2" fill="#0f1f3d"/>' +
        '<text x="6" y="-22" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">130°</text>' +
        '<text x="0" y="38" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">Obtuse</text>' +
        '</g>' +
        '<g transform="translate(324,112)">' +
        '<line x1="0" y1="0" x2="40" y2="0" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="0" y1="0" x2="-40" y2="0" stroke="#0f1f3d" stroke-width="2"/>' +
        '<path d="M 18,0 A 18,18 0 0 1 -18,0" fill="none" stroke="#374151" stroke-width="2"/>' +
        '<circle cx="0" cy="0" r="2" fill="#0f1f3d"/>' +
        '<text x="0" y="-24" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">180°</text>' +
        '<text x="0" y="38" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Straight</text>' +
        '</g>' +
        '<g transform="translate(416,112)">' +
        '<line x1="0" y1="0" x2="40" y2="0" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="0" y1="0" x2="-13.68" y2="-37.59" stroke="#0f1f3d" stroke-width="2"/>' +
        '<path d="M 18,0 A 18,18 1 1 1 -6.16,-16.92" fill="none" stroke="#dc2626" stroke-width="2"/>' +
        '<circle cx="0" cy="0" r="2" fill="#0f1f3d"/>' +
        '<text x="0" y="24" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">250°</text>' +
        '<text x="0" y="42" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">Reflex</text>' +
        '</g>' +
        '</svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — ANGLES ON A STRAIGHT LINE AND VERTICALLY OPPOSITE ANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'straight-line-vertically-opposite',
      title: 'Angles on a Straight Line and Vertically Opposite Angles',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">Angles on a straight line add up to <strong>180°</strong> — these are called <strong>supplementary angles</strong>. When two straight lines cross, they form <strong>vertically opposite angles</strong> which are always equal. We use these facts to calculate unknown angles in diagrams.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('given angle')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('unknown angle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vertically opposite')}</span>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key facts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Angles on a straight line</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">All angles that share a common point on a straight line add up to <strong>180°</strong>.</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Formula: ${bl('a')} + ${re('b')} = 180°</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Vertically opposite angles</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">When two lines intersect, the angles directly across from each other are equal.</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Rule: ${bl('a')} = ${gr('c')} and ${re('b')} = ${re('d')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategy for finding unknown angles</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Step 1</strong> — Identify whether the angles are on a straight line or vertically opposite.<br><strong>Step 2</strong> — Set up the equation using 180° (straight line) or equality (vertically opposite).<br><strong>Step 3</strong> — Solve for the ${re('unknown angle')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Two angles on a straight line are 65° and x. Find x.',
          answer: `${re('x')} = 115°`,
          steps: [
            `Angles on a straight line add up to 180°: ${bl('65°')} + ${re('x')} = 180°`,
            `Solve for ${re('x')}: ${re('x')} = 180° − ${bl('65°')} = ${re('115°')}`,
            `<strong>Answer:</strong> ${re('x')} = 115° ✓`,
          ],
        },
        {
          question: 'Two lines cross, forming an angle of 70°. Find the vertically opposite angle and the two adjacent angles.',
          answer: `Vertically opposite angle = ${gr('70°')}; each adjacent angle = ${re('110°')}`,
          steps: [
            `The ${gr('vertically opposite')} angle is equal to the ${bl('given angle')}: ${gr('70°')} = ${bl('70°')} (vertically opposite angles are equal).`,
            `The adjacent angles are on a straight line with the ${bl('given angle')}: ${re('adjacent')} = 180° − ${bl('70°')} = ${re('110°')}`,
            `There are two adjacent angles (one on each side), and both equal ${re('110°')}.`,
            `<strong>Check:</strong> ${bl('70°')} + ${re('110°')} = 180° ✓ and ${gr('70°')} + ${re('110°')} = 180° ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Two angles on a straight line are 48° and x. Find x.',
          answer: '132',
          checkMode: 'auto',
          correctAnswer: '132',
          explanation: 'Angles on a straight line add up to 180°.\nx = 180° − 48° = 132° ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Two straight lines intersect. One angle formed is 55°.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the vertically opposite angle.',
              correctAnswer: '55',
              explanation: 'Vertically opposite angles are equal: 55°.',
            },
            {
              label: 'b) Find the two adjacent angles.',
              correctAnswer: '125',
              explanation: 'Adjacent angles are supplementary: 180° − 55° = 125°. Both adjacent angles are 125°.',
            },
            {
              label: 'c) What do all four angles add up to?',
              correctAnswer: '360',
              explanation: '55° + 125° + 55° + 125° = 360°. Angles around a point always add up to 360°.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Three angles on a straight line are 3x, 2x, and 25°. Find the value of x and state the size of each angle.',
          answer: 'x = 31°\n3x = 93°, 2x = 62°, 25°\nCheck: 93 + 62 + 25 = 180 ✓',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find unknown angles using angles on a straight line 180 degrees and vertically opposite angles" />',

      diagramPlaceholder:
        'Two diagrams: one showing angles a and b on a straight line adding to 180°, with the given angle in blue and the unknown angle in red; one showing two intersecting lines with the 70° vertically opposite angles highlighted in green and an adjacent 110° angle in red.',

      diagramSvg:
        '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="80" y="14" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Angles on a straight line</text>' +
        '<line x1="10" y1="80" x2="150" y2="80" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="80" y1="80" x2="101.1" y2="34.7" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<path d="M 98,80 A 18,18 0 0 0 87.6,63.7" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<text x="97" y="68" font-size="11" font-weight="700" fill="#2563eb">a</text>' +
        '<path d="M 89.3,60.1 A 22,22 0 0 0 58,80" fill="none" stroke="#dc2626" stroke-width="2"/>' +
        '<text x="66" y="68" font-size="11" font-weight="700" fill="#dc2626">b</text>' +
        '<circle cx="80" cy="80" r="2.5" fill="#0f1f3d"/>' +
        '<text x="80" y="98" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">a + b = 180°</text>' +
        '<text x="230" y="14" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Vertically opposite angles</text>' +
        '<line x1="170" y1="80" x2="290" y2="80" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="212.9" y1="127" x2="247.1" y2="33" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<path d="M 250,80 A 20,20 0 0 0 236.8,61.2" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<text x="248" y="68" font-size="10" font-weight="700" fill="#2563eb">70°</text>' +
        '<path d="M 238.9,55.6 A 26,26 0 0 0 204,80" fill="none" stroke="#dc2626" stroke-width="2"/>' +
        '<text x="215" y="63" font-size="10" font-weight="700" fill="#dc2626">110°</text>' +
        '<path d="M 210,80 A 20,20 0 0 0 223.2,98.8" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<text x="209" y="93" font-size="10" font-weight="700" fill="#16a34a">70°</text>' +
        '<circle cx="230" cy="80" r="2.5" fill="#0f1f3d"/>' +
        '</svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PARALLEL LINES AND TRANSVERSALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'parallel-lines-transversals',
      title: 'Parallel Lines and Transversals',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>transversal</strong> is a line that crosses two parallel lines. This creates pairs of equal angles — <strong>corresponding angles</strong> (same position at each intersection) and <strong>alternate angles</strong> (opposite sides of the transversal, between the parallel lines). <strong>Co-interior angles</strong>, on the same side between the parallel lines, are supplementary (add up to 180°).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('parallel lines')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('transversal')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('corresponding angles')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('co-interior angles')}</span>` +
        `</div>` +

        // ── Three angle relationships ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Angle relationships with parallel lines</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Corresponding angles')} — same position at each intersection (one above and one below the parallel lines, on the same side of the transversal). They are <strong>equal</strong>.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Alternate angles</strong> — on opposite sides of the ${re('transversal')}, between the ${bl('parallel lines')}. They are <strong>equal</strong>. Also called Z-angles because of their shape.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Co-interior angles')} — on the same side of the ${re('transversal')}, between the ${bl('parallel lines')}. They add up to <strong>180°</strong> (supplementary). Also called C-angles or same-side interior angles.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to identify the relationship</p>` +
        `<p style="margin:0;color:#1e3a8a;">First confirm the lines are ${bl('parallel')} (marked with arrows). Then look at the position of the angles relative to the ${re('transversal')}: same side and same position → ${gr('corresponding')} (equal); opposite sides between the parallels → alternate (equal); same side between the parallels → ${or('co-interior')} (sum = 180°).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Two parallel lines are cut by a transversal. One corresponding angle is 75°. Find the other corresponding angle.',
          answer: `The other ${gr('corresponding angle')} is ${gr('75°')}`,
          steps: [
            `Confirm the lines are ${bl('parallel')} and that the angles are in the same position at each intersection — they are ${gr('corresponding angles')}.`,
            `${gr('Corresponding angles')} are equal when lines are parallel: the other angle = ${gr('75°')}.`,
            `<strong>Answer:</strong> The corresponding angle is ${gr('75°')} ✓`,
          ],
        },
        {
          question: 'A co-interior angle is 110°. Find the other co-interior angle.',
          answer: `The other ${or('co-interior angle')} is ${or('70°')}`,
          steps: [
            `Confirm the lines are ${bl('parallel')} and that both angles are on the same side of the ${re('transversal')}, between the parallel lines — they are ${or('co-interior angles')}.`,
            `${or('Co-interior angles')} are supplementary: they add up to 180°.`,
            `Other angle = 180° − ${or('110°')} = ${or('70°')}`,
            `<strong>Check:</strong> ${or('110°')} + ${or('70°')} = 180° ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Two parallel lines are cut by a transversal. An alternate angle is 65°. Find the other alternate angle.',
          answer: '65',
          checkMode: 'auto',
          correctAnswer: '65',
          explanation: 'Alternate angles are equal when lines are parallel: 65° = 65° ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Two parallel lines are cut by a transversal. One of the angles formed is 48°.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the corresponding angle.',
              correctAnswer: '48',
              explanation: 'Corresponding angles are equal: 48°.',
            },
            {
              label: 'b) Find the alternate angle.',
              correctAnswer: '48',
              explanation: 'Alternate angles are equal: 48°.',
            },
            {
              label: 'c) Find the co-interior angle on the same side.',
              correctAnswer: '132',
              explanation: 'Co-interior angles are supplementary: 180° − 48° = 132°.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal. One co-interior angle is (2x + 10)° and the other is (3x − 20)°.\n\na) Write an equation using the co-interior angle property.\nb) Solve for x.\nc) Find the size of each co-interior angle.\nd) Find the corresponding angle of the smaller co-interior angle.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Equation',
              correctAnswer: '2x+10+3x-20=180',
              correctAnswers: ['2x+10+3x-20=180', '5x-10=180', '(2x+10)+(3x-20)=180'],
              explanation: 'Co-interior angles are supplementary: (2x + 10) + (3x − 20) = 180.',
            },
            {
              label: 'b) Value of x',
              correctAnswer: '38',
              explanation: '5x − 10 = 180 → 5x = 190 → x = 38.',
            },
            {
              label: 'c) Each co-interior angle',
              correctAnswer: '86 and 94',
              correctAnswers: ['86 and 94', '86° and 94°', '94 and 86'],
              explanation: '2(38) + 10 = 86°; 3(38) − 20 = 94°. Check: 86 + 94 = 180 ✓',
            },
            {
              label: 'd) Corresponding angle of the smaller co-interior angle (86°)',
              correctAnswer: '86',
              explanation: 'Corresponding angles are equal: 86°.',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video identifying corresponding alternate and co-interior angles formed by a transversal cutting two parallel lines" />',

      diagramPlaceholder:
        'Two parallel lines cut by a transversal, with the parallel lines in blue, the transversal in red, one pair of corresponding angles highlighted green and one pair of co-interior angles highlighted orange.',

      diagramSvg:
        '<svg viewBox="0 0 240 175" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="20" y1="50" x2="220" y2="50" stroke="#2563eb" stroke-width="2.2"/>' +
        '<polyline points="135,44 141,50 135,56" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="20" y1="130" x2="220" y2="130" stroke="#2563eb" stroke-width="2.2"/>' +
        '<polyline points="135,124 141,130 135,136" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="40" y1="20" x2="200" y2="160" stroke="#dc2626" stroke-width="2.2"/>' +
        '<path d="M 89.34,63.17 A 20,20 0 0 1 54.29,50" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<path d="M 145.71,130 A 20,20 0 0 1 150.66,116.83" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<path d="M 59.24,36.83 A 20,20 0 0 1 94.29,50" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<path d="M 150.66,116.83 A 20,20 0 0 1 185.71,130" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<circle cx="74.29" cy="50" r="2.5" fill="#0f1f3d"/>' +
        '<circle cx="165.71" cy="130" r="2.5" fill="#0f1f3d"/>' +
        '<text x="30" y="38" font-size="9" font-weight="700" fill="#ea580c">co-interior</text>' +
        '<text x="150" y="112" font-size="9" font-weight="700" fill="#16a34a">corresponding</text>' +
        '</svg>',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — classify 35° ──────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Classify an angle of 35°.',
      answer: 'acute',
      checkMode: 'auto',
      correctAnswer: 'acute',
      explanation: '35° is less than 90°, so it is an acute angle.',
    },

    // ── Q2 Easy — classify 180° ─────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Classify an angle of 180°.',
      answer: 'straight',
      checkMode: 'auto',
      correctAnswer: 'straight',
      explanation: '180° forms a straight line, so it is a straight angle.',
    },

    // ── Q3 Medium — classify 250° ───────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Classify an angle of 250°.',
      answer: 'reflex',
      checkMode: 'auto',
      correctAnswer: 'reflex',
      explanation: '250° is between 180° and 360°, so it is a reflex angle.',
    },

    // ── Q4 Hard — Sipho: 90° is acute ──────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says a 90° angle is acute because it is small. Is he correct? Explain.',
      answer: 'No — exactly 90° is classified as a right angle, not acute. Acute angles must be strictly less than 90°.',
      checkMode: 'self',
    },

    // ── Q5 Easy — angles on a straight line ────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Two angles on a straight line are 110° and x. Find x.',
      answer: '70°',
      checkMode: 'auto',
      correctAnswer: '70',
      explanation: 'Angles on a straight line add up to 180°. x = 180° − 110° = 70° ✓',
    },

    // ── Q6 Medium — vertically opposite ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Two lines cross forming an angle of 55°. Find the vertically opposite angle.',
      answer: '55°',
      checkMode: 'auto',
      correctAnswer: '55',
      explanation: 'Vertically opposite angles are equal: 55° ✓',
    },

    // ── Q7 Hard — Lerato: vertically opposite are supplementary ────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says vertically opposite angles are always supplementary. Is she correct? Explain.',
      answer: 'No — vertically opposite angles are always equal, not supplementary. Adjacent angles on the line are supplementary.',
      checkMode: 'self',
    },

    // ── Q8 Easy — corresponding angles ─────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Two parallel lines are cut by a transversal. One corresponding angle is 60°. Find the other corresponding angle.',
      answer: '60°',
      checkMode: 'auto',
      correctAnswer: '60',
      explanation: 'Corresponding angles are equal when lines are parallel: 60° ✓',
    },

    // ── Q9 Medium — co-interior angles ─────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A co-interior angle is 95°. Find the other co-interior angle.',
      answer: '85°',
      checkMode: 'auto',
      correctAnswer: '85',
      explanation: 'Co-interior angles add up to 180°. Other angle = 180° − 95° = 85° ✓',
    },

    // ── Q10 Hard — Thabo: alternate angles are supplementary ────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says alternate angles between parallel lines are always supplementary. Is he correct? Explain.',
      answer: 'No — alternate angles are always equal, not supplementary.',
      checkMode: 'self',
    },

    // ── Q11 Medium — angles around a point ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Four angles meet at a point — 90°, 85°, 95° and x. Find x.',
      answer: '90°',
      checkMode: 'auto',
      correctAnswer: '90',
      explanation: 'Angles around a point add up to 360°. x = 360° − 90° − 85° − 95° = 90° ✓',
    },

    // ── Q12 Hard — Amahle: angles on a straight line in ratio 2:3 ──────────
    {
      difficulty: 'Hard',
      question: 'Amahle finds that two angles on a straight line are in the ratio 2:3. Find each angle.',
      answer: 'Total parts = 5. One part = 180 ÷ 5 = 36. Angles: 72° and 108°.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered geometry of straight lines.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 18, message: 'Outstanding! A perfect score — you have completely mastered the geometry of straight lines for Grade 7. Keep it up!' },
    { minScore: 14, message: 'Excellent work! You have a very strong grasp of angle geometry. Review any missed parts and you will have it perfect.' },
    { minScore: 10, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 6, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],

  // ═══════════════════════════════════════════════════════════════════════
  // PRACTICE SETS — 3 parallel forms, 20 Qs each
  // Block layout (same relative position in every set):
  //   0-2   Angles on a straight line (supplementary, sum to 180°)
  //   3-6   Angles around a point (sum to 360°) and vertically opposite angles
  //   7-8   Complementary angles (sum to 90°)
  //   9-12  Corresponding & alternate angles with parallel lines
  //   13-16 Co-interior (allied) angles with parallel lines
  //   17-19 Multi-step reasoning combining several angle relationships
  // ═══════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // ── Block 1: Angles on a straight line (0-2) ──────────────────────
        {
          difficulty: 'Easy',
          question: 'In the diagram, angles A and B lie on a straight line, as shown. Angle A = 125°. Find the size of angle B.',
          checkMode: 'auto',
          correctAnswer: '55',
          correctAnswers: ['55', '55°'],
          explanation: 'Angles on a straight line are supplementary — they add up to 180°.\nAngle B = 180° − 125° = 55°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="150" x2="150" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 60 150 A 55 55 0 0 1 129 100" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="60" y="105" font-size="15" font-weight="700" fill="#2563eb">125°</text><path d="M 145 150 A 32 32 0 0 0 132 121" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="150" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="150" r="2.5" fill="#0f1f3d"/><text x="10" y="145" font-size="12" fill="#374151">A</text><text x="195" y="145" font-size="12" fill="#374151">B</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Three angles meet on a straight line, as shown. They measure 42°, 58° and x. Find the value of x.',
          checkMode: 'auto',
          correctAnswer: '80',
          correctAnswers: ['80', '80°'],
          explanation: 'Angles on a straight line add up to 180°.\nx = 180° − 42° − 58° = 180° − 100° = 80°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="150" x2="210" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="150" x2="163" y2="47" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="150" x2="55" y2="35" stroke="#0f1f3d" stroke-width="2"/><path d="M 138 150 A 38 38 0 0 0 124 117" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="140" y="132" font-size="14" font-weight="700" fill="#2563eb">42°</text><path d="M 72 150 A 38 38 0 0 1 92 116" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="50" y="132" font-size="14" font-weight="700" fill="#2563eb">58°</text><path d="M 118 116 A 38 38 0 0 1 122 116" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="105" y="100" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="100" cy="150" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two angles on a straight line are in the ratio 2 : 3. Find the size of each angle.',
          checkMode: 'auto',
          correctAnswer: '72 and 108',
          correctAnswers: ['72 and 108', '72° and 108°', '108 and 72', '108° and 72°'],
          explanation: 'Angles on a straight line add up to 180°. Total parts = 2 + 3 = 5.\nOne part = 180° ÷ 5 = 36°.\nAngles: 2 × 36° = 72° and 3 × 36° = 108°. Check: 72° + 108° = 180° ✓',
        },

        // ── Block 2: Angles around a point & vertically opposite (3-6) ────
        {
          difficulty: 'Easy',
          question: 'Two straight lines intersect at a point, as shown. One of the angles formed is 47°. Find the size of the angle vertically opposite to it.',
          checkMode: 'auto',
          correctAnswer: '47',
          correctAnswers: ['47', '47°'],
          explanation: 'Vertically opposite angles are always equal, since they are formed by the same pair of intersecting lines.\nVertically opposite angle = 47°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="30" x2="45" y2="160" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 40 40 0 0 1 133 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="15" font-weight="700" fill="#2563eb">47°</text><path d="M 110 135 A 40 40 0 0 1 87 118" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="95" y="150" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two straight lines intersect at a point. One of the angles formed is 47°. Find the size of the two angles that are adjacent to it on the straight line.',
          checkMode: 'auto',
          correctAnswer: '133',
          correctAnswers: ['133', '133°'],
          explanation: 'Adjacent angles on a straight line are supplementary.\nAdjacent angle = 180° − 47° = 133°. Both adjacent angles equal 133° (they are vertically opposite each other too).',
        },
        {
          difficulty: 'Medium',
          question: 'Four angles meet at a point, as shown. They measure 90°, 85°, 95° and x. Find the value of x.',
          checkMode: 'auto',
          correctAnswer: '90',
          correctAnswers: ['90', '90°'],
          explanation: 'Angles around a point add up to 360°.\nx = 360° − 90° − 85° − 95° = 360° − 270° = 90°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="95" x2="200" y2="95" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="30" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="45" y2="155" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 95 A 30 30 0 0 0 110 65" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="122" y="80" font-size="12" font-weight="700" fill="#2563eb">90°</text><path d="M 110 65 A 30 30 0 0 0 60 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="65" y="58" font-size="12" font-weight="700" fill="#2563eb">85°</text><path d="M 60 72 A 30 30 0 0 0 70 121" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="40" y="100" font-size="12" font-weight="700" fill="#2563eb">95°</text><path d="M 70 121 A 30 30 0 0 0 140 95" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="98" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Six equal angles meet at a single point, splitting the full turn evenly. What is the size of each angle?',
          checkMode: 'auto',
          correctAnswer: '60',
          correctAnswers: ['60', '60°'],
          explanation: 'Angles around a point add up to 360°. With 6 equal angles, each is 360° ÷ 6 = 60°.',
        },

        // ── Block 3: Complementary angles (7-8) ────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Two angles are complementary. One of the angles is 34°. Find the size of the other angle.',
          checkMode: 'auto',
          correctAnswer: '56',
          correctAnswers: ['56', '56°'],
          explanation: 'Complementary angles add up to 90°.\nOther angle = 90° − 34° = 56°.',
        },
        {
          difficulty: 'Medium',
          question: 'Two complementary angles are equal to each other. Find the size of each angle.',
          checkMode: 'auto',
          correctAnswer: '45',
          correctAnswers: ['45', '45°'],
          explanation: 'Complementary angles add up to 90°. If the two angles are equal, each = 90° ÷ 2 = 45°.',
        },

        // ── Block 4: Corresponding & alternate angles (9-12) ───────────────
        {
          difficulty: 'Easy',
          question: 'Lines PQ and RS are parallel and are cut by a transversal, as shown. One angle formed is 73°. Find the size of its corresponding angle.',
          checkMode: 'auto',
          correctAnswer: '73',
          correctAnswers: ['73', '73°'],
          explanation: 'Corresponding angles formed by a transversal cutting parallel lines are equal.\nCorresponding angle = 73°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 95 55 A 26 26 0 0 1 108 34" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="98" y="40" font-size="14" font-weight="700" fill="#2563eb">73°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/><text x="10" y="45" font-size="11" fill="#374151">P</text><text x="195" y="45" font-size="11" fill="#374151">Q</text><text x="10" y="135" font-size="11" fill="#374151">R</text><text x="195" y="135" font-size="11" fill="#374151">S</text></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Two parallel lines are cut by a transversal, as shown. One angle formed is 108°. Find the size of its alternate angle.',
          checkMode: 'auto',
          correctAnswer: '108',
          correctAnswers: ['108', '108°'],
          explanation: 'Alternate angles formed by a transversal cutting parallel lines are equal.\nAlternate angle = 108°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">108°</text><path d="M 141 145 A 28 28 0 0 0 124 122" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="118" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/><text x="10" y="45" font-size="11" fill="#374151">P</text><text x="195" y="45" font-size="11" fill="#374151">Q</text><text x="10" y="135" font-size="11" fill="#374151">R</text><text x="195" y="135" font-size="11" fill="#374151">S</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two parallel lines are cut by a transversal, as shown. One corresponding angle is 3x and the other corresponding angle is 63°. Find the value of x.',
          checkMode: 'auto',
          correctAnswer: '21',
          correctAnswers: ['21'],
          explanation: 'Corresponding angles are equal: 3x = 63°.\nx = 63° ÷ 3 = 21°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 95 55 A 26 26 0 0 1 108 34" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="90" y="40" font-size="14" font-weight="700" fill="#2563eb">3x°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="150" y="130" font-size="14" font-weight="700" fill="#2563eb">63°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Musa says: "If two parallel lines are cut by a transversal, an alternate angle and its matching corresponding angle can never be equal to each other." Is Musa correct? Explain, using a 55° angle as an example.',
          answer: 'No — Musa is incorrect. If one angle is 55°, both the corresponding angle and the alternate angle formed with it are also 55°, because corresponding angles are equal and alternate angles are equal. In fact, the corresponding angle and the alternate angle in this situation are equal to each other too (both 55°), since they are formed at the same intersection point on the second parallel line.',
          checkMode: 'self',
        },

        // ── Block 5: Co-interior (allied) angles (13-16) ───────────────────
        {
          difficulty: 'Easy',
          question: 'Two parallel lines are cut by a transversal, as shown. One co-interior angle is 115°. Find the size of the other co-interior angle.',
          checkMode: 'auto',
          correctAnswer: '65',
          correctAnswers: ['65', '65°'],
          explanation: 'Co-interior (allied) angles are supplementary — they add up to 180°.\nOther angle = 180° − 115° = 65°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">115°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/><text x="10" y="45" font-size="11" fill="#374151">P</text><text x="195" y="45" font-size="11" fill="#374151">Q</text><text x="10" y="135" font-size="11" fill="#374151">R</text><text x="195" y="135" font-size="11" fill="#374151">S</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'A ladder rests so that it forms a transversal across two parallel rungs of a shelf frame. The co-interior angle on one side is 72°. Find the co-interior angle on the same side of the transversal between the other pair.',
          checkMode: 'auto',
          correctAnswer: '108',
          correctAnswers: ['108', '108°'],
          explanation: 'Co-interior angles between parallel lines are supplementary.\nOther angle = 180° − 72° = 108°.',
        },
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal. One co-interior angle is (2x + 10)° and the other is (x + 20)°.\na) Write an equation using the co-interior angle property.\nb) Solve for x.\nc) Find the size of each co-interior angle.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Equation',
              correctAnswer: '2x+10+x+20=180',
              correctAnswers: ['2x+10+x+20=180', '3x+30=180', '(2x+10)+(x+20)=180'],
              explanation: 'Co-interior angles are supplementary: (2x + 10) + (x + 20) = 180.',
            },
            {
              label: 'b) Value of x',
              correctAnswer: '50',
              explanation: '3x + 30 = 180 → 3x = 150 → x = 50.',
            },
            {
              label: 'c) Each co-interior angle',
              correctAnswer: '110 and 70',
              correctAnswers: ['110 and 70', '110° and 70°', '70 and 110'],
              explanation: '2(50) + 10 = 110°; 50 + 20 = 70°. Check: 110° + 70° = 180° ✓',
            },
          ],
        },
        {
          difficulty: 'Medium',
          question: 'Palesa says: "Co-interior angles are always equal, just like corresponding angles." Is she correct? Use a co-interior angle of 99° as an example to explain.',
          answer: 'No — Palesa is incorrect. Co-interior (allied) angles are supplementary, not equal — they add up to 180°. If one co-interior angle is 99°, the other is 180° − 99° = 81°, not 99°. Corresponding angles are equal, but co-interior angles are not.',
          checkMode: 'self',
        },

        // ── Block 6: Multi-step reasoning (17-19) ───────────────────────────
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal, as shown. One angle formed where the transversal meets the first line is 115°. Find the co-interior angle on the second line, and then find the angle vertically opposite to that co-interior angle.',
          checkMode: 'auto',
          correctAnswer: '65',
          correctAnswers: ['65', '65°'],
          explanation: 'Step 1: The co-interior angle is supplementary to 115°: 180° − 115° = 65°.\nStep 2: The angle vertically opposite to this 65° angle is equal to it (vertically opposite angles are equal): 65°.\nFinal answer: 65°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">115°</text><path d="M 133 145 A 26 26 0 0 1 121 168" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="105" y="178" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Two straight lines intersect at point O, as shown. One of the angles formed, angle P, is 63°. Angle P and angle Q are vertically opposite. Angle Q and angle R lie together on a straight line. Find the size of angle R.',
          checkMode: 'auto',
          correctAnswer: '117',
          correctAnswers: ['117', '117°'],
          explanation: 'Step 1: Angle Q is vertically opposite angle P, so Q = 63° (vertically opposite angles are equal).\nStep 2: Q and R lie on a straight line, so Q + R = 180°.\nR = 180° − 63° = 117°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="25" x2="175" y2="165" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="25" x2="45" y2="165" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 40 40 0 0 1 133 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">P = 63°</text><path d="M 110 135 A 40 40 0 0 1 87 118" fill="none" stroke="#374151" stroke-width="1.5"/><text x="95" y="150" font-size="12" font-weight="700" fill="#374151">Q</text><path d="M 87 118 A 40 40 0 0 1 70 95" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="40" y="130" font-size="15" font-weight="700" fill="#ea580c">R = ?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'A roof truss has two rafters meeting a horizontal beam, forming co-interior angles on either side of a supporting strut that acts as a transversal between two parallel rafter lines. One co-interior angle is 3x and the other is (2x + 10)°.\na) Write an equation using the co-interior angle property.\nb) Solve for x.\nc) Find the size of each angle.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Equation',
              correctAnswer: '3x+2x+10=180',
              correctAnswers: ['3x+2x+10=180', '5x+10=180', '3x+(2x+10)=180'],
              explanation: 'Co-interior angles are supplementary: 3x + (2x + 10) = 180.',
            },
            {
              label: 'b) Value of x',
              correctAnswer: '34',
              explanation: '5x + 10 = 180 → 5x = 170 → x = 34.',
            },
            {
              label: 'c) Each angle',
              correctAnswer: '102 and 78',
              correctAnswers: ['102 and 78', '102° and 78°', '78 and 102'],
              explanation: '3(34) = 102°; 2(34) + 10 = 78°. Check: 102° + 78° = 180° ✓',
            },
          ],
        },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered straight-line, point, complementary and parallel-line angle relationships.' },
        { minScore: 14, message: 'Excellent work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // ── Block 1: Angles on a straight line (0-2) ──────────────────────
        {
          difficulty: 'Easy',
          question: 'In the diagram, angles C and D lie on a straight line, as shown. Angle C = 97°. Find the size of angle D.',
          checkMode: 'auto',
          correctAnswer: '83',
          correctAnswers: ['83', '83°'],
          explanation: 'Angles on a straight line are supplementary — they add up to 180°.\nAngle D = 180° − 97° = 83°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="150" x2="119" y2="25" stroke="#0f1f3d" stroke-width="2"/><path d="M 65 150 A 50 50 0 0 1 111 100" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="65" y="110" font-size="15" font-weight="700" fill="#2563eb">97°</text><path d="M 145 150 A 32 32 0 0 0 121 122" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="150" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="150" r="2.5" fill="#0f1f3d"/><text x="10" y="145" font-size="12" fill="#374151">C</text><text x="195" y="145" font-size="12" fill="#374151">D</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Three angles meet on a straight line, as shown. They measure 35°, 75° and x. Find the value of x.',
          checkMode: 'auto',
          correctAnswer: '70',
          correctAnswers: ['70', '70°'],
          explanation: 'Angles on a straight line add up to 180°.\nx = 180° − 35° − 75° = 180° − 110° = 70°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="150" x2="210" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="150" x2="178" y2="90" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="150" x2="55" y2="35" stroke="#0f1f3d" stroke-width="2"/><path d="M 148 150 A 38 38 0 0 0 137 121" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="150" y="135" font-size="14" font-weight="700" fill="#2563eb">35°</text><path d="M 72 150 A 38 38 0 0 1 92 116" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="48" y="132" font-size="14" font-weight="700" fill="#2563eb">75°</text><path d="M 109 117 A 38 38 0 0 1 127 121" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="105" y="100" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="100" cy="150" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two angles on a straight line are (2x + 10)° and (3x − 10)°. Find the value of x, and the size of each angle.',
          checkMode: 'auto',
          correctAnswer: 'x=36; 82 and 98',
          correctAnswers: ['x=36; 82 and 98', 'x=36, 82° and 98°', '36; 82 and 98', '82 and 98'],
          explanation: 'Angles on a straight line add up to 180°: (2x + 10) + (3x − 10) = 180.\n5x = 180 → x = 36.\nAngles: 2(36) + 10 = 82° and 3(36) − 10 = 98°. Check: 82° + 98° = 180° ✓',
        },

        // ── Block 2: Angles around a point & vertically opposite (3-6) ────
        {
          difficulty: 'Easy',
          question: 'Two straight lines intersect at a point, as shown. One of the angles formed is 132°. Find the size of the angle vertically opposite to it.',
          checkMode: 'auto',
          correctAnswer: '132',
          correctAnswers: ['132', '132°'],
          explanation: 'Vertically opposite angles are always equal.\nVertically opposite angle = 132°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="30" x2="45" y2="160" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 40 40 0 0 1 133 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="15" font-weight="700" fill="#2563eb">132°</text><path d="M 110 135 A 40 40 0 0 1 87 118" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="95" y="150" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two straight lines intersect at a point. One of the angles formed is 132°. Find the size of the two angles that are adjacent to it on the straight line.',
          checkMode: 'auto',
          correctAnswer: '48',
          correctAnswers: ['48', '48°'],
          explanation: 'Adjacent angles on a straight line are supplementary.\nAdjacent angle = 180° − 132° = 48°. Both adjacent angles equal 48°.',
        },
        {
          difficulty: 'Medium',
          question: 'Four angles meet at a point, as shown. They measure 100°, 75°, 110° and x. Find the value of x.',
          checkMode: 'auto',
          correctAnswer: '75',
          correctAnswers: ['75', '75°'],
          explanation: 'Angles around a point add up to 360°.\nx = 360° − 100° − 75° − 110° = 360° − 285° = 75°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="95" x2="200" y2="95" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="30" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="45" y2="155" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 95 A 30 30 0 0 0 110 65" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="122" y="80" font-size="12" font-weight="700" fill="#2563eb">100°</text><path d="M 110 65 A 30 30 0 0 0 60 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="60" y="58" font-size="12" font-weight="700" fill="#2563eb">75°</text><path d="M 60 72 A 30 30 0 0 0 70 121" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="35" y="100" font-size="12" font-weight="700" fill="#2563eb">110°</text><path d="M 70 121 A 30 30 0 0 0 140 95" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="98" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Eight equal angles meet at a single point, splitting the full turn evenly. What is the size of each angle?',
          checkMode: 'auto',
          correctAnswer: '45',
          correctAnswers: ['45', '45°'],
          explanation: 'Angles around a point add up to 360°. With 8 equal angles, each is 360° ÷ 8 = 45°.',
        },

        // ── Block 3: Complementary angles (7-8) ────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Two angles are complementary. One of the angles is 27°. Find the size of the other angle.',
          checkMode: 'auto',
          correctAnswer: '63',
          correctAnswers: ['63', '63°'],
          explanation: 'Complementary angles add up to 90°.\nOther angle = 90° − 27° = 63°.',
        },
        {
          difficulty: 'Medium',
          question: 'Two complementary angles are in the ratio 1 : 2. Find the size of each angle.',
          checkMode: 'auto',
          correctAnswer: '30 and 60',
          correctAnswers: ['30 and 60', '30° and 60°', '60 and 30', '60° and 30°'],
          explanation: 'Complementary angles add up to 90°. Total parts = 1 + 2 = 3.\nOne part = 90° ÷ 3 = 30°.\nAngles: 1 × 30° = 30° and 2 × 30° = 60°. Check: 30° + 60° = 90° ✓',
        },

        // ── Block 4: Corresponding & alternate angles (9-12) ───────────────
        {
          difficulty: 'Easy',
          question: 'Lines EF and GH are parallel and are cut by a transversal, as shown. One angle formed is 84°. Find the size of its corresponding angle.',
          checkMode: 'auto',
          correctAnswer: '84',
          correctAnswers: ['84', '84°'],
          explanation: 'Corresponding angles formed by a transversal cutting parallel lines are equal.\nCorresponding angle = 84°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 95 55 A 26 26 0 0 1 108 34" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="98" y="40" font-size="14" font-weight="700" fill="#2563eb">84°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/><text x="10" y="45" font-size="11" fill="#374151">E</text><text x="195" y="45" font-size="11" fill="#374151">F</text><text x="10" y="135" font-size="11" fill="#374151">G</text><text x="195" y="135" font-size="11" fill="#374151">H</text></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Two parallel lines are cut by a transversal, as shown. One angle formed is 126°. Find the size of its alternate angle.',
          checkMode: 'auto',
          correctAnswer: '126',
          correctAnswers: ['126', '126°'],
          explanation: 'Alternate angles formed by a transversal cutting parallel lines are equal.\nAlternate angle = 126°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">126°</text><path d="M 141 145 A 28 28 0 0 0 124 122" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="118" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/><text x="10" y="45" font-size="11" fill="#374151">E</text><text x="195" y="45" font-size="11" fill="#374151">F</text><text x="10" y="135" font-size="11" fill="#374151">G</text><text x="195" y="135" font-size="11" fill="#374151">H</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two parallel lines are cut by a transversal, as shown. One corresponding angle is 4x and the other corresponding angle is 124°. Find the value of x.',
          checkMode: 'auto',
          correctAnswer: '31',
          correctAnswers: ['31'],
          explanation: 'Corresponding angles are equal: 4x = 124°.\nx = 124° ÷ 4 = 31°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 95 55 A 26 26 0 0 1 108 34" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="90" y="40" font-size="14" font-weight="700" fill="#2563eb">4x°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="150" y="130" font-size="14" font-weight="700" fill="#2563eb">124°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Bongani says: "Alternate angles and corresponding angles are actually different names for exactly the same pair of angles." Is he correct? Explain the difference using a diagram of two parallel lines cut by a transversal.',
          answer: 'No — Bongani is incorrect. Corresponding angles are in the same position at each intersection (e.g. both top-right), on the same side of the transversal. Alternate angles are on opposite sides of the transversal, between the parallel lines (forming a Z-shape). They are different pairs of angles, even though both types are equal to each other when the lines are parallel.',
          checkMode: 'self',
        },

        // ── Block 5: Co-interior (allied) angles (13-16) ───────────────────
        {
          difficulty: 'Easy',
          question: 'Two parallel lines are cut by a transversal, as shown. One co-interior angle is 128°. Find the size of the other co-interior angle.',
          checkMode: 'auto',
          correctAnswer: '52',
          correctAnswers: ['52', '52°'],
          explanation: 'Co-interior (allied) angles are supplementary — they add up to 180°.\nOther angle = 180° − 128° = 52°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">128°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/><text x="10" y="45" font-size="11" fill="#374151">E</text><text x="195" y="45" font-size="11" fill="#374151">F</text><text x="10" y="135" font-size="11" fill="#374151">G</text><text x="195" y="135" font-size="11" fill="#374151">H</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'A road has two parallel lane markings crossed by a diagonal turning lane line, acting as a transversal. The co-interior angle on one side is 47°. Find the co-interior angle on the same side of the transversal between the other pair.',
          checkMode: 'auto',
          correctAnswer: '133',
          correctAnswers: ['133', '133°'],
          explanation: 'Co-interior angles between parallel lines are supplementary.\nOther angle = 180° − 47° = 133°.',
        },
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal. One co-interior angle is (3x − 5)° and the other is (x + 25)°.\na) Write an equation using the co-interior angle property.\nb) Solve for x.\nc) Find the size of each co-interior angle.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Equation',
              correctAnswer: '3x-5+x+25=180',
              correctAnswers: ['3x-5+x+25=180', '4x+20=180', '(3x-5)+(x+25)=180'],
              explanation: 'Co-interior angles are supplementary: (3x − 5) + (x + 25) = 180.',
            },
            {
              label: 'b) Value of x',
              correctAnswer: '40',
              explanation: '4x + 20 = 180 → 4x = 160 → x = 40.',
            },
            {
              label: 'c) Each co-interior angle',
              correctAnswer: '115 and 65',
              correctAnswers: ['115 and 65', '115° and 65°', '65 and 115'],
              explanation: '3(40) − 5 = 115°; 40 + 25 = 65°. Check: 115° + 65° = 180° ✓',
            },
          ],
        },
        {
          difficulty: 'Medium',
          question: 'Thandi says: "If a co-interior angle is 152°, the other co-interior angle must be obtuse too, since co-interior angles are always the same type." Is she correct? Explain, using 152° as the given angle.',
          answer: "No — Thandi is incorrect. Co-interior angles are supplementary (they add up to 180°), not the same type. If one co-interior angle is 152°, the other is 180° − 152° = 28°, which is acute, not obtuse. When one co-interior angle is obtuse, the other is always acute (unless both are 90°).",
          checkMode: 'self',
        },

        // ── Block 6: Multi-step reasoning (17-19) ───────────────────────────
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal, as shown. One angle formed where the transversal meets the first line is 100°. Find the co-interior angle on the second line, and then find the angle vertically opposite to that co-interior angle.',
          checkMode: 'auto',
          correctAnswer: '80',
          correctAnswers: ['80', '80°'],
          explanation: 'Step 1: The co-interior angle is supplementary to 100°: 180° − 100° = 80°.\nStep 2: The angle vertically opposite to this 80° angle is equal to it: 80°.\nFinal answer: 80°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">100°</text><path d="M 133 145 A 26 26 0 0 1 121 168" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="105" y="178" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Two straight lines intersect at point O, as shown. One of the angles formed, angle P, is 77°. Angle P and angle Q are vertically opposite. Angle Q and angle R lie together on a straight line. Find the size of angle R.',
          checkMode: 'auto',
          correctAnswer: '103',
          correctAnswers: ['103', '103°'],
          explanation: 'Step 1: Angle Q is vertically opposite angle P, so Q = 77° (vertically opposite angles are equal).\nStep 2: Q and R lie on a straight line, so Q + R = 180°.\nR = 180° − 77° = 103°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="25" x2="175" y2="165" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="25" x2="45" y2="165" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 40 40 0 0 1 133 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">P = 77°</text><path d="M 110 135 A 40 40 0 0 1 87 118" fill="none" stroke="#374151" stroke-width="1.5"/><text x="95" y="150" font-size="12" font-weight="700" fill="#374151">Q</text><path d="M 87 118 A 40 40 0 0 1 70 95" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="40" y="130" font-size="15" font-weight="700" fill="#ea580c">R = ?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'A bookshelf brace is fixed across two parallel shelves, acting as a transversal. The corresponding angle on the upper shelf is 132°. Find the co-interior angle on the lower shelf that lies on the same side of the transversal as this corresponding angle.',
          checkMode: 'auto',
          correctAnswer: '48',
          correctAnswers: ['48', '48°'],
          explanation: 'Step 1: The corresponding angle on the lower shelf equals the given angle (corresponding angles are equal): 132°.\nStep 2: This 132° angle and the co-interior angle on the same side are supplementary: 180° − 132° = 48°.\nFinal answer: 48°.',
        },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Excellent! You can confidently apply straight-line, point, complementary and parallel-line angle relationships.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // ── Block 1: Angles on a straight line (0-2) ──────────────────────
        {
          difficulty: 'Easy',
          question: 'In the diagram, angles E and F lie on a straight line, as shown. Angle E = 118°. Find the size of angle F.',
          checkMode: 'auto',
          correctAnswer: '62',
          correctAnswers: ['62', '62°'],
          explanation: 'Angles on a straight line are supplementary — they add up to 180°.\nAngle F = 180° − 118° = 62°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="150" x2="140" y2="27" stroke="#0f1f3d" stroke-width="2"/><path d="M 62 150 A 52 52 0 0 1 122 101" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="62" y="108" font-size="15" font-weight="700" fill="#2563eb">118°</text><path d="M 145 150 A 32 32 0 0 0 128 122" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="150" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="150" r="2.5" fill="#0f1f3d"/><text x="10" y="145" font-size="12" fill="#374151">E</text><text x="195" y="145" font-size="12" fill="#374151">F</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Three angles meet on a straight line, as shown. They measure 30°, 90° and x. Find the value of x.',
          checkMode: 'auto',
          correctAnswer: '60',
          correctAnswers: ['60', '60°'],
          explanation: 'Angles on a straight line add up to 180°.\nx = 180° − 30° − 90° = 180° − 120° = 60°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="150" x2="210" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="150" x2="196" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="150" x2="55" y2="35" stroke="#0f1f3d" stroke-width="2"/><path d="M 152 150 A 32 32 0 0 0 149 138" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="155" y="145" font-size="14" font-weight="700" fill="#2563eb">30°</text><path d="M 72 150 A 38 38 0 0 1 92 116" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="48" y="132" font-size="14" font-weight="700" fill="#2563eb">90°</text><path d="M 100 112 A 38 38 0 0 1 138 141" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="105" y="100" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="100" cy="150" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two angles on a straight line are in the ratio 1 : 5. Find the size of each angle.',
          checkMode: 'auto',
          correctAnswer: '30 and 150',
          correctAnswers: ['30 and 150', '30° and 150°', '150 and 30', '150° and 30°'],
          explanation: 'Angles on a straight line add up to 180°. Total parts = 1 + 5 = 6.\nOne part = 180° ÷ 6 = 30°.\nAngles: 1 × 30° = 30° and 5 × 30° = 150°. Check: 30° + 150° = 180° ✓',
        },

        // ── Block 2: Angles around a point & vertically opposite (3-6) ────
        {
          difficulty: 'Easy',
          question: 'Two straight lines intersect at a point, as shown. One of the angles formed is 78°. Find the size of the angle vertically opposite to it.',
          checkMode: 'auto',
          correctAnswer: '78',
          correctAnswers: ['78', '78°'],
          explanation: 'Vertically opposite angles are always equal.\nVertically opposite angle = 78°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="30" x2="45" y2="160" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 40 40 0 0 1 133 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="15" font-weight="700" fill="#2563eb">78°</text><path d="M 110 135 A 40 40 0 0 1 87 118" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="95" y="150" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two straight lines intersect at a point. One of the angles formed is 78°. Find the size of the two angles that are adjacent to it on the straight line.',
          checkMode: 'auto',
          correctAnswer: '102',
          correctAnswers: ['102', '102°'],
          explanation: 'Adjacent angles on a straight line are supplementary.\nAdjacent angle = 180° − 78° = 102°. Both adjacent angles equal 102°.',
        },
        {
          difficulty: 'Medium',
          question: 'Four angles meet at a point, as shown. They measure 65°, 95°, 120° and x. Find the value of x.',
          checkMode: 'auto',
          correctAnswer: '80',
          correctAnswers: ['80', '80°'],
          explanation: 'Angles around a point add up to 360°.\nx = 360° − 65° − 95° − 120° = 360° − 280° = 80°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="95" x2="200" y2="95" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="30" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="45" y2="155" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 95 A 30 30 0 0 0 110 65" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="122" y="80" font-size="12" font-weight="700" fill="#2563eb">65°</text><path d="M 110 65 A 30 30 0 0 0 60 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="65" y="58" font-size="12" font-weight="700" fill="#2563eb">95°</text><path d="M 60 72 A 30 30 0 0 0 70 121" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="35" y="100" font-size="12" font-weight="700" fill="#2563eb">120°</text><path d="M 70 121 A 30 30 0 0 0 140 95" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="98" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'A roundabout has 5 roads spaced evenly around its centre point, splitting the full turn into 5 equal angles. What is the size of each angle?',
          checkMode: 'auto',
          correctAnswer: '72',
          correctAnswers: ['72', '72°'],
          explanation: 'Angles around a point add up to 360°. With 5 equal angles, each is 360° ÷ 5 = 72°.',
        },

        // ── Block 3: Complementary angles (7-8) ────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Two angles are complementary. One of the angles is 52°. Find the size of the other angle.',
          checkMode: 'auto',
          correctAnswer: '38',
          correctAnswers: ['38', '38°'],
          explanation: 'Complementary angles add up to 90°.\nOther angle = 90° − 52° = 38°.',
        },
        {
          difficulty: 'Medium',
          question: 'Two complementary angles are x and 2x. Find the value of x and the size of each angle.',
          checkMode: 'auto',
          correctAnswer: 'x=30; 30 and 60',
          correctAnswers: ['x=30; 30 and 60', 'x=30, 30° and 60°', '30; 30 and 60', '30 and 60'],
          explanation: 'Complementary angles add up to 90°: x + 2x = 90.\n3x = 90 → x = 30.\nAngles: 30° and 2(30°) = 60°. Check: 30° + 60° = 90° ✓',
        },

        // ── Block 4: Corresponding & alternate angles (9-12) ───────────────
        {
          difficulty: 'Easy',
          question: 'Lines JK and LM are parallel and are cut by a transversal, as shown. One angle formed is 96°. Find the size of its corresponding angle.',
          checkMode: 'auto',
          correctAnswer: '96',
          correctAnswers: ['96', '96°'],
          explanation: 'Corresponding angles formed by a transversal cutting parallel lines are equal.\nCorresponding angle = 96°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 95 55 A 26 26 0 0 1 108 34" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="98" y="40" font-size="14" font-weight="700" fill="#2563eb">96°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/><text x="10" y="45" font-size="11" fill="#374151">J</text><text x="195" y="45" font-size="11" fill="#374151">K</text><text x="10" y="135" font-size="11" fill="#374151">L</text><text x="195" y="135" font-size="11" fill="#374151">M</text></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Two parallel lines are cut by a transversal, as shown. One angle formed is 61°. Find the size of its alternate angle.',
          checkMode: 'auto',
          correctAnswer: '61',
          correctAnswers: ['61', '61°'],
          explanation: 'Alternate angles formed by a transversal cutting parallel lines are equal.\nAlternate angle = 61°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">61°</text><path d="M 141 145 A 28 28 0 0 0 124 122" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="118" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/><text x="10" y="45" font-size="11" fill="#374151">J</text><text x="195" y="45" font-size="11" fill="#374151">K</text><text x="10" y="135" font-size="11" fill="#374151">L</text><text x="195" y="135" font-size="11" fill="#374151">M</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two parallel lines are cut by a transversal, as shown. One corresponding angle is 5x and the other corresponding angle is 115°. Find the value of x.',
          checkMode: 'auto',
          correctAnswer: '23',
          correctAnswers: ['23'],
          explanation: 'Corresponding angles are equal: 5x = 115°.\nx = 115° ÷ 5 = 23°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 95 55 A 26 26 0 0 1 108 34" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="90" y="40" font-size="14" font-weight="700" fill="#2563eb">5x°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="150" y="130" font-size="14" font-weight="700" fill="#2563eb">115°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Sindiso claims: "Corresponding angles are only equal if the transversal crosses the parallel lines at exactly 90°." Is he correct? Use a 142° angle to explain your answer.',
          answer: 'No — Sindiso is incorrect. Corresponding angles are equal whenever the two lines being cut are parallel, no matter what angle the transversal makes with them. For example, if one angle is 142°, its corresponding angle is also 142°, even though the transversal is not perpendicular to the parallel lines.',
          checkMode: 'self',
        },

        // ── Block 5: Co-interior (allied) angles (13-16) ───────────────────
        {
          difficulty: 'Easy',
          question: 'Two parallel lines are cut by a transversal, as shown. One co-interior angle is 101°. Find the size of the other co-interior angle.',
          checkMode: 'auto',
          correctAnswer: '79',
          correctAnswers: ['79', '79°'],
          explanation: 'Co-interior (allied) angles are supplementary — they add up to 180°.\nOther angle = 180° − 101° = 79°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 87 55 A 28 28 0 0 1 104 78" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">101°</text><path d="M 149 145 A 26 26 0 0 1 162 124" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/><text x="10" y="45" font-size="11" fill="#374151">J</text><text x="195" y="45" font-size="11" fill="#374151">K</text><text x="10" y="135" font-size="11" fill="#374151">L</text><text x="195" y="135" font-size="11" fill="#374151">M</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'A window frame has two parallel horizontal bars crossed by a diagonal support bar, acting as a transversal. The co-interior angle on one side is 66°. Find the co-interior angle on the same side of the transversal between the other pair.',
          checkMode: 'auto',
          correctAnswer: '114',
          correctAnswers: ['114', '114°'],
          explanation: 'Co-interior angles between parallel lines are supplementary.\nOther angle = 180° − 66° = 114°.',
        },
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal. One co-interior angle is (2x + 30)° and the other is 2x°.\na) Write an equation using the co-interior angle property.\nb) Solve for x.\nc) Find the size of each co-interior angle.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Equation',
              correctAnswer: '2x+30+2x=180',
              correctAnswers: ['2x+30+2x=180', '4x+30=180', '(2x+30)+2x=180'],
              explanation: 'Co-interior angles are supplementary: (2x + 30) + 2x = 180.',
            },
            {
              label: 'b) Value of x',
              correctAnswer: '37,5',
              correctAnswers: ['37,5', '37.5'],
              explanation: '4x + 30 = 180 → 4x = 150 → x = 37,5.',
            },
            {
              label: 'c) Each co-interior angle',
              correctAnswer: '105 and 75',
              correctAnswers: ['105 and 75', '105° and 75°', '75 and 105'],
              explanation: '2(37,5) + 30 = 105°; 2(37,5) = 75°. Check: 105° + 75° = 180° ✓',
            },
          ],
        },
        {
          difficulty: 'Medium',
          question: 'Karabo says: "An angle of 88° and a co-interior angle of 92° cannot both be true, because 88° and 92° are almost equal, not supplementary." Is she correct? Show a check using addition.',
          answer: 'No — Karabo is incorrect. 88° and 92° ARE supplementary, because 88° + 92° = 180°. Two angles being close in size does not stop them from summing to 180° — the co-interior angle rule only requires that the two angles add up to 180°, not that they look very different from each other.',
          checkMode: 'self',
        },

        // ── Block 6: Multi-step reasoning (17-19) ───────────────────────────
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal, as shown. An angle formed where the transversal meets the first line has an alternate angle of 74° on the second line. Find the co-interior angle that lies on the same side of the transversal as this alternate angle, between the two parallel lines.',
          checkMode: 'auto',
          correctAnswer: '106',
          correctAnswers: ['106', '106°'],
          explanation: 'Step 1: The alternate angle is equal to the original angle (alternate angles are equal): 74°.\nStep 2: The co-interior angle on the same side as this 74° angle is supplementary to it: 180° − 74° = 106°.\nFinal answer: 106°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 149 145 A 26 26 0 0 1 136 168" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="150" y="178" font-size="14" font-weight="700" fill="#2563eb">74°</text><path d="M 87 55 A 26 26 0 0 0 66 68" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="55" y="85" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Two straight lines intersect at point O, as shown. One of the angles formed, angle P, is 48°. Angle P and angle Q are vertically opposite. Angle Q and angle R lie together on a straight line. Find the size of angle R.',
          checkMode: 'auto',
          correctAnswer: '132',
          correctAnswers: ['132', '132°'],
          explanation: 'Step 1: Angle Q is vertically opposite angle P, so Q = 48° (vertically opposite angles are equal).\nStep 2: Q and R lie on a straight line, so Q + R = 180°.\nR = 180° − 48° = 132°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="25" x2="175" y2="165" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="25" x2="45" y2="165" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 40 40 0 0 1 133 72" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">P = 48°</text><path d="M 110 135 A 40 40 0 0 1 87 118" fill="none" stroke="#374151" stroke-width="1.5"/><text x="95" y="150" font-size="12" font-weight="700" fill="#374151">Q</text><path d="M 87 118 A 40 40 0 0 1 70 95" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="40" y="130" font-size="15" font-weight="700" fill="#ea580c">R = ?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Road markings show two parallel lane lines crossed by a diagonal merge line, acting as a transversal. One co-interior angle is 4x and the other is (2x + 30)°.\na) Write an equation using the co-interior angle property.\nb) Solve for x.\nc) Find the size of each angle.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Equation',
              correctAnswer: '4x+2x+30=180',
              correctAnswers: ['4x+2x+30=180', '6x+30=180', '4x+(2x+30)=180'],
              explanation: 'Co-interior angles are supplementary: 4x + (2x + 30) = 180.',
            },
            {
              label: 'b) Value of x',
              correctAnswer: '25',
              explanation: '6x + 30 = 180 → 6x = 150 → x = 25.',
            },
            {
              label: 'c) Each angle',
              correctAnswer: '100 and 80',
              correctAnswers: ['100 and 80', '100° and 80°', '80 and 100'],
              explanation: '4(25) = 100°; 2(25) + 30 = 80°. Check: 100° + 80° = 180° ✓',
            },
          ],
        },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Fantastic! You can apply straight-line, point, complementary and parallel-line angle relationships to real-world problems.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
