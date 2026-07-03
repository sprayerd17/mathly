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
        '<DiagramPlaceholder label="Five angle diagrams labelled acute right obtuse straight and reflex with colour coding acute blue right green obtuse orange reflex red" />',
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
        '<DiagramPlaceholder label="Two diagrams: one showing angles on a straight line adding to 180 with given angle blue and unknown angle red, one showing two intersecting lines with vertically opposite angles highlighted green" />',
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
        '<DiagramPlaceholder label="Diagram showing two parallel lines cut by a transversal with corresponding angles highlighted green co-interior angles orange parallel lines blue transversal red" />',
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
}
