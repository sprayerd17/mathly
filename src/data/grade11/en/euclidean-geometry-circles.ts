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
        '<DiagramPlaceholder label="Diagram showing a circle with centre O, chord AB, the angle AOB at the centre highlighted in red, and angle APB at point P on the circumference highlighted in blue, with a dashed reflex angle shown for a second point on the minor arc" />',
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
}
