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
        '<DiagramPlaceholder label="Diagram wat ʼn reghoek wys met sylengtes geëtiketteer in blou en die omtrekberekening uitgeskryf in groen en oranje" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die omtrek van ʼn reghoek en ʼn vierkant te bereken deur al die sylengtes op te tel met kleurgekodeerde stappe" />',
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
        '<DiagramPlaceholder label="Diagram wat ʼn reghoek wys met lengte geëtiketteer in blou en breedte geëtiketteer in rooi, met die oppervlakteformule en antwoord uitgeskryf in groen en oranje" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die oppervlakte van ʼn reghoek en ʼn vierkant te bereken deur lengte met breedte te vermenigvuldig met kleurgekodeerde stappe" />',
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
        '<DiagramPlaceholder label="Diagram langs mekaar van ʼn lang dun reghoek en ʼn vierkant wat wys dat die reghoek ʼn groter omtrek in blou het maar ʼn kleiner oppervlakte in rooi, met lengte-eenhede in groen en vierkante eenhede in oranje" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die verskil tussen omtrek en oppervlakte verduidelik deur die raam-en-prent-analogie te gebruik met kleurgekodeerde voorbeelde in blou, rooi, groen en oranje" />',
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
        '<DiagramPlaceholder label="Diagram wat ʼn L-vormige kamer wys wat verdeel is in Reghoek A geëtiketteer in blou en Reghoek B geëtiketteer in groen, met die totale oppervlakte uitgeskryf in oranje" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die oppervlakte van ʼn onreëlmatige vorm te bereken deur dit in kleiner reghoeke te verdeel, elke oppervlakte apart te bereken en dit bymekaar te tel met kleurgekodeerde stappe" />',
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
        '<DiagramPlaceholder label="Diagram wat ʼn reghoek wys met omtrek uitgelig in blou rondom die buitekant en oppervlakte geskakeer in rooi binne-in, met die antwoord uitgeskryf in groen vir ʼn werklike-lewe-woordprobleem" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om tussen omtrek en oppervlakte te besluit wanneer werklike-lewe-probleme opgelos word met kleurgekodeerde uitgewerkte voorbeelde in blou, rooi en groen" />',
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

  // ═══════════════════════════════════════════════════════════════════════
  // OEFENSTELLE — 3 stelle × 20 vrae
  // Blokke: 0-3 Omtrek-grondbeginsels | 4-7 Oppervlakte-grondbeginsels |
  // 8-11 Omtrek vs oppervlakte (begrip/foutopsporing) | 12-15 Saamgestelde/onreëlmatige oppervlakte |
  // 16-19 Toegepaste meerstap-probleme
  // ═══════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Vierkantige teël het sye van 9cm. Wat is sy omtrek?', answer: '36cm', checkMode: 'auto', correctAnswer: '36cm', correctAnswers: ['36cm', '36 cm'], explanation: 'ʼn Vierkant het 4 gelyke sye.\nOmtrek = 4 × 9cm = 36cm ✓' },
        { difficulty: 'Easy', question: 'ʼn Reghoek is 12cm lank en 5cm breed. Wat is sy omtrek?', answer: '34cm', checkMode: 'auto', correctAnswer: '34cm', correctAnswers: ['34cm', '34 cm'], explanation: 'Omtrek = 12 + 12 + 5 + 5 = 34cm ✓' },
        { difficulty: 'Easy-Medium', question: 'Zanele wil heining heeltemal om haar reghoekige groentetuin sit, wat 14m lank en 9m breed is. Hoeveel heining het sy nodig?', answer: '46m', checkMode: 'auto', correctAnswer: '46m', correctAnswers: ['46m', '46 m'], explanation: 'Omtrek = 14 + 14 + 9 + 9 = 46m ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige sportveld het ʼn omtrek van 40m. Die lengte is 14m. Wat is die breedte?', answer: '6m', checkMode: 'auto', correctAnswer: '6m', correctAnswers: ['6m', '6 m'], explanation: 'Omtrek = 2 × lengte + 2 × breedte.\n40 = 2 × 14 + 2 × breedte.\n40 = 28 + 2 × breedte.\n2 × breedte = 12.\nBreedte = 6m ✓' },
        { difficulty: 'Easy', question: 'Wat is die oppervlakte van ʼn reghoek wat 9cm lank en 6cm breed is?', answer: '54cm²', checkMode: 'auto', correctAnswer: '54cm²', correctAnswers: ['54cm²', '54 cm²', '54cm2', '54 cm2'], explanation: 'Oppervlakte = lengte × breedte = 9 × 6 = 54cm² ✓' },
        { difficulty: 'Easy', question: 'Wat is die oppervlakte van ʼn vierkantige landjie met sye van 8m?', answer: '64m²', checkMode: 'auto', correctAnswer: '64m²', correctAnswers: ['64m²', '64 m²', '64m2', '64 m2'], explanation: 'Oppervlakte = 8 × 8 = 64m² ✓' },
        { difficulty: 'Easy-Medium', question: 'Sipho lê teëls op ʼn reghoekige patio wat 7m lank en 5m breed is. Elke teël bedek presies 1m². Hoeveel teëls het hy nodig?', answer: '35', checkMode: 'auto', correctAnswer: '35', explanation: 'Oppervlakte van patio = 7 × 5 = 35m².\nElke teël bedek 1m², dus het Sipho 35 teëls nodig ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige oprit is 5m lank en 4m breed. Bestrating kos R95 per m². Wat is die totale koste om die hele oprit te bestraat?', answer: 'R1900', checkMode: 'auto', correctAnswer: 'R1900', correctAnswers: ['R1900', '1900', 'R 1900'], explanation: 'Oppervlakte = 5 × 4 = 20m².\nKoste = 20 × R95 = R1900 ✓' },
        { difficulty: 'Medium', question: 'Verduidelik in jou eie woorde die verskil tussen omtrek en oppervlakte. Noem wat elkeen meet en watter eenhede elkeen gebruik.', answer: 'Omtrek is die totale afstand rondom die buitenste rand van ʼn vorm — dit word in lengte-eenhede soos cm of m gemeet. Oppervlakte is die hoeveelheid plat oppervlak binne ʼn vorm — dit word in vierkante eenhede soos cm² of m² gemeet. Hulle meet heeltemal verskillende dinge, dus het ʼn vorm een omtrekwaarde en ʼn aparte oppervlaktewaarde.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige kennisgewingbord is 11cm lank en 7cm breed. Vind beide die omtrek en die oppervlakte.', answer: 'Omtrek = 36cm, Oppervlakte = 77cm²', checkMode: 'auto', correctAnswer: '36cm77cm²', correctAnswers: ['36cm77cm²', '36cm, 77cm²', 'O36A77', 'omtrek36oppervlakte77'], explanation: 'Omtrek = 11 + 11 + 7 + 7 = 36cm.\nOppervlakte = 11 × 7 = 77cm² ✓' },
        { difficulty: 'Medium', question: 'Karabo sê: "As een vorm ʼn groter omtrek as ʼn ander vorm het, moet dit ook ʼn groter oppervlakte hê." Is Karabo korrek? Verduidelik met ʼn voorbeeld om jou antwoord te ondersteun.', answer: 'Karabo is verkeerd. Byvoorbeeld, ʼn reghoek wat 20cm lank en 1cm breed is, het ʼn omtrek van 20 + 20 + 1 + 1 = 42cm en ʼn oppervlakte van 20 × 1 = 20cm². ʼn Vierkant met sye van 6cm het ʼn kleiner omtrek van 4 × 6 = 24cm maar ʼn groter oppervlakte van 6 × 6 = 36cm². Dit wys dat ʼn groter omtrek nie ʼn groter oppervlakte waarborg nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Reghoek A is 12cm lank en 3cm breed. Reghoek B is 6cm lank en 6cm breed. Wys dat hulle dieselfde oppervlakte het, en vind dan watter een die groter omtrek het.', answer: 'Albei het ʼn oppervlakte van 36cm², maar Reghoek A het die groter omtrek (30cm teenoor 24cm)', checkMode: 'auto', correctAnswer: 'ReghoekA', correctAnswers: ['ReghoekA', 'Reghoek A', 'A', 'reghoeka'], explanation: 'Oppervlakte van Reghoek A = 12 × 3 = 36cm².\nOppervlakte van Reghoek B = 6 × 6 = 36cm². Albei oppervlaktes is gelyk.\nOmtrek van A = 12 + 12 + 3 + 3 = 30cm.\nOmtrek van B = 6 + 6 + 6 + 6 = 24cm.\nReghoek A het die groter omtrek ✓' },
        { difficulty: 'Medium', question: 'ʼn L-vormige klaskamer bestaan uit twee reghoeke. Die eerste reghoek is 7m lank en 5m breed. Die tweede reghoek is 4m lank en 3m breed. Wat is die totale oppervlakte van die klaskamer?', answer: '47m²', checkMode: 'auto', correctAnswer: '47m²', correctAnswers: ['47m²', '47 m²', '47m2', '47 m2'], explanation: 'Oppervlakte van eerste reghoek = 7 × 5 = 35m².\nOppervlakte van tweede reghoek = 4 × 3 = 12m².\nTotale oppervlakte = 35 + 12 = 47m² ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Vorm word op ʼn rooster geteken waar elke vierkant 1cm² verteenwoordig. Thandiwe tel 16 vol vierkante en 8 half vierkante binne die vorm. Wat is die totale oppervlakte?', answer: '20cm²', checkMode: 'auto', correctAnswer: '20cm²', correctAnswers: ['20cm²', '20 cm²', '20cm2', '20 cm2'], explanation: 'Vol vierkante: 16 × 1cm² = 16cm².\nHalf vierkante: 8 × 0,5cm² = 4cm².\nTotale oppervlakte = 16 + 4 = 20cm² ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Reghoekige grasperk is 10m by 8m. ʼn Reghoekige stuk van 3m by 2m in die hoek word bestraat in plaas van gras. Watter oppervlakte van die grasperk is nog steeds gras?', answer: '74m²', checkMode: 'auto', correctAnswer: '74m²', correctAnswers: ['74m²', '74 m²', '74m2', '74 m2'], explanation: 'Totale oppervlakte van grasperk = 10 × 8 = 80m².\nBestrate hoek-oppervlakte = 3 × 2 = 6m².\nGras-oppervlakte = 80 − 6 = 74m² ✓' },
        { difficulty: 'Hard', question: 'ʼn Kamer is gevorm soos twee reghoeke wat aanmekaar sit. Die onderste reghoek is 10m breed en 3m hoog. Bo-op dit sit ʼn tweede reghoek wat 4m breed is. Die totale hoogte van die hele vorm is 8m. Wat is die totale oppervlakte van die kamer?', answer: '50m²', checkMode: 'auto', correctAnswer: '50m²', correctAnswers: ['50m²', '50 m²', '50m2', '50 m2'], explanation: 'Hoogte van boonste reghoek = totale hoogte − onderste hoogte = 8 − 3 = 5m.\nOppervlakte van onderste reghoek = 10 × 3 = 30m².\nOppervlakte van boonste reghoek = 4 × 5 = 20m².\nTotale oppervlakte = 30 + 20 = 50m² ✓' },
        { difficulty: 'Hard', question: 'ʼn Boer wil weet hoeveel draad hy nodig het om ʼn reghoekige kamp te omhein, en apart hoeveel grassaad hy nodig het om dit te bedek. Watter meting vertel hom van die draad, en watter vertel hom van die grassaad?', answer: 'Omtrek vertel hom van die draad (die heining gaan rondom die buitekant). Oppervlakte vertel hom van die grassaad (die saad bedek die oppervlak binne die kamp).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige tuin is 13m lank en 8m breed. Palesa wil heining heeltemal daaromheen sit en gras oor die hele tuin plant. Hoeveel heining het sy nodig, en watter oppervlakte gras moet sy plant?', answer: '', checkMode: 'auto', parts: [ { label: 'a) Heining nodig (omtrek)', correctAnswer: '42m', correctAnswers: ['42m', '42 m'], explanation: 'Omtrek = 13 + 13 + 8 + 8 = 42m ✓' }, { label: 'b) Gras-oppervlakte nodig', correctAnswer: '104m²', correctAnswers: ['104m²', '104 m²', '104m2', '104 m2'], explanation: 'Oppervlakte = 13 × 8 = 104m² ✓' } ] },
        { difficulty: 'Hard', question: 'ʼn Reghoekige swembad is 14m lank en 6m breed. ʼn Bestrate pad van 1m breed word heeltemal om die buitekant van die swembad gebou. Wat is die oppervlakte van net die pad (sonder die swembad)?', answer: 'Die buitenste reghoek (swembad plus pad) is (14 + 1 + 1)m by (6 + 1 + 1)m = 16m by 8m, wat ʼn oppervlakte van 16 × 8 = 128m² gee. Die swembad self het ʼn oppervlakte van 14 × 6 = 84m². Pad-oppervlakte = 128 − 84 = 44m².', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige kombuisvloer is 6m lank en 5m breed. Elke teël bedek 0,8m². Teëls word teen R45 elk verkoop en kan slegs as hele teëls gekoop word. Hoeveel teëls moet gekoop word, en wat is die totale koste?', answer: '', checkMode: 'auto', parts: [ { label: 'a) Aantal teëls', correctAnswer: '38', correctAnswers: ['38'], explanation: 'Oppervlakte van vloer = 6 × 5 = 30m².\nTeëls nodig = 30 ÷ 0,8 = 37,5.\nAangesien jy nie ʼn halwe teël kan koop nie, rond op na 38 teëls ✓' }, { label: 'b) Totale koste', correctAnswer: 'R1710', correctAnswers: ['R1710', '1710', 'R 1710'], explanation: 'Koste = 38 × R45 = R1710 ✓' } ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het omtrek en oppervlakte vir Graad 5 bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklegkaart as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Wat is die omtrek van ʼn vierkantige foto-raam met sye van 11cm?', answer: '44cm', checkMode: 'auto', correctAnswer: '44cm', correctAnswers: ['44cm', '44 cm'], explanation: 'ʼn Vierkant het 4 gelyke sye.\nOmtrek = 4 × 11cm = 44cm ✓' },
        { difficulty: 'Easy', question: 'ʼn Reghoekige tafelblad is 15cm lank en 8cm breed. Vind sy omtrek.', answer: '46cm', checkMode: 'auto', correctAnswer: '46cm', correctAnswers: ['46cm', '46 cm'], explanation: 'Omtrek = 15 + 15 + 8 + 8 = 46cm ✓' },
        { difficulty: 'Easy-Medium', question: 'Amahle plak lint om die kant van ʼn reghoekige foto-raam wat 20cm lank en 13cm breed is. Hoeveel lint het sy in totaal nodig?', answer: '66cm', checkMode: 'auto', correctAnswer: '66cm', correctAnswers: ['66cm', '66 cm'], explanation: 'Omtrek = 20 + 20 + 13 + 13 = 66cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige skaapkamp het ʼn omtrek van 54m. Die breedte is 11m. Wat is die lengte?', answer: '16m', checkMode: 'auto', correctAnswer: '16m', correctAnswers: ['16m', '16 m'], explanation: 'Omtrek = 2 × lengte + 2 × breedte.\n54 = 2 × lengte + 2 × 11.\n54 = 2 × lengte + 22.\n2 × lengte = 32.\nLengte = 16m ✓' },
        { difficulty: 'Easy', question: 'Wat is die oppervlakte van ʼn reghoek wat 12cm lank en 7cm breed is?', answer: '84cm²', checkMode: 'auto', correctAnswer: '84cm²', correctAnswers: ['84cm²', '84 cm²', '84cm2', '84 cm2'], explanation: 'Oppervlakte = lengte × breedte = 12 × 7 = 84cm² ✓' },
        { difficulty: 'Easy', question: 'Wat is die oppervlakte van ʼn vierkantige groentetuintjie met sye van 9m?', answer: '81m²', checkMode: 'auto', correctAnswer: '81m²', correctAnswers: ['81m²', '81 m²', '81m2', '81 m2'], explanation: 'Oppervlakte = 9 × 9 = 81m² ✓' },
        { difficulty: 'Easy-Medium', question: 'Lerato wil mat koop om ʼn reghoekige sitkamervloer te bedek wat 6m lank en 9m breed is. Hoeveel vierkante meter mat het sy nodig?', answer: '54m²', checkMode: 'auto', correctAnswer: '54m²', correctAnswers: ['54m²', '54 m²', '54m2', '54 m2'], explanation: 'Oppervlakte = 6 × 9 = 54m² ✓' },
        { difficulty: 'Medium', question: 'ʼn Vierkantige plakkaat het ʼn oppervlakte van 121m². Wat is die lengte van elke sy?', answer: '11m', checkMode: 'auto', correctAnswer: '11m', correctAnswers: ['11m', '11 m'], explanation: 'Oppervlakte van vierkant = sy × sy.\n121 = sy².\nSy = √121 = 11m ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige venster is 13cm lank en 6cm breed. Vind beide die omtrek en die oppervlakte.', answer: 'Omtrek = 38cm, Oppervlakte = 78cm²', checkMode: 'auto', correctAnswer: '38cm78cm²', correctAnswers: ['38cm78cm²', '38cm, 78cm²', 'O38A78', 'omtrek38oppervlakte78'], explanation: 'Omtrek = 13 + 13 + 6 + 6 = 38cm.\nOppervlakte = 13 × 6 = 78cm² ✓' },
        { difficulty: 'Medium', question: 'Verduidelik die verskil tussen omtrek en oppervlakte aan ʼn jonger leerder deur die idee van ʼn prentraam en die prent binne dit te gebruik.', answer: 'Omtrek is soos die raam rondom ʼn prent — dit is die afstand heeltemal rondom die buitenste rand, gemeet in lengte-eenhede soos cm of m. Oppervlakte is soos die prent self — dit is die hoeveelheid plat spasie binne die raam, gemeet in vierkante eenhede soos cm² of m². Die raam en die prent is twee heeltemal verskillende metings van dieselfde prent.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder skryf "die omtrek van my lessenaar is 12cm²." Verduidelik wat verkeerd is met hierdie stelling.', answer: 'Die eenhede is verkeerd. Omtrek is ʼn afstand gemeet in lengte-eenhede soos cm of m, nie vierkante eenhede nie. Aangesien cm² ʼn vierkante eenheid is wat vir oppervlakte gebruik word, het die stelling omtrek met oppervlakte verwar. Dit behoort te sê die omtrek is 12cm (of die oppervlakte is 12cm²), nie die twee te meng nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Reghoek A is 10cm lank en 4cm breed. Reghoek B is 7cm lank en 7cm breed. Wys dat hulle dieselfde omtrek het, en vind dan watter een die groter oppervlakte het.', answer: 'Albei het ʼn omtrek van 28cm, maar Reghoek B het die groter oppervlakte (49cm² teenoor 40cm²)', checkMode: 'auto', correctAnswer: 'ReghoekB', correctAnswers: ['ReghoekB', 'Reghoek B', 'B', 'reghoekb'], explanation: 'Omtrek van A = 10 + 10 + 4 + 4 = 28cm.\nOmtrek van B = 7 + 7 + 7 + 7 = 28cm. Albei omtrekke is gelyk.\nOppervlakte van A = 10 × 4 = 40cm².\nOppervlakte van B = 7 × 7 = 49cm².\nReghoek B het die groter oppervlakte ✓' },
        { difficulty: 'Medium', question: 'ʼn L-vormige stoorkamer bestaan uit twee reghoeke. Die eerste reghoek is 9m lank en 6m breed. Die tweede reghoek is 5m lank en 2m breed. Wat is die totale oppervlakte van die stoorkamer?', answer: '64m²', checkMode: 'auto', correctAnswer: '64m²', correctAnswers: ['64m²', '64 m²', '64m2', '64 m2'], explanation: 'Oppervlakte van eerste reghoek = 9 × 6 = 54m².\nOppervlakte van tweede reghoek = 5 × 2 = 10m².\nTotale oppervlakte = 54 + 10 = 64m² ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Vorm word op ʼn rooster geteken waar elke vierkant 1cm² verteenwoordig. Bongani tel 22 vol vierkante en 10 half vierkante binne die vorm. Wat is die totale oppervlakte?', answer: '27cm²', checkMode: 'auto', correctAnswer: '27cm²', correctAnswers: ['27cm²', '27 cm²', '27cm2', '27 cm2'], explanation: 'Vol vierkante: 22 × 1cm² = 22cm².\nHalf vierkante: 10 × 0,5cm² = 5cm².\nTotale oppervlakte = 22 + 5 = 27cm² ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Reghoekige werkswinkelvloer meet 12m by 7m. ʼn Reghoekige stoorbox van 4m by 3m staan permanent in een hoek en kan nie op geloop word nie. Watter oppervlakte van die vloer kan nog geloop word?', answer: '72m²', checkMode: 'auto', correctAnswer: '72m²', correctAnswers: ['72m²', '72 m²', '72m2', '72 m2'], explanation: 'Totale vloeroppervlakte = 12 × 7 = 84m².\nStoorbox-oppervlakte = 4 × 3 = 12m².\nLoopbare oppervlakte = 84 − 12 = 72m² ✓' },
        { difficulty: 'Hard', question: 'ʼn Gang is gevorm soos twee reghoeke wat aanmekaar sit. Die onderste reghoek is 8m breed en 3m hoog. Bo-op dit sit ʼn tweede reghoek wat 5m breed is. Die totale hoogte van die hele vorm is 10m. Wat is die totale oppervlakte van die gang?', answer: '59m²', checkMode: 'auto', correctAnswer: '59m²', correctAnswers: ['59m²', '59 m²', '59m2', '59 m2'], explanation: 'Hoogte van boonste reghoek = totale hoogte − onderste hoogte = 10 − 3 = 7m.\nOppervlakte van onderste reghoek = 8 × 3 = 24m².\nOppervlakte van boonste reghoek = 5 × 7 = 35m².\nTotale oppervlakte = 24 + 35 = 59m² ✓' },
        { difficulty: 'Hard', question: 'ʼn Skool wil weet hoeveel verf nodig is om ʼn reghoekige saalvloer te bedek, en apart hoeveel plintmateriaal nodig is rondom die rand van dieselfde vloer. Watter meting vertel hulle van die verf, en watter vertel hulle van die plintmateriaal?', answer: 'Oppervlakte vertel hulle van die verf (die verf bedek die plat oppervlak van die vloer). Omtrek vertel hulle van die plintmateriaal (die plint loop rondom die buitenste rand van die kamer).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige tuin is 16m lank en 7m breed. Thabo wil heining heeltemal daaromheen sit en gras oor die hele tuin plant. Hoeveel heining het hy nodig, en watter oppervlakte gras moet hy plant?', answer: '', checkMode: 'auto', parts: [ { label: 'a) Heining nodig (omtrek)', correctAnswer: '46m', correctAnswers: ['46m', '46 m'], explanation: 'Omtrek = 16 + 16 + 7 + 7 = 46m ✓' }, { label: 'b) Gras-oppervlakte nodig', correctAnswer: '112m²', correctAnswers: ['112m²', '112 m²', '112m2', '112 m2'], explanation: 'Oppervlakte = 16 × 7 = 112m² ✓' } ] },
        { difficulty: 'Hard', question: 'ʼn Reghoekige swembad is 12m lank en 7m breed. ʼn Bestrate pad van 1,5m breed word heeltemal om die buitekant van die swembad gebou. Wat is die oppervlakte van net die pad (sonder die swembad)?', answer: 'Die buitenste reghoek (swembad plus pad) is (12 + 1,5 + 1,5)m by (7 + 1,5 + 1,5)m = 15m by 10m, wat ʼn oppervlakte van 15 × 10 = 150m² gee. Die swembad self het ʼn oppervlakte van 12 × 7 = 84m². Pad-oppervlakte = 150 − 84 = 66m².', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige badkamervloer is 7m lank en 4m breed. Elke teël bedek 0,7m². Teëls word teen R60 elk verkoop en kan slegs as hele teëls gekoop word. Hoeveel teëls moet gekoop word, en wat is die totale koste?', answer: '', checkMode: 'auto', parts: [ { label: 'a) Aantal teëls', correctAnswer: '40', correctAnswers: ['40'], explanation: 'Oppervlakte van vloer = 7 × 4 = 28m².\nTeëls nodig = 28 ÷ 0,7 = presies 40 teëls ✓' }, { label: 'b) Totale koste', correctAnswer: 'R2400', correctAnswers: ['R2400', '2400', 'R 2400'], explanation: 'Koste = 40 × R60 = R2400 ✓' } ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het omtrek en oppervlakte vir Graad 5 bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklegkaart as Stel 1 en Stel 2, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Vierkantige seël het sye van 13cm. Wat is sy omtrek?', answer: '52cm', checkMode: 'auto', correctAnswer: '52cm', correctAnswers: ['52cm', '52 cm'], explanation: 'ʼn Vierkant het 4 gelyke sye.\nOmtrek = 4 × 13cm = 52cm ✓' },
        { difficulty: 'Easy', question: 'ʼn Reghoekige lessenaar is 18m lank en 9m breed. Vind sy omtrek.', answer: '54m', checkMode: 'auto', correctAnswer: '54m', correctAnswers: ['54m', '54 m'], explanation: 'Omtrek = 18 + 18 + 9 + 9 = 54m ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Boer benodig heining heeltemal om ʼn reghoekige hoenderwerf wat 21m lank en 15m breed is. Hoeveel heining is in totaal nodig?', answer: '72m', checkMode: 'auto', correctAnswer: '72m', correctAnswers: ['72m', '72 m'], explanation: 'Omtrek = 21 + 21 + 15 + 15 = 72m ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige prentraam het ʼn omtrek van 60cm. Een sy is 22cm lank. Wat is die lengte van die ander sy?', answer: '8cm', checkMode: 'auto', correctAnswer: '8cm', correctAnswers: ['8cm', '8 cm'], explanation: 'Omtrek = 2 × lengte + 2 × breedte.\n60 = 2 × 22 + 2 × ander sy.\n60 = 44 + 2 × ander sy.\n2 × ander sy = 16.\nAnder sy = 8cm ✓' },
        { difficulty: 'Easy', question: 'Wat is die oppervlakte van ʼn reghoek wat 14cm lank en 5cm breed is?', answer: '70cm²', checkMode: 'auto', correctAnswer: '70cm²', correctAnswers: ['70cm²', '70 cm²', '70cm2', '70 cm2'], explanation: 'Oppervlakte = lengte × breedte = 14 × 5 = 70cm² ✓' },
        { difficulty: 'Easy', question: 'Wat is die oppervlakte van ʼn vierkantige binnehof met sye van 12m?', answer: '144m²', checkMode: 'auto', correctAnswer: '144m²', correctAnswers: ['144m²', '144 m²', '144m2', '144 m2'], explanation: 'Oppervlakte = 12 × 12 = 144m² ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Terreinopsigter moet gras plant oor ʼn reghoekige sportveld wat 10m lank en 7m breed is. Watter oppervlakte gras moet hy plant?', answer: '70m²', checkMode: 'auto', correctAnswer: '70m²', correctAnswers: ['70m²', '70 m²', '70m2', '70 m2'], explanation: 'Oppervlakte = 10 × 7 = 70m² ✓' },
        { difficulty: 'Medium', question: 'ʼn Vierkantige mat het ʼn oppervlakte van 100cm². Wat is die lengte van elke sy?', answer: '10cm', checkMode: 'auto', correctAnswer: '10cm', correctAnswers: ['10cm', '10 cm'], explanation: 'Oppervlakte van vierkant = sy × sy.\n100 = sy².\nSy = √100 = 10cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige witbord is 16cm lank en 9cm breed. Vind beide die omtrek en die oppervlakte.', answer: 'Omtrek = 50cm, Oppervlakte = 144cm²', checkMode: 'auto', correctAnswer: '50cm144cm²', correctAnswers: ['50cm144cm²', '50cm, 144cm²', 'O50A144', 'omtrek50oppervlakte144'], explanation: 'Omtrek = 16 + 16 + 9 + 9 = 50cm.\nOppervlakte = 16 × 9 = 144cm² ✓' },
        { difficulty: 'Medium', question: 'Skryf ʼn kort verduideliking van omtrek en oppervlakte vir ʼn Graad 4-leerder wat nog nooit hierdie woorde gehoor het nie. Sluit in wat elkeen meet en watter tipe eenheid elkeen gebruik.', answer: 'Omtrek is die afstand wat jy sou loop as jy heeltemal om die buitenste rand van ʼn vorm loop. Dit word in gewone lengte-eenhede soos cm of m gemeet. Oppervlakte is die hoeveelheid plat spasie wat binne ʼn vorm bedek word, soos hoeveel verf jy sou nodig hê om dit in te vul. Dit word in vierkante eenhede soos cm² of m² gemeet, want jy bedek ʼn plat oppervlak, nie ʼn afstand nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Twee vierkantige teëls het albei sye van 5cm, dus sê ʼn leerder "hulle moet dieselfde omtrek en dieselfde oppervlakte hê, aangesien hulle identiese vierkante is." Is die leerder korrek? Verduidelik jou antwoord.', answer: 'Ja, die leerder is in hierdie geval korrek. Aangesien albei vierkante identiese sylengtes van 5cm het, sal beide die omtrek (4 × 5 = 20cm) en die oppervlakte (5 × 5 = 25cm²) presies dieselfde vir albei vierkante wees. Dit verskil van die vergelyking van twee verskillende vorms — hier is die vorms werklik identies, dus stem elke meting ooreen.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Reghoek A is 9cm lank en 5cm breed. Reghoek B is 15cm lank en 3cm breed. Wys dat hulle dieselfde oppervlakte het, en vind dan watter een die groter omtrek het.', answer: 'Albei het ʼn oppervlakte van 45cm², maar Reghoek B het die groter omtrek (36cm teenoor 28cm)', checkMode: 'auto', correctAnswer: 'ReghoekB', correctAnswers: ['ReghoekB', 'Reghoek B', 'B', 'reghoekb'], explanation: 'Oppervlakte van Reghoek A = 9 × 5 = 45cm².\nOppervlakte van Reghoek B = 15 × 3 = 45cm². Albei oppervlaktes is gelyk.\nOmtrek van A = 9 + 9 + 5 + 5 = 28cm.\nOmtrek van B = 15 + 15 + 3 + 3 = 36cm.\nReghoek B het die groter omtrek ✓' },
        { difficulty: 'Medium', question: 'ʼn L-vormige patio bestaan uit twee reghoeke. Die eerste reghoek is 10m lank en 6m breed. Die tweede reghoek is 4m lank en 3m breed. Wat is die totale oppervlakte van die patio?', answer: '72m²', checkMode: 'auto', correctAnswer: '72m²', correctAnswers: ['72m²', '72 m²', '72m2', '72 m2'], explanation: 'Oppervlakte van eerste reghoek = 10 × 6 = 60m².\nOppervlakte van tweede reghoek = 4 × 3 = 12m².\nTotale oppervlakte = 60 + 12 = 72m² ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Vorm word op ʼn rooster geteken waar elke vierkant 1cm² verteenwoordig. Naledi tel 30 vol vierkante en 12 half vierkante binne die vorm. Wat is die totale oppervlakte?', answer: '36cm²', checkMode: 'auto', correctAnswer: '36cm²', correctAnswers: ['36cm²', '36 cm²', '36cm2', '36 cm2'], explanation: 'Vol vierkante: 30 × 1cm² = 30cm².\nHalf vierkante: 12 × 0,5cm² = 6cm².\nTotale oppervlakte = 30 + 6 = 36cm² ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Reghoekige saalvloer meet 15m by 9m. ʼn Reghoekige verhoog van 5m by 4m is in een hoek gebou en is nie deel van die vloer wat gepoleer word nie. Watter oppervlakte van die vloer word gepoleer?', answer: '115m²', checkMode: 'auto', correctAnswer: '115m²', correctAnswers: ['115m²', '115 m²', '115m2', '115 m2'], explanation: 'Totale vloeroppervlakte = 15 × 9 = 135m².\nVerhoog-oppervlakte = 5 × 4 = 20m².\nGepoleerde oppervlakte = 135 − 20 = 115m² ✓' },
        { difficulty: 'Hard', question: 'ʼn Tuin bestaan uit drie aparte reghoekige blombeddings. Die eerste bedding is 6m by 4m, die tweede bedding is 3m by 2m, en die derde bedding is 5m by 3m. Wat is die totale oppervlakte van al drie blombeddings saam?', answer: '45m²', checkMode: 'auto', correctAnswer: '45m²', correctAnswers: ['45m²', '45 m²', '45m2', '45 m2'], explanation: 'Oppervlakte van eerste bedding = 6 × 4 = 24m².\nOppervlakte van tweede bedding = 3 × 2 = 6m².\nOppervlakte van derde bedding = 5 × 3 = 15m².\nTotale oppervlakte = 24 + 6 + 15 = 45m² ✓' },
        { difficulty: 'Hard', question: 'ʼn Huiseienaar wil weet hoeveel skadunet nodig is om ʼn reghoekige patio-dak te bedek, en apart hoeveel randafwerking nodig is rondom die rand van dieselfde dak. Watter meting vertel hulle van die skadunet, en watter vertel hulle van die randafwerking?', answer: 'Oppervlakte vertel hulle van die skadunet (die net bedek die hele plat oppervlak van die dak). Omtrek vertel hulle van die randafwerking (die afwerking loop rondom die buitenste rand van die dak).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige tuin is 18m lank en 10m breed. Nomvula wil heining heeltemal daaromheen sit en gras oor die hele tuin plant. Hoeveel heining het sy nodig, en watter oppervlakte gras moet sy plant?', answer: '', checkMode: 'auto', parts: [ { label: 'a) Heining nodig (omtrek)', correctAnswer: '56m', correctAnswers: ['56m', '56 m'], explanation: 'Omtrek = 18 + 18 + 10 + 10 = 56m ✓' }, { label: 'b) Gras-oppervlakte nodig', correctAnswer: '180m²', correctAnswers: ['180m²', '180 m²', '180m2', '180 m2'], explanation: 'Oppervlakte = 18 × 10 = 180m² ✓' } ] },
        { difficulty: 'Hard', question: 'ʼn Reghoekige swembad is 20m lank en 10m breed. ʼn Bestrate pad van 2m breed word heeltemal om die buitekant van die swembad gebou. Wat is die oppervlakte van net die pad (sonder die swembad)?', answer: 'Die buitenste reghoek (swembad plus pad) is (20 + 2 + 2)m by (10 + 2 + 2)m = 24m by 14m, wat ʼn oppervlakte van 24 × 14 = 336m² gee. Die swembad self het ʼn oppervlakte van 20 × 10 = 200m². Pad-oppervlakte = 336 − 200 = 136m².', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige motorhuisvloer is 9m lank en 6m breed. Elke sak vloerseëlmiddel bedek 6m². Seëlmiddel word teen R250 per sak verkoop en kan slegs as hele sakke gekoop word. Hoeveel sakke moet gekoop word, en wat is die totale koste?', answer: '', checkMode: 'auto', parts: [ { label: 'a) Aantal sakke', correctAnswer: '9', correctAnswers: ['9'], explanation: 'Oppervlakte van vloer = 9 × 6 = 54m².\nSakke nodig = 54 ÷ 6 = presies 9 sakke ✓' }, { label: 'b) Totale koste', correctAnswer: 'R2250', correctAnswers: ['R2250', '2250', 'R 2250'], explanation: 'Koste = 9 × R250 = R2250 ✓' } ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het omtrek en oppervlakte vir Graad 5 bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
