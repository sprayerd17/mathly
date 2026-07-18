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
            `<strong>Step 1:</strong> Identify the <span style="color:#dc2626;font-weight:700;">line of symmetry</span> — the vertical red dashed line — and the <span style="color:#1e40af;font-weight:700;">given (blue) half</span> with points A, B and C marked on it:<br/>
<div style="overflow-x:auto;margin-top:12px;">
  <svg viewBox="0 0 220 180" width="220" height="180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><polygon points="110,30 90,50 70,90 50,130 110,150" fill="#dbeafe" fill-opacity="0.7" stroke="#1e40af" stroke-width="2.5"/><circle cx="90" cy="50" r="4" fill="#1e40af"/><text x="85" y="46" font-size="13" font-weight="700" fill="#1e40af" text-anchor="end">A</text><circle cx="70" cy="90" r="4" fill="#1e40af"/><text x="65" y="86" font-size="13" font-weight="700" fill="#1e40af" text-anchor="end">B</text><circle cx="50" cy="130" r="4" fill="#1e40af"/><text x="45" y="126" font-size="13" font-weight="700" fill="#1e40af" text-anchor="end">C</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">line of symmetry</text></svg>
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
            `<strong>Step 4:</strong> Connect the mirror points A′ → B′ → C′ in the same order as the original points were connected. The <span style="color:#16a34a;font-weight:700;">green half</span> should look like an exact reflection of the <span style="color:#1e40af;font-weight:700;">blue half</span>:<br/>
<div style="overflow-x:auto;margin-top:12px;">
  <svg viewBox="0 0 220 180" width="220" height="180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><polygon points="110,30 90,50 70,90 50,130 110,150" fill="#dbeafe" fill-opacity="0.7" stroke="#1e40af" stroke-width="2.5"/><polygon points="110,30 130,50 150,90 170,130 110,150" fill="#dcfce7" fill-opacity="0.7" stroke="#16a34a" stroke-width="2.5"/><circle cx="90" cy="50" r="4" fill="#1e40af"/><text x="85" y="46" font-size="13" font-weight="700" fill="#1e40af" text-anchor="end">A</text><circle cx="70" cy="90" r="4" fill="#1e40af"/><text x="65" y="86" font-size="13" font-weight="700" fill="#1e40af" text-anchor="end">B</text><circle cx="50" cy="130" r="4" fill="#1e40af"/><text x="45" y="126" font-size="13" font-weight="700" fill="#1e40af" text-anchor="end">C</text><circle cx="130" cy="50" r="4" fill="#16a34a"/><text x="135" y="46" font-size="13" font-weight="700" fill="#16a34a">A′</text><circle cx="150" cy="90" r="4" fill="#16a34a"/><text x="155" y="86" font-size="13" font-weight="700" fill="#16a34a">B′</text><circle cx="170" cy="130" r="4" fill="#16a34a"/><text x="175" y="126" font-size="13" font-weight="700" fill="#16a34a">C′</text></svg>
</div>
<div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#15803d;font-weight:700;">The two halves together form the complete symmetrical shape ✓</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: 'Grid showing half of an irregular shape on the left of a vertical red line of symmetry with the mirror half completed in green on the right',
      diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><polygon points="110,30 90,50 70,90 50,130 110,150" fill="#dbeafe" fill-opacity="0.7" stroke="#1e40af" stroke-width="2.5"/><polygon points="110,30 130,50 150,90 170,130 110,150" fill="#dcfce7" fill-opacity="0.7" stroke="#16a34a" stroke-width="2.5"/><circle cx="90" cy="50" r="4" fill="#1e40af"/><text x="85" y="46" font-size="13" font-weight="700" fill="#1e40af" text-anchor="end">A</text><circle cx="70" cy="90" r="4" fill="#1e40af"/><text x="65" y="86" font-size="13" font-weight="700" fill="#1e40af" text-anchor="end">B</text><circle cx="50" cy="130" r="4" fill="#1e40af"/><text x="45" y="126" font-size="13" font-weight="700" fill="#1e40af" text-anchor="end">C</text><circle cx="130" cy="50" r="4" fill="#16a34a"/><text x="135" y="46" font-size="13" font-weight="700" fill="#16a34a">A′</text><circle cx="150" cy="90" r="4" fill="#16a34a"/><text x="155" y="86" font-size="13" font-weight="700" fill="#16a34a">B′</text><circle cx="170" cy="130" r="4" fill="#16a34a"/><text x="175" y="126" font-size="13" font-weight="700" fill="#16a34a">C′</text></svg>',

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
    // SET 1 (20 Qs): A basics(0-3) B counting(4-8) C letters(9-11) D polygon(12-14) E grid(15-17) F reasoning(18-19)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'A shape is folded exactly in half and both sides match perfectly. What is this fold line called?', answer: 'Line of symmetry', checkMode: 'auto', correctAnswer: 'lineofsymmetry', correctAnswers: ['lineofsymmetry', 'line of symmetry', 'symmetryline', 'axisofsymmetry'], explanation: 'The fold line that divides a shape into two matching mirror-image halves is called the line of symmetry.' },
        { difficulty: 'Easy', question: 'Is a square symmetrical?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'A square can be folded so both halves match exactly — it is symmetrical.' },
        { difficulty: 'Easy', question: 'True or False: If you fold a shape along a line and the two halves do NOT match, that line is still a line of symmetry.', answer: 'False', checkMode: 'auto', correctAnswer: 'False', correctAnswers: ['False', 'false'], explanation: 'A line only counts as a line of symmetry if both halves match exactly when folded. If they do not match, it is not a line of symmetry.' },
        { difficulty: 'Easy', question: 'Is the letter S symmetrical?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'No matter how you fold the letter S, the two halves never match — it has 0 lines of symmetry.' },
        { difficulty: 'Easy', question: 'How many lines of symmetry does a circle have?', answer: 'Infinite', checkMode: 'auto', correctAnswer: 'infinite', correctAnswers: ['infinite', 'infinitelines', 'unlimited', 'endless', 'infinitemanylines'], explanation: 'Any line through the centre of a circle (a diameter) is a line of symmetry, so a circle has infinite lines of symmetry.' },
        { difficulty: 'Easy', question: 'How many lines of symmetry does a square have?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four', '4 lines'], explanation: 'A square has 4 lines of symmetry: vertical, horizontal, and 2 diagonals.' },
        { difficulty: 'Easy-Medium', question: 'Which of these has more lines of symmetry: a square or a rectangle (not a square)?', answer: 'A square', checkMode: 'auto', correctAnswer: 'square', correctAnswers: ['square', 'asquare', 'thesquare'], explanation: 'A square has 4 lines of symmetry, while a non-square rectangle has only 2.' },
        { difficulty: 'Medium', question: 'How many lines of symmetry does a scalene triangle (all sides different lengths) have?', answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'zero', 'none'], explanation: 'A scalene triangle has all sides and angles different, so no fold produces two matching halves. It has 0 lines of symmetry.' },
        { difficulty: 'Medium', question: 'Kagiso says a rhombus (all 4 sides equal, no right angles) has 4 lines of symmetry, the same as a square, because both shapes have 4 equal sides. Is Kagiso correct?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Kagiso is incorrect. A rhombus has only 2 lines of symmetry — its two diagonals. Because its angles are not right angles, the vertical and horizontal folds do not match, unlike in a square. Having equal sides is not enough on its own.' },
        { difficulty: 'Medium', question: 'Does the letter M have a vertical line of symmetry?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'The letter M folds neatly down the middle — the left and right halves match.' },
        { difficulty: 'Medium', question: 'Which letter has BOTH a vertical and a horizontal line of symmetry: H or N?', answer: 'H', checkMode: 'auto', correctAnswer: 'H', correctAnswers: ['H', 'h'], explanation: 'The letter H can be folded vertically and horizontally, and in both cases the halves match. N has no lines of symmetry at all.' },
        { difficulty: 'Medium', question: 'Which letters in the word "MUM" have at least one line of symmetry?', answer: 'M, U and M (all three letters)', checkMode: 'auto', correctAnswer: 'MUM', correctAnswers: ['MUM', 'M,U,M', 'M, U, M', 'allthree', 'mum'], explanation: 'M has a vertical line of symmetry, and U also has a vertical line of symmetry. Since the word is M-U-M, every letter in it has at least one line of symmetry.' },
        { difficulty: 'Medium', question: 'A regular polygon has 5 equal sides (a regular pentagon). How many lines of symmetry does it have?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'five', '5 lines'], explanation: 'A regular polygon has the same number of lines of symmetry as it has sides. A regular pentagon has 5 sides, so it has 5 lines of symmetry.' },
        { difficulty: 'Medium', question: 'A regular polygon has 8 equal sides (a regular octagon). How many lines of symmetry does it have?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'eight', '8 lines'], explanation: 'For a regular polygon, the number of lines of symmetry always equals the number of sides — 8 sides means 8 lines of symmetry.' },
        { difficulty: 'Medium', question: 'Explain why a regular polygon always has the same number of lines of symmetry as it has sides.', answer: 'Because all sides and angles are equal, every fold from a corner (or midpoint) to the opposite side produces two identical halves.', checkMode: 'self', explanation: 'In a regular polygon every side and every angle is exactly equal, so for each corner there is exactly one matching fold line to the opposite side or midpoint that produces two identical halves — giving one line of symmetry per side.' },
        { difficulty: 'Medium-Hard', question: 'The grid shows a vertical red dashed line of symmetry with points A, B and C marked on the left side only. How many squares from the line is point A, and how many squares from the line should its mirror point be on the right?', answer: 'A is 2 squares from the line; its mirror point is also 2 squares from the line, on the right.', checkMode: 'auto', correctAnswer: '2and2', correctAnswers: ['2and2', '2,2', '22', 'bothtwo', '2squaresand2squares'], explanation: 'Point A sits 2 squares to the left of the line of symmetry. A mirror point is always the same distance from the line as the original point, just on the opposite side — so A′ is also 2 squares from the line, but on the right.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><circle cx="70" cy="50" r="4" fill="#2563eb"/><text x="65" y="46" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">A</text><circle cx="90" cy="90" r="4" fill="#2563eb"/><text x="85" y="86" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">B</text><circle cx="50" cy="130" r="4" fill="#2563eb"/><text x="45" y="126" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">C</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">line of symmetry</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Using the same grid: point C is 3 squares from the line of symmetry, and point B is 1 square from the line. If you drew in the mirror points for A, B and C, would the total height of the completed shape change from the height of just the given half?', answer: 'No, the height stays the same — only the width changes.', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'nostayssame', 'staysthesame', 'unchanged', 'heightdoesnotchange'], explanation: 'A vertical line of symmetry reflects points left and right only. It never moves anything up or down, so the overall height of the shape stays exactly the same — only the width increases as the mirror half is added.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><circle cx="70" cy="50" r="4" fill="#2563eb"/><text x="65" y="46" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">A</text><circle cx="90" cy="90" r="4" fill="#2563eb"/><text x="85" y="86" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">B</text><circle cx="50" cy="130" r="4" fill="#2563eb"/><text x="45" y="126" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">C</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">line of symmetry</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Using the same grid again: is the red dashed line of symmetry oriented vertically or horizontally, and what tells you this?', answer: 'Vertically — the red dashed line runs up and down (top to bottom) on the grid.', checkMode: 'auto', correctAnswer: 'vertically', correctAnswers: ['vertically', 'vertical', 'vertically-updown'], explanation: 'A vertical line of symmetry runs straight up and down, splitting the grid into a left side and a right side, which is exactly how the red dashed line is drawn here — not side to side like a horizontal line would be.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><circle cx="70" cy="50" r="4" fill="#2563eb"/><text x="65" y="46" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">A</text><circle cx="90" cy="90" r="4" fill="#2563eb"/><text x="85" y="86" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">B</text><circle cx="50" cy="130" r="4" fill="#2563eb"/><text x="45" y="126" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">C</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">line of symmetry</text></svg>' },
        { difficulty: 'Hard', question: 'Is a human face perfectly symmetrical? Explain your reasoning.', answer: 'No — a real face is only roughly symmetrical.', checkMode: 'self', explanation: 'A human face looks symmetrical at a glance, but in reality no two halves of a real face are ever perfectly identical — there are always small natural differences, so we say it is "roughly" or "approximately" symmetrical, not perfectly symmetrical.' },
        { difficulty: 'Hard', question: 'Lerato says every 4-sided shape has 4 lines of symmetry, just like a square. Is she correct? Explain, giving at least one example that disproves her claim.', answer: 'No — for example, a rectangle has 2, and a general parallelogram has 0.', checkMode: 'self', explanation: 'Lerato is incorrect. Only special 4-sided shapes like a square have 4 lines of symmetry. A rectangle (not a square) has 2, a rhombus has 2, and a parallelogram has 0 lines of symmetry — the number of lines depends on the exact shape, not just the number of sides.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered symmetry across shapes, letters, polygons and grids.' },
        { minScore: 15, message: 'Great work! You understand symmetry well — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the study guide sections you found tricky and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs): same block layout, varied phrasing/numbers
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'When a shape is folded so that both halves land exactly on top of each other, what do we call the fold line?', answer: 'Line of symmetry', checkMode: 'auto', correctAnswer: 'lineofsymmetry', correctAnswers: ['lineofsymmetry', 'line of symmetry', 'symmetryline', 'axisofsymmetry'], explanation: 'A fold line along which both halves of a shape match exactly is called the line of symmetry.' },
        { difficulty: 'Easy', question: 'Is the letter A symmetrical?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'The letter A can be folded down the middle, and the left and right halves match — it is symmetrical.' },
        { difficulty: 'Easy', question: 'True or False: A line drawn anywhere across a shape is automatically a line of symmetry, even if the two halves look different.', answer: 'False', checkMode: 'auto', correctAnswer: 'False', correctAnswers: ['False', 'false'], explanation: 'A line only counts as a line of symmetry if folding along it produces two halves that match exactly. A random line across a shape usually will not.' },
        { difficulty: 'Easy', question: 'Does the letter F have any lines of symmetry?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'The letter F cannot be folded along any line so that both halves match — it has 0 lines of symmetry.' },
        { difficulty: 'Easy', question: 'How many lines of symmetry does a circle have?', answer: 'Infinite', checkMode: 'auto', correctAnswer: 'infinite', correctAnswers: ['infinite', 'infinitelines', 'unlimited', 'endless', 'infinitemanylines'], explanation: 'Any diameter of a circle is a line of symmetry, so a circle has infinitely many lines of symmetry.' },
        { difficulty: 'Easy', question: 'How many lines of symmetry does a rectangle (not a square) have?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'two', '2 lines'], explanation: 'A rectangle has 2 lines of symmetry: one vertical and one horizontal. The diagonals do not work because the sides are not all equal.' },
        { difficulty: 'Easy-Medium', question: 'Which shape has more lines of symmetry: a regular pentagon or a regular hexagon?', answer: 'A regular hexagon', checkMode: 'auto', correctAnswer: 'hexagon', correctAnswers: ['hexagon', 'regularhexagon', 'thehexagon'], explanation: 'A regular hexagon has 6 lines of symmetry, more than a regular pentagon\'s 5 lines.' },
        { difficulty: 'Medium', question: 'How many lines of symmetry does a general parallelogram have (slanted sides, opposite sides equal, but not a rectangle or rhombus)?', answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'zero', 'none', 'no lines'], explanation: 'A general parallelogram has 0 lines of symmetry — no fold produces two matching halves, even though its opposite sides are equal.' },
        { difficulty: 'Medium', question: 'Naledi says an isosceles triangle and an equilateral triangle must have the same number of lines of symmetry, since both have at least 2 equal sides. Is Naledi correct?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Naledi is incorrect. An isosceles triangle has 1 line of symmetry, but an equilateral triangle (all 3 sides equal) has 3 lines of symmetry — one from each corner. Having some equal sides is not enough to guarantee the same symmetry.' },
        { difficulty: 'Medium', question: 'Does the letter W have a vertical line of symmetry?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'The letter W folds neatly down the middle — the left and right halves match.' },
        { difficulty: 'Medium', question: 'Which letter has NO lines of symmetry at all: O or Z?', answer: 'Z', checkMode: 'auto', correctAnswer: 'Z', correctAnswers: ['Z', 'z'], explanation: 'O has both vertical and horizontal symmetry, but Z has no line of symmetry at all.' },
        { difficulty: 'Medium', question: 'Which letters in the word "TOY" have at least one line of symmetry?', answer: 'T, O and Y (all three letters)', checkMode: 'auto', correctAnswer: 'TOY', correctAnswers: ['TOY', 'T,O,Y', 'T, O, Y', 'T,O,andY', 'T, O and Y', 'TandOandY'], explanation: 'T has a vertical line of symmetry, O has both vertical and horizontal symmetry, and Y also has a vertical line of symmetry. All three letters in TOY have at least one line of symmetry.' },
        { difficulty: 'Medium', question: 'A regular polygon has 6 equal sides (a regular hexagon). How many lines of symmetry does it have?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six', '6 lines'], explanation: 'A regular hexagon has 6 equal sides, so it has 6 lines of symmetry — 3 through opposite corners and 3 through midpoints of opposite sides.' },
        { difficulty: 'Medium', question: 'A regular polygon has 10 equal sides (a regular decagon). How many lines of symmetry does it have?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', 'ten', '10 lines'], explanation: 'A regular polygon always has the same number of lines of symmetry as it has sides — 10 sides means 10 lines of symmetry.' },
        { difficulty: 'Medium', question: 'Explain why the rule "lines of symmetry equal number of sides" works only for REGULAR polygons and not for irregular ones.', answer: 'Because irregular polygons do not have all sides and angles equal, so most folds will not produce matching halves.', checkMode: 'self', explanation: 'The rule relies on every side and angle being identical, so that each corner lines up with a matching fold. In an irregular polygon the sides and angles are different sizes, so most possible fold lines will not create two identical halves — the shape may end up with fewer lines of symmetry than it has sides, or none at all.' },
        { difficulty: 'Medium-Hard', question: 'The grid shows a vertical red dashed line of symmetry with points P, Q and R marked on the left side only. Point P is 1 square from the line. How far from the line should its mirror point be, and on which side?', answer: '1 square from the line, on the right side.', checkMode: 'auto', correctAnswer: '1right', correctAnswers: ['1right', '1squareright', '1', 'onesquareright'], explanation: 'A mirror point is always the same distance from the line of symmetry as the original point, just on the opposite side. Since P is 1 square left of the line, its mirror point P′ is 1 square to the right.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><circle cx="90" cy="50" r="4" fill="#2563eb"/><text x="85" y="46" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">P</text><circle cx="50" cy="90" r="4" fill="#2563eb"/><text x="45" y="86" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">Q</text><circle cx="70" cy="150" r="4" fill="#2563eb"/><text x="65" y="146" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">R</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">line of symmetry</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Using the same grid: point Q is 3 squares from the line and point R is 2 squares from the line. Once the mirror half is drawn in using P, Q and R, will the width of the whole shape be more, less, or the same as just the given (left) half?', answer: 'More — the total width increases because the mirror half adds new squares on the right.', checkMode: 'auto', correctAnswer: 'more', correctAnswers: ['more', 'wider', 'greater', 'increases'], explanation: 'Reflecting the given half across the line of symmetry adds an entirely new mirror half on the right side. This makes the completed shape wider than just the original half — roughly double the width, since the mirror half matches the original in size.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><circle cx="90" cy="50" r="4" fill="#2563eb"/><text x="85" y="46" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">P</text><circle cx="50" cy="90" r="4" fill="#2563eb"/><text x="45" y="86" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">Q</text><circle cx="70" cy="150" r="4" fill="#2563eb"/><text x="65" y="146" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">R</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">line of symmetry</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Using the same grid again: if the red dashed line had instead been drawn running left to right across the middle of the grid instead of up and down, what type of line of symmetry would that be?', answer: 'A horizontal line of symmetry.', checkMode: 'auto', correctAnswer: 'horizontal', correctAnswers: ['horizontal', 'ahorizontalline'], explanation: 'A line that runs left to right (side to side) across a shape or grid, splitting it into a top half and a bottom half, is called a horizontal line of symmetry — different from the vertical line shown here, which splits left and right.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><circle cx="90" cy="50" r="4" fill="#2563eb"/><text x="85" y="46" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">P</text><circle cx="50" cy="90" r="4" fill="#2563eb"/><text x="45" y="86" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">Q</text><circle cx="70" cy="150" r="4" fill="#2563eb"/><text x="65" y="146" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">R</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">line of symmetry</text></svg>' },
        { difficulty: 'Hard', question: 'A stop sign is a regular octagon and a honeycomb cell is a regular hexagon. Sipho says they have the same number of lines of symmetry. Check his reasoning and explain whether he is correct.', answer: 'No — the octagon has 8 lines, the hexagon has 6 lines.', checkMode: 'self', explanation: 'Sipho is incorrect. A regular octagon has 8 sides and therefore 8 lines of symmetry, while a regular hexagon has 6 sides and 6 lines of symmetry. They are different shapes with different numbers of sides, so they cannot have the same number of lines of symmetry.' },
        { difficulty: 'Hard', question: 'A flag design uses a rectangle with a smaller equilateral triangle placed exactly in its centre. Explain how many lines of symmetry the combined design could have, and justify your answer.', answer: 'It could have 1 vertical line of symmetry, if the triangle is centred and pointing straight up or down.', checkMode: 'self', explanation: 'A rectangle alone would have 2 lines of symmetry (vertical and horizontal), but adding a triangle in the centre breaks the horizontal symmetry unless the triangle itself is symmetrical about that same line too. If the triangle is centred and points straight up (or down), only the shared vertical line still works for both shapes, so the combined design has just 1 line of symmetry.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered symmetry across shapes, letters, polygons and grids.' },
        { minScore: 15, message: 'Great work! You understand symmetry well — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the study guide sections you found tricky and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs): same block layout, varied phrasing/numbers
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'What do we call the fold line along which a shape can be divided into two mirror-image halves?', answer: 'Line of symmetry', checkMode: 'auto', correctAnswer: 'lineofsymmetry', correctAnswers: ['lineofsymmetry', 'line of symmetry', 'symmetryline', 'axisofsymmetry'], explanation: 'This fold line, along which the two halves match exactly, is called the line of symmetry.' },
        { difficulty: 'Easy', question: 'Is the letter B symmetrical?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'The letter B can be folded horizontally (top to bottom) and the two humps match — it is symmetrical.' },
        { difficulty: 'Easy', question: 'True or False: A fold line only counts as a line of symmetry if it passes exactly through the middle of the shape in a way that makes both halves identical.', answer: 'True', checkMode: 'auto', correctAnswer: 'True', correctAnswers: ['True', 'true'], explanation: 'A line of symmetry must produce two halves that match exactly when folded — this is the definition of the fold test.' },
        { difficulty: 'Easy', question: 'Does the letter Z have any lines of symmetry?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'The letter Z cannot be folded along any straight line so that both halves match — it has 0 lines of symmetry.' },
        { difficulty: 'Easy', question: 'How many lines of symmetry does a circle have?', answer: 'Infinite', checkMode: 'auto', correctAnswer: 'infinite', correctAnswers: ['infinite', 'infinitelines', 'unlimited', 'endless', 'infinitemanylines'], explanation: 'Every diameter of a circle is a line of symmetry, so a circle has infinitely many lines of symmetry.' },
        { difficulty: 'Easy', question: 'How many lines of symmetry does an equilateral triangle (all 3 sides equal) have?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'three', '3 lines'], explanation: 'An equilateral triangle has 3 equal sides, so it has 3 lines of symmetry — one from each corner to the midpoint of the opposite side.' },
        { difficulty: 'Easy-Medium', question: 'Which has more lines of symmetry: an equilateral triangle or an isosceles triangle?', answer: 'The equilateral triangle', checkMode: 'auto', correctAnswer: 'equilateral', correctAnswers: ['equilateral', 'equilateraltriangle', 'theequilateraltriangle'], explanation: 'An equilateral triangle has 3 lines of symmetry, while an isosceles triangle has only 1 — so the equilateral triangle has more.' },
        { difficulty: 'Medium', question: 'How many lines of symmetry does a square have compared to a scalene triangle?', answer: 'The square has 4, the scalene triangle has 0.', checkMode: 'auto', correctAnswer: '4and0', correctAnswers: ['4and0', '4,0', '40'], explanation: 'A square has 4 lines of symmetry. A scalene triangle, with all sides and angles different, has 0 lines of symmetry.' },
        { difficulty: 'Medium', question: 'Bongani says a rectangle (not a square) has 4 lines of symmetry, the same as a square, because both shapes have 4 right angles. Is Bongani correct?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Bongani is incorrect. A rectangle that is not a square has only 2 lines of symmetry (vertical and horizontal) — its diagonals do not work as lines of symmetry because its sides are not all equal, unlike a square. Having right angles is not enough on its own.' },
        { difficulty: 'Medium', question: 'Does the letter T have a vertical line of symmetry?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'The letter T folds down the middle of its stem, and the left and right halves match.' },
        { difficulty: 'Medium', question: 'Which letter has BOTH a vertical and a horizontal line of symmetry: X or S?', answer: 'X', checkMode: 'auto', correctAnswer: 'X', correctAnswers: ['X', 'x'], explanation: 'The letter X can be folded vertically and horizontally, and in both cases the halves match. S has no lines of symmetry at all.' },
        { difficulty: 'Medium', question: 'Which letters in the word "HAT" have at least one line of symmetry?', answer: 'H, A and T (all three letters)', checkMode: 'auto', correctAnswer: 'HAT', correctAnswers: ['HAT', 'H,A,T', 'H, A, T', 'allthree', 'hat'], explanation: 'H has both vertical and horizontal symmetry, A has a vertical line of symmetry, and T also has a vertical line of symmetry. Every letter in HAT has at least one line of symmetry.' },
        { difficulty: 'Medium', question: 'A regular polygon has 6 equal sides (a regular hexagon). How many lines of symmetry does it have?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six', '6 lines'], explanation: 'A regular hexagon has 6 equal sides, so it has 6 lines of symmetry.' },
        { difficulty: 'Medium', question: 'A regular polygon has 12 equal sides (a regular dodecagon). How many lines of symmetry does it have?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'twelve', '12 lines'], explanation: 'For any regular polygon, the number of lines of symmetry equals the number of sides — 12 sides gives 12 lines of symmetry.' },
        { difficulty: 'Medium', question: 'Explain why doubling the number of sides of a regular polygon (for example, going from a hexagon to a 12-sided shape) also doubles its number of lines of symmetry.', answer: 'Because each side always contributes exactly one matching line of symmetry in a regular polygon.', checkMode: 'self', explanation: 'In a regular polygon, the number of lines of symmetry always equals the number of sides — each side (or corner) contributes exactly one line. So if the number of sides doubles from 6 to 12, the number of lines of symmetry also doubles, from 6 to 12.' },
        { difficulty: 'Medium-Hard', question: 'The grid shows a vertical red dashed line of symmetry with points X, Y and Z marked on the left side only. Point X is 3 squares from the line. How far from the line should its mirror point be, and on which side?', answer: '3 squares from the line, on the right side.', checkMode: 'auto', correctAnswer: '3right', correctAnswers: ['3right', '3squaresright', '3', 'threesquaresright'], explanation: 'A mirror point sits the same distance from the line of symmetry as the original point, just on the opposite side. Since X is 3 squares left of the line, its mirror point X′ is 3 squares to the right.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><circle cx="50" cy="50" r="4" fill="#2563eb"/><text x="45" y="46" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">X</text><circle cx="70" cy="100" r="4" fill="#2563eb"/><text x="65" y="96" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">Y</text><circle cx="90" cy="150" r="4" fill="#2563eb"/><text x="85" y="146" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">Z</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">line of symmetry</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Using the same grid: point Y is 2 squares from the line and point Z is 1 square from the line. Does reflecting Y and Z across the line change how high up or down they are, compared to their original heights?', answer: 'No — each mirror point stays at exactly the same height as its original point.', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'staysthesame', 'sameheight', 'unchanged'], explanation: 'A vertical line of symmetry only reflects points from left to right — it never changes how high or low a point is. So the mirror points for Y and Z stay at exactly the same heights as Y and Z themselves.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><circle cx="50" cy="50" r="4" fill="#2563eb"/><text x="45" y="46" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">X</text><circle cx="70" cy="100" r="4" fill="#2563eb"/><text x="65" y="96" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">Y</text><circle cx="90" cy="150" r="4" fill="#2563eb"/><text x="85" y="146" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">Z</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">line of symmetry</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Using the same grid again: looking at where points X, Y and Z are marked, is the line of symmetry vertical or horizontal, and how can you tell just from the way the red dashed line is drawn?', answer: 'Vertical — the red dashed line runs straight up and down, not side to side.', checkMode: 'auto', correctAnswer: 'vertical', correctAnswers: ['vertical', 'vertically', 'averticalline'], explanation: 'The red dashed line runs from the top of the grid to the bottom, splitting it into a left side and a right side — that up-and-down direction is what makes it a vertical line of symmetry, rather than a horizontal one which would run side to side.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><circle cx="50" cy="50" r="4" fill="#2563eb"/><text x="45" y="46" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">X</text><circle cx="70" cy="100" r="4" fill="#2563eb"/><text x="65" y="96" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">Y</text><circle cx="90" cy="150" r="4" fill="#2563eb"/><text x="85" y="146" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">Z</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">line of symmetry</text></svg>' },
        { difficulty: 'Hard', question: 'A road sign is shaped like a regular octagon (a stop sign) and another is shaped like an equilateral triangle (a yield sign). Which has more lines of symmetry, and does that mean the octagon-shaped sign is "more symmetrical" in every sense?', answer: 'The octagon has more (8 vs 3), but both are still fully symmetrical shapes — more lines does not mean "more symmetrical", just more folds that work.', checkMode: 'self', explanation: 'The octagon (stop sign) has 8 lines of symmetry, while the equilateral triangle (yield sign) has 3. The octagon has more possible fold lines that work, but both shapes are equally "symmetrical" in the sense that every fold along one of their lines of symmetry produces two matching halves — one is not more perfectly symmetrical than the other, it simply has more lines because it has more sides.' },
        { difficulty: 'Hard', question: 'Thabo says a beehive honeycomb (made of regular hexagons) and a soccer ball pattern (made partly of regular pentagons and hexagons) must have exactly the same symmetry because they are both "nature-inspired" designs. Is Thabo correct? Explain.', answer: 'No — a regular hexagon has 6 lines of symmetry while a regular pentagon has 5, so the shapes making up each pattern have different symmetry.', checkMode: 'self', explanation: 'Thabo is incorrect to assume the two designs share the same symmetry just because both come from nature-inspired shapes. A honeycomb\'s hexagons each have 6 lines of symmetry, but the pentagons used in a soccer ball pattern have only 5 lines of symmetry each — different regular polygons have different amounts of symmetry depending on their number of sides.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered symmetry across shapes, letters, polygons and grids.' },
        { minScore: 15, message: 'Great work! You understand symmetry well — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the study guide sections you found tricky and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

  ],
}
