import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (probability roles) ──────────────────────────────────────
// theoretical probability → blue   (#2563eb)
// relative frequency      → orange (#ea580c)
// comparison / sum = 1    → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

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
        `<p style="color:#374151;font-size:14px;margin:0;">W(gebeurtenis) = gunstige uitkomste ÷ totale uitkomste</p>` +
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
        '<VideoPlaceholder label="Kort video wat die verskil tussen teoretiese waarskynlikheid en relatiewe frekwensie verduidelik, en wys hoe relatiewe frekwensie na teoretiese waarskynlikheid neig namate proewe toeneem" />',
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
          answer: `W(slegs Wiskunde) = ${gr('1/3')}`,
          steps: [
            `${bl('Slegs Wiskunde')} = ${bl('18')} − ${gr('8')} = ${bl('10')}`,
            `W(slegs Wiskunde) = ${bl('10')} ÷ 30 = ${gr('1/3')}`,
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
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn Venn-diagram te teken en te gebruik om waarskynlikhede van saamgestelde gebeurtenisse te vind, insluitend deursnit, unie en komplement" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — MUTUALLY EXCLUSIVE AND COMPLEMENTARY EVENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mutually-exclusive-complementary',
      title: 'Wedersyds Uitsluitende en Komplementêre Gebeurtenisse',
      icon: '🔵',
      explanation:
        `<p style="margin-bottom:16px;">Twee gebeurtenisse is <strong>wedersyds uitsluitend</strong> as hulle nie terselfdertyd kan plaasvind nie (${bl('W(A en B) = 0')}) — byvoorbeeld om ʼn 2 en ʼn 5 met een enkele dobbelsteengooi te gooi. Twee gebeurtenisse is <strong>komplementêr</strong> as hulle wedersyds uitsluitend is EN saam al die moontlike uitkomste dek — wat beteken ${or('W(A) + W(B) = 1')}, dus ${gr('W(nie A nie) = 1 − W(A)')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gebeurtenis A')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('komplementêre gebeurtenis (nie A nie)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('som gelyk aan 1')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Vergelyking van die twee tipes</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Wedersyds Uitsluitend</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">${bl('W(A en B) = 0')} — kan nie gelyktydig plaasvind nie.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Vereis NIE dat W(A) + W(B) = 1 nie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Komplementêr</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">${or('W(A) + W(nie A nie) = 1')} — wedersyds uitsluitend EN uitputtend.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Elke komplementêre paar is wedersyds uitsluitend, maar nie andersom nie.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Komplementêre reël</p>` +
        `<p style="margin:0;color:#14532d;">${gr('W(nie A nie) = 1 − W(A)')} — as jy die waarskynlikheid ken dat ʼn gebeurtenis plaasvind, trek dit van 1 af om die waarskynlikheid te kry dat dit NIE plaasvind nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "Is 'om ʼn ewe getal te gooi' en 'om ʼn onewe getal te gooi' met ʼn dobbelsteen wedersyds uitsluitend, komplementêr, of albei?",
          answer: `${gr('Beide wedersyds uitsluitend EN komplementêr')}`,
          steps: [
            `Hulle kan nie albei terselfdertyd gebeur nie — ${bl('wedersyds uitsluitend')} (W(ewe EN onewe) = 0).`,
            `Saam dek hulle elke moontlike uitkoms op die dobbelsteen (1–6) — dus is hulle ook ${or('komplementêr')}: W(ewe) + W(onewe) = 3/6 + 3/6 = ${gr('1')}.`,
          ],
        },
        {
          question: "Thabo sê die waarskynlikheid dat dit môre reën is 0,3. Vind die waarskynlikheid dat dit NIE reën nie.",
          answer: `W(nie reën nie) = ${gr('0,7')}`,
          steps: [
            `Met die ${or('komplementêre reël')}: W(nie reën nie) = 1 − W(reën)`,
            `W(nie reën nie) = 1 − ${bl('0,3')} = ${gr('0,7')}`,
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
        '<VideoPlaceholder label="Kort video wat wedersyds uitsluitende en komplementêre gebeurtenisse verduidelik met dobbelsteen- en alledaagse voorbeelde, en wys hoe om die komplementêre reël te gebruik" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — THE GENERAL ADDITION RULE FOR PROBABILITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'general-addition-rule',
      title: 'Die Algemene Optellingsreël vir Waarskynlikheid',
      icon: '➕',
      explanation:
        `<p style="margin-bottom:16px;">Vir enige twee gebeurtenisse A en B, stel die <strong>algemene optellingsreël</strong>: ${bl('W(A of B) = W(A) + W(B) − W(A en B)')}. Dit hou rekening met enige oorvleueling tussen die gebeurtenisse (as A en B saam kan gebeur) — wanneer gebeurtenisse wedersyds uitsluitend is, ${or('W(A en B) = 0')}, wat die reël vereenvoudig tot ${gr('W(A of B) = W(A) + W(B)')}.</p>` +

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
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${bl('W(A)')} + ${bl('W(B)')} − ${or('W(A en B)')} = ${gr('W(A of B)')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom trek ons die snyding af?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer ons W(A) en W(B) optel, word uitkomste in ${or('beide A en B')} twee keer getel. Deur ${or('W(A en B)')} af te trek, word hierdie dubbeltelling reggestel. Vir wedersyds uitsluitende gebeurtenisse is daar geen oorvleueling nie, dus hoef niks afgetrek te word nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In ʼn groep is W(hou van tee) = 0,6, W(hou van koffie) = 0,5, en W(hou van albei) = 0,3. Vind W(hou van tee of koffie).',
          answer: `W(tee of koffie) = ${gr('0,8')}`,
          steps: [
            `W(A of B) = ${bl('W(A)')} + ${bl('W(B)')} − ${or('W(A en B)')}`,
            `W(tee of koffie) = ${bl('0,6')} + ${bl('0,5')} − ${or('0,3')} = ${gr('0,8')}`,
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
        '<VideoPlaceholder label="Kort video wat die algemene optellingsreël vir waarskynlikheid aflei en toepas, met voorbeelde wat twee gebeurtenisse en ʼn drie-sirkel-Venn-diagram behels" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Sipho gooi ʼn dobbelsteen 60 keer en kry presies 8 keer ʼn 6. Vind die relatiewe frekwensie om ʼn 6 te gooi.',
      answer: '8/60 of 2/15',
      checkMode: 'auto',
      correctAnswer: '2/15',
      correctAnswers: ['2/15', '8/60'],
      explanation: 'Relatiewe frekwensie = aantal kere wat gebeurtenis voorgekom het ÷ totale proefnemings = 8 ÷ 60 = 8/60 = 2/15 ✓',
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vergelyk die relatiewe frekwensie in V1 met die teoretiese waarskynlikheid om ʼn 6 te gooi.',
      answer: 'Teoretiese waarskynlikheid = 1/6 ≈ 0,167; relatiewe frekwensie ≈ 0,133; taamlik naby',
      checkMode: 'auto',
      correctAnswer: '1/6',
      correctAnswers: ['1/6', '0.167', '0.1667'],
      explanation: 'Teoretiese waarskynlikheid om ʼn 6 te gooi = 1 ÷ 6 = 1/6 ≈ 0,167. Relatiewe frekwensie uit V1 = 8 ÷ 60 ≈ 0,133. Hierdie waardes is taamlik naby aan mekaar — die klein verskil word verwag met slegs 60 proefnemings. ✓',
    },

    // ── Q3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato gooi ʼn muntstuk 500 keer op en kry 245 keer kop. Is hierdie relatiewe frekwensie redelik naby aan die teoretiese waarskynlikheid? Verduidelik.',
      answer: 'Relatiewe frekwensie = 245/500 = 0,49, wat baie naby aan die teoretiese waarskynlikheid van 0,5 is, wat die verwagte patroon toon waar groot aantalle proefnemings die teoretiese waarde nader.',
      checkMode: 'self',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'In ʼn klas van 25, speel 15 sokker, 10 speel netbal, en 5 speel albei. Hoeveel speel geen van die twee nie?',
      answer: '5',
      checkMode: 'auto',
      correctAnswer: '5',
      explanation: 'Minstens een = 15 + 10 − 5 = 20. Geen van die twee = 25 − 20 = 5. ✓',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik die data uit V4 (klas van 25: 15 speel sokker, 10 speel netbal, 5 speel albei), vind die waarskynlikheid dat ʼn lukraak gekose leerder slegs sokker speel.',
      answer: '10/25 of 2/5',
      checkMode: 'auto',
      correctAnswer: '2/5',
      correctAnswers: ['2/5', '10/25'],
      explanation: 'Slegs sokker = 15 − 5 = 10. W(slegs sokker) = 10 ÷ 25 = 10/25 = 2/5 ✓',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Opname van 40 mense wys 22 hou van pizza, 18 hou van hamburgers, en 10 hou van albei. Teken die Venndiagram-streke en vind hoeveel van geen van die twee hou nie.',
      answer: 'Minstens een = 22 + 18 − 10 = 30. Geen van die twee = 40 − 30 = 10.',
      checkMode: 'self',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "Is 'om ʼn hartkaart te trek' en 'om ʼn skopkaart te trek' uit ʼn pak kaarte wedersyds uitsluitend?",
      answer: 'Ja',
      checkMode: 'auto',
      correctAnswer: 'ja',
      correctAnswers: ['yes', 'Yes', 'YES', 'ja', 'Ja', 'JA'],
      explanation: 'ʼn Kaart kan nie terselfdertyd ʼn hart en ʼn skop wees nie — dit is verskillende sportsoorte sonder oorvleueling, dus is die gebeurtenisse wedersyds uitsluitend. ✓',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo sê 'om ʼn getal kleiner as 4 te gooi' en 'om ʼn getal groter as 2 te gooi' met ʼn dobbelsteen is wedersyds uitsluitend. Is hy korrek? Verduidelik.",
      answer: "Nee — albei gebeurtenisse sluit die getal 3 in, dus KAN hulle terselfdertyd gebeur, wat beteken hulle is nie wedersyds uitsluitend nie.",
      checkMode: 'self',
    },

    // ── Q9 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'As W(reën) = 0,35, vind W(geen reën nie).',
      answer: '0,65',
      checkMode: 'auto',
      correctAnswer: '0,65',
      correctAnswers: ['0.65', '0,65'],
      explanation: 'Met die komplementêre reël: W(geen reën nie) = 1 − W(reën) = 1 − 0,35 = 0,65 ✓',
    },

    // ── Q10 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê komplementêre gebeurtenisse is altyd wedersyds uitsluitend, maar wedersyds uitsluitende gebeurtenisse is nie altyd komplementêr nie. Is sy korrek? Verduidelik.',
      answer: 'Ja — komplementêre gebeurtenisse moet wedersyds uitsluitend wees (kan nie oorvleuel nie) EN moet alle uitkomste dek, terwyl wedersyds uitsluitende gebeurtenisse slegs vereis dat daar geen oorvleueling is nie, sonder om noodwendig elke moontlike uitkoms te dek.',
      checkMode: 'self',
    },

    // ── Q11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'W(A) = 0,4, W(B) = 0,3, W(A en B) = 0,1. Vind W(A of B).',
      answer: '0,6',
      checkMode: 'auto',
      correctAnswer: '0,6',
      correctAnswers: ['0.6', '0,6'],
      explanation: 'W(A of B) = W(A) + W(B) − W(A en B) = 0,4 + 0,3 − 0,1 = 0,6 ✓',
    },

    // ── Q12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'W(A) = 0,5, W(B) = 0,45, en A en B is wedersyds uitsluitend. Vind W(A of B).',
      answer: 'Aangesien hulle wedersyds uitsluitend is, is W(A en B) = 0. W(A of B) = 0,5 + 0,45 − 0 = 0,95.',
      checkMode: 'self',
    },

    // ── Q13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê W(A of B) kan nooit 1 oorskry nie. Is hy korrek? Verduidelik waarom dit wiskundig sin maak.',
      answer: 'Ja — waarskynlikheidswaardes is altyd tussen 0 en 1, wat die hele moontlike steekproefruimte verteenwoordig, dus kan geen gekombineerde waarskynlikheidsberekening logies buite hierdie omvang val nie.',
      checkMode: 'self',
    },

    // ── Q14 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'In ʼn groep is W(hou van sokker) = 0,55, W(hou van rugby) = 0,4, W(hou van albei) = 0,2. Vind W(hou van sokker of rugby).',
      answer: '0,75',
      checkMode: 'auto',
      correctAnswer: '0,75',
      correctAnswers: ['0.75', '0,75'],
      explanation: 'W(sokker of rugby) = W(sokker) + W(rugby) − W(albei) = 0,55 + 0,4 − 0,2 = 0,75 ✓',
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Studie van 100 pasiënte het bevind 60 het op middel X gereageer, 45 op middel Y, en 25 op albei. Vind hoeveel op geen van die twee gereageer het nie.',
      answer: 'Minstens een = 60 + 45 − 25 = 80. Geen = 100 − 80 = 20.',
      checkMode: 'self',
    },

    // ── Q16 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê as W(A en B) = 0, dan moet A en B komplementêr wees. Is dit altyd waar? Verduidelik.',
      answer: 'Nee — W(A en B) = 0 bevestig slegs dat die gebeurtenisse wedersyds uitsluitend is; om ook komplementêr te wees, moet hulle bykomend die hele steekproefruimte dek (W(A) + W(B) = 1).',
      checkMode: 'self',
    },

    // ── Q17 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Klas van 35 het 20 wat Frans studeer, 18 wat Spaans studeer, en ʼn onbekende aantal wat albei studeer. As 5 geen van die twee studeer nie, vind hoeveel albei studeer.',
      answer: 'Minstens een = 35 − 5 = 30. Met die optellingsreël: 30 = 20 + 18 − albei. albei = 38 − 30 = 8.',
      checkMode: 'self',
    },

    // ── Q18 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind W(A of B) as W(A) = 0,7, W(B) = 0,6, en W(A en B) = 0,5, en verduidelik waarom hierdie scenario geldig is ondanks die hoë individuele waarskynlikhede.',
      answer: 'W(A of B) = 0,7 + 0,6 − 0,5 = 0,8. Dit is geldig aangesien 0,8 ≤ 1, en die groot oorvleueling (0,5) verduidelik waarom die gekombineerde waarskynlikheid nie eenvoudig die som van die twee hoë individuele waarskynlikhede is nie.',
      checkMode: 'self',
    },

    // ── Q19 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo gooi ʼn muntstuk op en gooi ʼn dobbelsteen. Hy beweer dat om 'kop' en 'ʼn ewe getal' te kry wedersyds uitsluitend is omdat dit verskillende tipes gebeurtenisse is. Is sy redenasie korrek? Verduidelik.",
      answer: "Nee — wedersyds uitsluitend beteken spesifiek dat die gebeurtenisse nie saam in DIESELFDE proefneming van DIESELFDE tipe gebeurtenis kan voorkom nie; aangesien die opgooi van ʼn muntstuk en die gooi van ʼn dobbelsteen onafhanklike aksies is wat gelyktydig gebeur, kan albei uitkomste (kop EN ʼn ewe getal) saam voorkom, dus is dit nie werklik ʼn vraag oor wedersydse uitsluiting in die tradisionele enkel-gebeurtenis-sin nie.",
      checkMode: 'self',
    },

    // ── Q20 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Opname van 90 mense oor drankvoorkeure vind 50 hou van tee, 40 hou van koffie, 35 hou van vrugtesap, 20 hou van tee en koffie, 15 hou van koffie en vrugtesap, 18 hou van tee en vrugtesap, en 8 hou van al drie. Vind hoeveel van minstens een drankie hou.',
      answer: 'Met die algemene formule vir drie versamelings: Minstens een = 50 + 40 + 35 − 20 − 15 − 18 + 8 = 80.',
      checkMode: 'self',
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // PRACTICE SETS — 3 sets of 20 questions each (Phase 1: content only, no diagrams)
  // Block 1 (0-1):   Relatiewe frekwensie teenoor teoretiese waarskynlikheid
  // Block 2 (2-5):   Venndiagram tweestel-waarskynlikheid (slegs/geen/minstens een) [DIAGRAM LATER]
  // Block 3 (6-8):   Wedersyds uitsluitende gebeurtenisse
  // Block 4 (9-11):  Komplementêre gebeurtenisse W(nie A nie) = 1 − W(A)
  // Block 5 (12-15): Algemene optellingsreël W(A of B) = W(A) + W(B) − W(A en B)
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
        { difficulty: 'Easy', question: 'ʼn Dobbelsteen word 80 keer gegooi en wys presies 15 keer ʼn 6. Vind die relatiewe frekwensie om ʼn 6 te gooi as ʼn breuk.', checkMode: 'auto', correctAnswer: '3/16', correctAnswers: ['3/16', '15/80'], answer: '3/16', explanation: 'Relatiewe frekwensie = aantal kere wat gebeurtenis voorgekom het ÷ totale proefnemings = 15 ÷ 80 = 15/80 = 3/16.' },
        { difficulty: 'Easy', question: 'ʼn Muntstuk word 150 keer opgegooi en land 68 keer op kop. Vergelyk hierdie relatiewe frekwensie met die teoretiese waarskynlikheid van kop, en sê of hulle naby aan mekaar is.', answer: 'Relatiewe frekwensie = 68/150 = 34/75 ≈ 0,453. Teoretiese waarskynlikheid = 1/2 = 0,5. Hierdie waardes is redelik naby aan mekaar, met die klein verskil wat verwag word weens ʼn beperkte aantal proefnemings.', checkMode: 'self' },

        // Block 2 — Venndiagram tweestel-waarskynlikheid (Easy-Medium) [DIAGRAM LATER]
        { difficulty: 'Easy-Medium', question: 'ʼn Venndiagram wys ʼn klas van 40 leerders: 22 studeer Wiskunde, 19 studeer Wetenskap, en 9 studeer albei. Vind hoeveel geen van die twee vakke studeer nie.', checkMode: 'auto', correctAnswer: '8', answer: '8', explanation: 'Minstens een = 22 + 19 − 9 = 32. Geen = 40 − 32 = 8.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wiskunde</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wetenskap</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">13</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Gebruik dieselfde klas van 40 (22 studeer Wiskunde, 19 studeer Wetenskap, 9 studeer albei), vind W(ʼn leerder studeer slegs Wiskunde, nie Wetenskap nie).', checkMode: 'auto', correctAnswer: '13/40', answer: '13/40', explanation: 'Slegs Wiskunde = 22 − 9 = 13. W(slegs Wiskunde) = 13/40.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wiskunde</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wetenskap</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">13</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text></svg>' },
        { difficulty: 'Medium', question: 'Gebruik dieselfde klas van 40 (22 studeer Wiskunde, 19 studeer Wetenskap, 9 studeer albei), vind W(ʼn leerder studeer geen van die twee vakke nie).', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5', '8/40'], answer: '1/5', explanation: 'Geen = 40 − 32 = 8 (uit die vorige vraag). W(geen) = 8/40 = 1/5.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wiskunde</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wetenskap</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">13</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text></svg>' },
        { difficulty: 'Medium', question: 'Zanele teken ʼn Venndiagram vir ʼn opname van 40 leerders: 22 studeer Wiskunde, 19 studeer Wetenskap, 9 studeer albei, 8 studeer geen. Sy beweer W(studeer minstens een van die twee vakke) = 22/40 omdat dit die Wiskunde-totaal is. Verduidelik haar fout en gee die korrekte waarskynlikheid.', answer: 'Sy het slegs die Wiskunde-totaal gebruik in plaas van die streek wat minstens een vak dek. "Minstens een" beteken slegs Wiskunde, slegs Wetenskap, en albei saam: 13 + 10 + 9 = 32 (of eweredig 40 − 8 = 32). Die korrekte waarskynlikheid is 32/40 = 4/5, nie 22/40 nie.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wiskunde</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wetenskap</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">13</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text></svg>' },

        // Block 3 — Wedersyds uitsluitende gebeurtenisse (Medium)
        { difficulty: 'Medium', question: "Is 'om ʼn ruitkaart te trek' en 'om ʼn klawerkaart te trek' uit ʼn standaardpak kaarte wedersyds uitsluitend? Verduidelik.", answer: 'Ja — ʼn kaart kan nie terselfdertyd ʼn ruit en ʼn klawer wees nie, aangesien dit verskillende sportsoorte sonder oorvleueling is, dus is die gebeurtenisse wedersyds uitsluitend.', checkMode: 'self' },
        { difficulty: 'Medium', question: "Thabo sê 'om ʼn veelvoud van 3 te gooi' en 'om ʼn ewe getal te gooi' met ʼn dobbelsteen is wedersyds uitsluitend. Is hy korrek? Verduidelik.", answer: 'Nee — die getal 6 is beide ʼn veelvoud van 3 én ʼn ewe getal, dus KAN albei gebeurtenisse terselfdertyd gebeur, wat beteken hulle is nie wedersyds uitsluitend nie.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Sak bevat gekleurde knoppies. W(trek rooi) = 0,3 en W(trek blou) = 0,45, en om rooi te trek en om blou te trek is wedersyds uitsluitende gebeurtenisse. Vind W(trek rooi of blou).', checkMode: 'auto', correctAnswer: '0,75', correctAnswers: ['0.75', '0,75'], answer: '0,75', explanation: 'Aangesien die gebeurtenisse wedersyds uitsluitend is, is W(A en B) = 0, dus W(rooi of blou) = W(rooi) + W(blou) = 0,3 + 0,45 = 0,75.' },

        // Block 4 — Komplementêre gebeurtenisse (Medium)
        { difficulty: 'Medium', question: 'W(ʼn aflewering kom laat aan) = 0,24. Vind W(die aflewering kom nie laat aan nie).', checkMode: 'auto', correctAnswer: '0,76', correctAnswers: ['0.76', '0,76'], answer: '0,76', explanation: 'Met die komplementêre reël: W(nie laat nie) = 1 − W(laat) = 1 − 0,24 = 0,76.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 16 albasters, waarvan 6 groen is. Een albaster word lukraak getrek. Vind W(nie groen nie).', checkMode: 'auto', correctAnswer: '5/8', correctAnswers: ['5/8', '10/16'], answer: '5/8', explanation: 'W(groen) = 6/16 = 3/8. W(nie groen nie) = 1 − 3/8 = 5/8.' },
        { difficulty: 'Medium-Hard', question: "Lindiwe sê komplementêre gebeurtenisse en wedersyds uitsluitende gebeurtenisse beteken presies dieselfde ding. Is sy korrek? Verduidelik met behulp van die definisies van elk.", answer: 'Nee — wedersyds uitsluitend vereis slegs dat die gebeurtenisse nie saam kan voorkom nie (W(A en B) = 0). Komplementêre gebeurtenisse moet wedersyds uitsluitend wees EN moet saam die hele steekproefruimte dek (W(A) + W(B) = 1). Elke komplementêre paar is wedersyds uitsluitend, maar nie elke wedersyds uitsluitende paar is komplementêr nie.', checkMode: 'self' },

        // Block 5 — Algemene optellingsreël (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'W(A) = 0,5, W(B) = 0,35, en W(A en B) = 0,15. Vind W(A of B).', checkMode: 'auto', correctAnswer: '0,7', correctAnswers: ['0.7', '0,7'], answer: '0,7', explanation: 'W(A of B) = W(A) + W(B) − W(A en B) = 0,5 + 0,35 − 0,15 = 0,7.' },
        { difficulty: 'Medium-Hard', question: 'W(A) = 0,4, W(B) = 0,45, en A en B is wedersyds uitsluitend. Vind W(A of B).', checkMode: 'auto', correctAnswer: '0,85', correctAnswers: ['0.85', '0,85'], answer: '0,85', explanation: 'Aangesien hulle wedersyds uitsluitend is, is W(A en B) = 0. W(A of B) = 0,4 + 0,45 − 0 = 0,85.' },
        { difficulty: 'Hard', question: 'In ʼn groep leerders is W(speel skaak) = 0,6, W(speel dambord) = 0,5, en W(speel albei) = 0,25. Vind W(speel skaak of dambord).', checkMode: 'auto', correctAnswer: '0,85', correctAnswers: ['0.85', '0,85'], answer: '0,85', explanation: 'W(skaak of dambord) = W(skaak) + W(dambord) − W(albei) = 0,6 + 0,5 − 0,25 = 0,85.' },
        { difficulty: 'Hard', question: 'Sipho bereken W(A) = 0,65, W(B) = 0,55, W(A en B) = 0,4, en kry W(A of B) = 1,2. Verduidelik waarom hierdie resultaat verkeerd moet wees en vind die korrekte waarde.', answer: 'ʼn Waarskynlikheid kan nooit 1 oorskry nie, aangesien dit ʼn verhouding van die hele steekproefruimte verteenwoordig. Sy fout was waarskynlik dat hy vergeet het om die oorvleueling af te trek, of verkeerd opgetel het. Die korrekte waarde is W(A of B) = 0,65 + 0,55 − 0,4 = 0,8, wat geldig is aangesien dit tussen 0 en 1 lê.', checkMode: 'self' },

        // Block 6 — Gekombineerde meerstap-waarskynlikheid (Hard)
        { difficulty: 'Hard', question: 'ʼn Venndiagram wys 38 atlete in totaal: 5 speel geen van sokker of netbal nie, 21 speel sokker, en 19 speel netbal. Vind hoeveel atlete albei sportsoorte speel.', checkMode: 'auto', correctAnswer: '7', answer: '7', explanation: 'Minstens een = 38 − 5 = 33. Met die optellingsreël: 33 = 21 + 19 − albei, dus albei = 40 − 33 = 7.' },
        { difficulty: 'Hard', question: 'ʼn Opname van 100 mense oor troeteldiere vind 45 het ʼn hond, 38 het ʼn kat, 30 het ʼn vis, 18 het ʼn hond en kat, 15 het ʼn kat en vis, 12 het ʼn hond en vis, en 6 het al drie. Vind hoeveel mense geen van die drie troeteldiere het nie.', checkMode: 'auto', correctAnswer: '26', answer: '26', explanation: 'Minstens een troeteldier = 45 + 38 + 30 − 18 − 15 − 12 + 6 = 74. Geen = 100 − 74 = 26.' },
        { difficulty: 'Hard', question: 'ʼn Boks het 10 penne: 6 blou en 4 swart. Lerato kies ʼn pen, hou dit, en kies dan ʼn tweede pen sonder vervanging. Vind W(albei penne is blou).', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '30/90'], answer: '1/3', explanation: 'W(blou eerste) = 6/10 = 3/5. Sonder vervanging, W(blou tweede) = 5/9. Gekombineer: 3/5 × 5/9 = 15/45 = 1/3.' },
        { difficulty: 'Hard', question: 'Amahle sê dat vir enige twee gebeurtenisse A en B, W(A of B) altyd gelyk is aan W(A) + W(B), ongeag of die gebeurtenisse oorvleuel. Verduidelik waarom dit slegs in sekere gevalle waar is, met verwysing na beide die optellingsreël en wedersyds uitsluitende gebeurtenisse.', answer: 'Dit is slegs waar wanneer A en B wedersyds uitsluitend is, wat beteken W(A en B) = 0, sodat die algemene optellingsreël W(A of B) = W(A) + W(B) − W(A en B) vereenvoudig tot W(A of B) = W(A) + W(B). As die gebeurtenisse oorvleuel (nie wedersyds uitsluitend is nie), moet die snyding afgetrek word om te verhoed dat uitkomste wat aan albei gebeurtenisse behoort, dubbel getel word, dus W(A of B) = W(A) + W(B) − W(A en B) met ʼn W(A en B) wat nie nul is nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het relatiewe frekwensie, Venndiagramme, wedersyds uitsluitende en komplementêre gebeurtenisse, en die optellingsreël onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor die algemene optellingsreël of Venndiagramme en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde oor wedersyds uitsluitende en komplementêre gebeurtenisse, en probeer dan weer.' },
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
        { difficulty: 'Easy', question: 'ʼn Dobbelsteen word 120 keer gegooi en wys presies 22 keer ʼn 4. Vind die relatiewe frekwensie om ʼn 4 te gooi as ʼn breuk.', checkMode: 'auto', correctAnswer: '11/60', correctAnswers: ['11/60', '22/120'], answer: '11/60', explanation: 'Relatiewe frekwensie = aantal kere wat gebeurtenis voorgekom het ÷ totale proefnemings = 22 ÷ 120 = 22/120 = 11/60.' },
        { difficulty: 'Easy', question: 'ʼn Muntstuk word 250 keer opgegooi en land 132 keer op kop. Vergelyk hierdie relatiewe frekwensie met die teoretiese waarskynlikheid van kop, en sê of hulle naby aan mekaar is.', answer: 'Relatiewe frekwensie = 132/250 = 66/125 = 0,528. Teoretiese waarskynlikheid = 1/2 = 0,5. Hierdie waardes is redelik naby aan mekaar, met die klein verskil wat verwag word weens ʼn beperkte aantal proefnemings.', checkMode: 'self' },

        // Block 2 — Venndiagram tweestel-waarskynlikheid (Easy-Medium) [DIAGRAM LATER]
        { difficulty: 'Easy-Medium', question: 'ʼn Venndiagram wys ʼn klas van 50 leerders: 28 studeer Kuns, 20 studeer Drama, en 10 studeer albei. Vind hoeveel geen van die twee vakke studeer nie.', checkMode: 'auto', correctAnswer: '12', answer: '12', explanation: 'Minstens een = 28 + 20 − 10 = 38. Geen = 50 − 38 = 12.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Kuns</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Drama</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Gebruik dieselfde klas van 50 (28 studeer Kuns, 20 studeer Drama, 10 studeer albei), vind W(ʼn leerder studeer slegs Kuns, nie Drama nie).', checkMode: 'auto', correctAnswer: '9/25', correctAnswers: ['9/25', '18/50'], answer: '9/25', explanation: 'Slegs Kuns = 28 − 10 = 18. W(slegs Kuns) = 18/50 = 9/25.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Kuns</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Drama</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text></svg>' },
        { difficulty: 'Medium', question: 'Gebruik dieselfde klas van 50 (28 studeer Kuns, 20 studeer Drama, 10 studeer albei), vind W(ʼn leerder studeer geen van die twee vakke nie).', checkMode: 'auto', correctAnswer: '6/25', correctAnswers: ['6/25', '12/50'], answer: '6/25', explanation: 'Geen = 50 − 38 = 12 (uit die vorige vraag). W(geen) = 12/50 = 6/25.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Kuns</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Drama</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text></svg>' },
        { difficulty: 'Medium', question: 'Bongani teken ʼn Venndiagram vir ʼn opname van 50 leerders: 28 studeer Kuns, 20 studeer Drama, 10 studeer albei, 12 studeer geen. Hy beweer W(studeer minstens een van die twee vakke) = 28/50 omdat dit die Kuns-totaal is. Verduidelik sy fout en gee die korrekte waarskynlikheid.', answer: 'Hy het slegs die Kuns-totaal gebruik in plaas van die streek wat minstens een vak dek. "Minstens een" beteken slegs Kuns, slegs Drama, en albei saam: 18 + 10 + 10 = 38 (of eweredig 50 − 12 = 38). Die korrekte waarskynlikheid is 38/50 = 19/25, nie 28/50 nie.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Kuns</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Drama</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text></svg>' },

        // Block 3 — Wedersyds uitsluitende gebeurtenisse (Medium)
        { difficulty: 'Medium', question: "Is 'om ʼn Heer te trek' en 'om ʼn Vrou te trek' uit ʼn standaardpak kaarte wedersyds uitsluitend? Verduidelik.", answer: 'Ja — ʼn kaart kan nie terselfdertyd ʼn Heer en ʼn Vrou wees nie, aangesien dit verskillende range sonder oorvleueling is, dus is die gebeurtenisse wedersyds uitsluitend.', checkMode: 'self' },
        { difficulty: 'Medium', question: "Naledi sê 'om ʼn getal kleiner as 5 te gooi' en 'om ʼn getal groter as 3 te gooi' met ʼn dobbelsteen is wedersyds uitsluitend. Is sy korrek? Verduidelik.", answer: 'Nee — die getal 4 is beide kleiner as 5 én groter as 3, dus KAN albei gebeurtenisse terselfdertyd gebeur, wat beteken hulle is nie wedersyds uitsluitend nie.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Wentelwiel land op gekleurde afdelings. W(land op geel) = 0,35 en W(land op groen) = 0,4, en om op geel te land en om op groen te land is wedersyds uitsluitende gebeurtenisse. Vind W(land op geel of groen).', checkMode: 'auto', correctAnswer: '0,75', correctAnswers: ['0.75', '0,75'], answer: '0,75', explanation: 'Aangesien die gebeurtenisse wedersyds uitsluitend is, is W(A en B) = 0, dus W(geel of groen) = W(geel) + W(groen) = 0,35 + 0,4 = 0,75.' },

        // Block 4 — Komplementêre gebeurtenisse (Medium)
        { difficulty: 'Medium', question: 'W(ʼn vlug vertrek betyds) = 0,42. Vind W(die vlug vertrek nie betyds nie).', checkMode: 'auto', correctAnswer: '0,58', correctAnswers: ['0.58', '0,58'], answer: '0,58', explanation: 'Met die komplementêre reël: W(nie betyds nie) = 1 − W(betyds) = 1 − 0,42 = 0,58.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 18 albasters, waarvan 7 geel is. Een albaster word lukraak getrek. Vind W(nie geel nie).', checkMode: 'auto', correctAnswer: '11/18', answer: '11/18', explanation: 'W(geel) = 7/18. W(nie geel nie) = 1 − 7/18 = 11/18.' },
        { difficulty: 'Medium-Hard', question: "Kagiso sê komplementêre gebeurtenisse en wedersyds uitsluitende gebeurtenisse beteken presies dieselfde ding. Is hy korrek? Verduidelik met behulp van die definisies van elk.", answer: 'Nee — wedersyds uitsluitend vereis slegs dat die gebeurtenisse nie saam kan voorkom nie (W(A en B) = 0). Komplementêre gebeurtenisse moet wedersyds uitsluitend wees EN moet saam die hele steekproefruimte dek (W(A) + W(B) = 1). Elke komplementêre paar is wedersyds uitsluitend, maar nie elke wedersyds uitsluitende paar is komplementêr nie.', checkMode: 'self' },

        // Block 5 — Algemene optellingsreël (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'W(A) = 0,45, W(B) = 0,3, en W(A en B) = 0,1. Vind W(A of B).', checkMode: 'auto', correctAnswer: '0,65', correctAnswers: ['0.65', '0,65'], answer: '0,65', explanation: 'W(A of B) = W(A) + W(B) − W(A en B) = 0,45 + 0,3 − 0,1 = 0,65.' },
        { difficulty: 'Medium-Hard', question: 'W(A) = 0,35, W(B) = 0,55, en A en B is wedersyds uitsluitend. Vind W(A of B).', checkMode: 'auto', correctAnswer: '0,9', correctAnswers: ['0.9', '0,9'], answer: '0,9', explanation: 'Aangesien hulle wedersyds uitsluitend is, is W(A en B) = 0. W(A of B) = 0,35 + 0,55 − 0 = 0,9.' },
        { difficulty: 'Hard', question: 'In ʼn groep leerders is W(speel hokkie) = 0,7, W(speel tennis) = 0,4, en W(speel albei) = 0,3. Vind W(speel hokkie of tennis).', checkMode: 'auto', correctAnswer: '0,8', correctAnswers: ['0.8', '0,8'], answer: '0,8', explanation: 'W(hokkie of tennis) = W(hokkie) + W(tennis) − W(albei) = 0,7 + 0,4 − 0,3 = 0,8.' },
        { difficulty: 'Hard', question: 'Lerato bereken W(A) = 0,55, W(B) = 0,5, W(A en B) = 0,3, en kry W(A of B) = 1,05. Verduidelik waarom hierdie resultaat verkeerd moet wees en vind die korrekte waarde.', answer: 'ʼn Waarskynlikheid kan nooit 1 oorskry nie, aangesien dit ʼn verhouding van die hele steekproefruimte verteenwoordig. Haar fout was waarskynlik dat sy vergeet het om die oorvleueling af te trek, of verkeerd opgetel het. Die korrekte waarde is W(A of B) = 0,55 + 0,5 − 0,3 = 0,75, wat geldig is aangesien dit tussen 0 en 1 lê.', checkMode: 'self' },

        // Block 6 — Gekombineerde meerstap-waarskynlikheid (Hard)
        { difficulty: 'Hard', question: 'ʼn Venndiagram wys 42 atlete in totaal: 6 speel geen van sokker of netbal nie, 24 speel sokker, en 20 speel netbal. Vind hoeveel atlete albei sportsoorte speel.', checkMode: 'auto', correctAnswer: '8', answer: '8', explanation: 'Minstens een = 42 − 6 = 36. Met die optellingsreël: 36 = 24 + 20 − albei, dus albei = 44 − 36 = 8.' },
        { difficulty: 'Hard', question: 'ʼn Opname van 100 mense oor troeteldiere vind 50 het ʼn hond, 42 het ʼn kat, 35 het ʼn vis, 20 het ʼn hond en kat, 16 het ʼn kat en vis, 14 het ʼn hond en vis, en 7 het al drie. Vind hoeveel mense geen van die drie troeteldiere het nie.', checkMode: 'auto', correctAnswer: '16', answer: '16', explanation: 'Minstens een troeteldier = 50 + 42 + 35 − 20 − 16 − 14 + 7 = 84. Geen = 100 − 84 = 16.' },
        { difficulty: 'Hard', question: 'ʼn Boks het 12 penne: 7 blou en 5 swart. Thabo kies ʼn pen, hou dit, en kies dan ʼn tweede pen sonder vervanging. Vind W(albei penne is blou).', checkMode: 'auto', correctAnswer: '7/22', answer: '7/22', explanation: 'W(blou eerste) = 7/12. Sonder vervanging, W(blou tweede) = 6/11. Gekombineer: 7/12 × 6/11 = 42/132 = 7/22.' },
        { difficulty: 'Hard', question: 'Sipho sê dat vir enige twee gebeurtenisse A en B, W(A of B) altyd gelyk is aan W(A) + W(B), ongeag of die gebeurtenisse oorvleuel. Verduidelik waarom dit slegs in sekere gevalle waar is, met verwysing na beide die optellingsreël en wedersyds uitsluitende gebeurtenisse.', answer: 'Dit is slegs waar wanneer A en B wedersyds uitsluitend is, wat beteken W(A en B) = 0, sodat die algemene optellingsreël W(A of B) = W(A) + W(B) − W(A en B) vereenvoudig tot W(A of B) = W(A) + W(B). As die gebeurtenisse oorvleuel (nie wedersyds uitsluitend is nie), moet die snyding afgetrek word om te verhoed dat uitkomste wat aan albei gebeurtenisse behoort, dubbel getel word, dus W(A of B) = W(A) + W(B) − W(A en B) met ʼn W(A en B) wat nie nul is nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het relatiewe frekwensie, Venndiagramme, wedersyds uitsluitende en komplementêre gebeurtenisse, en die optellingsreël onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor die algemene optellingsreël of Venndiagramme en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde oor wedersyds uitsluitende en komplementêre gebeurtenisse, en probeer dan weer.' },
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
        { difficulty: 'Easy', question: 'ʼn Dobbelsteen word 90 keer gegooi en wys presies 17 keer ʼn 2. Vind die relatiewe frekwensie om ʼn 2 te gooi as ʼn breuk.', checkMode: 'auto', correctAnswer: '17/90', answer: '17/90', explanation: 'Relatiewe frekwensie = aantal kere wat gebeurtenis voorgekom het ÷ totale proefnemings = 17 ÷ 90 = 17/90.' },
        { difficulty: 'Easy', question: 'ʼn Muntstuk word 400 keer opgegooi en land 189 keer op kop. Vergelyk hierdie relatiewe frekwensie met die teoretiese waarskynlikheid van kop, en sê of hulle naby aan mekaar is.', answer: 'Relatiewe frekwensie = 189/400 = 0,4725. Teoretiese waarskynlikheid = 1/2 = 0,5. Hierdie waardes is redelik naby aan mekaar, met die klein verskil wat verwag word weens ʼn beperkte aantal proefnemings.', checkMode: 'self' },

        // Block 2 — Venndiagram tweestel-waarskynlikheid (Easy-Medium) [DIAGRAM LATER]
        { difficulty: 'Easy-Medium', question: 'ʼn Venndiagram wys ʼn klas van 45 leerders: 25 studeer Skaakklub, 16 studeer Debatsklub, en 8 studeer albei. Vind hoeveel geen van die twee aktiwiteite doen nie.', checkMode: 'auto', correctAnswer: '12', answer: '12', explanation: 'Minstens een = 25 + 16 − 8 = 33. Geen = 45 − 33 = 12.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Skaakklub</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Debatsklub</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">17</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Gebruik dieselfde klas van 45 (25 studeer Skaakklub, 16 studeer Debatsklub, 8 studeer albei), vind W(ʼn leerder doen slegs Skaakklub, nie Debatsklub nie).', checkMode: 'auto', correctAnswer: '17/45', answer: '17/45', explanation: 'Slegs Skaakklub = 25 − 8 = 17. W(slegs Skaakklub) = 17/45.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Skaakklub</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Debatsklub</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">17</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text></svg>' },
        { difficulty: 'Medium', question: 'Gebruik dieselfde klas van 45 (25 studeer Skaakklub, 16 studeer Debatsklub, 8 studeer albei), vind W(ʼn leerder doen geen van die twee aktiwiteite nie).', checkMode: 'auto', correctAnswer: '4/15', correctAnswers: ['4/15', '12/45'], answer: '4/15', explanation: 'Geen = 45 − 33 = 12 (uit die vorige vraag). W(geen) = 12/45 = 4/15.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Skaakklub</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Debatsklub</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">17</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text></svg>' },
        { difficulty: 'Medium', question: 'Amahle teken ʼn Venndiagram vir ʼn opname van 45 leerders: 25 studeer Skaakklub, 16 studeer Debatsklub, 8 studeer albei, 12 studeer geen. Sy beweer W(doen minstens een van die twee aktiwiteite) = 25/45 omdat dit die Skaakklub-totaal is. Verduidelik haar fout en gee die korrekte waarskynlikheid.', answer: 'Sy het slegs die Skaakklub-totaal gebruik in plaas van die streek wat minstens een aktiwiteit dek. "Minstens een" beteken slegs Skaakklub, slegs Debatsklub, en albei saam: 17 + 8 + 8 = 33 (of eweredig 45 − 12 = 33). Die korrekte waarskynlikheid is 33/45 = 11/15, nie 25/45 nie.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Skaakklub</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Debatsklub</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">17</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text></svg>' },

        // Block 3 — Wedersyds uitsluitende gebeurtenisse (Medium)
        { difficulty: 'Medium', question: "Is 'om ʼn 1 te gooi' en 'om ʼn 6 te gooi' met ʼn enkele dobbelsteengooi wedersyds uitsluitend? Verduidelik.", answer: 'Ja — ʼn enkele dobbelsteengooi kan slegs een getal op ʼn keer wys, dus kan om ʼn 1 en om ʼn 6 te kry nie saam gebeur nie, wat beteken die gebeurtenisse is wedersyds uitsluitend.', checkMode: 'self' },
        { difficulty: 'Medium', question: "Sipho sê 'om ʼn rooi kaart te trek' en 'om ʼn prentkaart (Boer, Vrou, Heer) te trek' uit ʼn pak is wedersyds uitsluitend. Is hy korrek? Verduidelik.", answer: 'Nee — ʼn rooi prentkaart (soos die Vrou van Harte) is beide rooi ÉN ʼn prentkaart, dus KAN albei gebeurtenisse terselfdertyd gebeur, wat beteken hulle is nie wedersyds uitsluitend nie.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Opnamekategorie word aan elke kliënt toegeken. W(verkies aanlyn inkopies) = 0,4 en W(verkies in-winkel inkopies) = 0,5, en hierdie is wedersyds uitsluitende gebeurtenisse. Vind W(verkies aanlyn of in-winkel inkopies).', checkMode: 'auto', correctAnswer: '0,9', correctAnswers: ['0.9', '0,9'], answer: '0,9', explanation: 'Aangesien die gebeurtenisse wedersyds uitsluitend is, is W(A en B) = 0, dus W(aanlyn of in-winkel) = W(aanlyn) + W(in-winkel) = 0,4 + 0,5 = 0,9.' },

        // Block 4 — Komplementêre gebeurtenisse (Medium)
        { difficulty: 'Medium', question: 'W(ʼn drukker vashaak tydens ʼn drukwerk) = 0,18. Vind W(die drukker haak nie vas nie).', checkMode: 'auto', correctAnswer: '0,82', correctAnswers: ['0.82', '0,82'], answer: '0,82', explanation: 'Met die komplementêre reël: W(nie vashaak nie) = 1 − W(vashaak) = 1 − 0,18 = 0,82.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 20 albasters, waarvan 9 pers is. Een albaster word lukraak getrek. Vind W(nie pers nie).', checkMode: 'auto', correctAnswer: '11/20', answer: '11/20', explanation: 'W(pers) = 9/20. W(nie pers nie) = 1 − 9/20 = 11/20.' },
        { difficulty: 'Medium-Hard', question: "Thabo sê komplementêre gebeurtenisse en wedersyds uitsluitende gebeurtenisse beteken presies dieselfde ding. Is hy korrek? Verduidelik met behulp van die definisies van elk.", answer: 'Nee — wedersyds uitsluitend vereis slegs dat die gebeurtenisse nie saam kan voorkom nie (W(A en B) = 0). Komplementêre gebeurtenisse moet wedersyds uitsluitend wees EN moet saam die hele steekproefruimte dek (W(A) + W(B) = 1). Elke komplementêre paar is wedersyds uitsluitend, maar nie elke wedersyds uitsluitende paar is komplementêr nie.', checkMode: 'self' },

        // Block 5 — Algemene optellingsreël (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'W(A) = 0,55, W(B) = 0,3, en W(A en B) = 0,2. Vind W(A of B).', checkMode: 'auto', correctAnswer: '0,65', correctAnswers: ['0.65', '0,65'], answer: '0,65', explanation: 'W(A of B) = W(A) + W(B) − W(A en B) = 0,55 + 0,3 − 0,2 = 0,65.' },
        { difficulty: 'Medium-Hard', question: 'W(A) = 0,3, W(B) = 0,6, en A en B is wedersyds uitsluitend. Vind W(A of B).', checkMode: 'auto', correctAnswer: '0,9', correctAnswers: ['0.9', '0,9'], answer: '0,9', explanation: 'Aangesien hulle wedersyds uitsluitend is, is W(A en B) = 0. W(A of B) = 0,3 + 0,6 − 0 = 0,9.' },
        { difficulty: 'Hard', question: 'In ʼn groep leerders is W(speel basketbal) = 0,65, W(speel netbal-volleybal) = 0,45, en W(speel albei) = 0,35. Vind W(speel basketbal of volleybal).', checkMode: 'auto', correctAnswer: '0,75', correctAnswers: ['0.75', '0,75'], answer: '0,75', explanation: 'W(basketbal of volleybal) = W(basketbal) + W(volleybal) − W(albei) = 0,65 + 0,45 − 0,35 = 0,75.' },
        { difficulty: 'Hard', question: 'Zanele bereken W(A) = 0,6, W(B) = 0,5, W(A en B) = 0,35, en kry W(A of B) = 1,1. Verduidelik waarom hierdie resultaat verkeerd moet wees en vind die korrekte waarde.', answer: 'ʼn Waarskynlikheid kan nooit 1 oorskry nie, aangesien dit ʼn verhouding van die hele steekproefruimte verteenwoordig. Haar fout was waarskynlik dat sy vergeet het om die oorvleueling af te trek, of verkeerd opgetel het. Die korrekte waarde is W(A of B) = 0,6 + 0,5 − 0,35 = 0,75, wat geldig is aangesien dit tussen 0 en 1 lê.', checkMode: 'self' },

        // Block 6 — Gekombineerde meerstap-waarskynlikheid (Hard)
        { difficulty: 'Hard', question: 'ʼn Venndiagram wys 36 atlete in totaal: 4 speel geen van sokker of netbal nie, 20 speel sokker, en 18 speel netbal. Vind hoeveel atlete albei sportsoorte speel.', checkMode: 'auto', correctAnswer: '6', answer: '6', explanation: 'Minstens een = 36 − 4 = 32. Met die optellingsreël: 32 = 20 + 18 − albei, dus albei = 38 − 32 = 6.' },
        { difficulty: 'Hard', question: 'ʼn Opname van 100 mense oor troeteldiere vind 48 het ʼn hond, 40 het ʼn kat, 32 het ʼn vis, 19 het ʼn hond en kat, 17 het ʼn kat en vis, 13 het ʼn hond en vis, en 6 het al drie. Vind hoeveel mense geen van die drie troeteldiere het nie.', checkMode: 'auto', correctAnswer: '23', answer: '23', explanation: 'Minstens een troeteldier = 48 + 40 + 32 − 19 − 17 − 13 + 6 = 77. Geen = 100 − 77 = 23.' },
        { difficulty: 'Hard', question: 'ʼn Boks het 9 penne: 5 blou en 4 swart. Naledi kies ʼn pen, hou dit, en kies dan ʼn tweede pen sonder vervanging. Vind W(albei penne is blou).', checkMode: 'auto', correctAnswer: '5/18', answer: '5/18', explanation: 'W(blou eerste) = 5/9. Sonder vervanging, W(blou tweede) = 4/8 = 1/2. Gekombineer: 5/9 × 1/2 = 5/18.' },
        { difficulty: 'Hard', question: 'Bongani sê dat vir enige twee gebeurtenisse A en B, W(A of B) altyd gelyk is aan W(A) + W(B), ongeag of die gebeurtenisse oorvleuel. Verduidelik waarom dit slegs in sekere gevalle waar is, met verwysing na beide die optellingsreël en wedersyds uitsluitende gebeurtenisse.', answer: 'Dit is slegs waar wanneer A en B wedersyds uitsluitend is, wat beteken W(A en B) = 0, sodat die algemene optellingsreël W(A of B) = W(A) + W(B) − W(A en B) vereenvoudig tot W(A of B) = W(A) + W(B). As die gebeurtenisse oorvleuel (nie wedersyds uitsluitend is nie), moet die snyding afgetrek word om te verhoed dat uitkomste wat aan albei gebeurtenisse behoort, dubbel getel word, dus W(A of B) = W(A) + W(B) − W(A en B) met ʼn W(A en B) wat nie nul is nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het relatiewe frekwensie, Venndiagramme, wedersyds uitsluitende en komplementêre gebeurtenisse, en die optellingsreël onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor die algemene optellingsreël of Venndiagramme en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde oor wedersyds uitsluitende en komplementêre gebeurtenisse, en probeer dan weer.' },
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
