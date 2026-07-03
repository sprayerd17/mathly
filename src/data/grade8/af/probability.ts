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
        '<VideoPlaceholder label="Short video showing how to list all outcomes and calculate probability using favourable outcomes divided by total outcomes" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a bag of coloured balls with the probability formula applied step by step" />',
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
        '<VideoPlaceholder label="Short video showing how to predict relative frequency from theoretical probability and explain differences between predicted and actual results" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram comparing predicted frequency and actual frequency from a coin-flipping experiment showing how results vary with the number of trials" />',
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
        '<VideoPlaceholder label="Short video showing how to solve multi-step probability problems in real-life contexts including listing outcomes and combining independent events" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a tree diagram for flipping a coin and rolling a dice to find combined probability of heads and an even number" />',
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
      correctAnswers: ['1/2', '3/6', '0.5'],
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
      answer: '23/50 of 0.46',
      checkMode: 'auto',
      correctAnswers: ['23/50', '0.46'],
      explanation: 'Relatiewe frekwensie = aantal koppe ÷ totale opgooie = 23 ÷ 50 = 23/50 = 0.46.',
    },

    // ── Q5 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Vergelyk Lerato se relatiewe frekwensie in Vraag 4 met die teoretiese waarskynlikheid om kop te kry en verduidelik enige verskil.",
      answer: 'Teoretiese waarskynlikheid is 0.5 (50%). Haar relatiewe frekwensie van 0.46 is naby maar effens laer, wat normale variasie is van ʼn beperkte aantal proewe.',
      checkMode: 'self',
    },

    // ── Q6 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Wieletjie het 6 gelyke afdelings genommer 1–6. Vind die waarskynlikheid om op ʼn getal kleiner as 4 te land.',
      answer: '1/2',
      checkMode: 'auto',
      correctAnswer: '1/2',
      correctAnswers: ['1/2', '3/6', '0.5'],
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
      correctAnswers: ['8/20', '2/5', '0.4'],
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
      answer: 'Relatiewe frekwensie = 6/40 = 0.15. Teoretiese waarskynlikheid = 1/6 ≈ 0.167. Die waardes is naby aan mekaar, wat wys dat die eksperiment redelik ooreenstem met verwagtinge.',
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
      correctAnswers: ['10/20', '1/2', '0.5'],
      explanation: 'Nie groen nie: 6 rooi + 4 blou = 10 balle. Totaal: 6 + 4 + 10 = 20. Waarskynlikheid = 10/20 = 1/2.',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo gooi twee muntstukke tegelyk op. Vind die waarskynlikheid om kop op albei muntstukke te kry.',
      answer: '1/4',
      checkMode: 'auto',
      correctAnswer: '1/4',
      correctAnswers: ['1/4', '0.25'],
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
