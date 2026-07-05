import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Length',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — UNITS OF LENGTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'units-of-length',
      title: 'Units of Length',
      icon: '📏',
      explanation: `
<p style="margin-bottom:14px;"><strong>Length</strong> tells us <strong>how long or tall something is</strong>, or <strong>how far apart two points are</strong>. We measure length using standard units so that everyone gets the same result. Choosing the right unit makes measurement much easier — we would not measure the distance between two cities in millimetres!</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">The four units of length</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Millimetre<br/><span style="font-weight:400;font-size:12px;">(mm)</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Very small lengths.</strong> A millimetre is about the thickness of a coin or a fingernail. There are <strong>10 mm in 1 cm</strong>. Use mm when measuring tiny things like the width of a pencil line or a small insect.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Centimetre<br/><span style="font-weight:400;font-size:12px;">(cm)</span></span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong>Small lengths.</strong> A centimetre is about the width of your little finger. Use cm when measuring a pencil, your hand span, a book or a piece of paper. There are <strong>100 cm in 1 m</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Metre<br/><span style="font-weight:400;font-size:12px;">(m)</span></span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong>Medium lengths.</strong> A metre is roughly the height of a kitchen counter or the width of a door. Use m when measuring a room, a fence, or the height of a building. There are <strong>1 000 m in 1 km</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Kilometre<br/><span style="font-weight:400;font-size:12px;">(km)</span></span>
      <span style="color:#7c2d12;font-size:15px;padding-top:2px;"><strong>Very long distances.</strong> A kilometre is about the distance you can walk in 10–12 minutes. Use km when measuring the distance between towns, cities or along a road.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Conversion facts 🔢</span>
  <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:10px;">
    <span style="background:#1e40af;color:#fff;border-radius:8px;padding:6px 16px;font-weight:700;font-size:15px;">10 mm = 1 cm</span>
    <span style="background:#16a34a;color:#fff;border-radius:8px;padding:6px 16px;font-weight:700;font-size:15px;">100 cm = 1 m</span>
    <span style="background:#dc2626;color:#fff;border-radius:8px;padding:6px 16px;font-weight:700;font-size:15px;">1 000 m = 1 km</span>
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
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Real life examples</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">mm</td>
          <td style="padding:8px 14px;color:#475569;">Tiny things</td>
          <td style="padding:8px 14px;color:#475569;">Thickness of a coin, width of a fingernail</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">cm</td>
          <td style="padding:8px 14px;color:#475569;">Small things</td>
          <td style="padding:8px 14px;color:#475569;">Length of a pencil, width of your hand</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:700;color:#dc2626;">m</td>
          <td style="padding:8px 14px;color:#475569;">Rooms and buildings</td>
          <td style="padding:8px 14px;color:#475569;">Height of a door, width of a classroom</td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#ea580c;">km</td>
          <td style="padding:8px 14px;color:#475569;">Long distances</td>
          <td style="padding:8px 14px;color:#475569;">Distance between two towns, length of a road</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Which unit would you use to measure the length of your classroom?',
          steps: [
            'A classroom is a <strong>medium-sized</strong> space — you could walk across it in a few steps.',
            'It is <strong>too big</strong> for centimetres (you would get a very large number) and <strong>too small</strong> for kilometres.',
            '<strong style="color:#dc2626;">Metres (m)</strong> are the right choice for measuring rooms and buildings.',
          ],
          answer: 'Metres (m). A classroom is best measured in metres.',
        },
        {
          question:
            'Which unit would you use to measure the distance from Cape Town to Johannesburg?',
          steps: [
            'Cape Town to Johannesburg is a <strong>very long distance</strong> — it takes hours to drive.',
            'Using metres would give an enormous number (about 1 400 000 m), so we use a larger unit.',
            '<strong style="color:#ea580c;">Kilometres (km)</strong> are used for long distances between towns and cities.',
          ],
          answer: 'Kilometres (km). The distance between two cities is measured in kilometres.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'Four objects shown with their measurements — a coin labelled in mm, a pencil labelled in cm, a door labelled in m and a road sign labelled in km',
      videoPlaceholder:
        'Short video explaining the four units of length with real life examples of when to use each one',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — ESTIMATING AND MEASURING LENGTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating-measuring-length',
      title: 'Estimating and Measuring Length',
      icon: '📐',
      explanation: `
<p style="margin-bottom:14px;"><strong>Estimating</strong> means making a <strong>careful guess</strong> before you measure. A good estimate is not just a random guess — it uses something you already know as a <strong>reference point</strong>. After you estimate, you measure to find the <strong>actual measurement</strong>.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Useful reference lengths to remember</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 1 cm</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Your <strong>pinky finger</strong> is about <strong>1 cm</strong> wide — use it to estimate small lengths.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 30 cm</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">A standard <strong>ruler</strong> is <strong>30 cm</strong> long — use it to picture lengths up to about 30 cm.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 2 m</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">A <strong>classroom door</strong> is about <strong>2 m</strong> tall — use it to estimate medium lengths in metres.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 20 m</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">A <strong>cricket pitch</strong> is about <strong>20 m</strong> long — use it to estimate longer distances.</span>
    </div>

  </div>
</div>

<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#c2410c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Estimate vs actual measurement</div>
  <div style="display:flex;flex-wrap:wrap;gap:10px;">
    <div style="background:#fff;border:1.5px solid #fdba74;border-radius:8px;padding:10px 16px;flex:1;min-width:180px;">
      <div style="font-size:12px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px;">Estimate</div>
      <div style="color:#7c2d12;font-size:14px;">Your careful guess <em>before</em> measuring. Written as <strong style="color:#ea580c;">≈ 18 cm</strong> (the ≈ symbol means "approximately").</div>
    </div>
    <div style="background:#fff;border:1.5px solid #bfdbfe;border-radius:8px;padding:10px 16px;flex:1;min-width:180px;">
      <div style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px;">Actual measurement</div>
      <div style="color:#1e3a8a;font-size:14px;">The exact length found by measuring. Written as <strong style="color:#1e40af;">= 17 cm</strong>.</div>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How to measure with a ruler</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;">Place the <strong>zero mark</strong> of the ruler at one end of the object.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;">Read the measurement at the <strong>other end</strong> of the object.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;"><strong>Record</strong> the measurement with the correct unit (e.g. 17 cm, not just 17).</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Estimate and then measure a pencil.',
          steps: [
            '<strong style="color:#ea580c;">Estimate first:</strong> A pencil looks about as long as a ruler. A ruler is 30 cm, but a pencil is a bit shorter — <strong style="color:#ea580c;">estimate ≈ 18 cm</strong>.',
            '<strong>Measure with a ruler:</strong> Place the zero mark of the ruler at one end of the pencil.',
            'Read the measurement at the other end of the pencil.',
            '<strong style="color:#1e40af;">Actual measurement = 17 cm.</strong>',
            'Compare: the estimate was 18 cm and the actual length is 17 cm — <strong>the estimate was close</strong>, only 1 cm off.',
          ],
          answer: 'The pencil measures 17 cm. The estimate of 18 cm was close.',
        },
        {
          question: 'Estimate the height of a classroom door.',
          steps: [
            '<strong style="color:#ea580c;">Think of a reference:</strong> An adult is about 1.7 m tall.',
            'A door is taller than most adults — it needs to be tall enough for people to walk through easily.',
            '<strong style="color:#ea580c;">Estimate ≈ 2 m</strong> — a little taller than a full-grown adult.',
            'A standard classroom door is <strong style="color:#1e40af;">about 2 m tall</strong>.',
          ],
          answer: 'A standard classroom door is about 2 m tall. The estimate of 2 m was correct.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A ruler showing centimetre markings with a pencil placed along it from zero to 17 cm clearly marked',
      videoPlaceholder:
        'Short video showing how to correctly place a ruler to measure an object and read the measurement accurately',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CONVERTING BETWEEN UNITS OF LENGTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-units-of-length',
      title: 'Converting Between Units of Length',
      icon: '🔄',
      explanation: `
<p style="margin-bottom:14px;"><strong>Converting</strong> means changing a measurement from <strong>one unit to another</strong>. The amount stays the same — only the unit and the number change. For example, 100 cm and 1 m are exactly the same length, just written differently.</p>

<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Memory trick 💡</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="color:#7f1d1d;font-size:15px;">Going to a <strong>smaller unit</strong> (e.g. m → cm) → <strong style="color:#dc2626;">multiply</strong> → the number gets <strong>bigger</strong>.</div>
    <div style="color:#7f1d1d;font-size:15px;">Going to a <strong>bigger unit</strong> (e.g. cm → m) → <strong style="color:#dc2626;">divide</strong> → the number gets <strong>smaller</strong>.</div>
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
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">mm</td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">cm</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#dc2626;">÷ 10</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">30 mm</span> = <span style="color:#16a34a;font-weight:700;">3 cm</span></td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">cm</td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">mm</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#dc2626;">× 10</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">5 cm</span> = <span style="color:#16a34a;font-weight:700;">50 mm</span></td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">cm</td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">m</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#dc2626;">÷ 100</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">200 cm</span> = <span style="color:#16a34a;font-weight:700;">2 m</span></td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">m</td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">cm</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#dc2626;">× 100</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">4 m</span> = <span style="color:#16a34a;font-weight:700;">400 cm</span></td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">m</td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">km</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#dc2626;">÷ 1 000</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">3 000 m</span> = <span style="color:#16a34a;font-weight:700;">3 km</span></td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">km</td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">m</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#dc2626;">× 1 000</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">2 km</span> = <span style="color:#16a34a;font-weight:700;">2 000 m</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Convert 45 mm to cm.',
          steps: [
            'To go from <strong style="color:#1e40af;">mm</strong> to <strong style="color:#16a34a;">cm</strong> — <strong style="color:#dc2626;">divide by 10</strong> (going to a bigger unit, so the number gets smaller).',
            '<strong style="color:#1e40af;">45</strong> ÷ <strong style="color:#dc2626;">10</strong> = <strong style="color:#16a34a;">4.5</strong>',
          ],
          answer: '45 mm = 4.5 cm',
        },
        {
          question: 'Convert 3 m to cm.',
          steps: [
            'To go from <strong style="color:#1e40af;">m</strong> to <strong style="color:#16a34a;">cm</strong> — <strong style="color:#dc2626;">multiply by 100</strong> (going to a smaller unit, so the number gets bigger).',
            '<strong style="color:#1e40af;">3</strong> × <strong style="color:#dc2626;">100</strong> = <strong style="color:#16a34a;">300</strong>',
          ],
          answer: '3 m = 300 cm',
        },
        {
          question: 'Convert 2 500 m to km.',
          steps: [
            'To go from <strong style="color:#1e40af;">m</strong> to <strong style="color:#16a34a;">km</strong> — <strong style="color:#dc2626;">divide by 1 000</strong> (going to a bigger unit, so the number gets smaller).',
            '<strong style="color:#1e40af;">2 500</strong> ÷ <strong style="color:#dc2626;">1 000</strong> = <strong style="color:#16a34a;">2.5</strong>',
          ],
          answer: '2 500 m = 2.5 km',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A conversion ladder showing mm, cm, m, km from bottom to top with multiply arrows going down and divide arrows going up and the conversion factors labelled',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — CALCULATING WITH LENGTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-with-length',
      title: 'Calculating with Length',
      icon: '➕',
      explanation: `
<p style="margin-bottom:14px;">We can <strong>add</strong> and <strong>subtract</strong> lengths to solve problems. Before you calculate, always make sure both lengths are in the <strong>same unit</strong>. If they are not, convert one of them first.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How to add and subtract mixed lengths (m and cm)</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;">Deal with the <strong>centimetres first</strong> — add or subtract the cm values.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;">Deal with the <strong>metres next</strong> — add or subtract the m values.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;">If the cm total is <strong>100 or more</strong>, convert — every 100 cm becomes 1 m.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;">If you need to subtract more cm than you have, <strong>borrow 1 m</strong> (= 100 cm) from the metres column.</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Add 2 m 45 cm and 1 m 30 cm.',
          steps: [
            'Add the centimetres: <strong style="color:#1e40af;">45 cm</strong> + <strong style="color:#16a34a;">30 cm</strong> = <strong style="color:#dc2626;">75 cm</strong>',
            'Add the metres: <strong style="color:#1e40af;">2 m</strong> + <strong style="color:#16a34a;">1 m</strong> = <strong style="color:#dc2626;">3 m</strong>',
            '75 cm is less than 100, so no conversion needed.',
          ],
          answer: '2 m 45 cm + 1 m 30 cm = 3 m 75 cm',
        },
        {
          question: 'Subtract 1 m 20 cm from 3 m 50 cm.',
          steps: [
            'Subtract the centimetres: <strong style="color:#1e40af;">50 cm</strong> − <strong style="color:#16a34a;">20 cm</strong> = <strong style="color:#dc2626;">30 cm</strong>',
            'Subtract the metres: <strong style="color:#1e40af;">3 m</strong> − <strong style="color:#16a34a;">1 m</strong> = <strong style="color:#dc2626;">2 m</strong>',
          ],
          answer: '3 m 50 cm − 1 m 20 cm = 2 m 30 cm',
        },
        {
          question: 'A piece of rope is 5 m long. Thabo cuts off 1 m 75 cm. How much rope is left?',
          steps: [
            'Write 5 m as <strong style="color:#1e40af;">5 m 00 cm</strong> so both lengths are in the same format.',
            'Try to subtract cm: 00 cm − 75 cm — we cannot do this, so we need to borrow.',
            'Borrow 1 m from the metres column: <strong style="color:#1e40af;">4 m 100 cm</strong> − <strong style="color:#16a34a;">1 m 75 cm</strong>',
            'Subtract cm: 100 − 75 = <strong style="color:#dc2626;">25 cm</strong>',
            'Subtract m: 4 − 1 = <strong style="color:#dc2626;">3 m</strong>',
          ],
          answer: '3 m 25 cm of rope is left.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — LENGTH WORD PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'length-word-problems',
      title: 'Length Word Problems',
      icon: '📝',
      explanation: `
<p style="margin-bottom:14px;">Length word problems ask you to use measuring skills to solve real-life situations. Before you calculate, <strong>read the question carefully</strong> and look for <strong>key words</strong> that tell you which operation to use.</p>

<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#c2410c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Key words to look for</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">

    <div style="background:#fff;border:1.5px solid #bfdbfe;border-radius:8px;padding:10px 16px;flex:1;min-width:200px;">
      <div style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;">Addition ➕</div>
      <div style="display:flex;flex-direction:column;gap:4px;">
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">total length</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">altogether</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">combined</strong></span>
      </div>
    </div>

    <div style="background:#fff;border:1.5px solid #bfdbfe;border-radius:8px;padding:10px 16px;flex:1;min-width:200px;">
      <div style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;">Subtraction ➖</div>
      <div style="display:flex;flex-direction:column;gap:4px;">
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">difference</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">how much longer / shorter</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">remaining</strong></span>
      </div>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Steps for solving a word problem</div>
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
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Make sure the units match</strong> — convert if needed.</span>
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
            'A garden path is 12 m 50 cm long. Another path is 8 m 75 cm long. What is the total length of both paths?',
          steps: [
            'Key word: <strong style="color:#ea580c;">total</strong> — this means <strong>addition</strong>.',
            'Add: <strong style="color:#1e40af;">12 m 50 cm</strong> + <strong style="color:#16a34a;">8 m 75 cm</strong>',
            'Add the cm: 50 + 75 = 125 cm. Since 125 ≥ 100, convert: 125 cm = 1 m 25 cm.',
            'Add the m: 12 + 8 + 1 (carried over) = <strong style="color:#dc2626;">21 m</strong>',
            'Remaining cm: <strong style="color:#dc2626;">25 cm</strong>',
          ],
          answer: 'The total length of both paths is 21 m 25 cm.',
        },
        {
          question:
            'Lerato runs 3 km 500 m. Sipho runs 2 km 750 m. How much further does Lerato run?',
          steps: [
            'Key word: <strong style="color:#ea580c;">how much further</strong> — this means <strong>subtraction</strong>.',
            'Subtract: <strong style="color:#1e40af;">3 km 500 m</strong> − <strong style="color:#16a34a;">2 km 750 m</strong>',
            'Try to subtract m: 500 m − 750 m — we cannot do this, so we need to borrow.',
            'Borrow 1 km: <strong style="color:#1e40af;">2 km 1 500 m</strong> − <strong style="color:#16a34a;">2 km 750 m</strong>',
            'Subtract m: 1 500 − 750 = <strong style="color:#dc2626;">750 m</strong>',
            'Subtract km: 2 − 2 = <strong style="color:#dc2626;">0 km</strong>',
          ],
          answer: 'Lerato runs 750 m further than Sipho.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder:
        'Short video showing how to solve length word problems by identifying key words and choosing the correct operation',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — FOUNDATIONS: BASIC UNIT CONVERSIONS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: Foundations',
      questions: [
        { difficulty: 'Easy', question: 'Convert 50 mm to cm.', answer: '5 cm', checkMode: 'auto', correctAnswer: '5cm', correctAnswers: ['5cm', '5', '5 cm'], explanation: 'To convert mm to cm, divide by 10. 50 ÷ 10 = 5 cm ✓' },
        { difficulty: 'Easy', question: 'Convert 30 mm to cm.', answer: '3 cm', checkMode: 'auto', correctAnswer: '3cm', correctAnswers: ['3cm', '3', '3 cm'], explanation: 'To convert mm to cm, divide by 10. 30 ÷ 10 = 3 cm ✓' },
        { difficulty: 'Easy', question: 'Convert 80 mm to cm.', answer: '8 cm', checkMode: 'auto', correctAnswer: '8cm', correctAnswers: ['8cm', '8', '8 cm'], explanation: 'To convert mm to cm, divide by 10. 80 ÷ 10 = 8 cm ✓' },
        { difficulty: 'Easy', question: 'Convert 40 mm to cm.', answer: '4 cm', checkMode: 'auto', correctAnswer: '4cm', correctAnswers: ['4cm', '4', '4 cm'], explanation: 'To convert mm to cm, divide by 10. 40 ÷ 10 = 4 cm ✓' },
        { difficulty: 'Easy', question: 'Convert 7 cm to mm.', answer: '70 mm', checkMode: 'auto', correctAnswer: '70mm', correctAnswers: ['70mm', '70', '70 mm'], explanation: 'To convert cm to mm, multiply by 10. 7 × 10 = 70 mm ✓' },
        { difficulty: 'Easy', question: 'Convert 9 cm to mm.', answer: '90 mm', checkMode: 'auto', correctAnswer: '90mm', correctAnswers: ['90mm', '90', '90 mm'], explanation: 'To convert cm to mm, multiply by 10. 9 × 10 = 90 mm ✓' },
        { difficulty: 'Easy', question: 'Convert 2 cm to mm.', answer: '20 mm', checkMode: 'auto', correctAnswer: '20mm', correctAnswers: ['20mm', '20', '20 mm'], explanation: 'To convert cm to mm, multiply by 10. 2 × 10 = 20 mm ✓' },
        { difficulty: 'Easy', question: 'Convert 11 cm to mm.', answer: '110 mm', checkMode: 'auto', correctAnswer: '110mm', correctAnswers: ['110mm', '110', '110 mm'], explanation: 'To convert cm to mm, multiply by 10. 11 × 10 = 110 mm ✓' },
        { difficulty: 'Medium', question: 'Convert 120 mm to cm.', answer: '12 cm', checkMode: 'auto', correctAnswer: '12cm', correctAnswers: ['12cm', '12', '12 cm'], explanation: 'To convert mm to cm, divide by 10. 120 ÷ 10 = 12 cm ✓' },
        { difficulty: 'Medium', question: 'Convert 200 mm to cm.', answer: '20 cm', checkMode: 'auto', correctAnswer: '20cm', correctAnswers: ['20cm', '20', '20 cm'], explanation: 'To convert mm to cm, divide by 10. 200 ÷ 10 = 20 cm ✓' },
        { difficulty: 'Medium', question: 'Convert 14 cm to mm.', answer: '140 mm', checkMode: 'auto', correctAnswer: '140mm', correctAnswers: ['140mm', '140', '140 mm'], explanation: 'To convert cm to mm, multiply by 10. 14 × 10 = 140 mm ✓' },
        { difficulty: 'Easy', question: 'Convert 500 cm to m.', answer: '5 m', checkMode: 'auto', correctAnswer: '5m', correctAnswers: ['5m', '5', '5 m'], explanation: 'To convert cm to m, divide by 100. 500 ÷ 100 = 5 m ✓' },
        { difficulty: 'Easy', question: 'Convert 700 cm to m.', answer: '7 m', checkMode: 'auto', correctAnswer: '7m', correctAnswers: ['7m', '7', '7 m'], explanation: 'To convert cm to m, divide by 100. 700 ÷ 100 = 7 m ✓' },
        { difficulty: 'Easy', question: 'Convert 100 cm to m.', answer: '1 m', checkMode: 'auto', correctAnswer: '1m', correctAnswers: ['1m', '1', '1 m'], explanation: 'To convert cm to m, divide by 100. 100 ÷ 100 = 1 m ✓' },
        { difficulty: 'Easy', question: 'Convert 900 cm to m.', answer: '9 m', checkMode: 'auto', correctAnswer: '9m', correctAnswers: ['9m', '9', '9 m'], explanation: 'To convert cm to m, divide by 100. 900 ÷ 100 = 9 m ✓' },
        { difficulty: 'Easy', question: 'Convert 400 cm to m.', answer: '4 m', checkMode: 'auto', correctAnswer: '4m', correctAnswers: ['4m', '4', '4 m'], explanation: 'To convert cm to m, divide by 100. 400 ÷ 100 = 4 m ✓' },
        { difficulty: 'Easy', question: 'Convert 3 m to cm.', answer: '300 cm', checkMode: 'auto', correctAnswer: '300cm', correctAnswers: ['300cm', '300', '300 cm'], explanation: 'To convert m to cm, multiply by 100. 3 × 100 = 300 cm ✓' },
        { difficulty: 'Easy', question: 'Convert 8 m to cm.', answer: '800 cm', checkMode: 'auto', correctAnswer: '800cm', correctAnswers: ['800cm', '800', '800 cm'], explanation: 'To convert m to cm, multiply by 100. 8 × 100 = 800 cm ✓' },
        { difficulty: 'Easy', question: 'Convert 6 m to cm.', answer: '600 cm', checkMode: 'auto', correctAnswer: '600cm', correctAnswers: ['600cm', '600', '600 cm'], explanation: 'To convert m to cm, multiply by 100. 6 × 100 = 600 cm ✓' },
        { difficulty: 'Easy', question: 'Convert 2 000 m to km.', answer: '2 km', checkMode: 'auto', correctAnswer: '2km', correctAnswers: ['2km', '2', '2 km'], explanation: 'To convert m to km, divide by 1 000. 2 000 ÷ 1 000 = 2 km ✓' },
        { difficulty: 'Easy', question: 'Convert 5 000 m to km.', answer: '5 km', checkMode: 'auto', correctAnswer: '5km', correctAnswers: ['5km', '5', '5 km'], explanation: 'To convert m to km, divide by 1 000. 5 000 ÷ 1 000 = 5 km ✓' },
        { difficulty: 'Easy', question: 'Convert 1 000 m to km.', answer: '1 km', checkMode: 'auto', correctAnswer: '1km', correctAnswers: ['1km', '1', '1 km'], explanation: 'To convert m to km, divide by 1 000. 1 000 ÷ 1 000 = 1 km ✓' },
        { difficulty: 'Easy', question: 'Convert 4 km to m.', answer: '4 000 m', checkMode: 'auto', correctAnswer: '4000m', correctAnswers: ['4000m', '4000', '4 000m', '4000 m', '4 000 m'], explanation: 'To convert km to m, multiply by 1 000. 4 × 1 000 = 4 000 m ✓' },
        { difficulty: 'Medium', question: 'Convert 9 km to m.', answer: '9 000 m', checkMode: 'auto', correctAnswer: '9000m', correctAnswers: ['9000m', '9000', '9 000m', '9000 m', '9 000 m'], explanation: 'To convert km to m, multiply by 1 000. 9 × 1 000 = 9 000 m ✓' },
        { difficulty: 'Medium', question: 'Convert 7 000 m to km.', answer: '7 km', checkMode: 'auto', correctAnswer: '7km', correctAnswers: ['7km', '7', '7 km'], explanation: 'To convert m to km, divide by 1 000. 7 000 ÷ 1 000 = 7 km ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered the basic conversions between mm, cm, m and km.' },
        { minScore: 19, message: 'Great work! You are confident with the basics — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Revisit the conversion rules table and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — TRICKIER VARIANTS: MULTI-STEP CONVERSIONS & COMPARISONS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Multi-Step Conversions and Comparisons',
      questions: [
        { difficulty: 'Medium', question: 'Convert 2 000 mm to m.', answer: '2 m', checkMode: 'auto', correctAnswer: '2m', correctAnswers: ['2m', '2', '2 m'], explanation: 'There are 1 000 mm in 1 m. 2 000 ÷ 1 000 = 2 m ✓' },
        { difficulty: 'Medium', question: 'Convert 5 000 mm to m.', answer: '5 m', checkMode: 'auto', correctAnswer: '5m', correctAnswers: ['5m', '5', '5 m'], explanation: 'There are 1 000 mm in 1 m. 5 000 ÷ 1 000 = 5 m ✓' },
        { difficulty: 'Medium', question: 'Convert 3 500 mm to cm.', answer: '350 cm', checkMode: 'auto', correctAnswer: '350cm', correctAnswers: ['350cm', '350', '350 cm'], explanation: 'To convert mm to cm, divide by 10. 3 500 ÷ 10 = 350 cm ✓' },
        { difficulty: 'Medium', question: 'Convert 4 200 mm to cm.', answer: '420 cm', checkMode: 'auto', correctAnswer: '420cm', correctAnswers: ['420cm', '420', '420 cm'], explanation: 'To convert mm to cm, divide by 10. 4 200 ÷ 10 = 420 cm ✓' },
        { difficulty: 'Easy', question: 'Convert 450 mm to cm.', answer: '45 cm', checkMode: 'auto', correctAnswer: '45cm', correctAnswers: ['45cm', '45', '45 cm'], explanation: 'To convert mm to cm, divide by 10. 450 ÷ 10 = 45 cm ✓' },
        { difficulty: 'Medium', question: 'Convert 650 mm to cm.', answer: '65 cm', checkMode: 'auto', correctAnswer: '65cm', correctAnswers: ['65cm', '65', '65 cm'], explanation: 'To convert mm to cm, divide by 10. 650 ÷ 10 = 65 cm ✓' },
        { difficulty: 'Medium', question: 'Convert 1 250 mm to cm.', answer: '125 cm', checkMode: 'auto', correctAnswer: '125cm', correctAnswers: ['125cm', '125', '125 cm'], explanation: 'To convert mm to cm, divide by 10. 1 250 ÷ 10 = 125 cm ✓' },
        { difficulty: 'Medium', question: 'Convert 1 750 mm to cm.', answer: '175 cm', checkMode: 'auto', correctAnswer: '175cm', correctAnswers: ['175cm', '175', '175 cm'], explanation: 'To convert mm to cm, divide by 10. 1 750 ÷ 10 = 175 cm ✓' },
        { difficulty: 'Medium', question: 'Convert 200 cm to m.', answer: '2 m', checkMode: 'auto', correctAnswer: '2m', correctAnswers: ['2m', '2', '2 m'], explanation: 'To convert cm to m, divide by 100. 200 ÷ 100 = 2 m ✓' },
        { difficulty: 'Medium', question: 'Convert 350 cm to m.', answer: '3 m 50 cm', checkMode: 'auto', correctAnswer: '3m50cm', correctAnswers: ['3m50cm', '3 m50cm', '350cm', '350'], explanation: '350 cm = 300 cm + 50 cm = 3 m 50 cm ✓' },
        { difficulty: 'Medium', question: 'Convert 550 cm to m.', answer: '5 m 50 cm', checkMode: 'auto', correctAnswer: '5m50cm', correctAnswers: ['5m50cm', '5 m50cm', '550cm', '550'], explanation: '550 cm = 500 cm + 50 cm = 5 m 50 cm ✓' },
        { difficulty: 'Medium', question: 'Convert 750 cm to m.', answer: '7 m 50 cm', checkMode: 'auto', correctAnswer: '7m50cm', correctAnswers: ['7m50cm', '7 m50cm', '750cm', '750'], explanation: '750 cm = 700 cm + 50 cm = 7 m 50 cm ✓' },
        { difficulty: 'Medium', question: 'Convert 1 500 m to km.', answer: '1 km 500 m', checkMode: 'auto', correctAnswer: '1km500m', correctAnswers: ['1km500m', '1 km500m', '1500m', '1500'], explanation: '1 500 m = 1 000 m + 500 m = 1 km 500 m ✓' },
        { difficulty: 'Medium', question: 'Convert 2 500 m to km.', answer: '2 km 500 m', checkMode: 'auto', correctAnswer: '2km500m', correctAnswers: ['2km500m', '2 km500m', '2500m', '2500'], explanation: '2 500 m = 2 000 m + 500 m = 2 km 500 m ✓' },
        { difficulty: 'Medium', question: 'Convert 4 500 m to km.', answer: '4 km 500 m', checkMode: 'auto', correctAnswer: '4km500m', correctAnswers: ['4km500m', '4 km500m', '4500m', '4500'], explanation: '4 500 m = 4 000 m + 500 m = 4 km 500 m ✓' },
        { difficulty: 'Medium', question: 'Convert 850 m to km. Give your answer using km and m.', answer: '0 km 850 m', checkMode: 'auto', correctAnswer: '0km850m', correctAnswers: ['0km850m', '0 km850m', '850m', '850'], explanation: '850 m is less than 1 000 m, so it is 0 km 850 m — not yet a whole kilometre ✓' },
        { difficulty: 'Hard', question: 'Convert 1 250 m to km and m.', answer: '1 km 250 m', checkMode: 'auto', correctAnswer: '1km250m', correctAnswers: ['1km250m', '1 km250m', '1250m', '1250'], explanation: '1 250 m = 1 000 m + 250 m = 1 km 250 m ✓' },
        { difficulty: 'Medium', question: 'Convert 1 km 500 m to m.', answer: '1 500 m', checkMode: 'auto', correctAnswer: '1500m', correctAnswers: ['1500m', '1500', '1 500m', '1500 m', '1 500 m'], explanation: '1 km 500 m = 1 000 m + 500 m = 1 500 m ✓' },
        { difficulty: 'Hard', question: 'Convert 1 km 750 m to m.', answer: '1 750 m', checkMode: 'auto', correctAnswer: '1750m', correctAnswers: ['1750m', '1750', '1 750m', '1750 m', '1 750 m'], explanation: '1 km 750 m = 1 000 m + 750 m = 1 750 m ✓' },
        { difficulty: 'Hard', question: 'Convert 2 km 750 m to m.', answer: '2 750 m', checkMode: 'auto', correctAnswer: '2750m', correctAnswers: ['2750m', '2750', '2 750m', '2750 m', '2 750 m'], explanation: '2 km 750 m = 2 000 m + 750 m = 2 750 m ✓' },
        { difficulty: 'Medium', question: 'Which is longer: 300 cm or 3 m 50 cm? Write your answer in the mixed form (m and cm).', answer: '3 m 50 cm', checkMode: 'auto', correctAnswer: '3m50cm', correctAnswers: ['3m50cm', '3 m50cm', '350cm', '350'], explanation: '300 cm = 3 m. Since 3 m 50 cm is greater than 3 m, 3 m 50 cm is longer ✓' },
        { difficulty: 'Medium', question: 'Which is longer: 2 500 m or 2 km? Write your answer with its unit.', answer: '2 500 m', checkMode: 'auto', correctAnswer: '2500m', correctAnswers: ['2500m', '2500', '2 500m', '2500 m', '2 500 m'], explanation: '2 500 m = 2 km 500 m. Since this is greater than 2 km, 2 500 m is longer ✓' },
        { difficulty: 'Medium', question: 'Which is longer: 50 mm or 4 cm? Write your answer with its unit.', answer: '50 mm', checkMode: 'auto', correctAnswer: '50mm', correctAnswers: ['50mm', '50', '50 mm'], explanation: '50 mm = 5 cm. Since 5 cm is greater than 4 cm, 50 mm is longer ✓' },
        { difficulty: 'Hard', question: 'Which is shorter: 1 200 m or 1 km 500 m? Write your answer with its unit.', answer: '1 200 m', checkMode: 'auto', correctAnswer: '1200m', correctAnswers: ['1200m', '1200', '1 200m', '1200 m', '1 200 m'], explanation: '1 200 m = 1 km 200 m. Since this is less than 1 km 500 m, 1 200 m is shorter ✓' },
        { difficulty: 'Hard', question: 'Which is shorter: 999 mm or 1 m? Write your answer with its unit.', answer: '999 mm', checkMode: 'auto', correctAnswer: '999mm', correctAnswers: ['999mm', '999', '999 mm'], explanation: '1 m = 1 000 mm. Since 999 mm is less than 1 000 mm, 999 mm is shorter ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You can confidently handle multi-step conversions and compare lengths in different units.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the conversion rules and practise converting to a common unit before comparing.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — ESTIMATING REALISTIC LENGTHS & WORD PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Estimating and Word Problems',
      questions: [
        { difficulty: 'Easy', question: 'Which unit would you use to measure the length of a pencil: mm, cm, m or km?', answer: 'cm', checkMode: 'auto', correctAnswer: 'cm', correctAnswers: ['cm', 'centimetres', 'centimetre', 'centimeters', 'centimeter'], explanation: 'A pencil is a small object, best measured in centimetres (cm) ✓' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the height of a house: mm, cm, m or km?', answer: 'm', checkMode: 'auto', correctAnswer: 'm', correctAnswers: ['m', 'metres', 'metre', 'meters', 'meter'], explanation: 'A house is a medium-large structure, best measured in metres (m) ✓' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the distance between two towns: mm, cm, m or km?', answer: 'km', checkMode: 'auto', correctAnswer: 'km', correctAnswers: ['km', 'kilometres', 'kilometre', 'kilometers', 'kilometer'], explanation: 'The distance between towns is very long, best measured in kilometres (km) ✓' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the thickness of a coin: mm, cm, m or km?', answer: 'mm', checkMode: 'auto', correctAnswer: 'mm', correctAnswers: ['mm', 'millimetres', 'millimetre', 'millimeters', 'millimeter'], explanation: 'A coin is very thin, best measured in millimetres (mm) ✓' },
        { difficulty: 'Easy', question: 'A ruler is a good estimate for which length: the width of a book (≈ 20 cm) or the length of a soccer field (≈ 100 m)?', answer: 'The width of a book', checkMode: 'auto', correctAnswer: 'thewidthofabook', correctAnswers: ['thewidthofabook', 'book', 'width of a book', 'the width of a book'], explanation: 'A ruler (30 cm) is a good reference for objects around 20-30 cm, like a book. A soccer field is far too long for a ruler-based estimate ✓' },
        { difficulty: 'Medium', question: 'Estimate the length of an adult\'s foot. Choose the most reasonable estimate: 3 cm, 25 cm or 3 m.', answer: '25 cm', checkMode: 'auto', correctAnswer: '25cm', correctAnswers: ['25cm', '25', '25 cm'], explanation: 'An adult foot is about the same length as a pencil and a bit more — roughly 25 cm is realistic. 3 cm is too small and 3 m is far too large ✓' },
        { difficulty: 'Medium', question: 'Estimate the height of a two-storey house. Choose the most reasonable estimate: 6 cm, 60 cm or 6 m.', answer: '6 m', checkMode: 'auto', correctAnswer: '6m', correctAnswers: ['6m', '6', '6 m'], explanation: 'A two-storey house is much taller than a person — about 6 m is realistic. 6 cm and 60 cm are far too small ✓' },
        { difficulty: 'Medium', question: 'Estimate the width of a classroom door. Choose the most reasonable estimate: 8 mm, 8 cm or 80 cm.', answer: '80 cm', checkMode: 'auto', correctAnswer: '80cm', correctAnswers: ['80cm', '80', '80 cm'], explanation: 'A door needs to be wide enough for a person to walk through — about 80 cm is realistic. 8 mm and 8 cm are far too small ✓' },
        { difficulty: 'Medium', question: 'Estimate the length of a school bus. Choose the most reasonable estimate: 10 cm, 1 m or 10 m.', answer: '10 m', checkMode: 'auto', correctAnswer: '10m', correctAnswers: ['10m', '10', '10 m'], explanation: 'A school bus is a large vehicle — about 10 m is realistic. 10 cm and 1 m are far too small ✓' },
        { difficulty: 'Medium', question: 'Estimate the distance you can walk in about 12 minutes. Choose the most reasonable estimate: 1 m, 100 m or 1 km.', answer: '1 km', checkMode: 'auto', correctAnswer: '1km', correctAnswers: ['1km', '1', '1 km'], explanation: 'Walking for about 10-12 minutes covers roughly 1 km — this matches the reference fact for a kilometre ✓' },
        { difficulty: 'Easy', question: 'A ribbon is 2 m 30 cm long. Another ribbon is 1 m 45 cm long. What is the total length of both ribbons?', answer: '3 m 75 cm', checkMode: 'auto', correctAnswer: '3m75cm', correctAnswers: ['3m75cm', '3 m75cm', '375cm', '375'], explanation: 'Add the cm: 30 + 45 = 75 cm. Add the m: 2 + 1 = 3 m. Total: 3 m 75 cm ✓' },
        { difficulty: 'Medium', question: 'A garden path is 5 m long. Another path next to it is 3 m 50 cm long. What is the total length of both paths in cm?', answer: '850 cm', checkMode: 'auto', correctAnswer: '850cm', correctAnswers: ['850cm', '850', '850 cm'], explanation: '5 m = 500 cm and 3 m 50 cm = 350 cm. Total: 500 + 350 = 850 cm ✓' },
        { difficulty: 'Medium', question: 'A rope is 8 m long. Sipho cuts off 2 m 40 cm. How much rope is left, in the mixed form (m and cm)?', answer: '5 m 60 cm', checkMode: 'auto', correctAnswer: '5m60cm', correctAnswers: ['5m60cm', '5 m60cm', '560cm', '560'], explanation: '8 m = 800 cm. 800 cm − 240 cm = 560 cm = 5 m 60 cm ✓' },
        { difficulty: 'Medium', question: 'A rectangular garden fence has 4 equal sides, each 6 m long. What is the total length of fencing needed?', answer: '24 m', checkMode: 'auto', correctAnswer: '24m', correctAnswers: ['24m', '24', '24 m'], explanation: '"Total" means add all 4 sides: 6 + 6 + 6 + 6 = 24 m (or 4 × 6 = 24 m) ✓' },
        { difficulty: 'Medium', question: 'A rectangular garden is 10 m long and 7 m wide. What is the perimeter of the garden?', answer: '34 m', checkMode: 'auto', correctAnswer: '34m', correctAnswers: ['34m', '34', '34 m'], explanation: 'Perimeter = 2 × (length + width) = 2 × (10 + 7) = 2 × 17 = 34 m ✓' },
        { difficulty: 'Medium', question: 'A running track is 400 m long. If an athlete runs 4 laps, how far does she run in total? Give your answer in metres.', answer: '1 600 m', checkMode: 'auto', correctAnswer: '1600m', correctAnswers: ['1600m', '1600', '1 600m', '1600 m', '1 600 m'], explanation: '400 m × 4 = 1 600 m ✓' },
        { difficulty: 'Medium', question: 'A wire that is 250 cm long is cut into 5 equal pieces. How long is each piece?', answer: '50 cm', checkMode: 'auto', correctAnswer: '50cm', correctAnswers: ['50cm', '50', '50 cm'], explanation: '"Equal pieces" means divide: 250 ÷ 5 = 50 cm ✓' },
        { difficulty: 'Medium', question: 'A wall needs to be 3 m tall. If each brick is 25 cm tall and bricks are stacked directly on top of each other, how many bricks are needed?', answer: '12 bricks', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 bricks', '12bricks'], explanation: '3 m = 300 cm. Divide by the height of one brick: 300 ÷ 25 = 12 bricks ✓' },
        { difficulty: 'Medium', question: 'A ladder needs to reach a total height of 2 m 50 cm made up of two sections joined together: one section is 1 m 75 cm. How long must the second section be?', answer: '75 cm', checkMode: 'auto', correctAnswer: '75cm', correctAnswers: ['75cm', '75', '75 cm'], explanation: '2 m 50 cm = 250 cm and 1 m 75 cm = 175 cm. 250 − 175 = 75 cm ✓' },
        { difficulty: 'Hard', question: 'A plank of wood is 6 m long. It is cut into 3 equal pieces. How long is each piece?', answer: '2 m', checkMode: 'auto', correctAnswer: '2m', correctAnswers: ['2m', '2', '2 m'], explanation: '"Equal pieces" means divide: 6 ÷ 3 = 2 m ✓' },
        { difficulty: 'Hard', question: 'Three ribbons measure 1 m 20 cm, 1 m 35 cm and 1 m 45 cm. What is their combined length in metres?', answer: '4 m', checkMode: 'auto', correctAnswer: '4m', correctAnswers: ['4m', '4', '4 m'], explanation: 'Add the cm: 20 + 35 + 45 = 100 cm = 1 m. Add the m: 1 + 1 + 1 + 1 (carried) = 4 m. Total: 4 m ✓' },
        { difficulty: 'Hard', question: 'A classroom is 9 m long and 6 m wide. What is the perimeter of the classroom?', answer: '30 m', checkMode: 'auto', correctAnswer: '30m', correctAnswers: ['30m', '30', '30 m'], explanation: 'Perimeter = 2 × (length + width) = 2 × (9 + 6) = 2 × 15 = 30 m ✓' },
        { difficulty: 'Hard', question: 'A hiking trail is 12 km long. A hiker has already walked 7 km 500 m. How much further does she still need to walk?', answer: '4 km 500 m', checkMode: 'auto', correctAnswer: '4km500m', correctAnswers: ['4km500m', '4 km500m', '4500m', '4500'], explanation: '"How much further" means subtract: 12 km − 7 km 500 m = 4 km 500 m ✓' },
        { difficulty: 'Hard', question: 'A learner walks 1 km 500 m to school and 2 km 300 m to visit a friend afterwards. What is the total distance walked?', answer: '3 km 800 m', checkMode: 'auto', correctAnswer: '3km800m', correctAnswers: ['3km800m', '3 km800m', '3800m', '3800'], explanation: '"Total" means add: 1 km 500 m + 2 km 300 m = 3 km 800 m ✓' },
        { difficulty: 'Hard', question: 'Estimate the height of a school desk in cm, and explain what real-life object you used as a reference to make your estimate.', answer: 'A school desk is about 70-75 cm tall. A reasonable reference is your own height when seated, or the height of a classroom door (about 2 m) compared to the desk (roughly a third of that height).', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You can confidently estimate realistic lengths and solve real-world length word problems.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the reference lengths and word problem key words.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP / COMBINED PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Multi-Step and Combined Problems',
      questions: [
        { difficulty: 'Medium', question: 'A builder has 3 planks each measuring 1 m 50 cm. What is the total length of the 3 planks, in the mixed form (m and cm)?', answer: '4 m 50 cm', checkMode: 'auto', correctAnswer: '4m50cm', correctAnswers: ['4m50cm', '4 m50cm', '450cm', '450'], explanation: '3 × 1 m 50 cm = 3 × 150 cm = 450 cm = 4 m 50 cm ✓' },
        { difficulty: 'Medium', question: 'A 20 m fence has a pole planted every 2 m, including one pole at each end. How many poles are needed?', answer: '11 poles', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', '11 poles', '11poles'], explanation: 'Number of gaps = 20 ÷ 2 = 10. Since a pole is needed at both ends, poles = gaps + 1 = 10 + 1 = 11 ✓' },
        { difficulty: 'Medium', question: 'A 500 cm ribbon is cut into 4 pieces of 75 cm each. How much ribbon is left over?', answer: '200 cm', checkMode: 'auto', correctAnswer: '200cm', correctAnswers: ['200cm', '200', '200 cm', '2m', '2 m'], explanation: '4 pieces used: 4 × 75 = 300 cm. Left over: 500 − 300 = 200 cm ✓' },
        { difficulty: 'Hard', question: 'A tree is 3 m 50 cm tall. A car park entrance has a height limit of 3 m. By how many centimetres is the tree too tall to fit under the entrance?', answer: '50 cm', checkMode: 'auto', correctAnswer: '50cm', correctAnswers: ['50cm', '50', '50 cm'], explanation: '"By how many" means subtract: 3 m 50 cm − 3 m = 50 cm ✓' },
        { difficulty: 'Hard', question: 'A rope 15 m long is cut into equal pieces of 3 m each. How many pieces are made?', answer: '5 pieces', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 pieces', '5pieces'], explanation: '"Equal pieces" means divide: 15 ÷ 3 = 5 pieces ✓' },
        { difficulty: 'Hard', question: 'A stack of 20 identical books is 40 cm tall. How thick is each book?', answer: '2 cm', checkMode: 'auto', correctAnswer: '2cm', correctAnswers: ['2cm', '2', '2 cm'], explanation: 'Divide the total height by the number of books: 40 ÷ 20 = 2 cm ✓' },
        { difficulty: 'Medium', question: 'A ladder reaches 2 m 50 cm up a wall using one section, plus another 1 m 75 cm using a second section. What is the total height reached, in the mixed form (m and cm)?', answer: '4 m 25 cm', checkMode: 'auto', correctAnswer: '4m25cm', correctAnswers: ['4m25cm', '4 m25cm', '425cm', '425'], explanation: '2 m 50 cm = 250 cm and 1 m 75 cm = 175 cm. Total: 250 + 175 = 425 cm = 4 m 25 cm ✓' },
        { difficulty: 'Hard', question: 'A plank of wood 6 m long is cut into 3 pieces of 2 m each. If each piece is then cut in half, how long is each final piece?', answer: '1 m', checkMode: 'auto', correctAnswer: '1m', correctAnswers: ['1m', '1', '1 m'], explanation: 'First cut: 6 ÷ 3 = 2 m pieces. Second cut: 2 ÷ 2 = 1 m final pieces ✓' },
        { difficulty: 'Hard', question: 'A car travels 3 km 200 m, then a further 1 km 800 m. How much further did the car travel on the first leg than the second leg?', answer: '1 km 400 m', checkMode: 'auto', correctAnswer: '1km400m', correctAnswers: ['1km400m', '1 km400m', '1400m', '1400'], explanation: '"How much further" means subtract: 3 km 200 m − 1 km 800 m = 1 km 400 m ✓' },
        { difficulty: 'Hard', question: 'A rectangular field measures 30 m by 20 m. If a farmer walks all the way around the field once, how far does he walk?', answer: '100 m', checkMode: 'auto', correctAnswer: '100m', correctAnswers: ['100m', '100', '100 m'], explanation: 'Perimeter = 2 × (30 + 20) = 2 × 50 = 100 m ✓' },
        { difficulty: 'Hard', question: 'A wall is 250 cm tall. It needs to be built up to 4 m. How many more centimetres does it need to grow?', answer: '150 cm', checkMode: 'auto', correctAnswer: '150cm', correctAnswers: ['150cm', '150', '150 cm', '1.5m', '1.5 m'], explanation: '4 m = 400 cm. 400 − 250 = 150 cm ✓' },
        { difficulty: 'Hard', question: 'A cyclist rides 4 km east, then turns and rides 3 km further east. How far east of the start is the cyclist now?', answer: '7 km', checkMode: 'auto', correctAnswer: '7km', correctAnswers: ['7km', '7', '7 km'], explanation: 'Both distances are in the same direction, so add: 4 km + 3 km = 7 km ✓' },
        { difficulty: 'Hard', question: 'A ribbon 1 m 80 cm long is shared equally between 3 friends. How much ribbon does each friend get, in cm?', answer: '60 cm', checkMode: 'auto', correctAnswer: '60cm', correctAnswers: ['60cm', '60', '60 cm'], explanation: '1 m 80 cm = 180 cm. Shared equally: 180 ÷ 3 = 60 cm ✓' },
        { difficulty: 'Hard', question: 'Two pieces of string measure 2 m 25 cm and 3 m 40 cm. What is the difference in their lengths?', answer: '1 m 15 cm', checkMode: 'auto', correctAnswer: '1m15cm', correctAnswers: ['1m15cm', '115cm', '1 m 15 cm', '1m 15cm', '1.15m'], explanation: 'Subtract cm: 40 − 25 = 15 cm. Subtract m: 3 − 2 = 1 m. Difference: 1 m 15 cm ✓' },
        { difficulty: 'Hard', question: 'A school has a 2 km walking track. If a learner walks the track 3 times, how many metres has she walked in total?', answer: '6 000 m', checkMode: 'auto', correctAnswer: '6000m', correctAnswers: ['6000m', '6000', '6 000m', '6000 m', '6 000 m', '6km', '6 km'], explanation: '2 km = 2 000 m. 3 laps: 2 000 × 3 = 6 000 m ✓' },
        { difficulty: 'Hard', question: 'A picture frame needs a wooden border. The frame is 40 cm by 30 cm. What is the total length of wood needed to go all the way around the frame?', answer: '140 cm', checkMode: 'auto', correctAnswer: '140cm', correctAnswers: ['140cm', '140', '140 cm', '1.4m', '1.4 m'], explanation: 'Perimeter = 2 × (40 + 30) = 2 × 70 = 140 cm ✓' },
        { difficulty: 'Hard', question: 'A delivery van drives 850 m to a shop, then a further 1 250 m to a second shop. What is the total distance driven, in km and m?', answer: '2 km 100 m', checkMode: 'auto', correctAnswer: '2km100m', correctAnswers: ['2km100m', '2 km100m', '2100m', '2100'], explanation: 'Total distance: 850 + 1 250 = 2 100 m = 2 km 100 m ✓' },
        { difficulty: 'Hard', question: 'A gardener has 18 m of edging. He uses 6 m 50 cm around one flower bed and 4 m 25 cm around another. How much edging does he have left?', answer: '7 m 25 cm', checkMode: 'auto', correctAnswer: '7m25cm', correctAnswers: ['7m25cm', '725cm', '7 m 25 cm', '7m 25cm', '7.25m'], explanation: 'Total used: 6 m 50 cm + 4 m 25 cm = 10 m 75 cm. Left: 18 m − 10 m 75 cm = 7 m 25 cm ✓' },
        { difficulty: 'Hard', question: 'Explain why it is important to convert two lengths to the same unit before adding or subtracting them. Use an example in your explanation.', answer: 'You must convert to the same unit first because the numbers only mean the same thing once the units match — for example, adding 2 m and 50 cm directly as "2 + 50 = 52" is wrong, but converting 2 m to 200 cm first gives 200 + 50 = 250 cm, which is the correct total.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo says that 1 500 mm is longer than 1 m 40 cm. Is he correct? Show your working by converting both to the same unit.', answer: 'Yes, Thabo is correct. Convert both to centimetres: 1 500 mm ÷ 10 = 150 cm, and 1 m 40 cm = 140 cm. Since 150 cm is greater than 140 cm, 1 500 mm is indeed longer.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A rectangular vegetable patch is 12 m long and 5 m wide. A fence is needed around the whole patch, plus one extra length of fencing straight across the middle (parallel to the width) to divide it in two. How much fencing is needed in total?', answer: '39 m', checkMode: 'auto', correctAnswer: '39m', correctAnswers: ['39m', '39', '39 m'], explanation: 'Perimeter = 2 × (12 + 5) = 34 m. Extra dividing fence (parallel to the width) = 5 m. Total = 34 + 5 = 39 m ✓' },
        { difficulty: 'Hard', question: 'A wire fence needs posts every 5 m along a straight 40 m fence line, with a post at each end. If each post costs R85, what is the total cost of the posts?', answer: 'R765', checkMode: 'auto', correctAnswer: '765', correctAnswers: ['765', 'R765'], explanation: 'Number of posts: (40 ÷ 5) + 1 = 9 posts. Total cost: 9 × R85 = R765 ✓' },
        { difficulty: 'Hard', question: 'A relay race team runs a total distance of 1 km 200 m, split equally between 4 runners. How far does each runner run, in metres?', answer: '300 m', checkMode: 'auto', correctAnswer: '300m', correctAnswers: ['300m', '300', '300 m'], explanation: '1 km 200 m = 1 200 m. Shared equally: 1 200 ÷ 4 = 300 m ✓' },
        { difficulty: 'Hard', question: 'A builder needs 5 pieces of pipe, each 1 m 60 cm long, cut from one long pipe. What is the minimum total length of pipe needed, in metres?', answer: '8 m', checkMode: 'auto', correctAnswer: '8m', correctAnswers: ['8m', '8', '8 m'], explanation: '5 × 1 m 60 cm = 5 × 160 cm = 800 cm = 8 m ✓' },
        { difficulty: 'Hard', question: 'Explain how you would check whether 3 500 cm is more or less than 3 km 400 m, without a calculator. Describe your method in words.', answer: 'Convert both lengths to the same unit, such as metres. 3 500 cm ÷ 100 = 35 m, and 3 km 400 m = 3 400 m. Comparing 35 m with 3 400 m shows that 3 500 cm is far less than 3 km 400 m.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered multi-step and combined length problems.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the multi-step worked examples on adding, subtracting and converting length.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
