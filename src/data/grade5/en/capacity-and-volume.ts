import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (capacity/volume roles) ───────────────────────────────────
// capacity  → blue    (#2563eb)
// volume    → green   (#16a34a)
// ml        → orange  (#ea580c)
// litres    → red     (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Capacity and Volume',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — UNDERSTANDING CAPACITY AND VOLUME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'understanding-capacity-and-volume',
      title: 'Understanding Capacity and Volume',
      icon: '💧',
      explanation:
        `<p style="margin-bottom:16px;">${bl('Capacity')} is the amount of liquid a container can hold when it is full. ${gr('Volume')} is the amount of liquid that is actually in the container. For example a bottle may have a ${bl('capacity')} of 2 ${re('litres')} but only contain 1 ${re('litre')} of water — the ${bl('capacity')} is 2 ${re('litres')} and the ${gr('volume')} is 1 ${re('litre')}. We measure ${bl('capacity')} and ${gr('volume')} using ${or('millilitres')} (${or('ml')}) and ${re('litres')} (${re('l')}). 1 000 ${or('ml')} = 1 ${re('litre')}. ${or('Millilitres')} are used for smaller amounts like a teaspoon of medicine. ${re('Litres')} are used for larger amounts like a bottle of juice.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('capacity')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('volume')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('ml')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('litres')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Capacity</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The maximum amount of liquid a container can hold when it is completely full.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Volume</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The actual amount of liquid that is currently inside the container.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Millilitre (ml)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A small unit for measuring liquid. Used for amounts like medicine or a teaspoon.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Litre (l)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A larger unit for measuring liquid. Used for amounts like a bottle of juice. 1 litre = 1 000 ml.</p>` +
        `</div>` +

        `</div>` +

        // ── Key conversion ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key conversion</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:150px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Small amounts</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${or('1 000 ml')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">=</div>` +
        `<div style="text-align:center;min-width:150px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Large amounts</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${re('1 litre')}</p>` +
        `</div>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember the difference</p>` +
        `<p style="margin:0;color:#1e3a8a;">${bl('Capacity')} is the container's <strong>maximum</strong> — it stays the same. ${gr('Volume')} is what is <strong>actually inside</strong> — it can change. A bucket can have a ${bl('capacity')} of 10 ${re('litres')} but a ${gr('volume')} of only 6 ${re('litres')} if it is not full.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A bucket can hold 10 litres when full. Sipho fills it with 6 litres of water. What is the capacity and what is the volume?',
          answer: `${bl('Capacity')} = 10 ${re('l')}, ${gr('Volume')} = 6 ${re('l')}`,
          steps: [
            `The ${bl('capacity')} is how much the bucket can hold when full — ${re('10 litres')}. This is the maximum amount the container can hold.`,
            `The ${gr('volume')} is how much water is actually in it — ${re('6 litres')}. This is the amount currently inside.`,
            `<strong>Answer:</strong> ${bl('Capacity')} = ${re('10 l')}, ${gr('Volume')} = ${re('6 l')} ✓`,
          ],
        },
        {
          question: 'Which unit would you use to measure the amount of juice in a glass?',
          answer: `We would use ${or('millilitres')} — a glass holds about ${or('250 ml')}`,
          steps: [
            `A glass holds a small amount of liquid.`,
            `${re('Litres')} would give a decimal like ${re('0.25 l')} which is harder to work with.`,
            `${or('Millilitres')} are better for smaller amounts.`,
            `<strong>Answer:</strong> We would use ${or('millilitres')} — a glass holds about ${or('250 ml')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a container with its full capacity labelled in blue and the current volume of liquid inside labelled in green with the conversion 1 000 ml equals 1 litre shown" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the difference between capacity and volume and how to use millilitres and litres for different amounts of liquid" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CONVERTING BETWEEN MILLILITRES AND LITRES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-ml-and-litres',
      title: 'Converting Between Millilitres and Litres',
      icon: '⇄',
      explanation:
        `<p style="margin-bottom:16px;">We convert between ${or('millilitres')} and ${re('litres')} using the relationship ${or('1 000 ml')} = ${re('1 l')}. To convert from ${re('litres')} to ${or('millilitres')} we ${gr('multiply')} by 1 000. To convert from ${or('millilitres')} to ${re('litres')} we ${re('divide')} by 1 000. Always check your answer makes sense — a smaller unit should give a bigger number and a larger unit should give a smaller number.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('multiply')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('divide')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('conversion fact')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('answer')}</span>` +
        `</div>` +

        // ── How to convert ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to convert</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">${re('Litres')} → ${or('Millilitres')}: ${gr('× 1 000')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">You are going from a larger unit to a smaller unit, so you ${gr('multiply')} by ${or('1 000')}. The number gets bigger.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: ${re('2 l')} = 2 ${gr('×')} ${or('1 000')} = ${bl('2 000 ml')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">${or('Millilitres')} → ${re('Litres')}: ${re('÷ 1 000')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">You are going from a smaller unit to a larger unit, so you ${re('divide')} by ${or('1 000')}. The number gets smaller.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: ${or('5 000 ml')} = 5 000 ${re('÷')} ${or('1 000')} = ${bl('5 l')}</p>` +
        `</div>` +

        `</div>` +

        // ── Sense-check tip ──────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always sense-check your answer</p>` +
        `<p style="margin:0;color:#1e3a8a;">A smaller unit (${or('ml')}) always gives a <strong>bigger</strong> number. A larger unit (${re('l')}) always gives a <strong>smaller</strong> number. If you convert ${re('3 l')} to ${or('ml')} and get a number smaller than 3, you have made an error — go back and check whether you should ${gr('multiply')} or ${re('divide')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Convert 3 l to millilitres.',
          answer: `${re('3 l')} = ${bl('3 000 ml')}`,
          steps: [
            `We are converting from a larger unit (${re('litres')}) to a smaller unit (${or('millilitres')}).`,
            `We ${gr('multiply')}.`,
            `${or('1 l')} = ${or('1 000 ml')}`,
            `${re('3 l')} = 3 ${gr('×')} ${or('1 000')} = ${bl('3 000 ml')}`,
          ],
        },
        {
          question: 'Convert 2 500 ml to litres.',
          answer: `${or('2 500 ml')} = ${bl('2.5 l')}`,
          steps: [
            `We are converting from a smaller unit (${or('millilitres')}) to a larger unit (${re('litres')}).`,
            `We ${re('divide')}.`,
            `${or('1 000 ml')} = ${or('1 l')}`,
            `${or('2 500 ml')} = 2 500 ${re('÷')} ${or('1 000')} = ${bl('2.5 l')}`,
          ],
        },
        {
          question: 'Convert 1.5 l to millilitres.',
          answer: `${re('1.5 l')} = ${bl('1 500 ml')}`,
          steps: [
            `We are converting from a larger unit (${re('litres')}) to a smaller unit (${or('millilitres')}).`,
            `We ${gr('multiply')}.`,
            `${or('1 l')} = ${or('1 000 ml')}`,
            `${re('1.5 l')} = 1.5 ${gr('×')} ${or('1 000')} = ${bl('1 500 ml')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the conversion relationship between millilitres and litres with an arrow labelled multiply by 1 000 going from litres to millilitres in green and an arrow labelled divide by 1 000 going from millilitres to litres in red with the conversion fact 1 000 ml equals 1 l shown in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to convert between millilitres and litres by multiplying by 1 000 when going to a smaller unit and dividing by 1 000 when going to a larger unit with worked examples" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — READING MEASURING JUGS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-measuring-jugs',
      title: 'Reading Measuring Jugs',
      icon: '🧪',
      explanation:
        `<p style="margin-bottom:16px;">A measuring jug has ${bl('markings')} on the side to show how much liquid it contains. To read a measuring jug look at the ${bl('markings')} and find the nearest marked number. Count the spaces between marks to work out what each small mark is worth. Always read the measurement at eye level — looking from the side at the same height as the ${gr('liquid surface')}. The surface of the liquid may curve slightly — always read from the bottom of the curve.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('scale markings')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('water level')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('reading')}</span>` +
        `</div>` +

        // ── How to read ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to read a measuring jug</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Find the scale</strong> — Look at the ${bl('markings')} on the side and identify the numbered marks. Count the spaces between two numbered marks to work out what each small mark is worth.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Read at eye level</strong> — Position yourself so your eyes are level with the ${gr('water surface')}. Look from the side at the same height as the liquid.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#ea580c;">Record the reading</strong> — Read the ${or('measurement')} at the bottom of the curve on the liquid surface. Count up from the nearest ${bl('marked number')} below the ${gr('water level')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Reading between marks</p>` +
        `<p style="margin:0;color:#1e3a8a;">If the ${gr('water level')} is between two ${bl('markings')}, find the halfway point. Subtract the lower ${bl('marked value')} from the upper ${bl('marked value')}, halve the difference, then add it to the lower value to find the ${or('reading')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A measuring jug has markings every 100 ml up to 1 000 ml. The water level is at the third mark above 400 ml. How much water is in the jug?',
          answer: `There is ${or('700 ml')} of water in the jug`,
          steps: [
            `Look at the ${bl('scale markings')} — the marks go up in ${bl('100 ml')} steps.`,
            `Find the starting point: the nearest numbered ${bl('mark')} below the ${gr('water level')} is ${bl('400 ml')}.`,
            `Count up three marks above ${bl('400 ml')}: 400 + 100 + 100 + 100 = ${or('700 ml')}.`,
            `<strong>Answer:</strong> There is ${or('700 ml')} of water in the jug ✓`,
          ],
        },
        {
          question: 'Lerato reads a measuring jug. The marks go up in 250 ml steps. The water is halfway between the 500 ml and 750 ml marks. How much water is there?',
          answer: `There is ${or('625 ml')} of water in the jug`,
          steps: [
            `Look at the ${bl('scale markings')} — the marks go up in ${bl('250 ml')} steps.`,
            `The ${gr('water level')} is halfway between ${bl('500 ml')} and ${bl('750 ml')}.`,
            `Find the difference between the two ${bl('marks')}: 750 − 500 = 250.`,
            `Half of 250 = 125. Add this to the lower ${bl('mark')}: 500 + 125 = ${or('625 ml')}.`,
            `<strong>Answer:</strong> There is ${or('625 ml')} of water in the jug ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a measuring jug showing scale markings in blue water level in green and the reading in orange with an example of reading between marks at the halfway point" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read a measuring jug by identifying scale markings counting spaces and reading at eye level from the bottom of the liquid curve" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — CALCULATING WITH CAPACITY AND VOLUME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-with-capacity-and-volume',
      title: 'Calculating with Capacity and Volume',
      icon: '🧮',
      explanation:
        `<p style="margin-bottom:16px;">We can ${gr('add')} and ${re('subtract')} volumes to solve problems. Always make sure all measurements are in the <strong>same unit</strong> before calculating. If the units are different ${bl('convert')} them first, then calculate. After calculating always write the correct unit next to your ${or('answer')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('conversion')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('addition')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('subtraction')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('answer')}</span>` +
        `</div>` +

        // ── Rules ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Rules for calculating with capacity and volume</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Convert')} — Make sure all measurements are in the <strong>same unit</strong> before you calculate. If they are different, convert to the same unit first.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Add or subtract')} — Once all measurements are in the same unit, perform the calculation. Add amounts together or subtract one amount from another.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Write the unit')} — Always write the correct unit (${or('ml')} or ${or('l')}) next to your answer. A number without a unit is not a complete answer.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Same unit before you calculate</p>` +
        `<p style="margin:0;color:#1e3a8a;">Never add or subtract measurements that are in different units. If one measurement is in ${re('litres')} and another is in ${or('millilitres')}, ${bl('convert')} one of them first. Remember: ${bl('1 l = 1 000 ml')}. After calculating you may convert your ${or('answer')} back to the most suitable unit.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Amahle has 1.5 l of juice and pours in another 750 ml. How much juice does she have in total?',
          answer: `Amahle has ${or('2 250 ml')} or ${or('2.25 l')} of juice`,
          steps: [
            `${bl('Convert')} to the same unit: ${bl('1.5 l')} = 1.5 × 1 000 = ${bl('1 500 ml')}.`,
            `${gr('Add:')} ${bl('1 500 ml')} + 750 ml = ${gr('2 250 ml')}.`,
            `${bl('Convert')} back: ${bl('2 250 ml')} ÷ 1 000 = ${bl('2.25 l')}.`,
            `<strong>Answer:</strong> Amahle has ${or('2 250 ml')} or ${or('2.25 l')} of juice ✓`,
          ],
        },
        {
          question: 'A 2 l bottle of cooldrink has 650 ml poured out. How much is left?',
          answer: `There is ${or('1 350 ml')} or ${or('1.35 l')} left`,
          steps: [
            `${bl('Convert')} 2 l to millilitres: 2 × 1 000 = ${bl('2 000 ml')}.`,
            `${re('Subtract:')} ${bl('2 000 ml')} − 650 ml = ${re('1 350 ml')}.`,
            `${bl('Convert')} back: ${bl('1 350 ml')} ÷ 1 000 = ${bl('1.35 l')}.`,
            `<strong>Answer:</strong> There is ${or('1 350 ml')} or ${or('1.35 l')} left ✓`,
          ],
        },
        {
          question: 'Sipho fills 4 glasses each holding 200 ml from a 1 l bottle. How much is left in the bottle?',
          answer: `There is ${or('200 ml')} left in the bottle`,
          steps: [
            `${gr('Total poured out:')} 4 × 200 ml = ${gr('800 ml')}.`,
            `${bl('Convert')} 1 l to millilitres: ${bl('1 000 ml')}.`,
            `${re('Subtract:')} ${bl('1 000 ml')} − ${gr('800 ml')} = ${re('200 ml')}.`,
            `<strong>Answer:</strong> There is ${or('200 ml')} left in the bottle ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two containers being combined with addition in green and a container with liquid removed shown with subtraction in red the conversion step highlighted in blue and the final answer labelled in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to add and subtract volumes by first converting to the same unit then calculating and writing the answer with the correct unit" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy — capacity vs volume ─────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What is the difference between capacity and volume?',
      answer: 'Capacity is how much a container can hold when full. Volume is how much liquid is actually in the container.',
      checkMode: 'self',
    },

    // ── Q2 Easy — unit selection ──────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Which unit would you use to measure the amount of water in a swimming pool?',
      answer: 'litres',
      checkMode: 'auto',
      correctAnswer: 'litres',
    },

    // ── Q3 Medium — remaining capacity ───────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A bottle has a capacity of 500ml and contains 320ml of water. How much more water can it hold?',
      answer: '180ml',
      checkMode: 'auto',
      correctAnswer: '180ml',
    },

    // ── Q4 Easy — convert l to ml ─────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Convert 4l to millilitres.',
      answer: '4000ml',
      checkMode: 'auto',
      correctAnswer: '4000ml',
    },

    // ── Q5 Medium — convert ml to l ──────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Convert 3750ml to litres.',
      answer: '3.75l',
      checkMode: 'auto',
      correctAnswer: '3.75l',
    },

    // ── Q6 Hard — error analysis ──────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato converts 2.8l to millilitres and gets 280ml. Is she correct? Explain.',
      answer: 'No — to convert litres to millilitres we multiply by 1000. 2.8 x 1000 = 2800ml not 280ml. She forgot to multiply by 1000.',
      checkMode: 'self',
    },

    // ── Q7 Easy — reading a jug ───────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A measuring jug has marks every 100ml. The water is at the 6th mark. How much water is in the jug?',
      answer: '600ml',
      checkMode: 'auto',
      correctAnswer: '600ml',
    },

    // ── Q8 Medium — reading between marks ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A measuring jug has marks every 250ml. The water is halfway between 750ml and 1000ml. How much water is there?',
      answer: '875ml',
      checkMode: 'auto',
      correctAnswer: '875ml',
    },

    // ── Q9 Hard — reading accuracy ────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho reads a measuring jug from above instead of at eye level. Why might his reading be incorrect?',
      answer: 'Reading from above makes the water level look different to what it actually is. You should always read a measuring jug at eye level to get an accurate measurement.',
      checkMode: 'self',
    },

    // ── Q10 Medium — subtraction word problem ────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Amahle has 2l of milk. She uses 450ml for cereal and 300ml for tea. How much milk is left?',
      answer: '1250ml',
      checkMode: 'auto',
      correctAnswer: '1250ml',
    },

    // ── Q11 Hard — multi-step word problem ───────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo fills 5 bottles each holding 350ml from a 2l container. How much water is left in the container?',
      answer: '250ml',
      checkMode: 'auto',
      correctAnswer: '250ml',
    },

    // ── Q12 Hard — combined volumes ───────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato has 3 containers holding 1.2l, 850ml and 600ml. She pours them all into a 3l jug. Does everything fit? Explain.',
      answer: 'Total = 1200ml + 850ml + 600ml = 2650ml. Convert 3l to ml = 3000ml. 2650ml is less than 3000ml so yes everything fits with 350ml to spare.',
      checkMode: 'self',
    },
  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered capacity and volume.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of capacity and volume.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
}
