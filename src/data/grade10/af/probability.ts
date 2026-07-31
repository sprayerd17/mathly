import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (probability roles) ──────────────────────────────────────
// theoretical probability → blue   (#2563eb)
// relative frequency      → orange (#ea580c)
// comparison / sum = 1    → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
// Stacked numerator/denominator fraction notation (proof-of-concept) instead
// of a plain "n/d" slash — renders as an actual fraction bar via the
// site's existing whitelisted-HTML pipeline (no math library needed).
const frac = (num: string, den: string) =>
  `<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 2px;line-height:1.15;font-size:0.95em;"><span style="border-bottom:1.5px solid currentColor;padding:0 3px;">${num}</span><span style="padding:0 3px;">${den}</span></span>`

export const topicData: TopicData = {
  title: 'Waarskynlikheid',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — RELATIVE FREQUENCY VS THEORETICAL PROBABILITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'relative-frequency-vs-theoretical',
      title: 'Relatiewe Frekwensie teenoor Teoretiese Waarskynlikheid',
      icon: '🎲',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Teoretiese waarskynlikheid</strong> word bereken met die formule ${bl('gunstige uitkomste ÷ totale uitkomste')}, met die aanname dat alle uitkomste ewe waarskynlik is. <strong>Relatiewe frekwensie</strong> word bepaal deur werklik ʼn eksperiment uit te voer en die resultate aan te teken. Met ʼn groot aantal proefnemings neig ${or('relatiewe frekwensie')} om nader aan die ${bl('teoretiese waarskynlikheid')} te kom, maar presiese ooreenstemming word selde bereik weens natuurlike toevalligheid.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('teoretiese waarskynlikheid')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('relatiewe frekwensie')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vergelyking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelformules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Teoretiese Waarskynlikheid</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">P(gebeurtenis) = gunstige uitkomste ÷ totale uitkomste</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Relatiewe Frekwensie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Relatiewe frekwensie = aantal kere wat gebeurtenis voorgekom het ÷ totale aantal proefnemings</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Die Wet van Groot Getalle</p>` +
        `<p style="margin:0;color:#14532d;">Namate die aantal proefnemings ${gr('toeneem')}, kom die ${or('relatiewe frekwensie')} ${gr('nader aan')} die ${bl('teoretiese waarskynlikheid')}. Met klein aantalle proefnemings kan toevallige variasie beteken dat die twee waardes merkbaar verskil.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho gooi ʼn muntstuk 200 keer op en kry 96 keer kop. Vergelyk die relatiewe frekwensie met die teoretiese waarskynlikheid.',
          answer: `${or('Relatiewe frekwensie')} = 0,48; ${bl('Teoretiese waarskynlikheid')} = 0,5 — ${gr('naby maar nie gelyk nie')}`,
          steps: [
            `${or('Relatiewe frekwensie')} = 96 ÷ 200 = ${or('0,48')}`,
            `${bl('Teoretiese waarskynlikheid')} van kop = 1 ÷ 2 = ${bl('0,5')}`,
            `${gr('Vergelyking:')} Die relatiewe frekwensie (${or('0,48')}) is naby aan, maar nie presies gelyk aan, die teoretiese waarde (${bl('0,5')}) nie, wat verwag word met ʼn beperkte aantal proefnemings.`,
          ],
        },
        {
          question: 'Lerato merk op dat dit gewoonlik ʼn baie groot aantal proefnemings verg voordat die relatiewe frekwensie 0,5 vir ʼn regverdige muntstuk nader. Waarom mag dit so wees?',
          answer: `${gr('Toevallige variasie vereffen oor baie proefnemings')}`,
          steps: [
            `Met klein aantalle proefnemings het ${or('toevallige variasie')} ʼn groter relatiewe uitwerking op die verhouding van resultate.`,
            `Namate die aantal proefnemings ${gr('toeneem')}, "vereffen" hierdie toevallige variasie, wat die ${or('relatiewe frekwensie')} nader aan die ware ${bl('teoretiese waarskynlikheid')} bring.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        'Kort video wat die verskil tussen teoretiese waarskynlikheid en relatiewe frekwensie verduidelik, en wys hoe relatiewe frekwensie na teoretiese waarskynlikheid neig namate proewe toeneem',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — VENN DIAGRAMS FOR SOLVING PROBABILITY PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'venn-diagrams-probability',
      title: 'Venndiagramme om Waarskynlikheidsprobleme op te los',
      icon: '⭕',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Venndiagram</strong> stel die verwantskappe tussen twee of meer gebeurtenisse visueel voor deur middel van oorvleuelende sirkels, wat dit makliker maak om waarskynlikhede te bereken wat ${bl('"en"')}, ${or('"of"')}, en ${gr('"nie"')} vir saamgestelde gebeurtenisse behels.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('versameling A')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('versameling B')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oorvleueling (snyding)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelformule vir Venndiagramme</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="font-size:1em;font-weight:700;color:#374151;margin:0;">n(${bl('A')} ∪ ${or('B')}) = n(${bl('A')}) + n(${or('B')}) − n(${gr('A ∩ B')})</p>` +
        `<p style="font-size:13px;color:#6b7280;margin-top:8px;margin-bottom:0;">Trek die ${gr('snyding')} af om te verhoed dat elemente wat aan albei versamelings behoort, dubbel getel word.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategie vir Venndiagram-probleme</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Stap 1</strong> — Vul eers die ${gr('snyding')} in.<br><strong>Stap 2</strong> — Trek af om die ${bl('slegs A')}- en ${or('slegs B')}-streke te vind.<br><strong>Stap 3</strong> — Gebruik die totaal om die "geen van beide"-streek te vind.<br><strong>Stap 4</strong> — Lees waarskynlikhede van die voltooide diagram af.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In ʼn klas van 30, studeer 18 Wiskunde, 15 studeer Wetenskap, en 8 studeer albei. Gebruik ʼn Venndiagram-benadering om te vind hoeveel geen van die twee studeer nie.',
          answer: `${gr('5')} leerders studeer geen van die twee vakke nie`,
          steps: [
            `Leerders wat minstens een vak studeer = ${bl('18')} + ${or('15')} − ${gr('8')} = ${gr('25')} (met die oorvleueling om dubbeltelling te vermy).`,
            `Leerders wat geen van die twee studeer nie = 30 − ${gr('25')} = ${gr('5')}.`,
            `Die voltooide Venndiagram wys ${bl('10')} in slegs Wiskunde, ${or('7')} in slegs Wetenskap, ${gr('8')} in die oorvleueling, en 5 buite albei sirkels.`,
          ],
        },
        {
          question: 'Gebruik dieselfde data (klas van 30, 18 Wiskunde, 15 Wetenskap, 8 albei), vind die waarskynlikheid dat ʼn lukraak gekose leerder slegs Wiskunde (nie Wetenskap nie) studeer.',
          answer: `P(slegs Wiskunde) = ${gr('1/3')}`,
          steps: [
            `${bl('Slegs Wiskunde')} = ${bl('18')} − ${gr('8')} = ${bl('10')}`,
            `P(slegs Wiskunde) = ${bl('10')} ÷ 30 = ${gr('1/3')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Venn-diagram met twee oorvleuelende sirkels gemerk Wiskunde en Wetenskap, wat 10 slegs in Wiskunde, 7 slegs in Wetenskap, 8 in die oorvleueling, en 5 buite albei sirkels wys',
      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="200" height="150" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><circle cx="85" cy="85" r="55" fill="#eff6ff" fill-opacity="0.6" stroke="#2563eb" stroke-width="2.5"/><circle cx="135" cy="85" r="55" fill="#fff7ed" fill-opacity="0.6" stroke="#ea580c" stroke-width="2.5"/><text x="55" y="35" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">Wiskunde</text><text x="165" y="35" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">Wetenskap</text><text x="65" y="90" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="155" y="90" font-size="16" fill="#ea580c" font-weight="700" text-anchor="middle">7</text><text x="110" y="90" font-size="16" fill="#16a34a" font-weight="700" text-anchor="middle">8</text><text x="20" y="148" font-size="12" fill="#374151" font-weight="700">5 (geeneen)</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om ʼn Venn-diagram te teken en te gebruik om waarskynlikhede van saamgestelde gebeurtenisse te vind, insluitend deursnit, unie en komplement',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — MUTUALLY EXCLUSIVE AND COMPLEMENTARY EVENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mutually-exclusive-complementary',
      title: 'Onderling Uitsluitende en Komplementêre Gebeurtenisse',
      icon: '🔵',
      explanation:
        `<p style="margin-bottom:16px;">Twee gebeurtenisse is <strong>onderling uitsluitend</strong> as hulle nie terselfdertyd kan plaasvind nie (${bl('P(A en B) = 0')}) — byvoorbeeld om ʼn 2 en ʼn 5 met een enkele dobbelsteengooi te gooi. Twee gebeurtenisse is <strong>komplementêr</strong> as hulle onderling uitsluitend is EN saam al die moontlike uitkomste dek — wat beteken ${or('P(A) + P(B) = 1')}, dus ${gr('P(nie A nie) = 1 − P(A)')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gebeurtenis A')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('komplementêre gebeurtenis (nie A nie)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('som gelyk aan 1')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Vergelyking van die twee tipes</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Onderling Uitsluitend</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">${bl('P(A en B) = 0')} — kan nie gelyktydig plaasvind nie.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Vereis NIE dat P(A) + P(B) = 1 nie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Komplementêr</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">${or('P(A) + P(nie A nie) = 1')} — onderling uitsluitend EN uitputtend.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Elke komplementêre paar is onderling uitsluitend, maar nie andersom nie.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Komplementêre reël</p>` +
        `<p style="margin:0;color:#14532d;">${gr('P(nie A nie) = 1 − P(A)')} — as jy die waarskynlikheid ken dat ʼn gebeurtenis plaasvind, trek dit van 1 af om die waarskynlikheid te kry dat dit NIE plaasvind nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "Is 'om ʼn ewe getal te gooi' en 'om ʼn onewe getal te gooi' met ʼn dobbelsteen onderling uitsluitend, komplementêr, of albei?",
          answer: `${gr('Beide onderling uitsluitend EN komplementêr')}`,
          steps: [
            `Hulle kan nie albei terselfdertyd gebeur nie — ${bl('onderling uitsluitend')} (P(ewe EN onewe) = 0).`,
            `Saam dek hulle elke moontlike uitkoms op die dobbelsteen (1–6) — dus is hulle ook ${or('komplementêr')}: P(ewe) + P(onewe) = 3/6 + 3/6 = ${gr('1')}.`,
          ],
        },
        {
          question: "Thabo sê die waarskynlikheid dat dit môre reën is 0,3. Vind die waarskynlikheid dat dit NIE reën nie.",
          answer: `P(nie reën nie) = ${gr('0,7')}`,
          steps: [
            `Met die ${or('komplementêre reël')}: P(nie reën nie) = 1 − P(reën)`,
            `P(nie reën nie) = 1 − ${bl('0,3')} = ${gr('0,7')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Diagram wat twee nie-oorvleuelende streke wys, gemerk gebeurtenis A en nie-A, binne ʼn steekproefruimte-reghoek, met P(A) + P(nie-A) = 1 uitgelig',
      diagramSvg:
        '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="20" width="90" height="90" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/><rect x="100" y="20" width="110" height="90" fill="#fff7ed" stroke="#ea580c" stroke-width="2.5"/><rect x="10" y="20" width="200" height="90" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="12" font-size="12" fill="#374151" font-weight="700" text-anchor="middle">Steekproefruimte S</text><text x="55" y="70" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">A</text><text x="155" y="70" font-size="16" fill="#ea580c" font-weight="700" text-anchor="middle">nie-A</text><text x="110" y="130" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle">P(A) + P(nie-A) = 1</text></svg>',

      videoPlaceholder:
        'Kort video wat onderling uitsluitende en komplementêre gebeurtenisse verduidelik met dobbelsteen- en alledaagse voorbeelde, en wys hoe om die komplementêre reël te gebruik',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — THE GENERAL ADDITION RULE FOR PROBABILITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'general-addition-rule',
      title: 'Die Algemene Optellingsreël vir Waarskynlikheid',
      icon: '➕',
      explanation:
        `<p style="margin-bottom:16px;">Vir enige twee gebeurtenisse A en B, stel die <strong>algemene optellingsreël</strong>: ${bl('P(A of B) = P(A) + P(B) − P(A en B)')}. Dit hou rekening met enige oorvleueling tussen die gebeurtenisse (as A en B saam kan gebeur) — wanneer gebeurtenisse onderling uitsluitend is, ${or('P(A en B) = 0')}, wat die reël vereenvoudig tot ${gr('P(A of B) = P(A) + P(B)')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('individuele waarskynlikhede')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('oorvleueling afgetrek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale gekombineerde waarskynlikheid')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;"><span style="color:#7c3aed;font-weight:700">paarsgewyse oorvleueling</span></span>` +
        `<span style="background:#f1f5f9;border:1px solid #cbd5e1;border-radius:6px;padding:3px 10px;font-size:13px;"><span style="color:#0f1f3d;font-weight:700">al drie oorvleueling</span></span>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Algemene Optellingsreël</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${bl('P(A)')} + ${bl('P(B)')} − ${or('P(A en B)')} = ${gr('P(A of B)')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom trek ons die snyding af?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer ons P(A) en P(B) optel, word uitkomste in ${or('beide A en B')} twee keer getel. Deur ${or('P(A en B)')} af te trek, word hierdie dubbeltelling reggestel. Vir onderling uitsluitende gebeurtenisse is daar geen oorvleueling nie, dus hoef niks afgetrek te word nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In ʼn groep is P(hou van tee) = 0,6, P(hou van koffie) = 0,5, en P(hou van albei) = 0,3. Vind P(hou van tee of koffie).',
          answer: `P(tee of koffie) = ${gr('0,8')}`,
          steps: [
            `P(A of B) = ${bl('P(A)')} + ${bl('P(B)')} − ${or('P(A en B)')}`,
            `P(tee of koffie) = ${bl('0,6')} + ${bl('0,5')} − ${or('0,3')} = ${gr('0,8')}`,
          ],
        },
        {
          question: 'ʼn Studie het hoofpynmiddels A, B en C op 80 pasiënte getoets: 40 het verligting van A ervaar, 35 van B, 40 van C, 21 van A en C, 18 van B en C, 68 van minstens een middel, 7 van al drie. Vind hoeveel van geen van die middels verligting gekry het nie.',
          answer: `${gr('12')} pasiënte het van geen van die middels verligting gekry nie`,
          steps: [
            `Pasiënte wat van minstens een middel verligting kry = ${bl('68')} (direk gegee).`,
            `Totale pasiënte = 80.`,
            `Pasiënte wat van geen verligting kry nie = 80 − ${bl('68')} = ${gr('12')}.`,
          ],
        },
        {
          question: 'Gebruik dieselfde studie (80 pasiënte, A=40, B=35, C=40, A∩C=21, B∩C=18, alle drie=7, minstens een=68), vind hoeveel van middels A en B, maar nie C nie, verligting gekry het.',
          answer: `${gr('8')} pasiënte het van A en B, maar nie C nie, verligting gekry`,
          steps: [
            `Begin deur ${gr('7')} in die middel te plaas (al drie). Dan: slegs A∩C = 21 − 7 = 14; slegs B∩C = 18 − 7 = 11.`,
            `Gebruik die algemene optellingsreël vir drie gebeurtenisse om die volledige A∩B (die middel ingesluit) te vind: 68 = 40 + 35 + 40 − ${bl('A∩B')} − 21 − 18 + 7, dus ${bl('A∩B')} = 15.`,
            `${or('Slegs A en B')} (die middel uitgesluit) = A∩B − 7 = 15 − 7 = ${gr('8')}.`,
            `<strong>Antwoord:</strong> ${gr('8')} pasiënte het van middels A en B, maar nie C nie, verligting gekry.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Drie-sirkel-Venn-diagram vir die studie oor geneesmiddels A, B en C wat al die deursnitstreke met hul waardes gemerk wys, wat die algemene optellingsreël vir drie gebeurtenisse demonstreer',
      diagramSvg:
        '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="90" cy="85" r="55" fill="#eff6ff" fill-opacity="0.55" stroke="#2563eb" stroke-width="2.5"/><circle cx="130" cy="85" r="55" fill="#fff7ed" fill-opacity="0.55" stroke="#ea580c" stroke-width="2.5"/><circle cx="110" cy="125" r="55" fill="#f0fdf4" fill-opacity="0.55" stroke="#16a34a" stroke-width="2.5"/><text x="50" y="18" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">A</text><text x="170" y="18" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">B</text><text x="110" y="196" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">C</text><text x="58" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11</text><text x="165" y="55" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">9</text><text x="110" y="168" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle">8</text><text x="110" y="55" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="middle">8</text><text x="70" y="118" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="middle">14</text><text x="150" y="118" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="middle">11</text><text x="110" y="98" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">7</text><text x="8" y="196" font-size="10" fill="#374151" font-weight="700">geeneen = 12</text></svg>',

      videoPlaceholder:
        'Kort video wat die algemene optellingsreël vir waarskynlikheid aflei en toepas, met voorbeelde wat twee gebeurtenisse en ʼn drie-sirkel-Venn-diagram behels',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Sipho gooi ʼn dobbelsteen 60 keer en kry presies 8 keer ʼn 6. Vind die relatiewe frekwensie om ʼn 6 te gooi.',
      checkMode: 'auto',
      options: [frac('2', '15'), frac('1', '6'), frac('8', '52'), frac('60', '8')],
      correctIndex: 0,
      explanation: `Relatiewe frekwensie = aantal kere wat gebeurtenis voorgekom het ÷ totale proefnemings = 8 ÷ 60 = ${frac('8', '60')} = ${frac('2', '15')}. ${frac('1', '6')} is die teoretiese waarskynlikheid om ʼn 6 te gooi (ʼn verwarring met die waargenome frekwensie), ${frac('8', '52')} gebruik die verkeerde totaal, en ${frac('60', '8')} keer die breuk om.`,
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vergelyk die relatiewe frekwensie in V1 met die teoretiese waarskynlikheid om ʼn 6 te gooi.',
      checkMode: 'auto',
      options: [
        'Teoretiese waarskynlikheid = 1/2; baie hoër as die relatiewe frekwensie, wat ʼn groot verskil toon.',
        `Teoretiese waarskynlikheid = ${frac('1', '6')} ≈ 0,167; taamlik naby aan die relatiewe frekwensie van ≈ 0,133, soos verwag word met ʼn matige aantal proefnemings.`,
        'Teoretiese waarskynlikheid = 1/8; merkbaar laer as die relatiewe frekwensie.',
        'Teoretiese waarskynlikheid = 1/60; baie laer as die relatiewe frekwensie, wat ʼn groot verskil toon.',
      ],
      correctIndex: 1,
      explanation: `Teoretiese waarskynlikheid om ʼn 6 te gooi = 1 ÷ 6 = ${frac('1', '6')} ≈ 0,167. Relatiewe frekwensie uit V1 = 8 ÷ 60 ≈ 0,133. Hierdie waardes is taamlik naby aan mekaar — die klein verskil word verwag met slegs 60 proefnemings. 1/2 verwar dit met ʼn muntstukgooi, 1/8 neem ʼn agtkantige dobbelsteen aan, en 1/60 deel deur die aantal proefnemings in plaas van die aantal uitkomste.`,
    },

    // ── Q3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato gooi ʼn muntstuk 500 keer op en kry 245 keer kop. Is hierdie relatiewe frekwensie redelik naby aan die teoretiese waarskynlikheid? Verduidelik.',
      checkMode: 'auto',
      options: [
        'Nee — 245/500 = 0,49 is ver van 0,5, wat toon dat die muntstuk onregverdig is.',
        'Nee — die relatiewe frekwensie behoort presies gelyk aan 0,5 vir ʼn regverdige muntstuk te wees, dus beteken enige verskil dat ʼn fout voorgekom het.',
        'Ja — 245/500 = 0,49, wat baie naby aan die teoretiese waarskynlikheid van 0,5 is, wat die verwagte patroon toon waar groot aantalle proefnemings die teoretiese waarde nader.',
        'Ja — die teoretiese waarskynlikheid van kop is altyd presies gelyk aan watter relatiewe frekwensie ook al aangeteken word.',
      ],
      correctIndex: 2,
      explanation: 'Relatiewe frekwensie = 245 ÷ 500 = 0,49, naby aan die teoretiese waarskynlikheid van 0,5, wat illustreer dat groot aantalle proefnemings die relatiewe frekwensie naby die teoretiese waarde bring (al hoef dit nie presies ooreen te stem nie). Om te beweer die muntstuk is onregverdig, of dat die twee waardes presies moet ooreenstem, misverstaan toevallige variasie.',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'In ʼn klas van 25, speel 15 sokker, 10 speel netbal, en 5 speel albei. Hoeveel speel geen van die twee nie?',
      checkMode: 'auto',
      options: ['15', '20', '0', '5'],
      correctIndex: 3,
      explanation: 'Minstens een = 15 + 10 − 5 = 20. Geen van die twee = 25 − 20 = 5. 15 is net die sokkertotaal, 20 is "minstens een" (nie "geen nie"), en 0 neem verkeerdelik aan dat almal minstens een sport speel.',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik die data uit V4 (klas van 25: 15 speel sokker, 10 speel netbal, 5 speel albei), vind die waarskynlikheid dat ʼn lukraak gekose leerder slegs sokker speel.',
      checkMode: 'auto',
      options: [frac('10', '25'), frac('15', '25'), frac('5', '25'), frac('20', '25')],
      correctIndex: 0,
      explanation: `Slegs sokker = 15 − 5 = 10. P(slegs sokker) = 10 ÷ 25 = ${frac('10', '25')} (= ${frac('2', '5')}). ${frac('15', '25')} gebruik die volle sokkertotaal sonder om die oorvleueling af te trek, ${frac('5', '25')} gebruik slegs die snyding, en ${frac('20', '25')} gebruik "minstens een" in plaas van "slegs sokker".`,
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Opname van 40 mense wys 22 hou van pizza, 18 hou van hamburgers, en 10 hou van albei. Teken die Venndiagram-streke en vind hoeveel van geen van die twee hou nie.',
      checkMode: 'auto',
      options: ['8', '10', '30', '12'],
      correctIndex: 1,
      explanation: 'Minstens een = 22 + 18 − 10 = 30. Geen van die twee = 40 − 30 = 10. 30 is die "minstens een"-totaal (nie geen nie), en 8 en 12 kom van eenvoudige rekenfoute tydens aftrekking.',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "Is 'om ʼn hartkaart te trek' en 'om ʼn skopkaart te trek' uit ʼn pak kaarte onderling uitsluitend?",
      checkMode: 'auto',
      options: [
        'Nee — sommige kaarte is beide harte en skoppe.',
        'Nee — onderlinge uitsluiting geld slegs vir numeriese uitkomste, nie vir kaartmaste nie.',
        'Ja — ʼn kaart kan nie terselfdertyd ʼn hart en ʼn skop wees nie, aangesien dit verskillende maste sonder oorvleueling is, dus is die gebeurtenisse onderling uitsluitend.',
        'Ja, maar slegs as die pak geen jokers het nie.',
      ],
      correctIndex: 2,
      explanation: 'ʼn Kaart kan nie terselfdertyd ʼn hart en ʼn skop wees nie — dit is verskillende maste sonder oorvleueling, dus is die gebeurtenisse onderling uitsluitend. Die ander opsies versin voorwaardes of redes wat hier nie van toepassing is nie.',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo sê 'om ʼn getal kleiner as 4 te gooi' en 'om ʼn getal groter as 2 te gooi' met ʼn dobbelsteen is onderling uitsluitend. Is hy korrek? Verduidelik.",
      checkMode: 'auto',
      options: [
        'Ja — die twee gebeurtenisse beskryf heeltemal verskillende reekse getalle.',
        'Ja — aangesien 4 en 2 nie in albei beskrywings voorkom nie, is daar geen oorvleueling nie.',
        'Nee — geeneen van die gebeurtenisse kan werklik op ʼn standaard dobbelsteen voorkom nie.',
        'Nee — albei gebeurtenisse sluit die getal 3 in, dus KAN hulle terselfdertyd gebeur, wat beteken hulle is nie onderling uitsluitend nie.',
      ],
      correctIndex: 3,
      explanation: 'Albei gebeurtenisse sluit die getal 3 in (3 < 4 en 3 > 2), dus KAN hulle terselfdertyd gebeur, wat beteken hulle is nie onderling uitsluitend nie. Om te beweer die reekse oorvleuel nooit, of dat geeneen kan voorkom nie, ignoreer dat 3 aan albei voorwaardes voldoen.',
    },

    // ── Q9 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'As P(reën) = 0,35, vind P(geen reën nie).',
      checkMode: 'auto',
      options: ['0,65', '0,35', '1,35', '0,5'],
      correctIndex: 0,
      explanation: 'Met die komplementêre reël: P(geen reën nie) = 1 − P(reën) = 1 − 0,35 = 0,65. 0,35 herhaal net die gegewe waarde in plaas daarvan om dit te komplementeer, 1,35 tel op in plaas van af te trek, en 0,5 hou nie verband met die gegewe waarskynlikheid nie.',
    },

    // ── Q10 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê komplementêre gebeurtenisse is altyd onderling uitsluitend, maar onderling uitsluitende gebeurtenisse is nie altyd komplementêr nie. Is sy korrek? Verduidelik.',
      checkMode: 'auto',
      options: [
        'Nee — komplementêr en onderling uitsluitend beteken presies dieselfde ding.',
        'Ja — komplementêre gebeurtenisse moet onderling uitsluitend wees (kan nie oorvleuel nie) EN moet alle uitkomste dek, terwyl onderling uitsluitende gebeurtenisse slegs vereis dat daar geen oorvleueling is nie, sonder om noodwendig elke moontlike uitkoms te dek.',
        'Nee — onderling uitsluitende gebeurtenisse dek altyd die hele steekproefruimte, net soos komplementêre gebeurtenisse.',
        'Ja, maar slegs vir gebeurtenisse wat dobbelstene behels.',
      ],
      correctIndex: 1,
      explanation: 'Komplementêre gebeurtenisse moet onderling uitsluitend wees EN alle uitkomste dek (P(A) + P(B) = 1), terwyl onderling uitsluitende gebeurtenisse slegs geen oorvleueling hoef te hê nie. Amahle is dus korrek — elke komplementêre paar is onderling uitsluitend, maar nie elke onderling uitsluitende paar is komplementêr nie.',
    },

    // ── Q11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'P(A) = 0,4, P(B) = 0,3, P(A en B) = 0,1. Vind P(A of B).',
      checkMode: 'auto',
      options: ['0,7', '0,5', '0,6', '0,8'],
      correctIndex: 2,
      explanation: 'P(A of B) = P(A) + P(B) − P(A en B) = 0,4 + 0,3 − 0,1 = 0,6. 0,7 vergeet om die oorvleueling af te trek (tel net P(A)+P(B) op), 0,5 trek die oorvleueling twee keer af, en 0,8 tel die oorvleueling op in plaas daarvan om dit af te trek.',
    },

    // ── Q12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'P(A) = 0,5, P(B) = 0,45, en A en B is onderling uitsluitend. Vind P(A of B).',
      checkMode: 'auto',
      options: ['0,05', '0,225', '1,0', '0,95'],
      correctIndex: 3,
      explanation: 'Aangesien hulle onderling uitsluitend is, is P(A en B) = 0, dus P(A of B) = 0,5 + 0,45 − 0 = 0,95. 0,05 trek verkeerdelik die waarskynlikhede af, 0,225 vermenigvuldig hulle (verwar dit met die snyding van onafhanklike gebeurtenisse), en 1,0 rond verkeerdelik op.',
    },

    // ── Q13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê P(A of B) kan nooit 1 oorskry nie. Is hy korrek? Verduidelik waarom dit wiskundig sin maak.',
      checkMode: 'auto',
      options: [
        'Ja — waarskynlikheidswaardes is altyd tussen 0 en 1, wat die hele moontlike steekproefruimte verteenwoordig, dus kan geen gekombineerde waarskynlikheidsberekening logies buite hierdie omvang val nie.',
        'Nee — P(A of B) kan 1 oorskry wanneer A en B nie onderling uitsluitend is nie.',
        'Nee — P(A of B) kan tot by 2 bereik aangesien dit die som van twee afsonderlike waarskynlikhede is.',
        'Ja, maar slegs wanneer A en B onderling uitsluitende gebeurtenisse is.',
      ],
      correctIndex: 0,
      explanation: 'Waarskynlikheidswaardes lê altyd tussen 0 en 1, wat die hele steekproefruimte verteenwoordig, dus kan ʼn geldige gekombineerde waarskynlikheidsberekening nooit logies buite hierdie omvang val nie — dit geld ongeag of A en B onderling uitsluitend is.',
    },

    // ── Q14 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'In ʼn groep is P(hou van sokker) = 0,55, P(hou van rugby) = 0,4, P(hou van albei) = 0,2. Vind P(hou van sokker of rugby).',
      checkMode: 'auto',
      options: ['0,95', '0,75', '0,55', '0,15'],
      correctIndex: 1,
      explanation: 'P(sokker of rugby) = P(sokker) + P(rugby) − P(albei) = 0,55 + 0,4 − 0,2 = 0,75. 0,95 vergeet om die oorvleueling af te trek, 0,55 gebruik slegs P(sokker), en 0,15 trek P(rugby) verkeerdelik van P(albei) af.',
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Studie van 100 pasiënte het bevind 60 het op middel X gereageer, 45 op middel Y, en 25 op albei. Vind hoeveel op geen van die twee gereageer het nie.',
      checkMode: 'auto',
      options: ['80', '15', '20', '5'],
      correctIndex: 2,
      explanation: 'Minstens een = 60 + 45 − 25 = 80. Geen = 100 − 80 = 20. 80 is "minstens een" (nie "geen" nie), en 15 en 5 kom van aftrekfoute.',
    },

    // ── Q16 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê as P(A en B) = 0, dan moet A en B komplementêr wees. Is dit altyd waar? Verduidelik.',
      checkMode: 'auto',
      options: [
        'Ja — P(A en B) = 0 is die definisie van komplementêre gebeurtenisse.',
        'Ja, mits A en B numeriese gebeurtenisse is.',
        'Nee — onderling uitsluitende gebeurtenisse kom nooit in die werklike lewe voor nie, dus is die bewering betekenisloos.',
        'Nee — P(A en B) = 0 bevestig slegs dat die gebeurtenisse onderling uitsluitend is; om ook komplementêr te wees, moet hulle bykomend die hele steekproefruimte dek (P(A) + P(B) = 1).',
      ],
      correctIndex: 3,
      explanation: 'P(A en B) = 0 bevestig slegs dat die gebeurtenisse onderling uitsluitend is. Om ook komplementêr te wees, moet hulle bykomend die hele steekproefruimte dek, d.w.s. P(A) + P(B) = 1 — dus is die bewering nie altyd waar nie.',
    },

    // ── Q17 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Klas van 35 het 20 wat Frans studeer, 18 wat Spaans studeer, en ʼn onbekende aantal wat albei studeer. As 5 geen van die twee studeer nie, vind hoeveel albei studeer.',
      checkMode: 'auto',
      options: ['8', '30', '3', '13'],
      correctIndex: 0,
      explanation: 'Minstens een = 35 − 5 = 30. Met die optellingsreël: 30 = 20 + 18 − albei, dus albei = 38 − 30 = 8. 30 is "minstens een" (nie "albei" nie), 3 kom van die naïewe berekening 20 + 18 − 35, en 13 is ʼn rekenfout.',
    },

    // ── Q18 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind P(A of B) as P(A) = 0,7, P(B) = 0,6, en P(A en B) = 0,5, en verduidelik waarom hierdie scenario geldig is ondanks die hoë individuele waarskynlikhede.',
      checkMode: 'auto',
      options: [
        'P(A of B) = 1,3, wat ongeldig is aangesien waarskynlikhede nie 1 kan oorskry nie.',
        'P(A of B) = 0,7 + 0,6 − 0,5 = 0,8. Dit is geldig aangesien 0,8 ≤ 1, en die groot oorvleueling (0,5) verduidelik waarom die gekombineerde waarskynlikheid nie eenvoudig die som van die twee hoë individuele waarskynlikhede is nie.',
        'P(A of B) = 0,7 + 0,6 + 0,5 = 1,8, wat toon dat die scenario ʼn fout in die gegewe waardes moet bevat.',
        'P(A of B) = 0,6, deur slegs die groter van die twee waarskynlikhede te gebruik.',
      ],
      correctIndex: 1,
      explanation: 'P(A of B) = P(A) + P(B) − P(A en B) = 0,7 + 0,6 − 0,5 = 0,8, wat geldig is aangesien dit tussen 0 en 1 lê — die groot oorvleueling verduidelik waarom die gekombineerde waarde nie eenvoudig die som van die twee hoë individuele waarskynlikhede is nie.',
    },

    // ── Q19 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo gooi ʼn muntstuk op en gooi ʼn dobbelsteen. Hy beweer dat om 'kop' en 'ʼn ewe getal' te kry onderling uitsluitend is omdat dit verskillende tipes gebeurtenisse is. Is sy redenasie korrek? Verduidelik.",
      checkMode: 'auto',
      options: [
        'Ja — aangesien ʼn muntstuk en ʼn dobbelsteen verskillende voorwerpe is, is hul uitkomste altyd onderling uitsluitend.',
        'Ja — onderlinge uitsluiting geld vir enige twee gebeurtenisse ongeag konteks.',
        "Nee — onderling uitsluitend beteken spesifiek dat die gebeurtenisse nie saam in DIESELFDE proefneming van DIESELFDE tipe gebeurtenis kan voorkom nie; aangesien die opgooi van ʼn muntstuk en die gooi van ʼn dobbelsteen onafhanklike aksies is wat gelyktydig gebeur, kan albei uitkomste (kop EN ʼn ewe getal) saam voorkom, dus is dit nie werklik ʼn vraag oor onderlinge uitsluiting in die tradisionele enkel-gebeurtenis-sin nie.",
        'Nee — muntstukke en dobbelstene kan nooit gelyktydige uitkomste lewer nie.',
      ],
      correctIndex: 2,
      explanation: 'Onderling uitsluitend beteken spesifiek dat die gebeurtenisse nie saam in dieselfde proefneming van dieselfde tipe gebeurtenis kan voorkom nie. Aangesien die muntstukgooi en die dobbelsteengooi onafhanklike aksies is wat gelyktydig gebeur, kan albei uitkomste saam voorkom, dus is dit nie werklik ʼn vraag oor onderlinge uitsluiting in die tradisionele sin nie.',
    },

    // ── Q20 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Opname van 90 mense oor drankvoorkeure vind 50 hou van tee, 40 hou van koffie, 35 hou van vrugtesap, 20 hou van tee en koffie, 15 hou van koffie en vrugtesap, 18 hou van tee en vrugtesap, en 8 hou van al drie. Vind hoeveel van minstens een drankie hou.',
      checkMode: 'auto',
      options: ['90', '65', '100', '80'],
      correctIndex: 3,
      explanation: 'Met die algemene formule vir drie versamelings: Minstens een = 50 + 40 + 35 − 20 − 15 − 18 + 8 = 80. 90 neem aan dat almal van minstens een drankie hou; 100 tel al die waardes op sonder om oorvleuelings af te trek; 65 kom van ʼn rekenfout in die berekening.',
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // PRACTICE SETS — 3 sets of 20 questions each (Phase 1: content only, no diagrams)
  // Block 1 (0-1):   Relatiewe frekwensie teenoor teoretiese waarskynlikheid
  // Block 2 (2-5):   Venndiagram tweestel-waarskynlikheid (slegs/geen/minstens een) [DIAGRAM LATER]
  // Block 3 (6-8):   Onderling uitsluitende gebeurtenisse
  // Block 4 (9-11):  Komplementêre gebeurtenisse P(nie A nie) = 1 − P(A)
  // Block 5 (12-15): Algemene optellingsreël P(A of B) = P(A) + P(B) − P(A en B)
  // Block 6 (16-19): Gekombineerde meerstap-waarskynlikheidsprobleme
  // ─────────────────────────────────────────────────────────────────────────
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Block 1 — Relatiewe frekwensie teenoor teoretiese waarskynlikheid (Easy)
        { difficulty: 'Easy', question: 'ʼn Dobbelsteen word 80 keer gegooi en wys presies 15 keer ʼn 6. Vind die relatiewe frekwensie om ʼn 6 te gooi as ʼn breuk.', checkMode: 'auto', options: [frac('3', '16'), frac('1', '6'), frac('15', '65'), frac('80', '15')], correctIndex: 0, explanation: `Relatiewe frekwensie = aantal kere wat gebeurtenis voorgekom het ÷ totale proefnemings = 15 ÷ 80 = 15/80 = ${frac('3', '16')}. ${frac('1', '6')} is die teoretiese waarskynlikheid (nie die waargenome frekwensie nie), ${frac('15', '65')} gebruik die verkeerde totaal, en ${frac('80', '15')} keer die breuk om.` },
        { difficulty: 'Easy', question: 'ʼn Muntstuk word 150 keer opgegooi en land 68 keer op kop. Vergelyk hierdie relatiewe frekwensie met die teoretiese waarskynlikheid van kop, en sê of hulle naby aan mekaar is.', checkMode: 'auto', options: ['Relatiewe frekwensie ≈ 0,547 (met 82 sterte), wat ver van die teoretiese waarskynlikheid van 0,5 is.', 'Relatiewe frekwensie ≈ 0,453 en teoretiese waarskynlikheid = 0,5 — hierdie waardes is redelik naby aan mekaar, met die klein verskil wat verwag word weens ʼn beperkte aantal proefnemings.', 'Relatiewe frekwensie = 0,5 presies, wat perfek met die teoretiese waarskynlikheid ooreenstem.', 'Relatiewe frekwensie ≈ 0,453 en teoretiese waarskynlikheid = 0,5 — hierdie waardes is ver van mekaar, wat daarop dui dat die muntstuk swaar bevooroordeeld is.'], correctIndex: 1, explanation: 'Relatiewe frekwensie = 68/150 = 34/75 ≈ 0,453. Teoretiese waarskynlikheid = 1/2 = 0,5. Hierdie waardes is redelik naby aan mekaar, met die klein verskil wat verwag word weens ʼn beperkte aantal proefnemings — nie "ver van mekaar" en nie ʼn presiese ooreenstemming nie.' },

        // Block 2 — Venndiagram tweestel-waarskynlikheid (Easy-Medium) [DIAGRAM LATER]
        { difficulty: 'Easy-Medium', question: 'ʼn Venndiagram wys ʼn klas van 40 leerders: 22 studeer Wiskunde, 19 studeer Wetenskap, en 9 studeer albei. Vind hoeveel geen van die twee vakke studeer nie.', checkMode: 'auto', options: ['32', '9', '8', '22'], correctIndex: 2, explanation: 'Minstens een = 22 + 19 − 9 = 32. Geen = 40 − 32 = 8. 32 is "minstens een" (nie "geen" nie), 9 is net die oorvleueling, en 22 is net die Wiskunde-totaal.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wiskunde</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wetenskap</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Gebruik dieselfde klas van 40 (22 studeer Wiskunde, 19 studeer Wetenskap, 9 studeer albei), vind P(ʼn leerder studeer slegs Wiskunde, nie Wetenskap nie).', checkMode: 'auto', options: [frac('22', '40'), frac('9', '40'), frac('8', '40'), frac('13', '40')], correctIndex: 3, explanation: `Slegs Wiskunde = 22 − 9 = 13. P(slegs Wiskunde) = ${frac('13', '40')}. ${frac('22', '40')} vergeet om die oorvleueling af te trek, ${frac('9', '40')} gebruik slegs die snyding, en ${frac('8', '40')} gebruik eerder die "geen"-telling.`, diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wiskunde</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wetenskap</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Gebruik dieselfde klas van 40 (22 studeer Wiskunde, 19 studeer Wetenskap, 9 studeer albei), vind P(ʼn leerder studeer geen van die twee vakke nie).', checkMode: 'auto', options: [frac('1', '5'), frac('32', '40'), frac('9', '40'), frac('22', '40')], correctIndex: 0, explanation: `Geen = 40 − 32 = 8 (uit die vorige vraag). P(geen) = 8/40 = ${frac('1', '5')}. ${frac('32', '40')} is "minstens een" (die teenoorgestelde streek), ${frac('9', '40')} is net die oorvleueling, en ${frac('22', '40')} is net die Wiskunde-totaal.`, diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wiskunde</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wetenskap</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Zanele teken ʼn Venndiagram vir ʼn opname van 40 leerders: 22 studeer Wiskunde, 19 studeer Wetenskap, 9 studeer albei, 8 studeer geen. Sy beweer P(studeer minstens een van die twee vakke) = 22/40 omdat dit die Wiskunde-totaal is. Verduidelik haar fout en gee die korrekte waarskynlikheid.', checkMode: 'auto', options: ['Sy is korrek — P(minstens een) is inderdaad 22/40 aangesien dit reeds oorvleuelende leerders insluit.', 'Sy het slegs die Wiskunde-totaal gebruik in plaas van die streek wat minstens een vak dek. "Minstens een" beteken slegs Wiskunde, slegs Wetenskap, en albei saam: 13 + 10 + 9 = 32 (of eweredig 40 − 8 = 32). Die korrekte waarskynlikheid is 32/40 = 4/5, nie 22/40 nie.', 'Sy is korrek, maar moes eerder 19/40 (die Wetenskap-totaal) gebruik het.', 'Sy het ʼn fout gemaak — die korrekte waarskynlikheid om minstens een vak te studeer is 9/40, slegs die oorvleueling.'], correctIndex: 1, explanation: 'Zanele het slegs die Wiskunde-totaal gebruik in plaas van die streek wat minstens een vak dek. "Minstens een" kombineer slegs Wiskunde, slegs Wetenskap, en albei: 13 + 10 + 9 = 32, dus is die korrekte waarskynlikheid 32/40 = 4/5, nie 22/40 nie.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wiskunde</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wetenskap</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Block 3 — Onderling uitsluitende gebeurtenisse (Medium)
        { difficulty: 'Medium', question: "Is 'om ʼn ruitkaart te trek' en 'om ʼn klawerkaart te trek' uit ʼn standaardpak kaarte onderling uitsluitend? Verduidelik.", checkMode: 'auto', options: ['Nee — sommige kaarte is beide ruite en klawers.', 'Nee — onderlinge uitsluiting geld nie vir kaartmaste nie.', 'Ja — ʼn kaart kan nie terselfdertyd ʼn ruit en ʼn klawer wees nie, aangesien dit verskillende maste sonder oorvleueling is, dus is die gebeurtenisse onderling uitsluitend.', 'Ja, maar slegs vir prentkaarte.'], correctIndex: 2, explanation: 'ʼn Kaart kan nie terselfdertyd ʼn ruit en ʼn klawer wees nie, aangesien dit verskillende maste sonder oorvleueling is, dus is die gebeurtenisse onderling uitsluitend.' },
        { difficulty: 'Medium', question: "Thabo sê 'om ʼn veelvoud van 3 te gooi' en 'om ʼn ewe getal te gooi' met ʼn dobbelsteen is onderling uitsluitend. Is hy korrek? Verduidelik.", checkMode: 'auto', options: ['Ja — veelvoude van 3 en ewe getalle deel nooit ʼn waarde op ʼn standaard dobbelsteen nie.', 'Ja — 3 en 2 is verskillende getalle, dus kan die kategorieë nie oorvleuel nie.', 'Nee — geen van die getalle op ʼn dobbelsteen is beide ʼn veelvoud van 3 én ewe nie.', 'Nee — die getal 6 is beide ʼn veelvoud van 3 én ʼn ewe getal, dus KAN albei gebeurtenisse terselfdertyd gebeur, wat beteken hulle is nie onderling uitsluitend nie.'], correctIndex: 3, explanation: 'Die getal 6 is beide ʼn veelvoud van 3 én ʼn ewe getal, dus KAN albei gebeurtenisse terselfdertyd gebeur, wat beteken hulle is nie onderling uitsluitend nie.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Sak bevat gekleurde knoppies. P(trek rooi) = 0,3 en P(trek blou) = 0,45, en om rooi te trek en om blou te trek is onderling uitsluitende gebeurtenisse. Vind P(trek rooi of blou).', checkMode: 'auto', options: ['0,75', '0,135', '0,15', '0,3'], correctIndex: 0, explanation: 'Aangesien die gebeurtenisse onderling uitsluitend is, is P(A en B) = 0, dus P(rooi of blou) = P(rooi) + P(blou) = 0,3 + 0,45 = 0,75. 0,135 vermenigvuldig verkeerdelik asof dit ʼn snyding soek, 0,15 trek af in plaas daarvan om op te tel, en 0,3 gebruik slegs P(rooi).' },

        // Block 4 — Komplementêre gebeurtenisse (Medium)
        { difficulty: 'Medium', question: 'P(ʼn aflewering kom laat aan) = 0,24. Vind P(die aflewering kom nie laat aan nie).', checkMode: 'auto', options: ['0,24', '0,76', '1,24', '0,5'], correctIndex: 1, explanation: 'Met die komplementêre reël: P(nie laat nie) = 1 − P(laat) = 1 − 0,24 = 0,76. 0,24 herhaal net die gegewe waarde, 1,24 tel op in plaas van af te trek, en 0,5 hou nie verband met die gegewe waarskynlikheid nie.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 16 albasters, waarvan 6 groen is. Een albaster word lukraak getrek. Vind P(nie groen nie).', checkMode: 'auto', options: [frac('6', '16'), frac('16', '6'), frac('5', '8'), frac('6', '10')], correctIndex: 2, explanation: `P(groen) = 6/16 = 3/8. P(nie groen nie) = 1 − 3/8 = ${frac('5', '8')} (= 10/16). ${frac('6', '16')} is P(groen) self, ${frac('16', '6')} keer die breuk om, en ${frac('6', '10')} verwar die teller en noemer van die komplement.` },
        { difficulty: 'Medium-Hard', question: "Lindiwe sê komplementêre gebeurtenisse en onderling uitsluitende gebeurtenisse beteken presies dieselfde ding. Is sy korrek? Verduidelik met behulp van die definisies van elk.", checkMode: 'auto', options: ['Ja — albei terme beskryf gebeurtenisse wat nie terselfdertyd kan gebeur nie, sonder verdere voorwaardes.', 'Ja — komplementêr is net nog ʼn naam wat wiskundiges vir onderling uitsluitend gebruik.', 'Nee — komplementêre gebeurtenisse oorvleuel glad nie met onderling uitsluitende gebeurtenisse nie.', 'Nee — onderling uitsluitend vereis slegs dat die gebeurtenisse nie saam kan voorkom nie (P(A en B) = 0). Komplementêre gebeurtenisse moet onderling uitsluitend wees EN moet saam die hele steekproefruimte dek (P(A) + P(B) = 1). Elke komplementêre paar is onderling uitsluitend, maar nie elke onderling uitsluitende paar is komplementêr nie.'], correctIndex: 3, explanation: 'Onderling uitsluitend vereis slegs dat die gebeurtenisse nie saam kan voorkom nie. Komplementêre gebeurtenisse moet onderling uitsluitend wees EN saam die hele steekproefruimte dek — Lindiwe is dus verkeerd om die twee terme as identies te beskou.' },

        // Block 5 — Algemene optellingsreël (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'P(A) = 0,5, P(B) = 0,35, en P(A en B) = 0,15. Vind P(A of B).', checkMode: 'auto', options: ['0,7', '0,85', '1,0', '0,5'], correctIndex: 0, explanation: 'P(A of B) = P(A) + P(B) − P(A en B) = 0,5 + 0,35 − 0,15 = 0,7. 0,85 vergeet om die oorvleueling af te trek, 1,0 tel al drie waardes op, en 0,5 gebruik slegs P(A).' },
        { difficulty: 'Medium-Hard', question: 'P(A) = 0,4, P(B) = 0,45, en A en B is onderling uitsluitend. Vind P(A of B).', checkMode: 'auto', options: ['0,18', '0,85', '0,05', '1,0'], correctIndex: 1, explanation: 'Aangesien hulle onderling uitsluitend is, is P(A en B) = 0. P(A of B) = 0,4 + 0,45 − 0 = 0,85. 0,18 vermenigvuldig verkeerdelik die waarskynlikhede, 0,05 trek af in plaas daarvan om op te tel, en 1,0 rond verkeerdelik op.' },
        { difficulty: 'Hard', question: 'In ʼn groep leerders is P(speel skaak) = 0,6, P(speel dambord) = 0,5, en P(speel albei) = 0,25. Vind P(speel skaak of dambord).', checkMode: 'auto', options: ['1,1', '0,35', '0,85', '0,6'], correctIndex: 2, explanation: 'P(skaak of dambord) = P(skaak) + P(dambord) − P(albei) = 0,6 + 0,5 − 0,25 = 0,85. 1,1 vergeet om die oorvleueling af te trek, 0,35 trek die oorvleueling twee keer af, en 0,6 gebruik slegs P(skaak).' },
        { difficulty: 'Hard', question: 'Sipho bereken P(A) = 0,65, P(B) = 0,55, P(A en B) = 0,4, en kry P(A of B) = 1,2. Verduidelik waarom hierdie resultaat verkeerd moet wees en vind die korrekte waarde.', checkMode: 'auto', options: ['Sy antwoord is korrek — waarskynlikhede van gekombineerde gebeurtenisse kan 1 oorskry wanneer albei individuele waarskynlikhede hoog is.', 'Sy fout was in die individuele waarskynlikhede, nie die formule nie; die korrekte waarde is P(A of B) = 1,2 met aangepaste insette.', 'Hy moes al drie waardes saam opgetel het om P(A of B) = 1,6 te kry.', 'ʼn Waarskynlikheid kan nooit 1 oorskry nie, aangesien dit ʼn verhouding van die hele steekproefruimte verteenwoordig. Sy fout was waarskynlik dat hy vergeet het om die oorvleueling af te trek, of verkeerd opgetel het. Die korrekte waarde is P(A of B) = 0,65 + 0,55 − 0,4 = 0,8, wat geldig is aangesien dit tussen 0 en 1 lê.'], correctIndex: 3, explanation: 'ʼn Waarskynlikheid kan nooit 1 oorskry nie. Sipho het waarskynlik vergeet om die oorvleueling af te trek, of verkeerd opgetel — die korrekte waarde is P(A of B) = 0,65 + 0,55 − 0,4 = 0,8.' },

        // Block 6 — Gekombineerde meerstap-waarskynlikheid (Hard)
        { difficulty: 'Hard', question: 'ʼn Venndiagram wys 38 atlete in totaal: 5 speel geen van sokker of netbal nie, 21 speel sokker, en 19 speel netbal. Vind hoeveel atlete albei sportsoorte speel.', checkMode: 'auto', options: ['7', '33', '2', '12'], correctIndex: 0, explanation: 'Minstens een = 38 − 5 = 33. Met die optellingsreël: 33 = 21 + 19 − albei, dus albei = 40 − 33 = 7. 33 is "minstens een" (nie "albei" nie), en 2 en 12 kom van rekenfoute.' },
        { difficulty: 'Hard', question: 'ʼn Opname van 100 mense oor troeteldiere vind 45 het ʼn hond, 38 het ʼn kat, 30 het ʼn vis, 18 het ʼn hond en kat, 15 het ʼn kat en vis, 12 het ʼn hond en vis, en 6 het al drie. Vind hoeveel mense geen van die drie troeteldiere het nie.', checkMode: 'auto', options: ['74', '26', '20', '32'], correctIndex: 1, explanation: 'Minstens een troeteldier = 45 + 38 + 30 − 18 − 15 − 12 + 6 = 74. Geen = 100 − 74 = 26. 74 is "minstens een" (nie "geen" nie), en 20 en 32 kom van rekenfoute.' },
        { difficulty: 'Hard', question: 'ʼn Boks het 10 penne: 6 blou en 4 swart. Lerato kies ʼn pen, hou dit, en kies dan ʼn tweede pen sonder vervanging. Vind P(albei penne is blou).', checkMode: 'auto', options: [frac('9', '25'), frac('3', '5'), frac('1', '3'), frac('5', '9')], correctIndex: 2, explanation: `P(blou eerste) = 6/10 = 3/5. Sonder vervanging, P(blou tweede) = 5/9. Gekombineer: 3/5 × 5/9 = 15/45 = ${frac('1', '3')}. ${frac('9', '25')} neem verkeerdelik vervanging aan (gebruik 6/10 twee keer), ${frac('3', '5')} verreken slegs die eerste trekking, en ${frac('5', '9')} verreken slegs die tweede trekking.` },
        { difficulty: 'Hard', question: 'Amahle sê dat vir enige twee gebeurtenisse A en B, P(A of B) altyd gelyk is aan P(A) + P(B), ongeag of die gebeurtenisse oorvleuel. Verduidelik waarom dit slegs in sekere gevalle waar is, met verwysing na beide die optellingsreël en onderling uitsluitende gebeurtenisse.', checkMode: 'auto', options: ['Sy is korrek — die optellingsreël vereenvoudig altyd tot P(A) + P(B) ongeag oorvleueling.', 'Sy is slegs korrek wanneer P(A) en P(B) albei groter as 0,5 is.', 'Sy is verkeerd omdat P(A of B) altyd kleiner as P(A) + P(B) is, ongeag die oorvleueling.', 'Dit is slegs waar wanneer A en B onderling uitsluitend is, wat beteken P(A en B) = 0, sodat die algemene optellingsreël P(A of B) = P(A) + P(B) − P(A en B) vereenvoudig tot P(A of B) = P(A) + P(B). As die gebeurtenisse oorvleuel (nie onderling uitsluitend is nie), moet die snyding afgetrek word om te verhoed dat uitkomste wat aan albei gebeurtenisse behoort, dubbel getel word, dus P(A of B) = P(A) + P(B) − P(A en B) met ʼn P(A en B) wat nie nul is nie.'], correctIndex: 3, explanation: 'Dit is slegs waar wanneer A en B onderling uitsluitend is (P(A en B) = 0). As die gebeurtenisse oorvleuel, moet die snyding afgetrek word om dubbeltelling te vermy.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het relatiewe frekwensie, Venndiagramme, onderling uitsluitende en komplementêre gebeurtenisse, en die optellingsreël onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor die algemene optellingsreël of Venndiagramme en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde oor onderling uitsluitende en komplementêre gebeurtenisse, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Block 1 — Relatiewe frekwensie teenoor teoretiese waarskynlikheid (Easy)
        { difficulty: 'Easy', question: 'ʼn Dobbelsteen word 120 keer gegooi en wys presies 22 keer ʼn 4. Vind die relatiewe frekwensie om ʼn 4 te gooi as ʼn breuk.', checkMode: 'auto', options: [frac('11', '60'), frac('1', '6'), frac('22', '98'), frac('120', '22')], correctIndex: 0, explanation: `Relatiewe frekwensie = aantal kere wat gebeurtenis voorgekom het ÷ totale proefnemings = 22 ÷ 120 = 22/120 = ${frac('11', '60')}. ${frac('1', '6')} is die teoretiese waarskynlikheid (nie die waargenome frekwensie nie), ${frac('22', '98')} gebruik die verkeerde totaal, en ${frac('120', '22')} keer die breuk om.` },
        { difficulty: 'Easy', question: 'ʼn Muntstuk word 250 keer opgegooi en land 132 keer op kop. Vergelyk hierdie relatiewe frekwensie met die teoretiese waarskynlikheid van kop, en sê of hulle naby aan mekaar is.', checkMode: 'auto', options: ['Relatiewe frekwensie ≈ 0,472 (met 118 sterte), ver van die teoretiese waarskynlikheid van 0,5.', 'Relatiewe frekwensie ≈ 0,528 en teoretiese waarskynlikheid = 0,5 — hierdie waardes is redelik naby aan mekaar, met die klein verskil wat verwag word weens ʼn beperkte aantal proefnemings.', 'Relatiewe frekwensie = 0,5 presies, wat perfek met die teoretiese waarskynlikheid ooreenstem.', 'Relatiewe frekwensie ≈ 0,528 en teoretiese waarskynlikheid = 0,5 — hierdie waardes is ver van mekaar, wat op vooroordeel dui.'], correctIndex: 1, explanation: 'Relatiewe frekwensie = 132/250 = 66/125 = 0,528. Teoretiese waarskynlikheid = 1/2 = 0,5. Hierdie waardes is redelik naby aan mekaar, met die klein verskil wat verwag word weens ʼn beperkte aantal proefnemings — nie "ver van mekaar" en nie ʼn presiese ooreenstemming nie.' },

        // Block 2 — Venndiagram tweestel-waarskynlikheid (Easy-Medium) [DIAGRAM LATER]
        { difficulty: 'Easy-Medium', question: 'ʼn Venndiagram wys ʼn klas van 50 leerders: 28 studeer Kuns, 20 studeer Drama, en 10 studeer albei. Vind hoeveel geen van die twee vakke studeer nie.', checkMode: 'auto', options: ['38', '10', '12', '28'], correctIndex: 2, explanation: 'Minstens een = 28 + 20 − 10 = 38. Geen = 50 − 38 = 12. 38 is "minstens een" (nie "geen" nie), 10 is net die oorvleueling, en 28 is net die Kuns-totaal.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Kuns</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Drama</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Gebruik dieselfde klas van 50 (28 studeer Kuns, 20 studeer Drama, 10 studeer albei), vind P(ʼn leerder studeer slegs Kuns, nie Drama nie).', checkMode: 'auto', options: [frac('28', '50'), frac('10', '50'), frac('12', '50'), frac('9', '25')], correctIndex: 3, explanation: `Slegs Kuns = 28 − 10 = 18. P(slegs Kuns) = 18/50 = ${frac('9', '25')}. ${frac('28', '50')} vergeet om die oorvleueling af te trek, ${frac('10', '50')} gebruik slegs die snyding, en ${frac('12', '50')} gebruik eerder die "geen"-telling.`, diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Kuns</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Drama</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Gebruik dieselfde klas van 50 (28 studeer Kuns, 20 studeer Drama, 10 studeer albei), vind P(ʼn leerder studeer geen van die twee vakke nie).', checkMode: 'auto', options: [frac('6', '25'), frac('38', '50'), frac('10', '50'), frac('28', '50')], correctIndex: 0, explanation: `Geen = 50 − 38 = 12 (uit die vorige vraag). P(geen) = 12/50 = ${frac('6', '25')}. ${frac('38', '50')} is "minstens een" (die teenoorgestelde streek), ${frac('10', '50')} is net die oorvleueling, en ${frac('28', '50')} is net die Kuns-totaal.`, diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Kuns</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Drama</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Bongani teken ʼn Venndiagram vir ʼn opname van 50 leerders: 28 studeer Kuns, 20 studeer Drama, 10 studeer albei, 12 studeer geen. Hy beweer P(studeer minstens een van die twee vakke) = 28/50 omdat dit die Kuns-totaal is. Verduidelik sy fout en gee die korrekte waarskynlikheid.', checkMode: 'auto', options: ['Hy is korrek — P(minstens een) = 28/50 verreken reeds elke leerder wat ʼn vak studeer.', 'Hy het slegs die Kuns-totaal gebruik in plaas van die streek wat minstens een vak dek. "Minstens een" beteken slegs Kuns, slegs Drama, en albei saam: 18 + 10 + 10 = 38 (of eweredig 50 − 12 = 38). Die korrekte waarskynlikheid is 38/50 = 19/25, nie 28/50 nie.', 'Hy is korrek, maar moes eerder 20/50 (die Drama-totaal) gebruik het.', 'Hy het ʼn fout gemaak — die korrekte waarskynlikheid is 10/50, slegs die oorvleueling.'], correctIndex: 1, explanation: 'Bongani het slegs die Kuns-totaal gebruik in plaas van die streek wat minstens een vak dek. "Minstens een" kombineer slegs Kuns, slegs Drama, en albei: 18 + 10 + 10 = 38, dus is die korrekte waarskynlikheid 38/50 = 19/25, nie 28/50 nie.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Kuns</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Drama</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Block 3 — Onderling uitsluitende gebeurtenisse (Medium)
        { difficulty: 'Medium', question: "Is 'om ʼn Heer te trek' en 'om ʼn Vrou te trek' uit ʼn standaardpak kaarte onderling uitsluitend? Verduidelik.", checkMode: 'auto', options: ['Nee — sommige kaarte is beide ʼn Heer en ʼn Vrou.', 'Nee — onderlinge uitsluiting geld nie vir kaartrange nie.', 'Ja — ʼn kaart kan nie terselfdertyd ʼn Heer en ʼn Vrou wees nie, aangesien dit verskillende range sonder oorvleueling is, dus is die gebeurtenisse onderling uitsluitend.', 'Ja, maar slegs vir rooi kaarte.'], correctIndex: 2, explanation: 'ʼn Kaart kan nie terselfdertyd ʼn Heer en ʼn Vrou wees nie, aangesien dit verskillende range sonder oorvleueling is, dus is die gebeurtenisse onderling uitsluitend.' },
        { difficulty: 'Medium', question: "Naledi sê 'om ʼn getal kleiner as 5 te gooi' en 'om ʼn getal groter as 3 te gooi' met ʼn dobbelsteen is onderling uitsluitend. Is sy korrek? Verduidelik.", checkMode: 'auto', options: ['Ja — 5 en 3 kom nooit saam op ʼn dobbelsteen voor nie.', 'Ja — die reekse deel geen grensgetalle nie.', 'Nee — geen van die getalle op ʼn dobbelsteen voldoen aan albei voorwaardes nie.', 'Nee — die getal 4 is beide kleiner as 5 én groter as 3, dus KAN albei gebeurtenisse terselfdertyd gebeur, wat beteken hulle is nie onderling uitsluitend nie.'], correctIndex: 3, explanation: 'Die getal 4 is beide kleiner as 5 én groter as 3, dus KAN albei gebeurtenisse terselfdertyd gebeur, wat beteken hulle is nie onderling uitsluitend nie.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Wentelwiel land op gekleurde afdelings. P(land op geel) = 0,35 en P(land op groen) = 0,4, en om op geel te land en om op groen te land is onderling uitsluitende gebeurtenisse. Vind P(land op geel of groen).', checkMode: 'auto', options: ['0,75', '0,14', '0,05', '0,4'], correctIndex: 0, explanation: 'Aangesien die gebeurtenisse onderling uitsluitend is, is P(A en B) = 0, dus P(geel of groen) = P(geel) + P(groen) = 0,35 + 0,4 = 0,75. 0,14 vermenigvuldig verkeerdelik die waarskynlikhede, 0,05 trek af in plaas daarvan om op te tel, en 0,4 gebruik slegs P(groen).' },

        // Block 4 — Komplementêre gebeurtenisse (Medium)
        { difficulty: 'Medium', question: 'P(ʼn vlug vertrek betyds) = 0,42. Vind P(die vlug vertrek nie betyds nie).', checkMode: 'auto', options: ['0,42', '0,58', '1,42', '0,5'], correctIndex: 1, explanation: 'Met die komplementêre reël: P(nie betyds nie) = 1 − P(betyds) = 1 − 0,42 = 0,58. 0,42 herhaal net die gegewe waarde, 1,42 tel op in plaas van af te trek, en 0,5 hou nie verband met die gegewe waarskynlikheid nie.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 18 albasters, waarvan 7 geel is. Een albaster word lukraak getrek. Vind P(nie geel nie).', checkMode: 'auto', options: [frac('7', '18'), frac('18', '7'), frac('11', '18'), frac('7', '11')], correctIndex: 2, explanation: `P(geel) = 7/18. P(nie geel nie) = 1 − 7/18 = ${frac('11', '18')}. ${frac('7', '18')} is P(geel) self, ${frac('18', '7')} keer die breuk om, en ${frac('7', '11')} verwar die teller en noemer van die komplement.` },
        { difficulty: 'Medium-Hard', question: "Kagiso sê komplementêre gebeurtenisse en onderling uitsluitende gebeurtenisse beteken presies dieselfde ding. Is hy korrek? Verduidelik met behulp van die definisies van elk.", checkMode: 'auto', options: ['Ja — albei beskryf gebeurtenisse sonder oorvleueling, en niks meer nie.', 'Ja — komplementêr is nog ʼn term wat wiskundiges vir onderling uitsluitend gebruik.', 'Nee — komplementêre gebeurtenisse kan nooit onderling uitsluitend wees nie.', 'Nee — onderling uitsluitend vereis slegs dat die gebeurtenisse nie saam kan voorkom nie (P(A en B) = 0). Komplementêre gebeurtenisse moet onderling uitsluitend wees EN moet saam die hele steekproefruimte dek (P(A) + P(B) = 1). Elke komplementêre paar is onderling uitsluitend, maar nie elke onderling uitsluitende paar is komplementêr nie.'], correctIndex: 3, explanation: 'Onderling uitsluitend vereis slegs dat die gebeurtenisse nie saam kan voorkom nie. Komplementêre gebeurtenisse moet onderling uitsluitend wees EN saam die hele steekproefruimte dek — Kagiso is dus verkeerd om die twee terme as identies te beskou.' },

        // Block 5 — Algemene optellingsreël (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'P(A) = 0,45, P(B) = 0,3, en P(A en B) = 0,1. Vind P(A of B).', checkMode: 'auto', options: ['0,65', '0,75', '0,85', '0,45'], correctIndex: 0, explanation: 'P(A of B) = P(A) + P(B) − P(A en B) = 0,45 + 0,3 − 0,1 = 0,65. 0,75 vergeet om die oorvleueling af te trek, 0,85 tel die oorvleueling op in plaas daarvan om dit af te trek, en 0,45 gebruik slegs P(A).' },
        { difficulty: 'Medium-Hard', question: 'P(A) = 0,35, P(B) = 0,55, en A en B is onderling uitsluitend. Vind P(A of B).', checkMode: 'auto', options: ['0,1925', '0,9', '0,2', '1,0'], correctIndex: 1, explanation: 'Aangesien hulle onderling uitsluitend is, is P(A en B) = 0. P(A of B) = 0,35 + 0,55 − 0 = 0,9. 0,1925 vermenigvuldig verkeerdelik die waarskynlikhede, 0,2 trek af in plaas daarvan om op te tel, en 1,0 rond verkeerdelik op.' },
        { difficulty: 'Hard', question: 'In ʼn groep leerders is P(speel hokkie) = 0,7, P(speel tennis) = 0,4, en P(speel albei) = 0,3. Vind P(speel hokkie of tennis).', checkMode: 'auto', options: ['1,1', '0,3', '0,8', '0,7'], correctIndex: 2, explanation: 'P(hokkie of tennis) = P(hokkie) + P(tennis) − P(albei) = 0,7 + 0,4 − 0,3 = 0,8. 1,1 vergeet om die oorvleueling af te trek, 0,3 gebruik slegs P(albei), en 0,7 gebruik slegs P(hokkie).' },
        { difficulty: 'Hard', question: 'Lerato bereken P(A) = 0,55, P(B) = 0,5, P(A en B) = 0,3, en kry P(A of B) = 1,05. Verduidelik waarom hierdie resultaat verkeerd moet wees en vind die korrekte waarde.', checkMode: 'auto', options: ['Haar antwoord is korrek — waarskynlikhede kan 1 oorskry wanneer albei individuele waardes hoog is.', 'Haar fout was in die gegewe waarskynlikhede, nie die berekening nie; 1,05 is aanvaarbaar.', 'Sy moes al drie getalle opgetel het om P(A of B) = 1,35 te kry.', 'ʼn Waarskynlikheid kan nooit 1 oorskry nie, aangesien dit ʼn verhouding van die hele steekproefruimte verteenwoordig. Haar fout was waarskynlik dat sy vergeet het om die oorvleueling af te trek, of verkeerd opgetel het. Die korrekte waarde is P(A of B) = 0,55 + 0,5 − 0,3 = 0,75, wat geldig is aangesien dit tussen 0 en 1 lê.'], correctIndex: 3, explanation: 'ʼn Waarskynlikheid kan nooit 1 oorskry nie. Lerato het waarskynlik vergeet om die oorvleueling af te trek, of verkeerd opgetel — die korrekte waarde is P(A of B) = 0,55 + 0,5 − 0,3 = 0,75.' },

        // Block 6 — Gekombineerde meerstap-waarskynlikheid (Hard)
        { difficulty: 'Hard', question: 'ʼn Venndiagram wys 42 atlete in totaal: 6 speel geen van sokker of netbal nie, 24 speel sokker, en 20 speel netbal. Vind hoeveel atlete albei sportsoorte speel.', checkMode: 'auto', options: ['8', '36', '4', '14'], correctIndex: 0, explanation: 'Minstens een = 42 − 6 = 36. Met die optellingsreël: 36 = 24 + 20 − albei, dus albei = 44 − 36 = 8. 36 is "minstens een" (nie "albei" nie), en 4 en 14 kom van rekenfoute.' },
        { difficulty: 'Hard', question: 'ʼn Opname van 100 mense oor troeteldiere vind 50 het ʼn hond, 42 het ʼn kat, 35 het ʼn vis, 20 het ʼn hond en kat, 16 het ʼn kat en vis, 14 het ʼn hond en vis, en 7 het al drie. Vind hoeveel mense geen van die drie troeteldiere het nie.', checkMode: 'auto', options: ['84', '16', '10', '24'], correctIndex: 1, explanation: 'Minstens een troeteldier = 50 + 42 + 35 − 20 − 16 − 14 + 7 = 84. Geen = 100 − 84 = 16. 84 is "minstens een" (nie "geen" nie), en 10 en 24 kom van rekenfoute.' },
        { difficulty: 'Hard', question: 'ʼn Boks het 12 penne: 7 blou en 5 swart. Thabo kies ʼn pen, hou dit, en kies dan ʼn tweede pen sonder vervanging. Vind P(albei penne is blou).', checkMode: 'auto', options: [frac('49', '144'), frac('7', '12'), frac('7', '22'), frac('6', '11')], correctIndex: 2, explanation: `P(blou eerste) = 7/12. Sonder vervanging, P(blou tweede) = 6/11. Gekombineer: 7/12 × 6/11 = 42/132 = ${frac('7', '22')}. ${frac('49', '144')} neem verkeerdelik vervanging aan (gebruik 7/12 twee keer), ${frac('7', '12')} verreken slegs die eerste trekking, en ${frac('6', '11')} verreken slegs die tweede trekking.` },
        { difficulty: 'Hard', question: 'Sipho sê dat vir enige twee gebeurtenisse A en B, P(A of B) altyd gelyk is aan P(A) + P(B), ongeag of die gebeurtenisse oorvleuel. Verduidelik waarom dit slegs in sekere gevalle waar is, met verwysing na beide die optellingsreël en onderling uitsluitende gebeurtenisse.', checkMode: 'auto', options: ['Hy is korrek — die optellingsreël vereenvoudig altyd tot P(A) + P(B) ongeag oorvleueling.', 'Hy is slegs korrek wanneer P(A) en P(B) albei groter as 0,5 is.', 'Hy is verkeerd omdat P(A of B) altyd kleiner as P(A) + P(B) is, ongeag die oorvleueling.', 'Dit is slegs waar wanneer A en B onderling uitsluitend is, wat beteken P(A en B) = 0, sodat die algemene optellingsreël P(A of B) = P(A) + P(B) − P(A en B) vereenvoudig tot P(A of B) = P(A) + P(B). As die gebeurtenisse oorvleuel (nie onderling uitsluitend is nie), moet die snyding afgetrek word om te verhoed dat uitkomste wat aan albei gebeurtenisse behoort, dubbel getel word, dus P(A of B) = P(A) + P(B) − P(A en B) met ʼn P(A en B) wat nie nul is nie.'], correctIndex: 3, explanation: 'Dit is slegs waar wanneer A en B onderling uitsluitend is (P(A en B) = 0). As die gebeurtenisse oorvleuel, moet die snyding afgetrek word om dubbeltelling te vermy.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het relatiewe frekwensie, Venndiagramme, onderling uitsluitende en komplementêre gebeurtenisse, en die optellingsreël onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor die algemene optellingsreël of Venndiagramme en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde oor onderling uitsluitende en komplementêre gebeurtenisse, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Block 1 — Relatiewe frekwensie teenoor teoretiese waarskynlikheid (Easy)
        { difficulty: 'Easy', question: 'ʼn Dobbelsteen word 90 keer gegooi en wys presies 17 keer ʼn 2. Vind die relatiewe frekwensie om ʼn 2 te gooi as ʼn breuk.', checkMode: 'auto', options: [frac('17', '90'), frac('1', '6'), frac('17', '73'), frac('90', '17')], correctIndex: 0, explanation: `Relatiewe frekwensie = aantal kere wat gebeurtenis voorgekom het ÷ totale proefnemings = 17 ÷ 90 = ${frac('17', '90')}. ${frac('1', '6')} is die teoretiese waarskynlikheid (nie die waargenome frekwensie nie), ${frac('17', '73')} gebruik die verkeerde totaal, en ${frac('90', '17')} keer die breuk om.` },
        { difficulty: 'Easy', question: 'ʼn Muntstuk word 400 keer opgegooi en land 189 keer op kop. Vergelyk hierdie relatiewe frekwensie met die teoretiese waarskynlikheid van kop, en sê of hulle naby aan mekaar is.', checkMode: 'auto', options: ['Relatiewe frekwensie ≈ 0,4725, ver van die teoretiese waarskynlikheid van 0,5, wat op vooroordeel dui.', 'Relatiewe frekwensie ≈ 0,4725 en teoretiese waarskynlikheid = 0,5 — hierdie waardes is redelik naby aan mekaar, met die klein verskil wat verwag word weens ʼn beperkte aantal proefnemings.', 'Relatiewe frekwensie = 0,5 presies, wat perfek met die teoretiese waarskynlikheid ooreenstem.', 'Relatiewe frekwensie ≈ 0,5275 (met 211 sterte), ver van die teoretiese waarskynlikheid van 0,5.'], correctIndex: 1, explanation: 'Relatiewe frekwensie = 189/400 = 0,4725. Teoretiese waarskynlikheid = 1/2 = 0,5. Hierdie waardes is redelik naby aan mekaar, met die klein verskil wat verwag word weens ʼn beperkte aantal proefnemings — nie "ver van mekaar" en nie ʼn presiese ooreenstemming nie.' },

        // Block 2 — Venndiagram tweestel-waarskynlikheid (Easy-Medium) [DIAGRAM LATER]
        { difficulty: 'Easy-Medium', question: 'ʼn Venndiagram wys ʼn klas van 45 leerders: 25 studeer Skaakklub, 16 studeer Debatsklub, en 8 studeer albei. Vind hoeveel geen van die twee aktiwiteite doen nie.', checkMode: 'auto', options: ['33', '8', '12', '25'], correctIndex: 2, explanation: 'Minstens een = 25 + 16 − 8 = 33. Geen = 45 − 33 = 12. 33 is "minstens een" (nie "geen" nie), 8 is net die oorvleueling, en 25 is net die Skaakklub-totaal.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Skaakklub</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Debatsklub</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Gebruik dieselfde klas van 45 (25 studeer Skaakklub, 16 studeer Debatsklub, 8 studeer albei), vind P(ʼn leerder doen slegs Skaakklub, nie Debatsklub nie).', checkMode: 'auto', options: [frac('25', '45'), frac('8', '45'), frac('12', '45'), frac('17', '45')], correctIndex: 3, explanation: `Slegs Skaakklub = 25 − 8 = 17. P(slegs Skaakklub) = ${frac('17', '45')}. ${frac('25', '45')} vergeet om die oorvleueling af te trek, ${frac('8', '45')} gebruik slegs die snyding, en ${frac('12', '45')} gebruik eerder die "geen"-telling.`, diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Skaakklub</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Debatsklub</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Gebruik dieselfde klas van 45 (25 studeer Skaakklub, 16 studeer Debatsklub, 8 studeer albei), vind P(ʼn leerder doen geen van die twee aktiwiteite nie).', checkMode: 'auto', options: [frac('4', '15'), frac('33', '45'), frac('8', '45'), frac('25', '45')], correctIndex: 0, explanation: `Geen = 45 − 33 = 12 (uit die vorige vraag). P(geen) = 12/45 = ${frac('4', '15')}. ${frac('33', '45')} is "minstens een" (die teenoorgestelde streek), ${frac('8', '45')} is net die oorvleueling, en ${frac('25', '45')} is net die Skaakklub-totaal.`, diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Skaakklub</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Debatsklub</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Amahle teken ʼn Venndiagram vir ʼn opname van 45 leerders: 25 studeer Skaakklub, 16 studeer Debatsklub, 8 studeer albei, 12 studeer geen. Sy beweer P(doen minstens een van die twee aktiwiteite) = 25/45 omdat dit die Skaakklub-totaal is. Verduidelik haar fout en gee die korrekte waarskynlikheid.', checkMode: 'auto', options: ['Sy is korrek — P(minstens een) = 25/45 verreken reeds elke leerder wat ʼn aktiwiteit doen.', 'Sy het slegs die Skaakklub-totaal gebruik in plaas van die streek wat minstens een aktiwiteit dek. "Minstens een" beteken slegs Skaakklub, slegs Debatsklub, en albei saam: 17 + 8 + 8 = 33 (of eweredig 45 − 12 = 33). Die korrekte waarskynlikheid is 33/45 = 11/15, nie 25/45 nie.', 'Sy is korrek, maar moes eerder 16/45 (die Debatsklub-totaal) gebruik het.', 'Sy het ʼn fout gemaak — die korrekte waarskynlikheid is 8/45, slegs die oorvleueling.'], correctIndex: 1, explanation: 'Amahle het slegs die Skaakklub-totaal gebruik in plaas van die streek wat minstens een aktiwiteit dek. "Minstens een" kombineer slegs Skaakklub, slegs Debatsklub, en albei: 17 + 8 + 8 = 33, dus is die korrekte waarskynlikheid 33/45 = 11/15, nie 25/45 nie.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Skaakklub</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Debatsklub</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Block 3 — Onderling uitsluitende gebeurtenisse (Medium)
        { difficulty: 'Medium', question: "Is 'om ʼn 1 te gooi' en 'om ʼn 6 te gooi' met ʼn enkele dobbelsteengooi onderling uitsluitend? Verduidelik.", checkMode: 'auto', options: ['Nee — ʼn dobbelsteen kan soms twee getalle gelyktydig wys.', 'Nee — onderlinge uitsluiting geld nie vir enkele dobbelsteengooie nie.', 'Ja — ʼn enkele dobbelsteengooi kan slegs een getal op ʼn keer wys, dus kan om ʼn 1 en om ʼn 6 te kry nie saam gebeur nie, wat beteken die gebeurtenisse is onderling uitsluitend.', 'Ja, maar slegs op ʼn sesskantige dobbelsteen.'], correctIndex: 2, explanation: 'ʼn Enkele dobbelsteengooi kan slegs een getal op ʼn keer wys, dus kan om ʼn 1 en om ʼn 6 te kry nie saam gebeur nie, wat beteken die gebeurtenisse is onderling uitsluitend.' },
        { difficulty: 'Medium', question: "Sipho sê 'om ʼn rooi kaart te trek' en 'om ʼn prentkaart (Boer, Vrou, Heer) te trek' uit ʼn pak is onderling uitsluitend. Is hy korrek? Verduidelik.", checkMode: 'auto', options: ['Ja — rooi kaarte en prentkaarte behoort aan heeltemal aparte pakke.', 'Ja — geeneen van die prentkaarte is ooit rooi nie.', 'Nee — geen van die kaarte in ʼn pak kan beide rooi en ʼn prentkaart wees nie.', 'Nee — ʼn rooi prentkaart (soos die Vrou van Harte) is beide rooi ÉN ʼn prentkaart, dus KAN albei gebeurtenisse terselfdertyd gebeur, wat beteken hulle is nie onderling uitsluitend nie.'], correctIndex: 3, explanation: 'ʼn Rooi prentkaart (soos die Vrou van Harte) is beide rooi ÉN ʼn prentkaart, dus KAN albei gebeurtenisse terselfdertyd gebeur, wat beteken hulle is nie onderling uitsluitend nie.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Opnamekategorie word aan elke kliënt toegeken. P(verkies aanlyn inkopies) = 0,4 en P(verkies in-winkel inkopies) = 0,5, en hierdie is onderling uitsluitende gebeurtenisse. Vind P(verkies aanlyn of in-winkel inkopies).', checkMode: 'auto', options: ['0,9', '0,2', '0,1', '0,5'], correctIndex: 0, explanation: 'Aangesien die gebeurtenisse onderling uitsluitend is, is P(A en B) = 0, dus P(aanlyn of in-winkel) = P(aanlyn) + P(in-winkel) = 0,4 + 0,5 = 0,9. 0,2 vermenigvuldig verkeerdelik die waarskynlikhede, 0,1 trek af in plaas daarvan om op te tel, en 0,5 gebruik slegs P(in-winkel).' },

        // Block 4 — Komplementêre gebeurtenisse (Medium)
        { difficulty: 'Medium', question: 'P(ʼn drukker vashaak tydens ʼn drukwerk) = 0,18. Vind P(die drukker haak nie vas nie).', checkMode: 'auto', options: ['0,18', '0,82', '1,18', '0,5'], correctIndex: 1, explanation: 'Met die komplementêre reël: P(nie vashaak nie) = 1 − P(vashaak) = 1 − 0,18 = 0,82. 0,18 herhaal net die gegewe waarde, 1,18 tel op in plaas van af te trek, en 0,5 hou nie verband met die gegewe waarskynlikheid nie.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 20 albasters, waarvan 9 pers is. Een albaster word lukraak getrek. Vind P(nie pers nie).', checkMode: 'auto', options: [frac('9', '20'), frac('20', '9'), frac('11', '20'), frac('9', '11')], correctIndex: 2, explanation: `P(pers) = 9/20. P(nie pers nie) = 1 − 9/20 = ${frac('11', '20')}. ${frac('9', '20')} is P(pers) self, ${frac('20', '9')} keer die breuk om, en ${frac('9', '11')} verwar die teller en noemer van die komplement.` },
        { difficulty: 'Medium-Hard', question: "Thabo sê komplementêre gebeurtenisse en onderling uitsluitende gebeurtenisse beteken presies dieselfde ding. Is hy korrek? Verduidelik met behulp van die definisies van elk.", checkMode: 'auto', options: ['Ja — albei beskryf gebeurtenisse sonder oorvleueling, en niks meer nie.', 'Ja — komplementêr is nog ʼn term wat wiskundiges vir onderling uitsluitend gebruik.', 'Nee — komplementêre gebeurtenisse kan nooit onderling uitsluitend wees nie.', 'Nee — onderling uitsluitend vereis slegs dat die gebeurtenisse nie saam kan voorkom nie (P(A en B) = 0). Komplementêre gebeurtenisse moet onderling uitsluitend wees EN moet saam die hele steekproefruimte dek (P(A) + P(B) = 1). Elke komplementêre paar is onderling uitsluitend, maar nie elke onderling uitsluitende paar is komplementêr nie.'], correctIndex: 3, explanation: 'Onderling uitsluitend vereis slegs dat die gebeurtenisse nie saam kan voorkom nie. Komplementêre gebeurtenisse moet onderling uitsluitend wees EN saam die hele steekproefruimte dek — Thabo is dus verkeerd om die twee terme as identies te beskou.' },

        // Block 5 — Algemene optellingsreël (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'P(A) = 0,55, P(B) = 0,3, en P(A en B) = 0,2. Vind P(A of B).', checkMode: 'auto', options: ['0,65', '0,85', '1,05', '0,55'], correctIndex: 0, explanation: 'P(A of B) = P(A) + P(B) − P(A en B) = 0,55 + 0,3 − 0,2 = 0,65. 0,85 vergeet om die oorvleueling af te trek, 1,05 tel die oorvleueling op in plaas daarvan om dit af te trek, en 0,55 gebruik slegs P(A).' },
        { difficulty: 'Medium-Hard', question: 'P(A) = 0,3, P(B) = 0,6, en A en B is onderling uitsluitend. Vind P(A of B).', checkMode: 'auto', options: ['0,18', '0,9', '0,3', '1,0'], correctIndex: 1, explanation: 'Aangesien hulle onderling uitsluitend is, is P(A en B) = 0. P(A of B) = 0,3 + 0,6 − 0 = 0,9. 0,18 vermenigvuldig verkeerdelik die waarskynlikhede, 0,3 trek af in plaas daarvan om op te tel, en 1,0 rond verkeerdelik op.' },
        { difficulty: 'Hard', question: 'In ʼn groep leerders is P(speel basketbal) = 0,65, P(speel volleybal) = 0,45, en P(speel albei) = 0,35. Vind P(speel basketbal of volleybal).', checkMode: 'auto', options: ['1,1', '0,35', '0,75', '0,65'], correctIndex: 2, explanation: 'P(basketbal of volleybal) = P(basketbal) + P(volleybal) − P(albei) = 0,65 + 0,45 − 0,35 = 0,75. 1,1 vergeet om die oorvleueling af te trek, 0,35 gebruik slegs P(albei), en 0,65 gebruik slegs P(basketbal).' },
        { difficulty: 'Hard', question: 'Zanele bereken P(A) = 0,6, P(B) = 0,5, P(A en B) = 0,35, en kry P(A of B) = 1,1. Verduidelik waarom hierdie resultaat verkeerd moet wees en vind die korrekte waarde.', checkMode: 'auto', options: ['Haar antwoord is korrek — waarskynlikhede kan 1 oorskry wanneer albei individuele waardes hoog is.', 'Haar fout was in die gegewe waarskynlikhede, nie die berekening nie; 1,1 is aanvaarbaar.', 'Sy moes al drie getalle opgetel het om P(A of B) = 1,45 te kry.', 'ʼn Waarskynlikheid kan nooit 1 oorskry nie, aangesien dit ʼn verhouding van die hele steekproefruimte verteenwoordig. Haar fout was waarskynlik dat sy vergeet het om die oorvleueling af te trek, of verkeerd opgetel het. Die korrekte waarde is P(A of B) = 0,6 + 0,5 − 0,35 = 0,75, wat geldig is aangesien dit tussen 0 en 1 lê.'], correctIndex: 3, explanation: 'ʼn Waarskynlikheid kan nooit 1 oorskry nie. Zanele het waarskynlik vergeet om die oorvleueling af te trek, of verkeerd opgetel — die korrekte waarde is P(A of B) = 0,6 + 0,5 − 0,35 = 0,75.' },

        // Block 6 — Gekombineerde meerstap-waarskynlikheid (Hard)
        { difficulty: 'Hard', question: 'ʼn Venndiagram wys 36 atlete in totaal: 4 speel geen van sokker of netbal nie, 20 speel sokker, en 18 speel netbal. Vind hoeveel atlete albei sportsoorte speel.', checkMode: 'auto', options: ['6', '32', '2', '10'], correctIndex: 0, explanation: 'Minstens een = 36 − 4 = 32. Met die optellingsreël: 32 = 20 + 18 − albei, dus albei = 38 − 32 = 6. 32 is "minstens een" (nie "albei" nie), en 2 en 10 kom van rekenfoute.' },
        { difficulty: 'Hard', question: 'ʼn Opname van 100 mense oor troeteldiere vind 48 het ʼn hond, 40 het ʼn kat, 32 het ʼn vis, 19 het ʼn hond en kat, 17 het ʼn kat en vis, 13 het ʼn hond en vis, en 6 het al drie. Vind hoeveel mense geen van die drie troeteldiere het nie.', checkMode: 'auto', options: ['77', '23', '17', '29'], correctIndex: 1, explanation: 'Minstens een troeteldier = 48 + 40 + 32 − 19 − 17 − 13 + 6 = 77. Geen = 100 − 77 = 23. 77 is "minstens een" (nie "geen" nie), en 17 en 29 kom van rekenfoute.' },
        { difficulty: 'Hard', question: 'ʼn Boks het 9 penne: 5 blou en 4 swart. Naledi kies ʼn pen, hou dit, en kies dan ʼn tweede pen sonder vervanging. Vind P(albei penne is blou).', checkMode: 'auto', options: [frac('25', '81'), frac('5', '9'), frac('5', '18'), frac('1', '2')], correctIndex: 2, explanation: `P(blou eerste) = 5/9. Sonder vervanging, P(blou tweede) = 4/8 = 1/2. Gekombineer: 5/9 × 1/2 = ${frac('5', '18')}. ${frac('25', '81')} neem verkeerdelik vervanging aan (gebruik 5/9 twee keer), ${frac('5', '9')} verreken slegs die eerste trekking, en ${frac('1', '2')} verreken slegs die tweede trekking.` },
        { difficulty: 'Hard', question: 'Bongani sê dat vir enige twee gebeurtenisse A en B, P(A of B) altyd gelyk is aan P(A) + P(B), ongeag of die gebeurtenisse oorvleuel. Verduidelik waarom dit slegs in sekere gevalle waar is, met verwysing na beide die optellingsreël en onderling uitsluitende gebeurtenisse.', checkMode: 'auto', options: ['Hy is korrek — die optellingsreël vereenvoudig altyd tot P(A) + P(B) ongeag oorvleueling.', 'Hy is slegs korrek wanneer P(A) en P(B) albei groter as 0,5 is.', 'Hy is verkeerd omdat P(A of B) altyd kleiner as P(A) + P(B) is, ongeag die oorvleueling.', 'Dit is slegs waar wanneer A en B onderling uitsluitend is, wat beteken P(A en B) = 0, sodat die algemene optellingsreël P(A of B) = P(A) + P(B) − P(A en B) vereenvoudig tot P(A of B) = P(A) + P(B). As die gebeurtenisse oorvleuel (nie onderling uitsluitend is nie), moet die snyding afgetrek word om te verhoed dat uitkomste wat aan albei gebeurtenisse behoort, dubbel getel word, dus P(A of B) = P(A) + P(B) − P(A en B) met ʼn P(A en B) wat nie nul is nie.'], correctIndex: 3, explanation: 'Dit is slegs waar wanneer A en B onderling uitsluitend is (P(A en B) = 0). As die gebeurtenisse oorvleuel, moet die snyding afgetrek word om dubbeltelling te vermy.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het relatiewe frekwensie, Venndiagramme, onderling uitsluitende en komplementêre gebeurtenisse, en die optellingsreël onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor die algemene optellingsreël of Venndiagramme en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde oor onderling uitsluitende en komplementêre gebeurtenisse, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het al Graad 10 voltooi en waarskynlikheid onder die knie.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het al Graad 10 voltooi en waarskynlikheid onder die knie.' },
    { minScore: 15, message: 'Goeie werk!' },
    { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
