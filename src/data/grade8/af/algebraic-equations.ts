import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// unknown variable → blue   (#2563eb)
// equation         → orange (#ea580c)
// solution         → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebraïese Vergelykings',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SETTING UP AND SOLVING EQUATIONS BY INSPECTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'setting-up-solving-by-inspection',
      title: 'Vergelykings Opstel en Oplos deur Inspeksie',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">Ons hersien hoe om vergelykings op te stel om probleemsituasies te beskryf, hulle te analiseer en te interpreteer, en op te los deur <strong>inspeksie</strong> — deur te vra watter waarde die vergelyking waar maak.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('onbekende veranderlike')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vergelyking')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oplossing')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Kernidees</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Onbekende veranderlike</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Letter soos ${bl('x')} wat die waarde voorstel wat ons probeer vind.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Vergelyking</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Wiskundige stelling wat wys dat twee uitdrukkings gelyk is, bv. ${or('4x + 7 = 31')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Oplossing</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waarde van die veranderlike wat die vergelyking waar maak — bv. ${gr('x = 6')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Oplos deur inspeksie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vra jouself: <em>"Watter waarde van ${bl('x')} maak hierdie vergelyking waar?"</em> Probeer waardes totdat jy die een vind wat werk, of gebruik redenering om dit direk af te lei.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho dink aan ʼn getal, vermenigvuldig dit met 4 en tel 7 by om 31 te kry. Vind die getal.',
          answer: `${gr('x = 6')}`,
          steps: [
            `Laat die onbekende getal ${bl('x')} wees. Stel die ${or('vergelyking')} op: ${or('4x + 7 = 31')}.`,
            `Deur inspeksie: ${or('4x')} = 31 − 7 = 24, dus benodig ons ${bl('x')} sodat 4 × ${bl('x')} = 24.`,
            `Vra: watter getal vermenigvuldig met 4 gee 24? Antwoord: ${gr('x = 6')}.`,
            `Kontroleer: 4(${gr('6')}) + 7 = 24 + 7 = 31 ✓`,
          ],
        },
        {
          question: 'Stel ʼn vergelyking op vir "ʼn getal verminder met 9 is gelyk aan 15" en los op.',
          answer: `${gr('x = 24')}`,
          steps: [
            `Laat die onbekende getal ${bl('x')} wees. Stel die ${or('vergelyking')} op: ${or('x − 9 = 15')}.`,
            `Deur inspeksie: vra watter getal minus 9 gee 15.`,
            `Antwoord: ${gr('x = 24')}. Kontroleer: 24 − 9 = 15 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om vergelykings uit woordprobleme op te stel en deur inspeksie op te los" />',

      diagramPlaceholder:
        'Balans wat 4x + 7 aan die een kant en 31 aan die ander kant wys, wat gebalanseerd bly, met die oplossing x = 6 hieronder',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 195" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="110" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">4x + 7 = 31 bly gebalanseerd</text>` +
        `<line x1="30" y1="80" x2="190" y2="80" stroke="#0f1f3d" stroke-width="3"/>` +
        `<line x1="110" y1="80" x2="110" y2="150" stroke="#0f1f3d" stroke-width="3"/>` +
        `<polygon points="110,150 94,172 126,172" fill="#0f1f3d"/>` +
        `<rect x="70" y="172" width="80" height="4" fill="#0f1f3d"/>` +
        `<line x1="50" y1="80" x2="35" y2="108" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="50" y1="80" x2="65" y2="108" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<path d="M35,108 Q50,124 65,108" fill="none" stroke="#2563eb" stroke-width="2.5"/>` +
        `<line x1="170" y1="80" x2="155" y2="108" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="170" y1="80" x2="185" y2="108" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<path d="M155,108 Q170,124 185,108" fill="none" stroke="#ea580c" stroke-width="2.5"/>` +
        `<text x="50" y="100" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">4x + 7</text>` +
        `<text x="170" y="100" text-anchor="middle" font-size="13" font-weight="700" fill="#ea580c">31</text>` +
        `<text x="110" y="190" text-anchor="middle" font-size="18" font-weight="700" fill="#16a34a">x = 6</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — USING ADDITIVE AND MULTIPLICATIVE INVERSES AND LAWS OF EXPONENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'additive-multiplicative-inverses-exponents',
      title: 'Additiewe en Multiplikatiewe Inverses en Eksponentwette Gebruik om Vergelykings Op te Los',
      icon: '±',
      explanation:
        `<p style="margin-bottom:16px;">Ons brei die oplos van vergelykings uit deur <strong>additiewe inverses</strong> (die teenoorgestelde optel om ʼn term uit te kanselleer) en <strong>multiplikatiewe inverses</strong> (met die resiprook vermenigvuldig) te gebruik, sowel as die toepassing van <strong>eksponentwette</strong> waar vergelykings eksponensiële terme bevat.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('additiewe inverse')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('multiplikatiewe inverse')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('eksponentwette')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Kernbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Additiewe Inverse</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${bl('additiewe inverse')} van ʼn getal is sy teenoorgestelde. Om ʼn getal en sy additiewe inverse bymekaar te tel, gee altyd 0. bv. 8 + (${bl('−8')}) = 0.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Multiplikatiewe Inverse</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${or('multiplikatiewe inverse')} (resiprook) van ʼn getal gee 1 wanneer dit vermenigvuldig word. bv. ¾ × ${or('4/3')} = 1.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Eksponentwette</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wanneer jy x² = k oplos, pas ${gr('vierkantswortel')} op albei kante toe: x = ±√k. Onthou beide die positiewe en negatiewe wortel.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Goue reël: wat jy ook al aan een kant doen, doen aan die ander kant</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om ʼn vergelyking gebalanseer te hou, pas dieselfde bewerking op albei kante toe. Gebruik die ${bl('additiewe inverse')} om ʼn konstante uit te skakel, en die ${or('multiplikatiewe inverse')} om ʼn koëffisiënt uit te skakel.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op: x + 8 = 15 deur die additiewe inverse te gebruik.',
          answer: `x = ${gr('7')}`,
          steps: [
            `Die ${bl('additiewe inverse')} van 8 is ${bl('−8')}. Tel ${bl('−8')} by albei kante:`,
            `x + 8 + (${bl('−8')}) = 15 + (${bl('−8')})`,
            `x + 0 = 7`,
            `x = ${gr('7')}. Kontroleer: ${gr('7')} + 8 = 15 ✓`,
          ],
        },
        {
          question: 'Los op: ¾x = 9 deur die multiplikatiewe inverse te gebruik.',
          answer: `x = ${gr('12')}`,
          steps: [
            `Die ${or('multiplikatiewe inverse')} van ¾ is ${or('4/3')}. Vermenigvuldig albei kante met ${or('4/3')}:`,
            `${or('4/3')} × ¾x = 9 × ${or('4/3')}`,
            `1x = 36/3 = 12`,
            `x = ${gr('12')}. Kontroleer: ¾ × ${gr('12')} = 9 ✓`,
          ],
        },
        {
          question: 'Los op: x² = 49.',
          answer: `x = ${gr('±7')}`,
          steps: [
            `Hierdie vergelyking bevat ʼn eksponent. Pas die ${gr('vierkantswortel')} op albei kante toe:`,
            `√(x²) = √49`,
            `x = ${gr('±7')} — daar is twee oplossings aangesien beide 7² = 49 en (−7)² = 49.`,
            `Kontroleer: (${gr('7')})² = 49 ✓ en (${gr('−7')})² = 49 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om additiewe en multiplikatiewe inverses te gebruik om vergelykings op te los, en hoe om vergelykings met vierkantsterme op te los" />',

      diagramPlaceholder:
        'Balans wat x + 8 = 15 wys, met −8 van albei kante afgetrek om x = 7 oor te laat',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 210" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="120" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">Begin: gebalanseerd</text>` +
        `<line x1="40" y1="35" x2="200" y2="35" stroke="#0f1f3d" stroke-width="2.5"/>` +
        `<polygon points="120,35 112,50 128,50" fill="#0f1f3d"/>` +
        `<rect x="55" y="20" width="60" height="26" rx="4" fill="rgba(37,99,235,0.12)" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="85" y="38" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">x + 8</text>` +
        `<rect x="145" y="20" width="60" height="26" rx="4" fill="rgba(234,88,12,0.12)" stroke="#ea580c" stroke-width="2"/>` +
        `<text x="175" y="38" text-anchor="middle" font-size="13" font-weight="700" fill="#ea580c">15</text>` +
        `<line x1="85" y1="55" x2="85" y2="80" stroke="#2563eb" stroke-width="2"/>` +
        `<polygon points="85,86 79,74 91,74" fill="#2563eb"/>` +
        `<text x="85" y="100" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">−8</text>` +
        `<line x1="175" y1="55" x2="175" y2="80" stroke="#ea580c" stroke-width="2"/>` +
        `<polygon points="175,86 169,74 181,74" fill="#ea580c"/>` +
        `<text x="175" y="100" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">−8</text>` +
        `<text x="120" y="120" text-anchor="middle" font-size="10" fill="#6b7280">dieselfde bewerking op albei kante</text>` +
        `<line x1="40" y1="140" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2.5"/>` +
        `<polygon points="120,140 112,155 128,155" fill="#0f1f3d"/>` +
        `<rect x="55" y="125" width="60" height="26" rx="4" fill="rgba(22,163,74,0.12)" stroke="#16a34a" stroke-width="2"/>` +
        `<text x="85" y="143" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">x</text>` +
        `<rect x="145" y="125" width="60" height="26" rx="4" fill="rgba(22,163,74,0.12)" stroke="#16a34a" stroke-width="2"/>` +
        `<text x="175" y="143" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">7</text>` +
        `<text x="120" y="195" text-anchor="middle" font-size="20" font-weight="700" fill="#16a34a">x = 7</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SUBSTITUTION TO GENERATE TABLES OF ORDERED PAIRS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'substitution-ordered-pairs',
      title: 'Substitusie om Tabelle van Georde Pare te Genereer',
      icon: '(x,y)',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik <strong>substitusie</strong> in vergelykings om <strong>tabelle van georde pare</strong> te genereer, wat algebraïese vergelykings met hul grafiese voorstelling verbind.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-waardes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-waardes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('georde pare')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe substitusie werk</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Kies ʼn ${bl('x-waarde')} uit jou tabel.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Vervang die ${bl('x-waarde')} in die vergelyking en bereken die ${gr('y-waarde')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Skryf die resultaat as ʼn ${or('georde paar')} (${bl('x')}, ${gr('y')}) — x kom altyd eerste.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Algebra aan grafieke koppel</p>` +
        `<p style="margin:0;color:#1e3a8a;">Elke ${or('georde paar')} (${bl('x')}, ${gr('y')}) stel ʼn punt op die koördinaatvlak voor. Deur hierdie punte te stip, word die vorm van die grafiek van die vergelyking sigbaar.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gebruik y = 3x − 2 om georde pare te genereer vir x = 0, 1, 2, 3.',
          answer: `${or('(0, −2), (1, 1), (2, 4), (3, 7)')}`,
          steps: [
            `${bl('x = 0')}: y = 3(${bl('0')}) − 2 = 0 − 2 = ${gr('−2')}. Georde paar: ${or('(0, −2)')}`,
            `${bl('x = 1')}: y = 3(${bl('1')}) − 2 = 3 − 2 = ${gr('1')}. Georde paar: ${or('(1, 1)')}`,
            `${bl('x = 2')}: y = 3(${bl('2')}) − 2 = 6 − 2 = ${gr('4')}. Georde paar: ${or('(2, 4)')}`,
            `${bl('x = 3')}: y = 3(${bl('3')}) − 2 = 9 − 2 = ${gr('7')}. Georde paar: ${or('(3, 7)')}`,
          ],
        },
        {
          question: 'Lerato vervang x = −1, 0, 1, 2 in y = −2x + 3. Vind die georde pare.',
          answer: `${or('(−1, 5), (0, 3), (1, 1), (2, −1)')}`,
          steps: [
            `${bl('x = −1')}: y = −2(${bl('−1')}) + 3 = 2 + 3 = ${gr('5')}. Georde paar: ${or('(−1, 5)')}`,
            `${bl('x = 0')}: y = −2(${bl('0')}) + 3 = 0 + 3 = ${gr('3')}. Georde paar: ${or('(0, 3)')}`,
            `${bl('x = 1')}: y = −2(${bl('1')}) + 3 = −2 + 3 = ${gr('1')}. Georde paar: ${or('(1, 1)')}`,
            `${bl('x = 2')}: y = −2(${bl('2')}) + 3 = −4 + 3 = ${gr('−1')}. Georde paar: ${or('(2, −1)')}`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om x-waardes in ʼn vergelyking te vervang om ʼn tabel van georde pare te genereer en die punte te stip" />',

      diagramPlaceholder:
        'Koördinaatrooster wat die georde pare (0,−2), (1,1), (2,4) en (3,7) uit y = 3x − 2 stip, verbind deur ʼn reguit lyn',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 200" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="50" y1="185" x2="50" y2="15" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="50,10 45,20 55,20" fill="#0f1f3d"/>` +
        `<line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="210,150 200,145 200,155" fill="#0f1f3d"/>` +
        `<text x="213" y="146" font-size="11" fill="#0f1f3d">x</text>` +
        `<text x="42" y="14" font-size="11" fill="#0f1f3d">y</text>` +
        `<text x="50" y="163" text-anchor="middle" font-size="9" fill="#6b7280">0</text>` +
        `<text x="85" y="163" text-anchor="middle" font-size="9" fill="#6b7280">1</text>` +
        `<text x="120" y="163" text-anchor="middle" font-size="9" fill="#6b7280">2</text>` +
        `<text x="155" y="163" text-anchor="middle" font-size="9" fill="#6b7280">3</text>` +
        `<line x1="50" y1="174" x2="155" y2="66" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/>` +
        `<circle cx="50" cy="174" r="4.5" fill="#ea580c"/>` +
        `<text x="60" y="186" font-size="9" font-weight="700" fill="#ea580c">(0,−2)</text>` +
        `<circle cx="85" cy="138" r="4.5" fill="#ea580c"/>` +
        `<text x="97" y="132" font-size="9" font-weight="700" fill="#ea580c">(1,1)</text>` +
        `<circle cx="120" cy="102" r="4.5" fill="#ea580c"/>` +
        `<text x="132" y="96" font-size="9" font-weight="700" fill="#ea580c">(2,4)</text>` +
        `<circle cx="155" cy="66" r="4.5" fill="#ea580c"/>` +
        `<text x="167" y="60" font-size="9" font-weight="700" fill="#ea580c">(3,7)</text>` +
        `</svg>`,
    },
  ],

  topicPractice: [
    // ── Q1 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los op: x + 12 = 27 deur inspeksie.',
      answer: '15',
      checkMode: 'auto',
      correctAnswer: '15',
      explanation: 'Vra: watter getal by 12 getel gee 27? Antwoord: x = 15. Kontroleer: 15 + 12 = 27 ✓',
    },

    // ── Q2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho dink aan ʼn getal, vermenigvuldig dit met 5 en trek 8 af om 32 te kry. Vind die getal.',
      answer: '8',
      checkMode: 'auto',
      correctAnswer: '8',
      explanation: 'Vergelyking: 5x − 8 = 32. Deur inspeksie: 5x = 40, dus x = 8. Kontroleer: 5(8) − 8 = 40 − 8 = 32 ✓',
    },

    // ── Q3 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato stel die vergelyking 3x − 6 = 21 op vir ʼn getalprobleem en los x = 9 op. Kontroleer haar antwoord.',
      answer: 'Korrek — deur x = 9 te vervang: 3(9) − 6 = 27 − 6 = 21.',
      checkMode: 'self',
    },

    // ── Q4 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los op: x − 15 = 22 deur die additiewe inverse te gebruik.',
      answer: '37',
      checkMode: 'auto',
      correctAnswer: '37',
      explanation: 'Tel 15 (die additiewe inverse van −15) by albei kante: x = 22 + 15 = 37. Kontroleer: 37 − 15 = 22 ✓',
    },

    // ── Q5 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op: ²⁄₃x = 10 deur die multiplikatiewe inverse te gebruik.',
      answer: '15',
      checkMode: 'auto',
      correctAnswer: '15',
      explanation: 'Vermenigvuldig albei kante met 3/2 (die multiplikatiewe inverse van 2/3): x = 10 × 3/2 = 30/2 = 15. Kontroleer: (2/3)(15) = 10 ✓',
    },

    // ── Q6 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op: x² = 64 en verduidelik waarom daar twee oplossings is.',
      answer: 'x = ±8, aangesien beide 8² = 64 en (−8)² = 64.',
      checkMode: 'self',
    },

    // ── Q7 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op: 5x + 9 = 34.',
      answer: '5',
      checkMode: 'auto',
      correctAnswer: '5',
      explanation: '5x + 9 = 34 → 5x = 34 − 9 = 25 → x = 25 ÷ 5 = 5. Kontroleer: 5(5) + 9 = 25 + 9 = 34 ✓',
    },

    // ── Q8 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê die oplossing van x² = 36 gee net x = 6. Is hy reg? Verduidelik.',
      answer: 'Nee — daar is twee oplossings, x = 6 en x = −6, aangesien albei in die kwadraat 36 gee.',
      checkMode: 'self',
    },

    // ── Q9 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Genereer georde pare deur y = 2x + 5 te gebruik vir x = 0, 1, 2, 3.',
      answer: '(0, 5), (1, 7), (2, 9), (3, 11).',
      checkMode: 'self',
    },

    // ── Q10 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Gebruik y = 4x − 1 om y te vind wanneer x = 3.',
      answer: '11',
      checkMode: 'auto',
      correctAnswer: '11',
      explanation: 'y = 4(3) − 1 = 12 − 1 = 11 ✓',
    },

    // ── Q11 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle genereer ʼn tabel vir y = −x + 6 deur x = −2, −1, 0, 1 te gebruik en kry (−2, 8), (−1, 7), (0, 6), (1, 5). Kontroleer haar tabel.',
      answer: 'Korrek — elke waarde word gevind deur x in die vergelyking te vervang.',
      checkMode: 'self',
    },

    // ── Q12 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op: 4x − 7 = 21.',
      answer: '7',
      checkMode: 'auto',
      correctAnswer: '7',
      explanation: '4x − 7 = 21 → 4x = 28 → x = 7. Kontroleer: 4(7) − 7 = 28 − 7 = 21 ✓',
    },

    // ── Q13 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op: ³⁄₅x = 18 deur die multiplikatiewe inverse te gebruik.',
      answer: '30',
      checkMode: 'auto',
      correctAnswer: '30',
      explanation: 'Vermenigvuldig albei kante met 5/3 (die multiplikatiewe inverse van 3/5): x = 18 × 5/3 = 90/3 = 30. Kontroleer: (3/5)(30) = 18 ✓',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê om x + (−9) = 14 op te los is dieselfde as om x − 9 = 14 op te los. Is hy reg? Verduidelik.',
      answer: 'Ja — om ʼn negatiewe getal by te tel is dieselfde as om daardie getal af te trek, dus is die twee vergelykings ekwivalent.',
      checkMode: 'self',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Genereer georde pare deur y = x² − 3 te gebruik vir x = 0, 1, 2, 3.',
      answer: '(0, −3), (1, −2), (2, 1), (3, 6)',
      checkMode: 'auto',
      correctAnswer: '(0,-3),(1,-2),(2,1),(3,6)',
      correctAnswers: [
        '(0,-3),(1,-2),(2,1),(3,6)',
        '(0, -3), (1, -2), (2, 1), (3, 6)',
        '(0,−3),(1,−2),(2,1),(3,6)',
      ],
      explanation: 'x=0: y=0−3=−3. x=1: y=1−3=−2. x=2: y=4−3=1. x=3: y=9−3=6.',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het algebraïese vergelykings baasgeraak.' },
      { minPercent: 75, message: 'Goeie werk! Jy het ʼn sterk begrip van algebraïese vergelykings.' },
      { minPercent: 50, message: 'Goeie poging, gaan die afdelings weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die studiegids.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Veranderlikes aan albei kante (posisies 0-3)
        { difficulty: 'Medium', question: 'Los op: 6x + 5 = 2x + 29', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: '6x + 5 = 2x + 29\nTrek 2x van albei kante af: 4x + 5 = 29\nTrek 5 van albei kante af: 4x = 24\nDeel albei kante deur 4: x = 6\nKontroleer: 6(6) + 5 = 41 en 2(6) + 29 = 41 ✓' },
        { difficulty: 'Medium', question: 'Los op: 9x − 8 = 4x + 17', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: '9x − 8 = 4x + 17\nTrek 4x van albei kante af: 5x − 8 = 17\nTel 8 by albei kante: 5x = 25\nDeel albei kante deur 5: x = 5\nKontroleer: 9(5) − 8 = 37 en 4(5) + 17 = 37 ✓' },
        { difficulty: 'Medium-Hard', question: 'Sewe keer ʼn getal, verminder met 3, is gelyk aan vier keer die getal vermeerder met 15. Stel ʼn vergelyking op en los op.', answer: '7x − 3 = 4x + 15', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'x = 6', '7x - 3 = 4x + 15, x = 6'], explanation: 'Laat die getal x wees.\n7x − 3 = 4x + 15\nTrek 4x van albei kante af: 3x − 3 = 15\nTel 3 by albei kante: 3x = 18\nDeel albei kante deur 3: x = 6\nKontroleer: 7(6) − 3 = 39 en 4(6) + 15 = 39 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder los 5x + 9 = 2x + 30 op deur net 2x van die regterkant af te trek en skryf 5x + 9 = 30. Verduidelik die fout en gee die korrekte oplossing.', answer: 'Die leerder het slegs die 2x-term aan die regterkant verwyder, maar dit nie ook van die linkerkant afgetrek nie — 2x moet van ALBEI kante afgetrek word. Korrekte metode: trek 2x van albei kante af om 3x + 9 = 30 te kry, trek 9 van albei kante af om 3x = 21 te kry, deel dan deur 3 om x = 7 te kry. Kontroleer: 5(7) + 9 = 44 en 2(7) + 30 = 44 ✓', checkMode: 'self' },

        // Blok 2 — Vergelykings met hakies wat eers uitgebrei moet word (posisies 4-7)
        { difficulty: 'Medium', question: 'Los op: 3(x + 5) = 27', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: '3(x + 5) = 27\nBrei die hakie uit: 3x + 15 = 27\nTrek 15 van albei kante af: 3x = 12\nDeel albei kante deur 3: x = 4\nKontroleer: 3(4 + 5) = 3(9) = 27 ✓' },
        { difficulty: 'Medium', question: 'Los op: 4(2x − 3) = 44', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '4(2x − 3) = 44\nBrei die hakie uit: 8x − 12 = 44\nTel 12 by albei kante: 8x = 56\nDeel albei kante deur 8: x = 7\nKontroleer: 4(2(7) − 3) = 4(11) = 44 ✓' },
        { difficulty: 'Medium-Hard', question: 'Los op: 5(x − 2) = 3x + 8', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '5(x − 2) = 3x + 8\nBrei die hakie uit: 5x − 10 = 3x + 8\nTrek 3x van albei kante af: 2x − 10 = 8\nTel 10 by albei kante: 2x = 18\nDeel albei kante deur 2: x = 9\nKontroleer: 5(9 − 2) = 5(7) = 35 en 3(9) + 8 = 35 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder los 3(2x + 4) = 42 op deur 6x + 4 = 42 te skryf, en vermenigvuldig slegs die eerste term binne die hakie met 3. Verduidelik die fout en gee die korrekte oplossing.', answer: 'Die leerder het vergeet om die 3 na BEIDE terme binne die hakie te versprei — die 4 moet ook met 3 vermenigvuldig word, en nie net as "+ 4" oorbly nie. Korrekte metode: brei die hakie uit om 6x + 12 = 42 te kry, trek 12 van albei kante af om 6x = 30 te kry, deel dan deur 6 om x = 5 te kry. Kontroleer: 3(2(5) + 4) = 3(14) = 42 ✓', checkMode: 'self' },

        // Blok 3 — Vergelykings met breuke (deler uitskakel) (posisies 8-11)
        { difficulty: 'Medium', question: 'Los op: x/3 + 5 = 12', answer: '21', checkMode: 'auto', correctAnswer: '21', explanation: 'x/3 + 5 = 12\nTrek 5 van albei kante af: x/3 = 7\nVermenigvuldig albei kante met 3: x = 21\nKontroleer: 21/3 + 5 = 7 + 5 = 12 ✓' },
        { difficulty: 'Medium', question: 'Los op: (x + 4)/5 = 6', answer: '26', checkMode: 'auto', correctAnswer: '26', explanation: '(x + 4)/5 = 6\nVermenigvuldig albei kante met 5: x + 4 = 30\nTrek 4 van albei kante af: x = 26\nKontroleer: (26 + 4)/5 = 30/5 = 6 ✓' },
        { difficulty: 'Medium-Hard', question: 'Los op: x/2 + x/3 = 10', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'x/2 + x/3 = 10\nVermenigvuldig elke term met die kleinste gemeenskaplike noemer, 6: 3x + 2x = 60\nVersamel gelyksoortige terme: 5x = 60\nDeel albei kante deur 5: x = 12\nKontroleer: 12/2 + 12/3 = 6 + 4 = 10 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder los (2x − 1)/3 = 7 op deur 2x − 1 = 7/3 te skryf. Verduidelik die fout en gee die korrekte oplossing.', answer: 'Die leerder het die verkeerde kant deur 3 gedeel — om die noemer uit te skakel moet albei kante met 3 vermenigvuldig word, wat 2x − 1 = 21 gee, nie 2x − 1 = 7/3 nie. Korrekte metode: vermenigvuldig albei kante met 3 om 2x − 1 = 21 te kry, tel 1 by albei kante om 2x = 22 te kry, deel dan deur 2 om x = 11 te kry. Kontroleer: (2(11) − 1)/3 = 21/3 = 7 ✓', checkMode: 'self' },

        // Blok 4 — Vergelykings uit woordprobleme opstel en oplos (posisies 12-15)
        { difficulty: 'Medium', question: 'ʼn Getal word bygetel by twee keer ʼn tweede getal plus 3, en die totaal is 30. As die tweede getal x is, kan die eerste getal geskryf word as 2x + 3. Stel ʼn vergelyking op en vind albei getalle.', answer: 'x + (2x + 3) = 30\n3x + 3 = 30\n3x = 27\nx = 9\nDie tweede getal is 9 en die eerste getal is 2(9) + 3 = 21.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Vader is 4 keer so oud soos sy seun. Oor 6 jaar sal die vader slegs 3 keer so oud soos sy seun wees. As die seun se huidige ouderdom x is, stel ʼn vergelyking op en vind die seun se huidige ouderdom.', answer: '4x + 6 = 3(x + 6)', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'x = 12', '4x + 6 = 3(x + 6), x = 12'], explanation: 'Laat die seun se huidige ouderdom x wees, dus is die vader se huidige ouderdom 4x.\nOor 6 jaar: vader = 4x + 6, seun = x + 6\n4x + 6 = 3(x + 6)\nBrei uit: 4x + 6 = 3x + 18\nTrek 3x van albei kante af: x + 6 = 18\nTrek 6 van albei kante af: x = 12\nDie seun is tans 12 jaar oud.' },
        { difficulty: 'Hard', question: 'Die breedte van ʼn reghoek is w cm en die lengte is 5 cm meer as die breedte. Die omtrek is 46 cm. Stel ʼn vergelyking op en los dit op om die breedte te vind.', answer: '2(w + (w + 5)) = 46\n2(2w + 5) = 46\n4w + 10 = 46\n4w = 36\nw = 9\nDie breedte is 9 cm en die lengte is 9 + 5 = 14 cm.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Skryfbehoeftewinkel vra ʼn R20-lidmaatskapfooi plus R3 per pen. ʼn Tweede winkel vra ʼn R8-lidmaatskapfooi plus R5 per pen. Vir hoeveel penne, n, sal die totale koste by albei winkels dieselfde wees?', answer: '20 + 3n = 8 + 5n', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'n = 6', '20 + 3n = 8 + 5n, n = 6'], explanation: 'Winkel A se koste: 20 + 3n. Winkel B se koste: 8 + 5n.\n20 + 3n = 8 + 5n\nTrek 3n van albei kante af: 20 = 8 + 2n\nTrek 8 van albei kante af: 12 = 2n\nDeel albei kante deur 2: n = 6\nKontroleer: 20 + 3(6) = 38 en 8 + 5(6) = 38 ✓' },

        // Blok 5 — Oplossings kontroleer deur substitusie / foutopsporing (posisies 16-17)
        { difficulty: 'Medium', question: 'Is x = 6 ʼn oplossing vir 5x − 4 = 3x + 8? Wys jou substitusie-kontrole.', answer: 'ja', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Vervang x = 6 in albei kante.\nLinkerkant: 5(6) − 4 = 30 − 4 = 26\nRegterkant: 3(6) + 8 = 18 + 8 = 26\nAlbei kante is gelyk aan 26, dus is x = 6 ʼn oplossing.' },
        { difficulty: 'Hard', question: 'Lerato kontroleer x = 8 in die vergelyking 4(x + 2) = 3x + 22 en kom tot die gevolgtrekking dat dit ʼn oplossing is omdat 4(10) = 40 en die regterkant "lyk naby" aan 40. Wys ʼn behoorlike substitusie-kontrole en sê of x = 8 werklik korrek is.', answer: 'Vervang x = 8 in albei kante.\nLinkerkant: 4(8 + 2) = 4(10) = 40\nRegterkant: 3(8) + 22 = 24 + 22 = 46\n40 is nie gelyk aan 46 nie, dus is x = 8 NIE ʼn oplossing nie — Lerato het verkeerdelik ʼn benaderde ooreenstemming aanvaar in plaas daarvan om die presiese waardes te kontroleer. Korrekte oplossing: 4(x + 2) = 3x + 22 → 4x + 8 = 3x + 22 → x = 14. Kontroleer: 4(14 + 2) = 4(16) = 64 en 3(14) + 22 = 64 ✓', checkMode: 'self' },

        // Blok 6 — Multi-stap gekombineerde vergelykings (posisies 18-19)
        { difficulty: 'Hard', question: 'Los op: 2(x + 3) = x + 11', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: '2(x + 3) = x + 11\nBrei die hakie uit: 2x + 6 = x + 11\nTrek x van albei kante af: x + 6 = 11\nTrek 6 van albei kante af: x = 5\nKontroleer: 2(5 + 3) = 2(8) = 16 en 5 + 11 = 16 ✓' },
        { difficulty: 'Hard', question: 'Los op: (x + 2)/3 + 4 = x − 6', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: '(x + 2)/3 + 4 = x − 6\nVermenigvuldig elke term met 3 om die breuk uit te skakel: (x + 2) + 12 = 3x − 18\nVereenvoudig die linkerkant: x + 14 = 3x − 18\nTrek x van albei kante af: 14 = 2x − 18\nTel 18 by albei kante: 32 = 2x\nDeel albei kante deur 2: x = 16\nKontroleer: (16 + 2)/3 + 4 = 6 + 4 = 10 en 16 − 6 = 10 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het vergelykings met veranderlikes aan albei kante, hakies en breuke baasgeraak.' },
        { minScore: 14, message: 'Goeie werk! Gaan enige gemiste vrae oor hakies of breuke weer deur en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor breuke uitskakel en hakies uitbrei weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Veranderlikes aan albei kante (posisies 0-3)
        { difficulty: 'Medium', question: 'Los op: 8x + 3 = 3x + 38', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '8x + 3 = 3x + 38\nTrek 3x van albei kante af: 5x + 3 = 38\nTrek 3 van albei kante af: 5x = 35\nDeel albei kante deur 5: x = 7\nKontroleer: 8(7) + 3 = 59 en 3(7) + 38 = 59 ✓' },
        { difficulty: 'Medium', question: 'Los op: 10x − 6 = 5x + 29', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '10x − 6 = 5x + 29\nTrek 5x van albei kante af: 5x − 6 = 29\nTel 6 by albei kante: 5x = 35\nDeel albei kante deur 5: x = 7\nKontroleer: 10(7) − 6 = 64 en 5(7) + 29 = 64 ✓' },
        { difficulty: 'Medium-Hard', question: 'Nege keer ʼn getal, verminder met 4, is gelyk aan vyf keer die getal vermeerder met 24. Stel ʼn vergelyking op en los op.', answer: '9x − 4 = 5x + 24', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', 'x = 7', '9x - 4 = 5x + 24, x = 7'], explanation: 'Laat die getal x wees.\n9x − 4 = 5x + 24\nTrek 5x van albei kante af: 4x − 4 = 24\nTel 4 by albei kante: 4x = 28\nDeel albei kante deur 4: x = 7\nKontroleer: 9(7) − 4 = 59 en 5(7) + 24 = 59 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder los 6x + 11 = 3x + 35 op deur net 3x van die regterkant af te trek en skryf 6x + 11 = 35. Verduidelik die fout en gee die korrekte oplossing.', answer: 'Die leerder het slegs die 3x-term aan die regterkant verwyder, maar dit nie ook van die linkerkant afgetrek nie — 3x moet van ALBEI kante afgetrek word. Korrekte metode: trek 3x van albei kante af om 3x + 11 = 35 te kry, trek 11 van albei kante af om 3x = 24 te kry, deel dan deur 3 om x = 8 te kry. Kontroleer: 6(8) + 11 = 59 en 3(8) + 35 = 59 ✓', checkMode: 'self' },

        // Blok 2 — Vergelykings met hakies wat eers uitgebrei moet word (posisies 4-7)
        { difficulty: 'Medium', question: 'Los op: 4(x + 6) = 52', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '4(x + 6) = 52\nBrei die hakie uit: 4x + 24 = 52\nTrek 24 van albei kante af: 4x = 28\nDeel albei kante deur 4: x = 7\nKontroleer: 4(7 + 6) = 4(13) = 52 ✓' },
        { difficulty: 'Medium', question: 'Los op: 6(2x − 3) = 54', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: '6(2x − 3) = 54\nBrei die hakie uit: 12x − 18 = 54\nTel 18 by albei kante: 12x = 72\nDeel albei kante deur 12: x = 6\nKontroleer: 6(2(6) − 3) = 6(9) = 54 ✓' },
        { difficulty: 'Medium-Hard', question: 'Los op: 6(x − 1) = 4x + 10', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '6(x − 1) = 4x + 10\nBrei die hakie uit: 6x − 6 = 4x + 10\nTrek 4x van albei kante af: 2x − 6 = 10\nTel 6 by albei kante: 2x = 16\nDeel albei kante deur 2: x = 8\nKontroleer: 6(8 − 1) = 6(7) = 42 en 4(8) + 10 = 42 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder los 4(3x + 2) = 68 op deur 12x + 2 = 68 te skryf, en vermenigvuldig slegs die eerste term binne die hakie met 4. Verduidelik die fout en gee die korrekte oplossing.', answer: 'Die leerder het vergeet om die 4 na BEIDE terme binne die hakie te versprei — die 2 moet ook met 4 vermenigvuldig word, en nie net as "+ 2" oorbly nie. Korrekte metode: brei die hakie uit om 12x + 8 = 68 te kry, trek 8 van albei kante af om 12x = 60 te kry, deel dan deur 12 om x = 5 te kry. Kontroleer: 4(3(5) + 2) = 4(17) = 68 ✓', checkMode: 'self' },

        // Blok 3 — Vergelykings met breuke (deler uitskakel) (posisies 8-11)
        { difficulty: 'Medium', question: 'Los op: x/4 + 6 = 15', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: 'x/4 + 6 = 15\nTrek 6 van albei kante af: x/4 = 9\nVermenigvuldig albei kante met 4: x = 36\nKontroleer: 36/4 + 6 = 9 + 6 = 15 ✓' },
        { difficulty: 'Medium', question: 'Los op: (x + 7)/3 = 9', answer: '20', checkMode: 'auto', correctAnswer: '20', explanation: '(x + 7)/3 = 9\nVermenigvuldig albei kante met 3: x + 7 = 27\nTrek 7 van albei kante af: x = 20\nKontroleer: (20 + 7)/3 = 27/3 = 9 ✓' },
        { difficulty: 'Medium-Hard', question: 'Los op: x/3 + x/4 = 7', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'x/3 + x/4 = 7\nVermenigvuldig elke term met die kleinste gemeenskaplike noemer, 12: 4x + 3x = 84\nVersamel gelyksoortige terme: 7x = 84\nDeel albei kante deur 7: x = 12\nKontroleer: 12/3 + 12/4 = 4 + 3 = 7 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder los (3x − 2)/4 = 10 op deur 3x − 2 = 10/4 te skryf. Verduidelik die fout en gee die korrekte oplossing.', answer: 'Die leerder het die verkeerde kant deur 4 gedeel — om die noemer uit te skakel moet albei kante met 4 vermenigvuldig word, wat 3x − 2 = 40 gee, nie 3x − 2 = 10/4 nie. Korrekte metode: vermenigvuldig albei kante met 4 om 3x − 2 = 40 te kry, tel 2 by albei kante om 3x = 42 te kry, deel dan deur 3 om x = 14 te kry. Kontroleer: (3(14) − 2)/4 = 40/4 = 10 ✓', checkMode: 'self' },

        // Blok 4 — Vergelykings uit woordprobleme opstel en oplos (posisies 12-15)
        { difficulty: 'Medium', question: 'ʼn Getal word bygetel by twee keer ʼn tweede getal plus 6, en die totaal is 39. As die tweede getal x is, kan die eerste getal geskryf word as 2x + 6. Stel ʼn vergelyking op en vind albei getalle.', answer: 'x + (2x + 6) = 39\n3x + 6 = 39\n3x = 33\nx = 11\nDie tweede getal is 11 en die eerste getal is 2(11) + 6 = 28.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Vader is 5 keer so oud soos sy seun. Oor 4 jaar sal die vader slegs 4 keer so oud soos sy seun wees. As die seun se huidige ouderdom x is, stel ʼn vergelyking op en vind die seun se huidige ouderdom.', answer: '5x + 4 = 4(x + 4)', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'x = 12', '5x + 4 = 4(x + 4), x = 12'], explanation: 'Laat die seun se huidige ouderdom x wees, dus is die vader se huidige ouderdom 5x.\nOor 4 jaar: vader = 5x + 4, seun = x + 4\n5x + 4 = 4(x + 4)\nBrei uit: 5x + 4 = 4x + 16\nTrek 4x van albei kante af: x + 4 = 16\nTrek 4 van albei kante af: x = 12\nDie seun is tans 12 jaar oud.' },
        { difficulty: 'Hard', question: 'Die breedte van ʼn reghoek is w cm en die lengte is 8 cm meer as die breedte. Die omtrek is 52 cm. Stel ʼn vergelyking op en los dit op om die breedte te vind.', answer: '2(w + (w + 8)) = 52\n2(2w + 8) = 52\n4w + 16 = 52\n4w = 36\nw = 9\nDie breedte is 9 cm en die lengte is 9 + 8 = 17 cm.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Drukkerswinkel vra ʼn R25-opstelfooi plus R4 per plakkaat. ʼn Tweede winkel vra ʼn R10-opstelfooi plus R7 per plakkaat. Vir hoeveel plakkate, n, sal die totale koste by albei winkels dieselfde wees?', answer: '25 + 4n = 10 + 7n', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'n = 5', '25 + 4n = 10 + 7n, n = 5'], explanation: '25 + 4n = 10 + 7n\nTrek 4n van albei kante af: 25 = 10 + 3n\nTrek 10 van albei kante af: 15 = 3n\nDeel albei kante deur 3: n = 5\nKontroleer: 25 + 4(5) = 45 en 10 + 7(5) = 45 ✓' },

        // Blok 5 — Oplossings kontroleer deur substitusie / foutopsporing (posisies 16-17)
        { difficulty: 'Medium', question: 'Is x = 7 ʼn oplossing vir 4x + 9 = 2x + 23? Wys jou substitusie-kontrole.', answer: 'ja', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Vervang x = 7 in albei kante.\nLinkerkant: 4(7) + 9 = 28 + 9 = 37\nRegterkant: 2(7) + 23 = 14 + 23 = 37\nAlbei kante is gelyk aan 37, dus is x = 7 ʼn oplossing.' },
        { difficulty: 'Hard', question: 'Thabo kontroleer x = 9 in die vergelyking 3(x + 4) = 2x + 27 en kom tot die gevolgtrekking dat dit ʼn oplossing is omdat 3(13) = 39 en die regterkant "lyk naby" aan 39. Wys ʼn behoorlike substitusie-kontrole en sê of x = 9 werklik korrek is.', answer: 'Vervang x = 9 in albei kante.\nLinkerkant: 3(9 + 4) = 3(13) = 39\nRegterkant: 2(9) + 27 = 18 + 27 = 45\n39 is nie gelyk aan 45 nie, dus is x = 9 NIE ʼn oplossing nie — Thabo het verkeerdelik ʼn benaderde ooreenstemming aanvaar in plaas daarvan om die presiese waardes te kontroleer. Korrekte oplossing: 3(x + 4) = 2x + 27 → 3x + 12 = 2x + 27 → x = 15. Kontroleer: 3(15 + 4) = 3(19) = 57 en 2(15) + 27 = 57 ✓', checkMode: 'self' },

        // Blok 6 — Multi-stap gekombineerde vergelykings (posisies 18-19)
        { difficulty: 'Hard', question: 'Los op: 3(x − 2) = x + 8', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '3(x − 2) = x + 8\nBrei die hakie uit: 3x − 6 = x + 8\nTrek x van albei kante af: 2x − 6 = 8\nTel 6 by albei kante: 2x = 14\nDeel albei kante deur 2: x = 7\nKontroleer: 3(7 − 2) = 3(5) = 15 en 7 + 8 = 15 ✓' },
        { difficulty: 'Hard', question: 'Los op: (x + 1)/5 + 2 = x − 5', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '(x + 1)/5 + 2 = x − 5\nVermenigvuldig elke term met 5 om die breuk uit te skakel: (x + 1) + 10 = 5x − 25\nVereenvoudig die linkerkant: x + 11 = 5x − 25\nTrek x van albei kante af: 11 = 4x − 25\nTel 25 by albei kante: 36 = 4x\nDeel albei kante deur 4: x = 9\nKontroleer: (9 + 1)/5 + 2 = 2 + 2 = 4 en 9 − 5 = 4 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het vergelykings met veranderlikes aan albei kante, hakies en breuke baasgeraak.' },
        { minScore: 14, message: 'Goeie werk! Gaan enige gemiste vrae oor hakies of breuke weer deur en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor breuke uitskakel en hakies uitbrei weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Veranderlikes aan albei kante (posisies 0-3)
        { difficulty: 'Medium', question: 'Los op: 7x + 9 = 4x + 27', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: '7x + 9 = 4x + 27\nTrek 4x van albei kante af: 3x + 9 = 27\nTrek 9 van albei kante af: 3x = 18\nDeel albei kante deur 3: x = 6\nKontroleer: 7(6) + 9 = 51 en 4(6) + 27 = 51 ✓' },
        { difficulty: 'Medium', question: 'Los op: 11x − 10 = 6x + 30', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '11x − 10 = 6x + 30\nTrek 6x van albei kante af: 5x − 10 = 30\nTel 10 by albei kante: 5x = 40\nDeel albei kante deur 5: x = 8\nKontroleer: 11(8) − 10 = 78 en 6(8) + 30 = 78 ✓' },
        { difficulty: 'Medium-Hard', question: 'Agt keer ʼn getal, verminder met 5, is gelyk aan vyf keer die getal vermeerder met 19. Stel ʼn vergelyking op en los op.', answer: '8x − 5 = 5x + 19', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'x = 8', '8x - 5 = 5x + 19, x = 8'], explanation: 'Laat die getal x wees.\n8x − 5 = 5x + 19\nTrek 5x van albei kante af: 3x − 5 = 19\nTel 5 by albei kante: 3x = 24\nDeel albei kante deur 3: x = 8\nKontroleer: 8(8) − 5 = 59 en 5(8) + 19 = 59 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder los 9x + 4 = 4x + 49 op deur net 4x van die regterkant af te trek en skryf 9x + 4 = 49. Verduidelik die fout en gee die korrekte oplossing.', answer: 'Die leerder het slegs die 4x-term aan die regterkant verwyder, maar dit nie ook van die linkerkant afgetrek nie — 4x moet van ALBEI kante afgetrek word. Korrekte metode: trek 4x van albei kante af om 5x + 4 = 49 te kry, trek 4 van albei kante af om 5x = 45 te kry, deel dan deur 5 om x = 9 te kry. Kontroleer: 9(9) + 4 = 85 en 4(9) + 49 = 85 ✓', checkMode: 'self' },

        // Blok 2 — Vergelykings met hakies wat eers uitgebrei moet word (posisies 4-7)
        { difficulty: 'Medium', question: 'Los op: 6(x + 2) = 54', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '6(x + 2) = 54\nBrei die hakie uit: 6x + 12 = 54\nTrek 12 van albei kante af: 6x = 42\nDeel albei kante deur 6: x = 7\nKontroleer: 6(7 + 2) = 6(9) = 54 ✓' },
        { difficulty: 'Medium', question: 'Los op: 4(3x − 2) = 100', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '4(3x − 2) = 100\nBrei die hakie uit: 12x − 8 = 100\nTel 8 by albei kante: 12x = 108\nDeel albei kante deur 12: x = 9\nKontroleer: 4(3(9) − 2) = 4(25) = 100 ✓' },
        { difficulty: 'Medium-Hard', question: 'Los op: 7(x − 3) = 4x + 3', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '7(x − 3) = 4x + 3\nBrei die hakie uit: 7x − 21 = 4x + 3\nTrek 4x van albei kante af: 3x − 21 = 3\nTel 21 by albei kante: 3x = 24\nDeel albei kante deur 3: x = 8\nKontroleer: 7(8 − 3) = 7(5) = 35 en 4(8) + 3 = 35 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder los 5(2x + 3) = 65 op deur 10x + 3 = 65 te skryf, en vermenigvuldig slegs die eerste term binne die hakie met 5. Verduidelik die fout en gee die korrekte oplossing.', answer: 'Die leerder het vergeet om die 5 na BEIDE terme binne die hakie te versprei — die 3 moet ook met 5 vermenigvuldig word, en nie net as "+ 3" oorbly nie. Korrekte metode: brei die hakie uit om 10x + 15 = 65 te kry, trek 15 van albei kante af om 10x = 50 te kry, deel dan deur 10 om x = 5 te kry. Kontroleer: 5(2(5) + 3) = 5(13) = 65 ✓', checkMode: 'self' },

        // Blok 3 — Vergelykings met breuke (deler uitskakel) (posisies 8-11)
        { difficulty: 'Medium', question: 'Los op: x/5 + 8 = 15', answer: '35', checkMode: 'auto', correctAnswer: '35', explanation: 'x/5 + 8 = 15\nTrek 8 van albei kante af: x/5 = 7\nVermenigvuldig albei kante met 5: x = 35\nKontroleer: 35/5 + 8 = 7 + 8 = 15 ✓' },
        { difficulty: 'Medium', question: 'Los op: (x + 9)/4 = 8', answer: '23', checkMode: 'auto', correctAnswer: '23', explanation: '(x + 9)/4 = 8\nVermenigvuldig albei kante met 4: x + 9 = 32\nTrek 9 van albei kante af: x = 23\nKontroleer: (23 + 9)/4 = 32/4 = 8 ✓' },
        { difficulty: 'Medium-Hard', question: 'Los op: x/4 + x/5 = 9', answer: '20', checkMode: 'auto', correctAnswer: '20', explanation: 'x/4 + x/5 = 9\nVermenigvuldig elke term met die kleinste gemeenskaplike noemer, 20: 5x + 4x = 180\nVersamel gelyksoortige terme: 9x = 180\nDeel albei kante deur 9: x = 20\nKontroleer: 20/4 + 20/5 = 5 + 4 = 9 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder los (4x − 3)/5 = 9 op deur 4x − 3 = 9/5 te skryf. Verduidelik die fout en gee die korrekte oplossing.', answer: 'Die leerder het die verkeerde kant deur 5 gedeel — om die noemer uit te skakel moet albei kante met 5 vermenigvuldig word, wat 4x − 3 = 45 gee, nie 4x − 3 = 9/5 nie. Korrekte metode: vermenigvuldig albei kante met 5 om 4x − 3 = 45 te kry, tel 3 by albei kante om 4x = 48 te kry, deel dan deur 4 om x = 12 te kry. Kontroleer: (4(12) − 3)/5 = 45/5 = 9 ✓', checkMode: 'self' },

        // Blok 4 — Vergelykings uit woordprobleme opstel en oplos (posisies 12-15)
        { difficulty: 'Medium', question: 'ʼn Getal word bygetel by twee keer ʼn tweede getal plus 9, en die totaal is 45. As die tweede getal x is, kan die eerste getal geskryf word as 2x + 9. Stel ʼn vergelyking op en vind albei getalle.', answer: 'x + (2x + 9) = 45\n3x + 9 = 45\n3x = 36\nx = 12\nDie tweede getal is 12 en die eerste getal is 2(12) + 9 = 33.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Vader is 6 keer so oud soos sy seun. Oor 2 jaar sal die vader slegs 5 keer so oud soos sy seun wees. As die seun se huidige ouderdom x is, stel ʼn vergelyking op en vind die seun se huidige ouderdom.', answer: '6x + 2 = 5(x + 2)', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'x = 8', '6x + 2 = 5(x + 2), x = 8'], explanation: 'Laat die seun se huidige ouderdom x wees, dus is die vader se huidige ouderdom 6x.\nOor 2 jaar: vader = 6x + 2, seun = x + 2\n6x + 2 = 5(x + 2)\nBrei uit: 6x + 2 = 5x + 10\nTrek 5x van albei kante af: x + 2 = 10\nTrek 2 van albei kante af: x = 8\nDie seun is tans 8 jaar oud.' },
        { difficulty: 'Hard', question: 'Die breedte van ʼn reghoek is w cm en die lengte is 6 cm meer as die breedte. Die omtrek is 64 cm. Stel ʼn vergelyking op en los dit op om die breedte te vind.', answer: '2(w + (w + 6)) = 64\n2(2w + 6) = 64\n4w + 12 = 64\n4w = 52\nw = 13\nDie breedte is 13 cm en die lengte is 13 + 6 = 19 cm.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Padstalletjie vra ʼn R18-stalfooi plus R6 per item. ʼn Tweede stalletjie vra ʼn R6-stalfooi plus R9 per item. Vir hoeveel items, n, sal die totale koste by albei stalletjies dieselfde wees?', answer: '18 + 6n = 6 + 9n', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'n = 4', '18 + 6n = 6 + 9n, n = 4'], explanation: '18 + 6n = 6 + 9n\nTrek 6n van albei kante af: 18 = 6 + 3n\nTrek 6 van albei kante af: 12 = 3n\nDeel albei kante deur 3: n = 4\nKontroleer: 18 + 6(4) = 42 en 6 + 9(4) = 42 ✓' },

        // Blok 5 — Oplossings kontroleer deur substitusie / foutopsporing (posisies 16-17)
        { difficulty: 'Medium', question: 'Is x = 10 ʼn oplossing vir 3x − 8 = 2x + 3? Wys jou substitusie-kontrole, en gee die korrekte oplossing as dit nie is nie.', answer: 'nee', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'Vervang x = 10 in albei kante.\nLinkerkant: 3(10) − 8 = 30 − 8 = 22\nRegterkant: 2(10) + 3 = 20 + 3 = 23\n22 is nie gelyk aan 23 nie, dus is x = 10 nie ʼn oplossing nie. Die korrekte oplossing: 3x − 8 = 2x + 3 → x = 11. Kontroleer: 3(11) − 8 = 25 en 2(11) + 3 = 25 ✓' },
        { difficulty: 'Hard', question: 'Amahle kontroleer x = 6 in die vergelyking 5(x + 1) = 3x + 27 en kom tot die gevolgtrekking dat dit ʼn oplossing is omdat 5(7) = 35 en die regterkant "lyk naby" aan 35. Wys ʼn behoorlike substitusie-kontrole en sê of x = 6 werklik korrek is.', answer: 'Vervang x = 6 in albei kante.\nLinkerkant: 5(6 + 1) = 5(7) = 35\nRegterkant: 3(6) + 27 = 18 + 27 = 45\n35 is nie gelyk aan 45 nie, dus is x = 6 NIE ʼn oplossing nie — Amahle het verkeerdelik ʼn benaderde ooreenstemming aanvaar in plaas daarvan om die presiese waardes te kontroleer. Korrekte oplossing: 5(x + 1) = 3x + 27 → 5x + 5 = 3x + 27 → 2x = 22 → x = 11. Kontroleer: 5(11 + 1) = 5(12) = 60 en 3(11) + 27 = 60 ✓', checkMode: 'self' },

        // Blok 6 — Multi-stap gekombineerde vergelykings (posisies 18-19)
        { difficulty: 'Hard', question: 'Los op: 4(x − 1) = x + 11', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: '4(x − 1) = x + 11\nBrei die hakie uit: 4x − 4 = x + 11\nTrek x van albei kante af: 3x − 4 = 11\nTel 4 by albei kante: 3x = 15\nDeel albei kante deur 3: x = 5\nKontroleer: 4(5 − 1) = 4(4) = 16 en 5 + 11 = 16 ✓' },
        { difficulty: 'Hard', question: 'Los op: (x + 3)/4 + 1 = x − 5', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '(x + 3)/4 + 1 = x − 5\nVermenigvuldig elke term met 4 om die breuk uit te skakel: (x + 3) + 4 = 4x − 20\nVereenvoudig die linkerkant: x + 7 = 4x − 20\nTrek x van albei kante af: 7 = 3x − 20\nTel 20 by albei kante: 27 = 3x\nDeel albei kante deur 3: x = 9\nKontroleer: (9 + 3)/4 + 1 = 3 + 1 = 4 en 9 − 5 = 4 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het vergelykings met veranderlikes aan albei kante, hakies en breuke baasgeraak.' },
        { minScore: 14, message: 'Goeie werk! Gaan enige gemiste vrae oor hakies of breuke weer deur en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor breuke uitskakel en hakies uitbrei weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
