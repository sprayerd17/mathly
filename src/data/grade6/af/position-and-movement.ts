import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (posisie en beweging rolle) ─────────────────────────────
// letter (kolom)      → blue   (#2563eb)
// number (ry)          → red    (#dc2626)
// alfanumeriese verw.   → orange (#ea580c)
// rigtings/roete        → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

// ─── Gedeelde verwysingsrooster-diagram (dorpskaart met alfanumeriese rooster, geen antwoordlekkasie nie) ──
// Kolomme A-D (links na regs), rye 1-4 (bo na onder, ry 1 heel bo soos ʼn regte kaart/atlas-rooster)
// Landmerke: Kliniek (B1), Mark (D1), Skool (A3), Bank (C2), Park (D4)
const GRID_SVG = '<svg viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg"><text x="140" y="16" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Dorpskaart</text><line x1="40" y1="30" x2="40" y2="190" stroke="#0f1f3d" stroke-width="2"/><line x1="90" y1="30" x2="90" y2="190" stroke="#9ca3af" stroke-width="1"/><line x1="140" y1="30" x2="140" y2="190" stroke="#9ca3af" stroke-width="1"/><line x1="190" y1="30" x2="190" y2="190" stroke="#9ca3af" stroke-width="1"/><line x1="240" y1="30" x2="240" y2="190" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="30" x2="240" y2="30" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="70" x2="240" y2="70" stroke="#9ca3af" stroke-width="1"/><line x1="40" y1="110" x2="240" y2="110" stroke="#9ca3af" stroke-width="1"/><line x1="40" y1="150" x2="240" y2="150" stroke="#9ca3af" stroke-width="1"/><line x1="40" y1="190" x2="240" y2="190" stroke="#0f1f3d" stroke-width="2"/><text x="65" y="26" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">A</text><text x="115" y="26" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">B</text><text x="165" y="26" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">C</text><text x="215" y="26" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">D</text><text x="30" y="54" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">1</text><text x="30" y="94" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">2</text><text x="30" y="134" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">3</text><text x="30" y="174" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">4</text><circle cx="115" cy="50" r="5" fill="#16a34a"/><text x="115" y="44" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">Kliniek</text><circle cx="215" cy="50" r="5" fill="#16a34a"/><text x="215" y="44" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">Mark</text><circle cx="65" cy="130" r="5" fill="#16a34a"/><text x="65" y="124" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">Skool</text><circle cx="165" cy="90" r="5" fill="#16a34a"/><text x="165" y="84" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">Bank</text><circle cx="215" cy="170" r="5" fill="#16a34a"/><text x="215" y="164" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">Park</text></svg>'

export const topicData: TopicData = {
  title: 'Posisie en Beweging',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — ALFANUMERIESE ROOSTERVERWYSINGS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'alpha-numeric-grid-references',
      title: 'Alfanumeriese Roosterverwysings',
      icon: '🔤',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Rooster word dikwels met ${bl('letters')} bo-oor gemerk vir die kolomme en ${re('getalle')} langs die kant vir die rye. Deur ʼn letter en ʼn getal te kombineer, soos ${or('B4')} of ${or('D1')}, kry ons ʼn ${or('alfanumeriese roosterverwysing')}. Dit is presies hoe kaartboeke, atlasse en straatgidse hulle roosters merk sodat enige blok op die kaart vinnig gevind kan word.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kolomletter')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('rygetal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('alfanumeriese verwysing')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Kolomletter</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${bl('letter')} merk die ${bl('kolom')} — word altyd <strong>eerste</strong> geskryf en gelees.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Rygetal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${re('getal')} merk die ${re('ry')} — word altyd <strong>tweede</strong> geskryf en gelees.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Gekombineerde verwysing</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Sel word genoem deur die ${bl('letter')} en ${re('getal')} sonder ʼn spasie saam te voeg, bv. ${or('B4')} beteken kolom ${bl('B')}, ry ${re('4')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Letter eerste, dan getal — net soos lees</p>` +
        `<p style="margin:0;color:#9a3412;">Lees ʼn alfanumeriese roosterverwysing op dieselfde manier as wat jy ʼn sin lees: eers dwars oor, dan af. In ${or('C2')}, vind eers ${bl('kolom C')} deur bo-oor te beweeg, en beweeg dan af na ${re('ry 2')}. Die sel waar hulle ontmoet is ${or('C2')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Stadion se sitplekplan gebruik alfanumeriese roosterverwysings. Sitplekblok E is die 5de kolom en ry 3 is die 3de ry van bo af. Wat is die roosterverwysing van hierdie sitplekblok?',
          answer: `Die roosterverwysing is ${or('E3')}`,
          steps: [
            `Die ${bl('kolomletter')} kom eerste — hierdie blok is in kolom ${bl('E')}.`,
            `Die ${re('rygetal')} kom tweede — hierdie blok is in ry ${re('3')}.`,
            `Kombineer hulle sonder spasie: ${or('E3')}.`,
          ],
        },
        {
          question: 'Op ʼn kaartrooster word die Museum by verwysing D2 gevind. In watter kolom en in watter ry is die Museum?',
          answer: `Die Museum is in ${bl('kolom D')} en ${re('ry 2')}`,
          steps: [
            `In ʼn alfanumeriese verwysing noem die ${bl('letter')} altyd die ${bl('kolom')} en die ${re('getal')} altyd die ${re('ry')}.`,
            `${or('D2')} verdeel in ${bl('D')} (die kolom) en ${re('2')} (die ry).`,
            `Die Museum is dus in ${bl('kolom D')}, ${re('ry 2')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Rooster met kolomme gemerk A tot D bo-oor en rye gemerk 1 tot 4 langs die kant, met een sel soos C2 uitgelig om te wys hoe die letter en getal saamsmelt tot ʼn alfanumeriese roosterverwysing" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om alfanumeriese roosterverwysings te lees en te skryf deur ʼn kolomletter en ʼn rygetal te kombineer" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — POSISIES OP ʼN KAART VIND
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'locating-positions-on-a-map',
      title: 'Posisies op ʼn Kaart Vind',
      icon: '🗺️',
      explanation:
        `<p style="margin-bottom:16px;">Kaarte en planne gebruik dieselfde alfanumeriese rooster om ons te help om regte plekke te vind — strate, geboue en landmerke. Om iets op ʼn kaart te ${or('vind')}, soek ons waar die ${bl('kolom')} en ${re('ry')} lyne kruis. Om te vind wat ${or('in')} ʼn sel is, doen ons die teenoorgestelde — volg die ${bl('kolom')}-letter af en die ${re('ry')}-getal oor totdat hulle ontmoet.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kolom')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('ry')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('landmerk')}</span>` +
        `</div>` +

        // ── Two question types ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Twee soorte vrae</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">"By watter roosterverwysing is X?"</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vind die ${gr('landmerk')} op die kaart, lees dan sy ${bl('kolomletter')} en ${re('rygetal')} af.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">"Wat is by verwysing X?"</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vind die ${bl('kolom')}, vind die ${re('ry')}, kyk dan watter ${gr('landmerk')} sit waar hulle kruis.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kontroleer altyd albei dele van die verwysing</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Algemene fout is om net die ${bl('kolom')} of net die ${re('ry')} te kyk. Twee landmerke kan dieselfde kolom deel, of dieselfde ry deel — maar net een landmerk sit waar ʼn spesifieke ${bl('kolom')} <strong>en</strong> ${re('ry')} kruis.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Op ʼn dorpskaart word die Biblioteek gevind waar kolom C ry 3 kruis. Wat is die Biblioteek se roosterverwysing?',
          answer: `Die Biblioteek se roosterverwysing is ${or('C3')}`,
          steps: [
            `Die Biblioteek sit waar ${bl('kolom C')} en ${re('ry 3')} kruis.`,
            `Skryf die ${bl('kolomletter')} eerste, dan die ${re('rygetal')}: ${or('C3')}.`,
          ],
        },
        {
          question: 'Op ʼn kaart is die Brandweerstasie by roosterverwysing A2 en die Apteek by roosterverwysing A4. Deel hierdie twee landmerke ʼn kolom, ʼn ry, albei, of geeneen?',
          answer: `Hulle deel net ʼn ${bl('kolom')}`,
          steps: [
            `Brandweerstasie: ${bl('kolom A')}, ${re('ry 2')}. Apteek: ${bl('kolom A')}, ${re('ry 4')}.`,
            `Albei het ${bl('kolom A')} — hulle deel dus ʼn ${bl('kolom')}.`,
            `Hulle ${re('rygetalle')} verskil (${re('2')} en ${re('4')}) — hulle deel dus nie ʼn ${re('ry')} nie.`,
            `Hulle deel net ʼn ${bl('kolom')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Eenvoudige dorpskaart met ʼn rooster gemerk A tot D bo-oor en 1 tot 4 langs die kant, met verskeie landmerke soos ʼn kliniek, mark, skool en bank elk in ʼn ander roostersel geplaas" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die roosterverwysing van ʼn landmerk op ʼn kaart te vind en hoe om te vind watter landmerk by ʼn gegewe roosterverwysing is" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — RIGTINGS TUSSEN POSISIES GEE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'giving-directions-between-positions',
      title: 'Rigtings Tussen Posisies Gee',
      icon: '🧭',
      explanation:
        `<p style="margin-bottom:16px;">In vorige grade het jy geleer om rigtings te <em>volg</em> wat iemand anders vir jou gegee het. Nou moet jy self ${gr('duidelike rigtings kan gee')} — om vir iemand presies te vertel hoe om van een roosterverwysing na ʼn ander op ʼn kaart te beweeg. Goeie rigtings noem die ${bl('beginpunt')}, die ${gr('beweging')} (hoeveel blokke, en watter rigting), en die ${re('eindpunt')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('beginpunt')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('beweging')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('eindpunt')}</span>` +
        `</div>` +

        // ── Movement rules ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe beweging ʼn roosterverwysing verander</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Dwars oor beweeg (links/regs)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Verander die ${bl('kolomletter')} — beweeg langs die alfabet (bv. ${bl('B')} → ${bl('C')} → ${bl('D')}) terwyl die ${re('rygetal')} dieselfde bly.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Op/af beweeg</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Verander die ${re('rygetal')} — tel blokke op of af terwyl die ${bl('kolomletter')} dieselfde bly.</p>` +
        `</div>` +

        `</div>` +

        // ── Giving good directions ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Duidelike rigtings gee</p>` +
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#374151;">Voorbeeld: "Begin by die ${bl('Kliniek')}. Beweeg ${gr('2 blokke regs')} en dan ${gr('3 blokke af')} om by die ${re('Park')} te kom." ʼn Goeie stel rigtings noem die ${bl('beginpunt')}, gee elke ${gr('beweging')} met ʼn getal blokke en ʼn rigting, en noem die ${re('eindbestemming')}.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Werk die beweging uit voordat jy dit beskryf</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om rigtings van een verwysing na ʼn ander te gee, vind eers hoeveel letters uitmekaar die ${bl('kolomme')} is en hoeveel getalle uitmekaar die ${re('rye')} is. Daardie twee tellings word die "blokke oor" en "blokke op/af" in jou rigtings.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gee rigtings om van roosterverwysing A1 na roosterverwysing C1 op ʼn kaart te beweeg.',
          answer: `Beweeg ${gr('2 blokke regs')} — van ${bl('A1')} na ${re('C1')}`,
          steps: [
            `Vergelyk die ${bl('kolomme')}: begin is kolom A, einde is kolom C. A → B → C is ${gr('2 tree dwars oor')}.`,
            `Vergelyk die ${re('rye')}: albei is ry 1, so daar is geen op/af beweging nie.`,
            `Rigtings: Begin by ${bl('A1')}, beweeg ${gr('2 blokke regs')}, kom by ${re('C1')} aan.`,
          ],
        },
        {
          question: 'Gee rigtings om van roosterverwysing B2 na roosterverwysing B4 op ʼn kaart te beweeg.',
          answer: `Beweeg ${gr('2 blokke af')} — van ${bl('B2')} na ${re('B4')}`,
          steps: [
            `Vergelyk die ${bl('kolomme')}: albei is kolom B, so daar is geen links/regs beweging nie.`,
            `Vergelyk die ${re('rye')}: begin is ry 2, einde is ry 4. 4 − 2 = ${gr('2 tree af')}.`,
            `Rigtings: Begin by ${bl('B2')}, beweeg ${gr('2 blokke af')}, kom by ${re('B4')} aan.`,
          ],
        },
        {
          question: 'Gee rigtings om van roosterverwysing A1 na roosterverwysing D3 op ʼn kaart te beweeg.',
          answer: `Beweeg ${gr('3 blokke regs')} en ${gr('2 blokke af')} — van ${bl('A1')} na ${re('D3')}`,
          steps: [
            `Vergelyk die ${bl('kolomme')}: A → B → C → D is ${gr('3 tree dwars oor')}.`,
            `Vergelyk die ${re('rye')}: ry 1 na ry 3 is 3 − 1 = ${gr('2 tree af')}.`,
            `Rigtings: Begin by ${bl('A1')}, beweeg ${gr('3 blokke regs')} en ${gr('2 blokke af')}, kom by ${re('D3')} aan.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Kaartrooster gemerk A tot D bo-oor en 1 tot 4 langs die kant met twee landmerke gemerk, een as beginpunt en een as bestemming, met ʼn pyl tussen hulle wat die roete wys sonder om die getal blokke te merk sodat leerders dit self moet uitwerk" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om duidelike stap-vir-stap rigtings uit te werk en te gee om tussen twee alfanumeriese roosterverwysings op ʼn kaart te beweeg" />',
    },
  ],
  topicPractice: [
    // ── V1 Maklik — rooster posisie lees ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Gebruik die kaart hierbo — wat is die roosterverwysing van die Bank?',
      answer: 'C2',
      checkMode: 'auto',
      correctAnswer: 'C2',
      correctAnswers: ['C2', 'c2'],
      explanation: 'Die Bank is gemerk waar kolom C ry 2 kruis, so sy roosterverwysing is C2.',
    },

    // ── V2 Maklik — landmerk deur posisie identifiseer ────────────────────────
    {
      difficulty: 'Easy',
      question: 'Gebruik die kaart hierbo — watter landmerk is by roosterverwysing A3?',
      answer: 'Skool',
      checkMode: 'auto',
      correctAnswer: 'Skool',
      explanation: 'Kolom A, ry 3 is waar die Skool op die kaart gemerk is.',
    },

    // ── V3 Medium — gedeelde kolom ────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik die kaart hierbo — die Kliniek is by B1 en die Bank is by C2. Deel hulle ʼn kolom of ʼn ry?',
      answer: 'Geeneen',
      checkMode: 'auto',
      correctAnswer: 'Geeneen',
      correctAnswers: ['geeneen', 'nie ʼn kolom of ry nie', 'geen'],
      explanation: 'Die Kliniek is in kolom B, ry 1. Die Bank is in kolom C, ry 2. Die kolomme verskil (B teenoor C) en die rye verskil (1 teenoor 2), so hulle deel geeneen nie.',
    },

    // ── V4 Medium — kolomme tel ─────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik die kaart hierbo — hoeveel blokke dwars oor is dit van die Mark (D1) na die Kliniek (B1)?',
      answer: '2',
      checkMode: 'auto',
      correctAnswer: '2',
      explanation: 'Die Kliniek is in kolom B en die Mark is in kolom D. B → C → D is 2 blokke dwars oor. Albei is in ry 1, so daar is geen op- of afbeweging nie.',
    },

    // ── V5 Medium — rigtings tussen verwysings gee ──────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik die kaart hierbo — gee rigtings om van die Kliniek (B1) na die Bank (C2) te beweeg.',
      answer: 'Beweeg 1 blok regs en 1 blok af, van B1 na C2.',
      checkMode: 'self',
    },

    // ── V6 Moeilik — ʼn multi-stap roete beskryf ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik die kaart hierbo — gee rigtings om van die Skool (A3) na die Mark (D1) te beweeg.',
      answer: 'Beweeg 3 blokke regs en 2 blokke op, van A3 na D1.',
      checkMode: 'self',
    },

    // ── V7 Moeilik — twee roetes vergelyk ────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik die kaart hierbo — watter roete is langer in totale blokke: Kliniek (B1) na Park (D4), of Skool (A3) na Mark (D1)?',
      answer: 'Kliniek na Park is 5 blokke in totaal (2 oor + 3 af). Skool na Mark is 5 blokke in totaal (3 oor + 2 op). Die twee roetes is ewe lank.',
      checkMode: 'self',
    },

    // ── V8 Moeilik — beweging toepas om ʼn verwysing te vind ─────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik die kaart hierbo — Sipho begin by die Park (D4) en beweeg 2 blokke links en 3 blokke op. By watter roosterverwysing eindig hy?',
      answer: 'B1',
      checkMode: 'auto',
      correctAnswer: 'B1',
      correctAnswers: ['B1', 'b1'],
      explanation: 'Begin kolom D, beweeg 2 blokke links: D → C → B. Begin ry 4, beweeg 3 blokke op: 4 − 3 = 1. Sipho eindig by B1, wat die Kliniek is.',
    },

    // ── V9 Moeilik — ʼn bewering verifieer ────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik die kaart hierbo — Lerato beweer dat om van A3 na C2 te beweeg, "2 blokke regs en 1 blok op" nodig is. Is sy korrek?',
      answer: 'Ja. Kolom A na kolom C is 2 blokke regs (A na B na C). Ry 3 na ry 2 is 1 blok op (3 − 1 = 1). Haar rigtings is korrek.',
      checkMode: 'self',
    },
  ],

  scoreMessages: [
    { minScore: 5, message: 'Uitstekend! ʼn Perfekte telling — jy het alfanumeriese roosterverwysings en die gee van rigtings heeltemal onder die knie. Hou so aan!' },
    { minScore: 4, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van posisie en beweging. Gaan die dele wat jy gemis het weer deur en jy sal dit perfek kry.' },
    { minScore: 3, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdeling waar jy punte verloor het en probeer weer.' },
    { minScore: 1, message: 'Goeie poging! Werk deur die studiegids en uitgewerkte voorbeelde weer, en probeer weer.' },
    { minScore: 0, message: "Moenie tou opgooi nie — elke kenner was eers ʼn beginner! Gaan die verduidelikings en uitgewerkte voorbeelde weer deur, en probeer weer." },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Alfanumeriese verwysings lees | 4-6 Gedeelde kolom/ry
    // redenering | 7-10 Blokke tussen verwysings tel | 11-14 Rigtings tussen
    // twee verwysings gee | 15-17 Beweging toepas om ʼn verwysing te vind |
    // 18-19 Multi-stap redenering & bewerings verifieer
    // Gedeelde kaart: Kliniek (B1), Mark (D1), Skool (A3), Bank (C2), Park (D4)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Gebruik die kaart hierbo — wat is die roosterverwysing van die Mark?', checkMode: 'auto', correctAnswer: 'D1', correctAnswers: ['D1', 'd1'], explanation: 'Die Mark is gemerk waar kolom D ry 1 kruis, so sy roosterverwysing is D1.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Gebruik die kaart hierbo — watter landmerk word by roosterverwysing D4 gevind?', checkMode: 'auto', correctAnswer: 'Park', correctAnswers: ['Park', 'park'], explanation: 'Kolom D, ry 4 is waar die Park op die kaart gemerk is.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Gebruik die kaart hierbo — wat is die roosterverwysing van die Skool?', checkMode: 'auto', correctAnswer: 'A3', correctAnswers: ['A3', 'a3'], explanation: 'Die Skool is gemerk waar kolom A ry 3 kruis, so sy roosterverwysing is A3.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'In ʼn alfanumeriese roosterverwysing soos C2, watter deel word altyd eerste geskryf — die letter of die getal?', checkMode: 'auto', correctAnswer: 'Die letter', correctAnswers: ['letter', 'die letter'], explanation: 'ʼn Alfanumeriese roosterverwysing noem altyd eers die kolomletter en dan die rygetal.' },
        { difficulty: 'Easy', question: 'Gebruik die kaart hierbo — die Kliniek is by B1 en die Mark is by D1. Deel hulle ʼn kolom, ʼn ry, albei, of geeneen?', checkMode: 'auto', correctAnswer: 'ʼn Ry', correctAnswers: ['ry', 'ʼn ry', 'hulle deel ʼn ry'], explanation: 'Die Kliniek is in kolom B, ry 1. Die Mark is in kolom D, ry 1. Die kolomme verskil (B teenoor D) maar die ry is dieselfde (1), so hulle deel net ʼn ry.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Gebruik die kaart hierbo — die Bank is by C2 en die Park is by D4. Deel hulle ʼn kolom, ʼn ry, albei, of geeneen?', checkMode: 'auto', correctAnswer: 'Geeneen', correctAnswers: ['geeneen', 'nie ʼn kolom of ry nie', 'geen'], explanation: 'Die Bank is in kolom C, ry 2. Die Park is in kolom D, ry 4. Beide die kolomme (C teenoor D) en die rye (2 teenoor 4) verskil, so hulle deel geeneen nie.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Gebruik die kaart hierbo — noem een landmerk wat ʼn kolom met die Skool deel.', checkMode: 'self', answer: 'Die Skool is by A3, in kolom A. Geen ander landmerk op hierdie kaart (Kliniek B1, Mark D1, Bank C2, Park D4) is in kolom A nie, so daar is geen landmerk wat ʼn kolom met die Skool deel nie.' },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — hoeveel blokke dwars oor is dit van die Kliniek (B1) na die Bank (C2), as jy net kolomme tel?', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', '1 blok'], explanation: 'Die Kliniek is in kolom B en die Bank is in kolom C. B → C is 1 blok dwars oor.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — hoeveel blokke af is dit van die Mark (D1) na die Park (D4), as jy net rye tel?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 blokke'], explanation: 'Die Mark en Park deel kolom D, so ons tel net rye. 4 − 1 = 3 blokke af.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — hoeveel blokke dwars oor en hoeveel blokke af skei die Skool (A3) en die Bank (C2)?', checkMode: 'self', answer: 'Kolomme A na C is 2 blokke dwars oor. Rye 3 na 2 is 1 blok op (of af, afhangende van die rigting van beweging). Die Skool en Bank is dus 2 blokke dwars oor en 1 blok op/af uitmekaar.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Kagiso sê die Kliniek (B1) en die Park (D4) is 4 blokke uitmekaar in totaal omdat "die Park in ry 4 is". Gebruik die kaart hierbo — is Kagiso korrek?', checkMode: 'self', answer: 'Kagiso is nie korrek nie. Die Kliniek is by B1 en die Park is by D4. Die kolomme verskil van B na D, wat 2 blokke dwars oor is, en die rye verskil van 1 na 4, wat 3 blokke af is. Totale blokke = 2 + 3 = 5, nie 4 nie. Kagiso het die Park se rygetal met die totale afstand verwar, in plaas daarvan om albei koördinate te vergelyk.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — gee rigtings om van die Kliniek (B1) na die Mark (D1) te beweeg.', checkMode: 'self', answer: 'Beweeg 2 blokke regs, van B1 na D1. Daar is geen op- of afbeweging nie omdat albei in ry 1 is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — gee rigtings om van die Mark (D1) na die Park (D4) te beweeg.', checkMode: 'self', answer: 'Beweeg 3 blokke af, van D1 na D4. Daar is geen links- of regsbeweging nie omdat albei in kolom D is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — gee rigtings om van die Kliniek (B1) na die Bank (C2) te beweeg.', checkMode: 'self', answer: 'Beweeg 1 blok regs en 1 blok af, van B1 na C2.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — gee rigtings om van die Skool (A3) na die Mark (D1) te beweeg.', checkMode: 'self', answer: 'Beweeg 3 blokke regs en 2 blokke op, van A3 na D1.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — Amahle begin by die Kliniek (B1) en beweeg 2 blokke regs en 1 blok af. By watter roosterverwysing eindig sy?', checkMode: 'auto', correctAnswer: 'D2', correctAnswers: ['D2', 'd2'], explanation: 'Begin kolom B, beweeg 2 blokke regs: B → C → D. Begin ry 1, beweeg 1 blok af: 1 + 1 = 2. Amahle eindig by D2.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — Thabo begin by die Park (D4) en beweeg 1 blok links en 2 blokke op. By watter roosterverwysing eindig hy?', checkMode: 'auto', correctAnswer: 'C2', correctAnswers: ['C2', 'c2'], explanation: 'Begin kolom D, beweeg 1 blok links: D → C. Begin ry 4, beweeg 2 blokke op: 4 − 2 = 2. Thabo eindig by C2, wat die Bank is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — Lerato begin by die Skool (A3) en beweeg 3 blokke regs en 1 blok op. By watter roosterverwysing eindig sy?', checkMode: 'auto', correctAnswer: 'D2', correctAnswers: ['D2', 'd2'], explanation: 'Begin kolom A, beweeg 3 blokke regs: A → B → C → D. Begin ry 3, beweeg 1 blok op: 3 − 1 = 2. Lerato eindig by D2, wat die Bank is.', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'Gebruik die kaart hierbo — ʼn afleweringsbestuurder ry van die Kliniek (B1) na die Skool (A3), en dan na die Bank (C2). Wat is die totale aantal blokke wat vir die hele rit gery is?', checkMode: 'self', answer: 'Kliniek na Skool: kolom B na A is 1 blok dwars oor, ry 1 na 3 is 2 blokke af, totaal 3 blokke. Skool na Bank: kolom A na C is 2 blokke dwars oor, ry 3 na 2 is 1 blok op, totaal 3 blokke. Groottotaal: 3 + 3 = 6 blokke.', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'Gebruik die kaart hierbo — ʼn leerder beweer dat die roete van die Kliniek (B1) na die Park (D4) en die roete van die Skool (A3) na die Mark (D1) albei presies 5 blokke dek. Kontroleer hierdie bewering.', checkMode: 'self', answer: 'Kliniek (B1) na Park (D4): kolomme B na D is 2 blokke dwars oor, rye 1 na 4 is 3 blokke af, totaal 2 + 3 = 5 blokke. Skool (A3) na Mark (D1): kolomme A na D is 3 blokke dwars oor, rye 3 na 1 is 2 blokke op, totaal 3 + 2 = 5 blokke. Die bewering is korrek — albei roetes dek presies 5 blokke.', diagramSvg: GRID_SVG },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die lees van alfanumeriese roosterverwysings, die vind van landmerke en die gee van duidelike rigtings tussen posisies onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou so aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklayout as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Gebruik die kaart hierbo — wat is die roosterverwysing van die Kliniek?', checkMode: 'auto', correctAnswer: 'B1', correctAnswers: ['B1', 'b1'], explanation: 'Die Kliniek is gemerk waar kolom B ry 1 kruis, so sy roosterverwysing is B1.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Gebruik die kaart hierbo — watter landmerk word by roosterverwysing C2 gevind?', checkMode: 'auto', correctAnswer: 'Bank', correctAnswers: ['Bank', 'bank'], explanation: 'Kolom C, ry 2 is waar die Bank op die kaart gemerk is.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Gebruik die kaart hierbo — wat is die roosterverwysing van die Park?', checkMode: 'auto', correctAnswer: 'D4', correctAnswers: ['D4', 'd4'], explanation: 'Die Park is gemerk waar kolom D ry 4 kruis, so sy roosterverwysing is D4.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'In ʼn alfanumeriese roosterverwysing soos C2, watter deel word altyd tweede geskryf — die letter of die getal?', checkMode: 'auto', correctAnswer: 'Die getal', correctAnswers: ['getal', 'die getal'], explanation: 'ʼn Alfanumeriese roosterverwysing noem altyd eers die kolomletter en dan die rygetal.' },
        { difficulty: 'Easy', question: 'Gebruik die kaart hierbo — die Skool is by A3 en die Bank is by C2. Deel hulle ʼn kolom, ʼn ry, albei, of geeneen?', checkMode: 'auto', correctAnswer: 'Geeneen', correctAnswers: ['geeneen', 'nie ʼn kolom of ry nie', 'geen'], explanation: 'Die Skool is in kolom A, ry 3. Die Bank is in kolom C, ry 2. Beide die kolomme (A teenoor C) en die rye (3 teenoor 2) verskil, so hulle deel geeneen nie.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Gebruik die kaart hierbo — die Mark is by D1 en die Park is by D4. Deel hulle ʼn kolom, ʼn ry, albei, of geeneen?', checkMode: 'auto', correctAnswer: 'ʼn Kolom', correctAnswers: ['kolom', 'ʼn kolom', 'hulle deel ʼn kolom'], explanation: 'Die Mark is in kolom D, ry 1. Die Park is in kolom D, ry 4. Die rye verskil (1 teenoor 4) maar die kolom is dieselfde (D), so hulle deel net ʼn kolom.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Gebruik die kaart hierbo — noem een landmerk wat ʼn ry met die Kliniek deel.', checkMode: 'self', answer: 'Die Kliniek is by B1, in ry 1. Die Mark is by D1, ook in ry 1, so die Mark deel ʼn ry met die Kliniek.' },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — hoeveel blokke dwars oor is dit van die Skool (A3) na die Bank (C2), as jy net kolomme tel?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2 blokke'], explanation: 'Die Skool is in kolom A en die Bank is in kolom C. A → B → C is 2 blokke dwars oor.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — hoeveel blokke af skei ry 2 en ry 4, soos tussen die Bank (C2) en die Park (D4)?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2 blokke'], explanation: 'Die Bank is in ry 2 en die Park is in ry 4. 4 − 2 = 2 blokke af.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — hoeveel blokke dwars oor en hoeveel blokke af skei die Kliniek (B1) en die Park (D4)?', checkMode: 'self', answer: 'Kolomme B na D is 2 blokke dwars oor. Rye 1 na 4 is 3 blokke af. Die Kliniek en Park is dus 2 blokke dwars oor en 3 blokke af uitmekaar.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Zanele sê die Skool (A3) en die Mark (D1) is 3 blokke uitmekaar in totaal omdat "die Skool se rygetal 3 is". Gebruik die kaart hierbo — is Zanele korrek?', checkMode: 'self', answer: 'Zanele is nie korrek nie. Die Skool is by A3 en die Mark is by D1. Kolomme A na D is 3 blokke dwars oor, en rye 3 na 1 is 2 blokke op. Totale blokke = 3 + 2 = 5, nie 3 nie. Zanele het die Skool se rygetal met die totale afstand verwar, in plaas daarvan om albei koördinate van die twee posisies te vergelyk.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — gee rigtings om van die Bank (C2) na die Kliniek (B1) te beweeg.', checkMode: 'self', answer: 'Beweeg 1 blok links en 1 blok op, van C2 na B1.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — gee rigtings om van die Park (D4) na die Mark (D1) te beweeg.', checkMode: 'self', answer: 'Beweeg 3 blokke op, van D4 na D1. Daar is geen links- of regsbeweging nie omdat albei in kolom D is.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — gee rigtings om van die Skool (A3) na die Bank (C2) te beweeg.', checkMode: 'self', answer: 'Beweeg 2 blokke regs en 1 blok op, van A3 na C2.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — gee rigtings om van die Kliniek (B1) na die Park (D4) te beweeg.', checkMode: 'self', answer: 'Beweeg 2 blokke regs en 3 blokke af, van B1 na D4.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — Sipho begin by die Skool (A3) en beweeg 2 blokke regs en 2 blokke op. By watter roosterverwysing eindig hy?', checkMode: 'auto', correctAnswer: 'C1', correctAnswers: ['C1', 'c1'], explanation: 'Begin kolom A, beweeg 2 blokke regs: A → B → C. Begin ry 3, beweeg 2 blokke op: 3 − 2 = 1. Sipho eindig by C1.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — Amahle begin by die Park (D4) en beweeg 3 blokke links en 3 blokke op. By watter roosterverwysing eindig sy?', checkMode: 'auto', correctAnswer: 'A1', correctAnswers: ['A1', 'a1'], explanation: 'Begin kolom D, beweeg 3 blokke links: D → C → B → A. Begin ry 4, beweeg 3 blokke op: 4 − 3 = 1. Amahle eindig by A1.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — Thabo begin by die Mark (D1) en beweeg 2 blokke links en 1 blok af. By watter roosterverwysing eindig hy?', checkMode: 'auto', correctAnswer: 'B2', correctAnswers: ['B2', 'b2'], explanation: 'Begin kolom D, beweeg 2 blokke links: D → C → B. Begin ry 1, beweeg 1 blok af: 1 + 1 = 2. Thabo eindig by B2, wat die Kliniek is.', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'Gebruik die kaart hierbo — ʼn toeris stap van die Mark (D1) na die Bank (C2), en dan na die Skool (A3). Wat is die totale aantal blokke wat vir die hele stap geloop is?', checkMode: 'self', answer: 'Mark na Bank: kolom D na C is 1 blok dwars oor, ry 1 na 2 is 1 blok af, totaal 2 blokke. Bank na Skool: kolom C na A is 2 blokke dwars oor, ry 2 na 3 is 1 blok af, totaal 3 blokke. Groottotaal: 2 + 3 = 5 blokke.', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'Gebruik die kaart hierbo — ʼn leerder beweer dat die roete van die Kliniek (B1) na die Skool (A3) korter is as die roete van die Bank (C2) na die Park (D4). Kontroleer hierdie bewering.', checkMode: 'self', answer: 'Kliniek (B1) na Skool (A3): kolom B na A is 1 blok dwars oor, ry 1 na 3 is 2 blokke af, totaal 1 + 2 = 3 blokke. Bank (C2) na Park (D4): kolom C na D is 1 blok dwars oor, ry 2 na 4 is 2 blokke af, totaal 1 + 2 = 3 blokke. Albei roetes is presies 3 blokke — die bewering dat een korter is, is vals; hulle is ewe lank.', diagramSvg: GRID_SVG },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die lees van alfanumeriese roosterverwysings, die vind van landmerke en die gee van duidelike rigtings tussen posisies onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou so aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklayout as Stel 1/2, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Gebruik die kaart hierbo — wat is die roosterverwysing van die Park?', checkMode: 'auto', correctAnswer: 'D4', correctAnswers: ['D4', 'd4'], explanation: 'Die Park is gemerk waar kolom D ry 4 kruis, so sy roosterverwysing is D4.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Gebruik die kaart hierbo — watter landmerk word by roosterverwysing B1 gevind?', checkMode: 'auto', correctAnswer: 'Kliniek', correctAnswers: ['Kliniek', 'kliniek'], explanation: 'Kolom B, ry 1 is waar die Kliniek op die kaart gemerk is.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Gebruik die kaart hierbo — wat is die roosterverwysing van die Bank?', checkMode: 'auto', correctAnswer: 'C2', correctAnswers: ['C2', 'c2'], explanation: 'Die Bank is gemerk waar kolom C ry 2 kruis, so sy roosterverwysing is C2.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'In die alfanumeriese roosterverwysing A3, watter letter noem die kolom en watter getal noem die ry?', checkMode: 'auto', correctAnswer: 'A is die kolom en 3 is die ry', correctAnswers: ['a is die kolom en 3 is die ry', 'kolom a, ry 3', 'a, 3'], explanation: 'In enige alfanumeriese roosterverwysing noem die letter die kolom en die getal die ry. In A3 is A die kolom en 3 die ry.' },
        { difficulty: 'Easy', question: 'Gebruik die kaart hierbo — die Kliniek is by B1 en die Skool is by A3. Deel hulle ʼn kolom, ʼn ry, albei, of geeneen?', checkMode: 'auto', correctAnswer: 'Geeneen', correctAnswers: ['geeneen', 'nie ʼn kolom of ry nie', 'geen'], explanation: 'Die Kliniek is in kolom B, ry 1. Die Skool is in kolom A, ry 3. Beide die kolomme (B teenoor A) en die rye (1 teenoor 3) verskil, so hulle deel geeneen nie.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Gebruik die kaart hierbo — die Bank is by C2 en die Mark is by D1. Deel hulle ʼn kolom, ʼn ry, albei, of geeneen?', checkMode: 'auto', correctAnswer: 'Geeneen', correctAnswers: ['geeneen', 'nie ʼn kolom of ry nie', 'geen'], explanation: 'Die Bank is in kolom C, ry 2. Die Mark is in kolom D, ry 1. Beide die kolomme (C teenoor D) en die rye (2 teenoor 1) verskil, so hulle deel geeneen nie.', diagramSvg: GRID_SVG },
        { difficulty: 'Easy', question: 'Gebruik die kaart hierbo — noem een landmerk wat ʼn kolom met die Mark deel.', checkMode: 'self', answer: 'Die Mark is by D1, in kolom D. Die Park is by D4, ook in kolom D, so die Park deel ʼn kolom met die Mark.' },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — hoeveel blokke dwars oor is dit van die Bank (C2) na die Park (D4), as jy net kolomme tel?', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', '1 blok'], explanation: 'Die Bank is in kolom C en die Park is in kolom D. C → D is 1 blok dwars oor.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — hoeveel blokke af skei ry 1 en ry 3?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2 blokke'], explanation: 'Ry 1 na ry 3 is ʼn verskil van 3 − 1 = 2 blokke af.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — hoeveel blokke dwars oor en hoeveel blokke af skei die Mark (D1) en die Skool (A3)?', checkMode: 'self', answer: 'Kolomme D na A is 3 blokke dwars oor. Rye 1 na 3 is 2 blokke af. Die Mark en Skool is dus 3 blokke dwars oor en 2 blokke af uitmekaar.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Refilwe sê die Kliniek (B1) en Bank (C2) is 3 blokke uitmekaar omdat "jy net die twee rygetalle bymekaartel: 1 + 2 = 3". Gebruik die kaart hierbo — is Refilwe korrek?', checkMode: 'self', answer: 'Nee, Refilwe is nie korrek nie. Om die twee rygetalle bymekaar te tel, is nie ʼn geldige metode om afstand te vind nie. Die Kliniek is by B1 en die Bank is by C2. Kolomme B na C is 1 blok dwars oor, en rye 1 na 2 is 1 blok af. Totale blokke = 1 + 1 = 2. Die korrekte metode vergelyk elke koördinaat met die ooreenstemmende koördinaat van die ander punt, en tel daardie twee verskille bymekaar — nie die rygetalle self nie.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — gee rigtings om van die Bank (C2) na die Skool (A3) te beweeg.', checkMode: 'self', answer: 'Beweeg 2 blokke links en 1 blok af, van C2 na A3.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — gee rigtings om van die Park (D4) na die Bank (C2) te beweeg.', checkMode: 'self', answer: 'Beweeg 1 blok links en 2 blokke op, van D4 na C2.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — gee rigtings om van die Mark (D1) na die Skool (A3) te beweeg.', checkMode: 'self', answer: 'Beweeg 3 blokke links en 2 blokke af, van D1 na A3.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — gee rigtings om van die Skool (A3) na die Park (D4) te beweeg.', checkMode: 'self', answer: 'Beweeg 3 blokke regs en 1 blok af, van A3 na D4.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — Lerato begin by die Bank (C2) en beweeg 2 blokke regs en 2 blokke af. Verduidelik wat gebeur.', checkMode: 'self', answer: 'Hierdie beweging is nie moontlik op hierdie kaart nie. Begin kolom C, sou 2 blokke regs beweeg C → D → verby D gaan, maar D is die laaste kolom op die kaart. Lerato sou van die kant van die kaart af beweeg, so daar is geen geldige roosterverwysing vir hierdie beweging nie.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — Amahle begin by die Mark (D1) en beweeg 1 blok links en 3 blokke af. By watter roosterverwysing eindig sy?', checkMode: 'auto', correctAnswer: 'C4', correctAnswers: ['C4', 'c4'], explanation: 'Begin kolom D, beweeg 1 blok links: D → C. Begin ry 1, beweeg 3 blokke af: 1 + 3 = 4. Amahle eindig by C4.', diagramSvg: GRID_SVG },
        { difficulty: 'Medium', question: 'Gebruik die kaart hierbo — Sipho begin by die Skool (A3) en beweeg 1 blok regs en 2 blokke op. By watter roosterverwysing eindig hy?', checkMode: 'auto', correctAnswer: 'B1', correctAnswers: ['B1', 'b1'], explanation: 'Begin kolom A, beweeg 1 blok regs: A → B. Begin ry 3, beweeg 2 blokke op: 3 − 2 = 1. Sipho eindig by B1, wat die Kliniek is.', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'Gebruik die kaart hierbo — ʼn fietsryer ry van die Park (D4) na die Mark (D1), en dan na die Kliniek (B1). Wat is die totale aantal blokke wat vir die hele rit gery is?', checkMode: 'self', answer: 'Park na Mark: kolom D na D is 0 blokke dwars oor, ry 4 na 1 is 3 blokke op, totaal 3 blokke. Mark na Kliniek: kolom D na B is 2 blokke dwars oor, ry 1 na 1 is 0 blokke, totaal 2 blokke. Groottotaal: 3 + 2 = 5 blokke.', diagramSvg: GRID_SVG },
        { difficulty: 'Hard', question: 'Gebruik die kaart hierbo — ʼn leerder beweer dat die roete van die Mark (D1) na die Skool (A3) en die roete van die Park (D4) na die Kliniek (B1) albei presies 5 blokke dek. Kontroleer hierdie bewering.', checkMode: 'self', answer: 'Mark (D1) na Skool (A3): kolomme D na A is 3 blokke dwars oor, rye 1 na 3 is 2 blokke af, totaal 3 + 2 = 5 blokke. Park (D4) na Kliniek (B1): kolomme D na B is 2 blokke dwars oor, rye 4 na 1 is 3 blokke op, totaal 2 + 3 = 5 blokke. Die bewering is korrek — albei roetes dek presies 5 blokke.', diagramSvg: GRID_SVG },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die lees van alfanumeriese roosterverwysings, die vind van landmerke en die gee van duidelike rigtings tussen posisies onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou so aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },
  ],
}
