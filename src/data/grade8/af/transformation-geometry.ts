import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

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
        '<DiagramPlaceholder label="Cartesiese vlak wat punt (3,5) en sy refleksie (3,-5) oor die x-as wys, met ʼn stippellyn wat die refleksie aandui" />',

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
        '<DiagramPlaceholder label="ʼn Driehoek met hoekpunte (1,2),(3,2),(2,5) en sy refleksie in die y-as langs mekaar op ʼn Cartesiese vlak gewys" />',

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
        '<DiagramPlaceholder label="ʼn Klein vierkant en ʼn groter vierkant wat ʼn vergroting met skaalfaktor 2 wys, met sylengtes en oppervlaktes op elkeen gemerk" />',

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
}
