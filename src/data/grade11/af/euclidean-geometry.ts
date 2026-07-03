import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (Euclidean geometry roles) ────────────────────────────────
// matching angles / triangle sides → blue   (#2563eb)
// proportional sides / parallel   → orange  (#ea580c)
// proportional ratio              → green   (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Euklidiese Meetkunde',
  grade: 11,
  subject: 'Mathematics',
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — NECESSARY AND SUFFICIENT CONDITIONS FOR SIMILAR POLYGONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'similar-polygons-conditions',
      title: 'Nodige en Voldoende Voorwaardes vir Gelykvormige Veelhoeke',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Twee driehoeke is <strong>gelykvormig</strong> as hulle hoeke ooreenstem (<strong>HH-voorwaarde</strong> — as twee pare hoeke ooreenstem, moet die derde paar ook ooreenstem aangesien hoeke optel tot 180°), of as die verhoudings van hulle ooreenstemmende sye gelyk is (<strong>SSS-eweredigheid</strong>).</p>` +
        `<p style="margin-bottom:16px;">Driehoek ABC is gelykvormig aan driehoek DEF as ${bl('∠A = ∠D')}, ${bl('∠B = ∠E')} en ${bl('∠C = ∠F')}, of ekwivalent as ${or('AB/DE')} = ${or('BC/EF')} = ${or('CA/FD')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('ooreenstemmende hoeke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eweredige sye')}</span>` +
        `</div>` +

        // ── Two similarity conditions ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Twee voorwaardes vir gelykvormigheid</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">HH-voorwaarde</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">As twee pare ${bl('hoeke')} ooreenstem, is die driehoeke gelykvormig. Die derde paar stem outomaties ooreen aangesien hoeke in ʼn driehoek optel tot 180°.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">SSS-eweredigheid</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">As al drie pare ${or('ooreenstemmende sye')} in dieselfde verhouding is, is die driehoeke gelykvormig.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Volgorde van hoekpunte is belangrik</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jy △ABC ||| △DEF skryf, vertel die volgorde van die hoekpunte jou watter ${bl('hoeke')} ooreenstem en watter ${or('sye')} in verhouding is. Pas altyd hoekpunte in dieselfde volgorde by mekaar wanneer jy gelykvormigheid stel.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Driehoek ABC het hoeke 45°, 60°, 75°. Driehoek DEF het hoeke 45°, 60°, 75° maar verskillende sylengtes. Is hulle gelykvormig?',
          answer: `Ja — △ABC ∼ △DEF volgens die ${bl('HH')}-voorwaarde`,
          steps: [
            `Lys die hoeke van elke driehoek:<br>△ABC: ${bl('45°')}, ${bl('60°')}, ${bl('75°')}<br>△DEF: ${bl('45°')}, ${bl('60°')}, ${bl('75°')}`,
            `Kontroleer vir ooreenstemmende hoekpare: ${bl('∠A = ∠D = 45°')} ✓ en ${bl('∠B = ∠E = 60°')} ✓`,
            `Aangesien twee pare ${bl('hoeke')} ooreenstem, moet die derde paar ook ooreenstem (${bl('∠C = ∠F = 75°')}) omdat hoeke in ʼn driehoek optel tot 180°.`,
            `<strong>Gevolgtrekking:</strong> Ja — al drie pare ${bl('hoeke')} stem ooreen, dus is die driehoeke gelykvormig volgens die HH-voorwaarde. Verskillende sylengtes affekteer nie gelykvormigheid nie.`,
          ],
        },
        {
          question: 'Driehoek ABC het sye 5, 7, 9. Driehoek DEF het sye 10, 14, 18. Bevestig gelykvormigheid met behulp van syverhoudings.',
          answer: `Ja — △ABC ∼ △DEF volgens ${or('SSS-eweredigheid')} (verhouding = 2)`,
          steps: [
            `Skryf die verhoudings van ooreenstemmende sye neer:<br>${or('DE/AB')} = 10/5, &nbsp; ${or('EF/BC')} = 14/7, &nbsp; ${or('FD/CA')} = 18/9`,
            `Bereken elke verhouding:<br>${or('10/5 = 2')}, &nbsp; ${or('14/7 = 2')}, &nbsp; ${or('18/9 = 2')}`,
            `Aangesien al drie verhoudings gelyk is (${or('2 = 2 = 2')}), is die sye in verhouding met ʼn skaalfaktor van ${or('2')}.`,
            `<strong>Gevolgtrekking:</strong> Die driehoeke is gelykvormig volgens ${or('SSS-eweredigheid')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the AA and SSS proportionality conditions for similar triangles with colour coded angle and side matching" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THE PROPORTIONALITY THEOREM (INCLUDING THE MIDPOINT THEOREM)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'proportionality-theorem',
      title: 'Die Eweredigheidstelling (Insluitend die Middelpuntstelling)',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Die <strong>Eweredigheidstelling</strong> stel dat ʼn lyn wat ${or('ewewydig')} aan een sy van ʼn driehoek getrek word, die ander twee ${bl('sye')} eweredig verdeel. In driehoek ABC, as ${or('MN ∥ BC')} (met M op AB en N op AC), dan is ${gr('AM/MB = AN/NC')}.</p>` +
        `<p style="margin-bottom:16px;">Die <strong>Middelpuntstelling</strong> is ʼn spesiale geval: as M en N presies die middelpunte van AB en AC is, dan is ${or('MN ∥ BC')} ÉN ${or('MN = ½BC')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('ewewydige lynstukke')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('driehoeksye')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('eweredige verhouding')}</span>` +
        `</div>` +

        // ── Theorem statements ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Twee sleutelresultate</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Eweredigheidstelling:</strong> As ${or('MN ∥ BC')}, dan is ${gr('AM/MB = AN/NC')}. Die ${or('ewewydige')} lyn verdeel die twee ${bl('sye')} in dieselfde verhouding.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Middelpuntstelling:</strong> As M en N die middelpunte van ${bl('AB')} en ${bl('AC')} is, dan is ${or('MN ∥ BC')} en ${or('MN = ½BC')}. Dit is die Eweredigheidstelling met ${gr('verhouding = 1')}.` +
        `</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die verhouding korrek opstel</p>` +
        `<p style="margin:0;color:#1e3a8a;">Hou altyd dieselfde ${bl('sy')} aan elke kant van die verhouding: ${gr('AM/MB = AN/NC')}. Moenie die twee sye in een breuk meng nie. Kruisvermenigvuldig om ʼn onbekende lynstuklengte op te los.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In driehoek ABC is MN ∥ BC, met AM = 4 cm, MB = 6 cm en AN = 5 cm. Bepaal NC.',
          answer: `NC = ${or('7.5')} cm`,
          steps: [
            `Aangesien ${or('MN ∥ BC')}, geld volgens die Eweredigheidstelling: ${gr('AM/MB = AN/NC')}`,
            `Vervang die bekende waardes: ${gr('4/6 = 5/NC')}`,
            `Kruisvermenigvuldig: ${gr('4 × NC = 5 × 6 = 30')}`,
            `Los op: NC = ${or('30/4 = 7.5')} cm ✓`,
          ],
        },
        {
          question: 'Sipho het dieselfde driehoek, maar M en N is nou presies die middelpunte. As BC = 14 cm, bepaal MN met behulp van die Middelpuntstelling.',
          answer: `MN = ${or('7')} cm`,
          steps: [
            `M en N is die middelpunte van ${bl('AB')} en ${bl('AC')}, dus is die Middelpuntstelling van toepassing.`,
            `Volgens die Middelpuntstelling: ${or('MN ∥ BC')} en ${or('MN = ½BC')}`,
            `Vervang: ${or('MN = ½ × 14 = 7')} cm`,
            `<strong>Antwoord:</strong> MN = ${or('7')} cm ✓`,
          ],
        },
        {
          question: 'In driehoek PQR is ST ∥ QR, met PS = 6 cm, SQ = 9 cm en PT = 8 cm. Bepaal TR.',
          answer: `TR = ${or('12')} cm`,
          steps: [
            `Aangesien ${or('ST ∥ QR')}, geld volgens die Eweredigheidstelling: ${gr('PS/SQ = PT/TR')}`,
            `Vervang die bekende waardes: ${gr('6/9 = 8/TR')}`,
            `Kruisvermenigvuldig: ${gr('6 × TR = 8 × 9 = 72')}`,
            `Los op: TR = ${or('72/6 = 12')} cm ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the Proportionality Theorem and Midpoint Theorem with colour coded parallel lines and side ratios in a triangle" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — EQUIANGULAR TRIANGLES AND TRIANGLES WITH SIDES IN PROPORTION ARE SIMILAR
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'similarity-proof',
      title: 'Gelykhoekige Driehoeke en Driehoeke met Eweredige Sye is Gelykvormig',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Ons bewys formeel twee sleutelresultate: (1) gelykhoekige driehoeke (ooreenstemmende hoeke) is gelykvormig, en (2) driehoeke met al hulle ooreenstemmende sye in verhouding is gelykvormig.</p>` +
        `<p style="margin-bottom:16px;">Die bewys van die eerste resultaat gebruik die Eweredigheidstelling uit Afdeling 2 — deur ʼn lyn ${or('ewewydig')} aan een sy van ʼn ${bl('driehoek')} te trek, ontstaan ʼn ${or('kleiner driehoek')} wat dieselfde hoeke as die oorspronklike deel, en volgens die Eweredigheidstelling verdeel hierdie ewewydige lyn outomaties die sye eweredig, wat gelykvormigheid bewys.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike driehoek')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kleiner gelykvormige driehoek')}</span>` +
        `</div>` +

        // ── Proof outline ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Bewysuiteensetting — gelykhoekig impliseer gelykvormig</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Gegee ${bl('△ABC')}, trek ${or('DE ∥ BC')} binne die driehoek sodat ${or('△ADE')} dieselfde hoeke as die tweede driehoek het.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Ooreenstemmende hoeke: ${or('∠ADE = ∠ABC')} en ${or('∠AED = ∠ACB')} (ko-binnehoeke / F-hoeke by die ewewydige lyne), dus is ${or('△ADE')} gelykhoekig met ${bl('△ABC')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Volgens die Eweredigheidstelling (Afdeling 2) beteken ${or('DE ∥ BC')} dat die sye outomaties in verhouding is — wat bewys dat die HH-voorwaarde voldoende is vir gelykvormigheid.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Twee ekwivalente roetes na gelykvormigheid</p>` +
        `<p style="margin:0;color:#1e3a8a;">Jy kan gelykvormigheid bewys via ooreenstemmende ${bl('hoeke')} (HH) of via ooreenstemmende ${or('syverhoudings')} (SSS-eweredigheid) — albei roetes lei tot dieselfde gevolgtrekking. Gebruik watter een ook al die gegewe inligting makliker maak om te bevestig.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Verduidelik hoe die trek van DE ∥ BC binne driehoek ABC bewys dat hoek-hoek-ooreenstemming lei tot eweredige sye.',
          answer: `${or('DE ∥ BC')} skep ${or('△ADE')} wat gelykhoekig is met ${bl('△ABC')}, en volgens die Eweredigheidstelling is die sye outomaties in verhouding`,
          steps: [
            `Trek ${or('DE ∥ BC')} binne ${bl('△ABC')} sodat punt D op AB lê en punt E op AC lê.`,
            `Aangesien ${or('DE ∥ BC')}, is ooreenstemmende hoeke gelyk: ${or('∠ADE = ∠ABC')} en ${or('∠AED = ∠ACB')} (F-hoeke by ewewydige lyne).`,
            `Daarom is ${or('△ADE')} gelykhoekig met ${bl('△ABC')} — beide die ${bl('oorspronklike driehoek')} en die ${or('kleiner driehoek')} deel dieselfde drie hoeke.`,
            `Volgens die Eweredigheidstelling beteken ${or('DE ∥ BC')} ook dat die sye van ${bl('△ABC')} eweredig verdeel word, dus is die sye van die twee driehoeke in verhouding.`,
            `<strong>Gevolgtrekking:</strong> Die HH-voorwaarde is voldoende vir gelykvormigheid — ooreenstemmende ${bl('hoeke')} waarborg eweredige ${or('sye')}. ✓`,
          ],
        },
        {
          question: 'Lerato het twee driehoeke met sye 6, 8, 10 en 9, 12, 15. Bevestig dat hulle gelykvormig is met behulp van die eweredige-sye-metode.',
          answer: `Ja — die driehoeke is gelykvormig volgens ${or('SSS-eweredigheid')} (verhouding = 1.5)`,
          steps: [
            `Skryf die verhoudings van ooreenstemmende sye neer (pas kleinste by kleinste, grootste by grootste):<br>${or('9/6')}, &nbsp; ${or('12/8')}, &nbsp; ${or('15/10')}`,
            `Bereken elke verhouding:<br>${or('9/6 = 1.5')}, &nbsp; ${or('12/8 = 1.5')}, &nbsp; ${or('15/10 = 1.5')}`,
            `Al drie verhoudings is gelyk: ${or('1.5 = 1.5 = 1.5')} ✓`,
            `<strong>Gevolgtrekking:</strong> Aangesien al die ooreenstemmende ${or('syverhoudings')} gelyk is, is die driehoeke gelykvormig volgens die SSS-eweredigheidsvoorwaarde. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video proving that equiangular triangles are similar using the Proportionality Theorem and verifying similarity via the SSS proportionality condition" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — PROVING THE THEOREM OF PYTHAGORAS USING SIMILAR TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'pythagoras-similar-triangles',
      title: 'Bewys van die Stelling van Pythagoras met Behulp van Gelykvormige Driehoeke',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Ons bewys die <strong>Stelling van Pythagoras</strong> (${bl('a²')}+${bl('b²')}=${bl('c²')}) met behulp van ${gr('gelykvormige driehoeke')}, eerder as die algebraïese bewys wat in vorige grade gesien is. In ʼn ${bl('reghoekige driehoek ABC')} verdeel die trek van ʼn ${or('hoogtelyn')} vanaf die regte hoek na die skuinssy dit in twee ${gr('kleiner driehoeke')}, wat albei gelykvormig is aan die oorspronklike driehoek (en aan mekaar) volgens <strong>HH-gelykvormigheid</strong>, aangesien elke kleiner driehoek die regte hoek en een van die oorspronklike driehoek se skerp hoeke deel.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('reghoekige driehoek')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hoogtelyn')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gelykvormige kleiner driehoeke')}</span>` +
        `</div>` +

        // ── Proof outline ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Bewysuiteensetting — hoogtelyn skep twee gelykvormige driehoeke</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Begin met ${bl('reghoekige △ABC')} waar die regte hoek by C is en die skuinssy ${bl('AB')} is. Trek die ${or('hoogtelyn CD')} vanaf C loodreg op ${bl('AB')}, wat dit by D ontmoet.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Die ${or('hoogtelyn')} skep ${gr('△ACD')} en ${gr('△CBD')}. Elke kleiner driehoek bevat ʼn regte hoek (by D) en deel een skerp hoek met die ${bl('oorspronklike driehoek')}, dus stem al drie hoeke ooreen — wat aan HH-gelykvormigheid voldoen.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Aangesien die ${gr('kleiner driehoeke')} gelykvormig is aan die ${bl('oorspronklike driehoek')}, is hulle sye eweredig. Deur twee verhoudings op te stel en die resulterende vergelykings by mekaar te tel, kry ons ${bl('a²')}+${bl('b²')}=${bl('c²')}. ✓</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom HH-gelykvormigheid die sleutelstap is</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die regte hoek in elke ${gr('kleiner driehoek')} kom van die ${or('hoogtelyn')} wat loodreg op die skuinssy is. Die gedeelde skerp hoek is dieselfde hoek wat in die ${bl('oorspronklike driehoek')} voorkom. Twee ooreenstemmende hoeke (HH) waarborg dat die derde ook ooreenstem — sodat gelykvormigheid bewys word sonder om enige sye te meet.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Verduidelik waarom die twee kleiner driehoeke wat deur die hoogtelyn in ʼn reghoekige driehoek gevorm word, albei gelykvormig is aan die oorspronklike driehoek.',
          answer: `Elke ${gr('kleiner driehoek')} deel die regte hoek en een skerp hoek met die ${bl('oorspronklike driehoek')} — wat aan HH-gelykvormigheid voldoen`,
          steps: [
            `In ${bl('reghoekige △ABC')} (regte hoek by C), trek die ${or('hoogtelyn CD')} na die skuinssy AB, wat ${gr('△ACD')} en ${gr('△CBD')} skep.`,
            `Elke ${gr('kleiner driehoek')} bevat ʼn regte hoek by D (aangesien die ${or('hoogtelyn')} die skuinssy loodreg ontmoet).`,
            `${gr('△ACD')} deel ${bl('∠A')} met die oorspronklike ${bl('△ABC')}, en ${gr('△CBD')} deel ${bl('∠B')} met die oorspronklike ${bl('△ABC')}.`,
            `Elke ${gr('kleiner driehoek')} het dus dieselfde drie hoeke as die ${bl('oorspronklike driehoek')}: ʼn regte hoek, ${bl('∠A')} (of ${bl('∠B')}), en die oorblywende skerp hoek — wat aan HH-gelykvormigheid voldoen.`,
            `<strong>Gevolgtrekking:</strong> Albei ${gr('kleiner driehoeke')} is gelykvormig aan ${bl('△ABC')} (en aan mekaar) volgens die HH-voorwaarde. ✓`,
          ],
        },
        {
          question: 'Sipho gebruik die gelykvormige driehoeke wat deur die hoogtelyn gevorm word om eweredige syverhoudings op te stel, en kombineer dit dan om a²+b²=c² af te lei. Verduidelik die algemene logika van hierdie bewys.',
          answer: `Deur verhoudings op te stel vanuit die twee pare ${gr('gelykvormige driehoeke')} en die resulterende vergelykings by te tel, vereenvoudig dit tot ${bl('a²')}+${bl('b²')}=${bl('c²')}`,
          steps: [
            `Benoem die ${bl('oorspronklike driehoek')}: skuinssy ${bl('c = AB')}, en die twee bene ${bl('a = BC')} en ${bl('b = AC')}. Laat ${or('AD = p')} en ${or('DB = q')}, sodat ${bl('p + q = c')}.`,
            `Aangesien ${gr('△ACD')} ∼ ${bl('△ABC')} (HH), is hulle ooreenstemmende sye in verhouding: ${gr('b/c = p/b')}, wat ${gr('b² = cp')} gee.`,
            `Aangesien ${gr('△CBD')} ∼ ${bl('△ABC')} (HH), eweneens: ${gr('a/c = q/a')}, wat ${gr('a² = cq')} gee.`,
            `Tel die twee vergelykings by mekaar: ${gr('a² + b²')} = ${gr('cq + cp')} = ${gr('c(p + q)')}.`,
            `Vervang ${bl('p + q = c')}: ${gr('a² + b²')} = ${bl('c × c')} = ${bl('c²')}. ✓ Dit bewys die stelling deur slegs gelykvormigheid te gebruik, nie direkte oppervlakte-argumente nie.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video proving the Theorem of Pythagoras using similar triangles formed by the altitude to the hypotenuse, with colour coded right-angled triangle, altitude, and smaller similar triangles" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — SOLVING PROBLEMS USING SIMILARITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-similarity-problems',
      title: 'Probleemoplossing met Gelykvormigheid',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Ons pas al die gelykvormigheidsvoorwaardes en -stellings uit hierdie onderwerp toe om riders (meetkundige bewysprobleme) en numeriese probleme op te los, deur te identifiseer watter voorwaarde (${gr('HH')}, ${gr('SSS-eweredigheid')}, of die ${gr('Eweredigheidstelling')}) relevant is en dit te gebruik om ${re('onbekende lengtes')} te bepaal of verwantskappe te bewys.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bekende metings')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('onbekende meting')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gebruikte gelykvormigheidsvoorwaarde')}</span>` +
        `</div>` +

        // ── Strategy cards ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die regte voorwaarde kies</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">HH-voorwaarde</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Gebruik wanneer ${bl('twee pare hoeke')} bekend is of afgelei kan word. Skaleer omtrek lineêr volgens die syverhouding.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">SSS-eweredigheid</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Gebruik wanneer al ${bl('drie syverhoudings')} gekontroleer kan word. Oppervlakte skaleer volgens die <em>kwadraat</em> van die syverhouding.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Eweredigheidstelling</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Gebruik wanneer ʼn lyn ${gr('ewewydig aan een sy')} van ʼn driehoek is — dit verdeel die ander twee sye in dieselfde verhouding.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Omtrek- teenoor oppervlakteskalering</p>` +
        `<p style="margin:0;color:#1e3a8a;">As twee gelykvormige figure ʼn syverhouding van ${bl('m : n')} het, is hulle omtrekke in die verhouding ${bl('m : n')} (lineêr), maar hulle oppervlaktes is in die verhouding ${bl('m² : n²')} (kwadraat). Kontroleer altyd of jy lineêre of oppervlakteskalering nodig het voordat jy vervang.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Twee gelykvormige driehoeke het ʼn syverhouding van 3:5. As die kleiner driehoek ʼn omtrek van 18 cm het, bepaal die omtrek van die groter driehoek.',
          answer: `Groter omtrek = ${re('30')} cm`,
          steps: [
            `Die twee driehoeke is gelykvormig met syverhouding ${bl('3 : 5')}.`,
            `Omtrek skaleer lineêr — op dieselfde manier as sylengte — dus is die omtrekverhouding ook ${bl('3 : 5')}.`,
            `Stel die verhouding op: ${bl('18')} / ${re('P')} = ${bl('3')} / ${bl('5')}, waar ${re('P')} die onbekende groter omtrek is.`,
            `Kruisvermenigvuldig: ${re('P')} = ${bl('18')} × ${bl('5')} / ${bl('3')} = ${re('30')} cm. ✓`,
          ],
        },
        {
          question: 'Lerato het twee driehoeke wat deur HH bevestig gelykvormig is. Die kleiner driehoek het oppervlakte 12 cm² en ʼn syverhouding met die groter van 1:3. Bepaal die groter driehoek se oppervlakte.',
          answer: `Groter oppervlakte = ${re('108')} cm²`,
          steps: [
            `Die driehoeke is gelykvormig (${gr('HH-voorwaarde')}) met syverhouding ${bl('1 : 3')}.`,
            `Oppervlakte skaleer volgens die <em>kwadraat</em> van die syverhouding: oppervlakteverhouding = ${bl('1²')} : ${bl('3²')} = ${bl('1 : 9')}.`,
            `Stel die verhouding op: ${bl('12')} / ${re('A')} = ${bl('1')} / ${bl('9')}, waar ${re('A')} die onbekende groter oppervlakte is.`,
            `Kruisvermenigvuldig: ${re('A')} = ${bl('12')} × ${bl('9')} = ${re('108')} cm². ✓`,
          ],
        },
        {
          question: 'Driehoek ABC het DE ewewydig aan BC, met AD = 4 cm, DB = 6 cm, en AE = 5 cm. Bepaal EC, en stel dan watter voorwaarde jou metode regverdig.',
          answer: `EC = ${re('7.5')} cm, geregverdig deur die ${gr('Eweredigheidstelling')}`,
          steps: [
            `Aangesien ${gr('DE ∥ BC')}, is die ${gr('Eweredigheidstelling')} van toepassing: ${bl('AD')} / ${bl('DB')} = ${bl('AE')} / ${re('EC')}.`,
            `Vervang die bekende waardes: ${bl('4')} / ${bl('6')} = ${bl('5')} / ${re('EC')}.`,
            `Kruisvermenigvuldig: ${re('EC')} = ${bl('5')} × ${bl('6')} / ${bl('4')} = ${re('7.5')} cm.`,
            `<strong>Regverdiging:</strong> Dit is geldig volgens die ${gr('Eweredigheidstelling')} — aangesien ${gr('DE ∥ BC')}, verdeel die lyn wat ewewydig aan een sy van die driehoek is, die ander twee sye (AB en AC) in dieselfde verhouding. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video solving similarity problems — perimeter and area scaling, and applying the Proportionality Theorem — with colour coded known measurements, unknown measurements, and similarity conditions" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Twee driehoeke het ooreenstemmende hoeke 50°, 60°, 70°. Watter voorwaarde bewys dat hulle gelykvormig is?',
      answer: 'HH (hoek-hoek)',
      checkMode: 'auto',
      correctAnswer: 'HH (hoek-hoek)',
      correctAnswers: ['HH (hoek-hoek)', 'HH', 'hoek-hoek'],
      explanation: 'As twee pare hoeke ooreenstem, is die driehoeke gelykvormig volgens die HH- (hoek-hoek-) voorwaarde. Aangesien hoeke in ʼn driehoek optel tot 180°, stem die derde paar outomaties ook ooreen.',
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Twee driehoeke het sye 4, 6, 8 en 10, 15, 20. Bevestig gelykvormigheid met behulp van syverhoudings.',
      answer: 'verhoudings is 2.5, 2.5, 2.5 — gelyk, dus gelykvormig',
      checkMode: 'auto',
      correctAnswer: 'gelykvormig',
      correctAnswers: ['gelykvormig', 'ja, gelykvormig', 'ja'],
      explanation: '10/4 = 2.5, 15/6 = 2.5, 20/8 = 2.5. Al drie verhoudings is gelyk aan 2.5, wat bevestig dat die driehoeke gelykvormig is volgens SSS-eweredigheid.',
    },

    // ── Q3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê SSS-eweredigheid en SSS-kongruensie is dieselfde voorwaarde. Is hy korrek? Verduidelik.',
      answer: 'Nee — SSS-kongruensie vereis dat sye presies gelyk moet wees, terwyl SSS-eweredigheid (vir gelykvormigheid) slegs vereis dat sye in dieselfde verhouding is, wat verskillende groottes toelaat.',
      checkMode: 'self',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'In ʼn driehoek is MN ewewydig aan BC, met AM = 3 cm, MB = 5 cm, AN = 4 cm. Bepaal NC.',
      answer: '6.67 cm',
      checkMode: 'auto',
      correctAnswer: '6.67 cm',
      correctAnswers: ['6.67 cm', '6.67', '6⅔ cm', '20/3 cm', '20/3'],
      explanation: 'Volgens die Eweredigheidstelling: AM/MB = AN/NC. Dus 3/5 = 4/NC. Kruisvermenigvuldig: 3 × NC = 20. NC = 20/3 ≈ 6.67 cm.',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'M en N is die middelpunte van AB en AC in driehoek ABC, met BC = 18 cm. Bepaal MN met behulp van die Middelpuntstelling.',
      answer: '9 cm',
      checkMode: 'auto',
      correctAnswer: '9 cm',
      correctAnswers: ['9 cm', '9'],
      explanation: 'Volgens die Middelpuntstelling is MN ∥ BC en MN = ½BC = ½ × 18 = 9 cm.',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato het AM = 6 cm, MB = 9 cm in ʼn driehoek waar MN ewewydig aan BC is. As NC = 12 cm, bepaal AN.',
      answer: 'AM/MB = AN/NC. 6/9 = AN/12. AN = 12 × 6/9 = 8 cm.',
      checkMode: 'self',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Verduidelik waarom gelykhoekige driehoeke outomaties gelykvormig is.',
      answer: 'ooreenstemmende hoeke dwing ooreenstemmende sye om in verhouding te wees',
      checkMode: 'auto',
      correctAnswer: 'ooreenstemmende hoeke dwing ooreenstemmende sye om in verhouding te wees',
      correctAnswers: ['ooreenstemmende hoeke dwing ooreenstemmende sye om in verhouding te wees', 'hoeke dwing eweredige sye af', 'HH-voorwaarde'],
      explanation: 'Volgens die HH-voorwaarde en die Eweredigheidstelling: as twee driehoeke dieselfde hoeke het, is hulle sye outomaties in verhouding, wat hulle gelykvormig maak.',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo het twee gelykhoekige driehoeke. Verduidelik die verband tussen dit en die Eweredigheidstelling in die bewys van gelykvormigheid.',
      answer: 'Deur ʼn lyn ewewydig aan een sy te trek, ontstaan ʼn kleiner gelykhoekige driehoek; volgens die Eweredigheidstelling verdeel hierdie ewewydige lyn die sye eweredig, wat presies die bewys is dat gelykhoekige driehoeke eweredige sye het.',
      checkMode: 'self',
    },

    // ── Q9 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Twee driehoeke het sye 5, 12, 13 en 15, 36, 39. Bevestig dat hulle gelykvormig is.',
      answer: 'verhoudings is almal 3, wat gelykvormigheid bevestig',
      checkMode: 'auto',
      correctAnswer: 'gelykvormig',
      correctAnswers: ['gelykvormig', 'ja, gelykvormig', 'ja'],
      explanation: '15/5 = 3, 36/12 = 3, 39/13 = 3. Al drie verhoudings is gelyk aan 3, wat gelykvormigheid volgens SSS-eweredigheid bevestig.',
    },

    // ── Q10 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Reghoekige driehoek het ʼn hoogtelyn vanaf die regte hoek na die skuinssy, wat twee kleiner gelykvormige driehoeke skep. Verduidelik waarom hierdie twee kleiner driehoeke ook aan mekaar gelykvormig is.',
      answer: 'Albei kleiner driehoeke is gelykvormig aan die oorspronklike (groter) driehoek volgens HH; aangesien gelykvormigheid transitief is, moet twee driehoeke wat albei gelykvormig is aan dieselfde derde driehoek, ook aan mekaar gelykvormig wees.',
      checkMode: 'self',
    },

    // ── Q11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Twee gelykvormige driehoeke het ʼn syverhouding van 2:7. As die kleiner driehoek se omtrek 24 cm is, bepaal die groter driehoek se omtrek.',
      answer: '84 cm',
      checkMode: 'auto',
      correctAnswer: '84 cm',
      correctAnswers: ['84 cm', '84'],
      explanation: 'Omtrek skaleer lineêr volgens die syverhouding. Groter omtrek = 24 × 7/2 = 84 cm.',
    },

    // ── Q12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Twee gelykvormige driehoeke het oppervlakteverhouding 4:25. Bepaal hulle syverhouding.',
      answer: 'Syverhouding = √4 : √25 = 2 : 5.',
      checkMode: 'self',
    },

    // ── Q13 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Driehoek het DE ewewydig aan BC, AD = 8 cm, DB = 4 cm, AE = 10 cm. Bepaal EC.',
      answer: '5 cm',
      checkMode: 'auto',
      correctAnswer: '5 cm',
      correctAnswers: ['5 cm', '5'],
      explanation: 'Volgens die Eweredigheidstelling: AD/DB = AE/EC. Dus 8/4 = 10/EC. 2 = 10/EC. EC = 5 cm.',
    },

    // ── Q14 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle het twee driehoeke wat volgens HH gelykvormig is, met ʼn syverhouding van 5:8. As die kleiner driehoek se oppervlakte 50 cm² is, bepaal die groter driehoek se oppervlakte.',
      answer: 'Oppervlakteverhouding = 8²/5² = 64/25. Groter oppervlakte = 50 × 64/25 = 128 cm².',
      checkMode: 'self',
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Driehoek het middelpunte M en N op sye AB en AC. As AM = 5 cm en BC = 20 cm, bepaal AB en MN.',
      answer: 'Aangesien M die middelpunt is, is AB = 2 × AM = 10 cm. Volgens die Middelpuntstelling is MN = ½BC = 10 cm.',
      checkMode: 'self',
    },

    // ── Q16 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho bewys dat twee driehoeke gelykvormig is deur HH te gebruik, en gebruik dit dan om ʼn onbekende sy via eweredige verhoudings te bepaal. Verduidelik die tweestap-logika wat hy gebruik het.',
      answer: 'Eerstens het hy gelykvormigheid vasgestel deur ooreenstemmende hoeke (HH-voorwaarde) te gebruik. Tweedens, aangesien gelykvormige driehoeke eweredige sye het, het hy ʼn verhoudingsvergelyking met bekende en onbekende sye opgestel om die ontbrekende lengte op te los.',
      checkMode: 'self',
    },

    // ── Q17 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Twee driehoeke het sye in die verhouding 3:4. Die kleiner driehoek het sye 9, 12, 15. Bepaal die sye van die groter driehoek.',
      answer: '12, 16, 20',
      checkMode: 'auto',
      correctAnswer: '12, 16, 20',
      correctAnswers: ['12, 16, 20', '12,16,20', '12 16 20'],
      explanation: 'Skaalfaktor = 4/3. Groter sye: 9 × 4/3 = 12, 12 × 4/3 = 16, 15 × 4/3 = 20.',
    },

    // ── Q18 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato het ʼn reghoekige driehoek met bene 6 cm en 8 cm. Verduidelik, met behulp van die gelykvormige-driehoeke-bewysmetode (nie direkte Pythagoras nie), hoe die hoogtelyn na die skuinssy gebruik sou word om die skuinssylengte te bevestig.',
      answer: 'Die hoogtelyn skep twee kleiner driehoeke wat gelykvormig is aan die oorspronklike; deur eweredige syverhoudings vanuit hierdie gelykvormige driehoeke op te stel en algebraïes te kombineer, kry ʼn mens dieselfde resultaat as a² + b² = c², wat bevestig dat die skuinssy = 10 cm is sonder om die Pythagoras-formule direk toe te pas.',
      checkMode: 'self',
    },

    // ── Q19 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Driehoek het DE ewewydig aan BC, wat AB in die verhouding 2:3 verdeel (AD:DB). As AC = 15 cm, bepaal AE.',
      answer: 'AD/DB = AE/EC, dus AE:EC = 2:3 ook. AE = 15 × 2/5 = 6 cm.',
      checkMode: 'self',
    },

    // ── Q20 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê alle gelykvormige driehoeke is ook kongruent as hulle ooreenstemmende hoeke ÉN een paar ooreenstemmende sye gelyk is. Is hy korrek? Verduidelik.',
      answer: 'Ja — as een paar ooreenstemmende sye tussen gelykvormige driehoeke gelyk is, dwing dit die skaalfaktor om 1 te wees, wat beteken al die sye moet gelyk wees, wat die driehoeke kongruent maak (nie net gelykvormig nie).',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het Euklidiese meetkunde bemeester.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer, werk weer deur die gids.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het Euklidiese meetkunde bemeester.' },
    { minScore: 15, message: 'Goeie werk!' },
    { minScore: 10, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk weer deur die gids.' },
  ],
}
