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


      openQuestions: [],
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


      openQuestions: [],
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


      openQuestions: [],
    },
  ],


  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Missing values, single operation (Easy) — positions 0-4
        { difficulty: 'Easy', question: 'Find the missing value.\n\n□ − 15 = 27', checkMode: 'auto', options: ['42', '27', '12', '15'], correctIndex: 0, explanation: 'Use the inverse — addition: 27 + 15 = 42. □ = 42. Check: 42 − 15 = 27 ✓ (27 just repeats the given total without solving; 12 comes from subtracting 27 − 15 instead of adding; 15 just repeats the number being subtracted.)' },
        { difficulty: 'Easy', question: 'Find the missing value.\n\n22 − □ = 13', checkMode: 'auto', options: ['13', '9', '35', '22'], correctIndex: 1, explanation: 'Use the inverse — subtraction: 22 − 13 = 9. □ = 9. Check: 22 − 9 = 13 ✓ (13 just repeats a given number; 35 comes from adding 22 + 13 instead of subtracting; 22 just repeats the other given number.)' },
        { difficulty: 'Easy', question: 'Find the missing value.\n\n□ × 7 = 63', checkMode: 'auto', options: ['63', '7', '9', '441'], correctIndex: 2, explanation: 'Use the inverse — division: 63 ÷ 7 = 9. □ = 9. Check: 9 × 7 = 63 ✓ (63 and 7 just repeat the given numbers; 441 comes from multiplying 63 × 7 instead of dividing.)' },
        { difficulty: 'Easy', question: 'Find the missing value.\n\n48 ÷ □ = 8', checkMode: 'auto', options: ['48', '8', '384', '6'], correctIndex: 3, explanation: 'Use the inverse — multiplication: 8 × 6 = 48. □ = 6. Check: 48 ÷ 6 = 8 ✓ (48 and 8 just repeat the given numbers; 384 comes from multiplying 48 × 8 instead of finding the missing factor.)' },
        { difficulty: 'Easy', question: 'Find the missing value.\n\n□ + 56 = 100', checkMode: 'auto', options: ['44', '100', '56', '156'], correctIndex: 0, explanation: 'Use the inverse — subtraction: 100 − 56 = 44. □ = 44. Check: 44 + 56 = 100 ✓ (100 and 56 just repeat the given numbers; 156 comes from adding 100 + 56 instead of subtracting.)' },

        // Block 2 — True/false judgment (Easy-Medium) — positions 5-8
        { difficulty: 'Easy', question: 'Is the following number sentence true or false?\n\n7 + 8 = 16', checkMode: 'auto', options: ['True — 7 + 8 = 16', 'False — 7 + 8 = 15, not 16', 'False — 7 + 8 = 14, not 16', 'True — 7 + 8 = 15, which is close enough to 16'], correctIndex: 1, explanation: 'Calculate the left side: 7 + 8 = 15. Since 15 ≠ 16, the number sentence is false. (14 is an arithmetic slip; "close enough" is not valid mathematical reasoning — the sides must be exactly equal.)' },
        { difficulty: 'Medium', question: 'Is the following number sentence true or false?\n\n9 × 6 > 50', checkMode: 'auto', options: ['False — 9 × 6 = 45, which is less than 50', 'False — 9 × 6 = 54, but that is not greater than 50', 'True — 9 × 6 = 54, which is greater than 50', 'True — 9 × 6 = 63, which is greater than 50'], correctIndex: 2, explanation: 'Calculate the left side: 9 × 6 = 54. Since 54 > 50, the number sentence is true. (45 and 63 are times-table slips; the second option gets 54 right but misjudges the comparison.)' },
        { difficulty: 'Medium', question: 'Is the following number sentence true or false?\n\n84 ÷ 7 < 11', checkMode: 'auto', options: ['True — 84 ÷ 7 = 12, and 12 is less than 11', 'True — 84 ÷ 7 = 11, so it is equal, not less', 'False — 84 ÷ 7 = 13, which is greater than 11', 'False — 84 ÷ 7 = 12, which is greater than 11, not less'], correctIndex: 3, explanation: 'Calculate the left side: 84 ÷ 7 = 12. Since 12 is greater than 11, not less, the number sentence is false. (12 < 11 is a false claim about a correct calculation; 11 and 13 are division slips.)' },
        { difficulty: 'Medium', question: 'Write true or false for each number sentence:\n\na) 6 × 9 = 54\nb) 72 − 28 < 50\nc) 13 × 4 > 60', answer: 'a) True  b) True  c) False', checkMode: 'auto', parts: [ { label: 'a) 6 × 9 = 54', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Left side: 6 × 9 = 54. Is 54 = 54? Yes. True number sentence.' }, { label: 'b) 72 − 28 < 50', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Left side: 72 − 28 = 44. Is 44 < 50? Yes. True number sentence.' }, { label: 'c) 13 × 4 > 60', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Left side: 13 × 4 = 52. Is 52 > 60? No, 52 is less than 60. False number sentence.' } ] },

        // Block 3 — Reasoning / error-spotting (Medium) — positions 9-11
        { difficulty: 'Medium', question: 'A student says that to find the missing value in □ + 6 = 13, you should add 6 to 13. Which statement correctly evaluates the student\'s method?', checkMode: 'auto', options: ['The student is incorrect — you should subtract 6 from 13 instead, giving □ = 7.', 'The student is correct — adding gives □ = 19, which is the missing value.', 'The student is correct, since 6 + 13 = 19 and 19 − 6 = 13.', 'The student is incorrect — you should multiply 6 by 13, giving □ = 78.'], correctIndex: 0, explanation: 'Since 6 is being added to the missing value, the inverse operation — subtraction — undoes the addition: 13 − 6 = 7, so □ = 7. Adding 6 to 13 gives the wrong answer (19); multiplying is not the correct inverse of addition at all.' },
        { difficulty: 'Medium', question: 'Sipho solves the number sentence □ × 4 = 36 and gets □ = 9. Which of the following correctly checks his answer?', checkMode: 'auto', options: ['Substitute □ = 9: 9 + 4 = 13, which does not match 36, so the answer is wrong.', 'Substitute □ = 9: 9 × 4 = 36, which matches, so the answer is correct.', 'Divide 36 by 4 to get 9, but since order matters, the answer is still wrong.', 'Substitute □ = 9 into 4 × 36 to check the answer.'], correctIndex: 1, explanation: 'To check, substitute the found value back into the original number sentence: 9 × 4 = 36, which matches the right side, so □ = 9 is correct. Adding instead of multiplying, or substituting into the wrong expression, does not check the original sentence.' },
        { difficulty: 'Medium', question: 'A classmate says that 8 × 6 = 42 is a true number sentence "because 42 sounds about right for 8 times 6." Which statement correctly evaluates this?', checkMode: 'auto', options: ['The classmate is correct — 8 × 6 = 42.', 'The classmate is incorrect — 8 × 6 = 36, not 42, so the number sentence is false.', 'The classmate is incorrect — 8 × 6 = 48, not 42, so the number sentence is false.', 'The classmate is correct, since estimating is an acceptable way to judge a number sentence.'], correctIndex: 2, explanation: 'You cannot decide whether a number sentence is true just because a number "sounds about right" — you must calculate. 8 × 6 = 48, not 42, so the number sentence is false. (36 is a times-table slip; estimating is never a valid way to judge whether a number sentence is true.)' },

        // Block 4 — Word problems: translate and solve, one step (Medium) — positions 12-16
        { difficulty: 'Medium', question: 'Thabo has 34 stickers. He buys 19 more. Which calculation correctly finds how many stickers he has altogether?', checkMode: 'auto', options: ['34 + 19 = 43', '34 − 19 = 15', '34 + 19 = 63', '34 + 19 = 53'], correctIndex: 3, explanation: 'Number sentence: 34 + 19 = □. 34 + 19 = 53, so Thabo has 53 stickers altogether. (43 forgets to carry the ten; 15 wrongly subtracts instead of adding; 63 is an arithmetic slip.)' },
        { difficulty: 'Medium', question: 'A netball team scores 45 points in the first half. By the end of the match they have scored 78 points in total. Which calculation correctly finds how many points they scored in the second half?', checkMode: 'auto', options: ['78 − 45 = 33', '45 + 78 = 123', '78 − 45 = 43', '78'], correctIndex: 0, explanation: 'Number sentence: 45 + □ = 78. Use the inverse: 78 − 45 = 33, so they scored 33 points in the second half. (123 wrongly adds instead of subtracting; 43 is a borrowing slip; 78 just repeats the total without solving.)' },
        { difficulty: 'Medium', question: 'A recipe needs 3 eggs to make one batch of muffins. Which calculation correctly finds how many eggs are needed for 8 batches?', checkMode: 'auto', options: ['3 + 8 = 11', '3 × 8 = 24', '3 × 8 = 21', '8 − 3 = 5'], correctIndex: 1, explanation: 'Number sentence: 3 × 8 = □. 3 × 8 = 24, so 24 eggs are needed for 8 batches. (11 wrongly adds instead of multiplying; 21 is a times-table slip; 5 wrongly subtracts instead of multiplying.)' },
        { difficulty: 'Medium', question: 'The class needs to arrange 36 chairs into equal rows for a classroom assembly, with 9 chairs in each row. Which calculation correctly finds how many rows are needed?', checkMode: 'auto', options: ['36 × 9 = 324', '36 − 9 = 27', '36 ÷ 9 = 4', '36 ÷ 9 = 3'], correctIndex: 2, explanation: 'Number sentence: 36 ÷ 9 = □. 36 ÷ 9 = 4, so 4 rows are needed. (324 wrongly multiplies instead of dividing; 27 wrongly subtracts; 3 is a times-table slip — 9 × 4 = 36, not 9 × 3.)' },
        { difficulty: 'Medium', question: 'A family travels 240 km on the first day of a road trip. By the end of day two, they have travelled 410 km in total.\n\na) Write the number sentence for this problem. Use □ for the unknown value.\nb) Solve it to find how far they travelled on day two. Write only the number.\nc) Explain why you chose subtraction (as the inverse) rather than addition to solve for the missing value.', answer: 'a) 240 + □ = 410  b) 170  c) Because the unknown distance was added to 240 to reach the total of 410, so subtracting 240 from 410 undoes that addition and reveals the missing value.', parts: [ { label: 'a) Number sentence', correctAnswer: '240+□=410', correctAnswers: ['240+□=410', '240+?=410', '240+n=410'], explanation: 'An unknown distance is added to 240 to give a total of 410.\nNumber sentence: 240 + □ = 410', checkMode: 'auto' }, { label: 'b) Distance on day two', correctAnswer: '170', explanation: 'Use the inverse — subtraction: 410 − 240 = 170.\n□ = 170', checkMode: 'auto' }, { label: 'c) Reasoning', answer: 'Because the unknown distance was added to 240, the inverse operation (subtraction) is needed to isolate and find it: 410 − 240 = 170.', explanation: 'Since the missing value was added to 240, subtracting undoes that addition and reveals the missing value.', checkMode: 'self' } ], checkMode: 'auto' },

        // Block 5 — Multi-step and comparisons (Hard) — positions 17-19
        { difficulty: 'Hard', question: 'Sipho buys 3 boxes of pens with 12 pens in each box, then buys 7 more loose pens. Which calculation correctly finds the total number of pens?', checkMode: 'auto', options: ['3 × (12 + 7) = 57', '3 + 12 × 7 = 87', '3 × 12 − 7 = 29', '3 × 12 + 7 = 43'], correctIndex: 3, explanation: '3 × 12 = 36, then 36 + 7 = 43, so Sipho has 43 pens in total. (57 wrongly adds inside the brackets before multiplying; 87 multiplies the wrong two numbers; 29 wrongly subtracts the loose pens instead of adding them.)' },
        { difficulty: 'Hard', question: 'Which of these two number sentences is true?\n\nA) 9 × 7 − 15 = 48\nB) 6 × 8 + 10 = 60', checkMode: 'auto', options: ['Only A is true', 'Only B is true', 'Both A and B are true', 'Neither A nor B is true'], correctIndex: 0, explanation: 'A) 9 × 7 = 63, then 63 − 15 = 48. This matches, so A is true. B) 6 × 8 = 48, then 48 + 10 = 58. This does not equal 60, so B is false. Only A is true.' },
        { difficulty: 'Hard', question: 'Which statement correctly explains the difference between an open number sentence and a number sentence that can be judged true or false?', checkMode: 'auto', options: ['An open number sentence has no missing value, e.g. 4 + 5 = 9; a true/false sentence has a missing value, e.g. □ + 5 = 9.', 'An open number sentence has a missing value shown as □, e.g. □ + 5 = 9; a true/false sentence has every value given, e.g. 4 + 5 = 9, and you calculate both sides to decide if it is true or false.', 'There is no real difference — both types of number sentence are solved the same way.', 'An open number sentence always involves multiplication, while a true/false sentence always involves addition.'], correctIndex: 1, explanation: 'A true/false number sentence has no unknowns — you calculate both sides and compare them, e.g. 4 + 5 = 9 (true). An open number sentence has a missing value shown as □, and you must find the number that makes it true, e.g. □ + 5 = 9, where □ = 4.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered finding and reasoning about missing values in number sentences.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on inverse operations and key words, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Missing values, single operation (Easy) — positions 0-4
        { difficulty: 'Easy', question: 'Find the missing value.\n\n□ − 25 = 17', checkMode: 'auto', options: ['42', '17', '8', '25'], correctIndex: 0, explanation: 'Use the inverse — addition: 17 + 25 = 42. □ = 42. Check: 42 − 25 = 17 ✓ (17 and 25 just repeat the given numbers; 8 comes from subtracting 25 − 17 instead of adding.)' },
        { difficulty: 'Easy', question: 'Find the missing value.\n\n5 × □ = 35', checkMode: 'auto', options: ['35', '7', '175', '5'], correctIndex: 1, explanation: 'Use the inverse — division: 35 ÷ 5 = 7. □ = 7. Check: 5 × 7 = 35 ✓ (35 and 5 just repeat the given numbers; 175 comes from multiplying 35 × 5 instead of dividing.)' },
        { difficulty: 'Easy', question: 'Find the missing value.\n\n□ ÷ 5 = 7', checkMode: 'auto', options: ['7', '5', '35', '1.4'], correctIndex: 2, explanation: 'Use the inverse — multiplication: 7 × 5 = 35. □ = 35. Check: 35 ÷ 5 = 7 ✓ (7 and 5 just repeat the given numbers; 1.4 comes from dividing 7 ÷ 5 instead of multiplying.)' },
        { difficulty: 'Easy', question: 'Find the missing value.\n\n15 − □ = 8', checkMode: 'auto', options: ['8', '23', '15', '7'], correctIndex: 3, explanation: 'Use the inverse — subtraction: 15 − 8 = 7. □ = 7. Check: 15 − 7 = 8 ✓ (8 and 15 just repeat the given numbers; 23 comes from adding 15 + 8 instead of subtracting.)' },
        { difficulty: 'Easy', question: 'Find the missing value.\n\n□ + 48 = 91', checkMode: 'auto', options: ['43', '91', '48', '139'], correctIndex: 0, explanation: 'Use the inverse — subtraction: 91 − 48 = 43. □ = 43. Check: 43 + 48 = 91 ✓ (91 and 48 just repeat the given numbers; 139 comes from adding 91 + 48 instead of subtracting.)' },

        // Block 2 — True/false judgment (Easy-Medium) — positions 5-8
        { difficulty: 'Easy', question: 'Is the following number sentence true or false?\n\n45 ÷ 5 = 9', checkMode: 'auto', options: ['False — 45 ÷ 5 = 8, not 9', 'True — 45 ÷ 5 = 9, so both sides are equal', 'False — 45 ÷ 5 = 10, not 9', 'True, but only because 9 is close to the answer'], correctIndex: 1, explanation: 'Calculate the left side: 45 ÷ 5 = 9. Since 9 = 9, the number sentence is true. (8 and 10 are division slips; "close to" is not valid reasoning — the sides must be exactly equal.)' },
        { difficulty: 'Medium', question: 'Is the following number sentence true or false?\n\n12 + 19 = 30', checkMode: 'auto', options: ['True — 12 + 19 = 30', 'False — 12 + 19 = 32, not 30', 'False — 12 + 19 = 31, not 30', 'True — 12 + 19 = 31, which is close enough to 30'], correctIndex: 2, explanation: 'Calculate the left side: 12 + 19 = 31. Since 31 ≠ 30, the number sentence is false. (32 is an arithmetic slip; "close enough" is not valid mathematical reasoning.)' },
        { difficulty: 'Medium', question: 'Is the following number sentence true or false?\n\n11 × 6 < 60', checkMode: 'auto', options: ['True — 11 × 6 = 66, and 66 is less than 60', 'True — 11 × 6 = 60, so it cannot be less than itself', 'False — 11 × 6 = 56, which is less than 60', 'False — 11 × 6 = 66, which is greater than 60, not less'], correctIndex: 3, explanation: 'Calculate the left side: 11 × 6 = 66. Since 66 is greater than 60, not less, the number sentence is false. (56 is a times-table slip; "66 is less than 60" is a false claim about a correct calculation.)' },
        { difficulty: 'Medium', question: 'Write true or false for each number sentence:\n\na) 9 × 6 = 54\nb) 100 − 37 = 63\nc) 96 ÷ 8 > 13', answer: 'a) True  b) True  c) False', checkMode: 'auto', parts: [ { label: 'a) 9 × 6 = 54', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Left side: 9 × 6 = 54. Is 54 = 54? Yes. True number sentence.' }, { label: 'b) 100 − 37 = 63', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Left side: 100 − 37 = 63. Is 63 = 63? Yes. True number sentence.' }, { label: 'c) 96 ÷ 8 > 13', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Left side: 96 ÷ 8 = 12. Is 12 > 13? No, 12 is less than 13. False number sentence.' } ] },

        // Block 3 — Reasoning / error-spotting (Medium) — positions 9-11
        { difficulty: 'Medium', question: 'Which statement correctly explains why you use subtraction to find the missing value in □ + 6 = 13, but addition to find the missing value in □ − 6 = 13?', checkMode: 'auto', options: ['Because addition and subtraction are inverse operations — subtracting undoes adding, and adding undoes subtracting.', 'Because subtraction is always used first in any number sentence, regardless of the operation shown.', 'Because the number 6 changes value depending on which side of the equals sign it is on.', 'Because you should always use the same operation shown in the number sentence to find the missing value.'], correctIndex: 0, explanation: 'Addition and subtraction are inverse operations — they undo each other. In □ + 6 = 13, subtracting 6 from 13 undoes the addition and reveals □ = 7. In □ − 6 = 13, adding 6 to 13 undoes the subtraction and reveals □ = 19.' },
        { difficulty: 'Medium', question: 'Thabo claims that in the number sentence □ + 8 = 20, the missing value must be 12. Which statement correctly evaluates his claim?', checkMode: 'auto', options: ['He is incorrect — the missing value is 28, since 20 + 8 = 28.', 'He is correct — 20 − 8 = 12, and checking gives 12 + 8 = 20.', 'He is incorrect — the missing value is 8, since he copied the wrong number.', 'He is correct, but only because 8 and 12 add up to a number close to 20.'], correctIndex: 1, explanation: 'Since 8 is added to the missing value, use the inverse operation — subtraction — to undo it: 20 − 8 = 12, so □ = 12. Checking by substituting back: 12 + 8 = 20 ✓, confirming Thabo is correct.' },
        { difficulty: 'Medium', question: 'A student says that 90 ÷ 9 = 8 is a true number sentence. A classmate disagrees. Which statement correctly resolves this?', checkMode: 'auto', options: ['The student is correct — 90 ÷ 9 = 8.', 'The classmate is correct — 90 ÷ 9 = 9, not 8.', 'The classmate is correct — 90 ÷ 9 = 10, not 8.', 'Both are wrong — 90 ÷ 9 = 11.'], correctIndex: 2, explanation: 'Calculate the left side: 90 ÷ 9 = 10 (since 9 × 10 = 90), not 8. Since 10 ≠ 8, the number sentence 90 ÷ 9 = 8 is false, so the classmate is correct.' },

        // Block 4 — Word problems: translate and solve, one step (Medium) — positions 12-16
        { difficulty: 'Medium', question: 'Sipho has 50 sweets. He gives some away and has 22 left. Which calculation correctly finds how many he gave away?', checkMode: 'auto', options: ['50 + 22 = 72', '50 − 22 = 38', '22 = 22', '50 − 22 = 28'], correctIndex: 3, explanation: 'Number sentence: 50 − □ = 22. Use the inverse: 50 − 22 = 28, so Sipho gave away 28 sweets. (72 wrongly adds instead of subtracting; 38 is a borrowing slip; 22 just repeats the given remaining amount without solving.)' },
        { difficulty: 'Medium', question: 'A soccer team travels 18 km to an away game and then a further distance back home a different way, covering 45 km altogether for the round trip. Which calculation correctly finds the distance travelled on the way back?', checkMode: 'auto', options: ['45 − 18 = 27', '18 + 45 = 63', '45 − 18 = 37', '45'], correctIndex: 0, explanation: 'Number sentence: 18 + □ = 45. Use the inverse: 45 − 18 = 27, so the team travelled 27 km on the way back. (63 wrongly adds instead of subtracting; 37 is a borrowing slip; 45 just repeats the total without solving.)' },
        { difficulty: 'Medium', question: 'Each classroom desk seats 4 learners. Which calculation correctly finds how many learners can be seated at 11 desks?', checkMode: 'auto', options: ['4 + 11 = 15', '4 × 11 = 44', '4 × 11 = 41', '11 − 4 = 7'], correctIndex: 1, explanation: 'Number sentence: 4 × 11 = □. 4 × 11 = 44, so 44 learners can be seated. (15 wrongly adds instead of multiplying; 41 is a times-table slip; 7 wrongly subtracts instead of multiplying.)' },
        { difficulty: 'Medium', question: 'Amahle has 96 beads. She shares them equally among 8 friends. Which calculation correctly finds how many beads each friend gets?', checkMode: 'auto', options: ['96 × 8 = 768', '96 − 8 = 88', '96 ÷ 8 = 12', '96 ÷ 8 = 11'], correctIndex: 2, explanation: 'Number sentence: 96 ÷ 8 = □. 96 ÷ 8 = 12, so each friend gets 12 beads. (768 wrongly multiplies instead of dividing; 88 wrongly subtracts; 11 is a times-table slip — 8 × 12 = 96, not 8 × 11.)' },
        { difficulty: 'Medium', question: 'A shop had a number of loaves of bread. By the end of the day, 59 loaves were sold, leaving 37 loaves.\n\na) Write the number sentence for this problem. Use □ for the unknown value.\nb) Solve it to find how many loaves the shop started with. Write only the number.\nc) Explain why you chose addition (as the inverse) to solve for the missing value.', answer: 'a) □ − 59 = 37  b) 96  c) Because 59 was subtracted from the missing value, so adding 59 back to 37 undoes that subtraction and reveals the missing value.', parts: [ { label: 'a) Number sentence', correctAnswer: '□-59=37', correctAnswers: ['□-59=37', '?-59=37', 'n-59=37', '□−59=37'], explanation: 'An unknown starting amount minus 59 (sold) leaves 37.\nNumber sentence: □ − 59 = 37', checkMode: 'auto' }, { label: 'b) Starting loaves', correctAnswer: '96', explanation: 'Use the inverse — addition: 37 + 59 = 96.\n□ = 96', checkMode: 'auto' }, { label: 'c) Reasoning', answer: 'Since 59 was subtracted from the missing value, addition is the inverse operation needed to isolate and find it: 37 + 59 = 96.', explanation: 'Addition undoes subtraction — adding back what was taken away reveals the original starting value.', checkMode: 'self' } ], checkMode: 'auto' },

        // Block 5 — Multi-step and comparisons (Hard) — positions 17-19
        { difficulty: 'Hard', question: 'A bakery makes 5 packs of 8 buns. It sells 15 buns. Which calculation correctly finds how many buns are left?', checkMode: 'auto', options: ['5 × (8 − 15) = −35', '5 + 8 × 15 = 125', '5 × 8 + 15 = 55', '5 × 8 − 15 = 25'], correctIndex: 3, explanation: '5 × 8 = 40, then 40 − 15 = 25, so there are 25 buns left. (−35 wrongly subtracts inside the brackets before multiplying; 125 multiplies the wrong two numbers; 55 wrongly adds the sold buns instead of subtracting them.)' },
        { difficulty: 'Hard', question: 'Which of these two number sentences is true?\n\nA) 8 × 9 − 12 = 65\nB) 7 × 8 + 5 = 61', checkMode: 'auto', options: ['Only B is true', 'Only A is true', 'Both A and B are true', 'Neither A nor B is true'], correctIndex: 0, explanation: 'A) 8 × 9 = 72, then 72 − 12 = 60, not 65, so A is false. B) 7 × 8 = 56, then 56 + 5 = 61. This matches, so B is true. Only B is true.' },
        { difficulty: 'Hard', question: 'Which statement correctly explains how to decide which operation (+, −, ×, ÷) to use when translating a word problem into a number sentence?', checkMode: 'auto', options: ['You should always guess the operation based on how big the numbers in the problem look.', 'Look for key words: words like "altogether" or "more" suggest addition, "left" or "difference" suggest subtraction, "each" or "times" suggest multiplication, and "share" or "equally" suggest division.', 'The operation is always determined by which number appears first in the sentence.', 'Word problems can only be solved using addition and subtraction, never multiplication or division.'], correctIndex: 1, explanation: 'Key words tell you which operation to use — for example, "equally" in "Thabo has 20 sweets and shares them equally among 4 friends" tells you to divide: 20 ÷ 4 = 5. Guessing from number size, sentence order, or ruling out operations is not reliable.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered finding and reasoning about missing values in number sentences.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on inverse operations and key words, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Missing values, single operation (Easy) — positions 0-4
        { difficulty: 'Easy', question: 'Find the missing value.\n\n□ + 27 = 45', checkMode: 'auto', options: ['18', '45', '27', '72'], correctIndex: 0, explanation: 'Use the inverse — subtraction: 45 − 27 = 18. □ = 18. Check: 18 + 27 = 45 ✓ (45 and 27 just repeat the given numbers; 72 comes from adding 45 + 27 instead of subtracting.)' },
        { difficulty: 'Easy', question: 'Find the missing value.\n\n93 − □ = 47', checkMode: 'auto', options: ['47', '46', '140', '93'], correctIndex: 1, explanation: 'Use the inverse — subtraction: 93 − 47 = 46. □ = 46. Check: 93 − 46 = 47 ✓ (47 and 93 just repeat the given numbers; 140 comes from adding 93 + 47 instead of subtracting.)' },
        { difficulty: 'Easy', question: 'Find the missing value.\n\n□ × 8 = 56', checkMode: 'auto', options: ['56', '8', '7', '448'], correctIndex: 2, explanation: 'Use the inverse — division: 56 ÷ 8 = 7. □ = 7. Check: 7 × 8 = 56 ✓ (56 and 8 just repeat the given numbers; 448 comes from multiplying 56 × 8 instead of dividing.)' },
        { difficulty: 'Easy', question: 'Find the missing value.\n\n63 ÷ □ = 9', checkMode: 'auto', options: ['63', '9', '567', '7'], correctIndex: 3, explanation: 'Use the inverse — multiplication: 9 × 7 = 63. □ = 7. Check: 63 ÷ 7 = 9 ✓ (63 and 9 just repeat the given numbers; 567 comes from multiplying 63 × 9 instead of finding the missing factor.)' },
        { difficulty: 'Easy', question: 'Find the missing value.\n\n□ − 38 = 54', checkMode: 'auto', options: ['92', '54', '38', '16'], correctIndex: 0, explanation: 'Use the inverse — addition: 54 + 38 = 92. □ = 92. Check: 92 − 38 = 54 ✓ (54 and 38 just repeat the given numbers; 16 comes from subtracting 54 − 38 instead of adding.)' },

        // Block 2 — True/false judgment (Easy-Medium) — positions 5-8
        { difficulty: 'Easy', question: 'Is the following number sentence true or false?\n\n72 ÷ 8 = 9', checkMode: 'auto', options: ['False — 72 ÷ 8 = 8, not 9', 'True — 72 ÷ 8 = 9, so both sides are equal', 'False — 72 ÷ 8 = 10, not 9', 'True, but only because 9 is close to the answer'], correctIndex: 1, explanation: 'Calculate the left side: 72 ÷ 8 = 9. Since 9 = 9, the number sentence is true. (8 and 10 are division slips; "close to" is not valid reasoning — the sides must be exactly equal.)' },
        { difficulty: 'Medium', question: 'Is the following number sentence true or false?\n\n9 × 6 = 50', checkMode: 'auto', options: ['True — 9 × 6 = 50', 'False — 9 × 6 = 56, not 50', 'False — 9 × 6 = 54, not 50', 'True — 9 × 6 = 54, which is close enough to 50'], correctIndex: 2, explanation: 'Calculate the left side: 9 × 6 = 54. Since 54 ≠ 50, the number sentence is false. (56 is a times-table slip; "close enough" is not valid mathematical reasoning.)' },
        { difficulty: 'Medium', question: 'Is the following number sentence true or false?\n\n144 ÷ 12 > 11', checkMode: 'auto', options: ['False — 144 ÷ 12 = 11, so it cannot be greater than 11', 'False — 144 ÷ 12 = 10, which is less than 11', 'True — 144 ÷ 12 = 13, which is greater than 11', 'True — 144 ÷ 12 = 12, which is greater than 11'], correctIndex: 3, explanation: 'Calculate the left side: 144 ÷ 12 = 12. Since 12 is greater than 11, the number sentence is true. (10 and 13 are division slips; the first option gets the comparison direction confused with a wrong calculation.)' },
        { difficulty: 'Medium', question: 'Write true or false for each number sentence:\n\na) 8 × 7 = 56\nb) 13 × 4 < 50\nc) 76 − 29 > 50', answer: 'a) True  b) False  c) False', checkMode: 'auto', parts: [ { label: 'a) 8 × 7 = 56', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Left side: 8 × 7 = 56. Is 56 = 56? Yes. True number sentence.' }, { label: 'b) 13 × 4 < 50', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Left side: 13 × 4 = 52. Is 52 < 50? No, 52 is greater than 50. False number sentence.' }, { label: 'c) 76 − 29 > 50', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Left side: 76 − 29 = 47. Is 47 > 50? No, 47 is less than 50. False number sentence.' } ] },

        // Block 3 — Reasoning / error-spotting (Medium) — positions 9-11
        { difficulty: 'Medium', question: 'Which statement correctly explains the difference between □ + 5 = 9 and the question "is 4 + 5 = 9 true or false?"', checkMode: 'auto', options: ['□ + 5 = 9 needs an inverse operation because a value is missing (9 − 5 = 4); "is 4 + 5 = 9 true or false?" has no missing value, so you just calculate and compare.', 'Both need an inverse operation, since every number sentence must be solved the same way.', '□ + 5 = 9 has no missing value, but "is 4 + 5 = 9 true or false?" does, so only the second needs an inverse operation.', 'Neither needs an inverse operation, since both sentences use addition.'], correctIndex: 0, explanation: '□ + 5 = 9 is an open number sentence — one value is unknown, so an inverse operation (9 − 5 = 4) is needed. "Is 4 + 5 = 9 true or false?" has every number given, so you simply calculate 4 + 5 and compare it to 9 — no inverse operation is needed.' },
        { difficulty: 'Medium', question: 'A student says that to check if □ = 6 is correct for 54 ÷ □ = 9, you should calculate 54 ÷ 9. Which statement correctly evaluates this method?', checkMode: 'auto', options: ['Yes — dividing 54 by 9 is exactly how you check any answer.', 'No — you should substitute □ = 6 back into the original sentence: 54 ÷ 6 = 9, which confirms the answer.', 'No — you should instead calculate 9 × 54 to check the answer.', 'Yes, but only because division and multiplication give completely unrelated results.'], correctIndex: 1, explanation: 'To check an answer, substitute the found value back into the original number sentence: 54 ÷ 6 = 9, which matches, confirming □ = 6 is correct. Calculating 54 ÷ 9 happens to also give 6, but the proper checking method is substitution back into the original sentence, not recomputing a different expression.' },
        { difficulty: 'Medium', question: 'A classmate claims that 11 × 8 = 98 is a true number sentence. Which statement correctly evaluates this claim?', checkMode: 'auto', options: ['Yes, 11 × 8 = 98.', 'No, 11 × 8 = 80, not 98.', 'No, 11 × 8 = 88, not 98.', 'Yes, but only because 98 and 88 round to about the same value.'], correctIndex: 2, explanation: 'Calculate 11 × 8 = 88, not 98. Since 88 ≠ 98, the number sentence 11 × 8 = 98 is false. (80 is a times-table slip; rounding is never a valid way to judge whether a number sentence is true.)' },

        // Block 4 — Word problems: translate and solve, one step (Medium) — positions 12-16
        { difficulty: 'Medium', question: 'Lerato saves R15 every week. Which calculation correctly finds how much she saves in 6 weeks?', checkMode: 'auto', options: ['15 + 6 = 21', '15 × 6 = 60', '15 × 6 = 105', '15 × 6 = 90'], correctIndex: 3, explanation: 'Number sentence: 15 × 6 = □. 15 × 6 = 90, so Lerato saves R90 in 6 weeks. (21 wrongly adds instead of multiplying; 60 and 105 are times-table slips.)' },
        { difficulty: 'Medium', question: 'A cyclist rides 22 km on Saturday. On Sunday she rides a further distance, covering 58 km altogether over the weekend. Which calculation correctly finds how far she rode on Sunday?', checkMode: 'auto', options: ['58 − 22 = 36', '22 + 58 = 80', '58 − 22 = 46', '58'], correctIndex: 0, explanation: 'Number sentence: 22 + □ = 58. Use the inverse: 58 − 22 = 36, so she rode 36 km on Sunday. (80 wrongly adds instead of subtracting; 46 is a borrowing slip; 58 just repeats the total without solving.)' },
        { difficulty: 'Medium', question: 'A recipe for a pot of soup uses 6 potatoes for one pot. Which calculation correctly finds how many potatoes are needed to make 7 pots?', checkMode: 'auto', options: ['6 + 7 = 13', '6 × 7 = 42', '6 × 7 = 36', '7 − 6 = 1'], correctIndex: 1, explanation: 'Number sentence: 6 × 7 = □. 6 × 7 = 42, so 42 potatoes are needed for 7 pots. (13 wrongly adds instead of multiplying; 36 is a times-table slip; 1 wrongly subtracts instead of multiplying.)' },
        { difficulty: 'Medium', question: '117 pencils are shared equally among 9 learners. Which calculation correctly finds how many pencils each learner gets?', checkMode: 'auto', options: ['117 × 9 = 1053', '117 − 9 = 108', '117 ÷ 9 = 13', '117 ÷ 9 = 12'], correctIndex: 2, explanation: 'Number sentence: 117 ÷ 9 = □. 117 ÷ 9 = 13, so each learner gets 13 pencils. (1053 wrongly multiplies instead of dividing; 108 wrongly subtracts; 12 is a division slip.)' },
        { difficulty: 'Medium', question: 'A minibus taxi has 68 passengers board over the course of a morning route. At the taxi rank, 24 passengers get off.\n\na) Write the number sentence for this problem. Use □ for the unknown value.\nb) Solve it to find how many passengers are still on the taxi. Write only the number.\nc) Explain why subtraction is the correct operation to use here, rather than division.', answer: 'a) 68 − 24 = □  b) 44  c) Because passengers are getting off (a group is being removed from a total), the total decreases by that fixed group size, so subtraction models it correctly — division would only apply if the passengers were being split into equal groups, which is not what is happening here.', parts: [ { label: 'a) Number sentence', correctAnswer: '68-24=□', correctAnswers: ['68-24=□', '68-24=?', '68-24=n', '68−24=□'], explanation: 'The taxi starts with 68 passengers and 24 get off (subtracted).\nNumber sentence: 68 − 24 = □', checkMode: 'auto' }, { label: 'b) Passengers remaining', correctAnswer: '44', explanation: '68 − 24 = 44\nThere are 44 passengers still on the taxi ✓', checkMode: 'auto' }, { label: 'c) Reasoning', answer: 'Passengers getting off removes a whole group from the total, so subtraction correctly models the decrease — division would instead be used if the total were being split into equal-sized groups.', explanation: 'Removing a group from a total calls for subtraction, not division, since nothing is being shared into equal parts.', checkMode: 'self' } ], checkMode: 'auto' },

        // Block 5 — Multi-step and comparisons (Hard) — positions 17-19
        { difficulty: 'Hard', question: 'Amahle has R200. She buys 8 items that cost R15 each. Which calculation correctly finds how much money she has left?', checkMode: 'auto', options: ['200 − 8 × 15 computed as (200 − 8) × 15 = 2880', '8 × 15 = 120, then 200 + 120 = 320', '8 × 15 = 105, then 200 − 105 = 95', '8 × 15 = 120, then 200 − 120 = 80'], correctIndex: 3, explanation: '8 × 15 = 120, then 200 − 120 = 80, so Amahle has R80 left. (2880 applies the wrong order of operations; 320 wrongly adds instead of subtracting; 95 is a times-table slip.)' },
        { difficulty: 'Hard', question: 'Which of these two number sentences is true?\n\nA) 5 × 9 + 8 = 53\nB) 6 × 7 − 9 = 32', checkMode: 'auto', options: ['Only A is true', 'Only B is true', 'Both A and B are true', 'Neither A nor B is true'], correctIndex: 0, explanation: 'A) 5 × 9 = 45, then 45 + 8 = 53. This matches, so A is true. B) 6 × 7 = 42, then 42 − 9 = 33, not 32, so B is false. Only A is true.' },
        { difficulty: 'Hard', question: 'Nomvula and Kagiso are each given a different open number sentence to solve: Nomvula has □ − 18 = 25 and Kagiso has □ − 18 = 32. Kagiso looks at Nomvula\'s working and copies her answer of □ = 43 for his own sentence. Which statement correctly evaluates what Kagiso should have done?', checkMode: 'auto', options: ['Kagiso is correct to copy the answer, since both number sentences use the same missing-value box.', 'Kagiso is wrong to copy the answer — his sentence has a different right-hand side (32, not 25), so he must solve his own: 32 + 18 = 50.', 'Kagiso is wrong because he should have used multiplication instead of addition to find his answer.', 'Kagiso is correct, and the correct answer for both sentences is 43.'], correctIndex: 1, explanation: 'Kagiso\'s number sentence is not identical to Nomvula\'s — the right-hand side is different (32 instead of 25) — so copying her answer does not make his sentence true. Using the inverse operation on his own sentence: 32 + 18 = 50, so □ = 50 for Kagiso. (Check: 50 − 18 = 32 ✓)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered finding and reasoning about missing values in number sentences.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on inverse operations and key words, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
