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
        'A triangular prism (5 faces, 9 edges, 6 vertices) and a rectangular prism (6 faces, 12 edges, 8 vertices), shown as 3D wireframes.',

      diagramSvg:
        '<svg viewBox="0 0 260 175" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="77" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">Triangular prism</text>' +
        '<polygon points="35,130 85,130 60,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<path d="M35,130 L70,108 M85,130 L120,108 M60,80 L95,58" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<path d="M70,108 L120,108 M120,108 L95,58 M95,58 L70,108" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>' +
        '<text x="77" y="148" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">5 faces, 9 edges,</text>' +
        '<text x="77" y="161" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">6 vertices</text>' +
        '<text x="190" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">Rectangular prism</text>' +
        '<polygon points="150,80 200,80 200,130 150,130" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<path d="M150,80 L180,60 M200,80 L230,60 M200,130 L230,110 M150,130 L180,110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<path d="M180,60 L230,60 M230,60 L230,110 M230,110 L180,110 M180,110 L180,60" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>' +
        '<text x="190" y="148" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">6 faces, 12 edges,</text>' +
        '<text x="190" y="161" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">8 vertices</text>' +
        '</svg>',

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
        'A square pyramid (5 faces, 8 edges, 5 vertices) and a triangular pyramid (4 faces, 6 edges, 4 vertices), with the apex marked in red where the triangular faces meet.',

      diagramSvg:
        '<svg viewBox="0 0 260 175" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="60" y="15" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">Square pyramid</text>' +
        '<line x1="60" y1="145" x2="15" y2="125" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="60" y1="145" x2="105" y2="125" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="15" y1="125" x2="60" y2="105" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>' +
        '<line x1="105" y1="125" x2="60" y2="105" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>' +
        '<line x1="60" y1="145" x2="60" y2="55" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="15" y1="125" x2="60" y2="55" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="105" y1="125" x2="60" y2="55" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="60" y1="105" x2="60" y2="55" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>' +
        '<circle cx="60" cy="55" r="3" fill="#dc2626"/>' +
        '<text x="60" y="45" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">apex</text>' +
        '<text x="60" y="153" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">5 faces, 8 edges,</text>' +
        '<text x="60" y="166" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">5 vertices</text>' +
        '<text x="202" y="15" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">Triangular pyramid</text>' +
        '<line x1="175" y1="140" x2="230" y2="140" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="175" y1="140" x2="202" y2="112" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>' +
        '<line x1="230" y1="140" x2="202" y2="112" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>' +
        '<line x1="175" y1="140" x2="202" y2="55" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="230" y1="140" x2="202" y2="55" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="202" y1="112" x2="202" y2="55" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>' +
        '<circle cx="202" cy="55" r="3" fill="#dc2626"/>' +
        '<text x="202" y="45" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">apex</text>' +
        '<text x="202" y="153" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">4 faces, 6 edges,</text>' +
        '<text x="202" y="166" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">4 vertices</text>' +
        '</svg>',

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
        'The net of a cube (six squares in a cross shape) and the net of a square pyramid (one square base with four triangles attached), shown unfolded flat.',

      diagramSvg:
        '<svg viewBox="0 0 340 150" xmlns="http://www.w3.org/2000/svg">' +
        '<rect x="110" y="10" width="28" height="28" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<rect x="110" y="38" width="28" height="28" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<rect x="110" y="66" width="28" height="28" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<rect x="110" y="94" width="28" height="28" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<rect x="82" y="38" width="28" height="28" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<rect x="138" y="38" width="28" height="28" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<text x="124" y="137" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">Cube net</text>' +
        '<rect x="230" y="55" width="40" height="40" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<polygon points="230,55 270,55 250,25" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<polygon points="230,95 270,95 250,125" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<polygon points="230,55 230,95 200,75" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<polygon points="270,55 270,95 300,75" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<text x="250" y="137" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">Square pyramid net</text>' +
        '</svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how nets of a cube, triangular prism and square pyramid are folded to form the 3D objects, with base shapes highlighted blue, side faces green and triangular faces orange" />',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Prism properties | 4-7 Pyramid properties | 8-11 Euler's formula |
    // 12-15 Prism vs pyramid comparison | 16-19 Nets
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'How many faces does a hexagonal prism have?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'A hexagon has 6 sides.\nFaces = base sides + 2 = 6 + 2 = 8 ✓' },
        { difficulty: 'Easy', question: 'A Tetra Pak juice box is shaped like a rectangular prism. How many edges does it have?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'A rectangular prism has 4 base sides.\nEdges = base sides × 3 = 4 × 3 = 12 ✓' },
        { difficulty: 'Easy', question: 'A prism has 12 vertices. How many sides does its base have, and what is the base shape called?', answer: '6 sides, hexagon', checkMode: 'auto', correctAnswer: 'hexagon', correctAnswers: ['hexagon', '6hexagon', '6sideshexagon'], explanation: 'Vertices = base sides × 2, so base sides = 12 ÷ 2 = 6.\nA polygon with 6 sides is a hexagon ✓' },
        { difficulty: 'Easy', question: 'A triangular prism has how many more edges than vertices?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3'], explanation: 'A triangular prism has 3 base sides.\nEdges = 3 × 3 = 9. Vertices = 3 × 2 = 6.\n9 − 6 = 3 more edges than vertices ✓' },
        { difficulty: 'Easy', question: 'The Great Pyramid of Giza has a square base. How many faces does it have?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5'], explanation: 'A square base has 4 sides.\nFaces = base sides + 1 = 4 + 1 = 5 ✓' },
        { difficulty: 'Easy', question: 'A camping tent is shaped like a triangular pyramid. How many edges does it have?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'A triangular pyramid has 3 base sides.\nEdges = base sides × 2 = 3 × 2 = 6 ✓' },
        { difficulty: 'Easy', question: 'A pyramid has 7 vertices. What is the shape of its base?', answer: 'hexagon', checkMode: 'auto', correctAnswer: 'hexagon', correctAnswers: ['hexagon'], explanation: 'Vertices = base sides + 1, so base sides = 7 − 1 = 6.\nA polygon with 6 sides is a hexagon ✓' },
        { difficulty: 'Easy', question: 'A pentagonal pyramid\'s base has 5 vertices on its own. How many vertices does the whole pyramid have, including the apex?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'The base has 5 vertices. The apex adds exactly 1 more vertex.\nWhole pyramid vertices = 5 + 1 = 6 ✓' },
        { difficulty: 'Medium', question: 'Verify Euler\'s formula (F + V − E = 2) for a rectangular prism. State F, V and E.', answer: 'F = 6, V = 8, E = 12. F + V − E = 6 + 8 − 12 = 2 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A learner says a hexagonal pyramid has F = 7, V = 6, E = 12. Use Euler\'s formula to check this. Is the learner correct? If not, what should V be?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', 'V=7', 'v7'], explanation: 'A hexagonal pyramid has 6 base sides.\nF = 6 + 1 = 7, E = 6 × 2 = 12, V = 6 + 1 = 7.\nThe learner\'s numbers give 7 + 6 − 12 = 1, not 2 — wrong.\nThe apex was forgotten: V should be 7, not 6.\nCheck: 7 + 7 − 12 = 2 ✓' },
        { difficulty: 'Medium', question: 'An octagonal prism has F = 10 and E = 24. Use Euler\'s formula to find V.', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16'], explanation: 'F + V − E = 2\n10 + V − 24 = 2\nV − 14 = 2\nV = 16 ✓\nCheck against the formula: an octagon base has 8 sides, so V = 8 × 2 = 16 ✓' },
        { difficulty: 'Medium', question: 'Verify Euler\'s formula for a pentagonal prism and a pentagonal pyramid (same 5-sided base). Do the F, V and E values match between the two solids?', answer: 'Pentagonal prism: F = 7, V = 10, E = 15, and 7 + 10 − 15 = 2 ✓. Pentagonal pyramid: F = 6, V = 6, E = 10, and 6 + 6 − 10 = 2 ✓. Euler\'s formula holds for both, but the actual F, V and E values are different — the prism has more faces, edges and vertices than the pyramid.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A pentagonal prism and a pentagonal pyramid both have a 5-sided base. Do they have the same number of faces?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Pentagonal prism: F = 5 + 2 = 7.\nPentagonal pyramid: F = 5 + 1 = 6.\n7 ≠ 6, so they do not have the same number of faces ✓' },
        { difficulty: 'Medium-Hard', question: 'Naledi claims a square prism and a square pyramid have the same number of edges, "because they both have a square base." Is Naledi correct? Explain.', answer: 'No, Naledi is incorrect. A square prism has Edges = 4 × 3 = 12. A square pyramid has Edges = 4 × 2 = 8. Even though both shapes share a square base, a prism has extra edges connecting two bases, while a pyramid only has edges going up to a single apex — so the edge counts are different (12 vs 8).', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A gift shop sells a box shaped like a hexagonal prism and a box shaped like a hexagonal pyramid, both with a 6-sided base. Fewer flat panels means cheaper to manufacture. Which box needs fewer panels (faces), and how many does it need?', answer: 'hexagonal pyramid, 7', checkMode: 'auto', correctAnswer: 'hexagonalpyramid7', correctAnswers: ['hexagonalpyramid7', 'hexagonalpyramid', 'pyramid7'], explanation: 'Hexagonal prism: F = 6 + 2 = 8.\nHexagonal pyramid: F = 6 + 1 = 7.\n7 < 8, so the pyramid needs fewer panels — 7 in total ✓' },
        { difficulty: 'Medium-Hard', question: 'Two solids — one a prism, one a pyramid — each have exactly 9 vertices. Find the base shape of each solid (or explain if it is not possible).', answer: 'Prism: vertices = base sides × 2, so base sides = 9 ÷ 2 = 4.5, not a whole number — no prism can have exactly 9 vertices. Pyramid: vertices = base sides + 1, so base sides = 9 − 1 = 8, an octagon. So only the pyramid works — it is an octagonal pyramid.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A cereal box is shaped like a rectangular prism. How many rectangles are needed for its complete net?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'A rectangular prism has 6 faces, all rectangles (a cereal box has no triangular faces).\nSo its net needs 6 rectangles ✓' },
        { difficulty: 'Hard', question: 'Describe the net of a triangular prism — how many shapes are in it, what shapes are they, and how are they arranged?', answer: 'The net has 5 shapes in total: 2 triangles (the two bases) and 3 rectangles (the side faces). The two triangles sit at opposite ends of a row of 3 rectangles joined edge to edge — when folded, the rectangles wrap around to join the two triangles as the top and bottom.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A learner draws a net for a square pyramid using 1 square and 3 triangles. Is this net valid?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'A square pyramid has F = 4 + 1 = 5 faces: 1 square base and 4 triangular side faces.\nThe learner\'s net only has 1 + 3 = 4 shapes, one triangle short.\nThe net is invalid — it needs 4 triangles, not 3 ✓' },
        { difficulty: 'Hard', question: 'A printer is designing the flat cardboard layout for a chocolate box shaped like a triangular prism. How many total flat shapes (panels) must the printer cut out for one complete box, and what shapes are they?', answer: '5 panels: 2 triangles and 3 rectangles', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '2triangles3rectangles'], explanation: 'A triangular prism has F = 3 + 2 = 5 faces.\nThese are 2 triangular bases and 3 rectangular side faces.\nThe printer needs to cut 5 panels in total ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered the properties of prisms, pyramids, Euler\'s formula and nets.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'How many edges does an octagonal prism have?', answer: '24', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24'], explanation: 'An octagon has 8 sides.\nEdges = base sides × 3 = 8 × 3 = 24 ✓' },
        { difficulty: 'Easy', question: 'A chocolate box in the shape of a rectangular prism is being packed. How many faces does it have in total?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'A rectangular prism has 4 base sides.\nFaces = base sides + 2 = 4 + 2 = 6 ✓' },
        { difficulty: 'Easy', question: 'A prism has 21 edges. How many sides does its base have, and what is the base shape called?', answer: '7 sides, heptagon', checkMode: 'auto', correctAnswer: 'heptagon', correctAnswers: ['heptagon', '7heptagon'], explanation: 'Edges = base sides × 3, so base sides = 21 ÷ 3 = 7.\nA polygon with 7 sides is a heptagon ✓' },
        { difficulty: 'Easy', question: 'How many more vertices does a hexagonal prism have than a triangular prism?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Hexagonal prism: vertices = 6 × 2 = 12.\nTriangular prism: vertices = 3 × 2 = 6.\n12 − 6 = 6 more vertices ✓' },
        { difficulty: 'Easy', question: 'A paperweight is shaped like a square pyramid. How many vertices does it have?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5'], explanation: 'A square pyramid has 4 base sides.\nVertices = base sides + 1 = 4 + 1 = 5 ✓' },
        { difficulty: 'Easy', question: 'A tent shaped like a hexagonal pyramid needs a pole along every edge. How many poles (edges) does it need?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'A hexagonal pyramid has 6 base sides.\nEdges = base sides × 2 = 6 × 2 = 12 ✓' },
        { difficulty: 'Easy', question: 'A pyramid has 14 edges. What is the shape of its base?', answer: 'heptagon', checkMode: 'auto', correctAnswer: 'heptagon', correctAnswers: ['heptagon'], explanation: 'Edges = base sides × 2, so base sides = 14 ÷ 2 = 7.\nA polygon with 7 sides is a heptagon ✓' },
        { difficulty: 'Easy', question: 'An octagonal pyramid\'s base has 8 vertices on its own. How many vertices does the whole pyramid have, including the apex?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'The base has 8 vertices. The apex adds exactly 1 more vertex.\nWhole pyramid vertices = 8 + 1 = 9 ✓' },
        { difficulty: 'Medium', question: 'Verify Euler\'s formula (F + V − E = 2) for a hexagonal prism. State F, V and E.', answer: 'F = 8, V = 12, E = 18. F + V − E = 8 + 12 − 18 = 2 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A learner says a pentagonal prism has F = 7, V = 10, E = 16. Use Euler\'s formula to check this. Is the learner correct? If not, what should E be?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', 'E=15', 'e15'], explanation: 'A pentagonal prism has 5 base sides.\nF = 5 + 2 = 7, E = 5 × 3 = 15, V = 5 × 2 = 10.\nThe learner\'s numbers give 7 + 10 − 16 = 1, not 2 — wrong.\nE should be 15, not 16.\nCheck: 7 + 10 − 15 = 2 ✓' },
        { difficulty: 'Medium', question: 'An octagonal pyramid has V = 9 and E = 16. Use Euler\'s formula to find F.', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'F + V − E = 2\nF + 9 − 16 = 2\nF − 7 = 2\nF = 9 ✓\nCheck against the formula: an octagon base has 8 sides, so F = 8 + 1 = 9 ✓' },
        { difficulty: 'Medium', question: 'Verify Euler\'s formula for a hexagonal prism and a hexagonal pyramid (same 6-sided base). Do the F, V and E values match between the two solids?', answer: 'Hexagonal prism: F = 8, V = 12, E = 18, and 8 + 12 − 18 = 2 ✓. Hexagonal pyramid: F = 7, V = 7, E = 12, and 7 + 7 − 12 = 2 ✓. Euler\'s formula holds for both, but the actual F, V and E values are different — the prism has more faces, edges and vertices than the pyramid.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A hexagonal prism and a hexagonal pyramid both have a 6-sided base. Do they have the same number of vertices?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Hexagonal prism: V = 6 × 2 = 12.\nHexagonal pyramid: V = 6 + 1 = 7.\n12 ≠ 7, so they do not have the same number of vertices ✓' },
        { difficulty: 'Medium-Hard', question: 'Kagiso claims an octagonal prism and an octagonal pyramid have the same number of faces, "because they both have an octagon base." Is Kagiso correct? Explain.', answer: 'No, Kagiso is incorrect. An octagonal prism has Faces = 8 + 2 = 10. An octagonal pyramid has Faces = 8 + 1 = 9. Even though both shapes share an octagon base, the prism has two base faces (top and bottom) while the pyramid only has one base — so the face counts are different (10 vs 9).', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A packaging designer must choose between a box shaped like a pentagonal prism and one shaped like a pentagonal pyramid — fewer flat panels means cheaper production. Which shape needs fewer panels (faces), and how many does it need?', answer: 'pentagonal pyramid, 6', checkMode: 'auto', correctAnswer: 'pentagonalpyramid6', correctAnswers: ['pentagonalpyramid6', 'pentagonalpyramid', 'pyramid6'], explanation: 'Pentagonal prism: F = 5 + 2 = 7.\nPentagonal pyramid: F = 5 + 1 = 6.\n6 < 7, so the pyramid needs fewer panels — 6 in total ✓' },
        { difficulty: 'Medium-Hard', question: 'Two solids — one a prism, one a pyramid — each have exactly 20 edges. Find the base shape of each solid (or explain if it is not possible).', answer: 'Prism: edges = base sides × 3, so base sides = 20 ÷ 3 = 6.67, not a whole number — no prism can have exactly 20 edges. Pyramid: edges = base sides × 2, so base sides = 20 ÷ 2 = 10, a decagon. So only the pyramid works — it is a decagonal pyramid.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A tissue box is shaped like a rectangular prism. How many total shapes (panels) are needed for its complete net?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'A rectangular prism has 6 faces, all rectangles.\nSo its net needs 6 panels in total ✓' },
        { difficulty: 'Hard', question: 'Describe the net of a square pyramid — how many shapes are in it, what shapes are they, and how are they arranged?', answer: 'The net has 5 shapes in total: 1 square (the base) and 4 triangles (the side faces). The square sits in the centre with one triangle attached to each of its four sides — when folded, the triangles rise up and meet at the apex.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A learner draws a net for a triangular prism using 3 triangles and 2 rectangles. Is this net valid?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'A triangular prism has F = 3 + 2 = 5 faces: 2 triangular bases and 3 rectangular side faces.\nThe learner\'s net has 3 triangles and 2 rectangles — the wrong count for both shapes.\nThe net is invalid — it needs 2 triangles and 3 rectangles, not 3 triangles and 2 rectangles ✓' },
        { difficulty: 'Hard', question: 'A factory is designing the flat cardboard layout for a display stand shaped like a square pyramid. How many total flat shapes (panels) must be cut out for one complete stand, and what shapes are they?', answer: '5 panels: 1 square and 4 triangles', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '1square4triangles'], explanation: 'A square pyramid has F = 4 + 1 = 5 faces.\nThese are 1 square base and 4 triangular side faces.\nThe factory needs to cut 5 panels in total ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently work with prism and pyramid properties, Euler\'s formula and nets.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
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
        { difficulty: 'Easy', question: 'How many vertices does a heptagonal prism have?', answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14'], explanation: 'A heptagon has 7 sides.\nVertices = base sides × 2 = 7 × 2 = 14 ✓' },
        { difficulty: 'Easy', question: 'A sunscreen tin is shaped like a triangular prism. How many faces does it have?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5'], explanation: 'A triangular prism has 3 base sides.\nFaces = base sides + 2 = 3 + 2 = 5 ✓' },
        { difficulty: 'Easy', question: 'A prism has 16 vertices. How many sides does its base have, and what is the base shape called?', answer: '8 sides, octagon', checkMode: 'auto', correctAnswer: 'octagon', correctAnswers: ['octagon', '8octagon'], explanation: 'Vertices = base sides × 2, so base sides = 16 ÷ 2 = 8.\nA polygon with 8 sides is an octagon ✓' },
        { difficulty: 'Easy', question: 'How many more edges does a rectangular prism have than a triangular prism?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Rectangular prism: edges = 4 × 3 = 12.\nTriangular prism: edges = 3 × 3 = 9.\n12 − 9 = 3 more edges ✓' },
        { difficulty: 'Easy', question: 'A crystal ornament is shaped like a pentagonal pyramid. How many faces does it have?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'A pentagonal pyramid has 5 base sides.\nFaces = base sides + 1 = 5 + 1 = 6 ✓' },
        { difficulty: 'Easy', question: 'A monument shaped like a triangular pyramid needs a support beam along every edge. How many beams (edges) does it need?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'A triangular pyramid has 3 base sides.\nEdges = base sides × 2 = 3 × 2 = 6 ✓' },
        { difficulty: 'Easy', question: 'A pyramid has 10 vertices. What is the shape of its base?', answer: 'nonagon', checkMode: 'auto', correctAnswer: 'nonagon', correctAnswers: ['nonagon'], explanation: 'Vertices = base sides + 1, so base sides = 10 − 1 = 9.\nA polygon with 9 sides is a nonagon ✓' },
        { difficulty: 'Easy', question: 'A hexagonal pyramid\'s base has 6 vertices on its own. How many vertices does the whole pyramid have, including the apex?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], explanation: 'The base has 6 vertices. The apex adds exactly 1 more vertex.\nWhole pyramid vertices = 6 + 1 = 7 ✓' },
        { difficulty: 'Medium', question: 'Verify Euler\'s formula (F + V − E = 2) for a triangular pyramid. State F, V and E.', answer: 'F = 4, V = 4, E = 6. F + V − E = 4 + 4 − 6 = 2 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A learner says a rectangular prism has F = 6, V = 8, E = 10. Use Euler\'s formula to check this. Is the learner correct? If not, what should E be?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'E=12', 'e12'], explanation: 'A rectangular prism has 4 base sides.\nF = 4 + 2 = 6, E = 4 × 3 = 12, V = 4 × 2 = 8.\nThe learner\'s numbers give 6 + 8 − 10 = 4, not 2 — wrong.\nE should be 12, not 10.\nCheck: 6 + 8 − 12 = 2 ✓' },
        { difficulty: 'Medium', question: 'An octagonal prism has F = 10 and V = 16. Use Euler\'s formula to find E.', answer: '24', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24'], explanation: 'F + V − E = 2\n10 + 16 − E = 2\n26 − E = 2\nE = 24 ✓\nCheck against the formula: an octagon base has 8 sides, so E = 8 × 3 = 24 ✓' },
        { difficulty: 'Medium', question: 'Verify Euler\'s formula for an octagonal prism and an octagonal pyramid (same 8-sided base). Do the F, V and E values match between the two solids?', answer: 'Octagonal prism: F = 10, V = 16, E = 24, and 10 + 16 − 24 = 2 ✓. Octagonal pyramid: F = 9, V = 9, E = 16, and 9 + 9 − 16 = 2 ✓. Euler\'s formula holds for both, but the actual F, V and E values are different — the prism has more faces, edges and vertices than the pyramid.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A triangular prism and a triangular pyramid both have a 3-sided base. Do they have the same number of edges?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Triangular prism: E = 3 × 3 = 9.\nTriangular pyramid: E = 3 × 2 = 6.\n9 ≠ 6, so they do not have the same number of edges ✓' },
        { difficulty: 'Medium-Hard', question: 'Thabo claims a pentagonal prism and a pentagonal pyramid have the same number of edges, "because they both have a pentagon base." Is Thabo correct? Explain.', answer: 'No, Thabo is incorrect. A pentagonal prism has Edges = 5 × 3 = 15. A pentagonal pyramid has Edges = 5 × 2 = 10. Even though both shapes share a pentagon base, a prism has extra edges connecting two bases, while a pyramid only has edges going up to a single apex — so the edge counts are different (15 vs 10).', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A stationery company must choose between a pencil-holder shaped like a hexagonal prism and one shaped like a hexagonal pyramid — fewer flat panels means cheaper production. Which shape needs fewer panels (faces), and how many does it need?', answer: 'hexagonal pyramid, 7', checkMode: 'auto', correctAnswer: 'hexagonalpyramid7', correctAnswers: ['hexagonalpyramid7', 'hexagonalpyramid', 'pyramid7'], explanation: 'Hexagonal prism: F = 6 + 2 = 8.\nHexagonal pyramid: F = 6 + 1 = 7.\n7 < 8, so the pyramid needs fewer panels — 7 in total ✓' },
        { difficulty: 'Medium-Hard', question: 'Two solids — one a prism, one a pyramid — each have exactly 15 vertices. Find the base shape of each solid (or explain if it is not possible).', answer: 'Prism: vertices = base sides × 2, so base sides = 15 ÷ 2 = 7.5, not a whole number — no prism can have exactly 15 vertices. Pyramid: vertices = base sides + 1, so base sides = 15 − 1 = 14, a 14-sided polygon. So only the pyramid works — it is a 14-sided-base pyramid.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A party hat is shaped like a hexagonal pyramid. How many triangular side faces does its net need, not counting the base?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'A hexagonal pyramid has 6 base sides.\nSide faces (triangles) = base sides = 6.\nSo 6 triangles are needed, plus 1 hexagon for the base ✓' },
        { difficulty: 'Hard', question: 'Describe the net of a rectangular prism — how many shapes are in it, what shapes are they, and how are they arranged?', answer: 'The net has 6 shapes in total, all rectangles (including squares, which are special rectangles) — 2 for the top and bottom, 2 for the front and back, and 2 for the left and right sides. Opposite faces are the same size and are usually drawn joined in a row or cross pattern so that folding brings matching pairs together.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A learner draws a cube net using 5 squares and 1 triangle. Is this net valid?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'A cube has F = 6 identical square faces — no triangular faces at all.\nThe learner\'s net has 5 squares and 1 triangle, the wrong shape for the sixth face.\nThe net is invalid — it needs 6 squares, not 5 squares and 1 triangle ✓' },
        { difficulty: 'Hard', question: 'A cereal factory is unfolding a cereal box shaped like a rectangular prism to design the printed artwork. How many total flat shapes (panels) must the printer lay out for one complete box, and what shape are they?', answer: '6 panels, all rectangles', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6rectangles'], explanation: 'A rectangular prism has F = 4 + 2 = 6 faces.\nAll 6 faces are rectangles (top, bottom, front, back, left, right).\nThe printer needs to lay out 6 panels in total ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have fully mastered 3D object properties, Euler\'s formula, comparisons and nets.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
