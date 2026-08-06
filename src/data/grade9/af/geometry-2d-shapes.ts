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

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat die vier minimum voorwaardes vir kongruente driehoeke verduidelik — SSS, SHS, HHS en R.S. — met visuele voorbeelde',
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

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat die twee minimum voorwaardes vir gelykvormige driehoeke verduidelik — HH en SSS-eweredigheid — met visuele voorbeelde',

      diagramPlaceholder:
        'Twee pare gelykvormige driehoeke wat gelyke hoeke en eweredige sye wys, gemerk met hulle verhoudings',
      diagramSvg:
        '<svg viewBox="0 0 260 215" xmlns="http://www.w3.org/2000/svg"><text x="130" y="14" font-size="10" fill="#0f1f3d" font-weight="700" text-anchor="middle"><tspan x="130" dy="0">Gelykvormige driehoeke</tspan><tspan x="130" dy="12">— sye in verhouding 1 : 2</tspan></text><polygon points="40,160 80,160 40,130" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="40" y="150" width="10" height="10" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M 70,160 A 12,12 0 0 1 65,150" fill="none" stroke="#ea580c" stroke-width="1.5"/><path d="M 40,138 A 10,10 0 0 1 48,132" fill="none" stroke="#16a34a" stroke-width="1.5"/><text x="60" y="174" font-size="11" fill="#374151" font-weight="700" text-anchor="middle">4 cm</text><text x="30" y="147" font-size="11" fill="#374151" font-weight="700" text-anchor="end">3 cm</text><text x="55" y="150" font-size="11" fill="#374151" font-weight="700">5 cm</text><text x="112" y="150" font-size="18" fill="#ea580c" font-weight="700" text-anchor="middle">×2</text><polygon points="150,180 230,180 150,120" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="150" y="165" width="15" height="15" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M 210,180 A 18,18 0 0 1 202,165" fill="none" stroke="#ea580c" stroke-width="1.5"/><path d="M 150,133 A 15,15 0 0 1 163,125" fill="none" stroke="#16a34a" stroke-width="1.5"/><text x="190" y="196" font-size="12" fill="#374151" font-weight="700" text-anchor="middle">8 cm</text><text x="140" y="155" font-size="12" fill="#374151" font-weight="700" text-anchor="end">6 cm</text><text x="175" y="145" font-size="12" fill="#374151" font-weight="700">10 cm</text></svg>',
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

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om geometriese probleme op te los deur kongruensie- en gelykvormigheidsvoorwaardes te gebruik, met stap-vir-stap regverdigings',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Twee driehoeke het sye 6 cm, 8 cm en 10 cm, en 6 cm, 8 cm en 10 cm. Is hulle kongruent?',
      checkMode: 'auto',
      options: [
        'Ja — al drie ooreenstemmende sye is gelyk, wat aan SSS voldoen.',
        'Nee — ooreenstemmende sye alleen kan nooit kongruensie bewys nie.',
        'Ja, maar net omdat die driehoeke ook reghoekig is (RSS).',
        'Kan nie bepaal word sonder om die hoeke te ken nie.',
      ],
      correctIndex: 0,
      explanation: 'Al drie sye stem ooreen (6 = 6, 8 = 8, 10 = 10), wat aan die SSS-kongruensievoorwaarde voldoen. Die driehoeke is kongruent.',
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "Noem die kongruensievoorwaarde vir twee driehoeke met twee gelyke sye en 'n gelyke ingeslote hoek.",
      checkMode: 'auto',
      options: ['SSS', 'SHS', 'HHS', 'RSS'],
      correctIndex: 1,
      explanation: 'SHS (Sy-Hoek-Sy) vereis twee gelyke sye en die hoek tussen hulle om gelyk te wees — dit is presies die voorwaarde wat beskryf word.',
    },

    // ── Q3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê twee driehoeke met dieselfde drie hoeke is altyd kongruent. Is hy korrek?',
      checkMode: 'auto',
      options: [
        'Ja — om al drie hoeke te laat ooreenstem waarborg kongruensie.',
        'Ja — dit is die HHH-kongruensievoorwaarde.',
        'Nee — om dieselfde drie hoeke te hê bewys slegs gelykvormigheid (HH), nie kongruensie nie, aangesien die driehoeke van verskillende groottes kan wees.',
        'Nee — drie ooreenstemmende hoeke beteken die driehoeke hou glad nie verband nie.',
      ],
      correctIndex: 2,
      explanation: 'Om dieselfde drie hoeke te hê bewys slegs gelykvormigheid (HH), nie kongruensie nie, aangesien die driehoeke steeds van verskillende groottes kan wees.',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Twee driehoeke het albei hoeke van 35° en 85°. Is hulle gelykvormig?',
      checkMode: 'auto',
      options: [
        'Nee — twee ooreenstemmende hoeke is nie genoeg vir gelykvormigheid nie.',
        'Kan nie bepaal word sonder om die sylengtes te ken nie.',
        'Ja, maar net as die driehoeke ook dieselfde grootte is.',
        'Ja — twee ooreenstemmende hoeke voldoen aan die HH-voorwaarde; die derde hoek in elk is 180° − 35° − 85° = 60°, wat gelykvormigheid bevestig.',
      ],
      correctIndex: 3,
      explanation: 'Twee ooreenstemmende hoeke voldoen aan die HH-voorwaarde. Die derde hoek van elke driehoek is 180° − 35° − 85° = 60°, wat bevestig dat al drie hoeke ooreenstem. Die driehoeke is gelykvormig.',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Twee driehoeke het sye 4, 6 en 8, en 8, 12 en 16. Is hulle gelykvormig?',
      checkMode: 'auto',
      options: [
        'Ja — elke paar ooreenstemmende sye deel die verhouding 2 : 1 (8/4 = 2, 12/6 = 2, 16/8 = 2), dus is die driehoeke gelykvormig.',
        'Nee — die sylengtes verskil, dus kan die driehoeke nie gelykvormig wees nie.',
        'Ja — maar net omdat die omtrekke met ʼn faktor van 2 verskil.',
        'Kan nie bepaal word sonder om die hoeke te ken nie.',
      ],
      correctIndex: 0,
      explanation: 'Deur verhoudings te kontroleer: 8/4 = 2, 12/6 = 2, 16/8 = 2. Al die verhoudings is gelyk, wat bevestig dat die driehoeke gelykvormig is volgens SSS-eweredigheid.',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Lerato het twee reghoekige driehoeke met ooreenstemmende skuinssye (12 cm) maar verskillende ander sylengtes. Is hulle noodwendig kongruent?",
      checkMode: 'auto',
      options: [
        'Ja — ʼn ooreenstemmende skuinssy alleen is genoeg vir RSS-kongruensie.',
        'Nee — RSS-kongruensie vereis die skuinssy ÉN een ander ooreenstemmende sy; om slegs die skuinssy te laat ooreenstem is nie genoeg nie.',
        'Ja — reghoekige driehoeke met gelyke skuinssye is altyd kongruent volgens SSS.',
        'Nee — reghoekige driehoeke kan nooit as kongruent bewys word nie.',
      ],
      correctIndex: 1,
      explanation: 'RSS-kongruensie vereis die skuinssy ÉN een ander ooreenstemmende sy; om slegs die skuinssy te laat ooreenstem is nie genoeg om kongruensie te waarborg nie.',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "Twee gelykvormige driehoeke het 'n syverhouding van 2 : 5. Die kleiner driehoek het 'n sy van 6 cm. Bepaal die ooreenstemmende sy in die groter driehoek.",
      checkMode: 'auto',
      options: ['2,4 cm', '9 cm', '15 cm', '30 cm'],
      correctIndex: 2,
      explanation: 'Deur die verhouding 2 : 5 te gebruik, is die groter sy = 6 × (5 ÷ 2) = 6 × 2,5 = 15 cm. (2,4 cm keer die verhouding om; 9 cm tel die verhoudingsverskil op in plaas van te skaleer; 30 cm vermenigvuldig met 5 in plaas van met 5/2.)',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo het twee driehoeke wat kongruent is deur HHS, waar een driehoek 'n onbekende sy y het en die ooreenstemmende sy in die ander driehoek 9 cm is. Bepaal y.",
      checkMode: 'auto',
      options: ['18 cm (die bekende sy verdubbel)', '4,5 cm (die bekende sy gehalveer)', 'Kan nie vanuit HHS alleen bepaal word nie', '9 cm — kongruente driehoeke het gelyke ooreenstemmende sye, dus y = 9 cm.'],
      correctIndex: 3,
      explanation: 'Aangesien die driehoeke kongruent is, is ooreenstemmende sye gelyk: y = 9 cm.',
    },

    // ── Q9 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "'n Vierhoek word deur 'n diagonaal in twee kongruente driehoeke verdeel. Een driehoek het 'n oppervlakte van 24 cm². Bepaal die totale oppervlakte van die vierhoek.",
      checkMode: 'auto',
      options: ['48 cm²', '24 cm²', '36 cm²', '72 cm²'],
      correctIndex: 0,
      explanation: 'Die driehoeke is kongruent, so elkeen het ʼn oppervlakte van 24 cm². Totale oppervlakte = 2 × 24 = 48 cm². (24 cm² ignoreer die tweede driehoek; 36 cm² en 72 cm² gebruik verkeerde vermenigvuldigers.)',
    },

    // ── Q10 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Amahle sê SSH (twee sye en 'n nie-ingeslote hoek) is 'n geldige kongruensievoorwaarde. Is sy korrek?",
      checkMode: 'auto',
      options: [
        'Ja — SSH werk presies soos SHS aangesien dit steeds twee sye en ʼn hoek behels.',
        "Nee — SSH is nie 'n betroubare kongruensievoorwaarde nie, aangesien dit soms twee verskillende moontlike driehoeke kan lewer (die 'dubbelsinnige geval').",
        'Ja — solank die hoek skerp is, bewys SSH altyd kongruensie.',
        'Nee — SSH is ongeldig omdat sylengtes alleen nooit voldoende is nie.',
      ],
      correctIndex: 1,
      explanation: "SSH is nie 'n betroubare kongruensievoorwaarde nie, aangesien dit soms twee verskillende moontlike driehoeke kan lewer — dit word soms die 'dubbelsinnige geval' genoem.",
    },

    // ── Q11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Twee driehoeke het hoeke van 50°, 60° en 70°, en 50°, 60° en 70°. Is hulle noodwendig kongruent?',
      checkMode: 'auto',
      options: [
        'Ja — om al drie hoeke te laat ooreenstem waarborg kongruensie (HHH).',
        'Ja — aangesien die hoeke tot 180° optel, moet die driehoeke identies wees.',
        'Nie noodwendig nie — ooreenstemmende hoeke bewys slegs gelykvormigheid (HHH), nie kongruensie nie, aangesien die driehoeke in grootte kan verskil.',
        'Nee — driehoeke met gelyke hoeke kan glad nie verband hou nie.',
      ],
      correctIndex: 2,
      explanation: 'Ooreenstemmende hoeke bewys slegs gelykvormigheid (HHH), nie kongruensie nie, aangesien die driehoeke in grootte kan verskil.',
    },

    // ── Q12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho het twee gelykvormige driehoeke met 'n syverhouding van 3 : 7. As die groter driehoek 'n sy van 21 cm het, bepaal die ooreenstemmende sy in die kleiner driehoek.",
      checkMode: 'auto',
      options: ['49 cm', '7 cm', '63 cm', '9 cm'],
      correctIndex: 3,
      explanation: 'Deur die verhouding 3 : 7 te gebruik, is die kleiner sy = 21 × (3 ÷ 7) = 9 cm. (49 cm keer die verhouding om; 7 cm trek af in plaas van te skaleer; 63 cm vermenigvuldig met 3 in plaas van met 3/7.)',
    },

    // ── Q13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato het twee driehoeke wat \'n gemeenskaplike sy deel en twee pare gelyke hoeke het. Is hulle kongruent? Watter voorwaarde is van toepassing?',
      checkMode: 'auto',
      options: [
        "Ja — dit voldoen aan HHS (twee hoeke en 'n ooreenstemmende sy), wat kongruensie bewys.",
        'Ja — dit voldoen aan SHS, aangesien ʼn sy en twee hoeke gegee is.',
        'Nee — ʼn gedeelde sy en twee gelyke hoeke is nie genoeg om kongruensie te bewys nie.',
        'Ja — dit voldoen aan SSS, aangesien drie pare inligting bekend is.',
      ],
      correctIndex: 0,
      explanation: "Dit voldoen aan HHS (twee hoeke en 'n ooreenstemmende sy), wat kongruensie bewys.",
    },

    // ── Q14 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "'n Groter driehoek het sye 5 cm langer as 'n kleiner, gelykvormige driehoek aan elke sy, met die kleiner driehoek se sye synde 4, 6 en 8 cm. Beskryf hierdie situasie gelykvormigheid korrek?",
      checkMode: 'auto',
      options: [
        'Ja — om dieselfde hoeveelheid by elke sy te tel, hou die driehoeke gelykvormig.',
        "Nee — om dieselfde vaste hoeveelheid by elke sy te tel, behou nie die verhouding tussen sye nie, dus sou dit nie 'n gelykvormige driehoek skep nie; gelykvormigheid vereis eweredige skalering (vermenigvuldiging), nie optelling nie.",
        'Ja — solank die vorm se hoeke onveranderd bly, behou die optel van ʼn konstante by elke sy gelykvormigheid.',
        "Kan nie bepaal word sonder om die driehoek se hoeke te ken nie.",
      ],
      correctIndex: 1,
      explanation: "Om dieselfde vaste hoeveelheid by elke sy te tel, behou nie die verhouding tussen sye nie, dus skep dit nie 'n gelykvormige driehoek nie; gelykvormigheid vereis eweredige skalering (vermenigvuldiging), nie optelling nie.",
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Twee gelykvormige driehoeke het oppervlaktes in die verhouding 4 : 9. Bepaal die verhouding van hul ooreenstemmende sylengtes.",
      checkMode: 'auto',
      options: ['4 : 9 (dieselfde as die oppervlakteverhouding)', '16 : 81 (oppervlakteverhouding gekwadreer)', '2 : 3', '8 : 18 (oppervlakteverhouding verdubbel)'],
      correctIndex: 2,
      explanation: 'Aangesien oppervlakteverhouding = (syverhouding)², is die syverhouding = √4 : √9 = 2 : 3. (4 : 9 verwar die oppervlakteverhouding met die syverhouding; 16 : 81 kwadreer weer in plaas daarvan om die vierkantswortel te neem; 8 : 18 is ʼn ongerelateerde bewerking.)',
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
        { difficulty: 'Easy', question: 'In die driehoek getoon, is twee van die hoeke 50° en 65°. Bepaal die grootte van die derde hoek.', checkMode: 'auto', options: ['65°', '130°', '115°', '15°'], correctIndex: 0, explanation: 'Die hoeke van \'n driehoek tel op tot 180°.\nDerde hoek = 180° − 50° − 65° = 65° (130° vergeet om die tweede hoek af te trek; 115° vergeet om die eerste hoek af te trek; 15° is die verskil tussen die twee gegewe hoeke, nie die som nie).', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="50,140 175,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 75,140 A 28,28 0 0 1 65,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="80" y="128" font-size="14" fill="#2563eb" font-weight="700">50°</text><path d="M 150,140 A 28,28 0 0 0 162,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="133" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">65°</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="128" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In die gelykbenige driehoek getoon, is die tophoek 40° en die twee basishoeke is gelyk. Bepaal die grootte van elke basishoek.', checkMode: 'auto', options: ['140°', '70°', '40°', '20°'], correctIndex: 1, explanation: 'Die hoeke van \'n driehoek tel op tot 180°.\nOorblywende hoek vir albei basishoeke: 180° − 40° = 140°.\nAangesien die basishoeke gelyk is: 140° ÷ 2 = 70° elk. (140° vergeet om te halveer; 40° verwar die tophoek met ʼn basishoek; 20° halveer die tophoek in plaas van die oorblywende hoek.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 175,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="54" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">40°</text><line x1="72" y1="88" x2="79" y2="80" stroke="#0f1f3d" stroke-width="2"/><line x1="141" y1="80" x2="148" y2="88" stroke="#0f1f3d" stroke-width="2"/><path d="M 70,140 A 28,28 0 0 1 60,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="75" y="128" font-size="14" fill="#ea580c" font-weight="700">?</text><path d="M 150,140 A 28,28 0 0 0 160,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="145" y="128" font-size="14" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek getoon, is die drie hoeke in die verhouding 1 : 2 : 3. Bepaal die grootte van die grootste hoek.', checkMode: 'auto', options: ['60°', '30°', '90°', '180°'], correctIndex: 2, explanation: 'Laat die hoeke x, 2x en 3x wees.\nx + 2x + 3x = 180° → 6x = 180° → x = 30°.\nGrootste hoek = 3x = 3 × 30° = 90° (60° is die middelste hoek 2x; 30° is die kleinste hoek x; 180° verdubbel verkeerdelik die antwoord deur ʼn som van 360° te gebruik.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 190,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 58,140 A 26,26 0 0 1 49,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="63" y="127" font-size="14" fill="#2563eb" font-weight="700">x</text><path d="M 165,140 A 26,26 0 0 0 174,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="160" y="127" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">2x</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#2563eb" stroke-width="2"/><text x="128" y="58" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">3x = ?</text></svg>' },

        // Blok 2 — Buitehoekstelling (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In die driehoek getoon, word \'n buitehoek by een hoekpunt gevorm. Die twee ver (nie-aangrensende) binnehoeke is 70° en 45°. Bepaal die grootte van die buitehoek.', checkMode: 'auto', options: ['25°', '70°', '65°', '115°'], correctIndex: 3, explanation: 'Die buitehoekstelling sê dat \'n buitehoek gelyk is aan die som van die twee ver binnehoeke.\nBuitehoek = 70° + 45° = 115° (25° is die verskil, nie die som nie, van die twee hoeke; 70° kopieer net een ver hoek; 65° neem verkeerdelik die supplement van die korrekte antwoord met 180°.)', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">70°</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">45°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek getoon, is \'n buitehoek 110°. Een van die ver binnehoeke is 40°. Bepaal die grootte van die ander ver binnehoek.', checkMode: 'auto', options: ['70°', '150°', '40°', '55°'], correctIndex: 0, explanation: 'Volgens die buitehoekstelling is die buitehoek gelyk aan die som van die twee ver binnehoeke.\nAnder ver hoek = 110° − 40° = 70° (150° tel verkeerdelik die twee gegewe waardes op; 40° kopieer net die bekende ver hoek; 55° is die helfte van die buitehoek.)', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 121.1,41.3" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#ea580c" font-weight="700">?</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">40°</text><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#2563eb" font-weight="700">110°</text></svg>' },
        { difficulty: 'Hard', question: 'In driehoek ABC getoon, is die buitehoek by C 130°, en die binnehoek by A is 55°. Bepaal die grootte van die binnehoek by B.', checkMode: 'auto', options: ['50°', '75°', '55°', '35°'], correctIndex: 1, explanation: 'Die binnehoek by C = 180° − 130° = 50° (hoeke op \'n reguit lyn).\nDeur die hoeksom van \'n driehoek te gebruik: A + B + C = 180°.\n55° + B + 50° = 180° → B = 180° − 55° − 50° = 75° (50° stop nadat hoek C bereken is, en vergeet om die driehoek-hoeksom te voltooi; 55° kopieer hoek A; 35° neem verkeerdelik ʼn 90°-hoek by C aan.)', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 90,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><text x="25" y="152" font-size="12" fill="#374151" font-weight="600">A</text><text x="160" y="152" font-size="12" fill="#374151" font-weight="600">C</text><text x="88" y="22" font-size="12" fill="#374151" font-weight="600">B</text><path d="M 55,140 A 24,24 0 0 1 47,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">55°</text><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#2563eb" font-weight="700">130°</text><path d="M 90,45 A 16,16 0 0 1 105,60" fill="none" stroke="#ea580c" stroke-width="2"/><text x="103" y="52" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },

        // Blok 3 — Vierhoek-hoeksom / eienskappe (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In die vierhoek getoon, is drie van die hoeke 90°, 90° en 85°. Bepaal die grootte van die vierde hoek.', checkMode: 'auto', options: ['265°', '180°', '95°', '85°'], correctIndex: 2, explanation: 'Die hoeke van \'n vierhoek tel op tot 360°.\nVierde hoek = 360° − 90° − 90° − 85° = 95° (265° tel die drie bekende hoeke op in plaas daarvan om van 360° af te trek; 180° vergeet om die 85°-hoek af te trek; 85° kopieer net ʼn bekende hoek.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="62.5,140 167.5,140 167.5,35 62.5,44.2" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="50.9" y="151.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">90°</text><text x="179.1" y="151.1" font-size="13" fill="#2563eb" font-weight="700">90°</text><text x="178.6" y="23.4" font-size="13" fill="#2563eb" font-weight="700">85°</text><text x="50.4" y="33.7" font-size="15" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die parallelogram getoon, is een hoek 115°. Bepaal die grootte van \'n aangrensende hoek (opeenvolgende hoeke in \'n parallelogram is supplementêr).', checkMode: 'auto', options: ['115°', '245°', '90°', '65°'], correctIndex: 3, explanation: 'Opeenvolgende (mede-binne) hoeke in \'n parallelogram is supplementêr — hulle tel op tot 180°.\nAangrensende hoek = 180° − 115° = 65° (115° verwar die aangrensende hoek met ʼn teenoorstaande, gelyke hoek; 245° gebruik verkeerdelik 360° in plaas van 180°; 90° neem verkeerdelik ʼn regte hoek aan.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">115°</text><text x="150" y="122" font-size="14" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die trapesium getoon, is een paar sye parallel. Die hoek op een parallelle sy is 112°. Bepaal die mede-binnehoek op dieselfde skuinssy (die hoeke tussen die parallelle sye op dieselfde skuinssy tel op tot 180°).', checkMode: 'auto', options: ['68°', '112°', '248°', '90°'], correctIndex: 0, explanation: 'Mede-binnehoeke tussen parallelle lyne tel op tot 180°.\nMede-binnehoek = 180° − 112° = 68° (112° behandel die hoeke verkeerdelik as gelyk in plaas van supplementêr; 248° gebruik verkeerdelik 360°; 90° neem verkeerdelik ʼn regte hoek aan.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,135 190,135 155,45 65,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100,135 l6,0 M 103,132 l0,6" stroke="#16a34a" stroke-width="1.5"/><path d="M 100,45 l6,0 M 103,42 l0,6" stroke="#16a34a" stroke-width="1.5"/><text x="45" y="122" font-size="13" fill="#2563eb" font-weight="700">112°</text><text x="145" y="65" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Hard', question: 'In die vierhoek getoon, is die vier hoeke in die verhouding 2 : 3 : 4 : 6. Bepaal die grootte van die grootste hoek.', checkMode: 'auto', options: ['72°', '144°', '48°', '216°'], correctIndex: 1, explanation: 'Laat die hoeke 2x, 3x, 4x en 6x wees.\n2x + 3x + 4x + 6x = 360° → 15x = 360° → x = 24°.\nGrootste hoek = 6x = 6 × 24° = 144° (72° is die hoek 3x; 48° is die hoek 2x; 216° verdubbel verkeerdelik die korrekte antwoord.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,124 190,124 166.3,51 91.3,67" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="25.1" y="129.9" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2x</text><text x="204.4" y="130.9" font-size="13" fill="#2563eb" font-weight="700">3x</text><text x="178.1" y="40.2" font-size="13" fill="#2563eb" font-weight="700">4x</text><text x="78.8" y="57" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">6x = ?</text></svg>' },

        // Blok 4 — Veelhoek-binnehoeksom via (n-2)×180 (Medium/Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Bepaal die som van die binnehoeke van \'n vyfhoek (5 sye), deur die formule (n − 2) × 180° te gebruik.', checkMode: 'auto', options: ['900°', '1080°', '540°', '270°'], correctIndex: 2, explanation: 'Som van binnehoeke = (n − 2) × 180°.\nVir \'n vyfhoek, n = 5: (5 − 2) × 180° = 3 × 180° = 540° (900° vergeet om 2 van n af te trek; 1080° gebruik verkeerdelik 360° in plaas van 180°; 270° gebruik verkeerdelik 90° in plaas van 180°.)' },
        { difficulty: 'Medium', question: '\'n Reëlmatige sesshoek (6 sye) het al sy binnehoeke gelyk. Bepaal die grootte van elke binnehoek.', checkMode: 'auto', options: ['720°', '60°', '90°', '120°'], correctIndex: 3, explanation: 'Som van binnehoeke = (n − 2) × 180° = (6 − 2) × 180° = 720°.\nAangesien die sesshoek reëlmatig is, is elke hoek = 720° ÷ 6 = 120° (720° vergeet om deur die aantal sye te deel; 60° is die buitehoek, nie die binnehoek nie; 90° is ʼn ongerelateerde skatting.)' },
        { difficulty: 'Hard', question: '\'n Reëlmatige veelhoek het \'n binnehoeksom van 900°. Gebruik die formule (n − 2) × 180° = 900° om die aantal sye, n, te bepaal.', checkMode: 'auto', options: ['7', '5', '6', '8'], correctIndex: 0, explanation: '(n − 2) × 180° = 900°\nn − 2 = 900° ÷ 180° = 5\nn = 5 + 2 = 7 sye (5 vergeet om 2 weer by te tel; 6 en 8 is af-met-een foute.)' },
        { difficulty: 'Hard', question: 'In die vyfhoek getoon, is vier van die binnehoeke 100°, 110°, 95° en 90°. Bepaal die grootte van die vyfde hoek.', checkMode: 'auto', options: ['395°', '145°', '235°', '450°'], correctIndex: 1, explanation: 'Som van binnehoeke van \'n vyfhoek = (5 − 2) × 180° = 540°.\nVyfde hoek = 540° − 100° − 110° − 95° − 90° = 145° (395° is die som van die vier bekende hoeke, nie van 540° afgetrek nie; 235° vergeet om die 90°-hoek af te trek; 450° trek net een hoek van 540° af.)', diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="41.2,165 140.3,165 174.2,71.9 84.4,30 35.8,134.2" stroke="#0f1f3d" stroke-width="2" fill="none"/><text x="28.2" y="177.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100°</text><text x="152.1" y="178.6" font-size="13" fill="#2563eb" font-weight="700">110°</text><text x="190.2" y="63.6" font-size="13" fill="#2563eb" font-weight="700">95°</text><text x="82.1" y="12.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">90°</text><text x="18.8" y="140.2" font-size="16" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },

        // Blok 5 — Kongruente driehoek-voorwaardes (Medium/Medium/Hard)
        { difficulty: 'Medium', question: 'Twee driehoeke het al drie pare ooreenstemmende sye gelyk. Noem die kongruensievoorwaarde wat bewys dat hulle kongruent is.', checkMode: 'auto', options: ['SHS', 'HHS', 'SSS', 'RSS'], correctIndex: 2, explanation: 'Wanneer al drie pare ooreenstemmende sye gelyk is, is die driehoeke kongruent volgens SSS (Sy-Sy-Sy).' },
        { difficulty: 'Medium', question: 'Twee reghoekige driehoeke het gelyke skuinssye en een ander paar gelyke ooreenstemmende sye. Noem die kongruensievoorwaarde wat bewys dat hulle kongruent is.', checkMode: 'auto', options: ['SSS', 'SHS', 'HHS', 'RSS'], correctIndex: 3, explanation: 'Vir reghoekige driehoeke bewys \'n gelyke regte hoek, gelyke skuinssy en een ander gelyke sy kongruensie volgens RSS (Regte hoek-Skuinssy-Sy).' },
        { difficulty: 'Hard', question: 'In die diagram is driehoek ABC kongruent aan driehoek DEF volgens SHS. In driehoek ABC is AB = 8 cm, AC = 10 cm en die ingeslote hoek A = 55°. Bepaal die grootte van hoek D in driehoek DEF.', checkMode: 'auto', options: ['55°', '125°', '35°', '27,5°'], correctIndex: 0, explanation: 'Aangesien die driehoeke kongruent is, is ooreenstemmende hoeke gelyk.\nHoek D stem ooreen met hoek A, dus hoek D = 55° (125° neem verkeerdelik die supplement van 55° met 180°; 35° behandel dit verkeerdelik as die komplement van 55°; 27,5° halveer verkeerdelik 55°.)', diagramSvg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 120,140 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="152" font-size="12" fill="#374151" font-weight="600">A</text><text x="122" y="152" font-size="12" fill="#374151" font-weight="600">B</text><text x="35" y="36" font-size="12" fill="#374151" font-weight="600">C</text><text x="38" y="85" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">8 cm</text><text x="90" y="82" font-size="12" fill="#2563eb" font-weight="700">10 cm</text><path d="M 45,131 A 20,20 0 0 1 37,113" fill="none" stroke="#ea580c" stroke-width="2"/><text x="50" y="122" font-size="12" fill="#ea580c" font-weight="700">55°</text><polygon points="190,140 280,140 205,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="152" font-size="12" fill="#374151" font-weight="600">D</text><text x="282" y="152" font-size="12" fill="#374151" font-weight="600">E</text><text x="195" y="36" font-size="12" fill="#374151" font-weight="600">F</text><path d="M 205,131 A 20,20 0 0 1 197,113" fill="none" stroke="#ea580c" stroke-width="2"/><text x="210" y="122" font-size="13" fill="#ea580c" font-weight="700">?</text></svg>' },

        // Blok 6 — Gelykvormige driehoeke (Hard/Hard/Hard)
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het \'n syverhouding van 2 : 7. Die kleiner driehoek het \'n sy van 8 cm. Bepaal die lengte van die ooreenstemmende sy in die groter driehoek.', checkMode: 'auto', options: ['2,3 cm', '28 cm', '13 cm', '56 cm'], correctIndex: 1, explanation: 'Deur die verhouding 2 : 7 te gebruik, is die groter sy = 8 × (7 ÷ 2) = 8 × 3,5 = 28 cm (2,3 cm keer die verhouding om; 13 cm tel die verhoudingsverskil op in plaas van te skaleer; 56 cm vermenigvuldig met 7 in plaas van met 7/2.)' },
        { difficulty: 'Hard', question: 'Twee driehoeke het albei hoeke van 45° en 65°. Wat is die derde hoek in elke driehoek, en wat vertel dit ons van die driehoeke?', checkMode: 'auto', options: ['Derde hoek = 110°; die driehoeke is gelykvormig volgens HH.', 'Derde hoek = 65°; die driehoeke kan nie vanuit hoeke alleen as gelykvormig bewys word nie.', 'Derde hoek = 70°; die driehoeke is gelykvormig volgens HH aangesien al drie hoeke dan ooreenstem.', 'Derde hoek = 70°; die driehoeke is kongruent, nie net gelykvormig nie.'], correctIndex: 2, explanation: 'Aangesien twee pare ooreenstemmende hoeke gelyk is (45° en 65°), moet die derde hoek in elke driehoek ook gelyk wees: 180° − 45° − 65° = 70°. Al drie hoeke stem ooreen, dus is die driehoeke gelykvormig volgens HH (Hoek-Hoek) — ooreenstemmende hoeke alleen bewys nie kongruensie nie.' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het oppervlaktes in die verhouding 9 : 25. Bepaal die verhouding van hul ooreenstemmende sylengtes.', checkMode: 'auto', options: ['9 : 25', '81 : 625', '18 : 50', '3 : 5'], correctIndex: 3, explanation: 'Aangesien oppervlakteverhouding = (syverhouding)², is die syverhouding = √9 : √25 = 3 : 5 (9 : 25 verwar die oppervlakteverhouding met die syverhouding; 81 : 625 kwadreer weer in plaas daarvan om die vierkantswortel te neem; 18 : 50 is ʼn ongerelateerde bewerking.)' },
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
        { difficulty: 'Easy', question: 'In die driehoek getoon, is twee van die hoeke 48° en 72°. Bepaal die grootte van die derde hoek.', checkMode: 'auto', options: ['132°', '60°', '108°', '24°'], correctIndex: 1, explanation: 'Die hoeke van \'n driehoek tel op tot 180°.\nDerde hoek = 180° − 48° − 72° = 60° (132° vergeet om die tweede hoek af te trek; 108° vergeet om die eerste hoek af te trek; 24° is die verskil tussen die twee gegewe hoeke, nie die som nie).', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="50,140 175,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 75,140 A 28,28 0 0 1 65,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="80" y="128" font-size="14" fill="#2563eb" font-weight="700">48°</text><path d="M 150,140 A 28,28 0 0 0 162,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="133" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">72°</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="128" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In die gelykbenige driehoek getoon, is die tophoek 56° en die twee basishoeke is gelyk. Bepaal die grootte van elke basishoek.', checkMode: 'auto', options: ['124°', '56°', '62°', '28°'], correctIndex: 2, explanation: 'Die hoeke van \'n driehoek tel op tot 180°.\nOorblywende hoek vir albei basishoeke: 180° − 56° = 124°.\nAangesien die basishoeke gelyk is: 124° ÷ 2 = 62° elk. (124° vergeet om te halveer; 56° verwar die tophoek met ʼn basishoek; 28° halveer die tophoek in plaas van die oorblywende hoek.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 175,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="54" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">56°</text><line x1="72" y1="88" x2="79" y2="80" stroke="#0f1f3d" stroke-width="2"/><line x1="141" y1="80" x2="148" y2="88" stroke="#0f1f3d" stroke-width="2"/><path d="M 70,140 A 28,28 0 0 1 60,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="75" y="128" font-size="14" fill="#ea580c" font-weight="700">?</text><path d="M 150,140 A 28,28 0 0 0 160,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="145" y="128" font-size="14" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek getoon, is die drie hoeke in die verhouding 2 : 3 : 4. Bepaal die grootte van die grootste hoek.', checkMode: 'auto', options: ['60°', '40°', '160°', '80°'], correctIndex: 3, explanation: 'Laat die hoeke 2x, 3x en 4x wees.\n2x + 3x + 4x = 180° → 9x = 180° → x = 20°.\nGrootste hoek = 4x = 4 × 20° = 80° (60° is die middelste hoek 3x; 40° is die kleinste hoek 2x; 160° verdubbel verkeerdelik die antwoord deur ʼn som van 360° te gebruik.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 190,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 58,140 A 26,26 0 0 1 49,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="63" y="127" font-size="14" fill="#2563eb" font-weight="700">2x</text><path d="M 165,140 A 26,26 0 0 0 174,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="160" y="127" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">3x</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#2563eb" stroke-width="2"/><text x="128" y="58" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">4x = ?</text></svg>' },

        // Blok 2 — Buitehoekstelling (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In die driehoek getoon, word \'n buitehoek by een hoekpunt gevorm. Die twee ver (nie-aangrensende) binnehoeke is 65° en 52°. Bepaal die grootte van die buitehoek.', checkMode: 'auto', options: ['117°', '13°', '65°', '63°'], correctIndex: 0, explanation: 'Die buitehoekstelling sê dat \'n buitehoek gelyk is aan die som van die twee ver binnehoeke.\nBuitehoek = 65° + 52° = 117° (13° is die verskil, nie die som nie, van die twee hoeke; 65° kopieer net een ver hoek; 63° neem verkeerdelik die supplement van die korrekte antwoord met 180°.)', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 109.3,46.4" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">65°</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">52°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek getoon, is \'n buitehoek 128°. Een van die ver binnehoeke is 55°. Bepaal die grootte van die ander ver binnehoek.', checkMode: 'auto', options: ['183°', '73°', '55°', '64°'], correctIndex: 1, explanation: 'Volgens die buitehoekstelling is die buitehoek gelyk aan die som van die twee ver binnehoeke.\nAnder ver hoek = 128° − 55° = 73° (183° tel verkeerdelik die twee gegewe waardes op; 55° kopieer net die bekende ver hoek; 64° is die helfte van die buitehoek.)', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 92.4,57.3" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#ea580c" font-weight="700">?</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">55°</text><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#2563eb" font-weight="700">128°</text></svg>' },
        { difficulty: 'Hard', question: 'In driehoek ABC getoon, is die buitehoek by C 142°, en die binnehoek by A is 66°. Bepaal die grootte van die binnehoek by B.', checkMode: 'auto', options: ['38°', '66°', '76°', '24°'], correctIndex: 2, explanation: 'Die binnehoek by C = 180° − 142° = 38° (hoeke op \'n reguit lyn).\nDeur die hoeksom van \'n driehoek te gebruik: A + B + C = 180°.\n66° + B + 38° = 180° → B = 180° − 66° − 38° = 76° (38° stop nadat hoek C bereken is, en vergeet om die driehoek-hoeksom te voltooi; 66° kopieer hoek A; 24° neem verkeerdelik ʼn 90°-hoek by C aan.)', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 90,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><text x="25" y="152" font-size="12" fill="#374151" font-weight="600">A</text><text x="160" y="152" font-size="12" fill="#374151" font-weight="600">C</text><text x="88" y="22" font-size="12" fill="#374151" font-weight="600">B</text><path d="M 55,140 A 24,24 0 0 1 47,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">66°</text><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#2563eb" font-weight="700">142°</text><path d="M 90,45 A 16,16 0 0 1 105,60" fill="none" stroke="#ea580c" stroke-width="2"/><text x="103" y="52" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },

        // Blok 3 — Vierhoek-hoeksom / eienskappe (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In die vierhoek getoon, is drie van die hoeke 100°, 80° en 95°. Bepaal die grootte van die vierde hoek.', checkMode: 'auto', options: ['275°', '180°', '95°', '85°'], correctIndex: 3, explanation: 'Die hoeke van \'n vierhoek tel op tot 360°.\nVierde hoek = 360° − 100° − 80° − 95° = 85° (275° tel die drie bekende hoeke op in plaas daarvan om van 360° af te trek; 180° vergeet om die 95°-hoek af te trek; 95° kopieer net ʼn bekende hoek.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="70.1,140 176.8,140 158.2,35 53.2,44.2" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="59.5" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100°</text><text x="189.3" y="150" font-size="13" fill="#2563eb" font-weight="700">80°</text><text x="168.2" y="22.5" font-size="13" fill="#2563eb" font-weight="700">95°</text><text x="40.4" y="34.7" font-size="15" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die parallelogram getoon, is een hoek 128°. Bepaal die grootte van \'n aangrensende hoek (opeenvolgende hoeke in \'n parallelogram is supplementêr).', checkMode: 'auto', options: ['52°', '128°', '232°', '90°'], correctIndex: 0, explanation: 'Opeenvolgende (mede-binne) hoeke in \'n parallelogram is supplementêr — hulle tel op tot 180°.\nAangrensende hoek = 180° − 128° = 52° (128° verwar die aangrensende hoek met ʼn teenoorstaande, gelyke hoek; 232° gebruik verkeerdelik 360° in plaas van 180°; 90° neem verkeerdelik ʼn regte hoek aan.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">128°</text><text x="150" y="122" font-size="14" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die trapesium getoon, is een paar sye parallel. Die hoek op een parallelle sy is 104°. Bepaal die mede-binnehoek op dieselfde skuinssy (die hoeke tussen die parallelle sye op dieselfde skuinssy tel op tot 180°).', checkMode: 'auto', options: ['104°', '76°', '256°', '90°'], correctIndex: 1, explanation: 'Mede-binnehoeke tussen parallelle lyne tel op tot 180°.\nMede-binnehoek = 180° − 104° = 76° (104° behandel die hoeke verkeerdelik as gelyk in plaas van supplementêr; 256° gebruik verkeerdelik 360°; 90° neem verkeerdelik ʼn regte hoek aan.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,135 190,135 155,45 65,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100,135 l6,0 M 103,132 l0,6" stroke="#16a34a" stroke-width="1.5"/><path d="M 100,45 l6,0 M 103,42 l0,6" stroke="#16a34a" stroke-width="1.5"/><text x="45" y="122" font-size="13" fill="#2563eb" font-weight="700">104°</text><text x="145" y="65" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Hard', question: 'In die vierhoek getoon, is die vier hoeke in die verhouding 1 : 2 : 3 : 4. Bepaal die grootte van die grootste hoek.', checkMode: 'auto', options: ['108°', '36°', '144°', '288°'], correctIndex: 2, explanation: 'Laat die hoeke x, 2x, 3x en 4x wees.\nx + 2x + 3x + 4x = 360° → 10x = 360° → x = 36°.\nGrootste hoek = 4x = 4 × 36° = 144° (108° is die hoek 3x; 36° is die hoek x; 288° verdubbel verkeerdelik die korrekte antwoord.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,114.7 190,114.7 172.3,60.3 115,60.3" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="24.7" y="119.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">x</text><text x="204.6" y="121.2" font-size="13" fill="#2563eb" font-weight="700">2x</text><text x="185.8" y="51.7" font-size="13" fill="#2563eb" font-weight="700">3x</text><text x="107.5" y="46.1" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">4x = ?</text></svg>' },

        // Blok 4 — Veelhoek-binnehoeksom via (n-2)×180 (Medium/Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Bepaal die som van die binnehoeke van \'n sewehoek (7 sye), deur die formule (n − 2) × 180° te gebruik.', checkMode: 'auto', options: ['1260°', '1800°', '450°', '900°'], correctIndex: 3, explanation: 'Som van binnehoeke = (n − 2) × 180°.\nVir \'n sewehoek, n = 7: (7 − 2) × 180° = 5 × 180° = 900° (1260° vergeet om 2 van n af te trek; 1800° gebruik verkeerdelik 360° in plaas van 180°; 450° gebruik verkeerdelik 90° in plaas van 180°.)' },
        { difficulty: 'Medium', question: '\'n Reëlmatige agthoek (8 sye) het al sy binnehoeke gelyk. Bepaal die grootte van elke binnehoek.', checkMode: 'auto', options: ['135°', '1080°', '45°', '90°'], correctIndex: 0, explanation: 'Som van binnehoeke = (n − 2) × 180° = (8 − 2) × 180° = 1080°.\nAangesien die agthoek reëlmatig is, is elke hoek = 1080° ÷ 8 = 135° (1080° vergeet om deur die aantal sye te deel; 45° is die buitehoek, nie die binnehoek nie; 90° is ʼn ongerelateerde skatting.)' },
        { difficulty: 'Hard', question: '\'n Reëlmatige veelhoek het \'n binnehoeksom van 1080°. Gebruik die formule (n − 2) × 180° = 1080° om die aantal sye, n, te bepaal.', checkMode: 'auto', options: ['6', '8', '9', '5'], correctIndex: 1, explanation: '(n − 2) × 180° = 1080°\nn − 2 = 1080° ÷ 180° = 6\nn = 6 + 2 = 8 sye (6 vergeet om 2 weer by te tel; 9 en 5 is af-met-een foute.)' },
        { difficulty: 'Hard', question: 'In die vyfhoek getoon, is vier van die binnehoeke 120°, 95°, 100° en 105°. Bepaal die grootte van die vyfde hoek.', checkMode: 'auto', options: ['420°', '435°', '120°', '225°'], correctIndex: 2, explanation: 'Som van binnehoeke van \'n vyfhoek = (5 − 2) × 180° = 540°.\nVyfde hoek = 540° − 120° − 95° − 100° − 105° = 120° (420° is die som van die vier bekende hoeke, nie van 540° afgetrek nie; 435° trek net een hoek van 540° af; 225° vergeet om die 105°-hoek af te trek.)', diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="65.4,160.8 166.2,160.8 175,60.3 77.6,34.2 35,108.1" stroke="#0f1f3d" stroke-width="2" fill="none"/><text x="55.2" y="175.6" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">120°</text><text x="179.6" y="172.8" font-size="13" fill="#2563eb" font-weight="700">95°</text><text x="190.3" y="50.7" font-size="13" fill="#2563eb" font-weight="700">100°</text><text x="71.3" y="17.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">105°</text><text x="17" y="109" font-size="16" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },

        // Blok 5 — Kongruente driehoek-voorwaardes (Medium/Medium/Hard)
        { difficulty: 'Medium', question: 'Twee driehoeke het twee pare ooreenstemmende sye gelyk, en die hoek tussen daardie sye is ook gelyk. Noem die kongruensievoorwaarde wat bewys dat hulle kongruent is.', checkMode: 'auto', options: ['SSS', 'HHS', 'RSS', 'SHS'], correctIndex: 3, explanation: 'Wanneer twee pare ooreenstemmende sye en die ingeslote hoek gelyk is, is die driehoeke kongruent volgens SHS (Sy-Hoek-Sy).' },
        { difficulty: 'Medium', question: 'Twee driehoeke het twee pare ooreenstemmende hoeke gelyk, en een paar ooreenstemmende sye gelyk. Noem die kongruensievoorwaarde wat bewys dat hulle kongruent is.', checkMode: 'auto', options: ['HHS', 'SSS', 'SHS', 'RSS'], correctIndex: 0, explanation: 'Wanneer twee pare ooreenstemmende hoeke en \'n ooreenstemmende sy gelyk is, is die driehoeke kongruent volgens HHS (Hoek-Hoek-Sy).' },
        { difficulty: 'Hard', question: 'In die diagram is driehoek ABC kongruent aan driehoek DEF volgens SHS. In driehoek ABC is AB = 9 cm, AC = 12 cm en die ingeslote hoek A = 48°. Bepaal die grootte van hoek D in driehoek DEF.', checkMode: 'auto', options: ['132°', '48°', '42°', '24°'], correctIndex: 1, explanation: 'Aangesien die driehoeke kongruent is, is ooreenstemmende hoeke gelyk.\nHoek D stem ooreen met hoek A, dus hoek D = 48° (132° neem verkeerdelik die supplement van 48° met 180°; 42° behandel dit verkeerdelik as die komplement van 48°; 24° halveer verkeerdelik 48°.)', diagramSvg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 120,140 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="152" font-size="12" fill="#374151" font-weight="600">A</text><text x="122" y="152" font-size="12" fill="#374151" font-weight="600">B</text><text x="35" y="36" font-size="12" fill="#374151" font-weight="600">C</text><text x="38" y="85" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">9 cm</text><text x="90" y="82" font-size="12" fill="#2563eb" font-weight="700">12 cm</text><path d="M 45,131 A 20,20 0 0 1 37,113" fill="none" stroke="#ea580c" stroke-width="2"/><text x="50" y="122" font-size="12" fill="#ea580c" font-weight="700">48°</text><polygon points="190,140 280,140 205,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="152" font-size="12" fill="#374151" font-weight="600">D</text><text x="282" y="152" font-size="12" fill="#374151" font-weight="600">E</text><text x="195" y="36" font-size="12" fill="#374151" font-weight="600">F</text><path d="M 205,131 A 20,20 0 0 1 197,113" fill="none" stroke="#ea580c" stroke-width="2"/><text x="210" y="122" font-size="13" fill="#ea580c" font-weight="700">?</text></svg>' },

        // Blok 6 — Gelykvormige driehoeke (Hard/Hard/Hard)
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het \'n syverhouding van 3 : 8. Die kleiner driehoek het \'n sy van 9 cm. Bepaal die lengte van die ooreenstemmende sy in die groter driehoek.', checkMode: 'auto', options: ['3,4 cm', '14 cm', '24 cm', '72 cm'], correctIndex: 2, explanation: 'Deur die verhouding 3 : 8 te gebruik, is die groter sy = 9 × (8 ÷ 3) = 24 cm (3,4 cm keer die verhouding om; 14 cm tel die verhoudingsverskil op in plaas van te skaleer; 72 cm vermenigvuldig met 8 in plaas van met 8/3.)' },
        { difficulty: 'Hard', question: 'Twee driehoeke het albei hoeke van 38° en 77°. Wat is die derde hoek in elke driehoek, en wat vertel dit ons van die driehoeke?', checkMode: 'auto', options: ['Derde hoek = 115°; die driehoeke is gelykvormig volgens HH.', 'Derde hoek = 142°; die driehoeke is gelykvormig volgens HH.', 'Derde hoek = 65°; die driehoeke is kongruent, nie net gelykvormig nie.', 'Derde hoek = 65°; die driehoeke is gelykvormig volgens HH aangesien al drie hoeke dan ooreenstem.'], correctIndex: 3, explanation: 'Aangesien twee pare ooreenstemmende hoeke gelyk is (38° en 77°), moet die derde hoek in elke driehoek ook gelyk wees: 180° − 38° − 77° = 65°. Al drie hoeke stem ooreen, dus is die driehoeke gelykvormig volgens HH (Hoek-Hoek) — ooreenstemmende hoeke alleen bewys nie kongruensie nie.' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het oppervlaktes in die verhouding 16 : 49. Bepaal die verhouding van hul ooreenstemmende sylengtes.', checkMode: 'auto', options: ['4 : 7', '16 : 49', '256 : 2401', '32 : 98'], correctIndex: 0, explanation: 'Aangesien oppervlakteverhouding = (syverhouding)², is die syverhouding = √16 : √49 = 4 : 7 (16 : 49 verwar die oppervlakteverhouding met die syverhouding; 256 : 2401 kwadreer weer in plaas daarvan om die vierkantswortel te neem; 32 : 98 is ʼn ongerelateerde bewerking.)' },
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
        { difficulty: 'Easy', question: 'In die driehoek getoon, is twee van die hoeke 55° en 60°. Bepaal die grootte van die derde hoek.', checkMode: 'auto', options: ['125°', '120°', '65°', '5°'], correctIndex: 2, explanation: 'Die hoeke van \'n driehoek tel op tot 180°.\nDerde hoek = 180° − 55° − 60° = 65° (125° vergeet om die tweede hoek af te trek; 120° vergeet om die eerste hoek af te trek; 5° is die verskil tussen die twee gegewe hoeke, nie die som nie).', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="50,140 175,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 75,140 A 28,28 0 0 1 65,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="80" y="128" font-size="14" fill="#2563eb" font-weight="700">55°</text><path d="M 150,140 A 28,28 0 0 0 162,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="133" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">60°</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="128" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In die gelykbenige driehoek getoon, is die tophoek 36° en die twee basishoeke is gelyk. Bepaal die grootte van elke basishoek.', checkMode: 'auto', options: ['144°', '36°', '18°', '72°'], correctIndex: 3, explanation: 'Die hoeke van \'n driehoek tel op tot 180°.\nOorblywende hoek vir albei basishoeke: 180° − 36° = 144°.\nAangesien die basishoeke gelyk is: 144° ÷ 2 = 72° elk. (144° vergeet om te halveer; 36° verwar die tophoek met ʼn basishoek; 18° halveer die tophoek in plaas van die oorblywende hoek.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 175,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="54" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">36°</text><line x1="72" y1="88" x2="79" y2="80" stroke="#0f1f3d" stroke-width="2"/><line x1="141" y1="80" x2="148" y2="88" stroke="#0f1f3d" stroke-width="2"/><path d="M 70,140 A 28,28 0 0 1 60,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="75" y="128" font-size="14" fill="#ea580c" font-weight="700">?</text><path d="M 150,140 A 28,28 0 0 0 160,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="145" y="128" font-size="14" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek getoon, is die drie hoeke in die verhouding 1 : 1 : 4. Bepaal die grootte van die grootste hoek.', checkMode: 'auto', options: ['120°', '30°', '60°', '240°'], correctIndex: 0, explanation: 'Laat die hoeke x, x en 4x wees.\nx + x + 4x = 180° → 6x = 180° → x = 30°.\nGrootste hoek = 4x = 4 × 30° = 120° (30° is een van die kleiner, gelyke hoeke x; 60° tel verkeerdelik die twee gelyke x-hoeke as een deel op; 240° verdubbel verkeerdelik die antwoord deur ʼn som van 360° te gebruik.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 190,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 58,140 A 26,26 0 0 1 49,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="63" y="127" font-size="14" fill="#2563eb" font-weight="700">x</text><path d="M 165,140 A 26,26 0 0 0 174,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="160" y="127" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">x</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#2563eb" stroke-width="2"/><text x="128" y="58" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">4x = ?</text></svg>' },

        // Blok 2 — Buitehoekstelling (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In die driehoek getoon, word \'n buitehoek by een hoekpunt gevorm. Die twee ver (nie-aangrensende) binnehoeke is 80° en 33°. Bepaal die grootte van die buitehoek.', checkMode: 'auto', options: ['47°', '113°', '80°', '67°'], correctIndex: 1, explanation: 'Die buitehoekstelling sê dat \'n buitehoek gelyk is aan die som van die twee ver binnehoeke.\nBuitehoek = 80° + 33° = 113° (47° is die verskil, nie die som nie, van die twee hoeke; 80° kopieer net een ver hoek; 67° neem verkeerdelik die supplement van die korrekte antwoord met 180°.)', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 116,43.3" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">80°</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">33°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek getoon, is \'n buitehoek 96°. Een van die ver binnehoeke is 37°. Bepaal die grootte van die ander ver binnehoek.', checkMode: 'auto', options: ['133°', '37°', '59°', '48°'], correctIndex: 2, explanation: 'Volgens die buitehoekstelling is die buitehoek gelyk aan die som van die twee ver binnehoeke.\nAnder ver hoek = 96° − 37° = 59° (133° tel verkeerdelik die twee gegewe waardes op; 37° kopieer net die bekende ver hoek; 48° is die helfte van die buitehoek.)', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 146,35.6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#ea580c" font-weight="700">?</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">37°</text><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#2563eb" font-weight="700">96°</text></svg>' },
        { difficulty: 'Hard', question: 'In driehoek ABC getoon, is die buitehoek by C 118°, en die binnehoek by A is 41°. Bepaal die grootte van die binnehoek by B.', checkMode: 'auto', options: ['62°', '41°', '49°', '77°'], correctIndex: 3, explanation: 'Die binnehoek by C = 180° − 118° = 62° (hoeke op \'n reguit lyn).\nDeur die hoeksom van \'n driehoek te gebruik: A + B + C = 180°.\n41° + B + 62° = 180° → B = 180° − 41° − 62° = 77° (62° stop nadat hoek C bereken is, en vergeet om die driehoek-hoeksom te voltooi; 41° kopieer hoek A; 49° neem verkeerdelik ʼn 90°-hoek by C aan.)', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 90,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><text x="25" y="152" font-size="12" fill="#374151" font-weight="600">A</text><text x="160" y="152" font-size="12" fill="#374151" font-weight="600">C</text><text x="88" y="22" font-size="12" fill="#374151" font-weight="600">B</text><path d="M 55,140 A 24,24 0 0 1 47,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">41°</text><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#2563eb" font-weight="700">118°</text><path d="M 90,45 A 16,16 0 0 1 105,60" fill="none" stroke="#ea580c" stroke-width="2"/><text x="103" y="52" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },

        // Blok 3 — Vierhoek-hoeksom / eienskappe (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In die vierhoek getoon, is drie van die hoeke 75°, 105° en 90°. Bepaal die grootte van die vierde hoek.', checkMode: 'auto', options: ['90°', '270°', '180°', '105°'], correctIndex: 0, explanation: 'Die hoeke van \'n vierhoek tel op tot 360°.\nVierde hoek = 360° − 75° − 105° − 90° = 90° (270° tel die drie bekende hoeke op in plaas daarvan om van 360° af te trek; 180° vergeet om die 90°-hoek af te trek; 105° kopieer net ʼn bekende hoek.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="60.6,140 147,140 169.4,56.6 88.8,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="48.4" y="150.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">75°</text><text x="155.7" y="153.4" font-size="13" fill="#2563eb" font-weight="700">105°</text><text x="182.6" y="47.6" font-size="13" fill="#2563eb" font-weight="700">90°</text><text x="81.9" y="20.6" font-size="15" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die parallelogram getoon, is een hoek 97°. Bepaal die grootte van \'n aangrensende hoek (opeenvolgende hoeke in \'n parallelogram is supplementêr).', checkMode: 'auto', options: ['97°', '83°', '263°', '90°'], correctIndex: 1, explanation: 'Opeenvolgende (mede-binne) hoeke in \'n parallelogram is supplementêr — hulle tel op tot 180°.\nAangrensende hoek = 180° − 97° = 83° (97° verwar die aangrensende hoek met ʼn teenoorstaande, gelyke hoek; 263° gebruik verkeerdelik 360° in plaas van 180°; 90° neem verkeerdelik ʼn regte hoek aan.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">97°</text><text x="150" y="122" font-size="14" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In die trapesium getoon, is een paar sye parallel. Die hoek op een parallelle sy is 97°. Bepaal die mede-binnehoek op dieselfde skuinssy (die hoeke tussen die parallelle sye op dieselfde skuinssy tel op tot 180°).', checkMode: 'auto', options: ['97°', '263°', '83°', '90°'], correctIndex: 2, explanation: 'Mede-binnehoeke tussen parallelle lyne tel op tot 180°.\nMede-binnehoek = 180° − 97° = 83° (97° behandel die hoeke verkeerdelik as gelyk in plaas van supplementêr; 263° gebruik verkeerdelik 360°; 90° neem verkeerdelik ʼn regte hoek aan.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,135 190,135 155,45 65,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100,135 l6,0 M 103,132 l0,6" stroke="#16a34a" stroke-width="1.5"/><path d="M 100,45 l6,0 M 103,42 l0,6" stroke="#16a34a" stroke-width="1.5"/><text x="45" y="122" font-size="13" fill="#2563eb" font-weight="700">97°</text><text x="145" y="65" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Hard', question: 'In die vierhoek getoon, is die vier hoeke in die verhouding 3 : 4 : 5 : 6. Bepaal die grootte van die grootste hoek.', checkMode: 'auto', options: ['100°', '80°', '240°', '120°'], correctIndex: 3, explanation: 'Laat die hoeke 3x, 4x, 5x en 6x wees.\n3x + 4x + 5x + 6x = 360° → 18x = 360° → x = 20°.\nGrootste hoek = 6x = 6 × 20° = 120° (100° is die hoek 5x; 80° is die hoek 4x; 240° verdubbel verkeerdelik die korrekte antwoord.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="61.7,140 168.3,140 149.8,35 122.3,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="49.3" y="150.2" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3x</text><text x="178.4" y="152.4" font-size="13" fill="#2563eb" font-weight="700">4x</text><text x="156.5" y="20.5" font-size="13" fill="#2563eb" font-weight="700">5x</text><text x="121.3" y="19" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">6x = ?</text></svg>' },

        // Blok 4 — Veelhoek-binnehoeksom via (n-2)×180 (Medium/Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Bepaal die som van die binnehoeke van \'n negehoek (9 sye), deur die formule (n − 2) × 180° te gebruik.', checkMode: 'auto', options: ['1260°', '1620°', '2520°', '630°'], correctIndex: 0, explanation: 'Som van binnehoeke = (n − 2) × 180°.\nVir \'n negehoek, n = 9: (9 − 2) × 180° = 7 × 180° = 1260° (1620° vergeet om 2 van n af te trek; 2520° gebruik verkeerdelik 360° in plaas van 180°; 630° gebruik verkeerdelik 90° in plaas van 180°.)' },
        { difficulty: 'Medium', question: '\'n Reëlmatige tienhoek (10 sye) het al sy binnehoeke gelyk. Bepaal die grootte van elke binnehoek.', checkMode: 'auto', options: ['1440°', '144°', '36°', '90°'], correctIndex: 1, explanation: 'Som van binnehoeke = (n − 2) × 180° = (10 − 2) × 180° = 1440°.\nAangesien die tienhoek reëlmatig is, is elke hoek = 1440° ÷ 10 = 144° (1440° vergeet om deur die aantal sye te deel; 36° is die buitehoek, nie die binnehoek nie; 90° is ʼn ongerelateerde skatting.)' },
        { difficulty: 'Hard', question: '\'n Reëlmatige veelhoek het \'n binnehoeksom van 1440°. Gebruik die formule (n − 2) × 180° = 1440° om die aantal sye, n, te bepaal.', checkMode: 'auto', options: ['8', '11', '10', '6'], correctIndex: 2, explanation: '(n − 2) × 180° = 1440°\nn − 2 = 1440° ÷ 180° = 8\nn = 8 + 2 = 10 sye (8 vergeet om 2 weer by te tel; 11 en 6 is af-met-een foute.)' },
        { difficulty: 'Hard', question: 'In die sesshoek getoon, is vyf van die binnehoeke 110°, 130°, 125°, 115° en 100°. Bepaal die grootte van die sesde hoek.', checkMode: 'auto', options: ['580°', '620°', '240°', '140°'], correctIndex: 3, explanation: 'Som van binnehoeke van \'n sesshoek = (6 − 2) × 180° = 720°.\nSesde hoek = 720° − 110° − 130° − 125° − 115° − 100° = 140° (580° is die som van die vyf bekende hoeke, nie van 720° afgetrek nie; 620° trek net een hoek van 720° af; 240° vergeet om die 100°-hoek af te trek.)', diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="105,35 166,70 166,140 105,175 44,140 44,70" stroke="#0f1f3d" stroke-width="2" fill="none"/><text x="105" y="20" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">110°</text><text x="175" y="58" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">130°</text><text x="175" y="155" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">125°</text><text x="105" y="195" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">115°</text><text x="35" y="155" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100°</text><text x="35" y="58" font-size="16" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },

        // Blok 5 — Kongruente driehoek-voorwaardes (Medium/Medium/Hard)
        { difficulty: 'Medium', question: 'Zinhle vergelyk twee reghoekige driehoeke. Albei het dieselfde skuinssy en een ander ooreenstemmende sy. Watter kongruensievoorwaarde kan sy gebruik om te bewys die driehoeke is kongruent?', checkMode: 'auto', options: ['RSS', 'SSS', 'SHS', 'HHS'], correctIndex: 0, explanation: 'Vir reghoekige driehoeke bewys \'n gelyke regte hoek, gelyke skuinssy en een ander gelyke sy kongruensie volgens RSS (Regte hoek-Skuinssy-Sy).' },
        { difficulty: 'Medium', question: 'Tumelo meet al drie sye van twee driehoeke en vind dat elke paar ooreenstemmende sye gelyk is. Watter kongruensievoorwaarde kan hy gebruik om te bewys die driehoeke is kongruent?', checkMode: 'auto', options: ['SHS', 'SSS', 'HHS', 'RSS'], correctIndex: 1, explanation: 'Wanneer al drie pare ooreenstemmende sye gelyk is, is die driehoeke kongruent volgens SSS (Sy-Sy-Sy).' },
        { difficulty: 'Hard', question: 'In die diagram is driehoek PQR kongruent aan driehoek STU volgens SHS. In driehoek PQR is PQ = 7 cm, PR = 11 cm en die ingeslote hoek P = 62°. Bepaal die grootte van hoek S in driehoek STU.', checkMode: 'auto', options: ['118°', '28°', '62°', '31°'], correctIndex: 2, explanation: 'Aangesien die driehoeke kongruent is, is ooreenstemmende hoeke gelyk.\nHoek S stem ooreen met hoek P, dus hoek S = 62° (118° neem verkeerdelik die supplement van 62° met 180°; 28° behandel dit verkeerdelik as die komplement van 62°; 31° halveer verkeerdelik 62°.)', diagramSvg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 120,140 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="152" font-size="12" fill="#374151" font-weight="600">P</text><text x="122" y="152" font-size="12" fill="#374151" font-weight="600">Q</text><text x="35" y="36" font-size="12" fill="#374151" font-weight="600">R</text><text x="38" y="85" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">7 cm</text><text x="90" y="82" font-size="12" fill="#2563eb" font-weight="700">11 cm</text><path d="M 45,131 A 20,20 0 0 1 37,113" fill="none" stroke="#ea580c" stroke-width="2"/><text x="50" y="122" font-size="12" fill="#ea580c" font-weight="700">62°</text><polygon points="190,140 280,140 205,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="152" font-size="12" fill="#374151" font-weight="600">S</text><text x="282" y="152" font-size="12" fill="#374151" font-weight="600">T</text><text x="195" y="36" font-size="12" fill="#374151" font-weight="600">U</text><path d="M 205,131 A 20,20 0 0 1 197,113" fill="none" stroke="#ea580c" stroke-width="2"/><text x="210" y="122" font-size="13" fill="#ea580c" font-weight="700">?</text></svg>' },

        // Blok 6 — Gelykvormige driehoeke (Hard/Hard/Hard)
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het \'n syverhouding van 4 : 9. Die kleiner driehoek het \'n sy van 12 cm. Bepaal die lengte van die ooreenstemmende sy in die groter driehoek.', checkMode: 'auto', options: ['5,3 cm', '17 cm', '108 cm', '27 cm'], correctIndex: 3, explanation: 'Deur die verhouding 4 : 9 te gebruik, is die groter sy = 12 × (9 ÷ 4) = 27 cm (5,3 cm keer die verhouding om; 17 cm tel die verhoudingsverskil op in plaas van te skaleer; 108 cm vermenigvuldig met 9 in plaas van met 9/4.)' },
        { difficulty: 'Hard', question: 'Twee driehoeke het albei hoeke van 52° en 61°. Wat is die derde hoek in elke driehoek, en wat vertel dit ons van die driehoeke?', checkMode: 'auto', options: ['Derde hoek = 67°; die driehoeke is gelykvormig volgens HH aangesien al drie hoeke dan ooreenstem.', 'Derde hoek = 113°; die driehoeke is gelykvormig volgens HH.', 'Derde hoek = 128°; die driehoeke is gelykvormig volgens HH.', 'Derde hoek = 67°; die driehoeke is kongruent, nie net gelykvormig nie.'], correctIndex: 0, explanation: 'Aangesien twee pare ooreenstemmende hoeke gelyk is (52° en 61°), moet die derde hoek in elke driehoek ook gelyk wees: 180° − 52° − 61° = 67°. Al drie hoeke stem ooreen, dus is die driehoeke gelykvormig volgens HH (Hoek-Hoek) — ooreenstemmende hoeke alleen bewys nie kongruensie nie.' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het oppervlaktes in die verhouding 25 : 64. Bepaal die verhouding van hul ooreenstemmende sylengtes.', checkMode: 'auto', options: ['25 : 64', '5 : 8', '625 : 4096', '50 : 128'], correctIndex: 1, explanation: 'Aangesien oppervlakteverhouding = (syverhouding)², is die syverhouding = √25 : √64 = 5 : 8 (25 : 64 verwar die oppervlakteverhouding met die syverhouding; 625 : 4096 kwadreer weer in plaas daarvan om die vierkantswortel te neem; 50 : 128 is ʼn ongerelateerde bewerking.)' },
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
