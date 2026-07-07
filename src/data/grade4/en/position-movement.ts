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
    // SET 1
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 (0-3) Position words — Easy
        { difficulty: 'Easy', question: 'The lamp is higher up than the table. Which position word describes the lamp?', checkMode: 'auto', answer: 'Above', correctAnswer: 'above', correctAnswers: ['above'], explanation: '"Above" means at a higher position than another object.' },
        { difficulty: 'Easy', question: 'A teacher stands facing the class, with the board on the opposite side of the teacher. Which position word describes the board, in relation to the class?', checkMode: 'auto', answer: 'Behind', correctAnswer: 'behind', correctAnswers: ['behind'], explanation: 'The board is behind the teacher — on the far side, away from the class.' },
        { difficulty: 'Easy', question: 'The hospital is a long way from the school, but the spaza shop is only a short distance away. Which two position words correctly describe the hospital and the spaza shop?', checkMode: 'auto', answer: 'Far and near', correctAnswer: 'far and near', correctAnswers: ['far and near', 'far, near', 'far near'], explanation: 'The hospital is far (a long distance away) and the spaza shop is near (a short distance away).' },
        { difficulty: 'Easy', question: 'A cat sits between two dogs, with a bird above the cat. Which of these words would NOT correctly describe the bird\'s position — above, between, or higher up?', checkMode: 'auto', answer: 'Between', correctAnswer: 'between', correctAnswers: ['between'], explanation: 'The bird is above (higher up than) the cat, not between two things — "between" describes the cat\'s position, not the bird\'s.' },

        // Block 2 (4-7) Grid references — Easy — shared grid diagram (SET1_GRID)
        { difficulty: 'Easy', question: 'On a grid, columns run in which direction?', checkMode: 'auto', answer: 'Left to right', correctAnswer: 'left to right', correctAnswers: ['left to right', 'lefttoright', 'from left to right'], explanation: 'Columns run from left to right across a grid and are usually labelled with letters.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="127" y="80" text-anchor="middle" font-size="22">🏫</text><text x="57" y="115" text-anchor="middle" font-size="22">🏪</text><text x="162" y="150" text-anchor="middle" font-size="22">🌳</text></svg>' },
        { difficulty: 'Easy', question: 'Looking at the grid, what is the grid reference of the school icon?', checkMode: 'auto', answer: 'C3', correctAnswer: 'C3', correctAnswers: ['C3', 'c3'], explanation: 'The school is in column C, row 3, so its grid reference is C3 — column letter first, then row number.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="127" y="80" text-anchor="middle" font-size="22">🏫</text><text x="57" y="115" text-anchor="middle" font-size="22">🏪</text><text x="162" y="150" text-anchor="middle" font-size="22">🌳</text></svg>' },
        { difficulty: 'Easy', question: 'Looking at the grid, which icon is furthest to the left?', checkMode: 'auto', answer: 'Shop', correctAnswer: 'shop', correctAnswers: ['shop', 'the shop'], explanation: 'The shop is in column A, the leftmost column, so it is furthest to the left.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="127" y="80" text-anchor="middle" font-size="22">🏫</text><text x="57" y="115" text-anchor="middle" font-size="22">🏪</text><text x="162" y="150" text-anchor="middle" font-size="22">🌳</text></svg>' },
        { difficulty: 'Easy', question: 'On a grid labelled 1 to 4 up the side, which row is the lowest?', checkMode: 'auto', answer: 'Row 1', correctAnswer: '1', correctAnswers: ['1', 'one', 'row 1'], explanation: 'Rows are labelled starting from the bottom, so row 1 is the lowest row.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="127" y="80" text-anchor="middle" font-size="22">🏫</text><text x="57" y="115" text-anchor="middle" font-size="22">🏪</text><text x="162" y="150" text-anchor="middle" font-size="22">🌳</text></svg>' },

        // Block 3 (8-9) Turns and degrees — Easy-Medium
        { difficulty: 'Easy-Medium', question: 'A full turn is 360°, a half turn is 180°, and a quarter turn is 90°. Which of these three turns brings you back to face the same direction you started?', checkMode: 'auto', answer: 'Full turn', correctAnswer: 'full turn', correctAnswers: ['full turn', 'fullturn', 'a full turn', '360', '360°'], explanation: 'Only a full turn (360°) brings you all the way back around to face the same direction you started.' },
        { difficulty: 'Medium', question: 'Facing north, you make a half turn. Do you end up facing the same direction, the opposite direction, or a direction at a right angle to north?', checkMode: 'auto', answer: 'Opposite direction', correctAnswer: 'opposite direction', correctAnswers: ['opposite direction', 'oppositedirection', 'opposite', 'south'], explanation: 'A half turn (180°) always brings you to face the exact opposite direction — north becomes south.' },

        // Block 4 (10-13) Grid movement multi-step — Medium
        { difficulty: 'Medium', question: 'On a grid, the clinic is at column B, row 1. The market is 2 columns to the right and 3 rows up from the clinic. What is the market\'s grid reference?', checkMode: 'auto', answer: 'D4', correctAnswer: 'D4', correctAnswers: ['D4', 'd4'], explanation: '2 columns right from B: C (1), D (2). 3 rows up from 1: 2 (1), 3 (2), 4 (3). The market is at D4.' },
        { difficulty: 'Medium', question: 'Comparing grid references C1 and A4, is C1 to the right of A4, to the left of A4, or in the same column as A4?', checkMode: 'auto', answer: 'To the right of A4', correctAnswer: 'to the right of A4', correctAnswers: ['to the right of a4', 'right', 'to the right'], explanation: 'C comes after A when counting columns left to right, so C1 is to the right of A4 (regardless of row).' },
        { difficulty: 'Medium', question: 'On a grid, a well is at A1 and a hut is at D4. Moving only right or up, how many total steps does it take to get from the well to the hut?', checkMode: 'auto', answer: '6', correctAnswer: '6', correctAnswers: ['6', 'six', '6 steps'], explanation: '3 columns right (A→D) + 3 rows up (1→4) = 6 steps in total.' },
        { difficulty: 'Medium', question: 'A robot at grid reference B2 moves 2 columns right, then 1 row up. What is its new grid reference?', checkMode: 'auto', answer: 'D3', correctAnswer: 'D3', correctAnswers: ['D3', 'd3'], explanation: '2 columns right from B: C, D. 1 row up from 2 is 3. The new position is D3.' },

        // Block 5 (14-15) Clockwise/anticlockwise — Medium — shared compass diagram
        { difficulty: 'Medium', question: 'Facing north, you make a quarter turn clockwise. Which direction do you now face?', checkMode: 'auto', answer: 'East', correctAnswer: 'East', correctAnswers: ['East', 'east'], explanation: 'Going clockwise from north: North → East. A quarter turn clockwise lands on East.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">E</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Clockwise: N&#8594;E&#8594;S&#8594;W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Anticlockwise: N&#8594;W&#8594;S&#8594;E</text></svg>' },
        { difficulty: 'Medium', question: 'Facing south, you make a quarter turn anticlockwise. Which direction do you now face?', checkMode: 'auto', answer: 'East', correctAnswer: 'East', correctAnswers: ['East', 'east'], explanation: 'Going anticlockwise reverses the clockwise order (N→E→S→W), so South → East.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">E</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Clockwise: N&#8594;E&#8594;S&#8594;W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Anticlockwise: N&#8594;W&#8594;S&#8594;E</text></svg>' },

        // Block 6 (16-19) Word problems / error-spotting / multi-step / reasoning — Hard
        { difficulty: 'Hard', question: 'Starting at the school facing north, you walk 2 blocks, then turn right, then walk 1 more block, arriving at the clinic. Which direction are you facing when you arrive at the clinic?', checkMode: 'auto', answer: 'East', correctAnswer: 'East', correctAnswers: ['East', 'east'], explanation: 'Turning right from north is a quarter turn clockwise: North → East. You are facing east when you arrive.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="140" r="6" fill="#0f1f3d"/><text x="60" y="158" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">School</text><line x1="60" y1="140" x2="60" y2="60" stroke="#2563eb" stroke-width="2.5" marker-end="url(#r1a)"/><text x="48" y="100" text-anchor="end" font-size="12" font-weight="700" fill="#2563eb">2 blocks N</text><line x1="60" y1="60" x2="150" y2="60" stroke="#16a34a" stroke-width="2.5" marker-end="url(#r1b)"/><text x="105" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">1 block E</text><circle cx="150" cy="60" r="6" fill="#dc2626"/><text x="150" y="42" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">Clinic</text><defs><marker id="r1a" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#2563eb"/></marker><marker id="r1b" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#16a34a"/></marker></defs></svg>' },
        { difficulty: 'Hard', question: 'Lerato claims that "next to" and "between" mean exactly the same thing, since both describe things that are close together. Is she correct? Explain your reasoning.', checkMode: 'self', answer: 'Lerato is not correct. "Next to" means directly beside just one other object, but "between" means in the middle of two objects, with one on each side. For example, a pencil can be next to a ruler (one object), but an eraser between a pencil and a pen must have something on both sides — these are different relationships, not the same thing.' },
        { difficulty: 'Hard', question: 'A robot at grid reference A1 follows these instructions: move 2 right, move 2 up, move 1 left, move 1 down. What is its final grid reference?', checkMode: 'auto', answer: 'B2', correctAnswer: 'B2', correctAnswers: ['B2', 'b2'], explanation: 'A1 → 2 right → C1 → 2 up → C3 → 1 left → B3 → 1 down → B2.' },
        { difficulty: 'Hard', question: 'Explain why "turn left" and "turn right" can lead to different final directions, even though both are quarter turns of the same size.', checkMode: 'self', answer: 'Both turns are 90°, but they rotate in opposite directions — turning right is clockwise and turning left is anticlockwise. Because clockwise order (N→E→S→W) and anticlockwise order (N→W→S→E) go around the compass in opposite sequences, a quarter turn left and a quarter turn right from the same starting direction end up facing different, opposite-side directions.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered position and movement.' },
        { minScore: 15, message: 'Great work! You understand position words, grids, turns and directions well — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Go back over the position and movement sections and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 (0-3) Position words — Easy
        { difficulty: 'Easy', question: 'The carpet is lower down than the chair. Which position word describes the carpet?', checkMode: 'auto', answer: 'Below', correctAnswer: 'below', correctAnswers: ['below'], explanation: '"Below" means at a lower position than another object.' },
        { difficulty: 'Easy', question: 'The eraser has the pencil on one side and the pen on the other side. Which position word describes the eraser?', checkMode: 'auto', answer: 'Between', correctAnswer: 'between', correctAnswers: ['between'], explanation: '"Between" means in the middle of two things, with one on each side.' },
        { difficulty: 'Easy', question: 'A ball rests directly on the surface of a table, with the table itself standing on the floor. Which position word describes the ball\'s relationship to the table?', checkMode: 'auto', answer: 'On top of', correctAnswer: 'on top of', correctAnswers: ['on top of', 'ontopof', 'on top'], explanation: '"On top of" means resting directly on the surface of something.' },
        { difficulty: 'Easy', question: 'A dog sits next to a gate, and a cat sits far from both of them, near the fence at the back of the yard. Describe the cat\'s position using two position words together.', checkMode: 'auto', answer: 'Far from the dog and gate, and near the fence', correctAnswer: 'far and near', correctAnswers: ['far and near', 'far near', 'far, near'], explanation: 'The cat is far from the dog and gate, but near the fence — two position words are needed to describe it precisely.' },

        // Block 2 (4-7) Grid references — Easy — shared grid diagram (SET2_GRID)
        { difficulty: 'Easy', question: 'On a grid, rows run in which direction?', checkMode: 'auto', answer: 'Bottom to top', correctAnswer: 'bottom to top', correctAnswers: ['bottom to top', 'bottomtotop', 'from bottom to top'], explanation: 'Rows run from bottom to top up a grid and are usually labelled with numbers.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="92" y="45" text-anchor="middle" font-size="22">🏠</text><text x="162" y="115" text-anchor="middle" font-size="22">🪣</text><text x="57" y="150" text-anchor="middle" font-size="22">🪑</text></svg>' },
        { difficulty: 'Easy', question: 'Looking at the grid, what is the grid reference of the house icon?', checkMode: 'auto', answer: 'B4', correctAnswer: 'B4', correctAnswers: ['B4', 'b4'], explanation: 'The house is in column B, row 4, so its grid reference is B4 — column letter first, then row number.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="92" y="45" text-anchor="middle" font-size="22">🏠</text><text x="162" y="115" text-anchor="middle" font-size="22">🪣</text><text x="57" y="150" text-anchor="middle" font-size="22">🪑</text></svg>' },
        { difficulty: 'Easy', question: 'Looking at the grid, which icon is in the highest row?', checkMode: 'auto', answer: 'House', correctAnswer: 'house', correctAnswers: ['house', 'the house'], explanation: 'The house is in row 4, the highest row on this grid, so it is highest up.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="92" y="45" text-anchor="middle" font-size="22">🏠</text><text x="162" y="115" text-anchor="middle" font-size="22">🪣</text><text x="57" y="150" text-anchor="middle" font-size="22">🪑</text></svg>' },
        { difficulty: 'Easy', question: 'In a grid reference like D2, which part tells you the column — the letter or the number?', checkMode: 'auto', answer: 'Letter', correctAnswer: 'letter', correctAnswers: ['letter', 'the letter'], explanation: 'A grid reference always gives the column letter first, then the row number — the letter tells you the column.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="92" y="45" text-anchor="middle" font-size="22">🏠</text><text x="162" y="115" text-anchor="middle" font-size="22">🪣</text><text x="57" y="150" text-anchor="middle" font-size="22">🪑</text></svg>' },

        // Block 3 (8-9) Turns and degrees — Easy-Medium
        { difficulty: 'Easy-Medium', question: 'A full turn is 360°, a half turn is half of that, and a quarter turn is half of a half turn. What is a quarter turn in degrees?', checkMode: 'auto', answer: '90°', correctAnswer: '90', correctAnswers: ['90', '90 degrees', '90°'], explanation: 'A half turn is 360° ÷ 2 = 180°. A quarter turn is half of that: 180° ÷ 2 = 90°.' },
        { difficulty: 'Medium', question: 'Facing east, you make a half turn. Do you end up facing the same direction, the opposite direction, or a direction at a right angle to east?', checkMode: 'auto', answer: 'Opposite direction', correctAnswer: 'opposite direction', correctAnswers: ['opposite direction', 'oppositedirection', 'opposite', 'west'], explanation: 'A half turn (180°) always brings you to face the exact opposite direction — east becomes west.' },

        // Block 4 (10-13) Grid movement multi-step — Medium
        { difficulty: 'Medium', question: 'On a grid, the library is at column A, row 2. The gate is 3 columns to the right and 1 row up from the library. What is the gate\'s grid reference?', checkMode: 'auto', answer: 'D3', correctAnswer: 'D3', correctAnswers: ['D3', 'd3'], explanation: '3 columns right from A: B (1), C (2), D (3). 1 row up from 2 is 3. The gate is at D3.' },
        { difficulty: 'Medium', question: 'Comparing grid references B3 and B1, is B3 higher up, lower down, or in the same row as B1?', checkMode: 'auto', answer: 'Higher up', correctAnswer: 'higher up', correctAnswers: ['higher up', 'higher', 'higherup'], explanation: 'Row 3 is above row 1 since rows increase going up, so B3 is higher up than B1.' },
        { difficulty: 'Medium', question: 'On a grid, a spaza shop is at B1 and a taxi rank is at D4. Moving only right or up, how many total steps does it take to get from the spaza shop to the taxi rank?', checkMode: 'auto', answer: '5', correctAnswer: '5', correctAnswers: ['5', 'five', '5 steps'], explanation: '2 columns right (B→D) + 3 rows up (1→4) = 5 steps in total.' },
        { difficulty: 'Medium', question: 'A robot at grid reference C1 moves 1 column left, then 3 rows up. What is its new grid reference?', checkMode: 'auto', answer: 'B4', correctAnswer: 'B4', correctAnswers: ['B4', 'b4'], explanation: '1 column left from C is B. 3 rows up from 1: 2, 3, 4. The new position is B4.' },

        // Block 5 (14-15) Clockwise/anticlockwise — Medium — shared compass diagram
        { difficulty: 'Medium', question: 'Facing west, you make a quarter turn clockwise. Which direction do you now face?', checkMode: 'auto', answer: 'North', correctAnswer: 'North', correctAnswers: ['North', 'north'], explanation: 'Going clockwise: South → West → North. A quarter turn clockwise from West lands on North.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">E</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Clockwise: N&#8594;E&#8594;S&#8594;W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Anticlockwise: N&#8594;W&#8594;S&#8594;E</text></svg>' },
        { difficulty: 'Medium', question: 'Facing east, you make a quarter turn anticlockwise. Which direction do you now face?', checkMode: 'auto', answer: 'North', correctAnswer: 'North', correctAnswers: ['North', 'north'], explanation: 'Going anticlockwise reverses the clockwise order, so East → North.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">E</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Clockwise: N&#8594;E&#8594;S&#8594;W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Anticlockwise: N&#8594;W&#8594;S&#8594;E</text></svg>' },

        // Block 6 (16-19) Word problems / error-spotting / multi-step / reasoning — Hard
        { difficulty: 'Hard', question: 'Starting at the house facing east, you walk 3 blocks, then turn right, then walk 2 more blocks, arriving at the spaza shop. Which direction are you facing when you arrive at the spaza shop?', checkMode: 'auto', answer: 'South', correctAnswer: 'South', correctAnswers: ['South', 'south'], explanation: 'Turning right from east is a quarter turn clockwise: East → South. You are facing south when you arrive.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="50" r="6" fill="#0f1f3d"/><text x="40" y="35" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">House</text><line x1="40" y1="50" x2="160" y2="50" stroke="#2563eb" stroke-width="2.5" marker-end="url(#r2a)"/><text x="100" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">3 blocks E</text><line x1="160" y1="50" x2="160" y2="130" stroke="#16a34a" stroke-width="2.5" marker-end="url(#r2b)"/><text x="172" y="95" text-anchor="start" font-size="12" font-weight="700" fill="#16a34a">2 blocks S</text><circle cx="160" cy="130" r="6" fill="#dc2626"/><text x="160" y="148" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">Spaza shop</text><defs><marker id="r2a" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#2563eb"/></marker><marker id="r2b" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#16a34a"/></marker></defs></svg>' },
        { difficulty: 'Hard', question: 'Thabo claims that turning right twice in a row always makes you end up facing north, no matter which direction you started facing. Is he correct? Explain your reasoning.', checkMode: 'self', answer: 'Thabo is not correct. Turning right twice is two quarter turns clockwise, which add up to a half turn (180°) — this always makes you face the exact opposite of your starting direction, not always north specifically. For example, starting facing east and turning right twice lands you facing west, not north. It only results in facing north if you started facing south.' },
        { difficulty: 'Hard', question: 'A robot at grid reference B1 follows these instructions: move 1 right, move 3 up, move 2 left, move 1 down. What is its final grid reference?', checkMode: 'auto', answer: 'A3', correctAnswer: 'A3', correctAnswers: ['A3', 'a3'], explanation: 'B1 → 1 right → C1 → 3 up → C4 → 2 left → A4 → 1 down → A3.' },
        { difficulty: 'Hard', question: 'Explain how you would find the grid reference of a point that is 3 columns right and 2 rows up from A1, showing your steps.', checkMode: 'self', answer: 'Start at column A and move 3 columns to the right: A → B (1) → C (2) → D (3), so the new column is D. Start at row 1 and move 2 rows up: 1 → 2 (1) → 3 (2), so the new row is 3. Combining the new column and row gives the grid reference D3.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered position and movement.' },
        { minScore: 15, message: 'Great work! You understand position words, grids, turns and directions well — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Go back over the position and movement sections and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 (0-3) Position words — Easy
        { difficulty: 'Easy', question: 'The window is on the left-hand side of the wall and the door is on the other side. Which position word describes the door?', checkMode: 'auto', answer: 'Right', correctAnswer: 'right', correctAnswers: ['right', 'to the right'], explanation: 'If the window is on the left, the door on the other side is to the right.' },
        { difficulty: 'Easy', question: 'The pencil is directly beside the ruler, with nothing between them. Which position word describes this?', checkMode: 'auto', answer: 'Next to', correctAnswer: 'next to', correctAnswers: ['next to', 'nextto'], explanation: '"Next to" means directly beside something, with no gap or object between them.' },
        { difficulty: 'Easy', question: 'A shop is a short distance from a school, and a taxi rank is a long distance from the school. Which two position words correctly describe the shop and the taxi rank?', checkMode: 'auto', answer: 'Near and far', correctAnswer: 'near and far', correctAnswers: ['near and far', 'near, far', 'near far'], explanation: 'The shop is near (a short distance away) and the taxi rank is far (a long distance away).' },
        { difficulty: 'Easy', question: 'A vase sits on top of a table, with a lamp above the vase and a rug below the table. Which of these words would NOT correctly describe the lamp\'s position — above, higher up, or on top of?', checkMode: 'auto', answer: 'On top of', correctAnswer: 'on top of', correctAnswers: ['on top of', 'ontopof'], explanation: 'The lamp is above (higher up than) the vase, but it is not resting on top of it — "on top of" describes the vase\'s relationship to the table, not the lamp\'s position.' },

        // Block 2 (4-7) Grid references — Easy — shared grid diagram (SET3_GRID)
        { difficulty: 'Easy', question: 'On a grid, a chair is at column C, row 1. What is the grid reference?', checkMode: 'auto', answer: 'C1', correctAnswer: 'C1', correctAnswers: ['C1', 'c1'], explanation: 'The column letter comes first (C), then the row number (1), giving C1.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="57" y="80" text-anchor="middle" font-size="22">🚧</text><text x="127" y="150" text-anchor="middle" font-size="22">🪑</text><text x="162" y="45" text-anchor="middle" font-size="22">🐦</text></svg>' },
        { difficulty: 'Easy', question: 'Looking at the grid, what is the grid reference of the gate icon?', checkMode: 'auto', answer: 'A3', correctAnswer: 'A3', correctAnswers: ['A3', 'a3'], explanation: 'The gate is in column A, row 3, so its grid reference is A3 — column letter first, then row number.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="57" y="80" text-anchor="middle" font-size="22">🚧</text><text x="127" y="150" text-anchor="middle" font-size="22">🪑</text><text x="162" y="45" text-anchor="middle" font-size="22">🐦</text></svg>' },
        { difficulty: 'Easy', question: 'Looking at the grid, which icon is furthest to the right?', checkMode: 'auto', answer: 'Bird', correctAnswer: 'bird', correctAnswers: ['bird', 'the bird'], explanation: 'The bird is in column D, the rightmost column, so it is furthest to the right.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="57" y="80" text-anchor="middle" font-size="22">🚧</text><text x="127" y="150" text-anchor="middle" font-size="22">🪑</text><text x="162" y="45" text-anchor="middle" font-size="22">🐦</text></svg>' },
        { difficulty: 'Easy', question: 'On a grid labelled A to D across the bottom, which column is furthest to the left?', checkMode: 'auto', answer: 'Column A', correctAnswer: 'A', correctAnswers: ['A', 'a', 'column A'], explanation: 'Columns are labelled starting from the left, so A is the leftmost column.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="57" y="80" text-anchor="middle" font-size="22">🚧</text><text x="127" y="150" text-anchor="middle" font-size="22">🪑</text><text x="162" y="45" text-anchor="middle" font-size="22">🐦</text></svg>' },

        // Block 3 (8-9) Turns and degrees — Easy-Medium
        { difficulty: 'Easy-Medium', question: 'Put these turns in order from smallest to largest: half turn, quarter turn, full turn.', checkMode: 'auto', answer: 'Quarter turn, half turn, full turn', correctAnswer: 'quarter turn, half turn, full turn', correctAnswers: ['quarter turn, half turn, full turn', 'quarter, half, full'], explanation: 'A quarter turn is 90°, a half turn is 180°, and a full turn is 360°, so from smallest to largest: quarter, half, full.' },
        { difficulty: 'Medium', question: 'Facing west, you make a half turn. Do you end up facing the same direction, the opposite direction, or a direction at a right angle to west?', checkMode: 'auto', answer: 'Opposite direction', correctAnswer: 'opposite direction', correctAnswers: ['opposite direction', 'oppositedirection', 'opposite', 'east'], explanation: 'A half turn (180°) always brings you to face the exact opposite direction — west becomes east.' },

        // Block 4 (10-13) Grid movement multi-step — Medium
        { difficulty: 'Medium', question: 'On a grid, the bench is at column A, row 3. The pond is 2 columns to the right and 2 rows down from the bench. What is the pond\'s grid reference?', checkMode: 'auto', answer: 'C1', correctAnswer: 'C1', correctAnswers: ['C1', 'c1'], explanation: '2 columns right from A: B (1), C (2). 2 rows down from 3: 2 (1), 1 (2). The pond is at C1.' },
        { difficulty: 'Medium', question: 'Comparing grid references D2 and D2, are these two grid references the same position, different columns, or different rows?', checkMode: 'auto', answer: 'The same position', correctAnswer: 'the same position', correctAnswers: ['the same position', 'same position', 'same'], explanation: 'Identical grid references (same letter and same number) always describe the exact same position.' },
        { difficulty: 'Medium', question: 'On a grid, a gate is at A1 and a pond is at C4. Moving only right or up, how many total steps does it take to get from the gate to the pond?', checkMode: 'auto', answer: '5', correctAnswer: '5', correctAnswers: ['5', 'five', '5 steps'], explanation: '2 columns right (A→C) + 3 rows up (1→4) = 5 steps in total.' },
        { difficulty: 'Medium', question: 'A robot at grid reference D1 moves 2 columns left, then 2 rows up. What is its new grid reference?', checkMode: 'auto', answer: 'B3', correctAnswer: 'B3', correctAnswers: ['B3', 'b3'], explanation: '2 columns left from D: C, B. 2 rows up from 1: 2, 3. The new position is B3.' },

        // Block 5 (14-15) Clockwise/anticlockwise — Medium — shared compass diagram
        { difficulty: 'Medium', question: 'Facing south, you make a quarter turn clockwise. Which direction do you now face?', checkMode: 'auto', answer: 'West', correctAnswer: 'West', correctAnswers: ['West', 'west'], explanation: 'Going clockwise: East → South → West. A quarter turn clockwise from South lands on West.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">E</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Clockwise: N&#8594;E&#8594;S&#8594;W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Anticlockwise: N&#8594;W&#8594;S&#8594;E</text></svg>' },
        { difficulty: 'Medium', question: 'Facing north, you make a quarter turn anticlockwise. Which direction do you now face?', checkMode: 'auto', answer: 'West', correctAnswer: 'West', correctAnswers: ['West', 'west'], explanation: 'Going anticlockwise from north: North → West. A quarter turn anticlockwise lands on West.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">E</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Clockwise: N&#8594;E&#8594;S&#8594;W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Anticlockwise: N&#8594;W&#8594;S&#8594;E</text></svg>' },

        // Block 6 (16-19) Word problems / error-spotting / multi-step / reasoning — Hard
        { difficulty: 'Hard', question: 'Starting at the library facing south, you walk 2 blocks, then turn left, then walk 3 more blocks, arriving at the park. Which direction are you facing when you arrive at the park?', checkMode: 'auto', answer: 'East', correctAnswer: 'East', correctAnswers: ['East', 'east'], explanation: 'Turning left from south is a quarter turn anticlockwise: South → East. You are facing east when you arrive.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="30" r="6" fill="#0f1f3d"/><text x="50" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">Library</text><line x1="50" y1="30" x2="50" y2="110" stroke="#2563eb" stroke-width="2.5" marker-end="url(#r3a)"/><text x="38" y="75" text-anchor="end" font-size="12" font-weight="700" fill="#2563eb">2 blocks S</text><line x1="50" y1="110" x2="170" y2="110" stroke="#16a34a" stroke-width="2.5" marker-end="url(#r3b)"/><text x="110" y="128" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">3 blocks E</text><circle cx="170" cy="110" r="6" fill="#dc2626"/><text x="170" y="95" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">Park</text><defs><marker id="r3a" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#2563eb"/></marker><marker id="r3b" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#16a34a"/></marker></defs></svg>' },
        { difficulty: 'Hard', question: 'Sipho claims that in a grid reference like B3, the number always comes before the letter when you write it down. Is he correct? Explain your reasoning.', checkMode: 'self', answer: 'Sipho is not correct. A grid reference always gives the column letter first and the row number second — for example, B3 means column B, then row 3, not the other way around. Writing "3B" instead of "B3" would be reading the reference in the wrong order.' },
        { difficulty: 'Hard', question: 'A robot at grid reference C2 follows these instructions: move 1 right, move 2 up, move 2 left, move 1 down. What is its final grid reference?', checkMode: 'auto', answer: 'B3', correctAnswer: 'B3', correctAnswers: ['B3', 'b3'], explanation: 'C2 → 1 right → D2 → 2 up → D4 → 2 left → B4 → 1 down → B3.' },
        { difficulty: 'Hard', question: 'Explain why a quarter turn clockwise from north gives east, using the clock-face idea (12, 3, 6, 9 o\'clock positions).', checkMode: 'self', answer: 'If north is at the 12 o\'clock position on a clock face, moving clockwise (the direction clock hands move) by a quarter turn moves you to the 3 o\'clock position, which is east. Clockwise order is North (12) → East (3) → South (6) → West (9) → back to North (12).' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered position and movement.' },
        { minScore: 15, message: 'Great work! You understand position words, grids, turns and directions well — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Go back over the position and movement sections and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

  ],

}
