import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (common fractions roles) ──────────────────────────────────
// whole number   → blue   (#2563eb)
// numerator      → orange (#ea580c)
// denominator    → red    (#dc2626)
// improper frac  → green  (#16a34a)
// common denom   → orange (#ea580c)
// final answer   → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Gewone Breuke',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — GEMENGDE GETALLE EN ONEGTE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mixed-numbers-improper-fractions',
      title: 'Gemengde Getalle en Onegte Breuke',
      icon: '½',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Gemengde getal</strong> het ʼn ${bl('heelgetal')}deel en ʼn breukdeel. ʼn <strong>Onegte breuk</strong> het ʼn ${or('teller')} wat groter is as die ${re('noemer')}. Ons kan tussen hierdie twee vorme omskakel.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('heelgetal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('teller')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('noemer')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('onegte breuk')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Gemengde Getal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Getal met ʼn ${bl('heelgetal')}deel en ʼn egte breukdeel, byvoorbeeld ${bl('4')}${or('2')}/${re('5')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Onegte Breuk</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Breuk waar die ${or('teller')} groter as of gelyk aan die ${re('noemer')} is, byvoorbeeld ${gr('22/5')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Teller</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${or('boonste getal')} van ʼn breuk — hoeveel dele ons het.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Noemer</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${re('onderste getal')} van ʼn breuk — in hoeveel gelyke dele die geheel verdeel is.</p>` +
        `</div>` +

        `</div>` +

        // ── Conversion rules ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Omskakelingsreëls</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Gemengde getal → Onegte breuk</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Vermenigvuldig die ${bl('heelgetal')} met die ${re('noemer')}, en tel dan die ${or('teller')} by. Hou dieselfde ${re('noemer')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Formule: (${bl('heelgetal')} × ${re('noemer')} + ${or('teller')}) / ${re('noemer')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Onegte breuk → Gemengde getal</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Deel die ${or('teller')} deur die ${re('noemer')}. Die kwosiënt is die ${bl('heelgetal')} en die res word die nuwe ${or('teller')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Formule: ${or('teller')} ÷ ${re('noemer')} = ${bl('heelgetal')} res ${or('nuwe teller')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom albei vorme nuttig is</p>` +
        `<p style="margin:0;color:#1e3a8a;">Gemengde getalle is makliker om te lees en te vergelyk. Onegte breuke is makliker om te gebruik wanneer jy breuke <strong>vermenigvuldig of deel</strong>. Jy sal dikwels moet omskakel voordat jy bereken.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skakel 4 en 2/5 om na ʼn onegte breuk.',
          answer: `${gr('22/5')}`,
          steps: [
            `Vermenigvuldig die ${bl('heelgetal')} met die ${re('noemer')}: ${bl('4')} × ${re('5')} = ${bl('20')}`,
            `Tel die ${or('teller')} by: ${bl('20')} + ${or('2')} = ${or('22')}`,
            `<strong>Antwoord:</strong> ${gr('22/5')} — hou dieselfde ${re('noemer')} (5) ✓`,
          ],
        },
        {
          question: 'Skakel 37/6 om na ʼn gemengde getal.',
          answer: `${bl('6')} en ${or('1')}/${re('6')}`,
          steps: [
            `Deel die ${or('teller')} deur die ${re('noemer')}: ${or('37')} ÷ ${re('6')} = ${bl('6')} res ${or('1')}`,
            `Die kwosiënt ${bl('6')} is die ${bl('heelgetal')} en die res ${or('1')} word die nuwe ${or('teller')}`,
            `<strong>Antwoord:</strong> ${bl('6')} en ${or('1')}/${re('6')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Easy — convert mixed number to improper fraction ──────────────
        {
          difficulty: 'Easy',
          question: 'Skakel 3 en 1/4 om na ʼn onegte breuk.',
          answer: '13/4',
          checkMode: 'auto',
          correctAnswer: '13/4',
          explanation: 'Stap 1: Vermenigvuldig die heelgetal met die noemer: 3 × 4 = 12.\nStap 2: Tel die teller by: 12 + 1 = 13.\nAntwoord: 13/4 ✓',
        },

        // ── V2 Easy — convert improper fraction to mixed number ──────────────
        {
          difficulty: 'Easy',
          question: 'Skakel 29/5 om na ʼn gemengde getal.',
          answer: '5 en 4/5',
          checkMode: 'auto',
          correctAnswer: '5 and 4/5',
          correctAnswers: ['5 and 4/5', '5 4/5'],
          explanation: 'Stap 1: Deel die teller deur die noemer: 29 ÷ 5 = 5 res 4.\nStap 2: Die kwosiënt 5 is die heelgetal en die res 4 word die nuwe teller.\nAntwoord: 5 en 4/5 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om tussen gemengde getalle en onegte breuke om te skakel met kleurgekodeerde stappe" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visuele diagram wat ʼn gemengde getal en sy ekwivalente onegte breuk wys met heelgetal in blou, teller in oranje, en noemer in rooi" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — ALLE BEWERKINGS MET BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'operations-with-fractions',
      title: 'Alle Bewerkings met Breuke',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">Ons kan breuke <strong>optel, aftrek, vermenigvuldig en deel</strong>. Elke bewerking het sy eie metode. Vereenvoudig jou antwoord altyd tot sy laagste terme.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('tellers')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('noemers')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gemene noemer')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── Four operations ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die vier bewerkings</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">+</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Optelling</strong> — Vind ʼn ${or('gemene noemer')} (LGV van die ${re('noemers')}), skakel elke breuk om, en tel dan die ${bl('tellers')} bymekaar. Hou die ${or('gemene noemer')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">−</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#dc2626;">Aftrekking</strong> — Vind ʼn ${or('gemene noemer')}, skakel elke breuk om, en trek dan die ${bl('tellers')} af. Hou die ${or('gemene noemer')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">×</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#ea580c;">Vermenigvuldiging</strong> — Vermenigvuldig die ${bl('tellers')} saam en die ${re('noemers')} saam. Geen gemene noemer nodig nie. Vereenvoudig dan.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">÷</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Deling</strong> — Vermenigvuldig met die <strong>resiprook</strong> van die tweede breuk. Draai die tweede breuk om en vermenigvuldig dan.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vereenvoudig jou antwoord altyd</p>` +
        `<p style="margin:0;color:#1e3a8a;">Na enige breukberekening, kyk of jou antwoord vereenvoudig kan word. Deel beide die ${bl('teller')} en ${re('noemer')} deur hul Grootste Gemene Faktor (GGF). As die ${gr('antwoord')} ʼn onegte breuk is, skakel dit om na ʼn gemengde getal.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken 2/3 + 3/4.',
          answer: `${gr('1 en 5/12')}`,
          steps: [
            `Vind die LGV van ${re('3')} en ${re('4')}: LGV = ${or('12')}`,
            `Skakel om: ${bl('2')}/${re('3')} = ${bl('8')}/${or('12')} &nbsp; (vermenigvuldig bo en onder met 4)`,
            `Skakel om: ${bl('3')}/${re('4')} = ${bl('9')}/${or('12')} &nbsp; (vermenigvuldig bo en onder met 3)`,
            `Tel die ${bl('tellers')} bymekaar: ${bl('8')} + ${bl('9')} = ${bl('17')}/${or('12')}`,
            `Skakel om na ʼn gemengde getal: ${bl('17')} ÷ ${or('12')} = 1 res 5`,
            `<strong>Antwoord:</strong> ${gr('1 en 5/12')} ✓`,
          ],
        },
        {
          question: 'Bereken 5/6 − 1/3.',
          answer: `${gr('1/2')}`,
          steps: [
            `Vind die LGV van ${re('6')} en ${re('3')}: LGV = ${or('6')}`,
            `Skakel om: ${bl('1')}/${re('3')} = ${bl('2')}/${or('6')} &nbsp; (vermenigvuldig bo en onder met 2)`,
            `Trek die ${bl('tellers')} af: ${bl('5')} − ${bl('2')} = ${bl('3')}/${or('6')}`,
            `Vereenvoudig: ${bl('3')}/${or('6')} = ${gr('1/2')} &nbsp; (deel beide deur 3)`,
            `<strong>Antwoord:</strong> ${gr('1/2')} ✓`,
          ],
        },
        {
          question: 'Bereken 2/3 × 3/5.',
          answer: `${gr('2/5')}`,
          steps: [
            `Vermenigvuldig die ${bl('tellers')}: ${bl('2')} × ${bl('3')} = ${bl('6')}`,
            `Vermenigvuldig die ${re('noemers')}: ${re('3')} × ${re('5')} = ${re('15')}`,
            `Resultaat: ${bl('6')}/${re('15')}`,
            `Vereenvoudig deur beide deur 3 te deel: ${bl('6')} ÷ 3 = ${bl('2')} en ${re('15')} ÷ 3 = ${re('5')}`,
            `<strong>Antwoord:</strong> ${gr('2/5')} ✓`,
          ],
        },
        {
          question: 'Bereken 3/4 ÷ 2/5.',
          answer: `${gr('1 en 7/8')}`,
          steps: [
            `Om deur ʼn breuk te deel, vermenigvuldig met sy <strong>resiprook</strong> — draai die tweede breuk om`,
            `${bl('3')}/${re('4')} ÷ ${bl('2')}/${re('5')} = ${bl('3')}/${re('4')} × ${bl('5')}/${re('2')}`,
            `Vermenigvuldig die ${bl('tellers')}: ${bl('3')} × ${bl('5')} = ${bl('15')}`,
            `Vermenigvuldig die ${re('noemers')}: ${re('4')} × ${re('2')} = ${re('8')}`,
            `Resultaat: ${bl('15')}/${re('8')} — dit is ʼn onegte breuk`,
            `Skakel om na ʼn gemengde getal: ${bl('15')} ÷ ${re('8')} = 1 res 7`,
            `<strong>Antwoord:</strong> ${gr('1 en 7/8')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V3 Medium — addition with unlike denominators ────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 1/3 + 1/4.',
          answer: '7/12',
          checkMode: 'auto',
          correctAnswer: '7/12',
          explanation: 'Stap 1: Vind die LGV van 3 en 4: LGV = 12.\nStap 2: Skakel om: 1/3 = 4/12, 1/4 = 3/12.\nStap 3: Tel die tellers bymekaar: 4 + 3 = 7.\nAntwoord: 7/12 ✓',
        },

        // ── V4 Medium — subtraction with unlike denominators ─────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 5/8 − 1/4.',
          answer: '3/8',
          checkMode: 'auto',
          correctAnswer: '3/8',
          explanation: 'Stap 1: Vind die LGV van 8 en 4: LGV = 8.\nStap 2: Skakel om: 1/4 = 2/8.\nStap 3: Trek die tellers af: 5 − 2 = 3.\nAntwoord: 3/8 ✓',
        },

        // ── V5 Hard — identify addition error and explain ────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho bereken 2/5 + 1/3 en kry 3/8. Is hy korrek? Verduidelik.',
          answer: 'Nee — hy het die tellers en noemers direk bymekaar getel. Die LGV van 5 en 3 is 15, dus 2/5 = 6/15 en 1/3 = 5/15. Som = 11/15.',
          checkMode: 'self',
        },

        // ── V6 Easy — multiply two proper fractions ──────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 2/3 × 1/4.',
          answer: '1/6',
          checkMode: 'auto',
          correctAnswer: '1/6',
          explanation: 'Stap 1: Vermenigvuldig die tellers: 2 × 1 = 2.\nStap 2: Vermenigvuldig die noemers: 3 × 4 = 12.\nStap 3: Resultaat: 2/12. Vereenvoudig deur beide deur 2 te deel: 1/6.\nAntwoord: 1/6 ✓',
        },

        // ── V7 Medium — multiply two proper fractions and simplify ───────────
        {
          difficulty: 'Medium',
          question: 'Bereken 3/5 × 2/3.',
          answer: '2/5',
          checkMode: 'auto',
          correctAnswer: '2/5',
          explanation: 'Stap 1: Vermenigvuldig die tellers: 3 × 2 = 6.\nStap 2: Vermenigvuldig die noemers: 5 × 3 = 15.\nStap 3: Resultaat: 6/15. Vereenvoudig deur beide deur 3 te deel: 2/5.\nAntwoord: 2/5 ✓',
        },

        // ── V8 Hard — challenge multiplication misconception ─────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê om breuke te vermenigvuldig gee altyd ʼn groter antwoord. Is sy korrek? Verduidelik.',
          answer: 'Nee — om twee breuke kleiner as 1 te vermenigvuldig gee ʼn kleiner antwoord, aangesien jy ʼn breuk van ʼn breuk vind.',
          checkMode: 'self',
        },

        // ── V9 Easy — divide a fraction by a unit fraction ───────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 1/2 ÷ 1/4.',
          answer: '2',
          checkMode: 'auto',
          correctAnswer: '2',
          explanation: 'Stap 1: Om deur ʼn breuk te deel, vermenigvuldig met sy resiprook. Draai 1/4 om om 4/1 te kry.\nStap 2: 1/2 × 4/1 = 4/2 = 2.\nAntwoord: 2 ✓',
        },

        // ── V10 Medium — divide two fractions ───────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 2/3 ÷ 3/5.',
          answer: '10/9',
          checkMode: 'auto',
          correctAnswer: '10/9',
          correctAnswers: ['10/9', '1 and 1/9', '1 1/9'],
          explanation: 'Stap 1: Draai die tweede breuk om vir sy resiprook: 5/3.\nStap 2: 2/3 × 5/3.\nStap 3: Vermenigvuldig die tellers: 2 × 5 = 10.\nStap 4: Vermenigvuldig die noemers: 3 × 3 = 9.\nResultaat: 10/9 = 1 en 1/9 ✓',
        },

        // ── V11 Hard — explain dividing by 1/2 ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo sê om deur 1/2 te deel is dieselfde as om met 2 te vermenigvuldig. Is hy korrek? Verduidelik.',
          answer: 'Ja — om deur ʼn breuk te deel beteken om met sy resiprook te vermenigvuldig, en die resiprook van 1/2 is 2.',
          checkMode: 'self',
        },

        // ── V12 Hard — add two mixed numbers ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Bereken 1 en 1/2 + 2 en 2/3.',
          answer: '4 en 1/6',
          checkMode: 'auto',
          correctAnswer: '4 and 1/6',
          correctAnswers: ['4 and 1/6', '4 1/6', '25/6'],
          explanation: 'Stap 1: Skakel om na onegte breuke: 1 en 1/2 = 3/2, 2 en 2/3 = 8/3.\nStap 2: Vind die LGV van 2 en 3: LGV = 6.\nStap 3: Skakel om: 3/2 = 9/6, 8/3 = 16/6.\nStap 4: Tel die tellers bymekaar: 9 + 16 = 25. Resultaat: 25/6.\nStap 5: Skakel om na ʼn gemengde getal: 25 ÷ 6 = 4 res 1.\nAntwoord: 4 en 1/6 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om breuke op te tel af te trek te vermenigvuldig en te deel met kleurgekodeerde tellers en noemers" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat al vier breukbewerkings langs mekaar wys met tellers in blou noemers in rooi gemene noemer in oranje en finale antwoord in groen" />',
    },
  ],
  scoreMessages: [
    { minScore: 12, message: 'Uitstekend! Jy het gewone breuke bemeester.' },
    { minScore: 9, message: 'Goeie werk!' },
    { minScore: 6, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk deur die gids weer.' },
  ],
}
