import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (volume roles) ───────────────────────────────────────────
// length  → blue   (#2563eb)
// width   → red    (#dc2626)
// height  → green  (#16a34a)
// volume  → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Volume',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — VOLUME OF RECTANGULAR PRISMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'volume-rectangular-prisms',
      title: 'Volume of Rectangular Prisms',
      icon: '📦',
      explanation:
        `<p style="margin-bottom:16px;">Volume is the amount of space a 3D object takes up, measured in <strong>cubic units</strong> such as cm³ or m³. For a <strong>rectangular prism</strong>, Volume = length × width × height. A <strong>cube</strong> is a special rectangular prism where all sides are equal, so Volume = side × side × side.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('length')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('width')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('height')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('volume')}</span>` +
        `</div>` +

        // ── Formula: rectangular prism ───────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Formula — Rectangular Prism</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin-bottom:6px;">${or('Volume')} = ${bl('length')} × ${re('width')} × ${gr('height')}</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('V')} = ${bl('l')} × ${re('w')} × ${gr('h')}</p>` +
        `</div>` +

        // ── Formula: cube ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Special case — Cube</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:0.85em;font-weight:600;color:#6b7280;margin-bottom:8px;">When all sides are equal (side = s):</p>` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin-bottom:6px;">${or('Volume')} = ${bl('side')} × ${re('side')} × ${gr('side')}</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('V')} = s³</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Always use cubic units</p>` +
        `<p style="margin:0;color:#7c2d12;">Volume is always measured in <strong>cubic units</strong>. If the measurements are in cm, your answer must be in <strong>cm³</strong>. If they are in m, the answer must be in <strong>m³</strong>. Never write volume without its unit.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A box is 8 cm long, 5 cm wide and 4 cm high. Find the volume.',
          answer: `${or('Volume')} = ${bl('8')} × ${re('5')} × ${gr('4')} = ${or('160 cm³')}`,
          steps: [
            `Write the formula: ${or('Volume')} = ${bl('length')} × ${re('width')} × ${gr('height')}`,
            `Substitute the measurements: ${or('V')} = ${bl('8')} × ${re('5')} × ${gr('4')}`,
            `Calculate step by step: ${bl('8')} × ${re('5')} = 40, then 40 × ${gr('4')} = ${or('160')}`,
            `<strong>Answer:</strong> ${or('Volume = 160 cm³')} ✓`,
          ],
        },
        {
          question: 'A cube has sides of 6 cm. Find the volume.',
          answer: `${or('Volume')} = ${bl('6')} × ${re('6')} × ${gr('6')} = ${or('216 cm³')}`,
          steps: [
            `A cube has all sides equal, so ${bl('length')} = ${re('width')} = ${gr('height')} = 6 cm`,
            `Write the formula: ${or('Volume')} = ${bl('side')} × ${re('side')} × ${gr('side')}`,
            `Substitute: ${or('V')} = ${bl('6')} × ${re('6')} × ${gr('6')}`,
            `Calculate: ${bl('6')} × ${re('6')} = 36, then 36 × ${gr('6')} = ${or('216')}`,
            `<strong>Answer:</strong> ${or('Volume = 216 cm³')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — volume of a rectangular box ────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A box is 6 cm long, 4 cm wide and 3 cm high. Find the volume.',
          answer: '72 cm³',
          checkMode: 'auto',
          correctAnswer: '72',
          explanation: 'Volume = length × width × height\nV = 6 × 4 × 3\n6 × 4 = 24, then 24 × 3 = 72\nAnswer: 72 cm³ ✓',
        },

        // ── Q2 Easy — volume of a cube ───────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A cube has sides of 5 cm. Find the volume.',
          answer: '125 cm³',
          checkMode: 'auto',
          correctAnswer: '125',
          explanation: 'A cube has all sides equal.\nVolume = side × side × side\nV = 5 × 5 × 5 = 25 × 5 = 125\nAnswer: 125 cm³ ✓',
        },

        // ── Q3 Medium — volume of a rectangular prism in metres ──────────────
        {
          difficulty: 'Medium',
          question: 'A rectangular prism is 10 m long, 6 m wide and 2 m high. Find the volume.',
          answer: '120 m³',
          checkMode: 'auto',
          correctAnswer: '120',
          explanation: 'Volume = length × width × height\nV = 10 × 6 × 2\n10 × 6 = 60, then 60 × 2 = 120\nAnswer: 120 m³ ✓',
        },

        // ── Q4 Hard — identify and explain an error ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says a cube with sides of 4 cm has a volume of 48 cm³. Is he correct? Explain.',
          answer: 'No — Volume = 4 × 4 × 4 = 64 cm³, not 48 cm³. He likely multiplied 4 × 4 × 3 by mistake.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining volume of rectangular prisms and cubes using the formula Volume = length x width x height with colour coded dimensions" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="3D diagram of a rectangular prism labelled with length blue width red and height green showing the volume formula and cubic unit annotation" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CALCULATING VOLUME IN CONTEXT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'volume-in-context',
      title: 'Calculating Volume in Context',
      icon: '📦',
      explanation:
        `<p style="margin-bottom:16px;">We use volume formulas to solve <strong>real-life problems</strong> involving containers, boxes and storage. Always check that all measurements are in the <strong>same unit</strong> before calculating. Volume answers must always be written in <strong>cubic units</strong>.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('dimensions')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('volume formula')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('final answer')}</span>` +
        `</div>` +

        // ── Steps for context problems ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps for solving volume problems in context</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identify the dimensions')} — find the length, width and height (or side for a cube) from the problem. Make sure they are all in the same unit.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Write and apply the formula')} — write V = l × w × h and substitute the values.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Write the final answer')} — include the correct cubic unit and answer the question in context.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Check your units first</p>` +
        `<p style="margin:0;color:#1e3a8a;">Before you multiply, confirm that all three ${bl('dimensions')} use the same unit. If they do not, convert first. A common mistake is mixing cm and m in the same calculation.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A water tank is 2 m long, 1.5 m wide and 1 m high. How much water can it hold?',
          answer: `${or('Volume = 3 m³')}`,
          steps: [
            `${bl('Identify the dimensions:')} length = ${bl('2 m')}, width = ${bl('1.5 m')}, height = ${bl('1 m')}. All measurements are in metres ✓`,
            `${gr('Write the formula:')} ${gr('V = l × w × h')}`,
            `Substitute: V = ${bl('2')} × ${bl('1.5')} × ${bl('1')}`,
            `Calculate: ${bl('2')} × ${bl('1.5')} = 3, then 3 × ${bl('1')} = ${or('3')}`,
            `<strong>Answer:</strong> ${or('The tank can hold 3 m³ of water')} ✓`,
          ],
        },
        {
          question: 'Sipho packs a box that is 30 cm long, 20 cm wide and 15 cm high with smaller cubes of 5 cm sides. How many small cubes fit inside?',
          answer: `${or('72 small cubes')}`,
          steps: [
            `${gr('Find the volume of the large box:')} V = ${bl('30')} × ${bl('20')} × ${bl('15')} = ${or('9 000 cm³')}`,
            `${gr('Find the volume of one small cube:')} V = ${bl('5')} × ${bl('5')} × ${bl('5')} = ${or('125 cm³')}`,
            `${gr('Divide to find the number of small cubes:')} 9 000 ÷ 125 = ${or('72')}`,
            `<strong>Answer:</strong> ${or('72 small cubes')} fit inside the box ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q5 Medium — water tank capacity ──────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A water tank is 3 m long, 2 m wide and 1.5 m high. How much water can it hold?',
          answer: '9 m³',
          checkMode: 'auto',
          correctAnswer: '9',
          explanation: 'Volume = length × width × height\nV = 3 × 2 × 1.5\n3 × 2 = 6, then 6 × 1.5 = 9\nAnswer: The tank can hold 9 m³ of water ✓',
        },

        // ── Q6 Hard — packing small cubes into a large box ───────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato packs a box that is 40 cm long, 30 cm wide and 20 cm high with small cubes of 10 cm sides. How many small cubes fit inside?',
          answer: '24',
          checkMode: 'auto',
          correctAnswer: '24',
          explanation: 'Volume of box = 40 × 30 × 20 = 24 000 cm³\nVolume of small cube = 10 × 10 × 10 = 1 000 cm³\nNumber of cubes = 24 000 ÷ 1 000 = 24\nAnswer: 24 small cubes fit inside ✓',
        },

        // ── Q7 Medium — volume of a swimming pool ────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A swimming pool is 12 m long, 6 m wide and 1.5 m deep. Find its volume.',
          answer: '108 m³',
          checkMode: 'auto',
          correctAnswer: '108',
          explanation: 'Volume = length × width × height\nV = 12 × 6 × 1.5\n12 × 6 = 72, then 72 × 1.5 = 108\nAnswer: 108 m³ ✓',
        },

        // ── Q8 Hard — compare volumes of two boxes ───────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle has two boxes — Box A is 5 cm by 5 cm by 5 cm and Box B is 4 cm by 6 cm by 5 cm. Which has the greater volume?',
          answer: 'Box A = 125 cm³. Box B = 120 cm³. Box A has the greater volume.',
          checkMode: 'self',
        },

        // ── Q9 Hard — number of buckets needed to fill a container ───────────
        {
          difficulty: 'Hard',
          question: 'Thabo wants to fill a container that is 50 cm by 30 cm by 20 cm using buckets that each hold 5 000 cm³. How many buckets does he need?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'Volume of container = 50 × 30 × 20 = 30 000 cm³\nEach bucket holds 5 000 cm³\nNumber of buckets = 30 000 ÷ 5 000 = 6\nAnswer: Thabo needs 6 buckets ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video solving real-life volume problems including containers and packing problems showing how to apply the volume formula in context" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Side-by-side diagram showing the large box 30cm by 20cm by 15cm and the small cube 5cm by 5cm by 5cm with volume calculations labelled" />',
    },
  ],
  scoreMessages: [
    { minScore: 9, message: 'Outstanding! You have mastered volume.' },
    { minScore: 7, message: 'Great work!' },
    { minScore: 5, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
