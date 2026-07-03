import type { TopicData } from './numbers-operations'

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

      practiceQuestions: [],
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

      practiceQuestions: [],
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

      practiceQuestions: [],
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

      practiceQuestions: [],
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

      practiceQuestions: [],
    },
  ],

  topicPractice: [

    // ── SECTION 1: WHAT IS A FRACTION? ───────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'A chocolate bar is divided into 6 equal pieces. Sipho eats 2 pieces.\n\n' +
        'Write the fraction of the chocolate bar he ate.',
      answer: '2/6',
      correctAnswer: '2/6',
      explanation:
        'Sipho ate 2 pieces out of 6 equal pieces total.\n\n' +
        'The numerator (top number) = pieces eaten = 2.\n' +
        'The denominator (bottom number) = total equal pieces = 6.\n\n' +
        'Fraction = 2/6',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Write the fraction for each of the following:\n\n' +
        'a) 3 out of 8 equal parts are shaded\n' +
        'b) 5 out of 9 equal parts are shaded\n' +
        'c) 1 out of 4 equal parts are shaded',
      answer: 'a) 3/8    b) 5/9    c) 1/4',
      parts: [
        {
          label: 'a) 3 out of 8 equal parts are shaded',
          correctAnswer: '3/8',
          explanation:
            '3 parts are shaded out of 8 equal parts.\n' +
            'Numerator = 3 (shaded), denominator = 8 (total equal parts).\n' +
            'Fraction = 3/8',
        },
        {
          label: 'b) 5 out of 9 equal parts are shaded',
          correctAnswer: '5/9',
          explanation:
            '5 parts are shaded out of 9 equal parts.\n' +
            'Numerator = 5 (shaded), denominator = 9 (total equal parts).\n' +
            'Fraction = 5/9',
        },
        {
          label: 'c) 1 out of 4 equal parts are shaded',
          correctAnswer: '1/4',
          explanation:
            '1 part is shaded out of 4 equal parts.\n' +
            'Numerator = 1 (shaded), denominator = 4 (total equal parts).\n' +
            'Fraction = 1/4',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A bag has 20 marbles. 7 are red, 5 are blue and the rest are green.\n\n' +
        'a) What fraction are red?\n' +
        'b) What fraction are blue?\n' +
        'c) What fraction are green?',
      answer: 'a) 7/20    b) 5/20    c) 8/20',
      parts: [
        {
          label: 'a) Fraction that are red',
          correctAnswer: '7/20',
          explanation:
            '7 out of 20 marbles are red.\n' +
            'Fraction = 7/20',
        },
        {
          label: 'b) Fraction that are blue',
          correctAnswer: '5/20',
          explanation:
            '5 out of 20 marbles are blue.\n' +
            'Fraction = 5/20',
        },
        {
          label: 'c) Fraction that are green',
          correctAnswer: '8/20',
          explanation:
            'Total marbles = 20. Red = 7, Blue = 5.\n' +
            'Green = 20 − 7 − 5 = 8.\n' +
            'Fraction = 8/20',
        },
      ],
    },

    // ── SECTION 2: COMPARING AND ORDERING FRACTIONS ──────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Which fraction is bigger?\n\n3/7  or  5/7',
      answer: '5/7',
      correctAnswer: '5/7',
      explanation:
        'Both fractions have the same denominator (7), so compare the numerators.\n\n' +
        '5 > 3, so 5/7 is the bigger fraction.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Order these fractions from smallest to biggest:\n\n' +
        '4/9,  1/9,  7/9,  3/9',
      answer: '1/9,  3/9,  4/9,  7/9',
      correctAnswer: '1/9,3/9,4/9,7/9',
      correctAnswers: ['1/9,3/9,4/9,7/9', '1/93/94/97/9'],
      explanation:
        'All fractions have the same denominator (9), so order by the numerators from smallest to biggest: 1, 3, 4, 7.\n\n' +
        'Order: 1/9, 3/9, 4/9, 7/9',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Which is bigger: 1/4 or 1/8?\n\n' +
        'Explain why without drawing a picture.',
      answer:
        '1/4 is bigger.\n\n' +
        'When the numerators are the same (both are 1), the fraction with the smaller denominator is the bigger fraction.\n\n' +
        'Dividing something into 4 equal parts gives larger parts than dividing it into 8 equal parts.\n' +
        'So each 1/4 piece is bigger than each 1/8 piece.',
    },

    // ── SECTION 3: EQUIVALENT FRACTIONS ─────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Find two fractions that are equivalent to 1/2.',
      answer: '2/4 and 3/6',
      correctAnswers: [
        '2/4and3/6', '3/6and2/4',
        '2/4,3/6',   '3/6,2/4',
        '2/43/6',    '3/62/4',
      ],
      explanation:
        'To find equivalent fractions, multiply the numerator AND denominator by the same number.\n\n' +
        '1/2 × 2/2 = 2/4\n' +
        '1/2 × 3/3 = 3/6\n\n' +
        'Both 2/4 and 3/6 are equivalent to 1/2 because they all represent the same amount.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Fill in the missing numbers:\n\n' +
        'a) 1/3 = □/9\n' +
        'b) 2/5 = □/10\n' +
        'c) 3/4 = □/12',
      answer: 'a) 3    b) 4    c) 9',
      parts: [
        {
          label: 'a) 1/3 = □/9',
          correctAnswer: '3',
          explanation:
            'The denominator went from 3 to 9. 3 × 3 = 9, so we multiplied by 3.\n' +
            'Multiply the numerator by the same number: 1 × 3 = 3.\n' +
            '1/3 = 3/9',
        },
        {
          label: 'b) 2/5 = □/10',
          correctAnswer: '4',
          explanation:
            'The denominator went from 5 to 10. 5 × 2 = 10, so we multiplied by 2.\n' +
            'Multiply the numerator by the same number: 2 × 2 = 4.\n' +
            '2/5 = 4/10',
        },
        {
          label: 'c) 3/4 = □/12',
          correctAnswer: '9',
          explanation:
            'The denominator went from 4 to 12. 4 × 3 = 12, so we multiplied by 3.\n' +
            'Multiply the numerator by the same number: 3 × 3 = 9.\n' +
            '3/4 = 9/12',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Thabo says 2/3 and 4/9 are equivalent. Is he correct?\n\n' +
        'Show your working to prove it.',
      answer:
        'No, Thabo is incorrect.\n\n' +
        'Step 1: Make the denominators the same by multiplying 2/3 by 3/3:\n' +
        '2 × 3 = 6  and  3 × 3 = 9  →  2/3 = 6/9\n\n' +
        'Step 2: Compare: 6/9 ≠ 4/9\n\n' +
        '2/3 is equivalent to 6/9, not 4/9.\n' +
        'So 2/3 and 4/9 are NOT equivalent.',
    },

    // ── SECTION 4: FINDING A FRACTION OF A WHOLE NUMBER ─────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Find 1/3 of 18.',
      answer: '6',
      correctAnswer: '6',
      explanation:
        'Step 1: Divide by the denominator: 18 ÷ 3 = 6\n' +
        'Step 2: Multiply by the numerator: 6 × 1 = 6\n\n' +
        '1/3 of 18 = 6',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Calculate the following:\n\n' +
        'a) 1/4 of 32\n' +
        'b) 2/5 of 25\n' +
        'c) 3/8 of 40',
      answer: 'a) 8    b) 10    c) 15',
      parts: [
        {
          label: 'a) 1/4 of 32',
          correctAnswer: '8',
          explanation:
            'Step 1: Divide by the denominator: 32 ÷ 4 = 8\n' +
            'Step 2: Multiply by the numerator: 8 × 1 = 8\n' +
            '1/4 of 32 = 8',
        },
        {
          label: 'b) 2/5 of 25',
          correctAnswer: '10',
          explanation:
            'Step 1: Divide by the denominator: 25 ÷ 5 = 5\n' +
            'Step 2: Multiply by the numerator: 5 × 2 = 10\n' +
            '2/5 of 25 = 10',
        },
        {
          label: 'c) 3/8 of 40',
          correctAnswer: '15',
          explanation:
            'Step 1: Divide by the denominator: 40 ÷ 8 = 5\n' +
            'Step 2: Multiply by the numerator: 5 × 3 = 15\n' +
            '3/8 of 40 = 15',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A school has 120 learners. Three quarters walk to school and the rest come by bus.\n\n' +
        'a) How many learners walk to school?\n' +
        'b) How many come by bus?\n' +
        'c) On a rainy day half of the bus learners get a lift instead. How many learners come by bus on that day?',
      answer: 'a) 90    b) 30    c) 15',
      parts: [
        {
          label: 'a) How many learners walk to school?',
          correctAnswer: '90',
          explanation:
            'Find 3/4 of 120.\n' +
            'Step 1: Divide by the denominator: 120 ÷ 4 = 30\n' +
            'Step 2: Multiply by the numerator: 30 × 3 = 90\n' +
            '90 learners walk to school.',
        },
        {
          label: 'b) How many come by bus?',
          correctAnswer: '30',
          explanation:
            'Total learners − walkers = bus learners.\n' +
            '120 − 90 = 30\n' +
            '30 learners come by bus.',
        },
        {
          label: 'c) How many come by bus on the rainy day?',
          correctAnswer: '15',
          explanation:
            'Half of the bus learners get a lift, so half still come by bus.\n' +
            '1/2 of 30 = 30 ÷ 2 = 15\n' +
            '15 learners come by bus on the rainy day.',
        },
      ],
    },

    // ── SECTION 5: ADDING FRACTIONS WITH THE SAME DENOMINATOR ───────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Calculate:\n\n3/8 + 4/8',
      answer: '7/8',
      correctAnswer: '7/8',
      explanation:
        'Both fractions have the same denominator (8), so keep the denominator.\n' +
        'Add the numerators: 3 + 4 = 7\n\n' +
        '3/8 + 4/8 = 7/8',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Calculate the following:\n\n' +
        'a) 2/9 + 5/9\n' +
        'b) 1/6 + 3/6 + 1/6\n' +
        'c) 4/10 + 3/10',
      answer: 'a) 7/9    b) 5/6    c) 7/10',
      parts: [
        {
          label: 'a) 2/9 + 5/9',
          correctAnswer: '7/9',
          explanation:
            'Same denominator (9) — keep it.\n' +
            'Add numerators: 2 + 5 = 7\n' +
            '2/9 + 5/9 = 7/9',
        },
        {
          label: 'b) 1/6 + 3/6 + 1/6',
          correctAnswer: '5/6',
          explanation:
            'Same denominator (6) — keep it.\n' +
            'Add all numerators: 1 + 3 + 1 = 5\n' +
            '1/6 + 3/6 + 1/6 = 5/6',
        },
        {
          label: 'c) 4/10 + 3/10',
          correctAnswer: '7/10',
          explanation:
            'Same denominator (10) — keep it.\n' +
            'Add numerators: 4 + 3 = 7\n' +
            '4/10 + 3/10 = 7/10',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Lerato ate 2/8 of a pizza for lunch and 3/8 for dinner. Her brother ate 1/8 for lunch.\n\n' +
        'a) What fraction did Lerato eat altogether?\n' +
        'b) What fraction did her brother eat?\n' +
        'c) What fraction of the pizza is left?\n' +
        'd) Who ate more and by how much?',
      answer: 'a) 5/8    b) 1/8    c) 2/8    d) Lerato ate more by 4/8',
      parts: [
        {
          label: 'a) What fraction did Lerato eat altogether?',
          correctAnswer: '5/8',
          explanation:
            'Lerato ate 2/8 + 3/8.\n' +
            'Same denominator (8) — add numerators: 2 + 3 = 5\n' +
            'Lerato ate 5/8 altogether.',
        },
        {
          label: 'b) What fraction did her brother eat?',
          correctAnswer: '1/8',
          explanation:
            'Her brother only ate 1/8 for lunch.\n' +
            'Fraction = 1/8',
        },
        {
          label: 'c) What fraction of the pizza is left?',
          correctAnswer: '2/8',
          explanation:
            'Total eaten = Lerato (5/8) + brother (1/8) = 6/8\n' +
            'Whole pizza = 8/8\n' +
            'Left over = 8/8 − 6/8 = 2/8',
        },
        {
          label: 'd) Who ate more and by how much?',
          correctAnswer: 'Lerato by 4/8',
          correctAnswers: [
            'Lerato by 4/8',
            'Lerato ate more by 4/8',
            'Lerato more by 4/8',
            'Lerato 4/8 more',
            'Lerato 4/8',
          ],
          explanation:
            'Compare: Lerato ate 5/8, brother ate 1/8.\n' +
            '5/8 − 1/8 = 4/8\n' +
            'Lerato ate more by 4/8.',
        },
      ],
    },

  ],

  scoreMessages: [
    {
      minScore: 30,
      message:
        'Outstanding! 30 out of 30 — you have mastered Common Fractions. Every single part was correct. You should be very proud of yourself! 🌟',
    },
    {
      minScore: 24,
      message:
        'Excellent work! You have a strong understanding of fractions. Review any parts you missed and you will be at full marks in no time.',
    },
    {
      minScore: 18,
      message:
        'Good effort! You are making solid progress with fractions. Go back over the sections where you lost marks and try those questions again.',
    },
    {
      minScore: 0,
      message:
        'Keep going — fractions take practice! Work through the study guide again, focus on the worked examples, and then give the questions another try. You can do it!',
    },
  ],
}
