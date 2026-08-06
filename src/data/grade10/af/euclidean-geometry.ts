import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (euclidean geometry roles) ────────────────────────────────
// matching angles / properties tested / standard definition / conjecture → blue   (#2563eb)
// proportional sides / proof steps / alternative definition / testing   → orange  (#ea580c)
// congruent (identical) / proof connecting / conclusion proven           → green   (#16a34a)
// counter-examples / conclusion disproven                                → red     (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Euklidiese Meetkunde',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISING SIMILARITY AND CONGRUENCE OF TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'similarity-congruence-triangles',
      title: 'Hersiening van Gelykvormigheid en Kongruensie van Driehoeke',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Twee driehoeke is <strong>gelykvormig</strong> as hulle ${bl('ooreenstemmende hoeke gelyk')} is — hulle sye is dan outomaties in verhouding. Twee driehoeke is <strong>kongruent</strong> as beide hulle ${bl('hoeke')} ÉN hulle ${gr('ooreenstemmende sye')} gelyk is. ${gr('Kongruente')} driehoeke is in wese identiese afskrifte, terwyl ${or('gelykvormige')} driehoeke geskaleerde weergawes van mekaar is.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('ooreenstemmende hoeke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eweredige sye')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kongruent (identies)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Gelykvormige driehoeke</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Dieselfde ${bl('vorm')}, ander grootte. ${bl('Hoeke')} is gelyk; sye is in ʼn vaste ${or('verhouding')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Kongruente driehoeke</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Dieselfde ${bl('vorm')} ÉN dieselfde grootte. ${bl('Hoeke')} gelyk ÉN ${gr('sye')} gelyk — ${gr('identiese afskrifte')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Ooreenstemmende sye</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Sye wat teenoor ${bl('gelyke hoeke')} lê. In gelykvormige driehoeke is hulle in ${or('verhouding')}; in kongruente driehoeke is hulle ${gr('gelyk')}.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Gelykvormigheid vs Kongruensie op ʼn oogopslag</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Gelykvormig (|||)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">✔ ${bl('Ooreenstemmende hoeke')} is gelyk</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">✔ Sye in ${or('verhouding')} (dieselfde skaal)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">✖ Sye is NIE noodwendig gelyk nie</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Kongruent (≡)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">✔ ${bl('Ooreenstemmende hoeke')} is gelyk</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">✔ ${gr('Ooreenstemmende sye')} is gelyk</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">✔ Driehoeke is ${gr('identies in elke opsig')}</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou-wenk</p>` +
        `<p style="margin:0;color:#1e3a8a;">Alle ${gr('kongruente')} driehoeke is outomaties ${or('gelykvormig')}, maar NIE alle ${or('gelykvormige')} driehoeke is ${gr('kongruent')} nie. Beskou kongruensie as ʼn strenger vereiste — dit vereis beide ${bl('gelyke hoeke')} ÉN ${gr('gelyke sye')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Driehoek ABC het hoeke 40°, 60°, 80°. Driehoek DEF het hoeke 40°, 60°, 80° maar verskillende sylengtes. Is die driehoeke gelykvormig of kongruent?',
          answer: `Die driehoeke is ${or('gelykvormig')}, nie ${gr('kongruent')} nie`,
          steps: [
            `Kontroleer die ${bl('hoeke')}: Driehoek ABC het ${bl('40°')}, ${bl('60°')}, ${bl('80°')} en driehoek DEF het ook ${bl('40°')}, ${bl('60°')}, ${bl('80°')} — die ${bl('ooreenstemmende hoeke is gelyk')} ✓`,
            `Kontroleer die sye: Die vraag stel dat die driehoeke <strong>verskillende sylengtes</strong> het, dus is die sye NIE ${gr('gelyk')} nie — hulle is in ${or('verhouding')} (dieselfde skaal), maar nie identies nie.`,
            `<strong>Gevolgtrekking:</strong> Omdat die ${bl('hoeke ooreenstem')} maar die sye verskil (geskaleer), is die driehoeke ${or('gelykvormig')} (|||), nie ${gr('kongruent')} (≡) nie. Om kongruent te wees, moet BEIDE die hoeke ÉN die sye gelyk wees.`,
          ],
        },
        {
          question: 'Sipho sê twee driehoeke met dieselfde oppervlakte is altyd kongruent. Is hy korrek?',
          answer: `Nee — Sipho is ${re('verkeerd')}`,
          steps: [
            `Beskou ʼn reghoekige driehoek met basis 2 cm en hoogte 6 cm: oppervlakte = ½ × 2 × 6 = ${bl('6 cm²')}.`,
            `Beskou nou ʼn ander reghoekige driehoek met basis 3 cm en hoogte 4 cm: oppervlakte = ½ × 3 × 4 = ${bl('6 cm²')}.`,
            `Albei driehoeke het dieselfde oppervlakte (${bl('6 cm²')}), tog het hulle heeltemal verskillende sylengtes en verskillende ${bl('hoek')}groottes — hulle is nóg gelykvormig nóg kongruent.`,
            `<strong>Gevolgtrekking:</strong> ${re('Gelyke oppervlakte impliseer NIE kongruensie nie.')} ʼn ${re('Teenvoorbeeld')} soos hierdie is genoeg om Sipho se bewering te weerlê. Kongruensie vereis BEIDE gelyke ${bl('hoeke')} ÉN gelyke ${gr('sye')}.`,
          ],
        },
      ],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat die verskil tussen gelykvormige en kongruente driehoeke verduidelik deur ooreenstemmende hoeke en proporsionele sye te gebruik, met kleurgekodeerde diagramme',

      diagramPlaceholder:
        'Diagram wat twee gelykvormige driehoeke langs mekaar wys met ooreenstemmende hoeke in blou en eweredige sye in oranje gemerk, teenoor twee kongruente driehoeke met identiese sye in groen gemerk',
      diagramSvg:
        '<svg viewBox="0 0 350 195" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><text x="90" y="14" font-size="6.5" fill="#2563eb" font-weight="700" text-anchor="middle">Gelykvormig (|||) — sye in verhouding 1 : 1.5</text><polygon points="20,160 60,160 20,125" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="20" y="150" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 20,133 A 8,8 0 0 1 26.02,130.27" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="40" y="174" font-size="10" fill="#ea580c" font-weight="700" text-anchor="middle">4 cm</text><text x="8" y="145" font-size="10" fill="#ea580c" font-weight="700" text-anchor="end">3 cm</text><polygon points="85,172 145,172 85,119" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="85" y="157" width="15" height="15" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 85,131 A 12,12 0 0 1 93.99,126.95" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="115" y="188" font-size="10" fill="#ea580c" font-weight="700" text-anchor="middle">6 cm</text><text x="73" y="148" font-size="10" fill="#ea580c" font-weight="700" text-anchor="end">4.5 cm</text><line x1="175" y1="5" x2="175" y2="190" stroke="#e2e8f0" stroke-width="1"/><text x="262" y="14" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">Kongruent (≡) — identies</text><polygon points="200,160 240,160 200,120" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="200" y="150" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="215" y1="160" x2="215" y2="150" stroke="#16a34a" stroke-width="2"/><line x1="200" y1="143" x2="210" y2="143" stroke="#16a34a" stroke-width="2"/><line x1="200" y1="148" x2="210" y2="148" stroke="#16a34a" stroke-width="2"/><text x="220" y="174" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">5 cm</text><text x="188" y="140" font-size="10" fill="#16a34a" font-weight="700" text-anchor="end">5 cm</text><polygon points="270,160 310,160 270,120" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="270" y="150" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="285" y1="160" x2="285" y2="150" stroke="#16a34a" stroke-width="2"/><line x1="270" y1="143" x2="280" y2="143" stroke="#16a34a" stroke-width="2"/><line x1="270" y1="148" x2="280" y2="148" stroke="#16a34a" stroke-width="2"/><text x="290" y="174" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">5 cm</text><text x="258" y="140" font-size="10" fill="#16a34a" font-weight="700" text-anchor="end">5 cm</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — INVESTIGATING THE MIDPOINT THEOREM
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'midpoint-theorem',
      title: 'Ondersoek van die Middelpuntstelling',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Die <strong>middelpunt</strong> van ʼn lynstuk is die punt presies op halfpad tussen sy twee eindpunte. As ons die middelpunte van twee sye van ʼn driehoek verbind, het die lynstuk wat ons teken — die ${or('middelyn')} genoem — ʼn opvallende verband met die derde sy. Ons ${or('ondersoek')} hierdie verband deur konstruksie en meting, wat lei tot die <strong>Middelpuntstelling</strong>.</p>` +
        `<p style="margin-bottom:16px;">In driehoek ABC, as ${bl('D')} en ${bl('E')} die middelpunte van ${bl('AB')} en ${bl('AC')} is, dan is ${gr('DE ∥ BC')} ÉN ${gr('DE = ½BC')}. Hier ondersoek en pas ons slegs die stelling toe deur voorbeelde en meting — die volledige logiese bewys (met gelykvormige driehoeke) word in Graad 11 behandel.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gegewe middelpunte en sye')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('ondersoekstap')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('bevestigde verband')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om die Middelpuntstelling te ondersoek</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Teken enige driehoek ${bl('ABC')} — enige vorm of grootte werk.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Gebruik ʼn liniaal om ${bl('AB')} en ${bl('AC')} te meet, en merk die middelpunte ${bl('D')} (op AB) en ${bl('E')} (op AC).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Verbind ${bl('D')} met ${bl('E')} met ʼn reguit lyn — hierdie lynstuk word die ${or('middelyn')} genoem.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Meet ${gr('DE')} en ${gr('BC')} met ʼn liniaal, en kontroleer met ʼn gradeboog (of ʼn winkelhaak) dat DE en BC in dieselfde rigting wys. Jy sal vind dat ${gr('DE ∥ BC')} en ${gr('DE presies die helfte van die lengte van BC is')} — elke keer, vir elke driehoeksvorm.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die Middelpuntstelling</p>` +
        `<p style="margin:0;color:#1e3a8a;">As ${bl('D')} en ${bl('E')} die middelpunte van sye ${bl('AB')} en ${bl('AC')} van driehoek ABC is, dan is ${gr('DE ∥ BC')} en ${gr('DE = ½BC')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Twee feite, nie een nie</p>` +
        `<p style="margin:0;color:#7c2d12;">Die Middelpuntstelling gee jou altyd TWEE feite gelyktydig — ʼn ${or('ewewydigheids')}-verband ÉN ʼn ${or('lengte')}-verband. Sodra jy weet twee punte is middelpunte, volg albei feite onmiddellik, sonder enige verdere meting.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Driehoek ABC het hoekpunte A(2, 6), B(0, 0) en C(8, 0) op die Cartesiese vlak. D is die middelpunt van AB en E is die middelpunt van AC. Bepaal die koördinate van D en E, en ondersoek dan of DE ∥ BC en DE = ½BC.',
          answer: `Die ondersoek bevestig ${gr('DE ∥ BC')} en ${gr('DE = ½BC')}`,
          steps: [
            `Bepaal ${bl('D')}, die middelpunt van AB: D = ((2+0)/2, (6+0)/2) = ${bl('(1, 3)')}`,
            `Bepaal ${bl('E')}, die middelpunt van AC: E = ((2+8)/2, (6+0)/2) = ${bl('(5, 3)')}`,
            `${or('Kontroleer vir ewewydigheid:')} D en E het albei y-koördinaat 3, dus is DE ʼn horisontale lyn. B en C het albei y-koördinaat 0, dus is BC ook horisontaal. Twee horisontale lyne wys in dieselfde rigting, dus ${gr('DE ∥ BC')} ✓`,
            `${or('Kontroleer die lengte:')} DE = 5 − 1 = 4 eenhede. BC = 8 − 0 = 8 eenhede. Aangesien 4 = ½ × 8, is ${gr('DE = ½BC')} ✓`,
            `<strong>Gevolgtrekking:</strong> Hierdie numeriese ondersoek bevestig die Middelpuntstelling: ${gr('DE ∥ BC')} en ${gr('DE = ½BC')}.`,
          ],
        },
        {
          question: 'In driehoek KLM is P en Q onderskeidelik die middelpunte van KL en KM. As LM = 22 cm, bepaal die lengte van PQ, en stel watter sye ewewydig is.',
          answer: `PQ = ${or('11')} cm, en ${or('PQ ∥ LM')}`,
          steps: [
            `${bl('P')} en ${bl('Q')} is die middelpunte van ${bl('KL')} en ${bl('KM')}, dus is die Middelpuntstelling direk van toepassing.`,
            `Volgens die Middelpuntstelling: ${or('PQ ∥ LM')} en ${or('PQ = ½LM')}`,
            `Vervang: ${or('PQ = ½ × 22 = 11')} cm`,
            `<strong>Antwoord:</strong> PQ = ${or('11')} cm, en PQ is ewewydig aan LM ✓`,
          ],
        },
        {
          question: 'In driehoek XYZ is M en N die middelpunte van XY en XZ. MN = 6,5 cm. (a) Bepaal YZ. (b) Verduidelik waarom MN ewewydig aan YZ moet wees, sonder om iets te meet.',
          answer: `(a) YZ = ${or('13')} cm (b) ${gr('MN ∥ YZ')} volg outomaties uit die Middelpuntstelling`,
          steps: [
            `(a) Volgens die Middelpuntstelling is ${or('MN = ½YZ')}, dus is ${or('YZ = 2 × MN = 2 × 6,5 = 13')} cm.`,
            `(b) ${bl('M')} en ${bl('N')} word gedefinieer as die presiese middelpunte van twee sye van die driehoek. Die Middelpuntstelling waarborg dat die lynstuk wat enige twee sulke middelpunte verbind, ewewydig aan die derde sy is — dit volg outomaties uit die middelpuntvoorwaarde, dus is ${gr('MN ∥ YZ')} sonder dat enigiets verder gemeet hoef te word.`,
          ],
        },
      ],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'In driehoek DEF is G en H onderskeidelik die middelpunte van DE en DF. EF = 20 cm. Gebruik die Middelpuntstelling om die lengte van GH te bepaal.',
          checkMode: 'auto',
          correctAnswer: '10cm',
          correctAnswers: ['10cm', '10 cm', '10'],
          answer: '10 cm',
          explanation: 'Volgens die Middelpuntstelling is GH = ½ × EF = ½ × 20 = 10 cm (en GH ∥ EF).',
          diagramSvg: '<svg viewBox="0 0 210 175" xmlns="http://www.w3.org/2000/svg"><polygon points="105,25 25,150 185,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="65" y1="87.5" x2="145" y2="87.5" stroke="#2563eb" stroke-width="2.5"/><circle cx="65" cy="87.5" r="3" fill="#2563eb"/><circle cx="145" cy="87.5" r="3" fill="#2563eb"/><text x="105" y="80" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="105" y="167" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'In driehoek PQR is S en T onderskeidelik die middelpunte van PQ en PR. ST = 7,5 cm. Bepaal die lengte van QR.',
          checkMode: 'auto',
          correctAnswer: '15cm',
          correctAnswers: ['15cm', '15 cm', '15'],
          answer: '15 cm',
          explanation: 'Volgens die Middelpuntstelling is QR = 2 × ST = 2 × 7,5 = 15 cm.',
          diagramSvg: '<svg viewBox="0 0 210 175" xmlns="http://www.w3.org/2000/svg"><polygon points="105,25 25,150 185,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="65" y1="87.5" x2="145" y2="87.5" stroke="#2563eb" stroke-width="2.5"/><circle cx="65" cy="87.5" r="3" fill="#2563eb"/><circle cx="145" cy="87.5" r="3" fill="#2563eb"/><text x="105" y="80" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">7,5 cm</text><text x="105" y="167" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'In driehoek ABC is M en N die middelpunte van AB en AC. Verduidelik waarom MN ewewydig aan BC moet wees, sonder om iets te meet.',
          answer: 'Omdat M en N gedefinieer word as die presiese middelpunte van twee sye van die driehoek, waarborg die Middelpuntstelling dat die lynstuk wat hulle verbind, ewewydig aan die derde sy is — dit volg outomaties uit die middelpuntvoorwaarde self, dus is geen meting nodig om dit te bevestig nie.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'In driehoek XYZ is D, E en F onderskeidelik die middelpunte van XY, XZ en YZ. Die omtrek van driehoek XYZ is 54 cm. Bepaal die omtrek van driehoek DEF (gevorm deur die drie middelpunte te verbind), en verduidelik jou redenasie.',
          answer: 'Deur die Middelpuntstelling drie keer toe te pas (een keer vir elke paar middelpunte) blyk dit dat elke sy van driehoek DEF presies die helfte van die lengte van die ooreenstemmende sy van driehoek XYZ is (DE = ½YZ, DF = ½XZ, EF = ½XY), dus is die omtrek van DEF die helfte van die omtrek van XYZ: ½ × 54 = 27 cm.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Kort video wat die Middelpuntstelling ondersoek deur ʼn driehoek te konstrueer, die middelpunte van twee sye te merk, en die middelyn te meet om te bevestig dat dit ewewydig aan en die helfte van die lengte van die derde sy is',

      diagramPlaceholder:
        'Driehoek ABC met D en E gemerk as die middelpunte van AB en AC, die middelyn DE in blou geteken met kepies wat wys AD = DB en AE = EC, en die verband DE ∥ BC, DE = ½BC in groen aangedui',
      diagramSvg:
        '<svg viewBox="0 0 210 195" xmlns="http://www.w3.org/2000/svg"><polygon points="105,25 25,150 185,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="65" y1="87.5" x2="145" y2="87.5" stroke="#2563eb" stroke-width="2.5"/><circle cx="65" cy="87.5" r="3.5" fill="#2563eb"/><circle cx="145" cy="87.5" r="3.5" fill="#2563eb"/><line x1="80" y1="53" x2="90.1" y2="59.5" stroke="#ea580c" stroke-width="2"/><line x1="40" y1="115.5" x2="50.1" y2="122" stroke="#ea580c" stroke-width="2"/><line x1="120" y1="59.5" x2="130.1" y2="53" stroke="#ea580c" stroke-width="2"/><line x1="160" y1="122" x2="170.1" y2="115.5" stroke="#ea580c" stroke-width="2"/><text x="105" y="16" font-size="13" fill="#374151" font-weight="700" text-anchor="middle">A</text><text x="10" y="158" font-size="13" fill="#374151" font-weight="700">B</text><text x="190" y="158" font-size="13" fill="#374151" font-weight="700">C</text><text x="47" y="79" font-size="12" fill="#2563eb" font-weight="700">D</text><text x="150" y="79" font-size="12" fill="#2563eb" font-weight="700">E</text><text x="105" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">DE</text><text x="105" y="185" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle">DE ∥ BC en DE = ½BC</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — INVESTIGATING PROPERTIES OF SPECIAL QUADRILATERALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-special-quadrilaterals',
      title: 'Ondersoek van die Eienskappe van Spesiale Vierhoeke',
      icon: '▱',
      explanation:
        `<p style="margin-bottom:16px;">Ons ondersoek en formuleer <strong>vermoedens</strong> oor die eienskappe van die ${bl('vlieër')}, ${bl('parallelogram')}, ${bl('reghoek')}, ${bl('ruit')}, ${bl('vierkant')}, en ${bl('trapesium')}, deur hulle sye, hoeke, diagonale en oppervlaktes te ondersoek. Ons probeer dan hierdie vermoedens ${or('bewys')} met behulp van bekende meetkundige resultate, of vals vermoedens ${re('weerlê')} met ʼn teenvoorbeeld — ʼn enkele spesifieke geval waar die vermoede faal.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eienskap wat getoets word')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('bewysstappe')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('teenvoorbeelde')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Spesiale vierhoeke en hulle sleuteleienskappe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Parallelogram</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Oorstaande sye ewewydig')} en gelyk; ${bl('oorstaande hoeke')} gelyk; diagonale halveer mekaar.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Reghoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Parallelogram met ${bl('4 regte hoeke')}; diagonale is ${or('gelyk')} en halveer mekaar.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Ruit</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Parallelogram met ${bl('4 gelyke sye')}; diagonale halveer mekaar teen ${or('90°')} en halveer die ${bl('hoekpunthoeke')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Vierkant</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Reghoek ÉN ruit — ${bl('4 regte hoeke')} ÉN ${bl('4 gelyke sye')}; diagonale gelyk, halveer mekaar teen 90°.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Vlieër</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Twee pare ${bl('aangrensende gelyke sye')}; een diagonaal is ʼn simmetrielyn; diagonale is ${or('loodreg')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Trapesium</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Presies ${bl('een paar ewewydige sye')}. ʼn Gelykbenige trapesium het ook gelyke ${bl('bene')} en gelyke diagonale.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Een teenvoorbeeld is genoeg</p>` +
        `<p style="margin:0;color:#991b1b;">Om ʼn vermoede te ${re('weerlê')} het jy net EEN spesifieke voorbeeld nodig wat dit weerspreek. Om ʼn vermoede te ${or('bewys')} moet jy toon dat dit in ALLE moontlike gevalle geld deur logiese meetkundige redenasie te gebruik — ʼn paar voorbeelde te kontroleer is NIE genoeg vir ʼn bewys nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Ondersoek of die diagonale van ʼn parallelogram altyd gelyk in lengte is.',
          answer: `Die vermoede is ${re('VALS')} — parallelogramdiagonale is NIE altyd gelyk nie`,
          steps: [
            `${bl('Eienskap wat getoets word:')} Is die diagonale van elke parallelogram gelyk in lengte?`,
            `Teken ʼn algemene parallelogram (bv. een met hoeke 60° en 120°) en meet albei diagonale. Die twee diagonale sal oor die algemeen ${re('verskillende lengtes')} hê.`,
            `${re('Teenvoorbeeld:')} ʼn Parallelogram met hoekpunte by (0,0), (4,0), (5,2), (1,2) het diagonale met lengte √29 ≈ 5,39 en √13 ≈ 3,61 — hulle is NIE gelyk nie.`,
            `<strong>Gevolgtrekking:</strong> ${re('Die vermoede word weerlê.')} ʼn Enkele teenvoorbeeld is voldoende. (Let wel: ʼn reghoek is ʼn spesiale parallelogram waarvan die diagonale WEL gelyk is — maar dit maak nie die algemene vermoede waar nie.)`,
          ],
        },
        {
          question: 'Bewys dat die diagonale van ʼn ruit mekaar teen regte hoeke halveer.',
          answer: `Die diagonale van ʼn ruit halveer mekaar teen ${or('90°')} — ${or('bewys')}`,
          steps: [
            `${bl('Eienskap wat getoets word:')} Ontmoet die diagonale van ʼn ruit altyd teen 90°?`,
            `${or('Stap 1 — Diagonale halveer mekaar:')} ʼn Ruit is ʼn parallelogram (oorstaande sye ewewydig), dus halveer sy diagonale mekaar. Laat die snypunt O wees.`,
            `${or('Stap 2 — Vier kongruente driehoeke:')} Benoem die ruit ABCD met diagonale AC en BD wat by O sny. Aangesien al 4 sye van ʼn ruit gelyk is, het driehoeke AOB, BOC, COD en DOA elk twee sye gelyk aan die helfte van die onderskeie diagonaal ÉN een sy gelyk aan ʼn sy van die ruit.`,
            `${or('Stap 3 — Kongruensie-argument:')} Deur die SSS-kongruensiereël te gebruik (al drie sye van △AOB = al drie sye van △AOD, aangesien AB = AD, AO = AO, en BO = OD (Stap 1)), kry ons △AOB ≡ △AOD. Daarom is ∠AOB = ∠AOD.`,
            `${or('Stap 4 — Regte hoeke:')} Aangesien ∠AOB + ∠AOD = 180° (hoeke op ʼn reguitlyn) en ∠AOB = ∠AOD, moet elke hoek 90° wees.`,
            `<strong>Gevolgtrekking:</strong> Die diagonale van ʼn ruit halveer mekaar teen ${or('regte hoeke')}. ✓`,
          ],
        },
        {
          question: 'Lerato sê ʼn vierkant is net ʼn spesiale reghoek. Is dit ʼn akkurate beskrywing van die verwantskap?',
          answer: `Ja — ʼn vierkant is ʼn ${or('spesiale geval')} binne die breër kategorie van reghoeke`,
          steps: [
            `${bl('Eienskappe van ʼn reghoek:')} 4 regte hoeke, oorstaande sye ewewydig en gelyk, diagonale gelyk en halveer mekaar.`,
            `${bl('Eienskappe van ʼn vierkant:')} 4 regte hoeke, ${or('al 4 sye gelyk')}, diagonale gelyk en halveer mekaar teen 90°.`,
            `${or('Kontroleer:')} Voldoen ʼn vierkant aan AL die eienskappe van ʼn reghoek? Ja — ʼn vierkant het 4 regte hoeke en oorstaande sye ewewydig en gelyk. Dit kwalifiseer as ʼn reghoek.`,
            `Die vierkant VOEG die addisionele voorwaarde by dat ${or('al 4 sye gelyk')} is, wat dit ʼn meer beperkte (spesiale) geval van ʼn reghoek maak.`,
            `<strong>Gevolgtrekking:</strong> Lerato is korrek. ʼn Vierkant is ʼn spesiale reghoek — elke vierkant is ʼn reghoek, maar nie elke reghoek is ʼn vierkant nie. ✓`,
          ],
        },
      ],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat die eienskappe van spesiale vierhoeke ondersoek, insluitend sye, hoeke en diagonale, met kleurgekodeerde bewysstappe en teenvoorbeelde',

      diagramPlaceholder:
        'Hiërargie-diagram wat die verwantskappe tussen spesiale vierhoeke wys, van parallelogram af tot by reghoek, ruit en vierkant, met sleuteleienskappe in blou gemerk en teenvoorbeelde in rooi uitgelig',
      diagramSvg:
        '<svg viewBox="0 0 320 244" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><text x="160" y="14" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Hiërargie van die vierhoekfamilie</text><g stroke="#2563eb" stroke-width="1.5"><line x1="160" y1="49" x2="50" y2="78" /><line x1="160" y1="49" x2="270" y2="78" /><line x1="160" y1="49" x2="160" y2="78" /><line x1="160" y1="104" x2="110" y2="143" /><line x1="160" y1="104" x2="215" y2="143" /><line x1="110" y1="169" x2="160" y2="208" /><line x1="215" y1="169" x2="160" y2="208" /></g><g fill="#eff6ff" stroke="#2563eb" stroke-width="2"><rect x="105" y="23" width="110" height="26" rx="6"/><rect x="10" y="78" width="80" height="26" rx="6"/><rect x="235" y="78" width="70" height="26" rx="6"/><rect x="105" y="78" width="110" height="26" rx="6"/><rect x="65" y="143" width="90" height="26" rx="6"/><rect x="175" y="143" width="80" height="26" rx="6"/></g><rect x="120" y="208" width="80" height="26" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><g fill="#1e3a8a" font-size="11" font-weight="700" text-anchor="middle"><text x="160" y="40">Vierhoek</text><text x="50" y="95">Trapesium</text><text x="270" y="95">Vlieër</text><text x="160" y="95">Parallelogram</text><text x="110" y="160">Reghoek</text><text x="215" y="160">Ruit</text></g><text x="160" y="225" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">Vierkant</text><text x="5" y="122" font-size="9" fill="#dc2626" font-weight="700">Nie elke parallelogram is ʼn reghoek of ruit nie —</text><text x="5" y="133" font-size="9" fill="#dc2626" font-weight="700">ʼn teenvoorbeeld weerlê die omgekeerde.</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — ALTERNATIVE DEFINITIONS OF POLYGONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'alternative-definitions-polygons',
      title: 'Alternatiewe Definisies van Veelhoeke',
      icon: '⬡',
      explanation:
        `<p style="margin-bottom:16px;">Baie veelhoeke kan op meer as een geldige manier gedefinieer word. Byvoorbeeld, die ${bl('standaarddefinisie')} van ʼn parallelogram is "ʼn vierhoek met beide pare oorstaande sye ewewydig", maar dit kan ook gedefinieer word as "ʼn vierhoek met beide pare oorstaande hoeke gelyk" — albei definisies beskryf presies dieselfde vorm, aangesien een ${or('alternatiewe definisie')} bewys kan word om die ander te impliseer deur ${gr('bekende meetkundige resultate')} te gebruik.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('standaarddefinisie')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('alternatiewe definisie')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('bewys wat hulle verbind')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Waarom alternatiewe definisies belangrik is</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Standaarddefinisies')} is die mees algemene beginpunt, maar ʼn ${or('alternatiewe definisie')} is net so geldig as dit bewys kan word om presies dieselfde stel vorms te beskryf.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">ʼn ${or('Alternatiewe definisie')} is geldig as en slegs as dit beide nodig ÉN voldoende is — elke vorm in die kategorie voldoen daaraan, en elke vorm wat daaraan voldoen, is in die kategorie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Die ${gr('bewys wat')} die ${bl('standaard-')} en ${or('alternatiewe')} definisies verbind, toon dat hulle logies ekwivalent is — elkeen impliseer die ander.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Algemene alternatiewe definisies</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin-bottom:8px;"><strong>Parallelogram</strong> — ${bl('Standaard:')} beide pare oorstaande sye ewewydig &nbsp;|&nbsp; ${or('Alternatief 1:')} beide pare oorstaande sye gelyk &nbsp;|&nbsp; ${or('Alternatief 2:')} beide pare oorstaande hoeke gelyk &nbsp;|&nbsp; ${or('Alternatief 3:')} diagonale halveer mekaar</p>` +
        `<p style="margin-bottom:8px;"><strong>Ruit</strong> — ${bl('Standaard:')} parallelogram met al 4 sye gelyk &nbsp;|&nbsp; ${or('Alternatief:')} vierhoek met diagonale wat mekaar teen regte hoeke halveer</p>` +
        `<p style="margin:0;"><strong>Reghoek</strong> — ${bl('Standaard:')} parallelogram met een regte hoek &nbsp;|&nbsp; ${or('Alternatief:')} parallelogram met gelyke diagonale</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Hoe om ʼn alternatiewe definisie te bekragtig</p>` +
        `<p style="margin:0;color:#14532d;">Toon dat ${bl('standaard → alternatief')} (elke vorm wat by die standaarddefinisie pas, pas ook by die alternatief) ÉN ${or('alternatief → standaard')} (elke vorm wat by die alternatief pas, pas ook by die standaard). As beide rigtings geld, is die definisies ${gr('ekwivalent')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "Toon dat 'ʼn vierhoek met diagonale wat mekaar teen regte hoeke halveer' ʼn alternatiewe definisie van ʼn ruit is.",
          answer: `Bevestig — dit is ʼn ${or('geldige alternatiewe definisie')} van ʼn ruit`,
          steps: [
            `${bl('Standaarddefinisie van ʼn ruit:')} ʼn Parallelogram met al vier sye gelyk.`,
            `${or('Alternatiewe definisie om te toets:')} ʼn Vierhoek waarvan die diagonale mekaar teen regte hoeke halveer.`,
            `${gr('Bewys — standaard impliseer alternatief:')} Laat ABCD ʼn ruit wees met diagonale AC en BD wat by O ontmoet. Aangesien ABCD ʼn parallelogram is, halveer die diagonale mekaar (AO = OC en BO = OD). Deur SSS-kongruensie te gebruik (AB = AD, AO = AO, BO = OD gedeel), △AOB ≡ △AOD, wat ∠AOB = ∠AOD = 90° gee. Die diagonale ontmoet dus teen regte hoeke. ✓`,
            `${gr('Bewys — alternatief impliseer standaard:')} Veronderstel nou ʼn vierhoek het diagonale wat mekaar teen regte hoeke halveer. Die halveer-eienskap beteken die teenoorstaande driehoeke wat gevorm word, is kongruent, wat oorstaande sye gelyk en ewewydig gee (parallelogram). Die regte-hoek-eienskap skep vier kongruente reghoekige driehoeke, wat al vier buitenste sye dwing om gelyk te wees. ✓`,
            `<strong>Gevolgtrekking:</strong> Albei rigtings geld, dus is die ${or('alternatiewe definisie')} ${gr('logies ekwivalent')} aan die ${bl('standaarddefinisie')}.`,
          ],
        },
        {
          question: "Thabo sê 'ʼn vierhoek met een paar oorstaande sye gelyk en ewewydig' is ʼn geldige alternatiewe definisie van ʼn parallelogram. Is hy korrek?",
          answer: `Ja — Thabo is ${gr('korrek')}`,
          steps: [
            `${bl('Standaarddefinisie van ʼn parallelogram:')} ʼn Vierhoek met beide pare oorstaande sye ewewydig.`,
            `${or('Voorgestelde alternatiewe definisie:')} ʼn Vierhoek met net een paar oorstaande sye wat beide gelyk ÉN ewewydig is.`,
            `${gr('Bewys:')} Laat ABCD ʼn vierhoek wees waar AB = CD en AB ∥ CD. Teken diagonaal BD. Aangesien AB ∥ CD, is verwisselende binnehoeke ∠ABD = ∠CDB (AB ∥ CD, BD snylyn). AB = CD is gegee, en BD is ʼn gedeelde sy, dus △ABD ≡ △CDB deur SHS.`,
            `Vanuit die kongruensie: AD = BC en ∠ADB = ∠CBD. Aangesien ∠ADB = ∠CBD verwisselende binnehoeke is met BD as snylyn, volg dit dat AD ∥ BC.`,
            `Beide pare oorstaande sye is nou ewewydig, wat aan die ${bl('standaard parallelogramdefinisie')} voldoen. ✓`,
            `<strong>Gevolgtrekking:</strong> Thabo is korrek — die ${or('alternatiewe definisie')} is geldig en ekwivalent aan die ${bl('standaarddefinisie')}.`,
          ],
        },
      ],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat verduidelik hoe standaard- en alternatiewe definisies van spesiale vierhoeke as ekwivalent bewys word deur geometriese redenering',

      diagramPlaceholder:
        'Diagram wat ʼn ruit wys met die standaarddefinisie in blou gemerk en die alternatiewe definisie (diagonale wat mekaar teen regte hoeke halveer) in oranje gemerk, met die bewys wat hulle verbind in groen aangedui',
      diagramSvg:
        '<svg viewBox="0 0 220 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><polygon points="110,20 170,100 110,180 50,100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="180" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><line x1="50" y1="100" x2="170" y2="100" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><path d="M 110,92 L 118,92 L 118,100" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="136" y1="63" x2="144" y2="57" stroke="#2563eb" stroke-width="2"/><line x1="136" y1="137" x2="144" y2="143" stroke="#2563eb" stroke-width="2"/><line x1="84" y1="137" x2="76" y2="143" stroke="#2563eb" stroke-width="2"/><line x1="84" y1="63" x2="76" y2="57" stroke="#2563eb" stroke-width="2"/><text x="110" y="12" font-size="12" fill="#374151" font-weight="700" text-anchor="middle">A</text><text x="180" y="104" font-size="12" fill="#374151" font-weight="700">B</text><text x="110" y="196" font-size="12" fill="#374151" font-weight="700" text-anchor="middle">C</text><text x="34" y="104" font-size="12" fill="#374151" font-weight="700">D</text><text x="118" y="112" font-size="11" fill="#374151" font-weight="700">O</text><text x="10" y="198" font-size="7.5" fill="#2563eb" font-weight="700">Standaard: al 4 sye gelyk (blou kepies)</text><text x="10" y="212" font-size="7.5" fill="#ea580c" font-weight="700">Alternatief: diagonale ⊥ en halveer by O</text><text x="10" y="226" font-size="7.5" fill="#16a34a" font-weight="700">Bewys (SSS-kongruensie) wys albei is ekwivalent</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — PROVING GEOMETRIC CONJECTURES AND DISPROVING FALSE ONES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'proving-disproving-conjectures',
      title: 'Bewys van Meetkundige Vermoedens en Weerlegging van Vals Vermoedens',
      icon: '🔍',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer ons meetkundige eienskappe ondersoek, formuleer ons ${bl('vermoedens')} gebaseer op patrone wat ons waarneem. Ons ${gr('bekragtig (bewys)')} hulle dan deur logiese meetkundige redenasie te gebruik, of ons ${re('weerlê')} hulle deur ʼn teenvoorbeeld te vind — ʼn enkele spesifieke geval waar die vermoede faal. Die ${or('toetsproses')} behels die teken van voorbeelde, meet, redenasie oor eienskappe, en die toepassing van bekende stellings.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vermoede gestel')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('toetsproses')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gevolgtrekking: bewys')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('gevolgtrekking: weerlê')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn meetkundige vermoede te toets</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Stel die vermoede duidelik')} — skryf presies neer wat jy glo waar is voordat jy toets.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Toets met verskeie voorbeelde')} — teken verskeie verskillende gevalle, meet en soek na ʼn patroon.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3a</span>` +
        `<p style="margin:0;font-size:14px;"><strong>As jy ʼn geval vind waar dit faal:</strong> Het jy ʼn ${re('teenvoorbeeld')} — die vermoede is ${re('WEERLÊ')}. Hou hier op; een teenvoorbeeld is voldoende.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3b</span>` +
        `<p style="margin:0;font-size:14px;"><strong>As alle voorbeelde geld:</strong> Bou ʼn ${gr('formele bewys')} met behulp van bekende stellings en logiese redenasie. Voorbeelde alleen is nie genoeg om ʼn vermoede te ${gr('bewys')} nie.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Bewys vs teenvoorbeeld</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn ${re('Teenvoorbeeld')} weerlê met EEN geval. ʼn ${gr('Bewys')} moet ALLE moontlike gevalle dek — dit vereis logiese redenasie, nie net metings nie. "Ek het 10 vorms geteken en dit het gewerk" is nooit ʼn bewys nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "Amahle vermoed dat 'alle vierhoeke met een paar ewewydige sye gelyke diagonale het'. Toets hierdie vermoede met ʼn trapesium.",
          answer: `Die vermoede is ${re('VALS')} — weerlê deur ʼn teenvoorbeeld`,
          steps: [
            `${bl('Vermoede gestel:')} Alle vierhoeke met een paar ewewydige sye (trapesiums) het gelyke diagonale.`,
            `${or('Toetsproses:')} Teken ʼn algemene (nie-gelykbenige) trapesium ABCD waar AB ∥ CD maar AD ≠ BC. Meet albei diagonale AC en BD.`,
            `${re('Teenvoorbeeld:')} Trapesium met A(0,0), B(6,0), C(5,3), D(2,3). Diagonaal AC = √(25+9) = √34 ≈ 5,83. Diagonaal BD = √(16+9) = 5. Hierdie is ongelyk, dus is Amahle se vermoede vals.`,
            `ʼn Algemene (skalene) trapesium het ${re('ongelyke diagonale')}, wat ʼn duidelike teenvoorbeeld verskaf.`,
            `<strong>Gevolgtrekking:</strong> ${re('Die vermoede word weerlê.')} Slegs ʼn gelykbenige trapesium (waar die nie-ewewydige sye gelyk is) het gelyke diagonale — dit is ʼn spesiale geval, nie die algemene reël nie.`,
          ],
        },
        {
          question: "Sipho vermoed dat 'die diagonale van ʼn vlieër altyd loodreg is'. Ondersoek en bevestig of weerlê hierdie vermoede.",
          answer: `Die vermoede is ${gr('WAAR')} — die diagonale van ʼn vlieër is altyd loodreg`,
          steps: [
            `${bl('Vermoede gestel:')} Die diagonale van enige vlieër sny mekaar teen 90°.`,
            `${or('Toetsproses:')} Teken verskeie vlieërs van verskillende vorms en groottes. Meet in elke geval die hoek waarteen die diagonale mekaar sny.`,
            `${or('Waarnemings:')} Elke vlieër wat getoets word, toon ʼn hoek van 90° by die snypunt van die diagonale — die patroon geld deurgaans.`,
            `${gr('Formele bewys:')} ʼn Vlieër ABCD het AB = AD en CB = CD. Die hoofdiagonaal AC is ʼn simmetrielyn vir die vlieër. As gevolg van hierdie simmetrie is B en D spieëlbeelde van mekaar oor AC. Die diagonaal BD sny AC dus teen regte hoeke (dit is loodreg op die simmetrie-as).`,
            `Meer formeel: △ABC ≡ △ADC (SSS, aangesien AB = AD, CB = CD, AC gedeel). Daarom is ∠BAO = ∠DAO, wat beteken AO halveer ∠BAD. In △ABO en △ADO is AO gemeenskaplik, AB = AD, en ∠BAO = ∠DAO, dus deur SHS △ABO ≡ △ADO. Daarom is ∠AOB = ∠AOD. Aangesien ∠AOB + ∠AOD = 180°, is elkeen gelyk aan 90°. ✓`,
            `<strong>Gevolgtrekking:</strong> ${gr('Die vermoede word bewys.')} Die diagonale van ʼn vlieër sny mekaar altyd teen regte hoeke.`,
          ],
        },
      ],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat demonstreer hoe om geometriese vermoedens oor vierhoeke te stel, te toets en óf te bewys óf te weerlê deur teenvoorbeelde en logiese bewyse te gebruik',

      diagramPlaceholder:
        'Diagram wat ʼn gelykbenige driehoek wys met die gelyke sye blou gemerk vir die gestelde vermoede, en dan die twee basishoeke groen boog-gemerk om te wys die getoetste vermoede is bewys gelyk',
      diagramSvg:
        '<svg viewBox="0 0 240 210" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><polygon points="120,20 40,150 200,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75.7" y1="82.4" x2="84.3" y2="87.6" stroke="#2563eb" stroke-width="2"/><line x1="154.9" y1="81.9" x2="165.1" y2="88.1" stroke="#2563eb" stroke-width="2"/><path d="M 58,150 A 18,18 0 0 1 49.43,134.67" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 182,150 A 18,18 0 0 0 190.57,134.67" fill="none" stroke="#16a34a" stroke-width="2"/><text x="120" y="14" font-size="12" fill="#374151" font-weight="700" text-anchor="middle">A</text><text x="26" y="158" font-size="12" fill="#374151" font-weight="700">B</text><text x="206" y="158" font-size="12" fill="#374151" font-weight="700">C</text><text x="62" y="132" font-size="12" fill="#16a34a" font-weight="700">∠B</text><text x="168" y="132" font-size="12" fill="#16a34a" font-weight="700">∠C</text><text x="10" y="176" font-size="9" fill="#2563eb" font-weight="700">Vermoede: as AB = AC (blou kepies)...</text><text x="10" y="190" font-size="9" fill="#ea580c" font-weight="700">Toets: meet hoek B en hoek C</text><text x="10" y="204" font-size="7.5" fill="#16a34a" font-weight="700">Bewys: hoek B = hoek C (gelykbenige driehoek)</text></svg>',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    { difficulty: 'Easy', question: 'Twee driehoeke het identiese hoeke maar verskillende sylengtes. Is hulle gelykvormig of kongruent?', checkMode: 'auto', options: ['gelykvormig', 'kongruent', 'beide gelykvormig en kongruent', 'nóg gelykvormig nóg kongruent'], correctIndex: 0, explanation: 'Dieselfde hoeke maar verskillende sylengtes beteken die driehoeke het dieselfde vorm maar ʼn ander grootte — dit is die definisie van gelykvormigheid. Kongruensie vereis beide gelyke hoeke ÉN gelyke sye.' },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    { difficulty: 'Medium', question: 'Twee driehoeke het dieselfde hoeke ÉN dieselfde sylengtes. Is hulle gelykvormig, kongruent, of albei?', checkMode: 'auto', options: ['slegs gelykvormig', 'beide gelykvormig en kongruent', 'slegs kongruent', 'geeneen nie'], correctIndex: 1, explanation: 'Gelyke hoeke voldoen aan die gelykvormigheidsvoorwaarde; gelyke sye voldoen bykomend aan die kongruensievoorwaarde. Aangesien kongruente driehoeke outomaties gelyke hoeke het, is hulle beide gelykvormig en kongruent.' },

    // ── Q3 Hard ───────────────────────────────────────────────────────────────
    { difficulty: 'Hard', question: 'Sipho sê alle kongruente driehoeke is ook gelykvormig, maar nie alle gelykvormige driehoeke is kongruent nie. Is hy korrek? Verduidelik.', checkMode: 'auto', options: ['Nee — ʼn kongruente driehoek hoef nie gelyke hoeke te hê nie', 'Nee — gelykvormigheid vereis gelyke sye, nie gelyke hoeke nie', 'Ja — kongruente driehoeke voldoen outomaties aan die gelyke-hoek-voorwaarde vir gelykvormigheid, maar gelykvormige driehoeke hoef nie gelyke sye te hê nie', 'Ja, maar slegs wanneer die driehoeke reghoekig is'], correctIndex: 2, explanation: 'Kongruente driehoeke het gelyke hoeke ÉN gelyke sye, dus voldoen hulle outomaties aan die gelykvormigheidsvoorwaarde (gelyke hoeke). Gelykvormige driehoeke vereis slegs gelyke hoeke, dus kan hulle sye in grootte verskil — wat beteken gelykvormige driehoeke hoef nie kongruent te wees nie.' },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    { difficulty: 'Easy', question: 'Is die diagonale van ʼn algemene parallelogram altyd gelyk?', checkMode: 'auto', options: ['Ja, altyd', 'Slegs as die parallelogram ʼn ruit is', 'Slegs as die parallelogram ʼn vlieër is', 'Nee, nie altyd nie — slegs reghoeke het gelyke diagonale'], correctIndex: 3, explanation: 'Slegs reghoeke (en vierkante) onder parallelogramme het gelyke diagonale. ʼn Algemene parallelogram met nie-regte hoeke het diagonale van verskillende lengtes.' },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    { difficulty: 'Medium', question: 'Watter addisionele eienskap moet ʼn parallelogram hê sodat sy diagonale gelyk is?', checkMode: 'auto', options: ['Dit moet vier regte hoeke hê (ʼn reghoek wees)', 'Dit moet vier gelyke sye hê (ʼn ruit wees)', 'Dit moet slegs een paar sye ewewydig hê (ʼn trapesium wees)', 'Dit moet loodregte diagonale hê'], correctIndex: 0, explanation: 'ʼn Parallelogram het gelyke diagonale as en slegs as al vier hoeke regte hoeke is — wat dit ʼn reghoek maak. Gelyke diagonale is ʼn direkte gevolg van die regte-hoek-eienskap.' },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    { difficulty: 'Hard', question: "Lerato sê die diagonale van elke ruit halveer mekaar teen regte hoeke. Is dit altyd waar? Verduidelik met behulp van die ruit se eienskappe.", checkMode: 'auto', options: ['Nee — dit geld slegs vir vierkante, nie algemene ruite nie', 'Ja — die vier gelyke sye skep kongruente driehoeke wat die diagonale dwing om teen regte hoeke te ontmoet', 'Nee — ʼn ruit se diagonale halveer mekaar maar ontmoet nooit teen regte hoeke nie', 'Ja, maar slegs as die ruit ook ʼn reghoek is'], correctIndex: 1, explanation: "Dit is ʼn bewese eienskap van alle ruite: die diagonale skep vier driehoeke met sye gelyk aan die ruit se vier gelyke sye. Deur SSS-kongruensie is driehoek AOB ≡ driehoek AOD, dus ∠AOB = ∠AOD, en aangesien hulle aanvullend is, moet elkeen 90° wees." },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    { difficulty: 'Medium', question: 'Gee die standaarddefinisie van ʼn parallelogram.', checkMode: 'auto', options: ['ʼn Vierhoek met een paar oorstaande sye ewewydig', 'ʼn Vierhoek met vier gelyke sye', 'ʼn Vierhoek met beide pare oorstaande sye ewewydig', 'ʼn Vierhoek met vier regte hoeke'], correctIndex: 2, explanation: 'Die standaarddefinisie van ʼn parallelogram vereis dat beide pare oorstaande sye ewewydig is. Dit is die minimum voorwaarde wat ʼn parallelogram van ander vierhoeke onderskei.' },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    { difficulty: 'Hard', question: 'Gee ʼn alternatiewe definisie van ʼn parallelogram deur hoeke in plaas van sye te gebruik.', checkMode: 'auto', options: ['ʼn Vierhoek waarin al vier hoeke gelyk is', 'ʼn Vierhoek waarin een paar oorstaande hoeke gelyk is', 'ʼn Vierhoek waarin opeenvolgende hoeke gelyk is', 'ʼn Vierhoek waarin beide pare oorstaande hoeke gelyk is'], correctIndex: 3, explanation: 'Aangesien oorstaande hoeke van ʼn parallelogram altyd gelyk is, is ʼn ekwivalente definisie: ʼn vierhoek waarin beide pare oorstaande hoeke gelyk is.' },

    // ── Q9 Hard ───────────────────────────────────────────────────────────────
    { difficulty: 'Hard', question: "Thabo sê 'ʼn vierhoek met diagonale wat mekaar halveer' is voldoende om ʼn parallelogram te definieer. Is hy korrek? Verduidelik.", checkMode: 'auto', options: ['Ja — as die diagonale mekaar halveer, bewys dit alleen dat beide pare oorstaande sye ewewydig is', 'Nee — halverende diagonale waarborg slegs ʼn vlieër, nie ʼn parallelogram nie', 'Nee — die diagonale moet ook gelyk wees vir dit om te geld', 'Ja, maar slegs as die diagonale ook loodreg is'], correctIndex: 0, explanation: 'As die diagonale van ʼn vierhoek mekaar halveer, gee die oorstaande hoeke by die snypunt saam met die gehalveerde segmente kongruente driehoeke deur SHS, wat beide pare oorstaande sye dwing om ewewydig te wees — wat aan die parallelogramdefinisie voldoen.' },

    // ── Q10 Medium ────────────────────────────────────────────────────────────
    { difficulty: 'Medium', question: 'Amahle vermoed dat alle reghoeke vierkante is. Vind ʼn teenvoorbeeld om dit te weerlê.', checkMode: 'auto', options: ['ʼn Reghoek van 5 cm by 5 cm, aangesien al sy sye gelyk is', 'ʼn Reghoek van 4 cm by 6 cm — dit het vier regte hoeke maar sy sye is nie almal gelyk nie, dus is dit nie ʼn vierkant nie', 'Daar is geen teenvoorbeeld nie — alle reghoeke is vierkante', 'ʼn Ruit met ongelyke diagonale'], correctIndex: 1, explanation: 'ʼn Reghoek waar lengte ≠ breedte, bv. ʼn reghoek van 4 cm by 6 cm, het vier regte hoeke (wat dit ʼn reghoek maak) maar sy sye is nie almal gelyk nie (dus is dit nie ʼn vierkant nie).' },

    // ── Q11 Hard ──────────────────────────────────────────────────────────────
    { difficulty: 'Hard', question: "Ondersoek of die vermoede 'alle vlieërs het ten minste een paar gelyke hoeke' waar is, en verduidelik jou redenasie.", checkMode: 'auto', options: ['Nee — vlieërs het nooit gelyke oorstaande hoeke nie', 'Nee — slegs vierkante onder vlieërs het gelyke hoeke', 'Ja — die simmetrielyn verdeel die vlieër in twee kongruente driehoeke, wat een paar gelyke oorstaande hoeke gee', 'Ja, maar slegs as die vlieër ook ʼn ruit is'], correctIndex: 2, explanation: 'ʼn Vlieër het een paar oorstaande hoeke gelyk (tussen die twee pare aangrensende gelyke sye), wat bewys kan word deur die simmetrielyn te gebruik wat die vlieër in twee kongruente driehoeke verdeel.' },

    // ── Q12 Medium ────────────────────────────────────────────────────────────
    { difficulty: 'Medium', question: 'Sipho sê ʼn trapesium het altyd gelyke diagonale. Gee ʼn teenvoorbeeld.', checkMode: 'auto', options: ['ʼn Gelykbenige trapesium, aangesien sy diagonale altyd ongelyk is', 'ʼn Vierkant, aangesien dit ʼn spesiale trapesium met ongelyke diagonale is', 'Daar is geen teenvoorbeeld nie — alle trapesiums het gelyke diagonale', 'ʼn Algemene (nie-gelykbenige) trapesium — sy diagonale is tipies ongelyk; slegs gelykbenige trapesiums het gelyke diagonale'], correctIndex: 3, explanation: 'ʼn Algemene (nie-gelykbenige) trapesium het tipies ongelyke diagonale; slegs gelykbenige trapesiums het gelyke diagonale, wat die algemene vermoede vals maak.' },

    // ── Q13 Hard ──────────────────────────────────────────────────────────────
    { difficulty: 'Hard', question: 'Bewys dat as ʼn vierhoek een paar oorstaande sye het wat beide gelyk en ewewydig is, dit ʼn parallelogram moet wees.', checkMode: 'auto', options: ['Die diagonaal wat die ander twee hoekpunte verbind skep twee kongruente driehoeke (SHS), wat die oorblywende paar sye dwing om ook gelyk en ewewydig te wees', 'Dit kan nie bewys word nie — dit is slegs waar vir reghoeke', 'Die diagonaal skep twee gelykvormige (nie kongruente) driehoeke, wat onvoldoende is om te bewys dat dit ʼn parallelogram is', 'Dit is slegs waar as die gelyk-en-ewewydige sypaar ook loodreg op die ander paar is'], correctIndex: 0, explanation: 'As een paar sye gelyk en ewewydig is, skep die diagonaal wat die ander twee hoekpunte verbind twee kongruente driehoeke (deur SHS), wat die ander paar sye dwing om ook gelyk en ewewydig te wees.' },

    // ── Q14 Medium ────────────────────────────────────────────────────────────
    { difficulty: 'Medium', question: 'Gee twee eienskappe wat ʼn vierkant van ʼn algemene ruit onderskei.', checkMode: 'auto', options: ['ʼn Vierkant het vier gelyke sye en diagonale wat mekaar halveer', 'ʼn Vierkant het vier regte hoeke en gelyke diagonale', 'ʼn Vierkant het diagonale wat mekaar teen regte hoeke halveer, net soos ʼn ruit', 'ʼn Vierkant het een paar ewewydige sye en vier gelyke sye'], correctIndex: 1, explanation: 'ʼn Ruit het vier gelyke sye maar sy hoeke hoef nie 90° te wees nie. ʼn Vierkant voeg die vereiste van vier regte hoeke by, wat ook die diagonale dwing om gelyk in lengte te wees — wat dit van ʼn algemene ruit onderskei.' },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    { difficulty: 'Hard', question: "Lerato vermoed dat 'die diagonale van ʼn vlieër altyd mekaar halveer'. Ondersoek dit vir ʼn algemene vlieër en stel jou gevolgtrekking.", checkMode: 'auto', options: ['Waar — albei diagonale van elke vlieër halveer mekaar', 'Waar, maar slegs vir vlieërs wat ook vierkante is', 'Vals — slegs een diagonaal word deur die ander gehalveer; albei diagonale halveer mekaar slegs as die vlieër ook ʼn ruit is', 'Vals — geeneen van die diagonale van ʼn vlieër word ooit gehalveer nie'], correctIndex: 2, explanation: 'Dit is oor die algemeen vals — slegs een diagonaal van ʼn vlieër word deur die ander gehalveer; die diagonale van ʼn vlieër halveer nie albei mekaar nie, tensy dit ook ʼn ruit is.' },

    // ── Q16 Hard ──────────────────────────────────────────────────────────────
    { difficulty: 'Hard', question: 'Thabo sê twee driehoeke met twee pare gelyke hoeke moet gelykvormig wees. Is hy korrek? Verduidelik.', checkMode: 'auto', options: ['Nee — drie pare gelyke hoeke word vereis, nie twee nie', 'Nee — gelyke hoeke alleen waarborg nooit gelykvormigheid nie', 'Ja, maar slegs as die driehoeke ook reghoekig is', 'Ja — as twee hoeke ooreenstem, moet die derde hoek ook ooreenstem (hoeke tel op tot 180°), wat aan die HH-gelykvormigheidsvoorwaarde voldoen'], correctIndex: 3, explanation: 'As twee hoeke ooreenstem, moet die derde hoek ook ooreenstem (aangesien hoeke optel tot 180°), wat aan die HH-gelykvormigheidsvoorwaarde voldoen.' },

    // ── Q17 Hard ──────────────────────────────────────────────────────────────
    { difficulty: 'Hard', question: "Gee ʼn bewys of weerlegging vir die vermoede: 'alle vierhoeke met loodregte diagonale is vlieërs'.", checkMode: 'auto', options: ['Vals — ʼn vierkant het ook loodregte diagonale, maar loodregte diagonale alleen waarborg nie die aangrensende-gelyke-sy-pare-eienskap wat ʼn vlieër streng definieer nie', 'Waar — loodregte diagonale is die definiërende eienskap van ʼn vlieër, dus geld dit altyd', 'Vals — geen vierhoek met loodregte diagonale kan ooit ʼn vlieër wees nie', 'Waar, maar slegs vir onreëlmatige vierhoeke'], correctIndex: 0, explanation: "Dit is vals — ʼn vierkant het ook loodregte diagonale maar word nie spesifiek as ʼn vlieër geklassifiseer nie; meer presies, om net loodregte diagonale te hê waarborg nie die aangrensende-sy-pare-eienskap wat ʼn vlieër streng definieer nie." },

    // ── Q18 Hard ──────────────────────────────────────────────────────────────
    { difficulty: 'Hard', question: "Amahle ondersoek of 'ʼn vierhoek met een regte hoek altyd ʼn reghoek is'. Vind ʼn teenvoorbeeld.", checkMode: 'auto', options: ['ʼn Vierkant, aangesien dit vier regte hoeke het', 'ʼn Reghoekige trapesium — dit het een regte hoek maar is nie ʼn reghoek nie, aangesien nie al vier hoeke 90° is nie', 'Daar is geen teenvoorbeeld nie — een regte hoek maak altyd ʼn reghoek', 'ʼn Ruit met een regte hoek, wat outomaties ʼn vierkant is'], correctIndex: 1, explanation: 'ʼn Reghoekige trapesium het een regte hoek maar is nie ʼn reghoek nie, aangesien nie al vier hoeke 90° is nie.' },

    // ── Q19 Hard ──────────────────────────────────────────────────────────────
    { difficulty: 'Hard', question: 'Gee die alternatiewe definisie van ʼn ruit gebaseer op sy diagonale.', checkMode: 'auto', options: ['ʼn Vierhoek waarvan die diagonale gelyk in lengte is', 'ʼn Vierhoek waarvan die diagonale slegs mekaar halveer (nie noodwendig teen regte hoeke nie)', 'ʼn Vierhoek waarvan die diagonale mekaar teen regte hoeke halveer', 'ʼn Vierhoek waarvan die diagonale loodreg is maar nie noodwendig halveer nie'], correctIndex: 2, explanation: 'Dit is ʼn geldige alternatiewe definisie van ʼn ruit — ekwivalent aan die standaarddefinisie (ʼn parallelogram met al vier sye gelyk). Albei definisies beskryf presies dieselfde stel vorms.' },

    // ── Q20 Hard ──────────────────────────────────────────────────────────────
    { difficulty: 'Hard', question: 'Sipho sê om ʼn vermoede met vyf verskillende voorbeelde te bewys is genoeg om dit as altyd waar vas te stel. Is hy korrek? Verduidelik waarom of waarom nie.', checkMode: 'auto', options: ['Ja — vyf voorbeelde word oor die algemeen as voldoende bewys in meetkunde aanvaar', 'Ja, maar slegs as die vyf voorbeelde ʼn teenvoorbeeld insluit', 'Nee — vyf voorbeelde mag genoeg wees, maar tien voorbeelde sal dit beslis bewys', 'Nee — spesifieke voorbeelde vorm nooit ʼn algemene bewys nie; ʼn formele bewys met gevestigde eienskappe en logiese redenasie word vereis'], correctIndex: 3, explanation: 'Verskeie spesifieke voorbeelde wat ʼn vermoede ondersteun, is nie ʼn algemene bewys nie; ʼn formele meetkundige bewys met gevestigde eienskappe en logiese redenasie word vereis om ʼn vermoede vir alle gevalle waar te bewys.' },
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-3):   Gelykvormigheid vs kongruensie klassifikasie             — abstrak, geen diagram
    // Blok 2 (4-6):   Spesiale vierhoek eienskap herroeping                   — abstrak, geen diagram
    // Blok 3 (7-10):  Parallelogram / reghoek / ruit ontbrekende waarde        — BENODIG DIAGRAM (7,8,9,10)
    // Blok 4 (11-13): Vlieër / trapesium ontbrekende waarde                   — BENODIG DIAGRAM (11,12,13)
    // Blok 5 (14-16): Alternatiewe definisies / vermoede-redenasie            — abstrak, geen diagram
    // Blok 6 (17-19): Gelykvormige driehoek eweredige sye                     — BENODIG DIAGRAM (17)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Gelykvormigheid vs kongruensie klassifikasie (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Driehoek PQR het hoeke 45°, 55°, 80°. Driehoek XYZ het hoeke 45°, 55°, 80° maar verskillende sylengtes. Is die driehoeke gelykvormig, kongruent, of albei?', checkMode: 'auto', options: ['gelykvormig', 'kongruent', 'albei', 'geeneen nie'], correctIndex: 0, explanation: 'Die ooreenstemmende hoeke is gelyk, maar die sye verskil in lengte, dus is die driehoeke dieselfde vorm maar nie dieselfde grootte nie — dit is gelykvormigheid, nie kongruensie nie.' },
        { difficulty: 'Easy', question: 'Twee driehoeke het presies dieselfde drie sylengtes: 6 cm, 8 cm en 10 cm elk. Is die driehoeke gelykvormig, kongruent, of albei?', checkMode: 'auto', options: ['slegs gelykvormig', 'beide gelykvormig en kongruent', 'slegs kongruent', 'geeneen nie'], correctIndex: 1, explanation: 'Gelyke ooreenstemmende sye (SSS) beteken die driehoeke is kongruent. Kongruente driehoeke het outomaties ook gelyke hoeke, dus is hulle ook gelykvormig — die driehoeke is albei.' },
        { difficulty: 'Medium', question: 'Driehoek DEF het hoeke van 50° en 70°. Driehoek GHI het hoeke van 50° en 60°. Verduidelik of die twee driehoeke gelykvormig kan wees.', checkMode: 'auto', options: ['Nee — die driehoeke het verskillende hoekstelle aangesien die derde hoeke onderskeidelik 60° en 70° is', 'Nee — omdat die hoeke in ʼn ander volgorde gelys is, is die driehoeke nie vergelykbaar nie', 'Ja — albei driehoeke het dieselfde drie hoeke, 50°, 60° en 70°, sodra die ontbrekende derde hoek vir elkeen bereken word', 'Kan nie bepaal word sonder om die sylengtes te ken nie'], correctIndex: 2, explanation: 'Die derde hoek van driehoek DEF is 180° − 50° − 70° = 60°, wat hoeke 50°, 70°, 60° gee. Die derde hoek van driehoek GHI is 180° − 50° − 60° = 70°, wat hoeke 50°, 60°, 70° gee. Albei driehoeke het eintlik dieselfde drie hoeke (50°, 60°, 70°), dus is hulle WEL gelykvormig.' },
        { difficulty: 'Medium', question: 'Nomsa sê as twee driehoeke dieselfde oppervlakte het, moet hulle gelykvormig wees. Is sy korrek? Verduidelik met ʼn teenvoorbeeld.', checkMode: 'auto', options: ['Ja — gelyke oppervlakte impliseer altyd gelyke hoeke', 'Ja, maar slegs vir reghoekige driehoeke', 'Nee — maar geen teenvoorbeeld kan vir hierdie spesifieke bewering gevind word nie', 'Nee — ʼn driehoek met basis 4 cm, hoogte 6 cm (oppervlakte 12 cm²) en een met basis 8 cm, hoogte 3 cm (oppervlakte 12 cm²) kan heeltemal verskillende hoeke en sy-verhoudings hê'], correctIndex: 3, explanation: 'ʼn Driehoek met basis 4 cm en hoogte 6 cm het oppervlakte ½ × 4 × 6 = 12 cm². ʼn Heeltemal ander driehoek met basis 8 cm en hoogte 3 cm het ook oppervlakte ½ × 8 × 3 = 12 cm². Hierdie driehoeke kan heeltemal verskillende hoeke en sy-verhoudings hê, dus waarborg gelyke oppervlakte nie gelykvormigheid nie.' },

        // Blok 2 — Spesiale vierhoek eienskap herroeping (Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Gee een eienskap van die diagonale van ʼn reghoek wat ʼn algemene parallelogram nie noodwendig het nie.', checkMode: 'auto', options: ['Die diagonale is gelyk in lengte', 'Die diagonale halveer mekaar', 'Die diagonale is loodreg', 'Die diagonale halveer die hoekpunthoeke'], correctIndex: 0, explanation: 'Beide ʼn reghoek en ʼn algemene parallelogram het diagonale wat mekaar halveer, maar slegs ʼn reghoek (weens sy regte hoeke) waarborg diagonale van gelyke lengte.' },
        { difficulty: 'Medium', question: 'ʼn Ruit het diagonale wat mekaar teen regte hoeke halveer. Stel of hierdie eienskap ook op ʼn algemene parallelogram van toepassing is, en verduidelik waarom of waarom nie.', checkMode: 'auto', options: ['Ja — alle parallelogramme het loodregte, halverende diagonale', 'Nee — ʼn algemene parallelogram se diagonale halveer mekaar maar ontmoet nie noodwendig teen regte hoeke nie; die loodregtheid volg slegs uit die ruit se vier gelyke sye', 'Ja, maar slegs as die parallelogram ten minste een regte hoek het', 'Nee — ʼn algemene parallelogram se diagonale halveer nooit mekaar nie'], correctIndex: 1, explanation: 'In ʼn algemene parallelogram halveer die diagonale mekaar, maar hulle ontmoet nie noodwendig teen regte hoeke nie. Die loodregte snyding vind slegs plaas omdat ʼn ruit vier gelyke sye het, wat die driehoeke wat deur die diagonale gevorm word, dwing om kongruent te wees.' },
        { difficulty: 'Medium', question: 'Verduidelik waarom elke vierkant ook as ʼn vlieër geklassifiseer word, deur die definisie van ʼn vlieër (twee pare aangrensende gelyke sye) te gebruik.', checkMode: 'auto', options: ['Nee — ʼn vierkant kan nie ʼn vlieër wees nie, want ʼn vlieër moet presies twee onderskeie sylengtes hê', 'Nee — die vlieër-definisie vereis slegs loodregte diagonale, wat niks met sye te doen het nie', 'Ja — ʼn vierkant het al vier sye gelyk, dus het dit triviaal twee pare aangrensende gelyke sye, wat aan die vlieër-definisie voldoen', 'Ja, maar slegs as die vierkant se diagonale ongelyk is'], correctIndex: 2, explanation: 'ʼn Vierkant het al vier sye gelyk, dus het dit triviaal twee pare aangrensende sye wat gelyk is (trouens, al vier sye is gelyk). Dit voldoen aan die vlieër-definisie, dus is ʼn vierkant ʼn spesiale geval van ʼn vlieër.' },

        // Blok 3 — Parallelogram / reghoek / ruit ontbrekende waarde (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In parallelogram ABCD is hoek A = 60°. Aangesien opeenvolgende hoeke in ʼn parallelogram supplementêr is, bepaal die grootte van hoek B.', checkMode: 'auto', options: ['60°', '90°', '150°', '120°'], correctIndex: 3, explanation: 'Opeenvolgende (mede-binne) hoeke in ʼn parallelogram is supplementêr — hulle tel op tot 180°. Hoek B = 180° − 60° = 120°.' },
        { difficulty: 'Medium', question: 'Reghoek ABCD het lengte AB = 12 cm en breedte BC = 5 cm. Bepaal die lengte van diagonaal AC.', checkMode: 'auto', options: ['13 cm', '17 cm', '8,5 cm', '60 cm'], correctIndex: 0, explanation: 'Die diagonaal van ʼn reghoek kan met die Stelling van Pythagoras bereken word, aangesien die sye teen 90° ontmoet. AC² = AB² + BC² = 12² + 5² = 144 + 25 = 169, dus AC = √169 = 13 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="50" width="160" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="140" x2="190" y2="50" stroke="#ea580c" stroke-width="2"/><path d="M 30,128 L 42,128 L 42,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 190,128 L 178,128 L 178,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 30,62 L 42,62 L 42,50" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 190,62 L 178,62 L 178,50" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="20" y="154" font-size="12" fill="#374151" font-weight="600">A</text><text x="194" y="154" font-size="12" fill="#374151" font-weight="600">B</text><text x="194" y="44" font-size="12" fill="#374151" font-weight="600">C</text><text x="20" y="44" font-size="12" fill="#374151" font-weight="600">D</text><text x="110" y="156" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="206" y="95" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="124" y="89" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Ruit ABCD het sylengte 10 cm. Sy diagonale halveer mekaar teen regte hoeke by punt O, met AO = OC = 6 cm. Bepaal die volle lengte van diagonaal BD.', checkMode: 'auto', options: ['12 cm', '16 cm', '8 cm', '20 cm'], correctIndex: 1, explanation: 'Driehoek AOB is reghoekig by O met skuinssy AB = 10 cm en een sy AO = 6 cm. OB² = AB² − AO² = 10² − 6² = 100 − 36 = 64, dus OB = 8 cm. Aangesien die diagonaal gehalveer word, BD = 2 × OB = 2 × 8 = 16 cm.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="45,90 110,160 175,90 110,20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="90" x2="175" y2="90" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="110" y1="160" x2="110" y2="20" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><path d="M 100,90 L 100,80 L 110,80" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="35" y="94" font-size="12" fill="#374151" font-weight="600">A</text><text x="110" y="178" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="185" y="94" font-size="12" fill="#374151" font-weight="600">C</text><text x="110" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="118" y="74" font-size="11" fill="#374151" font-weight="600">O</text><text x="63.5" y="131" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="77.5" y="106" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="128" y="145" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Parallelogram ABCD het AB = 9 cm, BC = 6 cm, en hoek A = 70°. Hoek B is supplementêr tot hoek A. Bepaal die grootte van hoek C.', checkMode: 'auto', options: ['110°', '180°', '70°', '140°'], correctIndex: 2, explanation: 'In ʼn parallelogram is oorstaande hoeke gelyk. Hoek C is oorstaande hoek A, dus hoek C = hoek A = 70°. (Kontroleer: hoek B = 180° − 70° = 110°, en hoek D = hoek B = 110°, wat 70° + 110° + 70° + 110° = 360° gee ✓)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="143" font-size="12" fill="#374151" font-weight="600">A</text><text x="169" y="143" font-size="12" fill="#374151" font-weight="600">B</text><text x="199" y="29" font-size="12" fill="#374151" font-weight="600">C</text><text x="60" y="29" font-size="12" fill="#374151" font-weight="600">D</text><path d="M 68,135 A 28,28 0 0 1 62,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="74" y="125" font-size="13" fill="#2563eb" font-weight="700">70°</text><path d="M 179,35 A 16,16 0 0 1 190.4,50.33" fill="none" stroke="#ea580c" stroke-width="2"/><text x="165" y="57" font-size="13" fill="#ea580c" font-weight="700">?</text><text x="102.5" y="153" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="34" y="85" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6 cm</text></svg>' },

        // Blok 4 — Vlieër / trapesium ontbrekende waarde (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Gelykbenige trapesium ABCD het AB ∥ CD, met AB = 6 cm en CD = 14 cm. Die gelyke bene AD = BC = 5 cm, en elke been strek 4 cm horisontaal verder as die korter ewewydige sy. Bepaal die hoogte van die trapesium.', checkMode: 'auto', options: ['4 cm', '5 cm', '9 cm', '3 cm'], correctIndex: 3, explanation: 'Laat ʼn loodlyn sak vanaf ʼn hoekpunt van die korter sy na die langer sy, wat ʼn reghoekige driehoek vorm met skuinssy (been) = 5 cm en basis = 4 cm. Hoogte² = 5² − 4² = 25 − 16 = 9, dus hoogte = √9 = 3 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="71,89 149,89 201,128 19,128" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71" y1="89" x2="71" y2="128" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,3"/><path d="M 71,116 L 83,116 L 83,128" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="61" y="83" font-size="12" fill="#374151" font-weight="600">A</text><text x="153" y="83" font-size="12" fill="#374151" font-weight="600">B</text><text x="205" y="136" font-size="12" fill="#374151" font-weight="600">C</text><text x="9" y="136" font-size="12" fill="#374151" font-weight="600">D</text><text x="110" y="79" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="110" y="146" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="33" y="109" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">5 cm</text><text x="187" y="109" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text><text x="87" y="109" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Vlieër ABCD het diagonaal AC as sy simmetrie-as, wat diagonaal BD by O ontmoet. AO = 16 cm, OC = 5 cm, en OB = OD = 12 cm (die diagonale is loodreg). Bepaal die lengte van sy AB.', checkMode: 'auto', options: ['20 cm', '13 cm', '17 cm', '28 cm'], correctIndex: 0, explanation: 'Aangesien die diagonale van ʼn vlieër loodreg is, is driehoek AOB reghoekig by O. AB² = AO² + OB² = 16² + 12² = 256 + 144 = 400, dus AB = √400 = 20 cm.', diagramSvg: '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg"><polygon points="115,20 37,119.05 115,150 193,119.05" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="20" x2="115" y2="150" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="37" y1="119.05" x2="193" y2="119.05" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 106,119.05 L 106,110.05 L 115,110.05" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="29" y="113.05" font-size="12" fill="#374151" font-weight="600" text-anchor="end">B</text><text x="115" y="166" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="201" y="113.05" font-size="12" fill="#374151" font-weight="600" text-anchor="start">D</text><text x="123" y="133.05" font-size="11" fill="#374151" font-weight="600">O</text><text x="123" y="69.53" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">16 cm</text><text x="123" y="138.53" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text><text x="76" y="109.05" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="154" y="109.05" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="56" y="67.53" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Met dieselfde vlieër ABCD (AO = 16 cm, OC = 5 cm, OB = OD = 12 cm, diagonale loodreg by O), bepaal die omtrek van die vlieër.', checkMode: 'auto', options: ['40 cm', '66 cm', '33 cm', '72 cm'], correctIndex: 1, explanation: "Sy AB = √(AO² + OB²) = √(16² + 12²) = √400 = 20 cm (dit is gelyk aan AD weens die vlieër se simmetrie). Sy CB = √(OC² + OB²) = √(5² + 12²) = √169 = 13 cm (dit is gelyk aan CD weens die vlieër se simmetrie). Omtrek = AB + BC + CD + DA = 20 + 13 + 13 + 20 = 66 cm.", diagramSvg: '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg"><polygon points="115,20 37,119.05 115,150 193,119.05" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="20" x2="115" y2="150" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="37" y1="119.05" x2="193" y2="119.05" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 106,119.05 L 106,110.05 L 115,110.05" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="29" y="113.05" font-size="12" fill="#374151" font-weight="600" text-anchor="end">B</text><text x="115" y="166" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="201" y="113.05" font-size="12" fill="#374151" font-weight="600" text-anchor="start">D</text><text x="123" y="133.05" font-size="11" fill="#374151" font-weight="600">O</text><text x="123" y="69.53" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">16 cm</text><text x="123" y="138.53" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text><text x="76" y="109.05" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="154" y="109.05" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text></svg>' },

        // Blok 5 — Alternatiewe definisies / vermoede-redenasie (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Gee ʼn alternatiewe definisie van ʼn reghoek in terme van sy diagonale, in plaas van hoeke te gebruik.', checkMode: 'auto', options: ['ʼn Parallelogram waarvan die diagonale loodreg is', 'ʼn Parallelogram waarvan die diagonale die hoekpunthoeke halveer', 'ʼn Parallelogram waarvan die diagonale gelyk in lengte is', 'ʼn Parallelogram waarvan die diagonale ongelyk is'], correctIndex: 2, explanation: 'ʼn Reghoek kan gedefinieer word as ʼn parallelogram waarvan die diagonale gelyk in lengte is.' },
        { difficulty: 'Hard', question: "Bongani vermoed dat 'alle vierhoeke met twee pare aangrensende gelyke sye loodregte diagonale het'. Ondersoek of hierdie vermoede (die definisie van ʼn vlieër) altyd waar is.", checkMode: 'auto', options: ['Vals — loodregte diagonale vereis dat al vier sye gelyk moet wees, nie net aangrensende pare nie', 'Vals — daar bestaan geen verband tussen aangrensende gelyke sye en diagonaalhoeke nie', 'Waar, maar slegs as die vlieër ook ʼn ruit is', 'Waar — aangesien AB = AD en CB = CD, dwing die SSS- en SHS-kongruensies die diagonale om teen 90° te ontmoet'], correctIndex: 3, explanation: 'Hierdie vermoede is waar en vorm deel van die standaardbewys dat vlieërs loodregte diagonale het. Aangesien AB = AD en CB = CD, is die hoofdiagonaal AC ʼn simmetrie-as, dus driehoek ABC ≡ driehoek ADC (SSS). Dit maak dat AO hoek BAD halveer, en dan driehoek ABO ≡ driehoek ADO (SHS), wat gelyke aangrensende hoeke by O gee wat optel tot 180° — wat elkeen dwing om 90° te wees.' },
        { difficulty: 'Hard', question: "Thandiwe sê 'ʼn vierhoek met een paar oorstaande hoeke gelyk is altyd ʼn parallelogram'. Vind ʼn teenvoorbeeld om dit te weerlê.", checkMode: 'auto', options: ['ʼn Vlieër het tipies presies een paar oorstaande hoeke gelyk, maar is nie ʼn parallelogram nie, aangesien sy sye nie albei pare ewewydig is nie', 'ʼn Reghoek, aangesien dit twee pare oorstaande hoeke gelyk het, nie een nie', 'Daar is geen teenvoorbeeld nie — een paar gelyke oorstaande hoeke maak altyd ʼn parallelogram', 'ʼn Trapesium, aangesien al sy oorstaande hoeke altyd gelyk is'], correctIndex: 0, explanation: 'ʼn Vlieër het tipies presies een paar oorstaande hoeke gelyk (die hoeke tussen die ongelyke sye), maar sy ander paar oorstaande hoeke is gewoonlik ongelyk, en sy sye is nie albei pare ewewydig nie — dus voldoen ʼn vlieër aan die een-paar-gelyke-hoeke-voorwaarde sonder om ʼn parallelogram te wees.' },

        // Blok 6 — Gelykvormige driehoek eweredige sye (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Driehoek ABC is gelykvormig aan driehoek DEF, met AB wat met DE ooreenstem en BC wat met EF ooreenstem. AB = 6 cm, BC = 9 cm, en DE = 9 cm. Bepaal die lengte van EF.', checkMode: 'auto', options: ['12 cm', '13,5 cm', '9 cm', '15 cm'], correctIndex: 1, explanation: 'Die skaalfaktor van driehoek ABC na driehoek DEF = DE ÷ AB = 9 ÷ 6 = 1,5. EF = BC × 1,5 = 9 × 1,5 = 13,5 cm.', diagramSvg: '<svg viewBox="0 0 330 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 120,140 70,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="150" font-size="12" fill="#374151" font-weight="600">A</text><text x="124" y="150" font-size="12" fill="#374151" font-weight="600">B</text><text x="68" y="34" font-size="12" fill="#374151" font-weight="600">C</text><text x="75" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="109" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">9 cm</text><polygon points="190,140 300,140 238.9,17.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="150" font-size="12" fill="#374151" font-weight="600">D</text><text x="304" y="150" font-size="12" fill="#374151" font-weight="600">E</text><text x="237" y="12" font-size="12" fill="#374151" font-weight="600">F</text><text x="245" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="283.5" y="79" font-size="13" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het ooreenstemmende sye in die verhouding 3 : 7. As die omtrek van die kleiner driehoek 24 cm is, bepaal die omtrek van die groter driehoek.', checkMode: 'auto', options: ['10,3 cm', '24 cm', '56 cm', '168 cm'], correctIndex: 2, explanation: 'Die verhouding van omtrekke is gelyk aan die verhouding van ooreenstemmende sye, 3 : 7. Groter omtrek = 24 × (7 ÷ 3) = 56 cm.' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het oppervlaktes in die verhouding 4 : 81. Bepaal die verhouding van hulle ooreenstemmende sylengtes.', checkMode: 'auto', options: ['4 : 81 (dieselfde as die oppervlakteverhouding)', '2 : 40,5 (die oppervlakteverhouding gehalveer)', '16 : 6561 (die oppervlakteverhouding gekwadreer)', '2 : 9'], correctIndex: 3, explanation: 'Aangesien die oppervlakteverhouding gelyk is aan die kwadraat van die syverhouding, is die syverhouding = √4 : √81 = 2 : 9.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het gelykvormigheid, kongruensie, spesiale vierhoek-eienskappe en bewysgebaseerde redenasie bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan weer deur enige gemiste vrae oor vierhoek-eienskappe of ontbrekende sy/hoek-berekeninge, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde oor spesiale vierhoeke en vermoede-toetsing, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Gelykvormigheid vs kongruensie klassifikasie (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Driehoek PQR het hoeke 40°, 65°, 75°. Driehoek XYZ het hoeke 40°, 65°, 75° maar verskillende sylengtes. Is die driehoeke gelykvormig, kongruent, of albei?', checkMode: 'auto', options: ['gelykvormig', 'kongruent', 'albei', 'geeneen nie'], correctIndex: 0, explanation: 'Die ooreenstemmende hoeke is gelyk, maar die sye verskil in lengte, dus is die driehoeke dieselfde vorm maar nie dieselfde grootte nie — dit is gelykvormigheid, nie kongruensie nie.' },
        { difficulty: 'Easy', question: 'Twee driehoeke het presies dieselfde drie sylengtes: 7 cm, 9 cm en 11 cm elk. Is die driehoeke gelykvormig, kongruent, of albei?', checkMode: 'auto', options: ['slegs gelykvormig', 'beide gelykvormig en kongruent', 'slegs kongruent', 'geeneen nie'], correctIndex: 1, explanation: 'Gelyke ooreenstemmende sye (SSS) beteken die driehoeke is kongruent. Kongruente driehoeke het outomaties ook gelyke hoeke, dus is hulle ook gelykvormig — die driehoeke is albei.' },
        { difficulty: 'Medium', question: 'Driehoek DEF het hoeke van 55° en 65°. Driehoek GHI het hoeke van 55° en 60°. Verduidelik of die twee driehoeke gelykvormig kan wees.', checkMode: 'auto', options: ['Nee — die driehoeke het verskillende hoekstelle aangesien die derde hoeke onderskeidelik 60° en 65° is', 'Nee — omdat die hoeke in ʼn ander volgorde gelys is, is die driehoeke nie vergelykbaar nie', 'Ja — albei driehoeke het dieselfde drie hoeke, 55°, 60° en 65°, sodra die ontbrekende derde hoek vir elkeen bereken word', 'Kan nie bepaal word sonder om die sylengtes te ken nie'], correctIndex: 2, explanation: 'Die derde hoek van driehoek DEF is 180° − 55° − 65° = 60°, wat hoeke 55°, 65°, 60° gee. Die derde hoek van driehoek GHI is 180° − 55° − 60° = 65°, wat hoeke 55°, 60°, 65° gee. Albei driehoeke het eintlik dieselfde drie hoeke (55°, 60°, 65°), dus is hulle WEL gelykvormig.' },
        { difficulty: 'Medium', question: 'Kagiso sê as twee driehoeke dieselfde omtrek het, moet hulle gelykvormig wees. Is hy korrek? Verduidelik met ʼn teenvoorbeeld.', checkMode: 'auto', options: ['Ja — gelyke omtrek impliseer altyd gelyke hoeke', 'Ja, maar slegs vir gelyksydige driehoeke', 'Nee — maar geen teenvoorbeeld kan vir hierdie spesifieke bewering gevind word nie', 'Nee — ʼn gelyksydige driehoek met sye 5 cm, 5 cm, 5 cm (omtrek 15 cm) en ʼn skalene driehoek met sye 3 cm, 5 cm, 7 cm (omtrek 15 cm) het heeltemal verskillende hoeke en sy-verhoudings'], correctIndex: 3, explanation: 'ʼn Gelyksydige driehoek met sye 5 cm, 5 cm, 5 cm het omtrek 15 cm. ʼn Skalene driehoek met sye 3 cm, 5 cm, 7 cm het ook omtrek 15 cm. Hierdie driehoeke het heeltemal verskillende hoeke en sy-verhoudings, dus waarborg gelyke omtrek nie gelykvormigheid nie.' },

        // Blok 2 — Spesiale vierhoek eienskap herroeping (Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Gee een eienskap van die diagonale van ʼn ruit wat ʼn algemene parallelogram nie noodwendig het nie.', checkMode: 'auto', options: ['Die diagonale halveer mekaar teen regte hoeke', 'Die diagonale halveer mekaar', 'Die diagonale is gelyk in lengte', 'Die diagonale halveer nooit mekaar nie'], correctIndex: 0, explanation: 'Beide ʼn ruit en ʼn algemene parallelogram het diagonale wat mekaar halveer, maar slegs ʼn ruit (weens sy vier gelyke sye) waarborg diagonale wat teen regte hoeke ontmoet.' },
        { difficulty: 'Medium', question: 'ʼn Reghoek het diagonale wat gelyk in lengte is. Stel of hierdie eienskap ook op ʼn algemene parallelogram van toepassing is, en verduidelik waarom of waarom nie.', checkMode: 'auto', options: ['Ja — alle parallelogramme het gelyke diagonale', 'Nee — in ʼn algemene parallelogram halveer die diagonale mekaar maar is nie noodwendig gelyk in lengte nie; gelyke diagonale kom slegs voor omdat ʼn reghoek vier regte hoeke het', 'Ja, maar slegs as die parallelogram vier gelyke sye het', 'Nee — ʼn algemene parallelogram se diagonale halveer nooit mekaar nie'], correctIndex: 1, explanation: 'In ʼn algemene parallelogram halveer die diagonale mekaar, maar hulle is nie noodwendig gelyk in lengte nie. Gelyke diagonale kom slegs voor omdat ʼn reghoek vier regte hoeke het, wat die twee diagonale dwing om dieselfde lengte te wees.' },
        { difficulty: 'Medium', question: 'Verduidelik waarom elke ruit ook as ʼn parallelogram geklassifiseer word, deur die definisie van ʼn parallelogram (beide pare oorstaande sye ewewydig) te gebruik.', checkMode: 'auto', options: ['ʼn Ruit is nie altyd ʼn parallelogram nie — slegs vierkante is', 'ʼn Ruit word gedefinieer as ʼn vierhoek met loodregte diagonale, wat niks met ewewydige sye te doen het nie', 'ʼn Ruit word gedefinieer as ʼn parallelogram met al vier sye gelyk, dus voldoen dit reeds aan die parallelogramvereiste van beide pare oorstaande sye ewewydig', 'ʼn Ruit het slegs een paar oorstaande sye ewewydig'], correctIndex: 2, explanation: 'ʼn Ruit word gedefinieer as ʼn parallelogram met al vier sye gelyk — dus voldoen dit reeds per definisie aan die parallelogramvereiste dat beide pare oorstaande sye ewewydig is.' },

        // Blok 3 — Parallelogram / reghoek / ruit ontbrekende waarde (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In parallelogram ABCD is hoek A = 72°. Aangesien opeenvolgende hoeke in ʼn parallelogram supplementêr is, bepaal die grootte van hoek B.', checkMode: 'auto', options: ['72°', '90°', '162°', '108°'], correctIndex: 3, explanation: 'Opeenvolgende (mede-binne) hoeke in ʼn parallelogram is supplementêr — hulle tel op tot 180°. Hoek B = 180° − 72° = 108°.' },
        { difficulty: 'Medium', question: 'Reghoek ABCD het lengte AB = 15 cm en breedte BC = 8 cm. Bepaal die lengte van diagonaal AC.', checkMode: 'auto', options: ['17 cm', '23 cm', '11,5 cm', '120 cm'], correctIndex: 0, explanation: 'Die diagonaal van ʼn reghoek kan met die Stelling van Pythagoras bereken word, aangesien die sye teen 90° ontmoet. AC² = AB² + BC² = 15² + 8² = 225 + 64 = 289, dus AC = √289 = 17 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="50" width="160" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="140" x2="190" y2="50" stroke="#ea580c" stroke-width="2"/><path d="M 30,128 L 42,128 L 42,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 190,128 L 178,128 L 178,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 30,62 L 42,62 L 42,50" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 190,62 L 178,62 L 178,50" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="20" y="154" font-size="12" fill="#374151" font-weight="600">A</text><text x="194" y="154" font-size="12" fill="#374151" font-weight="600">B</text><text x="194" y="44" font-size="12" fill="#374151" font-weight="600">C</text><text x="20" y="44" font-size="12" fill="#374151" font-weight="600">D</text><text x="110" y="156" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="206" y="95" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="124" y="89" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Ruit ABCD het sylengte 13 cm. Sy diagonale halveer mekaar teen regte hoeke by punt O, met AO = OC = 5 cm. Bepaal die volle lengte van diagonaal BD.', checkMode: 'auto', options: ['10 cm', '24 cm', '18 cm', '26 cm'], correctIndex: 1, explanation: 'Driehoek AOB is reghoekig by O met skuinssy AB = 13 cm en een sy AO = 5 cm. OB² = AB² − AO² = 13² − 5² = 169 − 25 = 144, dus OB = 12 cm. Aangesien die diagonaal gehalveer word, BD = 2 × OB = 2 × 12 = 24 cm.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="45,90 110,160 175,90 110,20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="90" x2="175" y2="90" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="110" y1="160" x2="110" y2="20" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><path d="M 100,90 L 100,80 L 110,80" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="35" y="94" font-size="12" fill="#374151" font-weight="600">A</text><text x="110" y="178" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="185" y="94" font-size="12" fill="#374151" font-weight="600">C</text><text x="110" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="118" y="74" font-size="11" fill="#374151" font-weight="600">O</text><text x="63.5" y="131" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">13 cm</text><text x="77.5" y="106" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="128" y="145" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Parallelogram ABCD het AB = 10 cm, BC = 7 cm, en hoek A = 85°. Hoek B is supplementêr tot hoek A. Bepaal die grootte van hoek C.', checkMode: 'auto', options: ['95°', '180°', '85°', '170°'], correctIndex: 2, explanation: 'In ʼn parallelogram is oorstaande hoeke gelyk. Hoek C is oorstaande hoek A, dus hoek C = hoek A = 85°. (Kontroleer: hoek B = 180° − 85° = 95°, en hoek D = hoek B = 95°, wat 85° + 95° + 85° + 95° = 360° gee ✓)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 174.2,30.4 49.2,30.4" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="143" font-size="12" fill="#374151" font-weight="600">A</text><text x="169" y="143" font-size="12" fill="#374151" font-weight="600">B</text><text x="178" y="24" font-size="12" fill="#374151" font-weight="600">C</text><text x="39" y="24" font-size="12" fill="#374151" font-weight="600">D</text><path d="M 68,135 A 28,28 0 0 1 42.5,107.1" fill="none" stroke="#2563eb" stroke-width="2"/><text x="74" y="125" font-size="13" fill="#2563eb" font-weight="700">85°</text><path d="M 158.2,30.4 A 16,16 0 0 1 172.8,46.3" fill="none" stroke="#ea580c" stroke-width="2"/><text x="144" y="52" font-size="13" fill="#ea580c" font-weight="700">?</text><text x="102.5" y="153" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="34" y="85" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">7 cm</text></svg>' },

        // Blok 4 — Vlieër / trapesium ontbrekende waarde (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Gelykbenige trapesium ABCD het AB ∥ CD, met AB = 8 cm en CD = 20 cm. Die gelyke bene AD = BC = 10 cm, en elke been strek 6 cm horisontaal verder as die korter ewewydige sy. Bepaal die hoogte van die trapesium.', checkMode: 'auto', options: ['6 cm', '10 cm', '14 cm', '8 cm'], correctIndex: 3, explanation: 'Laat ʼn loodlyn sak vanaf ʼn hoekpunt van die korter sy na die langer sy, wat ʼn reghoekige driehoek vorm met skuinssy (been) = 10 cm en basis = 6 cm. Hoogte² = 10² − 6² = 100 − 36 = 64, dus hoogte = √64 = 8 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="73,71 137,71 185,135 25,135" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="73" y1="71" x2="73" y2="135" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,3"/><path d="M 73,123 L 85,123 L 85,135" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="63" y="65" font-size="12" fill="#374151" font-weight="600">A</text><text x="141" y="65" font-size="12" fill="#374151" font-weight="600">B</text><text x="189" y="143" font-size="12" fill="#374151" font-weight="600">C</text><text x="15" y="143" font-size="12" fill="#374151" font-weight="600">D</text><text x="105" y="61" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="105" y="153" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="37" y="103" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10 cm</text><text x="173" y="103" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">10 cm</text><text x="89" y="103" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Vlieër ABCD het diagonaal AC as sy simmetrie-as, wat diagonaal BD by O ontmoet. AO = 8 cm, OC = 20 cm, en OB = OD = 15 cm (die diagonale is loodreg). Bepaal die lengte van sy AB.', checkMode: 'auto', options: ['17 cm', '25 cm', '23 cm', '28 cm'], correctIndex: 0, explanation: 'Aangesien die diagonale van ʼn vlieër loodreg is, is driehoek AOB reghoekig by O. AB² = AO² + OB² = 8² + 15² = 64 + 225 = 289, dus AB = √289 = 17 cm.', diagramSvg: '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg"><polygon points="115,38 55,70 115,150 175,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="38" x2="115" y2="150" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="55" y1="70" x2="175" y2="70" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 106,70 L 106,61 L 115,61" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="30" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="47" y="64" font-size="12" fill="#374151" font-weight="600" text-anchor="end">B</text><text x="115" y="166" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="183" y="64" font-size="12" fill="#374151" font-weight="600" text-anchor="start">D</text><text x="123" y="84" font-size="11" fill="#374151" font-weight="600">O</text><text x="123" y="54" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">8 cm</text><text x="123" y="114" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">20 cm</text><text x="85" y="60" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="145" y="60" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="65" y="52" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Met dieselfde vlieër ABCD (AO = 8 cm, OC = 20 cm, OB = OD = 15 cm, diagonale loodreg by O), bepaal die omtrek van die vlieër.', checkMode: 'auto', options: ['50 cm', '84 cm', '42 cm', '92 cm'], correctIndex: 1, explanation: "Sy AB = √(AO² + OB²) = √(8² + 15²) = √289 = 17 cm (dit is gelyk aan AD weens die vlieër se simmetrie). Sy CB = √(OC² + OB²) = √(20² + 15²) = √625 = 25 cm (dit is gelyk aan CD weens die vlieër se simmetrie). Omtrek = AB + BC + CD + DA = 17 + 25 + 25 + 17 = 84 cm.", diagramSvg: '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg"><polygon points="115,38 55,70 115,150 175,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="38" x2="115" y2="150" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="55" y1="70" x2="175" y2="70" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 106,70 L 106,61 L 115,61" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="30" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="47" y="64" font-size="12" fill="#374151" font-weight="600" text-anchor="end">B</text><text x="115" y="166" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="183" y="64" font-size="12" fill="#374151" font-weight="600" text-anchor="start">D</text><text x="123" y="84" font-size="11" fill="#374151" font-weight="600">O</text><text x="123" y="54" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">8 cm</text><text x="123" y="114" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">20 cm</text><text x="85" y="60" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="145" y="60" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text></svg>' },

        // Blok 5 — Alternatiewe definisies / vermoede-redenasie (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Gee ʼn alternatiewe definisie van ʼn ruit in terme van sy diagonale, in plaas van sylengtes te gebruik.', checkMode: 'auto', options: ['ʼn Vierhoek waarvan die diagonale gelyk in lengte is', 'ʼn Vierhoek waarvan die diagonale slegs die hoekpunthoeke halveer', 'ʼn Vierhoek waarvan die diagonale mekaar teen regte hoeke halveer', 'ʼn Vierhoek waarvan die diagonale nooit sny nie'], correctIndex: 2, explanation: 'ʼn Ruit kan gedefinieer word as ʼn vierhoek waarvan die diagonale mekaar teen regte hoeke halveer.' },
        { difficulty: 'Hard', question: "Palesa vermoed dat 'alle vierhoeke met twee pare aangrensende gelyke sye een diagonaal het wat die ander halveer'. Ondersoek of hierdie vermoede (ʼn eienskap van vlieërs) altyd waar is.", checkMode: 'auto', options: ['Vals — geeneen van die diagonale van ʼn vlieër halveer ooit die ander nie', 'Vals — albei diagonale halveer altyd mekaar in ʼn vlieër, wat die bewering trivialiseer', 'Waar, maar slegs as die vlieër ook ʼn vierkant is', 'Waar — aangesien AB = AD en CB = CD, is driehoek ABC ≡ driehoek ADC (SSS), wat AC ʼn simmetrie-as maak wat BD halveer'], correctIndex: 3, explanation: 'Hierdie vermoede is waar. Aangesien AB = AD en CB = CD, is driehoek ABC ≡ driehoek ADC (SSS) met AC as die gedeelde sy, dus is AC ʼn simmetrie-as. Hierdie simmetrie beteken diagonaal AC halveer diagonaal BD, alhoewel AC self nie noodwendig deur BD gehalveer word nie — slegs een diagonaal halveer die ander in ʼn algemene vlieër.' },
        { difficulty: 'Hard', question: "Sizwe sê 'ʼn vierhoek met al vier sye gelyk is altyd ʼn vierkant'. Vind ʼn teenvoorbeeld om dit te weerlê.", checkMode: 'auto', options: ['ʼn Ruit met hoeke 60° en 120° het al vier sye gelyk maar het nie regte hoeke nie, dus is dit nie ʼn vierkant nie', 'ʼn Vierkant met ongelyke diagonale', 'Daar is geen teenvoorbeeld nie — gelyke sye maak altyd ʼn vierkant', 'ʼn Reghoek met al vier sye gelyk maar ongelyke hoeke'], correctIndex: 0, explanation: 'ʼn Ruit met hoeke 60° en 120° het al vier sye gelyk maar het nie regte hoeke nie, dus is dit nie ʼn vierkant nie. Dit toon dat gelyke sye alleen nie voldoende is om ʼn vierkant te waarborg nie.' },

        // Blok 6 — Gelykvormige driehoek eweredige sye (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Driehoek ABC is gelykvormig aan driehoek DEF, met AB wat met DE ooreenstem en BC wat met EF ooreenstem. AB = 8 cm, BC = 10 cm, en DE = 12 cm. Bepaal die lengte van EF.', checkMode: 'auto', options: ['12 cm', '15 cm', '10 cm', '18 cm'], correctIndex: 1, explanation: 'Die skaalfaktor van driehoek ABC na driehoek DEF = DE ÷ AB = 12 ÷ 8 = 1,5. EF = BC × 1,5 = 10 × 1,5 = 15 cm.', diagramSvg: '<svg viewBox="0 0 330 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 120,140 70,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="150" font-size="12" fill="#374151" font-weight="600">A</text><text x="124" y="150" font-size="12" fill="#374151" font-weight="600">B</text><text x="68" y="34" font-size="12" fill="#374151" font-weight="600">C</text><text x="75" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="109" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">10 cm</text><polygon points="190,140 300,140 238.9,17.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="150" font-size="12" fill="#374151" font-weight="600">D</text><text x="304" y="150" font-size="12" fill="#374151" font-weight="600">E</text><text x="237" y="12" font-size="12" fill="#374151" font-weight="600">F</text><text x="245" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="283.5" y="79" font-size="13" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het ooreenstemmende sye in die verhouding 4 : 9. As die omtrek van die kleiner driehoek 32 cm is, bepaal die omtrek van die groter driehoek.', checkMode: 'auto', options: ['14,2 cm', '32 cm', '72 cm', '288 cm'], correctIndex: 2, explanation: 'Die verhouding van omtrekke is gelyk aan die verhouding van ooreenstemmende sye, 4 : 9. Groter omtrek = 32 × (9 ÷ 4) = 72 cm.' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het oppervlaktes in die verhouding 9 : 100. Bepaal die verhouding van hulle ooreenstemmende sylengtes.', checkMode: 'auto', options: ['9 : 100 (dieselfde as die oppervlakteverhouding)', '4,5 : 50 (die oppervlakteverhouding gehalveer)', '81 : 10000 (die oppervlakteverhouding gekwadreer)', '3 : 10'], correctIndex: 3, explanation: 'Aangesien die oppervlakteverhouding gelyk is aan die kwadraat van die syverhouding, is die syverhouding = √9 : √100 = 3 : 10.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het gelykvormigheid, kongruensie, spesiale vierhoek-eienskappe en bewysgebaseerde redenasie bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan weer deur enige gemiste vrae oor vierhoek-eienskappe of ontbrekende sy/hoek-berekeninge, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde oor spesiale vierhoeke en vermoede-toetsing, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Gelykvormigheid vs kongruensie klassifikasie (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Driehoek PQR het hoeke 48°, 82°, 50°. Driehoek XYZ het hoeke 48°, 82°, 50° maar verskillende sylengtes. Is die driehoeke gelykvormig, kongruent, of albei?', checkMode: 'auto', options: ['gelykvormig', 'kongruent', 'albei', 'geeneen nie'], correctIndex: 0, explanation: 'Die ooreenstemmende hoeke is gelyk, maar die sye verskil in lengte, dus is die driehoeke dieselfde vorm maar nie dieselfde grootte nie — dit is gelykvormigheid, nie kongruensie nie.' },
        { difficulty: 'Easy', question: 'Twee driehoeke het presies dieselfde drie sylengtes: 5 cm, 12 cm en 13 cm elk. Is die driehoeke gelykvormig, kongruent, of albei?', checkMode: 'auto', options: ['slegs gelykvormig', 'beide gelykvormig en kongruent', 'slegs kongruent', 'geeneen nie'], correctIndex: 1, explanation: 'Gelyke ooreenstemmende sye (SSS) beteken die driehoeke is kongruent. Kongruente driehoeke het outomaties ook gelyke hoeke, dus is hulle ook gelykvormig — die driehoeke is albei.' },
        { difficulty: 'Medium', question: 'Driehoek DEF het hoeke van 48° en 82°. Driehoek GHI het hoeke van 48° en 50°. Verduidelik of die twee driehoeke gelykvormig kan wees.', checkMode: 'auto', options: ['Nee — die driehoeke het verskillende hoekstelle aangesien die derde hoeke onderskeidelik 50° en 82° is', 'Nee — omdat die hoeke in ʼn ander volgorde gelys is, is die driehoeke nie vergelykbaar nie', 'Ja — albei driehoeke het dieselfde drie hoeke, 48°, 50° en 82°, sodra die ontbrekende derde hoek vir elkeen bereken word', 'Kan nie bepaal word sonder om die sylengtes te ken nie'], correctIndex: 2, explanation: 'Die derde hoek van driehoek DEF is 180° − 48° − 82° = 50°, wat hoeke 48°, 82°, 50° gee. Die derde hoek van driehoek GHI is 180° − 48° − 50° = 82°, wat hoeke 48°, 50°, 82° gee. Albei driehoeke het eintlik dieselfde drie hoeke (48°, 50°, 82°), dus is hulle WEL gelykvormig.' },
        { difficulty: 'Medium', question: 'Zanele sê as twee reghoekige driehoeke dieselfde skuinssylengte het, moet hulle kongruent wees. Is sy korrek? Verduidelik met ʼn teenvoorbeeld.', checkMode: 'auto', options: ['Ja — die skuinssy alleen bepaal altyd ʼn unieke reghoekige driehoek', 'Ja, maar slegs as albei driehoeke gelykbenig is', 'Nee — maar daar bestaan geen teenvoorbeeld spesifiek vir reghoekige driehoeke nie', 'Nee — ʼn reghoekige driehoek met bene 6 cm en 8 cm het skuinssy 10 cm, en ʼn ander reghoekige driehoek met bene van ongeveer 3,5 cm en 9,4 cm kan ook skuinssy 10 cm hê, dus kan die bene en hoeke heeltemal verskil'], correctIndex: 3, explanation: 'ʼn Reghoekige driehoek met bene 6 cm en 8 cm het skuinssy 10 cm. ʼn Ander reghoekige driehoek kan ook gevorm word om ʼn skuinssy van 10 cm te hê met heeltemal ander beenlengtes, bv. bene van ongeveer 3,5 cm en 9,4 cm. Aangesien slegs die skuinssy ooreenstem, kan die bene en hoeke heeltemal verskil — SHS vereis ook een ander ooreenstemmende sy.' },

        // Blok 2 — Spesiale vierhoek eienskap herroeping (Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Gee een eienskap van ʼn vierkant wat ʼn algemene reghoek nie noodwendig het nie.', checkMode: 'auto', options: ['Al vier sye is gelyk', 'Dit het vier regte hoeke', 'Sy diagonale is gelyk', 'Sy diagonale halveer mekaar'], correctIndex: 0, explanation: 'Beide ʼn vierkant en ʼn algemene reghoek het vier regte hoeke en gelyke diagonale, maar slegs ʼn vierkant waarborg dat al vier sye gelyk in lengte is.' },
        { difficulty: 'Medium', question: 'ʼn Vlieër het een diagonaal wat as ʼn simmetrie-as dien. Stel of albei diagonale van ʼn vlieër altyd simmetrie-asse is, en verduidelik waarom of waarom nie.', checkMode: 'auto', options: ['Ja — albei diagonale van elke vlieër is altyd simmetrie-asse', 'Nee — slegs die hoofdiagonaal (tussen die twee pare gelyke sye) is ʼn simmetrie-as; die ander is nie, tensy die vlieër ook ʼn ruit is', 'Nee — geeneen van die diagonale van ʼn vlieër is ooit ʼn simmetrie-as nie', 'Ja, maar slegs as die vlieër loodregte diagonale het'], correctIndex: 1, explanation: 'Slegs die diagonaal wat die hoekpunte tussen die twee pare gelyke sye verbind (die hoofdiagonaal) is ʼn simmetrie-as. Die ander diagonaal is nie, tensy die vlieër ook ʼn ruit is, omdat die twee driehoeke aan weerskante daarvan nie kongruent is in ʼn algemene vlieër nie.' },
        { difficulty: 'Medium', question: 'Verduidelik waarom elke reghoek ook as ʼn parallelogram geklassifiseer word, deur die definisie van ʼn parallelogram (beide pare oorstaande sye ewewydig) te gebruik.', checkMode: 'auto', options: ['ʼn Reghoek is nie altyd ʼn parallelogram nie — slegs vierkante is', 'ʼn Reghoek word gedefinieer as ʼn vierhoek met gelyke diagonale, wat niks met ewewydige sye te doen het nie', 'ʼn Reghoek word gedefinieer as ʼn parallelogram met vier regte hoeke, dus voldoen dit reeds aan die parallelogramvereiste van beide pare oorstaande sye ewewydig', 'ʼn Reghoek het slegs een paar oorstaande sye ewewydig'], correctIndex: 2, explanation: 'ʼn Reghoek word gedefinieer as ʼn parallelogram met vier regte hoeke — dus voldoen dit reeds per definisie aan die parallelogramvereiste dat beide pare oorstaande sye ewewydig is.' },

        // Blok 3 — Parallelogram / reghoek / ruit ontbrekende waarde (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In parallelogram ABCD is hoek A = 105°. Aangesien opeenvolgende hoeke in ʼn parallelogram supplementêr is, bepaal die grootte van hoek B.', checkMode: 'auto', options: ['105°', '90°', '255°', '75°'], correctIndex: 3, explanation: 'Opeenvolgende (mede-binne) hoeke in ʼn parallelogram is supplementêr — hulle tel op tot 180°. Hoek B = 180° − 105° = 75°.' },
        { difficulty: 'Medium', question: 'Reghoek ABCD het lengte AB = 9 cm en breedte BC = 12 cm. Bepaal die lengte van diagonaal AC.', checkMode: 'auto', options: ['15 cm', '21 cm', '10,5 cm', '108 cm'], correctIndex: 0, explanation: 'Die diagonaal van ʼn reghoek kan met die Stelling van Pythagoras bereken word, aangesien die sye teen 90° ontmoet. AC² = AB² + BC² = 9² + 12² = 81 + 144 = 225, dus AC = √225 = 15 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="50" width="160" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="140" x2="190" y2="50" stroke="#ea580c" stroke-width="2"/><path d="M 30,128 L 42,128 L 42,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 190,128 L 178,128 L 178,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 30,62 L 42,62 L 42,50" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 190,62 L 178,62 L 178,50" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="20" y="154" font-size="12" fill="#374151" font-weight="600">A</text><text x="194" y="154" font-size="12" fill="#374151" font-weight="600">B</text><text x="194" y="44" font-size="12" fill="#374151" font-weight="600">C</text><text x="20" y="44" font-size="12" fill="#374151" font-weight="600">D</text><text x="110" y="156" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="206" y="95" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="124" y="89" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Ruit ABCD het sylengte 15 cm. Sy diagonale halveer mekaar teen regte hoeke by punt O, met AO = OC = 9 cm. Bepaal die volle lengte van diagonaal BD.', checkMode: 'auto', options: ['18 cm', '24 cm', '15 cm', '30 cm'], correctIndex: 1, explanation: 'Driehoek AOB is reghoekig by O met skuinssy AB = 15 cm en een sy AO = 9 cm. OB² = AB² − AO² = 15² − 9² = 225 − 81 = 144, dus OB = 12 cm. Aangesien die diagonaal gehalveer word, BD = 2 × OB = 2 × 12 = 24 cm.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="45,90 110,160 175,90 110,20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="90" x2="175" y2="90" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="110" y1="160" x2="110" y2="20" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><path d="M 100,90 L 100,80 L 110,80" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="35" y="94" font-size="12" fill="#374151" font-weight="600">A</text><text x="110" y="178" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="185" y="94" font-size="12" fill="#374151" font-weight="600">C</text><text x="110" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="118" y="74" font-size="11" fill="#374151" font-weight="600">O</text><text x="63.5" y="131" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="77.5" y="106" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="128" y="145" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Parallelogram ABCD het AB = 11 cm, BC = 8 cm, en hoek A = 95°. Hoek B is supplementêr tot hoek A. Bepaal die grootte van hoek C.', checkMode: 'auto', options: ['85°', '180°', '95°', '190°'], correctIndex: 2, explanation: 'In ʼn parallelogram is oorstaande hoeke gelyk. Hoek C is oorstaande hoek A, dus hoek C = hoek A = 95°. (Kontroleer: hoek B = 180° − 95° = 85°, en hoek D = hoek B = 85°, wat 95° + 85° + 95° + 85° = 360° gee ✓)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 155.9,30.4 30.9,30.4" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="143" font-size="12" fill="#374151" font-weight="600">A</text><text x="169" y="143" font-size="12" fill="#374151" font-weight="600">B</text><text x="160" y="24" font-size="12" fill="#374151" font-weight="600">C</text><text x="21" y="24" font-size="12" fill="#374151" font-weight="600">D</text><path d="M 68,135 A 28,28 0 0 1 37.6,107.1" fill="none" stroke="#2563eb" stroke-width="2"/><text x="74" y="125" font-size="13" fill="#2563eb" font-weight="700">95°</text><path d="M 139.9,30.4 A 16,16 0 0 1 157.3,46.3" fill="none" stroke="#ea580c" stroke-width="2"/><text x="126" y="52" font-size="13" fill="#ea580c" font-weight="700">?</text><text x="102.5" y="153" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><text x="34" y="85" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">8 cm</text></svg>' },

        // Blok 4 — Vlieër / trapesium ontbrekende waarde (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Gelykbenige trapesium ABCD het AB ∥ CD, met AB = 10 cm en CD = 28 cm. Die gelyke bene AD = BC = 15 cm, en elke been strek 9 cm horisontaal verder as die korter ewewydige sy. Bepaal die hoogte van die trapesium.', checkMode: 'auto', options: ['9 cm', '15 cm', '18 cm', '12 cm'], correctIndex: 3, explanation: 'Laat ʼn loodlyn sak vanaf ʼn hoekpunt van die korter sy na die langer sy, wat ʼn reghoekige driehoek vorm met skuinssy (been) = 15 cm en basis = 9 cm. Hoogte² = 15² − 9² = 225 − 81 = 144, dus hoogte = √144 = 12 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="78,56 138,56 192,128 24,128" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="78" y1="56" x2="78" y2="128" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,3"/><path d="M 78,116 L 90,116 L 90,128" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="68" y="50" font-size="12" fill="#374151" font-weight="600">A</text><text x="142" y="50" font-size="12" fill="#374151" font-weight="600">B</text><text x="196" y="136" font-size="12" fill="#374151" font-weight="600">C</text><text x="14" y="136" font-size="12" fill="#374151" font-weight="600">D</text><text x="108" y="46" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="108" y="146" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">28 cm</text><text x="39" y="92" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">15 cm</text><text x="177" y="92" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">15 cm</text><text x="94" y="92" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Vlieër ABCD het diagonaal AC as sy simmetrie-as, wat diagonaal BD by O ontmoet. AO = 15 cm, OC = 21 cm, en OB = OD = 20 cm (die diagonale is loodreg). Bepaal die lengte van sy AB.', checkMode: 'auto', options: ['25 cm', '29 cm', '35 cm', '41 cm'], correctIndex: 0, explanation: 'Aangesien die diagonale van ʼn vlieër loodreg is, is driehoek AOB reghoekig by O. AB² = AO² + OB² = 15² + 20² = 225 + 400 = 625, dus AB = √625 = 25 cm.', diagramSvg: '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg"><polygon points="115,24 45,76.5 115,150 185,76.5" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="24" x2="115" y2="150" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="45" y1="76.5" x2="185" y2="76.5" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 106,76.5 L 106,67.5 L 115,67.5" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="16" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="37" y="70.5" font-size="12" fill="#374151" font-weight="600" text-anchor="end">B</text><text x="115" y="166" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="193" y="70.5" font-size="12" fill="#374151" font-weight="600" text-anchor="start">D</text><text x="123" y="90.5" font-size="11" fill="#374151" font-weight="600">O</text><text x="123" y="50.25" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">15 cm</text><text x="123" y="117.25" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">21 cm</text><text x="80" y="66.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="150" y="66.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="60" y="48.25" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Met dieselfde vlieër ABCD (AO = 15 cm, OC = 21 cm, OB = OD = 20 cm, diagonale loodreg by O), bepaal die omtrek van die vlieër.', checkMode: 'auto', options: ['54 cm', '108 cm', '96 cm', '116 cm'], correctIndex: 1, explanation: "Sy AB = √(AO² + OB²) = √(15² + 20²) = √625 = 25 cm (dit is gelyk aan AD weens die vlieër se simmetrie). Sy CB = √(OC² + OB²) = √(21² + 20²) = √841 = 29 cm (dit is gelyk aan CD weens die vlieër se simmetrie). Omtrek = AB + BC + CD + DA = 25 + 29 + 29 + 25 = 108 cm.", diagramSvg: '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg"><polygon points="115,24 45,76.5 115,150 185,76.5" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="24" x2="115" y2="150" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="45" y1="76.5" x2="185" y2="76.5" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 106,76.5 L 106,67.5 L 115,67.5" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="16" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="37" y="70.5" font-size="12" fill="#374151" font-weight="600" text-anchor="end">B</text><text x="115" y="166" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="193" y="70.5" font-size="12" fill="#374151" font-weight="600" text-anchor="start">D</text><text x="123" y="90.5" font-size="11" fill="#374151" font-weight="600">O</text><text x="123" y="50.25" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">15 cm</text><text x="123" y="117.25" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">21 cm</text><text x="80" y="66.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="150" y="66.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text></svg>' },

        // Blok 5 — Alternatiewe definisies / vermoede-redenasie (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Gee ʼn alternatiewe definisie van ʼn parallelogram in terme van sy diagonale, in plaas van sye of hoeke te gebruik.', checkMode: 'auto', options: ['ʼn Vierhoek waarvan die diagonale gelyk in lengte is', 'ʼn Vierhoek waarvan die diagonale loodreg is', 'ʼn Vierhoek waarvan die diagonale mekaar halveer', 'ʼn Vierhoek waarvan die diagonale nooit ontmoet nie'], correctIndex: 2, explanation: 'ʼn Parallelogram kan gedefinieer word as ʼn vierhoek waarvan die diagonale mekaar halveer.' },
        { difficulty: 'Hard', question: "Mpho vermoed dat 'alle vierhoeke met twee pare aangrensende gelyke sye presies een paar oorstaande hoeke gelyk het'. Ondersoek of hierdie vermoede (ʼn eienskap van vlieërs) altyd waar is.", checkMode: 'auto', options: ['Vals — ʼn vlieër het nooit enige paar oorstaande hoeke gelyk nie', 'Vals — ʼn vlieër het altyd albei pare oorstaande hoeke gelyk', 'Waar, maar slegs as die vlieër ook ʼn ruit is', 'Waar — aangesien AB = AD en CB = CD, is driehoek ABC ≡ driehoek ADC (SSS), dus hoek B = hoek D, terwyl hoeke A en C oor die algemeen nie gelyk is nie'], correctIndex: 3, explanation: 'Hierdie vermoede is waar. Aangesien AB = AD en CB = CD, is driehoek ABC ≡ driehoek ADC (SSS), dus hoek B = hoek D (die hoeke tussen die ongelyke sye is gelyk). Die ander paar oorstaande hoeke, by A en C, is oor die algemeen NIE gelyk nie, tensy die vlieër ook ʼn ruit is.' },
        { difficulty: 'Hard', question: "Katlego sê 'ʼn vierhoek met diagonale van gelyke lengte is altyd ʼn reghoek'. Vind ʼn teenvoorbeeld om dit te weerlê.", checkMode: 'auto', options: ['ʼn Gelykbenige trapesium het diagonale van gelyke lengte maar is nie ʼn reghoek nie, aangesien dit slegs een paar ewewydige sye het en geen regte hoeke het nie', 'ʼn Vierkant, aangesien dit altyd gelyke diagonale het', 'Daar is geen teenvoorbeeld nie — gelyke diagonale maak altyd ʼn reghoek', 'ʼn Ruit, aangesien sy diagonale altyd gelyk is'], correctIndex: 0, explanation: 'ʼn Gelykbenige trapesium het diagonale van gelyke lengte (ʼn bekende eienskap), maar dit is nie ʼn reghoek nie aangesien dit slegs een paar ewewydige sye het en nie vier regte hoeke het nie.' },

        // Blok 6 — Gelykvormige driehoek eweredige sye (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Driehoek ABC is gelykvormig aan driehoek DEF, met AB wat met DE ooreenstem en BC wat met EF ooreenstem. AB = 5 cm, BC = 7 cm, en DE = 15 cm. Bepaal die lengte van EF.', checkMode: 'auto', options: ['9 cm', '21 cm', '17 cm', '35 cm'], correctIndex: 1, explanation: 'Die skaalfaktor van driehoek ABC na driehoek DEF = DE ÷ AB = 15 ÷ 5 = 3. EF = BC × 3 = 7 × 3 = 21 cm.', diagramSvg: '<svg viewBox="0 0 330 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 120,140 70,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="150" font-size="12" fill="#374151" font-weight="600">A</text><text x="124" y="150" font-size="12" fill="#374151" font-weight="600">B</text><text x="68" y="34" font-size="12" fill="#374151" font-weight="600">C</text><text x="75" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="109" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">7 cm</text><polygon points="190,140 300,140 238.9,17.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="150" font-size="12" fill="#374151" font-weight="600">D</text><text x="304" y="150" font-size="12" fill="#374151" font-weight="600">E</text><text x="237" y="12" font-size="12" fill="#374151" font-weight="600">F</text><text x="245" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="283.5" y="79" font-size="13" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het ooreenstemmende sye in die verhouding 5 : 8. As die omtrek van die kleiner driehoek 40 cm is, bepaal die omtrek van die groter driehoek.', checkMode: 'auto', options: ['25 cm', '40 cm', '64 cm', '320 cm'], correctIndex: 2, explanation: 'Die verhouding van omtrekke is gelyk aan die verhouding van ooreenstemmende sye, 5 : 8. Groter omtrek = 40 × (8 ÷ 5) = 64 cm.' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het oppervlaktes in die verhouding 25 : 64. Bepaal die verhouding van hulle ooreenstemmende sylengtes.', checkMode: 'auto', options: ['25 : 64 (dieselfde as die oppervlakteverhouding)', '12,5 : 32 (die oppervlakteverhouding gehalveer)', '625 : 4096 (die oppervlakteverhouding gekwadreer)', '5 : 8'], correctIndex: 3, explanation: 'Aangesien die oppervlakteverhouding gelyk is aan die kwadraat van die syverhouding, is die syverhouding = √25 : √64 = 5 : 8.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het gelykvormigheid, kongruensie, spesiale vierhoek-eienskappe en bewysgebaseerde redenasie bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan weer deur enige gemiste vrae oor vierhoek-eienskappe of ontbrekende sy/hoek-berekeninge, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde oor spesiale vierhoeke en vermoede-toetsing, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
