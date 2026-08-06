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
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="12" width="124" height="26" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="20" cy="25" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="44" cy="25" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="68" cy="25" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="92" cy="25" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="116" cy="25" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><rect x="8" y="47" width="124" height="26" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="20" cy="60" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="44" cy="60" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="68" cy="60" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="92" cy="60" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="116" cy="60" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><rect x="8" y="82" width="124" height="26" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="20" cy="95" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="44" cy="95" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="68" cy="95" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="92" cy="95" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="116" cy="95" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><rect x="8" y="120" width="60" height="26" rx="6" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><circle cx="20" cy="133" r="8" fill="#fdba74" stroke="#ea580c" stroke-width="1.5"/><circle cx="44" cy="133" r="8" fill="#fdba74" stroke="#ea580c" stroke-width="1.5"/><text x="90" y="138" font-weight="700" font-size="13" fill="#ea580c">left over</text><text x="110" y="163" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">17 ÷ 5 = 3 r 2</text></svg>',

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


      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — COMPARING AMOUNTS: "FOR EVERY" AND "PER" PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-amounts-for-every-and-per',
      title: 'Comparing Amounts: "For Every" and "Per" Problems',
      icon: '⚖️',
      explanation: `<p style="margin-bottom:18px;">Some word problems do not ask you to share one amount or group one amount — they ask you to <strong>compare two amounts that change together</strong>. There are two kinds of these problems.</p>

<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:22px;">
  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:8px;">Comparing the Same Kind</div>
    <div style="font-size:14px;color:#374151;margin-bottom:8px;">Two groups of the <em>same kind</em> of thing are compared — like red beads and blue beads.</div>
    <div style="font-size:13px;color:#374151;">Look for: <span style="color:#ea580c;font-weight:700;">for every</span>, <span style="color:#ea580c;font-weight:700;">for each</span></div>
  </div>
  <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#16a34a;margin-bottom:8px;">Comparing Different Kinds</div>
    <div style="font-size:14px;color:#374151;margin-bottom:8px;">Two <em>different kinds</em> of things that change together are compared — like distance and time, or cost and number of items.</div>
    <div style="font-size:13px;color:#374151;">Look for: <span style="color:#ea580c;font-weight:700;">per</span>, <span style="color:#ea580c;font-weight:700;">every hour</span>, <span style="color:#ea580c;font-weight:700;">each</span></div>
  </div>
</div>

<p style="margin-bottom:16px;">You do not need any new signs or symbols to solve these problems — just the multiplication and division facts you already know. First find the <span style="color:#ea580c;font-weight:700;">scale factor</span>: how many times bigger (or smaller) one amount has become. Then apply that <em>same</em> scale factor to the other amount.</p>

<div style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">Three steps to solve any comparing problem</div>
  <ol style="margin:0;padding-left:18px;color:#374151;font-size:14px;line-height:1.8;">
    <li>Write down what you know for <strong>one</strong> unit or one small group.</li>
    <li>Divide to find the <span style="color:#ea580c;font-weight:700;">scale factor</span> — how many of those units or groups fit into the new amount.</li>
    <li>Multiply to find the matching new amount.</li>
  </ol>
</div>

<div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:14px 16px;">
  <p style="font-size:13px;font-weight:700;color:#0f1f3d;margin-bottom:10px;">Colour guide:</p>
  <div style="display:flex;flex-wrap:wrap;gap:10px;font-size:13px;">
    <span style="background:#eff6ff;color:#1e40af;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #bfdbfe;">First amount — blue</span>
    <span style="background:#fef2f2;color:#dc2626;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #fca5a5;">Matching amount — red</span>
    <span style="background:#fff7ed;color:#ea580c;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #fdba74;">Scale factor — orange</span>
    <span style="background:#f0fdf4;color:#16a34a;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #86efac;">Answer — green</span>
  </div>
</div>`,

      videoPlaceholder: 'Short video showing how to solve "for every" and "per" comparison word problems using a scale factor',

      workedExamples: [
        {
          question: 'For every <span style="color:#1e40af;font-weight:700;">2</span> sweets Thabo gets, his younger sister gets <span style="color:#dc2626;font-weight:700;">3</span> sweets. If Thabo gets 8 sweets, how many sweets does his sister get?',
          answer: '12 sweets',
          steps: [
            `This compares two groups of the <strong>same kind</strong> of thing (sweets and sweets): for every <span style="color:#1e40af;font-weight:700;">2</span> sweets Thabo gets, his sister gets <span style="color:#dc2626;font-weight:700;">3</span>.`,
            `Find the <span style="color:#ea580c;font-weight:700;">scale factor</span>: Thabo's 2 sweets became 8 sweets. <span style="color:#ea580c;font-weight:700;">8 ÷ 2 = 4</span> — everything is 4 times bigger now.`,
            `Apply the same scale factor to his sister's amount: <span style="color:#dc2626;font-weight:700;">3</span> × <span style="color:#ea580c;font-weight:700;">4</span> = <span style="color:#16a34a;font-weight:700;font-size:18px;">12</span>. His sister gets <strong>12 sweets</strong>.`,
          ],
        },
        {
          question: 'A tap fills a water tank at a steady rate of <span style="color:#1e40af;font-weight:700;">5 litres every minute</span>. How many litres are in the tank after 6 minutes?',
          answer: '30 litres',
          steps: [
            `This compares two <strong>different kinds</strong> of things that change together: litres and minutes. We are told the amount for <strong>1 minute</strong>: <span style="color:#1e40af;font-weight:700;">5 litres</span>.`,
            `We want the amount for <span style="color:#ea580c;font-weight:700;">6 minutes</span>, so multiply the rate by 6: <span style="color:#1e40af;font-weight:700;">5</span> × <span style="color:#ea580c;font-weight:700;">6</span> = <span style="color:#16a34a;font-weight:700;font-size:18px;">30</span>.`,
            `After 6 minutes, there are <strong>30 litres</strong> in the tank.`,
          ],
        },
        {
          question: 'A taxi travels <span style="color:#1e40af;font-weight:700;">120 km in 3 hours</span> at a steady speed. How far will it travel in 5 hours?',
          answer: '200 km',
          steps: [
            `First find the amount for <strong>1 hour</strong> — divide the distance by the time: <span style="color:#1e40af;font-weight:700;">120</span> ÷ <span style="color:#ea580c;font-weight:700;">3</span> = <span style="color:#16a34a;font-weight:700;">40</span> km per hour.`,
            `Now multiply this by the new number of hours: <span style="color:#16a34a;font-weight:700;">40</span> × <span style="color:#dc2626;font-weight:700;">5</span> = <span style="color:#16a34a;font-weight:700;font-size:18px;">200</span>.`,
            `The taxi will travel <strong>200 km</strong> in 5 hours.`,
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
        // Block 1 — Division Facts & Fact Families (0-3, Easy)
        { difficulty: 'Easy', question: 'Calculate: 54 ÷ 6', checkMode: 'auto', options: ['9', '8', '10', '6'], correctIndex: 0, explanation: '6 × 9 = 54, so 54 ÷ 6 = 9. (8 undercounts the 6× table by one group; 10 overcounts by one group; 6 mistakes the divisor itself for the answer.)' },
        { difficulty: 'Easy', question: 'A coach shares 32 cones equally among 4 training groups. How many cones does each group get?', checkMode: 'auto', options: ['7', '8', '9', '4'], correctIndex: 1, explanation: '32 ÷ 4 = 8, since 4 × 8 = 32. Each group gets 8 cones. (7 and 9 are off-by-one errors in the 4× table; 4 mistakes the number of groups for the number of cones each group gets.)' },
        { difficulty: 'Easy', question: '9 × 6 = 54. Which statement about the related division facts is correct?', checkMode: 'auto', options: ['54 ÷ 9 = 5, because you subtract 1 from 6', '54 ÷ 6 = 6, because both parts of a fact family are always equal', '54 ÷ 9 = 6, because dividing a product by one factor always gives the other factor', '54 ÷ 9 = 9, because the answer must match the divisor'], correctIndex: 2, explanation: '9 × 6 = 54, so dividing the product 54 by one factor always gives the other factor: 54 ÷ 9 = 6. The wrong options show common mix-ups: subtracting instead of applying the inverse relationship, assuming both quotients must be equal, or confusing the quotient with the divisor.' },
        { difficulty: 'Easy', question: 'Use the fact family for 6 × 9 = 54 to write the two related division facts.', checkMode: 'auto', options: ['54 ÷ 6 = 8 and 54 ÷ 9 = 5', '54 ÷ 5 = 9 and 54 ÷ 6 = 8', '54 ÷ 9 = 9 and 54 ÷ 6 = 6', '54 ÷ 9 = 6 and 54 ÷ 6 = 9'], correctIndex: 3, explanation: 'From 6 × 9 = 54, the two division facts are 54 ÷ 9 = 6 and 54 ÷ 6 = 9. Option A miscalculates both quotients; option B invents a divisor (5) that isn\'t part of this fact family; option C wrongly makes each quotient equal to its own divisor.' },

        // Block 2 — Remainders (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Calculate and write your answer in the form quotient r remainder: 34 ÷ 5', checkMode: 'auto', options: ['6 r 4', '7 r 1', '5 r 9', '6 r 5'], correctIndex: 0, explanation: '5 × 6 = 30 is the closest multiple of 5 without exceeding 34. 34 − 30 = 4, so 34 ÷ 5 = 6 r 4. (7 r 1 comes from rounding the quotient up instead of down; 5 r 9 undercounts the quotient by one, leaving an invalid remainder bigger than the divisor; 6 r 5 is a subtraction slip.)' },
        { difficulty: 'Easy-Medium', question: 'Zanele has 46 beads and wants to thread them onto necklaces of 9 beads each. How many complete necklaces can she make, and how many beads are left over?', checkMode: 'auto', options: ['4 r 10', '5 r 1', '6 r 1', '5 r 0'], correctIndex: 1, explanation: '9 × 5 = 45 is the closest multiple of 9 without exceeding 46. 46 − 45 = 1, so 46 ÷ 9 = 5 r 1. (4 r 10 undercounts the quotient, leaving a remainder bigger than the divisor; 6 r 1 overshoots since 9 × 6 = 54 is already more than 46; 5 r 0 wrongly assumes there is no leftover bead.)' },
        { difficulty: 'Medium', question: 'A learner wrote: "23 ÷ 5 = 3 r 8". Is this correct?', checkMode: 'auto', options: ['The learner is correct as written', 'Incorrect — the correct answer is 5 r 3', 'Incorrect — the correct answer is 4 r 3', 'Incorrect — the correct answer is 3 r 3'], correctIndex: 2, explanation: 'The learner is wrong: a remainder of 8 cannot happen when dividing by 5, since 8 is bigger than 5. Correctly, 5 × 4 = 20 and 23 − 20 = 3, so 23 ÷ 5 = 4 r 3. (5 r 3 overshoots since 5 × 5 = 25 is already more than 23; 3 r 3 undercounts the quotient by one.)' },
        { difficulty: 'Medium', question: 'A box holds 61 apples. If 8 apples are packed per bag, how many full bags are there, and how many apples are left over?', checkMode: 'auto', options: ['6 r 13', '7 r 4', '8 r 5', '7 r 5'], correctIndex: 3, explanation: '8 × 7 = 56 is the closest multiple of 8 without exceeding 61. 61 − 56 = 5, so 61 ÷ 8 = 7 r 5. (6 r 13 undercounts the quotient, leaving an invalid remainder bigger than the divisor; 7 r 4 is a subtraction slip; 8 r 5 overshoots since 8 × 8 = 64 is already more than 61.)' },

        // Block 3 — Long Division (8-11, Medium)
        { difficulty: 'Medium', question: 'Calculate using long division: 78 ÷ 6', checkMode: 'auto', options: ['13', '12', '14', '31'], correctIndex: 0, explanation: '7 ÷ 6 = 1 r 1, bring down 8 → 18. 18 ÷ 6 = 3. So 78 ÷ 6 = 13. (12 and 14 come from a one-off error in the final division step; 31 swaps the digits of the correct answer.)' },
        { difficulty: 'Medium', question: 'A charity packed 315 blankets equally into 5 delivery trucks. How many blankets went into each truck?', checkMode: 'auto', options: ['61', '63', '65', '36'], correctIndex: 1, explanation: '31 ÷ 5 = 6 r 1, bring down 5 → 15. 15 ÷ 5 = 3. So 315 ÷ 5 = 63 blankets per truck. (61 and 65 come from a one-off slip in the final digit; 36 swaps the digits of the correct answer.)' },
        { difficulty: 'Medium', question: 'Calculate using long division and write your answer in the form quotient r remainder: 259 ÷ 7', checkMode: 'auto', options: ['36 r 7', '37 r 1', '37 r 0', '27 r 0'], correctIndex: 2, explanation: '25 ÷ 7 = 3 r 4, bring down 9 → 49. 49 ÷ 7 = 7. So 259 ÷ 7 = 37 exactly, i.e. 37 r 0. (36 r 7 stops one group short, leaving a remainder equal to the divisor — another group of 7 still fits; 37 r 1 is a subtraction slip in the final step; 27 r 0 mis-writes the tens digit of the quotient.)' },
        { difficulty: 'Medium', question: 'A learner used long division and got 386 ÷ 9 = 43 r 8. Check the working by multiplying the quotient by the divisor and adding the remainder. Is the learner\'s answer correct?', checkMode: 'auto', options: ['43 r 8', '42 r 9', '41 r 17', '42 r 8'], correctIndex: 3, explanation: 'Check: 9 × 43 = 387, plus 8 gives 395 — far more than 386, so the learner\'s claim (43 r 8) is wrong. Correct working: 38 ÷ 9 = 4 r 2, bring down 6 → 26. 26 ÷ 9 = 2 r 8. So 386 ÷ 9 = 42 r 8. (42 r 9 has a subtraction slip in the last step; 41 r 17 undercounts the final quotient digit, leaving an invalid remainder bigger than the divisor.)' },

        // Block 4 — Word Problems: Sharing vs Grouping (12-15, Medium)
        { difficulty: 'Medium', question: 'A shop owner has 96 oranges and packs them into crates of 8. Which statement correctly identifies and solves this problem?', checkMode: 'auto', options: ['This is a grouping problem, since we know the group size (8) and must find how many groups fit — 96 ÷ 8 = 12 crates.', 'This is a sharing problem, since we know the total (96) and must share it into 8 equal parts — 96 ÷ 8 = 12 crates.', 'This is a grouping problem, and the answer is 8 crates, since 8 is the crate size.', 'This is a sharing problem, and the answer is 8 oranges per crate.'], correctIndex: 0, explanation: 'This is a grouping problem: we know the total (96) and the size of each group (8), and must find how many groups fit — 96 ÷ 8 = 12 crates. (Option B reaches the right number but mislabels the problem type — sharing would mean splitting into a known number of groups, not groups of a known size. Options C and D confuse the crate size with the final answer.)' },
        { difficulty: 'Medium', question: 'R138 in prize money is shared equally among 6 winners. How much does each winner receive? Write only the number without the R symbol.', checkMode: 'auto', options: ['22', '23', '24', '6'], correctIndex: 1, explanation: '138 ÷ 6 = 23. Each winner receives R23. (22 and 24 are off-by-one errors in the 6× table; 6 mistakes the number of winners for the amount each receives.)' },
        { difficulty: 'Medium', question: 'A gardener plants 91 seedlings in equal rows of 7. Which number sentence correctly represents and solves this problem?', checkMode: 'auto', options: ['91 ÷ 7 = 12', '91 ÷ 7 = 14', '91 ÷ 7 = 13', '91 × 7 = 13'], correctIndex: 2, explanation: 'The correct number sentence is 91 ÷ 7 = 13 rows. (12 and 14 are off-by-one errors in the 7× table; the last option uses the wrong operation entirely.)' },
        { difficulty: 'Medium', question: 'A toy shop received a delivery of 175 marbles. The owner wants to pack them into small pouches, with 5 marbles in each pouch, to sell individually. How many pouches can be filled?', checkMode: 'auto', options: ['34', '36', '5', '35'], correctIndex: 3, explanation: '175 ÷ 5 = 35 pouches. (34 and 36 are off-by-one errors in the 5× table; 5 mistakes the pouch size for the number of pouches.)' },

        // Block 5 — Multi-Step & Applied Problems (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A bakery earns R216 from selling loaves, shared equally across a 9-hour shift. If the baker then spends R14 on flour for the next batch, how much money is left from one hour\'s earnings after buying the flour?', checkMode: 'auto', options: ['10', '24', '38', '11'], correctIndex: 0, explanation: '216 ÷ 9 = 24 earned per hour. 24 − 14 = 10, so R10 is left. (24 forgets to subtract the flour cost at all; 38 mistakenly adds the R14 instead of subtracting it; 11 is a subtraction slip.)' },
        { difficulty: 'Medium-Hard', question: 'A school is organising transport for 100 learners on a trip. Each van holds 8 learners. Which statement correctly explains the number of vans needed?', checkMode: 'auto', options: ['100 ÷ 8 = 12 r 4, so exactly 12 vans are needed since the remainder is small.', '100 ÷ 8 = 12 r 4, so 13 vans are needed because the 4 remaining learners still need a van, even though it won\'t be full.', '100 ÷ 8 = 12 r 4, so 12 vans are needed and the 4 extra learners can be dropped.', '100 ÷ 8 = 13 exactly, so 13 vans are needed with no learners left over.'], correctIndex: 1, explanation: '100 ÷ 8 = 12 r 4. Twelve vans fill exactly 96 seats, but the 4 learners left over still need transport, so a 13th van is required even though it won\'t be full — you must round up whenever there is a remainder. (Option A wrongly stops at the quotient; option C absurdly suggests leaving learners behind; option D miscalculates the division as exact.)' },

        // Block 6 — Reasoning & Justification (18-19, Hard)
        { difficulty: 'Hard', question: 'A learner claims: "In the fact family for 8 × 6 = 48, the two division facts are 48 ÷ 6 = 8 and 48 ÷ 5 = 8." Which statement about this claim is correct?', checkMode: 'auto', options: ['The claim is correct — 48 ÷ 6 = 8 and 48 ÷ 5 = 8 are both valid facts.', 'The claim is incorrect — the second fact should be 48 ÷ 8 = 5.', 'The claim is incorrect — the second fact should be 48 ÷ 8 = 6, not 48 ÷ 5 = 8.', 'The claim is incorrect — neither division fact is possible from 8 × 6 = 48.'], correctIndex: 2, explanation: 'The claim is incorrect. From 8 × 6 = 48, the two related division facts must use the same three numbers: 48 ÷ 6 = 8 and 48 ÷ 8 = 6. The number 5 does not belong to this fact family at all. (Option B keeps the right divisor but the wrong quotient; option D wrongly denies that any valid facts exist.)' },
        { difficulty: 'Hard', question: 'Which statement correctly compares 96 ÷ 4 and 96 ÷ 8 without calculating both fully?', checkMode: 'auto', options: ['96 ÷ 8 is bigger, because 8 is a bigger number.', 'They are equal, because both divide the same dividend.', '96 ÷ 8 is bigger, because dividing into fewer groups always gives a bigger answer.', '96 ÷ 4 is bigger, because dividing by a smaller divisor splits the number into fewer, larger groups.'], correctIndex: 3, explanation: 'When the same number is divided by a smaller divisor, it is split into fewer, larger groups, so the answer is bigger. Since 4 is smaller than 8, 96 ÷ 4 gives a bigger answer than 96 ÷ 8 (24 versus 12), without needing to calculate both fully. (Options A and C wrongly link a bigger divisor to a bigger answer; option B wrongly assumes equal divisors give equal answers.)' },

        // Block 7 — Comparing Amounts: For Every and Per (20-22, Easy-Medium)
        { difficulty: 'Easy', question: 'For every 3 red counters, there are 4 blue counters. If there are 12 red counters, how many blue counters are there?', checkMode: 'auto', options: ['16', '13', '9', '4'], correctIndex: 0, explanation: '12 red counters is 12 ÷ 3 = 4 times as many as 3. Apply the same scale factor to the blue counters: 4 × 4 = 16. (13 comes from adding the difference between 12 and 3 to the blue count instead of scaling; 9 comes from mixing up which number is the red count in the ratio; 4 just repeats the ratio\'s blue number without scaling at all.)' },
        { difficulty: 'Medium', question: 'A minibus taxi travels 150 km in 3 hours at a steady speed. How far does it travel in 5 hours?', checkMode: 'auto', options: ['200', '250', '300', '50'], correctIndex: 1, explanation: 'Rate per hour: 150 ÷ 3 = 50 km per hour. In 5 hours: 50 × 5 = 250 km. (200 comes from adding one extra 50 km increment instead of multiplying properly; 300 comes from using 6 hours instead of 5; 50 stops at the rate for 1 hour and forgets to scale up.)' },
        { difficulty: 'Medium', question: 'A recipe needs 2 eggs for every 3 cups of flour. Sipho has 8 eggs and wants to use all of them, keeping the same pattern. Which statement correctly finds how much flour he needs?', checkMode: 'auto', options: ['The scale factor is 8 ÷ 3 = 2.67, so he needs 3 × 2.67 ≈ 8 cups.', 'Since Sipho has 8 eggs, he simply needs 8 cups of flour too.', 'The scale factor is 8 ÷ 2 = 4, so he needs 3 × 4 = 12 cups of flour.', 'He needs 2 × 8 = 16 cups of flour, since flour is always double the eggs.'], correctIndex: 2, explanation: 'The scale factor is 8 ÷ 2 = 4, since Sipho has 4 times as many eggs as the base amount of 2. Apply the same scale factor to the flour: 3 × 4 = 12 cups. (Option A divides by the wrong number entirely; option B ignores the ratio and just copies the egg count; option D wrongly assumes a fixed doubling relationship instead of using the actual 2:3 ratio.)' },
      ],
      scoreMessages: [
        { minScore: 23, message: 'Outstanding! You have a strong grasp of division facts, remainders, long division, word problems and comparing amounts.' },
        { minScore: 17, message: 'Great work! You are confident with most division skills — review any missed questions.' },
        { minScore: 11, message: 'Good effort! Revisit the worked examples and try this set again.' },
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
        { difficulty: 'Easy', question: 'Calculate: 72 ÷ 8', checkMode: 'auto', options: ['8', '9', '10', '72'], correctIndex: 1, explanation: '8 × 9 = 72, so 72 ÷ 8 = 9. (8 undercounts the 8× table by one group; 10 overcounts by one group; 72 forgets to divide at all and just repeats the dividend.)' },
        { difficulty: 'Easy', question: 'A vendor packs 49 oranges equally into 7 baskets. How many oranges go into each basket?', checkMode: 'auto', options: ['6', '8', '7', '49'], correctIndex: 2, explanation: '49 ÷ 7 = 7. Each basket gets 7 oranges. (6 and 8 are off-by-one errors in the 7× table; 49 mistakenly repeats the total instead of dividing.)' },
        { difficulty: 'Easy', question: 'Fill in the missing number: 7 × ___ = 49, and use it to state what 49 ÷ 7 equals.', checkMode: 'auto', options: ['6', '8', '49', '7'], correctIndex: 3, explanation: '7 × 7 = 49, so the missing number is 7, and 49 ÷ 7 = 7. (6 and 8 are off-by-one errors in the 7× table; 49 wrongly repeats the total instead of finding the missing factor.)' },
        { difficulty: 'Easy', question: 'Use the fact family for 8 × 7 = 56 to write the two related division facts.', checkMode: 'auto', options: ['56 ÷ 7 = 8 and 56 ÷ 8 = 7', '56 ÷ 8 = 6 and 56 ÷ 7 = 9', '56 ÷ 6 = 9 and 56 ÷ 7 = 8', '56 ÷ 7 = 7 and 56 ÷ 8 = 8'], correctIndex: 0, explanation: 'From 8 × 7 = 56, the two division facts are 56 ÷ 7 = 8 and 56 ÷ 8 = 7. (Option B miscalculates both quotients; option C invents a divisor (6) that isn\'t part of this fact family; option D wrongly makes each quotient equal to its own divisor.)' },

        // Block 2 — Remainders (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Calculate and write your answer in the form quotient r remainder: 41 ÷ 6', checkMode: 'auto', options: ['5 r 11', '6 r 5', '6 r 6', '7 r 5'], correctIndex: 1, explanation: '6 × 6 = 36 is the closest multiple of 6 without exceeding 41. 41 − 36 = 5, so 41 ÷ 6 = 6 r 5. (5 r 11 undercounts the quotient, leaving an invalid remainder bigger than the divisor; 6 r 6 is a subtraction slip; 7 r 5 overshoots since 6 × 7 = 42 is already more than 41.)' },
        { difficulty: 'Easy-Medium', question: 'Dumisani has 53 marbles and wants to fill jars that each hold 8 marbles. How many full jars can he fill, and how many marbles are left over?', checkMode: 'auto', options: ['5 r 13', '6 r 4', '6 r 5', '7 r 3'], correctIndex: 2, explanation: '8 × 6 = 48 is the closest multiple of 8 without exceeding 53. 53 − 48 = 5, so 53 ÷ 8 = 6 r 5. (5 r 13 undercounts the quotient, leaving an invalid remainder bigger than the divisor; 6 r 4 is a subtraction slip; 7 r 3 overshoots since 8 × 7 = 56 is already more than 53.)' },
        { difficulty: 'Medium', question: 'A learner wrote: "31 ÷ 6 = 4 r 7". Is this correct?', checkMode: 'auto', options: ['The learner is correct as written', 'Incorrect — the correct answer is 6 r 1', 'Incorrect — the correct answer is 5 r 0', 'Incorrect — the correct answer is 5 r 1'], correctIndex: 3, explanation: 'The learner is wrong: a remainder of 7 cannot happen when dividing by 6, since 7 is bigger than 6. Correctly, 6 × 5 = 30 and 31 − 30 = 1, so 31 ÷ 6 = 5 r 1. (6 r 1 overshoots since 6 × 6 = 36 is already more than 31; 5 r 0 wrongly assumes there is no leftover.)' },
        { difficulty: 'Medium', question: 'A crate holds 67 eggs. If they are repacked into egg trays of 9, how many full trays are there, and how many eggs are left over?', checkMode: 'auto', options: ['7 r 4', '6 r 13', '7 r 5', '8 r 5'], correctIndex: 0, explanation: '9 × 7 = 63 is the closest multiple of 9 without exceeding 67. 67 − 63 = 4, so 67 ÷ 9 = 7 r 4. (6 r 13 undercounts the quotient, leaving an invalid remainder bigger than the divisor; 7 r 5 is a subtraction slip; 8 r 5 overshoots since 9 × 8 = 72 is already more than 67.)' },

        // Block 3 — Long Division (8-11, Medium)
        { difficulty: 'Medium', question: 'Calculate using long division: 76 ÷ 4', checkMode: 'auto', options: ['18', '19', '20', '91'], correctIndex: 1, explanation: '7 ÷ 4 = 1 r 3, bring down 6 → 36. 36 ÷ 4 = 9. So 76 ÷ 4 = 19. (18 and 20 come from a one-off error in the final division step; 91 swaps the digits of the correct answer.)' },
        { difficulty: 'Medium', question: 'A factory produced 434 tins and packed them equally onto 7 pallets. How many tins are on each pallet?', checkMode: 'auto', options: ['60', '64', '62', '26'], correctIndex: 2, explanation: '43 ÷ 7 = 6 r 1, bring down 4 → 14. 14 ÷ 7 = 2. So 434 ÷ 7 = 62 tins per pallet. (60 and 64 come from a one-off slip in the final digit; 26 swaps the digits of the correct answer.)' },
        { difficulty: 'Medium', question: 'Calculate using long division and write your answer in the form quotient r remainder: 287 ÷ 6', checkMode: 'auto', options: ['46 r 11', '47 r 6', '48 r 1', '47 r 5'], correctIndex: 3, explanation: '28 ÷ 6 = 4 r 4, bring down 7 → 47. 47 ÷ 6 = 7 r 5. So 287 ÷ 6 = 47 r 5. (46 r 11 undercounts the quotient, leaving an invalid remainder bigger than the divisor; 47 r 6 is a subtraction slip that leaves the remainder equal to the divisor; 48 r 1 overshoots since 6 × 48 = 288 is already more than 287.)' },
        { difficulty: 'Medium', question: 'A learner used long division and got 462 ÷ 11 = 24. Check the working by multiplying the quotient by the divisor. Is the learner\'s answer correct?', checkMode: 'auto', options: ['42', '24', '41', '43'], correctIndex: 0, explanation: 'Check: 11 × 24 = 264, which does not equal 462, so the learner is wrong (they likely swapped the digits of the answer, writing 24 instead of 42). Correct working: 46 ÷ 11 = 4 r 2, bring down 2 → 22. 22 ÷ 11 = 2 exactly. So 462 ÷ 11 = 42. (41 undercounts the quotient by one; 43 overcounts it by one.)' },

        // Block 4 — Word Problems: Sharing vs Grouping (12-15, Medium)
        { difficulty: 'Medium', question: 'A shopkeeper shares 84 sweets equally among 6 children. Which statement correctly identifies and solves this problem?', checkMode: 'auto', options: ['This is a grouping problem, since we know the group size (6) — 84 ÷ 6 = 14 sweets each.', 'This is a sharing problem, since we know the total (84) and the number of groups (6), so each gets 84 ÷ 6 = 14 sweets.', 'This is a sharing problem, and the answer is 6 sweets each, since 6 is the number of children.', 'This is a grouping problem, and the answer is 6 groups.'], correctIndex: 1, explanation: 'This is a sharing problem: we know the total (84) and the number of groups (6), and must find how many each group receives — 84 ÷ 6 = 14 sweets each. (Option A reaches the right number but mislabels the problem type — grouping would mean the group size is known, not the number of groups. Options C and D confuse the number of children with the final answer.)' },
        { difficulty: 'Medium', question: 'R165 is shared equally among 5 volunteers for travel costs. How much does each volunteer receive? Write only the number without the R symbol.', checkMode: 'auto', options: ['32', '34', '33', '5'], correctIndex: 2, explanation: '165 ÷ 5 = 33. Each volunteer receives R33. (32 and 34 are off-by-one errors in the 5× table; 5 mistakes the number of volunteers for the amount each receives.)' },
        { difficulty: 'Medium', question: 'A farmer plants 117 cabbages in equal rows of 9. Which number sentence correctly represents and solves this problem?', checkMode: 'auto', options: ['117 ÷ 9 = 12', '117 ÷ 9 = 14', '117 × 9 = 13', '117 ÷ 9 = 13'], correctIndex: 3, explanation: 'The correct number sentence is 117 ÷ 9 = 13 rows. (12 and 14 are off-by-one errors in the 9× table; the third option uses the wrong operation entirely.)' },
        { difficulty: 'Medium', question: 'A craft shop received a box of 152 buttons. The owner wants to pack them into small packets, with 8 buttons in each packet, to sell individually. How many packets can be filled?', checkMode: 'auto', options: ['19', '18', '20', '8'], correctIndex: 0, explanation: '152 ÷ 8 = 19 packets. (18 and 20 are off-by-one errors in the 8× table; 8 mistakes the packet size for the number of packets.)' },

        // Block 5 — Multi-Step & Applied Problems (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A market stall earns R270 from selling fruit, shared equally across a 9-hour day. If the stallholder then spends R18 on ice for keeping fruit cool, how much money is left from one hour\'s earnings after buying the ice?', checkMode: 'auto', options: ['30', '12', '48', '13'], correctIndex: 1, explanation: '270 ÷ 9 = 30 earned per hour. 30 − 18 = 12, so R12 is left. (30 forgets to subtract the ice cost at all; 48 mistakenly adds the R18 instead of subtracting it; 13 is a subtraction slip.)' },
        { difficulty: 'Medium-Hard', question: 'A community hall is arranging seating for 130 guests at a wedding. Each table seats 9 guests. Which statement correctly explains the number of tables needed?', checkMode: 'auto', options: ['130 ÷ 9 = 14 r 4, so exactly 14 tables are needed since the remainder is small.', '130 ÷ 9 = 14 r 4, so 14 tables are needed and the 4 extra guests can share existing seats.', '130 ÷ 9 = 14 r 4, so 15 tables are needed because the 4 remaining guests still need seating, even though the table won\'t be full.', '130 ÷ 9 = 15 exactly, so 15 tables are needed with no guests left over.'], correctIndex: 2, explanation: '130 ÷ 9 = 14 r 4. Fourteen tables seat exactly 126 guests, but the 4 guests left over still need seating, so a 15th table is required even though it won\'t be full — you must round up whenever there is a remainder. (Options A and B wrongly stop at the quotient; option D miscalculates the division as exact.)' },

        // Block 6 — Reasoning & Justification (18-19, Hard)
        { difficulty: 'Hard', question: 'Which statement correctly explains why the remainder in a division must always be smaller than the divisor, using the example 26 ÷ 7?', checkMode: 'auto', options: ['The remainder can be equal to the divisor, since that just means one extra group.', 'The remainder can be bigger than the divisor, as long as the quotient is correct.', '26 ÷ 7 = 2 r 12, since 7 × 2 = 14 and 26 − 14 = 12.', '26 ÷ 7 = 3 r 5, since 7 × 3 = 21 and 26 − 21 = 5, and 5 is smaller than 7.'], correctIndex: 3, explanation: 'If the remainder were equal to or greater than the divisor, another full group could still be made, so the division was not finished. For 26 ÷ 7: 7 × 3 = 21, and 26 − 21 = 5, which is smaller than 7, so 3 r 5 is correct. (Options A and B wrongly claim a remainder can equal or exceed the divisor; option C undercounts the quotient, leaving an invalid remainder of 12.)' },
        { difficulty: 'Hard', question: 'Which statement correctly compares 120 ÷ 6 and 120 ÷ 10 without calculating both fully?', checkMode: 'auto', options: ['120 ÷ 6 is bigger, because dividing by a smaller divisor splits the number into fewer, larger groups.', '120 ÷ 10 is bigger, because 10 is a bigger number.', 'They are equal, because both divide the same dividend.', '120 ÷ 10 is bigger, because dividing into more groups always gives a bigger answer.'], correctIndex: 0, explanation: 'When the same number is divided by a smaller divisor, it is split into fewer, larger groups, so the answer is bigger. Since 6 is smaller than 10, 120 ÷ 6 gives a bigger answer than 120 ÷ 10 (20 versus 12), without needing to calculate both fully. (Options B and D wrongly link a bigger divisor, or more groups, to a bigger answer; option C wrongly assumes equal divisors give equal answers.)' },

        // Block 7 — Comparing Amounts: For Every and Per (20-22, Easy-Medium)
        { difficulty: 'Easy', question: 'For every 4 pencils in a pack, there are 5 pens in a matching pack. If there are 20 pencils, how many pens are there?', checkMode: 'auto', options: ['21', '25', '16', '5'], correctIndex: 1, explanation: '20 pencils is 20 ÷ 4 = 5 times as many as 4. Apply the same scale factor to the pens: 5 × 5 = 25. (21 comes from adding the difference between 20 and 4 to the pen count instead of scaling; 16 comes from mixing up which number is the pencil count in the ratio; 5 just repeats the ratio\'s pen number without scaling at all.)' },
        { difficulty: 'Medium', question: 'A cyclist rides 84 km in 4 hours at a steady speed. How far does she ride in 7 hours?', checkMode: 'auto', options: ['126', '168', '147', '21'], correctIndex: 2, explanation: 'Rate per hour: 84 ÷ 4 = 21 km per hour. In 7 hours: 21 × 7 = 147 km. (126 comes from an incorrect scaling of the rate; 168 comes from using 8 hours instead of 7; 21 stops at the rate for 1 hour and forgets to scale up.)' },
        { difficulty: 'Medium', question: 'A juice recipe uses 3 parts water for every 2 parts concentrate. Zanele has 10 parts of concentrate and wants to make juice, keeping the same pattern. Which statement correctly finds how much water she needs?', checkMode: 'auto', options: ['The scale factor is 10 ÷ 3 = 3.33, so she needs 2 × 3.33 ≈ 7 parts.', 'Since Zanele has 10 parts concentrate, she simply needs 10 parts water too.', 'She needs 2 × 10 = 20 parts water, since water is always double the concentrate.', 'The scale factor is 10 ÷ 2 = 5, so she needs 3 × 5 = 15 parts water.'], correctIndex: 3, explanation: 'The scale factor is 10 ÷ 2 = 5, since Zanele has 5 times as much concentrate as the base amount of 2. Apply the same scale factor to the water: 3 × 5 = 15 parts. (Option A divides by the wrong number entirely; option B ignores the ratio and just copies the concentrate amount; option C wrongly assumes a fixed doubling relationship instead of using the actual 3:2 ratio.)' },
      ],
      scoreMessages: [
        { minScore: 23, message: 'Outstanding! You have a strong grasp of division facts, remainders, long division, word problems and comparing amounts.' },
        { minScore: 17, message: 'Great work! You are confident with most division skills — review any missed questions.' },
        { minScore: 11, message: 'Good effort! Revisit the worked examples and try this set again.' },
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
        { difficulty: 'Easy', question: 'Calculate: 63 ÷ 9', checkMode: 'auto', options: ['6', '8', '7', '9'], correctIndex: 2, explanation: '9 × 7 = 63, so 63 ÷ 9 = 7. (6 and 8 are off-by-one errors in the 9× table; 9 mistakes the divisor itself for the answer.)' },
        { difficulty: 'Easy', question: 'A teacher shares 40 counters equally among 8 pairs of learners. How many counters does each pair get?', checkMode: 'auto', options: ['4', '6', '8', '5'], correctIndex: 3, explanation: '40 ÷ 8 = 5. Each pair gets 5 counters. (4 and 6 are off-by-one errors in the 8× table; 8 mistakes the divisor for the number of counters each pair gets.)' },
        { difficulty: 'Easy', question: 'A learner says the missing number in 6 × ___ = 42 is 8. Which statement is correct?', checkMode: 'auto', options: ['The missing number is 7, since 6 × 7 = 42, so 42 ÷ 6 = 7.', 'The learner is correct — the missing number is 8.', 'The missing number is 7, but 42 ÷ 6 = 8.', 'The missing number is 6, since 6 × 6 = 36 is close to 42.'], correctIndex: 0, explanation: 'The learner is wrong: 6 × 8 = 48, not 42. The correct missing number is 7, since 6 × 7 = 42. This also means 42 ÷ 6 = 7. (Option C gets the missing number right but then states an inconsistent quotient; option D picks a number that doesn\'t actually make the multiplication true.)' },
        { difficulty: 'Easy', question: 'Use the fact family for 3 × 9 = 27 to write the two related division facts.', checkMode: 'auto', options: ['27 ÷ 9 = 4 and 27 ÷ 3 = 8', '27 ÷ 9 = 3 and 27 ÷ 3 = 9', '27 ÷ 6 = 4 and 27 ÷ 3 = 9', '27 ÷ 9 = 9 and 27 ÷ 3 = 3'], correctIndex: 1, explanation: 'From 3 × 9 = 27, the two division facts are 27 ÷ 9 = 3 and 27 ÷ 3 = 9. (Option A miscalculates both quotients; option C invents a divisor (6) that isn\'t part of this fact family; option D wrongly makes each quotient equal to its own divisor.)' },

        // Block 2 — Remainders (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Calculate and write your answer in the form quotient r remainder: 37 ÷ 8', checkMode: 'auto', options: ['3 r 13', '4 r 4', '4 r 5', '5 r 3'], correctIndex: 2, explanation: '8 × 4 = 32 is the closest multiple of 8 without exceeding 37. 37 − 32 = 5, so 37 ÷ 8 = 4 r 5. (3 r 13 undercounts the quotient, leaving an invalid remainder bigger than the divisor; 4 r 4 is a subtraction slip; 5 r 3 overshoots since 8 × 5 = 40 is already more than 37.)' },
        { difficulty: 'Easy-Medium', question: 'Palesa has 51 sweets and wants to pack them into party bags of 7 sweets each. How many full bags can she pack, and how many sweets are left over?', checkMode: 'auto', options: ['6 r 9', '7 r 1', '8 r 5', '7 r 2'], correctIndex: 3, explanation: '7 × 7 = 49 is the closest multiple of 7 without exceeding 51. 51 − 49 = 2, so 51 ÷ 7 = 7 r 2. (6 r 9 undercounts the quotient, leaving an invalid remainder bigger than the divisor; 7 r 1 is a subtraction slip; 8 r 5 overshoots since 7 × 8 = 56 is already more than 51.)' },
        { difficulty: 'Medium', question: 'A learner wrote: "27 ÷ 4 = 5 r 7". Is this correct?', checkMode: 'auto', options: ['6 r 3', '5 r 7', '5 r 3', '6 r 1'], correctIndex: 0, explanation: 'The learner is wrong: a remainder of 7 cannot happen when dividing by 4, since 7 is bigger than 4. Correctly, 4 × 6 = 24 and 27 − 24 = 3, so 27 ÷ 4 = 6 r 3. (5 r 7 repeats the learner\'s invalid claim; 5 r 3 undercounts the quotient by one; 6 r 1 is a subtraction slip.)' },
        { difficulty: 'Medium', question: 'A tank holds 71 litres, poured out into containers of 9 litres each. How many full containers are there, and how many litres are left over?', checkMode: 'auto', options: ['6 r 17', '7 r 8', '8 r 1', '7 r 7'], correctIndex: 1, explanation: '9 × 7 = 63 is the closest multiple of 9 without exceeding 71. 71 − 63 = 8, so 71 ÷ 9 = 7 r 8. (6 r 17 undercounts the quotient, leaving an invalid remainder bigger than the divisor; 8 r 1 overshoots since 9 × 8 = 72 is already more than 71; 7 r 7 is a subtraction slip.)' },

        // Block 3 — Long Division (8-11, Medium)
        { difficulty: 'Medium', question: 'Calculate using long division: 98 ÷ 7', checkMode: 'auto', options: ['13', '15', '14', '41'], correctIndex: 2, explanation: '9 ÷ 7 = 1 r 2, bring down 8 → 28. 28 ÷ 7 = 4. So 98 ÷ 7 = 14. (13 and 15 come from a one-off error in the final division step; 41 swaps the digits of the correct answer.)' },
        { difficulty: 'Medium', question: 'A printer produced 512 pamphlets and bundled them equally into 8 boxes. How many pamphlets are in each box?', checkMode: 'auto', options: ['62', '66', '46', '64'], correctIndex: 3, explanation: '51 ÷ 8 = 6 r 3, bring down 2 → 32. 32 ÷ 8 = 4. So 512 ÷ 8 = 64 pamphlets per box. (62 and 66 come from a one-off slip in the final digit; 46 swaps the digits of the correct answer.)' },
        { difficulty: 'Medium', question: 'Calculate using long division and write your answer in the form quotient r remainder: 293 ÷ 8', checkMode: 'auto', options: ['36 r 5', '35 r 13', '36 r 4', '37 r 3'], correctIndex: 0, explanation: '29 ÷ 8 = 3 r 5, bring down 3 → 53. 53 ÷ 8 = 6 r 5. So 293 ÷ 8 = 36 r 5. (35 r 13 undercounts the quotient, leaving an invalid remainder bigger than the divisor; 36 r 4 is a subtraction slip; 37 r 3 overshoots since 8 × 37 = 296 is already more than 293.)' },
        { difficulty: 'Medium', question: 'A learner used long division and got 429 ÷ 12 = 34 r 21. Which statement correctly checks this and gives the right answer?', checkMode: 'auto', options: ['The remainder is valid, so 34 r 21 is correct as written.', 'The remainder is invalid since 21 > 12; the correct answer is 35 r 9.', 'The remainder is invalid; the correct answer is 34 r 9.', 'The remainder is invalid; the correct answer is 36 r 9.'], correctIndex: 1, explanation: 'The learner is wrong: a remainder of 21 cannot be correct when dividing by 12, since 21 is bigger than 12 — another whole group of 12 still fits inside it. Correct working: 42 ÷ 12 = 3 r 6, bring down 9 → 69. 69 ÷ 12 = 5 r 9. So 429 ÷ 12 = 35 r 9. (Option C undercounts the quotient by one; option D overcounts it by one.)' },

        // Block 4 — Word Problems: Sharing vs Grouping (12-15, Medium)
        { difficulty: 'Medium', question: 'A caterer has 108 cupcakes to arrange into trays, with 9 cupcakes fitting on each tray. Which statement correctly identifies and solves this problem?', checkMode: 'auto', options: ['This is a sharing problem, since we know the total (108) — 108 ÷ 9 = 12 trays.', 'This is a grouping problem, and the answer is 9 trays, since 9 is the tray capacity.', 'This is a grouping problem, since we know the group size (9) and must find how many groups fit — 108 ÷ 9 = 12 trays.', 'This is a sharing problem, and the answer is 9 cupcakes per tray.'], correctIndex: 2, explanation: 'This is a grouping problem: we know the total (108) and the size of each group (9), and must find how many groups fit — 108 ÷ 9 = 12 trays. (Option A reaches the right number but mislabels the problem type — sharing would mean the number of groups is known, not the group size. Options B and D confuse the tray capacity with the final answer.)' },
        { difficulty: 'Medium', question: 'R141 in ticket sales is shared equally among 3 charities. How much does each charity receive? Write only the number without the R symbol.', checkMode: 'auto', options: ['46', '48', '3', '47'], correctIndex: 3, explanation: '141 ÷ 3 = 47. Each charity receives R47. (46 and 48 are off-by-one errors in the 3× table; 3 mistakes the number of charities for the amount each receives.)' },
        { difficulty: 'Medium', question: 'A learner arranges 78 desks in equal rows of 6. Which number sentence correctly represents and solves this problem?', checkMode: 'auto', options: ['78 ÷ 6 = 13', '78 ÷ 6 = 12', '78 ÷ 6 = 14', '78 × 6 = 13'], correctIndex: 0, explanation: 'The correct number sentence is 78 ÷ 6 = 13 rows. (12 and 14 are off-by-one errors in the 6× table; the last option uses the wrong operation entirely.)' },
        { difficulty: 'Medium', question: 'A stationery shop received a box of 164 crayons. The owner wants to pack them into small tubs, with 4 crayons in each tub, to sell individually. How many tubs can be filled?', checkMode: 'auto', options: ['40', '41', '42', '4'], correctIndex: 1, explanation: '164 ÷ 4 = 41 tubs. (40 and 42 are off-by-one errors in the 4× table; 4 mistakes the tub size for the number of tubs.)' },

        // Block 5 — Multi-Step & Applied Problems (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A car wash earns R288 from washing cars, shared equally across an 8-hour shift. If the owner then spends R11 on soap for the next shift, how much money is left from one hour\'s earnings after buying the soap?', checkMode: 'auto', options: ['36', '47', '25', '24'], correctIndex: 2, explanation: '288 ÷ 8 = 36 earned per hour. 36 − 11 = 25, so R25 is left. (36 forgets to subtract the soap cost at all; 47 mistakenly adds the R11 instead of subtracting it; 24 is a subtraction slip.)' },
        { difficulty: 'Medium-Hard', question: 'A church is arranging transport for 85 members to a conference. Each bus holds 9 members. Which statement correctly explains the number of buses needed?', checkMode: 'auto', options: ['85 ÷ 9 = 9 r 4, so exactly 9 buses are needed since the remainder is small.', '85 ÷ 9 = 9 r 4, so 9 buses are needed and the 4 extra members can stand in the aisle.', '85 ÷ 9 = 10 exactly, so 10 buses are needed with no members left over.', '85 ÷ 9 = 9 r 4, so 10 buses are needed because the 4 remaining members still need transport, even though the bus won\'t be full.'], correctIndex: 3, explanation: '85 ÷ 9 = 9 r 4. Nine buses seat exactly 81 members, but the 4 members left over still need transport, so a 10th bus is required even though it won\'t be full — you must round up whenever there is a remainder. (Options A and B wrongly stop at the quotient; option C miscalculates the division as exact.)' },

        // Block 6 — Reasoning & Justification (18-19, Hard)
        { difficulty: 'Hard', question: 'Which statement correctly explains the difference between a sharing division problem and a grouping division problem, using 32 marbles as an example?', checkMode: 'auto', options: ['Sharing: 4 friends get 8 marbles each from 32. Grouping: 32 marbles packed into bags of 8 makes 4 bags.', 'Sharing: 32 marbles packed into bags of 8 makes 4 bags. Grouping: 4 friends get 8 marbles each from 32.', 'Sharing and grouping always give different final numbers, even from the same total and divisor.', 'Sharing means you know the group size; grouping means you know the number of groups.'], correctIndex: 0, explanation: 'In a sharing problem, you know the total and the number of groups, and you find how many items go in each group — sharing 32 marbles among 4 friends means each friend gets 32 ÷ 4 = 8 marbles. In a grouping problem, you know the total and the size of each group, and you find how many groups you can make — packing 32 marbles into bags of 8 means you can make 32 ÷ 8 = 4 bags. (Option B swaps the two labels; option C is wrong since both give valid divisions of the same numbers; option D swaps the two definitions.)' },
        { difficulty: 'Hard', question: 'Which statement correctly compares 144 ÷ 3 and 144 ÷ 9 without calculating both fully?', checkMode: 'auto', options: ['144 ÷ 9 is bigger, because 9 is a bigger number.', '144 ÷ 3 is bigger, because dividing by a smaller divisor splits the number into fewer, larger groups.', 'They are equal, because both divide the same dividend.', '144 ÷ 9 is bigger, because dividing into more groups always gives a bigger answer.'], correctIndex: 1, explanation: 'When the same number is divided by a smaller divisor, it is split into fewer, larger groups, so the answer is bigger. Since 3 is smaller than 9, 144 ÷ 3 gives a bigger answer than 144 ÷ 9 (48 versus 16), without needing to calculate both fully. (Options A and D wrongly link a bigger divisor, or more groups, to a bigger answer; option C wrongly assumes equal divisors give equal answers.)' },

        // Block 7 — Comparing Amounts: For Every and Per (20-22, Easy-Medium)
        { difficulty: 'Easy', question: 'For every 5 goals a soccer team scores, they concede 2 goals. If they scored 25 goals this season, how many goals did they concede, following the same pattern?', checkMode: 'auto', options: ['22', '4', '10', '2'], correctIndex: 2, explanation: '25 goals is 25 ÷ 5 = 5 times as many as 5. Apply the same scale factor to the goals conceded: 2 × 5 = 10. (22 comes from adding the difference between 25 and 5 to the conceded count instead of scaling; 4 comes from mixing up which number is the base in the ratio; 2 just repeats the ratio\'s conceded number without scaling at all.)' },
        { difficulty: 'Medium', question: 'A tractor ploughs 36 hectares in 4 hours at a steady rate. How many hectares does it plough in 9 hours?', checkMode: 'auto', options: ['72', '90', '9', '81'], correctIndex: 3, explanation: 'Rate per hour: 36 ÷ 4 = 9 hectares per hour. In 9 hours: 9 × 9 = 81 hectares. (72 comes from an incorrect scaling of the rate; 90 comes from using 10 hours instead of 9; 9 stops at the rate for 1 hour and forgets to scale up.)' },
        { difficulty: 'Medium', question: 'A paint mix uses 2 tins of blue for every 5 tins of white. A painter has 8 tins of blue and wants to keep the same pattern. Which statement correctly finds how much white he needs?', checkMode: 'auto', options: ['The scale factor is 8 ÷ 2 = 4, so he needs 5 × 4 = 20 tins of white.', 'The scale factor is 8 ÷ 5 = 1.6, so he needs 2 × 1.6 ≈ 3 tins.', 'Since he has 8 tins of blue, he simply needs 8 tins of white too.', 'He needs 5 × 8 = 40 tins of white, since white is always five times the blue.'], correctIndex: 0, explanation: 'The scale factor is 8 ÷ 2 = 4, since the painter has 4 times as much blue as the base amount of 2. Apply the same scale factor to the white: 5 × 4 = 20 tins. (Option B divides by the wrong number entirely; option C ignores the ratio and just copies the blue amount; option D wrongly assumes a fixed multiplying relationship instead of using the actual 2:5 ratio.)' },
      ],
      scoreMessages: [
        { minScore: 23, message: 'Outstanding! You have a strong grasp of division facts, remainders, long division, word problems and comparing amounts.' },
        { minScore: 17, message: 'Great work! You are confident with most division skills — review any missed questions.' },
        { minScore: 11, message: 'Good effort! Revisit the worked examples and try this set again.' },
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
        'Share 20 sweets equally among 4 friends. How many sweets does each friend get?\n\n' +
        'Which number sentence correctly represents and solves this problem?',
      options: ['20 ÷ 4 = 5', '20 ÷ 5 = 4', '20 × 4 = 80', '4 ÷ 20 = 0.2'],
      correctIndex: 0,
      explanation:
        'This is a sharing problem — share 20 equally into 4 groups: 20 ÷ 4 = 5. Each friend gets 5 sweets.\n' +
        '(20 ÷ 5 = 4 swaps the total and the number of groups; 20 × 4 = 80 uses the wrong operation; 4 ÷ 20 = 0.2 divides in the wrong order.)',
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
      checkMode: 'auto',
      question:
        'A school has 48 chairs to arrange equally in 6 classrooms. How many chairs go in each classroom?\n\n' +
        'Which statement correctly identifies the problem type and gives the correct answer?',
      options: [
        'This is a grouping problem, since we know the total (48) — each classroom gets 48 ÷ 6 = 8 chairs.',
        'This is a sharing problem: you know the total (48 chairs) and the number of groups (6 classrooms), and find how many are in each group — 48 ÷ 6 = 8 chairs.',
        'This is a sharing problem, and the answer is 6 chairs each, since 6 is the number of classrooms.',
        'This is a grouping problem, and the answer is 6 groups of chairs.',
      ],
      correctIndex: 1,
      explanation:
        'This is a sharing problem: you know the total (48 chairs) and the number of groups (6 classrooms), and you find how many are in each group. Working: 48 ÷ 6 = 8. Each classroom gets 8 chairs.\n' +
        '(Option A reaches the right number but mislabels the problem type; options C and D confuse the number of classrooms with the final answer.)',
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
      checkMode: 'auto',
      question:
        'The answer to a division is 8. One of the numbers in the problem is 64. Which statement correctly finds the other number and the fact family?',
      options: [
        'The other number is 56, since 64 − 8 = 56.',
        'The other number is 512, since 64 × 8 = 512.',
        'The other number is also 8, since 64 ÷ 8 = 8. Fact family: 8 × 8 = 64 and 64 ÷ 8 = 8.',
        'The other number is 4, since 64 ÷ 8 = 4.',
      ],
      correctIndex: 2,
      explanation:
        'The other number is also 8, since 64 ÷ 8 = 8. Complete fact family: 8 × 8 = 64 and 64 ÷ 8 = 8. Because both factors are the same (8 is a perfect square), there is only one unique division fact in this family.\n' +
        '(Option A subtracts instead of dividing; option B multiplies instead of dividing; option D miscalculates 64 ÷ 8.)',
    },

    // ── SECTION 3 — Dividing with Remainders ─────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Calculate 19 ÷ 4 and write the full answer including the remainder, in the form: quotient r remainder.',
      options: ['3 r 7', '4 r 4', '5 r 1', '4 r 3'],
      correctIndex: 3,
      explanation:
        '4 × 4 = 16 is the closest multiple of 4 without exceeding 19. 19 − 16 = 3, so 19 ÷ 4 = 4 r 3.\n' +
        '(3 r 7 undercounts the quotient, leaving an invalid remainder bigger than the divisor; 4 r 4 is a subtraction slip that leaves the remainder equal to the divisor; 5 r 1 overshoots since 4 × 5 = 20 is already more than 19.)',
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
      checkMode: 'auto',
      question:
        'A teacher has 35 stickers to give equally to 8 learners.\n\n' +
        'Which statement correctly gives the quotient, remainder, and a sensible use for the leftover stickers?',
      options: [
        'Each learner gets 4 stickers, 3 are left over, and the teacher could save them for next time or offer them as a small prize.',
        'Each learner gets 5 stickers, with none left over.',
        'Each learner gets 4 stickers, and the leftover 3 must be thrown away since they can\'t be shared equally.',
        'Each learner gets 3 stickers, with 11 left over.',
      ],
      correctIndex: 0,
      explanation:
        '35 ÷ 8: 8 × 4 = 32 is the closest multiple without exceeding 35, so 35 − 32 = 3 are left over. Each learner gets 4 stickers, with 3 remaining — the teacher could keep them for next time, use them as a prize, or give extra stickers to 3 lucky learners.\n' +
        '(Option B overshoots the quotient since 8 × 5 = 40 is already more than 35; option C wrongly assumes leftovers must be discarded; option D undercounts the quotient, leaving an invalid remainder.)',
    },

    // ── SECTION 4 — Long Division ─────────────────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Calculate 84 ÷ 4 using long division.',
      options: ['20', '21', '22', '12'],
      correctIndex: 1,
      explanation:
        '84 ÷ 4 using long division: divide 8 ÷ 4 = 2, multiply 2 × 4 = 8, subtract 8 − 8 = 0, bring down 4; divide 4 ÷ 4 = 1, multiply 1 × 4 = 4, subtract 4 − 4 = 0. So 84 ÷ 4 = 21.\n' +
        '(20 and 22 come from a one-off error in the final division step; 12 swaps the digits of the correct answer.)',
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
      checkMode: 'auto',
      question:
        'A school collects 168 books to share equally among 7 classrooms. How many books does each classroom get? Use long division.',
      options: ['23', '25', '24', '42'],
      correctIndex: 2,
      explanation:
        '16 ÷ 7 = 2 r 2, bring down 8 → 28. 28 ÷ 7 = 4. So 168 ÷ 7 = 24. Each classroom gets 24 books.\n' +
        '(23 and 25 come from a one-off error in the final division step; 42 swaps the digits of the correct answer.)',
    },

    // ── SECTION 5 — Division Word Problems ───────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'A bakery bakes 72 cookies and packs them into boxes of 8. How many boxes do they fill?',
      options: ['8', '10', '72', '9'],
      correctIndex: 3,
      explanation:
        'This is a grouping problem — how many groups of 8 fit into 72? 8 × 9 = 72, so 72 ÷ 8 = 9. The bakery fills 9 boxes.\n' +
        '(8 and 10 are off-by-one errors in the 8× table; 72 wrongly repeats the total instead of dividing.)',
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

    // ── SECTION 6 — Comparing Amounts: "For Every" and "Per" Problems ────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'For every 3 apples in a basket, there are 2 oranges. If there are 15 apples, how many oranges are there?',
      options: ['10', '14', '6', '2'],
      correctIndex: 0,
      explanation:
        'The scale factor is 15 ÷ 3 = 5. Apply the same scale factor to the oranges: 2 × 5 = 10.\n' +
        '(14 comes from adding the difference between 15 and 3 to the orange count instead of scaling; 6 comes from multiplying by the wrong number (3 instead of 5); 2 just repeats the ratio\'s orange number without scaling at all.)',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'A car travels 180 km in 3 hours at a steady speed.\n\n' +
        'a) What is the rate — how far does it travel in 1 hour?\n' +
        'b) How far will it travel in 5 hours?',
      answer: 'a) 60 km  b) 300 km',
      parts: [
        {
          label: 'a) Distance in 1 hour',
          correctAnswer: '60',
          explanation: 'Divide the distance by the time: 180 ÷ 3 = 60 km per hour.',
        },
        {
          label: 'b) Distance in 5 hours',
          correctAnswer: '300',
          explanation: 'Multiply the rate for 1 hour by 5: 60 × 5 = 300 km.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A caterer\'s pancake batter recipe uses 2 cups of milk for every 3 cups of flour. She needs to make a big batch using 15 cups of flour, keeping the same pattern. Which statement correctly finds how much milk is needed?',
      options: [
        'The scale factor is 15 ÷ 2 = 7.5, so she needs 3 × 7.5 = 22.5 cups.',
        'The scale factor is 15 ÷ 3 = 5, so she needs 2 × 5 = 10 cups of milk.',
        'Since she is using 15 cups of flour, she needs 15 cups of milk too.',
        'She needs 3 × 15 = 45 cups of milk, since flour is always less than milk.',
      ],
      correctIndex: 1,
      explanation:
        'Scale factor: 15 ÷ 3 = 5, since there is 5 times as much flour as the base amount of 3 cups. Apply the same scale factor to the milk: 2 × 5 = 10 cups.\n' +
        '(Option A divides by the wrong number entirely; option C ignores the ratio and just copies the flour amount; option D applies a nonsensical relationship instead of the actual 2:3 ratio.)',
    },
  ],
}
