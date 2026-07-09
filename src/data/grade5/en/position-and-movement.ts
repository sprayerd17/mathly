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

// ─── Shared reference grid diagram (reused across all diagram-flagged practice questions) ──
// House (1,1), School (4,1), Library (4,4), Park (1,4), Shop (3,2)
const GRID_SVG = '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Neighbourhood Grid</text><line x1="40" y1="30" x2="40" y2="150" stroke="#9ca3af" stroke-width="1"/><line x1="90" y1="30" x2="90" y2="150" stroke="#9ca3af" stroke-width="1"/><line x1="140" y1="30" x2="140" y2="150" stroke="#9ca3af" stroke-width="1"/><line x1="190" y1="30" x2="190" y2="150" stroke="#9ca3af" stroke-width="1"/><line x1="40" y1="150" x2="190" y2="150" stroke="#9ca3af" stroke-width="1"/><line x1="40" y1="115" x2="190" y2="115" stroke="#9ca3af" stroke-width="1"/><line x1="40" y1="80" x2="190" y2="80" stroke="#9ca3af" stroke-width="1"/><line x1="40" y1="45" x2="190" y2="45" stroke="#9ca3af" stroke-width="1"/><line x1="40" y1="30" x2="40" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="150" x2="190" y2="150" stroke="#0f1f3d" stroke-width="2"/><text x="40" y="167" font-size="12" fill="#374151" text-anchor="middle">1</text><text x="90" y="167" font-size="12" fill="#374151" text-anchor="middle">2</text><text x="140" y="167" font-size="12" fill="#374151" text-anchor="middle">3</text><text x="190" y="167" font-size="12" fill="#374151" text-anchor="middle">4</text><text x="110" y="182" font-size="11" fill="#374151" text-anchor="middle">column</text><text x="28" y="154" font-size="12" fill="#374151" text-anchor="end">1</text><text x="28" y="119" font-size="12" fill="#374151" text-anchor="end">2</text><text x="28" y="84" font-size="12" fill="#374151" text-anchor="end">3</text><text x="28" y="49" font-size="12" fill="#374151" text-anchor="end">4</text><text x="12" y="90" font-size="11" fill="#374151" text-anchor="middle" transform="rotate(-90 12 90)">row</text><circle cx="40" cy="150" r="5" fill="#2563eb"/><text x="46" y="146" font-size="13" fill="#2563eb" font-weight="700">House</text><circle cx="190" cy="150" r="5" fill="#2563eb"/><text x="184" y="146" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">School</text><circle cx="190" cy="45" r="5" fill="#2563eb"/><text x="184" y="41" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">Library</text><circle cx="40" cy="45" r="5" fill="#2563eb"/><text x="46" y="41" font-size="13" fill="#2563eb" font-weight="700">Park</text><circle cx="140" cy="115" r="5" fill="#ea580c"/><text x="146" y="111" font-size="13" fill="#ea580c" font-weight="700">Shop</text></svg>'

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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Reading positions & coordinates | 4-6 Compass directions |
    // 7-10 Counting steps | 11-14 Applying movement | 15-17 Describing/comparing
    // routes | 18-19 Multi-step reasoning & error-spotting
    // Shared grid: House (1,1), School (4,1), Library (4,4), Park (1,4), Shop (3,2)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Using the grid above, what is the grid position of the Shop, written as (column, row)?', checkMode: 'auto', correctAnswer: '(3,2)', correctAnswers: ['(3,2)', '3,2', '(3, 2)', '3, 2'], explanation: 'The Shop is marked at column 3, row 2 on the grid. We write the column first and the row second, so the position is (3,2).', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Which landmark is found at position (4,4) on the grid?', checkMode: 'auto', correctAnswer: 'Library', correctAnswers: ['Library', 'library'], explanation: 'Column 4, row 4 is where the Library is marked on the grid.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'The House is at (1,1) and the Park is at (1,4). Using the grid above, is the Park above or below the House?', checkMode: 'auto', correctAnswer: 'Above', correctAnswers: ['above'], explanation: 'The Park has a higher row number (4) than the House (row 1), and row numbers increase as you go up the grid, so the Park is above the House.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Using the grid above, which landmark is directly next to the Library in the same row — the Shop or the Park?', checkMode: 'auto', correctAnswer: 'Park', correctAnswers: ['park', 'the park'], explanation: 'The Library is at (4,4) and the Park is at (1,4) — they share row 4. The Shop is at (3,2), which is in a different row from the Library. So the Park is the landmark that shares the Library\'s row.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'If you stand at the House (1,1) and face the Shop (3,2), is the Shop to your left or to your right?', checkMode: 'auto', correctAnswer: 'Right', correctAnswers: ['right', 'to the right'], explanation: 'The Shop is at column 3, which is further across than the House\'s column 1, so the Shop is to the right of the House.' },
        { difficulty: 'Easy', question: 'North is the compass direction that points to the top of the grid. Using the grid above, is the Library North or South of the School?', checkMode: 'auto', correctAnswer: 'North', correctAnswers: ['north'], explanation: 'The School is at (4,1) and the Library is at (4,4) — same column, but the Library has a higher row number, meaning it is further up the grid. Up on the grid is North, so the Library is North of the School.' },
        { difficulty: 'Easy', question: 'What is the opposite compass direction of West?', checkMode: 'auto', correctAnswer: 'East', correctAnswers: ['east'], explanation: 'North and South are opposites, and East and West are opposites. The opposite of West is East.' },
        { difficulty: 'Easy', question: 'Thabo stands at the School and knows the Park is West of the House. If Thabo walks West from the School, does the grid column number he moves toward get smaller or bigger?', checkMode: 'auto', correctAnswer: 'Smaller', correctAnswers: ['smaller', 'a smaller one'], explanation: 'West means moving left on the grid, which moves toward smaller column numbers. Walking West from the School (column 4) moves Thabo toward smaller column numbers, such as column 1 where the House and Park are.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the grid above, how many steps to the right is the School from the House?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 steps'], explanation: 'The House is at (1,1) and the School is at (4,1) — same row, so we only count horizontal steps. 4 − 1 = 3 steps to the right.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'The Library is at (4,4) and the School is at (4,1). Using the grid above, how many steps up separate these two landmarks?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 steps'], explanation: 'The Library and School share column 4, so we count vertical steps only. 4 − 1 = 3 steps up.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Amahle says the House and the Park are 4 steps apart because "the row numbers are 1 and 4". Using the grid above, is Amahle correct?', checkMode: 'self', answer: 'Amahle is not correct. The House is at (1,1) and the Park is at (1,4), and both are in column 1, so we find the distance by subtracting the row numbers, not by using one of the row numbers directly as the answer. The correct calculation is 4 − 1 = 3 steps, not 4. Amahle mistook one of the row numbers for the total number of steps between the two positions.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the grid above, how many steps total (right plus up) would you travel moving from the Shop at (3,2) to the Library at (4,4), moving only right and up?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 steps'], explanation: 'From (3,2) to (4,4): horizontal steps = 4 − 3 = 1, vertical steps = 4 − 2 = 2. Total steps = 1 + 2 = 3.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'A delivery robot needs to travel from the House at (1,1) to the School at (4,1) and then on to the Library at (4,4). Using the grid above, what is the total number of steps for the whole trip?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 steps'], explanation: 'House to School: 4 − 1 = 3 steps right. School to Library: 4 − 1 = 3 steps up. Total: 3 + 3 = 6 steps.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the grid above, which pair of landmarks are exactly 4 steps apart in total: the Shop and the Park, or the Shop and the School?', checkMode: 'auto', correctAnswer: 'The Shop and the Park', correctAnswers: ['shop and park', 'the shop and the park'], explanation: 'Shop (3,2) to Park (1,4): horizontal = 3 − 1 = 2, vertical = 4 − 2 = 2, total = 4 steps. Shop (3,2) to School (4,1): horizontal = 4 − 3 = 1, vertical = 2 − 1 = 1, total = 2 steps. So the Shop and Park are the pair that are 4 steps apart.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Starting at the House (1,1) on the grid above, move 3 steps right and 3 steps up. Which landmark do you land on?', checkMode: 'auto', correctAnswer: 'Library', correctAnswers: ['Library', 'library'], explanation: '3 steps right from column 1: 1 + 3 = 4. 3 steps up from row 1: 1 + 3 = 4. This lands on (4,4), which is the Library.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Sipho starts at the Park (1,4) and walks 2 steps right and 2 steps down. Using the grid above, at which grid position does he end up?', checkMode: 'auto', correctAnswer: '(3,2)', correctAnswers: ['(3,2)', '3,2', '(3, 2)', '3, 2'], explanation: '2 steps right from column 1: 1 + 2 = 3. 2 steps down from row 4: 4 − 2 = 2. Sipho ends at (3,2), which is the Shop.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Lerato starts at the School (4,1) and walks 3 steps West. Using the grid above, at which grid position does she end up?', checkMode: 'auto', correctAnswer: '(1,1)', correctAnswers: ['(1,1)', '1,1', '(1, 1)', '1, 1'], explanation: 'West means moving left, which decreases the column number. 3 steps West from column 4: 4 − 3 = 1. The row stays at 1. Lerato ends at (1,1), which is the House.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'A delivery van starts at the House (1,1), drives 3 blocks East to the School, then 3 blocks North to the Library. If it now drives 1 more block South, where does it end up on the grid above?', checkMode: 'auto', correctAnswer: '(4,3)', correctAnswers: ['(4,3)', '4,3', '(4, 3)', '4, 3'], explanation: 'House (1,1) → East 3 blocks → School (4,1) → North 3 blocks → Library (4,4). South 1 block from (4,4): row 4 − 1 = 3. Final position is (4,3).', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'Describe a route from the House (1,1) to the Shop (3,2) on the grid above using only right and up steps.', checkMode: 'self', answer: 'Move 2 steps right from (1,1) to (3,1), then 1 step up from (3,1) to (3,2). This uses only right and up moves and covers 2 + 1 = 3 steps in total, which matches the horizontal and vertical distances between the House and the Shop.' },
        { difficulty: 'Hard', question: 'Compare the route from the House to the School with the route from the House to the Library, both using only right and up steps. Which route is longer, and by how many steps, using the grid above?', checkMode: 'self', answer: 'House to School (1,1) to (4,1) takes 3 steps right and 0 steps up, so 3 steps total. House to Library (1,1) to (4,4) takes 3 steps right and 3 steps up, so 6 steps total. The route to the Library is longer, by 6 − 3 = 3 steps.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered reading grid positions, compass directions, counting steps, following movement instructions and describing routes.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'Using the grid above, write the grid position of the House as (column, row).', checkMode: 'auto', correctAnswer: '(1,1)', correctAnswers: ['(1,1)', '1,1', '(1, 1)', '1, 1'], explanation: 'The House is marked at column 1, row 1 on the grid. We write the column first and the row second, so the position is (1,1).', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'What landmark sits at grid position (4,1) on the grid above?', checkMode: 'auto', correctAnswer: 'School', correctAnswers: ['School', 'school'], explanation: 'Column 4, row 1 is where the School is marked on the grid.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'The Shop is at (3,2) and the Library is at (4,4). Using the grid above, is the Library in front of or behind the Shop, given that a higher row number means further back on the grid?', checkMode: 'auto', correctAnswer: 'Behind', correctAnswers: ['behind'], explanation: 'The Library has a higher row number (4) than the Shop (row 2). Since a higher row number means further back on the grid, the Library is behind the Shop.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Using the grid above, which landmark is directly next to the School in the same row — the House or the Library?', checkMode: 'auto', correctAnswer: 'House', correctAnswers: ['house', 'the house'], explanation: 'The School is at (4,1) and the House is at (1,1) — they share row 1. The Library is at (4,4), which is in a different row from the School. So the House is the landmark that shares the School\'s row.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'If you stand at the Library (4,4) and face the Shop (3,2), is the Shop to your left or to your right?', checkMode: 'auto', correctAnswer: 'Left', correctAnswers: ['left'], explanation: 'The Shop is at column 3, which is a smaller column number than the Library\'s column 4, so the Shop is to the left of the Library.' },
        { difficulty: 'Easy', question: 'Using the grid above, is the House South or North of the Park?', checkMode: 'auto', correctAnswer: 'South', correctAnswers: ['south'], explanation: 'The House is at (1,1) and the Park is at (1,4) — same column, but the House has a lower row number, meaning it is further down the grid. Down on the grid is South, so the House is South of the Park.' },
        { difficulty: 'Easy', question: 'What is the opposite compass direction of South?', checkMode: 'auto', correctAnswer: 'North', correctAnswers: ['north'], explanation: 'North and South are opposite compass directions, and East and West are opposite compass directions. The opposite of South is North.' },
        { difficulty: 'Easy', question: 'Zanele knows the School is East of the House on the grid above. If she walks East from the House, does the grid column number she moves toward get smaller or bigger?', checkMode: 'auto', correctAnswer: 'Bigger', correctAnswers: ['bigger', 'a bigger one'], explanation: 'East means moving right on the grid, which moves toward bigger column numbers. Walking East from the House (column 1) moves Zanele toward bigger column numbers, such as column 4 where the School is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the grid above, how many steps up is the Library from the Shop?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2 steps'], explanation: 'The Shop is at (3,2) and the Library is at (4,4). Looking only at the vertical distance: 4 − 2 = 2 steps up.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'The Park is at (1,4) and the House is at (1,1). Using the grid above, how many steps down separate these two landmarks?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 steps'], explanation: 'The Park and House share column 1, so we count vertical steps only. 4 − 1 = 3 steps (moving down from the Park to the House).', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Kagiso says the Shop and the School are 3 steps apart because "3 is the Shop\'s column number". Using the grid above, is Kagiso correct?', checkMode: 'self', answer: 'Kagiso is not correct. The Shop is at (3,2) and the School is at (4,1). The distance is found by comparing both grid positions: horizontal difference = 4 − 3 = 1, vertical difference = 2 − 1 = 1, so the total distance is 1 + 1 = 2 steps, not 3. Kagiso mistook the Shop\'s column number for the actual distance between the two landmarks — you must always compare the two positions, not read off a single coordinate.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the grid above, how many steps total (right plus up) would you travel moving from the House at (1,1) to the Shop at (3,2), moving only right and up?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 steps'], explanation: 'From (1,1) to (3,2): horizontal steps = 3 − 1 = 2, vertical steps = 2 − 1 = 1. Total steps = 2 + 1 = 3.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'A courier needs to travel from the Park at (1,4) to the Shop at (3,2) and then on to the School at (4,1). Using the grid above, what is the total number of steps for the whole trip?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 steps'], explanation: 'Park to Shop: horizontal = 3 − 1 = 2, vertical = 4 − 2 = 2, so 4 steps. Shop to School: horizontal = 4 − 3 = 1, vertical = 2 − 1 = 1, so 2 steps. Total: 4 + 2 = 6 steps.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the grid above, which pair of landmarks are exactly 6 steps apart in total: the House and the Library, or the Park and the School?', checkMode: 'auto', correctAnswer: 'Both pairs', correctAnswers: ['both', 'both pairs', 'both are 6 steps apart'], explanation: 'House (1,1) to Library (4,4): horizontal = 4 − 1 = 3, vertical = 4 − 1 = 3, total = 6 steps. Park (1,4) to School (4,1): horizontal = 4 − 1 = 3, vertical = 4 − 1 = 3, total = 6 steps. Both pairs are exactly 6 steps apart.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Starting at the Park (1,4) on the grid above, move 3 steps right and 3 steps down. Which landmark do you land on?', checkMode: 'auto', correctAnswer: 'School', correctAnswers: ['School', 'school'], explanation: '3 steps right from column 1: 1 + 3 = 4. 3 steps down from row 4: 4 − 3 = 1. This lands on (4,1), which is the School.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Amahle starts at the Library (4,4) and walks 1 step left and 2 steps down. Using the grid above, at which grid position does she end up?', checkMode: 'auto', correctAnswer: '(3,2)', correctAnswers: ['(3,2)', '3,2', '(3, 2)', '3, 2'], explanation: '1 step left from column 4: 4 − 1 = 3. 2 steps down from row 4: 4 − 2 = 2. Amahle ends at (3,2), which is the Shop.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Thabo starts at the House (1,1) and walks 3 steps North. Using the grid above, at which grid position does he end up?', checkMode: 'auto', correctAnswer: '(1,4)', correctAnswers: ['(1,4)', '1,4', '(1, 4)', '1, 4'], explanation: 'North means moving up, which increases the row number. 3 steps North from row 1: 1 + 3 = 4. The column stays at 1. Thabo ends at (1,4), which is the Park.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'A cyclist starts at the Park (1,4), rides 3 blocks South to the House, then 3 blocks East to the School. If she now rides 1 more block North, where does she end up on the grid above?', checkMode: 'auto', correctAnswer: '(4,2)', correctAnswers: ['(4,2)', '4,2', '(4, 2)', '4, 2'], explanation: 'Park (1,4) → South 3 blocks → House (1,1) → East 3 blocks → School (4,1). North 1 block from (4,1): row 1 + 1 = 2. Final position is (4,2).', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'Describe a route from the Shop (3,2) to the Library (4,4) on the grid above using only right and up steps.', checkMode: 'self', answer: 'Move 1 step right from (3,2) to (4,2), then 2 steps up from (4,2) to (4,4). This uses only right and up moves and covers 1 + 2 = 3 steps in total, which matches the horizontal and vertical distances between the Shop and the Library.' },
        { difficulty: 'Hard', question: 'Compare the route from the Park to the House with the route from the Park to the School, both using only right and down steps. Which route is shorter, and by how many steps, using the grid above?', checkMode: 'self', answer: 'Park to House (1,4) to (1,1) takes 0 steps right and 3 steps down, so 3 steps total. Park to School (1,4) to (4,1) takes 3 steps right and 3 steps down, so 6 steps total. The route to the House is shorter, by 6 − 3 = 3 steps.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered reading grid positions, compass directions, counting steps, following movement instructions and describing routes.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout as Set 1/2, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'Using the grid above, write the grid position of the Library as (column, row).', checkMode: 'auto', correctAnswer: '(4,4)', correctAnswers: ['(4,4)', '4,4', '(4, 4)', '4, 4'], explanation: 'The Library is marked at column 4, row 4 on the grid. We write the column first and the row second, so the position is (4,4).', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'What landmark sits at grid position (1,1) on the grid above?', checkMode: 'auto', correctAnswer: 'House', correctAnswers: ['House', 'house'], explanation: 'Column 1, row 1 is where the House is marked on the grid.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'The School is at (4,1) and the Shop is at (3,2). Using the grid above, is the Shop above or below the School?', checkMode: 'auto', correctAnswer: 'Above', correctAnswers: ['above'], explanation: 'The Shop has a higher row number (2) than the School (row 1), and row numbers increase as you go up the grid, so the Shop is above the School.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Using the grid above, which landmark is directly next to the Park in the same row — the House or the Library?', checkMode: 'auto', correctAnswer: 'Library', correctAnswers: ['library', 'the library'], explanation: 'The Park is at (1,4) and the Library is at (4,4) — they share row 4. The House is at (1,1), which is in a different row from the Park. So the Library is the landmark that shares the Park\'s row.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'If you stand at the School (4,1) and face the House (1,1), is the House to your left or to your right?', checkMode: 'auto', correctAnswer: 'Left', correctAnswers: ['left'], explanation: 'The House is at column 1, which is a smaller column number than the School\'s column 4, so the House is to the left of the School.' },
        { difficulty: 'Easy', question: 'Using the grid above, is the Shop East or West of the House?', checkMode: 'auto', correctAnswer: 'East', correctAnswers: ['east'], explanation: 'The House is at (1,1) and the Shop is at (3,2). The Shop has a bigger column number (3) than the House (column 1), meaning it is further right on the grid. Right on the grid is East, so the Shop is East of the House.' },
        { difficulty: 'Easy', question: 'What is the opposite compass direction of East?', checkMode: 'auto', correctAnswer: 'West', correctAnswers: ['west'], explanation: 'East and West are opposite compass directions, just like North and South are opposites. The opposite of East is West.' },
        { difficulty: 'Easy', question: 'Sipho knows the Park is North of the House on the grid above. If he walks North from the House, does the grid row number he moves toward get smaller or bigger?', checkMode: 'auto', correctAnswer: 'Bigger', correctAnswers: ['bigger', 'a bigger one'], explanation: 'North means moving up on the grid, which moves toward bigger row numbers. Walking North from the House (row 1) moves Sipho toward bigger row numbers, such as row 4 where the Park is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the grid above, how many steps right is the Shop from the House?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2 steps'], explanation: 'The House is at (1,1) and the Shop is at (3,2). Looking only at the horizontal distance: 3 − 1 = 2 steps right.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'The Library is at (4,4) and the Park is at (1,4). Using the grid above, how many steps left separate these two landmarks?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 steps'], explanation: 'The Library and Park share row 4, so we count horizontal steps only. 4 − 1 = 3 steps left (moving from Library to Park).', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Lerato says the House and the School are 1 step apart because "they are both in row 1". Using the grid above, is Lerato correct?', checkMode: 'self', answer: 'Lerato is not correct. Being in the same row only tells us there is no vertical distance between the House and School — it does not tell us the horizontal distance. The House is at (1,1) and the School is at (4,1), so the horizontal distance is 4 − 1 = 3 steps, and since the vertical distance is 0, the total distance is 3 steps, not 1. Lerato ignored the actual column numbers and only looked at the shared row.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the grid above, how many steps total (left plus down) would you travel moving from the Library at (4,4) to the House at (1,1), moving only left and down?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 steps'], explanation: 'From (4,4) to (1,1): horizontal steps = 4 − 1 = 3, vertical steps = 4 − 1 = 3. Total steps = 3 + 3 = 6.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'A dog walker needs to travel from the School at (4,1) to the Shop at (3,2) and then on to the Park at (1,4). Using the grid above, what is the total number of steps for the whole trip?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 steps'], explanation: 'School to Shop: horizontal = 4 − 3 = 1, vertical = 2 − 1 = 1, so 2 steps. Shop to Park: horizontal = 3 − 1 = 2, vertical = 4 − 2 = 2, so 4 steps. Total: 2 + 4 = 6 steps.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the grid above, which pair of landmarks are exactly 2 steps apart in total: the Shop and the School, or the House and the Park?', checkMode: 'auto', correctAnswer: 'The Shop and the School', correctAnswers: ['shop and school', 'the shop and the school'], explanation: 'Shop (3,2) to School (4,1): horizontal = 4 − 3 = 1, vertical = 2 − 1 = 1, total = 2 steps. House (1,1) to Park (1,4): horizontal = 0, vertical = 4 − 1 = 3, total = 3 steps. So the Shop and School are the pair that are 2 steps apart.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Starting at the School (4,1) on the grid above, move 3 steps left and 3 steps up. Which landmark do you land on?', checkMode: 'auto', correctAnswer: 'Park', correctAnswers: ['Park', 'park'], explanation: '3 steps left from column 4: 4 − 3 = 1. 3 steps up from row 1: 1 + 3 = 4. This lands on (1,4), which is the Park.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Kagiso starts at the House (1,1) and walks 2 steps right and 1 step up. Using the grid above, at which grid position does she end up?', checkMode: 'auto', correctAnswer: '(3,2)', correctAnswers: ['(3,2)', '3,2', '(3, 2)', '3, 2'], explanation: '2 steps right from column 1: 1 + 2 = 3. 1 step up from row 1: 1 + 1 = 2. Kagiso ends at (3,2), which is the Shop.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Zanele starts at the Library (4,4) and walks 3 steps South. Using the grid above, at which grid position does she end up?', checkMode: 'auto', correctAnswer: '(4,1)', correctAnswers: ['(4,1)', '4,1', '(4, 1)', '4, 1'], explanation: 'South means moving down, which decreases the row number. 3 steps South from row 4: 4 − 3 = 1. The column stays at 4. Zanele ends at (4,1), which is the School.', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'A postal worker starts at the School (4,1), walks 3 blocks West to the House, then 3 blocks North to the Park. If she now walks 1 more block East, where does she end up on the grid above?', checkMode: 'auto', correctAnswer: '(2,4)', correctAnswers: ['(2,4)', '2,4', '(2, 4)', '2, 4'], explanation: 'School (4,1) → West 3 blocks → House (1,1) → North 3 blocks → Park (1,4). East 1 block from (1,4): column 1 + 1 = 2. Final position is (2,4).', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'Describe a route from the Park (1,4) to the School (4,1) on the grid above using only right and down steps.', checkMode: 'self', answer: 'Move 3 steps right from (1,4) to (4,4), then 3 steps down from (4,4) to (4,1). This uses only right and down moves and covers 3 + 3 = 6 steps in total, which matches the horizontal and vertical distances between the Park and the School.' },
        { difficulty: 'Hard', question: 'A student claims that the route from the House to the Library and the route from the Park to the School (both using only right/left and up/down steps) must be the same length, "because both pairs of landmarks are diagonally opposite corners of the grid". Using the grid above, check this claim.', checkMode: 'self', answer: 'The student\'s claim happens to check out for this particular grid, though "diagonally opposite corners" is not by itself a guarantee of equal distance — it works here because of the specific layout. House (1,1) to Library (4,4): horizontal = 4 − 1 = 3, vertical = 4 − 1 = 3, total = 6 steps. Park (1,4) to School (4,1): horizontal = 4 − 1 = 3, vertical = 4 − 1 = 3, total = 6 steps. Both routes are 6 steps, so the claim is true here, since both pairs span the full 3-column and 3-row distance of the grid.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered reading grid positions, compass directions, counting steps, following movement instructions and describing routes.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
