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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Langs-mekaar-vergelyking van al drie metodes toegepas op ʼn kwadratiese vergelyking met faktoriseringstappe in blou, volledigmaking van die vierkant in oranje, en die kwadratiese formule in groen" />',
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
            `${or('Toets elke interval:')}<br>• x &lt; 2: toets x = 0 → (0)² − 5(0) + 6 = 6 &gt; 0 &nbsp;${or('positief ✓')}<br>• 2 &lt; x &lt; 3: toets x = 2.5 → (2.5)² − 5(2.5) + 6 = −0.25 &lt; 0 &nbsp;${or('negatief')}<br>• x &gt; 3: toets x = 4 → (4)² − 5(4) + 6 = 2 &gt; 0 &nbsp;${or('positief ✓')}`,
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
        '<DiagramPlaceholder label="Getallelyndiagram wat kritieke waardes in blou toon, die teken van die uitdrukking in elke interval in oranje, en die finale oplossingsintervalle in groen uitgelig" />',
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
        '<DiagramPlaceholder label="Grafiek wat ʼn reguit lyn in blou toon wat ʼn parabool in oranje by twee punte sny, met die snypuntkoördinate in groen uitgelig" />',
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
      answer: 'x = 5, y = 11  of  x = −½, y = −5.5',
      checkMode: 'auto',
      correctAnswers: ['x=5 or x=-1/2', 'x = 5 or x = -1/2', 'x=5 or x=-0.5', '(5,11) and (-0.5,-5.5)', '(5,11) and (-1/2,-5.5)'],
      explanation: 'Vervang y = 3x − 4 in y = 2x² − 6x − 9:\n3x − 4 = 2x² − 6x − 9\n2x² − 9x − 5 = 0 → (2x + 1)(x − 5) = 0\nx = 5 of x = −½\nOoreenstemmende y-waardes: y = 11 of y = −5.5.',
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
      answer: '(x + 4)(x − 2) > 35\nx² + 2x − 8 > 35\nx² + 2x − 43 > 0\nDeur die kwadratiese formule te gebruik: x = (−2 ± √(4 + 172)) / 2 = (−2 ± √176) / 2 = −1 ± √44.\nKritieke waardes: x ≈ −7.63 of x ≈ 5.63.\nAangesien x > 2, is die oplossing x > −1 + √44 (ongeveer x > 5.63).',
      checkMode: 'self',
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
}
