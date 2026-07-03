import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (functions and relationships roles) ────────────────────────
// input / x-values / equation (s2)              → blue   (#2563eb)
// output / y-values / gradient·intercept (s2)   → green  (#16a34a)
// equation (s1) / graph features / ordered pairs → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Funksies en Verwantskappe',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — DETERMINING INPUT/OUTPUT USING EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'determining-input-output-using-equations',
      title: 'Inset/Uitset Bepaal deur Vergelykings te Gebruik',
      icon: 'ƒ',
      explanation:
        `<p style="margin-bottom:16px;">Ons bepaal ${bl('insetwaardes')}, ${gr('uitsetwaardes')} of reëls vir patrone en verwantskappe deur vloeidiagramme, tabelle, formules en vergelykings te gebruik, en pas vervanging met selfvertroue toe om na onbekendes in albei rigtings op te los.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('inset')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('uitset')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vergelyking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die uitset vind (vervang die inset)</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Skryf die ${or('vergelyking')} en identifiseer die gegewe ${bl('inset')} (x-waarde).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Vervang x in die ${or('vergelyking')} met die ${bl('inset')}waarde en vereenvoudig.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Die resultaat is die ${gr('uitset')} (y-waarde).</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die inset vind (los die vergelyking op)</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Vervang y in die ${or('vergelyking')} met die gegewe ${gr('uitset')}waarde.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Gebruik inverse bewerkings op die ${or('vergelyking')} om x stap vir stap te isoleer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Die waarde van x is die ${bl('inset')}. Bevestig deur terug te vervang.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vervanging werk in albei rigtings</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jy die ${bl('inset')} ken, vervang dit om die ${gr('uitset')} te vind. Wanneer jy die ${gr('uitset')} ken, vervang dit vir y en los die ${or('vergelyking')} op om die ${bl('inset')} te vind. Dieselfde vergelyking word gebruik — slegs die onbekende verander.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gebruik y = 5x − 3 om y te vind wanneer x = 8.',
          answer: `y = ${gr('37')}`,
          steps: [
            `Skryf die ${or('vergelyking')}: y = 5x − 3. Die ${bl('inset')} is x = ${bl('8')}.`,
            `Vervang x = ${bl('8')}: y = 5(${bl('8')}) − 3`,
            `Bereken: y = 40 − 3 = ${gr('37')}`,
            `<strong>Antwoord:</strong> Wanneer x = ${bl('8')}, is y = ${gr('37')} ✓`,
          ],
        },
        {
          question: 'Gebruik y = 2x + 11 om x te vind wanneer y = 27.',
          answer: `x = ${bl('8')}`,
          steps: [
            `Skryf die ${or('vergelyking')}: y = 2x + 11. Die ${gr('uitset')} is y = ${gr('27')}.`,
            `Vervang y = ${gr('27')}: ${gr('27')} = 2x + 11`,
            `Trek 11 van albei kante af: ${gr('27')} − 11 = 2x → 16 = 2x`,
            `Deel albei kante deur 2: x = 16 ÷ 2 = ${bl('8')}`,
            `<strong>Antwoord:</strong> Wanneer y = ${gr('27')}, is x = ${bl('8')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Gebruik y = 6x − 4 om y te vind wanneer x = 5.',
          answer: '26',
          checkMode: 'auto',
          correctAnswer: '26',
          explanation: 'Vervang x = 5: y = 6(5) − 4 = 30 − 4 = 26 ✓',
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Gebruik y = 4x − 9 om x te vind wanneer y = 23.',
          answer: '8',
          checkMode: 'auto',
          correctAnswer: '8',
          explanation: 'Vervang y = 23: 23 = 4x − 9. Tel 9 by albei kante: 32 = 4x. Deel deur 4: x = 8 ✓',
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Sipho sê dat, met y = 3x + 10, wanneer y = 37, x = 9 is. Is hy korrek? Verduidelik.",
          answer: 'Ja — 37 = 3x + 10 gee 3x = 27, dus x = 9. Hy is korrek.',
          checkMode: 'self',
        },

        // ── Q4 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Vergelyking is y = 5x − 1. Beskryf die gradiënt en y-afsnit van sy grafiek.',
          answer: 'gradiënt = 5, y-afsnit = −1',
          checkMode: 'auto',
          correctAnswer: 'gradient=5, y-intercept=-1',
          correctAnswers: ['gradient=5, y-intercept=-1', 'gradient = 5, y-intercept = -1', 'gradient=5,y-intercept=-1', 'm=5, c=-1', 'm=5,c=-1', '5 and -1'],
          explanation: 'In die vergelyking y = mx + c, is m die gradiënt en c die y-afsnit. Hier is m = 5 en c = −1, dus gradiënt = 5 en y-afsnit = −1 ✓',
        },

        // ── Q5 Easy ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Tabel wys x: 0, 1, 2, 3 en y: 3, 8, 13, 18. Vind die vergelyking.',
          answer: 'y = 5x + 3',
          checkMode: 'auto',
          correctAnswer: 'y=5x+3',
          correctAnswers: ['y=5x+3', 'y = 5x + 3', 'y=5x +3', 'y = 5x+3'],
          explanation: 'Opeenvolgende verskille: 8−3=5, 13−8=5, 18−13=5 — die gradiënt is 5. Wanneer x=0, is y=3, dus is die y-afsnit 3. Vergelyking: y = 5x + 3 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to substitute input values into an equation to find outputs, and how to solve an equation backwards to find the input when the output is given" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Flow diagram showing an input x arrow passing through an equation rule box to produce output y, illustrating substitution in both directions" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — EQUIVALENCE OF RELATIONSHIPS BY FORMULAE, EQUATIONS AND GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equivalence-of-relationships',
      title: 'Ekwivalensie van Verwantskappe deur Formules, Vergelykings en Grafieke',
      icon: '≡',
      explanation:
        `<p style="margin-bottom:16px;">Ons bepaal, interpreteer en regverdig ekwivalensie van verskillende beskrywings van dieselfde verwantskap — verbaal, in vloeidiagramme, tabelle, deur formules, deur ${bl('vergelykings')}, en nou ook deur ${or('grafieke')} op ʼn Cartesiese vlak.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vergelyking')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('grafiekkenmerke')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gradiënt / afsnit')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Gradiënt en y-afsnit uit ʼn vergelyking lees</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="font-size:1.05em;font-weight:700;text-align:center;color:#0f1f3d;margin-bottom:8px;">${bl('y')} = ${gr('m')}${bl('x')} + ${gr('c')}</p>` +
        `<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">` +
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;padding:12px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('m')} = gradiënt</p>` +
        `<p style="font-size:13px;color:#374151;margin:0;">Vir elke 1-eenheid toename in x, neem y toe met ${gr('m')}. ʼn Positiewe ${gr('m')} beteken die lyn loop opwaarts.</p>` +
        `</div>` +
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;padding:12px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('c')} = y-afsnit</p>` +
        `<p style="font-size:13px;color:#374151;margin:0;">Die ${or('grafiek')} kruis die y-as by die punt (0, ${gr('c')}). Dit is die waarde van y wanneer x = 0.</p>` +
        `</div>` +
        `</div>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Ekwivalensie tussen ʼn tabel en ʼn vergelyking kontroleer</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Vind die ${gr('gradiënt')} uit die tabel — bereken die konstante verskil tussen opeenvolgende y-waardes gedeel deur die konstante verskil tussen x-waardes.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Vind die ${gr('y-afsnit')} — lees die y-waarde uit die tabel wanneer x = 0, of bereken terug as x = 0 nie in die tabel is nie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Skryf die ${bl('vergelyking')} en bevestig deur elke x-waarde uit die tabel te vervang — al die y-waardes moet ooreenstem sodat die voorstellings ekwivalent is.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Reguit lyne teenoor gebuigde grafieke</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn ${bl('Lineêre vergelyking')} (y = mx + c) lewer altyd ʼn reguit ${or('lyngrafiek')}. ʼn ${bl('Kwadratiese vergelyking')} (y = x²) lewer ʼn gebuigde ${or('parabool-grafiek')}. As jy die vorm van die ${bl('vergelyking')} ken, weet jy wat die vorm van die ${or('grafiek')} sal wees nog voordat jy enige punte stip.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Verwantskap word gegee as die vergelyking y = 3x + 2. Beskryf hoe dit as ʼn grafiek sal lyk.',
          answer: `ʼn Reguit ${or('grafiek')} met ${gr('y-afsnit')} 2 en ${gr('gradiënt')} 3`,
          steps: [
            `Identifiseer die vorm: die ${bl('vergelyking')} y = 3x + 2 is in die vorm y = mx + c, dus lewer dit ʼn reguit ${or('grafiek')}.`,
            `Lees die ${gr('gradiënt')}: m = ${gr('3')}. Vir elke 1-eenheid toename in x, neem y toe met 3. Die lyn loop steil opwaarts.`,
            `Lees die ${gr('y-afsnit')}: c = ${gr('2')}. Die ${or('grafiek')} kruis die y-as by die punt (0, 2).`,
            `Kyk na die diagram hieronder wat hierdie lyn wys met die ${gr('y-afsnit')} by (0, 2) en die ${gr('gradiënt')} geïllustreer met ʼn opgaan/aanloop-driehoek.`,
          ],
        },
        {
          question: 'Sipho het ʼn tabel: x: 0, 1, 2, 3 en y: 4, 7, 10, 13. Skryf die vergelyking en beskryf die grafiek.',
          answer: `${bl('Vergelyking')}: y = 3x + 4. ${or('Grafiek')}: reguit lyn, ${gr('y-afsnit')} 4, ${gr('gradiënt')} 3`,
          steps: [
            `Vind die ${gr('gradiënt')}: opeenvolgende y-verskille is 7−4=3, 10−7=3, 13−10=3. Die verskil is konstant op ${gr('3')}, wat ʼn lineêre verwantskap met gradiënt ${gr('3')} bevestig.`,
            `Vind die ${gr('y-afsnit')}: wanneer x = 0, is y = 4. Dus is die ${gr('y-afsnit')} ${gr('4')}.`,
            `Skryf die ${bl('vergelyking')}: y = ${gr('3')}x + ${gr('4')}.`,
            `Beskryf die ${or('grafiek')}: die ${or('grafiek')} is ʼn reguit lyn met ʼn ${gr('y-afsnit')} van 4 en ʼn ${gr('gradiënt')} van 3 — die lyn loop opwaarts en kruis die y-as by 4.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Lerato se tabel is: x: 1, 2, 3, 4 en y: 5, 11, 17, 23. Vind die vergelyking en beskryf die grafiek.",
          answer: 'Vergelyking: y = 6x − 1. Dit sal as ʼn reguit lyn grafiek met gradiënt 6 en y-afsnit −1.',
          checkMode: 'self',
        },

        // ── Q7 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Genereer ʼn tabel van geordende pare deur y = 2x + 3 te gebruik vir x = −1, 0, 1, 2.',
          answer: '(−1, 1), (0, 3), (1, 5), (2, 7).',
          checkMode: 'self',
        },

        // ── Q8 Easy ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Gebruik y = −3x + 8 om y te vind wanneer x = 2.',
          answer: '2',
          checkMode: 'auto',
          correctAnswer: '2',
          explanation: 'Vervang x = 2: y = −3(2) + 8 = −6 + 8 = 2 ✓',
        },

        // ── Q9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo genereer geordende pare deur y = x² + 2 te gebruik vir x = −2, −1, 0, 1, 2 en kry (−2, 6), (−1, 3), (0, 2), (1, 3), (2, 6). Kontroleer sy tabel.',
          answer: 'Korrek — deur elke x-waarde in x² + 2 te vervang, kry jy die gelyste y-waardes, wat ʼn simmetriese paraboolvorm vorm.',
          checkMode: 'self',
        },

        // ── Q10 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Gebruik y = 7x − 15 om x te vind wanneer y = 27.',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'Vervang y = 27: 27 = 7x − 15. Tel 15 by: 42 = 7x. Deel deur 7: x = 6 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to move between verbal descriptions, tables, equations and straight-line graphs, reading gradient and y-intercept from each form" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a Cartesian plane showing the line y=3x+2, with the y-intercept at (0,2) clearly marked and the gradient illustrated with a rise/run triangle" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — GENERATING TABLES OF ORDERED PAIRS FOR GRAPHING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'generating-tables-of-ordered-pairs',
      title: 'Tabelle van Geordende Pare Genereer om te Grafiek',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik vervanging in vergelykings om tabelle van ${or('geordende pare')} te genereer, en berei sodoende data voor om punte te stip en grafieke op die Cartesiese vlak te teken.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-waardes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-waardes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('geordende pare')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ʼn tabel te genereer</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Lys jou gekose ${bl('x-waardes')} in ʼn tabelry.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Vervang elke ${bl('x-waarde')} in die vergelyking om elke ${gr('y-waarde')} te bereken. Wys jou vervanging duidelik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Skryf elke ${or('geordende paar')} as (x, y). Dit is die punte wat jy op die Cartesiese vlak sal stip.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reguit lyne teenoor parabole</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Lineêr (y = mx + c)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${gr('y-waardes')} verander met ʼn konstante bedrag vir elke stap in ${bl('x')}. Wanneer gestip, vorm die ${or('geordende pare')} ʼn <strong>reguit lyn</strong>.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Kwadraties (y = x²)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${gr('y-waardes')} verander met toenemende bedrae. Wanneer gestip, vorm die ${or('geordende pare')} ʼn <strong>gebuigde parabool</strong>vorm.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sluit negatiewe x-waardes in</p>` +
        `<p style="margin:0;color:#1e3a8a;">Sluit altyd ten minste een negatiewe ${bl('x-waarde')} in jou tabel in. Dit gee ʼn vollediger prentjie van die grafiek aan albei kante van die y-as, en onthul simmetrie in parabole.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gebruik y = −2x + 5 om geordende pare te genereer vir x = −1, 0, 1, 2.',
          answer: `${or('(−1, 7), (0, 5), (1, 3), (2, 1)')}`,
          steps: [
            `x = ${bl('−1')}: y = −2(${bl('−1')}) + 5 = 2 + 5 = ${gr('7')}. Geordende paar: ${or('(−1, 7)')}`,
            `x = ${bl('0')}: y = −2(${bl('0')}) + 5 = 0 + 5 = ${gr('5')}. Geordende paar: ${or('(0, 5)')}`,
            `x = ${bl('1')}: y = −2(${bl('1')}) + 5 = −2 + 5 = ${gr('3')}. Geordende paar: ${or('(1, 3)')}`,
            `x = ${bl('2')}: y = −2(${bl('2')}) + 5 = −4 + 5 = ${gr('1')}. Geordende paar: ${or('(2, 1)')}`,
            `<strong>Tabel van ${or('geordende pare')}:</strong> ${or('(−1, 7)')}, ${or('(0, 5)')}, ${or('(1, 3)')}, ${or('(2, 1)')}. Kyk na die diagram hieronder wat hierdie punte gestip en met ʼn reguit lyn verbind wys.`,
          ],
        },
        {
          question: 'Lerato gebruik y = x² − 4 vir x = −2, −1, 0, 1, 2. Genereer die tabel.',
          answer: `${or('(−2, 0), (−1, −3), (0, −4), (1, −3), (2, 0)')}`,
          steps: [
            `x = ${bl('−2')}: y = (${bl('−2')})² − 4 = 4 − 4 = ${gr('0')}. Geordende paar: ${or('(−2, 0)')}`,
            `x = ${bl('−1')}: y = (${bl('−1')})² − 4 = 1 − 4 = ${gr('−3')}. Geordende paar: ${or('(−1, −3)')}`,
            `x = ${bl('0')}: y = (${bl('0')})² − 4 = 0 − 4 = ${gr('−4')}. Geordende paar: ${or('(0, −4)')}`,
            `x = ${bl('1')}: y = (${bl('1')})² − 4 = 1 − 4 = ${gr('−3')}. Geordende paar: ${or('(1, −3)')}`,
            `x = ${bl('2')}: y = (${bl('2')})² − 4 = 4 − 4 = ${gr('0')}. Geordende paar: ${or('(2, 0)')}`,
            `Let op die simmetrie: die ${gr('y-waardes')} vir x = −2 en x = 2 is gelyk. Dit vorm ʼn gebuigde <strong>parabool</strong>vorm, nie ʼn reguit lyn nie.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q11 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle sê die vergelyking y = 4x + 6 en die tabel x: 1, 2, 3 en y: 10, 14, 18 beskryf dieselfde verwantskap. Is sy korrek? Verduidelik.',
          answer: 'Ja — deur x = 1, 2, 3 in y = 4x + 6 te vervang, kry jy presies 10, 14, 18, wat dieselfde verwantskap bevestig.',
          checkMode: 'self',
        },

        // ── Q12 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Genereer geordende pare deur y = −2x + 1 te gebruik vir x = −1, 0, 1, 2.',
          answer: '(−1, 3), (0, 1), (1, −1), (2, −3)',
          checkMode: 'auto',
          correctAnswer: '(-1,3),(0,1),(1,-1),(2,-3)',
          correctAnswers: ['(-1,3),(0,1),(1,-1),(2,-3)', '(-1, 3), (0, 1), (1, -1), (2, -3)', '(−1,3),(0,1),(1,−1),(2,−3)', '(-1,3), (0,1), (1,-1), (2,-3)'],
          explanation: 'x=−1: y=−2(−1)+1=3. x=0: y=1. x=1: y=−2+1=−1. x=2: y=−4+1=−3. Pare: (−1,3),(0,1),(1,−1),(2,−3) ✓',
        },

        // ── Q13 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Sipho se verwantskap word verbaal beskryf as 'verdrievoudig die inset, en tel dan 7 by'. Skryf die vergelyking en vind y wanneer x = 5.",
          answer: 'y = 3x + 7, y = 22',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skryf die vergelyking',
              correctAnswer: 'y=3x+7',
              correctAnswers: ['y=3x+7', 'y = 3x + 7', 'y=3x +7'],
              explanation: '"Verdrievoudig die inset" beteken vermenigvuldig x met 3; "tel dan 7 by" beteken tel 7 by. Vergelyking: y = 3x + 7 ✓',
            },
            {
              label: 'b) Vind y wanneer x = 5',
              correctAnswer: '22',
              explanation: 'Vervang x = 5: y = 3(5) + 7 = 15 + 7 = 22 ✓',
            },
          ],
        },

        // ── Q14 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Tabel wys x: 0, 2, 4, 6 en y: 1, 9, 17, 25. Vind die vergelyking.',
          answer: 'y = 4x + 1',
          checkMode: 'auto',
          correctAnswer: 'y=4x+1',
          correctAnswers: ['y=4x+1', 'y = 4x + 1', 'y=4x +1'],
          explanation: 'x neem elke keer met 2 toe; y neem toe met 8. Gradiënt = 8 ÷ 2 = 4. Wanneer x=0, is y=1, dus is die y-afsnit 1. Vergelyking: y = 4x + 1. Kontroleer: x=2 → 9 ✓, x=4 → 17 ✓, x=6 → 25 ✓',
        },

        // ── Q15 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê ʼn grafiek van y = x² sal identies lyk aan ʼn grafiek van y = 2x. Is sy korrek? Verduidelik.',
          answer: 'Nee — y = x² lewer ʼn gebuigde paraboolvorm, terwyl y = 2x ʼn reguit lyn lewer; hulle grafieke het fundamenteel verskillende vorms.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to substitute x-values into an equation to build a table of ordered pairs and then plot those points on a Cartesian plane" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a Cartesian plane with points (-1,7),(0,5),(1,3),(2,1) plotted and connected by a straight line" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het funksies en verwantskappe bemeester.' },
    { minScore: 11, message: 'Goeie werk! Jy het ʼn sterk begrip. Gaan enige gemiste vrae weer deur en jy sal dit perfek kry.' },
    { minScore: 8, message: 'Goeie poging. Gaan die afdelings weer deur waar jy punte verloor het en probeer weer.' },
    { minScore: 0, message: 'Hou aan — werk weer deur die gids afdeling vir afdeling, en probeer dan weer.' },
  ],
}
