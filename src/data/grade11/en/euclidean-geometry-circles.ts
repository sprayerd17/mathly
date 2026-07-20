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
// the site's design system (used inside `explanation` strings for formal
// theorem proofs, and inside rider `answer` strings for self-marked riders).
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
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — CIRCLE TERMINOLOGY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'circle-terminology',
      title: 'Circle Terminology',
      icon: '⊙',
      explanation:
        `<p style="margin-bottom:16px;">This is your first formal encounter with ${re('circle geometry')} theorems, so we start by naming every part of a circle you'll need. A ${bl('radius')} joins the centre to any point on the circumference. A ${or('chord')} joins any two points on the circumference, and the longest possible chord (one that passes through the centre) is called a diameter. A ${gr('tangent')} touches the circle at exactly one point and is always perpendicular to the ${bl('radius')} at that point. An arc is a portion of the circumference, and a segment is the region enclosed between a chord and an arc. Refer to the video for a visual overview of all these terms labelled on a single circle.</p>` +

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
        `<p style="color:#374151;font-size:14px;margin:0;">A line segment from the centre O to any point on the circumference. All radii of a circle are equal in length.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Chord and Diameter</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A chord joins any two points on the circumference. A diameter is the longest chord — it passes through the centre and equals two radii.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Tangent</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A line that touches the circle at exactly one point (the point of contact) and never crosses into the circle. It is perpendicular to the radius drawn to that point.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Angle at the Centre</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The angle formed at the centre O by two radii drawn to the endpoints of a chord.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Arc and Segment</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">An arc is a portion of the circumference between two points. A segment is the region between a chord and the arc it cuts off — the minor segment (smaller) or major segment (larger).</p>` +
        `</div>` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Secant</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A line that cuts through a circle, intersecting the circumference at two points — unlike a tangent, which touches at only one point.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why terminology matters</p>` +
        `<p style="margin:0;color:#1e3a8a;">Every circle theorem you learn from here on is stated using these exact words. Getting comfortable with "chord", "subtend" (meaning "to form an angle at"), and "segment" now will make every proof and calculation in this topic far easier to follow.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In a circle with centre O, name the type of line segment that (a) passes through O and joins two points on the circumference, and (b) touches the circle at exactly one point.',
          answer: `(a) ${or('Diameter')}   (b) ${gr('Tangent')}`,
          steps: [
            `(a) A line segment joining two points on the circumference that ALSO passes through the centre is, by definition, the longest possible chord — this is called a ${or('diameter')}.`,
            `(b) A line touching the circle at exactly one point (and not crossing into the circle) is called a ${gr('tangent')}.`,
            `<strong>Answer:</strong> (a) ${or('diameter')}, (b) ${gr('tangent')}. ✓`,
          ],
        },
        {
          question: 'A tangent touches a circle at point T. What is the size of the angle between the tangent and the radius OT?',
          answer: `${gr('90°')}`,
          steps: [
            `By definition, a ${gr('tangent')} is always perpendicular to the ${bl('radius')} drawn to the point of contact.`,
            `Perpendicular means the angle between the two lines is exactly ${gr('90°')}.`,
            `<strong>Answer:</strong> The angle between the tangent and OT is ${gr('90°')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'What is the special name given to a chord that passes through the centre of a circle?',
          answer: 'diameter',
          checkMode: 'auto',
          correctAnswer: 'diameter',
          correctAnswers: ['diameter', 'a diameter'],
          explanation: 'A chord that passes through the centre is the longest possible chord and is called a diameter.',
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
              label: 'b) What do we call a line that cuts through a circle at two points?',
              correctAnswer: 'secant',
              correctAnswers: ['secant', 'a secant'],
              explanation: 'A line intersecting the circle at two points is called a secant.',
            },
            {
              label: 'c) What do we call the region between a chord and the arc it cuts off?',
              correctAnswer: 'segment',
              correctAnswers: ['segment', 'a segment'],
              explanation: 'The region between a chord and its arc is called a segment.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Thabo says a diameter and a chord are two completely different, unrelated things. Is he correct? Explain your answer using the definitions of both terms.',
          answer: 'No, Thabo is not correct. A diameter is actually a special type of chord — specifically, it is the chord that passes through the centre of the circle. Every diameter is a chord, but not every chord is a diameter (only the longest one, passing through the centre, is).',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing a visual overview of all key circle terms labelled on a single circle diagram — centre, radius, diameter, chord, tangent, secant, arc and segment" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THEOREM: PERPENDICULAR FROM THE CENTRE TO A CHORD
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'chord-centre-perpendicularity',
      title: 'Theorem — The Perpendicular From the Centre to a Chord',
      icon: '⊥',
      explanation:
        `<p style="margin-bottom:16px;">This is the first circle theorem you'll prove and apply: the ${or('perpendicular')} drawn from the centre of a circle to a ${or('chord')} always bisects that ${or('chord')} — cutting it into two equal halves. The ${gr('converse')} is also true and equally useful: if a line is drawn from the centre to the ${gr('midpoint')} of a chord, that line must be perpendicular to the chord. Together these two statements let you find missing lengths, and let you prove that a given line passes through the centre of a circle.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('perpendicular from centre')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('half-chord / midpoint')}</span>` +
        `</div>` +

        // ── Two theorems ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The theorem and its converse</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Perpendicular From Centre Bisects the Chord</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">If ${or('OM')} ⊥ chord AB (with O the centre), then ${gr('AM = MB')}. Drop a perpendicular from the centre to any chord, and it always lands exactly on the midpoint.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Line From Centre to Midpoint is Perpendicular (Converse)</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">If M is the midpoint of chord AB (so ${gr('AM = MB')}), then the line OM must be perpendicular to AB. This version is used to prove a line passes through the centre.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Pythagoras connection ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Solving for unknown distances</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin-bottom:8px;color:#374151;">Because ${or('OM')} ⊥ chord AB, triangle OMA is right-angled at M. This means you can apply the theorem of Pythagoras to find any one of the three lengths if you know the other two:</p>` +
        `<p style="text-align:center;font-size:1.1em;font-weight:700;color:#374151;margin-bottom:8px;">${bl('OA')}² = ${or('OM')}² + ${gr('AM')}²</p>` +
        `<p style="margin:0;color:#374151;font-size:14px;">where ${bl('OA')} = ${bl('radius')}, ${or('OM')} = ${or('perpendicular distance from the centre to the chord')}, and ${gr('AM')} = ${gr('half the chord length')}.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategy for calculation questions</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always halve the chord first (${gr('AM = AB ÷ 2')}), then identify which of the three sides of the right-angled triangle (${bl('radius')}, ${or('OM')}, or ${gr('AM')}) is the unknown. Rearrange the Pythagoras equation and solve.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In a circle with centre O and radius 10 cm, a chord AB is 16 cm long. Find the perpendicular distance from O to AB.',
          answer: `${or('OM')} = ${or('6 cm')}`,
          steps: [
            `Draw ${or('OM')} ⊥ AB. By the theorem, this perpendicular bisects the chord, so ${gr('AM = 16 ÷ 2 = 8 cm')}.`,
            `In right-angled triangle OMA: ${bl('OA')}² = ${or('OM')}² + ${gr('AM')}² (Pythagoras).`,
            `${or('OM')}² = ${bl('OA')}² − ${gr('AM')}² = ${bl('10')}² − ${gr('8')}² = ${bl('100')} − ${gr('64')} = 36.`,
            `${or('OM')} = √36 = <strong>${or('6 cm')}</strong>. ✓`,
          ],
        },
        {
          question: 'A chord CD in a circle of radius 25 cm is at a perpendicular distance of 24 cm from the centre O. Find the length of CD.',
          answer: `${gr('CD')} = ${gr('14 cm')}`,
          steps: [
            `Let M be the point where the perpendicular from O meets CD, so ${or('OM')} = 24 cm and ${bl('OC')} = 25 cm (the radius).`,
            `In right-angled triangle OMC: ${gr('CM')}² = ${bl('OC')}² − ${or('OM')}² = ${bl('25')}² − ${or('24')}² = ${bl('625')} − ${or('576')} = 49.`,
            `${gr('CM')} = √49 = 7 cm. Since M bisects the chord, ${gr('CD = 2 × CM = 2 × 7 = 14 cm')}.`,
            `<strong>Answer:</strong> ${gr('CD')} = ${gr('14 cm')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'In a circle with centre O and radius 13 cm, a chord AB is 24 cm long. Find the perpendicular distance from O to AB.',
          answer: '5 cm',
          checkMode: 'auto',
          correctAnswer: '5',
          correctAnswers: ['5', '5cm', '5 cm'],
          explanation: 'AM = 24 ÷ 2 = 12 cm.\nOM² = 13² − 12² = 169 − 144 = 25.\nOM = √25 = 5 cm ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Solve each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) A circle has radius 20 cm and chord PQ = 32 cm. Find the perpendicular distance from the centre to PQ.',
              correctAnswer: '12',
              correctAnswers: ['12', '12cm', '12 cm'],
              explanation: 'PM = 32 ÷ 2 = 16 cm.\nOM² = 20² − 16² = 400 − 256 = 144.\nOM = √144 = 12 cm ✓',
            },
            {
              label: 'b) The perpendicular distance from the centre to a chord is 9 cm and the radius is 15 cm. Find the length of the chord.',
              correctAnswer: '24',
              correctAnswers: ['24', '24cm', '24 cm'],
              explanation: 'AM² = OA² − OM² = 15² − 9² = 225 − 81 = 144.\nAM = 12 cm.\nChord length = 2 × 12 = 24 cm ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Two parallel chords AB and CD lie on opposite sides of the centre O of a circle with radius 17 cm. The perpendicular distance from O to AB is 8 cm and the perpendicular distance from O to CD is 15 cm.\n\na) Find the length of chord AB.\nb) Find the length of chord CD.\nc) Find the total distance between the two chords.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Length of chord AB',
              correctAnswer: '30',
              correctAnswers: ['30', '30cm', '30 cm'],
              explanation: 'AM² = OA² − OM² = 17² − 8² = 289 − 64 = 225.\nAM = 15 cm.\nAB = 2 × 15 = 30 cm ✓',
            },
            {
              label: 'b) Length of chord CD',
              correctAnswer: '16',
              correctAnswers: ['16', '16cm', '16 cm'],
              explanation: 'CM² = OC² − OM² = 17² − 15² = 289 − 225 = 64.\nCM = 8 cm.\nCD = 2 × 8 = 16 cm ✓',
            },
            {
              label: 'c) Total distance between the two chords',
              correctAnswer: '23',
              correctAnswers: ['23', '23cm', '23 cm'],
              explanation: 'Since the chords are on opposite sides of the centre, add the two distances: 8 + 15 = 23 cm ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing a chord with the perpendicular from the centre bisecting it — labelling the two equal half-chords and the right-angled triangle used for Pythagoras calculations" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THEOREM: ANGLE AT THE CENTRE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'angle-at-centre',
      title: 'Theorem — The Angle at the Centre is Double the Angle at the Circumference',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">This is the foundation theorem for almost everything that follows in circle geometry, so make sure you know it well: when a ${or('chord')} subtends an ${re('angle at the centre O')} and an angle at a point on the circumference, on the ${bl('same side')} of the chord, the ${re('angle at the centre')} is always exactly double the angle at the circumference. If the point lies on the opposite arc instead, you must use the reflex angle at the centre. Refer to the video for a diagram showing both cases.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('angle at centre')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('angle at circumference')}</span>` +
        `</div>` +

        // ── Theorem statement ─────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:8px;">Angle at Centre = 2 × Angle at Circumference</p>` +
        `<p style="color:#374151;margin-bottom:8px;">When ${or('chord AB')} subtends ${re('∠AOB')} at the centre and ∠APB at a point P on the circumference (same side of the chord as O):</p>` +
        `<p style="text-align:center;font-size:1.1em;font-weight:700;color:#374151;margin:0;">${re('∠AOB')} = 2 × ∠APB</p>` +
        `</div>` +

        // ── Reflex angle note ─────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">When the point is on the minor arc — use the reflex angle</p>` +
        `<p style="margin:0;color:#1e3a8a;">If a point P lies on the <strong>minor arc</strong> (the shorter arc), it sits on the opposite side of the chord from the "ordinary" central angle. In this case, use the <strong>reflex angle</strong> at O (that is, 360° minus the ordinary angle), then halve it to get the angle at the circumference.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In a circle with centre O, chord AB subtends an angle of 96° at the centre. What angle does AB subtend at a point P on the major arc?',
          answer: `∠APB = ${bl('48°')}`,
          steps: [
            `${re('∠AOB')} and ∠APB are subtended by the same ${or('chord AB')}, with P on the same side as O (the major arc).`,
            `By the theorem: ${re('angle at centre')} = 2 × angle at circumference.`,
            `Angle at circumference = ${re('96°')} ÷ 2 = ${bl('48°')}.`,
            `<strong>Answer:</strong> ∠APB = ${bl('48°')}. ✓`,
          ],
        },
        {
          question: 'Chord CD subtends an angle of 130° at the centre O. Find the angle CQD subtended at point Q on the minor arc.',
          answer: `∠CQD = ${bl('115°')}`,
          steps: [
            `Q is on the <strong>minor arc</strong> — the opposite side of chord CD from the 130° angle.`,
            `Use the ${re('reflex angle')} at O: Reflex ∠COD = 360° − ${re('130°')} = ${re('230°')}.`,
            `${bl('Angle at circumference')} = ${re('reflex ∠COD')} ÷ 2 = ${re('230°')} ÷ 2 = ${bl('115°')}.`,
            `<strong>Answer:</strong> ∠CQD = ${bl('115°')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'In a circle with centre O, chord PQ subtends an angle of 78° at the centre. Find the angle subtended by PQ at a point T on the major arc.',
          answer: '39°',
          checkMode: 'auto',
          correctAnswer: '39',
          correctAnswers: ['39', '39°', '39 degrees'],
          explanation: 'The angle at the centre is twice the angle at the circumference.\nAngle at circumference = 78° ÷ 2 = 39° ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Find the unknown angle in each case.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Chord AB subtends 64° at the centre. Find the angle at the circumference on the major arc.',
              correctAnswer: '32',
              correctAnswers: ['32', '32°', '32 degrees'],
              explanation: 'Angle at circumference = 64° ÷ 2 = 32° ✓',
            },
            {
              label: 'b) The angle at the circumference subtended by a chord is 55°. What is the angle at the centre?',
              correctAnswer: '110',
              correctAnswers: ['110', '110°', '110 degrees'],
              explanation: 'Angle at centre = 2 × angle at circumference = 2 × 55° = 110° ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'In a circle with centre O, chord AB subtends an angle of 160° at the centre (measured on the major-arc side). Point P lies on the minor arc.\n\na) Find the reflex angle AOB.\nb) Find angle APB.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Reflex angle AOB',
              correctAnswer: '200',
              correctAnswers: ['200', '200°', '200 degrees'],
              explanation: 'Reflex ∠AOB = 360° − 160° = 200° ✓',
            },
            {
              label: 'b) Angle APB',
              correctAnswer: '100',
              correctAnswers: ['100', '100°', '100 degrees'],
              explanation: 'P is on the minor arc, so use the reflex angle: 200° ÷ 2 = 100° ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing a chord subtending an angle at the centre and an angle at the circumference, demonstrating the angle at centre equals double the angle at circumference, and showing the reflex angle case for a point on the minor arc" />',

      diagramPlaceholder:
        'Diagram showing a circle with centre O, chord AB, the angle AOB at the centre highlighted in red, and angle APB at point P on the circumference highlighted in blue, with a dashed reflex angle shown for a second point on the minor arc',

      diagramSvg:
        '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="206.88" y2="180.22" stroke="#dc2626" stroke-width="2.5"/><line x1="140" y1="120" x2="73.12" y2="180.22" stroke="#dc2626" stroke-width="2.5"/><path d="M 154.86,133.38 A 20,20 0 0 1 125.14,133.38" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="206.88" y1="180.22" x2="73.12" y2="180.22" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="30" x2="206.88" y2="180.22" stroke="#2563eb" stroke-width="2.5"/><line x1="140" y1="30" x2="73.12" y2="180.22" stroke="#2563eb" stroke-width="2.5"/><path d="M 148.14,48.28 A 20,20 0 0 1 131.86,48.28" fill="none" stroke="#2563eb" stroke-width="2"/><line x1="140" y1="210" x2="206.88" y2="180.22" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="140" y1="210" x2="73.12" y2="180.22" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 153.7,203.9 A 15,15 0 0 0 126.3,203.9" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="206.88" cy="180.22" r="2.5" fill="#0f1f3d"/><text x="214" y="182" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="73.12" cy="180.22" r="2.5" fill="#0f1f3d"/><text x="50" y="182" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="146" y="20" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="112" y="222" font-size="12" fill="#6b7280" font-weight="700">Q</text><text x="140" y="149" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">96°</text><text x="140" y="64" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">48°</text><text x="140" y="234" font-size="9" fill="#6b7280" text-anchor="middle" font-style="italic">Q on minor arc → use the reflex angle at O</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — THEOREM: ANGLES IN THE SAME SEGMENT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'angles-in-same-segment',
      title: 'Theorem — Angles in the Same Segment, and Equal Chords',
      icon: '≡',
      explanation:
        `<p style="margin-bottom:16px;">Two related theorems follow directly from the angle-at-centre theorem. (1) ${gr('Angles in the same segment are equal')} — any two angles at the circumference subtended by the same chord, on the same side of that chord, are equal to each other, since both equal half of the same angle at the centre. (2) ${or('Equal chords subtend equal angles')} — both at the centre and at the circumference. This makes sense: chords of the same length must "cut off" arcs of the same size, so they produce identical angles wherever they're measured.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('equal angles in same segment')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('equal chords')}</span>` +
        `</div>` +

        // ── Two theorems ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The two theorems</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Angles in the Same Segment are Equal</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">If C and D both lie on the same arc (same side of chord AB), then ${gr('∠ACB = ∠ADB')}. Both angles equal half of the same angle at the centre.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Equal Chords Subtend Equal Angles</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">If ${or('AB = CD')} (equal chords in the same circle, or in circles of equal radius), then they subtend equal angles at the centre, AND equal angles at the circumference.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Spotting "same segment" in a diagram</p>` +
        `<p style="margin:0;color:#1e3a8a;">Check two things before applying this theorem: the two angles must be subtended by the <strong>same chord</strong>, and their vertices must be on the <strong>same side</strong> of that chord. If a point is on the opposite arc, its angle is different (though still linked to the centre angle).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Points A, B, C and D lie on a circle. ∠ACB = 42° and D lies on the same arc as C (same side of chord AB). Find ∠ADB.',
          answer: `∠ADB = ${gr('42°')}`,
          steps: [
            `Both C and D are on the <strong>same arc</strong> relative to ${or('chord AB')}.`,
            `By the theorem: ${gr('angles in the same segment are equal')}.`,
            `∠ADB = ∠ACB = ${gr('42°')}.`,
            `<strong>Answer:</strong> ∠ADB = ${gr('42°')}. ✓`,
          ],
        },
        {
          question: 'In a circle, chord PQ = chord RS. If PQ subtends an angle of 70° at the centre, what angle does RS subtend at the centre?',
          answer: `${or('70°')}`,
          steps: [
            `${or('PQ')} and ${or('RS')} are ${or('equal chords')} in the same circle.`,
            `By the theorem, equal chords subtend equal angles at the centre.`,
            `Since PQ subtends 70° at the centre, ${or('RS')} must also subtend ${or('70°')} at the centre.`,
            `<strong>Answer:</strong> RS subtends ${or('70°')} at the centre. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: '∠AEB = 58° and F lies on the same arc as E (same side of chord AB). Find ∠AFB.',
          answer: '58°',
          checkMode: 'auto',
          correctAnswer: '58',
          correctAnswers: ['58', '58°', '58 degrees'],
          explanation: 'Angles in the same segment are equal: ∠AFB = ∠AEB = 58° ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Find the unknown value in each case.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) ∠PRQ = 33° and S lies on the same arc as R. Find ∠PSQ.',
              correctAnswer: '33',
              correctAnswers: ['33', '33°', '33 degrees'],
              explanation: 'Angles in the same segment are equal: ∠PSQ = ∠PRQ = 33° ✓',
            },
            {
              label: 'b) Chord MN = chord XY in the same circle. MN subtends 84° at the circumference. What angle does XY subtend at the circumference?',
              correctAnswer: '84',
              correctAnswers: ['84', '84°', '84 degrees'],
              explanation: 'Equal chords subtend equal angles at the circumference: XY also subtends 84° ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'In a circle with centre O, points A, B, C and D lie on the circumference with C and D on the same arc relative to chord AB. ∠ACB = 3x − 10° and ∠ADB = x + 30°.\n\na) Find x.\nb) Find the size of ∠ACB.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find x',
              correctAnswer: '20',
              correctAnswers: ['20', '20°', '20 degrees'],
              explanation: 'Angles in the same segment are equal: 3x − 10° = x + 30°.\n2x = 40°.\nx = 20° ✓',
            },
            {
              label: 'b) Size of ∠ACB',
              correctAnswer: '50',
              correctAnswers: ['50', '50°', '50 degrees'],
              explanation: '∠ACB = 3(20°) − 10° = 60° − 10° = 50° ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing two angles subtended by the same chord on the same side, demonstrating that angles in the same segment are equal, then showing two equal chords producing equal angles at the centre and circumference" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — THEOREM: ANGLE IN A SEMICIRCLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'angle-in-semicircle',
      title: 'Theorem — The Angle in a Semicircle',
      icon: '◐',
      explanation:
        `<p style="margin-bottom:16px;">This is a special case of the angle-at-centre theorem, and one of the most frequently used circle theorems in exams: if AB is a ${or('diameter')} of a circle, then the angle subtended by AB at ${bl('any')} point P on the circumference is always exactly ${bl('90°')}. This works because a diameter subtends a straight angle (180°) at the centre, and the angle at the circumference is always half of that. The ${gr('converse')} is equally important: if a chord subtends a 90° angle at a point on the circle, that chord must be a diameter.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('diameter')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('90° angle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('converse')}</span>` +
        `</div>` +

        // ── Two theorems ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The theorem and its converse</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Angle in a Semicircle = 90°</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">If ${or('AB')} is a diameter and P is any point on the circumference (not A or B), then ${bl('∠APB = 90°')} — always, no matter where P is positioned.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Chord Subtending 90° is a Diameter (Converse)</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">If a chord AB subtends ${bl('∠APB = 90°')} at a point P on the circle, then ${or('AB')} must be a diameter of the circle.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">A powerful shortcut in triangle problems</p>` +
        `<p style="margin:0;color:#1e3a8a;">Whenever you spot a diameter in a circle diagram, immediately mark the angle at any third point on the circle as ${bl('90°')} — this instantly gives you a right-angled triangle, which often unlocks the rest of the problem using Pythagoras or basic angle sums.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'AB is a diameter of a circle and P is a point on the circumference. ∠PAB = 34°. Find ∠APB and ∠PBA.',
          answer: `∠APB = ${bl('90°')}, ∠PBA = ${gr('56°')}`,
          steps: [
            `Since ${or('AB')} is a diameter, ${bl('∠APB = 90°')} (angle in a semicircle).`,
            `In triangle APB, the angles sum to 180°: ∠PAB + ∠APB + ∠PBA = 180°.`,
            `${gr('34° + 90° + ∠PBA = 180°')}, so ${gr('∠PBA = 180° − 90° − 34° = 56°')}.`,
            `<strong>Answer:</strong> ∠APB = ${bl('90°')}, ∠PBA = ${gr('56°')}. ✓`,
          ],
        },
        {
          question: 'In a circle, chord XY subtends a 90° angle at point Z on the circumference. What can you conclude about XY?',
          answer: `${or('XY is a diameter of the circle')}`,
          steps: [
            `We are told ${bl('∠XZY = 90°')}, where Z is a point on the circle.`,
            `By the ${gr('converse')} of the angle-in-a-semicircle theorem: if a chord subtends 90° at a point on the circle, that chord is a diameter.`,
            `<strong>Answer:</strong> ${or('XY must be a diameter')} of the circle. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'AB is a diameter of a circle and P is a point on the circle. ∠PAB = 41°. Find ∠PBA.',
          answer: '49°',
          checkMode: 'auto',
          correctAnswer: '49',
          correctAnswers: ['49', '49°', '49 degrees'],
          explanation: 'Since AB is a diameter, ∠APB = 90° (angle in a semicircle).\nIn triangle APB: 41° + 90° + ∠PBA = 180°.\n∠PBA = 180° − 90° − 41° = 49° ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A circle has diameter AB = 26 cm. P is a point on the circumference with AP = 10 cm. Answer the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the size of ∠APB.',
              correctAnswer: '90',
              correctAnswers: ['90', '90°', '90 degrees'],
              explanation: 'AB is a diameter, so the angle in a semicircle: ∠APB = 90° ✓',
            },
            {
              label: 'b) Find the length of BP.',
              correctAnswer: '24',
              correctAnswers: ['24', '24cm', '24 cm'],
              explanation: 'Triangle APB is right-angled at P (Pythagoras): BP² = AB² − AP² = 26² − 10² = 676 − 100 = 576.\nBP = √576 = 24 cm ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'In a circle with centre O, AB is a diameter. C and D are points on the circumference on the same side of AB, with ∠CAB = 28° and ∠DBA = 35°.\n\na) Find ∠ACB.\nb) Find ∠ADB.\nc) Find ∠ABC.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find ∠ACB',
              correctAnswer: '90',
              correctAnswers: ['90', '90°', '90 degrees'],
              explanation: 'AB is a diameter, so ∠ACB = 90° (angle in a semicircle) ✓',
            },
            {
              label: 'b) Find ∠ADB',
              correctAnswer: '90',
              correctAnswers: ['90', '90°', '90 degrees'],
              explanation: 'AB is a diameter, so ∠ADB = 90° too — this holds for any point on the circle ✓',
            },
            {
              label: 'c) Find ∠ABC',
              correctAnswer: '62',
              correctAnswers: ['62', '62°', '62 degrees'],
              explanation: 'In triangle ABC: ∠CAB = 28°, ∠ACB = 90°.\n∠ABC = 180° − 90° − 28° = 62° ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing a diameter with a third point on the circle forming a right angle, demonstrating the angle in a semicircle is always 90 degrees, then showing the converse where a 90 degree angle proves a chord is a diameter" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — THEOREMS: CYCLIC QUADRILATERALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'cyclic-quadrilaterals',
      title: 'Theorem — Cyclic Quadrilaterals',
      icon: '▱',
      explanation:
        `<p style="margin-bottom:16px;">A ${bl('cyclic quadrilateral')} is a quadrilateral whose four vertices ${bl('all')} lie on the circumference of the same circle. Two theorems govern the angles inside one: (1) ${bl('opposite angles')} of a cyclic quadrilateral are always ${bl('supplementary')} (they add up to 180°), and (2) the ${gr('exterior angle')} of a cyclic quadrilateral (formed by extending one side) always equals the ${or('interior opposite angle')}. Both theorems have equally important converses, which let you prove that four points lie on a common circle (that they are ${bl('concyclic')}) without ever drawing that circle. This is one of the two most frequently examined circle riders in Grade 11 CAPS Paper 2, so make sure you can reproduce the proof below, not just quote the result.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('opposite angle pair 1')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('opposite angle pair 2')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('interior opposite angle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('exterior angle')}</span>` +
        `</div>` +

        // ── Two theorems + converses ───────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The theorems and their converses</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Opposite Angles of a Cyclic Quadrilateral are Supplementary</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">In cyclic quadrilateral ABCD, ${bl('∠A + ∠C = 180°')} and ${re('∠B + ∠D = 180°')}. Each pair of opposite angles sums to 180°, because each is half of one of the two arcs that together make up the full 360° of the circle.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Converse — Supplementary Opposite Angles ⟹ Cyclic</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">If a quadrilateral has one pair of opposite angles that add up to 180°, then that quadrilateral is cyclic — its four vertices must lie on a single circle. Use this to prove points are concyclic.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">3</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Exterior Angle = Interior Opposite Angle</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">If a side of cyclic quadrilateral ABCD is produced (extended) beyond a vertex, the ${gr('exterior angle')} formed there equals the ${or('interior opposite angle')}. This is a direct corollary of Theorem 1, proved below.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">4</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Converse — Exterior Angle = Interior Opposite ⟹ Cyclic</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">If the exterior angle of a quadrilateral equals the interior opposite angle, the quadrilateral is cyclic. This is simply an alternative way of stating the converse of Theorem 1.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Formal proof of Theorem 1 ───────────────────────────────────────
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;">Proof — Opposite Angles are Supplementary</p>` +
        `<p style="margin:0 0 6px 0;color:#374151;font-size:14px;"><strong>Given:</strong> Cyclic quadrilateral ABCD in a circle with centre O.</p>` +
        `<p style="margin:0 0 6px 0;color:#374151;font-size:14px;"><strong>Required to prove:</strong> ∠BAD + ∠BCD = 180°.</p>` +
        `<p style="margin:0 0 10px 0;color:#374151;font-size:14px;"><strong>Construction:</strong> Join OB and OD.</p>` +
        proofTable([
          ['Reflex ∠BOD = 2∠BAD', '∠ at centre = 2 × ∠ at circumference (standing on arc BCD)'],
          ['∠BOD = 2∠BCD', '∠ at centre = 2 × ∠ at circumference (standing on arc BAD)'],
          ['Reflex ∠BOD + ∠BOD = 360°', '∠s round a point'],
          ['∴ 2∠BAD + 2∠BCD = 360°', 'substitution from the two lines above'],
          ['∴ ∠BAD + ∠BCD = 180°, i.e. ∠A + ∠C = 180°', 'dividing both sides by 2'],
        ]) +
        `<p style="margin:10px 0 0 0;color:#374151;font-size:14px;">Since the angles of any quadrilateral sum to 360°, ${bl('∠B + ∠D = 360° − (∠A + ∠C) = 360° − 180° = 180°')} follows immediately — so both pairs of opposite angles are supplementary.</p>` +
        `</div>` +

        // ── Corollary proof ──────────────────────────────────────────────────
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;">Proof of the Corollary — Exterior Angle = Interior Opposite Angle</p>` +
        `<p style="margin:0 0 6px 0;color:#374151;font-size:14px;"><strong>Given:</strong> Cyclic quadrilateral ABCD with side AB produced to a point E.</p>` +
        `<p style="margin:0 0 10px 0;color:#374151;font-size:14px;"><strong>Required to prove:</strong> ∠CBE = ∠ADC.</p>` +
        proofTable([
          ['∠ABC + ∠CBE = 180°', '∠s on a straight line AE'],
          ['∠ABC + ∠ADC = 180°', 'opp ∠s of cyclic quad ABCD'],
          ['∴ ∠CBE = ∠ADC', 'both equal 180° − ∠ABC'],
        ]) +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Proving points are concyclic</p>` +
        `<p style="margin:0;color:#1e3a8a;">To prove four points lie on one circle, show <strong>either</strong> that one pair of opposite angles of the quadrilateral they form is supplementary, <strong>or</strong> that an exterior angle equals the interior opposite angle. Either converse is sufficient — you only need to prove one.</p>` +
        `</div>`,

      workedExamples: [
        {
          question:
            'In cyclic quadrilateral ABCD (shown), ∠ABC = 92° and ∠ADC = x. Find x.<br>' +
            '<div style="margin:10px 0"><svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="170.78" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170.78" y1="35.43" x2="226.51" y2="144.81" stroke="#0f1f3d" stroke-width="2.5"/><line x1="226.51" y1="144.81" x2="95" y2="197.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="95" y1="197.94" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 154.47,43.04 A 18,18 0 0 0 178.95,51.47" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 111.69,191.20 A 18,18 0 0 0 88.84,181.03" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="83.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="170.78" cy="35.43" r="2.5" fill="#0f1f3d"/><text x="176.78" y="25.43" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="226.51" cy="144.81" r="2.5" fill="#0f1f3d"/><text x="234.51" y="150.81" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="95" cy="197.94" r="2.5" fill="#0f1f3d"/><text x="85" y="216.94" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="159.15" y="71.39" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">92°</text><text x="109.37" y="171.14" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg></div>',
          answer: `x = ${or('88°')}`,
          steps: [
            `${bl('Opposite angles')} of a cyclic quadrilateral are supplementary: ${bl('∠ABC + ∠ADC = 180°')}.`,
            `${bl('92°')} + x = 180°.`,
            `x = 180° − 92° = ${or('88°')}.`,
            `<strong>Answer:</strong> x = ${or('88°')}. ✓`,
          ],
        },
        {
          question: 'Cyclic quadrilateral WXYZ has ∠WZY = 118°. Side ZW is produced beyond W to a point V. Find the exterior angle ∠VWX.',
          answer: `∠VWX = ${gr('118°')}`,
          steps: [
            `The ${gr('exterior angle')} at W (that is, ∠VWX) equals the ${or('interior opposite angle')}, which is ${or('∠WZY')}.`,
            `${or('∠WZY')} = ${or('118°')}.`,
            `Therefore ${gr('∠VWX')} = ${gr('118°')}.`,
            `<strong>Answer:</strong> ∠VWX = ${gr('118°')}. ✓`,
          ],
        },
        {
          question: 'Quadrilateral PQRS has ∠P = 95° and ∠R = 85°. Zanele claims PQRS must be a cyclic quadrilateral. Is she correct?',
          answer: 'Yes — by the converse of the theorem',
          steps: [
            `Check whether the given pair of opposite angles is supplementary: ${bl('∠P + ∠R = 95° + 85° = 180°')}.`,
            `Since one pair of opposite angles sums to 180°, the converse applies: a quadrilateral with supplementary opposite angles is cyclic.`,
            `<strong>Answer:</strong> Yes, Zanele is correct — PQRS is a cyclic quadrilateral, because ∠P and ∠R are supplementary. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ABCD is a cyclic quadrilateral with ∠A = 112°. Find ∠C.',
          answer: '68°',
          checkMode: 'auto',
          correctAnswer: '68',
          correctAnswers: ['68', '68°', '68 degrees'],
          explanation: 'Opposite angles of a cyclic quadrilateral are supplementary: ∠A + ∠C = 180°.\n∠C = 180° − 112° = 68° ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Answer each of the following about cyclic quadrilateral EFGH.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) ∠F = 77°. Find ∠H.',
              correctAnswer: '103',
              correctAnswers: ['103', '103°', '103 degrees'],
              explanation: 'Opposite angles of a cyclic quadrilateral are supplementary: ∠H = 180° − 77° = 103° ✓',
            },
            {
              label: 'b) Side FG is produced beyond G. If the interior opposite angle ∠E = 99°, find the exterior angle at G.',
              correctAnswer: '99',
              correctAnswers: ['99', '99°', '99 degrees'],
              explanation: 'Exterior angle of a cyclic quadrilateral = interior opposite angle = 99° ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question:
            'In the diagram, O is the centre of the circle and ABCD is a cyclic quadrilateral. Chord AC subtends ∠AOC = 130° at the centre, on the same side as B. D lies on the minor arc AC. Find the size of ∠ABC and ∠ADC, showing your reasons.<br>' +
            '<div style="margin:10px 0"><svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="58.43" y2="158.03" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="221.57" y2="158.03" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 118.25,130.14 A 24,24 0 0 0 161.75,130.14" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="58.43" y1="158.03" x2="140" y2="30" stroke="#2563eb" stroke-width="2.5"/><line x1="221.57" y1="158.03" x2="140" y2="30" stroke="#2563eb" stroke-width="2.5"/><path d="M 131.94,42.65 A 15,15 0 0 0 148.06,42.65" fill="none" stroke="#2563eb" stroke-width="2"/><line x1="58.43" y1="158.03" x2="140" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="221.57" y1="158.03" x2="140" y2="210" stroke="#16a34a" stroke-width="2.5"/><path d="M 127.35,201.94 A 15,15 0 0 1 152.65,201.94" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="58.43" cy="158.03" r="2.5" fill="#0f1f3d"/><text x="38.43" y="166.03" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="221.57" cy="158.03" r="2.5" fill="#0f1f3d"/><text x="231.57" y="166.03" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="146" y="20" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="146" y="228" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="140" y="160" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">130°</text><text x="140" y="60" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="140" y="180" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">?</text></svg></div>',
          answer:
            `∠ABC = ${bl('65°')}, ∠ADC = ${gr('115°')}.` +
            proofTable([
              ['∠ABC = 130° ÷ 2 = 65°', '∠ at centre = 2 × ∠ at circumference (∠AOC and ∠ABC stand on the same arc — B on the major arc, same side as O)'],
              ['∠ABC + ∠ADC = 180°', 'opp ∠s of cyclic quad ABCD'],
              ['∠ADC = 180° − 65° = 115°', 'substitution'],
            ]),
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing a cyclic quadrilateral ABCD with opposite angle pairs highlighted in blue and red, a side produced to show the exterior angle in green matching the interior opposite angle in orange, and the centre-angle construction used in the formal proof" />',

      diagramSvg:
        '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="170.78" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170.78" y1="35.43" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="95" y2="197.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="95" y1="197.94" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170.78" y1="35.43" x2="207.02" y2="18.53" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="4,3"/><path d="M 71.74,81.61 A 18,18 0 0 1 61.59,106.13" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 154.47,43.04 A 18,18 0 0 0 178.39,51.74" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 187.09,27.82 A 18,18 0 0 1 178.39,51.74" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="2,2"/><path d="M 216.96,134.47 A 18,18 0 0 0 207.66,156.94" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 111.91,191.78 A 18,18 0 0 0 88.84,181.03" fill="none" stroke="#dc2626" stroke-width="2"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="83.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="170.78" cy="35.43" r="2.5" fill="#0f1f3d"/><text x="176.78" y="25.43" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="232.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="95" cy="197.94" r="2.5" fill="#0f1f3d"/><text x="85" y="216.94" font-size="13" fill="#0f1f3d" font-weight="700">D</text><circle cx="207.02" cy="18.53" r="2.5" fill="#0f1f3d"/><text x="212.02" y="14.53" font-size="12" fill="#0f1f3d" font-weight="700">E</text><text x="86.83" y="106.24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">95°</text><text x="159.15" y="71.39" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">90°</text><text x="202.74" y="51.06" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">90°</text><text x="193.15" y="141.77" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">85°</text><text x="109.37" y="171.14" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">90°</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 7 — THEOREM: TANGENT-CHORD (ALTERNATE SEGMENT) THEOREM
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tangent-chord-theorem',
      title: 'Theorem — The Tangent-Chord (Alternate Segment) Theorem',
      icon: '↗',
      explanation:
        `<p style="margin-bottom:16px;">When a ${gr('tangent')} touches a circle at a point T, and a ${or('chord')} is drawn from T, the ${gr('angle between the tangent and the chord')} is called the tangent-chord angle. This theorem — also called the ${gr('alternate segment theorem')} — states that the tangent-chord angle always equals the inscribed angle in the ${gr('alternate segment')} (the segment on the ${bl('other side')} of the chord). This is the second heavily examined circle rider in Grade 11 CAPS Paper 2, alongside the cyclic quadrilateral theorem. A useful corollary also follows: two tangents drawn to a circle from the same external point are always equal in length.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tangent / equal angles')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('chord')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('alternate segment')}</span>` +
        `</div>` +

        // ── Theorem + converse + corollary ───────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The theorem, its converse, and a corollary</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Tangent-Chord (Alternate Segment) Theorem</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">If PT is a tangent at T and TC is a chord, then the ${gr('tangent-chord angle ∠PTC')} equals the inscribed angle ${gr('∠TAC')} in the alternate segment, for any point A on the arc on the other side of TC.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Converse — Equal Angle ⟹ Tangent</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">If a line through a point T on a circle makes an angle with a chord TC equal to the inscribed angle in the alternate segment, then that line is a tangent to the circle at T. Use this to prove a line is a tangent.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">3</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Corollary — Tangents from an External Point are Equal</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">If ${or('PA')} and ${or('PB')} are tangents drawn from the same external point P, touching the circle at A and B, then ${or('PA = PB')}.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Formal proof of the tan-chord theorem ────────────────────────────
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;">Proof — Tangent-Chord Theorem</p>` +
        `<p style="margin:0 0 6px 0;color:#374151;font-size:14px;"><strong>Given:</strong> Circle with centre O; PT is a tangent at T; TC is a chord with tangent-chord angle ${gr('∠PTC = x')}; A is a point on the circle in the alternate segment.</p>` +
        `<p style="margin:0 0 6px 0;color:#374151;font-size:14px;"><strong>Required to prove:</strong> ∠TAC = x.</p>` +
        `<p style="margin:0 0 10px 0;color:#374151;font-size:14px;"><strong>Construction:</strong> Draw diameter TD through T, and join DC.</p>` +
        proofTable([
          ['∠DTP = 90°', 'tan ⊥ diameter at the point of contact'],
          ['∠DTC = 90° − x', '∠DTC = ∠DTP − ∠PTC'],
          ['∠TCD = 90°', '∠ in semi-circle (TD is a diameter)'],
          ['∠TDC = 180° − 90° − (90° − x) = x', '∠ sum of △TDC = 180°'],
          ['∠TAC = ∠TDC = x', '∠s in the same segment (A and D lie on the same arc, both subtend TC)'],
          ['∴ ∠TAC = ∠PTC (both equal x)', 'tangent-chord theorem proved'],
        ]) +
        `</div>` +

        // ── Corollary proof ──────────────────────────────────────────────────
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;">Proof of the Corollary — Equal Tangents from an External Point</p>` +
        `<p style="margin:0 0 6px 0;color:#374151;font-size:14px;"><strong>Given:</strong> PA and PB are tangents from external point P, touching the circle (centre O) at A and B.</p>` +
        `<p style="margin:0 0 10px 0;color:#374151;font-size:14px;"><strong>Required to prove:</strong> PA = PB.</p>` +
        `<p style="margin:0 0 10px 0;color:#374151;font-size:14px;"><strong>Construction:</strong> Join OA, OB and OP.</p>` +
        proofTable([
          ['OA = OB', 'radii of the same circle'],
          ['∠OAP = ∠OBP = 90°', 'tan ⊥ radius'],
          ['OP = OP', 'common side'],
          ['∴ △OAP ≡ △OBP', 'RHS (right angle, hypotenuse, side)'],
          ['∴ PA = PB', 'corresponding sides of congruent triangles'],
        ]) +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Identifying the alternate segment</p>` +
        `<p style="margin:0;color:#78350f;">Draw the chord, note which side of it the tangent-chord angle opens towards, then look at the segment on the <strong>other</strong> side — any inscribed angle standing on the chord from that segment equals your tangent-chord angle.</p>` +
        `</div>`,

      workedExamples: [
        {
          question:
            'A tangent at point T makes an angle of 62.5° with chord TC. Find the angle ∠TAC in the alternate segment (A on the far arc).<br>' +
            '<div style="margin:10px 0"><svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="210" x2="220" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="210" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="3,3"/><path d="M 140,198 L 152,198 L 152,210" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="140" y1="210" x2="213.7" y2="68.3" stroke="#ea580c" stroke-width="2.5"/><line x1="62.06" y1="75" x2="140" y2="210" stroke="#0f1f3d" stroke-width="2"/><line x1="62.06" y1="75" x2="213.7" y2="68.3" stroke="#0f1f3d" stroke-width="2"/><path d="M 160,210 A 20,20 0 0 0 149.23,192.26" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 72.06,92.32 A 20,20 0 0 0 82.04,74.12" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="146" y="226" font-size="13" fill="#0f1f3d" font-weight="700">T</text><circle cx="213.7" cy="68.3" r="2.5" fill="#0f1f3d"/><text x="221.7" y="62.3" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="62.06" cy="75" r="2.5" fill="#0f1f3d"/><text x="42.06" y="69" font-size="13" fill="#0f1f3d" font-weight="700">A</text><text x="169.92" y="196.84" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">62.5°</text><text x="92.74" y="91.82" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">?</text></svg></div>',
          answer: `∠TAC = ${gr('62.5°')}`,
          steps: [
            `The tangent-chord angle at T between the tangent and chord TC is ${gr('62.5°')}.`,
            `By the tangent-chord (alternate segment) theorem, the inscribed angle in the alternate segment equals the tangent-chord angle.`,
            `∠TAC = ${gr('62.5°')}.`,
            `<strong>Answer:</strong> ∠TAC = ${gr('62.5°')}. ✓`,
          ],
        },
        {
          question:
            'A line ℓ touches a circle at point P. Chord PQ is drawn, and the angle between ℓ and PQ is 47°. A point R lies on the circle, in the segment on the opposite side of PQ from where that angle opens, with ∠PRQ = 47°. State, with reason, whether ℓ is a tangent to the circle at P.',
          answer: 'Yes — by the converse of the tangent-chord theorem',
          steps: [
            `The angle between line ℓ and chord PQ (47°) equals the inscribed angle ∠PRQ (47°) in the segment on the other side of PQ.`,
            `By the converse of the tangent-chord theorem, if the angle a line makes with a chord equals the angle in the alternate segment, that line must be a tangent.`,
            `<strong>Answer:</strong> Yes, ℓ is a tangent to the circle at P. ✓`,
          ],
        },
        {
          question: 'Tangents PA and PB are drawn from external point P, with PA = 3x − 2 and PB = x + 8. Find x, then find the length of PA.',
          answer: `x = ${or('5')}, PA = ${or('13')}`,
          steps: [
            `Tangents from the same external point are equal in length: ${or('PA = PB')}.`,
            `${or('3x − 2 = x + 8')}.`,
            `2x = 10, so x = ${or('5')}.`,
            `PA = 3(5) − 2 = 15 − 2 = ${or('13')}.`,
            `<strong>Answer:</strong> x = ${or('5')}, PA = ${or('13')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A tangent-chord angle at point T measures 63°. Find the angle in the alternate segment.',
          answer: '63°',
          checkMode: 'auto',
          correctAnswer: '63',
          correctAnswers: ['63', '63°', '63 degrees'],
          explanation: 'By the tangent-chord theorem, the angle in the alternate segment equals the tangent-chord angle: 63° ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Answer each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Tangents PA and PB are drawn from external point P, with PA = 4x + 1 and PB = 2x + 9. Find PA.',
              correctAnswer: '17',
              correctAnswers: ['17', '17cm', '17 cm'],
              explanation: 'Tangents from the same external point are equal: 4x + 1 = 2x + 9, so 2x = 8, x = 4.\nPA = 4(4) + 1 = 17 ✓',
            },
            {
              label: 'b) The angle between a tangent and a chord at the point of contact is 71°. Find the angle subtended by the chord in the alternate segment.',
              correctAnswer: '71',
              correctAnswers: ['71', '71°', '71 degrees'],
              explanation: 'By the tangent-chord theorem, the angle in the alternate segment equals the tangent-chord angle: 71° ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question:
            'PT is a tangent to a circle at T. TC is a chord, and A is a point on the circle in the alternate segment, with TA and AC drawn to form triangle TAC. The tangent-chord angle at T (between the tangent and chord TC) is 62.5°, and ∠TCA = 60°. Find ∠TAC and ∠ATC, and state whether triangle TAC is isosceles.<br>' +
            '<div style="margin:10px 0"><svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="210" x2="220" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="210" x2="213.7" y2="68.3" stroke="#ea580c" stroke-width="2.5"/><line x1="62.06" y1="75" x2="140" y2="210" stroke="#0f1f3d" stroke-width="2"/><line x1="62.06" y1="75" x2="213.7" y2="68.3" stroke="#0f1f3d" stroke-width="2"/><path d="M 160,210 A 20,20 0 0 0 149.23,192.26" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 129,190.95 A 22,22 0 0 1 150.16,190.48" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 204.47,86.04 A 20,20 0 0 1 193.72,69.18" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="146" y="226" font-size="13" fill="#0f1f3d" font-weight="700">T</text><circle cx="213.7" cy="68.3" r="2.5" fill="#0f1f3d"/><text x="221.7" y="62.3" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="62.06" cy="75" r="2.5" fill="#0f1f3d"/><text x="42.06" y="69" font-size="13" fill="#0f1f3d" font-weight="700">A</text><text x="169.92" y="191.84" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">62.5°</text><text x="139.13" y="178" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="184.18" y="87.12" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">60°</text><text x="92.74" y="91.82" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">?</text></svg></div>',
          answer:
            `∠TAC = ${gr('62.5°')}, ∠ATC = ${bl('57.5°')}, and since all three angles of △TAC are different (60°, 57.5°, 62.5°), triangle TAC is scalene, not isosceles.` +
            proofTable([
              ['∠TAC = 62.5°', 'tan-chord theorem (∠TAC is the ∠ in the alternate segment, equal to the tangent-chord ∠ of 62.5°)'],
              ['∠ATC = 180° − 62.5° − 60° = 57.5°', '∠ sum of △TAC = 180°'],
              ['∠TCA ≠ ∠ATC ≠ ∠TAC', 'the three angles (60°, 57.5°, 62.5°) are all different'],
              ['∴ △TAC is scalene', 'a triangle with three unequal angles has three unequal sides, so no two sides of △TAC are equal'],
            ]),
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing a tangent at T with the tangent-chord angle highlighted in green, an equal inscribed angle in the alternate segment also highlighted in green, and a separate diagram showing two equal tangent segments from an external point" />',

      diagramSvg:
        '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="210" x2="220" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="210" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="3,3"/><path d="M 140,198 L 152,198 L 152,210" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="140" y1="210" x2="213.7" y2="68.3" stroke="#ea580c" stroke-width="2.5"/><line x1="62.06" y1="75" x2="140" y2="210" stroke="#0f1f3d" stroke-width="2"/><line x1="62.06" y1="75" x2="213.7" y2="68.3" stroke="#0f1f3d" stroke-width="2"/><path d="M 160,210 A 20,20 0 0 0 149.23,192.26" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 72.06,92.32 A 20,20 0 0 0 82.04,74.12" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="146" y="226" font-size="13" fill="#0f1f3d" font-weight="700">T</text><circle cx="213.7" cy="68.3" r="2.5" fill="#0f1f3d"/><text x="221.7" y="62.3" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="62.06" cy="75" r="2.5" fill="#0f1f3d"/><text x="42.06" y="69" font-size="13" fill="#0f1f3d" font-weight="700">A</text><text x="169.92" y="196.84" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">x</text><text x="92.74" y="91.82" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">x</text></svg>',
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

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered Euclidean geometry — circles.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-3):   Circle terminology recall                                    — abstract, no diagram
    // Block 2 (4-7):   Perpendicular from centre bisects chord (Pythagoras)          — NEEDS DIAGRAM (4,5,6,7)
    // Block 3 (8-11):  Angle at centre = 2 × angle at circumference (+ reflex case)  — NEEDS DIAGRAM (8,9,10,11)
    // Block 4 (12-15): Angles in the same segment / equal chords                     — NEEDS DIAGRAM (12,13,14,15)
    // Block 5 (16-19): Angle in a semicircle (90°) + converse                        — NEEDS DIAGRAM (16,17,18,19)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Circle terminology (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'What is the name of the line segment that joins the centre of a circle to any point on the circumference?', checkMode: 'auto', correctAnswer: 'radius', correctAnswers: ['radius', 'a radius'], answer: 'radius', explanation: 'A radius joins the centre O to any point on the circumference.' },
        { difficulty: 'Easy', question: 'What is the name given to the longest possible chord in a circle — one that passes through the centre?', checkMode: 'auto', correctAnswer: 'diameter', correctAnswers: ['diameter', 'a diameter'], answer: 'diameter', explanation: 'A chord that passes through the centre is the longest possible chord and is called a diameter.' },
        { difficulty: 'Medium', question: 'A line touches a circle at exactly one point and does not cross into the circle. What is this line called, and what is the size of the angle it makes with the radius at that point?', checkMode: 'auto', correctAnswer: 'tangent,90', correctAnswers: ['tangent,90', 'tangent, 90°', 'tangent 90'], answer: 'tangent, 90°', explanation: 'A line touching the circle at exactly one point is a tangent. A tangent is always perpendicular to the radius at the point of contact, so the angle is 90°.' },
        { difficulty: 'Medium', question: 'What do we call the region of a circle enclosed between a chord and the arc it cuts off?', checkMode: 'auto', correctAnswer: 'segment', correctAnswers: ['segment', 'a segment'], answer: 'segment', explanation: 'The region between a chord and the arc it cuts off is called a segment.' },

        // Block 2 — Perpendicular from centre bisects chord (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In the circle shown with centre O, OM is drawn perpendicular to chord AB, where AB = 16 cm and the radius OA = 10 cm. Find the length of OM.', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6cm', '6 cm'], answer: '6 cm', explanation: 'Since OM ⊥ AB, OM bisects the chord: AM = 16 ÷ 2 = 8 cm.\nIn right-angled triangle OMA: OM² = OA² − AM² = 10² − 8² = 100 − 64 = 36.\nOM = √36 = 6 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="88.38" y2="193.72" stroke="#0f1f3d" stroke-width="2.5"/><line x1="88.38" y1="193.72" x2="191.62" y2="193.72" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="193.72" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,184.72 L 131,184.72 L 131,193.72" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="88.38" cy="193.72" r="2.5" fill="#0f1f3d"/><text x="70.38" y="199.72" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="191.62" cy="193.72" r="2.5" fill="#0f1f3d"/><text x="199.62" y="199.72" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="193.72" r="2.5" fill="#0f1f3d"/><text x="146" y="185.72" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="91.08" y="147.68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 10 cm</text><text x="140" y="219.72" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 16 cm</text><text x="154" y="160.86" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Easy', question: 'In the circle shown with centre O and radius 13 cm, OM is perpendicular to chord AB and OM = 5 cm. Find the length of chord AB.', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], answer: '24 cm', explanation: 'In right-angled triangle OMA: AM² = OA² − OM² = 13² − 5² = 169 − 25 = 144.\nAM = √144 = 12 cm.\nSince OM bisects the chord, AB = 2 × AM = 2 × 12 = 24 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="71.06" y2="177.85" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.06" y1="177.85" x2="208.94" y2="177.85" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="177.85" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,168.85 L 131,168.85 L 131,177.85" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="71.06" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="53.06" y="183.85" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="216.94" y="183.85" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="146" y="169.85" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="85.24" y="136.67" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 13 cm</text><text x="140" y="203.85" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="152.93" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 5 cm</text></svg>' },
        { difficulty: 'Medium', question: 'In the circle shown with centre O and radius 17 cm, chord AB = 30 cm. OM is drawn from the centre perpendicular to AB. Find the length of OM.', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], answer: '8 cm', explanation: 'Since OM ⊥ AB, OM bisects the chord: AM = 30 ÷ 2 = 15 cm.\nIn right-angled triangle OMA: OM² = OA² − AM² = 17² − 15² = 289 − 225 = 64.\nOM = √64 = 8 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="197.85" y2="188.94" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,179.94 L 131,179.94 L 131,188.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="64.15" y="194.94" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="197.85" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="205.85" y="194.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="146" y="180.94" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="88.82" y="144.19" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 17 cm</text><text x="140" y="214.94" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 30 cm</text><text x="154" y="158.47" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'In the circle shown with centre O and radius 25 cm, M is the midpoint of chord AB, with OM = 7 cm. Find the length of AB, then state the size of angle OMA.', checkMode: 'auto', correctAnswer: '48,90', correctAnswers: ['48,90', '48cm,90°', '48 cm, 90°'], answer: 'AB = 48 cm, ∠OMA = 90°', explanation: 'In right-angled triangle OMA: AM² = OA² − OM² = 25² − 7² = 625 − 49 = 576.\nAM = √576 = 24 cm.\nAB = 2 × AM = 2 × 24 = 48 cm.\nSince OM is the perpendicular from the centre to the chord, ∠OMA = 90° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="62.06" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="62.06" y1="165" x2="217.94" y2="165" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,156 L 131,156 L 131,165" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="62.06" cy="165" r="2.5" fill="#0f1f3d"/><text x="44.06" y="171" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="217.94" cy="165" r="2.5" fill="#0f1f3d"/><text x="225.94" y="171" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="165" r="2.5" fill="#0f1f3d"/><text x="146" y="157" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="83.03" y="128.64" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 25 cm</text><text x="140" y="191" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="146.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 7 cm</text></svg>' },

        // Block 3 — Angle at centre = 2 × angle at circumference (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In the circle shown with centre O, chord AB subtends ∠AOB = 140° at the centre, and ∠ACB at point C on the circumference (major arc, same side as O). Find ∠ACB.', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70', '70°', '70 degrees'], answer: '70°', explanation: 'The angle at the centre is double the angle at the circumference.\n∠ACB = 140° ÷ 2 = 70° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="160" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">140°</text><text x="140" y="60" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In the circle shown with centre O, chord PQ subtends ∠PRQ = 70° at point R on the circumference. Find the size of ∠POQ at the centre.', checkMode: 'auto', correctAnswer: '140', correctAnswers: ['140', '140°', '140 degrees'], answer: '140°', explanation: 'The angle at the centre is double the angle at the circumference.\n∠POQ = 2 × 70° = 140° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">R</text><text x="140" y="160" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="140" y="60" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">70°</text></svg>' },
        { difficulty: 'Medium', question: 'In the circle shown with centre O, chord AB subtends ∠AOB = 140° at the centre (measured on the major-arc side). Point D lies on the circumference on the major arc, on the same side as O. Find ∠ADB.', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70', '70°', '70 degrees'], answer: '70°', explanation: 'D is on the major arc, the same side as the given 140° angle.\n∠ADB = 140° ÷ 2 = 70° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="140" y="160" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">140°</text><text x="140" y="60" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In the circle shown with centre O, chord AB subtends an angle of 140° at the centre on the major-arc side. Point E lies on the minor arc. Find the reflex angle AOB, then find ∠AEB.', checkMode: 'auto', correctAnswer: '220,110', correctAnswers: ['220,110', '220°,110°', '220°, 110°'], answer: 'Reflex ∠AOB = 220°, ∠AEB = 110°', explanation: 'Reflex ∠AOB = 360° − 140° = 220°.\nE is on the minor arc, so use the reflex angle: ∠AEB = 220° ÷ 2 = 110° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="210" stroke="#16a34a" stroke-width="2.5"/><path d="M 127.71,201.4 A 15,15 0 0 1 152.29,201.4" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 109.93,130.94 A 32,32 0 1 1 170.07,130.94" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="134" y="230" font-size="13" fill="#0f1f3d" font-weight="700">E</text><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="140" y="160" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">140°</text><text x="140" y="180" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Block 4 — Angles in the same segment / equal chords (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In the circle shown, points C and D lie on the same arc relative to chord AB (same side of AB). ∠ACB = 47°. Find ∠ADB.', checkMode: 'auto', correctAnswer: '47', correctAnswers: ['47', '47°', '47 degrees'], answer: '47°', explanation: 'C and D lie on the same segment relative to chord AB, so angles in the same segment are equal.\n∠ADB = ∠ACB = 47° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="224.57" y2="150.78" stroke="#ea580c" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 174.28,51.06 A 14,14 0 0 0 189.79,55.21" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 171.21,53.63 A 18,18 0 0 0 191.16,58.97" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 103.3,48.12 A 14,14 0 0 0 119.12,45.33" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 101.61,51.74 A 18,18 0 0 0 121.95,48.16" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="185" cy="42.06" r="2.5" fill="#0f1f3d"/><text x="193" y="36.06" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="109.22" cy="35.43" r="2.5" fill="#0f1f3d"/><text x="103.22" y="23.43" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="176.72" y="72.97" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">47°</text><text x="123.12" y="62.91" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In the circle shown, chord PQ = chord RS. Chord PQ subtends an angle of 70° at the centre. Find the angle that chord RS subtends at the centre.', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70', '70°', '70 degrees'], answer: '70°', explanation: 'Equal chords subtend equal angles at the centre.\nRS subtends the same angle as PQ: 70° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="217.94" y1="165" x2="124.37" y2="208.63" stroke="#7c3aed" stroke-width="2.5"/><line x1="100.58" y1="63.7" x2="94.85" y2="55.51" stroke="#ea580c" stroke-width="2"/><line x1="169.04" y1="182.28" x2="173.27" y2="191.35" stroke="#7c3aed" stroke-width="2"/><line x1="140" y1="120" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="217.94" y2="165" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="140" y1="120" x2="124.37" y2="208.63" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 121.21,113.16 A 20,20 0 0 1 140,100" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 165.98,135 A 30,30 0 0 1 134.79,149.54" fill="none" stroke="#7c3aed" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><text x="120.5" y="92.15" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">70°</text><text x="158.6" y="159.88" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="120" y="24" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="217.94" cy="165" r="2.5" fill="#0f1f3d"/><text x="227.94" y="167" font-size="13" fill="#0f1f3d" font-weight="700">R</text><circle cx="124.37" cy="208.63" r="2.5" fill="#0f1f3d"/><text x="130.37" y="224.63" font-size="13" fill="#0f1f3d" font-weight="700">S</text></svg>' },
        { difficulty: 'Medium', question: 'In the circle shown, chord MN = chord XY in the same circle. MN subtends an angle of 30° at the circumference. Find the angle that XY subtends at the circumference.', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30°', '30 degrees'], answer: '30°', explanation: 'Equal chords subtend equal angles at the circumference.\nXY subtends the same angle as MN: 30° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.06" y1="177.85" x2="55.43" y2="89.22" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="155.63" y2="208.63" stroke="#7c3aed" stroke-width="2.5"/><line x1="68.17" y1="132.67" x2="58.32" y2="134.4" stroke="#ea580c" stroke-width="2"/><line x1="186.89" y1="175.88" x2="193.31" y2="183.54" stroke="#7c3aed" stroke-width="2"/><line x1="71.06" y1="177.85" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 211.58,96.72 A 15,15 0 0 1 209.57,89.22" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="224.57" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="234.57" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">V</text><line x1="224.57" y1="150.78" x2="88.38" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155.63" y1="208.63" x2="88.38" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100.28,55.41 A 15,15 0 0 1 94.12,60.13" fill="none" stroke="#7c3aed" stroke-width="2"/><circle cx="88.38" cy="46.28" r="2.5" fill="#0f1f3d"/><text x="80.38" y="36.28" font-size="13" fill="#0f1f3d" font-weight="700">W</text><text x="195.59" y="96.98" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">30°</text><text x="109.08" y="73.25" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><circle cx="71.06" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="51.06" y="181.85" font-size="13" fill="#0f1f3d" font-weight="700">M</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="83.22" font-size="13" fill="#0f1f3d" font-weight="700">N</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="152.78" font-size="13" fill="#0f1f3d" font-weight="700">X</text><circle cx="155.63" cy="208.63" r="2.5" fill="#0f1f3d"/><text x="161.63" y="224.63" font-size="13" fill="#0f1f3d" font-weight="700">Y</text></svg>' },
        { difficulty: 'Hard', question: 'In the circle shown with centre O, points A, B, C and D lie on the circumference, with C and D on the same arc relative to chord AB. ∠ACB = 2x + 8° and ∠ADB = 3x − 12°. Find x, then find the size of ∠ACB.', checkMode: 'auto', correctAnswer: '20,48', correctAnswers: ['20,48', '20,48°', 'x=20,48°'], answer: 'x = 20, ∠ACB = 48°', explanation: 'Angles in the same segment are equal: 2x + 8° = 3x − 12°.\n20° = x.\n∠ACB = 2(20°) + 8° = 40° + 8° = 48° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="224.57" y2="150.78" stroke="#ea580c" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 174.28,51.06 A 14,14 0 0 0 189.79,55.21" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 171.21,53.63 A 18,18 0 0 0 191.16,58.97" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 103.3,48.12 A 14,14 0 0 0 119.12,45.33" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 101.61,51.74 A 18,18 0 0 0 121.95,48.16" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="185" cy="42.06" r="2.5" fill="#0f1f3d"/><text x="193" y="36.06" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="109.22" cy="35.43" r="2.5" fill="#0f1f3d"/><text x="103.22" y="23.43" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="176.72" y="72.97" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">2x + 8°</text><text x="123.12" y="62.91" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">3x − 12°</text></svg>' },

        // Block 5 — Angle in a semicircle + converse (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In the circle shown, AB is a diameter and P is a point on the circumference. ∠PAB = 27.5°. Find ∠APB, then find ∠PBA.', checkMode: 'auto', correctAnswer: '90,62.5', correctAnswers: ['90,62.5', '90°,62.5°', '90°, 62.5°'], answer: '∠APB = 90°, ∠PBA = 62.5°', explanation: 'Since AB is a diameter, ∠APB = 90° (angle in a semicircle).\nIn triangle APB: 27.5° + 90° + ∠PBA = 180°.\n∠PBA = 180° − 90° − 27.5° = 62.5° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="191.62" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="191.62" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 182.75,50.89 L 187.37,59.76 L 196.24,55.15" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="30" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="191.62" cy="46.28" r="2.5" fill="#0f1f3d"/><text x="197.62" y="36.28" font-size="13" fill="#0f1f3d" font-weight="700">P</text><text x="183.8" y="71.07" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">27.5°</text></svg>' },
        { difficulty: 'Easy', question: 'In the circle shown, chord XY subtends an angle of 90° at point Z on the circumference. What can you conclude about chord XY?', checkMode: 'auto', correctAnswer: 'diameter', correctAnswers: ['diameter', 'xy is a diameter', 'it is a diameter'], answer: 'XY is a diameter of the circle', explanation: 'By the converse of the angle-in-a-semicircle theorem, if a chord subtends 90° at a point on the circle, that chord must be a diameter. So XY is a diameter ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="53.07" y1="96.71" x2="226.93" y2="143.29" stroke="#ea580c" stroke-width="2.5"/><line x1="53.07" y1="96.71" x2="132.16" y2="209.66" stroke="#0f1f3d" stroke-width="2.5"/><line x1="226.93" y1="143.29" x2="132.16" y2="209.66" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 126.42,201.47 L 134.61,195.73 L 140.35,203.92" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="53.07" cy="96.71" r="2.5" fill="#0f1f3d"/><text x="33.07" y="100.71" font-size="13" fill="#0f1f3d" font-weight="700">X</text><circle cx="226.93" cy="143.29" r="2.5" fill="#0f1f3d"/><text x="234.93" y="143.29" font-size="13" fill="#0f1f3d" font-weight="700">Y</text><circle cx="132.16" cy="209.66" r="2.5" fill="#0f1f3d"/><text x="126.16" y="197.66" font-size="13" fill="#0f1f3d" font-weight="700">Z</text><text x="136.67" y="184.06" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">90°</text></svg>' },
        { difficulty: 'Medium', question: 'In the circle shown, AB is a diameter with AB = 20 cm. P is a point on the circumference with AP = 12 cm. Find the size of ∠APB, then find the length of BP.', checkMode: 'auto', correctAnswer: '90,16', correctAnswers: ['90,16', '90°,16cm', '90°, 16 cm'], answer: '∠APB = 90°, BP = 16 cm', explanation: 'AB is a diameter, so ∠APB = 90° (angle in a semicircle).\nTriangle APB is right-angled at P, so by Pythagoras: BP² = AB² − AP² = 20² − 12² = 400 − 144 = 256.\nBP = √256 = 16 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 199.55,65.57 L 202.97,74.97 L 212.36,71.55" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="30" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="214.94" y="52.15" font-size="13" fill="#0f1f3d" font-weight="700">P</text><text x="197.96" y="85.71" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="119.47" y="85.07" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">AP = 12 cm</text><text x="140" y="140" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 20 cm</text><text x="240.51" y="85.6" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In the circle shown with centre O, AB is a diameter. C and D are points on the circumference on the same side of AB, with ∠CAB = 17.5° and ∠DBA = 17.5°. Find ∠ACB, ∠ADB, and ∠ABC.', checkMode: 'auto', correctAnswer: '90,90,72.5', correctAnswers: ['90,90,72.5', '90°,90°,72.5°', '90°, 90°, 72.5°'], answer: '∠ACB = 90°, ∠ADB = 90°, ∠ABC = 72.5°', explanation: 'AB is a diameter, so ∠ACB = 90° and ∠ADB = 90° (angle in a semicircle applies to any point on the circle).\nIn triangle ABC: ∠CAB = 17.5°, ∠ACB = 90°.\n∠ABC = 180° − 90° − 17.5° = 72.5° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="30" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><line x1="50" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="66.28" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="66.28" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 205.14,71.08 L 207.85,79.67 L 216.43,76.96" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><path d="M 63.57,76.96 L 72.15,79.67 L 74.86,71.08" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="213.72" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="221.72" y="60.38" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="66.28" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="58.28" y="58.38" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="73.72" y="110.35" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">17.5°</text><text x="206.28" y="110.35" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">17.5°</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered circle terminology and the key circle theorems — perpendicular bisecting a chord, angle at the centre, angles in the same segment, and the angle in a semicircle.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the angle-at-centre theorem or the semicircle theorem, and try again.' },
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
        // Block 1 — Circle terminology (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'What is the name of the line that cuts through a circle, crossing the circumference at two points?', checkMode: 'auto', correctAnswer: 'secant', correctAnswers: ['secant', 'a secant'], answer: 'secant', explanation: 'A line that cuts through a circle at two points is called a secant.' },
        { difficulty: 'Easy', question: 'What is the name of the angle formed at the centre O of a circle by two radii drawn to the endpoints of a chord?', checkMode: 'auto', correctAnswer: 'angle at the centre', correctAnswers: ['angle at the centre', 'the angle at the centre', 'central angle'], answer: 'angle at the centre', explanation: 'The angle formed at the centre by two radii drawn to the endpoints of a chord is called the angle at the centre.' },
        { difficulty: 'Medium', question: 'A chord passes through the centre of a circle. What is this chord called, and how does its length compare to the radius?', checkMode: 'auto', correctAnswer: 'diameter,2', correctAnswers: ['diameter,2', 'diameter, twice the radius', 'diameter,twice'], answer: 'diameter, twice the radius', explanation: 'A chord through the centre is called a diameter. It equals two radii, so it is twice the length of the radius.' },
        { difficulty: 'Medium', question: 'A portion of a circle bounded by a chord and the arc it cuts off is called a segment. What do we call the shorter of the two arcs between two points on a circle?', checkMode: 'auto', correctAnswer: 'minor arc', correctAnswers: ['minor arc', 'the minor arc'], answer: 'minor arc', explanation: 'The shorter arc between two points on a circle is called the minor arc (the longer one is the major arc).' },

        // Block 2 — Perpendicular from centre bisects chord (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In the circle shown with centre O, OM is drawn perpendicular to chord AB, where AB = 24 cm and the radius OA = 15 cm. Find the length of OM.', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9cm', '9 cm'], answer: '9 cm', explanation: 'Since OM ⊥ AB, OM bisects the chord: AM = 24 ÷ 2 = 12 cm.\nIn right-angled triangle OMA: OM² = OA² − AM² = 15² − 12² = 225 − 144 = 81.\nOM = √81 = 9 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="88.38" y2="193.72" stroke="#0f1f3d" stroke-width="2.5"/><line x1="88.38" y1="193.72" x2="191.62" y2="193.72" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="193.72" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,184.72 L 131,184.72 L 131,193.72" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="88.38" cy="193.72" r="2.5" fill="#0f1f3d"/><text x="70.38" y="199.72" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="191.62" cy="193.72" r="2.5" fill="#0f1f3d"/><text x="199.62" y="199.72" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="193.72" r="2.5" fill="#0f1f3d"/><text x="146" y="185.72" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="91.08" y="147.68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 15 cm</text><text x="140" y="219.72" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 24 cm</text><text x="154" y="160.86" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Easy', question: 'In the circle shown with centre O and radius 20 cm, OM is perpendicular to chord AB and OM = 16 cm. Find the length of chord AB.', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], answer: '24 cm', explanation: 'In right-angled triangle OMA: AM² = OA² − OM² = 20² − 16² = 400 − 256 = 144.\nAM = √144 = 12 cm.\nSince OM bisects the chord, AB = 2 × AM = 2 × 12 = 24 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="71.06" y2="177.85" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.06" y1="177.85" x2="208.94" y2="177.85" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="177.85" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,168.85 L 131,168.85 L 131,177.85" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="71.06" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="53.06" y="183.85" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="216.94" y="183.85" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="146" y="169.85" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="85.24" y="136.67" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 20 cm</text><text x="140" y="203.85" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="152.93" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 16 cm</text></svg>' },
        { difficulty: 'Medium', question: 'In the circle shown with centre O and radius 41 cm, chord AB = 80 cm. OM is drawn from the centre perpendicular to AB. Find the length of OM.', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9cm', '9 cm'], answer: '9 cm', explanation: 'Since OM ⊥ AB, OM bisects the chord: AM = 80 ÷ 2 = 40 cm.\nIn right-angled triangle OMA: OM² = OA² − AM² = 41² − 40² = 1681 − 1600 = 81.\nOM = √81 = 9 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="197.85" y2="188.94" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,179.94 L 131,179.94 L 131,188.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="64.15" y="194.94" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="197.85" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="205.85" y="194.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="146" y="180.94" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="88.82" y="144.19" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 41 cm</text><text x="140" y="214.94" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 80 cm</text><text x="154" y="158.47" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'In the circle shown with centre O and radius 61 cm, M is the midpoint of chord AB, with OM = 11 cm. Find the length of AB, then state the size of angle OMB.', checkMode: 'auto', correctAnswer: '120,90', correctAnswers: ['120,90', '120cm,90°', '120 cm, 90°'], answer: 'AB = 120 cm, ∠OMB = 90°', explanation: 'In right-angled triangle OMB: BM² = OB² − OM² = 61² − 11² = 3721 − 121 = 3600.\nBM = √3600 = 60 cm.\nAB = 2 × BM = 2 × 60 = 120 cm.\nSince OM is the perpendicular from the centre to the chord, ∠OMB = 90° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="62.06" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="62.06" y1="165" x2="217.94" y2="165" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,156 L 131,156 L 131,165" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="62.06" cy="165" r="2.5" fill="#0f1f3d"/><text x="44.06" y="171" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="217.94" cy="165" r="2.5" fill="#0f1f3d"/><text x="225.94" y="171" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="165" r="2.5" fill="#0f1f3d"/><text x="146" y="157" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="83.03" y="128.64" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 61 cm</text><text x="140" y="191" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="146.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 11 cm</text></svg>' },

        // Block 3 — Angle at centre = 2 × angle at circumference (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In the circle shown with centre O, chord AB subtends ∠AOB = 140° at the centre, and ∠ACB at point C on the circumference (major arc, same side as O). Find ∠ACB.', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70', '70°', '70 degrees'], answer: '70°', explanation: 'The angle at the centre is double the angle at the circumference.\n∠ACB = 140° ÷ 2 = 70° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="160" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">140°</text><text x="140" y="60" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In the circle shown with centre O, chord PQ subtends ∠PRQ = 70° at point R on the circumference. Find the size of ∠POQ at the centre.', checkMode: 'auto', correctAnswer: '140', correctAnswers: ['140', '140°', '140 degrees'], answer: '140°', explanation: 'The angle at the centre is double the angle at the circumference.\n∠POQ = 2 × 70° = 140° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">R</text><text x="140" y="160" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="140" y="60" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">70°</text></svg>' },
        { difficulty: 'Medium', question: 'In the circle shown with centre O, chord AB subtends ∠AOB = 140° at the centre (measured on the major-arc side). Point D lies on the circumference on the major arc, on the same side as O. Find ∠ADB.', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70', '70°', '70 degrees'], answer: '70°', explanation: 'D is on the major arc, the same side as the given 140° angle.\n∠ADB = 140° ÷ 2 = 70° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="140" y="160" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">140°</text><text x="140" y="60" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In the circle shown with centre O, chord AB subtends an angle of 140° at the centre on the major-arc side. Point E lies on the minor arc. Find the reflex angle AOB, then find ∠AEB.', checkMode: 'auto', correctAnswer: '220,110', correctAnswers: ['220,110', '220°,110°', '220°, 110°'], answer: 'Reflex ∠AOB = 220°, ∠AEB = 110°', explanation: 'Reflex ∠AOB = 360° − 140° = 220°.\nE is on the minor arc, so use the reflex angle: ∠AEB = 220° ÷ 2 = 110° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="210" stroke="#16a34a" stroke-width="2.5"/><path d="M 127.71,201.4 A 15,15 0 0 1 152.29,201.4" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 109.93,130.94 A 32,32 0 1 1 170.07,130.94" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="134" y="230" font-size="13" fill="#0f1f3d" font-weight="700">E</text><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="140" y="160" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">140°</text><text x="140" y="180" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Block 4 — Angles in the same segment / equal chords (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In the circle shown, points C and D lie on the same arc relative to chord AB (same side of AB). ∠ACB = 61°. Find ∠ADB.', checkMode: 'auto', correctAnswer: '61', correctAnswers: ['61', '61°', '61 degrees'], answer: '61°', explanation: 'C and D lie on the same segment relative to chord AB, so angles in the same segment are equal.\n∠ADB = ∠ACB = 61° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="224.57" y2="150.78" stroke="#ea580c" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 174.28,51.06 A 14,14 0 0 0 189.79,55.21" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 171.21,53.63 A 18,18 0 0 0 191.16,58.97" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 103.3,48.12 A 14,14 0 0 0 119.12,45.33" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 101.61,51.74 A 18,18 0 0 0 121.95,48.16" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="185" cy="42.06" r="2.5" fill="#0f1f3d"/><text x="193" y="36.06" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="109.22" cy="35.43" r="2.5" fill="#0f1f3d"/><text x="103.22" y="23.43" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="176.72" y="72.97" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">61°</text><text x="123.12" y="62.91" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In the circle shown, chord PQ = chord RS. Chord PQ subtends an angle of 70° at the centre. Find the angle that chord RS subtends at the centre.', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70', '70°', '70 degrees'], answer: '70°', explanation: 'Equal chords subtend equal angles at the centre.\nRS subtends the same angle as PQ: 70° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="217.94" y1="165" x2="124.37" y2="208.63" stroke="#7c3aed" stroke-width="2.5"/><line x1="100.58" y1="63.7" x2="94.85" y2="55.51" stroke="#ea580c" stroke-width="2"/><line x1="169.04" y1="182.28" x2="173.27" y2="191.35" stroke="#7c3aed" stroke-width="2"/><line x1="140" y1="120" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="217.94" y2="165" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="140" y1="120" x2="124.37" y2="208.63" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 121.21,113.16 A 20,20 0 0 1 140,100" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 165.98,135 A 30,30 0 0 1 134.79,149.54" fill="none" stroke="#7c3aed" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><text x="120.5" y="92.15" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">70°</text><text x="158.6" y="159.88" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="120" y="24" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="217.94" cy="165" r="2.5" fill="#0f1f3d"/><text x="227.94" y="167" font-size="13" fill="#0f1f3d" font-weight="700">R</text><circle cx="124.37" cy="208.63" r="2.5" fill="#0f1f3d"/><text x="130.37" y="224.63" font-size="13" fill="#0f1f3d" font-weight="700">S</text></svg>' },
        { difficulty: 'Medium', question: 'In the circle shown, chord MN = chord XY in the same circle. MN subtends an angle of 30° at the circumference. Find the angle that XY subtends at the circumference.', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30°', '30 degrees'], answer: '30°', explanation: 'Equal chords subtend equal angles at the circumference.\nXY subtends the same angle as MN: 30° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.06" y1="177.85" x2="55.43" y2="89.22" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="155.63" y2="208.63" stroke="#7c3aed" stroke-width="2.5"/><line x1="68.17" y1="132.67" x2="58.32" y2="134.4" stroke="#ea580c" stroke-width="2"/><line x1="186.89" y1="175.88" x2="193.31" y2="183.54" stroke="#7c3aed" stroke-width="2"/><line x1="71.06" y1="177.85" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 211.58,96.72 A 15,15 0 0 1 209.57,89.22" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="224.57" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="234.57" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">V</text><line x1="224.57" y1="150.78" x2="88.38" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155.63" y1="208.63" x2="88.38" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100.28,55.41 A 15,15 0 0 1 94.12,60.13" fill="none" stroke="#7c3aed" stroke-width="2"/><circle cx="88.38" cy="46.28" r="2.5" fill="#0f1f3d"/><text x="80.38" y="36.28" font-size="13" fill="#0f1f3d" font-weight="700">W</text><text x="195.59" y="96.98" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">30°</text><text x="109.08" y="73.25" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><circle cx="71.06" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="51.06" y="181.85" font-size="13" fill="#0f1f3d" font-weight="700">M</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="83.22" font-size="13" fill="#0f1f3d" font-weight="700">N</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="152.78" font-size="13" fill="#0f1f3d" font-weight="700">X</text><circle cx="155.63" cy="208.63" r="2.5" fill="#0f1f3d"/><text x="161.63" y="224.63" font-size="13" fill="#0f1f3d" font-weight="700">Y</text></svg>' },
        { difficulty: 'Hard', question: 'In the circle shown with centre O, points A, B, C and D lie on the circumference, with C and D on the same arc relative to chord AB. ∠ACB = 4x − 6° and ∠ADB = 2x + 18°. Find x, then find the size of ∠ACB.', checkMode: 'auto', correctAnswer: '12,42', correctAnswers: ['12,42', '12,42°', 'x=12,42°'], answer: 'x = 12, ∠ACB = 42°', explanation: 'Angles in the same segment are equal: 4x − 6° = 2x + 18°.\n2x = 24°.\nx = 12°.\n∠ACB = 4(12°) − 6° = 48° − 6° = 42° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="224.57" y2="150.78" stroke="#ea580c" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 174.28,51.06 A 14,14 0 0 0 189.79,55.21" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 171.21,53.63 A 18,18 0 0 0 191.16,58.97" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 103.3,48.12 A 14,14 0 0 0 119.12,45.33" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 101.61,51.74 A 18,18 0 0 0 121.95,48.16" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="185" cy="42.06" r="2.5" fill="#0f1f3d"/><text x="193" y="36.06" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="109.22" cy="35.43" r="2.5" fill="#0f1f3d"/><text x="103.22" y="23.43" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="176.72" y="72.97" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">4x − 6°</text><text x="123.12" y="62.91" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">2x + 18°</text></svg>' },

        // Block 5 — Angle in a semicircle + converse (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In the circle shown, AB is a diameter and P is a point on the circumference. ∠PAB = 27.5°. Find ∠APB, then find ∠PBA.', checkMode: 'auto', correctAnswer: '90,62.5', correctAnswers: ['90,62.5', '90°,62.5°', '90°, 62.5°'], answer: '∠APB = 90°, ∠PBA = 62.5°', explanation: 'Since AB is a diameter, ∠APB = 90° (angle in a semicircle).\nIn triangle APB: 27.5° + 90° + ∠PBA = 180°.\n∠PBA = 180° − 90° − 27.5° = 62.5° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="191.62" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="191.62" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 182.75,50.89 L 187.37,59.76 L 196.24,55.15" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="30" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="191.62" cy="46.28" r="2.5" fill="#0f1f3d"/><text x="197.62" y="36.28" font-size="13" fill="#0f1f3d" font-weight="700">P</text><text x="183.8" y="71.07" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">27.5°</text></svg>' },
        { difficulty: 'Easy', question: 'In the circle shown, chord MN subtends an angle of 90° at point K on the circumference. What can you conclude about chord MN?', checkMode: 'auto', correctAnswer: 'diameter', correctAnswers: ['diameter', 'mn is a diameter', 'it is a diameter'], answer: 'MN is a diameter of the circle', explanation: 'By the converse of the angle-in-a-semicircle theorem, if a chord subtends 90° at a point on the circle, that chord must be a diameter. So MN is a diameter ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="53.07" y1="96.71" x2="226.93" y2="143.29" stroke="#ea580c" stroke-width="2.5"/><line x1="53.07" y1="96.71" x2="132.16" y2="209.66" stroke="#0f1f3d" stroke-width="2.5"/><line x1="226.93" y1="143.29" x2="132.16" y2="209.66" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 126.42,201.47 L 134.61,195.73 L 140.35,203.92" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="53.07" cy="96.71" r="2.5" fill="#0f1f3d"/><text x="33.07" y="100.71" font-size="13" fill="#0f1f3d" font-weight="700">M</text><circle cx="226.93" cy="143.29" r="2.5" fill="#0f1f3d"/><text x="234.93" y="143.29" font-size="13" fill="#0f1f3d" font-weight="700">N</text><circle cx="132.16" cy="209.66" r="2.5" fill="#0f1f3d"/><text x="126.16" y="197.66" font-size="13" fill="#0f1f3d" font-weight="700">K</text><text x="136.67" y="184.06" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">90°</text></svg>' },
        { difficulty: 'Medium', question: 'In the circle shown, AB is a diameter with AB = 17 cm. P is a point on the circumference with AP = 8 cm. Find the size of ∠APB, then find the length of BP.', checkMode: 'auto', correctAnswer: '90,15', correctAnswers: ['90,15', '90°,15cm', '90°, 15 cm'], answer: '∠APB = 90°, BP = 15 cm', explanation: 'AB is a diameter, so ∠APB = 90° (angle in a semicircle).\nTriangle APB is right-angled at P, so by Pythagoras: BP² = AB² − AP² = 17² − 8² = 289 − 64 = 225.\nBP = √225 = 15 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 199.55,65.57 L 202.97,74.97 L 212.36,71.55" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="30" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="214.94" y="52.15" font-size="13" fill="#0f1f3d" font-weight="700">P</text><text x="197.96" y="85.71" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="119.47" y="85.07" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">AP = 8 cm</text><text x="140" y="140" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 17 cm</text><text x="240.51" y="85.6" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In the circle shown with centre O, AB is a diameter. C and D are points on the circumference on the same side of AB, with ∠CAB = 17.5° and ∠DBA = 17.5°. Find ∠ACB, ∠ADB, and ∠ABC.', checkMode: 'auto', correctAnswer: '90,90,72.5', correctAnswers: ['90,90,72.5', '90°,90°,72.5°', '90°, 90°, 72.5°'], answer: '∠ACB = 90°, ∠ADB = 90°, ∠ABC = 72.5°', explanation: 'AB is a diameter, so ∠ACB = 90° and ∠ADB = 90° (angle in a semicircle applies to any point on the circle).\nIn triangle ABC: ∠CAB = 17.5°, ∠ACB = 90°.\n∠ABC = 180° − 90° − 17.5° = 72.5° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="30" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><line x1="50" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="66.28" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="66.28" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 205.14,71.08 L 207.85,79.67 L 216.43,76.96" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><path d="M 63.57,76.96 L 72.15,79.67 L 74.86,71.08" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="213.72" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="221.72" y="60.38" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="66.28" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="58.28" y="58.38" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="73.72" y="110.35" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">17.5°</text><text x="206.28" y="110.35" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">17.5°</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered circle terminology and the key circle theorems — perpendicular bisecting a chord, angle at the centre, angles in the same segment, and the angle in a semicircle.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the angle-at-centre theorem or the semicircle theorem, and try again.' },
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
        // Block 1 — Circle terminology (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'What is the name of the line segment that joins any two points on the circumference of a circle?', checkMode: 'auto', correctAnswer: 'chord', correctAnswers: ['chord', 'a chord'], answer: 'chord', explanation: 'A chord is a line segment joining any two points on the circumference.' },
        { difficulty: 'Easy', question: 'What is the special name given to the region between a chord and the arc it cuts off, when it is the larger of the two such regions?', checkMode: 'auto', correctAnswer: 'major segment', correctAnswers: ['major segment', 'the major segment'], answer: 'major segment', explanation: 'The larger region between a chord and its arc is called the major segment (the smaller one is the minor segment).' },
        { difficulty: 'Medium', question: 'A tangent touches a circle at point T. Explain the relationship between the tangent and the radius OT, and state the angle between them.', checkMode: 'auto', correctAnswer: 'perpendicular,90', correctAnswers: ['perpendicular,90', 'perpendicular, 90°', 'perpendicular 90'], answer: 'perpendicular, 90°', explanation: 'A tangent is always perpendicular to the radius drawn to the point of contact, so the angle between them is 90°.' },
        { difficulty: 'Medium', question: 'What do we call all the radii drawn in the same circle, in terms of their lengths?', checkMode: 'auto', correctAnswer: 'equal', correctAnswers: ['equal', 'they are equal', 'all equal'], answer: 'equal', explanation: 'All radii of the same circle are equal in length, since each one is the distance from the centre to the circumference.' },

        // Block 2 — Perpendicular from centre bisects chord (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In the circle shown with centre O, OM is drawn perpendicular to chord AB, where AB = 14 cm and the radius OA = 25 cm. Find the length of OM.', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], answer: '24 cm', explanation: 'Since OM ⊥ AB, OM bisects the chord: AM = 14 ÷ 2 = 7 cm.\nIn right-angled triangle OMA: OM² = OA² − AM² = 25² − 7² = 625 − 49 = 576.\nOM = √576 = 24 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="88.38" y2="193.72" stroke="#0f1f3d" stroke-width="2.5"/><line x1="88.38" y1="193.72" x2="191.62" y2="193.72" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="193.72" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,184.72 L 131,184.72 L 131,193.72" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="88.38" cy="193.72" r="2.5" fill="#0f1f3d"/><text x="70.38" y="199.72" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="191.62" cy="193.72" r="2.5" fill="#0f1f3d"/><text x="199.62" y="199.72" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="193.72" r="2.5" fill="#0f1f3d"/><text x="146" y="185.72" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="91.08" y="147.68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 25 cm</text><text x="140" y="219.72" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 14 cm</text><text x="154" y="160.86" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Easy', question: 'In the circle shown with centre O and radius 29 cm, OM is perpendicular to chord AB and OM = 20 cm. Find the length of chord AB.', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42cm', '42 cm'], answer: '42 cm', explanation: 'In right-angled triangle OMA: AM² = OA² − OM² = 29² − 20² = 841 − 400 = 441.\nAM = √441 = 21 cm.\nSince OM bisects the chord, AB = 2 × AM = 2 × 21 = 42 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="71.06" y2="177.85" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.06" y1="177.85" x2="208.94" y2="177.85" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="177.85" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,168.85 L 131,168.85 L 131,177.85" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="71.06" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="53.06" y="183.85" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="216.94" y="183.85" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="146" y="169.85" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="85.24" y="136.67" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 29 cm</text><text x="140" y="203.85" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="152.93" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 20 cm</text></svg>' },
        { difficulty: 'Medium', question: 'In the circle shown with centre O and radius 37 cm, chord AB = 70 cm. OM is drawn from the centre perpendicular to AB. Find the length of OM.', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], answer: '12 cm', explanation: 'Since OM ⊥ AB, OM bisects the chord: AM = 70 ÷ 2 = 35 cm.\nIn right-angled triangle OMA: OM² = OA² − AM² = 37² − 35² = 1369 − 1225 = 144.\nOM = √144 = 12 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="197.85" y2="188.94" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,179.94 L 131,179.94 L 131,188.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="64.15" y="194.94" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="197.85" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="205.85" y="194.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="146" y="180.94" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="88.82" y="144.19" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 37 cm</text><text x="140" y="214.94" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 70 cm</text><text x="154" y="158.47" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'In the circle shown with centre O and radius 53 cm, M is the midpoint of chord AB, with OM = 28 cm. Find the length of AB, then state the size of angle OMA.', checkMode: 'auto', correctAnswer: '90,90', correctAnswers: ['90,90', '90cm,90°', '90 cm, 90°'], answer: 'AB = 90 cm, ∠OMA = 90°', explanation: 'In right-angled triangle OMA: AM² = OA² − OM² = 53² − 28² = 2809 − 784 = 2025.\nAM = √2025 = 45 cm.\nAB = 2 × AM = 2 × 45 = 90 cm.\nSince OM is the perpendicular from the centre to the chord, ∠OMA = 90° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="62.06" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="62.06" y1="165" x2="217.94" y2="165" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,156 L 131,156 L 131,165" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="62.06" cy="165" r="2.5" fill="#0f1f3d"/><text x="44.06" y="171" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="217.94" cy="165" r="2.5" fill="#0f1f3d"/><text x="225.94" y="171" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="165" r="2.5" fill="#0f1f3d"/><text x="146" y="157" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="83.03" y="128.64" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 53 cm</text><text x="140" y="191" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="146.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 28 cm</text></svg>' },

        // Block 3 — Angle at centre = 2 × angle at circumference (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In the circle shown with centre O, chord AB subtends ∠AOB = 140° at the centre, and ∠ACB at point C on the circumference (major arc, same side as O). Find ∠ACB.', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70', '70°', '70 degrees'], answer: '70°', explanation: 'The angle at the centre is double the angle at the circumference.\n∠ACB = 140° ÷ 2 = 70° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="160" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">140°</text><text x="140" y="60" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In the circle shown with centre O, chord PQ subtends ∠PRQ = 70° at point R on the circumference. Find the size of ∠POQ at the centre.', checkMode: 'auto', correctAnswer: '140', correctAnswers: ['140', '140°', '140 degrees'], answer: '140°', explanation: 'The angle at the centre is double the angle at the circumference.\n∠POQ = 2 × 70° = 140° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">R</text><text x="140" y="160" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="140" y="60" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">70°</text></svg>' },
        { difficulty: 'Medium', question: 'In the circle shown with centre O, chord AB subtends ∠AOB = 140° at the centre (measured on the major-arc side). Point D lies on the circumference on the major arc, on the same side as O. Find ∠ADB.', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70', '70°', '70 degrees'], answer: '70°', explanation: 'D is on the major arc, the same side as the given 140° angle.\n∠ADB = 140° ÷ 2 = 70° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="140" y="160" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">140°</text><text x="140" y="60" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In the circle shown with centre O, chord AB subtends an angle of 140° at the centre on the major-arc side. Point E lies on the minor arc. Find the reflex angle AOB, then find ∠AEB.', checkMode: 'auto', correctAnswer: '220,110', correctAnswers: ['220,110', '220°,110°', '220°, 110°'], answer: 'Reflex ∠AOB = 220°, ∠AEB = 110°', explanation: 'Reflex ∠AOB = 360° − 140° = 220°.\nE is on the minor arc, so use the reflex angle: ∠AEB = 220° ÷ 2 = 110° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="210" stroke="#16a34a" stroke-width="2.5"/><path d="M 127.71,201.4 A 15,15 0 0 1 152.29,201.4" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 109.93,130.94 A 32,32 0 1 1 170.07,130.94" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="134" y="230" font-size="13" fill="#0f1f3d" font-weight="700">E</text><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="140" y="160" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">140°</text><text x="140" y="180" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Block 4 — Angles in the same segment / equal chords (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In the circle shown, points C and D lie on the same arc relative to chord AB (same side of AB). ∠ACB = 39°. Find ∠ADB.', checkMode: 'auto', correctAnswer: '39', correctAnswers: ['39', '39°', '39 degrees'], answer: '39°', explanation: 'C and D lie on the same segment relative to chord AB, so angles in the same segment are equal.\n∠ADB = ∠ACB = 39° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="224.57" y2="150.78" stroke="#ea580c" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 174.28,51.06 A 14,14 0 0 0 189.79,55.21" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 171.21,53.63 A 18,18 0 0 0 191.16,58.97" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 103.3,48.12 A 14,14 0 0 0 119.12,45.33" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 101.61,51.74 A 18,18 0 0 0 121.95,48.16" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="185" cy="42.06" r="2.5" fill="#0f1f3d"/><text x="193" y="36.06" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="109.22" cy="35.43" r="2.5" fill="#0f1f3d"/><text x="103.22" y="23.43" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="176.72" y="72.97" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">39°</text><text x="123.12" y="62.91" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In the circle shown, chord PQ = chord RS. Chord PQ subtends an angle of 70° at the centre. Find the angle that chord RS subtends at the centre.', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70', '70°', '70 degrees'], answer: '70°', explanation: 'Equal chords subtend equal angles at the centre.\nRS subtends the same angle as PQ: 70° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="217.94" y1="165" x2="124.37" y2="208.63" stroke="#7c3aed" stroke-width="2.5"/><line x1="100.58" y1="63.7" x2="94.85" y2="55.51" stroke="#ea580c" stroke-width="2"/><line x1="169.04" y1="182.28" x2="173.27" y2="191.35" stroke="#7c3aed" stroke-width="2"/><line x1="140" y1="120" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="217.94" y2="165" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="140" y1="120" x2="124.37" y2="208.63" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 121.21,113.16 A 20,20 0 0 1 140,100" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 165.98,135 A 30,30 0 0 1 134.79,149.54" fill="none" stroke="#7c3aed" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><text x="120.5" y="92.15" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">70°</text><text x="158.6" y="159.88" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="120" y="24" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="217.94" cy="165" r="2.5" fill="#0f1f3d"/><text x="227.94" y="167" font-size="13" fill="#0f1f3d" font-weight="700">R</text><circle cx="124.37" cy="208.63" r="2.5" fill="#0f1f3d"/><text x="130.37" y="224.63" font-size="13" fill="#0f1f3d" font-weight="700">S</text></svg>' },
        { difficulty: 'Medium', question: 'In the circle shown, chord MN = chord XY in the same circle. MN subtends an angle of 30° at the circumference. Find the angle that XY subtends at the circumference.', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30°', '30 degrees'], answer: '30°', explanation: 'Equal chords subtend equal angles at the circumference.\nXY subtends the same angle as MN: 30° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.06" y1="177.85" x2="55.43" y2="89.22" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="155.63" y2="208.63" stroke="#7c3aed" stroke-width="2.5"/><line x1="68.17" y1="132.67" x2="58.32" y2="134.4" stroke="#ea580c" stroke-width="2"/><line x1="186.89" y1="175.88" x2="193.31" y2="183.54" stroke="#7c3aed" stroke-width="2"/><line x1="71.06" y1="177.85" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 211.58,96.72 A 15,15 0 0 1 209.57,89.22" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="224.57" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="234.57" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">V</text><line x1="224.57" y1="150.78" x2="88.38" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155.63" y1="208.63" x2="88.38" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100.28,55.41 A 15,15 0 0 1 94.12,60.13" fill="none" stroke="#7c3aed" stroke-width="2"/><circle cx="88.38" cy="46.28" r="2.5" fill="#0f1f3d"/><text x="80.38" y="36.28" font-size="13" fill="#0f1f3d" font-weight="700">W</text><text x="195.59" y="96.98" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">30°</text><text x="109.08" y="73.25" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><circle cx="71.06" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="51.06" y="181.85" font-size="13" fill="#0f1f3d" font-weight="700">M</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="83.22" font-size="13" fill="#0f1f3d" font-weight="700">N</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="152.78" font-size="13" fill="#0f1f3d" font-weight="700">X</text><circle cx="155.63" cy="208.63" r="2.5" fill="#0f1f3d"/><text x="161.63" y="224.63" font-size="13" fill="#0f1f3d" font-weight="700">Y</text></svg>' },
        { difficulty: 'Hard', question: 'In the circle shown with centre O, points A, B, C and D lie on the circumference, with C and D on the same arc relative to chord AB. ∠ACB = 5x − 4° and ∠ADB = 3x + 10°. Find x, then find the size of ∠ACB.', checkMode: 'auto', correctAnswer: '7,31', correctAnswers: ['7,31', '7,31°', 'x=7,31°'], answer: 'x = 7, ∠ACB = 31°', explanation: 'Angles in the same segment are equal: 5x − 4° = 3x + 10°.\n2x = 14°.\nx = 7°.\n∠ACB = 5(7°) − 4° = 35° − 4° = 31° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="224.57" y2="150.78" stroke="#ea580c" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 174.28,51.06 A 14,14 0 0 0 189.79,55.21" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 171.21,53.63 A 18,18 0 0 0 191.16,58.97" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 103.3,48.12 A 14,14 0 0 0 119.12,45.33" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 101.61,51.74 A 18,18 0 0 0 121.95,48.16" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="185" cy="42.06" r="2.5" fill="#0f1f3d"/><text x="193" y="36.06" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="109.22" cy="35.43" r="2.5" fill="#0f1f3d"/><text x="103.22" y="23.43" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="176.72" y="72.97" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">5x − 4°</text><text x="123.12" y="62.91" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">3x + 10°</text></svg>' },

        // Block 5 — Angle in a semicircle + converse (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In the circle shown, AB is a diameter and P is a point on the circumference. ∠PAB = 27.5°. Find ∠APB, then find ∠PBA.', checkMode: 'auto', correctAnswer: '90,62.5', correctAnswers: ['90,62.5', '90°,62.5°', '90°, 62.5°'], answer: '∠APB = 90°, ∠PBA = 62.5°', explanation: 'Since AB is a diameter, ∠APB = 90° (angle in a semicircle).\nIn triangle APB: 27.5° + 90° + ∠PBA = 180°.\n∠PBA = 180° − 90° − 27.5° = 62.5° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="191.62" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="191.62" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 182.75,50.89 L 187.37,59.76 L 196.24,55.15" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="30" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="191.62" cy="46.28" r="2.5" fill="#0f1f3d"/><text x="197.62" y="36.28" font-size="13" fill="#0f1f3d" font-weight="700">P</text><text x="183.8" y="71.07" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">27.5°</text></svg>' },
        { difficulty: 'Easy', question: 'In the circle shown, chord GH subtends an angle of 90° at point W on the circumference. What can you conclude about chord GH?', checkMode: 'auto', correctAnswer: 'diameter', correctAnswers: ['diameter', 'gh is a diameter', 'it is a diameter'], answer: 'GH is a diameter of the circle', explanation: 'By the converse of the angle-in-a-semicircle theorem, if a chord subtends 90° at a point on the circle, that chord must be a diameter. So GH is a diameter ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="53.07" y1="96.71" x2="226.93" y2="143.29" stroke="#ea580c" stroke-width="2.5"/><line x1="53.07" y1="96.71" x2="132.16" y2="209.66" stroke="#0f1f3d" stroke-width="2.5"/><line x1="226.93" y1="143.29" x2="132.16" y2="209.66" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 126.42,201.47 L 134.61,195.73 L 140.35,203.92" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="53.07" cy="96.71" r="2.5" fill="#0f1f3d"/><text x="33.07" y="100.71" font-size="13" fill="#0f1f3d" font-weight="700">G</text><circle cx="226.93" cy="143.29" r="2.5" fill="#0f1f3d"/><text x="234.93" y="143.29" font-size="13" fill="#0f1f3d" font-weight="700">H</text><circle cx="132.16" cy="209.66" r="2.5" fill="#0f1f3d"/><text x="126.16" y="197.66" font-size="13" fill="#0f1f3d" font-weight="700">W</text><text x="136.67" y="184.06" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">90°</text></svg>' },
        { difficulty: 'Medium', question: 'In the circle shown, AB is a diameter with AB = 29 cm. P is a point on the circumference with AP = 20 cm. Find the size of ∠APB, then find the length of BP.', checkMode: 'auto', correctAnswer: '90,21', correctAnswers: ['90,21', '90°,21cm', '90°, 21 cm'], answer: '∠APB = 90°, BP = 21 cm', explanation: 'AB is a diameter, so ∠APB = 90° (angle in a semicircle).\nTriangle APB is right-angled at P, so by Pythagoras: BP² = AB² − AP² = 29² − 20² = 841 − 400 = 441.\nBP = √441 = 21 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 199.55,65.57 L 202.97,74.97 L 212.36,71.55" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="30" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="214.94" y="52.15" font-size="13" fill="#0f1f3d" font-weight="700">P</text><text x="197.96" y="85.71" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="119.47" y="85.07" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">AP = 20 cm</text><text x="140" y="140" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 29 cm</text><text x="240.51" y="85.6" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In the circle shown with centre O, AB is a diameter. C and D are points on the circumference on the same side of AB, with ∠CAB = 17.5° and ∠DBA = 17.5°. Find ∠ACB, ∠ADB, and ∠ABC.', checkMode: 'auto', correctAnswer: '90,90,72.5', correctAnswers: ['90,90,72.5', '90°,90°,72.5°', '90°, 90°, 72.5°'], answer: '∠ACB = 90°, ∠ADB = 90°, ∠ABC = 72.5°', explanation: 'AB is a diameter, so ∠ACB = 90° and ∠ADB = 90° (angle in a semicircle applies to any point on the circle).\nIn triangle ABC: ∠CAB = 17.5°, ∠ACB = 90°.\n∠ABC = 180° − 90° − 17.5° = 72.5° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="30" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><line x1="50" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="66.28" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="66.28" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 205.14,71.08 L 207.85,79.67 L 216.43,76.96" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><path d="M 63.57,76.96 L 72.15,79.67 L 74.86,71.08" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="213.72" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="221.72" y="60.38" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="66.28" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="58.28" y="58.38" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="73.72" y="110.35" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">17.5°</text><text x="206.28" y="110.35" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">17.5°</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered circle terminology and the key circle theorems — perpendicular bisecting a chord, angle at the centre, angles in the same segment, and the angle in a semicircle.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the angle-at-centre theorem or the semicircle theorem, and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on each circle theorem, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
