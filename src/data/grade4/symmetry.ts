import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Symmetry',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS SYMMETRY?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-symmetry',
      title: 'What is Symmetry?',
      icon: '🪞',
      explanation: `
<p style="margin-bottom:14px;">A shape is <strong>symmetrical</strong> if you can fold it exactly in half so that both sides <strong>match perfectly</strong>. The fold line is called the <strong>line of symmetry</strong>. It is like placing a mirror along the fold — one side is the exact reflection of the other.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Real-life examples 🌍</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li><strong>A butterfly:</strong> fold it down the middle and both wings are identical</li>
    <li><strong>A human face:</strong> the left side and right side are mirror images of each other</li>
    <li><strong>The letter A:</strong> a vertical fold down the centre gives two matching halves</li>
  </ul>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Colour guide</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Red = line of symmetry</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blue = left half</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#16a34a;display:inline-block;"></span>
      <span style="color:#16a34a;font-weight:700;">Green = right half</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">The fold test for symmetry</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Fold the shape</strong> along the line you think is a line of symmetry.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">If <strong>both halves match exactly</strong> — the shape is <span style="color:#16a34a;font-weight:700;">symmetrical</span> along that line.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">If <strong>the halves do not match</strong> — that line is <span style="color:#dc2626;font-weight:700;">not</span> a line of symmetry.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Symmetrical vs not symmetrical</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#15803d;margin-bottom:6px;">✓ Symmetrical</div>
      <div style="color:#14532d;font-size:14px;line-height:1.7;">Both halves are <strong>mirror images</strong> of each other when folded along the line of symmetry.</div>
    </div>
    <div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#dc2626;margin-bottom:6px;">✗ Not symmetrical</div>
      <div style="color:#7f1d1d;font-size:14px;line-height:1.7;">No matter where you fold the shape, the two halves will <strong>never match exactly</strong>.</div>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Is a square symmetrical? If so, how many lines of symmetry does it have?',
          answer: 'Yes — a square has 4 lines of symmetry.',
          steps: [
            `<strong>Step 1:</strong> Try folding the square <span style="color:#dc2626;font-weight:700;">vertically</span> (left to right):<br/>
<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;align-items:stretch;gap:0;border:2px solid #d1d5db;border-radius:6px;overflow:hidden;width:80px;height:80px;">
    <div style="flex:1;background:#dbeafe;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:11px;font-weight:700;color:#1e40af;">left</span>
    </div>
    <div style="width:3px;background:#dc2626;"></div>
    <div style="flex:1;background:#f0fdf4;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:11px;font-weight:700;color:#16a34a;">right</span>
    </div>
  </div>
  <span style="color:#16a34a;font-weight:700;">Both halves match ✓</span>
</div>`,
            `<strong>Step 2:</strong> Try folding <span style="color:#dc2626;font-weight:700;">horizontally</span> (top to bottom):<br/>
<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;flex-direction:column;align-items:stretch;gap:0;border:2px solid #d1d5db;border-radius:6px;overflow:hidden;width:80px;height:80px;">
    <div style="flex:1;background:#dbeafe;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:11px;font-weight:700;color:#1e40af;">top</span>
    </div>
    <div style="height:3px;background:#dc2626;"></div>
    <div style="flex:1;background:#f0fdf4;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:11px;font-weight:700;color:#16a34a;">bottom</span>
    </div>
  </div>
  <span style="color:#16a34a;font-weight:700;">Both halves match ✓</span>
</div>`,
            `<strong>Step 3:</strong> Try folding along <span style="color:#dc2626;font-weight:700;">both diagonals</span>:<br/>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">Corner to corner in both directions — each diagonal fold produces two matching triangles.</p>
<div style="display:flex;align-items:center;gap:8px;margin-top:8px;">
  <span style="color:#16a34a;font-weight:700;">Both diagonal folds also match ✓</span>
</div>`,
            `<strong>Answer:</strong>
<div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#15803d;font-weight:700;">Yes — a square is symmetrical. It has <span style="font-size:17px;">4 lines of symmetry</span> (vertical, horizontal, and 2 diagonal).</span>
</div>`,
          ],
        },
        {
          question: 'Is the letter S symmetrical?',
          answer: 'No — the letter S has no lines of symmetry.',
          steps: [
            `<strong>Step 1:</strong> Try folding the letter S <span style="color:#dc2626;font-weight:700;">vertically</span> (left to right):<br/>
<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;align-items:stretch;gap:0;border:2px solid #d1d5db;border-radius:6px;overflow:hidden;width:80px;height:80px;background:#f9fafb;">
    <div style="flex:1;background:#dbeafe;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:22px;font-weight:700;color:#1e40af;">Ʂ</span>
    </div>
    <div style="width:3px;background:#dc2626;"></div>
    <div style="flex:1;background:#f0fdf4;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:22px;font-weight:700;color:#16a34a;">)</span>
    </div>
  </div>
  <span style="color:#dc2626;font-weight:700;">Halves do not match ✗</span>
</div>`,
            `<strong>Step 2:</strong> Try folding <span style="color:#dc2626;font-weight:700;">horizontally</span> (top to bottom):<br/>
<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;flex-direction:column;align-items:stretch;gap:0;border:2px solid #d1d5db;border-radius:6px;overflow:hidden;width:80px;height:80px;background:#f9fafb;">
    <div style="flex:1;background:#dbeafe;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:13px;font-weight:700;color:#1e40af;">top of S</span>
    </div>
    <div style="height:3px;background:#dc2626;"></div>
    <div style="flex:1;background:#f0fdf4;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:13px;font-weight:700;color:#16a34a;">bottom of S</span>
    </div>
  </div>
  <span style="color:#dc2626;font-weight:700;">Halves do not match ✗</span>
</div>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">The top half of S curves the opposite way to the bottom half — they are not mirror images.</p>`,
            `<strong>Answer:</strong>
<div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#dc2626;font-weight:700;">No — the letter S has no lines of symmetry. No matter how you fold it, the halves never match exactly.</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: 'Four shapes side by side — a square with all 4 lines of symmetry drawn in red, a rectangle with 2 lines, a triangle with 1 line, and the letter S with no lines',

      videoPlaceholder: 'Short video showing how to find lines of symmetry by folding shapes and checking if both halves match',

      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — LINES OF SYMMETRY IN COMMON SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'lines-of-symmetry-in-shapes',
      title: 'Lines of Symmetry in Common Shapes',
      icon: '📐',
      explanation: `
<p style="margin-bottom:14px;">Different shapes have different numbers of lines of symmetry. The more <strong>regular</strong> a shape is — meaning all its sides and angles are equal — the more lines of symmetry it tends to have. Some shapes have none at all!</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Colour guide</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Red = lines of symmetry</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blue = shape outlines</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:14px;">Lines of symmetry by shape</div>
  <div style="display:flex;flex-direction:column;gap:0;">

    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #e0e7ff;">
      <span style="min-width:170px;font-weight:700;color:#1e3a8a;font-size:15px;">Circle</span>
      <span style="background:#fee2e2;border-radius:6px;padding:3px 12px;color:#dc2626;font-weight:700;font-size:13px;">Infinite lines</span>
      <span style="color:#374151;font-size:13px;margin-left:4px;">Any diameter is a line of symmetry</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #e0e7ff;">
      <span style="min-width:170px;font-weight:700;color:#1e3a8a;font-size:15px;">Square</span>
      <span style="background:#fee2e2;border-radius:6px;padding:3px 12px;color:#dc2626;font-weight:700;font-size:13px;">4 lines</span>
      <span style="color:#374151;font-size:13px;margin-left:4px;">Vertical, horizontal, and 2 diagonals</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #e0e7ff;">
      <span style="min-width:170px;font-weight:700;color:#1e3a8a;font-size:15px;">Rectangle</span>
      <span style="background:#fee2e2;border-radius:6px;padding:3px 12px;color:#dc2626;font-weight:700;font-size:13px;">2 lines</span>
      <span style="color:#374151;font-size:13px;margin-left:4px;">Vertical and horizontal only (diagonals do not work)</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #e0e7ff;">
      <span style="min-width:170px;font-weight:700;color:#1e3a8a;font-size:15px;">Equilateral triangle</span>
      <span style="background:#fee2e2;border-radius:6px;padding:3px 12px;color:#dc2626;font-weight:700;font-size:13px;">3 lines</span>
      <span style="color:#374151;font-size:13px;margin-left:4px;">One from each corner to the midpoint of the opposite side</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #e0e7ff;">
      <span style="min-width:170px;font-weight:700;color:#1e3a8a;font-size:15px;">Isosceles triangle</span>
      <span style="background:#fee2e2;border-radius:6px;padding:3px 12px;color:#dc2626;font-weight:700;font-size:13px;">1 line</span>
      <span style="color:#374151;font-size:13px;margin-left:4px;">From the top corner to the midpoint of the base</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #e0e7ff;">
      <span style="min-width:170px;font-weight:700;color:#1e3a8a;font-size:15px;">Scalene triangle</span>
      <span style="background:#f3f4f6;border-radius:6px;padding:3px 12px;color:#6b7280;font-weight:700;font-size:13px;">0 lines</span>
      <span style="color:#374151;font-size:13px;margin-left:4px;">All sides and angles are different — no fold works</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #e0e7ff;">
      <span style="min-width:170px;font-weight:700;color:#1e3a8a;font-size:15px;">Regular pentagon</span>
      <span style="background:#fee2e2;border-radius:6px;padding:3px 12px;color:#dc2626;font-weight:700;font-size:13px;">5 lines</span>
      <span style="color:#374151;font-size:13px;margin-left:4px;">One from each of the 5 corners to the midpoint of the opposite side</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;">
      <span style="min-width:170px;font-weight:700;color:#1e3a8a;font-size:15px;">Regular hexagon</span>
      <span style="background:#fee2e2;border-radius:6px;padding:3px 12px;color:#dc2626;font-weight:700;font-size:13px;">6 lines</span>
      <span style="color:#374151;font-size:13px;margin-left:4px;">3 through opposite corners + 3 through midpoints of opposite sides</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:12px 18px;margin-bottom:8px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;">💡 Key rule:</span>
  <span style="color:#78350f;font-size:14px;margin-left:6px;">For a <strong>regular polygon</strong> (all sides and angles equal), the number of lines of symmetry equals the number of sides.</span>
</div>`,

      workedExamples: [
        {
          question: 'How many lines of symmetry does a rectangle have?',
          answer: 'A rectangle has 2 lines of symmetry — one vertical and one horizontal.',
          steps: [
            `<strong>Step 1:</strong> Try a <span style="color:#dc2626;font-weight:700;">vertical fold</span> (left half folds onto right half):<br/>
<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;align-items:stretch;gap:0;border:2px solid #1e40af;border-radius:6px;overflow:hidden;width:100px;height:60px;">
    <div style="flex:1;background:#dbeafe;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:11px;font-weight:700;color:#1e40af;">left</span>
    </div>
    <div style="width:3px;background:#dc2626;"></div>
    <div style="flex:1;background:#dbeafe;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:11px;font-weight:700;color:#1e40af;">right</span>
    </div>
  </div>
  <span style="color:#16a34a;font-weight:700;">Both halves match ✓  →  Line of symmetry!</span>
</div>`,
            `<strong>Step 2:</strong> Try a <span style="color:#dc2626;font-weight:700;">horizontal fold</span> (top half folds onto bottom half):<br/>
<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;flex-direction:column;align-items:stretch;gap:0;border:2px solid #1e40af;border-radius:6px;overflow:hidden;width:100px;height:60px;">
    <div style="flex:1;background:#dbeafe;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:11px;font-weight:700;color:#1e40af;">top</span>
    </div>
    <div style="height:3px;background:#dc2626;"></div>
    <div style="flex:1;background:#dbeafe;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:11px;font-weight:700;color:#1e40af;">bottom</span>
    </div>
  </div>
  <span style="color:#16a34a;font-weight:700;">Both halves match ✓  →  Line of symmetry!</span>
</div>`,
            `<strong>Step 3:</strong> Try <span style="color:#dc2626;font-weight:700;">diagonal folds</span> (corner to corner):<br/>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">When you fold a rectangle corner to corner, the two halves are different sizes — a short side meets a long side. They do not match.</p>
<div style="background:#fef2f2;border-radius:6px;padding:6px 14px;display:inline-block;margin-top:8px;">
  <span style="color:#dc2626;font-weight:700;">Diagonal folds do not work for rectangles ✗</span>
</div>`,
            `<strong>Answer:</strong>
<div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#15803d;font-weight:700;">A rectangle has <span style="font-size:17px;">2 lines of symmetry</span> — one vertical and one horizontal. The diagonal fold does not work because the sides of a rectangle are not all equal.</span>
</div>`,
          ],
        },
        {
          question: 'How many lines of symmetry does an equilateral triangle have?',
          answer: 'An equilateral triangle has 3 lines of symmetry.',
          steps: [
            `An equilateral triangle has <strong>3 equal sides</strong> and <strong>3 equal angles</strong>. Each line of symmetry runs from one <span style="color:#1e40af;font-weight:700;">corner</span> to the <span style="color:#dc2626;font-weight:700;">midpoint of the opposite side</span>.<br/>
<div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:12px;">
  <div style="text-align:center;">
    <div style="width:70px;height:60px;position:relative;display:inline-block;">
      <svg viewBox="0 0 70 60" width="70" height="60">
        <polygon points="35,4 66,56 4,56" fill="#dbeafe" stroke="#1e40af" stroke-width="2"/>
        <line x1="35" y1="4" x2="35" y2="56" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
      </svg>
    </div>
    <div style="font-size:12px;color:#374151;margin-top:2px;">Line 1</div>
  </div>
  <div style="text-align:center;">
    <div style="width:70px;height:60px;position:relative;display:inline-block;">
      <svg viewBox="0 0 70 60" width="70" height="60">
        <polygon points="35,4 66,56 4,56" fill="#dbeafe" stroke="#1e40af" stroke-width="2"/>
        <line x1="66" y1="56" x2="19.5" y2="30" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
      </svg>
    </div>
    <div style="font-size:12px;color:#374151;margin-top:2px;">Line 2</div>
  </div>
  <div style="text-align:center;">
    <div style="width:70px;height:60px;position:relative;display:inline-block;">
      <svg viewBox="0 0 70 60" width="70" height="60">
        <polygon points="35,4 66,56 4,56" fill="#dbeafe" stroke="#1e40af" stroke-width="2"/>
        <line x1="4" y1="56" x2="50.5" y2="30" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
      </svg>
    </div>
    <div style="font-size:12px;color:#374151;margin-top:2px;">Line 3</div>
  </div>
</div>`,
            `There are <strong>3 corners</strong> and each one gives exactly one line of symmetry, so the total is <strong>3 lines</strong>.<br/>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">This matches the rule: a <em>regular polygon</em> has as many lines of symmetry as it has sides — an equilateral triangle has 3 sides, so it has 3 lines of symmetry.</p>`,
            `<strong>Answer:</strong>
<div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#15803d;font-weight:700;">An equilateral triangle has <span style="font-size:17px;">3 lines of symmetry</span>.</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: 'A grid of common shapes each showing their lines of symmetry drawn in red — circle square rectangle equilateral triangle isosceles triangle and regular hexagon',

      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — DRAWING THE OTHER HALF OF A SYMMETRICAL FIGURE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'drawing-the-other-half',
      title: 'Drawing the Other Half of a Symmetrical Figure',
      icon: '✏️',
      explanation: `
<p style="margin-bottom:14px;">If you are given <strong>half of a symmetrical shape</strong> and the <strong>line of symmetry</strong>, you can draw the missing half by <strong>reflecting each point</strong> across the line. Reflecting means moving a point to the exact same distance on the <em>other</em> side of the line — like the shape looking at itself in a mirror.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Colour guide</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blue = the given half</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Red = line of symmetry</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#16a34a;display:inline-block;"></span>
      <span style="color:#16a34a;font-weight:700;">Green = the drawn (reflected) half</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">The 5-step method</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Identify the line of symmetry</strong> — it is drawn in <span style="color:#dc2626;font-weight:700;">red</span> on the grid.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Find each corner or point</strong> of the given half — label them A, B, C and so on.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#7c3aed;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Count the squares</strong> from each point to the line of symmetry.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#d97706;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Mark the mirror point</strong> the <em>same number of squares</em> on the other side of the line.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">5</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Connect the mirror points</strong> in order to complete the reflected half in <span style="color:#16a34a;font-weight:700;">green</span>.</span>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Half of a shape is drawn on a grid. The line of symmetry is a vertical red line in the middle. Points A, B and C are 1, 2 and 3 squares to the left of the line. Draw the other half.',
          answer: 'Mirror point A is 1 square right, B is 2 squares right, C is 3 squares right. Connect A′B′C′ to complete the shape.',
          steps: [
            `<strong>Step 1:</strong> Identify the <span style="color:#dc2626;font-weight:700;">line of symmetry</span> — the vertical red line divides the grid in half.<br/>
<div style="overflow-x:auto;margin-top:12px;">
  <div style="display:inline-flex;align-items:stretch;gap:0;border:1.5px solid #d1d5db;border-radius:8px;overflow:hidden;min-width:260px;">
    <div style="background:#dbeafe;padding:16px 28px;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:13px;font-weight:700;color:#1e40af;">Given half<br/>(blue)</span>
    </div>
    <div style="width:4px;background:#dc2626;"></div>
    <div style="background:#f9fafb;padding:16px 28px;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:13px;font-weight:700;color:#6b7280;">Draw here<br/>(green)</span>
    </div>
  </div>
</div>`,
            `<strong>Step 2:</strong> Locate each labelled point on the <span style="color:#1e40af;font-weight:700;">given (blue) half</span> and count its distance from the line:<br/>
<div style="overflow-x:auto;margin-top:10px;">
  <table style="border-collapse:collapse;min-width:300px;">
    <thead>
      <tr>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:8px 16px;border:1.5px solid #bfdbfe;font-size:13px;">Point</th>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:8px 16px;border:1.5px solid #bfdbfe;font-size:13px;">Squares from line (left)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">A</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;color:#374151;">1 square</td>
      </tr>
      <tr style="background:#f9fafb;">
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">B</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;color:#374151;">2 squares</td>
      </tr>
      <tr>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">C</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;color:#374151;">3 squares</td>
      </tr>
    </tbody>
  </table>
</div>`,
            `<strong>Step 3:</strong> Mark each <span style="color:#16a34a;font-weight:700;">mirror point</span> the same distance on the <em>right</em> side of the line:<br/>
<div style="overflow-x:auto;margin-top:10px;">
  <table style="border-collapse:collapse;min-width:420px;">
    <thead>
      <tr>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:8px 14px;border:1.5px solid #bfdbfe;font-size:13px;">Original point</th>
        <th style="background:#fee2e2;color:#dc2626;font-weight:700;padding:8px 14px;border:1.5px solid #fca5a5;font-size:13px;">Distance from line</th>
        <th style="background:#f0fdf4;color:#16a34a;font-weight:700;padding:8px 14px;border:1.5px solid #86efac;font-size:13px;">Mirror point</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:center;padding:8px 14px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">A  (1 left)</td>
        <td style="text-align:center;padding:8px 14px;border:1.5px solid #fca5a5;color:#dc2626;font-weight:600;">1 square</td>
        <td style="text-align:center;padding:8px 14px;border:1.5px solid #86efac;font-weight:700;color:#16a34a;">A′  (1 right)</td>
      </tr>
      <tr style="background:#f9fafb;">
        <td style="text-align:center;padding:8px 14px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">B  (2 left)</td>
        <td style="text-align:center;padding:8px 14px;border:1.5px solid #fca5a5;color:#dc2626;font-weight:600;">2 squares</td>
        <td style="text-align:center;padding:8px 14px;border:1.5px solid #86efac;font-weight:700;color:#16a34a;">B′  (2 right)</td>
      </tr>
      <tr>
        <td style="text-align:center;padding:8px 14px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">C  (3 left)</td>
        <td style="text-align:center;padding:8px 14px;border:1.5px solid #fca5a5;color:#dc2626;font-weight:600;">3 squares</td>
        <td style="text-align:center;padding:8px 14px;border:1.5px solid #86efac;font-weight:700;color:#16a34a;">C′  (3 right)</td>
      </tr>
    </tbody>
  </table>
</div>`,
            `<strong>Step 4:</strong> Connect the mirror points A′ → B′ → C′ in the same order as the original points were connected. The <span style="color:#16a34a;font-weight:700;">green half</span> should look like an exact reflection of the <span style="color:#1e40af;font-weight:700;">blue half</span>.<br/>
<div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#15803d;font-weight:700;">The two halves together form the complete symmetrical shape ✓</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: 'Grid showing half of an irregular shape on the left of a vertical red line of symmetry with the mirror half completed in green on the right',

      videoPlaceholder: 'Short video showing step by step how to draw the other half of a symmetrical figure on a grid using the line of symmetry',

      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SYMMETRY IN REAL LIFE AND LETTERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'symmetry-real-life-letters',
      title: 'Symmetry in Real Life and Letters',
      icon: '🌿',
      explanation: `
<p style="margin-bottom:14px;">Symmetry is not just a maths idea — it appears <strong>all around us</strong> in nature, in the buildings people design, and even in the letters of the alphabet. Once you know what to look for, you will start to see it everywhere!</p>

<div style="display:flex;flex-direction:column;gap:12px;margin-bottom:16px;">

  <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 18px;">
    <div style="font-size:14px;font-weight:700;color:#15803d;margin-bottom:8px;">🌿 Nature</div>
    <ul style="margin:0;padding-left:20px;color:#14532d;line-height:2;font-size:15px;">
      <li><strong>Butterfly wings:</strong> fold a butterfly in half and both wings match exactly</li>
      <li><strong>Leaves:</strong> most leaves have a central vein that acts as a line of symmetry</li>
      <li><strong>Snowflakes:</strong> have 6 lines of symmetry radiating from the centre</li>
      <li><strong>Starfish:</strong> have 5 lines of symmetry, one through each arm</li>
    </ul>
  </div>

  <div style="background:#dbeafe;border:1.5px solid #93c5fd;border-radius:10px;padding:14px 18px;">
    <div style="font-size:14px;font-weight:700;color:#1e40af;margin-bottom:8px;">🏛️ Buildings</div>
    <ul style="margin:0;padding-left:20px;color:#1e3a8a;line-height:2;font-size:15px;">
      <li><strong>The Taj Mahal:</strong> a perfectly symmetrical building — left and right sides are identical</li>
      <li><strong>Doors and windows:</strong> most are rectangles with a vertical line of symmetry down the centre</li>
    </ul>
  </div>

</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:14px;">Symmetry in the alphabet</div>

  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;flex-wrap:wrap;">
      <span style="min-width:200px;font-weight:700;color:#1e3a8a;font-size:14px;padding-top:6px;">Vertical symmetry only:</span>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        ${['A','H','I','M','O','T','U','V','W','X','Y'].map(l =>
          `<span style="background:#dbeafe;border:1.5px solid #93c5fd;border-radius:6px;padding:4px 10px;font-size:16px;font-weight:700;color:#1e40af;">${l}</span>`
        ).join('')}
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;flex-wrap:wrap;">
      <span style="min-width:200px;font-weight:700;color:#1e3a8a;font-size:14px;padding-top:6px;">Horizontal symmetry only:</span>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        ${['B','C','D','E','K'].map(l =>
          `<span style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:6px;padding:4px 10px;font-size:16px;font-weight:700;color:#16a34a;">${l}</span>`
        ).join('')}
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;flex-wrap:wrap;">
      <span style="min-width:200px;font-weight:700;color:#1e3a8a;font-size:14px;padding-top:6px;">Both vertical and horizontal:</span>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        ${['H','I','O','X'].map(l =>
          `<span style="background:#fef3c7;border:1.5px solid #fcd34d;border-radius:6px;padding:4px 10px;font-size:16px;font-weight:700;color:#b45309;">${l}</span>`
        ).join('')}
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;flex-wrap:wrap;">
      <span style="min-width:200px;font-weight:700;color:#1e3a8a;font-size:14px;padding-top:6px;">No symmetry:</span>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        ${['F','G','J','L','N','P','Q','R','S','Z'].map(l =>
          `<span style="background:#f9fafb;border:1.5px solid #d1d5db;border-radius:6px;padding:4px 10px;font-size:16px;font-weight:700;color:#6b7280;">${l}</span>`
        ).join('')}
      </div>
    </div>

  </div>
</div>`,

      workedExamples: [
        {
          question: 'Which letters in the word MATH have a line of symmetry?',
          answer: 'All four letters — M, A, T and H — have at least one line of symmetry.',
          steps: [
            `Check each letter one by one using the fold test:<br/>
<div style="overflow-x:auto;margin-top:12px;">
  <table style="border-collapse:collapse;min-width:380px;width:100%;">
    <thead>
      <tr>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:10px 16px;border:1.5px solid #bfdbfe;font-size:14px;">Letter</th>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:10px 16px;border:1.5px solid #bfdbfe;font-size:14px;">Symmetrical?</th>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:10px 16px;border:1.5px solid #bfdbfe;font-size:14px;">Type of symmetry</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:center;padding:10px 16px;border:1.5px solid #bfdbfe;font-size:20px;font-weight:700;color:#1e40af;">M</td>
        <td style="text-align:center;padding:10px 16px;border:1.5px solid #bfdbfe;">
          <span style="background:#f0fdf4;border-radius:6px;padding:3px 10px;color:#16a34a;font-weight:700;">Yes ✓</span>
        </td>
        <td style="padding:10px 16px;border:1.5px solid #bfdbfe;color:#374151;font-size:14px;">Vertical line of symmetry</td>
      </tr>
      <tr style="background:#f9fafb;">
        <td style="text-align:center;padding:10px 16px;border:1.5px solid #bfdbfe;font-size:20px;font-weight:700;color:#1e40af;">A</td>
        <td style="text-align:center;padding:10px 16px;border:1.5px solid #bfdbfe;">
          <span style="background:#f0fdf4;border-radius:6px;padding:3px 10px;color:#16a34a;font-weight:700;">Yes ✓</span>
        </td>
        <td style="padding:10px 16px;border:1.5px solid #bfdbfe;color:#374151;font-size:14px;">Vertical line of symmetry</td>
      </tr>
      <tr>
        <td style="text-align:center;padding:10px 16px;border:1.5px solid #bfdbfe;font-size:20px;font-weight:700;color:#1e40af;">T</td>
        <td style="text-align:center;padding:10px 16px;border:1.5px solid #bfdbfe;">
          <span style="background:#f0fdf4;border-radius:6px;padding:3px 10px;color:#16a34a;font-weight:700;">Yes ✓</span>
        </td>
        <td style="padding:10px 16px;border:1.5px solid #bfdbfe;color:#374151;font-size:14px;">Vertical line of symmetry</td>
      </tr>
      <tr style="background:#f9fafb;">
        <td style="text-align:center;padding:10px 16px;border:1.5px solid #bfdbfe;font-size:20px;font-weight:700;color:#1e40af;">H</td>
        <td style="text-align:center;padding:10px 16px;border:1.5px solid #bfdbfe;">
          <span style="background:#fef3c7;border-radius:6px;padding:3px 10px;color:#b45309;font-weight:700;">Yes ✓✓</span>
        </td>
        <td style="padding:10px 16px;border:1.5px solid #bfdbfe;color:#374151;font-size:14px;">Both vertical and horizontal symmetry</td>
      </tr>
    </tbody>
  </table>
</div>`,
            `<strong>Answer:</strong>
<div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#15803d;font-weight:700;">All four letters in MATH have at least one line of symmetry. H has two — both vertical and horizontal.</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: 'The alphabet laid out showing lines of symmetry drawn on each letter that has one and a cross on letters with no symmetry',

      practiceQuestions: [],
    },
  ],

  topicPractice: [

    // ── SECTION 1: WHAT IS SYMMETRY? ─────────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'self',
      question: 'Is a butterfly symmetrical? Write yes or no and explain why in one sentence.',
      answer:
        'Yes — a butterfly is symmetrical.\n\n' +
        'If you fold a butterfly down the middle, both wings match exactly. The fold line is a vertical line of symmetry.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Which of these are symmetrical? Write yes or no for each:\n\n' +
        'a) A square\n' +
        'b) The letter S\n' +
        'c) A rectangle\n' +
        'd) The letter A',
      answer: 'a) Yes    b) No    c) Yes    d) Yes',
      parts: [
        {
          label: 'a) A square',
          correctAnswer: 'Yes',
          correctAnswers: ['Yes', 'yes'],
          explanation:
            'A square has 4 lines of symmetry — vertical, horizontal, and both diagonals.\n' +
            'It is symmetrical.',
        },
        {
          label: 'b) The letter S',
          correctAnswer: 'No',
          correctAnswers: ['No', 'no'],
          explanation:
            'No matter how you fold the letter S, the two halves never match.\n' +
            'The letter S has no lines of symmetry.',
        },
        {
          label: 'c) A rectangle',
          correctAnswer: 'Yes',
          correctAnswers: ['Yes', 'yes'],
          explanation:
            'A rectangle has 2 lines of symmetry — one vertical and one horizontal.\n' +
            'It is symmetrical.',
        },
        {
          label: 'd) The letter A',
          correctAnswer: 'Yes',
          correctAnswers: ['Yes', 'yes'],
          explanation:
            'The letter A has one vertical line of symmetry down the centre.\n' +
            'The left and right halves match exactly.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Thabo says a circle has exactly 4 lines of symmetry because a square does. Is he correct? Explain fully.',
      answer:
        'No — Thabo is incorrect.\n\n' +
        'A circle has infinite lines of symmetry. Any straight line that passes through the centre of a circle divides it into two equal halves that are mirror images of each other.\n\n' +
        'A square has 4 lines of symmetry because it has 4 sides and 4 angles. A circle has no sides or corners, so it is not limited to 4 lines — any diameter works as a line of symmetry.',
    },

    // ── SECTION 2: LINES OF SYMMETRY IN COMMON SHAPES ────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'How many lines of symmetry does a square have?',
      answer: '4',
      correctAnswer: '4',
      correctAnswers: ['4', '4 lines', 'four'],
      explanation:
        'A square has 4 lines of symmetry:\n' +
        '1. Vertical (left to right)\n' +
        '2. Horizontal (top to bottom)\n' +
        '3. Diagonal from top-left to bottom-right\n' +
        '4. Diagonal from top-right to bottom-left\n\n' +
        'All four folds produce two halves that match exactly.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Write the number of lines of symmetry for each shape:\n\n' +
        'a) Rectangle\n' +
        'b) Equilateral triangle\n' +
        'c) Scalene triangle\n' +
        'd) Regular hexagon',
      answer: 'a) 2    b) 3    c) 0    d) 6',
      parts: [
        {
          label: 'a) Rectangle',
          correctAnswer: '2',
          correctAnswers: ['2', 'two', '2 lines'],
          explanation:
            'A rectangle has 2 lines of symmetry: one vertical and one horizontal.\n' +
            'Diagonal folds do not work because the sides of a rectangle are not all equal.',
        },
        {
          label: 'b) Equilateral triangle',
          correctAnswer: '3',
          correctAnswers: ['3', 'three', '3 lines'],
          explanation:
            'An equilateral triangle has all sides and angles equal.\n' +
            'Each line of symmetry runs from one corner to the midpoint of the opposite side.\n' +
            'There are 3 corners, so there are 3 lines of symmetry.',
        },
        {
          label: 'c) Scalene triangle',
          correctAnswer: '0',
          correctAnswers: ['0', 'zero', 'none', 'no lines'],
          explanation:
            'A scalene triangle has all sides and all angles different.\n' +
            'No fold produces two halves that match, so it has 0 lines of symmetry.',
        },
        {
          label: 'd) Regular hexagon',
          correctAnswer: '6',
          correctAnswers: ['6', 'six', '6 lines'],
          explanation:
            'A regular hexagon has 6 equal sides and 6 equal angles.\n' +
            'It has 6 lines of symmetry: 3 through opposite corners and 3 through the midpoints of opposite sides.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question: 'A regular polygon has 8 sides. How many lines of symmetry does it have?',
      answer: '8',
      correctAnswer: '8',
      correctAnswers: ['8', 'eight', '8 lines', '8 lines of symmetry'],
      explanation:
        'A regular polygon has the same number of lines of symmetry as it has sides.\n' +
        '8 sides → 8 lines of symmetry.\n\n' +
        'Each line either passes through two opposite corners or through the midpoints of two opposite sides.',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question: 'Explain how you know a regular 8-sided polygon has that many lines of symmetry.',
      answer:
        'A regular polygon has the same number of lines of symmetry as it has sides.\n\n' +
        'This is because all sides and angles are equal, so every fold from a corner to the opposite side (or midpoint to midpoint) produces two identical halves.\n\n' +
        'For a regular 8-sided polygon: 8 sides → 8 lines of symmetry.',
    },

    // ── SECTION 3: DRAWING THE OTHER HALF OF A SYMMETRICAL FIGURE ────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'A shape has a vertical line of symmetry. A point on the left side is 3 squares away from the line.\n\n' +
        'How far from the line is the mirror point on the right side?',
      answer: '3 squares',
      correctAnswer: '3',
      correctAnswers: ['3', 'three', '3 squares', 'threesquares'],
      explanation:
        'When you reflect a point across a line of symmetry the mirror point is always the same distance from the line — just on the other side.\n' +
        '3 squares left → mirror point is 3 squares right.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Half of a shape is drawn on a grid. The corners of the half shape are 1, 3 and 5 squares away from the vertical line of symmetry.\n\n' +
        'a) How far are the mirror points from the line?\n' +
        'b) If the original point is in the upper part of the shape, where is the mirror point?',
      answer: 'a) 1, 3 and 5 squares    b) Also in the upper part at the same height',
      parts: [
        {
          label: 'a) How far are the mirror points from the line?',
          correctAnswer: '1,3and5squares',
          correctAnswers: [
            '1,3and5squares', '135squares', '135',
            '1and3and5squares', '1and3and5',
            '13and5', '1,3,5',
          ],
          explanation:
            'Each mirror point is the same distance from the line as its original point — just on the other side.\n' +
            'Original distances: 1, 3 and 5 squares.\n' +
            'Mirror distances: also 1, 3 and 5 squares.',
        },
        {
          label: 'b) Where is the mirror point if the original is in the upper part?',
          correctAnswer: 'alsoabove',
          correctAnswers: [
            'alsoabove', 'alsointheupperpart', 'sameheight',
            'alsointheupper', 'sameverticaldistance', 'sameheightabove',
            'upperpart', 'abovethesame', 'alsohigh',
          ],
          explanation:
            'A vertical line of symmetry only flips left and right — it does not change the height of a point.\n' +
            'If the original point is in the upper part of the shape, the mirror point is also in the upper part at exactly the same height.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'A shape on a grid has corners at these distances from the vertical line of symmetry: 2 squares, 4 squares and 6 squares. The shape is 3 squares tall.\n\n' +
        'a) Describe where the mirror corners would be.\n' +
        'b) If you connected all the mirror corners, what shape would you get?\n' +
        'c) How wide would the complete symmetrical shape be?',
      answer:
        'a) The mirror corners are 2, 4 and 6 squares on the other side of the line of symmetry, at the same heights as the original corners.\n\n' +
        'b) Connecting the mirror corners gives the same shape as the original half, but flipped — a mirror image.\n\n' +
        'c) The widest point spans 6 squares to the left and 6 squares to the right of the line, giving a total width of 6 + 6 = 12 squares.',
    },

    // ── SECTION 4: SYMMETRY IN REAL LIFE AND LETTERS ─────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'self',
      question: 'Write two examples of symmetry you can find in nature.',
      answer:
        'Any two valid natural examples are correct.\n\n' +
        'Examples include:\n' +
        '• Butterfly wings — fold down the middle and both wings match\n' +
        '• Leaves — the central vein acts as a line of symmetry\n' +
        '• Snowflakes — have 6 lines of symmetry\n' +
        '• Starfish — have 5 lines of symmetry',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Which of these letters have a vertical line of symmetry?\n\nA, B, C, F, H, M, S, T, X',
      answer: 'A, H, M, T, X',
      correctAnswer: 'AHMTX',
      correctAnswers: ['AHMTX', 'A,H,M,T,X', 'AHMT,X', 'A H M T X'],
      explanation:
        'Test each letter with a vertical fold (left half mirrors right half):\n' +
        '• A — yes, vertical symmetry ✓\n' +
        '• B — no (B has horizontal symmetry, not vertical)\n' +
        '• C — no (C has horizontal symmetry, not vertical)\n' +
        '• F — no lines of symmetry\n' +
        '• H — yes, vertical symmetry ✓\n' +
        '• M — yes, vertical symmetry ✓\n' +
        '• S — no lines of symmetry\n' +
        '• T — yes, vertical symmetry ✓\n' +
        '• X — yes, vertical symmetry ✓\n\n' +
        'Letters with vertical symmetry: A, H, M, T, X',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'How many lines of symmetry does the word MOM have in total, counting each letter separately?\n\n' +
        'M has 1 vertical line of symmetry.\n' +
        'O has infinite lines — count vertical and horizontal only (2 total).\n' +
        'M has 1 vertical line of symmetry.',
      answer: '4',
      correctAnswer: '4',
      correctAnswers: ['4', 'four', '4 lines', '4 lines of symmetry'],
      explanation:
        'Count each letter\'s lines of symmetry:\n' +
        'M → 1 (vertical only)\n' +
        'O → 2 (vertical + horizontal, as instructed)\n' +
        'M → 1 (vertical only)\n\n' +
        'Total: 1 + 2 + 1 = 4 lines of symmetry.',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question: 'Explain your working for how you counted the lines of symmetry in the word MOM.',
      answer:
        'Working:\n' +
        '• M — has 1 vertical line of symmetry (fold left to right, both halves match)\n' +
        '• O — has infinite lines of symmetry, but counting only vertical and horizontal gives 2\n' +
        '• M — has 1 vertical line of symmetry again\n\n' +
        'Total: 1 + 2 + 1 = 4 lines of symmetry.',
    },

  ],

  scoreMessages: [
    { minScore: 21, message: 'Perfect score! You have mastered symmetry.' },
    { minScore: 16, message: 'Excellent work! Review the questions you got wrong and you will have this mastered.' },
    { minScore: 11, message: 'Good effort! Go back and read through the sections you struggled with.' },
    { minScore: 0, message: 'Keep going! Read through the study guide again carefully and then retry.' },
  ],
}
