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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
      practiceQuestions: [],
      openQuestions: [],
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — FOUNDATIONS: COLUMN ADDITION & SUBTRACTION (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: Foundations',
      questions: [
        { difficulty: 'Easy', question: 'Calculate: 3 245 + 2 431', answer: '5 676', checkMode: 'auto', correctAnswer: '5676', correctAnswers: ['5676', '5 676'], explanation: 'Units: 5+1=6\nTens: 4+3=7\nHundreds: 2+4=6\nThousands: 3+2=5\nAnswer: 5 676 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 5 678 + 1 231', answer: '6 909', checkMode: 'auto', correctAnswer: '6909', correctAnswers: ['6909', '6 909'], explanation: 'Units: 8+1=9\nTens: 7+3=10, write 0 carry 1\nHundreds: 6+2+1=9\nThousands: 5+1=6\nAnswer: 6 909 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 4 123 + 3 456', answer: '7 579', checkMode: 'auto', correctAnswer: '7579', correctAnswers: ['7579', '7 579'], explanation: 'Units: 3+6=9\nTens: 2+5=7\nHundreds: 1+4=5\nThousands: 4+3=7\nAnswer: 7 579 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 2 568 + 1 345', answer: '3 913', checkMode: 'auto', correctAnswer: '3913', correctAnswers: ['3913', '3 913'], explanation: 'Units: 8+5=13, write 3 carry 1\nTens: 6+4+1=11, write 1 carry 1\nHundreds: 5+3+1=9\nThousands: 2+1=3\nAnswer: 3 913 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 1 867 + 1 345', answer: '3 212', checkMode: 'auto', correctAnswer: '3212', correctAnswers: ['3212', '3 212'], explanation: 'Units: 7+5=12, write 2 carry 1\nTens: 6+4+1=11, write 1 carry 1\nHundreds: 8+3+1=12, write 2 carry 1\nThousands: 1+1+1=3\nAnswer: 3 212 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 3 456 + 2 678', answer: '6 134', checkMode: 'auto', correctAnswer: '6134', correctAnswers: ['6134', '6 134'], explanation: 'Units: 6+8=14, write 4 carry 1\nTens: 5+7+1=13, write 3 carry 1\nHundreds: 4+6+1=11, write 1 carry 1\nThousands: 3+2+1=6\nAnswer: 6 134 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 4 785 + 1 246', answer: '6 031', checkMode: 'auto', correctAnswer: '6031', correctAnswers: ['6031', '6 031'], explanation: 'Units: 5+6=11, write 1 carry 1\nTens: 8+4+1=13, write 3 carry 1\nHundreds: 7+2+1=10, write 0 carry 1\nThousands: 4+1+1=6\nAnswer: 6 031 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 5 678 + 2 456', answer: '8 134', checkMode: 'auto', correctAnswer: '8134', correctAnswers: ['8134', '8 134'], explanation: 'Units: 8+6=14, write 4 carry 1\nTens: 7+5+1=13, write 3 carry 1\nHundreds: 6+4+1=11, write 1 carry 1\nThousands: 5+2+1=8\nAnswer: 8 134 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 6 789 − 2 345', answer: '4 444', checkMode: 'auto', correctAnswer: '4444', correctAnswers: ['4444', '4 444'], explanation: 'Units: 9−5=4\nTens: 8−4=4\nHundreds: 7−3=4\nThousands: 6−2=4\nAnswer: 4 444 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 5 678 − 3 245', answer: '2 433', checkMode: 'auto', correctAnswer: '2433', correctAnswers: ['2433', '2 433'], explanation: 'Units: 8−5=3\nTens: 7−4=3\nHundreds: 6−2=4\nThousands: 5−3=2\nAnswer: 2 433 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 8 765 − 4 321', answer: '4 444', checkMode: 'auto', correctAnswer: '4444', correctAnswers: ['4444', '4 444'], explanation: 'Units: 5−1=4\nTens: 6−2=4\nHundreds: 7−3=4\nThousands: 8−4=4\nAnswer: 4 444 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 4 768 − 2 345', answer: '2 423', checkMode: 'auto', correctAnswer: '2423', correctAnswers: ['2423', '2 423'], explanation: 'Units: 8−5=3\nTens: 6−4=2\nHundreds: 7−3=4\nThousands: 4−2=2\nAnswer: 2 423 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 5 304 − 1 867 (borrowing needed)', answer: '3 437', checkMode: 'auto', correctAnswer: '3437', correctAnswers: ['3437', '3 437'], explanation: 'Units: 4−7, borrow → 14−7=7\nTens: 9−6=3 (after borrow)\nHundreds: 2−8, borrow → 12−8=4\nThousands: 4−1=3\nAnswer: 3 437 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 7 302 − 4 568 (borrowing needed)', answer: '2 734', checkMode: 'auto', correctAnswer: '2734', correctAnswers: ['2734', '2 734'], explanation: 'Units: 2−8, borrow through tens (0) → 12−8=4\nTens: 9−6=3\nHundreds: 2−5, borrow → 12−5=7\nThousands: 6−4=2\nAnswer: 2 734 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 6 050 − 2 387 (borrowing needed)', answer: '3 663', checkMode: 'auto', correctAnswer: '3663', correctAnswers: ['3663', '3 663'], explanation: 'Units: 0−7, borrow → 10−7=3\nTens: 4−8, borrow through hundreds (0) → 14−8=6\nHundreds: 9−3=6\nThousands: 5−2=3\nAnswer: 3 663 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 9 302 − 5 678 (borrowing needed)', answer: '3 624', checkMode: 'auto', correctAnswer: '3624', correctAnswers: ['3624', '3 624'], explanation: 'Units: 2−8, borrow → 12−8=4\nTens: 9−7=2 (after borrow)\nHundreds: 2−6, borrow → 12−6=6\nThousands: 8−5=3\nAnswer: 3 624 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 8 000 − 3 456 (borrowing needed)', answer: '4 544', checkMode: 'auto', correctAnswer: '4544', correctAnswers: ['4544', '4 544'], explanation: 'Units: 0−6, cascading borrow through tens & hundreds → 10−6=4\nTens: 9−5=4\nHundreds: 9−4=5\nThousands: 7−3=4\nAnswer: 4 544 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 7 005 − 2 348 (borrowing needed)', answer: '4 657', checkMode: 'auto', correctAnswer: '4657', correctAnswers: ['4657', '4 657'], explanation: 'Units: 5−8, cascading borrow through tens & hundreds → 15−8=7\nTens: 9−4=5\nHundreds: 9−3=6\nThousands: 6−2=4\nAnswer: 4 657 ✓' },
        { difficulty: 'Easy', question: 'Estimate 3 456 + 2 234 by rounding each number to the nearest hundred. Write only the estimate.', answer: '5 700', checkMode: 'auto', correctAnswer: '5700', correctAnswers: ['5700', '5 700'], explanation: '3 456 → 3 500\n2 234 → 2 200\nEstimate: 3 500 + 2 200 = 5 700 ✓' },
        { difficulty: 'Medium', question: 'Estimate 5 678 + 2 345 by rounding each number to the nearest hundred. Write only the estimate.', answer: '8 000', checkMode: 'auto', correctAnswer: '8000', correctAnswers: ['8000', '8 000'], explanation: '5 678 → 5 700\n2 345 → 2 300\nEstimate: 5 700 + 2 300 = 8 000 ✓' },
        { difficulty: 'Medium', question: 'Estimate 4 321 + 3 789 by rounding each number to the nearest hundred. Write only the estimate.', answer: '8 100', checkMode: 'auto', correctAnswer: '8100', correctAnswers: ['8100', '8 100'], explanation: '4 321 → 4 300\n3 789 → 3 800\nEstimate: 4 300 + 3 800 = 8 100 ✓' },
        { difficulty: 'Medium', question: 'Estimate 6 754 + 2 198 by rounding each number to the nearest hundred. Write only the estimate.', answer: '9 000', checkMode: 'auto', correctAnswer: '9000', correctAnswers: ['9000', '9 000'], explanation: '6 754 → 6 800\n2 198 → 2 200\nEstimate: 6 800 + 2 200 = 9 000 ✓' },
        { difficulty: 'Easy', question: 'Calculate 2 345 + 1 323 = 3 668. Use subtraction to check this answer. What number should you get back?', answer: '2 345', checkMode: 'auto', correctAnswer: '2345', correctAnswers: ['2345', '2 345'], explanation: 'Check: 3 668 − 1 323 = 2 345 — this matches the original number, so the addition is correct ✓' },
        { difficulty: 'Medium', question: 'Calculate 4 850 − 2 340 = 2 510. Use addition to check this answer. What number should you get back?', answer: '4 850', checkMode: 'auto', correctAnswer: '4850', correctAnswers: ['4850', '4 850'], explanation: 'Check: 2 510 + 2 340 = 4 850 — this matches the original number, so the subtraction is correct ✓' },
        { difficulty: 'Medium', question: 'Calculate: 9 856 − 3 421', answer: '6 435', checkMode: 'auto', correctAnswer: '6435', correctAnswers: ['6435', '6 435'], explanation: 'Units: 6−1=5\nTens: 5−2=3\nHundreds: 8−4=4\nThousands: 9−3=6\nAnswer: 6 435 ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered column addition, subtraction and estimating.' },
        { minScore: 19, message: 'Great work! You are confident with the basics — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples on carrying and borrowing.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — TRICKIER VARIANTS: MENTAL MATHS & INVERSE OPERATIONS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Mental Maths and Inverse Operations',
      questions: [
        { difficulty: 'Easy', question: 'Calculate mentally: 3 450 + 300', answer: '3 750', checkMode: 'auto', correctAnswer: '3750', correctAnswers: ['3750', '3 750'], explanation: 'Adding 300 only changes the hundreds digit: 4+3=7\nAnswer: 3 750 ✓' },
        { difficulty: 'Easy', question: 'Calculate mentally: 3 450 − 300', answer: '3 150', checkMode: 'auto', correctAnswer: '3150', correctAnswers: ['3150', '3 150'], explanation: 'Subtracting 300 only changes the hundreds digit: 4−3=1\nAnswer: 3 150 ✓' },
        { difficulty: 'Easy', question: 'Calculate mentally: 3 450 + 40', answer: '3 490', checkMode: 'auto', correctAnswer: '3490', correctAnswers: ['3490', '3 490'], explanation: 'Adding 40 only changes the tens digit: 5+4=9\nAnswer: 3 490 ✓' },
        { difficulty: 'Easy', question: 'Calculate mentally: 3 450 − 40', answer: '3 410', checkMode: 'auto', correctAnswer: '3410', correctAnswers: ['3410', '3 410'], explanation: 'Subtracting 40 only changes the tens digit: 5−4=1\nAnswer: 3 410 ✓' },
        { difficulty: 'Medium', question: 'Calculate mentally: 5 300 + 400', answer: '5 700', checkMode: 'auto', correctAnswer: '5700', correctAnswers: ['5700', '5 700'], explanation: 'Only the hundreds digit changes: 3+4=7\nAnswer: 5 700 ✓' },
        { difficulty: 'Medium', question: 'Calculate mentally: 8 760 − 300', answer: '8 460', checkMode: 'auto', correctAnswer: '8460', correctAnswers: ['8460', '8 460'], explanation: 'Only the hundreds digit changes: 7−3=4\nAnswer: 8 460 ✓' },
        { difficulty: 'Medium', question: 'Calculate mentally: 2 140 + 50', answer: '2 190', checkMode: 'auto', correctAnswer: '2190', correctAnswers: ['2190', '2 190'], explanation: 'Only the tens digit changes: 4+5=9\nAnswer: 2 190 ✓' },
        { difficulty: 'Medium', question: 'Calculate mentally: 6 120 − 60', answer: '6 060', checkMode: 'auto', correctAnswer: '6060', correctAnswers: ['6060', '6 060'], explanation: '2 tens − 6 tens needs borrowing from hundreds: 12 tens − 6 tens = 6 tens.\nAnswer: 6 060 ✓' },
        { difficulty: 'Medium', question: 'Calculate mentally: 4 230 + 700', answer: '4 930', checkMode: 'auto', correctAnswer: '4930', correctAnswers: ['4930', '4 930'], explanation: 'Only the hundreds digit changes: 2+7=9\nAnswer: 4 930 ✓' },
        { difficulty: 'Medium', question: 'Calculate mentally: 3 600 − 800', answer: '2 800', checkMode: 'auto', correctAnswer: '2800', correctAnswers: ['2800', '2 800'], explanation: '6 hundreds − 8 hundreds needs borrowing from thousands: 3 000 − 800 = 2 800.\nAnswer: 2 800 ✓' },
        { difficulty: 'Medium', question: 'Calculate mentally: 7 450 + 300', answer: '7 750', checkMode: 'auto', correctAnswer: '7750', correctAnswers: ['7750', '7 750'], explanation: 'Only the hundreds digit changes: 4+3=7\nAnswer: 7 750 ✓' },
        { difficulty: 'Medium', question: 'Calculate mentally: 4 890 − 70', answer: '4 820', checkMode: 'auto', correctAnswer: '4820', correctAnswers: ['4820', '4 820'], explanation: 'Only the tens digit changes: 9−7=2\nAnswer: 4 820 ✓' },
        { difficulty: 'Medium', question: 'Calculate mentally: 5 240 + 800', answer: '6 040', checkMode: 'auto', correctAnswer: '6040', correctAnswers: ['6040', '6 040'], explanation: '2 hundreds + 8 hundreds = 10 hundreds, so the thousands digit also changes: 5 240 + 800 = 6 040 ✓' },
        { difficulty: 'Medium', question: 'Calculate mentally: 6 900 − 500', answer: '6 400', checkMode: 'auto', correctAnswer: '6400', correctAnswers: ['6400', '6 400'], explanation: 'Only the hundreds digit changes: 9−5=4\nAnswer: 6 400 ✓' },
        { difficulty: 'Medium', question: 'Calculate mentally: 3 480 + 90', answer: '3 570', checkMode: 'auto', correctAnswer: '3570', correctAnswers: ['3570', '3 570'], explanation: '8 tens + 9 tens = 17 tens, so the hundreds digit also changes: 3 480 + 90 = 3 570 ✓' },
        { difficulty: 'Easy', question: 'Calculate 2 345 + 1 432. Write only the number.', answer: '3 777', checkMode: 'auto', correctAnswer: '3777', correctAnswers: ['3777', '3 777'], explanation: 'Units: 5+2=7\nTens: 4+3=7\nHundreds: 3+4=7\nThousands: 2+1=3\nAnswer: 3 777 ✓' },
        { difficulty: 'Medium', question: 'Use the inverse operation to check 2 345 + 1 432 = 3 777. What do you get when you subtract 1 432 from 3 777?', answer: '2 345', checkMode: 'auto', correctAnswer: '2345', correctAnswers: ['2345', '2 345'], explanation: '3 777 − 1 432 = 2 345 — this matches the original number, confirming the addition ✓' },
        { difficulty: 'Medium', question: 'Calculate: 5 678 − 2 345', answer: '3 333', checkMode: 'auto', correctAnswer: '3333', correctAnswers: ['3333', '3 333'], explanation: 'Units: 8−5=3\nTens: 7−4=3\nHundreds: 6−3=3\nThousands: 5−2=3\nAnswer: 3 333 ✓' },
        { difficulty: 'Medium', question: 'Use the inverse operation to check 5 678 − 2 345 = 3 333. What do you get when you add 2 345 to 3 333?', answer: '5 678', checkMode: 'auto', correctAnswer: '5678', correctAnswers: ['5678', '5 678'], explanation: '3 333 + 2 345 = 5 678 — this matches the original number, confirming the subtraction ✓' },
        { difficulty: 'Hard', question: 'A number was subtracted from 4 231 to give 2 456. Use the inverse operation (addition) to find the missing number.', answer: '1 775', checkMode: 'auto', correctAnswer: '1775', correctAnswers: ['1775', '1 775'], explanation: 'missing = 4 231 − 2 456 = 1 775\nCheck: 2 456 + 1 775 = 4 231 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 6 412 + 1 543', answer: '7 955', checkMode: 'auto', correctAnswer: '7955', correctAnswers: ['7955', '7 955'], explanation: 'Units: 2+3=5\nTens: 1+4=5\nHundreds: 4+5=9\nThousands: 6+1=7\nAnswer: 7 955 ✓' },
        { difficulty: 'Hard', question: 'Use the inverse operation to check 6 412 + 1 543 = 7 955. What number should subtracting 1 543 from 7 955 give you?', answer: '6 412', checkMode: 'auto', correctAnswer: '6412', correctAnswers: ['6412', '6 412'], explanation: '7 955 − 1 543 = 6 412 — matches the original number ✓' },
        { difficulty: 'Hard', question: 'Calculate: 8 500 − 3 271, then check your answer using addition. Write only the final checked answer.', answer: '5 229', checkMode: 'auto', correctAnswer: '5229', correctAnswers: ['5229', '5 229'], explanation: '8 500 − 3 271 = 5 229\nCheck: 5 229 + 3 271 = 8 500 ✓' },
        { difficulty: 'Hard', question: 'Estimate 6 754 + 2 198 by rounding to the nearest hundred, then explain in one sentence why rounding makes checking large sums quicker.', answer: 'Estimate: 6 800 + 2 200 = 9 000. Rounding makes the numbers simpler to add mentally, so you can quickly check whether your exact answer is reasonable.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho calculated 5 304 − 1 867 = 3 537. Use the inverse operation to check whether Sipho is correct, and explain your reasoning.', answer: 'Check: 3 537 + 1 867 = 5 404, not 5 304, so Sipho is incorrect. The correct answer is 3 437 (since 3 437 + 1 867 = 5 304).', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered mental strategies and inverse operations.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the mental maths and inverse operations worked examples.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — REAL-WORLD MONEY WORD PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Money Word Problems',
      questions: [
        { difficulty: 'Easy', question: 'Thabo has R2 450 in savings. He earns R1 375 doing chores. How much does he have altogether?', answer: 'R3 825', checkMode: 'auto', correctAnswer: 'R3825', correctAnswers: ['R3825', 'R3 825', '3825', '3 825'], explanation: '"Altogether" means add: R2 450 + R1 375 = R3 825 ✓' },
        { difficulty: 'Easy', question: 'A bicycle costs R3 999. Lerato has R2 650. How much more money does she need?', answer: 'R1 349', checkMode: 'auto', correctAnswer: 'R1349', correctAnswers: ['R1349', 'R1 349', '1349', '1 349'], explanation: '"How much more" means subtract: R3 999 − R2 650 = R1 349 ✓' },
        { difficulty: 'Easy', question: 'Sipho has R2 350 and earns R1 400 doing chores. How much does he have altogether?', answer: 'R3 750', checkMode: 'auto', correctAnswer: 'R3750', correctAnswers: ['R3750', 'R3 750', '3750', '3 750'], explanation: 'R2 350 + R1 400 = R3 750 ✓' },
        { difficulty: 'Medium', question: 'A television costs R4 999. Amahle has R2 875. How much more money does she need?', answer: 'R2 124', checkMode: 'auto', correctAnswer: 'R2124', correctAnswers: ['R2124', 'R2 124', '2124', '2 124'], explanation: 'R4 999 − R2 875 = R2 124 ✓' },
        { difficulty: 'Medium', question: 'Lerato buys school shoes for R1 349 and a school bag for R875. What is the total cost?', answer: 'R2 224', checkMode: 'auto', correctAnswer: 'R2224', correctAnswers: ['R2224', 'R2 224', '2224', '2 224'], explanation: 'R1 349 + R875 = R2 224 ✓' },
        { difficulty: 'Medium', question: 'Lerato has R5 000. She spends R2 224 on shoes and a bag. How much money does she have left?', answer: 'R2 776', checkMode: 'auto', correctAnswer: 'R2776', correctAnswers: ['R2776', 'R2 776', '2776', '2 776'], explanation: 'R5 000 − R2 224 = R2 776 ✓' },
        { difficulty: 'Easy', question: 'A farmer picks 3 120 oranges on Monday and 1 405 on Tuesday. What is the total number of oranges?', answer: '4 525', checkMode: 'auto', correctAnswer: '4525', correctAnswers: ['4525', '4 525'], explanation: '3 120 + 1 405 = 4 525 ✓' },
        { difficulty: 'Easy', question: 'A school library has 2 430 books and buys 1 250 new books. How many books are there in all?', answer: '3 680', checkMode: 'auto', correctAnswer: '3680', correctAnswers: ['3680', '3 680'], explanation: '2 430 + 1 250 = 3 680 ✓' },
        { difficulty: 'Easy', question: 'You have 1 245 stickers and your friend gives you 312 more. How many do you have altogether?', answer: '1 557', checkMode: 'auto', correctAnswer: '1557', correctAnswers: ['1557', '1 557'], explanation: '1 245 + 312 = 1 557 ✓' },
        { difficulty: 'Medium', question: 'A school has 1 865 learners. 342 learners go on a trip. How many learners are still at school?', answer: '1 523', checkMode: 'auto', correctAnswer: '1523', correctAnswers: ['1523', '1 523'], explanation: '1 865 − 342 = 1 523 ✓' },
        { difficulty: 'Medium', question: 'A factory makes 4 500 bottles. 1 250 are sold. What is the difference between the number made and the number sold?', answer: '3 250', checkMode: 'auto', correctAnswer: '3250', correctAnswers: ['3250', '3 250'], explanation: '4 500 − 1 250 = 3 250 ✓' },
        { difficulty: 'Medium', question: 'You have R3 450 and you spend R1 230. How much money do you have left?', answer: 'R2 220', checkMode: 'auto', correctAnswer: 'R2220', correctAnswers: ['R2220', 'R2 220', '2220', '2 220'], explanation: 'R3 450 − R1 230 = R2 220 ✓' },
        { difficulty: 'Medium', question: 'Amahle has R2 650 and receives a gift of R1 875. How much does she have altogether?', answer: 'R4 525', checkMode: 'auto', correctAnswer: 'R4525', correctAnswers: ['R4525', 'R4 525', '4525', '4 525'], explanation: 'R2 650 + R1 875 = R4 525 ✓' },
        { difficulty: 'Medium', question: 'Amahle has R4 525 and spends R1 899 on a gift for her mother. How much does she have left?', answer: 'R2 626', checkMode: 'auto', correctAnswer: 'R2626', correctAnswers: ['R2626', 'R2 626', '2626', '2 626'], explanation: 'R4 525 − R1 899 = R2 626 ✓' },
        { difficulty: 'Medium', question: 'A shop sells R3 800 worth of goods on Saturday and R2 150 on Sunday. What is the total sales for the weekend?', answer: 'R5 950', checkMode: 'auto', correctAnswer: 'R5950', correctAnswers: ['R5950', 'R5 950', '5950', '5 950'], explanation: 'R3 800 + R2 150 = R5 950 ✓' },
        { difficulty: 'Medium', question: 'A shop has R5 950 in weekend sales. It pays R2 680 in expenses. How much profit is left?', answer: 'R3 270', checkMode: 'auto', correctAnswer: 'R3270', correctAnswers: ['R3270', 'R3 270', '3270', '3 270'], explanation: 'R5 950 − R2 680 = R3 270 ✓' },
        { difficulty: 'Medium', question: 'Thabo has R4 200. He wants to buy a jacket costing R1 875. How much money will he have left?', answer: 'R2 325', checkMode: 'auto', correctAnswer: 'R2325', correctAnswers: ['R2325', 'R2 325', '2325', '2 325'], explanation: 'R4 200 − R1 875 = R2 325 ✓' },
        { difficulty: 'Medium', question: 'Sipho saved R2 999 last year and R1 876 this year. What is his total savings?', answer: 'R4 875', checkMode: 'auto', correctAnswer: 'R4875', correctAnswers: ['R4875', 'R4 875', '4875', '4 875'], explanation: 'R2 999 + R1 876 = R4 875 ✓' },
        { difficulty: 'Medium', question: 'A car costs R6 250. Lerato has already saved R3 475. How much more does she need?', answer: 'R2 775', checkMode: 'auto', correctAnswer: 'R2775', correctAnswers: ['R2775', 'R2 775', '2775', '2 775'], explanation: 'R6 250 − R3 475 = R2 775 ✓' },
        { difficulty: 'Medium', question: 'Amahle earns R1 899 from a market stall and R2 760 from babysitting. What is her total income?', answer: 'R4 659', checkMode: 'auto', correctAnswer: 'R4659', correctAnswers: ['R4659', 'R4 659', '4659', '4 659'], explanation: 'R1 899 + R2 760 = R4 659 ✓' },
        { difficulty: 'Medium', question: 'A store had R7 000 in stock value. It sold R3 899 worth of goods. What value of stock is left?', answer: 'R3 101', checkMode: 'auto', correctAnswer: 'R3101', correctAnswers: ['R3101', 'R3 101', '3101', '3 101'], explanation: 'R7 000 − R3 899 = R3 101 ✓' },
        { difficulty: 'Hard', question: 'Thabo has R5 000. He buys a jacket for R1 875 and shoes for R1 349. How much money does he have left?', answer: 'R1 776', checkMode: 'auto', correctAnswer: 'R1776', correctAnswers: ['R1776', 'R1 776', '1776', '1 776'], explanation: 'Total spent: R1 875 + R1 349 = R3 224\nRemaining: R5 000 − R3 224 = R1 776 ✓' },
        { difficulty: 'Hard', question: 'A shop earns R3 250 on Monday and R1 875 on Tuesday, then pays R2 999 in rent. How much money is left after paying rent?', answer: 'R2 126', checkMode: 'auto', correctAnswer: 'R2126', correctAnswers: ['R2126', 'R2 126', '2126', '2 126'], explanation: 'Total earned: R3 250 + R1 875 = R5 125\nAfter rent: R5 125 − R2 999 = R2 126 ✓' },
        { difficulty: 'Hard', question: 'Amahle has R4 890. She spends R2 999 on a phone. Then her aunt gives her R1 500. How much money does she have now?', answer: 'R3 391', checkMode: 'auto', correctAnswer: 'R3391', correctAnswers: ['R3391', 'R3 391', '3391', '3 391'], explanation: 'After spending: R4 890 − R2 999 = R1 891\nAfter gift: R1 891 + R1 500 = R3 391 ✓' },
        { difficulty: 'Hard', question: 'Explain, using the words "altogether" and "how much left", how you decide whether a money word problem needs addition or subtraction.', answer: 'If the problem uses words like "altogether", "total" or "in all", you add the amounts together. If it uses words like "how much left" or "how much more", you subtract one amount from another.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You can confidently solve money word problems with addition and subtraction.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the money word problem worked examples.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP AND COMBINED PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Multi-Step and Combined Problems',
      questions: [
        { difficulty: 'Hard', question: 'A school collected 1 876 cans in week one and 2 547 cans in week two. How many cans did they collect altogether?', answer: '4 423', checkMode: 'auto', correctAnswer: '4423', correctAnswers: ['4423', '4 423'], explanation: '1 876 + 2 547 = 4 423 ✓' },
        { difficulty: 'Hard', question: 'A shop has 6 050 loaves of bread. It sells 2 387, then donates 1 200 more to a charity. How many loaves are left?', answer: '2 463', checkMode: 'auto', correctAnswer: '2463', correctAnswers: ['2463', '2 463'], explanation: '6 050 − 2 387 = 3 663\n3 663 − 1 200 = 2 463 ✓' },
        { difficulty: 'Hard', question: 'A stadium has 2 345 fans. 1 876 more arrive, then 987 leave early. How many fans remain?', answer: '3 234', checkMode: 'auto', correctAnswer: '3234', correctAnswers: ['3234', '3 234'], explanation: '2 345 + 1 876 = 4 221\n4 221 − 987 = 3 234 ✓' },
        { difficulty: 'Hard', question: 'A farmer has 5 000 apples. He sells 1 234, then 2 345 more. How many apples does he have left?', answer: '1 421', checkMode: 'auto', correctAnswer: '1421', correctAnswers: ['1421', '1 421'], explanation: '5 000 − 1 234 = 3 766\n3 766 − 2 345 = 1 421 ✓' },
        { difficulty: 'Hard', question: 'A school has 3 456 learners. 2 544 more learners join, then 1 000 graduate and leave. How many learners are at the school now?', answer: '5 000', checkMode: 'auto', correctAnswer: '5000', correctAnswers: ['5000', '5 000'], explanation: '3 456 + 2 544 = 6 000\n6 000 − 1 000 = 5 000 ✓' },
        { difficulty: 'Hard', question: 'A number was subtracted from 4 231 to give 2 456. If 1 775 is then added to 2 456, what is the result?', answer: '4 231', checkMode: 'auto', correctAnswer: '4231', correctAnswers: ['4231', '4 231'], explanation: 'Missing number = 4 231 − 2 456 = 1 775\n2 456 + 1 775 = 4 231 ✓ (this brings us back to the start, confirming the inverse relationship)' },
        { difficulty: 'Hard', question: 'A company had 9 999 items in stock. It sold 4 567 items, then received a delivery of 1 233 more. How many items are in stock now?', answer: '6 665', checkMode: 'auto', correctAnswer: '6665', correctAnswers: ['6665', '6 665'], explanation: '9 999 − 4 567 = 5 432\n5 432 + 1 233 = 6 665 ✓' },
        { difficulty: 'Medium', question: 'Estimate 3 500 + 2 200 first, then calculate the exact answer to 3 456 + 2 234. Write only the exact answer.', answer: '5 690', checkMode: 'auto', correctAnswer: '5690', correctAnswers: ['5690', '5 690'], explanation: 'Estimate: 3 500 + 2 200 = 5 700\nExact: 3 456 + 2 234 = 5 690 (close to the estimate, so it is reasonable) ✓' },
        { difficulty: 'Medium', question: 'Estimate 4 900 − 1 400 first, then calculate the exact answer to 4 872 − 1 439. Write only the exact answer.', answer: '3 433', checkMode: 'auto', correctAnswer: '3433', correctAnswers: ['3433', '3 433'], explanation: 'Estimate: 4 900 − 1 400 = 3 500\nExact: 4 872 − 1 439 = 3 433 (close to the estimate, so it is reasonable) ✓' },
        { difficulty: 'Medium', question: 'A shopkeeper receives R1 250, R2 875 and R1 000 from three customers in one day. What is her total income for the day?', answer: 'R5 125', checkMode: 'auto', correctAnswer: 'R5125', correctAnswers: ['R5125', 'R5 125', '5125', '5 125'], explanation: 'R1 250 + R2 875 + R1 000 = R5 125 ✓' },
        { difficulty: 'Hard', question: 'A shopkeeper has R8 500 in stock value. She sells goods worth R2 250, then more goods worth R1 875. What stock value is left?', answer: 'R4 375', checkMode: 'auto', correctAnswer: 'R4375', correctAnswers: ['R4375', 'R4 375', '4375', '4 375'], explanation: 'R8 500 − R2 250 = R6 250\nR6 250 − R1 875 = R4 375 ✓' },
        { difficulty: 'Hard', question: 'Thabo has R2 450. He earns R1 375 more doing chores, then spends R1 500 on a gift. How much money does he have left?', answer: 'R2 325', checkMode: 'auto', correctAnswer: 'R2325', correctAnswers: ['R2325', 'R2 325', '2325', '2 325'], explanation: 'R2 450 + R1 375 = R3 825\nR3 825 − R1 500 = R2 325 ✓' },
        { difficulty: 'Hard', question: 'A factory produced 4 235 items in January and 1 876 more in February. In March, 2 345 items were sold. How many items remain from January and February production?', answer: '3 766', checkMode: 'auto', correctAnswer: '3766', correctAnswers: ['3766', '3 766'], explanation: '4 235 + 1 876 = 6 111\n6 111 − 2 345 = 3 766 ✓' },
        { difficulty: 'Hard', question: 'A charity raised R4 321 in one event and R2 109 in a second event, then spent R3 215 on supplies. How much money remains?', answer: 'R3 215', checkMode: 'auto', correctAnswer: 'R3215', correctAnswers: ['R3215', 'R3 215', '3215', '3 215'], explanation: 'R4 321 + R2 109 = R6 430\nR6 430 − R3 215 = R3 215 ✓' },
        { difficulty: 'Hard', question: 'Sipho starts with 2 999 marbles. He gives away 1 500, then wins 3 400 more, then loses 1 600 in a game. How many marbles does he have now?', answer: '3 299', checkMode: 'auto', correctAnswer: '3299', correctAnswers: ['3299', '3 299'], explanation: '2 999 − 1 500 = 1 499\n1 499 + 3 400 = 4 899\n4 899 − 1 600 = 3 299 ✓' },
        { difficulty: 'Hard', question: 'A bus company carried 5 670 passengers on Saturday and 2 340 fewer on Sunday. How many passengers did it carry on Sunday, and what was the total for the weekend?', answer: 'Sunday: 3 330; Weekend total: 9 000', checkMode: 'auto', correctAnswer: '9000', correctAnswers: ['9000', '9 000', '3330 and 9000', 'sunday=3330, total=9000'], explanation: 'Sunday: 5 670 − 2 340 = 3 330\nWeekend total: 5 670 + 3 330 = 9 000 ✓' },
        { difficulty: 'Hard', question: 'A stadium had 1 290 empty seats before a match, and 3 480 more people arrived than expected. If the stadium originally expected exactly enough people to fill all empty seats, how many people are now over capacity?', answer: '3 480', checkMode: 'auto', correctAnswer: '3480', correctAnswers: ['3480', '3 480'], explanation: 'The extra arrivals (3 480) are all beyond the expected number needed to fill the seats, so the stadium is over capacity by 3 480 people ✓' },
        { difficulty: 'Hard', question: 'A rand amount is added to R2 450 to give R5 825. What was the rand amount that was added?', answer: 'R3 375', checkMode: 'auto', correctAnswer: 'R3375', correctAnswers: ['R3375', 'R3 375', '3375', '3 375'], explanation: 'Missing amount = R5 825 − R2 450 = R3 375\nCheck: R2 450 + R3 375 = R5 825 ✓' },
        { difficulty: 'Hard', question: 'A number is subtracted twice from 9 000: first 2 345, then 3 210. What is the final result?', answer: '3 445', checkMode: 'auto', correctAnswer: '3445', correctAnswers: ['3445', '3 445'], explanation: '9 000 − 2 345 = 6 655\n6 655 − 3 210 = 3 445 ✓' },
        { difficulty: 'Hard', question: 'A bakery sells R7 999 worth of bread over a week. It first spends R2 450 on flour, then R1 375 on wages. How much profit remains?', answer: 'R4 174', checkMode: 'auto', correctAnswer: 'R4174', correctAnswers: ['R4174', 'R4 174', '4174', '4 174'], explanation: 'R7 999 − R2 450 = R5 549\nR5 549 − R1 375 = R4 174 ✓' },
        { difficulty: 'Hard', question: 'Thabo claims that if you add two numbers and then subtract one of the original numbers back, you should always get the other original number. Is he correct? Explain using an example.', answer: 'Yes, Thabo is correct. This is the inverse relationship between addition and subtraction. For example, 2 345 + 1 323 = 3 668, and 3 668 − 1 323 = 2 345, which is the other original number.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Explain why estimating before calculating an exact answer is a useful strategy when solving multi-step word problems.', answer: 'Estimating gives a rough idea of what the final answer should look like. If the exact calculated answer is very different from the estimate, this signals a mistake was probably made in the working, so estimating helps catch errors before finalising an answer.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato says that borrowing is only needed when subtracting money amounts, not whole numbers. Is she correct? Explain your reasoning.', answer: 'No, Lerato is incorrect. Borrowing is needed whenever a digit in the top number is smaller than the digit below it in the same column, regardless of whether the numbers represent money or plain whole numbers — the column subtraction method works the same way in both cases.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A learner says that 4 000 − 3 999 = 1 because "the numbers are so close together". Explain whether this reasoning is correct, and show the calculation to support your answer.', answer: 'The learner\'s final answer of 1 is correct, but the reasoning given ("because the numbers are close together") is not a reliable method — it happens to work here by coincidence. The proper way is to calculate directly: 4 000 − 3 999 = 1, confirmed by column subtraction with borrowing through every column.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A learner adds 3 245 + 2 431 by mistake as 3 245 + 2 341 and gets a different answer. Explain what error the learner made and find the difference between the correct answer and the learner\'s incorrect answer.', answer: 'The learner swapped the tens and units digits of 2 431, turning it into 2 341 (a transposition error). Correct: 3 245 + 2 431 = 5 676. Incorrect: 3 245 + 2 341 = 5 586. The difference is 5 676 − 5 586 = 90.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered multi-step and combined addition and subtraction problems.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the multi-step worked examples.' },
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
      // "5 577" → strip spaces → "5577"
      correctAnswer: '5577',
      explanation:
        'Working in columns — no carrying needed:\n\n' +
        '• Units:     4 + 3 = 7\n' +
        '• Tens:      2 + 5 = 7\n' +
        '• Hundreds:  1 + 4 = 5\n' +
        '• Thousands: 3 + 2 = 5\n\n' +
        'Answer: 5 577',
      answer: '5 577',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Calculate and show your carrying:\n\n2 867 + 1 445',
      // "4 312" → strip spaces → "4312"
      correctAnswer: '4312',
      explanation:
        'Working in columns with carrying:\n\n' +
        '• Units:     7 + 5 = 12 → write 2, carry 1\n' +
        '• Tens:      6 + 4 + 1 (carried) = 11 → write 1, carry 1\n' +
        '• Hundreds:  8 + 4 + 1 (carried) = 13 → write 3, carry 1\n' +
        '• Thousands: 2 + 1 + 1 (carried) = 4\n\n' +
        'Answer: 4 312',
      answer: '4 312',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A school collected 1 876 cans in week one and 2 547 cans in week two.\n\n' +
        'How many cans did they collect altogether? Show all working.',
      // "4 423" → strip spaces → "4423"
      correctAnswer: '4423',
      explanation:
        'The word "altogether" tells us to add: 1 876 + 2 547\n\n' +
        'Working in columns with carrying:\n\n' +
        '• Units:     6 + 7 = 13 → write 3, carry 1\n' +
        '• Tens:      7 + 4 + 1 (carried) = 12 → write 2, carry 1\n' +
        '• Hundreds:  8 + 5 + 1 (carried) = 14 → write 4, carry 1\n' +
        '• Thousands: 1 + 2 + 1 (carried) = 4\n\n' +
        'The school collected 4 423 cans altogether.',
      answer: '4 423',
    },

    // ── Section 2: What is Subtraction? ──────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Calculate and show your working in columns:\n\n5 678 − 3 245',
      // "2 433" → strip spaces → "2433"
      correctAnswer: '2433',
      explanation:
        'Working in columns — no borrowing needed:\n\n' +
        '• Units:     8 − 5 = 3\n' +
        '• Tens:      7 − 4 = 3\n' +
        '• Hundreds:  6 − 2 = 4\n' +
        '• Thousands: 5 − 3 = 2\n\n' +
        'Answer: 2 433',
      answer: '2 433',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Calculate and show your borrowing:\n\n7 302 − 4 568',
      // "2 734" → strip spaces → "2734"
      correctAnswer: '2734',
      explanation:
        'The tens digit is 0, so borrowing must travel through it:\n\n' +
        '• Units: 2 − 8. Tens is 0 — borrow from hundreds (3 → 2). ' +
        'Tens becomes 10, then borrow from tens (10 → 9). Units becomes 12.\n' +
        '  12 − 8 = 4\n' +
        '• Tens:      9 − 6 = 3\n' +
        '• Hundreds: 2 − 5. Borrow from thousands (7 → 6). Hundreds becomes 12.\n' +
        '  12 − 5 = 7\n' +
        '• Thousands: 6 − 4 = 2\n\n' +
        'Answer: 2 734',
      answer: '2 734',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A factory made 6 050 shoes on Monday. By Wednesday 2 387 shoes had been sold.\n\n' +
        'How many shoes are left? Show all working including borrowing where needed.',
      // "3 663" → strip spaces → "3663"
      correctAnswer: '3663',
      explanation:
        'The word "left" tells us to subtract: 6 050 − 2 387\n\n' +
        '• Units: 0 − 7. Borrow from tens (5 → 4). Units becomes 10.\n' +
        '  10 − 7 = 3\n' +
        '• Tens: 4 − 8. Hundreds digit is 0 — borrow from thousands (6 → 5). ' +
        'Hundreds becomes 10, then borrow from hundreds (10 → 9). Tens becomes 14.\n' +
        '  14 − 8 = 6\n' +
        '• Hundreds: 9 − 3 = 6\n' +
        '• Thousands: 5 − 2 = 3\n\n' +
        '3 663 shoes are left.',
      answer: '3 663',
    },

    // ── SECTION 3 — Estimating Before You Calculate ─────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Estimate the answer to 3 456 + 2 234 by rounding each number to the nearest hundred first.\n\n' +
        'Write only the estimated answer (no spaces or commas).',
      // 3 456 → 3 500, 2 234 → 2 200; 3 500 + 2 200 = 5 700
      correctAnswer: '5700',
      explanation:
        'Round each number to the nearest hundred:\n' +
        '• 3 456 → 3 500 (56 is closer to 100 than to 0)\n' +
        '• 2 234 → 2 200 (34 is closer to 0 than to 100)\n\n' +
        'Estimate: 3 500 + 2 200 = 5 700',
      answer: '5 700',
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
      checkMode: 'self',
      question:
        'Lebo estimated 2 345 + 3 812 by rounding to the nearest hundred and got 6 500.\n\n' +
        'Is Lebo correct? Show how you would estimate this calculation correctly and explain where Lebo went wrong.',
      explanation:
        'Correct estimation:\n' +
        '• 2 345 → 2 300 (rounded to nearest hundred)\n' +
        '• 3 812 → 3 800 (rounded to nearest hundred)\n' +
        '• Estimate: 2 300 + 3 800 = 6 100\n\n' +
        'Lebo is NOT correct. The correct estimate is 6 100, not 6 500.\n\n' +
        'Lebo likely rounded 2 345 up to 2 400 (rounding to the nearest 500 or using a different rule) ' +
        'or rounded 3 812 up to 3 900 instead of down to 3 800.',
      answer: '6 100 (not 6 500) — Lebo made an error rounding one or both numbers.',
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
        'Use the inverse operation (addition) to find the missing number. Write only the missing number.',
      // 4 231 − ? = 2 456 → ? = 4 231 − 2 456 = 1 775
      // Check: 2 456 + 1 775 = 4 231 ✓
      correctAnswer: '1775',
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
        'Missing number = 1 775\n' +
        'Check: 2 456 + 1 775 = 4 231 ✓',
      answer: '1 775',
    },

    // ── SECTION 5 — Mental Calculations ─────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Calculate mentally: 4 500 + 300\n\n' +
        'Write only the answer (no spaces or commas).',
      // 4 500 + 300 = 4 800
      correctAnswer: '4800',
      explanation:
        '4 500 + 300:\n' +
        '• Think in hundreds: 5 hundreds + 3 hundreds = 8 hundreds\n' +
        '• The thousands stay the same: 4 000\n' +
        '• 4 000 + 800 = 4 800',
      answer: '4 800',
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
      checkMode: 'self',
      question:
        'Without writing it all out, calculate mentally: 5 600 + 800\n\n' +
        'a) What is the answer?\n' +
        'b) Explain how you worked it out in your head.',
      explanation:
        'a) Answer: 6 400\n\n' +
        'b) Strategy:\n' +
        '• 5 600 = 5 000 + 600\n' +
        '• Add the hundreds: 600 + 800 = 1 400\n' +
        '  (6 hundreds + 8 hundreds = 14 hundreds)\n' +
        '• Add the thousands part back: 5 000 + 1 400 = 6 400',
      answer:
        'a) 6 400\n' +
        'b) 6 hundreds + 8 hundreds = 14 hundreds = 1 400, then 5 000 + 1 400 = 6 400',
    },

    // ── SECTION 6 — Money Word Problems ─────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Sipho has R2 350 and earns R1 400 doing chores.\n\n' +
        'How much does he have altogether?\n' +
        'Write only the number, without the R symbol (no spaces or commas).',
      // 2 350 + 1 400 = 3 750
      correctAnswer: '3750',
      explanation:
        'R2 350 + R1 400:\n' +
        '• Units: 0 + 0 = 0\n' +
        '• Tens: 5 + 0 = 5\n' +
        '• Hundreds: 3 + 4 = 7\n' +
        '• Thousands: 2 + 1 = 3\n\n' +
        'Sipho has R3 750 altogether.',
      answer: 'R3 750',
    },

    {
      difficulty: 'Medium',
      checkMode: 'self',
      question:
        'A television costs R4 999. Mama has R2 875.\n\n' +
        'How much more money does she need to buy the television? Show all your working.',
      explanation:
        'R4 999 − R2 875:\n' +
        '• Units: 9 − 5 = 4\n' +
        '• Tens: 9 − 7 = 2\n' +
        '• Hundreds: 9 − 8 = 1\n' +
        '• Thousands: 4 − 2 = 2\n\n' +
        'Mama needs R2 124 more.',
      answer: 'R2 124',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Lerato has R5 000. She buys school shoes for R1 349 and a school bag for R875.\n\n' +
        'How much money does she have left? Show all working step by step.',
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
        'Lerato has R2 776 left.',
      answer: 'R2 776',
    },

  ],
}
