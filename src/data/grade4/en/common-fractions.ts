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

      practiceQuestions: [],
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

      practiceQuestions: [],
      openQuestions: [],
    },
  ],

  topicPractice: [],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — FOUNDATIONS: IDENTIFYING AND NAMING FRACTIONS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: Foundations',
      questions: [
        { difficulty: 'Easy', question: "A pizza is cut into 4 equal slices. Thabo eats 1 slice. What fraction of the pizza did he eat?", answer: "1/4", checkMode: 'auto', correctAnswer: "1/4", explanation: "1 slice eaten out of 4 equal slices. Fraction = 1/4" },
        { difficulty: 'Easy', question: "A chocolate bar has 8 equal pieces. Sipho eats 3 pieces. What fraction did he eat?", answer: "3/8", checkMode: 'auto', correctAnswer: "3/8", explanation: "3 pieces eaten out of 8 equal pieces. Fraction = 3/8" },
        { difficulty: 'Easy', question: "A shape is divided into 6 equal parts and 2 are shaded. What fraction is shaded?", answer: "2/6", checkMode: 'auto', correctAnswer: "2/6", explanation: "2 parts shaded out of 6 equal parts. Fraction = 2/6" },
        { difficulty: 'Easy', question: "A shape is divided into 5 equal parts and 4 are shaded. What fraction is shaded?", answer: "4/5", checkMode: 'auto', correctAnswer: "4/5", explanation: "4 parts shaded out of 5 equal parts. Fraction = 4/5" },
        { difficulty: 'Easy', question: "An orange is split into 10 equal segments. Lerato gives away 3 segments. What fraction did she give away?", answer: "3/10", checkMode: 'auto', correctAnswer: "3/10", explanation: "3 segments given away out of 10 equal segments. Fraction = 3/10" },
        { difficulty: 'Easy', question: "A shape is divided into 3 equal parts and 1 is shaded. What fraction is shaded?", answer: "1/3", checkMode: 'auto', correctAnswer: "1/3", explanation: "1 part shaded out of 3 equal parts. Fraction = 1/3" },
        { difficulty: 'Easy', question: "A shape is divided into 8 equal parts and 5 are shaded. What fraction is shaded?", answer: "5/8", checkMode: 'auto', correctAnswer: "5/8", explanation: "5 parts shaded out of 8 equal parts. Fraction = 5/8" },
        { difficulty: 'Easy', question: "What is the denominator in the fraction 3/8?", answer: "8", checkMode: 'auto', correctAnswer: "8", explanation: "The denominator is the bottom number. It tells us how many equal parts the whole is cut into. In 3/8 the denominator is 8." },
        { difficulty: 'Easy', question: "What is the numerator in the fraction 5/9?", answer: "5", checkMode: 'auto', correctAnswer: "5", explanation: "The numerator is the top number. It tells us how many equal parts we have. In 5/9 the numerator is 5." },
        { difficulty: 'Easy', question: "A shape is divided into 4 equal parts and 3 are shaded. What fraction is shaded?", answer: "3/4", checkMode: 'auto', correctAnswer: "3/4", explanation: "3 parts shaded out of 4 equal parts. Fraction = 3/4" },
        { difficulty: 'Medium', question: "A shape is divided into 12 equal parts and 7 are shaded. What fraction is shaded?", answer: "7/12", checkMode: 'auto', correctAnswer: "7/12", explanation: "7 parts shaded out of 12 equal parts. Fraction = 7/12" },
        { difficulty: 'Medium', question: "A chocolate bar has 10 equal pieces. Amahle eats 6 pieces. What fraction of the bar did she eat?", answer: "6/10", checkMode: 'auto', correctAnswer: "6/10", explanation: "6 pieces eaten out of 10 equal pieces. Fraction = 6/10" },
        { difficulty: 'Medium', question: "A cake is cut into 6 equal slices. 5 slices are eaten. What fraction is left?", answer: "1/6", checkMode: 'auto', correctAnswer: "1/6", explanation: "Total slices = 6. Eaten = 5. Left = 6 minus 5 = 1. Fraction left = 1/6" },
        { difficulty: 'Medium', question: "A pizza is cut into 8 equal slices. 3 slices are eaten. What fraction is left?", answer: "5/8", checkMode: 'auto', correctAnswer: "5/8", explanation: "Total slices = 8. Eaten = 3. Left = 8 minus 3 = 5. Fraction left = 5/8" },
        { difficulty: 'Medium', question: "A bag has 10 sweets. 4 are red and the rest are yellow. What fraction of the sweets are yellow?", answer: "6/10", checkMode: 'auto', correctAnswer: "6/10", explanation: "Total sweets = 10. Red = 4. Yellow = 10 minus 4 = 6. Fraction yellow = 6/10" },
        { difficulty: 'Medium', question: "A tray has 12 muffins. 5 have icing and the rest do not. What fraction have no icing?", answer: "7/12", checkMode: 'auto', correctAnswer: "7/12", explanation: "Total muffins = 12. With icing = 5. Without icing = 12 minus 5 = 7. Fraction = 7/12" },
        { difficulty: 'Medium', question: "A jar has 20 marbles. 6 are red, 9 are blue and the rest are green. What fraction are green?", answer: "5/20", checkMode: 'auto', correctAnswer: "5/20", explanation: "Total = 20. Red = 6, Blue = 9. Green = 20 minus 6 minus 9 = 5. Fraction = 5/20" },
        { difficulty: 'Medium', question: "A packet has 24 sweets. 10 are red, 8 are blue and the rest are green. What fraction are green?", answer: "6/24", checkMode: 'auto', correctAnswer: "6/24", explanation: "Total = 24. Red = 10, Blue = 8. Green = 24 minus 10 minus 8 = 6. Fraction = 6/24" },
        { difficulty: 'Medium', question: "A jar has 16 counters. 5 are red, 6 are blue and the rest are yellow. What fraction are yellow?", answer: "5/16", checkMode: 'auto', correctAnswer: "5/16", explanation: "Total = 16. Red = 5, Blue = 6. Yellow = 16 minus 5 minus 6 = 5. Fraction = 5/16" },
        { difficulty: 'Medium', question: "Write the fraction: 9 out of 20 learners in a class wear glasses.", answer: "9/20", checkMode: 'auto', correctAnswer: "9/20", explanation: "9 learners out of 20 total learners wear glasses. Fraction = 9/20" },
        { difficulty: 'Hard', question: "A farmer has 18 animals. 7 are cows, 4 are sheep and the rest are goats. What fraction of the animals are goats?", answer: "7/18", checkMode: 'auto', correctAnswer: "7/18", explanation: "Total = 18. Cows = 7, Sheep = 4. Goats = 18 minus 7 minus 4 = 7. Fraction = 7/18" },
        { difficulty: 'Hard', question: "A shop has 30 shirts. 12 are blue, 9 are red and the rest are white. What fraction are white?", answer: "9/30", checkMode: 'auto', correctAnswer: "9/30", explanation: "Total = 30. Blue = 12, Red = 9. White = 30 minus 12 minus 9 = 9. Fraction = 9/30" },
        { difficulty: 'Hard', question: "Amahle has 15 stickers. She gives 4 to Thabo and 3 to Lerato. What fraction of her stickers does she have left?", answer: "8/15", checkMode: 'auto', correctAnswer: "8/15", explanation: "Total = 15. Given away = 4 + 3 = 7. Left = 15 minus 7 = 8. Fraction left = 8/15" },
        { difficulty: 'Hard', question: "A box has 25 pencils. 8 are red, 10 are blue and the rest are green. What fraction are green?", answer: "7/25", checkMode: 'auto', correctAnswer: "7/25", explanation: "Total = 25. Red = 8, Blue = 10. Green = 25 minus 8 minus 10 = 7. Fraction = 7/25" },
        { difficulty: 'Hard', question: "Explain, in your own words, what the numerator and denominator of a fraction tell you.", answer: "The numerator (top number) tells you how many equal parts you have. The denominator (bottom number) tells you how many equal parts the whole was divided into. For example, in 3/8, the denominator 8 means the whole is cut into 8 equal pieces, and the numerator 3 means we have 3 of those pieces.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: "Outstanding! You can confidently identify and name fractions of a shape or set." },
        { minScore: 19, message: "Great work! You understand numerators and denominators well — review any missed questions." },
        { minScore: 13, message: "Good effort! Revisit the worked examples on identifying fractions and try again." },
        { minScore: 0, message: "Keep going — work through the study guide again and retry this set." },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — COMPARING, ORDERING AND EQUIVALENT FRACTIONS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Comparing and Equivalent Fractions',
      questions: [
        { difficulty: 'Easy', question: "Which fraction is bigger: 3/7 or 5/7?", answer: "5/7", checkMode: 'auto', correctAnswer: "5/7", explanation: "Same denominator (7), so compare numerators. 5 is greater than 3, so 5/7 is bigger." },
        { difficulty: 'Easy', question: "Which fraction is bigger: 1/4 or 1/8?", answer: "1/4", checkMode: 'auto', correctAnswer: "1/4", explanation: "Both are unit fractions (numerator 1). The smaller the denominator, the bigger the fraction. 4 is less than 8, so 1/4 is bigger." },
        { difficulty: 'Easy', question: "Which fraction is smaller: 2/9 or 6/9?", answer: "2/9", checkMode: 'auto', correctAnswer: "2/9", explanation: "Same denominator (9), so compare numerators. 2 is less than 6, so 2/9 is smaller." },
        { difficulty: 'Easy', question: "Which fraction is smaller: 1/3 or 1/6?", answer: "1/6", checkMode: 'auto', correctAnswer: "1/6", explanation: "Both are unit fractions. The bigger the denominator, the smaller the fraction. 6 is greater than 3, so 1/6 is smaller." },
        { difficulty: 'Easy', question: "Find a fraction equivalent to 1/2.", answer: "2/4", checkMode: 'auto', correctAnswer: "2/4", correctAnswers: ["2/4","3/6","4/8","5/10"], explanation: "Multiply numerator and denominator by the same number, e.g. 1 x 2 = 2 and 2 x 2 = 4, giving 2/4." },
        { difficulty: 'Easy', question: "Find a fraction equivalent to 1/3.", answer: "2/6", checkMode: 'auto', correctAnswer: "2/6", correctAnswers: ["2/6","3/9"], explanation: "Multiply numerator and denominator by the same number, e.g. 1 x 2 = 2 and 3 x 2 = 6, giving 2/6." },
        { difficulty: 'Medium', question: "Order these fractions from smallest to biggest: 4/9, 1/9, 7/9, 3/9", answer: "1/9, 3/9, 4/9, 7/9", checkMode: 'auto', correctAnswer: "1/9,3/9,4/9,7/9", correctAnswers: ["1/9,3/9,4/9,7/9","1/93/94/97/9"], explanation: "Same denominator (9), so order by numerators from smallest to biggest: 1, 3, 4, 7. Order: 1/9, 3/9, 4/9, 7/9" },
        { difficulty: 'Medium', question: "Order these fractions from smallest to biggest: 6/10, 2/10, 9/10, 5/10", answer: "2/10, 5/10, 6/10, 9/10", checkMode: 'auto', correctAnswer: "2/10,5/10,6/10,9/10", correctAnswers: ["2/10,5/10,6/10,9/10"], explanation: "Same denominator (10), so order by numerators: 2, 5, 6, 9. Order: 2/10, 5/10, 6/10, 9/10" },
        { difficulty: 'Medium', question: "Are 2/3 and 4/6 equivalent? Write yes or no.", answer: "Yes", checkMode: 'auto', correctAnswer: "Yes", correctAnswers: ["Yes","yes"], explanation: "Multiply 2/3 by 2/2: 2 x 2 = 4 and 3 x 2 = 6, giving 4/6. Since 4/6 = 4/6, they are equivalent." },
        { difficulty: 'Medium', question: "Are 3/5 and 5/8 equivalent? Write yes or no.", answer: "No", checkMode: 'auto', correctAnswer: "No", correctAnswers: ["No","no"], explanation: "There is no whole number you can multiply both 3 and 5 by to get 5 and 8, so they are not equivalent." },
        { difficulty: 'Medium', question: "Fill in the missing number: 1/4 = ?/12", answer: "3", checkMode: 'auto', correctAnswer: "3", explanation: "The denominator went from 4 to 12 (4 x 3 = 12), so multiply the numerator by 3 too: 1 x 3 = 3." },
        { difficulty: 'Medium', question: "Fill in the missing number: 2/5 = ?/10", answer: "4", checkMode: 'auto', correctAnswer: "4", explanation: "The denominator went from 5 to 10 (5 x 2 = 10), so multiply the numerator by 2 too: 2 x 2 = 4." },
        { difficulty: 'Medium', question: "Fill in the missing number: 1/6 = ?/12", answer: "2", checkMode: 'auto', correctAnswer: "2", explanation: "The denominator went from 6 to 12 (6 x 2 = 12), so multiply the numerator by 2 too: 1 x 2 = 2." },
        { difficulty: 'Medium', question: "Fill in the missing number: 3/8 = ?/16", answer: "6", checkMode: 'auto', correctAnswer: "6", explanation: "The denominator went from 8 to 16 (8 x 2 = 16), so multiply the numerator by 2 too: 3 x 2 = 6." },
        { difficulty: 'Medium', question: "Fill in the missing number: 1/5 = ?/15", answer: "3", checkMode: 'auto', correctAnswer: "3", explanation: "The denominator went from 5 to 15 (5 x 3 = 15), so multiply the numerator by 3 too: 1 x 3 = 3." },
        { difficulty: 'Medium', question: "Find two fractions that are equivalent to 3/4.", answer: "6/8 and 9/12", checkMode: 'auto', correctAnswer: "6/8and9/12", correctAnswers: ["6/8and9/12","9/12and6/8","6/8,9/12","9/12,6/8","6/89/12","9/126/8"], explanation: "Multiply 3/4 by 2/2 to get 6/8, and by 3/3 to get 9/12. Both represent the same amount as 3/4." },
        { difficulty: 'Medium', question: "Order these fractions from biggest to smallest: 1/2, 1/5, 1/3, 1/10", answer: "1/2, 1/3, 1/5, 1/10", checkMode: 'auto', correctAnswer: "1/2,1/3,1/5,1/10", correctAnswers: ["1/2,1/3,1/5,1/10"], explanation: "These are all unit fractions, so the smaller the denominator, the bigger the fraction. Order from biggest to smallest denominator gives: 1/2, 1/3, 1/5, 1/10" },
        { difficulty: 'Hard', question: "Which is bigger: 3/4 or 5/8? Hint: first find an equivalent fraction for 3/4 with denominator 8.", answer: "3/4", checkMode: 'auto', correctAnswer: "3/4", explanation: "3/4 = 6/8 (multiply top and bottom by 2). Compare 6/8 and 5/8 — same denominator, so compare numerators. 6 is greater than 5, so 3/4 is bigger." },
        { difficulty: 'Hard', question: "Which is bigger: 2/5 or 3/10? Hint: first find an equivalent fraction for 2/5 with denominator 10.", answer: "2/5", checkMode: 'auto', correctAnswer: "2/5", explanation: "2/5 = 4/10 (multiply top and bottom by 2). Compare 4/10 and 3/10 — same denominator, so compare numerators. 4 is greater than 3, so 2/5 is bigger." },
        { difficulty: 'Hard', question: "Fill in the missing number: 4/5 = ?/10", answer: "8", checkMode: 'auto', correctAnswer: "8", explanation: "The denominator went from 5 to 10 (5 x 2 = 10), so multiply the numerator by 2 too: 4 x 2 = 8." },
        { difficulty: 'Hard', question: "Fill in the missing number: 2/3 = ?/9", answer: "6", checkMode: 'auto', correctAnswer: "6", explanation: "The denominator went from 3 to 9 (3 x 3 = 9), so multiply the numerator by 3 too: 2 x 3 = 6." },
        { difficulty: 'Hard', question: "Sipho says 1/3 and 3/9 are equivalent. Is he correct? Explain using multiplication.", answer: "Yes, Sipho is correct. Multiplying 1/3 by 3/3 gives 1 x 3 = 3 and 3 x 3 = 9, so 1/3 = 3/9. Since both the numerator and denominator were multiplied by the same number (3), the fractions represent the same amount.", checkMode: 'auto', correctAnswer: "Yes", correctAnswers: ["Yes","yes"], explanation: "Multiplying 1/3 by 3/3 gives 3/9, so they are equivalent." },
        { difficulty: 'Hard', question: "Lerato says 2/6 and 3/9 are equivalent because they both simplify to 1/3. Is she correct? Write yes or no.", answer: "Yes", checkMode: 'auto', correctAnswer: "Yes", correctAnswers: ["Yes","yes"], explanation: "2/6 simplifies to 1/3 (divide top and bottom by 2). 3/9 also simplifies to 1/3 (divide top and bottom by 3). Since both simplify to the same fraction, they are equivalent." },
        { difficulty: 'Hard', question: "Order these fractions from smallest to biggest: 3/4, 1/4, 1/2, 2/4", answer: "1/4, 1/2, 2/4, 3/4", checkMode: 'auto', correctAnswer: "1/4,1/2,2/4,3/4", correctAnswers: ["1/4,2/4,2/4,3/4","1/4,1/2,2/4,3/4"], explanation: "Rewrite 1/2 as 2/4 so all fractions share denominator 4: 1/4, 2/4, 2/4, 3/4. Since 1/2 = 2/4, ordering by numerator (with the equal pair together) from smallest to biggest gives 1/4, 1/2 (=2/4), 2/4, 3/4." },
        { difficulty: 'Hard', question: "Explain why 4/8 and 1/2 are equivalent fractions without drawing a picture.", answer: "4/8 and 1/2 are equivalent because if you divide both the numerator and denominator of 4/8 by 4, you get 1/2 (4 divided by 4 = 1, and 8 divided by 4 = 2). Dividing the top and bottom of a fraction by the same number does not change its value, so 4/8 and 1/2 represent the same amount.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: "Outstanding! You have mastered comparing, ordering and finding equivalent fractions." },
        { minScore: 19, message: "Great work! Review any missed questions and try again." },
        { minScore: 13, message: "Good effort! Revisit the worked examples on comparing and equivalent fractions." },
        { minScore: 0, message: "Keep going — work through the study guide again and retry this set." },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — FRACTION OF A WHOLE NUMBER AND WORD PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Fraction of a Whole Number',
      questions: [
        { difficulty: 'Easy', question: "Find 1/2 of 10.", answer: "5", checkMode: 'auto', correctAnswer: "5", explanation: "Step 1: Divide by the denominator: 10 / 2 = 5. Step 2: Multiply by the numerator: 5 x 1 = 5." },
        { difficulty: 'Easy', question: "Find 1/2 of 20.", answer: "10", checkMode: 'auto', correctAnswer: "10", explanation: "Step 1: 20 / 2 = 10. Step 2: 10 x 1 = 10." },
        { difficulty: 'Easy', question: "Find 1/4 of 20.", answer: "5", checkMode: 'auto', correctAnswer: "5", explanation: "Step 1: 20 / 4 = 5. Step 2: 5 x 1 = 5." },
        { difficulty: 'Easy', question: "Find 1/3 of 18.", answer: "6", checkMode: 'auto', correctAnswer: "6", explanation: "Step 1: 18 / 3 = 6. Step 2: 6 x 1 = 6." },
        { difficulty: 'Easy', question: "Find 1/5 of 25.", answer: "5", checkMode: 'auto', correctAnswer: "5", explanation: "Step 1: 25 / 5 = 5. Step 2: 5 x 1 = 5." },
        { difficulty: 'Medium', question: "Find 3/4 of 24.", answer: "18", checkMode: 'auto', correctAnswer: "18", explanation: "Step 1: 24 / 4 = 6. Step 2: 6 x 3 = 18." },
        { difficulty: 'Medium', question: "Find 2/5 of 25.", answer: "10", checkMode: 'auto', correctAnswer: "10", explanation: "Step 1: 25 / 5 = 5. Step 2: 5 x 2 = 10." },
        { difficulty: 'Medium', question: "Find 3/8 of 40.", answer: "15", checkMode: 'auto', correctAnswer: "15", explanation: "Step 1: 40 / 8 = 5. Step 2: 5 x 3 = 15." },
        { difficulty: 'Medium', question: "Find 2/3 of 30.", answer: "20", checkMode: 'auto', correctAnswer: "20", explanation: "Step 1: 30 / 3 = 10. Step 2: 10 x 2 = 20." },
        { difficulty: 'Medium', question: "Find 5/6 of 24.", answer: "20", checkMode: 'auto', correctAnswer: "20", explanation: "Step 1: 24 / 6 = 4. Step 2: 4 x 5 = 20." },
        { difficulty: 'Medium', question: "Find 3/10 of 50.", answer: "15", checkMode: 'auto', correctAnswer: "15", explanation: "Step 1: 50 / 10 = 5. Step 2: 5 x 3 = 15." },
        { difficulty: 'Medium', question: "Find 3/5 of 50.", answer: "30", checkMode: 'auto', correctAnswer: "30", explanation: "Step 1: 50 / 5 = 10. Step 2: 10 x 3 = 30." },
        { difficulty: 'Medium', question: "A class has 24 learners. One quarter of them wear glasses. How many learners wear glasses?", answer: "6", checkMode: 'auto', correctAnswer: "6", explanation: "Find 1/4 of 24. Step 1: 24 / 4 = 6. Step 2: 6 x 1 = 6. 6 learners wear glasses." },
        { difficulty: 'Medium', question: "A farmer has 30 chickens. Two thirds of them are hens. How many hens does the farmer have?", answer: "20", checkMode: 'auto', correctAnswer: "20", explanation: "Find 2/3 of 30. Step 1: 30 / 3 = 10. Step 2: 10 x 2 = 20. The farmer has 20 hens." },
        { difficulty: 'Medium', question: "A shop has 40 loaves of bread. Three eighths were sold in the morning. How many loaves were sold?", answer: "15", checkMode: 'auto', correctAnswer: "15", explanation: "Find 3/8 of 40. Step 1: 40 / 8 = 5. Step 2: 5 x 3 = 15. 15 loaves were sold." },
        { difficulty: 'Medium', question: "Thabo has R40. He spends 1/5 of it on sweets. How much money does he spend?", answer: "R8", checkMode: 'auto', correctAnswer: "8", correctAnswers: ["8","R8"], explanation: "Find 1/5 of 40. Step 1: 40 / 5 = 8. Step 2: 8 x 1 = 8. He spends R8." },
        { difficulty: 'Hard', question: "A school has 100 learners. Three quarters of them walk to school. How many learners walk to school?", answer: "75", checkMode: 'auto', correctAnswer: "75", explanation: "Find 3/4 of 100. Step 1: 100 / 4 = 25. Step 2: 25 x 3 = 75. 75 learners walk to school." },
        { difficulty: 'Hard', question: "A farm has 60 animals. Two thirds are cows and the rest are goats. How many cows are there?", answer: "40", checkMode: 'auto', correctAnswer: "40", explanation: "Find 2/3 of 60. Step 1: 60 / 3 = 20. Step 2: 20 x 2 = 40. There are 40 cows." },
        { difficulty: 'Hard', question: "A farm has 60 animals. Two thirds are cows and the rest are goats. How many goats are there?", answer: "20", checkMode: 'auto', correctAnswer: "20", explanation: "Cows = 2/3 of 60. Step 1: 60/3=20. Step 2: 20x2=40 cows. Goats = 60 minus 40 = 20." },
        { difficulty: 'Hard', question: "A bakery makes 80 cupcakes. Seven tenths of them are chocolate flavoured. How many chocolate cupcakes are there?", answer: "56", checkMode: 'auto', correctAnswer: "56", explanation: "Find 7/10 of 80. Step 1: 80 / 10 = 8. Step 2: 8 x 7 = 56. There are 56 chocolate cupcakes." },
        { difficulty: 'Hard', question: "A netball team scores 40 goals in a season. Five eighths of the goals were scored by Amahle. How many goals did Amahle score?", answer: "25", checkMode: 'auto', correctAnswer: "25", explanation: "Find 5/8 of 40. Step 1: 40 / 8 = 5. Step 2: 5 x 5 = 25. Amahle scored 25 goals." },
        { difficulty: 'Hard', question: "A library has 90 books. Two thirds of them are fiction. How many books are fiction?", answer: "60", checkMode: 'auto', correctAnswer: "60", explanation: "Find 2/3 of 90. Step 1: 90 / 3 = 30. Step 2: 30 x 2 = 60. There are 60 fiction books." },
        { difficulty: 'Hard', question: "A water tank holds 100 litres when full. It is currently 1/2 full. Then 1/4 of the full tank amount is added. How many litres are in the tank now?", answer: "75", checkMode: 'auto', correctAnswer: "75", explanation: "Half full = 1/2 of 100 = 50 litres. Add 1/4 of 100 = 25 litres. Total = 50 + 25 = 75 litres." },
        { difficulty: 'Hard', question: "A class of 32 learners is asked what their favourite sport is. Three quarters choose soccer and the rest choose netball. How many learners chose netball?", answer: "8", checkMode: 'auto', correctAnswer: "8", explanation: "Soccer = 3/4 of 32. Step 1: 32/4=8. Step 2: 8x3=24 chose soccer. Netball = 32 minus 24 = 8." },
        { difficulty: 'Hard', question: "Explain, in your own words, the two-step rule for finding a fraction of a whole number.", answer: "Step 1: Divide the whole number by the denominator of the fraction. Step 2: Multiply the result by the numerator of the fraction. For example, to find 3/4 of 24, first divide 24 by 4 to get 6, then multiply 6 by 3 to get 18.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: "Outstanding! You can confidently find a fraction of a whole number and solve word problems." },
        { minScore: 19, message: "Great work! Review any missed questions and try again." },
        { minScore: 13, message: "Good effort! Revisit the divide-then-multiply worked examples." },
        { minScore: 0, message: "Keep going — work through the study guide again and retry this set." },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP AND COMBINED PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Multi-Step and Combined Problems',
      questions: [
        { difficulty: 'Easy', question: "Calculate: 2/7 + 3/7", answer: "5/7", checkMode: 'auto', correctAnswer: "5/7", explanation: "Same denominator (7) — keep it. Add numerators: 2 + 3 = 5. Answer = 5/7" },
        { difficulty: 'Easy', question: "Calculate: 3/8 + 4/8", answer: "7/8", checkMode: 'auto', correctAnswer: "7/8", explanation: "Same denominator (8) — keep it. Add numerators: 3 + 4 = 7. Answer = 7/8" },
        { difficulty: 'Easy', question: "Calculate: 1/5 + 2/5", answer: "3/5", checkMode: 'auto', correctAnswer: "3/5", explanation: "Same denominator (5) — keep it. Add numerators: 1 + 2 = 3. Answer = 3/5" },
        { difficulty: 'Easy', question: "Calculate: 1/6 + 3/6", answer: "4/6", checkMode: 'auto', correctAnswer: "4/6", explanation: "Same denominator (6) — keep it. Add numerators: 1 + 3 = 4. Answer = 4/6" },
        { difficulty: 'Medium', question: "Calculate: 3/10 + 4/10 + 2/10", answer: "9/10", checkMode: 'auto', correctAnswer: "9/10", explanation: "Same denominator (10) — keep it. Add all numerators: 3 + 4 + 2 = 9. Answer = 9/10" },
        { difficulty: 'Medium', question: "Calculate: 2/9 + 3/9 + 1/9", answer: "6/9", checkMode: 'auto', correctAnswer: "6/9", explanation: "Same denominator (9) — keep it. Add all numerators: 2 + 3 + 1 = 6. Answer = 6/9" },
        { difficulty: 'Medium', question: "Calculate: 1/8 + 2/8 + 3/8", answer: "6/8", checkMode: 'auto', correctAnswer: "6/8", explanation: "Same denominator (8) — keep it. Add all numerators: 1 + 2 + 3 = 6. Answer = 6/8" },
        { difficulty: 'Medium', question: "Amahle ate 2/6 of a cake in the morning and 3/6 in the afternoon. What fraction of the cake did she eat altogether?", answer: "5/6", checkMode: 'auto', correctAnswer: "5/6", explanation: "Add the fractions: 2/6 + 3/6. Same denominator, add numerators: 2 + 3 = 5. She ate 5/6 altogether." },
        { difficulty: 'Medium', question: "Amahle ate 2/6 of a cake in the morning and 3/6 in the afternoon (5/6 altogether). What fraction of the cake is left?", answer: "1/6", checkMode: 'auto', correctAnswer: "1/6", explanation: "A whole cake = 6/6. Amahle ate 2/6 + 3/6 = 5/6 altogether. Left over = 6/6 minus 5/6 = 1/6." },
        { difficulty: 'Medium', question: "Sipho painted 1/8 of a fence on Monday and 3/8 on Tuesday. What fraction of the fence has he painted in total?", answer: "4/8", checkMode: 'auto', correctAnswer: "4/8", explanation: "Add the fractions: 1/8 + 3/8. Same denominator, add numerators: 1 + 3 = 4. He painted 4/8 in total." },
        { difficulty: 'Medium', question: "Sipho painted 1/8 of a fence on Monday and 3/8 on Tuesday (4/8 in total). What fraction still needs to be painted?", answer: "4/8", checkMode: 'auto', correctAnswer: "4/8", explanation: "Whole fence = 8/8. Sipho has painted 1/8 + 3/8 = 4/8. Remaining = 8/8 minus 4/8 = 4/8." },
        { difficulty: 'Medium', question: "A pizza is cut into 10 equal slices. Lerato eats 4/10 and her brother eats 3/10. What fraction of the pizza did they eat together?", answer: "7/10", checkMode: 'auto', correctAnswer: "7/10", explanation: "Add the fractions: 4/10 + 3/10. Same denominator, add numerators: 4 + 3 = 7. Together they ate 7/10." },
        { difficulty: 'Hard', question: "A pizza is cut into 10 equal slices. Lerato eats 4/10 and her brother eats 3/10. What fraction of the pizza is left over after they have both eaten?", answer: "3/10", checkMode: 'auto', correctAnswer: "3/10", explanation: "Together they ate 4/10 + 3/10 = 7/10. Whole pizza = 10/10. Left over = 10/10 minus 7/10 = 3/10." },
        { difficulty: 'Hard', question: "A school has 32 learners in a class. Three quarters choose soccer as their favourite sport. Of the learners who chose soccer, half also play cricket. How many learners play both soccer and cricket?", answer: "12", checkMode: 'auto', correctAnswer: "12", explanation: "Soccer learners = 3/4 of 32. Step 1: 32/4=8. Step 2: 8x3=24 play soccer. Half of 24 also play cricket: 24/2=12." },
        { difficulty: 'Hard', question: "A tank holds 80 litres. It starts 3/4 full, then 1/8 of the full tank capacity leaks out. How many litres are left in the tank?", answer: "50", checkMode: 'auto', correctAnswer: "50", explanation: "3/4 of 80: Step 1: 80/4=20. Step 2: 20x3=60 litres to start. Leak = 1/8 of 80: Step 1: 80/8=10. Step 2: 10x1=10 litres leak out. Remaining = 60 minus 10 = 50 litres." },
        { difficulty: 'Hard', question: "Thabo ate 1/4 of a chocolate bar with 12 pieces on Monday, and 3/12 more on Tuesday. What fraction of the bar has he eaten in total? Hint: rewrite 1/4 with denominator 12 first.", answer: "6/12", checkMode: 'auto', correctAnswer: "6/12", correctAnswers: ["6/12","1/2"], explanation: "1/4 = 3/12 (multiply top and bottom by 3). Add: 3/12 + 3/12 = 6/12. He has eaten 6/12 in total." },
        { difficulty: 'Hard', question: "A farmer has 45 sheep. Two thirds are ewes and the rest are rams. Of the ewes, 1/5 have lambs. How many ewes have lambs?", answer: "6", checkMode: 'auto', correctAnswer: "6", explanation: "Ewes = 2/3 of 45. Step 1: 45/3=15. Step 2: 15x2=30 ewes. Ewes with lambs = 1/5 of 30. Step 1: 30/5=6. Step 2: 6x1=6." },
        { difficulty: 'Hard', question: "A recipe uses 2/8 cup of sugar and 3/8 cup of flour, then 1/8 cup more sugar is added. What fraction of a cup of sugar is used in total?", answer: "3/8", checkMode: 'auto', correctAnswer: "3/8", explanation: "Sugar only: 2/8 + 1/8. Same denominator, add numerators: 2 + 1 = 3. Total sugar = 3/8 cup (the flour, 3/8, is a separate ingredient and is not added to the sugar)." },
        { difficulty: 'Hard', question: "Lerato says that 3/4 of 24 gives the same answer as 24 divided by 4 and then multiplied by 3. Is she correct? Explain using the calculation.", answer: "Yes, Lerato is correct. To find 3/4 of 24, you divide 24 by the denominator (4) to get 6, then multiply by the numerator (3) to get 18. This is exactly \"24 divided by 4, then multiplied by 3\", so both methods describe the same calculation and give the same answer, 18.", checkMode: 'self' },
        { difficulty: 'Hard', question: "Sipho says that because 2/4 and 1/2 are equivalent fractions, finding 2/4 of a number always gives the same answer as finding 1/2 of that number. Is he correct? Check using the number 20.", answer: "Yes, Sipho is correct. 1/2 of 20: divide 20 by 2 to get 10, multiply by 1 to get 10. 2/4 of 20: divide 20 by 4 to get 5, multiply by 2 to get 10. Both give 10, confirming that equivalent fractions of the same number always give the same answer.", checkMode: 'self' },
        { difficulty: 'Hard', question: "Explain why you can only add fractions directly by adding the numerators when the denominators are the same.", answer: "When two fractions have the same denominator, the whole has been divided into the same size of equal parts for both fractions. This means the pieces can simply be counted together (added), so you only need to add the numerators and keep the denominator the same. If the denominators were different, the pieces would be different sizes, and adding the numerators directly would not give a correct answer.", checkMode: 'self' },
        { difficulty: 'Hard', question: "A ribbon is cut into 12 equal pieces. Amahle uses 1/12 for a bow, 4/12 for a wrapping decoration, and 2/12 for a label. What fraction of the ribbon has she used in total?", answer: "7/12", checkMode: 'auto', correctAnswer: "7/12", explanation: "Add the fractions: 1/12 + 4/12 + 2/12. Same denominator, add numerators: 1 + 4 + 2 = 7. She has used 7/12 in total." },
        { difficulty: 'Hard', question: "A ribbon is cut into 12 equal pieces. Amahle uses 1/12 for a bow, 4/12 for a wrapping decoration, and 2/12 for a label (7/12 in total). What fraction of the ribbon does she have left?", answer: "5/12", checkMode: 'auto', correctAnswer: "5/12", explanation: "Amahle used 1/12 + 4/12 + 2/12 = 7/12. Whole ribbon = 12/12. Left over = 12/12 minus 7/12 = 5/12." },
        { difficulty: 'Hard', question: "A school has 50 learners in Grade 4. Two fifths walk to school, three tenths cycle, and the rest are dropped off by car. What fraction of learners are dropped off by car? Hint: rewrite 2/5 with denominator 10 first.", answer: "3/10", checkMode: 'auto', correctAnswer: "3/10", explanation: "2/5 = 4/10 (multiply top and bottom by 2). Walk + cycle = 4/10 + 3/10 = 7/10. Dropped off by car = 10/10 minus 7/10 = 3/10." },
        { difficulty: 'Hard', question: "Explain how you would check whether two fractions with different denominators, such as 2/3 and 5/8, are equivalent.", answer: "To check if two fractions with different denominators are equivalent, find a common denominator by converting both fractions so they have the same denominator, then compare the numerators. For 2/3 and 5/8, one way is to try multiplying to see if there is a whole number that makes both denominators match, or to convert both to have denominator 24 (2/3 = 16/24 and 5/8 = 15/24). Since 16/24 does not equal 15/24, the fractions are not equivalent.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: "Outstanding! You have mastered multi-step and combined fraction problems." },
        { minScore: 19, message: "Great work! Review any missed questions and try again." },
        { minScore: 13, message: "Good effort! Revisit the multi-step worked examples." },
        { minScore: 0, message: "Keep going — work through the study guide again and retry this set." },
      ],
    },
  ],
}
