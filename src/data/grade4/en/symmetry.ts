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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
    },
  ],

  practiceSets: [

    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — SPOTTING SYMMETRY: SHAPES, LETTERS AND COUNTING LINES (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: What Is Symmetry?',
      questions: [
        { difficulty: 'Easy', question: 'A shape is folded exactly in half and both sides match perfectly. What is this fold line called?', answer: 'Line of symmetry', checkMode: 'auto', correctAnswer: 'lineofsymmetry', correctAnswers: ['lineofsymmetry', 'line of symmetry', 'symmetryline', 'axisofsymmetry'], explanation: 'The fold line that divides a shape into two matching mirror-image halves is called the line of symmetry.' },
        { difficulty: 'Easy', question: 'Is a square symmetrical?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'A square can be folded so both halves match exactly — it is symmetrical.' },
        { difficulty: 'Easy', question: 'How many lines of symmetry does a square have?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four', '4 lines'], explanation: 'A square has 4 lines of symmetry: vertical, horizontal, and 2 diagonals.' },
        { difficulty: 'Easy', question: 'Does the letter S have any lines of symmetry?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'No matter how you fold the letter S, the two halves never match — it has 0 lines of symmetry.' },
        { difficulty: 'Easy', question: 'Is a butterfly with wings folded together symmetrical?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'A butterfly folded down the middle has two wings that match exactly — it is symmetrical.' },
        { difficulty: 'Easy', question: 'How many lines of symmetry does a rectangle (not a square) have?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'two', '2 lines'], explanation: 'A rectangle has 2 lines of symmetry: one vertical and one horizontal. The diagonals do not work.' },
        { difficulty: 'Easy', question: 'Does the letter A have a vertical line of symmetry?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'The letter A can be folded down the centre and the left and right sides match — it has vertical symmetry.' },
        { difficulty: 'Easy', question: 'A shape has no line along which it can be folded so both halves match. What do we call this shape?', answer: 'Not symmetrical (asymmetrical)', checkMode: 'auto', correctAnswer: 'notsymmetrical', correctAnswers: ['notsymmetrical', 'not symmetrical', 'asymmetrical', 'nosymmetry'], explanation: 'A shape with no line of symmetry at all is called "not symmetrical" or "asymmetrical".' },
        { difficulty: 'Easy', question: 'If you fold a shape and the two halves do NOT match, is that fold line a line of symmetry?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'A line only counts as a line of symmetry if both halves match exactly when folded.' },
        { difficulty: 'Easy', question: 'How many lines of symmetry does a circle have?', answer: 'Infinite', checkMode: 'auto', correctAnswer: 'infinite', correctAnswers: ['infinite', 'infinitelines', 'unlimited', 'endless', 'infinitemanylines'], explanation: 'Any line through the centre of a circle (a diameter) is a line of symmetry, so a circle has infinite lines of symmetry.' },
        { difficulty: 'Medium', question: 'Is a scalene triangle (all sides different lengths) symmetrical?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'A scalene triangle has all sides and angles different, so no fold produces two matching halves. It has 0 lines of symmetry.' },
        { difficulty: 'Medium', question: 'How many lines of symmetry does an equilateral triangle (3 equal sides) have?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'three', '3 lines'], explanation: 'An equilateral triangle has 3 equal sides, so it has 3 lines of symmetry — one from each corner to the midpoint of the opposite side.' },
        { difficulty: 'Medium', question: 'How many lines of symmetry does an isosceles triangle (only 2 equal sides) have?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'one', '1 line'], explanation: 'An isosceles triangle has exactly 1 line of symmetry, running from the top corner to the midpoint of the base.' },
        { difficulty: 'Medium', question: 'Which of these has more lines of symmetry: a square or a rectangle (not a square)?', answer: 'A square', checkMode: 'auto', correctAnswer: 'square', correctAnswers: ['square', 'asquare', 'thesquare'], explanation: 'A square has 4 lines of symmetry, while a non-square rectangle has only 2.' },
        { difficulty: 'Medium', question: 'The letter H is folded vertically down the middle. Do the two halves match?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'The letter H has a vertical line of symmetry — the left and right halves match exactly.' },
        { difficulty: 'Medium', question: 'The letter H is also folded horizontally through the middle. Do the two halves match?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'The letter H also has a horizontal line of symmetry — the top and bottom halves match. H has both types.' },
        { difficulty: 'Medium', question: 'Does the letter F have any lines of symmetry?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'The letter F cannot be folded along any line so that both halves match — it has 0 lines of symmetry.' },
        { difficulty: 'Medium', question: 'Amahle folds a heart shape down the middle and both sides match. Is a heart shape symmetrical?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'A heart shape has one vertical line of symmetry down the centre.' },
        { difficulty: 'Medium', question: 'Sipho says a shape can only ever have 1 line of symmetry. Is Sipho correct?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Sipho is incorrect — shapes can have 0, 1, 2, or many lines of symmetry (a square has 4, a circle has infinite).' },
        { difficulty: 'Medium', question: 'How many lines of symmetry does the letter O have?', answer: '2 (vertical and horizontal)', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'two', '2 lines'], explanation: 'Written as a simple oval/circle shape, the letter O has a vertical and a horizontal line of symmetry — 2 lines when we count only these two directions.' },
        { difficulty: 'Hard', question: 'Lerato says every 4-sided shape has 4 lines of symmetry, just like a square. Is she correct?', answer: 'No', checkMode: 'self', explanation: 'Lerato is incorrect. Only special 4-sided shapes like a square have 4 lines of symmetry. A rectangle has 2, a rhombus has 2, and a parallelogram has 0 lines of symmetry — the number of lines depends on the shape, not just the number of sides.' },
        { difficulty: 'Hard', question: 'Thabo says a circle has exactly 4 lines of symmetry because a square does. Explain why Thabo is wrong.', answer: 'A circle has infinite lines of symmetry.', checkMode: 'self', explanation: 'A circle has infinite lines of symmetry because any straight line through its centre divides it into two identical halves. A square is limited to 4 lines because it only has 4 corners and 4 sides — a circle has no corners at all, so it is not limited in the same way.' },
        { difficulty: 'Hard', question: 'Explain in your own words what it means for a shape to be symmetrical.', answer: 'A shape is symmetrical if it can be folded along a line so both halves match exactly.', checkMode: 'self', explanation: 'A good answer explains that a symmetrical shape can be folded along a line (the line of symmetry) so that one half lands exactly on top of the other, like a mirror reflection.' },
        { difficulty: 'Hard', question: 'A shape has 0 lines of symmetry. What does this tell you about folding the shape?', answer: 'No matter where you fold it, the two halves will never match.', checkMode: 'self', explanation: 'If a shape has 0 lines of symmetry, there is no straight line anywhere on the shape along which it can be folded so both halves match exactly.' },
        { difficulty: 'Hard', question: 'Why does a square have more lines of symmetry than a rectangle that is not a square?', answer: 'Because all 4 sides of a square are equal, so the diagonals also work as lines of symmetry.', checkMode: 'self', explanation: 'A square has all 4 sides equal, which means folding corner to corner (diagonally) also produces two matching triangles. A non-square rectangle has two pairs of unequal sides, so its diagonal folds do not match — only the vertical and horizontal folds work.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered spotting symmetry in shapes and letters.' },
        { minScore: 19, message: 'Great work! You understand lines of symmetry well — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Practise the fold test on a few more shapes and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — TRICKIER SHAPES, POLYGONS AND MORE LETTERS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Shapes, Polygons and Letters',
      questions: [
        { difficulty: 'Easy', question: 'How many lines of symmetry does a regular pentagon (5 equal sides) have?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'five', '5 lines'], explanation: 'A regular polygon has the same number of lines of symmetry as it has sides. A regular pentagon has 5 sides, so it has 5 lines of symmetry.' },
        { difficulty: 'Easy', question: 'How many lines of symmetry does a regular hexagon (6 equal sides) have?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six', '6 lines'], explanation: 'A regular hexagon has 6 equal sides, so it has 6 lines of symmetry — 3 through opposite corners and 3 through midpoints of opposite sides.' },
        { difficulty: 'Easy', question: 'A regular polygon has 8 equal sides. How many lines of symmetry does it have?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'eight', '8 lines'], explanation: 'For a regular polygon, the number of lines of symmetry always equals the number of sides — 8 sides means 8 lines of symmetry.' },
        { difficulty: 'Easy', question: 'Does the letter M have a vertical line of symmetry?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'The letter M folds neatly down the middle — the left and right halves match.' },
        { difficulty: 'Easy', question: 'Does the letter N have any lines of symmetry?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'The letter N cannot be folded along any straight line so both halves match — it has 0 lines of symmetry.' },
        { difficulty: 'Easy', question: 'Does the letter T have a vertical line of symmetry?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'The letter T folds down the middle of its vertical stem, and the left and right halves match.' },
        { difficulty: 'Easy', question: 'Does the letter B have a horizontal line of symmetry?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'The letter B can be folded top to bottom and the two humps match — it has horizontal symmetry.' },
        { difficulty: 'Easy', question: 'Does the letter B have a vertical line of symmetry?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'The letter B does not fold left-to-right into matching halves — its only symmetry is horizontal.' },
        { difficulty: 'Easy', question: 'Which letter has BOTH a vertical and a horizontal line of symmetry: X or P?', answer: 'X', checkMode: 'auto', correctAnswer: 'X', correctAnswers: ['X', 'x'], explanation: 'The letter X can be folded vertically and horizontally, and in both cases the halves match. P has no lines of symmetry.' },
        { difficulty: 'Easy', question: 'Does the letter C have a vertical line of symmetry?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'The letter C only has a horizontal line of symmetry (top to bottom), not a vertical one.' },
        { difficulty: 'Medium', question: 'Does the letter C have a horizontal line of symmetry?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Folding the letter C from top to bottom gives two matching curved halves — it has horizontal symmetry.' },
        { difficulty: 'Medium', question: 'A rhombus (a "leaning" 4-sided shape with all sides equal but no right angles) has how many lines of symmetry?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'two', '2 lines'], explanation: 'A rhombus has 2 lines of symmetry — its two diagonals. The horizontal and vertical folds do not work unless it is also a square.' },
        { difficulty: 'Medium', question: 'A parallelogram that is not a rectangle or rhombus (slanted sides, opposite sides equal) has how many lines of symmetry?', answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'zero', 'none', 'no lines'], explanation: 'A general parallelogram (not a rectangle or rhombus) has 0 lines of symmetry — no fold produces two matching halves.' },
        { difficulty: 'Medium', question: 'Which of these letters has vertical symmetry: W, S, or Z?', answer: 'W', checkMode: 'auto', correctAnswer: 'W', correctAnswers: ['W', 'w'], explanation: 'The letter W folds neatly down the middle. S and Z have no lines of symmetry at all.' },
        { difficulty: 'Medium', question: 'Which of these letters has NO lines of symmetry at all: H, O, or Z?', answer: 'Z', checkMode: 'auto', correctAnswer: 'Z', correctAnswers: ['Z', 'z'], explanation: 'H and O both have vertical and horizontal symmetry, but Z has no line of symmetry at all.' },
        { difficulty: 'Medium', question: 'Which letters in the word "TOY" have at least one line of symmetry?', answer: 'T, O and Y', checkMode: 'auto', correctAnswer: 'TOY', correctAnswers: ['TOY', 'T,O,Y', 'T, O, Y', 'T,O,andY', 'T, O and Y', 'TandOandY'], explanation: 'T has a vertical line of symmetry, O has both vertical and horizontal symmetry, and Y also has a vertical line of symmetry. All three letters — T, O and Y — have at least one line of symmetry.' },
        { difficulty: 'Medium', question: 'How many lines of symmetry does the word "TOOT" have if you count only the letter O once for each O?', answer: '4', checkMode: 'self', explanation: 'T has 1 line of symmetry, O has 1 (counting only vertical, to keep it simple), O has 1, T has 1. Total: 1 + 1 + 1 + 1 = 4.' },
        { difficulty: 'Medium', question: 'A regular polygon has 10 equal sides. How many lines of symmetry does it have?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', 'ten', '10 lines'], explanation: 'A regular polygon always has the same number of lines of symmetry as it has sides — 10 sides means 10 lines of symmetry.' },
        { difficulty: 'Medium', question: 'Which shape has more lines of symmetry: a regular pentagon or a regular hexagon?', answer: 'A regular hexagon', checkMode: 'auto', correctAnswer: 'hexagon', correctAnswers: ['hexagon', 'regularhexagon', 'thehexagon'], explanation: 'A regular hexagon has 6 lines of symmetry, more than a regular pentagon\'s 5 lines.' },
        { difficulty: 'Medium', question: 'Does an isosceles triangle have more or fewer lines of symmetry than an equilateral triangle?', answer: 'Fewer', checkMode: 'auto', correctAnswer: 'fewer', correctAnswers: ['fewer', 'less', 'lessthan'], explanation: 'An isosceles triangle has only 1 line of symmetry, while an equilateral triangle has 3 — so the isosceles triangle has fewer.' },
        { difficulty: 'Hard', question: 'A regular polygon has 12 equal sides. How many lines of symmetry does it have?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'twelve', '12 lines'], explanation: 'For any regular polygon, the number of lines of symmetry equals the number of sides — 12 sides gives 12 lines of symmetry.' },
        { difficulty: 'Hard', question: 'Explain why a regular polygon always has the same number of lines of symmetry as it has sides.', answer: 'Because all sides and angles are equal, every fold from a corner (or midpoint) to the opposite side produces two identical halves.', checkMode: 'self', explanation: 'In a regular polygon every side and every angle is exactly equal, so for each corner there is exactly one matching fold line to the opposite side or midpoint that produces two identical halves — giving one line of symmetry per side.' },
        { difficulty: 'Hard', question: 'How many lines of symmetry does the word "WOW" have in total, counting each letter separately (count O as 2 lines: vertical and horizontal)?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four', '4 lines'], explanation: 'W has 1 line of symmetry, O has 2 (vertical and horizontal), W has 1. Total: 1 + 2 + 1 = 4 lines of symmetry.' },
        { difficulty: 'Hard', question: 'Why does a rhombus have only 2 lines of symmetry (its diagonals) instead of 4 like a square?', answer: 'Because a rhombus does not have right angles like a square, so only the diagonal folds produce matching halves.', checkMode: 'self', explanation: 'A rhombus has all 4 sides equal (like a square) but its angles are not right angles. This means the vertical and horizontal folds do not line up evenly, so only the two diagonal folds work as lines of symmetry.' },
        { difficulty: 'Hard', question: 'Compare a square and a regular hexagon: which has more lines of symmetry, and by how many more?', answer: 'The regular hexagon has 2 more lines of symmetry than the square.', checkMode: 'self', explanation: 'A square has 4 lines of symmetry and a regular hexagon has 6 lines of symmetry. 6 − 4 = 2, so the hexagon has 2 more lines of symmetry than the square.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered symmetry in polygons and the alphabet.' },
        { minScore: 19, message: 'Great work! You understand regular polygons and letter symmetry well — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Revisit the shapes table and the alphabet chart, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — REAL-WORLD SYMMETRY AND TRUE/FALSE CHECKS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Real Life and True or False',
      questions: [
        { difficulty: 'Easy', question: 'True or False: A butterfly\'s wings are a good example of symmetry in nature.', answer: 'True', checkMode: 'auto', correctAnswer: 'True', correctAnswers: ['True', 'true'], explanation: 'A butterfly folded down the middle has two wings that match — a classic real-life example of symmetry.' },
        { difficulty: 'Easy', question: 'True or False: A human face is roughly symmetrical, with the left and right sides looking similar.', answer: 'True', checkMode: 'auto', correctAnswer: 'True', correctAnswers: ['True', 'true'], explanation: 'A human face is a well-known real-life example of approximate symmetry — the left and right sides are mirror images of each other.' },
        { difficulty: 'Easy', question: 'True or False: A leaf with a central vein is often symmetrical along that vein.', answer: 'True', checkMode: 'auto', correctAnswer: 'True', correctAnswers: ['True', 'true'], explanation: 'Many leaves have a central vein that acts as a line of symmetry, with matching halves on either side.' },
        { difficulty: 'Easy', question: 'True or False: Snowflakes have 6 lines of symmetry.', answer: 'True', checkMode: 'auto', correctAnswer: 'True', correctAnswers: ['True', 'true'], explanation: 'Snowflakes typically have 6 lines of symmetry radiating out from the centre.' },
        { difficulty: 'Easy', question: 'True or False: A starfish typically has 5 lines of symmetry, one through each arm.', answer: 'True', checkMode: 'auto', correctAnswer: 'True', correctAnswers: ['True', 'true'], explanation: 'A starfish usually has 5 arms arranged symmetrically, giving it 5 lines of symmetry.' },
        { difficulty: 'Easy', question: 'True or False: A door is usually a rectangle with a vertical line of symmetry down the centre.', answer: 'True', checkMode: 'auto', correctAnswer: 'True', correctAnswers: ['True', 'true'], explanation: 'Most doors are rectangular and can be folded vertically down the centre with both halves matching.' },
        { difficulty: 'Easy', question: 'True or False: All buildings are perfectly symmetrical.', answer: 'False', checkMode: 'auto', correctAnswer: 'False', correctAnswers: ['False', 'false'], explanation: 'Not all buildings are symmetrical — some famous buildings like the Taj Mahal are, but many buildings have irregular shapes with no line of symmetry.' },
        { difficulty: 'Easy', question: 'True or False: A scalene triangle is a good example of a symmetrical shape.', answer: 'False', checkMode: 'auto', correctAnswer: 'False', correctAnswers: ['False', 'false'], explanation: 'A scalene triangle has 0 lines of symmetry because all its sides and angles are different — it is not symmetrical.' },
        { difficulty: 'Easy', question: 'True or False: The letter S is symmetrical.', answer: 'False', checkMode: 'auto', correctAnswer: 'False', correctAnswers: ['False', 'false'], explanation: 'The letter S has no lines of symmetry — no fold makes the two halves match.' },
        { difficulty: 'Easy', question: 'True or False: A circle has more lines of symmetry than a square.', answer: 'True', checkMode: 'auto', correctAnswer: 'True', correctAnswers: ['True', 'true'], explanation: 'A circle has infinite lines of symmetry, which is more than a square\'s 4 lines.' },
        { difficulty: 'Medium', question: 'True or False: Windows are often rectangular and symmetrical, just like doors.', answer: 'True', checkMode: 'auto', correctAnswer: 'True', correctAnswers: ['True', 'true'], explanation: 'Most windows are rectangles with a vertical (and often horizontal) line of symmetry, similar to doors.' },
        { difficulty: 'Medium', question: 'True or False: The Taj Mahal is an example of a symmetrical building.', answer: 'True', checkMode: 'auto', correctAnswer: 'True', correctAnswers: ['True', 'true'], explanation: 'The Taj Mahal is famous for being a perfectly symmetrical building — its left and right sides are identical.' },
        { difficulty: 'Medium', question: 'True or False: If you fold a symmetrical natural object like a leaf and the halves match, the fold line is a line of symmetry.', answer: 'True', checkMode: 'auto', correctAnswer: 'True', correctAnswers: ['True', 'true'], explanation: 'This is exactly the definition of a line of symmetry — a fold line where both halves match exactly.' },
        { difficulty: 'Medium', question: 'True or False: A rectangle window always has exactly 4 lines of symmetry, just like a square.', answer: 'False', checkMode: 'auto', correctAnswer: 'False', correctAnswers: ['False', 'false'], explanation: 'A rectangle (that is not a square) has only 2 lines of symmetry — vertical and horizontal. Only a square has 4.' },
        { difficulty: 'Medium', question: 'True or False: A regular hexagon, like the shape of a honeycomb cell, has 6 lines of symmetry.', answer: 'True', checkMode: 'auto', correctAnswer: 'True', correctAnswers: ['True', 'true'], explanation: 'Honeycomb cells are regular hexagons, which have 6 lines of symmetry.' },
        { difficulty: 'Medium', question: 'True or False: Lerato says a stop sign, which is a regular octagon (8 sides), has 8 lines of symmetry. Is she correct?', answer: 'True', checkMode: 'auto', correctAnswer: 'True', correctAnswers: ['True', 'true'], explanation: 'A regular octagon (8 equal sides) has 8 lines of symmetry, so Lerato is correct.' },
        { difficulty: 'Medium', question: 'True or False: A scalene triangle-shaped road sign would have no line of symmetry.', answer: 'True', checkMode: 'auto', correctAnswer: 'True', correctAnswers: ['True', 'true'], explanation: 'A scalene triangle has all different sides and angles, so it has 0 lines of symmetry.' },
        { difficulty: 'Medium', question: 'Thabo says all flowers are symmetrical. Is this always true?', answer: 'No', checkMode: 'self', explanation: 'Not all flowers are perfectly symmetrical, but many common flowers (like many daisies) have several lines of symmetry through their centre. It depends on the type of flower — some are more irregular.' },
        { difficulty: 'Medium', question: 'True or False: A wheel is a good example of a shape with infinite lines of symmetry.', answer: 'True', checkMode: 'auto', correctAnswer: 'True', correctAnswers: ['True', 'true'], explanation: 'A wheel is circular, and a circle has infinite lines of symmetry through its centre.' },
        { difficulty: 'Medium', question: 'True or False: A handprint (an outline of a hand) is usually perfectly symmetrical.', answer: 'False', checkMode: 'auto', correctAnswer: 'False', correctAnswers: ['False', 'false'], explanation: 'A hand outline is generally NOT symmetrical because the thumb is only on one side, so the two halves do not match.' },
        { difficulty: 'Hard', question: 'Give two real-life examples of symmetry, other than a butterfly.', answer: 'Any two valid examples, e.g. a leaf, a snowflake, a starfish, a human face, a door.', checkMode: 'self', explanation: 'Valid examples include: leaves (central vein), snowflakes (6 lines), starfish (5 lines), a human face, doors and windows (vertical symmetry), and the Taj Mahal.' },
        { difficulty: 'Hard', question: 'Sipho says a stop sign (regular octagon) and a honeycomb cell (regular hexagon) have the same number of lines of symmetry. Is he correct? Explain.', answer: 'No — the octagon has 8 lines, the hexagon has 6 lines.', checkMode: 'self', explanation: 'Sipho is incorrect. A regular octagon has 8 sides and therefore 8 lines of symmetry, while a regular hexagon has 6 sides and 6 lines of symmetry. They are different because they have different numbers of sides.' },
        { difficulty: 'Hard', question: 'Explain why a human face is only "roughly" symmetrical and not perfectly symmetrical.', answer: 'Real faces have small natural differences between the left and right sides.', checkMode: 'self', explanation: 'A good answer notes that while a face looks symmetrical at a glance, in reality no two halves of a real face are ever perfectly identical — there are always small natural differences, so we say it is "roughly" or "approximately" symmetrical.' },
        { difficulty: 'Hard', question: 'A window is shaped like a regular pentagon. How many lines of symmetry does it have, and explain how you know.', answer: '5 lines of symmetry.', checkMode: 'self', explanation: 'A regular pentagon has 5 equal sides, and for any regular polygon the number of lines of symmetry equals the number of sides, so it has 5 lines of symmetry.' },
        { difficulty: 'Hard', question: 'Amahle folds a photo of a building exactly in half vertically and the two halves match perfectly. What can she conclude about the building\'s design?', answer: 'The building has a vertical line of symmetry — it is symmetrical.', checkMode: 'self', explanation: 'If the two halves match exactly after folding, the fold line is a genuine line of symmetry, so Amahle can conclude the building was designed symmetrically, like the Taj Mahal.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered spotting real-world symmetry.' },
        { minScore: 19, message: 'Great work! You can confidently judge true and false symmetry statements — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Look again at the real-life examples section and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP, COMBINED AND EXPLAIN-YOUR-REASONING (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Multi-Step and Combined Problems',
      questions: [
        { difficulty: 'Easy', question: 'A shape has a vertical line of symmetry. A point on the left side is 4 squares from the line. How far from the line is the mirror point on the right?', answer: '4 squares', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four', '4 squares'], explanation: 'The mirror point is always the same distance from the line of symmetry, just on the other side — 4 squares.' },
        { difficulty: 'Easy', question: 'Which letters in the word "HAT" have at least one line of symmetry?', answer: 'H, A and T', checkMode: 'auto', correctAnswer: 'HAT', correctAnswers: ['HAT', 'H,A,T', 'H, A, T', 'hat'], explanation: 'H, A, and T all have a vertical line of symmetry, so all three letters in HAT have symmetry.' },
        { difficulty: 'Easy', question: 'A square and an equilateral triangle are compared. Which shape has more lines of symmetry?', answer: 'The square', checkMode: 'auto', correctAnswer: 'square', correctAnswers: ['square', 'thesquare', 'asquare'], explanation: 'A square has 4 lines of symmetry, while an equilateral triangle has 3 — so the square has more.' },
        { difficulty: 'Easy', question: 'Count the total lines of symmetry in a square (4) plus a rectangle (2). What is the total?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: 'A square has 4 lines of symmetry and a rectangle has 2. 4 + 2 = 6.' },
        { difficulty: 'Easy', question: 'Count the total lines of symmetry in an equilateral triangle (3) plus an isosceles triangle (1). What is the total?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], explanation: 'An equilateral triangle has 3 lines and an isosceles triangle has 1. 3 + 1 = 4.' },
        { difficulty: 'Medium', question: 'A shape has corners 2, 5 and 7 squares from a vertical line of symmetry. What are the distances of the mirror points from the line?', answer: '2, 5 and 7 squares', checkMode: 'auto', correctAnswer: '2,5and7squares', correctAnswers: ['2,5and7squares', '257squares', '2and5and7', '2,5,7', '2 5 7'], explanation: 'Each mirror point sits the same distance from the line as its original point, just on the other side: 2, 5 and 7 squares.' },
        { difficulty: 'Medium', question: 'How many lines of symmetry are there in total across a regular pentagon (5) and a regular hexagon (6)?', answer: '11', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', 'eleven'], explanation: 'A regular pentagon has 5 lines and a regular hexagon has 6. 5 + 6 = 11.' },
        { difficulty: 'Medium', question: 'How many lines of symmetry does the word "MUM" have in total, counting M as 1 line and U as 1 line each?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'three'], explanation: 'M has 1 line of symmetry, U has 1 line of symmetry, M has 1 line of symmetry. Total: 1 + 1 + 1 = 3.' },
        { difficulty: 'Medium', question: 'Which has more total lines of symmetry: the word "TOOT" (T=1, O=2, O=2, T=1) or a regular hexagon?', answer: 'The word TOOT (6 lines) ties with the hexagon (6 lines)', checkMode: 'self', explanation: 'TOOT: 1 + 2 + 2 + 1 = 6 lines of symmetry. A regular hexagon has 6 lines of symmetry. They are equal.' },
        { difficulty: 'Medium', question: 'A shape on a grid has a horizontal line of symmetry. A point in the top part is 3 squares above the line. Where is its mirror point?', answer: '3 squares below the line', checkMode: 'auto', correctAnswer: '3squaresbelow', correctAnswers: ['3squaresbelow', '3below', '3squaresbelowtheline', 'belowbythree'], explanation: 'A horizontal line of symmetry flips up and down, so the mirror point is the same distance on the opposite side — 3 squares below the line.' },
        { difficulty: 'Medium', question: 'A shape\'s half has points 1, 2 and 4 squares from a vertical line of symmetry. If the shape is 5 squares tall, does the height change when you draw the mirror half?', answer: 'No, the height stays the same', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'nostayssame', 'staysthesame', 'unchanged'], explanation: 'A vertical line of symmetry only reflects left and right — it never changes the height of the shape, so it stays 5 squares tall.' },
        { difficulty: 'Medium', question: 'A regular polygon has 7 sides. Amahle says it has 6 lines of symmetry. Is she correct?', answer: 'No, it has 7 lines of symmetry.', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', '7', 'seven', 'sevenlines'], explanation: 'A regular polygon has the same number of lines of symmetry as sides, so a 7-sided regular polygon has 7 lines of symmetry, not 6.' },
        { difficulty: 'Medium', question: 'Compare the letter X (2 lines of symmetry) and the letter A (1 line of symmetry). How many more lines does X have than A?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'one'], explanation: 'X has 2 lines of symmetry (vertical and horizontal) and A has 1 (vertical). 2 − 1 = 1.' },
        { difficulty: 'Medium', question: 'A shape has 2 lines of symmetry. Sipho draws only half of it correctly using one of the lines. How many total quarters would you expect if you use BOTH lines of symmetry to complete the full shape from just one quarter?', answer: '4 quarters', checkMode: 'self', explanation: 'If a shape has 2 lines of symmetry crossing at the centre (like a rectangle), reflecting one quarter across both lines produces all 4 quarters of the shape.' },
        { difficulty: 'Medium', question: 'True or False: A shape with 6 lines of symmetry must be a regular hexagon.', answer: 'False', checkMode: 'auto', correctAnswer: 'False', correctAnswers: ['False', 'false'], explanation: 'This is false — a circle also effectively has more than 6 lines (infinite), and other special shapes could coincidentally have 6 lines too. Having 6 lines of symmetry does not guarantee the shape is a regular hexagon.' },
        { difficulty: 'Hard', question: 'A shape on a grid has a vertical line of symmetry. Corners are 2, 4 and 6 squares from the line, and the shape is 3 squares tall. Describe where the mirror corners would be, and how wide the whole shape would be.', answer: 'Mirror corners are 2, 4 and 6 squares on the other side, at the same heights. Total width: 6 + 6 = 12 squares.', checkMode: 'self', explanation: 'The mirror corners sit at 2, 4 and 6 squares on the opposite side of the line, at the same heights as the originals (a vertical line does not change height). The widest point of the shape spans 6 squares left and 6 squares right of the line, giving a total width of 12 squares.' },
        { difficulty: 'Hard', question: 'Explain step by step how you would check whether a hexagon-shaped tile is a REGULAR hexagon using symmetry.', answer: 'Check if it has 6 equal sides and 6 lines of symmetry.', checkMode: 'self', explanation: 'First measure the sides to see if all 6 are equal. Then test folds: a regular hexagon should have exactly 6 lines of symmetry (3 through opposite corners, 3 through midpoints of opposite sides). If any fold fails to match, the hexagon is not regular.' },
        { difficulty: 'Hard', question: 'Lerato says the word "BOX" has a total of 3 lines of symmetry if you count B=1 (horizontal), O=2 (vertical+horizontal), X=2 (vertical+horizontal). Check her working and give the correct total.', answer: 'The correct total is 5 (1 + 2 + 2), not 3.', checkMode: 'self', explanation: 'B has 1 line of symmetry (horizontal). O has 2 lines (vertical and horizontal). X has 2 lines (vertical and horizontal). The correct total is 1 + 2 + 2 = 5, so Lerato made an addition mistake.' },
        { difficulty: 'Hard', question: 'A shape has both a vertical AND a horizontal line of symmetry, like a rectangle. If a corner point is 3 squares right and 2 squares up from the centre, where are all 3 of its mirror images?', answer: '3 left & 2 up, 3 right & 2 down, and 3 left & 2 down.', checkMode: 'self', explanation: 'Reflecting across the vertical line gives a point 3 squares left and 2 up. Reflecting the original across the horizontal line gives 3 squares right and 2 down. Reflecting across both lines gives 3 squares left and 2 down. Together with the original, this makes all 4 corners of the rectangle.' },
        { difficulty: 'Hard', question: 'Explain why a regular polygon with more sides (like a hexagon) looks "more like a circle" than one with fewer sides (like a triangle).', answer: 'More sides means more lines of symmetry, which makes the shape look smoother and rounder, closer to a circle which has infinite lines.', checkMode: 'self', explanation: 'As the number of equal sides in a regular polygon increases, so does the number of lines of symmetry. With more lines of symmetry the shape becomes more evenly balanced in every direction, making it look increasingly like a circle, which has infinite lines of symmetry.' },
        { difficulty: 'Hard', question: 'Thabo has a shape with 4 lines of symmetry and Sipho has a shape with 3 lines of symmetry. If both shapes are regular polygons, how many sides does each shape have?', answer: 'Thabo\'s shape has 4 sides (a square), Sipho\'s has 3 sides (an equilateral triangle).', checkMode: 'auto', correctAnswer: '4and3', correctAnswers: ['4and3', '4,3', 'squareandtriangle', '4sidesand3sides'], explanation: 'For regular polygons, the number of lines of symmetry equals the number of sides. 4 lines of symmetry → 4 sides (square). 3 lines of symmetry → 3 sides (equilateral triangle).' },
        { difficulty: 'Hard', question: 'A design uses a regular pentagon and a regular hexagon side by side. Explain which shape would look more "circular" and why.', answer: 'The hexagon, because it has more sides and more lines of symmetry.', checkMode: 'self', explanation: 'The regular hexagon has 6 sides and 6 lines of symmetry, compared to the pentagon\'s 5 sides and 5 lines. More sides and lines of symmetry make a regular polygon appear closer to a circle.' },
        { difficulty: 'Hard', question: 'Amahle says the letters in "SYMMETRY" that have a line of symmetry are: Y, M, M, and Y. Check her answer, listing each letter\'s symmetry type.', answer: 'Y (vertical), M (vertical), M (vertical), Y (vertical) — Amahle is correct about these 4 letters (T also has vertical symmetry).', checkMode: 'self', explanation: 'Checking S-Y-M-M-E-T-R-Y: S has none, Y has vertical symmetry, M has vertical symmetry, M has vertical symmetry, E has horizontal symmetry (Amahle missed this one), T has vertical symmetry (also missed), R has none, Y has vertical symmetry. Amahle correctly found Y, M, M, Y but missed that E and T also have lines of symmetry.' },
        { difficulty: 'Hard', question: 'A shape has 0 lines of symmetry. Its "twin" shape is created by adding 2 more equal sides to make it a regular polygon with a matching number of sides as lines of symmetry. If the twin now has 5 lines of symmetry, how many sides does the twin have, and what shape is it?', answer: '5 sides — a regular pentagon.', checkMode: 'auto', correctAnswer: '5sidespentagon', correctAnswers: ['5sidespentagon', '5', 'pentagon', '5sides', 'regularpentagon'], explanation: 'Since the twin is a regular polygon, its number of sides equals its number of lines of symmetry. With 5 lines of symmetry, the twin shape is a regular pentagon with 5 sides.' },
        { difficulty: 'Hard', question: 'Summarise in your own words the key rule that connects a regular polygon\'s number of sides to its lines of symmetry, and give one example.', answer: 'For a regular polygon, the number of lines of symmetry equals the number of sides. Example: a regular hexagon has 6 sides and 6 lines of symmetry.', checkMode: 'self', explanation: 'A strong answer states the key rule clearly (equal sides and angles mean the number of lines of symmetry always matches the number of sides) and backs it up with a correct example, such as a square (4 and 4), pentagon (5 and 5), or hexagon (6 and 6).' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered multi-step and combined symmetry problems.' },
        { minScore: 19, message: 'Great work! You can confidently combine ideas about symmetry — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples for combined problems and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

  ],
}
