import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Number Sentences',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS A NUMBER SENTENCE?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-number-sentence',
      title: 'What is a Number Sentence?',
      icon: '🔣',
      explanation: `<p style="margin-bottom:18px;">A <strong>number sentence</strong> is a mathematical statement that uses <span style="color:#1e40af;font-weight:700;">numbers</span>, <span style="color:#dc2626;font-weight:700;">operation symbols</span>, and a <span style="color:#16a34a;font-weight:700;">comparison symbol</span> to show a relationship. Just like a sentence in English tells you something, a number sentence tells you a mathematical fact.</p>

<p style="margin-bottom:12px;font-weight:600;">Two types of number sentence:</p>

<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:22px;">
  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:8px;">Equation</div>
    <div style="font-size:17px;margin-bottom:8px;"><span style="color:#1e40af;font-weight:700;">3</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">4</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">7</span></div>
    <div style="font-size:14px;color:#374151;">Uses <span style="color:#16a34a;font-weight:700;">=</span> to show that both sides are <strong>equal</strong>. The left side balances the right side exactly.</div>
  </div>
  <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#16a34a;margin-bottom:8px;">Inequality</div>
    <div style="font-size:17px;margin-bottom:8px;"><span style="color:#1e40af;font-weight:700;">5</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">3</span> <span style="color:#16a34a;font-weight:700;">&gt;</span> <span style="color:#1e40af;font-weight:700;">6</span></div>
    <div style="font-size:14px;color:#374151;">Uses <span style="color:#16a34a;font-weight:700;">&lt;</span> or <span style="color:#16a34a;font-weight:700;">&gt;</span> to show that one side is <strong>greater or smaller</strong> than the other.</div>
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Symbols you need to know:</p>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px;margin-bottom:22px;">
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:10px 12px;text-align:center;">
    <div style="font-size:22px;color:#dc2626;font-weight:700;">+</div>
    <div style="font-size:13px;color:#374151;margin-top:4px;">Add</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:10px 12px;text-align:center;">
    <div style="font-size:22px;color:#dc2626;font-weight:700;">−</div>
    <div style="font-size:13px;color:#374151;margin-top:4px;">Subtract</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:10px 12px;text-align:center;">
    <div style="font-size:22px;color:#dc2626;font-weight:700;">×</div>
    <div style="font-size:13px;color:#374151;margin-top:4px;">Multiply</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:10px 12px;text-align:center;">
    <div style="font-size:22px;color:#dc2626;font-weight:700;">÷</div>
    <div style="font-size:13px;color:#374151;margin-top:4px;">Divide</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:10px 12px;text-align:center;">
    <div style="font-size:22px;color:#16a34a;font-weight:700;">=</div>
    <div style="font-size:13px;color:#374151;margin-top:4px;">Equal to</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:10px 12px;text-align:center;">
    <div style="font-size:22px;color:#16a34a;font-weight:700;">&lt;</div>
    <div style="font-size:13px;color:#374151;margin-top:4px;">Less than</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:10px 12px;text-align:center;">
    <div style="font-size:22px;color:#16a34a;font-weight:700;">&gt;</div>
    <div style="font-size:13px;color:#374151;margin-top:4px;">Greater than</div>
  </div>
</div>

<div style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:10px;padding:14px 18px;">
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">Tip: remember &lt; and &gt;</div>
  <div style="color:#374151;font-size:14px;">The small pointed end always faces the <strong>smaller number</strong>. Think of it as a hungry crocodile — it always opens its mouth towards the <em>bigger</em> number!</div>
</div>`,

      videoPlaceholder: 'Short video explaining the difference between equations and inequalities with examples',

      workedExamples: [
        {
          question: 'Is 4 + 5 = 9 a true number sentence?',
          answer: 'Yes, it is true.',
          steps: [
            `Calculate the <strong>left side</strong>: <span style="color:#1e40af;font-weight:700;">4</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">5</span> = <span style="color:#1e40af;font-weight:700;">9</span>`,
            `Compare to the <strong>right side</strong>: is <span style="color:#1e40af;font-weight:700;">9</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">9</span>? <strong>Yes</strong> — both sides are equal.`,
            `<span style="color:#16a34a;font-weight:700;">✓ True number sentence.</span> &nbsp; <span style="color:#1e40af;font-weight:700;">4</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">5</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">9</span> is correct.`,
          ],
        },
        {
          question: 'Is 3 × 4 > 10 a true number sentence?',
          answer: 'True.',
          steps: [
            `Calculate the <strong>left side</strong>: <span style="color:#1e40af;font-weight:700;">3</span> <span style="color:#dc2626;font-weight:700;">×</span> <span style="color:#1e40af;font-weight:700;">4</span> = <span style="color:#1e40af;font-weight:700;">12</span>`,
            `Compare: is <span style="color:#1e40af;font-weight:700;">12</span> <span style="color:#16a34a;font-weight:700;">&gt;</span> <span style="color:#1e40af;font-weight:700;">10</span>? <strong>Yes</strong> — 12 is greater than 10.`,
            `<span style="color:#16a34a;font-weight:700;">✓ True number sentence.</span> &nbsp; <span style="color:#1e40af;font-weight:700;">3</span> <span style="color:#dc2626;font-weight:700;">×</span> <span style="color:#1e40af;font-weight:700;">4</span> <span style="color:#16a34a;font-weight:700;">&gt;</span> <span style="color:#1e40af;font-weight:700;">10</span> because 12 &gt; 10.`,
          ],
        },
      ],

      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — OPEN NUMBER SENTENCES AND MISSING VALUES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'open-number-sentences',
      title: 'Open Number Sentences and Missing Values',
      icon: '🔲',
      explanation: `<p style="margin-bottom:18px;">An <strong>open number sentence</strong> is a number sentence that has a <span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:1px 7px;color:#ea580c;font-weight:700;">□</span> or a blank in place of a missing value. Your job is to find the number that makes the sentence true.</p>

<p style="margin-bottom:12px;font-weight:600;">Examples of open number sentences:</p>

<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:22px;">
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;font-size:18px;">
    <span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 10px;color:#ea580c;font-weight:700;">□</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">4</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">9</span> <span style="color:#6b7280;font-size:14px;margin-left:8px;">— what number plus 4 gives 9?</span>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;font-size:18px;">
    <span style="color:#1e40af;font-weight:700;">3</span> <span style="color:#dc2626;font-weight:700;">×</span> <span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 10px;color:#ea580c;font-weight:700;">□</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">15</span> <span style="color:#6b7280;font-size:14px;margin-left:8px;">— 3 times what number gives 15?</span>
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">How to find the missing value — use inverse operations:</p>

<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:22px;">
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#fee2e2;color:#dc2626;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;">+/−</span>
    <div style="font-size:14px;color:#374151;">If a number is being <span style="color:#dc2626;font-weight:700;">added</span>, use <span style="color:#dc2626;font-weight:700;">subtraction</span> to find the missing value.<br/><span style="color:#6b7280;margin-top:4px;display:block;"><span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:1px 6px;color:#ea580c;font-weight:700;">□</span> + 4 = 9 → subtract: 9 − 4 = <span style="color:#ea580c;font-weight:700;">5</span></span></div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#fee2e2;color:#dc2626;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;">−/+</span>
    <div style="font-size:14px;color:#374151;">If a number is being <span style="color:#dc2626;font-weight:700;">subtracted</span>, use <span style="color:#dc2626;font-weight:700;">addition</span> to find the missing value.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#fee2e2;color:#dc2626;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;">×/÷</span>
    <div style="font-size:14px;color:#374151;">If a number is being <span style="color:#dc2626;font-weight:700;">multiplied</span>, use <span style="color:#dc2626;font-weight:700;">division</span> to find the missing value.<br/><span style="color:#6b7280;margin-top:4px;display:block;">3 × <span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:1px 6px;color:#ea580c;font-weight:700;">□</span> = 15 → divide: 15 ÷ 3 = <span style="color:#ea580c;font-weight:700;">5</span></span></div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#fee2e2;color:#dc2626;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;">÷/×</span>
    <div style="font-size:14px;color:#374151;">If a number is being <span style="color:#dc2626;font-weight:700;">divided</span>, use <span style="color:#dc2626;font-weight:700;">multiplication</span> to find the missing value.</div>
  </div>
</div>

<div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:10px;padding:14px 18px;">
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#16a34a;margin-bottom:8px;">Always check your answer</div>
  <div style="color:#374151;font-size:14px;">After finding the missing value, substitute it back into the original number sentence to make sure it is true. If both sides are equal, your answer is correct.</div>
</div>`,

      videoPlaceholder: 'Short video showing how to find missing values in open number sentences using inverse operations',

      workedExamples: [
        {
          question: 'Find the missing value: □ + 6 = 13',
          answer: '□ = 7',
          steps: [
            `Identify the operation: <span style="color:#1e40af;font-weight:700;">6</span> is being <span style="color:#dc2626;font-weight:700;">added</span> to the missing value. Use the inverse — <span style="color:#dc2626;font-weight:700;">subtraction</span>.`,
            `Calculate: <span style="color:#1e40af;font-weight:700;">13</span> <span style="color:#dc2626;font-weight:700;">−</span> <span style="color:#1e40af;font-weight:700;">6</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">7</span>`,
            `<span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 8px;color:#ea580c;font-weight:700;">□</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">7</span>`,
            `Check: substitute back → <span style="color:#ea580c;font-weight:700;">7</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">6</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">13</span> <span style="color:#16a34a;font-weight:700;">✓</span>`,
          ],
        },
        {
          question: 'Find the missing value: 24 ÷ □ = 4',
          answer: '□ = 6',
          steps: [
            `Identify the operation: we are <span style="color:#dc2626;font-weight:700;">dividing</span> 24 by the missing value. Use the inverse — <span style="color:#dc2626;font-weight:700;">multiplication</span>.`,
            `Think: <span style="color:#1e40af;font-weight:700;">24</span> ÷ <span style="color:#1e40af;font-weight:700;">4</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">6</span> &nbsp; (since 4 × 6 = 24)`,
            `<span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 8px;color:#ea580c;font-weight:700;">□</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">6</span>`,
            `Check: substitute back → <span style="color:#1e40af;font-weight:700;">24</span> <span style="color:#dc2626;font-weight:700;">÷</span> <span style="color:#ea580c;font-weight:700;">6</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">4</span> <span style="color:#16a34a;font-weight:700;">✓</span>`,
          ],
        },
        {
          question: 'Find the missing value: □ × 7 = 56',
          answer: '□ = 8',
          steps: [
            `Identify the operation: the missing value is being <span style="color:#dc2626;font-weight:700;">multiplied</span> by 7. Use the inverse — <span style="color:#dc2626;font-weight:700;">division</span>.`,
            `Calculate: <span style="color:#1e40af;font-weight:700;">56</span> <span style="color:#dc2626;font-weight:700;">÷</span> <span style="color:#1e40af;font-weight:700;">7</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">8</span>`,
            `<span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 8px;color:#ea580c;font-weight:700;">□</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">8</span>`,
            `Check: substitute back → <span style="color:#ea580c;font-weight:700;">8</span> <span style="color:#dc2626;font-weight:700;">×</span> <span style="color:#1e40af;font-weight:700;">7</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">56</span> <span style="color:#16a34a;font-weight:700;">✓</span>`,
          ],
        },
      ],

      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — TRANSLATING WORD PROBLEMS INTO NUMBER SENTENCES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'translating-word-problems',
      title: 'Translating Word Problems into Number Sentences',
      icon: '📖',
      explanation: `<p style="margin-bottom:18px;">Every word problem is hiding a number sentence. If you can find it, the problem becomes much easier to solve. The secret is to look for <span style="color:#ea580c;font-weight:700;">key words</span> that tell you which operation to use.</p>

<p style="margin-bottom:12px;font-weight:600;">Five-step method:</p>

<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:22px;">
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#dbeafe;color:#1e40af;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">1</span>
    <div><strong>Read</strong> the problem carefully — more than once if needed.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#dbeafe;color:#1e40af;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">2</span>
    <div><strong>Identify</strong> the <span style="color:#ea580c;font-weight:700;">key words</span> and the operation they suggest.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#dbeafe;color:#1e40af;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">3</span>
    <div><strong>Write</strong> the number sentence using <span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:1px 6px;color:#ea580c;font-weight:700;">□</span> for the unknown value.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#dbeafe;color:#1e40af;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">4</span>
    <div><strong>Solve</strong> using an inverse operation to find the missing value.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#dbeafe;color:#1e40af;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">5</span>
    <div><strong>Check</strong> — substitute your answer back and make sure the number sentence is true.</div>
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Key word guide:</p>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px;">
  <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:10px 14px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:6px;">Addition</div>
    <div style="font-size:13px;color:#374151;"><span style="color:#ea580c;font-weight:700;">more</span>, <span style="color:#ea580c;font-weight:700;">added</span>, <span style="color:#ea580c;font-weight:700;">total</span>, <span style="color:#ea580c;font-weight:700;">altogether</span>, <span style="color:#ea580c;font-weight:700;">in all</span>, <span style="color:#ea580c;font-weight:700;">sum</span></div>
  </div>
  <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:10px 14px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:6px;">Subtraction</div>
    <div style="font-size:13px;color:#374151;"><span style="color:#ea580c;font-weight:700;">gives away</span>, <span style="color:#ea580c;font-weight:700;">left</span>, <span style="color:#ea580c;font-weight:700;">fewer</span>, <span style="color:#ea580c;font-weight:700;">difference</span>, <span style="color:#ea580c;font-weight:700;">less</span>, <span style="color:#ea580c;font-weight:700;">spent</span></div>
  </div>
  <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:10px 14px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:6px;">Multiplication</div>
    <div style="font-size:13px;color:#374151;"><span style="color:#ea580c;font-weight:700;">times</span>, <span style="color:#ea580c;font-weight:700;">groups of</span>, <span style="color:#ea580c;font-weight:700;">each</span>, <span style="color:#ea580c;font-weight:700;">per</span>, <span style="color:#ea580c;font-weight:700;">lots of</span>, <span style="color:#ea580c;font-weight:700;">product</span></div>
  </div>
  <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:10px 14px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:6px;">Division</div>
    <div style="font-size:13px;color:#374151;"><span style="color:#ea580c;font-weight:700;">share</span>, <span style="color:#ea580c;font-weight:700;">split</span>, <span style="color:#ea580c;font-weight:700;">how many each</span>, <span style="color:#ea580c;font-weight:700;">equally</span>, <span style="color:#ea580c;font-weight:700;">quotient</span></div>
  </div>
</div>`,

      videoPlaceholder: 'Short video showing how to translate word problems into number sentences step by step',
      diagramPlaceholder: 'Step by step flow diagram showing how to go from a word problem to a number sentence to a solution',

      workedExamples: [
        {
          question: 'Thabo has 45 marbles. He <span style="color:#ea580c;font-weight:700;">gives some</span> to his friend and has 28 <span style="color:#ea580c;font-weight:700;">left</span>. How many did he give away?',
          answer: '□ = 17. Thabo gave away 17 marbles.',
          steps: [
            `Key words: "<span style="color:#ea580c;font-weight:700;">gives some</span>" and "<span style="color:#ea580c;font-weight:700;">left</span>" — these suggest <strong>subtraction</strong>. Thabo starts with 45, gives some away, and 28 remain.`,
            `Write the number sentence: <span style="color:#1e40af;font-weight:700;">45</span> <span style="color:#dc2626;font-weight:700;">−</span> <span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 8px;color:#ea580c;font-weight:700;">□</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">28</span>`,
            `Use the inverse operation: <span style="color:#1e40af;font-weight:700;">45</span> <span style="color:#dc2626;font-weight:700;">−</span> <span style="color:#1e40af;font-weight:700;">28</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">17</span>`,
            `<span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 8px;color:#ea580c;font-weight:700;">□</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">17</span>. Thabo gave away <strong>17 marbles</strong>.`,
            `Check: <span style="color:#1e40af;font-weight:700;">45</span> <span style="color:#dc2626;font-weight:700;">−</span> <span style="color:#ea580c;font-weight:700;">17</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">28</span> <span style="color:#16a34a;font-weight:700;">✓</span>`,
          ],
        },
        {
          question: 'A box has some pencils. After <span style="color:#ea580c;font-weight:700;">adding</span> 14 <span style="color:#ea580c;font-weight:700;">more</span> there are 31 pencils. How many were there to start?',
          answer: '□ = 17. There were 17 pencils to start.',
          steps: [
            `Key words: "<span style="color:#ea580c;font-weight:700;">adding</span>" and "<span style="color:#ea580c;font-weight:700;">more</span>" — these suggest <strong>addition</strong>. An unknown starting amount plus 14 gives 31.`,
            `Write the number sentence: <span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 8px;color:#ea580c;font-weight:700;">□</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">14</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">31</span>`,
            `Use the inverse operation: <span style="color:#1e40af;font-weight:700;">31</span> <span style="color:#dc2626;font-weight:700;">−</span> <span style="color:#1e40af;font-weight:700;">14</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">17</span>`,
            `<span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 8px;color:#ea580c;font-weight:700;">□</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">17</span>. There were <strong>17 pencils</strong> to start.`,
            `Check: <span style="color:#ea580c;font-weight:700;">17</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">14</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">31</span> <span style="color:#16a34a;font-weight:700;">✓</span>`,
          ],
        },
      ],

      practiceQuestions: [],
    },
  ],

  topicPractice: [
    // ── SECTION 1 — What is a Number Sentence? ───────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Is the following number sentence true or false?\n\n' +
        '6 + 7 = 13\n\n' +
        'Type true or false.',
      answer: 'true',
      correctAnswer: 'true',
      correctAnswers: ['true', 'yes'],
      explanation:
        'Calculate the left side: 6 + 7 = 13.\n' +
        'Compare to the right side: 13 = 13 ✓\n' +
        'Both sides are equal — it is a true number sentence.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Write true or false for each number sentence:\n\n' +
        'a) 4 × 5 > 18\n' +
        'b) 24 ÷ 6 = 5\n' +
        'c) 3 + 9 < 15',
      answer: 'a) True  b) False  c) True',
      parts: [
        {
          label: 'a) 4 × 5 > 18',
          correctAnswer: 'true',
          correctAnswers: ['true', 'yes'],
          explanation:
            'Calculate the left side: 4 × 5 = 20.\n' +
            'Is 20 > 18? Yes — 20 is greater than 18.\n' +
            'True number sentence.',
        },
        {
          label: 'b) 24 ÷ 6 = 5',
          correctAnswer: 'false',
          correctAnswers: ['false', 'no'],
          explanation:
            'Calculate the left side: 24 ÷ 6 = 4.\n' +
            'Is 4 = 5? No — 4 does not equal 5.\n' +
            'False number sentence.',
        },
        {
          label: 'c) 3 + 9 < 15',
          correctAnswer: 'true',
          correctAnswers: ['true', 'yes'],
          explanation:
            'Calculate the left side: 3 + 9 = 12.\n' +
            'Is 12 < 15? Yes — 12 is less than 15.\n' +
            'True number sentence.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Write your own true number sentence that uses each of these symbols exactly once: ×, =, >\n\n' +
        'Show your working to prove it is true.',
      answer:
        'Any valid number sentence is correct, for example:\n\n' +
        '3 × 4 > 10\n\n' +
        'Working: 3 × 4 = 12 and 12 > 10. ✓\n\n' +
        'Check that:\n' +
        '• You used × once, = once, and > once.\n' +
        '• The left side of > is greater than the right side.\n' +
        '• Both parts of the = are equal.',
    },

    // ── SECTION 2 — Open Number Sentences and Missing Values ─────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Find the missing value. Write only the number.\n\n' +
        '□ + 8 = 15',
      answer: '7',
      correctAnswer: '7',
      explanation:
        'Use the inverse operation — subtraction:\n' +
        '15 − 8 = 7\n\n' +
        '□ = 7\n' +
        'Check: 7 + 8 = 15 ✓',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Find the missing value in each number sentence. Write only the number.\n\n' +
        'a) □ × 6 = 42\n' +
        'b) 35 − □ = 18\n' +
        'c) □ ÷ 4 = 9',
      answer: 'a) 7  b) 17  c) 36',
      parts: [
        {
          label: 'a) □ × 6 = 42',
          correctAnswer: '7',
          explanation:
            'Use the inverse — division: 42 ÷ 6 = 7.\n' +
            '□ = 7\n' +
            'Check: 7 × 6 = 42 ✓',
        },
        {
          label: 'b) 35 − □ = 18',
          correctAnswer: '17',
          explanation:
            'Use the inverse — subtraction: 35 − 18 = 17.\n' +
            '□ = 17\n' +
            'Check: 35 − 17 = 18 ✓',
        },
        {
          label: 'c) □ ÷ 4 = 9',
          correctAnswer: '36',
          explanation:
            'Use the inverse — multiplication: 9 × 4 = 36.\n' +
            '□ = 36\n' +
            'Check: 36 ÷ 4 = 9 ✓',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Find the missing value in the number sentence, then write the inverse operation to check your answer.\n\n' +
        '48 ÷ □ = 6\n\n' +
        'a) What is the missing value? Write only the number.\n' +
        'b) Write the inverse operation as a number sentence.',
      answer: 'a) 8  b) 6 × 8 = 48',
      parts: [
        {
          label: 'a) Missing value',
          correctAnswer: '8',
          explanation:
            'Use the inverse — multiplication: 48 ÷ 6 = 8.\n' +
            '□ = 8\n' +
            'Check: 48 ÷ 8 = 6 ✓',
        },
        {
          label: 'b) Inverse operation',
          correctAnswer: '6x8=48',
          correctAnswers: ['6x8=48', '8x6=48', '6×8=48', '8×6=48'],
          explanation:
            'Division and multiplication are inverse operations.\n' +
            '48 ÷ □ = 6, so the inverse is 6 × 8 = 48 (or 8 × 6 = 48).',
        },
      ],
    },

    // ── SECTION 3 — Translating Word Problems into Number Sentences ───────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Write a number sentence and solve it:\n\n' +
        'Lerato has 24 sweets. She eats some and has 15 left. How many did she eat?\n\n' +
        'a) Write the number sentence. Use □ or ? for the unknown value.\n' +
        'b) Solve it. Write only the number.',
      answer: 'a) 24 − □ = 15  b) 9',
      parts: [
        {
          label: 'a) Number sentence',
          correctAnswer: '24-□=15',
          correctAnswers: ['24-□=15', '24−□=15', '24-?=15', '24-n=15'],
          explanation:
            'Lerato starts with 24, eats some (□), and 15 remain.\n' +
            'Number sentence: 24 − □ = 15',
        },
        {
          label: 'b) Missing value',
          correctAnswer: '9',
          explanation:
            'Use the inverse — subtraction: 24 − 15 = 9.\n' +
            '□ = 9\n' +
            'Check: 24 − 9 = 15 ✓',
        },
      ],
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Write a number sentence and solve it:\n\n' +
        'A box has some books. After adding 17 more there are 43 books altogether. How many books were in the box to start?\n\n' +
        'a) Write the number sentence. Use □ or ? for the unknown value.\n' +
        'b) Solve using inverse operations. Write the calculation.\n' +
        'c) Check your answer. Write the check number sentence.',
      answer: 'a) □ + 17 = 43  b) 43 − 17 = 26  c) 26 + 17 = 43',
      parts: [
        {
          label: 'a) Number sentence',
          correctAnswer: '□+17=43',
          correctAnswers: ['□+17=43', '?+17=43', 'n+17=43', '17+□=43', '17+?=43', '17+n=43'],
          explanation:
            'An unknown number plus 17 equals 43.\n' +
            'Number sentence: □ + 17 = 43',
        },
        {
          label: 'b) Inverse calculation',
          correctAnswer: '43-17=26',
          correctAnswers: ['43-17=26', '43−17=26', '26'],
          explanation:
            'Addition is undone by subtraction: 43 − 17 = 26.\n' +
            '□ = 26. There were 26 books to start.',
        },
        {
          label: 'c) Check',
          correctAnswer: '26+17=43',
          correctAnswers: ['26+17=43', '17+26=43', '43', 'true'],
          explanation:
            'Substitute back: 26 + 17 = 43 ✓\n' +
            'The answer is correct.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Write a number sentence and solve it:\n\n' +
        'Sipho earns the same amount of money each day. After 6 days he has earned R168. How much does he earn per day?\n\n' +
        'a) Write the number sentence. Use □ or ? for the unknown value.\n' +
        'b) Solve it. Write only the number without the R symbol.\n' +
        'c) If he works 3 more days, how much will he have earned in total? Write only the number without the R symbol.',
      answer: 'a) 6 × □ = 168  b) 28  c) 252',
      parts: [
        {
          label: 'a) Number sentence',
          correctAnswer: '6x□=168',
          correctAnswers: ['6x□=168', '6x?=168', '□x6=168', '?x6=168', '6×□=168', '□×6=168'],
          explanation:
            '6 days times the daily amount equals R168.\n' +
            'Number sentence: 6 × □ = 168',
        },
        {
          label: 'b) Daily earnings (R…)',
          correctAnswer: '28',
          correctAnswers: ['28', 'r28'],
          explanation:
            'Use the inverse — division: 168 ÷ 6 = 28.\n' +
            '□ = 28. Sipho earns R28 per day.\n' +
            'Check: 6 × 28 = 168 ✓',
        },
        {
          label: 'c) Total after 3 more days (R…)',
          correctAnswer: '252',
          correctAnswers: ['252', 'r252'],
          explanation:
            'He already has R168. He works 3 more days at R28 per day:\n' +
            '3 × 28 = 84\n' +
            '168 + 84 = R252',
        },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 19, message: 'Perfect score! You have mastered number sentences.' },
    { minScore: 15, message: 'Excellent work! You are almost there — review the questions you got wrong.' },
    { minScore: 11, message: 'Good effort! Go back and read through the study guide for the sections you struggled with.' },
    { minScore: 0, message: 'Keep going! Read through the study guide again carefully and then retry.' },
  ],
}
