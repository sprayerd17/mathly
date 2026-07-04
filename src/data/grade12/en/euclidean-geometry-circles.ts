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
}
