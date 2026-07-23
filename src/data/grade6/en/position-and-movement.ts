import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (position and movement roles) ─────────────────────────────
// letter (column)    → blue   (#2563eb)
// number (row)        → red    (#dc2626)
// alpha-numeric ref    → orange (#ea580c)
// directions/route     → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

// ─── Shared reference grid diagram (town map with alpha-numeric grid, no answer leak) ──
// Columns A-D (left to right), rows 1-4 (top to bottom, row 1 at top like a real map/atlas grid)
// Landmarks: Clinic (B1), Market (D1), School (A3), Bank (C2), Park (D4)
const GRID_SVG = '<svg viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg"><text x="140" y="16" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Town Map</text><line x1="40" y1="30" x2="40" y2="190" stroke="#0f1f3d" stroke-width="2"/><line x1="90" y1="30" x2="90" y2="190" stroke="#9ca3af" stroke-width="1"/><line x1="140" y1="30" x2="140" y2="190" stroke="#9ca3af" stroke-width="1"/><line x1="190" y1="30" x2="190" y2="190" stroke="#9ca3af" stroke-width="1"/><line x1="240" y1="30" x2="240" y2="190" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="30" x2="240" y2="30" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="70" x2="240" y2="70" stroke="#9ca3af" stroke-width="1"/><line x1="40" y1="110" x2="240" y2="110" stroke="#9ca3af" stroke-width="1"/><line x1="40" y1="150" x2="240" y2="150" stroke="#9ca3af" stroke-width="1"/><line x1="40" y1="190" x2="240" y2="190" stroke="#0f1f3d" stroke-width="2"/><text x="65" y="26" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">A</text><text x="115" y="26" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">B</text><text x="165" y="26" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">C</text><text x="215" y="26" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">D</text><text x="30" y="54" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">1</text><text x="30" y="94" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">2</text><text x="30" y="134" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">3</text><text x="30" y="174" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">4</text><circle cx="115" cy="50" r="5" fill="#16a34a"/><text x="115" y="44" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">Clinic</text><circle cx="215" cy="50" r="5" fill="#16a34a"/><text x="215" y="44" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">Market</text><circle cx="65" cy="130" r="5" fill="#16a34a"/><text x="65" y="124" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">School</text><circle cx="165" cy="90" r="5" fill="#16a34a"/><text x="165" y="84" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">Bank</text><circle cx="215" cy="170" r="5" fill="#16a34a"/><text x="215" y="164" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">Park</text></svg>'

// ─── Abstract grid with one cell highlighted (shows how letter + number = reference) ──
const GRID_HIGHLIGHT_SVG = '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="20" x2="30" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="70" y1="20" x2="70" y2="140" stroke="#9ca3af" stroke-width="1"/><line x1="110" y1="20" x2="110" y2="140" stroke="#9ca3af" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="140" stroke="#9ca3af" stroke-width="1"/><line x1="190" y1="20" x2="190" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="20" x2="190" y2="20" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="50" x2="190" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="30" y1="80" x2="190" y2="80" stroke="#9ca3af" stroke-width="1"/><line x1="30" y1="110" x2="190" y2="110" stroke="#9ca3af" stroke-width="1"/><line x1="30" y1="140" x2="190" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><rect x="110" y="50" width="40" height="30" fill="#fed7aa" fill-opacity="0.6" stroke="#ea580c" stroke-width="2.5"/><text x="50" y="14" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">A</text><text x="90" y="14" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">B</text><text x="130" y="14" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">C</text><text x="170" y="14" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">D</text><text x="20" y="39" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">1</text><text x="20" y="69" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">2</text><text x="20" y="99" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">3</text><text x="20" y="129" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">4</text><text x="130" y="69" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">C2</text><text x="110" y="158" font-size="12" fill="#374151" text-anchor="middle">column C + row 2 = C2</text></svg>'

// ─── Route diagram: start/end landmarks with an unlabelled arrow between them ──
const ROUTE_SVG = '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="20" x2="30" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="70" y1="20" x2="70" y2="140" stroke="#9ca3af" stroke-width="1"/><line x1="110" y1="20" x2="110" y2="140" stroke="#9ca3af" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="140" stroke="#9ca3af" stroke-width="1"/><line x1="190" y1="20" x2="190" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="20" x2="190" y2="20" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="50" x2="190" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="30" y1="80" x2="190" y2="80" stroke="#9ca3af" stroke-width="1"/><line x1="30" y1="110" x2="190" y2="110" stroke="#9ca3af" stroke-width="1"/><line x1="30" y1="140" x2="190" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><text x="50" y="14" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">A</text><text x="90" y="14" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">B</text><text x="130" y="14" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">C</text><text x="170" y="14" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">D</text><text x="20" y="39" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">1</text><text x="20" y="69" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">2</text><text x="20" y="99" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">3</text><text x="20" y="129" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">4</text><polyline points="90,35 170,35 170,88" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="5,4"/><polygon points="163,88 177,88 170,100" fill="#16a34a"/><circle cx="90" cy="35" r="6" fill="#2563eb"/><text x="90" y="17" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">Start</text><circle cx="170" cy="95" r="6" fill="#dc2626"/><text x="184" y="99" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">End</text><text x="110" y="158" font-size="12" fill="#374151" text-anchor="middle">How many blocks across and down?</text></svg>'

export const topicData: TopicData = {
  title: 'Position and Movement',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — ALPHA-NUMERIC GRID REFERENCES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'alpha-numeric-grid-references',
      title: 'Alpha-Numeric Grid References',
      icon: '🔤',
      explanation:
        `<p style="margin-bottom:16px;">A grid is often labelled with ${bl('letters')} across the top for the columns and ${re('numbers')} down the side for the rows. Combining a letter and a number, like ${or('B4')} or ${or('D1')}, gives an ${or('alpha-numeric grid reference')}. This is exactly how map books, atlases and street directories label their grids so that any block on the map can be found quickly.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('column letter')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('row number')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('alpha-numeric reference')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Column letter</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${bl('letter')} labels the ${bl('column')} — always written and read <strong>first</strong>.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Row number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${re('number')} labels the ${re('row')} — always written and read <strong>second</strong>.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Combined reference</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A cell is named by joining the ${bl('letter')} and ${re('number')} with no space, e.g. ${or('B4')} means column ${bl('B')}, row ${re('4')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Letter first, then number — just like reading</p>` +
        `<p style="margin:0;color:#9a3412;">Read an alpha-numeric grid reference the same way you read a sentence: across first, then down. In ${or('C2')}, find ${bl('column C')} first by moving across the top, then move down to ${re('row 2')}. The cell where they meet is ${or('C2')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A stadium seating plan uses alpha-numeric grid references. Seat block E is the 5th column and row 3 is the 3rd row down. What is the grid reference of this seating block?',
          answer: `The grid reference is ${or('E3')}`,
          steps: [
            `The ${bl('column letter')} comes first — this block is in column ${bl('E')}.`,
            `The ${re('row number')} comes second — this block is in row ${re('3')}.`,
            `Combine them with no space: ${or('E3')}.`,
          ],
        },
        {
          question: 'On a map grid, the Museum is found at reference D2. Which column and which row is the Museum in?',
          answer: `The Museum is in ${bl('column D')} and ${re('row 2')}`,
          steps: [
            `In an alpha-numeric reference, the ${bl('letter')} always names the ${bl('column')} and the ${re('number')} always names the ${re('row')}.`,
            `${or('D2')} splits into ${bl('D')} (the column) and ${re('2')} (the row).`,
            `So the Museum is in ${bl('column D')}, ${re('row 2')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        'Grid with columns labelled A to D across the top and rows labelled 1 to 4 down the side, with one cell such as C2 highlighted to show how the letter and number combine into an alpha-numeric grid reference',

      diagramSvg: GRID_HIGHLIGHT_SVG,

      videoPlaceholder:
        'Short video showing how to read and write alpha-numeric grid references by combining a column letter and a row number',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — LOCATING POSITIONS ON A MAP
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'locating-positions-on-a-map',
      title: 'Locating Positions on a Map',
      icon: '🗺️',
      explanation:
        `<p style="margin-bottom:16px;">Maps and plans use the same alpha-numeric grid to help us find real places — streets, buildings and landmarks. To ${or('locate')} something on a map, we find where its ${bl('column')} and ${re('row')} lines cross. To find what is ${or('in')} a cell, we do the reverse — follow the ${bl('column')} letter down and the ${re('row')} number across until they meet.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('column')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('row')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('landmark')}</span>` +
        `</div>` +

        // ── Two question types ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Two kinds of questions</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">"What grid reference is X at?"</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Find the ${gr('landmark')} on the map, then read off its ${bl('column letter')} and ${re('row number')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">"What is at reference X?"</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Find the ${bl('column')}, find the ${re('row')}, then see which ${gr('landmark')} sits where they cross.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Check both parts of the reference</p>` +
        `<p style="margin:0;color:#1e3a8a;">A common mistake is only checking the ${bl('column')} or only the ${re('row')}. Two landmarks can share a column, or share a row — but only one landmark sits where a specific ${bl('column')} <strong>and</strong> ${re('row')} meet.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Using a town map, the Library is found where column C crosses row 3. What is the grid reference of the Library?',
          answer: `The Library's grid reference is ${or('C3')}`,
          steps: [
            `The Library sits where ${bl('column C')} and ${re('row 3')} cross.`,
            `Write the ${bl('column letter')} first, then the ${re('row number')}: ${or('C3')}.`,
          ],
        },
        {
          question: 'On a map, the Fire Station is at grid reference A2 and the Pharmacy is at grid reference A4. Do these two landmarks share a column, a row, both, or neither?',
          answer: `They share a ${bl('column')} only`,
          steps: [
            `Fire Station: ${bl('column A')}, ${re('row 2')}. Pharmacy: ${bl('column A')}, ${re('row 4')}.`,
            `Both have ${bl('column A')} — so they share a ${bl('column')}.`,
            `Their ${re('row numbers')} are different (${re('2')} and ${re('4')}) — so they do not share a ${re('row')}.`,
            `They share a ${bl('column')} only.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        'Town map with columns labelled A to D across the top and rows labelled 1 to 4 down the side, showing five landmarks (Clinic, Market, School, Bank and Park) each marked at their grid position, for looking up a landmark\'s grid reference or finding which landmark sits at a given reference',

      diagramSvg: GRID_SVG,

      videoPlaceholder:
        'Short video showing how to find the grid reference of a landmark on a map and how to find which landmark is at a given grid reference',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — GIVING DIRECTIONS BETWEEN POSITIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'giving-directions-between-positions',
      title: 'Giving Directions Between Positions',
      icon: '🧭',
      explanation:
        `<p style="margin-bottom:16px;">In earlier grades you learned to <em>follow</em> directions someone else gave you. Now you must be able to ${gr('give clear directions')} yourself — telling someone exactly how to move from one grid reference to another on a map. Good directions state the ${bl('starting point')}, the ${gr('movement')} (how many blocks, and which way), and the ${re('ending point')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('starting point')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('movement')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('ending point')}</span>` +
        `</div>` +

        // ── Movement rules ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How movement changes a grid reference</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Moving across (left/right)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Changes the ${bl('column letter')} — move along the alphabet (e.g. ${bl('B')} → ${bl('C')} → ${bl('D')}) while the ${re('row number')} stays the same.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Moving up/down</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Changes the ${re('row number')} — count blocks up or down while the ${bl('column letter')} stays the same.</p>` +
        `</div>` +

        `</div>` +

        // ── Giving good directions ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Giving clear directions</p>` +
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#374151;">Example: "Start at the ${bl('Clinic')}. Move ${gr('2 blocks right')} and then ${gr('3 blocks down')} to reach the ${re('Park')}." A good set of directions names the ${bl('start')}, states each ${gr('movement')} with a number of blocks and a direction, and names the ${re('destination')}.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Work out the movement before you describe it</p>` +
        `<p style="margin:0;color:#1e3a8a;">To give directions from one reference to another, first find how many letters apart the ${bl('columns')} are and how many numbers apart the ${re('rows')} are. Those two counts become the "blocks across" and "blocks up/down" in your directions.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Give directions to move from grid reference A1 to grid reference C1 on a map.',
          answer: `Move ${gr('2 blocks right')} — from ${bl('A1')} to ${re('C1')}`,
          steps: [
            `Compare the ${bl('columns')}: start is column A, end is column C. A → B → C is ${gr('2 steps across')}.`,
            `Compare the ${re('rows')}: both are row 1, so there is no up/down movement.`,
            `Directions: Start at ${bl('A1')}, move ${gr('2 blocks right')}, arrive at ${re('C1')}.`,
          ],
        },
        {
          question: 'Give directions to move from grid reference B2 to grid reference B4 on a map.',
          answer: `Move ${gr('2 blocks down')} — from ${bl('B2')} to ${re('B4')}`,
          steps: [
            `Compare the ${bl('columns')}: both are column B, so there is no left/right movement.`,
            `Compare the ${re('rows')}: start is row 2, end is row 4. 4 − 2 = ${gr('2 steps down')}.`,
            `Directions: Start at ${bl('B2')}, move ${gr('2 blocks down')}, arrive at ${re('B4')}.`,
          ],
        },
        {
          question: 'Give directions to move from grid reference A1 to grid reference D3 on a map.',
          answer: `Move ${gr('3 blocks right')} and ${gr('2 blocks down')} — from ${bl('A1')} to ${re('D3')}`,
          steps: [
            `Compare the ${bl('columns')}: A → B → C → D is ${gr('3 steps across')}.`,
            `Compare the ${re('rows')}: row 1 to row 3 is 3 − 1 = ${gr('2 steps down')}.`,
            `Directions: Start at ${bl('A1')}, move ${gr('3 blocks right')} and ${gr('2 blocks down')}, arrive at ${re('D3')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        'Map grid labelled A to D across the top and 1 to 4 down the side with two landmarks marked, one as a starting point and one as a destination, with an arrow drawn between them showing the route without labelling the number of blocks so learners must work it out',

      diagramSvg: ROUTE_SVG,

      videoPlaceholder:
        'Short video showing how to work out and give clear step-by-step directions to move between two alpha-numeric grid references on a map',
    },
  ],
  topicPractice: [
    // ── Q1 Easy — read a grid position ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Using the map above, what is the grid reference of the Bank?',
      answer: 'C2',
      checkMode: 'auto',
      correctAnswer: 'C2',
      correctAnswers: ['C2', 'c2'],
      explanation: 'The Bank is marked where column C crosses row 2, so its grid reference is C2.',
    },

    // ── Q2 Easy — identify a landmark by position ────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Using the map above, what landmark is found at grid reference A3?',
      answer: 'School',
      checkMode: 'auto',
      correctAnswer: 'School',
      explanation: 'Column A, row 3 is where the School is marked on the map.',
    },

    // ── Q3 Medium — shared column ────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Using the map above, the Clinic is at B1 and the Bank is at C2. Do they share a column or a row?',
      answer: 'Neither',
      checkMode: 'auto',
      correctAnswer: 'Neither',
      correctAnswers: ['neither', 'neither a column nor a row'],
      explanation: 'The Clinic is in column B, row 1. The Bank is in column C, row 2. The columns are different (B vs C) and the rows are different (1 vs 2), so they share neither.',
    },

    // ── Q4 Medium — count columns across ─────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Using the map above, how many blocks across is the Market (D1) from the Clinic (B1)?',
      answer: '2',
      checkMode: 'auto',
      correctAnswer: '2',
      explanation: 'The Clinic is in column B and the Market is in column D. B → C → D is 2 blocks across. Both are in row 1, so there is no up or down movement.',
    },

    // ── Q5 Medium — give directions between references ──────────────────────
    {
      difficulty: 'Medium',
      question: 'Using the map above, give directions to move from the Clinic (B1) to the Bank (C2).',
      answer: 'Move 1 block right and 1 block down, from B1 to C2.',
      checkMode: 'self',
    },

    // ── Q6 Hard — describe a multi-step route ────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the map above, give directions to move from the School (A3) to the Market (D1).',
      answer: 'Move 3 blocks right and 2 blocks up, from A3 to D1.',
      checkMode: 'self',
    },

    // ── Q7 Hard — compare two routes ─────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the map above, which route is longer in total blocks: Clinic (B1) to Park (D4), or School (A3) to Market (D1)?',
      answer: 'Clinic to Park is 5 blocks total (2 across + 3 down). School to Market is 5 blocks total (3 across + 2 up). The two routes are the same length.',
      checkMode: 'self',
    },

    // ── Q8 Hard — apply movement to find a reference ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the map above, Sipho starts at the Park (D4) and moves 2 blocks left and 3 blocks up. Which grid reference does he end up at?',
      answer: 'B1',
      checkMode: 'auto',
      correctAnswer: 'B1',
      correctAnswers: ['B1', 'b1'],
      explanation: 'Starting column D, moving 2 blocks left: D → C → B. Starting row 4, moving 3 blocks up: 4 − 3 = 1. Sipho ends at B1, which is the Clinic.',
    },

    // ── Q9 Hard — verify a claimed route ─────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the map above, Lerato claims that moving from A3 to C2 needs "2 blocks right and 1 block up". Is she correct?',
      answer: 'Yes. Column A to column C is 2 blocks right (A to B to C). Row 3 to row 2 is 1 block up (3 − 1 = 1). Her directions are correct.',
      checkMode: 'self',
    },
  ],

  scoreMessages: [
    { minScore: 5, message: 'Outstanding! A perfect score — you have completely mastered alpha-numeric grid references and giving directions. Keep it up!' },
    { minScore: 4, message: 'Excellent work! You have a very strong grasp of position and movement. Review any missed parts and you will have it perfect.' },
    { minScore: 3, message: 'Well done! You understand most of the content. Go back to the section where you dropped marks and give it another go.' },
    { minScore: 1, message: 'Good effort! Work back through the study guide and worked examples, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples, then try again." },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Reading alpha-numeric references | 4-6 Shared column/row
    // reasoning | 7-10 Counting blocks between references | 11-14 Giving
    // directions between two references | 15-17 Applying movement to find a
    // reference | 18-19 Multi-step reasoning & verifying claims
    // Shared map: Clinic (B1), Market (D1), School (A3), Bank (C2), Park (D4)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Using the map above, what is the grid reference of the Market?', checkMode: 'auto', correctAnswer: 'D1', correctAnswers: ['D1', 'd1'], explanation: 'The Market is marked where column D crosses row 1, so its grid reference is D1.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Using the map above, which landmark is found at grid reference D4?', checkMode: 'auto', correctAnswer: 'Park', correctAnswers: ['Park', 'park'], explanation: 'Column D, row 4 is where the Park is marked on the map.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Using the map above, what is the grid reference of the School?', checkMode: 'auto', correctAnswer: 'A3', correctAnswers: ['A3', 'a3'], explanation: 'The School is marked where column A crosses row 3, so its grid reference is A3.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'In an alpha-numeric grid reference like C2, which part is always written first — the letter or the number?', checkMode: 'auto', correctAnswer: 'The letter', correctAnswers: ['letter', 'the letter'], explanation: 'An alpha-numeric grid reference always names the column letter first and the row number second.' },
        { difficulty: 'Easy', question: 'Using the map above, the Clinic is at B1 and the Market is at D1. Do they share a column, a row, both, or neither?', checkMode: 'auto', correctAnswer: 'A row', correctAnswers: ['row', 'a row', 'they share a row'], explanation: 'The Clinic is in column B, row 1. The Market is in column D, row 1. The columns differ (B vs D) but the row is the same (1), so they share a row only.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Using the map above, the Bank is at C2 and the Park is at D4. Do they share a column, a row, both, or neither?', checkMode: 'auto', correctAnswer: 'Neither', correctAnswers: ['neither', 'neither a column nor a row'], explanation: 'The Bank is in column C, row 2. The Park is in column D, row 4. Both the columns (C vs D) and rows (2 vs 4) differ, so they share neither.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Using the map above, name one landmark that shares a column with the School.', checkMode: 'self', answer: 'The School is at A3, in column A. No other landmark on this map (Clinic B1, Market D1, Bank C2, Park D4) is in column A, so there is no landmark sharing a column with the School.' },
        { difficulty: 'Medium', question: 'Using the map above, how many blocks across is it from the Clinic (B1) to the Bank (C2), counting columns only?', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', '1 block'], explanation: 'The Clinic is in column B and the Bank is in column C. B → C is 1 block across.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, how many blocks down is it from the Market (D1) to the Park (D4), counting rows only?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 blocks'], explanation: 'The Market and Park share column D, so we count rows only. 4 − 1 = 3 blocks down.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, how many blocks across and how many blocks down separate the School (A3) and the Bank (C2)?', checkMode: 'self', answer: 'Columns A to C is 2 blocks across. Rows 3 to 2 is 1 block up (or down, depending on direction of travel). So the School and Bank are 2 blocks across and 1 block up/down apart.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Kagiso says the Clinic (B1) and the Park (D4) are 4 blocks apart in total because "the Park is in row 4". Using the map above, is Kagiso correct?', checkMode: 'self', answer: 'Kagiso is not correct. The Clinic is at B1 and the Park is at D4. The columns differ by B to D, which is 2 blocks across, and the rows differ by 1 to 4, which is 3 blocks down. Total blocks = 2 + 3 = 5, not 4. Kagiso mistook the Park\'s row number for the total distance instead of comparing both coordinates.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, give directions to move from the Clinic (B1) to the Market (D1).', checkMode: 'self', answer: 'Move 2 blocks right, from B1 to D1. There is no up or down movement because both are in row 1.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, give directions to move from the Market (D1) to the Park (D4).', checkMode: 'self', answer: 'Move 3 blocks down, from D1 to D4. There is no left or right movement because both are in column D.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, give directions to move from the Clinic (B1) to the Bank (C2).', checkMode: 'self', answer: 'Move 1 block right and 1 block down, from B1 to C2.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, give directions to move from the School (A3) to the Market (D1).', checkMode: 'self', answer: 'Move 3 blocks right and 2 blocks up, from A3 to D1.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, Amahle starts at the Clinic (B1) and moves 2 blocks right and 1 block down. Which grid reference does she end up at?', checkMode: 'auto', correctAnswer: 'D2', correctAnswers: ['D2', 'd2'], explanation: 'Starting column B, moving 2 blocks right: B → C → D. Starting row 1, moving 1 block down: 1 + 1 = 2. Amahle ends at D2.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, Thabo starts at the Park (D4) and moves 1 block left and 2 blocks up. Which grid reference does he end up at?', checkMode: 'auto', correctAnswer: 'C2', correctAnswers: ['C2', 'c2'], explanation: 'Starting column D, moving 1 block left: D → C. Starting row 4, moving 2 blocks up: 4 − 2 = 2. Thabo ends at C2, which is the Bank.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, Lerato starts at the School (A3) and moves 3 blocks right and 1 block up. Which grid reference does she end up at?', checkMode: 'auto', correctAnswer: 'D2', correctAnswers: ['D2', 'd2'], explanation: 'Starting column A, moving 3 blocks right: A → B → C → D. Starting row 3, moving 1 block up: 3 − 1 = 2. Lerato ends at D2, which is the Bank.', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'Using the map above, a delivery driver travels from the Clinic (B1) to the School (A3), then on to the Bank (C2). What is the total number of blocks travelled for the whole trip?', checkMode: 'self', answer: 'Clinic to School: column B to A is 1 block across, row 1 to 3 is 2 blocks down, total 3 blocks. School to Bank: column A to C is 2 blocks across, row 3 to 2 is 1 block up, total 3 blocks. Grand total: 3 + 3 = 6 blocks.', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'Using the map above, a student claims the route from the Clinic (B1) to the Park (D4) and the route from the School (A3) to the Market (D1) both cover exactly 5 blocks. Check this claim.', checkMode: 'self', answer: 'Clinic (B1) to Park (D4): columns B to D is 2 blocks across, rows 1 to 4 is 3 blocks down, total 2 + 3 = 5 blocks. School (A3) to Market (D1): columns A to D is 3 blocks across, rows 3 to 1 is 2 blocks up, total 3 + 2 = 5 blocks. The claim is correct — both routes cover exactly 5 blocks.', diagramSvg: GRID_SVG },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered reading alpha-numeric grid references, locating landmarks and giving clear directions between positions.' },
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
        { difficulty: 'Easy', question: 'Using the map above, what is the grid reference of the Clinic?', checkMode: 'auto', correctAnswer: 'B1', correctAnswers: ['B1', 'b1'], explanation: 'The Clinic is marked where column B crosses row 1, so its grid reference is B1.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Using the map above, which landmark is found at grid reference C2?', checkMode: 'auto', correctAnswer: 'Bank', correctAnswers: ['Bank', 'bank'], explanation: 'Column C, row 2 is where the Bank is marked on the map.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Using the map above, what is the grid reference of the Park?', checkMode: 'auto', correctAnswer: 'D4', correctAnswers: ['D4', 'd4'], explanation: 'The Park is marked where column D crosses row 4, so its grid reference is D4.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'In an alpha-numeric grid reference like C2, which part is always written second — the letter or the number?', checkMode: 'auto', correctAnswer: 'The number', correctAnswers: ['number', 'the number'], explanation: 'An alpha-numeric grid reference always names the column letter first and the row number second.' },
        { difficulty: 'Easy', question: 'Using the map above, the School is at A3 and the Bank is at C2. Do they share a column, a row, both, or neither?', checkMode: 'auto', correctAnswer: 'Neither', correctAnswers: ['neither', 'neither a column nor a row'], explanation: 'The School is in column A, row 3. The Bank is in column C, row 2. Both the columns (A vs C) and rows (3 vs 2) differ, so they share neither.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Using the map above, the Market is at D1 and the Park is at D4. Do they share a column, a row, both, or neither?', checkMode: 'auto', correctAnswer: 'A column', correctAnswers: ['column', 'a column', 'they share a column'], explanation: 'The Market is in column D, row 1. The Park is in column D, row 4. The rows differ (1 vs 4) but the column is the same (D), so they share a column only.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Using the map above, name one landmark that shares a row with the Clinic.', checkMode: 'self', answer: 'The Clinic is at B1, in row 1. The Market is at D1, also in row 1, so the Market shares a row with the Clinic.' },
        { difficulty: 'Medium', question: 'Using the map above, how many blocks across is it from the School (A3) to the Bank (C2), counting columns only?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2 blocks'], explanation: 'The School is in column A and the Bank is in column C. A → B → C is 2 blocks across.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, how many blocks down is it from the Clinic (B1) to nowhere in particular — wait, use the Bank (C2) and Park (D4), counting rows only?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2 blocks'], explanation: 'The Bank is in row 2 and the Park is in row 4. 4 − 2 = 2 blocks down.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, how many blocks across and how many blocks down separate the Clinic (B1) and the Park (D4)?', checkMode: 'self', answer: 'Columns B to D is 2 blocks across. Rows 1 to 4 is 3 blocks down. So the Clinic and Park are 2 blocks across and 3 blocks down apart.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Zanele says the School (A3) and the Market (D1) are 3 blocks apart in total because "the School\'s row number is 3". Using the map above, is Zanele correct?', checkMode: 'self', answer: 'Zanele is not correct. The School is at A3 and the Market is at D1. Columns A to D is 3 blocks across, and rows 3 to 1 is 2 blocks up. Total blocks = 3 + 2 = 5, not 3. Zanele mistook the School\'s row number for the total distance instead of comparing both coordinates of the two positions.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, give directions to move from the Bank (C2) to the Clinic (B1).', checkMode: 'self', answer: 'Move 1 block left and 1 block up, from C2 to B1.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, give directions to move from the Park (D4) to the Market (D1).', checkMode: 'self', answer: 'Move 3 blocks up, from D4 to D1. There is no left or right movement because both are in column D.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, give directions to move from the School (A3) to the Bank (C2).', checkMode: 'self', answer: 'Move 2 blocks right and 1 block up, from A3 to C2.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, give directions to move from the Clinic (B1) to the Park (D4).', checkMode: 'self', answer: 'Move 2 blocks right and 3 blocks down, from B1 to D4.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, Sipho starts at the School (A3) and moves 2 blocks right and 2 blocks up. Which grid reference does he end up at?', checkMode: 'auto', correctAnswer: 'C1', correctAnswers: ['C1', 'c1'], explanation: 'Starting column A, moving 2 blocks right: A → B → C. Starting row 3, moving 2 blocks up: 3 − 2 = 1. Sipho ends at C1.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, Amahle starts at the Park (D4) and moves 3 blocks left and 3 blocks up. Which grid reference does she end up at?', checkMode: 'auto', correctAnswer: 'A1', correctAnswers: ['A1', 'a1'], explanation: 'Starting column D, moving 3 blocks left: D → C → B → A. Starting row 4, moving 3 blocks up: 4 − 3 = 1. Amahle ends at A1.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, Thabo starts at the Market (D1) and moves 2 blocks left and 1 block down. Which grid reference does he end up at?', checkMode: 'auto', correctAnswer: 'B2', correctAnswers: ['B2', 'b2'], explanation: 'Starting column D, moving 2 blocks left: D → C → B. Starting row 1, moving 1 block down: 1 + 1 = 2. Thabo ends at B2, which is the Clinic.', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'Using the map above, a tourist walks from the Market (D1) to the Bank (C2), then on to the School (A3). What is the total number of blocks walked for the whole trip?', checkMode: 'self', answer: 'Market to Bank: column D to C is 1 block across, row 1 to 2 is 1 block down, total 2 blocks. Bank to School: column C to A is 2 blocks across, row 2 to 3 is 1 block down, total 3 blocks. Grand total: 2 + 3 = 5 blocks.', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'Using the map above, a student claims that the route from the Clinic (B1) to the School (A3) is shorter than the route from the Bank (C2) to the Park (D4). Check this claim.', checkMode: 'self', answer: 'Clinic (B1) to School (A3): column B to A is 1 block across, row 1 to 3 is 2 blocks down, total 1 + 2 = 3 blocks. Bank (C2) to Park (D4): column C to D is 1 block across, row 2 to 4 is 2 blocks down, total 1 + 2 = 3 blocks. Both routes are exactly 3 blocks — the claim that one is shorter is false; they are equal in length.', diagramSvg: GRID_SVG },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered reading alpha-numeric grid references, locating landmarks and giving clear directions between positions.' },
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
        { difficulty: 'Easy', question: 'Using the map above, which landmark is found at grid reference A3?', checkMode: 'auto', correctAnswer: 'School', correctAnswers: ['School', 'school'], explanation: 'Column A, row 3 is where the School is marked on the map.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Using the map above, which landmark is found at grid reference B1?', checkMode: 'auto', correctAnswer: 'Clinic', correctAnswers: ['Clinic', 'clinic'], explanation: 'Column B, row 1 is where the Clinic is marked on the map.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Using the map above, what is the grid reference of the Bank?', checkMode: 'auto', correctAnswer: 'C2', correctAnswers: ['C2', 'c2'], explanation: 'The Bank is marked where column C crosses row 2, so its grid reference is C2.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'In the alpha-numeric grid reference A3, which letter names the column and which number names the row?', checkMode: 'auto', correctAnswer: 'A is the column and 3 is the row', correctAnswers: ['a is the column and 3 is the row', 'column a, row 3', 'a, 3'], explanation: 'In any alpha-numeric grid reference, the letter names the column and the number names the row. In A3, A is the column and 3 is the row.' },
        { difficulty: 'Easy', question: 'Using the map above, the Clinic is at B1 and the School is at A3. Do they share a column, a row, both, or neither?', checkMode: 'auto', correctAnswer: 'Neither', correctAnswers: ['neither', 'neither a column nor a row'], explanation: 'The Clinic is in column B, row 1. The School is in column A, row 3. Both the columns (B vs A) and rows (1 vs 3) differ, so they share neither.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Using the map above, the Bank is at C2 and the Market is at D1. Do they share a column, a row, both, or neither?', checkMode: 'auto', correctAnswer: 'Neither', correctAnswers: ['neither', 'neither a column nor a row'], explanation: 'The Bank is in column C, row 2. The Market is in column D, row 1. Both the columns (C vs D) and rows (2 vs 1) differ, so they share neither.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Using the map above, name one landmark that shares a column with the Market.', checkMode: 'self', answer: 'The Market is at D1, in column D. The Park is at D4, also in column D, so the Park shares a column with the Market.' },
        { difficulty: 'Medium', question: 'Using the map above, how many blocks across is it from the Bank (C2) to the Park (D4), counting columns only?', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', '1 block'], explanation: 'The Bank is in column C and the Park is in column D. C → D is 1 block across.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, how many blocks down separate row 1 and row 3?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2 blocks'], explanation: 'Row 1 to row 3 is a difference of 3 − 1 = 2 blocks down.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, how many blocks across and how many blocks down separate the Market (D1) and the School (A3)?', checkMode: 'self', answer: 'Columns D to A is 3 blocks across. Rows 1 to 3 is 2 blocks down. So the Market and School are 3 blocks across and 2 blocks down apart.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Refilwe says the Clinic (B1) and Bank (C2) are 3 blocks apart because "you just add the two row numbers together: 1 + 2 = 3". Using the map above, is Refilwe correct?', checkMode: 'self', answer: 'No, Refilwe is not correct. Adding the two row numbers together is not a valid method for finding distance. The Clinic is at B1 and the Bank is at C2. Columns B to C is 1 block across, and rows 1 to 2 is 1 block down. Total blocks = 1 + 1 = 2. The correct method compares each coordinate to the corresponding coordinate of the other point and adds those two differences — not the row numbers themselves.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, give directions to move from the Bank (C2) to the School (A3).', checkMode: 'self', answer: 'Move 2 blocks left and 1 block down, from C2 to A3.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, give directions to move from the Park (D4) to the Bank (C2).', checkMode: 'self', answer: 'Move 1 block left and 2 blocks up, from D4 to C2.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, give directions to move from the Market (D1) to the School (A3).', checkMode: 'self', answer: 'Move 3 blocks left and 2 blocks down, from D1 to A3.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, give directions to move from the School (A3) to the Park (D4).', checkMode: 'self', answer: 'Move 3 blocks right and 1 block down, from A3 to D4.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, Lerato starts at the Bank (C2) and moves 2 blocks right and 2 blocks down. Explain what happens.', checkMode: 'self', answer: 'This move is not possible on this map. Starting column C, moving 2 blocks right would go C → D → beyond D, but D is the last column on the map. Lerato would move off the edge of the map, so there is no valid grid reference for this move.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, Amahle starts at the Market (D1) and moves 1 block left and 3 blocks down. Which grid reference does she end up at?', checkMode: 'auto', correctAnswer: 'C4', correctAnswers: ['C4', 'c4'], explanation: 'Starting column D, moving 1 block left: D → C. Starting row 1, moving 3 blocks down: 1 + 3 = 4. Amahle ends at C4.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Using the map above, Sipho starts at the School (A3) and moves 1 block right and 2 blocks up. Which grid reference does he end up at?', checkMode: 'auto', correctAnswer: 'B1', correctAnswers: ['B1', 'b1'], explanation: 'Starting column A, moving 1 block right: A → B. Starting row 3, moving 2 blocks up: 3 − 2 = 1. Sipho ends at B1, which is the Clinic.', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'Using the map above, a cyclist rides from the Park (D4) to the Market (D1), then on to the Clinic (B1). What is the total number of blocks ridden for the whole trip?', checkMode: 'self', answer: 'Park to Market: column D to D is 0 blocks across, row 4 to 1 is 3 blocks up, total 3 blocks. Market to Clinic: column D to B is 2 blocks across, row 1 to 1 is 0 blocks, total 2 blocks. Grand total: 3 + 2 = 5 blocks.', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'Using the map above, a student claims that the route from the Market (D1) to the School (A3) and the route from the Park (D4) to the Clinic (B1) both cover exactly 5 blocks. Check this claim.', checkMode: 'self', answer: 'Market (D1) to School (A3): columns D to A is 3 blocks across, rows 1 to 3 is 2 blocks down, total 3 + 2 = 5 blocks. Park (D4) to Clinic (B1): columns D to B is 2 blocks across, rows 4 to 1 is 3 blocks up, total 2 + 3 = 5 blocks. The claim is correct — both routes cover exactly 5 blocks.', diagramSvg: GRID_SVG },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered reading alpha-numeric grid references, locating landmarks and giving clear directions between positions.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
