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

      practiceQuestions: [],

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

      openQuestions: [],
    },
  ],


  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — FOUNDATIONS: OPEN NUMBER SENTENCES, ONE OPERATION (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: Foundations',
      questions: [
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n□ + 5 = 12', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Use the inverse — subtraction: 12 − 5 = 7.\n□ = 7\nCheck: 7 + 5 = 12 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n□ + 9 = 17', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Use the inverse — subtraction: 17 − 9 = 8.\n□ = 8\nCheck: 8 + 9 = 17 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n□ + 14 = 23', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Use the inverse — subtraction: 23 − 14 = 9.\n□ = 9\nCheck: 9 + 14 = 23 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n□ + 18 = 30', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Use the inverse — subtraction: 30 − 18 = 12.\n□ = 12\nCheck: 12 + 18 = 30 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n□ + 27 = 45', answer: '18', checkMode: 'auto', correctAnswer: '18', explanation: 'Use the inverse — subtraction: 45 − 27 = 18.\n□ = 18\nCheck: 18 + 27 = 45 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n9 − □ = 4', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Use the inverse — subtraction: 9 − 4 = 5.\n□ = 5\nCheck: 9 − 5 = 4 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n15 − □ = 8', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Use the inverse — subtraction: 15 − 8 = 7.\n□ = 7\nCheck: 15 − 7 = 8 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n22 − □ = 13', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Use the inverse — subtraction: 22 − 13 = 9.\n□ = 9\nCheck: 22 − 9 = 13 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n□ − 6 = 9', answer: '15', checkMode: 'auto', correctAnswer: '15', explanation: 'Use the inverse — addition: 9 + 6 = 15.\n□ = 15\nCheck: 15 − 6 = 9 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n□ − 14 = 19', answer: '33', checkMode: 'auto', correctAnswer: '33', explanation: 'Use the inverse — addition: 19 + 14 = 33.\n□ = 33\nCheck: 33 − 14 = 19 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n□ − 25 = 17', answer: '42', checkMode: 'auto', correctAnswer: '42', explanation: 'Use the inverse — addition: 17 + 25 = 42.\n□ = 42\nCheck: 42 − 25 = 17 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n□ × 3 = 15', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Use the inverse — division: 15 ÷ 3 = 5.\n□ = 5\nCheck: 5 × 3 = 15 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n□ × 4 = 28', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Use the inverse — division: 28 ÷ 4 = 7.\n□ = 7\nCheck: 7 × 4 = 28 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n□ × 6 = 42', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Use the inverse — division: 42 ÷ 6 = 7.\n□ = 7\nCheck: 7 × 6 = 42 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n□ × 7 = 63', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Use the inverse — division: 63 ÷ 7 = 9.\n□ = 9\nCheck: 9 × 7 = 63 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n□ × 8 = 56', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Use the inverse — division: 56 ÷ 8 = 7.\n□ = 7\nCheck: 7 × 8 = 56 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n5 × □ = 35', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Use the inverse — division: 35 ÷ 5 = 7.\n□ = 7\nCheck: 5 × 7 = 35 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n□ ÷ 2 = 8', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: 'Use the inverse — multiplication: 8 × 2 = 16.\n□ = 16\nCheck: 16 ÷ 2 = 8 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n□ ÷ 3 = 9', answer: '27', checkMode: 'auto', correctAnswer: '27', explanation: 'Use the inverse — multiplication: 9 × 3 = 27.\n□ = 27\nCheck: 27 ÷ 3 = 9 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n□ ÷ 5 = 7', answer: '35', checkMode: 'auto', correctAnswer: '35', explanation: 'Use the inverse — multiplication: 7 × 5 = 35.\n□ = 35\nCheck: 35 ÷ 5 = 7 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n24 ÷ □ = 6', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'Use the inverse — multiplication: 6 × 4 = 24.\n□ = 4\nCheck: 24 ÷ 4 = 6 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n36 ÷ □ = 4', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Use the inverse — multiplication: 4 × 9 = 36.\n□ = 9\nCheck: 36 ÷ 9 = 4 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n48 ÷ □ = 8', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Use the inverse — multiplication: 8 × 6 = 48.\n□ = 6\nCheck: 48 ÷ 6 = 8 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n63 ÷ □ = 9', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Use the inverse — multiplication: 9 × 7 = 63.\n□ = 7\nCheck: 63 ÷ 7 = 9 ✓' },
        { difficulty: 'Hard', question: 'Explain, in your own words, why you use subtraction to find the missing value in □ + 6 = 13, but you use addition to find the missing value in □ − 6 = 13.', answer: 'Addition and subtraction are inverse operations — they undo each other. In □ + 6 = 13, a number is being added, so subtracting 6 from 13 undoes the addition and reveals the missing value (7). In □ − 6 = 13, a number is being subtracted, so adding 6 to 13 undoes the subtraction and reveals the missing value (19). Using the inverse operation always "undoes" what was done to isolate the missing value.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered finding missing values in number sentences.' },
        { minScore: 19, message: 'Great work! You are confident with inverse operations — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples on inverse operations and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — LARGER NUMBERS AND TRUE/FALSE NUMBER SENTENCES (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Larger Numbers and True or False',
      questions: [
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n□ + 35 = 62', answer: '27', checkMode: 'auto', correctAnswer: '27', explanation: 'Use the inverse — subtraction: 62 − 35 = 27.\n□ = 27\nCheck: 27 + 35 = 62 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n□ + 48 = 91', answer: '43', checkMode: 'auto', correctAnswer: '43', explanation: 'Use the inverse — subtraction: 91 − 48 = 43.\n□ = 43\nCheck: 43 + 48 = 91 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n□ + 56 = 100', answer: '44', checkMode: 'auto', correctAnswer: '44', explanation: 'Use the inverse — subtraction: 100 − 56 = 44.\n□ = 44\nCheck: 44 + 56 = 100 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n76 − □ = 29', answer: '47', checkMode: 'auto', correctAnswer: '47', explanation: 'Use the inverse — subtraction: 76 − 29 = 47.\n□ = 47\nCheck: 76 − 47 = 29 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n93 − □ = 47', answer: '46', checkMode: 'auto', correctAnswer: '46', explanation: 'Use the inverse — subtraction: 93 − 47 = 46.\n□ = 46\nCheck: 93 − 46 = 47 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n□ − 38 = 54', answer: '92', checkMode: 'auto', correctAnswer: '92', explanation: 'Use the inverse — addition: 54 + 38 = 92.\n□ = 92\nCheck: 92 − 38 = 54 ✓' },
        { difficulty: 'Hard', question: 'Find the missing value. Write only the number.\n\n□ − 65 = 27', answer: '92', checkMode: 'auto', correctAnswer: '92', explanation: 'Use the inverse — addition: 27 + 65 = 92.\n□ = 92\nCheck: 92 − 65 = 27 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n□ × 9 = 81', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Use the inverse — division: 81 ÷ 9 = 9.\n□ = 9\nCheck: 9 × 9 = 81 ✓' },
        { difficulty: 'Hard', question: 'Find the missing value. Write only the number.\n\n□ × 12 = 60', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Use the inverse — division: 60 ÷ 12 = 5.\n□ = 5\nCheck: 5 × 12 = 60 ✓' },
        { difficulty: 'Hard', question: 'Find the missing value. Write only the number.\n\n11 × □ = 99', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Use the inverse — division: 99 ÷ 11 = 9.\n□ = 9\nCheck: 11 × 9 = 99 ✓' },
        { difficulty: 'Medium', question: 'Find the missing value. Write only the number.\n\n□ ÷ 6 = 12', answer: '72', checkMode: 'auto', correctAnswer: '72', explanation: 'Use the inverse — multiplication: 12 × 6 = 72.\n□ = 72\nCheck: 72 ÷ 6 = 12 ✓' },
        { difficulty: 'Hard', question: 'Find the missing value. Write only the number.\n\n□ ÷ 7 = 11', answer: '77', checkMode: 'auto', correctAnswer: '77', explanation: 'Use the inverse — multiplication: 11 × 7 = 77.\n□ = 77\nCheck: 77 ÷ 7 = 11 ✓' },
        { difficulty: 'Hard', question: 'Find the missing value. Write only the number.\n\n84 ÷ □ = 7', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Use the inverse — multiplication: 7 × 12 = 84.\n□ = 12\nCheck: 84 ÷ 12 = 7 ✓' },
        { difficulty: 'Hard', question: 'Find the missing value. Write only the number.\n\n96 ÷ □ = 8', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Use the inverse — multiplication: 8 × 12 = 96.\n□ = 12\nCheck: 96 ÷ 12 = 8 ✓' },
        { difficulty: 'Easy', question: 'Is the following number sentence true or false?\n\n7 + 8 = 16\n\nType true or false.', answer: 'false', checkMode: 'auto', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Calculate the left side: 7 + 8 = 15.\nIs 15 = 16? No — 15 does not equal 16.\nFalse number sentence.' },
        { difficulty: 'Medium', question: 'Is the following number sentence true or false?\n\n9 × 6 = 50\n\nType true or false.', answer: 'false', checkMode: 'auto', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Calculate the left side: 9 × 6 = 54.\nIs 54 = 50? No — 54 does not equal 50.\nFalse number sentence.' },
        { difficulty: 'Easy', question: 'Is the following number sentence true or false?\n\n45 ÷ 5 = 9\n\nType true or false.', answer: 'true', checkMode: 'auto', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Calculate the left side: 45 ÷ 5 = 9.\nIs 9 = 9? Yes — both sides are equal.\nTrue number sentence.' },
        { difficulty: 'Medium', question: 'Is the following number sentence true or false?\n\n12 + 19 = 30\n\nType true or false.', answer: 'false', checkMode: 'auto', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Calculate the left side: 12 + 19 = 31.\nIs 31 = 30? No — 31 does not equal 30.\nFalse number sentence.' },
        { difficulty: 'Medium', question: 'Is the following number sentence true or false?\n\n8 × 7 > 50\n\nType true or false.', answer: 'true', checkMode: 'auto', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Calculate the left side: 8 × 7 = 56.\nIs 56 > 50? Yes — 56 is greater than 50.\nTrue number sentence.' },
        { difficulty: 'Medium', question: 'Is the following number sentence true or false?\n\n100 − 37 = 63\n\nType true or false.', answer: 'true', checkMode: 'auto', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Calculate the left side: 100 − 37 = 63.\nIs 63 = 63? Yes — both sides are equal.\nTrue number sentence.' },
        { difficulty: 'Medium', question: 'Is the following number sentence true or false?\n\n13 × 4 < 50\n\nType true or false.', answer: 'false', checkMode: 'auto', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Calculate the left side: 13 × 4 = 52.\nIs 52 < 50? No — 52 is greater than 50, not less.\nFalse number sentence.' },
        { difficulty: 'Medium', question: 'Is the following number sentence true or false?\n\n72 ÷ 8 = 9\n\nType true or false.', answer: 'true', checkMode: 'auto', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Calculate the left side: 72 ÷ 8 = 9.\nIs 9 = 9? Yes — both sides are equal.\nTrue number sentence.' },
        { difficulty: 'Hard', question: 'Is the following number sentence true or false?\n\n144 ÷ 12 > 11\n\nType true or false.', answer: 'true', checkMode: 'auto', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Calculate the left side: 144 ÷ 12 = 12.\nIs 12 > 11? Yes — 12 is greater than 11.\nTrue number sentence.' },
        { difficulty: 'Hard', question: 'Is the following number sentence true or false?\n\n11 × 8 > 85\n\nType true or false.', answer: 'true', checkMode: 'auto', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Calculate the left side: 11 × 8 = 88.\nIs 88 > 85? Yes — 88 is greater than 85.\nTrue number sentence.' },
        { difficulty: 'Hard', question: 'Write true or false for each number sentence:\n\na) 6 × 9 = 54\nb) 72 − 28 < 50\nc) 7 × 9 > 60', answer: 'a) True  b) True  c) True', checkMode: 'auto', parts: [ { label: 'a) 6 × 9 = 54', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Left side: 6 × 9 = 54. Is 54 = 54? Yes. True number sentence.' }, { label: 'b) 72 − 28 < 50', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Left side: 72 − 28 = 44. Is 44 < 50? Yes. True number sentence.' }, { label: 'c) 7 × 9 > 60', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Left side: 7 × 9 = 63. Is 63 > 60? Yes. True number sentence.' } ] },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You can confidently work with larger numbers and true/false number sentences.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples on true and false number sentences.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — TRANSLATING WORD PROBLEMS INTO NUMBER SENTENCES (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Word Problems',
      questions: [
        { difficulty: 'Easy', question: 'Thabo has 34 stickers. He buys 19 more. Write a number sentence and solve it to find how many stickers he has altogether.\n\nWrite only the total number.', answer: '53', checkMode: 'auto', correctAnswer: '53', explanation: 'Number sentence: 34 + 19 = □\n34 + 19 = 53\nThabo has 53 stickers altogether ✓' },
        { difficulty: 'Easy', question: 'Sipho has 50 sweets. He gives some away and has 22 left. Write a number sentence and solve it to find how many he gave away.\n\nWrite only the number.', answer: '28', checkMode: 'auto', correctAnswer: '28', explanation: 'Number sentence: 50 − □ = 22\nUse the inverse: 50 − 22 = 28\nSipho gave away 28 sweets ✓' },
        { difficulty: 'Medium', question: 'Lerato saves R15 every week. Write a number sentence and solve it to find how much she saves in 6 weeks.\n\nWrite only the number without the R symbol.', answer: '90', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', 'r90'], explanation: 'Number sentence: 15 × 6 = □\n15 × 6 = 90\nLerato saves R90 in 6 weeks ✓' },
        { difficulty: 'Medium', question: 'Amahle has 96 beads. She shares them equally among 8 friends. Write a number sentence and solve it to find how many beads each friend gets.\n\nWrite only the number.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Number sentence: 96 ÷ 8 = □\n96 ÷ 8 = 12\nEach friend gets 12 beads ✓' },
        { difficulty: 'Medium', question: 'A box has some apples. After adding 27 more there are 63 apples altogether. Write a number sentence and solve it to find how many apples were in the box to start.\n\nWrite only the number.', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: 'Number sentence: □ + 27 = 63\nUse the inverse: 63 − 27 = 36\nThere were 36 apples to start ✓' },
        { difficulty: 'Medium', question: '48 chairs are arranged into rows of 6. Write a number sentence and solve it to find how many rows there are.\n\nWrite only the number.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Number sentence: □ × 6 = 48\nUse the inverse: 48 ÷ 6 = 8\nThere are 8 rows ✓' },
        { difficulty: 'Easy', question: 'Thabo reads 23 pages of a book, then reads 18 more pages. Write a number sentence and solve it to find the total pages he read.\n\nWrite only the number.', answer: '41', checkMode: 'auto', correctAnswer: '41', explanation: 'Number sentence: 23 + 18 = □\n23 + 18 = 41\nThabo read 41 pages altogether ✓' },
        { difficulty: 'Medium', question: '84 oranges are packed into boxes of 7. Write a number sentence and solve it to find how many boxes are needed.\n\nWrite only the number.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Number sentence: 84 ÷ 7 = □\n84 ÷ 7 = 12\n12 boxes are needed ✓' },
        { difficulty: 'Medium', question: 'Sipho has R120. He spends some money and has R45 left. Write a number sentence and solve it to find how much he spent.\n\nWrite only the number without the R symbol.', answer: '75', checkMode: 'auto', correctAnswer: '75', correctAnswers: ['75', 'r75'], explanation: 'Number sentence: 120 − □ = 45\nUse the inverse: 120 − 45 = 75\nSipho spent R75 ✓' },
        { difficulty: 'Medium', question: 'There are 9 teams in a competition, each with 8 players. Write a number sentence and solve it to find the total number of players.\n\nWrite only the number.', answer: '72', checkMode: 'auto', correctAnswer: '72', explanation: 'Number sentence: 9 × 8 = □\n9 × 8 = 72\nThere are 72 players altogether ✓' },
        { difficulty: 'Medium', question: 'Lerato has 145 marbles. She gives 67 to her brother. Write a number sentence and solve it to find how many marbles she has left.\n\nWrite only the number.', answer: '78', checkMode: 'auto', correctAnswer: '78', explanation: 'Number sentence: 145 − 67 = □\n145 − 67 = 78\nLerato has 78 marbles left ✓' },
        { difficulty: 'Medium', question: 'Amahle earns R12 per day. Write a number sentence and solve it to find how much she earns in 9 days.\n\nWrite only the number without the R symbol.', answer: '108', checkMode: 'auto', correctAnswer: '108', correctAnswers: ['108', 'r108'], explanation: 'Number sentence: 12 × 9 = □\n12 × 9 = 108\nAmahle earns R108 in 9 days ✓' },
        { difficulty: 'Hard', question: '117 pencils are shared equally among 9 learners. Write a number sentence and solve it to find how many pencils each learner gets.\n\nWrite only the number.', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: 'Number sentence: 117 ÷ 9 = □\n117 ÷ 9 = 13\nEach learner gets 13 pencils ✓' },
        { difficulty: 'Medium', question: 'A box holds 56 eggs, packed 8 per carton. Write a number sentence and solve it to find how many cartons are used.\n\nWrite only the number.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Number sentence: 56 ÷ 8 = □\n56 ÷ 8 = 7\n7 cartons are used ✓' },
        { difficulty: 'Medium', question: 'Thabo has 215 stamps. He receives 85 more. Write a number sentence and solve it to find the total number of stamps.\n\nWrite only the number.', answer: '300', checkMode: 'auto', correctAnswer: '300', explanation: 'Number sentence: 215 + 85 = □\n215 + 85 = 300\nThabo has 300 stamps altogether ✓' },
        { difficulty: 'Easy', question: 'Write a number sentence and solve it:\n\nA farmer has 42 chickens. He buys 16 more chickens. How many chickens does he have altogether?\n\na) Write the number sentence. Use □ or ? for the unknown value.\nb) Solve it. Write only the number.', answer: 'a) 42 + 16 = □  b) 58', parts: [ { label: 'a) Number sentence', correctAnswer: '42+16=□', correctAnswers: ['42+16=□', '42+16=?', '42+16=n', '16+42=□', '16+42=?'], explanation: 'The farmer starts with 42 chickens and buys 16 more.\nNumber sentence: 42 + 16 = □' }, { label: 'b) Total', correctAnswer: '58', explanation: '42 + 16 = 58\nThe farmer has 58 chickens altogether ✓' } ], checkMode: 'auto' },
        { difficulty: 'Medium', question: 'Write a number sentence and solve it:\n\nA shop had 96 loaves of bread. By the end of the day, 59 loaves were sold. How many loaves are left?\n\na) Write the number sentence. Use □ or ? for the unknown value.\nb) Solve it. Write only the number.', answer: 'a) 96 − 59 = □  b) 37', parts: [ { label: 'a) Number sentence', correctAnswer: '96-59=□', correctAnswers: ['96-59=□', '96-59=?', '96-59=n', '96−59=□'], explanation: 'The shop starts with 96 loaves and 59 are sold (subtracted).\nNumber sentence: 96 − 59 = □' }, { label: 'b) Loaves left', correctAnswer: '37', explanation: '96 − 59 = 37\nThere are 37 loaves left ✓' } ], checkMode: 'auto' },
        { difficulty: 'Medium', question: 'Write a number sentence and solve it:\n\nSipho packs 13 boxes with 7 oranges in each box. How many oranges does he pack in total?\n\na) Write the number sentence. Use □ or ? for the unknown value.\nb) Solve it. Write only the number.', answer: 'a) 13 × 7 = □  b) 91', parts: [ { label: 'a) Number sentence', correctAnswer: '13x7=□', correctAnswers: ['13x7=□', '13x7=?', '13×7=□', '7x13=□', '7×13=□'], explanation: '13 groups of 7 oranges each.\nNumber sentence: 13 × 7 = □' }, { label: 'b) Total oranges', correctAnswer: '91', explanation: '13 × 7 = 91\nSipho packs 91 oranges in total ✓' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Write a number sentence and solve it:\n\nA baker has some loaves of bread. After selling 48 loaves, 29 loaves remain. How many loaves did the baker start with?\n\na) Write the number sentence. Use □ or ? for the unknown value.\nb) Solve using inverse operations. Write only the number.\nc) Check your answer. Write the check calculation.', answer: 'a) □ − 48 = 29  b) 77  c) 77 − 48 = 29', parts: [ { label: 'a) Number sentence', correctAnswer: '□-48=29', correctAnswers: ['□-48=29', '?-48=29', 'n-48=29', '□−48=29'], explanation: 'An unknown number minus 48 equals 29.\nNumber sentence: □ − 48 = 29' }, { label: 'b) Missing value', correctAnswer: '77', explanation: 'Use the inverse — addition: 29 + 48 = 77.\n□ = 77' }, { label: 'c) Check', correctAnswer: '77-48=29', correctAnswers: ['77-48=29', '77−48=29', '29'], explanation: 'Substitute back: 77 − 48 = 29 ✓\nThe answer is correct.' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Write a number sentence and solve it:\n\nAmahle buys packets of pens. Each packet has the same number of pens. She buys 7 packets and gets 84 pens in total. How many pens are in each packet?\n\na) Write the number sentence. Use □ or ? for the unknown value.\nb) Solve it. Write only the number.\nc) If Amahle buys 3 more packets, how many extra pens will she get? Write only the number.', answer: 'a) 7 × □ = 84  b) 12  c) 36', parts: [ { label: 'a) Number sentence', correctAnswer: '7x□=84', correctAnswers: ['7x□=84', '7x?=84', '□x7=84', '7×□=84', '□×7=84'], explanation: '7 packets times the number of pens per packet equals 84.\nNumber sentence: 7 × □ = 84' }, { label: 'b) Pens per packet', correctAnswer: '12', explanation: 'Use the inverse — division: 84 ÷ 7 = 12.\n□ = 12' }, { label: 'c) Extra pens for 3 more packets', correctAnswer: '36', explanation: '3 × 12 = 36 extra pens.' } ], checkMode: 'auto' },
        { difficulty: 'Medium', question: 'Write a number sentence and solve it:\n\nA class of 32 learners is split into equal groups of 4 learners. How many groups are there?\n\na) Write the number sentence. Use □ or ? for the unknown value.\nb) Solve it. Write only the number.', answer: 'a) 32 ÷ 4 = □  b) 8', parts: [ { label: 'a) Number sentence', correctAnswer: '32÷4=□', correctAnswers: ['32÷4=□', '32/4=□', '32÷4=?', '32/4=?'], explanation: '32 learners shared equally into groups of 4.\nNumber sentence: 32 ÷ 4 = □' }, { label: 'b) Number of groups', correctAnswer: '8', explanation: '32 ÷ 4 = 8\nThere are 8 groups ✓' } ], checkMode: 'auto' },
        { difficulty: 'Medium', question: 'Lerato has some money. She spends R38 and has R57 left. Write a number sentence and solve it to find how much money she started with.\n\nWrite only the number without the R symbol.', answer: '95', checkMode: 'auto', correctAnswer: '95', correctAnswers: ['95', 'r95'], explanation: 'Number sentence: □ − 38 = 57\nUse the inverse: 57 + 38 = 95\nLerato started with R95 ✓' },
        { difficulty: 'Medium', question: 'A taxi carries 15 passengers per trip. Write a number sentence and solve it to find how many passengers it carries in 6 trips.\n\nWrite only the number.', answer: '90', checkMode: 'auto', correctAnswer: '90', explanation: 'Number sentence: 15 × 6 = □\n15 × 6 = 90\nThe taxi carries 90 passengers in 6 trips ✓' },
        { difficulty: 'Hard', question: 'A crate holds some cooldrink cans. 108 cans are shared equally among 9 crates. Write a number sentence and solve it to find how many cans are in each crate.\n\nWrite only the number.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Number sentence: 108 ÷ 9 = □\n108 ÷ 9 = 12\nEach crate holds 12 cans ✓' },
        { difficulty: 'Hard', question: 'Explain, using your own example, how you decide which operation (+, −, ×, ÷) to use when translating a word problem into a number sentence.', answer: 'I look for key words in the problem. Words like "altogether", "total", or "more" usually mean addition. Words like "left", "difference", or "spent" usually mean subtraction. Words like "each", "times", or "groups of" usually mean multiplication. Words like "share", "split", or "equally" usually mean division. For example, in "Thabo has 20 sweets and shares them equally among 4 friends", the word "equally" tells me to use division: 20 ÷ 4 = 5.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You can confidently translate word problems into number sentences.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the five-step method and the key word guide.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP AND COMBINED PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Multi-Step and Combined Problems',
      questions: [
        { difficulty: 'Medium', question: 'Sipho buys 3 boxes of pens with 12 pens in each box, then buys 7 more loose pens. Write the calculation and find the total number of pens.\n\nWrite only the number.', answer: '43', checkMode: 'auto', correctAnswer: '43', explanation: '3 × 12 = 36\n36 + 7 = 43\nSipho has 43 pens in total ✓' },
        { difficulty: 'Medium', question: 'Thabo has 45 cards. He gives 12 away, then buys 20 more. Write the calculation and find how many cards he has now.\n\nWrite only the number.', answer: '53', checkMode: 'auto', correctAnswer: '53', explanation: '45 − 12 = 33\n33 + 20 = 53\nThabo has 53 cards now ✓' },
        { difficulty: 'Medium', question: 'A bakery makes 5 packs of 8 buns. It sells 15 buns. Write the calculation and find how many buns are left.\n\nWrite only the number.', answer: '25', checkMode: 'auto', correctAnswer: '25', explanation: '5 × 8 = 40\n40 − 15 = 25\nThere are 25 buns left ✓' },
        { difficulty: 'Hard', question: 'Sipho earns R25 per day for 4 days, then spends R60. Write the calculation and find how much money he has left.\n\nWrite only the number without the R symbol.', answer: '40', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', 'r40'], explanation: '25 × 4 = 100\n100 − 60 = 40\nSipho has R40 left ✓' },
        { difficulty: 'Medium', question: 'A bookshelf has 6 shelves with 9 books on each shelf. 14 more books are added. Write the calculation and find the total number of books.\n\nWrite only the number.', answer: '68', checkMode: 'auto', correctAnswer: '68', explanation: '6 × 9 = 54\n54 + 14 = 68\nThere are 68 books in total ✓' },
        { difficulty: 'Hard', question: 'Amahle has R200. She buys 8 items that cost R15 each. Write the calculation and find how much money she has left.\n\nWrite only the number without the R symbol.', answer: '80', checkMode: 'auto', correctAnswer: '80', correctAnswers: ['80', 'r80'], explanation: '8 × 15 = 120\n200 − 120 = 80\nAmahle has R80 left ✓' },
        { difficulty: 'Medium', question: 'Lerato has 4 bags of 25 marbles each. She gives away 30 marbles. Write the calculation and find how many marbles she has left.\n\nWrite only the number.', answer: '70', checkMode: 'auto', correctAnswer: '70', explanation: '4 × 25 = 100\n100 − 30 = 70\nLerato has 70 marbles left ✓' },
        { difficulty: 'Medium', question: 'Double 34, then add 12. Write the calculation and give the answer.\n\nWrite only the number.', answer: '80', checkMode: 'auto', correctAnswer: '80', explanation: '34 × 2 = 68\n68 + 12 = 80' },
        { difficulty: 'Medium', question: 'Take half of 96, then subtract 20. Write the calculation and give the answer.\n\nWrite only the number.', answer: '28', checkMode: 'auto', correctAnswer: '28', explanation: '96 ÷ 2 = 48\n48 − 20 = 28' },
        { difficulty: 'Medium', question: 'Calculate 7 × 6, then add 19. Write the calculation and give the answer.\n\nWrite only the number.', answer: '61', checkMode: 'auto', correctAnswer: '61', explanation: '7 × 6 = 42\n42 + 19 = 61' },
        { difficulty: 'Hard', question: 'A farmer has 150 eggs. He sells 6 trays of 9 eggs each. Write the calculation and find how many eggs remain.\n\nWrite only the number.', answer: '96', checkMode: 'auto', correctAnswer: '96', explanation: '6 × 9 = 54\n150 − 54 = 96\n96 eggs remain ✓' },
        { difficulty: 'Hard', question: 'A school orders 3 groups of 14 chairs and 2 groups of 9 tables. Write the calculation and find the total number of chairs and tables ordered.\n\nWrite only the number.', answer: '60', checkMode: 'auto', correctAnswer: '60', explanation: '3 × 14 = 42\n2 × 9 = 18\n42 + 18 = 60\nThe school orders 60 items in total ✓' },
        { difficulty: 'Hard', question: 'Write a number sentence and solve it in steps:\n\nThabo buys 4 packets of biscuits with 16 biscuits in each packet. He then shares all the biscuits equally among 8 friends. How many biscuits does each friend get?\n\na) How many biscuits are there in total? Write only the number.\nb) How many biscuits does each friend get? Write only the number.', answer: 'a) 64  b) 8', parts: [ { label: 'a) Total biscuits', correctAnswer: '64', explanation: '4 × 16 = 64 biscuits in total.' }, { label: 'b) Biscuits per friend', correctAnswer: '8', explanation: '64 ÷ 8 = 8\nEach friend gets 8 biscuits ✓' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Write a number sentence and solve it in steps:\n\nA shop has 90 apples. It receives a delivery of 5 boxes with 12 apples in each box. Then it sells 84 apples. How many apples are left?\n\na) How many apples are there after the delivery? Write only the number.\nb) How many apples are left after the sale? Write only the number.', answer: 'a) 150  b) 66', parts: [ { label: 'a) After delivery', correctAnswer: '150', explanation: '5 × 12 = 60\n90 + 60 = 150 apples after the delivery.' }, { label: 'b) After sale', correctAnswer: '66', explanation: '150 − 84 = 66\nThere are 66 apples left ✓' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Write a number sentence and solve it in steps:\n\nSipho saves R20 every week for 5 weeks. He then spends R45 on a gift. How much money does he have left?\n\na) How much did Sipho save in total? Write only the number without the R symbol.\nb) How much does he have left after buying the gift? Write only the number without the R symbol.', answer: 'a) 100  b) 55', parts: [ { label: 'a) Total saved', correctAnswer: '100', correctAnswers: ['100', 'r100'], explanation: '20 × 5 = R100 saved in total.' }, { label: 'b) Left after gift', correctAnswer: '55', correctAnswers: ['55', 'r55'], explanation: '100 − 45 = 55\nSipho has R55 left ✓' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Amahle has 12 boxes with 15 oranges in each box. She removes 3 boxes completely because they are damaged. Write the calculation and find how many oranges remain.\n\nWrite only the number.', answer: '135', checkMode: 'auto', correctAnswer: '135', explanation: 'Total oranges: 12 × 15 = 180\nDamaged oranges: 3 × 15 = 45\nRemaining: 180 − 45 = 135 oranges ✓' },
        { difficulty: 'Hard', question: 'Lerato buys 6 packets of 9 sweets each for a party. She also buys 4 extra packets of 5 sweets each. Write the calculation and find the total number of sweets.\n\nWrite only the number.', answer: '74', checkMode: 'auto', correctAnswer: '74', explanation: '6 × 9 = 54\n4 × 5 = 20\n54 + 20 = 74 sweets in total ✓' },
        { difficulty: 'Medium', question: 'A number sentence says: □ + 15 = 40. If the missing value is doubled, what would the new missing value be?\n\nWrite only the number.', answer: '50', checkMode: 'auto', correctAnswer: '50', explanation: 'First find □: 40 − 15 = 25.\nDouble it: 25 × 2 = 50' },
        { difficulty: 'Medium', question: 'A number sentence says: 6 × □ = 48. If you add 10 to the missing value, what number would you get?\n\nWrite only the number.', answer: '18', checkMode: 'auto', correctAnswer: '18', explanation: 'First find □: 48 ÷ 6 = 8.\nAdd 10: 8 + 10 = 18' },
        { difficulty: 'Hard', question: 'A number sentence says: 84 ÷ □ = 12. If you subtract 3 from the missing value, what number would you get?\n\nWrite only the number.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'First find □: 84 ÷ 12 = 7.\nSubtract 3: 7 − 3 = 4' },
        { difficulty: 'Hard', question: 'A number sentence says: □ − 27 = 35. Find the missing value, then find half of that value.\n\na) What is the missing value? Write only the number.\nb) What is half of the missing value? Write only the number.', answer: 'a) 62  b) 31', parts: [ { label: 'a) Missing value', correctAnswer: '62', explanation: 'Use the inverse — addition: 35 + 27 = 62.\n□ = 62' }, { label: 'b) Half of the missing value', correctAnswer: '31', explanation: '62 ÷ 2 = 31' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Thabo says that in the number sentence □ + □ = 20, the missing value must always be 10. Is he correct? Explain your reasoning.', answer: 'No, Thabo is not correct. While □ = 10 does make the sentence true (10 + 10 = 20), the box represents the same unknown value used twice, and there could be other interpretations depending on how the number sentence is written. However, if both boxes must represent the exact same number, then 10 is indeed the only value that works, since we need a number that when added to itself equals 20. It is important to check whether both boxes are meant to represent the same missing value or two different unknowns before deciding.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho solves the number sentence □ × 4 = 36 and gets □ = 9. Explain how he could check whether his answer is correct, and show the check.', answer: 'Sipho can check his answer by substituting his value back into the original number sentence. He replaces □ with 9: 9 × 4 = 36. Since the left side (36) equals the right side (36), the number sentence is true, so his answer of □ = 9 is correct.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Explain the difference between an open number sentence and a number sentence that can be judged true or false. Give one example of each.', answer: 'A number sentence that can be judged true or false has no missing value — every number is known, so you can calculate both sides and compare them, e.g. 4 + 5 = 9 (true) or 3 × 6 = 20 (false). An open number sentence has a missing value shown as a box (□) or letter, and instead of being simply true or false, you must find the number that makes it true, e.g. □ + 5 = 9, where □ = 4.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A rectangular vegetable garden has 8 rows with 7 plants in each row. The farmer adds 2 more rows with 7 plants in each new row. Write the calculation and find the total number of plants now.\n\nWrite only the number.', answer: '70', checkMode: 'auto', correctAnswer: '70', explanation: 'Original plants: 8 × 7 = 56\nNew plants: 2 × 7 = 14\nTotal: 56 + 14 = 70 plants ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered multi-step and combined number sentence problems.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the multi-step worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
