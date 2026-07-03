import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (geometry of 3D objects roles) ────────────────────────────
// spheres / curved solids                → blue   (#2563eb)
// cylinders / rectangular wrap           → green  (#16a34a)
// Platonic solids / flat-faced solids    → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Geometry of 3D Objects',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISING PLATONIC SOLIDS AND INTRODUCING SPHERES AND CYLINDERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'platonic-solids-spheres-cylinders',
      title: 'Revising Platonic Solids and Introducing Spheres and Cylinders',
      icon: '⬡',
      explanation:
        `<p style="margin-bottom:16px;">We revise the properties of the 5 ${or('Platonic solids')} (tetrahedron, cube, octahedron, dodecahedron, icosahedron), then learn the properties of ${bl('spheres')} (perfectly round, one curved surface, no faces/edges/vertices) and ${gr('cylinders')} (2 circular flat faces, 1 curved surface, 2 edges, no vertices).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('spheres')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('cylinders')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('Platonic solids')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The 5 Platonic solids</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Tetrahedron</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">4 equilateral triangular faces, 4 vertices, 6 edges.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Cube</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">6 square faces, 8 vertices, 12 edges.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Octahedron</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">8 equilateral triangular faces, 6 vertices, 12 edges.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Dodecahedron</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">12 regular pentagonal faces, 20 vertices, 30 edges.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Icosahedron</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">20 equilateral triangular faces, 12 vertices, 30 edges.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Spheres and cylinders</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Sphere</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Perfectly round. 1 curved surface. Every point on the surface is the same distance from the centre. No flat faces, no edges, no vertices.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Cylinder</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">2 circular flat faces (top and bottom). 1 curved surface. 2 circular edges. No vertices.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why spheres and cylinders are not Platonic solids</p>` +
        `<p style="margin:0;color:#1e3a8a;">${or('Platonic solids')} require all flat polygon faces that are identical regular shapes. Both ${bl('spheres')} and ${gr('cylinders')} have curved surfaces, which immediately disqualifies them from being Platonic solids.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe the properties of a sphere.',
          answer: `A ${bl('sphere')} has 1 curved surface, no flat faces, no edges and no vertices.`,
          steps: [
            `A ${bl('sphere')} has <strong>1 curved surface</strong>, with every point on its surface the same distance from the centre.`,
            `It has <strong>no flat faces</strong>, <strong>no edges</strong> and <strong>no vertices</strong>.`,
          ],
        },
        {
          question: 'Sipho compares a cylinder to a Platonic solid. Why is a cylinder not classified as a Platonic solid?',
          answer: `A ${gr('cylinder')} is not a ${or('Platonic solid')} because it has curved surfaces.`,
          steps: [
            `${or('Platonic solids')} must have all flat polygon faces that are identical regular shapes.`,
            `A ${gr('cylinder')} has curved surfaces, which disqualifies it from being a ${or('Platonic solid')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video introducing the 5 Platonic solids and comparing them to spheres and cylinders highlighting curved surfaces" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a sphere and a cylinder shown alongside the 5 Platonic solids, highlighting the curved surfaces that distinguish them" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — BUILDING 3D MODELS INCLUDING CYLINDERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'building-3d-models-cylinders',
      title: 'Building 3D Models Including Cylinders',
      icon: '🔵',
      explanation:
        `<p style="margin-bottom:16px;">We use nets to create models of geometric solids, now including ${gr('cylinders')}. A ${gr('cylinder')}'s net consists of ${bl('2 circles')} (the top and bottom) and ${gr('1 rectangle')} (which wraps around to form the curved surface), where the rectangle's width equals the circle's ${or('circumference')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('circular ends')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('rectangular wrap')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('circumference')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Parts of a cylinder's net</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Two circles (top and bottom)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Both ${bl('circles')} are identical. Their radius equals the radius of the cylinder.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Rectangle (curved surface)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${gr('rectangle')}'s length = the ${or('circumference')} of the circles (2πr). Its width = the height of the cylinder.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Key formula</p>` +
        `<p style="margin:0;color:#9a3412;">${or('Circumference')} = 2 × π × r &nbsp;(use π ≈ 3.14). When this rectangle wraps around, its length must exactly match the circle's ${or('circumference')} so the edges align.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe the net of a cylinder.',
          answer: `The net has ${bl('2 identical circles')} (top and bottom) and ${gr('1 rectangle')} whose length equals the ${or('circumference')} of the circles.`,
          steps: [
            `The net has ${bl('2 identical circles')} (top and bottom) and ${gr('1 rectangle')}.`,
            `The ${gr('rectangle')}'s length equals the ${or('circumference')} of the circles, and its width equals the height of the cylinder.`,
            `See the diagram below showing this net flat and folded.`,
          ],
        },
        {
          question: 'Lerato has a cylinder with radius 4 cm and height 10 cm. Find the dimensions of the rectangular part of its net.',
          answer: `${gr('Rectangle')} width = 10 cm; length = ${or('circumference')} = 25.12 cm`,
          steps: [
            `${gr('Rectangle')} width = height of cylinder = <strong>10 cm</strong>.`,
            `${gr('Rectangle')} length = ${or('circumference')} = 2 × π × r = 2 × 3.14 × 4 = <strong>25.12 cm</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing the net of a cylinder — two circles and a rectangle — and how it folds to form the 3D solid" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a cylinder\'s net shown flat — two circles and a rectangle — with an arrow showing how the rectangle wraps around to connect the two circles when folded" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — COMPARING AND CLASSIFYING ALL 3D OBJECTS BY PROPERTIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-classifying-3d-objects',
      title: 'Comparing and Classifying All 3D Objects by Properties',
      icon: '📦',
      explanation:
        `<p style="margin-bottom:16px;">We classify and compare all 3D objects covered so far — ${or('Platonic solids')}, prisms, pyramids, ${bl('spheres')} and ${gr('cylinders')} — by examining their faces (flat or curved), edges, vertices, and whether Euler's formula applies (it only applies to solids with all flat faces, not those with curved surfaces).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('flat-faced solids')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('curved solids')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('comparison points')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Euler's formula: F + V − E = 2</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Applies to ${bl('flat-faced solids')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">All ${bl('polyhedra')} (prisms, pyramids, Platonic solids) with only flat faces have well-defined faces, edges and vertices — Euler's formula holds.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Does NOT apply to ${or('curved solids')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('Spheres')} and ${or('cylinders')} have curved surfaces and lack clearly defined vertices, so Euler's formula does not apply in the traditional sense.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Classification summary</p>` +
        `<p style="margin:0;color:#14532d;">Use ${gr('three comparison points')} when classifying: (1) Are the faces flat or curved? (2) How many edges and vertices? (3) Does Euler's formula apply? These distinctions separate polyhedra from curved solids.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Does Euler\'s formula apply to a cylinder? Explain.',
          answer: `No — Euler's formula (F + V − E = 2) does not apply to a ${gr('cylinder')}.`,
          steps: [
            `Euler's formula (F + V − E = 2) only applies to ${bl('polyhedra')} with flat faces and well-defined vertices.`,
            `A ${gr('cylinder')} has ${or('curved surfaces')} and no vertices, so the formula doesn't apply in the same way.`,
          ],
        },
        {
          question: 'Thabo compares a sphere and a cube. List two key differences.',
          answer: `A ${or('sphere')} has 1 curved surface with no edges or vertices. A ${bl('cube')} has 6 flat square faces, 12 edges and 8 vertices.`,
          steps: [
            `A ${or('sphere')} has 1 curved surface with no edges or vertices.`,
            `A ${bl('cube')} has 6 flat square faces, 12 edges and 8 vertices.`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video comparing and classifying 3D objects by faces edges and vertices and explaining when Euler\'s formula applies" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a comparison table showing Platonic solids, prisms, pyramids, spheres and cylinders side by side with their faces edges vertices and Euler formula applicability" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'How many curved surfaces does a sphere have?',
      answer: '1',
      checkMode: 'auto',
      correctAnswer: '1',
    },

    // ── Q2 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'How many flat circular faces does a cylinder have?',
      answer: '2',
      checkMode: 'auto',
      correctAnswer: '2',
    },

    // ── Q3 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho says a sphere has edges. Is he correct? Explain.',
      answer: 'No — a sphere has no edges, no vertices and no flat faces; it has only 1 continuous curved surface.',
      checkMode: 'self',
    },

    // ── Q4 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Describe the net of a cylinder.',
      answer: 'It consists of 2 identical circles (top and bottom) and 1 rectangle that wraps around to form the curved side.',
      checkMode: 'self',
    },

    // ── Q5 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A cylinder has radius 5 cm and height 12 cm. Find the dimensions of the rectangular part of its net (to 2 decimal places).',
      answer: 'Width = height = 12 cm. Length = circumference = 2 × 3.14 × 5 = 31.4 cm.',
      checkMode: 'self',
    },

    // ── Q6 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Does Euler\'s formula apply to a sphere?',
      answer: 'no',
      checkMode: 'auto',
      correctAnswer: 'no',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Compare a cube and a sphere in terms of vertices.',
      answer: 'a cube has 8 vertices, a sphere has 0 vertices',
      checkMode: 'auto',
      correctAnswer: 'a cube has 8 vertices, a sphere has 0 vertices',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says a cylinder is technically a type of prism. Is this generally accurate in CAPS classification? Explain.',
      answer: 'No — although a cylinder has some similarities to a prism (two parallel circular ends), it is classified separately because it has curved surfaces, unlike true prisms which have flat polygon faces.',
      checkMode: 'self',
    },

    // ── Q9 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'How many edges does a cylinder have?',
      answer: '2',
      checkMode: 'auto',
      correctAnswer: '2',
    },

    // ── Q10 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo compares an icosahedron (20 faces, 12 vertices, 30 edges) using Euler\'s formula. Verify it applies.',
      answer: 'F + V − E = 20 + 12 − 30 = 2. Euler\'s formula is verified for this Platonic solid.',
      checkMode: 'self',
    },

    // ── Q11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A cylinder has radius 3 cm and height 8 cm. Find the circumference of its circular ends (to 2 decimal places).',
      answer: '18.84cm',
      checkMode: 'auto',
      correctAnswer: '18.84cm',
    },

    // ── Q12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says a cone and a cylinder have the same number of curved surfaces. Is she correct? Explain.',
      answer: 'Yes — both have exactly 1 curved surface, though their overall shapes differ (a cone tapers to a point, a cylinder does not).',
      checkMode: 'self',
    },

    // ── Q13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says all 3D objects with curved surfaces cannot follow Euler\'s formula. Is he fully correct? Explain.',
      answer: 'Generally yes for simple curved solids like spheres and cylinders, since Euler\'s formula relies on clearly defined flat faces, edges and vertices, which curved solids lack in the traditional sense.',
      checkMode: 'self',
    },

    // ── Q14 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the dimensions of the net rectangle for a cylinder with diameter 14 cm and height 20 cm (to 2 decimal places).',
      answer: 'Radius = 7 cm. Width = height = 20 cm. Length = circumference = 2 × 3.14 × 7 = 43.96 cm.',
      checkMode: 'self',
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato compares a tetrahedron and a sphere, listing differences in faces, edges and vertices.',
      answer: 'A tetrahedron has 4 flat triangular faces, 6 edges and 4 vertices. A sphere has 1 curved surface, 0 edges and 0 vertices.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered geometry of 3D objects.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
