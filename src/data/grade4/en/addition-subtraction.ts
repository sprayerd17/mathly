import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Addition and Subtraction',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS ADDITION?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-addition',
      title: 'What is Addition?',
      icon: '➕',
      explanation:
        `<p style="margin-bottom:14px"><strong>Addition</strong> means combining two or more numbers together to find the <strong>total</strong>. The answer you get when you add is called the <strong>sum</strong>. Adding always makes the number bigger.</p>` +

        `<p style="margin-bottom:8px"><strong>Three real-life examples:</strong></p>` +
        `<ul style="margin-left:20px;margin-bottom:16px;line-height:2.2">` +
        `<li>You have <strong>1 245</strong> stickers and your friend gives you <strong>312</strong> more. How many do you have <strong>altogether</strong>? → 1 245 + 312 = 1 557</li>` +
        `<li>A school library has <strong>2 430</strong> books and buys <strong>1 250</strong> new books. How many books are there <strong>in all</strong>? → 2 430 + 1 250 = 3 680</li>` +
        `<li>A farmer picks <strong>3 120</strong> oranges on Monday and <strong>1 405</strong> on Tuesday. What is the <strong>total</strong> number of oranges? → 3 120 + 1 405 = 4 525</li>` +
        `</ul>` +

        `<p style="margin-bottom:8px"><strong>Key words that tell you to add in a word problem:</strong></p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px">` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">altogether</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">total</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">sum</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">more than</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">increase</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">in all</span>` +
        `</div>` +

        `<p style="margin-bottom:8px"><strong>Column addition — always line up the digits:</strong></p>` +
        `<p style="margin-bottom:12px">Before you add, write the numbers one under the other. Make sure <strong>units</strong> are under <strong>units</strong>, <strong>tens</strong> under <strong>tens</strong>, <strong>hundreds</strong> under <strong>hundreds</strong>, and <strong>thousands</strong> under <strong>thousands</strong>. Then add one column at a time, starting from the units.</p>` +
        `<div style="display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">` +
        `<table style="border-collapse:collapse;font-size:0.95em;text-align:center">` +
        `<tbody><tr>` +
        `<td style="padding:8px 20px;font-weight:700;color:#dc2626;border-right:1px solid #e5e7eb">Thousands (Th)</td>` +
        `<td style="padding:8px 20px;font-weight:700;color:#d97706;border-right:1px solid #e5e7eb">Hundreds (H)</td>` +
        `<td style="padding:8px 20px;font-weight:700;color:#16a34a;border-right:1px solid #e5e7eb">Tens (T)</td>` +
        `<td style="padding:8px 20px;font-weight:700;color:#2563eb">Units (U)</td>` +
        `</tr></tbody></table></div>`,

      workedExamples: [
        // ── WORKED EXAMPLE 1 (no carrying) ──────────────────────────────────
        {
          question: 'Calculate 2 345 + 1 423',
          answer:
            '<span style="color:#dc2626;font-weight:700">3</span> ' +
            '<span style="color:#d97706;font-weight:700">7</span>' +
            '<span style="color:#16a34a;font-weight:700">6</span>' +
            '<span style="color:#2563eb;font-weight:700">8</span>',
          steps: [
            'Write the numbers in columns — units under units, tens under tens, hundreds under hundreds, thousands under thousands:' +
            '<div style="margin-top:12px;display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">' +
            '<table style="border-collapse:collapse;font-size:0.95em;text-align:center;min-width:220px">' +
            '<thead><tr style="background:#f8fafc">' +
            '<th style="padding:7px 20px;font-weight:700;color:#dc2626;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">Th</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#d97706;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">H</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#16a34a;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">T</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#2563eb;border-bottom:1px solid #e5e7eb">U</th>' +
            '</tr></thead>' +
            '<tbody>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb">2</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb">3</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb">4</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700">5</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">+ 1</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">4</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">2</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700;border-top:1px solid #e5e7eb">3</td>' +
            '</tr>' +
            '</tbody></table></div>',

            'Add the <span style="color:#2563eb;font-weight:700">units</span>: <span style="color:#2563eb;font-weight:700">5</span> + <span style="color:#2563eb;font-weight:700">3</span> = <span style="color:#2563eb;font-weight:700">8</span>. Write <span style="color:#2563eb;font-weight:700">8</span> in the units column.',

            'Add the <span style="color:#16a34a;font-weight:700">tens</span>: <span style="color:#16a34a;font-weight:700">4</span> + <span style="color:#16a34a;font-weight:700">2</span> = <span style="color:#16a34a;font-weight:700">6</span>. Write <span style="color:#16a34a;font-weight:700">6</span> in the tens column.',

            'Add the <span style="color:#d97706;font-weight:700">hundreds</span>: <span style="color:#d97706;font-weight:700">3</span> + <span style="color:#d97706;font-weight:700">4</span> = <span style="color:#d97706;font-weight:700">7</span>. Write <span style="color:#d97706;font-weight:700">7</span> in the hundreds column.',

            'Add the <span style="color:#dc2626;font-weight:700">thousands</span>: <span style="color:#dc2626;font-weight:700">2</span> + <span style="color:#dc2626;font-weight:700">1</span> = <span style="color:#dc2626;font-weight:700">3</span>. Write <span style="color:#dc2626;font-weight:700">3</span> in the thousands column.',
          ],
        },

        // ── WORKED EXAMPLE 2 (with carrying) ────────────────────────────────
        {
          question: 'Calculate 1 867 + 1 345 (with carrying)',
          answer:
            '<span style="color:#dc2626;font-weight:700">3</span> ' +
            '<span style="color:#d97706;font-weight:700">2</span>' +
            '<span style="color:#16a34a;font-weight:700">1</span>' +
            '<span style="color:#2563eb;font-weight:700">2</span>',
          steps: [
            'Add the <span style="color:#2563eb;font-weight:700">units</span>: <span style="color:#2563eb;font-weight:700">7</span> + <span style="color:#2563eb;font-weight:700">5</span> = <span style="color:#2563eb;font-weight:700">12</span>. This is bigger than 9, so we cannot fit two digits in one column. Write <span style="color:#2563eb;font-weight:700">2</span> in the units column and carry <span style="color:#ea580c;font-weight:700">1</span> to the top of the tens column.',

            'Add the <span style="color:#16a34a;font-weight:700">tens</span>: <span style="color:#16a34a;font-weight:700">6</span> + <span style="color:#16a34a;font-weight:700">4</span> + <span style="color:#ea580c;font-weight:700">1</span> (carried) = <span style="color:#16a34a;font-weight:700">11</span>. Write <span style="color:#16a34a;font-weight:700">1</span> in the tens column and carry <span style="color:#ea580c;font-weight:700">1</span> to the top of the hundreds column.',

            'Add the <span style="color:#d97706;font-weight:700">hundreds</span>: <span style="color:#d97706;font-weight:700">8</span> + <span style="color:#d97706;font-weight:700">3</span> + <span style="color:#ea580c;font-weight:700">1</span> (carried) = <span style="color:#d97706;font-weight:700">12</span>. Write <span style="color:#d97706;font-weight:700">2</span> in the hundreds column and carry <span style="color:#ea580c;font-weight:700">1</span> to the top of the thousands column.',

            'Add the <span style="color:#dc2626;font-weight:700">thousands</span>: <span style="color:#dc2626;font-weight:700">1</span> + <span style="color:#dc2626;font-weight:700">1</span> + <span style="color:#ea580c;font-weight:700">1</span> (carried) = <span style="color:#dc2626;font-weight:700">3</span>. Write <span style="color:#dc2626;font-weight:700">3</span> in the thousands column.',

            '<div style="padding:14px 18px;border:2px dashed #cbd5e1;border-radius:10px;background:#f8fafc;color:#64748b;font-size:0.85em;font-style:italic">📊 Diagram placeholder: Column addition layout showing 1 867 + 1 345 with carried digits shown above each column in orange</div>',
          ],
        },
      ],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — WHAT IS SUBTRACTION?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-subtraction',
      title: 'What is Subtraction?',
      icon: '➖',
      explanation:
        `<p style="margin-bottom:14px"><strong>Subtraction</strong> means taking one number away from another to find the <strong>difference</strong>. The answer you get when you subtract is called the <strong>difference</strong>. Subtracting always makes the number smaller.</p>` +

        `<p style="margin-bottom:8px"><strong>Three real-life examples:</strong></p>` +
        `<ul style="margin-left:20px;margin-bottom:16px;line-height:2.2">` +
        `<li>You have <strong>R3 450</strong> and you spend <strong>R1 230</strong>. How much money do you have <strong>left</strong>? → 3 450 − 1 230 = 2 220</li>` +
        `<li>A school has <strong>1 865</strong> learners. <strong>342</strong> learners go on a trip. How many learners are <strong>still at school</strong>? → 1 865 − 342 = 1 523</li>` +
        `<li>A factory makes <strong>4 500</strong> bottles. <strong>1 250</strong> are sold. What is the <strong>difference</strong> between the number made and the number sold? → 4 500 − 1 250 = 3 250</li>` +
        `</ul>` +

        `<p style="margin-bottom:8px"><strong>Key words that tell you to subtract in a word problem:</strong></p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px">` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">difference</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">less than</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">take away</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">minus</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">decrease</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">how many more</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">how many left</span>` +
        `</div>` +

        `<p style="margin-bottom:8px"><strong>Column subtraction — always line up the digits:</strong></p>` +
        `<p style="margin-bottom:12px">Write the bigger number on top and the smaller number below it, lining up the columns carefully. Subtract one column at a time, starting from the <strong>units</strong>. If the top digit is smaller than the bottom digit, you need to <strong>borrow</strong> from the column on the left.</p>` +
        `<div style="display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">` +
        `<table style="border-collapse:collapse;font-size:0.95em;text-align:center">` +
        `<tbody><tr>` +
        `<td style="padding:8px 20px;font-weight:700;color:#dc2626;border-right:1px solid #e5e7eb">Thousands (Th)</td>` +
        `<td style="padding:8px 20px;font-weight:700;color:#d97706;border-right:1px solid #e5e7eb">Hundreds (H)</td>` +
        `<td style="padding:8px 20px;font-weight:700;color:#16a34a;border-right:1px solid #e5e7eb">Tens (T)</td>` +
        `<td style="padding:8px 20px;font-weight:700;color:#2563eb">Units (U)</td>` +
        `</tr></tbody></table></div>`,

      workedExamples: [
        // ── WORKED EXAMPLE 3 (no borrowing) ─────────────────────────────────
        {
          question: 'Calculate 4 768 − 2 345',
          answer:
            '<span style="color:#dc2626;font-weight:700">2</span> ' +
            '<span style="color:#d97706;font-weight:700">4</span>' +
            '<span style="color:#16a34a;font-weight:700">2</span>' +
            '<span style="color:#2563eb;font-weight:700">3</span>',
          steps: [
            'Write the numbers in columns — units under units, tens under tens, hundreds under hundreds, thousands under thousands:' +
            '<div style="margin-top:12px;display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">' +
            '<table style="border-collapse:collapse;font-size:0.95em;text-align:center;min-width:220px">' +
            '<thead><tr style="background:#f8fafc">' +
            '<th style="padding:7px 20px;font-weight:700;color:#dc2626;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">Th</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#d97706;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">H</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#16a34a;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">T</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#2563eb;border-bottom:1px solid #e5e7eb">U</th>' +
            '</tr></thead>' +
            '<tbody>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb">4</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb">7</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb">6</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700">8</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">− 2</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">3</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">4</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700;border-top:1px solid #e5e7eb">5</td>' +
            '</tr>' +
            '</tbody></table></div>',

            'Subtract the <span style="color:#2563eb;font-weight:700">units</span>: <span style="color:#2563eb;font-weight:700">8</span> − <span style="color:#2563eb;font-weight:700">5</span> = <span style="color:#2563eb;font-weight:700">3</span>. Write <span style="color:#2563eb;font-weight:700">3</span> in the units column.',

            'Subtract the <span style="color:#16a34a;font-weight:700">tens</span>: <span style="color:#16a34a;font-weight:700">6</span> − <span style="color:#16a34a;font-weight:700">4</span> = <span style="color:#16a34a;font-weight:700">2</span>. Write <span style="color:#16a34a;font-weight:700">2</span> in the tens column.',

            'Subtract the <span style="color:#d97706;font-weight:700">hundreds</span>: <span style="color:#d97706;font-weight:700">7</span> − <span style="color:#d97706;font-weight:700">3</span> = <span style="color:#d97706;font-weight:700">4</span>. Write <span style="color:#d97706;font-weight:700">4</span> in the hundreds column.',

            'Subtract the <span style="color:#dc2626;font-weight:700">thousands</span>: <span style="color:#dc2626;font-weight:700">4</span> − <span style="color:#dc2626;font-weight:700">2</span> = <span style="color:#dc2626;font-weight:700">2</span>. Write <span style="color:#dc2626;font-weight:700">2</span> in the thousands column.',
          ],
        },

        // ── WORKED EXAMPLE 4 (with borrowing) ───────────────────────────────
        {
          question: 'Calculate 5 304 − 1 867 (with borrowing)',
          answer:
            '<span style="color:#dc2626;font-weight:700">3</span> ' +
            '<span style="color:#d97706;font-weight:700">4</span>' +
            '<span style="color:#16a34a;font-weight:700">3</span>' +
            '<span style="color:#2563eb;font-weight:700">7</span>',
          steps: [
            'Look at the <span style="color:#2563eb;font-weight:700">units</span>: <span style="color:#2563eb;font-weight:700">4</span> − <span style="color:#2563eb;font-weight:700">7</span>. We cannot take 7 away from 4 because 4 is smaller. We need to <strong>borrow</strong>.',

            'Look at the <span style="color:#16a34a;font-weight:700">tens</span> digit: it is <span style="color:#16a34a;font-weight:700">0</span>. We cannot borrow from 0. We must move one column further left to the <span style="color:#d97706;font-weight:700">hundreds</span>.',

            'Borrow <span style="color:#ea580c;font-weight:700">1</span> from the <span style="color:#d97706;font-weight:700">hundreds</span>: the hundreds digit <span style="color:#d97706;font-weight:700">3</span> becomes <span style="color:#ea580c;font-weight:700">2</span>. The <span style="color:#16a34a;font-weight:700">tens</span> column receives the borrowed hundred and becomes <span style="color:#ea580c;font-weight:700">10</span>.',

            'Now borrow <span style="color:#ea580c;font-weight:700">1</span> from the <span style="color:#16a34a;font-weight:700">tens</span>: the tens value <span style="color:#ea580c;font-weight:700">10</span> becomes <span style="color:#ea580c;font-weight:700">9</span>. The <span style="color:#2563eb;font-weight:700">units</span> column receives the borrowed ten: <span style="color:#2563eb;font-weight:700">4</span> becomes <span style="color:#ea580c;font-weight:700">14</span>.',

            'Subtract the <span style="color:#2563eb;font-weight:700">units</span>: <span style="color:#ea580c;font-weight:700">14</span> − <span style="color:#2563eb;font-weight:700">7</span> = <span style="color:#2563eb;font-weight:700">7</span>. Write <span style="color:#2563eb;font-weight:700">7</span> in the units column.',

            'Subtract the <span style="color:#16a34a;font-weight:700">tens</span>: <span style="color:#ea580c;font-weight:700">9</span> − <span style="color:#16a34a;font-weight:700">6</span> = <span style="color:#16a34a;font-weight:700">3</span>. Write <span style="color:#16a34a;font-weight:700">3</span> in the tens column.',

            'Look at the <span style="color:#d97706;font-weight:700">hundreds</span>: <span style="color:#ea580c;font-weight:700">2</span> − <span style="color:#d97706;font-weight:700">8</span>. We cannot take 8 away from 2 because 2 is smaller. We need to <strong>borrow</strong> from the <span style="color:#dc2626;font-weight:700">thousands</span> column.',

            'Borrow <span style="color:#ea580c;font-weight:700">1</span> from the <span style="color:#dc2626;font-weight:700">thousands</span>: the thousands digit <span style="color:#dc2626;font-weight:700">5</span> becomes <span style="color:#ea580c;font-weight:700">4</span>. The <span style="color:#d97706;font-weight:700">hundreds</span> column receives the borrowed thousand: <span style="color:#ea580c;font-weight:700">2</span> becomes <span style="color:#ea580c;font-weight:700">12</span>.',

            'Subtract the <span style="color:#d97706;font-weight:700">hundreds</span>: <span style="color:#ea580c;font-weight:700">12</span> − <span style="color:#d97706;font-weight:700">8</span> = <span style="color:#d97706;font-weight:700">4</span>. Write <span style="color:#d97706;font-weight:700">4</span> in the hundreds column.',

            'Subtract the <span style="color:#dc2626;font-weight:700">thousands</span>: <span style="color:#ea580c;font-weight:700">4</span> − <span style="color:#dc2626;font-weight:700">1</span> = <span style="color:#dc2626;font-weight:700">3</span>. Write <span style="color:#dc2626;font-weight:700">3</span> in the thousands column.',

            '<div style="padding:14px 18px;border:2px dashed #cbd5e1;border-radius:10px;background:#f8fafc;color:#64748b;font-size:0.85em;font-style:italic">📊 Diagram placeholder: Column subtraction layout showing 5 304 − 1 867 with borrowing shown clearly above each column in orange</div>',
          ],
        },
      ],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ESTIMATING BEFORE YOU CALCULATE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating',
      title: 'Estimating Before You Calculate',
      icon: '🎯',
      explanation:
        `<p style="margin-bottom:14px"><strong>Estimating</strong> means finding an <strong>approximate answer</strong> — a close but not exact answer — <em>before</em> you do the real calculation. A good estimate helps you check whether your final answer is reasonable. If your actual answer is very different from your estimate, you have probably made a mistake somewhere and should check your working.</p>` +

        `<p style="margin-bottom:8px"><strong>Three steps to estimate:</strong></p>` +
        `<ol style="margin-left:20px;margin-bottom:16px;line-height:2.2">` +
        `<li><strong>Step 1:</strong> Round each number to the nearest <span style="color:#d97706;font-weight:700">100</span>.</li>` +
        `<li><strong>Step 2:</strong> Add or subtract the rounded numbers to get your <strong>estimate</strong>.</li>` +
        `<li><strong>Step 3:</strong> Compare your estimate to your actual answer — they should be close to each other.</li>` +
        `</ol>` +

        `<p style="margin-bottom:0">Remember: an estimate does not need to be exact — it just needs to be <strong>close</strong>. A difference of a few tens between your estimate and your actual answer is perfectly fine.</p>`,

      workedExamples: [
        {
          question: 'Estimate 3 456 + 2 234, then compare your estimate to the actual answer',
          answer: 'Estimate: 5 700 · Actual: 5 690 · These are close, so the answer makes sense ✓',
          steps: [
            'Round <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">6</span> to the nearest <span style="color:#d97706;font-weight:700">100</span>: look at the <span style="color:#16a34a;font-weight:700">tens digit</span> — it is <span style="color:#16a34a;font-weight:700">5</span>. Because 5 ≥ 5 we round <strong>up</strong>. The <span style="color:#d97706;font-weight:700">hundreds digit</span> <span style="color:#d97706;font-weight:700">4</span> becomes <span style="color:#d97706;font-weight:700">5</span>, and the tens and units become 0. Rounded value: <strong>3 500</strong>.',

            'Round <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">2</span><span style="color:#16a34a;font-weight:700">3</span><span style="color:#2563eb;font-weight:700">4</span> to the nearest <span style="color:#d97706;font-weight:700">100</span>: look at the <span style="color:#16a34a;font-weight:700">tens digit</span> — it is <span style="color:#16a34a;font-weight:700">3</span>. Because 3 &lt; 5 we round <strong>down</strong>. The <span style="color:#d97706;font-weight:700">hundreds digit</span> <span style="color:#d97706;font-weight:700">2</span> stays the same, and the tens and units become 0. Rounded value: <strong>2 200</strong>.',

            'Calculate the estimate using the rounded numbers: <strong>3 500 + 2 200 = 5 700</strong>.',

            'Calculate the actual answer: 3 456 + 2 234 = <strong>5 690</strong>.',

            'Compare: 5 690 is very close to 5 700 — the difference is only 10. The answer makes sense. ✓',
          ],
        },
      ],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — CHECKING ANSWERS USING INVERSE OPERATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'inverse-operations',
      title: 'Checking Answers Using Inverse Operations',
      icon: '🔄',
      explanation:
        `<p style="margin-bottom:14px">Addition and subtraction are <strong>opposite operations</strong> — they <em>undo</em> each other. This is called the <strong>inverse operation</strong>. You can use this to check whether your answer is correct after you have finished a calculation.</p>` +

        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">` +
        `<div style="background:#f0fdf4;border:1px solid #86efac;border-radius:10px;padding:12px 16px">` +
        `<p style="margin:0;font-weight:600;color:#14532d">If you <strong>added</strong> → use subtraction to check</p>` +
        `<p style="margin:4px 0 0 0;font-size:0.9em;color:#14532d">Example: 300 + 200 = 500 → check: 500 − 200 = 300 ✓</p>` +
        `</div>` +
        `<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px">` +
        `<p style="margin:0;font-weight:600;color:#1e40af">If you <strong>subtracted</strong> → use addition to check</p>` +
        `<p style="margin:4px 0 0 0;font-size:0.9em;color:#1e40af">Example: 800 − 300 = 500 → check: 500 + 300 = 800 ✓</p>` +
        `</div>` +
        `</div>` +

        `<p style="margin-bottom:0">If the inverse check gives you back your <strong>original starting number</strong>, your answer is correct. If it does not, there is a mistake somewhere — go back and find it.</p>`,

      workedExamples: [
        // ── WORKED EXAMPLE 6 ────────────────────────────────────────────────
        {
          question: 'Calculate 2 456 + 1 323 = 3 779. Check using the inverse operation.',
          answer: 'Check: 3 779 − 1 323 = 2 456 ✓ The answer is correct.',
          steps: [
            'We calculated: <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">6</span> + <span style="color:#dc2626;font-weight:700">1</span> <span style="color:#d97706;font-weight:700">3</span><span style="color:#16a34a;font-weight:700">2</span><span style="color:#2563eb;font-weight:700">3</span> = <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">7</span><span style="color:#16a34a;font-weight:700">7</span><span style="color:#2563eb;font-weight:700">9</span>.',

            'We used <strong>addition</strong>, so we use <strong>subtraction</strong> to check. Take the answer and subtract one of the numbers we added: <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">7</span><span style="color:#16a34a;font-weight:700">7</span><span style="color:#2563eb;font-weight:700">9</span> − <span style="color:#dc2626;font-weight:700">1</span> <span style="color:#d97706;font-weight:700">3</span><span style="color:#16a34a;font-weight:700">2</span><span style="color:#2563eb;font-weight:700">3</span> = ?',

            'Subtract: 3 779 − 1 323 = <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">6</span>.',

            'We get back <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">6</span> — our original starting number. The answer <strong>3 779 is correct</strong>. ✓',
          ],
        },

        // ── WORKED EXAMPLE 7 ────────────────────────────────────────────────
        {
          question: 'Calculate 4 850 − 2 340 = 2 510. Check using the inverse operation.',
          answer: 'Check: 2 510 + 2 340 = 4 850 ✓ The answer is correct.',
          steps: [
            'We calculated: <span style="color:#dc2626;font-weight:700">4</span> <span style="color:#d97706;font-weight:700">8</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span> − <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">3</span><span style="color:#16a34a;font-weight:700">4</span><span style="color:#2563eb;font-weight:700">0</span> = <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">5</span><span style="color:#16a34a;font-weight:700">1</span><span style="color:#2563eb;font-weight:700">0</span>.',

            'We used <strong>subtraction</strong>, so we use <strong>addition</strong> to check. Take the answer and add back the number we subtracted: <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">5</span><span style="color:#16a34a;font-weight:700">1</span><span style="color:#2563eb;font-weight:700">0</span> + <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">3</span><span style="color:#16a34a;font-weight:700">4</span><span style="color:#2563eb;font-weight:700">0</span> = ?',

            'Add: 2 510 + 2 340 = <span style="color:#dc2626;font-weight:700">4</span> <span style="color:#d97706;font-weight:700">8</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span>.',

            'We get back <span style="color:#dc2626;font-weight:700">4</span> <span style="color:#d97706;font-weight:700">8</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span> — our original starting number. The answer <strong>2 510 is correct</strong>. ✓',
          ],
        },
      ],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — MENTAL MATHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mental-maths',
      title: 'Mental Maths — Adding and Subtracting Multiples of 10 and 100',
      icon: '🧠',
      explanation:
        `<p style="margin-bottom:14px"><strong>Mental calculation</strong> means working out an answer in your head without writing anything down. You can do this quickly when you are adding or subtracting <strong>multiples of 10</strong> (like 20, 40, 70) or <strong>multiples of 100</strong> (like 200, 300, 600).</p>` +

        `<p style="margin-bottom:8px"><strong>The key strategy — only one digit changes at a time:</strong></p>` +
        `<ul style="margin-left:20px;margin-bottom:16px;line-height:2.2">` +
        `<li>Adding or subtracting a <strong>multiple of 100</strong> → only the <span style="color:#d97706;font-weight:700">hundreds digit</span> changes. The thousands, tens and units digits stay the same.</li>` +
        `<li>Adding or subtracting a <strong>multiple of 10</strong> → only the <span style="color:#16a34a;font-weight:700">tens digit</span> changes. The thousands, hundreds and units digits stay the same.</li>` +
        `</ul>` +

        `<p style="margin-bottom:0">This works smoothly when there is no carrying or borrowing needed. Look at the examples below and notice which single digit changes in each calculation.</p>`,

      workedExamples: [
        {
          question: 'Work out these six calculations mentally — notice which digit changes each time',
          answer:
            '<span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">6</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span>' +
            ' &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">1</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span>' +
            ' &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">9</span><span style="color:#2563eb;font-weight:700">0</span>' +
            ' &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:700">5</span> <span style="color:#d97706;font-weight:700">7</span><span style="color:#16a34a;font-weight:700">0</span><span style="color:#2563eb;font-weight:700">0</span>' +
            ' &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:700">8</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">6</span><span style="color:#2563eb;font-weight:700">0</span>' +
            ' &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">1</span><span style="color:#16a34a;font-weight:700">9</span><span style="color:#2563eb;font-weight:700">0</span>',
          steps: [
            '<span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span> + 200 = <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">6</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span>. &nbsp;Adding 200 only changes the <span style="color:#d97706;font-weight:700">hundreds digit</span>: <span style="color:#d97706;font-weight:700">4</span> + 2 = <span style="color:#d97706;font-weight:700">6</span>. The thousands, tens and units stay the same.',

            '<span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span> − 300 = <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">1</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span>. &nbsp;Subtracting 300 only changes the <span style="color:#d97706;font-weight:700">hundreds digit</span>: <span style="color:#d97706;font-weight:700">4</span> − 3 = <span style="color:#d97706;font-weight:700">1</span>. The thousands, tens and units stay the same.',

            '<span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span> + 40 = <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">9</span><span style="color:#2563eb;font-weight:700">0</span>. &nbsp;Adding 40 only changes the <span style="color:#16a34a;font-weight:700">tens digit</span>: <span style="color:#16a34a;font-weight:700">5</span> + 4 = <span style="color:#16a34a;font-weight:700">9</span>. The thousands, hundreds and units stay the same.',

            '<span style="color:#dc2626;font-weight:700">5</span> <span style="color:#d97706;font-weight:700">3</span><span style="color:#16a34a;font-weight:700">0</span><span style="color:#2563eb;font-weight:700">0</span> + 400 = <span style="color:#dc2626;font-weight:700">5</span> <span style="color:#d97706;font-weight:700">7</span><span style="color:#16a34a;font-weight:700">0</span><span style="color:#2563eb;font-weight:700">0</span>. &nbsp;Adding 400 only changes the <span style="color:#d97706;font-weight:700">hundreds digit</span>: <span style="color:#d97706;font-weight:700">3</span> + 4 = <span style="color:#d97706;font-weight:700">7</span>. The thousands, tens and units stay the same.',

            '<span style="color:#dc2626;font-weight:700">8</span> <span style="color:#d97706;font-weight:700">7</span><span style="color:#16a34a;font-weight:700">6</span><span style="color:#2563eb;font-weight:700">0</span> − 300 = <span style="color:#dc2626;font-weight:700">8</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">6</span><span style="color:#2563eb;font-weight:700">0</span>. &nbsp;Subtracting 300 only changes the <span style="color:#d97706;font-weight:700">hundreds digit</span>: <span style="color:#d97706;font-weight:700">7</span> − 3 = <span style="color:#d97706;font-weight:700">4</span>. The thousands, tens and units stay the same.',

            '<span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">1</span><span style="color:#16a34a;font-weight:700">4</span><span style="color:#2563eb;font-weight:700">0</span> + 50 = <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">1</span><span style="color:#16a34a;font-weight:700">9</span><span style="color:#2563eb;font-weight:700">0</span>. &nbsp;Adding 50 only changes the <span style="color:#16a34a;font-weight:700">tens digit</span>: <span style="color:#16a34a;font-weight:700">4</span> + 5 = <span style="color:#16a34a;font-weight:700">9</span>. The thousands, hundreds and units stay the same.',
          ],
        },
      ],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — MONEY WORD PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'money-word-problems',
      title: 'Money Word Problems',
      icon: '💰',
      explanation:
        `<p style="margin-bottom:14px">Money problems use exactly the same <strong>addition and subtraction</strong> skills you have already learned — the only difference is that the numbers represent <strong>rand (R)</strong> and <strong>cents (c)</strong>.</p>` +

        `<div style="background:#fefce8;border:1px solid #fde047;border-radius:10px;padding:12px 16px;margin-bottom:16px">` +
        `<p style="margin:0;font-weight:600;color:#713f12">Important to remember: <strong>100 cents = 1 rand</strong></p>` +
        `<p style="margin:4px 0 0 0;font-size:0.9em;color:#713f12">R3,50 means 3 rand and 50 cents. In Grade 4 most money problems use whole rand amounts so you can treat them like ordinary 4-digit numbers.</p>` +
        `</div>` +

        `<p style="margin-bottom:8px"><strong>How to solve a money word problem:</strong></p>` +
        `<ol style="margin-left:20px;margin-bottom:16px;line-height:2.2">` +
        `<li><strong>Step 1:</strong> Read the problem carefully and find the key word — it tells you whether to add or subtract.</li>` +
        `<li><strong>Step 2:</strong> Write the calculation with the amounts lined up in columns.</li>` +
        `<li><strong>Step 3:</strong> Solve using column addition or subtraction, then write your answer with the <strong>R</strong> symbol.</li>` +
        `</ol>` +

        `<p style="margin-bottom:8px"><strong>Key words — addition:</strong> &nbsp;` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-weight:600;font-size:0.9em">altogether</span>&nbsp;` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-weight:600;font-size:0.9em">total</span>&nbsp;` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-weight:600;font-size:0.9em">in all</span>` +
        `</p>` +
        `<p style="margin-bottom:0"><strong>Key words — subtraction:</strong> &nbsp;` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-weight:600;font-size:0.9em">how much more</span>&nbsp;` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-weight:600;font-size:0.9em">how much left</span>&nbsp;` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-weight:600;font-size:0.9em">difference</span>` +
        `</p>`,

      workedExamples: [
        // ── WORKED EXAMPLE 9 ────────────────────────────────────────────────
        {
          question: 'Thabo has R2 450 in his savings. He earns R1 375 doing chores. How much does he have altogether?',
          answer: '<strong>R3 825</strong>',
          steps: [
            'The key word is <strong>"altogether"</strong> — this tells us to <strong>add</strong>. We need to calculate R2 450 + R1 375.',

            'Write the numbers in columns — units under units, tens under tens, hundreds under hundreds, thousands under thousands:' +
            '<div style="margin-top:12px;display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">' +
            '<table style="border-collapse:collapse;font-size:0.95em;text-align:center;min-width:220px">' +
            '<thead><tr style="background:#f8fafc">' +
            '<th style="padding:7px 20px;font-weight:700;color:#dc2626;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">Th</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#d97706;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">H</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#16a34a;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">T</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#2563eb;border-bottom:1px solid #e5e7eb">U</th>' +
            '</tr></thead>' +
            '<tbody>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb">2</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb">4</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb">5</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700">0</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">+ 1</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">3</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">7</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700;border-top:1px solid #e5e7eb">5</td>' +
            '</tr>' +
            '</tbody></table></div>',

            'Add the <span style="color:#2563eb;font-weight:700">units</span>: <span style="color:#2563eb;font-weight:700">0</span> + <span style="color:#2563eb;font-weight:700">5</span> = <span style="color:#2563eb;font-weight:700">5</span>. Write <span style="color:#2563eb;font-weight:700">5</span> in the units column.',

            'Add the <span style="color:#16a34a;font-weight:700">tens</span>: <span style="color:#16a34a;font-weight:700">5</span> + <span style="color:#16a34a;font-weight:700">7</span> = <span style="color:#16a34a;font-weight:700">12</span>. Write <span style="color:#16a34a;font-weight:700">2</span> in the tens column and carry <span style="color:#ea580c;font-weight:700">1</span> to the hundreds column.',

            'Add the <span style="color:#d97706;font-weight:700">hundreds</span>: <span style="color:#d97706;font-weight:700">4</span> + <span style="color:#d97706;font-weight:700">3</span> + <span style="color:#ea580c;font-weight:700">1</span> (carried) = <span style="color:#d97706;font-weight:700">8</span>. Write <span style="color:#d97706;font-weight:700">8</span> in the hundreds column.',

            'Add the <span style="color:#dc2626;font-weight:700">thousands</span>: <span style="color:#dc2626;font-weight:700">2</span> + <span style="color:#dc2626;font-weight:700">1</span> = <span style="color:#dc2626;font-weight:700">3</span>. Write <span style="color:#dc2626;font-weight:700">3</span> in the thousands column.',

            'Write the answer with the rand symbol: Thabo has <strong>R3 825</strong> altogether.',
          ],
        },

        // ── WORKED EXAMPLE 10 ───────────────────────────────────────────────
        {
          question: 'A bicycle costs R3 999. Lerato has R2 650. How much more money does she need?',
          answer: '<strong>R1 349</strong>',
          steps: [
            'The key words are <strong>"how much more"</strong> — this tells us to <strong>subtract</strong>. We need to find the difference: R3 999 − R2 650.',

            'Write the numbers in columns — units under units, tens under tens, hundreds under hundreds, thousands under thousands:' +
            '<div style="margin-top:12px;display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">' +
            '<table style="border-collapse:collapse;font-size:0.95em;text-align:center;min-width:220px">' +
            '<thead><tr style="background:#f8fafc">' +
            '<th style="padding:7px 20px;font-weight:700;color:#dc2626;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">Th</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#d97706;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">H</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#16a34a;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">T</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#2563eb;border-bottom:1px solid #e5e7eb">U</th>' +
            '</tr></thead>' +
            '<tbody>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb">3</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb">9</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb">9</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700">9</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">− 2</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">6</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">5</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700;border-top:1px solid #e5e7eb">0</td>' +
            '</tr>' +
            '</tbody></table></div>',

            'Subtract the <span style="color:#2563eb;font-weight:700">units</span>: <span style="color:#2563eb;font-weight:700">9</span> − <span style="color:#2563eb;font-weight:700">0</span> = <span style="color:#2563eb;font-weight:700">9</span>. Write <span style="color:#2563eb;font-weight:700">9</span> in the units column.',

            'Subtract the <span style="color:#16a34a;font-weight:700">tens</span>: <span style="color:#16a34a;font-weight:700">9</span> − <span style="color:#16a34a;font-weight:700">5</span> = <span style="color:#16a34a;font-weight:700">4</span>. Write <span style="color:#16a34a;font-weight:700">4</span> in the tens column.',

            'Subtract the <span style="color:#d97706;font-weight:700">hundreds</span>: <span style="color:#d97706;font-weight:700">9</span> − <span style="color:#d97706;font-weight:700">6</span> = <span style="color:#d97706;font-weight:700">3</span>. Write <span style="color:#d97706;font-weight:700">3</span> in the hundreds column.',

            'Subtract the <span style="color:#dc2626;font-weight:700">thousands</span>: <span style="color:#dc2626;font-weight:700">3</span> − <span style="color:#dc2626;font-weight:700">2</span> = <span style="color:#dc2626;font-weight:700">1</span>. Write <span style="color:#dc2626;font-weight:700">1</span> in the thousands column.',

            'Write the answer with the rand symbol: Lerato still needs <strong>R1 349</strong> to buy the bicycle.',
          ],
        },
      ],
      openQuestions: [],
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — CURATED 20-QUESTION SET (Blocks A–F)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block A — Column Addition & Subtraction Fluency (0-3)
        { difficulty: 'Easy', question: 'Calculate: 3 245 + 2 431', checkMode: 'auto', options: ['5 676', '5 667', '5 686', '5 677'], correctIndex: 0, explanation: 'Units: 5+1=6\nTens: 4+3=7\nHundreds: 2+4=6\nThousands: 3+2=5\nAnswer: 5 676 ✓ (5 667 swaps the last two digits, 5 686 and 5 677 come from a slip in one column.)' },
        { difficulty: 'Easy', question: 'Calculate: 1 867 + 1 345 (with carrying)', checkMode: 'auto', options: ['2 102', '3 212', '3 221', '3 222'], correctIndex: 1, explanation: 'Units: 7+5=12, write 2 carry 1\nTens: 6+4+1=11, write 1 carry 1\nHundreds: 8+3+1=12, write 2 carry 1\nThousands: 1+1+1=3\nAnswer: 3 212 ✓ (2 102 forgets to carry in every column; 3 221 and 3 222 swap or shift a digit.)' },
        { difficulty: 'Medium', question: 'Calculate: 5 304 − 1 867 (borrowing needed)', checkMode: 'auto', options: ['4 563', '3 473', '3 437', '3 447'], correctIndex: 2, explanation: 'Units: 4−7, borrow → 14−7=7\nTens: 9−6=3 (after borrow)\nHundreds: 2−8, borrow → 12−8=4\nThousands: 4−1=3\nAnswer: 3 437 ✓ (4 563 subtracts the smaller digit from the larger one in each column instead of borrowing; 3 473 and 3 447 come from a digit slip.)' },
        { difficulty: 'Medium', question: 'Calculate: 8 000 − 3 456 (cascading borrow through two zeros)', checkMode: 'auto', options: ['5 456', '4 454', '4 554', '4 544'], correctIndex: 3, explanation: 'Units: 0−6, cascading borrow through tens & hundreds → 10−6=4\nTens: 9−5=4\nHundreds: 9−4=5\nThousands: 7−3=4\nAnswer: 4 544 ✓ (5 456 ignores the borrow and subtracts the smaller digit from the larger one; 4 454 and 4 554 come from a digit slip.)' },

        // Block B — Estimating & Checking (4-7)
        { difficulty: 'Easy', question: 'Estimate 3 456 + 2 234 by rounding each number to the nearest hundred.', checkMode: 'auto', options: ['5 700', '5 690', '5 600', '5 800'], correctIndex: 0, explanation: '3 456 → 3 500\n2 234 → 2 200\nEstimate: 3 500 + 2 200 = 5 700 ✓ (5 690 is the exact answer, not the estimate; 5 600 rounds 3 456 down to 3 400 by mistake; 5 800 rounds 2 234 up to 2 300 by mistake.)' },
        { difficulty: 'Medium', question: 'Estimate 4 872 − 1 439 by rounding each number to the nearest hundred.', checkMode: 'auto', options: ['3 433', '3 500', '3 400', '3 430'], correctIndex: 1, explanation: '4 872 → 4 900\n1 439 → 1 400\nEstimate: 4 900 − 1 400 = 3 500 ✓ (3 433 is the exact answer, not the estimate; 3 400 rounds 4 872 down to 4 800 by mistake; 3 430 rounds both numbers to the nearest ten instead of the nearest hundred.)' },
        { difficulty: 'Medium', question: 'Calculate 4 850 − 2 340 = 2 510. Use addition to check this answer. What number should you get back?', checkMode: 'auto', options: ['4 805', '2 340', '4 850', '4 860'], correctIndex: 2, explanation: 'Check: 2 510 + 2 340 = 4 850 — this matches the original number, so the subtraction is correct ✓ (4 805 and 4 860 come from a slip while re-adding; 2 340 is just one of the numbers used in the check, not the sum.)' },
        { difficulty: 'Medium', question: "Sipho calculated 5 304 − 1 867 = 3 537. Which statement correctly evaluates his answer using the inverse operation?", checkMode: 'auto', options: ['Sipho is correct — the check confirms 3 537 + 1 867 = 5 304.', 'Sipho is incorrect — the correct answer is 3 473.', 'Sipho is incorrect — the correct answer is 3 447.', 'Sipho is incorrect — checking gives 3 537 + 1 867 = 5 404, not 5 304, so the correct answer is 3 437.'], correctIndex: 3, explanation: 'Check: 3 537 + 1 867 = 5 404, not 5 304, so Sipho is incorrect. The correct answer is 3 437 (since 3 437 + 1 867 = 5 304). (3 473 and 3 447 are plausible slips, not what the check actually shows.)' },

        // Block C — Mental Maths Strategies (8-10)
        { difficulty: 'Medium', question: 'Calculate mentally: 3 450 + 300', checkMode: 'auto', options: ['3 750', '3 705', '3 760', '3 453'], correctIndex: 0, explanation: 'Adding 300 only changes the hundreds digit: 4+3=7\nAnswer: 3 750 ✓ (3 705 swaps the last two digits, 3 760 shifts a digit, 3 453 comes from misreading 300 as 3 and adding it to the units.)' },
        { difficulty: 'Medium', question: 'Calculate mentally: 6 120 − 60 (this needs a mental regroup — the tens digit is too small)', checkMode: 'auto', options: ['6 140', '6 060', '6 006', '6 070'], correctIndex: 1, explanation: '2 tens − 6 tens needs borrowing from hundreds: 12 tens − 6 tens = 6 tens.\nAnswer: 6 060 ✓ (6 140 subtracts the smaller digit from the larger one instead of regrouping; 6 006 and 6 070 come from a digit slip.)' },
        { difficulty: 'Medium', question: 'Calculate mentally: 5 240 + 800. Which answer is correct, and why does more than one digit change this time?', checkMode: 'auto', options: ['5 340 — only the hundreds digit changes, from 2 to 0, because 2+8=10.', '6 140 — 800 was added to the tens digit by mistake.', '6 040 — because 2 hundreds + 8 hundreds = 10 hundreds, which is too many for the hundreds column, so the extra hundred rolls over into the thousands digit as well.', '5 248 — the 8 from 800 was added to the units digit instead of the hundreds.'], correctIndex: 2, explanation: '2 hundreds + 8 hundreds = 10 hundreds = 1 000, so the hundreds digit becomes 0 and the thousands digit increases by 1: 5 240 + 800 = 6 040 ✓' },

        // Block D — Money Word Problems (11-14)
        { difficulty: 'Easy', question: 'Thabo has R2 450 in savings. He earns R1 375 doing chores. How much does he have altogether?', checkMode: 'auto', options: ['R3 725', 'R3 852', 'R3 835', 'R3 825'], correctIndex: 3, explanation: '"Altogether" means add: R2 450 + R1 375 = R3 825 ✓ (R3 725 forgets to carry in a column; R3 852 and R3 835 come from a digit slip.)' },
        { difficulty: 'Medium', question: 'A shop sells R3 800 worth of goods on Saturday and R2 150 on Sunday. It pays R2 680 in expenses for the weekend. How much profit is left?', checkMode: 'auto', options: ['R3 270', 'R5 950', 'R8 630', 'R1 120'], correctIndex: 0, explanation: 'Total sales: R3 800 + R2 150 = R5 950\nProfit: R5 950 − R2 680 = R3 270 ✓ (R5 950 forgets to subtract the expenses; R8 630 adds the expenses instead of subtracting them; R1 120 only uses Saturday\'s sales.)' },
        { difficulty: 'Medium', question: 'Sipho saved R2 999 last year and R1 876 this year. Amahle saved R3 250 last year and R1 500 this year. Who has more total savings, and by how much?', checkMode: 'auto', options: ['Amahle has more, by R125', 'Sipho has more, by R125', 'Sipho has more, by R152', 'Sipho has more, by R135'], correctIndex: 1, explanation: 'Sipho: R2 999 + R1 876 = R4 875\nAmahle: R3 250 + R1 500 = R4 750\nDifference: R4 875 − R4 750 = R125. Sipho has R125 more than Amahle ✓ (the first option has the direction backwards; R152 and R135 come from a digit slip in the final subtraction.)' },
        { difficulty: 'Medium', question: 'Lerato buys school shoes for R1 349 and a school bag for R875 out of a R5 000 gift from her grandmother. How much money does she have left?', checkMode: 'auto', options: ['R3 651', 'R2 786', 'R2 776', 'R2 767'], correctIndex: 2, explanation: 'Total cost: R1 349 + R875 = R2 224\nRemaining: R5 000 − R2 224 = R2 776 ✓ (R3 651 only subtracts the shoes and forgets the bag; R2 786 and R2 767 come from a digit slip in the final subtraction.)' },

        // Block E — Multi-Step & Combined Word Problems (15-17)
        { difficulty: 'Hard', question: 'A shop has 6 050 loaves of bread. It sells 2 387, then donates 1 200 more to a charity. How many loaves are left?', checkMode: 'auto', options: ['3 663', '4 863', '2 473', '2 463'], correctIndex: 3, explanation: '6 050 − 2 387 = 3 663\n3 663 − 1 200 = 2 463 ✓ (3 663 stops after the first step; 4 863 adds the donation instead of subtracting it; 2 473 comes from a digit slip in the final subtraction.)' },
        { difficulty: 'Hard', question: 'A stadium has 2 345 fans. 1 876 more arrive, then 987 leave early. How many fans remain?', checkMode: 'auto', options: ['3 234', '4 221', '5 208', '3 244'], correctIndex: 0, explanation: '2 345 + 1 876 = 4 221\n4 221 − 987 = 3 234 ✓ (4 221 stops after the first step; 5 208 adds 987 instead of subtracting it; 3 244 comes from a digit slip.)' },
        { difficulty: 'Hard', question: 'A company had 9 999 items in stock. It sold 4 567 items, then received a delivery of 1 233 more. How many items are in stock now?', checkMode: 'auto', options: ['5 432', '6 665', '4 199', '6 675'], correctIndex: 1, explanation: '9 999 − 4 567 = 5 432\n5 432 + 1 233 = 6 665 ✓ (5 432 stops after the first step; 4 199 subtracts the delivery instead of adding it; 6 675 comes from a digit slip.)' },

        // Block F — Reasoning, Justification & Error-Spotting (18-19)
        { difficulty: 'Hard', question: "A learner adds 4 104 + 3 290 by mistake as 4 104 + 3 209 and gets a different answer. Which statement correctly explains the error and finds the difference between the correct and incorrect answers?", checkMode: 'auto', options: ['The learner forgot to carry a digit; correct = 7 394, incorrect = 7 313, difference = 71.', 'The learner transposed the digits of 4 104 instead of 3 290; correct = 7 394, incorrect = 7 313, difference = 91.', 'The learner swapped the tens and units digits of 3 290, turning it into 3 209 (a transposition error). Correct: 4 104 + 3 290 = 7 394. Incorrect: 4 104 + 3 209 = 7 313. The difference is 7 394 − 7 313 = 81.', 'The learner\'s incorrect answer 7 313 is actually the correct one, and 7 394 is wrong.'], correctIndex: 2, explanation: 'The learner swapped the tens and units digits of 3 290 into 3 209. 4 104 + 3 290 = 7 394 and 4 104 + 3 209 = 7 313, so the difference is 81.' },
        { difficulty: 'Hard', question: 'Lerato says that borrowing is only needed when subtracting money amounts, not whole numbers. Which statement is correct?', checkMode: 'auto', options: ['Lerato is correct — money calculations always need borrowing.', 'Lerato is correct, but only for numbers with four digits or more.', 'Lerato is incorrect — whole numbers never need borrowing, only money does.', 'Lerato is incorrect — borrowing is needed whenever a digit in the top number is smaller than the digit below it in the same column, whether the numbers represent money or plain whole numbers.'], correctIndex: 3, explanation: 'Borrowing depends only on comparing digits in each column — it works exactly the same way whether the numbers represent money or plain whole numbers, so Lerato is incorrect.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding — mastered the full range from column methods to multi-step reasoning.' },
        { minScore: 15, message: 'Great work — confident across most skills, review missed questions.' },
        { minScore: 10, message: 'Good effort — revisit worked examples on carrying/borrowing and word problems.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — CURATED 20-QUESTION SET (Blocks A–F)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block A — Column Addition & Subtraction Fluency (0-3)
        { difficulty: 'Easy', question: 'Calculate: 4 123 + 3 456', checkMode: 'auto', options: ['7 579', '7 597', '7 589', '7 578'], correctIndex: 0, explanation: 'Units: 3+6=9\nTens: 2+5=7\nHundreds: 1+4=5\nThousands: 4+3=7\nAnswer: 7 579 ✓ (7 597 swaps the last two digits, 7 589 and 7 578 come from a slip in one column.)' },
        { difficulty: 'Easy', question: 'Calculate: 3 456 + 2 678 (with carrying)', checkMode: 'auto', options: ['5 024', '6 134', '6 143', '6 144'], correctIndex: 1, explanation: 'Units: 6+8=14, write 4 carry 1\nTens: 5+7+1=13, write 3 carry 1\nHundreds: 4+6+1=11, write 1 carry 1\nThousands: 3+2+1=6\nAnswer: 6 134 ✓ (5 024 forgets to carry in every column; 6 143 and 6 144 come from a digit slip.)' },
        { difficulty: 'Medium', question: 'Calculate: 7 302 − 4 568 (borrowing needed)', checkMode: 'auto', options: ['3 266', '2 743', '2 734', '2 744'], correctIndex: 2, explanation: 'Units: 2−8, borrow through tens (0) → 12−8=4\nTens: 9−6=3\nHundreds: 2−5, borrow → 12−5=7\nThousands: 6−4=2\nAnswer: 2 734 ✓ (3 266 subtracts the smaller digit from the larger one in each column instead of borrowing; 2 743 and 2 744 come from a digit slip.)' },
        { difficulty: 'Medium', question: 'Calculate: 7 005 − 2 348 (cascading borrow through two zeros)', checkMode: 'auto', options: ['5 343', '4 675', '4 667', '4 657'], correctIndex: 3, explanation: 'Units: 5−8, cascading borrow through tens & hundreds → 15−8=7\nTens: 9−4=5\nHundreds: 9−3=6\nThousands: 6−2=4\nAnswer: 4 657 ✓ (5 343 ignores the borrow and subtracts the smaller digit from the larger one; 4 675 and 4 667 come from a digit slip.)' },

        // Block B — Estimating & Checking (4-7)
        { difficulty: 'Easy', question: 'Estimate 5 678 + 2 345 by rounding each number to the nearest hundred.', checkMode: 'auto', options: ['8 000', '8 023', '7 900', '8 100'], correctIndex: 0, explanation: '5 678 → 5 700\n2 345 → 2 300\nEstimate: 5 700 + 2 300 = 8 000 ✓ (8 023 is the exact answer, not the estimate; 7 900 rounds 5 678 down to 5 600 by mistake; 8 100 rounds 2 345 up to 2 400 by mistake.)' },
        { difficulty: 'Medium', question: 'Estimate 9 856 − 3 421 by rounding each number to the nearest hundred.', checkMode: 'auto', options: ['6 435', '6 500', '6 400', '6 440'], correctIndex: 1, explanation: '9 856 → 9 900\n3 421 → 3 400\nEstimate: 9 900 − 3 400 = 6 500 ✓ (6 435 is the exact answer, not the estimate; 6 400 rounds 9 856 down to 9 800 by mistake; 6 440 rounds both numbers to the nearest ten instead of the nearest hundred.)' },
        { difficulty: 'Medium', question: 'Calculate 2 345 + 1 323 = 3 668. Use subtraction to check this answer. What number should you get back?', checkMode: 'auto', options: ['2 354', '1 323', '2 345', '2 355'], correctIndex: 2, explanation: 'Check: 3 668 − 1 323 = 2 345 — this matches the original number, so the addition is correct ✓ (2 354 and 2 355 come from a slip while re-subtracting; 1 323 is just one of the numbers used in the check, not the result.)' },
        { difficulty: 'Hard', question: 'A learner calculated 6 412 + 1 543 = 7 945. Which statement correctly evaluates the answer using the inverse operation?', checkMode: 'auto', options: ['The learner is correct — the check confirms 7 945 − 1 543 = 6 412.', 'The learner is incorrect — the correct answer is 7 595.', 'The learner is incorrect — the correct answer is 7 965.', 'The learner is incorrect — checking gives 7 945 − 1 543 = 6 402, not 6 412, so the correct answer is 7 955.'], correctIndex: 3, explanation: 'Check: 7 945 − 1 543 = 6 402, not 6 412, so the learner is incorrect. The correct answer is 7 955 (since 7 955 − 1 543 = 6 412). (7 595 and 7 965 are plausible slips, not what the check actually shows.)' },

        // Block C — Mental Maths Strategies (8-10)
        { difficulty: 'Medium', question: 'Calculate mentally: 8 760 − 300', checkMode: 'auto', options: ['8 460', '8 406', '8 470', '8 730'], correctIndex: 0, explanation: 'Only the hundreds digit changes: 7−3=4\nAnswer: 8 460 ✓ (8 406 swaps the last two digits, 8 470 shifts a digit, 8 730 comes from misreading 300 as 30.)' },
        { difficulty: 'Medium', question: 'Calculate mentally: 3 600 − 800 (this needs a mental regroup — the hundreds digit is too small)', checkMode: 'auto', options: ['3 200', '2 800', '2 080', '2 810'], correctIndex: 1, explanation: '6 hundreds − 8 hundreds needs borrowing from thousands: 3 000 − 800 = 2 800.\nAnswer: 2 800 ✓ (3 200 subtracts the smaller digit from the larger one instead of regrouping; 2 080 and 2 810 come from a digit slip.)' },
        { difficulty: 'Medium', question: 'Calculate mentally: 3 480 + 90. Which answer is correct, and why does more than one digit change this time?', checkMode: 'auto', options: ['3 470 — only the tens digit changes, from 8 to 7, and the carry into hundreds is ignored.', '4 470 — the carried 1 was added to the thousands digit instead of the hundreds.', '3 570 — because 8 tens + 9 tens = 17 tens, which is too many for the tens column, so the extra ten rolls over into the hundreds digit as well.', '3 580 — a slip in the tens column.'], correctIndex: 2, explanation: '8 tens + 9 tens = 17 tens = 170, so the tens digit becomes 7 and the hundreds digit increases by 1: 3 480 + 90 = 3 570 ✓' },

        // Block D — Money Word Problems (11-14)
        { difficulty: 'Easy', question: 'A shop takes R1 899 from a market stall and R2 760 from regular customers in one day. What is its total takings for the day?', checkMode: 'auto', options: ['R3 559', 'R4 695', 'R4 669', 'R4 659'], correctIndex: 3, explanation: '"Total" means add: R1 899 + R2 760 = R4 659 ✓ (R3 559 forgets to carry in a column; R4 695 and R4 669 come from a digit slip.)' },
        { difficulty: 'Medium', question: 'A store had R7 000 in stock value. It sold R3 899 worth of goods, then received new stock worth R1 250. What value of stock does it have now?', checkMode: 'auto', options: ['R4 351', 'R3 101', 'R1 851', 'R6 149'], correctIndex: 0, explanation: 'After selling: R7 000 − R3 899 = R3 101\nAfter new stock: R3 101 + R1 250 = R4 351 ✓ (R3 101 stops after the first step; R1 851 subtracts the new stock instead of adding it; R6 149 starts from a wrong first step.)' },
        { difficulty: 'Medium', question: 'Thabo has saved R4 200. His sister Amahle has saved R3 475. Who has saved more, and by how much?', checkMode: 'auto', options: ['Amahle has more, by R725', 'Thabo has more, by R725', 'Thabo has more, by R1 275', 'Thabo has more, by R752'], correctIndex: 1, explanation: 'R4 200 − R3 475 = R725. Thabo has saved R725 more than Amahle ✓ (the first option has the direction backwards; R1 275 ignores the borrow when subtracting; R752 comes from a digit slip.)' },
        { difficulty: 'Medium', question: 'At a market stall, Lerato buys a scarf for R349 and a hat for R275, paying with a R1 000 note. How much change does she get?', checkMode: 'auto', options: ['R624', 'R486', 'R376', 'R386'], correctIndex: 2, explanation: 'Total cost: R349 + R275 = R624\nChange: R1 000 − R624 = R376 ✓ (R624 is the total cost, not the change; R486 forgets to carry when adding the cost; R386 comes from a digit slip in the final subtraction.)' },

        // Block E — Multi-Step & Combined Word Problems (15-17)
        { difficulty: 'Hard', question: 'A farmer has 5 000 apples. He sells 1 234, then 2 345 more. How many apples does he have left?', checkMode: 'auto', options: ['3 766', '6 111', '1 431', '1 421'], correctIndex: 3, explanation: '5 000 − 1 234 = 3 766\n3 766 − 2 345 = 1 421 ✓ (3 766 stops after the first step; 6 111 adds the second amount instead of subtracting it; 1 431 comes from a digit slip.)' },
        { difficulty: 'Hard', question: 'A school has 3 456 learners. 2 544 more learners join, then 1 000 graduate and leave. How many learners are at the school now?', checkMode: 'auto', options: ['5 000', '6 000', '7 000', '5 010'], correctIndex: 0, explanation: '3 456 + 2 544 = 6 000\n6 000 − 1 000 = 5 000 ✓ (6 000 stops after the first step; 7 000 adds the graduating learners instead of subtracting them; 5 010 comes from a digit slip.)' },
        { difficulty: 'Hard', question: 'A bus company carried 5 670 passengers on Saturday and 2 340 fewer on Sunday. How many passengers did it carry on Sunday, and what was the total for the weekend?', checkMode: 'auto', options: ['Sunday: 3 303; Weekend total: 9 000', 'Sunday: 3 330; Weekend total: 9 000', 'Sunday: 3 330; Weekend total: 8 900', 'Sunday: 3 340; Weekend total: 9 010'], correctIndex: 1, explanation: 'Sunday: 5 670 − 2 340 = 3 330\nWeekend total: 5 670 + 3 330 = 9 000 ✓ (the other options come from a digit slip in one of the two steps.)' },

        // Block F — Reasoning, Justification & Error-Spotting (18-19)
        { difficulty: 'Hard', question: 'A learner says that 4 000 − 3 999 = 1 because "the numbers are so close together". Which statement correctly evaluates this reasoning?', checkMode: 'auto', options: ['The learner is wrong — the correct answer is actually 11, not 1.', 'The learner is wrong — the answer should be 1 001, because each borrow through a zero adds 1 000.', 'The final answer of 1 is correct, but the reasoning is not reliable — it only works here by coincidence. Direct column subtraction with borrowing through every column confirms 4 000 − 3 999 = 1.', 'The learner is right, and "close together" always means the answer is exactly 1, no matter which numbers are used.'], correctIndex: 2, explanation: 'Column subtraction with borrowing through every column confirms 4 000 − 3 999 = 1, so the learner\'s answer is right — but "the numbers are close together" is not a reliable method in general, it just happened to work here.' },
        { difficulty: 'Hard', question: 'When you borrow in column subtraction, why is the "1" you take from the column on the left really worth 10 in the column you borrow it into?', checkMode: 'auto', options: ['Borrowing is always worth exactly 10, no matter which columns are involved, because 10 is a fixed rule.', 'Borrowing 1 from a column gives 2 units in the next column, because it is split in half.', 'Borrowing 1 hundred gives 10 units (ones), skipping the tens column entirely.', 'Each place-value column is 10 times the value of the column to its right, so borrowing 1 from a column gives 10 units in the column immediately to its right — for example, borrowing 1 hundred gives 10 tens, because 1 hundred = 10 tens.'], correctIndex: 3, explanation: 'Place value is based on powers of 10, so every column is worth 10 times the column to its right. Borrowing 1 from a column therefore always gives exactly 10 of the next column down — e.g. 1 hundred = 10 tens, 1 ten = 10 units.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding — mastered the full range from column methods to multi-step reasoning.' },
        { minScore: 15, message: 'Great work — confident across most skills, review missed questions.' },
        { minScore: 10, message: 'Good effort — revisit worked examples on carrying/borrowing and word problems.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — CURATED 20-QUESTION SET (Blocks A–F)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block A — Column Addition & Subtraction Fluency (0-3)
        { difficulty: 'Easy', question: 'Calculate: 5 678 + 1 231', checkMode: 'auto', options: ['6 909', '6 809', '6 990', '6 919'], correctIndex: 0, explanation: 'Units: 8+1=9\nTens: 7+3=10, write 0 carry 1\nHundreds: 6+2+1=9\nThousands: 5+1=6\nAnswer: 6 909 ✓ (6 809 forgets the carry into the hundreds; 6 990 and 6 919 come from a digit slip.)' },
        { difficulty: 'Easy', question: 'Calculate: 4 785 + 1 246 (with carrying)', checkMode: 'auto', options: ['5 921', '6 031', '6 013', '6 041'], correctIndex: 1, explanation: 'Units: 5+6=11, write 1 carry 1\nTens: 8+4+1=13, write 3 carry 1\nHundreds: 7+2+1=10, write 0 carry 1\nThousands: 4+1+1=6\nAnswer: 6 031 ✓ (5 921 forgets to carry in every column; 6 013 and 6 041 come from a digit slip.)' },
        { difficulty: 'Medium', question: 'Calculate: 9 302 − 5 678 (borrowing needed)', checkMode: 'auto', options: ['4 376', '3 642', '3 624', '3 634'], correctIndex: 2, explanation: 'Units: 2−8, borrow → 12−8=4\nTens: 9−7=2 (after borrow)\nHundreds: 2−6, borrow → 12−6=6\nThousands: 8−5=3\nAnswer: 3 624 ✓ (4 376 subtracts the smaller digit from the larger one in each column instead of borrowing; 3 642 and 3 634 come from a digit slip.)' },
        { difficulty: 'Medium', question: 'Calculate: 6 003 − 2 456 (cascading borrow through two zeros)', checkMode: 'auto', options: ['4 453', '3 574', '3 557', '3 547'], correctIndex: 3, explanation: 'Units: 3−6, cascading borrow through tens & hundreds → 13−6=7\nTens: 9−5=4\nHundreds: 9−4=5\nThousands: 5−2=3\nAnswer: 3 547 ✓ (4 453 ignores the borrow and subtracts the smaller digit from the larger one; 3 574 and 3 557 come from a digit slip.)' },

        // Block B — Estimating & Checking (4-7)
        { difficulty: 'Easy', question: 'Estimate 4 321 + 3 789 by rounding each number to the nearest hundred.', checkMode: 'auto', options: ['8 100', '8 110', '8 200', '8 000'], correctIndex: 0, explanation: '4 321 → 4 300\n3 789 → 3 800\nEstimate: 4 300 + 3 800 = 8 100 ✓ (8 110 is the exact answer, not the estimate; 8 200 rounds 4 321 up to 4 400 by mistake; 8 000 rounds 3 789 down to 3 700 by mistake.)' },
        { difficulty: 'Medium', question: 'Estimate 8 500 − 3 271 by rounding each number to the nearest hundred.', checkMode: 'auto', options: ['5 229', '5 200', '5 300', '5 230'], correctIndex: 1, explanation: '8 500 → 8 500\n3 271 → 3 300\nEstimate: 8 500 − 3 300 = 5 200 ✓ (5 229 is the exact answer, not the estimate; 5 300 rounds 3 271 down to 3 200 by mistake; 5 230 rounds to the nearest ten instead of the nearest hundred.)' },
        { difficulty: 'Medium', question: 'Calculate 6 412 + 1 543 = 7 955. Use subtraction to check this answer. What number should you get back?', checkMode: 'auto', options: ['6 421', '1 543', '6 412', '6 422'], correctIndex: 2, explanation: 'Check: 7 955 − 1 543 = 6 412 — this matches the original number, so the addition is correct ✓ (6 421 and 6 422 come from a slip while re-subtracting; 1 543 is just one of the numbers used in the check, not the result.)' },
        { difficulty: 'Hard', question: 'A learner calculated 9 856 − 3 421 = 6 345. Which statement correctly evaluates the answer using the inverse operation?', checkMode: 'auto', options: ['The learner is correct — the check confirms 6 345 + 3 421 = 9 856.', 'The learner is incorrect — the correct answer is 6 453.', 'The learner is incorrect — the correct answer is 6 445.', 'The learner is incorrect — checking gives 6 345 + 3 421 = 9 766, not 9 856, so the correct answer is 6 435.'], correctIndex: 3, explanation: 'Check: 6 345 + 3 421 = 9 766, not 9 856, so the learner is incorrect. The correct answer is 6 435 (since 6 435 + 3 421 = 9 856). (6 453 and 6 445 are plausible slips, not what the check actually shows.)' },

        // Block C — Mental Maths Strategies (8-10)
        { difficulty: 'Medium', question: 'Calculate mentally: 4 230 + 700', checkMode: 'auto', options: ['4 930', '4 903', '4 940', '4 300'], correctIndex: 0, explanation: 'Only the hundreds digit changes: 2+7=9\nAnswer: 4 930 ✓ (4 903 swaps the last two digits, 4 940 shifts a digit, 4 300 comes from misreading 700 as 70.)' },
        { difficulty: 'Medium', question: 'Calculate mentally: 2 140 + 90 (this needs a mental regroup — the tens digit becomes too big)', checkMode: 'auto', options: ['2 130', '2 230', '2 203', '2 240'], correctIndex: 1, explanation: '4 tens + 9 tens = 13 tens, which is too many for the tens column, so 1 hundred is regrouped: 2 140 + 90 = 2 230 ✓ (2 130 forgets the regroup into hundreds; 2 203 and 2 240 come from a digit slip.)' },
        { difficulty: 'Medium', question: 'Calculate mentally: 6 900 − 500. Which answer is correct, and why does only one digit change this time, unlike some other mental subtraction problems?', checkMode: 'auto', options: ['6 040 — the tens and hundreds digits both change because subtracting 500 always affects two columns.', '6 410 — a slip in the hundreds column.', '6 400 — because the hundreds digit (9) is bigger than 5, so no regrouping is needed; only the hundreds digit changes from 9 to 4, and the thousands, tens and units all stay the same.', '6 900 − 500 cannot be done mentally and needs column subtraction.'], correctIndex: 2, explanation: 'Since 9 (hundreds digit) is bigger than 5, no regrouping is needed: only the hundreds digit changes from 9 to 4, giving 6 400.' },

        // Block D — Money Word Problems (11-14)
        { difficulty: 'Easy', question: 'Amahle has R2 650 and receives a birthday gift of R1 875. How much does she have altogether?', checkMode: 'auto', options: ['R3 425', 'R4 552', 'R4 535', 'R4 525'], correctIndex: 3, explanation: '"Altogether" means add: R2 650 + R1 875 = R4 525 ✓ (R3 425 forgets to carry in a column; R4 552 and R4 535 come from a digit slip.)' },
        { difficulty: 'Medium', question: 'A charity raised R4 321 at one fundraiser and R2 109 at a second fundraiser, then spent R3 215 on supplies. How much money remains?', checkMode: 'auto', options: ['R3 215', 'R6 430', 'R9 645', 'R3 205'], correctIndex: 0, explanation: 'Total raised: R4 321 + R2 109 = R6 430\nRemaining: R6 430 − R3 215 = R3 215 ✓ (R6 430 stops after the first step; R9 645 adds the money spent instead of subtracting it; R3 205 starts from a wrong first step.)' },
        { difficulty: 'Medium', question: 'Sipho has R2 350 in savings. His friend Thabo has R2 999 in savings. Who has less money saved, and by how much?', checkMode: 'auto', options: ['Thabo has less, by R649', 'Sipho has less, by R649', 'Sipho has less, by R694', 'Sipho has less, by R659'], correctIndex: 1, explanation: 'R2 999 − R2 350 = R649. Sipho has R649 less than Thabo ✓ (the first option has the direction backwards; R694 and R659 come from a digit slip.)' },
        { difficulty: 'Medium', question: 'At the school tuck shop, a learner buys a pie for R475 and a juice for R225, paying with a R1 000 note. How much change is given?', checkMode: 'auto', options: ['R700', 'R310', 'R300', 'R290'], correctIndex: 2, explanation: 'Total cost: R475 + R225 = R700\nChange: R1 000 − R700 = R300 ✓ (R700 is the total cost, not the change; R310 and R290 come from a slip while adding the cost or subtracting the change.)' },

        // Block E — Multi-Step & Combined Word Problems (15-17)
        { difficulty: 'Hard', question: 'A factory produced 4 235 items in January and 1 876 more in February. In March, 2 345 items were sold. How many items remain from January and February production?', checkMode: 'auto', options: ['6 111', '8 456', '3 776', '3 766'], correctIndex: 3, explanation: '4 235 + 1 876 = 6 111\n6 111 − 2 345 = 3 766 ✓ (6 111 stops after the first step; 8 456 adds the items sold instead of subtracting them; 3 776 comes from a digit slip.)' },
        { difficulty: 'Hard', question: 'Sipho starts with 2 999 marbles. He gives away 1 500, then wins 3 400 more, then loses 1 600 in a game. How many marbles does he have now?', checkMode: 'auto', options: ['3 299', '1 499', '4 899', '3 309'], correctIndex: 0, explanation: '2 999 − 1 500 = 1 499\n1 499 + 3 400 = 4 899\n4 899 − 1 600 = 3 299 ✓ (1 499 stops after step 1; 4 899 stops after step 2; 3 309 comes from a digit slip in the final step.)' },
        { difficulty: 'Hard', question: 'A stadium had 6 500 tickets sold before a match. Another 1 850 people bought tickets at the gate, then 640 ticket holders did not arrive. How many people actually attended the match?', checkMode: 'auto', options: ['8 350', '7 710', '8 990', '7 720'], correctIndex: 1, explanation: '6 500 + 1 850 = 8 350 tickets in total\n8 350 − 640 (no-shows) = 7 710 people attended ✓ (8 350 stops after the first step; 8 990 adds the no-shows instead of subtracting them; 7 720 comes from a digit slip.)' },

        // Block F — Reasoning, Justification & Error-Spotting (18-19)
        { difficulty: 'Hard', question: 'A learner subtracts 5 304 − 1 867 by mistake as 5 304 − 1 687 and gets a different answer. Which statement correctly explains the error and finds the difference between the correct and incorrect answers?', checkMode: 'auto', options: ['The learner forgot to borrow; correct = 3 437, incorrect = 3 617, difference = 170.', 'The learner transposed the digits of 5 304 instead of 1 867; correct = 3 437, incorrect = 3 617, difference = 190.', 'The learner swapped the tens and units digits of 1 867, turning it into 1 687 (a transposition error). Correct: 5 304 − 1 867 = 3 437. Incorrect: 5 304 − 1 687 = 3 617. The difference is 3 617 − 3 437 = 180.', 'The learner\'s incorrect answer 3 617 is actually the correct one, and 3 437 is wrong.'], correctIndex: 2, explanation: 'The learner swapped the tens and units digits of 1 867 into 1 687. 5 304 − 1 867 = 3 437 and 5 304 − 1 687 = 3 617, so the difference is 180.' },
        { difficulty: 'Hard', question: 'Thabo claims that if you add two numbers and then subtract one of the original numbers back, you should always get the other original number. Which statement is correct?', checkMode: 'auto', options: ['No, this only works when both numbers are even.', 'No, this only works for numbers less than 1 000.', 'Yes, but only if you subtract the larger of the two original numbers, not the smaller one.', 'Yes, Thabo is correct. This is the inverse relationship between addition and subtraction. For example, 2 345 + 1 323 = 3 668, and 3 668 − 1 323 = 2 345, which is the other original number.'], correctIndex: 3, explanation: 'Addition and subtraction are always inverse operations, for any numbers — subtracting one addend from the sum always gives back the other addend.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding — mastered the full range from column methods to multi-step reasoning.' },
        { minScore: 15, message: 'Great work — confident across most skills, review missed questions.' },
        { minScore: 10, message: 'Good effort — revisit worked examples on carrying/borrowing and word problems.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],

  topicPractice: [

    // ── Section 1: What is Addition? ─────────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Calculate and show your working in columns:\n\n3 124 + 2 453',
      options: ['5 577', '5 757', '5 587', '5 576'],
      correctIndex: 0,
      explanation:
        'Working in columns — no carrying needed:\n\n' +
        '• Units:     4 + 3 = 7\n' +
        '• Tens:      2 + 5 = 7\n' +
        '• Hundreds:  1 + 4 = 5\n' +
        '• Thousands: 3 + 2 = 5\n\n' +
        'Answer: 5 577 ✓ (5 757 swaps the last two digits, 5 587 and 5 576 come from a slip in one column.)',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Calculate and show your carrying:\n\n2 867 + 1 445',
      options: ['3 202', '4 312', '4 321', '4 322'],
      correctIndex: 1,
      explanation:
        'Working in columns with carrying:\n\n' +
        '• Units:     7 + 5 = 12 → write 2, carry 1\n' +
        '• Tens:      6 + 4 + 1 (carried) = 11 → write 1, carry 1\n' +
        '• Hundreds:  8 + 4 + 1 (carried) = 13 → write 3, carry 1\n' +
        '• Thousands: 2 + 1 + 1 (carried) = 4\n\n' +
        'Answer: 4 312 ✓ (3 202 forgets to carry in every column; 4 321 and 4 322 come from a digit slip.)',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A school collected 1 876 cans in week one and 2 547 cans in week two.\n\n' +
        'How many cans did they collect altogether?',
      options: ['3 313', '4 432', '4 423', '4 433'],
      correctIndex: 2,
      explanation:
        'The word "altogether" tells us to add: 1 876 + 2 547\n\n' +
        'Working in columns with carrying:\n\n' +
        '• Units:     6 + 7 = 13 → write 3, carry 1\n' +
        '• Tens:      7 + 4 + 1 (carried) = 12 → write 2, carry 1\n' +
        '• Hundreds:  8 + 5 + 1 (carried) = 14 → write 4, carry 1\n' +
        '• Thousands: 1 + 2 + 1 (carried) = 4\n\n' +
        'The school collected 4 423 cans altogether ✓ (3 313 forgets to carry in every column; 4 432 and 4 433 come from a digit slip.)',
    },

    // ── Section 2: What is Subtraction? ──────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Calculate and show your working in columns:\n\n5 678 − 3 245',
      options: ['2 343', '2 443', '2 432', '2 433'],
      correctIndex: 3,
      explanation:
        'Working in columns — no borrowing needed:\n\n' +
        '• Units:     8 − 5 = 3\n' +
        '• Tens:      7 − 4 = 3\n' +
        '• Hundreds:  6 − 2 = 4\n' +
        '• Thousands: 5 − 3 = 2\n\n' +
        'Answer: 2 433 ✓ (2 343 swaps the last two digits, 2 443 and 2 432 come from a slip in one column.)',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Calculate and show your borrowing:\n\n7 302 − 4 568',
      options: ['3 266', '2 743', '2 734', '2 744'],
      correctIndex: 2,
      explanation:
        'The tens digit is 0, so borrowing must travel through it:\n\n' +
        '• Units: 2 − 8. Tens is 0 — borrow from hundreds (3 → 2). ' +
        'Tens becomes 10, then borrow from tens (10 → 9). Units becomes 12.\n' +
        '  12 − 8 = 4\n' +
        '• Tens:      9 − 6 = 3\n' +
        '• Hundreds: 2 − 5. Borrow from thousands (7 → 6). Hundreds becomes 12.\n' +
        '  12 − 5 = 7\n' +
        '• Thousands: 6 − 4 = 2\n\n' +
        'Answer: 2 734 ✓ (3 266 subtracts the smaller digit from the larger one instead of borrowing; 2 743 and 2 744 come from a digit slip.)',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A factory made 6 050 shoes on Monday. By Wednesday 2 387 shoes had been sold.\n\n' +
        'How many shoes are left?',
      options: ['4 337', '3 663', '3 636', '3 673'],
      correctIndex: 1,
      explanation:
        'The word "left" tells us to subtract: 6 050 − 2 387\n\n' +
        '• Units: 0 − 7. Borrow from tens (5 → 4). Units becomes 10.\n' +
        '  10 − 7 = 3\n' +
        '• Tens: 4 − 8. Hundreds digit is 0 — borrow from thousands (6 → 5). ' +
        'Hundreds becomes 10, then borrow from hundreds (10 → 9). Tens becomes 14.\n' +
        '  14 − 8 = 6\n' +
        '• Hundreds: 9 − 3 = 6\n' +
        '• Thousands: 5 − 2 = 3\n\n' +
        '3 663 shoes are left ✓ (4 337 subtracts the smaller digit from the larger one instead of borrowing; 3 636 and 3 673 come from a digit slip.)',
    },

    // ── SECTION 3 — Estimating Before You Calculate ─────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Estimate the answer to 3 456 + 2 234 by rounding each number to the nearest hundred first.',
      options: ['5 690', '5 600', '5 700', '5 800'],
      correctIndex: 2,
      explanation:
        'Round each number to the nearest hundred:\n' +
        '• 3 456 → 3 500 (56 is closer to 100 than to 0)\n' +
        '• 2 234 → 2 200 (34 is closer to 0 than to 100)\n\n' +
        'Estimate: 3 500 + 2 200 = 5 700 ✓ (5 690 is the exact answer, not the estimate; 5 600 rounds 3 456 down to 3 400 by mistake; 5 800 rounds 2 234 up to 2 300 by mistake.)',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Look at this subtraction: 4 872 − 1 439\n\n' +
        'Part A: Estimate the answer by rounding each number to the nearest hundred. Write only the number.\n' +
        'Part B: Now work out the exact answer. Write only the number.',
      answer: 'Part A: 3 500 | Part B: 3 433',
      parts: [
        {
          label: 'Part A — Estimate',
          // 4 872 → 4 900, 1 439 → 1 400; 4 900 − 1 400 = 3 500
          correctAnswer: '3500',
          explanation:
            'Round to the nearest hundred:\n' +
            '• 4 872 → 4 900\n' +
            '• 1 439 → 1 400\n' +
            'Estimate: 4 900 − 1 400 = 3 500',
        },
        {
          label: 'Part B — Exact answer',
          // 4 872 − 1 439 = 3 433
          correctAnswer: '3433',
          explanation:
            'Column subtraction:\n' +
            '• Units: 2 − 9. Borrow from tens (7 → 6). Units becomes 12.\n' +
            '  12 − 9 = 3\n' +
            '• Tens: 6 − 3 = 3\n' +
            '• Hundreds: 8 − 4 = 4\n' +
            '• Thousands: 4 − 1 = 3\n\n' +
            'Exact answer: 3 433',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Lebo estimated 2 345 + 3 812 by rounding to the nearest hundred and got 6 500.\n\n' +
        'Which statement correctly evaluates Lebo\'s estimate?',
      options: [
        'Lebo is correct — 2 345 + 3 812 rounds to 6 500.',
        'Lebo is incorrect — the correct estimate is 6 200, because 2 345 rounds to 2 400.',
        'Lebo is incorrect — the correct estimate is 6 000, because 3 812 rounds to 3 700.',
        'Lebo is incorrect — the correct estimate is 6 100 (2 345 → 2 300 and 3 812 → 3 800). Lebo likely rounded one of the numbers in the wrong direction.',
      ],
      correctIndex: 3,
      explanation:
        'Correct estimation:\n' +
        '• 2 345 → 2 300 (rounded to nearest hundred)\n' +
        '• 3 812 → 3 800 (rounded to nearest hundred)\n' +
        '• Estimate: 2 300 + 3 800 = 6 100\n\n' +
        'Lebo is NOT correct. The correct estimate is 6 100, not 6 500 — Lebo likely rounded one of the numbers in the wrong direction.',
    },

    // ── SECTION 4 — Inverse Operations ──────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Inverse operations let us check our answers.\n\n' +
        'Part A: Calculate 2 345 + 1 432. Write only the number.\n' +
        'Part B: Use subtraction to check your answer. Write the number you get back after subtracting 1 432.',
      answer: 'Part A: 3 777 | Part B: 2 345',
      parts: [
        {
          label: 'Part A — Addition',
          // 2 345 + 1 432 = 3 777
          correctAnswer: '3777',
          explanation:
            'Column addition:\n' +
            '• Units: 5 + 2 = 7\n' +
            '• Tens: 4 + 3 = 7\n' +
            '• Hundreds: 3 + 4 = 7\n' +
            '• Thousands: 2 + 1 = 3\n\n' +
            'Answer: 3 777',
        },
        {
          label: 'Part B — Inverse check',
          // 3 777 − 1 432 = 2 345 (back to original)
          correctAnswer: '2345',
          explanation:
            'The inverse of addition is subtraction:\n' +
            '3 777 − 1 432 = 2 345\n\n' +
            'We get back to 2 345, which confirms our addition was correct.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Part A: Calculate 5 678 − 2 345. Write only the number.\n' +
        'Part B: Use addition as the inverse operation to check your answer. Write the result of adding 2 345 to your Part A answer.',
      answer: 'Part A: 3 333 | Part B: 5 678',
      parts: [
        {
          label: 'Part A — Subtraction',
          // 5 678 − 2 345 = 3 333
          correctAnswer: '3333',
          explanation:
            'Column subtraction:\n' +
            '• Units: 8 − 5 = 3\n' +
            '• Tens: 7 − 4 = 3\n' +
            '• Hundreds: 6 − 3 = 3\n' +
            '• Thousands: 5 − 2 = 3\n\n' +
            'Answer: 3 333',
        },
        {
          label: 'Part B — Inverse check',
          // 3 333 + 2 345 = 5 678 (back to original)
          correctAnswer: '5678',
          explanation:
            'The inverse of subtraction is addition:\n' +
            '3 333 + 2 345 = 5 678\n\n' +
            'We get back to 5 678, which confirms our subtraction was correct.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A number was subtracted from 4 231 and the answer was 2 456.\n\n' +
        'Use the inverse operation (addition) to find the missing number.',
      options: ['1 775', '2 225', '1 757', '1 785'],
      correctIndex: 0,
      explanation:
        'We know: 4 231 − missing = 2 456\n\n' +
        'The inverse operation is addition:\n' +
        'missing = 4 231 − 2 456\n\n' +
        'Column subtraction:\n' +
        '• Units: 1 − 6. Borrow from tens (3 → 2). Units becomes 11.\n' +
        '  11 − 6 = 5\n' +
        '• Tens: 2 − 5. Borrow from hundreds (2 → 1). Tens becomes 12.\n' +
        '  12 − 5 = 7\n' +
        '• Hundreds: 1 − 4. Borrow from thousands (4 → 3). Hundreds becomes 11.\n' +
        '  11 − 4 = 7\n' +
        '• Thousands: 3 − 2 = 1\n\n' +
        'Missing number = 1 775. Check: 2 456 + 1 775 = 4 231 ✓ (2 225 subtracts the smaller digit from the larger one instead of borrowing; 1 757 and 1 785 come from a digit slip.)',
    },

    // ── SECTION 5 — Mental Calculations ─────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Calculate mentally: 4 500 + 300',
      options: ['4 080', '4 800', '4 810', '4 530'],
      correctIndex: 1,
      explanation:
        '4 500 + 300:\n' +
        '• Think in hundreds: 5 hundreds + 3 hundreds = 8 hundreds\n' +
        '• The thousands stay the same: 4 000\n' +
        '• 4 000 + 800 = 4 800 ✓ (4 080 swaps the last two digits, 4 810 shifts a digit, 4 530 comes from misreading 300 as 30.)',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Calculate each mentally. Write only the number for each part (no spaces or commas).\n\n' +
        'a) 3 700 + 600\n' +
        'b) 8 400 − 500\n' +
        'c) 2 300 + 1 400',
      answer: 'a) 4 300  b) 7 900  c) 3 700',
      parts: [
        {
          label: 'a) 3 700 + 600',
          // 3 700 + 600 = 4 300
          correctAnswer: '4300',
          explanation:
            '3 700 + 600:\n' +
            '• Think in hundreds: 7 hundreds + 6 hundreds = 13 hundreds\n' +
            '• 13 hundreds = 1 300\n' +
            '• 3 000 + 1 300 = 4 300',
        },
        {
          label: 'b) 8 400 − 500',
          // 8 400 − 500 = 7 900
          correctAnswer: '7900',
          explanation:
            '8 400 − 500:\n' +
            '• Think in hundreds: 84 hundreds − 5 hundreds = 79 hundreds\n' +
            '• 79 hundreds = 7 900',
        },
        {
          label: 'c) 2 300 + 1 400',
          // 2 300 + 1 400 = 3 700
          correctAnswer: '3700',
          explanation:
            '2 300 + 1 400:\n' +
            '• Thousands: 2 + 1 = 3\n' +
            '• Hundreds: 3 + 4 = 7\n' +
            '• Answer: 3 700',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Without writing it all out, calculate mentally: 5 600 + 800\n\n' +
        'Which answer and strategy are correct?',
      options: [
        '6 300 — only the hundreds digit changes, forgetting the carry into the thousands.',
        '7 400 — 800 was added to the thousands digit instead of the hundreds.',
        '6 400 — because 6 hundreds + 8 hundreds = 14 hundreds = 1 400, then 5 000 + 1 400 = 6 400.',
        '6 480 — the 8 from 800 was added to the tens digit instead of the hundreds.',
      ],
      correctIndex: 2,
      explanation:
        '5 600 = 5 000 + 600. Add the hundreds: 600 + 800 = 1 400 (6 hundreds + 8 hundreds = 14 hundreds). Add the thousands part back: 5 000 + 1 400 = 6 400.',
    },

    // ── SECTION 6 — Money Word Problems ─────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Sipho has R2 350 and earns R1 400 doing chores.\n\n' +
        'How much does he have altogether?',
      options: ['R3 705', 'R3 760', 'R3 850', 'R3 750'],
      correctIndex: 3,
      explanation:
        'R2 350 + R1 400:\n' +
        '• Units: 0 + 0 = 0\n' +
        '• Tens: 5 + 0 = 5\n' +
        '• Hundreds: 3 + 4 = 7\n' +
        '• Thousands: 2 + 1 = 3\n\n' +
        'Sipho has R3 750 altogether ✓ (R3 705 swaps the last two digits, R3 760 and R3 850 come from a digit slip.)',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'A television costs R4 999. Mama has R2 875.\n\n' +
        'How much more money does she need to buy the television?',
      options: ['R2 124', 'R2 142', 'R2 134', 'R2 114'],
      correctIndex: 0,
      explanation:
        'R4 999 − R2 875:\n' +
        '• Units: 9 − 5 = 4\n' +
        '• Tens: 9 − 7 = 2\n' +
        '• Hundreds: 9 − 8 = 1\n' +
        '• Thousands: 4 − 2 = 2\n\n' +
        'Mama needs R2 124 more ✓ (R2 142 and R2 134 come from a digit slip, R2 114 from a slip in the hundreds column.)',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Lerato has R5 000. She buys school shoes for R1 349 and a school bag for R875.\n\n' +
        'How much money does she have left?',
      options: ['R2 224', 'R2 776', 'R2 767', 'R2 786'],
      correctIndex: 1,
      explanation:
        'Step 1 — Add the cost of shoes and bag:\n' +
        '1 349 + 875\n' +
        '• Units: 9 + 5 = 14, write 4 carry 1\n' +
        '• Tens: 4 + 7 + 1 = 12, write 2 carry 1\n' +
        '• Hundreds: 3 + 8 + 1 = 12, write 2 carry 1\n' +
        '• Thousands: 1 + 0 + 1 = 2\n' +
        'Total cost = R2 224\n\n' +
        'Step 2 — Subtract from Lerato\'s money:\n' +
        '5 000 − 2 224\n' +
        '• Units: 0 − 4: cascade borrow from thousands → 10 − 4 = 6\n' +
        '• Tens: 9 − 2 = 7 (after borrowing)\n' +
        '• Hundreds: 9 − 2 = 7 (after borrowing)\n' +
        '• Thousands: 4 − 2 = 2 (after borrowing)\n\n' +
        'Lerato has R2 776 left ✓ (R2 224 is the total cost, not what is left; R2 767 and R2 786 come from a digit slip in the final subtraction.)',
    },

  ],
}
