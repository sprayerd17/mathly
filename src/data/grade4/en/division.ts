import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Division',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS DIVISION?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-division',
      title: 'What is Division?',
      icon: '➗',
      explanation: `<p style="margin-bottom:18px;">Division means <strong>splitting a number into equal groups</strong>. When you share something fairly so that each group or person gets the same amount, you are dividing. It is the opposite of multiplication.</p>

<p style="margin-bottom:12px;font-weight:600;">Three real-life examples:</p>

<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:22px;">
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;">
    <strong>24 sweets</strong> shared equally among <strong>6 friends</strong> — how many does each friend get? <span style="color:#16a34a;font-weight:700;">24 ÷ 6 = 4</span> sweets each.
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;">
    <strong>30 learners</strong> placed into <strong>5 equal teams</strong> — how many learners per team? <span style="color:#16a34a;font-weight:700;">30 ÷ 5 = 6</span> learners per team.
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;">
    <strong>18 biscuits</strong> packed into bags of <strong>3</strong> — how many bags are needed? <span style="color:#16a34a;font-weight:700;">18 ÷ 3 = 6</span> bags.
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Key words to know:</p>

<div style="display:flex;flex-direction:column;gap:9px;margin-bottom:22px;">
  <div><strong>Divide / Share equally</strong> — to split a number into equal groups.</div>
  <div><strong>Group</strong> — one of the equal parts you split into.</div>
  <div><strong style="color:#dc2626;">Dividend</strong> — the number you are dividing. It is the big number at the start. In <span style="color:#dc2626;font-weight:700;">24</span> ÷ 6, the <span style="color:#dc2626;font-weight:700;">dividend</span> is <span style="color:#dc2626;font-weight:700;">24</span>.</div>
  <div><strong style="color:#1e40af;">Divisor</strong> — the number you are dividing by. In 24 ÷ <span style="color:#1e40af;font-weight:700;">6</span>, the <span style="color:#1e40af;font-weight:700;">divisor</span> is <span style="color:#1e40af;font-weight:700;">6</span>.</div>
  <div><strong style="color:#16a34a;">Quotient</strong> — the answer you get after dividing. In 24 ÷ 6 = <span style="color:#16a34a;font-weight:700;">4</span>, the <span style="color:#16a34a;font-weight:700;">quotient</span> is <span style="color:#16a34a;font-weight:700;">4</span>.</div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Two ways to think about division:</p>

<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:10px;">
  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:8px;">Sharing Equally</div>
    <div style="margin-bottom:6px;"><span style="color:#dc2626;font-weight:700;">12</span> ÷ <span style="color:#1e40af;font-weight:700;">4</span> = <span style="color:#16a34a;font-weight:700;">3</span></div>
    <div style="font-size:14px;color:#374151;">Share <span style="color:#dc2626;font-weight:600;">12</span> into <span style="color:#1e40af;font-weight:600;">4</span> equal groups. How many is in each group? → <span style="color:#16a34a;font-weight:700;">3</span> in each group.</div>
  </div>
  <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#16a34a;margin-bottom:8px;">Grouping</div>
    <div style="margin-bottom:6px;"><span style="color:#dc2626;font-weight:700;">12</span> ÷ <span style="color:#1e40af;font-weight:700;">4</span> = <span style="color:#16a34a;font-weight:700;">3</span></div>
    <div style="font-size:14px;color:#374151;">How many groups of <span style="color:#1e40af;font-weight:600;">4</span> fit inside <span style="color:#dc2626;font-weight:600;">12</span>? → <span style="color:#16a34a;font-weight:700;">3</span> groups fit exactly.</div>
  </div>
</div>`,

      videoPlaceholder: 'Short video showing the difference between sharing equally and grouping in division',

      workedExamples: [
        {
          question: '24 ÷ 6 = ?  Show both the sharing and grouping interpretations.',
          answer: '4',
          steps: [
            `Identify the parts: <span style="color:#dc2626;font-weight:700;">24</span> is the <span style="color:#dc2626;font-weight:600;">dividend</span> (the number being divided), <span style="color:#1e40af;font-weight:700;">6</span> is the <span style="color:#1e40af;font-weight:600;">divisor</span> (what you divide by).`,
            `<strong>Sharing interpretation:</strong> Imagine sharing <span style="color:#dc2626;font-weight:700;">24</span> sweets equally among <span style="color:#1e40af;font-weight:700;">6</span> friends. Give one sweet to each friend at a time until all 24 are shared. Each friend ends up with <span style="color:#16a34a;font-weight:700;">4</span> sweets.`,
            `<strong>Grouping interpretation:</strong> Ask yourself: how many groups of <span style="color:#1e40af;font-weight:700;">6</span> fit inside <span style="color:#dc2626;font-weight:700;">24</span>? Count up in sixes: 6, 12, 18, 24 — that is <span style="color:#16a34a;font-weight:700;">4</span> groups.`,
            `Both ways give the same <span style="color:#16a34a;font-weight:700;">quotient</span>: <span style="color:#dc2626;font-weight:700;">24</span> ÷ <span style="color:#1e40af;font-weight:700;">6</span> = <span style="color:#16a34a;font-weight:700;font-size:18px;">4</span>`,
          ],
        },
        {
          question: 'A farmer has 36 eggs. He packs them into boxes of 9. How many boxes does he fill?',
          answer: '4 boxes',
          steps: [
            `This is a <strong>grouping problem</strong> — we need to find how many groups of <span style="color:#1e40af;font-weight:700;">9</span> fit inside <span style="color:#dc2626;font-weight:700;">36</span>.`,
            `Write the number sentence: <span style="color:#dc2626;font-weight:700;">36</span> ÷ <span style="color:#1e40af;font-weight:700;">9</span> = ?`,
            `Use your 9× table to find the answer: 9 × 1 = 9,  9 × 2 = 18,  9 × 3 = 27,  9 × <span style="color:#16a34a;font-weight:700;">4</span> = <span style="color:#dc2626;font-weight:700;">36</span> ✓`,
            `The <span style="color:#16a34a;font-weight:700;">quotient</span> is <span style="color:#16a34a;font-weight:700;">4</span>. The farmer fills <span style="color:#16a34a;font-weight:700;font-size:18px;">4 boxes</span>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DIVISION AS THE INVERSE OF MULTIPLICATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'division-inverse-multiplication',
      title: 'Division as the Inverse of Multiplication',
      icon: '🔄',
      explanation: `<p style="margin-bottom:18px;">Division and multiplication are <strong>inverse operations</strong> — this means they <em>undo each other</em>. Just like addition and subtraction cancel each other out, multiplication and division do the same thing in reverse.</p>

<p style="margin-bottom:14px;">If you know your multiplication tables, you can use them to solve any division problem. Instead of working out a division from scratch, simply ask: <strong>"What times the divisor gives me the dividend?"</strong></p>

<p style="margin-bottom:12px;font-weight:600;">See how they are linked:</p>

<div style="background:white;border:1px solid #bfdbfe;border-radius:12px;padding:18px 20px;margin-bottom:22px;">
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="font-size:17px;"><span style="color:#dc2626;font-weight:700;">4 × 6 = 24</span> <span style="color:#6b7280;font-size:14px;margin-left:8px;">(multiplication fact)</span></div>
    <div style="font-size:17px;"><span style="color:#1e40af;font-weight:700;">24 ÷ 6 = 4</span> <span style="color:#6b7280;font-size:14px;margin-left:8px;">(first division fact)</span></div>
    <div style="font-size:17px;"><span style="color:#16a34a;font-weight:700;">24 ÷ 4 = 6</span> <span style="color:#6b7280;font-size:14px;margin-left:8px;">(second division fact)</span></div>
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">The fact family:</p>

<p style="margin-bottom:18px;">One multiplication fact always gives you <strong>two division facts</strong>. Together, the multiplication fact and the two division facts form a <strong>fact family</strong>. Knowing your times tables means you automatically know all the related division facts too.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:8px;">
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:10px;">Example fact family for 3 × 8 = 24</div>
  <div style="display:flex;flex-direction:column;gap:7px;">
    <div style="font-size:16px;color:#374151;"><span style="color:#dc2626;font-weight:700;">3 × 8 = 24</span></div>
    <div style="font-size:16px;color:#374151;"><span style="color:#1e40af;font-weight:700;">24 ÷ 8 = 3</span></div>
    <div style="font-size:16px;color:#374151;"><span style="color:#16a34a;font-weight:700;">24 ÷ 3 = 8</span></div>
  </div>
</div>`,

      videoPlaceholder: 'Short video showing how multiplication facts help you solve division problems',
      diagramPlaceholder: 'Fact family triangle showing 7 x 8 = 56 with the two related division facts',

      workedExamples: [
        {
          question: 'Use the fact family for 7 × 8 = 56 to write two division facts.',
          answer: '56 ÷ 8 = 7  and  56 ÷ 7 = 8',
          steps: [
            `Start with the multiplication fact: <span style="color:#dc2626;font-weight:700;">7 × 8 = 56</span>. The three numbers involved are <strong>7</strong>, <strong>8</strong>, and <strong>56</strong>.`,
            `For the <span style="color:#1e40af;font-weight:700;">first division fact</span>, keep the product as the dividend and swap one factor to become the divisor: <span style="color:#1e40af;font-weight:700;">56 ÷ 8 = 7</span>`,
            `For the <span style="color:#16a34a;font-weight:700;">second division fact</span>, use the other factor as the divisor: <span style="color:#16a34a;font-weight:700;">56 ÷ 7 = 8</span>`,
            `All three facts in the family:
<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-top:8px;display:flex;flex-direction:column;gap:8px;">
  <div style="font-size:17px;"><span style="color:#dc2626;font-weight:700;">7 × 8 = 56</span></div>
  <div style="font-size:17px;"><span style="color:#1e40af;font-weight:700;">56 ÷ 8 = 7</span></div>
  <div style="font-size:17px;"><span style="color:#16a34a;font-weight:700;">56 ÷ 7 = 8</span></div>
</div>`,
          ],
        },
        {
          question: 'Calculate 45 ÷ 9 using your multiplication tables.',
          answer: '5',
          steps: [
            `Think: <em>"What number times <span style="color:#1e40af;font-weight:700;">9</span> equals <span style="color:#dc2626;font-weight:700;">45</span>?"</em>`,
            `Work through your 9× table: 1 × 9 = 9,  2 × 9 = 18,  3 × 9 = 27,  4 × 9 = 36,  <span style="color:#16a34a;font-weight:700;">5</span> × 9 = <span style="color:#dc2626;font-weight:700;">45</span> ✓`,
            `Because <span style="color:#dc2626;font-weight:700;">5</span> × <span style="color:#1e40af;font-weight:700;">9</span> = 45, we know that <span style="color:#dc2626;font-weight:700;">45</span> ÷ <span style="color:#1e40af;font-weight:700;">9</span> = <span style="color:#16a34a;font-weight:700;font-size:18px;">5</span>`,
          ],
        },
        {
          question: 'Calculate 63 ÷ 7',
          answer: '9',
          steps: [
            `Think: <em>"What number times <span style="color:#1e40af;font-weight:700;">7</span> equals <span style="color:#dc2626;font-weight:700;">63</span>?"</em>`,
            `Work through your 7× table: 7, 14, 21, 28, 35, 42, 49, 56, <span style="color:#16a34a;font-weight:700;">9</span> × 7 = <span style="color:#dc2626;font-weight:700;">63</span> ✓`,
            `Because <span style="color:#dc2626;font-weight:700;">9</span> × <span style="color:#1e40af;font-weight:700;">7</span> = 63, we know that <span style="color:#dc2626;font-weight:700;">63</span> ÷ <span style="color:#1e40af;font-weight:700;">7</span> = <span style="color:#16a34a;font-weight:700;font-size:18px;">9</span>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — DIVIDING WITH REMAINDERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'dividing-with-remainders',
      title: 'Dividing with Remainders',
      icon: '🔢',
      explanation: `<p style="margin-bottom:18px;">Sometimes numbers do not divide equally. When this happens there is an amount <strong>left over</strong> after you have divided as equally as possible. This leftover amount is called the <strong>remainder</strong>.</p>

<p style="margin-bottom:12px;font-weight:600;">Real-life example:</p>

<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:22px;">
  You have <strong>13 sweets</strong> to share equally among <strong>4 friends</strong>.<br/>
  <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px;">
    <div>Each friend gets <span style="color:#16a34a;font-weight:700;">3</span> sweets &nbsp;(4 × <span style="color:#16a34a;font-weight:700;">3</span> = 12).</div>
    <div>There is <span style="color:#ea580c;font-weight:700;">1</span> sweet left over that cannot be shared equally.</div>
    <div style="margin-top:6px;font-size:17px;"><strong>13 ÷ 4 = <span style="color:#16a34a;">3</span> r <span style="color:#ea580c;">1</span></strong></div>
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Key words to know:</p>

<div style="display:flex;flex-direction:column;gap:9px;margin-bottom:22px;">
  <div><strong style="color:#16a34a;">Quotient</strong> — the whole-number answer after dividing, before the remainder. Shown in <span style="color:#16a34a;font-weight:700;">green</span>.</div>
  <div><strong style="color:#ea580c;">Remainder</strong> — the amount left over. It is always <em>less than the divisor</em>. Shown in <span style="color:#ea580c;font-weight:700;">orange</span>. Written as <strong>r</strong> after the quotient.</div>
</div>

<div style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:10px;padding:14px 18px;">
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">Important rule</div>
  <div style="color:#374151;">The remainder must always be <strong>smaller than the divisor</strong>. If the remainder is equal to or larger than the divisor, you can fit in one more group.</div>
</div>`,

      videoPlaceholder: 'Short video showing how to find remainders in division with real life examples',
      diagramPlaceholder: 'Visual showing 17 sweets divided into groups of 5 with 2 sweets remaining outside the groups',

      workedExamples: [
        {
          question: 'Calculate 17 ÷ 5',
          answer: '3 r 2',
          steps: [
            `Ask: how many groups of <span style="color:#1e40af;font-weight:700;">5</span> fit inside <span style="color:#dc2626;font-weight:700;">17</span>?`,
            `Work through the 5× table to find the closest multiple without going over 17: 5 × <span style="color:#16a34a;font-weight:700;">3</span> = <strong>15</strong> ✓ &nbsp;(5 × 4 = 20 — too big)`,
            `Find the remainder: <span style="color:#dc2626;font-weight:700;">17</span> − 15 = <span style="color:#ea580c;font-weight:700;">2</span> left over.`,
            `<span style="color:#dc2626;font-weight:700;">17</span> ÷ <span style="color:#1e40af;font-weight:700;">5</span> = <span style="color:#16a34a;font-weight:700;font-size:18px;">3</span> r <span style="color:#ea580c;font-weight:700;font-size:18px;">2</span>`,
          ],
        },
        {
          question: 'Calculate 29 ÷ 4',
          answer: '7 r 1',
          steps: [
            `Ask: how many groups of <span style="color:#1e40af;font-weight:700;">4</span> fit inside <span style="color:#dc2626;font-weight:700;">29</span>?`,
            `Work through the 4× table: 4 × <span style="color:#16a34a;font-weight:700;">7</span> = <strong>28</strong> ✓ &nbsp;(4 × 8 = 32 — too big)`,
            `Find the remainder: <span style="color:#dc2626;font-weight:700;">29</span> − 28 = <span style="color:#ea580c;font-weight:700;">1</span> left over.`,
            `<span style="color:#dc2626;font-weight:700;">29</span> ÷ <span style="color:#1e40af;font-weight:700;">4</span> = <span style="color:#16a34a;font-weight:700;font-size:18px;">7</span> r <span style="color:#ea580c;font-weight:700;font-size:18px;">1</span>`,
          ],
        },
        {
          question: 'A teacher has 25 pencils to share among 6 learners. How many does each learner get and how many are left over?',
          answer: '4 pencils each, 1 left over',
          steps: [
            `Write the number sentence: <span style="color:#dc2626;font-weight:700;">25</span> ÷ <span style="color:#1e40af;font-weight:700;">6</span> = ?`,
            `Work through the 6× table: 6 × <span style="color:#16a34a;font-weight:700;">4</span> = <strong>24</strong> ✓ &nbsp;(6 × 5 = 30 — too big)`,
            `Find the remainder: <span style="color:#dc2626;font-weight:700;">25</span> − 24 = <span style="color:#ea580c;font-weight:700;">1</span> left over.`,
            `Each learner gets <span style="color:#16a34a;font-weight:700;font-size:18px;">4 pencils</span> and <span style="color:#ea580c;font-weight:700;font-size:18px;">1</span> is left over.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — LONG DIVISION: 3-DIGIT ÷ 1-DIGIT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'long-division',
      title: 'Long Division — 3-Digit ÷ 1-Digit',
      icon: '📐',
      explanation: `<p style="margin-bottom:18px;">When you divide larger numbers, you cannot do it all in one step. Instead you work through the digits <strong>one at a time</strong> using a method called <strong>long division</strong>. You follow the same five steps and repeat them for each digit of the number you are dividing.</p>

<p style="margin-bottom:12px;font-weight:600;">The five steps:</p>

<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:22px;">
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#fee2e2;color:#dc2626;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">1</span>
    <div><span style="color:#dc2626;font-weight:700;">Divide</span> — divide the current digit (or digits) by the divisor. Write the result in the quotient above.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#dbeafe;color:#1e40af;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">2</span>
    <div><span style="color:#1e40af;font-weight:700;">Multiply</span> — multiply your quotient digit by the divisor. Write the result below.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#dcfce7;color:#16a34a;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">3</span>
    <div><span style="color:#16a34a;font-weight:700;">Subtract</span> — subtract to find what is left over.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#ffedd5;color:#ea580c;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">4</span>
    <div><span style="color:#ea580c;font-weight:700;">Bring down</span> — bring the next digit down next to the remainder.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#f3f4f6;color:#374151;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">5</span>
    <div><strong>Repeat</strong> — go back to step 1 and repeat for the new number. Keep going until there are no more digits to bring down.</div>
  </div>
</div>`,

      videoPlaceholder: 'Short video showing step by step long division of a 3-digit number by a 1-digit number',
      diagramPlaceholder: 'Long division layout showing 156 divided by 4 with each step colour coded',

      workedExamples: [
        {
          question: 'Calculate 96 ÷ 3',
          answer: '32',
          steps: [
            `Set up: write divisor <strong>3</strong> to the left with a bracket, and dividend <strong>96</strong> inside the bracket.`,
            `<span style="color:#dc2626;font-weight:700;">Divide:</span> Look at the first digit — 9 ÷ 3 = <span style="color:#dc2626;font-weight:700;">3</span>. Write <span style="color:#dc2626;font-weight:700;">3</span> in the quotient above the 9.`,
            `<span style="color:#1e40af;font-weight:700;">Multiply:</span> <span style="color:#1e40af;font-weight:700;">3 × 3 = 9</span>. Write 9 below the 9 in the dividend.`,
            `<span style="color:#16a34a;font-weight:700;">Subtract:</span> <span style="color:#16a34a;font-weight:700;">9 − 9 = 0</span>. Then <span style="color:#ea580c;font-weight:700;">bring down</span> the next digit — <span style="color:#ea580c;font-weight:700;">6</span>. You now have <strong>06</strong>.`,
            `<span style="color:#dc2626;font-weight:700;">Divide again:</span> 6 ÷ 3 = <span style="color:#dc2626;font-weight:700;">2</span>. Write <span style="color:#dc2626;font-weight:700;">2</span> in the quotient next to the 3. <span style="color:#1e40af;font-weight:700;">Multiply:</span> <span style="color:#1e40af;font-weight:700;">3 × 2 = 6</span>. <span style="color:#16a34a;font-weight:700;">Subtract:</span> <span style="color:#16a34a;font-weight:700;">6 − 6 = 0</span>. No remainder.`,
            `Complete layout:
<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-top:8px;display:inline-block;">
<table style="border-collapse:collapse;font-size:20px;font-weight:700;font-family:monospace;line-height:2;">
  <tr>
    <td style="padding:0 6px;"></td>
    <td style="padding:0 12px;color:#dc2626;text-align:center;">3</td>
    <td style="padding:0 12px;color:#dc2626;text-align:center;">2</td>
  </tr>
  <tr>
    <td style="border-right:2px solid #374151;padding:0 8px;">3</td>
    <td style="border-top:2px solid #374151;padding:0 12px;text-align:center;">9</td>
    <td style="border-top:2px solid #374151;padding:0 12px;text-align:center;">6</td>
  </tr>
  <tr>
    <td></td>
    <td style="padding:0 12px;text-align:center;"><span style="color:#16a34a;">−</span><span style="color:#1e40af;">9</span></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 12px;"></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 12px;"></td>
  </tr>
  <tr>
    <td></td>
    <td style="padding:0 12px;text-align:center;">0</td>
    <td style="padding:0 12px;text-align:center;color:#ea580c;">6</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="padding:0 12px;text-align:center;"><span style="color:#16a34a;">−</span><span style="color:#1e40af;">6</span></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 12px;"></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="padding:0 12px;text-align:center;color:#16a34a;">0</td>
  </tr>
</table>
</div>`,
          ],
        },
        {
          question: 'Calculate 156 ÷ 4',
          answer: '39',
          steps: [
            `Set up: divisor <strong>4</strong> to the left, dividend <strong>156</strong> inside.`,
            `<span style="color:#dc2626;font-weight:700;">Divide:</span> Can 4 go into 1? No — too small. Look at the first two digits: 15 ÷ 4 = <span style="color:#dc2626;font-weight:700;">3</span> (since 4 × 3 = 12 and 4 × 4 = 16 is too big). Write <span style="color:#dc2626;font-weight:700;">3</span> above the 5.`,
            `<span style="color:#1e40af;font-weight:700;">Multiply:</span> <span style="color:#1e40af;font-weight:700;">4 × 3 = 12</span>. Write 12 below 15. <span style="color:#16a34a;font-weight:700;">Subtract:</span> <span style="color:#16a34a;font-weight:700;">15 − 12 = 3</span>. <span style="color:#ea580c;font-weight:700;">Bring down</span> the next digit — <span style="color:#ea580c;font-weight:700;">6</span>. You now have <strong>36</strong>.`,
            `<span style="color:#dc2626;font-weight:700;">Divide again:</span> 36 ÷ 4 = <span style="color:#dc2626;font-weight:700;">9</span> (since 4 × 9 = 36). Write <span style="color:#dc2626;font-weight:700;">9</span> above the 6.`,
            `<span style="color:#1e40af;font-weight:700;">Multiply:</span> <span style="color:#1e40af;font-weight:700;">4 × 9 = 36</span>. <span style="color:#16a34a;font-weight:700;">Subtract:</span> <span style="color:#16a34a;font-weight:700;">36 − 36 = 0</span>. No remainder.`,
            `Complete layout:
<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-top:8px;display:inline-block;">
<table style="border-collapse:collapse;font-size:20px;font-weight:700;font-family:monospace;line-height:2;">
  <tr>
    <td style="padding:0 6px;"></td>
    <td style="padding:0 10px;text-align:center;"></td>
    <td style="padding:0 10px;color:#dc2626;text-align:center;">3</td>
    <td style="padding:0 10px;color:#dc2626;text-align:center;">9</td>
  </tr>
  <tr>
    <td style="border-right:2px solid #374151;padding:0 8px;">4</td>
    <td style="border-top:2px solid #374151;padding:0 10px;text-align:center;">1</td>
    <td style="border-top:2px solid #374151;padding:0 10px;text-align:center;">5</td>
    <td style="border-top:2px solid #374151;padding:0 10px;text-align:center;">6</td>
  </tr>
  <tr>
    <td></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#16a34a;">−</span><span style="color:#1e40af;">1</span></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#1e40af;">2</span></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="padding:0 10px;text-align:center;">3</td>
    <td style="padding:0 10px;text-align:center;color:#ea580c;">6</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#16a34a;">−</span><span style="color:#1e40af;">3</span></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#1e40af;">6</span></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td style="padding:0 10px;text-align:center;color:#16a34a;">0</td>
  </tr>
</table>
</div>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — DIVISION WORD PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'division-word-problems',
      title: 'Division Word Problems',
      icon: '📝',
      explanation: `<p style="margin-bottom:18px;">Word problems do not always say "divide". Before you calculate, you need to <strong>read carefully</strong> and decide what type of division problem it is.</p>

<p style="margin-bottom:12px;font-weight:600;">Step 1 — Identify the problem type:</p>

<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:22px;">
  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:8px;">Sharing</div>
    <div style="font-size:14px;color:#374151;margin-bottom:8px;">You know the total and the number of groups. You find how many are in each group.</div>
    <div style="font-size:13px;color:#374151;">Look for: <span style="color:#ea580c;font-weight:700;">shared equally</span>, <span style="color:#ea580c;font-weight:700;">each</span>, <span style="color:#ea580c;font-weight:700;">split between</span>, <span style="color:#ea580c;font-weight:700;">per person</span></div>
  </div>
  <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#16a34a;margin-bottom:8px;">Grouping</div>
    <div style="font-size:14px;color:#374151;margin-bottom:8px;">You know the total and the size of each group. You find how many groups there are.</div>
    <div style="font-size:13px;color:#374151;">Look for: <span style="color:#ea580c;font-weight:700;">groups of</span>, <span style="color:#ea580c;font-weight:700;">boxes of</span>, <span style="color:#ea580c;font-weight:700;">packs of</span>, <span style="color:#ea580c;font-weight:700;">how many groups</span>, <span style="color:#ea580c;font-weight:700;">per</span></div>
  </div>
</div>

<div style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:10px;padding:14px 18px;">
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">Key words — highlighted in orange throughout</div>
  <div style="color:#374151;font-size:14px;">Whenever you see words like <span style="color:#ea580c;font-weight:700;">share</span>, <span style="color:#ea580c;font-weight:700;">split</span>, <span style="color:#ea580c;font-weight:700;">each</span>, <span style="color:#ea580c;font-weight:700;">per</span>, <span style="color:#ea580c;font-weight:700;">how many groups</span>, or <span style="color:#ea580c;font-weight:700;">how many each</span> in a word problem, they are clues that you need to divide.</div>
</div>`,

      videoPlaceholder: 'Short video showing how to identify and solve division word problems',

      workedExamples: [
        {
          question: 'A bakery bakes 144 muffins. They pack them into <span style="color:#ea580c;font-weight:700;">boxes of 6</span>. How many boxes do they fill?',
          answer: '24 boxes',
          steps: [
            `Key word: "<span style="color:#ea580c;font-weight:700;">boxes of 6</span>" — this is a <strong>grouping problem</strong>. We need to find how many groups of 6 fit into 144.`,
            `Write the number sentence: <span style="color:#dc2626;font-weight:700;">144</span> ÷ <span style="color:#1e40af;font-weight:700;">6</span> = ?`,
            `Use long division:
<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-top:8px;display:inline-block;">
<table style="border-collapse:collapse;font-size:20px;font-weight:700;font-family:monospace;line-height:2;">
  <tr>
    <td style="padding:0 6px;"></td>
    <td style="padding:0 10px;color:#dc2626;text-align:center;">2</td>
    <td style="padding:0 10px;color:#dc2626;text-align:center;">4</td>
    <td style="padding:0 10px;text-align:center;"></td>
  </tr>
  <tr>
    <td style="border-right:2px solid #374151;padding:0 8px;">6</td>
    <td style="border-top:2px solid #374151;padding:0 10px;text-align:center;">1</td>
    <td style="border-top:2px solid #374151;padding:0 10px;text-align:center;">4</td>
    <td style="border-top:2px solid #374151;padding:0 10px;text-align:center;">4</td>
  </tr>
  <tr>
    <td></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#16a34a;">−</span><span style="color:#1e40af;">1</span></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#1e40af;">2</span></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="padding:0 10px;text-align:center;">2</td>
    <td style="padding:0 10px;text-align:center;color:#ea580c;">4</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#16a34a;">−</span><span style="color:#1e40af;">2</span></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#1e40af;">4</span></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td style="padding:0 10px;text-align:center;color:#16a34a;">0</td>
  </tr>
</table>
</div>`,
            `The bakery fills <span style="color:#16a34a;font-weight:700;font-size:18px;">24 boxes</span>.`,
          ],
        },
        {
          question: 'R180 is <span style="color:#ea580c;font-weight:700;">shared equally</span> among 9 children. How much does <span style="color:#ea580c;font-weight:700;">each</span> child get?',
          answer: 'R20',
          steps: [
            `Key words: "<span style="color:#ea580c;font-weight:700;">shared equally</span>" and "<span style="color:#ea580c;font-weight:700;">each</span>" — this is a <strong>sharing problem</strong>. Share R180 into 9 equal groups.`,
            `Write the number sentence: <span style="color:#dc2626;font-weight:700;">180</span> ÷ <span style="color:#1e40af;font-weight:700;">9</span> = ?`,
            `Use your 9× table: think — what times <span style="color:#1e40af;font-weight:700;">9</span> equals <span style="color:#dc2626;font-weight:700;">180</span>? &nbsp; 9 × <span style="color:#16a34a;font-weight:700;">20</span> = 180 ✓`,
            `Each child gets <span style="color:#16a34a;font-weight:700;font-size:18px;">R20</span>.`,
          ],
        },
        {
          question: 'A farmer plants 125 seeds in <span style="color:#ea580c;font-weight:700;">5 equal rows</span>. How many seeds are in <span style="color:#ea580c;font-weight:700;">each row</span>? Are there any seeds left over?',
          answer: '25 seeds per row, no remainder',
          steps: [
            `Key words: "<span style="color:#ea580c;font-weight:700;">equal rows</span>" and "<span style="color:#ea580c;font-weight:700;">each row</span>" — this is a <strong>sharing problem</strong>. Share 125 seeds equally into 5 rows.`,
            `Write the number sentence: <span style="color:#dc2626;font-weight:700;">125</span> ÷ <span style="color:#1e40af;font-weight:700;">5</span> = ?`,
            `Use long division:
<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-top:8px;display:inline-block;">
<table style="border-collapse:collapse;font-size:20px;font-weight:700;font-family:monospace;line-height:2;">
  <tr>
    <td style="padding:0 6px;"></td>
    <td style="padding:0 10px;color:#dc2626;text-align:center;">2</td>
    <td style="padding:0 10px;color:#dc2626;text-align:center;">5</td>
  </tr>
  <tr>
    <td style="border-right:2px solid #374151;padding:0 8px;">5</td>
    <td style="border-top:2px solid #374151;padding:0 10px;text-align:center;">1 2</td>
    <td style="border-top:2px solid #374151;padding:0 10px;text-align:center;">5</td>
  </tr>
  <tr>
    <td></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#16a34a;">−</span><span style="color:#1e40af;">1 0</span></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
  </tr>
  <tr>
    <td></td>
    <td style="padding:0 10px;text-align:center;">2</td>
    <td style="padding:0 10px;text-align:center;color:#ea580c;">5</td>
  </tr>
  <tr>
    <td></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#16a34a;">−</span><span style="color:#1e40af;">2</span></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#1e40af;">5</span></td>
  </tr>
  <tr>
    <td></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="padding:0 10px;text-align:center;color:#16a34a;">0</td>
  </tr>
</table>
</div>`,
            `Each row has <span style="color:#16a34a;font-weight:700;font-size:18px;">25 seeds</span>. The remainder is <span style="color:#16a34a;font-weight:700;">0</span> — no seeds are left over.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — FOUNDATIONS: DIVISION FACTS (SHARING, GROUPING, TIMES TABLES) (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: Foundations',
      questions: [
        { difficulty: 'Easy', question: 'Share 20 sweets equally among 4 friends. How many sweets does each friend get?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 sweets'], explanation: '20 ÷ 4 = 5. Each friend gets 5 sweets.' },
        { difficulty: 'Easy', question: 'Calculate: 24 ÷ 6', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: '6 × 4 = 24, so 24 ÷ 6 = 4.' },
        { difficulty: 'Easy', question: 'A farmer packs 36 eggs into boxes of 9. How many boxes does he fill?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 boxes'], explanation: '9 × 4 = 36, so 36 ÷ 9 = 4 boxes.' },
        { difficulty: 'Easy', question: 'Calculate: 42 ÷ 7', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: '7 × 6 = 42, so 42 ÷ 7 = 6.' },
        { difficulty: 'Easy', question: 'Calculate: 45 ÷ 5', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '5 × 9 = 45, so 45 ÷ 5 = 9.' },
        { difficulty: 'Medium', question: 'Use your multiplication tables to calculate: 56 ÷ 8', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Think: what × 8 = 56? → 7 × 8 = 56. So 56 ÷ 8 = 7.' },
        { difficulty: 'Medium', question: 'Use your multiplication tables to calculate: 63 ÷ 7', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Think: what × 7 = 63? → 9 × 7 = 63. So 63 ÷ 7 = 9.' },
        { difficulty: 'Medium', question: 'Use your multiplication tables to calculate: 72 ÷ 9', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Think: what × 9 = 72? → 8 × 9 = 72. So 72 ÷ 9 = 8.' },
        { difficulty: 'Medium', question: 'Use your multiplication tables to calculate: 81 ÷ 9', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Think: what × 9 = 81? → 9 × 9 = 81. So 81 ÷ 9 = 9.' },
        { difficulty: 'Medium', question: '48 learners are placed into 6 equal teams. How many learners are in each team?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 learners'], explanation: '6 × 8 = 48, so 48 ÷ 6 = 8 learners per team.' },
        { difficulty: 'Medium', question: 'Calculate: 54 ÷ 6', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '6 × 9 = 54, so 54 ÷ 6 = 9.' },
        { difficulty: 'Medium', question: 'Calculate: 35 ÷ 5', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '5 × 7 = 35, so 35 ÷ 5 = 7.' },
        { difficulty: 'Medium', question: 'Calculate: 64 ÷ 8', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '8 × 8 = 64, so 64 ÷ 8 = 8.' },
        { difficulty: 'Easy', question: '18 biscuits are packed into bags of 3. How many bags are needed?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 bags'], explanation: '3 × 6 = 18, so 18 ÷ 3 = 6 bags.' },
        { difficulty: 'Easy', question: 'Calculate: 27 ÷ 3', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '3 × 9 = 27, so 27 ÷ 3 = 9.' },
        { difficulty: 'Easy', question: 'Calculate: 32 ÷ 4', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '4 × 8 = 32, so 32 ÷ 4 = 8.' },
        { difficulty: 'Easy', question: 'Calculate: 18 ÷ 2', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '2 × 9 = 18, so 18 ÷ 2 = 9.' },
        { difficulty: 'Easy', question: 'Calculate: 40 ÷ 5', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '5 × 8 = 40, so 40 ÷ 5 = 8.' },
        { difficulty: 'Easy', question: 'Calculate: 16 ÷ 4', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: '4 × 4 = 16, so 16 ÷ 4 = 4.' },
        { difficulty: 'Easy', question: 'Calculate: 28 ÷ 7', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: '7 × 4 = 28, so 28 ÷ 7 = 4.' },
        { difficulty: 'Medium', question: 'Use the fact family for 6 × 7 = 42 to write the two related division facts.', answer: '42 ÷ 7 = 6 and 42 ÷ 6 = 7', checkMode: 'auto', correctAnswer: '42÷7=6 and 42÷6=7', correctAnswers: ['42÷7=6 and 42÷6=7', '42/7=6 and 42/6=7', '42÷6=7 and 42÷7=6', '42/6=7 and 42/7=6'], explanation: 'From 6 × 7 = 42, the two division facts are 42 ÷ 7 = 6 and 42 ÷ 6 = 7.' },
        { difficulty: 'Hard', question: 'Calculate using long division: 96 ÷ 4', answer: '24', checkMode: 'auto', correctAnswer: '24', explanation: '9 ÷ 4 = 2 r 1, bring down 6 → 16. 16 ÷ 4 = 4. So 96 ÷ 4 = 24.' },
        { difficulty: 'Hard', question: 'Calculate using long division: 84 ÷ 4', answer: '21', checkMode: 'auto', correctAnswer: '21', explanation: '8 ÷ 4 = 2, bring down 4 → 4. 4 ÷ 4 = 1. So 84 ÷ 4 = 21.' },
        { difficulty: 'Hard', question: 'Calculate using long division: 100 ÷ 5', answer: '20', checkMode: 'auto', correctAnswer: '20', explanation: '10 ÷ 5 = 2, bring down 0 → 0. 0 ÷ 5 = 0. So 100 ÷ 5 = 20.' },
        { difficulty: 'Hard', question: 'Calculate using long division: 144 ÷ 6', answer: '24', checkMode: 'auto', correctAnswer: '24', explanation: '14 ÷ 6 = 2 r 2, bring down 4 → 24. 24 ÷ 6 = 4. So 144 ÷ 6 = 24.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You know your division facts and times tables extremely well.' },
        { minScore: 19, message: 'Great work! You are confident with division facts — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Revisit the multiplication tables and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — DIVISION WITH REMAINDERS AND LARGER DIVIDENDS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Remainders and Larger Numbers',
      questions: [
        { difficulty: 'Easy', question: 'Calculate and write your answer in the form quotient r remainder: 19 ÷ 4', answer: '4 r 3', checkMode: 'auto', correctAnswer: '4r3', correctAnswers: ['4r3', '4remainder3', '4rem3', '4r03'], explanation: '4 × 4 = 16 (closest without exceeding 19). 19 − 16 = 3 left over. 19 ÷ 4 = 4 r 3.' },
        { difficulty: 'Easy', question: 'Calculate and write your answer in the form quotient r remainder: 27 ÷ 5', answer: '5 r 2', checkMode: 'auto', correctAnswer: '5r2', correctAnswers: ['5r2', '5remainder2', '5rem2'], explanation: '5 × 5 = 25 (closest without exceeding 27). 27 − 25 = 2 left over. 27 ÷ 5 = 5 r 2.' },
        { difficulty: 'Medium', question: 'Calculate and write your answer in the form quotient r remainder: 38 ÷ 6', answer: '6 r 2', checkMode: 'auto', correctAnswer: '6r2', correctAnswers: ['6r2', '6remainder2', '6rem2'], explanation: '6 × 6 = 36 (closest without exceeding 38). 38 − 36 = 2 left over. 38 ÷ 6 = 6 r 2.' },
        { difficulty: 'Medium', question: 'Calculate and write your answer in the form quotient r remainder: 43 ÷ 8', answer: '5 r 3', checkMode: 'auto', correctAnswer: '5r3', correctAnswers: ['5r3', '5remainder3', '5rem3'], explanation: '8 × 5 = 40 (closest without exceeding 43). 43 − 40 = 3 left over. 43 ÷ 8 = 5 r 3.' },
        { difficulty: 'Medium', question: 'Calculate and write your answer in the form quotient r remainder: 29 ÷ 4', answer: '7 r 1', checkMode: 'auto', correctAnswer: '7r1', correctAnswers: ['7r1', '7remainder1', '7rem1'], explanation: '4 × 7 = 28 (closest without exceeding 29). 29 − 28 = 1 left over. 29 ÷ 4 = 7 r 1.' },
        { difficulty: 'Easy', question: 'Calculate and write your answer in the form quotient r remainder: 17 ÷ 5', answer: '3 r 2', checkMode: 'auto', correctAnswer: '3r2', correctAnswers: ['3r2', '3remainder2', '3rem2'], explanation: '5 × 3 = 15 (closest without exceeding 17). 17 − 15 = 2 left over. 17 ÷ 5 = 3 r 2.' },
        { difficulty: 'Medium', question: 'Calculate and write your answer in the form quotient r remainder: 25 ÷ 6', answer: '4 r 1', checkMode: 'auto', correctAnswer: '4r1', correctAnswers: ['4r1', '4remainder1', '4rem1'], explanation: '6 × 4 = 24 (closest without exceeding 25). 25 − 24 = 1 left over. 25 ÷ 6 = 4 r 1.' },
        { difficulty: 'Medium', question: 'Calculate and write your answer in the form quotient r remainder: 35 ÷ 8', answer: '4 r 3', checkMode: 'auto', correctAnswer: '4r3', correctAnswers: ['4r3', '4remainder3', '4rem3'], explanation: '8 × 4 = 32 (closest without exceeding 35). 35 − 32 = 3 left over. 35 ÷ 8 = 4 r 3.' },
        { difficulty: 'Medium', question: 'Calculate and write your answer in the form quotient r remainder: 22 ÷ 3', answer: '7 r 1', checkMode: 'auto', correctAnswer: '7r1', correctAnswers: ['7r1', '7remainder1', '7rem1'], explanation: '3 × 7 = 21 (closest without exceeding 22). 22 − 21 = 1 left over. 22 ÷ 3 = 7 r 1.' },
        { difficulty: 'Medium', question: 'Calculate and write your answer in the form quotient r remainder: 31 ÷ 6', answer: '5 r 1', checkMode: 'auto', correctAnswer: '5r1', correctAnswers: ['5r1', '5remainder1', '5rem1'], explanation: '6 × 5 = 30 (closest without exceeding 31). 31 − 30 = 1 left over. 31 ÷ 6 = 5 r 1.' },
        { difficulty: 'Hard', question: 'Calculate and write your answer in the form quotient r remainder: 44 ÷ 9', answer: '4 r 8', checkMode: 'auto', correctAnswer: '4r8', correctAnswers: ['4r8', '4remainder8', '4rem8'], explanation: '9 × 4 = 36 (closest without exceeding 44). 44 − 36 = 8 left over. 44 ÷ 9 = 4 r 8.' },
        { difficulty: 'Medium', question: 'Calculate and write your answer in the form quotient r remainder: 50 ÷ 7', answer: '7 r 1', checkMode: 'auto', correctAnswer: '7r1', correctAnswers: ['7r1', '7remainder1', '7rem1'], explanation: '7 × 7 = 49 (closest without exceeding 50). 50 − 49 = 1 left over. 50 ÷ 7 = 7 r 1.' },
        { difficulty: 'Medium', question: 'Calculate and write your answer in the form quotient r remainder: 33 ÷ 4', answer: '8 r 1', checkMode: 'auto', correctAnswer: '8r1', correctAnswers: ['8r1', '8remainder1', '8rem1'], explanation: '4 × 8 = 32 (closest without exceeding 33). 33 − 32 = 1 left over. 33 ÷ 4 = 8 r 1.' },
        { difficulty: 'Hard', question: 'Calculate and write your answer in the form quotient r remainder: 58 ÷ 9', answer: '6 r 4', checkMode: 'auto', correctAnswer: '6r4', correctAnswers: ['6r4', '6remainder4', '6rem4'], explanation: '9 × 6 = 54 (closest without exceeding 58). 58 − 54 = 4 left over. 58 ÷ 9 = 6 r 4.' },
        { difficulty: 'Medium', question: 'Calculate and write your answer in the form quotient r remainder: 47 ÷ 5', answer: '9 r 2', checkMode: 'auto', correctAnswer: '9r2', correctAnswers: ['9r2', '9remainder2', '9rem2'], explanation: '5 × 9 = 45 (closest without exceeding 47). 47 − 45 = 2 left over. 47 ÷ 5 = 9 r 2.' },
        { difficulty: 'Hard', question: 'Calculate and write your answer in the form quotient r remainder: 62 ÷ 7', answer: '8 r 6', checkMode: 'auto', correctAnswer: '8r6', correctAnswers: ['8r6', '8remainder6', '8rem6'], explanation: '7 × 8 = 56 (closest without exceeding 62). 62 − 56 = 6 left over. 62 ÷ 7 = 8 r 6.' },
        { difficulty: 'Hard', question: 'Calculate and write your answer in the form quotient r remainder: 75 ÷ 8', answer: '9 r 3', checkMode: 'auto', correctAnswer: '9r3', correctAnswers: ['9r3', '9remainder3', '9rem3'], explanation: '8 × 9 = 72 (closest without exceeding 75). 75 − 72 = 3 left over. 75 ÷ 8 = 9 r 3.' },
        { difficulty: 'Hard', question: 'Calculate using long division. Write only the final answer: 91 ÷ 4', answer: '22 r 3', checkMode: 'auto', correctAnswer: '22r3', correctAnswers: ['22r3', '22remainder3', '22rem3'], explanation: '9 ÷ 4 = 2 r 1, bring down 1 → 11. 11 ÷ 4 = 2 r 3. So 91 ÷ 4 = 22 r 3.' },
        { difficulty: 'Hard', question: 'Calculate using long division. Write only the final answer: 99 ÷ 7', answer: '14 r 1', checkMode: 'auto', correctAnswer: '14r1', correctAnswers: ['14r1', '14remainder1', '14rem1'], explanation: '9 ÷ 7 = 1 r 2, bring down 9 → 29. 29 ÷ 7 = 4 r 1. So 99 ÷ 7 = 14 r 1.' },
        { difficulty: 'Hard', question: 'Calculate using long division. Write only the final answer: 123 ÷ 5', answer: '24 r 3', checkMode: 'auto', correctAnswer: '24r3', correctAnswers: ['24r3', '24remainder3', '24rem3'], explanation: '12 ÷ 5 = 2 r 2, bring down 3 → 23. 23 ÷ 5 = 4 r 3. So 123 ÷ 5 = 24 r 3.' },
        { difficulty: 'Medium', question: 'Calculate using long division. Write only the final answer: 156 ÷ 4', answer: '39', checkMode: 'auto', correctAnswer: '39', explanation: '15 ÷ 4 = 3 r 3, bring down 6 → 36. 36 ÷ 4 = 9. So 156 ÷ 4 = 39.' },
        { difficulty: 'Medium', question: 'Calculate using long division. Write only the final answer: 168 ÷ 7', answer: '24', checkMode: 'auto', correctAnswer: '24', explanation: '16 ÷ 7 = 2 r 2, bring down 8 → 28. 28 ÷ 7 = 4. So 168 ÷ 7 = 24.' },
        { difficulty: 'Medium', question: 'Calculate using long division. Write only the final answer: 96 ÷ 6', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: '9 ÷ 6 = 1 r 3, bring down 6 → 36. 36 ÷ 6 = 6. So 96 ÷ 6 = 16.' },
        { difficulty: 'Hard', question: 'Calculate using long division. Write only the final answer: 85 ÷ 3', answer: '28 r 1', checkMode: 'auto', correctAnswer: '28r1', correctAnswers: ['28r1', '28remainder1', '28rem1'], explanation: '8 ÷ 3 = 2 r 2, bring down 5 → 25. 25 ÷ 3 = 8 r 1. So 85 ÷ 3 = 28 r 1.' },
        { difficulty: 'Hard', question: 'Calculate using long division. Write only the final answer: 137 ÷ 6', answer: '22 r 5', checkMode: 'auto', correctAnswer: '22r5', correctAnswers: ['22r5', '22remainder5', '22rem5'], explanation: '13 ÷ 6 = 2 r 1, bring down 7 → 17. 17 ÷ 6 = 2 r 5. So 137 ÷ 6 = 22 r 5.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered division with remainders and long division.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the remainder and long division worked examples.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — DIVISION WORD PROBLEMS: SHARING AND GROUPING (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Word Problems',
      questions: [
        { difficulty: 'Easy', question: 'A bakery bakes 72 cookies and packs them into boxes of 8. How many boxes do they fill?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 boxes'], explanation: 'This is a grouping problem: 72 ÷ 8. Think: 8 × 9 = 72. The bakery fills 9 boxes.' },
        { difficulty: 'Easy', question: 'R150 is shared equally among 5 children. How much does each child get? Write only the number without the R symbol.', answer: '30', checkMode: 'auto', correctAnswer: '30', explanation: 'This is a sharing problem: 150 ÷ 5 = 30. Each child gets R30.' },
        { difficulty: 'Easy', question: 'A teacher has 64 pencils to share equally among 8 learners. How many pencils does each learner get?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 pencils'], explanation: 'This is a sharing problem: 64 ÷ 8 = 8. Each learner gets 8 pencils.' },
        { difficulty: 'Easy', question: 'Lerato packs 90 sweets into bags of 6. How many bags does she fill?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 bags'], explanation: 'This is a grouping problem: 90 ÷ 6 = 15 bags.' },
        { difficulty: 'Medium', question: 'R84 is shared equally among 4 friends. How much does each friend get? Write only the number without the R symbol.', answer: '21', checkMode: 'auto', correctAnswer: '21', explanation: '84 ÷ 4 = 21. Each friend gets R21.' },
        { difficulty: 'Medium', question: 'A farmer has 108 apples and packs them into boxes of 9. How many boxes does he fill?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 boxes'], explanation: '108 ÷ 9 = 12 boxes.' },
        { difficulty: 'Medium', question: 'Sipho picks 45 mangoes and packs them equally into 5 baskets. How many mangoes go into each basket?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 mangoes'], explanation: '45 ÷ 5 = 9 mangoes per basket.' },
        { difficulty: 'Medium', question: 'A bakery bakes 144 muffins and packs them into boxes of 6. How many boxes do they fill?', answer: '24', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 boxes'], explanation: '144 ÷ 6 = 24 boxes.' },
        { difficulty: 'Medium', question: 'R200 is shared equally among 8 learners. How much does each learner get? Write only the number without the R symbol.', answer: '25', checkMode: 'auto', correctAnswer: '25', explanation: '200 ÷ 8 = 25. Each learner gets R25.' },
        { difficulty: 'Medium', question: 'A farmer plants 96 seeds in 8 equal rows. How many seeds are in each row?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 seeds'], explanation: '96 ÷ 8 = 12 seeds per row.' },
        { difficulty: 'Medium', question: 'A library has 132 books to arrange equally on 6 shelves. How many books go on each shelf?', answer: '22', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', '22 books'], explanation: '132 ÷ 6 = 22 books per shelf.' },
        { difficulty: 'Easy', question: 'R63 is shared equally among 7 friends. How much does each friend get? Write only the number without the R symbol.', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '63 ÷ 7 = 9. Each friend gets R9.' },
        { difficulty: 'Easy', question: 'A teacher has 77 pencils to share equally among 7 learners. How many pencils does each learner get?', answer: '11', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', '11 pencils'], explanation: '77 ÷ 7 = 11 pencils per learner.' },
        { difficulty: 'Medium', question: 'Amahle has 52 sweets to share equally among 6 friends. How many sweets does each friend get, and how many are left over? Write your answer in the form quotient r remainder.', answer: '8 r 4', checkMode: 'auto', correctAnswer: '8r4', correctAnswers: ['8r4', '8remainder4', '8rem4'], explanation: '6 × 8 = 48 (closest without exceeding 52). 52 − 48 = 4 left over. 52 ÷ 6 = 8 r 4.' },
        { difficulty: 'Medium', question: 'A teacher has 39 stickers to give equally to 5 learners. How many stickers does each learner get, and how many are left over? Write your answer in the form quotient r remainder.', answer: '7 r 4', checkMode: 'auto', correctAnswer: '7r4', correctAnswers: ['7r4', '7remainder4', '7rem4'], explanation: '5 × 7 = 35 (closest without exceeding 39). 39 − 35 = 4 left over. 39 ÷ 5 = 7 r 4.' },
        { difficulty: 'Medium', question: 'R156 is shared equally among 12 learners. How much does each learner get? Write only the number without the R symbol.', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: '156 ÷ 12 = 13. Each learner gets R13.' },
        { difficulty: 'Medium', question: 'A builder has 200 bricks and stacks them in piles of 8. How many piles does he make?', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25 piles'], explanation: '200 ÷ 8 = 25 piles.' },
        { difficulty: 'Hard', question: 'A farmer has 91 eggs and packs them into boxes of 6. How many full boxes does he fill, and how many eggs are left over? Write your answer in the form quotient r remainder.', answer: '15 r 1', checkMode: 'auto', correctAnswer: '15r1', correctAnswers: ['15r1', '15remainder1', '15rem1'], explanation: '6 × 15 = 90 (closest without exceeding 91). 91 − 90 = 1 left over. 91 ÷ 6 = 15 r 1.' },
        { difficulty: 'Medium', question: 'A school raises R175 and shares it equally among 5 classes. How much does each class get? Write only the number without the R symbol.', answer: '35', checkMode: 'auto', correctAnswer: '35', explanation: '175 ÷ 5 = 35. Each class gets R35.' },
        { difficulty: 'Medium', question: 'A school hall has 128 chairs arranged equally into 8 rows. How many chairs are in each row?', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16 chairs'], explanation: '128 ÷ 8 = 16 chairs per row.' },
        { difficulty: 'Hard', question: 'A bakery bakes 54 cupcakes and packs them into boxes of 6. If each box is sold for R9, how many boxes are made? Write only the number.', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 boxes'], explanation: '54 ÷ 6 = 9 boxes.' },
        { difficulty: 'Medium', question: '180 marbles are shared equally among 9 friends. How many marbles does each friend get?', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 marbles'], explanation: '180 ÷ 9 = 20 marbles per friend.' },
        { difficulty: 'Medium', question: 'A school raises R120 and splits it equally among 6 charities. How much does each charity get? Write only the number without the R symbol.', answer: '20', checkMode: 'auto', correctAnswer: '20', explanation: '120 ÷ 6 = 20. Each charity gets R20.' },
        { difficulty: 'Easy', question: 'Thabo has 63 balloons and packs them into bags of 7. How many bags does he fill?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 bags'], explanation: '63 ÷ 7 = 9 bags.' },
        { difficulty: 'Medium', question: 'A collector has 240 stamps and places them equally into albums of 8 stamps each. How many albums does she fill?', answer: '30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 albums'], explanation: '240 ÷ 8 = 30 albums.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You can confidently solve division word problems.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the sharing and grouping worked examples.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP AND COMBINED PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Multi-Step and Combined Problems',
      questions: [
        { difficulty: 'Hard', question: 'R240 is shared equally among 6 friends. One friend then gives R15 to charity. How much does that friend have left? Write only the number without the R symbol.', answer: '25', checkMode: 'auto', correctAnswer: '25', explanation: '240 ÷ 6 = 40. Each friend gets R40. 40 − 15 = 25. That friend has R25 left.' },
        { difficulty: 'Hard', question: 'A farmer has 156 apples and sells them in bags of 6. If he sells each bag for R12, how much money does he make in total? Write only the number without the R symbol.', answer: '312', checkMode: 'auto', correctAnswer: '312', explanation: '156 ÷ 6 = 26 bags. 26 × R12 = R312.' },
        { difficulty: 'Hard', question: '200 sweets are shared equally among 8 children. Each child then eats 3 sweets. How many sweets does each child have left?', answer: '22', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', '22 sweets'], explanation: '200 ÷ 8 = 25 sweets each. 25 − 3 = 22 sweets left per child.' },
        { difficulty: 'Hard', question: '45 learners are placed into groups of 5. If 3 of the groups go on an excursion, how many learners go on the excursion?', answer: '27', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27 learners'], explanation: '45 ÷ 5 = 9 learners per group. 3 groups × 9 = 27 learners.' },
        { difficulty: 'Hard', question: 'A farmer packs 168 eggs into boxes of 12. If each box is sold for R15, how much money does he make in total? Write only the number without the R symbol.', answer: '210', checkMode: 'auto', correctAnswer: '210', explanation: '168 ÷ 12 = 14 boxes. 14 × R15 = R210.' },
        { difficulty: 'Hard', question: 'A company makes R360 profit and shares it equally among 9 workers. Each worker then pays R5 tax. How much does each worker keep? Write only the number without the R symbol.', answer: '35', checkMode: 'auto', correctAnswer: '35', explanation: '360 ÷ 9 = 40 each. 40 − 5 = 35. Each worker keeps R35.' },
        { difficulty: 'Hard', question: 'A hall has 300 chairs arranged with 4 chairs at each table. If 5 tables are then removed, how many tables are left?', answer: '70', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70', '70 tables'], explanation: '300 ÷ 4 = 75 tables. 75 − 5 = 70 tables left.' },
        { difficulty: 'Hard', question: '144 sweets are shared equally into 12 bags. If 3 of the bags are given away, how many sweets were given away in total?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 sweets'], explanation: '144 ÷ 12 = 12 sweets per bag. 3 bags × 12 = 36 sweets given away.' },
        { difficulty: 'Hard', question: '252 stickers are shared equally into packs of 9. If 4 packs are kept, how many packs are given away?', answer: '24', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 packs'], explanation: '252 ÷ 9 = 28 packs in total. 28 − 4 = 24 packs given away.' },
        { difficulty: 'Hard', question: '420 marbles are shared equally among 7 friends. Each friend then gives 10 marbles to charity. How many marbles does each friend have left?', answer: '50', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50 marbles'], explanation: '420 ÷ 7 = 60 marbles each. 60 − 10 = 50 marbles left per friend.' },
        { difficulty: 'Medium', question: 'The answer to a division is 8, and one of the numbers in the problem is 64. What is the other number?', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '64 ÷ 8 = 8, so the other number is also 8.' },
        { difficulty: 'Medium', question: 'Use the fact family for 7 × 9 = 63 to write the division fact where 63 is divided by 9.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '63 ÷ 9 = 7, since 9 × 7 = 63.' },
        { difficulty: 'Hard', question: 'A school collects 216 books to share equally among 8 classrooms. Use long division to find how many books each classroom gets.', answer: '27', checkMode: 'auto', correctAnswer: '27', explanation: '21 ÷ 8 = 2 r 5, bring down 6 → 56. 56 ÷ 8 = 7. So 216 ÷ 8 = 27 books per classroom.' },
        { difficulty: 'Hard', question: 'A shop has 245 oranges and packs them into bags of 7. How many bags does it fill?', answer: '35', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35 bags'], explanation: '24 ÷ 7 = 3 r 3, bring down 5 → 35. 35 ÷ 7 = 5. So 245 ÷ 7 = 35 bags.' },
        { difficulty: 'Hard', question: 'A teacher has 37 chocolates to share equally among 5 learners.\n\na) How many chocolates does each learner get?\nb) How many chocolates are left over?\nc) What could the teacher do with the leftover chocolates?', answer: 'a) 7  b) 2  c) Keep them for next time, or give one each to two lucky learners as a bonus.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A school has 58 learners going on a trip. Each minibus can carry 9 learners.\n\na) How many minibuses are completely full?\nb) How many learners are left over who need another minibus?\nc) How many minibuses does the school need to book in total to fit everyone?', answer: 'a) 6 minibuses full  b) 4 learners left over  c) 7 minibuses (6 full plus 1 more for the remaining 4 learners)', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Explain in your own words why the remainder in a division must always be smaller than the divisor. Use an example to support your explanation.', answer: 'If the remainder were equal to or greater than the divisor, it would mean another full group could still be made, so it would not really be a "remainder" yet. For example, in 20 ÷ 6, if we said the answer was 2 r 8, that would be wrong because 8 is bigger than 6 — another group of 6 fits inside 8. The correct answer is 3 r 2, since 6 × 3 = 18 and 20 − 18 = 2, which is smaller than 6.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A learner says that 56 ÷ 7 and 7 × 8 = 56 are examples of the same fact family. Explain whether the learner is correct, and give the other division fact in this fact family.', answer: 'The learner is correct. Multiplication and division are inverse operations, so 7 × 8 = 56 gives two division facts: 56 ÷ 7 = 8 and 56 ÷ 8 = 7. The other division fact is 56 ÷ 8 = 7.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Explain, using an example, the difference between a sharing division problem and a grouping division problem, even though both use the same division number sentence.', answer: 'In a sharing problem, you know the total and the number of groups, and you find how many items go in each group — for example, sharing 20 sweets among 4 friends means each friend gets 20 ÷ 4 = 5 sweets. In a grouping problem, you know the total and the size of each group, and you find how many groups you can make — for example, packing 20 sweets into bags of 4 means you can make 20 ÷ 4 = 5 bags. The number sentence is the same, but the meaning of the answer is different.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A rectangular garden has 180 flowers planted in 9 equal rows. If 4 of the rows are then dug up, how many flowers are left in the garden?', answer: '100', checkMode: 'auto', correctAnswer: '100', correctAnswers: ['100', '100 flowers'], explanation: '180 ÷ 9 = 20 flowers per row. 9 − 4 = 5 rows remain. 5 × 20 = 100 flowers left.' },
        { difficulty: 'Hard', question: 'A factory makes 320 toys and packs them into boxes of 8. If 15 boxes are sent to one shop, how many boxes are left for other shops?', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25 boxes'], explanation: '320 ÷ 8 = 40 boxes in total. 40 − 15 = 25 boxes left.' },
        { difficulty: 'Hard', question: 'A choir of 72 learners is arranged into equal rows of 8. If 2 learners are absent on the day of the concert, how many complete rows of 8 can still be formed, and how many learners are left over?', answer: '8 r 6', checkMode: 'auto', correctAnswer: '8r6', correctAnswers: ['8r6', '8remainder6', '8rem6'], explanation: '72 − 2 = 70 learners present. 8 × 8 = 64 (closest without exceeding 70). 70 − 64 = 6 left over. 70 ÷ 8 = 8 r 6.' },
        { difficulty: 'Hard', question: 'A farmer harvests 275 potatoes and packs them into bags of 9. How many full bags does he make, and how many potatoes are left over? Write your answer in the form quotient r remainder.', answer: '30 r 5', checkMode: 'auto', correctAnswer: '30r5', correctAnswers: ['30r5', '30remainder5', '30rem5'], explanation: '27 ÷ 9 = 3, bring down 5 → 5. 5 ÷ 9 = 0 r 5. So 275 ÷ 9 = 30 r 5.' },
        { difficulty: 'Hard', question: 'A school buys 216 exercise books to share equally among 8 classes. Use long division to find how many books each class gets.', answer: '27', checkMode: 'auto', correctAnswer: '27', explanation: '21 ÷ 8 = 2 r 5, bring down 6 → 56. 56 ÷ 8 = 7. So 216 ÷ 8 = 27 books per class.' },
        { difficulty: 'Hard', question: 'Sipho says that when you divide any number by 1, the answer is always the same as the original number, and when you divide a number by itself, the answer is always 1. Explain whether he is correct, using two examples.', answer: 'Sipho is correct. For example, 24 ÷ 1 = 24, because dividing into 1 group means the whole amount stays in that one group. Also, 24 ÷ 24 = 1, because there is exactly one group of 24 inside 24. These are useful division rules to remember.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered multi-step and combined division problems.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the multi-step worked examples.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],

  topicPractice: [
    // ── SECTION 1 — What is Division? ────────────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Write the following as a division number sentence:\n\n' +
        'Share 20 sweets equally among 4 friends. How many sweets does each friend get?\n\n' +
        'Write your answer as a full number sentence.',
      answer: '20 ÷ 4 = 5',
      correctAnswer: '20÷4=5',
      correctAnswers: ['20÷4=5', '20/4=5'],
      explanation:
        'This is a sharing problem — share 20 equally into 4 groups.\n' +
        '20 ÷ 4 = 5. Each friend gets 5 sweets.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'A farmer has 36 eggs. He packs them into boxes of 9. How many boxes does he fill?\n\n' +
        'a) Is this a sharing or grouping problem?\n' +
        'b) Write the division number sentence.\n' +
        'c) Calculate the answer.',
      answer: 'a) Grouping  b) 36 ÷ 9  c) 4',
      parts: [
        {
          label: 'a) Sharing or grouping?',
          correctAnswer: 'grouping',
          correctAnswers: ['grouping', 'agroupingproblem', 'itsagroupingproblem'],
          explanation:
            '"Boxes of 9" tells you the group size — you need to find how many groups fit. That is a grouping problem.',
        },
        {
          label: 'b) Division number sentence',
          correctAnswer: '36÷9',
          correctAnswers: ['36÷9', '36÷9=4', '36/9', '36/9=4'],
          explanation: 'Total eggs = 36 (dividend), eggs per box = 9 (divisor): 36 ÷ 9.',
        },
        {
          label: 'c) Answer',
          correctAnswer: '4',
          explanation: '9 × 4 = 36, so 36 ÷ 9 = 4. The farmer fills 4 boxes.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'A school has 48 chairs to arrange equally in 6 classrooms. How many chairs go in each classroom?\n\n' +
        'Show your working. Also identify whether this is a sharing or grouping problem.',
      answer:
        'This is a sharing problem — you know the total (48 chairs) and the number of groups (6 classrooms), and you find how many are in each group.\n\n' +
        'Working: 48 ÷ 6 = 8\n\n' +
        'Each classroom gets 8 chairs.',
    },

    // ── SECTION 2 — Division as the Inverse of Multiplication ────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Use the fact family for 6 × 7 = 42 to write two division facts.\n\n' +
        'Write each as a full number sentence.',
      answer: '42 ÷ 7 = 6  and  42 ÷ 6 = 7',
      parts: [
        {
          label: 'First division fact',
          correctAnswer: '42÷7=6',
          correctAnswers: ['42÷7=6', '42÷6=7', '42/7=6', '42/6=7'],
          explanation: 'From 6 × 7 = 42, the two division facts are: 42 ÷ 7 = 6 and 42 ÷ 6 = 7.',
        },
        {
          label: 'Second division fact',
          correctAnswer: '42÷6=7',
          correctAnswers: ['42÷7=6', '42÷6=7', '42/7=6', '42/6=7'],
          explanation: 'From 6 × 7 = 42, the two division facts are: 42 ÷ 7 = 6 and 42 ÷ 6 = 7.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Use your multiplication tables to calculate:\n\n' +
        'a) 56 ÷ 8\n' +
        'b) 72 ÷ 9\n' +
        'c) 45 ÷ 5',
      answer: 'a) 7  b) 8  c) 9',
      parts: [
        {
          label: 'a) 56 ÷ 8',
          correctAnswer: '7',
          explanation: 'Think: what × 8 = 56? → 7 × 8 = 56. So 56 ÷ 8 = 7.',
        },
        {
          label: 'b) 72 ÷ 9',
          correctAnswer: '8',
          explanation: 'Think: what × 9 = 72? → 8 × 9 = 72. So 72 ÷ 9 = 8.',
        },
        {
          label: 'c) 45 ÷ 5',
          correctAnswer: '9',
          explanation: 'Think: what × 5 = 45? → 9 × 5 = 45. So 45 ÷ 5 = 9.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'The answer to a division is 8. One of the numbers in the problem is 64. What is the other number?\n\n' +
        'Write the complete fact family for these three numbers.',
      answer:
        'The other number is also 8 (since 64 ÷ 8 = 8).\n\n' +
        'Complete fact family:\n' +
        '• 8 × 8 = 64\n' +
        '• 64 ÷ 8 = 8\n\n' +
        'Because both factors are the same (8 is a perfect square), there is only one unique division fact in this family.',
    },

    // ── SECTION 3 — Dividing with Remainders ─────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Calculate and write the full answer including the remainder:\n\n' +
        '19 ÷ 4\n\n' +
        'Write your answer in the form: quotient r remainder.',
      answer: '4 r 3',
      correctAnswer: '4r3',
      correctAnswers: ['4r3', '4remainder3', '4rem3', '4r03'],
      explanation:
        '4 × 4 = 16, which is the closest multiple of 4 without going over 19.\n' +
        '19 − 16 = 3 left over.\n' +
        '19 ÷ 4 = 4 r 3.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Calculate each division and write the quotient and remainder.\n' +
        'Write each answer in the form: quotient r remainder.\n\n' +
        'a) 27 ÷ 5\n' +
        'b) 38 ÷ 6\n' +
        'c) 43 ÷ 8',
      answer: 'a) 5 r 2  b) 6 r 2  c) 5 r 3',
      parts: [
        {
          label: 'a) 27 ÷ 5',
          correctAnswer: '5r2',
          correctAnswers: ['5r2', '5remainder2', '5rem2'],
          explanation:
            '5 × 5 = 25 (closest multiple without exceeding 27).\n' +
            '27 − 25 = 2 left over.\n' +
            '27 ÷ 5 = 5 r 2.',
        },
        {
          label: 'b) 38 ÷ 6',
          correctAnswer: '6r2',
          correctAnswers: ['6r2', '6remainder2', '6rem2'],
          explanation:
            '6 × 6 = 36 (closest multiple without exceeding 38).\n' +
            '38 − 36 = 2 left over.\n' +
            '38 ÷ 6 = 6 r 2.',
        },
        {
          label: 'c) 43 ÷ 8',
          correctAnswer: '5r3',
          correctAnswers: ['5r3', '5remainder3', '5rem3'],
          explanation:
            '8 × 5 = 40 (closest multiple without exceeding 43).\n' +
            '43 − 40 = 3 left over.\n' +
            '43 ÷ 8 = 5 r 3.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'A teacher has 35 stickers to give equally to 8 learners.\n\n' +
        'a) How many stickers does each learner get?\n' +
        'b) How many stickers are left over?\n' +
        'c) What could the teacher do with the remaining stickers?',
      answer:
        '35 ÷ 8:\n' +
        '8 × 4 = 32 (closest multiple without exceeding 35).\n' +
        '35 − 32 = 3 left over.\n\n' +
        'a) Each learner gets 4 stickers.\n' +
        'b) 3 stickers are left over.\n' +
        'c) The teacher could keep them for next time, give them as a prize, or give extra stickers to 3 lucky learners.',
    },

    // ── SECTION 4 — Long Division ─────────────────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Calculate using long division. Write only the final answer.\n\n' +
        '84 ÷ 4',
      answer: '21',
      correctAnswer: '21',
      explanation:
        '84 ÷ 4 using long division:\n' +
        '• Divide 8 ÷ 4 = 2. Multiply 2 × 4 = 8. Subtract 8 − 8 = 0. Bring down 4.\n' +
        '• Divide 4 ÷ 4 = 1. Multiply 1 × 4 = 4. Subtract 4 − 4 = 0.\n' +
        '84 ÷ 4 = 21.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Calculate using long division. Write only the final answer for each.\n\n' +
        'a) 96 ÷ 6\n' +
        'b) 125 ÷ 5',
      answer: 'a) 16  b) 25',
      parts: [
        {
          label: 'a) 96 ÷ 6',
          correctAnswer: '16',
          explanation:
            '96 ÷ 6 using long division:\n' +
            '• Divide 9 ÷ 6 = 1. Multiply 1 × 6 = 6. Subtract 9 − 6 = 3. Bring down 6 → 36.\n' +
            '• Divide 36 ÷ 6 = 6. Multiply 6 × 6 = 36. Subtract 36 − 36 = 0.\n' +
            '96 ÷ 6 = 16.',
        },
        {
          label: 'b) 125 ÷ 5',
          correctAnswer: '25',
          explanation:
            '125 ÷ 5 using long division:\n' +
            '• Divide 12 ÷ 5 = 2. Multiply 2 × 5 = 10. Subtract 12 − 10 = 2. Bring down 5 → 25.\n' +
            '• Divide 25 ÷ 5 = 5. Multiply 5 × 5 = 25. Subtract 25 − 25 = 0.\n' +
            '125 ÷ 5 = 25.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'A school collects 168 books to share equally among 7 classrooms. How many books does each classroom get?\n\n' +
        'Use long division and show all your working steps.',
      answer:
        '168 ÷ 7 using long division:\n\n' +
        '• Divide 16 ÷ 7 = 2. Multiply 2 × 7 = 14. Subtract 16 − 14 = 2. Bring down 8 → 28.\n' +
        '• Divide 28 ÷ 7 = 4. Multiply 4 × 7 = 28. Subtract 28 − 28 = 0.\n\n' +
        '168 ÷ 7 = 24.\n' +
        'Each classroom gets 24 books.',
    },

    // ── SECTION 5 — Division Word Problems ───────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'A bakery bakes 72 cookies and packs them into boxes of 8. How many boxes do they fill?\n\n' +
        'Write only the number.',
      answer: '9',
      correctAnswer: '9',
      correctAnswers: ['9', '9boxes'],
      explanation:
        'This is a grouping problem — how many groups of 8 fit into 72?\n' +
        'Think: 8 × 9 = 72. So 72 ÷ 8 = 9.\n' +
        'The bakery fills 9 boxes.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'R240 is shared equally among 6 friends.\n\n' +
        'a) How much does each friend get? Write only the number without the R symbol.\n' +
        'b) If one friend gives R15 to charity, how much does that friend have left? Write only the number without the R symbol.',
      answer: 'a) 40  b) 25',
      parts: [
        {
          label: 'a) Each friend gets R…',
          correctAnswer: '40',
          explanation:
            'This is a sharing problem: 240 ÷ 6.\n' +
            'Think: 6 × 40 = 240. So each friend gets R40.',
        },
        {
          label: 'b) After giving R15 to charity',
          correctAnswer: '25',
          explanation:
            'R40 − R15 = R25.\n' +
            'That friend has R25 left.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A farmer has 156 apples. He sells them in bags of 6.\n\n' +
        'a) How many full bags can he make? Write only the number.\n' +
        'b) How many apples are left over? Write only the number.\n' +
        'c) If he sells each bag for R12, how much money does he make from the full bags? Write only the number without the R symbol.',
      answer: 'a) 26  b) 0  c) 312',
      parts: [
        {
          label: 'a) Full bags',
          correctAnswer: '26',
          explanation:
            '156 ÷ 6 using long division:\n' +
            '• 15 ÷ 6 = 2. 2 × 6 = 12. 15 − 12 = 3. Bring down 6 → 36.\n' +
            '• 36 ÷ 6 = 6. 6 × 6 = 36. 36 − 36 = 0.\n' +
            '156 ÷ 6 = 26. The farmer makes 26 full bags.',
        },
        {
          label: 'b) Apples left over',
          correctAnswer: '0',
          explanation:
            '156 ÷ 6 = 26 with no remainder.\n' +
            '0 apples are left over.',
        },
        {
          label: 'c) Total money from sales (R…)',
          correctAnswer: '312',
          explanation:
            '26 bags × R12 per bag:\n' +
            '20 × 12 = 240 and 6 × 12 = 72.\n' +
            '240 + 72 = R312.',
        },
      ],
    },
  ],
}
