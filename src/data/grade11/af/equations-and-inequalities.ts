import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ────────────────────────────────────────────────────────
// Section 1: factorisation method  → blue   (#2563eb)
//            completing the square → orange (#ea580c)
//            quadratic formula     → green  (#16a34a)
// Section 2: critical values       → blue
//            sign of each interval → orange
//            final solution        → green
// Section 3: linear equation       → blue
//            quadratic equation    → orange
//            substitution result   → green
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Vergelykings en Ongelykhede',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SOLVING QUADRATIC EQUATIONS USING THREE METHODS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-quadratic-equations',
      title: 'Kwadratiese Vergelykings Oplos deur Drie Metodes',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">Ons los kwadratiese vergelykings van die vorm <strong>ax² + bx + c = 0</strong> op deur drie metodes te gebruik: ${bl('faktorisering')} (wanneer die uitdrukking maklik faktoriseer), ${or('volledigmaking van die vierkant')} (veral nuttig wanneer faktorisering nie eenvoudig is nie), en die ${gr('kwadratiese formule')} x = (−b ± √(b² − 4ac)) / 2a (wat altyd werk vir enige kwadratiese ax² + bx + c = 0).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('faktorisering')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('volledigmaking van die vierkant')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kwadratiese formule')}</span>` +
        `</div>` +

        // ── Three method cards ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die drie metodes</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Faktorisering</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Skryf ax² + bx + c as ʼn produk van twee lineêre faktore, en stel dan elke faktor gelyk aan nul.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;"><strong>Gebruik wanneer:</strong> die uitdrukking maklik oor die heelgetalle faktoriseer.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Volledigmaking van die Vierkant</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Herskryf die vergelyking in die vorm (x + p)² = q, en trek dan die vierkantswortel van albei kante.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;"><strong>Gebruik wanneer:</strong> faktorisering nie voor die hand liggend is nie, of wanneer wortelvorm-antwoorde verwag word.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Kwadratiese Formule</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Vervang die waardes van a, b, en c uit ax² + bx + c = 0 direk in die formule.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;"><strong>Gebruik wanneer:</strong> enige kwadratiese — hierdie metode werk altyd.</p>` +
        `</div>` +

        `</div>` +

        // ── Quadratic formula display ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die kwadratiese formule</p>` +
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#16a34a;margin:0;letter-spacing:0.02em;">x = (−b ± √(b² − 4ac)) / 2a</p>` +
        `<p style="font-size:13px;color:#374151;margin-top:10px;margin-bottom:0;">waar ax² + bx + c = 0, met a ≠ 0</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die doeltreffendste metode kies</p>` +
        `<p style="margin:0;color:#1e3a8a;">Kyk altyd eers of die kwadratiese ${bl('faktoriseer')} — dit gee die vinnigste oplossing. As dit nie netjies faktoriseer nie, gebruik ${or('volledigmaking van die vierkant')} (veral doeltreffend wanneer a = 1) of die ${gr('kwadratiese formule')} (die veilige alombruikbare keuse, veral wanneer a ≠ 1).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op: x² − 7x + 12 = 0 deur faktorisering.',
          answer: `${bl('x = 3')} of ${bl('x = 4')}`,
          steps: [
            `Skryf die vergelyking in standaardvorm: x² − 7x + 12 = 0.`,
            `${bl('Faktoriseer:')} Vind twee getalle wat vermenigvuldig tot +12 en optel tot −7. Dit is −3 en −4.<br>(x − 3)(x − 4) = 0`,
            `Stel elke faktor gelyk aan nul: x − 3 = 0 of x − 4 = 0.`,
            `<strong>Oplossings:</strong> ${bl('x = 3')} of ${bl('x = 4')}`,
          ],
        },
        {
          question: 'Los op: x² + 6x + 4 = 0 deur die vierkant volledig te maak.',
          answer: `${or('x = −3 + √5')} of ${or('x = −3 − √5')}`,
          steps: [
            `Skryf die vergelyking: x² + 6x + 4 = 0. Aangesien a = 1, is die volledigmaking van die vierkant eenvoudig.`,
            `${or('Maak die vierkant volledig:')} Neem die helfte van die koëffisiënt van x: die helfte van 6 is 3. Skryf die volkome vierkant-trinoom:<br>(x + 3)² − 9 + 4 = 0`,
            `Vereenvoudig: ${or('(x + 3)² = 5')}`,
            `Trek die vierkantswortel van albei kante: x + 3 = ±√5`,
            `<strong>Oplossings:</strong> ${or('x = −3 ± √5')} &nbsp;(m.a.w. x = −3 + √5 of x = −3 − √5)`,
          ],
        },
        {
          question: 'Los op: 2x² − 5x − 3 = 0 deur die kwadratiese formule te gebruik.',
          answer: `${gr('x = 3')} of ${gr('x = −½')}`,
          steps: [
            `Identifiseer die koëffisiënte: a = 2, b = −5, c = −3.`,
            `${gr('Kwadratiese formule:')} x = (−b ± √(b² − 4ac)) / 2a`,
            `Vervang: x = (−(−5) ± √((−5)² − 4(2)(−3))) / (2 × 2) = (5 ± √(25 + 24)) / 4 = (5 ± √49) / 4 = (5 ± 7) / 4`,
            `<strong>Oplossings:</strong> x = (5 + 7) / 4 = 12/4 = ${gr('3')} &nbsp; of &nbsp; x = (5 − 7) / 4 = −2/4 = ${gr('−½')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om kwadratiese vergelykings op te los deur faktorisering, volledigmaking van die vierkant, en die kwadratiese formule, met ʼn uitgewerkte voorbeeld vir elke metode" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — QUADRATIC AND RATIONAL INEQUALITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadratic-rational-inequalities',
      title: 'Kwadratiese en Rasionale Ongelykhede',
      icon: '≤',
      explanation:
        `<p style="margin-bottom:16px;">Om ʼn kwadratiese ongelykheid op te los, los ons eers die verwante kwadratiese vergelyking op om die ${bl('kritieke waardes')} te vind, en gebruik dan ʼn getallelyn of ${or('tekenanalise')} om te bepaal watter intervalle aan die ongelykheid voldoen. Die ${gr('finale oplossing')} is die versameling van alle x-waardes waarvoor die ongelykheid geld. Vir rasionale ongelykhede (breuke) moet ons ook oorweeg waar die noemer gelyk is aan nul, aangesien die uitdrukking daar onbepaald is.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kritieke waardes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('teken van elke interval')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale oplossing')}</span>` +
        `</div>` +

        // ── Steps ───────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ongelykhede op te los</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Vind kritieke waardes')} — Los die verwante vergelyking op (vervang die ongelykheidsteken met =) om die x-waardes te vind waar die uitdrukking gelyk is aan nul. Vir rasionale ongelykhede, let ook op waar die noemer gelyk is aan nul.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Ontleed elke interval')} — Die kritieke waardes verdeel die getallelyn in gebiede. Kies ʼn toetspunt in elke gebied en bepaal die ${or('teken')} (positief of negatief) van die uitdrukking in daardie gebied.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Skryf die finale oplossing')} — Kies die gebiede waar die teken ooreenstem met die ongelykheid. Sluit die eindpunte in as ≤ of ≥ gebruik word; sluit hulle uit as &lt; of &gt; gebruik word. Sluit altyd waardes uit wat die noemer nul maak.</p>` +
        `</div>` +

        `</div>` +

        // ── Rational inequalities warning ────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Belangrik: rasionale ongelykhede</p>` +
        `<p style="margin:0;color:#7c2d12;">Wanneer die ongelykheid ʼn breuk bevat, sluit die x-waarde in wat die <strong>noemer nul</strong> maak as ʼn kritieke waarde. Hierdie waarde word <strong>altyd uitgesluit</strong> van die oplossing — selfs wanneer die ongelykheid ≤ of ≥ gebruik — omdat die uitdrukking daar onbepaald is.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tekenanalise op ʼn getallelyn</p>` +
        `<p style="margin:0;color:#1e3a8a;">Trek ʼn getallelyn, merk die ${bl('kritieke waardes')}, en toets een punt in elke gebied. Die ${or('teken')} wissel gewoonlik tussen gebiede vir kwadratiese en rasionale uitdrukkings — maar verifieer altyd deur substitusie. Identifiseer die gebiede wat aan die ongelykheid voldoen en skryf die ${gr('oplossing')} in ongelykheids- of intervalnotasie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op: x² − 5x + 6 > 0.',
          answer: `${gr('x < 2 of x > 3')}`,
          steps: [
            `Los die verwante vergelyking op: x² − 5x + 6 = 0. Faktoriseer: (x − 2)(x − 3) = 0.<br>${bl('Kritieke waardes:')} x = ${bl('2')} of x = ${bl('3')}`,
            `Die kritieke waardes verdeel die getallelyn in drie intervalle: x &lt; 2, &nbsp;2 &lt; x &lt; 3, &nbsp;x &gt; 3.`,
            `${or('Toets elke interval:')}<br>• x &lt; 2: toets x = 0 → (0)² − 5(0) + 6 = 6 &gt; 0 &nbsp;${or('positief ✓')}<br>• 2 &lt; x &lt; 3: toets x = 2,5 → (2,5)² − 5(2,5) + 6 = −0,25 &lt; 0 &nbsp;${or('negatief')}<br>• x &gt; 3: toets x = 4 → (4)² − 5(4) + 6 = 2 &gt; 0 &nbsp;${or('positief ✓')}`,
            `Ons benodig die uitdrukking &gt; 0. Die ongelykheid is streng, dus word die eindpunte x = 2 en x = 3 uitgesluit.<br><strong>Oplossing:</strong> ${gr('x < 2 of x > 3')}`,
          ],
        },
        {
          question: 'Los op: x² − 9 ≤ 0.',
          answer: `${gr('−3 ≤ x ≤ 3')}`,
          steps: [
            `Los die verwante vergelyking op: x² − 9 = 0 → x² = 9.<br>${bl('Kritieke waardes:')} x = ${bl('−3')} of x = ${bl('3')}`,
            `Die kritieke waardes verdeel die getallelyn in drie intervalle: x &lt; −3, &nbsp;−3 ≤ x ≤ 3, &nbsp;x &gt; 3.`,
            `${or('Toets elke interval:')}<br>• x &lt; −3: toets x = −4 → (−4)² − 9 = 7 &gt; 0 &nbsp;${or('positief')}<br>• −3 &lt; x &lt; 3: toets x = 0 → (0)² − 9 = −9 &lt; 0 &nbsp;${or('negatief ✓')}<br>• x &gt; 3: toets x = 4 → (4)² − 9 = 7 &gt; 0 &nbsp;${or('positief')}`,
            `Ons benodig die uitdrukking ≤ 0. Die uitdrukking is gelyk aan nul by x = −3 en x = 3, dus word hierdie eindpunte ingesluit (≤).<br><strong>Oplossing:</strong> ${gr('−3 ≤ x ≤ 3')}`,
          ],
        },
        {
          question: 'Los op: (x − 2) / (x + 1) > 0.',
          answer: `${gr('x < −1 of x > 2')}`,
          steps: [
            `Vind ${bl('kritieke waardes:')} Die teller is gelyk aan nul wanneer x = ${bl('2')} (uitdrukking is nul). Die noemer is gelyk aan nul wanneer x = ${bl('−1')} (uitdrukking is onbepaald — altyd uitgesluit).`,
            `Die kritieke waardes verdeel die getallelyn in drie intervalle: x &lt; −1, &nbsp;−1 &lt; x &lt; 2, &nbsp;x &gt; 2.`,
            `${or('Toets elke interval:')}<br>• x &lt; −1: toets x = −2 → (−2 − 2)/(−2 + 1) = (−4)/(−1) = 4 &gt; 0 &nbsp;${or('positief ✓')}<br>• −1 &lt; x &lt; 2: toets x = 0 → (0 − 2)/(0 + 1) = −2 &lt; 0 &nbsp;${or('negatief')}<br>• x &gt; 2: toets x = 3 → (3 − 2)/(3 + 1) = ¼ &gt; 0 &nbsp;${or('positief ✓')}`,
            `Ons benodig die uitdrukking &gt; 0. Die ongelykheid is streng, dus word x = 2 uitgesluit. x = −1 word altyd uitgesluit (noemer nul).<br><strong>Oplossing:</strong> ${gr('x < −1 of x > 2')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om kwadratiese en rasionale ongelykhede op te los deur kritieke waardes en tekenanalise op ʼn getallelyn te gebruik" />',

      diagramPlaceholder:
        'Getallelyndiagram wat kritieke waardes in blou toon, die teken van die uitdrukking in elke interval in oranje, en die finale oplossingsintervalle in groen uitgelig',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 120" width="100%" style="max-width:380px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="150" y="14" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">x² − 5x + 6 &gt; 0</text>` +
        `<text x="86" y="27" text-anchor="middle" font-size="13" font-weight="700" fill="#ea580c">+</text>` +
        `<text x="166" y="27" text-anchor="middle" font-size="13" font-weight="700" fill="#ea580c">−</text>` +
        `<text x="227" y="27" text-anchor="middle" font-size="13" font-weight="700" fill="#ea580c">+</text>` +
        `<polygon points="15,40 25,35 25,45" fill="#16a34a"/>` +
        `<line x1="25" y1="40" x2="148" y2="40" stroke="#16a34a" stroke-width="5" stroke-linecap="round"/>` +
        `<line x1="184" y1="40" x2="271" y2="40" stroke="#16a34a" stroke-width="5" stroke-linecap="round"/>` +
        `<polygon points="281,40 271,35 271,45" fill="#16a34a"/>` +
        `<polygon points="15,55 25,50 25,60" fill="#0f1f3d"/>` +
        `<line x1="25" y1="55" x2="271" y2="55" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="281,55 271,50 271,60" fill="#0f1f3d"/>` +
        `<line x1="40" y1="50" x2="40" y2="60" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="76" y1="50" x2="76" y2="60" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="112" y1="50" x2="112" y2="60" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="220" y1="50" x2="220" y2="60" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="256" y1="50" x2="256" y2="60" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<circle cx="148" cy="55" r="5" fill="white" stroke="#2563eb" stroke-width="2.5"/>` +
        `<circle cx="184" cy="55" r="5" fill="white" stroke="#2563eb" stroke-width="2.5"/>` +
        `<text x="40" y="75" text-anchor="middle" font-size="11" fill="#6b7280">−1</text>` +
        `<text x="76" y="75" text-anchor="middle" font-size="11" fill="#6b7280">0</text>` +
        `<text x="112" y="75" text-anchor="middle" font-size="11" fill="#6b7280">1</text>` +
        `<text x="148" y="75" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">2</text>` +
        `<text x="184" y="75" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">3</text>` +
        `<text x="220" y="75" text-anchor="middle" font-size="11" fill="#6b7280">4</text>` +
        `<text x="256" y="75" text-anchor="middle" font-size="11" fill="#6b7280">5</text>` +
        `<text x="150" y="98" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">Oplossing: x &lt; 2 of x &gt; 3</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING SYSTEMS WITH ONE LINEAR AND ONE QUADRATIC EQUATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'linear-quadratic-systems',
      title: 'Stelsels met Een Lineêre en Een Kwadratiese Vergelyking Oplos',
      icon: '∩',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer ons twee vergelykings gelyktydig oplos waar een ${bl('lineêr')} en die ander ${or('kwadraties')} is, gebruik ons substitusie: los die ${bl('lineêre vergelyking')} op vir een veranderlike, vervang dit in die ${or('kwadratiese vergelyking')}, en los dan die ${gr('gevolglike kwadratiese vergelyking')} op. Dit kan algebraïes gedoen word, of grafies geverifieer word deur te vind waar die lyn die parabool sny.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('lineêre vergelyking')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kwadratiese vergelyking')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('substitusieresultaat')}</span>` +
        `</div>` +

        // ── Substitution steps ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe vir die substitusiemetode</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Los die lineêre vergelyking op')} vir een veranderlike — druk gewoonlik y in terme van x uit die lineêre vergelyking uit.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Vervang die uitdrukking van stap 1 in die ${or('kwadratiese vergelyking')} om een veranderlike te elimineer, wat ʼn enkele vergelyking in x gee.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Los die ${gr('gevolglike kwadratiese vergelyking')} op deur enige geskikte metode — faktorisering, volledigmaking van die vierkant, of die kwadratiese formule.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vervang terug</strong> — vervang elke x-waarde terug in die ${bl('lineêre vergelyking')} om die ooreenstemmende y-waarde te vind, en skryf dan jou antwoord as koördinaatpare.</p>` +
        `</div>` +

        `</div>` +

        // ── Graphical interpretation ──────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Grafiese interpretasie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die oplossings verteenwoordig die <strong>snypunte</strong> van die ${bl('reguit lyn')} en die ${or('parabool')} op die Cartesiese vlak. ʼn Stelsel kan 0, 1, of 2 oplossings hê, wat ooreenstem met die lyn wat die parabool by 0, 1, of 2 punte sny. Die diskriminant van die gevolglike kwadratiese vergelyking wys jou hoeveel snypunte daar is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los gelyktydig op: y = x + 1 en y = x² − x − 1.',
          answer: `(${gr('1 + √3')} ; ${gr('2 + √3')}) en (${gr('1 − √3')} ; ${gr('2 − √3')})`,
          steps: [
            `Identifiseer die vergelykings: ${bl('lineêr:')} y = x + 1 &nbsp; en &nbsp; ${or('kwadraties:')} y = x² − x − 1.`,
            `${gr('Vervang')} die lineêre uitdrukking in die kwadratiese vergelyking:<br>x + 1 = x² − x − 1`,
            `Herrangskik: ${gr('x² − 2x − 2 = 0')}`,
            `Los op deur die kwadratiese formule: a = 1, b = −2, c = −2.<br>x = (2 ± √(4 + 8)) / 2 = (2 ± √12) / 2 = 1 ± √3`,
            `Vind die ooreenstemmende y-waardes deur ${bl('y = x + 1')} te gebruik:<br>Wanneer x = 1 + √3: y = (1 + √3) + 1 = 2 + √3<br>Wanneer x = 1 − √3: y = (1 − √3) + 1 = 2 − √3`,
            `<strong>Oplossings:</strong> (${gr('1 + √3')} ; ${gr('2 + √3')}) en (${gr('1 − √3')} ; ${gr('2 − √3')})`,
          ],
        },
        {
          question: 'Sipho los gelyktydig op: y = 2x − 3 en y = x² − 4x + 1.',
          answer: `(${gr('3 + √5')} ; ${gr('3 + 2√5')}) en (${gr('3 − √5')} ; ${gr('3 − 2√5')})`,
          steps: [
            `Identifiseer die vergelykings: ${bl('lineêr:')} y = 2x − 3 &nbsp; en &nbsp; ${or('kwadraties:')} y = x² − 4x + 1.`,
            `${gr('Vervang')} die lineêre uitdrukking in die kwadratiese vergelyking:<br>2x − 3 = x² − 4x + 1`,
            `Herrangskik: ${gr('x² − 6x + 4 = 0')}`,
            `Los op deur die kwadratiese formule: a = 1, b = −6, c = 4.<br>x = (6 ± √(36 − 16)) / 2 = (6 ± √20) / 2 = 3 ± √5`,
            `Vind die ooreenstemmende y-waardes deur ${bl('y = 2x − 3')} te gebruik:<br>Wanneer x = 3 + √5: y = 2(3 + √5) − 3 = 6 + 2√5 − 3 = 3 + 2√5<br>Wanneer x = 3 − √5: y = 2(3 − √5) − 3 = 6 − 2√5 − 3 = 3 − 2√5`,
            `<strong>Oplossings:</strong> (${gr('3 + √5')} ; ${gr('3 + 2√5')}) en (${gr('3 − √5')} ; ${gr('3 − 2√5')})`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn stelsel van een lineêre en een kwadratiese vergelyking gelyktydig op te los deur die substitusiemetode te gebruik" />',

      diagramPlaceholder:
        'Grafiek wat ʼn reguit lyn in blou toon wat ʼn parabool in oranje by twee punte sny, met die snypuntkoördinate in groen uitgelig',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 190" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="5" y1="150" x2="230" y2="150" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="238,150 228,145 228,155" fill="#0f1f3d"/>` +
        `<line x1="70" y1="175" x2="70" y2="20" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="70,10 65,20 75,20" fill="#0f1f3d"/>` +
        `<text x="230" y="163" text-anchor="middle" font-size="10" fill="#0f1f3d">x</text>` +
        `<text x="76" y="16" font-size="10" fill="#0f1f3d">y</text>` +
        `<polyline points="10,121 25,134 40,143 55,148 70,150 85,148 100,143 115,134 130,121 145,105 160,85" fill="none" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>` +
        `<line x1="0" y1="137" x2="175" y2="106" stroke="#2563eb" stroke-width="2.5"/>` +
        `<circle cx="24" cy="133" r="4" fill="#16a34a"/>` +
        `<circle cx="138" cy="113" r="4" fill="#16a34a"/>` +
        `<text x="12" y="126" font-size="10" font-weight="700" fill="#16a34a">A</text>` +
        `<text x="144" y="106" font-size="10" font-weight="700" fill="#16a34a">B</text>` +
        `<text x="163" y="78" font-size="9" font-weight="700" fill="#ea580c">y=ax²+bx+c</text>` +
        `<text x="178" y="103" font-size="9" font-weight="700" fill="#2563eb">y=mx+c</text>` +
        `<text x="120" y="184" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">2 snypunte = 2 oplossings</text>` +
        `</svg>`,
    },
  ],

  topicPractice: [
    // ── Q1 Easy — factorisation ──────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los op: x² − 9x + 20 = 0 deur faktorisering.',
      answer: 'x = 4 of x = 5',
      checkMode: 'auto',
      correctAnswers: ['x=4 or x=5', 'x = 4 or x = 5', 'x=5 or x=4', 'x = 5 or x = 4', '4 or 5', '5 or 4'],
      explanation: 'Vind twee getalle wat vermenigvuldig tot 20 en optel tot −9: dit is −4 en −5.\n(x − 4)(x − 5) = 0\nStel elke faktor gelyk aan nul: x = 4 of x = 5 ✓',
    },

    // ── Q2 Medium — completing the square ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op: x² + 4x − 1 = 0 deur die vierkant volledig te maak.',
      answer: 'x² + 4x = 1\n(x + 2)² − 4 = 1 → (x + 2)² = 5\nx + 2 = ±√5\nx = −2 + √5 of x = −2 − √5',
      checkMode: 'self',
    },

    // ── Q3 Hard — quadratic formula with full discriminant ───────────────────
    {
      difficulty: 'Hard',
      question: 'Los op: 3x² + 2x − 5 = 0 deur die kwadratiese formule te gebruik, en toon die volledige diskriminantberekening.',
      answer: 'a = 3, b = 2, c = −5.\nDiskriminant: b² − 4ac = 4 − 4(3)(−5) = 4 + 60 = 64.\nx = (−2 ± √64) / 6 = (−2 ± 8) / 6.\nOplossings: x = (−2 + 8) / 6 = 1  of  x = (−2 − 8) / 6 = −5/3.',
      checkMode: 'self',
    },

    // ── Q4 Easy — quadratic inequality ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los op: x² − 4 > 0.',
      answer: 'x < −2 of x > 2',
      checkMode: 'auto',
      correctAnswers: ['x<-2 or x>2', 'x < -2 or x > 2', 'x<−2 or x>2', 'x < −2 or x > 2'],
      explanation: 'Kritieke waardes: x² − 4 = 0 → x = −2 of x = 2.\nToets intervalle:\n• x < −2: positief ✓\n• −2 < x < 2: negatief\n• x > 2: positief ✓\nOplossing: x < −2 of x > 2.',
    },

    // ── Q5 Medium — quadratic inequality ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op: x² − 7x + 10 ≤ 0.',
      answer: '2 ≤ x ≤ 5',
      checkMode: 'auto',
      correctAnswers: ['2≤x≤5', '2 ≤ x ≤ 5', '[2,5]', '2<=x<=5', '2 <= x <= 5'],
      explanation: 'Kritieke waardes: (x − 2)(x − 5) = 0 → x = 2 of x = 5.\nToets intervalle:\n• x < 2: positief\n• 2 < x < 5: negatief ✓\n• x > 5: positief\nDie uitdrukking ≤ 0 tussen en by die wortels.\nOplossing: 2 ≤ x ≤ 5.',
    },

    // ── Q6 Hard — incomplete inequality answer ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho los x² − 16 < 0 op en kry x < 4. Is sy antwoord volledig? Verduidelik.',
      answer: 'Nee — hy mis ʼn deel van die oplossing. Die volledige oplossing is −4 < x < 4, aangesien x² − 16 < 0 beteken dat x tussen −4 en 4 moet lê.',
      checkMode: 'self',
    },

    // ── Q7 Medium — rational inequality ─────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op: (x − 3) / (x + 2) < 0.',
      answer: '−2 < x < 3',
      checkMode: 'auto',
      correctAnswers: ['-2<x<3', '-2 < x < 3', '−2<x<3', '−2 < x < 3', '(-2,3)'],
      explanation: 'Kritieke waardes: teller nul → x = 3; noemer nul → x = −2 (altyd uitgesluit).\nToets intervalle:\n• x < −2: positief\n• −2 < x < 3: negatief ✓\n• x > 3: positief\nOplossing: −2 < x < 3.',
    },

    // ── Q8 Hard — excluded value in rational inequality ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato los (x + 1) / (x − 4) ≥ 0 op en sluit x = 4 by haar antwoord in. Is dit korrek? Verduidelik.',
      answer: 'Nee — x = 4 maak die noemer nul, wat die uitdrukking onbepaald maak, dus moet x = 4 uitgesluit word selfs al sluit die ongelykheid "of gelyk aan" in.',
      checkMode: 'self',
    },

    // ── Q9 Hard — quadratic inequality with sign analysis ────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op: x² − 2x − 8 ≥ 0.',
      answer: 'Los x² − 2x − 8 = 0 op: (x − 4)(x + 2) = 0, x = 4 of x = −2.\nToets intervalle:\n• x < −2: positief ✓\n• −2 < x < 4: negatief\n• x > 4: positief ✓\nOplossing: x ≤ −2 of x ≥ 4.',
      checkMode: 'self',
    },

    // ── Q10 Medium — simultaneous linear and quadratic ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Los gelyktydig op: y = x + 2 en y = x² − 4.',
      answer: 'x = 3, y = 5  of  x = −2, y = 0',
      checkMode: 'auto',
      correctAnswers: ['x=3 or x=-2', 'x = 3 or x = -2', '(3,5) and (-2,0)', 'x=3,y=5 and x=-2,y=0'],
      explanation: 'Vervang y = x + 2 in y = x² − 4:\nx + 2 = x² − 4\nx² − x − 6 = 0 → (x − 3)(x + 2) = 0\nx = 3 of x = −2\nOoreenstemmende y-waardes: y = 5 of y = 0.',
    },

    // ── Q11 Hard — simultaneous equations, surd solutions ───────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo los y = 2x − 1 en y = x² − 3x + 2 gelyktydig op. Vind albei oplossingspunte.',
      answer: 'Vervang: 2x − 1 = x² − 3x + 2.\nx² − 5x + 3 = 0.\nx = (5 ± √13) / 2.\nOoreenstemmende y = 2x − 1 = 4 ± √13.\nOplossingspunte: ((5 + √13)/2 ; 4 + √13) en ((5 − √13)/2 ; 4 − √13).',
      checkMode: 'self',
    },

    // ── Q12 Hard — simultaneous equations, surd solutions ───────────────────
    {
      difficulty: 'Hard',
      question: 'Los gelyktydig op: y = −x + 5 en y = x² − 2x − 3.',
      answer: 'Vervang: −x + 5 = x² − 2x − 3.\nx² − x − 8 = 0.\nx = (1 ± √33) / 2.\nOoreenstemmende y-waardes uit y = −x + 5.\nOplossingspunte: ((1 + √33)/2 ; (9 − √33)/2) en ((1 − √33)/2 ; (9 + √33)/2).',
      checkMode: 'self',
    },

    // ── Q13 Medium — quadratic formula ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op: x² + x − 12 = 0 deur die kwadratiese formule te gebruik.',
      answer: 'x = 3 of x = −4',
      checkMode: 'auto',
      correctAnswers: ['x=3 or x=-4', 'x = 3 or x = -4', 'x=-4 or x=3', 'x = -4 or x = 3', '3 or -4', '-4 or 3'],
      explanation: 'a = 1, b = 1, c = −12. Diskriminant: Δ = 1 + 48 = 49.\nx = (−1 ± 7) / 2.\nx = 3 of x = −4 ✓',
    },

    // ── Q14 Hard — discriminant and nature of roots ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê elke kwadratiese vergelyking het twee reële oplossings. Is sy korrek? Verduidelik deur die diskriminant te gebruik.',
      answer: 'Nee — as die diskriminant (b² − 4ac) negatief is, is daar geen reële oplossings nie; as dit gelyk is aan nul, is daar presies een herhaalde reële oplossing; slegs ʼn positiewe diskriminant gee twee verskillende reële oplossings.',
      checkMode: 'self',
    },

    // ── Q15 Hard — inequality with repeated root ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op: x² − 6x + 9 ≤ 0, en verduidelik wat die diskriminant ons vertel voordat jy oplos.',
      answer: 'Diskriminant = 36 − 36 = 0 → een herhaalde wortel. Oplos: (x − 3)² ≤ 0. Aangesien ʼn vierkant altyd ≥ 0 is, is die enigste oplossing x = 3 (waar dit presies 0 is).',
      checkMode: 'self',
    },

    // ── Q16 Hard — rational inequality requiring rearrangement ───────────────
    {
      difficulty: 'Hard',
      question: 'Los op: (2x − 1) / (x + 3) ≤ 2, en wees versigtig met die rigting van die ongelykheid wanneer jy vermenigvuldig.',
      answer: 'Herrangskik eers: (2x − 1)/(x + 3) − 2 ≤ 0.\nKombineer breuke: [(2x − 1) − 2(x + 3)] / (x + 3) ≤ 0.\nVereenvoudig die teller: (2x − 1 − 2x − 6) / (x + 3) = −7 / (x + 3) ≤ 0.\nAangesien −7 altyd negatief is, benodig ons (x + 3) > 0.\nOplossing: x > −3.',
      checkMode: 'self',
    },

    // ── Q17 Hard — simultaneous linear and quadratic ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los gelyktydig op: y = 3x − 4 en y = 2x² − 6x − 9, en vind albei snypunte.',
      answer: 'x = 5, y = 11  of  x = −½, y = −5,5',
      checkMode: 'auto',
      correctAnswers: ['x=5 or x=-1/2', 'x = 5 or x = -1/2', 'x=5 or x=-0.5', '(5,11) and (-0.5,-5.5)', '(5,11) and (-1/2,-5.5)'],
      explanation: 'Vervang y = 3x − 4 in y = 2x² − 6x − 9:\n3x − 4 = 2x² − 6x − 9\n2x² − 9x − 5 = 0 → (2x + 1)(x − 5) = 0\nx = 5 of x = −½\nOoreenstemmende y-waardes: y = 11 of y = −5,5.',
    },

    // ── Q18 Hard — nature of inequality solutions ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê die oplossing van ʼn kwadratiese ongelykheid is altyd ʼn enkele deurlopende interval. Is dit altyd waar? Verduidelik met ʼn voorbeeld.',
      answer: 'Nee — byvoorbeeld x² − 4 > 0 gee twee afsonderlike intervalle (x < −2 of x > 2), nie een deurlopende interval nie; dit hang af van of die parabool na bo of na onder oopmaak, en van die rigting van die ongelykheid.',
      checkMode: 'self',
    },

    // ── Q19 Hard — boundary points of inequality ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op: x² + 3x − 10 = 0, en verifieer dan dat albei oplossings aan die ongelykheid x² + 3x − 10 ≤ 0 slegs by hierdie presiese grenspunte voldoen.',
      answer: 'Faktoriseer: (x + 5)(x − 2) = 0 → x = −5 of x = 2. Dit is die grenspunte waar x² + 3x − 10 = 0. Die volledige ongelykheid x² + 3x − 10 ≤ 0 geld tussen en by hierdie punte: −5 ≤ x ≤ 2.',
      checkMode: 'self',
    },

    // ── Q20 Hard — quadratic inequality in context ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Reghoekige tuin het lengte (x + 4) en breedte (x − 2), met ʼn oppervlakte groter as 35 m². Vind die moontlike reeks x-waardes, gegewe dat x > 2 sodat die afmetings sinvol is.',
      answer: '(x + 4)(x − 2) > 35\nx² + 2x − 8 > 35\nx² + 2x − 43 > 0\nDeur die kwadratiese formule te gebruik: x = (−2 ± √(4 + 172)) / 2 = (−2 ± √176) / 2 = −1 ± √44.\nKritieke waardes: x ≈ −7,63 of x ≈ 5,63.\nAangesien x > 2, is die oplossing x > −1 + √44 (ongeveer x > 5,63).',
      checkMode: 'self',
    },

    // ── Q21 Hard — problem-solving: work backwards from equal-roots condition to find k ──
    {
      difficulty: 'Hard',
      question: 'Die vergelyking x² − kx + 9 = 0 het reële, gelyke wortels. Bepaal die waarde(s) van k.',
      answer: 'k = 6 of k = −6',
      checkMode: 'auto',
      correctAnswers: ['k=6 or k=-6', 'k = 6 or k = -6', 'k=-6 or k=6', 'k = -6 or k = 6', 'k=±6', 'k = ±6', '6 or -6', '-6 or 6'],
      explanation: 'Vir reële, gelyke wortels moet die diskriminant gelyk wees aan nul: b² − 4ac = 0.\nHier is a = 1, b = −k, c = 9, dus (−k)² − 4(1)(9) = 0.\nk² − 36 = 0 → k² = 36 → k = 6 of k = −6.\nKontroleer: k = 6 gee x² − 6x + 9 = (x − 3)² = 0 (een herhaalde wortel); k = −6 gee x² + 6x + 9 = (x + 3)² = 0 (een herhaalde wortel) ✓',
    },

    // ── Q22 Hard — problem-solving: synthesise systems + discriminant to find range of k ──
    {
      difficulty: 'Hard',
      question: 'Vir watter waarde(s) van k sal die lyn y = x + k nie die parabool y = x² + 3x + 5 sny nie?',
      answer: 'k < 4',
      checkMode: 'auto',
      correctAnswers: ['k<4', 'k < 4'],
      explanation: 'Vervang die lyn in die parabool: x + k = x² + 3x + 5.\nHerrangskik na standaardvorm: x² + 2x + (5 − k) = 0.\nSodat die lyn en die parabool nie sny nie, moet hierdie vergelyking geen reële oplossings hê nie, dus moet die diskriminant negatief wees: b² − 4ac < 0.\nHier is a = 1, b = 2, c = 5 − k, dus 4 − 4(5 − k) < 0 → 4 − 20 + 4k < 0 → 4k − 16 < 0.\nOplossing: k < 4 ✓',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het vergelykings en ongelykhede volkome bemeester.' },
      { minPercent: 75, message: 'Baie goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou so aan, werk weer deur die gids.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Block A — Quadratic formula (positions 0-2)
        { difficulty: 'Easy', question: 'Los op vir x deur die kwadratiese formule te gebruik: x² + 2x − 8 = 0', answer: 'x=2 of x=-4', checkMode: 'auto', correctAnswers: ['x=2 or x=-4', 'x=-4 or x=2', 'x=2 of x=-4', 'x=-4 of x=2', '2 of -4', '-4 of 2'], explanation: 'a=1, b=2, c=−8. Diskriminant = 4 − 4(1)(−8) = 4 + 32 = 36.\nx = (−2 ± 6) / 2.\nx = 2 of x = −4 ✓' },
        { difficulty: 'Easy-Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik: 2x² + 3x − 5 = 0', answer: 'x=1 of x=-5/2', checkMode: 'auto', correctAnswers: ['x=1 or x=-5/2', 'x=-5/2 or x=1', 'x=1 of x=-5/2', 'x=-5/2 of x=1', 'x=1 of x=-2,5', 'x=-2,5 of x=1'], explanation: 'a=2, b=3, c=−5. Diskriminant = 9 − 4(2)(−5) = 9 + 40 = 49.\nx = (−3 ± 7) / 4.\nx = 1 of x = −5/2 ✓' },
        { difficulty: 'Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik: 3x² − 2x − 8 = 0', answer: 'x=2 of x=-4/3', checkMode: 'auto', correctAnswers: ['x=2 or x=-4/3', 'x=-4/3 or x=2', 'x=2 of x=-4/3', 'x=-4/3 of x=2'], explanation: 'a=3, b=−2, c=−8. Diskriminant = 4 − 4(3)(−8) = 4 + 96 = 100.\nx = (2 ± 10) / 6.\nx = 2 of x = −4/3 ✓' },

        // Block B — Quadratic formula, surd-form answers (positions 3-4)
        { difficulty: 'Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik, en laat jou antwoord in eenvoudigste wortelvorm: x² − 4x − 3 = 0', answer: 'x=2+√7 of x=2-√7', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik, en laat jou antwoord in eenvoudigste wortelvorm: 2x² + 3x − 5 = 0. Gee die diskriminant voordat jy oplos.', answer: 'a=2, b=3, c=−5. Diskriminant = 9 − 4(2)(−5) = 49, wat ʼn positiewe volkome vierkant is, dus is daar twee verskillende rasionale wortels.\nx = (−3 ± 7) / 4.\nx = 1 of x = −5/2.', checkMode: 'self' },

        // Block C — Surd equations with extraneous-root checks (positions 5-7)
        { difficulty: 'Medium', question: 'Los op vir x: √(2x + 3) = x', answer: 'x=3', checkMode: 'auto', correctAnswer: 'x=3', correctAnswers: ['x=3', 'x = 3', '3'], explanation: 'Kwadreer albei kante: 2x + 3 = x².\nHerrangskik: x² − 2x − 3 = 0 → (x − 3)(x + 1) = 0, dus x = 3 of x = −1.\nToets x = 3: √(2(3)+3) = √9 = 3 = 3 ✓ geldig.\nToets x = −1: √(2(−1)+3) = √1 = 1 ≠ −1, dus is x = −1 buitenstaander (verwerp).\nOplossing: x = 3 alleen.' },
        { difficulty: 'Medium', question: 'Los op vir x: √(3x + 4) = x, en toets vir buitenstaander-wortels.', answer: 'x=4', checkMode: 'auto', correctAnswer: 'x=4', correctAnswers: ['x=4', 'x = 4', '4'], explanation: 'Kwadreer albei kante: 3x + 4 = x².\nHerrangskik: x² − 3x − 4 = 0 → (x − 4)(x + 1) = 0, dus x = 4 of x = −1.\nToets x = 4: √(3(4)+4) = √16 = 4 = 4 ✓ geldig.\nToets x = −1: √(3(−1)+4) = √1 = 1 ≠ −1, dus is x = −1 buitenstaander (verwerp).\nOplossing: x = 4 alleen.' },
        { difficulty: 'Hard', question: 'Los op vir x: √(x + 7) = x − 5, en toets versigtig vir buitenstaander-wortels.', answer: 'Kwadreer albei kante: x + 7 = (x − 5)² = x² − 10x + 25.\nHerrangskik: x² − 11x + 18 = 0 → (x − 9)(x − 2) = 0, dus x = 9 of x = 2.\nToets x = 9: √16 = 4 en 9 − 5 = 4 ✓ geldig.\nToets x = 2: √9 = 3 maar 2 − 5 = −3, en 3 ≠ −3, dus is x = 2 buitenstaander (verwerp — die vierkantswortel kan nooit gelyk wees aan ʼn negatiewe getal nie).\nOplossing: x = 9 alleen.', checkMode: 'self' },

        // Block D — Exponential equations (positions 8-10)
        { difficulty: 'Easy', question: 'Los op vir x: 2^x = 32', answer: 'x=5', checkMode: 'auto', correctAnswer: 'x=5', correctAnswers: ['x=5', 'x = 5', '5'], explanation: 'Skryf 32 as ʼn mag van 2: 32 = 2⁵.\nDus 2^x = 2⁵, wat beteken x = 5 ✓' },
        { difficulty: 'Medium', question: 'Los op vir x: 2^(x+1) = 64', answer: 'x=5', checkMode: 'auto', correctAnswer: 'x=5', correctAnswers: ['x=5', 'x = 5', '5'], explanation: 'Skryf 64 as ʼn mag van 2: 64 = 2⁶.\nDus 2^(x+1) = 2⁶, wat beteken x + 1 = 6, dus x = 5 ✓' },
        { difficulty: 'Hard', question: 'Los op vir x: 2^(2x) − 5 · 2^x + 4 = 0', answer: 'x=0 of x=2', checkMode: 'auto', correctAnswers: ['x=0 or x=2', 'x=2 or x=0', 'x=0 of x=2', 'x=2 of x=0'], explanation: 'Laat y = 2^x, dus 2^(2x) = y². Die vergelyking word y² − 5y + 4 = 0.\nFaktoriseer: (y − 1)(y − 4) = 0, dus y = 1 of y = 4.\nVervang terug: 2^x = 1 → x = 0. &nbsp; 2^x = 4 = 2² → x = 2.\nOplossing: x = 0 of x = 2 ✓' },

        // Block E — Quadratic inequalities (positions 11-13)
        { difficulty: 'Easy', question: 'Los op vir x: x² − 25 ≥ 0', answer: 'x≤-5 of x≥5', checkMode: 'auto', correctAnswers: ['x≤-5 or x≥5', 'x<=-5 or x>=5', 'x≥5 or x≤-5', 'x≤-5 of x≥5', 'x≥5 of x≤-5'], explanation: 'Kritieke waardes: x² − 25 = 0 → x = −5 of x = 5.\nAangesien die uitdrukking ʼn opwaartse parabool is, is dit ≥ 0 buite die wortels (eindpunte ingesluit aangesien ≥).\nOplossing: x ≤ −5 of x ≥ 5.' },
        { difficulty: 'Medium', question: 'Los op vir x: x² − x − 12 ≤ 0', answer: '-3≤x≤4', checkMode: 'auto', correctAnswer: '-3≤x≤4', correctAnswers: ['-3≤x≤4', '-3 <= x <= 4', '[-3,4]'], explanation: 'Kritieke waardes: (x − 4)(x + 3) = 0 → x = 4 of x = −3.\nAangesien die parabool opwaarts oopmaak, is dit ≤ 0 tussen die wortels (eindpunte ingesluit aangesien ≤).\nOplossing: −3 ≤ x ≤ 4.' },
        { difficulty: 'Hard', question: 'Los op vir x: 2x² − x − 6 > 0', answer: 'x<-3/2 of x>2', checkMode: 'auto', correctAnswers: ['x<-3/2 or x>2', 'x>2 or x<-3/2', 'x<-1,5 of x>2', 'x<-3/2 of x>2', 'x>2 of x<-3/2'], explanation: 'Faktoriseer: (2x + 3)(x − 2) > 0. Kritieke waardes: x = −3/2 of x = 2.\nAangesien die parabool opwaarts oopmaak, is dit > 0 buite die wortels (eindpunte uitgesluit aangesien streng).\nOplossing: x < −3/2 of x > 2.' },

        // Block F — Simultaneous linear-quadratic systems (positions 14-16)
        { difficulty: 'Medium', question: 'Los gelyktydig op vir x en y: y = 2x − 1 en y = x² − 4', answer: 'x=3,y=5 of x=-1,y=-3', checkMode: 'auto', correctAnswers: ['x=3,y=5 or x=-1,y=-3', 'x=-1,y=-3 or x=3,y=5', 'x=3,y=5 of x=-1,y=-3', 'x=-1,y=-3 of x=3,y=5'], explanation: 'Stel 2x − 1 = x² − 4, dus x² − 2x − 3 = 0.\nFaktoriseer: (x − 3)(x + 1) = 0, dus x = 3 of x = −1.\nWanneer x = 3: y = 2(3) − 1 = 5. Wanneer x = −1: y = 2(−1) − 1 = −3.\nToets: 3² − 4 = 5 ✓ en (−1)² − 4 = −3 ✓' },
        { difficulty: 'Hard', question: 'Los gelyktydig op vir x en y, en laat jou antwoorde in eenvoudigste wortelvorm: y = x + 3 en y = x² − x − 2', answer: 'Vervang die eerste vergelyking in die tweede: x + 3 = x² − x − 2.\nHerrangskik: x² − 2x − 5 = 0.\nDeur die kwadratiese formule te gebruik: x = (2 ± √(4 + 20)) / 2 = (2 ± √24) / 2 = 1 ± √6.\nWanneer x = 1 + √6: y = (1 + √6) + 3 = 4 + √6. Wanneer x = 1 − √6: y = (1 − √6) + 3 = 4 − √6.\nOplossingspunte: (1 + √6 ; 4 + √6) en (1 − √6 ; 4 − √6).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Los gelyktydig op vir x en y: y = x + 6 en y = x² + 2x', answer: 'x=-3,y=3 of x=2,y=8', checkMode: 'auto', correctAnswers: ['x=-3,y=3 or x=2,y=8', 'x=2,y=8 or x=-3,y=3', 'x=-3,y=3 of x=2,y=8', 'x=2,y=8 of x=-3,y=3'], explanation: 'Stel x + 6 = x² + 2x, dus x² + x − 6 = 0.\nFaktoriseer: (x + 3)(x − 2) = 0, dus x = −3 of x = 2.\nWanneer x = −3: y = −3 + 6 = 3. Wanneer x = 2: y = 2 + 6 = 8.\nToets: (−3)² + 2(−3) = 9 − 6 = 3 ✓ en (2)² + 2(2) = 4 + 4 = 8 ✓' },

        // Block G — Conceptual reasoning questions (positions 17-19)
        { difficulty: 'Hard', question: 'Thabo los √(x − 2) = −3 op en sê daar is geen oplossing nie. Is hy korrek? Verduidelik.', answer: 'Ja, Thabo is korrek. Die vierkantswortelsimbool dui altyd die nie-negatiewe vierkantswortel aan, dus kan √(x − 2) nooit gelyk wees aan ʼn negatiewe getal soos −3 nie. Kwadrering van albei kante sou x − 2 = 9 gee, dus x = 11, maar vervanging terug gee √9 = 3, nie −3 nie, wat bevestig dat dit ʼn buitenstaander-oplossing is en die vergelyking werklik geen oplossing het nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle sê die vergelyking 3^(2x) − 4 · 3^x + 3 = 0 kan nie opgelos word nie omdat dit nie ʼn normale kwadratiese vergelyking is nie. Wys haar metode om dit op te los en vind x.', answer: 'Laat y = 3^x, dus 3^(2x) = y². Die vergelyking word y² − 4y + 3 = 0.\nFaktoriseer: (y − 1)(y − 3) = 0, dus y = 1 of y = 3.\nVervang terug: 3^x = 1 → x = 0. &nbsp; 3^x = 3 → x = 1.\nOplossing: x = 0 of x = 1.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho los x² − x − 12 ≤ 0 op en skryf sy finale antwoord as x ≤ 4. Verduidelik wat verkeerd is met sy antwoord en gee die korrekte oplossing.', answer: 'Sipho mis ʼn deel van die oplossing — ʼn kwadratiese ongelykheid van hierdie tipe word tussen die twee kritieke waardes begrens, nie net onder die groter een nie. Die kritieke waardes is x = 4 en x = −3 (uit (x − 4)(x + 3) = 0). Aangesien die parabool opwaarts oopmaak, is die uitdrukking slegs ≤ 0 tussen die wortels. Die korrekte oplossing is −3 ≤ x ≤ 4.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het die kwadratiese formule, wortelvergelykings, eksponensiële vergelykings, kwadratiese ongelykhede, en gelyktydige stelsels bemeester.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae oor wortelvergelykings of kwadratiese ongelykhede en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan deur die uitgewerkte voorbeelde oor die kwadratiese formule en gelyktydige stelsels, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Block A — Quadratic formula (positions 0-2)
        { difficulty: 'Easy', question: 'Los op vir x deur die kwadratiese formule te gebruik: x² + 3x − 10 = 0', answer: 'x=2 of x=-5', checkMode: 'auto', correctAnswers: ['x=2 or x=-5', 'x=-5 or x=2', 'x=2 of x=-5', 'x=-5 of x=2', '2 of -5', '-5 of 2'], explanation: 'a=1, b=3, c=−10. Diskriminant = 9 − 4(1)(−10) = 9 + 40 = 49.\nx = (−3 ± 7) / 2.\nx = 2 of x = −5 ✓' },
        { difficulty: 'Easy-Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik: 3x² + 2x − 8 = 0', answer: 'x=4/3 of x=-2', checkMode: 'auto', correctAnswers: ['x=4/3 or x=-2', 'x=-2 or x=4/3', 'x=4/3 of x=-2', 'x=-2 of x=4/3'], explanation: 'a=3, b=2, c=−8. Diskriminant = 4 − 4(3)(−8) = 4 + 96 = 100.\nx = (−2 ± 10) / 6.\nx = 4/3 of x = −2 ✓' },
        { difficulty: 'Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik: 2x² − x − 6 = 0', answer: 'x=2 of x=-3/2', checkMode: 'auto', correctAnswers: ['x=2 or x=-3/2', 'x=-3/2 or x=2', 'x=2 of x=-3/2', 'x=-3/2 of x=2'], explanation: 'a=2, b=−1, c=−6. Diskriminant = 1 − 4(2)(−6) = 1 + 48 = 49.\nx = (1 ± 7) / 4.\nx = 2 of x = −3/2 ✓' },

        // Block B — Quadratic formula, surd-form answers (positions 3-4)
        { difficulty: 'Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik, en laat jou antwoord in eenvoudigste wortelvorm: x² − 2x − 9 = 0', answer: 'x=1+√10 of x=1-√10', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik, en laat jou antwoord in eenvoudigste wortelvorm: 3x² − 2x − 8 = 0. Gee die diskriminant voordat jy oplos.', answer: 'a=3, b=−2, c=−8. Diskriminant = 4 − 4(3)(−8) = 100, wat ʼn positiewe volkome vierkant is, dus is daar twee verskillende rasionale wortels.\nx = (2 ± 10) / 6.\nx = 2 of x = −4/3.', checkMode: 'self' },

        // Block C — Surd equations with extraneous-root checks (positions 5-7)
        { difficulty: 'Medium', question: 'Los op vir x: √(x + 6) = x', answer: 'x=3', checkMode: 'auto', correctAnswer: 'x=3', correctAnswers: ['x=3', 'x = 3', '3'], explanation: 'Kwadreer albei kante: x + 6 = x².\nHerrangskik: x² − x − 6 = 0 → (x − 3)(x + 2) = 0, dus x = 3 of x = −2.\nToets x = 3: √(3+6) = √9 = 3 = 3 ✓ geldig.\nToets x = −2: √(−2+6) = √4 = 2 ≠ −2, dus is x = −2 buitenstaander (verwerp).\nOplossing: x = 3 alleen.' },
        { difficulty: 'Medium', question: 'Los op vir x: √(4x + 5) = x, en toets vir buitenstaander-wortels.', answer: 'x=5', checkMode: 'auto', correctAnswer: 'x=5', correctAnswers: ['x=5', 'x = 5', '5'], explanation: 'Kwadreer albei kante: 4x + 5 = x².\nHerrangskik: x² − 4x − 5 = 0 → (x − 5)(x + 1) = 0, dus x = 5 of x = −1.\nToets x = 5: √(4(5)+5) = √25 = 5 = 5 ✓ geldig.\nToets x = −1: √(4(−1)+5) = √1 = 1 ≠ −1, dus is x = −1 buitenstaander (verwerp).\nOplossing: x = 5 alleen.' },
        { difficulty: 'Hard', question: 'Los op vir x: √(x + 6) = x − 6, en toets versigtig vir buitenstaander-wortels.', answer: 'Kwadreer albei kante: x + 6 = (x − 6)² = x² − 12x + 36.\nHerrangskik: x² − 13x + 30 = 0 → (x − 10)(x − 3) = 0, dus x = 10 of x = 3.\nToets x = 10: √16 = 4 en 10 − 6 = 4 ✓ geldig.\nToets x = 3: √9 = 3 maar 3 − 6 = −3, en 3 ≠ −3, dus is x = 3 buitenstaander (verwerp — die vierkantswortel kan nooit gelyk wees aan ʼn negatiewe getal nie).\nOplossing: x = 10 alleen.', checkMode: 'self' },

        // Block D — Exponential equations (positions 8-10)
        { difficulty: 'Easy', question: 'Los op vir x: 3^x = 81', answer: 'x=4', checkMode: 'auto', correctAnswer: 'x=4', correctAnswers: ['x=4', 'x = 4', '4'], explanation: 'Skryf 81 as ʼn mag van 3: 81 = 3⁴.\nDus 3^x = 3⁴, wat beteken x = 4 ✓' },
        { difficulty: 'Medium', question: 'Los op vir x: 3^(x-1) = 27', answer: 'x=4', checkMode: 'auto', correctAnswer: 'x=4', correctAnswers: ['x=4', 'x = 4', '4'], explanation: 'Skryf 27 as ʼn mag van 3: 27 = 3³.\nDus 3^(x−1) = 3³, wat beteken x − 1 = 3, dus x = 4 ✓' },
        { difficulty: 'Hard', question: 'Los op vir x: 3^(2x) − 4 · 3^x + 3 = 0', answer: 'x=0 of x=1', checkMode: 'auto', correctAnswers: ['x=0 or x=1', 'x=1 or x=0', 'x=0 of x=1', 'x=1 of x=0'], explanation: 'Laat y = 3^x, dus 3^(2x) = y². Die vergelyking word y² − 4y + 3 = 0.\nFaktoriseer: (y − 1)(y − 3) = 0, dus y = 1 of y = 3.\nVervang terug: 3^x = 1 → x = 0. &nbsp; 3^x = 3 → x = 1.\nOplossing: x = 0 of x = 1 ✓' },

        // Block E — Quadratic inequalities (positions 11-13)
        { difficulty: 'Easy', question: 'Los op vir x: x² − 36 ≥ 0', answer: 'x≤-6 of x≥6', checkMode: 'auto', correctAnswers: ['x≤-6 or x≥6', 'x<=-6 or x>=6', 'x≥6 or x≤-6', 'x≤-6 of x≥6', 'x≥6 of x≤-6'], explanation: 'Kritieke waardes: x² − 36 = 0 → x = −6 of x = 6.\nAangesien die uitdrukking ʼn opwaartse parabool is, is dit ≥ 0 buite die wortels (eindpunte ingesluit aangesien ≥).\nOplossing: x ≤ −6 of x ≥ 6.' },
        { difficulty: 'Medium', question: 'Los op vir x: x² − 2x − 15 ≤ 0', answer: '-3≤x≤5', checkMode: 'auto', correctAnswer: '-3≤x≤5', correctAnswers: ['-3≤x≤5', '-3 <= x <= 5', '[-3,5]'], explanation: 'Kritieke waardes: (x − 5)(x + 3) = 0 → x = 5 of x = −3.\nAangesien die parabool opwaarts oopmaak, is dit ≤ 0 tussen die wortels (eindpunte ingesluit aangesien ≤).\nOplossing: −3 ≤ x ≤ 5.' },
        { difficulty: 'Hard', question: 'Los op vir x: 3x² + x − 4 > 0', answer: 'x<-4/3 of x>1', checkMode: 'auto', correctAnswers: ['x<-4/3 or x>1', 'x>1 or x<-4/3', 'x<-4/3 of x>1', 'x>1 of x<-4/3'], explanation: 'Faktoriseer: (3x + 4)(x − 1) > 0. Kritieke waardes: x = −4/3 of x = 1.\nAangesien die parabool opwaarts oopmaak, is dit > 0 buite die wortels (eindpunte uitgesluit aangesien streng).\nOplossing: x < −4/3 of x > 1.' },

        // Block F — Simultaneous linear-quadratic systems (positions 14-16)
        { difficulty: 'Medium', question: 'Los gelyktydig op vir x en y: y = 3x − 2 en y = x² − 2x − 2', answer: 'x=0,y=-2 of x=5,y=13', checkMode: 'auto', correctAnswers: ['x=0,y=-2 or x=5,y=13', 'x=5,y=13 or x=0,y=-2', 'x=0,y=-2 of x=5,y=13', 'x=5,y=13 of x=0,y=-2'], explanation: 'Stel 3x − 2 = x² − 2x − 2, dus x² − 5x = 0.\nFaktoriseer: x(x − 5) = 0, dus x = 0 of x = 5.\nWanneer x = 0: y = 3(0) − 2 = −2. Wanneer x = 5: y = 3(5) − 2 = 13.\nToets: 0² − 2(0) − 2 = −2 ✓ en 5² − 2(5) − 2 = 13 ✓' },
        { difficulty: 'Hard', question: 'Los gelyktydig op vir x en y, en laat jou antwoorde in eenvoudigste wortelvorm: y = x + 2 en y = x² − 3x − 4', answer: 'Vervang die eerste vergelyking in die tweede: x + 2 = x² − 3x − 4.\nHerrangskik: x² − 4x − 6 = 0.\nDeur die kwadratiese formule te gebruik: x = (4 ± √(16 + 24)) / 2 = (4 ± √40) / 2 = 2 ± √10.\nWanneer x = 2 + √10: y = (2 + √10) + 2 = 4 + √10. Wanneer x = 2 − √10: y = (2 − √10) + 2 = 4 − √10.\nOplossingspunte: (2 + √10 ; 4 + √10) en (2 − √10 ; 4 − √10).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Los gelyktydig op vir x en y: y = 4x − 3 en y = x² − x − 3', answer: 'x=0,y=-3 of x=5,y=17', checkMode: 'auto', correctAnswers: ['x=0,y=-3 or x=5,y=17', 'x=5,y=17 or x=0,y=-3', 'x=0,y=-3 of x=5,y=17', 'x=5,y=17 of x=0,y=-3'], explanation: 'Stel 4x − 3 = x² − x − 3, dus x² − 5x = 0.\nFaktoriseer: x(x − 5) = 0, dus x = 0 of x = 5.\nWanneer x = 0: y = 4(0) − 3 = −3. Wanneer x = 5: y = 4(5) − 3 = 17.\nToets: 0² − 0 − 3 = −3 ✓ en 5² − 5 − 3 = 17 ✓' },

        // Block G — Conceptual reasoning questions (positions 17-19)
        { difficulty: 'Hard', question: 'Lerato los √(x − 3) = −4 op en sê daar is geen oplossing nie. Is sy korrek? Verduidelik.', answer: 'Ja, Lerato is korrek. Die vierkantswortelsimbool dui altyd die nie-negatiewe vierkantswortel aan, dus kan √(x − 3) nooit gelyk wees aan ʼn negatiewe getal soos −4 nie. Kwadrering van albei kante sou x − 3 = 16 gee, dus x = 19, maar vervanging terug gee √16 = 4, nie −4 nie, wat bevestig dat dit ʼn buitenstaander-oplossing is en die vergelyking werklik geen oplossing het nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho sê die vergelyking 2^(2x) − 6 · 2^x + 8 = 0 kan nie opgelos word nie omdat dit nie ʼn normale kwadratiese vergelyking is nie. Wys sy metode om dit op te los en vind x.', answer: 'Laat y = 2^x, dus 2^(2x) = y². Die vergelyking word y² − 6y + 8 = 0.\nFaktoriseer: (y − 2)(y − 4) = 0, dus y = 2 of y = 4.\nVervang terug: 2^x = 2 → x = 1. &nbsp; 2^x = 4 → x = 2.\nOplossing: x = 1 of x = 2.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle los x² − 2x − 15 ≤ 0 op en skryf haar finale antwoord as x ≤ 5. Verduidelik wat verkeerd is met haar antwoord en gee die korrekte oplossing.', answer: 'Amahle mis ʼn deel van die oplossing — ʼn kwadratiese ongelykheid van hierdie tipe word tussen die twee kritieke waardes begrens, nie net onder die groter een nie. Die kritieke waardes is x = 5 en x = −3 (uit (x − 5)(x + 3) = 0). Aangesien die parabool opwaarts oopmaak, is die uitdrukking slegs ≤ 0 tussen die wortels. Die korrekte oplossing is −3 ≤ x ≤ 5.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het die kwadratiese formule, wortelvergelykings, eksponensiële vergelykings, kwadratiese ongelykhede, en gelyktydige stelsels bemeester.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae oor wortelvergelykings of kwadratiese ongelykhede en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan deur die uitgewerkte voorbeelde oor die kwadratiese formule en gelyktydige stelsels, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Block A — Quadratic formula (positions 0-2)
        { difficulty: 'Easy', question: 'Los op vir x deur die kwadratiese formule te gebruik: x² + x − 6 = 0', answer: 'x=2 of x=-3', checkMode: 'auto', correctAnswers: ['x=2 or x=-3', 'x=-3 or x=2', 'x=2 of x=-3', 'x=-3 of x=2', '2 of -3', '-3 of 2'], explanation: 'a=1, b=1, c=−6. Diskriminant = 1 − 4(1)(−6) = 1 + 24 = 25.\nx = (−1 ± 5) / 2.\nx = 2 of x = −3 ✓' },
        { difficulty: 'Easy-Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik: 4x² − 3x − 1 = 0', answer: 'x=1 of x=-1/4', checkMode: 'auto', correctAnswers: ['x=1 or x=-1/4', 'x=-1/4 or x=1', 'x=1 of x=-1/4', 'x=-1/4 of x=1', 'x=1 of x=-0,25', 'x=-0,25 of x=1'], explanation: 'a=4, b=−3, c=−1. Diskriminant = 9 − 4(4)(−1) = 9 + 16 = 25.\nx = (3 ± 5) / 8.\nx = 1 of x = −1/4 ✓' },
        { difficulty: 'Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik: 2x² + 5x − 3 = 0', answer: 'x=1/2 of x=-3', checkMode: 'auto', correctAnswers: ['x=1/2 or x=-3', 'x=-3 or x=1/2', 'x=1/2 of x=-3', 'x=-3 of x=1/2', 'x=0,5 of x=-3', 'x=-3 of x=0,5'], explanation: 'a=2, b=5, c=−3. Diskriminant = 25 − 4(2)(−3) = 25 + 24 = 49.\nx = (−5 ± 7) / 4.\nx = 1/2 of x = −3 ✓' },

        // Block B — Quadratic formula, surd-form answers (positions 3-4)
        { difficulty: 'Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik, en laat jou antwoord in eenvoudigste wortelvorm: x² + 2x − 7 = 0', answer: 'x=-1+2√2 of x=-1-2√2', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik, en laat jou antwoord in eenvoudigste wortelvorm: 2x² − x − 6 = 0. Gee die diskriminant voordat jy oplos.', answer: 'a=2, b=−1, c=−6. Diskriminant = 1 − 4(2)(−6) = 49, wat ʼn positiewe volkome vierkant is, dus is daar twee verskillende rasionale wortels.\nx = (1 ± 7) / 4.\nx = 2 of x = −3/2.', checkMode: 'self' },

        // Block C — Surd equations with extraneous-root checks (positions 5-7)
        { difficulty: 'Medium', question: 'Los op vir x: √(x + 2) = x', answer: 'x=2', checkMode: 'auto', correctAnswer: 'x=2', correctAnswers: ['x=2', 'x = 2', '2'], explanation: 'Kwadreer albei kante: x + 2 = x².\nHerrangskik: x² − x − 2 = 0 → (x − 2)(x + 1) = 0, dus x = 2 of x = −1.\nToets x = 2: √(2+2) = √4 = 2 = 2 ✓ geldig.\nToets x = −1: √(−1+2) = √1 = 1 ≠ −1, dus is x = −1 buitenstaander (verwerp).\nOplossing: x = 2 alleen.' },
        { difficulty: 'Medium', question: 'Los op vir x: √(6x + 7) = x, en toets vir buitenstaander-wortels.', answer: 'x=7', checkMode: 'auto', correctAnswer: 'x=7', correctAnswers: ['x=7', 'x = 7', '7'], explanation: 'Kwadreer albei kante: 6x + 7 = x².\nHerrangskik: x² − 6x − 7 = 0 → (x − 7)(x + 1) = 0, dus x = 7 of x = −1.\nToets x = 7: √(6(7)+7) = √49 = 7 = 7 ✓ geldig.\nToets x = −1: √(6(−1)+7) = √1 = 1 ≠ −1, dus is x = −1 buitenstaander (verwerp).\nOplossing: x = 7 alleen.' },
        { difficulty: 'Hard', question: 'Los op vir x: √(x + 8) = x − 4, en toets versigtig vir buitenstaander-wortels.', answer: 'Kwadreer albei kante: x + 8 = (x − 4)² = x² − 8x + 16.\nHerrangskik: x² − 9x + 8 = 0 → (x − 8)(x − 1) = 0, dus x = 8 of x = 1.\nToets x = 8: √16 = 4 en 8 − 4 = 4 ✓ geldig.\nToets x = 1: √9 = 3 maar 1 − 4 = −3, en 3 ≠ −3, dus is x = 1 buitenstaander (verwerp — die vierkantswortel kan nooit gelyk wees aan ʼn negatiewe getal nie).\nOplossing: x = 8 alleen.', checkMode: 'self' },

        // Block D — Exponential equations (positions 8-10)
        { difficulty: 'Easy', question: 'Los op vir x: 5^x = 125', answer: 'x=3', checkMode: 'auto', correctAnswer: 'x=3', correctAnswers: ['x=3', 'x = 3', '3'], explanation: 'Skryf 125 as ʼn mag van 5: 125 = 5³.\nDus 5^x = 5³, wat beteken x = 3 ✓' },
        { difficulty: 'Medium', question: 'Los op vir x: 5^(x+2) = 625', answer: 'x=2', checkMode: 'auto', correctAnswer: 'x=2', correctAnswers: ['x=2', 'x = 2', '2'], explanation: 'Skryf 625 as ʼn mag van 5: 625 = 5⁴.\nDus 5^(x+2) = 5⁴, wat beteken x + 2 = 4, dus x = 2 ✓' },
        { difficulty: 'Hard', question: 'Los op vir x: 2^(2x) − 6 · 2^x + 8 = 0', answer: 'x=1 of x=2', checkMode: 'auto', correctAnswers: ['x=1 or x=2', 'x=2 or x=1', 'x=1 of x=2', 'x=2 of x=1'], explanation: 'Laat y = 2^x, dus 2^(2x) = y². Die vergelyking word y² − 6y + 8 = 0.\nFaktoriseer: (y − 2)(y − 4) = 0, dus y = 2 of y = 4.\nVervang terug: 2^x = 2 → x = 1. &nbsp; 2^x = 4 → x = 2.\nOplossing: x = 1 of x = 2 ✓' },

        // Block E — Quadratic inequalities (positions 11-13)
        { difficulty: 'Easy', question: 'Los op vir x: x² − 49 ≥ 0', answer: 'x≤-7 of x≥7', checkMode: 'auto', correctAnswers: ['x≤-7 or x≥7', 'x<=-7 or x>=7', 'x≥7 or x≤-7', 'x≤-7 of x≥7', 'x≥7 of x≤-7'], explanation: 'Kritieke waardes: x² − 49 = 0 → x = −7 of x = 7.\nAangesien die uitdrukking ʼn opwaartse parabool is, is dit ≥ 0 buite die wortels (eindpunte ingesluit aangesien ≥).\nOplossing: x ≤ −7 of x ≥ 7.' },
        { difficulty: 'Medium', question: 'Los op vir x: x² − 3x − 10 ≤ 0', answer: '-2≤x≤5', checkMode: 'auto', correctAnswer: '-2≤x≤5', correctAnswers: ['-2≤x≤5', '-2 <= x <= 5', '[-2,5]'], explanation: 'Kritieke waardes: (x − 5)(x + 2) = 0 → x = 5 of x = −2.\nAangesien die parabool opwaarts oopmaak, is dit ≤ 0 tussen die wortels (eindpunte ingesluit aangesien ≤).\nOplossing: −2 ≤ x ≤ 5.' },
        { difficulty: 'Hard', question: 'Los op vir x: 2x² + 3x − 5 > 0', answer: 'x<-5/2 of x>1', checkMode: 'auto', correctAnswers: ['x<-5/2 or x>1', 'x>1 or x<-5/2', 'x<-5/2 of x>1', 'x>1 of x<-5/2'], explanation: 'Faktoriseer: (2x + 5)(x − 1) > 0. Kritieke waardes: x = −5/2 of x = 1.\nAangesien die parabool opwaarts oopmaak, is dit > 0 buite die wortels (eindpunte uitgesluit aangesien streng).\nOplossing: x < −5/2 of x > 1.' },

        // Block F — Simultaneous linear-quadratic systems (positions 14-16)
        { difficulty: 'Medium', question: 'Los gelyktydig op vir x en y: y = 4x − 5 en y = x² − x − 5', answer: 'x=0,y=-5 of x=5,y=15', checkMode: 'auto', correctAnswers: ['x=0,y=-5 or x=5,y=15', 'x=5,y=15 or x=0,y=-5', 'x=0,y=-5 of x=5,y=15', 'x=5,y=15 of x=0,y=-5'], explanation: 'Stel 4x − 5 = x² − x − 5, dus x² − 5x = 0.\nFaktoriseer: x(x − 5) = 0, dus x = 0 of x = 5.\nWanneer x = 0: y = 4(0) − 5 = −5. Wanneer x = 5: y = 4(5) − 5 = 15.\nToets: 0² − 0 − 5 = −5 ✓ en 5² − 5 − 5 = 15 ✓' },
        { difficulty: 'Hard', question: 'Los gelyktydig op vir x en y, en laat jou antwoorde in eenvoudigste wortelvorm: y = x + 4 en y = x² − 2x − 3', answer: 'Vervang die eerste vergelyking in die tweede: x + 4 = x² − 2x − 3.\nHerrangskik: x² − 3x − 7 = 0.\nDeur die kwadratiese formule te gebruik: x = (3 ± √(9 + 28)) / 2 = (3 ± √37) / 2.\nWanneer x = (3 + √37)/2: y = (3 + √37)/2 + 4 = (11 + √37)/2. Wanneer x = (3 − √37)/2: y = (3 − √37)/2 + 4 = (11 − √37)/2.\nOplossingspunte: ((3 + √37)/2 ; (11 + √37)/2) en ((3 − √37)/2 ; (11 − √37)/2).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Los gelyktydig op vir x en y: y = x − 5 en y = x² − 6x + 1', answer: 'x=6,y=1 of x=1,y=-4', checkMode: 'auto', correctAnswers: ['x=6,y=1 or x=1,y=-4', 'x=1,y=-4 or x=6,y=1', 'x=6,y=1 of x=1,y=-4', 'x=1,y=-4 of x=6,y=1'], explanation: 'Stel x − 5 = x² − 6x + 1, dus x² − 7x + 6 = 0.\nFaktoriseer: (x − 6)(x − 1) = 0, dus x = 6 of x = 1.\nWanneer x = 6: y = 6 − 5 = 1. Wanneer x = 1: y = 1 − 5 = −4.\nToets: 6² − 6(6) + 1 = 1 ✓ en 1² − 6(1) + 1 = −4 ✓' },

        // Block G — Conceptual reasoning questions (positions 17-19)
        { difficulty: 'Hard', question: 'Sipho los √(x − 5) = −2 op en sê daar is geen oplossing nie. Is hy korrek? Verduidelik.', answer: 'Ja, Sipho is korrek. Die vierkantswortelsimbool dui altyd die nie-negatiewe vierkantswortel aan, dus kan √(x − 5) nooit gelyk wees aan ʼn negatiewe getal soos −2 nie. Kwadrering van albei kante sou x − 5 = 4 gee, dus x = 9, maar vervanging terug gee √4 = 2, nie −2 nie, wat bevestig dat dit ʼn buitenstaander-oplossing is en die vergelyking werklik geen oplossing het nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato sê die vergelyking 3^(2x) − 4 · 3^x + 3 = 0 kan nie opgelos word nie omdat dit nie ʼn normale kwadratiese vergelyking is nie. Wys haar metode om dit op te los en vind x.', answer: 'Laat y = 3^x, dus 3^(2x) = y². Die vergelyking word y² − 4y + 3 = 0.\nFaktoriseer: (y − 1)(y − 3) = 0, dus y = 1 of y = 3.\nVervang terug: 3^x = 1 → x = 0. &nbsp; 3^x = 3 → x = 1.\nOplossing: x = 0 of x = 1.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle los x² − 3x − 10 ≤ 0 op en skryf haar finale antwoord as x ≤ 5. Verduidelik wat verkeerd is met haar antwoord en gee die korrekte oplossing.', answer: 'Amahle mis ʼn deel van die oplossing — ʼn kwadratiese ongelykheid van hierdie tipe word tussen die twee kritieke waardes begrens, nie net onder die groter een nie. Die kritieke waardes is x = 5 en x = −2 (uit (x − 5)(x + 2) = 0). Aangesien die parabool opwaarts oopmaak, is die uitdrukking slegs ≤ 0 tussen die wortels. Die korrekte oplossing is −2 ≤ x ≤ 5.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het die kwadratiese formule, wortelvergelykings, eksponensiële vergelykings, kwadratiese ongelykhede, en gelyktydige stelsels bemeester.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae oor wortelvergelykings of kwadratiese ongelykhede en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan deur die uitgewerkte voorbeelde oor die kwadratiese formule en gelyktydige stelsels, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },
  ],
}
