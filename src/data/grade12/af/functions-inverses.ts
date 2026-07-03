import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// blue   → linear function / original function / one-to-one
// green  → quadratic function / inverse function / function (passes test)
// orange → hyperbolic function / swapped variables
// red    → exponential function / not a function
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gy = (t: string) => `<span style="color:#6b7280;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Funksies (Insluitend Inverse)',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISION: LINEAR, QUADRATIC, HYPERBOLIC AND EXPONENTIAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'revision-function-types',
      title: 'Hersiening — Lineêre, Kwadratiese, Hiperboliese en Eksponensiële Funksies',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">Voor ons met inverse werk, hersien ons die vier sleutel funksietipes en hul standaardvorme. ${bl('Lineêre funksies')} y = ax + q vorm reguit lyne, met <em>a</em> as die gradiënt en <em>q</em> as die y-afsnit. ${gr('Kwadratiese funksies')} y = ax² + q vorm parabole, met draaipunt by (0, q) wanneer dit nie horisontaal geskuif is nie, wat opwaarts oopmaak as a &gt; 0 en afwaarts as a &lt; 0. ${or('Hiperboliese funksies')} y = a/x + q het ʼn vertikale asimptoot by x = 0 en ʼn horisontale asimptoot by y = q. ${re('Eksponensiële funksies')} y = a·bˣ + q het ʼn horisontale asimptoot by y = q, wat groei as b &gt; 1 en verval as 0 &lt; b &lt; 1.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('lineêr')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kwadraties')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hiperbolies')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('eksponensieel')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die vier standaardvorme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Lineêr &nbsp; y = ax + q</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>a</strong> = gradiënt (helling van die lyn)<br><strong>q</strong> = y-afsnit<br>Grafiek: reguit lyn</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Kwadraties &nbsp; y = ax² + q</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>a &gt; 0</strong>: open opwaarts (glimlag)<br><strong>a &lt; 0</strong>: open afwaarts (frons)<br>Draaipunt by (0, q)</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Hiperbolies &nbsp; y = a/x + q</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vertikale asimptoot: x = 0<br>Horisontale asimptoot: y = q<br>Grafiek: twee takke</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Eksponensieel &nbsp; y = a·bˣ + q</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>b &gt; 1</strong>: groeikurwe<br><strong>0 &lt; b &lt; 1</strong>: verval-kurwe<br>Horisontale asimptoot: y = q</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom hersien ons dit nou?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die inverse van al vier funksietipes kom in die Graad 12-kurrikulum voor. Dit is noodsaaklik om elke funksie se vorm, asimptote en sleutelpunte te verstaan voordat ons dit omkeer om hul inverse te vind.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Skets ${bl('y = 2x − 3')} deur die gradiënt en y-afsnit te vind.`,
          answer: `${bl('Gradiënt = 2')}, y-afsnit = (0, −3), tweede punt (2, 1)`,
          steps: [
            `Identifiseer die vorm: ${bl('y = ax + q')} waar ${bl('a = 2')} en ${bl('q = −3')}.`,
            `${bl('Gradiënt = 2')} — die lyn styg met 2 eenhede vir elke 1 eenheid oor.`,
            `${bl('y-afsnit:')} stel x = 0 → y = 2(0) − 3 = −3. Teken die punt (0, −3).`,
            `Vind ʼn tweede punt: laat x = 2 → y = 2(2) − 3 = 4 − 3 = 1. Teken die punt (2, 1).`,
            `Trek ʼn reguit lyn deur (0, −3) en (2, 1). ✓`,
          ],
        },
        {
          question: `Skets ${gr('y = x² − 4')} deur die draaipunt en x-afsnitte te vind.`,
          answer: `${gr('Draaipunt (0, −4)')}, x-afsnitte by x = ±2`,
          steps: [
            `Identifiseer die vorm: ${gr('y = ax² + q')} waar ${gr('a = 1')} en ${gr('q = −4')}.`,
            `Aangesien ${gr('a = 1 > 0')}, open die parabool ${gr('opwaarts')}.`,
            `${gr('Draaipunt:')} (0, q) = (0, −4). Dit is die laagste punt op die grafiek.`,
            `${gr('x-afsnitte:')} stel y = 0 → 0 = x² − 4 → x² = 4 → x = ±2. Teken (−2, 0) en (2, 0).`,
            `Skets die parabool wat opwaarts oopmaak deur (−2, 0), (0, −4) en (2, 0). ✓`,
          ],
        },
        {
          question: `Skets ${or('y = 3/x + 1')} deur albei asimptote te vind.`,
          answer: `${or('Vertikale asimptoot: x = 0')}, ${or('horisontale asimptoot: y = 1')}`,
          steps: [
            `Identifiseer die vorm: ${or('y = a/x + q')} waar ${or('a = 3')} en ${or('q = 1')}.`,
            `${or('Vertikale asimptoot:')} die noemer is nul wanneer x = 0, dus is die vertikale asimptoot x = 0.`,
            `${or('Horisontale asimptoot:')} soos x → ±∞, streef die term 3/x → 0, dus streef y → q = 1. Die horisontale asimptoot is y = 1.`,
            `Vind ʼn punt: laat x = 1 → y = 3/1 + 1 = 4. Teken (1, 4). Laat x = −1 → y = 3/(−1) + 1 = −2. Teken (−1, −2).`,
            `Skets twee takke wat na albei asimptote streef, deur (1, 4) en (−1, −2). ✓`,
          ],
        },
        {
          question: `Skets ${re('y = 2ˣ − 2')} deur die horisontale asimptoot en y-afsnit te vind.`,
          answer: `${re('Horisontale asimptoot: y = −2')}, y-afsnit (0, −1)`,
          steps: [
            `Identifiseer die vorm: ${re('y = a·bˣ + q')} waar ${re('a = 1')}, ${re('b = 2')}, ${re('q = −2')}.`,
            `Aangesien ${re('b = 2 > 1')}, is dit ʼn ${re('eksponensiële groei')}-kurwe.`,
            `${re('Horisontale asimptoot:')} soos x → −∞, streef 2ˣ → 0, dus streef y → q = −2. Die asimptoot is y = −2.`,
            `${re('y-afsnit:')} stel x = 0 → y = 2⁰ − 2 = 1 − 2 = −1. Teken (0, −1).`,
            `Vind ʼn tweede punt: laat x = 1 → y = 2¹ − 2 = 0. Teken (1, 0).`,
            `Skets die kurwe wat van bo af na y = −2 streef aan die linkerkant, en steil na regs styg. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video revising the four function types — linear, quadratic, hyperbolic, and exponential — with their standard forms, key features, and how to sketch each one" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THE FORMAL DEFINITION OF A FUNCTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'definition-of-a-function',
      title: 'Die Formele Definisie van ʼn Funksie',
      icon: '✓',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Funksie is ʼn verwantskap waar elke toevoer (x-waarde) na presies een uitvoer (y-waarde) omskakel. Ons toets dit formeel met die <strong>vertikale lyntoets</strong> — as enige vertikale lyn wat op ʼn grafiek getrek word die kurwe meer as een keer sny, is die verwantskap ${re('nie ʼn funksie nie')}. Ons onderskei ook ${bl('een-tot-een funksies')} (waar elke uitvoer ook aan presies een toevoer voldoen, en wat ook ʼn horisontale lyntoets slaag) van ${gr('veel-tot-een funksies')} (waar verskeie toevoere dieselfde uitvoer kan deel).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('funksie (slaag toets)')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('nie ʼn funksie nie')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('een-tot-een')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Twee belangrike toetse</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vertikale Lyntoets</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Trek vertikale lyne oor die grafiek. As <strong>elke</strong> vertikale lyn die grafiek hoogstens een keer sny, is dit ʼn ${gr('funksie')}. As enige vertikale lyn dit <strong>meer as een keer</strong> sny, is dit ${re('nie ʼn funksie nie')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Horisontale Lyntoets</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Trek horisontale lyne oor die grafiek. As <strong>elke</strong> horisontale lyn die grafiek hoogstens een keer sny, is die funksie ${bl('een-tot-een')}. As enige lyn dit meer as een keer sny, is dit veel-tot-een.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Waarom is dit belangrik vir inverse?</p>` +
        `<p style="margin:0;color:#92400e;">Slegs ${bl('een-tot-een funksies')} het inverse wat ook funksies is. As ʼn funksie veel-tot-een is, faal sy inverse die vertikale lyntoets en is dus ʼn verwantskap, nie ʼn funksie nie — tensy ons die domein beperk.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Is y = x² + 1 ʼn funksie? Is dit een-tot-een?',
          answer: `${gr('Ja, dit is ʼn funksie')} (slaag die vertikale lyntoets). ${re('Nie een-tot-een nie')} — dit is veel-tot-een.`,
          steps: [
            `${gr('Vertikale lyntoets:')} Vir elke x-waarde gee y = x² + 1 presies een y-waarde (kwadrering is goed gedefinieer). Geen vertikale lyn sny die parabool meer as een keer nie. ${gr('Dit is ʼn funksie.')}`,
            `${bl('Horisontale lyntoets:')} Probeer die horisontale lyn y = 5. Dit sny die parabool by x = 2 (wat y = 4 + 1 = 5 gee) en by x = −2 (wat y = 4 + 1 = 5 gee).`,
            `Aangesien twee verskillende x-waardes (x = 2 en x = −2) dieselfde y-waarde (y = 5) gee, faal die horisontale lyntoets. ${re('Dit is NIE een-tot-een nie')} — dit is ʼn veel-tot-een funksie.`,
          ],
        },
        {
          question: 'Sipho gaan na of x = y² ʼn funksie is. Wat vind hy?',
          answer: `${re('x = y² is NIE ʼn funksie nie')} — dit faal die vertikale lyntoets.`,
          steps: [
            `Herrangskik om die verwantskap te verstaan: vir ʼn gegewe x-waarde gee die vergelyking y = ±√x, wat beteken een toevoer kan twee uitvoere lewer.`,
            `Voorbeeld: laat x = 4 → y² = 4 → ${re('y = 2 of y = −2')}. ʼn Enkele x-waarde (x = 4) skakel na twee verskillende y-waardes (2 en −2).`,
            `${re('Vertikale lyntoets:')} Die vertikale lyn x = 4 sny die grafiek by (4, 2) en (4, −2) — twee punte. Die vertikale lyntoets faal.`,
            `${re('Gevolgtrekking:')} x = y² is ʼn verwantskap, nie ʼn funksie nie, want een toevoer gee twee uitvoere. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the formal definition of a function, the vertical line test, the horizontal line test, and the difference between one-to-one and many-to-one functions" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — DEFINITION OF THE INVERSE FUNCTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'definition-of-inverse-function',
      title: 'Definisie van die Inverse Funksie',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;">Die inverse van ʼn funksie f, geskryf as ${gr('f⁻¹')}, keer die toevoer-uitvoer-verwantskap om — as ${bl('f(a) = b')}, dan is ${gr('f⁻¹(b) = a')}. Om ʼn inverse algebraïes te vind, ${or('verwissel ons x en y')} in die vergelyking, en los dan vir y op. Dit is belangrik dat ${gr('f⁻¹(x)')} verskil van 1/f(x) — die inverse-notasie geld slegs vir een-tot-een funksies, aangesien veel-tot-een funksies ʼn inverse sou skep wat die funksietoets self faal.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike funksie')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('verwisselde veranderlikes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('inverse funksie')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ʼn inverse algebraïes te vind</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Skryf die ${bl('oorspronklike funksie')} as ${bl('y = f(x)')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Verwissel x en y')} — vervang elke x met y en elke y met x.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Los vir y op om die ${gr('inverse funksie')} as ${gr('y = f⁻¹(x)')} uit te druk.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Algemene wanopvatting: f⁻¹(x) ≠ 1/f(x)</p>` +
        `<p style="margin:0;color:#991b1b;">Die notasie f⁻¹ beteken die <strong>inverse funksie</strong> (die verwisseling van toevoere en uitvoere), nie die resiprook nie. Byvoorbeeld, as f(x) = 2x, dan is f⁻¹(x) = x/2, nie 1/(2x) nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Vind die inverse van ${bl('f(x) = 3x + 1')}.`,
          answer: `${gr('f⁻¹(x) = (x − 1) / 3')}`,
          steps: [
            `Skryf die ${bl('oorspronklike funksie')} as ${bl('y = 3x + 1')}.`,
            `${or('Verwissel x en y:')} ${or('x = 3y + 1')}.`,
            `Los vir y op: trek 1 van albei kante af → x − 1 = 3y → deel albei kante deur 3 → y = (x − 1)/3.`,
            `Skryf die ${gr('inverse funksie:')} ${gr('f⁻¹(x) = (x − 1) / 3')}. ✓`,
            `<strong>Kontroleer:</strong> Pas f en dan f⁻¹ toe: f(2) = 3(2) + 1 = 7, dan f⁻¹(7) = (7 − 1)/3 = 6/3 = 2. ✓ Die inverse keer f om.`,
          ],
        },
        {
          question: `Lerato sê die inverse van ${bl('f(x) = x²')} is f⁻¹(x) = 1/x². Is sy korrek?`,
          answer: `Nee — Lerato het die inverse met die resiprook verwar. Die werklike inverse is ${gr('y = ±√x')}, wat nie ʼn funksie is nie.`,
          steps: [
            `Lerato het twee verskillende dinge verwar: die ${gr('inverse funksie')} f⁻¹ (die verwisseling van toevoere en uitvoere) en die <strong>resiprook</strong> 1/f(x) = 1/x².`,
            `Om die korrekte inverse te vind, skryf die ${bl('oorspronklike funksie:')} ${bl('y = x²')}.`,
            `${or('Verwissel x en y:')} ${or('x = y²')}.`,
            `Los vir y op: y = ±√x.`,
            `Dit gee ${re('y = ±√x')}, wat die ${re('vertikale lyntoets faal')} — vir enige x &gt; 0 is daar twee uitvoere (+√x en −√x). Die inverse is dus ʼn verwantskap, nie ʼn funksie nie (tensy ons die domein van f beperk).`,
            `<strong>Gevolgtrekking:</strong> Lerato is verkeerd. f⁻¹(x) ≠ 1/x². Die werklike inverse is y = ±√x, en omdat f(x) = x² veel-tot-een is, is sy inverse nie ʼn funksie sonder ʼn domeinbeperking nie. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the definition of an inverse function, how to find it by swapping x and y, and why the inverse of a many-to-one function is not itself a function" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SKETCHING INVERSES OF LINEAR, QUADRATIC AND EXPONENTIAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sketching-inverses',
      title: 'Die Skets van Inverse van Lineêre, Kwadratiese en Eksponensiële Funksies',
      icon: '🔄',
      explanation:
        `<p style="margin-bottom:16px;">Die grafiek van ${or('f⁻¹')} is altyd die ${gy('spieëlbeeld van f in die lyn y = x')}. Dit beteken elke punt (a, b) op f stem ooreen met die punt (b, a) op f⁻¹. Die gedrag van die inverse hang af van die tipe oorspronklike funksie:</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike funksie')}</span>` +
        `<span style="background:#f9fafb;border:1px solid #d1d5db;border-radius:6px;padding:3px 10px;font-size:13px;">${gy('y = x  (spieëllyn)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('inverse funksie')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die drie funksietipes en hul inverse</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Lineêr &nbsp; y = ax + q</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die inverse is ook ʼn ${bl('lineêre funksie')}. Verwissel x en y en los op: die inverse is ${or('y = (x − q) / a')}. Albei lyne is spieëlbeelde van mekaar oor ${gy('y = x')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Kwadraties &nbsp; y = ax²</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Parabool is veel-tot-een, dus is sy inverse ${re('y = ±√(x/a)')} NIE ʼn funksie nie. Ons moet die ${bl('domein beperk')} (bv. x ≥ 0) sodat slegs ${or('y = +√(x/a)')} gebruik word.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Eksponensieel &nbsp; y = bˣ</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die eksponensiële funksie is een-tot-een, dus is sy inverse die ${or('logaritmiese funksie')} ${or('y = log_b(x)')}. Die asimptoot en domein/waardeversameling verwissel: die vertikale asimptoot van log is x = 0.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Sleutelinsig — punte verwissel oor y = x</p>` +
        `<p style="margin:0;color:#14532d;">As die punt (a, b) op f lê, dan lê die punt (b, a) op f⁻¹. Die ${gy('lyn y = x')} is altyd die spieëllyn tussen ʼn funksie en sy inverse wanneer albei op dieselfde stel asse geteken word.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Skets ${bl('f(x) = 2x − 4')} en sy inverse op dieselfde asse.`,
          answer: `${or('f⁻¹(x) = (x + 4) / 2')}`,
          steps: [
            `Skryf die ${bl('oorspronklike funksie:')} ${bl('y = 2x − 4')}. Sleutelpunte: stel x = 0 → y = −4 wat (0, −4) gee; stel y = 0 → 0 = 2x − 4 → x = 2 wat (2, 0) gee.`,
            `${gy('Trek die spieëllyn y = x')} as ʼn kort-kort grys lyn. Dit is die spieëllyn.`,
            `Vind f⁻¹ deur x en y te verwissel: x = 2y − 4. Los vir y op: x + 4 = 2y → ${or('y = (x + 4) / 2')}.`,
            `Sleutelpunte op f⁻¹: die punt (0, −4) op f verwissel na (−4, 0) op f⁻¹; die punt (2, 0) op f verwissel na (0, 2) op f⁻¹.`,
            `${bl('f')} gaan deur (0, −4) en (2, 0). ${or('f⁻¹')} gaan deur (−4, 0) en (0, 2). Albei lyne is spieëlbeelde van mekaar oor ${gy('y = x')}. ✓`,
          ],
        },
        {
          question: `Vind die inverse van ${bl('f(x) = x²')} vir ${bl('x ≥ 0')} (beperkte domein).`,
          answer: `${or('f⁻¹(x) = √x')} (slegs positiewe wortel)`,
          steps: [
            `Sonder beperking is f(x) = x² veel-tot-een (bv. f(2) = f(−2) = 4), dus sou sy volle inverse y = ±√x wees, wat die vertikale lyntoets faal.`,
            `Ons beperk die domein tot ${bl('x ≥ 0')}, en behou slegs die regterkant-tak van die parabool waar f een-tot-een is.`,
            `Skryf die beperkte funksie as ${bl('y = x²')} vir x ≥ 0. Verwissel x en y: ${or('x = y²')}.`,
            `Los vir y op: y = ±√x. Omdat ons die oorspronklike domein tot x ≥ 0 beperk het, moet die uitvoer van die inverse aan y ≥ 0 voldoen, dus neem ons slegs die ${or('positiewe wortel: y = √x')}.`,
            `${or('f⁻¹(x) = √x')} is ʼn geldige funksie met domein x ≥ 0 en waardeversameling y ≥ 0. Sy grafiek is die spieëlbeeld van die regterkant-tak van die parabool oor ${gy('y = x')}. ✓`,
          ],
        },
        {
          question: `Vind die inverse van ${bl('f(x) = 2ˣ')}.`,
          answer: `${or('f⁻¹(x) = log₂x')}`,
          steps: [
            `Skryf die ${bl('oorspronklike funksie:')} ${bl('y = 2ˣ')}. Hierdie eksponensiële funksie is een-tot-een (dit slaag die horisontale lyntoets), dus is sy inverse ʼn funksie.`,
            `Verwissel x en y: ${or('x = 2ʸ')}.`,
            `Skakel om van eksponensiële vorm na logaritmiese vorm: as x = 2ʸ dan ${or('y = log₂x')}.`,
            `Dus ${or('f⁻¹(x) = log₂x')}. Die domein van f⁻¹ is x > 0 (wat ooreenstem met die waardeversameling van f), en dit het ʼn vertikale asimptoot by x = 0 (wat ooreenstem met die horisontale asimptoot y = 0 van f).`,
            `Die grafiek van ${or('f⁻¹(x) = log₂x')} is die spieëlbeeld van ${bl('f(x) = 2ˣ')} oor ${gy('y = x')}. Sleutelpunt: (0, 1) op f word (1, 0) op f⁻¹. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to sketch inverses of linear, quadratic, and exponential functions by reflecting across y = x, with worked examples for each type including domain restriction for quadratics" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — gradient and y-intercept of a linear function ──────────────
    {
      difficulty: 'Easy',
      question: 'Vind die gradiënt en y-afsnit van y = 5x − 7.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Gradiënt =',
          correctAnswer: '5',
          explanation: 'y = 5x − 7 is in die vorm y = ax + q. Die koëffisiënt van x is a = 5, dus is die gradiënt 5.',
        },
        {
          label: 'b) y-afsnit =',
          correctAnswer: '-7',
          explanation: 'Die konstante term q = −7, dus is die y-afsnit −7 (die grafiek sny die y-as by (0, −7)).',
        },
      ],
    },

    // ── Q2 Easy — turning point of a quadratic ────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die draaipunt van y = x² + 6.',
      answer: '(0, 6)',
      checkMode: 'auto',
      correctAnswer: '(0, 6)',
      correctAnswers: ['(0,6)', '(0, 6)'],
      explanation: 'y = x² + 6 is in die vorm y = ax² + q met q = 6. Die draaipunt is by (0, q) = (0, 6).',
    },

    // ── Q3 Medium — asymptotes of a hyperbolic function ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind albei asimptote van y = 4/x − 2.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Vertikale asimptoot:',
          correctAnswer: 'x=0',
          correctAnswers: ['x=0', 'x = 0'],
          explanation: 'Die noemer is gelyk aan nul wanneer x = 0, dus is die vertikale asimptoot x = 0.',
        },
        {
          label: 'b) Horisontale asimptoot:',
          correctAnswer: 'y=-2',
          correctAnswers: ['y=-2', 'y = -2'],
          explanation: 'y = a/x + q met q = −2. Soos x → ±∞, streef 4/x → 0, dus streef y → −2. Die horisontale asimptoot is y = −2.',
        },
      ],
    },

    // ── Q4 Medium — asymptote and y-intercept of an exponential function ──────
    {
      difficulty: 'Medium',
      question: 'Vind die horisontale asimptoot en y-afsnit van y = 3ˣ + 1.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Horisontale asimptoot:',
          correctAnswer: 'y=1',
          correctAnswers: ['y=1', 'y = 1'],
          explanation: 'y = bˣ + q met q = 1. Soos x → −∞, streef 3ˣ → 0, dus streef y → 1. Die horisontale asimptoot is y = 1.',
        },
        {
          label: 'b) y-afsnit:',
          correctAnswer: '(0, 2)',
          correctAnswers: ['(0,2)', '(0, 2)', '2'],
          explanation: 'Stel x = 0: y = 3⁰ + 1 = 1 + 1 = 2. Die y-afsnit is (0, 2).',
        },
      ],
    },

    // ── Q5 Easy — vertical line test (yes/no) ────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Is y = 2x + 5 ʼn funksie? Antwoord ja of nee.',
      answer: 'Ja',
      checkMode: 'auto',
      correctAnswer: 'ja',
      correctAnswers: ['ja', 'Ja', 'JA'],
      explanation: 'y = 2x + 5 is ʼn lineêre funksie. Elke x-waarde gee presies een y-waarde, dus slaag dit die vertikale lyntoets. Dit is ʼn funksie.',
    },

    // ── Q6 Medium — vertical line test with explanation ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Is y² = x ʼn funksie? Verduidelik jou antwoord.',
      answer: 'Nee — y² = x is nie ʼn funksie nie. Vir enige positiewe x-waarde is daar twee y-waardes (y = √x en y = −√x). Byvoorbeeld, x = 4 gee y = 2 of y = −2. Dit faal die vertikale lyntoets, dus is dit nie ʼn funksie nie.',
      checkMode: 'self',
    },

    // ── Q7 Hard — one-to-one vs vertical lines (Sipho) ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê alle reguit lyne is een-tot-een funksies, behalwe vertikale lyne. Is hy korrek? Verduidelik.',
      answer: 'Ja — nie-vertikale reguit lyne slaag beide die vertikale en horisontale lyntoetse (elke x gee een y, en elke y kom van slegs een x), wat hulle een-tot-een maak; vertikale lyne faal die vertikale lyntoets heeltemal.',
      checkMode: 'self',
    },

    // ── Q8 Easy — inverse of a linear function ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die inverse van f(x) = 4x − 3.',
      answer: 'f⁻¹(x) = (x + 3) / 4',
      checkMode: 'auto',
      correctAnswer: '(x+3)/4',
      correctAnswers: ['(x+3)/4', '(x + 3)/4', '(x+3) / 4', 'x/4 + 3/4'],
      explanation: 'Stap 1: Skryf y = 4x − 3.\nStap 2: Verwissel x en y: x = 4y − 3.\nStap 3: Los vir y op: x + 3 = 4y → y = (x + 3)/4.\nDus f⁻¹(x) = (x + 3)/4 ✓',
    },

    // ── Q9 Medium — inverse of a linear function with negative gradient ───────
    {
      difficulty: 'Medium',
      question: 'Vind die inverse van f(x) = −2x + 6.',
      answer: 'f⁻¹(x) = (6 − x) / 2',
      checkMode: 'auto',
      correctAnswer: '(6-x)/2',
      correctAnswers: ['(6-x)/2', '(6 - x)/2', '-(x-6)/2', '-(x - 6)/2', '3 - x/2', '3-x/2'],
      explanation: 'Stap 1: Skryf y = −2x + 6.\nStap 2: Verwissel x en y: x = −2y + 6.\nStap 3: Los vir y op: x − 6 = −2y → y = (6 − x)/2.\nDus f⁻¹(x) = (6 − x)/2 ✓',
    },

    // ── Q10 Hard — check a student's inverse (Lerato) ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato vind die inverse van f(x) = 5x + 10 en kry f⁻¹(x) = x/5 + 2. Gaan haar antwoord na.',
      answer: 'Verwissel: x = 5y + 10. Los op: y = (x − 10)/5 = x/5 − 2. Haar antwoord is verkeerd — dit behoort x/5 − 2 te wees, nie x/5 + 2 nie.',
      checkMode: 'self',
    },

    // ── Q11 Medium — inverse of a quadratic with restricted domain ────────────
    {
      difficulty: 'Medium',
      question: 'Vind die inverse van f(x) = x² vir x ≤ 0 (beperkte domein).',
      answer: 'f⁻¹(x) = −√x',
      checkMode: 'auto',
      correctAnswer: '-√x',
      correctAnswers: ['-√x', '-sqrt(x)', '−√x'],
      explanation: 'Stap 1: Skryf y = x² vir x ≤ 0.\nStap 2: Verwissel x en y: x = y².\nStap 3: Los vir y op: y = ±√x. Aangesien die oorspronklike domein x ≤ 0 was, moet die uitvoere van f⁻¹ aan y ≤ 0 voldoen, dus neem ons die negatiewe wortel: f⁻¹(x) = −√x ✓',
    },

    // ── Q12 Hard — domain restriction for quadratic inverse (Thabo) ───────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê die inverse van f(x) = x² + 3 is f⁻¹(x) = √(x − 3), sonder om enige domeinbeperking te spesifiseer. Is dit volledig korrek? Verduidelik.',
      answer: 'Nee — sonder om die oorspronklike domein van f tot x ≥ 0 of x ≤ 0 te beperk, is die inverse-verwantskap nie eintlik ʼn funksie nie, aangesien dit die vertikale lyntoets faal; die domeinbeperking moet gestel word.',
      checkMode: 'self',
    },

    // ── Q13 Easy — inverse of an exponential function ────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die inverse van f(x) = 3ˣ.',
      answer: 'f⁻¹(x) = log₃x',
      checkMode: 'auto',
      correctAnswer: 'log₃x',
      correctAnswers: ['log₃x', 'log3(x)', 'log_3(x)', 'log_3 x', 'log₃ x'],
      explanation: 'Stap 1: Skryf y = 3ˣ.\nStap 2: Verwissel x en y: x = 3ʸ.\nStap 3: Skakel om na logaritmiese vorm: y = log₃x.\nDus f⁻¹(x) = log₃x ✓',
    },

    // ── Q14 Medium — inverse of a logarithmic function ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die inverse van f(x) = log₂x.',
      answer: 'f⁻¹(x) = 2ˣ',
      checkMode: 'auto',
      correctAnswer: '2ˣ',
      correctAnswers: ['2ˣ', '2^x'],
      explanation: 'Stap 1: Skryf y = log₂x.\nStap 2: Verwissel x en y: x = log₂y.\nStap 3: Skakel om na eksponensiële vorm: 2ˣ = y.\nDus f⁻¹(x) = 2ˣ ✓',
    },

    // ── Q15 Hard — reflection axis for f and f⁻¹ (Amahle) ───────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê f en f⁻¹ is altyd spieëlbeelde van mekaar oor die y-as. Is sy korrek? Verduidelik.',
      answer: 'Nee — f en f⁻¹ is altyd spieëlbeelde van mekaar oor die lyn y = x, nie die y-as nie.',
      checkMode: 'self',
    },

    // ── Q16 Hard — find inverse and verify with composition ──────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die inverse van f(x) = ½x − 4, en verifieer dan jou antwoord deur te kontroleer dat f(f⁻¹(x)) = x.',
      answer: 'f⁻¹(x) = 2x + 8. Kontroleer: f(f⁻¹(x)) = ½(2x + 8) − 4 = x + 4 − 4 = x ✓.',
      checkMode: 'self',
    },

    // ── Q17 Hard — not every function has an inverse function (Thabo) ─────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê elke funksie het ʼn inverse wat ook ʼn funksie is. Is hy korrek? Verduidelik met ʼn teenvoorbeeld.',
      answer: 'Nee — byvoorbeeld f(x) = x² het ʼn inverse-verwantskap wat nie ʼn funksie is nie (dit faal die vertikale lyntoets) tensy die domein beperk word; nie alle funksies het ʼn ware inverse funksie sonder beperking nie.',
      checkMode: 'self',
    },

    // ── Q18 Hard — inverse and y-intercepts of both f and f⁻¹ ───────────────
    {
      difficulty: 'Hard',
      question: 'Vind die inverse van f(x) = −3x + 9, en gee die y-afsnit van beide f en f⁻¹.',
      answer: 'f⁻¹(x) = (9 − x)/3 = 3 − x/3. f se y-afsnit: (0, 9). f⁻¹ se y-afsnit: (0, 3).',
      checkMode: 'self',
    },

    // ── Q19 Hard — domain and range swap under inversion (Lerato) ─────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê die domein van f word die waardeversameling van f⁻¹, en omgekeerd. Is sy korrek? Verduidelik waarom dit sin maak.',
      answer: 'Ja — aangesien die inverse toevoere en uitvoere verwissel, word watter waardes ook al geldige toevoere (domein) vir f was, geldige uitvoere (waardeversameling) vir f⁻¹, en omgekeerd.',
      checkMode: 'self',
    },

    // ── Q20 Hard — defining property of an inverse (Sipho) ───────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê as f(2) = 7, vertel dit ons direk dat f⁻¹(7) = 2, sonder enige verdere berekening nodig. Is hy korrek? Verduidelik.',
      answer: 'Ja — dit is die definiërende eienskap van ʼn inverse funksie: as f 2 na 7 omskakel, moet f⁻¹ per definisie 7 terug na 2 omskakel, sonder enige verdere berekening.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het funksies en inverse bemeester.' },
      { minScore: 15, message: 'Goeie werk!' },
      { minScore: 10, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },

  scoreMessages: [
    { minScore: 90, message: 'Uitstekend! ʼn Volmaakte telling — jy het hierdie afdeling oor funksies en inverse heeltemal bemeester.' },
    { minScore: 70, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van funksies en inverse. Gaan enige gemiste dele weer deur en jy sal dit perfek hê.' },
    { minScore: 50, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 30, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: "Moenie tou opgooi nie — elke kenner was eers ʼn beginner! Gaan die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling weer deur, en probeer dan weer." },
  ],
}
