import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Mass',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — UNITS OF MASS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'units-of-mass',
      title: 'Units of Mass',
      icon: '⚖️',
      explanation: `
<p style="margin-bottom:14px;"><strong>Mass</strong> tells us <strong>how heavy an object is</strong>. We measure mass using standard units so that everyone gets the same result. Choosing the right unit makes measuring much easier — we would not measure the mass of a person in grams!</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">The two units of mass</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Gram<br/><span style="font-weight:400;font-size:12px;">(g)</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Light objects.</strong> A gram is a very small amount of mass. Use <strong style="color:#1e40af;">grams (g)</strong> when measuring light objects like a slice of bread, a sweet or a pen. There are <strong>1 000 g in 1 kg</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Kilogram<br/><span style="font-weight:400;font-size:12px;">(kg)</span></span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong>Heavier objects.</strong> A kilogram is much heavier than a gram. Use <strong style="color:#dc2626;">kilograms (kg)</strong> when measuring heavier objects like a bag of sugar, a person or a school bag.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Conversion fact 🔢</span>
  <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:10px;">
    <span style="background:#1e40af;color:#fff;border-radius:8px;padding:6px 16px;font-weight:700;font-size:15px;">1 000 <span style="color:#bfdbfe;">g</span> = 1 <span style="color:#fca5a5;">kg</span></span>
  </div>
  <p style="margin-top:10px;font-size:14px;color:#78350f;">To convert <strong style="color:#1e40af;">kg to g</strong> — <strong>multiply by 1 000</strong>. &nbsp;&nbsp; To convert <strong style="color:#1e40af;">g to kg</strong> — <strong>divide by 1 000</strong>.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Real-life reference points</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 1 g</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">A <strong>paperclip</strong> weighs about <strong style="color:#1e40af;">1 g</strong> — use it to picture just how light a gram is.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 700 g</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">A <strong>loaf of bread</strong> weighs about <strong style="color:#1e40af;">700 g</strong> — lighter than 1 kg but still measured in grams.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">1 kg</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">A <strong>bag of sugar</strong> weighs exactly <strong style="color:#dc2626;">1 kg</strong> — a great object to pick up and feel what 1 kg is.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 30 kg</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">A <strong>Grade 4 learner</strong> weighs about <strong style="color:#dc2626;">30 kg</strong> — large masses of people and animals are always measured in kilograms.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Choosing the right unit</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Unit</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Use when measuring …</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Real-life examples</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">g</td>
          <td style="padding:8px 14px;color:#475569;">Light objects</td>
          <td style="padding:8px 14px;color:#475569;">A sweet, a pen, a slice of bread</td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#dc2626;">kg</td>
          <td style="padding:8px 14px;color:#475569;">Heavier objects</td>
          <td style="padding:8px 14px;color:#475569;">A school bag, a person, a bag of sugar</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Which unit would you use to measure the mass of a school bag?',
          steps: [
            'A school bag is a <strong>moderately heavy</strong> object — it holds books, stationery and a lunchbox.',
            'It is <strong>too heavy</strong> for grams to be practical — a school bag is thousands of grams, which is an awkward number.',
            '<strong style="color:#dc2626;">Kilograms (kg)</strong> are the right choice for heavier objects like school bags.',
          ],
          answer: 'Kilograms (kg). A school bag is a heavy object best measured in kilograms.',
        },
        {
          question: 'Which unit would you use to measure the mass of a sweet?',
          steps: [
            'A sweet is a <strong>very light object</strong> — you can barely feel it in your hand.',
            '<strong style="color:#1e40af;">Grams (g)</strong> are used for light objects like sweets, because the mass is far too small to measure in kilograms.',
          ],
          answer: 'Grams (g). A sweet is a very light object best measured in grams.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'Four objects shown with their mass — a paperclip showing 1g, a slice of bread showing about 30g, a bag of sugar showing 1kg and a school bag showing about 3kg',
      videoPlaceholder:
        'Short video explaining grams and kilograms with real life examples of when to use each unit',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — ESTIMATING AND READING MASS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating-reading-mass',
      title: 'Estimating and Reading Mass',
      icon: '🔍',
      explanation: `
<p style="margin-bottom:14px;"><strong>Estimating</strong> mass means making a <strong>careful guess</strong> before you measure. A good estimate uses a <strong>reference point</strong> — something whose mass you already know — to help you judge how heavy an object is. After you estimate, you measure to find the <strong>actual measurement</strong>.</p>

<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="display:flex;flex-wrap:wrap;gap:10px;">
    <div style="background:#fff;border:1.5px solid #fdba74;border-radius:8px;padding:10px 16px;flex:1;min-width:180px;">
      <div style="font-size:12px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px;">Estimate</div>
      <div style="color:#7c2d12;font-size:14px;">Your careful guess <em>before</em> measuring. Written as <strong style="color:#ea580c;">≈ 250 g</strong> (the ≈ symbol means "approximately").</div>
    </div>
    <div style="background:#fff;border:1.5px solid #bfdbfe;border-radius:8px;padding:10px 16px;flex:1;min-width:180px;">
      <div style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px;">Actual measurement</div>
      <div style="color:#1e3a8a;font-size:14px;">The exact mass found by measuring on a scale. Written as <strong style="color:#1e40af;">= 260 g</strong>.</div>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Types of scales</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Kitchen scale</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Has a <strong>dial or digital display</strong>. Place the object on the platform and read the number shown. Used to measure food in <strong>grams or kilograms</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Bathroom scale</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong>Stand on it</strong> and read the number shown in <strong>kilograms</strong>. Used to measure the mass of a person.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Balance scale</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">Place the object on <strong>one side</strong> and known masses on the other side until the two sides <strong>balance evenly</strong>. The mass of the object equals the total of the known masses.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How to read a scale with intervals</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;"><strong>Find the maximum value</strong> on the scale — this is the largest number shown.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;"><strong>Count the number of intervals</strong> between two labelled numbers.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;"><strong>Calculate the value of each interval</strong> by dividing the gap between two labelled numbers by the number of intervals.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;"><strong>Read where the needle points</strong> by counting from the nearest labelled number.</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'A scale goes from 0 to 500 g with 5 small intervals between each 100 g mark. What is each small interval worth?',
          steps: [
            'Each labelled section covers <strong style="color:#1e40af;">100 g</strong> and is split into <strong style="color:#1e40af;">5</strong> small intervals.',
            'Divide the section by the number of intervals: <strong style="color:#1e40af;">100</strong> ÷ <strong style="color:#1e40af;">5</strong> = <strong style="color:#ea580c;">20</strong>',
          ],
          answer: 'Each small interval is worth 20 g.',
        },
        {
          question:
            'A scale shows the needle pointing halfway between 300 g and 400 g. What is the mass?',
          steps: [
            'The needle is <strong>halfway</strong> between <strong style="color:#1e40af;">300 g</strong> and <strong style="color:#1e40af;">400 g</strong>.',
            'The gap between 300 and 400 is 100 g. Halfway = 100 ÷ 2 = 50 g past 300.',
            '<strong style="color:#1e40af;">300</strong> + <strong style="color:#ea580c;">50</strong> = <strong style="color:#ea580c;">350</strong>',
          ],
          answer: 'The mass is 350 g.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A circular kitchen scale dial showing 0 to 1000g with the needle pointing to 350g and each interval clearly marked',
      videoPlaceholder:
        'Short video showing how to read different types of scales including kitchen scales and balance scales',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CONVERTING BETWEEN GRAMS AND KILOGRAMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-grams-kilograms',
      title: 'Converting Between Grams and Kilograms',
      icon: '🔄',
      explanation: `
<p style="margin-bottom:14px;"><strong>Converting</strong> means changing a measurement from one unit to another. The amount stays the same — only the unit and the number change. All conversions between grams and kilograms use one fact: <strong style="color:#16a34a;">1 000 g = 1 kg</strong>.</p>

<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Memory trick 💡</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="color:#7f1d1d;font-size:15px;">Going to a <strong>smaller unit</strong> (<strong style="color:#dc2626;">kg</strong> → <strong style="color:#1e40af;">g</strong>) → <strong style="color:#16a34a;">multiply by 1 000</strong> → the number gets <strong>bigger</strong>.</div>
    <div style="color:#7f1d1d;font-size:15px;">Going to a <strong>bigger unit</strong> (<strong style="color:#1e40af;">g</strong> → <strong style="color:#dc2626;">kg</strong>) → <strong style="color:#16a34a;">divide by 1 000</strong> → the number gets <strong>smaller</strong>.</div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Conversion rules</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">From</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">To</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Operation</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">g</td>
          <td style="padding:8px 14px;font-weight:700;color:#dc2626;">kg</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#16a34a;">÷ 1 000</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">2 000 g</span> = <span style="color:#dc2626;font-weight:700;">2 kg</span></td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#dc2626;">kg</td>
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">g</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#16a34a;">× 1 000</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#dc2626;font-weight:700;">3 kg</span> = <span style="color:#1e40af;font-weight:700;">3 000 g</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Convert 3 500 g to kg.',
          steps: [
            'To go from <strong style="color:#1e40af;">g</strong> to <strong style="color:#dc2626;">kg</strong> — <strong style="color:#16a34a;">divide by 1 000</strong> (going to a bigger unit, so the number gets smaller).',
            '<strong style="color:#1e40af;">3 500</strong> ÷ <strong style="color:#16a34a;">1 000</strong> = <strong style="color:#dc2626;">3.5</strong>',
          ],
          answer: '3 500 g = 3.5 kg',
        },
        {
          question: 'Convert 2.75 kg to g.',
          steps: [
            'To go from <strong style="color:#dc2626;">kg</strong> to <strong style="color:#1e40af;">g</strong> — <strong style="color:#16a34a;">multiply by 1 000</strong> (going to a smaller unit, so the number gets bigger).',
            '<strong style="color:#dc2626;">2.75</strong> × <strong style="color:#16a34a;">1 000</strong> = <strong style="color:#1e40af;">2 750</strong>',
          ],
          answer: '2.75 kg = 2 750 g',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — CALCULATING WITH MASS AND WORD PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-mass-word-problems',
      title: 'Calculating with Mass and Word Problems',
      icon: '📝',
      explanation: `
<p style="margin-bottom:14px;">Mass word problems ask you to <strong>add</strong> or <strong>subtract</strong> masses to solve real-life situations. Before you calculate, always <strong>read the question carefully</strong>, look for <strong>key words</strong>, and make sure both masses are in the <strong>same unit</strong>.</p>

<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#c2410c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Key words to look for</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">

    <div style="background:#fff;border:1.5px solid #bfdbfe;border-radius:8px;padding:10px 16px;flex:1;min-width:200px;">
      <div style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;">Addition ➕</div>
      <div style="display:flex;flex-direction:column;gap:4px;">
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">total mass</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">altogether</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">combined</strong></span>
      </div>
    </div>

    <div style="background:#fff;border:1.5px solid #bfdbfe;border-radius:8px;padding:10px 16px;flex:1;min-width:200px;">
      <div style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;">Subtraction ➖</div>
      <div style="display:flex;flex-direction:column;gap:4px;">
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">difference</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">how much heavier / lighter</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">remaining</strong></span>
      </div>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Steps for solving a mass word problem</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Read</strong> the question carefully.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Find the key word</strong> and decide whether to add or subtract.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Convert</strong> so both masses are in the same unit.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Calculate</strong> and write the answer with the correct unit.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'A bag of apples weighs 1 kg 500 g and a bag of oranges weighs 750 g. What is the total mass?',
          steps: [
            'Key word: <strong style="color:#ea580c;">total mass</strong> — this means <strong>addition</strong>.',
            'Convert to the same unit: <strong style="color:#dc2626;">1 kg 500 g</strong> = <strong style="color:#1e40af;">1 500 g</strong>.',
            'Add: <strong style="color:#1e40af;">1 500 g</strong> + <strong style="color:#1e40af;">750 g</strong> = <strong style="color:#1e40af;">2 250 g</strong>.',
            'Convert back: 2 250 g = <strong style="color:#dc2626;">2 kg 250 g</strong>.',
          ],
          answer: 'The total mass is 2 kg 250 g.',
        },
        {
          question:
            'A box weighs 5 kg. After removing some books it weighs 2 kg 300 g. How much did the books weigh?',
          steps: [
            'Key word: <strong style="color:#ea580c;">removing</strong> — this means <strong>subtraction</strong>.',
            'Convert to the same unit: <strong style="color:#dc2626;">5 kg</strong> = <strong style="color:#1e40af;">5 000 g</strong> and <strong style="color:#dc2626;">2 kg 300 g</strong> = <strong style="color:#1e40af;">2 300 g</strong>.',
            'Subtract: <strong style="color:#1e40af;">5 000 g</strong> − <strong style="color:#1e40af;">2 300 g</strong> = <strong style="color:#1e40af;">2 700 g</strong>.',
            'Convert: 2 700 g = <strong style="color:#dc2626;">2 kg 700 g</strong>.',
          ],
          answer: 'The books weighed 2 kg 700 g.',
        },
        {
          question:
            'A recipe needs 750 g of flour. Lerato has 2 kg of flour. How much flour will she have left after baking?',
          steps: [
            'Key word: <strong style="color:#ea580c;">left</strong> — this means <strong>subtraction</strong>.',
            'Convert <strong style="color:#dc2626;">2 kg</strong> to grams: <strong style="color:#dc2626;">2</strong> × <strong style="color:#16a34a;">1 000</strong> = <strong style="color:#1e40af;">2 000 g</strong>.',
            'Subtract: <strong style="color:#1e40af;">2 000 g</strong> − <strong style="color:#1e40af;">750 g</strong> = <strong style="color:#1e40af;">1 250 g</strong>.',
            'Convert: 1 250 g = <strong style="color:#dc2626;">1 kg 250 g</strong>.',
          ],
          answer: 'Lerato will have 1 kg 250 g of flour left.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder:
        'Short video showing how to solve mass word problems by identifying key words and converting to the same unit before calculating',
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — FOUNDATIONAL UNIT CONVERSIONS (g ↔ kg) (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: Foundational Conversions',
      questions: [
        { difficulty: 'Easy', question: 'Convert 1 kg to grams.', answer: '1 000 g', checkMode: 'auto', correctAnswer: '1000g', correctAnswers: ['1000g', '1000', '1000 g', '1 000g', '1 000 g'], explanation: 'To convert kg to g, multiply by 1 000: 1 × 1 000 = 1 000 g.' },
        { difficulty: 'Easy', question: 'Convert 2 kg to grams.', answer: '2 000 g', checkMode: 'auto', correctAnswer: '2000g', correctAnswers: ['2000g', '2000', '2000 g', '2 000g', '2 000 g'], explanation: 'Multiply by 1 000: 2 × 1 000 = 2 000 g.' },
        { difficulty: 'Easy', question: 'Convert 3 kg to grams.', answer: '3 000 g', checkMode: 'auto', correctAnswer: '3000g', correctAnswers: ['3000g', '3000', '3000 g', '3 000g', '3 000 g'], explanation: 'Multiply by 1 000: 3 × 1 000 = 3 000 g.' },
        { difficulty: 'Easy', question: 'Convert 4 kg to grams.', answer: '4 000 g', checkMode: 'auto', correctAnswer: '4000g', correctAnswers: ['4000g', '4000', '4000 g', '4 000g', '4 000 g'], explanation: 'Multiply by 1 000: 4 × 1 000 = 4 000 g.' },
        { difficulty: 'Easy', question: 'Convert 5 kg to grams.', answer: '5 000 g', checkMode: 'auto', correctAnswer: '5000g', correctAnswers: ['5000g', '5000', '5000 g', '5 000g', '5 000 g'], explanation: 'Multiply by 1 000: 5 × 1 000 = 5 000 g.' },
        { difficulty: 'Easy', question: 'Convert 7 kg to grams.', answer: '7 000 g', checkMode: 'auto', correctAnswer: '7000g', correctAnswers: ['7000g', '7000', '7000 g', '7 000g', '7 000 g'], explanation: 'Multiply by 1 000: 7 × 1 000 = 7 000 g.' },
        { difficulty: 'Easy', question: 'Convert 9 kg to grams.', answer: '9 000 g', checkMode: 'auto', correctAnswer: '9000g', correctAnswers: ['9000g', '9000', '9000 g', '9 000g', '9 000 g'], explanation: 'Multiply by 1 000: 9 × 1 000 = 9 000 g.' },
        { difficulty: 'Easy', question: 'Convert 10 kg to grams.', answer: '10 000 g', checkMode: 'auto', correctAnswer: '10000g', correctAnswers: ['10000g', '10000', '10000 g', '10 000g', '10 000 g'], explanation: 'Multiply by 1 000: 10 × 1 000 = 10 000 g.' },
        { difficulty: 'Easy', question: 'Convert 1 000 g to kilograms.', answer: '1 kg', checkMode: 'auto', correctAnswer: '1kg', correctAnswers: ['1kg', '1', '1 kg'], explanation: 'To convert g to kg, divide by 1 000: 1 000 ÷ 1 000 = 1 kg.' },
        { difficulty: 'Easy', question: 'Convert 2 000 g to kilograms.', answer: '2 kg', checkMode: 'auto', correctAnswer: '2kg', correctAnswers: ['2kg', '2', '2 kg'], explanation: 'Divide by 1 000: 2 000 ÷ 1 000 = 2 kg.' },
        { difficulty: 'Easy', question: 'Convert 3 000 g to kilograms.', answer: '3 kg', checkMode: 'auto', correctAnswer: '3kg', correctAnswers: ['3kg', '3', '3 kg'], explanation: 'Divide by 1 000: 3 000 ÷ 1 000 = 3 kg.' },
        { difficulty: 'Easy', question: 'Convert 4 000 g to kilograms.', answer: '4 kg', checkMode: 'auto', correctAnswer: '4kg', correctAnswers: ['4kg', '4', '4 kg'], explanation: 'Divide by 1 000: 4 000 ÷ 1 000 = 4 kg.' },
        { difficulty: 'Easy', question: 'Convert 5 000 g to kilograms.', answer: '5 kg', checkMode: 'auto', correctAnswer: '5kg', correctAnswers: ['5kg', '5', '5 kg'], explanation: 'Divide by 1 000: 5 000 ÷ 1 000 = 5 kg.' },
        { difficulty: 'Easy', question: 'Convert 6 000 g to kilograms.', answer: '6 kg', checkMode: 'auto', correctAnswer: '6kg', correctAnswers: ['6kg', '6', '6 kg'], explanation: 'Divide by 1 000: 6 000 ÷ 1 000 = 6 kg.' },
        { difficulty: 'Easy', question: 'Convert 8 000 g to kilograms.', answer: '8 kg', checkMode: 'auto', correctAnswer: '8kg', correctAnswers: ['8kg', '8', '8 kg'], explanation: 'Divide by 1 000: 8 000 ÷ 1 000 = 8 kg.' },
        { difficulty: 'Easy', question: 'Convert 10 000 g to kilograms.', answer: '10 kg', checkMode: 'auto', correctAnswer: '10kg', correctAnswers: ['10kg', '10', '10 kg'], explanation: 'Divide by 1 000: 10 000 ÷ 1 000 = 10 kg.' },
        { difficulty: 'Medium', question: 'Convert half a kilogram to grams.', answer: '500 g', checkMode: 'auto', correctAnswer: '500g', correctAnswers: ['500g', '500', '500 g'], explanation: 'Half of 1 kg = half of 1 000 g. 0.5 × 1 000 = 500 g.' },
        { difficulty: 'Medium', question: 'Convert 0.5 kg to grams.', answer: '500 g', checkMode: 'auto', correctAnswer: '500g', correctAnswers: ['500g', '500', '500 g'], explanation: 'Multiply by 1 000: 0.5 × 1 000 = 500 g.' },
        { difficulty: 'Medium', question: 'Convert 1.5 kg to grams.', answer: '1 500 g', checkMode: 'auto', correctAnswer: '1500g', correctAnswers: ['1500g', '1500', '1500 g', '1 500g', '1 500 g'], explanation: 'Multiply by 1 000: 1.5 × 1 000 = 1 500 g.' },
        { difficulty: 'Medium', question: 'Convert 2.5 kg to grams.', answer: '2 500 g', checkMode: 'auto', correctAnswer: '2500g', correctAnswers: ['2500g', '2500', '2500 g', '2 500g', '2 500 g'], explanation: 'Multiply by 1 000: 2.5 × 1 000 = 2 500 g.' },
        { difficulty: 'Medium', question: 'Convert 250 g to kilograms.', answer: '0.25 kg', checkMode: 'auto', correctAnswer: '0.25kg', correctAnswers: ['0.25kg', '0.25', '0.25 kg'], explanation: 'Divide by 1 000: 250 ÷ 1 000 = 0.25 kg.' },
        { difficulty: 'Medium', question: 'Convert 750 g to kilograms.', answer: '0.75 kg', checkMode: 'auto', correctAnswer: '0.75kg', correctAnswers: ['0.75kg', '0.75', '0.75 kg'], explanation: 'Divide by 1 000: 750 ÷ 1 000 = 0.75 kg.' },
        { difficulty: 'Medium', question: 'Convert 100 g to kilograms.', answer: '0.1 kg', checkMode: 'auto', correctAnswer: '0.1kg', correctAnswers: ['0.1kg', '0.1', '0.1 kg', '0.10', '0.10kg', '0.10 kg'], explanation: 'Divide by 1 000: 100 ÷ 1 000 = 0.1 kg.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the mass of a sweet — grams or kilograms?', answer: 'Grams', checkMode: 'auto', correctAnswer: 'g', correctAnswers: ['g', 'grams', 'gram'], explanation: 'A sweet is a very light object. Grams (g) are used for light objects because the mass is far too small to measure meaningfully in kilograms.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the mass of a school bag — grams or kilograms?', answer: 'Kilograms', checkMode: 'auto', correctAnswer: 'kg', correctAnswers: ['kg', 'kilograms', 'kilogram'], explanation: 'A school bag is a moderately heavy object, typically about 3–5 kg. Kilograms (kg) are used for heavier objects because the number of grams would be awkwardly large.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Perfect! You have mastered converting between grams and kilograms.' },
        { minScore: 19, message: 'Great work! Review any questions you got wrong and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the conversion rules and worked examples.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — MULTI-STEP CONVERSIONS, COMPARING AND READING SCALES (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Multi-Step Conversions and Scales',
      questions: [
        { difficulty: 'Easy', question: 'Convert 1 kg 500 g to grams.', answer: '1 500 g', checkMode: 'auto', correctAnswer: '1500g', correctAnswers: ['1500g', '1500', '1500 g', '1 500g', '1 500 g'], explanation: '1 kg = 1 000 g, so 1 kg 500 g = 1 000 g + 500 g = 1 500 g.' },
        { difficulty: 'Easy', question: 'Convert 2 kg 250 g to grams.', answer: '2 250 g', checkMode: 'auto', correctAnswer: '2250g', correctAnswers: ['2250g', '2250', '2250 g', '2 250g', '2 250 g'], explanation: '2 kg = 2 000 g, so 2 kg 250 g = 2 000 g + 250 g = 2 250 g.' },
        { difficulty: 'Medium', question: 'Convert 3 kg 100 g to grams.', answer: '3 100 g', checkMode: 'auto', correctAnswer: '3100g', correctAnswers: ['3100g', '3100', '3100 g', '3 100g', '3 100 g'], explanation: '3 kg = 3 000 g, so 3 kg 100 g = 3 000 g + 100 g = 3 100 g.' },
        { difficulty: 'Medium', question: 'Convert 1 kg 750 g to grams.', answer: '1 750 g', checkMode: 'auto', correctAnswer: '1750g', correctAnswers: ['1750g', '1750', '1750 g', '1 750g', '1 750 g'], explanation: '1 kg = 1 000 g, so 1 kg 750 g = 1 000 g + 750 g = 1 750 g.' },
        { difficulty: 'Medium', question: 'Convert 4 kg 20 g to grams.', answer: '4 020 g', checkMode: 'auto', correctAnswer: '4020g', correctAnswers: ['4020g', '4020', '4020 g', '4 020g', '4 020 g'], explanation: '4 kg = 4 000 g, so 4 kg 20 g = 4 000 g + 20 g = 4 020 g.' },
        { difficulty: 'Medium', question: 'Convert 2 500 g to kg and g.', answer: '2 kg 500 g', checkMode: 'auto', correctAnswer: '2kg500g', correctAnswers: ['2kg500g', '2 kg 500 g', '2kg 500g'], explanation: '2 500 g = 2 000 g + 500 g = 2 kg 500 g.' },
        { difficulty: 'Medium', question: 'Convert 3 750 g to kg and g.', answer: '3 kg 750 g', checkMode: 'auto', correctAnswer: '3kg750g', correctAnswers: ['3kg750g', '3 kg 750 g', '3kg 750g'], explanation: '3 750 g = 3 000 g + 750 g = 3 kg 750 g.' },
        { difficulty: 'Medium', question: 'Convert 5 250 g to kg and g.', answer: '5 kg 250 g', checkMode: 'auto', correctAnswer: '5kg250g', correctAnswers: ['5kg250g', '5 kg 250 g', '5kg 250g'], explanation: '5 250 g = 5 000 g + 250 g = 5 kg 250 g.' },
        { difficulty: 'Medium', question: 'Convert 1 200 g to kg and g.', answer: '1 kg 200 g', checkMode: 'auto', correctAnswer: '1kg200g', correctAnswers: ['1kg200g', '1 kg 200 g', '1kg 200g'], explanation: '1 200 g = 1 000 g + 200 g = 1 kg 200 g.' },
        { difficulty: 'Hard', question: 'Convert 6 080 g to kg and g.', answer: '6 kg 80 g', checkMode: 'auto', correctAnswer: '6kg80g', correctAnswers: ['6kg80g', '6 kg 80 g', '6kg 80g'], explanation: '6 080 g = 6 000 g + 80 g = 6 kg 80 g.' },
        { difficulty: 'Easy', question: 'Which is heavier: 900 g or 1 kg?', answer: '1 kg', checkMode: 'auto', correctAnswer: '1kg', correctAnswers: ['1kg', '1 kg'], explanation: '1 kg = 1 000 g, and 1 000 g is greater than 900 g, so 1 kg is heavier.' },
        { difficulty: 'Medium', question: 'Which is heavier: 1.2 kg or 1 200 g, or are they equal?', answer: 'Equal', checkMode: 'auto', correctAnswer: 'equal', correctAnswers: ['equal', 'same', 'they are equal'], explanation: '1.2 kg = 1.2 × 1 000 = 1 200 g, so 1.2 kg and 1 200 g are exactly equal.' },
        { difficulty: 'Medium', question: 'Which is heavier: 2.05 kg or 2 500 g?', answer: '2 500 g', checkMode: 'auto', correctAnswer: '2500g', correctAnswers: ['2500g', '2500 g', '2 500g', '2 500 g'], explanation: '2.05 kg = 2 050 g. Since 2 500 g > 2 050 g, 2 500 g is heavier.' },
        { difficulty: 'Medium', question: 'Order these masses from lightest to heaviest: 1 kg, 850 g, 1 200 g.', answer: '850 g, 1 kg, 1 200 g', checkMode: 'auto', correctAnswer: '850g, 1kg, 1200g', correctAnswers: ['850g, 1kg, 1200g', '850 g, 1 kg, 1 200 g', '850g,1kg,1200g'], explanation: 'Convert to grams: 1 kg = 1 000 g. So the masses are 850 g, 1 000 g, 1 200 g — already in order from lightest to heaviest.' },
        { difficulty: 'Hard', question: 'Order these masses from heaviest to lightest: 3.2 kg, 2 900 g, 3 kg.', answer: '3.2 kg, 3 kg, 2 900 g', checkMode: 'auto', correctAnswer: '3.2kg, 3kg, 2900g', correctAnswers: ['3.2kg, 3kg, 2900g', '3.2 kg, 3 kg, 2 900 g', '3.2kg,3kg,2900g'], explanation: 'Convert to grams: 3.2 kg = 3 200 g, 3 kg = 3 000 g, 2 900 g stays the same. From heaviest to lightest: 3 200 g, 3 000 g, 2 900 g.' },
        { difficulty: 'Easy', question: 'A scale goes from 0 to 1 000 g. The needle points exactly halfway. What is the mass?', answer: '500 g', checkMode: 'auto', correctAnswer: '500g', correctAnswers: ['500g', '500', '500 g'], explanation: 'Halfway between 0 and 1 000 is 1 000 ÷ 2 = 500 g.' },
        { difficulty: 'Easy', question: 'A scale goes from 0 to 300 g with 3 equal intervals. What is the value of each interval?', answer: '100 g', checkMode: 'auto', correctAnswer: '100g', correctAnswers: ['100g', '100', '100 g'], explanation: '300 ÷ 3 = 100 g per interval.' },
        { difficulty: 'Medium', question: 'A scale goes from 0 to 500 g with 5 equal intervals between each 100 g mark. What is the value of each small interval?', answer: '20 g', checkMode: 'auto', correctAnswer: '20g', correctAnswers: ['20g', '20', '20 g'], explanation: 'Each 100 g section is divided into 5 equal intervals. 100 ÷ 5 = 20 g per interval.' },
        { difficulty: 'Medium', question: 'A scale goes from 0 to 500 g with 5 equal intervals between each 100 g mark. If the needle points at the second interval after 200 g, what is the mass?', answer: '240 g', checkMode: 'auto', correctAnswer: '240g', correctAnswers: ['240g', '240', '240 g'], explanation: 'Each interval is worth 20 g. Start at 200 g and count 2 intervals: 200 + 20 + 20 = 240 g.' },
        { difficulty: 'Medium', question: 'A scale goes from 0 to 500 g with 5 equal intervals between each 100 g mark. If the needle points halfway between 300 g and 400 g, what is the mass?', answer: '350 g', checkMode: 'auto', correctAnswer: '350g', correctAnswers: ['350g', '350', '350 g'], explanation: 'The gap between 300 and 400 is 100 g. Halfway = 100 ÷ 2 = 50 g past 300. 300 + 50 = 350 g.' },
        { difficulty: 'Medium', question: 'A scale goes from 0 to 1 000 g with 10 equal intervals. What is the value of each small interval?', answer: '100 g', checkMode: 'auto', correctAnswer: '100g', correctAnswers: ['100g', '100', '100 g'], explanation: '1 000 ÷ 10 = 100 g per interval.' },
        { difficulty: 'Medium', question: 'A scale goes from 0 to 200 g with 4 equal intervals. What is the value of each small interval?', answer: '50 g', checkMode: 'auto', correctAnswer: '50g', correctAnswers: ['50g', '50', '50 g'], explanation: '200 ÷ 4 = 50 g per interval.' },
        { difficulty: 'Hard', question: 'A scale goes from 0 to 1 000 g with intervals of 20 g. If the needle points at the 3rd interval after 600 g, what is the mass?', answer: '660 g', checkMode: 'auto', correctAnswer: '660g', correctAnswers: ['660g', '660', '660 g'], explanation: 'Each interval is 20 g. Start at 600 g and count 3 intervals: 600 + 20 + 20 + 20 = 660 g.' },
        { difficulty: 'Hard', question: 'A balance scale has a bag of flour on one side. To balance it, two 500 g weights and one 250 g weight are placed on the other side. What is the mass of the flour?', answer: '1 250 g', checkMode: 'auto', correctAnswer: '1250g', correctAnswers: ['1250g', '1250', '1250 g', '1 250g', '1 250 g'], explanation: 'A balance scale balances when both sides have equal mass. Add the weights: 500 g + 500 g + 250 g = 1 250 g, so the flour has a mass of 1 250 g.' },
        { difficulty: 'Hard', question: 'Convert the mass of the flour in the previous question (1 250 g) to kilograms.', answer: '1.25 kg', checkMode: 'auto', correctAnswer: '1.25kg', correctAnswers: ['1.25kg', '1.25', '1.25 kg'], explanation: 'Divide by 1 000: 1 250 ÷ 1 000 = 1.25 kg.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Excellent! You can confidently convert, compare and read mass scales.' },
        { minScore: 19, message: 'Great work! Review any questions you got wrong and try again.' },
        { minScore: 13, message: 'Good effort! Revisit how to read scale intervals and compare masses.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — ESTIMATING REALISTIC MASSES AND WORD PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Estimating and Word Problems',
      questions: [
        { difficulty: 'Easy', question: 'Which is the more realistic estimate for the mass of an apple: 150 g or 150 kg?', answer: '150 g', checkMode: 'auto', correctAnswer: '150g', correctAnswers: ['150g', '150 g'], explanation: 'An apple is a light object you can easily hold in one hand — about 150 g. 150 kg would be as heavy as two adults.' },
        { difficulty: 'Easy', question: 'Which is the more realistic estimate for the mass of a Grade 4 learner: 30 kg or 30 g?', answer: '30 kg', checkMode: 'auto', correctAnswer: '30kg', correctAnswers: ['30kg', '30 kg'], explanation: 'A Grade 4 learner is a fairly large mass, measured in kilograms — about 30 kg. 30 g would be lighter than a slice of bread.' },
        { difficulty: 'Easy', question: 'Which is the more realistic estimate for the mass of a loaf of bread: 700 g or 7 kg?', answer: '700 g', checkMode: 'auto', correctAnswer: '700g', correctAnswers: ['700g', '700 g'], explanation: 'A loaf of bread is a moderate mass — about 700 g. 7 kg would be as heavy as a large bag of potatoes.' },
        { difficulty: 'Easy', question: 'Which is the more realistic estimate for the mass of a school bag packed with books: 4 kg or 4 g?', answer: '4 kg', checkMode: 'auto', correctAnswer: '4kg', correctAnswers: ['4kg', '4 kg'], explanation: 'A packed school bag is fairly heavy — about 4 kg. 4 g would be lighter than a paperclip times four.' },
        { difficulty: 'Medium', question: 'Which is the more realistic estimate for the mass of a bag of sugar: 1 kg or 100 g?', answer: '1 kg', checkMode: 'auto', correctAnswer: '1kg', correctAnswers: ['1kg', '1 kg'], explanation: 'A standard bag of sugar has a mass of exactly 1 kg (1 000 g). 100 g would be far too light.' },
        { difficulty: 'Medium', question: 'Which is the more realistic estimate for the mass of a paperclip: 1 g or 1 kg?', answer: '1 g', checkMode: 'auto', correctAnswer: '1g', correctAnswers: ['1g', '1 g'], explanation: 'A paperclip is extremely light — about 1 g. 1 kg would be as heavy as a bag of sugar.' },
        { difficulty: 'Medium', question: 'Estimate the mass of a bag of potatoes. Choose the most realistic option: 3 kg, 3 g, or 300 kg.', answer: '3 kg', checkMode: 'auto', correctAnswer: '3kg', correctAnswers: ['3kg', '3 kg'], explanation: 'A bag of potatoes is a moderately heavy grocery item — about 3 kg is realistic.' },
        { difficulty: 'Medium', question: 'Lindiwe estimates a watermelon has a mass of about 4 kg. Is this a realistic estimate? Answer yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'A watermelon is a large, heavy fruit — 4 kg is a realistic mass for one.' },
        { difficulty: 'Medium', question: 'Sipho estimates his pencil case has a mass of about 2 kg. Is this a realistic estimate? Answer yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'A pencil case usually has a mass of about 200–300 g. 2 kg would be far too heavy — that is closer to two bags of sugar.' },
        { difficulty: 'Easy', question: 'A bag of apples has a mass of 1 200 g. A bag of pears has a mass of 800 g. What is the total mass of both bags?', answer: '2 000 g or 2 kg', checkMode: 'auto', correctAnswer: '2000g', correctAnswers: ['2000g', '2000', '2000 g', '2 000g', '2 000 g', '2kg', '2 kg'], explanation: 'Add the masses: 1 200 g + 800 g = 2 000 g = 2 kg.' },
        { difficulty: 'Easy', question: 'A recipe uses 300 g of flour. If Naledi makes the recipe 4 times, how much flour does she use in total?', answer: '1 200 g or 1 kg 200 g', checkMode: 'auto', correctAnswer: '1200g', correctAnswers: ['1200g', '1200', '1200 g', '1 200g', '1 200 g', '1kg200g', '1 kg 200 g'], explanation: 'Multiply: 300 g × 4 = 1 200 g = 1 kg 200 g.' },
        { difficulty: 'Medium', question: 'A recipe needs 750 g of flour. Lerato has 2 kg of flour. How much flour will she have left after baking?', answer: '1 250 g or 1 kg 250 g', checkMode: 'auto', correctAnswer: '1250g', correctAnswers: ['1250g', '1250', '1250 g', '1 250g', '1 250 g', '1kg250g', '1 kg 250 g'], explanation: 'Convert 2 kg to grams: 2 × 1 000 = 2 000 g. Subtract: 2 000 g − 750 g = 1 250 g = 1 kg 250 g.' },
        { difficulty: 'Medium', question: 'Two parcels have masses of 1 500 g and 2 500 g. What is their total mass in kilograms?', answer: '4 kg', checkMode: 'auto', correctAnswer: '4kg', correctAnswers: ['4kg', '4', '4 kg', '4000g', '4 000 g'], explanation: 'Add: 1 500 g + 2 500 g = 4 000 g = 4 kg.' },
        { difficulty: 'Medium', question: 'A shopkeeper has a 5 kg bag of rice. She sells 1 kg 250 g of rice to a customer. How much rice is left?', answer: '3 kg 750 g', checkMode: 'auto', correctAnswer: '3kg750g', correctAnswers: ['3kg750g', '3750g', '3750', '3 kg 750 g', '3kg 750g'], explanation: 'Convert: 5 kg = 5 000 g. Subtract: 5 000 g − 1 250 g = 3 750 g = 3 kg 750 g.' },
        { difficulty: 'Medium', question: 'A box of apples has a mass of 10 kg. A smaller box of oranges has a mass of 2 kg 500 g. What is the difference in mass between the two boxes?', answer: '7 kg 500 g', checkMode: 'auto', correctAnswer: '7kg500g', correctAnswers: ['7kg500g', '7500g', '7500', '7 kg 500 g', '7kg 500g'], explanation: 'Convert: 10 kg = 10 000 g and 2 kg 500 g = 2 500 g. Subtract: 10 000 g − 2 500 g = 7 500 g = 7 kg 500 g.' },
        { difficulty: 'Medium', question: 'Three small bags have masses of 500 g, 750 g and 250 g. What is their total mass?', answer: '1 500 g or 1.5 kg', checkMode: 'auto', correctAnswer: '1500g', correctAnswers: ['1500g', '1500', '1500 g', '1 500g', '1 500 g', '1.5kg', '1.5 kg'], explanation: 'Add: 500 g + 750 g + 250 g = 1 500 g = 1.5 kg.' },
        { difficulty: 'Hard', question: 'A classroom has 25 learners with an average mass of 30 kg each. What is the total mass of all the learners?', answer: '750 kg', checkMode: 'auto', correctAnswer: '750kg', correctAnswers: ['750kg', '750', '750 kg'], explanation: 'Multiply: 25 × 30 kg = 750 kg.' },
        { difficulty: 'Hard', question: 'Two bags of sugar each have a mass of 1 kg. What is their combined mass in grams?', answer: '2 000 g', checkMode: 'auto', correctAnswer: '2000g', correctAnswers: ['2000g', '2000', '2000 g', '2 000g', '2 000 g'], explanation: '1 kg + 1 kg = 2 kg = 2 × 1 000 g = 2 000 g.' },
        { difficulty: 'Hard', question: 'A baker uses 1 kg 750 g of flour for bread and 1 kg 500 g of flour for muffins. What is the total mass of flour used?', answer: '3 kg 250 g', checkMode: 'auto', correctAnswer: '3kg250g', correctAnswers: ['3kg250g', '3250g', '3250', '3.25kg', '3.25', '3 kg 250 g', '3kg 250g'], explanation: 'Add: 1 750 g + 1 500 g = 3 250 g = 3 kg 250 g.' },
        { difficulty: 'Hard', question: 'The baker in the previous question started with 5 kg of flour. How much flour is left after using 3 kg 250 g?', answer: '1 kg 750 g', checkMode: 'auto', correctAnswer: '1kg750g', correctAnswers: ['1kg750g', '1750g', '1750', '1.75kg', '1.75', '1 kg 750 g', '1kg 750g'], explanation: 'Convert: 5 kg = 5 000 g. Subtract: 5 000 g − 3 250 g = 1 750 g = 1 kg 750 g.' },
        { difficulty: 'Medium', question: 'A fruit basket has 6 apples, each with a mass of about 150 g. Estimate the total mass of the apples.', answer: '900 g', checkMode: 'auto', correctAnswer: '900g', correctAnswers: ['900g', '900', '900 g'], explanation: 'Multiply: 6 × 150 g = 900 g.' },
        { difficulty: 'Medium', question: 'A vegetable box has a mass of 6 kg. If 2 kg 400 g of vegetables are removed, what mass is left?', answer: '3 kg 600 g', checkMode: 'auto', correctAnswer: '3kg600g', correctAnswers: ['3kg600g', '3600g', '3600', '3 kg 600 g', '3kg 600g'], explanation: 'Convert: 6 kg = 6 000 g and 2 kg 400 g = 2 400 g. Subtract: 6 000 g − 2 400 g = 3 600 g = 3 kg 600 g.' },
        { difficulty: 'Hard', question: 'A mother has a mass of 3 kg 500 g more than her toddler. If the toddler has a mass of 12 kg 800 g, what is the total mass of both the mother and toddler combined? (Hint: first find the mother\'s mass.)', answer: '29 kg 100 g', checkMode: 'auto', correctAnswer: '29kg100g', correctAnswers: ['29kg100g', '29100g', '29100', '29 kg 100 g', '29kg 100g'], explanation: 'Mother\'s mass = 12 kg 800 g + 3 kg 500 g = 16 kg 300 g. Total = 16 kg 300 g + 12 kg 800 g = 29 kg 100 g.' },
        { difficulty: 'Hard', question: 'A delivery van carries 8 boxes, each with a mass of 500 g. What is the total mass carried by the van in kilograms?', answer: '4 kg', checkMode: 'auto', correctAnswer: '4kg', correctAnswers: ['4kg', '4', '4 kg'], explanation: 'Multiply: 8 × 500 g = 4 000 g = 4 kg.' },
        { difficulty: 'Hard', question: 'Explain why a bathroom scale is used to measure a person\'s mass instead of a kitchen scale.', answer: 'A kitchen scale is designed for small, light items like food ingredients and usually only measures up to a few kilograms. A bathroom scale is designed to measure much heavier masses, like a person\'s body, which can be tens of kilograms — far more than a kitchen scale can handle.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Fantastic! You can estimate realistic masses and solve mass word problems with confidence.' },
        { minScore: 19, message: 'Great work! Review any questions you got wrong and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the real-life reference points and word problem steps.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP, COMBINED AND SELF-CHECK PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Multi-Step and Combined Problems',
      questions: [
        { difficulty: 'Hard', question: 'Three parcels have masses of 1 kg 250 g, 900 g, and 1 kg 600 g. What is the total mass of all three parcels in grams?', answer: '3 750 g', checkMode: 'auto', correctAnswer: '3750g', correctAnswers: ['3750g', '3750', '3750 g', '3 750g', '3 750 g'], explanation: 'Convert all to grams: 1 250 g + 900 g + 1 600 g = 3 750 g.' },
        { difficulty: 'Hard', question: 'Convert the total mass of the three parcels from the previous question (3 750 g) to kilograms.', answer: '3.75 kg', checkMode: 'auto', correctAnswer: '3.75kg', correctAnswers: ['3.75kg', '3.75', '3.75 kg'], explanation: 'Divide by 1 000: 3 750 ÷ 1 000 = 3.75 kg.' },
        { difficulty: 'Hard', question: 'Is the total mass of the three parcels (3.75 kg) more or less than 4 kg? Explain your answer.', answer: 'Less than 4 kg. Since 3.75 kg < 4 kg, the total mass is less than 4 kg.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Flour costs R15 per kg. What is the cost of 3.25 kg of flour? Show your working.', answer: 'R15 × 3.25 = R48.75. The total cost is R48.75.', checkMode: 'auto', correctAnswer: '48.75', correctAnswers: ['48.75', 'R48.75', '48.75rand', 'R48.75rand'], explanation: 'Cost = R15 × 3.25 = R48.75.' },
        { difficulty: 'Hard', question: 'Flour costs R20 per kg. What is the cost of 2.5 kg of flour?', answer: 'R50', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', 'R50'], explanation: 'Cost = R20 × 2.5 = R50.' },
        { difficulty: 'Hard', question: 'A baker has 4 bags of flour, each with a mass of 250 g. What is the total mass of flour in grams?', answer: '1 000 g or 1 kg', checkMode: 'auto', correctAnswer: '1000g', correctAnswers: ['1000g', '1000', '1000 g', '1 000g', '1 000 g', '1kg', '1 kg'], explanation: 'Multiply: 4 × 250 g = 1 000 g = 1 kg.' },
        { difficulty: 'Hard', question: 'A shop has 6 bags of rice, each with a mass of 500 g. What is the total mass of rice in kilograms?', answer: '3 kg', checkMode: 'auto', correctAnswer: '3kg', correctAnswers: ['3kg', '3', '3 kg'], explanation: 'Multiply: 6 × 500 g = 3 000 g = 3 kg.' },
        { difficulty: 'Hard', question: 'A recipe uses 300 g of flour per batch. If a baker makes 4 batches, how much flour is used in total? Give your answer in kg and g.', answer: '1 kg 200 g', checkMode: 'auto', correctAnswer: '1kg200g', correctAnswers: ['1kg200g', '1200g', '1200', '1 kg 200 g', '1kg 200g'], explanation: 'Multiply: 300 g × 4 = 1 200 g = 1 kg 200 g.' },
        { difficulty: 'Hard', question: 'A vegetable stall sells 1 kg 750 g of tomatoes and 1 kg 500 g of onions. What is the total mass sold, and is it more than 3 kg?', answer: '3 kg 250 g, which is more than 3 kg. 1 750 g + 1 500 g = 3 250 g = 3 kg 250 g, and 3 kg 250 g > 3 kg.', checkMode: 'auto', correctAnswer: '3kg250g', correctAnswers: ['3kg250g', '3250g', '3250', '3 kg 250 g', '3kg 250g'], explanation: 'Add: 1 750 g + 1 500 g = 3 250 g = 3 kg 250 g. Since 3 250 g > 3 000 g, the total is more than 3 kg.' },
        { difficulty: 'Hard', question: 'A box has a mass of 10 kg. After some tins are removed, it has a mass of 6 kg 400 g. What mass of tins was removed?', answer: '3 kg 600 g', checkMode: 'auto', correctAnswer: '3kg600g', correctAnswers: ['3kg600g', '3600g', '3600', '3 kg 600 g', '3kg 600g'], explanation: 'Convert: 10 kg = 10 000 g and 6 kg 400 g = 6 400 g. Subtract: 10 000 g − 6 400 g = 3 600 g = 3 kg 600 g.' },
        { difficulty: 'Hard', question: 'A truck carries 3 crates with masses of 12 kg 500 g, 9 kg 750 g and 15 kg 250 g. What is the total mass of all three crates?', answer: '37 kg 500 g', checkMode: 'auto', correctAnswer: '37kg500g', correctAnswers: ['37kg500g', '37500g', '37500', '37 kg 500 g', '37kg 500g'], explanation: 'Convert all to grams: 12 500 g + 9 750 g + 15 250 g = 37 500 g = 37 kg 500 g.' },
        { difficulty: 'Hard', question: 'A farmer packs 5 crates of vegetables, each with a mass of 8 kg 400 g. What is the total mass of all 5 crates?', answer: '42 kg', checkMode: 'auto', correctAnswer: '42kg', correctAnswers: ['42kg', '42', '42 kg', '42000g', '42 000 g'], explanation: 'Multiply: 8 kg 400 g = 8 400 g. 8 400 g × 5 = 42 000 g = 42 kg.' },
        { difficulty: 'Hard', question: 'Two friends, Kagiso and Zanele, together carry a total mass of 9 kg. If Kagiso carries 3 kg 750 g, how much does Zanele carry?', answer: '5 kg 250 g', checkMode: 'auto', correctAnswer: '5kg250g', correctAnswers: ['5kg250g', '5250g', '5250', '5 kg 250 g', '5kg 250g'], explanation: 'Convert: 9 kg = 9 000 g and 3 kg 750 g = 3 750 g. Subtract: 9 000 g − 3 750 g = 5 250 g = 5 kg 250 g.' },
        { difficulty: 'Hard', question: 'A baby has a mass of 3 kg 500 g at birth. After 6 months, the baby gains 4 kg 300 g. What is the baby\'s mass now?', answer: '7 kg 800 g', checkMode: 'auto', correctAnswer: '7kg800g', correctAnswers: ['7kg800g', '7800g', '7800', '7 kg 800 g', '7kg 800g'], explanation: 'Add: 3 kg 500 g + 4 kg 300 g = 3 500 g + 4 300 g = 7 800 g = 7 kg 800 g.' },
        { difficulty: 'Hard', question: 'A school tuck shop has 20 kg of apples. If each bag sold contains 500 g, how many bags can be filled?', answer: '40 bags', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40 bags'], explanation: 'Convert: 20 kg = 20 000 g. Divide: 20 000 g ÷ 500 g = 40 bags.' },
        { difficulty: 'Hard', question: 'A shop has 15 kg of rice to pack into bags of 750 g each. How many full bags can be made?', answer: '20 bags', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 bags'], explanation: 'Convert: 15 kg = 15 000 g. Divide: 15 000 g ÷ 750 g = 20 bags.' },
        { difficulty: 'Hard', question: 'Explain the steps you would follow to solve this problem: "A box has a mass of 4 kg 250 g. A bag inside it has a mass of 1 kg 800 g. What is the mass of the box without the bag?" You do not need to calculate the final answer — just describe your method.', answer: 'First convert both masses to the same unit (grams): 4 kg 250 g = 4 250 g and 1 kg 800 g = 1 800 g. Since the question asks what is left after removing the bag, subtract: 4 250 g − 1 800 g. Finally, convert the answer back to kg and g if needed.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A box has a mass of 4 kg 250 g. A bag inside it has a mass of 1 kg 800 g. What is the mass of the box without the bag?', answer: '2 kg 450 g', checkMode: 'auto', correctAnswer: '2kg450g', correctAnswers: ['2kg450g', '2450g', '2450', '2 kg 450 g', '2kg 450g'], explanation: 'Convert: 4 kg 250 g = 4 250 g and 1 kg 800 g = 1 800 g. Subtract: 4 250 g − 1 800 g = 2 450 g = 2 kg 450 g.' },
        { difficulty: 'Hard', question: 'Thabo says that 2.5 kg is the same as 2 kg 500 g. Is he correct? Explain your reasoning.', answer: 'Yes, Thabo is correct. 2.5 kg means 2 whole kilograms plus 0.5 of a kilogram. Since 0.5 kg = 0.5 × 1 000 g = 500 g, 2.5 kg = 2 kg 500 g exactly.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A recipe for one cake needs 450 g of flour. Zanele wants to bake 3 cakes but only has 1 kg of flour. Does she have enough flour? Explain your reasoning.', answer: 'No, she does not have enough. 3 cakes need 450 g × 3 = 1 350 g of flour, but she only has 1 kg = 1 000 g. She is short by 350 g.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A recipe for one cake needs 450 g of flour. How much flour, in grams, is needed for 3 cakes?', answer: '1 350 g', checkMode: 'auto', correctAnswer: '1350g', correctAnswers: ['1350g', '1350', '1350 g', '1 350g', '1 350 g'], explanation: 'Multiply: 450 g × 3 = 1 350 g.' },
        { difficulty: 'Hard', question: 'A parcel weighs 2 kg 300 g. Postage costs R10 for every full or part kilogram. How much would postage cost for this parcel?', answer: 'R30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', 'R30'], explanation: '2 kg 300 g rounds up to 3 full kilograms (since any part of a kilogram counts as a full kilogram). Cost = 3 × R10 = R30.' },
        { difficulty: 'Hard', question: 'A pack of 12 identical chocolate bars has a total mass of 600 g. What is the mass of one chocolate bar?', answer: '50 g', checkMode: 'auto', correctAnswer: '50g', correctAnswers: ['50g', '50', '50 g'], explanation: 'Divide: 600 g ÷ 12 = 50 g per chocolate bar.' },
        { difficulty: 'Hard', question: 'A pack of 8 identical apples has a total mass of 1 200 g. What is the mass of one apple?', answer: '150 g', checkMode: 'auto', correctAnswer: '150g', correctAnswers: ['150g', '150', '150 g'], explanation: 'Divide: 1 200 g ÷ 8 = 150 g per apple.' },
        { difficulty: 'Hard', question: 'Explain why it is important to convert two masses to the same unit before adding or subtracting them.', answer: 'If two masses are in different units (like kg and g), adding or subtracting the numbers directly gives a meaningless result, because the digits do not represent the same size of unit. Converting both masses to the same unit first ensures that the calculation compares like with like, giving a correct answer.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered multi-step and combined mass problems.' },
        { minScore: 19, message: 'Great work! Review any questions you got wrong and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the multi-step worked examples.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
