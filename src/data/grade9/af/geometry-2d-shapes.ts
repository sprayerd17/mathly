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
        '<VideoPlaceholder label="Kort video wat die vier minimum voorwaardes vir kongruente driehoeke verduidelik — SSS, SHS, HHS en R.S. — met visuele voorbeelde" />',
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
        '<VideoPlaceholder label="Kort video wat die twee minimum voorwaardes vir gelykvormige driehoeke verduidelik — HH en SSS-eweredigheid — met visuele voorbeelde" />',

      diagramPlaceholder:
        'Twee pare gelykvormige driehoeke wat gelyke hoeke en eweredige sye wys, gemerk met hulle verhoudings',
      diagramSvg:
        '<svg viewBox="0 0 260 215" xmlns="http://www.w3.org/2000/svg"><text x="130" y="18" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gelykvormige driehoeke — sye in verhouding 1 : 2</text><polygon points="40,160 80,160 40,130" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="40" y="150" width="10" height="10" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M 70,160 A 12,12 0 0 1 65,150" fill="none" stroke="#ea580c" stroke-width="1.5"/><path d="M 40,138 A 10,10 0 0 1 48,132" fill="none" stroke="#16a34a" stroke-width="1.5"/><text x="60" y="174" font-size="11" fill="#374151" font-weight="700" text-anchor="middle">4 cm</text><text x="30" y="147" font-size="11" fill="#374151" font-weight="700" text-anchor="end">3 cm</text><text x="55" y="150" font-size="11" fill="#374151" font-weight="700">5 cm</text><text x="112" y="150" font-size="18" fill="#ea580c" font-weight="700" text-anchor="middle">×2</text><polygon points="150,180 230,180 150,120" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="150" y="165" width="15" height="15" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M 210,180 A 18,18 0 0 1 202,165" fill="none" stroke="#ea580c" stroke-width="1.5"/><path d="M 150,133 A 15,15 0 0 1 163,125" fill="none" stroke="#16a34a" stroke-width="1.5"/><text x="190" y="196" font-size="12" fill="#374151" font-weight="700" text-anchor="middle">8 cm</text><text x="140" y="155" font-size="12" fill="#374151" font-weight="700" text-anchor="end">6 cm</text><text x="175" y="145" font-size="12" fill="#374151" font-weight="700">10 cm</text></svg>',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om geometriese probleme op te los deur kongruensie- en gelykvormigheidsvoorwaardes te gebruik, met stap-vir-stap regverdigings" />',
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
      explanation: 'Deur die verhouding 2 : 5 te gebruik, is die groter sy = 6 × (5 ÷ 2) = 6 × 2,5 = 15 cm.',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo het twee driehoeke wat kongruent is deur HHS, waar een driehoek 'n onbekende sy y het en die ooreenstemmende sy in die ander driehoek 9 cm is. Bepaal y.",
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-2):   Driehoek-hoeksom (vind onbekende hoek / gelykbenig / verhouding) — BENODIG DIAGRAM (0,1,2)
    // Blok 2 (3-5):   Buitehoekstelling                                                — BENODIG DIAGRAM (3,4,5)
    // Blok 3 (6-9):   Vierhoek-hoeksom / eienskappe                                     — BENODIG DIAGRAM (6,7,8,9)
    // Blok 4 (10-13): Veelhoek-binnehoeksom via (n-2)×180                               — abstrak, geen diagram
    // Blok 5 (14-16): Kongruente driehoek-voorwaardes (SSS/SHS/HHS/RSS)                 — 16 BENODIG DIAGRAM
    // Blok 6 (17-19): Gelykvormige driehoeke (HH / verhoudingsprobleme)                 — abstrak, geen diagram
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Driehoek-hoeksom (Easy/Easy/Medium)
        { difficulty: 'Easy', question: 'In die driehoek getoon, is twee van die hoeke 50° en 65°. Bepaal die grootte van die derde hoek.', checkMode: 'auto', correctAnswer: '65°', correctAnswers: ['65°', '65'], answer: '65°', explanation: 'Die hoeke van \'n driehoek tel op tot 180°.\nDerde hoek = 180° − 50° − 65° = 65°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="50,140 175,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 75,140 A 28,28 0 0 1 65,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="80" y="128" font-size="14" fill="#2563eb" font-weight="700">50°</text><path d="M 150,140 A 28,28 0 0 0 162,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="133" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">65°</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="128" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In die gelykbenige driehoek getoon, is die tophoek 40° en die twee basishoeke is gelyk. Bepaal die grootte van elke basishoek.', checkMode: 'auto', correctAnswer: '70°', correctAnswers: ['70°', '70'], answer: '70°', explanation: 'Die hoeke van \'n driehoek tel op tot 180°.\nOorblywende hoek vir albei basishoeke: 180° − 40° = 140°.\nAangesien die basishoeke gelyk is: 140° ÷ 2 = 70° elk.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 175,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="54" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">40°</text><line x1="72" y1="88" x2="79" y2="80" stroke="#0f1f3d" stroke-width="2"/><line x1="141" y1="80" x2="148" y2="88" stroke="#0f1f3d" stroke-width="2"/><path d="M 70,140 A 28,28 0 0 1 60,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="75" y="128" font-size="14" fill="#ea580c" font-weight="700">?</text><path d="M 150,140 A 28,28 0 0 0 160,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="145" y="128" font-size="14" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek getoon, is die drie hoeke in die verhouding 1 : 2 : 3. Bepaal die grootte van die grootste hoek.', checkMode: 'auto', correctAnswer: '90°', correctAnswers: ['90°', '90'], answer: '90°', explanation: 'Laat die hoeke x, 2x en 3x wees.\nx + 2x + 3x = 180° → 6x = 180° → x = 30°.\nGrootste hoek = 3x = 3 × 30° = 90°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 190,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 58,140 A 26,26 0 0 1 49,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="63" y="127" font-size="14" fill="#2563eb" font-weight="700">x</text><path d="M 165,140 A 26,26 0 0 0 174,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="160" y="127" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">2x</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#2563eb" stroke-width="2"/><text x="128" y="58" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">3x = ?</text></svg>' },

        // Blok 2 — Buitehoekstelling (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In die driehoek getoon, word \'n buitehoek by een hoekpunt gevorm. Die twee ver (nie-aangrensende) binnehoeke is 70° en 45°. Bepaal die grootte van die buitehoek.', checkMode: 'auto', correctAnswer: '115°', correctAnswers: ['115°', '115'], answer: '115°', explanation: 'Die buitehoekstelling sê dat \'n buitehoek gelyk is aan die som van die twee ver binnehoeke.\nBuitehoek = 70° + 45° = 115°', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">70°</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">45°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek getoon, is \'n buitehoek 110°. Een van die ver binnehoeke is 40°. Bepaal die grootte van die ander ver binnehoek.', checkMode: 'auto', correctAnswer: '70°', correctAnswers: ['70°', '70'], answer: '70°', explanation: 'Volgens die buitehoekstelling is die buitehoek gelyk aan die som van die twee ver binnehoeke.\nAnder ver hoek = 110° − 40° = 70°', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#ea580c" font-weight="700">?</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">40°</text><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#2563eb" font-weight="700">110°</text></svg>' },
        { difficulty: 'Hard', question: 'In driehoek ABC getoon, is die buitehoek by C 130°, en die binnehoek by A is 55°. Bepaal die grootte van die binnehoek by B.', checkMode: 'auto', correctAnswer: '75°', correctAnswers: ['75°', '75'], answer: '75°', explanation: 'Die binnehoek by C = 180° − 130° = 50° (hoeke op \'n reguit lyn).\nDeur die hoeksom van \'n driehoek te gebruik: A + B + C = 180°.\n55° + B + 50° = 180° → B = 180° − 55° − 50° = 75°', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 90,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><text x="25" y="152" font-size="12" fill="#374151" font-weight="600">A</text><text x="160" y="152" font-size="12" fill="#374151" font-weight="600">C</text><text x="88" y="22" font-size="12" fill="#374151" font-weight="600">B</text><path d="M 55,140 A 24,24 0 0 1 47,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">55°</text><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#2563eb" font-weight="700">130°</text><path d="M 90,45 A 16,16 0 0 1 105,60" fill="none" stroke="#ea580c" stroke-width="2"/><text x="103" y="52" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },

        // Blok 3 — Vierhoek-hoeksom / eienskappe (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In die vierhoek getoon, is drie van die hoeke 90°, 90° en 85°. Bepaal die grootte van die vierde hoek.', checkMode: 'auto', correctAnswer: '95°', correctAnswers: ['95°', '95'], answer: '95°', explanation: 'Die hoeke van \'n vierhoek tel op tot 360°.\nVierde hoek = 360° − 90° − 90° − 85° = 95°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">90°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">90°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">85°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die parallelogram getoon, is een hoek 115°. Bepaal die grootte van \'n aangrensende hoek (opeenvolgende hoeke in \'n parallelogram is supplementêr).', checkMode: 'auto', correctAnswer: '65°', correctAnswers: ['65°', '65'], answer: '65°', explanation: 'Opeenvolgende (mede-binne) hoeke in \'n parallelogram is supplementêr — hulle tel op tot 180°.\nAangrensende hoek = 180° − 115° = 65°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">115°</text><text x="150" y="122" font-size="14" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die trapesium getoon, is een paar sye parallel. Die hoek op een parallelle sy is 112°. Bepaal die mede-binnehoek op dieselfde skuinssy (die hoeke tussen die parallelle sye op dieselfde skuinssy tel op tot 180°).', checkMode: 'auto', correctAnswer: '68°', correctAnswers: ['68°', '68'], answer: '68°', explanation: 'Mede-binnehoeke tussen parallelle lyne tel op tot 180°.\nMede-binnehoek = 180° − 112° = 68°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,135 190,135 155,45 65,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100,135 l6,0 M 103,132 l0,6" stroke="#16a34a" stroke-width="1.5"/><path d="M 100,45 l6,0 M 103,42 l0,6" stroke="#16a34a" stroke-width="1.5"/><text x="45" y="122" font-size="13" fill="#2563eb" font-weight="700">112°</text><text x="145" y="65" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Hard', question: 'In die vierhoek getoon, is die vier hoeke in die verhouding 2 : 3 : 4 : 6. Bepaal die grootte van die grootste hoek.', checkMode: 'auto', correctAnswer: '144°', correctAnswers: ['144°', '144'], answer: '144°', explanation: 'Laat die hoeke 2x, 3x, 4x en 6x wees.\n2x + 3x + 4x + 6x = 360° → 15x = 360° → x = 24°.\nGrootste hoek = 6x = 6 × 24° = 144°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">2x</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3x</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4x</text><text x="65" y="62" font-size="13" fill="#ea580c" font-weight="700">6x = ?</text></svg>' },

        // Blok 4 — Veelhoek-binnehoeksom via (n-2)×180 (Medium/Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Bepaal die som van die binnehoeke van \'n vyfhoek (5 sye), deur die formule (n − 2) × 180° te gebruik.', checkMode: 'auto', correctAnswer: '540°', correctAnswers: ['540°', '540'], answer: '540°', explanation: 'Som van binnehoeke = (n − 2) × 180°.\nVir \'n vyfhoek, n = 5: (5 − 2) × 180° = 3 × 180° = 540°' },
        { difficulty: 'Medium', question: '\'n Reëlmatige sesshoek (6 sye) het al sy binnehoeke gelyk. Bepaal die grootte van elke binnehoek.', checkMode: 'auto', correctAnswer: '120°', correctAnswers: ['120°', '120'], answer: '120°', explanation: 'Som van binnehoeke = (n − 2) × 180° = (6 − 2) × 180° = 720°.\nAangesien die sesshoek reëlmatig is, is elke hoek = 720° ÷ 6 = 120°' },
        { difficulty: 'Hard', question: '\'n Reëlmatige veelhoek het \'n binnehoeksom van 900°. Gebruik die formule (n − 2) × 180° = 900° om die aantal sye, n, te bepaal.', checkMode: 'auto', correctAnswer: '7', answer: '7', explanation: '(n − 2) × 180° = 900°\nn − 2 = 900° ÷ 180° = 5\nn = 5 + 2 = 7 sye' },
        { difficulty: 'Hard', question: 'In die vyfhoek getoon, is vier van die binnehoeke 100°, 110°, 95° en 90°. Bepaal die grootte van die vyfde hoek.', checkMode: 'auto', correctAnswer: '145°', correctAnswers: ['145°', '145'], answer: '145°', explanation: 'Som van binnehoeke van \'n vyfhoek = (5 − 2) × 180° = 540°.\nVyfde hoek = 540° − 100° − 110° − 95° − 90° = 145°' },

        // Blok 5 — Kongruente driehoek-voorwaardes (Medium/Medium/Hard)
        { difficulty: 'Medium', question: 'Twee driehoeke het al drie pare ooreenstemmende sye gelyk. Noem die kongruensievoorwaarde wat bewys dat hulle kongruent is.', checkMode: 'auto', correctAnswer: 'SSS', answer: 'SSS', explanation: 'Wanneer al drie pare ooreenstemmende sye gelyk is, is die driehoeke kongruent volgens SSS (Sy-Sy-Sy).' },
        { difficulty: 'Medium', question: 'Twee reghoekige driehoeke het gelyke skuinssye en een ander paar gelyke ooreenstemmende sye. Noem die kongruensievoorwaarde wat bewys dat hulle kongruent is.', checkMode: 'auto', correctAnswer: 'RSS', answer: 'RSS', explanation: 'Vir reghoekige driehoeke bewys \'n gelyke regte hoek, gelyke skuinssy en een ander gelyke sy kongruensie volgens RSS (Regte hoek-Skuinssy-Sy).' },
        { difficulty: 'Hard', question: 'In die diagram is driehoek ABC kongruent aan driehoek DEF volgens SHS. In driehoek ABC is AB = 8 cm, AC = 10 cm en die ingeslote hoek A = 55°. Bepaal die grootte van hoek D in driehoek DEF.', checkMode: 'auto', correctAnswer: '55°', correctAnswers: ['55°', '55'], answer: '55°', explanation: 'Aangesien die driehoeke kongruent is, is ooreenstemmende hoeke gelyk.\nHoek D stem ooreen met hoek A, dus hoek D = 55°', diagramSvg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 120,140 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="152" font-size="12" fill="#374151" font-weight="600">A</text><text x="122" y="152" font-size="12" fill="#374151" font-weight="600">B</text><text x="35" y="36" font-size="12" fill="#374151" font-weight="600">C</text><text x="38" y="85" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">8 cm</text><text x="90" y="82" font-size="12" fill="#2563eb" font-weight="700">10 cm</text><path d="M 45,131 A 20,20 0 0 1 37,113" fill="none" stroke="#ea580c" stroke-width="2"/><text x="50" y="122" font-size="12" fill="#ea580c" font-weight="700">55°</text><polygon points="190,140 280,140 205,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="152" font-size="12" fill="#374151" font-weight="600">D</text><text x="282" y="152" font-size="12" fill="#374151" font-weight="600">E</text><text x="195" y="36" font-size="12" fill="#374151" font-weight="600">F</text><path d="M 205,131 A 20,20 0 0 1 197,113" fill="none" stroke="#ea580c" stroke-width="2"/><text x="210" y="122" font-size="13" fill="#ea580c" font-weight="700">?</text></svg>' },

        // Blok 6 — Gelykvormige driehoeke (Hard/Hard/Hard)
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het \'n syverhouding van 2 : 7. Die kleiner driehoek het \'n sy van 8 cm. Bepaal die lengte van die ooreenstemmende sy in die groter driehoek.', checkMode: 'auto', correctAnswer: '28cm', correctAnswers: ['28cm', '28 cm', '28'], answer: '28 cm', explanation: 'Deur die verhouding 2 : 7 te gebruik, is die groter sy = 8 × (7 ÷ 2) = 8 × 3,5 = 28 cm' },
        { difficulty: 'Hard', question: 'Twee driehoeke het albei hoeke van 45° en 65°. Verduidelik waarom hulle gelykvormig moet wees, en gee die derde hoek in elke driehoek.', answer: 'Aangesien twee pare ooreenstemmende hoeke gelyk is (45° en 65°), moet die derde hoek in elke driehoek ook gelyk wees: 180° − 45° − 65° = 70°. Al drie hoeke stem ooreen, dus is die driehoeke gelykvormig volgens HH (Hoek-Hoek).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het oppervlaktes in die verhouding 9 : 25. Bepaal die verhouding van hul ooreenstemmende sylengtes.', answer: 'Aangesien oppervlakteverhouding = (syverhouding)², is die syverhouding = √9 : √25 = 3 : 5.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het driehoek- en vierhoek-hoekeienskappe, veelhoek-hoeksomme, en kongruensie- en gelykvormigheidsvoorwaardes bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor die buitehoekstelling of veelhoek-hoeksomme na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor hoekeienskappe en kongruensievoorwaardes weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Driehoek-hoeksom (Easy/Easy/Medium)
        { difficulty: 'Easy', question: 'In die driehoek getoon, is twee van die hoeke 48° en 72°. Bepaal die grootte van die derde hoek.', checkMode: 'auto', correctAnswer: '60°', correctAnswers: ['60°', '60'], answer: '60°', explanation: 'Die hoeke van \'n driehoek tel op tot 180°.\nDerde hoek = 180° − 48° − 72° = 60°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="50,140 175,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 75,140 A 28,28 0 0 1 65,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="80" y="128" font-size="14" fill="#2563eb" font-weight="700">48°</text><path d="M 150,140 A 28,28 0 0 0 162,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="133" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">72°</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="128" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In die gelykbenige driehoek getoon, is die tophoek 56° en die twee basishoeke is gelyk. Bepaal die grootte van elke basishoek.', checkMode: 'auto', correctAnswer: '62°', correctAnswers: ['62°', '62'], answer: '62°', explanation: 'Die hoeke van \'n driehoek tel op tot 180°.\nOorblywende hoek vir albei basishoeke: 180° − 56° = 124°.\nAangesien die basishoeke gelyk is: 124° ÷ 2 = 62° elk.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 175,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="54" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">56°</text><line x1="72" y1="88" x2="79" y2="80" stroke="#0f1f3d" stroke-width="2"/><line x1="141" y1="80" x2="148" y2="88" stroke="#0f1f3d" stroke-width="2"/><path d="M 70,140 A 28,28 0 0 1 60,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="75" y="128" font-size="14" fill="#ea580c" font-weight="700">?</text><path d="M 150,140 A 28,28 0 0 0 160,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="145" y="128" font-size="14" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek getoon, is die drie hoeke in die verhouding 2 : 3 : 4. Bepaal die grootte van die grootste hoek.', checkMode: 'auto', correctAnswer: '80°', correctAnswers: ['80°', '80'], answer: '80°', explanation: 'Laat die hoeke 2x, 3x en 4x wees.\n2x + 3x + 4x = 180° → 9x = 180° → x = 20°.\nGrootste hoek = 4x = 4 × 20° = 80°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 190,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 58,140 A 26,26 0 0 1 49,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="63" y="127" font-size="14" fill="#2563eb" font-weight="700">x</text><path d="M 165,140 A 26,26 0 0 0 174,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="160" y="127" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">2x</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#2563eb" stroke-width="2"/><text x="128" y="58" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">3x = ?</text></svg>' },

        // Blok 2 — Buitehoekstelling (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In die driehoek getoon, word \'n buitehoek by een hoekpunt gevorm. Die twee ver (nie-aangrensende) binnehoeke is 65° en 52°. Bepaal die grootte van die buitehoek.', checkMode: 'auto', correctAnswer: '117°', correctAnswers: ['117°', '117'], answer: '117°', explanation: 'Die buitehoekstelling sê dat \'n buitehoek gelyk is aan die som van die twee ver binnehoeke.\nBuitehoek = 65° + 52° = 117°', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">65°</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">52°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek getoon, is \'n buitehoek 128°. Een van die ver binnehoeke is 55°. Bepaal die grootte van die ander ver binnehoek.', checkMode: 'auto', correctAnswer: '73°', correctAnswers: ['73°', '73'], answer: '73°', explanation: 'Volgens die buitehoekstelling is die buitehoek gelyk aan die som van die twee ver binnehoeke.\nAnder ver hoek = 128° − 55° = 73°', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#ea580c" font-weight="700">?</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">55°</text><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#2563eb" font-weight="700">128°</text></svg>' },
        { difficulty: 'Hard', question: 'In driehoek ABC getoon, is die buitehoek by C 142°, en die binnehoek by A is 66°. Bepaal die grootte van die binnehoek by B.', checkMode: 'auto', correctAnswer: '76°', correctAnswers: ['76°', '76'], answer: '76°', explanation: 'Die binnehoek by C = 180° − 142° = 38° (hoeke op \'n reguit lyn).\nDeur die hoeksom van \'n driehoek te gebruik: A + B + C = 180°.\n66° + B + 38° = 180° → B = 180° − 66° − 38° = 76°', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 90,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><text x="25" y="152" font-size="12" fill="#374151" font-weight="600">A</text><text x="160" y="152" font-size="12" fill="#374151" font-weight="600">C</text><text x="88" y="22" font-size="12" fill="#374151" font-weight="600">B</text><path d="M 55,140 A 24,24 0 0 1 47,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">66°</text><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#2563eb" font-weight="700">142°</text><path d="M 90,45 A 16,16 0 0 1 105,60" fill="none" stroke="#ea580c" stroke-width="2"/><text x="103" y="52" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },

        // Blok 3 — Vierhoek-hoeksom / eienskappe (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In die vierhoek getoon, is drie van die hoeke 100°, 80° en 95°. Bepaal die grootte van die vierde hoek.', checkMode: 'auto', correctAnswer: '85°', correctAnswers: ['85°', '85'], answer: '85°', explanation: 'Die hoeke van \'n vierhoek tel op tot 360°.\nVierde hoek = 360° − 100° − 80° − 95° = 85°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">100°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">80°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">95°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die parallelogram getoon, is een hoek 128°. Bepaal die grootte van \'n aangrensende hoek (opeenvolgende hoeke in \'n parallelogram is supplementêr).', checkMode: 'auto', correctAnswer: '52°', correctAnswers: ['52°', '52'], answer: '52°', explanation: 'Opeenvolgende (mede-binne) hoeke in \'n parallelogram is supplementêr — hulle tel op tot 180°.\nAangrensende hoek = 180° − 128° = 52°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">128°</text><text x="150" y="122" font-size="14" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die trapesium getoon, is een paar sye parallel. Die hoek op een parallelle sy is 104°. Bepaal die mede-binnehoek op dieselfde skuinssy (die hoeke tussen die parallelle sye op dieselfde skuinssy tel op tot 180°).', checkMode: 'auto', correctAnswer: '76°', correctAnswers: ['76°', '76'], answer: '76°', explanation: 'Mede-binnehoeke tussen parallelle lyne tel op tot 180°.\nMede-binnehoek = 180° − 104° = 76°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,135 190,135 155,45 65,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100,135 l6,0 M 103,132 l0,6" stroke="#16a34a" stroke-width="1.5"/><path d="M 100,45 l6,0 M 103,42 l0,6" stroke="#16a34a" stroke-width="1.5"/><text x="45" y="122" font-size="13" fill="#2563eb" font-weight="700">104°</text><text x="145" y="65" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Hard', question: 'In die vierhoek getoon, is die vier hoeke in die verhouding 1 : 2 : 3 : 4. Bepaal die grootte van die grootste hoek.', checkMode: 'auto', correctAnswer: '144°', correctAnswers: ['144°', '144'], answer: '144°', explanation: 'Laat die hoeke x, 2x, 3x en 4x wees.\nx + 2x + 3x + 4x = 360° → 10x = 360° → x = 36°.\nGrootste hoek = 4x = 4 × 36° = 144°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">2x</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3x</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4x</text><text x="65" y="62" font-size="13" fill="#ea580c" font-weight="700">6x = ?</text></svg>' },

        // Blok 4 — Veelhoek-binnehoeksom via (n-2)×180 (Medium/Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Bepaal die som van die binnehoeke van \'n sewehoek (7 sye), deur die formule (n − 2) × 180° te gebruik.', checkMode: 'auto', correctAnswer: '900°', correctAnswers: ['900°', '900'], answer: '900°', explanation: 'Som van binnehoeke = (n − 2) × 180°.\nVir \'n sewehoek, n = 7: (7 − 2) × 180° = 5 × 180° = 900°' },
        { difficulty: 'Medium', question: '\'n Reëlmatige agthoek (8 sye) het al sy binnehoeke gelyk. Bepaal die grootte van elke binnehoek.', checkMode: 'auto', correctAnswer: '135°', correctAnswers: ['135°', '135'], answer: '135°', explanation: 'Som van binnehoeke = (n − 2) × 180° = (8 − 2) × 180° = 1080°.\nAangesien die agthoek reëlmatig is, is elke hoek = 1080° ÷ 8 = 135°' },
        { difficulty: 'Hard', question: '\'n Reëlmatige veelhoek het \'n binnehoeksom van 1080°. Gebruik die formule (n − 2) × 180° = 1080° om die aantal sye, n, te bepaal.', checkMode: 'auto', correctAnswer: '8', answer: '8', explanation: '(n − 2) × 180° = 1080°\nn − 2 = 1080° ÷ 180° = 6\nn = 6 + 2 = 8 sye' },
        { difficulty: 'Hard', question: 'In die vyfhoek getoon, is vier van die binnehoeke 120°, 95°, 100° en 105°. Bepaal die grootte van die vyfde hoek.', checkMode: 'auto', correctAnswer: '120°', correctAnswers: ['120°', '120'], answer: '120°', explanation: 'Som van binnehoeke van \'n vyfhoek = (5 − 2) × 180° = 540°.\nVyfde hoek = 540° − 120° − 95° − 100° − 105° = 120°' },

        // Blok 5 — Kongruente driehoek-voorwaardes (Medium/Medium/Hard)
        { difficulty: 'Medium', question: 'Twee driehoeke het twee pare ooreenstemmende sye gelyk, en die hoek tussen daardie sye is ook gelyk. Noem die kongruensievoorwaarde wat bewys dat hulle kongruent is.', checkMode: 'auto', correctAnswer: 'SHS', answer: 'SHS', explanation: 'Wanneer twee pare ooreenstemmende sye en die ingeslote hoek gelyk is, is die driehoeke kongruent volgens SHS (Sy-Hoek-Sy).' },
        { difficulty: 'Medium', question: 'Twee driehoeke het twee pare ooreenstemmende hoeke gelyk, en een paar ooreenstemmende sye gelyk. Noem die kongruensievoorwaarde wat bewys dat hulle kongruent is.', checkMode: 'auto', correctAnswer: 'HHS', answer: 'HHS', explanation: 'Wanneer twee pare ooreenstemmende hoeke en \'n ooreenstemmende sy gelyk is, is die driehoeke kongruent volgens HHS (Hoek-Hoek-Sy).' },
        { difficulty: 'Hard', question: 'In die diagram is driehoek ABC kongruent aan driehoek DEF volgens SHS. In driehoek ABC is AB = 9 cm, AC = 12 cm en die ingeslote hoek A = 48°. Bepaal die grootte van hoek D in driehoek DEF.', checkMode: 'auto', correctAnswer: '48°', correctAnswers: ['48°', '48'], answer: '48°', explanation: 'Aangesien die driehoeke kongruent is, is ooreenstemmende hoeke gelyk.\nHoek D stem ooreen met hoek A, dus hoek D = 48°', diagramSvg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 120,140 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="152" font-size="12" fill="#374151" font-weight="600">A</text><text x="122" y="152" font-size="12" fill="#374151" font-weight="600">B</text><text x="35" y="36" font-size="12" fill="#374151" font-weight="600">C</text><text x="38" y="85" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">9 cm</text><text x="90" y="82" font-size="12" fill="#2563eb" font-weight="700">12 cm</text><path d="M 45,131 A 20,20 0 0 1 37,113" fill="none" stroke="#ea580c" stroke-width="2"/><text x="50" y="122" font-size="12" fill="#ea580c" font-weight="700">48°</text><polygon points="190,140 280,140 205,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="152" font-size="12" fill="#374151" font-weight="600">D</text><text x="282" y="152" font-size="12" fill="#374151" font-weight="600">E</text><text x="195" y="36" font-size="12" fill="#374151" font-weight="600">F</text><path d="M 205,131 A 20,20 0 0 1 197,113" fill="none" stroke="#ea580c" stroke-width="2"/><text x="210" y="122" font-size="13" fill="#ea580c" font-weight="700">?</text></svg>' },

        // Blok 6 — Gelykvormige driehoeke (Hard/Hard/Hard)
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het \'n syverhouding van 3 : 8. Die kleiner driehoek het \'n sy van 9 cm. Bepaal die lengte van die ooreenstemmende sy in die groter driehoek.', checkMode: 'auto', correctAnswer: '24cm', correctAnswers: ['24cm', '24 cm', '24'], answer: '24 cm', explanation: 'Deur die verhouding 3 : 8 te gebruik, is die groter sy = 9 × (8 ÷ 3) = 24 cm' },
        { difficulty: 'Hard', question: 'Twee driehoeke het albei hoeke van 38° en 77°. Verduidelik waarom hulle gelykvormig moet wees, en gee die derde hoek in elke driehoek.', answer: 'Aangesien twee pare ooreenstemmende hoeke gelyk is (38° en 77°), moet die derde hoek in elke driehoek ook gelyk wees: 180° − 38° − 77° = 65°. Al drie hoeke stem ooreen, dus is die driehoeke gelykvormig volgens HH (Hoek-Hoek).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het oppervlaktes in die verhouding 16 : 49. Bepaal die verhouding van hul ooreenstemmende sylengtes.', answer: 'Aangesien oppervlakteverhouding = (syverhouding)², is die syverhouding = √16 : √49 = 4 : 7.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het driehoek- en vierhoek-hoekeienskappe, veelhoek-hoeksomme, en kongruensie- en gelykvormigheidsvoorwaardes bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor die buitehoekstelling of veelhoek-hoeksomme na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor hoekeienskappe en kongruensievoorwaardes weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Driehoek-hoeksom (Easy/Easy/Medium)
        { difficulty: 'Easy', question: 'In die driehoek getoon, is twee van die hoeke 55° en 60°. Bepaal die grootte van die derde hoek.', checkMode: 'auto', correctAnswer: '65°', correctAnswers: ['65°', '65'], answer: '65°', explanation: 'Die hoeke van \'n driehoek tel op tot 180°.\nDerde hoek = 180° − 55° − 60° = 65°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="50,140 175,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 75,140 A 28,28 0 0 1 65,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="80" y="128" font-size="14" fill="#2563eb" font-weight="700">55°</text><path d="M 150,140 A 28,28 0 0 0 162,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="133" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">60°</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="128" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In die gelykbenige driehoek getoon, is die tophoek 36° en die twee basishoeke is gelyk. Bepaal die grootte van elke basishoek.', checkMode: 'auto', correctAnswer: '72°', correctAnswers: ['72°', '72'], answer: '72°', explanation: 'Die hoeke van \'n driehoek tel op tot 180°.\nOorblywende hoek vir albei basishoeke: 180° − 36° = 144°.\nAangesien die basishoeke gelyk is: 144° ÷ 2 = 72° elk.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 175,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="54" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">36°</text><line x1="72" y1="88" x2="79" y2="80" stroke="#0f1f3d" stroke-width="2"/><line x1="141" y1="80" x2="148" y2="88" stroke="#0f1f3d" stroke-width="2"/><path d="M 70,140 A 28,28 0 0 1 60,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="75" y="128" font-size="14" fill="#ea580c" font-weight="700">?</text><path d="M 150,140 A 28,28 0 0 0 160,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="145" y="128" font-size="14" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek getoon, is die drie hoeke in die verhouding 1 : 1 : 4. Bepaal die grootte van die grootste hoek.', checkMode: 'auto', correctAnswer: '120°', correctAnswers: ['120°', '120'], answer: '120°', explanation: 'Laat die hoeke x, x en 4x wees.\nx + x + 4x = 180° → 6x = 180° → x = 30°.\nGrootste hoek = 4x = 4 × 30° = 120°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 190,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 58,140 A 26,26 0 0 1 49,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="63" y="127" font-size="14" fill="#2563eb" font-weight="700">x</text><path d="M 165,140 A 26,26 0 0 0 174,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="160" y="127" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">2x</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#2563eb" stroke-width="2"/><text x="128" y="58" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">3x = ?</text></svg>' },

        // Blok 2 — Buitehoekstelling (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In die driehoek getoon, word \'n buitehoek by een hoekpunt gevorm. Die twee ver (nie-aangrensende) binnehoeke is 80° en 33°. Bepaal die grootte van die buitehoek.', checkMode: 'auto', correctAnswer: '113°', correctAnswers: ['113°', '113'], answer: '113°', explanation: 'Die buitehoekstelling sê dat \'n buitehoek gelyk is aan die som van die twee ver binnehoeke.\nBuitehoek = 80° + 33° = 113°', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">80°</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">33°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek getoon, is \'n buitehoek 96°. Een van die ver binnehoeke is 37°. Bepaal die grootte van die ander ver binnehoek.', checkMode: 'auto', correctAnswer: '59°', correctAnswers: ['59°', '59'], answer: '59°', explanation: 'Volgens die buitehoekstelling is die buitehoek gelyk aan die som van die twee ver binnehoeke.\nAnder ver hoek = 96° − 37° = 59°', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#ea580c" font-weight="700">?</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">37°</text><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#2563eb" font-weight="700">96°</text></svg>' },
        { difficulty: 'Hard', question: 'In driehoek ABC getoon, is die buitehoek by C 118°, en die binnehoek by A is 41°. Bepaal die grootte van die binnehoek by B.', checkMode: 'auto', correctAnswer: '77°', correctAnswers: ['77°', '77'], answer: '77°', explanation: 'Die binnehoek by C = 180° − 118° = 62° (hoeke op \'n reguit lyn).\nDeur die hoeksom van \'n driehoek te gebruik: A + B + C = 180°.\n41° + B + 62° = 180° → B = 180° − 41° − 62° = 77°', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 90,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><text x="25" y="152" font-size="12" fill="#374151" font-weight="600">A</text><text x="160" y="152" font-size="12" fill="#374151" font-weight="600">C</text><text x="88" y="22" font-size="12" fill="#374151" font-weight="600">B</text><path d="M 55,140 A 24,24 0 0 1 47,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">41°</text><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#2563eb" font-weight="700">118°</text><path d="M 90,45 A 16,16 0 0 1 105,60" fill="none" stroke="#ea580c" stroke-width="2"/><text x="103" y="52" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },

        // Blok 3 — Vierhoek-hoeksom / eienskappe (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In die vierhoek getoon, is drie van die hoeke 75°, 105° en 90°. Bepaal die grootte van die vierde hoek.', checkMode: 'auto', correctAnswer: '90°', correctAnswers: ['90°', '90'], answer: '90°', explanation: 'Die hoeke van \'n vierhoek tel op tot 360°.\nVierde hoek = 360° − 75° − 105° − 90° = 90°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">75°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">105°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">90°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die parallelogram getoon, is een hoek 97°. Bepaal die grootte van \'n aangrensende hoek (opeenvolgende hoeke in \'n parallelogram is supplementêr).', checkMode: 'auto', correctAnswer: '83°', correctAnswers: ['83°', '83'], answer: '83°', explanation: 'Opeenvolgende (mede-binne) hoeke in \'n parallelogram is supplementêr — hulle tel op tot 180°.\nAangrensende hoek = 180° − 97° = 83°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">97°</text><text x="150" y="122" font-size="14" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die trapesium getoon, is een paar sye parallel. Die hoek op een parallelle sy is 97°. Bepaal die mede-binnehoek op dieselfde skuinssy (die hoeke tussen die parallelle sye op dieselfde skuinssy tel op tot 180°).', checkMode: 'auto', correctAnswer: '83°', correctAnswers: ['83°', '83'], answer: '83°', explanation: 'Mede-binnehoeke tussen parallelle lyne tel op tot 180°.\nMede-binnehoek = 180° − 97° = 83°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,135 190,135 155,45 65,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100,135 l6,0 M 103,132 l0,6" stroke="#16a34a" stroke-width="1.5"/><path d="M 100,45 l6,0 M 103,42 l0,6" stroke="#16a34a" stroke-width="1.5"/><text x="45" y="122" font-size="13" fill="#2563eb" font-weight="700">97°</text><text x="145" y="65" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Hard', question: 'In die vierhoek getoon, is die vier hoeke in die verhouding 3 : 4 : 5 : 6. Bepaal die grootte van die grootste hoek.', checkMode: 'auto', correctAnswer: '120°', correctAnswers: ['120°', '120'], answer: '120°', explanation: 'Laat die hoeke 3x, 4x, 5x en 6x wees.\n3x + 4x + 5x + 6x = 360° → 18x = 360° → x = 20°.\nGrootste hoek = 6x = 6 × 20° = 120°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">2x</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3x</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4x</text><text x="65" y="62" font-size="13" fill="#ea580c" font-weight="700">6x = ?</text></svg>' },

        // Blok 4 — Veelhoek-binnehoeksom via (n-2)×180 (Medium/Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Bepaal die som van die binnehoeke van \'n negehoek (9 sye), deur die formule (n − 2) × 180° te gebruik.', checkMode: 'auto', correctAnswer: '1260°', correctAnswers: ['1260°', '1260'], answer: '1260°', explanation: 'Som van binnehoeke = (n − 2) × 180°.\nVir \'n negehoek, n = 9: (9 − 2) × 180° = 7 × 180° = 1260°' },
        { difficulty: 'Medium', question: '\'n Reëlmatige tienhoek (10 sye) het al sy binnehoeke gelyk. Bepaal die grootte van elke binnehoek.', checkMode: 'auto', correctAnswer: '144°', correctAnswers: ['144°', '144'], answer: '144°', explanation: 'Som van binnehoeke = (n − 2) × 180° = (10 − 2) × 180° = 1440°.\nAangesien die tienhoek reëlmatig is, is elke hoek = 1440° ÷ 10 = 144°' },
        { difficulty: 'Hard', question: '\'n Reëlmatige veelhoek het \'n binnehoeksom van 1440°. Gebruik die formule (n − 2) × 180° = 1440° om die aantal sye, n, te bepaal.', checkMode: 'auto', correctAnswer: '10', answer: '10', explanation: '(n − 2) × 180° = 1440°\nn − 2 = 1440° ÷ 180° = 8\nn = 8 + 2 = 10 sye' },
        { difficulty: 'Hard', question: 'In die sesshoek getoon, is vyf van die binnehoeke 110°, 130°, 125°, 115° en 100°. Bepaal die grootte van die sesde hoek.', checkMode: 'auto', correctAnswer: '140°', correctAnswers: ['140°', '140'], answer: '140°', explanation: 'Som van binnehoeke van \'n sesshoek = (6 − 2) × 180° = 720°.\nSesde hoek = 720° − 110° − 130° − 125° − 115° − 100° = 140°' },

        // Blok 5 — Kongruente driehoek-voorwaardes (Medium/Medium/Hard)
        { difficulty: 'Medium', question: 'Zinhle vergelyk twee reghoekige driehoeke. Albei het dieselfde skuinssy en een ander ooreenstemmende sy. Watter kongruensievoorwaarde kan sy gebruik om te bewys die driehoeke is kongruent?', checkMode: 'auto', correctAnswer: 'RSS', answer: 'RSS', explanation: 'Vir reghoekige driehoeke bewys \'n gelyke regte hoek, gelyke skuinssy en een ander gelyke sy kongruensie volgens RSS (Regte hoek-Skuinssy-Sy).' },
        { difficulty: 'Medium', question: 'Tumelo meet al drie sye van twee driehoeke en vind dat elke paar ooreenstemmende sye gelyk is. Watter kongruensievoorwaarde kan hy gebruik om te bewys die driehoeke is kongruent?', checkMode: 'auto', correctAnswer: 'SSS', answer: 'SSS', explanation: 'Wanneer al drie pare ooreenstemmende sye gelyk is, is die driehoeke kongruent volgens SSS (Sy-Sy-Sy).' },
        { difficulty: 'Hard', question: 'In die diagram is driehoek PQR kongruent aan driehoek STU volgens SHS. In driehoek PQR is PQ = 7 cm, PR = 11 cm en die ingeslote hoek P = 62°. Bepaal die grootte van hoek S in driehoek STU.', checkMode: 'auto', correctAnswer: '62°', correctAnswers: ['62°', '62'], answer: '62°', explanation: 'Aangesien die driehoeke kongruent is, is ooreenstemmende hoeke gelyk.\nHoek S stem ooreen met hoek P, dus hoek S = 62°', diagramSvg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 120,140 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="152" font-size="12" fill="#374151" font-weight="600">P</text><text x="122" y="152" font-size="12" fill="#374151" font-weight="600">Q</text><text x="35" y="36" font-size="12" fill="#374151" font-weight="600">R</text><text x="38" y="85" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">7 cm</text><text x="90" y="82" font-size="12" fill="#2563eb" font-weight="700">11 cm</text><path d="M 45,131 A 20,20 0 0 1 37,113" fill="none" stroke="#ea580c" stroke-width="2"/><text x="50" y="122" font-size="12" fill="#ea580c" font-weight="700">62°</text><polygon points="190,140 280,140 205,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="152" font-size="12" fill="#374151" font-weight="600">S</text><text x="282" y="152" font-size="12" fill="#374151" font-weight="600">T</text><text x="195" y="36" font-size="12" fill="#374151" font-weight="600">U</text><path d="M 205,131 A 20,20 0 0 1 197,113" fill="none" stroke="#ea580c" stroke-width="2"/><text x="210" y="122" font-size="13" fill="#ea580c" font-weight="700">?</text></svg>' },

        // Blok 6 — Gelykvormige driehoeke (Hard/Hard/Hard)
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het \'n syverhouding van 4 : 9. Die kleiner driehoek het \'n sy van 12 cm. Bepaal die lengte van die ooreenstemmende sy in die groter driehoek.', checkMode: 'auto', correctAnswer: '27cm', correctAnswers: ['27cm', '27 cm', '27'], answer: '27 cm', explanation: 'Deur die verhouding 4 : 9 te gebruik, is die groter sy = 12 × (9 ÷ 4) = 27 cm' },
        { difficulty: 'Hard', question: 'Twee driehoeke het albei hoeke van 52° en 61°. Verduidelik waarom hulle gelykvormig moet wees, en gee die derde hoek in elke driehoek.', answer: 'Aangesien twee pare ooreenstemmende hoeke gelyk is (52° en 61°), moet die derde hoek in elke driehoek ook gelyk wees: 180° − 52° − 61° = 67°. Al drie hoeke stem ooreen, dus is die driehoeke gelykvormig volgens HH (Hoek-Hoek).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het oppervlaktes in die verhouding 25 : 64. Bepaal die verhouding van hul ooreenstemmende sylengtes.', answer: 'Aangesien oppervlakteverhouding = (syverhouding)², is die syverhouding = √25 : √64 = 5 : 8.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het driehoek- en vierhoek-hoekeienskappe, veelhoek-hoeksomme, en kongruensie- en gelykvormigheidsvoorwaardes bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor die buitehoekstelling of veelhoek-hoeksomme na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor hoekeienskappe en kongruensievoorwaardes weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
