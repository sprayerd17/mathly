import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// numerator      → blue   (#2563eb)
// denominator    → red    (#dc2626)
// fraction value → green  (#16a34a)
const nu = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const de = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const fv = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const cd = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const ef = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

// ─── Stacked fraction helper ──────────────────────────────────────────────────
// Renders a vertical fraction with blue numerator over red denominator
const fr = (n: string, d: string) =>
  `<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.15;gap:0;margin:0 2px;">` +
  `<span style="color:#2563eb;font-weight:700;border-bottom:1.5px solid #374151;padding:0 3px 1px;font-size:0.9em;">${n}</span>` +
  `<span style="color:#dc2626;font-weight:700;padding:1px 3px 0;font-size:0.9em;">${d}</span>` +
  `</span>`

export const topicData: TopicData = {
  title: 'Gewone Breuke',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — BREUKE AS DELE VAN ʼN GEHEEL EN DELE VAN ʼN GROEP
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'fractions-parts-whole-group',
      title: 'Breuke as Dele van ʼn Geheel en Dele van ʼn Groep',
      icon: '½',

      explanation:
        // ── Intro ─────────────────────────────────────────────────────────────
        `<p style="margin-bottom:14px;">ʼn <strong>Breuk</strong> beskryf <strong>gelyke dele</strong>. Dit kan gelyke dele van ʼn <strong>geheel</strong> beskryf (soos ʼn vorm wat in gelyke afdelings verdeel is) of gelyke dele van ʼn <strong>groep</strong> (soos ʼn versameling voorwerpe). In Graad 5 brei ons ons kennis uit om <strong>negendes, tiendes, elfdes en twaalfdes</strong> in te sluit.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('teller')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${de('noemer')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${fv('breukwaarde')}</span>` +
        `</div>` +

        // ── Key terms heading ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +

        // ── Numerator / Denominator cards ─────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:14px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:8px;">Teller</p>` +
        `<p style="font-size:28px;font-weight:700;color:#2563eb;margin-bottom:8px;line-height:1;">3</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die <strong>${nu('boonste getal')}</strong> — hoeveel dele jy <strong>het</strong>.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:16px 18px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#dc2626;margin-bottom:8px;">Noemer</p>` +
        `<p style="font-size:28px;font-weight:700;color:#dc2626;margin-bottom:8px;line-height:1;">8</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die <strong>${de('onderste getal')}</strong> — in hoeveel gelyke dele die geheel verdeel <strong>is</strong>.</p>` +
        `</div>` +

        `</div>` +

        // ── Fraction visual ────────────────────────────────────────────────────
        `<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;margin-bottom:20px;text-align:center;">` +
        `<p style="color:#374151;font-size:14px;margin:0;">Byvoorbeeld: ${fr('3','8')} beteken jy het <strong>${nu('3')}</strong> uit <strong>${de('8')}</strong> gelyke dele.</p>` +
        `</div>` +

        // ── New fractions heading ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Nuwe breuke in Graad 5</p>` +

        // ── Four new fraction cards ────────────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 12px;text-align:center;">` +
        `<div style="font-size:24px;line-height:1.4;margin-bottom:8px;">${fr('1','9')}</div>` +
        `<p style="font-weight:600;color:#0f1f3d;font-size:14px;margin:0;">Negende</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 12px;text-align:center;">` +
        `<div style="font-size:24px;line-height:1.4;margin-bottom:8px;">${fr('1','10')}</div>` +
        `<p style="font-weight:600;color:#0f1f3d;font-size:14px;margin:0;">Tiende</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 12px;text-align:center;">` +
        `<div style="font-size:24px;line-height:1.4;margin-bottom:8px;">${fr('1','11')}</div>` +
        `<p style="font-weight:600;color:#0f1f3d;font-size:14px;margin:0;">Elfde</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 12px;text-align:center;">` +
        `<div style="font-size:24px;line-height:1.4;margin-bottom:8px;">${fr('1','12')}</div>` +
        `<p style="font-weight:600;color:#0f1f3d;font-size:14px;margin:0;">Twaalfde</p>` +
        `</div>` +

        `</div>` +

        // ── Fractions of a group heading ──────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;font-size:1.02em;">Vind ʼn breuk van ʼn groep</p>` +
        `<p style="margin-bottom:12px;font-size:14px;color:#374151;">Om ʼn breuk van ʼn groep te vind, gebruik ʼn tweestapmetode: vind eers <strong>een deel</strong>, en vermenigvuldig dan met die <strong>${nu('teller')}</strong>.</p>` +

        // ── Two-step method ───────────────────────────────────────────────────
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Deel die totaal deur die ${de('noemer')}</strong> — dit gee jou die waarde van een gelyke deel van die groep.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vermenigvuldig met die ${nu('teller')}</strong> — dit gee jou die waarde van daardie breuk van die groep.</p>` +
        `</div>` +

        `</div>` +

        // ── Example box ───────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:10px;font-size:14px;">Voorbeeld: Daar is 24 leerders en ${fr('3','8')} is meisies. Hoeveel meisies?</p>` +
        `<p style="font-size:14px;margin-bottom:5px;color:#374151;"><strong>Stap 1 — Vind ${fr('1','8')}:</strong> &nbsp; 24 ÷ ${de('8')} = ${fv('3')}</p>` +
        `<p style="font-size:14px;margin-bottom:8px;color:#374151;"><strong>Stap 2 — Vermenigvuldig met ${nu('3')}:</strong> &nbsp; ${fv('3')} × ${nu('3')} = ${fv('9')}</p>` +
        `<p style="font-size:15px;font-weight:700;color:#16a34a;margin:0;">${fv('9')} meisies ✓</p>` +
        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die groep moet altyd in <strong>gelyke dele</strong> verdeel word. Die ${de('noemer')} vertel jou hoeveel gelyke groepe om te maak. Die ${nu('teller')} vertel jou hoeveel van daardie groepe om te tel.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: What fraction of 36 is 9? ─────────────────────────────
        {
          question: `Watter breuk van ${fv('36')} is ${fv('9')}?`,
          answer: `${fv('9')} is ${fr('1','4')} van ${fv('36')}`,
          steps: [
            `<strong>Skryf as ʼn breuk:</strong> ${nu('9')} uit ${de('36')} gelyke dele = ${fr('9','36')}`,
            `<strong>Vereenvoudig — deel albei getalle deur ${fv('9')}:</strong> &nbsp; bo: ${nu('9')} ÷ 9 = ${nu('1')} &nbsp;&nbsp; onder: ${de('36')} ÷ 9 = ${de('4')}`,
            `<strong>Vereenvoudig:</strong> ${fr('9','36')} = ${fr('1','4')}`,
            `<strong>Antwoord:</strong> ${fv('9')} is ${fr('1','4')} van ${fv('36')} ✓`,
          ],
        },

        // ── Example 2: Find 5/9 of 63 ─────────────────────────────────────────
        {
          question: `Vind ${fr('5','9')} van ${fv('63')}.`,
          answer: `${fr('5','9')} van ${fv('63')} = ${fv('35')}`,
          steps: [
            `<strong>Stap 1 — Vind ${fr('1','9')} van ${fv('63')}:</strong> &nbsp; Deel deur die ${de('noemer')}: ${fv('63')} ÷ ${de('9')} = ${fv('7')}`,
            `<strong>Stap 2 — Vermenigvuldig met die ${nu('teller')}:</strong> &nbsp; ${fv('7')} × ${nu('5')} = ${fv('35')}`,
            `<strong>Antwoord:</strong> ${fr('5','9')} van ${fv('63')} = ${fv('35')} ✓`,
          ],
        },

        // ── Example 3: 48 marbles — red and blue ─────────────────────────────
        {
          question: `ʼn Sak het ${fv('48')} albasters. ${fr('3','8')} is rooi en ${fr('1','4')} is blou. Hoeveel is rooi en hoeveel is blou?`,
          answer: `Rooi: ${fv('18')} albasters. &nbsp; Blou: ${fv('12')} albasters.`,
          steps: [
            `<strong>Rooi albasters — vind ${fr('3','8')} van ${fv('48')}:</strong>`,
            `Stap 1: Vind ${fr('1','8')}: &nbsp; ${fv('48')} ÷ ${de('8')} = ${fv('6')}`,
            `Stap 2: Vermenigvuldig met ${nu('3')}: &nbsp; ${fv('6')} × ${nu('3')} = ${fv('18')} rooi albasters`,
            `<strong>Blou albasters — vind ${fr('1','4')} van ${fv('48')}:</strong>`,
            `Stap 1: Vind ${fr('1','4')}: &nbsp; ${fv('48')} ÷ ${de('4')} = ${fv('12')}`,
            `Stap 2: Vermenigvuldig met ${nu('1')}: &nbsp; ${fv('12')} × ${nu('1')} = ${fv('12')} blou albasters`,
            `<strong>Antwoord:</strong> Daar is ${fv('18')} rooi albasters en ${fv('12')} blou albasters ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // Q1 — Easy
        {
          difficulty: 'Easy' as const,
          question: `Vind ${fr('3','4')} van 48.`,
          answer: '36',
          checkMode: 'auto' as const,
          correctAnswer: '36',
        },

        // Q2 — Medium (3 parts)
        {
          difficulty: 'Medium' as const,
          question:
            `<p style="margin-bottom:8px;">Beantwoord elke deel:</p>` +
            `<p style="margin-bottom:4px;">a) Vind ${fr('5','9')} van 81</p>` +
            `<p style="margin-bottom:4px;">b) Vind ${fr('7','8')} van 64</p>` +
            `<p style="margin-bottom:0;">c) Watter breuk van 45 is 15?</p>`,
          answer: '',
          checkMode: 'auto' as const,
          parts: [
            { label: 'a)', correctAnswer: '45' },
            { label: 'b)', correctAnswer: '56' },
            { label: 'c)', correctAnswer: '1/3' },
          ],
        },

        // Q3 — Hard (4 parts, word problem)
        {
          difficulty: 'Hard' as const,
          question:
            `<p style="margin-bottom:8px;">ʼn Sak het 56 albasters. ${fr('3','8')} is rooi, ${fr('1','4')} is blou en die res is groen.</p>` +
            `<p style="margin-bottom:4px;">a) Hoeveel is rooi?</p>` +
            `<p style="margin-bottom:4px;">b) Hoeveel is blou?</p>` +
            `<p style="margin-bottom:4px;">c) Hoeveel is groen?</p>` +
            `<p style="margin-bottom:0;">d) Watter breuk is groen?</p>`,
          answer: '',
          checkMode: 'auto' as const,
          parts: [
            { label: 'a)', correctAnswer: '21' },
            { label: 'b)', correctAnswer: '14' },
            { label: 'c)', correctAnswer: '21' },
            { label: 'd)', correctAnswer: '3/8' },
          ],
        },
      ],

      diagramPlaceholder: 'Twee diagramme langs mekaar — links ʼn reghoek verdeel in 9 gelyke dele met 5 geskadueer wat 5/9 wys, regs ʼn groep van 63 kolletjies met 35 uitgelig wat 5/9 van 63 wys',

      videoPlaceholder: 'Kort video wat breuke as dele van ʼn geheel en dele van ʼn groep verduidelik, insluitend negendes tiendes elfdes en twaalfdes',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — VERGELYK EN ORDEN BREUKE MET VERSKILLENDE NOEMERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering-fractions-different-denominators',
      title: 'Vergelyk en Orden Breuke met Verskillende Noemers',
      icon: '<',

      explanation:
        // ── Intro ─────────────────────────────────────────────────────────────
        `<p style="margin-bottom:14px;">Om breuke met <strong>verskillende noemers</strong> te vergelyk, vind eers die <strong>${cd('Laagste Gemene Noemer (LGN)')}</strong>. Skakel albei breuke om na <strong>${ef('ekwivalente breuke')}</strong> met die LGN, en vergelyk dan die tellers. ʼn Groter teller beteken ʼn groter breuk.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('teller')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${de('noemer')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${cd('gemene noemer')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${ef('ekwivalente breuke')}</span>` +
        `</div>` +

        // ── Steps heading ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om breuke te vergelyk</p>` +

        // ── Three steps ───────────────────────────────────────────────────────
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vind die ${cd('LGN')}</strong> — die kleinste getal waarin albei ${de('noemers')} eweredig deel.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Skakel om na ${ef('ekwivalente breuke')}</strong> — vermenigvuldig die bo- en onderkant van elke breuk met wat ook al die ${de('noemer')} gelyk maak aan die ${cd('LGN')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vergelyk die ${nu('tellers')}</strong> — noudat die ${de('noemers')} dieselfde is, beteken ʼn groter ${nu('teller')} ʼn groter breuk.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Onthou</p>` +
        `<p style="margin:0;color:#166534;">Die ${cd('LGN')} is die <strong>Laagste Gemene Veelvoud (LGV)</strong> van die twee ${de('noemers')}. Sodra breuke dieselfde ${cd('noemer')} deel, is om hulle te vergelyk presies soos om heelgetalle te vergelyk.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: 2/3 vs 3/4 ────────────────────────────────────────────
        {
          question: `Watter is groter: ${fr('2','3')} of ${fr('3','4')}?`,
          answer: `${fr('3','4')} is groter as ${fr('2','3')}`,
          steps: [
            `<strong>Stap 1 — Vind die ${cd('LGN')} van ${de('3')} en ${de('4')}:</strong> &nbsp; ${cd('LGN')} = ${cd('12')}`,
            `<strong>Stap 2 — Skakel om na ${ef('ekwivalente breuke')} met ${cd('noemer 12')}:</strong>` +
              `<br>&nbsp;&nbsp;&nbsp;${fr('2','3')} = ${ef(fr('8','12'))} &nbsp;(vermenigvuldig bo en onder met 4)` +
              `<br>&nbsp;&nbsp;&nbsp;${fr('3','4')} = ${ef(fr('9','12'))} &nbsp;(vermenigvuldig bo en onder met 3)`,
            `<strong>Stap 3 — Vergelyk ${nu('tellers')}:</strong> &nbsp; ${nu('8')} < ${nu('9')}, &nbsp; dus ${ef(fr('8','12'))} < ${ef(fr('9','12'))}`,
            `<strong>Antwoord:</strong> ${fr('3','4')} is groter as ${fr('2','3')} ✓`,
          ],
        },

        // ── Example 2: Order 1/2, 2/5, 3/4 ──────────────────────────────────
        {
          question: `Orden van kleinste na grootste: ${fr('1','2')}, ${fr('2','5')}, ${fr('3','4')}`,
          answer: `${fr('2','5')}, ${fr('1','2')}, ${fr('3','4')}`,
          steps: [
            `<strong>Stap 1 — Vind die ${cd('LGN')} van ${de('2')}, ${de('5')} en ${de('4')}:</strong> &nbsp; ${cd('LGN')} = ${cd('20')}`,
            `<strong>Stap 2 — Skakel elke breuk om na ${ef('ekwivalente breuke')} met ${cd('noemer 20')}:</strong>` +
              `<br>&nbsp;&nbsp;&nbsp;${fr('1','2')} = ${ef(fr('10','20'))} &nbsp;(× 10)` +
              `<br>&nbsp;&nbsp;&nbsp;${fr('2','5')} = ${ef(fr('8','20'))} &nbsp;(× 4)` +
              `<br>&nbsp;&nbsp;&nbsp;${fr('3','4')} = ${ef(fr('15','20'))} &nbsp;(× 5)`,
            `<strong>Stap 3 — Orden volgens ${nu('teller')}:</strong> &nbsp; ${nu('8')} < ${nu('10')} < ${nu('15')}`,
            `<strong>Antwoord:</strong> ${fr('2','5')}, ${fr('1','2')}, ${fr('3','4')} ✓`,
          ],
        },

        // ── Example 3: 5/6 vs 7/9 ────────────────────────────────────────────
        {
          question: `Vergelyk ${fr('5','6')} en ${fr('7','9')}`,
          answer: `${fr('5','6')} is groter as ${fr('7','9')}`,
          steps: [
            `<strong>Stap 1 — Vind die ${cd('LGN')} van ${de('6')} en ${de('9')}:</strong> &nbsp; ${cd('LGN')} = ${cd('18')}`,
            `<strong>Stap 2 — Skakel om na ${ef('ekwivalente breuke')} met ${cd('noemer 18')}:</strong>` +
              `<br>&nbsp;&nbsp;&nbsp;${fr('5','6')} = ${ef(fr('15','18'))} &nbsp;(× 3)` +
              `<br>&nbsp;&nbsp;&nbsp;${fr('7','9')} = ${ef(fr('14','18'))} &nbsp;(× 2)`,
            `<strong>Stap 3 — Vergelyk ${nu('tellers')}:</strong> &nbsp; ${nu('15')} > ${nu('14')}, &nbsp; dus ${ef(fr('15','18'))} > ${ef(fr('14','18'))}`,
            `<strong>Antwoord:</strong> ${fr('5','6')} is groter as ${fr('7','9')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // Q4 — Easy
        {
          difficulty: 'Easy' as const,
          question: `Watter is groter: ${fr('3','4')} of ${fr('5','6')}?`,
          answer: '5/6',
          checkMode: 'auto' as const,
          correctAnswer: '5/6',
        },

        // Q5 — Medium (2 parts)
        {
          difficulty: 'Medium' as const,
          question:
            `<p style="margin-bottom:8px;">Beantwoord elke deel:</p>` +
            `<p style="margin-bottom:4px;">a) Watter is groter: ${fr('4','5')} of ${fr('7','9')}?</p>` +
            `<p style="margin-bottom:0;">b) Orden van kleinste na grootste: ${fr('2','3')}, ${fr('3','4')}, ${fr('5','8')}</p>`,
          answer: '',
          checkMode: 'auto' as const,
          parts: [
            { label: 'a)', correctAnswer: '4/5' },
            { label: 'b)', correctAnswer: '5/8, 2/3, 3/4' },
          ],
        },

        // Q6 — Hard (self-mark — Thabo's misconception)
        {
          difficulty: 'Hard' as const,
          question: `Thabo sê ${fr('5','6')} > ${fr('7','8')} omdat 6 kleiner is as 8. Is hy korrek? Wys jou werk met gemene noemers.`,
          answer: [
            `Stap 1: LGN van 6 en 8 is 24`,
            `Stap 2: ${fr('5','6')} = ${fr('20','24')} en ${fr('7','8')} = ${fr('21','24')}`,
            `Stap 3: ${fr('20','24')} < ${fr('21','24')}`,
            `Antwoord: Nee, Thabo is verkeerd. ${fr('7','8')} is groter as ${fr('5','6')}. Jy kan nie breuke vergelyk deur net na die noemers te kyk nie.`,
          ].join('<br>'),
          checkMode: 'self' as const,
        },
      ],

      diagramPlaceholder: 'Twee breukstawe wat 2/3 en 3/4 toon met gemene noemer 12 gebruik om hulle te vergelyk',

      videoPlaceholder: 'Kort video wat wys hoe om breuke met verskillende noemers te vergelyk deur die laagste gemene noemer te gebruik',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — EKWIVALENTE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equivalent-fractions',
      title: 'Ekwivalente Breuke',
      icon: '=',

      explanation:
        // ── Intro ─────────────────────────────────────────────────────────────
        `<p style="margin-bottom:14px;"><strong>Ekwivalente breuke</strong> is verskillende breuke wat <strong>dieselfde hoeveelheid</strong> voorstel. In Graad 5 vind ons ekwivalente breuke deur die teller en noemer met <strong>dieselfde getal</strong> te <strong>vermenigvuldig of te deel</strong>.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('oorspronklike breuk')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${de('vermenigvuldiger')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${fv('ekwivalente breuk')}</span>` +
        `</div>` +

        // ── Rule box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Reël</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vermenigvuldig <strong>of</strong> deel <strong>albei</strong> die ${nu('teller')} en ${nu('noemer')} deur die <strong>${de('selfde getal')}</strong> om ʼn ${fv('ekwivalente breuk')} te vind. Die waarde van die breuk verander nie.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Find three fractions equivalent to 2/5 ────────────────
        {
          question: `Vind drie breuke wat ekwivalent is aan ${fr('2','5')}.`,
          answer: `${fv(fr('4','10'))}, ${fv(fr('6','15'))} en ${fv(fr('8','20'))} is almal ekwivalent aan ${nu(fr('2','5'))}`,
          steps: [
            `<strong>Stap 1 — Vermenigvuldig met ${de('2/2')}:</strong> &nbsp; ${nu('2')} × ${de('2')} ÷ (${nu('5')} × ${de('2')}) = ${fv(fr('4','10'))}`,
            `<strong>Stap 2 — Vermenigvuldig met ${de('3/3')}:</strong> &nbsp; ${nu('2')} × ${de('3')} ÷ (${nu('5')} × ${de('3')}) = ${fv(fr('6','15'))}`,
            `<strong>Stap 3 — Vermenigvuldig met ${de('4/4')}:</strong> &nbsp; ${nu('2')} × ${de('4')} ÷ (${nu('5')} × ${de('4')}) = ${fv(fr('8','20'))}`,
            `<strong>Antwoord:</strong> ${fv(fr('4','10'))}, ${fv(fr('6','15'))} en ${fv(fr('8','20'))} is almal ekwivalent aan ${nu(fr('2','5'))} ✓`,
          ],
        },

        // ── Example 2: Simplify 18/24 to its simplest form ───────────────────
        {
          question: `Vereenvoudig ${nu(fr('18','24'))} tot sy eenvoudigste vorm.`,
          answer: `${nu(fr('18','24'))} vereenvoudig is ${fv(fr('3','4'))}`,
          steps: [
            `<strong>Stap 1 — Vind die grootste gemene faktor van ${nu('18')} en ${nu('24')}:</strong> &nbsp; Die grootste gemene faktor is ${de('6')}`,
            `<strong>Stap 2 — Deel albei deur ${de('6')}:</strong> &nbsp; ${nu('18')} ÷ ${de('6')} = ${fv('3')} &nbsp;&nbsp; ${nu('24')} ÷ ${de('6')} = ${fv('4')}`,
            `<strong>Antwoord:</strong> ${nu(fr('18','24'))} vereenvoudig is ${fv(fr('3','4'))} ✓`,
          ],
        },

        // ── Example 3: Fill in the missing number: 3/7 = □/28 ────────────────
        {
          question: `Vul die ontbrekende getal in: ${nu(fr('3','7'))} = ${fv('□')}${fv('/28')}`,
          answer: `${nu(fr('3','7'))} = ${fv(fr('12','28'))}`,
          steps: [
            `<strong>Stap 1 — Met wat het ons ${nu('7')} vermenigvuldig om ${fv('28')} te kry?</strong> &nbsp; ${nu('7')} × ${de('4')} = ${fv('28')}`,
            `<strong>Stap 2 — Vermenigvuldig die ${nu('teller')} met dieselfde getal:</strong> &nbsp; ${nu('3')} × ${de('4')} = ${fv('12')}`,
            `<strong>Antwoord:</strong> ${nu(fr('3','7'))} = ${fv(fr('12','28'))} ✓`,
          ],
        },

        // ── Example 4: Are 4/6 and 10/15 equivalent? ─────────────────────────
        {
          question: `Is ${nu(fr('4','6'))} en ${nu(fr('10','15'))} ekwivalent?`,
          answer: `Ja — albei is ekwivalent aan ${fv(fr('2','3'))}`,
          steps: [
            `<strong>Stap 1 — Vereenvoudig ${nu(fr('4','6'))}:</strong> &nbsp; Deel albei deur ${de('2')}: ${nu('4')} ÷ ${de('2')} = ${fv('2')}, &nbsp; ${nu('6')} ÷ ${de('2')} = ${fv('3')} &nbsp;→&nbsp; ${fv(fr('2','3'))}`,
            `<strong>Stap 2 — Vereenvoudig ${nu(fr('10','15'))}:</strong> &nbsp; Deel albei deur ${de('5')}: ${nu('10')} ÷ ${de('5')} = ${fv('2')}, &nbsp; ${nu('15')} ÷ ${de('5')} = ${fv('3')} &nbsp;→&nbsp; ${fv(fr('2','3'))}`,
            `<strong>Antwoord:</strong> Ja — ${nu(fr('4','6'))} en ${nu(fr('10','15'))} is albei ekwivalent aan ${fv(fr('2','3'))} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // Q7 — Easy (self-mark)
        {
          difficulty: 'Easy' as const,
          question: `Vind twee breuke wat ekwivalent is aan ${fr('3','5')}.`,
          answer: [
            `Vermenigvuldig bo en onder met 2: ${nu('3')} × 2 = ${fv('6')}, ${de('5')} × 2 = ${fv('10')} → ${fv(fr('6','10'))}`,
            `Vermenigvuldig bo en onder met 3: ${nu('3')} × 3 = ${fv('9')}, ${de('5')} × 3 = ${fv('15')} → ${fv(fr('9','15'))}`,
            `Antwoord: ${fv(fr('6','10'))} en ${fv(fr('9','15'))} is ekwivalent aan ${fr('3','5')} (of enige geldige ekwivalente breuke) ✓`,
          ].join('<br>'),
          checkMode: 'self' as const,
        },

        // Q8 — Medium (3 parts — a and b input boxes, c self-mark)
        {
          difficulty: 'Medium' as const,
          question:
            `<p style="margin-bottom:8px;">Beantwoord elke deel:</p>` +
            `<p style="margin-bottom:4px;">a) Vul die ontbrekende getal in: ${fr('4','7')} = ${fv('□')}/${fv('28')}</p>` +
            `<p style="margin-bottom:4px;">b) Vereenvoudig ${fr('24','36')} tot sy eenvoudigste vorm</p>` +
            `<p style="margin-bottom:0;">c) Is ${fr('6','8')} en ${fr('9','12')} ekwivalent? Wys jou werk.</p>`,
          answer: '',
          checkMode: 'auto' as const,
          parts: [
            { label: 'a)', correctAnswer: '16' },
            { label: 'b)', correctAnswer: '2/3' },
            { label: 'c)', checkMode: 'self' as const, answer: 'Ja, albei vereenvoudig tot 3/4' },
          ],
        },

        // Q9 — Hard (self-mark)
        {
          difficulty: 'Hard' as const,
          question: `Lerato sê ${fr('15','20')} en ${fr('21','28')} is ekwivalent. Is sy korrek? Wys volledige werk deur albei breuke te vereenvoudig.`,
          answer: [
            `Stap 1: Vereenvoudig ${fr('15','20')} — deel deur 5: ${nu('15')} ÷ 5 = ${fv('3')}, ${de('20')} ÷ 5 = ${fv('4')} → ${fv(fr('3','4'))}`,
            `Stap 2: Vereenvoudig ${fr('21','28')} — deel deur 7: ${nu('21')} ÷ 7 = ${fv('3')}, ${de('28')} ÷ 7 = ${fv('4')} → ${fv(fr('3','4'))}`,
            `Antwoord: Ja — albei is gelyk aan ${fv(fr('3','4'))} dus is hulle ekwivalent ✓`,
          ].join('<br>'),
          checkMode: 'self' as const,
        },
      ],

      diagramPlaceholder: 'Drie reghoeke van gelyke grootte wat 2/5, 4/10 en 6/15 almal gelyk geskadueer toon om te bewys dat hulle ekwivalent is',

      videoPlaceholder: 'Kort video wat wys hoe om ekwivalente breuke te vind en breuke te vereenvoudig deur die grootste gemene faktor te gebruik',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — OPTEL EN AFTREK VAN BREUKE MET DIESELFDE NOEMER
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'adding-subtracting-fractions-same-denominator',
      title: 'Optel en Aftrek van Breuke met Dieselfde Noemer',
      icon: '+',

      explanation:
        // ── Intro ─────────────────────────────────────────────────────────────
        `<p style="margin-bottom:14px;">Wanneer breuke dieselfde <strong>noemer</strong> het, tel of trek die <strong>${nu('tellers')}</strong> af en hou die <strong>${de('noemer')}</strong> dieselfde. <strong>Moet nooit</strong> die noemers bytel of aftrek nie.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('tellers')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${de('noemer')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${fv('antwoord')}</span>` +
        `</div>` +

        // ── Rules heading ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reëls</p>` +

        // ── Addition and subtraction rule cards ───────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:8px;">Optel</p>` +
        `<p style="font-size:15px;font-weight:700;color:#374151;margin:0;">${nu('a')}/${de('c')} + ${nu('b')}/${de('c')} = ${fv('(a+b)')}/${de('c')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:16px 18px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#dc2626;margin-bottom:8px;">Aftrek</p>` +
        `<p style="font-size:15px;font-weight:700;color:#374151;margin:0;">${nu('a')}/${de('c')} − ${nu('b')}/${de('c')} = ${fv('(a−b)')}/${de('c')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die ${de('noemer')} bly dieselfde — net die ${nu('tellers')} word bygetel of afgetrek. Vereenvoudig jou antwoord altyd indien moontlik.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: 3/8 + 4/8 ─────────────────────────────────────────────
        {
          question: `Bereken ${fr('3','8')} + ${fr('4','8')}`,
          answer: `${fv(fr('7','8'))}`,
          steps: [
            `<strong>Stap 1 — Dieselfde noemer — hou ${de('8')}.</strong>`,
            `<strong>Stap 2 — Tel die ${nu('tellers')} bymekaar: </strong> &nbsp; ${nu('3')} + ${nu('4')} = ${fv('7')}`,
            `<strong>Antwoord:</strong> ${fv(fr('7','8'))} ✓`,
          ],
        },

        // ── Example 2: 7/10 - 3/10 ───────────────────────────────────────────
        {
          question: `Bereken ${fr('7','10')} − ${fr('3','10')}`,
          answer: `${fv(fr('4','10'))} = ${fv(fr('2','5'))}`,
          steps: [
            `<strong>Stap 1 — Dieselfde noemer — hou ${de('10')}.</strong>`,
            `<strong>Stap 2 — Trek die ${nu('tellers')} af: </strong> &nbsp; ${nu('7')} − ${nu('3')} = ${fv('4')}`,
            `<strong>Stap 3 — Vereenvoudig: </strong> &nbsp; ${fv(fr('4','10'))} ÷ ${de('2/2')} = ${fv(fr('2','5'))}`,
            `<strong>Antwoord:</strong> ${fv(fr('4','10'))} wat vereenvoudig tot ${fv(fr('2','5'))} ✓`,
          ],
        },

        // ── Example 3: 2/9 + 4/9 + 1/9 ──────────────────────────────────────
        {
          question: `Bereken ${fr('2','9')} + ${fr('4','9')} + ${fr('1','9')}`,
          answer: `${fv(fr('7','9'))}`,
          steps: [
            `<strong>Stap 1 — Dieselfde noemer — hou ${de('9')}.</strong>`,
            `<strong>Stap 2 — Tel al die ${nu('tellers')} bymekaar: </strong> &nbsp; ${nu('2')} + ${nu('4')} + ${nu('1')} = ${fv('7')}`,
            `<strong>Antwoord:</strong> ${fv(fr('7','9'))} ✓`,
          ],
        },

        // ── Example 4: Lerato pizza problem ──────────────────────────────────
        {
          question: `Lerato het ${fr('3','12')} van ʼn pizza vir middagete geëet en ${fr('5','12')} vir aandete. a) Watter breuk het sy altesaam geëet? b) Watter breuk is oor?`,
          answer: `Sy het ${fv(fr('2','3'))} van die pizza geëet en ${fv(fr('1','3'))} is oor.`,
          steps: [
            `<strong>Deel a — Tel wat sy geëet het bymekaar: </strong> &nbsp; ${nu('3')} + ${nu('5')} = ${fv('8')}, &nbsp; dus ${fr('3','12')} + ${fr('5','12')} = ${fv(fr('8','12'))}`,
            `<strong>Vereenvoudig: </strong> &nbsp; ${fv(fr('8','12'))} ÷ ${de('4/4')} = ${fv(fr('2','3'))}`,
            `<strong>Deel b — Vind wat oor is: </strong> &nbsp; ${fr('12','12')} − ${fr('8','12')} = ${fv(fr('4','12'))}`,
            `<strong>Vereenvoudig: </strong> &nbsp; ${fv(fr('4','12'))} ÷ ${de('4/4')} = ${fv(fr('1','3'))}`,
            `<strong>Antwoord:</strong> Sy het ${fv(fr('2','3'))} van die pizza geëet en ${fv(fr('1','3'))} is oor ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // Q10 — Easy
        {
          difficulty: 'Easy' as const,
          question: `Bereken ${fr('4','9')} + ${fr('3','9')}.`,
          answer: '7/9',
          checkMode: 'auto' as const,
          correctAnswer: '7/9',
        },

        // Q11 — Medium (3 parts)
        {
          difficulty: 'Medium' as const,
          question:
            `<p style="margin-bottom:8px;">Bereken elk van die volgende:</p>` +
            `<p style="margin-bottom:4px;">a) ${fr('5','12')} + ${fr('4','12')} + ${fr('2','12')}</p>` +
            `<p style="margin-bottom:4px;">b) ${fr('9','10')} − ${fr('3','10')}</p>` +
            `<p style="margin-bottom:0;">c) ${fr('7','8')} − ${fr('2','8')} + ${fr('1','8')}</p>`,
          answer: '',
          checkMode: 'auto' as const,
          parts: [
            { label: 'a)', correctAnswer: '11/12' },
            { label: 'b)', correctAnswer: '3/5' },
            { label: 'c)', correctAnswer: '3/4' },
          ],
        },

        // Q12 — Hard (4 parts, word problem)
        {
          difficulty: 'Hard' as const,
          question:
            `<p style="margin-bottom:8px;">ʼn Pizza word in 12 gelyke skywe gesny. Sipho het ${fr('4','12')} geëet, Thabo het ${fr('3','12')} geëet en Lerato het ${fr('2','12')} geëet.</p>` +
            `<p style="margin-bottom:4px;">a) Watter breuk het hulle altesaam geëet?</p>` +
            `<p style="margin-bottom:4px;">b) Watter breuk is oor?</p>` +
            `<p style="margin-bottom:4px;">c) Vereenvoudig albei antwoorde tot hul eenvoudigste vorm.</p>` +
            `<p style="margin-bottom:0;">d) Hoeveel skywe is oor?</p>`,
          answer: '',
          checkMode: 'auto' as const,
          parts: [
            { label: 'a)', correctAnswer: '9/12' },
            { label: 'b)', correctAnswer: '3/12' },
            { label: 'c)', correctAnswer: '3/4 and 1/4' },
            { label: 'd)', correctAnswer: '3' },
          ],
        },
      ],

      diagramPlaceholder: 'Staafmodel wat wys dat 3/8 plus 4/8 gelyk is aan 7/8 met elke deel kleur-gekodeer en geëtiketteer',

      videoPlaceholder: 'Kort video wat wys hoe om breuke met dieselfde noemer op te tel en af te trek deur staafmodelle te gebruik',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — VIND ʼN BREUK VAN ʼN HEELGETAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'fraction-of-whole-number',
      title: 'Vind ʼn Breuk van ʼn Heelgetal',
      icon: '×',

      explanation:
        // ── Intro ─────────────────────────────────────────────────────────────
        `<p style="margin-bottom:14px;">Om ʼn breuk van ʼn heelgetal te vind, <strong>deel deur die ${de('noemer')}</strong> en <strong>vermenigvuldig dan met die ${nu('teller')}</strong>.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${de('noemer')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('teller')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${fv('finale antwoord')}</span>` +
        `</div>` +

        // ── Rule box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Reël</p>` +
        `<p style="margin:0;color:#1e3a8a;">breuk van ʼn heelgetal = heelgetal ÷ ${de('noemer')} × ${nu('teller')}</p>` +
        `</div>` +

        // ── Steps heading ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe</p>` +

        // ── Two steps ─────────────────────────────────────────────────────────
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Deel die heelgetal deur die ${de('noemer')}</strong> — dit gee jou die waarde van een gelyke deel.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vermenigvuldig met die ${nu('teller')}</strong> — dit gee jou die ${fv('finale antwoord')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Onthou</p>` +
        `<p style="margin:0;color:#166534;"><strong>Deel</strong> deur die ${de('noemer')} eers, en <strong>vermenigvuldig</strong> dan met die ${nu('teller')}. Die heelgetal moet presies deelbaar wees deur die ${de('noemer')} — kyk dit na voor jy begin.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Find 3/5 of 45 ────────────────────────────────────────
        {
          question: `Vind ${fr('3','5')} van 45`,
          answer: `${fr('3','5')} van 45 = ${fv('27')}`,
          steps: [
            `<strong>Stap 1 — Deel deur die ${de('noemer')}: </strong> &nbsp; 45 ÷ ${de('5')} = 9`,
            `<strong>Stap 2 — Vermenigvuldig met die ${nu('teller')}: </strong> &nbsp; 9 × ${nu('3')} = ${fv('27')}`,
            `<strong>Antwoord:</strong> ${fr('3','5')} van 45 = ${fv('27')} ✓`,
          ],
        },

        // ── Example 2: Find 7/9 of 63 ────────────────────────────────────────
        {
          question: `Vind ${fr('7','9')} van 63`,
          answer: `${fr('7','9')} van 63 = ${fv('49')}`,
          steps: [
            `<strong>Stap 1 — Deel deur die ${de('noemer')}: </strong> &nbsp; 63 ÷ ${de('9')} = 7`,
            `<strong>Stap 2 — Vermenigvuldig met die ${nu('teller')}: </strong> &nbsp; 7 × ${nu('7')} = ${fv('49')}`,
            `<strong>Antwoord:</strong> ${fr('7','9')} van 63 = ${fv('49')} ✓`,
          ],
        },

        // ── Example 3: School learners walking ───────────────────────────────
        {
          question: `ʼn Skool het 360 leerders. ${fr('5','8')} van hulle stap skool toe. Hoeveel leerders stap?`,
          answer: `${fv('225')} leerders stap skool toe`,
          steps: [
            `<strong>Stap 1 — Vind ${fr('5','8')} van 360.</strong>`,
            `<strong>Stap 2 — Deel deur die ${de('noemer')}: </strong> &nbsp; 360 ÷ ${de('8')} = 45`,
            `<strong>Stap 3 — Vermenigvuldig met die ${nu('teller')}: </strong> &nbsp; 45 × ${nu('5')} = ${fv('225')}`,
            `<strong>Antwoord:</strong> ${fv('225')} leerders stap skool toe ✓`,
          ],
        },

        // ── Example 4: Sipho salary savings ──────────────────────────────────
        {
          question: `Sipho verdien R4 200 per maand. Hy spaar ${fr('2','7')} van sy salaris. Hoeveel spaar hy?`,
          answer: `Sipho spaar ${fv('R1 200')} per maand`,
          steps: [
            `<strong>Stap 1 — Vind ${fr('2','7')} van 4 200.</strong>`,
            `<strong>Stap 2 — Deel deur die ${de('noemer')}: </strong> &nbsp; 4 200 ÷ ${de('7')} = 600`,
            `<strong>Stap 3 — Vermenigvuldig met die ${nu('teller')}: </strong> &nbsp; 600 × ${nu('2')} = ${fv('1 200')}`,
            `<strong>Antwoord:</strong> Sipho spaar ${fv('R1 200')} per maand ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // Q13 — Easy
        {
          difficulty: 'Easy' as const,
          question: `Vind ${fr('2','3')} van 36.`,
          answer: '24',
          checkMode: 'auto' as const,
          correctAnswer: '24',
        },

        // Q14 — Medium (3 parts)
        {
          difficulty: 'Medium' as const,
          question:
            `<p style="margin-bottom:8px;">Beantwoord elke deel:</p>` +
            `<p style="margin-bottom:4px;">a) Vind ${fr('4','7')} van 56</p>` +
            `<p style="margin-bottom:4px;">b) Vind ${fr('5','6')} van 72</p>` +
            `<p style="margin-bottom:0;">c) Vind ${fr('3','11')} van 99</p>`,
          answer: '',
          checkMode: 'auto' as const,
          parts: [
            { label: 'a)', correctAnswer: '32' },
            { label: 'b)', correctAnswer: '60' },
            { label: 'c)', correctAnswer: '27' },
          ],
        },

        // Q15 — Hard (4 parts, word problem)
        {
          difficulty: 'Hard' as const,
          question:
            `<p style="margin-bottom:8px;">ʼn Skool het 420 leerders. ${fr('3','7')} stap skool toe, ${fr('2','5')} kom per motor en die res kom per bus.</p>` +
            `<p style="margin-bottom:4px;">a) Hoeveel stap?</p>` +
            `<p style="margin-bottom:4px;">b) Hoeveel kom per motor?</p>` +
            `<p style="margin-bottom:4px;">c) Hoeveel kom per bus?</p>` +
            `<p style="margin-bottom:0;">d) Watter breuk kom per bus?</p>`,
          answer: '',
          checkMode: 'auto' as const,
          parts: [
            { label: 'a)', correctAnswer: '180' },
            { label: 'b)', correctAnswer: '168' },
            { label: 'c)', correctAnswer: '72' },
            { label: 'd)', correctAnswer: '6/35' },
          ],
        },
      ],

      videoPlaceholder: 'Kort video wat wys hoe om ʼn breuk van ʼn heelgetal te vind deur eers deur die noemer te deel en dan met die teller te vermenigvuldig',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 6 — GEMENGDE GETALLE EN ONEGTE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mixed-numbers-improper-fractions',
      title: 'Gemengde Getalle en Onegte Breuke',
      icon: '↔',

      explanation:
        // ── Intro ─────────────────────────────────────────────────────────────
        `<p style="margin-bottom:14px;">ʼn <strong>Gemengde getal</strong> het ʼn heelgetaldeel en ʼn breukdeel — byvoorbeeld ${nu('2')} ${de('3')}/${fv('4')}. ʼn <strong>Onegte breuk</strong> het ʼn teller wat groter is as sy noemer — byvoorbeeld ${de('11')}/${fv('4')}. In Graad 5 leer ons om tussen die twee om te skakel.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('heelgetal')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${de('teller')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${fv('noemer')}</span>` +
        `</div>` +

        // ── Key terms ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +

        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:8px;">Gemengde Getal</p>` +
        `<p style="font-size:24px;font-weight:700;margin-bottom:8px;line-height:1.3;">${nu('3')} ${de('1')}/${fv('2')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn <strong>${nu('heelgetal')}</strong> en ʼn <strong>breuk</strong> saam.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:16px 18px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#dc2626;margin-bottom:8px;">Onegte Breuk</p>` +
        `<p style="font-size:24px;font-weight:700;margin-bottom:8px;line-height:1.3;">${de('7')}/${fv('2')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die <strong>${de('teller')}</strong> is groter as die <strong>${fv('noemer')}</strong>.</p>` +
        `</div>` +

        `</div>` +

        // ── Converting mixed → improper ───────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Skakel ʼn gemengde getal om na ʼn onegte breuk</p>` +

        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vermenigvuldig die ${nu('heelgetal')} met die ${fv('noemer')}</strong></p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Tel die ${de('teller')} by</strong></p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Hou dieselfde ${fv('noemer')}</strong></p>` +
        `</div>` +

        `</div>` +

        // ── Converting improper → mixed ───────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Skakel ʼn onegte breuk om na ʼn gemengde getal</p>` +

        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Deel ${de('teller')} deur ${fv('noemer')}</strong></p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Die kwosiënt is die ${nu('heelgetal')}</strong></p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Die res is die nuwe ${de('teller')}</strong></p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Hou dieselfde ${fv('noemer')}</strong></p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou</p>` +
        `<p style="margin:0;color:#1e3a8a;">Gemengd → onegte: <strong>(${nu('heelgetal')} × ${fv('noemer')}) + ${de('teller')}</strong>, hou die ${fv('noemer')}. &nbsp; Onegte → gemengd: deel ${de('teller')} deur ${fv('noemer')}, die kwosiënt is die ${nu('heelgetal')} en die res is die nuwe ${de('teller')}.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Convert 2 3/4 to an improper fraction ─────────────────
        {
          question: `Skakel ${nu('2')} ${de('3')}/${fv('4')} om na ʼn onegte breuk`,
          answer: `${de('11')}/${fv('4')}`,
          steps: [
            `<strong>Stap 1 — Vermenigvuldig die ${nu('heelgetal')} met die ${fv('noemer')}:</strong> &nbsp; ${nu('2')} × ${fv('4')} = 8`,
            `<strong>Stap 2 — Tel die ${de('teller')} by:</strong> &nbsp; 8 + ${de('3')} = ${de('11')}`,
            `<strong>Stap 3 — Hou die ${fv('noemer')}:</strong> &nbsp; ${fv('4')}`,
            `<strong>Antwoord:</strong> ${nu('2')} ${de('3')}/${fv('4')} = ${de('11')}/${fv('4')} ✓`,
          ],
        },

        // ── Example 2: Convert 3 2/5 to an improper fraction ─────────────────
        {
          question: `Skakel ${nu('3')} ${de('2')}/${fv('5')} om na ʼn onegte breuk`,
          answer: `${de('17')}/${fv('5')}`,
          steps: [
            `<strong>Stap 1 — Vermenigvuldig die ${nu('heelgetal')} met die ${fv('noemer')}:</strong> &nbsp; ${nu('3')} × ${fv('5')} = 15`,
            `<strong>Stap 2 — Tel die ${de('teller')} by:</strong> &nbsp; 15 + ${de('2')} = ${de('17')}`,
            `<strong>Stap 3 — Hou die ${fv('noemer')}:</strong> &nbsp; ${fv('5')}`,
            `<strong>Antwoord:</strong> ${nu('3')} ${de('2')}/${fv('5')} = ${de('17')}/${fv('5')} ✓`,
          ],
        },

        // ── Example 3: Convert 13/4 to a mixed number ─────────────────────────
        {
          question: `Skakel ${de('13')}/${fv('4')} om na ʼn gemengde getal`,
          answer: `${nu('3')} ${de('1')}/${fv('4')}`,
          steps: [
            `<strong>Stap 1 — Deel ${de('teller')} deur ${fv('noemer')}:</strong> &nbsp; ${de('13')} ÷ ${fv('4')} = ${nu('3')} res ${de('1')}`,
            `<strong>Stap 2 — Die kwosiënt is die ${nu('heelgetal')}:</strong> &nbsp; ${nu('3')}`,
            `<strong>Stap 3 — Die res is die nuwe ${de('teller')}:</strong> &nbsp; ${de('1')}`,
            `<strong>Antwoord:</strong> ${de('13')}/${fv('4')} = ${nu('3')} ${de('1')}/${fv('4')} ✓`,
          ],
        },

        // ── Example 4: Convert 22/6 to a mixed number and simplify ───────────
        {
          question: `Skakel ${de('22')}/${fv('6')} om na ʼn gemengde getal en vereenvoudig`,
          answer: `${nu('3')} ${de('2')}/${fv('3')}`,
          steps: [
            `<strong>Stap 1 — Deel ${de('teller')} deur ${fv('noemer')}:</strong> &nbsp; ${de('22')} ÷ ${fv('6')} = ${nu('3')} res ${de('4')}`,
            `<strong>Stap 2 — Skryf as ʼn gemengde getal:</strong> &nbsp; ${nu('3')} ${de('4')}/${fv('6')}`,
            `<strong>Stap 3 — Vereenvoudig ${de('4')}/${fv('6')} deur deur 2 te deel:</strong> &nbsp; ${de('4')} ÷ 2 = ${de('2')}, &nbsp; ${fv('6')} ÷ 2 = ${fv('3')}`,
            `<strong>Antwoord:</strong> ${de('22')}/${fv('6')} = ${nu('3')} ${de('2')}/${fv('3')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // Q16 — Easy
        {
          difficulty: 'Easy' as const,
          question: `Skakel ${nu('2')} ${de('3')}/${fv('5')} om na ʼn onegte breuk.`,
          answer: '13/5',
          checkMode: 'auto' as const,
          correctAnswer: '13/5',
        },

        // Q17 — Medium (3 parts)
        {
          difficulty: 'Medium' as const,
          question:
            `<p style="margin-bottom:8px;">Beantwoord elke deel:</p>` +
            `<p style="margin-bottom:4px;">a) Skakel ${nu('3')} ${de('4')}/${fv('7')} om na ʼn onegte breuk</p>` +
            `<p style="margin-bottom:4px;">b) Skakel ${fr('19','4')} om na ʼn gemengde getal</p>` +
            `<p style="margin-bottom:0;">c) Skakel ${fr('23','6')} om na ʼn gemengde getal en vereenvoudig</p>`,
          answer: '',
          checkMode: 'auto' as const,
          parts: [
            { label: 'a)', correctAnswer: '25/7' },
            { label: 'b)', correctAnswer: '4 3/4' },
            { label: 'c)', correctAnswer: '3 5/6' },
          ],
        },

        // Q18 — Hard (self-mark — Thabo's misconception)
        {
          difficulty: 'Hard' as const,
          question: `Thabo sê ${nu('4')} ${de('2')}/${fv('3')} is dieselfde as ${fr('15','3')}. Is hy korrek? Wys jou volledige werk.`,
          answer: [
            `<strong>Stap 1 — Skakel ${nu('4')} ${de('2')}/${fv('3')} om na ʼn onegte breuk:</strong> &nbsp; ${nu('4')} × ${fv('3')} + ${de('2')} = 12 + 2 = ${de('14')} &nbsp;→&nbsp; ${fr('14','3')}`,
            `<strong>Stap 2 — Bereken ${fr('15','3')}:</strong> &nbsp; ${fv('15')} ÷ ${fv('3')} = ${fv('5')} wat ʼn heelgetal is, nie gelyk aan ${nu('4')} ${de('2')}/${fv('3')} nie`,
            `<strong>Antwoord:</strong> Nee — Thabo is verkeerd. ${nu('4')} ${de('2')}/${fv('3')} = ${fr('14','3')}, nie ${fr('15','3')} nie.`,
          ].join('<br>'),
          checkMode: 'self' as const,
        },
      ],

      diagramPlaceholder: 'Getallelyn wat gemengde getalle en hul ekwivalente onegte breuke van 0 tot 3 toon met merke by elke half kwart en derde',

      videoPlaceholder: 'Kort video wat wys hoe om tussen gemengde getalle en onegte breuke om te skakel met stap-vir-stap uitgewerkte voorbeelde',
    },
  ],

  resultsSummary: {
    totalMarks: 38,
    messages: [
      {
        upTo: 12,
        text: `Hou aan oefen — breuke vat tyd om te bemeester. Hersien die studiegidse, druk dan Probeer Weer. Jy kan dit doen!`,
      },
      {
        upTo: 25,
        text: `Goeie poging! Jy maak regte vordering met breuke. Gaan terug en hersien die afdelings wat jy lastig gevind het, probeer dan weer.`,
      },
      {
        upTo: 33,
        text: `Goed gedaan! Jy het ʼn stewige begrip van gewone breuke. ʼn Bietjie meer oefening en jy sal aan die top wees!`,
      },
      {
        upTo: 38,
        text: `Uitstekend! Jy het gewone breuke bemeester. Uitmuntende werk — hou so aan!`,
      },
    ],
  },
}
