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
      videoPlaceholder:
        'Short video showing how to solve mass word problems by identifying key words and converting to the same unit before calculating',
    },
  ],
  topicPractice: [

    // ── SECTION 1 — Units of Mass ─────────────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Which unit would you use to measure the mass of each object?',
      checkMode: 'auto',
      answer: 'a) Grams (g)   b) Kilograms (kg)   c) Kilograms (kg)',
      parts: [
        {
          label: 'a) A sweet',
          correctAnswer: 'g',
          correctAnswers: ['g', 'grams', 'gram'],
          explanation: 'A sweet is a very light object. Grams (g) are used for light objects like sweets — the mass is far too small to measure meaningfully in kilograms.',
        },
        {
          label: 'b) A school bag',
          correctAnswer: 'kg',
          correctAnswers: ['kg', 'kilograms', 'kilogram'],
          explanation: 'A school bag is a moderately heavy object, typically about 3–5 kg. Kilograms (kg) are used for heavier objects because the number of grams would be awkwardly large.',
        },
        {
          label: 'c) A bag of potatoes',
          correctAnswer: 'kg',
          correctAnswers: ['kg', 'kilograms', 'kilogram'],
          explanation: 'A bag of potatoes is heavy — usually 2 to 5 kg. Kilograms (kg) are always used for heavy objects like bags of produce or groceries.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question: 'How many grams are in each of the following?',
      checkMode: 'auto',
      answer: 'a) 1 000 g   b) 2 000 g   c) 500 g',
      parts: [
        {
          label: 'a) 1 kg',
          correctAnswer: '1000g',
          correctAnswers: ['1000g', '1000', '1000 g', '1 000g', '1 000 g'],
          explanation: 'There are 1 000 g in 1 kg. To convert kg to g, multiply by 1 000: 1 × 1 000 = 1 000 g.',
        },
        {
          label: 'b) 2 kg',
          correctAnswer: '2000g',
          correctAnswers: ['2000g', '2000', '2000 g', '2 000g', '2 000 g'],
          explanation: 'To convert kg to g, multiply by 1 000: 2 × 1 000 = 2 000 g.',
        },
        {
          label: 'c) Half a kg',
          correctAnswer: '500g',
          correctAnswers: ['500g', '500', '500 g'],
          explanation: 'Half of 1 kg = half of 1 000 g = 500 g. 0.5 × 1 000 = 500 g.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'Thabo says a pencil case weighs about 2 kg and a bag of sugar weighs about 200 g. Is he correct? Explain your answer for both objects.',
      checkMode: 'self',
      answer: 'No, Thabo is not correct for either object. A pencil case weighs about 200 g to 300 g — 2 kg would be as heavy as two bags of sugar, which is far too heavy for a pencil case. A bag of sugar weighs 1 kg (1 000 g), not 200 g — 200 g is closer to the mass of a chocolate bar.',
    },

    // ── SECTION 2 — Estimating and Reading Mass ───────────────────────────────

    {
      difficulty: 'Easy',
      question: 'A scale goes from 0 to 1 000 g. The needle points exactly halfway. What is the mass?',
      checkMode: 'auto',
      answer: '500 g',
      correctAnswer: '500g',
      correctAnswers: ['500g', '500', '500 g'],
      explanation: 'Halfway between 0 and 1 000 is 500. 1 000 ÷ 2 = 500 g.',
    },

    {
      difficulty: 'Medium',
      question: 'A scale goes from 0 to 500 g with 5 equal intervals between each 100 g mark.',
      checkMode: 'auto',
      answer: 'a) 20 g   b) 240 g   c) 350 g',
      parts: [
        {
          label: 'a) What is the value of each small interval?',
          correctAnswer: '20g',
          correctAnswers: ['20g', '20', '20 g'],
          explanation: 'Each 100 g section is divided into 5 equal intervals. 100 ÷ 5 = 20 g per interval.',
        },
        {
          label: 'b) If the needle points at the second interval after 200 g, what is the mass?',
          correctAnswer: '240g',
          correctAnswers: ['240g', '240', '240 g'],
          explanation: 'Start at 200 g and count 2 intervals of 20 g each: 200 + 20 + 20 = 240 g.',
        },
        {
          label: 'c) If the needle points halfway between 300 g and 400 g, what is the mass?',
          correctAnswer: '350g',
          correctAnswers: ['350g', '350', '350 g'],
          explanation: 'The gap between 300 and 400 is 100 g. Halfway = 100 ÷ 2 = 50 g past 300. 300 + 50 = 350 g.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'A balance scale has a bag of flour on one side. To balance it, two 500 g weights and one 250 g weight are placed on the other side.',
      checkMode: 'auto',
      answer: 'a) 1 250 g   b) 1 250 g   c) 1.25 kg',
      parts: [
        {
          label: 'a) What is the total mass of the weights?',
          correctAnswer: '1250g',
          correctAnswers: ['1250g', '1250', '1250 g', '1 250g', '1 250 g'],
          explanation: 'Add the weights: 500 g + 500 g + 250 g = 1 250 g.',
        },
        {
          label: 'b) What is the mass of the flour?',
          correctAnswer: '1250g',
          correctAnswers: ['1250g', '1250', '1250 g', '1 250g', '1 250 g'],
          explanation: 'A balance scale balances when both sides have equal mass. The flour equals the total mass of the weights: 1 250 g.',
        },
        {
          label: 'c) Convert the mass of the flour to kg.',
          correctAnswer: '1.25kg',
          correctAnswers: ['1.25kg', '1.25', '1.25 kg'],
          explanation: 'To convert g to kg, divide by 1 000: 1 250 ÷ 1 000 = 1.25 kg.',
        },
      ],
    },

    // SECTION 3 — Converting Between Grams and Kilograms
    {
      difficulty: 'Easy',
      question: 'Convert the following masses.',
      checkMode: 'auto',
      answer: 'a) 2 kg   b) 3 000 g',
      parts: [
        {
          label: 'a) 2 000 g = ___ kg',
          correctAnswer: '2kg',
          correctAnswers: ['2kg', '2', '2 kg'],
          explanation: 'To convert g to kg, divide by 1 000: 2 000 ÷ 1 000 = 2 kg.',
        },
        {
          label: 'b) 3 kg = ___ g',
          correctAnswer: '3000g',
          correctAnswers: ['3000g', '3000', '3000 g', '3 000g', '3 000 g'],
          explanation: 'To convert kg to g, multiply by 1 000: 3 × 1 000 = 3 000 g.',
        },
      ],
    },
    {
      difficulty: 'Medium',
      question: 'Convert each mass to the unit shown.',
      checkMode: 'auto',
      answer: 'a) 4.5 kg   b) 1 500 g   c) 0.75 kg   d) 2 250 g',
      parts: [
        {
          label: 'a) 4 500 g = ___ kg',
          correctAnswer: '4.5kg',
          correctAnswers: ['4.5kg', '4.5', '4.5 kg'],
          explanation: 'Divide by 1 000: 4 500 ÷ 1 000 = 4.5 kg.',
        },
        {
          label: 'b) 1.5 kg = ___ g',
          correctAnswer: '1500g',
          correctAnswers: ['1500g', '1500', '1500 g', '1 500g', '1 500 g'],
          explanation: 'Multiply by 1 000: 1.5 × 1 000 = 1 500 g.',
        },
        {
          label: 'c) 750 g = ___ kg',
          correctAnswer: '0.75kg',
          correctAnswers: ['0.75kg', '0.75', '0.75 kg'],
          explanation: 'Divide by 1 000: 750 ÷ 1 000 = 0.75 kg.',
        },
        {
          label: 'd) 2.25 kg = ___ g',
          correctAnswer: '2250g',
          correctAnswers: ['2250g', '2250', '2250 g', '2 250g', '2 250 g'],
          explanation: 'Multiply by 1 000: 2.25 × 1 000 = 2 250 g.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'Three parcels have masses of 1 kg 250 g, 900 g, and 1 kg 600 g.',
      checkMode: 'auto',
      answer: 'a) 1 250 g   b) 3 750 g   c) 3.75 kg',
      parts: [
        {
          label: 'a) Convert 1 kg 250 g to grams.',
          correctAnswer: '1250g',
          correctAnswers: ['1250g', '1250', '1250 g', '1 250g', '1 250 g'],
          explanation: '1 kg = 1 000 g, so 1 kg 250 g = 1 000 g + 250 g = 1 250 g.',
        },
        {
          label: 'b) What is the total mass of all three parcels in grams?',
          correctAnswer: '3750g',
          correctAnswers: ['3750g', '3750', '3750 g', '3 750g', '3 750 g'],
          explanation: 'Add all three: 1 250 g + 900 g + 1 600 g = 3 750 g.',
        },
        {
          label: 'c) Convert the total mass to kg.',
          correctAnswer: '3.75kg',
          correctAnswers: ['3.75kg', '3.75', '3.75 kg'],
          explanation: 'Divide by 1 000: 3 750 ÷ 1 000 = 3.75 kg.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'Three parcels have masses of 1 kg 250 g, 900 g, and 1 kg 600 g.',
      checkMode: 'self',
      answer: 'Less than 4 kg. Since 3.75 kg < 4 kg, the total mass is less than 4 kg.',
      parts: [
        {
          label: 'd) Is the total mass more or less than 4 kg? Explain.',
          correctAnswer: '',
          explanation: 'Less than 4 kg. Since 3.75 kg < 4 kg, the total mass is less than 4 kg.',
        },
      ],
    },

    // SECTION 4 — Calculating with Mass and Word Problems
    {
      difficulty: 'Easy',
      question: 'A bag of apples has a mass of 1 500 g. A bag of pears also has a mass of 500 g. What is the total mass of both bags?',
      checkMode: 'auto',
      answer: '2 kg or 2 000 g',
      correctAnswer: '2kg',
      correctAnswers: ['2kg', '2', '2 kg', '2000g', '2000', '2000 g', '2 000g', '2 000 g'],
      explanation: 'Add the masses: 1 500 g + 500 g = 2 000 g = 2 kg.',
    },
    {
      difficulty: 'Medium',
      question: 'A shopkeeper has a 7 kg bag of rice. She sells 1 kg 750 g of rice to a customer.',
      checkMode: 'auto',
      answer: 'a) Subtraction   b) 5 kg 250 g',
      parts: [
        {
          label: 'a) Which operation do you use to find the remaining mass?',
          correctAnswer: 'subtraction',
          correctAnswers: ['subtraction', 'subtract', 'minus'],
          explanation: 'We subtract the sold amount from the total: 7 kg − 1 kg 750 g.',
        },
        {
          label: 'b) What mass of rice is left?',
          correctAnswer: '5kg250g',
          correctAnswers: ['5kg250g', '5250g', '5250', '5 kg 250 g', '5kg 250g'],
          explanation: 'Convert: 7 kg = 7 000 g. Subtract: 7 000 g − 1 750 g = 5 250 g = 5 kg 250 g.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'A baker uses 1 kg 750 g of flour for bread and 1 kg 500 g of flour for muffins.',
      checkMode: 'auto',
      answer: 'a) 3 kg 250 g   b) 1 kg 750 g',
      parts: [
        {
          label: 'a) What is the total mass of flour used?',
          correctAnswer: '3kg250g',
          correctAnswers: ['3kg250g', '3250g', '3250', '3.25kg', '3.25', '3 kg 250 g', '3kg 250g'],
          explanation: 'Add: 1 750 g + 1 500 g = 3 250 g = 3 kg 250 g.',
        },
        {
          label: 'b) The baker started with 5 kg of flour. How much is left?',
          correctAnswer: '1kg750g',
          correctAnswers: ['1kg750g', '1750g', '1750', '1.75kg', '1.75', '1 kg 750 g', '1kg 750g'],
          explanation: 'Convert: 5 kg = 5 000 g. Subtract: 5 000 g − 3 250 g = 1 750 g = 1 kg 750 g.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'A baker uses 1 kg 750 g of flour for bread and 1 kg 500 g of flour for muffins.',
      checkMode: 'self',
      answer: 'R15 × 3.25 = R48.75. The total cost is R48.75.',
      parts: [
        {
          label: 'c) Flour costs R15 per kg. What is the cost of the flour used? Show your working.',
          correctAnswer: '',
          explanation: 'Total flour = 3 250 g = 3.25 kg. Cost = R15 × 3.25 = R48.75.',
        },
      ],
    },

  ],
  scoreMessages: [
    { minScore: 30, message: 'Perfect score! You have mastered Mass.' },
    { minScore: 23, message: 'Excellent work! Review the questions you got wrong and you will have this mastered.' },
    { minScore: 15, message: 'Good effort! Go back and read through the sections you struggled with.' },
    { minScore: 0,  message: 'Keep going! Read through the study guide again carefully and then retry.' },
  ],
}
