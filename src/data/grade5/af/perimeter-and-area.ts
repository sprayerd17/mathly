import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (perimeter and area roles) ────────────────────────────────
// width                → red    (#dc2626)
// side lengths / length→ blue   (#2563eb)
// addition / multiply  → green  (#16a34a)
// perimeter / area ans → orange (#ea580c)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Omtrek en Oppervlakte',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — OMTREK VERSTAAN
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'understanding-perimeter',
      title: 'Omtrek Verstaan',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Die <strong>omtrek</strong> van ʼn vorm is die totale afstand rondom die buitekant van die vorm. Om die omtrek te vind, tel ons al die sylengtes bymekaar. Maak seker al die sye is in dieselfde eenheid voordat jy bymekaartel. Omtrek word altyd gemeet in <strong>lengte-eenhede</strong> soos mm, cm, m of km.</p>` +

        `<p style="margin-bottom:20px;">Ons gebruik omtrek in die werklike lewe wanneer ons moet weet hoeveel heining om ʼn tuin te sit of hoeveel lint om ʼn prentraam te sit.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('sylengtes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('optelling')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('omtrekantwoord')}</span>` +
        `</div>` +

        // ── Key rule ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelreël</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">O</span>` +
        `<p style="margin:0;font-size:14px;">Omtrek = ${bl('sy 1')} ${gr('+')} ${bl('sy 2')} ${gr('+')} ${bl('sy 3')} ${gr('+')} ${bl('sy 4')} ${gr('+ …')} — tel <em>al</em> die ${bl('sylengtes')} bymekaar</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Belangrik: dieselfde eenhede</p>` +
        `<p style="margin:0;color:#1e3a8a;">Kyk altyd of al die ${bl('sylengtes')} in <strong>dieselfde eenheid</strong> is voordat jy bymekaartel. As sommige sye in cm en ander in m is, reken hulle eers om. Jou ${or('omtrekantwoord')} sal in dieselfde eenheid as die sye wees.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Reghoek is 10 cm lank en 6 cm breed. Wat is sy omtrek?',
          answer: `Die omtrek van die reghoek is ${or('32 cm')}`,
          steps: [
            `ʼn Reghoek het 4 sye — 2 lang sye (${bl('10 cm')}) en 2 kort sye (${bl('6 cm')}).`,
            `${gr('Tel')} al vier sye bymekaar: ${bl('10')} ${gr('+')} ${bl('10')} ${gr('+')} ${bl('6')} ${gr('+')} ${bl('6')} ${gr('=')} ${or('32')}`,
            `Die omtrek van die reghoek is ${or('32 cm')}.`,
          ],
        },
        {
          question: 'Sipho wil ʼn heining om sy vierkantige tuin sit. Elke sy is 8 m lank. Hoeveel heining het hy nodig?',
          answer: `Sipho het ${or('32 m')} heining nodig`,
          steps: [
            `ʼn Vierkant het 4 gelyke sye. Elke sy is ${bl('8 m')}.`,
            `${gr('Tel')} al vier sye bymekaar: ${bl('8')} ${gr('+')} ${bl('8')} ${gr('+')} ${bl('8')} ${gr('+')} ${bl('8')} ${gr('=')} ${or('32')}. Of vermenigvuldig: 4 × ${bl('8')} ${gr('=')} ${or('32')}.`,
            `Sipho het ${or('32 m')} heining nodig.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Easy — omtrek van ʼn vierkant ──────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Wat is die omtrek van ʼn vierkant met sye van 5cm?',
          answer: '20cm',
          checkMode: 'auto',
          correctAnswer: '20cm',
          correctAnswers: ['20cm', '20 cm'],
          explanation: 'ʼn Vierkant het 4 gelyke sye.\nOmtrek = 4 × 5cm = 20cm ✓',
        },

        // ── V2 Easy — omtrek van ʼn reghoek ───────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Reghoek is 7cm lank en 3cm breed. Wat is sy omtrek?',
          answer: '20cm',
          checkMode: 'auto',
          correctAnswer: '20cm',
          correctAnswers: ['20cm', '20 cm'],
          explanation: 'Omtrek = 7 + 7 + 3 + 3 = 20cm ✓',
        },

        // ── V3 Medium — lint om ʼn reghoekige kaart ──────────────────────────
        {
          difficulty: 'Medium',
          question: 'Amahle sit lint om ʼn reghoekige kaart wat 15cm lank en 10cm breed is. Hoeveel lint het sy nodig?',
          answer: '50cm',
          checkMode: 'auto',
          correctAnswer: '50cm',
          correctAnswers: ['50cm', '50 cm'],
          explanation: 'Omtrek = 15 + 15 + 10 + 10 = 50cm ✓',
        },

        // ── V4 Hard — vind die breedte vanaf ʼn bekende omtrek ───────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Reghoekige tuin het ʼn omtrek van 36m. Die lengte is 12m. Wat is die breedte?',
          answer: 'Omtrek = 2 x lengte + 2 x breedte. 36 = 2 x 12 + 2 x breedte. 36 = 24 + 2 x breedte. 2 x breedte = 12. Breedte = 6m.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a rectangle with side lengths labelled in blue and the perimeter calculation written out in green and orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the perimeter of a rectangle and a square by adding all side lengths with colour coded steps" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — OPPERVLAKTE VERSTAAN
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'understanding-area',
      title: 'Oppervlakte Verstaan',
      icon: '⬛',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Oppervlakte</strong> is die hoeveelheid plat oppervlak wat ʼn vorm bedek. Ons meet oppervlakte in <strong>vierkante eenhede</strong> soos vierkante sentimeter (cm²) of vierkante meter (m²). Om die oppervlakte van ʼn reghoek te vind, vermenigvuldig ons die ${bl('lengte')} met die ${re('breedte')}. Oppervlakte = ${bl('lengte')} × ${re('breedte')}. Ons gebruik oppervlakte in die werklike lewe wanneer ons moet weet hoeveel verf om ʼn muur te bedek of hoeveel mat om ʼn vloer te bedek.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('lengte')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('breedte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vermenigvuldiging')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('oppervlakte-antwoord')}</span>` +
        `</div>` +

        // ── Key rule ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelreël</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">O</span>` +
        `<p style="margin:0;font-size:14px;">Oppervlakte = ${bl('lengte')} ${gr('×')} ${re('breedte')} — vermenigvuldig die ${bl('lengte')} met die ${re('breedte')} om die ${or('oppervlakte')} te kry</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vierkante eenhede</p>` +
        `<p style="margin:0;color:#1e3a8a;">Oppervlakte word altyd in <strong>vierkante eenhede</strong> gemeet. As die ${bl('lengte')} en ${re('breedte')} in cm is, is die ${or('oppervlakte-antwoord')} in cm². As hulle in m is, is die ${or('oppervlakte-antwoord')} in m².</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Reghoek is 8 cm lank en 5 cm breed. Wat is sy oppervlakte?',
          answer: `Die oppervlakte van die reghoek is ${or('40 cm²')}`,
          steps: [
            `Gebruik die formule: Oppervlakte = ${bl('lengte')} ${gr('×')} ${re('breedte')}.`,
            `Oppervlakte = ${bl('8')} ${gr('×')} ${re('5')} = ${or('40')}.`,
            `Die oppervlakte van die reghoek is ${or('40 cm²')}.`,
          ],
        },
        {
          question: 'Lerato wil haar vierkantige badkamervloer teël. Elke sy van die vloer is 4 m lank. Hoeveel vierkante meter teëls het sy nodig?',
          answer: `Lerato het ${or('16 m²')} teëls nodig`,
          steps: [
            `ʼn Vierkant het gelyke sye, dus is ${bl('lengte')} = ${re('breedte')} = 4 m.`,
            `Gebruik die formule: Oppervlakte = ${bl('lengte')} ${gr('×')} ${re('breedte')}.`,
            `Oppervlakte = ${bl('4')} ${gr('×')} ${re('4')} = ${or('16')}.`,
            `Lerato het ${or('16 m²')} teëls nodig.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V5 Easy — oppervlakte van ʼn reghoek ────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Wat is die oppervlakte van ʼn reghoek wat 6cm lank en 4cm breed is?',
          answer: '24cm²',
          checkMode: 'auto',
          correctAnswer: '24cm²',
          correctAnswers: ['24cm²', '24 cm²', '24cm2', '24 cm2'],
          explanation: 'Oppervlakte = lengte × breedte = 6 × 4 = 24cm² ✓',
        },

        // ── V6 Easy — oppervlakte van ʼn vierkant ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Wat is die oppervlakte van ʼn vierkant met sye van 7m?',
          answer: '49m²',
          checkMode: 'auto',
          correctAnswer: '49m²',
          correctAnswers: ['49m²', '49 m²', '49m2', '49 m2'],
          explanation: 'Oppervlakte = 7 × 7 = 49m² ✓',
        },

        // ── V7 Medium — teëls vir ʼn reghoekige vloer ─────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho teël ʼn reghoekige vloer wat 8m lank en 5m breed is. Elke teël bedek 1m². Hoeveel teëls het hy nodig?',
          answer: '40',
          checkMode: 'auto',
          correctAnswer: '40',
          explanation: 'Oppervlakte = 8 × 5 = 40m².\nElke teël bedek 1m², dus is 40 teëls nodig ✓',
        },

        // ── V8 Hard — matkoste ─────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Reghoekige kamer is 6m lank en 4m breed. Mat kos R120 per m². Hoeveel sal dit kos om die hele kamer met mat te bedek?',
          answer: 'R2880',
          checkMode: 'auto',
          correctAnswer: 'R2880',
          correctAnswers: ['R2880', '2880', 'R 2880'],
          explanation: 'Oppervlakte = 6 × 4 = 24m².\nKoste = 24 × R120 = R2880 ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a rectangle with length labelled in blue and width labelled in red with the area formula and answer written in green and orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the area of a rectangle and a square by multiplying length by width with colour coded steps" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — DIE VERSKIL TUSSEN OMTREK EN OPPERVLAKTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'perimeter-vs-area',
      title: 'Die Verskil Tussen Omtrek en Oppervlakte',
      icon: '🔲',
      explanation:
        `<p style="margin-bottom:16px;">${bl('Omtrek')} en ${re('oppervlakte')} word maklik verwar, maar hulle meet verskillende dinge. ${bl('Omtrek')} meet die afstand rondom die <strong>buitekant</strong> van ʼn vorm — dit is altyd in ${gr('lengte-eenhede')} soos ${gr('cm')} of ${gr('m')}. ${re('Oppervlakte')} meet die oppervlak <strong>binne</strong> ʼn vorm — dit is altyd in ${or('vierkante eenhede')} soos ${or('cm²')} of ${or('m²')}. Dink daaraan so — ${bl('omtrek')} is soos die raam van ʼn prent en ${re('oppervlakte')} is soos die prent self.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('omtrek')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('oppervlakte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('lengte-eenhede')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vierkante eenhede')}</span>` +
        `</div>` +

        // ── Comparison cards ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelvergelyking</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">${bl('Omtrek')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Die totale afstand <strong>rondom</strong> die buitekant van ʼn vorm.</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Formule: tel al die sylengtes bymekaar.</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Eenheid: ${gr('cm')}, ${gr('m')}, ${gr('km')} — ʼn eenheid van <strong>lengte</strong>.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Werklike lewe: die raam rondom ʼn prent.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">${re('Oppervlakte')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Die hoeveelheid oppervlak <strong>binne</strong> ʼn vorm.</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Formule: lengte × breedte.</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Eenheid: ${or('cm²')}, ${or('m²')} — ʼn <strong>vierkante</strong> eenheid.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Werklike lewe: die prent binne die raam.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">ʼn Groter ${bl('omtrek')} beteken NIE ʼn groter ${re('oppervlakte')} nie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Twee vorms kan dieselfde ${bl('omtrek')} hê maar heel verskillende ${re('oppervlaktes')}, of ʼn groter ${bl('omtrek')} maar ʼn kleiner ${re('oppervlakte')}. Bereken altyd albei apart — moenie ooit aanneem die een vertel jou van die ander nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Reghoek is 6 cm lank en 4 cm breed. Vind beide die omtrek en die oppervlakte.',
          answer: `${bl('Omtrek')} = ${bl('20')} ${gr('cm')} en ${re('Oppervlakte')} = ${re('24')} ${or('cm²')}`,
          steps: [
            `${bl('Omtrek')} — tel al die sye bymekaar: ${bl('6')} + ${bl('6')} + ${bl('4')} + ${bl('4')} = ${bl('20')} ${gr('cm')}.`,
            `${re('Oppervlakte')} — vermenigvuldig lengte met breedte: ${bl('6')} × ${bl('4')} = ${re('24')} ${or('cm²')}.`,
            `${bl('Omtrek')} = ${bl('20')} ${gr('cm')}.`,
            `${re('Oppervlakte')} = ${re('24')} ${or('cm²')}.`,
          ],
        },
        {
          question: "Thabo sê ʼn vorm met ʼn groter omtrek het altyd ʼn groter oppervlakte. Is hy korrek?",
          answer: `Thabo is <strong>verkeerd</strong> — ʼn groter ${bl('omtrek')} waarborg nie ʼn groter ${re('oppervlakte')} nie`,
          steps: [
            `Kom ons kyk na ʼn baie lang, dun reghoek — 20 ${gr('cm')} lank en 1 ${gr('cm')} breed. ${bl('Omtrek')} = ${bl('20')} + ${bl('20')} + ${bl('1')} + ${bl('1')} = ${bl('42')} ${gr('cm')}. ${re('Oppervlakte')} = 20 × 1 = ${re('20')} ${or('cm²')}.`,
            `Kom ons kyk nou na ʼn vierkant met sye van 6 ${gr('cm')}. ${bl('Omtrek')} = 4 × ${bl('6')} = ${bl('24')} ${gr('cm')}. ${re('Oppervlakte')} = 6 × 6 = ${re('36')} ${or('cm²')}.`,
            `Die vierkant het ʼn <strong>kleiner</strong> ${bl('omtrek')} (${bl('24')} ${gr('cm')} &lt; ${bl('42')} ${gr('cm')}) maar ʼn <strong>groter</strong> ${re('oppervlakte')} (${re('36')} ${or('cm²')} &gt; ${re('20')} ${or('cm²')}).`,
            `Thabo is <strong>verkeerd</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V9 Medium — verskil tussen omtrek en oppervlakte ─────────────────
        {
          difficulty: 'Medium',
          question: 'Wat is die verskil tussen omtrek en oppervlakte?',
          answer: 'Omtrek is die afstand rondom die buitekant van ʼn vorm, gemeet in eenhede soos cm of m. Oppervlakte is die hoeveelheid oppervlak binne die vorm, gemeet in vierkante eenhede soos cm² of m².',
          checkMode: 'self',
        },

        // ── V10 Hard — vergelyk twee reghoeke ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Reghoek het ʼn lengte van 10cm en ʼn breedte van 3cm. ʼn Ander reghoek het ʼn lengte van 6cm en ʼn breedte van 5cm. Watter het die groter oppervlakte en watter het die groter omtrek?',
          answer: 'Eerste reghoek — oppervlakte = 30cm², omtrek = 26cm. Tweede reghoek — oppervlakte = 30cm², omtrek = 22cm. Albei het dieselfde oppervlakte, maar die eerste het ʼn groter omtrek.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Side by side diagram of a long thin rectangle and a square showing that the rectangle has a bigger perimeter in blue but a smaller area in red with units of length in green and square units in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing the difference between perimeter and area using the frame and picture analogy with colour coded examples in blue red green and orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — OPPERVLAKTE VAN ONREËLMATIGE VORMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'area-irregular-shapes',
      title: 'Oppervlakte van Onreëlmatige Vorms',
      icon: '🔷',
      explanation:
        `<p style="margin-bottom:16px;">Nie alle vorms is eenvoudige reghoeke of vierkante nie. ʼn <strong>Onreëlmatige vorm</strong> is een wat nie ʼn standaardvorm is nie. Om die oppervlakte van ʼn onreëlmatige vorm te vind, kan ons dit <strong>in kleiner reghoeke opdeel</strong>, die oppervlakte van elke reghoek apart vind en dit dan bymekaartel. Kyk altyd vir die maklikste manier om die vorm in reghoeke op te deel wat nie oorvleuel nie.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('Reghoek A')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('Reghoek B')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('totale oppervlakte')}</span>` +
        `</div>` +

        // ── Strategy steps ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategie: verdeel en tel bymekaar</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Verdeel</strong> — Deel die onreëlmatige vorm in kleiner reghoeke of vierkante op wat nie oorvleuel nie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Bereken</strong> — Vind die oppervlakte van elke reghoek apart deur Oppervlakte = lengte × breedte te gebruik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#ea580c;">Tel bymekaar</strong> — Tel al die kleiner oppervlaktes bymekaar om die ${or('totale oppervlakte')} van die onreëlmatige vorm te kry.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Geen oorvleueling toegelaat nie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jy die vorm opdeel, maak seker die kleiner reghoeke bedek elke deel van die vorm presies een keer — daar moet <strong>geen gapings</strong> en <strong>geen oorvleueling</strong> wees nie. As twee reghoeke oorvleuel, sal jy daardie oppervlakte twee keer tel en die verkeerde antwoord kry.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn L-vormige kamer bestaan uit twee reghoeke. Reghoek A is 6 m lank en 4 m breed. Reghoek B is 3 m lank en 2 m breed. Wat is die totale oppervlakte?',
          answer: `Die totale oppervlakte van die L-vormige kamer is ${or('30 m²')}`,
          steps: [
            `Vind die oppervlakte van ${bl('Reghoek A')}: ${bl('6')} × ${bl('4')} = ${bl('24 m²')}.`,
            `Vind die oppervlakte van ${gr('Reghoek B')}: ${gr('3')} × ${gr('2')} = ${gr('6 m²')}.`,
            `Tel die oppervlaktes bymekaar: ${bl('24')} + ${gr('6')} = ${or('30')}.`,
            `Die totale oppervlakte van die L-vormige kamer is ${or('30 m²')}.`,
          ],
        },
        {
          question: 'Amahle teken ʼn vorm op ʼn rooster waar elke vierkant 1 cm² verteenwoordig. Sy tel 14 vol vierkante en 4 half vierkante binne die vorm. Wat is die oppervlakte?',
          answer: `Die oppervlakte van die vorm is ${or('16 cm²')}`,
          steps: [
            `Tel die ${bl('vol vierkante')}: ${bl('14')} × 1 cm² = ${bl('14 cm²')}.`,
            `Tel die ${gr('half vierkante')}: ${gr('4')} × 0,5 cm² = ${gr('2 cm²')}.`,
            `Tel bymekaar: ${bl('14')} + ${gr('2')} = ${or('16')}.`,
            `Die oppervlakte van die vorm is ${or('16 cm²')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V11 Medium — L-vormige tuin ─────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn L-vormige tuin bestaan uit twee reghoeke. Die eerste is 8m by 4m en die tweede is 3m by 2m. Wat is die totale oppervlakte?',
          answer: '38m²',
          checkMode: 'auto',
          correctAnswer: '38m²',
          correctAnswers: ['38m²', '38 m²', '38m2', '38 m2'],
          explanation: 'Oppervlakte van eerste reghoek: 8 × 4 = 32m².\nOppervlakte van tweede reghoek: 3 × 2 = 6m².\nTotale oppervlakte: 32 + 6 = 38m² ✓',
        },

        // ── V12 Hard — roostertelling met half vierkante ────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato tel 18 vol vierkante en 6 half vierkante binne ʼn vorm op ʼn rooster waar elke vierkant = 1cm². Wat is die oppervlakte?',
          answer: '21cm²',
          checkMode: 'auto',
          correctAnswer: '21cm²',
          correctAnswers: ['21cm²', '21 cm²', '21cm2', '21 cm2'],
          explanation: 'Vol vierkante: 18 × 1cm² = 18cm².\nHalf vierkante: 6 × 0,5cm² = 3cm².\nTotale oppervlakte: 18 + 3 = 21cm² ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing an L-shaped room split into Rectangle A labelled in blue and Rectangle B labelled in green with the total area written in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the area of an irregular shape by splitting it into smaller rectangles calculating each area separately and adding them together with colour coded steps" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — OMTREK- EN OPPERVLAKTEPROBLEME OPLOS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-perimeter-area-problems',
      title: 'Omtrek- en Oppervlakteprobleme Oplos',
      icon: '📝',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik omtrek en oppervlakte om werklike-lewe probleme op te los. Wanneer jy probleme oplos, lees altyd noukeurig om te besluit of jy ${bl('omtrek')} of ${re('oppervlakte')} nodig het. As die probleem oor die afstand rondom die buitekant gaan, gebruik ${bl('omtrek')}. As die probleem oor die bedekking van ʼn oppervlak gaan, gebruik ${re('oppervlakte')}. Skryf jou antwoord met die korrekte eenheid — lengte-eenhede vir ${bl('omtrek')} en vierkante eenhede vir ${re('oppervlakte')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('omtrekprobleem')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('oppervlakteprobleem')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('antwoord')}</span>` +
        `</div>` +

        // ── Decision guide ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om te besluit: omtrek of oppervlakte?</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">${bl('Gebruik omtrek wanneer…')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Die probleem gaan oor die afstand <strong>rondom</strong> die buitekant van ʼn vorm.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Sleutelwoorde: heining, rand, raam, lint, kant, rondom.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">${re('Gebruik oppervlakte wanneer…')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Die probleem gaan oor die <strong>bedekking</strong> of vulling van ʼn oppervlak.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Sleutelwoorde: verf, teël, mat, bedek, gras, vloer, muur.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Gebruik altyd die korrekte eenheid</p>` +
        `<p style="margin:0;color:#1e3a8a;">Skryf jou ${gr('antwoord')} met die korrekte eenheid. ${bl('Omtrek')} gebruik lengte-eenhede soos m of cm. ${re('Oppervlakte')} gebruik vierkante eenhede soos m² of cm². As jy die verkeerde eenheid gebruik, sal jou antwoord verkeerd wees, al is die getal reg.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho wil ʼn rand van teëls om die kant van ʼn reghoekige swembad sit wat 12 m lank en 8 m breed is. Hoeveel meter teëls het hy nodig?',
          answer: `Sipho het ${gr('40 m')} teëls nodig`,
          steps: [
            `ʼn Rand gaan rondom die buitekant — dit is ʼn ${bl('omtrek')}-probleem.`,
            `${bl('Omtrek')} = ${bl('12')} + ${bl('12')} + ${bl('8')} + ${bl('8')} = ${gr('40')} m.`,
            `Sipho het ${gr('40 m')} teëls nodig.`,
          ],
        },
        {
          question: 'Lerato wil ʼn muur verf wat 5 m lank en 3 m hoog is. Verf bedek 10 m² per blik. Hoeveel blikke het sy nodig?',
          answer: `Lerato het ${gr('2')} blikke verf nodig`,
          steps: [
            `Verf bedek ʼn oppervlak — dit is ʼn ${re('oppervlakte')}-probleem.`,
            `Vind die ${re('oppervlakte')} van die muur: ${re('5')} × ${re('3')} = ${gr('15 m²')}.`,
            `Elke blik bedek 10 m². Aantal blikke = ${gr('15')} ÷ 10 = 1,5 blikke.`,
            `Aangesien jy nie ʼn halwe blik kan koop nie, het Lerato ${gr('2')} blikke verf nodig.`,
          ],
        },
        {
          question: 'ʼn Reghoekige tuin is 9 m lank en 6 m breed. Thabo wil gras oor die hele tuin plant en ʼn heining om die buitekant sit. Vind beide die oppervlakte en die omtrek.',
          answer: `${re('Oppervlakte')} = ${gr('54 m²')} gras nodig en ${bl('Omtrek')} = ${gr('30 m')} heining nodig`,
          steps: [
            `Om gras te plant bedek die oppervlak — gebruik ${re('oppervlakte')}. Om ʼn heining te sit gaan rondom die buitekant — gebruik ${bl('omtrek')}.`,
            `${re('Oppervlakte')} = ${re('9')} × ${re('6')} = ${gr('54 m²')} gras nodig.`,
            `${bl('Omtrek')} = ${bl('9')} + ${bl('9')} + ${bl('6')} + ${bl('6')} = ${gr('30 m')} heining nodig.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V13 Medium — verfblikke ───────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Thabo wil ʼn reghoekige muur verf wat 6m breed en 3m hoog is. Verf bedek 9m² per blik. Hoeveel blikke het hy nodig?',
          answer: '2',
          checkMode: 'auto',
          correctAnswer: '2',
          explanation: 'Oppervlakte van muur = 6 × 3 = 18m².\nBlikke nodig = 18 ÷ 9 = 2 blikke ✓',
        },

        // ── V14 Hard — vierkantige tuin, vind sy en omtrek ─────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Vierkantige tuin het ʼn oppervlakte van 64m². Wat is die lengte van elke sy en wat is die omtrek?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Lengte van elke sy',
              correctAnswer: '8m',
              correctAnswers: ['8m', '8 m', '8'],
              explanation: 'Oppervlakte van vierkant = sy × sy.\n64 = sy².\nSy = √64 = 8m ✓',
            },
            {
              label: 'b) Omtrek',
              correctAnswer: '32m',
              correctAnswers: ['32m', '32 m', '32'],
              explanation: 'Omtrek = 4 × sy = 4 × 8 = 32m ✓',
            },
          ],
        },

        // ── V15 Hard — pad om ʼn swembad ────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Reghoekige swembad is 15m lank en 8m breed. Sipho wil ʼn pad van 1m breed heeltemal om die buitekant van die swembad sit. Wat is die oppervlakte van net die pad?',
          answer: 'Buitenste reghoek = 17m x 10m = 170m². Swembad-oppervlakte = 15 x 8 = 120m². Pad-oppervlakte = 170 - 120 = 50m².',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a rectangle with perimeter highlighted in blue around the outside and area shaded in red on the inside with the answer written in green for a real life word problem" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to decide between perimeter and area when solving real life problems with colour coded worked examples in blue red and green" />',
    },
  ],
  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het omtrek en oppervlakte bemeester.' },
      { minPercent: 75, message: 'Goeie werk! Jy het ʼn sterk begrip van omtrek en oppervlakte.' },
      { minPercent: 50, message: 'Goeie poging! Gaan die afdelings waar jy punte verloor het weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },
  scoreMessages: [
    { minScore: 9, message: 'Uitstekend! ʼn Volpunt-telling — jy het omtrek en oppervlakte vir Graad 5 volkome bemeester. Hou so aan!' },
    { minScore: 7, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van hierdie onderwerp. Gaan enige gemiste dele weer deur en jy sal dit perfek hê.' },
    { minScore: 5, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
    { minScore: 3, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: "Moenie moed opgee nie — elke kenner was eers ʼn beginner! Gaan weer deur die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling, en probeer dan weer." },
  ],
}
