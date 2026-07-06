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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
      diagramPlaceholder:
        'A compass showing north, south, east and west with arrows showing a quarter turn clockwise from north to east and a half turn from south to north',
      videoPlaceholder:
        'Short video showing full, half and quarter turns clockwise and anticlockwise using a compass or clock face',
    },
  ],
  topicPractice: [],

  practiceSets: [

    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — FOUNDATIONS: position words, simple grid references, turns
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: Position Words, Grid Basics and Turns',
      questions: [
        { difficulty: 'Easy', question: 'The lamp is higher up than the table. Which position word describes the lamp?', checkMode: 'auto', answer: 'Above', correctAnswer: 'above', correctAnswers: ['above'], explanation: '"Above" means at a higher position than another object.' },
        { difficulty: 'Easy', question: 'The carpet is lower down than the chair. Which position word describes the carpet?', checkMode: 'auto', answer: 'Below', correctAnswer: 'below', correctAnswers: ['below'], explanation: '"Below" means at a lower position than another object.' },
        { difficulty: 'Easy', question: 'The window is on the left-hand side of the wall and the door is on the other side. Which position word describes the door?', checkMode: 'auto', answer: 'Right', correctAnswer: 'right', correctAnswers: ['right', 'to the right'], explanation: 'If the window is on the left, the door on the other side is to the right.' },
        { difficulty: 'Easy', question: 'A teacher stands facing the class. Which position word describes where the class is relative to the teacher?', checkMode: 'auto', answer: 'In front of', correctAnswer: 'in front of', correctAnswers: ['in front of', 'infrontof', 'in front'], explanation: 'The class is in front of the teacher because the teacher faces them.' },
        { difficulty: 'Easy', question: 'The board is on the other side of the teacher, away from the class. Which position word describes the board?', checkMode: 'auto', answer: 'Behind', correctAnswer: 'behind', correctAnswers: ['behind'], explanation: 'The board is behind the teacher — on the opposite side from the class.' },
        { difficulty: 'Easy', question: 'The pencil is directly beside the ruler. Which position word describes this?', checkMode: 'auto', answer: 'Next to', correctAnswer: 'next to', correctAnswers: ['next to', 'nextto'], explanation: '"Next to" means directly beside something.' },
        { difficulty: 'Easy', question: 'The eraser has the pencil on one side and the pen on the other side. Which position word describes the eraser?', checkMode: 'auto', answer: 'Between', correctAnswer: 'between', correctAnswers: ['between'], explanation: '"Between" means in the middle of two things.' },
        { difficulty: 'Easy', question: 'The shop is a short distance from the school. Which position word best describes this?', checkMode: 'auto', answer: 'Near', correctAnswer: 'near', correctAnswers: ['near'], explanation: '"Near" describes something that is a short distance away.' },
        { difficulty: 'Easy', question: 'The hospital is a long distance from the school. Which position word best describes this?', checkMode: 'auto', answer: 'Far', correctAnswer: 'far', correctAnswers: ['far'], explanation: '"Far" describes something that is a long distance away.' },
        { difficulty: 'Easy', question: 'A ball rests directly on the surface of a table. Which position word describes the ball?', checkMode: 'auto', answer: 'On top of', correctAnswer: 'on top of', correctAnswers: ['on top of', 'ontopof', 'on top'], explanation: '"On top of" means resting directly on the surface of something.' },
        { difficulty: 'Easy', question: 'On a grid, columns run in which direction?', checkMode: 'auto', answer: 'Left to right', correctAnswer: 'left to right', correctAnswers: ['left to right', 'lefttoright', 'from left to right'], explanation: 'Columns run from left to right across a grid and are usually labelled with letters.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="92" y="115" text-anchor="middle" font-size="22">🪑</text><text x="162" y="150" text-anchor="middle" font-size="22">🪑</text><text x="57" y="45" text-anchor="middle" font-size="22">💡</text></svg>' },
        { difficulty: 'Easy', question: 'On a grid, rows run in which direction?', checkMode: 'auto', answer: 'Bottom to top', correctAnswer: 'bottom to top', correctAnswers: ['bottom to top', 'bottomtotop', 'from bottom to top'], explanation: 'Rows run from bottom to top up a grid and are usually labelled with numbers.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="92" y="115" text-anchor="middle" font-size="22">🪑</text><text x="162" y="150" text-anchor="middle" font-size="22">🪑</text><text x="57" y="45" text-anchor="middle" font-size="22">💡</text></svg>' },
        { difficulty: 'Easy', question: 'In a grid reference like B3, which part comes first — the letter or the number?', checkMode: 'auto', answer: 'Letter', correctAnswer: 'letter', correctAnswers: ['letter', 'the letter'], explanation: 'A grid reference always gives the column letter first, then the row number.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="92" y="115" text-anchor="middle" font-size="22">🪑</text><text x="162" y="150" text-anchor="middle" font-size="22">🪑</text><text x="57" y="45" text-anchor="middle" font-size="22">💡</text></svg>' },
        { difficulty: 'Easy', question: 'On a grid, a chair is at column B, row 2. What is the grid reference?', checkMode: 'auto', answer: 'B2', correctAnswer: 'B2', correctAnswers: ['B2', 'b2'], explanation: 'The column letter comes first (B), then the row number (2), giving B2.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="92" y="115" text-anchor="middle" font-size="22">🪑</text><text x="162" y="150" text-anchor="middle" font-size="22">🪑</text><text x="57" y="45" text-anchor="middle" font-size="22">💡</text></svg>' },
        { difficulty: 'Easy', question: 'On a grid, a table is at D1. Which column is it in?', checkMode: 'auto', answer: 'Column D', correctAnswer: 'D', correctAnswers: ['D', 'd', 'column D'], explanation: 'In D1, the letter D always comes first and tells you the column.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="92" y="115" text-anchor="middle" font-size="22">🪑</text><text x="162" y="150" text-anchor="middle" font-size="22">🪑</text><text x="57" y="45" text-anchor="middle" font-size="22">💡</text></svg>' },
        { difficulty: 'Easy', question: 'On a grid, a lamp is at A4. Which row is it in?', checkMode: 'auto', answer: 'Row 4', correctAnswer: '4', correctAnswers: ['4', 'four', 'row 4'], explanation: 'In A4, the number 4 always comes second and tells you the row.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="92" y="115" text-anchor="middle" font-size="22">🪑</text><text x="162" y="150" text-anchor="middle" font-size="22">🪑</text><text x="57" y="45" text-anchor="middle" font-size="22">💡</text></svg>' },
        { difficulty: 'Easy', question: 'On a grid labelled A to D across the bottom, which column is furthest to the left?', checkMode: 'auto', answer: 'Column A', correctAnswer: 'A', correctAnswers: ['A', 'a', 'column A'], explanation: 'Columns are labelled starting from the left, so A is the leftmost column.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="92" y="115" text-anchor="middle" font-size="22">🪑</text><text x="162" y="150" text-anchor="middle" font-size="22">🪑</text><text x="57" y="45" text-anchor="middle" font-size="22">💡</text></svg>' },
        { difficulty: 'Easy', question: 'On a grid labelled 1 to 4 up the side, which row is the lowest?', checkMode: 'auto', answer: 'Row 1', correctAnswer: '1', correctAnswers: ['1', 'one', 'row 1'], explanation: 'Rows are labelled starting from the bottom, so row 1 is the lowest row.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="92" y="115" text-anchor="middle" font-size="22">🪑</text><text x="162" y="150" text-anchor="middle" font-size="22">🪑</text><text x="57" y="45" text-anchor="middle" font-size="22">💡</text></svg>' },
        { difficulty: 'Easy', question: 'A full turn is how many degrees?', checkMode: 'auto', answer: '360°', correctAnswer: '360', correctAnswers: ['360', '360 degrees', '360°'], explanation: 'A full turn goes all the way around, which is 360°.' },
        { difficulty: 'Easy', question: 'A half turn is how many degrees?', checkMode: 'auto', answer: '180°', correctAnswer: '180', correctAnswers: ['180', '180 degrees', '180°'], explanation: 'A half turn is halfway around a full turn: 360° ÷ 2 = 180°.' },
        { difficulty: 'Easy', question: 'A quarter turn is how many degrees?', checkMode: 'auto', answer: '90°', correctAnswer: '90', correctAnswers: ['90', '90 degrees', '90°'], explanation: 'A quarter turn is one quarter of a full turn: 360° ÷ 4 = 90°.' },
        { difficulty: 'Easy', question: 'After a full turn (360°), do you face the same direction or a different direction than you started?', checkMode: 'auto', answer: 'Same direction', correctAnswer: 'same direction', correctAnswers: ['same direction', 'samedirection', 'the same direction', 'same'], explanation: 'A full turn brings you all the way back around to face the same direction you started.' },
        { difficulty: 'Easy', question: 'After a half turn (180°), do you face the same direction or the opposite direction than you started?', checkMode: 'auto', answer: 'Opposite direction', correctAnswer: 'opposite direction', correctAnswers: ['opposite direction', 'oppositedirection', 'the opposite direction', 'opposite'], explanation: 'A half turn always brings you to face the exact opposite direction.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="75" cy="90" r="55" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="35" x2="75" y2="145" stroke="#9ca3af" stroke-width="1.5"/><line x1="20" y1="90" x2="130" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="75" y1="90" x2="75" y2="40" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrow1)"/><text x="75" y="27" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">N</text><text x="75" y="163" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">S</text><text x="140" y="94" text-anchor="start" font-size="14" font-weight="700" fill="#374151">E</text><text x="10" y="94" text-anchor="end" font-size="14" font-weight="700" fill="#374151">W</text><path d="M 75 55 A 35 35 0 0 1 75 125" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrow2)"/><text x="112" y="93" text-anchor="start" font-size="11" font-weight="700" fill="#ea580c">180°</text><defs><marker id="arrow1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="arrow2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><circle cx="170" cy="90" r="35" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="170" y="61" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">12</text><text x="200" y="94" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">3</text><text x="170" y="128" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">6</text><text x="141" y="94" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">9</text><line x1="170" y1="90" x2="170" y2="65" stroke="#0f1f3d" stroke-width="2"/><line x1="170" y1="90" x2="170" y2="115" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,2"/><text x="170" y="182" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">Half turn = 12 to 6</text></svg>' },
        { difficulty: 'Easy', question: 'Facing north, you make a half turn. Which direction do you now face?', checkMode: 'auto', answer: 'South', correctAnswer: 'South', correctAnswers: ['South', 'south'], explanation: 'A half turn faces you the opposite way. The opposite of north is south.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="75" cy="90" r="55" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="35" x2="75" y2="145" stroke="#9ca3af" stroke-width="1.5"/><line x1="20" y1="90" x2="130" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="75" y1="90" x2="75" y2="40" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrow1)"/><text x="75" y="27" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">N</text><text x="75" y="163" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">S</text><text x="140" y="94" text-anchor="start" font-size="14" font-weight="700" fill="#374151">E</text><text x="10" y="94" text-anchor="end" font-size="14" font-weight="700" fill="#374151">W</text><path d="M 75 55 A 35 35 0 0 1 75 125" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrow2)"/><text x="112" y="93" text-anchor="start" font-size="11" font-weight="700" fill="#ea580c">180°</text><defs><marker id="arrow1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="arrow2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><circle cx="170" cy="90" r="35" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="170" y="61" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">12</text><text x="200" y="94" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">3</text><text x="170" y="128" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">6</text><text x="141" y="94" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">9</text><line x1="170" y1="90" x2="170" y2="65" stroke="#0f1f3d" stroke-width="2"/><line x1="170" y1="90" x2="170" y2="115" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,2"/><text x="170" y="182" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">Half turn = 12 to 6</text></svg>' },
        { difficulty: 'Easy', question: 'Facing east, you make a half turn. Which direction do you now face?', checkMode: 'auto', answer: 'West', correctAnswer: 'West', correctAnswers: ['West', 'west'], explanation: 'A half turn faces you the opposite way. The opposite of east is west.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="75" cy="90" r="55" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="35" x2="75" y2="145" stroke="#9ca3af" stroke-width="1.5"/><line x1="20" y1="90" x2="130" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="75" y1="90" x2="75" y2="40" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrow1)"/><text x="75" y="27" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">N</text><text x="75" y="163" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">S</text><text x="140" y="94" text-anchor="start" font-size="14" font-weight="700" fill="#374151">E</text><text x="10" y="94" text-anchor="end" font-size="14" font-weight="700" fill="#374151">W</text><path d="M 75 55 A 35 35 0 0 1 75 125" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrow2)"/><text x="112" y="93" text-anchor="start" font-size="11" font-weight="700" fill="#ea580c">180°</text><defs><marker id="arrow1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="arrow2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><circle cx="170" cy="90" r="35" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="170" y="61" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">12</text><text x="200" y="94" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">3</text><text x="170" y="128" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">6</text><text x="141" y="94" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">9</text><line x1="170" y1="90" x2="170" y2="65" stroke="#0f1f3d" stroke-width="2"/><line x1="170" y1="90" x2="170" y2="115" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,2"/><text x="170" y="182" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">Half turn = 12 to 6</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered position words, grid basics and simple turns.' },
        { minScore: 19, message: 'Great work! You know your position words and grid references well — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Go back over the position word and grid reference sections and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — TRICKIER VARIANT: multi-step grid movement, clockwise vs
    // anticlockwise turn direction
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Multi-Step Grid Movement and Turn Direction',
      questions: [
        { difficulty: 'Medium', question: 'On a grid, the library is at column C, row 3. The park is 2 columns to the right and 1 row up. What is the park\'s grid reference?', checkMode: 'auto', answer: 'E4', correctAnswer: 'E4', correctAnswers: ['E4', 'e4'], explanation: '2 columns right from C: D (1), E (2). 1 row up from 3 is 4. The park is at E4.' },
        { difficulty: 'Medium', question: 'On a grid, a shop is at B2. A gate is 3 columns to the right and 2 rows up from the shop. What is the gate\'s grid reference?', checkMode: 'auto', answer: 'E4', correctAnswer: 'E4', correctAnswers: ['E4', 'e4'], explanation: '3 columns right from B: C (1), D (2), E (3). 2 rows up from 2: 3 (1), 4 (2). The gate is at E4.' },
        { difficulty: 'Medium', question: 'On a grid, a house is at D3. What is the grid reference 1 column to the left and 1 row down from the house?', checkMode: 'auto', answer: 'C2', correctAnswer: 'C2', correctAnswers: ['C2', 'c2'], explanation: '1 column left from D is C. 1 row down from 3 is 2. The answer is C2.' },
        { difficulty: 'Medium', question: 'On a grid, a tree is at A1. What is the grid reference 2 columns to the right and 3 rows up from the tree?', checkMode: 'auto', answer: 'C4', correctAnswer: 'C4', correctAnswers: ['C4', 'c4'], explanation: '2 columns right from A: B (1), C (2). 3 rows up from 1: 2 (1), 3 (2), 4 (3). The answer is C4.' },
        { difficulty: 'Medium', question: 'On a grid, a well is at E5. What is the grid reference 4 columns to the left and 4 rows down from the well?', checkMode: 'auto', answer: 'A1', correctAnswer: 'A1', correctAnswers: ['A1', 'a1'], explanation: '4 columns left from E: D, C, B, A. 4 rows down from 5: 4, 3, 2, 1. The answer is A1.' },
        { difficulty: 'Medium', question: 'On a grid, a bridge is at C2. Moving from the bridge, you go 1 column right, then 2 rows up. What is your new grid reference?', checkMode: 'auto', answer: 'D4', correctAnswer: 'D4', correctAnswers: ['D4', 'd4'], explanation: '1 column right from C is D. 2 rows up from 2: 3, 4. The answer is D4.' },
        { difficulty: 'Medium', question: 'A gate at grid reference B1 moves 2 columns right and then 1 row up. What is the new position?', checkMode: 'auto', answer: 'D2', correctAnswer: 'D2', correctAnswers: ['D2', 'd2'], explanation: '2 columns right from B: C, D. 1 row up from 1 is 2. The answer is D2.' },
        { difficulty: 'Medium', question: 'Comparing D4 and B2 on a grid, is D4 to the right of B2, to the left of B2, or in the same column?', checkMode: 'auto', answer: 'To the right of B2', correctAnswer: 'to the right of B2', correctAnswers: ['to the right of b2', 'right', 'to the right'], explanation: 'D comes after B when counting columns left to right, so D4 is to the right of B2.' },
        { difficulty: 'Medium', question: 'Comparing A3 and A1 on a grid, is A3 higher up, lower down, or in the same row as A1?', checkMode: 'auto', answer: 'Higher up', correctAnswer: 'higher up', correctAnswers: ['higher up', 'higher', 'higherup'], explanation: 'Row 3 is above row 1 since rows increase going up, so A3 is higher up than A1.' },
        { difficulty: 'Medium', question: 'Turning right from a direction is the same as turning which way — clockwise or anticlockwise?', checkMode: 'auto', answer: 'Clockwise', correctAnswer: 'clockwise', correctAnswers: ['clockwise'], explanation: 'Turning right is always the same as turning clockwise.' },
        { difficulty: 'Medium', question: 'Turning left from a direction is the same as turning which way — clockwise or anticlockwise?', checkMode: 'auto', answer: 'Anticlockwise', correctAnswer: 'anticlockwise', correctAnswers: ['anticlockwise'], explanation: 'Turning left is always the same as turning anticlockwise.' },
        { difficulty: 'Medium', question: 'Facing north, you make a quarter turn clockwise. Which direction do you now face?', checkMode: 'auto', answer: 'East', correctAnswer: 'East', correctAnswers: ['East', 'east'], explanation: 'Going clockwise from north: North → East. A quarter turn clockwise lands on East.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">E</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Clockwise: N→E→S→W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Anticlockwise: N→W→S→E</text></svg>' },
        { difficulty: 'Medium', question: 'Facing north, you make a quarter turn anticlockwise. Which direction do you now face?', checkMode: 'auto', answer: 'West', correctAnswer: 'West', correctAnswers: ['West', 'west'], explanation: 'Going anticlockwise from north: North → West. A quarter turn anticlockwise lands on West.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">E</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Clockwise: N→E→S→W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Anticlockwise: N→W→S→E</text></svg>' },
        { difficulty: 'Medium', question: 'Facing east, you make a quarter turn clockwise. Which direction do you now face?', checkMode: 'auto', answer: 'South', correctAnswer: 'South', correctAnswers: ['South', 'south'], explanation: 'Going clockwise: North → East → South. A quarter turn clockwise from East lands on South.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">E</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Clockwise: N→E→S→W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Anticlockwise: N→W→S→E</text></svg>' },
        { difficulty: 'Medium', question: 'Facing east, you make a quarter turn anticlockwise. Which direction do you now face?', checkMode: 'auto', answer: 'North', correctAnswer: 'North', correctAnswers: ['North', 'north'], explanation: 'Going anticlockwise from east reverses the clockwise order, so East → North.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">E</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Clockwise: N→E→S→W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Anticlockwise: N→W→S→E</text></svg>' },
        { difficulty: 'Medium', question: 'Facing south, you make a quarter turn clockwise. Which direction do you now face?', checkMode: 'auto', answer: 'West', correctAnswer: 'West', correctAnswers: ['West', 'west'], explanation: 'Going clockwise: East → South → West. A quarter turn clockwise from South lands on West.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">E</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Clockwise: N→E→S→W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Anticlockwise: N→W→S→E</text></svg>' },
        { difficulty: 'Medium', question: 'Facing south, you make a quarter turn anticlockwise. Which direction do you now face?', checkMode: 'auto', answer: 'East', correctAnswer: 'East', correctAnswers: ['East', 'east'], explanation: 'Going anticlockwise from south reverses the clockwise order, so South → East.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">E</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Clockwise: N→E→S→W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Anticlockwise: N→W→S→E</text></svg>' },
        { difficulty: 'Medium', question: 'Facing west, you make a quarter turn clockwise. Which direction do you now face?', checkMode: 'auto', answer: 'North', correctAnswer: 'North', correctAnswers: ['North', 'north'], explanation: 'Going clockwise: South → West → North. A quarter turn clockwise from West lands on North.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">E</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Clockwise: N→E→S→W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Anticlockwise: N→W→S→E</text></svg>' },
        { difficulty: 'Medium', question: 'Facing west, you make a quarter turn anticlockwise. Which direction do you now face?', checkMode: 'auto', answer: 'South', correctAnswer: 'South', correctAnswers: ['South', 'south'], explanation: 'Going anticlockwise from west reverses the clockwise order, so West → South.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">E</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Clockwise: N→E→S→W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Anticlockwise: N→W→S→E</text></svg>' },
        { difficulty: 'Medium', question: 'A clock\'s minute hand makes a quarter turn clockwise. How many degrees did it turn?', checkMode: 'auto', answer: '90°', correctAnswer: '90', correctAnswers: ['90', '90 degrees', '90°'], explanation: 'A quarter turn is always 90°, no matter the direction.' },
        { difficulty: 'Medium', question: 'A door handle makes a three-quarter turn. How many degrees is this?', checkMode: 'auto', answer: '270°', correctAnswer: '270', correctAnswers: ['270', '270 degrees', '270°'], explanation: 'A three-quarter turn is three-quarters of 360°: 360° × ¾ = 270°.' },
        { difficulty: 'Medium', question: 'Facing north, you make a three-quarter turn clockwise. Which direction do you now face?', checkMode: 'auto', answer: 'West', correctAnswer: 'West', correctAnswers: ['West', 'west'], explanation: 'A three-quarter turn clockwise (270°) from North: North → East → South → West.' },
        { difficulty: 'Medium', question: 'Facing north, you make a three-quarter turn anticlockwise. Which direction do you now face?', checkMode: 'auto', answer: 'East', correctAnswer: 'East', correctAnswers: ['East', 'east'], explanation: 'A three-quarter turn anticlockwise (270°) from North: North → West → South → East.' },
        { difficulty: 'Medium', question: 'Which turns end with you facing the exact same direction you started — a full turn, a half turn or a quarter turn?', checkMode: 'auto', answer: 'Full turn', correctAnswer: 'full turn', correctAnswers: ['full turn', 'fullturn', 'a full turn'], explanation: 'Only a full turn (360°) brings you all the way back to face the same direction.' },
        { difficulty: 'Medium', question: 'On a grid, is moving "2 columns right" the same as moving "2 rows up"?', checkMode: 'auto', answer: 'No', correctAnswer: 'no', correctAnswers: ['no', 'not the same'], explanation: 'Columns move left-right while rows move up-down — they are different directions on the grid.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered multi-step grid movement and turn direction.' },
        { minScore: 19, message: 'Great work! You understand clockwise vs anticlockwise turns well — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Practise multi-step grid moves and turn direction, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — FOLLOWING/GIVING DIRECTIONS word problems, real-world position
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Directions and Real-World Position',
      questions: [
        { difficulty: 'Medium', question: 'You are facing north. You are told to "go straight ahead." Which direction do you walk?', checkMode: 'auto', answer: 'North', correctAnswer: 'North', correctAnswers: ['North', 'north'], explanation: '"Go straight ahead" means keep moving in the same direction you are already facing — north.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="130" r="7" fill="#0f1f3d"/><line x1="110" y1="130" x2="110" y2="35" stroke="#2563eb" stroke-width="2.5" marker-end="url(#a0)"/><text x="122" y="80" text-anchor="start" font-size="14" font-weight="700" fill="#2563eb">N</text><text x="110" y="150" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">Start (facing N)</text><text x="110" y="25" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">Go straight ahead = ?</text><defs><marker id="a0" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#2563eb"/></marker></defs></svg>' },
        { difficulty: 'Medium', question: 'Thabo is standing at the school gate facing east. He turns right. Which direction is he now facing?', checkMode: 'auto', answer: 'South', correctAnswer: 'South', correctAnswers: ['South', 'south'], explanation: 'Turning right is a quarter turn clockwise. East → clockwise → South.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="90" cy="90" r="6" fill="#0f1f3d"/><text x="70" y="94" text-anchor="end" font-size="12" font-weight="700" fill="#0f1f3d">Gate</text><line x1="90" y1="90" x2="150" y2="90" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="4,3"/><text x="120" y="80" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">facing East</text><path d="M 150 90 A 45 45 0 0 1 195 135" fill="none" stroke="#ea580c" stroke-width="2.5" marker-end="url(#a1)"/><text x="150" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#374151">Turn right</text><text x="195" y="150" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">?</text><defs><marker id="a1" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#ea580c"/></marker></defs></svg>' },
        { difficulty: 'Medium', question: 'Sipho is standing at the shop facing south. He turns left. Which direction is he now facing?', checkMode: 'auto', answer: 'East', correctAnswer: 'East', correctAnswers: ['East', 'east'], explanation: 'Turning left is a quarter turn anticlockwise. South → anticlockwise → East.' },
        { difficulty: 'Medium', question: 'Lerato walks from her house facing north for 3 blocks, then turns right and walks 2 blocks. Which direction is she facing after the turn?', checkMode: 'auto', answer: 'East', correctAnswer: 'East', correctAnswers: ['East', 'east'], explanation: 'Turning right from north is a quarter turn clockwise: North → East.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="160" r="6" fill="#0f1f3d"/><text x="50" y="178" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">House</text><line x1="50" y1="160" x2="50" y2="60" stroke="#2563eb" stroke-width="2.5" marker-end="url(#a3)"/><text x="38" y="105" text-anchor="end" font-size="12" font-weight="700" fill="#2563eb">3 blocks N</text><path d="M 50 60 A 40 40 0 0 1 90 100" fill="none" stroke="#ea580c" stroke-width="2.5"/><text x="50" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="#374151">Turn right</text><line x1="90" y1="100" x2="150" y2="100" stroke="#16a34a" stroke-width="2.5" marker-end="url(#a3b)"/><text x="120" y="90" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">2 blocks</text><text x="150" y="120" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">facing ?</text><defs><marker id="a3" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#2563eb"/></marker><marker id="a3b" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#16a34a"/></marker></defs></svg>' },
        { difficulty: 'Medium', question: 'Amahle walks from the park facing west for 4 blocks, then turns left. Which direction is she facing after the turn?', checkMode: 'auto', answer: 'South', correctAnswer: 'South', correctAnswers: ['South', 'south'], explanation: 'Turning left from west is a quarter turn anticlockwise: West → South.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="180" cy="60" r="6" fill="#0f1f3d"/><text x="180" y="42" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">Park</text><line x1="180" y1="60" x2="70" y2="60" stroke="#2563eb" stroke-width="2.5" marker-end="url(#a4)"/><text x="125" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">4 blocks W</text><path d="M 70 60 A 40 40 0 0 0 30 100" fill="none" stroke="#ea580c" stroke-width="2.5" marker-end="url(#a4b)"/><text x="60" y="90" text-anchor="middle" font-size="12" font-weight="700" fill="#374151">Turn left</text><text x="30" y="125" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">facing ?</text><defs><marker id="a4" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#2563eb"/></marker><marker id="a4b" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#ea580c"/></marker></defs></svg>' },
        { difficulty: 'Medium', question: 'Directions say: "Start at the shop facing north. Go straight 2 blocks. Turn right. Go straight 1 block." How many blocks were walked in total?', checkMode: 'auto', answer: '3', correctAnswer: '3', correctAnswers: ['3', 'three', '3 blocks'], explanation: '2 blocks + 1 block = 3 blocks in total.' },
        { difficulty: 'Medium', question: 'Directions say: "Start facing south. Go straight 3 blocks. Turn around. Go straight 3 blocks." Which direction are you facing at the end?', checkMode: 'auto', answer: 'North', correctAnswer: 'North', correctAnswers: ['North', 'north'], explanation: '"Turn around" is a half turn — the opposite of south is north.' },
        { difficulty: 'Medium', question: 'Directions say: "Start facing south. Go straight 3 blocks. Turn around. Go straight 3 blocks." How far are you from your starting point?', checkMode: 'auto', answer: '0', correctAnswer: '0', correctAnswers: ['0', 'zero', 'back at the start', 'at the starting point'], explanation: 'Walking 3 blocks south then turning around and walking 3 blocks north brings you back to where you started.' },
        { difficulty: 'Medium', question: 'On a real map, the clinic is next to the school and the shop is between the school and the clinic. Which building is in the middle?', checkMode: 'auto', answer: 'Shop', correctAnswer: 'shop', correctAnswers: ['shop', 'the shop'], explanation: '"Between" means in the middle of two things — the shop is between the school and the clinic.' },
        { difficulty: 'Medium', question: 'A taxi rank is far from the school and a spaza shop is near the school. Which one would you reach first if walking from the school?', checkMode: 'auto', answer: 'Spaza shop', correctAnswer: 'spaza shop', correctAnswers: ['spaza shop', 'the spaza shop', 'spaza', 'shop'], explanation: '"Near" means a short distance away, so the spaza shop would be reached first.' },
        { difficulty: 'Medium', question: 'You give directions: "Walk straight ahead 2 blocks, then turn right, then walk 1 more block." Someone follows them starting while facing west. Which direction are they facing after the turn?', checkMode: 'auto', answer: 'North', correctAnswer: 'North', correctAnswers: ['North', 'north'], explanation: 'Turning right from west is a quarter turn clockwise: West → North.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="180" cy="140" r="6" fill="#0f1f3d"/><text x="180" y="158" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">Start (facing W)</text><line x1="180" y1="140" x2="90" y2="140" stroke="#2563eb" stroke-width="2.5" marker-end="url(#a10)"/><text x="135" y="130" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">2 blocks</text><path d="M 90 140 A 40 40 0 0 1 50 100" fill="none" stroke="#ea580c" stroke-width="2.5"/><text x="105" y="105" text-anchor="middle" font-size="12" font-weight="700" fill="#374151">Turn right</text><line x1="50" y1="100" x2="50" y2="50" stroke="#16a34a" stroke-width="2.5" marker-end="url(#a10b)"/><text x="38" y="75" text-anchor="end" font-size="12" font-weight="700" fill="#16a34a">1 block</text><text x="50" y="35" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">facing ?</text><defs><marker id="a10" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#2563eb"/></marker><marker id="a10b" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#16a34a"/></marker></defs></svg>' },
        { difficulty: 'Medium', question: 'You give directions: "Walk straight ahead 2 blocks, then turn left, then walk 1 more block." Someone follows them starting while facing west. Which direction are they facing after the turn?', checkMode: 'auto', answer: 'South', correctAnswer: 'South', correctAnswers: ['South', 'south'], explanation: 'Turning left from west is a quarter turn anticlockwise: West → South.' },
        { difficulty: 'Medium', question: 'On a grid map, the clinic is at column B, row 4 and the school is at column B, row 1. Are they in the same column or the same row?', checkMode: 'auto', answer: 'Same column', correctAnswer: 'same column', correctAnswers: ['same column', 'samecolumn', 'column'], explanation: 'Both grid references share the letter B, so they are in the same column.' },
        { difficulty: 'Medium', question: 'On a grid map, the shop is at C2 and the park is at E2. Are they in the same column or the same row?', checkMode: 'auto', answer: 'Same row', correctAnswer: 'same row', correctAnswers: ['same row', 'samerow', 'row'], explanation: 'Both grid references share the number 2, so they are in the same row.' },
        { difficulty: 'Medium', question: 'Directions from the clinic to the market: "Go straight 4 blocks, turn right, go straight 2 blocks." If you started facing north, which direction do you end up facing?', checkMode: 'auto', answer: 'East', correctAnswer: 'East', correctAnswers: ['East', 'east'], explanation: 'Turning right from north is a quarter turn clockwise: North → East.' },
        { difficulty: 'Medium', question: 'To reverse a set of directions and walk back to the start, what must you do to left and right turns?', checkMode: 'auto', answer: 'Swap them', correctAnswer: 'swap them', correctAnswers: ['swap them', 'swap', 'reverse them', 'switch them'], explanation: 'When retracing your steps, every left turn becomes a right turn and every right turn becomes a left turn.' },
        { difficulty: 'Medium', question: 'On a grid, the classroom is at A2 and the office is at A2 as well. What can you say about their positions?', checkMode: 'auto', answer: 'They are in the same place', correctAnswer: 'they are in the same place', correctAnswers: ['they are in the same place', 'same place', 'same position', 'identical'], explanation: 'Identical grid references mean the two objects are described as being in the same position.' },
        { difficulty: 'Medium', question: 'A garden has a bench between two trees, with a pond in front of the bench. Which position word tells you the pond\'s relationship to the bench?', checkMode: 'auto', answer: 'In front of', correctAnswer: 'in front of', correctAnswers: ['in front of', 'infrontof'], explanation: 'The pond is described as being in front of the bench.' },
        { difficulty: 'Medium', question: 'Two friends stand back-to-back. If Zanele faces north, which direction does the friend behind her face?', checkMode: 'auto', answer: 'South', correctAnswer: 'South', correctAnswers: ['South', 'south'], explanation: 'Standing back-to-back means facing opposite directions — the opposite of north is south.' },
        { difficulty: 'Medium', question: 'Following a map: start at the gate facing east, walk 2 blocks, turn right, walk 2 blocks, turn right again, walk 2 blocks. Which direction do you face at the end?', checkMode: 'auto', answer: 'West', correctAnswer: 'West', correctAnswers: ['West', 'west'], explanation: 'East → (turn right) → South → (turn right) → West. Two quarter turns clockwise from East land on West.' },
        { difficulty: 'Medium', question: 'On a grid, a well is 3 columns right and 0 rows up from a hut at A2. What is the well\'s grid reference?', checkMode: 'auto', answer: 'D2', correctAnswer: 'D2', correctAnswers: ['D2', 'd2'], explanation: '3 columns right from A: B, C, D. With 0 rows up, the row stays at 2. The answer is D2.' },
        { difficulty: 'Medium', question: 'On a grid, a bench is 0 columns right and 3 rows up from a gate at C1. What is the bench\'s grid reference?', checkMode: 'auto', answer: 'C4', correctAnswer: 'C4', correctAnswers: ['C4', 'c4'], explanation: 'With 0 columns moved, the column stays at C. 3 rows up from 1: 2, 3, 4. The answer is C4.' },
        { difficulty: 'Medium', question: 'A set of directions tells you to turn right three times in a row (three quarter turns clockwise). If you started facing north, which direction do you face at the end?', checkMode: 'auto', answer: 'West', correctAnswer: 'West', correctAnswers: ['West', 'west'], explanation: 'Three quarter turns clockwise = 270°. North → East → South → West.' },
        { difficulty: 'Medium', question: 'A set of directions tells you to turn left twice in a row (two quarter turns anticlockwise). If you started facing east, which direction do you face at the end?', checkMode: 'auto', answer: 'West', correctAnswer: 'West', correctAnswers: ['West', 'west'], explanation: 'Two quarter turns anticlockwise = 180° (a half turn). The opposite of east is west.' },
        { difficulty: 'Medium', question: 'Why is it important to say which direction you are facing at the start of a set of directions?', checkMode: 'self', answer: 'Because words like "turn left" or "turn right" only make sense if you know which way the person is already facing — without a starting direction, the directions could lead to the wrong place.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered following and giving directions in real-world situations.' },
        { minScore: 19, message: 'Great work! You can confidently work through direction word problems — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Revisit the directions worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP / COMBINED PROBLEMS and explain-your-reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Multi-Step and Combined Problems',
      questions: [
        { difficulty: 'Medium', question: 'On a grid, a shop is at B1. Moving 2 columns right and 2 rows up brings you to the market. From the market, moving 1 column left and 1 row up brings you to the library. What is the library\'s grid reference?', checkMode: 'auto', answer: 'C4', correctAnswer: 'C4', correctAnswers: ['C4', 'c4'], explanation: 'Shop B1 → 2 right, 2 up → market at D3. Market D3 → 1 left, 1 up → library at C4.' },
        { difficulty: 'Medium', question: 'On a grid, a hut is at A1. Moving 3 columns right and 1 row up brings you to a well. From the well, moving 1 column left and 3 rows up brings you to a tree. What is the tree\'s grid reference?', checkMode: 'auto', answer: 'C5', correctAnswer: 'C5', correctAnswers: ['C5', 'c5'], explanation: 'Hut A1 → 3 right, 1 up → well at D2. Well D2 → 1 left, 3 up → tree at C5.' },
        { difficulty: 'Hard', question: 'Sipho starts facing north. He makes these turns in order: quarter turn clockwise, quarter turn clockwise. Which direction does he face after both turns?', checkMode: 'auto', answer: 'South', correctAnswer: 'South', correctAnswers: ['South', 'south'], explanation: 'Two quarter turns clockwise = a half turn (180°). North → South.' },
        { difficulty: 'Hard', question: 'Zanele starts facing east. She makes these turns in order: half turn, quarter turn anticlockwise. Which direction does she face after both turns?', checkMode: 'auto', answer: 'South', correctAnswer: 'South', correctAnswers: ['South', 'south'], explanation: 'Half turn from East → West. Quarter turn anticlockwise from West → South.' },
        { difficulty: 'Hard', question: 'Amahle starts facing south. She makes these turns in order: quarter turn clockwise, half turn, quarter turn clockwise. Which direction does she face at the end?', checkMode: 'auto', answer: 'South', correctAnswer: 'South', correctAnswers: ['South', 'south'], explanation: 'South → (¼ clockwise) → West → (½ turn) → East → (¼ clockwise) → South.' },
        { difficulty: 'Hard', question: 'Thabo starts facing west. He makes a three-quarter turn clockwise, then a quarter turn anticlockwise. Which direction does he face at the end?', checkMode: 'auto', answer: 'East', correctAnswer: 'East', correctAnswers: ['East', 'east'], explanation: 'West → (¾ clockwise, 270°) → South → (¼ anticlockwise) → East.' },
        { difficulty: 'Hard', question: 'A set of turns totals 450° clockwise from north. Since a full turn is 360°, which direction do you face after turning 450° clockwise?', checkMode: 'auto', answer: 'East', correctAnswer: 'East', correctAnswers: ['East', 'east'], explanation: '450° = 360° + 90°. The first 360° is a full turn back to north, then the remaining 90° clockwise takes you to east.' },
        { difficulty: 'Hard', question: 'On a grid, the shop is at A1 and the school is at D4. If you can only move right or up, how many total steps (right + up) does it take to get from the shop to the school?', checkMode: 'auto', answer: '6', correctAnswer: '6', correctAnswers: ['6', 'six', '6 steps'], explanation: '3 columns right (A→D) + 3 rows up (1→4) = 6 steps in total.' },
        { difficulty: 'Hard', question: 'On a grid, the library is at B1 and the park is at E5. If you can only move right or up, how many total steps (right + up) does it take to get from the library to the park?', checkMode: 'auto', answer: '7', correctAnswer: '7', correctAnswers: ['7', 'seven', '7 steps'], explanation: '3 columns right (B→E) + 4 rows up (1→5) = 7 steps in total.' },
        { difficulty: 'Hard', question: 'A robot at grid reference C2 follows these instructions: move 2 right, move 1 up, move 1 left, move 2 up. What is its final grid reference?', checkMode: 'auto', answer: 'D5', correctAnswer: 'D5', correctAnswers: ['D5', 'd5'], explanation: 'C2 → 2 right → E2 → 1 up → E3 → 1 left → D3 → 2 up → D5.' },
        { difficulty: 'Hard', question: 'A robot at grid reference A1 follows these instructions: move 3 right, move 2 up, move 1 left, move 1 down. What is its final grid reference?', checkMode: 'auto', answer: 'C2', correctAnswer: 'C2', correctAnswers: ['C2', 'c2'], explanation: 'A1 → 3 right → D1 → 2 up → D3 → 1 left → C3 → 1 down → C2.' },
        { difficulty: 'Hard', question: 'Directions from home: "Face north. Walk 3 blocks. Turn right. Walk 2 blocks. Turn right. Walk 3 blocks." Which direction do you face at the end?', checkMode: 'auto', answer: 'South', correctAnswer: 'South', correctAnswers: ['South', 'south'], explanation: 'North → (turn right) → East → (turn right) → South. Two quarter turns clockwise take you from North to South.' },
        { difficulty: 'Hard', question: 'Using the same directions ("Face north. Walk 3 blocks. Turn right. Walk 2 blocks. Turn right. Walk 3 blocks."), how far north of the start are you at the end (net blocks north)?', checkMode: 'auto', answer: '0', correctAnswer: '0', correctAnswers: ['0', 'zero'], explanation: 'You walk 3 blocks north, then 2 blocks east (no north/south change), then 3 blocks south. 3 north − 3 south = 0 net blocks north.' },
        { difficulty: 'Hard', question: 'A shape is rotated a quarter turn clockwise, then another quarter turn clockwise, then another quarter turn clockwise. What single turn has the same overall effect?', checkMode: 'auto', answer: 'Three-quarter turn clockwise', correctAnswer: 'three-quarter turn clockwise', correctAnswers: ['three-quarter turn clockwise', 'threequarterturnclockwise', 'three quarter turn clockwise', '270 degree turn clockwise', '270° clockwise'], explanation: 'Three quarter turns clockwise = 90° × 3 = 270°, which is the same as one three-quarter turn clockwise.' },
        { difficulty: 'Hard', question: 'A shape is rotated a half turn, then another half turn. What single turn has the same overall effect?', checkMode: 'auto', answer: 'Full turn', correctAnswer: 'full turn', correctAnswers: ['full turn', 'fullturn', 'a full turn', '360 degree turn', '360°'], explanation: 'Two half turns = 180° + 180° = 360°, which is the same as one full turn (facing the original direction).' },
        { difficulty: 'Hard', question: 'Explain, in your own words, why a quarter turn clockwise from north gives east, using the clock-face idea (12, 3, 6, 9 o\'clock positions).', checkMode: 'self', answer: 'If north is at the 12 o\'clock position on a clock face, moving clockwise (the direction clock hands move) by a quarter turn moves you to the 3 o\'clock position, which is east. Clockwise order is North (12) → East (3) → South (6) → West (9) → back to North (12).' },
        { difficulty: 'Hard', question: 'Explain why turning right and then turning right again is the same as making a half turn.', checkMode: 'self', answer: 'Each right turn is a quarter turn clockwise, which is 90°. Two quarter turns clockwise in a row add up to 90° + 90° = 180°, and 180° is exactly what a half turn is, so the two combined turns have the same effect as one half turn.' },
        { difficulty: 'Hard', question: 'Explain how you would find the grid reference of a point that is 2 columns right and 3 rows up from B2, showing your steps.', checkMode: 'self', answer: 'Start at column B and move 2 columns to the right: B → C (1) → D (2), so the new column is D. Start at row 2 and move 3 rows up: 2 → 3 (1) → 4 (2) → 5 (3), so the new row is 5. Combining the new column and row gives the grid reference D5.' },
        { difficulty: 'Hard', question: 'Explain why "turn left" and "turn right" can lead to different final directions even though both are quarter turns.', checkMode: 'self', answer: 'Both turns are 90°, but they turn in opposite rotational directions — turning right is clockwise and turning left is anticlockwise. Because clockwise and anticlockwise move around the compass in opposite orders (N→E→S→W versus N→W→S→E), a quarter turn left and a quarter turn right from the same starting direction end up facing different, opposite-side directions.' },
        { difficulty: 'Hard', question: 'On a grid, point P is at C3. Point Q is 2 columns left and 2 rows down from P. Is Q at a valid position on a grid labelled A to E and 1 to 5? Explain your reasoning.', checkMode: 'self', answer: 'Moving 2 columns left from C gives A (C → B → A), and moving 2 rows down from 3 gives 1 (3 → 2 → 1). So Q is at A1, which is a valid position because A is within the A–E column range and 1 is within the 1–5 row range.' },
        { difficulty: 'Hard', question: 'A pigeon flies from D2, 3 columns left and 1 row up, to reach point R. Is R a valid position on a grid labelled A to D and 1 to 4? Explain your reasoning.', checkMode: 'self', answer: 'Moving 3 columns left from D gives A (D → C → B → A), and moving 1 row up from 2 gives 3. So R is at A3, which is valid because A is within the A–D range and 3 is within the 1–4 range.' },
        { difficulty: 'Hard', question: 'Lerato claims that a quarter turn clockwise and a quarter turn anticlockwise always end up facing the same direction. Is she correct? Explain your reasoning with an example.', checkMode: 'self', answer: 'Lerato is not correct. Starting facing north, a quarter turn clockwise gives east, but a quarter turn anticlockwise gives west — these are different (in fact opposite-side) directions. The two turns only give the same result overall if you do both turns one after another (clockwise then anticlockwise), because they would cancel out, but as single separate turns from the same start they point in different directions.' },
        { difficulty: 'Hard', question: 'Thabo says a half turn is always the same as two quarter turns in the same rotational direction. Is he correct? Explain your reasoning.', checkMode: 'self', answer: 'Thabo is correct. A quarter turn is 90°, so two quarter turns in the same direction (both clockwise or both anticlockwise) add up to 90° + 90° = 180°, which is exactly the size of a half turn. The final facing direction will match a half turn\'s result — the exact opposite of the starting direction.' },
        { difficulty: 'Hard', question: 'On a grid, describe two different paths (using only right and up moves) from A1 to C3, and explain why both use the same total number of steps.', checkMode: 'self', answer: 'One path: move 2 steps right first (A1 → B1 → C1), then 2 steps up (C1 → C2 → C3). Another path: move 2 steps up first (A1 → A2 → A3), then 2 steps right (A3 → B3 → C3). Both paths use 2 right moves and 2 up moves, giving 4 steps in total either way, because the total distance right and up needed does not change — only the order of the moves changes.' },
        { difficulty: 'Hard', question: 'A game character facing north moves through this sequence: quarter turn clockwise, quarter turn clockwise, quarter turn clockwise, quarter turn clockwise. Explain what happens to the direction the character faces and why.', checkMode: 'self', answer: 'Each quarter turn clockwise is 90°, so four of them add up to 90° × 4 = 360°, which is a full turn. This means the character ends up facing north again — the same direction it started — because a full turn always brings you back to your original direction.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered multi-step and combined position and movement problems.' },
        { minScore: 19, message: 'Great work! You can confidently combine grid moves and turns — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Revisit the multi-step worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

  ],
}
