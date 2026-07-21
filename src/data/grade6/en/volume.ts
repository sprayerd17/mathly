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

// ─── Shared "Looking ahead" enrichment banner ─────────────────────────────
// CAPS Grade 6 clarification notes state (identically for Grades 4-6):
// "Learners are not required to know or apply formulae for the perimeter,
// area or volume of any shape or object in the Intermediate Phase." Grade 6
// volume work is about counting or packing cubes/rectangular prisms to fill
// or build a stack, and stating volume as "number of cubes/blocks" — plus
// investigating why that count equals length × width × height, not applying
// the formula on its own. Kept here as clearly labelled enrichment.
const lookingAhead = (title: string, body: string) =>
  `<div style="background:#faf5ff;border:1.5px solid #d8b4fe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
  `<p style="font-weight:700;color:#7c3aed;margin-bottom:6px;">🔭 Looking ahead: ${title}</p>` +
  `<p style="margin:0;color:#581c87;">${body}</p>` +
  `</div>`

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
        lookingAhead(
          'using Volume = length × width × height as a formula',
          'CAPS Grade 6 wants you to count or pack cubes to fill a container or build a stack, and state volume as "number of cubes/blocks" — while investigating why that count works out the same as length × width × height. Applying the formula directly to numbers, without physically counting or picturing cubes, is Grade 7+ practice.'
        ) +
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
        '3D diagram of a rectangular prism labelled with length blue width red and height green showing the volume formula and cubic unit annotation',

      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,70 110,70 140,50 70,50" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,70 140,50 140,110 110,130" fill="#bfdbfe" stroke="#0f1f3d" stroke-width="2.5"/><rect x="40" y="70" width="70" height="60" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="130" x2="110" y2="130" stroke="#2563eb" stroke-width="2.5"/><line x1="110" y1="70" x2="110" y2="130" stroke="#16a34a" stroke-width="2.5"/><line x1="110" y1="70" x2="140" y2="50" stroke="#dc2626" stroke-width="2.5"/><text x="75" y="146" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">length</text><text x="124" y="100" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle" transform="rotate(-90 124 100)">height</text><text x="128" y="40" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">width</text><text x="95" y="160" font-size="13" fill="#374151" text-anchor="middle">V = length × width × height</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CALCULATING VOLUME IN CONTEXT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'volume-in-context',
      title: 'Calculating Volume in Context',
      icon: '📦',
      explanation:
        lookingAhead(
          'applying the volume formula to real-life problems',
          'This section builds on the Grade 7+ volume formula from the previous section. The CAPS Grade 6 way to handle a real container is to picture or count how many cubes/blocks would fill it, not to substitute numbers into V = l × w × h.'
        ) +
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
        'Side-by-side diagram showing the large box 30cm by 20cm by 15cm and the small cube 5cm by 5cm by 5cm with volume calculations labelled',

      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="15,65 65,65 83,51 33,51" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2.2"/><polygon points="65,65 83,51 83,76 65,90" fill="#bfdbfe" stroke="#0f1f3d" stroke-width="2.2"/><rect x="15" y="65" width="50" height="25" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2.2"/><polygon points="150,75 170,75 180,67 160,67" fill="#fff7ed" stroke="#0f1f3d" stroke-width="2"/><polygon points="170,75 180,67 180,87 170,95" fill="#fdba74" stroke="#0f1f3d" stroke-width="2"/><rect x="150" y="75" width="20" height="20" fill="#fed7aa" stroke="#0f1f3d" stroke-width="2"/><text x="49" y="108" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">30 × 20 × 15 cm</text><text x="49" y="123" font-size="12" fill="#374151" text-anchor="middle">= 9 000 cm³</text><text x="165" y="112" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">5 × 5 × 5 cm</text><text x="165" y="127" font-size="12" fill="#374151" text-anchor="middle">= 125 cm³</text><text x="110" y="148" font-size="12" fill="#ea580c" text-anchor="middle"><tspan x="110">9 000 ÷ 125 =</tspan><tspan x="110" dy="15">72 small cubes fit inside</tspan></text></svg>',
    },
  ],
  scoreMessages: [
    { minScore: 9, message: 'Outstanding! You have mastered volume.' },
    { minScore: 7, message: 'Great work!' },
    { minScore: 5, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-4 Direct volume (prisms/cubes) | 5-8 Decimals & missing dimension |
    // 9-12 Word problems | 13-15 Error-spotting | 16-17 Comparing volumes |
    // 18-19 Multi-step packing
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'A box is 7 cm long, 4 cm wide and 3 cm high. Find its volume.', checkMode: 'auto', correctAnswer: '84cm3', correctAnswers: ['84cm3', '84 cm3', '84', '84cm³', '84 cm³'], explanation: 'Volume = length × width × height\nV = 7 × 4 × 3\n7 × 4 = 28, then 28 × 3 = 84\nAnswer: 84 cm³' },
        { difficulty: 'Easy', question: 'A cube has sides of 6 cm. Find its volume.', checkMode: 'auto', correctAnswer: '216cm3', correctAnswers: ['216cm3', '216 cm3', '216', '216cm³', '216 cm³'], explanation: 'A cube has all sides equal.\nVolume = side × side × side\nV = 6 × 6 × 6 = 36 × 6 = 216\nAnswer: 216 cm³' },
        { difficulty: 'Easy', question: 'A storeroom is shaped like a rectangular prism: 9 m long, 4 m wide and 2 m high. Find its volume.', checkMode: 'auto', correctAnswer: '72m3', correctAnswers: ['72m3', '72 m3', '72', '72m³', '72 m³'], explanation: 'Volume = length × width × height\nV = 9 × 4 × 2\n9 × 4 = 36, then 36 × 2 = 72\nAnswer: 72 m³' },
        { difficulty: 'Easy', question: 'A cube-shaped crate has sides of 3 m. Find its volume.', checkMode: 'auto', correctAnswer: '27m3', correctAnswers: ['27m3', '27 m3', '27', '27m³', '27 m³'], explanation: 'Volume = side × side × side\nV = 3 × 3 × 3 = 9 × 3 = 27\nAnswer: 27 m³' },
        { difficulty: 'Easy', question: 'A suitcase has a height of 3 cm, a width of 5 cm and a length of 8 cm. Find its volume.', checkMode: 'auto', correctAnswer: '120cm3', correctAnswers: ['120cm3', '120 cm3', '120', '120cm³', '120 cm³'], explanation: 'It does not matter what order the dimensions are given in — multiply all three.\nV = length × width × height = 8 × 5 × 3\n8 × 5 = 40, then 40 × 3 = 120\nAnswer: 120 cm³' },
        { difficulty: 'Easy-Medium', question: 'A storage bin is 2.5 m long, 4 m wide and 3 m high. Find its volume.', checkMode: 'auto', correctAnswer: '30m3', correctAnswers: ['30m3', '30 m3', '30', '30m³', '30 m³'], explanation: 'Volume = length × width × height\nV = 2.5 × 4 × 3\n2.5 × 4 = 10, then 10 × 3 = 30\nAnswer: 30 m³' },
        { difficulty: 'Easy-Medium', question: 'A planter box is 1.5 m long, 2 m wide and 2.5 m high. Find its volume.', checkMode: 'auto', correctAnswer: '7.5m3', correctAnswers: ['7.5m3', '7.5 m3', '7.5', '7.5m³', '7.5 m³'], explanation: 'Volume = length × width × height\nV = 1.5 × 2 × 2.5\n1.5 × 2 = 3, then 3 × 2.5 = 7.5\nAnswer: 7.5 m³' },
        { difficulty: 'Medium', question: 'A crate has a volume of 180 cm³. It is 9 cm long and 5 cm wide. Find its height.', checkMode: 'auto', correctAnswer: '4cm', correctAnswers: ['4cm', '4 cm', '4'], explanation: 'Since V = l × w × h, height = V ÷ (l × w).\nHeight = 180 ÷ (9 × 5) = 180 ÷ 45 = 4\nAnswer: 4 cm' },
        { difficulty: 'Medium', question: 'A cube-shaped storage box has a volume of 216 cm³. Use the fact that 6³ = 216 to find the length of one side.', checkMode: 'auto', correctAnswer: '6cm', correctAnswers: ['6cm', '6 cm', '6'], explanation: 'Since the box is a cube, V = side × side × side = side³.\nWe need a number that, when cubed, gives 216.\n6 × 6 × 6 = 216, so the side length is 6 cm.\nAnswer: 6 cm' },
        { difficulty: 'Medium', question: 'A water tank is 4 m long, 3 m wide and 2 m high. How much water can it hold?', checkMode: 'auto', correctAnswer: '24m3', correctAnswers: ['24m3', '24 m3', '24', '24m³', '24 m³'], explanation: 'Volume = length × width × height\nV = 4 × 3 × 2\n4 × 3 = 12, then 12 × 2 = 24\nAnswer: the tank can hold 24 m³ of water' },
        { difficulty: 'Medium', question: 'A rectangular swimming pool is 8 m long, 5 m wide and 2 m deep. Find its volume.', checkMode: 'auto', correctAnswer: '80m3', correctAnswers: ['80m3', '80 m3', '80', '80m³', '80 m³'], explanation: 'Volume = length × width × height\nV = 8 × 5 × 2\n8 × 5 = 40, then 40 × 2 = 80\nAnswer: 80 m³' },
        { difficulty: 'Medium', question: 'A fish tank measures 60 cm long, 30 cm wide and 40 cm high. What is its volume?', checkMode: 'auto', correctAnswer: '72000cm3', correctAnswers: ['72000cm3', '72000 cm3', '72000', '72 000cm3', '72 000 cm3', '72 000cm³', '72 000 cm³'], explanation: 'Volume = length × width × height\nV = 60 × 30 × 40\n60 × 30 = 1 800, then 1 800 × 40 = 72 000\nAnswer: 72 000 cm³' },
        { difficulty: 'Medium', question: 'A rectangular sandpit is 3 m long, 2 m wide and 0.5 m deep. How much sand is needed to fill it completely?', checkMode: 'auto', correctAnswer: '3m3', correctAnswers: ['3m3', '3 m3', '3', '3m³', '3 m³'], explanation: 'Volume = length × width × height\nV = 3 × 2 × 0.5\n3 × 2 = 6, then 6 × 0.5 = 3\nAnswer: 3 m³ of sand is needed' },
        { difficulty: 'Medium', question: 'Katlego says a cube with sides of 4 cm has a volume of 48 cm³, because she added 4 + 4 + 4 = 12 and then multiplied by 4. Is Katlego correct? Explain the mistake, if any.', checkMode: 'self', answer: 'Katlego is incorrect. Volume of a cube = side × side × side, not side + side + side, then × side. The correct calculation is 4 × 4 × 4 = 64 cm³. Katlego used addition instead of multiplication for the first two sides.' },
        { difficulty: 'Medium', question: 'Boitumelo calculates the volume of a box that is 5 cm long, 3 cm wide and 2 cm high. She multiplies only the length and width and gets 15 cm³ as her final answer. Is she correct? Explain.', checkMode: 'self', answer: 'Boitumelo is incorrect. She only multiplied length × width (5 × 3 = 15), which gives the area of the base, not the volume. She forgot to multiply by the height. The correct volume is 5 × 3 × 2 = 30 cm³.' },
        { difficulty: 'Medium', question: 'Given a cube with sides of 7 cm, Farhaan calculates the volume as 7 × 3 = 21 cm³. Is Farhaan correct? Explain the mistake, if any.', checkMode: 'self', answer: 'Farhaan is incorrect. To find the volume of a cube you must cube the side length (multiply it by itself three times), not multiply it by 3. The correct volume is 7 × 7 × 7 = 343 cm³.' },
        { difficulty: 'Medium-Hard', question: 'Box A measures 6 cm by 5 cm by 4 cm. Box B measures 8 cm by 3 cm by 5 cm. Which box has the greater volume, or are they equal?', checkMode: 'self', answer: 'Box A: 6 × 5 × 4 = 120 cm³. Box B: 8 × 3 × 5 = 120 cm³. The two boxes have equal volume, even though their dimensions look quite different.' },
        { difficulty: 'Medium-Hard', question: 'A cube-shaped crate has sides of 5 cm. A rectangular crate measures 4 cm by 6 cm by 5 cm. Which crate has the greater volume?', checkMode: 'self', answer: 'Cube: 5 × 5 × 5 = 125 cm³. Rectangular crate: 4 × 6 × 5 = 120 cm³. The cube-shaped crate has the greater volume, by 5 cm³.' },
        { difficulty: 'Hard', question: 'A crate that is 60 cm long, 40 cm wide and 30 cm high is packed with small cubes with 10 cm sides. How many small cubes fit inside, if there is no wasted space?', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 cubes'], explanation: 'Volume of crate = 60 × 40 × 30 = 72 000 cm³\nVolume of one small cube = 10 × 10 × 10 = 1 000 cm³\nNumber of cubes = 72 000 ÷ 1 000 = 72\nAnswer: 72 small cubes fit inside' },
        { difficulty: 'Hard', question: 'A tank that is 100 cm long, 60 cm wide and 50 cm high needs to be filled using buckets that each hold 6 000 cm³. How many full buckets are needed?', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50 buckets'], explanation: 'Volume of tank = 100 × 60 × 50 = 300 000 cm³\nEach bucket holds 6 000 cm³\nNumber of buckets = 300 000 ÷ 6 000 = 50\nAnswer: 50 buckets are needed' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You can calculate volume confidently for prisms and cubes, and apply it to real-world problems.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of volume — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on volume, then try again.' },
        { minScore: 0, message: 'Keep going! Work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // Blocks: 0-4 Direct volume (prisms/cubes) | 5-8 Decimals & missing dimension |
    // 9-12 Word problems | 13-15 Error-spotting | 16-17 Comparing volumes |
    // 18-19 Multi-step packing
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'A cereal box is 9 cm long, 6 cm wide and 4 cm high. Find its volume.', checkMode: 'auto', correctAnswer: '216cm3', correctAnswers: ['216cm3', '216 cm3', '216', '216cm³', '216 cm³'], explanation: 'Volume = length × width × height\nV = 9 × 6 × 4\n9 × 6 = 54, then 54 × 4 = 216\nAnswer: 216 cm³' },
        { difficulty: 'Easy', question: 'A wooden cube has sides of 8 cm. Find its volume.', checkMode: 'auto', correctAnswer: '512cm3', correctAnswers: ['512cm3', '512 cm3', '512', '512cm³', '512 cm³'], explanation: 'Volume = side × side × side\nV = 8 × 8 × 8 = 64 × 8 = 512\nAnswer: 512 cm³' },
        { difficulty: 'Easy', question: 'A shipping container is 12 m long, 5 m wide and 3 m high. Find its volume.', checkMode: 'auto', correctAnswer: '180m3', correctAnswers: ['180m3', '180 m3', '180', '180m³', '180 m³'], explanation: 'Volume = length × width × height\nV = 12 × 5 × 3\n12 × 5 = 60, then 60 × 3 = 180\nAnswer: 180 m³' },
        { difficulty: 'Easy', question: 'A cube-shaped storage tank has sides of 7 cm. Find its volume.', checkMode: 'auto', correctAnswer: '343cm3', correctAnswers: ['343cm3', '343 cm3', '343', '343cm³', '343 cm³'], explanation: 'Volume = side × side × side\nV = 7 × 7 × 7 = 49 × 7 = 343\nAnswer: 343 cm³' },
        { difficulty: 'Easy', question: 'A garden shed has a height of 4 m, a length of 6 m and a width of 3 m. Find its volume.', checkMode: 'auto', correctAnswer: '72m3', correctAnswers: ['72m3', '72 m3', '72', '72m³', '72 m³'], explanation: 'It does not matter what order the dimensions are given in — multiply all three.\nV = length × width × height = 6 × 3 × 4\n6 × 3 = 18, then 18 × 4 = 72\nAnswer: 72 m³' },
        { difficulty: 'Easy-Medium', question: 'A pencil case is 3.5 cm high, 2 cm wide and 4 cm long. Find its volume.', checkMode: 'auto', correctAnswer: '28cm3', correctAnswers: ['28cm3', '28 cm3', '28', '28cm³', '28 cm³'], explanation: 'Volume = length × width × height\nV = 4 × 2 × 3.5\n4 × 2 = 8, then 8 × 3.5 = 28\nAnswer: 28 cm³' },
        { difficulty: 'Easy-Medium', question: 'A storage cupboard is 2.5 m long, 4 m wide and 1.5 m high. Find its volume.', checkMode: 'auto', correctAnswer: '15m3', correctAnswers: ['15m3', '15 m3', '15', '15m³', '15 m³'], explanation: 'Volume = length × width × height\nV = 2.5 × 4 × 1.5\n2.5 × 4 = 10, then 10 × 1.5 = 15\nAnswer: 15 m³' },
        { difficulty: 'Medium', question: 'A box has a volume of 336 cm³. It is 8 cm long and 6 cm wide. Find its height.', checkMode: 'auto', correctAnswer: '7cm', correctAnswers: ['7cm', '7 cm', '7'], explanation: 'Since V = l × w × h, height = V ÷ (l × w).\nHeight = 336 ÷ (8 × 6) = 336 ÷ 48 = 7\nAnswer: 7 cm' },
        { difficulty: 'Medium', question: 'A cube-shaped gift box has a volume of 125 cm³. Use the fact that 5³ = 125 to find the length of one side.', checkMode: 'auto', correctAnswer: '5cm', correctAnswers: ['5cm', '5 cm', '5'], explanation: 'Since the box is a cube, V = side³.\nWe need a number that, when cubed, gives 125.\n5 × 5 × 5 = 125, so the side length is 5 cm.\nAnswer: 5 cm' },
        { difficulty: 'Medium', question: 'A water trough for cattle is 2 m long, 0.5 m wide and 0.4 m deep. How much water can it hold?', checkMode: 'auto', correctAnswer: '0.4m3', correctAnswers: ['0.4m3', '0.4 m3', '0.4', '0.4m³', '0.4 m³'], explanation: 'Volume = length × width × height\nV = 2 × 0.5 × 0.4\n2 × 0.5 = 1, then 1 × 0.4 = 0.4\nAnswer: the trough can hold 0.4 m³ of water' },
        { difficulty: 'Medium', question: 'A storage container measures 1.2 m long, 1 m wide and 1 m high. Find its volume.', checkMode: 'auto', correctAnswer: '1.2m3', correctAnswers: ['1.2m3', '1.2 m3', '1.2', '1.2m³', '1.2 m³'], explanation: 'Volume = length × width × height\nV = 1.2 × 1 × 1\n1.2 × 1 = 1.2, then 1.2 × 1 = 1.2\nAnswer: 1.2 m³' },
        { difficulty: 'Medium', question: 'A shipping box measures 50 cm long, 40 cm wide and 30 cm high. What is its volume?', checkMode: 'auto', correctAnswer: '60000cm3', correctAnswers: ['60000cm3', '60000 cm3', '60000', '60 000cm3', '60 000 cm3', '60 000cm³', '60 000 cm³'], explanation: 'Volume = length × width × height\nV = 50 × 40 × 30\n50 × 40 = 2 000, then 2 000 × 30 = 60 000\nAnswer: 60 000 cm³' },
        { difficulty: 'Medium', question: 'A planter box is 1.5 m long, 0.6 m wide and 0.4 m deep. How much soil is needed to fill it completely?', checkMode: 'auto', correctAnswer: '0.36m3', correctAnswers: ['0.36m3', '0.36 m3', '0.36', '0.36m³', '0.36 m³'], explanation: 'Volume = length × width × height\nV = 1.5 × 0.6 × 0.4\n1.5 × 0.6 = 0.9, then 0.9 × 0.4 = 0.36\nAnswer: 0.36 m³ of soil is needed' },
        { difficulty: 'Medium', question: 'Naledi says a box that is 6 cm long, 4 cm wide and 2 cm high has a volume of 12 cm³, because she added 6 + 4 + 2 = 12. Is Naledi correct? Explain the mistake, if any.', checkMode: 'self', answer: 'Naledi is incorrect. Volume is found by multiplying the three dimensions, not adding them. The correct calculation is 6 × 4 × 2 = 48 cm³. Naledi used addition instead of multiplication.' },
        { difficulty: 'Medium', question: 'A box is 9 cm long, 2 cm wide and 5 cm high. Zola multiplies only the length and width, getting 18 cm³, and gives this as the volume. Is Zola correct? Explain.', checkMode: 'self', answer: 'Zola is incorrect. Multiplying only length × width (9 × 2 = 18) gives the area of the base, not the volume — the height must also be included. The correct volume is 9 × 2 × 5 = 90 cm³.' },
        { difficulty: 'Medium', question: 'Mpho calculates the volume of a cube-shaped box with 10 cm sides and writes the answer as "1 000". Is Mpho\'s answer fully correct? Explain.', checkMode: 'self', answer: 'The number is correct (10 × 10 × 10 = 1 000), but the answer is incomplete because it is missing the cubic unit. Volume must always be written with cubic units, so the correct answer is 1 000 cm³, not just 1 000.' },
        { difficulty: 'Medium-Hard', question: 'Box A measures 7 cm by 4 cm by 3 cm. Box B measures 6 cm by 5 cm by 3 cm. Which box has the greater volume, and by how much?', checkMode: 'self', answer: 'Box A: 7 × 4 × 3 = 84 cm³. Box B: 6 × 5 × 3 = 90 cm³. Box B has the greater volume, by 90 − 84 = 6 cm³.' },
        { difficulty: 'Medium-Hard', question: 'A cube-shaped water container has sides of 6 cm. A rectangular water container measures 5 cm by 5 cm by 7 cm. Which container has the greater volume?', checkMode: 'self', answer: 'Cube: 6 × 6 × 6 = 216 cm³. Rectangular container: 5 × 5 × 7 = 175 cm³. The cube-shaped container has the greater volume, by 216 − 175 = 41 cm³.' },
        { difficulty: 'Hard', question: 'A storage room is 4 m long, 3 m wide and 2.5 m high. It will be filled with boxes that each measure 1 m by 1 m by 0.5 m. How many boxes are needed to fill the room completely?', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 boxes'], explanation: 'Volume of room = 4 × 3 × 2.5 = 30 m³\nVolume of one box = 1 × 1 × 0.5 = 0.5 m³\nNumber of boxes = 30 ÷ 0.5 = 60\nAnswer: 60 boxes are needed' },
        { difficulty: 'Hard', question: 'A crate that is 90 cm long, 60 cm wide and 50 cm high is packed with smaller boxes measuring 30 cm by 20 cm by 10 cm. How many small boxes fit inside, if there is no wasted space?', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45', '45 boxes'], explanation: 'Volume of crate = 90 × 60 × 50 = 270 000 cm³\nVolume of one small box = 30 × 20 × 10 = 6 000 cm³\nNumber of boxes = 270 000 ÷ 6 000 = 45\nAnswer: 45 small boxes fit inside' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can calculate volume confidently for prisms and cubes, and apply it to real-world problems.' },
        { minScore: 15, message: 'Great work! You have a solid understanding — review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on volume, then try again.' },
        { minScore: 0, message: 'Keep going! Work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // Blocks: 0-4 Direct volume (prisms/cubes) | 5-8 Decimals & missing dimension |
    // 9-12 Word problems | 13-15 Error-spotting | 16-17 Comparing volumes |
    // 18-19 Multi-step packing
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'A shoebox is 10 cm long, 6 cm wide and 5 cm high. Find its volume.', checkMode: 'auto', correctAnswer: '300cm3', correctAnswers: ['300cm3', '300 cm3', '300', '300cm³', '300 cm³'], explanation: 'Volume = length × width × height\nV = 10 × 6 × 5\n10 × 6 = 60, then 60 × 5 = 300\nAnswer: 300 cm³' },
        { difficulty: 'Easy', question: 'A cube-shaped block has sides of 9 cm. Find its volume.', checkMode: 'auto', correctAnswer: '729cm3', correctAnswers: ['729cm3', '729 cm3', '729', '729cm³', '729 cm³'], explanation: 'Volume = side × side × side\nV = 9 × 9 × 9 = 81 × 9 = 729\nAnswer: 729 cm³' },
        { difficulty: 'Easy', question: 'A classroom is 7 m long, 5 m wide and 2 m high. Find its volume.', checkMode: 'auto', correctAnswer: '70m3', correctAnswers: ['70m3', '70 m3', '70', '70m³', '70 m³'], explanation: 'Volume = length × width × height\nV = 7 × 5 × 2\n7 × 5 = 35, then 35 × 2 = 70\nAnswer: 70 m³' },
        { difficulty: 'Easy', question: 'A cube-shaped crate has sides of 4 m. Find its volume.', checkMode: 'auto', correctAnswer: '64m3', correctAnswers: ['64m3', '64 m3', '64', '64m³', '64 m³'], explanation: 'Volume = side × side × side\nV = 4 × 4 × 4 = 16 × 4 = 64\nAnswer: 64 m³' },
        { difficulty: 'Easy', question: 'A toolbox has a width of 10 cm, a height of 4 cm and a length of 6 cm. Find its volume.', checkMode: 'auto', correctAnswer: '240cm3', correctAnswers: ['240cm3', '240 cm3', '240', '240cm³', '240 cm³'], explanation: 'It does not matter what order the dimensions are given in — multiply all three.\nV = length × width × height = 6 × 10 × 4\n6 × 10 = 60, then 60 × 4 = 240\nAnswer: 240 cm³' },
        { difficulty: 'Easy-Medium', question: 'A drawer is 3 cm high, 2 cm wide and 4.5 cm long. Find its volume.', checkMode: 'auto', correctAnswer: '27cm3', correctAnswers: ['27cm3', '27 cm3', '27', '27cm³', '27 cm³'], explanation: 'Volume = length × width × height\nV = 4.5 × 2 × 3\n4.5 × 2 = 9, then 9 × 3 = 27\nAnswer: 27 cm³' },
        { difficulty: 'Easy-Medium', question: 'A storage locker is 3.5 m long, 2 m wide and 2 m high. Find its volume.', checkMode: 'auto', correctAnswer: '14m3', correctAnswers: ['14m3', '14 m3', '14', '14m³', '14 m³'], explanation: 'Volume = length × width × height\nV = 3.5 × 2 × 2\n3.5 × 2 = 7, then 7 × 2 = 14\nAnswer: 14 m³' },
        { difficulty: 'Medium', question: 'A crate has a volume of 150 cm³. It is 5 cm wide and 6 cm high. Find its length.', checkMode: 'auto', correctAnswer: '5cm', correctAnswers: ['5cm', '5 cm', '5'], explanation: 'Since V = l × w × h, length = V ÷ (w × h).\nLength = 150 ÷ (5 × 6) = 150 ÷ 30 = 5\nAnswer: 5 cm' },
        { difficulty: 'Medium', question: 'A cube-shaped crate has a volume of 343 cm³. Use the fact that 7³ = 343 to find the length of one side.', checkMode: 'auto', correctAnswer: '7cm', correctAnswers: ['7cm', '7 cm', '7'], explanation: 'Since the crate is a cube, V = side³.\nWe need a number that, when cubed, gives 343.\n7 × 7 × 7 = 343, so the side length is 7 cm.\nAnswer: 7 cm' },
        { difficulty: 'Medium', question: 'A reservoir is 10 m long, 8 m wide and 3 m deep. How much water can it hold?', checkMode: 'auto', correctAnswer: '240m3', correctAnswers: ['240m3', '240 m3', '240', '240m³', '240 m³'], explanation: 'Volume = length × width × height\nV = 10 × 8 × 3\n10 × 8 = 80, then 80 × 3 = 240\nAnswer: the reservoir can hold 240 m³ of water' },
        { difficulty: 'Medium', question: 'A rectangular swimming pool is 15 m long, 7 m wide and 2 m deep. Find its volume.', checkMode: 'auto', correctAnswer: '210m3', correctAnswers: ['210m3', '210 m3', '210', '210m³', '210 m³'], explanation: 'Volume = length × width × height\nV = 15 × 7 × 2\n15 × 7 = 105, then 105 × 2 = 210\nAnswer: 210 m³' },
        { difficulty: 'Medium', question: 'A storage container is 80 cm long, 50 cm wide and 40 cm high. How much soil can it hold?', checkMode: 'auto', correctAnswer: '160000cm3', correctAnswers: ['160000cm3', '160000 cm3', '160000', '160 000cm3', '160 000 cm3', '160 000cm³', '160 000 cm³'], explanation: 'Volume = length × width × height\nV = 80 × 50 × 40\n80 × 50 = 4 000, then 4 000 × 40 = 160 000\nAnswer: the container can hold 160 000 cm³ of soil' },
        { difficulty: 'Medium', question: 'A gift box measures 25 cm long, 15 cm wide and 10 cm high. What is its volume?', checkMode: 'auto', correctAnswer: '3750cm3', correctAnswers: ['3750cm3', '3750 cm3', '3750', '3 750cm3', '3 750 cm3', '3 750cm³', '3 750 cm³'], explanation: 'Volume = length × width × height\nV = 25 × 15 × 10\n25 × 15 = 375, then 375 × 10 = 3 750\nAnswer: 3 750 cm³' },
        { difficulty: 'Medium', question: 'Given a cube with sides of 5 m, Tebogo says the volume is 15 m³ because he calculated 5 × 3. Is Tebogo correct? Explain the mistake, if any.', checkMode: 'self', answer: 'Tebogo is incorrect. To find the volume of a cube you must cube the side length (multiply it by itself three times), not multiply it by 3. The correct volume is 5 × 5 × 5 = 125 m³.' },
        { difficulty: 'Medium', question: 'A box is 8 cm long, 6 cm wide and 3 cm high. Palesa multiplies only the length and width, getting 48 cm³, and gives this as the final volume. Is Palesa correct? Explain.', checkMode: 'self', answer: 'Palesa is incorrect. Multiplying only length × width (8 × 6 = 48) gives the area of the base, not the volume — the height must also be included. The correct volume is 8 × 6 × 3 = 144 cm³.' },
        { difficulty: 'Medium', question: 'A box (not a cube) is 4 cm long, 9 cm wide and 2 cm high. Kagiso treats it like a cube and calculates 4 × 4 × 4 = 64 cm³. Is Kagiso correct? Explain the mistake, if any.', checkMode: 'self', answer: 'Kagiso is incorrect. The box is not a cube, so its sides are not all equal — cubing just one dimension is the wrong method. The correct volume is length × width × height = 4 × 9 × 2 = 72 cm³.' },
        { difficulty: 'Medium-Hard', question: 'Box A measures 9 cm by 4 cm by 5 cm. Box B measures 8 cm by 5 cm by 6 cm. Which box has the greater volume, and by how much?', checkMode: 'self', answer: 'Box A: 9 × 4 × 5 = 180 cm³. Box B: 8 × 5 × 6 = 240 cm³. Box B has the greater volume, by 240 − 180 = 60 cm³.' },
        { difficulty: 'Medium-Hard', question: 'A cube-shaped crate has sides of 8 cm. A rectangular crate measures 6 cm by 8 cm by 9 cm. Which crate has the greater volume?', checkMode: 'self', answer: 'Cube: 8 × 8 × 8 = 512 cm³. Rectangular crate: 6 × 8 × 9 = 432 cm³. The cube-shaped crate has the greater volume, by 512 − 432 = 80 cm³.' },
        { difficulty: 'Hard', question: 'A crate that is 120 cm long, 80 cm wide and 60 cm high is packed with smaller boxes that each measure 20 cm by 20 cm by 20 cm. How many small boxes fit inside, if there is no wasted space?', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 boxes'], explanation: 'Volume of crate = 120 × 80 × 60 = 576 000 cm³\nVolume of one small box = 20 × 20 × 20 = 8 000 cm³\nNumber of boxes = 576 000 ÷ 8 000 = 72\nAnswer: 72 small boxes fit inside' },
        { difficulty: 'Hard', question: 'A tank that is 150 cm long, 100 cm wide and 60 cm high needs to be filled using buckets that each hold 9 000 cm³. How many full buckets are needed?', checkMode: 'auto', correctAnswer: '100', correctAnswers: ['100', '100 buckets'], explanation: 'Volume of tank = 150 × 100 × 60 = 900 000 cm³\nEach bucket holds 9 000 cm³\nNumber of buckets = 900 000 ÷ 9 000 = 100\nAnswer: 100 buckets are needed' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply volume calculations, decimal reasoning and multi-step problem-solving to real-world situations.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of these skills — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on volume, then try again.' },
        { minScore: 0, message: 'Keep going! Work through the study guide again and retry this set.' },
      ],
    },
  ],
}
