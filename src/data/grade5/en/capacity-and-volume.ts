import type { PracticeSet, TopicData } from '@/src/data/grade4/en/numbers-operations'

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
        'A container with its full capacity labelled in blue and the current volume of liquid inside labelled in green, with the conversion 1 000 ml = 1 litre shown',
      diagramSvg:
        '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="30" width="80" height="120" rx="4" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="62" y="90" width="76" height="58" fill="#16a34a" fill-opacity="0.18"/><line x1="60" y1="30" x2="140" y2="30" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,3"/><line x1="60" y1="90" x2="140" y2="90" stroke="#16a34a" stroke-width="2"/><text x="160" y="34" font-size="12" font-weight="700" fill="#2563eb" text-anchor="start">Capacity</text><text x="160" y="48" font-size="12" font-weight="700" fill="#2563eb" text-anchor="start">= 2 l</text><text x="160" y="94" font-size="12" font-weight="700" fill="#16a34a" text-anchor="start">Volume</text><text x="160" y="108" font-size="12" font-weight="700" fill="#16a34a" text-anchor="start">= 1 l</text><text x="100" y="170" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">1 000 ml = 1 l</text></svg>',

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
        'The conversion relationship between millilitres and litres, with a green arrow labelled multiply by 1 000 going from litres to millilitres, a red arrow labelled divide by 1 000 going from millilitres to litres, and the conversion fact 1 000 ml = 1 l shown in orange',
      diagramSvg:
        '<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="45" width="90" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="65" y="70" font-size="15" font-weight="700" fill="#dc2626" text-anchor="middle">litres</text><rect x="190" y="45" width="90" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="235" y="70" font-size="15" font-weight="700" fill="#ea580c" text-anchor="middle">ml</text><line x1="115" y1="55" x2="185" y2="55" stroke="#16a34a" stroke-width="2"/><polygon points="189,55 181,50 181,60" fill="#16a34a"/><text x="150" y="45" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">× 1 000</text><line x1="185" y1="78" x2="115" y2="78" stroke="#dc2626" stroke-width="2"/><polygon points="111,78 119,73 119,83" fill="#dc2626"/><text x="150" y="98" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">÷ 1 000</text><text x="150" y="118" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">1 000 ml = 1 l</text></svg>',

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
        'A measuring jug showing scale markings in blue, the water level in green, and the reading in orange, with an example of reading between marks at the halfway point',
      diagramSvg:
        '<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="40" width="70" height="150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="190" x2="42" y2="190" stroke="#2563eb" stroke-width="2"/><line x1="50" y1="152" x2="42" y2="152" stroke="#2563eb" stroke-width="2"/><line x1="50" y1="115" x2="42" y2="115" stroke="#2563eb" stroke-width="2"/><line x1="50" y1="77" x2="42" y2="77" stroke="#2563eb" stroke-width="2"/><line x1="50" y1="40" x2="42" y2="40" stroke="#2563eb" stroke-width="2"/><text x="34" y="194" font-size="10" fill="#2563eb" font-weight="700" text-anchor="end">0</text><text x="34" y="156" font-size="10" fill="#2563eb" font-weight="700" text-anchor="end">250</text><text x="34" y="119" font-size="10" fill="#2563eb" font-weight="700" text-anchor="end">500</text><text x="34" y="81" font-size="10" fill="#2563eb" font-weight="700" text-anchor="end">750</text><text x="34" y="44" font-size="10" fill="#2563eb" font-weight="700" text-anchor="end">1000</text><rect x="52" y="96" width="66" height="94" fill="#16a34a" fill-opacity="0.25"/><line x1="50" y1="96" x2="120" y2="96" stroke="#16a34a" stroke-width="2"/><line x1="120" y1="96" x2="140" y2="96" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3,2"/><text x="145" y="100" font-size="12" font-weight="700" fill="#ea580c" text-anchor="start">625 ml</text></svg>',

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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Capacity vs Volume & Unit Sense | 4-8 Converting ml/l |
    // 9-11 Reading Measuring Jugs | 12-14 Error-Spotting & Justify Reasoning |
    // 15-17 Word Problems (Add/Subtract) | 18-19 Multi-Step & Comparisons
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'A jug can hold 2 litres of water when it is completely full. Is 2 litres the capacity or the volume of the jug?', checkMode: 'auto', correctAnswer: 'capacity', correctAnswers: ['capacity'], explanation: 'Capacity is the maximum amount a container can hold when full. Since 2 litres is the amount the jug can hold when completely full, it is the capacity.' },
        { difficulty: 'Easy', question: 'A 1 litre bottle has 600 ml of juice poured into it. Is 600 ml the capacity or the volume of juice in the bottle?', checkMode: 'auto', correctAnswer: 'volume', correctAnswers: ['volume'], explanation: '600 ml is the amount of juice actually inside the bottle right now, so it is the volume. The capacity of the bottle is still 1 litre (1 000 ml) even though it is not full.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the amount of cough syrup in a small medicine spoon: ml or l?', checkMode: 'auto', correctAnswer: 'ml', correctAnswers: ['ml', 'millilitres', 'milliliters', 'millilitre', 'milliliter'], explanation: 'A medicine spoon holds a very small amount of liquid, so millilitres (ml) is the sensible unit. Using litres would give an awkward tiny decimal.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the amount of water in a swimming pool: ml or l?', checkMode: 'auto', correctAnswer: 'l', correctAnswers: ['l', 'litres', 'liters', 'litre', 'liter'], explanation: 'A swimming pool holds a very large amount of water, so litres (l) is the sensible unit. Millilitres would give an enormous, unwieldy number.' },
        { difficulty: 'Easy', question: 'Convert 2.5 l to millilitres.', checkMode: 'auto', correctAnswer: '2500ml', correctAnswers: ['2500ml', '2500 ml', '2500'], explanation: 'To convert litres to millilitres, multiply by 1 000. 2.5 × 1 000 = 2 500 ml.' },
        { difficulty: 'Easy', question: 'Convert 3.5 l to millilitres.', checkMode: 'auto', correctAnswer: '3500ml', correctAnswers: ['3500ml', '3500 ml', '3500'], explanation: 'To convert litres to millilitres, multiply by 1 000. 3.5 × 1 000 = 3 500 ml.' },
        { difficulty: 'Easy-Medium', question: 'Convert 3 750 ml to litres.', checkMode: 'auto', correctAnswer: '3.75l', correctAnswers: ['3.75l', '3.75 l', '3.75'], explanation: 'To convert millilitres to litres, divide by 1 000. 3 750 ÷ 1 000 = 3.75 l.' },
        { difficulty: 'Medium', question: 'Convert 0.6 l to millilitres.', checkMode: 'auto', correctAnswer: '600ml', correctAnswers: ['600ml', '600 ml', '600'], explanation: 'To convert litres to millilitres, multiply by 1 000. 0.6 × 1 000 = 600 ml. Even a decimal smaller than 1 still gets multiplied the same way.' },
        { difficulty: 'Medium', question: 'A carton is labelled "6 250 ml". Convert this to litres, then explain in one sentence why your answer makes sense compared to the original number.', checkMode: 'self', answer: '6 250 ml = 6.25 l. This makes sense because litres are a larger unit than millilitres, so converting to litres should give a smaller number — and 6.25 is much smaller than 6 250, which shows the conversion direction (divide by 1 000) was correct.' },
        { difficulty: 'Medium', question: 'A measuring jug has marks every 100 ml. The water level is at the 6th mark above 200 ml. How much water is in the jug?', checkMode: 'auto', correctAnswer: '800ml', correctAnswers: ['800ml', '800 ml', '800'], explanation: 'Start at 200 ml and count up 6 marks of 100 ml each: 200 + (6 × 100) = 200 + 600 = 800 ml.' },
        { difficulty: 'Medium', question: 'A measuring jug has marks every 250 ml. The water level is exactly halfway between the 500 ml mark and the 750 ml mark. How much water is in the jug?', checkMode: 'auto', correctAnswer: '625ml', correctAnswers: ['625ml', '625 ml', '625'], explanation: 'The difference between the marks is 750 − 500 = 250. Half of 250 is 125. Add this to the lower mark: 500 + 125 = 625 ml.' },
        { difficulty: 'Medium', question: 'A measuring cylinder has marks every 50 ml. The liquid level is at the 9th mark above 0 ml. How much liquid is in the cylinder?', checkMode: 'auto', correctAnswer: '450ml', correctAnswers: ['450ml', '450 ml', '450'], explanation: 'Count up 9 marks of 50 ml each from 0: 9 × 50 = 450 ml.' },
        { difficulty: 'Medium-Hard', question: 'Thabo converts 1.2 l to millilitres by writing 1.2 ÷ 1000 = 0.0012 ml. Is Thabo correct? Explain what he did wrong.', checkMode: 'self', answer: 'No, Thabo is incorrect. To convert from litres (a larger unit) to millilitres (a smaller unit), you must multiply by 1 000, not divide. The correct working is 1.2 × 1 000 = 1 200 ml. Thabo used the wrong operation — dividing made the number much smaller, but converting to a smaller unit should always make the number bigger.' },
        { difficulty: 'Medium-Hard', question: 'Sipho reads a measuring jug by looking down at it from directly above rather than from the side at eye level, and records 850 ml. Explain why his reading might be inaccurate, and what he should do instead.', checkMode: 'self', answer: 'Looking down from above distorts how the water level lines up with the scale markings on the side of the jug, so the reading can appear higher or lower than it really is. Sipho should crouch down (or lift the jug) so his eyes are level with the liquid surface, look at it from the side, and read the measurement at the bottom of the curved surface (the meniscus) for an accurate result.' },
        { difficulty: 'Hard', question: 'A recipe needs 1.8 l of stock. Nomvula has already poured in 650 ml. How many more millilitres of stock does she need to add?', checkMode: 'auto', correctAnswer: '1150ml', correctAnswers: ['1150ml', '1150 ml', '1150', '1.15l', '1.15 l'], explanation: 'Convert 1.8 l to ml: 1.8 × 1 000 = 1 800 ml. Subtract what has been poured: 1 800 − 650 = 1 150 ml still needed.' },
        { difficulty: 'Hard', question: 'A 3 l bottle of cooldrink has 1 250 ml poured out at a birthday party. How much cooldrink is left in the bottle, in millilitres?', checkMode: 'auto', correctAnswer: '1750ml', correctAnswers: ['1750ml', '1750 ml', '1750', '1.75l', '1.75 l'], explanation: 'Convert 3 l to ml: 3 × 1 000 = 3 000 ml. Subtract the amount poured out: 3 000 − 1 250 = 1 750 ml left.' },
        { difficulty: 'Hard', question: 'At a school sports day, an athlete drinks 4 cups of water, each holding 200 ml, from a 2 l water dispenser. How much water is left in the dispenser, in millilitres?', checkMode: 'auto', correctAnswer: '1200ml', correctAnswers: ['1200ml', '1200 ml', '1200', '1.2l', '1.2 l'], explanation: 'Total drunk: 4 × 200 ml = 800 ml. Convert 2 l to ml: 2 × 1 000 = 2 000 ml. Subtract: 2 000 − 800 = 1 200 ml left.' },
        { difficulty: 'Hard', question: 'Lindiwe pours three containers into an empty 3 l jug: 900 ml, 1.3 l, and 450 ml. Will everything fit without the jug overflowing? Show your working and explain.', checkMode: 'self', answer: 'Convert everything to millilitres: 900 ml + (1.3 × 1 000) ml + 450 ml = 900 + 1 300 + 450 = 2 650 ml. The jug\'s capacity is 3 l = 3 000 ml. Since 2 650 ml is less than 3 000 ml, everything fits, with 350 ml of space still left over — the jug will not overflow.' },
        { difficulty: 'Hard', question: 'Bottle A contains 2.6 l of oil. Bottle B contains 2 450 ml of oil. Which bottle contains more oil, and by how many millilitres?', checkMode: 'auto', correctAnswer: 'A150ml', correctAnswers: ['A150ml', 'A, 150ml', 'A 150ml', 'Bottle A 150ml', 'bottleA150ml'], explanation: 'Convert Bottle A to millilitres: 2.6 × 1 000 = 2 600 ml. Compare to Bottle B: 2 450 ml. Bottle A has more, by 2 600 − 2 450 = 150 ml.' },
        { difficulty: 'Hard', question: 'A fish tank has a capacity of 12 l. It is filled using a 1.5 l jug poured in 5 times, then a further 900 ml is added from a separate container. Is the tank now full, overflowing, or still not full? Explain your reasoning with full working.', checkMode: 'self', answer: 'Water from the jug: 5 × 1.5 l = 7.5 l = 7 500 ml. Add the extra: 7 500 + 900 = 8 400 ml, which is 8.4 l. The tank\'s capacity is 12 l. Since 8.4 l is less than 12 l, the tank is not yet full — it still has 12 − 8.4 = 3.6 l (3 600 ml) of space left before it would overflow.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered capacity and volume, conversions, and jug readings.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of capacity and volume — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on conversions and calculations, then try again.' },
        { minScore: 0, message: 'Keep going! Work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'A kettle can hold 1.7 litres of water when it is completely full. Is 1.7 litres the capacity or the volume of the kettle?', checkMode: 'auto', correctAnswer: 'capacity', correctAnswers: ['capacity'], explanation: 'Capacity is the maximum a container can hold when full. Since 1.7 litres is what the kettle can hold when completely full, it is the capacity.' },
        { difficulty: 'Easy', question: 'A 500 ml flask has 180 ml of soup in it. Is 180 ml the capacity or the volume of soup in the flask?', checkMode: 'auto', correctAnswer: 'volume', correctAnswers: ['volume'], explanation: '180 ml is the amount of soup actually inside the flask right now, so it is the volume. The flask\'s capacity is still 500 ml even though it is only partly full.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the amount of eye drops given from a small dropper bottle: ml or l?', checkMode: 'auto', correctAnswer: 'ml', correctAnswers: ['ml', 'millilitres', 'milliliters', 'millilitre', 'milliliter'], explanation: 'A dropper gives a tiny amount of liquid, so millilitres (ml) is the sensible unit. Litres would give an awkward, very small decimal.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the amount of diesel in a delivery truck\'s fuel tank: ml or l?', checkMode: 'auto', correctAnswer: 'l', correctAnswers: ['l', 'litres', 'liters', 'litre', 'liter'], explanation: 'A truck\'s fuel tank holds a large amount of fuel, so litres (l) is the sensible unit. Millilitres would give an enormous, unwieldy number.' },
        { difficulty: 'Easy', question: 'Convert 5 l to millilitres.', checkMode: 'auto', correctAnswer: '5000ml', correctAnswers: ['5000ml', '5000 ml', '5000'], explanation: 'To convert litres to millilitres, multiply by 1 000. 5 × 1 000 = 5 000 ml.' },
        { difficulty: 'Easy', question: 'Convert 2.75 l to millilitres.', checkMode: 'auto', correctAnswer: '2750ml', correctAnswers: ['2750ml', '2750 ml', '2750'], explanation: 'To convert litres to millilitres, multiply by 1 000. 2.75 × 1 000 = 2 750 ml.' },
        { difficulty: 'Easy-Medium', question: 'Convert 6 250 ml to litres.', checkMode: 'auto', correctAnswer: '6.25l', correctAnswers: ['6.25l', '6.25 l', '6.25'], explanation: 'To convert millilitres to litres, divide by 1 000. 6 250 ÷ 1 000 = 6.25 l.' },
        { difficulty: 'Medium', question: 'Convert 8 400 ml to litres.', checkMode: 'auto', correctAnswer: '8.4l', correctAnswers: ['8.4l', '8.4 l', '8.4', '8.40l', '8.40 l'], explanation: 'To convert millilitres to litres, divide by 1 000. 8 400 ÷ 1 000 = 8.4 l.' },
        { difficulty: 'Medium', question: 'A bottle is labelled "0.85 l". Convert this to millilitres, then explain in one sentence why your answer makes sense compared to the original number.', checkMode: 'self', answer: '0.85 l = 850 ml. This makes sense because millilitres are a smaller unit than litres, so converting to millilitres should give a bigger number — and 850 is much bigger than 0.85, which shows the conversion direction (multiply by 1 000) was correct.' },
        { difficulty: 'Medium', question: 'A measuring jug has marks every 100 ml. The water level is at the 8th mark above 0 ml. How much water is in the jug?', checkMode: 'auto', correctAnswer: '800ml', correctAnswers: ['800ml', '800 ml', '800'], explanation: 'Count up 8 marks of 100 ml each from 0: 8 × 100 = 800 ml.' },
        { difficulty: 'Medium', question: 'A measuring jug has marks every 150 ml. The water level is exactly halfway between the 300 ml mark and the 600 ml mark. How much water is in the jug?', checkMode: 'auto', correctAnswer: '450ml', correctAnswers: ['450ml', '450 ml', '450'], explanation: 'The difference between the marks is 600 − 300 = 300. Half of 300 is 150. Add this to the lower mark: 300 + 150 = 450 ml.' },
        { difficulty: 'Medium', question: 'A measuring cylinder has marks every 20 ml. The liquid level is at the 12th mark above 0 ml. How much liquid is in the cylinder?', checkMode: 'auto', correctAnswer: '240ml', correctAnswers: ['240ml', '240 ml', '240'], explanation: 'Count up 12 marks of 20 ml each from 0: 12 × 20 = 240 ml.' },
        { difficulty: 'Medium-Hard', question: 'Amahle converts 2 400 ml to litres by writing 2 400 × 1000 = 2 400 000 l. Is Amahle correct? Explain what she did wrong.', checkMode: 'self', answer: 'No, Amahle is incorrect. To convert from millilitres (a smaller unit) to litres (a larger unit), you must divide by 1 000, not multiply. The correct working is 2 400 ÷ 1 000 = 2.4 l. Amahle used the wrong operation — multiplying made the number far too big, but converting to a larger unit should always make the number smaller.' },
        { difficulty: 'Medium-Hard', question: 'Kagiso reads a measuring cylinder by looking at it from directly above rather than from the side at eye level, and records 320 ml. Explain why his reading might be inaccurate, and what he should do instead.', checkMode: 'self', answer: 'Looking down from above changes the angle at which the water level appears to line up with the scale, so the reading can look higher or lower than it truly is. Kagiso should position himself so his eyes are level with the liquid surface, look from the side, and read at the bottom of the curved surface (the meniscus) to get an accurate measurement.' },
        { difficulty: 'Hard', question: 'A jug needs 2.3 l of lemonade for a party. Lerato has already poured in 900 ml. How many more millilitres of lemonade does she need to add?', checkMode: 'auto', correctAnswer: '1400ml', correctAnswers: ['1400ml', '1400 ml', '1400', '1.4l', '1.4 l'], explanation: 'Convert 2.3 l to ml: 2.3 × 1 000 = 2 300 ml. Subtract what has been poured: 2 300 − 900 = 1 400 ml still needed.' },
        { difficulty: 'Hard', question: 'A 2.5 l bottle of juice has 1 600 ml poured into glasses at a family gathering. How much juice is left in the bottle, in millilitres?', checkMode: 'auto', correctAnswer: '900ml', correctAnswers: ['900ml', '900 ml', '900', '0.9l', '0.9 l'], explanation: 'Convert 2.5 l to ml: 2.5 × 1 000 = 2 500 ml. Subtract the amount poured out: 2 500 − 1 600 = 900 ml left.' },
        { difficulty: 'Hard', question: 'During a science experiment, a learner pours 6 test tubes of solution, each holding 150 ml, from a 1 l beaker. How much solution is left in the beaker, in millilitres?', checkMode: 'auto', correctAnswer: '100ml', correctAnswers: ['100ml', '100 ml', '100', '0.1l', '0.1 l'], explanation: 'Total poured: 6 × 150 ml = 900 ml. Convert 1 l to ml: 1 × 1 000 = 1 000 ml. Subtract: 1 000 − 900 = 100 ml left.' },
        { difficulty: 'Hard', question: 'Palesa pours three containers into an empty 2.5 l jug: 700 ml, 1.1 l, and 650 ml. Will everything fit without the jug overflowing? Show your working and explain.', checkMode: 'self', answer: 'Convert everything to millilitres: 700 ml + (1.1 × 1 000) ml + 650 ml = 700 + 1 100 + 650 = 2 450 ml. The jug\'s capacity is 2.5 l = 2 500 ml. Since 2 450 ml is less than 2 500 ml, everything fits, with only 50 ml of space left over — it is very close to overflowing but does not.' },
        { difficulty: 'Hard', question: 'Tank X contains 3.1 l of water. Tank Y contains 3 050 ml of water. Which tank contains more water, and by how many millilitres?', checkMode: 'auto', correctAnswer: 'X50ml', correctAnswers: ['X50ml', 'X, 50ml', 'X 50ml', 'Tank X 50ml', 'tankX50ml'], explanation: 'Convert Tank X to millilitres: 3.1 × 1 000 = 3 100 ml. Compare to Tank Y: 3 050 ml. Tank X has more, by 3 100 − 3 050 = 50 ml.' },
        { difficulty: 'Hard', question: 'A water tank has a capacity of 15 l. It is filled using a 2 l bucket poured in 6 times, then a further 1.5 l is added using a jug. Is the tank now full, overflowing, or still not full? Explain your reasoning with full working.', checkMode: 'self', answer: 'Water from the bucket: 6 × 2 l = 12 l. Add the extra: 12 + 1.5 = 13.5 l. The tank\'s capacity is 15 l. Since 13.5 l is less than 15 l, the tank is not yet full — it still has 15 − 13.5 = 1.5 l (1 500 ml) of space left before it would overflow.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently work with capacity, volume, conversions, and jug readings.' },
        { minScore: 15, message: 'Great work! You have a solid understanding — review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on conversions and calculations, then try again.' },
        { minScore: 0, message: 'Keep going! Work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'A watering can holds 4 litres of water when it is completely full. Is 4 litres the capacity or the volume of the watering can?', checkMode: 'auto', correctAnswer: 'capacity', correctAnswers: ['capacity'], explanation: 'Capacity is the maximum a container can hold when full. Since 4 litres is what the watering can holds when completely full, it is the capacity.' },
        { difficulty: 'Easy', question: 'A 2 litre jug has 1.2 l of iced tea in it at a picnic. Is 1.2 l the capacity or the volume of iced tea in the jug?', checkMode: 'auto', correctAnswer: 'volume', correctAnswers: ['volume'], explanation: '1.2 l is the amount of iced tea actually inside the jug right now, so it is the volume. The jug\'s capacity is still 2 litres even though it is not full.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the amount of vanilla essence added to a cake batter: ml or l?', checkMode: 'auto', correctAnswer: 'ml', correctAnswers: ['ml', 'millilitres', 'milliliters', 'millilitre', 'milliliter'], explanation: 'Vanilla essence is added in small amounts, so millilitres (ml) is the sensible unit. Litres would give an awkward, very small decimal.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the amount of rainwater collected in a large garden tank: ml or l?', checkMode: 'auto', correctAnswer: 'l', correctAnswers: ['l', 'litres', 'liters', 'litre', 'liter'], explanation: 'A garden tank collects a large amount of water, so litres (l) is the sensible unit. Millilitres would give an enormous, unwieldy number.' },
        { difficulty: 'Easy', question: 'Convert 7 l to millilitres.', checkMode: 'auto', correctAnswer: '7000ml', correctAnswers: ['7000ml', '7000 ml', '7000'], explanation: 'To convert litres to millilitres, multiply by 1 000. 7 × 1 000 = 7 000 ml.' },
        { difficulty: 'Easy', question: 'Convert 4.5 l to millilitres.', checkMode: 'auto', correctAnswer: '4500ml', correctAnswers: ['4500ml', '4500 ml', '4500'], explanation: 'To convert litres to millilitres, multiply by 1 000. 4.5 × 1 000 = 4 500 ml.' },
        { difficulty: 'Easy-Medium', question: 'Convert 0.85 l to millilitres.', checkMode: 'auto', correctAnswer: '850ml', correctAnswers: ['850ml', '850 ml', '850'], explanation: 'To convert litres to millilitres, multiply by 1 000. 0.85 × 1 000 = 850 ml.' },
        { difficulty: 'Medium', question: 'Convert 9 020 ml to litres.', checkMode: 'auto', correctAnswer: '9.02l', correctAnswers: ['9.02l', '9.02 l', '9.02'], explanation: 'To convert millilitres to litres, divide by 1 000. 9 020 ÷ 1 000 = 9.02 l. Notice the 0 keeps its place as a placeholder in the decimal.' },
        { difficulty: 'Medium', question: 'A container is labelled "300 ml". Convert this to litres, then explain in one sentence why your answer makes sense compared to the original number.', checkMode: 'self', answer: '300 ml = 0.3 l. This makes sense because litres are a larger unit than millilitres, so converting to litres should give a smaller number — and 0.3 is much smaller than 300, which shows the conversion direction (divide by 1 000) was correct.' },
        { difficulty: 'Medium', question: 'A measuring jug has marks every 200 ml. The water level is at the 5th mark above 100 ml. How much water is in the jug?', checkMode: 'auto', correctAnswer: '1100ml', correctAnswers: ['1100ml', '1100 ml', '1100', '1.1l', '1.1 l'], explanation: 'Start at 100 ml and count up 5 marks of 200 ml each: 100 + (5 × 200) = 100 + 1 000 = 1 100 ml.' },
        { difficulty: 'Medium', question: 'A measuring jug has marks every 250 ml. The water level is exactly halfway between the 450 ml mark and the 700 ml mark. How much water is in the jug?', checkMode: 'auto', correctAnswer: '575ml', correctAnswers: ['575ml', '575 ml', '575'], explanation: 'The difference between the marks is 700 − 450 = 250. Half of 250 is 125. Add this to the lower mark: 450 + 125 = 575 ml.' },
        { difficulty: 'Medium', question: 'A measuring cylinder has marks every 25 ml. The liquid level is at the 10th mark above 0 ml. How much liquid is in the cylinder?', checkMode: 'auto', correctAnswer: '250ml', correctAnswers: ['250ml', '250 ml', '250'], explanation: 'Count up 10 marks of 25 ml each from 0: 10 × 25 = 250 ml.' },
        { difficulty: 'Medium-Hard', question: 'Given the fact "1 000 ml = 1 l", a student assumes converting from ml to l should always make the number bigger, since ml is "the small one". Using an actual example, explain whether this is correct.', checkMode: 'self', answer: 'This is incorrect — it is the opposite. Millilitres are the smaller unit, so a given amount needs a much bigger number of millilitres to describe it, but a much smaller number of litres. For example, 5 000 ml = 5 l: going from millilitres to litres, the number gets smaller (5 000 becomes 5), because you divide by 1 000. Converting to a bigger unit (litres) always makes the number smaller, not bigger.' },
        { difficulty: 'Medium-Hard', question: 'Mpho reads a measuring jug by looking at it from directly above the opening rather than from the side at eye level, and records 1 450 ml. Explain why his reading might be inaccurate, and what he should do instead.', checkMode: 'self', answer: 'Looking straight down from above distorts how the water surface lines up with the scale on the side of the jug, making the reading appear higher or lower than the true amount. Mpho should lower his eyes (or raise the jug) to be level with the liquid surface, view it from the side, and read the measurement at the bottom of the curved surface (the meniscus) for an accurate result.' },
        { difficulty: 'Hard', question: 'A punch bowl recipe needs 2.25 l of juice mixture. Ayesha has already poured in 800 ml. How many more millilitres of juice mixture does she need to add?', checkMode: 'auto', correctAnswer: '1450ml', correctAnswers: ['1450ml', '1450 ml', '1450', '1.45l', '1.45 l'], explanation: 'Convert 2.25 l to ml: 2.25 × 1 000 = 2 250 ml. Subtract what has been poured: 2 250 − 800 = 1 450 ml still needed.' },
        { difficulty: 'Hard', question: 'A 5 l container of pool chemical has 2 350 ml used during a cleaning session. How much chemical is left in the container, in millilitres?', checkMode: 'auto', correctAnswer: '2650ml', correctAnswers: ['2650ml', '2650 ml', '2650', '2.65l', '2.65 l'], explanation: 'Convert 5 l to ml: 5 × 1 000 = 5 000 ml. Subtract the amount used: 5 000 − 2 350 = 2 650 ml left.' },
        { difficulty: 'Hard', question: 'At a braai, a host fills 7 cooldrink bottles, each holding 250 ml, from a 3 l container. How much cooldrink is left in the container, in millilitres?', checkMode: 'auto', correctAnswer: '1250ml', correctAnswers: ['1250ml', '1250 ml', '1250', '1.25l', '1.25 l'], explanation: 'Total poured: 7 × 250 ml = 1 750 ml. Convert 3 l to ml: 3 × 1 000 = 3 000 ml. Subtract: 3 000 − 1 750 = 1 250 ml left.' },
        { difficulty: 'Hard', question: 'Karabo pours three containers into an empty 3 l bucket: 1.5 l, 600 ml, and 700 ml. Will everything fit without the bucket overflowing? Show your working and explain.', checkMode: 'self', answer: 'Convert everything to millilitres: (1.5 × 1 000) ml + 600 ml + 700 ml = 1 500 + 600 + 700 = 2 800 ml. The bucket\'s capacity is 3 l = 3 000 ml. Since 2 800 ml is less than 3 000 ml, everything fits, with 200 ml of space still left over — the bucket will not overflow.' },
        { difficulty: 'Hard', question: 'Container P contains 4.2 l of paint. Container Q contains 4 150 ml of paint. Which container contains more paint, and by how many millilitres?', checkMode: 'auto', correctAnswer: 'P50ml', correctAnswers: ['P50ml', 'P, 50ml', 'P 50ml', 'Container P 50ml', 'containerP50ml'], explanation: 'Convert Container P to millilitres: 4.2 × 1 000 = 4 200 ml. Compare to Container Q: 4 150 ml. Container P has more, by 4 200 − 4 150 = 50 ml.' },
        { difficulty: 'Hard', question: 'An aquarium has a capacity of 20 l. It is filled using a 2.5 l jug poured in 7 times, then a further 1 800 ml is added from a hose. Is the aquarium now full, overflowing, or still not full? Explain your reasoning with full working.', checkMode: 'self', answer: 'Water from the jug: 7 × 2.5 l = 17.5 l = 17 500 ml. Add the extra: 17 500 + 1 800 = 19 300 ml, which is 19.3 l. The aquarium\'s capacity is 20 l. Since 19.3 l is less than 20 l, the aquarium is not yet full — it still has 20 − 19.3 = 0.7 l (700 ml) of space left before it would overflow.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply capacity, volume, conversions, and jug readings to real-world problems.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of these skills — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on word problems and calculations, then try again.' },
        { minScore: 0, message: 'Keep going! Work through the study guide again and retry this set.' },
      ],
    },
  ] as PracticeSet[],
}
