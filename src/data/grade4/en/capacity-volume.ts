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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
      diagramPlaceholder:
        'A 3D rectangular box made of unit cubes showing 3 cubes long 2 cubes wide and 2 cubes tall with each cube labelled 1cm cubed',
      videoPlaceholder:
        'Short video showing how to calculate the volume of a 3D shape by counting unit cubes and using length times width times height',
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — FOUNDATIONAL UNIT CONVERSIONS (ml ↔ l) (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: Millilitres and Litres',
      questions: [
        { difficulty: 'Easy', question: 'Convert 1 000 ml to litres.', answer: '1 l', checkMode: 'auto', correctAnswer: '1l', correctAnswers: ['1l', '1', '1 l'], explanation: 'Divide by 1 000: 1 000 ÷ 1 000 = 1 l.' },
        { difficulty: 'Easy', question: 'Convert 2 000 ml to litres.', answer: '2 l', checkMode: 'auto', correctAnswer: '2l', correctAnswers: ['2l', '2', '2 l'], explanation: 'Divide by 1 000: 2 000 ÷ 1 000 = 2 l.' },
        { difficulty: 'Easy', question: 'Convert 3 000 ml to litres.', answer: '3 l', checkMode: 'auto', correctAnswer: '3l', correctAnswers: ['3l', '3', '3 l'], explanation: 'Divide by 1 000: 3 000 ÷ 1 000 = 3 l.' },
        { difficulty: 'Easy', question: 'Convert 4 000 ml to litres.', answer: '4 l', checkMode: 'auto', correctAnswer: '4l', correctAnswers: ['4l', '4', '4 l'], explanation: 'Divide by 1 000: 4 000 ÷ 1 000 = 4 l.' },
        { difficulty: 'Easy', question: 'Convert 5 000 ml to litres.', answer: '5 l', checkMode: 'auto', correctAnswer: '5l', correctAnswers: ['5l', '5', '5 l'], explanation: 'Divide by 1 000: 5 000 ÷ 1 000 = 5 l.' },
        { difficulty: 'Easy', question: 'Convert 500 ml to litres.', answer: '0.5 l', checkMode: 'auto', correctAnswer: '0.5l', correctAnswers: ['0.5l', '0.5', '0.5 l'], explanation: 'Divide by 1 000: 500 ÷ 1 000 = 0.5 l.' },
        { difficulty: 'Easy', question: 'Convert 250 ml to litres.', answer: '0.25 l', checkMode: 'auto', correctAnswer: '0.25l', correctAnswers: ['0.25l', '0.25', '0.25 l'], explanation: 'Divide by 1 000: 250 ÷ 1 000 = 0.25 l.' },
        { difficulty: 'Easy', question: 'Convert 750 ml to litres.', answer: '0.75 l', checkMode: 'auto', correctAnswer: '0.75l', correctAnswers: ['0.75l', '0.75', '0.75 l'], explanation: 'Divide by 1 000: 750 ÷ 1 000 = 0.75 l.' },
        { difficulty: 'Medium', question: 'Convert 1 500 ml to litres.', answer: '1.5 l', checkMode: 'auto', correctAnswer: '1.5l', correctAnswers: ['1.5l', '1.5', '1.5 l'], explanation: 'Divide by 1 000: 1 500 ÷ 1 000 = 1.5 l.' },
        { difficulty: 'Medium', question: 'Convert 2 500 ml to litres.', answer: '2.5 l', checkMode: 'auto', correctAnswer: '2.5l', correctAnswers: ['2.5l', '2.5', '2.5 l'], explanation: 'Divide by 1 000: 2 500 ÷ 1 000 = 2.5 l.' },
        { difficulty: 'Medium', question: 'Convert 6 000 ml to litres.', answer: '6 l', checkMode: 'auto', correctAnswer: '6l', correctAnswers: ['6l', '6', '6 l'], explanation: 'Divide by 1 000: 6 000 ÷ 1 000 = 6 l.' },
        { difficulty: 'Medium', question: 'Convert 7 500 ml to litres.', answer: '7.5 l', checkMode: 'auto', correctAnswer: '7.5l', correctAnswers: ['7.5l', '7.5', '7.5 l'], explanation: 'Divide by 1 000: 7 500 ÷ 1 000 = 7.5 l.' },
        { difficulty: 'Easy', question: 'Convert 1 l to millilitres.', answer: '1 000 ml', checkMode: 'auto', correctAnswer: '1000ml', correctAnswers: ['1000ml', '1000', '1000 ml', '1 000ml', '1 000 ml'], explanation: 'Multiply by 1 000: 1 × 1 000 = 1 000 ml.' },
        { difficulty: 'Easy', question: 'Convert 2 l to millilitres.', answer: '2 000 ml', checkMode: 'auto', correctAnswer: '2000ml', correctAnswers: ['2000ml', '2000', '2000 ml', '2 000ml', '2 000 ml'], explanation: 'Multiply by 1 000: 2 × 1 000 = 2 000 ml.' },
        { difficulty: 'Easy', question: 'Convert 3 l to millilitres.', answer: '3 000 ml', checkMode: 'auto', correctAnswer: '3000ml', correctAnswers: ['3000ml', '3000', '3000 ml', '3 000ml', '3 000 ml'], explanation: 'Multiply by 1 000: 3 × 1 000 = 3 000 ml.' },
        { difficulty: 'Medium', question: 'Convert 0.5 l to millilitres.', answer: '500 ml', checkMode: 'auto', correctAnswer: '500ml', correctAnswers: ['500ml', '500', '500 ml'], explanation: 'Multiply by 1 000: 0.5 × 1 000 = 500 ml.' },
        { difficulty: 'Medium', question: 'Convert 1.5 l to millilitres.', answer: '1 500 ml', checkMode: 'auto', correctAnswer: '1500ml', correctAnswers: ['1500ml', '1500', '1500 ml', '1 500ml', '1 500 ml'], explanation: 'Multiply by 1 000: 1.5 × 1 000 = 1 500 ml.' },
        { difficulty: 'Medium', question: 'Convert 2.5 l to millilitres.', answer: '2 500 ml', checkMode: 'auto', correctAnswer: '2500ml', correctAnswers: ['2500ml', '2500', '2500 ml', '2 500ml', '2 500 ml'], explanation: 'Multiply by 1 000: 2.5 × 1 000 = 2 500 ml.' },
        { difficulty: 'Medium', question: 'Convert 0.25 l to millilitres.', answer: '250 ml', checkMode: 'auto', correctAnswer: '250ml', correctAnswers: ['250ml', '250', '250 ml'], explanation: 'Multiply by 1 000: 0.25 × 1 000 = 250 ml.' },
        { difficulty: 'Medium', question: 'Convert 0.75 l to millilitres.', answer: '750 ml', checkMode: 'auto', correctAnswer: '750ml', correctAnswers: ['750ml', '750', '750 ml'], explanation: 'Multiply by 1 000: 0.75 × 1 000 = 750 ml.' },
        { difficulty: 'Medium', question: 'Convert 4.5 l to millilitres.', answer: '4 500 ml', checkMode: 'auto', correctAnswer: '4500ml', correctAnswers: ['4500ml', '4500', '4500 ml', '4 500ml', '4 500 ml'], explanation: 'Multiply by 1 000: 4.5 × 1 000 = 4 500 ml.' },
        { difficulty: 'Medium', question: 'Convert 6 l to millilitres.', answer: '6 000 ml', checkMode: 'auto', correctAnswer: '6000ml', correctAnswers: ['6000ml', '6000', '6000 ml', '6 000ml', '6 000 ml'], explanation: 'Multiply by 1 000: 6 × 1 000 = 6 000 ml.' },
        { difficulty: 'Hard', question: 'Convert 3.25 l to millilitres.', answer: '3 250 ml', checkMode: 'auto', correctAnswer: '3250ml', correctAnswers: ['3250ml', '3250', '3250 ml', '3 250ml', '3 250 ml'], explanation: 'Multiply by 1 000: 3.25 × 1 000 = 3 250 ml.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure a spoonful of cough syrup — millilitres or litres?', answer: 'Millilitres (ml)', checkMode: 'auto', correctAnswer: 'ml', correctAnswers: ['ml', 'millilitres', 'millilitre', 'milliliters', 'milliliter'], explanation: 'A spoonful is a very small amount of liquid, so millilitres (ml) are used.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the water in a bathtub — millilitres or litres?', answer: 'Litres (l)', checkMode: 'auto', correctAnswer: 'l', correctAnswers: ['l', 'litres', 'litre', 'liters', 'liter'], explanation: 'A bathtub holds a large amount of water, so litres (l) are used.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Perfect score! You have mastered converting between millilitres and litres.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the conversion rules and try again.' },
        { minScore: 0, message: 'Keep going — read through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — MULTI-STEP CONVERSIONS, COMPARING AND READING CONTAINERS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Comparing and Reading Containers',
      questions: [
        { difficulty: 'Easy', question: 'A measuring jug has markings at 0, 500 ml and 1 000 ml. The liquid is exactly at the 500 ml mark. What is the volume?', answer: '500 ml', checkMode: 'auto', correctAnswer: '500ml', correctAnswers: ['500ml', '500', '500 ml'], explanation: 'The liquid is exactly on the 500 ml marking, so the volume is 500 ml.' },
        { difficulty: 'Medium', question: 'A jug goes from 0 to 1 000 ml with 5 equal intervals between each 200 ml mark. What is the value of each small interval?', answer: '40 ml', checkMode: 'auto', correctAnswer: '40ml', correctAnswers: ['40ml', '40', '40 ml'], explanation: 'Divide the gap between marked values by the number of intervals: 200 ÷ 5 = 40 ml.' },
        { difficulty: 'Medium', question: 'Using the jug above (intervals of 40 ml), what is the volume if the liquid is at the third interval after 400 ml?', answer: '520 ml', checkMode: 'auto', correctAnswer: '520ml', correctAnswers: ['520ml', '520', '520 ml'], explanation: 'Start at 400 ml and count 3 intervals of 40 ml: 400 + (3 × 40) = 400 + 120 = 520 ml.' },
        { difficulty: 'Medium', question: 'A jug has markings at 600 ml and 800 ml. The liquid level is exactly halfway between them. What is the volume?', answer: '700 ml', checkMode: 'auto', correctAnswer: '700ml', correctAnswers: ['700ml', '700', '700 ml'], explanation: 'The gap between 600 and 800 is 200 ml. Halfway = 200 ÷ 2 = 100 ml past 600 ml. 600 + 100 = 700 ml.' },
        { difficulty: 'Medium', question: 'A jug goes from 0 to 2 000 ml with 5 equal intervals between each 500 ml mark. What is the value of each small interval?', answer: '100 ml', checkMode: 'auto', correctAnswer: '100ml', correctAnswers: ['100ml', '100', '100 ml'], explanation: 'Divide the gap between marked values by the number of intervals: 500 ÷ 5 = 100 ml.' },
        { difficulty: 'Medium', question: 'Using the jug above (intervals of 100 ml), what is the volume if the liquid is at the second interval after 1 000 ml?', answer: '1 200 ml', checkMode: 'auto', correctAnswer: '1200ml', correctAnswers: ['1200ml', '1200', '1200 ml', '1 200ml', '1 200 ml'], explanation: 'Start at 1 000 ml and count 2 intervals of 100 ml: 1 000 + (2 × 100) = 1 000 + 200 = 1 200 ml.' },
        { difficulty: 'Medium', question: 'A jug goes from 0 to 1 000 ml with 5 equal intervals between each 250 ml mark. What is the value of each small interval?', answer: '50 ml', checkMode: 'auto', correctAnswer: '50ml', correctAnswers: ['50ml', '50', '50 ml'], explanation: 'Divide the gap between marked values by the number of intervals: 250 ÷ 5 = 50 ml.' },
        { difficulty: 'Hard', question: 'Using the jug above (intervals of 50 ml), what is the volume if the liquid is at the third interval after 250 ml?', answer: '400 ml', checkMode: 'auto', correctAnswer: '400ml', correctAnswers: ['400ml', '400', '400 ml'], explanation: 'Start at 250 ml and count 3 intervals of 50 ml: 250 + (3 × 50) = 250 + 150 = 400 ml.' },
        { difficulty: 'Medium', question: 'Which is bigger: 1.5 l or 1 400 ml?', answer: '1.5 l', checkMode: 'auto', correctAnswer: '1.5l', correctAnswers: ['1.5l', '1.5 l', '1500ml', '1 500ml', '1500 ml', '1 500 ml'], explanation: 'Convert 1.5 l to ml: 1.5 × 1 000 = 1 500 ml. Since 1 500 ml > 1 400 ml, 1.5 l is bigger.' },
        { difficulty: 'Medium', question: 'Which is smaller: 0.8 l or 750 ml?', answer: '750 ml', checkMode: 'auto', correctAnswer: '750ml', correctAnswers: ['750ml', '750 ml'], explanation: 'Convert 0.8 l to ml: 0.8 × 1 000 = 800 ml. Since 750 ml < 800 ml, 750 ml is smaller.' },
        { difficulty: 'Hard', question: 'Put these in order from smallest to largest: 750 ml, 0.8 l, 700 ml.', answer: '700 ml, 750 ml, 0.8 l', checkMode: 'auto', correctAnswer: '700ml,750ml,0.8l', correctAnswers: ['700ml,750ml,0.8l', '700 ml, 750 ml, 0.8 l', '700ml, 750ml, 0.8l'], explanation: 'Convert all to ml: 750 ml, 800 ml (0.8 l), 700 ml. Smallest to largest: 700 ml, 750 ml, 0.8 l.' },
        { difficulty: 'Medium', question: 'A bottle has a capacity of 2 l. It currently contains 1 300 ml of juice. How much more juice, in ml, can fit in the bottle?', answer: '700 ml', checkMode: 'auto', correctAnswer: '700ml', correctAnswers: ['700ml', '700', '700 ml'], explanation: 'Convert the capacity to ml: 2 × 1 000 = 2 000 ml. Subtract: 2 000 ml − 1 300 ml = 700 ml.' },
        { difficulty: 'Medium', question: 'Using the bottle above, convert the remaining space (700 ml) to litres.', answer: '0.7 l', checkMode: 'auto', correctAnswer: '0.7l', correctAnswers: ['0.7l', '0.7', '0.7 l'], explanation: 'Divide by 1 000: 700 ÷ 1 000 = 0.7 l.' },
        { difficulty: 'Medium', question: 'Two identical bottles each hold 750 ml. What is their total volume in litres?', answer: '1.5 l', checkMode: 'auto', correctAnswer: '1.5l', correctAnswers: ['1.5l', '1.5', '1.5 l'], explanation: 'Add: 750 ml + 750 ml = 1 500 ml. Convert to litres: 1 500 ÷ 1 000 = 1.5 l.' },
        { difficulty: 'Hard', question: 'A container holds 3 l of juice and is poured equally into 6 cups. How much juice, in ml, does each cup get?', answer: '500 ml', checkMode: 'auto', correctAnswer: '500ml', correctAnswers: ['500ml', '500', '500 ml'], explanation: 'Convert to ml: 3 × 1 000 = 3 000 ml. Divide equally: 3 000 ÷ 6 = 500 ml per cup.' },
        { difficulty: 'Hard', question: '5 bottles each hold 400 ml. What is their total volume in litres?', answer: '2 l', checkMode: 'auto', correctAnswer: '2l', correctAnswers: ['2l', '2', '2 l'], explanation: 'Multiply: 5 × 400 = 2 000 ml. Convert to litres: 2 000 ÷ 1 000 = 2 l.' },
        { difficulty: 'Hard', question: 'A jug contains 1.8 l of water. If 950 ml is poured out, how much water, in ml, is left?', answer: '850 ml', checkMode: 'auto', correctAnswer: '850ml', correctAnswers: ['850ml', '850', '850 ml'], explanation: 'Convert 1.8 l to ml: 1.8 × 1 000 = 1 800 ml. Subtract: 1 800 ml − 950 ml = 850 ml.' },
        { difficulty: 'Medium', question: 'A container has a capacity of 1.5 l and is exactly half full. How much liquid, in ml, is inside it?', answer: '750 ml', checkMode: 'auto', correctAnswer: '750ml', correctAnswers: ['750ml', '750', '750 ml'], explanation: 'Convert to ml: 1.5 × 1 000 = 1 500 ml. Half of 1 500 ml is 750 ml.' },
        { difficulty: 'Medium', question: '4 glasses each hold 200 ml. What is their total volume in litres?', answer: '0.8 l', checkMode: 'auto', correctAnswer: '0.8l', correctAnswers: ['0.8l', '0.8', '0.8 l'], explanation: 'Multiply: 4 × 200 = 800 ml. Convert to litres: 800 ÷ 1 000 = 0.8 l.' },
        { difficulty: 'Medium', question: 'A measuring cylinder has a capacity of 500 ml with markings every 100 ml, and 4 small intervals between each mark. What is the value of each small interval?', answer: '25 ml', checkMode: 'auto', correctAnswer: '25ml', correctAnswers: ['25ml', '25', '25 ml'], explanation: 'Divide the gap between marked values by the number of intervals: 100 ÷ 4 = 25 ml.' },
        { difficulty: 'Hard', question: 'Using the cylinder above (intervals of 25 ml), the liquid is at the second interval after 300 ml. How much more liquid, in ml, is needed to fill it to its 500 ml capacity?', answer: '150 ml', checkMode: 'auto', correctAnswer: '150ml', correctAnswers: ['150ml', '150', '150 ml'], explanation: 'The liquid level is 300 + (2 × 25) = 350 ml. To reach 500 ml capacity: 500 − 350 = 150 ml.' },
        { difficulty: 'Medium', question: 'Convert 1 200 ml to litres.', answer: '1.2 l', checkMode: 'auto', correctAnswer: '1.2l', correctAnswers: ['1.2l', '1.2', '1.2 l'], explanation: 'Divide by 1 000: 1 200 ÷ 1 000 = 1.2 l.' },
        { difficulty: 'Medium', question: 'Convert 3.4 l to millilitres.', answer: '3 400 ml', checkMode: 'auto', correctAnswer: '3400ml', correctAnswers: ['3400ml', '3400', '3400 ml', '3 400ml', '3 400 ml'], explanation: 'Multiply by 1 000: 3.4 × 1 000 = 3 400 ml.' },
        { difficulty: 'Medium', question: 'Convert 1 800 ml to litres.', answer: '1.8 l', checkMode: 'auto', correctAnswer: '1.8l', correctAnswers: ['1.8l', '1.8', '1.8 l'], explanation: 'Divide by 1 000: 1 800 ÷ 1 000 = 1.8 l.' },
        { difficulty: 'Medium', question: 'Convert 4 200 ml to litres.', answer: '4.2 l', checkMode: 'auto', correctAnswer: '4.2l', correctAnswers: ['4.2l', '4.2', '4.2 l'], explanation: 'Divide by 1 000: 4 200 ÷ 1 000 = 4.2 l.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You can confidently read measuring containers and compare capacities.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples on reading measuring containers.' },
        { minScore: 0, message: 'Keep going — read through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — ESTIMATING CAPACITY, UNIT CUBES AND WORD PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Estimating and Unit Cubes',
      questions: [
        { difficulty: 'Easy', question: 'Estimate a realistic capacity for a teaspoon: 5 ml or 5 l?', answer: '5 ml', checkMode: 'auto', correctAnswer: '5ml', correctAnswers: ['5ml', '5 ml'], explanation: 'A teaspoon holds a tiny amount of liquid — about 5 ml, not 5 l.' },
        { difficulty: 'Easy', question: 'Estimate a realistic capacity for a standard cup: 250 ml or 250 l?', answer: '250 ml', checkMode: 'auto', correctAnswer: '250ml', correctAnswers: ['250ml', '250 ml'], explanation: 'A cup holds about a quarter of a litre — 250 ml, not 250 l.' },
        { difficulty: 'Easy', question: 'Estimate a realistic capacity for a large cooking pot: 5 l or 5 ml?', answer: '5 l', checkMode: 'auto', correctAnswer: '5l', correctAnswers: ['5l', '5 l'], explanation: 'A large pot used for cooking soup holds a large amount — about 5 l, not 5 ml.' },
        { difficulty: 'Easy', question: 'Estimate a realistic capacity for a standard water bottle: 500 ml or 500 l?', answer: '500 ml', checkMode: 'auto', correctAnswer: '500ml', correctAnswers: ['500ml', '500 ml'], explanation: 'A standard water bottle holds about 500 ml, not 500 l.' },
        { difficulty: 'Medium', question: 'Estimate a realistic capacity for a bathtub: 150 l or 150 ml?', answer: '150 l', checkMode: 'auto', correctAnswer: '150l', correctAnswers: ['150l', '150 l'], explanation: 'A bathtub holds a very large amount of water — about 150 l, not 150 ml.' },
        { difficulty: 'Medium', question: 'Estimate a realistic capacity for a bucket: 10 l or 10 ml?', answer: '10 l', checkMode: 'auto', correctAnswer: '10l', correctAnswers: ['10l', '10 l'], explanation: 'A bucket holds about 10 l of water — far more than 10 ml.' },
        { difficulty: 'Medium', question: 'Estimate a realistic capacity for an eye-dropper: 1 ml or 1 l?', answer: '1 ml', checkMode: 'auto', correctAnswer: '1ml', correctAnswers: ['1ml', '1 ml'], explanation: 'An eye-dropper releases a tiny amount of liquid — about 1 ml, not 1 l.' },
        { difficulty: 'Medium', question: 'Estimate a realistic capacity for a small fish tank: 20 l or 20 ml?', answer: '20 l', checkMode: 'auto', correctAnswer: '20l', correctAnswers: ['20l', '20 l'], explanation: 'A small fish tank holds a large amount of water — about 20 l, not 20 ml.' },
        { difficulty: 'Easy', question: 'A box is 2 cubes long, 2 cubes wide and 2 cubes tall. How many unit cubes fit inside it?', answer: '8 cm³', checkMode: 'auto', correctAnswer: '8cm³', correctAnswers: ['8cm³', '8cm3', '8', '8cubes', '8 cubes', '8 cm³', '8 cm3'], explanation: 'Multiply: 2 × 2 × 2 = 8. Each unit cube is 1 cm³, so the volume is 8 cm³.' },
        { difficulty: 'Easy', question: 'A box is 3 cubes long, 2 cubes wide and 2 cubes tall. How many unit cubes fit inside it?', answer: '12 cm³', checkMode: 'auto', correctAnswer: '12cm³', correctAnswers: ['12cm³', '12cm3', '12', '12cubes', '12 cubes', '12 cm³', '12 cm3'], explanation: 'Multiply: 3 × 2 × 2 = 12. Each unit cube is 1 cm³, so the volume is 12 cm³.' },
        { difficulty: 'Medium', question: 'A box is 4 cubes long, 3 cubes wide and 2 cubes tall. What is its volume?', answer: '24 cm³', checkMode: 'auto', correctAnswer: '24cm³', correctAnswers: ['24cm³', '24cm3', '24', '24 cm³', '24 cm3'], explanation: 'Multiply length × width × height: 4 × 3 × 2 = 24 cm³.' },
        { difficulty: 'Medium', question: 'A box is 5 cubes long, 2 cubes wide and 3 cubes tall. What is its volume?', answer: '30 cm³', checkMode: 'auto', correctAnswer: '30cm³', correctAnswers: ['30cm³', '30cm3', '30', '30 cm³', '30 cm3'], explanation: 'Multiply length × width × height: 5 × 2 × 3 = 30 cm³.' },
        { difficulty: 'Medium', question: 'A box is 3 cubes long, 3 cubes wide and 3 cubes tall. What is its volume?', answer: '27 cm³', checkMode: 'auto', correctAnswer: '27cm³', correctAnswers: ['27cm³', '27cm3', '27', '27 cm³', '27 cm3'], explanation: 'Multiply length × width × height: 3 × 3 × 3 = 27 cm³.' },
        { difficulty: 'Medium', question: 'A box is 4 cubes long, 2 cubes wide and 2 cubes tall. What is its volume?', answer: '16 cm³', checkMode: 'auto', correctAnswer: '16cm³', correctAnswers: ['16cm³', '16cm3', '16', '16 cm³', '16 cm3'], explanation: 'Multiply length × width × height: 4 × 2 × 2 = 16 cm³.' },
        { difficulty: 'Medium', question: 'A box is 4 cubes long, 4 cubes wide and 2 cubes tall. What is its volume?', answer: '32 cm³', checkMode: 'auto', correctAnswer: '32cm³', correctAnswers: ['32cm³', '32cm3', '32', '32 cm³', '32 cm3'], explanation: 'Multiply length × width × height: 4 × 4 × 2 = 32 cm³.' },
        { difficulty: 'Medium', question: 'A shape is made of unit cubes. Counting all visible and hidden cubes gives 18 cubes. What is the volume?', answer: '18 cm³', checkMode: 'auto', correctAnswer: '18cm³', correctAnswers: ['18cm³', '18cm3', '18', '18 cm³', '18 cm3'], explanation: 'Each unit cube has a volume of 1 cm³. Counting all 18 cubes gives a total volume of 18 cm³.' },
        { difficulty: 'Hard', question: 'A box has a volume of 24 cm³. It is 4 cubes long and 3 cubes wide. How many cubes tall is the box?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2cubes', '2 cubes'], explanation: 'Volume = length × width × height. Height = 24 ÷ (4 × 3) = 24 ÷ 12 = 2 cubes.' },
        { difficulty: 'Hard', question: 'A box has a volume of 30 cm³. It is 5 cubes long and 3 cubes wide. How many cubes tall is the box?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2cubes', '2 cubes'], explanation: 'Volume = length × width × height. Height = 30 ÷ (5 × 3) = 30 ÷ 15 = 2 cubes.' },
        { difficulty: 'Medium', question: '4 juice boxes each hold 250 ml. What is their total volume in litres?', answer: '1 l', checkMode: 'auto', correctAnswer: '1l', correctAnswers: ['1l', '1', '1 l'], explanation: 'Multiply: 4 × 250 = 1 000 ml. Convert to litres: 1 000 ÷ 1 000 = 1 l.' },
        { difficulty: 'Medium', question: '6 cups each hold 150 ml. What is their total volume in ml?', answer: '900 ml', checkMode: 'auto', correctAnswer: '900ml', correctAnswers: ['900ml', '900', '900 ml'], explanation: 'Multiply: 6 × 150 = 900 ml.' },
        { difficulty: 'Hard', question: '3 jugs each hold 1.2 l of water. What is their total volume in millilitres?', answer: '3 600 ml', checkMode: 'auto', correctAnswer: '3600ml', correctAnswers: ['3600ml', '3600', '3600 ml', '3 600ml', '3 600 ml'], explanation: 'Convert one jug to ml: 1.2 × 1 000 = 1 200 ml. Multiply by 3: 1 200 × 3 = 3 600 ml.' },
        { difficulty: 'Hard', question: 'A tank has a capacity of 5 l. If 3 200 ml is used, how much water, in litres, is left in the tank?', answer: '1.8 l', checkMode: 'auto', correctAnswer: '1.8l', correctAnswers: ['1.8l', '1.8', '1.8 l'], explanation: 'Convert the capacity to ml: 5 × 1 000 = 5 000 ml. Subtract: 5 000 − 3 200 = 1 800 ml. Convert to litres: 1 800 ÷ 1 000 = 1.8 l.' },
        { difficulty: 'Hard', question: 'A kettle holds 1.7 l of water. Convert this to millilitres.', answer: '1 700 ml', checkMode: 'auto', correctAnswer: '1700ml', correctAnswers: ['1700ml', '1700', '1700 ml', '1 700ml', '1 700 ml'], explanation: 'Multiply by 1 000: 1.7 × 1 000 = 1 700 ml.' },
        { difficulty: 'Hard', question: 'An aquarium has a capacity of 12 l. If 4 500 ml of water is already inside it, how much more water, in litres, is needed to fill it completely?', answer: '7.5 l', checkMode: 'auto', correctAnswer: '7.5l', correctAnswers: ['7.5l', '7.5', '7.5 l'], explanation: 'Convert the capacity to ml: 12 × 1 000 = 12 000 ml. Subtract: 12 000 − 4 500 = 7 500 ml. Convert to litres: 7 500 ÷ 1 000 = 7.5 l.' },
        { difficulty: 'Medium', question: 'A patient must take 3 doses of medicine, each 5 ml. What is the total amount of medicine, in ml, taken?', answer: '15 ml', checkMode: 'auto', correctAnswer: '15ml', correctAnswers: ['15ml', '15', '15 ml'], explanation: 'Multiply: 3 × 5 = 15 ml.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You can estimate capacities and calculate volume with unit cubes confidently.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples on unit cubes and real-life capacities.' },
        { minScore: 0, message: 'Keep going — read through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP AND COMBINED PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Multi-Step and Combined Problems',
      questions: [
        { difficulty: 'Hard', question: 'A recipe needs 1.5 l of milk, 750 ml of cream and 500 ml of water. What is the total volume in millilitres?', answer: '2 750 ml', checkMode: 'auto', correctAnswer: '2750ml', correctAnswers: ['2750ml', '2750', '2750 ml', '2 750ml', '2 750 ml'], explanation: 'Convert 1.5 l to ml: 1.5 × 1 000 = 1 500 ml. Add all three: 1 500 + 750 + 500 = 2 750 ml.' },
        { difficulty: 'Hard', question: 'Using the recipe above, convert the total volume (2 750 ml) to litres.', answer: '2.75 l', checkMode: 'auto', correctAnswer: '2.75l', correctAnswers: ['2.75l', '2.75', '2.75 l'], explanation: 'Divide by 1 000: 2 750 ÷ 1 000 = 2.75 l.' },
        { difficulty: 'Hard', question: 'A pot has a capacity of 3 l. Is it big enough to hold the 2.75 l recipe from above? Explain your reasoning.', answer: 'Yes. 2.75 l is less than 3 l, so the pot is big enough to hold all the liquid.', checkMode: 'self' },
        { difficulty: 'Hard', question: '3 bottles each hold 500 ml, and 1 bottle holds 250 ml. What is the total volume in litres?', answer: '1.75 l', checkMode: 'auto', correctAnswer: '1.75l', correctAnswers: ['1.75l', '1.75', '1.75 l'], explanation: 'Add: (3 × 500) + 250 = 1 500 + 250 = 1 750 ml. Convert to litres: 1 750 ÷ 1 000 = 1.75 l.' },
        { difficulty: 'Hard', question: 'Two identical boxes are each made of unit cubes: 3 cubes long, 2 cubes wide and 2 cubes tall. What is their combined volume?', answer: '24 cm³', checkMode: 'auto', correctAnswer: '24cm³', correctAnswers: ['24cm³', '24cm3', '24', '24 cm³', '24 cm3'], explanation: 'One box: 3 × 2 × 2 = 12 cm³. Two boxes: 12 × 2 = 24 cm³.' },
        { difficulty: 'Hard', question: 'A tank has a capacity of 10 l. Water is added at a rate of 500 ml per minute. How many minutes will it take to fill the tank completely?', answer: '20 minutes', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 minutes', '20minutes', '20 min'], explanation: 'Convert the capacity to ml: 10 × 1 000 = 10 000 ml. Divide by the rate: 10 000 ÷ 500 = 20 minutes.' },
        { difficulty: 'Hard', question: '4 jugs of 1.5 l each are poured into a tank with a capacity of 6 l. How much space, in ml, is left in the tank?', answer: '0 ml', checkMode: 'auto', correctAnswer: '0ml', correctAnswers: ['0ml', '0', '0 ml'], explanation: 'Total poured: 4 × 1.5 = 6 l = 6 000 ml. The tank capacity is also 6 000 ml, so 6 000 − 6 000 = 0 ml is left — the tank is exactly full.' },
        { difficulty: 'Medium', question: 'Four measurements are 250 ml, 500 ml, 750 ml and 1 000 ml. What is their total in millilitres?', answer: '2 500 ml', checkMode: 'auto', correctAnswer: '2500ml', correctAnswers: ['2500ml', '2500', '2500 ml', '2 500ml', '2 500 ml'], explanation: 'Add: 250 + 500 + 750 + 1 000 = 2 500 ml.' },
        { difficulty: 'Medium', question: 'Using the measurements above, convert the total (2 500 ml) to litres.', answer: '2.5 l', checkMode: 'auto', correctAnswer: '2.5l', correctAnswers: ['2.5l', '2.5', '2.5 l'], explanation: 'Divide by 1 000: 2 500 ÷ 1 000 = 2.5 l.' },
        { difficulty: 'Hard', question: 'A box made of unit cubes is 5 cubes long, 4 cubes wide and 3 cubes tall. What is its volume?', answer: '60 cm³', checkMode: 'auto', correctAnswer: '60cm³', correctAnswers: ['60cm³', '60cm3', '60', '60 cm³', '60 cm3'], explanation: 'Multiply length × width × height: 5 × 4 × 3 = 60 cm³.' },
        { difficulty: 'Hard', question: 'A recipe needs 1.25 l of stock and 375 ml of wine. What is the total volume in millilitres?', answer: '1 625 ml', checkMode: 'auto', correctAnswer: '1625ml', correctAnswers: ['1625ml', '1625', '1625 ml', '1 625ml', '1 625 ml'], explanation: 'Convert 1.25 l to ml: 1.25 × 1 000 = 1 250 ml. Add: 1 250 + 375 = 1 625 ml.' },
        { difficulty: 'Hard', question: 'A jug has a capacity of 2 l. Zanele pours in 850 ml, then another 650 ml. How much more, in ml, can the jug hold before it is full?', answer: '500 ml', checkMode: 'auto', correctAnswer: '500ml', correctAnswers: ['500ml', '500', '500 ml'], explanation: 'Convert the capacity to ml: 2 × 1 000 = 2 000 ml. Total poured in: 850 + 650 = 1 500 ml. Remaining space: 2 000 − 1 500 = 500 ml.' },
        { difficulty: 'Hard', question: 'A fish tank in the shape of a box is 6 cubes long, 3 cubes wide and 2 cubes tall (using unit cubes to model it). What is its volume?', answer: '36 cm³', checkMode: 'auto', correctAnswer: '36cm³', correctAnswers: ['36cm³', '36cm3', '36', '36 cm³', '36 cm3'], explanation: 'Multiply length × width × height: 6 × 3 × 2 = 36 cm³.' },
        { difficulty: 'Medium', question: 'Thabo says a standard cup holds about 25 ml. Lerato says it holds about 250 ml. Who is correct? Explain your reasoning.', answer: 'Lerato is correct. A standard cup holds about 250 ml. 25 ml is only about 5 teaspoons, which is far too small for a cup.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho has three containers: 1.2 l, 850 ml and 0.6 l. Order them from smallest to largest and explain how you worked it out.', answer: 'From smallest to largest: 0.6 l (600 ml), 850 ml, 1.2 l (1 200 ml). I converted every measurement to millilitres first so I could compare them fairly (1.2 l = 1 200 ml and 0.6 l = 600 ml), then ordered the ml values from smallest to largest.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A water dispenser fills bottles at a rate of 250 ml every 10 seconds. How many millilitres will it dispense in 1 minute (60 seconds)?', answer: '1 500 ml', checkMode: 'auto', correctAnswer: '1500ml', correctAnswers: ['1500ml', '1500', '1500 ml', '1 500ml', '1 500 ml'], explanation: 'In 60 seconds there are 60 ÷ 10 = 6 intervals of 10 seconds. Multiply: 6 × 250 = 1 500 ml.' },
        { difficulty: 'Hard', question: 'A large drum has a capacity of 20 l. It is filled using a 2 l bucket. How many full buckets are needed to fill the drum?', answer: '10 buckets', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 buckets', '10buckets'], explanation: 'Divide the capacity by the bucket size: 20 ÷ 2 = 10 buckets.' },
        { difficulty: 'Hard', question: '3 bottles of 1.5 l each are poured into a jug, and then an extra 250 ml is added. What is the total volume in millilitres?', answer: '4 750 ml', checkMode: 'auto', correctAnswer: '4750ml', correctAnswers: ['4750ml', '4750', '4750 ml', '4 750ml', '4 750 ml'], explanation: 'Convert the bottles to ml: 3 × 1.5 × 1 000 = 4 500 ml. Add the extra 250 ml: 4 500 + 250 = 4 750 ml.' },
        { difficulty: 'Hard', question: 'A tank holds 8 l of water. Half of the water is poured out. How much water, in ml, is poured out?', answer: '4 000 ml', checkMode: 'auto', correctAnswer: '4000ml', correctAnswers: ['4000ml', '4000', '4000 ml', '4 000ml', '4 000 ml'], explanation: 'Convert to ml: 8 × 1 000 = 8 000 ml. Half of 8 000 ml is 4 000 ml.' },
        { difficulty: 'Hard', question: 'Explain why we multiply by 1 000 when converting litres to millilitres, but divide by 1 000 when converting millilitres to litres.', answer: 'A litre is a much bigger unit than a millilitre — there are 1 000 millilitres in every litre. When we convert to a smaller unit (l to ml), the number of units needed becomes bigger, so we multiply. When we convert to a bigger unit (ml to l), fewer units are needed, so we divide.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A box made of unit cubes has a volume of 40 cm³. It is 5 cubes long and 4 cubes wide. How many cubes tall is it?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2cubes', '2 cubes'], explanation: 'Volume = length × width × height. Height = 40 ÷ (5 × 4) = 40 ÷ 20 = 2 cubes.' },
        { difficulty: 'Hard', question: 'A swimming pool is estimated to hold 40 000 l of water. Convert this to millilitres.', answer: '40 000 000 ml', checkMode: 'auto', correctAnswer: '40000000ml', correctAnswers: ['40000000ml', '40000000', '40000000 ml', '40 000 000ml', '40 000 000 ml'], explanation: 'Multiply by 1 000: 40 000 × 1 000 = 40 000 000 ml. This shows why litres, not millilitres, are used for very large volumes.' },
        { difficulty: 'Hard', question: 'A recipe for soup needs 2 l of stock, split equally into 4 bowls. How much stock, in ml, does each bowl get?', answer: '500 ml', checkMode: 'auto', correctAnswer: '500ml', correctAnswers: ['500ml', '500', '500 ml'], explanation: 'Convert to ml: 2 × 1 000 = 2 000 ml. Divide equally: 2 000 ÷ 4 = 500 ml per bowl.' },
        { difficulty: 'Hard', question: 'A tank contains 6.4 l of water. If 2 750 ml is removed, how much water, in litres, remains?', answer: '3.65 l', checkMode: 'auto', correctAnswer: '3.65l', correctAnswers: ['3.65l', '3.65', '3.65 l'], explanation: 'Convert 6.4 l to ml: 6.4 × 1 000 = 6 400 ml. Subtract: 6 400 − 2 750 = 3 650 ml. Convert to litres: 3 650 ÷ 1 000 = 3.65 l.' },
        { difficulty: 'Hard', question: 'Explain how you would find the volume of an irregular shape built from unit cubes if some cubes are hidden from view.', answer: 'I would carefully count every cube in each layer, including the hidden ones by working out how many must be underneath or behind the visible cubes based on the shape. Then I would add up the cubes in all layers. Since each unit cube has a volume of 1 cm³, the total number of cubes gives the total volume in cm³.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered multi-step Capacity and Volume problems.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the multi-step worked examples.' },
        { minScore: 0, message: 'Keep going — read through the study guide again and retry this set.' },
      ],
    },
  ],
}
