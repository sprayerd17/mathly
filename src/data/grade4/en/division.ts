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
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Division Facts & Fact Families (0-3, Easy)
        { difficulty: 'Easy', question: 'Calculate: 54 ÷ 6', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '6 × 9 = 54, so 54 ÷ 6 = 9.' },
        { difficulty: 'Easy', question: 'A coach shares 32 cones equally among 4 training groups. How many cones does each group get?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 cones'], explanation: '32 ÷ 4 = 8. Each group gets 8 cones.' },
        { difficulty: 'Easy', question: 'What number times 9 gives 54?', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: '9 × 6 = 54, so the missing number is 6. This also means 54 ÷ 9 = 6.' },
        { difficulty: 'Easy', question: 'Use the fact family for 6 × 9 = 54 to write the two related division facts.', answer: '54 ÷ 9 = 6 and 54 ÷ 6 = 9', checkMode: 'auto', correctAnswer: '54÷9=6 and 54÷6=9', correctAnswers: ['54÷9=6 and 54÷6=9', '54/9=6 and 54/6=9', '54÷6=9 and 54÷9=6', '54/6=9 and 54/9=6'], explanation: 'From 6 × 9 = 54, the two division facts are 54 ÷ 9 = 6 and 54 ÷ 6 = 9.' },

        // Block 2 — Remainders (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Calculate and write your answer in the form quotient r remainder: 34 ÷ 5', answer: '6 r 4', checkMode: 'auto', correctAnswer: '6r4', correctAnswers: ['6r4', '6remainder4', '6rem4'], explanation: '5 × 6 = 30 (closest without exceeding 34). 34 − 30 = 4 left over. 34 ÷ 5 = 6 r 4.' },
        { difficulty: 'Easy-Medium', question: 'Zanele has 46 beads and wants to thread them onto necklaces of 9 beads each. How many complete necklaces can she make, and how many beads are left over?', answer: '5 r 1', checkMode: 'auto', correctAnswer: '5r1', correctAnswers: ['5r1', '5remainder1', '5rem1'], explanation: '9 × 5 = 45 (closest without exceeding 46). 46 − 45 = 1 left over. 46 ÷ 9 = 5 r 1.' },
        { difficulty: 'Medium', question: 'A learner wrote: "23 ÷ 5 = 3 r 8". Is this correct? If not, write the correct answer in the form quotient r remainder.', answer: '4 r 3', checkMode: 'auto', correctAnswer: '4r3', correctAnswers: ['4r3', '4remainder3', '4rem3', 'no4r3', 'incorrect4r3'], explanation: 'The learner is wrong: a remainder of 8 cannot happen when dividing by 5, since 8 is bigger than 5. Correctly, 5 × 4 = 20 and 23 − 20 = 3, so 23 ÷ 5 = 4 r 3.' },
        { difficulty: 'Medium', question: 'Calculate and write your answer in the form quotient r remainder: 61 ÷ 8', answer: '7 r 5', checkMode: 'auto', correctAnswer: '7r5', correctAnswers: ['7r5', '7remainder5', '7rem5'], explanation: '8 × 7 = 56 (closest without exceeding 61). 61 − 56 = 5 left over. 61 ÷ 8 = 7 r 5.' },

        // Block 3 — Long Division (8-11, Medium)
        { difficulty: 'Medium', question: 'Calculate using long division: 78 ÷ 6', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: '7 ÷ 6 = 1 r 1, bring down 8 → 18. 18 ÷ 6 = 3. So 78 ÷ 6 = 13.' },
        { difficulty: 'Medium', question: 'Calculate using long division: 315 ÷ 5', answer: '63', checkMode: 'auto', correctAnswer: '63', explanation: '31 ÷ 5 = 6 r 1, bring down 5 → 15. 15 ÷ 5 = 3. So 315 ÷ 5 = 63.' },
        { difficulty: 'Medium', question: 'Calculate using long division and write your answer in the form quotient r remainder: 259 ÷ 7', answer: '37 r 0', checkMode: 'auto', correctAnswer: '37', correctAnswers: ['37', '37r0', '37 r 0'], explanation: '25 ÷ 7 = 3 r 4, bring down 9 → 49. 49 ÷ 7 = 7. So 259 ÷ 7 = 37 exactly.' },
        { difficulty: 'Medium', question: 'Use long division to calculate 386 ÷ 9, and show your working step by step (divide, multiply, subtract, bring down) rather than writing only the final answer.', answer: '42 r 8', checkMode: 'self', explanation: '38 ÷ 9 = 4 r 2 (9 × 4 = 36, 38 − 36 = 2). Bring down 6 → 26. 26 ÷ 9 = 2 r 8 (9 × 2 = 18, 26 − 18 = 8). So 386 ÷ 9 = 42 r 8.' },

        // Block 4 — Word Problems: Sharing vs Grouping (12-15, Medium)
        { difficulty: 'Medium', question: 'A shop owner has 96 oranges and packs them into crates of 8. Is this a sharing problem or a grouping problem? Explain briefly, then give the answer.', answer: 'Grouping — 12 crates', checkMode: 'self', explanation: 'This is a grouping problem: we know the total (96) and the size of each group (8), and must find how many groups fit. 96 ÷ 8 = 12 crates.' },
        { difficulty: 'Medium', question: 'R138 in prize money is shared equally among 6 winners. How much does each winner receive? Write only the number without the R symbol.', answer: '23', checkMode: 'auto', correctAnswer: '23', explanation: '138 ÷ 6 = 23. Each winner receives R23.' },
        { difficulty: 'Medium', question: 'How many rows will there be if a gardener plants 91 seedlings with 7 seedlings in each row?', answer: '13', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13 rows'], explanation: '91 ÷ 7 = 13 rows.' },
        { difficulty: 'Medium', question: 'A toy shop received a delivery of 175 marbles. The owner wants to pack them into small pouches, with 5 marbles in each pouch, to sell individually. How many pouches can be filled?', answer: '35', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35 pouches'], explanation: '175 ÷ 5 = 35 pouches.' },

        // Block 5 — Multi-Step & Applied Problems (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A bakery earns R216 from selling loaves, shared equally across a 9-hour shift. If the baker then spends R14 on flour for the next batch, how much of that hourly rate is left over from one hour\'s worth of earnings?', answer: '10', checkMode: 'auto', correctAnswer: '10', explanation: '216 ÷ 9 = 24 (earned per hour). 24 − 14 = 10. R10 is left over.' },
        { difficulty: 'Medium-Hard', question: 'A school is organising transport for 100 learners on a trip. Each van holds 8 learners. How many vans must the school book so that every learner has a seat?', answer: '13', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13 vans'], explanation: '100 ÷ 8 = 12 r 4. Twelve vans are full, but 4 learners still need a seat, so a 13th van must be booked. 13 vans in total.' },

        // Block 6 — Reasoning & Justification (18-19, Hard)
        { difficulty: 'Hard', question: 'A learner claims: "In the fact family for 8 × 6 = 48, the two division facts are 48 ÷ 6 = 8 and 48 ÷ 5 = 8." Is this claim correct? Explain your reasoning and give the correct second division fact if needed.', answer: 'Incorrect — the second fact should be 48 ÷ 8 = 6, not 48 ÷ 5 = 8', checkMode: 'self', explanation: 'The claim is incorrect. From 8 × 6 = 48, the two related division facts must use the same three numbers: 48 ÷ 6 = 8 and 48 ÷ 8 = 6. The number 5 does not belong to this fact family at all.' },
        { difficulty: 'Hard', question: 'Without calculating both fully, explain which gives a bigger answer: 96 ÷ 4 or 96 ÷ 8. How do you know?', answer: '96 ÷ 4 is bigger', checkMode: 'self', explanation: 'When the same number is divided by a smaller divisor, it is split into fewer, larger groups, so the answer is bigger. Since 4 is smaller than 8, 96 ÷ 4 gives a bigger answer than 96 ÷ 8, without needing to work out that they are 24 and 12.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have a strong grasp of division facts, remainders, long division, and word problems.' },
        { minScore: 15, message: 'Great work! You are confident with most division skills — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Division Facts & Fact Families (0-3, Easy)
        { difficulty: 'Easy', question: 'Calculate: 72 ÷ 8', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '8 × 9 = 72, so 72 ÷ 8 = 9.' },
        { difficulty: 'Easy', question: 'A vendor packs 49 oranges equally into 7 baskets. How many oranges go into each basket?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7 oranges'], explanation: '49 ÷ 7 = 7. Each basket gets 7 oranges.' },
        { difficulty: 'Easy', question: 'What number times 7 gives 49?', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '7 × 7 = 49, so the missing number is 7. This also means 49 ÷ 7 = 7.' },
        { difficulty: 'Easy', question: 'Use the fact family for 8 × 7 = 56 to write the two related division facts.', answer: '56 ÷ 7 = 8 and 56 ÷ 8 = 7', checkMode: 'auto', correctAnswer: '56÷7=8 and 56÷8=7', correctAnswers: ['56÷7=8 and 56÷8=7', '56/7=8 and 56/8=7', '56÷8=7 and 56÷7=8', '56/8=7 and 56/7=8'], explanation: 'From 8 × 7 = 56, the two division facts are 56 ÷ 7 = 8 and 56 ÷ 8 = 7.' },

        // Block 2 — Remainders (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Calculate and write your answer in the form quotient r remainder: 41 ÷ 6', answer: '6 r 5', checkMode: 'auto', correctAnswer: '6r5', correctAnswers: ['6r5', '6remainder5', '6rem5'], explanation: '6 × 6 = 36 (closest without exceeding 41). 41 − 36 = 5 left over. 41 ÷ 6 = 6 r 5.' },
        { difficulty: 'Easy-Medium', question: 'Dumisani has 53 marbles and wants to fill jars that each hold 8 marbles. How many full jars can he fill, and how many marbles are left over?', answer: '6 r 5', checkMode: 'auto', correctAnswer: '6r5', correctAnswers: ['6r5', '6remainder5', '6rem5'], explanation: '8 × 6 = 48 (closest without exceeding 53). 53 − 48 = 5 left over. 53 ÷ 8 = 6 r 5.' },
        { difficulty: 'Medium', question: 'A learner wrote: "31 ÷ 6 = 4 r 7". Is this correct? If not, write the correct answer in the form quotient r remainder.', answer: '5 r 1', checkMode: 'auto', correctAnswer: '5r1', correctAnswers: ['5r1', '5remainder1', '5rem1', 'no5r1', 'incorrect5r1'], explanation: 'The learner is wrong: a remainder of 7 cannot happen when dividing by 6, since 7 is bigger than 6. Correctly, 6 × 5 = 30 and 31 − 30 = 1, so 31 ÷ 6 = 5 r 1.' },
        { difficulty: 'Medium', question: 'Calculate and write your answer in the form quotient r remainder: 67 ÷ 9', answer: '7 r 4', checkMode: 'auto', correctAnswer: '7r4', correctAnswers: ['7r4', '7remainder4', '7rem4'], explanation: '9 × 7 = 63 (closest without exceeding 67). 67 − 63 = 4 left over. 67 ÷ 9 = 7 r 4.' },

        // Block 3 — Long Division (8-11, Medium)
        { difficulty: 'Medium', question: 'Calculate using long division: 76 ÷ 4', answer: '19', checkMode: 'auto', correctAnswer: '19', explanation: '7 ÷ 4 = 1 r 3, bring down 6 → 36. 36 ÷ 4 = 9. So 76 ÷ 4 = 19.' },
        { difficulty: 'Medium', question: 'Calculate using long division: 434 ÷ 7', answer: '62', checkMode: 'auto', correctAnswer: '62', explanation: '43 ÷ 7 = 6 r 1, bring down 4 → 14. 14 ÷ 7 = 2. So 434 ÷ 7 = 62.' },
        { difficulty: 'Medium', question: 'Calculate using long division and write your answer in the form quotient r remainder: 287 ÷ 6', answer: '47 r 5', checkMode: 'auto', correctAnswer: '47r5', correctAnswers: ['47r5', '47remainder5', '47rem5'], explanation: '28 ÷ 6 = 4 r 4, bring down 7 → 47. 47 ÷ 6 = 7 r 5. So 287 ÷ 6 = 47 r 5.' },
        { difficulty: 'Medium', question: 'Use long division to calculate 462 ÷ 11, and show your working step by step (divide, multiply, subtract, bring down) rather than writing only the final answer.', answer: '42', checkMode: 'self', explanation: '46 ÷ 11 = 4 r 2 (11 × 4 = 44, 46 − 44 = 2). Bring down 2 → 22. 22 ÷ 11 = 2 (11 × 2 = 22, 22 − 22 = 0). So 462 ÷ 11 = 42 exactly.' },

        // Block 4 — Word Problems: Sharing vs Grouping (12-15, Medium)
        { difficulty: 'Medium', question: 'A librarian has 84 storybooks to place onto shelves, with 6 books fitting on each shelf. Is this a sharing problem or a grouping problem? Explain briefly, then give the answer.', answer: 'Grouping — 14 shelves', checkMode: 'self', explanation: 'This is a grouping problem: we know the total (84) and the size of each group (6), and must find how many groups fit. 84 ÷ 6 = 14 shelves.' },
        { difficulty: 'Medium', question: 'R165 is shared equally among 5 volunteers for travel costs. How much does each volunteer receive? Write only the number without the R symbol.', answer: '33', checkMode: 'auto', correctAnswer: '33', explanation: '165 ÷ 5 = 33. Each volunteer receives R33.' },
        { difficulty: 'Medium', question: 'How many rows will there be if a farmer plants 117 cabbages with 9 cabbages in each row?', answer: '13', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13 rows'], explanation: '117 ÷ 9 = 13 rows.' },
        { difficulty: 'Medium', question: 'A craft shop received a box of 152 buttons. The owner wants to pack them into small packets, with 8 buttons in each packet, to sell individually. How many packets can be filled?', answer: '19', checkMode: 'auto', correctAnswer: '19', correctAnswers: ['19', '19 packets'], explanation: '152 ÷ 8 = 19 packets.' },

        // Block 5 — Multi-Step & Applied Problems (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A market stall earns R270 from selling fruit, shared equally across a 9-hour day. If the stallholder then spends R18 on ice for keeping fruit cool, how much of that hourly rate is left over from one hour\'s worth of earnings?', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: '270 ÷ 9 = 30 (earned per hour). 30 − 18 = 12. R12 is left over.' },
        { difficulty: 'Medium-Hard', question: 'A community hall is arranging seating for 130 guests at a wedding. Each table seats 9 guests. How many tables must be set up so that every guest has a seat?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 tables'], explanation: '130 ÷ 9 = 14 r 4. Fourteen tables are full, but 4 guests still need a seat, so a 15th table must be set up. 15 tables in total.' },

        // Block 6 — Reasoning & Justification (18-19, Hard)
        { difficulty: 'Hard', question: 'Explain in your own words why the remainder in a division must always be smaller than the divisor. Use the example 26 ÷ 7 to support your explanation.', answer: '26 ÷ 7 = 3 r 5, since 5 < 7', checkMode: 'self', explanation: 'If the remainder were equal to or greater than the divisor, another full group could still be made, so the division was not finished. For 26 ÷ 7: 7 × 3 = 21, and 26 − 21 = 5, which is smaller than 7, so 3 r 5 is correct. If someone said 2 r 12, that would be wrong because 12 is bigger than 7 — another group of 7 fits inside 12.' },
        { difficulty: 'Hard', question: 'Without calculating both fully, explain which gives a bigger answer: 120 ÷ 6 or 120 ÷ 10. How do you know?', answer: '120 ÷ 6 is bigger', checkMode: 'self', explanation: 'When the same number is divided by a smaller divisor, it is split into fewer, larger groups, so the answer is bigger. Since 6 is smaller than 10, 120 ÷ 6 gives a bigger answer than 120 ÷ 10, without needing to work out that they are 20 and 12.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have a strong grasp of division facts, remainders, long division, and word problems.' },
        { minScore: 15, message: 'Great work! You are confident with most division skills — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Division Facts & Fact Families (0-3, Easy)
        { difficulty: 'Easy', question: 'Calculate: 63 ÷ 9', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '9 × 7 = 63, so 63 ÷ 9 = 7.' },
        { difficulty: 'Easy', question: 'A teacher shares 40 counters equally among 8 pairs of learners. How many counters does each pair get?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 counters'], explanation: '40 ÷ 8 = 5. Each pair gets 5 counters.' },
        { difficulty: 'Easy', question: 'What number times 6 gives 42?', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '6 × 7 = 42, so the missing number is 7. This also means 42 ÷ 6 = 7.' },
        { difficulty: 'Easy', question: 'Use the fact family for 3 × 9 = 27 to write the two related division facts.', answer: '27 ÷ 9 = 3 and 27 ÷ 3 = 9', checkMode: 'auto', correctAnswer: '27÷9=3 and 27÷3=9', correctAnswers: ['27÷9=3 and 27÷3=9', '27/9=3 and 27/3=9', '27÷3=9 and 27÷9=3', '27/3=9 and 27/9=3'], explanation: 'From 3 × 9 = 27, the two division facts are 27 ÷ 9 = 3 and 27 ÷ 3 = 9.' },

        // Block 2 — Remainders (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Calculate and write your answer in the form quotient r remainder: 37 ÷ 8', answer: '4 r 5', checkMode: 'auto', correctAnswer: '4r5', correctAnswers: ['4r5', '4remainder5', '4rem5'], explanation: '8 × 4 = 32 (closest without exceeding 37). 37 − 32 = 5 left over. 37 ÷ 8 = 4 r 5.' },
        { difficulty: 'Easy-Medium', question: 'Palesa has 51 sweets and wants to pack them into party bags of 7 sweets each. How many full bags can she pack, and how many sweets are left over?', answer: '7 r 2', checkMode: 'auto', correctAnswer: '7r2', correctAnswers: ['7r2', '7remainder2', '7rem2'], explanation: '7 × 7 = 49 (closest without exceeding 51). 51 − 49 = 2 left over. 51 ÷ 7 = 7 r 2.' },
        { difficulty: 'Medium', question: 'A learner wrote: "27 ÷ 4 = 5 r 7". Is this correct? If not, write the correct answer in the form quotient r remainder.', answer: '6 r 3', checkMode: 'auto', correctAnswer: '6r3', correctAnswers: ['6r3', '6remainder3', '6rem3', 'no6r3', 'incorrect6r3'], explanation: 'The learner is wrong: a remainder of 7 cannot happen when dividing by 4, since 7 is bigger than 4. Correctly, 4 × 6 = 24 and 27 − 24 = 3, so 27 ÷ 4 = 6 r 3.' },
        { difficulty: 'Medium', question: 'Calculate and write your answer in the form quotient r remainder: 71 ÷ 9', answer: '7 r 8', checkMode: 'auto', correctAnswer: '7r8', correctAnswers: ['7r8', '7remainder8', '7rem8'], explanation: '9 × 7 = 63 (closest without exceeding 71). 71 − 63 = 8 left over. 71 ÷ 9 = 7 r 8.' },

        // Block 3 — Long Division (8-11, Medium)
        { difficulty: 'Medium', question: 'Calculate using long division: 98 ÷ 7', answer: '14', checkMode: 'auto', correctAnswer: '14', explanation: '9 ÷ 7 = 1 r 2, bring down 8 → 28. 28 ÷ 7 = 4. So 98 ÷ 7 = 14.' },
        { difficulty: 'Medium', question: 'Calculate using long division: 512 ÷ 8', answer: '64', checkMode: 'auto', correctAnswer: '64', explanation: '51 ÷ 8 = 6 r 3, bring down 2 → 32. 32 ÷ 8 = 4. So 512 ÷ 8 = 64.' },
        { difficulty: 'Medium', question: 'Calculate using long division and write your answer in the form quotient r remainder: 293 ÷ 8', answer: '36 r 5', checkMode: 'auto', correctAnswer: '36r5', correctAnswers: ['36r5', '36remainder5', '36rem5'], explanation: '29 ÷ 8 = 3 r 5, bring down 3 → 53. 53 ÷ 8 = 6 r 5. So 293 ÷ 8 = 36 r 5.' },
        { difficulty: 'Medium', question: 'Use long division to calculate 429 ÷ 12, and show your working step by step (divide, multiply, subtract, bring down) rather than writing only the final answer.', answer: '35 r 9', checkMode: 'self', explanation: '42 ÷ 12 = 3 r 6 (12 × 3 = 36, 42 − 36 = 6). Bring down 9 → 69. 69 ÷ 12 = 5 r 9 (12 × 5 = 60, 69 − 60 = 9). So 429 ÷ 12 = 35 r 9.' },

        // Block 4 — Word Problems: Sharing vs Grouping (12-15, Medium)
        { difficulty: 'Medium', question: 'A caterer has 108 cupcakes to arrange into trays, with 9 cupcakes fitting on each tray. Is this a sharing problem or a grouping problem? Explain briefly, then give the answer.', answer: 'Grouping — 12 trays', checkMode: 'self', explanation: 'This is a grouping problem: we know the total (108) and the size of each group (9), and must find how many groups fit. 108 ÷ 9 = 12 trays.' },
        { difficulty: 'Medium', question: 'R141 in ticket sales is shared equally among 3 charities. How much does each charity receive? Write only the number without the R symbol.', answer: '47', checkMode: 'auto', correctAnswer: '47', explanation: '141 ÷ 3 = 47. Each charity receives R47.' },
        { difficulty: 'Medium', question: 'How many rows will there be if a learner arranges 78 desks with 6 desks in each row?', answer: '13', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13 rows'], explanation: '78 ÷ 6 = 13 rows.' },
        { difficulty: 'Medium', question: 'A stationery shop received a box of 164 crayons. The owner wants to pack them into small tubs, with 4 crayons in each tub, to sell individually. How many tubs can be filled?', answer: '41', checkMode: 'auto', correctAnswer: '41', correctAnswers: ['41', '41 tubs'], explanation: '164 ÷ 4 = 41 tubs.' },

        // Block 5 — Multi-Step & Applied Problems (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A car wash earns R288 from washing cars, shared equally across an 8-hour shift. If the owner then spends R11 on soap for the next shift, how much of that hourly rate is left over from one hour\'s worth of earnings?', answer: '25', checkMode: 'auto', correctAnswer: '25', explanation: '288 ÷ 8 = 36 (earned per hour). 36 − 11 = 25. R25 is left over.' },
        { difficulty: 'Medium-Hard', question: 'A church is arranging transport for 85 members to a conference. Each bus holds 9 members. How many buses must be booked so that every member has a seat?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 buses'], explanation: '85 ÷ 9 = 9 r 4. Nine buses are full, but 4 members still need a seat, so a 10th bus must be booked. 10 buses in total.' },

        // Block 6 — Reasoning & Justification (18-19, Hard)
        { difficulty: 'Hard', question: 'Explain, using an example, the difference between a sharing division problem and a grouping division problem, even though both can use the same division number sentence.', answer: 'Sharing: 4 friends get 8 marbles each from 32. Grouping: 32 marbles packed into bags of 8 makes 4 bags.', checkMode: 'self', explanation: 'In a sharing problem, you know the total and the number of groups, and you find how many items go in each group — for example, sharing 32 marbles among 4 friends means each friend gets 32 ÷ 4 = 8 marbles. In a grouping problem, you know the total and the size of each group, and you find how many groups you can make — for example, packing 32 marbles into bags of 8 means you can make 32 ÷ 8 = 4 bags. The number sentence looks similar, but the meaning of the answer is different.' },
        { difficulty: 'Hard', question: 'Without calculating both fully, explain which gives a bigger answer: 144 ÷ 3 or 144 ÷ 9. How do you know?', answer: '144 ÷ 3 is bigger', checkMode: 'self', explanation: 'When the same number is divided by a smaller divisor, it is split into fewer, larger groups, so the answer is bigger. Since 3 is smaller than 9, 144 ÷ 3 gives a bigger answer than 144 ÷ 9, without needing to work out that they are 48 and 16.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have a strong grasp of division facts, remainders, long division, and word problems.' },
        { minScore: 15, message: 'Great work! You are confident with most division skills — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
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
