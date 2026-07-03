import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (geometry of 2D shapes roles) ─────────────────────────────
// matching sides / known values                          → blue   (#2563eb)
// matching angles / side ratios                          → orange (#ea580c)
// congruency/similarity condition / justification        → green  (#16a34a)
// unknown values                                         → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Meetkunde van 2D-vorms',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MINIMUM CONDITIONS FOR CONGRUENT TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'congruent-triangles',
      title: 'Minimum Voorwaardes vir Kongruente Driehoeke',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Twee driehoeke is <strong>kongruent</strong> as hulle presies dieselfde vorm en grootte het. Deur ondersoek stel ons die <strong>minimum voorwaardes</strong> vas wat nodig is om te bewys dat driehoeke kongruent is: <strong>SSS</strong> (drie sye gelyk), <strong>SHS</strong> (twee sye en die ingeslote hoek gelyk), <strong>HHS</strong> (twee hoeke en 'n sy gelyk), of <strong>RSS</strong> (regte hoek, skuinssy en een sy gelyk vir reghoekige driehoeke).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('ooreenstemmende sye')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('ooreenstemmende hoeke')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kongruensievoorwaarde')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die vier kongruensievoorwaardes</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">SSS</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Al ${bl('drie sye')} van een driehoek is gelyk aan die ooreenstemmende drie sye van die ander.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">SHS</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Twee ${bl('sye')} en die ${or('ingeslote hoek')} tussen hulle is gelyk in beide driehoeke.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">HHS</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Twee ${or('hoeke')} en 'n ooreenstemmende ${bl('sy')} is gelyk in beide driehoeke.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">RSS</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vir reghoekige driehoeke: 'n ${or('regte hoek')}, gelyke ${bl('skuinssye')} en een ooreenstemmende ${bl('sy')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Waarom minimum voorwaardes belangrik is</p>` +
        `<p style="margin:0;color:#14532d;">Jy het nie al ses stukke inligting (3 sye en 3 hoeke) nodig om kongruensie te bewys nie. Hierdie ${gr('minimum voorwaardes')} is genoeg om te waarborg dat die driehoeke in elke opsig identies is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "Twee driehoeke het sye 5 cm, 7 cm en 9 cm, en 5 cm, 7 cm en 9 cm. Is hulle kongruent?",
          answer: `Ja — dit voldoen aan ${gr('SSS (Sy-Sy-Sy)')}, aangesien al drie ooreenstemmende ${bl('sye')} gelyk is.`,
          steps: [
            `Lys die sye van elke driehoek: Driehoek 1 het sye ${bl('5 cm')}, ${bl('7 cm')}, ${bl('9 cm')}. Driehoek 2 het ook sye ${bl('5 cm')}, ${bl('7 cm')}, ${bl('9 cm')}.`,
            `Vergelyk ooreenstemmende sye: ${bl('5 cm')} = ${bl('5 cm')} ✓, ${bl('7 cm')} = ${bl('7 cm')} ✓, ${bl('9 cm')} = ${bl('9 cm')} ✓.`,
            `Al drie ${bl('sye')} stem ooreen — dit voldoen aan die ${gr('SSS (Sy-Sy-Sy)')} kongruensievoorwaarde.`,
            `<strong>Gevolgtrekking:</strong> Ja — die driehoeke is kongruent volgens ${gr('SSS')}. ✓`,
          ],
        },
        {
          question: 'Sipho het twee reghoekige driehoeke met dieselfde skuinssy (10 cm) en een ooreenstemmende sy (6 cm). Is hulle kongruent?',
          answer: `Ja — dit voldoen aan ${gr('RSS (Regte hoek-Skuinssy-Sy)')}, 'n geldige voorwaarde vir kongruensie van reghoekige driehoeke.`,
          steps: [
            `Albei driehoeke het 'n ${or('regte hoek')} (90°) — die R in RSS word bevredig. ✓`,
            `Albei driehoeke het dieselfde ${bl('skuinssy')} van 10 cm — die S (Skuinssy) in RSS word bevredig. ✓`,
            `Albei driehoeke het 'n ooreenstemmende ${bl('sy')} van 6 cm — die S (Sy) in RSS word bevredig. ✓`,
            `<strong>Gevolgtrekking:</strong> Ja — die driehoeke is kongruent volgens ${gr('RSS')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the four minimum conditions for congruent triangles — SSS, SAS, AAS and RHS — with visual examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: two triangles side by side showing matching sides/angles for each congruency condition — SSS, SAS, AAS, RHS — labelled clearly" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — MINIMUM CONDITIONS FOR SIMILAR TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'similar-triangles',
      title: 'Minimum Voorwaardes vir Gelykvormige Driehoeke',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Twee driehoeke is <strong>gelykvormig</strong> as hulle dieselfde vorm het, maar moontlik verskillende groottes — ooreenstemmende hoeke is gelyk en ooreenstemmende sye is in verhouding. Deur ondersoek stel ons vas dat driehoeke gelykvormig is as <strong>HH</strong> (twee hoeke gelyk, aangesien die derde dan ook moet ooreenstem), of as al die ooreenstemmende sye in dieselfde verhouding is (<strong>SSS-eweredigheid</strong>).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('ooreenstemmende hoeke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('syverhoudings')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gelykvormigheidsvoorwaarde')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die twee gelykvormigheidsvoorwaardes</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">HH (Hoek-Hoek)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">As twee ${bl('hoeke')} van een driehoek gelyk is aan twee hoeke van 'n ander, moet die derde hoek ook ooreenstem (hoeksom = 180°), sodat die driehoeke gelykvormig is.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">SSS-eweredigheid</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">As al drie pare ooreenstemmende sye dieselfde ${or('verhouding')} deel, is die driehoeke gelykvormig deur eweredige sye.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Gelykvormigheid vs Kongruensie</p>` +
        `<p style="margin:0;color:#14532d;">Gelykvormige driehoeke het dieselfde ${bl('hoeke')} en eweredige sye — maar kan verskil in grootte. Kongruente driehoeke is gelykvormig <em>en</em> dieselfde grootte. Elke kongruente paar is ook gelykvormig, maar nie elke gelykvormige paar is kongruent nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Twee driehoeke het albei hoeke van 40° en 70°. Is hulle gelykvormig?',
          answer: `Ja — aangesien twee ${bl('hoeke')} ooreenstem, moet die derde hoek ook ooreenstem (180 − 40 − 70 = 70°), wat aan die ${gr('HH-voorwaarde')} vir gelykvormigheid voldoen.`,
          steps: [
            `Driehoek 1 het hoeke van ${bl('40°')} en ${bl('70°')}. Driehoek 2 het ook hoeke van ${bl('40°')} en ${bl('70°')}.`,
            `Bepaal die derde hoek van elke driehoek: 180° − 40° − 70° = ${bl('70°')}. Albei driehoeke het 'n derde hoek van ${bl('70°')}. ✓`,
            `Al drie ${bl('hoeke')} is gelyk: 40° = 40°, 70° = 70°, 70° = 70°.`,
            `<strong>Gevolgtrekking:</strong> Ja — die driehoeke voldoen aan die ${gr('HH (Hoek-Hoek) gelykvormigheidsvoorwaarde')} en is dus gelykvormig. ✓`,
          ],
        },
        {
          question: 'Lerato het twee driehoeke met sye 3, 4, 5 en 6, 8, 10. Is hulle gelykvormig?',
          answer: `Ja — deur ${or('verhoudings')} te kontroleer: 6/3 = 2, 8/4 = 2, 10/5 = 2. Al die verhoudings is gelyk (${or('2')}), dus is die driehoeke ${gr('gelykvormig (SSS-eweredigheid)')}.`,
          steps: [
            `Kontroleer die ${or('verhouding')} van elke paar ooreenstemmende sye.`,
            `Verhouding 1: ${or('6 ÷ 3')} = ${or('2')} ✓`,
            `Verhouding 2: ${or('8 ÷ 4')} = ${or('2')} ✓`,
            `Verhouding 3: ${or('10 ÷ 5')} = ${or('2')} ✓`,
            `Al drie ${or('verhoudings')} is gelyk (${or('2')}), wat eweredigheid bevestig.`,
            `<strong>Gevolgtrekking:</strong> Ja — die driehoeke is ${gr('gelykvormig deur SSS-eweredigheid')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the two minimum conditions for similar triangles — AA and SSS proportionality — with visual examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: two pairs of similar triangles showing equal angles and proportional sides labelled with their ratios" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING GEOMETRIC PROBLEMS USING CONGRUENCY AND SIMILARITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'congruency-similarity-problems',
      title: 'Meetkundige Probleme Oplos deur Kongruensie en Gelykvormigheid te Gebruik',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons los meetkundige probleme op wat <strong>onbekende sye en hoeke</strong> in driehoeke en vierhoeke behels, deur bekende eienskappe saam met kongruensie- en gelykvormigheidsvoorwaardes toe te pas om ons oplossings te regverdig.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bekende waardes')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('onbekende waardes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('regverdiging')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategie vir probleemoplossing</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${bl('Identifiseer')}</strong> — Merk al die ${bl('bekende waardes')} (sye, hoeke, oppervlaktes) op 'n diagram.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${re('Bepaal')}</strong> — Benoem duidelik die ${re('onbekende waarde')} wat jy moet vasstel.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Regverdig')}</strong> — Noem die kongruensie- of gelykvormigheidsvoorwaarde as jou ${gr('rede')} vir elke stap.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Gee altyd 'n rede</p>` +
        `<p style="margin:0;color:#1e3a8a;">In meetkunde is 'n stelling sonder 'n ${gr('regverdiging')} onvolledig. Skryf altyd die voorwaarde (bv. ${gr('SSS')}, ${gr('HH')}, ${gr('SHS')}) langs jou antwoord.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "Twee gelykvormige driehoeke het 'n syverhouding van 1 : 3. Die kleiner driehoek het 'n sy van 4 cm. Bepaal die ooreenstemmende sy in die groter driehoek.",
          answer: `Die ooreenstemmende sy in die groter driehoek is ${bl('12 cm')}.`,
          steps: [
            `Die driehoeke is gelykvormig met 'n syverhouding van ${or('1 : 3')}.`,
            `${gr('Regverdiging:')} Gelykvormige driehoeke het ooreenstemmende sye in verhouding.`,
            `Bekende sy in kleiner driehoek: ${bl('4 cm')}. Onbekende sy in groter driehoek: ${re('?')}`,
            `Pas die verhouding toe: ${re('?')} = ${bl('4')} × ${or('3')} = ${bl('12')} cm.`,
            `<strong>Antwoord:</strong> Die ooreenstemmende sy in die groter driehoek is ${bl('12 cm')}. ✓`,
          ],
        },
        {
          question: "Thabo het twee driehoeke wat kongruent is deur SHS, waar een driehoek 'n onbekende hoek x het en die ooreenstemmende hoek in die ander driehoek 65° is. Bepaal x.",
          answer: `${re('x')} = ${bl('65°')}`,
          steps: [
            `Die driehoeke is ${gr('kongruent deur SHS')}.`,
            `${gr('Regverdiging:')} Kongruente driehoeke het al hul ooreenstemmende hoeke gelyk.`,
            `Die ooreenstemmende hoek is ${bl('65°')}.`,
            `Daarom is ${re('x')} = ${bl('65°')}. ✓`,
          ],
        },
        {
          question: "'n Vierhoek word deur 'n diagonaal in twee kongruente driehoeke verdeel. As een driehoek 'n oppervlakte van 18 cm² het, bepaal die oppervlakte van die hele vierhoek.",
          answer: `Totale oppervlakte = ${bl('36 cm²')}`,
          steps: [
            `Een driehoek het 'n oppervlakte van ${bl('18 cm²')}.`,
            `${gr('Regverdiging:')} Die driehoeke is kongruent — hulle is in elke opsig gelyk, insluitend oppervlakte.`,
            `Totale oppervlakte van vierhoek = ${bl('2')} × ${bl('18')} = ${bl('36')} cm².`,
            `<strong>Antwoord:</strong> Die oppervlakte van die hele vierhoek is ${bl('36 cm²')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve geometric problems using congruency and similarity conditions with step-by-step justifications" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: labelled diagrams showing similar and congruent triangle pairs with known and unknown sides/angles marked" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Twee driehoeke het sye 6 cm, 8 cm en 10 cm, en 6 cm, 8 cm en 10 cm. Is hulle kongruent?',
      answer: 'ja',
      checkMode: 'auto',
      correctAnswer: 'ja',
      explanation: 'Al drie sye stem ooreen (6 = 6, 8 = 8, 10 = 10), wat aan die SSS-kongruensievoorwaarde voldoen. Die driehoeke is kongruent.',
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "Noem die kongruensievoorwaarde vir twee driehoeke met twee gelyke sye en 'n gelyke ingeslote hoek.",
      answer: 'SHS',
      checkMode: 'auto',
      correctAnswer: 'SHS',
      explanation: 'SHS (Sy-Hoek-Sy) vereis twee gelyke sye en die hoek tussen hulle om gelyk te wees — dit is presies die voorwaarde wat beskryf word.',
    },

    // ── Q3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê twee driehoeke met dieselfde drie hoeke is altyd kongruent. Is hy korrek? Verduidelik.',
      answer: 'Nee — om dieselfde drie hoeke te hê bewys slegs gelykvormigheid (HH), nie kongruensie nie, aangesien die driehoeke van verskillende groottes kan wees.',
      checkMode: 'self',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Twee driehoeke het albei hoeke van 35° en 85°. Is hulle gelykvormig?',
      answer: 'ja',
      checkMode: 'auto',
      correctAnswer: 'ja',
      explanation: 'Twee ooreenstemmende hoeke voldoen aan die HH-voorwaarde. Die derde hoek van elke driehoek is 180 − 35 − 85 = 60°, wat bevestig dat al drie hoeke ooreenstem. Die driehoeke is gelykvormig.',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Twee driehoeke het sye 4, 6 en 8, en 8, 12 en 16. Is hulle gelykvormig? Verduidelik.',
      answer: 'Ja — deur verhoudings te kontroleer: 8/4 = 2, 12/6 = 2, 16/8 = 2. Al die verhoudings is gelyk, wat gelykvormigheid bevestig.',
      checkMode: 'self',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Lerato het twee reghoekige driehoeke met ooreenstemmende skuinssye (12 cm) maar verskillende ander sylengtes. Is hulle noodwendig kongruent? Verduidelik.",
      answer: 'Nee — RSS-kongruensie vereis die skuinssy ÉN een ander ooreenstemmende sy; om slegs die skuinssy te laat ooreenstem is nie genoeg nie.',
      checkMode: 'self',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "Twee gelykvormige driehoeke het 'n syverhouding van 2 : 5. Die kleiner driehoek het 'n sy van 6 cm. Bepaal die ooreenstemmende sy in die groter driehoek.",
      answer: '15cm',
      checkMode: 'auto',
      correctAnswer: '15cm',
      correctAnswers: ['15cm', '15 cm', '15'],
      explanation: 'Deur die verhouding 2 : 5 te gebruik, is die groter sy = 6 × (5 ÷ 2) = 6 × 2.5 = 15 cm.',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo het twee driehoeke wat kongruent is deur HSH, waar een driehoek 'n onbekende sy y het en die ooreenstemmende sy in die ander driehoek 9 cm is. Bepaal y.",
      answer: 'Aangesien die driehoeke kongruent is, is ooreenstemmende sye gelyk: y = 9 cm.',
      checkMode: 'self',
    },

    // ── Q9 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "'n Vierhoek word deur 'n diagonaal in twee kongruente driehoeke verdeel. Een driehoek het 'n oppervlakte van 24 cm². Bepaal die totale oppervlakte van die vierhoek.",
      answer: '48cm²',
      checkMode: 'auto',
      correctAnswer: '48cm²',
      correctAnswers: ['48cm²', '48 cm²', '48'],
      explanation: 'Die driehoeke is kongruent, so elkeen het ʼn oppervlakte van 24 cm². Totale oppervlakte = 2 × 24 = 48 cm².',
    },

    // ── Q10 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Amahle sê SSH (twee sye en 'n nie-ingeslote hoek) is 'n geldige kongruensievoorwaarde. Is sy korrek? Verduidelik.",
      answer: "Nee — SSH is nie 'n betroubare kongruensievoorwaarde nie, aangesien dit soms twee verskillende moontlike driehoeke kan lewer (dit word soms die 'dubbelsinnige geval' genoem).",
      checkMode: 'self',
    },

    // ── Q11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Twee driehoeke het hoeke van 50°, 60° en 70°, en 50°, 60° en 70°. Is hulle noodwendig kongruent? Verduidelik.',
      answer: 'Nie noodwendig nie — ooreenstemmende hoeke bewys slegs gelykvormigheid (HHH), nie kongruensie nie, aangesien die driehoeke in grootte kan verskil.',
      checkMode: 'self',
    },

    // ── Q12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho het twee gelykvormige driehoeke met 'n syverhouding van 3 : 7. As die groter driehoek 'n sy van 21 cm het, bepaal die ooreenstemmende sy in die kleiner driehoek.",
      answer: '9cm',
      checkMode: 'auto',
      correctAnswer: '9cm',
      correctAnswers: ['9cm', '9 cm', '9'],
      explanation: 'Deur die verhouding 3 : 7 te gebruik, is die kleiner sy = 21 × (3 ÷ 7) = 9 cm.',
    },

    // ── Q13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato het twee driehoeke wat \'n gemeenskaplike sy deel en twee pare gelyke hoeke het. Is hulle kongruent? Verduidelik watter voorwaarde van toepassing is.',
      answer: 'Ja — dit voldoen aan HHS (twee hoeke en \'n ooreenstemmende sy), wat kongruensie bewys.',
      checkMode: 'self',
    },

    // ── Q14 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "'n Groter driehoek het sye 5 cm langer as 'n kleiner, gelykvormige driehoek aan elke sy, met die kleiner driehoek se sye synde 4, 6 en 8 cm. Beskryf hierdie situasie gelykvormigheid korrek? Verduidelik waarom of waarom nie.",
      answer: "Nee — om dieselfde vaste hoeveelheid by elke sy te tel, behou nie die verhouding tussen sye nie, dus sou dit nie 'n gelykvormige driehoek skep nie; gelykvormigheid vereis eweredige skalering (vermenigvuldiging), nie optelling nie.",
      checkMode: 'self',
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Twee gelykvormige driehoeke het oppervlaktes in die verhouding 4 : 9. Bepaal die verhouding van hul ooreenstemmende sylengtes.",
      answer: 'Aangesien oppervlakteverhouding = (syverhouding)², is die syverhouding = √4 : √9 = 2 : 3.',
      checkMode: 'self',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het meetkunde van 2D-vorms bemeester.' },
    { minScore: 11, message: 'Goeie werk! Jy het \'n sterk begrip van hierdie onderwerp. Gaan enige gemiste vrae weer deur en probeer weer.' },
    { minScore: 8, message: 'Goeie poging! Gaan die studiegids en uitgewerkte voorbeelde weer deur, en probeer dan weer.' },
    { minScore: 0, message: 'Hou aan probeer! Werk weer deur die gids, afdeling vir afdeling, en neem jou tyd met elke konsep.' },
  ],
}
