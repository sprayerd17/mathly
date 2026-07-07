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
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Missing values, single operation (Easy) — positions 0-4
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n□ − 15 = 27', answer: '42', checkMode: 'auto', correctAnswer: '42', explanation: 'Use the inverse — addition: 27 + 15 = 42.\n□ = 42\nCheck: 42 − 15 = 27 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n22 − □ = 13', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Use the inverse — subtraction: 22 − 13 = 9.\n□ = 9\nCheck: 22 − 9 = 13 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n□ × 7 = 63', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Use the inverse — division: 63 ÷ 7 = 9.\n□ = 9\nCheck: 9 × 7 = 63 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n48 ÷ □ = 8', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Use the inverse — multiplication: 8 × 6 = 48.\n□ = 6\nCheck: 48 ÷ 6 = 8 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n□ + 56 = 100', answer: '44', checkMode: 'auto', correctAnswer: '44', explanation: 'Use the inverse — subtraction: 100 − 56 = 44.\n□ = 44\nCheck: 44 + 56 = 100 ✓' },

        // Block 2 — True/false judgment (Easy-Medium) — positions 5-8
        { difficulty: 'Easy', question: 'Is the following number sentence true or false?\n\n7 + 8 = 16\n\nType true or false.', answer: 'false', checkMode: 'auto', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Calculate the left side: 7 + 8 = 15.\nIs 15 = 16? No — 15 does not equal 16.\nFalse number sentence.' },
        { difficulty: 'Medium', question: 'Is the following number sentence true or false?\n\n9 × 6 > 50\n\nType true or false.', answer: 'true', checkMode: 'auto', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Calculate the left side: 9 × 6 = 54.\nIs 54 > 50? Yes — 54 is greater than 50.\nTrue number sentence.' },
        { difficulty: 'Medium', question: 'Is the following number sentence true or false?\n\n84 ÷ 7 < 11\n\nType true or false.', answer: 'false', checkMode: 'auto', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Calculate the left side: 84 ÷ 7 = 12.\nIs 12 < 11? No — 12 is greater than 11, not less.\nFalse number sentence.' },
        { difficulty: 'Medium', question: 'Write true or false for each number sentence:\n\na) 6 × 9 = 54\nb) 72 − 28 < 50\nc) 13 × 4 > 60', answer: 'a) True  b) True  c) False', checkMode: 'auto', parts: [ { label: 'a) 6 × 9 = 54', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Left side: 6 × 9 = 54. Is 54 = 54? Yes. True number sentence.' }, { label: 'b) 72 − 28 < 50', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Left side: 72 − 28 = 44. Is 44 < 50? Yes. True number sentence.' }, { label: 'c) 13 × 4 > 60', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Left side: 13 × 4 = 52. Is 52 > 60? No, 52 is less than 60. False number sentence.' } ] },

        // Block 3 — Reasoning / error-spotting (Medium) — positions 9-11
        { difficulty: 'Medium', question: 'A student says that to find the missing value in □ + 6 = 13, you should add 6 to 13. Is the student correct? Explain your reasoning.', answer: 'No, the student is not correct. Since 6 is being added to the missing value, you must use the inverse operation — subtraction — to undo the addition. You should subtract: 13 − 6 = 7, so □ = 7. Adding 6 to 13 instead would give the wrong answer (19), which does not make the original number sentence true.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Sipho solves the number sentence □ × 4 = 36 and gets □ = 9. Explain how he could check whether his answer is correct, and show the check.', answer: 'Sipho can check his answer by substituting his value back into the original number sentence. He replaces □ with 9: 9 × 4 = 36. Since the left side (36) equals the right side (36), the number sentence is true, so his answer of □ = 9 is correct.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A classmate says that 8 × 6 = 42 is a true number sentence "because 42 sounds about right for 8 times 6." Do you agree with this reasoning? Explain what is wrong with it and give the correct answer.', answer: 'No, I do not agree. You cannot decide whether a number sentence is true just because a number "sounds about right" — you must actually calculate the left side and compare it to the right side. 8 × 6 = 48, not 42. Since 48 ≠ 42, the number sentence 8 × 6 = 42 is false. The correct calculation shows the mistake — always calculate carefully rather than guessing from a rough impression of the size of the answer.', checkMode: 'self' },

        // Block 4 — Word problems: translate and solve, one step (Medium) — positions 12-16
        { difficulty: 'Medium', question: 'Thabo has 34 stickers. He buys 19 more. Write a number sentence and solve it to find how many stickers he has altogether.\n\nWrite only the total number.', answer: '53', checkMode: 'auto', correctAnswer: '53', explanation: 'Number sentence: 34 + 19 = □\n34 + 19 = 53\nThabo has 53 stickers altogether ✓' },
        { difficulty: 'Medium', question: 'A netball team scores 45 points in the first half. By the end of the match they have scored 78 points in total. Write a number sentence and solve it to find how many points they scored in the second half.\n\nWrite only the number.', answer: '33', checkMode: 'auto', correctAnswer: '33', explanation: 'Number sentence: 45 + □ = 78\nUse the inverse: 78 − 45 = 33\nThey scored 33 points in the second half ✓' },
        { difficulty: 'Medium', question: 'A recipe needs 3 eggs to make one batch of muffins. Write a number sentence and solve it to find how many eggs are needed for 8 batches.\n\nWrite only the number.', answer: '24', checkMode: 'auto', correctAnswer: '24', explanation: 'Number sentence: 3 × 8 = □\n3 × 8 = 24\n24 eggs are needed for 8 batches ✓' },
        { difficulty: 'Medium', question: 'The class needs to arrange 36 chairs into equal rows for a classroom assembly, with 9 chairs in each row. Write a number sentence and solve it to find how many rows are needed.\n\nWrite only the number.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'Number sentence: 36 ÷ 9 = □\n36 ÷ 9 = 4\n4 rows are needed ✓' },
        { difficulty: 'Medium', question: 'A family travels 240 km on the first day of a road trip. By the end of day two, they have travelled 410 km in total.\n\na) Write the number sentence for this problem. Use □ for the unknown value.\nb) Solve it to find how far they travelled on day two. Write only the number.\nc) Explain why you chose subtraction (as the inverse) rather than addition to solve for the missing value.', answer: 'a) 240 + □ = 410  b) 170  c) Because the unknown distance was added to 240 to reach the total of 410, so subtracting 240 from 410 undoes that addition and reveals the missing value.', parts: [ { label: 'a) Number sentence', correctAnswer: '240+□=410', correctAnswers: ['240+□=410', '240+?=410', '240+n=410'], explanation: 'An unknown distance is added to 240 to give a total of 410.\nNumber sentence: 240 + □ = 410', checkMode: 'auto' }, { label: 'b) Distance on day two', correctAnswer: '170', explanation: 'Use the inverse — subtraction: 410 − 240 = 170.\n□ = 170', checkMode: 'auto' }, { label: 'c) Reasoning', answer: 'Because the unknown distance was added to 240, the inverse operation (subtraction) is needed to isolate and find it: 410 − 240 = 170.', explanation: 'Since the missing value was added to 240, subtracting undoes that addition and reveals the missing value.', checkMode: 'self' } ], checkMode: 'auto' },

        // Block 5 — Multi-step and comparisons (Hard) — positions 17-19
        { difficulty: 'Hard', question: 'Sipho buys 3 boxes of pens with 12 pens in each box, then buys 7 more loose pens. Write the calculation and find the total number of pens.\n\nWrite only the number.', answer: '43', checkMode: 'auto', correctAnswer: '43', explanation: '3 × 12 = 36\n36 + 7 = 43\nSipho has 43 pens in total ✓' },
        { difficulty: 'Hard', question: 'Which of these two number sentences is true — A or B?\n\nA) 9 × 7 − 15 = 48\nB) 6 × 8 + 10 = 60\n\nWrite only "A" or "B".', answer: 'A', checkMode: 'auto', correctAnswer: 'a', correctAnswers: ['a', 'A'], explanation: 'A) 9 × 7 = 63, then 63 − 15 = 48. This matches, so A is true.\nB) 6 × 8 = 48, then 48 + 10 = 58. This does not equal 60, so B is false.\nThe true number sentence is A.' },
        { difficulty: 'Hard', question: 'Explain the difference between an open number sentence and a number sentence that can be judged true or false. Give one example of each.', answer: 'A number sentence that can be judged true or false has no missing value — every number is known, so you can calculate both sides and compare them, e.g. 4 + 5 = 9 (true) or 3 × 6 = 20 (false). An open number sentence has a missing value shown as a box (□) or letter, and instead of being simply true or false, you must find the number that makes it true, e.g. □ + 5 = 9, where □ = 4.', checkMode: 'self' },
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
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n□ − 25 = 17', answer: '42', checkMode: 'auto', correctAnswer: '42', explanation: 'Use the inverse — addition: 17 + 25 = 42.\n□ = 42\nCheck: 42 − 25 = 17 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n5 × □ = 35', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Use the inverse — division: 35 ÷ 5 = 7.\n□ = 7\nCheck: 5 × 7 = 35 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n□ ÷ 5 = 7', answer: '35', checkMode: 'auto', correctAnswer: '35', explanation: 'Use the inverse — multiplication: 7 × 5 = 35.\n□ = 35\nCheck: 35 ÷ 5 = 7 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n15 − □ = 8', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Use the inverse — subtraction: 15 − 8 = 7.\n□ = 7\nCheck: 15 − 7 = 8 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n□ + 48 = 91', answer: '43', checkMode: 'auto', correctAnswer: '43', explanation: 'Use the inverse — subtraction: 91 − 48 = 43.\n□ = 43\nCheck: 43 + 48 = 91 ✓' },

        // Block 2 — True/false judgment (Easy-Medium) — positions 5-8
        { difficulty: 'Easy', question: 'Is the following number sentence true or false?\n\n45 ÷ 5 = 9\n\nType true or false.', answer: 'true', checkMode: 'auto', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Calculate the left side: 45 ÷ 5 = 9.\nIs 9 = 9? Yes — both sides are equal.\nTrue number sentence.' },
        { difficulty: 'Medium', question: 'Is the following number sentence true or false?\n\n12 + 19 = 30\n\nType true or false.', answer: 'false', checkMode: 'auto', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Calculate the left side: 12 + 19 = 31.\nIs 31 = 30? No — 31 does not equal 30.\nFalse number sentence.' },
        { difficulty: 'Medium', question: 'Is the following number sentence true or false?\n\n11 × 6 < 60\n\nType true or false.', answer: 'false', checkMode: 'auto', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Calculate the left side: 11 × 6 = 66.\nIs 66 < 60? No — 66 is greater than 60, not less.\nFalse number sentence.' },
        { difficulty: 'Medium', question: 'Write true or false for each number sentence:\n\na) 9 × 6 = 54\nb) 100 − 37 = 63\nc) 96 ÷ 8 > 13', answer: 'a) True  b) True  c) False', checkMode: 'auto', parts: [ { label: 'a) 9 × 6 = 54', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Left side: 9 × 6 = 54. Is 54 = 54? Yes. True number sentence.' }, { label: 'b) 100 − 37 = 63', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Left side: 100 − 37 = 63. Is 63 = 63? Yes. True number sentence.' }, { label: 'c) 96 ÷ 8 > 13', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Left side: 96 ÷ 8 = 12. Is 12 > 13? No, 12 is less than 13. False number sentence.' } ] },

        // Block 3 — Reasoning / error-spotting (Medium) — positions 9-11
        { difficulty: 'Medium', question: 'Explain, in your own words, why you use subtraction to find the missing value in □ + 6 = 13, but you use addition to find the missing value in □ − 6 = 13.', answer: 'Addition and subtraction are inverse operations — they undo each other. In □ + 6 = 13, a number is being added, so subtracting 6 from 13 undoes the addition and reveals the missing value (7). In □ − 6 = 13, a number is being subtracted, so adding 6 to 13 undoes the subtraction and reveals the missing value (19). Using the inverse operation always "undoes" what was done to isolate the missing value.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Thabo claims that in the number sentence □ + □ = 20, the missing value must always be 10. Is he correct? Explain your reasoning.', answer: 'Thabo is correct only if both boxes must represent the exact same missing value. In that case, we need a number that when added to itself equals 20, and 10 is the only number that works (10 + 10 = 20). It is important to check whether the problem intends both boxes to stand for the same unknown value, or whether they could represent two different unknowns — if they could differ, many other pairs (like 8 and 12, or 15 and 5) would also make the sentence true.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A student says that 90 ÷ 9 = 8 is a true number sentence. A classmate disagrees. Who is correct, and how would you prove it?', answer: 'The classmate is correct — the student made an error. To prove it, calculate the left side: 90 ÷ 9 = 10 (since 9 × 10 = 90), not 8. Since 10 ≠ 8, the number sentence 90 ÷ 9 = 8 is false. You can always prove whether a number sentence is true or false by actually working out the calculation on one side and comparing it to the other side, rather than relying on a guess.', checkMode: 'self' },

        // Block 4 — Word problems: translate and solve, one step (Medium) — positions 12-16
        { difficulty: 'Medium', question: 'Sipho has 50 sweets. He gives some away and has 22 left. Write a number sentence and solve it to find how many he gave away.\n\nWrite only the number.', answer: '28', checkMode: 'auto', correctAnswer: '28', explanation: 'Number sentence: 50 − □ = 22\nUse the inverse: 50 − 22 = 28\nSipho gave away 28 sweets ✓' },
        { difficulty: 'Medium', question: 'A soccer team travels 18 km to an away game and then a further distance back home a different way, covering 45 km altogether for the round trip. Write a number sentence and solve it to find the distance travelled on the way back.\n\nWrite only the number.', answer: '27', checkMode: 'auto', correctAnswer: '27', explanation: 'Number sentence: 18 + □ = 45\nUse the inverse: 45 − 18 = 27\nThe team travelled 27 km on the way back ✓' },
        { difficulty: 'Medium', question: 'Each classroom desk seats 4 learners. Write a number sentence and solve it to find how many learners can be seated at 11 desks.\n\nWrite only the number.', answer: '44', checkMode: 'auto', correctAnswer: '44', explanation: 'Number sentence: 4 × 11 = □\n4 × 11 = 44\n44 learners can be seated ✓' },
        { difficulty: 'Medium', question: 'Amahle has 96 beads. She shares them equally among 8 friends. Write a number sentence and solve it to find how many beads each friend gets.\n\nWrite only the number.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Number sentence: 96 ÷ 8 = □\n96 ÷ 8 = 12\nEach friend gets 12 beads ✓' },
        { difficulty: 'Medium', question: 'A shop had a number of loaves of bread. By the end of the day, 59 loaves were sold, leaving 37 loaves.\n\na) Write the number sentence for this problem. Use □ for the unknown value.\nb) Solve it to find how many loaves the shop started with. Write only the number.\nc) Explain why you chose addition (as the inverse) to solve for the missing value.', answer: 'a) □ − 59 = 37  b) 96  c) Because 59 was subtracted from the missing value, so adding 59 back to 37 undoes that subtraction and reveals the missing value.', parts: [ { label: 'a) Number sentence', correctAnswer: '□-59=37', correctAnswers: ['□-59=37', '?-59=37', 'n-59=37', '□−59=37'], explanation: 'An unknown starting amount minus 59 (sold) leaves 37.\nNumber sentence: □ − 59 = 37', checkMode: 'auto' }, { label: 'b) Starting loaves', correctAnswer: '96', explanation: 'Use the inverse — addition: 37 + 59 = 96.\n□ = 96', checkMode: 'auto' }, { label: 'c) Reasoning', answer: 'Since 59 was subtracted from the missing value, addition is the inverse operation needed to isolate and find it: 37 + 59 = 96.', explanation: 'Addition undoes subtraction — adding back what was taken away reveals the original starting value.', checkMode: 'self' } ], checkMode: 'auto' },

        // Block 5 — Multi-step and comparisons (Hard) — positions 17-19
        { difficulty: 'Hard', question: 'A bakery makes 5 packs of 8 buns. It sells 15 buns. Write the calculation and find how many buns are left.\n\nWrite only the number.', answer: '25', checkMode: 'auto', correctAnswer: '25', explanation: '5 × 8 = 40\n40 − 15 = 25\nThere are 25 buns left ✓' },
        { difficulty: 'Hard', question: 'Which of these two number sentences is true — A or B?\n\nA) 8 × 9 − 12 = 65\nB) 7 × 8 + 5 = 61\n\nWrite only "A" or "B".', answer: 'B', checkMode: 'auto', correctAnswer: 'b', correctAnswers: ['b', 'B'], explanation: 'A) 8 × 9 = 72, then 72 − 12 = 60, not 65. This does not match, so A is false.\nB) 7 × 8 = 56, then 56 + 5 = 61. This matches, so B is true.\nThe true number sentence is B.' },
        { difficulty: 'Hard', question: 'Explain how you decide which operation (+, −, ×, ÷) to use when translating a word problem into a number sentence. Use your own example.', answer: 'I look for key words in the problem. Words like "altogether", "total", or "more" usually mean addition. Words like "left", "difference", or "spent" usually mean subtraction. Words like "each", "times", or "groups of" usually mean multiplication. Words like "share", "split", or "equally" usually mean division. For example, in "Thabo has 20 sweets and shares them equally among 4 friends", the word "equally" tells me to use division: 20 ÷ 4 = 5.', checkMode: 'self' },
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
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n□ + 27 = 45', answer: '18', checkMode: 'auto', correctAnswer: '18', explanation: 'Use the inverse — subtraction: 45 − 27 = 18.\n□ = 18\nCheck: 18 + 27 = 45 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n93 − □ = 47', answer: '46', checkMode: 'auto', correctAnswer: '46', explanation: 'Use the inverse — subtraction: 93 − 47 = 46.\n□ = 46\nCheck: 93 − 46 = 47 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n□ × 8 = 56', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Use the inverse — division: 56 ÷ 8 = 7.\n□ = 7\nCheck: 7 × 8 = 56 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n63 ÷ □ = 9', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Use the inverse — multiplication: 9 × 7 = 63.\n□ = 7\nCheck: 63 ÷ 7 = 9 ✓' },
        { difficulty: 'Easy', question: 'Find the missing value. Write only the number.\n\n□ − 38 = 54', answer: '92', checkMode: 'auto', correctAnswer: '92', explanation: 'Use the inverse — addition: 54 + 38 = 92.\n□ = 92\nCheck: 92 − 38 = 54 ✓' },

        // Block 2 — True/false judgment (Easy-Medium) — positions 5-8
        { difficulty: 'Easy', question: 'Is the following number sentence true or false?\n\n72 ÷ 8 = 9\n\nType true or false.', answer: 'true', checkMode: 'auto', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Calculate the left side: 72 ÷ 8 = 9.\nIs 9 = 9? Yes — both sides are equal.\nTrue number sentence.' },
        { difficulty: 'Medium', question: 'Is the following number sentence true or false?\n\n9 × 6 = 50\n\nType true or false.', answer: 'false', checkMode: 'auto', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Calculate the left side: 9 × 6 = 54.\nIs 54 = 50? No — 54 does not equal 50.\nFalse number sentence.' },
        { difficulty: 'Medium', question: 'Is the following number sentence true or false?\n\n144 ÷ 12 > 11\n\nType true or false.', answer: 'true', checkMode: 'auto', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Calculate the left side: 144 ÷ 12 = 12.\nIs 12 > 11? Yes — 12 is greater than 11.\nTrue number sentence.' },
        { difficulty: 'Medium', question: 'Write true or false for each number sentence:\n\na) 8 × 7 = 56\nb) 13 × 4 < 50\nc) 76 − 29 > 50', answer: 'a) True  b) False  c) False', checkMode: 'auto', parts: [ { label: 'a) 8 × 7 = 56', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Left side: 8 × 7 = 56. Is 56 = 56? Yes. True number sentence.' }, { label: 'b) 13 × 4 < 50', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Left side: 13 × 4 = 52. Is 52 < 50? No, 52 is greater than 50. False number sentence.' }, { label: 'c) 76 − 29 > 50', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Left side: 76 − 29 = 47. Is 47 > 50? No, 47 is less than 50. False number sentence.' } ] },

        // Block 3 — Reasoning / error-spotting (Medium) — positions 9-11
        { difficulty: 'Medium', question: 'Explain the difference between using □ + 5 = 9 and asking "is 4 + 5 = 9 true or false?" Why does one need an inverse operation and the other does not?', answer: '□ + 5 = 9 is an open number sentence — one value is unknown, so you must use an inverse operation (subtraction: 9 − 5 = 4) to find it. "Is 4 + 5 = 9 true or false?" has no unknowns — every number is already given, so you simply calculate the left side (4 + 5 = 9) and compare it to the right side to decide if the statement is true or false. No inverse operation is needed because there is nothing missing to solve for.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A student says that to check if □ = 6 is correct for the number sentence 54 ÷ □ = 9, you should calculate 54 ÷ 9. Is this the correct way to check? Explain.', answer: 'No, this is not the correct way to check. To check an answer, you substitute the found value back into the original number sentence in place of the box, not divide by the box\'s position again. The correct check is to replace □ with 6: 54 ÷ 6 = 9. Since this matches the right side of the original sentence, □ = 6 is confirmed correct. Calculating 54 ÷ 9 (which gives 6) happens to also work here because of how division and multiplication relate, but the proper checking method is always substitution back into the original sentence.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A classmate claims that 11 × 8 = 98 is a true number sentence. Do you agree? Explain how you would check.', answer: 'No, I do not agree. To check, calculate 11 × 8 = 88, not 98. Since 88 ≠ 98, the number sentence 11 × 8 = 98 is false. You should always work out the calculation yourself rather than accepting a claimed answer — this is the best way to catch a mistake like this one.', checkMode: 'self' },

        // Block 4 — Word problems: translate and solve, one step (Medium) — positions 12-16
        { difficulty: 'Medium', question: 'Lerato saves R15 every week. Write a number sentence and solve it to find how much she saves in 6 weeks.\n\nWrite only the number without the R symbol.', answer: '90', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', 'r90'], explanation: 'Number sentence: 15 × 6 = □\n15 × 6 = 90\nLerato saves R90 in 6 weeks ✓' },
        { difficulty: 'Medium', question: 'A cyclist rides 22 km on Saturday. On Sunday she rides a further distance, covering 58 km altogether over the weekend. Write a number sentence and solve it to find how far she rode on Sunday.\n\nWrite only the number.', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: 'Number sentence: 22 + □ = 58\nUse the inverse: 58 − 22 = 36\nShe rode 36 km on Sunday ✓' },
        { difficulty: 'Medium', question: 'A recipe for a pot of soup uses 6 potatoes for one pot. Write a number sentence and solve it to find how many potatoes are needed to make 7 pots.\n\nWrite only the number.', answer: '42', checkMode: 'auto', correctAnswer: '42', explanation: 'Number sentence: 6 × 7 = □\n6 × 7 = 42\n42 potatoes are needed for 7 pots ✓' },
        { difficulty: 'Medium', question: '117 pencils are shared equally among 9 learners. Write a number sentence and solve it to find how many pencils each learner gets.\n\nWrite only the number.', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: 'Number sentence: 117 ÷ 9 = □\n117 ÷ 9 = 13\nEach learner gets 13 pencils ✓' },
        { difficulty: 'Medium', question: 'A minibus taxi has 68 passengers board over the course of a morning route. At the taxi rank, 24 passengers get off.\n\na) Write the number sentence for this problem. Use □ for the unknown value.\nb) Solve it to find how many passengers are still on the taxi. Write only the number.\nc) Explain why subtraction is the correct operation to use here, rather than division.', answer: 'a) 68 − 24 = □  b) 44  c) Because passengers are getting off (a group is being removed from a total), the total decreases by that fixed group size, so subtraction models it correctly — division would only apply if the passengers were being split into equal groups, which is not what is happening here.', parts: [ { label: 'a) Number sentence', correctAnswer: '68-24=□', correctAnswers: ['68-24=□', '68-24=?', '68-24=n', '68−24=□'], explanation: 'The taxi starts with 68 passengers and 24 get off (subtracted).\nNumber sentence: 68 − 24 = □', checkMode: 'auto' }, { label: 'b) Passengers remaining', correctAnswer: '44', explanation: '68 − 24 = 44\nThere are 44 passengers still on the taxi ✓', checkMode: 'auto' }, { label: 'c) Reasoning', answer: 'Passengers getting off removes a whole group from the total, so subtraction correctly models the decrease — division would instead be used if the total were being split into equal-sized groups.', explanation: 'Removing a group from a total calls for subtraction, not division, since nothing is being shared into equal parts.', checkMode: 'self' } ], checkMode: 'auto' },

        // Block 5 — Multi-step and comparisons (Hard) — positions 17-19
        { difficulty: 'Hard', question: 'Amahle has R200. She buys 8 items that cost R15 each. Write the calculation and find how much money she has left.\n\nWrite only the number without the R symbol.', answer: '80', checkMode: 'auto', correctAnswer: '80', correctAnswers: ['80', 'r80'], explanation: '8 × 15 = 120\n200 − 120 = 80\nAmahle has R80 left ✓' },
        { difficulty: 'Hard', question: 'Which of these two number sentences is true — A or B?\n\nA) 5 × 9 + 8 = 53\nB) 6 × 7 − 9 = 32\n\nWrite only "A" or "B".', answer: 'A', checkMode: 'auto', correctAnswer: 'a', correctAnswers: ['a', 'A'], explanation: 'A) 5 × 9 = 45, then 45 + 8 = 53. This matches, so A is true.\nB) 6 × 7 = 42, then 42 − 9 = 33, not 32. This does not match, so B is false.\nThe true number sentence is A.' },
        { difficulty: 'Hard', question: 'Nomvula and Kagiso are each given a different open number sentence to solve: Nomvula has □ − 18 = 25 and Kagiso has □ − 18 = 32. Kagiso looks at Nomvula\'s working and copies her answer of □ = 43 for his own sentence. Explain why this is a mistake, and find the correct missing value for Kagiso\'s sentence.', answer: 'This is a mistake because Kagiso\'s number sentence is not identical to Nomvula\'s — the right-hand side is different (32 instead of 25), so it needs its own missing value; copying an answer from a different sentence does not make his sentence true. To find Kagiso\'s correct answer, use the inverse operation on his own sentence: 32 + 18 = 50, so □ = 50 for Kagiso. (Check: 50 − 18 = 32 ✓, whereas 43 − 18 = 25, which only satisfies Nomvula\'s sentence, not Kagiso\'s.)', checkMode: 'self' },
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
