import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (probability roles) ──────────────────────────────────────
// favourable outcomes / explanation of difference / combined probability → green  (#16a34a)
// total outcomes / predicted frequency / individual probabilities        → blue   (#2563eb)
// probability / actual frequency                                         → orange (#ea580c)
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Waarskynlikheid',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — LISTING OUTCOMES AND CALCULATING PROBABILITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'listing-outcomes-calculating-probability',
      title: 'Uitkomste Lys en Waarskynlikheid Bereken',
      icon: '🎲',
      explanation:
        `<p style="margin-bottom:16px;">Ons kyk na eenvoudige situasies met <strong>ewe waarskynlike uitkomste</strong>, deur alle moontlike uitkomste te lys en die waarskynlikheid van elkeen te bepaal met die definisie:</p>` +

        `<div style="text-align:center;font-size:1.1em;font-weight:700;color:#0f1f3d;margin-bottom:20px;padding:12px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;">${or('Waarskynlikheid')} = ${gr('gunstige uitkomste')} ÷ ${bl('totale uitkomste')}</div>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gunstige uitkomste')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('totale uitkomste')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('waarskynlikheid')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Gunstige uitkomste</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die uitkomste wat ooreenstem met wat ons soek.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Totale uitkomste</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Al die moontlike resultate wat in die eksperiment kan voorkom.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Waarskynlikheid</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Getal tussen 0 en 1 wat beskryf hoe waarskynlik ʼn uitkoms is.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Lys altyd eers alle uitkomste</p>` +
        `<p style="margin:0;color:#1e3a8a;">Voordat jy waarskynlikheid bereken, skryf al die moontlike uitkomste neer. Dit verhoed dat jy enige mis en verseker dat jou ${bl('totaal')} korrek is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Sak het 4 rooi, 3 blou en 5 groen balle. Vind die waarskynlikheid om ʼn blou bal te kies.',
          answer: `${or('Waarskynlikheid')} = ${gr('3')} ÷ ${bl('12')} = ${or('1/4')}`,
          steps: [
            `${gr('Gunstige uitkomste:')} Daar is <strong>3</strong> blou balle — dit is die ${gr('gunstige uitkomste')}.`,
            `${bl('Totale uitkomste:')} Totale balle = 4 + 3 + 5 = ${bl('12')}.`,
            `${or('Waarskynlikheid:')} ${or('W(blou)')} = ${gr('3')} ÷ ${bl('12')} = ${or('1/4')}`,
          ],
        },
        {
          question: 'Sipho gooi ʼn dobbelsteen. Lys alle uitkomste en vind die waarskynlikheid om ʼn getal deur 3 deelbaar te gooi.',
          answer: `${or('Waarskynlikheid')} = ${gr('2')} ÷ ${bl('6')} = ${or('1/3')}`,
          steps: [
            `Alle moontlike uitkomste: 1, 2, 3, 4, 5, 6 — daar is ${bl('6')} uitkomste altesaam.`,
            `${gr('Gunstige uitkomste:')} Getalle wat deur 3 deelbaar is, is 3 en 6 — dit is ${gr('2')} uitkomste.`,
            `${or('Waarskynlikheid:')} ${or('W(deelbaar deur 3)')} = ${gr('2')} ÷ ${bl('6')} = ${or('1/3')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om alle uitkomste te lys en waarskynlikheid te bereken deur gunstige uitkomste deur totale uitkomste te deel" />',

      diagramPlaceholder:
        'Diagram van ʼn sak met 4 rooi, 3 blou en 5 groen balle, wat die waarskynlikheidsformule W(blou) = 3 ÷ 12 = 1/4 stap vir stap toepas',

      diagramSvg:
        '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><path d="M40,45 Q40,18 70,18 Q100,18 100,45 L94,140 Q94,158 70,158 Q46,158 46,140 Z" fill="#f3f4f6" stroke="#0f1f3d" stroke-width="2.5"/><path d="M55,18 Q70,8 85,18" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="54" cy="55" r="7" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="70" cy="55" r="7" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="86" cy="55" r="7" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="54" cy="75" r="7" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="70" cy="75" r="7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="86" cy="75" r="7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="54" cy="95" r="7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="70" cy="95" r="7" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="86" cy="95" r="7" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="54" cy="115" r="7" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="70" cy="115" r="7" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="86" cy="115" r="7" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><text x="70" y="10" font-size="10" fill="#374151" font-weight="700" text-anchor="middle">Sak: 12 balle</text><text x="145" y="55" font-size="9" fill="#dc2626" font-weight="700" text-anchor="middle">4 rooi</text><text x="145" y="75" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">3 blou</text><text x="145" y="95" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">5 groen</text><text x="70" y="172" font-size="10" fill="#ea580c" font-weight="700" text-anchor="middle">W(blou) = 3 ÷ 12 = 1/4</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PREDICTING AND COMPARING RELATIVE FREQUENCY WITH PROBABILITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'predicting-comparing-relative-frequency',
      title: 'Relatiewe Frekwensie Voorspel en Vergelyk met Waarskynlikheid',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Ons <strong>voorspel</strong>, met redes, die relatiewe frekwensie van moontlike uitkomste vir ʼn reeks proewe gebaseer op teoretiese waarskynlikheid, en vergelyk dan werklike relatiewe frekwensie met die voorspelde waarskynlikheid en verduidelik moontlike verskille.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('voorspelde frekwensie')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('werklike frekwensie')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('verduideliking van verskil')}</span>` +
        `</div>` +

        // ── Key ideas ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelidees</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Voorspelde (teoretiese) frekwensie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Verwagte aantal kere wat ʼn uitkoms voorkom = waarskynlikheid × aantal proewe.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Relatiewe frekwensie (werklik)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waargenome frekwensie in ʼn eksperiment = aantal kere wat uitkoms voorgekom het ÷ totale proewe.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Waarom hulle verskil</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Toevallige variasie veroorsaak verskille, veral met minder proewe. Meer proewe → resultate kom nader aan teoretiese waarskynlikheid.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die wet van groot getalle</p>` +
        `<p style="margin:0;color:#1e3a8a;">Met al hoe meer proewe kom die ${or('werklike frekwensie')} nader aan die ${bl('voorspelde frekwensie')}. Met slegs ʼn klein aantal proewe is groter verskille heeltemal normaal.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato voorspel dat ʼn muntstuk 100 keer opgooi ongeveer 50 koppe behoort te gee. Sy kry 47 koppe. Verduidelik die verskil.',
          answer: `${gr('Normale variasie')} — die werklike resultaat is naby aan die voorspelde waarde en die verskil is te wyte aan toevalligheid.`,
          steps: [
            `Die teoretiese waarskynlikheid van kop is 1/2, dus is die ${bl('voorspelde frekwensie')} vir 100 opgooie 100 × 1/2 = ${bl('50 koppe')}.`,
            `Lerato se ${or('werklike frekwensie')} was ${or('47 koppe')}.`,
            `${gr('Verduideliking:')} 47 kry is naby maar nie presies 50 nie — ${gr('dit is normale variasie weens toevalligheid in ʼn beperkte aantal proewe')}. Dit beteken nie dat die muntstuk oneerlik is nie.`,
          ],
        },
        {
          question: 'Thabo voorspel dat ʼn dobbelsteen 60 keer gooi ongeveer 10 sesse behoort te gee (aangesien waarskynlikheid = 1/6). Hy gooi 14 sesse. Is dit verbasend?',
          answer: `${gr('Nie verbasend nie')} — die resultaat is hoër as verwag, maar binne die reikwydte van normale variasie vir 60 proewe.`,
          steps: [
            `Teoretiese waarskynlikheid om ʼn ses te gooi = 1/6. ${bl('Voorspelde frekwensie')} = 60 × 1/6 = ${bl('10 sesse')}.`,
            `Thabo se ${or('werklike frekwensie')} was ${or('14 sesse')}.`,
            `${gr('Verduideliking:')} 14 kry is ietwat hoër as die verwagte 10, maar ${gr('met beperkte proewe kan hierdie variasie natuurlik voorkom; meer proewe sal die resultaat waarskynlik nader aan 10 bring')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om relatiewe frekwensie vanuit teoretiese waarskynlikheid te voorspel en verskille tussen voorspelde en werklike resultate te verduidelik" />',

      diagramPlaceholder:
        'Staafgrafiek wat voorspelde (teoretiese) frekwensie in blou vergelyk met werklike frekwensie in oranje vir ʼn 100-opgooi-muntstukeksperiment en ʼn 60-gooi-dobbelsteeneksperiment',

      diagramSvg:
        '<svg viewBox="0 0 220 175" xmlns="http://www.w3.org/2000/svg"><text x="110" y="12" font-size="10" fill="#0f1f3d" font-weight="700" text-anchor="middle">Voorspelde vs Werklike Frekwensie</text><rect x="15" y="20" width="9" height="9" fill="#2563eb"/><text x="27" y="28" font-size="7.5" fill="#374151">Voorspeld</text><rect x="95" y="20" width="9" height="9" fill="#ea580c"/><text x="107" y="28" font-size="7.5" fill="#374151">Werklik</text><line x1="25" y1="150" x2="190" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="25" y1="150" x2="25" y2="40" stroke="#0f1f3d" stroke-width="2"/><rect x="35" y="85" width="16" height="65" fill="#2563eb"/><text x="43" y="80" font-size="7.5" fill="#2563eb" font-weight="700" text-anchor="middle">0.50</text><rect x="55" y="89" width="16" height="61" fill="#ea580c"/><text x="63" y="84" font-size="7.5" fill="#ea580c" font-weight="700" text-anchor="middle">0.47</text><text x="53" y="163" font-size="8" fill="#374151" text-anchor="middle">Munt (100 opgooie)</text><rect x="135" y="128" width="16" height="22" fill="#2563eb"/><text x="143" y="124" font-size="7.5" fill="#2563eb" font-weight="700" text-anchor="middle">0.17</text><rect x="155" y="120" width="16" height="30" fill="#ea580c"/><text x="163" y="116" font-size="7.5" fill="#ea580c" font-weight="700" text-anchor="middle">0.23</text><text x="153" y="163" font-size="8" fill="#374151" text-anchor="middle">Dobbelsteen (60 gooie)</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING PROBABILITY PROBLEMS IN CONTEXT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-probability-problems-in-context',
      title: 'Waarskynlikheidsprobleme in Konteks Oplos',
      icon: '📝',
      explanation:
        `<p style="margin-bottom:16px;">Ons pas waarskynlikheidsbegrippe toe om multi-stap, werklike-lewe probleme op te los, deur <strong>uitkomste lys</strong>, <strong>waarskynlikheid bereken</strong>, en redenering oor <strong>relatiewe frekwensie teenoor teoretiese waarskynlikheid</strong> te kombineer.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('individuele waarskynlikhede')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gekombineerde waarskynlikheid')}</span>` +
        `</div>` +

        // ── Combining events ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Onafhanklike gebeurtenisse kombineer</p>` +
        `<p style="margin-bottom:16px;">Wanneer twee gebeurtenisse <strong>onafhanklik</strong> is (die een beïnvloed nie die ander nie), vermenigvuldig hulle individuele waarskynlikhede:</p>` +
        `<div style="text-align:center;font-size:1.05em;font-weight:700;color:#0f1f3d;margin-bottom:20px;padding:12px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;">${gr('W(A en B)')} = ${bl('W(A)')} × ${bl('W(B)')}</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategie vir multi-stap probleme</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Stap 1</strong> — Lys alle moontlike uitkomste vir elke deel.<br><strong>Stap 2</strong> — Bereken ${bl('individuele waarskynlikhede')}.<br><strong>Stap 3</strong> — Kombineer hulle om die ${gr('gekombineerde waarskynlikheid')} te vind.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Wieletjie het 8 gelyke afdelings genommer 1–8. Vind die waarskynlikheid om op ʼn getal groter as 5 te land.',
          answer: `${gr('W(groter as 5)')} = ${gr('3/8')}`,
          steps: [
            `${bl('Gunstige uitkomste:')} Getalle groter as 5 is 6, 7 en 8 — dit is ${bl('3')} gunstige uitkomste.`,
            `${bl('Totale uitkomste:')} Die wieletjie het ${bl('8')} gelyke afdelings.`,
            `${gr('Waarskynlikheid:')} ${gr('W(groter as 5)')} = ${bl('3')} ÷ ${bl('8')} = ${gr('3/8')}`,
          ],
        },
        {
          question: 'Amahle gooi ʼn muntstuk op en gooi ʼn dobbelsteen tegelyk. Vind die waarskynlikheid om kop en ʼn ewe getal te kry.',
          answer: `${gr('W(kop en ewe)')} = ${gr('1/4')}`,
          steps: [
            `${bl('W(kop)')} = 1 ÷ 2 = ${bl('1/2')}`,
            `Ewe getalle op ʼn dobbelsteen: 2, 4, 6 — dit is 3 uit 6. ${bl('W(ewe)')} = 3 ÷ 6 = ${bl('1/2')}`,
            `Hierdie gebeurtenisse is onafhanklik, dus vermenigvuldig: ${gr('W(kop en ewe)')} = ${bl('1/2')} × ${bl('1/2')} = ${gr('1/4')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om meerstap-waarskynlikheidsprobleme in werklike-lewe kontekste op te los, insluitend die lys van uitkomste en die kombinering van onafhanklike gebeurtenisse" />',

      diagramPlaceholder:
        'Boomdiagram vir die opgooi van ʼn muntstuk en die rol van ʼn dobbelsteen, met die tak vir kop en ewe uitgelig in groen met gekombineerde waarskynlikheid 1/2 × 1/2 = 1/4',

      diagramSvg:
        '<svg viewBox="0 0 240 205" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="100" r="4" fill="#374151"/><text x="20" y="90" font-size="8" fill="#374151" text-anchor="middle">Begin</text><line x1="20" y1="100" x2="98" y2="50" stroke="#9ca3af" stroke-width="2"/><line x1="20" y1="100" x2="98" y2="150" stroke="#9ca3af" stroke-width="2"/><text x="50" y="68" font-size="8" fill="#2563eb" font-weight="700" text-anchor="middle">1/2</text><text x="50" y="138" font-size="8" fill="#2563eb" font-weight="700" text-anchor="middle">1/2</text><circle cx="100" cy="50" r="4" fill="#374151"/><text x="100" y="38" font-size="8" fill="#374151" font-weight="700" text-anchor="middle">Kop</text><circle cx="100" cy="150" r="4" fill="#374151"/><text x="100" y="168" font-size="8" fill="#374151" font-weight="700" text-anchor="middle">Stert</text><line x1="100" y1="50" x2="188" y2="25" stroke="#16a34a" stroke-width="2.5"/><line x1="100" y1="50" x2="188" y2="75" stroke="#9ca3af" stroke-width="2"/><line x1="100" y1="150" x2="188" y2="125" stroke="#9ca3af" stroke-width="2"/><line x1="100" y1="150" x2="188" y2="175" stroke="#9ca3af" stroke-width="2"/><text x="140" y="30" font-size="8" fill="#2563eb" font-weight="700" text-anchor="middle">1/2</text><text x="140" y="68" font-size="8" fill="#374151" text-anchor="middle">1/2</text><text x="140" y="132" font-size="8" fill="#374151" text-anchor="middle">1/2</text><text x="140" y="172" font-size="8" fill="#374151" text-anchor="middle">1/2</text><circle cx="190" cy="25" r="4" fill="#16a34a"/><text x="196" y="22" font-size="8.5" fill="#16a34a" font-weight="700" text-anchor="start">K, Ewe</text><circle cx="190" cy="75" r="4" fill="#9ca3af"/><text x="196" y="78" font-size="8" fill="#6b7280" text-anchor="start">K, Onewe</text><circle cx="190" cy="125" r="4" fill="#9ca3af"/><text x="196" y="122" font-size="8" fill="#6b7280" text-anchor="start">S, Ewe</text><circle cx="190" cy="175" r="4" fill="#9ca3af"/><text x="196" y="178" font-size="8" fill="#6b7280" text-anchor="start">S, Onewe</text><text x="120" y="198" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">W(Kop en Ewe) = 1/2 × 1/2 = 1/4</text></svg>',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Sak het 5 rooi en 7 blou fiches. Vind die waarskynlikheid om ʼn rooi fiche te kies.',
      answer: '5/12',
      checkMode: 'auto',
      correctAnswer: '5/12',
      explanation: 'Gunstige uitkomste: 5 rooi. Totale uitkomste: 5 + 7 = 12. Waarskynlikheid = 5/12.',
    },

    // ── Q2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Dobbelsteen word gegooi. Vind die waarskynlikheid om ʼn getal deur 2 deelbaar te gooi.',
      answer: '1/2',
      checkMode: 'auto',
      correctAnswer: '1/2',
      correctAnswers: ['1/2', '3/6', '0.5', '0,5'],
      explanation: 'Getalle deelbaar deur 2: 2, 4, 6 — 3 gunstige uitkomste. Totaal: 6. Waarskynlikheid = 3/6 = 1/2.',
    },

    // ── Q3 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê ʼn dobbelsteen 30 keer gooi behoort presies 5 sesse te gee. Is dit gewaarborg? Verduidelik.',
      answer: 'Nee — 5 sesse is die verwagte (teoretiese) waarde, maar werklike resultate kan wissel weens toevalligheid; dit is nie gewaarborg om presies 5 te wees nie.',
      checkMode: 'self',
    },

    // ── Q4 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Lerato gooi ʼn muntstuk 50 keer op en kry 23 koppe. Vind die relatiewe frekwensie van kop.',
      answer: '23/50 of 0,46',
      checkMode: 'auto',
      correctAnswers: ['23/50', '0.46', '0,46'],
      explanation: 'Relatiewe frekwensie = aantal koppe ÷ totale opgooie = 23 ÷ 50 = 23/50 = 0,46.',
    },

    // ── Q5 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Vergelyk Lerato se relatiewe frekwensie in Vraag 4 met die teoretiese waarskynlikheid om kop te kry en verduidelik enige verskil.",
      answer: 'Teoretiese waarskynlikheid is 0,5 (50%). Haar relatiewe frekwensie van 0,46 is naby maar effens laer, wat normale variasie is van ʼn beperkte aantal proewe.',
      checkMode: 'self',
    },

    // ── Q6 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Wieletjie het 6 gelyke afdelings genommer 1–6. Vind die waarskynlikheid om op ʼn getal kleiner as 4 te land.',
      answer: '1/2',
      checkMode: 'auto',
      correctAnswer: '1/2',
      correctAnswers: ['1/2', '3/6', '0.5', '0,5'],
      explanation: 'Getalle kleiner as 4: 1, 2, 3 — 3 gunstige uitkomste. Totaal: 6. Waarskynlikheid = 3/6 = 1/2.',
    },

    // ── Q7 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo voorspel dat ʼn dobbelsteen 120 keer gooi ongeveer 20 vywe behoort te gee. Hy kry 25. Is dit verbasend? Verduidelik.',
      answer: 'Verwag = 120 × 1/6 = 20. 25 kry is ietwat hoër, maar dit kan natuurlik gebeur met beperkte proewe; meer worpe sal dit waarskynlik nader aan 20 bring.',
      checkMode: 'self',
    },

    // ── Q8 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Sak het 8 groen en 12 geel albasters. Vind die waarskynlikheid om ʼn groen albaster te kies.',
      answer: '8/20 of 2/5',
      checkMode: 'auto',
      correctAnswers: ['8/20', '2/5', '0.4', '0,4'],
      explanation: 'Gunstig: 8 groen. Totaal: 8 + 12 = 20. Waarskynlikheid = 8/20 = 2/5.',
    },

    // ── Q9 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Amahle gooi ʼn muntstuk op en gooi ʼn dobbelsteen. Vind die waarskynlikheid om stert en ʼn getal groter as 4 te kry.',
      answer: '1/6',
      checkMode: 'auto',
      correctAnswer: '1/6',
      correctAnswers: ['1/6', '2/12'],
      explanation: 'W(stert) = 1/2. Getalle > 4: 5 en 6, dus W(> 4) = 2/6 = 1/3. Gekombineerd: 1/2 × 1/3 = 1/6.',
    },

    // ── Q10 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Wieletjie het 10 gelyke afdelings genommer 1–10. Vind die waarskynlikheid om op ʼn veelvoud van 3 te land.',
      answer: '3/10',
      checkMode: 'auto',
      correctAnswer: '3/10',
      explanation: 'Veelvoude van 3 tot 10: 3, 6, 9 — 3 gunstige uitkomste. Totaal: 10. Waarskynlikheid = 3/10.',
    },

    // ── Q11 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho gooi ʼn dobbelsteen 40 keer en kry presies 6 keer ʼn 2. Vind die relatiewe frekwensie en vergelyk dit met die teoretiese waarskynlikheid.',
      answer: 'Relatiewe frekwensie = 6/40 = 0,15. Teoretiese waarskynlikheid = 1/6 ≈ 0,167. Die waardes is naby aan mekaar, wat wys dat die eksperiment redelik ooreenstem met verwagtinge.',
      checkMode: 'self',
    },

    // ── Q12 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê met genoeg proewe sal relatiewe frekwensie uiteindelik presies met teoretiese waarskynlikheid ooreenstem. Is sy korrek? Verduidelik.',
      answer: 'Nie presies nie — relatiewe frekwensie neig om nader aan teoretiese waarskynlikheid te kom met meer proewe, maar weens toevalligheid pas dit selde presies daarby, selfs met baie groot aantalle proewe.',
      checkMode: 'self',
    },

    // ── Q13 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Sak het 6 rooi, 4 blou en 10 groen balle. Vind die waarskynlikheid om ʼn bal te kies wat nie groen is nie.',
      answer: '10/20 of 1/2',
      checkMode: 'auto',
      correctAnswers: ['10/20', '1/2', '0.5', '0,5'],
      explanation: 'Nie groen nie: 6 rooi + 4 blou = 10 balle. Totaal: 6 + 4 + 10 = 20. Waarskynlikheid = 10/20 = 1/2.',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo gooi twee muntstukke tegelyk op. Vind die waarskynlikheid om kop op albei muntstukke te kry.',
      answer: '1/4',
      checkMode: 'auto',
      correctAnswer: '1/4',
      correctAnswers: ['1/4', '0.25', '0,25'],
      explanation: 'W(kop op eerste muntstuk) = 1/2. W(kop op tweede muntstuk) = 1/2. Onafhanklike gebeurtenisse: W(kop en kop) = 1/2 × 1/2 = 1/4.',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Amahle se wieletjie het 12 gelyke afdelings. Sy voorspel dat op afdeling 7 land ongeveer 8 keer uit 96 draaie behoort te gebeur. Is haar voorspelling redelik? Verduidelik.",
      answer: 'Ja — teoretiese waarskynlikheid = 1/12. Verwagte frekwensie = 96 × 1/12 = 8, dus stem haar voorspelling presies ooreen met die teoretiese verwagting.',
      checkMode: 'self',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Waarskynlikheidstaal/Skaal as Breuk, Desimaal, Persentasie (0-2, Easy)
        { difficulty: 'Easy', question: 'ʼn Opname wys dat die waarskynlikheid dat ʼn kliënt tee eerder as koffie verkies, 1/8 is. Watter woord beskryf hierdie waarskynlikheid die beste: seker, waarskynlik, onwaarskynlik of onmoontlik?', checkMode: 'auto', correctAnswer: 'onwaarskynlik', correctAnswers: ['onwaarskynlik'], explanation: '1/8 = 0,125, wat baie nader aan 0 as aan 1 is, dus is die gebeurtenis onwaarskynlik (maar nie onmoontlik nie, aangesien dit steeds kan gebeur) ✓' },
        { difficulty: 'Easy', question: 'Die waarskynlikheid dat Kagiso ʼn vasvra-vraag korrek beantwoord, is 5/8. Skryf hierdie waarskynlikheid as ʼn persentasie.', checkMode: 'auto', correctAnswer: '62,5%', correctAnswers: ['62,5%', '62.5%', '62,5', '62.5'], explanation: '5/8 = 5 ÷ 8 = 0,625. As ʼn persentasie: 0,625 × 100 = 62,5% ✓' },
        { difficulty: 'Easy', question: 'ʼn Bus kom laat aan met ʼn waarskynlikheid van 0,24. Skryf hierdie waarskynlikheid as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '6/25', correctAnswers: ['6/25', '24/100'], explanation: '0,24 = 24/100, wat vereenvoudig na 6/25 (deel bo en onder deur 4) ✓' },

        // Blok 2 — Waarskynlikheid van ʼn Wieletjie/Sak Fiches (3-6, Medium) — DIAGRAM-FLAGGED at 4, 5
        { difficulty: 'Medium', question: 'ʼn Sak het 7 rooi fiches, 5 blou fiches en 8 groen fiches. Vind die waarskynlikheid om ʼn fiche te kies wat NIE rooi is nie. Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '13/20', correctAnswers: ['13/20'], explanation: 'Nie rooi nie = 5 blou + 8 groen = 13 fiches.\nTotale uitkomste = 7 + 5 + 8 = 20 fiches.\nW(nie rooi nie) = 13/20 (reeds in eenvoudigste vorm, aangesien 13 priem is en nie in 20 deel nie) ✓' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 10 gelyke afdelings, soos getoon: 4 kastaiingbruin afdelings en 6 silwer afdelings. Vind die waarskynlikheid om op kastaiingbruin te land, en gee jou antwoord as ʼn desimaal.', checkMode: 'auto', correctAnswer: '0,4', correctAnswers: ['0,4', '0.4', '2/5'], explanation: 'Gunstige uitkomste = 4 kastaiingbruin afdelings.\nTotale uitkomste = 10 afdelings.\nW(kastaiingbruin) = 4/10 = 0,4 ✓' },
        { difficulty: 'Medium', question: 'ʼn Sak het 15 fiches altesaam, soos getoon: 9 is oranje en die res is pers. Vind die waarskynlikheid om ʼn pers fiche te kies, en gee jou antwoord as ʼn persentasie.', checkMode: 'auto', correctAnswer: '40%', correctAnswers: ['40%', '40'], explanation: 'Pers fiches = 15 − 9 = 6.\nTotale uitkomste = 15 fiches.\nW(pers) = 6/15 = 2/5 = 40% ✓' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 12 gelyke afdelings verdeel tussen drie spanne: Span A het 5 afdelings, Span B het 4 afdelings, en Span C het 3 afdelings. Vind die waarskynlikheid om op Span A of Span C te land.', checkMode: 'auto', correctAnswer: '2/3', correctAnswers: ['2/3', '8/12'], explanation: 'Gunstige uitkomste = Span A + Span C = 5 + 3 = 8 afdelings.\nTotale uitkomste = 12 afdelings.\nW(A of C) = 8/12 = 2/3 ✓' },

        // Blok 3 — Uitkomsruimtes vir Gekombineerde Gebeurtenisse Lys (7-10, Medium-Hard) — DIAGRAM-FLAGGED at 7
        { difficulty: 'Medium-Hard', question: 'ʼn Muntstuk word opgegooi en ʼn wieletjie met 5 gelyke afdelings gekleur rooi, blou, groen, geel en pers word saam gedraai, soos getoon. Gebruik die leë rooster, met muntstuk-uitkomste af die kant en wieletjie-uitkomste oor die bokant, om die waarskynlikheid te vind om stert en groen te kry.', checkMode: 'auto', correctAnswer: '1/10', correctAnswers: ['1/10'], explanation: 'Totale uitkomste = 2 muntstuk-uitkomste × 5 wieletjie-uitkomste = 10.\nGunstige uitkomste = 1 (stert en groen).\nW(stert en groen) = 1/10 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="48" width="184" height="94" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="18" y1="82" x2="202" y2="82" stroke="#0f1f3d" stroke-width="2"/><line x1="52" y1="48" x2="52" y2="142" stroke="#0f1f3d" stroke-width="2"/><line x1="82.0" y1="82" x2="82.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="112.0" y1="82" x2="112.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="142.0" y1="82" x2="142.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="172.0" y1="82" x2="172.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="18" y1="112" x2="202" y2="112" stroke="#9ca3af" stroke-width="1"/><text x="67.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">R</text><text x="97.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">B</text><text x="127.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">G</text><text x="157.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">Gl</text><text x="187.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">P</text><text x="35.0" y="102.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">K</text><text x="35.0" y="132.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">S</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Twee gewone dobbelstene word saam gegooi. Vind die waarskynlikheid dat die produk van die twee getalle wat gegooi word, 12 is.', checkMode: 'auto', correctAnswer: '1/9', correctAnswers: ['1/9', '4/36'], explanation: 'Totale uitkomste = 6 × 6 = 36.\nPare waarvan die produk 12 is: (2,6), (3,4), (4,3), (6,2) — dit is 4 gunstige uitkomste.\nW(produk van 12) = 4/36 = 1/9 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Kafee laat Thandeka 1 van 4 broodsoorte, 1 van 3 vulsels en 1 van 2 souse kies om ʼn toebroodjie te maak. Hoeveel verskillende toebroodjies is moontlik, en wat is die waarskynlikheid dat Thandeka lukraak met een spesifieke toebroodjie-kombinasie eindig?', checkMode: 'auto', correctAnswer: '24 toebroodjies, 1/24', correctAnswers: ['24 toebroodjies, 1/24', '24, 1/24', '24 en 1/24'], explanation: 'Totale toebroodjies = 4 broodsoorte × 3 vulsels × 2 souse = 24.\nW(een spesifieke toebroodjie) = 1/24, aangesien daar slegs 1 gunstige uitkoms uit 24 totaal is ✓' },
        { difficulty: 'Hard', question: 'Verduidelik waarom die uitkomsruimte vir die gooi van twee dobbelstene saam 36 uitkomste het, en nie 21 nie (die aantal maniere om twee verskillende of ooreenstemmende getalle van 1 tot 6 te kies sonder om om te gee watter dobbelsteen watter getal gewys het).', checkMode: 'self', answer: 'Elke dobbelsteen kan op enige van 6 getalle land, en die twee dobbelstene word onafhanklik gegooi, dus kan elke uitkoms op die eerste dobbelsteen gepaar word met elke uitkoms op die tweede dobbelsteen, wat 6 × 6 = 36 uitkomste altesaam gee. Die telling van 21 is verkeerd omdat dit uitkomste soos "ʼn 2 en ʼn 5" as ʼn enkele resultaat behandel, en ignoreer watter dobbelsteen watter getal gewys het. Maar om ʼn 2 op dobbelsteen A en ʼn 5 op dobbelsteen B te gooi, is ʼn ander uitkoms as om ʼn 5 op dobbelsteen A en ʼn 2 op dobbelsteen B te gooi — dit is twee aparte, ewe waarskynlike uitkomste in die uitkomsruimte, nie een nie. Om slegs 21 ongeordende kombinasies te tel, ondertel die ware uitkomsruimte en sou die waarskynlikhede verkeerd maak.' },

        // Blok 4 — Teoretiese Waarskynlikheidsberekening met Gekombineerde Voorwaardes (11-13, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Trekkaartjies is genommer 1 tot 40. Vind die waarskynlikheid dat ʼn lukraak getrekte kaartjienommer ewe EN ʼn veelvoud van 5 is. Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '1/10', correctAnswers: ['1/10', '4/40'], explanation: 'ʼn Getal wat ewe EN ʼn veelvoud van 5 is, moet ʼn veelvoud van 10 wees: 10, 20, 30, 40 — dit is 4 gunstige uitkomste.\nTotale uitkomste = 40.\nW(ewe en veelvoud van 5) = 4/40 = 1/10 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Wieletjie het 20 gelyke afdelings genommer 1 tot 20. Vind die waarskynlikheid om op ʼn priemgetal te land, en gee jou antwoord as ʼn desimaal.', checkMode: 'auto', correctAnswer: '0,4', correctAnswers: ['0,4', '0.4', '2/5'], explanation: 'Priemgetalle van 1-20: 2, 3, 5, 7, 11, 13, 17, 19 — dit is 8 gunstige uitkomste.\nTotale uitkomste = 20.\nW(priemgetal) = 8/20 = 2/5 = 0,4 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Standaard stel van 52 speelkaarte word geskommel. Vind die waarskynlikheid om ʼn prentkaart te trek (ʼn boer, vrou of heer). Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '3/13', correctAnswers: ['3/13', '12/52'], explanation: 'Prentkaarte = 4 kleure × 3 prentkaarte (boer, vrou, heer) = 12.\nTotale uitkomste = 52 kaarte.\nW(prentkaart) = 12/52 = 3/13 ✓' },

        // Blok 5 — Eksperimentele Waarskynlikheid / Relatiewe Frekwensie (14-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Wieletjie het 5 gelyke afdelings. Zanele voorspel dat om dit 200 keer te draai, ongeveer 40 lanings op rooi behoort te gee (aangesien W(rooi) = 1/5). Sy kry werklik 52 lanings op rooi. Vind die verskil tussen haar werklike en voorspelde frekwensie, as ʼn persentasie van die totale proewe.', checkMode: 'auto', correctAnswer: '6%', correctAnswers: ['6%', '6'], explanation: 'Voorspelde frekwensie = 200 × 1/5 = 40.\nVerskil = 52 − 40 = 12.\nAs ʼn persentasie van proewe: 12 ÷ 200 = 0,06 = 6% ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Dobbelsteen word 180 keer gegooi. Die tabel hieronder wys die resultate:\n1: 28, 2: 31, 3: 35, 4: 29, 5: 27, 6: 30.\nVind die relatiewe frekwensie om ʼn getal groter as 4 te gooi, as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '19/60', correctAnswers: ['19/60', '57/180'], explanation: 'Getalle groter as 4 is 5 en 6: 27 + 30 = 57 resultate.\nRelatiewe frekwensie = 57 ÷ 180 = 57/180 = 19/60 ✓' },
        { difficulty: 'Hard', question: 'ʼn Fabriek toets 500 gloeilampe en vind dat 15 defek is. Skat die waarskynlikheid dat ʼn lukraak gekose gloeilamp uit hierdie groep defek is, en verduidelik of dit ʼn teoretiese waarskynlikheid of ʼn eksperimentele (relatiewe frekwensie) waarskynlikheid is.', checkMode: 'self', answer: 'Geskatte waarskynlikheid = aantal defekte gloeilampe ÷ totale gloeilampe getoets = 15/500 = 3/100 = 0,03 (3%). Dit is ʼn eksperimentele waarskynlikheid (ʼn relatiewe frekwensie), nie ʼn teoretiese waarskynlikheid nie, omdat dit gebaseer is op die werklike resultate van die toets van regte gloeilampe, en nie op redenering oor ewe waarskynlike uitkomste voordat enige toetsing plaasgevind het nie. As ʼn ander groep van 500 gloeilampe getoets word, kan die relatiewe frekwensie effens anders as 3% uitkom.' },

        // Blok 6 — Gekombineerde Gebeurtenisse: Met vs Sonder Terugsetting (17-19, Hard)
        { difficulty: 'Hard', question: 'ʼn Sak het 4 rooi fiches en 6 blou fiches. Bongiwe kies ʼn fiche, sit dit NIE terug nie, en kies dan ʼn tweede fiche. Vind die waarskynlikheid dat albei fiches rooi is.', checkMode: 'auto', correctAnswer: '2/15', correctAnswers: ['2/15', '12/90'], explanation: 'W(eerste rooi) = 4/10 = 2/5.\nAangesien die fiche nie teruggesit word nie, bly 9 fiches oor en slegs 3 is rooi: W(tweede rooi) = 3/9 = 1/3.\nW(albei rooi) = 2/5 × 1/3 = 2/15 ✓' },
        { difficulty: 'Hard', question: 'Met dieselfde sak uit die vorige vraag (4 rooi fiches en 6 blou fiches), veronderstel Bongiwe sit die eerste fiche terug voordat sy weer kies. Vind die waarskynlikheid dat albei fiches rooi is in hierdie geval.', checkMode: 'auto', correctAnswer: '4/25', correctAnswers: ['4/25', '16/100'], explanation: 'Aangesien die fiche teruggesit word, het die sak steeds dieselfde 4 rooi uit 10 fiches vir albei keuses.\nW(eerste rooi) = 4/10 = 2/5. W(tweede rooi) = 4/10 = 2/5.\nW(albei rooi) = 2/5 × 2/5 = 4/25 ✓' },
        { difficulty: 'Hard', question: 'Vergelyk jou antwoorde op die vorige twee vrae. Waarom is die waarskynlikheid om twee rooi fiches te kies laer wanneer die eerste fiche NIE teruggesit word nie as wanneer dit WEL teruggesit word? Gebruik die woorde "onafhanklik" en "afhanklik" in jou verduideliking.', checkMode: 'self', answer: 'Sonder terugsetting is die waarskynlikheid 2/15 ≈ 0,133, wat laer is as die met-terugsetting waarskynlikheid van 4/25 = 0,16. Dit is omdat, wanneer die fiche nie teruggesit word nie, die twee keuses afhanklike gebeurtenisse is — die verwydering van ʼn rooi fiche by die eerste keuse verminder beide die aantal rooi fiches en die totale aantal fiches wat in die sak oorbly, wat ʼn tweede rooi keuse minder waarskynlik maak (3 rooi uit 9, in plaas van 4 rooi uit 10). Wanneer die fiche teruggesit word, is die twee keuses onafhanklike gebeurtenisse — die sak word na sy oorspronklike toestand herstel voordat die tweede keuse gemaak word, dus bly die waarskynlikheid van rooi op 4/10 = 2/5 albei kere, wat ʼn hoër gekombineerde waarskynlikheid gee.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het waarskynlikheidstaal, uitkomsruimtes, teoretiese en eksperimentele waarskynlikheid, en gekombineerde gebeurtenisse met en sonder terugsetting onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van Graad 8 waarskynlikheid — hersien enige vrae wat jy gemis het.' },
        { minScore: 10, message: 'Goeie poging! Hersien uitkomsruimtes en gekombineerde gebeurtenisse (met vs sonder terugsetting), en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Waarskynlikheidstaal/Skaal as Breuk, Desimaal, Persentasie (0-2, Easy)
        { difficulty: 'Easy', question: 'ʼn Weerkundige gee ʼn 7/8 kans op sonskyn môre. Watter woord beskryf hierdie waarskynlikheid die beste: seker, waarskynlik, onwaarskynlik of onmoontlik?', checkMode: 'auto', correctAnswer: 'waarskynlik', correctAnswers: ['waarskynlik'], explanation: '7/8 = 0,875, wat baie nader aan 1 as aan 0 is, dus is die gebeurtenis waarskynlik (maar nie seker nie, aangesien dit steeds nie kan gebeur nie) ✓' },
        { difficulty: 'Easy', question: 'Die waarskynlikheid dat Palesa ʼn doel uit ʼn strafskop aanteken, is 3/8. Skryf hierdie waarskynlikheid as ʼn persentasie.', checkMode: 'auto', correctAnswer: '37,5%', correctAnswers: ['37,5%', '37.5%', '37,5', '37.5'], explanation: '3/8 = 3 ÷ 8 = 0,375. As ʼn persentasie: 0,375 × 100 = 37,5% ✓' },
        { difficulty: 'Easy', question: 'ʼn Trein kom laat aan met ʼn waarskynlikheid van 0,36. Skryf hierdie waarskynlikheid as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '9/25', correctAnswers: ['9/25', '36/100'], explanation: '0,36 = 36/100, wat vereenvoudig na 9/25 (deel bo en onder deur 4) ✓' },

        // Blok 2 — Waarskynlikheid van ʼn Wieletjie/Sak Fiches (3-6, Medium) — DIAGRAM-FLAGGED at 4, 5
        { difficulty: 'Medium', question: 'ʼn Sak het 6 rooi fiches, 9 blou fiches en 5 groen fiches. Vind die waarskynlikheid om ʼn fiche te kies wat NIE rooi is nie. Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '7/10', correctAnswers: ['7/10', '14/20'], explanation: 'Nie rooi nie = 9 blou + 5 groen = 14 fiches.\nTotale uitkomste = 6 + 9 + 5 = 20 fiches.\nW(nie rooi nie) = 14/20 = 7/10 ✓' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 10 gelyke afdelings, soos getoon: 7 goud afdelings en 3 lemmetjie afdelings. Vind die waarskynlikheid om op goud te land, en gee jou antwoord as ʼn desimaal.', checkMode: 'auto', correctAnswer: '0,7', correctAnswers: ['0,7', '0.7', '7/10'], explanation: 'Gunstige uitkomste = 7 goud afdelings.\nTotale uitkomste = 10 afdelings.\nW(goud) = 7/10 = 0,7 ✓' },
        { difficulty: 'Medium', question: 'ʼn Sak het 15 fiches altesaam, soos getoon: 6 is oranje en die res is pers. Vind die waarskynlikheid om ʼn pers fiche te kies, en gee jou antwoord as ʼn persentasie.', checkMode: 'auto', correctAnswer: '60%', correctAnswers: ['60%', '60'], explanation: 'Pers fiches = 15 − 6 = 9.\nTotale uitkomste = 15 fiches.\nW(pers) = 9/15 = 3/5 = 60% ✓' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 12 gelyke afdelings verdeel tussen drie spanne: Span A het 2 afdelings, Span B het 6 afdelings, en Span C het 4 afdelings. Vind die waarskynlikheid om op Span B of Span C te land.', checkMode: 'auto', correctAnswer: '5/6', correctAnswers: ['5/6', '10/12'], explanation: 'Gunstige uitkomste = Span B + Span C = 6 + 4 = 10 afdelings.\nTotale uitkomste = 12 afdelings.\nW(B of C) = 10/12 = 5/6 ✓' },

        // Blok 3 — Uitkomsruimtes vir Gekombineerde Gebeurtenisse Lys (7-10, Medium-Hard) — DIAGRAM-FLAGGED at 7
        { difficulty: 'Medium-Hard', question: 'ʼn Muntstuk word opgegooi en ʼn wieletjie met 5 gelyke afdelings gekleur oranje, wit, grys, swart en turkoois word saam gedraai, soos getoon. Gebruik die leë rooster, met muntstuk-uitkomste af die kant en wieletjie-uitkomste oor die bokant, om die waarskynlikheid te vind om kop en swart te kry.', checkMode: 'auto', correctAnswer: '1/10', correctAnswers: ['1/10'], explanation: 'Totale uitkomste = 2 muntstuk-uitkomste × 5 wieletjie-uitkomste = 10.\nGunstige uitkomste = 1 (kop en swart).\nW(kop en swart) = 1/10 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="48" width="184" height="94" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="18" y1="82" x2="202" y2="82" stroke="#0f1f3d" stroke-width="2"/><line x1="52" y1="48" x2="52" y2="142" stroke="#0f1f3d" stroke-width="2"/><line x1="82.0" y1="82" x2="82.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="112.0" y1="82" x2="112.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="142.0" y1="82" x2="142.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="172.0" y1="82" x2="172.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="18" y1="112" x2="202" y2="112" stroke="#9ca3af" stroke-width="1"/><text x="67.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">O</text><text x="97.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">W</text><text x="127.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">Gr</text><text x="157.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">Sw</text><text x="187.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">T</text><text x="35.0" y="102.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">K</text><text x="35.0" y="132.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">S</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Twee gewone dobbelstene word saam gegooi. Vind die waarskynlikheid dat die produk van die twee getalle wat gegooi word, 8 is.', checkMode: 'auto', correctAnswer: '1/18', correctAnswers: ['1/18', '2/36'], explanation: 'Totale uitkomste = 6 × 6 = 36.\nPare waarvan die produk 8 is: (2,4), (4,2) — dit is 2 gunstige uitkomste.\nW(produk van 8) = 2/36 = 1/18 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Pizza-winkel laat Sizwe 1 van 3 basisse, 1 van 5 bolaagsoorte en 1 van 2 kaassoorte kies om ʼn pizza te maak. Hoeveel verskillende pizzas is moontlik, en wat is die waarskynlikheid dat Sizwe lukraak met een spesifieke pizza-kombinasie eindig?', checkMode: 'auto', correctAnswer: '30 pizzas, 1/30', correctAnswers: ['30 pizzas, 1/30', '30, 1/30', '30 en 1/30'], explanation: 'Totale pizzas = 3 basisse × 5 bolaagsoorte × 2 kaassoorte = 30.\nW(een spesifieke pizza) = 1/30, aangesien daar slegs 1 gunstige uitkoms uit 30 totaal is ✓' },
        { difficulty: 'Hard', question: 'Verduidelik waarom die uitkomsruimte vir die opgooi van drie muntstukke saam 8 uitkomste het, en nie 4 nie (die aantal moontlike totale van koppe, van 0 koppe tot 3 koppe).', checkMode: 'self', answer: 'Elke muntstuk kan onafhanklik op kop of stert land, en daar is 3 muntstukke, dus het die uitkomsruimte 2 × 2 × 2 = 8 uitkomste: KKK, KKS, KSK, KSS, SKK, SKS, SSK, SSS. Om slegs 4 "totale" te tel (0, 1, 2 of 3 koppe) is verkeerd omdat dit ignoreer watter muntstukke op kop geland het. Byvoorbeeld, presies 1 kop kry kan op drie verskillende maniere gebeur — KSS, SKS of SSK — en dit is drie aparte, ewe waarskynlike uitkomste, nie een nie. Om hulle in ʼn enkele "1 kop"-kategorie te groepeer, sou elke totaal ewe waarskynlik laat lyk, wat verkeerd is, aangesien 1 kop (3 maniere) eintlik drie keer meer waarskynlik is as 3 koppe (1 manier).' },

        // Blok 4 — Teoretiese Waarskynlikheidsberekening met Gekombineerde Voorwaardes (11-13, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Kluisnommers loop van 1 tot 50. Vind die waarskynlikheid dat ʼn lukraak gekose kluisnommer ewe EN ʼn veelvoud van 5 is. Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '1/10', correctAnswers: ['1/10', '5/50'], explanation: 'ʼn Getal wat ewe EN ʼn veelvoud van 5 is, moet ʼn veelvoud van 10 wees: 10, 20, 30, 40, 50 — dit is 5 gunstige uitkomste.\nTotale uitkomste = 50.\nW(ewe en veelvoud van 5) = 5/50 = 1/10 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Wieletjie het 24 gelyke afdelings genommer 1 tot 24. Vind die waarskynlikheid om op ʼn priemgetal te land, en gee jou antwoord as ʼn desimaal.', checkMode: 'auto', correctAnswer: '0,375', correctAnswers: ['0,375', '0.375', '3/8'], explanation: 'Priemgetalle van 1-24: 2, 3, 5, 7, 11, 13, 17, 19, 23 — dit is 9 gunstige uitkomste.\nTotale uitkomste = 24.\nW(priemgetal) = 9/24 = 3/8 = 0,375 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Standaard stel van 52 speelkaarte word geskommel. Vind die waarskynlikheid om ʼn rooi prentkaart te trek (ʼn boer, vrou of heer van harte of ruite). Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '3/26', correctAnswers: ['3/26', '6/52'], explanation: 'Rooi prentkaarte = 2 rooi kleure × 3 prentkaarte (boer, vrou, heer) = 6.\nTotale uitkomste = 52 kaarte.\nW(rooi prentkaart) = 6/52 = 3/26 ✓' },

        // Blok 5 — Eksperimentele Waarskynlikheid / Relatiewe Frekwensie (14-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Wieletjie het 4 gelyke afdelings. Bongani voorspel dat om dit 240 keer te draai, ongeveer 60 lanings op blou behoort te gee (aangesien W(blou) = 1/4). Hy kry werklik 45 lanings op blou. Vind die verskil tussen sy werklike en voorspelde frekwensie, as ʼn persentasie van die totale proewe.', checkMode: 'auto', correctAnswer: '6,25%', correctAnswers: ['6,25%', '6.25%', '6,25', '6.25'], explanation: 'Voorspelde frekwensie = 240 × 1/4 = 60.\nVerskil = 60 − 45 = 15.\nAs ʼn persentasie van proewe: 15 ÷ 240 = 0,0625 = 6,25% ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Dobbelsteen word 240 keer gegooi. Die tabel hieronder wys die resultate:\n1: 38, 2: 42, 3: 37, 4: 41, 5: 39, 6: 43.\nVind die relatiewe frekwensie om ʼn getal groter as 4 te gooi, as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '41/120', correctAnswers: ['41/120', '82/240'], explanation: 'Getalle groter as 4 is 5 en 6: 39 + 43 = 82 resultate.\nRelatiewe frekwensie = 82 ÷ 240 = 82/240 = 41/120 ✓' },
        { difficulty: 'Hard', question: 'ʼn Kwaliteitbeheerder toets 400 selfoonskerms en vind dat 12 gekrap is. Skat die waarskynlikheid dat ʼn lukraak gekose skerm uit hierdie groep gekrap is, en verduidelik of dit ʼn teoretiese waarskynlikheid of ʼn eksperimentele (relatiewe frekwensie) waarskynlikheid is.', checkMode: 'self', answer: 'Geskatte waarskynlikheid = aantal gekrapte skerms ÷ totale skerms getoets = 12/400 = 3/100 = 0,03 (3%). Dit is ʼn eksperimentele waarskynlikheid (ʼn relatiewe frekwensie), nie ʼn teoretiese waarskynlikheid nie, omdat dit gebaseer is op die werklike resultate van die toets van regte selfoonskerms, en nie op redenering oor ewe waarskynlike uitkomste voordat enige toetsing plaasgevind het nie. As ʼn ander groep van 400 skerms getoets word, kan die relatiewe frekwensie effens anders as 3% uitkom.' },

        // Blok 6 — Gekombineerde Gebeurtenisse: Met vs Sonder Terugsetting (17-19, Hard)
        { difficulty: 'Hard', question: 'ʼn Sak het 5 rooi fiches en 5 blou fiches. Karabo kies ʼn fiche, sit dit NIE terug nie, en kies dan ʼn tweede fiche. Vind die waarskynlikheid dat albei fiches rooi is.', checkMode: 'auto', correctAnswer: '2/9', correctAnswers: ['2/9', '20/90'], explanation: 'W(eerste rooi) = 5/10 = 1/2.\nAangesien die fiche nie teruggesit word nie, bly 9 fiches oor en slegs 4 is rooi: W(tweede rooi) = 4/9.\nW(albei rooi) = 1/2 × 4/9 = 4/18 = 2/9 ✓' },
        { difficulty: 'Hard', question: 'Met dieselfde sak uit die vorige vraag (5 rooi fiches en 5 blou fiches), veronderstel Karabo sit die eerste fiche terug voordat sy weer kies. Vind die waarskynlikheid dat albei fiches rooi is in hierdie geval.', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '25/100'], explanation: 'Aangesien die fiche teruggesit word, het die sak steeds dieselfde 5 rooi uit 10 fiches vir albei keuses.\nW(eerste rooi) = 5/10 = 1/2. W(tweede rooi) = 5/10 = 1/2.\nW(albei rooi) = 1/2 × 1/2 = 1/4 ✓' },
        { difficulty: 'Hard', question: 'Vergelyk jou antwoorde op die vorige twee vrae. Waarom is die waarskynlikheid om twee rooi fiches te kies laer wanneer die eerste fiche NIE teruggesit word nie as wanneer dit WEL teruggesit word? Gebruik die woorde "onafhanklik" en "afhanklik" in jou verduideliking.', checkMode: 'self', answer: 'Sonder terugsetting is die waarskynlikheid 2/9 ≈ 0,222, wat laer is as die met-terugsetting waarskynlikheid van 1/4 = 0,25. Dit is omdat, wanneer die fiche nie teruggesit word nie, die twee keuses afhanklike gebeurtenisse is — die verwydering van ʼn rooi fiche by die eerste keuse verminder beide die aantal rooi fiches en die totale aantal fiches wat in die sak oorbly, wat ʼn tweede rooi keuse minder waarskynlik maak (4 rooi uit 9, in plaas van 5 rooi uit 10). Wanneer die fiche teruggesit word, is die twee keuses onafhanklike gebeurtenisse — die sak word na sy oorspronklike toestand herstel voordat die tweede keuse gemaak word, dus bly die waarskynlikheid van rooi op 5/10 = 1/2 albei kere, wat ʼn hoër gekombineerde waarskynlikheid gee.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het waarskynlikheidstaal, uitkomsruimtes, teoretiese en eksperimentele waarskynlikheid, en gekombineerde gebeurtenisse met en sonder terugsetting onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van Graad 8 waarskynlikheid — hersien enige vrae wat jy gemis het.' },
        { minScore: 10, message: 'Goeie poging! Hersien uitkomsruimtes en gekombineerde gebeurtenisse (met vs sonder terugsetting), en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Waarskynlikheidstaal/Skaal as Breuk, Desimaal, Persentasie (0-2, Easy)
        { difficulty: 'Easy', question: 'ʼn Skinkmasjien hak vas met ʼn waarskynlikheid van 1/10. Watter woord beskryf hierdie waarskynlikheid die beste: seker, waarskynlik, onwaarskynlik of onmoontlik?', checkMode: 'auto', correctAnswer: 'onwaarskynlik', correctAnswers: ['onwaarskynlik'], explanation: '1/10 = 0,1, wat baie nader aan 0 as aan 1 is, dus is die gebeurtenis onwaarskynlik (maar nie onmoontlik nie, aangesien dit steeds kan gebeur) ✓' },
        { difficulty: 'Easy', question: 'Die waarskynlikheid dat Ayanda ʼn wenkaartjie in ʼn kompetisie kies, is 9/40. Skryf hierdie waarskynlikheid as ʼn persentasie.', checkMode: 'auto', correctAnswer: '22,5%', correctAnswers: ['22,5%', '22.5%', '22,5', '22.5'], explanation: '9/40 = 9 ÷ 40 = 0,225. As ʼn persentasie: 0,225 × 100 = 22,5% ✓' },
        { difficulty: 'Easy', question: 'ʼn Drukker hak vas met ʼn waarskynlikheid van 0,44. Skryf hierdie waarskynlikheid as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '11/25', correctAnswers: ['11/25', '44/100'], explanation: '0,44 = 44/100, wat vereenvoudig na 11/25 (deel bo en onder deur 4) ✓' },

        // Blok 2 — Waarskynlikheid van ʼn Wieletjie/Sak Fiches (3-6, Medium) — DIAGRAM-FLAGGED at 4, 5
        { difficulty: 'Medium', question: 'ʼn Sak het 8 rooi fiches, 7 blou fiches en 5 groen fiches. Vind die waarskynlikheid om ʼn fiche te kies wat NIE rooi is nie. Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '3/5', correctAnswers: ['3/5', '12/20'], explanation: 'Nie rooi nie = 7 blou + 5 groen = 12 fiches.\nTotale uitkomste = 8 + 7 + 5 = 20 fiches.\nW(nie rooi nie) = 12/20 = 3/5 ✓' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 10 gelyke afdelings, soos getoon: 3 vlootblou afdelings en 7 koraal afdelings. Vind die waarskynlikheid om op vlootblou te land, en gee jou antwoord as ʼn desimaal.', checkMode: 'auto', correctAnswer: '0,3', correctAnswers: ['0,3', '0.3', '3/10'], explanation: 'Gunstige uitkomste = 3 vlootblou afdelings.\nTotale uitkomste = 10 afdelings.\nW(vlootblou) = 3/10 = 0,3 ✓' },
        { difficulty: 'Medium', question: 'ʼn Sak het 15 fiches altesaam, soos getoon: 12 is oranje en die res is pers. Vind die waarskynlikheid om ʼn pers fiche te kies, en gee jou antwoord as ʼn persentasie.', checkMode: 'auto', correctAnswer: '20%', correctAnswers: ['20%', '20'], explanation: 'Pers fiches = 15 − 12 = 3.\nTotale uitkomste = 15 fiches.\nW(pers) = 3/15 = 1/5 = 20% ✓' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 12 gelyke afdelings verdeel tussen drie spanne: Span A het 7 afdelings, Span B het 2 afdelings, en Span C het 3 afdelings. Vind die waarskynlikheid om op Span A of Span B te land.', checkMode: 'auto', correctAnswer: '3/4', correctAnswers: ['3/4', '9/12'], explanation: 'Gunstige uitkomste = Span A + Span B = 7 + 2 = 9 afdelings.\nTotale uitkomste = 12 afdelings.\nW(A of B) = 9/12 = 3/4 ✓' },

        // Blok 3 — Uitkomsruimtes vir Gekombineerde Gebeurtenisse Lys (7-10, Medium-Hard) — DIAGRAM-FLAGGED at 7
        { difficulty: 'Medium-Hard', question: 'ʼn Muntstuk word opgegooi en ʼn wieletjie met 5 gelyke afdelings genommer 1 tot 5 word saam gedraai, soos getoon. Gebruik die leë rooster, met muntstuk-uitkomste af die kant en wieletjie-uitkomste oor die bokant, om die waarskynlikheid te vind om stert en 3 te kry.', checkMode: 'auto', correctAnswer: '1/10', correctAnswers: ['1/10'], explanation: 'Totale uitkomste = 2 muntstuk-uitkomste × 5 wieletjie-uitkomste = 10.\nGunstige uitkomste = 1 (stert en 3).\nW(stert en 3) = 1/10 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="48" width="184" height="94" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="18" y1="82" x2="202" y2="82" stroke="#0f1f3d" stroke-width="2"/><line x1="52" y1="48" x2="52" y2="142" stroke="#0f1f3d" stroke-width="2"/><line x1="82.0" y1="82" x2="82.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="112.0" y1="82" x2="112.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="142.0" y1="82" x2="142.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="172.0" y1="82" x2="172.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="18" y1="112" x2="202" y2="112" stroke="#9ca3af" stroke-width="1"/><text x="67.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">1</text><text x="97.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">2</text><text x="127.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">3</text><text x="157.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">4</text><text x="187.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">5</text><text x="35.0" y="102.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">K</text><text x="35.0" y="132.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">S</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Twee gewone dobbelstene word saam gegooi. Vind die waarskynlikheid dat die produk van die twee getalle wat gegooi word, 6 is.', checkMode: 'auto', correctAnswer: '1/9', correctAnswers: ['1/9', '4/36'], explanation: 'Totale uitkomste = 6 × 6 = 36.\nPare waarvan die produk 6 is: (1,6), (2,3), (3,2), (6,1) — dit is 4 gunstige uitkomste.\nW(produk van 6) = 4/36 = 1/9 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Roomys-winkel laat Nomvula 1 van 5 geursels, 1 van 3 keëls en 1 van 2 bolaagsoorte kies om ʼn bestelling te maak. Hoeveel verskillende bestellings is moontlik, en wat is die waarskynlikheid dat Nomvula lukraak met een spesifieke bestelling-kombinasie eindig?', checkMode: 'auto', correctAnswer: '30 bestellings, 1/30', correctAnswers: ['30 bestellings, 1/30', '30, 1/30', '30 en 1/30'], explanation: 'Totale bestellings = 5 geursels × 3 keëls × 2 bolaagsoorte = 30.\nW(een spesifieke bestelling) = 1/30, aangesien daar slegs 1 gunstige uitkoms uit 30 totaal is ✓' },
        { difficulty: 'Hard', question: 'Verduidelik waarom die uitkomsruimte vir die kies van een voorgereg uit 3 voorgeregte en een hoofgereg uit 4 hoofgeregte 12 uitkomste het, en nie 7 nie (die aantal voorgeregte plus hoofgeregte).', checkMode: 'self', answer: 'Om ʼn voorgereg en ʼn hoofgereg te kies, is twee aparte, onafhanklike keuses wat saam gemaak word, dus kan elkeen van die 3 voorgeregte gepaar word met elkeen van die 4 hoofgeregte, wat 3 × 4 = 12 moontlike voorgereg-en-hoofgereg-kombinasies gee. Om 3 + 4 = 7 te tel, is verkeerd omdat dit slegs die kies van ʼn voorgereg OF ʼn hoofgereg op sy eie tel, nie albei saam nie. Om die volledige uitkomsruimte van maaltyd-kombinasies te lys, moet elke voorgereg met elke moontlike hoofgereg gepaar word, en daarom gee vermenigvuldiging (nie optelling nie) die korrekte aantal uitkomste.' },

        // Blok 4 — Teoretiese Waarskynlikheidsberekening met Gekombineerde Voorwaardes (11-13, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Gelukkige trekking-nommers loop van 1 tot 60. Vind die waarskynlikheid dat ʼn lukraak gekose nommer ewe EN ʼn veelvoud van 5 is. Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '1/10', correctAnswers: ['1/10', '6/60'], explanation: 'ʼn Getal wat ewe EN ʼn veelvoud van 5 is, moet ʼn veelvoud van 10 wees: 10, 20, 30, 40, 50, 60 — dit is 6 gunstige uitkomste.\nTotale uitkomste = 60.\nW(ewe en veelvoud van 5) = 6/60 = 1/10 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Wieletjie het 30 gelyke afdelings genommer 1 tot 30. Vind die waarskynlikheid om op ʼn priemgetal te land, en gee jou antwoord as ʼn desimaal.', checkMode: 'auto', correctAnswer: '0,33', correctAnswers: ['0,33', '0.33', '1/3', '0,333', '0.333'], explanation: 'Priemgetalle van 1-30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 — dit is 10 gunstige uitkomste.\nTotale uitkomste = 30.\nW(priemgetal) = 10/30 = 1/3 ≈ 0,33 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Standaard stel van 52 speelkaarte word geskommel. Vind die waarskynlikheid om ʼn swart prentkaart te trek (ʼn boer, vrou of heer van klawers of skoppens). Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '3/26', correctAnswers: ['3/26', '6/52'], explanation: 'Swart prentkaarte = 2 swart kleure × 3 prentkaarte (boer, vrou, heer) = 6.\nTotale uitkomste = 52 kaarte.\nW(swart prentkaart) = 6/52 = 3/26 ✓' },

        // Blok 5 — Eksperimentele Waarskynlikheid / Relatiewe Frekwensie (14-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Wieletjie het 8 gelyke afdelings. Naledi voorspel dat om dit 320 keer te draai, ongeveer 40 lanings op wit behoort te gee (aangesien W(wit) = 1/8). Sy kry werklik 56 lanings op wit. Vind die verskil tussen haar werklike en voorspelde frekwensie, as ʼn persentasie van die totale proewe.', checkMode: 'auto', correctAnswer: '5%', correctAnswers: ['5%', '5'], explanation: 'Voorspelde frekwensie = 320 × 1/8 = 40.\nVerskil = 56 − 40 = 16.\nAs ʼn persentasie van proewe: 16 ÷ 320 = 0,05 = 5% ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Dobbelsteen word 300 keer gegooi. Die tabel hieronder wys die resultate:\n1: 48, 2: 52, 3: 49, 4: 47, 5: 53, 6: 51.\nVind die relatiewe frekwensie om ʼn getal groter as 4 te gooi, as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '26/75', correctAnswers: ['26/75', '104/300'], explanation: 'Getalle groter as 4 is 5 en 6: 53 + 51 = 104 resultate.\nRelatiewe frekwensie = 104 ÷ 300 = 104/300 = 26/75 ✓' },
        { difficulty: 'Hard', question: 'ʼn Kwekery toets 250 saailinge en vind dat 20 nie ontkiem nie. Skat die waarskynlikheid dat ʼn lukraak gekose saailing uit hierdie groep nie ontkiem nie, en verduidelik of dit ʼn teoretiese waarskynlikheid of ʼn eksperimentele (relatiewe frekwensie) waarskynlikheid is.', checkMode: 'self', answer: 'Geskatte waarskynlikheid = aantal saailinge wat nie ontkiem het nie ÷ totale saailinge getoets = 20/250 = 2/25 = 0,08 (8%). Dit is ʼn eksperimentele waarskynlikheid (ʼn relatiewe frekwensie), nie ʼn teoretiese waarskynlikheid nie, omdat dit gebaseer is op die werklike resultate van die toets van regte saailinge, en nie op redenering oor ewe waarskynlike uitkomste voordat enige toetsing plaasgevind het nie. As ʼn ander groep van 250 saailinge getoets word, kan die relatiewe frekwensie effens anders as 8% uitkom.' },

        // Blok 6 — Gekombineerde Gebeurtenisse: Met vs Sonder Terugsetting (17-19, Hard)
        { difficulty: 'Hard', question: 'ʼn Sak het 3 rooi fiches en 7 blou fiches. Ntando kies ʼn fiche, sit dit NIE terug nie, en kies dan ʼn tweede fiche. Vind die waarskynlikheid dat albei fiches rooi is.', checkMode: 'auto', correctAnswer: '1/15', correctAnswers: ['1/15', '6/90'], explanation: 'W(eerste rooi) = 3/10.\nAangesien die fiche nie teruggesit word nie, bly 9 fiches oor en slegs 2 is rooi: W(tweede rooi) = 2/9.\nW(albei rooi) = 3/10 × 2/9 = 6/90 = 1/15 ✓' },
        { difficulty: 'Hard', question: 'Met dieselfde sak uit die vorige vraag (3 rooi fiches en 7 blou fiches), veronderstel Ntando sit die eerste fiche terug voordat hy weer kies. Vind die waarskynlikheid dat albei fiches rooi is in hierdie geval.', checkMode: 'auto', correctAnswer: '9/100', correctAnswers: ['9/100'], explanation: 'Aangesien die fiche teruggesit word, het die sak steeds dieselfde 3 rooi uit 10 fiches vir albei keuses.\nW(eerste rooi) = 3/10. W(tweede rooi) = 3/10.\nW(albei rooi) = 3/10 × 3/10 = 9/100 ✓' },
        { difficulty: 'Hard', question: 'Vergelyk jou antwoorde op die vorige twee vrae. Waarom is die waarskynlikheid om twee rooi fiches te kies laer wanneer die eerste fiche NIE teruggesit word nie as wanneer dit WEL teruggesit word? Gebruik die woorde "onafhanklik" en "afhanklik" in jou verduideliking.', checkMode: 'self', answer: 'Sonder terugsetting is die waarskynlikheid 1/15 ≈ 0,067, wat laer is as die met-terugsetting waarskynlikheid van 9/100 = 0,09. Dit is omdat, wanneer die fiche nie teruggesit word nie, die twee keuses afhanklike gebeurtenisse is — die verwydering van ʼn rooi fiche by die eerste keuse verminder beide die aantal rooi fiches en die totale aantal fiches wat in die sak oorbly, wat ʼn tweede rooi keuse minder waarskynlik maak (2 rooi uit 9, in plaas van 3 rooi uit 10). Wanneer die fiche teruggesit word, is die twee keuses onafhanklike gebeurtenisse — die sak word na sy oorspronklike toestand herstel voordat die tweede keuse gemaak word, dus bly die waarskynlikheid van rooi op 3/10 albei kere, wat ʼn hoër gekombineerde waarskynlikheid gee.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het waarskynlikheidstaal, uitkomsruimtes, teoretiese en eksperimentele waarskynlikheid, en gekombineerde gebeurtenisse met en sonder terugsetting onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van Graad 8 waarskynlikheid — hersien enige vrae wat jy gemis het.' },
        { minScore: 10, message: 'Goeie poging! Hersien uitkomsruimtes en gekombineerde gebeurtenisse (met vs sonder terugsetting), en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het al Graad 8 voltooi en waarskynlikheid onder die knie.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },
}
