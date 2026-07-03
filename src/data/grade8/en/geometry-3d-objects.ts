import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (geometry-3d-objects roles) ──────────────────────────────
// faces / base shape          → blue   (#2563eb)
// vertices / triangular faces → orange (#ea580c)
// edges / apex                → green  (#16a34a)
// formula                     → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Geometry of 3D Objects',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — THE 5 PLATONIC SOLIDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'platonic-solids',
      title: 'The 5 Platonic Solids',
      icon: '⬡',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>Platonic solid</strong> is a 3D shape where every face is the same regular polygon and the same number of faces meet at every vertex. There are exactly <strong>5 Platonic solids</strong>. We compare them by the shape and number of ${bl('faces')}, ${or('vertices')} and ${gr('edges')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('faces')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vertices')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('edges')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The 5 Platonic solids</p>` +
        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="width:100%;border-collapse:collapse;font-size:14px;">` +
        `<thead><tr style="background:#f8fafc;border-bottom:2px solid #e2e8f0;">` +
        `<th style="text-align:left;padding:10px 12px;font-weight:700;color:#374151;">Solid</th>` +
        `<th style="text-align:left;padding:10px 12px;font-weight:700;color:#374151;">Face shape</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#2563eb;">Faces</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#ea580c;">Vertices</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#16a34a;">Edges</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#374151;">Per vertex</th>` +
        `</tr></thead>` +
        `<tbody>` +
        `<tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Tetrahedron</td><td style="padding:10px 12px;color:#374151;">Triangle</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">4</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">4</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">6</td><td style="text-align:center;padding:10px 12px;color:#374151;">3</td></tr>` +
        `<tr style="border-bottom:1px solid #f1f5f9;background:#fafafa;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Cube</td><td style="padding:10px 12px;color:#374151;">Square</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">6</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">8</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">12</td><td style="text-align:center;padding:10px 12px;color:#374151;">3</td></tr>` +
        `<tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Octahedron</td><td style="padding:10px 12px;color:#374151;">Triangle</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">8</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">6</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">12</td><td style="text-align:center;padding:10px 12px;color:#374151;">4</td></tr>` +
        `<tr style="border-bottom:1px solid #f1f5f9;background:#fafafa;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Dodecahedron</td><td style="padding:10px 12px;color:#374151;">Pentagon</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">12</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">20</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">30</td><td style="text-align:center;padding:10px 12px;color:#374151;">3</td></tr>` +
        `<tr><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Icosahedron</td><td style="padding:10px 12px;color:#374151;">Triangle</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">20</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">12</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">30</td><td style="text-align:center;padding:10px 12px;color:#374151;">5</td></tr>` +
        `</tbody></table></div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why exactly 5?</p>` +
        `<p style="margin:0;color:#1e3a8a;">It has been proved mathematically that only <strong>5</strong> Platonic solids exist. You can verify each one using ${re("Euler's formula")}: ${bl('F')} + ${or('V')} − ${gr('E')} = 2 — it works for all of them.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe the cube as a Platonic solid.',
          answer: `A cube has ${bl('6')} square ${bl('faces')}, ${or('8 vertices')} and ${gr('12 edges')}, with 3 ${bl('faces')} meeting at every ${or('vertex')}.`,
          steps: [
            `<strong>Check the faces:</strong> A cube has ${bl('6 faces')}, and every face is a square — the same regular polygon. All 6 faces are identical. ✓`,
            `<strong>Check the vertices:</strong> A cube has ${or('8 vertices')}. At each vertex, exactly 3 square faces meet — the same number at every vertex. ✓`,
            `<strong>Count the edges:</strong> A cube has ${gr('12 edges')}. ✓`,
            `<strong>Conclusion:</strong> A cube has ${bl('6')} square ${bl('faces')}, ${or('8 vertices')} and ${gr('12 edges')}, with 3 ${bl('faces')} meeting at every ${or('vertex')}. See the diagram below showing all 5 Platonic solids.`,
          ],
        },
        {
          question: 'Sipho says an octahedron has the same number of faces as a cube. Is he correct?',
          answer: `No — an octahedron has ${bl('8')} triangular ${bl('faces')}, while a cube has ${bl('6')} square ${bl('faces')}.`,
          steps: [
            `<strong>Count the faces of a cube:</strong> A cube has ${bl('6')} square ${bl('faces')}.`,
            `<strong>Count the faces of an octahedron:</strong> An octahedron has ${bl('8')} triangular ${bl('faces')}.`,
            `<strong>Conclusion:</strong> Sipho is <strong>incorrect</strong> — 8 ≠ 6. An octahedron has more ${bl('faces')} than a cube, and its face shape (triangle) also differs from a cube's face shape (square).`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'How many faces does a cube have?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'A cube has 6 square faces. It is one of the 5 Platonic solids.',
        },
        {
          difficulty: 'Easy',
          question: 'Name the Platonic solid with 4 triangular faces.',
          answer: 'tetrahedron',
          checkMode: 'auto',
          correctAnswer: 'tetrahedron',
          explanation: 'The tetrahedron has 4 triangular faces, 4 vertices and 6 edges.',
        },
        {
          difficulty: 'Medium',
          question: 'Sipho says a dodecahedron has 12 triangular faces. Is he correct? Explain.',
          answer: 'No — a dodecahedron has 12 pentagonal faces, not triangular.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'How many faces does an icosahedron have?',
          answer: '20',
          checkMode: 'auto',
          correctAnswer: '20',
          explanation: 'An icosahedron has 20 triangular faces, 12 vertices and 30 edges.',
        },
        {
          difficulty: 'Hard',
          question: "Verify Euler's formula for a tetrahedron, which has 4 faces, 4 vertices and 6 edges.",
          answer: 'F+V-E=4+4-6=2. Verified.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video introducing the 5 Platonic solids — tetrahedron, cube, octahedron, dodecahedron and icosahedron — comparing faces, vertices and edges" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: all 5 Platonic solids shown together — tetrahedron, cube, octahedron, dodecahedron, icosahedron — each labelled with face shape and count" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — BUILDING 3D MODELS USING NETS, INCLUDING PYRAMIDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'building-3d-models-nets',
      title: 'Building 3D Models Using Nets, Including Pyramids',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We revise using nets to create models of cubes and prisms, and extend this to building pyramids from their nets. A pyramid's net consists of one ${bl('base shape')} (the polygon at the bottom) and ${or('triangular faces')} that fold up to meet at the ${gr('apex')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('base shape')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('triangular faces')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('apex')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:4px;">Net</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A flat shape that folds up to form a 3D object — like the unfolded surface of a box.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Base</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${bl('base shape')} of a pyramid — the polygon at the bottom. It gives the pyramid its name.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Apex</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${gr('apex')} is the top point of a pyramid where all the ${or('triangular faces')} meet.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Types of pyramid nets</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Square pyramid</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('1 square base')} + ${or('4 triangular faces')} = 5 faces total. The net has the ${bl('square')} in the centre with an ${or('triangle')} on each side.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Triangular pyramid (tetrahedron)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('1 triangular base')} + ${or('3 triangular faces')} = 4 faces total. The net has the base triangle with a triangle on each of its 3 sides.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Folding tip</p>` +
        `<p style="margin:0;color:#1e3a8a;">When checking a net, imagine folding each face. The ${bl('base')} stays flat; each ${or('triangular face')} folds upward until all the free edges meet at the ${gr('apex')}. Every free edge must match another free edge in length.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe the net of a square pyramid.',
          answer: `The net has ${bl('1 square base')} in the centre with ${or('4 triangles')} attached to each side, folding up to meet at the ${gr('apex')}.`,
          steps: [
            `<strong>Identify the base:</strong> A square pyramid has a ${bl('square base')}. In the net, this ${bl('square')} appears in the centre.`,
            `<strong>Identify the triangular faces:</strong> There are ${or('4 triangular faces')} — one attached to each side of the ${bl('square base')}.`,
            `<strong>Describe the folding:</strong> When you fold the net, the ${or('4 triangles')} rise up and their free edges meet at the ${gr('apex')} above the ${bl('square base')}.`,
            `<strong>Conclusion:</strong> The net has ${bl('1 square base')} in the centre with ${or('4 triangles')} attached to each side, folding up to meet at the ${gr('apex')}. See the diagram below showing this net unfolded and folded.`,
          ],
        },
        {
          question: "Lerato builds a triangular pyramid (tetrahedron) from its net. Describe the net shape.",
          answer: `The net consists of ${or('4 equilateral triangles')} — ${bl('one base triangle')} with ${or('3 triangles')} attached to each side, folding up to form the tetrahedron.`,
          steps: [
            `<strong>Identify the faces:</strong> A tetrahedron has 4 triangular faces in total — ${bl('1 base triangle')} and ${or('3 triangular sides')}.`,
            `<strong>Describe the net layout:</strong> In the flat net, ${bl('one equilateral triangle')} acts as the base, with ${or('3 equilateral triangles')} attached to each of its 3 sides.`,
            `<strong>Describe the folding:</strong> The ${or('3 outer triangles')} fold upward to meet at the ${gr('apex')}, forming the tetrahedron.`,
            `<strong>Conclusion:</strong> The net consists of ${or('4 equilateral triangles')}: ${bl('one base triangle')} with ${or('3 triangles')} attached to each side, folding up to form the tetrahedron.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Describe the base shape used in the net of a square pyramid.',
          answer: 'square',
          checkMode: 'auto',
          correctAnswer: 'square',
          explanation: 'A square pyramid has a square base. The net contains one square in the centre with 4 triangles attached to its sides.',
        },
        {
          difficulty: 'Medium',
          question: 'How many triangular faces are in the net of a square pyramid (excluding the base)?',
          answer: '4',
          checkMode: 'auto',
          correctAnswer: '4',
          explanation: 'A square pyramid has 4 triangular faces (one on each side of the square base). The base itself is a square, not a triangle.',
        },
        {
          difficulty: 'Hard',
          question: "Lerato says a tetrahedron's net has only triangles. Is she correct? Explain.",
          answer: 'Yes — a tetrahedron is made entirely of 4 equilateral triangles, including its base.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to fold nets into pyramids — including the square pyramid and tetrahedron — identifying base shape, triangular faces and apex" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: net of a square pyramid shown flat and folded; net of a tetrahedron shown flat and folded" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — COMPARING AND CLASSIFYING 3D OBJECTS BY PROPERTIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-classifying-3d-objects',
      title: 'Comparing and Classifying 3D Objects by Properties',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">We compare and classify 3D objects — including the 5 Platonic solids and other shapes like prisms and pyramids — by examining the shape and number of ${bl('faces')}, ${or('vertices')} and ${gr('edges')}, and verifying ${re("Euler's formula")} (${bl('F')} + ${or('V')} − ${gr('E')} = ${re('2')}) for these solids.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('faces')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vertices')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('edges')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('formula')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Euler's formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:180px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Euler's formula</p>` +
        `<p style="font-size:1.4em;font-weight:700;color:#374151;margin:0;">${bl('F')} + ${or('V')} − ${gr('E')} = ${re('2')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">⟶</div>` +
        `<div style="text-align:center;min-width:180px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Holds for all convex polyhedra</p>` +
        `<p style="font-size:1em;font-weight:600;color:#374151;margin:0;">${bl('Faces')} + ${or('Vertices')} − ${gr('Edges')} always = ${re('2')}</p>` +
        `</div>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Comparing 3D objects</p>` +
        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="width:100%;border-collapse:collapse;font-size:14px;">` +
        `<thead><tr style="background:#f8fafc;border-bottom:2px solid #e2e8f0;">` +
        `<th style="text-align:left;padding:10px 12px;font-weight:700;color:#374151;">Shape</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#2563eb;">Faces</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#ea580c;">Vertices</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#16a34a;">Edges</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#dc2626;">F+V−E</th>` +
        `</tr></thead>` +
        `<tbody>` +
        `<tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Square pyramid</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">5</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">5</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">8</td><td style="text-align:center;padding:10px 12px;color:#dc2626;font-weight:700;">2</td></tr>` +
        `<tr style="border-bottom:1px solid #f1f5f9;background:#fafafa;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Triangular prism</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">5</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">6</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">9</td><td style="text-align:center;padding:10px 12px;color:#dc2626;font-weight:700;">2</td></tr>` +
        `<tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Cube</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">6</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">8</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">12</td><td style="text-align:center;padding:10px 12px;color:#dc2626;font-weight:700;">2</td></tr>` +
        `<tr style="background:#fafafa;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Dodecahedron</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">12</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">20</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">30</td><td style="text-align:center;padding:10px 12px;color:#dc2626;font-weight:700;">2</td></tr>` +
        `</tbody></table></div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Always verify with Euler's formula</p>` +
        `<p style="margin:0;color:#991b1b;">After identifying ${bl('F')}, ${or('V')} and ${gr('E')} for any convex polyhedron, substitute into ${re("Euler's formula")}: ${bl('F')} + ${or('V')} − ${gr('E')} = ${re('2')}. If your answer is not 2, recount your faces, vertices and edges.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "Verify Euler's formula for a dodecahedron, which has 12 faces, 20 vertices and 30 edges.",
          answer: `${re('F+V−E')} = ${bl('12')} + ${or('20')} − ${gr('30')} = ${re('2')}. Euler's formula is verified.`,
          steps: [
            `<strong>Identify the values:</strong> ${bl('F')} = ${bl('12')}, ${or('V')} = ${or('20')}, ${gr('E')} = ${gr('30')}.`,
            `<strong>Apply Euler's formula:</strong> ${re('F + V − E')} = ${bl('12')} + ${or('20')} − ${gr('30')} = ${re('2')}. ✓`,
            `<strong>Conclusion:</strong> The result is ${re('2')}, so Euler's formula is verified for the dodecahedron.`,
          ],
        },
        {
          question: 'Thabo compares a tetrahedron and a square pyramid. Both have an apex, but how do they differ?',
          answer: `A tetrahedron has ${bl('4')} triangular ${bl('faces')} total (including base), while a square pyramid has ${bl('1')} square base and ${bl('4')} triangular sides, totalling ${bl('5 faces')}.`,
          steps: [
            `<strong>Tetrahedron:</strong> A tetrahedron has ${bl('4 faces')} in total — all are equilateral triangles, including the base. It has ${or('4 vertices')} and ${gr('6 edges')}.`,
            `<strong>Square pyramid:</strong> A square pyramid has ${bl('5 faces')} — ${bl('1 square base')} and ${bl('4 triangular sides')}. It has ${or('5 vertices')} and ${gr('8 edges')}.`,
            `<strong>Key difference:</strong> They differ in base shape (triangle vs square) and total face count (4 vs 5). Both have an ${gr('apex')}, but the tetrahedron's base is also a triangle while the square pyramid's base is a square.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Medium',
          question: 'How many vertices does an octahedron have?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'An octahedron has 8 faces, 6 vertices and 12 edges. Check: F+V-E = 8+6-12 = 2 ✓',
        },
        {
          difficulty: 'Hard',
          question: "Verify Euler's formula for an octahedron, which has 8 faces, 6 vertices and 12 edges.",
          answer: 'F+V-E=8+6-12=2. Verified.',
          checkMode: 'self',
        },
        {
          difficulty: 'Easy',
          question: 'Name the Platonic solid with 8 triangular faces.',
          answer: 'octahedron',
          checkMode: 'auto',
          correctAnswer: 'octahedron',
          explanation: 'The octahedron has 8 triangular faces, 6 vertices and 12 edges.',
        },
        {
          difficulty: 'Medium',
          question: 'Thabo says a cube and a square pyramid have the same number of faces. Is he correct? Explain.',
          answer: 'No — a cube has 6 faces, while a square pyramid has 5 faces.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: "A dodecahedron has 12 faces and 30 edges. Use Euler's formula to find the number of vertices.",
          answer: 'F+V-E=2. 12+V-30=2. V=20.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle says all 5 Platonic solids have triangular faces. Is she correct? Explain.',
          answer: 'No — the cube has square faces and the dodecahedron has pentagonal faces; only the tetrahedron, octahedron and icosahedron have triangular faces.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: "An icosahedron has 20 faces and 12 vertices. Use Euler's formula to find the number of edges.",
          answer: '30',
          checkMode: 'auto',
          correctAnswer: '30',
          explanation: "F+V-E=2 → 20+12-E=2 → 32-E=2 → E=30. An icosahedron has 30 edges.",
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to compare and classify 3D objects using faces, vertices and edges, and how to verify Euler\'s formula" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: comparison table showing faces, vertices and edges for Platonic solids and other 3D shapes, with Euler\'s formula verified for each" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered geometry of 3D objects.' },
    { minScore: 12, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
