import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (transformation geometry roles) ──────────────────────────
// line y=x (S1) / original point (S2) / original vertices (S3) → blue  (#2563eb)
// original point (S1) / transformation (S2) / new vertices (S3) → green (#16a34a)
// reflected point (S1) / image point (S2) / scale factor (S3)  → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Transformation Geometry',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REFLECTING POINTS AND FIGURES IN THE LINE y=x
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reflecting-in-y-equals-x',
      title: 'Reflecting Points and Figures in the Line y=x',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;">We extend our reflection skills to include reflecting points, line segments and simple geometric figures in the ${bl('line y=x')} — a diagonal line through the origin. Reflecting a ${gr('point (a,b)')} in the ${bl('line y=x')} swaps the coordinates, giving the ${or('image (b,a)')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('line y=x')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('original point')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('reflected point')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The reflection rule</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">The ${bl('line y=x')} is a diagonal line through the origin where every point has equal x- and y-values, for example (1,1), (2,2), (3,3).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">To reflect ${gr('point (a,b)')} in the ${bl('line y=x')}: simply <strong>swap the coordinates</strong>. The ${or('image is (b,a)')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">For a figure, reflect each vertex separately: each ${gr('vertex (a,b)')} maps to ${or('image (b,a)')}. Then join the image vertices in the same order.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why swapping works</p>` +
        `<p style="margin:0;color:#1e3a8a;">The ${bl('line y=x')} is the set of all points where x = y. Reflecting across this line swaps the role of the x- and y-axes — so every ${gr('point (a,b)')} maps to the ${or('point (b,a)')} on the other side of the line.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Reflect the point (3,7) in the line y=x.',
          answer: `The ${or('image')} of ${gr('(3,7)')} is ${or('(7,3)')}`,
          steps: [
            `Identify the ${gr('original point')}: ${gr('(3,7)')}. The ${bl('line y=x')} is the diagonal through the origin.`,
            `<strong>Swap the coordinates:</strong> ${gr('(3,7)')} → ${or('(7,3)')}`,
            `The ${or('image (7,3)')} lies on the other side of the ${bl('line y=x')}. See the diagram below showing this reflection across the diagonal line.`,
          ],
        },
        {
          question: 'Sipho reflects the point (−4,2) in the line y=x. Find the image.',
          answer: `The ${or('image')} of ${gr('(−4,2)')} is ${or('(2,−4)')}`,
          steps: [
            `Identify the ${gr('original point')}: ${gr('(−4,2)')}. The ${bl('line y=x')} passes through the origin at 45°.`,
            `<strong>Swap coordinates:</strong> ${gr('(−4,2)')} → ${or('(2,−4)')}`,
            `Answer: The ${or('image is (2,−4)')}. Note that negative values are preserved in their new position after swapping. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Reflect the point (4,9) in the line y=x.',
          answer: '(9,4)',
          checkMode: 'auto',
          correctAnswer: '(9,4)',
          correctAnswers: ['(9,4)', '9,4'],
          explanation: 'Reflecting in y=x swaps the coordinates.\n(4,9) → (9,4) ✓',
        },

        // ── Q2 Easy ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Reflect the point (−2,6) in the line y=x.',
          answer: '(6,−2)',
          checkMode: 'auto',
          correctAnswer: '(6,-2)',
          correctAnswers: ['(6,-2)', '(6,−2)', '6,-2', '6,−2'],
          explanation: 'Reflecting in y=x swaps the coordinates.\n(−2,6) → (6,−2) ✓',
        },

        // ── Q3 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho reflects (7,−3) in the line y=x and gets (−3,7). Is he correct? Explain.',
          answer: 'Yes — reflecting in y=x swaps the coordinates, so (7,−3) becomes (−3,7).',
          checkMode: 'self',
        },

        // ── Q9 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A point (4,7) is reflected in the line y=x, then translated by (2,−1). Find the final position.',
          answer: '(9,3)',
          checkMode: 'auto',
          correctAnswer: '(9,3)',
          correctAnswers: ['(9,3)', '9,3'],
          explanation: 'Step 1: Reflect (4,7) in y=x → swap coordinates → (7,4).\nStep 2: Translate by (2,−1): (7+2, 4+(−1)) = (9,3).\nFinal position: (9,3) ✓',
        },

        // ── Q10 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle says reflecting a point twice in the line y=x returns it to its original position. Is she correct? Explain.',
          answer: 'Yes — reflecting (a,b) in y=x gives (b,a); reflecting (b,a) again in y=x gives back (a,b), the original point.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="[Diagram needed: a Cartesian plane showing the diagonal line y=x, with point (3,7) and its reflection (7,3) marked on either side of the line]" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to reflect a point and a simple figure in the line y=x by swapping coordinates" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — IDENTIFYING TRANSFORMATIONS FROM GIVEN IMAGE COORDINATES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'identifying-transformations',
      title: 'Identifying Transformations from Given Image Coordinates',
      icon: '🔎',
      explanation:
        `<p style="margin-bottom:16px;">Given the coordinates of a ${bl('point')} and its ${or('image')} after a transformation, we can identify what transformation was applied — reflection in the x-axis, y-axis, or line y=x, or a translation — by comparing what changed.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original point')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('image point')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('transformation identified')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Transformation rules to remember</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Reflection in x-axis</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(a, b) → (a, −b)<br>x stays the same; y changes sign.</p>` +
        `</div>` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Reflection in y-axis</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(a, b) → (−a, b)<br>y stays the same; x changes sign.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Reflection in y=x</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(a, b) → (b, a)<br>Coordinates are swapped.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Translation</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(a, b) → (a+h, b+k)<br>Both coordinates shift by a fixed amount.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to identify the transformation</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Step 1</strong> — Compare the ${bl('original')} and ${or('image')} coordinates.<br><strong>Step 2</strong> — Check what changed: did x change sign? did y change sign? did they swap? did both shift by a constant?<br><strong>Step 3</strong> — Match to the rule and name the ${gr('transformation')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A point (5,2) becomes (5,−2) after a transformation. Identify the transformation.',
          answer: `${gr('Reflection in the x-axis')}`,
          steps: [
            `Compare ${bl('(5,2)')} and ${or('(5,−2)')}.`,
            `The x-value stayed the same (5 = 5). The y-value's sign flipped: 2 → −2.`,
            `This matches the rule (a,b) → (a,−b), which is ${gr('reflection in the x-axis')}. ✓`,
          ],
        },
        {
          question: `Lerato's point (3,8) becomes (8,3). What transformation was applied?`,
          answer: `${gr('Reflection in the line y=x')}`,
          steps: [
            `Compare ${bl('(3,8)')} and ${or('(8,3)')}.`,
            `The coordinates were swapped: 3 and 8 exchanged positions.`,
            `This matches the rule (a,b) → (b,a), indicating ${gr('reflection in the line y=x')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A point (6,1) becomes (6,−1) after a transformation. Identify the transformation.',
          answer: 'reflection in the x-axis',
          checkMode: 'auto',
          correctAnswer: 'reflection in the x-axis',
          correctAnswers: ['reflection in the x-axis', 'reflection in x-axis', 'x-axis reflection'],
          explanation: 'The x-value stayed the same (6 = 6). The y-value changed sign: 1 → −1.\nThis is a reflection in the x-axis: (a,b) → (a,−b). ✓',
        },

        // ── Q5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A point (−5,4) becomes (5,4) after a transformation. Identify the transformation.',
          answer: 'reflection in the y-axis',
          checkMode: 'auto',
          correctAnswer: 'reflection in the y-axis',
          correctAnswers: ['reflection in the y-axis', 'reflection in y-axis', 'y-axis reflection'],
          explanation: 'The y-value stayed the same (4 = 4). The x-value changed sign: −5 → 5.\nThis is a reflection in the y-axis: (a,b) → (−a,b). ✓',
        },

        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: `Lerato's point (9,2) becomes (2,9). Identify the transformation and explain your reasoning.`,
          answer: 'Reflection in the line y=x, since the coordinates have been swapped.',
          checkMode: 'self',
        },

        // ── Q12 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: `Sipho's point (6,3) becomes (−6,3). Identify the transformation.`,
          answer: `Reflection in the y-axis, since the x-coordinate's sign flipped while y stayed the same.`,
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Cartesian plane showing transformation examples: reflection in x-axis, y-axis, line y=x, and a translation, with original and image points colour coded" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to identify a transformation by comparing original and image coordinates" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — INVESTIGATING COORDINATES AFTER ENLARGEMENT OR REDUCTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'enlargement-reduction-scale-factor',
      title: 'Investigating Coordinates After Enlargement or Reduction by a Scale Factor',
      icon: '↕',
      explanation:
        `<p style="margin-bottom:16px;">We investigate the coordinates of vertices of figures that have been enlarged or reduced by a given ${or('scale factor')} from the origin — multiplying both x and y coordinates of each ${bl('vertex')} by the ${or('scale factor')} to find the ${gr('new coordinates')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original vertices')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('scale factor')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('new vertices')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The enlargement and reduction rule</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">For a ${or('scale factor')} k &gt; 1: every ${bl('vertex (x,y)')} maps to ${gr('(kx,ky)')} — the shape gets bigger (${or('enlargement')}).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">For a ${or('scale factor')} 0 &lt; k &lt; 1: every ${bl('vertex (x,y)')} maps to ${gr('(kx,ky)')} — the shape gets smaller (${or('reduction')}).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">The centre of enlargement/reduction is the origin. The shape and its image are ${gr('similar')} — same shape, different size.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">What stays the same and what changes</p>` +
        `<p style="margin:0;color:#166534;">The <strong>angles</strong> of the shape do not change after a scale transformation. The <strong>side lengths</strong> are multiplied by the ${or('scale factor')} k, and so is the perimeter. The <strong>area</strong> is multiplied by k².</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A triangle has vertices (2,3), (4,3), (3,6). Enlarge it by a scale factor of 2 from the origin.',
          answer: `New vertices: ${gr('(4,6)')} , ${gr('(8,6)')} , ${gr('(6,12)')}`,
          steps: [
            `${or('Scale factor')} = 2. Multiply each coordinate of every ${bl('vertex')} by ${or('2')}.`,
            `${bl('(2,3)')} → (2×${or('2')}, 3×${or('2')}) = ${gr('(4,6)')}`,
            `${bl('(4,3)')} → (4×${or('2')}, 3×${or('2')}) = ${gr('(8,6)')}`,
            `${bl('(3,6)')} → (3×${or('2')}, 6×${or('2')}) = ${gr('(6,12)')}`,
            `<strong>New triangle vertices:</strong> ${gr('(4,6)')} , ${gr('(8,6)')} , ${gr('(6,12)')} ✓`,
          ],
        },
        {
          question: 'Thabo reduces a shape with vertex (8,12) by a scale factor of ¼ from the origin. Find the new coordinates.',
          answer: `New vertex: ${gr('(2,3)')}`,
          steps: [
            `${or('Scale factor')} = ¼. Multiply each coordinate of the ${bl('vertex')} by ${or('¼')}.`,
            `${bl('(8,12)')} → (8×${or('¼')}, 12×${or('¼')}) = ${gr('(2,3)')}`,
            `<strong>New vertex:</strong> ${gr('(2,3)')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A triangle has vertices (1,2), (3,2), (2,5). Enlarge it by a scale factor of 3 from the origin.',
          answer: '(3,6),(9,6),(6,15)',
          checkMode: 'auto',
          correctAnswer: '(3,6),(9,6),(6,15)',
          correctAnswers: ['(3,6),(9,6),(6,15)', '(3,6), (9,6), (6,15)'],
          explanation: 'Multiply each coordinate by 3:\n(1,2) → (3,6)\n(3,2) → (9,6)\n(2,5) → (6,15)\nNew vertices: (3,6), (9,6), (6,15) ✓',
        },

        // ── Q8 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo reduces a shape with vertex (12,16) by a scale factor of ¼ from the origin. Find the new coordinates.',
          answer: 'Multiply by ¼: (3,4).',
          checkMode: 'self',
        },

        // ── Q11 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A square has vertices (0,0), (2,0), (2,2), (0,2). Enlarge it by a scale factor of 5.',
          answer: '(0,0),(10,0),(10,10),(0,10)',
          checkMode: 'auto',
          correctAnswer: '(0,0),(10,0),(10,10),(0,10)',
          correctAnswers: ['(0,0),(10,0),(10,10),(0,10)', '(0,0), (10,0), (10,10), (0,10)'],
          explanation: 'Multiply each coordinate by 5:\n(0,0) → (0,0)\n(2,0) → (10,0)\n(2,2) → (10,10)\n(0,2) → (0,10)\nNew vertices: (0,0), (10,0), (10,10), (0,10) ✓',
        },

        // ── Q13 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A shape with vertex (15,20) is reduced by a scale factor of ⅕ from the origin. Find the new coordinate, then reflect it in the line y=x.',
          answer: 'Reduced: (3,4). Reflected in y=x: (4,3).',
          checkMode: 'self',
        },

        // ── Q14 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says enlarging a shape by a scale factor of 1 keeps it exactly the same. Is she correct? Explain.',
          answer: 'Yes — multiplying coordinates by a scale factor of 1 leaves them unchanged, meaning the shape remains identical in size and position.',
          checkMode: 'self',
        },

        // ── Q15 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A triangle with vertices (2,1), (4,1), (3,3) is enlarged by scale factor 4, then the result is reflected in the line y=x. Find the final coordinates.',
          answer: 'Enlarged: (8,4),(16,4),(12,12). Reflected in y=x: (4,8),(4,16),(12,12).',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="[Diagram needed: a small triangle with vertices (2,3),(4,3),(3,6) and a larger enlarged triangle with vertices (4,6),(8,6),(6,12), both shown on the same Cartesian plane radiating from the origin]" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to enlarge and reduce a shape using a scale factor from the origin on a Cartesian plane" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered transformation geometry.' },
    { minScore: 12, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
