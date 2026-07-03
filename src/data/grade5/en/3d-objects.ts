import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (3D object parts) ────────────────────────────────────────
// faces / prism  → blue   (#2563eb)
// edges / apex   → orange (#ea580c)
// vertices / base→ green  (#16a34a)
// pyramid        → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: '3D Objects',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT ARE 3D OBJECTS?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-are-3d-objects',
      title: 'What are 3D Objects?',
      icon: '□',
      explanation:
        `<p style="margin-bottom:16px;">3D objects are <strong>solid shapes</strong> that have <strong>length</strong>, <strong>width</strong> and <strong>height</strong>. 3D stands for <strong>three-dimensional</strong>. Unlike 2D shapes which are flat, 3D objects <strong>take up space</strong>. We describe 3D objects by counting their ${bl('faces')}, ${or('edges')} and ${gr('vertices')}. A ${bl('face')} is a flat surface. An ${or('edge')} is where two faces meet. A ${gr('vertex')} is a corner where edges meet.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('faces')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('edges')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vertices')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Face</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A flat surface of a 3D object.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Edge</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Where two faces of a 3D object meet.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vertex</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A corner where edges meet. More than one vertex are called vertices.</p>` +
        `</div>` +

        `</div>` +

        // ── 2D vs 3D comparison ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">2D shapes vs 3D objects</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;">2D Shape</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Flat — has only <strong>length</strong> and <strong>width</strong>.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Described by <strong>sides</strong> and <strong>corners</strong>.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;">3D Object</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Solid — has <strong>length</strong>, <strong>width</strong> and <strong>height</strong>. Takes up space.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Described by ${bl('faces')}, ${or('edges')} and ${gr('vertices')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always count ${bl('faces')}, ${or('edges')} and ${gr('vertices')} carefully and in order. A ${bl('face')} is a <strong>flat surface</strong>, an ${or('edge')} is where <strong>two faces meet</strong>, and a ${gr('vertex')} is a <strong>corner</strong> where edges meet.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe a cube.',
          answer: `A cube has ${bl('6 faces')}, ${or('12 edges')} and ${gr('8 vertices')}`,
          steps: [
            `Count the ${bl('faces')} — a cube has <strong>${bl('6')}</strong> flat square faces.`,
            `Count the ${or('edges')} — a cube has <strong>${or('12')}</strong> edges.`,
            `Count the ${gr('vertices')} — a cube has <strong>${gr('8')}</strong> vertices.`,
            `All faces are equal squares.`,
            `<strong>Answer:</strong> A cube is a 3D object with ${bl('6 faces')}, ${or('12 edges')} and ${gr('8 vertices')}.`,
          ],
        },
        {
          question: 'What is the difference between a 2D shape and a 3D object?',
          answer: `A 2D shape is flat with sides and corners. A 3D object has ${bl('faces')}, ${or('edges')} and ${gr('vertices')} and takes up space.`,
          steps: [
            `A square is a 2D shape — it is flat with only <strong>length</strong> and <strong>width</strong>.`,
            `A cube is a 3D object — it has <strong>length</strong>, <strong>width</strong> and <strong>height</strong> and takes up space.`,
            `A 2D shape has <strong>sides</strong> and <strong>corners</strong>.`,
            `A 3D object has ${bl('faces')}, ${or('edges')} and ${gr('vertices')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — faces on a cube ──────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'How many faces does a cube have?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'A cube has 6 flat square faces — one on each side (top, bottom, front, back, left, right).',
        },

        // ── Q2 Medium — faces, edges, vertices of a cube ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'How many faces, edges and vertices does a cube have?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) How many faces?',
              correctAnswer: '6',
              explanation: 'A cube has 6 flat square faces.',
            },
            {
              label: 'b) How many edges?',
              correctAnswer: '12',
              explanation: 'A cube has 12 edges — 4 along the top, 4 along the bottom and 4 vertical edges.',
            },
            {
              label: 'c) How many vertices?',
              correctAnswer: '8',
              explanation: 'A cube has 8 vertices — 4 on top and 4 on the bottom.',
            },
          ],
        },

        // ── Q3 Hard — cube vs rectangular prism ────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says a cube and a rectangular prism are exactly the same. Is he correct? Explain.',
          answer: 'No — a cube has 6 equal square faces but a rectangular prism has rectangular faces where not all sides are equal. A cube is a special type of rectangular prism.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a cube with faces labelled in blue edges in orange and vertices in green to show each part clearly" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the difference between 2D shapes and 3D objects and showing how to count faces edges and vertices on a cube" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PRISMS AND PYRAMIDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'prisms-and-pyramids',
      title: 'Prisms and Pyramids',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">A ${bl('prism')} is a 3D object with two identical flat ends called ${gr('bases')} and flat rectangular sides. The ${gr('bases')} give the ${bl('prism')} its name — a rectangular ${bl('prism')} has rectangle ${gr('bases')} and a triangular ${bl('prism')} has triangle ${gr('bases')}. A ${re('pyramid')} has one flat ${gr('base')} and triangular sides that meet at a point called the ${or('apex')}. The ${gr('base')} gives the ${re('pyramid')} its name — a square ${re('pyramid')} has a square ${gr('base')}.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('prism')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('pyramid')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('apex')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('base')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Prism</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A 3D object with two identical flat ${gr('bases')} and flat rectangular sides. Named after its ${gr('base')} shape.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Pyramid</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A 3D object with one flat ${gr('base')} and triangular sides that meet at an ${or('apex')}. Named after its ${gr('base')} shape.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Apex</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The point at the top of a ${re('pyramid')} where all the triangular faces meet.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Base</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The flat face that gives a ${bl('prism')} or ${re('pyramid')} its name. A ${bl('prism')} has two ${gr('bases')}; a ${re('pyramid')} has one ${gr('base')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Types ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Types of ${bl('prisms')} and ${re('pyramids')}</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Rectangular prism</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${gr('Base')} shape: rectangle. Has <strong>6 faces</strong>, <strong>12 edges</strong> and <strong>8 vertices</strong>.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Example: a brick or a cereal box.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Triangular prism</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${gr('Base')} shape: triangle. Has <strong>5 faces</strong>, <strong>9 edges</strong> and <strong>6 vertices</strong>.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Example: a triangular chocolate box.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Square pyramid</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${gr('Base')} shape: square. Has <strong>5 faces</strong>, <strong>8 edges</strong> and <strong>5 vertices</strong>. Has one ${or('apex')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Example: the Egyptian pyramids.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Triangular pyramid</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${gr('Base')} shape: triangle. Has <strong>4 faces</strong>, <strong>6 edges</strong> and <strong>4 vertices</strong>. Has one ${or('apex')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Also called a tetrahedron.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to remember the difference</p>` +
        `<p style="margin:0;color:#1e3a8a;">A ${bl('prism')} has <strong>two</strong> identical ${gr('bases')} — one at each end — so it has no ${or('apex')}. A ${re('pyramid')} has <strong>one</strong> ${gr('base')} and comes to a point at the ${or('apex')} at the top. Both are named after the shape of their ${gr('base')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'How many faces, edges and vertices does a triangular prism have?',
          answer: `A ${bl('triangular prism')} has <strong>5 faces</strong>, <strong>9 edges</strong> and <strong>6 vertices</strong>`,
          steps: [
            `A ${bl('triangular prism')} has 2 triangle faces at each end and 3 rectangular faces on the sides. Total faces = 2 + 3 = <strong>5 faces</strong>.`,
            `Count the edges — 3 on each triangle end plus 3 connecting edges = <strong>9 edges</strong>.`,
            `Count the vertices — 3 on each triangle end = <strong>6 vertices</strong>.`,
            `<strong>Answer:</strong> A ${bl('triangular prism')} has <strong>5 faces</strong>, <strong>9 edges</strong> and <strong>6 vertices</strong>.`,
          ],
        },
        {
          question: 'How is a square pyramid different from a cube?',
          answer: `A cube has <strong>6 faces</strong>, <strong>12 edges</strong> and <strong>8 vertices</strong>. A ${re('square pyramid')} has <strong>5 faces</strong>, <strong>8 edges</strong> and <strong>5 vertices</strong> with an ${or('apex')}.`,
          steps: [
            `A cube has 6 square faces, 12 edges and 8 vertices. A cube has no ${or('apex')}.`,
            `A ${re('square pyramid')} has 1 square ${gr('base')} and 4 triangular faces = <strong>5 faces total</strong>, <strong>8 edges</strong> and <strong>5 vertices</strong>.`,
            `A cube has no ${or('apex')} but a ${re('pyramid')} comes to a point at the top called the ${or('apex')}.`,
            `<strong>Answer:</strong> The key difference is that a ${re('square pyramid')} has an ${or('apex')} and only 5 faces, while a cube has 6 equal square faces and no ${or('apex')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — base of a pyramid ────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'What is the flat bottom of a pyramid called?',
          answer: 'base',
          checkMode: 'auto',
          correctAnswer: 'base',
          explanation: 'The flat bottom face of a pyramid is called the base. The base gives the pyramid its name — for example, a square pyramid has a square base.',
        },

        // ── Q5 Medium — faces of a triangular prism ────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'How many faces does a triangular prism have?',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'A triangular prism has 2 triangular faces (one at each end) and 3 rectangular faces on the sides — 5 faces in total.',
        },

        // ── Q6 Hard — triangular prism vs triangular pyramid ──────────────────────
        {
          difficulty: 'Hard',
          question: 'Compare a triangular prism and a triangular pyramid. How are they different?',
          answer: 'A triangular prism has 2 triangle faces and 3 rectangular faces with 5 faces total. A triangular pyramid has 1 triangle base and 3 triangular faces with 4 faces total and comes to a point at the apex.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a triangular prism and a square pyramid side by side with prism in blue pyramid in red apex in orange and base in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the difference between prisms and pyramids and showing how to count faces edges and vertices on a triangular prism and a square pyramid" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CYLINDERS, CONES AND SPHERES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'cylinders-cones-and-spheres',
      title: 'Cylinders, Cones and Spheres',
      icon: '○',
      explanation:
        `<p style="margin-bottom:16px;">Some 3D objects have <strong>curved surfaces</strong>. A ${bl('cylinder')} has 2 circular flat faces and 1 curved surface — like a tin can. A ${re('cone')} has 1 circular flat face, 1 curved surface and comes to a point at the top called the ${or('apex')} — like an ice cream cone. A ${gr('sphere')} is perfectly round with only 1 curved surface and no flat faces, no edges and no vertices — like a ball.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('cylinder')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('cone')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('sphere')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('apex')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Cylinder</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A 3D object with 2 circular flat faces and 1 curved surface. It has 2 edges and no vertices.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Cone</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A 3D object with 1 circular flat face, 1 curved surface and a point at the top called the ${or('apex')}. It has 1 edge and no vertices.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Sphere</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A perfectly round 3D object with only 1 curved surface. It has no flat faces, no edges and no vertices.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Apex</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The point at the top of a ${re('cone')} where the curved surface comes to a point.</p>` +
        `</div>` +

        `</div>` +

        // ── Comparison table ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Comparing curved 3D objects</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Cylinder</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;"><strong>Flat faces:</strong> 2 circular faces.<br><strong>Curved surface:</strong> 1.<br><strong>Edges:</strong> 2. <strong>Vertices:</strong> 0.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Example: a tin can or a drum.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Cone</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;"><strong>Flat faces:</strong> 1 circular face.<br><strong>Curved surface:</strong> 1. <strong>${or('Apex')}:</strong> 1 point.<br><strong>Edges:</strong> 1. <strong>Vertices:</strong> 0.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Example: an ice cream cone or a party hat.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Sphere</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;"><strong>Flat faces:</strong> 0.<br><strong>Curved surface:</strong> 1.<br><strong>Edges:</strong> 0. <strong>Vertices:</strong> 0.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Example: a ball or a globe.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember</p>` +
        `<p style="margin:0;color:#1e3a8a;">A ${bl('cylinder')} has <strong>2</strong> flat faces and a ${re('cone')} has <strong>1</strong> flat face — both have a curved surface. A ${gr('sphere')} has <strong>no</strong> flat faces at all — it is entirely curved. Only a ${re('cone')} has an ${or('apex')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo holds a tin of baked beans. What 3D object is it and what are its properties?',
          answer: `A tin of baked beans is shaped like a ${bl('cylinder')}. It has 2 circular flat faces, 1 curved surface, 2 edges and no vertices.`,
          steps: [
            `A tin of baked beans is shaped like a ${bl('cylinder')}.`,
            `It has <strong>2 circular flat faces</strong> — one on top and one on the bottom.`,
            `It has <strong>1 curved surface</strong> on the side.`,
            `It has <strong>2 edges</strong> where the flat faces meet the curved surface.`,
            `It has <strong>no vertices</strong>.`,
            `<strong>Answer:</strong> The tin is a ${bl('cylinder')} with 2 circular flat faces, 1 curved surface, 2 edges and no vertices.`,
          ],
        },
        {
          question: 'Compare a cone and a pyramid.',
          answer: `Both a ${re('cone')} and a pyramid come to a point called the ${or('apex')}, but a pyramid has flat triangular faces while a ${re('cone')} has a curved surface.`,
          steps: [
            `Both a ${re('cone')} and a pyramid come to a point at the top called the ${or('apex')}.`,
            `A pyramid has <strong>flat triangular faces</strong> and <strong>straight edges</strong>.`,
            `A ${re('cone')} has a <strong>curved surface</strong> and a <strong>circular base</strong> with no straight edges.`,
            `A pyramid has <strong>vertices</strong> but a ${re('cone')} does not.`,
            `<strong>Answer:</strong> Both have an ${or('apex')}, but a pyramid uses flat faces and straight edges while a ${re('cone')} uses a curved surface and a circular base.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — sphere ───────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'What 3D object looks like a ball?',
          answer: 'sphere',
          checkMode: 'auto',
          correctAnswer: 'sphere',
          explanation: 'A sphere is perfectly round with only 1 curved surface and no flat faces — just like a ball.',
        },

        // ── Q8 Medium — flat faces of a cylinder ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'How many flat faces does a cylinder have?',
          answer: '2',
          checkMode: 'auto',
          correctAnswer: '2',
          explanation: 'A cylinder has 2 flat circular faces — one on top and one on the bottom — and 1 curved surface on the side.',
        },

        // ── Q9 Hard — cone vs cylinder ─────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says a cone and a cylinder are similar because both have a circular face. Is she correct? Explain.',
          answer: 'Partly correct — both have a circular base. But a cylinder has 2 circular faces and a cone has only 1. A cone also has an apex and a cylinder does not.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a cylinder in blue a cone in red and a sphere in green side by side with labels for flat faces curved surface and apex" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the properties of cylinders cones and spheres and comparing a cone with a pyramid to show the difference between curved surfaces and flat faces" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SORTING AND COMPARING 3D OBJECTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sorting-and-comparing-3d-objects',
      title: 'Sorting and Comparing 3D Objects',
      icon: '⬡',
      explanation:
        `<p style="margin-bottom:16px;">We can <strong>sort 3D objects</strong> by their properties — whether they have curved or flat surfaces, how many faces they have, and whether they can ${gr('roll')}, ${bl('stack')} or slide. Objects with flat faces can slide and ${bl('stack')}. Objects with curved surfaces can ${gr('roll')}. Some objects like a cylinder can both ${gr('roll')} and ${bl('stack')}.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('can roll')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('cannot roll')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('can stack')}</span>` +
        `</div>` +

        // ── Properties table ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How surfaces affect movement</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Can roll</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Objects with a <strong>curved surface</strong> can roll.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Examples: sphere, cylinder, cone.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Cannot roll</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Objects with <strong>only flat faces</strong> cannot roll.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Examples: cube, rectangular prism, pyramid.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Can stack</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Objects with <strong>flat faces</strong> on top and bottom can stack.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Examples: cube, rectangular prism, cylinder.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Some objects can do more than one</p>` +
        `<p style="margin:0;color:#1e3a8a;">A cylinder can both ${gr('roll')} (curved side) and ${bl('stack')} (flat circular ends). A cone can ${gr('roll')} but is difficult to ${bl('stack')} because its ${or('apex')} makes it unstable. A sphere can ${gr('roll')} but cannot ${bl('stack')} at all.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sort these objects into can roll and cannot roll — sphere, cube, cylinder, pyramid, cone.',
          answer: `${gr('Can roll')}: sphere, cylinder, cone. ${re('Cannot roll')}: cube, pyramid.`,
          steps: [
            `${gr('Can roll:')}`,
            `${gr('Sphere')} — a sphere has a curved surface so it rolls.`,
            `${gr('Cylinder')} — a cylinder has a curved surface so it rolls.`,
            `${gr('Cone')} — a cone has a curved surface so it rolls.`,
            `${re('Cannot roll:')}`,
            `${re('Cube')} — a cube has only flat faces so it cannot roll.`,
            `${re('Pyramid')} — a pyramid has only flat faces so it cannot roll.`,
          ],
        },
        {
          question: 'Amahle wants to stack her shapes. Which of these can be stacked — sphere, rectangular prism, cone, cylinder?',
          answer: `${bl('Can stack')}: rectangular prism, cylinder. Cone — difficult. Sphere — cannot stack.`,
          steps: [
            `${bl('Rectangular prism')} — yes, flat faces stack easily.`,
            `${bl('Cylinder')} — yes, flat circular ends allow stacking.`,
            `Cone — difficult, the ${or('apex')} makes it unstable.`,
            `Sphere — no, curved surface makes it impossible to stack.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Easy — sphere rolls ────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Can a sphere roll?',
          answer: 'yes',
          checkMode: 'auto',
          correctAnswer: 'yes',
          correctAnswers: ['yes', 'Yes', 'YES'],
          explanation: 'Yes — a sphere has a curved surface so it can roll in any direction.',
        },

        // ── Q11 Medium — roll and stack ────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Name one 3D object that can both roll and stack.',
          answer: 'cylinder',
          checkMode: 'auto',
          correctAnswer: 'cylinder',
          correctAnswers: ['cylinder', 'Cylinder', 'a cylinder'],
          explanation: 'A cylinder can roll (curved side) and stack (flat circular faces on top and bottom).',
        },

        // ── Q12 Hard — curved surfaces and rolling ─────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo sorts his shapes and says only objects with curved surfaces can roll. Is he correct? Give examples to support your answer.',
          answer: 'Yes — sphere, cylinder and cone all have curved surfaces and can roll. Cubes, prisms and pyramids have only flat faces and cannot roll.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing 3D objects sorted into two groups — can roll in green and cannot roll in red — with a cylinder shown in blue as an object that can both roll and stack" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to sort 3D objects by their properties including rolling stacking and sliding and explaining why curved surfaces allow rolling while flat faces allow stacking" />',
    },
  ],
  scoreMessages: [
    { minScore: 5, message: 'Outstanding! A perfect score — you have completely mastered 3D objects for Grade 5. Keep it up!' },
    { minScore: 4, message: 'Excellent work! You have a very strong grasp of 3D objects. Review any missed parts and you will have it perfect.' },
    { minScore: 3, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 2, message: 'Good effort! Work back through the study guide and worked examples, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
}
