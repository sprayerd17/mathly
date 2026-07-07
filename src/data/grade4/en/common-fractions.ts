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
    // SET 1 (20 Qs) — 6 skill blocks:
    // 0-3 naming, 4-7 sets/remainder, 8-11 comparing, 12-15 equivalence,
    // 16-18 fraction of a number, 19 capstone (numerator/denominator meaning)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: "A pizza is cut into 4 equal slices. Thabo eats 1 slice. What fraction of the pizza did he eat?", answer: "1/4", checkMode: 'auto', correctAnswer: "1/4", explanation: "1 slice eaten out of 4 equal slices. Fraction = 1/4" },
        { difficulty: 'Easy', question: "A shape is divided into 6 equal parts and 2 are shaded. What fraction is shaded?", answer: "2/6", checkMode: 'auto', correctAnswer: "2/6", explanation: "2 parts shaded out of 6 equal parts. Fraction = 2/6" },
        { difficulty: 'Easy', question: "What is the denominator in the fraction 3/8?", answer: "8", checkMode: 'auto', correctAnswer: "8", explanation: "The denominator is the bottom number. It tells us how many equal parts the whole is cut into. In 3/8 the denominator is 8." },
        { difficulty: 'Easy', question: "A ribbon is shared equally among 5 friends so that each friend gets one piece. What fraction of the ribbon does each friend get?", answer: "1/5", checkMode: 'auto', correctAnswer: "1/5", explanation: "The ribbon is split into 5 equal pieces (denominator 5) and each friend gets 1 piece (numerator 1). Fraction = 1/5" },
        { difficulty: 'Easy-Medium', question: "A cake is cut into 6 equal slices. 5 slices are eaten. What fraction is left?", answer: "1/6", checkMode: 'auto', correctAnswer: "1/6", explanation: "Total slices = 6. Eaten = 5. Left = 6 minus 5 = 1. Fraction left = 1/6" },
        { difficulty: 'Easy-Medium', question: "A jar has 20 marbles. 6 are red, 9 are blue and the rest are green. What fraction are green?", answer: "5/20", checkMode: 'auto', correctAnswer: "5/20", explanation: "Total = 20. Red = 6, Blue = 9. Green = 20 minus 6 minus 9 = 5. Fraction = 5/20" },
        { difficulty: 'Easy-Medium', question: "A netball squad has 18 players. 10 are chosen to start the match, and the rest sit on the bench. What fraction of the squad sits on the bench?", answer: "8/18", checkMode: 'auto', correctAnswer: "8/18", explanation: "Total players = 18. Starting = 10. On the bench = 18 minus 10 = 8. Fraction = 8/18" },
        { difficulty: 'Medium', question: "Group A has 3 shaded parts out of 4. Group B has 3 shaded parts out of 8. Which group has the bigger fraction shaded?", answer: "Group A", checkMode: 'auto', correctAnswer: "GroupA", correctAnswers: ["GroupA","A"], explanation: "Group A = 3/4 and Group B = 3/8. Same numerator, so compare denominators — the smaller denominator gives bigger parts. Since 4 is less than 8, 3/4 is bigger, so Group A has the bigger fraction shaded." },
        { difficulty: 'Medium', question: "Two friends compare paper strips of the same length. Aisha's strip shows 3/7 shaded and Zanele's strip shows 5/7 shaded. Whose strip has more shaded?", answer: "Zanele", checkMode: 'auto', correctAnswer: "Zanele", explanation: "3/7 and 5/7 have the same denominator (7), so compare numerators. 5 is greater than 3, so Zanele's 5/7 is more." },
        { difficulty: 'Medium', question: "A student says 1/8 must be bigger than 1/4 because 8 is a bigger number than 4. Is the student correct? Explain why or why not.", answer: "No, the student is wrong. Both fractions are unit fractions (numerator 1). A bigger denominator means the whole is cut into more pieces, so each piece is smaller. Since 8 is greater than 4, each eighth is smaller than each quarter, so 1/4 is actually bigger than 1/8.", checkMode: 'self' },
        { difficulty: 'Medium', question: "Order these fractions from smallest to biggest: 4/9, 1/9, 7/9, 3/9", answer: "1/9, 3/9, 4/9, 7/9", checkMode: 'auto', correctAnswer: "1/9,3/9,4/9,7/9", correctAnswers: ["1/9,3/9,4/9,7/9","1/93/94/97/9"], explanation: "Same denominator (9), so order by numerators from smallest to biggest: 1, 3, 4, 7. Order: 1/9, 3/9, 4/9, 7/9" },
        { difficulty: 'Medium', question: "True or false: 5/8 is bigger than 3/8, because when the denominators are the same, the fraction with the bigger numerator is bigger. Explain your answer.", answer: "True. When two fractions have the same denominator, the whole has been cut into equally sized pieces, so the fraction with more of those pieces (the bigger numerator) represents a bigger amount. Since 5 is greater than 3, 5/8 is bigger than 3/8.", checkMode: 'self' },
        { difficulty: 'Medium', question: "Find a fraction equivalent to 1/2.", answer: "2/4", checkMode: 'auto', correctAnswer: "2/4", correctAnswers: ["2/4","3/6","4/8","5/10"], explanation: "Multiply numerator and denominator by the same number, e.g. 1 x 2 = 2 and 2 x 2 = 4, giving 2/4." },
        { difficulty: 'Medium', question: "Fill in the missing number: 1/4 = ?/12", answer: "3", checkMode: 'auto', correctAnswer: "3", explanation: "The denominator went from 4 to 12 (4 x 3 = 12), so multiply the numerator by 3 too: 1 x 3 = 3." },
        { difficulty: 'Medium', question: "Are 2/3 and 4/6 equivalent? Write yes or no.", answer: "Yes", checkMode: 'auto', correctAnswer: "Yes", correctAnswers: ["Yes","yes"], explanation: "Multiply 2/3 by 2/2: 2 x 2 = 4 and 3 x 2 = 6, giving 4/6. Since 4/6 = 4/6, they are equivalent." },
        { difficulty: 'Medium', question: "Sipho says 1/3 and 3/9 are equivalent. Is he correct? Explain using multiplication.", answer: "Yes, Sipho is correct. Multiplying 1/3 by 3/3 gives 1 x 3 = 3 and 3 x 3 = 9, so 1/3 = 3/9. Since both the numerator and denominator were multiplied by the same number (3), the fractions represent the same amount.", checkMode: 'auto', correctAnswer: "Yes", correctAnswers: ["Yes","yes"], explanation: "Multiplying 1/3 by 3/3 gives 3/9, so they are equivalent." },
        { difficulty: 'Medium-Hard', question: "Find 3/10 of 50.", answer: "15", checkMode: 'auto', correctAnswer: "15", explanation: "Step 1: 50 / 10 = 5. Step 2: 5 x 3 = 15." },
        { difficulty: 'Medium-Hard', question: "A netball team plays 40 matches in a season. They win 3/8 of them. How many matches do they win?", answer: "15", checkMode: 'auto', correctAnswer: "15", explanation: "Find 3/8 of 40. Step 1: 40 / 8 = 5. Step 2: 5 x 3 = 15. The team wins 15 matches." },
        { difficulty: 'Medium-Hard', question: "Which is more: 3/4 of 20 or 2/5 of 20?", answer: "3/4 of 20", checkMode: 'auto', correctAnswer: "3/4of20", correctAnswers: ["3/4of20","3/4"], explanation: "3/4 of 20: Step 1: 20/4=5. Step 2: 5x3=15. 2/5 of 20: Step 1: 20/5=4. Step 2: 4x2=8. Since 15 is greater than 8, 3/4 of 20 is more." },
        { difficulty: 'Hard', question: "Explain, in your own words, what the numerator and denominator of a fraction tell you.", answer: "The numerator (top number) tells you how many equal parts you have. The denominator (bottom number) tells you how many equal parts the whole was divided into. For example, in 3/8, the denominator 8 means the whole is cut into 8 equal pieces, and the numerator 3 means we have 3 of those pieces.", checkMode: 'self' },
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
        { difficulty: 'Easy', question: "A chocolate bar has 8 equal pieces. Sipho eats 3 pieces. What fraction did he eat?", answer: "3/8", checkMode: 'auto', correctAnswer: "3/8", explanation: "3 pieces eaten out of 8 equal pieces. Fraction = 3/8" },
        { difficulty: 'Easy', question: "A shape is divided into 5 equal parts and 4 are shaded. What fraction is shaded?", answer: "4/5", checkMode: 'auto', correctAnswer: "4/5", explanation: "4 parts shaded out of 5 equal parts. Fraction = 4/5" },
        { difficulty: 'Easy', question: "What is the numerator in the fraction 5/9?", answer: "5", checkMode: 'auto', correctAnswer: "5", explanation: "The numerator is the top number. It tells us how many equal parts we have. In 5/9 the numerator is 5." },
        { difficulty: 'Easy', question: "A packet of biscuits is shared equally among 6 learners so that each learner gets one packet's worth of biscuits split evenly. If one learner takes 2 shares, what fraction of the biscuits did that learner get?", answer: "2/6", checkMode: 'auto', correctAnswer: "2/6", explanation: "The biscuits are split into 6 equal shares (denominator 6) and the learner takes 2 shares (numerator 2). Fraction = 2/6" },
        { difficulty: 'Easy-Medium', question: "A pizza is cut into 8 equal slices. 3 slices are eaten. What fraction is left?", answer: "5/8", checkMode: 'auto', correctAnswer: "5/8", explanation: "Total slices = 8. Eaten = 3. Left = 8 minus 3 = 5. Fraction left = 5/8" },
        { difficulty: 'Easy-Medium', question: "A packet has 24 sweets. 10 are red, 8 are blue and the rest are green. What fraction are green?", answer: "6/24", checkMode: 'auto', correctAnswer: "6/24", explanation: "Total = 24. Red = 10, Blue = 8. Green = 24 minus 10 minus 8 = 6. Fraction = 6/24" },
        { difficulty: 'Easy-Medium', question: "A vegetable garden has 20 plants. 13 are tomato plants and the rest are spinach plants. What fraction of the plants are spinach?", answer: "7/20", checkMode: 'auto', correctAnswer: "7/20", explanation: "Total plants = 20. Tomato = 13. Spinach = 20 minus 13 = 7. Fraction = 7/20" },
        { difficulty: 'Medium', question: "Thabo shaded 2 parts out of a shape split into 3. Lerato shaded 2 parts out of a shape the same size split into 6. Who shaded the bigger fraction of their shape?", answer: "Thabo", checkMode: 'auto', correctAnswer: "Thabo", explanation: "Thabo shaded 2/3 and Lerato shaded 2/6. Same numerator, so compare denominators — the smaller denominator gives bigger parts. Since 3 is less than 6, 2/3 is bigger, so Thabo shaded the bigger fraction." },
        { difficulty: 'Medium', question: "Two water bottles hold the same total amount. One is filled to 2/9 and the other to 6/9. Which bottle has less water in it?", answer: "2/9", checkMode: 'auto', correctAnswer: "2/9", explanation: "2/9 and 6/9 have the same denominator (9), so compare numerators. 2 is less than 6, so the bottle filled to 2/9 has less water." },
        { difficulty: 'Medium', question: "A student claims 1/6 is bigger than 1/3 because 6 is a bigger number than 3. Explain whether this claim is correct.", answer: "No, the claim is incorrect. Both are unit fractions (numerator 1), so a bigger denominator means the whole is split into more, smaller pieces. Since 6 is greater than 3, sixths are smaller pieces than thirds, so 1/6 is actually smaller than 1/3.", checkMode: 'self' },
        { difficulty: 'Medium', question: "Order these fractions from biggest to smallest: 1/2, 1/5, 1/3, 1/10", answer: "1/2, 1/3, 1/5, 1/10", checkMode: 'auto', correctAnswer: "1/2,1/3,1/5,1/10", correctAnswers: ["1/2,1/3,1/5,1/10"], explanation: "These are all unit fractions, so the smaller the denominator, the bigger the fraction. Order from biggest to smallest denominator gives: 1/2, 1/3, 1/5, 1/10" },
        { difficulty: 'Medium', question: "Which is bigger: 3/4 or 5/8? Hint: first find an equivalent fraction for 3/4 with denominator 8. Explain your reasoning.", answer: "3/4 is bigger. 3/4 = 6/8 (multiply top and bottom by 2). Now compare 6/8 and 5/8 — same denominator, so compare numerators. Since 6 is greater than 5, 3/4 is bigger.", checkMode: 'self' },
        { difficulty: 'Medium', question: "Find a fraction equivalent to 1/3.", answer: "2/6", checkMode: 'auto', correctAnswer: "2/6", correctAnswers: ["2/6","3/9"], explanation: "Multiply numerator and denominator by the same number, e.g. 1 x 2 = 2 and 3 x 2 = 6, giving 2/6." },
        { difficulty: 'Medium', question: "Fill in the missing number: 2/5 = ?/10", answer: "4", checkMode: 'auto', correctAnswer: "4", explanation: "The denominator went from 5 to 10 (5 x 2 = 10), so multiply the numerator by 2 too: 2 x 2 = 4." },
        { difficulty: 'Medium', question: "Are 3/5 and 5/8 equivalent? Write yes or no.", answer: "No", checkMode: 'auto', correctAnswer: "No", correctAnswers: ["No","no"], explanation: "There is no whole number you can multiply both 3 and 5 by to get 5 and 8, so they are not equivalent." },
        { difficulty: 'Medium', question: "Lerato says 2/6 and 3/9 are equivalent because they both simplify to 1/3. Is she correct? Write yes or no.", answer: "Yes", checkMode: 'auto', correctAnswer: "Yes", correctAnswers: ["Yes","yes"], explanation: "2/6 simplifies to 1/3 (divide top and bottom by 2). 3/9 also simplifies to 1/3 (divide top and bottom by 3). Since both simplify to the same fraction, they are equivalent." },
        { difficulty: 'Medium-Hard', question: "Find 5/6 of 24.", answer: "20", checkMode: 'auto', correctAnswer: "20", explanation: "Step 1: 24 / 6 = 4. Step 2: 4 x 5 = 20." },
        { difficulty: 'Medium-Hard', question: "A cyclist plans to ride 40 km. She has already ridden 3/5 of the distance. How many kilometres has she ridden?", answer: "24", checkMode: 'auto', correctAnswer: "24", explanation: "Find 3/5 of 40. Step 1: 40 / 5 = 8. Step 2: 8 x 3 = 24. She has ridden 24 km." },
        { difficulty: 'Medium-Hard', question: "Which is more: 5/6 of 18 or 2/3 of 18?", answer: "5/6 of 18", checkMode: 'auto', correctAnswer: "5/6of18", correctAnswers: ["5/6of18","5/6"], explanation: "5/6 of 18: Step 1: 18/6=3. Step 2: 3x5=15. 2/3 of 18: Step 1: 18/3=6. Step 2: 6x2=12. Since 15 is greater than 12, 5/6 of 18 is more." },
        { difficulty: 'Hard', question: "Explain why you can add two fractions by simply adding their numerators only when the denominators are the same.", answer: "When two fractions have the same denominator, the whole has been divided into equal-sized parts for both fractions, so the pieces are the same size and can just be counted together. That is why you only add the numerators and keep the denominator the same. If the denominators were different, the pieces would be different sizes, and adding the numerators directly would give a wrong answer.", checkMode: 'self' },
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
        { difficulty: 'Easy', question: "An orange is split into 10 equal segments. Lerato gives away 3 segments. What fraction did she give away?", answer: "3/10", checkMode: 'auto', correctAnswer: "3/10", explanation: "3 segments given away out of 10 equal segments. Fraction = 3/10" },
        { difficulty: 'Easy', question: "A shape is divided into 3 equal parts and 1 is shaded. What fraction is shaded?", answer: "1/3", checkMode: 'auto', correctAnswer: "1/3", explanation: "1 part shaded out of 3 equal parts. Fraction = 1/3" },
        { difficulty: 'Easy', question: "In the fraction 7/12, which number is the numerator and which is the denominator?", answer: "7 is the numerator, 12 is the denominator", checkMode: 'auto', correctAnswer: "7isthenumerator12isthedenominator", correctAnswers: ["7isthenumerator12isthedenominator","numerator7denominator12"], explanation: "The numerator is the top number (7). The denominator is the bottom number (12)." },
        { difficulty: 'Easy', question: "A packet of 9 seedlings is shared equally among 9 plant pots, one seedling per pot. What fraction of the seedlings goes into 4 of the pots?", answer: "4/9", checkMode: 'auto', correctAnswer: "4/9", explanation: "There are 9 equal seedlings in total (denominator 9) and 4 of them go into 4 pots (numerator 4). Fraction = 4/9" },
        { difficulty: 'Easy-Medium', question: "A chocolate bar has 10 equal pieces. Amahle eats 6 pieces. What fraction of the bar is left?", answer: "4/10", checkMode: 'auto', correctAnswer: "4/10", explanation: "Total pieces = 10. Eaten = 6. Left = 10 minus 6 = 4. Fraction left = 4/10" },
        { difficulty: 'Easy-Medium', question: "A tray has 12 muffins. 5 have icing, 4 have sprinkles and the rest are plain. What fraction are plain?", answer: "3/12", checkMode: 'auto', correctAnswer: "3/12", explanation: "Total muffins = 12. Icing = 5, Sprinkles = 4. Plain = 12 minus 5 minus 4 = 3. Fraction = 3/12" },
        { difficulty: 'Easy-Medium', question: "A box of 24 crayons has 9 broken. The rest are still whole. What fraction of the crayons are still whole?", answer: "15/24", checkMode: 'auto', correctAnswer: "15/24", explanation: "Total crayons = 24. Broken = 9. Whole = 24 minus 9 = 15. Fraction = 15/24" },
        { difficulty: 'Medium', question: "A blue rectangle has 4 shaded parts out of 10. A green rectangle the same size has 4 shaded parts out of 5. Which rectangle has the bigger fraction shaded?", answer: "Green rectangle", checkMode: 'auto', correctAnswer: "Greenrectangle", correctAnswers: ["Greenrectangle","green"], explanation: "Blue = 4/10 and Green = 4/5. Same numerator, so compare denominators — the smaller denominator gives bigger parts. Since 5 is less than 10, 4/5 is bigger, so the green rectangle has the bigger fraction shaded." },
        { difficulty: 'Medium', question: "Two ropes of equal length are marked off in equal sections. One rope has 4/11 of its length painted, the other has 8/11 painted. Which rope has more paint on it?", answer: "8/11", checkMode: 'auto', correctAnswer: "8/11", explanation: "4/11 and 8/11 have the same denominator (11), so compare numerators. 8 is greater than 4, so the rope with 8/11 has more paint." },
        { difficulty: 'Medium', question: "Explain, without doing any division, why 1/5 must be bigger than 1/9.", answer: "Both are unit fractions (numerator 1). The denominator shows how many equal pieces the whole is split into — splitting into 9 pieces makes each piece smaller than splitting into only 5 pieces. Since 5 is less than 9, each fifth is bigger than each ninth, so 1/5 is bigger than 1/9.", checkMode: 'self' },
        { difficulty: 'Medium', question: "Order these fractions from smallest to biggest: 3/4, 1/4, 1/2, 2/4", answer: "1/4, 1/2, 2/4, 3/4", checkMode: 'auto', correctAnswer: "1/4,1/2,2/4,3/4", correctAnswers: ["1/4,2/4,2/4,3/4","1/4,1/2,2/4,3/4"], explanation: "Rewrite 1/2 as 2/4 so all fractions share denominator 4: 1/4, 2/4, 2/4, 3/4. Since 1/2 = 2/4, ordering from smallest to biggest gives 1/4, 1/2 (=2/4), 2/4, 3/4." },
        { difficulty: 'Medium', question: "True or false: to compare 2/5 and 3/10, you can rewrite 2/5 as 4/10 and then compare numerators. Explain your answer, and say which fraction is bigger.", answer: "True. 2/5 = 4/10 (multiply top and bottom by 2). Now both fractions have denominator 10, so compare numerators: 4 and 3. Since 4 is greater than 3, 2/5 (as 4/10) is bigger than 3/10.", checkMode: 'self' },
        { difficulty: 'Medium', question: "Find two fractions that are equivalent to 3/4.", answer: "6/8 and 9/12", checkMode: 'auto', correctAnswer: "6/8and9/12", correctAnswers: ["6/8and9/12","9/12and6/8","6/8,9/12","9/12,6/8","6/89/12","9/126/8"], explanation: "Multiply 3/4 by 2/2 to get 6/8, and by 3/3 to get 9/12. Both represent the same amount as 3/4." },
        { difficulty: 'Medium', question: "Fill in the missing number: 3/8 = ?/16", answer: "6", checkMode: 'auto', correctAnswer: "6", explanation: "The denominator went from 8 to 16 (8 x 2 = 16), so multiply the numerator by 2 too: 3 x 2 = 6." },
        { difficulty: 'Medium', question: "Are 4/5 and 8/10 equivalent? Explain how you know.", answer: "Yes, they are equivalent. Multiplying 4/5 by 2/2 gives 4 x 2 = 8 and 5 x 2 = 10, so 4/5 = 8/10. Since both the numerator and denominator were multiplied by the same number, the fractions represent the same amount.", checkMode: 'auto', correctAnswer: "Yes", correctAnswers: ["Yes","yes"], explanation: "Multiplying 4/5 by 2/2 gives 8/10, so they are equivalent." },
        { difficulty: 'Medium', question: "Amahle claims that 3/5 and 6/9 are equivalent fractions because she multiplied both the numerator and denominator of 3/5 by different numbers to reach 6/9. Is she correct? Explain what mistake, if any, she made.", answer: "No, Amahle is not correct. To multiply 3 to get 6, she multiplied by 2, but to multiply 5 to get 9, that is not a whole-number multiplication (5 x 2 = 10, not 9). Since she did not multiply the numerator and denominator by the same number, the fractions are not equivalent — 3/5 is actually equal to 6/10, not 6/9.", checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: "Find 7/10 of 80.", answer: "56", checkMode: 'auto', correctAnswer: "56", explanation: "Step 1: 80 / 10 = 8. Step 2: 8 x 7 = 56." },
        { difficulty: 'Medium-Hard', question: "A recipe needs 24 minutes of baking time in total. The cook has already baked for 3/8 of that time. How many minutes has the cook already baked for?", answer: "9", checkMode: 'auto', correctAnswer: "9", explanation: "Find 3/8 of 24. Step 1: 24 / 8 = 3. Step 2: 3 x 3 = 9. The cook has already baked for 9 minutes." },
        { difficulty: 'Medium-Hard', question: "Which is more: 2/3 of 45 or 3/5 of 45?", answer: "2/3 of 45", checkMode: 'auto', correctAnswer: "2/3of45", correctAnswers: ["2/3of45","2/3"], explanation: "2/3 of 45: Step 1: 45/3=15. Step 2: 15x2=30. 3/5 of 45: Step 1: 45/5=9. Step 2: 9x3=27. Since 30 is greater than 27, 2/3 of 45 is more." },
        { difficulty: 'Hard', question: "Explain, in your own words, the two-step rule for finding a fraction of a whole number, and use it to find 5/6 of 30.", answer: "Step 1: Divide the whole number by the denominator of the fraction. Step 2: Multiply the result by the numerator of the fraction. For 5/6 of 30: divide 30 by 6 to get 5, then multiply 5 by 5 to get 25. So 5/6 of 30 is 25.", checkMode: 'self' },
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
