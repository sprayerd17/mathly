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
        'Kort video wat wys hoe om intreewaardes in ʼn vergelyking te vervang om uittree te vind, en hoe om ʼn vergelyking agteruit op te los om die intree te vind wanneer die uittree gegee is',

      diagramPlaceholder:
        'ʼn Vloeidiagram wat ʼn intree x wys wat deur ʼn vergelykingsreël-blokkie beweeg om uittree y te produseer, met ʼn terugkeerpyl wat wys dat agteruit oplos x uit y herwin',

      diagramSvg:
        '<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="45" width="70" height="40" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="50" y="65" font-size="15" font-weight="700" fill="#2563eb" text-anchor="middle">x</text><text x="50" y="79" font-size="8" fill="#2563eb" text-anchor="middle">(intree)</text><rect x="125" y="45" width="70" height="40" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/><text x="160" y="60" font-size="7" font-weight="700" fill="#ea580c" text-anchor="middle">REËL</text><text x="160" y="75" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">y = mx + c</text><rect x="235" y="45" width="70" height="40" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="270" y="65" font-size="15" font-weight="700" fill="#16a34a" text-anchor="middle">y</text><text x="270" y="79" font-size="8" fill="#16a34a" text-anchor="middle">(uittree)</text><line x1="85" y1="65" x2="122" y2="65" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="125,65 117,60 117,70" fill="#0f1f3d"/><text x="103" y="57" font-size="8" fill="#0f1f3d" text-anchor="middle">vervang</text><line x1="195" y1="65" x2="232" y2="65" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="235,65 227,60 227,70" fill="#0f1f3d"/><text x="213" y="57" font-size="8" fill="#0f1f3d" text-anchor="middle">bereken</text><path d="M270,88 C270,125 50,125 50,88" fill="none" stroke="#6b7280" stroke-width="2" stroke-dasharray="5,3"/><polygon points="50,88 44,98 56,98" fill="#6b7280"/><text x="160" y="140" font-size="9" font-weight="700" fill="#6b7280" text-anchor="middle">los agteruit op (isoleer x)</text></svg>',
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


      openQuestions: [
        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Lerato se tabel is: x: 1, 2, 3, 4 en y: 5, 11, 17, 23. Vind die vergelyking en beskryf die grafiek.",
          answer: 'Vergelyking: y = 6x − 1. Dit sal grafies voorgestel word as ʼn reguit lyn met gradiënt 6 en y-afsnit −1.',
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
        'Kort video wat wys hoe om tussen verbale beskrywings, tabelle, vergelykings en reguitlyngrafieke te beweeg, en gradiënt en y-afsnit uit elke vorm te lees',

      diagramPlaceholder:
        'ʼn Cartesiese vlak wat die lyn y = 3x + 2 wys, met die y-afsnit by (0, 2) duidelik gemerk en die gradiënt geïllustreer met ʼn opgaan/aanloop-driehoek',

      diagramSvg:
        '<svg viewBox="0 0 170 220" xmlns="http://www.w3.org/2000/svg"><text x="95" y="15" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">y = 3x + 2</text><line x1="15" y1="190" x2="150" y2="190" stroke="#0f1f3d" stroke-width="2"/><polygon points="154,190 146,186 146,194" fill="#0f1f3d"/><text x="150" y="184" font-size="9" fill="#0f1f3d" text-anchor="end">x</text><line x1="60" y1="205" x2="60" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="60,36 56,44 64,44" fill="#0f1f3d"/><text x="66" y="44" font-size="9" fill="#0f1f3d">y</text><line x1="45" y1="205" x2="100" y2="40" stroke="#2563eb" stroke-width="2.5"/><circle cx="60" cy="160" r="4" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><text x="66" y="158" font-size="9" fill="#16a34a" font-weight="700">(0, 2)</text><line x1="60" y1="160" x2="75" y2="160" stroke="#16a34a" stroke-width="2" stroke-dasharray="3,2"/><line x1="75" y1="160" x2="75" y2="115" stroke="#16a34a" stroke-width="2" stroke-dasharray="3,2"/><text x="67" y="173" font-size="8" fill="#16a34a" font-weight="700" text-anchor="middle">aanloop 1</text><text x="80" y="140" font-size="8" fill="#16a34a" font-weight="700">opgaan 3</text></svg>',
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
        'Kort video wat wys hoe om x-waardes in ʼn vergelyking te vervang om ʼn tabel van geordende pare te bou en dan daardie punte op ʼn Cartesiese vlak te plot',

      diagramPlaceholder:
        'ʼn Cartesiese vlak met die punte (−1, 7), (0, 5), (1, 3), (2, 1) geplot en verbind deur ʼn reguit lyn',

      diagramSvg:
        '<svg viewBox="0 0 170 210" xmlns="http://www.w3.org/2000/svg"><text x="100" y="10" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">y = −2x + 5</text><line x1="20" y1="170" x2="140" y2="170" stroke="#0f1f3d" stroke-width="2"/><polygon points="144,170 136,166 136,174" fill="#0f1f3d"/><text x="140" y="184" font-size="9" fill="#0f1f3d" text-anchor="end">x</text><line x1="60" y1="195" x2="60" y2="15" stroke="#0f1f3d" stroke-width="2"/><polygon points="60,11 56,19 64,19" fill="#0f1f3d"/><text x="66" y="19" font-size="9" fill="#0f1f3d">y</text><text x="50" y="183" font-size="8" fill="#374151">O</text><line x1="40" y1="30" x2="100" y2="150" stroke="#2563eb" stroke-width="2.5"/><circle cx="40" cy="30" r="4" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="16" y="26" font-size="8" font-weight="700" fill="#ea580c">(−1, 7)</text><circle cx="60" cy="70" r="4" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="66" y="68" font-size="8" font-weight="700" fill="#ea580c">(0, 5)</text><circle cx="80" cy="110" r="4" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="86" y="108" font-size="8" font-weight="700" fill="#ea580c">(1, 3)</text><circle cx="100" cy="150" r="4" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="106" y="148" font-size="8" font-weight="700" fill="#ea580c">(2, 1)</text></svg>',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het funksies en verwantskappe bemeester.' },
    { minScore: 11, message: 'Goeie werk! Jy het ʼn sterk begrip. Gaan enige gemiste vrae weer deur en jy sal dit perfek kry.' },
    { minScore: 8, message: 'Goeie poging. Gaan die afdelings weer deur waar jy punte verloor het en probeer weer.' },
    { minScore: 0, message: 'Hou aan — werk weer deur die gids afdeling vir afdeling, en probeer dan weer.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-2):   Uitset vind gegewe die inset (vervang in vergelyking)
    // Blok 2 (3-5):   Inset vind gegewe die uitset (los vergelyking terugwaarts op)
    // Blok 3 (6-9):   Vloeidiagramme / getalmasjiene [DIAGRAM-FLAGGED]
    // Blok 4 (10-13): Ekwivalensie — die vergelyking uit ʼn tabel van waardes vind
    // Blok 5 (14-16): Grafiekkenmerke (gradiënt/y-afsnit) en geordende pare
    // Blok 6 (17-19): Tabelle genereer, incl. kwadraties / foutopsporing
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Uitset vind gegewe die inset (Easy)
        { difficulty: 'Easy', question: 'Gebruik y = 4x + 3 om y te vind wanneer x = 6.', checkMode: 'auto', options: ['27', '24', '42', '21'], correctIndex: 0, explanation: 'Vervang x = 6: y = 4(6) + 3 = 24 + 3 = 27. (24 vergeet om 3 by te tel; 42 tel verkeerdelik 3 by x voordat met 4 vermenigvuldig word; 21 trek 3 af in plaas daarvan om dit by te tel.)' },
        { difficulty: 'Easy', question: 'Gebruik y = 7x − 5 om y te vind wanneer x = 4.', checkMode: 'auto', options: ['28', '23', '33', '63'], correctIndex: 1, explanation: 'Vervang x = 4: y = 7(4) − 5 = 28 − 5 = 23. (28 vergeet om 5 af te trek; 33 tel 5 by in plaas daarvan om dit af te trek; 63 tel verkeerdelik 5 by x voordat met 7 vermenigvuldig word.)' },
        { difficulty: 'Easy', question: 'Gebruik y = −3x + 10 om y te vind wanneer x = 5.', checkMode: 'auto', options: ['-15', '25', '-5', '-25'], correctIndex: 2, explanation: 'Vervang x = 5: y = −3(5) + 10 = −15 + 10 = −5. (−15 vergeet om 10 by te tel; 25 laat die negatiewe teken op −3x weg; −25 trek 10 af in plaas daarvan om dit by te tel.)' },

        // Blok 2 — Inset vind gegewe die uitset (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Gebruik y = 5x + 2 om x te vind wanneer y = 37.', checkMode: 'auto', options: ['35', '9', '7.4', '7'], correctIndex: 3, explanation: 'Vervang y = 37: 37 = 5x + 2. Trek 2 af: 35 = 5x. Deel deur 5: x = 7. (35 hou op ná die aftrekking sonder om te deel; 9 tel 2 by in plaas daarvan om af te trek voor deling; 7.4 deel 37 deur 5 sonder om eers 2 af te trek.)' },
        { difficulty: 'Easy-Medium', question: 'Gebruik y = 3x − 8 om x te vind wanneer y = 13.', checkMode: 'auto', options: ['7', '21', '1.67', '4.33'], correctIndex: 0, explanation: 'Vervang y = 13: 13 = 3x − 8. Tel 8 by: 21 = 3x. Deel deur 3: x = 7. (21 hou op ná die bytelling sonder om te deel; 1.67 trek 8 af in plaas daarvan om by te tel voor deling; 4.33 deel 13 deur 3 sonder om eers 8 by te tel.)' },
        { difficulty: 'Easy-Medium', question: 'Gebruik y = 2x + 15 om x te vind wanneer y = 7.', checkMode: 'auto', options: ['-8', '-4', '11', '3.5'], correctIndex: 1, explanation: 'Vervang y = 7: 7 = 2x + 15. Trek 15 af: −8 = 2x. Deel deur 2: x = −4. (−8 hou op ná die aftrekking sonder om te deel; 11 tel 15 by in plaas daarvan om af te trek voor deling; 3.5 deel 7 deur 2 sonder om eers 15 af te trek.)' },

        // Blok 3 — Vloeidiagramme / getalmasjiene [DIAGRAM-FLAGGED]
        { difficulty: 'Easy', question: 'ʼn Vloeidiagram, soos gewys, het inset 7 → ×3 → +4 → uitset. Vind die uitset.', checkMode: 'auto', options: ['21', '33', '25', '24'], correctIndex: 2, explanation: 'Deur die vloeidiagram te volg: 7 × 3 = 21, dan 21 + 4 = 25. (21 hou op ná die vermenigvuldigingstap en vergeet om 4 by te tel; 33 tel verkeerdelik 4 by die inset voordat met 3 vermenigvuldig word; 24 lees die tweede blokkie verkeerd as +3 in plaas van +4.)', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">7</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×3</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+4</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vloeidiagram, soos gewys, wys inset x → −6 → ×2 → uitset 16. Vind die inset x.', checkMode: 'auto', options: ['2', '22', '8', '14'], correctIndex: 3, explanation: '(x − 6) × 2 = 16, dus x − 6 = 8, wat x = 14 gee. (2 trek 6 af in plaas daarvan om dit terug te tel; 22 tel 6 by 16 sonder om deur 2 te deel; 8 hou op ná die deling en vergeet om 6 terug te tel.)', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−6</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×2</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">16</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Vloeidiagram, soos gewys, pas inset → ×5 → −2 → uitset toe. Die tabel wys: inset 3 gee uitset 13, en inset 6 gee uitset 28. Vind die uitset vir inset 9.', checkMode: 'auto', options: ['43', '45', '35', '47'], correctIndex: 0, explanation: 'Reël: uitset = 5 × inset − 2. Vir inset 9: 5(9) − 2 = 45 − 2 = 43. (45 vergeet om 2 af te trek; 35 trek verkeerdelik 2 van die inset af voordat vermenigvuldig word; 47 tel 2 by in plaas daarvan om af te trek.)', diagramSvg: '<svg viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×5</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−2</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><text x="10" y="80" font-size="11" font-weight="700" fill="#374151">Bekende inset/uitset-pare:</text><rect x="30" y="88" width="90" height="55" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="75" y1="88" x2="75" y2="143" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="106" x2="120" y2="106" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="124" x2="120" y2="124" stroke="#0f1f3d" stroke-width="1"/><text x="52" y="100" text-anchor="middle" font-size="10" fill="#374151">inset</text><text x="97" y="100" text-anchor="middle" font-size="10" fill="#374151">uitset</text><text x="52" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">3</text><text x="97" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">13</text><text x="52" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">6</text><text x="97" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">28</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Vloeidiagram, soos gewys, het die reël "verdubbel die inset, en tel dan 6 by". As die inset 11 is, vind die uitset.', checkMode: 'auto', options: ['22', '28', '34', '17'], correctIndex: 1, explanation: 'Verdubbel 11: 11 × 2 = 22. Tel 6 by: 22 + 6 = 28. (22 hou op ná die verdubbeling en vergeet om 6 by te tel; 34 tel verkeerdelik 6 by die inset voordat verdubbel word; 17 tel 6 by die inset maar vergeet om te verdubbel.)', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">11</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×2</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+6</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text></svg>' },

        // Blok 4 — Ekwivalensie: die vergelyking uit ʼn tabel van waardes vind (Medium)
        { difficulty: 'Medium', question: 'ʼn Tabel wys x: 0, 1, 2, 3 en y: 2, 6, 10, 14. Vind die vergelyking.', checkMode: 'auto', options: ['y=4x+6', 'y=3x+2', 'y=4x+2', 'y=2x+4'], correctIndex: 2, explanation: 'Opeenvolgende verskille: 6−2=4, 10−6=4, 14−10=4, dus is die gradiënt 4. Wanneer x=0, is y=2, dus is die y-afsnit 2. Vergelyking: y = 4x + 2. (y=4x+6 verwar die y-waarde by x=1 met die y-afsnit; y=3x+2 bereken die gradiënt verkeerd; y=2x+4 verwissel die gradiënt en afsnit.)' },
        { difficulty: 'Medium', question: 'ʼn Tabel wys x: 1, 2, 3, 4 en y: 9, 13, 17, 21. Vind die vergelyking.', checkMode: 'auto', options: ['y=4x+9', 'y=5x+4', 'y=3x+6', 'y=4x+5'], correctIndex: 3, explanation: 'Opeenvolgende verskille: 13−9=4, 17−13=4, 21−17=4, dus is die gradiënt 4. Aangesien x by 1 begin, bereken die y-afsnit terug: 9 = 4(1) + c, dus c = 5. Vergelyking: y = 4x + 5. (y=4x+9 verwar die y-waarde by x=1 met die y-afsnit in plaas daarvan om terug te bereken; y=5x+4 verwissel die gradiënt en afsnit; y=3x+6 bereken die gradiënt verkeerd.)' },
        { difficulty: 'Medium', question: 'ʼn Tabel wys x: 0, 5, 10, 15 en y: 3, 23, 43, 63. Vind die vergelyking.', checkMode: 'auto', options: ['y=4x+3', 'y=20x+3', 'y=4x+23', 'y=5x+3'], correctIndex: 0, explanation: 'x neem elke keer met 5 toe; y neem toe met 20. Gradiënt = 20 ÷ 5 = 4. Wanneer x=0, is y=3, dus is die y-afsnit 3. Vergelyking: y = 4x + 3. (y=20x+3 vergeet om die y-verskil deur die x-stap te deel; y=4x+23 verwar die tweede y-waarde met die afsnit; y=5x+3 bereken die gradiënt verkeerd.)' },
        { difficulty: 'Medium', question: "Lerato se verwantskap word verbaal beskryf as 'vermenigvuldig die inset met 6, en trek dan 4 af'. Skryf die vergelyking en vind y wanneer x = 3.", checkMode: 'auto', correctAnswers: ['y=6x-4, y=14', 'y = 6x - 4, y = 14'], answer: 'y = 6x − 4, y = 14', parts: [
          { label: 'a) Skryf die vergelyking', correctAnswer: 'y=6x-4', correctAnswers: ['y=6x-4', 'y = 6x - 4', 'y=6x −4', 'y=6x−4'], explanation: '"Vermenigvuldig die inset met 6" beteken vermenigvuldig x met 6; "trek dan 4 af" beteken trek 4 af. Vergelyking: y = 6x − 4 ✓' },
          { label: 'b) Vind y wanneer x = 3', correctAnswer: '14', explanation: 'Vervang x = 3: y = 6(3) − 4 = 18 − 4 = 14 ✓' },
        ] },

        // Blok 5 — Grafiekkenmerke (gradiënt/y-afsnit) en geordende pare (Medium)
        { difficulty: 'Medium', question: 'ʼn Vergelyking is y = 7x − 2. Beskryf die gradiënt en y-afsnit van sy grafiek.', checkMode: 'auto', options: ['gradiënt=-2, y-afsnit=7', 'gradiënt=7, y-afsnit=-2', 'gradiënt=7, y-afsnit=2', 'gradiënt=-7, y-afsnit=-2'], correctIndex: 1, explanation: 'In die vergelyking y = mx + c, is m die gradiënt en c die y-afsnit. Hier is m = 7 en c = −2, dus gradiënt = 7 en y-afsnit = −2. (Die ander opsies verwissel die gradiënt en afsnit, of laat die negatiewe teken op die afsnit of gradiënt weg.)' },
        { difficulty: 'Medium', question: 'ʼn Vergelyking is y = −4x + 9. Beskryf die gradiënt en y-afsnit van sy grafiek.', checkMode: 'auto', options: ['gradiënt=9, y-afsnit=-4', 'gradiënt=4, y-afsnit=9', 'gradiënt=-4, y-afsnit=9', 'gradiënt=-4, y-afsnit=-9'], correctIndex: 2, explanation: 'In die vergelyking y = mx + c, is m die gradiënt en c die y-afsnit. Hier is m = −4 en c = 9, dus gradiënt = −4 en y-afsnit = 9. (Die ander opsies verwissel die gradiënt en afsnit, laat die negatiewe teken op die gradiënt weg, of verander die teken van die afsnit.)' },
        { difficulty: 'Medium', question: 'Genereer ʼn tabel van geordende pare deur y = 3x − 1 te gebruik vir x = −1, 0, 1, 2.', checkMode: 'auto', options: ['(-1,-3),(0,0),(1,3),(2,6)', '(-1,-2),(0,1),(1,4),(2,7)', '(-1,2),(0,-1),(1,2),(2,5)', '(-1,-4),(0,-1),(1,2),(2,5)'], correctIndex: 3, explanation: 'x=−1: y=3(−1)−1=−4. x=0: y=−1. x=1: y=3−1=2. x=2: y=6−1=5. Pare: (−1,−4),(0,−1),(1,2),(2,5). (Die eerste opsie laat die −1 heeltemal weg; die tweede behandel −1 as +1 regdeur; die derde maak net ʼn tekenfout by x=−1.)' },

        // Blok 6 — Tabelle genereer, incl. kwadraties / foutopsporing (Hard)
        { difficulty: 'Hard', question: 'Sipho genereer ʼn tabel deur y = x² − 1 te gebruik vir x = −2, −1, 0, 1, 2 en kry (−2, 3), (−1, 0), (0, −1), (1, 0), (2, 3). Watter stelling oor sy tabel is korrek?', checkMode: 'auto', options: ['Sy tabel is korrek — elke y-waarde stem ooreen met x² − 1, wat ʼn simmetriese parabool vorm.', 'Hy het ʼn fout gemaak by x = 0 — die korrekte waarde is y = 1, nie y = −1 nie.', 'Hy het ʼn fout gemaak by x = −2 en x = 2 — die korrekte waardes is y = 5, nie y = 3 nie.', 'Sy tabel kan nie sonder ʼn grafiek gekontroleer word nie.'], correctIndex: 0, explanation: 'Deur elke x-waarde te vervang: (−2)²−1=3, (−1)²−1=0, 0²−1=−1, 1²−1=0, 2²−1=3 — almal stem ooreen met sy tabel, en die simmetrie (gelyke y-waardes vir x=−2/2 en x=−1/1) is korrek. (Opsie B lees 0²−1 verkeerd as 1; opsie C herbereken (±2)²−1 verkeerd as 5; ʼn tabel kan altyd deur direkte vervanging gekontroleer word.)' },
        { difficulty: 'Hard', question: 'Thabo sê die vergelyking y = 5x + 4 en die tabel x: 1, 2, 3 en y: 9, 14, 19 beskryf dieselfde verwantskap. Watter stelling is korrek?', checkMode: 'auto', options: ['Hy is verkeerd — deur x = 1 in y = 5x + 4 te vervang, kry jy y = 5, nie 9 nie.', 'Hy is korrek — deur x = 1, 2, 3 in y = 5x + 4 te vervang, kry jy presies 9, 14, 19.', 'Hy is verkeerd — die tabel het ʼn gradiënt van 4, nie 5 nie.', 'Dit is onmoontlik om te bepaal sonder meer x-waardes.'], correctIndex: 1, explanation: 'Deur x = 1, 2, 3 in y = 5x + 4 te vervang, kry jy presies 9, 14, 19, wat met die tabel ooreenstem. (Opsie A bereken 5(1)+4 verkeerd as 5; opsie C lees die tabel se gradiënt verkeerd, wat eintlik 5 is aangesien opeenvolgende y-waardes met 5 styg; drie ooreenstemmende punte is reeds genoeg om ekwivalensie vir ʼn lineêre verwantskap te bevestig.)' },
        { difficulty: 'Hard', question: 'Amahle sê ʼn grafiek van y = x² − 1 sal identies lyk aan ʼn grafiek van y = 4x + 2. Watter stelling is korrek?', checkMode: 'auto', options: ['Sy is korrek — albei vergelykings lewer reguit lyne.', 'Sy is korrek — albei vergelykings lewer gebuigde parabole.', 'Sy is verkeerd — y = x² − 1 lewer ʼn gebuigde paraboolvorm, terwyl y = 4x + 2 ʼn reguit lyn lewer.', 'Sy is verkeerd — albei is parabole, maar met verskillende wydtes.'], correctIndex: 2, explanation: 'y = x² − 1 is kwadraties, dus lewer dit ʼn gebuigde paraboolvorm. y = 4x + 2 is lineêr (y = mx + c vorm), dus lewer dit ʼn reguit lyn. Hulle grafieke het fundamenteel verskillende vorms. (Opsies A en B neem verkeerdelik aan dat die twee vergelykings dieselfde grafiektipe deel; opsie D noem y = 4x + 2 verkeerdelik ʼn parabool.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het insette, uitsette en vergelykings vir funksies en verwantskappe bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor vloeidiagramme of tabelle van waardes weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor vervanging en ekwivalensie weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Uitset vind gegewe die inset (Easy)
        { difficulty: 'Easy', question: 'Gebruik y = 5x − 2 om y te vind wanneer x = 7.', checkMode: 'auto', options: ['35', '25', '37', '33'], correctIndex: 3, explanation: 'Vervang x = 7: y = 5(7) − 2 = 35 − 2 = 33. (35 vergeet om 2 af te trek; 25 trek verkeerdelik 2 van x af voordat vermenigvuldig word; 37 tel 2 by in plaas daarvan om af te trek.)' },
        { difficulty: 'Easy', question: 'Gebruik y = 6x + 9 om y te vind wanneer x = 3.', checkMode: 'auto', options: ['27', '18', '72', '9'], correctIndex: 0, explanation: 'Vervang x = 3: y = 6(3) + 9 = 18 + 9 = 27. (18 vergeet om 9 by te tel; 72 tel verkeerdelik 9 by x voordat vermenigvuldig word; 9 trek 9 af in plaas daarvan om dit by te tel.)' },
        { difficulty: 'Easy', question: 'Gebruik y = −2x + 13 om y te vind wanneer x = 6.', checkMode: 'auto', options: ['-12', '1', '25', '-25'], correctIndex: 1, explanation: 'Vervang x = 6: y = −2(6) + 13 = −12 + 13 = 1. (−12 vergeet om 13 by te tel; 25 laat die negatiewe teken op −2x weg; −25 trek 13 af in plaas daarvan om dit by te tel.)' },

        // Blok 2 — Inset vind gegewe die uitset (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Gebruik y = 4x + 7 om x te vind wanneer y = 39.', checkMode: 'auto', options: ['32', '11.5', '8', '9.75'], correctIndex: 2, explanation: 'Vervang y = 39: 39 = 4x + 7. Trek 7 af: 32 = 4x. Deel deur 4: x = 8. (32 hou op ná die aftrekking sonder om te deel; 11.5 tel 7 by in plaas daarvan om af te trek voor deling; 9.75 deel 39 deur 4 sonder om eers 7 af te trek.)' },
        { difficulty: 'Easy-Medium', question: 'Gebruik y = 6x − 11 om x te vind wanneer y = 13.', checkMode: 'auto', options: ['24', '0.33', '0.83', '4'], correctIndex: 3, explanation: 'Vervang y = 13: 13 = 6x − 11. Tel 11 by: 24 = 6x. Deel deur 6: x = 4. (24 hou op ná die bytelling sonder om te deel; 0.33 trek 11 af in plaas daarvan om by te tel voor deling; 0.83 deel 13 deur 6 sonder om eers 11 by te tel.)' },
        { difficulty: 'Easy-Medium', question: 'Gebruik y = 3x + 18 om x te vind wanneer y = 6.', checkMode: 'auto', options: ['-4', '-12', '8', '2'], correctIndex: 0, explanation: 'Vervang y = 6: 6 = 3x + 18. Trek 18 af: −12 = 3x. Deel deur 3: x = −4. (−12 hou op ná die aftrekking sonder om te deel; 8 tel 18 by in plaas daarvan om af te trek voor deling; 2 deel 6 deur 3 sonder om eers 18 af te trek.)' },

        // Blok 3 — Vloeidiagramme / getalmasjiene [DIAGRAM-FLAGGED]
        { difficulty: 'Easy', question: 'ʼn Vloeidiagram, soos gewys, het inset 9 → ×2 → +7 → uitset. Vind die uitset.', checkMode: 'auto', options: ['18', '25', '32', '24'], correctIndex: 1, explanation: 'Deur die vloeidiagram te volg: 9 × 2 = 18, dan 18 + 7 = 25. (18 hou op ná die vermenigvuldiging en vergeet om 7 by te tel; 32 tel verkeerdelik 7 by die inset voordat met 2 vermenigvuldig word; 24 lees die tweede blokkie verkeerd as +6 in plaas van +7.)', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">9</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×2</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+7</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vloeidiagram, soos gewys, wys inset x → −5 → ×3 → uitset 24. Vind die inset x.', checkMode: 'auto', options: ['8', '29', '13', '3'], correctIndex: 2, explanation: '(x − 5) × 3 = 24, dus x − 5 = 8, wat x = 13 gee. (8 hou op ná die deling en vergeet om 5 terug te tel; 29 tel 5 by 24 sonder om deur 3 te deel; 3 trek 5 af in plaas daarvan om dit terug te tel.)', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−5</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×3</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">24</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Vloeidiagram, soos gewys, pas inset → ×6 → −1 → uitset toe. Die tabel wys: inset 2 gee uitset 11, en inset 5 gee uitset 29. Vind die uitset vir inset 10.', checkMode: 'auto', options: ['60', '54', '61', '59'], correctIndex: 3, explanation: 'Reël: uitset = 6 × inset − 1. Vir inset 10: 6(10) − 1 = 60 − 1 = 59. (60 vergeet om 1 af te trek; 54 trek verkeerdelik 1 van die inset af voordat vermenigvuldig word; 61 tel 1 by in plaas daarvan om af te trek.)', diagramSvg: '<svg viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×6</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−1</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><text x="10" y="80" font-size="11" font-weight="700" fill="#374151">Bekende inset/uitset-pare:</text><rect x="30" y="88" width="90" height="55" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="75" y1="88" x2="75" y2="143" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="106" x2="120" y2="106" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="124" x2="120" y2="124" stroke="#0f1f3d" stroke-width="1"/><text x="52" y="100" text-anchor="middle" font-size="10" fill="#374151">inset</text><text x="97" y="100" text-anchor="middle" font-size="10" fill="#374151">uitset</text><text x="52" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">2</text><text x="97" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">11</text><text x="52" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">5</text><text x="97" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">29</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Vloeidiagram, soos gewys, het die reël "verdrievoudig die inset, en trek dan 2 af". As die inset 8 is, vind die uitset.', checkMode: 'auto', options: ['22', '24', '18', '6'], correctIndex: 0, explanation: 'Verdrievoudig 8: 8 × 3 = 24. Trek 2 af: 24 − 2 = 22. (24 hou op ná die verdrievoudiging en vergeet om 2 af te trek; 18 trek verkeerdelik 2 van die inset af voordat verdrievoudig word; 6 trek 2 van die inset af maar vergeet om te verdrievoudig.)', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">8</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×3</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−2</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text></svg>' },

        // Blok 4 — Ekwivalensie: die vergelyking uit ʼn tabel van waardes vind (Medium)
        { difficulty: 'Medium', question: 'ʼn Tabel wys x: 0, 1, 2, 3 en y: 4, 7, 10, 13. Vind die vergelyking.', checkMode: 'auto', options: ['y=3x+7', 'y=3x+4', 'y=4x+4', 'y=4x+3'], correctIndex: 1, explanation: 'Opeenvolgende verskille: 7−4=3, 10−7=3, 13−10=3, dus is die gradiënt 3. Wanneer x=0, is y=4, dus is die y-afsnit 4. Vergelyking: y = 3x + 4. (y=3x+7 verwar die y-waarde by x=1 met die y-afsnit; y=4x+4 bereken die gradiënt verkeerd; y=4x+3 verwissel die gradiënt en afsnit.)' },
        { difficulty: 'Medium', question: 'ʼn Tabel wys x: 1, 2, 3, 4 en y: 10, 13, 16, 19. Vind die vergelyking.', checkMode: 'auto', options: ['y=3x+10', 'y=7x+3', 'y=3x+7', 'y=2x+8'], correctIndex: 2, explanation: 'Opeenvolgende verskille: 13−10=3, 16−13=3, 19−16=3, dus is die gradiënt 3. Aangesien x by 1 begin, bereken die y-afsnit terug: 10 = 3(1) + c, dus c = 7. Vergelyking: y = 3x + 7. (y=3x+10 verwar die y-waarde by x=1 met die y-afsnit in plaas daarvan om terug te bereken; y=7x+3 verwissel die gradiënt en afsnit; y=2x+8 bereken die gradiënt verkeerd.)' },
        { difficulty: 'Medium', question: 'ʼn Tabel wys x: 0, 3, 6, 9 en y: 2, 14, 26, 38. Vind die vergelyking.', checkMode: 'auto', options: ['y=12x+2', 'y=4x+14', 'y=3x+2', 'y=4x+2'], correctIndex: 3, explanation: 'x neem elke keer met 3 toe; y neem toe met 12. Gradiënt = 12 ÷ 3 = 4. Wanneer x=0, is y=2, dus is die y-afsnit 2. Vergelyking: y = 4x + 2. (y=12x+2 vergeet om die y-verskil deur die x-stap te deel; y=4x+14 verwar die tweede y-waarde met die afsnit; y=3x+2 bereken die gradiënt verkeerd.)' },
        { difficulty: 'Medium', question: "Sipho se verwantskap word verbaal beskryf as 'vermenigvuldig die inset met 5, en trek dan 7 af'. Skryf die vergelyking en vind y wanneer x = 4.", checkMode: 'auto', correctAnswers: ['y=5x-7, y=13', 'y = 5x - 7, y = 13'], answer: 'y = 5x − 7, y = 13', parts: [
          { label: 'a) Skryf die vergelyking', correctAnswer: 'y=5x-7', correctAnswers: ['y=5x-7', 'y = 5x - 7', 'y=5x −7', 'y=5x−7'], explanation: '"Vermenigvuldig die inset met 5" beteken vermenigvuldig x met 5; "trek dan 7 af" beteken trek 7 af. Vergelyking: y = 5x − 7 ✓' },
          { label: 'b) Vind y wanneer x = 4', correctAnswer: '13', explanation: 'Vervang x = 4: y = 5(4) − 7 = 20 − 7 = 13 ✓' },
        ] },

        // Blok 5 — Grafiekkenmerke (gradiënt/y-afsnit) en geordende pare (Medium)
        { difficulty: 'Medium', question: 'ʼn Vergelyking is y = 6x + 5. Beskryf die gradiënt en y-afsnit van sy grafiek.', checkMode: 'auto', options: ['gradiënt=6, y-afsnit=5', 'gradiënt=5, y-afsnit=6', 'gradiënt=-6, y-afsnit=5', 'gradiënt=6, y-afsnit=-5'], correctIndex: 0, explanation: 'In die vergelyking y = mx + c, is m die gradiënt en c die y-afsnit. Hier is m = 6 en c = 5, dus gradiënt = 6 en y-afsnit = 5. (Die ander opsies verwissel die gradiënt en afsnit, of heg verkeerdelik ʼn negatiewe teken aan een van die waardes.)' },
        { difficulty: 'Medium', question: 'ʼn Vergelyking is y = −3x + 11. Beskryf die gradiënt en y-afsnit van sy grafiek.', checkMode: 'auto', options: ['gradiënt=11, y-afsnit=-3', 'gradiënt=-3, y-afsnit=11', 'gradiënt=3, y-afsnit=11', 'gradiënt=-3, y-afsnit=-11'], correctIndex: 1, explanation: 'In die vergelyking y = mx + c, is m die gradiënt en c die y-afsnit. Hier is m = −3 en c = 11, dus gradiënt = −3 en y-afsnit = 11. (Die ander opsies verwissel die gradiënt en afsnit, laat die negatiewe teken op die gradiënt weg, of verander die teken van die afsnit.)' },
        { difficulty: 'Medium', question: 'Genereer ʼn tabel van geordende pare deur y = −3x + 2 te gebruik vir x = −1, 0, 1, 2.', checkMode: 'auto', options: ['(-1,3),(0,0),(1,-3),(2,-6)', '(-1,-1),(0,1),(1,4),(2,7)', '(-1,5),(0,2),(1,-1),(2,-4)', '(-1,-4),(0,-1),(1,2),(2,5)'], correctIndex: 2, explanation: 'x=−1: y=−3(−1)+2=5. x=0: y=2. x=1: y=−3+2=−1. x=2: y=−6+2=−4. Pare: (−1,5),(0,2),(1,−1),(2,−4). (Die eerste opsie laat die +2 heeltemal weg; die tweede draai die teken van die gradiënt regdeur om; die vierde verwar die reël met y=3x−1.)' },

        // Blok 6 — Tabelle genereer, incl. kwadraties / foutopsporing (Hard)
        { difficulty: 'Hard', question: 'Lerato genereer ʼn tabel deur y = x² + 2 te gebruik vir x = −2, −1, 0, 1, 2 en kry (−2, 6), (−1, 3), (0, 2), (1, 3), (2, 6). Watter stelling oor haar tabel is korrek?', checkMode: 'auto', options: ['Sy het ʼn fout gemaak by x = 0 — die korrekte waarde is y = 0, nie y = 2 nie.', 'Sy het ʼn fout gemaak by x = −2 en x = 2 — die korrekte waardes is y = 4, nie y = 6 nie.', 'Haar tabel is verkeerd omdat die y-waardes moet aanhou toeneem, nie herhaal nie.', 'Haar tabel is korrek — elke y-waarde stem ooreen met x² + 2, wat ʼn simmetriese parabool vorm.'], correctIndex: 3, explanation: 'Deur elke x-waarde te vervang: (−2)²+2=6, (−1)²+2=3, 0²+2=2, 1²+2=3, 2²+2=6 — almal stem ooreen met haar tabel. Die herhalende y-waardes vir x=±1 en x=±2 word verwag weens die parabool se simmetrie, en is nie ʼn fout nie. (Opsie A lees 0²+2 verkeerd as verkeerd terwyl dit korrek is; opsie B herbereken (±2)²+2 verkeerd as 6 wanneer dit teen 4 gekontroleer word; opsie C neem verkeerdelik aan dat ʼn kwadratiese tabel nie waardes kan herhaal nie.)' },
        { difficulty: 'Hard', question: 'Bongani sê die vergelyking y = 4x + 6 en die tabel x: 1, 2, 3 en y: 10, 14, 18 beskryf dieselfde verwantskap. Watter stelling is korrek?', checkMode: 'auto', options: ['Hy is korrek — deur x = 1, 2, 3 in y = 4x + 6 te vervang, kry jy presies 10, 14, 18.', 'Hy is verkeerd — deur x = 1 in y = 4x + 6 te vervang, kry jy y = 6, nie 10 nie.', 'Hy is verkeerd — die tabel het ʼn gradiënt van 6, nie 4 nie.', 'Dit kan nie bepaal word sonder om die tabel se y-afsnit te ken nie.'], correctIndex: 0, explanation: 'Deur x = 1, 2, 3 in y = 4x + 6 te vervang, kry jy presies 10, 14, 18, wat met die tabel ooreenstem. (Opsie B bereken 4(1)+6 verkeerd as 6; opsie C lees die tabel se gradiënt verkeerd, wat eintlik 4 is aangesien opeenvolgende y-waardes met 4 styg; die y-afsnit is nie nodig sodra drie ooreenstemmende punte ekwivalensie bevestig nie.)' },
        { difficulty: 'Hard', question: 'Zanele sê ʼn grafiek van y = x² + 2 sal identies lyk aan ʼn grafiek van y = 3x + 4. Watter stelling is korrek?', checkMode: 'auto', options: ['Sy is korrek — albei vergelykings lewer reguit lyne.', 'Sy is verkeerd — y = x² + 2 lewer ʼn gebuigde paraboolvorm, terwyl y = 3x + 4 ʼn reguit lyn lewer.', 'Sy is korrek — albei vergelykings lewer gebuigde parabole.', 'Sy is verkeerd — albei is parabole, maar verskillend verskuif.'], correctIndex: 1, explanation: 'y = x² + 2 is kwadraties, dus lewer dit ʼn gebuigde paraboolvorm. y = 3x + 4 is lineêr (y = mx + c vorm), dus lewer dit ʼn reguit lyn. Hulle grafieke het fundamenteel verskillende vorms. (Opsies A en C neem verkeerdelik aan dat die twee vergelykings dieselfde grafiektipe deel; opsie D noem y = 3x + 4 verkeerdelik ʼn parabool.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het insette, uitsette en vergelykings vir funksies en verwantskappe bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor vloeidiagramme of tabelle van waardes weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor vervanging en ekwivalensie weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Uitset vind gegewe die inset (Easy)
        { difficulty: 'Easy', question: 'Gebruik y = 6x − 7 om y te vind wanneer x = 5.', checkMode: 'auto', options: ['30', '-12', '23', '37'], correctIndex: 2, explanation: 'Vervang x = 5: y = 6(5) − 7 = 30 − 7 = 23. (30 vergeet om 7 af te trek; −12 trek verkeerdelik 7 van x af voordat vermenigvuldig word; 37 tel 7 by in plaas daarvan om af te trek.)' },
        { difficulty: 'Easy', question: 'Gebruik y = 8x + 4 om y te vind wanneer x = 2.', checkMode: 'auto', options: ['16', '48', '12', '20'], correctIndex: 3, explanation: 'Vervang x = 2: y = 8(2) + 4 = 16 + 4 = 20. (16 vergeet om 4 by te tel; 48 tel verkeerdelik 4 by x voordat vermenigvuldig word; 12 trek 4 af in plaas daarvan om dit by te tel.)' },
        { difficulty: 'Easy', question: 'Gebruik y = −5x + 21 om y te vind wanneer x = 4.', checkMode: 'auto', options: ['1', '-20', '41', '-41'], correctIndex: 0, explanation: 'Vervang x = 4: y = −5(4) + 21 = −20 + 21 = 1. (−20 vergeet om 21 by te tel; 41 laat die negatiewe teken op −5x weg; −41 trek 21 af in plaas daarvan om dit by te tel.)' },

        // Blok 2 — Inset vind gegewe die uitset (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Gebruik y = 7x + 3 om x te vind wanneer y = 45.', checkMode: 'auto', options: ['42', '6', '6.86', '6.43'], correctIndex: 1, explanation: 'Vervang y = 45: 45 = 7x + 3. Trek 3 af: 42 = 7x. Deel deur 7: x = 6. (42 hou op ná die aftrekking sonder om te deel; 6.86 tel 3 by in plaas daarvan om af te trek voor deling; 6.43 deel 45 deur 7 sonder om eers 3 af te trek.)' },
        { difficulty: 'Easy-Medium', question: 'Gebruik y = 9x − 14 om x te vind wanneer y = 13.', checkMode: 'auto', options: ['27', '-0.11', '3', '1.44'], correctIndex: 2, explanation: 'Vervang y = 13: 13 = 9x − 14. Tel 14 by: 27 = 9x. Deel deur 9: x = 3. (27 hou op ná die bytelling sonder om te deel; −0.11 trek 14 af in plaas daarvan om by te tel voor deling; 1.44 deel 13 deur 9 sonder om eers 14 by te tel.)' },
        { difficulty: 'Easy-Medium', question: 'Gebruik y = 4x + 20 om x te vind wanneer y = 8.', checkMode: 'auto', options: ['-12', '7', '2', '-3'], correctIndex: 3, explanation: 'Vervang y = 8: 8 = 4x + 20. Trek 20 af: −12 = 4x. Deel deur 4: x = −3. (−12 hou op ná die aftrekking sonder om te deel; 7 tel 20 by in plaas daarvan om af te trek voor deling; 2 deel 8 deur 4 sonder om eers 20 af te trek.)' },

        // Blok 3 — Vloeidiagramme / getalmasjiene [DIAGRAM-FLAGGED]
        { difficulty: 'Easy', question: 'ʼn Vloeidiagram, soos gewys, het inset 8 → ×4 → +3 → uitset. Vind die uitset.', checkMode: 'auto', options: ['35', '32', '44', '34'], correctIndex: 0, explanation: 'Deur die vloeidiagram te volg: 8 × 4 = 32, dan 32 + 3 = 35. (32 hou op ná die vermenigvuldiging en vergeet om 3 by te tel; 44 tel verkeerdelik 3 by die inset voordat met 4 vermenigvuldig word; 34 lees die tweede blokkie verkeerd as +2 in plaas van +3.)', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">8</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×4</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+3</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vloeidiagram, soos gewys, wys inset x → −7 → ×5 → uitset 30. Vind die inset x.', checkMode: 'auto', options: ['6', '13', '37', '-1'], correctIndex: 1, explanation: '(x − 7) × 5 = 30, dus x − 7 = 6, wat x = 13 gee. (6 hou op ná die deling en vergeet om 7 terug te tel; 37 tel 7 by 30 sonder om deur 5 te deel; −1 trek 7 af in plaas daarvan om dit terug te tel.)', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−7</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×5</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">30</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Vloeidiagram, soos gewys, pas inset → ×4 → +3 → uitset toe. Die tabel wys: inset 2 gee uitset 11, en inset 5 gee uitset 23. Vind die uitset vir inset 10.', checkMode: 'auto', options: ['40', '52', '43', '37'], correctIndex: 2, explanation: 'Reël: uitset = 4 × inset + 3. Vir inset 10: 4(10) + 3 = 40 + 3 = 43. (40 vergeet om 3 by te tel; 52 tel verkeerdelik 3 by die inset voordat vermenigvuldig word; 37 trek 3 af in plaas daarvan om by te tel.)', diagramSvg: '<svg viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×4</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+3</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><text x="10" y="80" font-size="11" font-weight="700" fill="#374151">Bekende inset/uitset-pare:</text><rect x="30" y="88" width="90" height="55" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="75" y1="88" x2="75" y2="143" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="106" x2="120" y2="106" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="124" x2="120" y2="124" stroke="#0f1f3d" stroke-width="1"/><text x="52" y="100" text-anchor="middle" font-size="10" fill="#374151">inset</text><text x="97" y="100" text-anchor="middle" font-size="10" fill="#374151">uitset</text><text x="52" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">2</text><text x="97" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">11</text><text x="52" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">5</text><text x="97" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">23</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Vloeidiagram, soos gewys, het die reël "verdubbel die inset, en tel dan 9 by". As die inset 6 is, vind die uitset.', checkMode: 'auto', options: ['12', '30', '15', '21'], correctIndex: 3, explanation: 'Verdubbel 6: 6 × 2 = 12. Tel 9 by: 12 + 9 = 21. (12 hou op ná die verdubbeling en vergeet om 9 by te tel; 30 tel verkeerdelik 9 by die inset voordat verdubbel word; 15 tel 9 by die inset maar vergeet om te verdubbel.)', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">6</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×2</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+9</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text></svg>' },

        // Blok 4 — Ekwivalensie: die vergelyking uit ʼn tabel van waardes vind (Medium)
        { difficulty: 'Medium', question: 'ʼn Tabel wys x: 0, 1, 2, 3 en y: 5, 9, 13, 17. Vind die vergelyking.', checkMode: 'auto', options: ['y=4x+5', 'y=4x+9', 'y=5x+5', 'y=5x+4'], correctIndex: 0, explanation: 'Opeenvolgende verskille: 9−5=4, 13−9=4, 17−13=4, dus is die gradiënt 4. Wanneer x=0, is y=5, dus is die y-afsnit 5. Vergelyking: y = 4x + 5. (y=4x+9 verwar die y-waarde by x=1 met die y-afsnit; y=5x+5 bereken die gradiënt verkeerd; y=5x+4 verwissel die gradiënt en afsnit.)' },
        { difficulty: 'Medium', question: 'ʼn Tabel wys x: 1, 2, 3, 4 en y: 7, 12, 17, 22. Vind die vergelyking.', checkMode: 'auto', options: ['y=5x+7', 'y=5x+2', 'y=2x+5', 'y=4x+3'], correctIndex: 1, explanation: 'Opeenvolgende verskille: 12−7=5, 17−12=5, 22−17=5, dus is die gradiënt 5. Aangesien x by 1 begin, bereken die y-afsnit terug: 7 = 5(1) + c, dus c = 2. Vergelyking: y = 5x + 2. (y=5x+7 verwar die y-waarde by x=1 met die y-afsnit in plaas daarvan om terug te bereken; y=2x+5 verwissel die gradiënt en afsnit; y=4x+3 bereken die gradiënt verkeerd.)' },
        { difficulty: 'Medium', question: 'ʼn Tabel wys x: 0, 4, 8, 12 en y: 3, 19, 35, 51. Vind die vergelyking.', checkMode: 'auto', options: ['y=16x+3', 'y=4x+19', 'y=4x+3', 'y=5x+3'], correctIndex: 2, explanation: 'x neem elke keer met 4 toe; y neem toe met 16. Gradiënt = 16 ÷ 4 = 4. Wanneer x=0, is y=3, dus is die y-afsnit 3. Vergelyking: y = 4x + 3. (y=16x+3 vergeet om die y-verskil deur die x-stap te deel; y=4x+19 verwar die tweede y-waarde met die afsnit; y=5x+3 bereken die gradiënt verkeerd.)' },
        { difficulty: 'Medium', question: "Amahle se verwantskap word verbaal beskryf as 'vermenigvuldig die inset met 7, en trek dan 5 af'. Skryf die vergelyking en vind y wanneer x = 2.", checkMode: 'auto', correctAnswers: ['y=7x-5, y=9', 'y = 7x - 5, y = 9'], answer: 'y = 7x − 5, y = 9', parts: [
          { label: 'a) Skryf die vergelyking', correctAnswer: 'y=7x-5', correctAnswers: ['y=7x-5', 'y = 7x - 5', 'y=7x −5', 'y=7x−5'], explanation: '"Vermenigvuldig die inset met 7" beteken vermenigvuldig x met 7; "trek dan 5 af" beteken trek 5 af. Vergelyking: y = 7x − 5 ✓' },
          { label: 'b) Vind y wanneer x = 2', correctAnswer: '9', explanation: 'Vervang x = 2: y = 7(2) − 5 = 14 − 5 = 9 ✓' },
        ] },

        // Blok 5 — Grafiekkenmerke (gradiënt/y-afsnit) en geordende pare (Medium)
        { difficulty: 'Medium', question: 'ʼn Vergelyking is y = 8x − 6. Beskryf die gradiënt en y-afsnit van sy grafiek.', checkMode: 'auto', options: ['gradiënt=-6, y-afsnit=8', 'gradiënt=-8, y-afsnit=-6', 'gradiënt=8, y-afsnit=6', 'gradiënt=8, y-afsnit=-6'], correctIndex: 3, explanation: 'In die vergelyking y = mx + c, is m die gradiënt en c die y-afsnit. Hier is m = 8 en c = −6, dus gradiënt = 8 en y-afsnit = −6. (Die ander opsies verwissel die gradiënt en afsnit, of heg/laat verkeerdelik ʼn negatiewe teken weg.)' },
        { difficulty: 'Medium', question: 'ʼn Vergelyking is y = −2x + 7. Beskryf die gradiënt en y-afsnit van sy grafiek.', checkMode: 'auto', options: ['gradiënt=-2, y-afsnit=7', 'gradiënt=7, y-afsnit=-2', 'gradiënt=2, y-afsnit=7', 'gradiënt=-2, y-afsnit=-7'], correctIndex: 0, explanation: 'In die vergelyking y = mx + c, is m die gradiënt en c die y-afsnit. Hier is m = −2 en c = 7, dus gradiënt = −2 en y-afsnit = 7. (Die ander opsies verwissel die gradiënt en afsnit, laat die negatiewe teken op die gradiënt weg, of verander die teken van die afsnit.)' },
        { difficulty: 'Medium', question: 'Genereer ʼn tabel van geordende pare deur y = −2x + 4 te gebruik vir x = −1, 0, 1, 2.', checkMode: 'auto', options: ['(-1,2),(0,0),(1,-2),(2,-4)', '(-1,6),(0,4),(1,2),(2,0)', '(-1,2),(0,4),(1,6),(2,8)', '(-1,-4),(0,-1),(1,2),(2,5)'], correctIndex: 1, explanation: 'x=−1: y=−2(−1)+4=6. x=0: y=4. x=1: y=−2+4=2. x=2: y=−4+4=0. Pare: (−1,6),(0,4),(1,2),(2,0). (Die eerste opsie laat die +4 heeltemal weg; die derde draai die teken van die gradiënt regdeur om; die vierde verwar die reël met ʼn ander vergelyking.)' },

        // Blok 6 — Tabelle genereer, incl. kwadraties / foutopsporing (Hard)
        { difficulty: 'Hard', question: 'Kagiso genereer ʼn tabel deur y = x² − 3 te gebruik vir x = −2, −1, 0, 1, 2 en kry (−2, 1), (−1, −2), (0, −3), (1, −2), (2, 1). Watter stelling oor sy tabel is korrek?', checkMode: 'auto', options: ['Hy het ʼn fout gemaak by x = 0 — die korrekte waarde is y = 3, nie y = −3 nie.', 'Hy het ʼn fout gemaak by x = −2 en x = 2 — die korrekte waardes is y = −1, nie y = 1 nie.', 'Sy tabel is korrek — elke y-waarde stem ooreen met x² − 3, wat ʼn simmetriese parabool vorm.', 'Sy tabel kan nie ʼn parabool wees nie omdat dit negatiewe y-waardes bevat.'], correctIndex: 2, explanation: 'Deur elke x-waarde te vervang: (−2)²−3=1, (−1)²−3=−2, 0²−3=−3, 1²−3=−2, 2²−3=1 — almal stem ooreen met sy tabel, met die verwagte simmetrie. (Opsie A neem verkeerdelik aan dat 0²−3 positief moet wees; opsie B herbereken (±2)²−3 verkeerd as −1; parabole kan beslis negatiewe y-waardes insluit, dus is opsie D verkeerd.)' },
        { difficulty: 'Hard', question: 'Naledi sê die vergelyking y = 3x + 8 en die tabel x: 1, 2, 3 en y: 11, 14, 17 beskryf dieselfde verwantskap. Watter stelling is korrek?', checkMode: 'auto', options: ['Sy is verkeerd — deur x = 1 in y = 3x + 8 te vervang, kry jy y = 8, nie 11 nie.', 'Sy is verkeerd — die tabel het ʼn gradiënt van 8, nie 3 nie.', 'Dit kan nie bepaal word sonder om die tabel se y-afsnit te ken nie.', 'Sy is korrek — deur x = 1, 2, 3 in y = 3x + 8 te vervang, kry jy presies 11, 14, 17.'], correctIndex: 3, explanation: 'Deur x = 1, 2, 3 in y = 3x + 8 te vervang, kry jy presies 11, 14, 17, wat met die tabel ooreenstem. (Opsie A bereken 3(1)+8 verkeerd as 8; opsie B lees die tabel se gradiënt verkeerd, wat eintlik 3 is aangesien opeenvolgende y-waardes met 3 styg; die y-afsnit is nie nodig sodra drie ooreenstemmende punte ekwivalensie bevestig nie.)' },
        { difficulty: 'Hard', question: 'Sibusiso sê ʼn grafiek van y = x² − 3 sal identies lyk aan ʼn grafiek van y = 5x + 1. Watter stelling is korrek?', checkMode: 'auto', options: ['Hy is verkeerd — y = x² − 3 lewer ʼn gebuigde paraboolvorm, terwyl y = 5x + 1 ʼn reguit lyn lewer.', 'Hy is korrek — albei vergelykings lewer reguit lyne.', 'Hy is korrek — albei vergelykings lewer gebuigde parabole.', 'Hy is verkeerd — albei is parabole, maar verskillend verskuif.'], correctIndex: 0, explanation: 'y = x² − 3 is kwadraties, dus lewer dit ʼn gebuigde paraboolvorm. y = 5x + 1 is lineêr (y = mx + c vorm), dus lewer dit ʼn reguit lyn. Hulle grafieke het fundamenteel verskillende vorms. (Opsies B en C neem verkeerdelik aan dat die twee vergelykings dieselfde grafiektipe deel; opsie D noem y = 5x + 1 verkeerdelik ʼn parabool.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het insette, uitsette en vergelykings vir funksies en verwantskappe bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor vloeidiagramme of tabelle van waardes weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor vervanging en ekwivalensie weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
