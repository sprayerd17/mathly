import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (decimal place value roles) ───────────────────────────────
// units       → blue    (#2563eb)
// tenths      → green   (#16a34a)
// hundredths  → red     (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

// ─── Gedeelde "Kyk vorentoe"-verrykingsbanier ─────────────────────────────
// CAPS Intermediêre Fase Graad 5 sluit nie persentasies in nie. Die Graad
// 6-verduidelikingsnotas stel dit duidelik: "Persentasies is ʼn nuwe
// onderwerp vir Graad 6-leerders." Graad 5 se eie breuke-verduidelikings-
// notas sê eweneens "Because learners will only work with decimal
// fractions in Grade 6...", en Graad 5 se tydtoekenningstabel het geen
// "Persentasies"- (of selfs "Desimale breuke"-) onderwerplyn nie, anders
// as Graad 6 se tabel wat albei apart lys. Behou hier as duidelik gemerkte
// verryking omdat dit akkurate, goed-opgeboude inhoud is.
const lookingAhead = (title: string, body: string) =>
  `<div style="background:#faf5ff;border:1.5px solid #d8b4fe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
  `<p style="font-weight:700;color:#7c3aed;margin-bottom:6px;">🔭 Kyk vorentoe: ${title}</p>` +
  `<p style="margin:0;color:#581c87;">${body}</p>` +
  `</div>`

export const topicData: TopicData = {
  title: 'Desimale Breuke',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — BEGRIP VAN DESIMALE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'understanding-decimal-fractions',
      title: 'Begrip van Desimale Breuke',
      icon: '.',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Desimale breuk</strong> is ʼn manier om ʼn getal te skryf wat ʼn deel kleiner as een geheel insluit. Die <strong>desimale komma</strong> skei die heelgetaldeel (aan die linkerkant) van die breukdeel (aan die regterkant). Desimale breuke is bloot ʼn ander manier om gewone breuke te skryf waarvan die noemers 10, 100 of 1 000 is — hulle beteken almal dieselfde hoeveelheid.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('ene')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tiendes')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('honderdstes')}</span>` +
        `</div>` +

        // ── Place value table ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Plekwaardetabel</p>` +
        `<p style="margin-bottom:12px;">Elke syfer in ʼn desimale breuk sit in ʼn spesifieke <strong>plek</strong>, en daardie plek vertel jou sy waarde. Bestudeer die getal <strong>3,47</strong> in die tabel hieronder:</p>` +

        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="width:100%;border-collapse:collapse;min-width:280px;">` +
        `<thead><tr>` +
        `<th style="background:#eff6ff;color:#2563eb;border:2px solid #bfdbfe;padding:10px 16px;text-align:center;font-size:14px;font-weight:700;border-radius:8px 0 0 0;">Ene</th>` +
        `<th style="background:#f8fafc;color:#374151;border:2px solid #e2e8f0;padding:10px 16px;text-align:center;font-size:14px;font-weight:700;">,</th>` +
        `<th style="background:#f0fdf4;color:#16a34a;border:2px solid #bbf7d0;padding:10px 16px;text-align:center;font-size:14px;font-weight:700;">Tiendes</th>` +
        `<th style="background:#fef2f2;color:#dc2626;border:2px solid #fecaca;padding:10px 16px;text-align:center;font-size:14px;font-weight:700;border-radius:0 8px 0 0;">Honderdstes</th>` +
        `</tr></thead>` +
        `<tbody>` +
        `<tr>` +
        `<td style="background:#eff6ff;color:#2563eb;border:2px solid #bfdbfe;padding:12px 16px;text-align:center;font-size:1.5em;font-weight:700;">3</td>` +
        `<td style="background:#f8fafc;color:#374151;border:2px solid #e2e8f0;padding:12px 16px;text-align:center;font-size:1.5em;font-weight:700;">,</td>` +
        `<td style="background:#f0fdf4;color:#16a34a;border:2px solid #bbf7d0;padding:12px 16px;text-align:center;font-size:1.5em;font-weight:700;">4</td>` +
        `<td style="background:#fef2f2;color:#dc2626;border:2px solid #fecaca;padding:12px 16px;text-align:center;font-size:1.5em;font-weight:700;">7</td>` +
        `</tr>` +
        `<tr>` +
        `<td style="background:#eff6ff;color:#2563eb;border:2px solid #bfdbfe;padding:8px 16px;text-align:center;font-size:12px;font-weight:600;border-radius:0 0 0 8px;">3 ene</td>` +
        `<td style="background:#f8fafc;border:2px solid #e2e8f0;padding:8px 16px;"></td>` +
        `<td style="background:#f0fdf4;color:#16a34a;border:2px solid #bbf7d0;padding:8px 16px;text-align:center;font-size:12px;font-weight:600;">4 tiendes = 4/10</td>` +
        `<td style="background:#fef2f2;color:#dc2626;border:2px solid #fecaca;padding:8px 16px;text-align:center;font-size:12px;font-weight:600;border-radius:0 0 8px 0;">7 honderdstes = 7/100</td>` +
        `</tr>` +
        `</tbody>` +
        `</table>` +
        `</div>` +

        // ── Key terms ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Ene</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die heelgetaldeel — die syfer aan die <strong>linkerkant</strong> van die desimale komma. In ${bl('3')},47 is die ene-syfer <strong>${bl('3')}</strong>.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Tiendes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die <strong>eerste</strong> syfer na die desimale komma. Een tiende = 1/10 = 0,1. In 3,${gr('4')}7 is die tiendes-syfer <strong>${gr('4')}</strong>.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Honderdstes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die <strong>tweede</strong> syfer na die desimale komma. Een honderdste = 1/100 = 0,01. In 3,4${re('7')} is die honderdstes-syfer <strong>${re('7')}</strong>.</p>` +
        `</div>` +

        `</div>` +

        // ── How to read decimal fractions ─────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om desimale breuke hardop te lees</p>` +
        `<p style="margin-bottom:12px;">Sê eers die heelgetaldeel, dan <strong>"komma"</strong>, en lees dan die syfers na die desimale komma soos ʼn heelgetal, gevolg deur die pleknaam van die <em>laaste</em> syfer.</p>` +

        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;flex-wrap:wrap;">` +
        `<span style="font-size:1.15em;font-weight:700;color:#374151;min-width:60px;">${bl('3')},${gr('4')}${re('7')}</span>` +
        `<span style="color:#9ca3af;font-size:1.2em;">→</span>` +
        `<span style="color:#374151;font-size:14px;">"<strong>${bl('drie')}</strong> komma <strong>${re('sewe-en-veertig honderdstes')}</strong>"</span>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;flex-wrap:wrap;">` +
        `<span style="font-size:1.15em;font-weight:700;color:#374151;min-width:60px;">${bl('0')},${gr('6')}</span>` +
        `<span style="color:#9ca3af;font-size:1.2em;">→</span>` +
        `<span style="color:#374151;font-size:14px;">"<strong>${gr('ses tiendes')}</strong>" — geen ene nie, dus sê ons nul of noem net die tiendes</span>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;flex-wrap:wrap;">` +
        `<span style="font-size:1.15em;font-weight:700;color:#374151;min-width:60px;">${bl('1')},${gr('0')}${re('5')}</span>` +
        `<span style="color:#9ca3af;font-size:1.2em;">→</span>` +
        `<span style="color:#374151;font-size:14px;">"<strong>${bl('een')}</strong> komma <strong>${re('vyf honderdstes')}</strong>" — die ${gr('0')} is ʼn <em>plekhouer</em> in die tiendes-posisie</span>` +
        `</div>` +

        `</div>` +

        // ── Decimal ↔ common fraction connection ─────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Desimale breuke en gewone breuke</p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 16px;min-width:160px;text-align:center;flex:1;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Tiendes → 1 desimale plek</p>` +
        `<p style="font-size:1.2em;font-weight:700;margin:0;color:#374151;">${gr('7')}/10 = ${bl('0')},${gr('7')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 16px;min-width:160px;text-align:center;flex:1;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Honderdstes → 2 desimale plekke</p>` +
        `<p style="font-size:1.2em;font-weight:700;margin:0;color:#374151;">${re('47')}/100 = ${bl('0')},${gr('4')}${re('7')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 16px;min-width:160px;text-align:center;flex:1;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Gemengde getal</p>` +
        `<p style="font-size:1.2em;font-weight:700;margin:0;color:#374151;">${bl('3')} ${re('8')}/100 = ${bl('3')},${gr('0')}${re('8')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Let wel: die plekhouer-nul</p>` +
        `<p style="margin:0;color:#78350f;">Wanneer daar geen ${gr('tiendes')} is nie, maar daar <em>wel</em> ${re('honderdstes')} is, <strong>moet</strong> jy ʼn <strong>0</strong> in die tiendes-posisie skryf. Vyf komma agt honderdstes is ${bl('5')},${gr('0')}${re('8')} — <em>nie</em> 5,8 nie, wat vyf komma agt <em>tiendes</em> sou beteken.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Identify place value in 2.46 ──────────────────────────
        {
          question: 'Skryf die desimale breuk 2,46 in woorde en gee die waarde van elke syfer.',
          answer: `"${bl('Twee')} komma ${re('ses-en-veertig honderdstes')}". ${bl('Ene')}: ${bl('2')}, ${gr('Tiendes')}: ${gr('4')}, ${re('Honderdstes')}: ${re('6')}`,
          steps: [
            `Identifiseer die ${bl('ene')}-syfer: <strong>${bl('2')}</strong> is aan die linkerkant van die desimale komma. Sy waarde is <strong>${bl('2')}</strong> (twee heles).`,
            `Identifiseer die ${gr('tiendes')}-syfer: <strong>${gr('4')}</strong> is die eerste syfer na die desimale komma. Sy waarde is <strong>${gr('4')}/10 = ${gr('0,4')}</strong> (vier tiendes).`,
            `Identifiseer die ${re('honderdstes')}-syfer: <strong>${re('6')}</strong> is die tweede syfer na die desimale komma. Sy waarde is <strong>${re('6')}/100 = ${re('0,06')}</strong> (ses honderdstes).`,
            `Lees eers die heelgetaldeel: "${bl('twee')}", dan sê "komma", dan lees die desimale syfers soos ʼn heelgetal met die pleknaam van die laaste syfer: "${re('ses-en-veertig honderdstes')}".`,
            `<strong>Antwoord in woorde:</strong> "${bl('twee')} komma ${re('ses-en-veertig honderdstes')}" ✓`,
          ],
        },

        // ── Example 2: Convert common fractions to decimal fractions ──────────
        {
          question: 'Skryf elk van die volgende as ʼn desimale breuk:  a) 7/10 &nbsp; b) 53/100 &nbsp; c) 4 9/100',
          answer: `a) ${bl('0')},${gr('7')} &nbsp;&nbsp; b) ${bl('0')},${gr('5')}${re('3')} &nbsp;&nbsp; c) ${bl('4')},${gr('0')}${re('9')}`,
          steps: [
            `<strong>a) 7/10 — tiendes → 1 desimale plek.</strong> Skryf ${bl('0')} in die ene-plek en ${gr('7')} in die tiendes-plek: ${bl('0')},${gr('7')}`,
            `<strong>b) 53/100 — honderdstes → 2 desimale plekke.</strong> 53 honderdstes = 5 tiendes en 3 honderdstes. Skryf ${bl('0')} in ene, ${gr('5')} in tiendes, ${re('3')} in honderdstes: ${bl('0')},${gr('5')}${re('3')}`,
            `<strong>c) 4 9/100 — gemengde getal.</strong> Die heelgetaldeel is ${bl('4')}. 9 honderdstes benodig 2 desimale plekke maar daar is <em>geen tiendes</em> nie — skryf ${gr('0')} as ʼn plekhouer in die tiendes-posisie: ${bl('4')},${gr('0')}${re('9')}`,
            `<strong>Kontroleer:</strong> ${bl('0')},${gr('7')} → 7 tiendes ✓ &nbsp; ${bl('0')},${gr('5')}${re('3')} → 53 honderdstes ✓ &nbsp; ${bl('4')},${gr('0')}${re('9')} → 4 komma 9 honderdstes ✓`,
          ],
        },

        // ── Example 3: Words → decimal fraction and common fraction ───────────
        {
          question: 'Skryf "ses komma drie honderdstes" as ʼn desimale breuk en as ʼn gemengde breuk.',
          answer: `Desimaal: ${bl('6')},${gr('0')}${re('3')} &nbsp;&nbsp; Gemengde breuk: ${bl('6')} ${re('3')}/100`,
          steps: [
            `Identifiseer die heelgetaldeel: "ses" → skryf ${bl('6')} in die ene-plek.`,
            `Identifiseer die breukdeel: "drie honderdstes" → ${re('3')}/100. Honderdstes benodig altyd <strong>2 desimale plekke</strong>.`,
            `Ons het 3 honderdstes maar <em>geen tiendes</em> nie. Ons moet ʼn <strong>${gr('0')} as plekhouer</strong> in die tiendes-posisie plaas sodat die syfer 3 in die honderdstes-kolom land: ${bl('6')},${gr('0')}${re('3')}`,
            `Skryf as ʼn gemengde breuk: heelgetaldeel + breukdeel = ${bl('6')} ${re('3')}/100`,
            `<strong>Kontroleer:</strong> ${bl('6')},${gr('0')}${re('3')} → 6 ene, 0 tiendes, 3 honderdstes = "ses komma drie honderdstes" ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Skryf 9/10 as ʼn desimale breuk.',
          answer: '0,9',
          checkMode: 'auto',
          correctAnswer: '0,9',
          correctAnswers: ['0.9', '0,9'],
          explanation: '9/10 beteken 9 tiendes. Tiendes → 1 desimale plek.\nSkryf 0 in die ene-plek en 9 in die tiendes-plek: 0,9 ✓',
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Beantwoord elk van die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skryf 0,5 as ʼn gewone breuk in eenvoudigste vorm.',
              correctAnswer: '1/2',
              correctAnswers: ['1/2', '5/10'],
              explanation: '0,5 beteken 5 tiendes = 5/10.\nVereenvoudig: 5/10 = 1/2 ✓',
            },
            {
              label: 'b) Skryf "agt honderdstes" as ʼn desimale breuk.',
              correctAnswer: '0,08',
              correctAnswers: ['0.08', '0,08'],
              explanation: '8 honderdstes → 2 desimale plekke. Geen tiendes nie, dus plaas ʼn 0 in die tiendes-posisie as plekhouer.\nAntwoord: 0,08 ✓',
            },
            {
              label: 'c) Wat is die waarde van die syfer 7 in die desimale breuk 3,07?',
              correctAnswer: '7 hundredths',
              correctAnswers: ['7 hundredths', '7 honderdstes', '7/100', '0.07', '0,07'],
              explanation: 'In 3,07:\n• 3 is in die ene-plek\n• 0 is in die tiendes-plek (plekhouer)\n• 7 is in die honderdstes-plek\nWaarde van 7 = 7 honderdstes = 7/100 = 0,07 ✓',
            },
          ],
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Stuk lint is 2,45 meter lank.\n\na) Skryf 2,45 as ʼn gemengde breuk.\nb) Wat is die waarde van die syfer 4?\nc) Wat is die waarde van die syfer 5?\nd) ʼn Tweede stuk lint word beskryf as "twee komma drie tiendes meter". Skryf hierdie lengte as ʼn desimale breuk.',
          answer: 'a) 2 45/100 (vereenvoudig: 2 9/20)\nb) 4 tiendes = 4/10 = 0,4 m\nc) 5 honderdstes = 5/100 = 0,05 m\nd) 2,3',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat desimale breuke verduidelik, insluitend plekwaarde van tiendes en honderdstes, hoe om desimale te lees en te skryf, en hoe desimale verband hou met gewone breuke met noemers 10 en 100" />',

      diagramPlaceholder: 'Plekwaardetabel wat ene in blou, tiendes in groen en honderdstes in rooi toon met die voorbeeldgetal 3,47 kleurgekodeer in elke kolom en die breukekwivalent onder elke syfer getoon',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="25" width="55" height="50" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/><rect x="73" y="25" width="20" height="50" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/><rect x="98" y="25" width="55" height="50" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5"/><rect x="158" y="25" width="55" height="50" fill="#fef2f2" stroke="#dc2626" stroke-width="2.5"/><text x="42" y="18" font-weight="700" font-size="10" text-anchor="middle" fill="#2563eb">ENE</text><text x="125" y="18" font-weight="700" font-size="10" text-anchor="middle" fill="#16a34a">TIENDES</text><text x="185" y="18" font-weight="700" font-size="8" text-anchor="middle" fill="#dc2626">HONDERDSTES</text><text x="42" y="58" font-weight="700" font-size="26" text-anchor="middle" fill="#2563eb">3</text><text x="83" y="58" font-weight="700" font-size="26" text-anchor="middle" fill="#374151">,</text><text x="125" y="58" font-weight="700" font-size="26" text-anchor="middle" fill="#16a34a">4</text><text x="185" y="58" font-weight="700" font-size="26" text-anchor="middle" fill="#dc2626">7</text><text x="42" y="90" font-size="11" text-anchor="middle" fill="#374151">3 ene</text><text x="125" y="90" font-size="11" text-anchor="middle" fill="#374151">4/10</text><text x="185" y="90" font-size="11" text-anchor="middle" fill="#374151">7/100</text><text x="110" y="120" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">3,47 = 3 + 4/10 + 7/100</text></svg>',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — VERGELYK EN ORDEN DESIMALE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering-decimals',
      title: 'Vergelyk en Orden Desimale Breuke',
      icon: '<',
      explanation:
        `<p style="margin-bottom:16px;">Om desimale breuke te vergelyk, gebruik ons <strong>plekwaarde</strong> — presies dieselfde benadering as om heelgetalle te vergelyk. Begin altyd by die <strong>grootste plekwaarde</strong> (ene) en beweeg regs een kolom op ʼn slag totdat jy twee syfers vind wat verskil.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('ene')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tiendes')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('honderdstes')}</span>` +
        `</div>` +

        // ── Comparison steps ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Om twee desimale breuke te vergelyk: stap vir stap</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Lyn</strong> die desimale kommas op. Voeg slot-nulle by indien nodig sodat albei getalle dieselfde aantal desimale plekke het. (Slot-nulle verander nie die waarde nie — 0,7 = 0,70.)</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vergelyk ${bl('ene')}.</strong> Die groter ene-syfer beteken die groter getal. As hulle verskil — stop hier, jy het jou antwoord.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vergelyk ${gr('tiendes')}.</strong> As die ene gelyk is, beteken die groter tiendes-syfer die groter getal. As hulle verskil — stop hier.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vergelyk ${re('honderdstes')}.</strong> As beide ene en tiendes gelyk is, vergelyk die honderdstes-syfers.</p>` +
        `</div>` +

        `</div>` +

        // ── Symbols ───────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Vergelykingsimbole</p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 18px;text-align:center;min-width:120px;flex:1;">` +
        `<p style="font-size:1.8em;font-weight:700;color:#16a34a;margin-bottom:4px;">&gt;</p>` +
        `<p style="font-size:13px;color:#374151;font-weight:600;margin-bottom:2px;">Groter as</p>` +
        `<p style="font-size:12px;color:#6b7280;margin:0;">0,8 &gt; 0,5</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 18px;text-align:center;min-width:120px;flex:1;">` +
        `<p style="font-size:1.8em;font-weight:700;color:#dc2626;margin-bottom:4px;">&lt;</p>` +
        `<p style="font-size:13px;color:#374151;font-weight:600;margin-bottom:2px;">Kleiner as</p>` +
        `<p style="font-size:12px;color:#6b7280;margin:0;">0,3 &lt; 0,9</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 18px;text-align:center;min-width:120px;flex:1;">` +
        `<p style="font-size:1.8em;font-weight:700;color:#2563eb;margin-bottom:4px;">=</p>` +
        `<p style="font-size:13px;color:#374151;font-weight:600;margin-bottom:2px;">Gelyk aan</p>` +
        `<p style="font-size:12px;color:#6b7280;margin:0;">0,5 = 0,50</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Algemene fout: meer syfers beteken NIE ʼn groter getal nie</p>` +
        `<p style="margin:0;color:#78350f;">Baie leerders dink <strong>0,65 &gt; 0,7</strong> omdat 65 groter as 7 lyk. Dit is <strong>verkeerd.</strong> Vergelyk altyd plek vir plek van links af. In 0,7 is die ${gr('tiendes')}-syfer <strong>${gr('7')}</strong>. In 0,65 is die ${gr('tiendes')}-syfer net <strong>${gr('6')}</strong>. Aangesien ${gr('7')} &gt; ${gr('6')}, het ons <strong>0,7 &gt; 0,65</strong> ✓</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 4: Compare 0.7 and 0.65 ──────────────────────────────────
        {
          question: 'Gebruik > of < om 0,7 en 0,65 te vergelyk.',
          answer: `${bl('0')},${gr('7')}${re('0')} &gt; ${bl('0')},${gr('6')}${re('5')}`,
          steps: [
            `Skryf albei getalle met 2 desimale plekke sodat hulle maklik kolom vir kolom vergelyk kan word:<br>${bl('0')},${gr('7')}${re('0')} &nbsp; en &nbsp; ${bl('0')},${gr('6')}${re('5')}`,
            `<strong>Vergelyk ${bl('ene')}:</strong> albei getalle het ${bl('0')} ene. Gelyk — gaan na tiendes.`,
            `<strong>Vergelyk ${gr('tiendes')}:</strong> eerste getal het ${gr('7')} tiendes; tweede getal het ${gr('6')} tiendes. Aangesien ${gr('7')} &gt; ${gr('6')}, is die <strong>eerste getal groter</strong>. Ons kan hier stop.`,
            `Ons hoef nie ${re('honderdstes')} te vergelyk nie omdat die ${gr('tiendes')}-syfers reeds verskil.`,
            `<strong>Antwoord:</strong> ${bl('0')},${gr('7')} &gt; ${bl('0')},${gr('6')}${re('5')} ✓ (Al het 0,65 twee desimale syfers, is sy tiendes-syfer kleiner.)`,
          ],
        },

        // ── Example 5: Order 4 decimals from smallest to largest ──────────────
        {
          question: 'Orden van kleinste na grootste: 0,8, 1,3, 0,35, 1,03',
          answer: `${bl('0')},${gr('3')}${re('5')} &lt; ${bl('0')},${gr('8')}${re('0')} &lt; ${bl('1')},${gr('0')}${re('3')} &lt; ${bl('1')},${gr('3')}${re('0')}`,
          steps: [
            `Skryf al die getalle met 2 desimale plekke sodat elke kolom oplyn:<br>${bl('0')},${gr('8')}${re('0')} &nbsp;|&nbsp; ${bl('1')},${gr('3')}${re('0')} &nbsp;|&nbsp; ${bl('0')},${gr('3')}${re('5')} &nbsp;|&nbsp; ${bl('1')},${gr('0')}${re('3')}`,
            `<strong>Vergelyk eers ${bl('ene')}.</strong> Getalle met ${bl('0')} ene: 0,80 en 0,35. Getalle met ${bl('1')} eenheid: 1,30 en 1,03. Die groep met 0 ene is kleiner, dus kom daardie twee eerste.`,
            `<strong>Vergelyk die twee getalle met ${bl('0')} ene</strong> — kyk na ${gr('tiendes')}: 0,${gr('8')}0 het ${gr('8')} tiendes; 0,${gr('3')}5 het ${gr('3')} tiendes. ${gr('3')} &lt; ${gr('8')}, dus 0,35 &lt; 0,80.`,
            `<strong>Vergelyk die twee getalle met ${bl('1')} eenheid</strong> — kyk na ${gr('tiendes')}: 1,${gr('3')}0 het ${gr('3')} tiendes; 1,${gr('0')}3 het ${gr('0')} tiendes. ${gr('0')} &lt; ${gr('3')}, dus 1,03 &lt; 1,30.`,
            `<strong>Volgorde van kleinste na grootste:</strong> 0,35 &lt; 0,80 &lt; 1,03 &lt; 1,30<br>Geskryf sonder slot-nulle: <strong>0,35, 0,8, 1,03, 1,3</strong> ✓`,
          ],
        },

        // ── Example 6: Order 4 decimals from largest to smallest ─────────────
        {
          question: 'Orden van grootste na kleinste: 2,5, 2,05, 0,52, 5,2',
          answer: `${bl('5')},${gr('2')}${re('0')} &gt; ${bl('2')},${gr('5')}${re('0')} &gt; ${bl('2')},${gr('0')}${re('5')} &gt; ${bl('0')},${gr('5')}${re('2')}`,
          steps: [
            `Skryf al die getalle met 2 desimale plekke:<br>${bl('2')},${gr('5')}${re('0')} &nbsp;|&nbsp; ${bl('2')},${gr('0')}${re('5')} &nbsp;|&nbsp; ${bl('0')},${gr('5')}${re('2')} &nbsp;|&nbsp; ${bl('5')},${gr('2')}${re('0')}`,
            `<strong>Vergelyk eers ${bl('ene')}.</strong> ${bl('5')},20 het die grootste ene-syfer (${bl('5')}) → dit kom eerste. ${bl('0')},52 het die kleinste ene-syfer (${bl('0')}) → dit kom laaste.`,
            `<strong>Vergelyk die twee oorblywende getalle</strong> wat albei ${bl('2')} ene het — kyk na ${gr('tiendes')}: ${bl('2')},${gr('5')}0 het ${gr('5')} tiendes; ${bl('2')},${gr('0')}5 het ${gr('0')} tiendes. ${gr('5')} &gt; ${gr('0')}, dus 2,50 &gt; 2,05.`,
            `Volgorde van grootste na kleinste: 5,20 &gt; 2,50 &gt; 2,05 &gt; 0,52`,
            `<strong>Antwoord:</strong> 5,2, 2,5, 2,05, 0,52 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Watter is groter: 0,9 of 0,85?',
          answer: '0,9',
          checkMode: 'auto',
          correctAnswer: '0,9',
          correctAnswers: ['0.9', '0,9'],
          explanation: 'Skryf met 2 desimale plekke: 0,90 en 0,85.\nVergelyk ene: albei 0 — gelyk.\nVergelyk tiendes: 9 vs 8. Aangesien 9 > 8, kry ons 0,9 > 0,85 ✓',
        },

        // ── Q5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Beantwoord elk van die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skryf > , < of = :  1,4 __ 1,40',
              correctAnswer: '=',
              explanation: '1,40 het ʼn slot-nul wat nie die waarde verander nie.\n1,4 beteken 1 eenheid en 4 tiendes. 1,40 beteken ook 1 eenheid en 4 tiendes (plus 0 honderdstes).\nHulle is gelyk: 1,4 = 1,40 ✓',
            },
            {
              label: 'b) Skryf > , < of = :  0,63 __ 0,7',
              correctAnswer: '<',
              explanation: 'Skryf met 2 desimale plekke: 0,63 en 0,70.\nVergelyk ene: albei 0 — gelyk.\nVergelyk tiendes: 6 vs 7. Aangesien 6 < 7, kry ons 0,63 < 0,7 ✓',
            },
            {
              label: 'c) Orden van kleinste na grootste: 0,45, 0,5, 0,4, 0,54',
              correctAnswer: '0,4, 0,45, 0,5, 0,54',
              correctAnswers: ['0.4, 0.45, 0.5, 0.54', '0.4 0.45 0.5 0.54', '0.40, 0.45, 0.50, 0.54', '0,4, 0,45, 0,5, 0,54', '0,40, 0,45, 0,50, 0,54'],
              explanation: 'Skryf met 2 desimale plekke: 0,40, 0,45, 0,50, 0,54.\nAlmal het 0 ene.\nVergelyk tiendes: 0,40 en 0,45 het 4 tiendes (kleiner groep); 0,50 en 0,54 het 5 tiendes (groter groep).\nBinne die 4-tiendes-groep: 0,40 < 0,45 (honderdstes: 0 < 5).\nBinne die 5-tiendes-groep: 0,50 < 0,54 (honderdstes: 0 < 4).\nFinale volgorde: 0,4 < 0,45 < 0,5 < 0,54 ✓',
            },
          ],
        },

        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vier vriende gooi elkeen ʼn ander hoeveelheid vrugtesap uit. Hulle hoeveelhede in liter is: 1,25, 0,9, 1,2, 0,95.\n\na) Orden al vier hoeveelhede van minste na meeste.\nb) Watter vriend het die meeste vrugtesap uitgegooi?\nc) Hoeveel meer het die persoon wat die meeste uitgegooi het, uitgegooi in vergelyking met die persoon wat die minste uitgegooi het? Wys jou werk.',
          answer: 'a) 0,9 L, 0,95 L, 1,2 L, 1,25 L\nb) Die vriend wat 1,25 liter uitgegooi het, het die meeste uitgegooi.\nc) 1,25 − 0,9 = 0,35 liter meer\n\nWerk vir deel c:\n  1,25\n− 0,90\n  0,35',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om desimale breuke te vergelyk en te orden deur desimale kommas op te lyn en plek vir plek te vergelyk van ene na tiendes na honderdstes, insluitend ʼn uitgewerkte voorbeeld van die algemene wanopvatting dat meer syfers ʼn groter getal beteken" />',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — OPTEL EN AFTREK VAN DESIMALE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'adding-subtracting-decimals',
      title: 'Optel en Aftrek van Desimale Breuke',
      icon: '+',
      explanation:
        `<p style="margin-bottom:16px;">Optel en aftrek van desimale breuke werk <strong>presies soos optel en aftrek van heelgetalle</strong> — solank jy een goue reël volg: <strong>lyn altyd die desimale kommas op</strong> voordat jy begin. Sodra die desimale kommas belyn is, val elke syfer in sy korrekte kolom en kan jy optel of aftrek net soos jy met heelgetalle sou doen, met oordra of leen waar nodig.</p>` +

        // ── Colour key (section-specific) ─────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('desimale komma')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tiendes')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('honderdstes')}</span>` +
        `</div>` +

        // ── The golden rule ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die goue reël: lyn die desimale kommas op</p>` +
        `<p style="margin-bottom:12px;">Skryf jou getalle een onder die ander sodat elke desimale komma in dieselfde kolom is. Voeg slot-nulle by om leë plekke te vul sodat albei getalle dieselfde aantal desimale plekke het. Bring dan die desimale komma reguit af in jou antwoord.</p>` +

        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="border-collapse:collapse;margin:0 auto;min-width:240px;">` +
        `<thead><tr>` +
        `<th style="padding:6px 20px;text-align:center;font-size:13px;font-weight:700;color:#6b7280;border-bottom:1px solid #e2e8f0;">Ene</th>` +
        `<th style="padding:6px 12px;text-align:center;font-size:13px;font-weight:700;color:#dc2626;border-bottom:1px solid #e2e8f0;">Desimale komma</th>` +
        `<th style="padding:6px 20px;text-align:center;font-size:13px;font-weight:700;color:#16a34a;border-bottom:1px solid #e2e8f0;">Tiendes</th>` +
        `<th style="padding:6px 20px;text-align:center;font-size:13px;font-weight:700;color:#2563eb;border-bottom:1px solid #e2e8f0;">Honderdstes</th>` +
        `</tr></thead>` +
        `<tbody>` +
        `<tr>` +
        `<td style="padding:8px 20px;text-align:center;font-size:1.5em;font-weight:700;color:#374151;">2</td>` +
        `<td style="padding:8px 12px;text-align:center;font-size:1.5em;font-weight:700;color:#dc2626;">,</td>` +
        `<td style="padding:8px 20px;text-align:center;font-size:1.5em;font-weight:700;color:#16a34a;">4</td>` +
        `<td style="padding:8px 20px;text-align:center;font-size:1.5em;font-weight:700;color:#2563eb;">7</td>` +
        `</tr>` +
        `<tr>` +
        `<td style="padding:8px 20px;text-align:center;font-size:1.5em;font-weight:700;color:#374151;">1</td>` +
        `<td style="padding:8px 12px;text-align:center;font-size:1.5em;font-weight:700;color:#dc2626;">,</td>` +
        `<td style="padding:8px 20px;text-align:center;font-size:1.5em;font-weight:700;color:#16a34a;">8</td>` +
        `<td style="padding:8px 20px;text-align:center;font-size:1.5em;font-weight:700;color:#2563eb;">5</td>` +
        `</tr>` +
        `<tr style="border-top:2px solid #374151;">` +
        `<td colspan="4" style="padding:6px 20px;text-align:center;font-size:12px;color:#6b7280;">↑ Desimale kommas lyn op in een kolom — bring die komma reguit af in die antwoord.</td>` +
        `</tr>` +
        `</tbody>` +
        `</table>` +
        `</div>` +

        // ── Adding with carrying ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Optel van desimale breuke (met oordra)</p>` +
        `<p style="margin-bottom:12px;">Nadat jy die desimale kommas opgelyn het, tel op van <strong>regs na links</strong> — ${bl('honderdstes')} eerste, dan ${gr('tiendes')}, dan ene. As enige kolom se totaal 10 of meer is, skryf die enersyfer van die totaal en <strong>dra 1 oor</strong> na die volgende kolom links.</p>` +

        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Tel die ${bl('honderdstes')}-kolom op.</strong> As die totaal ≥ 10 is, skryf die enersyfer en dra 1 oor na die ${gr('tiendes')}-kolom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Tel die ${gr('tiendes')}-kolom op</strong> (plus enige oordrag). As die totaal ≥ 10 is, skryf die enersyfer en dra 1 oor na die ene-kolom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Tel die ene-kolom op</strong> (plus enige oordrag) en skryf die resultaat.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Bring die ${re('desimale komma')} reguit af</strong> in die antwoord — dit bly deurgaans in dieselfde kolom.</p>` +
        `</div>` +

        `</div>` +

        // ── Subtracting with borrowing ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Aftrek van desimale breuke (met leen)</p>` +
        `<p style="margin-bottom:12px;">Aftrekking werk ook van <strong>regs na links</strong>. As ʼn bosyfer <strong>kleiner</strong> is as die syfer daaronder, <strong>leen 1</strong> van die kolom links: verminder daardie syfer met 1 en tel 10 by die huidige kolom.</p>` +

        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Trek die ${bl('honderdstes')}-kolom af.</strong> As die bosyfer kleiner is, leen 1 van die ${gr('tiendes')}-kolom: verminder die tiendes-syfer met 1 en tel 10 by die honderdstes-syfer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Trek die ${gr('tiendes')}-kolom af</strong> (met die verminderde syfer indien jy geleen het). As dit steeds te klein is, leen van die ene-kolom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Trek die ene-kolom af</strong> (met die verminderde syfer indien jy geleen het).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Bring die ${re('desimale komma')} reguit af</strong> in die antwoord.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Let wel: verskillende aantal desimale plekke</p>` +
        `<p style="margin:0;color:#78350f;">Wanneer een getal meer desimale plekke as die ander het, voeg <strong>slot-nulle</strong> by voordat jy begin. Byvoorbeeld, 3,5 + 1,27 → herskryf 3,5 as 3,${gr('5')}${bl('0')} sodat albei twee desimale plekke het. Dit plaas ʼn syfer in elke kolom en voorkom foute.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 7: Simple addition, no carrying ──────────────────────────
        {
          question: 'Bereken 0,3 + 0,5.',
          answer: `0${re(',')}${gr('8')}`,
          steps: [
            `Lyn die ${re('desimale kommas')} op en tel op van regs na links:<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `&nbsp;&nbsp;0${re(',')}${gr('3')}<br>` +
            `+ 0${re(',')}${gr('5')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;</span>` +
            `</div>`,
            `<strong>${gr('Tiendes')}-kolom:</strong> ${gr('3')} + ${gr('5')} = ${gr('8')}. Die totaal is minder as 10, dus geen oordra nodig nie.`,
            `Bring die ${re('desimale komma')} reguit af.<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `&nbsp;&nbsp;0${re(',')}${gr('3')}<br>` +
            `+ 0${re(',')}${gr('5')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;&nbsp;0${re(',')}${gr('8')}</span>` +
            `</div>`,
            `<strong>Antwoord:</strong> 0${re(',')}${gr('3')} + 0${re(',')}${gr('5')} = 0${re(',')}${gr('8')} ✓`,
          ],
        },

        // ── Example 8: Addition with carrying in both columns ────────────────
        {
          question: 'Bereken 2,47 + 1,85.',
          answer: `4${re(',')}${gr('3')}${bl('2')}`,
          steps: [
            `Lyn die ${re('desimale kommas')} op:<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `&nbsp;&nbsp;2${re(',')}${gr('4')}${bl('7')}<br>` +
            `+ 1${re(',')}${gr('8')}${bl('5')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;</span>` +
            `</div>`,
            `<strong>${bl('Honderdstes')}-kolom:</strong> ${bl('7')} + ${bl('5')} = 12. Skryf ${bl('2')} in die honderdstes-plek en <strong>dra 1 oor</strong> na die ${gr('tiendes')}-kolom.`,
            `<strong>${gr('Tiendes')}-kolom:</strong> ${gr('4')} + ${gr('8')} + 1 (oordrag) = 13. Skryf ${gr('3')} in die tiendes-plek en <strong>dra 1 oor</strong> na die ene-kolom.`,
            `<strong>Ene-kolom:</strong> 2 + 1 + 1 (oordrag) = 4. Skryf 4 in die ene-plek.`,
            `Bring die ${re('desimale komma')} reguit af.<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `<span style="font-size:0.7em;color:#dc2626;">&nbsp;&nbsp;&nbsp;¹&thinsp;¹</span><br>` +
            `&nbsp;&nbsp;2${re(',')}${gr('4')}${bl('7')}<br>` +
            `+ 1${re(',')}${gr('8')}${bl('5')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;&nbsp;4${re(',')}${gr('3')}${bl('2')}</span>` +
            `</div>`,
            `<strong>Antwoord:</strong> 2${re(',')}${gr('4')}${bl('7')} + 1${re(',')}${gr('8')}${bl('5')} = 4${re(',')}${gr('3')}${bl('2')} ✓`,
          ],
        },

        // ── Example 9: Addition with a trailing zero ─────────────────────────
        {
          question: 'Bereken 3,6 + 1,27.',
          answer: `4${re(',')}${gr('8')}${bl('7')}`,
          steps: [
            `Die getalle het ʼn verskillende aantal desimale plekke (een teenoor twee). Voeg ʼn slot-nul by: herskryf 3,${gr('6')} as 3,${gr('6')}${bl('0')} sodat albei getalle twee desimale plekke het.`,
            `Lyn die ${re('desimale kommas')} op:<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `&nbsp;&nbsp;3${re(',')}${gr('6')}${bl('0')}<br>` +
            `+ 1${re(',')}${gr('2')}${bl('7')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;</span>` +
            `</div>`,
            `<strong>${bl('Honderdstes')}-kolom:</strong> ${bl('0')} + ${bl('7')} = ${bl('7')}. Geen oordra nodig nie.`,
            `<strong>${gr('Tiendes')}-kolom:</strong> ${gr('6')} + ${gr('2')} = ${gr('8')}. Geen oordra nodig nie.`,
            `<strong>Ene-kolom:</strong> 3 + 1 = 4. Bring die ${re('desimale komma')} af.<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `&nbsp;&nbsp;3${re(',')}${gr('6')}${bl('0')}<br>` +
            `+ 1${re(',')}${gr('2')}${bl('7')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;&nbsp;4${re(',')}${gr('8')}${bl('7')}</span>` +
            `</div>`,
            `<strong>Antwoord:</strong> 3${re(',')}${gr('6')} + 1${re(',')}${gr('2')}${bl('7')} = 4${re(',')}${gr('8')}${bl('7')} ✓`,
          ],
        },

        // ── Example 10: Simple subtraction, no borrowing ─────────────────────
        {
          question: 'Bereken 0,9 − 0,4.',
          answer: `0${re(',')}${gr('5')}`,
          steps: [
            `Lyn die ${re('desimale kommas')} op en trek af van regs na links:<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `&nbsp;&nbsp;0${re(',')}${gr('9')}<br>` +
            `− 0${re(',')}${gr('4')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;</span>` +
            `</div>`,
            `<strong>${gr('Tiendes')}-kolom:</strong> ${gr('9')} − ${gr('4')} = ${gr('5')}. Die bosyfer is groter, dus geen leen nodig nie.`,
            `Bring die ${re('desimale komma')} reguit af.<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `&nbsp;&nbsp;0${re(',')}${gr('9')}<br>` +
            `− 0${re(',')}${gr('4')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;&nbsp;0${re(',')}${gr('5')}</span>` +
            `</div>`,
            `<strong>Antwoord:</strong> 0${re(',')}${gr('9')} − 0${re(',')}${gr('4')} = 0${re(',')}${gr('5')} ✓`,
          ],
        },

        // ── Example 11: Subtraction with borrowing from units ────────────────
        {
          question: 'Bereken 1,3 − 0,7.',
          answer: `0${re(',')}${gr('6')}`,
          steps: [
            `Lyn die ${re('desimale kommas')} op:<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `&nbsp;&nbsp;1${re(',')}${gr('3')}<br>` +
            `− 0${re(',')}${gr('7')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;</span>` +
            `</div>`,
            `<strong>${gr('Tiendes')}-kolom:</strong> ${gr('3')} − ${gr('7')}: die bosyfer (${gr('3')}) is <em>kleiner</em> as die ondersyfer (${gr('7')}). Ons moet <strong>1 leen van die ene-kolom</strong>. Die ene-syfer verander van 1 na 0, en die tiendes-syfer word ${gr('3')} + 10 = ${gr('13')}.`,
            `Trek nou die ${gr('tiendes')} af: ${gr('13')} − ${gr('7')} = ${gr('6')}.`,
            `<strong>Ene-kolom</strong> (nou 0 na leen): 0 − 0 = 0. Bring die ${re('desimale komma')} af.<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `<span style="font-size:0.7em;color:#dc2626;">&nbsp;⁰&thinsp;¹³</span><br>` +
            `&nbsp;&nbsp;1${re(',')}${gr('3')}<br>` +
            `− 0${re(',')}${gr('7')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;&nbsp;0${re(',')}${gr('6')}</span>` +
            `</div>`,
            `<strong>Antwoord:</strong> 1${re(',')}${gr('3')} − 0${re(',')}${gr('7')} = 0${re(',')}${gr('6')} ✓`,
          ],
        },

        // ── Example 12: Subtraction with borrowing in both columns ───────────
        {
          question: 'Bereken 3,24 − 1,57.',
          answer: `1${re(',')}${gr('6')}${bl('7')}`,
          steps: [
            `Lyn die ${re('desimale kommas')} op:<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `&nbsp;&nbsp;3${re(',')}${gr('2')}${bl('4')}<br>` +
            `− 1${re(',')}${gr('5')}${bl('7')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;</span>` +
            `</div>`,
            `<strong>${bl('Honderdstes')}-kolom:</strong> ${bl('4')} − ${bl('7')}: bosyfer kleiner. <strong>Leen 1 van die ${gr('tiendes')}-kolom</strong>. Die tiendes-syfer verminder van ${gr('2')} na ${gr('1')}, en die honderdstes-syfer word ${bl('4')} + 10 = ${bl('14')}. Trek nou af: ${bl('14')} − ${bl('7')} = ${bl('7')}.`,
            `<strong>${gr('Tiendes')}-kolom</strong> (nou ${gr('1')} na leen): ${gr('1')} − ${gr('5')}: steeds te klein. <strong>Leen 1 van die ene-kolom</strong>. Die ene-syfer verminder van 3 na 2, en die tiendes-syfer word ${gr('1')} + 10 = ${gr('11')}. Trek nou af: ${gr('11')} − ${gr('5')} = ${gr('6')}.`,
            `<strong>Ene-kolom</strong> (nou 2 na leen): 2 − 1 = 1.`,
            `Bring die ${re('desimale komma')} af.<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `<span style="font-size:0.7em;color:#dc2626;">&nbsp;²&thinsp;¹¹&thinsp;¹⁴</span><br>` +
            `&nbsp;&nbsp;3${re(',')}${gr('2')}${bl('4')}<br>` +
            `− 1${re(',')}${gr('5')}${bl('7')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;&nbsp;1${re(',')}${gr('6')}${bl('7')}</span>` +
            `</div>`,
            `<strong>Antwoord:</strong> 3${re(',')}${gr('2')}${bl('4')} − 1${re(',')}${gr('5')}${bl('7')} = 1${re(',')}${gr('6')}${bl('7')} ✓ &nbsp;&nbsp; <em>Kontroleer: 1,67 + 1,57 = 3,24 ✓</em>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 0,4 + 0,3.',
          answer: '0,7',
          checkMode: 'auto',
          correctAnswer: '0,7',
          correctAnswers: ['0.7', '0,7'],
          explanation: 'Lyn die desimale kommas op.\nTiendes: 4 + 3 = 7. Geen oordra nodig nie.\nAntwoord: 0,7 ✓',
        },

        // ── Q8 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Beantwoord elk van die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bereken 1,65 + 2,78.',
              correctAnswer: '4,43',
              correctAnswers: ['4.43', '4,43'],
              explanation: 'Lyn die desimale kommas op: 1,65 + 2,78\nHonderdstes: 5 + 8 = 13. Skryf 3, dra 1 oor.\nTiendes: 6 + 7 + 1 = 14. Skryf 4, dra 1 oor.\nEne: 1 + 2 + 1 = 4.\nAntwoord: 4,43 ✓',
            },
            {
              label: 'b) Bereken 5,3 − 2,8.',
              correctAnswer: '2,5',
              correctAnswers: ['2.5', '2,5'],
              explanation: 'Lyn die desimale kommas op: 5,3 − 2,8\nTiendes: 3 − 8 — te klein, leen van ene. Ene word 4, tiendes word 13.\n13 − 8 = 5.\nEne: 4 − 2 = 2.\nAntwoord: 2,5 ✓',
            },
            {
              label: 'c) Bereken 4,5 + 1,73.',
              correctAnswer: '6,23',
              correctAnswers: ['6.23', '6,23'],
              explanation: 'Herskryf 4,5 as 4,50 sodat albei getalle 2 desimale plekke het.\nHonderdstes: 0 + 3 = 3. Geen oordra nie.\nTiendes: 5 + 7 = 12. Skryf 2, dra 1 oor.\nEne: 4 + 1 + 1 = 6.\nAntwoord: 6,23 ✓',
            },
          ],
        },

        // ── Q9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Skrynwerker sny twee stukke hout van ʼn plank wat 5 meter lank is.\n\na) Die eerste stuk is 1,85 m en die tweede stuk is 2,47 m lank. Wat is die totale lengte hout wat afgesny is?\nb) Hoeveel van die plank bly oor?\nc) As die oorblywende stuk presies in die helfte gesny word, hoe lank is elke helfte?',
          answer: 'a) 1,85 + 2,47 = 4,32 m\nb) 5,00 − 4,32 = 0,68 m\nc) 0,68 ÷ 2 = 0,34 m elk\n\nWerk vir deel a:\n  1,85\n+ 2,47\n  4,32\n\nWerk vir deel b:\n  5,00\n− 4,32\n  0,68',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat demonstreer hoe om desimale breuke op te tel en af te trek met die kolommetode deur desimale kommas op te lyn en dan syfer vir syfer van regs na links op te tel of af te trek, met oordra wanneer totale 10 of meer bereik en leen wanneer bosyfers te klein is" />',

      diagramPlaceholder: 'Kolomberekeningdiagramme wat wys 2,47 plus 1,85 is gelyk aan 4,32 met oordrag-pyle en 3,24 min 1,57 is gelyk aan 1,67 met leen-pyle, desimale komma uitgelig in rooi, tiendes in groen en honderdstes in blou',
      diagramSvg: '<svg viewBox="0 0 220 110" xmlns="http://www.w3.org/2000/svg"><text x="52" y="10" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">2,47 + 1,85</text><text x="35" y="20" font-weight="700" font-size="11" text-anchor="middle" fill="#ea580c">1</text><text x="65" y="20" font-weight="700" font-size="11" text-anchor="middle" fill="#ea580c">1</text><text x="35" y="34" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">2</text><text x="50" y="34" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">,</text><text x="65" y="34" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">4</text><text x="80" y="34" font-weight="700" font-size="15" text-anchor="middle" fill="#2563eb">7</text><text x="15" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">+</text><text x="35" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">1</text><text x="50" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">,</text><text x="65" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">8</text><text x="80" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#2563eb">5</text><line x1="15" y1="56" x2="90" y2="56" stroke="#0f1f3d" stroke-width="2"/><text x="35" y="72" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">4</text><text x="50" y="72" font-weight="700" font-size="16" text-anchor="middle" fill="#dc2626">,</text><text x="65" y="72" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">3</text><text x="80" y="72" font-weight="700" font-size="16" text-anchor="middle" fill="#2563eb">2</text><text x="167" y="10" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">3,24 − 1,57</text><text x="150" y="20" font-weight="700" font-size="10" text-anchor="middle" fill="#ea580c">2</text><text x="180" y="20" font-weight="700" font-size="10" text-anchor="middle" fill="#ea580c">11</text><text x="195" y="20" font-weight="700" font-size="10" text-anchor="middle" fill="#ea580c">14</text><text x="150" y="34" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">3</text><text x="165" y="34" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">,</text><text x="180" y="34" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">2</text><text x="195" y="34" font-weight="700" font-size="15" text-anchor="middle" fill="#2563eb">4</text><text x="130" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">−</text><text x="150" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">1</text><text x="165" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">,</text><text x="180" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">5</text><text x="195" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#2563eb">7</text><line x1="130" y1="56" x2="205" y2="56" stroke="#0f1f3d" stroke-width="2"/><text x="150" y="72" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">1</text><text x="165" y="72" font-weight="700" font-size="16" text-anchor="middle" fill="#dc2626">,</text><text x="180" y="72" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">6</text><text x="195" y="72" font-weight="700" font-size="16" text-anchor="middle" fill="#2563eb">7</text><text x="110" y="95" font-size="10" text-anchor="middle" fill="#6b7280">rooi = desimale komma · groen = tiendes · blou = honderdstes</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — OMSKAKELING TUSSEN BREUKE, DESIMALE EN PERSENTASIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-fractions-decimals-percentages',
      title: 'Omskakeling tussen Breuke, Desimale en Persentasies',
      icon: '%',
      explanation:
        lookingAhead(
          'persentasies',
          'CAPS Graad 5 sluit geensins persentasies in nie — leerders werk slegs met gewone breuke en desimale breuke (tiendes en honderdstes). Die Graad 6-kurrikulum se verduidelikingsnotas stel dit duidelik: "Persentasies is ʼn nuwe onderwerp vir Graad 6-leerders." Hierdie hele afdeling is akkuraat en nuttig, maar dit is Graad 6-inhoud — hier behou as duidelik gemerkte verryking.'
        ) +
        `<p style="margin-bottom:16px;">Breuke, desimale en persentasies is <strong>drie verskillende maniere om dieselfde waarde uit te druk</strong>. Om tussen hulle te kan omskakel, is ʼn nuttige vaardigheid. Sodra jy die verband verstaan, kan jy kies watter vorm ook al die nuttigste is vir ʼn gegewe probleem.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('breuk')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('desimaal')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('persentasie')}</span>` +
        `</div>` +

        // ── Three representations ────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Drie maniere om dieselfde ding te sê</p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;justify-content:center;align-items:center;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;text-align:center;flex:1;min-width:120px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Breuk</p>` +
        `<p style="font-size:1.5em;font-weight:700;color:#2563eb;margin:0;">${bl('1/2')}</p>` +
        `</div>` +

        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">=</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 20px;text-align:center;flex:1;min-width:120px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Desimaal</p>` +
        `<p style="font-size:1.5em;font-weight:700;color:#16a34a;margin:0;">${gr('0,5')}</p>` +
        `</div>` +

        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">=</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 20px;text-align:center;flex:1;min-width:120px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Persentasie</p>` +
        `<p style="font-size:1.5em;font-weight:700;color:#dc2626;margin:0;">${re('50%')}</p>` +
        `</div>` +

        `</div>` +

        // ── Conversion rules ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Omskakelingsreëls</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Breuk')} → ${gr('Desimaal')}: <strong>deel die teller deur die noemer</strong>. Bv. 3 ÷ 10 = ${gr('0,3')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Desimaal')} → ${re('Persentasie')}: <strong>vermenigvuldig met 100</strong>. Bv. ${gr('0,3')} × 100 = ${re('30%')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Persentasie')} → ${gr('Desimaal')}: <strong>deel deur 100</strong>. Bv. ${re('75%')} ÷ 100 = ${gr('0,75')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Breuk')} → ${re('Persentasie')}: <strong>skakel eers om na ʼn desimaal, vermenigvuldig dan met 100</strong>. Bv. ${bl('3/10')} → ${gr('0,3')} → ${re('30%')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Handige kortpad vir tiendes en honderdstes</p>` +
        `<p style="margin:0;color:#78350f;">As die ${bl('breuk')} reeds ʼn noemer van 10 of 100 het, kan jy die ${gr('desimaal')} direk aflees: ${bl('7/10')} = ${gr('0,7')} en ${bl('45/100')} = ${gr('0,45')}. Vermenigvuldig dan met 100 om die ${re('persentasie')} te kry: ${gr('0,7')} × 100 = ${re('70%')} en ${gr('0,45')} × 100 = ${re('45%')}.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Fraction to decimal and percentage ────────────────────
        {
          question: 'Skakel 3/10 om na ʼn desimaal en ʼn persentasie.',
          answer: `${bl('3/10')} = ${gr('0,3')} = ${re('30%')}`,
          steps: [
            `<strong>Stap 1 — ${bl('Breuk')} na ${gr('Desimaal')}:</strong> Deel die teller deur die noemer: 3 ÷ 10 = ${gr('0,3')}`,
            `<strong>Stap 2 — ${gr('Desimaal')} na ${re('Persentasie')}:</strong> Vermenigvuldig die desimaal met 100: ${gr('0,3')} × 100 = ${re('30')}. Skryf die %-teken: ${re('30%')}`,
            `<strong>Antwoord:</strong> ${bl('3/10')} = ${gr('0,3')} = ${re('30%')} ✓`,
          ],
        },

        // ── Example 2: Decimal to fraction and percentage ────────────────────
        {
          question: 'Skakel 0,45 om na ʼn breuk en ʼn persentasie.',
          answer: `${gr('0,45')} = ${bl('45/100')} = ${re('45%')}`,
          steps: [
            `<strong>Stap 1 — ${gr('Desimaal')} na ${bl('Breuk')}:</strong> 0,45 het twee desimale plekke (honderdstes), dus skryf dit as ʼn breuk met noemer 100: ${gr('0,45')} = ${bl('45/100')}`,
            `<strong>Stap 2 — ${gr('Desimaal')} na ${re('Persentasie')}:</strong> Vermenigvuldig met 100: ${gr('0,45')} × 100 = ${re('45')}. Skryf die %-teken: ${re('45%')}`,
            `<strong>Antwoord:</strong> ${gr('0,45')} = ${bl('45/100')} = ${re('45%')} ✓`,
          ],
        },

        // ── Example 3: Percentage to decimal and fraction ────────────────────
        {
          question: 'Skakel 75% om na ʼn desimaal en ʼn breuk.',
          answer: `${re('75%')} = ${gr('0,75')} = ${bl('3/4')}`,
          steps: [
            `<strong>Stap 1 — ${re('Persentasie')} na ${gr('Desimaal')}:</strong> Deel deur 100: ${re('75')} ÷ 100 = ${gr('0,75')}`,
            `<strong>Stap 2 — ${gr('Desimaal')} na ${bl('Breuk')}:</strong> 0,75 het twee desimale plekke, dus skryf dit as ʼn breuk met noemer 100: ${gr('0,75')} = ${bl('75/100')}. Vereenvoudig deur teller en noemer deur 25 te deel: ${bl('75/100')} = ${bl('3/4')}`,
            `<strong>Antwoord:</strong> ${re('75%')} = ${gr('0,75')} = ${bl('3/4')} ✓`,
          ],
        },

        // ── Example 4: Score as decimal and percentage ───────────────────────
        {
          question: 'Amahle behaal 18 uit 25. Skryf haar telling as ʼn desimaal en as ʼn persentasie.',
          answer: `${bl('18/25')} = ${gr('0,72')} = ${re('72%')}`,
          steps: [
            `Skryf die telling as ʼn ${bl('breuk')}: Amahle het ${bl('18/25')} behaal.`,
            `<strong>Stap 1 — ${bl('Breuk')} na ${gr('Desimaal')}:</strong> Skakel om na ʼn ekwivalente breuk met noemer 100 deur teller en noemer met 4 te vermenigvuldig: ${bl('18/25')} = ${bl('72/100')} = ${gr('0,72')}`,
            `<strong>Stap 2 — ${gr('Desimaal')} na ${re('Persentasie')}:</strong> Vermenigvuldig met 100: ${gr('0,72')} × 100 = ${re('72%')}`,
            `<strong>Antwoord:</strong> ${bl('18/25')} = ${gr('0,72')} = ${re('72%')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Easy — fraction to decimal and percentage ─────────────────────
        {
          difficulty: 'Easy',
          question: 'Skakel 1/5 om na ʼn desimaal en ʼn persentasie.',
          answer: '0,2 en 20%',
          checkMode: 'auto',
          correctAnswer: '0,2 and 20%',
          correctAnswers: ['0.2 and 20%', '0.2, 20%', '0.20 and 20%', '0,2 en 20%', '0,2, 20%', '0,20 en 20%'],
          explanation: 'Stap 1: Breuk na desimaal — skakel 1/5 om na ʼn ekwivalente breuk met noemer 10 deur teller en noemer met 2 te vermenigvuldig: 1/5 = 2/10 = 0,2\nStap 2: Desimaal na persentasie — 0,2 × 100 = 20%\nAntwoord: 1/5 = 0,2 = 20% ✓',
        },

        // ── Q11 Medium — converting across all three forms ───────────────────
        {
          difficulty: 'Medium',
          question: 'Skakel elk van die volgende om.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skryf 0,6 as ʼn breuk en as ʼn persentasie.',
              correctAnswer: '6/10 and 60%',
              correctAnswers: ['6/10 and 60%', '3/5 and 60%', '6/10, 60%', '3/5, 60%', '6/10 en 60%', '3/5 en 60%'],
              explanation: 'Desimaal na breuk: 0,6 het een desimale plek (tiendes), dus 0,6 = 6/10.\nDesimaal na persentasie: 0,6 × 100 = 60%.\nAntwoord: 0,6 = 6/10 = 60% ✓',
            },
            {
              label: 'b) Skryf 25% as ʼn desimaal en as ʼn breuk in eenvoudigste vorm.',
              correctAnswer: '0,25 and 1/4',
              correctAnswers: ['0.25 and 1/4', '0.25, 1/4', '0,25 en 1/4', '0,25, 1/4'],
              explanation: 'Persentasie na desimaal: 25 ÷ 100 = 0,25.\nDesimaal na breuk: 0,25 = 25/100. Vereenvoudig deur deur 25 te deel: 25/100 = 1/4.\nAntwoord: 25% = 0,25 = 1/4 ✓',
            },
            {
              label: 'c) Skryf 3/4 as ʼn desimaal en as ʼn persentasie.',
              correctAnswer: '0,75 and 75%',
              correctAnswers: ['0.75 and 75%', '0.75, 75%', '0,75 en 75%', '0,75, 75%'],
              explanation: 'Breuk na desimaal: vermenigvuldig teller en noemer met 25 om noemer 100 te kry: 3/4 = 75/100 = 0,75.\nDesimaal na persentasie: 0,75 × 100 = 75%.\nAntwoord: 3/4 = 0,75 = 75% ✓',
            },
          ],
        },

        // ── Q12 Hard — word problem comparing scores ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'In ʼn klastoets het Sipho 16 uit 20 vrae korrek beantwoord.\n\na) Skryf sy telling as ʼn breuk.\nb) Skakel die breuk om na ʼn desimaal.\nc) Skryf sy telling as ʼn persentasie.\nd) Thabo het 85% behaal. Wie het hoër behaal en met hoeveel persentasiepunte?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Telling as ʼn breuk',
              correctAnswer: '16/20',
              correctAnswers: ['16/20', '4/5'],
              explanation: 'Sipho het 16 uit 20 korrek beantwoord, dus is sy telling as ʼn breuk 16/20 (wat vereenvoudig na 4/5) ✓',
            },
            {
              label: 'b) Telling as ʼn desimaal',
              correctAnswer: '0,8',
              correctAnswers: ['0.8', '0.80', '0,8', '0,80'],
              explanation: 'Skakel 16/20 om na ʼn breuk met noemer 100: vermenigvuldig teller en noemer met 5 → 16/20 = 80/100 = 0,80 = 0,8 ✓',
            },
            {
              label: 'c) Telling as ʼn persentasie',
              correctAnswer: '80%',
              explanation: 'Vermenigvuldig die desimaal met 100: 0,8 × 100 = 80%.\nSipho het 80% behaal ✓',
            },
            {
              label: 'd) Wie het hoër behaal en met hoeveel persentasiepunte?',
              correctAnswer: 'Thabo by 5',
              correctAnswers: ['Thabo by 5', 'Thabo by 5%', 'Thabo, 5 percentage points', 'Thabo', 'Thabo met 5', 'Thabo met 5%', 'Thabo, 5 persentasiepunte'],
              explanation: 'Sipho het 80% behaal en Thabo het 85% behaal.\n85% > 80%, dus het Thabo hoër behaal.\nVerskil: 85% − 80% = 5 persentasiepunte ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om tussen breuke, desimale en persentasies om te skakel met kleurgekodeerde voorbeelde, breuke in blou, desimale in groen en persentasies in rooi" />',
    },
  ],

  // ─── ONDERWERP-OEFENING ──────────────────────────────────────────────────────
  topicPractice: [

    // ── Afdeling 1: Begrip van Desimale Breuke ────────────────────────────────

    // ── Q1 Easy — decimal to fraction ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Skryf 0,7 as ʼn breuk.',
      answer: '7/10',
      checkMode: 'auto',
      correctAnswer: '7/10',
      explanation: '0,7 beteken 7 tiendes. Skryf dit as ʼn breuk met noemer 10: 0,7 = 7/10 ✓',
    },

    // ── Q2 Medium — common fractions to decimals ──────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Skryf elk van die volgende as ʼn desimaal.',
      answer: 'a) 0,3\nb) 0,45\nc) 0,09',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) 3/10 =',
          correctAnswer: '0,3',
          correctAnswers: ['0.3', '0,3'],
          explanation: '3/10 beteken 3 tiendes. Tiendes → 1 desimale plek: 3/10 = 0,3 ✓',
        },
        {
          label: 'b) 45/100 =',
          correctAnswer: '0,45',
          correctAnswers: ['0.45', '0,45'],
          explanation: '45/100 beteken 45 honderdstes. Honderdstes → 2 desimale plekke: 45/100 = 0,45 ✓',
        },
        {
          label: 'c) 9/100 =',
          correctAnswer: '0,09',
          correctAnswers: ['0.09', '0,09'],
          explanation: '9/100 beteken 9 honderdstes. Honderdstes → 2 desimale plekke. Daar is geen tiendes nie, dus skryf 0 as plekhouer: 9/100 = 0,09 ✓',
        },
      ],
    },

    // ── Q3 Hard — place value of digit 4 ─────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Wat is die waarde van die syfer 4 in elk van die volgende?',
      answer: 'a) 4 tiendes\nb) 4 honderdstes\nc) 4 ene',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) 3,45',
          correctAnswer: '4 tenths',
          correctAnswers: ['4 tenths', '4 tiendes', '0.4', '0,4', '4/10'],
          explanation: 'In 3,45: die syfer 4 is in die tiendes-posisie (eerste plek na die desimale komma). Waarde = 4 tiendes = 0,4 ✓',
        },
        {
          label: 'b) 0,04',
          correctAnswer: '4 hundredths',
          correctAnswers: ['4 hundredths', '4 honderdstes', '0.04', '0,04', '4/100'],
          explanation: 'In 0,04: die syfer 4 is in die honderdstes-posisie (tweede plek na die desimale komma). Waarde = 4 honderdstes = 0,04 ✓',
        },
        {
          label: 'c) 14,2',
          correctAnswer: '4 units',
          correctAnswers: ['4 units', '4', '4 ones', '4 ene'],
          explanation: 'In 14,2: die syfer 4 is in die ene-posisie (aan die linkerkant van die desimale komma). Waarde = 4 ene = 4 ✓',
        },
      ],
    },

    // ── Afdeling 2: Vergelyk en Orden Desimale Breuke ─────────────────────────

    // ── Q4 Easy — compare two decimals ───────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Watter is groter: 0,6 of 0,59?',
      answer: '0,6',
      checkMode: 'auto',
      correctAnswer: '0,6',
      correctAnswers: ['0.6', '0,6'],
      explanation: 'Skryf met 2 desimale plekke: 0,60 en 0,59.\nVergelyk ene: albei 0 — gelyk.\nVergelyk tiendes: 6 vs 5. Aangesien 6 > 5, kry ons 0,6 > 0,59 ✓',
    },

    // ── Q5 Medium — order four decimals ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Orden van kleinste na grootste: 0,45, 0,5, 0,09, 0,4',
      answer: '0,09, 0,4, 0,45, 0,5',
      checkMode: 'auto',
      correctAnswer: '0,09, 0,4, 0,45, 0,5',
      correctAnswers: ['0.09, 0.4, 0.45, 0.5', '0.09, 0.40, 0.45, 0.50', '0,09, 0,4, 0,45, 0,5', '0,09, 0,40, 0,45, 0,50'],
      explanation: 'Skryf met 2 desimale plekke: 0,09, 0,40, 0,45, 0,50.\nAlmal het 0 ene.\nVergelyk tiendes: 0,09 het 0 tiendes (kleinste). Oorblywend: 0,40 en 0,45 het 4 tiendes; 0,50 het 5 tiendes.\nBinne die 4-tiendes-groep: 0,40 < 0,45 (honderdstes: 0 < 5).\nFinale volgorde: 0,09 < 0,4 < 0,45 < 0,5 ✓',
    },

    // ── Q6 Hard — trailing zeros conceptual question ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê 0,30 is groter as 0,3 omdat 30 groter as 3 is. Is hy korrek? Verduidelik jou antwoord.',
      answer: 'Nee, hulle is gelyk. Die nul na die 3 verander nie die waarde nie — 0,30 en 0,3 beteken albei 3 tiendes. Slot-nulle na die laaste nie-nul desimale syfer verander nie die waarde van die getal nie.',
      checkMode: 'self',
    },

    // ── Afdeling 3: Optel en Aftrek van Desimale Breuke ───────────────────────

    // ── Q7 Easy — simple addition ─────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken 0,4 + 0,3.',
      answer: '0,7',
      checkMode: 'auto',
      correctAnswer: '0,7',
      correctAnswers: ['0.7', '0,7'],
      explanation: 'Lyn die desimale kommas op.\nTiendes: 4 + 3 = 7. Geen oordra nodig nie.\nAntwoord: 0,7 ✓',
    },

    // ── Q8 Medium — addition and subtraction ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken elk van die volgende.',
      answer: 'a) 1,85\nb) 2,05',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) 1,25 + 0,6 =',
          correctAnswer: '1,85',
          correctAnswers: ['1.85', '1,85'],
          explanation: 'Herskryf 0,6 as 0,60 sodat albei getalle 2 desimale plekke het.\nHonderdstes: 5 + 0 = 5.\nTiendes: 2 + 6 = 8.\nEne: 1 + 0 = 1.\nAntwoord: 1,85 ✓',
        },
        {
          label: 'b) 2,4 − 0,35 =',
          correctAnswer: '2,05',
          correctAnswers: ['2.05', '2,05'],
          explanation: 'Herskryf 2,4 as 2,40 sodat albei getalle 2 desimale plekke het.\nHonderdstes: 0 − 5 — te klein, leen van tiendes. Tiendes word 3, honderdstes word 10. 10 − 5 = 5.\nTiendes: 3 − 3 = 0.\nEne: 2 − 0 = 2.\nAntwoord: 2,05 ✓',
        },
      ],
    },

    // ── Q9 Hard — money word problem ─────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato koop ʼn pen vir R3,75 en ʼn liniaal vir R1,50. Sy betaal met ʼn R10-noot. Hoeveel kleingeld kry sy?',
      answer: 'R4,75',
      checkMode: 'auto',
      correctAnswer: 'R4,75',
      correctAnswers: ['R4.75', '4.75', 'R4,75', '4,75'],
      explanation: 'Stap 1 — Totale koste: R3,75 + R1,50\nHonderdstes: 5 + 0 = 5.\nTiendes: 7 + 5 = 12. Skryf 2, dra 1 oor.\nEne: 3 + 1 + 1 = 5.\nTotaal: R5,25\n\nStap 2 — Kleingeld: R10,00 − R5,25\nHonderdstes: 0 − 5 — leen (kaskadeer deur tiendes). Resultaat: 10 − 5 = 5.\nTiendes: 9 − 2 = 7.\nEne: 9 − 5 = 4.\nKleingeld: R4,75 ✓',
    },

    // ── Afdeling 4: Meer Breuk ⇔ Desimaal-omskakelingsoefening ───────────────
    // (persentasie-inhoud verskuif — sien die "Kyk vorentoe"-verrykingsbanier
    // in die converting-fractions-decimals-percentages-afdeling)

    // ── Q10 Easy — decimal to fraction ───────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Skryf 0,5 as ʼn gewone breuk in eenvoudigste vorm.',
      answer: '1/2',
      checkMode: 'auto',
      correctAnswer: '1/2',
      correctAnswers: ['1/2', '5/10'],
      explanation: '0,5 beteken 5 tiendes = 5/10. Vereenvoudig deur teller en noemer met 5 te deel: 5/10 = 1/2 ✓',
    },

    // ── Q11 Medium — converting fractions and decimals ────────────────────────
    {
      difficulty: 'Medium',
      question: 'Skakel elk van die volgende om.',
      answer: 'a) 3/5\nb) 0,25\nc) 0,75',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Skryf 0,6 as ʼn breuk in eenvoudigste vorm.',
          correctAnswer: '3/5',
          correctAnswers: ['3/5', '6/10'],
          explanation: 'Desimaal na breuk: 0,6 het een desimale plek (tiendes), dus 0,6 = 6/10. Vereenvoudig deur teller en noemer met 2 te deel: 6/10 = 3/5 ✓',
        },
        {
          label: 'b) Skryf 1/4 as ʼn desimaal.',
          correctAnswer: '0,25',
          correctAnswers: ['0.25', '0,25'],
          explanation: 'Breuk na desimaal: vermenigvuldig teller en noemer met 25 om noemer 100 te kry: 1/4 = 25/100 = 0,25 ✓',
        },
        {
          label: 'c) Skryf 3/4 as ʼn desimaal.',
          correctAnswer: '0,75',
          correctAnswers: ['0.75', '0,75'],
          explanation: 'Breuk na desimaal: vermenigvuldig teller en noemer met 25 om noemer 100 te kry: 3/4 = 75/100 = 0,75 ✓',
        },
      ],
    },

    // ── Q12 Hard — score as a decimal, then rounded ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo behaal 17 uit 20. Skryf sy telling as ʼn desimaal, en rond dan die desimaal af tot een desimale plek.',
      answer: 'a) 0,85\nb) 0,9',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Skryf die telling as ʼn desimaal.',
          correctAnswer: '0,85',
          correctAnswers: ['0.85', '0,85'],
          explanation: 'Skryf die telling as ʼn breuk: 17/20.\nSkakel om na ʼn breuk met noemer 100 deur teller en noemer met 5 te vermenigvuldig: 17/20 = 85/100 = 0,85 ✓',
        },
        {
          label: 'b) Rond die telling af tot een desimale plek.',
          correctAnswer: '0,9',
          correctAnswers: ['0.9', '0,9'],
          explanation: 'Kyk na die honderdstes-syfer van 0,85, wat 5 is. Aangesien 5 opgerond word, gaan die tiendes-syfer van 8 na 9: 0,85 ≈ 0,9 ✓',
        },
      ],
    },

  ],

  scoreMessages: [
    { minScore: 10, message: 'Uitstekend! ʼn Perfekte telling — jy het desimale breuke vir Graad 5 volkome bemeester. Hou so aan!' },
    { minScore: 8, message: 'Puik werk! Jy het ʼn baie sterk begrip van desimale breuke. Gaan die dele wat jy gemis het weer deur, en dit sal perfek wees.' },
    { minScore: 5, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
    { minScore: 3, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: 'Moenie tou opgooi nie — elke kenner was eers ʼn beginner! Gaan die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling deur, en probeer dan weer.' },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // OEFENSTELLE — 3 stelle × 20 vrae, hoofstuk-hersieningstyl
  // Blokke: 0-3 Plekwaarde & lees/skryf | 4-7 Vergelyk & orden |
  // 8-11 Optel/aftrek kolommetode | 12-15 Woordprobleme | 16-17 Omskakeling
  // breuke/desimale | 18-19 Multi-stap & foutopsporing
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Wat is die waarde van die syfer 6 in die desimale breuk 4,68?', answer: '6 tiendes', checkMode: 'auto', correctAnswer: '6 tenths', correctAnswers: ['6 tenths', '6 tiendes', '6/10', '0.6', '0,6'], explanation: 'In 4,68 is die syfer 6 die eerste syfer na die desimale komma, dus is dit in die tiendes-posisie. Waarde = 6 tiendes = 6/10 = 0,6 ✓' },
        { difficulty: 'Easy', question: 'Skryf elke gewone breuk as ʼn desimale breuk.', answer: 'a) 0,3\nb) 0,29', checkMode: 'auto', parts: [
          { label: 'a) 3/10', correctAnswer: '0,3', correctAnswers: ['0.3', '0.30', '0,3', '0,30'], explanation: '3/10 beteken 3 tiendes. Tiendes benodig 1 desimale plek. Skryf 0 in die ene-plek en 3 in die tiendes-plek: 0,3 ✓' },
          { label: 'b) 29/100', correctAnswer: '0,29', correctAnswers: ['0.29', '0,29'], explanation: '29/100 beteken 29 honderdstes. Honderdstes benodig 2 desimale plekke: 2 tiendes en 9 honderdstes → 0,29 ✓' },
        ] },
        { difficulty: 'Easy', question: 'Skryf die gemengde getal 5 4/100 as ʼn desimale breuk.', answer: '5,04', checkMode: 'auto', correctAnswer: '5,04', correctAnswers: ['5.04', '5,04'], explanation: 'Die heelgetaldeel is 5. 4 honderdstes benodig 2 desimale plekke, maar daar is geen tiendes nie — skryf 0 as plekhouer: 5,04 ✓' },
        { difficulty: 'Easy-Medium', question: 'Skryf "twee komma sewe honderdstes" as ʼn desimale breuk.', answer: '2,07', checkMode: 'auto', correctAnswer: '2,07', correctAnswers: ['2.07', '2,07'], explanation: 'Die heelgetaldeel is 2. "Sewe honderdstes" benodig 2 desimale plekke, maar daar is geen tiendes nie, dus word ʼn 0-plekhouer in die tiendes-posisie benodig: 2,07 ✓' },
        { difficulty: 'Easy-Medium', question: 'Skryf 0,9 as ʼn gewone breuk in eenvoudigste vorm.', answer: '9/10', checkMode: 'auto', correctAnswer: '9/10', explanation: '0,9 beteken 9 tiendes = 9/10. Hierdie breuk is reeds in eenvoudigste vorm aangesien 9 en 10 geen gemeenskaplike faktor buiten 1 deel nie ✓' },
        { difficulty: 'Medium', question: 'ʼn Liniaal wys ʼn lengte van "ses komma agt honderdstes sentimeter". Skryf hierdie lengte as ʼn desimale breuk, en verduidelik dan waarom ʼn plekhouer-nul nodig is.', answer: '6,08 cm — ʼn nul-plekhouer is nodig in die tiendes-posisie omdat daar geen tiendes is nie, slegs honderdstes', checkMode: 'auto', correctAnswer: '6,08', correctAnswers: ['6.08', '6.08 cm', '6,08', '6,08 cm'], explanation: 'Heelgetaldeel = 6. "Agt honderdstes" benodig 2 desimale plekke. Aangesien daar geen tiendes is nie, moet ons ʼn 0 in die tiendes-posisie skryf sodat die 8 korrek in die honderdstes-kolom land: 6,08 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder skryf 3 5/100 as 3,5. Is dit korrek? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no', 'Nee', 'nee'], explanation: 'Nee — 3,5 beteken 3 komma 5 tiendes, nie 3 komma 5 honderdstes nie. 5/100 benodig 2 desimale plekke met ʼn plekhouer-nul in die tiendes-posisie: die korrekte desimaal is 3,05.' },
        { difficulty: 'Easy', question: 'Watter is groter: 0,8 of 0,62?', answer: '0,8', checkMode: 'auto', correctAnswer: '0,8', correctAnswers: ['0.8', '0,8'], explanation: 'Skryf met 2 desimale plekke: 0,80 en 0,62. Vergelyk ene: albei 0. Vergelyk tiendes: 8 vs 6. Aangesien 8 > 6, is 0,8 > 0,62 ✓' },
        { difficulty: 'Easy-Medium', question: 'Skryf > , < of = vir: 2,5 __ 2,50', answer: '=', checkMode: 'auto', correctAnswer: '=', explanation: 'ʼn Slot-nul verander nie die waarde nie. 2,5 en 2,50 beteken albei 2 ene en 5 tiendes, dus is hulle gelyk: 2,5 = 2,50 ✓' },
        { difficulty: 'Medium', question: 'Orden van kleinste na grootste: 0,6, 0,16, 0,61, 0,1', answer: '0,1, 0,16, 0,6, 0,61', checkMode: 'auto', correctAnswer: '0,1, 0,16, 0,6, 0,61', correctAnswers: ['0.1, 0.16, 0.6, 0.61', '0.10, 0.16, 0.60, 0.61', '0,1, 0,16, 0,6, 0,61', '0,10, 0,16, 0,60, 0,61'], explanation: 'Skryf met 2 desimale plekke: 0,60, 0,16, 0,61, 0,10. Vergelyk eers tiendes: 0,10 en 0,16 het 1 tiende (kleinste groep); 0,60 en 0,61 het 6 tiendes (groter groep). Binne elke groep vergelyk honderdstes: 0,10 < 0,16 en 0,60 < 0,61. Volgorde: 0,1, 0,16, 0,6, 0,61 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê 0,65 > 0,7 omdat 65 groter as 7 is. Is dit korrek? Verduidelik jou antwoord.', answer: 'Nee, 0,7 > 0,65. Jy moet plek vir plek vergelyk: die tiendes-syfer van 0,7 is 7, maar die tiendes-syfer van 0,65 is slegs 6. Aangesien 7 > 6, is 0,7 groter, al het 0,65 meer desimale syfers.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Bereken 0,5 + 0,4.', answer: '0,9', checkMode: 'auto', correctAnswer: '0,9', correctAnswers: ['0.9', '0,9'], explanation: 'Lyn desimale kommas op. Tiendes: 5 + 4 = 9. Geen oordra nodig nie. Antwoord: 0,9 ✓' },
        { difficulty: 'Medium', question: 'ʼn Bakker gebruik 3,46 kg meel vir een bondel brood en 2,78 kg vir ʼn tweede bondel. Wat is die totale massa meel gebruik?', answer: '6,24 kg', checkMode: 'auto', correctAnswer: '6,24', correctAnswers: ['6.24', '6.24 kg', '6,24', '6,24 kg'], explanation: 'Honderdstes: 6 + 8 = 14. Skryf 4, dra 1 oor. Tiendes: 4 + 7 + 1 = 12. Skryf 2, dra 1 oor. Ene: 3 + 2 + 1 = 6. Antwoord: 6,24 kg ✓' },
        { difficulty: 'Medium', question: 'Bereken die verskil tussen 5,3 en 1,68.', answer: '3,62', checkMode: 'auto', correctAnswer: '3,62', correctAnswers: ['3.62', '3,62'], explanation: 'Herskryf 5,3 as 5,30. Honderdstes: 0 − 8 — leen van tiendes. Tiendes word 2, honderdstes word 10. 10 − 8 = 2. Tiendes: 2 − 6 — steeds te klein, leen van ene. Ene word 4, tiendes word 12. 12 − 6 = 6. Ene: 4 − 1 = 3. Antwoord: 3,62 ✓' },
        { difficulty: 'Medium', question: 'ʼn Beker bevat 8,05 liter water. As 3,6 liter uitgegooi word, hoeveel water bly oor?', answer: '4,45 L', checkMode: 'auto', correctAnswer: '4,45', correctAnswers: ['4.45', '4.45 L', '4,45', '4,45 L'], explanation: 'Herskryf 3,6 as 3,60. Honderdstes: 5 − 0 = 5. Tiendes: 0 − 6 — leen van ene. Ene word 7, tiendes word 10. 10 − 6 = 4. Ene: 7 − 3 = 4. Antwoord: 4,45 L ✓' },
        { difficulty: 'Medium', question: 'Zinhle koop brood vir R18,65 en melk vir R14,90. Hoeveel spandeer sy altesaam?', answer: 'R33,55', checkMode: 'auto', correctAnswer: 'R33,55', correctAnswers: ['R33.55', '33.55', 'R33,55', '33,55'], explanation: 'Honderdstes: 5 + 0 = 5. Tiendes: 6 + 9 = 15. Skryf 5, dra 1 oor. Ene: 8 + 4 + 1 = 13. Skryf 3, dra 1 oor. Tiene: 1 + 1 + 1 = 3. Totaal: R33,55 ✓' },
        { difficulty: 'Medium', question: 'ʼn Stuk tou is 4,35 m lank. ʼn Tweede stuk is 2,8 m lank. Wat is die gesamentlike lengte van albei stukke tou?', answer: '7,15 m', checkMode: 'auto', correctAnswer: '7,15', correctAnswers: ['7.15', '7.15 m', '7,15', '7,15 m'], explanation: 'Herskryf 2,8 as 2,80. Honderdstes: 5 + 0 = 5. Tiendes: 3 + 8 = 11. Skryf 1, dra 1 oor. Ene: 4 + 2 + 1 = 7. Antwoord: 7,15 m ✓' },
        { difficulty: 'Medium-Hard', question: 'Priya behaal 23/25 in ʼn speltoets. Skryf haar telling as ʼn desimale breuk.', answer: '0,92', checkMode: 'auto', correctAnswer: '0,92', correctAnswers: ['0.92', '0,92', '0.920', '0,920'], explanation: 'Skakel 23/25 om na ʼn breuk met noemer 100 deur teller en noemer met 4 te vermenigvuldig: 23/25 = 92/100 = 0,92 ✓' },
        { difficulty: 'Hard', question: 'Drie vriende het hierdie spaargeld: Neo het R24,60, Aisha het R24,06, en Kabelo het R24,65.\n\na) Orden die drie bedrae van minste na meeste.\nb) Bereken die verskil tussen die grootste en kleinste bedrag.\nc) Skryf die verskil as ʼn breuk van R1, en vereenvoudig dit dan.', answer: 'a) R24,06, R24,60, R24,65\nb) R24,65 − R24,06 = R0,59\nc) 59/100 (reeds in eenvoudigste vorm aangesien 59 ʼn priemgetal is)', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder trek 6,02 − 3,47 af en skryf: "0 min 7 in die honderdstes-kolom, dus skryf ek net 7 en gaan aan." Verduidelik wat verkeerd is met hierdie redenasie en gee die korrekte antwoord.', answer: 'Die leerder kan nie eenvoudig ʼn groter syfer van ʼn kleiner een aftrek en die verskil neerskryf nie — hulle moet leen. Aangesien 2 (honderdstes) − 7 nie moontlik is nie, leen 1 van die tiendes-kolom: tiendes word -1 wat ook nie genoeg is nie, dus leen ook van ene. As dit korrek uitgewerk word: 6,02 − 3,47 = 2,55.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het desimale plekwaarde, vergelyking, optel, aftrek en omskakeling van desimale bemeester. Goed gedaan!' },
        { minScore: 15, message: 'Puik werk! Jy het ʼn sterk begrip van desimale breuke. Gaan enige vrae wat jy gemis het weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor plekwaarde en kolom-optel/aftrek weer deur, en probeer dan hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids, met noukeurige aandag aan plekhouer-nulle en leen, en probeer dan hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklegging, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Wat is die waarde van die syfer 3 in die desimale breuk 7,53?', answer: '3 honderdstes', checkMode: 'auto', correctAnswer: '3 hundredths', correctAnswers: ['3 hundredths', '3 honderdstes', '3/100', '0.03', '0,03'], explanation: 'In 7,53 is die syfer 3 die tweede syfer na die desimale komma, dus is dit in die honderdstes-posisie. Waarde = 3 honderdstes = 3/100 = 0,03 ✓' },
        { difficulty: 'Easy', question: 'Skryf elke gewone breuk as ʼn desimale breuk.', answer: 'a) 0,7\nb) 0,84', checkMode: 'auto', parts: [
          { label: 'a) 7/10', correctAnswer: '0,7', correctAnswers: ['0.7', '0.70', '0,7', '0,70'], explanation: '7/10 beteken 7 tiendes. Tiendes benodig 1 desimale plek. Skryf 0 in die ene-plek en 7 in die tiendes-plek: 0,7 ✓' },
          { label: 'b) 84/100', correctAnswer: '0,84', correctAnswers: ['0.84', '0,84'], explanation: '84/100 beteken 84 honderdstes. Honderdstes benodig 2 desimale plekke: 8 tiendes en 4 honderdstes → 0,84 ✓' },
        ] },
        { difficulty: 'Easy', question: 'Skryf die gemengde getal 3 9/100 as ʼn desimale breuk.', answer: '3,09', checkMode: 'auto', correctAnswer: '3,09', correctAnswers: ['3.09', '3,09'], explanation: 'Die heelgetaldeel is 3. 9 honderdstes benodig 2 desimale plekke, maar daar is geen tiendes nie — skryf 0 as plekhouer: 3,09 ✓' },
        { difficulty: 'Easy-Medium', question: 'Skryf "vier komma een honderdste" as ʼn desimale breuk.', answer: '4,01', checkMode: 'auto', correctAnswer: '4,01', correctAnswers: ['4.01', '4,01'], explanation: 'Die heelgetaldeel is 4. "Een honderdste" benodig 2 desimale plekke, maar daar is geen tiendes nie, dus word ʼn 0-plekhouer in die tiendes-posisie benodig: 4,01 ✓' },
        { difficulty: 'Easy-Medium', question: 'Skryf 0,4 as ʼn gewone breuk in eenvoudigste vorm.', answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '4/10'], explanation: '0,4 beteken 4 tiendes = 4/10. Vereenvoudig deur teller en noemer met 2 te deel: 4/10 = 2/5 ✓' },
        { difficulty: 'Medium', question: 'ʼn Resep benodig "een komma ses honderdstes liter" olie. Skryf hierdie hoeveelheid as ʼn desimale breuk, en verduidelik dan waarom ʼn plekhouer-nul nodig is.', answer: '1,06 L — ʼn nul-plekhouer is nodig in die tiendes-posisie omdat daar geen tiendes is nie, slegs honderdstes', checkMode: 'auto', correctAnswer: '1,06', correctAnswers: ['1.06', '1.06 L', '1,06', '1,06 L'], explanation: 'Heelgetaldeel = 1. "Ses honderdstes" benodig 2 desimale plekke. Aangesien daar geen tiendes is nie, moet ons ʼn 0 in die tiendes-posisie skryf sodat die 6 korrek in die honderdstes-kolom land: 1,06 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder skryf 2 3/100 as 2,3. Is dit korrek? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no', 'Nee', 'nee'], explanation: 'Nee — 2,3 beteken 2 komma 3 tiendes, nie 2 komma 3 honderdstes nie. 3/100 benodig 2 desimale plekke met ʼn plekhouer-nul in die tiendes-posisie: die korrekte desimaal is 2,03.' },
        { difficulty: 'Easy', question: 'Watter is kleiner: 0,45 of 0,5?', answer: '0,45', checkMode: 'auto', correctAnswer: '0,45', correctAnswers: ['0.45', '0,45'], explanation: 'Skryf met 2 desimale plekke: 0,45 en 0,50. Vergelyk ene: albei 0. Vergelyk tiendes: 4 vs 5. Aangesien 4 < 5, is 0,45 < 0,5 ✓' },
        { difficulty: 'Easy-Medium', question: 'Skryf > , < of = vir: 6,80 __ 6,8', answer: '=', checkMode: 'auto', correctAnswer: '=', explanation: 'ʼn Slot-nul verander nie die waarde nie. 6,80 en 6,8 beteken albei 6 ene en 8 tiendes, dus is hulle gelyk: 6,80 = 6,8 ✓' },
        { difficulty: 'Medium', question: 'Orden van grootste na kleinste: 0,3, 0,03, 0,33, 0,3', answer: '0,33, 0,3, 0,3, 0,03', checkMode: 'auto', correctAnswer: '0,33, 0,3, 0,3, 0,03', correctAnswers: ['0.33, 0.3, 0.3, 0.03', '0.33, 0.30, 0.30, 0.03', '0,33, 0,3, 0,3, 0,03', '0,33, 0,30, 0,30, 0,03'], explanation: 'Skryf met 2 desimale plekke: 0,30, 0,03, 0,33, 0,30. Vergelyk tiendes: 0,03 het 0 tiendes (kleinste); die res het 3 tiendes. Binne die 3-tiendes-groep, vergelyk honderdstes: 0,33 het 3 honderdstes (grootste); die twee 0,30-waardes is gelyk. Volgorde van grootste na kleinste: 0,33, 0,3, 0,3, 0,03 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê 0,8 < 0,75 omdat "0,75 meer syfers het, dus moet dit ʼn groter, meer presiese getal wees." Is dit korrek? Verduidelik jou antwoord.', answer: 'Nee, 0,8 > 0,75. Die aantal desimale syfers het niks met grootte te doen nie. Vergelyk plek vir plek: tiendes-syfer van 0,8 is 8, tiendes-syfer van 0,75 is 7. Aangesien 8 > 7, is 0,8 die groter getal.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Bereken 0,6 + 0,7.', answer: '1,3', checkMode: 'auto', correctAnswer: '1,3', correctAnswers: ['1.3', '1,3'], explanation: 'Lyn desimale kommas op. Tiendes: 6 + 7 = 13. Skryf 3, dra 1 oor na die ene-kolom. Ene: 0 + 0 + 1 = 1. Antwoord: 1,3 ✓' },
        { difficulty: 'Medium', question: 'ʼn Boer oes 4,57 kg tamaties in die oggend en 3,68 kg in die middag. Wat is die totale massa geoes?', answer: '8,25 kg', checkMode: 'auto', correctAnswer: '8,25', correctAnswers: ['8.25', '8.25 kg', '8,25', '8,25 kg'], explanation: 'Honderdstes: 7 + 8 = 15. Skryf 5, dra 1 oor. Tiendes: 5 + 6 + 1 = 12. Skryf 2, dra 1 oor. Ene: 4 + 3 + 1 = 8. Antwoord: 8,25 kg ✓' },
        { difficulty: 'Medium', question: 'Wat is 7,2 min 4,85?', answer: '2,35', checkMode: 'auto', correctAnswer: '2,35', correctAnswers: ['2.35', '2,35'], explanation: 'Herskryf 7,2 as 7,20. Honderdstes: 0 − 5 — leen van tiendes. Tiendes word 1, honderdstes word 10. 10 − 5 = 5. Tiendes: 1 − 8 — steeds te klein, leen van ene. Ene word 6, tiendes word 11. 11 − 8 = 3. Ene: 6 − 4 = 2. Antwoord: 2,35 ✓' },
        { difficulty: 'Medium', question: 'ʼn Rol lint is 9,03 m lank. As 5,4 m afgesny word, hoeveel lint bly oor?', answer: '3,63 m', checkMode: 'auto', correctAnswer: '3,63', correctAnswers: ['3.63', '3.63 m', '3,63', '3,63 m'], explanation: 'Herskryf 5,4 as 5,40. Honderdstes: 3 − 0 = 3. Tiendes: 0 − 4 — leen van ene. Ene word 8, tiendes word 10. 10 − 4 = 6. Ene: 8 − 5 = 3. Antwoord: 3,63 m ✓' },
        { difficulty: 'Medium', question: 'Tumi koop ʼn skryfboek vir R22,75 en ʼn pen vir R9,50. Hoeveel spandeer hy altesaam?', answer: 'R32,25', checkMode: 'auto', correctAnswer: 'R32,25', correctAnswers: ['R32.25', '32.25', 'R32,25', '32,25'], explanation: 'Honderdstes: 5 + 0 = 5. Tiendes: 7 + 5 = 12. Skryf 2, dra 1 oor. Ene: 2 + 9 + 1 = 12. Skryf 2, dra 1 oor. Tiene: 2 + 0 + 1 = 3. Totaal: R32,25 ✓' },
        { difficulty: 'Medium', question: 'ʼn Beker bevat 3,6 liter vrugtesap. Zoe gooi 1,85 liter in glase uit. Hoeveel sap bly oor in die beker?', answer: '1,75 L', checkMode: 'auto', correctAnswer: '1,75', correctAnswers: ['1.75', '1.75 L', '1,75', '1,75 L'], explanation: 'Herskryf 3,6 as 3,60. Honderdstes: 0 − 5 — leen van tiendes. Tiendes word 5, honderdstes word 10. 10 − 5 = 5. Tiendes: 5 − 8 — steeds te klein, leen van ene. Ene word 2, tiendes word 15. 15 − 8 = 7. Ene: 2 − 1 = 1. Antwoord: 1,75 L ✓' },
        { difficulty: 'Medium-Hard', question: 'Karabo behaal 9/20 in ʼn vasvra. Skryf haar telling as ʼn desimale breuk.', answer: '0,45', checkMode: 'auto', correctAnswer: '0,45', correctAnswers: ['0.45', '0,45', '0.450', '0,450'], explanation: 'Skakel 9/20 om na ʼn breuk met noemer 100 deur teller en noemer met 5 te vermenigvuldig: 9/20 = 45/100 = 0,45 ✓' },
        { difficulty: 'Hard', question: 'Drie atlete het hierdie afstande in ʼn oefensessie afgelê: Bongi hardloop 5,42 km, Ruan hardloop 5,4 km, en Dineo hardloop 5,24 km.\n\na) Orden die drie afstande van minste na meeste.\nb) Bereken die verskil tussen die grootste en kleinste afstand.\nc) Skryf die verskil as ʼn breuk van 1 km, en vereenvoudig dit dan.', answer: 'a) 5,24 km, 5,4 km, 5,42 km\nb) 5,42 − 5,24 = 0,18 km\nc) 18/100 = 9/50 (vereenvoudig deur met 2 te deel)', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder tel 3,7 + 2,68 op en skryf: "7 + 68 = 75, dus is die antwoord 3,75." Verduidelik wat verkeerd is met hierdie redenasie en gee die korrekte antwoord.', answer: 'Die leerder het die tiendes- en honderdstes-syfers saam getel asof dit heelgetalle is, in plaas daarvan om die desimale plekke korrek op te lyn. 3,7 moet eers as 3,70 herskryf word. Dan: honderdstes 0 + 8 = 8, tiendes 7 + 6 = 13 (skryf 3, dra 1 oor), ene 3 + 2 + 1 = 6. Die korrekte antwoord is 3,7 + 2,68 = 6,38.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue werk met desimale plekwaarde, vergelyking, optel, aftrek en omskakeling van desimale.' },
        { minScore: 15, message: 'Puik werk! Gaan enige vrae wat jy gemis het weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklegging, meer werklike kontekste + redenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Krieket-telbord wys die getal 9,14. Wat is die waarde van die syfer 1?', answer: '1 tiende', checkMode: 'auto', correctAnswer: '1 tenth', correctAnswers: ['1 tenth', '1 tiende', '1/10', '0.1', '0,1'], explanation: 'In 9,14 is die syfer 1 die eerste syfer na die desimale komma, dus is dit in die tiendes-posisie. Waarde = 1 tiende = 1/10 = 0,1 ✓' },
        { difficulty: 'Easy', question: 'Skryf elke gewone breuk as ʼn desimale breuk.', answer: 'a) 0,1\nb) 0,63', checkMode: 'auto', parts: [
          { label: 'a) 1/10', correctAnswer: '0,1', correctAnswers: ['0.1', '0.10', '0,1', '0,10'], explanation: '1/10 beteken 1 tiende. Tiendes benodig 1 desimale plek. Skryf 0 in die ene-plek en 1 in die tiendes-plek: 0,1 ✓' },
          { label: 'b) 63/100', correctAnswer: '0,63', correctAnswers: ['0.63', '0,63'], explanation: '63/100 beteken 63 honderdstes. Honderdstes benodig 2 desimale plekke: 6 tiendes en 3 honderdstes → 0,63 ✓' },
        ] },
        { difficulty: 'Easy', question: 'ʼn Fles het ʼn massa-etiket wat lees "sewe komma twee honderdstes kilogram". Skryf dit as ʼn desimale breuk.', answer: '7,02 kg', checkMode: 'auto', correctAnswer: '7,02', correctAnswers: ['7.02', '7.02 kg', '7,02', '7,02 kg'], explanation: 'Die heelgetaldeel is 7. "Twee honderdstes" benodig 2 desimale plekke, maar daar is geen tiendes nie — skryf 0 as plekhouer: 7,02 ✓' },
        { difficulty: 'Easy-Medium', question: 'Skryf "agt komma drie honderdstes" as ʼn desimale breuk.', answer: '8,03', checkMode: 'auto', correctAnswer: '8,03', correctAnswers: ['8.03', '8,03'], explanation: 'Die heelgetaldeel is 8. "Drie honderdstes" benodig 2 desimale plekke, maar daar is geen tiendes nie, dus word ʼn 0-plekhouer in die tiendes-posisie benodig: 8,03 ✓' },
        { difficulty: 'Easy-Medium', question: 'Skryf 0,25 as ʼn gewone breuk in eenvoudigste vorm.', answer: '1/4', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '25/100'], explanation: '0,25 beteken 25 honderdstes = 25/100. Vereenvoudig deur teller en noemer met 25 te deel: 25/100 = 1/4 ✓' },
        { difficulty: 'Medium', question: 'ʼn Tydhorlosie wys "twaalf komma vier honderdstes sekondes". Skryf dit as ʼn desimale breuk, en verduidelik dan waarom ʼn plekhouer-nul nodig is.', answer: '12,04 s — ʼn nul-plekhouer is nodig in die tiendes-posisie omdat daar geen tiendes is nie, slegs honderdstes', checkMode: 'auto', correctAnswer: '12,04', correctAnswers: ['12.04', '12.04 s', '12,04', '12,04 s'], explanation: 'Heelgetaldeel = 12. "Vier honderdstes" benodig 2 desimale plekke. Aangesien daar geen tiendes is nie, moet ons ʼn 0 in die tiendes-posisie skryf sodat die 4 korrek in die honderdstes-kolom land: 12,04 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder skryf 5 7/100 as 5,7. Is dit korrek? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no', 'Nee', 'nee'], explanation: 'Nee — 5,7 beteken 5 komma 7 tiendes, nie 5 komma 7 honderdstes nie. 7/100 benodig 2 desimale plekke met ʼn plekhouer-nul in die tiendes-posisie: die korrekte desimaal is 5,07.' },
        { difficulty: 'Easy', question: 'ʼn Winkelier vergelyk twee pryse: R0,75 en R0,7. Watter is duurder?', answer: 'R0,75', checkMode: 'auto', correctAnswer: 'R0,75', correctAnswers: ['R0.75', '0.75', 'R0,75', '0,75'], explanation: 'Skryf met 2 desimale plekke: 0,75 en 0,70. Vergelyk ene: albei 0. Vergelyk tiendes: 7 vs 7, gelyk. Vergelyk honderdstes: 5 vs 0. Aangesien 5 > 0, is R0,75 > R0,70 ✓' },
        { difficulty: 'Easy-Medium', question: 'Skryf > , < of = vir: 0,09 __ 0,9', answer: '<', checkMode: 'auto', correctAnswer: '<', explanation: 'Skryf met 2 desimale plekke: 0,09 en 0,90. Vergelyk tiendes: 0 vs 9. Aangesien 0 < 9, is 0,09 < 0,9 ✓' },
        { difficulty: 'Medium', question: 'Vier atlete se spronglengtes word aangeteken as: 2,15 m, 2,5 m, 2,05 m, 2,51 m. Orden hierdie afstande van kleinste na grootste.', answer: '2,05 m, 2,15 m, 2,5 m, 2,51 m', checkMode: 'auto', correctAnswer: '2,05, 2,15, 2,5, 2,51', correctAnswers: ['2.05, 2.15, 2.5, 2.51', '2.05, 2.15, 2.50, 2.51', '2,05, 2,15, 2,5, 2,51', '2,05, 2,15, 2,50, 2,51'], explanation: 'Skryf met 2 desimale plekke: 2,15, 2,50, 2,05, 2,51. Vergelyk tiendes: 2,05 het 0 tiendes (kleinste); 2,15 het 1 tiende; 2,50 en 2,51 het 5 tiendes. Vergelyk die laaste twee volgens honderdstes: 2,50 < 2,51. Volgorde: 2,05, 2,15, 2,5, 2,51 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer dat 4,08 groter is as 4,3 omdat "8 groter as 3 is." Is dit korrek? Verduidelik jou antwoord met plekwaarde.', answer: 'Nee, 4,3 > 4,08. Die syfer 8 in 4,08 is in die honderdstes-plek, terwyl die syfer 3 in 4,3 in die tiendes-plek is — ʼn heeltemal ander, groter kolom. Vergelyk eers tiendes: 4,3 het 3 tiendes, 4,08 het 0 tiendes. Aangesien 3 > 0, is 4,3 groter.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Bereken 0,8 + 0,5.', answer: '1,3', checkMode: 'auto', correctAnswer: '1,3', correctAnswers: ['1.3', '1,3'], explanation: 'Lyn desimale kommas op. Tiendes: 8 + 5 = 13. Skryf 3, dra 1 oor na die ene-kolom. Ene: 0 + 0 + 1 = 1. Antwoord: 1,3 ✓' },
        { difficulty: 'Medium', question: 'ʼn Fietsryer ry 6,39 km voor ontbyt en 2,84 km na ontbyt. Watter totale afstand het sy gery?', answer: '9,23 km', checkMode: 'auto', correctAnswer: '9,23', correctAnswers: ['9.23', '9.23 km', '9,23', '9,23 km'], explanation: 'Honderdstes: 9 + 4 = 13. Skryf 3, dra 1 oor. Tiendes: 3 + 8 + 1 = 12. Skryf 2, dra 1 oor. Ene: 6 + 2 + 1 = 9. Antwoord: 9,23 km ✓' },
        { difficulty: 'Medium', question: 'Trek 4,35 af van 10.', answer: '5,65', checkMode: 'auto', correctAnswer: '5,65', correctAnswers: ['5.65', '5,65'], explanation: 'Herskryf 10 as 10,00. Honderdstes: 0 − 5 — leen van tiendes, wat kaskadeer deur ene: ene word 9, tiendes word 9, honderdstes word 10. 10 − 5 = 5. Tiendes: 9 − 3 = 6. Ene: 9 − 4 = 5. Antwoord: 5,65 ✓' },
        { difficulty: 'Medium', question: 'ʼn Watertenk hou 7,04 kL. As 2,6 kL gebruik word, hoeveel water bly oor in die tenk?', answer: '4,44 kL', checkMode: 'auto', correctAnswer: '4,44', correctAnswers: ['4.44', '4.44 kL', '4,44', '4,44 kL'], explanation: 'Herskryf 2,6 as 2,60. Honderdstes: 4 − 0 = 4. Tiendes: 0 − 6 — leen van ene. Ene word 6, tiendes word 10. 10 − 6 = 4. Ene: 6 − 2 = 4. Antwoord: 4,44 kL ✓' },
        { difficulty: 'Medium', question: 'ʼn Skoolkiosk verkoop ʼn toebroodjie vir R16,80 en ʼn sap vir R8,45. Wat is die totale koste van albei items?', answer: 'R25,25', checkMode: 'auto', correctAnswer: 'R25,25', correctAnswers: ['R25.25', '25.25', 'R25,25', '25,25'], explanation: 'Honderdstes: 0 + 5 = 5. Tiendes: 8 + 4 = 12. Skryf 2, dra 1 oor. Ene: 6 + 8 + 1 = 15. Skryf 5, dra 1 oor. Tiene: 1 + 0 + 1 = 2. Totaal: R25,25 ✓' },
        { difficulty: 'Medium', question: 'Twee wandelroetes meet 3,75 km en 2,9 km. Wat is die gesamentlike afstand van albei roetes?', answer: '6,65 km', checkMode: 'auto', correctAnswer: '6,65', correctAnswers: ['6.65', '6.65 km', '6,65', '6,65 km'], explanation: 'Herskryf 2,9 as 2,90. Honderdstes: 5 + 0 = 5. Tiendes: 7 + 9 = 16. Skryf 6, dra 1 oor. Ene: 3 + 2 + 1 = 6. Antwoord: 6,65 km ✓' },
        { difficulty: 'Medium-Hard', question: 'Lindiwe behaal 7/8 in ʼn praktiese toets. Skryf haar telling as ʼn desimale breuk.', answer: '0,875', checkMode: 'auto', correctAnswer: '0,875', correctAnswers: ['0.875', '0,875'], explanation: '7/8 moet omgeskakel word deur deling, aangesien 8 nie ʼn direkte faktor van 10 of 100 is nie: 7 ÷ 8 = 0,875 ✓' },
        { difficulty: 'Hard', question: 'ʼn Winkel hou drie dae se inkomste dop: Maandag R156,40, Dinsdag R156,04, Woensdag R156,45.\n\na) Orden die drie bedrae van minste na meeste.\nb) Bereken die verskil tussen die grootste en kleinste bedrag.\nc) Die winkel se teiken vir Woensdag was R200. Skryf die tekort (teiken minus Woensdag se inkomste) as ʼn desimale bedrag in rand.', answer: 'a) R156,04, R156,40, R156,45\nb) R156,45 − R156,04 = R0,41\nc) R200,00 − R156,45 = R43,55', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder trek 5,2 − 1,65 af en skryf: "0,2 minus 0,65 is onmoontlik, dus moet die antwoord negatief wees — 5,2 − 1,65 kan nie met leen uitgewerk word nie." Verduidelik wat verkeerd is met hierdie redenasie en gee die korrekte antwoord.', answer: 'Die leerder is verkeerd — desimale aftrekking met leen werk presies soos heelgetal-aftrekking; dit word nie onmoontlik of negatief net omdat ʼn kolom op sy eie te klein lyk nie. Herskryf 5,2 as 5,20. Honderdstes: 0 − 5, leen van tiendes (tiendes word 1, honderdstes word 10): 10 − 5 = 5. Tiendes: 1 − 6, leen van ene (ene word 4, tiendes word 11): 11 − 6 = 5. Ene: 4 − 1 = 3. Die korrekte antwoord is 5,2 − 1,65 = 3,55.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan desimale plekwaarde, vergelyking, optel, aftrek en omskakeling op werklike probleme toepas.' },
        { minScore: 15, message: 'Puik werk! Gaan enige vrae wat jy gemis het weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}




