import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Transformations',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT ARE TRANSFORMATIONS?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-are-transformations',
      title: 'What Are Transformations?',
      icon: '🔀',
      explanation: `
<p style="margin-bottom:14px;">A <strong>transformation</strong> is a way of <strong>moving or changing the position of a shape</strong> without changing its size. No matter what transformation you apply, the shape you finish with is exactly the same size and shape as the one you started with — only its <strong>position or orientation</strong> may be different.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Key rule 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">After any transformation, the shape stays exactly the same <strong>size</strong> and <strong>shape</strong>. Only its <strong>position</strong> (where it is) or <strong>orientation</strong> (which way it faces) changes. Think of picking up a puzzle piece and moving it — it is still the same piece.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">The three types of transformation</div>
  <div style="display:flex;flex-direction:column;gap:14px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Translation<br/><span style="font-weight:400;font-size:12px;">(sliding)</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong style="color:#1e40af;">Moving a shape in any direction</strong> — up, down, left, right or diagonally — without turning it or flipping it. The shape slides along as if on a flat surface. Every point on the shape moves the <strong>same distance</strong> in the <strong>same direction</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Reflection<br/><span style="font-weight:400;font-size:12px;">(flipping)</span></span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong style="color:#dc2626;">Flipping a shape over a line</strong> (called the mirror line or line of reflection) to create a <strong>mirror image</strong> on the other side. The reflected shape faces the opposite direction. The distance from each point to the mirror line stays the same on both sides.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Rotation<br/><span style="font-weight:400;font-size:12px;">(turning)</span></span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Turning a shape around a fixed point</strong> called the centre of rotation. The shape can turn clockwise or anticlockwise by a quarter turn (90°), half turn (180°) or full turn (360°). The shape does not change size — it only changes which way it is facing.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Quick comparison</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:10px 14px;text-align:left;color:#1e40af;font-weight:700;">Transformation</th>
          <th style="padding:10px 14px;text-align:left;color:#1e40af;font-weight:700;">Other name</th>
          <th style="padding:10px 14px;text-align:left;color:#1e40af;font-weight:700;">What happens</th>
          <th style="padding:10px 14px;text-align:left;color:#1e40af;font-weight:700;">Size changes?</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:700;color:#1e40af;">Translation</td>
          <td style="padding:10px 14px;color:#64748b;">Sliding</td>
          <td style="padding:10px 14px;color:#475569;">Shape moves to a new position</td>
          <td style="padding:10px 14px;color:#16a34a;font-weight:700;">No</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:700;color:#dc2626;">Reflection</td>
          <td style="padding:10px 14px;color:#64748b;">Flipping</td>
          <td style="padding:10px 14px;color:#475569;">Shape flips to create a mirror image</td>
          <td style="padding:10px 14px;color:#16a34a;font-weight:700;">No</td>
        </tr>
        <tr>
          <td style="padding:10px 14px;font-weight:700;color:#16a34a;">Rotation</td>
          <td style="padding:10px 14px;color:#64748b;">Turning</td>
          <td style="padding:10px 14px;color:#475569;">Shape turns around a fixed point</td>
          <td style="padding:10px 14px;color:#16a34a;font-weight:700;">No</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'A square is moved 3 blocks to the right. What type of transformation is this?',
          steps: [
            'Ask: is the shape <strong style="color:#1e40af;">sliding</strong> without turning or flipping?',
            'The square moves 3 blocks to the right — every corner moves the same distance in the same direction.',
            'There is no flipping over a line and no turning around a point.',
            'Moving without turning or flipping is a <strong style="color:#1e40af;">translation</strong>.',
          ],
          answer: 'Translation. The square slides to the right without turning or flipping.',
        },
        {
          question: 'A triangle is flipped over a vertical line. What type of transformation is this?',
          steps: [
            'Ask: is the shape being <strong style="color:#dc2626;">flipped</strong> over a line?',
            'The triangle flips over a vertical line — it creates a mirror image on the other side.',
            'The triangle now faces the opposite direction, as if looking in a mirror.',
            'Flipping over a line is a <strong style="color:#dc2626;">reflection</strong>.',
          ],
          answer: 'Reflection. The triangle creates a mirror image on the other side of the line.',
        },
      ],
      practiceQuestions: [],
      videoPlaceholder:
        'Short video introducing the three types of transformations — translation, reflection and rotation — with simple shape examples',
      diagramPlaceholder:
        'Three side-by-side examples showing the same L-shape — first being slid right (translation), then flipped over a line (reflection), then rotated 90 degrees (rotation)',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — TRANSLATION (SLIDING)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'translation-sliding',
      title: 'Translation (Sliding)',
      icon: '➡️',
      explanation: `
<p style="margin-bottom:14px;"><strong>Translation</strong> means <strong>sliding a shape from one position to another</strong>. When a shape is translated, it does not turn and it does not flip — it simply moves. Every single point on the shape travels the <strong>same distance</strong> in the <strong>same direction</strong>, so the shape looks identical when it arrives at its new position.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Key rule 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">In a translation the shape <strong>does not rotate</strong> and <strong>does not flip</strong>. The original shape (<strong style="color:#1e40af;">blue</strong>) and the translated shape (<strong style="color:#16a34a;">green</strong>) are identical — same size, same angles, same side lengths, just in a different place.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How to describe a translation</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Say how many units</strong> the shape moved — count the squares on the grid.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Say which direction</strong> it moved — <strong style="color:#dc2626;">left</strong>, <strong style="color:#dc2626;">right</strong>, <strong style="color:#dc2626;">up</strong> or <strong style="color:#dc2626;">down</strong> (or a combination of two directions).</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Example</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">"The shape moved <strong>4 units to the right</strong> and <strong>2 units up</strong>." — this fully describes the translation.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Colour guide for diagrams</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:3px;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blue = original shape</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:3px;background:#16a34a;display:inline-block;"></span>
      <span style="color:#16a34a;font-weight:700;">Green = translated shape</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Red arrow = direction of movement</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'A rectangle is at position A on a grid. It is translated 5 units to the right and 3 units down. Describe what happens to each corner.',
          steps: [
            'In a translation, <strong style="color:#1e40af;">every corner moves exactly the same distance in the same direction</strong>.',
            'Each corner moves <strong style="color:#dc2626;">5 units to the right</strong> and <strong style="color:#dc2626;">3 units down</strong>.',
            'The shape looks <strong>identical</strong> in its new position — same size, same shape, same orientation.',
            'Only the <strong style="color:#16a34a;">position</strong> has changed. The rectangle has not been rotated or flipped.',
          ],
          answer:
            'The rectangle slides to a new position. All corners move 5 units right and 3 units down. The shape is unchanged in size and orientation.',
        },
        {
          question:
            'A triangle has a corner at (2, 3) on a grid. It is translated 4 units left and 1 unit up. Where is that corner now?',
          steps: [
            '<strong style="color:#dc2626;">Move 4 units left</strong> — start at column 2 and count 4 blocks to the left. The corner moves to column position 2 − 4, which is 4 blocks left of where it started.',
            '<strong style="color:#dc2626;">Move 1 unit up</strong> — start at row 3 and count 1 block up. The new row is 3 + 1 = <strong>4</strong>.',
            'The corner is now at a position <strong>4 blocks to the left</strong> and <strong>1 block higher</strong> than before.',
          ],
          answer:
            'The corner is now 4 blocks to the left and 1 block higher than its original position.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Grid showing a blue rectangle in its original position with a green rectangle showing where it lands after sliding 5 units right and 3 units down, with a red arrow showing the direction of movement',
      videoPlaceholder:
        'Short video showing translation of shapes on a grid, explaining that every point moves the same distance in the same direction',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — REFLECTION (FLIPPING)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reflection-flipping',
      title: 'Reflection (Flipping)',
      icon: '🪞',
      explanation: `
<p style="margin-bottom:14px;"><strong>Reflection</strong> means <strong>flipping a shape over a line</strong> to create a <strong>mirror image</strong> on the other side. The line it flips over is called the <strong>line of reflection</strong> or <strong>mirror line</strong>. Think of holding a shape up to a mirror — the reflection is the same shape but facing the opposite direction.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Key rule 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">Each point of the shape is <strong>the same distance from the mirror line</strong> on both sides. If a corner is 3 blocks to the left of the line, its mirror image will be exactly 3 blocks to the right. The original (<strong style="color:#1e40af;">blue</strong>) and reflected shape (<strong style="color:#16a34a;">green</strong>) are always the same size.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Rules of reflection</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">The reflected shape is the <strong>same size and shape</strong> as the original — it is a perfect mirror image.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">The reflected shape <strong>faces the opposite direction</strong> — it is flipped, not just moved.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Each point</strong> of the original shape is the same distance from the <strong style="color:#dc2626;">mirror line</strong> as the corresponding point of the reflected shape.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">The <strong style="color:#dc2626;">mirror line</strong> can be <strong>vertical</strong> (up-down), <strong>horizontal</strong> (left-right) or <strong>diagonal</strong>.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Colour guide for diagrams</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:3px;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blue = original shape</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:3px;background:#16a34a;display:inline-block;"></span>
      <span style="color:#16a34a;font-weight:700;">Green = reflected shape</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:3px;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Red line = mirror line</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'A triangle is reflected over a vertical mirror line. Describe what happens.',
          steps: [
            '<strong style="color:#1e40af;">Measure each corner</strong> of the triangle from the <strong style="color:#dc2626;">mirror line</strong> — count how many blocks each corner is from the line.',
            '<strong style="color:#16a34a;">Draw the mirror image</strong> — plot each corner the same number of blocks on the other side of the mirror line.',
            'Join the corners to complete the reflected triangle.',
            'The reflected triangle now <strong>faces the opposite direction</strong> — it is a mirror image.',
          ],
          answer:
            'The reflected triangle is a mirror image — the same size and shape as the original, but facing the opposite way.',
        },
        {
          question:
            'A shape has a corner 3 blocks to the left of a vertical mirror line. Where is the mirror image of that corner?',
          steps: [
            'The corner is <strong style="color:#1e40af;">3 blocks to the left</strong> of the <strong style="color:#dc2626;">mirror line</strong>.',
            'The rule of reflection: each point is the <strong>same distance</strong> from the mirror line on both sides.',
            'So the mirror image of that corner must be <strong style="color:#16a34a;">3 blocks to the right</strong> of the mirror line.',
          ],
          answer: 'The mirror image of that corner is 3 blocks to the right of the mirror line.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Grid showing a blue arrow shape on the left of a vertical red mirror line with its green reflected image on the right, with equal distances from each corner to the line marked',
      videoPlaceholder:
        'Short video showing reflection of shapes over vertical and horizontal mirror lines, explaining that each point is the same distance from the mirror line on both sides',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — ROTATION (TURNING)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rotation-turning',
      title: 'Rotation (Turning)',
      icon: '🔄',
      explanation: `
<p style="margin-bottom:14px;"><strong>Rotation</strong> means <strong>turning a shape around a fixed point</strong>. That fixed point is called the <strong>centre of rotation</strong>. The shape spins like a wheel around this point — every part of the shape turns by the same angle. The size and shape of the figure never changes during rotation.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Key rule 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">The original shape (<strong style="color:#1e40af;">blue</strong>) and the rotated shape (<strong style="color:#16a34a;">green</strong>) are always the same size. Only the <strong>orientation</strong> (which way the shape faces) changes. The <strong style="color:#dc2626;">centre of rotation</strong> stays fixed — it does not move at all.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Key terms</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Centre of rotation</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">The <strong style="color:#dc2626;">fixed point</strong> that the shape turns around. It can be inside the shape, on the edge, or outside the shape entirely.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Direction</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Clockwise</strong> — turning in the same direction as clock hands (right, then down, then left, then up). <strong>Anticlockwise</strong> — turning in the opposite direction.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Angle of rotation</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">How far the shape turns: <strong style="color:#16a34a;">quarter turn = 90°</strong>, <strong style="color:#16a34a;">half turn = 180°</strong>, <strong style="color:#16a34a;">full turn = 360°</strong>.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Rotation summary table</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:10px 14px;text-align:left;color:#1e40af;font-weight:700;">Turn</th>
          <th style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;">Degrees</th>
          <th style="padding:10px 14px;text-align:left;color:#1e40af;font-weight:700;">What it looks like</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:700;color:#16a34a;">Quarter turn</td>
          <td style="padding:10px 14px;text-align:center;font-weight:700;color:#0f1f3d;">90°</td>
          <td style="padding:10px 14px;color:#475569;">Shape has turned once to the right (or left). Like a clock hand moving from 12 to 3.</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:700;color:#1e40af;">Half turn</td>
          <td style="padding:10px 14px;text-align:center;font-weight:700;color:#0f1f3d;">180°</td>
          <td style="padding:10px 14px;color:#475569;">Shape appears upside down compared to the original. Like a clock hand moving from 12 to 6.</td>
        </tr>
        <tr>
          <td style="padding:10px 14px;font-weight:700;color:#dc2626;">Full turn</td>
          <td style="padding:10px 14px;text-align:center;font-weight:700;color:#0f1f3d;">360°</td>
          <td style="padding:10px 14px;color:#475569;">Shape returns to exactly where it started — it looks the same as the original.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'A square is rotated a quarter turn clockwise around its centre. Describe what happens.',
          steps: [
            'The square turns <strong style="color:#16a34a;">90° clockwise</strong> around its centre.',
            'The size and shape stay exactly the same — all four sides are still equal and all four angles are still 90°.',
            'Because a square has <strong>4 equal sides and 4 equal angles</strong>, a quarter turn produces a shape that looks identical to the original.',
          ],
          answer:
            'The square looks unchanged after a quarter turn because it has 4 equal sides and 4 equal angles — it has rotational symmetry.',
        },
        {
          question:
            'An L-shape is rotated a half turn clockwise. Describe what the rotated shape looks like.',
          steps: [
            'The L-shape turns <strong style="color:#1e40af;">180° clockwise</strong> around the centre of rotation.',
            'The shape is now <strong>upside down</strong> compared to the original.',
            'The short arm that pointed up now points down; the long arm that pointed right now points left.',
            'It looks like a reflected and flipped version — similar to an upside-down L or a Γ shape, depending on the exact orientation.',
          ],
          answer:
            'After a half turn, the L-shape appears upside down compared to the original.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Four positions of an L-shape showing it rotated quarter turn, half turn, three-quarter turn and full turn clockwise, with the centre of rotation marked in red',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — TESSELLATING PATTERNS USING TRANSFORMATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tessellating-patterns-using-transformations',
      title: 'Tessellating Patterns Using Transformations',
      icon: '🧩',
      explanation: `
<p style="margin-bottom:14px;"><strong>Tessellation</strong> is a pattern made by repeating a shape over and over so that it covers a flat surface with <strong>no gaps and no overlapping</strong>. Transformations — translation, reflection and rotation — are the tools we use to move shapes into their tessellating positions.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How each transformation creates a tessellation</div>
  <div style="display:flex;flex-direction:column;gap:14px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Translation<br/><span style="font-weight:400;font-size:12px;">(sliding)</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong style="color:#1e40af;">Slide the shape</strong> repeatedly in rows and columns. Each copy of the shape is in exactly the same orientation — none are flipped or turned. Squares, rectangles and regular hexagons tessellate perfectly by translation alone.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Reflection<br/><span style="font-weight:400;font-size:12px;">(flipping)</span></span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong style="color:#dc2626;">Flip the shape alternately</strong> to fill space. Right-angled triangles tessellate beautifully by reflection — flip one triangle over and it fits perfectly against the original to form a rectangle, which can then be translated.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Rotation<br/><span style="font-weight:400;font-size:12px;">(turning)</span></span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Rotate the shape</strong> around a shared vertex to fill space. Parallelograms tessellate by rotation — rotate one 180° around the midpoint of a side and it slots perfectly against its neighbour.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Real-life tessellation 🌍</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li>Floor tiles in a bathroom — squares translated in rows and columns</li>
    <li>A honeycomb — regular hexagons tessellating by translation</li>
    <li>Brick walls — rectangles translated with alternating offsets</li>
    <li>Patchwork quilts — triangles and squares combined using reflection and rotation</li>
  </ul>
</div>
`,
      workedExamples: [
        {
          question:
            'How can you use translation to create a tessellating pattern with squares?',
          steps: [
            'Place <strong style="color:#1e40af;">one square</strong> on the grid.',
            '<strong style="color:#1e40af;">Slide it to the right</strong> until its left edge touches the right edge of the first square — no gap, no overlap.',
            'Continue sliding to the right until the entire row is filled.',
            '<strong style="color:#1e40af;">Slide the completed row upward</strong> until its bottom edge touches the top edge of the first row, and repeat.',
          ],
          answer:
            'By translating squares left, right and upward, you create a perfect tessellating grid pattern with no gaps and no overlapping.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Three small grids side by side — first showing tessellation by translation of squares, second showing tessellation by reflection of right-angled triangles, third showing tessellation by rotation of a parallelogram',
      videoPlaceholder:
        'Short video showing how translation, reflection and rotation are used to create tessellating patterns',
    },
  ],

  topicPractice: [

    // ── SECTION 1 — What are Transformations ─────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Name the three types of transformations covered in Grade 4.',
      checkMode: 'auto',
      answer: 'Translation, reflection and rotation',
      correctAnswer: 'translation, reflection and rotation',
      correctAnswers: [
        // with "and" — all 6 orderings
        'translation, reflection and rotation',
        'translation, rotation and reflection',
        'reflection, translation and rotation',
        'reflection, rotation and translation',
        'rotation, translation and reflection',
        'rotation, reflection and translation',
        // without "and" — all 6 orderings
        'translation, reflection, rotation',
        'translation, rotation, reflection',
        'reflection, translation, rotation',
        'reflection, rotation, translation',
        'rotation, translation, reflection',
        'rotation, reflection, translation',
      ],
      explanation:
        'The three types of transformations are translation (sliding), reflection (flipping) and rotation (turning).',
    },

    {
      difficulty: 'Medium',
      question: 'Match each description to the correct transformation type.',
      checkMode: 'auto',
      answer: 'a) Reflection   b) Translation   c) Rotation',
      parts: [
        {
          label: 'a) A shape is flipped over a line to create a mirror image',
          correctAnswer: 'Reflection',
          correctAnswers: ['Reflection', 'reflection'],
          explanation: 'Flipping a shape over a mirror line to create a mirror image is a reflection.',
        },
        {
          label: 'b) A shape is slid from one position to another without turning',
          correctAnswer: 'Translation',
          correctAnswers: ['Translation', 'translation'],
          explanation: 'Sliding a shape to a new position without turning or flipping it is a translation.',
        },
        {
          label: 'c) A shape is turned around a fixed point',
          correctAnswer: 'Rotation',
          correctAnswers: ['Rotation', 'rotation'],
          explanation: 'Turning a shape around a fixed point (the centre of rotation) is a rotation.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'After any transformation, two things about the shape stay exactly the same.',
      checkMode: 'auto',
      answer: 'a) Size   b) Shape   c) Position or orientation',
      parts: [
        {
          label: 'a) First thing that stays the same',
          correctAnswer: 'size',
          correctAnswers: ['size', 'Size', 'the size'],
          explanation: 'The size of the shape never changes after a transformation — it stays exactly the same.',
        },
        {
          label: 'b) Second thing that stays the same',
          correctAnswer: 'shape',
          correctAnswers: ['shape', 'Shape', 'the shape'],
          explanation: 'The shape (its angles, proportions and number of sides) never changes after a transformation.',
        },
        {
          label: 'c) What is the only thing that changes?',
          correctAnswer: 'position or orientation',
          correctAnswers: [
            'position or orientation',
            'position',
            'orientation',
            'position and orientation',
            'positionororientation',
            'positionandorientation',
          ],
          explanation: 'Only the position (where the shape is) or orientation (which way it faces) can change during a transformation.',
        },
      ],
    },

    // ── SECTION 2 — Translation ───────────────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'A square is moved 4 units to the right. What type of transformation is this?',
      checkMode: 'auto',
      answer: 'Translation',
      correctAnswer: 'Translation',
      correctAnswers: ['Translation', 'translation', 'a translation'],
      explanation: 'The square slides to the right without turning or flipping — this is a translation.',
    },

    {
      difficulty: 'Medium',
      question: 'A shape is translated 3 units right and 2 units up.',
      checkMode: 'auto',
      answer: 'a) 3 units   b) 2 units   c) No',
      parts: [
        {
          label: 'a) How far does each corner of the shape move to the right?',
          correctAnswer: '3',
          correctAnswers: ['3', 'three', '3 units', '3units'],
          explanation: 'In a translation every point moves the same distance. All corners move 3 units to the right.',
        },
        {
          label: 'b) How far does each corner move up?',
          correctAnswer: '2',
          correctAnswers: ['2', 'two', '2 units', '2units'],
          explanation: 'All corners move 2 units up — every point travels the same distance in the same direction.',
        },
        {
          label: 'c) Does the shape change size or shape after the translation?',
          correctAnswer: 'No',
          correctAnswers: ['No', 'no', 'No it does not', 'no it does not', 'neitherchanges', 'neither'],
          explanation: 'Translation only moves the shape — it never changes its size or shape.',
        },
      ],
    },

    // Q6 a/b/c — auto checked
    {
      difficulty: 'Hard',
      question:
        'A rectangle is translated 5 units left and 4 units down.',
      checkMode: 'auto',
      answer: 'a) Left   b) Down   c) 1 unit from the left edge',
      parts: [
        {
          label: 'a) In which direction does the shape move horizontally?',
          correctAnswer: 'Left',
          correctAnswers: ['Left', 'left', 'to the left'],
          explanation: 'The shape is translated 5 units to the left, so the horizontal direction is left.',
        },
        {
          label: 'b) In which direction does it move vertically?',
          correctAnswer: 'Down',
          correctAnswers: ['Down', 'down', 'downward', 'downwards'],
          explanation: 'The shape is translated 4 units down, so the vertical direction is down.',
        },
        {
          label: 'c) A corner was 6 units from the left edge. Where is it after moving 5 units left?',
          correctAnswer: '1 unit from the left edge',
          correctAnswers: [
            '1 unit from the left edge',
            '1unitfromtheleftedge',
            '1',
            '1 unit',
            '1unit',
          ],
          explanation: 'The corner started 6 units from the left edge. Moving 5 units left: 6 − 5 = 1 unit from the left edge.',
        },
      ],
    },

    // Q6 d — self mark
    {
      difficulty: 'Hard',
      question:
        'A rectangle is translated 5 units left and 4 units down.\nd) Does the rectangle need to be redrawn or just moved to its new position?',
      checkMode: 'self',
      answer:
        'Just moved to its new position. The rectangle is identical in size and shape — all sides and angles are unchanged. Only its position on the grid has changed.',
    },

    // ── SECTION 3 — Reflection ────────────────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'A shape is flipped over a vertical mirror line. What type of transformation is this?',
      checkMode: 'auto',
      answer: 'Reflection',
      correctAnswer: 'Reflection',
      correctAnswers: ['Reflection', 'reflection', 'a reflection'],
      explanation: 'Flipping a shape over a mirror line creates a mirror image — this is a reflection.',
    },

    {
      difficulty: 'Medium',
      question: 'A triangle has a corner 4 blocks to the left of a vertical mirror line.',
      checkMode: 'auto',
      answer: 'a) 4 blocks   b) The right side   c) No',
      parts: [
        {
          label: 'a) How far is the mirror image of that corner from the mirror line?',
          correctAnswer: '4',
          correctAnswers: ['4', 'four', '4 blocks', '4blocks'],
          explanation: 'Each point is the same distance from the mirror line on both sides. The original corner is 4 blocks away, so the reflected corner is also 4 blocks away.',
        },
        {
          label: 'b) On which side of the mirror line is the reflected corner?',
          correctAnswer: 'right',
          correctAnswers: [
            'right', 'Right',
            'the right side', 'therightside',
            'right side', 'rightside',
            'to the right', 'totheright',
          ],
          explanation: 'The original corner is to the left of the line, so the mirror image appears on the opposite side — the right.',
        },
        {
          label: 'c) Does the triangle change size after reflection?',
          correctAnswer: 'No',
          correctAnswers: ['No', 'no', 'no it does not', 'noidoesnot'],
          explanation: 'Reflection never changes the size of a shape — only its orientation changes.',
        },
      ],
    },

    // Q9 a/b/c — auto checked
    {
      difficulty: 'Hard',
      question:
        'A shape is reflected over a horizontal mirror line. The original shape is above the line.',
      checkMode: 'auto',
      answer: 'a) Below the line   b) 5 blocks below the mirror line   c) Mirror image',
      parts: [
        {
          label: 'a) Where does the reflected shape appear?',
          correctAnswer: 'below the line',
          correctAnswers: [
            'below the line', 'belowtheline',
            'below', 'below the mirror line', 'belowthemirrorline',
            'underneath the line', 'under the line',
          ],
          explanation: 'When a shape is reflected over a horizontal line, the mirror image appears on the opposite side — below the line.',
        },
        {
          label: 'b) A corner is 5 blocks above the mirror line — where is the reflected corner?',
          correctAnswer: '5 blocks below the mirror line',
          correctAnswers: [
            '5 blocks below the mirror line',
            '5blocksbelowthemirrorline',
            '5 blocks below',
            '5blocksbelow',
            '5',
          ],
          explanation: 'Each point is the same distance from the mirror line on both sides. 5 blocks above → 5 blocks below.',
        },
        {
          label: 'c) What word describes the relationship between the original shape and its reflection?',
          correctAnswer: 'mirror image',
          correctAnswers: [
            'mirror image', 'mirrorimage',
            'a mirror image', 'amirrorimage',
          ],
          explanation: 'The reflected shape is the mirror image of the original — same size and shape, but facing the opposite direction.',
        },
      ],
    },

    // Q9 d — self mark
    {
      difficulty: 'Hard',
      question:
        'A shape is reflected over a horizontal mirror line. The original shape is above the line.\nd) Does the reflected shape face the same direction as the original?',
      checkMode: 'self',
      answer:
        'No. The reflected shape faces the opposite direction. Reflection flips the shape, so what was pointing up in the original now points down in the reflection.',
    },

    // ── SECTION 4 — Rotation ──────────────────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'A shape is turned 90 degrees clockwise around a fixed point. What type of transformation is this?',
      checkMode: 'auto',
      answer: 'Rotation',
      correctAnswer: 'Rotation',
      correctAnswers: ['Rotation', 'rotation', 'a rotation'],
      explanation: 'Turning a shape around a fixed point is a rotation. 90° clockwise is a quarter turn clockwise.',
    },

    {
      difficulty: 'Medium',
      question: 'An L-shape is rotated a quarter turn clockwise.',
      checkMode: 'auto',
      answer: 'a) 90 degrees   b) Clockwise   c) No',
      parts: [
        {
          label: 'a) How many degrees is a quarter turn?',
          correctAnswer: '90',
          correctAnswers: ['90', '90 degrees', '90degrees', '90°', 'ninety'],
          explanation: 'A quarter turn is 90 degrees — like a clock hand moving from 12 to 3.',
        },
        {
          label: 'b) In which direction does the shape turn?',
          correctAnswer: 'Clockwise',
          correctAnswers: ['Clockwise', 'clockwise'],
          explanation: 'The question states the shape is rotated a quarter turn clockwise.',
        },
        {
          label: 'c) Does the size of the shape change after rotation?',
          correctAnswer: 'No',
          correctAnswers: ['No', 'no', 'no it does not', 'noidoesnot'],
          explanation: 'Rotation never changes the size of a shape — only its orientation changes.',
        },
      ],
    },

    // Q12 a/b — auto checked
    {
      difficulty: 'Hard',
      question: 'A shape is rotated a half turn anticlockwise.',
      checkMode: 'auto',
      answer: 'a) 180 degrees   b) Down',
      parts: [
        {
          label: 'a) How many degrees is a half turn?',
          correctAnswer: '180',
          correctAnswers: ['180', '180 degrees', '180degrees', '180°', 'one hundred and eighty'],
          explanation: 'A half turn is 180 degrees — like a clock hand moving from 12 to 6.',
        },
        {
          label: 'b) If the shape was pointing up before, which direction does it point after a half turn?',
          correctAnswer: 'Down',
          correctAnswers: ['Down', 'down', 'downward', 'downwards'],
          explanation: 'A half turn (180°) flips the orientation. If the shape pointed up, after a half turn it points down.',
        },
      ],
    },

    // Q12 c/d — self mark
    {
      difficulty: 'Hard',
      question:
        'A shape is rotated a half turn anticlockwise.\nc) How is a half turn clockwise different from a half turn anticlockwise?\nd) After a full turn, where does the shape end up?',
      checkMode: 'self',
      answer:
        'c) They end up in the same final position — both a half turn clockwise and a half turn anticlockwise rotate the shape 180°, which produces the same result.\nd) After a full turn (360°) the shape ends up back in its original position, facing the same direction as when it started.',
    },

    // ── SECTION 5 — Tessellating Patterns Using Transformations ───────────────

    {
      difficulty: 'Easy',
      question:
        'Which transformation would you use to slide a square repeatedly to the right to create a row of squares?',
      checkMode: 'auto',
      answer: 'Translation',
      correctAnswer: 'Translation',
      correctAnswers: ['Translation', 'translation', 'a translation'],
      explanation:
        'Sliding a shape repeatedly in one direction without turning or flipping it is a translation.',
    },

    // Q14a — auto checked
    {
      difficulty: 'Medium',
      question:
        'A pattern is created by flipping a triangle alternately to fill a row with no gaps.',
      checkMode: 'auto',
      answer: 'a) Reflection',
      parts: [
        {
          label: 'a) What transformation is being used?',
          correctAnswer: 'Reflection',
          correctAnswers: ['Reflection', 'reflection', 'a reflection'],
          explanation:
            'Flipping a shape over a line to create a mirror image is a reflection.',
        },
      ],
    },

    // Q14 b/c — self mark
    {
      difficulty: 'Medium',
      question:
        'A pattern is created by flipping a triangle alternately to fill a row with no gaps.\nb) Why does this create a tessellating pattern?\nc) Name one other shape that could tessellate using reflection.',
      checkMode: 'self',
      answer:
        'b) When a right-angled triangle is flipped (reflected), its mirror image fits perfectly along the hypotenuse — the two triangles together form a rectangle. Rectangles can then be translated to fill a row with no gaps.\nc) Accept any valid shape — e.g. a rectangle, a square, a parallelogram or a regular hexagon.',
    },

    // Q15 — all self mark
    {
      difficulty: 'Hard',
      question:
        'A learner wants to create a tessellating pattern using an L-shape.\na) Which transformation would allow the L-shape to fit together with no gaps?\nb) Describe how you would arrange the L-shapes to tessellate.\nc) Can you use more than one type of transformation to create a tessellating pattern?\nd) Name a real life example of a tessellating pattern created using rotation.',
      checkMode: 'self',
      answer:
        'a) Rotation — rotating an L-shape 180° allows it to slot perfectly against the original.\nb) Rotate alternating L-shapes 180° (a half turn) around the point where they meet so each rotated piece fits snugly against its neighbour like puzzle pieces, with no gaps.\nc) Yes — many tessellating patterns use a combination of translation, reflection and rotation together.\nd) Accept any valid example such as a pinwheel pattern, some floor tile designs, or a spinning-fan tile pattern.',
    },

  ],

  scoreMessages: [
    { minScore: 34, message: 'Perfect score! You have mastered Transformations.' },
    { minScore: 26, message: 'Excellent work! Review the questions you got wrong and you will have this mastered.' },
    { minScore: 17, message: 'Good effort! Go back and read through the sections you struggled with.' },
    { minScore: 0, message: 'Keep going! Read through the study guide again carefully and then retry.' },
  ],
}
