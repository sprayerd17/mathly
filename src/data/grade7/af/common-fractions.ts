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
        'Kort video wat wys hoe om tussen gemengde getalle en onegte breuke om te skakel met kleurgekodeerde stappe',

      diagramPlaceholder: 'Visuele diagram wat ʼn gemengde getal en sy ekwivalente onegte breuk wys met heelgetal in blou, teller in oranje, en noemer in rooi',
      diagramSvg: '<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="35" height="90" fill="#93c5fd"/><rect x="15" y="15" width="35" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="15" y1="33" x2="50" y2="33" stroke="#0f1f3d" stroke-width="1"/><line x1="15" y1="51" x2="50" y2="51" stroke="#0f1f3d" stroke-width="1"/><line x1="15" y1="69" x2="50" y2="69" stroke="#0f1f3d" stroke-width="1"/><line x1="15" y1="87" x2="50" y2="87" stroke="#0f1f3d" stroke-width="1"/><rect x="55" y="15" width="35" height="90" fill="#93c5fd"/><rect x="55" y="15" width="35" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="33" x2="90" y2="33" stroke="#0f1f3d" stroke-width="1"/><line x1="55" y1="51" x2="90" y2="51" stroke="#0f1f3d" stroke-width="1"/><line x1="55" y1="69" x2="90" y2="69" stroke="#0f1f3d" stroke-width="1"/><line x1="55" y1="87" x2="90" y2="87" stroke="#0f1f3d" stroke-width="1"/><rect x="95" y="15" width="35" height="90" fill="#93c5fd"/><rect x="95" y="15" width="35" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="95" y1="33" x2="130" y2="33" stroke="#0f1f3d" stroke-width="1"/><line x1="95" y1="51" x2="130" y2="51" stroke="#0f1f3d" stroke-width="1"/><line x1="95" y1="69" x2="130" y2="69" stroke="#0f1f3d" stroke-width="1"/><line x1="95" y1="87" x2="130" y2="87" stroke="#0f1f3d" stroke-width="1"/><rect x="135" y="15" width="35" height="90" fill="#93c5fd"/><rect x="135" y="15" width="35" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="135" y1="33" x2="170" y2="33" stroke="#0f1f3d" stroke-width="1"/><line x1="135" y1="51" x2="170" y2="51" stroke="#0f1f3d" stroke-width="1"/><line x1="135" y1="69" x2="170" y2="69" stroke="#0f1f3d" stroke-width="1"/><line x1="135" y1="87" x2="170" y2="87" stroke="#0f1f3d" stroke-width="1"/><rect x="175" y="69" width="35" height="36" fill="#fdba74"/><rect x="175" y="15" width="35" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="175" y1="33" x2="210" y2="33" stroke="#0f1f3d" stroke-width="1"/><line x1="175" y1="51" x2="210" y2="51" stroke="#0f1f3d" stroke-width="1"/><line x1="175" y1="69" x2="210" y2="69" stroke="#0f1f3d" stroke-width="1"/><line x1="175" y1="87" x2="210" y2="87" stroke="#0f1f3d" stroke-width="1"/><text x="32.5" y="118" font-size="11" text-anchor="middle" fill="#2563eb" font-weight="700">5/5</text><text x="72.5" y="118" font-size="11" text-anchor="middle" fill="#2563eb" font-weight="700">5/5</text><text x="112.5" y="118" font-size="11" text-anchor="middle" fill="#2563eb" font-weight="700">5/5</text><text x="152.5" y="118" font-size="11" text-anchor="middle" fill="#2563eb" font-weight="700">5/5</text><text x="192.5" y="118" font-size="11" text-anchor="middle" fill="#ea580c" font-weight="700">2/5</text><text x="130" y="138" font-weight="700" font-size="13" text-anchor="middle" fill="#16a34a">4 en 2/5 = 20/5 + 2/5 = 22/5</text></svg>',
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
        'Kort video wat wys hoe om breuke op te tel af te trek te vermenigvuldig en te deel met kleurgekodeerde tellers en noemers',

    },
  ],
  scoreMessages: [
    { minScore: 12, message: 'Uitstekend! Jy het gewone breuke bemeester.' },
    { minScore: 9, message: 'Goeie werk!' },
    { minScore: 6, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk deur die gids weer.' },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // OEFENSTELLE — 3 stelle × 20 vrae
  // Bloklayout per stel: 0-3 ekwivalensie/vereenvoudiging/rangskikking van breuke
  // (Maklik) | 4-8 optelling & aftrekking met ongelyke noemers, ingesluit gemengde
  // getalle (Maklik-Medium/Medium) | 9-12 vermenigvuldiging van breuke & gemengde
  // getalle (Medium) | 13-15 deling van breuke & gemengde getalle (Medium-Moeilik) |
  // 16-17 gemengde bewerkings / bewerkingsvolgorde met breuke (Moeilik) |
  // 18-19 breukvraagstukke (Moeilik)
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1: ekwivalensie / vereenvoudiging / rangskikking (V1-4)
        { difficulty: 'Easy', question: 'Vereenvoudig 18/24 tot sy eenvoudigste vorm.', answer: '3/4', checkMode: 'auto', correctAnswer: '3/4', correctAnswers: ['3/4'], explanation: 'Stap 1: Vind die GGF van 18 en 24. Faktore van 18: 1, 2, 3, 6, 9, 18. Faktore van 24: 1, 2, 3, 4, 6, 8, 12, 24. GGF = 6.\nStap 2: Deel beide deur 6: 18 ÷ 6 = 3, 24 ÷ 6 = 4.\nAntwoord: 3/4 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende teller: 4/7 = x/28.', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', 'x = 16'], explanation: 'Stap 1: Bepaal waarmee 7 vermenigvuldig is om 28 te kry: 28 ÷ 7 = 4.\nStap 2: Vermenigvuldig die teller met dieselfde getal: 4 × 4 = 16.\nAntwoord: x = 16 ✓' },
        { difficulty: 'Medium', question: 'Watter een is groter: 5/6 of 7/9? Wys jou berekening.', answer: '5/6', checkMode: 'auto', correctAnswer: '5/6', correctAnswers: ['5/6'], explanation: 'Stap 1: Vind die LGV van 6 en 9: LGV = 18.\nStap 2: Skakel om: 5/6 = 15/18, 7/9 = 14/18.\nStap 3: Vergelyk die tellers: 15/18 > 14/18.\nAntwoord: 5/6 is groter ✓' },
        { difficulty: 'Medium', question: 'Rangskik 7/10, 3/5 en 13/20 van kleinste na grootste.', answer: '3/5, 13/20, 7/10', checkMode: 'auto', correctAnswer: '3/5, 13/20, 7/10', correctAnswers: ['3/5, 13/20, 7/10', '3/5; 13/20; 7/10'], explanation: 'Stap 1: Vind die LGV van 10, 5 en 20: LGV = 20.\nStap 2: Skakel om: 7/10 = 14/20, 3/5 = 12/20, 13/20 bly 13/20.\nStap 3: Rangskik die tellers: 12 < 13 < 14, dus 3/5 < 13/20 < 7/10.\nAntwoord: 3/5, 13/20, 7/10 ✓' },

        // Blok 2: optelling & aftrekking met ongelyke noemers, ingesluit gemengde getalle (V5-9)
        { difficulty: 'Easy-Medium', question: 'Bereken 2/5 + 1/4.', answer: '13/20', checkMode: 'auto', correctAnswer: '13/20', correctAnswers: ['13/20'], explanation: 'Stap 1: Vind die LGV van 5 en 4: LGV = 20.\nStap 2: Skakel om: 2/5 = 8/20, 1/4 = 5/20.\nStap 3: Tel die tellers bymekaar: 8 + 5 = 13.\nAntwoord: 13/20 ✓' },
        { difficulty: 'Medium', question: 'Bereken 7/8 − 1/3.', answer: '13/24', checkMode: 'auto', correctAnswer: '13/24', correctAnswers: ['13/24'], explanation: 'Stap 1: Vind die LGV van 8 en 3: LGV = 24.\nStap 2: Skakel om: 7/8 = 21/24, 1/3 = 8/24.\nStap 3: Trek die tellers af: 21 − 8 = 13.\nAntwoord: 13/24 ✓' },
        { difficulty: 'Medium', question: 'Bereken 1 en 3/4 + 2 en 1/3.', answer: '4 en 1/12', checkMode: 'auto', correctAnswer: '4 and 1/12', correctAnswers: ['4 and 1/12', '4 en 1/12', '4 1/12', '49/12'], explanation: 'Stap 1: Skakel om na onegte breuke: 1 en 3/4 = 7/4, 2 en 1/3 = 7/3.\nStap 2: Vind die LGV van 4 en 3: LGV = 12.\nStap 3: Skakel om: 7/4 = 21/12, 7/3 = 28/12.\nStap 4: Tel die tellers bymekaar: 21 + 28 = 49. Resultaat: 49/12.\nStap 5: Skakel om na ʼn gemengde getal: 49 ÷ 12 = 4 res 1.\nAntwoord: 4 en 1/12 ✓' },
        { difficulty: 'Hard', question: 'Zanele bereken 3/5 + 1/4 deur te skryf (3+1)/(5+4) = 4/9. Is sy korrek? Verduidelik en gee die korrekte antwoord.', answer: 'Nee — Zanele het die tellers en noemers direk bymekaar getel, en dit is nie hoe breuke opgetel word nie. Sy moet eers ʼn gemene noemer vind. Die LGV van 5 en 4 is 20, dus 3/5 = 12/20 en 1/4 = 5/20. Optelling gee 12/20 + 5/20 = 17/20, nie 4/9 nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Bereken 4 en 1/6 − 1 en 2/3.', answer: '2 en 1/2', checkMode: 'auto', correctAnswer: '2 and 1/2', correctAnswers: ['2 and 1/2', '2 en 1/2', '2 1/2', '5/2'], explanation: 'Stap 1: Skakel om na onegte breuke: 4 en 1/6 = 25/6, 1 en 2/3 = 5/3.\nStap 2: Vind die LGV van 6 en 3: LGV = 6.\nStap 3: Skakel om: 5/3 = 10/6.\nStap 4: Trek die tellers af: 25 − 10 = 15. Resultaat: 15/6.\nStap 5: Vereenvoudig: 15/6 = 5/2. Skakel om na ʼn gemengde getal: 5 ÷ 2 = 2 res 1.\nAntwoord: 2 en 1/2 ✓' },

        // Blok 3: vermenigvuldiging van breuke & gemengde getalle (V10-13)
        { difficulty: 'Easy-Medium', question: 'Bereken 3/4 × 2/9.', answer: '1/6', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6'], explanation: 'Stap 1: Vermenigvuldig die tellers: 3 × 2 = 6.\nStap 2: Vermenigvuldig die noemers: 4 × 9 = 36.\nStap 3: Resultaat: 6/36. Vereenvoudig deur beide deur 6 te deel: 1/6.\nAntwoord: 1/6 ✓' },
        { difficulty: 'Medium', question: 'Bereken 5/6 × 3/10.', answer: '1/4', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4'], explanation: 'Stap 1: Vermenigvuldig die tellers: 5 × 3 = 15.\nStap 2: Vermenigvuldig die noemers: 6 × 10 = 60.\nStap 3: Resultaat: 15/60. Vereenvoudig deur beide deur 15 te deel: 1/4.\nAntwoord: 1/4 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 2 en 1/2 × 1 en 1/3.', answer: '3 en 1/3', checkMode: 'auto', correctAnswer: '3 and 1/3', correctAnswers: ['3 and 1/3', '3 en 1/3', '3 1/3', '10/3'], explanation: 'Stap 1: Skakel om na onegte breuke: 2 en 1/2 = 5/2, 1 en 1/3 = 4/3.\nStap 2: Vermenigvuldig die tellers: 5 × 4 = 20.\nStap 3: Vermenigvuldig die noemers: 2 × 3 = 6.\nStap 4: Resultaat: 20/6. Vereenvoudig deur beide deur 2 te deel: 10/3.\nStap 5: Skakel om na ʼn gemengde getal: 10 ÷ 3 = 3 res 1.\nAntwoord: 3 en 1/3 ✓' },
        { difficulty: 'Hard', question: 'Karabo sê 2/3 × 3/4 moet groter wees as beide 2/3 en 3/4, want vermenigvuldiging maak getalle altyd groter. Is hy korrek? Verduidelik en gee die korrekte antwoord.', answer: 'Nee — om twee egte breuke (beide kleiner as 1) te vermenigvuldig gee ʼn kleiner antwoord, aangesien jy ʼn breuk van ʼn breuk vind. 2/3 × 3/4 = 6/12 = 1/2, wat kleiner is as beide 2/3 en 3/4.', checkMode: 'self' },

        // Blok 4: deling van breuke & gemengde getalle (V14-16)
        { difficulty: 'Medium', question: 'Bereken 3/8 ÷ 1/4.', answer: '1 en 1/2', checkMode: 'auto', correctAnswer: '1 and 1/2', correctAnswers: ['1 and 1/2', '1 en 1/2', '1 1/2', '3/2'], explanation: 'Stap 1: Om deur ʼn breuk te deel, vermenigvuldig met sy resiprook. Draai 1/4 om om 4/1 te kry.\nStap 2: 3/8 × 4/1.\nStap 3: Vermenigvuldig die tellers: 3 × 4 = 12. Vermenigvuldig die noemers: 8 × 1 = 8.\nStap 4: Resultaat: 12/8. Vereenvoudig deur beide deur 4 te deel: 3/2.\nAntwoord: 1 en 1/2 ✓' },
        { difficulty: 'Medium', question: 'Bereken 5/6 ÷ 2/3.', answer: '1 en 1/4', checkMode: 'auto', correctAnswer: '1 and 1/4', correctAnswers: ['1 and 1/4', '1 en 1/4', '1 1/4', '5/4'], explanation: 'Stap 1: Draai die tweede breuk om vir sy resiprook: 3/2.\nStap 2: 5/6 × 3/2.\nStap 3: Vermenigvuldig die tellers: 5 × 3 = 15. Vermenigvuldig die noemers: 6 × 2 = 12.\nStap 4: Resultaat: 15/12. Vereenvoudig deur beide deur 3 te deel: 5/4.\nAntwoord: 1 en 1/4 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 3 en 1/3 ÷ 1 en 2/3.', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2'], explanation: 'Stap 1: Skakel om na onegte breuke: 3 en 1/3 = 10/3, 1 en 2/3 = 5/3.\nStap 2: Draai die tweede breuk om: 3/5.\nStap 3: 10/3 × 3/5.\nStap 4: Vermenigvuldig die tellers: 10 × 3 = 30. Vermenigvuldig die noemers: 3 × 5 = 15.\nStap 5: Resultaat: 30/15 = 2.\nAntwoord: 2 ✓' },

        // Blok 5: gemengde bewerkings / bewerkingsvolgorde met breuke (V17-18)
        { difficulty: 'Hard', question: 'Bereken 1/2 + 1/3 × 3/4, deur die korrekte bewerkingsvolgorde te gebruik.', answer: '3/4', checkMode: 'auto', correctAnswer: '3/4', correctAnswers: ['3/4'], explanation: 'Stap 1: Vermenigvuldiging voor optelling: 1/3 × 3/4 = 3/12 = 1/4.\nStap 2: Tel nou by: 1/2 + 1/4. Vind die LGV van 2 en 4: LGV = 4. Skakel om: 1/2 = 2/4.\nStap 3: Tel die tellers bymekaar: 2 + 1 = 3.\nAntwoord: 3/4 ✓' },
        { difficulty: 'Hard', question: 'Bereken (2/3 + 1/6) ÷ 5/6.', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1'], explanation: 'Stap 1: Werk eers die hakie uit: 2/3 + 1/6. Vind die LGV van 3 en 6: LGV = 6. Skakel om: 2/3 = 4/6.\nStap 2: Tel by: 4/6 + 1/6 = 5/6.\nStap 3: Deel: 5/6 ÷ 5/6 = 5/6 × 6/5 = 30/30 = 1.\nAntwoord: 1 ✓' },

        // Blok 6: breukvraagstukke (V19-20)
        { difficulty: 'Hard', question: 'ʼn Resep benodig 3/4 koppie meel vir een bondel muffins. Thandiwe wil net 2/3 van ʼn bondel maak. Hoeveel meel het sy nodig?', answer: '1/2 koppie', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '1/2 koppie'], explanation: 'Stap 1: Om ʼn breuk van ʼn hoeveelheid te vind, vermenigvuldig: 3/4 × 2/3.\nStap 2: Vermenigvuldig die tellers: 3 × 2 = 6. Vermenigvuldig die noemers: 4 × 3 = 12.\nStap 3: Resultaat: 6/12. Vereenvoudig deur beide deur 6 te deel: 1/2.\nAntwoord: 1/2 koppie ✓' },
        { difficulty: 'Hard', question: 'Na ʼn partytjie is 5/8 van ʼn pizza oor. Sipho eet 1/4 van wat oor is. Watter breukdeel van die hele pizza eet Sipho?', answer: '5/32', checkMode: 'auto', correctAnswer: '5/32', correctAnswers: ['5/32'], explanation: 'Stap 1: "1/4 van wat oor is" beteken 1/4 van 5/8, dus vermenigvuldig: 5/8 × 1/4.\nStap 2: Vermenigvuldig die tellers: 5 × 1 = 5. Vermenigvuldig die noemers: 8 × 4 = 32.\nStap 3: Resultaat: 5/32 (reeds in laagste terme).\nAntwoord: 5/32 van die hele pizza ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het ʼn baie stewige begrip van gewone breuke.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan terug na die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklayout as Stel 1, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1: ekwivalensie / vereenvoudiging / rangskikking (V1-4)
        { difficulty: 'Easy', question: 'Vereenvoudig 24/36 tot sy eenvoudigste vorm.', answer: '2/3', checkMode: 'auto', correctAnswer: '2/3', correctAnswers: ['2/3'], explanation: 'Stap 1: Vind die GGF van 24 en 36. Faktore van 24: 1, 2, 3, 4, 6, 8, 12, 24. Faktore van 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. GGF = 12.\nStap 2: Deel beide deur 12: 24 ÷ 12 = 2, 36 ÷ 12 = 3.\nAntwoord: 2/3 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende teller: 5/9 = x/45.', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', 'x = 25'], explanation: 'Stap 1: Bepaal waarmee 9 vermenigvuldig is om 45 te kry: 45 ÷ 9 = 5.\nStap 2: Vermenigvuldig die teller met dieselfde getal: 5 × 5 = 25.\nAntwoord: x = 25 ✓' },
        { difficulty: 'Medium', question: 'Watter een is groter: 4/5 of 11/15? Wys jou berekening.', answer: '4/5', checkMode: 'auto', correctAnswer: '4/5', correctAnswers: ['4/5'], explanation: 'Stap 1: Vind die LGV van 5 en 15: LGV = 15.\nStap 2: Skakel om: 4/5 = 12/15, 11/15 bly 11/15.\nStap 3: Vergelyk die tellers: 12/15 > 11/15.\nAntwoord: 4/5 is groter ✓' },
        { difficulty: 'Medium', question: 'Rangskik 5/12, 7/18 en 1/2 van kleinste na grootste.', answer: '7/18, 5/12, 1/2', checkMode: 'auto', correctAnswer: '7/18, 5/12, 1/2', correctAnswers: ['7/18, 5/12, 1/2', '7/18; 5/12; 1/2'], explanation: 'Stap 1: Vind die LGV van 12, 18 en 2: LGV = 36.\nStap 2: Skakel om: 5/12 = 15/36, 7/18 = 14/36, 1/2 = 18/36.\nStap 3: Rangskik die tellers: 14 < 15 < 18, dus 7/18 < 5/12 < 1/2.\nAntwoord: 7/18, 5/12, 1/2 ✓' },

        // Blok 2: optelling & aftrekking met ongelyke noemers, ingesluit gemengde getalle (V5-9)
        { difficulty: 'Easy-Medium', question: 'Bereken 3/8 + 1/6.', answer: '13/24', checkMode: 'auto', correctAnswer: '13/24', correctAnswers: ['13/24'], explanation: 'Stap 1: Vind die LGV van 8 en 6: LGV = 24.\nStap 2: Skakel om: 3/8 = 9/24, 1/6 = 4/24.\nStap 3: Tel die tellers bymekaar: 9 + 4 = 13.\nAntwoord: 13/24 ✓' },
        { difficulty: 'Medium', question: 'Bereken 5/6 − 3/10.', answer: '8/15', checkMode: 'auto', correctAnswer: '8/15', correctAnswers: ['8/15'], explanation: 'Stap 1: Vind die LGV van 6 en 10: LGV = 30.\nStap 2: Skakel om: 5/6 = 25/30, 3/10 = 9/30.\nStap 3: Trek die tellers af: 25 − 9 = 16. Resultaat: 16/30.\nStap 4: Vereenvoudig deur beide deur 2 te deel: 8/15.\nAntwoord: 8/15 ✓' },
        { difficulty: 'Medium', question: 'Bereken 2 en 2/5 + 1 en 1/2.', answer: '3 en 9/10', checkMode: 'auto', correctAnswer: '3 and 9/10', correctAnswers: ['3 and 9/10', '3 en 9/10', '3 9/10', '39/10'], explanation: 'Stap 1: Skakel om na onegte breuke: 2 en 2/5 = 12/5, 1 en 1/2 = 3/2.\nStap 2: Vind die LGV van 5 en 2: LGV = 10.\nStap 3: Skakel om: 12/5 = 24/10, 3/2 = 15/10.\nStap 4: Tel die tellers bymekaar: 24 + 15 = 39. Resultaat: 39/10.\nStap 5: Skakel om na ʼn gemengde getal: 39 ÷ 10 = 3 res 9.\nAntwoord: 3 en 9/10 ✓' },
        { difficulty: 'Hard', question: 'Mpho bereken 2/3 + 3/8 deur te skryf (2+3)/(3+8) = 5/11. Is hy korrek? Verduidelik en gee die korrekte antwoord.', answer: 'Nee — Mpho het die tellers en noemers direk bymekaar getel, en dit is nie hoe breuke opgetel word nie. Hy moet eers ʼn gemene noemer vind. Die LGV van 3 en 8 is 24, dus 2/3 = 16/24 en 3/8 = 9/24. Optelling gee 16/24 + 9/24 = 25/24 = 1 en 1/24, nie 5/11 nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Bereken 5 en 1/4 − 2 en 5/6.', answer: '2 en 5/12', checkMode: 'auto', correctAnswer: '2 and 5/12', correctAnswers: ['2 and 5/12', '2 en 5/12', '2 5/12', '29/12'], explanation: 'Stap 1: Skakel om na onegte breuke: 5 en 1/4 = 21/4, 2 en 5/6 = 17/6.\nStap 2: Vind die LGV van 4 en 6: LGV = 12.\nStap 3: Skakel om: 21/4 = 63/12, 17/6 = 34/12.\nStap 4: Trek die tellers af: 63 − 34 = 29. Resultaat: 29/12.\nStap 5: Skakel om na ʼn gemengde getal: 29 ÷ 12 = 2 res 5.\nAntwoord: 2 en 5/12 ✓' },

        // Blok 3: vermenigvuldiging van breuke & gemengde getalle (V10-13)
        { difficulty: 'Easy-Medium', question: 'Bereken 5/6 × 3/10.', answer: '1/4', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4'], explanation: 'Stap 1: Vermenigvuldig die tellers: 5 × 3 = 15.\nStap 2: Vermenigvuldig die noemers: 6 × 10 = 60.\nStap 3: Resultaat: 15/60. Vereenvoudig deur beide deur 15 te deel: 1/4.\nAntwoord: 1/4 ✓' },
        { difficulty: 'Medium', question: 'Bereken 4/9 × 3/8.', answer: '1/6', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6'], explanation: 'Stap 1: Vermenigvuldig die tellers: 4 × 3 = 12.\nStap 2: Vermenigvuldig die noemers: 9 × 8 = 72.\nStap 3: Resultaat: 12/72. Vereenvoudig deur beide deur 12 te deel: 1/6.\nAntwoord: 1/6 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 1 en 3/5 × 2 en 1/2.', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4'], explanation: 'Stap 1: Skakel om na onegte breuke: 1 en 3/5 = 8/5, 2 en 1/2 = 5/2.\nStap 2: Vermenigvuldig die tellers: 8 × 5 = 40.\nStap 3: Vermenigvuldig die noemers: 5 × 2 = 10.\nStap 4: Resultaat: 40/10 = 4.\nAntwoord: 4 ✓' },
        { difficulty: 'Hard', question: 'Naledi sê 3/4 × 4/5 moet groter wees as beide 3/4 en 4/5, want vermenigvuldiging maak getalle altyd groter. Is sy korrek? Verduidelik en gee die korrekte antwoord.', answer: 'Nee — om twee egte breuke (beide kleiner as 1) te vermenigvuldig gee ʼn kleiner antwoord, aangesien jy ʼn breuk van ʼn breuk vind. 3/4 × 4/5 = 12/20 = 3/5, wat kleiner is as beide 3/4 en 4/5.', checkMode: 'self' },

        // Blok 4: deling van breuke & gemengde getalle (V14-16)
        { difficulty: 'Medium', question: 'Bereken 5/9 ÷ 2/3.', answer: '5/6', checkMode: 'auto', correctAnswer: '5/6', correctAnswers: ['5/6'], explanation: 'Stap 1: Draai die tweede breuk om vir sy resiprook: 3/2.\nStap 2: 5/9 × 3/2.\nStap 3: Vermenigvuldig die tellers: 5 × 3 = 15. Vermenigvuldig die noemers: 9 × 2 = 18.\nStap 4: Resultaat: 15/18. Vereenvoudig deur beide deur 3 te deel: 5/6.\nAntwoord: 5/6 ✓' },
        { difficulty: 'Medium', question: 'Bereken 7/8 ÷ 5/6.', answer: '1 en 1/20', checkMode: 'auto', correctAnswer: '1 and 1/20', correctAnswers: ['1 and 1/20', '1 en 1/20', '1 1/20', '21/20'], explanation: 'Stap 1: Draai die tweede breuk om vir sy resiprook: 6/5.\nStap 2: 7/8 × 6/5.\nStap 3: Vermenigvuldig die tellers: 7 × 6 = 42. Vermenigvuldig die noemers: 8 × 5 = 40.\nStap 4: Resultaat: 42/40. Vereenvoudig deur beide deur 2 te deel: 21/20.\nStap 5: Skakel om na ʼn gemengde getal: 21 ÷ 20 = 1 res 1.\nAntwoord: 1 en 1/20 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 4 en 2/3 ÷ 1 en 1/9.', answer: '4 en 1/5', checkMode: 'auto', correctAnswer: '4 and 1/5', correctAnswers: ['4 and 1/5', '4 en 1/5', '4 1/5', '21/5'], explanation: 'Stap 1: Skakel om na onegte breuke: 4 en 2/3 = 14/3, 1 en 1/9 = 10/9.\nStap 2: Draai die tweede breuk om: 9/10.\nStap 3: 14/3 × 9/10.\nStap 4: Vermenigvuldig die tellers: 14 × 9 = 126. Vermenigvuldig die noemers: 3 × 10 = 30.\nStap 5: Resultaat: 126/30. Vereenvoudig deur beide deur 6 te deel: 21/5.\nStap 6: Skakel om na ʼn gemengde getal: 21 ÷ 5 = 4 res 1.\nAntwoord: 4 en 1/5 ✓' },

        // Blok 5: gemengde bewerkings / bewerkingsvolgorde met breuke (V17-18)
        { difficulty: 'Hard', question: 'Bereken 2/3 − 1/4 × 2/5, deur die korrekte bewerkingsvolgorde te gebruik.', answer: '17/30', checkMode: 'auto', correctAnswer: '17/30', correctAnswers: ['17/30'], explanation: 'Stap 1: Vermenigvuldiging voor aftrekking: 1/4 × 2/5 = 2/20 = 1/10.\nStap 2: Trek nou af: 2/3 − 1/10. Vind die LGV van 3 en 10: LGV = 30. Skakel om: 2/3 = 20/30, 1/10 = 3/30.\nStap 3: Trek die tellers af: 20 − 3 = 17.\nAntwoord: 17/30 ✓' },
        { difficulty: 'Hard', question: 'Bereken (3/4 − 1/3) ÷ 5/12.', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1'], explanation: 'Stap 1: Werk eers die hakie uit: 3/4 − 1/3. Vind die LGV van 4 en 3: LGV = 12. Skakel om: 3/4 = 9/12, 1/3 = 4/12.\nStap 2: Trek af: 9/12 − 4/12 = 5/12.\nStap 3: Deel: 5/12 ÷ 5/12 = 5/12 × 12/5 = 60/60 = 1.\nAntwoord: 1 ✓' },

        // Blok 6: breukvraagstukke (V19-20)
        { difficulty: 'Hard', question: 'ʼn Watertenk is 2/3 vol. Gedurende ʼn warm week word 3/5 van die water in die tenk gebruik. Watter breukdeel van die hele tenk word gebruik?', answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5'], explanation: 'Stap 1: Om ʼn breuk van ʼn hoeveelheid te vind, vermenigvuldig: 2/3 × 3/5.\nStap 2: Vermenigvuldig die tellers: 2 × 3 = 6. Vermenigvuldig die noemers: 3 × 5 = 15.\nStap 3: Resultaat: 6/15. Vereenvoudig deur beide deur 3 te deel: 2/5.\nAntwoord: 2/5 van die hele tenk ✓' },
        { difficulty: 'Hard', question: 'ʼn Blik verf het nog 3/5 van sy inhoud oor. Zola gee 1/3 van wat oor is vir ʼn buurman. Watter breukdeel van die hele blik gee Zola weg?', answer: '1/5', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5'], explanation: 'Stap 1: "1/3 van wat oor is" beteken 1/3 van 3/5, dus vermenigvuldig: 3/5 × 1/3.\nStap 2: Vermenigvuldig die tellers: 3 × 1 = 3. Vermenigvuldig die noemers: 5 × 3 = 15.\nStap 3: Resultaat: 3/15. Vereenvoudig deur beide deur 3 te deel: 1/5.\nAntwoord: 1/5 van die hele blik ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy kan met selfvertroue met al vier breukbewerkings werk.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan terug na die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklayout, meer werklike kontekste + redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1: ekwivalensie / vereenvoudiging / rangskikking (V1-4)
        { difficulty: 'Easy', question: 'Vereenvoudig 21/28 tot sy eenvoudigste vorm.', answer: '3/4', checkMode: 'auto', correctAnswer: '3/4', correctAnswers: ['3/4'], explanation: 'Stap 1: Vind die GGF van 21 en 28. Faktore van 21: 1, 3, 7, 21. Faktore van 28: 1, 2, 4, 7, 14, 28. GGF = 7.\nStap 2: Deel beide deur 7: 21 ÷ 7 = 3, 28 ÷ 7 = 4.\nAntwoord: 3/4 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende teller: 3/8 = x/40.', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', 'x = 15'], explanation: 'Stap 1: Bepaal waarmee 8 vermenigvuldig is om 40 te kry: 40 ÷ 8 = 5.\nStap 2: Vermenigvuldig die teller met dieselfde getal: 3 × 5 = 15.\nAntwoord: x = 15 ✓' },
        { difficulty: 'Medium', question: 'Watter een is groter: 7/8 of 5/6? Wys jou berekening.', answer: '7/8', checkMode: 'auto', correctAnswer: '7/8', correctAnswers: ['7/8'], explanation: 'Stap 1: Vind die LGV van 8 en 6: LGV = 24.\nStap 2: Skakel om: 7/8 = 21/24, 5/6 = 20/24.\nStap 3: Vergelyk die tellers: 21/24 > 20/24.\nAntwoord: 7/8 is groter ✓' },
        { difficulty: 'Medium', question: 'Rangskik 4/9, 5/12 en 1/3 van kleinste na grootste.', answer: '1/3, 5/12, 4/9', checkMode: 'auto', correctAnswer: '1/3, 5/12, 4/9', correctAnswers: ['1/3, 5/12, 4/9', '1/3; 5/12; 4/9'], explanation: 'Stap 1: Vind die LGV van 9, 12 en 3: LGV = 36.\nStap 2: Skakel om: 4/9 = 16/36, 5/12 = 15/36, 1/3 = 12/36.\nStap 3: Rangskik die tellers: 12 < 15 < 16, dus 1/3 < 5/12 < 4/9.\nAntwoord: 1/3, 5/12, 4/9 ✓' },

        // Blok 2: optelling & aftrekking met ongelyke noemers, ingesluit gemengde getalle (V5-9)
        { difficulty: 'Easy-Medium', question: 'Bereken 5/6 + 3/8.', answer: '1 en 5/24', checkMode: 'auto', correctAnswer: '1 and 5/24', correctAnswers: ['1 and 5/24', '1 en 5/24', '1 5/24', '29/24'], explanation: 'Stap 1: Vind die LGV van 6 en 8: LGV = 24.\nStap 2: Skakel om: 5/6 = 20/24, 3/8 = 9/24.\nStap 3: Tel die tellers bymekaar: 20 + 9 = 29. Resultaat: 29/24.\nStap 4: Skakel om na ʼn gemengde getal: 29 ÷ 24 = 1 res 5.\nAntwoord: 1 en 5/24 ✓' },
        { difficulty: 'Medium', question: 'Bereken 4/5 − 3/10.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2'], explanation: 'Stap 1: Vind die LGV van 5 en 10: LGV = 10.\nStap 2: Skakel om: 4/5 = 8/10.\nStap 3: Trek die tellers af: 8 − 3 = 5. Resultaat: 5/10.\nStap 4: Vereenvoudig deur beide deur 5 te deel: 1/2.\nAntwoord: 1/2 ✓' },
        { difficulty: 'Medium', question: 'Bereken 3 en 1/6 + 1 en 3/4.', answer: '4 en 11/12', checkMode: 'auto', correctAnswer: '4 and 11/12', correctAnswers: ['4 and 11/12', '4 en 11/12', '4 11/12', '59/12'], explanation: 'Stap 1: Skakel om na onegte breuke: 3 en 1/6 = 19/6, 1 en 3/4 = 7/4.\nStap 2: Vind die LGV van 6 en 4: LGV = 12.\nStap 3: Skakel om: 19/6 = 38/12, 7/4 = 21/12.\nStap 4: Tel die tellers bymekaar: 38 + 21 = 59. Resultaat: 59/12.\nStap 5: Skakel om na ʼn gemengde getal: 59 ÷ 12 = 4 res 11.\nAntwoord: 4 en 11/12 ✓' },
        { difficulty: 'Hard', question: 'Bandile bereken 1/2 + 2/5 deur te skryf (1+2)/(2+5) = 3/7. Is hy korrek? Verduidelik en gee die korrekte antwoord.', answer: 'Nee — Bandile het die tellers en noemers direk bymekaar getel, en dit is nie hoe breuke opgetel word nie. Hy moet eers ʼn gemene noemer vind. Die LGV van 2 en 5 is 10, dus 1/2 = 5/10 en 2/5 = 4/10. Optelling gee 5/10 + 4/10 = 9/10, nie 3/7 nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Bereken 6 en 1/5 − 2 en 1/2.', answer: '3 en 7/10', checkMode: 'auto', correctAnswer: '3 and 7/10', correctAnswers: ['3 and 7/10', '3 en 7/10', '3 7/10', '37/10'], explanation: 'Stap 1: Skakel om na onegte breuke: 6 en 1/5 = 31/5, 2 en 1/2 = 5/2.\nStap 2: Vind die LGV van 5 en 2: LGV = 10.\nStap 3: Skakel om: 31/5 = 62/10, 5/2 = 25/10.\nStap 4: Trek die tellers af: 62 − 25 = 37. Resultaat: 37/10.\nStap 5: Skakel om na ʼn gemengde getal: 37 ÷ 10 = 3 res 7.\nAntwoord: 3 en 7/10 ✓' },

        // Blok 3: vermenigvuldiging van breuke & gemengde getalle (V10-13)
        { difficulty: 'Easy-Medium', question: 'Bereken 2/5 × 5/8.', answer: '1/4', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4'], explanation: 'Stap 1: Vermenigvuldig die tellers: 2 × 5 = 10.\nStap 2: Vermenigvuldig die noemers: 5 × 8 = 40.\nStap 3: Resultaat: 10/40. Vereenvoudig deur beide deur 10 te deel: 1/4.\nAntwoord: 1/4 ✓' },
        { difficulty: 'Medium', question: 'Bereken 7/12 × 4/7.', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3'], explanation: 'Stap 1: Vermenigvuldig die tellers: 7 × 4 = 28.\nStap 2: Vermenigvuldig die noemers: 12 × 7 = 84.\nStap 3: Resultaat: 28/84. Vereenvoudig deur beide deur 28 te deel: 1/3.\nAntwoord: 1/3 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 3 en 1/3 × 1 en 4/5.', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Stap 1: Skakel om na onegte breuke: 3 en 1/3 = 10/3, 1 en 4/5 = 9/5.\nStap 2: Vermenigvuldig die tellers: 10 × 9 = 90.\nStap 3: Vermenigvuldig die noemers: 3 × 5 = 15.\nStap 4: Resultaat: 90/15 = 6.\nAntwoord: 6 ✓' },
        { difficulty: 'Hard', question: 'Palesa sê 5/6 × 2/3 moet groter wees as beide 5/6 en 2/3, want vermenigvuldiging maak getalle altyd groter. Is sy korrek? Verduidelik en gee die korrekte antwoord.', answer: 'Nee — om twee egte breuke (beide kleiner as 1) te vermenigvuldig gee ʼn kleiner antwoord, aangesien jy ʼn breuk van ʼn breuk vind. 5/6 × 2/3 = 10/18 = 5/9, wat kleiner is as beide 5/6 en 2/3.', checkMode: 'self' },

        // Blok 4: deling van breuke & gemengde getalle (V14-16)
        { difficulty: 'Medium', question: 'Bereken 7/10 ÷ 3/5.', answer: '1 en 1/6', checkMode: 'auto', correctAnswer: '1 and 1/6', correctAnswers: ['1 and 1/6', '1 en 1/6', '1 1/6', '7/6'], explanation: 'Stap 1: Draai die tweede breuk om vir sy resiprook: 5/3.\nStap 2: 7/10 × 5/3.\nStap 3: Vermenigvuldig die tellers: 7 × 5 = 35. Vermenigvuldig die noemers: 10 × 3 = 30.\nStap 4: Resultaat: 35/30. Vereenvoudig deur beide deur 5 te deel: 7/6.\nStap 5: Skakel om na ʼn gemengde getal: 7 ÷ 6 = 1 res 1.\nAntwoord: 1 en 1/6 ✓' },
        { difficulty: 'Medium', question: 'Bereken 5/12 ÷ 5/6.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2'], explanation: 'Stap 1: Draai die tweede breuk om vir sy resiprook: 6/5.\nStap 2: 5/12 × 6/5.\nStap 3: Vermenigvuldig die tellers: 5 × 6 = 30. Vermenigvuldig die noemers: 12 × 5 = 60.\nStap 4: Resultaat: 30/60. Vereenvoudig deur beide deur 30 te deel: 1/2.\nAntwoord: 1/2 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 5 en 1/4 ÷ 1 en 3/4.', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Stap 1: Skakel om na onegte breuke: 5 en 1/4 = 21/4, 1 en 3/4 = 7/4.\nStap 2: Draai die tweede breuk om: 4/7.\nStap 3: 21/4 × 4/7.\nStap 4: Vermenigvuldig die tellers: 21 × 4 = 84. Vermenigvuldig die noemers: 4 × 7 = 28.\nStap 5: Resultaat: 84/28 = 3.\nAntwoord: 3 ✓' },

        // Blok 5: gemengde bewerkings / bewerkingsvolgorde met breuke (V17-18)
        { difficulty: 'Hard', question: 'Bereken 3/5 + 1/3 × 3/10, deur die korrekte bewerkingsvolgorde te gebruik.', answer: '7/10', checkMode: 'auto', correctAnswer: '7/10', correctAnswers: ['7/10'], explanation: 'Stap 1: Vermenigvuldiging voor optelling: 1/3 × 3/10 = 3/30 = 1/10.\nStap 2: Tel nou by: 3/5 + 1/10. Vind die LGV van 5 en 10: LGV = 10. Skakel om: 3/5 = 6/10.\nStap 3: Tel die tellers bymekaar: 6 + 1 = 7.\nAntwoord: 7/10 ✓' },
        { difficulty: 'Hard', question: 'Bereken (5/6 + 1/4) ÷ 7/12.', answer: '1 en 6/7', checkMode: 'auto', correctAnswer: '1 and 6/7', correctAnswers: ['1 and 6/7', '1 en 6/7', '1 6/7', '13/7'], explanation: 'Stap 1: Werk eers die hakie uit: 5/6 + 1/4. Vind die LGV van 6 en 4: LGV = 12. Skakel om: 5/6 = 10/12, 1/4 = 3/12.\nStap 2: Tel by: 10/12 + 3/12 = 13/12.\nStap 3: Deel: 13/12 ÷ 7/12 = 13/12 × 12/7 = 156/84 = 13/7.\nStap 4: Skakel om na ʼn gemengde getal: 13 ÷ 7 = 1 res 6.\nAntwoord: 1 en 6/7 ✓' },

        // Blok 6: breukvraagstukke (V19-20)
        { difficulty: 'Hard', question: 'ʼn Bouer het 5/6 van ʼn muur geverf. Van die geverfde gedeelte is 2/5 helderblou en die res is wit. Watter breukdeel van die hele muur is helderblou?', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3'], explanation: 'Stap 1: Om ʼn breuk van ʼn hoeveelheid te vind, vermenigvuldig: 5/6 × 2/5.\nStap 2: Vermenigvuldig die tellers: 5 × 2 = 10. Vermenigvuldig die noemers: 6 × 5 = 30.\nStap 3: Resultaat: 10/30. Vereenvoudig deur beide deur 10 te deel: 1/3.\nAntwoord: 1/3 van die hele muur ✓' },
        { difficulty: 'Hard', question: 'ʼn Beker bevat 7/10 van ʼn liter sap. Aviwe skink 2/7 van die sap in die beker uit vir ʼn vriend. Watter breukdeel van ʼn liter skink sy uit?', answer: '1/5', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5'], explanation: 'Stap 1: "2/7 van die sap in die beker" beteken 2/7 van 7/10, dus vermenigvuldig: 7/10 × 2/7.\nStap 2: Vermenigvuldig die tellers: 7 × 2 = 14. Vermenigvuldig die noemers: 10 × 7 = 70.\nStap 3: Resultaat: 14/70. Vereenvoudig deur beide deur 14 te deel: 1/5.\nAntwoord: 1/5 van ʼn liter ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het bewerkings met gewone breuke ten volle bemeester.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan terug na die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
