import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Viewing Objects',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS A VIEW?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-view',
      title: 'What Is a View?',
      icon: '👀',
      explanation: `
<p style="margin-bottom:14px;">When you look at an object, what you see depends on <strong>where you are standing</strong>. The picture your eyes take in from one spot is called a <strong>view</strong>. Walk around the same object and you will see something different every time — even though the object itself never changes.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Try it yourself 🧢</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">Put a cap on the table. Look at it straight from the front, then crouch down and look at it from the side, then stand up and look down at it from above. Three completely different pictures — but it is the same cap the whole time.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">The three views we use</div>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Front view</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">What you see when you stand directly <strong style="color:#1e40af;">in front of</strong> the object, looking straight at it.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Side view</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">What you see when you stand at the <strong style="color:#dc2626;">side</strong> of the object, looking at it from the left or the right.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Top view</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">What you see when you look <strong style="color:#16a34a;">straight down</strong> on the object from above. This is also called a <strong>plan view</strong>.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Key idea</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">The object does not change — only your <strong>position</strong> changes. A view always matches a <strong>viewpoint</strong>: where the viewer is standing and which way they are looking.</p>
</div>`,
      workedExamples: [
        {
          question: 'A shoe is placed on a table. Describe what you would expect to see in its front view, side view and top view.',
          steps: [
            '<strong style="color:#1e40af;">Front view</strong> — standing in front of the shoe (facing the toe), you see the rounded toe shape.',
            '<strong style="color:#dc2626;">Side view</strong> — standing at the side, you see the long outline of the shoe from heel to toe, including the laces and the curve of the sole.',
            '<strong style="color:#16a34a;">Top view</strong> — looking straight down, you see the outline of the shoe from above, like a footprint shape with the laces visible.',
          ],
          answer:
            'Front view: the rounded toe shape. Side view: the full outline from heel to toe. Top view: a footprint-like outline seen from above.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A simple cap or shoe shown three times, each time with a small stick-figure viewer positioned at a different spot (in front, at the side, above) with an arrow pointing at the object, and the resulting view sketched next to each viewer',
      videoPlaceholder:
        'Short video of a real object such as a shoe being viewed from the front, side and top, showing how the picture changes as the viewer moves',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — MATCHING VIEWS TO EVERYDAY OBJECTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'matching-views-to-objects',
      title: 'Matching Views to Everyday Objects',
      icon: '🔍',
      explanation: `
<p style="margin-bottom:14px;">Once you know there are front, side and top views, you can practise <strong>matching a view to the object it belongs to</strong>. This means looking carefully at a picture and asking: "Which part of the object am I looking at, and from where?"</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How to match a view</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Look at the <strong>whole object</strong> first and notice its overall shape.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Ask yourself: does this picture show the object from the <strong>front</strong>, the <strong>side</strong>, or the <strong>top</strong>?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Check which features are <strong>visible</strong> and which are <strong>hidden</strong> in that view — this is often the biggest clue.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Example: a cup ☕</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li><strong>Front view:</strong> you can see the tall, curved outline of the cup — and the handle sticking out to one side</li>
    <li><strong>Side view (from the handle side):</strong> the handle overlaps the body of the cup, so the outline looks slightly different</li>
    <li><strong>Top view:</strong> you look down into the cup and see two circles — the rim of the cup and the opening — plus the handle poking out</li>
  </ul>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Watch out for this common mistake</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">The <strong>top view</strong> often looks the most different from what you would expect, because you cannot see the height of the object at all — only its outline from above. A tall box and a short box with the same base look <strong>identical</strong> from the top.</p>
</div>`,
      workedExamples: [
        {
          question: 'A closed shoebox sits on a table. Which view would show two circles if there was a round hat inside it, resting flat on its brim, and the lid was removed?',
          steps: [
            'With the lid off, look <strong style="color:#16a34a;">straight down</strong> into the box — this is the top view.',
            'A hat resting on its brim shows a <strong>circle</strong> for the brim and a smaller circle for the top of the crown, both visible from directly above.',
            'From the front or side, the hat would show its curved outline and height instead, not two circles.',
          ],
          answer: 'The top view — looking straight down shows the round brim and crown as two circles.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A single everyday object such as an apple, drawn once in full, with three small labelled frames beside it (front, side, top) each showing the correct outline the object would produce from that viewpoint, without stating which is which is "correct" in the question text',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — IDENTIFYING OBJECTS FROM A GIVEN VIEW
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'identifying-objects-from-a-view',
      title: 'Identifying Objects From a Given View',
      icon: '🧩',
      explanation: `
<p style="margin-bottom:14px;">Sometimes you are given a <strong>single view</strong> — just one picture — and you have to work out which real object it could be, or which view (front, side or top) it must be. This is like solving a small puzzle using only the clues in front of you.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Clues that help you decide</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:150px;text-align:center;">Round outline</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">Often means you are looking at a <strong>top view</strong> of something round, like the top of a cup or an apple seen from above.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:150px;text-align:center;">Tall, narrow shape</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">Usually a <strong>front</strong> or <strong>side</strong> view, since height only shows up when you look at an object from the side or the front, not from above.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:150px;text-align:center;">Missing feature</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">If a handle, strap or other feature is missing from a view, that view is probably from the side <strong>opposite</strong> to where that feature is.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Working backward 🔄</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">If you are shown just one view and asked "what object is this?" or "which view is this?", picture the object in your mind and imagine walking around it. Ask which position you would need to stand in to see exactly that picture.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Key idea</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">A single view rarely tells you everything about an object. That is why builders, artists and scientists often draw or photograph an object from <strong>more than one</strong> viewpoint — each view fills in information the others leave out.</p>
</div>`,
      workedExamples: [
        {
          question: 'You are shown a picture of a triangle shape with laces near the top. Is this most likely the front view, side view or top view of a shoe?',
          steps: [
            'A shoe seen from the <strong style="color:#dc2626;">side</strong> shows its long outline from heel to toe, not a simple triangle.',
            'A shoe seen from the <strong style="color:#16a34a;">top</strong> shows a rounded, elongated footprint shape, not a triangle either.',
            'A shoe seen from the <strong style="color:#1e40af;">front</strong> (facing the toe) shows the narrower, more triangular-looking front of the shoe, with the laces near the top of the picture.',
          ],
          answer: 'The front view — it shows the narrower front of the shoe with the laces visible near the top.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — VIEWS OF SCENES, CLASSROOMS AND BUILDINGS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'views-of-scenes-and-buildings',
      title: 'Views of Scenes, Classrooms and Buildings',
      icon: '🏫',
      explanation: `
<p style="margin-bottom:14px;">Views are not only used for small objects like cups and shoes. The same idea works for <strong>bigger scenes</strong> too — a classroom, a simple building, or even a school field. This is closely linked to the map skills you learn in Geography.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Views of bigger spaces</div>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Side view</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Standing at the door of a classroom and looking straight in, you see desks, chairs and the chalkboard from the side — some things blocked behind others.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Plan view</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">Looking straight down on the same classroom from above (like a bird flying over it) you see the outline and position of every desk and chair, with nothing hidden behind anything else. This is why maps are drawn as plan views.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Why plan views are useful 🗺️</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">A plan (top) view of a school field shows exactly where the netball court, the tuck shop and the gate are positioned relative to each other — without any buildings or trees blocking the view. This is exactly how a map works.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Key idea</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">Whether you are looking at a small object or a whole school field, the same rule applies: your <strong>view</strong> depends on your <strong>viewpoint</strong>. Changing where you stand — or looking down instead of across — always changes what you see.</p>
</div>`,
      workedExamples: [
        {
          question: 'Why would an architect draw a plan (top) view of a new classroom before it is built, instead of only a side view?',
          steps: [
            'A <strong style="color:#dc2626;">side view</strong> only shows what is visible from one position, with some furniture or walls hidden behind others.',
            'A <strong style="color:#16a34a;">plan view</strong> shows the whole floor from above, so every wall, door and piece of furniture can be positioned accurately without anything blocking anything else.',
            'This makes a plan view far more useful for planning exactly where things should go.',
          ],
          answer:
            'A plan view shows the full layout from above with nothing hidden, which makes it much easier to plan where walls, doors and furniture should go.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A simple classroom scene shown twice — once as a side view (desks, chairs and chalkboard drawn from the doorway, with some desks partly hidden behind others) and once as a plan/top view (the same desks and chairs drawn as simple rectangles positioned on the floor, all fully visible, like a simple map)',
      videoPlaceholder:
        'Short video showing a toy classroom or model building filmed from a side angle and then from directly above, linking the top view to how maps are drawn',
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
        // Block 1 — What is a view? (Easy)
        { difficulty: 'Easy', question: 'What do we call the picture you see when you look at an object from one particular spot?', checkMode: 'auto', options: ['A viewpoint', 'A view', 'A shape', 'A diagram'], correctIndex: 1, explanation: 'The picture you see from a particular spot is called a view. A viewpoint is the position you\'re standing in, not the picture itself — and the object\'s shape stays the same no matter where you look from.' },
        { difficulty: 'Easy', question: 'Which three views are used to describe how an everyday object looks?', checkMode: 'auto', options: ['Front view, side view, top view', 'Front view, back view, top view', 'Left view, right view, top view', 'Front view, side view, inside view'], correctIndex: 0, explanation: 'The three views used are the front view, the side view and the top view (also called the plan view). "Back view" and "inside view" are not among the three standard views, and naming both sides (left and right) leaves out the front view entirely.' },
        { difficulty: 'Easy', question: 'If you stand directly in front of a box and look straight at it, which view are you seeing?', checkMode: 'auto', options: ['Top view', 'Side view', 'Front view', 'Plan view'], correctIndex: 2, explanation: 'Standing directly in front of an object and looking straight at it gives you the front view. The top view (also called the plan view) would mean looking straight down from above, and the side view would mean standing to the left or right.' },
        { difficulty: 'Easy', question: 'What is another name for the top view?', checkMode: 'auto', options: ['Side view', 'Front view', 'Cross-section', 'Plan view'], correctIndex: 3, explanation: 'The top view is also called the plan view, because you are looking straight down like on a map plan. The front and side views are different viewpoints, not another name for the top view.' },

        // Block 2 — Matching views (Easy-Medium)
        { difficulty: 'Easy', question: 'Does an object change shape when you walk around it and look at it from a different spot?', checkMode: 'auto', options: ['Yes, the object physically changes shape as you move', 'No, only the picture you see changes, not the object itself', 'Yes, but only if the object is round', 'No, because the object stops existing between views'], correctIndex: 1, explanation: 'The object itself never changes — only your viewpoint changes, so you see a different picture (view) of the same object.' },
        { difficulty: 'Medium', question: 'A cup has a handle on one side. From which view would you be completely unable to see the handle?', checkMode: 'auto', options: ['The view from the same side as the handle', 'The top view, looking straight down', 'The view from the side directly opposite the handle', 'The front view, facing the body of the cup'], correctIndex: 2, explanation: 'Looking from the side directly opposite the handle, the handle is completely hidden behind the body of the cup. From the top you would actually still see it poking out to one side, and from the same side or the front it would be at least partly visible.' },
        { difficulty: 'Medium', question: 'You look straight down into an open cup. What two round shapes would you expect to see?', checkMode: 'auto', options: ['The rim of the cup and the opening (the inner circle)', 'The handle and the base of the cup', 'The rim of the cup and its shadow on the table', 'Two identical handles on opposite sides'], correctIndex: 0, explanation: 'Looking straight down into a cup (the top view) shows the outer rim as one circle and the inner opening as a second circle. The handle is not round, and a cup normally has only one handle.' },
        { difficulty: 'Medium', question: 'A closed cardboard box is shaped like a rectangular prism. Would its top view show a circle or a rectangle?', checkMode: 'auto', options: ['A circle, because all top views are round', 'A triangle, because you are looking down at a corner', 'A rectangle, matching the flat top face of the box', 'A square, no matter what shape the box is'], correctIndex: 2, explanation: 'Looking straight down on a rectangular prism shows the flat rectangular top face — a rectangle, not a circle, triangle, or (necessarily) a square.' },

        // Block 3 — Reasoning about what is visible (Medium)
        { difficulty: 'Medium', question: 'Why does the top view of an object never show its height?', checkMode: 'auto', options: ['Because height can only be measured with a ruler, never seen in any view', 'Because the top view actually does show height, just upside down', 'Because tall objects have no top surface to look down onto', 'Because looking straight down only shows the flat outline of the top surface, not how tall the object is'], correctIndex: 3, explanation: 'A top view shows width and length (the outline from above) but not height, since height can only be judged by looking at an object from the front or side.' },
        { difficulty: 'Medium', question: 'A tall drinking glass and a short, wide tumbler both have a circular base of the same size. Would their top views look the same or different?', checkMode: 'auto', options: ['Different, because the tall glass has a bigger top view', 'The same, because the top view only shows the base outline, not the height', 'Different, because height always changes the top view', 'The same, but only if both glasses are empty'], correctIndex: 1, explanation: 'Since the top view only shows the outline from above, and both bases are the same size circle, their top views would look identical even though their heights differ.' },
        { difficulty: 'Medium', question: 'Which view of a party hat (a cone shape) would show a circle?', checkMode: 'auto', options: ['The side view', 'The front view', 'The top view', 'None of the views show a circle'], correctIndex: 2, explanation: 'Looking straight down on a cone-shaped hat shows the circular brim as a circle. From the side or front, you would see a triangle-like outline instead.' },
        { difficulty: 'Medium', question: 'An apple sits on a table. From the front view you see a rounded outline. What would you expect the top view to look like?', checkMode: 'auto', options: ['A plain rectangle, since the top view is always flat-edged', 'A completely different, jagged outline', 'Also a rounded, roughly circular outline', 'A single straight line, since fruit has no visible top'], correctIndex: 2, explanation: 'Since an apple is round from every direction, both the front view and the top view show a similar rounded outline.' },

        // Block 4 — Identifying objects/views from clues (Medium)
        { difficulty: 'Medium', question: 'You are shown a picture with a narrow, tall outline and no round shapes at all. Is this more likely a top view or a side view?', checkMode: 'auto', options: ['A top view, since top views are always narrow', 'A side view, since a narrow, tall outline suggests height', 'A top view, since it shows the base shape', 'Neither — this could only be a front view'], correctIndex: 1, explanation: 'A top view usually shows the outline of the base (often rounder or flatter), while a narrow, tall outline suggesting height is more typical of a front or side view.' },
        { difficulty: 'Medium', question: 'A picture shows a shoe\'s long outline from heel to toe, including the laces along the top edge. Which view is this?', checkMode: 'auto', options: ['Top view', 'Front view', 'Side view', 'Plan view (looking straight down)'], correctIndex: 2, explanation: 'The full outline from heel to toe, with laces visible along the top edge, is what you see standing at the side of the shoe. The top view would instead show a footprint-shaped outline, and the front view would show only the narrow toe end.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><path d="M30 105 C30 85 40 70 60 65 C80 60 100 62 120 58 C145 53 165 48 185 55 C195 58 195 75 185 85 C160 100 100 108 60 108 C45 108 32 108 30 105 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="95" y1="60" x2="80" y2="80" stroke="#2563eb" stroke-width="2"/><line x1="110" y1="58" x2="95" y2="80" stroke="#2563eb" stroke-width="2"/><line x1="125" y1="58" x2="112" y2="80" stroke="#2563eb" stroke-width="2"/></svg>' },
        { difficulty: 'Medium', question: 'A picture shows a rounded, footprint-shaped outline with the laces visible across the middle. Which view is this most likely to be?', checkMode: 'auto', options: ['Front view', 'Side view', 'Back view', 'Top view'], correctIndex: 3, explanation: 'Looking straight down on a shoe gives a footprint-shaped outline with the laces visible across the top surface — this is the top view. The side view would instead show the long heel-to-toe outline.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><path d="M110 15 C150 15 170 35 170 65 C170 95 155 120 110 125 C65 120 50 95 50 65 C50 35 70 15 110 15 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="45" x2="130" y2="45" stroke="#2563eb" stroke-width="2"/><line x1="85" y1="60" x2="135" y2="60" stroke="#2563eb" stroke-width="2"/><line x1="82" y1="75" x2="138" y2="75" stroke="#2563eb" stroke-width="2"/></svg>' },
        { difficulty: 'Medium', question: 'You are given only the side view of an object and asked to identify it. Why might this be difficult sometimes?', checkMode: 'auto', options: ['Because a single view only shows part of the shape, so different objects can look similar from just one viewpoint', 'Because side views are always blurry compared to front views', 'Because it is never possible to identify an object from any single view', 'Because the side view shows the object\'s exact height in centimetres, which is confusing'], correctIndex: 0, explanation: 'One view alone does not always give enough information — that is why multiple views are often used together. It\'s not impossible to identify an object from one view, just sometimes ambiguous.' },

        // Block 5 — Scenes, classrooms, buildings (Medium)
        { difficulty: 'Medium', question: 'What subject at school also uses the idea of plan (top) views, especially for maps?', checkMode: 'auto', options: ['Music', 'Physical Education', 'History', 'Geography'], correctIndex: 3, explanation: 'Plan views link closely to Geography, where maps are drawn as a view looking straight down from above.' },
        { difficulty: 'Medium', question: 'Why is a plan view of a classroom more useful than a side view for showing exactly where every desk is positioned?', checkMode: 'auto', options: ['Because a plan view shows the whole floor from above with nothing hidden, while a side view can have desks hidden behind others', 'Because a plan view is always drawn to a bigger scale than a side view', 'Because a side view shows more desks than a plan view', 'Because a plan view shows the height of every desk, which a side view cannot'], correctIndex: 0, explanation: 'From the side, furniture can block your view of other furniture. From directly above, every object\'s position is visible at once — though a plan view actually shows less about height, not more.' },
        { difficulty: 'Medium', question: 'Standing at the classroom door and looking straight in, are you more likely to get a side view or a plan view of the room?', checkMode: 'auto', options: ['A plan view, because you can see the whole room', 'A side view, because you are looking across the room, not down on it', 'A plan view, because doorways always give a bird\'s-eye view', 'Neither — standing at a doorway gives no usable view'], correctIndex: 1, explanation: 'Standing at the door and looking across the room (not down on it) gives a side view, not a plan view. A plan view would require looking straight down from above, like a bird flying over the room.' },

        // Block 6 — Multi-part reasoning (Hard)
        { difficulty: 'Hard', question: 'A closed box (rectangular prism) stands on a table. It is taller than it is wide, and only its front face has a picture printed on it.\na) Which view would show the printed picture: the front view or the top view?\nb) Which view would show only a plain rectangle with no picture: the side view or the same front view?', answer: 'a) Front view   b) Side view', checkMode: 'auto', parts: [
          { label: 'a) View showing the printed picture', correctAnswer: 'Front view', correctAnswers: ['Front view', 'front view', 'the front view'], explanation: 'The picture is on the front face, so only the front view shows it.' },
          { label: 'b) View showing a plain rectangle', correctAnswer: 'Side view', correctAnswers: ['Side view', 'side view', 'the side view'], explanation: 'The side face has no picture on it, so the side view shows a plain rectangle.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You clearly understand how front, side and top views work for everyday objects and scenes.' },
        { minScore: 15, message: 'Great work! You understand most of the ideas about views — review any questions you missed.' },
        { minScore: 10, message: 'Good effort! Go back over the study guide on views and viewpoints, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — What is a view? (Easy)
        { difficulty: 'Easy', question: 'True or false: the object changes shape depending on where the viewer stands.', checkMode: 'auto', options: ['False — the object stays the same; only what the viewer sees changes', 'True — the object bends slightly as the viewer moves', 'True — but only for round objects', 'False — because viewers cannot actually move around real objects'], correctIndex: 0, explanation: 'The object stays exactly the same. Only the viewer\'s position changes, which changes what they see — it does not physically bend or change shape.' },
        { difficulty: 'Easy', question: 'If you crouch down and look at an object from its left or right, which view are you seeing?', checkMode: 'auto', options: ['Top view', 'Side view', 'Front view', 'Plan view'], correctIndex: 1, explanation: 'Looking at an object from its left or right gives you the side view. Crouching down to its level does not change which view it is — it is where you stand (left/right) that matters.' },
        { difficulty: 'Easy', question: 'What word describes exactly where a viewer is standing and which way they are facing?', checkMode: 'auto', options: ['A view', 'A plan', 'A viewpoint', 'A diagram'], correctIndex: 2, explanation: 'A viewpoint is the position and direction a viewer is looking from. A view is the picture that results from that viewpoint, not the position itself.' },
        { difficulty: 'Easy', question: 'Which view do you get by looking straight down on an object from above?', checkMode: 'auto', options: ['Side view', 'Front view', 'Back view', 'Top view'], correctIndex: 3, explanation: 'Looking straight down from above gives the top view, also called the plan view.' },

        // Block 2 — Matching views (Easy-Medium)
        { difficulty: 'Easy', question: 'A woolly hat has a small pom-pom on top. Which view would clearly show the pom-pom sitting at the very centre?', checkMode: 'auto', options: ['The top view', 'The front view', 'The side view', 'No view shows the pom-pom'], correctIndex: 0, explanation: 'Looking straight down on the hat (the top view) shows the pom-pom sitting in the middle of the circular top. From the front or side, the pom-pom would appear at the top edge, not at a visible centre.' },
        { difficulty: 'Medium', question: 'Imagine the shoebox lying flat with its long side facing you. A picture is printed only on one of its short ends. From which two views could you possibly see that picture?', checkMode: 'auto', options: ['Front and top', 'Front and one side', 'Top and one side', 'Only the top view'], correctIndex: 1, explanation: 'The short end could be viewed as either the "front" or a "side," depending on which way the box is turned, but the top view would only show the flat lid, not the printed end.' },
        { difficulty: 'Medium', question: 'You look at an apple from the side and see a rounded outline with a small stem poking out the top. Would the top view also show the stem?', checkMode: 'auto', options: ['No, the stem is only ever visible from the side', 'No, because the top view never shows small details', 'Yes, the stem would appear as a small dot or point at the centre', 'Yes, but only if the apple has no stem at all'], correctIndex: 2, explanation: 'Looking straight down on the apple, the stem would appear as a small dot or point at the centre of the rounded outline.' },
        { difficulty: 'Medium', question: 'A closed rectangular prism box is longer than it is wide, and much shorter in height than in length. Would its top view be a square or a rectangle?', checkMode: 'auto', options: ['A square, because the box is short', 'A circle, because the box is flat', 'A square, because all top views are square', 'A rectangle, matching the shape of its base'], correctIndex: 3, explanation: 'Since the box is longer than it is wide, its top view (the outline of its base) is a rectangle, not a square. Its low height affects the side view, not the top view.' },

        // Block 3 — Reasoning about what is visible (Medium)
        { difficulty: 'Medium', question: 'Explain why the front view and the side view of a shoe usually look different from each other.', checkMode: 'auto', options: ['Because the front view shows the narrower toe end, while the side view shows the long heel-to-toe outline — they capture different parts of the object', 'Because a shoe changes shape depending on which way you look at it', 'Because the front view is always smaller than the side view, no matter the object', 'Because only the side view is affected by the shoe\'s laces'], correctIndex: 0, explanation: 'Front and side views capture different faces of the object, so unless the object is symmetrical from every angle, they usually look different.' },
        { difficulty: 'Medium', question: 'A ball is a perfect sphere. Would its front view, side view and top view all look the same or different?', checkMode: 'auto', options: ['All different, because each view faces a different direction', 'All the same — every view of a sphere is an identical circle', 'The front and side views match, but the top view is different', 'The top view matches the side view, but the front view is different'], correctIndex: 1, explanation: 'A sphere looks like a circle from every direction, so its front, side and top views are all identical circles.' },
        { difficulty: 'Medium', question: 'A box has a handle on its top face only. Which view would show the handle?', checkMode: 'auto', options: ['The front view', 'The side view', 'The top view', 'No view would show it'], correctIndex: 2, explanation: 'Since the handle is on the top face, only the top view (looking straight down) would show it.' },
        { difficulty: 'Medium', question: 'Would the side view of a tall, narrow drinking glass and a short, wide tumbler look the same or different, even if their tops are the same size?', checkMode: 'auto', options: ['The same, because matching top sizes always mean matching side views', 'The same, because side views never show height', 'Different, but only because the colours of the glasses differ', 'Different, because the side view shows height, and the two are different heights'], correctIndex: 3, explanation: 'The side view shows height, so a tall glass and a short tumbler would have clearly different side views, even with matching top sizes.' },

        // Block 4 — Identifying objects/views from clues (Medium)
        { difficulty: 'Medium', question: 'A picture shows a simple circle with a small triangle-shaped handle sticking out to one side. What everyday object\'s top view could this be?', checkMode: 'auto', options: ['A cup (or mug)', 'A plate', 'A ball', 'A book'], correctIndex: 0, explanation: 'A cup seen from the top shows a circular rim with the handle poking out to one side. A plain plate or ball would have no handle, and a book\'s top view would be a rectangle, not a circle.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="70" r="45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="100" cy="70" r="30" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M145 55 C170 55 170 90 145 88" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'You are shown a rounded, tall outline that narrows slightly toward the top, with no flat edges. Which everyday object could this front view belong to?', checkMode: 'auto', options: ['A cereal box', 'An apple (or similar rounded fruit)', 'A matchbox', 'A shoebox'], correctIndex: 1, explanation: 'A rounded outline with no straight edges matches the front view of a rounded object like an apple. A box of any kind would show straight edges instead.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><path d="M100 25 C130 25 150 45 148 70 C146 100 125 118 100 118 C75 118 54 100 52 70 C50 45 70 25 100 25 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M100 25 C98 18 102 12 108 10" fill="none" stroke="#2563eb" stroke-width="2"/></svg>' },
        { difficulty: 'Medium', question: 'A picture shows a wide brim shape with a smaller circle in the centre for the crown. Which object and which view does this describe?', checkMode: 'auto', options: ['The side view of a hat', 'The front view of a cup', 'The top view of a hat', 'The top view of a shoe'], correctIndex: 2, explanation: 'Looking straight down on a hat shows the wide brim as an outer circle and the crown as a smaller circle inside it — this is the top view of a hat, not the side view (which would show a triangle-like outline instead).', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="70" r="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="70" r="25" fill="none" stroke="#2563eb" stroke-width="2"/></svg>' },
        { difficulty: 'Medium', question: 'If two different views of the same object look almost identical, what might that tell you about the object\'s shape?', checkMode: 'auto', options: ['It means the object has changed shape between views', 'It means one of the views must be drawn incorrectly', 'It means the object has no top view at all', 'It might mean the object is symmetrical or round in a way that looks similar from multiple directions'], correctIndex: 3, explanation: 'Round or symmetrical objects, like a ball or a cylinder viewed from certain angles, can produce very similar-looking views.' },

        // Block 5 — Scenes, classrooms, buildings (Medium)
        { difficulty: 'Medium', question: 'A school field has a netball court, a tuck shop and a gate. Which view would best show how these are positioned relative to each other?', checkMode: 'auto', options: ['A plan view, because it shows every position from above with nothing blocking the view', 'A side view, because it shows every building\'s height', 'A front view, because it shows the gate clearly', 'No view can show relative positions on a field'], correctIndex: 0, explanation: 'A plan view from above shows the position of every feature on the field without anything blocking the view.' },
        { difficulty: 'Medium', question: 'Why do maps use a plan (top) view instead of a side view?', checkMode: 'auto', options: ['Because a side view cannot be printed on flat paper', 'Because a plan view shows everything from directly above, with nothing hidden behind buildings, trees or hills', 'Because a plan view is always more colourful than a side view', 'Because a side view only works for very small areas'], correctIndex: 1, explanation: 'A side view would hide many features behind others, while a plan view shows every position clearly, which is why maps use it.' },
        { difficulty: 'Medium', question: 'Standing at the classroom door, you notice the desks at the back are partly hidden behind the desks in front. Is this a feature of a side view or a plan view?', checkMode: 'auto', options: ['A plan view, since hiding is common from above', 'A plan view, since desks are always drawn overlapping', 'A side view, since objects can block each other from this angle', 'Neither — hiding never happens in any view'], correctIndex: 2, explanation: 'Objects hiding behind other objects is typical of a side view, since a plan view from above would show every desk clearly.' },

        // Block 6 — Multi-part reasoning (Hard)
        { difficulty: 'Hard', question: 'A simple building has a triangular roof on top of a rectangular prism base. A window is on the front wall only.\na) Which view would show the triangular shape of the roof most clearly: the front view or the top view?\nb) Which view would show the window: the front view or the top view?', answer: 'a) Front view   b) Front view', checkMode: 'auto', parts: [
          { label: 'a) View showing the triangular roof shape', correctAnswer: 'Front view', correctAnswers: ['Front view', 'front view', 'the front view'], explanation: 'Looking at the building from the front (or side) shows the triangular roof shape rising above the rectangular base. From the top, the roof would look like a rectangle, not a triangle.' },
          { label: 'b) View showing the window', correctAnswer: 'Front view', correctAnswers: ['Front view', 'front view', 'the front view'], explanation: 'Since the window is on the front wall, only the front view shows it — the top view looking down on the roof would not show it at all.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You clearly understand how front, side and top views work for everyday objects and scenes.' },
        { minScore: 15, message: 'Great work! You understand most of the ideas about views — review any questions you missed.' },
        { minScore: 10, message: 'Good effort! Go back over the study guide on views and viewpoints, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — What is a view? (Easy)
        { difficulty: 'Easy', question: 'What do we call it when a viewer looks straight down on an object from above?', checkMode: 'auto', options: ['A side view', 'A front view', 'A top view (also called a plan view)', 'A cross-section'], correctIndex: 2, explanation: 'Looking straight down on an object from above is called the top view or plan view. A side or front view means standing level with the object, not above it.' },
        { difficulty: 'Easy', question: 'Does the same object always produce the same view, no matter where the viewer stands?', checkMode: 'auto', options: ['Yes, because the object\'s shape never changes', 'Yes, but only for round objects', 'No, but only the top view ever changes', 'No, the view changes depending on the viewer\'s position'], correctIndex: 3, explanation: 'The view changes depending on the viewer\'s position, even though the object itself stays the same.' },
        { difficulty: 'Easy', question: 'Complete the sentence: a view always matches a particular _______.', checkMode: 'auto', options: ['Viewpoint', 'Shape', 'Colour', 'Diagram'], correctIndex: 0, explanation: 'A view always matches a viewpoint — the exact position and direction the viewer is looking from.' },
        { difficulty: 'Easy', question: 'If you stand to the left of a box and look at it, which view are you seeing?', checkMode: 'auto', options: ['Top view', 'Side view', 'Front view', 'Plan view'], correctIndex: 1, explanation: 'Standing to the left or right of an object and looking at it gives you the side view.' },

        // Block 2 — Matching views (Easy-Medium)
        { difficulty: 'Easy', question: 'A closed box has a sticker only on its top face. Which view would show the sticker?', checkMode: 'auto', options: ['The front view', 'The side view', 'The top view', 'No view would show it'], correctIndex: 2, explanation: 'Since the sticker is on the top face, only the top view (looking straight down) would show it.' },
        { difficulty: 'Medium', question: 'A hat is placed upside down, brim facing up. If you now look straight down at it, would you see a small circle (the crown tip) or a large circle (the brim)?', checkMode: 'auto', options: ['No circle at all, since upside-down hats show no top view', 'A small circle, the crown tip, because that always faces up', 'Both circles equally, overlapping exactly', 'A large circle, the brim, since the wide brim now faces upward'], correctIndex: 3, explanation: 'With the hat upside down, the wide brim faces upward, so a top view straight down would show the large brim circle facing you.' },
        { difficulty: 'Medium', question: 'A closed matchbox is much longer than it is tall or wide. Would its top view be a long, thin rectangle or a square?', checkMode: 'auto', options: ['A long, thin rectangle, matching its long, narrow base', 'A square, because all matchboxes have square tops', 'A circle, because the box is small', 'A square, because the box is closed'], correctIndex: 0, explanation: 'Since the matchbox is much longer than it is wide, its top view (the outline of its base) is a long, thin rectangle.' },
        { difficulty: 'Medium', question: 'An apple has its stem pointing straight up. In the front view, would the stem appear as a dot or as a small line poking up from the top?', checkMode: 'auto', options: ['As a dot, since stems only show as dots from any angle', 'As a small line poking up from the top, since the front view shows height', 'It would not appear at all in the front view', 'As a large circle surrounding the apple'], correctIndex: 1, explanation: 'Seen from the front (or side), the upright stem appears as a small line or stalk poking above the rounded body of the apple. It would appear as a dot only from directly above.' },

        // Block 3 — Reasoning about what is visible (Medium)
        { difficulty: 'Medium', question: 'Why might the front view and the top view of the same box look completely different?', checkMode: 'auto', options: ['Because the front view is always drawn smaller than the top view', 'Because a box changes shape when viewed from different angles', 'Because the front view shows height and width, while the top view shows length and width of the base — they capture different sides', 'Because only the top view is allowed to show straight edges'], correctIndex: 2, explanation: 'Different views show different faces or angles of an object, so unless the object is a cube, these views often look quite different.' },
        { difficulty: 'Medium', question: 'A cube-shaped box has all faces exactly the same size and shape. Would its front view and side view look the same or different?', checkMode: 'auto', options: ['Different, because a cube looks different from every angle', 'Different, but only if the cube is very large', 'The same, but only for the front and top views, not the side view', 'The same, since every face of a cube is an identical square'], correctIndex: 3, explanation: 'Since every face of a cube is an identical square, the front view and side view of a cube-shaped box both show the same square outline.' },
        { difficulty: 'Medium', question: 'Would the top view of a tall drinking glass tell you anything about its height?', checkMode: 'auto', options: ['No, a top view only shows the outline from directly above, never the height', 'Yes, taller glasses always have bigger top views', 'Yes, the top view shows height as a shaded area', 'No, because tall glasses have no visible top view at all'], correctIndex: 0, explanation: 'A top view only shows the outline from directly above, which reveals the width or shape of the base, but never the height.' },
        { difficulty: 'Medium', question: 'A shoe\'s side view shows laces along the top edge. Would you expect the front view (facing the toe) to also clearly show the laces?', checkMode: 'auto', options: ['No, laces are only ever visible from the side', 'Yes, at least partly — the laces run from the front toward the middle of the shoe, so both views show some of them', 'No, because the front view only shows the sole of the shoe', 'Yes, but only if the shoe has no laces at all'], correctIndex: 1, explanation: 'Since laces usually run from the front toward the middle of the shoe, both the front view and the side view would show at least part of the laces.' },

        // Block 4 — Identifying objects/views from clues (Medium)
        { difficulty: 'Medium', question: 'A picture shows a plain rectangle with straight edges and no round shapes anywhere. Which everyday object\'s front view could this describe: an apple or a cereal box?', checkMode: 'auto', options: ['An apple, since apples are always drawn as rectangles', 'Neither — no object has a rectangular front view', 'A cereal box, since straight edges match a box, not a rounded object', 'An apple, because its stem creates straight edges'], correctIndex: 2, explanation: 'Straight edges and a rectangular outline match a box, not a rounded object like an apple.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="20" width="110" height="100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'A picture shows a triangle-like outline with two straight slanted sides meeting at a point, and a curved line at the bottom. Which view of a party hat (cone) is this likely to be?', checkMode: 'auto', options: ['The top view, since cones only show triangles from above', 'It cannot belong to a cone-shaped hat at all', 'The top view, since curved lines only appear from directly above', 'The side view (or front view), since the top view would instead show a plain circle for the brim'], correctIndex: 3, explanation: 'A cone-shaped hat seen from the side (or front) shows two straight slanted sides meeting at a point at the top, with a curved base at the bottom. The top view would instead show a plain circle for the brim.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><path d="M110 15 L165 115 C165 122 140 128 110 128 C80 128 55 122 55 115 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="115" rx="55" ry="10" fill="none" stroke="#2563eb" stroke-width="1.5"/></svg>' },
        { difficulty: 'Medium', question: 'You are told an object\'s top view is a perfect circle. Could this object still be a box (rectangular prism)?', checkMode: 'auto', options: ['No, a rectangular prism always has a rectangular (or square) top view, never a circle', 'Yes, some boxes have circular top views', 'Yes, if the box is turned on its side', 'No, because boxes have no top view at all'], correctIndex: 0, explanation: 'A rectangular prism always has a rectangular (or square) top view, never a perfect circle, so the object cannot be a box.' },
        { difficulty: 'Medium', question: 'Why is it sometimes necessary to see more than one view of an object before you can correctly identify it?', checkMode: 'auto', options: ['Because it is never actually possible to identify an object from any view', 'Because a single view can look similar for several different objects, so more views give extra clues', 'Because the top view is always wrong and must be double-checked', 'Because objects change shape between different views'], correctIndex: 1, explanation: 'One view alone can be ambiguous — combining views reduces the chance of confusing different objects that share a similar outline from just one angle.' },

        // Block 5 — Scenes, classrooms, buildings (Medium)
        { difficulty: 'Medium', question: 'A plan view of the school field shows the netball court as a rectangle and the tuck shop as a small square. What is missing from this plan view that a side view would show?', checkMode: 'auto', options: ['The exact colours of the buildings', 'The names of the students on the field', 'The height of the buildings and any features standing upright, like poles or trees', 'Nothing — a plan view shows everything a side view can show'], correctIndex: 2, explanation: 'A plan view only shows outlines from above, so height information (of buildings, poles, trees) is missing — a side view would be needed to show that.' },
        { difficulty: 'Medium', question: 'A builder wants to know exactly how far apart two classrooms are on the school grounds. Should they use a side view or a plan view to measure this?', checkMode: 'auto', options: ['A side view, since it shows the classrooms\' height', 'Either view works equally well for measuring distance', 'A side view, since plan views cannot be used for measuring', 'A plan view, since it shows accurate distances between positions on the ground'], correctIndex: 3, explanation: 'A plan view from above shows accurate distances between positions on the ground, which is exactly what is needed to measure how far apart the classrooms are.' },
        { difficulty: 'Medium', question: 'Standing outside a simple building and looking at its front wall, are you seeing a side/front view or a plan view?', checkMode: 'auto', options: ['A side/front view, since you are looking at the wall from ground level, not from above', 'A plan view, since walls are always seen from above', 'Neither — walls cannot be represented in any view', 'A plan view, since the front wall shows the roof outline'], correctIndex: 0, explanation: 'Looking at the wall of a building from ground level, rather than from above, gives a front (or side) view, not a plan view.' },

        // Block 6 — Multi-part reasoning (Hard)
        { difficulty: 'Hard', question: 'A watering can has a spout on one side and a handle on the opposite side, and it is taller than it is wide.\na) Which view would show both the spout and the handle sticking out on opposite sides: the front/back view or the top view?\nb) Which view would best show how tall the watering can is: the top view or the side view?', answer: 'a) Top view   b) Side view', checkMode: 'auto', parts: [
          { label: 'a) View showing both spout and handle', correctAnswer: 'Top view', correctAnswers: ['Top view', 'top view', 'the top view'], explanation: 'Looking straight down from above, both the spout and the handle would be visible sticking out on opposite sides of the circular body.' },
          { label: 'b) View showing the height', correctAnswer: 'Side view', correctAnswers: ['Side view', 'side view', 'the side view'], explanation: 'Height can only be judged from a front, back or side view, not from directly above — so the side view best shows how tall the can is.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You clearly understand how front, side and top views work for everyday objects and scenes.' },
        { minScore: 15, message: 'Great work! You understand most of the ideas about views — review any questions you missed.' },
        { minScore: 10, message: 'Good effort! Go back over the study guide on views and viewpoints, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

  ],
}
