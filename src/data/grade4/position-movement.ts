import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Position and Movement',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — DESCRIBING POSITION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'describing-position',
      title: 'Describing Position',
      icon: '📍',
      explanation: `
<p style="margin-bottom:14px;"><strong>Position</strong> describes <strong>where something is</strong> in relation to other objects around it. Instead of saying "the book is there," we use position words to be more precise — so that another person can find exactly what we are describing.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Real-life examples 🌍</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li>The book is <strong>on top of</strong> the desk</li>
    <li>The cat is <strong>behind</strong> the chair</li>
    <li>The shop is <strong>next to</strong> the school</li>
  </ul>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Position words</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="display:flex;gap:6px;flex-shrink:0;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Above</span>
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Below</span>
      </span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Used to describe something that is <strong style="color:#dc2626;">higher up or lower down</strong> than another object. The lamp is <em>above</em> the table. The carpet is <em>below</em> the chair.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="display:flex;gap:6px;flex-shrink:0;">
        <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Left</span>
        <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Right</span>
      </span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Used to describe something that is to the <strong style="color:#1e40af;">left-hand side or right-hand side</strong> of a reference point. The window is to the <em>left</em>. The door is to the <em>right</em>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="display:flex;gap:6px;flex-shrink:0;">
        <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">In front of</span>
        <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Behind</span>
      </span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">Used to describe something that is <strong style="color:#16a34a;">facing you or on the other side</strong>. The teacher stands <em>in front of</em> the class. The board is <em>behind</em> the teacher.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="display:flex;gap:6px;flex-shrink:0;">
        <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Next to</span>
        <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Between</span>
      </span>
      <span style="color:#7c2d12;font-size:15px;padding-top:1px;"><em>Next to</em> means <strong style="color:#ea580c;">directly beside</strong> something. <em>Between</em> means <strong style="color:#ea580c;">in the middle of two things</strong>. The pencil is <em>next to</em> the ruler. The eraser is <em>between</em> the pencil and the pen.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="display:flex;gap:6px;flex-shrink:0;">
        <span style="background:#7c3aed;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Near</span>
        <span style="background:#7c3aed;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Far</span>
      </span>
      <span style="color:#3b0764;font-size:15px;padding-top:1px;">Used to describe <strong style="color:#7c3aed;">distance</strong> from a reference point. The shop is <em>near</em> the school. The hospital is <em>far</em> from the school.</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Look at a classroom. Describe where the teacher\'s desk is using position words.',
          steps: [
            'The teacher\'s desk is <strong style="color:#16a34a;">in front of</strong> the class — learners face towards it.',
            'The board is <strong style="color:#16a34a;">behind</strong> the teacher — the teacher stands between the class and the board.',
            'The windows are to the <strong style="color:#1e40af;">left</strong> of the teacher when facing the class.',
            'The door is to the <strong style="color:#1e40af;">right</strong> of the teacher when facing the class.',
          ],
          answer:
            'The teacher\'s desk is in front of the class. The board is behind the teacher. The windows are to the left and the door is to the right.',
        },
        {
          question:
            'A cat is sitting between two dogs. A bird is above the cat. A fish tank is below the bird and to the right of the cat. Describe the position of each animal.',
          steps: [
            '<strong>Cat:</strong> <strong style="color:#ea580c;">between</strong> the two dogs — it has one dog on each side.',
            '<strong>Bird:</strong> <strong style="color:#dc2626;">above</strong> the cat — it is higher up than the cat.',
            '<strong>Fish tank:</strong> <strong style="color:#dc2626;">below</strong> the bird AND <strong style="color:#1e40af;">to the right of</strong> the cat — two position words are used together to be more precise.',
          ],
          answer:
            'Cat: between the two dogs.\nBird: above the cat.\nFish tank: below the bird and to the right of the cat.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Simple classroom layout viewed from above showing a desk in front, board behind, windows left, door right with position word labels',
      videoPlaceholder:
        'Short video showing position words above, below, left, right, in front of, behind, next to and between using everyday objects',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — USING A GRID TO LOCATE OBJECTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'using-a-grid-to-locate-objects',
      title: 'Using a Grid to Locate Objects',
      icon: '🗺️',
      explanation: `
<p style="margin-bottom:14px;">A <strong>grid</strong> is a set of lines that cross each other to form squares. We use grids to describe positions <strong>precisely</strong> — instead of saying "the tree is somewhere near the top," we can say exactly where it is using a <strong>grid reference</strong>.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How a grid works</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Columns</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Columns run <strong style="color:#1e40af;">from left to right</strong> across the grid. They are usually labelled with <strong style="color:#1e40af;">letters — A, B, C, D …</strong> starting from the left.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Rows</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Rows run <strong style="color:#dc2626;">from bottom to top</strong> up the grid. They are usually labelled with <strong style="color:#dc2626;">numbers — 1, 2, 3, 4 …</strong> starting from the bottom.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Grid reference</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">A grid reference gives the <strong style="color:#1e40af;">column letter first</strong>, then the <strong style="color:#dc2626;">row number</strong>. Always go <strong>across first, then up</strong> — just like walking into a building and then taking the lift.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Memory trick 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;"><strong>Along the corridor, then up the stairs.</strong> Always read the <strong style="color:#1e40af;">column (letter)</strong> first — that is walking along the corridor. Then read the <strong style="color:#dc2626;">row (number)</strong> — that is going up the stairs. So <strong style="color:#16a34a;">B3</strong> means <strong style="color:#1e40af;">column B</strong> then <strong style="color:#dc2626;">row 3</strong>.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Reading a grid reference</div>
  <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
    <span style="background:#16a34a;color:#fff;border-radius:8px;padding:4px 14px;font-weight:700;font-size:20px;letter-spacing:.05em;">A1</span>
    <span style="font-size:15px;color:#1e3a8a;">= <strong style="color:#1e40af;">Column A</strong> (first column from the left) + <strong style="color:#dc2626;">Row 1</strong> (first row from the bottom)</span>
  </div>
  <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:10px;">
    <span style="background:#16a34a;color:#fff;border-radius:8px;padding:4px 14px;font-weight:700;font-size:20px;letter-spacing:.05em;">C4</span>
    <span style="font-size:15px;color:#1e3a8a;">= <strong style="color:#1e40af;">Column C</strong> (third column from the left) + <strong style="color:#dc2626;">Row 4</strong> (fourth row from the bottom)</span>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'On a grid, a tree is at B3. Where is B3?',
          steps: [
            '<strong style="color:#1e40af;">Find column B</strong> — start at the left and count across: A is first, <strong>B is second</strong>.',
            '<strong style="color:#dc2626;">Find row 3</strong> — start at the bottom and count up: 1 is first, 2 is second, <strong>3 is third</strong>.',
            '<strong style="color:#16a34a;">B3 is where column B and row 3 meet</strong> — go across to column B, then up to row 3.',
          ],
          answer: 'B3 is in the second column and the third row from the bottom.',
        },
        {
          question:
            'A grid shows a school at C2, a shop at A4 and a park at D1.\na) Which object is furthest to the right?\nb) Which object is highest up on the grid?\nc) What is at B3 if nothing is listed there?',
          steps: [
            '<strong style="color:#1e40af;">Columns go left to right</strong> — A is leftmost, then B, C, D is rightmost. The park is at <strong>D1</strong>, so it is furthest to the right.',
            '<strong style="color:#dc2626;">Rows go bottom to top</strong> — row 1 is lowest, row 4 is highest. The shop is at <strong>A4</strong> (row 4), so it is highest up.',
            '<strong style="color:#16a34a;">B3</strong> is not listed in the question, so <strong>nothing is placed there</strong> — it is an empty square on the grid.',
          ],
          answer:
            'a) D1 — the park is furthest to the right (column D is the rightmost column).\nb) A4 — the shop is highest up (row 4 is the highest row).\nc) B3 is empty — no object is placed there.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'A 4×4 grid labelled A to D across the bottom and 1 to 4 up the left side, with a school icon at C2, a shop icon at A4 and a park icon at D1',
      videoPlaceholder:
        'Short video showing how to use column and row labels to find and describe positions on a grid',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — GIVING AND FOLLOWING DIRECTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'giving-and-following-directions',
      title: 'Giving and Following Directions',
      icon: '🧭',
      explanation: `
<p style="margin-bottom:14px;"><strong>Directions</strong> tell us how to get from one place to another. Good directions are clear, use position words and tell us exactly where to turn and how far to go. Anyone reading the directions should be able to follow them and arrive at the right place.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Direction words</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Go straight ahead</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Keep moving in the <strong style="color:#1e40af;">same direction</strong> you are already facing — do not turn.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Turn left</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Make a <strong style="color:#dc2626;">quarter turn to the left</strong> (anticlockwise) and then continue moving.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Turn right</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Make a <strong style="color:#dc2626;">quarter turn to the right</strong> (clockwise) and then continue moving.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Turn around</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Make a <strong style="color:#dc2626;">half turn (180°)</strong> so that you are now facing the opposite direction.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Move forward … steps</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">Walk a <strong style="color:#16a34a;">specific number of steps or blocks</strong> in the direction you are facing before doing anything else.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Tips for giving good directions 💡</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li>Always say <strong>where to start</strong> and which way you are facing.</li>
    <li>Say <strong>how far</strong> to go before each turn.</li>
    <li>Use <strong>landmarks</strong> like "past the shop" or "until you reach the gate."</li>
    <li>Describe the <strong>destination</strong> clearly so the person knows when they have arrived.</li>
  </ul>
</div>
`,
      workedExamples: [
        {
          question: 'Give directions from the school to the park on a simple map.',
          steps: [
            '<strong style="color:#1e40af;">Start at the school</strong> facing north.',
            '<strong style="color:#16a34a;">Go straight ahead 2 blocks</strong> — keep walking north without turning.',
            '<strong style="color:#dc2626;">Turn right</strong> — make a quarter turn clockwise; you are now facing east.',
            '<strong style="color:#16a34a;">Go straight ahead 1 block</strong> — walk east one block.',
            'The <strong>park is on your left</strong> — it is to the north side as you walk east.',
          ],
          answer:
            'From school, go straight ahead 2 blocks, turn right, go 1 block, and the park is on your left.',
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — TURNS AND MOVEMENT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'turns-and-movement',
      title: 'Turns and Movement',
      icon: '🔄',
      explanation: `
<p style="margin-bottom:14px;">When we describe movement, we often need to say how much someone or something has <strong>turned</strong>. Turns are measured in <strong>degrees</strong> and described using words like <em>full turn</em>, <em>half turn</em> and <em>quarter turn</em>.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Types of turns</div>
  <div style="display:flex;flex-direction:column;gap:14px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:100px;text-align:center;">Full turn</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Turn all the way around <strong style="color:#dc2626;">360°</strong> and end up facing the <strong>same direction</strong> you started. Like spinning in a complete circle.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:100px;text-align:center;">Half turn</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Turn halfway around <strong style="color:#1e40af;">180°</strong> and end up facing the <strong>opposite direction</strong>. If you start facing north you end up facing south.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:100px;text-align:center;">Quarter turn</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">Turn a quarter of the way around <strong style="color:#16a34a;">90°</strong> either clockwise or anticlockwise. If you start facing north and turn clockwise you end up facing east.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Clockwise and anticlockwise</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Clockwise</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Turning in the <strong style="color:#1e40af;">same direction as clock hands</strong> — from 12 to 3 to 6 to 9 and back to 12. North → East → South → West → North.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Anticlockwise</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Turning in the <strong style="color:#1e40af;">opposite direction to clock hands</strong> — from 12 to 9 to 6 to 3 and back to 12. North → West → South → East → North.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Compass directions after a quarter turn 🧭</span>
  <div style="overflow-x:auto;margin-top:10px;">
    <table style="border-collapse:collapse;font-size:14px;width:100%;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Starting direction</th>
          <th style="padding:8px 14px;text-align:center;color:#1e40af;font-weight:700;">Quarter turn clockwise →</th>
          <th style="padding:8px 14px;text-align:center;color:#1e40af;font-weight:700;">Quarter turn anticlockwise ←</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:600;color:#0f1f3d;">North</td>
          <td style="padding:8px 14px;text-align:center;color:#16a34a;font-weight:700;">East</td>
          <td style="padding:8px 14px;text-align:center;color:#dc2626;font-weight:700;">West</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:600;color:#0f1f3d;">East</td>
          <td style="padding:8px 14px;text-align:center;color:#16a34a;font-weight:700;">South</td>
          <td style="padding:8px 14px;text-align:center;color:#dc2626;font-weight:700;">North</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:600;color:#0f1f3d;">South</td>
          <td style="padding:8px 14px;text-align:center;color:#16a34a;font-weight:700;">West</td>
          <td style="padding:8px 14px;text-align:center;color:#dc2626;font-weight:700;">East</td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:600;color:#0f1f3d;">West</td>
          <td style="padding:8px 14px;text-align:center;color:#16a34a;font-weight:700;">North</td>
          <td style="padding:8px 14px;text-align:center;color:#dc2626;font-weight:700;">South</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'Thabo is facing north. He makes a quarter turn clockwise. Which direction is he now facing?',
          steps: [
            '<strong style="color:#1e40af;">Start facing north.</strong>',
            '<strong style="color:#16a34a;">Quarter turn clockwise</strong> = turn 90° in the direction of clock hands — that is turning to the right.',
            'North → clockwise 90° → <strong>East</strong>.',
          ],
          answer: 'Thabo is now facing east.',
        },
        {
          question:
            'Lerato is facing south. She makes a half turn. Which direction is she now facing?',
          steps: [
            '<strong style="color:#1e40af;">Start facing south.</strong>',
            '<strong style="color:#1e40af;">Half turn</strong> = turn 180° — this always brings you to face the <strong>opposite direction</strong>.',
            'The opposite of south is <strong>north</strong>.',
          ],
          answer: 'Lerato is now facing north.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'A compass showing north, south, east and west with arrows showing a quarter turn clockwise from north to east and a half turn from south to north',
      videoPlaceholder:
        'Short video showing full, half and quarter turns clockwise and anticlockwise using a compass or clock face',
    },
  ],
  topicPractice: [

    // ── SECTION 1 — Describing Position ──────────────────────────────────────

    {
      difficulty: 'Easy',
      question:
        'A ball is ___ the table. A cat is ___ the ball. A book is ___ the cat and the ball.',
      checkMode: 'auto',
      answer: 'a) on top of   b) above   c) between',
      parts: [
        {
          label: 'a) The ball is resting on the table surface — which position word fits?',
          correctAnswer: 'on top of',
          correctAnswers: ['on top of', 'ontopof', 'on top', 'ontop'],
          explanation: '"On top of" means directly resting on the surface of something — the ball is on top of the table.',
        },
        {
          label: 'b) The cat is sitting on top of the ball — where is the cat relative to the ball?',
          correctAnswer: 'above',
          correctAnswers: ['above', 'on top of', 'ontopof', 'on top'],
          explanation: '"Above" means at a higher position — the cat sitting on the ball is above it.',
        },
        {
          label: 'c) What position word describes something in the middle of two objects?',
          correctAnswer: 'between',
          correctAnswers: ['between', 'in between', 'inbetween'],
          explanation: '"Between" means in the middle of two things — the book is between the cat and the ball.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question:
        'Describe the position of each object using at least two position words.\na) A bird sitting on a branch with leaves above it and the ground below.\nb) A sandwich between two plates with a glass to its right.',
      checkMode: 'self',
      answer:
        'a) The bird is on the branch, below the leaves and above the ground.\nb) The sandwich is between the two plates with the glass to its right.',
    },

    {
      difficulty: 'Hard',
      question:
        'Imagine a classroom with a board at the front, windows on the left, a door on the right and desks in the middle. Learners are seated facing the board.\na) What is behind the learners?\nb) What is to the right of the learners?\nc) What is between the board and the learners?',
      checkMode: 'self',
      answer:
        'a) The back wall is behind the learners (they are facing forward so the back wall is behind them).\nb) The door is to the right of the learners.\nc) The desks (or empty floor space) are between the board and the learners.',
    },

    // ── SECTION 2 — Using a Grid to Locate Objects ────────────────────────────

    {
      difficulty: 'Easy',
      question: 'On a grid, a library is at C3.',
      checkMode: 'auto',
      answer: 'a) Column C   b) Row 3',
      parts: [
        {
          label: 'a) Which column is it in?',
          correctAnswer: 'C',
          correctAnswers: ['C', 'c', 'column C', 'column c', 'columnC', 'columnc'],
          explanation: 'In a grid reference, the letter always comes first and tells you the column. C3 is in column C.',
        },
        {
          label: 'b) Which row is it in?',
          correctAnswer: '3',
          correctAnswers: ['3', 'three', 'row 3', 'row3'],
          explanation: 'In a grid reference, the number always comes second and tells you the row. C3 is in row 3.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question:
        'A grid has these objects: school at B2, park at D4, shop at A1.\na) Which object is in the top right area of the grid?\nb) Which object is closest to the bottom left corner?\nc) What grid reference is one column to the right and one row up from the school?',
      checkMode: 'auto',
      answer: 'a) Park at D4   b) Shop at A1   c) C3',
      parts: [
        {
          label: 'a) Which object is in the top right area?',
          correctAnswer: 'park',
          correctAnswers: [
            'park', 'Park', 'the park',
            'park at D4', 'parkatD4', 'parkatd4',
            'D4', 'd4',
          ],
          explanation: 'D is the rightmost column and row 4 is the highest row — D4 is in the top right area. The park is at D4.',
        },
        {
          label: 'b) Which object is closest to the bottom left corner?',
          correctAnswer: 'shop',
          correctAnswers: [
            'shop', 'Shop', 'the shop',
            'shop at A1', 'shopatA1', 'shopata1',
            'A1', 'a1',
          ],
          explanation: 'A is the leftmost column and row 1 is the lowest row — A1 is the bottom left corner. The shop is at A1.',
        },
        {
          label: 'c) Grid reference one column right and one row up from the school (B2)',
          correctAnswer: 'C3',
          correctAnswers: ['C3', 'c3'],
          explanation: 'The school is at B2. One column right from B is C. One row up from 2 is 3. So the answer is C3.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question:
        'On a 5×5 grid labelled A to E across and 1 to 5 up.',
      checkMode: 'auto',
      answer: 'a) C3   b) C4   c) D3',
      parts: [
        {
          label: 'a) What is the grid reference of the centre block?',
          correctAnswer: 'C3',
          correctAnswers: ['C3', 'c3'],
          explanation: 'A 5×5 grid has columns A–E and rows 1–5. The centre column is C (3rd of 5) and the centre row is 3 (3rd of 5). The centre block is C3.',
        },
        {
          label: 'b) Starting at A1, move 2 columns right and 3 rows up — where are you?',
          correctAnswer: 'C4',
          correctAnswers: ['C4', 'c4'],
          explanation: 'Start at A1. 2 columns right from A: B is 1 right, C is 2 right. 3 rows up from 1: row 2, then 3, then 4. You arrive at C4.',
        },
        {
          label: 'c) What grid reference is directly above D2?',
          correctAnswer: 'D3',
          correctAnswers: ['D3', 'd3'],
          explanation: '"Directly above" means the column stays the same (D) and the row increases by 1. One row above row 2 is row 3. The answer is D3.',
        },
      ],
    },

    // ── SECTION 3 — Giving and Following Directions ───────────────────────────

    {
      difficulty: 'Easy',
      question: 'You are standing at a shop facing north. You turn right. Which direction are you now facing?',
      checkMode: 'auto',
      answer: 'East',
      correctAnswer: 'East',
      correctAnswers: ['East', 'east'],
      explanation: 'Turning right from north is a quarter turn clockwise. North → clockwise → East.',
    },

    {
      difficulty: 'Medium',
      question:
        'Follow these directions from the school:\nStart facing north. Go straight 3 blocks. Turn left. Go 2 blocks. Turn right. Go 1 block.',
      checkMode: 'auto',
      answer: 'a) 6 blocks   b) North   c) 4 blocks north and 2 blocks west of the school',
      parts: [
        {
          label: 'a) How many blocks did you travel in total?',
          correctAnswer: '6',
          correctAnswers: ['6', 'six', '6 blocks', '6blocks'],
          explanation: '3 blocks north + 2 blocks west + 1 block north = 6 blocks in total.',
        },
        {
          label: 'b) Which direction are you facing at the end?',
          correctAnswer: 'North',
          correctAnswers: ['North', 'north'],
          explanation: 'You started facing north. Turn left → face west. Turn right from west → face north again. You end up facing north.',
        },
        {
          label: 'c) Describe your final position relative to the school',
          correctAnswer: '4 blocks north and 2 blocks west of the school',
          correctAnswers: [
            '4 blocks north and 2 blocks west of the school',
            '4blocksnorthand2blockswestoftheschool',
            '2 blocks west and 4 blocks north of the school',
            '2blockswestand4blocksnorthoftheschool',
            '4 blocks north, 2 blocks west',
            '2 blocks west, 4 blocks north',
          ],
          explanation: 'You went 3 north, then 2 west, then 1 north. Total: 4 blocks north and 2 blocks west of the school.',
        },
      ],
    },

    // Q9a — self mark
    {
      difficulty: 'Hard',
      question:
        'Write step-by-step directions from a shop at A1 to a park at D4 on a grid. You can only move right or up.\na) Write the directions.',
      checkMode: 'self',
      answer:
        'Any valid combination of right and up moves that gets from A1 to D4.\nShortest route: move 3 steps right (A→B→C→D), then 3 steps up (row 1→2→3→4).\nOr any mix such as: 1 right, 2 up, 2 right, 1 up, 0 right, 2 up — as long as the total is 3 right and 3 up.',
    },

    // Q9b/c/d — auto checked
    {
      difficulty: 'Hard',
      question:
        'Moving from a shop at A1 to a park at D4 on a grid, moving only right or up.',
      checkMode: 'auto',
      answer: 'b) 3 steps right   c) 3 steps up   d) 6 steps total',
      parts: [
        {
          label: 'b) How many steps right do you take?',
          correctAnswer: '3',
          correctAnswers: ['3', 'three', '3 steps', '3steps'],
          explanation: 'Column A to column D: A→B (1), B→C (2), C→D (3). You move 3 columns to the right.',
        },
        {
          label: 'c) How many steps up do you take?',
          correctAnswer: '3',
          correctAnswers: ['3', 'three', '3 steps', '3steps'],
          explanation: 'Row 1 to row 4: 1→2 (1), 2→3 (2), 3→4 (3). You move 3 rows up.',
        },
        {
          label: 'd) What is the total number of steps?',
          correctAnswer: '6',
          correctAnswers: ['6', 'six', '6 steps', '6steps'],
          explanation: '3 steps right + 3 steps up = 6 steps in total.',
        },
      ],
    },

    // ── SECTION 4 — Turns and Movement ────────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Thabo is facing north. He makes a half turn. Which direction is he now facing?',
      checkMode: 'auto',
      answer: 'South',
      correctAnswer: 'South',
      correctAnswers: ['South', 'south'],
      explanation: 'A half turn is 180°. The opposite of north is south. Thabo is now facing south.',
    },

    {
      difficulty: 'Medium',
      question: 'Lerato is facing east.',
      checkMode: 'auto',
      answer: 'a) South   b) North   c) East',
      parts: [
        {
          label: 'a) After a quarter turn clockwise, which direction does she face?',
          correctAnswer: 'South',
          correctAnswers: ['South', 'south'],
          explanation: 'Quarter turn clockwise from east: East → clockwise 90° → South.',
        },
        {
          label: 'b) After a quarter turn anticlockwise, which direction does she face?',
          correctAnswer: 'North',
          correctAnswers: ['North', 'north'],
          explanation: 'Quarter turn anticlockwise from east: East → anticlockwise 90° → North.',
        },
        {
          label: 'c) After a full turn, which direction does she face?',
          correctAnswer: 'East',
          correctAnswers: ['East', 'east'],
          explanation: 'A full turn is 360° — you end up facing the exact same direction you started. Lerato faces east.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question:
        'Sipho starts facing north. He makes these turns in order: quarter turn clockwise, half turn, quarter turn anticlockwise.',
      checkMode: 'auto',
      answer: 'a) East   b) West   c) South   d) 360 degrees',
      parts: [
        {
          label: 'a) After the first turn (quarter turn clockwise), which direction does he face?',
          correctAnswer: 'East',
          correctAnswers: ['East', 'east'],
          explanation: 'Quarter turn clockwise from north: North → East.',
        },
        {
          label: 'b) After the second turn (half turn from east), which direction does he face?',
          correctAnswer: 'West',
          correctAnswers: ['West', 'west'],
          explanation: 'Half turn (180°) from east: the opposite of east is west.',
        },
        {
          label: 'c) After the third turn (quarter turn anticlockwise from west), which direction does he face?',
          correctAnswer: 'South',
          correctAnswers: ['South', 'south'],
          explanation: 'Quarter turn anticlockwise from west: West → anticlockwise 90° → South.',
        },
        {
          label: 'd) How many degrees did he turn in total?',
          correctAnswer: '360',
          correctAnswers: ['360', '360 degrees', '360degrees', 'three hundred and sixty', '360°'],
          explanation: 'Quarter turn (90°) + half turn (180°) + quarter turn (90°) = 90 + 180 + 90 = 360 degrees in total.',
        },
      ],
    },

  ],

  scoreMessages: [
    { minScore: 29, message: 'Perfect score! You have mastered Position and Movement.' },
    { minScore: 22, message: 'Excellent work! Review the questions you got wrong and you will have this mastered.' },
    { minScore: 15, message: 'Good effort! Go back and read through the sections you struggled with.' },
    { minScore: 0, message: 'Keep going! Read through the study guide again carefully and then retry.' },
  ],
}
