import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Capacity and Volume',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — CAPACITY VS VOLUME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'capacity-vs-volume',
      title: 'Capacity vs Volume',
      icon: '🧴',
      explanation: `
<p style="margin-bottom:14px;">When we talk about liquids in containers, we use two different words: <strong style="color:#1e40af;">capacity</strong> and <strong style="color:#16a34a;">volume</strong>. They sound similar but they mean different things.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Capacity vs Volume</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Capacity<br/><span style="font-weight:400;font-size:12px;">(the container)</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong style="color:#1e40af;">Capacity</strong> is the <strong>maximum amount</strong> a container can hold when it is completely full. It describes the size of the container itself.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Volume<br/><span style="font-weight:400;font-size:12px;">(what is inside)</span></span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Volume</strong> is the <strong>actual amount</strong> of liquid or substance that is currently inside the container. It can be less than the capacity.</span>
    </div>

  </div>
</div>

<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#15803d;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Real-life example 💧</div>
  <p style="font-size:15px;color:#14532d;margin-bottom:8px;">A bottle has a <strong style="color:#1e40af;">capacity</strong> of <strong>2 litres</strong> — that is the most it can ever hold.</p>
  <p style="font-size:15px;color:#14532d;margin-bottom:0;">The bottle currently has 1.5 litres of water in it. The <strong style="color:#16a34a;">volume</strong> of water is <strong>1.5 l</strong>.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Units of capacity and volume</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Millilitre<br/><span style="font-weight:400;font-size:12px;">(ml)</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Small amounts.</strong> Use <strong style="color:#1e40af;">millilitres (ml)</strong> for very small amounts of liquid — like a dose of medicine or a teaspoon of oil. 1 ml is a very tiny drop.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Litre<br/><span style="font-weight:400;font-size:12px;">(l)</span></span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong>Larger amounts.</strong> Use <strong style="color:#16a34a;">litres (l)</strong> for larger amounts of liquid — like a bottle of water or a pot of soup.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Conversion fact 🔢</span>
  <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:10px;">
    <span style="background:#1e40af;color:#fff;border-radius:8px;padding:6px 16px;font-weight:700;font-size:15px;">1 000 <span style="color:#bfdbfe;">ml</span> = 1 <span style="color:#bbf7d0;">l</span></span>
  </div>
  <p style="margin-top:10px;font-size:14px;color:#78350f;">To convert <strong style="color:#16a34a;">l to ml</strong> — <strong>multiply by 1 000</strong>. &nbsp;&nbsp; To convert <strong style="color:#1e40af;">ml to l</strong> — <strong>divide by 1 000</strong>.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Real-life reference points</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 5 ml</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">A <strong>teaspoon</strong> holds about <strong style="color:#1e40af;">5 ml</strong> — a useful reference for very small volumes.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 250 ml</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">A <strong>cup</strong> holds about <strong style="color:#1e40af;">250 ml</strong> — a quarter of a litre.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">500 ml / 1 l</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">A <strong>standard water bottle</strong> holds either <strong style="color:#16a34a;">500 ml</strong> or <strong style="color:#16a34a;">1 l</strong> — very common sizes.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 5 l</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">A <strong>large pot</strong> holds about <strong style="color:#16a34a;">5 l</strong> — used for cooking soup or boiling water for a family.</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Which unit would you use to measure the capacity of a swimming pool?',
          steps: [
            'A swimming pool holds a <strong>very large amount</strong> of water.',
            'Millilitres are far too small — you would need millions of them, which makes no practical sense.',
            '<strong style="color:#16a34a;">Litres (l)</strong> are used for large volumes of liquid.',
          ],
          answer: 'Litres (l). A swimming pool holds a very large amount of water, so litres are the correct unit.',
        },
        {
          question: 'Which unit would you use to measure a dose of medicine?',
          steps: [
            'A dose of medicine is a <strong>very small amount</strong> of liquid.',
            'Litres would be far too large — a medicine dose is only a tiny fraction of a litre.',
            '<strong style="color:#1e40af;">Millilitres (ml)</strong> are used for small amounts like medicine, eye drops or cooking ingredients.',
          ],
          answer: 'Millilitres (ml). Medicine is measured in very small amounts, so millilitres are the correct unit.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'A 1 litre bottle shown with markings at 250ml 500ml 750ml and 1000ml with the current volume shown at 750ml to illustrate capacity vs volume',
      videoPlaceholder:
        'Short video explaining the difference between capacity and volume with real life examples of millilitres and litres',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — READING MEASURING CONTAINERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-measuring-containers',
      title: 'Reading Measuring Containers',
      icon: '🧪',
      explanation: `
<p style="margin-bottom:14px;">Measuring containers like <strong>jugs</strong> and <strong>measuring cylinders</strong> have lines printed on the side called <strong style="color:#1e40af;">graduations</strong>. These markings help us read the <strong style="color:#16a34a;">volume</strong> of liquid inside. To get an accurate reading, you need to count the intervals carefully and read at eye level.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How to read a measuring container</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Find the <strong>maximum capacity</strong> marked on the container — this tells you the total range of the scale.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Count the number of intervals</strong> between two <strong style="color:#1e40af;">marked values</strong> (the numbered lines on the side).</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Calculate the value of each small interval</strong> by dividing the gap between two marked values by the number of intervals.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Read the <strong style="color:#16a34a;">level of the liquid</strong> at <strong>eye level</strong> — always look straight across, not from above or below.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">5</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Record the <strong style="color:#dc2626;">measurement</strong> with the correct unit (ml or l).</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Key terms</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="font-size:15px;color:#1e3a8a;"><strong style="color:#1e40af;">Graduation</strong> — a line marked on a measuring container to show a specific volume.</div>
    <div style="font-size:15px;color:#1e3a8a;"><strong style="color:#16a34a;">Liquid level</strong> — where the surface of the liquid sits on the scale.</div>
    <div style="font-size:15px;color:#1e3a8a;"><strong style="color:#dc2626;">Reading</strong> — the volume value you record by reading the scale at the liquid level.</div>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'A measuring jug goes from 0 to 1 000 ml with markings every 200 ml. There are 4 small intervals between each 200 ml mark. What is each small interval worth?',
          steps: [
            'Each <strong style="color:#1e40af;">200 ml section</strong> is divided into <strong>4 small intervals</strong>.',
            'Divide: <strong style="color:#1e40af;">200</strong> ÷ <strong>4</strong> = <strong style="color:#dc2626;">50</strong>.',
          ],
          answer: 'Each small interval is worth 50 ml.',
        },
        {
          question:
            'A jug has markings at 0, 500 ml and 1 000 ml. The liquid level is halfway between 500 ml and 1 000 ml. What is the volume?',
          steps: [
            'The gap between <strong style="color:#1e40af;">500 ml</strong> and <strong style="color:#1e40af;">1 000 ml</strong> is <strong>500 ml</strong>.',
            'Halfway = 500 ÷ 2 = <strong>250 ml</strong> above the 500 ml mark.',
            '<strong style="color:#1e40af;">500</strong> + <strong>250</strong> = <strong style="color:#dc2626;">750</strong>.',
          ],
          answer: 'The volume is 750 ml.',
        },
        {
          question:
            'A measuring cylinder has markings every 100 ml up to 500 ml. There are 5 small intervals between each 100 ml mark. The liquid is at the third small interval after 300 ml. What is the volume?',
          steps: [
            'Each small interval = <strong style="color:#1e40af;">100</strong> ÷ <strong>5</strong> = <strong>20 ml</strong>.',
            '3 intervals past 300 ml: <strong style="color:#1e40af;">300</strong> + (3 × <strong>20</strong>) = 300 + <strong>60</strong> = <strong style="color:#dc2626;">360</strong>.',
          ],
          answer: 'The volume is 360 ml.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'A measuring jug showing markings at 0 200 400 600 800 and 1000ml with the liquid level at 600ml clearly marked with a red line',
      videoPlaceholder:
        'Short video showing how to read a measuring jug or cylinder correctly at eye level and calculate the value of intervals',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CONVERTING BETWEEN MILLILITRES AND LITRES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-ml-litres',
      title: 'Converting Between Millilitres and Litres',
      icon: '🔄',
      explanation: `
<p style="margin-bottom:14px;"><strong>Converting</strong> means changing a measurement from one unit to another without changing the actual amount. All conversions between millilitres and litres use one key fact: <strong style="color:#16a34a;">1 000 ml = 1 l</strong>.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Conversion rules</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">ml → l<br/><span style="font-weight:400;font-size:12px;">smaller → bigger</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Going from <strong style="color:#1e40af;">ml</strong> to <strong style="color:#dc2626;">l</strong> — <strong>divide by <span style="color:#16a34a;">1 000</span></strong>. The number gets smaller because litres are a larger unit.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">l → ml<br/><span style="font-weight:400;font-size:12px;">bigger → smaller</span></span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">Going from <strong style="color:#dc2626;">l</strong> to <strong style="color:#1e40af;">ml</strong> — <strong>multiply by <span style="color:#16a34a;">1 000</span></strong>. The number gets bigger because millilitres are a smaller unit.</span>
    </div>

  </div>
</div>

<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Memory trick 💡</div>
  <div style="color:#7f1d1d;font-size:15px;">Going to a <strong>smaller unit</strong> (<strong style="color:#dc2626;">l</strong> → <strong style="color:#1e40af;">ml</strong>) → <strong style="color:#16a34a;">multiply by 1 000</strong> → the number gets <strong>bigger</strong>.<br/>Going to a <strong>larger unit</strong> (<strong style="color:#1e40af;">ml</strong> → <strong style="color:#dc2626;">l</strong>) → <strong style="color:#16a34a;">divide by 1 000</strong> → the number gets <strong>smaller</strong>.</div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Conversion fact 🔢</span>
  <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:10px;">
    <span style="background:#1e40af;color:#fff;border-radius:8px;padding:6px 16px;font-weight:700;font-size:15px;"><span style="color:#bfdbfe;">1 000 ml</span> = <span style="color:#fca5a5;">1 l</span></span>
  </div>
  <p style="margin-top:10px;font-size:14px;color:#78350f;">To convert <strong style="color:#1e40af;">ml to l</strong> — <strong>divide by <span style="color:#16a34a;">1 000</span></strong>. &nbsp;&nbsp; To convert <strong style="color:#dc2626;">l to ml</strong> — <strong>multiply by <span style="color:#16a34a;">1 000</span></strong>.</p>
</div>
`,
      workedExamples: [
        {
          question: 'Convert 2 500 ml to litres.',
          steps: [
            'We are converting from <strong style="color:#1e40af;">ml</strong> to <strong style="color:#dc2626;">l</strong> — divide by <strong style="color:#16a34a;">1 000</strong>.',
            '<strong style="color:#1e40af;">2 500</strong> ÷ <strong style="color:#16a34a;">1 000</strong> = <strong style="color:#dc2626;">2.5</strong>.',
          ],
          answer: '2 500 ml = 2.5 l.',
        },
        {
          question: 'Convert 3.75 l to ml.',
          steps: [
            'We are converting from <strong style="color:#dc2626;">l</strong> to <strong style="color:#1e40af;">ml</strong> — multiply by <strong style="color:#16a34a;">1 000</strong>.',
            '<strong style="color:#dc2626;">3.75</strong> × <strong style="color:#16a34a;">1 000</strong> = <strong style="color:#1e40af;">3 750</strong>.',
          ],
          answer: '3.75 l = 3 750 ml.',
        },
      ],
      practiceQuestions: [],
      videoPlaceholder:
        'Short video showing how to convert between millilitres and litres by multiplying or dividing by 1 000 with worked examples',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — VOLUME USING UNIT CUBES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'volume-unit-cubes',
      title: 'Volume Using Unit Cubes',
      icon: '🧊',
      explanation: `
<p style="margin-bottom:14px;">The <strong>volume</strong> of a 3D object tells us how much space it takes up. We can measure volume by counting how many <strong style="color:#1e40af;">unit cubes</strong> fit inside the object. A unit cube has sides of <strong>1 cm</strong> and a volume of <strong style="color:#dc2626;">1 cm³</strong> (one cubic centimetre).</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">What is a unit cube?</div>
  <div style="display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">1 cm³</span>
    <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">A <strong style="color:#1e40af;">unit cube</strong> is a cube where every side is exactly <strong>1 cm</strong> long. Its volume is <strong style="color:#dc2626;">1 cubic centimetre (1 cm³)</strong>. By counting how many unit cubes fill a shape, we find its volume.</span>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Method: counting unit cubes</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Count how many <strong style="color:#1e40af;">unit cubes</strong> fit along the <strong>length</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Count how many <strong style="color:#1e40af;">unit cubes</strong> fit along the <strong>width</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Count how many <strong>layers</strong> (the height) there are.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Multiply</strong>: length × width × height = <strong style="color:#dc2626;">volume in cm³</strong>.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Formula 🔢</span>
  <div style="margin-top:10px;">
    <span style="background:#1e40af;color:#fff;border-radius:8px;padding:6px 16px;font-weight:700;font-size:15px;">Volume = length × width × height</span>
  </div>
  <p style="margin-top:10px;font-size:14px;color:#78350f;">Each measurement is in <strong style="color:#1e40af;">cm</strong>, so the answer is in <strong style="color:#dc2626;">cm³</strong> (cubic centimetres).</p>
</div>
`,
      workedExamples: [
        {
          question:
            'A box is 3 cubes long, 2 cubes wide and 2 cubes tall. What is its volume?',
          steps: [
            'Count the <strong style="color:#1e40af;">cubes in one layer</strong>: <strong>3</strong> × <strong>2</strong> = <strong>6 cubes</strong>.',
            'Count the <strong>layers</strong>: there are <strong>2 layers</strong>.',
            'Total volume: <strong>6</strong> × <strong>2</strong> = <strong style="color:#dc2626;">12 cm³</strong>.',
          ],
          answer: 'The volume is 12 cm³.',
        },
        {
          question:
            'A shape is made of unit cubes. Counting all visible and hidden cubes gives 18 cubes. What is the volume?',
          steps: [
            'Each <strong style="color:#1e40af;">unit cube</strong> has a volume of <strong style="color:#dc2626;">1 cm³</strong>.',
            'Count all the cubes — visible and hidden: <strong>18 cubes</strong>.',
          ],
          answer: 'The volume is 18 cm³.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'A 3D rectangular box made of unit cubes showing 3 cubes long 2 cubes wide and 2 cubes tall with each cube labelled 1cm cubed',
      videoPlaceholder:
        'Short video showing how to calculate the volume of a 3D shape by counting unit cubes and using length times width times height',
    },
  ],
  topicPractice: [

    // ── SECTION 1 — Capacity vs Volume ───────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Which unit would you use to measure each of the following?',
      checkMode: 'auto',
      answer: 'a) Millilitres (ml)   b) Litres (l)   c) Litres (l)',
      parts: [
        {
          label: 'a) A teaspoon of medicine',
          correctAnswer: 'ml',
          correctAnswers: ['ml', 'millilitres', 'millilitre', 'milliliters', 'milliliter'],
          explanation: 'Medicine is measured in very small amounts. Millilitres (ml) are used for small volumes like medicine — a single dose is usually just a few ml.',
        },
        {
          label: 'b) A bucket of water',
          correctAnswer: 'l',
          correctAnswers: ['l', 'litres', 'litre', 'liters', 'liter'],
          explanation: 'A bucket holds a large amount of water — usually about 10 l. Litres (l) are used for larger volumes like buckets, pots and containers.',
        },
        {
          label: 'c) A swimming pool',
          correctAnswer: 'l',
          correctAnswers: ['l', 'litres', 'litre', 'liters', 'liter'],
          explanation: 'A swimming pool holds an enormous amount of water — thousands of litres. Litres (l) are always used for large volumes of liquid.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question: 'A bottle has a capacity of 2 l. It currently contains 1 250 ml of juice.',
      checkMode: 'auto',
      answer: 'a) 2 000 ml   b) 750 ml   c) 0.75 l',
      parts: [
        {
          label: 'a) How many ml is the capacity of the bottle?',
          correctAnswer: '2000ml',
          correctAnswers: ['2000ml', '2000', '2000 ml', '2 000ml', '2 000 ml'],
          explanation: 'Convert the capacity to ml: 2 l × 1 000 = 2 000 ml.',
        },
        {
          label: 'b) How much more juice can fit in the bottle in ml?',
          correctAnswer: '750ml',
          correctAnswers: ['750ml', '750', '750 ml'],
          explanation: 'Subtract the current volume from the capacity: 2 000 ml − 1 250 ml = 750 ml.',
        },
        {
          label: 'c) Convert the remaining space to litres.',
          correctAnswer: '0.75l',
          correctAnswers: ['0.75l', '0.75', '0.75 l'],
          explanation: 'Divide by 1 000: 750 ÷ 1 000 = 0.75 l.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'Thabo says a standard cup holds about 25 ml. Lerato says it holds about 250 ml. Who is correct and why?',
      checkMode: 'self',
      answer: 'Lerato is correct. A standard cup holds about 250 ml. 25 ml is only about 5 teaspoons, which is far too small for a cup.',
    },

    // ── SECTION 2 — Reading Measuring Containers ──────────────────────────────

    {
      difficulty: 'Easy',
      question: 'A measuring jug has markings at 0, 500 ml and 1 000 ml. The liquid is exactly at the 500 ml mark. What is the volume?',
      checkMode: 'auto',
      answer: '500 ml',
      correctAnswer: '500ml',
      correctAnswers: ['500ml', '500', '500 ml'],
      explanation: 'The liquid is exactly on the 500 ml marking, so the volume is 500 ml.',
    },

    {
      difficulty: 'Medium',
      question: 'A measuring jug goes from 0 to 1 000 ml with 5 equal intervals between each 200 ml mark.',
      checkMode: 'auto',
      answer: 'a) 40 ml   b) 520 ml   c) 700 ml',
      parts: [
        {
          label: 'a) What is the value of each small interval?',
          correctAnswer: '40ml',
          correctAnswers: ['40ml', '40', '40 ml'],
          explanation: 'Divide the gap between marked values by the number of intervals: 200 ÷ 5 = 40 ml.',
        },
        {
          label: 'b) What is the volume if the liquid is at the third interval after 400 ml?',
          correctAnswer: '520ml',
          correctAnswers: ['520ml', '520', '520 ml'],
          explanation: 'Start at 400 ml and count 3 intervals of 40 ml: 400 + (3 × 40) = 400 + 120 = 520 ml.',
        },
        {
          label: 'c) What is the volume if the liquid is halfway between 600 ml and 800 ml?',
          correctAnswer: '700ml',
          correctAnswers: ['700ml', '700', '700 ml'],
          explanation: 'The gap between 600 and 800 is 200 ml. Halfway = 200 ÷ 2 = 100 ml past 600. 600 + 100 = 700 ml.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'A measuring cylinder has a capacity of 500 ml with markings every 100 ml. There are 4 small intervals between each 100 ml mark.',
      checkMode: 'auto',
      answer: 'a) 25 ml   b) 350 ml   c) 150 ml',
      parts: [
        {
          label: 'a) What is the value of each small interval?',
          correctAnswer: '25ml',
          correctAnswers: ['25ml', '25', '25 ml'],
          explanation: 'Divide the gap between marked values by the number of intervals: 100 ÷ 4 = 25 ml.',
        },
        {
          label: 'b) The liquid is at the second interval after 300 ml. What is the volume?',
          correctAnswer: '350ml',
          correctAnswers: ['350ml', '350', '350 ml'],
          explanation: 'Start at 300 ml and count 2 intervals of 25 ml: 300 + (2 × 25) = 300 + 50 = 350 ml.',
        },
        {
          label: 'c) How much more liquid is needed to fill the cylinder to capacity?',
          correctAnswer: '150ml',
          correctAnswers: ['150ml', '150', '150 ml'],
          explanation: 'Subtract the current volume from the capacity: 500 − 350 = 150 ml.',
        },
      ],
    },

    // ── SECTION 3 — Converting Between Millilitres and Litres ─────────────────

    {
      difficulty: 'Easy',
      question: 'Convert the following.',
      checkMode: 'auto',
      answer: 'a) 3 l   b) 2 000 ml',
      parts: [
        {
          label: 'a) 3 000 ml = ___ l',
          correctAnswer: '3l',
          correctAnswers: ['3l', '3', '3 l'],
          explanation: 'To convert ml to l, divide by 1 000: 3 000 ÷ 1 000 = 3 l.',
        },
        {
          label: 'b) 2 l = ___ ml',
          correctAnswer: '2000ml',
          correctAnswers: ['2000ml', '2000', '2000 ml', '2 000ml', '2 000 ml'],
          explanation: 'To convert l to ml, multiply by 1 000: 2 × 1 000 = 2 000 ml.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question: 'Convert each measurement to the unit shown.',
      checkMode: 'auto',
      answer: 'a) 1.5 l   b) 2 500 ml   c) 0.75 l   d) 250 ml',
      parts: [
        {
          label: 'a) 1 500 ml = ___ l',
          correctAnswer: '1.5l',
          correctAnswers: ['1.5l', '1.5', '1.5 l'],
          explanation: 'Divide by 1 000: 1 500 ÷ 1 000 = 1.5 l.',
        },
        {
          label: 'b) 2.5 l = ___ ml',
          correctAnswer: '2500ml',
          correctAnswers: ['2500ml', '2500', '2500 ml', '2 500ml', '2 500 ml'],
          explanation: 'Multiply by 1 000: 2.5 × 1 000 = 2 500 ml.',
        },
        {
          label: 'c) 750 ml = ___ l',
          correctAnswer: '0.75l',
          correctAnswers: ['0.75l', '0.75', '0.75 l'],
          explanation: 'Divide by 1 000: 750 ÷ 1 000 = 0.75 l.',
        },
        {
          label: 'd) 0.25 l = ___ ml',
          correctAnswer: '250ml',
          correctAnswers: ['250ml', '250', '250 ml'],
          explanation: 'Multiply by 1 000: 0.25 × 1 000 = 250 ml.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'A recipe needs 1.5 l of milk, 750 ml of cream and 500 ml of water.',
      checkMode: 'auto',
      answer: 'a) 1 500 ml, 750 ml, 500 ml   b) 2 750 ml   c) 2.75 l',
      parts: [
        {
          label: 'a) Convert 1.5 l to ml.',
          correctAnswer: '1500ml',
          correctAnswers: ['1500ml', '1500', '1500 ml', '1 500ml', '1 500 ml'],
          explanation: 'Multiply by 1 000: 1.5 × 1 000 = 1 500 ml. The cream (750 ml) and water (500 ml) are already in ml.',
        },
        {
          label: 'b) What is the total volume in ml?',
          correctAnswer: '2750ml',
          correctAnswers: ['2750ml', '2750', '2750 ml', '2 750ml', '2 750 ml'],
          explanation: 'Add all three: 1 500 + 750 + 500 = 2 750 ml.',
        },
        {
          label: 'c) Convert the total to litres.',
          correctAnswer: '2.75l',
          correctAnswers: ['2.75l', '2.75', '2.75 l'],
          explanation: 'Divide by 1 000: 2 750 ÷ 1 000 = 2.75 l.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'A recipe needs 1.5 l of milk, 750 ml of cream and 500 ml of water.',
      checkMode: 'self',
      answer: 'Yes. 2.75 l is less than 3 l, so the pot is big enough to hold all the liquid.',
      parts: [
        {
          label: 'd) A pot has a capacity of 3 l. Is it big enough to hold all the liquid? Explain.',
          correctAnswer: '',
          explanation: 'Yes. The total volume is 2.75 l and the pot holds 3 l. Since 2.75 l < 3 l, the pot is big enough.',
        },
      ],
    },

    // ── SECTION 4 — Volume Using Unit Cubes ──────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'A box is 2 cubes long, 2 cubes wide and 2 cubes tall. How many unit cubes fit inside it?',
      checkMode: 'auto',
      answer: '8 cm³',
      correctAnswer: '8cm³',
      correctAnswers: ['8cm³', '8cm3', '8', '8cubes', '8 cubes', '8 cm³', '8 cm3'],
      explanation: 'Multiply: 2 × 2 × 2 = 8. Each unit cube is 1 cm³, so the volume is 8 cm³.',
    },

    {
      difficulty: 'Medium',
      question: 'Calculate the volume of each shape made from unit cubes.',
      checkMode: 'auto',
      answer: 'a) 24 cm³   b) 30 cm³',
      parts: [
        {
          label: 'a) 4 cubes long, 3 cubes wide, 2 cubes tall',
          correctAnswer: '24cm³',
          correctAnswers: ['24cm³', '24cm3', '24', '24 cm³', '24 cm3'],
          explanation: 'Multiply length × width × height: 4 × 3 × 2 = 24 cm³.',
        },
        {
          label: 'b) 5 cubes long, 2 cubes wide, 3 cubes tall',
          correctAnswer: '30cm³',
          correctAnswers: ['30cm³', '30cm3', '30', '30 cm³', '30 cm3'],
          explanation: 'Multiply length × width × height: 5 × 2 × 3 = 30 cm³.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'A box has a volume of 24 cm³. It is 4 cubes long and 3 cubes wide.',
      checkMode: 'auto',
      answer: 'a) 2   b) 36 cm³   c) 12 cubes',
      parts: [
        {
          label: 'a) How many cubes tall is the box?',
          correctAnswer: '2',
          correctAnswers: ['2', '2cubes', '2 cubes'],
          explanation: 'Volume = length × width × height. So height = volume ÷ (length × width) = 24 ÷ (4 × 3) = 24 ÷ 12 = 2 cubes.',
        },
        {
          label: 'b) If you add another layer of cubes on top, what is the new volume?',
          correctAnswer: '36cm³',
          correctAnswers: ['36cm³', '36cm3', '36', '36 cm³', '36 cm3'],
          explanation: 'The new height is 2 + 1 = 3 cubes. New volume = 4 × 3 × 3 = 36 cm³.',
        },
        {
          label: 'c) How many unit cubes would you need to add to make the new layer?',
          correctAnswer: '12',
          correctAnswers: ['12', '12cubes', '12 cubes'],
          explanation: 'The new layer covers the full base: 4 × 3 = 12 unit cubes.',
        },
      ],
    },

  ],
  scoreMessages: [
    { minScore: 30, message: 'Perfect score! You have mastered Capacity and Volume.' },
    { minScore: 23, message: 'Excellent work! Review the questions you got wrong and you will have this mastered.' },
    { minScore: 15, message: 'Good effort! Go back and read through the sections you struggled with.' },
    { minScore: 0,  message: 'Keep going! Read through the study guide again carefully and then retry.' },
  ],
}
