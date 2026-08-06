import type { TopicData } from './numbers-operations'

// Stacked numerator/denominator fraction notation instead of a plain "n/d"
// slash — renders as an actual fraction bar via the site's existing
// whitelisted-HTML pipeline.
const frac = (num: string, den: string) =>
  `<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 2px;line-height:1.15;font-size:0.95em;"><span style="border-bottom:1.5px solid currentColor;padding:0 3px;">${num}</span><span style="padding:0 3px;">${den}</span></span>`

export const topicData: TopicData = {
  title: 'Common Fractions',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS A FRACTION?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-fraction',
      title: 'What is a Fraction?',
      icon: '🍕',
      explanation: `<p style="margin-bottom:18px;">A <strong>fraction</strong> describes an <strong>equal part of a whole</strong>. When you cut something into equal pieces and take some of those pieces, you are working with fractions. The pieces <em>must</em> be equal — if they are different sizes, they are not fractions.</p>

<p style="margin-bottom:12px;font-weight:600;">Three real-life examples:</p>

<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:22px;">
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;">
    🍕 A pizza is cut into <strong>4 equal slices</strong>. You take <strong>1 slice</strong>. You have <span style="color:#1e40af;font-weight:700;">one quarter</span> of the pizza — written as <strong>1/4</strong>.
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;">
    🍫 A chocolate bar has <strong>8 equal pieces</strong>. You eat <strong>3 pieces</strong>. You have eaten <span style="color:#1e40af;font-weight:700;">three eighths</span> of the bar — written as <strong>3/8</strong>.
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;">
    🍊 An orange is split into <strong>6 equal segments</strong>. You give away <strong>2 segments</strong>. You gave away <span style="color:#1e40af;font-weight:700;">two sixths</span> of the orange — written as <strong>2/6</strong>.
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">The two parts of a fraction:</p>

<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:22px;">
  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:10px;">Numerator — top number</div>
    <div style="font-size:32px;font-weight:700;color:#1e40af;line-height:1;margin-bottom:8px;">3</div>
    <div style="font-size:14px;color:#374151;">How many equal parts <strong>you have</strong>. Shown in <span style="color:#1e40af;font-weight:700;">blue</span>.</div>
  </div>
  <div style="background:#fff1f2;border:1.5px solid #fecdd3;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#dc2626;margin-bottom:10px;">Denominator — bottom number</div>
    <div style="font-size:32px;font-weight:700;color:#dc2626;line-height:1;margin-bottom:8px;">8</div>
    <div style="font-size:14px;color:#374151;">How many equal parts the <strong>whole is cut into</strong>. Shown in <span style="color:#dc2626;font-weight:700;">red</span>.</div>
  </div>
</div>

<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:22px;text-align:center;">
  <div style="font-size:13px;color:#6b7280;margin-bottom:10px;">Read as "three eighths"</div>
  <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
    <span style="font-size:36px;font-weight:700;color:#1e40af;line-height:1.2;">3</span>
    <span style="display:block;width:32px;border-top:3px solid #374151;"></span>
    <span style="font-size:36px;font-weight:700;color:#dc2626;line-height:1.2;">8</span>
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Common fractions and their names:</p>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:8px;margin-bottom:8px;">
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:12px 8px;text-align:center;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
      <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">2</span>
    </div>
    <div style="font-size:12px;color:#374151;margin-top:6px;font-weight:600;">one half</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:12px 8px;text-align:center;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
      <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">3</span>
    </div>
    <div style="font-size:12px;color:#374151;margin-top:6px;font-weight:600;">one third</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:12px 8px;text-align:center;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
      <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">4</span>
    </div>
    <div style="font-size:12px;color:#374151;margin-top:6px;font-weight:600;">one quarter</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:12px 8px;text-align:center;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
      <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">5</span>
    </div>
    <div style="font-size:12px;color:#374151;margin-top:6px;font-weight:600;">one fifth</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:12px 8px;text-align:center;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
      <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">6</span>
    </div>
    <div style="font-size:12px;color:#374151;margin-top:6px;font-weight:600;">one sixth</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:12px 8px;text-align:center;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
      <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">8</span>
    </div>
    <div style="font-size:12px;color:#374151;margin-top:6px;font-weight:600;">one eighth</div>
  </div>
</div>`,

      videoPlaceholder: 'Short video explaining numerator and denominator using a pizza or chocolate bar example',
      diagramPlaceholder: 'Visual showing a circle divided into 8 equal parts with 3 parts shaded, labelled with numerator and denominator',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><path d="M 110 85 L 110 20 A 65 65 0 0 1 156 39 Z" fill="#93c5fd"/><path d="M 110 85 L 156 39 A 65 65 0 0 1 175 85 Z" fill="#93c5fd"/><path d="M 110 85 L 175 85 A 65 65 0 0 1 156 131 Z" fill="#93c5fd"/><circle cx="110" cy="85" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="85" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.5"/><line x1="110" y1="85" x2="156" y2="39" stroke="#0f1f3d" stroke-width="1.5"/><line x1="110" y1="85" x2="175" y2="85" stroke="#0f1f3d" stroke-width="1.5"/><line x1="110" y1="85" x2="156" y2="131" stroke="#0f1f3d" stroke-width="1.5"/><line x1="110" y1="85" x2="110" y2="150" stroke="#0f1f3d" stroke-width="1.5"/><line x1="110" y1="85" x2="64" y2="131" stroke="#0f1f3d" stroke-width="1.5"/><line x1="110" y1="85" x2="45" y2="85" stroke="#0f1f3d" stroke-width="1.5"/><line x1="110" y1="85" x2="64" y2="39" stroke="#0f1f3d" stroke-width="1.5"/><text x="110" y="165" font-weight="700" font-size="14" text-anchor="middle" fill="#2563eb">3/8 shaded</text></svg>',

      workedExamples: [
        {
          question: 'A chocolate bar is divided into 8 equal pieces. Thabo eats 3 pieces. What fraction did he eat?',
          answer: '3/8 — three eighths',
          steps: [
            `Find the <span style="color:#dc2626;font-weight:700;">denominator</span>: the bar is cut into <span style="color:#dc2626;font-weight:700;">8</span> equal pieces. <strong>8 is the denominator</strong> (bottom number).`,
            `Find the <span style="color:#1e40af;font-weight:700;">numerator</span>: Thabo eats <span style="color:#1e40af;font-weight:700;">3</span> pieces. <strong>3 is the numerator</strong> (top number).`,
            `Write the fraction:
<div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;margin:8px 12px 4px;">
  <span style="font-size:30px;font-weight:700;color:#1e40af;line-height:1.2;">3</span>
  <span style="display:block;width:28px;border-top:3px solid #374151;"></span>
  <span style="font-size:30px;font-weight:700;color:#dc2626;line-height:1.2;">8</span>
</div>
Thabo ate <span style="font-weight:700;">three eighths</span> of the chocolate bar.`,
          ],
        },
        {
          question: 'Write the fraction shown: a shape is divided into 6 equal parts and 4 are shaded.',
          answer: '4/6 — four sixths',
          steps: [
            `Find the <span style="color:#dc2626;font-weight:700;">denominator</span>: the shape has <span style="color:#dc2626;font-weight:700;">6</span> equal parts in total. <strong>6 is the denominator</strong>.`,
            `Find the <span style="color:#1e40af;font-weight:700;">numerator</span>: <span style="color:#1e40af;font-weight:700;">4</span> parts are shaded. <strong>4 is the numerator</strong>.`,
            `Write the fraction:
<div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;margin:8px 12px 4px;">
  <span style="font-size:30px;font-weight:700;color:#1e40af;line-height:1.2;">4</span>
  <span style="display:block;width:28px;border-top:3px solid #374151;"></span>
  <span style="font-size:30px;font-weight:700;color:#dc2626;line-height:1.2;">6</span>
</div>
<span style="font-weight:700;">Four sixths</span> of the shape are shaded.`,
          ],
        },
      ],

      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPARING AND ORDERING FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering-fractions',
      title: 'Comparing and Ordering Fractions',
      icon: '⚖️',
      explanation: `<p style="margin-bottom:18px;">When comparing fractions, the first thing to check is whether the denominators are the same. Different rules apply depending on whether the denominators match or not.</p>

<p style="margin-bottom:12px;font-weight:600;">Rule 1 — Same denominator: compare the numerators</p>

<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:16px 18px;margin-bottom:16px;">
  <p style="margin-bottom:10px;color:#374151;">When fractions have the <strong>same denominator</strong>, the whole has been cut into the same number of pieces. The fraction with the <span style="color:#1e40af;font-weight:700;">bigger numerator</span> has more pieces — so it is the larger fraction.</p>
  <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:12px;">
    <div style="text-align:center;">
      <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
        <span style="font-size:26px;font-weight:700;color:#1e40af;line-height:1.2;">3</span>
        <span style="display:block;width:24px;border-top:2.5px solid #374151;"></span>
        <span style="font-size:26px;font-weight:700;color:#dc2626;line-height:1.2;">8</span>
      </div>
    </div>
    <span style="font-size:22px;font-weight:700;color:#16a34a;">&gt;</span>
    <div style="text-align:center;">
      <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
        <span style="font-size:26px;font-weight:700;color:#1e40af;line-height:1.2;">2</span>
        <span style="display:block;width:24px;border-top:2.5px solid #374151;"></span>
        <span style="font-size:26px;font-weight:700;color:#dc2626;line-height:1.2;">8</span>
      </div>
    </div>
    <span style="font-size:14px;color:#6b7280;">because <span style="color:#1e40af;font-weight:700;">3</span> &gt; <span style="color:#1e40af;font-weight:700;">2</span> and the denominators are the same</span>
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Rule 2 — Unit fractions (numerator is 1): compare the denominators</p>

<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:16px 18px;margin-bottom:22px;">
  <p style="margin-bottom:10px;color:#374151;">A unit fraction has <span style="color:#1e40af;font-weight:700;">1</span> as the numerator. When you split something into <strong>more pieces</strong>, each piece gets <strong>smaller</strong>. So the <span style="color:#dc2626;font-weight:700;">bigger the denominator</span>, the smaller the fraction.</p>
  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:12px;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:24px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:22px;border-top:2.5px solid #374151;"></span>
      <span style="font-size:24px;font-weight:700;color:#dc2626;line-height:1.2;">2</span>
    </div>
    <span style="font-size:20px;font-weight:700;color:#16a34a;">&gt;</span>
    <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:24px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:22px;border-top:2.5px solid #374151;"></span>
      <span style="font-size:24px;font-weight:700;color:#dc2626;line-height:1.2;">4</span>
    </div>
    <span style="font-size:20px;font-weight:700;color:#16a34a;">&gt;</span>
    <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:24px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:22px;border-top:2.5px solid #374151;"></span>
      <span style="font-size:24px;font-weight:700;color:#dc2626;line-height:1.2;">8</span>
    </div>
    <span style="font-size:13px;color:#6b7280;margin-left:4px;">Splitting into more pieces makes each piece smaller</span>
  </div>
</div>

<div style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:10px;padding:14px 18px;">
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">Quick tip</div>
  <div style="font-size:14px;color:#374151;">Think of a pizza cut into 2 slices versus one cut into 8 slices. One slice from the pizza cut into 2 is much bigger than one slice from the pizza cut into 8!</div>
</div>`,

      diagramPlaceholder: 'Two rectangles of equal size — one divided into 3 parts with 1 shaded, one divided into 6 parts with 1 shaded, showing 1/3 is bigger than 1/6',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="50" width="28" height="60" fill="#93c5fd"/><rect x="15" y="50" width="84" height="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="43" y1="50" x2="43" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><line x1="71" y1="50" x2="71" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><text x="57" y="130" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">1/3</text><rect x="121" y="50" width="14" height="60" fill="#93c5fd"/><rect x="121" y="50" width="84" height="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="135" y1="50" x2="135" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><line x1="149" y1="50" x2="149" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><line x1="163" y1="50" x2="163" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><line x1="177" y1="50" x2="177" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><line x1="191" y1="50" x2="191" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><text x="163" y="130" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">1/6</text><text x="110" y="88" font-weight="700" font-size="22" text-anchor="middle" fill="#16a34a">&gt;</text></svg>',
      videoPlaceholder: 'Short video showing how to compare fractions with the same denominator and unit fractions',

      workedExamples: [
        {
          question: 'Order these fractions from smallest to biggest: 5/9, 2/9, 7/9, 1/9',
          answer: '1/9, 2/9, 5/9, 7/9',
          steps: [
            `Check the denominators: all four fractions have denominator <span style="color:#dc2626;font-weight:700;">9</span>. Use Rule 1 — compare the <span style="color:#1e40af;font-weight:700;">numerators</span>.`,
            `List the numerators: <span style="color:#1e40af;font-weight:700;">5, 2, 7, 1</span>. Order them from smallest to biggest: <span style="color:#1e40af;font-weight:700;">1, 2, 5, 7</span>.`,
            `Write the fractions in that order:
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
    <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
    <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">9</span>
  </div>
  <span style="font-size:16px;color:#6b7280;">&lt;</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">2</span>
    <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
    <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">9</span>
  </div>
  <span style="font-size:16px;color:#6b7280;">&lt;</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">5</span>
    <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
    <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">9</span>
  </div>
  <span style="font-size:16px;color:#6b7280;">&lt;</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">7</span>
    <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
    <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">9</span>
  </div>
</div>`,
          ],
        },
        {
          question: 'Which is bigger: 1/3 or 1/6?',
          answer: '1/3 is bigger than 1/6',
          steps: [
            `Both fractions have <span style="color:#1e40af;font-weight:700;">1</span> as the numerator — these are <strong>unit fractions</strong>. Use Rule 2.`,
            `Compare the <span style="color:#dc2626;font-weight:700;">denominators</span>: <span style="color:#dc2626;font-weight:700;">3</span> and <span style="color:#dc2626;font-weight:700;">6</span>. The bigger the denominator, the <em>smaller</em> the fraction.`,
            `<span style="color:#dc2626;font-weight:700;">3</span> &lt; <span style="color:#dc2626;font-weight:700;">6</span>, so
<div style="display:flex;align-items:center;gap:12px;margin-top:10px;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:24px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
    <span style="display:block;width:22px;border-top:2.5px solid #374151;"></span>
    <span style="font-size:24px;font-weight:700;color:#dc2626;line-height:1.2;">3</span>
  </div>
  <span style="font-size:20px;font-weight:700;color:#16a34a;">&gt;</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:24px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
    <span style="display:block;width:22px;border-top:2.5px solid #374151;"></span>
    <span style="font-size:24px;font-weight:700;color:#dc2626;line-height:1.2;">6</span>
  </div>
  <span style="font-size:14px;color:#6b7280;margin-left:4px;"><strong>1/3 is bigger</strong> — each third is a larger piece than each sixth.</span>
</div>`,
          ],
        },
      ],

      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — EQUIVALENT FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equivalent-fractions',
      title: 'Equivalent Fractions',
      icon: '🟰',
      explanation: `<p style="margin-bottom:18px;"><strong>Equivalent fractions</strong> are different fractions that represent <strong>exactly the same amount</strong>. They look different but describe the same part of a whole.</p>

<p style="margin-bottom:12px;font-weight:600;">Real-life example:</p>

<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:22px;">
  <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
    <div style="font-size:14px;color:#374151;flex:1;min-width:160px;">
      🍕 Cut a pizza into <strong>2 equal slices</strong> and take <strong>1</strong> — you have half the pizza.
    </div>
    <span style="font-size:20px;font-weight:700;color:#16a34a;">=</span>
    <div style="font-size:14px;color:#374151;flex:1;min-width:160px;">
      🍕 Cut the <em>same</em> pizza into <strong>4 equal slices</strong> and take <strong>2</strong> — you still have half the pizza!
    </div>
  </div>
  <div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-top:14px;flex-wrap:wrap;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:28px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:26px;border-top:2.5px solid #374151;"></span>
      <span style="font-size:28px;font-weight:700;color:#dc2626;line-height:1.2;">2</span>
    </div>
    <span style="font-size:22px;font-weight:700;color:#16a34a;">=</span>
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:28px;font-weight:700;color:#1e40af;line-height:1.2;">2</span>
      <span style="display:block;width:26px;border-top:2.5px solid #374151;"></span>
      <span style="font-size:28px;font-weight:700;color:#dc2626;line-height:1.2;">4</span>
    </div>
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">The rule — multiply or divide top and bottom by the same number:</p>

<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:16px 18px;margin-bottom:22px;">
  <div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#1e40af;margin-bottom:12px;">Multiply by 2 each time</div>
  <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:24px;font-weight:700;color:#7c3aed;line-height:1.2;">1</span>
      <span style="display:block;width:22px;border-top:2.5px solid #374151;"></span>
      <span style="font-size:24px;font-weight:700;color:#7c3aed;line-height:1.2;">2</span>
    </div>
    <span style="font-size:18px;font-weight:700;color:#16a34a;">=</span>
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:24px;font-weight:700;color:#0891b2;line-height:1.2;">2</span>
      <span style="display:block;width:22px;border-top:2.5px solid #374151;"></span>
      <span style="font-size:24px;font-weight:700;color:#0891b2;line-height:1.2;">4</span>
    </div>
    <span style="font-size:18px;font-weight:700;color:#16a34a;">=</span>
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:24px;font-weight:700;color:#059669;line-height:1.2;">4</span>
      <span style="display:block;width:22px;border-top:2.5px solid #374151;"></span>
      <span style="font-size:24px;font-weight:700;color:#059669;line-height:1.2;">8</span>
    </div>
    <span style="font-size:13px;color:#6b7280;margin-left:4px;">All three represent the same amount</span>
  </div>
</div>

<div style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:10px;padding:14px 18px;">
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">Important rule</div>
  <div style="font-size:14px;color:#374151;">You must <strong>always multiply or divide both the numerator AND the denominator by the same number</strong>. If you only change one of them, the fraction changes value and they will not be equivalent.</div>
</div>`,

      diagramPlaceholder: 'Three rectangles of equal size showing 1/2, 2/4 and 4/8 all shaded equally to show they are equivalent',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="76" height="35" fill="#93c5fd"/><rect x="15" y="15" width="152" height="35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="91" y1="15" x2="91" y2="50" stroke="#0f1f3d" stroke-width="1.5"/><text x="195" y="37" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">1/2</text><rect x="15" y="65" width="76" height="35" fill="#93c5fd"/><rect x="15" y="65" width="152" height="35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="53" y1="65" x2="53" y2="100" stroke="#0f1f3d" stroke-width="1.5"/><line x1="91" y1="65" x2="91" y2="100" stroke="#0f1f3d" stroke-width="1.5"/><line x1="129" y1="65" x2="129" y2="100" stroke="#0f1f3d" stroke-width="1.5"/><text x="195" y="87" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">2/4</text><rect x="15" y="115" width="76" height="35" fill="#93c5fd"/><rect x="15" y="115" width="152" height="35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="34" y1="115" x2="34" y2="150" stroke="#0f1f3d" stroke-width="1.5"/><line x1="53" y1="115" x2="53" y2="150" stroke="#0f1f3d" stroke-width="1.5"/><line x1="72" y1="115" x2="72" y2="150" stroke="#0f1f3d" stroke-width="1.5"/><line x1="91" y1="115" x2="91" y2="150" stroke="#0f1f3d" stroke-width="1.5"/><line x1="110" y1="115" x2="110" y2="150" stroke="#0f1f3d" stroke-width="1.5"/><line x1="129" y1="115" x2="129" y2="150" stroke="#0f1f3d" stroke-width="1.5"/><line x1="148" y1="115" x2="148" y2="150" stroke="#0f1f3d" stroke-width="1.5"/><text x="195" y="137" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">4/8</text></svg>',
      videoPlaceholder: 'Short video showing how to find equivalent fractions by multiplying numerator and denominator by the same number',

      workedExamples: [
        {
          question: 'Find two fractions equivalent to 1/3.',
          answer: '2/6 and 3/9',
          steps: [
            `Start with <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 4px;"><span style="font-size:18px;font-weight:700;color:#1e40af;line-height:1.1;">1</span><span style="display:block;width:14px;border-top:2px solid #374151;"></span><span style="font-size:18px;font-weight:700;color:#dc2626;line-height:1.1;">3</span></span>. Multiply <strong>both</strong> numerator and denominator by <strong>2</strong>:
<div style="margin-top:8px;font-size:16px;"><span style="color:#1e40af;font-weight:700;">1 × 2</span> = <span style="color:#1e40af;font-weight:700;">2</span> &nbsp;and&nbsp; <span style="color:#dc2626;font-weight:700;">3 × 2</span> = <span style="color:#dc2626;font-weight:700;">6</span> &nbsp;→&nbsp; <strong>2/6</strong></div>`,
            `Now multiply both by <strong>3</strong>:
<div style="margin-top:8px;font-size:16px;"><span style="color:#1e40af;font-weight:700;">1 × 3</span> = <span style="color:#1e40af;font-weight:700;">3</span> &nbsp;and&nbsp; <span style="color:#dc2626;font-weight:700;">3 × 3</span> = <span style="color:#dc2626;font-weight:700;">9</span> &nbsp;→&nbsp; <strong>3/9</strong></div>`,
            `All three are equivalent:
<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;"><span style="font-size:22px;font-weight:700;color:#7c3aed;line-height:1.2;">1</span><span style="display:block;width:20px;border-top:2px solid #374151;"></span><span style="font-size:22px;font-weight:700;color:#7c3aed;line-height:1.2;">3</span></div>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">=</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;"><span style="font-size:22px;font-weight:700;color:#0891b2;line-height:1.2;">2</span><span style="display:block;width:20px;border-top:2px solid #374151;"></span><span style="font-size:22px;font-weight:700;color:#0891b2;line-height:1.2;">6</span></div>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">=</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;"><span style="font-size:22px;font-weight:700;color:#059669;line-height:1.2;">3</span><span style="display:block;width:20px;border-top:2px solid #374151;"></span><span style="font-size:22px;font-weight:700;color:#059669;line-height:1.2;">9</span></div>
</div>`,
          ],
        },
        {
          question: 'Are 3/4 and 6/8 equivalent?',
          answer: 'Yes, they are equivalent.',
          steps: [
            `Start with <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 4px;"><span style="font-size:18px;font-weight:700;color:#1e40af;line-height:1.1;">3</span><span style="display:block;width:14px;border-top:2px solid #374151;"></span><span style="font-size:18px;font-weight:700;color:#dc2626;line-height:1.1;">4</span></span> and try multiplying both top and bottom by <strong>2</strong>:`,
            `<span style="color:#1e40af;font-weight:700;">3 × 2</span> = <span style="color:#1e40af;font-weight:700;">6</span> &nbsp;and&nbsp; <span style="color:#dc2626;font-weight:700;">4 × 2</span> = <span style="color:#dc2626;font-weight:700;">8</span> &nbsp;→&nbsp; <strong>6/8</strong>`,
            `The result matches:
<div style="display:flex;align-items:center;gap:12px;margin-top:10px;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;"><span style="font-size:22px;font-weight:700;color:#7c3aed;line-height:1.2;">3</span><span style="display:block;width:20px;border-top:2px solid #374151;"></span><span style="font-size:22px;font-weight:700;color:#7c3aed;line-height:1.2;">4</span></div>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">=</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;"><span style="font-size:22px;font-weight:700;color:#0891b2;line-height:1.2;">6</span><span style="display:block;width:20px;border-top:2px solid #374151;"></span><span style="font-size:22px;font-weight:700;color:#0891b2;line-height:1.2;">8</span></div>
  <span style="font-size:14px;color:#16a34a;font-weight:700;margin-left:4px;">✓ Yes, they are equivalent.</span>
</div>`,
          ],
        },
        {
          question: 'Fill in the missing number: 2/5 = □/15',
          answer: '6/15',
          steps: [
            `Look at the <span style="color:#dc2626;font-weight:700;">denominators</span>: <span style="color:#dc2626;font-weight:700;">5</span> becomes <span style="color:#dc2626;font-weight:700;">15</span>. What was 5 multiplied by? &nbsp; <span style="color:#dc2626;font-weight:700;">5 × 3 = 15</span>`,
            `The rule: multiply <strong>both</strong> top and bottom by the <strong>same number</strong>. So multiply the numerator by <strong>3</strong> as well: &nbsp; <span style="color:#1e40af;font-weight:700;">2 × 3</span> = <span style="color:#1e40af;font-weight:700;">6</span>`,
            `The missing number is <span style="color:#ea580c;font-weight:700;font-size:18px;">6</span>:
<div style="display:flex;align-items:center;gap:12px;margin-top:10px;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;"><span style="font-size:22px;font-weight:700;color:#7c3aed;line-height:1.2;">2</span><span style="display:block;width:20px;border-top:2px solid #374151;"></span><span style="font-size:22px;font-weight:700;color:#7c3aed;line-height:1.2;">5</span></div>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">=</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;"><span style="font-size:22px;font-weight:700;color:#ea580c;line-height:1.2;">6</span><span style="display:block;width:20px;border-top:2px solid #374151;"></span><span style="font-size:22px;font-weight:700;color:#0891b2;line-height:1.2;">15</span></div>
</div>`,
          ],
        },
      ],

      openQuestions: [],
    },

    // ── SECTION 4 ──────────────────────────────────────────────────────────
    {
      id: 'fraction-of-a-whole-number',
      title: 'Finding a Fraction of a Whole Number',
      icon: '🔢',
      explanation: `
<p style="margin-bottom:12px;">Sometimes we need to find a <strong>fraction of a whole number</strong> — like "What is ½ of 10?" or "What is ¾ of 24?"</p>
<p style="margin-bottom:16px;">Here is the easy two-step rule:</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">The Rule</div>
  <div style="font-size:16px;font-weight:600;color:#1e3a8a;line-height:1.8;">
    Fraction of a whole number =<br/>
    whole number ÷ <span style="color:#dc2626;font-weight:700;">denominator</span> × <span style="color:#1e40af;font-weight:700;">numerator</span>
  </div>
  <div style="margin-top:12px;display:flex;gap:24px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Red = denominator (bottom number) — divide by this first</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blue = numerator (top number) — multiply by this second</span>
    </div>
  </div>
</div>

<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 18px;margin-bottom:8px;">
  <span style="font-size:13px;font-weight:700;color:#15803d;text-transform:uppercase;letter-spacing:.05em;">Remember</span>
  <p style="margin-top:6px;margin-bottom:0;color:#14532d;">Step 1: Divide the whole number by the <span style="color:#dc2626;font-weight:700;">denominator</span>.<br/>Step 2: Multiply the result by the <span style="color:#1e40af;font-weight:700;">numerator</span>.<br/>The final answer is shown in <span style="color:#16a34a;font-weight:700;">green</span>.</p>
</div>`,

      workedExamples: [
        {
          question: 'Find 1/4 of 20',
          answer: '5',
          steps: [
            `Identify the parts of the fraction: <span style="color:#1e40af;font-weight:700;">numerator = 1</span> &nbsp;|&nbsp; <span style="color:#dc2626;font-weight:700;">denominator = 4</span>`,
            `<strong>Step 1 — Divide</strong> by the <span style="color:#dc2626;font-weight:700;">denominator</span>: &nbsp; 20 ÷ <span style="color:#dc2626;font-weight:700;">4</span> = 5`,
            `<strong>Step 2 — Multiply</strong> by the <span style="color:#1e40af;font-weight:700;">numerator</span>: &nbsp; 5 × <span style="color:#1e40af;font-weight:700;">1</span> = <span style="color:#16a34a;font-weight:700;font-size:17px;">5</span>`,
            `<strong>Answer:</strong>
<div style="display:flex;align-items:center;gap:10px;margin-top:8px;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">4</span>
  </div>
  <span style="font-size:16px;font-weight:600;color:#374151;">of 20 =</span>
  <span style="font-size:22px;font-weight:700;color:#16a34a;">5</span>
</div>`,
          ],
        },
        {
          question: 'Find 3/4 of 24',
          answer: '18',
          steps: [
            `Identify the parts: <span style="color:#1e40af;font-weight:700;">numerator = 3</span> &nbsp;|&nbsp; <span style="color:#dc2626;font-weight:700;">denominator = 4</span>`,
            `<strong>Step 1 — Divide</strong> by the <span style="color:#dc2626;font-weight:700;">denominator</span>: &nbsp; 24 ÷ <span style="color:#dc2626;font-weight:700;">4</span> = 6`,
            `<strong>Step 2 — Multiply</strong> by the <span style="color:#1e40af;font-weight:700;">numerator</span>: &nbsp; 6 × <span style="color:#1e40af;font-weight:700;">3</span> = <span style="color:#16a34a;font-weight:700;font-size:17px;">18</span>`,
            `<strong>Answer:</strong>
<div style="display:flex;align-items:center;gap:10px;margin-top:8px;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">3</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">4</span>
  </div>
  <span style="font-size:16px;font-weight:600;color:#374151;">of 24 =</span>
  <span style="font-size:22px;font-weight:700;color:#16a34a;">18</span>
</div>`,
          ],
        },
        {
          question: 'A class has 30 learners. Two thirds of them walk to school. How many learners walk to school?',
          answer: '20',
          steps: [
            `We need to find <strong>2/3 of 30</strong>. &nbsp; <span style="color:#1e40af;font-weight:700;">numerator = 2</span> &nbsp;|&nbsp; <span style="color:#dc2626;font-weight:700;">denominator = 3</span>`,
            `<strong>Step 1 — Divide</strong> by the <span style="color:#dc2626;font-weight:700;">denominator</span>: &nbsp; 30 ÷ <span style="color:#dc2626;font-weight:700;">3</span> = 10`,
            `<strong>Step 2 — Multiply</strong> by the <span style="color:#1e40af;font-weight:700;">numerator</span>: &nbsp; 10 × <span style="color:#1e40af;font-weight:700;">2</span> = <span style="color:#16a34a;font-weight:700;font-size:17px;">20</span>`,
            `<strong>Answer:</strong> <span style="color:#16a34a;font-weight:700;font-size:17px;">20 learners</span> walk to school.`,
          ],
        },
      ],

      videoPlaceholder: 'Short video showing how to find a fraction of a whole number using divide then multiply',

      openQuestions: [],
    },

    // ── SECTION 5 ──────────────────────────────────────────────────────────
    {
      id: 'adding-fractions-same-denominator',
      title: 'Adding Fractions with the Same Denominator',
      icon: '➕',
      explanation: `
<p style="margin-bottom:14px;">When two fractions have the <strong>same denominator</strong>, adding them is easy — you just <strong>add the numerators</strong> and keep the denominator exactly the same.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Real-life example 🍕</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">A pizza is cut into <strong>8 equal slices</strong>. You eat <span style="color:#1e40af;font-weight:700;">2 slices</span> and your friend eats <span style="color:#1e40af;font-weight:700;">3 slices</span>. Together you have eaten <span style="color:#16a34a;font-weight:700;">5 slices out of 8</span>.</p>
  <div style="display:flex;align-items:center;gap:10px;margin-top:12px;flex-wrap:wrap;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">2</span>
      <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
      <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">8</span>
    </div>
    <span style="font-size:18px;font-weight:700;color:#374151;">+</span>
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">3</span>
      <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
      <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">8</span>
    </div>
    <span style="font-size:18px;font-weight:700;color:#374151;">=</span>
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:20px;font-weight:700;color:#16a34a;line-height:1.2;">5</span>
      <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
      <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">8</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">The Rule</div>
  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:10px;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">a</span>
      <span style="display:block;width:14px;border-top:2px solid #374151;"></span>
      <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">c</span>
    </div>
    <span style="font-size:18px;font-weight:700;color:#374151;">+</span>
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">b</span>
      <span style="display:block;width:14px;border-top:2px solid #374151;"></span>
      <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">c</span>
    </div>
    <span style="font-size:18px;font-weight:700;color:#374151;">=</span>
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">a + b</span>
      <span style="display:block;width:36px;border-top:2px solid #374151;"></span>
      <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">c</span>
    </div>
  </div>
  <div style="background:#dbeafe;border-radius:6px;padding:10px 14px;color:#1e3a8a;font-weight:600;font-size:14px;">
    ✅ Only add the <span style="color:#1e40af;">numerators</span> (top numbers).<br/>
    ❌ Never add or change the <span style="color:#dc2626;">denominator</span> (bottom number).
  </div>
</div>

<div style="display:flex;gap:20px;flex-wrap:wrap;margin-bottom:4px;">
  <div style="display:flex;align-items:center;gap:8px;">
    <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
    <span style="color:#1e40af;font-weight:700;">Blue = numerators — add these</span>
  </div>
  <div style="display:flex;align-items:center;gap:8px;">
    <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
    <span style="color:#dc2626;font-weight:700;">Red = denominator — keep this the same</span>
  </div>
  <div style="display:flex;align-items:center;gap:8px;">
    <span style="width:14px;height:14px;border-radius:50%;background:#16a34a;display:inline-block;"></span>
    <span style="color:#16a34a;font-weight:700;">Green = final answer</span>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Calculate 2/7 + 3/7',
          answer: '5/7',
          steps: [
            `Check the <span style="color:#dc2626;font-weight:700;">denominators</span>: both are <span style="color:#dc2626;font-weight:700;">7</span> — they are the same, so keep the denominator as <span style="color:#dc2626;font-weight:700;">7</span>.`,
            `Add the <span style="color:#1e40af;font-weight:700;">numerators</span>: <span style="color:#1e40af;font-weight:700;">2</span> + <span style="color:#1e40af;font-weight:700;">3</span> = <span style="color:#1e40af;font-weight:700;">5</span>`,
            `<strong>Answer:</strong>
<div style="display:flex;align-items:center;gap:10px;margin-top:8px;flex-wrap:wrap;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">2</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">7</span>
  </div>
  <span style="font-size:18px;font-weight:700;color:#374151;">+</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">3</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">7</span>
  </div>
  <span style="font-size:18px;font-weight:700;color:#374151;">=</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:22px;font-weight:700;color:#16a34a;line-height:1.2;">5</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">7</span>
  </div>
</div>`,
          ],
        },
        {
          question: 'Calculate 3/10 + 4/10 + 2/10',
          answer: '9/10',
          steps: [
            `Check the <span style="color:#dc2626;font-weight:700;">denominators</span>: all three are <span style="color:#dc2626;font-weight:700;">10</span> — same denominator, so keep <span style="color:#dc2626;font-weight:700;">10</span>.`,
            `Add all <span style="color:#1e40af;font-weight:700;">numerators</span>: <span style="color:#1e40af;font-weight:700;">3</span> + <span style="color:#1e40af;font-weight:700;">4</span> + <span style="color:#1e40af;font-weight:700;">2</span> = <span style="color:#1e40af;font-weight:700;">9</span>`,
            `<strong>Answer:</strong>
<div style="display:flex;align-items:center;gap:10px;margin-top:8px;flex-wrap:wrap;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">3</span>
    <span style="display:block;width:22px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">10</span>
  </div>
  <span style="font-size:18px;font-weight:700;color:#374151;">+</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">4</span>
    <span style="display:block;width:22px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">10</span>
  </div>
  <span style="font-size:18px;font-weight:700;color:#374151;">+</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">2</span>
    <span style="display:block;width:22px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">10</span>
  </div>
  <span style="font-size:18px;font-weight:700;color:#374151;">=</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:22px;font-weight:700;color:#16a34a;line-height:1.2;">9</span>
    <span style="display:block;width:22px;border-top:2px solid #374151;"></span>
    <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">10</span>
  </div>
</div>`,
          ],
        },
        {
          question: 'Lerato ate 1/6 of a cake in the morning and 3/6 in the afternoon. What fraction of the cake did she eat altogether? Is there any cake left?',
          answer: '4/6',
          steps: [
            `Add the fractions she ate: <span style="color:#dc2626;font-weight:700;">denominator = 6</span> — same for both, so keep it. Add the <span style="color:#1e40af;font-weight:700;">numerators</span>: <span style="color:#1e40af;font-weight:700;">1</span> + <span style="color:#1e40af;font-weight:700;">3</span> = <span style="color:#1e40af;font-weight:700;">4</span>
<div style="display:flex;align-items:center;gap:10px;margin-top:8px;flex-wrap:wrap;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">6</span>
  </div>
  <span style="font-size:18px;font-weight:700;color:#374151;">+</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">3</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">6</span>
  </div>
  <span style="font-size:18px;font-weight:700;color:#374151;">=</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:22px;font-weight:700;color:#16a34a;line-height:1.2;">4</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">6</span>
  </div>
</div>`,
            `Is there cake left? A whole cake =
<div style="display:inline-flex;flex-direction:column;align-items:center;margin:0 6px;">
  <span style="font-size:18px;font-weight:700;color:#374151;line-height:1.2;">6</span>
  <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
  <span style="font-size:18px;font-weight:700;color:#374151;line-height:1.2;">6</span>
</div>. Subtract what Lerato ate: <span style="color:#374151;font-weight:700;">6 − 4 = 2</span>
<div style="display:flex;align-items:center;gap:10px;margin-top:8px;flex-wrap:wrap;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#374151;line-height:1.2;">6</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">6</span>
  </div>
  <span style="font-size:18px;font-weight:700;color:#374151;">−</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">4</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">6</span>
  </div>
  <span style="font-size:18px;font-weight:700;color:#374151;">=</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:22px;font-weight:700;color:#ea580c;line-height:1.2;">2</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">6</span>
  </div>
  <span style="font-size:14px;color:#ea580c;font-weight:700;">remaining</span>
</div>`,
            `<strong>Answer:</strong> Lerato ate <span style="color:#16a34a;font-weight:700;">4/6</span> of the cake. <span style="color:#ea580c;font-weight:700;">2/6</span> is left.`,
          ],
        },
      ],

      videoPlaceholder: 'Short video showing how to add fractions with the same denominator using a pizza or bar model example',
      diagramPlaceholder: 'Bar model showing 2/8 plus 3/8 equals 5/8 with each part clearly labelled and colour coded',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="55" width="48" height="40" fill="#93c5fd"/><rect x="62" y="55" width="72" height="40" fill="#fdba74"/><rect x="14" y="55" width="192" height="40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="55" x2="38" y2="95" stroke="#0f1f3d" stroke-width="1.5"/><line x1="62" y1="55" x2="62" y2="95" stroke="#0f1f3d" stroke-width="1.5"/><line x1="86" y1="55" x2="86" y2="95" stroke="#0f1f3d" stroke-width="1.5"/><line x1="110" y1="55" x2="110" y2="95" stroke="#0f1f3d" stroke-width="1.5"/><line x1="134" y1="55" x2="134" y2="95" stroke="#0f1f3d" stroke-width="1.5"/><line x1="158" y1="55" x2="158" y2="95" stroke="#0f1f3d" stroke-width="1.5"/><line x1="182" y1="55" x2="182" y2="95" stroke="#0f1f3d" stroke-width="1.5"/><text x="38" y="45" font-weight="700" font-size="14" text-anchor="middle" fill="#2563eb">2/8</text><text x="98" y="45" font-weight="700" font-size="14" text-anchor="middle" fill="#ea580c">3/8</text><text x="110" y="125" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">2/8 + 3/8 = 5/8</text></svg>',

      openQuestions: [],
    },
  ],

  topicPractice: [],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs) — 6 skill blocks:
    // 0-3 naming, 4-7 sets/remainder, 8-11 comparing, 12-15 equivalence,
    // 16-18 fraction of a number, 19 capstone (numerator/denominator meaning)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'A pizza is cut into 4 equal slices. Thabo eats 1 slice. What fraction of the pizza did he eat?', checkMode: 'auto', options: [frac('1','4'), frac('4','1'), frac('1','5'), frac('3','4')], correctIndex: 0, explanation: `Thabo ate 1 slice out of 4 equal slices, so the fraction is ${frac('1','4')}. (Flipping the numerator and denominator, miscounting the total number of slices, or finding the fraction he did NOT eat are common mistakes.)` },
        { difficulty: 'Easy', question: 'A shape is divided into 6 equal parts and 2 are shaded. What fraction is shaded?', checkMode: 'auto', options: [frac('6','2'), frac('2','6'), frac('2','4'), frac('4','6')], correctIndex: 1, explanation: `2 parts are shaded out of 6 equal parts, so the fraction is ${frac('2','6')}. (Flipping the numbers, miscounting the total parts, or giving the unshaded fraction instead are common mistakes.)` },
        { difficulty: 'Easy', question: `What is the denominator in the fraction ${frac('3','8')}?`, checkMode: 'auto', options: ['3', '11', '8', '5'], correctIndex: 2, explanation: `The denominator is the bottom number — it tells us how many equal parts the whole is cut into. In ${frac('3','8')} the denominator is 8. (3 is the numerator, 11 comes from adding 3+8, and 5 comes from subtracting 8−3.)` },
        { difficulty: 'Easy', question: 'A ribbon is shared equally among 5 friends so that each friend gets one piece. What fraction of the ribbon does each friend get?', checkMode: 'auto', options: [frac('5','1'), frac('1','4'), frac('5','5'), frac('1','5')], correctIndex: 3, explanation: `The ribbon is split into 5 equal pieces (denominator 5) and each friend gets 1 piece (numerator 1), so the fraction is ${frac('1','5')}.` },
        { difficulty: 'Easy-Medium', question: 'A cake is cut into 6 equal slices. 5 slices are eaten. What fraction is left?', checkMode: 'auto', options: [frac('1','6'), frac('5','6'), frac('1','5'), frac('5','1')], correctIndex: 0, explanation: `Total slices = 6. Eaten = 5. Left = 6 − 5 = 1, so the fraction left is ${frac('1','6')}. (${frac('5','6')} is the fraction eaten, not left.)` },
        { difficulty: 'Easy-Medium', question: 'A jar has 20 marbles. 6 are red, 9 are blue and the rest are green. What fraction are green?', checkMode: 'auto', options: [frac('15','20'), frac('5','20'), frac('6','20'), frac('5','15')], correctIndex: 1, explanation: `Total = 20. Red = 6, Blue = 9. Green = 20 − 6 − 9 = 5, so the fraction is ${frac('5','20')}. (Adding red and blue instead of subtracting, or using red+blue as the denominator, are common mistakes.)` },
        { difficulty: 'Easy-Medium', question: 'A netball squad has 18 players. 10 are chosen to start the match, and the rest sit on the bench. What fraction of the squad sits on the bench?', checkMode: 'auto', options: [frac('10','18'), frac('8','10'), frac('8','18'), frac('18','8')], correctIndex: 2, explanation: `Total players = 18. Starting = 10. On the bench = 18 − 10 = 8, so the fraction is ${frac('8','18')}. (${frac('10','18')} is the starting fraction, not the bench fraction.)` },
        { difficulty: 'Medium', question: `Group A has 3 shaded parts out of 4. Group B has 3 shaded parts out of 8. Which group has the bigger fraction shaded?`, checkMode: 'auto', options: [`Group B, because 8 is a bigger number than 4, so its pieces must be bigger.`, `They shaded equal fractions, because both fractions have a numerator of 3.`, `Group B, because when denominators differ you always pick the fraction with the bigger denominator.`, `Group A, because with the same numerator, the fraction with the smaller denominator (${frac('3','4')}) has bigger pieces than ${frac('3','8')}.`], correctIndex: 3, explanation: `Group A = ${frac('3','4')} and Group B = ${frac('3','8')}. Same numerator, so compare denominators — the smaller denominator gives bigger parts. Since 4 is less than 8, ${frac('3','4')} is bigger, so Group A has the bigger fraction shaded.` },
        { difficulty: 'Medium', question: `Two friends compare paper strips of the same length. Aisha's strip shows ${frac('3','7')} shaded and Zanele's strip shows ${frac('5','7')} shaded. Whose strip has more shaded?`, checkMode: 'auto', options: [`Zanele, because ${frac('5','7')} has a bigger numerator than ${frac('3','7')} when the denominators are the same.`, `Aisha, because 3 is a smaller number so her denominator must actually be bigger.`, `They have the same amount shaded, since both strips have denominator 7.`, `Aisha, because you should compare denominators whenever the numerators are different.`], correctIndex: 0, explanation: `${frac('3','7')} and ${frac('5','7')} have the same denominator (7), so compare numerators. 5 is greater than 3, so Zanele's ${frac('5','7')} is more.` },
        { difficulty: 'Medium', question: `A student says ${frac('1','8')} must be bigger than ${frac('1','4')} because 8 is a bigger number than 4. Which statement correctly evaluates the student's claim?`, checkMode: 'auto', options: [`The student is correct — a bigger denominator always means a bigger fraction.`, `The student is incorrect — a bigger denominator means the whole is split into more, smaller pieces, so ${frac('1','4')} is actually bigger than ${frac('1','8')}.`, `The student is correct, because ${frac('1','8')} has more pieces than ${frac('1','4')}.`, `The student is incorrect, because you should only compare numerators when the denominators are different.`], correctIndex: 1, explanation: `Both fractions are unit fractions (numerator 1). A bigger denominator means the whole is cut into more pieces, so each piece is smaller. Since 8 is greater than 4, each eighth is smaller than each quarter, so ${frac('1','4')} is actually bigger than ${frac('1','8')}.` },
        { difficulty: 'Medium', question: `Order these fractions from smallest to biggest: ${frac('4','9')}, ${frac('1','9')}, ${frac('7','9')}, ${frac('3','9')}`, checkMode: 'auto', options: [`${frac('1','9')}, ${frac('4','9')}, ${frac('3','9')}, ${frac('7','9')}`, `${frac('7','9')}, ${frac('4','9')}, ${frac('3','9')}, ${frac('1','9')}`, `${frac('1','9')}, ${frac('3','9')}, ${frac('4','9')}, ${frac('7','9')}`, `${frac('3','9')}, ${frac('1','9')}, ${frac('4','9')}, ${frac('7','9')}`], correctIndex: 2, explanation: `Same denominator (9), so order by numerators from smallest to biggest: 1, 3, 4, 7. Order: ${frac('1','9')}, ${frac('3','9')}, ${frac('4','9')}, ${frac('7','9')}` },
        { difficulty: 'Medium', question: `Which statement about ${frac('5','8')} and ${frac('3','8')} is correct?`, checkMode: 'auto', options: [`${frac('5','8')} is actually smaller than ${frac('3','8')}, since 5 comes after 3.`, `You must compare denominators, not numerators, to decide which is bigger.`, `They are equal, but only because 8 is an even denominator.`, `${frac('5','8')} is bigger than ${frac('3','8')} — when denominators are the same, the fraction with the bigger numerator represents more equal-sized pieces.`], correctIndex: 3, explanation: `When two fractions have the same denominator, the whole has been cut into equally sized pieces, so the fraction with more of those pieces (the bigger numerator) represents a bigger amount. Since 5 is greater than 3, ${frac('5','8')} is bigger than ${frac('3','8')}.` },
        { difficulty: 'Medium', question: `Find a fraction equivalent to ${frac('1','2')}.`, checkMode: 'auto', options: [frac('2','4'), frac('2','3'), frac('1','4'), frac('4','2')], correctIndex: 0, explanation: `Multiply numerator and denominator by the same number: 1 × 2 = 2 and 2 × 2 = 4, giving ${frac('2','4')}. (${frac('2','3')} comes from adding 1 to both numbers instead of multiplying, and ${frac('1','4')} comes from only multiplying the denominator.)` },
        { difficulty: 'Medium', question: `Fill in the missing number: ${frac('1','4')} = ${frac('?','12')}`, checkMode: 'auto', options: ['4', '3', '8', '48'], correctIndex: 1, explanation: `The denominator went from 4 to 12 (4 × 3 = 12), so multiply the numerator by 3 too: 1 × 3 = 3.` },
        { difficulty: 'Medium', question: `Which statement about ${frac('2','3')} and ${frac('4','6')} is correct?`, checkMode: 'auto', options: [`They are not equivalent, because the numerators (2 and 4) are different.`, `You can only compare fractions that already have the same denominator.`, `They are equivalent — multiplying ${frac('2','3')} by ${frac('2','2')} gives ${frac('4','6')}, so they represent the same amount.`, `They are equivalent, but only because both numerators happen to be even.`], correctIndex: 2, explanation: `Multiply ${frac('2','3')} by ${frac('2','2')}: 2 × 2 = 4 and 3 × 2 = 6, giving ${frac('4','6')}. Since this matches, ${frac('2','3')} and ${frac('4','6')} are equivalent.` },
        { difficulty: 'Medium', question: `Sipho says ${frac('1','3')} and ${frac('3','9')} are equivalent. Which statement is correct?`, checkMode: 'auto', options: [`He is wrong — ${frac('1','3')} and ${frac('3','9')} have different denominators, so they cannot be equivalent.`, `He is wrong — you cannot multiply the numerator and denominator by the same number and expect an equivalent fraction.`, `He is correct, but only by coincidence — the two fractions just happen to look similar.`, `He is correct — multiplying ${frac('1','3')} by ${frac('3','3')} gives 1 × 3 = 3 and 3 × 3 = 9, so ${frac('1','3')} = ${frac('3','9')}.`], correctIndex: 3, explanation: `Multiplying ${frac('1','3')} by ${frac('3','3')} gives 1 × 3 = 3 and 3 × 3 = 9, so ${frac('1','3')} = ${frac('3','9')}. Since both the numerator and denominator were multiplied by the same number, the fractions represent the same amount.` },
        { difficulty: 'Medium-Hard', question: `Find ${frac('3','10')} of 50.`, checkMode: 'auto', options: ['15', '5', '17', '150'], correctIndex: 0, explanation: `Step 1: divide by the denominator — 50 ÷ 10 = 5. Step 2: multiply by the numerator — 5 × 3 = 15. (5 comes from stopping after step 1, 17 comes from wrongly dividing 50 by 3, and 150 comes from multiplying 50 × 3 without dividing first.)` },
        { difficulty: 'Medium-Hard', question: `A netball team plays 40 matches in a season. They win ${frac('3','8')} of them. How many matches do they win?`, checkMode: 'auto', options: ['24', '15', '5', '13'], correctIndex: 1, explanation: `Find ${frac('3','8')} of 40. Step 1: 40 ÷ 8 = 5. Step 2: 5 × 3 = 15. The team wins 15 matches. (5 comes from stopping after step 1, and 13 comes from wrongly dividing 40 by 3.)` },
        { difficulty: 'Medium-Hard', question: `Which is more: ${frac('3','4')} of 20 or ${frac('2','5')} of 20?`, checkMode: 'auto', options: [`${frac('2','5')} of 20, because ${frac('2','5')} has a smaller denominator than ${frac('3','4')}.`, `They are equal, since both fractions are being applied to 20.`, `${frac('3','4')} of 20, because ${frac('3','4')} of 20 = 15 while ${frac('2','5')} of 20 = 8.`, `${frac('2','5')} of 20, because 2 + 5 is less than 3 + 4.`], correctIndex: 2, explanation: `${frac('3','4')} of 20: 20 ÷ 4 = 5, then 5 × 3 = 15. ${frac('2','5')} of 20: 20 ÷ 5 = 4, then 4 × 2 = 8. Since 15 is greater than 8, ${frac('3','4')} of 20 is more.` },
        { difficulty: 'Hard', question: `Which statement correctly explains what the numerator and denominator of a fraction tell you?`, checkMode: 'auto', options: [`The numerator tells you how many equal parts the whole is divided into, and the denominator tells you how many parts you have.`, `Both the numerator and denominator tell you how many parts you have, just written in two different ways.`, `The denominator tells you how many parts you have, and the numerator tells you how many parts the whole is divided into.`, `The numerator (top number) tells you how many equal parts you have, and the denominator (bottom number) tells you how many equal parts the whole was divided into.`], correctIndex: 3, explanation: `For example, in ${frac('3','8')}, the denominator 8 means the whole is cut into 8 equal pieces, and the numerator 3 means we have 3 of those pieces. (Options that swap the two definitions around are the most common mix-up.)` },
      ],
      scoreMessages: [
        { minScore: 20, message: "Outstanding! You have a strong, well-rounded grasp of common fractions." },
        { minScore: 15, message: "Great work! Review any missed questions and try again." },
        { minScore: 10, message: "Good effort! Revisit the worked examples on the topics you found tricky." },
        { minScore: 0, message: "Keep going — work through the study guide again and retry this set." },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same 6-block layout as Set 1, fresh wording/numbers.
    // Capstone rotates to: why same-denominator addition works.
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'A chocolate bar has 8 equal pieces. Sipho eats 3 pieces. What fraction did he eat?', checkMode: 'auto', options: [frac('3','8'), frac('8','3'), frac('3','5'), frac('5','8')], correctIndex: 0, explanation: `Sipho ate 3 pieces out of 8 equal pieces, so the fraction is ${frac('3','8')}. (${frac('5','8')} is the fraction he did NOT eat.)` },
        { difficulty: 'Easy', question: 'A shape is divided into 5 equal parts and 4 are shaded. What fraction is shaded?', checkMode: 'auto', options: [frac('5','4'), frac('4','5'), frac('4','9'), frac('1','5')], correctIndex: 1, explanation: `4 parts are shaded out of 5 equal parts, so the fraction is ${frac('4','5')}. (${frac('1','5')} is the unshaded fraction.)` },
        { difficulty: 'Easy', question: `What is the numerator in the fraction ${frac('5','9')}?`, checkMode: 'auto', options: ['9', '14', '5', '4'], correctIndex: 2, explanation: `The numerator is the top number — it tells us how many equal parts we have. In ${frac('5','9')} the numerator is 5. (9 is the denominator, 14 comes from adding 5+9, and 4 comes from subtracting 9−5.)` },
        { difficulty: 'Easy', question: 'A packet of biscuits is shared equally among 6 learners. If one learner takes 2 shares, what fraction of the biscuits did that learner get?', checkMode: 'auto', options: [frac('6','2'), frac('1','6'), frac('2','4'), frac('2','6')], correctIndex: 3, explanation: `The biscuits are split into 6 equal shares (denominator 6) and the learner takes 2 shares (numerator 2), so the fraction is ${frac('2','6')}.` },
        { difficulty: 'Easy-Medium', question: 'A pizza is cut into 8 equal slices. 3 slices are eaten. What fraction is left?', checkMode: 'auto', options: [frac('5','8'), frac('3','8'), frac('5','3'), frac('5','11')], correctIndex: 0, explanation: `Total slices = 8. Eaten = 3. Left = 8 − 3 = 5, so the fraction left is ${frac('5','8')}. (${frac('3','8')} is the fraction eaten, not left.)` },
        { difficulty: 'Easy-Medium', question: 'A packet has 24 sweets. 10 are red, 8 are blue and the rest are green. What fraction are green?', checkMode: 'auto', options: [frac('18','24'), frac('6','24'), frac('10','24'), frac('6','18')], correctIndex: 1, explanation: `Total = 24. Red = 10, Blue = 8. Green = 24 − 10 − 8 = 6, so the fraction is ${frac('6','24')}. (Adding red and blue instead of subtracting, or using red+blue as the denominator, are common mistakes.)` },
        { difficulty: 'Easy-Medium', question: 'A vegetable garden has 20 plants. 13 are tomato plants and the rest are spinach plants. What fraction of the plants are spinach?', checkMode: 'auto', options: [frac('13','20'), frac('33','20'), frac('7','20'), frac('20','7')], correctIndex: 2, explanation: `Total plants = 20. Tomato = 13. Spinach = 20 − 13 = 7, so the fraction is ${frac('7','20')}. (${frac('13','20')} is the tomato fraction, not the spinach fraction.)` },
        { difficulty: 'Medium', question: `Thabo shaded 2 parts out of a shape split into 3 (${frac('2','3')}). Lerato shaded 2 parts out of a shape the same size split into 6 (${frac('2','6')}). Who shaded the bigger fraction of their shape?`, checkMode: 'auto', options: [`Lerato, because 6 is a bigger number than 3, so her denominator must give more.`, `They shaded equal fractions, since both numerators are 2.`, `Lerato, because a bigger denominator always means a bigger fraction.`, `Thabo, because with the same numerator, the smaller denominator (3) gives bigger pieces.`], correctIndex: 3, explanation: `Thabo shaded ${frac('2','3')} and Lerato shaded ${frac('2','6')}. Same numerator, so compare denominators — the smaller denominator gives bigger parts. Since 3 is less than 6, ${frac('2','3')} is bigger, so Thabo shaded the bigger fraction.` },
        { difficulty: 'Medium', question: `Two water bottles hold the same total amount. One is filled to ${frac('2','9')} and the other to ${frac('6','9')}. Which bottle has less water in it?`, checkMode: 'auto', options: [`The bottle filled to ${frac('2','9')}, because with the same denominator, the smaller numerator means less water.`, `The bottle filled to ${frac('6','9')}, because 6 is further from 9 than 2 is.`, `They have equal water, because both are ninths.`, `The bottle filled to ${frac('6','9')}, because a bigger numerator always means less water.`], correctIndex: 0, explanation: `${frac('2','9')} and ${frac('6','9')} have the same denominator (9), so compare numerators. 2 is less than 6, so the bottle filled to ${frac('2','9')} has less water.` },
        { difficulty: 'Medium', question: `A student claims ${frac('1','6')} is bigger than ${frac('1','3')} because 6 is a bigger number than 3. Which statement correctly evaluates the claim?`, checkMode: 'auto', options: [`The claim is correct — bigger denominators always create bigger unit fractions.`, `The claim is incorrect — a bigger denominator splits the whole into more, smaller pieces, so ${frac('1','6')} is actually smaller than ${frac('1','3')}.`, `The claim is correct, because sixths are counted more often than thirds.`, `The claim is incorrect, because you should compare numerators instead of denominators here.`], correctIndex: 1, explanation: `Both are unit fractions (numerator 1), so a bigger denominator means the whole is split into more, smaller pieces. Since 6 is greater than 3, sixths are smaller pieces than thirds, so ${frac('1','6')} is actually smaller than ${frac('1','3')}.` },
        { difficulty: 'Medium', question: `Order these fractions from biggest to smallest: ${frac('1','2')}, ${frac('1','5')}, ${frac('1','3')}, ${frac('1','10')}`, checkMode: 'auto', options: [`${frac('1','10')}, ${frac('1','5')}, ${frac('1','3')}, ${frac('1','2')}`, `${frac('1','2')}, ${frac('1','5')}, ${frac('1','3')}, ${frac('1','10')}`, `${frac('1','2')}, ${frac('1','3')}, ${frac('1','5')}, ${frac('1','10')}`, `${frac('1','3')}, ${frac('1','2')}, ${frac('1','10')}, ${frac('1','5')}`], correctIndex: 2, explanation: `These are all unit fractions, so the smaller the denominator, the bigger the fraction. Order from biggest to smallest denominator gives: ${frac('1','2')}, ${frac('1','3')}, ${frac('1','5')}, ${frac('1','10')}` },
        { difficulty: 'Medium', question: `Which is bigger: ${frac('3','4')} or ${frac('5','8')}? Hint: first find an equivalent fraction for ${frac('3','4')} with denominator 8.`, checkMode: 'auto', options: [`${frac('5','8')} is bigger, because 8 is a bigger denominator than 4.`, `They are equal, since ${frac('3','4')} cannot be converted to eighths.`, `${frac('5','8')} is bigger, because 5 is bigger than 3 so its fraction must be bigger.`, `${frac('3','4')} is bigger — ${frac('3','4')} = ${frac('6','8')}, and comparing with the same denominator, ${frac('6','8')} > ${frac('5','8')}.`], correctIndex: 3, explanation: `${frac('3','4')} = ${frac('6','8')} (multiply top and bottom by 2). Now compare ${frac('6','8')} and ${frac('5','8')} — same denominator, so compare numerators. Since 6 is greater than 5, ${frac('3','4')} is bigger.` },
        { difficulty: 'Medium', question: `Find a fraction equivalent to ${frac('1','3')}.`, checkMode: 'auto', options: [frac('2','6'), frac('1','6'), frac('2','3'), frac('3','6')], correctIndex: 0, explanation: `Multiply numerator and denominator by the same number: 1 × 2 = 2 and 3 × 2 = 6, giving ${frac('2','6')}. (${frac('1','6')} only doubles the denominator, ${frac('2','3')} only doubles the numerator, and ${frac('3','6')} adds 2 to both instead of multiplying.)` },
        { difficulty: 'Medium', question: `Fill in the missing number: ${frac('2','5')} = ${frac('?','10')}`, checkMode: 'auto', options: ['5', '4', '2', '20'], correctIndex: 1, explanation: `The denominator went from 5 to 10 (5 × 2 = 10), so multiply the numerator by 2 too: 2 × 2 = 4.` },
        { difficulty: 'Medium', question: `Which statement about ${frac('3','5')} and ${frac('5','8')} is correct?`, checkMode: 'auto', options: [`They are equivalent, because both fractions have numerators smaller than their denominators.`, `They are equivalent, because 3 × 8 = 24 and 5 × 5 = 25 are close enough.`, `They are not equivalent — there is no whole number that multiplies both 3 and 5 to give 5 and 8.`, `They are not equivalent, because ${frac('5','8')} is a unit fraction and ${frac('3','5')} is not.`], correctIndex: 2, explanation: `There is no whole number you can multiply both 3 and 5 by to get 5 and 8, so ${frac('3','5')} and ${frac('5','8')} are not equivalent.` },
        { difficulty: 'Medium', question: `Lerato says ${frac('2','6')} and ${frac('3','9')} are equivalent because they both simplify to ${frac('1','3')}. Which statement is correct?`, checkMode: 'auto', options: [`She is wrong — ${frac('2','6')} simplifies to ${frac('1','3')} but ${frac('3','9')} simplifies to ${frac('1','4')}.`, `She is wrong — you cannot compare two fractions by simplifying them both.`, `She is correct, but only because 2 and 3 are consecutive numbers.`, `She is correct — ${frac('2','6')} simplifies to ${frac('1','3')} (divide by 2) and ${frac('3','9')} also simplifies to ${frac('1','3')} (divide by 3), so they are equivalent.`], correctIndex: 3, explanation: `${frac('2','6')} simplifies to ${frac('1','3')} (divide top and bottom by 2). ${frac('3','9')} also simplifies to ${frac('1','3')} (divide top and bottom by 3). Since both simplify to the same fraction, they are equivalent.` },
        { difficulty: 'Medium-Hard', question: `Find ${frac('5','6')} of 24.`, checkMode: 'auto', options: ['20', '4', '144', '30'], correctIndex: 0, explanation: `Step 1: divide by the denominator — 24 ÷ 6 = 4. Step 2: multiply by the numerator — 4 × 5 = 20. (4 comes from stopping after step 1, and 144 comes from multiplying 24 × 6 instead of dividing.)` },
        { difficulty: 'Medium-Hard', question: `A cyclist plans to ride 40 km. She has already ridden ${frac('3','5')} of the distance. How many kilometres has she ridden?`, checkMode: 'auto', options: ['8', '24', '120', '25'], correctIndex: 1, explanation: `Find ${frac('3','5')} of 40. Step 1: 40 ÷ 5 = 8. Step 2: 8 × 3 = 24. She has ridden 24 km. (8 comes from stopping after step 1, and 120 comes from multiplying 40 × 3 without dividing first.)` },
        { difficulty: 'Medium-Hard', question: `Which is more: ${frac('5','6')} of 18 or ${frac('2','3')} of 18?`, checkMode: 'auto', options: [`${frac('2','3')} of 18, because ${frac('2','3')} has a smaller denominator.`, `They are equal, because both fractions are less than 1.`, `${frac('5','6')} of 18, because ${frac('5','6')} of 18 = 15 while ${frac('2','3')} of 18 = 12.`, `${frac('2','3')} of 18, because 2 + 3 is less than 5 + 6.`], correctIndex: 2, explanation: `${frac('5','6')} of 18: 18 ÷ 6 = 3, then 3 × 5 = 15. ${frac('2','3')} of 18: 18 ÷ 3 = 6, then 6 × 2 = 12. Since 15 is greater than 12, ${frac('5','6')} of 18 is more.` },
        { difficulty: 'Hard', question: `Which statement correctly explains why you can add two fractions by simply adding their numerators only when the denominators are the same?`, checkMode: 'auto', options: [`Because the denominators cancel out when they are equal.`, `Because adding numerators always works, regardless of the denominators.`, `Because the numerator represents the size of each piece, not how many you have.`, `Because when the denominators are the same, the whole is divided into equal-sized pieces for both fractions, so you can simply count the pieces together.`], correctIndex: 3, explanation: `When two fractions have the same denominator, the whole has been divided into equal-sized parts for both fractions, so the pieces are the same size and can just be counted together. If the denominators were different, the pieces would be different sizes, and adding the numerators directly would give a wrong answer.` },
      ],
      scoreMessages: [
        { minScore: 20, message: "Outstanding! You have a strong, well-rounded grasp of common fractions." },
        { minScore: 15, message: "Great work! Review any missed questions and try again." },
        { minScore: 10, message: "Good effort! Revisit the worked examples on the topics you found tricky." },
        { minScore: 0, message: "Keep going — work through the study guide again and retry this set." },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same 6-block layout as Sets 1-2, fresh wording/numbers.
    // Capstone rotates to: the two-step fraction-of-a-number rule.
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'An orange is split into 10 equal segments. Lerato gives away 3 segments. What fraction did she give away?', checkMode: 'auto', options: [frac('3','10'), frac('10','3'), frac('3','7'), frac('7','10')], correctIndex: 0, explanation: `Lerato gave away 3 segments out of 10 equal segments, so the fraction is ${frac('3','10')}. (${frac('7','10')} is the fraction she kept, not gave away.)` },
        { difficulty: 'Easy', question: 'A shape is divided into 3 equal parts and 1 is shaded. What fraction is shaded?', checkMode: 'auto', options: [frac('3','1'), frac('1','3'), frac('1','2'), frac('2','3')], correctIndex: 1, explanation: `1 part is shaded out of 3 equal parts, so the fraction is ${frac('1','3')}. (${frac('2','3')} is the unshaded fraction.)` },
        { difficulty: 'Easy', question: `In the fraction ${frac('7','12')}, which number is the numerator and which is the denominator?`, checkMode: 'auto', options: ['12 is the numerator, 7 is the denominator.', 'Both 7 and 12 are numerators.', '7 is the numerator, 12 is the denominator.', '7 is the denominator, 12 is the numerator.'], correctIndex: 2, explanation: `The numerator is the top number (7). The denominator is the bottom number (12).` },
        { difficulty: 'Easy', question: 'A packet of 9 seedlings is shared equally among 9 plant pots, one seedling per pot. What fraction of the seedlings goes into 4 of the pots?', checkMode: 'auto', options: [frac('9','4'), frac('4','5'), frac('5','9'), frac('4','9')], correctIndex: 3, explanation: `There are 9 equal seedlings in total (denominator 9) and 4 of them go into 4 pots (numerator 4), so the fraction is ${frac('4','9')}.` },
        { difficulty: 'Easy-Medium', question: 'A chocolate bar has 10 equal pieces. Amahle eats 6 pieces. What fraction of the bar is left?', checkMode: 'auto', options: [frac('4','10'), frac('6','10'), frac('4','6'), frac('6','4')], correctIndex: 0, explanation: `Total pieces = 10. Eaten = 6. Left = 10 − 6 = 4, so the fraction left is ${frac('4','10')}. (${frac('6','10')} is the fraction eaten, not left.)` },
        { difficulty: 'Easy-Medium', question: 'A tray has 12 muffins. 5 have icing, 4 have sprinkles and the rest are plain. What fraction are plain?', checkMode: 'auto', options: [frac('9','12'), frac('3','12'), frac('5','12'), frac('3','9')], correctIndex: 1, explanation: `Total muffins = 12. Icing = 5, Sprinkles = 4. Plain = 12 − 5 − 4 = 3, so the fraction is ${frac('3','12')}. (Adding icing and sprinkles instead of subtracting, or using icing+sprinkles as the denominator, are common mistakes.)` },
        { difficulty: 'Easy-Medium', question: 'A box of 24 crayons has 9 broken. The rest are still whole. What fraction of the crayons are still whole?', checkMode: 'auto', options: [frac('9','24'), frac('24','15'), frac('15','24'), frac('15','9')], correctIndex: 2, explanation: `Total crayons = 24. Broken = 9. Whole = 24 − 9 = 15, so the fraction is ${frac('15','24')}. (${frac('9','24')} is the broken fraction, not the whole fraction.)` },
        { difficulty: 'Medium', question: `A blue rectangle has 4 shaded parts out of 10 (${frac('4','10')}). A green rectangle the same size has 4 shaded parts out of 5 (${frac('4','5')}). Which rectangle has the bigger fraction shaded?`, checkMode: 'auto', options: [`The blue rectangle, because 10 is a bigger number than 5.`, `They shaded equal fractions, since both numerators are 4.`, `The blue rectangle, because a bigger denominator always gives a bigger fraction.`, `The green rectangle, because with the same numerator, the smaller denominator (5) gives bigger pieces.`], correctIndex: 3, explanation: `Blue = ${frac('4','10')} and Green = ${frac('4','5')}. Same numerator, so compare denominators — the smaller denominator gives bigger parts. Since 5 is less than 10, ${frac('4','5')} is bigger, so the green rectangle has the bigger fraction shaded.` },
        { difficulty: 'Medium', question: `Two ropes of equal length are marked off in equal sections. One rope has ${frac('4','11')} of its length painted, the other has ${frac('8','11')} painted. Which rope has more paint on it?`, checkMode: 'auto', options: [`The rope with ${frac('8','11')}, because with the same denominator, the bigger numerator means more paint.`, `The rope with ${frac('4','11')}, because 4 is a smaller, more precise number.`, `They have equal paint, because both are elevenths.`, `The rope with ${frac('4','11')}, because a smaller numerator always means more of the whole.`], correctIndex: 0, explanation: `${frac('4','11')} and ${frac('8','11')} have the same denominator (11), so compare numerators. 8 is greater than 4, so the rope with ${frac('8','11')} has more paint.` },
        { difficulty: 'Medium', question: `Which statement correctly explains, without doing any division, why ${frac('1','5')} must be bigger than ${frac('1','9')}?`, checkMode: 'auto', options: [`${frac('1','9')} is bigger, because 9 pieces means more pieces overall.`, `${frac('1','5')} is bigger — both are unit fractions, and splitting the whole into fewer pieces (5 instead of 9) makes each piece larger.`, `They are equal, because both have numerator 1.`, `${frac('1','9')} is bigger, because a bigger denominator always creates a bigger fraction.`], correctIndex: 1, explanation: `Both are unit fractions (numerator 1). The denominator shows how many equal pieces the whole is split into — splitting into 9 pieces makes each piece smaller than splitting into only 5 pieces. Since 5 is less than 9, each fifth is bigger than each ninth, so ${frac('1','5')} is bigger than ${frac('1','9')}.` },
        { difficulty: 'Medium', question: `Order these fractions from smallest to biggest: ${frac('3','4')}, ${frac('1','4')}, ${frac('1','2')}, ${frac('2','4')}`, checkMode: 'auto', options: [`${frac('3','4')}, ${frac('2','4')}, ${frac('1','2')}, ${frac('1','4')}`, `${frac('1','4')}, ${frac('1','2')}, ${frac('3','4')}, ${frac('2','4')}`, `${frac('1','4')}, ${frac('1','2')}, ${frac('2','4')}, ${frac('3','4')}`, `${frac('1','2')}, ${frac('1','4')}, ${frac('2','4')}, ${frac('3','4')}`], correctIndex: 2, explanation: `Rewrite ${frac('1','2')} as ${frac('2','4')} so all fractions share denominator 4: ${frac('1','4')}, ${frac('2','4')}, ${frac('2','4')}, ${frac('3','4')}. Since ${frac('1','2')} = ${frac('2','4')}, ordering from smallest to biggest gives ${frac('1','4')}, ${frac('1','2')} (=${frac('2','4')}), ${frac('2','4')}, ${frac('3','4')}.` },
        { difficulty: 'Medium', question: `To compare ${frac('2','5')} and ${frac('3','10')}, you can rewrite ${frac('2','5')} as ${frac('4','10')} and then compare numerators. Which statement is correct?`, checkMode: 'auto', options: [`False — you cannot rewrite ${frac('2','5')} with denominator 10.`, `True, but ${frac('3','10')} is actually the bigger fraction.`, `False — comparing numerators only works when the original denominators already match.`, `True — ${frac('2','5')} = ${frac('4','10')}, and comparing ${frac('4','10')} with ${frac('3','10')}, since 4 > 3, ${frac('2','5')} is the bigger fraction.`], correctIndex: 3, explanation: `${frac('2','5')} = ${frac('4','10')} (multiply top and bottom by 2). Now both fractions have denominator 10, so compare numerators: 4 and 3. Since 4 is greater than 3, ${frac('2','5')} (as ${frac('4','10')}) is bigger than ${frac('3','10')}.` },
        { difficulty: 'Medium', question: `Which pair of fractions are both equivalent to ${frac('3','4')}?`, checkMode: 'auto', options: [frac('6','8') + ' and ' + frac('9','12'), frac('6','8') + ' and ' + frac('8','12'), frac('4','5') + ' and ' + frac('6','8'), frac('9','16') + ' and ' + frac('6','8')], correctIndex: 0, explanation: `Multiply ${frac('3','4')} by ${frac('2','2')} to get ${frac('6','8')}, and by ${frac('3','3')} to get ${frac('9','12')}. Both represent the same amount as ${frac('3','4')}. (${frac('8','12')} simplifies to ${frac('2','3')}, not ${frac('3','4')}, so it is not equivalent.)` },
        { difficulty: 'Medium', question: `Fill in the missing number: ${frac('3','8')} = ${frac('?','16')}`, checkMode: 'auto', options: ['8', '6', '3', '24'], correctIndex: 1, explanation: `The denominator went from 8 to 16 (8 × 2 = 16), so multiply the numerator by 2 too: 3 × 2 = 6.` },
        { difficulty: 'Medium', question: `Which statement about ${frac('4','5')} and ${frac('8','10')} is correct?`, checkMode: 'auto', options: [`They are not equivalent — ${frac('8','10')} simplifies to ${frac('4','5')} only when you divide by 3.`, `They are not equivalent — the denominators 5 and 10 can never be related.`, `They are equivalent — multiplying ${frac('4','5')} by ${frac('2','2')} gives ${frac('8','10')}, so they represent the same amount.`, `They are equivalent, but only because both fractions have even denominators.`], correctIndex: 2, explanation: `Multiplying ${frac('4','5')} by ${frac('2','2')} gives 4 × 2 = 8 and 5 × 2 = 10, so ${frac('4','5')} = ${frac('8','10')}. Since both the numerator and denominator were multiplied by the same number, the fractions represent the same amount.` },
        { difficulty: 'Medium', question: `Amahle claims that ${frac('3','5')} and ${frac('6','9')} are equivalent fractions because she multiplied both the numerator and denominator of ${frac('3','5')} by different numbers to reach ${frac('6','9')}. Which statement correctly evaluates her claim?`, checkMode: 'auto', options: [`She is correct — any pair of multipliers works as long as the result looks similar.`, `She is correct, because ${frac('3','5')} and ${frac('6','9')} both simplify to fractions less than 1.`, `She is incorrect, but only because ${frac('6','9')} should have been written as ${frac('9','6')}.`, `She is incorrect — she multiplied the numerator by 2 but the denominator by a non-whole-number factor (5×2=10, not 9); ${frac('3','5')} actually equals ${frac('6','10')}, not ${frac('6','9')}.`], correctIndex: 3, explanation: `To multiply 3 to get 6, she multiplied by 2, but to multiply 5 to get 9, that is not a whole-number multiplication (5 × 2 = 10, not 9). Since she did not multiply the numerator and denominator by the same number, the fractions are not equivalent — ${frac('3','5')} is actually equal to ${frac('6','10')}, not ${frac('6','9')}.` },
        { difficulty: 'Medium-Hard', question: `Find ${frac('7','10')} of 80.`, checkMode: 'auto', options: ['56', '8', '110', '560'], correctIndex: 0, explanation: `Step 1: divide by the denominator — 80 ÷ 10 = 8. Step 2: multiply by the numerator — 8 × 7 = 56. (8 comes from stopping after step 1, 110 comes from wrongly dividing 80 by 7, and 560 comes from multiplying 80 × 7 without dividing first.)` },
        { difficulty: 'Medium-Hard', question: `A recipe needs 24 minutes of baking time in total. The cook has already baked for ${frac('3','8')} of that time. How many minutes has the cook already baked for?`, checkMode: 'auto', options: ['3', '9', '72', '8'], correctIndex: 1, explanation: `Find ${frac('3','8')} of 24. Step 1: 24 ÷ 8 = 3. Step 2: 3 × 3 = 9. The cook has already baked for 9 minutes. (3 comes from stopping after step 1, 72 comes from multiplying 24 × 3 without dividing first, and 8 comes from wrongly dividing 24 by 3.)` },
        { difficulty: 'Medium-Hard', question: `Which is more: ${frac('2','3')} of 45 or ${frac('3','5')} of 45?`, checkMode: 'auto', options: [`${frac('3','5')} of 45, because ${frac('3','5')} has a bigger numerator than ${frac('2','3')}.`, `They are equal, because both fractions are close to each other in size.`, `${frac('2','3')} of 45, because ${frac('2','3')} of 45 = 30 while ${frac('3','5')} of 45 = 27.`, `${frac('3','5')} of 45, because 5 is a bigger denominator so it gives a bigger share.`], correctIndex: 2, explanation: `${frac('2','3')} of 45: 45 ÷ 3 = 15, then 15 × 2 = 30. ${frac('3','5')} of 45: 45 ÷ 5 = 9, then 9 × 3 = 27. Since 30 is greater than 27, ${frac('2','3')} of 45 is more.` },
        { difficulty: 'Hard', question: `Which statement correctly states the two-step rule for finding a fraction of a whole number, applied to find ${frac('5','6')} of 30?`, checkMode: 'auto', options: [`Multiply the whole number by the denominator, then divide by the numerator — 30 × 6 ÷ 5 = 36.`, `Divide the whole number by the numerator, then multiply by the denominator — 30 ÷ 5 × 6 = 36.`, `Multiply the numerator by the denominator, then divide the whole number by that — 30 ÷ 30 = 1.`, `Divide the whole number by the denominator, then multiply by the numerator — 30 ÷ 6 = 5, then 5 × 5 = 25.`], correctIndex: 3, explanation: `Step 1: divide the whole number by the denominator of the fraction. Step 2: multiply the result by the numerator of the fraction. For ${frac('5','6')} of 30: divide 30 by 6 to get 5, then multiply 5 by 5 to get 25.` },
      ],
      scoreMessages: [
        { minScore: 20, message: "Outstanding! You have a strong, well-rounded grasp of common fractions." },
        { minScore: 15, message: "Great work! Review any missed questions and try again." },
        { minScore: 10, message: "Good effort! Revisit the worked examples on the topics you found tricky." },
        { minScore: 0, message: "Keep going — work through the study guide again and retry this set." },
      ],
    },
  ],
}
