import type { TopicData, PracticeSet } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (transformation geometry roles) ───────────────────────────
// x-axis / original shape / perimeter  → blue   (#2563eb)
// y-axis / transformed shape / area    → green  (#16a34a)
// reflected point / rule / scale factor→ orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Transformasiemeetkunde',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REFLECTING AND TRANSLATING POINTS ON A COORDINATE PLANE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reflecting-translating-points',
      title: 'Refleksie en Translasie van Punte op ʼn Koördinaatvlak',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons voer transformasies met punte op ʼn <strong>koördinaatvlak</strong> uit: die reflekteer van ʼn punt in die ${bl('x-as')} of ${gr('y-as')}, en die transleer van ʼn punt binne en oor kwadrante heen. ${bl('Reflekteer in die x-as')} verander die teken van die y-waarde; ${gr('reflekteer in die y-as')} verander die teken van die x-waarde.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-as')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-as')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gereflekteerde / getransleerde punt')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Refleksie- en translasiereëls</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Reflekteer in die ${bl('x-as')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(x, y) → (x, ${or('−y')}). Die x-waarde bly dieselfde; die y-waarde verander van teken.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Reflekteer in die ${gr('y-as')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(x, y) → (${or('−x')}, y). Die y-waarde bly dieselfde; die x-waarde verander van teken.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Translasie')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Skuif die punt links/regs (verander x) en op/af (verander y). Tel op om regs of op te beweeg; trek af om links of af te beweeg.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sleutelfeit</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Refleksie of translasie verander <strong>nie</strong> die grootte of vorm van ʼn figuur nie — slegs die posisie of oriëntasie. Die beeld is altyd <strong>kongruent</strong> aan die oorspronklike.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Reflekteer die punt (3, 5) in die x-as.',
          answer: `Die gereflekteerde punt is ${or('(3, −5)')}`,
          steps: [
            `Reflekteer in die ${bl('x-as')} verander die teken van y: (x, y) → (x, ${or('−y')}).`,
            `Pas die reël toe: (3, 5) → (3, ${or('−5')}).`,
            `<strong>Antwoord:</strong> Die gereflekteerde punt is ${or('(3, −5)')}. Sien die diagram hieronder wat hierdie refleksie toon.`,
          ],
        },
        {
          question: 'Transleer die punt (−2, 4) met 5 regs en 3 af.',
          answer: `Die getransleerde punt is ${or('(3, 1)')}`,
          steps: [
            `Beweeg <strong>regs</strong> verhoog x; beweeg <strong>af</strong> verlaag y.`,
            `Nuwe x = ${bl('−2')} + 5 = ${or('3')}.`,
            `Nuwe y = ${gr('4')} − 3 = ${or('1')}.`,
            `<strong>Antwoord:</strong> Nuwe punt = ${or('(3, 1)')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — reflect point in x-axis ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Reflekteer die punt (4, 7) in die x-as.',
          answer: '(4, −7)',
          checkMode: 'auto',
          correctAnswer: '(4,-7)',
          correctAnswers: ['(4,-7)', '(4, -7)', '(4,−7)', '(4, −7)'],
          explanation: 'Reflekteer in die x-as verander die teken van y: (4, 7) → (4, −7).',
        },

        // ── Q2 Easy — reflect point in y-axis ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Reflekteer die punt (−3, 6) in die y-as.',
          answer: '(3, 6)',
          checkMode: 'auto',
          correctAnswer: '(3,6)',
          correctAnswers: ['(3,6)', '(3, 6)'],
          explanation: 'Reflekteer in die y-as verander die teken van x: (−3, 6) → (3, 6).',
        },

        // ── Q3 Medium — translate a point ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Transleer die punt (5, −2) met 3 links en 4 op.',
          answer: '(2, 2)',
          checkMode: 'auto',
          correctAnswer: '(2,2)',
          correctAnswers: ['(2,2)', '(2, 2)'],
          explanation: 'Beweeg links: x = 5 − 3 = 2. Beweeg op: y = −2 + 4 = 2. Nuwe punt = (2, 2).',
        },

        // ── Q4 Hard — identify reflection error ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho reflekteer die punt (6, −8) in die x-as en kry (−6, −8). Is hy korrek? Verduidelik.',
          answer: 'Nee — refleksie in die x-as verander slegs die teken van y, wat (6, 8) gee, nie (−6, −8) nie.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Cartesiese vlak wat punt (3, 5) en sy refleksie (3, −5) oor die x-as wys, met ʼn stippellyn wat die refleksie aandui',

      diagramSvg:
        '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="10" y1="110" x2="210" y2="110" stroke="#0f1f3d" stroke-width="2"/>' +
        '<polygon points="210,110 202,106 202,114" fill="#0f1f3d"/>' +
        '<line x1="110" y1="210" x2="110" y2="10" stroke="#0f1f3d" stroke-width="2"/>' +
        '<polygon points="110,10 106,18 114,18" fill="#0f1f3d"/>' +
        '<text x="204" y="124" font-size="11" fill="#2563eb" font-weight="700">x</text>' +
        '<text x="118" y="18" font-size="11" fill="#16a34a" font-weight="700">y</text>' +
        '<line x1="155" y1="35" x2="155" y2="185" stroke="#9ca3af" stroke-width="1.3" stroke-dasharray="4,3"/>' +
        '<circle cx="155" cy="35" r="4" fill="#0f1f3d"/>' +
        '<text x="163" y="32" font-size="12" font-weight="700" fill="#0f1f3d">P(3, 5)</text>' +
        '<circle cx="155" cy="185" r="4" fill="#ea580c"/>' +
        '<text x="163" y="190" font-size="12" font-weight="700" fill="#ea580c">P′(3, −5)</text>' +
        '</svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om punte op ʼn koördinaatvlak te reflekteer en te transleer, met die x-as in blou, y-as in groen en gereflekteerde punt in oranje" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — TRANSFORMING TRIANGLES ON A COORDINATE PLANE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'transforming-triangles',
      title: 'Transformasie van Driehoeke op ʼn Koördinaatvlak',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Ons voer transformasies met <strong>driehoeke</strong> op ʼn koördinaatvlak uit, met die fokus op die koördinate van die hoekpunte wanneer daar in die ${bl('x-as')} of ${gr('y-as')} gereflekteer word, binne en oor kwadrante heen getransleer word, en om die oorsprong geroteer word.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike driehoek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('getransformeerde driehoek')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rotasie- / refleksiereël')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Transformasiereëls vir hoekpunte</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Reflekteer in die ${bl('x-as')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('(x, y) → (x, −y)')} — pas toe op elke hoekpunt.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Reflekteer in die ${gr('y-as')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('(x, y) → (−x, y)')} — pas toe op elke hoekpunt.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('90° kloksgewyse rotasie')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('(x, y) → (y, −x)')} — pas toe op elke hoekpunt.</p>` +
        `</div>` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;"><span style="color:#7c3aed;font-weight:700">180° rotasie</span></p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><span style="color:#7c3aed;font-weight:700">(x, y) → (−x, −y)</span> — pas toe op elke hoekpunt.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kongruensie ná transformasie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Refleksie, translasie en rotasie lewer almal ʼn <strong>kongruente</strong> beeld — die grootte en vorm bly dieselfde, slegs die posisie of oriëntasie verander.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Driehoek het hoekpunte (1, 2), (3, 2), (2, 5). Reflekteer dit in die y-as.',
          answer: `Die gereflekteerde hoekpunte is ${gr('(−1, 2), (−3, 2), (−2, 5)')}`,
          steps: [
            `Reflekteer in die ${gr('y-as')} gebruik die reël ${or('(x, y) → (−x, y)')}.`,
            `Pas toe op elke hoekpunt van die ${bl('oorspronklike driehoek')}:`,
            `${bl('(1, 2)')} → ${gr('(−1, 2)')}.`,
            `${bl('(3, 2)')} → ${gr('(−3, 2)')}.`,
            `${bl('(2, 5)')} → ${gr('(−2, 5)')}.`,
            `<strong>Antwoord:</strong> Gereflekteerde driehoek: ${gr('(−1, 2), (−3, 2), (−2, 5)')}. Sien die diagram hieronder wat die oorspronklike en gereflekteerde driehoek toon.`,
          ],
        },
        {
          question: 'Sipho roteer ʼn driehoek met hoekpunt (4, 1) 90° kloksgewys om die oorsprong met die reël (x, y) → (y, −x). Vind die nuwe hoekpunt.',
          answer: `Die nuwe hoekpunt is ${gr('(1, −4)')}`,
          steps: [
            `Die ${or('90° kloksgewyse rotasiereël')} is: ${or('(x, y) → (y, −x)')}.`,
            `Pas toe op die hoekpunt ${bl('(4, 1)')}: nuwe x = 1, nuwe y = −4.`,
            `<strong>Antwoord:</strong> Nuwe hoekpunt = ${gr('(1, −4)')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q5 Medium — reflect triangle in x-axis ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Driehoek het hoekpunte (2, 3), (4, 3), (3, 6). Reflekteer dit in die x-as.',
          answer: '(2, −3), (4, −3), (3, −6)',
          checkMode: 'auto',
          correctAnswer: '(2,-3),(4,-3),(3,-6)',
          correctAnswers: ['(2,-3),(4,-3),(3,-6)', '(2, -3),(4, -3),(3, -6)', '(2, -3), (4, -3), (3, -6)', '(2,−3),(4,−3),(3,−6)', '(2, −3), (4, −3), (3, −6)'],
          explanation: 'Reflekteer in die x-as: (x, y) → (x, −y). Pas toe op elke hoekpunt: (2,3)→(2,−3), (4,3)→(4,−3), (3,6)→(3,−6).',
        },

        // ── Q6 Hard — rotate point 90° clockwise ────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato roteer die punt (5, 2) 90° kloksgewys om die oorsprong met (x, y) → (y, −x). Vind die nuwe punt.',
          answer: 'Nuwe punt = (2, −5).',
          checkMode: 'self',
        },

        // ── Q7 Medium — rotate point 180° ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Roteer die punt (−3, 4) 180° om die oorsprong met (x, y) → (−x, −y).',
          answer: '(3, −4)',
          checkMode: 'auto',
          correctAnswer: '(3,-4)',
          correctAnswers: ['(3,-4)', '(3, -4)', '(3,−4)', '(3, −4)'],
          explanation: 'Pas toe (x, y) → (−x, −y): (−3, 4) → (3, −4).',
        },

        // ── Q8 Hard — reflection preserves size and shape ────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo sê refleksie van ʼn driehoek in die y-as hou die grootte en vorm dieselfde. Is hy korrek? Verduidelik.',
          answer: 'Ja — refleksie verander slegs die oriëntasie, nie die grootte of vorm nie; die driehoek bly kongruent.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'ʼn Driehoek met hoekpunte (1,2), (3,2), (2,5) en sy refleksie in die y-as op ʼn Cartesiese vlak gewys',

      diagramSvg:
        '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="10" y1="180" x2="210" y2="180" stroke="#0f1f3d" stroke-width="2"/>' +
        '<polygon points="210,180 202,176 202,184" fill="#0f1f3d"/>' +
        '<line x1="110" y1="200" x2="110" y2="10" stroke="#0f1f3d" stroke-width="2"/>' +
        '<polygon points="110,10 106,18 114,18" fill="#0f1f3d"/>' +
        '<polygon points="130,140 170,140 150,80" fill="#eff6ff" fill-opacity="0.6" stroke="#2563eb" stroke-width="2.2"/>' +
        '<polygon points="90,140 50,140 70,80" fill="#f0fdf4" fill-opacity="0.6" stroke="#16a34a" stroke-width="2.2"/>' +
        '<text x="150" y="158" font-size="10" font-weight="700" text-anchor="middle" fill="#2563eb">Oorspronklik</text>' +
        '<text x="70" y="158" font-size="10" font-weight="700" text-anchor="middle" fill="#16a34a">Gereflekteer</text>' +
        '</svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om driehoeke op ʼn koördinaatvlak te reflekteer en te roteer, met die oorspronklike driehoek in blou en die getransformeerde driehoek in groen" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ENLARGEMENTS AND REDUCTIONS USING PROPORTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'enlargements-reductions-proportion',
      title: 'Vergrotings en Verkleinings deur Middel van Proporsie',
      icon: '⬛',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik <strong>proporsie</strong> om die effek van vergroting of verkleining op die oppervlakte en omtrek van meetkundige figure te beskryf. As ʼn vorm vergroot word met ʼn ${or('skaalfaktor k')}, word die ${bl('omtrek')} met ${or('k')} vermenigvuldig en word die ${gr('oppervlakte')} met ${or('k²')} vermenigvuldig.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('skaalfaktor')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('omtrek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oppervlakte')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Skaalfaktorreëls</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Vergroting (${or('k > 1')})</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die beeld is groter as die oorspronklike.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Nuwe ${bl('omtrek')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Nuwe ${bl('omtrek')} = oorspronklike ${bl('omtrek')} × ${or('k')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Nuwe ${gr('oppervlakte')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Nuwe ${gr('oppervlakte')} = oorspronklike ${gr('oppervlakte')} × ${or('k²')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Verkleining (${or('0 < k < 1')})</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die beeld is kleiner as die oorspronklike.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Algemene fout</p>` +
        `<p style="margin:0;color:#991b1b;">Leerders vermenigvuldig dikwels die ${gr('oppervlakte')} met ${or('k')} in plaas van ${or('k²')}. Onthou: ${bl('omtrek')} skaleer met ${or('k')}, maar ${gr('oppervlakte')} skaleer met ${or('k²')} omdat oppervlakte twee-dimensioneel is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Reghoek met ʼn omtrek van 20 cm word vergroot met ʼn skaalfaktor van 3. Vind die nuwe omtrek.',
          answer: `Nuwe ${bl('omtrek')} = ${bl('60 cm')}`,
          steps: [
            `Die ${bl('omtrek')} skaleer met die ${or('skaalfaktor k')}: nuwe ${bl('omtrek')} = oorspronklike ${bl('omtrek')} × ${or('k')}.`,
            `Nuwe ${bl('omtrek')} = ${bl('20')} × ${or('3')} = ${bl('60 cm')}.`,
            `<strong>Antwoord:</strong> Nuwe ${bl('omtrek')} = ${bl('60 cm')}.`,
          ],
        },
        {
          question: 'ʼn Vierkant met ʼn oppervlakte van 16 cm² word vergroot met ʼn skaalfaktor van 2. Vind die nuwe oppervlakte.',
          answer: `Nuwe ${gr('oppervlakte')} = ${gr('64 cm²')}`,
          steps: [
            `Die ${gr('oppervlakte')} skaleer met ${or('k²')}: nuwe ${gr('oppervlakte')} = oorspronklike ${gr('oppervlakte')} × ${or('k²')}.`,
            `Nuwe ${gr('oppervlakte')} = ${gr('16')} × ${or('2²')} = ${gr('16')} × ${or('4')} = ${gr('64 cm²')}.`,
            `<strong>Antwoord:</strong> Nuwe ${gr('oppervlakte')} = ${gr('64 cm²')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q9 Easy — enlarge perimeter ──────────────────────────────────────
        {
          difficulty: 'Easy',
          question: "ʼn Reghoek se omtrek is 24 cm. Dit word vergroot met ʼn skaalfaktor van 2. Vind die nuwe omtrek.",
          answer: '48 cm',
          checkMode: 'auto',
          correctAnswer: '48cm',
          correctAnswers: ['48cm', '48 cm'],
          explanation: 'Nuwe omtrek = 24 × 2 = 48 cm.',
        },

        // ── Q10 Medium — enlarge area ────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Vierkant het ʼn oppervlakte van 9 cm². Dit word vergroot met ʼn skaalfaktor van 3. Vind die nuwe oppervlakte.',
          answer: '81 cm²',
          checkMode: 'auto',
          correctAnswer: '81cm²',
          correctAnswers: ['81cm²', '81 cm²', '81cm2', '81 cm2'],
          explanation: 'Nuwe oppervlakte = 9 × 3² = 9 × 9 = 81 cm².',
        },

        // ── Q11 Hard — scale factor misconception ────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle sê die vergroting van ʼn vorm met ʼn skaalfaktor van 4 vermenigvuldig sy omtrek met 4 en sy oppervlakte ook met 4. Is sy korrek? Verduidelik.',
          answer: 'Nee — die omtrek word met 4 vermenigvuldig, maar die oppervlakte word met 4² = 16 vermenigvuldig, nie 4 nie.',
          checkMode: 'self',
        },

        // ── Q12 Medium — translate triangle vertices ──────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Driehoek met hoekpunte (1, 1), (3, 1), (2, 4) word met 2 regs en 3 op getransleer. Vind die nuwe hoekpunte.',
          answer: '(3, 4), (5, 4), (4, 7)',
          checkMode: 'auto',
          correctAnswer: '(3,4),(5,4),(4,7)',
          correctAnswers: ['(3,4),(5,4),(4,7)', '(3, 4),(5, 4),(4, 7)', '(3, 4), (5, 4), (4, 7)'],
          explanation: 'Tel 2 by elke x en 3 by elke y: (1+2, 1+3)=(3,4), (3+2, 1+3)=(5,4), (2+2, 4+3)=(4,7).',
        },

        // ── Q13 Hard — reduce area using scale factor ────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Vorm met ʼn oppervlakte van 25 cm² word verklein met ʼn skaalfaktor van ¹⁄₅. Vind die nuwe oppervlakte.',
          answer: 'Nuwe oppervlakte = 25 × (1/5)² = 25 × 1/25 = 1 cm².',
          checkMode: 'self',
        },

        // ── Q14 Hard — rotate point 90° anticlockwise ───────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho roteer die punt (0, 6) 90° anti-kloksgewys om die oorsprong met (x, y) → (−y, x). Vind die nuwe punt.',
          answer: '(−6, 0)',
          checkMode: 'auto',
          correctAnswer: '(-6,0)',
          correctAnswers: ['(-6,0)', '(-6, 0)', '(−6,0)', '(−6, 0)'],
          explanation: 'Pas toe (x, y) → (−y, x): (0, 6) → (−6, 0).',
        },

        // ── Q15 Hard — enlarge rectangle perimeter and area ──────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Reghoek het ʼn omtrek van 30 cm en ʼn oppervlakte van 50 cm². Dit word vergroot met ʼn skaalfaktor van 2. Vind die nuwe omtrek en nuwe oppervlakte.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Nuwe omtrek',
              correctAnswer: '60cm',
              correctAnswers: ['60cm', '60 cm'],
              explanation: 'Nuwe omtrek = 30 × 2 = 60 cm.',
            },
            {
              label: 'b) Nuwe oppervlakte',
              correctAnswer: '200cm²',
              correctAnswers: ['200cm²', '200 cm²', '200cm2', '200 cm2'],
              explanation: 'Nuwe oppervlakte = 50 × 2² = 50 × 4 = 200 cm².',
            },
          ],
        },
      ],

      diagramPlaceholder:
        'ʼn Klein vierkant en ʼn groter vierkant wat ʼn vergroting met skaalfaktor 2 wys, met sylengtes en oppervlaktes gemerk',

      diagramSvg:
        '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="150" y="18" font-size="12" font-weight="700" text-anchor="middle" fill="#0f1f3d">Skaalfaktor k = 2</text>' +
        '<g transform="translate(60,105)">' +
        '<rect x="-15" y="-15" width="30" height="30" fill="#eff6ff" fill-opacity="0.6" stroke="#2563eb" stroke-width="2.2"/>' +
        '<text x="0" y="34" font-size="11" font-weight="700" text-anchor="middle" fill="#2563eb">sy 2 cm</text>' +
        '<text x="0" y="47" font-size="10" text-anchor="middle" fill="#16a34a">opp 4 cm²</text>' +
        '</g>' +
        '<text x="150" y="100" font-size="18" font-weight="700" text-anchor="middle" fill="#ea580c">×2</text>' +
        '<text x="150" y="122" font-size="10" text-anchor="middle" fill="#6b7280">omtrek ×2 · oppervlakte ×4</text>' +
        '<g transform="translate(230,105)">' +
        '<rect x="-30" y="-30" width="60" height="60" fill="#f0fdf4" fill-opacity="0.5" stroke="#16a34a" stroke-width="2.5"/>' +
        '<text x="0" y="49" font-size="11" font-weight="700" text-anchor="middle" fill="#2563eb">sy 4 cm</text>' +
        '<text x="0" y="62" font-size="10" text-anchor="middle" fill="#16a34a">opp 16 cm²</text>' +
        '</g>' +
        '</svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die nuwe omtrek en oppervlakte na vergroting of verkleining met ʼn skaalfaktor te bereken, met skaalfaktor in oranje, omtrek in blou en oppervlakte in groen" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het transformasiemeetkunde bemeester.' },
    { minScore: 12, message: 'Goeie werk! Jy het ʼn sterk begrip van transformasiemeetkunde. Hersien enige gemiste vrae en jy sal dit perfek kry.' },
    { minScore: 8, message: 'Goeie poging! Hersien die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 0, message: 'Hou aan — werk weer deur die studiegids afdeling vir afdeling, en probeer dan die vrae weer.' },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // ── Blok A — Benoem/beskryf transformasies (V1-3) ──────────────────────
        { difficulty: 'Easy', question: 'ʼn Figuur word oor ʼn lyn omgeflip sodat die beeld ʼn spieëlbeeld van die voorwerp is. Watter tipe transformasie is dit?', answer: 'refleksie', checkMode: 'auto', correctAnswer: 'refleksie', correctAnswers: ['refleksie', 'ʼn refleksie'], explanation: 'Om ʼn figuur oor ʼn lyn om te flip sodat die beeld ʼn spieëlbeeld van die voorwerp is, word ʼn refleksie genoem.' },
        { difficulty: 'Easy', question: 'ʼn Figuur word na ʼn nuwe posisie geskuif sonder om te draai, te flip of van grootte te verander. Watter tipe transformasie is dit?', answer: 'translasie', checkMode: 'auto', correctAnswer: 'translasie', correctAnswers: ['translasie', 'ʼn translasie'], explanation: 'Om ʼn figuur in ʼn reguit lyn na ʼn nuwe posisie te skuif, sonder om dit te draai of te flip, word ʼn translasie genoem.' },
        { difficulty: 'Medium', question: 'Driehoek A het hoekpunte (1, 1), (5, 1), (1, 4). Driehoek B het hoekpunte (3, 3), (7, 3), (3, 6). Beskryf die enkele transformasie wat driehoek A op driehoek B afbeeld.', answer: 'Translasie met (2, 2)', checkMode: 'auto', correctAnswer: 'Translasie met (2, 2)', correctAnswers: ['Translasie met (2, 2)', 'translasie (2,2)', 'translasie van (2,2)', 'transleer met (2,2)', '(2, 2)', '(2,2)'], explanation: 'Vergelyk ooreenstemmende hoekpunte: (1,1)→(3,3) is +2 in x, +2 in y. (5,1)→(7,3) is dieselfde skuif. (1,4)→(3,6) is weer dieselfde skuif.\nElke punt beweeg dieselfde afstand in dieselfde rigting en die vorm flip of draai nie, dus is dit ʼn translasie met (2, 2) ✓' },

        // ── Blok B — Refleksie met koördinate (V4-7) ────────────────────────────
        { difficulty: 'Easy', question: 'Punt P is by (6, 9). Dit word in die x-as gereflekteer, soos getoon. Vind die koördinate van die beeld P\'.', answer: '(6, -9)', checkMode: 'auto', correctAnswer: '(6, -9)', correctAnswers: ['(6, -9)', '(6,-9)', '(6, −9)', '(6,−9)'], explanation: 'Refleksie in die x-as: (x, y) → (x, −y).\nP(6, 9) → P\'(6, −9) ✓' },
        { difficulty: 'Easy-Medium', question: 'Punt Q is by (−4, 7). Dit word in die y-as gereflekteer, soos getoon. Vind die koördinate van die beeld Q\'.', answer: '(4, 7)', checkMode: 'auto', correctAnswer: '(4, 7)', correctAnswers: ['(4, 7)', '(4,7)'], explanation: 'Refleksie in die y-as: (x, y) → (−x, y).\nQ(−4, 7) → Q\'(4, 7) ✓' },
        { difficulty: 'Medium', question: 'Punt R is by (3, 8). Dit word oor die vertikale lyn x = 6 gereflekteer, soos getoon. Vind die koördinate van die beeld R\'.', answer: '(9, 8)', checkMode: 'auto', correctAnswer: '(9, 8)', correctAnswers: ['(9, 8)', '(9,8)'], explanation: 'Spieëllyn x = 6. Afstand van R tot die lyn: 6 − 3 = 3 eenhede.\nDie beeld is 3 eenhede aan die ander kant: 6 + 3 = 9.\nDie y-waarde bly dieselfde.\nR\' = (9, 8) ✓' },
        { difficulty: 'Medium-Hard', question: 'Driehoek ABC het hoekpunte A(1, 2), B(4, 2), C(4, 5), soos getoon. Dit word in die y-as gereflekteer. Vind die koördinate van die beeld A\'B\'C\'.', answer: "A'(-1,2) B'(-4,2) C'(-4,5)", checkMode: 'auto', correctAnswer: "A'(-1,2) B'(-4,2) C'(-4,5)", correctAnswers: ["A'(-1,2) B'(-4,2) C'(-4,5)", "A'(-1, 2) B'(-4, 2) C'(-4, 5)", "A'(−1,2) B'(−4,2) C'(−4,5)"], explanation: "Refleksie in die y-as: (x, y) → (−x, y).\nA(1, 2) → A'(−1, 2).\nB(4, 2) → B'(−4, 2).\nC(4, 5) → C'(−4, 5). ✓" },

        // ── Blok C — Translasie met koördinate (V8-10) ──────────────────────────
        { difficulty: 'Easy', question: 'Punt A is by (−3, 5). Dit word 6 eenhede regs en 2 eenhede af getransleer, soos getoon. Vind die nuwe koördinate van A\'.', answer: '(3, 3)', checkMode: 'auto', correctAnswer: '(3, 3)', correctAnswers: ['(3, 3)', '(3,3)'], explanation: 'Translasie van (6, −2): (x, y) → (x + 6, y − 2).\nA(−3, 5) → A\'(−3 + 6, 5 − 2) = (3, 3) ✓' },
        { difficulty: 'Medium', question: 'Driehoek ABC het hoekpunte A(2, 1), B(5, 1), C(2, 4), soos getoon. Dit word met (−4, 3) getransleer. Vind die koördinate van die beeld A\'B\'C\'.', answer: "A'(-2,4) B'(1,4) C'(-2,7)", checkMode: 'auto', correctAnswer: "A'(-2,4) B'(1,4) C'(-2,7)", correctAnswers: ["A'(-2,4) B'(1,4) C'(-2,7)", "A'(-2, 4) B'(1, 4) C'(-2, 7)", "A'(−2,4) B'(1,4) C'(−2,7)"], explanation: "Translasie van (−4, 3): (x, y) → (x − 4, y + 3).\nA(2, 1) → A'(−2, 4).\nB(5, 1) → B'(1, 4).\nC(2, 4) → C'(−2, 7). ✓" },
        { difficulty: 'Hard', question: 'ʼn Leerder transleer die punt (−6, 4) met (5, −3) en skryf die beeld as (11, 1). Is dit korrek? Indien nie, vind die korrekte beeld.', answer: 'Nee, die korrekte beeld is (-1, 1).', checkMode: 'auto', correctAnswer: '(-1, 1)', correctAnswers: ['(-1, 1)', '(-1,1)', 'Nee, (-1,1)', 'Nee, die korrekte beeld is (-1, 1).'], explanation: 'Korrekte reël: (x, y) → (x + 5, y − 3).\n(−6, 4) → (−6 + 5, 4 − 3) = (−1, 1).\nDie leerder het die x-waardes verkeerd saamgetel in plaas daarvan om +5 op −6 toe te pas. Die korrekte beeld is (−1, 1) ✓' },

        // ── Blok D — Rotasie om die oorsprong (V11-14) ──────────────────────────
        { difficulty: 'Easy', question: 'Punt A is by (5, 3). Dit word 90° kloksgewys om die oorsprong geroteer, soos getoon. Gebruik die reël (x, y) → (y, −x) om die beeld A\' te vind.', answer: '(3, -5)', checkMode: 'auto', correctAnswer: '(3, -5)', correctAnswers: ['(3, -5)', '(3,-5)', '(3, −5)', '(3,−5)'], explanation: 'Reël: (x, y) → (y, −x).\nA(5, 3) → A\'(3, −5) ✓' },
        { difficulty: 'Medium', question: 'Punt B is by (−2, 6). Dit word 180° om die oorsprong geroteer, soos getoon. Gebruik die reël (x, y) → (−x, −y) om die beeld B\' te vind.', answer: '(2, -6)', checkMode: 'auto', correctAnswer: '(2, -6)', correctAnswers: ['(2, -6)', '(2,-6)', '(2, −6)', '(2,−6)'], explanation: 'Reël: (x, y) → (−x, −y).\nB(−2, 6) → B\'(2, −6) ✓' },
        { difficulty: 'Medium-Hard', question: 'Punt C is by (4, −1). Dit word 90° anti-kloksgewys om die oorsprong geroteer, soos getoon. Gebruik die reël (x, y) → (−y, x) om die beeld C\' te vind.', answer: '(1, 4)', checkMode: 'auto', correctAnswer: '(1, 4)', correctAnswers: ['(1, 4)', '(1,4)'], explanation: 'Reël: (x, y) → (−y, x).\nC(4, −1) → C\'(1, 4) ✓' },
        { difficulty: 'Hard', question: 'Driehoek ABC het hoekpunte A(1, 1), B(4, 1), C(4, 3), soos getoon. Dit word 90° kloksgewys om die oorsprong geroteer. Vind die koördinate van die beeld A\'B\'C\'.', answer: "A'(1,-1) B'(1,-4) C'(3,-4)", checkMode: 'auto', correctAnswer: "A'(1,-1) B'(1,-4) C'(3,-4)", correctAnswers: ["A'(1,-1) B'(1,-4) C'(3,-4)", "A'(1, -1) B'(1, -4) C'(3, -4)", "A'(1,−1) B'(1,−4) C'(3,−4)"], explanation: "Reël vir 90° kloksgewys: (x, y) → (y, −x).\nA(1, 1) → A'(1, −1).\nB(4, 1) → B'(1, −4).\nC(4, 3) → C'(3, −4). ✓" },

        // ── Blok E — Vergroting/verkleining met skaalfaktor (V15-17) ────────────
        { difficulty: 'Medium', question: 'Punt P is by (2, 3). Dit word met skaalfaktor 3 vanaf die oorsprong vergroot, soos getoon. Vind die koördinate van die beeld P\'.', answer: '(6, 9)', checkMode: 'auto', correctAnswer: '(6, 9)', correctAnswers: ['(6, 9)', '(6,9)'], explanation: 'Vergroting vanaf die oorsprong met skaalfaktor 3: (x, y) → (3x, 3y).\nP(2, 3) → P\'(3×2, 3×3) = (6, 9) ✓' },
        { difficulty: 'Hard', question: 'Driehoek ABC het hoekpunte A(1, 1), B(3, 1), C(1, 3), soos getoon. Dit word met skaalfaktor 2 vanaf die middelpunt (1, 1) vergroot. Vind die koördinate van die beeld A\'B\'C\'.', answer: "A'(1,1) B'(5,1) C'(1,5)", checkMode: 'auto', correctAnswer: "A'(1,1) B'(5,1) C'(1,5)", correctAnswers: ["A'(1,1) B'(5,1) C'(1,5)", "A'(1, 1) B'(5, 1) C'(1, 5)"], explanation: "Reël vir vergroting vanaf middelpunt (1, 1) met skaalfaktor 2: (x, y) → (1 + 2(x−1), 1 + 2(y−1)).\nA(1, 1) → A'(1 + 2(0), 1 + 2(0)) = (1, 1) (die middelpunt beeld op homself af).\nB(3, 1) → B'(1 + 2(2), 1 + 2(0)) = (5, 1).\nC(1, 3) → C'(1 + 2(0), 1 + 2(2)) = (1, 5). ✓" },
        { difficulty: 'Hard', question: 'Punt P is by (8, 6). Dit word met skaalfaktor ½ vanaf die oorsprong verklein, soos getoon. Vind die koördinate van die beeld P\'.', answer: '(4, 3)', checkMode: 'auto', correctAnswer: '(4, 3)', correctAnswers: ['(4, 3)', '(4,3)'], explanation: 'Verkleining vanaf die oorsprong met skaalfaktor ½: (x, y) → (½x, ½y).\nP(8, 6) → P\'(½×8, ½×6) = (4, 3) ✓' },

        // ── Blok F — Saamgestelde transformasies & kongruensie/gelykvormigheid (V18-20) ─
        { difficulty: 'Hard', question: 'Punt P is by (2, 3). Transleer dit eers met (3, 1), en reflekteer dan die verkrygde beeld in die x-as. Vind die finale koördinate.', answer: '(5, -4)', checkMode: 'auto', correctAnswer: '(5, -4)', correctAnswers: ['(5, -4)', '(5,-4)', '(5, −4)', '(5,−4)'], explanation: 'Stap 1 — transleer met (3, 1): (2, 3) → (2+3, 3+1) = (5, 4).\nStap 2 — reflekteer (5, 4) in die x-as: (x, y) → (x, −y), wat (5, −4) gee.\nFinale beeld = (5, −4) ✓' },
        { difficulty: 'Hard', question: 'Punt A is by (1, 2). Dit word eers in die y-as gereflekteer, en die verkrygde beeld word dan 180° om die oorsprong geroteer. Beskryf ʼn enkele transformasie met dieselfde algehele effek, en gee die finale koördinate.', answer: 'Refleksie in die x-as; finale punt (1, -2)', checkMode: 'self', correctAnswer: 'Refleksie in die x-as; finale punt (1, -2)' },
        { difficulty: 'Hard', question: 'Driehoek A het hoekpunte (1, 1), (4, 1), (1, 3). Dit word met skaalfaktor 2 vanaf die oorsprong vergroot om driehoek B te vorm. Verduidelik of driehoek B kongruent of gelykvormig aan driehoek A is, en gee ʼn rede.', answer: 'Gelykvormig, nie kongruent nie — vergroting verander die grootte van die driehoek (alle sye word 2 keer so lank) terwyl die hoeke en vorm dieselfde bly, dus is die driehoeke gelykvormig maar nie kongruent nie.', checkMode: 'self', correctAnswer: 'Gelykvormig, nie kongruent nie — vergroting verander die grootte van die driehoek (alle sye word 2 keer so lank) terwyl die hoeke en vorm dieselfde bly, dus is die driehoeke gelykvormig maar nie kongruent nie.' },
      ],
      scoreMessages: [
        { minScore: 17, message: 'Uitstekend! Jy het transformasiemeetkunde oor elke vaardigheid in hierdie stel bemeester.' },
        { minScore: 13, message: 'Goeie werk! Jy is selfversekerd met refleksies, translasies, rotasies en vergrotings — hersien enige gemiste vrae en probeer nog ʼn stel.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids afdeling vir afdeling, en probeer dan hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // ── Blok A — Benoem/beskryf transformasies (V1-3) ──────────────────────
        { difficulty: 'Easy', question: 'ʼn Figuur word groter of kleiner gemaak met ʼn skaalfaktor, vanaf ʼn vaste middelpunt, terwyl dieselfde vorm behou word. Watter tipe transformasie is dit?', answer: 'vergroting', checkMode: 'auto', correctAnswer: 'vergroting', correctAnswers: ['vergroting', 'ʼn vergroting', 'vergroting/verkleining'], explanation: 'Om die grootte van ʼn figuur vanaf ʼn vaste middelpunt met ʼn skaalfaktor te verander, terwyl dieselfde vorm behou word, word ʼn vergroting genoem. As die skaalfaktor kleiner as 1 is, word dit steeds as ʼn vergroting geklassifiseer (soms ʼn verkleining genoem).' },
        { difficulty: 'Easy', question: 'ʼn Figuur word om ʼn vaste middelpunt deur ʼn gegewe hoek gedraai, sonder om die grootte of vorm te verander. Watter tipe transformasie is dit?', answer: 'rotasie', checkMode: 'auto', correctAnswer: 'rotasie', correctAnswers: ['rotasie', 'ʼn rotasie'], explanation: 'Om ʼn figuur om ʼn vaste middelpunt deur ʼn hoek te draai, sonder om die grootte of vorm te verander, word ʼn rotasie genoem.' },
        { difficulty: 'Medium', question: 'Driehoek A het hoekpunte (2, 2), (6, 2), (2, 5). Driehoek B het hoekpunte (0, 5), (4, 5), (0, 8). Beskryf die enkele transformasie wat driehoek A op driehoek B afbeeld.', answer: 'Translasie met (-2, 3)', checkMode: 'auto', correctAnswer: 'Translasie met (-2, 3)', correctAnswers: ['Translasie met (-2, 3)', 'translasie (-2,3)', 'translasie van (-2,3)', 'transleer met (-2,3)', '(-2, 3)', '(-2,3)'], explanation: 'Vergelyk ooreenstemmende hoekpunte: (2,2)→(0,5) is −2 in x, +3 in y. (6,2)→(4,5) is dieselfde skuif. (2,5)→(0,8) is weer dieselfde skuif.\nElke punt beweeg dieselfde afstand in dieselfde rigting en die vorm flip of draai nie, dus is dit ʼn translasie met (−2, 3) ✓' },

        // ── Blok B — Refleksie met koördinate (V4-7) ────────────────────────────
        { difficulty: 'Easy', question: 'Punt P is by (5, 8). Dit word in die x-as gereflekteer, soos getoon. Vind die koördinate van die beeld P\'.', answer: '(5, -8)', checkMode: 'auto', correctAnswer: '(5, -8)', correctAnswers: ['(5, -8)', '(5,-8)', '(5, −8)', '(5,−8)'], explanation: 'Refleksie in die x-as: (x, y) → (x, −y).\nP(5, 8) → P\'(5, −8) ✓' },
        { difficulty: 'Easy-Medium', question: 'Punt Q is by (−6, 3). Dit word in die y-as gereflekteer, soos getoon. Vind die koördinate van die beeld Q\'.', answer: '(6, 3)', checkMode: 'auto', correctAnswer: '(6, 3)', correctAnswers: ['(6, 3)', '(6,3)'], explanation: 'Refleksie in die y-as: (x, y) → (−x, y).\nQ(−6, 3) → Q\'(6, 3) ✓' },
        { difficulty: 'Medium', question: 'Punt R is by (9, 4). Dit word oor die vertikale lyn x = 7 gereflekteer, soos getoon. Vind die koördinate van die beeld R\'.', answer: '(5, 4)', checkMode: 'auto', correctAnswer: '(5, 4)', correctAnswers: ['(5, 4)', '(5,4)'], explanation: 'Spieëllyn x = 7. Afstand van R tot die lyn: 9 − 7 = 2 eenhede.\nDie beeld is 2 eenhede aan die ander kant: 7 − 2 = 5.\nDie y-waarde bly dieselfde.\nR\' = (5, 4) ✓' },
        { difficulty: 'Medium-Hard', question: 'Driehoek ABC het hoekpunte A(2, 3), B(5, 3), C(5, 6), soos getoon. Dit word in die x-as gereflekteer. Vind die koördinate van die beeld A\'B\'C\'.', answer: "A'(2,-3) B'(5,-3) C'(5,-6)", checkMode: 'auto', correctAnswer: "A'(2,-3) B'(5,-3) C'(5,-6)", correctAnswers: ["A'(2,-3) B'(5,-3) C'(5,-6)", "A'(2, -3) B'(5, -3) C'(5, -6)", "A'(2,−3) B'(5,−3) C'(5,−6)"], explanation: "Refleksie in die x-as: (x, y) → (x, −y).\nA(2, 3) → A'(2, −3).\nB(5, 3) → B'(5, −3).\nC(5, 6) → C'(5, −6). ✓" },

        // ── Blok C — Translasie met koördinate (V8-10) ──────────────────────────
        { difficulty: 'Easy', question: 'Punt A is by (4, −6). Dit word 5 eenhede links en 3 eenhede op getransleer, soos getoon. Vind die nuwe koördinate van A\'.', answer: '(-1, -3)', checkMode: 'auto', correctAnswer: '(-1, -3)', correctAnswers: ['(-1, -3)', '(-1,-3)', '(−1, −3)', '(−1,−3)'], explanation: 'Translasie van (−5, 3): (x, y) → (x − 5, y + 3).\nA(4, −6) → A\'(4 − 5, −6 + 3) = (−1, −3) ✓' },
        { difficulty: 'Medium', question: 'Driehoek ABC het hoekpunte A(1, 2), B(4, 2), C(1, 5), soos getoon. Dit word met (3, −4) getransleer. Vind die koördinate van die beeld A\'B\'C\'.', answer: "A'(4,-2) B'(7,-2) C'(4,1)", checkMode: 'auto', correctAnswer: "A'(4,-2) B'(7,-2) C'(4,1)", correctAnswers: ["A'(4,-2) B'(7,-2) C'(4,1)", "A'(4, -2) B'(7, -2) C'(4, 1)", "A'(4,−2) B'(7,−2) C'(4,1)"], explanation: "Translasie van (3, −4): (x, y) → (x + 3, y − 4).\nA(1, 2) → A'(4, −2).\nB(4, 2) → B'(7, −2).\nC(1, 5) → C'(4, 1). ✓" },
        { difficulty: 'Hard', question: 'ʼn Leerder transleer die punt (7, −5) met (−2, 6) en skryf die beeld as (9, −11). Is dit korrek? Indien nie, vind die korrekte beeld.', answer: 'Nee, die korrekte beeld is (5, 1).', checkMode: 'auto', correctAnswer: '(5, 1)', correctAnswers: ['(5, 1)', '(5,1)', 'Nee, (5,1)', 'Nee, die korrekte beeld is (5, 1).'], explanation: 'Korrekte reël: (x, y) → (x + (−2), y + 6).\n(7, −5) → (7 − 2, −5 + 6) = (5, 1).\nDie leerder het afgetrek waar hy moes optel, en andersom. Die korrekte beeld is (5, 1) ✓' },

        // ── Blok D — Rotasie om die oorsprong (V11-14) ──────────────────────────
        { difficulty: 'Easy', question: 'Punt A is by (6, 2). Dit word 90° kloksgewys om die oorsprong geroteer, soos getoon. Gebruik die reël (x, y) → (y, −x) om die beeld A\' te vind.', answer: '(2, -6)', checkMode: 'auto', correctAnswer: '(2, -6)', correctAnswers: ['(2, -6)', '(2,-6)', '(2, −6)', '(2,−6)'], explanation: 'Reël: (x, y) → (y, −x).\nA(6, 2) → A\'(2, −6) ✓' },
        { difficulty: 'Medium', question: 'Punt B is by (4, −5). Dit word 180° om die oorsprong geroteer, soos getoon. Gebruik die reël (x, y) → (−x, −y) om die beeld B\' te vind.', answer: '(-4, 5)', checkMode: 'auto', correctAnswer: '(-4, 5)', correctAnswers: ['(-4, 5)', '(-4,5)', '(−4, 5)', '(−4,5)'], explanation: 'Reël: (x, y) → (−x, −y).\nB(4, −5) → B\'(−4, 5) ✓' },
        { difficulty: 'Medium-Hard', question: 'Punt C is by (−3, 5). Dit word 90° anti-kloksgewys om die oorsprong geroteer, soos getoon. Gebruik die reël (x, y) → (−y, x) om die beeld C\' te vind.', answer: '(-5, -3)', checkMode: 'auto', correctAnswer: '(-5, -3)', correctAnswers: ['(-5, -3)', '(-5,-3)', '(−5, −3)', '(−5,−3)'], explanation: 'Reël: (x, y) → (−y, x).\nC(−3, 5) → C\'(−5, −3) ✓' },
        { difficulty: 'Hard', question: 'Driehoek ABC het hoekpunte A(2, 1), B(5, 1), C(5, 4), soos getoon. Dit word 90° kloksgewys om die oorsprong geroteer. Vind die koördinate van die beeld A\'B\'C\'.', answer: "A'(1,-2) B'(1,-5) C'(4,-5)", checkMode: 'auto', correctAnswer: "A'(1,-2) B'(1,-5) C'(4,-5)", correctAnswers: ["A'(1,-2) B'(1,-5) C'(4,-5)", "A'(1, -2) B'(1, -5) C'(4, -5)", "A'(1,−2) B'(1,−5) C'(4,−5)"], explanation: "Reël vir 90° kloksgewys: (x, y) → (y, −x).\nA(2, 1) → A'(1, −2).\nB(5, 1) → B'(1, −5).\nC(5, 4) → C'(4, −5). ✓" },

        // ── Blok E — Vergroting/verkleining met skaalfaktor (V15-17) ────────────
        { difficulty: 'Medium', question: 'Punt P is by (3, 4). Dit word met skaalfaktor 2 vanaf die oorsprong vergroot, soos getoon. Vind die koördinate van die beeld P\'.', answer: '(6, 8)', checkMode: 'auto', correctAnswer: '(6, 8)', correctAnswers: ['(6, 8)', '(6,8)'], explanation: 'Vergroting vanaf die oorsprong met skaalfaktor 2: (x, y) → (2x, 2y).\nP(3, 4) → P\'(2×3, 2×4) = (6, 8) ✓' },
        { difficulty: 'Hard', question: 'Driehoek ABC het hoekpunte A(2, 2), B(4, 2), C(2, 4), soos getoon. Dit word met skaalfaktor 3 vanaf die middelpunt (2, 2) vergroot. Vind die koördinate van die beeld A\'B\'C\'.', answer: "A'(2,2) B'(8,2) C'(2,8)", checkMode: 'auto', correctAnswer: "A'(2,2) B'(8,2) C'(2,8)", correctAnswers: ["A'(2,2) B'(8,2) C'(2,8)", "A'(2, 2) B'(8, 2) C'(2, 8)"], explanation: "Reël vir vergroting vanaf middelpunt (2, 2) met skaalfaktor 3: (x, y) → (2 + 3(x−2), 2 + 3(y−2)).\nA(2, 2) → A'(2 + 3(0), 2 + 3(0)) = (2, 2) (die middelpunt beeld op homself af).\nB(4, 2) → B'(2 + 3(2), 2 + 3(0)) = (8, 2).\nC(2, 4) → C'(2 + 3(0), 2 + 3(2)) = (2, 8). ✓" },
        { difficulty: 'Hard', question: 'Punt P is by (12, 9). Dit word met skaalfaktor ⅓ vanaf die oorsprong verklein, soos getoon. Vind die koördinate van die beeld P\'.', answer: '(4, 3)', checkMode: 'auto', correctAnswer: '(4, 3)', correctAnswers: ['(4, 3)', '(4,3)'], explanation: 'Verkleining vanaf die oorsprong met skaalfaktor ⅓: (x, y) → (⅓x, ⅓y).\nP(12, 9) → P\'(⅓×12, ⅓×9) = (4, 3) ✓' },

        // ── Blok F — Saamgestelde transformasies & kongruensie/gelykvormigheid (V18-20) ─
        { difficulty: 'Hard', question: 'Punt P is by (1, 4). Transleer dit eers met (4, −1), en reflekteer dan die verkrygde beeld in die y-as. Vind die finale koördinate.', answer: '(-5, 3)', checkMode: 'auto', correctAnswer: '(-5, 3)', correctAnswers: ['(-5, 3)', '(-5,3)', '(−5, 3)', '(−5,3)'], explanation: 'Stap 1 — transleer met (4, −1): (1, 4) → (1+4, 4−1) = (5, 3).\nStap 2 — reflekteer (5, 3) in die y-as: (x, y) → (−x, y), wat (−5, 3) gee.\nFinale beeld = (−5, 3) ✓' },
        { difficulty: 'Hard', question: 'Punt A is by (3, 1). Dit word eers 180° om die oorsprong geroteer, en die verkrygde beeld word dan in die x-as gereflekteer. Beskryf ʼn enkele transformasie met dieselfde algehele effek, en gee die finale koördinate.', answer: 'Refleksie in die y-as; finale punt (-3, 1)', checkMode: 'self', correctAnswer: 'Refleksie in die y-as; finale punt (-3, 1)' },
        { difficulty: 'Hard', question: 'Driehoek A het hoekpunte (1, 1), (3, 1), (1, 4). Dit word met skaalfaktor ½ vanaf die oorsprong verklein om driehoek B te vorm. Verduidelik of driehoek B kongruent of gelykvormig aan driehoek A is, en gee ʼn rede.', answer: 'Gelykvormig, nie kongruent nie — verkleining verander die grootte van die driehoek (alle sye word half so lank) terwyl die hoeke en vorm dieselfde bly, dus is die driehoeke gelykvormig maar nie kongruent nie.', checkMode: 'self', correctAnswer: 'Gelykvormig, nie kongruent nie — verkleining verander die grootte van die driehoek (alle sye word half so lank) terwyl die hoeke en vorm dieselfde bly, dus is die driehoeke gelykvormig maar nie kongruent nie.' },
      ],
      scoreMessages: [
        { minScore: 17, message: 'Uitstekend! Jy het transformasiemeetkunde oor elke vaardigheid in hierdie stel bemeester.' },
        { minScore: 13, message: 'Goeie werk! Jy is selfversekerd met refleksies, translasies, rotasies en vergrotings — hersien enige gemiste vrae en probeer nog ʼn stel.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids afdeling vir afdeling, en probeer dan hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // ── Blok A — Benoem/beskryf transformasies (V1-3) ──────────────────────
        { difficulty: 'Easy', question: 'ʼn Figuur word oor ʼn lyn omgeflip sodat elke punt op die beeld dieselfde afstand van die lyn is as die ooreenstemmende punt op die voorwerp. Watter tipe transformasie is dit?', answer: 'refleksie', checkMode: 'auto', correctAnswer: 'refleksie', correctAnswers: ['refleksie', 'ʼn refleksie'], explanation: 'Om ʼn figuur oor ʼn lyn om te flip, sodat die beeld ʼn spieëlbeeld dieselfde afstand van die lyn as die voorwerp is, word ʼn refleksie genoem.' },
        { difficulty: 'Easy', question: 'ʼn Figuur word om ʼn vaste middelpunt deur ʼn gegewe hoek, in ʼn gegewe rigting, gedraai, sonder om die grootte te verander. Watter tipe transformasie is dit?', answer: 'rotasie', checkMode: 'auto', correctAnswer: 'rotasie', correctAnswers: ['rotasie', 'ʼn rotasie'], explanation: 'Om ʼn figuur om ʼn vaste middelpunt deur ʼn gegewe hoek, in ʼn gegewe rigting, te draai, sonder om die grootte of vorm te verander, word ʼn rotasie genoem.' },
        { difficulty: 'Medium', question: 'Driehoek A het hoekpunte (3, 1), (6, 1), (3, 4). Driehoek B het hoekpunte (1, 4), (4, 4), (1, 7). Beskryf die enkele transformasie wat driehoek A op driehoek B afbeeld.', answer: 'Translasie met (-2, 3)', checkMode: 'auto', correctAnswer: 'Translasie met (-2, 3)', correctAnswers: ['Translasie met (-2, 3)', 'translasie (-2,3)', 'translasie van (-2,3)', 'transleer met (-2,3)', '(-2, 3)', '(-2,3)'], explanation: 'Vergelyk ooreenstemmende hoekpunte: (3,1)→(1,4) is −2 in x, +3 in y. (6,1)→(4,4) is dieselfde skuif. (3,4)→(1,7) is weer dieselfde skuif.\nElke punt beweeg dieselfde afstand in dieselfde rigting en die vorm flip of draai nie, dus is dit ʼn translasie met (−2, 3) ✓' },

        // ── Blok B — Refleksie met koördinate (V4-7) ────────────────────────────
        { difficulty: 'Easy', question: 'Punt P is by (7, 3). Dit word in die x-as gereflekteer, soos getoon. Vind die koördinate van die beeld P\'.', answer: '(7, -3)', checkMode: 'auto', correctAnswer: '(7, -3)', correctAnswers: ['(7, -3)', '(7,-3)', '(7, −3)', '(7,−3)'], explanation: 'Refleksie in die x-as: (x, y) → (x, −y).\nP(7, 3) → P\'(7, −3) ✓' },
        { difficulty: 'Easy-Medium', question: 'Punt Q is by (−5, 9). Dit word in die y-as gereflekteer, soos getoon. Vind die koördinate van die beeld Q\'.', answer: '(5, 9)', checkMode: 'auto', correctAnswer: '(5, 9)', correctAnswers: ['(5, 9)', '(5,9)'], explanation: 'Refleksie in die y-as: (x, y) → (−x, y).\nQ(−5, 9) → Q\'(5, 9) ✓' },
        { difficulty: 'Medium', question: 'Punt R is by (2, 5). Dit word oor die vertikale lyn x = 8 gereflekteer, soos getoon. Vind die koördinate van die beeld R\'.', answer: '(14, 5)', checkMode: 'auto', correctAnswer: '(14, 5)', correctAnswers: ['(14, 5)', '(14,5)'], explanation: 'Spieëllyn x = 8. Afstand van R tot die lyn: 8 − 2 = 6 eenhede.\nDie beeld is 6 eenhede aan die ander kant: 8 + 6 = 14.\nDie y-waarde bly dieselfde.\nR\' = (14, 5) ✓' },
        { difficulty: 'Medium-Hard', question: 'Driehoek ABC het hoekpunte A(3, 2), B(6, 2), C(6, 5), soos getoon. Dit word in die y-as gereflekteer. Vind die koördinate van die beeld A\'B\'C\'.', answer: "A'(-3,2) B'(-6,2) C'(-6,5)", checkMode: 'auto', correctAnswer: "A'(-3,2) B'(-6,2) C'(-6,5)", correctAnswers: ["A'(-3,2) B'(-6,2) C'(-6,5)", "A'(-3, 2) B'(-6, 2) C'(-6, 5)", "A'(−3,2) B'(−6,2) C'(−6,5)"], explanation: "Refleksie in die y-as: (x, y) → (−x, y).\nA(3, 2) → A'(−3, 2).\nB(6, 2) → B'(−6, 2).\nC(6, 5) → C'(−6, 5). ✓" },

        // ── Blok C — Translasie met koördinate (V8-10) ──────────────────────────
        { difficulty: 'Easy', question: 'Punt A is by (−6, −2). Dit word 8 eenhede regs en 5 eenhede op getransleer, soos getoon. Vind die nuwe koördinate van A\'.', answer: '(2, 3)', checkMode: 'auto', correctAnswer: '(2, 3)', correctAnswers: ['(2, 3)', '(2,3)'], explanation: 'Translasie van (8, 5): (x, y) → (x + 8, y + 5).\nA(−6, −2) → A\'(−6 + 8, −2 + 5) = (2, 3) ✓' },
        { difficulty: 'Medium', question: 'Driehoek ABC het hoekpunte A(3, 1), B(6, 1), C(3, 3), soos getoon. Dit word met (−5, 2) getransleer. Vind die koördinate van die beeld A\'B\'C\'.', answer: "A'(-2,3) B'(1,3) C'(-2,5)", checkMode: 'auto', correctAnswer: "A'(-2,3) B'(1,3) C'(-2,5)", correctAnswers: ["A'(-2,3) B'(1,3) C'(-2,5)", "A'(-2, 3) B'(1, 3) C'(-2, 5)", "A'(−2,3) B'(1,3) C'(−2,5)"], explanation: "Translasie van (−5, 2): (x, y) → (x − 5, y + 2).\nA(3, 1) → A'(−2, 3).\nB(6, 1) → B'(1, 3).\nC(3, 3) → C'(−2, 5). ✓" },
        { difficulty: 'Hard', question: 'ʼn Leerder transleer die punt (−1, −4) met (3, −2) en skryf die beeld as (2, -2). Is dit korrek? Indien nie, vind die korrekte beeld.', answer: 'Nee, die korrekte beeld is (2, -6).', checkMode: 'auto', correctAnswer: '(2, -6)', correctAnswers: ['(2, -6)', '(2,-6)', 'Nee, (2,-6)', 'Nee, die korrekte beeld is (2, -6).'], explanation: 'Korrekte reël: (x, y) → (x + 3, y − 2).\n(−1, −4) → (−1 + 3, −4 − 2) = (2, −6).\nDie leerder het die korrekte x-waarde gekry, maar vergeet om 2 van die y-waarde af te trek. Die korrekte beeld is (2, −6) ✓' },

        // ── Blok D — Rotasie om die oorsprong (V11-14) ──────────────────────────
        { difficulty: 'Easy', question: 'Punt A is by (−4, 7). Dit word 90° kloksgewys om die oorsprong geroteer, soos getoon. Gebruik die reël (x, y) → (y, −x) om die beeld A\' te vind.', answer: '(7, 4)', checkMode: 'auto', correctAnswer: '(7, 4)', correctAnswers: ['(7, 4)', '(7,4)'], explanation: 'Reël: (x, y) → (y, −x).\nA(−4, 7) → A\'(7, 4) ✓' },
        { difficulty: 'Medium', question: 'Punt B is by (5, −3). Dit word 180° om die oorsprong geroteer, soos getoon. Gebruik die reël (x, y) → (−x, −y) om die beeld B\' te vind.', answer: '(-5, 3)', checkMode: 'auto', correctAnswer: '(-5, 3)', correctAnswers: ['(-5, 3)', '(-5,3)', '(−5, 3)', '(−5,3)'], explanation: 'Reël: (x, y) → (−x, −y).\nB(5, −3) → B\'(−5, 3) ✓' },
        { difficulty: 'Medium-Hard', question: 'Punt C is by (6, 2). Dit word 90° anti-kloksgewys om die oorsprong geroteer, soos getoon. Gebruik die reël (x, y) → (−y, x) om die beeld C\' te vind.', answer: '(-2, 6)', checkMode: 'auto', correctAnswer: '(-2, 6)', correctAnswers: ['(-2, 6)', '(-2,6)', '(−2, 6)', '(−2,6)'], explanation: 'Reël: (x, y) → (−y, x).\nC(6, 2) → C\'(−2, 6) ✓' },
        { difficulty: 'Hard', question: 'Driehoek ABC het hoekpunte A(1, 2), B(3, 2), C(3, 5), soos getoon. Dit word 90° kloksgewys om die oorsprong geroteer. Vind die koördinate van die beeld A\'B\'C\'.', answer: "A'(2,-1) B'(2,-3) C'(5,-3)", checkMode: 'auto', correctAnswer: "A'(2,-1) B'(2,-3) C'(5,-3)", correctAnswers: ["A'(2,-1) B'(2,-3) C'(5,-3)", "A'(2, -1) B'(2, -3) C'(5, -3)", "A'(2,−1) B'(2,−3) C'(5,−3)"], explanation: "Reël vir 90° kloksgewys: (x, y) → (y, −x).\nA(1, 2) → A'(2, −1).\nB(3, 2) → B'(2, −3).\nC(3, 5) → C'(5, −3). ✓" },

        // ── Blok E — Vergroting/verkleining met skaalfaktor (V15-17) ────────────
        { difficulty: 'Medium', question: 'Punt P is by (4, 1). Dit word met skaalfaktor 4 vanaf die oorsprong vergroot, soos getoon. Vind die koördinate van die beeld P\'.', answer: '(16, 4)', checkMode: 'auto', correctAnswer: '(16, 4)', correctAnswers: ['(16, 4)', '(16,4)'], explanation: 'Vergroting vanaf die oorsprong met skaalfaktor 4: (x, y) → (4x, 4y).\nP(4, 1) → P\'(4×4, 4×1) = (16, 4) ✓' },
        { difficulty: 'Hard', question: 'Driehoek ABC het hoekpunte A(3, 3), B(5, 3), C(3, 5), soos getoon. Dit word met skaalfaktor 2 vanaf die middelpunt (3, 3) vergroot. Vind die koördinate van die beeld A\'B\'C\'.', answer: "A'(3,3) B'(7,3) C'(3,7)", checkMode: 'auto', correctAnswer: "A'(3,3) B'(7,3) C'(3,7)", correctAnswers: ["A'(3,3) B'(7,3) C'(3,7)", "A'(3, 3) B'(7, 3) C'(3, 7)"], explanation: "Reël vir vergroting vanaf middelpunt (3, 3) met skaalfaktor 2: (x, y) → (3 + 2(x−3), 3 + 2(y−3)).\nA(3, 3) → A'(3 + 2(0), 3 + 2(0)) = (3, 3) (die middelpunt beeld op homself af).\nB(5, 3) → B'(3 + 2(2), 3 + 2(0)) = (7, 3).\nC(3, 5) → C'(3 + 2(0), 3 + 2(2)) = (3, 7). ✓" },
        { difficulty: 'Hard', question: 'Punt P is by (15, 6). Dit word met skaalfaktor ⅓ vanaf die oorsprong verklein, soos getoon. Vind die koördinate van die beeld P\'.', answer: '(5, 2)', checkMode: 'auto', correctAnswer: '(5, 2)', correctAnswers: ['(5, 2)', '(5,2)'], explanation: 'Verkleining vanaf die oorsprong met skaalfaktor ⅓: (x, y) → (⅓x, ⅓y).\nP(15, 6) → P\'(⅓×15, ⅓×6) = (5, 2) ✓' },

        // ── Blok F — Saamgestelde transformasies & kongruensie/gelykvormigheid (V18-20) ─
        { difficulty: 'Hard', question: 'Punt P is by (4, 2). Transleer dit eers met (−1, 3), en reflekteer dan die verkrygde beeld in die x-as. Vind die finale koördinate.', answer: '(3, -5)', checkMode: 'auto', correctAnswer: '(3, -5)', correctAnswers: ['(3, -5)', '(3,-5)', '(3, −5)', '(3,−5)'], explanation: 'Stap 1 — transleer met (−1, 3): (4, 2) → (4−1, 2+3) = (3, 5).\nStap 2 — reflekteer (3, 5) in die x-as: (x, y) → (x, −y), wat (3, −5) gee.\nFinale beeld = (3, −5) ✓' },
        { difficulty: 'Hard', question: 'Punt A is by (2, 5). Dit word eers in die x-as gereflekteer, en die verkrygde beeld word dan 180° om die oorsprong geroteer. Beskryf ʼn enkele transformasie met dieselfde algehele effek, en gee die finale koördinate.', answer: 'Refleksie in die y-as; finale punt (-2, 5)', checkMode: 'self', correctAnswer: 'Refleksie in die y-as; finale punt (-2, 5)' },
        { difficulty: 'Hard', question: 'Driehoek A het hoekpunte (1, 1), (4, 1), (1, 2). Dit word met skaalfaktor 3 vanaf die oorsprong vergroot om driehoek B te vorm. Verduidelik of driehoek B kongruent of gelykvormig aan driehoek A is, en gee ʼn rede.', answer: 'Gelykvormig, nie kongruent nie — vergroting verander die grootte van die driehoek (alle sye word 3 keer so lank) terwyl die hoeke en vorm dieselfde bly, dus is die driehoeke gelykvormig maar nie kongruent nie.', checkMode: 'self', correctAnswer: 'Gelykvormig, nie kongruent nie — vergroting verander die grootte van die driehoek (alle sye word 3 keer so lank) terwyl die hoeke en vorm dieselfde bly, dus is die driehoeke gelykvormig maar nie kongruent nie.' },
      ],
      scoreMessages: [
        { minScore: 17, message: 'Uitstekend! Jy het transformasiemeetkunde oor elke vaardigheid in hierdie stel bemeester.' },
        { minScore: 13, message: 'Goeie werk! Jy is selfversekerd met refleksies, translasies, rotasies en vergrotings — hersien enige gemiste vrae en probeer nog ʼn stel.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids afdeling vir afdeling, en probeer dan hierdie stel weer.' },
      ],
    },
  ] satisfies PracticeSet[],
}
