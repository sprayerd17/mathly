import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Composite Shapes and Tessellation',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — BUILDING COMPOSITE SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'building-composite-shapes',
      title: 'Building Composite Shapes',
      icon: '🧩',
      explanation: `
<p style="margin-bottom:14px;">A <strong>composite shape</strong> is a new shape made by putting <strong>two or more basic shapes</strong> together. Just like puzzle pieces fit together to make a picture, simple shapes like triangles, squares, rectangles and circles can be combined to build a composite shape.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Key rule 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">When basic shapes are joined together, their <strong>sides must touch exactly</strong> — with no gaps and no overlapping. The basic shapes don't disappear; they are still there, just joined to make a bigger, new shape.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Real-life examples 🌍</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">House</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">A <strong>triangle</strong> (the roof) sitting on top of a <strong>square</strong> (the walls).</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">Arrow</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">A <strong>triangle</strong> (the point) attached to a <strong>rectangle</strong> (the shaft).</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">Ice cream</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">A <strong>circle</strong> (the scoop) sitting on top of a <strong>triangle</strong> (the cone).</span>
    </div>
  </div>
</div>

<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:16px;">
  <div style="display:flex;flex-direction:column;align-items:center;">
    <div style="width:0;height:0;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:35px solid #fca5a5;"></div>
    <div style="width:70px;height:50px;background:#93c5fd;border:2px solid #1e40af;"></div>
  </div>
  <span style="font-size:20px;color:#374151;">=</span>
  <span style="color:#374151;font-size:15px;">1 triangle + 1 square = a house-shaped composite shape</span>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Finding the basic shapes inside a composite shape</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Look for <strong>straight edges</strong> where two shapes meet — this is often where one basic shape ends and another begins.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Name each basic shape you can see — for example "triangle" and "square".</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Count how many of each basic shape were used to build the composite shape.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Look at a picture of a boat: a triangle (the sail) sits on top of a rectangle (the boat\'s body), which sits on top of a semicircle (the hull). Which basic shapes make up this composite shape?',
          steps: [
            'Look for straight edges that separate the shapes.',
            'The sail is a <strong style="color:#dc2626;">triangle</strong>.',
            'The body of the boat is a <strong style="color:#1e40af;">rectangle</strong>.',
            'The hull (bottom) is a <strong style="color:#16a34a;">semicircle</strong> (half a circle).',
          ],
          answer: 'The boat is made from 1 triangle, 1 rectangle and 1 semicircle.',
        },
        {
          question: 'Thabo builds a robot picture using 1 square (the head), 1 rectangle (the body) and 2 small circles (the eyes). How many basic shapes did Thabo use in total?',
          steps: [
            'Count each basic shape one at a time: 1 square, 1 rectangle, and 2 circles.',
            'Add them together: 1 + 1 + 2 = 4.',
          ],
          answer: 'Thabo used 4 basic shapes in total.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder:
        'Short video showing simple pictures (a house, an arrow, an ice cream cone) being built from basic 2D shapes joined together, with each basic shape highlighted in a different colour',
      diagramPlaceholder:
        'A composite shape picture of a boat made from a triangle sail, a rectangle body and a semicircle hull, with each basic shape outlined in a different colour and labelled',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPOSITE SHAPES WITH LINE SYMMETRY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'composite-shapes-line-symmetry',
      title: 'Composite Shapes with Line Symmetry',
      icon: '🪞',
      explanation: `
<p style="margin-bottom:14px;">You already know that a shape has <strong>line symmetry</strong> if you can fold it in half so both sides match exactly. When we build a composite shape carefully, the finished shape can also have a line of symmetry — even though it's made of separate basic shapes joined together.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Key rule 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">To build a <strong>symmetrical composite shape</strong>, arrange the basic shapes so that one half is the <strong>mirror image</strong> of the other half. Placing two identical shapes so they mirror each other is the easiest way to do this.</p>
</div>

<div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:16px;">
  <div style="display:flex;align-items:center;">
    <div style="width:0;height:0;border-top:30px solid transparent;border-bottom:30px solid transparent;border-right:45px solid #93c5fd;"></div>
    <div style="width:3px;height:60px;background:#dc2626;"></div>
    <div style="width:0;height:0;border-top:30px solid transparent;border-bottom:30px solid transparent;border-left:45px solid #93c5fd;"></div>
  </div>
  <span style="color:#374151;font-size:15px;">Two identical triangles placed back-to-back make a symmetrical diamond, with the <span style="color:#dc2626;font-weight:700;">red line</span> as the line of symmetry.</span>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Checking a composite shape for symmetry</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Imagine folding the whole composite shape along a line, just like the <strong>fold test</strong> you already know.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">If <strong>every basic shape</strong> on one side matches a basic shape on the other side, the composite shape is symmetrical.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">If even <strong>one</strong> shape is missing its matching partner on the other side, the composite shape is <span style="color:#dc2626;font-weight:700;">not</span> symmetrical along that line.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Symmetrical vs not symmetrical composite shapes</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#15803d;margin-bottom:6px;">✓ Symmetrical</div>
      <div style="color:#14532d;font-size:14px;line-height:1.7;">A house shape (triangle roof centred exactly on top of a square) — folding down the middle matches both sides.</div>
    </div>
    <div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#dc2626;margin-bottom:6px;">✗ Not symmetrical</div>
      <div style="color:#7f1d1d;font-size:14px;line-height:1.7;">An arrow shape (triangle attached to one end of a rectangle) — folding down the middle does not match, since the triangle is only on one side.</div>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Lerato builds a composite shape from a square with one identical small triangle attached to the top-left corner only. Is her composite shape symmetrical?',
          steps: [
            'Imagine folding the composite shape down the middle.',
            'The triangle is only on the <strong>left</strong> side — there is no matching triangle on the right side.',
            'Since the two halves do not match, the composite shape is not symmetrical.',
          ],
          answer: 'No — Lerato\'s composite shape is not symmetrical, because the triangle only appears on one side.',
        },
        {
          question: 'Sipho places two identical semicircles, flat sides touching, to form a full circle. Is this composite shape symmetrical?',
          steps: [
            'A full circle can be folded along <strong>any</strong> line through its centre and both halves will always match.',
            'Since the two semicircles are identical and placed to mirror each other, every fold through the centre matches.',
          ],
          answer: 'Yes — this composite shape (a full circle) is symmetrical, and it actually has many lines of symmetry.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder:
        'Short video showing two identical triangles being placed back to back to build a symmetrical diamond shape, with the line of symmetry drawn in red down the middle',
      diagramPlaceholder:
        'Side-by-side diagrams comparing a symmetrical composite house shape (triangle centred on a square) with a non-symmetrical composite arrow shape (triangle on only one end of a rectangle)',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — TESSELLATING PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tessellating-patterns',
      title: 'Tessellating Patterns',
      icon: '🔲',
      explanation: `
<p style="margin-bottom:14px;">A <strong>tessellation</strong> is a pattern made by repeating shapes over and over so that they cover a flat surface completely, with <strong>no gaps</strong> and <strong>no overlaps</strong>. You see tessellations every day — floor tiles, brick walls and honeycomb are all examples.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Key rule 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">A shape <strong>tessellates</strong> if copies of it can be fitted together perfectly, edge to edge, to cover a surface without leaving any gaps and without any shapes overlapping each other.</p>
</div>

<div style="display:flex;align-items:center;gap:0;flex-wrap:wrap;margin-bottom:16px;">
  <div style="width:40px;height:40px;background:#93c5fd;border:2px solid #1e40af;"></div>
  <div style="width:40px;height:40px;background:#bfdbfe;border:2px solid #1e40af;"></div>
  <div style="width:40px;height:40px;background:#93c5fd;border:2px solid #1e40af;"></div>
  <div style="width:40px;height:40px;background:#bfdbfe;border:2px solid #1e40af;"></div>
  <span style="margin-left:16px;color:#374151;font-size:15px;">Squares tessellate perfectly in a row — no gaps, no overlaps.</span>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Which shapes tessellate on their own?</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:12px 16px;flex:1;min-width:200px;">
      <div style="font-size:15px;font-weight:700;color:#15803d;margin-bottom:6px;">✓ Tessellate</div>
      <div style="color:#14532d;font-size:14px;line-height:1.7;"><strong>Squares</strong>, <strong>rectangles</strong>, <strong>equilateral triangles</strong> and <strong>regular hexagons</strong> — their angles fit together exactly around a point.</div>
    </div>
    <div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;padding:12px 16px;flex:1;min-width:200px;">
      <div style="font-size:15px;font-weight:700;color:#dc2626;margin-bottom:6px;">✗ Do Not Tessellate (alone)</div>
      <div style="color:#7f1d1d;font-size:14px;line-height:1.7;"><strong>Circles</strong> and <strong>regular pentagons</strong> always leave gaps between them, no matter how they are arranged.</div>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Real-life examples 🌍</div>
  <ul style="margin-top:0;margin-bottom:0;padding-left:20px;color:#1e3a8a;line-height:2;">
    <li><strong>Floor and wall tiles:</strong> usually square or rectangular tiles tessellating across a floor</li>
    <li><strong>A honeycomb:</strong> bees build hexagon-shaped cells that tessellate perfectly with no gaps</li>
    <li><strong>A brick wall:</strong> rectangular bricks tessellate in rows, often overlapping halfway for strength</li>
  </ul>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">How to test if a shape tessellates</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">Draw or picture several copies of the shape fitted together edge to edge. If you can keep repeating the pattern in every direction with <strong>no gaps</strong> appearing anywhere, the shape tessellates.</p>
</div>
`,
      workedExamples: [
        {
          question: 'Does a regular hexagon tessellate on its own?',
          steps: [
            'Picture several hexagons placed edge to edge, like the cells of a honeycomb.',
            'Each corner of a regular hexagon is 120°, and 3 hexagons meeting at a point make 120° + 120° + 120° = 360° — a full turn, with no gap.',
            'Since the hexagons fit together perfectly all the way around each point, the pattern can repeat forever with no gaps.',
          ],
          answer: 'Yes — a regular hexagon tessellates on its own, just like the honeycomb pattern bees build.',
        },
        {
          question: 'Amahle tries to tessellate circles by placing them in rows, each circle touching its neighbours. Does this tessellate?',
          steps: [
            'Look at the spaces between the circles where they touch.',
            'Curved shapes like circles always leave small curved gaps between them, no matter how they are arranged.',
            'Since there are gaps, the circles do not cover the surface completely.',
          ],
          answer: 'No — circles do not tessellate. There will always be small gaps left between the circles.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder:
        'Short video showing squares, triangles and hexagons tessellating perfectly across a surface, followed by an example of circles failing to tessellate because of the gaps left between them',
      diagramPlaceholder:
        'A grid comparing a perfect square tessellation with no gaps against a failed circle tessellation showing curved gaps between each circle',
    },
  ],

  topicPractice: [],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — FOUNDATIONS: IDENTIFYING AND COUNTING BASIC SHAPES (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: Building Composite Shapes',
      questions: [
        { difficulty: 'Easy', question: 'A house picture is made from 1 triangle (the roof) and 1 square (the walls). How many basic shapes make up this composite shape in total?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'two'], explanation: '1 triangle + 1 square = 2 basic shapes in total ✓' },
        { difficulty: 'Easy', question: 'An ice cream picture is made from 1 circle (the scoop) and 1 triangle (the cone). How many basic shapes make up this composite shape in total?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'two'], explanation: '1 circle + 1 triangle = 2 basic shapes ✓' },
        { difficulty: 'Easy', question: 'An arrow picture is made from 1 triangle (the point) and 1 rectangle (the shaft). How many basic shapes make up this composite shape in total?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'two'], explanation: '1 triangle + 1 rectangle = 2 basic shapes ✓' },
        { difficulty: 'Easy', question: 'A boat picture is made from 1 triangle (the sail), 1 rectangle (the body) and 1 semicircle (the hull). How many basic shapes make up this composite shape in total?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'three'], explanation: '1 triangle + 1 rectangle + 1 semicircle = 3 basic shapes ✓' },
        { difficulty: 'Easy', question: 'A snowman picture is made from 3 circles, stacked one on top of the other. How many basic shapes make up this composite shape in total?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'three'], explanation: 'The snowman uses 3 circles altogether ✓' },
        { difficulty: 'Easy', question: 'A flower picture is made from 5 identical petals (each a circle) around 1 circle in the centre. How many basic shapes make up this composite shape in total?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: '5 petal circles + 1 centre circle = 6 basic shapes ✓' },
        { difficulty: 'Medium', question: 'A robot picture is built from 1 square (head), 1 rectangle (body), 2 small circles (eyes) and 2 rectangles (arms). How many basic shapes were used altogether?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: '1 square + 1 rectangle + 2 circles + 2 rectangles = 6 basic shapes ✓' },
        { difficulty: 'Medium', question: 'A rocket picture is made from 1 triangle (nose cone), 1 rectangle (body) and 2 small triangles (fins). How many basic shapes were used in total?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], explanation: '1 triangle + 1 rectangle + 2 triangles = 4 basic shapes ✓' },
        { difficulty: 'Medium', question: 'A fish picture is made from 1 circle (body), 1 triangle (tail) and 1 small triangle (fin). How many basic shapes were used in total?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'three'], explanation: '1 circle + 1 triangle + 1 triangle = 3 basic shapes ✓' },
        { difficulty: 'Medium', question: 'A train picture is made from 3 rectangles (the carriages) and 4 circles (the wheels). How many basic shapes were used in total?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', 'seven'], explanation: '3 rectangles + 4 circles = 7 basic shapes ✓' },
        { difficulty: 'Medium', question: 'A caterpillar picture is made from 6 circles for the body and 2 small triangles for antennae. How many basic shapes were used in total?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'eight'], explanation: '6 circles + 2 triangles = 8 basic shapes ✓' },
        { difficulty: 'Medium', question: 'A house picture is made from 1 triangle (roof), 1 square (walls), 1 rectangle (door) and 2 squares (windows). How many basic shapes were used in total?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'five'], explanation: '1 triangle + 1 square + 1 rectangle + 2 squares = 5 basic shapes ✓' },
        { difficulty: 'Medium', question: 'A car picture is made from 1 rectangle (the body), 2 circles (the wheels) and 1 square (the window). How many basic shapes were used in total?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], explanation: '1 rectangle + 2 circles + 1 square = 4 basic shapes ✓' },
        { difficulty: 'Medium', question: 'A butterfly picture is made from 4 circles (the wings) and 1 rectangle (the body). How many basic shapes were used in total?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'five'], explanation: '4 circles + 1 rectangle = 5 basic shapes ✓' },
        { difficulty: 'Medium', question: 'A composite shape called a "traffic light" is made from 1 rectangle (the box) and 3 circles (the lights). How many basic shapes were used in total?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], explanation: '1 rectangle + 3 circles = 4 basic shapes ✓' },
        { difficulty: 'Medium', question: 'A picture of a simple person is made from 1 circle (head), 1 rectangle (body), 2 rectangles (arms) and 2 rectangles (legs). How many basic shapes were used in total?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: '1 circle + 1 rectangle + 2 rectangles + 2 rectangles = 6 basic shapes ✓' },
        { difficulty: 'Medium', question: 'A windmill picture is made from 4 triangles (the blades) and 1 rectangle (the pole). How many basic shapes were used in total?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'five'], explanation: '4 triangles + 1 rectangle = 5 basic shapes ✓' },
        { difficulty: 'Hard', question: 'Thandi builds a picture of a caterpillar using 8 circles for the body and 1 triangle for the head. She then adds 2 small triangles as antennae. How many basic shapes did she use altogether?', answer: '11', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', 'eleven'], explanation: '8 circles + 1 triangle (head) + 2 triangles (antennae) = 11 basic shapes ✓' },
        { difficulty: 'Hard', question: 'A composite shape picture of a castle is made from 1 rectangle (main wall), 2 squares (side towers), 2 triangles (tower roofs) and 3 rectangles (windows). How many basic shapes were used in total?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'eight'], explanation: '1 rectangle + 2 squares + 2 triangles + 3 rectangles = 8 basic shapes ✓' },
        { difficulty: 'Hard', question: 'A picture of a flower garden shows 3 flowers, and each flower is made from 4 petal circles and 1 centre circle. How many basic shapes are there altogether in all 3 flowers?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', 'fifteen'], explanation: 'Each flower has 4 + 1 = 5 circles. 3 flowers × 5 circles = 15 basic shapes ✓' },
        { difficulty: 'Hard', question: 'Sipho builds 2 identical robot pictures, and each robot uses 1 square (head), 1 rectangle (body), 2 circles (eyes) and 2 rectangles (arms). How many basic shapes did he use altogether for both robots?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'twelve'], explanation: 'Each robot uses 1 + 1 + 2 + 2 = 6 basic shapes. 2 robots × 6 shapes = 12 basic shapes ✓' },
        { difficulty: 'Easy', question: 'Look at a picture of a rocket: a triangle at the top, a rectangle in the middle, and two small triangles as fins on the sides. Name the basic shapes used.', answer: 'The rocket is made from 3 triangles (the nose cone and 2 fins) and 1 rectangle (the body).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Draw or describe a composite shape you could build using exactly 1 circle and 2 triangles.', answer: 'Answers will vary — for example, an ice cream cone (circle scoop on a triangle cone) with a small triangle flag stuck in the top, or a fish (circle body with a triangle tail and a triangle fin).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Look at a picture of a sailboat: 1 semicircle (the hull), 1 rectangle (the mast) and 2 triangles (the sails). Name the basic shapes and how many of each were used.', answer: 'The sailboat is made from 1 semicircle (the hull), 1 rectangle (the mast) and 2 triangles (the sails) — 4 basic shapes in total.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Kagiso says any composite shape must be made from at least 3 basic shapes. Is he correct? Explain.', answer: 'No — a composite shape only needs 2 or more basic shapes joined together. For example, a house shape made from just 1 triangle and 1 square is already a composite shape, even though it only uses 2 basic shapes.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Perfect score! You have mastered identifying and counting basic shapes in composite pictures.' },
        { minScore: 19, message: 'Great work! Review any questions you got wrong and you will have this mastered.' },
        { minScore: 13, message: 'Good effort! Go back and read through building composite shapes again.' },
        { minScore: 0, message: 'Keep going! Read through the study guide again carefully and then retry.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — COMPOSITE SHAPES AND LINE SYMMETRY (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Composite Shapes and Symmetry',
      questions: [
        { difficulty: 'Easy', question: 'Two identical triangles are placed back-to-back, flat sides touching, to form a diamond. Is this composite shape symmetrical? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'The two identical triangles mirror each other exactly, so folding along the join line matches both halves ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,35 60,85 110,135" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,35 160,85 110,135" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Easy', question: 'An arrow shape has 1 triangle attached to only the right end of a rectangle. Is this composite shape symmetrical along a vertical line down the middle? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'The triangle only appears on the right side, so folding down the middle would not match the left and right halves ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="65" width="90" height="40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="130,50 130,120 175,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Easy', question: 'A composite shape is made from a square with 1 identical small triangle centred exactly on top (like a simple house). Is this composite shape symmetrical? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Since the triangle is centred exactly in the middle of the square, folding down the vertical middle line matches both halves ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="65" y="85" width="90" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,40 65,85 155,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="25" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Easy', question: 'Two identical semicircles are placed with their flat (straight) sides touching, forming a full circle. Is this composite shape symmetrical? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'A full circle can be folded along any line through its centre and both halves always match ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><path d="M 110 40 A 45 45 0 0 1 110 130 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 110 40 A 45 45 0 0 0 110 130 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="40" x2="110" y2="130" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Easy', question: 'A composite shape has 1 square with 1 identical small circle attached only to the top-right corner. Is this composite shape symmetrical along a vertical line down the middle? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'The circle is only on the right side, so folding down the middle would not match both halves ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="65" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="155" cy="60" r="20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="45" x2="110" y2="165" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Easy', question: 'A robot picture has 1 identical circle eye on the left and 1 identical circle eye on the right, placed the same distance from the centre of a square head. Is this arrangement of the two eyes symmetrical along a vertical line down the middle? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Since both eyes are identical and placed the same distance from the centre, folding down the middle matches them exactly ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="45" width="110" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="85" cy="90" r="12" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="135" cy="90" r="12" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'A composite shape is made from 2 identical rectangles placed side by side, sharing one long edge, to form a bigger rectangle. Is this composite shape symmetrical along the vertical line where the two rectangles join? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Since the two rectangles are identical, folding along the join line matches both halves exactly ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="55" width="65" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="110" y="55" width="65" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="55" x2="110" y2="125" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'A composite shape has 4 identical small triangles, each attached to one side of a central square (one on top, one on bottom, one on the left, one on the right). Is this composite shape symmetrical along a vertical line through the middle? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'The left and right triangles mirror each other, and the top and bottom triangles each mirror themselves across this line, so it is symmetrical ✓' },
        { difficulty: 'Medium', question: 'A composite shape has 3 identical triangles attached to the top, left and right sides of a central square, but no triangle on the bottom side. Is this composite shape symmetrical along a vertical line through the middle? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'The left and right triangles mirror each other, and the top triangle mirrors itself across the vertical middle line, so it is still symmetrical along this line ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="80" width="70" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,35 85,80 135,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="75,80 40,95 75,110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="145,80 180,95 145,110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="165" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><line x1="25" y1="115" x2="195" y2="115" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'Using the same shape as before (3 identical triangles on the top, left and right sides of a central square, none on the bottom), is this composite shape symmetrical along a horizontal line through the middle? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'The top triangle has no matching triangle on the bottom, so folding along a horizontal middle line does not match both halves ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="80" width="70" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,35 85,80 135,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="75,80 40,95 75,110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="145,80 180,95 145,110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="165" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><line x1="25" y1="115" x2="195" y2="115" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'A composite shape is made from a rectangle with 1 semicircle attached to the top edge, centred exactly in the middle (like a simple archway). Is this composite shape symmetrical along a vertical line through the middle? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Since the semicircle is centred exactly on the rectangle, folding down the vertical middle line matches both halves ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="85" width="110" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 75 85 A 35 35 0 0 1 145 85 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'A composite shape is made from a rectangle with 1 triangle attached to the top edge, but the triangle is positioned closer to the left side than the right side. Is this composite shape symmetrical along a vertical line through the middle of the rectangle? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Since the triangle is off-centre, folding down the middle of the rectangle does not match both halves ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="85" width="110" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="80,40 60,85 100,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'A butterfly picture has 2 identical wing shapes (circles), one on the left and one on the right of a central rectangle body, both the same size and the same distance from the body. Is this composite shape symmetrical along a vertical line through the body? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'The two identical wings mirror each other exactly across the vertical line through the body ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="95" y="65" width="30" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="70" cy="92" r="28" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="150" cy="92" r="28" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="45" x2="110" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'A composite shape has 2 triangles attached to a central square, but one triangle is bigger than the other. Is this composite shape symmetrical along the line between the two triangles? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Since the two triangles are different sizes, they cannot match exactly when folded, so the shape is not symmetrical ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="70" width="70" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="75,105 40,90 75,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="145,105 190,95 145,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="55" x2="110" y2="155" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'A face picture has 2 identical circle eyes placed symmetrically and 1 semicircle smile centred exactly in the middle. Is the whole composite face picture symmetrical along a vertical line through the middle? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Since the eyes are placed symmetrically and the smile is centred, every part matches across the vertical middle line ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="85" cy="75" r="9" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="135" cy="75" r="9" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 90 110 A 25 25 0 0 0 130 110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="40" x2="110" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Hard', question: 'A composite shape has 6 identical small triangles arranged evenly and symmetrically all the way around a central regular hexagon, like the petals of a flower. Does this composite shape have more than one line of symmetry? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Because the hexagon and the 6 evenly-spaced triangles are arranged with equal spacing all the way around, there are several different lines through the centre that all match both halves ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,65 135,80 135,110 110,125 85,110 85,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,65 96,32 124,32" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,125 96,158 124,158" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="85,80 51,66 51,94" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="85,110 51,96 51,124" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="135,80 169,66 169,94" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="135,110 169,96 169,124" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>' },
        { difficulty: 'Hard', question: 'A composite shape is built from 1 square with 2 identical triangles, one attached to the top and one attached to the bottom, both centred. Is this shape symmetrical along a horizontal line through the middle of the square? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'The top and bottom triangles are identical and centred, so folding along a horizontal middle line matches them exactly ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="65" width="70" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,20 85,65 135,65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,180 85,135 135,135" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Hard', question: 'Using the same shape as before (a square with 1 identical centred triangle on the top and 1 identical centred triangle on the bottom), is it also symmetrical along a vertical line through the middle? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Since both triangles are centred exactly on the square, they are also symmetrical about the vertical line, so this shape has two lines of symmetry ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="65" width="70" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,20 85,65 135,65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,180 85,135 135,135" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'Thandi wants to build a symmetrical composite shape using 2 semicircles. How should she arrange them?', answer: 'She should place the two semicircles with their flat (straight) sides touching, forming a full circle. This makes the shape symmetrical, since every fold through the centre matches both halves.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Lerato builds a composite shape from a square with one identical small triangle attached to the top-left corner only. Is her composite shape symmetrical? Explain.', answer: 'No — Lerato\'s composite shape is not symmetrical, because the triangle is only on one corner and has no matching triangle on the opposite side.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho builds a composite shape from 4 identical small triangles, each attached to one side of a central square (one on top, one on bottom, one on the left, one on the right). Explain why this composite shape is symmetrical, and name two different lines of symmetry it has.', answer: 'This shape is symmetrical because the triangles are placed identically and evenly on all four sides of the square. It has (at least) two lines of symmetry: a vertical line through the middle (matching the left and right triangles, and the top and bottom triangles with themselves), and a horizontal line through the middle (matching the top and bottom triangles, and the left and right triangles with themselves).', checkMode: 'self' },
        { difficulty: 'Easy', question: 'A composite shape has 1 identical semicircle attached to each end of a rectangle (like a running track shape). Is this composite shape symmetrical along a horizontal line through the middle of the rectangle? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'The identical semicircles and the rectangle are all symmetrical about the horizontal middle line, so the whole shape is symmetrical ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="60" width="80" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 70 60 A 25 25 0 0 0 70 110 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 150 60 A 25 25 0 0 1 150 110 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="85" x2="190" y2="85" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'A composite shape has 1 triangle centred on top of a rectangle, but the triangle leans slightly to one side instead of pointing straight up. Is this composite shape symmetrical along a vertical line through the middle? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'A leaning (tilted) triangle is not a mirror image of itself, so the two halves would not match when folded ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="65" y="85" width="90" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="125,40 95,85 145,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="25" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Hard', question: 'A composite shape is made from 2 identical squares placed diagonally opposite each other around a central point, with 2 identical circles placed in the remaining opposite positions. Is this whole arrangement symmetrical about a line running through the centre and through both squares? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Along that line, the two identical circles mirror each other on either side, so the composite shape is symmetrical about it ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="45" height="45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="140" y="90" width="45" height="45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="162" cy="57" r="22" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="57" cy="112" r="22" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="140" x2="185" y2="30" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Hard', question: 'Explain, in your own words, the general rule for checking whether any composite shape is symmetrical along a chosen fold line.', answer: 'To check for symmetry along a chosen line, imagine folding the composite shape along that line. If every basic shape on one side has an identical matching basic shape in the same position on the other side, the composite shape is symmetrical along that line. If even one shape is missing its match, it is not symmetrical along that line.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Perfect score! You have mastered checking composite shapes for line symmetry.' },
        { minScore: 19, message: 'Great work! Review any questions you got wrong and you will have this mastered.' },
        { minScore: 13, message: 'Good effort! Go back and read through composite shapes with line symmetry again.' },
        { minScore: 0, message: 'Keep going! Read through the study guide again carefully and then retry.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — TESSELLATING PATTERNS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Tessellating Patterns',
      questions: [
        { difficulty: 'Easy', question: 'Do squares tessellate on their own (fit together with no gaps)? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Squares fit together edge to edge with no gaps, so they tessellate ✓' },
        { difficulty: 'Easy', question: 'Do circles tessellate on their own (fit together with no gaps)? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Circles always leave curved gaps between them, so they do not tessellate ✓' },
        { difficulty: 'Easy', question: 'Do rectangles tessellate on their own? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Rectangles fit together edge to edge with no gaps, just like squares, so they tessellate ✓' },
        { difficulty: 'Easy', question: 'Do regular hexagons tessellate on their own? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Regular hexagons fit together perfectly with no gaps, like the cells of a honeycomb ✓' },
        { difficulty: 'Easy', question: 'Do equilateral triangles tessellate on their own? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Equilateral triangles fit together perfectly around a point with no gaps, so they tessellate ✓' },
        { difficulty: 'Easy', question: 'Do regular pentagons tessellate on their own? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Regular pentagons always leave small gaps between them, no matter how they are arranged ✓' },
        { difficulty: 'Medium', question: 'Name one everyday object or place where you can see a tessellating pattern.', answer: 'floor tiles (or honeycomb, or a brick wall)', checkMode: 'auto', correctAnswer: 'floor tiles', correctAnswers: ['floor tiles', 'tiles', 'honeycomb', 'brick wall', 'bricks', 'wall tiles', 'floor', 'wall'], explanation: 'Floor tiles, honeycombs and brick walls are all everyday examples of tessellating patterns ✓' },
        { difficulty: 'Medium', question: 'A honeycomb is made up of which basic shape, repeated over and over with no gaps?', answer: 'hexagon', checkMode: 'auto', correctAnswer: 'hexagon', correctAnswers: ['hexagon', 'hexagons', 'regular hexagon', 'a hexagon'], explanation: 'Bees build honeycomb cells in the shape of regular hexagons, which tessellate perfectly ✓' },
        { difficulty: 'Medium', question: 'Floor tiles are usually which basic shape or shapes?', answer: 'squares or rectangles', checkMode: 'auto', correctAnswer: 'squares or rectangles', correctAnswers: ['squares or rectangles', 'square or rectangle', 'squares and rectangles', 'square', 'squares', 'rectangle', 'rectangles'], explanation: 'Floor tiles are usually square or rectangular because these shapes tessellate with no gaps ✓' },
        { difficulty: 'Medium', question: 'Why do 4 squares meeting at a single point leave no gap? Each corner (angle) of a square is 90°. What do the 4 angles add up to?', answer: '360°', checkMode: 'auto', correctAnswer: '360', correctAnswers: ['360', '360°', '360 degrees'], explanation: '90° + 90° + 90° + 90° = 360°, a complete turn with no gap ✓' },
        { difficulty: 'Medium', question: 'Why do 3 regular hexagons meeting at a single point leave no gap? Each corner (angle) of a regular hexagon is 120°. What do the 3 angles add up to?', answer: '360°', checkMode: 'auto', correctAnswer: '360', correctAnswers: ['360', '360°', '360 degrees'], explanation: '120° + 120° + 120° = 360°, a complete turn with no gap ✓' },
        { difficulty: 'Medium', question: 'A brick wall is a real-life example of which basic shape tessellating?', answer: 'rectangle', checkMode: 'auto', correctAnswer: 'rectangle', correctAnswers: ['rectangle', 'rectangles', 'a rectangle'], explanation: 'Bricks are rectangular, and they tessellate in rows to build a wall ✓' },
        { difficulty: 'Medium', question: 'Amahle tries to tessellate circles by placing them in rows, each circle touching its neighbours. Does this cover the surface with no gaps? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Curved shapes like circles always leave small curved gaps between them, no matter how they are arranged ✓' },
        { difficulty: 'Medium', question: 'A regular pentagon has interior angles of 108° each. Do 3 of these angles add up to exactly 360°? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: '108° + 108° + 108° = 324°, which is less than 360°, so a gap is left ✓' },
        { difficulty: 'Medium', question: 'Soccer balls are often covered with hexagon and pentagon shapes stitched together. Do regular pentagons alone tessellate perfectly on a flat surface? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Regular pentagons cannot tessellate alone on a flat surface — they always leave gaps ✓' },
        { difficulty: 'Hard', question: 'A regular hexagon has interior angles of 120°. Explain why regular hexagons tessellate perfectly, using this angle in your answer.', answer: 'When hexagons meet at a single point, 3 hexagons fit around that point because 120° + 120° + 120° = 360°, which is a complete turn with no gap and no overlap. Since the angles divide evenly into 360°, the hexagons tile the surface perfectly.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato says a regular pentagon will tessellate on its own because it has straight sides. Is she correct? Explain.', answer: 'No, Lerato is not correct. Even though a regular pentagon has straight sides, its angles (108° each) do not divide evenly into 360°, so when you try to fit pentagons together around a point, small gaps are always left. Having straight sides is not enough — the angles must also fit together perfectly.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Do you need gaps between shapes for a pattern to be a true tessellation? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'A true tessellation has no gaps and no overlaps between the repeating shapes ✓' },
        { difficulty: 'Easy', question: 'Is it allowed for shapes in a tessellation to overlap each other? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'A true tessellation has no overlapping shapes, as well as no gaps ✓' },
        { difficulty: 'Medium', question: 'Which shape do wall tiles in a bathroom most commonly use to tessellate?', answer: 'squares or rectangles', checkMode: 'auto', correctAnswer: 'squares or rectangles', correctAnswers: ['squares or rectangles', 'square or rectangle', 'squares and rectangles', 'square', 'squares', 'rectangle', 'rectangles'], explanation: 'Wall tiles are usually square or rectangular tiles that tessellate across the wall ✓' },
        { difficulty: 'Medium', question: 'If you tried to tessellate a pattern using only regular pentagons and regular hexagons mixed together, would the pentagons alone still leave gaps when used on their own? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Regular pentagons on their own always leave gaps, since their 108° angles do not divide evenly into 360° ✓' },
        { difficulty: 'Hard', question: 'Explain how to test whether any shape will tessellate, without needing to know the exact angle measurements.', answer: 'Draw or picture several copies of the shape fitted together edge to edge around a point. If the copies fit together perfectly all the way around with no gaps and no overlaps, and you can keep repeating this pattern in every direction, the shape tessellates. If gaps always appear, no matter how the shape is arranged, it does not tessellate.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bongani says that any shape with straight sides will tessellate. Give one example that proves he is wrong.', answer: 'Bongani is wrong. A regular pentagon has straight sides, but it does not tessellate on its own — its interior angles of 108° do not divide evenly into 360°, so gaps are always left when pentagons are fitted together around a point.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A tiler is covering a floor and wants no gaps or overlaps. Should she choose circular tiles or square tiles?', answer: 'square tiles', checkMode: 'auto', correctAnswer: 'square tiles', correctAnswers: ['square tiles', 'squares', 'square'], explanation: 'Square tiles tessellate with no gaps, while circular tiles always leave curved gaps ✓' },
        { difficulty: 'Medium', question: 'Which of these shapes tessellates on its own: a regular pentagon or an equilateral triangle?', answer: 'equilateral triangle', checkMode: 'auto', correctAnswer: 'equilateral triangle', correctAnswers: ['equilateral triangle', 'triangle', 'an equilateral triangle', 'a triangle'], explanation: 'Equilateral triangles tessellate because 6 of their 60° angles fit exactly around a point (6 × 60° = 360°); regular pentagons do not tessellate ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Perfect score! You have mastered which shapes tessellate and why.' },
        { minScore: 19, message: 'Great work! Review any questions you got wrong and you will have this mastered.' },
        { minScore: 13, message: 'Good effort! Go back and read through tessellating patterns again.' },
        { minScore: 0, message: 'Keep going! Read through the study guide again carefully and then retry.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP, COMBINED AND REASONING QUESTIONS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Multi-Step and Combined Problems',
      questions: [
        { difficulty: 'Medium', question: 'A house picture is made from 1 triangle (roof) and 1 square (walls), and the roof triangle is centred exactly on top of the square. How many basic shapes make up this composite shape, and is it symmetrical along a vertical line through the middle? Give both answers.', answer: '2 basic shapes; Yes, it is symmetrical', checkMode: 'auto', correctAnswer: '2, yes', correctAnswers: ['2, yes', '2 and yes', '2; yes', '2 yes'], explanation: '1 triangle + 1 square = 2 basic shapes. Since the triangle is centred, folding down the middle matches both halves, so it is symmetrical ✓' },
        { difficulty: 'Medium', question: 'A composite shape is made from 4 squares arranged in a 2-by-2 block with no gaps. How many basic shapes make up this composite shape, and do squares tessellate on their own?', answer: '4 basic shapes; Yes, squares tessellate', checkMode: 'auto', correctAnswer: '4, yes', correctAnswers: ['4, yes', '4 and yes', '4; yes', '4 yes'], explanation: '4 squares make up the shape. Squares tessellate on their own because their 90° angles divide evenly into 360° ✓' },
        { difficulty: 'Medium', question: 'A pattern is made from 6 identical equilateral triangles arranged edge to edge with no gaps to form a regular hexagon shape. How many basic shapes were used, and do equilateral triangles tessellate on their own?', answer: '6 basic shapes; Yes, they tessellate', checkMode: 'auto', correctAnswer: '6, yes', correctAnswers: ['6, yes', '6 and yes', '6; yes', '6 yes'], explanation: '6 triangles make up the pattern. Equilateral triangles tessellate because 6 of their 60° angles add up to 360° ✓' },
        { difficulty: 'Hard', question: 'A composite shape is built from 2 identical semicircles joined at their flat edges to form a circle, with a small triangle attached centred on top. How many basic shapes make up this composite shape in total?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'three'], explanation: '2 semicircles + 1 triangle = 3 basic shapes ✓' },
        { difficulty: 'Hard', question: 'Using the shape from the previous question (2 identical semicircles forming a circle, with a small triangle centred on top), is the whole composite shape symmetrical along a vertical line through the middle? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'The circle is symmetrical about any line through its centre, and the triangle is centred too, so the whole shape is symmetrical along the vertical middle line ✓' },
        { difficulty: 'Hard', question: 'A house composite shape (1 triangle roof centred on 1 square) is symmetrical. A pentagon does not tessellate on its own. Which basic 2D shape appears in both the house example and does tessellate on its own?', answer: 'square', checkMode: 'auto', correctAnswer: 'square', correctAnswers: ['square', 'a square', 'squares'], explanation: 'The square in the house is the shape that both appears in a symmetrical composite shape and tessellates on its own ✓' },
        { difficulty: 'Hard', question: 'A pattern uses 3 regular hexagons meeting at a single point with no gaps. How many degrees does each hexagon angle measure, and what do the 3 angles add up to?', answer: '120° each; total 360°', checkMode: 'auto', correctAnswer: '120, 360', correctAnswers: ['120, 360', '120 and 360', '120° and 360°', '120° each; total 360°'], explanation: 'Each interior angle of a regular hexagon is 120°, and 120° × 3 = 360°, a complete turn with no gap ✓' },
        { difficulty: 'Hard', question: 'A composite shape has 2 identical triangles attached to the left and right sides of a central circle, arranged symmetrically. It also uses circles, which do not tessellate on their own. Is the composite shape itself symmetrical along a vertical line through the centre? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Whether a shape tessellates is a separate property from whether a composite shape is symmetrical — the two identical, symmetrically placed triangles and the circle still make this composite shape symmetrical ✓' },
        { difficulty: 'Medium', question: 'A composite shape is made from 1 rectangle (body) with 2 identical circles (wheels) placed symmetrically underneath, like a simple car. How many basic shapes are there, and is the whole picture symmetrical along a vertical line through the middle?', answer: '3 basic shapes; Yes, it is symmetrical', checkMode: 'auto', correctAnswer: '3, yes', correctAnswers: ['3, yes', '3 and yes', '3; yes', '3 yes'], explanation: '1 rectangle + 2 circles = 3 basic shapes. Since the wheels are identical and placed symmetrically, the picture is symmetrical ✓' },
        { difficulty: 'Medium', question: 'A composite shape is made from 1 rectangle (body) with 2 different-sized circles (wheels) placed underneath — one bigger than the other. Is the whole picture symmetrical along a vertical line through the middle? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Since the two wheels are different sizes, they do not mirror each other exactly, so the picture is not symmetrical ✓' },
        { difficulty: 'Hard', question: 'A tiling pattern uses only regular hexagons, which tessellate with no gaps. A second pattern uses only circles, which leave gaps. If a builder wants zero gaps on a floor, which pattern should she choose?', answer: 'the hexagon pattern', checkMode: 'auto', correctAnswer: 'hexagon pattern', correctAnswers: ['hexagon pattern', 'the hexagon pattern', 'hexagons', 'hexagon'], explanation: 'Regular hexagons tessellate with no gaps, so the hexagon pattern is the correct choice for a gap-free floor ✓' },
        { difficulty: 'Hard', question: 'A composite shape is made from 5 identical squares arranged in a plus/cross shape (one central square with one square attached to each of its four sides). How many basic shapes make up this composite shape, and how many lines of symmetry does the whole cross shape have (at least)?', answer: '5 basic shapes; at least 2 lines of symmetry', checkMode: 'auto', correctAnswer: '5, 2', correctAnswers: ['5, 2', '5 and 2', '5; 2', '5, at least 2'], explanation: '5 squares make up the cross. It has at least 2 lines of symmetry: one vertical line and one horizontal line through the centre ✓' },
        { difficulty: 'Medium', question: 'Which basic shape used in the plus/cross composite shape (squares) also tessellates on its own with no gaps?', answer: 'square', checkMode: 'auto', correctAnswer: 'square', correctAnswers: ['square', 'a square', 'squares'], explanation: 'Squares tessellate on their own, and they are also the basic shape used to build the cross composite shape ✓' },
        { difficulty: 'Hard', question: 'A window design is made from 1 large square divided visually into 4 smaller identical squares by a cross shape in the middle. How many basic shapes (the 4 small squares) make up the window, and is the design symmetrical along both a vertical and a horizontal line through the centre?', answer: '4 basic shapes; Yes, symmetrical along both lines', checkMode: 'auto', correctAnswer: '4, yes', correctAnswers: ['4, yes', '4 and yes', '4; yes', '4 yes'], explanation: '4 small squares make up the window. Since all 4 squares are identical and evenly placed, the design is symmetrical along both the vertical and horizontal middle lines ✓' },
        { difficulty: 'Hard', question: 'A necklace pattern repeats 1 circle bead then 1 square bead then 1 circle bead then 1 square bead, and so on. If there are 12 beads in total, how many are circles?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: 'The pattern alternates circle, square, circle, square... so exactly half of the 12 beads are circles: 12 ÷ 2 = 6 ✓' },
        { difficulty: 'Hard', question: 'Kagiso builds a fence pattern using 10 identical triangular fence posts and 10 identical rectangular fence panels, alternating one after another. How many basic shapes make up the whole fence pattern?', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', 'twenty'], explanation: '10 triangles + 10 rectangles = 20 basic shapes ✓' },
        { difficulty: 'Hard', question: 'Compare a floor pattern using only squares to one using only regular pentagons. Explain which one will tessellate with no gaps and why.', answer: 'The square pattern will tessellate with no gaps, because the interior angles of a square (90° each) divide evenly into 360° (4 × 90° = 360°). Regular pentagons have interior angles of 108° each, and 108° does not divide evenly into 360°, so gaps are always left between pentagons.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Explain the difference between a composite shape being "symmetrical" and a shape "tessellating." Use an example of each to support your explanation.', answer: 'A composite shape is symmetrical if it can be folded along a line so both halves match exactly — for example, a house made from a triangle centred on a square is symmetrical. A shape tessellates if copies of it can be repeated over and over to cover a flat surface with no gaps or overlaps — for example, squares tessellate because they fit together edge to edge across a whole floor. Symmetry is about one shape folding onto itself, while tessellation is about many copies of a shape covering a surface.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Zanele builds a composite picture of a flower using 1 central circle and 6 identical petal circles arranged evenly all the way around it. Explain whether this composite shape is symmetrical, and how many basic shapes it uses.', answer: 'The flower uses 1 + 6 = 7 basic shapes in total. It is symmetrical, and because the 6 petals are arranged evenly all the way around the centre, there are several different lines of symmetry running through the centre and through opposite petals.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Explain why a regular hexagon tessellates but a circle does not, even though both shapes look fairly "round" or smooth-sided when there are many of them together.', answer: 'A regular hexagon has straight sides and angles (120° each) that divide evenly into 360°, so 3 hexagons fit perfectly around a point with no gaps. A circle has a curved edge with no straight sides or angles at all, so when circles are placed next to each other, the curves always leave small gaps between them — no arrangement of circles can remove these gaps.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A composite shape uses 1 rectangle and 1 semicircle to make a door with an arched top. Is a semicircle one of the shapes listed as tessellating on its own? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Semicircles are not in the list of shapes (squares, rectangles, equilateral triangles, regular hexagons) that tessellate on their own ✓' },
        { difficulty: 'Medium', question: 'A composite shape uses 2 rectangles, and rectangles are known to tessellate on their own. If you used 100 identical rectangles edge to edge with no gaps, would this be a valid tessellation? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Since rectangles tessellate on their own, any number of identical rectangles fitted edge to edge with no gaps forms a valid tessellation ✓' },
        { difficulty: 'Hard', question: 'A composite shape is symmetrical, made from 2 identical triangles forming a diamond. If you then tried to tessellate this diamond composite shape by repeating it many times with no gaps, would this work? Explain your reasoning.', answer: 'Yes, this would work. A diamond made from 2 identical triangles is a four-sided shape (a rhombus), and shapes like this tessellate because their angles fit together perfectly around each point where the diamonds meet, just as squares and rectangles do.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A design uses a symmetrical composite shape (a house: 1 triangle centred on 1 square) repeated many times in a row, each house touching the next with no gaps between the square walls. Does using a symmetrical composite shape guarantee that the repeated pattern will tessellate perfectly? Explain.', answer: 'Not necessarily — a composite shape being symmetrical is a separate property from whether it tessellates. In this case, the square walls do tessellate (since squares tessellate on their own), but the triangular roofs sticking up would leave gaps between the houses unless the shape is specially designed to interlock, so the whole composite house shape does not automatically tessellate just because it is symmetrical.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A composite picture is made from 2 identical triangles forming a symmetrical diamond, and 3 more identical diamonds are placed next to it so all 4 diamonds tessellate with no gaps. How many basic triangle shapes are there in total across all 4 diamonds?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'eight'], explanation: 'Each diamond uses 2 triangles. 4 diamonds × 2 triangles = 8 basic shapes in total ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered multi-step composite shape and tessellation problems.' },
        { minScore: 19, message: 'Great work! Review any questions you got wrong and you will have this mastered.' },
        { minScore: 13, message: 'Good effort! Go back through all three sections and try again.' },
        { minScore: 0, message: 'Keep going! Read through the study guide again carefully and then retry.' },
      ],
    },
  ],
}
