import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (circle geometry roles) ───────────────────────────────────
// radius                        → blue   (#2563eb)
// chord / perpendicular from O  → orange (#ea580c)
// tangent / half-chord / equal angles in segment → green (#16a34a)
// angle at centre               → red    (#dc2626)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

// ─── CAPS-style two-column (Statement | Reason) proof table ──────────────────
// rows: array of [statement, reason] pairs, rendered as an HTML table matching
// the site's design system (used inside `explanation` strings for rider proofs).
const proofTable = (rows: [string, string][]) =>
  `<div style="overflow-x:auto;margin-top:10px;margin-bottom:6px"><table style="border-collapse:collapse;font-size:0.92em;width:100%">` +
  `<thead><tr>` +
  `<th style="padding:8px 12px;background:#0f1f3d;color:#ffffff;border:1px solid #0f1f3d;font-weight:700;text-align:left">Statement</th>` +
  `<th style="padding:8px 12px;background:#0f1f3d;color:#ffffff;border:1px solid #0f1f3d;font-weight:700;text-align:left">Reason</th>` +
  `</tr></thead><tbody>` +
  rows
    .map(
      ([s, r], i) =>
        `<tr style="background:${i % 2 === 0 ? '#f8fafc' : '#ffffff'}">` +
        `<td style="padding:8px 12px;border:1px solid #e2e8f0;color:#0f1f3d;">${s}</td>` +
        `<td style="padding:8px 12px;border:1px solid #e2e8f0;color:#374151;">${r}</td>` +
        `</tr>`
    )
    .join('') +
  `</tbody></table></div>`

export const topicData: TopicData = {
  title: 'Euclidean Geometry — Circles',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — TERMINOLOGY AND REVISION OF CIRCLE PROPERTIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'circle-terminology',
      title: 'Terminology and Revision of Circle Properties',
      icon: '⊙',
      explanation:
        `<p style="margin-bottom:16px;">Before studying the theorems, we establish key terminology. A ${or('chord')} is a line segment joining two points on a circle. A ${gr('tangent')} is a line that touches the circle at exactly one point and is perpendicular to the ${bl('radius')} at that point. An arc is a portion of the circumference. A cyclic quadrilateral has all four vertices on the circle. The centre is equidistant from all points on the circumference. We also revise that the ${re('angle subtended by a chord at the centre')} is twice the angle subtended by the same chord at the circumference — this is the foundation of most Grade 12 circle theorems. Refer to the video for a visual overview of all key terms labelled on a circle.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('chord')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tangent')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('angle at centre')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Radius</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A line segment from the centre to any point on the circumference. All radii of a circle are equal in length.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Chord</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A line segment joining any two points on the circumference. A diameter is the longest chord — it passes through the centre.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Tangent</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A line that touches the circle at exactly one point. It is always perpendicular to the radius at the point of contact.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Angle at Centre</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The angle formed at the centre O by two radii. It is twice the angle formed at the circumference by the same chord.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Arc</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A portion of the circumference. The minor arc is the shorter portion; the major arc is the longer portion between the two endpoints.</p>` +
        `</div>` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Cyclic Quadrilateral</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A quadrilateral whose four vertices all lie on the circumference of the same circle.</p>` +
        `</div>` +

        `</div>` +

        // ── Foundation theorem ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Foundation theorem (revision)</p>` +
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:8px;">Angle at Centre = 2 × Angle at Circumference</p>` +
        `<p style="color:#374151;margin-bottom:8px;">When the same ${or('chord')} subtends an ${re('angle at the centre O')} and an angle at a point on the circumference (on the same side), the ${re('angle at the centre')} is exactly twice the angle at the circumference:</p>` +
        `<p style="text-align:center;font-size:1.1em;font-weight:700;color:#374151;margin:0;">${re('∠AOB')} = 2 × ∠APB</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why this matters</p>` +
        `<p style="margin:0;color:#1e3a8a;">Almost every Grade 12 circle theorem builds on this one relationship. Master the terminology and this foundation, and the rest of the proofs will follow naturally.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In a circle with centre O, chord AB subtends an angle of 80° at the centre. What angle does AB subtend at a point P on the major arc?',
          answer: `∠APB = ${re('40°')}`,
          steps: [
            `The ${re('angle at the centre')} is twice the angle at the circumference when both are on the same side of chord ${or('AB')}.`,
            `Angle at circumference = ${re('angle at centre')} ÷ 2 = ${re('80°')} ÷ 2 = ${re('40°')}.`,
            `<strong>Answer:</strong> The ${or('chord')} AB subtends an angle of ${re('40°')} at point P on the major arc. ✓`,
          ],
        },
        {
          question: 'Sipho says the tangent to a circle at point P makes a 45° angle with the radius OP. Is this possible?',
          answer: `No — the angle between a ${gr('tangent')} and the ${bl('radius')} at the point of contact is always exactly 90°.`,
          steps: [
            `A ${gr('tangent')} to a circle is defined as a line that touches the circle at exactly one point and is <strong>perpendicular</strong> to the ${bl('radius')} at that point.`,
            `Perpendicular means the angle between them is exactly <strong>90°</strong> — not 45°, not 89°, always exactly 90°.`,
            `<strong>Answer:</strong> No, this is not possible. The angle between the ${gr('tangent')} and the ${bl('radius')} OP is always 90°, never 45°. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'In a circle with centre O, chord PQ subtends an angle of 100° at the centre. Find the angle subtended by PQ at a point T on the major arc.',
          answer: '50°',
          checkMode: 'auto',
          correctAnswer: '50',
          correctAnswers: ['50', '50°', '50 degrees'],
          explanation: 'The angle at the centre is twice the angle at the circumference.\nAngle at circumference = 100° ÷ 2 = 50°.',
        },
        {
          difficulty: 'Medium',
          question: 'Answer each of the following about circle terminology.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) What is the angle between a tangent and the radius at the point of contact?',
              correctAnswer: '90',
              correctAnswers: ['90', '90°', '90 degrees'],
              explanation: 'A tangent is perpendicular to the radius at the point of contact — the angle is always 90°.',
            },
            {
              label: 'b) Chord AB subtends 64° at the centre. What angle does it subtend at the circumference (same side)?',
              correctAnswer: '32',
              correctAnswers: ['32', '32°', '32 degrees'],
              explanation: 'Angle at circumference = angle at centre ÷ 2 = 64° ÷ 2 = 32°.',
            },
            {
              label: 'c) The angle at the circumference subtended by a chord is 27°. What is the angle at the centre?',
              correctAnswer: '54',
              correctAnswers: ['54', '54°', '54 degrees'],
              explanation: 'Angle at centre = 2 × angle at circumference = 2 × 27° = 54°.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'In a circle with centre O, chord AB subtends an angle of 150° at the centre (on the major arc side). Point P lies on the minor arc and point Q lies on the major arc.\n\na) Find the angle APB (P on minor arc).\nb) Find the angle AQB (Q on major arc).\nc) What do you notice about the sum of angles APB and AQB?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Angle APB (P on minor arc)',
              correctAnswer: '105',
              correctAnswers: ['105', '105°', '105 degrees'],
              explanation: 'P is on the minor arc — opposite side to the 150° angle.\nReflex ∠AOB = 360° − 150° = 210°.\nAngle APB = 210° ÷ 2 = 105°.',
            },
            {
              label: 'b) Angle AQB (Q on major arc)',
              correctAnswer: '75',
              correctAnswers: ['75', '75°', '75 degrees'],
              explanation: 'Q is on the major arc — same side as the 150° angle.\nAngle AQB = 150° ÷ 2 = 75°.',
            },
            {
              label: 'c) Sum of angles APB and AQB',
              correctAnswer: '180',
              correctAnswers: ['180', '180°', '180 degrees'],
              explanation: '105° + 75° = 180°.\nAngles subtended by the same chord on opposite sides always add up to 180° — a key property of cyclic quadrilaterals.',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing a visual overview of all key circle terms labelled on a circle — radius, chord, tangent, arc, cyclic quadrilateral — and demonstrating the angle at centre equals twice the angle at circumference" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THEOREMS: CHORD, CENTRE AND PERPENDICULARITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'chord-centre-perpendicularity',
      title: 'Theorems — Chord, Centre and Perpendicularity',
      icon: '⊥',
      explanation:
        `<p style="margin-bottom:16px;">Two key theorems relate ${or('chords')} to the centre: (1) The perpendicular from the centre to a ${or('chord')} bisects the ${or('chord')} — meaning if ${or('OM')} ⊥ AB, then AM = MB. (2) The line from the centre to the midpoint of a ${or('chord')} is perpendicular to the ${or('chord')} — the converse of (1). These theorems are used to find missing lengths and to prove that a line passes through the centre. Refer to the video for a diagram showing a ${or('chord')} with the ${or('perpendicular')} from the centre and the equal ${gr('halves')} labelled.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('perpendicular from centre')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('half-chord')}</span>` +
        `</div>` +

        // ── Two theorems ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The two theorems</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Perpendicular from Centre Bisects Chord</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">If ${or('OM')} ⊥ chord AB, then ${gr('AM = MB')}. The ${or('perpendicular')} from the centre cuts the chord exactly in half, creating two equal ${gr('half-chords')}.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Line from Centre to Midpoint is Perpendicular (Converse)</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">If M is the midpoint of chord AB (so ${gr('AM = MB')}), then OM ⊥ AB. Use this to prove that a given line passes through the centre.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Pythagoras connection ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Solving for distances</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin-bottom:8px;color:#374151;">When ${or('OM')} ⊥ chord AB, triangle OMA is right-angled at M. Apply the theorem of Pythagoras:</p>` +
        `<p style="text-align:center;font-size:1.1em;font-weight:700;color:#374151;margin-bottom:8px;">${bl('OA')}² = ${or('OM')}² + ${gr('AM')}²</p>` +
        `<p style="margin:0;color:#374151;font-size:14px;">where ${bl('OA')} = ${bl('radius')}, ${or('OM')} = ${or('perpendicular distance from centre to chord')}, ${gr('AM')} = ${gr('half the chord length')}.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategy for calculation questions</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always halve the chord first (${gr('AM = AB ÷ 2')}), then identify which of the three sides (${bl('radius')}, ${or('OM')}, or ${gr('AM')}) is unknown. Rearrange the Pythagoras formula and solve.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In a circle with centre O and radius 13 cm, a chord AB is 10 cm long. Find the perpendicular distance from O to AB.',
          answer: `${or('OM')} = ${or('12 cm')}`,
          steps: [
            `${or('OM')} ⊥ AB (given), so ${or('OM')} bisects the chord. Therefore ${gr('AM = 10 ÷ 2 = 5 cm')}.`,
            `In right-angled triangle OMA: ${bl('OA')}² = ${or('OM')}² + ${gr('AM')}² (Pythagoras).`,
            `${or('OM')}² = ${bl('OA')}² − ${gr('AM')}² = ${bl('13')}² − ${gr('5')}² = ${bl('169')} − ${gr('25')} = 144.`,
            `${or('OM')} = √144 = <strong>${or('12 cm')}</strong>. ✓`,
          ],
        },
        {
          question: 'Lerato has a chord of length 24 cm in a circle with radius 15 cm. The perpendicular from the centre meets the chord at M. Find OM.',
          answer: `${or('OM')} = ${or('9 cm')}`,
          steps: [
            `${gr('AM = 24 ÷ 2 = 12 cm')} (perpendicular from centre bisects the chord).`,
            `${or('OM')}² = ${bl('OA')}² − ${gr('AM')}² = ${bl('15')}² − ${gr('12')}² = ${bl('225')} − ${gr('144')} = 81.`,
            `${or('OM')} = √81 = <strong>${or('9 cm')}</strong>. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'In a circle with centre O and radius 10 cm, a chord AB is 12 cm long. Find the perpendicular distance from O to AB.',
          answer: '8 cm',
          checkMode: 'auto',
          correctAnswer: '8',
          correctAnswers: ['8', '8cm', '8 cm'],
          explanation: 'AM = 12 ÷ 2 = 6 cm.\nOM² = 10² − 6² = 100 − 36 = 64.\nOM = √64 = 8 cm ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Solve each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) A circle has radius 17 cm and chord PQ = 16 cm. Find the perpendicular distance from the centre to PQ.',
              correctAnswer: '15',
              correctAnswers: ['15', '15cm', '15 cm'],
              explanation: 'PM = 16 ÷ 2 = 8 cm.\nOM² = 17² − 8² = 289 − 64 = 225.\nOM = √225 = 15 cm ✓',
            },
            {
              label: 'b) The perpendicular distance from the centre to a chord is 5 cm and the radius is 13 cm. Find the length of the chord.',
              correctAnswer: '24',
              correctAnswers: ['24', '24cm', '24 cm'],
              explanation: 'AM² = OA² − OM² = 13² − 5² = 169 − 25 = 144.\nAM = 12 cm.\nChord length = 2 × AM = 24 cm ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Two parallel chords AB and CD lie in a circle with centre O and radius 26 cm. The perpendicular distance from O to AB is 10 cm and the perpendicular distance from O to CD is 24 cm.\n\na) Find the length of chord AB.\nb) Find the length of chord CD.\nc) If AB and CD are on the same side of the centre, find the distance between the two chords.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Length of chord AB',
              correctAnswer: '48',
              correctAnswers: ['48', '48cm', '48 cm'],
              explanation: 'AM² = OA² − OM² = 26² − 10² = 676 − 100 = 576.\nAM = 24 cm.\nAB = 2 × 24 = 48 cm ✓',
            },
            {
              label: 'b) Length of chord CD',
              correctAnswer: '20',
              correctAnswers: ['20', '20cm', '20 cm'],
              explanation: 'CM² = OC² − OM² = 26² − 24² = 676 − 576 = 100.\nCM = 10 cm.\nCD = 2 × 10 = 20 cm ✓',
            },
            {
              label: 'c) Distance between the two chords (same side of centre)',
              correctAnswer: '14',
              correctAnswers: ['14', '14cm', '14 cm'],
              explanation: 'The chords are 10 cm and 24 cm from the centre, on the same side.\nDistance between them = 24 − 10 = 14 cm ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing a chord with the perpendicular from the centre bisecting it — labelling the two equal half-chords and the right-angled triangle used for Pythagoras calculations" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THEOREMS: ANGLES IN A CIRCLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'angles-in-circle',
      title: 'Theorems — Angles in a Circle',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">Three theorems deal with angles: (1) The ${re('angle subtended by a chord at the centre')} is twice the ${bl('angle subtended by the same chord at the circumference')} (on the same side). (2) ${gr('Angles in the same segment')} (subtended by the same chord on the same side) are ${gr('equal')}. (3) The angle in a semicircle is always ${bl('90°')} — any angle inscribed in a semicircle (subtended by the diameter) is a right angle. Refer to the video for diagrams showing each theorem with the relevant angles highlighted.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('angle at centre')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('angle at circumference')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('equal angles in same segment')}</span>` +
        `</div>` +

        // ── Three theorems ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The three theorems</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Angle at Centre = 2 × Angle at Circumference</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">The ${re('angle at O')} is double the ${bl('angle at P')} when both are subtended by the same chord on the same side. When P is on the opposite (minor) arc, use the <strong>reflex angle</strong> at the centre.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Angles in the Same Segment are Equal</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Any two ${gr('angles')} at the circumference subtended by the same chord on the same side are ${gr('equal')}. This follows from Theorem 1 — both equal half the angle at the centre.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">3</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Angle in a Semicircle = 90°</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">If AB is a diameter, the ${re('angle at the centre')} is 180° (a straight line), so any ${bl('angle APB')} at the circumference = 180° ÷ 2 = ${bl('90°')} — regardless of where P lies on the circle.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Reflex angle note ─────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Using the reflex angle</p>` +
        `<p style="margin:0;color:#1e3a8a;">When a point lies on the <strong>minor arc</strong> (the short arc), it is on the opposite side of the chord from the ordinary central angle. In this case, use the <strong>reflex angle</strong> at O (360° minus the ordinary angle), then halve it to find the ${bl('angle at the circumference')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Chord AB subtends an angle of 110° at the centre O. Find the angle APB subtended at point P on the minor arc.',
          answer: `∠APB = ${bl('125°')}`,
          steps: [
            `P is on the <strong>minor arc</strong> — the opposite side of chord AB from the 110° angle.`,
            `Use the ${re('reflex angle')} at O: Reflex ∠AOB = 360° − ${re('110°')} = ${re('250°')}.`,
            `${bl('Angle at circumference')} = ${re('reflex ∠AOB')} ÷ 2 = ${re('250°')} ÷ 2 = ${bl('125°')}.`,
            `<strong>Answer:</strong> ∠APB = ${bl('125°')}. ✓`,
          ],
        },
        {
          question: 'Points A, B, C and D all lie on a circle. ∠ACB = 35°. Chord AB also subtends angle ADB at point D, where D is on the same side of AB as C. Find ∠ADB.',
          answer: `∠ADB = ${gr('35°')}`,
          steps: [
            `Both C and D lie on the <strong>same arc</strong> (same side of chord AB).`,
            `By Theorem 2: ${gr('angles in the same segment are equal')}.`,
            `∠ADB = ∠ACB = ${gr('35°')}.`,
            `<strong>Answer:</strong> ∠ADB = ${gr('35°')}. ✓`,
          ],
        },
        {
          question: 'AB is a diameter of a circle and P is any point on the circumference (not at A or B). Find ∠APB.',
          answer: `∠APB = ${bl('90°')}`,
          steps: [
            `AB is a diameter, so the ${re('angle subtended at the centre')} is ${re('180°')} (a straight line through the centre).`,
            `By Theorem 1: ${bl('angle at circumference')} = ${re('180°')} ÷ 2 = ${bl('90°')}.`,
            `<strong>Answer:</strong> ∠APB = ${bl('90°')} for any position of P on the circle. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'AB is a diameter of a circle and P is a point on the circle. ∠PAB = 38°. Find ∠PBA.',
          answer: '52°',
          checkMode: 'auto',
          correctAnswer: '52',
          correctAnswers: ['52', '52°', '52 degrees'],
          explanation: 'Since AB is a diameter, ∠APB = 90° (angle in a semicircle).\nIn triangle APB: ∠PAB + ∠PBA + ∠APB = 180°.\n38° + ∠PBA + 90° = 180°.\n∠PBA = 180° − 90° − 38° = 52° ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Find the unknown angle in each case.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Chord PQ subtends 84° at the centre. Find the angle at the circumference on the major arc.',
              correctAnswer: '42',
              correctAnswers: ['42', '42°', '42 degrees'],
              explanation: 'Angle at circumference = 84° ÷ 2 = 42° ✓',
            },
            {
              label: 'b) ∠ADB = 47° and C lies on the same arc as D. Find ∠ACB.',
              correctAnswer: '47',
              correctAnswers: ['47', '47°', '47 degrees'],
              explanation: 'Angles in the same segment are equal: ∠ACB = ∠ADB = 47° ✓',
            },
            {
              label: 'c) Chord AB subtends 70° at the centre. Find the angle at point P on the minor arc.',
              correctAnswer: '145',
              correctAnswers: ['145', '145°', '145 degrees'],
              explanation: 'P is on the minor arc — use the reflex angle.\nReflex ∠AOB = 360° − 70° = 290°.\nAngle at P = 290° ÷ 2 = 145° ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'O is the centre of the circle. Points A, B, C and D lie on the circle. AB is a diameter. ∠CAB = 25° and ∠DBA = 40°.\n\na) Find ∠ACB.\nb) Find ∠ADB.\nc) Find ∠CBD.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find ∠ACB',
              correctAnswer: '90',
              correctAnswers: ['90', '90°', '90 degrees'],
              explanation: 'AB is a diameter, so the angle in a semicircle: ∠ACB = 90° ✓',
            },
            {
              label: 'b) Find ∠ADB',
              correctAnswer: '90',
              correctAnswers: ['90', '90°', '90 degrees'],
              explanation: 'AB is a diameter, so ∠ADB = 90° as well — the angle in a semicircle is always 90° regardless of where D is on the circle ✓',
            },
            {
              label: 'c) Find ∠CBD',
              correctAnswer: '25',
              correctAnswers: ['25', '25°', '25 degrees'],
              explanation: 'In △ABC: ∠ACB = 90° (angle in semicircle), ∠CAB = 25°.\n∠ABC = 180° − 90° − 25° = 65°.\n∠CBD = ∠ABC − ∠ABD = 65° − 40° = 25° ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing diagrams for all three angle theorems — angle at centre twice angle at circumference, equal angles in same segment, and angle in a semicircle — with each relevant angle highlighted in its colour" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — THEOREMS: CYCLIC QUADRILATERALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'cyclic-quadrilaterals',
      title: 'Theorems — Cyclic Quadrilaterals',
      icon: '▱',
      explanation:
        `<p style="margin-bottom:16px;">A cyclic quadrilateral has all four vertices on the circle. Two key theorems apply: (1) ${bl('Opposite angles')} of a cyclic quadrilateral are supplementary — they add up to ${bl('180°')}. (2) The ${gr('exterior angle')} of a cyclic quadrilateral equals the ${or('interior opposite angle')}. These theorems are converses of each other and are used both to find missing angles and to prove that four points are concyclic (lie on a common circle). Refer to the video for a labelled cyclic quadrilateral with opposite angle pairs highlighted.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('opposite angle pair 1')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('opposite angle pair 2')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('exterior angle')}</span>` +
        `</div>` +

        // ── Two theorems ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The two theorems</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Opposite Angles are Supplementary</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">In cyclic quadrilateral ABCD, ${bl('∠A + ∠C = 180°')} and ${or('∠B + ∠D = 180°')}. Each pair of ${bl('opposite angles')} sums to 180°. Use this to find a missing angle or to prove four points are concyclic.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Exterior Angle = Interior Opposite Angle</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">The ${gr('exterior angle')} formed by extending one side of a cyclic quadrilateral equals the ${or('interior opposite angle')}. This is a direct consequence of Theorem 1 and the straight-line angle sum.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Proving points are concyclic</p>` +
        `<p style="margin:0;color:#1e3a8a;">If you can show that opposite angles sum to 180° (or that an exterior angle equals the interior opposite), you can conclude that the four vertices lie on a common circle — they are concyclic.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In cyclic quadrilateral ABCD, ∠A = 85° and ∠C = x. Find x.',
          answer: `x = ${bl('95°')}`,
          steps: [
            `${bl('Opposite angles')} of a cyclic quadrilateral are supplementary: ${bl('∠A + ∠C = 180°')}.`,
            `${bl('85°')} + x = 180°.`,
            `x = 180° − 85° = ${bl('95°')}.`,
            `<strong>Answer:</strong> x = ${bl('95°')}. ✓`,
          ],
        },
        {
          question: 'Sipho has cyclic quadrilateral PQRS with ∠QRS = 112°. Find the exterior angle at P (the angle formed by extending side QP beyond P).',
          answer: `${gr('Exterior angle at P')} = ${gr('112°')}`,
          steps: [
            `The ${gr('exterior angle')} at P equals the ${or('interior opposite angle')}, which is ${or('∠QRS')}.`,
            `${or('∠QRS')} = ${or('112°')}.`,
            `Therefore the ${gr('exterior angle at P')} = ${gr('112°')}.`,
            `<strong>Answer:</strong> ${gr('Exterior angle at P')} = ${gr('112°')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing a labelled cyclic quadrilateral ABCD with opposite angle pairs highlighted in blue and orange, and an exterior angle highlighted in green, demonstrating both theorems" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — THEOREMS: TANGENTS TO A CIRCLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tangents-to-circle',
      title: 'Theorems — Tangents to a Circle',
      icon: '↗',
      explanation:
        `<p style="margin-bottom:16px;">Three key tangent theorems: (1) The ${gr('tangent')} to a circle is perpendicular to the ${bl('radius')} at the point of contact — the angle between them is exactly 90°. (2) Tangents drawn from an external point to a circle are equal in length — the two ${gr('tangent segments')} from one external point are congruent. (3) The ${or('tangent-chord angle')} (angle between a ${gr('tangent')} and a chord at the point of contact) equals the inscribed angle on the opposite side of the chord — this is called the alternate segment theorem (or tan-chord theorem). Refer to the video for a diagram labelling the tangent line, the radius at the contact point, and the tangent-chord angle.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tangent line')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius at contact point')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('tangent-chord angle')}</span>` +
        `</div>` +

        // ── Three theorems ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The three theorems</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Tangent ⊥ Radius at Point of Contact</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">The ${gr('tangent')} at any point on the circle is perpendicular to the ${bl('radius')} drawn to that point. The angle between the ${gr('tangent')} and the ${bl('radius')} is always exactly 90°.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Tangent Segments from an External Point are Equal</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">If ${gr('PA')} and ${gr('PB')} are ${gr('tangents')} from external point P to a circle, then ${gr('PA = PB')}. Use this to find missing lengths when two tangent segments share the same external point.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">3</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Alternate Segment Theorem (Tan-Chord Theorem)</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">The ${or('angle between a tangent and a chord')} at the point of contact equals the ${or('inscribed angle in the alternate segment')} (the segment on the opposite side of the chord). In symbols: ${or('tangent-chord angle')} = inscribed angle in alternate segment.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Identifying the alternate segment</p>` +
        `<p style="margin:0;color:#78350f;">The alternate segment is the region of the circle on the <strong>opposite side</strong> of the chord from the tangent-chord angle. Draw the chord, identify which side the ${or('angle')} opens towards, then look at the segment on the <strong>other</strong> side — any inscribed angle there equals your ${or('tangent-chord angle')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Tangents PA and PB are drawn from external point P to a circle. If PA = 7 cm, find PB.',
          answer: `${gr('PB')} = ${gr('7 cm')}`,
          steps: [
            `${gr('Tangent segments')} from an external point are equal.`,
            `${gr('PB = PA = 7 cm')}.`,
            `<strong>Answer:</strong> ${gr('PB')} = ${gr('7 cm')}. ✓`,
          ],
        },
        {
          question: 'A tangent at point T makes an angle of 65° with chord TC. Find the inscribed angle in the alternate segment (∠TBC, where B is in the alternate segment).',
          answer: `∠TBC = ${or('65°')}`,
          steps: [
            `The ${or('tangent-chord angle')} at T between the tangent and chord TC is ${or('65°')}.`,
            `By the alternate segment theorem (tan-chord theorem), the inscribed angle in the alternate segment equals the ${or('tangent-chord angle')}.`,
            `∠TBC = ${or('65°')}.`,
            `<strong>Answer:</strong> ∠TBC = ${or('65°')}. ✓`,
          ],
        },
        {
          question: 'Lerato has a tangent at point A making an angle of x with chord AB. She says the angle in the alternate segment must also be x. Is she correct?',
          answer: 'Yes — this is exactly the alternate segment theorem.',
          steps: [
            `The ${or('tangent-chord angle')} at A between the tangent and chord AB is x.`,
            `By the alternate segment theorem, the inscribed angle in the alternate segment (the segment on the opposite side of chord AB from the ${or('tangent-chord angle')}) equals x.`,
            `Yes — Lerato is correct. This is exactly what the alternate segment theorem states: the ${or('tangent-chord angle')} equals the inscribed angle in the alternate segment. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing a tangent touching a circle — labelling the tangent line in green, the radius at the contact point in blue, equal tangent segments from an external point, and the tangent-chord angle in orange with the matching alternate segment angle" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — COMBINED RIDERS: CIRCLES AND SIMILARITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'combined-riders-circles-similarity',
      title: 'Combined Riders — Circles and Similarity',
      icon: '∼',
      explanation:
        `<p style="margin-bottom:16px;">The hardest riders in the Grade 12 Paper 2 exam almost never test a single circle theorem on its own. Instead, they chain a ${re('circle theorem')} — which hands you an angle for free — together with ${gr('equiangular (AA) similarity')} to prove two triangles similar, and then use the resulting ${or('proportion')} (sometimes finishing with the Theorem of Pythagoras) to reach the required result. This is exactly the Grade 11 skill set (proportionality, similarity, and Pythagoras via similar triangles) combined with everything you now know about circles.</p>` +
        `<p style="margin-bottom:16px;">This section does not re-teach any individual theorem — every theorem used below was covered earlier in this topic (circles) or in Grade 11 (similarity). Instead, it shows you exactly how the pieces link together, and gives you a solid bank of combined riders to practise the same multi-step reasoning the exam demands.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('angle from a circle theorem')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('shared / common angle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('equiangular (AA) triangles')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('resulting proportion')}</span>` +
        `</div>` +

        // ── Strategy steps ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The combined strategy — four steps</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#374151;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Write down what is <strong>given</strong> and what you are <strong>required to prove</strong> (RTP). If the RTP is a squared length (like ${or('x² = y·z')}) or a product of two lengths (like ${or('AB·CD = EF·GH')}), that is a strong signal that similar triangles — not a circle theorem alone — will be needed.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Scan the diagram for a ${re('circle theorem')} that hands you an angle relationship for free — a tangent-chord angle, an angle in a semicircle, angles in the same segment, or a cyclic quadrilateral's opposite angles.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Combine that ${re('circle-theorem angle')} with a ${bl('shared or common angle')} (or a second circle-theorem angle) between two triangles. Two matching angle pairs is enough to prove the triangles ${gr('equiangular, hence similar (AA)')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Write the ${or('proportion')} from the similar triangles, matching corresponding sides in the correct order (the order you stated the similarity in). Cross-multiply, substitute the given lengths, and solve — applying the Theorem of Pythagoras as well if the RTP needs it.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Spotting the combination</p>` +
        `<p style="margin:0;color:#1e3a8a;">Look out for: two triangles that share a vertex or an angle; a chord that forms an inscribed angle at two different points on the circle; a tangent-chord angle; a diameter (which always signals a 90° angle); or an RTP written as ${or('AB² = ...')} or ${or('AB × CD = EF × GH')} — these almost always mean "prove two triangles similar first, then cross-multiply."</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'PT is a tangent to a circle at T. PAB is a secant from external point P, cutting the circle at A (nearer P) and B (farther from P). PA = 4 cm and AB = 5 cm. Prove that PT² = PA · PB, and hence find the length of PT.',
          answer: `PT = ${or('6 cm')}`,
          steps: [
            `<svg viewBox="0 0 280 240" width="280" height="240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="30" stroke="#2563eb" stroke-width="2"/><line x1="140" y1="30" x2="40" y2="30" stroke="#16a34a" stroke-width="2.5"/><line x1="40" y1="30" x2="206.9" y2="180.21" stroke="#ea580c" stroke-width="2"/><path d="M 140,39 L 131,39 L 131,30" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="start">O</text><circle cx="140" cy="30" r="3" fill="#0f1f3d"/><text x="136" y="20" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">T</text><circle cx="40" cy="30" r="3" fill="#0f1f3d"/><text x="34" y="46" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">P</text><circle cx="73.1" cy="59.79" r="3" fill="#0f1f3d"/><text x="57.1" y="67.79" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">A</text><circle cx="206.9" cy="180.21" r="3" fill="#0f1f3d"/><text x="216.9" y="188.21" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">B</text><text x="50" y="105" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">PA = 4 cm</text><text x="160" y="145" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">AB = 5 cm</text></svg>`,
            `<strong>Given:</strong> PT is a tangent at T; PAB is a secant with PA = 4 cm and AB = 5 cm (so PB = PA + AB = 9 cm). <strong>Required to prove:</strong> PT² = PA · PB. Construction: join TA and TB to form ${bl('△PTA')} and ${bl('△PBT')}.`,
            proofTable([
              ['∠P is common to △PTA and △PBT', 'Common angle (same vertex P in both triangles)'],
              [`${re('∠PTA = ∠PBT')}`, 'Tangent-chord angle equals the inscribed angle in the alternate segment (∠PBT = ∠TBA, the angle subtended by chord TA at B)'],
              [`${gr('∴ △PTA ||| △PBT')}`, 'Two pairs of angles equal (AA)'],
              [`${or('PT/PB = PA/PT')}`, 'Corresponding sides of similar triangles are in proportion'],
              [`${or('∴ PT² = PA · PB')}`, 'Cross-multiplying'],
              ['PT² = 4 × 9 = 36', 'Substituting PA = 4 cm and PB = 9 cm'],
              ['∴ PT = 6 cm', 'Taking the square root'],
            ]),
            `<strong>Answer:</strong> PT = ${or('6 cm')}. ✓`,
          ],
        },
        {
          question: 'ABCD is a cyclic quadrilateral. Diagonals AC and BD intersect at E. AE = 6 cm, ED = 4 cm and BE = 3 cm. Prove that AE · EC = BE · ED, and hence find the length of EC.',
          answer: `EC = ${or('2 cm')}`,
          steps: [
            `<svg viewBox="0 0 280 240" width="280" height="240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="62.06" y1="75" x2="224.57" y2="150.78" stroke="#ea580c" stroke-width="2"/><line x1="178.04" y1="38.43" x2="55.43" y2="150.78" stroke="#2563eb" stroke-width="2"/><line x1="62.06" y1="75" x2="178.04" y2="38.43" stroke="#0f1f3d" stroke-width="1.6"/><line x1="178.04" y1="38.43" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="1.6"/><line x1="224.57" y1="150.78" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55.43" y1="150.78" x2="62.06" y2="75" stroke="#0f1f3d" stroke-width="1.6"/><circle cx="62.06" cy="75" r="3" fill="#0f1f3d"/><text x="48.06" y="77" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">A</text><circle cx="178.04" cy="38.43" r="3" fill="#0f1f3d"/><text x="180.04" y="28.43" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">B</text><circle cx="224.57" cy="150.78" r="3" fill="#0f1f3d"/><text x="238.57" y="154.78" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">C</text><circle cx="55.43" cy="150.78" r="3" fill="#0f1f3d"/><text x="41.43" y="154.78" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">D</text><circle cx="112.47" cy="98.51" r="2.2" fill="#16a34a"/><text x="116.47" y="90.51" font-size="12" fill="#16a34a" font-weight="700" text-anchor="start">E</text></svg>`,
            `<strong>Given:</strong> ABCD is a cyclic quadrilateral with diagonals AC and BD meeting at E; AE = 6 cm, ED = 4 cm, BE = 3 cm. <strong>Required to prove:</strong> AE · EC = BE · ED.`,
            proofTable([
              [`${bl('∠AED = ∠BEC')}`, 'Vertically opposite angles'],
              [`${re('∠ADE = ∠BCE')}`, 'Angles in the same segment (∠ADB = ∠ACB, both subtend chord AB from the same arc)'],
              [`${gr('∴ △AED ||| △BEC')}`, 'Two pairs of angles equal (AA)'],
              [`${or('AE/BE = ED/EC')}`, 'Corresponding sides of similar triangles are in proportion'],
              [`${or('∴ AE · EC = BE · ED')}`, 'Cross-multiplying'],
              ['6 × EC = 3 × 4 = 12', 'Substituting AE = 6 cm, BE = 3 cm and ED = 4 cm'],
              ['∴ EC = 2 cm', 'Dividing both sides by 6'],
            ]),
            `<strong>Answer:</strong> EC = ${or('2 cm')}. ✓`,
          ],
        },
        {
          question: 'AB is a diameter of a circle with centre O. C is a point on the circle, and CD ⊥ AB with D on AB. AD = 9 cm and DB = 16 cm. Prove that CD² = AD · DB, and hence find the lengths of CD and AC.',
          answer: `CD = ${or('12 cm')}, AC = ${or('15 cm')}`,
          steps: [
            `<svg viewBox="0 0 280 240" width="280" height="240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#2563eb" stroke-width="2"/><line x1="50" y1="120" x2="191.62" y2="46.28" stroke="#0f1f3d" stroke-width="1.8"/><line x1="191.62" y1="46.28" x2="230" y2="120" stroke="#0f1f3d" stroke-width="1.8"/><line x1="191.62" y1="46.28" x2="191.62" y2="120" stroke="#ea580c" stroke-width="2"/><path d="M 191.62,111 L 182.62,111 L 182.62,120" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="3" fill="#0f1f3d"/><text x="46" y="138" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">A</text><circle cx="230" cy="120" r="3" fill="#0f1f3d"/><text x="234" y="138" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">B</text><circle cx="191.62" cy="46.28" r="3" fill="#0f1f3d"/><text x="199.62" y="40.28" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">C</text><circle cx="191.62" cy="120" r="3" fill="#0f1f3d"/><text x="195.62" y="138" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">D</text><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="136" y="138" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">O</text><text x="120" y="138" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">AD = 9 cm</text><text x="210" y="138" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">DB = 16 cm</text></svg>`,
            `<strong>Given:</strong> AB is a diameter of circle O; C is on the circle; CD ⊥ AB with D on AB; AD = 9 cm, DB = 16 cm. <strong>Required to prove:</strong> CD² = AD · DB.`,
            proofTable([
              [`${re('∠ACB = 90°')}`, 'Angle in a semicircle (AB is a diameter)'],
              [`In △ACD and △ABC: ${bl('∠ADC = ∠ACB = 90°')}, ∠DAC = ∠CAB (common)`, 'CD ⊥ AB (given); common angle at A'],
              [`${gr('∴ △ACD ||| △ABC')}`, 'Two pairs of angles equal (AA)'],
              [`In △CBD and △ABC: ${bl('∠BDC = ∠ACB = 90°')}, ∠DBC = ∠CBA (common)`, 'CD ⊥ AB (given); common angle at B'],
              [`${gr('∴ △CBD ||| △ABC')}`, 'Two pairs of angles equal (AA)'],
              [`${or('AD/CD = CD/DB')}`, '△ACD ||| △CBD (both similar to △ABC, hence to each other); corresponding sides in proportion'],
              [`${or('∴ CD² = AD · DB')}`, 'Cross-multiplying'],
              ['CD² = 9 × 16 = 144, so CD = 12 cm', 'Substituting AD = 9 cm and DB = 16 cm'],
              [`${or('AD/AC = AC/AB')}`, '△ACD ||| △ABC; corresponding sides in proportion'],
              ['AC² = AD · AB = 9 × 25 = 225, so AC = 15 cm', 'Substituting AD = 9 cm and AB = AD + DB = 25 cm'],
            ]),
            `<strong>Answer:</strong> CD = ${or('12 cm')}, AC = ${or('15 cm')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to combine a circle theorem (tangent-chord angle, angle in a semicircle, cyclic quadrilateral opposite angles) with equiangular (AA) similar triangles to prove a squared-length or product-of-lengths result, working through the tangent-secant rider step by step" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — angle at circumference (major arc) ─────────────────────────
    {
      difficulty: 'Easy',
      question: 'Using the diagram, find the angle ACB subtended at C on the major arc.\n\n[DIAGRAM: A circle with centre O and radius 10 cm. Points A, B, C and D lie on the circumference. Angle AOB = 140° at the centre. C is on the major arc. D is on the minor arc. M is the midpoint of chord AB with OM perpendicular to AB. Chord AB = 12 cm.]',
      answer: '70°',
      checkMode: 'auto',
      correctAnswer: '70',
      correctAnswers: ['70', '70°', '70 degrees'],
      explanation: 'The angle at the centre is twice the angle at the circumference.\nAngle ACB = 140° ÷ 2 = 70° ✓',
    },

    // ── Q2 Medium — angle at circumference (minor arc) ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Using the same diagram, find the angle ADB subtended at D on the minor arc.',
      answer: 'Reflex angle AOB = 360° − 140° = 220°.\nAngle ADB = 220° ÷ 2 = 110°.',
      checkMode: 'self',
    },

    // ── Q3 Hard — perpendicular from centre, Pythagoras ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the same diagram, find the length OM.',
      answer: 'AM = 6 cm (M bisects AB).\nOM² = 10² − 6² = 100 − 36 = 64.\nOM = 8 cm.',
      checkMode: 'self',
    },

    // ── Q4 Hard — cyclic quadrilateral from diagram ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the same diagram, if angle CAB = 35° and C and D are on opposite arcs, find angle CDB.',
      answer: 'CADB is a cyclic quadrilateral. Opposite angles sum to 180°: angle CDB = 180° − 35° = 145°.',
      checkMode: 'self',
    },

    // ── Q5 Medium — state the theorem ────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Using the same diagram, state the relationship between angle AOB and angle ACB and name the theorem.',
      answer: 'Angle AOB = 2 × angle ACB — the angle at the centre is twice the angle at the circumference (angle at centre theorem).',
      checkMode: 'self',
    },

    // ── Q6 Easy — opposite angles of cyclic quadrilateral ────────────────────
    {
      difficulty: 'Easy',
      question: 'Using the diagram, find angle BCD.\n\n[DIAGRAM: Cyclic quadrilateral ABCD inscribed in a circle. Angle DAB = 95°. Angle ABC = 80°. Side AB extended beyond B to point E forming exterior angle CBE.]',
      answer: '85°',
      checkMode: 'auto',
      correctAnswer: '85',
      correctAnswers: ['85', '85°', '85 degrees'],
      explanation: 'Opposite angles of a cyclic quadrilateral sum to 180°.\nAngle BCD = 180° − 95° = 85° ✓',
    },

    // ── Q7 Medium — opposite angles of cyclic quadrilateral ──────────────────
    {
      difficulty: 'Medium',
      question: 'Using the same diagram, find angle ADC.',
      answer: '100°',
      checkMode: 'auto',
      correctAnswer: '100',
      correctAnswers: ['100', '100°', '100 degrees'],
      explanation: 'Opposite angles of a cyclic quadrilateral sum to 180°.\nAngle ADC = 180° − 80° = 100° ✓',
    },

    // ── Q8 Hard — exterior angle theorem ─────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the same diagram, find exterior angle CBE and name the theorem used.',
      answer: 'The exterior angle of a cyclic quadrilateral equals the interior opposite angle.\nAngle CBE = angle ADC = 100°.',
      checkMode: 'self',
    },

    // ── Q9 Hard — critical reasoning, cyclic vs general quadrilateral ─────────
    {
      difficulty: 'Hard',
      question: 'Sipho says angle DAB + angle BCD must equal 180° in any quadrilateral. Is he correct? Explain.',
      answer: 'No — this only applies to cyclic quadrilaterals where all four vertices lie on a circle; general quadrilaterals do not have this property.',
      checkMode: 'self',
    },

    // ── Q10 Easy — equal tangent segments ────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Using the diagram, find PB if PA = 9 cm.\n\n[DIAGRAM: A circle with external point P. Tangents PA and PB are drawn from P touching the circle at A and B respectively. Chord AB is drawn. Angle APB = 50°. Point C is on the major arc AB.]',
      answer: '9 cm',
      checkMode: 'auto',
      correctAnswer: '9',
      correctAnswers: ['9', '9cm', '9 cm'],
      explanation: 'Tangent segments from an external point are equal.\nPB = PA = 9 cm ✓',
    },

    // ── Q11 Medium — isosceles triangle from equal tangents ──────────────────
    {
      difficulty: 'Medium',
      question: 'Using the same diagram, find angle PAB.',
      answer: 'Triangle PAB is isosceles (PA = PB).\nAngle PAB = (180° − 50°) ÷ 2 = 65°.',
      checkMode: 'self',
    },

    // ── Q12 Hard — alternate segment theorem ─────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the alternate segment theorem, find angle ACB where C is on the major arc.',
      answer: 'Angle PAB = 65° is the tangent-chord angle at A. By the alternate segment theorem, the inscribed angle in the alternate segment equals 65°. So angle ACB = 65°.',
      checkMode: 'self',
    },

    // ── Q13 Hard — reasoning about PO bisecting angle APB ────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says the line from P through the centre O bisects angle APB. Is he correct? Explain.',
      answer: 'Yes — since PA = PB (equal tangents), triangle PAO is congruent to triangle PBO by SSS (OA = OB as radii, PA = PB, PO common), so PO bisects angle APB.',
      checkMode: 'self',
    },

    // ── Q14 Easy — angle in a semicircle ─────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'AB is a diameter of a circle and P is any point on the circumference. Find angle APB.',
      answer: '90°',
      checkMode: 'auto',
      correctAnswer: '90',
      correctAnswers: ['90', '90°', '90 degrees'],
      explanation: 'The angle in a semicircle is 90°. AB is a diameter, so the angle at the centre is 180° and the angle at the circumference is 180° ÷ 2 = 90° ✓',
    },

    // ── Q15 Medium — Pythagoras in semicircle ────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'In the same circle with radius 8 cm, if AP = 6 cm and AB = 16 cm, find BP using the angle in a semicircle theorem.',
      answer: 'Angle APB = 90°.\nBP² = AB² − AP² = 256 − 36 = 220.\nBP = √220 = 2√55 cm.',
      checkMode: 'self',
    },

    // ── Q16 Hard — perpendicular distance from centre to chord ────────────────
    {
      difficulty: 'Hard',
      question: 'A chord of length 18 cm is drawn in a circle with radius 15 cm. Find the perpendicular distance from the centre to the chord.',
      answer: 'Half chord = 9 cm.\nDistance² = 15² − 9² = 225 − 81 = 144.\nDistance = 12 cm.',
      checkMode: 'self',
    },

    // ── Q17 Medium — alternate segment theorem ────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A tangent at point T makes an angle of 72° with chord TC. B is in the alternate segment. Find angle TBC.',
      answer: '72°',
      checkMode: 'auto',
      correctAnswer: '72',
      correctAnswers: ['72', '72°', '72 degrees'],
      explanation: 'By the alternate segment theorem, the angle in the alternate segment equals the tangent-chord angle.\nAngle TBC = 72° ✓',
    },

    // ── Q18 Hard — find radius from OM and chord ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'In a circle with centre O, OM is perpendicular to chord PQ. OM = 12 cm and PQ = 18 cm. Find the radius.',
      answer: 'PM = 9 cm.\nRadius² = 12² + 9² = 144 + 81 = 225.\nRadius = 15 cm.',
      checkMode: 'self',
    },

    // ── Q19 Hard — solve for x in cyclic quadrilateral ────────────────────────
    {
      difficulty: 'Hard',
      question: 'In cyclic quadrilateral PQRS, angle P = 3x and angle R = x + 40°. Find x and both angles.',
      answer: '3x + (x + 40°) = 180°.\n4x = 140°.\nx = 35°.\nAngle P = 105°, angle R = 75°.',
      checkMode: 'self',
    },

    // ── Q20 Hard — rectangle as cyclic quadrilateral ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says a rectangle is always a cyclic quadrilateral. Is he correct? Explain.',
      answer: 'Yes — a rectangle has all angles equal to 90°, so opposite angles sum to 180°, satisfying the cyclic quadrilateral condition. The diagonal of the rectangle serves as the diameter of the circumscribed circle.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered Euclidean geometry — circles.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-3):   Perpendicular from centre bisects chord (Pythagoras)         — NEEDS DIAGRAM
    // Block 2 (4-7):   Angle at centre = 2 × angle at circumference (+ reflex)      — NEEDS DIAGRAM
    // Block 3 (8-11):  Angles in same segment + angle in a semicircle              — NEEDS DIAGRAM
    // Block 4 (12-15): Cyclic quadrilateral — opposite angles / exterior angle     — NEEDS DIAGRAM
    // Block 5 (16-19): Tangents — equal tangents / tangent-chord (alt segment)     — NEEDS DIAGRAM
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Perpendicular from centre bisects chord (Pythagoras)
        { difficulty: 'Easy', question: 'A circle has centre O and radius OA = 10 cm. OM is drawn perpendicular to chord AB, where AB = 16 cm. Find the length of OM.', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6cm', '6 cm'], answer: '6 cm', explanation: 'Since OM ⊥ AB, OM bisects the chord: AM = 16 ÷ 2 = 8 cm.\nOM² = OA² − AM² = 10² − 8² = 100 − 64 = 36.\nOM = √36 = 6 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 10 cm</text><text x="140" y="67.19" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 16 cm</text><text x="154" y="83.59" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Easy', question: 'A circle has centre O and radius OP = 17 cm. OM is perpendicular to chord PQ, and OM = 8 cm. Find the length of chord PQ.', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30cm', '30 cm'], answer: '30 cm', explanation: 'PM² = OP² − OM² = 17² − 8² = 289 − 64 = 225.\nPM = √225 = 15 cm.\nSince OM bisects the chord, PQ = 2 × 15 = 30 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OP = 17 cm</text><text x="140" y="67.19" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="83.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 8 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A circle has centre O and radius 13 cm. Chord AB = 24 cm, and OM is drawn from O perpendicular to AB, meeting it at M. Find the length of OM.', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5cm', '5 cm'], answer: '5 cm', explanation: 'Since OM ⊥ AB, AM = 24 ÷ 2 = 12 cm.\nOM² = OA² − AM² = 13² − 12² = 169 − 144 = 25.\nOM = √25 = 5 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 13 cm</text><text x="140" y="67.19" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 24 cm</text><text x="154" y="83.59" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'A circle has centre O and radius 25 cm. M is the midpoint of chord AB, and OM = 7 cm. Find the length of AB, then state the size of angle OMA.', checkMode: 'auto', correctAnswer: '48,90', correctAnswers: ['48,90', '48cm,90°', '48 cm, 90°'], answer: 'AB = 48 cm, ∠OMA = 90°', explanation: 'AM² = OA² − OM² = 25² − 7² = 625 − 49 = 576.\nAM = √576 = 24 cm.\nAB = 2 × 24 = 48 cm.\nSince OM is the perpendicular from the centre to the chord, ∠OMA = 90° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 25 cm</text><text x="140" y="67.19" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="83.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 7 cm</text><text x="140" y="228" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">∠OMA = 90°</text></svg>' },

        // Block 2 — Angle at centre = 2 × angle at circumference (+ reflex)
        { difficulty: 'Easy', question: 'In a circle with centre O, chord AB subtends ∠AOB = 96° at the centre. Point C lies on the major arc, on the same side as the 96° angle. Find ∠ACB.', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48', '48°', '48 degrees'], answer: '48°', explanation: 'The angle at the centre is double the angle at the circumference.\n∠ACB = 96° ÷ 2 = 48° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="212.81" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="67.19" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 159.42,134.11 A 24,24 0 0 1 120.58,134.11" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="212.81" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="67.19" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 146.81,43.37 A 15,15 0 0 1 133.19,43.37" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="212.81" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="194.81" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="67.19" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="75.19" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="154" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">96°</text><text x="140" y="56" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In a circle with centre O, chord PQ subtends ∠PRQ = 57° at point R on the circumference. Find ∠POQ at the centre.', checkMode: 'auto', correctAnswer: '114', correctAnswers: ['114', '114°', '114 degrees'], answer: '114°', explanation: 'The angle at the centre is double the angle at the circumference.\n∠POQ = 2 × 57° = 114° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="212.81" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="67.19" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 159.42,134.11 A 24,24 0 0 1 120.58,134.11" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="212.81" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="67.19" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 146.81,43.37 A 15,15 0 0 1 133.19,43.37" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="212.81" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="194.81" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="67.19" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="75.19" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">R</text><text x="140" y="154" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="140" y="56" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">57°</text></svg>' },
        { difficulty: 'Medium', question: 'In a circle with centre O, chord AB subtends ∠AOB = 130° at the centre, measured on the major-arc side. Point D lies on the minor arc. Find the reflex angle AOB, then find ∠ADB.', checkMode: 'auto', correctAnswer: '230,115', correctAnswers: ['230,115', '230°,115°', '230°, 115°'], answer: 'Reflex ∠AOB = 230°, ∠ADB = 115°', explanation: 'Reflex ∠AOB = 360° − 130° = 230°.\nD is on the minor arc, so use the reflex angle: ∠ADB = 230° ÷ 2 = 115° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="197.85" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 155.43,138.38 A 24,24 0 0 1 124.57,138.38" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="197.85" y1="188.94" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="82.15" y1="188.94" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 145.13,44.1 A 15,15 0 0 1 134.87,44.1" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="197.85" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="179.85" y="192.94" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="90.15" y="192.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="140" y="154" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">130°</text><text x="140" y="56" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In a circle with centre O, chord AB subtends an angle of (5x + 10)° at the centre and ∠ACB = (2x + 20)° at point C on the circumference (same side). Find x, then find ∠ACB.', checkMode: 'auto', correctAnswer: '30,80', correctAnswers: ['30,80', '30,80°', 'x=30,80°'], answer: 'x = 30, ∠ACB = 80°', explanation: 'Angle at centre = 2 × angle at circumference:\n(5x + 10)° = 2(2x + 20)°.\n5x + 10 = 4x + 40.\nx = 30.\n∠ACB = 2(30) + 20 = 80° ✓ (check: angle at centre = 5(30)+10=160°, and 2×80°=160° ✓)', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="212.81" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="67.19" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 159.42,134.11 A 24,24 0 0 1 120.58,134.11" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="212.81" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="67.19" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 146.81,43.37 A 15,15 0 0 1 133.19,43.37" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="212.81" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="194.81" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="67.19" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="75.19" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="154" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(5x+10)°</text><text x="140" y="56" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(2x+20)°</text></svg>' },

        // Block 3 — Angles in same segment + angle in a semicircle
        { difficulty: 'Easy', question: 'In a circle, points C and D lie on the same arc relative to chord AB. ∠ACB = 38°. Find ∠ADB.', checkMode: 'auto', correctAnswer: '38', correctAnswers: ['38', '38°', '38 degrees'], answer: '38°', explanation: 'C and D lie in the same segment relative to chord AB, so angles in the same segment are equal.\n∠ADB = ∠ACB = 38° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="192.9" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="192.9" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 163.74,191.33 A 15,15 0 0 1 172.87,189.72" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 82.78,170.95 A 18,18 0 0 1 93.23,174.76" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="170.78" cy="204.57" r="2.5" fill="#0f1f3d"/><text x="178.78" y="198.57" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="64.15" y="178.94" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="170.78" y="228.57" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">38°</text><text x="86.15" y="210.94" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'AB is a diameter of a circle and P is a point on the circumference. ∠PAB = 27°. Find ∠APB, then find ∠PBA.', checkMode: 'auto', correctAnswer: '90,63', correctAnswers: ['90,63', '90°,63°', '90°, 63°'], answer: '∠APB = 90°, ∠PBA = 63°', explanation: 'Since AB is a diameter, ∠APB = 90° (angle in a semicircle).\nIn triangle APB: 27° + 90° + ∠PBA = 180°.\n∠PBA = 180° − 90° − 27° = 63° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 204.18,71.39 L 207.19,80.93 L 216.73,77.92" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="32" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="213.72" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="221.72" y="58.379999999999995" font-size="13" fill="#0f1f3d" font-weight="700">P</text><path d="M 63.35,115.79 A 14,14 0 0 1 64,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="76" y="112" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">27°</text><text x="207.72" y="92.38" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Points A, B, C and D lie on a circle, with C and D on the same arc relative to chord AB. ∠ACB = (3x + 4)° and ∠ADB = (5x − 16)°. Find x, then find ∠ACB.', checkMode: 'auto', correctAnswer: '10,34', correctAnswers: ['10,34', '10,34°', 'x=10,34°'], answer: 'x = 10, ∠ACB = 34°', explanation: 'Angles in the same segment are equal: 3x + 4 = 5x − 16.\n20 = 2x.\nx = 10.\n∠ACB = 3(10) + 4 = 34° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="192.9" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="192.9" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 163.74,191.33 A 15,15 0 0 1 172.87,189.72" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 82.78,170.95 A 18,18 0 0 1 93.23,174.76" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="170.78" cy="204.57" r="2.5" fill="#0f1f3d"/><text x="178.78" y="198.57" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="64.15" y="178.94" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="170.78" y="228.57" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(3x+4)°</text><text x="86.15" y="210.94" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(5x−16)°</text></svg>' },
        { difficulty: 'Hard', question: 'AB is a diameter of a circle with AB = 20 cm. P is a point on the circumference with AP = 12 cm. Find ∠APB, then find the length of BP.', checkMode: 'auto', correctAnswer: '90,16', correctAnswers: ['90,16', '90°,16cm', '90°, 16 cm'], answer: '∠APB = 90°, BP = 16 cm', explanation: 'AB is a diameter, so ∠APB = 90° (angle in a semicircle).\nTriangle APB is right-angled at P: BP² = AB² − AP² = 20² − 12² = 400 − 144 = 256.\nBP = √256 = 16 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="213.3" y2="93.32" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="213.3" y2="93.32" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 203.43,94.93 L 208.74,103.41 L 218.61,101.8" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="32" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="213.3" cy="93.32" r="2.5" fill="#0f1f3d"/><text x="221.3" y="83.32" font-size="13" fill="#0f1f3d" font-weight="700">P</text><text x="109.65" y="102.66" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">AP = 12 cm</text><text x="140" y="140" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 20 cm</text><text x="247.65" y="100.66" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Block 4 — Cyclic quadrilateral: opposite angles / exterior angle
        { difficulty: 'Easy', question: 'In cyclic quadrilateral ABCD, ∠A = 102°. Find ∠C.', checkMode: 'auto', correctAnswer: '78', correctAnswers: ['78', '78°', '78 degrees'], answer: '78°', explanation: 'Opposite angles of a cyclic quadrilateral are supplementary.\n∠C = 180° − 102° = 78° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="197.85" y2="51.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="197.85" y1="51.06" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="89.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="76.15" y="206.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="197.85" cy="51.06" r="2.5" fill="#0f1f3d"/><text x="201.85" y="39.06" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="81.74" y="98.8" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">102°</text><text x="198.26" y="141.2" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In cyclic quadrilateral ABCD, ∠B = 95°. Find ∠D.', checkMode: 'auto', correctAnswer: '85', correctAnswers: ['85', '85°', '85 degrees'], answer: '85°', explanation: 'Opposite angles of a cyclic quadrilateral are supplementary.\n∠D = 180° − 95° = 85° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="197.85" y2="51.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="197.85" y1="51.06" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="89.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="76.15" y="206.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="197.85" cy="51.06" r="2.5" fill="#0f1f3d"/><text x="201.85" y="39.06" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="100.15" y="167.49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">95°</text><text x="179.85" y="72.51" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'PQRS is a cyclic quadrilateral with ∠PQR = 118°. Side RS is extended beyond S to a point T, forming exterior angle ∠PST. Find ∠PST, and name the theorem used.', checkMode: 'auto', correctAnswer: '118', correctAnswers: ['118', '118°', '118 degrees'], answer: '118°', explanation: 'The exterior angle of a cyclic quadrilateral equals the interior opposite angle.\n∠PST = ∠PQR = 118° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="62.06" y1="165" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170.78" y1="204.57" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="208.94" y1="62.15" x2="71.06" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.06" y1="62.15" x2="26.06" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="26.06" y1="62.15" x2="62.06" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="62.06" cy="165" r="2.5" fill="#0f1f3d"/><text x="54.06" y="185" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="170.78" cy="204.57" r="2.5" fill="#0f1f3d"/><text x="164.78" y="192.57" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="56.15" font-size="13" fill="#0f1f3d" font-weight="700">R</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="63.06" y="50.15" font-size="13" fill="#0f1f3d" font-weight="700">S</text><circle cx="26.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="16.06" y="50.15" font-size="13" fill="#0f1f3d" font-weight="700">T</text><text x="161.2" y="178.26" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">118°</text><text x="54.85" y="77.02" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In cyclic quadrilateral ABCD, ∠A = (2x + 15)° and ∠C = (x + 45)°. Find x, then find ∠A and ∠C.', checkMode: 'auto', correctAnswer: '40,95,85', correctAnswers: ['40,95,85', '40,95°,85°', 'x=40,95°,85°'], answer: 'x = 40, ∠A = 95°, ∠C = 85°', explanation: 'Opposite angles are supplementary: (2x + 15) + (x + 45) = 180.\n3x + 60 = 180.\nx = 40.\n∠A = 2(40) + 15 = 95°, ∠C = 40 + 45 = 85°. Check: 95° + 85° = 180° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="197.85" y2="51.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="197.85" y1="51.06" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="89.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="76.15" y="206.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="197.85" cy="51.06" r="2.5" fill="#0f1f3d"/><text x="201.85" y="39.06" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="81.74" y="98.8" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(2x+15)°</text><text x="198.26" y="141.2" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(x+45)°</text></svg>' },

        // Block 5 — Tangents: equal tangents / tangent-chord (alternate segment)
        { difficulty: 'Easy', question: 'Tangents PA and PB are drawn from external point P to a circle. If PA = 11 cm, find PB.', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', '11cm', '11 cm'], answer: '11 cm', explanation: 'Tangent segments from an external point are equal.\nPB = PA = 11 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="20" x2="71.06" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="20" x2="208.94" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><path d="M 78.74,57.46 L 85.63,63.25 L 77.95,67.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><path d="M 201.26,57.46 L 194.37,63.25 L 202.05,67.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="20" r="2.5" fill="#0f1f3d"/><text x="134" y="10" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="51.06" y="66.15" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="72.15" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="85.53" y="39.08" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">PA = 11 cm</text><text x="194.47" y="41.08" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'A tangent at point T makes an angle of 58° with chord TC. Point B lies in the alternate segment. Find ∠TBC, and name the theorem used.', checkMode: 'auto', correctAnswer: '58', correctAnswers: ['58', '58°', '58 degrees'], answer: '58°', explanation: 'By the alternate segment theorem (tangent-chord theorem), the inscribed angle in the alternate segment equals the tangent-chord angle.\n∠TBC = 58° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="70" y1="210" x2="210" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="210" x2="55.43" y2="89.22" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="210" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 118,210 A 22,22 0 0 1 127.38,191.98" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 215.97,101.51 A 15,15 0 0 1 209.57,89.22" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="146" y="226" font-size="13" fill="#0f1f3d" font-weight="700">T</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="224.57" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="234.57" y="83.22" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="110" y="200" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">58°</text><text x="230.57" y="71.22" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Tangents PA and PB are drawn from external point P to a circle, with ∠APB = 46°. Since PA = PB, triangle PAB is isosceles. Find ∠PAB.', checkMode: 'auto', correctAnswer: '67', correctAnswers: ['67', '67°', '67 degrees'], answer: '67°', explanation: 'Since PA = PB (equal tangents from an external point), triangle PAB is isosceles, so ∠PAB = ∠PBA.\n∠PAB = (180° − 46°) ÷ 2 = 134° ÷ 2 = 67° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="20" x2="71.06" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="20" x2="208.94" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="71.06" y1="62.15" x2="208.94" y2="62.15" stroke="#ea580c" stroke-width="2.5"/><path d="M 124.64,29.39 A 18,18 0 0 0 155.36,29.39" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 83.86,54.33 A 15,15 0 0 1 86.06,62.15" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="20" r="2.5" fill="#0f1f3d"/><text x="134" y="10" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="51.06" y="68.15" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="72.15" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="140" y="54" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">46°</text><text x="96.09" y="55.11" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Tangents PA and PB are drawn from external point P to a circle, touching it at A and B. ∠APB = 40°. C is a point on the major arc AB. Find ∠PAB, then use the alternate segment theorem to find ∠ACB.', checkMode: 'auto', correctAnswer: '70,70', correctAnswers: ['70,70', '70°,70°', '70°, 70°'], answer: '∠PAB = 70°, ∠ACB = 70°', explanation: 'Since PA = PB, triangle PAB is isosceles: ∠PAB = (180° − 40°) ÷ 2 = 70°.\n∠PAB is the tangent-chord angle at A for chord AB. By the alternate segment theorem, ∠ACB = ∠PAB = 70° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="15" x2="66.28" y2="68.38" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="15" x2="213.72" y2="68.38" stroke="#16a34a" stroke-width="2.5"/><line x1="66.28" y1="68.38" x2="213.72" y2="68.38" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="66.28" y1="68.38" x2="163.29" y2="206.93" stroke="#0f1f3d" stroke-width="2.5"/><line x1="213.72" y1="68.38" x2="163.29" y2="206.93" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 127.04,24.38 A 16,16 0 0 0 152.96,24.38" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 155.26,195.46 A 14,14 0 0 1 168.08,193.77" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="15" r="2.5" fill="#0f1f3d"/><text x="134" y="7" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="66.28" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="46.28" y="74.38" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="213.72" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="223.72" y="76.38" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="163.29" cy="206.93" r="2.5" fill="#0f1f3d"/><text x="157.29" y="226.93" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="45" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">40°</text><text x="163.29" y="192.93" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Block 6 — Rider proofs (CAPS problem-solving cognitive level)
        { difficulty: 'Hard', question: 'ABCD is a cyclic quadrilateral with centre O. ∠BOD = 116° (at the centre), where A lies on the major arc BD. Prove that ∠BCD = 122°.', checkMode: 'auto', correctAnswer: '122', correctAnswers: ['122', '122°', '122 degrees'], answer: '122°', explanation: `${re('∠BAD = 58°')} (angle at centre = 2 × angle at circumference), so ${bl('∠BCD = 180° − 58° = 122°')} (opposite angles of a cyclic quadrilateral are supplementary).` + proofTable([
          ['∠BAD = ½∠BOD = ½ × 116° = 58°', 'Angle at the centre is twice the angle at the circumference (same chord BD, A on major arc)'],
          ['∠BAD + ∠BCD = 180°', 'Opposite angles of a cyclic quadrilateral are supplementary'],
          ['58° + ∠BCD = 180°', 'Substituting ∠BAD = 58°'],
          ['∴ ∠BCD = 122°', 'Solving for ∠BCD'],
        ]), diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155.63" y1="208.63" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2"/><line x1="55.43" y1="89.22" x2="121.29" y2="31.97" stroke="#0f1f3d" stroke-width="2"/><line x1="121.29" y1="31.97" x2="204.74" y2="57.48" stroke="#0f1f3d" stroke-width="2"/><line x1="204.74" y1="57.48" x2="155.63" y2="208.63" stroke="#0f1f3d" stroke-width="2"/><line x1="140" y1="120" x2="55.43" y2="89.22" stroke="#dc2626" stroke-width="2"/><line x1="140" y1="120" x2="204.74" y2="57.48" stroke="#dc2626" stroke-width="2"/><path d="M 119.3,112.5 A 22,22 0 0 1 155.8,104.7" fill="none" stroke="#dc2626" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="155.63" cy="208.63" r="2.5" fill="#0f1f3d"/><text x="161.63" y="222.63" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="121.29" cy="31.97" r="2.5" fill="#0f1f3d"/><text x="115.29" y="18.97" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="204.74" cy="57.48" r="2.5" fill="#0f1f3d"/><text x="214.74" y="51.48" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="138" y="98" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">116°</text></svg>' },
        { difficulty: 'Hard', question: 'A tangent touches a circle at A. Chord AB is drawn, and the tangent-chord angle ∠TAB = 62°. C and D both lie on the major arc AB (the alternate segment). Prove that ∠ADB = 62°.', checkMode: 'auto', correctAnswer: '62', correctAnswers: ['62', '62°', '62 degrees'], answer: '62°', explanation: `${or('∠ACB = 62°')} (tangent-chord angle equals the inscribed angle in the alternate segment), so ${gr('∠ADB = ∠ACB = 62°')} (angles in the same segment are equal).` + proofTable([
          ['∠ACB = ∠TAB = 62°', 'Tangent-chord (alternate segment) theorem: C lies in the alternate segment for chord AB'],
          ['∠ADB = ∠ACB', 'Angles in the same segment are equal (C, D both subtend AB from the major arc)'],
          ['∴ ∠ADB = 62°', 'Substitution'],
        ]), diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="70" y1="210" x2="210" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="210" x2="55.43" y2="89.22" stroke="#ea580c" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="185.0" y2="42.06" stroke="#0f1f3d" stroke-width="1.6"/><line x1="185.0" y1="42.06" x2="140" y2="210" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55.43" y1="89.22" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="1.6"/><line x1="224.57" y1="89.22" x2="140" y2="210" stroke="#0f1f3d" stroke-width="1.6"/><path d="M 118,210 A 22,22 0 0 1 127.38,191.98" fill="none" stroke="#dc2626" stroke-width="2"/><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="146" y="226" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="185.0" cy="42.06" r="2.5" fill="#0f1f3d"/><text x="191" y="32.06" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="224.57" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="234.57" y="83.22" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="110" y="200" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">62°</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered the Grade 12 circle theorems — perpendicular bisecting a chord, angle at the centre, angles in the same segment, cyclic quadrilaterals, and tangent theorems.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the cyclic quadrilateral or tangent-chord theorem, and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on each circle theorem, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Perpendicular from centre bisects chord (Pythagoras)
        { difficulty: 'Easy', question: 'A circle has centre O and radius OA = 15 cm. OM is drawn perpendicular to chord AB, where AB = 24 cm. Find the length of OM.', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9cm', '9 cm'], answer: '9 cm', explanation: 'Since OM ⊥ AB, AM = 24 ÷ 2 = 12 cm.\nOM² = OA² − AM² = 15² − 12² = 225 − 144 = 81.\nOM = √81 = 9 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 15 cm</text><text x="140" y="67.19" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 24 cm</text><text x="154" y="83.59" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Easy', question: 'A circle has centre O and radius OA = 20 cm. OM is perpendicular to chord AB, and OM = 12 cm. Find the length of chord AB.', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32', '32cm', '32 cm'], answer: '32 cm', explanation: 'AM² = OA² − OM² = 20² − 12² = 400 − 144 = 256.\nAM = √256 = 16 cm.\nAB = 2 × 16 = 32 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 20 cm</text><text x="140" y="67.19" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="83.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 12 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A circle has centre O and radius 26 cm. Chord AB = 48 cm, and OM is drawn from O perpendicular to AB. Find the length of OM.', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10cm', '10 cm'], answer: '10 cm', explanation: 'AM = 48 ÷ 2 = 24 cm.\nOM² = OA² − AM² = 26² − 24² = 676 − 576 = 100.\nOM = √100 = 10 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 26 cm</text><text x="140" y="67.19" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 48 cm</text><text x="154" y="83.59" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'A circle has centre O and radius 29 cm. M is the midpoint of chord AB, and OM = 20 cm. Find the length of AB, then state the size of angle OMA.', checkMode: 'auto', correctAnswer: '42,90', correctAnswers: ['42,90', '42cm,90°', '42 cm, 90°'], answer: 'AB = 42 cm, ∠OMA = 90°', explanation: 'AM² = OA² − OM² = 29² − 20² = 841 − 400 = 441.\nAM = √441 = 21 cm.\nAB = 2 × 21 = 42 cm.\nSince OM is the perpendicular from the centre to the chord, ∠OMA = 90° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 29 cm</text><text x="140" y="67.19" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="83.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 20 cm</text><text x="140" y="228" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">∠OMA = 90°</text></svg>' },

        // Block 2 — Angle at centre = 2 × angle at circumference (+ reflex)
        { difficulty: 'Easy', question: 'In a circle with centre O, chord AB subtends ∠AOB = 70° at the centre. Point C lies on the major arc, on the same side as the 70° angle. Find ∠ACB.', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35°', '35 degrees'], answer: '35°', explanation: 'The angle at the centre is double the angle at the circumference.\n∠ACB = 70° ÷ 2 = 35° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="212.81" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="67.19" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 159.42,134.11 A 24,24 0 0 1 120.58,134.11" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="212.81" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="67.19" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 146.81,43.37 A 15,15 0 0 1 133.19,43.37" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="212.81" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="194.81" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="67.19" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="75.19" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="154" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">70°</text><text x="140" y="56" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In a circle with centre O, chord PQ subtends ∠PRQ = 63° at point R on the circumference. Find ∠POQ at the centre.', checkMode: 'auto', correctAnswer: '126', correctAnswers: ['126', '126°', '126 degrees'], answer: '126°', explanation: 'The angle at the centre is double the angle at the circumference.\n∠POQ = 2 × 63° = 126° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="212.81" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="67.19" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 159.42,134.11 A 24,24 0 0 1 120.58,134.11" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="212.81" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="67.19" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 146.81,43.37 A 15,15 0 0 1 133.19,43.37" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="212.81" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="194.81" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="67.19" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="75.19" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">R</text><text x="140" y="154" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="140" y="56" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">63°</text></svg>' },
        { difficulty: 'Medium', question: 'In a circle with centre O, chord AB subtends ∠AOB = 100° at the centre, measured on the major-arc side. Point D lies on the minor arc. Find the reflex angle AOB, then find ∠ADB.', checkMode: 'auto', correctAnswer: '260,130', correctAnswers: ['260,130', '260°,130°', '260°, 130°'], answer: 'Reflex ∠AOB = 260°, ∠ADB = 130°', explanation: 'Reflex ∠AOB = 360° − 100° = 260°.\nD is on the minor arc, so use the reflex angle: ∠ADB = 260° ÷ 2 = 130° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="197.85" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 155.43,138.38 A 24,24 0 0 1 124.57,138.38" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="197.85" y1="188.94" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="82.15" y1="188.94" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 145.13,44.1 A 15,15 0 0 1 134.87,44.1" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="197.85" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="179.85" y="192.94" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="90.15" y="192.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="140" y="154" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">100°</text><text x="140" y="56" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In a circle with centre O, chord AB subtends an angle of (4x + 8)° at the centre and ∠ACB = (x + 26)° at point C on the circumference (same side). Find x, then find ∠ACB.', checkMode: 'auto', correctAnswer: '22,48', correctAnswers: ['22,48', '22,48°', 'x=22,48°'], answer: 'x = 22, ∠ACB = 48°', explanation: 'Angle at centre = 2 × angle at circumference:\n(4x + 8)° = 2(x + 26)°.\n4x + 8 = 2x + 52.\n2x = 44.\nx = 22.\n∠ACB = 22 + 26 = 48° ✓ (check: angle at centre = 4(22)+8=96°, and 2×48°=96° ✓)', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="212.81" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="67.19" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 159.42,134.11 A 24,24 0 0 1 120.58,134.11" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="212.81" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="67.19" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 146.81,43.37 A 15,15 0 0 1 133.19,43.37" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="212.81" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="194.81" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="67.19" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="75.19" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="154" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(4x+8)°</text><text x="140" y="56" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(x+26)°</text></svg>' },

        // Block 3 — Angles in same segment + angle in a semicircle
        { difficulty: 'Easy', question: 'In a circle, points C and D lie on the same arc relative to chord AB. ∠ACB = 52°. Find ∠ADB.', checkMode: 'auto', correctAnswer: '52', correctAnswers: ['52', '52°', '52 degrees'], answer: '52°', explanation: 'C and D lie in the same segment relative to chord AB, so angles in the same segment are equal.\n∠ADB = ∠ACB = 52° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="192.9" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="192.9" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 163.74,191.33 A 15,15 0 0 1 172.87,189.72" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 82.78,170.95 A 18,18 0 0 1 93.23,174.76" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="170.78" cy="204.57" r="2.5" fill="#0f1f3d"/><text x="178.78" y="198.57" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="64.15" y="178.94" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="170.78" y="228.57" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">52°</text><text x="86.15" y="210.94" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'AB is a diameter of a circle and P is a point on the circumference. ∠PAB = 34°. Find ∠APB, then find ∠PBA.', checkMode: 'auto', correctAnswer: '90,56', correctAnswers: ['90,56', '90°,56°', '90°, 56°'], answer: '∠APB = 90°, ∠PBA = 56°', explanation: 'Since AB is a diameter, ∠APB = 90° (angle in a semicircle).\nIn triangle APB: 34° + 90° + ∠PBA = 180°.\n∠PBA = 180° − 90° − 34° = 56° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 204.18,71.39 L 207.19,80.93 L 216.73,77.92" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="32" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="213.72" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="221.72" y="58.379999999999995" font-size="13" fill="#0f1f3d" font-weight="700">P</text><path d="M 63.35,115.79 A 14,14 0 0 1 64,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="76" y="112" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">34°</text><text x="207.72" y="92.38" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Points A, B, C and D lie on a circle, with C and D on the same arc relative to chord AB. ∠ACB = (2x + 9)° and ∠ADB = (4x − 19)°. Find x, then find ∠ACB.', checkMode: 'auto', correctAnswer: '14,37', correctAnswers: ['14,37', '14,37°', 'x=14,37°'], answer: 'x = 14, ∠ACB = 37°', explanation: 'Angles in the same segment are equal: 2x + 9 = 4x − 19.\n28 = 2x.\nx = 14.\n∠ACB = 2(14) + 9 = 37° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="192.9" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="192.9" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 163.74,191.33 A 15,15 0 0 1 172.87,189.72" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 82.78,170.95 A 18,18 0 0 1 93.23,174.76" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="170.78" cy="204.57" r="2.5" fill="#0f1f3d"/><text x="178.78" y="198.57" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="64.15" y="178.94" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="170.78" y="228.57" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(2x+9)°</text><text x="86.15" y="210.94" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(4x−19)°</text></svg>' },
        { difficulty: 'Hard', question: 'AB is a diameter of a circle with AB = 26 cm. P is a point on the circumference with AP = 10 cm. Find ∠APB, then find the length of BP.', checkMode: 'auto', correctAnswer: '90,24', correctAnswers: ['90,24', '90°,24cm', '90°, 24 cm'], answer: '∠APB = 90°, BP = 24 cm', explanation: 'AB is a diameter, so ∠APB = 90° (angle in a semicircle).\nTriangle APB is right-angled at P: BP² = AB² − AP² = 26² − 10² = 676 − 100 = 576.\nBP = √576 = 24 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="213.3" y2="93.32" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="213.3" y2="93.32" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 203.43,94.93 L 208.74,103.41 L 218.61,101.8" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="32" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="213.3" cy="93.32" r="2.5" fill="#0f1f3d"/><text x="221.3" y="83.32" font-size="13" fill="#0f1f3d" font-weight="700">P</text><text x="109.65" y="102.66" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">AP = 10 cm</text><text x="140" y="140" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 26 cm</text><text x="247.65" y="100.66" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Block 4 — Cyclic quadrilateral: opposite angles / exterior angle
        { difficulty: 'Easy', question: 'In cyclic quadrilateral ABCD, ∠A = 88°. Find ∠C.', checkMode: 'auto', correctAnswer: '92', correctAnswers: ['92', '92°', '92 degrees'], answer: '92°', explanation: 'Opposite angles of a cyclic quadrilateral are supplementary.\n∠C = 180° − 88° = 92° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="197.85" y2="51.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="197.85" y1="51.06" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="89.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="76.15" y="206.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="197.85" cy="51.06" r="2.5" fill="#0f1f3d"/><text x="201.85" y="39.06" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="81.74" y="98.8" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">88°</text><text x="198.26" y="141.2" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In cyclic quadrilateral ABCD, ∠B = 73°. Find ∠D.', checkMode: 'auto', correctAnswer: '107', correctAnswers: ['107', '107°', '107 degrees'], answer: '107°', explanation: 'Opposite angles of a cyclic quadrilateral are supplementary.\n∠D = 180° − 73° = 107° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="197.85" y2="51.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="197.85" y1="51.06" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="89.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="76.15" y="206.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="197.85" cy="51.06" r="2.5" fill="#0f1f3d"/><text x="201.85" y="39.06" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="100.15" y="167.49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">73°</text><text x="179.85" y="72.51" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'WXYZ is a cyclic quadrilateral with ∠WXY = 126°. Side YZ is extended beyond Z to a point T, forming exterior angle ∠WZT. Find ∠WZT, and name the theorem used.', checkMode: 'auto', correctAnswer: '126', correctAnswers: ['126', '126°', '126 degrees'], answer: '126°', explanation: 'The exterior angle of a cyclic quadrilateral equals the interior opposite angle.\n∠WZT = ∠WXY = 126° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="62.06" y1="165" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170.78" y1="204.57" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="208.94" y1="62.15" x2="71.06" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.06" y1="62.15" x2="26.06" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="26.06" y1="62.15" x2="62.06" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="62.06" cy="165" r="2.5" fill="#0f1f3d"/><text x="54.06" y="185" font-size="13" fill="#0f1f3d" font-weight="700">W</text><circle cx="170.78" cy="204.57" r="2.5" fill="#0f1f3d"/><text x="164.78" y="192.57" font-size="13" fill="#0f1f3d" font-weight="700">X</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="56.15" font-size="13" fill="#0f1f3d" font-weight="700">Y</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="63.06" y="50.15" font-size="13" fill="#0f1f3d" font-weight="700">Z</text><circle cx="26.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="16.06" y="50.15" font-size="13" fill="#0f1f3d" font-weight="700">T</text><text x="161.2" y="178.26" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">126°</text><text x="54.85" y="77.02" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In cyclic quadrilateral ABCD, ∠A = (3x − 10)° and ∠C = (x + 30)°. Find x, then find ∠A and ∠C.', checkMode: 'auto', correctAnswer: '40,110,70', correctAnswers: ['40,110,70', '40,110°,70°', 'x=40,110°,70°'], answer: 'x = 40, ∠A = 110°, ∠C = 70°', explanation: 'Opposite angles are supplementary: (3x − 10) + (x + 30) = 180.\n4x + 20 = 180.\nx = 40.\n∠A = 3(40) − 10 = 110°, ∠C = 40 + 30 = 70°. Check: 110° + 70° = 180° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="197.85" y2="51.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="197.85" y1="51.06" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="89.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="76.15" y="206.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="197.85" cy="51.06" r="2.5" fill="#0f1f3d"/><text x="201.85" y="39.06" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="81.74" y="98.8" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(3x−10)°</text><text x="198.26" y="141.2" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(x+30)°</text></svg>' },

        // Block 5 — Tangents: equal tangents / tangent-chord (alternate segment)
        { difficulty: 'Easy', question: 'Tangents PA and PB are drawn from external point P to a circle. If PA = 14 cm, find PB.', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', '14cm', '14 cm'], answer: '14 cm', explanation: 'Tangent segments from an external point are equal.\nPB = PA = 14 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="20" x2="71.06" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="20" x2="208.94" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><path d="M 78.74,57.46 L 85.63,63.25 L 77.95,67.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><path d="M 201.26,57.46 L 194.37,63.25 L 202.05,67.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="20" r="2.5" fill="#0f1f3d"/><text x="134" y="10" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="51.06" y="66.15" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="72.15" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="85.53" y="39.08" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">PA = 14 cm</text><text x="194.47" y="41.08" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'A tangent at point T makes an angle of 49° with chord TC. Point B lies in the alternate segment. Find ∠TBC, and name the theorem used.', checkMode: 'auto', correctAnswer: '49', correctAnswers: ['49', '49°', '49 degrees'], answer: '49°', explanation: 'By the alternate segment theorem (tangent-chord theorem), the inscribed angle in the alternate segment equals the tangent-chord angle.\n∠TBC = 49° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="70" y1="210" x2="210" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="210" x2="55.43" y2="89.22" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="210" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 118,210 A 22,22 0 0 1 127.38,191.98" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 215.97,101.51 A 15,15 0 0 1 209.57,89.22" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="146" y="226" font-size="13" fill="#0f1f3d" font-weight="700">T</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="224.57" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="234.57" y="83.22" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="110" y="200" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">49°</text><text x="230.57" y="71.22" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Tangents PA and PB are drawn from external point P to a circle, with ∠APB = 62°. Since PA = PB, triangle PAB is isosceles. Find ∠PAB.', checkMode: 'auto', correctAnswer: '59', correctAnswers: ['59', '59°', '59 degrees'], answer: '59°', explanation: 'Since PA = PB (equal tangents from an external point), triangle PAB is isosceles, so ∠PAB = ∠PBA.\n∠PAB = (180° − 62°) ÷ 2 = 118° ÷ 2 = 59° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="20" x2="71.06" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="20" x2="208.94" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="71.06" y1="62.15" x2="208.94" y2="62.15" stroke="#ea580c" stroke-width="2.5"/><path d="M 124.64,29.39 A 18,18 0 0 0 155.36,29.39" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 83.86,54.33 A 15,15 0 0 1 86.06,62.15" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="20" r="2.5" fill="#0f1f3d"/><text x="134" y="10" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="51.06" y="68.15" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="72.15" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="140" y="54" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">62°</text><text x="96.09" y="55.11" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Tangents PA and PB are drawn from external point P to a circle, touching it at A and B. ∠APB = 54°. C is a point on the major arc AB. Find ∠PAB, then use the alternate segment theorem to find ∠ACB.', checkMode: 'auto', correctAnswer: '63,63', correctAnswers: ['63,63', '63°,63°', '63°, 63°'], answer: '∠PAB = 63°, ∠ACB = 63°', explanation: 'Since PA = PB, triangle PAB is isosceles: ∠PAB = (180° − 54°) ÷ 2 = 63°.\n∠PAB is the tangent-chord angle at A for chord AB. By the alternate segment theorem, ∠ACB = ∠PAB = 63° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="15" x2="66.28" y2="68.38" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="15" x2="213.72" y2="68.38" stroke="#16a34a" stroke-width="2.5"/><line x1="66.28" y1="68.38" x2="213.72" y2="68.38" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="66.28" y1="68.38" x2="163.29" y2="206.93" stroke="#0f1f3d" stroke-width="2.5"/><line x1="213.72" y1="68.38" x2="163.29" y2="206.93" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 127.04,24.38 A 16,16 0 0 0 152.96,24.38" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 155.26,195.46 A 14,14 0 0 1 168.08,193.77" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="15" r="2.5" fill="#0f1f3d"/><text x="134" y="7" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="66.28" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="46.28" y="74.38" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="213.72" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="223.72" y="76.38" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="163.29" cy="206.93" r="2.5" fill="#0f1f3d"/><text x="157.29" y="226.93" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="45" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">54°</text><text x="163.29" y="192.93" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Block 6 — Rider proofs (CAPS problem-solving cognitive level)
        { difficulty: 'Hard', question: 'ABCD is a cyclic quadrilateral with centre O. Diagonal AC subtends ∠AOC = 118° at the centre, with B on the major arc AC. Side AD is extended beyond D to a point E, forming exterior angle ∠CDE. Prove that ∠CDE = 59°.', checkMode: 'auto', correctAnswer: '59', correctAnswers: ['59', '59°', '59 degrees'], answer: '59°', explanation: `${re('∠ABC = 59°')} (angle at centre = 2 × angle at circumference), so ${bl('∠CDE = ∠ABC = 59°')} (exterior angle of a cyclic quadrilateral equals the interior opposite angle).` + proofTable([
          ['∠ABC = ½∠AOC = ½ × 118° = 59°', 'Angle at the centre is twice the angle at the circumference (same chord AC, B on major arc)'],
          ['∠CDE = ∠ABC', 'Exterior angle of a cyclic quadrilateral equals the interior opposite angle (D and B are opposite vertices of ABCD)'],
          ['∴ ∠CDE = 59°', 'Substitution'],
        ]), diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="124.37" y1="208.63" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2"/><line x1="208.94" y1="62.15" x2="69.08" y2="64.59" stroke="#0f1f3d" stroke-width="2"/><line x1="69.08" y1="64.59" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2"/><line x1="55.43" y1="150.78" x2="124.37" y2="208.63" stroke="#0f1f3d" stroke-width="2"/><line x1="69.08" y1="64.59" x2="49.97" y2="185.26" stroke="#0f1f3d" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="140" y1="120" x2="124.37" y2="208.63" stroke="#dc2626" stroke-width="2"/><line x1="140" y1="120" x2="69.08" y2="64.59" stroke="#dc2626" stroke-width="2"/><path d="M 136.2,141.7 A 22,22 0 0 1 122.7,106.5" fill="none" stroke="#dc2626" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="124.37" cy="208.63" r="2.5" fill="#0f1f3d"/><text x="118.37" y="224.63" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="56.15" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="69.08" cy="64.59" r="2.5" fill="#0f1f3d"/><text x="63.08" y="50.59" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="154.78" font-size="13" fill="#0f1f3d" font-weight="700">D</text><circle cx="49.97" cy="185.26" r="2.5" fill="#0f1f3d"/><text x="35.97" y="200.26" font-size="13" fill="#0f1f3d" font-weight="700">E</text><text x="150" y="98" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">118°</text></svg>' },
        { difficulty: 'Hard', question: 'AB is a diameter of a circle with centre O. C is a point on the circle such that AC = BC. A line CT is drawn such that ∠TCA = ∠CBA. Prove that CT is a tangent to the circle at C.', answer: `Since AB is a diameter, ${re('∠ACB = 90°')}. Since AC = BC, △ABC is isosceles, so ${bl('∠CAB = ∠CBA = 45°')} each. Given ${gr('∠TCA = ∠CBA = 45°')}, by the converse of the tangent-chord theorem, CT is a tangent to the circle at C.` + proofTable([
          ['∠ACB = 90°', 'Angle in a semicircle (AB is a diameter)'],
          ['AC = BC', 'Given'],
          ['∠CAB = ∠CBA', 'Base angles of isosceles triangle ABC (AC = BC) are equal'],
          ['∠CAB = ∠CBA = 45°', '∠CAB + ∠CBA = 180° − 90° = 90° (angle sum of △ABC), and the two base angles are equal, so each is 45°'],
          ['∠TCA = ∠CBA = 45°', 'Given'],
          ['∴ CT is a tangent to the circle at C', 'Converse of the tangent-chord (alternate segment) theorem: since ∠TCA equals the inscribed angle ∠CBA in the alternate segment, CT must be a tangent'],
        ]), checkMode: 'self', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#0f1f3d" stroke-width="2"/><line x1="50" y1="120" x2="140" y2="30" stroke="#0f1f3d" stroke-width="1.8"/><line x1="140" y1="30" x2="230" y2="120" stroke="#0f1f3d" stroke-width="1.8"/><line x1="60" y1="30" x2="220" y2="30" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="32" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="240" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="146" y="20" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="220" cy="30" r="2.5" fill="#0f1f3d"/><text x="230" y="24" font-size="13" fill="#0f1f3d" font-weight="700">T</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered the Grade 12 circle theorems — perpendicular bisecting a chord, angle at the centre, angles in the same segment, cyclic quadrilaterals, and tangent theorems.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the cyclic quadrilateral or tangent-chord theorem, and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on each circle theorem, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Perpendicular from centre bisects chord (Pythagoras)
        { difficulty: 'Easy', question: 'A circle has centre O and radius OA = 20 cm. OM is drawn perpendicular to chord AB, where AB = 32 cm. Find the length of OM.', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], answer: '12 cm', explanation: 'Since OM ⊥ AB, AM = 32 ÷ 2 = 16 cm.\nOM² = OA² − AM² = 20² − 16² = 400 − 256 = 144.\nOM = √144 = 12 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 20 cm</text><text x="140" y="67.19" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 32 cm</text><text x="154" y="83.59" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Easy', question: 'A circle has centre O and radius OA = 41 cm. OM is perpendicular to chord AB, and OM = 9 cm. Find the length of chord AB.', checkMode: 'auto', correctAnswer: '80', correctAnswers: ['80', '80cm', '80 cm'], answer: '80 cm', explanation: 'AM² = OA² − OM² = 41² − 9² = 1681 − 81 = 1600.\nAM = √1600 = 40 cm.\nAB = 2 × 40 = 80 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 41 cm</text><text x="140" y="67.19" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="83.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A circle has centre O and radius 25 cm. Chord AB = 14 cm, and OM is drawn from O perpendicular to AB. Find the length of OM.', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], answer: '24 cm', explanation: 'AM = 14 ÷ 2 = 7 cm.\nOM² = OA² − AM² = 25² − 7² = 625 − 49 = 576.\nOM = √576 = 24 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 25 cm</text><text x="140" y="67.19" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 14 cm</text><text x="154" y="83.59" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'A circle has centre O and radius 37 cm. M is the midpoint of chord AB, and OM = 12 cm. Find the length of AB, then state the size of angle OMA.', checkMode: 'auto', correctAnswer: '70,90', correctAnswers: ['70,90', '70cm,90°', '70 cm, 90°'], answer: 'AB = 70 cm, ∠OMA = 90°', explanation: 'AM² = OA² − OM² = 37² − 12² = 1369 − 144 = 1225.\nAM = √1225 = 35 cm.\nAB = 2 × 35 = 70 cm.\nSince OM is the perpendicular from the centre to the chord, ∠OMA = 90° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 37 cm</text><text x="140" y="67.19" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="83.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 12 cm</text><text x="140" y="228" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">∠OMA = 90°</text></svg>' },

        // Block 2 — Angle at centre = 2 × angle at circumference (+ reflex)
        { difficulty: 'Easy', question: 'In a circle with centre O, chord AB subtends ∠AOB = 112° at the centre. Point C lies on the major arc, on the same side as the 112° angle. Find ∠ACB.', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56', '56°', '56 degrees'], answer: '56°', explanation: 'The angle at the centre is double the angle at the circumference.\n∠ACB = 112° ÷ 2 = 56° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="212.81" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="67.19" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 159.42,134.11 A 24,24 0 0 1 120.58,134.11" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="212.81" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="67.19" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 146.81,43.37 A 15,15 0 0 1 133.19,43.37" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="212.81" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="194.81" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="67.19" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="75.19" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="154" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">112°</text><text x="140" y="56" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In a circle with centre O, chord PQ subtends ∠PRQ = 44° at point R on the circumference. Find ∠POQ at the centre.', checkMode: 'auto', correctAnswer: '88', correctAnswers: ['88', '88°', '88 degrees'], answer: '88°', explanation: 'The angle at the centre is double the angle at the circumference.\n∠POQ = 2 × 44° = 88° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="212.81" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="67.19" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 159.42,134.11 A 24,24 0 0 1 120.58,134.11" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="212.81" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="67.19" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 146.81,43.37 A 15,15 0 0 1 133.19,43.37" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="212.81" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="194.81" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="67.19" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="75.19" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">R</text><text x="140" y="154" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="140" y="56" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">44°</text></svg>' },
        { difficulty: 'Medium', question: 'In a circle with centre O, chord AB subtends ∠AOB = 140° at the centre, measured on the major-arc side. Point D lies on the minor arc. Find the reflex angle AOB, then find ∠ADB.', checkMode: 'auto', correctAnswer: '220,110', correctAnswers: ['220,110', '220°,110°', '220°, 110°'], answer: 'Reflex ∠AOB = 220°, ∠ADB = 110°', explanation: 'Reflex ∠AOB = 360° − 140° = 220°.\nD is on the minor arc, so use the reflex angle: ∠ADB = 220° ÷ 2 = 110° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="197.85" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 155.43,138.38 A 24,24 0 0 1 124.57,138.38" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="197.85" y1="188.94" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="82.15" y1="188.94" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 145.13,44.1 A 15,15 0 0 1 134.87,44.1" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="197.85" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="179.85" y="192.94" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="90.15" y="192.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="140" y="154" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">140°</text><text x="140" y="56" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In a circle with centre O, chord AB subtends an angle of (6x − 10)° at the centre and ∠ACB = (2x + 15)° at point C on the circumference (same side). Find x, then find ∠ACB.', checkMode: 'auto', correctAnswer: '20,55', correctAnswers: ['20,55', '20,55°', 'x=20,55°'], answer: 'x = 20, ∠ACB = 55°', explanation: 'Angle at centre = 2 × angle at circumference:\n(6x − 10)° = 2(2x + 15)°.\n6x − 10 = 4x + 30.\n2x = 40.\nx = 20.\n∠ACB = 2(20) + 15 = 55° ✓ (check: angle at centre = 6(20)−10=110°, and 2×55°=110° ✓)', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="212.81" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="67.19" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 159.42,134.11 A 24,24 0 0 1 120.58,134.11" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="212.81" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="67.19" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 146.81,43.37 A 15,15 0 0 1 133.19,43.37" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="212.81" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="194.81" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="67.19" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="75.19" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="154" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(6x−10)°</text><text x="140" y="56" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(2x+15)°</text></svg>' },

        // Block 3 — Angles in same segment + angle in a semicircle
        { difficulty: 'Easy', question: 'In a circle, points C and D lie on the same arc relative to chord AB. ∠ACB = 61°. Find ∠ADB.', checkMode: 'auto', correctAnswer: '61', correctAnswers: ['61', '61°', '61 degrees'], answer: '61°', explanation: 'C and D lie in the same segment relative to chord AB, so angles in the same segment are equal.\n∠ADB = ∠ACB = 61° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="192.9" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="192.9" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 163.74,191.33 A 15,15 0 0 1 172.87,189.72" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 82.78,170.95 A 18,18 0 0 1 93.23,174.76" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="170.78" cy="204.57" r="2.5" fill="#0f1f3d"/><text x="178.78" y="198.57" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="64.15" y="178.94" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="170.78" y="228.57" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">61°</text><text x="86.15" y="210.94" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'AB is a diameter of a circle and P is a point on the circumference. ∠PAB = 42°. Find ∠APB, then find ∠PBA.', checkMode: 'auto', correctAnswer: '90,48', correctAnswers: ['90,48', '90°,48°', '90°, 48°'], answer: '∠APB = 90°, ∠PBA = 48°', explanation: 'Since AB is a diameter, ∠APB = 90° (angle in a semicircle).\nIn triangle APB: 42° + 90° + ∠PBA = 180°.\n∠PBA = 180° − 90° − 42° = 48° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 204.18,71.39 L 207.19,80.93 L 216.73,77.92" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="32" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="213.72" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="221.72" y="58.379999999999995" font-size="13" fill="#0f1f3d" font-weight="700">P</text><path d="M 63.35,115.79 A 14,14 0 0 1 64,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="76" y="112" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">42°</text><text x="207.72" y="92.38" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Points A, B, C and D lie on a circle, with C and D on the same arc relative to chord AB. ∠ACB = (4x − 6)° and ∠ADB = (2x + 18)°. Find x, then find ∠ACB.', checkMode: 'auto', correctAnswer: '12,42', correctAnswers: ['12,42', '12,42°', 'x=12,42°'], answer: 'x = 12, ∠ACB = 42°', explanation: 'Angles in the same segment are equal: 4x − 6 = 2x + 18.\n2x = 24.\nx = 12.\n∠ACB = 4(12) − 6 = 42° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="192.9" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="192.9" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 163.74,191.33 A 15,15 0 0 1 172.87,189.72" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 82.78,170.95 A 18,18 0 0 1 93.23,174.76" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="170.78" cy="204.57" r="2.5" fill="#0f1f3d"/><text x="178.78" y="198.57" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="64.15" y="178.94" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="170.78" y="228.57" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(4x−6)°</text><text x="86.15" y="210.94" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(2x+18)°</text></svg>' },
        { difficulty: 'Hard', question: 'AB is a diameter of a circle with AB = 17 cm. P is a point on the circumference with AP = 8 cm. Find ∠APB, then find the length of BP.', checkMode: 'auto', correctAnswer: '90,15', correctAnswers: ['90,15', '90°,15cm', '90°, 15 cm'], answer: '∠APB = 90°, BP = 15 cm', explanation: 'AB is a diameter, so ∠APB = 90° (angle in a semicircle).\nTriangle APB is right-angled at P: BP² = AB² − AP² = 17² − 8² = 289 − 64 = 225.\nBP = √225 = 15 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="213.3" y2="93.32" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="213.3" y2="93.32" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 203.43,94.93 L 208.74,103.41 L 218.61,101.8" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="32" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="213.3" cy="93.32" r="2.5" fill="#0f1f3d"/><text x="221.3" y="83.32" font-size="13" fill="#0f1f3d" font-weight="700">P</text><text x="109.65" y="102.66" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">AP = 8 cm</text><text x="140" y="140" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 17 cm</text><text x="247.65" y="100.66" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Block 4 — Cyclic quadrilateral: opposite angles / exterior angle
        { difficulty: 'Easy', question: 'In cyclic quadrilateral ABCD, ∠A = 97°. Find ∠C.', checkMode: 'auto', correctAnswer: '83', correctAnswers: ['83', '83°', '83 degrees'], answer: '83°', explanation: 'Opposite angles of a cyclic quadrilateral are supplementary.\n∠C = 180° − 97° = 83° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="197.85" y2="51.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="197.85" y1="51.06" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="89.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="76.15" y="206.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="197.85" cy="51.06" r="2.5" fill="#0f1f3d"/><text x="201.85" y="39.06" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="81.74" y="98.8" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">97°</text><text x="198.26" y="141.2" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In cyclic quadrilateral ABCD, ∠B = 64°. Find ∠D.', checkMode: 'auto', correctAnswer: '116', correctAnswers: ['116', '116°', '116 degrees'], answer: '116°', explanation: 'Opposite angles of a cyclic quadrilateral are supplementary.\n∠D = 180° − 64° = 116° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="197.85" y2="51.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="197.85" y1="51.06" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="89.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="76.15" y="206.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="197.85" cy="51.06" r="2.5" fill="#0f1f3d"/><text x="201.85" y="39.06" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="100.15" y="167.49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">64°</text><text x="179.85" y="72.51" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'JKLM is a cyclic quadrilateral with ∠JKL = 109°. Side LM is extended beyond M to a point T, forming exterior angle ∠JMT. Find ∠JMT, and name the theorem used.', checkMode: 'auto', correctAnswer: '109', correctAnswers: ['109', '109°', '109 degrees'], answer: '109°', explanation: 'The exterior angle of a cyclic quadrilateral equals the interior opposite angle.\n∠JMT = ∠JKL = 109° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="62.06" y1="165" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170.78" y1="204.57" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="208.94" y1="62.15" x2="71.06" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.06" y1="62.15" x2="26.06" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="26.06" y1="62.15" x2="62.06" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="62.06" cy="165" r="2.5" fill="#0f1f3d"/><text x="54.06" y="185" font-size="13" fill="#0f1f3d" font-weight="700">J</text><circle cx="170.78" cy="204.57" r="2.5" fill="#0f1f3d"/><text x="164.78" y="192.57" font-size="13" fill="#0f1f3d" font-weight="700">K</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="56.15" font-size="13" fill="#0f1f3d" font-weight="700">L</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="63.06" y="50.15" font-size="13" fill="#0f1f3d" font-weight="700">M</text><circle cx="26.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="16.06" y="50.15" font-size="13" fill="#0f1f3d" font-weight="700">T</text><text x="161.2" y="178.26" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">109°</text><text x="54.85" y="77.02" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In cyclic quadrilateral ABCD, ∠A = (4x − 20)° and ∠C = (2x + 50)°. Find x, then find ∠A and ∠C.', checkMode: 'auto', correctAnswer: '25,80,100', correctAnswers: ['25,80,100', '25,80°,100°', 'x=25,80°,100°'], answer: 'x = 25, ∠A = 80°, ∠C = 100°', explanation: 'Opposite angles are supplementary: (4x − 20) + (2x + 50) = 180.\n6x + 30 = 180.\nx = 25.\n∠A = 4(25) − 20 = 80°, ∠C = 2(25) + 50 = 100°. Check: 80° + 100° = 180° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="197.85" y2="51.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="197.85" y1="51.06" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="89.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="76.15" y="206.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="197.85" cy="51.06" r="2.5" fill="#0f1f3d"/><text x="201.85" y="39.06" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="81.74" y="98.8" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(4x−20)°</text><text x="198.26" y="141.2" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(2x+50)°</text></svg>' },

        // Block 5 — Tangents: equal tangents / tangent-chord (alternate segment)
        { difficulty: 'Easy', question: 'Tangents PA and PB are drawn from external point P to a circle. If PA = 19 cm, find PB.', checkMode: 'auto', correctAnswer: '19', correctAnswers: ['19', '19cm', '19 cm'], answer: '19 cm', explanation: 'Tangent segments from an external point are equal.\nPB = PA = 19 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="20" x2="71.06" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="20" x2="208.94" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><path d="M 78.74,57.46 L 85.63,63.25 L 77.95,67.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><path d="M 201.26,57.46 L 194.37,63.25 L 202.05,67.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="20" r="2.5" fill="#0f1f3d"/><text x="134" y="10" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="51.06" y="66.15" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="72.15" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="85.53" y="39.08" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">PA = 19 cm</text><text x="194.47" y="41.08" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'A tangent at point T makes an angle of 71° with chord TC. Point B lies in the alternate segment. Find ∠TBC, and name the theorem used.', checkMode: 'auto', correctAnswer: '71', correctAnswers: ['71', '71°', '71 degrees'], answer: '71°', explanation: 'By the alternate segment theorem (tangent-chord theorem), the inscribed angle in the alternate segment equals the tangent-chord angle.\n∠TBC = 71° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="70" y1="210" x2="210" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="210" x2="55.43" y2="89.22" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="210" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 118,210 A 22,22 0 0 1 127.38,191.98" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 215.97,101.51 A 15,15 0 0 1 209.57,89.22" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="146" y="226" font-size="13" fill="#0f1f3d" font-weight="700">T</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="224.57" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="234.57" y="83.22" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="110" y="200" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">71°</text><text x="230.57" y="71.22" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Tangents PA and PB are drawn from external point P to a circle, with ∠APB = 38°. Since PA = PB, triangle PAB is isosceles. Find ∠PAB.', checkMode: 'auto', correctAnswer: '71', correctAnswers: ['71', '71°', '71 degrees'], answer: '71°', explanation: 'Since PA = PB (equal tangents from an external point), triangle PAB is isosceles, so ∠PAB = ∠PBA.\n∠PAB = (180° − 38°) ÷ 2 = 142° ÷ 2 = 71° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="20" x2="71.06" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="20" x2="208.94" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="71.06" y1="62.15" x2="208.94" y2="62.15" stroke="#ea580c" stroke-width="2.5"/><path d="M 124.64,29.39 A 18,18 0 0 0 155.36,29.39" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 83.86,54.33 A 15,15 0 0 1 86.06,62.15" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="20" r="2.5" fill="#0f1f3d"/><text x="134" y="10" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="51.06" y="68.15" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="72.15" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="140" y="54" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">38°</text><text x="96.09" y="55.11" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Tangents PA and PB are drawn from external point P to a circle, touching it at A and B. ∠APB = 64°. C is a point on the major arc AB. Find ∠PAB, then use the alternate segment theorem to find ∠ACB.', checkMode: 'auto', correctAnswer: '58,58', correctAnswers: ['58,58', '58°,58°', '58°, 58°'], answer: '∠PAB = 58°, ∠ACB = 58°', explanation: 'Since PA = PB, triangle PAB is isosceles: ∠PAB = (180° − 64°) ÷ 2 = 58°.\n∠PAB is the tangent-chord angle at A for chord AB. By the alternate segment theorem, ∠ACB = ∠PAB = 58° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="15" x2="66.28" y2="68.38" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="15" x2="213.72" y2="68.38" stroke="#16a34a" stroke-width="2.5"/><line x1="66.28" y1="68.38" x2="213.72" y2="68.38" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="66.28" y1="68.38" x2="163.29" y2="206.93" stroke="#0f1f3d" stroke-width="2.5"/><line x1="213.72" y1="68.38" x2="163.29" y2="206.93" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 127.04,24.38 A 16,16 0 0 0 152.96,24.38" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 155.26,195.46 A 14,14 0 0 1 168.08,193.77" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="15" r="2.5" fill="#0f1f3d"/><text x="134" y="7" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="66.28" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="46.28" y="74.38" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="213.72" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="223.72" y="76.38" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="163.29" cy="206.93" r="2.5" fill="#0f1f3d"/><text x="157.29" y="226.93" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="45" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">64°</text><text x="163.29" y="192.93" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Block 6 — Rider proof (CAPS problem-solving cognitive level)
        { difficulty: 'Hard', question: 'A circle has centre O and radius 9 cm. PA and PB are tangents from external point P, touching the circle at A and B, with PA = 12 cm. Prove that OP = 15 cm.', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], answer: '15 cm', explanation: `${gr('PB = PA = 12 cm')} (equal tangents from an external point). Since ${bl('OA ⊥ PA')} (tangent ⊥ radius), △OAP is right-angled at A, so ${re('OP² = OA² + AP² = 9² + 12² = 225')}, giving ${re('OP = 15 cm')}.` + proofTable([
          ['OA ⊥ PA', 'Tangent is perpendicular to the radius at the point of contact'],
          ['△OAP is right-angled at A', 'From OA ⊥ PA above'],
          ['OP² = OA² + AP²', 'Theorem of Pythagoras in right-angled △OAP'],
          ['OP² = 9² + 12² = 81 + 144 = 225', 'Substituting OA = 9 cm (radius) and AP = 12 cm (given)'],
          ['∴ OP = √225 = 15 cm', 'Taking the square root'],
        ]), diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="20" x2="71.06" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="20" x2="208.94" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="120" x2="71.06" y2="62.15" stroke="#2563eb" stroke-width="2"/><line x1="140" y1="120" x2="140" y2="20" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><path d="M 78.74,57.46 L 85.63,63.25 L 77.95,67.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="20" r="2.5" fill="#0f1f3d"/><text x="134" y="10" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="51.06" y="66.15" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="72.15" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="85.53" y="39.08" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">PA = 12 cm</text><text x="90" y="95" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 9 cm</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered the Grade 12 circle theorems — perpendicular bisecting a chord, angle at the centre, angles in the same segment, cyclic quadrilaterals, and tangent theorems.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the cyclic quadrilateral or tangent-chord theorem, and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on each circle theorem, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — COMBINED RIDERS: CIRCLES AND SIMILARITY (4 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4 — Combined Riders',
      questions: [
        {
          difficulty: 'Hard',
          question: 'PT is a tangent to a circle at T. PAB is a secant from external point P, cutting the circle at A (nearer P) and B (farther from P). PA = 4 cm and AB = 12 cm. Prove that PT² = PA · PB, and hence find the length of PT.',
          answer: '8 cm',
          checkMode: 'auto',
          correctAnswer: '8',
          correctAnswers: ['8', '8cm', '8 cm'],
          explanation: `Join TA and TB. In ${bl('△PTA')} and ${bl('△PBT')}, ${bl('∠P')} is common, and ${re('∠PTA = ∠PBT')} (tangent-chord angle equals the inscribed angle in the alternate segment), so ${gr('△PTA ||| △PBT')} (AA). Hence ${or('PT² = PA · PB')}.` + proofTable([
            ['∠P is common to △PTA and △PBT', 'Common angle'],
            ['∠PTA = ∠PBT', 'Tangent-chord angle equals the inscribed angle in the alternate segment'],
            ['∴ △PTA ||| △PBT', 'Two pairs of angles equal (AA)'],
            ['PT/PB = PA/PT, so PT² = PA · PB', 'Corresponding sides of similar triangles in proportion'],
            ['PB = PA + AB = 4 + 12 = 16 cm', 'Given PA = 4 cm, AB = 12 cm'],
            ['PT² = 4 × 16 = 64', 'Substituting PA = 4 cm and PB = 16 cm'],
            ['∴ PT = 8 cm', 'Taking the square root'],
          ]),
          diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="210" stroke="#2563eb" stroke-width="2"/><line x1="140" y1="210" x2="240" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="240" y1="210" x2="73.1" y2="59.79" stroke="#ea580c" stroke-width="2"/><path d="M 140,201 L 149,201 L 149,210" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="124" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="start">O</text><circle cx="140" cy="210" r="3" fill="#0f1f3d"/><text x="136" y="228" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">T</text><circle cx="240" cy="210" r="3" fill="#0f1f3d"/><text x="246" y="226" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">P</text><circle cx="206.9" cy="180.21" r="3" fill="#0f1f3d"/><text x="220.9" y="182.21" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">A</text><circle cx="73.1" cy="59.79" r="3" fill="#0f1f3d"/><text x="63.1" y="53.79" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">B</text><text x="230" y="150" font-size="10" fill="#ea580c" font-weight="700" text-anchor="middle">PA = 4 cm</text><text x="140" y="110" font-size="10" fill="#ea580c" font-weight="700" text-anchor="middle">AB = 12 cm</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'ABCD is a cyclic quadrilateral. Diagonals AC and BD intersect at E. AE = 6 cm, ED = 3 cm and BE = 8 cm. Prove that AE · EC = BE · ED, and hence find the length of EC.',
          answer: '4 cm',
          checkMode: 'auto',
          correctAnswer: '4',
          correctAnswers: ['4', '4cm', '4 cm'],
          explanation: `${bl('∠AED = ∠BEC')} (vertically opposite angles) and ${re('∠ADE = ∠BCE')} (angles in the same segment, both subtend chord AB), so ${gr('△AED ||| △BEC')} (AA). Hence ${or('AE · EC = BE · ED')}.` + proofTable([
            ['∠AED = ∠BEC', 'Vertically opposite angles'],
            ['∠ADE = ∠BCE', 'Angles in the same segment (subtend chord AB from the same arc)'],
            ['∴ △AED ||| △BEC', 'Two pairs of angles equal (AA)'],
            ['AE/BE = ED/EC, so AE · EC = BE · ED', 'Corresponding sides of similar triangles in proportion'],
            ['6 × EC = 8 × 3 = 24', 'Substituting AE = 6 cm, BE = 8 cm and ED = 3 cm'],
            ['∴ EC = 4 cm', 'Dividing both sides by 6'],
          ]),
          diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="53.07" y1="96.71" x2="213.72" y2="171.62" stroke="#ea580c" stroke-width="2"/><line x1="155.63" y1="31.37" x2="66.28" y2="171.62" stroke="#2563eb" stroke-width="2"/><line x1="53.07" y1="96.71" x2="155.63" y2="31.37" stroke="#0f1f3d" stroke-width="1.6"/><line x1="155.63" y1="31.37" x2="213.72" y2="171.62" stroke="#0f1f3d" stroke-width="1.6"/><line x1="213.72" y1="171.62" x2="66.28" y2="171.62" stroke="#0f1f3d" stroke-width="1.6"/><line x1="66.28" y1="171.62" x2="53.07" y2="96.71" stroke="#0f1f3d" stroke-width="1.6"/><circle cx="53.07" cy="96.71" r="3" fill="#0f1f3d"/><text x="39.07" y="98.71" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">A</text><circle cx="155.63" cy="31.37" r="3" fill="#0f1f3d"/><text x="157.63" y="21.37" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">B</text><circle cx="213.72" cy="171.62" r="3" fill="#0f1f3d"/><text x="227.72" y="175.62" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">C</text><circle cx="66.28" cy="171.62" r="3" fill="#0f1f3d"/><text x="52.28" y="175.62" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">D</text><circle cx="100.05" cy="118.62" r="2.2" fill="#16a34a"/><text x="96.05" y="132.62" font-size="12" fill="#16a34a" font-weight="700" text-anchor="end">E</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'AB is a diameter of a circle with centre O, and C is a point on the circle. CD ⊥ AB, with D on AB. AD = 2 cm and DB = 8 cm. Prove that CD² = AD · DB, and hence find the length of CD.',
          answer: '4 cm',
          checkMode: 'auto',
          correctAnswer: '4',
          correctAnswers: ['4', '4cm', '4 cm'],
          explanation: `${re('∠ACB = 90°')} (angle in a semicircle), so ${gr('△ACD ||| △ABC')} and ${gr('△CBD ||| △ABC')} (AA, using the right angle at D and the common angles at A and B respectively) — hence ${gr('△ACD ||| △CBD')} too. This gives ${or('CD² = AD · DB')}.` + proofTable([
            ['∠ACB = 90°', 'Angle in a semicircle (AB is a diameter)'],
            ['△ACD ||| △ABC and △CBD ||| △ABC', 'AA: right angle at D (CD ⊥ AB) plus a common angle at A (or B) in each case'],
            ['∴ △ACD ||| △CBD', 'Both are similar to △ABC, hence similar to each other'],
            ['AD/CD = CD/DB, so CD² = AD · DB', 'Corresponding sides of similar triangles in proportion'],
            ['CD² = 2 × 8 = 16', 'Substituting AD = 2 cm and DB = 8 cm'],
            ['∴ CD = 4 cm', 'Taking the square root'],
          ]),
          diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#2563eb" stroke-width="2"/><line x1="50" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="1.8"/><line x1="213.72" y1="68.38" x2="230" y2="120" stroke="#0f1f3d" stroke-width="1.8"/><line x1="213.72" y1="68.38" x2="213.72" y2="120" stroke="#ea580c" stroke-width="2"/><path d="M 213.72,111 L 204.72,111 L 204.72,120" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="3" fill="#0f1f3d"/><text x="46" y="138" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">A</text><circle cx="230" cy="120" r="3" fill="#0f1f3d"/><text x="234" y="138" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">B</text><circle cx="213.72" cy="68.38" r="3" fill="#0f1f3d"/><text x="221.72" y="62.38" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">C</text><circle cx="213.72" cy="120" r="3" fill="#0f1f3d"/><text x="225.72" y="136" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">D</text><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="136" y="138" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">O</text><text x="180" y="138" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">AD = 2 cm</text><text x="224" y="150" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">DB = 8 cm</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'ABCD is a cyclic quadrilateral. Sides AB and DC are produced (extended) to meet at external point E, with A between E and B, and D between E and C. EA = 3 cm, AB = 5 cm and ED = 4 cm. Prove that △EBC ||| △EDA, and hence find the length of EC.',
          answer: '6 cm',
          checkMode: 'auto',
          correctAnswer: '6',
          correctAnswers: ['6', '6cm', '6 cm'],
          explanation: `${bl('∠BEC = ∠DEA')} is common to ${bl('△EBC')} and ${bl('△EDA')}, and ${re('∠EBC = ∠EDA')} (both equal ${re('180° − ∠ADC')}, using the cyclic quadrilateral's opposite angles and the straight lines EAB, EDC), so ${gr('△EBC ||| △EDA')} (AA). Hence ${or('EA · EB = ED · EC')}.` + proofTable([
            ['∠BEC = ∠DEA', 'Common angle (E, A, B are collinear and E, D, C are collinear)'],
            ['∠EBC = ∠ABC', 'E, A, B are collinear (A between E and B), so ray BE = ray BA'],
            ['∠ABC + ∠ADC = 180°', 'Opposite angles of cyclic quadrilateral ABCD are supplementary'],
            ['∠EDA + ∠ADC = 180°', 'E, D, C are collinear (D between E and C), so ∠EDA and ∠ADC are angles on a straight line'],
            ['∴ ∠EBC = ∠ABC = 180° − ∠ADC = ∠EDA', 'Combining the two equations above'],
            ['∴ △EBC ||| △EDA', 'Two pairs of angles equal (AA)'],
            ['EB/ED = EC/EA, so EA · EB = ED · EC', 'Corresponding sides of similar triangles in proportion'],
            ['EB = EA + AB = 3 + 5 = 8 cm', 'Given EA = 3 cm, AB = 5 cm'],
            ['3 × 8 = 4 × EC', 'Substituting EA = 3 cm, EB = 8 cm and ED = 4 cm'],
            ['∴ EC = 6 cm', 'Dividing both sides by 4'],
          ]),
          diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="20" y1="210" x2="146.87" y2="30.26" stroke="#ea580c" stroke-width="2"/><line x1="20" y1="210" x2="229.42" y2="130.22" stroke="#2563eb" stroke-width="2"/><line x1="57.75" y1="156.53" x2="80.05" y2="187.12" stroke="#0f1f3d" stroke-width="1.6"/><line x1="146.87" y1="30.26" x2="229.42" y2="130.22" stroke="#0f1f3d" stroke-width="1.6"/><circle cx="20" cy="210" r="3" fill="#0f1f3d"/><text x="16" y="226" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">E</text><circle cx="57.75" cy="156.53" r="3" fill="#0f1f3d"/><text x="43.75" y="158.53" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">A</text><circle cx="146.87" cy="30.26" r="3" fill="#0f1f3d"/><text x="148.87" y="22.26" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">B</text><circle cx="80.05" cy="187.12" r="3" fill="#0f1f3d"/><text x="76.05" y="203.12" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">D</text><circle cx="229.42" cy="130.22" r="3" fill="#0f1f3d"/><text x="243.42" y="134.22" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">C</text><text x="60" y="220" font-size="10" fill="#ea580c" font-weight="700" text-anchor="middle">EA = 3 cm</text><text x="50" y="135" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">ED = 4 cm</text></svg>',
        },
      ],
      scoreMessages: [
        { minScore: 4, message: 'Outstanding! You have mastered combining circle theorems with similarity and proportionality — exactly the multi-step reasoning Grade 12 Paper 2 riders demand.' },
        { minScore: 3, message: 'Great work! Review whichever rider you missed, paying close attention to which circle theorem supplies the matching angle before you write the similarity statement.' },
        { minScore: 2, message: 'Good effort! Revisit the worked examples above — focus on spotting the circle theorem first, then the shared angle, before writing the proportion.' },
        { minScore: 0, message: 'Keep going — work through the three worked examples again, then retry this set.' },
      ],
    },
  ],
}
