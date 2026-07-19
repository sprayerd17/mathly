import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (ratio roles) ─────────────────────────────────────────
// first quantity   → blue   (#2563eb)
// second quantity  → red    (#dc2626)
// HCF              → orange (#ea580c)
// simplified ratio → green  (#16a34a)
// total            → purple (#7c3aed)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Verhouding en Koers',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS A RATIO?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-ratio',
      title: 'Wat is ʼn Verhouding?',
      icon: ':',
      explanation:
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:16px;padding:12px 16px;background:#faf5ff;border:1.5px solid #d8b4fe;border-radius:10px;">` +
        `<span style="font-size:18px;line-height:1;">🔭</span>` +
        `<p style="margin:0;font-size:14px;color:#6b21a8;"><strong>Vooruitkyk:</strong> ʼn toegewyde onderwerp oor Verhouding en Koers met formele notasie (dubbelpuntvorm, GGF-gebaseerde vereenvoudiging, eenheidskoers) is Graad 7-inhoud — CAPS Graad 6 raak verhouding/koers slegs informeel aan, binne werklike-lewe Metingskontekste (bv. ʼn resep wat op- of afgeskaal word), sonder hierdie formele apparaat. Die hele onderwerp hieronder word as verryking ingesluit vir leerders wat ʼn vroeë, deeglike inleiding wil hê.</p>` +
        `</div>` +
        `<p style="margin-bottom:16px;">ʼn Verhouding <strong>vergelyk twee of meer hoeveelhede van dieselfde soort</strong>. Ons skryf ʼn verhouding met ʼn dubbelpunt — byvoorbeeld ${bl('3')}:${re('5')} beteken vir elke ${bl('3')} van een ding is daar ${re('5')} van ʼn ander. Die <strong>volgorde van ʼn verhouding is belangrik</strong> — ${bl('3')}:${re('5')} is anders as ${re('5')}:${bl('3')}. Ons kan ʼn verhouding <strong>vereenvoudig</strong> deur al die dele deur hul ${or('GGF')} te deel, net soos wanneer ʼn breuk vereenvoudig word. ʼn Verhouding het geen eenhede nie — ons skryf net die getalle.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste hoeveelheid')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('tweede hoeveelheid')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('GGF')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vereenvoudigde verhouding')}</span>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelfeite oor verhoudings</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Geskryf met ʼn dubbelpunt</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Verhouding word geskryf as ${bl('a')}:${re('b')} — die dubbelpunt skei die twee hoeveelhede wat vergelyk word.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Volgorde is belangrik</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('3')}:${re('5')} en ${re('5')}:${bl('3')} is <strong>verskillende verhoudings</strong>. Pas die volgorde altyd by die vraag aan.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Vereenvoudig met die GGF</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Deel al die dele van die verhouding deur hul ${or('Grootste Gemene Faktor')} om dit in eenvoudigste vorm te skryf.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Geen eenhede nie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Verhouding vergelyk hoeveelhede van <strong>dieselfde soort</strong> — die eenhede kanselleer uit en ons skryf net die getalle.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om ʼn verhouding te vereenvoudig</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vind die ${or('GGF')} van al die getalle in die verhouding, en deel dan elke deel daardeur. Die ${gr('vereenvoudigde verhouding')} wys dieselfde verwantskap met die kleinste moontlike heelgetalle.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Sak bevat 12 rooi en 8 blou albasters. Skryf die verhouding van rooi tot blou in eenvoudigste vorm.',
          answer: `${gr('3:2')}`,
          steps: [
            `Skryf die verhouding: ${bl('12')}:${re('8')}.`,
            `Vind die ${or('GGF')} van ${bl('12')} en ${re('8')} — ${or('GGF = 4')}.`,
            `Deel altwee deur ${or('4')}: ${bl('12')} ÷ ${or('4')} = ${bl('3')} en ${re('8')} ÷ ${or('4')} = ${re('2')}.`,
            `Vereenvoudigde verhouding = ${gr('3:2')}`,
          ],
        },
        {
          question: 'Vereenvoudig die verhouding 45:30:15.',
          answer: `${gr('3:2:1')}`,
          steps: [
            `Vind die ${or('GGF')} van ${bl('45')}, ${re('30')} en 15 — ${or('GGF = 15')}.`,
            `Deel al drie deur ${or('15')}: ${bl('45')} ÷ ${or('15')} = ${gr('3')}, ${re('30')} ÷ ${or('15')} = ${gr('2')}, 15 ÷ ${or('15')} = ${gr('1')}.`,
            `Vereenvoudigde verhouding = ${gr('3:2:1')}`,
          ],
        },
        {
          question: 'Sipho meng sement en sand in die verhouding 1:3. As hy 5 sakke sement gebruik, hoeveel sakke sand het hy nodig?',
          answer: `Sipho het ${re('15')} sakke sand nodig`,
          steps: [
            `Die verhouding is ${bl('1')}:${re('3')} — vir elke ${bl('1')} sak sement is daar ${re('3')} sakke sand.`,
            `Sipho gebruik ${bl('5')} sakke sement, dus vermenigvuldig altwee dele met 5: ${bl('1')} × 5 = ${bl('5')} en ${re('3')} × 5 = ${re('15')}.`,
            `Hy het ${re('15')} sakke sand nodig.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder: 'Albasters gegroepeer volgens die GGF van 4, wat 12 rooi albasters as 3 groepe en 8 blou albasters as 2 groepe wys, wat die verhouding tot 3:2 vereenvoudig',
      diagramSvg: '<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg"><text x="72" y="10" font-size="10" text-anchor="middle" fill="#ea580c">gegroepeer volgens 4 (die GGF)</text><rect x="15" y="15" width="34" height="34" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="24" cy="24" r="4" fill="#dc2626"/><circle cx="40" cy="24" r="4" fill="#dc2626"/><circle cx="24" cy="40" r="4" fill="#dc2626"/><circle cx="40" cy="40" r="4" fill="#dc2626"/><rect x="55" y="15" width="34" height="34" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="64" cy="24" r="4" fill="#dc2626"/><circle cx="80" cy="24" r="4" fill="#dc2626"/><circle cx="64" cy="40" r="4" fill="#dc2626"/><circle cx="80" cy="40" r="4" fill="#dc2626"/><rect x="95" y="15" width="34" height="34" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="104" cy="24" r="4" fill="#dc2626"/><circle cx="120" cy="24" r="4" fill="#dc2626"/><circle cx="104" cy="40" r="4" fill="#dc2626"/><circle cx="120" cy="40" r="4" fill="#dc2626"/><text x="150" y="36" font-size="11" fill="#dc2626" font-weight="700">12 rooi</text><rect x="15" y="60" width="34" height="34" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="24" cy="69" r="4" fill="#2563eb"/><circle cx="40" cy="69" r="4" fill="#2563eb"/><circle cx="24" cy="85" r="4" fill="#2563eb"/><circle cx="40" cy="85" r="4" fill="#2563eb"/><rect x="55" y="60" width="34" height="34" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="64" cy="69" r="4" fill="#2563eb"/><circle cx="80" cy="69" r="4" fill="#2563eb"/><circle cx="64" cy="85" r="4" fill="#2563eb"/><circle cx="80" cy="85" r="4" fill="#2563eb"/><text x="150" y="81" font-size="11" fill="#2563eb" font-weight="700">8 blou</text><text x="110" y="112" font-weight="700" font-size="13" text-anchor="middle" fill="#16a34a">3 groepe : 2 groepe = 3:2</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat verduidelik wat ʼn verhouding is, hoe om dit met ʼn dubbelpunt te skryf, en hoe om ʼn verhouding te vereenvoudig deur die GGF te deel" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — EQUIVALENT RATIOS AND DIVIDING IN A RATIO
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equivalent-ratios-dividing',
      title: 'Ekwivalente Verhoudings en Verdeling Volgens ʼn Verhouding',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Ekwivalente verhoudings</strong> is verhoudings wat dieselfde waarde het — net soos ekwivalente breuke. Ons maak ekwivalente verhoudings deur al die dele met dieselfde getal te vermenigvuldig of te deel. Om ʼn bedrag volgens ʼn gegewe <strong>verhouding te verdeel</strong> moet ons (1) die ${or('totale aantal dele')} vind deur die verhoudingsgetalle bymekaar te tel, (2) die ${bl('waarde van een deel')} vind deur die totale bedrag deur die aantal dele te deel, en (3) vermenigvuldig om ${gr('elke aandeel')} te vind. ${re('Kontroleer')} jou antwoord altyd deur al die aandele bymekaar te tel — hulle moet gelyk wees aan die oorspronklike bedrag.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('totale dele')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('waarde van een deel')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('elke aandeel')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('kontroleer')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Ekwivalente verhoudings</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vermenigvuldig of deel al die dele met dieselfde getal om ʼn ekwivalente verhouding te maak — net soos ekwivalente breuke.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Stap 1 — Totale dele</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Tel al die getalle in die verhouding bymekaar om die ${or('totale aantal dele')} te vind.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Stap 2 — Een deel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Deel die totale bedrag deur die ${or('totale dele')} om die ${bl('waarde van een deel')} te vind.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Stap 3 — Elke aandeel &amp; kontroleer</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vermenigvuldig die ${bl('waarde van een deel')} met elke verhoudingsgetal om ${gr('elke aandeel')} te kry, en ${re('kontroleer')} dan deur al die aandele bymekaar te tel.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Vinnige metode om volgens ʼn verhouding te verdeel</p>` +
        `<p style="margin:0;color:#14532d;">${or('Totale dele')} = som van verhoudingsgetalle → ${bl('een deel')} = totale bedrag ÷ ${or('totale dele')} → ${gr('elke aandeel')} = verhoudingsgetal × ${bl('een deel')} → ${re('kontroleer')}: aandele moet weer optel tot die oorspronklike totaal.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Is 2:3 en 8:12 ekwivalente verhoudings?',
          answer: `Ja — ${gr('8:12 = 2:3')}`,
          steps: [
            `Vermenigvuldig altwee dele van 2:3 met 4: 2 × 4 = ${bl('8')} en 3 × 4 = ${or('12')}.`,
            `Dus ${bl('8')}:${or('12')} = 2:3.`,
            `${re('Ja')}, hulle is ekwivalente verhoudings.`,
          ],
        },
        {
          question: 'Verdeel R240 in die verhouding 3:5.',
          answer: `Eerste aandeel = ${gr('R90')}, tweede aandeel = ${gr('R150')}`,
          steps: [
            `${or('Totale dele')} = 3 + 5 = ${or('8 dele')}.`,
            `${bl('Waarde van een deel')} = R240 ÷ ${or('8')} = ${bl('R30')}.`,
            `${gr('Eerste aandeel')} = 3 × ${bl('R30')} = ${gr('R90')}.`,
            `${gr('Tweede aandeel')} = 5 × ${bl('R30')} = ${gr('R150')}.`,
            `${re('Kontroleer')}: ${re('R90 + R150 = R240')}. Korrek ✓`,
          ],
        },
        {
          question: 'Lerato, Amahle en Sipho verdeel prysgeld van R1 800 in die verhouding 2:3:4. Hoeveel kry elke persoon?',
          answer: `Lerato = ${gr('R400')}, Amahle = ${gr('R600')}, Sipho = ${gr('R800')}`,
          steps: [
            `${or('Totale dele')} = 2 + 3 + 4 = ${or('9 dele')}.`,
            `${bl('Een deel')} = R1 800 ÷ ${or('9')} = ${bl('R200')}.`,
            `${gr('Lerato')}: 2 × ${bl('R200')} = ${gr('R400')}.`,
            `${gr('Amahle')}: 3 × ${bl('R200')} = ${gr('R600')}.`,
            `${gr('Sipho')}: 4 × ${bl('R200')} = ${gr('R800')}.`,
            `${re('Kontroleer')}: ${re('R400 + R600 + R800 = R1 800')}. Korrek ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder: 'Staafmodel wat R240 in 8 gelyke dele in die verhouding 3:5 verdeel, elke deel R30 werd, met 3 dele blou geskakeer (R90) en 5 dele rooi geskakeer (R150)',
      diagramSvg: '<svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg"><text x="95" y="15" font-size="11" text-anchor="middle" fill="#0f1f3d">R240 verdeel in die verhouding 3:5</text><rect x="15" y="50" width="160" height="30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="15" y="50" width="60" height="30" fill="#93c5fd"/><rect x="75" y="50" width="100" height="30" fill="#fca5a5"/><line x1="35" y1="50" x2="35" y2="80" stroke="#0f1f3d" stroke-width="1"/><line x1="55" y1="50" x2="55" y2="80" stroke="#0f1f3d" stroke-width="1"/><line x1="75" y1="50" x2="75" y2="80" stroke="#0f1f3d" stroke-width="1.5"/><line x1="95" y1="50" x2="95" y2="80" stroke="#0f1f3d" stroke-width="1"/><line x1="115" y1="50" x2="115" y2="80" stroke="#0f1f3d" stroke-width="1"/><line x1="135" y1="50" x2="135" y2="80" stroke="#0f1f3d" stroke-width="1"/><line x1="155" y1="50" x2="155" y2="80" stroke="#0f1f3d" stroke-width="1"/><text x="45" y="97" font-weight="700" font-size="11" text-anchor="middle" fill="#2563eb">R90 (3 dele)</text><text x="125" y="97" font-weight="700" font-size="11" text-anchor="middle" fill="#dc2626">R150 (5 dele)</text><text x="95" y="117" font-weight="700" font-size="12" text-anchor="middle" fill="#16a34a">Elke deel = R240 ÷ 8 = R30</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om te toets of twee verhoudings ekwivalent is, en hoe om ʼn bedrag in ʼn verhouding te verdeel met die totale-dele-metode, met ʼn uitgewerkte R1 800 drierigting-verdelingsvoorbeeld" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — WHAT IS A RATE?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-rate',
      title: 'Wat is ʼn Koers?',
      icon: '/',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Koers <strong>vergelyk twee hoeveelhede van verskillende soorte</strong>. Anders as ʼn verhouding het ʼn koers altyd eenhede. Algemene voorbeelde van koerse is spoed in ${bl('km')} ${or('per')} ${re('uur')}, prys in ${bl('rand')} ${or('per')} ${re('kilogram')} en hartklop in ${bl('slae')} ${or('per')} ${re('minuut')}. Die woord ${or('per')} beteken <em>vir elke een</em> — so ${bl('60 km')} ${or('per')} ${re('uur')} beteken ${bl('60 km')} vir elke ${re('1 uur')}. ʼn ${gr('Eenheidskoers')} is ʼn koers waar die ${re('tweede hoeveelheid')} 1 is. Om ʼn ${gr('eenheidskoers')} te vind, deel ons die ${bl('eerste hoeveelheid')} deur die ${re('tweede')}.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste hoeveelheid')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('tweede hoeveelheid')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('per')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('eenheidskoers')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Eerste hoeveelheid</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${bl('eerste hoeveelheid')} is die bedrag wat gemeet word — soos afstand, rand, of slae.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Tweede hoeveelheid</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${re('tweede hoeveelheid')} is waarteen die eerste hoeveelheid gemeet word — soos ure, kilogram, of minute.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Per</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('Per')} beteken <em>vir elke een</em>. Dit koppel die twee hoeveelhede in ʼn koers — byvoorbeeld ${bl('60 km')} ${or('per')} ${re('uur')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Eenheidskoers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn ${gr('Eenheidskoers')} het ${re('1')} as die ${re('tweede hoeveelheid')}. Vind dit deur die ${bl('eerste hoeveelheid')} deur die ${re('tweede hoeveelheid')} te deel.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Hoe om ʼn eenheidskoers te vind</p>` +
        `<p style="margin:0;color:#14532d;">Deel die ${bl('eerste hoeveelheid')} deur die ${re('tweede hoeveelheid')}: ${gr('eenheidskoers')} = ${bl('eerste hoeveelheid')} ÷ ${re('tweede hoeveelheid')}. Die antwoord het altyd eenhede — skryf hulle in jou finale antwoord.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Motor ry 240 km in 3 uur. Wat is sy spoed in km per uur?',
          answer: `Die motor ry teen ${gr('80 km per uur')}`,
          steps: [
            `Spoed is ʼn koers — ${bl('km')} ${or('per')} ${re('uur')}.`,
            `Deel afstand deur tyd: ${bl('240')} ÷ ${re('3')} = ${gr('80')}.`,
            `Die motor ry teen ${gr('80 km per uur')}.`,
          ],
        },
        {
          question: 'Sipho verdien R1 350 vir 9 uur se werk. Wat is sy uurlikse koers?',
          answer: `Sipho verdien ${gr('R150 per uur')}`,
          steps: [
            `Koers = ${bl('totaal verdien')} ÷ ${re('ure gewerk')}.`,
            `${bl('1 350')} ÷ ${re('9')} = ${gr('R150')}.`,
            `Sipho verdien ${gr('R150')} ${or('per')} ${re('uur')}.`,
          ],
        },
        {
          question: 'Appels kos R24,50 vir 5 kg. Wat is die prys per kilogram?',
          answer: `Appels kos ${gr('R4,90 per kilogram')}`,
          steps: [
            `Prys ${or('per')} ${re('kg')} = ${bl('totale koste')} ÷ ${re('kg')}.`,
            `${bl('24,50')} ÷ ${re('5')} = ${gr('R4,90')}.`,
            `Appels kos ${gr('R4,90')} ${or('per')} ${re('kilogram')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder: 'Tydlyn wat ʼn motor wys wat 240 km oor 3 uur ry in gelyke stappe van 80 km per uur, wat die eenheidskoers van 80 km per uur onthul',
      diagramSvg: '<svg viewBox="0 0 220 110" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="50" x2="200" y2="50" stroke="#0f1f3d" stroke-width="2.5"/><line x1="20" y1="44" x2="20" y2="56" stroke="#0f1f3d" stroke-width="2"/><line x1="80" y1="44" x2="80" y2="56" stroke="#0f1f3d" stroke-width="2"/><line x1="140" y1="44" x2="140" y2="56" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="44" x2="200" y2="56" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="30" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">0h</text><text x="80" y="30" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">1h</text><text x="140" y="30" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">2h</text><text x="200" y="30" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">3h</text><text x="20" y="72" font-size="10" text-anchor="middle" fill="#374151">0 km</text><text x="80" y="72" font-size="10" text-anchor="middle" fill="#374151">80 km</text><text x="140" y="72" font-size="10" text-anchor="middle" fill="#374151">160 km</text><text x="200" y="72" font-size="10" text-anchor="middle" fill="#374151">240 km</text><text x="50" y="90" font-weight="700" font-size="10" text-anchor="middle" fill="#16a34a">+80 km</text><text x="110" y="90" font-weight="700" font-size="10" text-anchor="middle" fill="#16a34a">+80 km</text><text x="170" y="90" font-weight="700" font-size="10" text-anchor="middle" fill="#16a34a">+80 km</text><text x="110" y="105" font-weight="700" font-size="12" text-anchor="middle" fill="#2563eb">Eenheidskoers = 80 km per uur</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat verduidelik wat ʼn koers is, hoe dit van ʼn verhouding verskil, wat per beteken, en hoe om ʼn eenheidskoers te bereken deur die eerste hoeveelheid deur die tweede te deel" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SOLVING RATE PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-rate-problems',
      title: 'Los Koersprobleme Op',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">Sodra ons die ${bl('eenheidskoers')} ken, kan ons baie verskillende probleme oplos. Om die ${pu('totaal')} te vind, ${gr('vermenigvuldig')} ons die ${bl('eenheidskoers')} met die ${or('hoeveelheid')}. Om die ${or('hoeveelheid')} te vind, ${re('deel')} ons die ${pu('totaal')} deur die ${bl('eenheidskoers')}. Lees die probleem altyd noukeurig om te identifiseer wat gegee is en wat gevind moet word. Skryf jou antwoord met die korrekte eenhede.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eenheidskoers')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hoeveelheid')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vermenigvuldig')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('deel')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('totaal')}</span>` +
        `</div>` +

        // ── Two key operations ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Twee sleutelbewerkings</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">${gr('Vermenigvuldig')} — Vind die totaal</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Wanneer jy die ${bl('eenheidskoers')} en die ${or('hoeveelheid')} ken, ${gr('vermenigvuldig')} om die ${pu('totaal')} te vind.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">${pu('Totaal')} = ${bl('eenheidskoers')} × ${or('hoeveelheid')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">${re('Deel')} — Vind die hoeveelheid</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Wanneer jy die ${pu('totaal')} en die ${bl('eenheidskoers')} ken, ${re('deel')} om die ${or('hoeveelheid')} te vind.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">${or('Hoeveelheid')} = ${pu('totaal')} ÷ ${bl('eenheidskoers')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kontroleer altyd jou eenhede</p>` +
        `<p style="margin:0;color:#1e3a8a;">Lees die probleem noukeurig om te identifiseer wat gegee is en wat gevind moet word. Skryf jou antwoord met die korrekte eenhede — die ${bl('eenheidskoers')} vertel jou reeds in watter eenhede die antwoord moet wees.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Kraan drup teen ʼn koers van 3 liter per uur. Hoeveel water drup in 8 uur?',
          answer: `Die kraan drup ${pu('24 liter')} in 8 uur`,
          steps: [
            `Ons ken die ${bl('eenheidskoers')} (${bl('3 liter per uur')}) en die ${or('hoeveelheid')} (${or('8 uur')}). Ons moet die ${pu('totaal')} vind.`,
            `${gr('Vermenigvuldig')}: ${bl('3')} × ${or('8')} = ${pu('24')} liter.`,
            `Die kraan drup ${pu('24 liter')} in 8 uur.`,
          ],
        },
        {
          question: 'Lerato ry teen 90 km per uur. Hoe lank sal dit haar neem om 360 km te reis?',
          answer: `Dit sal Lerato ${or('4 uur')} neem`,
          steps: [
            `Ons ken die ${bl('eenheidskoers')} (${bl('90 km per uur')}) en die ${pu('totale')} afstand (${pu('360 km')}). Ons moet die ${or('hoeveelheid')} (tyd) vind.`,
            `${re('Deel')}: ${pu('360')} ÷ ${bl('90')} = ${or('4')} uur.`,
            `Dit sal Lerato ${or('4 uur')} neem.`,
          ],
        },
        {
          question: 'Thabo koop 7 kg rys teen R8,50 per kg. Hy koop ook 3 kg suiker teen R12,40 per kg. Wat is die totale koste?',
          answer: `Die totale koste is ${pu('R96,70')}`,
          steps: [
            `Koste van rys: ${gr('vermenigvuldig')} ${or('7')} × ${bl('R8,50')} = R59,50.`,
            `Koste van suiker: ${gr('vermenigvuldig')} ${or('3')} × ${bl('R12,40')} = R37,20.`,
            `${pu('Totaal')}: R59,50 + R37,20 = ${pu('R96,70')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om koersprobleme op te los deur te identifiseer wat gegee is en wat benodig word, en dan te kies om met die eenheidskoers te vermenigvuldig of te deel" />',
    },
  ],
  topicPractice: [

    // ── Q1 Easy — simplify 6:9 ───────────────────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Vereenvoudig die verhouding 6:9.',
      correctAnswer: '2:3',
      explanation: 'GGF van 6 en 9 is 3.\n6 ÷ 3 = 2 en 9 ÷ 3 = 3.\nVereenvoudigde verhouding = 2:3 ✓',
      answer: '2:3',
    },

    // ── Q2 Easy — simplify 20:12 ─────────────────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Vereenvoudig die verhouding 20:12.',
      correctAnswer: '5:3',
      explanation: 'GGF van 20 en 12 is 4.\n20 ÷ 4 = 5 en 12 ÷ 4 = 3.\nVereenvoudigde verhouding = 5:3 ✓',
      answer: '5:3',
    },

    // ── Q3 Medium — girls to boys ratio ──────────────────────────────────────
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'ʼn Klas het 18 meisies en 12 seuns. Skryf die verhouding van meisies tot seuns in eenvoudigste vorm.',
      correctAnswer: '3:2',
      explanation: 'GGF van 18 en 12 is 6.\n18 ÷ 6 = 3 en 12 ÷ 6 = 2.\nVerhouding van meisies tot seuns = 3:2 ✓',
      answer: '3:2',
    },

    // ── Q4 Medium — equivalent ratios ────────────────────────────────────────
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Is 3:4 en 15:20 ekwivalente verhoudings?',
      correctAnswer: 'ja',
      correctAnswers: ['ja', 'Ja', 'JA'],
      explanation: 'Vermenigvuldig altwee dele van 3:4 met 5: 3 × 5 = 15 en 4 × 5 = 20.\nDus 15:20 = 3:4.\nJa, hulle is ekwivalente verhoudings ✓',
      answer: 'ja',
    },

    // ── Q5 Hard — use a ratio to find a missing quantity ─────────────────────
    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question: 'Sipho meng sap en water in die verhouding 2:5. Hy gebruik 8 liter sap. Hoeveel liter water het hy nodig?',
      correctAnswer: '20',
      correctAnswers: ['20', '20 liter', '20L'],
      explanation: 'Verhouding sap:water = 2:5.\nSkaalfaktor = 8 ÷ 2 = 4.\nWater = 5 × 4 = 20 liter ✓',
      answer: '20',
    },

    // ── Q6 Medium — divide R360 in ratio 3:5 ─────────────────────────────────
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Verdeel R360 in die verhouding 3:5.',
      answer: '',
      parts: [
        {
          label: 'a) Eerste aandeel',
          correctAnswer: 'R135',
          correctAnswers: ['R135', '135'],
          explanation: 'Totale dele = 3 + 5 = 8.\nEen deel = R360 ÷ 8 = R45.\nEerste aandeel = 3 × R45 = R135 ✓',
        },
        {
          label: 'b) Tweede aandeel',
          correctAnswer: 'R225',
          correctAnswers: ['R225', '225'],
          explanation: 'Totale dele = 3 + 5 = 8.\nEen deel = R360 ÷ 8 = R45.\nTweede aandeel = 5 × R45 = R225 ✓\nKontroleer: R135 + R225 = R360 ✓',
        },
      ],
    },

    // ── Q7 Hard — three-way split R2 100 in ratio 2:3:2 ──────────────────────
    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question: 'Lerato, Amahle en Thabo verdeel R2 100 in die verhouding 2:3:2. Hoeveel kry elke persoon?',
      answer: '',
      parts: [
        {
          label: "a) Lerato se aandeel",
          correctAnswer: 'R600',
          correctAnswers: ['R600', '600'],
          explanation: 'Totale dele = 2 + 3 + 2 = 7.\nEen deel = R2 100 ÷ 7 = R300.\nLerato = 2 × R300 = R600 ✓',
        },
        {
          label: "b) Amahle se aandeel",
          correctAnswer: 'R900',
          correctAnswers: ['R900', '900'],
          explanation: 'Totale dele = 2 + 3 + 2 = 7.\nEen deel = R2 100 ÷ 7 = R300.\nAmahle = 3 × R300 = R900 ✓',
        },
        {
          label: "c) Thabo se aandeel",
          correctAnswer: 'R600',
          correctAnswers: ['R600', '600'],
          explanation: 'Totale dele = 2 + 3 + 2 = 7.\nEen deel = R2 100 ÷ 7 = R300.\nThabo = 2 × R300 = R600 ✓\nKontroleer: R600 + R900 + R600 = R2 100 ✓',
        },
      ],
    },

    // ── Q8 Easy — speed calculation ──────────────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'ʼn Motor ry 150 km in 2 uur. Wat is sy spoed in km per uur?',
      correctAnswer: '75',
      correctAnswers: ['75', '75km/h', '75 km/h', '75km per uur', '75 km per uur'],
      explanation: 'Spoed = afstand ÷ tyd.\n150 ÷ 2 = 75 km/h ✓',
      answer: '75 km/h',
    },

    // ── Q9 Medium — price per kilogram ───────────────────────────────────────
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Piesangs kos R18 vir 3 kg. Wat is die prys per kilogram?',
      correctAnswer: 'R6',
      correctAnswers: ['R6', '6', 'R6/kg', 'R6 per kg'],
      explanation: 'Prys per kg = totale koste ÷ kg.\nR18 ÷ 3 = R6 per kilogram ✓',
      answer: 'R6',
    },

    // ── Q10 Hard — compare hourly rates (self-check) ──────────────────────────
    {
      difficulty: 'Hard',
      checkMode: 'self',
      question: 'Sipho verdien R2 250 vir 15 uur se werk. Lerato verdien R1 960 vir 14 uur se werk. Wie het die beter uurlikse koers?',
      answer: 'Sipho: 2 250 ÷ 15 = R150 per uur.\nLerato: 1 960 ÷ 14 = R140 per uur.\nSipho het die beter uurlikse koers.',
    },

    // ── Q11 Medium — time to fill a tank ─────────────────────────────────────
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'ʼn Kraan vul ʼn tenk teen 12 liter per minuut. Hoe lank sal dit neem om ʼn 180 liter tenk te vul?',
      correctAnswer: '15',
      correctAnswers: ['15', '15 minute', '15min', '15 min'],
      explanation: 'Tyd = totale volume ÷ koers.\n180 ÷ 12 = 15 minute ✓',
      answer: '15 minute',
    },

    // ── Q12 Hard — total journey time ────────────────────────────────────────
    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question: 'Amahle ry 270 km teen 90 km per uur en dan 120 km teen 60 km per uur. Wat is die totale tyd vir haar reis?',
      correctAnswer: '5',
      correctAnswers: ['5', '5 uur', '5h', '5 ure'],
      explanation: 'Tyd vir eerste deel: 270 ÷ 90 = 3 uur.\nTyd vir tweede deel: 120 ÷ 60 = 2 uur.\nTotale tyd = 3 + 2 = 5 uur ✓',
      answer: '5 uur',
    },

  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Verhoudings skryf en vereenvoudig (0-3, Maklik)
        { difficulty: 'Easy', question: 'Vereenvoudig die verhouding 48:36.', answer: '4:3', checkMode: 'auto', correctAnswer: '4:3', correctAnswers: ['4:3'], explanation: 'GGF van 48 en 36 is 12.\n48 ÷ 12 = 4 en 36 ÷ 12 = 3.\nVereenvoudigde verhouding = 4:3 ✓' },
        { difficulty: 'Easy', question: 'ʼn Vrugtebak het 24 rooi appels en 16 groen appels. Skryf die verhouding van rooi appels tot groen appels in eenvoudigste vorm.', answer: '3:2', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2'], explanation: 'GGF van 24 en 16 is 8.\n24 ÷ 8 = 3 en 16 ÷ 8 = 2.\nVerhouding van rooi tot groen = 3:2 ✓' },
        { difficulty: 'Easy', question: 'ʼn Koor het 15 sopraanstemme, 10 altstemme en 5 tenoorstemme. Zinhle wil die verhouding van sopraanstemme tot altstemme tot tenoorstemme hê. Skryf hierdie verhouding in eenvoudigste vorm, en verduidelik waarom die volgorde waarin sy dit lys, belangrik is.', answer: 'Sopraanstemme tot altstemme tot tenoorstemme = 15:10:5. GGF van 15, 10 en 5 is 5, dus die vereenvoudigde verhouding is 3:2:1. Die volgorde is belangrik omdat elke posisie in die verhouding vir ʼn spesifieke groep staan — as dit in ʼn ander volgorde geskryf word (soos 10:15:5), sou dit altstemme tot sopraanstemme tot tenoorstemme beskryf, wat ʼn ander vergelyking is.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'ʼn Leerder vereenvoudig 60:24 deur net die eerste getal deur 12 te deel, en skryf die antwoord as "5:24". Verduidelik die fout en gee die korrekte vereenvoudigde verhouding.', answer: 'Die leerder het slegs die eerste term deur die GGF gedeel en die tweede term onveranderd gelaat. Albei dele van ʼn verhouding moet deur dieselfde GGF gedeel word. GGF van 60 en 24 is 12, dus 60 ÷ 12 = 5 en 24 ÷ 12 = 2. Die korrekte vereenvoudigde verhouding is 5:2, nie 5:24 nie.', checkMode: 'self' },

        // Blok 2 — Ekwivalente verhoudings (4-7, Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'Is 3:7 en 15:35 ekwivalente verhoudings?', answer: 'ja', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja', 'JA'], explanation: 'Vermenigvuldig altwee dele van 3:7 met 5: 3 × 5 = 15 en 7 × 5 = 35.\nDus 15:35 = 3:7.\nJa, hulle is ekwivalente verhoudings ✓' },
        { difficulty: 'Medium', question: 'ʼn Pannekoekresep gebruik meel en melk in die verhouding 4:9. As ʼn groter mengsel 36 koppies melk gebruik, hoeveel koppies meel is nodig?', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16 koppies'], explanation: 'Verhouding meel:melk = 4:9.\nSkaalfaktor = 36 ÷ 9 = 4.\nMeel = 4 × 4 = 16 koppies ✓' },
        { difficulty: 'Medium', question: 'Watter van hierdie verhoudings is ekwivalent aan 3:8 — 9:24 of 9:16?', answer: '9:24', checkMode: 'auto', correctAnswer: '9:24', correctAnswers: ['9:24', 'net 9:24'], explanation: 'Toets 9:24: 9 ÷ 3 = 3 en 24 ÷ 3 = 8, dus 9:24 = 3:8 ✓\nToets 9:16: 9 ÷ 3 = 3 maar 16 ÷ 3 is nie ʼn heelgetal nie, dus 9:16 ≠ 3:8.\n9:24 is ekwivalent aan 3:8 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder kontroleer of 5:9 en 8:12 ekwivalent is deur 3 by altwee dele van 5:9 te tel om 8:12 te kry, en kom tot die gevolgtrekking dat hulle ekwivalent is. Is hierdie redenasie korrek? Verduidelik.', answer: 'Nee, hierdie redenasie is verkeerd. Ekwivalente verhoudings word gevind deur altwee dele met dieselfde getal te vermenigvuldig of te deel, nie deur dieselfde getal by altwee dele te tel nie. As dit korrek getoets word: 8 ÷ 5 = 1,6 terwyl 12 ÷ 9 = 1,33, wat verskillend is, dus 5:9 en 8:12 is nie eintlik ekwivalente verhoudings nie.', checkMode: 'self' },

        // Blok 3 — ʼn Bedrag in ʼn gegewe verhouding verdeel (8-11, Medium)
        { difficulty: 'Medium', question: 'Verdeel R560 in die verhouding 3:4.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Eerste aandeel', correctAnswer: 'R240', correctAnswers: ['R240', '240'], explanation: 'Totale dele = 3 + 4 = 7.\nEen deel = R560 ÷ 7 = R80.\nEerste aandeel = 3 × R80 = R240 ✓' },
          { label: 'b) Tweede aandeel', correctAnswer: 'R320', correctAnswers: ['R320', '320'], explanation: 'Totale dele = 3 + 4 = 7.\nEen deel = R560 ÷ 7 = R80.\nTweede aandeel = 4 × R80 = R320 ✓\nKontroleer: R240 + R320 = R560 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Nomvula, Karabo en Ayanda verdeel 900 plakkers in die verhouding 1:2:3. Hoeveel plakkers kry elke persoon?', answer: '', checkMode: 'auto', parts: [
          { label: "a) Nomvula se plakkers", correctAnswer: '150', correctAnswers: ['150'], explanation: 'Totale dele = 1 + 2 + 3 = 6.\nEen deel = 900 ÷ 6 = 150.\nNomvula = 1 × 150 = 150 ✓' },
          { label: "b) Karabo se plakkers", correctAnswer: '300', correctAnswers: ['300'], explanation: 'Totale dele = 1 + 2 + 3 = 6.\nEen deel = 900 ÷ 6 = 150.\nKarabo = 2 × 150 = 300 ✓' },
          { label: "c) Ayanda se plakkers", correctAnswer: '450', correctAnswers: ['450'], explanation: 'Totale dele = 1 + 2 + 3 = 6.\nEen deel = 900 ÷ 6 = 150.\nAyanda = 3 × 150 = 450 ✓\nKontroleer: 150 + 300 + 450 = 900 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Twee vriende verdeel ʼn sak albasters in die verhouding 3:5. Die vriend met die kleiner aandeel kry 45 albasters. Hoeveel albasters was daar altesaam in die sak?', answer: '120', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120'], explanation: 'Die kleiner aandeel stem ooreen met die "3"-deel van die verhouding.\nEen deel = 45 ÷ 3 = 15.\nTotale dele = 3 + 5 = 8.\nTotale albasters = 8 × 15 = 120 ✓' },
        { difficulty: 'Medium', question: 'ʼn 250 m-tou word in twee stukke gesny in die verhouding 2:3. Palesa kontroleer haar antwoord deur die twee stukke weer bymekaar te tel. Wat behoort die twee stukke te meet, en werk haar kontrole?', answer: '100 m en 150 m. Kontroleer: 100 + 150 = 250 m, wat ooreenstem met die oorspronklike lengte, dus werk die kontrole.', checkMode: 'self' },

        // Blok 4 — Koerse en eenheidskoerse (12-15, Medium)
        { difficulty: 'Medium', question: 'ʼn Trein ry 336 km in 4 uur. Wat is sy spoed in km per uur?', answer: '84 km/h', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84', '84km/h', '84 km/h', '84km per uur', '84 km per uur'], explanation: 'Spoed = afstand ÷ tyd.\n336 ÷ 4 = 84 km/h ✓' },
        { difficulty: 'Medium', question: 'Verduidelik die verskil tussen ʼn verhouding en ʼn koers, met ʼn voorbeeld van elk.', answer: 'ʼn Verhouding vergelyk twee hoeveelhede van dieselfde soort en het geen eenhede nie, bv. 3 seuns tot 5 meisies is 3:5. ʼn Koers vergelyk twee hoeveelhede van verskillende soorte en het altyd eenhede, bv. 84 km per uur vergelyk afstand (km) met tyd (ure).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Winkel verkoop sap teen R63 vir 7 liter by een stalletjie, en R70 vir 8 liter by ʼn ander stalletjie. Watter stalletjie het die goedkoopste prys per liter?', answer: 'tweede stalletjie', checkMode: 'auto', correctAnswer: 'tweede stalletjie', correctAnswers: ['tweede stalletjie', 'die tweede stalletjie', 'tweede', 'stalletjie 2'], explanation: 'Eerste stalletjie: R63 ÷ 7 = R9 per liter.\nTweede stalletjie: R70 ÷ 8 = R8,75 per liter.\nR8,75 is minder as R9, dus het die tweede stalletjie die goedkoopste prys per liter ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder bereken ʼn eenheidskoers vir ʼn motor wat 180 km in 4 uur ry deur 4 ÷ 180 te bereken, en kry 0,0222 uur per km. Verduidelik wat verkeerd gegaan het en gee die korrekte eenheidskoers in km per uur.', answer: 'Die leerder het tyd deur afstand gedeel in plaas van afstand deur tyd, wat ure per km gee in plaas van km per uur. Die korrekte eenheidskoers is afstand ÷ tyd = 180 ÷ 4 = 45 km per uur.', checkMode: 'self' },

        // Blok 5 — Koersprobleme oplos (16-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Waterslang vul ʼn plonsbad teen ʼn koers van 9 liter per minuut. Hoeveel water is in die bad na 6 minute?', answer: '54 liter', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54 liter', '54L'], explanation: 'Ons ken die eenheidskoers (9 liter per minuut) en die hoeveelheid (6 minute). Ons moet die totaal vind, dus vermenigvuldig: 9 × 6 = 54 liter ✓' },
        { difficulty: 'Hard', question: 'Katlego verdien geld teen ʼn koers van R12 per uur. Voordat jy besluit om te vermenigvuldig of te deel, identifiseer wat gegee is en wat gevind moet word as sy wil weet hoeveel ure sy moet werk om R180 te verdien.', answer: 'Gegee: die eenheidskoers (R12 per uur) en die totale bedrag om te verdien (R180). Nodig: die aantal ure (die hoeveelheid). Aangesien die totaal en die koers bekend is, deel ons: 180 ÷ 12 = 15 uur.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sizwe ry 100 km teen 50 km per uur, en dan nog 80 km teen 40 km per uur. Wat is die totale tyd vir sy reis?', answer: '4 uur', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 uur', '4h', '4 ure'], explanation: 'Tyd vir eerste deel: 100 ÷ 50 = 2 uur.\nTyd vir tweede deel: 80 ÷ 40 = 2 uur.\nTotale tyd = 2 + 2 = 4 uur ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder verdien R216 deur teen ʼn koers van R18 per uur te werk, en bereken die aantal ure gewerk as 216 × 18 = 3 888 uur. Verduidelik die fout en gee die korrekte aantal ure.', answer: 'Die leerder het vermenigvuldig in plaas van gedeel. Wanneer jy die totaal verdien en die eenheidskoers ken, deel jy die totaal deur die koers om die hoeveelheid (ure) te vind, nie vermenigvuldig nie. Die korrekte berekening is 216 ÷ 18 = 12 uur.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het verhoudings, ekwivalente verhoudings, verdeling volgens ʼn verhouding en koersprobleme baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Jy is redelik seker van die meeste hiervan — gaan gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die vereenvoudiging van verhoudings en eenheidskoerse weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Verhoudings skryf en vereenvoudig (0-3, Maklik)
        { difficulty: 'Easy', question: 'Vereenvoudig die verhouding 32:24.', answer: '4:3', checkMode: 'auto', correctAnswer: '4:3', correctAnswers: ['4:3'], explanation: 'GGF van 32 en 24 is 8.\n32 ÷ 8 = 4 en 24 ÷ 8 = 3.\nVereenvoudigde verhouding = 4:3 ✓' },
        { difficulty: 'Easy', question: 'ʼn Tuin het 18 roosbome en 30 laventelbossies. Skryf die verhouding van roosbome tot laventelbossies in eenvoudigste vorm.', answer: '3:5', checkMode: 'auto', correctAnswer: '3:5', correctAnswers: ['3:5'], explanation: 'GGF van 18 en 30 is 6.\n18 ÷ 6 = 3 en 30 ÷ 6 = 5.\nVerhouding van roos tot lavendel = 3:5 ✓' },
        { difficulty: 'Easy', question: 'ʼn Vrugtemandjie het 8 appels, 5 pere en 3 piesangs. Skryf die verhouding van piesangs tot appels tot pere (in daardie volgorde).', answer: '3:8:5', checkMode: 'auto', correctAnswer: '3:8:5', correctAnswers: ['3:8:5'], explanation: 'Die gevraagde volgorde is piesangs, dan appels, dan pere.\nPiesangs = 3, appels = 8, pere = 5.\nVerhouding = 3:8:5 ✓ (dit kan nie verder vereenvoudig word nie aangesien die GGF van 3, 8 en 5 gelyk is aan 1)' },
        { difficulty: 'Easy', question: 'ʼn Leerder vereenvoudig 55:33 en sê die GGF is 5, wat ʼn antwoord van 11:6,6 gee. Verduidelik die fout en gee die korrekte vereenvoudigde verhouding.', answer: 'Die leerder het die verkeerde GGF gebruik. Die GGF van 55 en 33 is eintlik 11, nie 5 nie. Deel korrek: 55 ÷ 11 = 5 en 33 ÷ 11 = 3, wat die korrekte vereenvoudigde verhouding van 5:3 gee.', checkMode: 'self' },

        // Blok 2 — Ekwivalente verhoudings (4-7, Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'Is 5:6 en 20:24 ekwivalente verhoudings?', answer: 'ja', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja', 'JA'], explanation: 'Vermenigvuldig altwee dele van 5:6 met 4: 5 × 4 = 20 en 6 × 4 = 24.\nDus 20:24 = 5:6.\nJa, hulle is ekwivalente verhoudings ✓' },
        { difficulty: 'Medium', question: 'ʼn Verfmengsel gebruik blou en wit verf in die verhouding 4:7. As ʼn groter lot 28 liter wit verf gebruik, hoeveel liter blou verf is nodig?', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16 liter'], explanation: 'Verhouding blou:wit = 4:7.\nSkaalfaktor = 28 ÷ 7 = 4.\nBlou verf = 4 × 4 = 16 liter ✓' },
        { difficulty: 'Medium', question: 'Watter van hierdie verhoudings is ekwivalent aan 12:18 — 2:3 of 3:4?', answer: '2:3', checkMode: 'auto', correctAnswer: '2:3', correctAnswers: ['2:3', 'net 2:3'], explanation: 'GGF van 12 en 18 is 6.\n12 ÷ 6 = 2 en 18 ÷ 6 = 3, dus vereenvoudig 12:18 na 2:3.\n2:3 is ekwivalent aan 12:18 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder kontroleer of 4:5 en 7:8 ekwivalent is deur 3 by altwee dele van 4:5 te tel om 7:8 te kry, en kom tot die gevolgtrekking dat hulle ekwivalent is. Is dit korrek? Verduidelik.', answer: 'Nee, dit is verkeerd. Ekwivalente verhoudings moet gevorm word deur altwee dele met dieselfde getal te vermenigvuldig of te deel, nie deur dieselfde getal by elke deel te tel nie. As dit korrek getoets word, is 7 ÷ 4 = 1,75 terwyl 8 ÷ 5 = 1,6, wat nie gelyk is nie, dus is 4:5 en 7:8 nie ekwivalente verhoudings nie.', checkMode: 'self' },

        // Blok 3 — ʼn Bedrag in ʼn gegewe verhouding verdeel (8-11, Medium)
        { difficulty: 'Medium', question: 'Verdeel R720 in die verhouding 5:4.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Eerste aandeel', correctAnswer: 'R400', correctAnswers: ['R400', '400'], explanation: 'Totale dele = 5 + 4 = 9.\nEen deel = R720 ÷ 9 = R80.\nEerste aandeel = 5 × R80 = R400 ✓' },
          { label: 'b) Tweede aandeel', correctAnswer: 'R320', correctAnswers: ['R320', '320'], explanation: 'Totale dele = 5 + 4 = 9.\nEen deel = R720 ÷ 9 = R80.\nTweede aandeel = 4 × R80 = R320 ✓\nKontroleer: R400 + R320 = R720 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Bongani, Thandiwe en Musa verdeel 900 lekkers in die verhouding 1:2:3. Hoeveel lekkers kry elke persoon?', answer: '', checkMode: 'auto', parts: [
          { label: "a) Bongani se lekkers", correctAnswer: '150', correctAnswers: ['150'], explanation: 'Totale dele = 1 + 2 + 3 = 6.\nEen deel = 900 ÷ 6 = 150.\nBongani = 1 × 150 = 150 ✓' },
          { label: "b) Thandiwe se lekkers", correctAnswer: '300', correctAnswers: ['300'], explanation: 'Totale dele = 1 + 2 + 3 = 6.\nEen deel = 900 ÷ 6 = 150.\nThandiwe = 2 × 150 = 300 ✓' },
          { label: "c) Musa se lekkers", correctAnswer: '450', correctAnswers: ['450'], explanation: 'Totale dele = 1 + 2 + 3 = 6.\nEen deel = 900 ÷ 6 = 150.\nMusa = 3 × 150 = 450 ✓\nKontroleer: 150 + 300 + 450 = 900 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Twee neefs/niggies verdeel ʼn stapel ruilkaarte in die verhouding 5:3. Die een met die kleiner aandeel kry 36 kaarte. Hoeveel kaarte was daar altesaam in die stapel?', answer: '96', checkMode: 'auto', correctAnswer: '96', correctAnswers: ['96'], explanation: 'Die kleiner aandeel stem ooreen met die "3"-deel van die verhouding.\nEen deel = 36 ÷ 3 = 12.\nTotale dele = 5 + 3 = 8.\nTotale kaarte = 8 × 12 = 96 ✓' },
        { difficulty: 'Medium', question: 'ʼn 250 m-lengte heiningdraad word in twee stukke gesny in die verhouding 2:3. Thabiso kontroleer sy antwoord deur die twee stukke weer bymekaar te tel. Wat behoort die twee stukke te meet, en werk sy kontrole?', answer: '100 m en 150 m. Kontroleer: 100 + 150 = 250 m, wat ooreenstem met die oorspronklike lengte, dus werk die kontrole.', checkMode: 'self' },

        // Blok 4 — Koerse en eenheidskoerse (12-15, Medium)
        { difficulty: 'Medium', question: 'ʼn Afleweringsbestelwa ry 420 km in 6 uur. Wat is sy gemiddelde spoed in km per uur?', answer: '70 km/h', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70', '70km/h', '70 km/h', '70km per uur', '70 km per uur'], explanation: 'Spoed = afstand ÷ tyd.\n420 ÷ 6 = 70 km/h ✓' },
        { difficulty: 'Medium', question: 'Verduidelik, met ʼn voorbeeld, waarom ʼn koers eenhede het maar ʼn verhouding nie.', answer: 'ʼn Verhouding vergelyk twee hoeveelhede van dieselfde soort, dus is die eenhede aan albei kante dieselfde en kanselleer hulle uit — byvoorbeeld die vergelyking van 6 seuns tot 9 meisies gee 6:9, sonder eenhede. ʼn Koers vergelyk twee hoeveelhede van verskillende soorte, dus kan die eenhede nie kanselleer nie — byvoorbeeld 70 km per uur vergelyk kilometer met ure, dus moet die antwoord met eenhede geskryf word.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Winkel verkoop kookolie teen R84 vir ʼn 4 liter bottel, en R150 vir ʼn 6 liter bottel. Watter bottel bied die goedkoopste prys per liter?', answer: 'eerste bottel', checkMode: 'auto', correctAnswer: 'eerste bottel', correctAnswers: ['eerste bottel', 'die eerste bottel', 'eerste', 'bottel 1', '4 liter bottel'], explanation: 'Eerste bottel: R84 ÷ 4 = R21 per liter.\nTweede bottel: R150 ÷ 6 = R25 per liter.\nR21 is minder as R25, dus het die 4 liter bottel die goedkoopste prys per liter ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder bereken ʼn eenheidskoers vir ʼn oefenlogboek-afstand van 150 km wat in 2 uur afgelê is, deur 2 ÷ 150 te bereken, en kry 0,0133 uur per km. Verduidelik wat verkeerd gegaan het en gee die korrekte eenheidskoers in km per uur.', answer: 'Die leerder het tyd deur afstand gedeel in plaas van afstand deur tyd, wat ure per km gee in plaas van km per uur. Die korrekte eenheidskoers is afstand ÷ tyd = 150 ÷ 2 = 75 km per uur.', checkMode: 'self' },

        // Blok 5 — Koersprobleme oplos (16-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Tuinsproeier stort water teen ʼn koers van 9 liter per minuut. Hoeveel water word na 6 minute gestort?', answer: '54 liter', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54 liter', '54L'], explanation: 'Ons ken die eenheidskoers (9 liter per minuut) en die hoeveelheid (6 minute). Ons moet die totaal vind, dus vermenigvuldig: 9 × 6 = 54 liter ✓' },
        { difficulty: 'Hard', question: 'Nandi verdien geld teen ʼn koers van R10 per uur. Voordat jy besluit om te vermenigvuldig of te deel, identifiseer wat gegee is en wat gevind moet word as sy wil weet hoeveel ure sy moet werk om R150 te verdien.', answer: 'Gegee: die eenheidskoers (R10 per uur) en die totale bedrag om te verdien (R150). Nodig: die aantal ure (die hoeveelheid). Aangesien die totaal en die koers bekend is, deel ons: 150 ÷ 10 = 15 uur.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Mpho ry 100 km teen 50 km per uur, en dan nog 80 km teen 40 km per uur op ʼn ander pad. Wat is die totale tyd vir haar reis?', answer: '4 uur', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 uur', '4h', '4 ure'], explanation: 'Tyd vir eerste deel: 100 ÷ 50 = 2 uur.\nTyd vir tweede deel: 80 ÷ 40 = 2 uur.\nTotale tyd = 2 + 2 = 4 uur ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder verdien R180 deur teen ʼn koers van R12 per uur te werk, en bereken die aantal ure gewerk as 180 × 12 = 2 160 uur. Verduidelik die fout en gee die korrekte aantal ure.', answer: 'Die leerder het vermenigvuldig in plaas van gedeel. Wanneer jy die totaal verdien en die eenheidskoers ken, deel jy die totaal deur die koers om die hoeveelheid (ure) te vind, nie vermenigvuldig nie. Die korrekte berekening is 180 ÷ 12 = 15 uur.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het verhoudings, ekwivalente verhoudings, verdeling volgens ʼn verhouding en koersprobleme baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Jy is redelik seker van die meeste hiervan — gaan gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die vereenvoudiging van verhoudings en eenheidskoerse weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Verhoudings skryf en vereenvoudig (0-3, Maklik)
        { difficulty: 'Easy', question: 'Vereenvoudig die verhouding 36:24.', answer: '3:2', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2'], explanation: 'GGF van 36 en 24 is 12.\n36 ÷ 12 = 3 en 24 ÷ 12 = 2.\nVereenvoudigde verhouding = 3:2 ✓' },
        { difficulty: 'Easy', question: 'ʼn Parkeerterrein het 21 klein motors en 14 bakkies. Skryf die verhouding van klein motors tot bakkies in eenvoudigste vorm.', answer: '3:2', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2'], explanation: 'GGF van 21 en 14 is 7.\n21 ÷ 7 = 3 en 14 ÷ 7 = 2.\nVerhouding van klein motors tot bakkies = 3:2 ✓' },
        { difficulty: 'Easy', question: 'Vereenvoudig die verhouding 72:48:24.', answer: '3:2:1', checkMode: 'auto', correctAnswer: '3:2:1', correctAnswers: ['3:2:1'], explanation: 'GGF van 72, 48 en 24 is 24.\n72 ÷ 24 = 3, 48 ÷ 24 = 2, 24 ÷ 24 = 1.\nVereenvoudigde verhouding = 3:2:1 ✓' },
        { difficulty: 'Easy', question: 'ʼn Leerder vereenvoudig 40:16 deur net die eerste getal deur 8 te deel, en skryf die antwoord as "5:16". Verduidelik die fout en gee die korrekte vereenvoudigde verhouding.', answer: 'Die leerder het slegs die eerste term deur die GGF gedeel en die tweede term onveranderd gelaat. Albei dele van ʼn verhouding moet deur dieselfde GGF gedeel word. GGF van 40 en 16 is 8, dus 40 ÷ 8 = 5 en 16 ÷ 8 = 2. Die korrekte vereenvoudigde verhouding is 5:2, nie 5:16 nie.', checkMode: 'self' },

        // Blok 2 — Ekwivalente verhoudings (4-7, Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'Is 2:9 en 6:27 ekwivalente verhoudings?', answer: 'ja', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja', 'JA'], explanation: 'Vermenigvuldig altwee dele van 2:9 met 3: 2 × 3 = 6 en 9 × 3 = 27.\nDus 6:27 = 2:9.\nJa, hulle is ekwivalente verhoudings ✓' },
        { difficulty: 'Medium', question: 'ʼn Limonaderesep gebruik suurlemoensap en water in die verhouding 3:5. As ʼn groter beker 45 koppies water gebruik, hoeveel koppies suurlemoensap is nodig?', answer: '27', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27 koppies'], explanation: 'Verhouding sap:water = 3:5.\nSkaalfaktor = 45 ÷ 5 = 9.\nSuurlemoensap = 3 × 9 = 27 koppies ✓' },
        { difficulty: 'Medium', question: 'Watter van hierdie verhoudings is ekwivalent aan 16:20 — 4:5 of 5:6?', answer: '4:5', checkMode: 'auto', correctAnswer: '4:5', correctAnswers: ['4:5', 'net 4:5'], explanation: 'GGF van 16 en 20 is 4.\n16 ÷ 4 = 4 en 20 ÷ 4 = 5, dus vereenvoudig 16:20 na 4:5.\n4:5 is ekwivalent aan 16:20 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder kontroleer of 6:7 en 9:10 ekwivalent is deur 3 by altwee dele van 6:7 te tel om 9:10 te kry, en kom tot die gevolgtrekking dat hulle ekwivalent is. Is hierdie redenasie korrek? Verduidelik.', answer: 'Nee, hierdie redenasie is verkeerd. Ekwivalente verhoudings word gevind deur altwee dele met dieselfde getal te vermenigvuldig of te deel, nie deur dieselfde getal by altwee dele te tel nie. As dit korrek getoets word: 9 ÷ 6 = 1,5 terwyl 10 ÷ 7 ≈ 1,43, wat verskillend is, dus is 6:7 en 9:10 nie eintlik ekwivalente verhoudings nie.', checkMode: 'self' },

        // Blok 3 — ʼn Bedrag in ʼn gegewe verhouding verdeel (8-11, Medium)
        { difficulty: 'Medium', question: 'Verdeel R720 in die verhouding 5:7.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Eerste aandeel', correctAnswer: 'R300', correctAnswers: ['R300', '300'], explanation: 'Totale dele = 5 + 7 = 12.\nEen deel = R720 ÷ 12 = R60.\nEerste aandeel = 5 × R60 = R300 ✓' },
          { label: 'b) Tweede aandeel', correctAnswer: 'R420', correctAnswers: ['R420', '420'], explanation: 'Totale dele = 5 + 7 = 12.\nEen deel = R720 ÷ 12 = R60.\nTweede aandeel = 7 × R60 = R420 ✓\nKontroleer: R300 + R420 = R720 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Lindiwe, Sipho en Refilwe verdeel 1 200 lugtyd-punte in die verhouding 2:3:5. Hoeveel punte kry elke persoon?', answer: '', checkMode: 'auto', parts: [
          { label: "a) Lindiwe se punte", correctAnswer: '240', correctAnswers: ['240'], explanation: 'Totale dele = 2 + 3 + 5 = 10.\nEen deel = 1 200 ÷ 10 = 120.\nLindiwe = 2 × 120 = 240 ✓' },
          { label: "b) Sipho se punte", correctAnswer: '360', correctAnswers: ['360'], explanation: 'Totale dele = 2 + 3 + 5 = 10.\nEen deel = 1 200 ÷ 10 = 120.\nSipho = 3 × 120 = 360 ✓' },
          { label: "c) Refilwe se punte", correctAnswer: '600', correctAnswers: ['600'], explanation: 'Totale dele = 2 + 3 + 5 = 10.\nEen deel = 1 200 ÷ 10 = 120.\nRefilwe = 5 × 120 = 600 ✓\nKontroleer: 240 + 360 + 600 = 1 200 ✓' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Boks potlode word tussen twee klaskamers verdeel in die verhouding 2:7. Die klaskamer met die groter aandeel kry 84 potlode. Hoeveel potlode was daar altesaam in die boks?', answer: '108', checkMode: 'auto', correctAnswer: '108', correctAnswers: ['108'], explanation: 'Die groter aandeel stem ooreen met die "7"-deel van die verhouding.\nEen deel = 84 ÷ 7 = 12.\nTotale dele = 2 + 7 = 9.\nTotale potlode = 9 × 12 = 108 ✓' },
        { difficulty: 'Medium', question: 'ʼn 480 cm-lint word in twee stukke gesny in die verhouding 3:5. Anele kontroleer haar antwoord deur die twee stukke weer bymekaar te tel. Wat behoort die twee stukke te meet, en werk haar kontrole?', answer: '180 cm en 300 cm. Kontroleer: 180 + 300 = 480 cm, wat ooreenstem met die oorspronklike lengte, dus werk die kontrole.', checkMode: 'self' },

        // Blok 4 — Koerse en eenheidskoerse (12-15, Medium)
        { difficulty: 'Medium', question: 'ʼn Bus ry 195 km in 3 uur. Wat is sy spoed in km per uur?', answer: '65 km/h', checkMode: 'auto', correctAnswer: '65', correctAnswers: ['65', '65km/h', '65 km/h', '65km per uur', '65 km per uur'], explanation: 'Spoed = afstand ÷ tyd.\n195 ÷ 3 = 65 km/h ✓' },
        { difficulty: 'Medium', question: 'Verduidelik die verskil tussen ʼn verhouding en ʼn koers, met ʼn oorspronklike voorbeeld van elk uit die alledaagse lewe.', answer: 'ʼn Verhouding vergelyk twee hoeveelhede van dieselfde soort en het geen eenhede nie — byvoorbeeld, in ʼn klas van 30 leerders met 18 meisies en 12 seuns, is die verhouding van meisies tot seuns 18:12, wat vereenvoudig na 3:2. ʼn Koers vergelyk twee hoeveelhede van verskillende soorte en het eenhede — byvoorbeeld, ʼn drukker wat 40 bladsye in 5 minute druk, het ʼn koers van 8 bladsye per minuut.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Appelliewe kos R56 vir 8 kg by een marksalletjie, en R64 vir 10 kg by ʼn ander. Watter stalletjie het die goedkoopste prys per kilogram?', answer: 'tweede stalletjie', checkMode: 'auto', correctAnswer: 'tweede stalletjie', correctAnswers: ['tweede stalletjie', 'die tweede stalletjie', 'tweede', 'stalletjie 2'], explanation: 'Eerste stalletjie: R56 ÷ 8 = R7 per kg.\nTweede stalletjie: R64 ÷ 10 = R6,40 per kg.\nR6,40 is minder as R7, dus het die tweede stalletjie die goedkoopste prys per kilogram ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder bereken ʼn eenheidskoers vir ʼn fietsryer wat 240 km in 5 uur aflê, deur 5 ÷ 240 te bereken, en kry 0,0208 uur per km. Verduidelik wat verkeerd gegaan het en gee die korrekte eenheidskoers in km per uur.', answer: 'Die leerder het tyd deur afstand gedeel in plaas van afstand deur tyd, wat ure per km gee in plaas van km per uur. Die korrekte eenheidskoers is afstand ÷ tyd = 240 ÷ 5 = 48 km per uur.', checkMode: 'self' },

        // Blok 5 — Koersprobleme oplos (16-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Waterpomp vul ʼn tenk teen ʼn koers van 15 liter per minuut. Hoeveel water is in die tenk na 9 minute?', answer: '135 liter', checkMode: 'auto', correctAnswer: '135', correctAnswers: ['135', '135 liter', '135L'], explanation: 'Ons ken die eenheidskoers (15 liter per minuut) en die hoeveelheid (9 minute). Ons moet die totaal vind, dus vermenigvuldig: 15 × 9 = 135 liter ✓' },
        { difficulty: 'Hard', question: 'Tumelo verdien geld teen ʼn koers van R14 per uur. Voordat jy besluit om te vermenigvuldig of te deel, identifiseer wat gegee is en wat gevind moet word as hy wil weet hoeveel ure hy moet werk om R210 te verdien.', answer: 'Gegee: die eenheidskoers (R14 per uur) en die totale bedrag om te verdien (R210). Nodig: die aantal ure (die hoeveelheid). Aangesien die totaal en die koers bekend is, deel ons: 210 ÷ 14 = 15 uur.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Zanele ry 150 km teen 75 km per uur, en dan nog 60 km teen 30 km per uur op ʼn grondpad. Wat is die totale tyd vir haar reis?', answer: '4 uur', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 uur', '4h', '4 ure'], explanation: 'Tyd vir eerste deel: 150 ÷ 75 = 2 uur.\nTyd vir tweede deel: 60 ÷ 30 = 2 uur.\nTotale tyd = 2 + 2 = 4 uur ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder verdien R150 deur teen ʼn koers van R15 per uur te werk, en bereken die aantal ure gewerk as 150 × 15 = 2 250 uur. Verduidelik die fout en gee die korrekte aantal ure.', answer: 'Die leerder het vermenigvuldig in plaas van gedeel. Wanneer jy die totaal verdien en die eenheidskoers ken, deel jy die totaal deur die koers om die hoeveelheid (ure) te vind, nie vermenigvuldig nie. Die korrekte berekening is 150 ÷ 15 = 10 uur.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het verhoudings, ekwivalente verhoudings, verdeling volgens ʼn verhouding en koersprobleme baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Jy is redelik seker van die meeste hiervan — gaan gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die vereenvoudiging van verhoudings en eenheidskoerse weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het verhouding en koers baasgeraak.' },
      { minPercent: 75, message: 'Uitstekende werk! Jy het ʼn sterk begrip van verhouding en koers.' },
      { minPercent: 50, message: 'Goeie poging! Hersien die afdelings waar jy punte verloor het en probeer weer.' },
      { minPercent: 0, message: "Hou aan probeer! Werk weer deur die studiegids en probeer nog ʼn slag." },
    ],
  },
}
