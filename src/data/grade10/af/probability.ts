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
        '<VideoPlaceholder label="Short video explaining the difference between theoretical probability and relative frequency, showing how relative frequency approaches theoretical probability as trials increase" />',
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
            `[Diagram nodig: ʼn Venndiagram met twee oorvleuelende sirkels gemerk ${bl('Wiskunde')} en ${or('Wetenskap')}, met ${bl('10')} in slegs Wiskunde, ${or('7')} in slegs Wetenskap, ${gr('8')} in die oorvleueling, en 5 buite albei sirkels]`,
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
        '<DiagramPlaceholder label="Venn diagram with two overlapping circles labelled Maths and Science, showing 10 in Maths only, 7 in Science only, 8 in the overlap, and 5 outside both circles" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to draw and use a Venn diagram to find probabilities of compound events including intersection, union, and complement" />',
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
        '<DiagramPlaceholder label="Diagram showing two non-overlapping regions labelled event A (blue) and not A (orange) within a sample space rectangle, with P(A) + P(not A) = 1 highlighted in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining mutually exclusive and complementary events with dice and everyday examples, and showing how to use the complementary rule" />',
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
          answer: `${gr('Slegs A en B')} vereis dat jy deur die volledige Venndiagram werk`,
          steps: [
            `Dit vereis dat jy deur die volledige Venndiagram met al die gegewe oorvleuelings werk om die spesifieke ${or('"slegs A en B"')}-streek te isoleer.`,
            `Deur die gegewe totale stelselmatig te gebruik om hierdie spesifieke snyding af te lei, wat daarop neerkom dat jy ${or('bekende oorvleuelende streke moet aftrek')} van die totale vir A en B.`,
            `Begin deur ${gr('7')} in die middel te plaas (al drie). Dan: slegs A∩C = 21 − 7 = 14; slegs B∩C = 18 − 7 = 11. Gebruik die totale vir A, B, en C om A∩B te vind = 68 − (slegs A) − (slegs B) − (slegs C) − (slegs A∩C) − (slegs B∩C) − 7 deur stelselmatige aftrekking.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three-circle Venn diagram for drugs A, B, and C study showing all intersection regions labelled with their values, demonstrating the general addition rule for three events" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video deriving and applying the general addition rule for probability, with examples involving two events and a three-circle Venn diagram" />',
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
      correctAnswer: 'yes',
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
      correctAnswer: '0.65',
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
      correctAnswer: '0.6',
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
      correctAnswer: '0.75',
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
