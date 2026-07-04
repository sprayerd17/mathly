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
      videoPlaceholder:
        'Short video showing squares, triangles and hexagons tessellating perfectly across a surface, followed by an example of circles failing to tessellate because of the gaps left between them',
      diagramPlaceholder:
        'A grid comparing a perfect square tessellation with no gaps against a failed circle tessellation showing curved gaps between each circle',
    },
  ],

  topicPractice: [

    // ── SECTION 1: BUILDING COMPOSITE SHAPES ──────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'A house picture is made from 1 triangle (the roof) and 1 square (the walls). How many basic shapes make up this composite shape in total?',
      correctAnswer: '2',
      answer: '2',
      explanation: '1 triangle + 1 square = 2 basic shapes in total ✓',
    },
    {
      difficulty: 'Easy',
      checkMode: 'self',
      question: 'Look at a picture of a rocket: a triangle at the top, a rectangle in the middle, and two small triangles as fins on the sides. Name the basic shapes used.',
      answer: 'The rocket is made from 3 triangles (the nose cone and 2 fins) and 1 rectangle (the body).',
    },
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'A robot picture is built from 1 square (head), 1 rectangle (body), 2 small circles (eyes) and 2 rectangles (arms). How many basic shapes were used altogether?',
      correctAnswer: '6',
      answer: '6',
      explanation: '1 square + 1 rectangle + 2 circles + 2 rectangles = 6 basic shapes ✓',
    },
    {
      difficulty: 'Medium',
      checkMode: 'self',
      question: 'Draw or describe a composite shape you could build using exactly 1 circle and 2 triangles.',
      answer: 'Answers will vary — for example, an ice cream cone (circle scoop on a triangle cone) with a small triangle flag stuck in the top, or a fish (circle body with a triangle tail and a triangle fin).',
    },
    {
      difficulty: 'Hard',
      checkMode: 'self',
      question: 'Kagiso says any composite shape must be made from at least 3 basic shapes. Is he correct? Explain.',
      answer: 'No — a composite shape only needs 2 or more basic shapes joined together. For example, a house shape made from just 1 triangle and 1 square is already a composite shape, even though it only uses 2 basic shapes.',
    },

    // ── SECTION 2: COMPOSITE SHAPES WITH LINE SYMMETRY ────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Two identical triangles are placed back-to-back, flat sides touching, to form a diamond. Is this composite shape symmetrical? Write yes or no.',
      correctAnswer: 'Yes',
      correctAnswers: ['Yes', 'yes'],
      answer: 'Yes',
      explanation: 'The two identical triangles mirror each other exactly, so folding along the join line matches both halves ✓',
    },
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'An arrow shape has 1 triangle attached to only the right end of a rectangle. Is this composite shape symmetrical along a vertical line down the middle? Write yes or no.',
      correctAnswer: 'No',
      correctAnswers: ['No', 'no'],
      answer: 'No',
      explanation: 'The triangle only appears on the right side, so folding down the middle would not match the left and right halves ✓',
    },
    {
      difficulty: 'Medium',
      checkMode: 'self',
      question: 'Thandi wants to build a symmetrical composite shape using 2 semicircles. How should she arrange them?',
      answer: 'She should place the two semicircles with their flat (straight) sides touching, forming a full circle. This makes the shape symmetrical, since every fold through the centre matches both halves.',
    },
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'A composite shape is made from a square with 1 identical small triangle centred exactly on top (like a simple house). Is this composite shape symmetrical? Write yes or no.',
      correctAnswer: 'Yes',
      correctAnswers: ['Yes', 'yes'],
      answer: 'Yes',
      explanation: 'Since the triangle is centred exactly in the middle of the square, folding down the vertical middle line matches both halves ✓',
    },
    {
      difficulty: 'Hard',
      checkMode: 'self',
      question: 'Sipho builds a composite shape from 4 identical small triangles, each attached to one side of a central square (one on top, one on bottom, one on the left, one on the right). Explain why this composite shape is symmetrical, and name two different lines of symmetry it has.',
      answer: 'This shape is symmetrical because the triangles are placed identically and evenly on all four sides of the square. It has (at least) two lines of symmetry: a vertical line through the middle (matching the left and right triangles, and the top and bottom triangles with themselves), and a horizontal line through the middle (matching the top and bottom triangles, and the left and right triangles with themselves).',
    },

    // ── SECTION 3: TESSELLATING PATTERNS ──────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Do squares tessellate on their own? Write yes or no.',
      correctAnswer: 'Yes',
      correctAnswers: ['Yes', 'yes'],
      answer: 'Yes',
      explanation: 'Squares fit together edge to edge with no gaps, so they tessellate ✓',
    },
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Do circles tessellate on their own? Write yes or no.',
      correctAnswer: 'No',
      correctAnswers: ['No', 'no'],
      answer: 'No',
      explanation: 'Circles always leave curved gaps between them, so they do not tessellate ✓',
    },
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Name one everyday object or place where you can see a tessellating pattern.',
      correctAnswer: 'floor tiles',
      correctAnswers: ['floor tiles', 'tiles', 'honeycomb', 'brick wall', 'bricks', 'wall tiles', 'floor', 'wall'],
      answer: 'floor tiles (or honeycomb, or a brick wall)',
      explanation: 'Floor tiles, honeycombs and brick walls are all everyday examples of tessellating patterns ✓',
    },
    {
      difficulty: 'Medium',
      checkMode: 'self',
      question: 'Lerato says a regular pentagon will tessellate on its own because it has straight sides. Is she correct? Explain.',
      answer: 'No, Lerato is not correct. Even though a regular pentagon has straight sides, its angles (108° each) do not divide evenly into 360°, so when you try to fit pentagons together around a point, small gaps are always left. Having straight sides is not enough — the angles must also fit together perfectly.',
    },
    {
      difficulty: 'Hard',
      checkMode: 'self',
      question: 'A regular hexagon has interior angles of 120°. Explain, using this angle, why regular hexagons tessellate perfectly.',
      answer: 'When hexagons meet at a single point, 3 hexagons fit around that point because 120° + 120° + 120° = 360°, which is a complete turn with no gap and no overlap. Since the angles divide evenly into 360°, the hexagons tile the surface perfectly.',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Perfect score! You have mastered composite shapes and tessellation.' },
    { minScore: 11, message: 'Excellent work! Review the questions you got wrong and you will have this mastered.' },
    { minScore: 8, message: 'Good effort! Go back and read through the sections you struggled with.' },
    { minScore: 0, message: 'Keep going! Read through the study guide again carefully and then retry.' },
  ],
}
