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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-3):   HH / SSS-voorwaardes vir gelykvormige veelhoeke — abstrak, geen diagram
    // Blok 2 (4-6):   Eweredigheidstelling                             — BENODIG DIAGRAM (4,5,6)
    // Blok 3 (7-9):   Middelpuntstelling                                — BENODIG DIAGRAM (7,8,9)
    // Blok 4 (10-12): Gelykhoekig / SSS-eweredigheid gelykvormigheid    — BENODIG DIAGRAM (11)
    // Blok 5 (13-15): Pythagoras via gelykvormige driehoeke (hoogtelyn) — BENODIG DIAGRAM (13,14,15)
    // Blok 6 (16-19): Gemengde toepassing / hoogtepunt                  — BENODIG DIAGRAM (16,19)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — HH / SSS-voorwaardes (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Driehoek ABC het hoeke 55°, 65°, 60°. Driehoek DEF het hoeke 55°, 60°, 65° maar verskillende sylengtes. Is die twee driehoeke gelykvormig?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'ja, gelykvormig', 'gelykvormig'], answer: 'ja', explanation: 'Albei driehoeke het dieselfde drie hoeke (55°, 60°, 65°) — die volgorde waarin hulle gelys word maak nie saak nie. Aangesien al drie pare hoeke ooreenstem, is die driehoeke gelykvormig volgens die HH-voorwaarde.' },
        { difficulty: 'Easy', question: 'Driehoek ABC het sye 4 cm, 6 cm, 8 cm. Driehoek DEF het sye 8 cm, 12 cm, 16 cm. Bevestig gelykvormigheid met behulp van syverhoudings.', checkMode: 'auto', correctAnswer: 'gelykvormig', correctAnswers: ['gelykvormig', 'ja, gelykvormig', 'ja'], answer: 'gelykvormig', explanation: 'DE/AB = 8/4 = 2, EF/BC = 12/6 = 2, FD/CA = 16/8 = 2. Al drie verhoudings is gelyk aan 2, dus is die driehoeke gelykvormig volgens SSS-eweredigheid.' },
        { difficulty: 'Medium', question: 'Driehoek ABC het sye 6 cm, 9 cm, 12 cm. Driehoek DEF het sye 8 cm, 12 cm, 16 cm. Bevestig of die driehoeke gelykvormig is met behulp van syverhoudings.', answer: 'DE/AB = 8/6 = 4/3, EF/BC = 12/9 = 4/3, FD/CA = 16/12 = 4/3. Al drie verhoudings is gelyk aan 4/3, dus is die driehoeke gelykvormig volgens SSS-eweredigheid.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Zanele sê as twee driehoeke albei ʼn 40°-hoek het, moet hulle gelykvormig wees. Is sy korrek? Verduidelik met behulp van ʼn teenvoorbeeld.', answer: 'Nee — ʼn driehoek met hoeke 40°, 40°, 100° en ʼn driehoek met hoeke 40°, 70°, 70° bevat albei ʼn 40°-hoek, maar hulle ander twee hoeke is heeltemal verskillend, dus is die driehoeke nie gelykvormig nie. ʼn Enkele ooreenstemmende hoek is nie genoeg nie; die HH-voorwaarde vereis twee pare ooreenstemmende hoeke.', checkMode: 'self' },

        // Blok 2 — Eweredigheidstelling (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In driehoek ABC is MN ewewydig aan BC, met M op AB en N op AC. AM = 3 cm, MB = 6 cm en AN = 4 cm. Bepaal NC.', checkMode: 'auto', correctAnswer: '8cm', correctAnswers: ['8cm', '8 cm', '8'], answer: '8 cm', explanation: 'Aangesien MN ∥ BC, geld volgens die Eweredigheidstelling: AM/MB = AN/NC. Dus 3/6 = 4/NC. Kruisvermenigvuldig: 3 × NC = 24. NC = 8 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="111.7" y1="88.7" x2="188.3" y2="88.7" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,92.9 L 142.0,88.7 L 135.0,84.5" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,92.9 L 158.0,88.7 L 151.0,84.5" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="95.7" y="91.7" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="204.3" y="91.7" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="106.8" y="58.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3 cm</text><text x="49.3" y="149.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="193.2" y="58.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="244.7" y="149.3" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'In driehoek PQR is ST ewewydig aan QR, met S op PQ en T op PR. PS = 5 cm, SQ = 10 cm en PT = 7 cm. Bepaal TR.', checkMode: 'auto', correctAnswer: '14cm', correctAnswers: ['14cm', '14 cm', '14'], answer: '14 cm', explanation: 'Aangesien ST ∥ QR, geld volgens die Eweredigheidstelling: PS/SQ = PT/TR. Dus 5/10 = 7/TR. Kruisvermenigvuldig: 5 × TR = 70. TR = 14 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="111.7" y1="88.7" x2="188.3" y2="88.7" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,92.9 L 142.0,88.7 L 135.0,84.5" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,92.9 L 158.0,88.7 L 151.0,84.5" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">P</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">Q</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">R</text><text x="95.7" y="91.7" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">S</text><text x="204.3" y="91.7" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">T</text><text x="106.8" y="58.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="49.3" y="149.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="193.2" y="58.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="244.7" y="149.3" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Hard', question: 'In driehoek ABC is DE ewewydig aan BC, met D op AB en E op AC. AD = 6 cm, DB = 9 cm en AE = 8 cm. Bepaal EC, en gebruik dit dan om die verhouding AE:AC te bepaal.', answer: 'Volgens die Eweredigheidstelling: AD/DB = AE/EC. Dus 6/9 = 8/EC. Kruisvermenigvuldig: 6 × EC = 72, dus EC = 12 cm. AC = AE + EC = 8 + 12 = 20 cm. Verhouding AE:AC = 8:20 = 2:5.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="104.0" y1="100.8" x2="196.0" y2="100.8" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,105.0 L 142.0,100.8 L 135.0,96.6" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,105.0 L 158.0,100.8 L 151.0,96.6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="88" y="103.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="212" y="103.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="103" y="64.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="45.5" y="155.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="197" y="64.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="248.5" y="155.4" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },

        // Blok 3 — Middelpuntstelling (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'M en N is die middelpunte van AB en AC in driehoek ABC, met BC = 22 cm. Bepaal MN met behulp van die Middelpuntstelling.', checkMode: 'auto', correctAnswer: '11cm', correctAnswers: ['11cm', '11 cm', '11'], answer: '11 cm', explanation: 'Volgens die Middelpuntstelling is MN ∥ BC en MN = ½BC = ½ × 22 = 11 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="150" y="235" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">BC = 22 cm</text><text x="150" y="112" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'M is die middelpunt van AB in driehoek ABC, met AM = 7 cm. Bepaal die volle lengte van AB.', checkMode: 'auto', correctAnswer: '14cm', correctAnswers: ['14cm', '14 cm', '14'], answer: '14 cm', explanation: 'Aangesien M die middelpunt van AB is, is AM = MB, dus AB = 2 × AM = 2 × 7 = 14 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="96" y="72.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="42" y="167.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Hard', question: 'M en N is die middelpunte van AB en AC in driehoek ABC, en MN = 9 cm. Bepaal BC, en bepaal dan die omtrek van driehoek AMN gegee dat AM = 8 cm en AN = 10 cm.', answer: 'Volgens die Middelpuntstelling is MN = ½BC, dus BC = 2 × MN = 2 × 9 = 18 cm. Die omtrek van driehoek AMN = AM + MN + AN = 8 + 9 + 10 = 27 cm.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="150" y="112" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="150" y="235" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },

        // Blok 4 — Gelykhoekig / SSS-eweredigheid (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'Driehoek ABC het hoeke 48°, 62°, 70°. Driehoek XYZ het hoeke 48°, 70°, 62° maar verskillende sylengtes. Verduidelik waarom die driehoeke gelykhoekig en dus gelykvormig is.', answer: 'Albei driehoeke bevat dieselfde drie hoeke (48°, 62°, 70°), net in ʼn ander volgorde gelys. Aangesien al die ooreenstemmende hoeke ooreenstem, is die driehoeke gelykhoekig, en volgens die HH-voorwaarde is gelykhoekige driehoeke altyd gelykvormig — verskillende sylengtes affekteer dit nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Driehoek ABC het sye 7 cm, 24 cm, 25 cm. Driehoek DEF het sye 21 cm, 72 cm, 75 cm. Bevestig dat hierdie driehoeke gelykvormig is met behulp van syverhoudings.', checkMode: 'auto', correctAnswer: 'gelykvormig', correctAnswers: ['gelykvormig', 'ja, gelykvormig', 'ja'], answer: 'gelykvormig', explanation: 'DE/AB = 21/7 = 3, EF/BC = 72/24 = 3, FD/CA = 75/25 = 3. Al drie verhoudings is gelyk aan 3, dus is die driehoeke gelykvormig volgens SSS-eweredigheid.' },
        { difficulty: 'Hard', question: 'In driehoek ABC word DE ewewydig aan BC getrek, met D op AB en E op AC. Verduidelik hoe hierdie konstruksie bewys dat △ADE gelykhoekig is met △ABC, en stel watter stelling bevestig dat hulle sye ook in verhouding is.', answer: 'Aangesien DE ∥ BC, is ooreenstemmende hoeke gelyk: ∠ADE = ∠ABC en ∠AED = ∠ACB (hulle vorm F-hoekpare by die ewewydige lyne), en albei driehoeke deel ∠A. Dus het △ADE dieselfde drie hoeke as △ABC, wat dit gelykhoekig met △ABC maak. Die Eweredigheidstelling bevestig dan dat, aangesien DE ∥ BC, die sye AD/AB en AE/AC (en DE/BC) outomaties in dieselfde verhouding is — wat bewys dat die HH-voorwaarde voldoende is vir gelykvormigheid.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="84.0" y1="129.5" x2="216.0" y2="129.5" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,219.2 L 142.0,215.0 L 135.0,210.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,219.2 L 158.0,215.0 L 151.0,210.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,133.7 L 142.0,129.5 L 135.0,125.3" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,133.7 L 158.0,129.5 L 151.0,125.3" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 46,215 A 16 16 0 0 1 43,206" fill="none" stroke="#16a34a" stroke-width="1.8"/><path d="M 96,136.5 A 13 13 0 0 1 93.5,123" fill="none" stroke="#16a34a" stroke-width="1.8"/><path d="M 254,215 A 16 16 0 0 0 257,206" fill="none" stroke="#7c3aed" stroke-width="1.8"/><path d="M 250,215 A 20 20 0 0 0 254,204" fill="none" stroke="#7c3aed" stroke-width="1.8"/><path d="M 204,136.5 A 13 13 0 0 0 206.5,123" fill="none" stroke="#7c3aed" stroke-width="1.8"/><path d="M 200,138.5 A 17 17 0 0 0 203.5,121" fill="none" stroke="#7c3aed" stroke-width="1.8"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="68" y="132.5" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="232" y="132.5" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">E</text></svg>'  },

        // Blok 5 — Pythagoras via gelykvormige driehoeke (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'ʼn Reghoekige driehoek het bene van 9 cm en 12 cm. Gebruik die Stelling van Pythagoras om die lengte van die skuinssy te bepaal.', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15 cm', '15'], answer: '15 cm', explanation: 'Volgens die Stelling van Pythagoras: c² = 9² + 12² = 81 + 144 = 225. c = √225 = 15 cm.', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><polygon points="30,210 30,40 250,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="196" width="14" height="14" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="16" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="44" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="264" y="214" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="12" y="125" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="140" y="228" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="154" y="117" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'In reghoekige driehoek ABC (regte hoek by C, skuinssy AB = 25 cm) word die hoogtelyn CD vanaf C na AB getrek, wat AB verdeel in AD = 16 cm en DB = 9 cm. Gebruik die gelykvormige driehoeke △ACD ∼ △ABC om te wys dat AC² = AB × AD, en bepaal dan AC.', answer: 'Aangesien △ACD ∼ △ABC (HH, deel ∠A en het elkeen ʼn regte hoek), is ooreenstemmende sye in verhouding: AC/AB = AD/AC, dus AC² = AB × AD = 25 × 16 = 400. AC = √400 = 20 cm.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="30,205 270,205 183.6,89.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="183.6" y1="89.8" x2="183.6" y2="205" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><rect x="176.6" y="198" width="7" height="7" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="18" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="282" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="183.6" y="79.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="183.6" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="106.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="226.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="86.8" y="147.4" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Hard', question: 'In reghoekige driehoek ABC (regte hoek by C, skuinssy AB = 25 cm) verdeel die hoogtelyn CD die skuinssy AB in AD = 16 cm en DB = 9 cm. Gegee AC = 20 cm en BC = 15 cm, bevestig die Stelling van Pythagoras (AC² + BC² = AB²) met behulp van hierdie waardes, en bevestig sodoende die gelykvormige-driehoeke-bewys.', answer: 'AC² + BC² = 20² + 15² = 400 + 225 = 625. AB² = 25² = 625. Aangesien 625 = 625, word die Stelling van Pythagoras bevestig. Dit stem ooreen met die gelykvormige-driehoeke-bewys: AC² = AB × AD = 25 × 16 = 400 en BC² = AB × DB = 25 × 9 = 225, en deur dit bymekaar te tel kry ons AC² + BC² = AB × (AD + DB) = AB × AB = AB².', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="30,205 270,205 183.6,89.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="183.6" y1="89.8" x2="183.6" y2="205" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><rect x="176.6" y="198" width="7" height="7" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="18" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="282" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="183.6" y="79.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="183.6" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="106.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="226.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="86.8" y="147.4" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="246.8" y="147.4" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text></svg>'  },

        // Blok 6 — Gemengde toepassing / hoogtepunt (Easy/Medium/Hard/Hard)
        { difficulty: 'Easy', question: 'Driehoek ABC is gelykvormig aan driehoek DEF, met AB wat ooreenstem met DE en BC wat ooreenstem met EF. AB = 7 cm, DE = 21 cm (skaalfaktor 3), en BC = 7 cm. Bepaal EF.', checkMode: 'auto', correctAnswer: '21cm', correctAnswers: ['21cm', '21 cm', '21'], answer: '21 cm', explanation: 'Die skaalfaktor van △ABC na △DEF is DE ÷ AB = 21 ÷ 7 = 3. EF = BC × 3 = 7 × 3 = 21 cm.', diagramSvg: '<svg viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg"><polygon points="65,45 25,165 110,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="65" y="35" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="13" y="179" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="122" y="179" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><line x1="48.8" y1="106.3" x2="41.2" y2="103.7" stroke="#16a34a" stroke-width="2"/><line x1="65.0" y1="161.0" x2="65.0" y2="169.0" stroke="#7c3aed" stroke-width="2"/><line x1="70.0" y1="161.0" x2="70.0" y2="169.0" stroke="#7c3aed" stroke-width="2"/><text x="25.0" y="105.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="67.5" y="183.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><polygon points="235,20 183.0,176.0 293.5,176.0" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="235" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="171.0" y="190.0" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="305.5" y="190.0" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">F</text><line x1="212.8" y1="99.3" x2="205.2" y2="96.7" stroke="#16a34a" stroke-width="2"/><line x1="235.8" y1="172.0" x2="235.8" y2="180.0" stroke="#7c3aed" stroke-width="2"/><line x1="240.8" y1="172.0" x2="240.8" y2="180.0" stroke="#7c3aed" stroke-width="2"/><text x="187.0" y="98.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">21 cm</text><text x="238.3" y="194.0" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'Twee gelykvormige driehoeke het ooreenstemmende sye in die verhouding 5:8. As die kleiner driehoek ʼn omtrek van 20 cm het, bepaal die omtrek van die groter driehoek.', checkMode: 'auto', correctAnswer: '32cm', correctAnswers: ['32cm', '32 cm', '32'], answer: '32 cm', explanation: 'Omtrek skaleer lineêr volgens die syverhouding. Groter omtrek = 20 × (8/5) = 32 cm.' },
        { difficulty: 'Hard', question: 'In driehoek ABC is DE ewewydig aan BC, met D op AB en E op AC, wat AB in die verhouding AD:DB = 1:2 verdeel. Gegee AC = 18 cm, bepaal AE en EC.', answer: 'Volgens die Eweredigheidstelling is AD/DB = AE/EC, dus AE:EC = 1:2 ook. Dit beteken AE is 1/3 van AC en EC is 2/3 van AC. AE = 18 × 1/3 = 6 cm. EC = 18 × 2/3 = 12 cm.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="111.7" y1="88.7" x2="188.3" y2="88.7" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,92.9 L 142.0,88.7 L 135.0,84.5" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,92.9 L 158.0,88.7 L 151.0,84.5" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="95.7" y="91.7" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="204.3" y="91.7" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="108.8" y="58.3" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">1</text><text x="51.3" y="149.3" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">2</text><text x="233.5" y="119" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text></svg>'  },
        { difficulty: 'Hard', question: 'Karabo het bewys dat twee driehoeke gelykvormig is deur die HH-voorwaarde te gebruik, en het toe die Eweredigheidstelling gebruik om ʼn onbekende sy binne een van die driehoeke te bepaal. Verduidelik hoe hierdie twee resultate as afsonderlike maar verwante gereedskapstukke saamwerk.', answer: 'Die HH-voorwaarde en die Eweredigheidstelling handel oor verskillende situasies: die HH-voorwaarde bewys dat hele driehoeke gelykvormig is deur hulle hoeke te vergelyk, terwyl die Eweredigheidstelling binne ʼn enkele driehoek geld wanneer ʼn lyn ewewydig aan een sy getrek word, wat wys dat daardie lyn die ander twee sye eweredig verdeel. Karabo het eers die HH-voorwaarde gebruik om vas te stel dat twee afsonderlike driehoeke dieselfde vorm deel, en het toe afsonderlik die Eweredigheidstelling op ʼn ewewydige lyn binne een driehoek toegepas om ʼn onbekende lynstuklengte op te los — albei gereedskapstukke steun op dieselfde onderliggende idee van eweredige sye, maar word in verskillende meetkundige kontekste toegepas.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het gelykvormige veelhoeke, die Eweredigheidstelling, en die gelykvormige-driehoeke-bewys van Pythagoras bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor die Eweredigheidstelling of die Middelpuntstelling weer deur, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor gelykvormigheidsvoorwaardes en die hoogtelyn-gebaseerde Pythagoras-bewys weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — HH / SSS-voorwaardes (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Driehoek ABC het hoeke 52°, 68°, 60°. Driehoek DEF het hoeke 60°, 52°, 68° maar verskillende sylengtes. Is die twee driehoeke gelykvormig?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'ja, gelykvormig', 'gelykvormig'], answer: 'ja', explanation: 'Albei driehoeke het dieselfde drie hoeke (52°, 60°, 68°) — die volgorde waarin hulle gelys word maak nie saak nie. Aangesien al drie pare hoeke ooreenstem, is die driehoeke gelykvormig volgens die HH-voorwaarde.' },
        { difficulty: 'Easy', question: 'Driehoek ABC het sye 5 cm, 7 cm, 9 cm. Driehoek DEF het sye 15 cm, 21 cm, 27 cm. Bevestig gelykvormigheid met behulp van syverhoudings.', checkMode: 'auto', correctAnswer: 'gelykvormig', correctAnswers: ['gelykvormig', 'ja, gelykvormig', 'ja'], answer: 'gelykvormig', explanation: 'DE/AB = 15/5 = 3, EF/BC = 21/7 = 3, FD/CA = 27/9 = 3. Al drie verhoudings is gelyk aan 3, dus is die driehoeke gelykvormig volgens SSS-eweredigheid.' },
        { difficulty: 'Medium', question: 'Driehoek ABC het sye 8 cm, 10 cm, 14 cm. Driehoek DEF het sye 12 cm, 15 cm, 21 cm. Bevestig of die driehoeke gelykvormig is met behulp van syverhoudings.', answer: 'DE/AB = 12/8 = 1,5, EF/BC = 15/10 = 1,5, FD/CA = 21/14 = 1,5. Al drie verhoudings is gelyk aan 1,5, dus is die driehoeke gelykvormig volgens SSS-eweredigheid.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Tumi sê as twee driehoeke albei ʼn 90°-hoek het, moet hulle gelykvormig wees. Is hy korrek? Verduidelik met behulp van ʼn teenvoorbeeld.', answer: 'Nee — ʼn reghoekige driehoek met hoeke 90°, 30°, 60° en ʼn reghoekige driehoek met hoeke 90°, 45°, 45° bevat albei ʼn 90°-hoek, maar hulle ander twee hoeke is heeltemal verskillend, dus is die driehoeke nie gelykvormig nie. ʼn Enkele ooreenstemmende hoek is nie genoeg nie; die HH-voorwaarde vereis twee pare ooreenstemmende hoeke.', checkMode: 'self' },

        // Blok 2 — Eweredigheidstelling (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In driehoek ABC is MN ewewydig aan BC, met M op AB en N op AC. AM = 5 cm, MB = 8 cm en AN = 6 cm. Bepaal NC.', checkMode: 'auto', correctAnswer: '9.6cm', correctAnswers: ['9.6cm', '9.6 cm', '9,6 cm', '9.6', '9,6'], answer: '9,6 cm', explanation: 'Aangesien MN ∥ BC, geld volgens die Eweredigheidstelling: AM/MB = AN/NC. Dus 5/8 = 6/NC. Kruisvermenigvuldig: 5 × NC = 48. NC = 9,6 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="105.8" y1="98.0" x2="194.2" y2="98.0" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,102.2 L 142.0,98.0 L 135.0,93.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,102.2 L 158.0,98.0 L 151.0,93.8" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="89.8" y="101" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="210.2" y="101" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="103.9" y="63" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="46.4" y="154" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="196.1" y="63" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="247.6" y="154" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'In driehoek PQR is ST ewewydig aan QR, met S op PQ en T op PR. PS = 4 cm, SQ = 9 cm en PT = 6 cm. Bepaal TR.', checkMode: 'auto', correctAnswer: '13.5cm', correctAnswers: ['13.5cm', '13.5 cm', '13,5 cm', '13.5', '13,5'], answer: '13,5 cm', explanation: 'Aangesien ST ∥ QR, geld volgens die Eweredigheidstelling: PS/SQ = PT/TR. Dus 4/9 = 6/TR. Kruisvermenigvuldig: 4 × TR = 54. TR = 13,5 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="114.6" y1="84.0" x2="185.4" y2="84.0" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,88.2 L 142.0,84.0 L 135.0,79.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,88.2 L 158.0,84.0 L 151.0,79.8" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">P</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">Q</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">R</text><text x="98.6" y="87" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">S</text><text x="201.4" y="87" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">T</text><text x="108.3" y="56" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="50.8" y="147" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="191.7" y="56" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="243.2" y="147" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Hard', question: 'In driehoek ABC is DE ewewydig aan BC, met D op AB en E op AC. AD = 8 cm, DB = 10 cm en AE = 12 cm. Bepaal EC, en gebruik dit dan om die verhouding AE:AC te bepaal.', answer: 'Volgens die Eweredigheidstelling: AD/DB = AE/EC. Dus 8/10 = 12/EC. Kruisvermenigvuldig: 8 × EC = 120, dus EC = 15 cm. AC = AE + EC = 12 + 15 = 27 cm. Verhouding AE:AC = 12:27 = 4:9.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="98.9" y1="108.9" x2="201.1" y2="108.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,113.1 L 142.0,108.9 L 135.0,104.7" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,113.1 L 158.0,108.9 L 151.0,104.7" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="82.9" y="111.9" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="217.1" y="111.9" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="100.4" y="68.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="42.9" y="159.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="199.6" y="68.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="251.1" y="159.4" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },

        // Blok 3 — Middelpuntstelling (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'M en N is die middelpunte van AB en AC in driehoek ABC, met BC = 26 cm. Bepaal MN met behulp van die Middelpuntstelling.', checkMode: 'auto', correctAnswer: '13cm', correctAnswers: ['13cm', '13 cm', '13'], answer: '13 cm', explanation: 'Volgens die Middelpuntstelling is MN ∥ BC en MN = ½BC = ½ × 26 = 13 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="150" y="235" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">BC = 26 cm</text><text x="150" y="112" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'M is die middelpunt van AB in driehoek ABC, met AM = 9 cm. Bepaal die volle lengte van AB.', checkMode: 'auto', correctAnswer: '18cm', correctAnswers: ['18cm', '18 cm', '18'], answer: '18 cm', explanation: 'Aangesien M die middelpunt van AB is, is AM = MB, dus AB = 2 × AM = 2 × 9 = 18 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="96" y="72.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="42" y="167.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Hard', question: 'M en N is die middelpunte van AB en AC in driehoek ABC, en MN = 12 cm. Bepaal BC, en bepaal dan die omtrek van driehoek AMN gegee dat AM = 9 cm en AN = 11 cm.', answer: 'Volgens die Middelpuntstelling is MN = ½BC, dus BC = 2 × MN = 2 × 12 = 24 cm. Die omtrek van driehoek AMN = AM + MN + AN = 9 + 12 + 11 = 32 cm.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="150" y="112" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="150" y="235" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },

        // Blok 4 — Gelykhoekig / SSS-eweredigheid (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'Driehoek ABC het hoeke 42°, 66°, 72°. Driehoek XYZ het hoeke 72°, 42°, 66° maar verskillende sylengtes. Verduidelik waarom die driehoeke gelykhoekig en dus gelykvormig is.', answer: 'Albei driehoeke bevat dieselfde drie hoeke (42°, 66°, 72°), net in ʼn ander volgorde gelys. Aangesien al die ooreenstemmende hoeke ooreenstem, is die driehoeke gelykhoekig, en volgens die HH-voorwaarde is gelykhoekige driehoeke altyd gelykvormig — verskillende sylengtes affekteer dit nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Driehoek ABC het sye 6 cm, 8 cm, 10 cm. Driehoek DEF het sye 15 cm, 20 cm, 25 cm. Bevestig dat hierdie driehoeke gelykvormig is met behulp van syverhoudings.', checkMode: 'auto', correctAnswer: 'gelykvormig', correctAnswers: ['gelykvormig', 'ja, gelykvormig', 'ja'], answer: 'gelykvormig', explanation: 'DE/AB = 15/6 = 2,5, EF/BC = 20/8 = 2,5, FD/CA = 25/10 = 2,5. Al drie verhoudings is gelyk aan 2,5, dus is die driehoeke gelykvormig volgens SSS-eweredigheid.' },
        { difficulty: 'Hard', question: 'In driehoek PQR word ST ewewydig aan QR getrek, met S op PQ en T op PR. Verduidelik hoe hierdie konstruksie bewys dat △PST gelykhoekig is met △PQR, en stel watter stelling bevestig dat hulle sye ook in verhouding is.', answer: 'Aangesien ST ∥ QR, is ooreenstemmende hoeke gelyk: ∠PST = ∠PQR en ∠PTS = ∠PRQ (hulle vorm F-hoekpare by die ewewydige lyne), en albei driehoeke deel ∠P. Dus het △PST dieselfde drie hoeke as △PQR, wat dit gelykhoekig met △PQR maak. Die Eweredigheidstelling bevestig dan dat, aangesien ST ∥ QR, die sye PS/PQ en PT/PR (en ST/QR) outomaties in dieselfde verhouding is — wat bewys dat die HH-voorwaarde voldoende is vir gelykvormigheid.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="84.0" y1="129.5" x2="216.0" y2="129.5" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,219.2 L 142.0,215.0 L 135.0,210.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,219.2 L 158.0,215.0 L 151.0,210.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,133.7 L 142.0,129.5 L 135.0,125.3" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,133.7 L 158.0,129.5 L 151.0,125.3" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 46,215 A 16 16 0 0 1 43,206" fill="none" stroke="#16a34a" stroke-width="1.8"/><path d="M 96,136.5 A 13 13 0 0 1 93.5,123" fill="none" stroke="#16a34a" stroke-width="1.8"/><path d="M 254,215 A 16 16 0 0 0 257,206" fill="none" stroke="#7c3aed" stroke-width="1.8"/><path d="M 250,215 A 20 20 0 0 0 254,204" fill="none" stroke="#7c3aed" stroke-width="1.8"/><path d="M 204,136.5 A 13 13 0 0 0 206.5,123" fill="none" stroke="#7c3aed" stroke-width="1.8"/><path d="M 200,138.5 A 17 17 0 0 0 203.5,121" fill="none" stroke="#7c3aed" stroke-width="1.8"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">P</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">Q</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">R</text><text x="68" y="132.5" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">S</text><text x="232" y="132.5" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">T</text></svg>'  },

        // Blok 5 — Pythagoras via gelykvormige driehoeke (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'ʼn Reghoekige driehoek het bene van 5 cm en 12 cm. Gebruik die Stelling van Pythagoras om die lengte van die skuinssy te bepaal.', checkMode: 'auto', correctAnswer: '13cm', correctAnswers: ['13cm', '13 cm', '13'], answer: '13 cm', explanation: 'Volgens die Stelling van Pythagoras: c² = 5² + 12² = 25 + 144 = 169. c = √169 = 13 cm.', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><polygon points="30,210 30,40 250,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="196" width="14" height="14" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="16" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="44" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="264" y="214" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="12" y="125" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="140" y="228" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="154" y="117" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'In reghoekige driehoek ABC (regte hoek by C, skuinssy AB = 50 cm) word die hoogtelyn CD vanaf C na AB getrek, wat AB verdeel in AD = 32 cm en DB = 18 cm. Gebruik die gelykvormige driehoeke △ACD ∼ △ABC om te wys dat AC² = AB × AD, en bepaal dan AC.', answer: 'Aangesien △ACD ∼ △ABC (HH, deel ∠A en het elkeen ʼn regte hoek), is ooreenstemmende sye in verhouding: AC/AB = AD/AC, dus AC² = AB × AD = 50 × 32 = 1 600. AC = √1 600 = 40 cm.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="30,205 270,205 183.6,89.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="183.6" y1="89.8" x2="183.6" y2="205" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><rect x="176.6" y="198" width="7" height="7" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="18" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="282" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="183.6" y="79.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="183.6" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="106.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">32 cm</text><text x="226.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text><text x="86.8" y="147.4" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Hard', question: 'In reghoekige driehoek ABC (regte hoek by C, skuinssy AB = 50 cm) verdeel die hoogtelyn CD die skuinssy AB in AD = 32 cm en DB = 18 cm. Gegee AC = 40 cm en BC = 30 cm, bevestig die Stelling van Pythagoras (AC² + BC² = AB²) met behulp van hierdie waardes, en bevestig sodoende die gelykvormige-driehoeke-bewys.', answer: 'AC² + BC² = 40² + 30² = 1 600 + 900 = 2 500. AB² = 50² = 2 500. Aangesien 2 500 = 2 500, word die Stelling van Pythagoras bevestig. Dit stem ooreen met die gelykvormige-driehoeke-bewys: AC² = AB × AD = 50 × 32 = 1 600 en BC² = AB × DB = 50 × 18 = 900, en deur dit bymekaar te tel kry ons AC² + BC² = AB × (AD + DB) = AB × AB = AB².', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="30,205 270,205 183.6,89.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="183.6" y1="89.8" x2="183.6" y2="205" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><rect x="176.6" y="198" width="7" height="7" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="18" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="282" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="183.6" y="79.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="183.6" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="106.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">32 cm</text><text x="226.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text><text x="86.8" y="147.4" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">40 cm</text><text x="246.8" y="147.4" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">30 cm</text></svg>'  },

        // Blok 6 — Gemengde toepassing / hoogtepunt (Easy/Medium/Hard/Hard)
        { difficulty: 'Easy', question: 'Driehoek ABC is gelykvormig aan driehoek DEF, met AB wat ooreenstem met DE en BC wat ooreenstem met EF. AB = 9 cm, DE = 27 cm (skaalfaktor 3), en BC = 9 cm. Bepaal EF.', checkMode: 'auto', correctAnswer: '27cm', correctAnswers: ['27cm', '27 cm', '27'], answer: '27 cm', explanation: 'Die skaalfaktor van △ABC na △DEF is DE ÷ AB = 27 ÷ 9 = 3. EF = BC × 3 = 9 × 3 = 27 cm.', diagramSvg: '<svg viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg"><polygon points="65,45 25,165 110,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="65" y="35" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="13" y="179" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="122" y="179" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><line x1="48.8" y1="106.3" x2="41.2" y2="103.7" stroke="#16a34a" stroke-width="2"/><line x1="65.0" y1="161.0" x2="65.0" y2="169.0" stroke="#7c3aed" stroke-width="2"/><line x1="70.0" y1="161.0" x2="70.0" y2="169.0" stroke="#7c3aed" stroke-width="2"/><text x="25.0" y="105.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="67.5" y="183.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><polygon points="235,20 183.0,176.0 293.5,176.0" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="235" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="171.0" y="190.0" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="305.5" y="190.0" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">F</text><line x1="212.8" y1="99.3" x2="205.2" y2="96.7" stroke="#16a34a" stroke-width="2"/><line x1="235.8" y1="172.0" x2="235.8" y2="180.0" stroke="#7c3aed" stroke-width="2"/><line x1="240.8" y1="172.0" x2="240.8" y2="180.0" stroke="#7c3aed" stroke-width="2"/><text x="187.0" y="98.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">27 cm</text><text x="238.3" y="194.0" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'Twee gelykvormige driehoeke het ooreenstemmende sye in die verhouding 4:9. As die kleiner driehoek ʼn omtrek van 28 cm het, bepaal die omtrek van die groter driehoek.', checkMode: 'auto', correctAnswer: '63cm', correctAnswers: ['63cm', '63 cm', '63'], answer: '63 cm', explanation: 'Omtrek skaleer lineêr volgens die syverhouding. Groter omtrek = 28 × (9/4) = 63 cm.' },
        { difficulty: 'Hard', question: 'In driehoek ABC is DE ewewydig aan BC, met D op AB en E op AC, wat AB in die verhouding AD:DB = 1:2 verdeel. Gegee AC = 21 cm, bepaal AE en EC.', answer: 'Volgens die Eweredigheidstelling is AD/DB = AE/EC, dus AE:EC = 1:2 ook. Dit beteken AE is 1/3 van AC en EC is 2/3 van AC. AE = 21 × 1/3 = 7 cm. EC = 21 × 2/3 = 14 cm.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="111.7" y1="88.7" x2="188.3" y2="88.7" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,92.9 L 142.0,88.7 L 135.0,84.5" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,92.9 L 158.0,88.7 L 151.0,84.5" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="95.7" y="91.7" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="204.3" y="91.7" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="108.8" y="58.3" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">1</text><text x="51.3" y="149.3" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">2</text><text x="233.5" y="119" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">21 cm</text></svg>'  },
        { difficulty: 'Hard', question: 'Bongiwe het bewys dat twee driehoeke gelykvormig is deur die SSS-eweredigheidsvoorwaarde te gebruik, en het toe die Eweredigheidstelling gebruik om ʼn onbekende sy binne een van die driehoeke te bepaal. Verduidelik hoe hierdie twee resultate as afsonderlike maar verwante gereedskapstukke saamwerk.', answer: 'Die SSS-eweredigheidsvoorwaarde en die Eweredigheidstelling handel oor verskillende situasies: SSS-eweredigheid bewys dat hele driehoeke gelykvormig is deur al drie pare ooreenstemmende sye te vergelyk, terwyl die Eweredigheidstelling binne ʼn enkele driehoek geld wanneer ʼn lyn ewewydig aan een sy getrek word, wat wys dat daardie lyn die ander twee sye eweredig verdeel. Bongiwe het eers SSS-eweredigheid gebruik om vas te stel dat twee afsonderlike driehoeke dieselfde vorm deel, en het toe afsonderlik die Eweredigheidstelling op ʼn ewewydige lyn binne een driehoek toegepas om ʼn onbekende lynstuklengte op te los — albei gereedskapstukke steun op dieselfde onderliggende idee van eweredige sye, maar word in verskillende meetkundige kontekste toegepas.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het gelykvormige veelhoeke, die Eweredigheidstelling, en die gelykvormige-driehoeke-bewys van Pythagoras bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor die Eweredigheidstelling of die Middelpuntstelling weer deur, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor gelykvormigheidsvoorwaardes en die hoogtelyn-gebaseerde Pythagoras-bewys weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — HH / SSS-voorwaardes (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Driehoek ABC het hoeke 38°, 74°, 68°. Driehoek DEF het hoeke 74°, 68°, 38° maar verskillende sylengtes. Is die twee driehoeke gelykvormig?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'ja, gelykvormig', 'gelykvormig'], answer: 'ja', explanation: 'Albei driehoeke het dieselfde drie hoeke (38°, 68°, 74°) — die volgorde waarin hulle gelys word maak nie saak nie. Aangesien al drie pare hoeke ooreenstem, is die driehoeke gelykvormig volgens die HH-voorwaarde.' },
        { difficulty: 'Easy', question: 'Driehoek ABC het sye 3 cm, 5 cm, 6 cm. Driehoek DEF het sye 12 cm, 20 cm, 24 cm. Bevestig gelykvormigheid met behulp van syverhoudings.', checkMode: 'auto', correctAnswer: 'gelykvormig', correctAnswers: ['gelykvormig', 'ja, gelykvormig', 'ja'], answer: 'gelykvormig', explanation: 'DE/AB = 12/3 = 4, EF/BC = 20/5 = 4, FD/CA = 24/6 = 4. Al drie verhoudings is gelyk aan 4, dus is die driehoeke gelykvormig volgens SSS-eweredigheid.' },
        { difficulty: 'Medium', question: 'Driehoek ABC het sye 9 cm, 12 cm, 15 cm. Driehoek DEF het sye 6 cm, 8 cm, 10 cm. Bevestig of die driehoeke gelykvormig is met behulp van syverhoudings.', answer: 'DE/AB = 6/9 = 2/3, EF/BC = 8/12 = 2/3, FD/CA = 10/15 = 2/3. Al drie verhoudings is gelyk aan 2/3, dus is die driehoeke gelykvormig volgens SSS-eweredigheid.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Sibusiso sê as twee driehoeke albei ʼn 100°-hoek het, moet hulle gelykvormig wees. Is hy korrek? Verduidelik met behulp van ʼn teenvoorbeeld.', answer: 'Nee — ʼn driehoek met hoeke 100°, 50°, 30° en ʼn driehoek met hoeke 100°, 40°, 40° bevat albei ʼn 100°-hoek, maar hulle ander twee hoeke is heeltemal verskillend, dus is die driehoeke nie gelykvormig nie. ʼn Enkele ooreenstemmende hoek is nie genoeg nie; die HH-voorwaarde vereis twee pare ooreenstemmende hoeke.', checkMode: 'self' },

        // Blok 2 — Eweredigheidstelling (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In driehoek ABC is MN ewewydig aan BC, met M op AB en N op AC. AM = 6 cm, MB = 10 cm en AN = 9 cm. Bepaal NC.', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15 cm', '15'], answer: '15 cm', explanation: 'Aangesien MN ∥ BC, geld volgens die Eweredigheidstelling: AM/MB = AN/NC. Dus 6/10 = 9/NC. Kruisvermenigvuldig: 6 × NC = 90. NC = 15 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="106.9" y1="96.3" x2="193.1" y2="96.3" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,100.5 L 142.0,96.3 L 135.0,92.0" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,100.5 L 158.0,96.3 L 151.0,92.0" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="90.9" y="99.3" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="209.1" y="99.3" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="104.4" y="62.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="46.9" y="153.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="195.6" y="62.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="247.1" y="153.1" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'In driehoek PQR is ST ewewydig aan QR, met S op PQ en T op PR. PS = 8 cm, SQ = 12 cm en PT = 10 cm. Bepaal TR.', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15 cm', '15'], answer: '15 cm', explanation: 'Aangesien ST ∥ QR, geld volgens die Eweredigheidstelling: PS/SQ = PT/TR. Dus 8/12 = 10/TR. Kruisvermenigvuldig: 8 × TR = 120. TR = 15 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="104.0" y1="100.8" x2="196.0" y2="100.8" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,105.0 L 142.0,100.8 L 135.0,96.6" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,105.0 L 158.0,100.8 L 151.0,96.6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">P</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">Q</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">R</text><text x="88" y="103.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">S</text><text x="212" y="103.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">T</text><text x="103" y="64.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="45.5" y="155.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="197" y="64.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="248.5" y="155.4" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Hard', question: 'In driehoek ABC is DE ewewydig aan BC, met D op AB en E op AC. AD = 9 cm, DB = 15 cm en AE = 12 cm. Bepaal EC, en gebruik dit dan om die verhouding AE:AC te bepaal.', answer: 'Volgens die Eweredigheidstelling: AD/DB = AE/EC. Dus 9/15 = 12/EC. Kruisvermenigvuldig: 9 × EC = 180, dus EC = 20 cm. AC = AE + EC = 12 + 20 = 32 cm. Verhouding AE:AC = 12:32 = 3:8.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="106.9" y1="96.3" x2="193.1" y2="96.3" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,100.5 L 142.0,96.3 L 135.0,92.0" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,100.5 L 158.0,96.3 L 151.0,92.0" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="90.9" y="99.3" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="209.1" y="99.3" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="104.4" y="62.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="46.9" y="153.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="195.6" y="62.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="247.1" y="153.1" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },

        // Blok 3 — Middelpuntstelling (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'M en N is die middelpunte van AB en AC in driehoek ABC, met BC = 30 cm. Bepaal MN met behulp van die Middelpuntstelling.', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15 cm', '15'], answer: '15 cm', explanation: 'Volgens die Middelpuntstelling is MN ∥ BC en MN = ½BC = ½ × 30 = 15 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="150" y="235" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">BC = 30 cm</text><text x="150" y="112" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'M is die middelpunt van AB in driehoek ABC, met AM = 11 cm. Bepaal die volle lengte van AB.', checkMode: 'auto', correctAnswer: '22cm', correctAnswers: ['22cm', '22 cm', '22'], answer: '22 cm', explanation: 'Aangesien M die middelpunt van AB is, is AM = MB, dus AB = 2 × AM = 2 × 11 = 22 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="96" y="72.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><text x="42" y="167.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Hard', question: 'M en N is die middelpunte van AB en AC in driehoek ABC, en MN = 14 cm. Bepaal BC, en bepaal dan die omtrek van driehoek AMN gegee dat AM = 10 cm en AN = 13 cm.', answer: 'Volgens die Middelpuntstelling is MN = ½BC, dus BC = 2 × MN = 2 × 14 = 28 cm. Die omtrek van driehoek AMN = AM + MN + AN = 10 + 14 + 13 = 37 cm.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="150" y="112" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="150" y="235" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },

        // Blok 4 — Gelykhoekig / SSS-eweredigheid (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'Driehoek ABC het hoeke 36°, 82°, 62°. Driehoek XYZ het hoeke 82°, 62°, 36° maar verskillende sylengtes. Verduidelik waarom die driehoeke gelykhoekig en dus gelykvormig is.', answer: 'Albei driehoeke bevat dieselfde drie hoeke (36°, 62°, 82°), net in ʼn ander volgorde gelys. Aangesien al die ooreenstemmende hoeke ooreenstem, is die driehoeke gelykhoekig, en volgens die HH-voorwaarde is gelykhoekige driehoeke altyd gelykvormig — verskillende sylengtes affekteer dit nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Driehoek ABC het sye 8 cm, 15 cm, 17 cm. Driehoek DEF het sye 24 cm, 45 cm, 51 cm. Bevestig dat hierdie driehoeke gelykvormig is met behulp van syverhoudings.', checkMode: 'auto', correctAnswer: 'gelykvormig', correctAnswers: ['gelykvormig', 'ja, gelykvormig', 'ja'], answer: 'gelykvormig', explanation: 'DE/AB = 24/8 = 3, EF/BC = 45/15 = 3, FD/CA = 51/17 = 3. Al drie verhoudings is gelyk aan 3, dus is die driehoeke gelykvormig volgens SSS-eweredigheid.' },
        { difficulty: 'Hard', question: 'In driehoek XYZ word GH ewewydig aan YZ getrek, met G op XY en H op XZ. Verduidelik hoe hierdie konstruksie bewys dat △XGH gelykhoekig is met △XYZ, en stel watter stelling bevestig dat hulle sye ook in verhouding is.', answer: 'Aangesien GH ∥ YZ, is ooreenstemmende hoeke gelyk: ∠XGH = ∠XYZ en ∠XHG = ∠XZY (hulle vorm F-hoekpare by die ewewydige lyne), en albei driehoeke deel ∠X. Dus het △XGH dieselfde drie hoeke as △XYZ, wat dit gelykhoekig met △XYZ maak. Die Eweredigheidstelling bevestig dan dat, aangesien GH ∥ YZ, die sye XG/XY en XH/XZ (en GH/YZ) outomaties in dieselfde verhouding is — wat bewys dat die HH-voorwaarde voldoende is vir gelykvormigheid.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="84.0" y1="129.5" x2="216.0" y2="129.5" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,219.2 L 142.0,215.0 L 135.0,210.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,219.2 L 158.0,215.0 L 151.0,210.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,133.7 L 142.0,129.5 L 135.0,125.3" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,133.7 L 158.0,129.5 L 151.0,125.3" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 46,215 A 16 16 0 0 1 43,206" fill="none" stroke="#16a34a" stroke-width="1.8"/><path d="M 96,136.5 A 13 13 0 0 1 93.5,123" fill="none" stroke="#16a34a" stroke-width="1.8"/><path d="M 254,215 A 16 16 0 0 0 257,206" fill="none" stroke="#7c3aed" stroke-width="1.8"/><path d="M 250,215 A 20 20 0 0 0 254,204" fill="none" stroke="#7c3aed" stroke-width="1.8"/><path d="M 204,136.5 A 13 13 0 0 0 206.5,123" fill="none" stroke="#7c3aed" stroke-width="1.8"/><path d="M 200,138.5 A 17 17 0 0 0 203.5,121" fill="none" stroke="#7c3aed" stroke-width="1.8"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">X</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">Y</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">Z</text><text x="68" y="132.5" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">G</text><text x="232" y="132.5" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">H</text></svg>'  },

        // Blok 5 — Pythagoras via gelykvormige driehoeke (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'ʼn Reghoekige driehoek het bene van 7 cm en 24 cm. Gebruik die Stelling van Pythagoras om die lengte van die skuinssy te bepaal.', checkMode: 'auto', correctAnswer: '25cm', correctAnswers: ['25cm', '25 cm', '25'], answer: '25 cm', explanation: 'Volgens die Stelling van Pythagoras: c² = 7² + 24² = 49 + 576 = 625. c = √625 = 25 cm.', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><polygon points="30,210 30,40 250,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="196" width="14" height="14" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="16" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="44" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="264" y="214" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="12" y="125" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="140" y="228" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">24 cm</text><text x="154" y="117" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'In reghoekige driehoek ABC (regte hoek by C, skuinssy AB = 75 cm) word die hoogtelyn CD vanaf C na AB getrek, wat AB verdeel in AD = 48 cm en DB = 27 cm. Gebruik die gelykvormige driehoeke △ACD ∼ △ABC om te wys dat AC² = AB × AD, en bepaal dan AC.', answer: 'Aangesien △ACD ∼ △ABC (HH, deel ∠A en het elkeen ʼn regte hoek), is ooreenstemmende sye in verhouding: AC/AB = AD/AC, dus AC² = AB × AD = 75 × 48 = 3 600. AC = √3 600 = 60 cm.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="30,205 270,205 183.6,89.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="183.6" y1="89.8" x2="183.6" y2="205" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><rect x="176.6" y="198" width="7" height="7" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="18" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="282" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="183.6" y="79.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="183.6" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="106.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">48 cm</text><text x="226.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">27 cm</text><text x="86.8" y="147.4" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Hard', question: 'In reghoekige driehoek ABC (regte hoek by C, skuinssy AB = 75 cm) verdeel die hoogtelyn CD die skuinssy AB in AD = 48 cm en DB = 27 cm. Gegee AC = 60 cm en BC = 45 cm, bevestig die Stelling van Pythagoras (AC² + BC² = AB²) met behulp van hierdie waardes, en bevestig sodoende die gelykvormige-driehoeke-bewys.', answer: 'AC² + BC² = 60² + 45² = 3 600 + 2 025 = 5 625. AB² = 75² = 5 625. Aangesien 5 625 = 5 625, word die Stelling van Pythagoras bevestig. Dit stem ooreen met die gelykvormige-driehoeke-bewys: AC² = AB × AD = 75 × 48 = 3 600 en BC² = AB × DB = 75 × 27 = 2 025, en deur dit bymekaar te tel kry ons AC² + BC² = AB × (AD + DB) = AB × AB = AB².', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="30,205 270,205 183.6,89.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="183.6" y1="89.8" x2="183.6" y2="205" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><rect x="176.6" y="198" width="7" height="7" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="18" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="282" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="183.6" y="79.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="183.6" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="106.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">48 cm</text><text x="226.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">27 cm</text><text x="86.8" y="147.4" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">60 cm</text><text x="246.8" y="147.4" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">45 cm</text></svg>'  },

        // Blok 6 — Gemengde toepassing / hoogtepunt (Easy/Medium/Hard/Hard)
        { difficulty: 'Easy', question: 'Driehoek ABC is gelykvormig aan driehoek DEF, met AB wat ooreenstem met DE en BC wat ooreenstem met EF. AB = 4 cm, DE = 10 cm (skaalfaktor 2,5), en BC = 6 cm. Bepaal EF.', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15 cm', '15'], answer: '15 cm', explanation: 'Die skaalfaktor van △ABC na △DEF is DE ÷ AB = 10 ÷ 4 = 2,5. EF = BC × 2,5 = 6 × 2,5 = 15 cm.', diagramSvg: '<svg viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg"><polygon points="65,45 25,165 110,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="65" y="35" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="13" y="179" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="122" y="179" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><line x1="48.8" y1="106.3" x2="41.2" y2="103.7" stroke="#16a34a" stroke-width="2"/><line x1="65.0" y1="161.0" x2="65.0" y2="169.0" stroke="#7c3aed" stroke-width="2"/><line x1="70.0" y1="161.0" x2="70.0" y2="169.0" stroke="#7c3aed" stroke-width="2"/><text x="25.0" y="105.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="67.5" y="183.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><polygon points="235,20 183.0,176.0 293.5,176.0" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="235" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="171.0" y="190.0" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="305.5" y="190.0" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">F</text><line x1="212.8" y1="99.3" x2="205.2" y2="96.7" stroke="#16a34a" stroke-width="2"/><line x1="235.8" y1="172.0" x2="235.8" y2="180.0" stroke="#7c3aed" stroke-width="2"/><line x1="240.8" y1="172.0" x2="240.8" y2="180.0" stroke="#7c3aed" stroke-width="2"/><text x="187.0" y="98.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="238.3" y="194.0" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'Twee gelykvormige driehoeke het ooreenstemmende sye in die verhouding 3:7. As die kleiner driehoek ʼn omtrek van 18 cm het, bepaal die omtrek van die groter driehoek.', checkMode: 'auto', correctAnswer: '42cm', correctAnswers: ['42cm', '42 cm', '42'], answer: '42 cm', explanation: 'Omtrek skaleer lineêr volgens die syverhouding. Groter omtrek = 18 × (7/3) = 42 cm.' },
        { difficulty: 'Hard', question: 'In driehoek ABC is DE ewewydig aan BC, met D op AB en E op AC, wat AB in die verhouding AD:DB = 1:3 verdeel. Gegee AC = 24 cm, bepaal AE en EC.', answer: 'Volgens die Eweredigheidstelling is AD/DB = AE/EC, dus AE:EC = 1:3 ook. Dit beteken AE is 1/4 van AC en EC is 3/4 van AC. AE = 24 × 1/4 = 6 cm. EC = 24 × 3/4 = 18 cm.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="121.3" y1="73.5" x2="178.8" y2="73.5" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,77.7 L 142.0,73.5 L 135.0,69.3" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,77.7 L 158.0,73.5 L 151.0,69.3" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="105.3" y="76.5" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="194.8" y="76.5" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="113.6" y="50.8" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">1</text><text x="56.1" y="141.8" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">3</text><text x="233.5" y="119" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">24 cm</text></svg>'  },
        { difficulty: 'Hard', question: 'Naledi het bewys dat twee driehoeke gelykvormig is deur die HH-voorwaarde te gebruik, en het toe die Middelpuntstelling gebruik om ʼn onbekende lengte binne een van die driehoeke te bepaal. Verduidelik hoe hierdie twee resultate as afsonderlike maar verwante gereedskapstukke saamwerk.', answer: 'Die HH-voorwaarde en die Middelpuntstelling handel oor verskillende situasies: die HH-voorwaarde bewys dat hele driehoeke gelykvormig is deur hulle hoeke te vergelyk, terwyl die Middelpuntstelling binne ʼn enkele driehoek geld wanneer ʼn lyn die middelpunte van twee sye verbind, wat wys dat daardie lyn ewewydig aan die derde sy is en gelyk is aan die helfte van die lengte daarvan. Naledi het eers die HH-voorwaarde gebruik om vas te stel dat twee afsonderlike driehoeke dieselfde vorm deel, en het toe afsonderlik die Middelpuntstelling binne een driehoek toegepas om ʼn onbekende lynstuklengte op te los — die Middelpuntstelling is eintlik ʼn spesiale geval (verhouding 1:1) van dieselfde Eweredigheidstelling wat die HH-gelykvormigheidsbewys onderlê.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het gelykvormige veelhoeke, die Eweredigheidstelling, en die gelykvormige-driehoeke-bewys van Pythagoras bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor die Eweredigheidstelling of die Middelpuntstelling weer deur, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor gelykvormigheidsvoorwaardes en die hoogtelyn-gebaseerde Pythagoras-bewys weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
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
