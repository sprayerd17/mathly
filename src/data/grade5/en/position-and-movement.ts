import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (position and movement roles) ─────────────────────────────
// direction words  → blue   (#2563eb)
// grid positions   → orange (#ea580c)
// compass dirs     → green  (#16a34a)
// vertical axis    → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Position and Movement',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — DESCRIBING POSITION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'describing-position',
      title: 'Describing Position',
      icon: '🧭',
      explanation:
        `<p style="margin-bottom:16px;">Position tells us where something is. We use words like ${bl('left')}, ${bl('right')}, ${bl('above')}, ${bl('below')}, ${bl('next to')}, ${bl('between')}, ${bl('in front of')} and ${bl('behind')} to describe where something is. We can also use compass directions — ${gr('North')}, ${gr('South')}, ${gr('East')} and ${gr('West')}. On a map ${gr('North')} is usually at the top. We can describe position using rows and columns on a grid — the column is given first then the row.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('direction words')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('grid positions')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('compass directions')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Direction words</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Words that tell us where something is relative to something else: ${bl('left')}, ${bl('right')}, ${bl('above')}, ${bl('below')}, ${bl('next to')}, ${bl('between')}, ${bl('in front of')}, ${bl('behind')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Compass directions</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('North')}, ${gr('South')}, ${gr('East')} and ${gr('West')} give us exact directions on a map. ${gr('North')} is always at the top of the map.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Grid positions</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">We write a grid position as ${or('(column, row)')} — the column number is always written first, then the row number.</p>` +
        `</div>` +

        `</div>` +

        // ── Compass rose ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Compass rose</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;">` +
        `<div style="display:grid;grid-template-columns:auto auto auto;grid-template-rows:auto auto auto;gap:8px;text-align:center;font-weight:700;font-size:1.05em;">` +
        `<div></div><div style="color:#16a34a;">${gr('North ↑')}</div><div></div>` +
        `<div style="color:#16a34a;">${gr('← West')}</div><div style="color:#374151;">✛</div><div style="color:#16a34a;">${gr('East →')}</div>` +
        `<div></div><div style="color:#16a34a;">${gr('↓ South')}</div><div></div>` +
        `</div>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Remember: column first, then row</p>` +
        `<p style="margin:0;color:#9a3412;">When reading or writing a grid position, always give the ${or('column')} number first and the ${or('row')} number second — just like reading across a page before going up or down. For example, ${or('(2, 3)')} means column 2, row 3.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho sits in row 3, column 2 of his classroom. Describe his position.',
          answer: `Sipho is at grid position ${or('(2, 3)')} — ${or('column 2')} from the left and ${or('row 3')} from the front`,
          steps: [
            `${or('Column')} tells us how far across. ${or('Row')} tells us how far up or down.`,
            `Sipho is in the ${or('2nd column')} from the left and the ${or('3rd row')} from the front.`,
            `We write the column first and the row second: his position is ${or('(2, 3)')}.`,
          ],
        },
        {
          question: 'On a map the library is North of the school and the park is East of the school. If Lerato is at the school, which direction must she walk to get to the library?',
          answer: `Lerato must walk ${gr('North')}`,
          steps: [
            `${gr('North')} is at the top of the map.`,
            `The library is ${gr('North')} of the school.`,
            `Lerato must walk ${gr('North')} to reach the library.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Grid showing columns and rows with a position marked at column 2 row 3 and a compass rose showing North South East West" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to describe position using direction words grid coordinates and compass directions" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — READING AND DRAWING GRIDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-and-drawing-grids',
      title: 'Reading and Drawing Grids',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">A grid is a pattern of ${bl('horizontal')} and ${re('vertical')} lines that creates rows and columns. We use grids to locate positions precisely. The ${bl('horizontal axis')} goes left and right and is usually labelled with numbers or letters. The ${re('vertical axis')} goes up and down. When we give a grid position we always give the ${bl('horizontal')} position first and the ${re('vertical')} position second — just like reading a book, we go across before we go up.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('horizontal')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('vertical')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('grid positions')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Horizontal axis</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${bl('horizontal axis')} goes ${bl('left and right')}. It is usually labelled with numbers or letters and tells us how far ${bl('across')} a position is.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Vertical axis</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${re('vertical axis')} goes ${re('up and down')}. It tells us how far ${re('up')} a position is from the bottom.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Grid position</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A ${or('grid position')} is written as ${or('(across, up)')} — the ${bl('horizontal')} number always comes first and the ${re('vertical')} number comes second.</p>` +
        `</div>` +

        `</div>` +

        // ── Across before up visual ───────────────────────────────────────────
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:120px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Step 1</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${bl('Go across →')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">then</div>` +
        `<div style="text-align:center;min-width:120px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Step 2</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${re('Go up ↑')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">⟶</div>` +
        `<div style="text-align:center;min-width:120px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Position</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('(across, up)')}</p>` +
        `</div>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Across before up — always</p>` +
        `<p style="margin:0;color:#1e3a8a;">Think of it like reading: you always go ${bl('across')} the page first before you go ${re('up')}. In ${or('(3, 4)')}, the ${bl('3')} tells you to move ${bl('3 across')} and the ${re('4')} tells you to move ${re('4 up')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'On a grid Amahle places a star at position (3, 4). Where is the star?',
          answer: `The star is at the intersection of ${bl('column 3')} and ${re('row 4')} — ${or('position (3, 4)')}`,
          steps: [
            `The first number ${bl('3')} tells us to move ${bl('3 across')} from the left.`,
            `The second number ${re('4')} tells us to move ${re('4 up')} from the bottom.`,
            `Find ${bl('column 3')} first, then move ${re('up')} to ${re('row 4')}.`,
            `The star is at the intersection of ${bl('column 3')} and ${re('row 4')} — we write this as ${or('(3, 4)')}.`,
          ],
        },
        {
          question: 'Thabo marks these positions on a grid — (1, 2), (2, 2), (3, 2). What do you notice?',
          answer: `The three points form a ${bl('horizontal straight line')} across ${re('row 2')}`,
          steps: [
            `All three positions have the same second number — ${re('2')}. The second number is the ${re('vertical')} value.`,
            `This means they are all in ${re('row 2')} — they are all the same height ${re('up')}.`,
            `They are in ${bl('columns 1, 2 and 3')} — they spread across three different ${bl('horizontal')} positions.`,
            `The three points form a ${bl('horizontal straight line')} across ${re('row 2')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Grid showing horizontal axis labelled 1 to 5 and vertical axis labelled 1 to 5 with a star marked at position (3, 4) and three dots forming a horizontal line at row 2" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read and plot positions on a grid by going across first then up with examples at (3, 4) and a horizontal line at row 2" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — MOVEMENT AND DIRECTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'movement-and-direction',
      title: 'Movement and Direction',
      icon: '➡️',
      explanation:
        `<p style="margin-bottom:16px;">Movement describes how something moves from one position to another. We can describe movement using ${bl('direction')} and distance — for example ${bl('3 steps to the right')} or ${bl('2 blocks North')}. On a grid we can move ${bl('horizontally')} (${bl('left')} or ${bl('right')}) or ${bl('vertically')} (${bl('up')} or ${bl('down')}). When following directions always start from the given position and move one step at a time.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('direction words')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('starting position')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('ending position')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Direction</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">We use ${bl('direction words')} to describe which way to move: ${bl('left')}, ${bl('right')}, ${bl('up')}, ${bl('down')}, ${bl('North')}, ${bl('South')}, ${bl('East')}, ${bl('West')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Starting position</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${or('starting position')} is where we begin. We always apply our movements from here.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Ending position</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${gr('ending position')} is where we arrive after completing all the movements.</p>` +
        `</div>` +

        `</div>` +

        // ── Horizontal and vertical movement ─────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Horizontal and vertical movement</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Horizontal movement</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Moving ${bl('left')} or ${bl('right')} changes the <strong>horizontal position</strong>.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:4px;">${bl('Right')}: <strong>add</strong> to the horizontal number.</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${bl('Left')}: <strong>subtract</strong> from the horizontal number.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Vertical movement</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Moving ${bl('up')} or ${bl('down')} changes the <strong>vertical position</strong>.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:4px;">${bl('Up')} / ${bl('North')}: <strong>add</strong> to the vertical number.</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${bl('Down')} / ${bl('South')}: <strong>subtract</strong> from the vertical number.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">One step at a time</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always start from the ${or('given position')} and apply each movement separately. Complete the ${bl('horizontal')} movement first, then the ${bl('vertical')} movement — or follow the order given in the question.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho starts at position (2, 1) on a grid. He moves 3 steps right and 2 steps up. Where does he end up?',
          answer: `Sipho ends at position ${gr('(5, 3)')}`,
          steps: [
            `Start at ${or('(2, 1)')}.`,
            `Move ${bl('3 steps right')} — ${bl('right')} means add 3 to the horizontal position: 2 + 3 = 5. Now at (5, 1).`,
            `Move ${bl('2 steps up')} — ${bl('up')} means add 2 to the vertical position: 1 + 2 = 3.`,
            `Sipho ends at position ${gr('(5, 3)')}.`,
          ],
        },
        {
          question: 'Lerato walks from the shop to her home. She walks 4 blocks East and then 2 blocks North. If the shop is at (1, 1), where is her home?',
          answer: `Her home is at ${gr('(5, 3)')}`,
          steps: [
            `Start at ${or('(1, 1)')}.`,
            `Walk ${bl('4 blocks East')} — ${bl('East')} means ${bl('right')}, so add 4 to the horizontal position: 1 + 4 = 5. Now at (5, 1).`,
            `Walk ${bl('2 blocks North')} — ${bl('North')} means ${bl('up')}, so add 2 to the vertical position: 1 + 2 = 3.`,
            `Her home is at ${gr('(5, 3)')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Grid showing a path from starting position (2, 1) moving 3 steps right then 2 steps up to ending position (5, 3) with arrows and colour coded steps" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to follow movement instructions on a grid using horizontal and vertical steps with compass direction examples" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy — read a grid position ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Using the grid above, what position is the School at?',
      answer: '(4,1)',
      checkMode: 'auto',
      correctAnswer: '(4,1)',
      correctAnswers: ['(4,1)', '4,1', '(4, 1)', '4, 1'],
      explanation: 'The School is marked at column 4, row 1 — we write the column first and the row second, so the position is (4,1).',
    },

    // ── Q2 Easy — identify a landmark by position ────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What is at position (1,4) on the grid?',
      answer: 'Park',
      checkMode: 'auto',
      correctAnswer: 'Park',
      explanation: 'Column 1, row 4 is where the Park is marked on the grid.',
    },

    // ── Q3 Medium — count steps right ────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'How many steps right do you move to get from the House to the School?',
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
      explanation: 'The House is at (1,1) and the School is at (4,1). They are in the same row, so we only move right. 4 − 1 = 3 steps right.',
    },

    // ── Q4 Medium — count steps up ───────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'How many steps up do you move to get from the School to the Library?',
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
      explanation: 'The School is at (4,1) and the Library is at (4,4). They are in the same column, so we only move up. 4 − 1 = 3 steps up.',
    },

    // ── Q5 Medium — compass direction movement ───────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho walks from the House to the Park. How many steps North does he walk?',
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
      explanation: 'The House is at (1,1) and the Park is at (1,4). They are in the same column (column 1). North means up, so Sipho walks 4 − 1 = 3 steps North.',
    },

    // ── Q6 Hard — describe a route ───────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato walks from the House to the Library. She can only move right or up. Describe her route using steps.',
      answer: 'Move 3 steps right from (1,1) to (4,1) then 3 steps up from (4,1) to (4,4).',
      checkMode: 'self',
    },

    // ── Q7 Hard — shortest route ─────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'What is the shortest route from the Park to the Shop in steps?',
      answer: 'Move 2 steps right and 2 steps down from (1,4) to reach (3,2).',
      checkMode: 'self',
    },

    // ── Q8 Hard — apply movement to find a position ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle starts at the Library and walks 3 steps South and 1 step left. Where does she end up?',
      answer: '(3,1)',
      checkMode: 'auto',
      correctAnswer: '(3,1)',
      correctAnswers: ['(3,1)', '3,1', '(3, 1)', '3, 1'],
      explanation: 'Start at Library (4,4). South means down: 4 − 3 = 1, so now at (4,1). Left means subtract from the horizontal: 4 − 1 = 3. Final position is (3,1).',
    },

    // ── Q9 Hard — compare distances ──────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Which two landmarks are the same distance apart as the House and the School?',
      answer: 'The School and Library are also 3 steps apart — both pairs are 3 steps away from each other.',
      checkMode: 'self',
    },
  ],

  scoreMessages: [
    { minScore: 5, message: 'Outstanding! A perfect score — you have completely mastered describing position. Keep it up!' },
    { minScore: 4, message: 'Excellent work! You have a very strong grasp of position and movement. Review any missed parts and you will have it perfect.' },
    { minScore: 3, message: 'Well done! You understand most of the content. Go back to the section where you dropped marks and give it another go.' },
    { minScore: 1, message: 'Good effort! Work back through the study guide and worked examples, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples, then try again." },
  ],
}
