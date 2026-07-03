import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (3D object roles) ────────────────────────────────────────
// faces          → blue   (#2563eb)
// edges          → orange (#ea580c)
// vertices       → green  (#16a34a)
// formula / apex → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: '3D Objects',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — PROPERTIES OF PRISMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-of-prisms',
      title: 'Properties of Prisms',
      icon: '🔷',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>prism</strong> is a 3D object with <strong>two identical parallel bases</strong> and flat rectangular sides (lateral faces). The shape of the base gives the prism its name — a triangular prism has triangular bases, a rectangular prism has rectangular bases, and so on.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('faces')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('edges')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vertices')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('formula')}</span>` +
        `</div>` +

        // ── Formulas ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Prism formulas (based on number of base sides)</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Faces')}</p>` +
        `<p style="color:#374151;font-size:15px;margin:0;">${re('base sides + 2')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Edges')}</p>` +
        `<p style="color:#374151;font-size:15px;margin:0;">${re('base sides × 3')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Vertices')}</p>` +
        `<p style="color:#374151;font-size:15px;margin:0;">${re('base sides × 2')}</p>` +
        `</div>` +

        `</div>` +

        // ── Common prisms ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Common prisms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:8px;">Rectangular prism (4 base sides)</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">${bl('Faces')} = 4 + 2 = ${bl('6')}<br>${or('Edges')} = 4 × 3 = ${or('12')}<br>${gr('Vertices')} = 4 × 2 = ${gr('8')}</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:8px;">Triangular prism (3 base sides)</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">${bl('Faces')} = 3 + 2 = ${bl('5')}<br>${or('Edges')} = 3 × 3 = ${or('9')}<br>${gr('Vertices')} = 3 × 2 = ${gr('6')}</p>` +
        `</div>` +

        `</div>` +

        // ── Euler's formula ──────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Euler's formula — works for all prisms and pyramids</p>` +
        `<p style="margin:0;color:#991b1b;font-size:1.05em;">${re('F + V − E = 2')}&nbsp;&nbsp;(${bl('Faces')} + ${gr('Vertices')} − ${or('Edges')} = 2)</p>` +
        `<p style="margin:8px 0 0;color:#991b1b;font-size:14px;">Always use this formula to check your answers — if the result is not 2, something is wrong.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'How many faces, edges and vertices does a pentagonal prism have?',
          answer: `${bl('7 faces')}, ${or('15 edges')}, ${gr('10 vertices')}`,
          steps: [
            `Identify the base shape: a <strong>pentagon</strong> has <strong>5 sides</strong>.`,
            `${bl('Faces')} = base sides + 2 = 5 + 2 = ${bl('7')}`,
            `${or('Edges')} = base sides × 3 = 5 × 3 = ${or('15')}`,
            `${gr('Vertices')} = base sides × 2 = 5 × 2 = ${gr('10')}`,
            `<strong>Answer:</strong> ${bl('7 faces')}, ${or('15 edges')}, ${gr('10 vertices')} ✓`,
          ],
        },
        {
          question: 'Verify Euler\'s formula (F + V − E = 2) for a triangular prism.',
          answer: `${re('F + V − E = 5 + 6 − 9 = 2')} ✓ Verified`,
          steps: [
            `Find the values for a triangular prism (3 base sides):`,
            `${bl('F')} = 3 + 2 = ${bl('5')}&nbsp;&nbsp;&nbsp;${gr('V')} = 3 × 2 = ${gr('6')}&nbsp;&nbsp;&nbsp;${or('E')} = 3 × 3 = ${or('9')}`,
            `Substitute into Euler's formula: ${re('F + V − E')} = ${bl('5')} + ${gr('6')} − ${or('9')}`,
            `${bl('5')} + ${gr('6')} − ${or('9')} = ${re('2')} ✓`,
            `<strong>Result:</strong> The formula gives 2, so the values are ${re('verified')} correct.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — faces of a rectangular prism ───────────────────────────
        {
          difficulty: 'Easy',
          question: 'How many faces does a rectangular prism have?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'A rectangular prism has 4 base sides.\nFaces = base sides + 2 = 4 + 2 = 6 ✓',
        },

        // ── Q2 Easy — vertices of a triangular prism ─────────────────────────
        {
          difficulty: 'Easy',
          question: 'How many vertices does a triangular prism have?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'A triangular prism has 3 base sides.\nVertices = base sides × 2 = 3 × 2 = 6 ✓',
        },

        // ── Q3 Medium — faces, edges, vertices of a pentagonal prism ─────────
        {
          difficulty: 'Medium',
          question: 'How many faces, edges and vertices does a pentagonal prism have?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Faces',
              correctAnswer: '7',
              explanation: 'A pentagon has 5 sides.\nFaces = base sides + 2 = 5 + 2 = 7 ✓',
            },
            {
              label: 'b) Edges',
              correctAnswer: '15',
              explanation: 'A pentagon has 5 sides.\nEdges = base sides × 3 = 5 × 3 = 15 ✓',
            },
            {
              label: 'c) Vertices',
              correctAnswer: '10',
              explanation: 'A pentagon has 5 sides.\nVertices = base sides × 2 = 5 × 2 = 10 ✓',
            },
          ],
        },

        // ── Q4 Medium — find base shape from vertex count ────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho has a prism with 10 vertices. What is its base shape?',
          answer: 'pentagon',
          checkMode: 'auto',
          correctAnswer: 'pentagon',
          explanation: 'Vertices = base sides × 2.\nSo base sides = 10 ÷ 2 = 5.\nA polygon with 5 sides is a pentagon ✓',
        },

        // ── Q5 Hard — verify Euler's formula for a rectangular prism ─────────
        {
          difficulty: 'Hard',
          question: "Verify Euler's formula (F + V − E = 2) for a rectangular prism. Show all values and working.",
          answer: 'F = 6, V = 8, E = 12.\nF + V − E = 6 + 8 − 12 = 2 ✓ Verified.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a triangular prism and a rectangular prism with faces highlighted blue, edges highlighted orange and vertices highlighted green, labelled with counts" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the properties of prisms — faces, edges and vertices — using the base-sides formulas and Euler\'s formula to verify" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PROPERTIES OF PYRAMIDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-of-pyramids',
      title: 'Properties of Pyramids',
      icon: '🔺',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>pyramid</strong> has one base and triangular faces that meet at a single point called the <strong>${re('apex')}</strong>. The shape of the base gives the pyramid its name. Unlike a prism, a pyramid has only <strong>one base</strong> — not two.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('faces')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('edges')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vertices')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('apex')}</span>` +
        `</div>` +

        // ── Formulas ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Pyramid formulas (based on number of base sides)</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Faces')}</p>` +
        `<p style="color:#374151;font-size:15px;margin:0;">base sides + 1</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Edges')}</p>` +
        `<p style="color:#374151;font-size:15px;margin:0;">base sides × 2</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Vertices')}</p>` +
        `<p style="color:#374151;font-size:15px;margin:0;">base sides + 1</p>` +
        `</div>` +

        `</div>` +

        // ── Common pyramids ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Common pyramids</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:8px;">Square pyramid (4 base sides)</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">${bl('Faces')} = 4 + 1 = ${bl('5')}<br>${or('Edges')} = 4 × 2 = ${or('8')}<br>${gr('Vertices')} = 4 + 1 = ${gr('5')}<br>${re('Apex')}: ${re('1')} point at the top</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:8px;">Triangular pyramid (3 base sides)</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">${bl('Faces')} = 3 + 1 = ${bl('4')}<br>${or('Edges')} = 3 × 2 = ${or('6')}<br>${gr('Vertices')} = 3 + 1 = ${gr('4')}<br>${re('Apex')}: ${re('1')} point at the top</p>` +
        `</div>` +

        `</div>` +

        // ── Prism vs pyramid tip ─────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Prism vs pyramid — key difference</p>` +
        `<p style="margin:0;color:#1e3a8a;">A <strong>prism</strong> has <strong>two identical bases</strong> and rectangular side faces. A <strong>pyramid</strong> has <strong>one base</strong>, triangular side faces, and a single ${re('apex')}. The apex is the defining feature of every pyramid.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'How many faces, edges and vertices does a hexagonal pyramid have?',
          answer: `${bl('7 faces')}, ${or('12 edges')}, ${gr('7 vertices')}`,
          steps: [
            `Identify the base shape: a <strong>hexagon</strong> has <strong>6 sides</strong>.`,
            `${bl('Faces')} = base sides + 1 = 6 + 1 = ${bl('7')}`,
            `${or('Edges')} = base sides × 2 = 6 × 2 = ${or('12')}`,
            `${gr('Vertices')} = base sides + 1 = 6 + 1 = ${gr('7')}`,
            `<strong>Answer:</strong> ${bl('7 faces')}, ${or('12 edges')}, ${gr('7 vertices')} ✓`,
          ],
        },
        {
          question: 'How is a square pyramid different from a cube?',
          answer: `A cube has ${bl('6 equal square faces')}, ${or('12 edges')}, ${gr('8 vertices')} and no ${re('apex')}. A square pyramid has ${bl('5 faces')}, ${or('8 edges')}, ${gr('5 vertices')} and one ${re('apex')}.`,
          steps: [
            `<strong>Cube:</strong> All 6 faces are equal squares. ${bl('Faces')} = ${bl('6')}, ${or('Edges')} = ${or('12')}, ${gr('Vertices')} = ${gr('8')}. There is no ${re('apex')} — opposite faces are parallel.`,
            `<strong>Square pyramid:</strong> 1 square base + 4 triangular side faces = ${bl('5 faces')}. ${or('Edges')} = 4 × 2 = ${or('8')}. ${gr('Vertices')} = 4 + 1 = ${gr('5')}. It has one ${re('apex')} at the top where all triangular faces meet.`,
            `<strong>Key difference:</strong> The cube has no ${re('apex')} and all faces are squares. The pyramid has a single ${re('apex')} and triangular side faces — these give it its pointed shape.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q6 Easy — faces of a square pyramid ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'How many faces does a square pyramid have?',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'A square pyramid has 4 base sides.\nFaces = base sides + 1 = 4 + 1 = 5 ✓',
        },

        // ── Q7 Medium — faces, edges, vertices of a pentagonal pyramid ────────
        {
          difficulty: 'Medium',
          question: 'How many faces, edges and vertices does a pentagonal pyramid have?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Faces',
              correctAnswer: '6',
              explanation: 'A pentagon has 5 sides.\nFaces = base sides + 1 = 5 + 1 = 6 ✓',
            },
            {
              label: 'b) Edges',
              correctAnswer: '10',
              explanation: 'A pentagon has 5 sides.\nEdges = base sides × 2 = 5 × 2 = 10 ✓',
            },
            {
              label: 'c) Vertices',
              correctAnswer: '6',
              explanation: 'A pentagon has 5 sides.\nVertices = base sides + 1 = 5 + 1 = 6 ✓',
            },
          ],
        },

        // ── Q8 Hard — find base shape from edge count ────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato has a pyramid with 8 edges. What is its base shape and what is the pyramid called?',
          answer: 'Edges = base sides × 2, so base sides = 8 ÷ 2 = 4.\nA base with 4 sides is a square, so this is a square pyramid.',
          checkMode: 'self',
        },

        // ── Q9 Medium — compare triangular prism and triangular pyramid ───────
        {
          difficulty: 'Medium',
          question: 'How is a triangular prism different from a triangular pyramid?',
          answer: 'A triangular prism has 2 triangular bases and 3 rectangular side faces — 5 faces in total. A triangular pyramid has 1 triangular base and 3 triangular side faces — 4 faces in total, with an apex at the top.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a square pyramid and a triangular pyramid with faces highlighted blue, edges highlighted orange, vertices highlighted green and the apex highlighted red" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the properties of pyramids — faces, edges, vertices and the apex — with the base-sides formulas and a comparison to prisms" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — NETS OF 3D OBJECTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'nets-of-3d-objects',
      title: 'Nets of 3D Objects',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>net</strong> is a flat 2D shape that can be folded along its edges to form a 3D object. Every face of the 3D object appears as a shape in the net. Nets help us understand the surface area of objects and how packaging is designed.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('base shapes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('side faces')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('triangular faces')}</span>` +
        `</div>` +

        // ── Common nets ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Common nets</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:8px;">Cube</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('6 identical squares')} — commonly arranged in a cross or T-shape. Each square folds to become one face.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:8px;">Triangular prism</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('2 triangles')} (bases) + ${gr('3 rectangles')} (side faces).</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:8px;">Square pyramid</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('1 square')} (base) + ${or('4 triangles')} (side faces that fold up to the apex).</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to check if a net is valid</p>` +
        `<p style="margin:0;color:#1e3a8a;">Count the shapes in the net and match them to the faces of the 3D object. The number of shapes in the net must equal the number of faces of the 3D object. Shared edges in the net become fold lines.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe the net of a cube.',
          answer: `A cube's net consists of ${bl('6 identical squares')}, commonly arranged in a cross shape`,
          steps: [
            `A cube has ${bl('6 identical square faces')}.`,
            `In the net, these 6 squares are laid flat and joined along shared edges. The most common arrangement is a <strong>cross shape</strong> — 4 squares in a column and 1 square attached on each side of the second square from the top.`,
            `When folded, each square becomes one face of the cube: top, bottom, front, back, left, and right.`,
            `<strong>Answer:</strong> ${bl('6 identical squares')}, commonly arranged in a cross shape, folding to form the 6 faces of the cube. ✓`,
          ],
        },
        {
          question: 'Describe the net of a square pyramid.',
          answer: `A square pyramid's net has ${bl('1 square base')} in the centre with ${or('4 triangles')} attached to each side`,
          steps: [
            `A square pyramid has ${bl('1 square base')} and ${or('4 triangular')} side faces.`,
            `In the net, the ${bl('square base')} is placed in the centre.`,
            `One ${or('triangle')} is attached to each of the four sides of the square — these are the triangular faces that form the sides of the pyramid.`,
            `When folded, the four ${or('triangles')} rise up and their free vertices meet at the ${re('apex')}.`,
            `<strong>Answer:</strong> ${bl('1 square')} in the centre with ${or('4 triangles')} attached to each side, folding up to meet at the apex. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Easy — squares in a cube net ─────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'How many squares are in the net of a cube?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'A cube has 6 identical square faces, so its net contains 6 squares ✓',
        },

        // ── Q11 Medium — describe the net of a square pyramid ────────────────
        {
          difficulty: 'Medium',
          question: 'Describe the net of a square pyramid.',
          answer: 'The net has 1 square in the centre with 4 triangles attached, one to each side of the square. When folded, the triangles rise up and their free vertices meet at the apex.',
          checkMode: 'self',
        },

        // ── Q12 Hard — prism vs pyramid face count (error correction) ─────────
        {
          difficulty: 'Hard',
          question: 'Thabo says a triangular prism and a triangular pyramid have the same number of faces. Is he correct? Explain your answer.',
          answer: 'No — Thabo is incorrect. A triangular prism has 5 faces (2 triangular bases + 3 rectangular sides). A triangular pyramid has 4 faces (1 triangular base + 3 triangular sides). They do not have the same number of faces.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the nets of a cube and a square pyramid side by side, with base shapes highlighted blue, rectangular side faces green and triangular faces orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how nets of a cube, triangular prism and square pyramid are folded to form the 3D objects, with base shapes highlighted blue, side faces green and triangular faces orange" />',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered 3D objects.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of 3D objects.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
}
