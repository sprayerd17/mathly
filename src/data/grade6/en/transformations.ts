import type { TopicData, PracticeSet } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ─────────────────────────────────────────────────────────
// object                 → blue    (#2563eb)
// enlarged image         → green   (#16a34a)
// reduced image          → red     (#dc2626)
// scale factor           → orange  (#ea580c)
// centre of enlargement  → purple  (#7c3aed)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const rd = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

// ─── Shared "Prior knowledge" banner (blue) ────────────────────────────────
// Ties this year's Enlargement and Reduction content back to Grade 5's
// Reflection, Translation and Rotation, so learners see how the two grades
// connect: Grade 5 = same size, different position/orientation (congruent);
// Grade 6 = same shape, different size (similar).
const priorKnowledge = (title: string, body: string) =>
  `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
  `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">📘 Remember from Grade 5: ${title}</p>` +
  `<p style="margin:0;color:#1e3a8a;">${body}</p>` +
  `</div>`

// ─── Shared "Looking ahead" enrichment banner (purple) ─────────────────────
// CAPS Grade 6 draws enlargements/reductions using squared-paper grid
// counting from a marked centre of enlargement — not a formal (x, y)
// coordinate plane. Grade 7's "Transformation Geometry" topic formalises
// this using (x, y) coordinates measured from the origin, and introduces
// negative scale factors. Kept here as clearly labelled enrichment.
const lookingAhead = (title: string, body: string) =>
  `<div style="background:#faf5ff;border:1.5px solid #d8b4fe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
  `<p style="font-weight:700;color:#7c3aed;margin-bottom:6px;">🔭 Looking ahead: ${title}</p>` +
  `<p style="margin:0;color:#581c87;">${body}</p>` +
  `</div>`

export const topicData: TopicData = {
  title: 'Transformations',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS ENLARGEMENT AND REDUCTION?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-enlargement-and-reduction',
      title: 'What is Enlargement and Reduction?',
      icon: '🔍',
      explanation:
        priorKnowledge(
          'reflection, translation and rotation kept the same size',
          'In Grade 5 you learned that reflecting, translating and rotating a shape never changes its size — the image is always <strong>congruent</strong> to the object (exactly the same size and shape). This year you will meet two new transformations, enlargement and reduction, that change the SIZE of a shape while keeping the SHAPE the same.'
        ) +
        `<p style="margin-bottom:16px;">An <strong>enlargement</strong> makes a shape bigger. A <strong>reduction</strong> makes a shape smaller. In both cases the ${bl('object')} and its image are <strong>similar</strong> shapes — every angle stays exactly the same, but every side length changes by the same amount. The number that tells us how much bigger or smaller the image is, is called the <strong>${or('scale factor')}</strong>.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('object')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('enlarged image')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${rd('reduced image')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('scale factor')}</span>` +
        `</div>` +

        // ── Key properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key facts about enlargement and reduction</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Same shape</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Every angle in the image is exactly the same as the matching angle in the ${bl('object')}. The shapes are <strong>similar</strong>.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Different size</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Every side length is multiplied by the ${or('scale factor')}: image side = object side &times; ${or('scale factor')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Enlargement</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${or('scale factor')} is <strong>greater than 1</strong> (e.g. 2, 3, 4). The ${gr('image')} is bigger than the ${bl('object')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Reduction</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${or('scale factor')} is a <strong>fraction between 0 and 1</strong> (e.g. 1/2, 1/3). The ${rd('image')} is smaller than the ${bl('object')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Finding the scale factor</p>` +
        `<p style="margin:0;color:#78350f;">${or('scale factor')} = image side length &divide; matching ${bl('object')} side length. Check your answer by trying it on <strong>two different sides</strong> — a true enlargement or reduction gives the <strong>same</strong> ${or('scale factor')} every time.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A rectangle has sides 3 cm and 5 cm. It is enlarged and the image has sides 6 cm and 10 cm. Find the scale factor.',
          answer: `${or('Scale factor = 2')}`,
          steps: [
            `Divide the image side by the matching ${bl('object')} side: 6 &divide; 3 = <strong>2</strong>.`,
            `Check with the other pair of sides: 10 &divide; 5 = <strong>2</strong> as well.`,
            `Both pairs give the same value, so this is a true enlargement.`,
            `<strong>Answer:</strong> ${or('Scale factor = 2')} ✓`,
          ],
        },
        {
          question: 'A triangle has sides 4 cm, 6 cm and 8 cm. It is reduced to a similar triangle with sides 2 cm, 3 cm and 4 cm. Find the scale factor.',
          answer: `${or('Scale factor = 1/2')}`,
          steps: [
            `Divide each image side by its matching ${bl('object')} side: 2 &divide; 4 = <strong>1/2</strong>.`,
            `Check: 3 &divide; 6 = <strong>1/2</strong>, and 4 &divide; 8 = <strong>1/2</strong>.`,
            `All three pairs give the same fraction, so the scale factor is consistent.`,
            `<strong>Answer:</strong> ${or('Scale factor = 1/2')} (a reduction, since it is a fraction less than 1) ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Two right-angled triangles side by side — a smaller object triangle in blue with legs 3 and 4, and a larger enlarged image triangle in green with legs 6 and 8 — showing the same shape but a different size.',
      diagramSvg:
        '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><polygon points="20,120,44,120,20,88" fill="none" stroke="#2563eb" stroke-width="2.5"/><polygon points="120,150,168,150,120,86" fill="none" stroke="#16a34a" stroke-width="2.5"/><rect x="20" y="112" width="8" height="8" fill="none" stroke="#2563eb" stroke-width="1.5"/><rect x="120" y="142" width="8" height="8" fill="none" stroke="#16a34a" stroke-width="1.5"/><text x="32" y="133" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">3</text><text x="11" y="104" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">4</text><text x="144" y="163" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">6</text><text x="111" y="118" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">8</text><text x="32" y="146" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Object</text><text x="144" y="176" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Image (&#215;2)</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video introducing enlargement and reduction, showing how the scale factor connects an object and its image, with the object in blue, an enlarged image in green and a reduced image in red" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — ENLARGING SHAPES ON A GRID
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'enlarging-shapes-on-a-grid',
      title: 'Enlarging Shapes on a Grid',
      icon: '📈',
      explanation:
        lookingAhead(
          'enlarging using (x, y) coordinates from the origin',
          'CAPS Grade 6 enlarges shapes by counting grid squares from a marked centre of enlargement on squared paper. Using formal (x, y) coordinates measured from the origin, and using negative scale factors, is Grade 7 "Transformation Geometry" work.'
        ) +
        `<p style="margin-bottom:16px;">To enlarge a shape on squared paper, mark a <strong>${pu('centre of enlargement')}</strong> (a fixed point, often labelled O). For each vertex of the ${bl('object')}, count how many squares right/left and up/down it is from O. Multiply <strong>both</strong> counts by the ${or('scale factor')}. Plot the new vertex that many squares from O in the <strong>same direction</strong>. Join up the new vertices to draw the enlarged image.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('centre of enlargement')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('object')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('image')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('scale factor')}</span>` +
        `</div>` +

        // ── Key properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key facts about enlarging on a grid</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Centre stays fixed</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${pu('centre of enlargement')} does not move. Every vertex is measured, and re-plotted, from this same fixed point.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Multiply, don't add</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Both the "right/left" count and the "up/down" count are <strong>multiplied</strong> by the ${or('scale factor')} — never added to.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Angles unchanged</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${gr('image')} has exactly the same angles as the ${bl('object')} — only the size changes.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Straight-line rule</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${pu('centre')}, an ${bl('object')} vertex, and its matching ${gr('image')} vertex always lie on <strong>one straight line</strong>.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Step by step</p>` +
        `<p style="margin:0;color:#14532d;">1) Mark the ${pu('centre')} O. 2) Count squares right/up (or left/down) from O to each ${bl('object')} vertex. 3) Multiply both counts by the ${or('scale factor')}. 4) Plot each new point that many squares from O. 5) Join the new points to complete the ${gr('image')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vertex A is 1 square right and 2 squares up from the centre of enlargement O. The shape is enlarged by a scale factor of 3. Find the position of image vertex A′.',
          answer: `${gr("A′ is 3 right, 6 up from O")}`,
          steps: [
            `Start with the ${bl('object')} vertex A: 1 right, 2 up from O.`,
            `Multiply the "right" count by the ${or('scale factor')}: 1 &times; 3 = <strong>3</strong>.`,
            `Multiply the "up" count by the ${or('scale factor')}: 2 &times; 3 = <strong>6</strong>.`,
            `<strong>Answer:</strong> ${gr("A′ is 3 right, 6 up from O")} ✓`,
          ],
        },
        {
          question: 'Triangle XYZ has centre of enlargement O. X is 1 right, 1 up from O; Y is 3 right, 1 up; Z is 1 right, 3 up. Enlarge the triangle by a scale factor of 2. Find the positions of X′, Y′ and Z′.',
          answer: `${gr("X′ is 2 right 2 up; Y′ is 6 right 2 up; Z′ is 2 right 6 up")}`,
          steps: [
            `Multiply every count for X by 2: (1 &times; 2, 1 &times; 2) = <strong>2 right, 2 up</strong>.`,
            `Multiply every count for Y by 2: (3 &times; 2, 1 &times; 2) = <strong>6 right, 2 up</strong>.`,
            `Multiply every count for Z by 2: (1 &times; 2, 3 &times; 2) = <strong>2 right, 6 up</strong>.`,
            `Check: the base XY was 3 &minus; 1 = 2 squares; the image base X′Y′ is 6 &minus; 2 = 4 squares, which is 2 &times; 2 ✓.`,
            `<strong>Answer:</strong> ${gr("X′(2, 2), Y′(6, 2), Z′(2, 6) measured as squares right and up from O")} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Squared grid showing a small blue object triangle XYZ enlarged by scale factor 2 from a purple centre of enlargement O, to a larger green image triangle X′Y′Z′, with dashed rays from O through each pair of matching vertices.',
      diagramSvg:
        '<svg viewBox="0 0 215 169" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="16" x2="30" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="49" y1="16" x2="49" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="68" y1="16" x2="68" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="87" y1="16" x2="87" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="106" y1="16" x2="106" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="125" y1="16" x2="125" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="144" y1="16" x2="144" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="163" y1="16" x2="163" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="16" x2="182" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="201" y1="16" x2="201" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="16" x2="201" y2="16" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="35" x2="201" y2="35" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="54" x2="201" y2="54" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="73" x2="201" y2="73" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="92" x2="201" y2="92" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="111" x2="201" y2="111" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="130" x2="201" y2="130" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="149" x2="201" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="149" x2="201" y2="149" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="16" x2="30" y2="149" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="149" x2="68" y2="111" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="30" y1="149" x2="144" y2="111" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="30" y1="149" x2="68" y2="35" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,3"/><polygon points="49,130 87,130 49,92" fill="none" stroke="#2563eb" stroke-width="2.5"/><polygon points="68,111 144,111 68,35" fill="none" stroke="#16a34a" stroke-width="2.5"/><circle cx="30" cy="149" r="3.6" fill="#7c3aed"/><text x="20" y="161" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">O</text><circle cx="49" cy="130" r="3.2" fill="#2563eb"/><text x="40" y="127" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">X</text><circle cx="87" cy="130" r="3.2" fill="#2563eb"/><text x="78" y="127" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">Y</text><circle cx="49" cy="92" r="3.2" fill="#2563eb"/><text x="40" y="96" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">Z</text><circle cx="68" cy="111" r="3.2" fill="#16a34a"/><text x="77" y="108" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">X&#39;</text><circle cx="144" cy="111" r="3.2" fill="#16a34a"/><text x="153" y="108" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">Y&#39;</text><circle cx="68" cy="35" r="3.2" fill="#16a34a"/><text x="77" y="39" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">Z&#39;</text><text x="107.5" y="165" font-size="11" font-weight="700" text-anchor="middle" fill="#0f1f3d">Scale factor 2 (enlargement)</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to enlarge a triangle on squared paper from a marked centre of enlargement, by counting squares and multiplying by the scale factor" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — REDUCING SHAPES ON A GRID
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reducing-shapes-on-a-grid',
      title: 'Reducing Shapes on a Grid',
      icon: '📉',
      explanation:
        `<p style="margin-bottom:16px;">Reducing a shape on squared paper uses the <strong>exact same method</strong> as enlarging — the only difference is the ${or('scale factor')} is a <strong>fraction between 0 and 1</strong> (such as 1/2 or 1/3). Mark the ${pu('centre of enlargement')} O, count squares right/left and up/down to each ${bl('object')} vertex, multiply both counts by the fraction ${or('scale factor')}, and plot the smaller ${rd('image')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('centre of enlargement')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('object')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${rd('reduced image')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('scale factor')}</span>` +
        `</div>` +

        // ── Key properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key facts about reducing on a grid</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Same centre, same method</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Everything works exactly like an enlargement — measure from the ${pu('centre')} O and multiply by the ${or('scale factor')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">A fraction scale factor</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Multiplying by a fraction like 1/2 or 1/3 makes each number <strong>smaller</strong> — that is what shrinks the shape.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Angles unchanged</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${rd('image')} still has exactly the same angles as the ${bl('object')} — only the size shrinks.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Image sits closer to O</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Because it is smaller, the ${rd('image')} always sits <strong>between</strong> the ${pu('centre')} O and the ${bl('object')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#991b1b;margin-bottom:6px;">Multiplying by a fraction</p>` +
        `<p style="margin:0;color:#7f1d1d;">Remember your fraction facts: multiplying a whole number by 1/2 means dividing it by 2. Multiplying by 1/3 means dividing by 3, and so on. If a grid count does not divide evenly, double-check the ${or('scale factor')} you were given.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vertex B is 8 squares right and 6 squares up from the centre of enlargement O. The shape is reduced by a scale factor of 1/2. Find the position of image vertex B′.',
          answer: `${rd("B′ is 4 right, 3 up from O")}`,
          steps: [
            `Start with the ${bl('object')} vertex B: 8 right, 6 up from O.`,
            `Multiply the "right" count by the ${or('scale factor')}: 8 &times; 1/2 = <strong>4</strong>.`,
            `Multiply the "up" count by the ${or('scale factor')}: 6 &times; 1/2 = <strong>3</strong>.`,
            `<strong>Answer:</strong> ${rd("B′ is 4 right, 3 up from O")} ✓`,
          ],
        },
        {
          question: 'Quadrilateral PQRS has centre of enlargement O. P is 2 right, 4 up from O; Q is 6 right, 4 up; R is 6 right, 6 up; S is 2 right, 6 up. Reduce the quadrilateral by a scale factor of 1/2. Find the positions of P′, Q′, R′ and S′.',
          answer: `${rd("P′(1, 2), Q′(3, 2), R′(3, 3), S′(1, 3) measured as squares right and up from O")}`,
          steps: [
            `Multiply every count for P by 1/2: (2 &times; 1/2, 4 &times; 1/2) = <strong>1 right, 2 up</strong>.`,
            `Multiply every count for Q by 1/2: (6 &times; 1/2, 4 &times; 1/2) = <strong>3 right, 2 up</strong>.`,
            `Multiply every count for R by 1/2: (6 &times; 1/2, 6 &times; 1/2) = <strong>3 right, 3 up</strong>.`,
            `Multiply every count for S by 1/2: (2 &times; 1/2, 6 &times; 1/2) = <strong>1 right, 3 up</strong>.`,
            `Check: side PQ was 6 &minus; 2 = 4 squares; image side P′Q′ is 3 &minus; 1 = 2 squares, which is 4 &times; 1/2 ✓.`,
            `<strong>Answer:</strong> ${rd("P′(1, 2), Q′(3, 2), R′(3, 3), S′(1, 3)")} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Squared grid showing a larger blue object rectangle PQRS reduced by scale factor 1/2 from a purple centre of enlargement O, to a smaller red image rectangle P′Q′R′S′, with dashed rays from O through each pair of matching vertices.',
      diagramSvg:
        '<svg viewBox="0 0 215 169" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="16" x2="30" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="49" y1="16" x2="49" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="68" y1="16" x2="68" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="87" y1="16" x2="87" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="106" y1="16" x2="106" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="125" y1="16" x2="125" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="144" y1="16" x2="144" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="163" y1="16" x2="163" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="16" x2="182" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="201" y1="16" x2="201" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="16" x2="201" y2="16" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="35" x2="201" y2="35" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="54" x2="201" y2="54" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="73" x2="201" y2="73" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="92" x2="201" y2="92" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="111" x2="201" y2="111" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="130" x2="201" y2="130" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="149" x2="201" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="149" x2="201" y2="149" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="16" x2="30" y2="149" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="149" x2="68" y2="73" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="30" y1="149" x2="144" y2="73" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="30" y1="149" x2="144" y2="35" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="30" y1="149" x2="68" y2="35" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,3"/><polygon points="68,73 144,73 144,35 68,35" fill="none" stroke="#2563eb" stroke-width="2.5"/><polygon points="49,111 87,111 87,92 49,92" fill="none" stroke="#dc2626" stroke-width="2.5"/><circle cx="30" cy="149" r="3.6" fill="#7c3aed"/><text x="20" y="161" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">O</text><circle cx="68" cy="73" r="3.2" fill="#2563eb"/><text x="64" y="85" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">P</text><circle cx="144" cy="73" r="3.2" fill="#2563eb"/><text x="153" y="76" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">Q</text><circle cx="144" cy="35" r="3.2" fill="#2563eb"/><text x="153" y="29" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">R</text><circle cx="68" cy="35" r="3.2" fill="#2563eb"/><text x="64" y="29" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">S</text><circle cx="49" cy="111" r="3.2" fill="#dc2626"/><text x="38" y="122" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">P&#39;</text><circle cx="87" cy="111" r="3.2" fill="#dc2626"/><text x="98" y="122" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">Q&#39;</text><circle cx="87" cy="92" r="3.2" fill="#dc2626"/><text x="98" y="87" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">R&#39;</text><circle cx="49" cy="92" r="3.2" fill="#dc2626"/><text x="38" y="87" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">S&#39;</text><text x="107.5" y="165" font-size="11" font-weight="700" text-anchor="middle" fill="#0f1f3d">Scale factor 1/2 (reduction)</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to reduce a rectangle on squared paper from a marked centre of enlargement, by counting squares and multiplying by a fraction scale factor such as 1/2" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What do we call the number that tells us how much bigger or smaller an image is compared to the object?',
      answer: 'scale factor',
      checkMode: 'auto',
      correctAnswer: 'scale factor',
      correctAnswers: ['scale factor', 'the scale factor'],
      explanation: 'The scale factor is the number every side length is multiplied by to go from the object to the image.',
    },

    // ── Q2 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'If an image is bigger than the object, is the transformation called an enlargement or a reduction?',
      answer: 'enlargement',
      checkMode: 'auto',
      correctAnswer: 'enlargement',
      correctAnswers: ['enlargement', 'an enlargement'],
      explanation: 'An enlargement makes a shape bigger, using a scale factor greater than 1.',
    },

    // ── Q3 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A rectangle has sides 4 cm and 7 cm. It is enlarged by a scale factor of 3. Find the new side lengths.',
      answer: '12 cm and 21 cm',
      checkMode: 'auto',
      correctAnswer: '12 cm and 21 cm',
      correctAnswers: ['12 cm and 21 cm', '12cm and 21cm', '12 and 21', '12, 21'],
      explanation: '4 × 3 = 12 cm.\n7 × 3 = 21 cm.\nAnswer: 12 cm and 21 cm ✓',
    },

    // ── Q4 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A square with side length 12 cm is reduced by a scale factor of 1/4. Find the new side length.',
      answer: '3 cm',
      checkMode: 'auto',
      correctAnswer: '3 cm',
      correctAnswers: ['3 cm', '3cm', '3'],
      explanation: '12 × 1/4 = 3 cm.\nAnswer: 3 cm ✓',
    },

    // ── Q5 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Explain, using the words "angles" and "sides", why an enlarged shape is the same shape as the original but not the same size.',
      answer: 'The angles in the enlarged shape stay exactly the same as the angles in the original — this is what keeps it the same shape. But the sides of the enlarged shape are all multiplied by the scale factor, making them longer — this is what makes it a different size.',
      checkMode: 'self',
    },

    // ── Q6 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'True or false: In an enlargement, all the angles of the shape change.',
      answer: 'False',
      checkMode: 'auto',
      correctAnswer: 'False',
      correctAnswers: ['False', 'false', 'F'],
      explanation: 'False. The angles stay exactly the same in an enlargement — only the side lengths change.',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vertex A is 3 squares right and 2 squares up from the centre of enlargement O. The shape is enlarged by a scale factor of 2. How many squares right and up from O is image vertex A′?',
      answer: '6 right, 4 up',
      checkMode: 'auto',
      correctAnswer: '6 right, 4 up',
      correctAnswers: ['6 right, 4 up', '6 right 4 up', '6, 4', '(6, 4)'],
      explanation: '3 × 2 = 6 (right).\n2 × 2 = 4 (up).\nAnswer: 6 right, 4 up ✓',
      diagramSvg:
        '<svg viewBox="0 0 184 136" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="16" x2="30" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="16" x2="50" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="70" y1="16" x2="70" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="90" y1="16" x2="90" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="16" x2="110" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="130" y1="16" x2="130" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="16" x2="150" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="170" y1="16" x2="170" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="16" x2="170" y2="16" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="36" x2="170" y2="36" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="56" x2="170" y2="56" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="76" x2="170" y2="76" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="96" x2="170" y2="96" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="116" x2="170" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="116" x2="170" y2="116" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="16" x2="30" y2="116" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="116" x2="150" y2="36" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="30" cy="116" r="3.6" fill="#7c3aed"/><text x="20" y="128" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">O</text><circle cx="90" cy="76" r="4" fill="#2563eb"/><text x="99" y="70" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">A</text><circle cx="150" cy="36" r="4" fill="#16a34a"/><text x="159" y="30" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">A&#39;</text></svg>',
    },

    // ── Q8 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "A shape's side is 5 cm. After a transformation the matching side on the image is 15 cm. What is the scale factor?",
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
      correctAnswers: ['3', 'x3', '×3'],
      explanation: '15 ÷ 5 = 3.\nAnswer: 3 ✓',
    },

    // ── Q9 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A photo measuring 10 cm by 15 cm is reduced onto a card measuring 2 cm by 3 cm. What is the scale factor (as a fraction) used for the reduction?',
      answer: '1/5',
      checkMode: 'auto',
      correctAnswer: '1/5',
      correctAnswers: ['1/5', '1 / 5', '0.2'],
      explanation: '2 ÷ 10 = 1/5.\nCheck: 3 ÷ 15 = 1/5 as well.\nAnswer: 1/5 ✓',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Naming and identifying concepts (0-3, Easy)
        { difficulty: 'Easy', question: 'What word describes an image that is bigger than the object?', answer: 'enlargement', checkMode: 'auto', correctAnswer: 'enlargement', correctAnswers: ['enlargement', 'an enlargement'], explanation: 'An enlargement makes a shape bigger — the scale factor is greater than 1.' },
        { difficulty: 'Easy', question: 'What word describes an image that is smaller than the object?', answer: 'reduction', checkMode: 'auto', correctAnswer: 'reduction', correctAnswers: ['reduction', 'a reduction'], explanation: 'A reduction makes a shape smaller — the scale factor is a fraction between 0 and 1.' },
        { difficulty: 'Easy', question: 'True or false: In an enlargement or reduction, the object and image are always similar (same shape).', answer: 'True', checkMode: 'auto', correctAnswer: 'True', correctAnswers: ['True', 'true', 'T'], explanation: 'True. The angles never change, so the object and image are always similar — the same shape, just a different size.' },
        { difficulty: 'Easy', question: 'What do we call the number used to enlarge or reduce a shape?', answer: 'scale factor', checkMode: 'auto', correctAnswer: 'scale factor', correctAnswers: ['scale factor', 'the scale factor'], explanation: 'The scale factor is the number every side length is multiplied by.' },

        // Block 2 — Scale factor from side lengths (4-7, Easy-Medium, DIAGRAM-FLAGGED)
        { difficulty: 'Easy-Medium', question: "A triangle's side of 4 cm is enlarged so the matching side on the image is 12 cm. Find the scale factor.", answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'x3', '×3'], explanation: '12 ÷ 4 = 3.\nAnswer: 3 ✓' },
        { difficulty: 'Easy-Medium', question: 'A rectangle measures 6 cm by 9 cm. It is reduced to a similar rectangle measuring 2 cm by 3 cm. Find the scale factor of the reduction, as a fraction.', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '1 / 3'], explanation: '2 ÷ 6 = 1/3.\nCheck: 3 ÷ 9 = 1/3 as well.\nAnswer: 1/3 ✓', diagramSvg: '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="67" width="42" height="63" fill="none" stroke="#2563eb" stroke-width="2.5"/><rect x="82" y="109" width="14" height="21" fill="none" stroke="#dc2626" stroke-width="2.5"/><text x="41" y="144" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">6 cm</text><text x="14" y="98.5" font-size="10" font-weight="700" fill="#2563eb" text-anchor="end">9 cm</text><text x="89" y="144" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">2 cm</text><text x="76" y="119.5" font-size="10" font-weight="700" fill="#dc2626" text-anchor="end">3 cm</text><text x="41" y="160" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Object</text><text x="89" y="160" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Image (reduced)</text></svg>' },
        { difficulty: 'Medium', question: "A shape's side of 8 cm becomes 2 cm on the image. Find the scale factor as a fraction.", answer: '1/4', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '1 / 4'], explanation: '2 ÷ 8 = 1/4.\nAnswer: 1/4 ✓' },
        { difficulty: 'Medium', question: 'A student says the scale factor of an enlargement from a 5 cm side to a 20 cm image side is 15. Is the student correct? If not, find the correct scale factor.', answer: 'No, the correct scale factor is 4.', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'No, 4', 'No, the correct scale factor is 4.'], explanation: 'The scale factor is found by dividing, not subtracting: 20 ÷ 5 = 4, not 20 − 5 = 15.\nAnswer: No, the correct scale factor is 4 ✓' },

        // Block 3 — Enlarging/reducing vertices on a grid (8-11, Medium, DIAGRAM-FLAGGED)
        { difficulty: 'Medium', question: 'Point A is 3 squares right and 1 square up from the centre of enlargement O. The shape is enlarged by scale factor 4. Find the position of image point A′.', answer: '12 right, 4 up', checkMode: 'auto', correctAnswer: '12 right, 4 up', correctAnswers: ['12 right, 4 up', '12 right 4 up', '12, 4', '(12, 4)'], explanation: '3 × 4 = 12 (right).\n1 × 4 = 4 (up).\nAnswer: 12 right, 4 up ✓', diagramSvg: '<svg viewBox="0 0 219.5 103.5" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="16" x2="30" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="43.5" y1="16" x2="43.5" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="57" y1="16" x2="57" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="70.5" y1="16" x2="70.5" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="84" y1="16" x2="84" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="97.5" y1="16" x2="97.5" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="111" y1="16" x2="111" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="124.5" y1="16" x2="124.5" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="138" y1="16" x2="138" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="151.5" y1="16" x2="151.5" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="165" y1="16" x2="165" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="178.5" y1="16" x2="178.5" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="192" y1="16" x2="192" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="205.5" y1="16" x2="205.5" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="16" x2="205.5" y2="16" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="29.5" x2="205.5" y2="29.5" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="43" x2="205.5" y2="43" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="56.5" x2="205.5" y2="56.5" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="70" x2="205.5" y2="70" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="83.5" x2="205.5" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="83.5" x2="205.5" y2="83.5" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="16" x2="30" y2="83.5" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="83.5" x2="192" y2="29.5" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="30" cy="83.5" r="3.6" fill="#7c3aed"/><text x="20" y="95.5" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">O</text><circle cx="70.5" cy="70" r="4" fill="#2563eb"/><text x="79.5" y="64" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">A</text><circle cx="192" cy="29.5" r="4" fill="#16a34a"/><text x="201" y="23.5" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">A&#39;</text></svg>' },
        { difficulty: 'Medium', question: 'Point B is 8 squares right and 6 squares up from centre of enlargement O. The shape is reduced by scale factor 1/2. Find the position of image point B′.', answer: '4 right, 3 up', checkMode: 'auto', correctAnswer: '4 right, 3 up', correctAnswers: ['4 right, 3 up', '4 right 3 up', '4, 3', '(4, 3)'], explanation: '8 × 1/2 = 4 (right).\n6 × 1/2 = 3 (up).\nAnswer: 4 right, 3 up ✓', diagramSvg: '<svg viewBox="0 0 211.4 166.2" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="16" x2="30" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="48.6" y1="16" x2="48.6" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="67.2" y1="16" x2="67.2" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="85.8" y1="16" x2="85.8" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="104.4" y1="16" x2="104.4" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="123" y1="16" x2="123" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="141.6" y1="16" x2="141.6" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="160.2" y1="16" x2="160.2" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="178.8" y1="16" x2="178.8" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="197.4" y1="16" x2="197.4" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="16" x2="197.4" y2="16" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="34.6" x2="197.4" y2="34.6" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="53.2" x2="197.4" y2="53.2" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="71.8" x2="197.4" y2="71.8" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="90.4" x2="197.4" y2="90.4" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="109" x2="197.4" y2="109" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="127.6" x2="197.4" y2="127.6" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="146.2" x2="197.4" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="146.2" x2="197.4" y2="146.2" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="16" x2="30" y2="146.2" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="146.2" x2="104.4" y2="90.4" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="30" cy="146.2" r="3.6" fill="#7c3aed"/><text x="20" y="158.2" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">O</text><circle cx="178.8" cy="34.6" r="4" fill="#2563eb"/><text x="187.8" y="28.6" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">B</text><circle cx="104.4" cy="90.4" r="4" fill="#dc2626"/><text x="113.4" y="84.4" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">B&#39;</text></svg>' },
        { difficulty: 'Medium', question: 'Point C is 9 squares right and 12 squares up from centre of enlargement O. The shape is reduced using scale factor 1/3. Find the position of image point C′.', answer: '3 right, 4 up', checkMode: 'auto', correctAnswer: '3 right, 4 up', correctAnswers: ['3 right, 4 up', '3 right 4 up', '3, 4', '(3, 4)'], explanation: '9 × 1/3 = 3 (right).\n12 × 1/3 = 4 (up).\nAnswer: 3 right, 4 up ✓', diagramSvg: '<svg viewBox="0 0 144 166" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="16" x2="30" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="16" x2="40" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="16" x2="50" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="60" y1="16" x2="60" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="70" y1="16" x2="70" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="80" y1="16" x2="80" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="90" y1="16" x2="90" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="16" x2="100" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="16" x2="110" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="120" y1="16" x2="120" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="130" y1="16" x2="130" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="16" x2="130" y2="16" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="26" x2="130" y2="26" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="36" x2="130" y2="36" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="46" x2="130" y2="46" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="56" x2="130" y2="56" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="66" x2="130" y2="66" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="76" x2="130" y2="76" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="86" x2="130" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="96" x2="130" y2="96" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="106" x2="130" y2="106" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="116" x2="130" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="126" x2="130" y2="126" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="136" x2="130" y2="136" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="146" x2="130" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="146" x2="130" y2="146" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="16" x2="30" y2="146" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="146" x2="60" y2="106" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="30" cy="146" r="3.6" fill="#7c3aed"/><text x="20" y="158" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">O</text><circle cx="120" cy="26" r="4" fill="#2563eb"/><text x="129" y="20" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">C</text><circle cx="60" cy="106" r="4" fill="#dc2626"/><text x="69" y="100" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">C&#39;</text></svg>' },
        { difficulty: 'Medium', question: 'A student says a point that is 4 squares right and 2 squares up from O, enlarged by scale factor 5, moves to a point 9 squares right and 7 squares up from O (by adding 5 to each number). Is the student correct? If not, find the correct position.', answer: 'No, the correct position is 20 right, 10 up.', checkMode: 'auto', correctAnswer: '20 right, 10 up', correctAnswers: ['20 right, 10 up', '20 right 10 up', '20, 10', '(20, 10)', 'No, 20 right, 10 up'], explanation: 'Enlarging means multiplying by the scale factor, not adding it: 4 × 5 = 20 (right) and 2 × 5 = 10 (up), not 4 + 5 = 9 and 2 + 5 = 7.\nAnswer: No, the correct position is 20 right, 10 up ✓' },

        // Block 4 — Comparing original and image, consistency of scale factor (12-15, Medium-Hard)
        { difficulty: 'Medium', question: 'A rectangle has sides 5 cm and 8 cm. After an enlargement, the image has sides 15 cm and 24 cm. Find the scale factor, and check that it is the same for both sides.', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'x3', '×3'], explanation: '15 ÷ 5 = 3.\nCheck: 24 ÷ 8 = 3 as well.\nAnswer: 3 (consistent for both sides) ✓' },
        { difficulty: 'Medium', question: 'A triangle has sides 10 cm, 6 cm and 8 cm. It is reduced to a similar triangle with sides 5 cm, 3 cm and 4 cm. Find the scale factor.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '1 / 2', '0.5'], explanation: '5 ÷ 10 = 1/2.\nCheck: 3 ÷ 6 = 1/2 and 4 ÷ 8 = 1/2 as well.\nAnswer: 1/2 ✓' },
        { difficulty: 'Medium-Hard', question: 'A square has a side of 6 cm. After a transformation, the new square also has a side of 6 cm. Zanele says this must be either an enlargement or a reduction because the shape has been transformed. Is she correct? Explain.', answer: 'No — the scale factor is 6 ÷ 6 = 1, which means the image is the same size as the object (congruent). An enlargement needs a scale factor greater than 1, and a reduction needs a scale factor that is a fraction less than 1, so a scale factor of 1 is neither.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A rectangle 3 cm by 5 cm is transformed into a rectangle 3 cm by 15 cm. Karabo says this is an enlargement with scale factor 3. Is he correct? Explain.', answer: 'No — 3 ÷ 3 = 1 for one pair of sides, but 15 ÷ 5 = 3 for the other pair. The sides were not scaled by the same factor, so the image is not a similar shape — this is a distortion, not a true enlargement.', checkMode: 'self' },

        // Block 5 — Reasoning, comparisons and word problems (16-19, Hard)
        { difficulty: 'Hard', question: 'Naledi says an enlarged shape and its object are congruent, since they look exactly the same. Is she correct? Explain.', answer: 'No — congruent shapes are exactly the same size as well as the same shape. An enlarged image is similar to the object (the same shape, with equal angles) but a different size, unless the scale factor happens to be 1.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Compare a reflection (which you learned in Grade 5) with an enlargement: name one property that stays the same in both, and one property that is different.', answer: 'Same in both: the angles of the shape never change — the image always has exactly the same angles as the object. Different: in a reflection the image is always exactly the same size as the object (congruent) and is flipped to face the opposite way, while in an enlargement the image is a different size to the object (similar, not congruent) and is not flipped.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A photograph measuring 4 cm by 6 cm is enlarged by a scale factor of 5 to make a poster. Find the dimensions of the poster.', answer: '20 cm by 30 cm', checkMode: 'auto', correctAnswer: '20 cm by 30 cm', correctAnswers: ['20 cm by 30 cm', '20cm by 30cm', '20 and 30', '20, 30'], explanation: '4 × 5 = 20 cm.\n6 × 5 = 30 cm.\nAnswer: 20 cm by 30 cm ✓' },
        { difficulty: 'Hard', question: 'A garden plan is drawn using a scale factor of 1/200. The real garden is 40 m wide. How wide, in centimetres, is the garden on the plan?', answer: '20 cm', checkMode: 'auto', correctAnswer: '20 cm', correctAnswers: ['20 cm', '20cm', '20'], explanation: '40 m = 4 000 cm.\n4 000 × 1/200 = 20 cm.\nAnswer: 20 cm ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered enlargement, reduction and the scale factor.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the scale factor rules, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Naming and identifying concepts (0-3, Easy)
        { difficulty: 'Easy', question: 'What do we call an image that is smaller than the object?', answer: 'reduction', checkMode: 'auto', correctAnswer: 'reduction', correctAnswers: ['reduction', 'a reduction'], explanation: 'A reduction makes a shape smaller — the scale factor is a fraction between 0 and 1.' },
        { difficulty: 'Easy', question: 'What do we call an image that is bigger than the object?', answer: 'enlargement', checkMode: 'auto', correctAnswer: 'enlargement', correctAnswers: ['enlargement', 'an enlargement'], explanation: 'An enlargement makes a shape bigger — the scale factor is greater than 1.' },
        { difficulty: 'Easy', question: 'True or false: In an enlargement or reduction, the object and image always have exactly the same angles.', answer: 'True', checkMode: 'auto', correctAnswer: 'True', correctAnswers: ['True', 'true', 'T'], explanation: 'True. The angles never change — only the side lengths change, by the scale factor.' },
        { difficulty: 'Easy', question: 'What do we call the fixed point that a shape is enlarged or reduced from on a grid?', answer: 'centre of enlargement', checkMode: 'auto', correctAnswer: 'centre of enlargement', correctAnswers: ['centre of enlargement', 'center of enlargement', 'the centre of enlargement'], explanation: 'The fixed point everything is measured from is called the centre of enlargement.' },

        // Block 2 — Scale factor from side lengths (4-7, Easy-Medium, DIAGRAM-FLAGGED)
        { difficulty: 'Easy-Medium', question: 'A side of 3 cm is enlarged so the matching side on the image is 18 cm. Find the scale factor.', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'x6', '×6'], explanation: '18 ÷ 3 = 6.\nAnswer: 6 ✓' },
        { difficulty: 'Easy-Medium', question: 'A rectangle measures 20 cm by 8 cm. It is reduced to a similar rectangle measuring 5 cm by 2 cm. Find the scale factor of the reduction, as a fraction.', answer: '1/4', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '1 / 4'], explanation: '5 ÷ 20 = 1/4.\nCheck: 2 ÷ 8 = 1/4 as well.\nAnswer: 1/4 ✓', diagramSvg: '<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="78.8" width="128" height="51.2" fill="none" stroke="#2563eb" stroke-width="2.5"/><rect x="168" y="117.2" width="32" height="12.8" fill="none" stroke="#dc2626" stroke-width="2.5"/><text x="84" y="144" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">20 cm</text><text x="14" y="104.4" font-size="10" font-weight="700" fill="#2563eb" text-anchor="end">8 cm</text><text x="184" y="144" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">5 cm</text><text x="162" y="123.6" font-size="10" font-weight="700" fill="#dc2626" text-anchor="end">2 cm</text><text x="84" y="160" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Object</text><text x="184" y="160" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Image (reduced)</text></svg>' },
        { difficulty: 'Medium', question: 'A triangle has sides 5 cm, 7 cm and 9 cm. It is enlarged by a scale factor of 2. Find the new side lengths.', answer: '10 cm, 14 cm and 18 cm', checkMode: 'auto', correctAnswer: '10 cm, 14 cm and 18 cm', correctAnswers: ['10 cm, 14 cm and 18 cm', '10, 14, 18', '10cm, 14cm, 18cm'], explanation: '5 × 2 = 10 cm.\n7 × 2 = 14 cm.\n9 × 2 = 18 cm.\nAnswer: 10 cm, 14 cm and 18 cm ✓' },
        { difficulty: 'Medium', question: 'A student says the scale factor from a 6 cm object side to a 2 cm image side is 3. Is the student correct? If not, find the correct scale factor.', answer: 'No, the correct scale factor is 1/3.', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', 'No, 1/3', 'No, the correct scale factor is 1/3.'], explanation: 'The scale factor is image ÷ object, not object ÷ image: 2 ÷ 6 = 1/3, not 6 ÷ 2 = 3.\nAnswer: No, the correct scale factor is 1/3 ✓' },

        // Block 3 — Enlarging/reducing vertices on a grid (8-11, Medium, DIAGRAM-FLAGGED)
        { difficulty: 'Medium', question: 'Point A is 4 squares right and 5 squares up from centre of enlargement O. The shape is enlarged by scale factor 2. Find the position of image point A′.', answer: '8 right, 10 up', checkMode: 'auto', correctAnswer: '8 right, 10 up', correctAnswers: ['8 right, 10 up', '8 right 10 up', '8, 10', '(8, 10)'], explanation: '4 × 2 = 8 (right).\n5 × 2 = 10 (up).\nAnswer: 8 right, 10 up ✓', diagramSvg: '<svg viewBox="0 0 150.2 165.8" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="16" x2="30" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="41.8" y1="16" x2="41.8" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="53.6" y1="16" x2="53.6" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="65.4" y1="16" x2="65.4" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="77.2" y1="16" x2="77.2" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="89" y1="16" x2="89" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="100.8" y1="16" x2="100.8" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="112.6" y1="16" x2="112.6" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="124.4" y1="16" x2="124.4" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="136.2" y1="16" x2="136.2" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="16" x2="136.2" y2="16" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="27.8" x2="136.2" y2="27.8" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="39.6" x2="136.2" y2="39.6" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="51.4" x2="136.2" y2="51.4" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="63.2" x2="136.2" y2="63.2" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="75" x2="136.2" y2="75" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="86.8" x2="136.2" y2="86.8" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="98.6" x2="136.2" y2="98.6" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="110.4" x2="136.2" y2="110.4" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="122.2" x2="136.2" y2="122.2" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="134" x2="136.2" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="145.8" x2="136.2" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="145.8" x2="136.2" y2="145.8" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="16" x2="30" y2="145.8" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="145.8" x2="124.4" y2="27.8" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="30" cy="145.8" r="3.6" fill="#7c3aed"/><text x="20" y="157.8" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">O</text><circle cx="77.2" cy="86.8" r="4" fill="#2563eb"/><text x="86.2" y="80.8" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">A</text><circle cx="124.4" cy="27.8" r="4" fill="#16a34a"/><text x="133.4" y="21.8" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">A&#39;</text></svg>' },
        { difficulty: 'Medium', question: 'Point B is 10 squares right and 8 squares up from centre of enlargement O. The shape is reduced by scale factor 1/2. Find the position of image point B′.', answer: '5 right, 4 up', checkMode: 'auto', correctAnswer: '5 right, 4 up', correctAnswers: ['5 right, 4 up', '5 right 4 up', '5, 4', '(5, 4)'], explanation: '10 × 1/2 = 5 (right).\n8 × 1/2 = 4 (up).\nAnswer: 5 right, 4 up ✓', diagramSvg: '<svg viewBox="0 0 202.4 165.6" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="16" x2="30" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="44.4" y1="16" x2="44.4" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="58.8" y1="16" x2="58.8" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="73.2" y1="16" x2="73.2" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="87.6" y1="16" x2="87.6" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="102" y1="16" x2="102" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="116.4" y1="16" x2="116.4" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="130.8" y1="16" x2="130.8" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="145.2" y1="16" x2="145.2" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="159.6" y1="16" x2="159.6" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="174" y1="16" x2="174" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="188.4" y1="16" x2="188.4" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="16" x2="188.4" y2="16" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="30.4" x2="188.4" y2="30.4" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="44.8" x2="188.4" y2="44.8" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="59.2" x2="188.4" y2="59.2" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="73.6" x2="188.4" y2="73.6" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="88" x2="188.4" y2="88" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="102.4" x2="188.4" y2="102.4" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="116.8" x2="188.4" y2="116.8" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="131.2" x2="188.4" y2="131.2" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="145.6" x2="188.4" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="145.6" x2="188.4" y2="145.6" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="16" x2="30" y2="145.6" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="145.6" x2="102" y2="88" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="30" cy="145.6" r="3.6" fill="#7c3aed"/><text x="20" y="157.6" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">O</text><circle cx="174" cy="30.4" r="4" fill="#2563eb"/><text x="183" y="24.4" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">B</text><circle cx="102" cy="88" r="4" fill="#dc2626"/><text x="111" y="82" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">B&#39;</text></svg>' },
        { difficulty: 'Medium', question: 'Point C is 12 squares right and 9 squares up from centre of enlargement O. The shape is reduced using scale factor 1/3. Find the position of image point C′.', answer: '4 right, 3 up', checkMode: 'auto', correctAnswer: '4 right, 3 up', correctAnswers: ['4 right, 3 up', '4 right 3 up', '4, 3', '(4, 3)'], explanation: '12 × 1/3 = 4 (right).\n9 × 1/3 = 3 (up).\nAnswer: 4 right, 3 up ✓', diagramSvg: '<svg viewBox="0 0 213 166" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="16" x2="30" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="43" y1="16" x2="43" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="56" y1="16" x2="56" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="69" y1="16" x2="69" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="82" y1="16" x2="82" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="95" y1="16" x2="95" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="108" y1="16" x2="108" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="121" y1="16" x2="121" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="16" x2="134" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="147" y1="16" x2="147" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="160" y1="16" x2="160" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="173" y1="16" x2="173" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="186" y1="16" x2="186" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="199" y1="16" x2="199" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="16" x2="199" y2="16" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="29" x2="199" y2="29" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="42" x2="199" y2="42" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="55" x2="199" y2="55" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="68" x2="199" y2="68" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="81" x2="199" y2="81" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="94" x2="199" y2="94" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="107" x2="199" y2="107" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="120" x2="199" y2="120" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="133" x2="199" y2="133" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="146" x2="199" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="146" x2="199" y2="146" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="16" x2="30" y2="146" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="146" x2="82" y2="107" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="30" cy="146" r="3.6" fill="#7c3aed"/><text x="20" y="158" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">O</text><circle cx="186" cy="29" r="4" fill="#2563eb"/><text x="195" y="23" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">C</text><circle cx="82" cy="107" r="4" fill="#dc2626"/><text x="91" y="101" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">C&#39;</text></svg>' },
        { difficulty: 'Medium', question: 'A student reduces a point that is 6 squares right and 4 squares up from O by scale factor 1/2, correctly finding the image at 3 squares right and 2 squares up. But the student then calls this transformation an enlargement. Is the student correct about the type of transformation? Explain.', answer: 'No — the position was found correctly, but a scale factor of 1/2 is a fraction less than 1, which always makes the image smaller. This is a reduction, not an enlargement.', checkMode: 'self' },

        // Block 4 — Comparing original and image, consistency of scale factor (12-15, Medium-Hard)
        { difficulty: 'Medium', question: 'A rectangle has sides 4 cm and 10 cm. After an enlargement, the image has sides 12 cm and 30 cm. Find the scale factor, and check that it is the same for both sides.', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'x3', '×3'], explanation: '12 ÷ 4 = 3.\nCheck: 30 ÷ 10 = 3 as well.\nAnswer: 3 (consistent for both sides) ✓' },
        { difficulty: 'Medium', question: 'A triangle has sides 12 cm, 9 cm and 15 cm. It is reduced to a similar triangle with sides 4 cm, 3 cm and 5 cm. Find the scale factor.', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '1 / 3'], explanation: '4 ÷ 12 = 1/3.\nCheck: 3 ÷ 9 = 1/3 and 5 ÷ 15 = 1/3 as well.\nAnswer: 1/3 ✓' },
        { difficulty: 'Medium-Hard', question: 'A rectangle measuring 2 cm by 4 cm is transformed into a rectangle that also measures 2 cm by 4 cm. Sipho calls this an enlargement. Is he correct? Explain.', answer: 'No — the scale factor is 2 ÷ 2 = 1 (and 4 ÷ 4 = 1), which means the image is the same size as the object (congruent). An enlargement needs a scale factor greater than 1.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A square has a side of 5 cm. It is transformed into a rectangle measuring 10 cm by 15 cm. Thandiwe says this is a valid enlargement with scale factor 2. Is she correct? Explain.', answer: 'No — a square has all sides equal (5 cm), so a true enlargement by scale factor 2 must give another square with sides 10 cm. Since the image is a 10 cm by 15 cm rectangle (not a square), the sides were not scaled by the same factor, so this is not a valid enlargement.', checkMode: 'self' },

        // Block 5 — Reasoning, comparisons and word problems (16-19, Hard)
        { difficulty: 'Hard', question: 'Thabo says a reduction can never have a scale factor greater than 1. Is he correct? Explain.', answer: 'Yes — by definition a reduction has a scale factor that is a fraction between 0 and 1. A scale factor greater than 1 would make the image bigger than the object, which is an enlargement, not a reduction.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Compare a rotation (which you learned in Grade 5) with an enlargement: name one property that stays the same in both, and one property that is different.', answer: 'Same in both: the angles of the shape never change — the image always has exactly the same angles as the object. Different: in a rotation the image is always exactly the same size as the object (congruent), only its position and orientation change, while in an enlargement the image is a different size to the object (similar, not congruent).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A model car is built using a scale factor of 1/18 compared to the real car. If the real car is 4.5 m long, how long is the model, in centimetres?', answer: '25 cm', checkMode: 'auto', correctAnswer: '25 cm', correctAnswers: ['25 cm', '25cm', '25'], explanation: '4.5 m = 450 cm.\n450 × 1/18 = 25 cm.\nAnswer: 25 cm ✓' },
        { difficulty: 'Hard', question: 'A blueprint uses a scale factor of 1/50. A wall on the blueprint measures 6 cm. Find the real length of the wall, in metres.', answer: '3 m', checkMode: 'auto', correctAnswer: '3 m', correctAnswers: ['3 m', '3m', '3'], explanation: '6 cm ÷ 1/50 = 6 × 50 = 300 cm.\n300 cm = 3 m.\nAnswer: 3 m ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have a strong, complete understanding of enlargement and reduction.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the scale factor rules and grid method, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ] satisfies PracticeSet[],

  resultsConfig: {
    totalMarks: 9,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered enlargement and reduction.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
