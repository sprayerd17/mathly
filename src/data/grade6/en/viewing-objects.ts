import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

export const topicData: TopicData = {
  title: 'Viewing Objects',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — COMPOSITE OBJECTS AND THEIR VIEWS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'composite-objects-and-views',
      title: 'Composite Objects and Their Views',
      icon: '📦',
      explanation: `
<p style="margin-bottom:14px;">In earlier grades you learned that a <strong>view</strong> is what you see when you look at an object from one particular <strong>viewing position</strong> — the object never changes, only where you are standing changes what you see. In Grade 6 we apply this idea to <strong>composite objects</strong>: objects built by combining two or more simple 3D shapes into a single structure.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">What is a composite object?</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">A <strong>composite object</strong> is made by joining simpler 3D shapes together. A toy house is a rectangular prism (the walls) combined with a triangular prism (the roof). A pencil is a hexagonal prism combined with a cone (the sharpened tip). A filing cabinet with a step in it might be two rectangular prisms of different sizes stacked together.</p>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">How to view a composite object 🏠</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">Think about each simple part separately, then combine what you would see. For a toy house: the walls (rectangular prism) give a rectangle from the front, and the roof (triangular prism) adds a triangle on top of that rectangle — together they make a pentagon-shaped front view, like the outline of a simple drawing of a house.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Key idea</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">A composite object's view is <strong>not always simply "added together"</strong> the way you might expect. Sometimes one part completely determines the outline (like the roof determining the top of the front view), and sometimes a part is <strong>hidden</strong> behind another part in a particular view. You always have to think carefully about what is actually visible from each position.</p>
</div>`,
      workedExamples: [
        {
          question: 'A toy house is made of a rectangular box (the walls) with a triangular-prism roof on top, ridge running from the front to the back. Describe the front view, side view and top view.',
          steps: [
            '<strong>Front view</strong> — looking straight at the gable end, you see the rectangle of the walls with the triangular roof shape sitting on top of it: a <strong>pentagon</strong> (house-shaped) outline.',
            '<strong>Side view</strong> — looking along the length of the roof ridge, the roof\'s highest point (the ridge) is the same height all the way along, so you cannot see its triangular slope at all — you only see a <strong>plain rectangle</strong> the full height of the walls plus the roof.',
            '<strong>Top view</strong> — looking straight down, you see the rectangular outline of the whole footprint, with a single line down the middle showing where the two roof slopes meet (the ridge line).',
          ],
          answer:
            'Front view: a pentagon (rectangle + triangle). Side view: a plain rectangle. Top view: a rectangle with a centre line marking the ridge.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A toy house (rectangular walls + triangular roof) shown as a simple 3D sketch, with its front view (pentagon), side view (plain rectangle) and top view (rectangle with a centre ridge line) drawn alongside it',
      diagramSvg: '<svg viewBox="0 0 730 190" xmlns="http://www.w3.org/2000/svg"><path d="M45,140 L45,90 L85,50 L125,90 L125,140 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M45,90 L67,74 M125,90 L147,74 M85,50 L107,34 M67,74 L147,74 M107,34 L67,74 M107,34 L147,74 M125,140 L147,124 M147,124 L147,74" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M225,140 L225,90 L265,50 L305,90 L305,140 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="415" y="50" width="60" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="580" y="75" width="90" height="40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="625" y1="75" x2="625" y2="115" stroke="#2563eb" stroke-width="1.5"/><text x="90" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">The object</text><text x="270" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Front view</text><text x="450" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Side view</text><text x="630" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Top view</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SIX VIEWING POSITIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'six-viewing-positions',
      title: 'Front, Back, Left, Right, Above and Below',
      icon: '🧭',
      explanation: `
<p style="margin-bottom:14px;">So far you have described views using just front, side and top. In Grade 6 we describe a viewer's position more precisely, using <strong>six viewing positions</strong> arranged all the way around an object: <strong>front</strong>, <strong>back</strong>, <strong>left</strong>, <strong>right</strong>, <strong>above</strong> and <strong>below</strong>.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Three pairs of opposite positions</div>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Front &amp; back</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Standing at the front, facing the object, gives the <strong>front view</strong>. Walking all the way around to the opposite end gives the <strong>back view</strong>.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Left &amp; right</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Standing at the object's left side gives the <strong>left view</strong>; standing at its right side gives the <strong>right view</strong>. Together with front and back, these four positions form a full circle around the object.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Above &amp; below</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">Looking straight down gives the view from <strong>above</strong> (the familiar top/plan view). Looking straight up from underneath gives the view from <strong>below</strong> — usually hidden because the object is resting on a surface, but it still exists.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Example: a soccer goalpost ⚽</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">A goalpost is two vertical posts joined by a horizontal crossbar. From the <strong>front</strong> you see the full frame: two uprights and a bar across the top. From the <strong>side</strong>, the frame is so thin from that direction that the two posts line up behind each other and you see almost nothing but a single thin upright — the crossbar and the far post are hidden directly behind the near post.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Key idea</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">Opposite positions do not always give matching views. Front and back can look completely different (a box with a picture only on the front), or exactly the same (a symmetrical building), depending on the object. You always have to check, never assume.</p>
</div>`,
      workedExamples: [
        {
          question: 'A cereal box has a picture printed on its front face only, and a nutrition table printed on its back face only. Would the view from the front and the view from the back look the same or different?',
          steps: [
            'The <strong>front view</strong> shows the front face of the box — the picture would be visible.',
            'The <strong>back view</strong> shows the opposite face — the nutrition table would be visible instead, not the picture.',
            'Since these two faces have different things printed on them, the two views look <strong>different</strong>, even though both are plain rectangles in outline.',
          ],
          answer: 'Different — the outline (a rectangle) is the same, but what is printed inside it is different for the front and back views.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A soccer goalpost shown from the front (two upright posts joined by a crossbar, forming an upside-down U shape) and from the side (a single thin upright, since the far post and crossbar are hidden directly behind the near post)',
      diagramSvg: '<svg viewBox="0 0 380 190" xmlns="http://www.w3.org/2000/svg"><path d="M50,140 L50,50 L130,50 L130,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="260" y="50" width="20" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="20" y1="140" x2="160" y2="140" stroke="#9ca3af" stroke-width="1.5"/><line x1="230" y1="140" x2="310" y2="140" stroke="#9ca3af" stroke-width="1.5"/><text x="90" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Front view</text><text x="270" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Side view</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — VIEWS OF CUBE STRUCTURES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'views-of-cube-structures',
      title: 'Views of Cube Structures',
      icon: '🧊',
      explanation: `
<p style="margin-bottom:14px;">A very common type of composite object in Grade 6 is a <strong>cube structure</strong> (or <strong>cube stack</strong>) — a structure built from several identical cubes arranged next to and on top of each other. Working out the views of a cube structure is excellent practice for spatial reasoning.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How to find the views of a cube structure</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">For the <strong>front view</strong>, find the tallest stack of cubes in each column (left-to-right position) — that height is what you see for that column, even if there are shorter stacks behind it.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">For the <strong>side view</strong>, do the same thing but scan from the side — for each row (front-to-back position), find the tallest stack in that row.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">For the <strong>top view</strong>, just record which positions on the ground have a cube stack at all (the footprint) — height does not matter for the top view.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Watch out for this 🧱</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">A taller stack directly behind or beside a shorter one can completely hide the shorter one's true shape from that view. That is exactly why builders and designers still need <strong>more than one view</strong> to describe a structure completely — no single view tells the whole story.</p>
</div>`,
      workedExamples: [
        {
          question: 'A structure is built from 4 cubes in a single row: 2 cubes stacked on top of each other on the left, then 1 cube, then 1 more cube, all standing directly next to each other with no gaps. Describe the front view, side view and top view.',
          steps: [
            '<strong>Front view</strong> — scanning left to right: the first column is 2 cubes tall, the next two columns are each only 1 cube tall. This gives a <strong>step shape</strong>: tall on the left, short on the right.',
            '<strong>Side view</strong> — all the cubes sit in a single row with the same depth (1 cube deep), so looking from the side (end-on), the tallest column (2 cubes) is the only height you can measure — you get a <strong>plain rectangle</strong> 2 cubes tall.',
            '<strong>Top view</strong> — looking straight down, you see 3 squares in a row (the footprint of the 3 columns) — the top view cannot show that the left column is taller.',
          ],
          answer:
            'Front view: a step shape (tall, then short, then short). Side view: a plain rectangle as tall as the tallest column. Top view: 3 squares in a row.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A cube structure with a tall column of 2 cubes on the left and two single cubes to the right, shown as a simple 3D sketch, with its step-shaped front view, plain rectangular side view and 3-square top view drawn alongside it',
      diagramSvg: '<svg viewBox="0 0 730 190" xmlns="http://www.w3.org/2000/svg"><path d="M40,134 L40,86 L64,86 L64,110 L112,110 L112,134 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="88" y1="110" x2="88" y2="134" stroke="#2563eb" stroke-width="1.5"/><path d="M40,86 L62,70 M64,86 L86,70 M62,70 L86,70 M64,110 L86,94 M112,110 L134,94 M86,94 L134,94 M112,134 L134,118 M134,118 L134,94" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M220,134 L220,86 L244,86 L244,110 L292,110 L292,134 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="244" y1="110" x2="244" y2="134" stroke="#2563eb" stroke-width="1.5"/><line x1="268" y1="110" x2="268" y2="134" stroke="#2563eb" stroke-width="1.5"/><rect x="424" y="86" width="24" height="48" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="580" y="100" width="72" height="24" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="604" y1="100" x2="604" y2="124" stroke="#2563eb" stroke-width="1.5"/><line x1="628" y1="100" x2="628" y2="124" stroke="#2563eb" stroke-width="1.5"/><text x="90" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">The object</text><text x="270" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Front view</text><text x="450" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Side view</text><text x="630" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Top view</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — MATCHING VIEWS TO COMPOSITE OBJECTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'matching-views-composite-objects',
      title: 'Matching Views to Composite Objects',
      icon: '🔍',
      explanation: `
<p style="margin-bottom:14px;">When you are given a composite object and several possible views, use a systematic method rather than guessing. Break the object into its parts, work out what each part contributes to each view, then compare your answer to the options.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">A systematic method</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Identify the <strong>simple shapes</strong> that make up the composite object, and how they are joined (side by side, stacked, centred on top).</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Decide whether the viewing position (front, side or top) would show a <strong>step, notch or nested outline</strong> where the parts meet, or whether one part would completely hide the join.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Eliminate options that show the wrong number of parts, the wrong proportions, or details that could not possibly be seen from that position.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Why the top view often looks "nested" 🎯</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">When a smaller box sits centred on top of a bigger box, the top view shows <strong>two rectangles, one inside the other</strong> — the outline of the bigger box (further away, so drawn as the outer rectangle) and the outline of the smaller box (closer to you, drawn inside it). This "nested rectangle" pattern is one of the clearest visual clues that an object is a stacked composite object, not a single simple shape.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Key idea</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">If a composite object is <strong>symmetrical</strong> in every direction (for example, a smaller box centred exactly on top of a bigger square box), its front view and side view can be <strong>identical</strong>, even though the object clearly has depth as well as width. Always check for symmetry before assuming two views must look different.</p>
</div>`,
      workedExamples: [
        {
          question: 'A wide, flat box has a smaller box centred exactly on top of it, like a two-tier cake stand. Both boxes are square when seen from above. Describe the front view, side view and top view.',
          steps: [
            '<strong>Front view</strong> — the wide box gives a low, wide rectangle at the bottom, and the smaller box (centred, so equal amounts stick out on both sides) gives a narrower, taller rectangle on top, in the middle. Together this makes a symmetrical <strong>two-step</strong> shape.',
            '<strong>Side view</strong> — since both boxes are square from above, the side view shows exactly the <strong>same two-step shape</strong> as the front view.',
            '<strong>Top view</strong> — looking down, the smaller box\'s outline sits inside the bigger box\'s outline, both centred on the same point — this gives <strong>two nested (concentric) rectangles</strong>.',
          ],
          answer:
            'Front view and side view: an identical, symmetrical two-step shape. Top view: two nested rectangles, one inside the other.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A two-tier box structure (a wide flat box with a smaller box centred on top) shown as a simple 3D sketch, with its two-step front view, matching two-step side view and nested-rectangle top view drawn alongside it',
      diagramSvg: '<svg viewBox="0 0 730 190" xmlns="http://www.w3.org/2000/svg"><path d="M35,140 L35,105 L65,105 L65,65 L115,65 L115,105 L145,105 L145,140 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M35,105 L55,90 M65,105 L85,90 M65,65 L85,50 M115,65 L135,50 M115,105 L135,90 M145,105 L165,90 M145,140 L165,125 M55,90 L85,90 M85,90 L85,50 M85,50 L135,50 M135,50 L135,90 M135,90 L165,90 M165,90 L165,125" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M215,140 L215,105 L245,105 L245,65 L295,65 L295,105 L325,105 L325,140 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M395,140 L395,105 L425,105 L425,65 L475,65 L475,105 L505,105 L505,140 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="580" y="90" width="100" height="30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="610" y="97" width="40" height="16" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="90" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">The object</text><text x="270" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Front view</text><text x="450" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Side view</text><text x="630" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Top view</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — COMPOSITE BUILDINGS AND EVERYDAY STRUCTURES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'composite-buildings-and-structures',
      title: 'Composite Buildings and Everyday Structures',
      icon: '🏗️',
      explanation: `
<p style="margin-bottom:14px;">Everyday buildings are often composite objects too — a house with an attached garage, a school with a hall joined to the classroom block, or a block of flats with a lower entrance section. Architects rely on views from several positions to plan and describe these structures accurately.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Reading a composite building's views</div>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Front view</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Shows the different <strong>heights</strong> of the joined sections clearly — for example, a step where a taller house section meets a shorter garage section.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Side view</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">If both sections share the same depth (front-to-back distance), the side view often shows only a <strong>plain rectangle</strong> the height of the taller section — the step is hidden from this position.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Top (plan) view</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">Shows the full <strong>floor plan</strong> of both sections joined together, usually with an internal line marking the dividing wall between them.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Working backward from one view 🔄</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">If you are shown only the front view of a building and asked to describe the structure, look for steps, notches or changes in width — each one usually marks the join between two simple parts of a composite object. A single step in a front view almost always means two attached sections of different heights.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Key idea</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">Just like in Grade 4 and 5, a plan (top) view is the most useful view for showing the true <strong>layout</strong> of a structure, because nothing is hidden behind anything else. For composite buildings, the plan view is what lets you see exactly how the sections are joined and how much floor space each one takes up.</p>
</div>`,
      workedExamples: [
        {
          question: 'A house has a taller main section and a shorter garage attached directly to one side, both sections the same depth (front-to-back). Describe the front view, side view and top view of this composite building.',
          steps: [
            '<strong>Front view</strong> — you see two rectangles side by side sharing one edge: a taller rectangle for the house and a shorter rectangle for the garage, forming a clear <strong>step</strong>.',
            '<strong>Side view</strong> — since both sections have the same depth, looking from the side you can only measure the tallest height present at each depth position, which is the house\'s height everywhere — you get a <strong>plain rectangle</strong>, the height of the house, with no step visible.',
            '<strong>Top view</strong> — you see one combined rectangle (the full floor plan), with a line marking the dividing wall between the house and the garage.',
          ],
          answer:
            'Front view: a two-height step shape. Side view: a plain rectangle the height of the taller (house) section. Top view: one rectangle with a dividing wall line.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A house with a shorter garage attached to one side, both the same depth, shown as a simple 3D sketch, with its stepped front view, plain rectangular side view and single divided-rectangle top (plan) view drawn alongside it',
      diagramSvg: '<svg viewBox="0 0 730 190" xmlns="http://www.w3.org/2000/svg"><path d="M40,140 L40,60 L100,60 L100,90 L160,90 L160,140 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="90" x2="100" y2="140" stroke="#2563eb" stroke-width="1.5"/><path d="M40,60 L60,45 M100,60 L120,45 M100,90 L120,75 M160,90 L180,75 M160,140 L180,125 M60,45 L120,45 M120,45 L120,75 M120,75 L180,75 M180,75 L180,125" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M220,140 L220,60 L280,60 L280,90 L340,90 L340,140 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="280" y1="90" x2="280" y2="140" stroke="#2563eb" stroke-width="1.5"/><rect x="430" y="60" width="60" height="80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="575" y="90" width="130" height="30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="640" y1="90" x2="640" y2="120" stroke="#2563eb" stroke-width="1.5"/><text x="90" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">The object</text><text x="270" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Front view</text><text x="450" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Side view</text><text x="630" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Top view</text></svg>',
    },
  ],

  topicPractice: [],

  practiceSets: [

    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Composite objects and views (Easy)
        { difficulty: 'Easy', question: 'What do we call an object that is built by combining two or more simple 3D shapes?', answer: 'A composite object', checkMode: 'auto', correctAnswer: 'A composite object', correctAnswers: ['A composite object', 'composite object', 'a composite object'], explanation: 'An object made by joining two or more simple 3D shapes together is called a composite object.' },
        { difficulty: 'Easy', question: 'A toy house is made of a rectangular prism and a triangular prism. Which part is the roof?', answer: 'The triangular prism', checkMode: 'auto', correctAnswer: 'The triangular prism', correctAnswers: ['The triangular prism', 'triangular prism', 'the triangular prism'], explanation: 'The sloped roof of a toy house is shaped like a triangular prism, while the walls form a rectangular prism.' },
        { difficulty: 'Easy', question: 'Besides front, side and top, name the three other viewing positions used in Grade 6.', answer: 'Back, left and right (and below)', checkMode: 'self', explanation: 'Grade 6 uses six viewing positions in total: front, back, left, right, above (top) and below (bottom).' },
        { difficulty: 'Easy', question: 'Which viewing position is directly opposite the front view?', answer: 'Back view', checkMode: 'auto', correctAnswer: 'Back view', correctAnswers: ['Back view', 'back view', 'the back view'], explanation: 'The back view is taken from the position directly opposite the front — you have walked all the way around to the other end of the object.' },

        // Block 2 — Matching views to composite objects (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A toy house has a triangular roof. Which view shows the roof as a triangle sitting on top of a rectangle (a pentagon shape): the front view or the side view (looking along the ridge)?', answer: 'Front view', checkMode: 'auto', correctAnswer: 'Front view', correctAnswers: ['Front view', 'front view', 'the front view'], explanation: 'Looking at the gable end (front view) shows the full triangular roof shape sitting on the rectangular walls.' },
        { difficulty: 'Medium', question: 'For the same toy house, why does the side view (looking along the ridge) show only a plain rectangle instead of a triangle?', answer: 'Because the roof\'s height is the same all the way along the ridge, so from the side you cannot see the roof slope at all — you only see the maximum height as a flat top.', checkMode: 'self', explanation: 'Looking along the direction of the ridge means the roof\'s peak height is present everywhere along that view, so it appears as a flat-topped rectangle rather than a sloped triangle.' },
        { difficulty: 'Medium', question: 'A smaller box sits centred exactly on top of a bigger box. What shape would you expect the top view to show?', answer: 'Two nested (concentric) rectangles, one inside the other', checkMode: 'self', explanation: 'Looking down on a centred, stacked composite object shows the smaller box\'s outline sitting inside the bigger box\'s outline, forming two nested rectangles.' },
        { difficulty: 'Medium', question: 'A composite object is made of a cube with a smaller cube attached to one of its top corners (not centred). Would its top view be symmetrical or not symmetrical?', answer: 'Not symmetrical', checkMode: 'auto', correctAnswer: 'Not symmetrical', correctAnswers: ['Not symmetrical', 'not symmetrical', 'asymmetrical'], explanation: 'Since the smaller cube is attached off-centre (at a corner), its outline in the top view would sit to one side rather than in the middle, so the top view would not be symmetrical.' },

        // Block 3 — Cube structures (Medium)
        { difficulty: 'Medium', question: 'A cube structure has 3 cubes in a row, each on its own with no stacking (all 1 cube tall). What shape is the front view?', answer: 'A plain rectangle', checkMode: 'auto', correctAnswer: 'A plain rectangle', correctAnswers: ['A plain rectangle', 'rectangle', 'a rectangle'], explanation: 'Since all 3 cubes are the same height, the front view shows one continuous rectangle, 3 cubes wide and 1 cube tall.' },
        { difficulty: 'Medium', question: 'A cube structure has one column that is 3 cubes tall, next to two columns that are each only 1 cube tall. From the front, would this look like a smooth rectangle or a step shape?', answer: 'A step shape', checkMode: 'auto', correctAnswer: 'A step shape', correctAnswers: ['A step shape', 'step shape', 'a step'], explanation: 'Since one column is much taller than the others, the front view shows a clear step: tall on one side, short on the other.' },
        { difficulty: 'Medium', question: 'For a single row of cube columns with different heights (all the same depth of 1 cube), why does the side view always turn out to be a plain rectangle?', answer: 'Because from the side, all the columns line up behind each other in the same 1-cube depth, so you can only see the height of the tallest column — the differences in height between columns are hidden.', checkMode: 'self', explanation: 'The side view collapses the row direction, so only the tallest column\'s height is visible as a single flat-topped rectangle, hiding the individual column heights.' },
        { difficulty: 'Medium', question: 'A cube structure\'s top view shows 4 separate squares in an L-shape. Does the top view tell you anything about the heights of the cube stacks at each position?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'The top view only shows the footprint (which positions have a stack), never the heights of the stacks.' },

        // Block 4 — Matching / identifying composite objects from clues (Medium)
        { difficulty: 'Medium', question: 'A picture shows a wide, low rectangle with a narrower, taller rectangle centred exactly on top of it. What kind of composite object could this be a front view of?', answer: 'A two-tier stacked object, like a small box on a bigger box (e.g. a cake stand or a step pyramid)', checkMode: 'self', explanation: 'A wide base with a narrower shape centred on top is the classic front-view outline of a two-tier stacked composite object.', diagramSvg: '<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><path d="M25,140 L25,105 L55,105 L55,65 L105,65 L105,105 L135,105 L135,140 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'You are told a composite object\'s front view and side view are identical two-step shapes. What can you conclude about the object\'s top-down footprint?', answer: 'That both the bottom and top parts must be the same shape and size in both the width and depth directions (for example, both parts are square), making the object symmetrical from the front and the side.', checkMode: 'self', explanation: 'If front and side views match exactly, the object must have the same proportions in both horizontal directions, so it is symmetrical when viewed from the front or the side.' },
        { difficulty: 'Medium', question: 'A composite object\'s top view shows a single plain rectangle with no nested shapes and no dividing lines. Is this more likely a symmetrical two-tier stack, or two boxes of the same height joined side by side with no step in height?', answer: 'Two boxes of the same height joined side by side', checkMode: 'self', explanation: 'A stacked composite object usually shows nested rectangles in the top view; a single plain rectangle with no internal division suggests the joined parts share the same footprint outline and there is nothing to distinguish in plan.' },
        { difficulty: 'Medium', question: 'Two identical rectangular boxes are placed end to end (not stacked) to make one long composite shape. Would the front view show a step, or a single plain rectangle?', answer: 'A single plain rectangle', checkMode: 'auto', correctAnswer: 'A single plain rectangle', correctAnswers: ['A single plain rectangle', 'plain rectangle', 'a plain rectangle', 'rectangle'], explanation: 'Since both boxes are identical in height and simply placed end to end (not at different heights), the front view is one continuous rectangle with no visible step.' },

        // Block 5 — Composite buildings (Medium)
        { difficulty: 'Medium', question: 'A house with a shorter garage attached shows a step in its front view. Would the top (plan) view usually show a step too, or a smooth single outline with an internal dividing line?', answer: 'A smooth single outline with an internal dividing line', checkMode: 'self', explanation: 'The top view shows the combined floor plan as one outline (since height differences do not appear from directly above), with a line marking where the two sections join.' },
        { difficulty: 'Medium', question: 'Why is the plan (top) view usually the most useful view for an architect planning a composite building?', answer: 'Because it shows the full floor layout of every section from directly above, with nothing hidden behind anything else, making it easy to see exactly how the sections are joined and how much space each one uses.', checkMode: 'self', explanation: 'A plan view reveals the whole footprint without any part being hidden by height differences, which is exactly what is needed for accurate floor planning.' },
        { difficulty: 'Medium', question: 'A single storey house has an attached garage of exactly the same height and the same depth. Would the front view show a visible step between them?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'If both sections are the same height, there is no difference in height to create a visible step in the front view — it would appear as one continuous rectangle (perhaps with an internal line marking the join).' },

        // Block 6 — Multi-part reasoning (Hard)
        { difficulty: 'Hard', question: 'A composite object is a rectangular box with a smaller cube sitting on top, off-centre, closer to the back-right corner (not touching any edge).\na) Would the front view show the small cube as centred, or off-centre?\nb) Would the top view show the small cube\'s square as centred, or closer to one side?', answer: 'a) Off-centre (toward the right)   b) Off-centre (toward the back-right)', checkMode: 'auto', parts: [
          { label: 'a) Position of the small cube in the front view', correctAnswer: 'Off-centre, toward the right', correctAnswers: ['Off-centre, toward the right', 'off-centre toward the right', 'off-centre', 'not centred', 'toward the right'], explanation: 'Since the small cube is closer to the right side, the front view shows it sitting off-centre toward the right, not in the middle.' },
          { label: 'b) Position of the small cube in the top view', correctAnswer: 'Off-centre, toward the back-right', correctAnswers: ['Off-centre, toward the back-right', 'off-centre toward the back-right', 'off-centre', 'not centred', 'toward the back-right'], explanation: 'The top view shows the true footprint position, so the small cube\'s square would appear closer to the back-right corner of the big box\'s outline, not in the middle.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You clearly understand composite objects and how they look from front, back, left, right, above and below.' },
        { minScore: 15, message: 'Great work! You understand most of the ideas about composite objects and their views — review any questions you missed.' },
        { minScore: 10, message: 'Good effort! Go back over the study guide on viewing composite objects, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Composite objects and views (Easy)
        { difficulty: 'Easy', question: 'True or false: a composite object is made from only one simple 3D shape.', answer: 'False', checkMode: 'auto', correctAnswer: 'False', correctAnswers: ['False', 'false'], explanation: 'A composite object is made by combining two or more simple 3D shapes — a single simple shape on its own is not composite.' },
        { difficulty: 'Easy', question: 'Which pair of viewing positions, together with front and back, completes the four positions arranged around an object in a full circle?', answer: 'Left and right', checkMode: 'auto', correctAnswer: 'Left and right', correctAnswers: ['Left and right', 'left and right'], explanation: 'Front, back, left and right are the four viewing positions arranged in a circle around an object at ground level.' },
        { difficulty: 'Easy', question: 'A pencil (before it is sharpened) is a hexagonal prism. Once sharpened, what shape is added to make it a composite object?', answer: 'A cone', checkMode: 'auto', correctAnswer: 'A cone', correctAnswers: ['A cone', 'cone', 'a cone'], explanation: 'Sharpening a pencil adds a cone-shaped tip to the hexagonal prism body, making the pencil a composite object.' },
        { difficulty: 'Easy', question: 'Why is the view from below usually not seen in everyday life?', answer: 'Because most objects rest on a surface (like a table or the ground), which blocks the view from directly underneath.', checkMode: 'self', explanation: 'The bottom of an object is usually resting on a surface, hiding the underneath from view even though the view from below still technically exists.' },

        // Block 2 — Matching views to composite objects (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A toy house\'s front view is a pentagon shape (rectangle + triangle). Which part of the house is responsible for the triangle part of the outline?', answer: 'The roof', checkMode: 'auto', correctAnswer: 'The roof', correctAnswers: ['The roof', 'roof', 'the roof'], explanation: 'The sloped, triangular-prism roof creates the triangle part of the pentagon-shaped front view outline.' },
        { difficulty: 'Medium', question: 'A composite object is a rectangular prism with a triangular-prism roof, ridge running front-to-back. Would the top view show the roof\'s ridge line, or would the ridge line be invisible from directly above?', answer: 'The top view would show the ridge line', checkMode: 'self', explanation: 'Looking straight down, you can see the fold line where the two roof slopes meet, so the ridge appears as a line down the centre of the rectangular footprint.' },
        { difficulty: 'Medium', question: 'A wide box has a narrower box centred on top, but this time the narrower box is much shorter (barely taller than a thin lid). Would the front view still show a clear two-step shape, or would it look almost like a single rectangle?', answer: 'It would look almost like a single rectangle', checkMode: 'self', explanation: 'If the top box is very short, the "step" in height is barely visible, so the overall silhouette looks close to a plain rectangle rather than a clear two-step shape.' },
        { difficulty: 'Medium', question: 'A composite object is made of two identical cubes, one balanced exactly on top of the other, both perfectly aligned. What single simple shape would the front view resemble?', answer: 'A tall rectangle (twice as tall as it is wide)', checkMode: 'self', explanation: 'Since both cubes are the same size and perfectly aligned, there is no step at all — the front view is simply one tall rectangle, twice the height of a single cube.' },

        // Block 3 — Cube structures (Medium)
        { difficulty: 'Medium', question: 'A cube structure has 2 columns side by side: one 4 cubes tall, one 1 cube tall. What is the front view height difference between the two columns?', answer: '3 cubes', checkMode: 'auto', correctAnswer: '3 cubes', correctAnswers: ['3 cubes', '3', 'three cubes'], explanation: 'The height difference is 4 cubes minus 1 cube = 3 cubes.', diagramSvg: '<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="110" width="30" height="20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="100" y="50" width="30" height="80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'For the same structure (columns of 4 cubes and 1 cube, both 1 cube deep, side by side), what would the side view look like?', answer: 'A plain rectangle, 4 cubes tall', checkMode: 'self', explanation: 'Looking from the side (end-on to the row), you can only see the tallest column\'s height, 4 cubes, as a single flat-topped rectangle — the shorter column is hidden in this projection.' },
        { difficulty: 'Medium', question: 'A cube structure is built so every column is exactly the same height. Would the front view show any steps?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'If every column is the same height, the front view is a smooth rectangle with no steps, regardless of how the footprint is arranged.' },
        { difficulty: 'Medium', question: 'Two cube towers of different heights stand apart from each other (with a gap between them), rather than touching. Would the front view show one connected shape, or two separate rectangles?', answer: 'Two separate rectangles', checkMode: 'auto', correctAnswer: 'Two separate rectangles', correctAnswers: ['Two separate rectangles', 'two rectangles', 'separate rectangles'], explanation: 'Since there is a visible gap between the towers, the front view shows two distinct rectangles with a gap between them, not one joined outline.' },

        // Block 4 — Matching / identifying composite objects from clues (Medium)
        { difficulty: 'Medium', question: 'A picture shows a plain, tall rectangle with no steps, no notches and no nested shapes anywhere. What can you conclude — is this more likely a simple single shape, or a very carefully aligned composite object where every part has exactly the same width and depth?', answer: 'It could be either — the picture alone cannot tell them apart', checkMode: 'self', explanation: 'A single tall rectangular prism and a stack of same-sized boxes would both produce an identical plain-rectangle view from the front, so one view alone is not always enough to be sure.' },
        { difficulty: 'Medium', question: 'A rocket-shaped composite object is a cylinder body with a cone nose cone on top. From the front, would you expect a rectangle with a triangle on top, similar to a toy house?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'A cylinder viewed from the front looks like a rectangle, and a cone on top looks like a triangle, giving the same pentagon-style outline as a toy house, even though the actual 3D shapes are different (cylinder and cone, not prisms).', diagramSvg: '<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><path d="M80,140 L80,80 L100,40 L120,80 L120,140 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'A composite object\'s top view shows a rectangle with a small circle centred inside it. What kind of composite object could this be (think of an everyday cylinder-topped object)?', answer: 'A box with a cylinder (like a candle, a cup, or a tin) standing centred on top of it', checkMode: 'self', explanation: 'A rectangle (the box\'s footprint) with a circle inside (the cylinder\'s footprint) matches a composite object made of a box with a cylindrical part centred on top.' },
        { difficulty: 'Medium', question: 'Why can it sometimes be difficult to identify a composite object correctly from only its top view?', answer: 'Because the top view never shows height, so several very different composite objects (with different heights or numbers of stacked parts) can share the exact same footprint outline.', checkMode: 'self', explanation: 'Since the top view ignores height completely, it cannot distinguish between composite objects that share the same footprint but differ in how tall each part is.' },

        // Block 5 — Composite buildings (Medium)
        { difficulty: 'Medium', question: 'A block of flats has a taller main tower and a shorter, wider entrance section attached at ground level, both sharing the same depth. Which view would most clearly show the height difference between the tower and the entrance?', answer: 'Front view (or side view showing the length of the entrance)', checkMode: 'self', explanation: 'Since both sections share the same depth, the front view (or a side view along the width of the entrance section) shows the clearest step between the tall tower and the shorter entrance.' },
        { difficulty: 'Medium', question: 'A school hall is attached to the side of the classroom block, and the hall is both taller and set further back than the classroom block. Would a simple front view alone be enough to fully describe this layout?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Since the hall is set further back (a depth difference) as well as being taller, a front view alone cannot show the depth offset — a top (plan) view would be needed as well.' },
        { difficulty: 'Medium', question: 'On a plan (top) view of a house and garage, what typically marks the boundary between the two sections?', answer: 'An internal line showing the dividing wall', checkMode: 'self', explanation: 'A plan view usually shows the combined outline of the whole building with an internal line marking where the dividing wall between sections is.' },

        // Block 6 — Multi-part reasoning (Hard)
        { difficulty: 'Hard', question: 'A composite cube structure has 5 cubes: a row of 3 cubes along the front (each 1 cube tall), plus 2 more cubes stacked directly on top of the leftmost cube in that row (making that column 3 cubes tall in total).\na) What shape is the front view?\nb) What shape is the top view?', answer: 'a) A step shape (tall column on the left, 2 short columns on the right)   b) 3 squares in a row (footprint), showing no height information', checkMode: 'auto', parts: [
          { label: 'a) Shape of the front view', correctAnswer: 'A step shape (tall on the left, short on the right)', correctAnswers: ['A step shape (tall on the left, short on the right)', 'step shape', 'a step shape'], explanation: 'The leftmost column is 3 cubes tall while the other two are only 1 cube tall, so the front view shows a clear step down from left to right.' },
          { label: 'b) Shape of the top view', correctAnswer: '3 squares in a row', correctAnswers: ['3 squares in a row', 'three squares in a row', '3 squares'], explanation: 'The footprint is unchanged by the extra stacked cubes — there are still only 3 cube positions along the row, so the top view shows 3 squares in a row.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You clearly understand composite objects and how they look from front, back, left, right, above and below.' },
        { minScore: 15, message: 'Great work! You understand most of the ideas about composite objects and their views — review any questions you missed.' },
        { minScore: 10, message: 'Good effort! Go back over the study guide on viewing composite objects, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Composite objects and views (Easy)
        { difficulty: 'Easy', question: 'What is the name of the viewing position when you look straight down on an object from above?', answer: 'Above (top/plan view)', checkMode: 'auto', correctAnswer: 'Above', correctAnswers: ['Above', 'above', 'top view', 'the top view', 'plan view'], explanation: 'Looking straight down from above is called the view from above, also known as the top or plan view.' },
        { difficulty: 'Easy', question: 'Complete: front and back are one pair of opposite positions; left and right are another pair; ______ and ______ are the third pair.', answer: 'Above and below', checkMode: 'auto', correctAnswer: 'Above and below', correctAnswers: ['Above and below', 'above and below'], explanation: 'The three pairs of opposite viewing positions are front/back, left/right, and above/below.' },
        { difficulty: 'Easy', question: 'A filing cabinet is made from two rectangular prisms of different sizes stacked together. Is this a composite object?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Since it is made by combining two simple 3D shapes (two rectangular prisms), it is a composite object.' },
        { difficulty: 'Easy', question: 'Which viewing position is directly opposite the left view?', answer: 'Right view', checkMode: 'auto', correctAnswer: 'Right view', correctAnswers: ['Right view', 'right view', 'the right view'], explanation: 'Left and right are opposite viewing positions around an object.' },

        // Block 2 — Matching views to composite objects (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Which view of a toy house (walls + triangular roof, ridge front-to-back) would show only a plain rectangle, with the roof\'s peak looking flat rather than pointed?', answer: 'Side view (looking along the ridge)', checkMode: 'self', explanation: 'Looking along the direction the ridge runs shows the roof\'s maximum height everywhere, so it appears as a flat-topped plain rectangle.' },
        { difficulty: 'Medium', question: 'A composite object\'s top view shows two nested rectangles. What does this tell you about how the object is built?', answer: 'It tells you the object is a stacked composite object, with a smaller part centred on top of a larger part.', checkMode: 'self', explanation: 'Nested rectangles in a top view are the classic sign of a smaller shape sitting centred on top of a larger one.', diagramSvg: '<svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="40" width="130" height="100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="50" y="60" width="80" height="60" fill="none" stroke="#2563eb" stroke-width="1.5"/></svg>' },
        { difficulty: 'Medium', question: 'A box has a smaller box attached to its side (not stacked on top, but joined at the same height, side by side). Would the top view show nested rectangles, or a single wider rectangle with an internal dividing line?', answer: 'A single wider rectangle with an internal dividing line', checkMode: 'self', explanation: 'Since the boxes are joined side by side at the same height (not stacked), the top view shows one combined outline with a line marking the join, not nested shapes.' },
        { difficulty: 'Medium', question: 'A composite object made of a box with a cone centred on top would have which shape as its front view: a pentagon (rectangle + pointed triangle) or a rectangle with a flat top?', answer: 'A pentagon (rectangle + pointed triangle)', checkMode: 'auto', correctAnswer: 'A pentagon (rectangle + pointed triangle)', correctAnswers: ['A pentagon (rectangle + pointed triangle)', 'pentagon', 'a pentagon', 'rectangle with a triangle on top'], explanation: 'A cone viewed from the front (or side) shows a pointed triangle, so a box with a centred cone on top gives a pentagon-shaped front view, just like the toy house.' },

        // Block 3 — Cube structures (Medium)
        { difficulty: 'Medium', question: 'A cube structure has 3 columns in a row with heights 1, 3 and 1 (short, tall, short). Describe the shape of the front view.', answer: 'A shape that is short, then rises to a tall peak in the middle, then drops back down to short — like a narrow tower between two low blocks', checkMode: 'self', explanation: 'With heights 1, 3, 1 across the row, the front view shows a low step up to a tall middle column, then a step back down — a peak shape in the middle.' },
        { difficulty: 'Medium', question: 'For the same structure (heights 1, 3, 1 in a row, all 1 cube deep), what would the side view look like?', answer: 'A plain rectangle, 3 cubes tall (the height of the tallest column)', checkMode: 'self', explanation: 'From the side, only the tallest column\'s height (3 cubes) is visible as a flat-topped rectangle — the shorter columns on either side are hidden in this view.' },
        { difficulty: 'Medium', question: 'True or false: the top view of a cube structure can be used to work out the exact height of every column.', answer: 'False', checkMode: 'auto', correctAnswer: 'False', correctAnswers: ['False', 'false'], explanation: 'The top view only shows the footprint (which positions have cubes), never the heights — you cannot work out column heights from the top view alone.' },
        { difficulty: 'Medium', question: 'Two cube structures have exactly the same front view and exactly the same side view, but different top views. Can they still be different structures overall?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Since the footprint (top view) is different, the structures are arranged differently even if their front and side silhouettes happen to match — this shows why more than one view is often needed.' },

        // Block 4 — Matching / identifying composite objects from clues (Medium)
        { difficulty: 'Medium', question: 'A composite object\'s front view is a plain rectangle, but its top view is an L-shape. What does this tell you about the heights of the different parts of the footprint?', answer: 'All the parts of the L-shaped footprint must be exactly the same height, since the front view shows no steps at all.', checkMode: 'self', explanation: 'A plain rectangle front view (no steps) combined with an L-shaped top view means the object has an irregular footprint but a completely uniform height everywhere.', diagramSvg: '<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><path d="M40,90 L40,30 L70,30 L70,60 L130,60 L130,90 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="70" y1="60" x2="70" y2="90" stroke="#2563eb" stroke-width="1.5"/><line x1="100" y1="60" x2="100" y2="90" stroke="#2563eb" stroke-width="1.5"/></svg>' },
        { difficulty: 'Medium', question: 'You are given a composite object\'s front view only, showing a wide short rectangle with a narrow tall rectangle centred on top. Could you tell from this view alone whether the top view would be nested rectangles or an L-shape?', answer: 'No — the front view alone cannot tell you the depth arrangement of the parts, only their width and height.', checkMode: 'self', explanation: 'The front view collapses depth information completely, so it cannot distinguish between a centred stack (nested rectangles in plan) and an off-centre or side-by-side arrangement (which could give a different top view shape).' },
        { difficulty: 'Medium', question: 'A composite object is a box with a smaller box on top, but the smaller box hangs over the edge on one side rather than being centred or fully contained. Would this be visible in the front view, the top view, or both?', answer: 'Both', checkMode: 'auto', correctAnswer: 'Both', correctAnswers: ['Both', 'both'], explanation: 'An overhang to one side would show up as an asymmetrical step in the front view AND as an off-centre (non-nested) outline in the top view.' },
        { difficulty: 'Medium', question: 'Why do designers often provide a front view, a side view AND a top view of a new composite object, rather than just one?', answer: 'Because no single view shows every feature of a composite object — height differences, footprint shape and symmetry can each be hidden in some views and only revealed in others, so multiple views are needed for a complete description.', checkMode: 'self', explanation: 'Each view reveals different information and hides other information, so a full and accurate description of a composite object usually requires more than one view.' },

        // Block 5 — Composite buildings (Medium)
        { difficulty: 'Medium', question: 'A block of classrooms has a taller staffroom section attached at one end, with the staffroom set further back (greater depth) than the classrooms. Which view would best show that the staffroom is set further back: the front view or the top (plan) view?', answer: 'Top (plan) view', checkMode: 'auto', correctAnswer: 'Top (plan) view', correctAnswers: ['Top (plan) view', 'top view', 'plan view', 'the top view', 'the plan view'], explanation: 'Depth differences (how far back a section is set) can only be seen accurately in a plan (top) view, since front and side views do not show depth directly.', diagramSvg: '<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><path d="M30,40 L150,40 L150,130 L120,130 L120,70 L30,70 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'Why might two different composite buildings have identical front views but very different top (plan) views?', answer: 'Because the front view only shows width and height, not depth, so buildings can have the exact same outline from the front while being arranged very differently in terms of depth and floor layout.', checkMode: 'self', explanation: 'Front views ignore depth entirely, so buildings with completely different floor plans (top views) can still share an identical front-view silhouette.' },
        { difficulty: 'Medium', question: 'A garage is attached to a house so that its roofline exactly matches the height of the house wall (no step at all). Would the front view show any evidence that the garage is a separate section?', answer: 'Possibly only a thin vertical line marking the join, but no step in height', checkMode: 'self', explanation: 'If there is no height difference, the front view shows a smooth outline with, at most, a line marking where the two sections are joined — there is no visible step.' },

        // Block 6 — Multi-part reasoning (Hard)
        { difficulty: 'Hard', question: 'A composite object is built from a wide, flat rectangular base with a tall, narrow cylinder standing upright in the exact centre of the base (like a trophy).\na) Would the front view and the side view be identical or different?\nb) Would the top view show one circle, or a rectangle with a circle centred inside it?', answer: 'a) Identical (since a cylinder looks the same from every side)   b) A rectangle with a circle centred inside it', checkMode: 'auto', parts: [
          { label: 'a) Front view compared to side view', correctAnswer: 'Identical', correctAnswers: ['Identical', 'identical', 'the same', 'same'], explanation: 'A cylinder looks exactly the same (a rectangle) from every direction around it, so as long as the base is also symmetrical, the front and side views of the whole trophy match.' },
          { label: 'b) Shape shown in the top view', correctAnswer: 'A rectangle with a circle centred inside it', correctAnswers: ['A rectangle with a circle centred inside it', 'rectangle with a circle inside', 'a rectangle with a centred circle'], explanation: 'Looking straight down, you see the rectangular base\'s outline with the cylinder\'s circular cross-section centred inside it.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You clearly understand composite objects and how they look from front, back, left, right, above and below.' },
        { minScore: 15, message: 'Great work! You understand most of the ideas about composite objects and their views — review any questions you missed.' },
        { minScore: 10, message: 'Good effort! Go back over the study guide on viewing composite objects, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

  ],
}
