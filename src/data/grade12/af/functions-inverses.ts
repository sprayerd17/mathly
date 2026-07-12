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
        '<VideoPlaceholder label="Kort video wat die vier funksietipes — lineêr, kwadraties, hiperbolies en eksponensieel — hersien, met hul standaardvorme, sleuteleienskappe, en hoe om elkeen te skets" />',
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
        '<VideoPlaceholder label="Kort video wat die formele definisie van ʼn funksie, die vertikale-lyn-toets, die horisontale-lyn-toets, en die verskil tussen een-tot-een en veel-tot-een funksies verduidelik" />',
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
        '<VideoPlaceholder label="Kort video wat die definisie van ʼn inverse funksie verduidelik, hoe om dit te vind deur x en y te verwissel, en waarom die inverse van ʼn veel-tot-een funksie nie self ʼn funksie is nie" />',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om die inverse van lineêre, kwadratiese en eksponensiële funksies te skets deur oor y = x te weerspieël, met uitgewerkte voorbeelde vir elke tipe, insluitend domeinbeperking vir kwadratiese funksies" />',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Inverse van ʼn lineêre funksie (Maklik) | 4-7 Inverse van ʼn eksponensiële
    // funksie as ʼn log (Maklik-Matig) | 8-11 Inverse van ʼn beperkte kwadratiese funksie (Matig) |
    // 12-15 Domeinbeperking-redenering (Matig-Moeilik) | 16-19 Funksie-inverse
    // verwantskap: puntverwisseling, spieëlbeeld, domein/waardeversameling-verwisseling, samestelling (Moeilik)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Vind die inverse van f(x) = 6x + 2.', answer: 'f⁻¹(x) = (x − 2) / 6', checkMode: 'auto', correctAnswer: '(x-2)/6', correctAnswers: ['(x-2)/6', '(x − 2)/6', '(x-2) / 6', 'x/6 - 1/3'], explanation: 'Stap 1: Skryf y = 6x + 2.\nStap 2: Verwissel x en y: x = 6y + 2.\nStap 3: Los vir y op: x − 2 = 6y → y = (x − 2)/6.\nDus f⁻¹(x) = (x − 2)/6 ✓' },
        { difficulty: 'Easy', question: 'Vind die inverse van f(x) = −4x + 8.', answer: 'f⁻¹(x) = (8 − x) / 4', checkMode: 'auto', correctAnswer: '(8-x)/4', correctAnswers: ['(8-x)/4', '(8 − x)/4', '2-x/4', '2 - x/4'], explanation: 'Stap 1: Skryf y = −4x + 8.\nStap 2: Verwissel x en y: x = −4y + 8.\nStap 3: Los vir y op: x − 8 = −4y → y = (8 − x)/4.\nDus f⁻¹(x) = (8 − x)/4 ✓' },
        { difficulty: 'Easy', question: 'Vind die inverse van f(x) = 3x − 9.', answer: 'f⁻¹(x) = (x + 9) / 3', checkMode: 'auto', correctAnswer: '(x+9)/3', correctAnswers: ['(x+9)/3', '(x + 9)/3', 'x/3 + 3'], explanation: 'Stap 1: Skryf y = 3x − 9.\nStap 2: Verwissel x en y: x = 3y − 9.\nStap 3: Los vir y op: x + 9 = 3y → y = (x + 9)/3.\nDus f⁻¹(x) = (x + 9)/3 ✓' },
        { difficulty: 'Easy-Medium', question: 'Vind die inverse van f(x) = ½x + 5.', answer: 'f⁻¹(x) = 2x − 10', checkMode: 'auto', correctAnswer: '2x-10', correctAnswers: ['2x-10', '2x − 10', '2(x-5)', '2(x − 5)'], explanation: 'Stap 1: Skryf y = ½x + 5.\nStap 2: Verwissel x en y: x = ½y + 5.\nStap 3: Los vir y op: x − 5 = ½y → y = 2x − 10.\nDus f⁻¹(x) = 2x − 10 ✓' },

        { difficulty: 'Easy-Medium', question: 'Vind die inverse van f(x) = 5ˣ.', answer: 'f⁻¹(x) = log₅x', checkMode: 'auto', correctAnswer: 'log₅x', correctAnswers: ['log₅x', 'log5(x)', 'log_5(x)', 'log_5 x', 'log₅ x'], explanation: 'Stap 1: Skryf y = 5ˣ.\nStap 2: Verwissel x en y: x = 5ʸ.\nStap 3: Skakel om na logaritmiese vorm: y = log₅x.\nDus f⁻¹(x) = log₅x ✓' },
        { difficulty: 'Medium', question: 'Vind die inverse van f(x) = 10ˣ.', answer: 'f⁻¹(x) = log x', checkMode: 'auto', correctAnswer: 'log x', correctAnswers: ['log x', 'logx', 'log₁₀x', 'log_10(x)', 'log(x)'], explanation: 'Stap 1: Skryf y = 10ˣ.\nStap 2: Verwissel x en y: x = 10ʸ.\nStap 3: Skakel om na logaritmiese vorm: y = log₁₀x, gewoonlik eenvoudig geskryf as log x.\nDus f⁻¹(x) = log x ✓' },
        { difficulty: 'Medium', question: 'Vind die inverse van f(x) = log₃x.', answer: 'f⁻¹(x) = 3ˣ', checkMode: 'auto', correctAnswer: '3ˣ', correctAnswers: ['3ˣ', '3^x'], explanation: 'Stap 1: Skryf y = log₃x.\nStap 2: Verwissel x en y: x = log₃y.\nStap 3: Skakel om na eksponensiële vorm: 3ˣ = y.\nDus f⁻¹(x) = 3ˣ ✓' },
        { difficulty: 'Medium', question: 'As f(x) = log₄x, vind f⁻¹(x) en bereken dan f⁻¹(3).', answer: '', checkMode: 'auto', parts: [
          { label: 'f⁻¹(x) =', correctAnswer: '4ˣ', correctAnswers: ['4ˣ', '4^x'], explanation: 'Verwissel x en y in y = log₄x: x = log₄y. Skakel om na eksponensiële vorm: y = 4ˣ. Dus f⁻¹(x) = 4ˣ.' },
          { label: 'f⁻¹(3) =', correctAnswer: '64', correctAnswers: ['64'], explanation: 'f⁻¹(3) = 4³ = 64. ✓' },
        ]},

        { difficulty: 'Medium', question: 'Vind die inverse van f(x) = x² vir x ≥ 0.', answer: 'f⁻¹(x) = √x', checkMode: 'auto', correctAnswer: '√x', correctAnswers: ['√x', 'sqrt(x)'], explanation: 'Stap 1: Skryf y = x² vir x ≥ 0.\nStap 2: Verwissel x en y: x = y².\nStap 3: Los vir y op: y = ±√x. Aangesien die oorspronklike domein x ≥ 0 was, moet die uitvoere van f⁻¹ aan y ≥ 0 voldoen, dus neem ons die positiewe wortel: f⁻¹(x) = √x ✓' },
        { difficulty: 'Medium', question: 'Vind die inverse van f(x) = x² − 4 vir x ≥ 0.', answer: 'f⁻¹(x) = √(x + 4)', checkMode: 'auto', correctAnswer: '√(x+4)', correctAnswers: ['√(x+4)', 'sqrt(x+4)', '√(x + 4)'], explanation: 'Stap 1: Skryf y = x² − 4 vir x ≥ 0.\nStap 2: Verwissel x en y: x = y² − 4.\nStap 3: Los vir y op: y² = x + 4 → y = ±√(x + 4). Aangesien x ≥ 0 oorspronklik was, neem ons die positiewe wortel: f⁻¹(x) = √(x + 4) ✓' },
        { difficulty: 'Medium-Hard', question: 'Vind die inverse van f(x) = x² + 1 vir x ≤ 0.', answer: 'f⁻¹(x) = −√(x − 1)', checkMode: 'auto', correctAnswer: '-√(x-1)', correctAnswers: ['-√(x-1)', '−√(x − 1)', '-sqrt(x-1)'], explanation: 'Stap 1: Skryf y = x² + 1 vir x ≤ 0.\nStap 2: Verwissel x en y: x = y² + 1.\nStap 3: Los vir y op: y² = x − 1 → y = ±√(x − 1). Aangesien x ≤ 0 oorspronklik was, neem ons die negatiewe wortel: f⁻¹(x) = −√(x − 1) ✓' },
        { difficulty: 'Medium-Hard', question: 'Vind die inverse van f(x) = 2x² vir x ≥ 0.', answer: 'f⁻¹(x) = √(x / 2)', checkMode: 'auto', correctAnswer: '√(x/2)', correctAnswers: ['√(x/2)', 'sqrt(x/2)'], explanation: 'Stap 1: Skryf y = 2x² vir x ≥ 0.\nStap 2: Verwissel x en y: x = 2y².\nStap 3: Los vir y op: y² = x/2 → y = ±√(x/2). Aangesien x ≥ 0 oorspronklik was, neem ons die positiewe wortel: f⁻¹(x) = √(x/2) ✓' },

        { difficulty: 'Hard', question: 'Verduidelik waarom die domein van f(x) = x² beperk moet word voordat dit ʼn inverse funksie kan hê.', answer: 'f(x) = x² is veel-tot-een — byvoorbeeld f(2) = f(−2) = 4 — dus faal dit die horisontale lyntoets. Sy volle inverse-verwantskap y = ±√x faal die vertikale lyntoets, dus is dit nie ʼn funksie nie tensy die domein van f beperk word om f een-tot-een te maak.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bepaal die kleinste domeinbeperking (van die vorm x ≥ 0) wat f(x) = x² − 6 een-tot-een maak, en vind dan f⁻¹(x) vir daardie beperking.', answer: 'Beperk tot x ≥ 0. Dan is f⁻¹(x) = √(x + 6).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Student sê die inverse van f(x) = x² + 2 vir x ≤ 0 is f⁻¹(x) = √(x − 2). Is dit korrek? Verduidelik en gee die korrekte inverse.', answer: 'Nee — aangesien die oorspronklike domein x ≤ 0 was, moet die uitvoere van f⁻¹ ≤ 0 wees, dus moet die negatiewe wortel gebruik word. Die korrekte inverse is f⁻¹(x) = −√(x − 2).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Verduidelik waarom die beperking van f(x) = x² tot x ≥ 0 die inverse y = +√x gee, terwyl die beperking tot x ≤ 0 die inverse y = −√x gee.', answer: 'Die teken van die wortel in die inverse moet ooreenstem met die beperkte domein van die oorspronklike funksie, want die waardeversameling van die inverse is gelyk aan die domein van die oorspronklike funksie. Beperking tot x ≥ 0 beteken f⁻¹ moet waardes ≥ 0 lewer, dus word die positiewe wortel gebruik; beperking tot x ≤ 0 beteken f⁻¹ moet waardes ≤ 0 lewer, dus word die negatiewe wortel gebruik.', checkMode: 'self' },

        { difficulty: 'Hard', question: 'Die punt (3, 11) lê op f(x) = 3x + 2. Gee die ooreenstemmende punt wat op f⁻¹ moet lê.', answer: '(11, 3)', checkMode: 'auto', correctAnswer: '(11,3)', correctAnswers: ['(11,3)', '(11, 3)'], explanation: 'As (a, b) op f lê, dan lê (b, a) op f⁻¹, aangesien die inverse toevoere en uitvoere verwissel. Dus gee (3, 11) op f die punt (11, 3) op f⁻¹. ✓' },
        { difficulty: 'Hard', question: 'f(x) = 3x − 2 word saam met f⁻¹ op dieselfde asse geskets, albei gespieël oor die lyn y = x. Die lyn f gaan deur die punte (0, −2) en (2, 4). Vind die vergelyking van f⁻¹.', answer: 'f⁻¹(x) = (x + 2) / 3', checkMode: 'auto', correctAnswer: '(x+2)/3', correctAnswers: ['(x+2)/3', '(x + 2)/3'], explanation: 'Verwissel x en y in y = 3x − 2: x = 3y − 2. Los vir y op: x + 2 = 3y → y = (x + 2)/3. Kontroleer met die gespieëlde punte: (0, −2) op f verwissel na (−2, 0) op f⁻¹, en (2, 4) op f verwissel na (4, 2) op f⁻¹ — albei voldoen aan y = (x + 2)/3. Dus f⁻¹(x) = (x + 2)/3 ✓' },
        { difficulty: 'Hard', question: 'ʼn Funksie f het domein x ≥ 3 en waardeversameling y ≥ 0. Gee die domein en waardeversameling van f⁻¹.', answer: 'Domein van f⁻¹ is x ≥ 0, en waardeversameling van f⁻¹ is y ≥ 3.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vind die inverse van f(x) = 4x − 1, en verifieer dan jou antwoord deur te wys dat f(f⁻¹(x)) = x.', answer: 'f⁻¹(x) = (x + 1)/4. Kontroleer: f(f⁻¹(x)) = 4·(x + 1)/4 − 1 = (x + 1) − 1 = x ✓.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die vind van en redenering oor inverse funksies bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiuit as Stel 1, vars getalle
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Vind die inverse van f(x) = 7x − 3.', answer: 'f⁻¹(x) = (x + 3) / 7', checkMode: 'auto', correctAnswer: '(x+3)/7', correctAnswers: ['(x+3)/7', '(x + 3)/7'], explanation: 'Stap 1: Skryf y = 7x − 3.\nStap 2: Verwissel x en y: x = 7y − 3.\nStap 3: Los vir y op: x + 3 = 7y → y = (x + 3)/7.\nDus f⁻¹(x) = (x + 3)/7 ✓' },
        { difficulty: 'Easy', question: 'Vind die inverse van f(x) = −2x + 10.', answer: 'f⁻¹(x) = (10 − x) / 2', checkMode: 'auto', correctAnswer: '(10-x)/2', correctAnswers: ['(10-x)/2', '(10 − x)/2', '5-x/2', '5 - x/2'], explanation: 'Stap 1: Skryf y = −2x + 10.\nStap 2: Verwissel x en y: x = −2y + 10.\nStap 3: Los vir y op: x − 10 = −2y → y = (10 − x)/2.\nDus f⁻¹(x) = (10 − x)/2 ✓' },
        { difficulty: 'Easy', question: 'Vind die inverse van f(x) = 4x − 1.', answer: 'f⁻¹(x) = (x + 1) / 4', checkMode: 'auto', correctAnswer: '(x+1)/4', correctAnswers: ['(x+1)/4', '(x + 1)/4'], explanation: 'Stap 1: Skryf y = 4x − 1.\nStap 2: Verwissel x en y: x = 4y − 1.\nStap 3: Los vir y op: x + 1 = 4y → y = (x + 1)/4.\nDus f⁻¹(x) = (x + 1)/4 ✓' },
        { difficulty: 'Easy-Medium', question: 'Vind die inverse van f(x) = ⅓x − 2.', answer: 'f⁻¹(x) = 3x + 6', checkMode: 'auto', correctAnswer: '3x+6', correctAnswers: ['3x+6', '3x + 6', '3(x+2)', '3(x + 2)'], explanation: 'Stap 1: Skryf y = ⅓x − 2.\nStap 2: Verwissel x en y: x = ⅓y − 2.\nStap 3: Los vir y op: x + 2 = ⅓y → y = 3x + 6.\nDus f⁻¹(x) = 3x + 6 ✓' },

        { difficulty: 'Easy-Medium', question: 'Vind die inverse van f(x) = 2ˣ.', answer: 'f⁻¹(x) = log₂x', checkMode: 'auto', correctAnswer: 'log₂x', correctAnswers: ['log₂x', 'log2(x)', 'log_2(x)', 'log_2 x', 'log₂ x'], explanation: 'Stap 1: Skryf y = 2ˣ.\nStap 2: Verwissel x en y: x = 2ʸ.\nStap 3: Skakel om na logaritmiese vorm: y = log₂x.\nDus f⁻¹(x) = log₂x ✓' },
        { difficulty: 'Medium', question: 'Vind die inverse van f(x) = 6ˣ.', answer: 'f⁻¹(x) = log₆x', checkMode: 'auto', correctAnswer: 'log₆x', correctAnswers: ['log₆x', 'log6(x)', 'log_6(x)', 'log_6 x', 'log₆ x'], explanation: 'Stap 1: Skryf y = 6ˣ.\nStap 2: Verwissel x en y: x = 6ʸ.\nStap 3: Skakel om na logaritmiese vorm: y = log₆x.\nDus f⁻¹(x) = log₆x ✓' },
        { difficulty: 'Medium', question: 'Vind die inverse van f(x) = log₅x.', answer: 'f⁻¹(x) = 5ˣ', checkMode: 'auto', correctAnswer: '5ˣ', correctAnswers: ['5ˣ', '5^x'], explanation: 'Stap 1: Skryf y = log₅x.\nStap 2: Verwissel x en y: x = log₅y.\nStap 3: Skakel om na eksponensiële vorm: 5ˣ = y.\nDus f⁻¹(x) = 5ˣ ✓' },
        { difficulty: 'Medium', question: 'As f(x) = log₂x, vind f⁻¹(x) en bereken dan f⁻¹(4).', answer: '', checkMode: 'auto', parts: [
          { label: 'f⁻¹(x) =', correctAnswer: '2ˣ', correctAnswers: ['2ˣ', '2^x'], explanation: 'Verwissel x en y in y = log₂x: x = log₂y. Skakel om na eksponensiële vorm: y = 2ˣ. Dus f⁻¹(x) = 2ˣ.' },
          { label: 'f⁻¹(4) =', correctAnswer: '16', correctAnswers: ['16'], explanation: 'f⁻¹(4) = 2⁴ = 16. ✓' },
        ]},

        { difficulty: 'Medium', question: 'Vind die inverse van f(x) = x² vir x ≤ 0.', answer: 'f⁻¹(x) = −√x', checkMode: 'auto', correctAnswer: '-√x', correctAnswers: ['-√x', '−√x', '-sqrt(x)'], explanation: 'Stap 1: Skryf y = x² vir x ≤ 0.\nStap 2: Verwissel x en y: x = y².\nStap 3: Los vir y op: y = ±√x. Aangesien die oorspronklike domein x ≤ 0 was, moet die uitvoere van f⁻¹ aan y ≤ 0 voldoen, dus neem ons die negatiewe wortel: f⁻¹(x) = −√x ✓' },
        { difficulty: 'Medium', question: 'Vind die inverse van f(x) = x² − 9 vir x ≥ 0.', answer: 'f⁻¹(x) = √(x + 9)', checkMode: 'auto', correctAnswer: '√(x+9)', correctAnswers: ['√(x+9)', 'sqrt(x+9)', '√(x + 9)'], explanation: 'Stap 1: Skryf y = x² − 9 vir x ≥ 0.\nStap 2: Verwissel x en y: x = y² − 9.\nStap 3: Los vir y op: y² = x + 9 → y = ±√(x + 9). Aangesien x ≥ 0 oorspronklik was, neem ons die positiewe wortel: f⁻¹(x) = √(x + 9) ✓' },
        { difficulty: 'Medium-Hard', question: 'Vind die inverse van f(x) = x² + 5 vir x ≤ 0.', answer: 'f⁻¹(x) = −√(x − 5)', checkMode: 'auto', correctAnswer: '-√(x-5)', correctAnswers: ['-√(x-5)', '−√(x − 5)', '-sqrt(x-5)'], explanation: 'Stap 1: Skryf y = x² + 5 vir x ≤ 0.\nStap 2: Verwissel x en y: x = y² + 5.\nStap 3: Los vir y op: y² = x − 5 → y = ±√(x − 5). Aangesien x ≤ 0 oorspronklik was, neem ons die negatiewe wortel: f⁻¹(x) = −√(x − 5) ✓' },
        { difficulty: 'Medium-Hard', question: 'Vind die inverse van f(x) = 3x² vir x ≥ 0.', answer: 'f⁻¹(x) = √(x / 3)', checkMode: 'auto', correctAnswer: '√(x/3)', correctAnswers: ['√(x/3)', 'sqrt(x/3)'], explanation: 'Stap 1: Skryf y = 3x² vir x ≥ 0.\nStap 2: Verwissel x en y: x = 3y².\nStap 3: Los vir y op: y² = x/3 → y = ±√(x/3). Aangesien x ≥ 0 oorspronklik was, neem ons die positiewe wortel: f⁻¹(x) = √(x/3) ✓' },

        { difficulty: 'Hard', question: 'Verduidelik waarom die domein van f(x) = x² + 4 beperk moet word voordat dit ʼn inverse funksie kan hê.', answer: 'f(x) = x² + 4 is veel-tot-een — byvoorbeeld f(1) = f(−1) = 5 — dus faal dit die horisontale lyntoets. Sy volle inverse-verwantskap faal die vertikale lyntoets, dus is dit nie ʼn funksie nie tensy die domein van f beperk word om f een-tot-een te maak.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bepaal die kleinste domeinbeperking (van die vorm x ≥ 0) wat f(x) = x² − 10 een-tot-een maak, en vind dan f⁻¹(x) vir daardie beperking.', answer: 'Beperk tot x ≥ 0. Dan is f⁻¹(x) = √(x + 10).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Student sê die inverse van f(x) = x² + 7 vir x ≤ 0 is f⁻¹(x) = √(x − 7). Is dit korrek? Verduidelik en gee die korrekte inverse.', answer: 'Nee — aangesien die oorspronklike domein x ≤ 0 was, moet die uitvoere van f⁻¹ ≤ 0 wees, dus moet die negatiewe wortel gebruik word. Die korrekte inverse is f⁻¹(x) = −√(x − 7).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Twee studente beperk f(x) = x² verskillend — een tot x ≥ 0 en die ander tot x ≤ 0 — voordat hulle die inverse vind. Verduidelik waarom hulle met verskillende tekens voor die vierkantswortel in f⁻¹ eindig.', answer: 'Die teken van die wortel in die inverse moet ooreenstem met die beperkte domein van die oorspronklike funksie, want die waardeversameling van die inverse is gelyk aan die domein van die oorspronklike funksie. Beperking tot x ≥ 0 dwing f⁻¹ om waardes ≥ 0 te lewer (positiewe wortel); beperking tot x ≤ 0 dwing f⁻¹ om waardes ≤ 0 te lewer (negatiewe wortel).', checkMode: 'self' },

        { difficulty: 'Hard', question: 'Die punt (5, 17) lê op f(x) = 3x + 2. Gee die ooreenstemmende punt wat op f⁻¹ moet lê.', answer: '(17, 5)', checkMode: 'auto', correctAnswer: '(17,5)', correctAnswers: ['(17,5)', '(17, 5)'], explanation: 'As (a, b) op f lê, dan lê (b, a) op f⁻¹, aangesien die inverse toevoere en uitvoere verwissel. Dus gee (5, 17) op f die punt (17, 5) op f⁻¹. ✓' },
        { difficulty: 'Hard', question: 'f(x) = 2x − 6 word saam met f⁻¹ op dieselfde asse geskets, albei gespieël oor die lyn y = x. Die lyn f gaan deur die punte (0, −6) en (3, 0). Vind die vergelyking van f⁻¹.', answer: 'f⁻¹(x) = (x + 6) / 2', checkMode: 'auto', correctAnswer: '(x+6)/2', correctAnswers: ['(x+6)/2', '(x + 6)/2'], explanation: 'Verwissel x en y in y = 2x − 6: x = 2y − 6. Los vir y op: x + 6 = 2y → y = (x + 6)/2. Kontroleer met die gespieëlde punte: (0, −6) op f verwissel na (−6, 0) op f⁻¹, en (3, 0) op f verwissel na (0, 3) op f⁻¹ — albei voldoen aan y = (x + 6)/2. Dus f⁻¹(x) = (x + 6)/2 ✓' },
        { difficulty: 'Hard', question: 'ʼn Funksie f het domein x ≥ −1 en waardeversameling y ≥ 4. Gee die domein en waardeversameling van f⁻¹.', answer: 'Domein van f⁻¹ is x ≥ 4, en waardeversameling van f⁻¹ is y ≥ −1.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vind die inverse van f(x) = 5x + 3, en verifieer dan jou antwoord deur te wys dat f(f⁻¹(x)) = x.', answer: 'f⁻¹(x) = (x − 3)/5. Kontroleer: f(f⁻¹(x)) = 5·(x − 3)/5 + 3 = (x − 3) + 3 = x ✓.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue inverse funksies vind en daaroor redeneer.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiuit, vars getalle
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Vind die inverse van f(x) = 8x + 4.', answer: 'f⁻¹(x) = (x − 4) / 8', checkMode: 'auto', correctAnswer: '(x-4)/8', correctAnswers: ['(x-4)/8', '(x − 4)/8'], explanation: 'Stap 1: Skryf y = 8x + 4.\nStap 2: Verwissel x en y: x = 8y + 4.\nStap 3: Los vir y op: x − 4 = 8y → y = (x − 4)/8.\nDus f⁻¹(x) = (x − 4)/8 ✓' },
        { difficulty: 'Easy', question: 'Vind die inverse van f(x) = −5x + 15.', answer: 'f⁻¹(x) = (15 − x) / 5', checkMode: 'auto', correctAnswer: '(15-x)/5', correctAnswers: ['(15-x)/5', '(15 − x)/5', '3-x/5', '3 - x/5'], explanation: 'Stap 1: Skryf y = −5x + 15.\nStap 2: Verwissel x en y: x = −5y + 15.\nStap 3: Los vir y op: x − 15 = −5y → y = (15 − x)/5.\nDus f⁻¹(x) = (15 − x)/5 ✓' },
        { difficulty: 'Easy', question: 'Vind die inverse van f(x) = 2x − 7.', answer: 'f⁻¹(x) = (x + 7) / 2', checkMode: 'auto', correctAnswer: '(x+7)/2', correctAnswers: ['(x+7)/2', '(x + 7)/2'], explanation: 'Stap 1: Skryf y = 2x − 7.\nStap 2: Verwissel x en y: x = 2y − 7.\nStap 3: Los vir y op: x + 7 = 2y → y = (x + 7)/2.\nDus f⁻¹(x) = (x + 7)/2 ✓' },
        { difficulty: 'Easy-Medium', question: 'Vind die inverse van f(x) = ¼x + 3.', answer: 'f⁻¹(x) = 4x − 12', checkMode: 'auto', correctAnswer: '4x-12', correctAnswers: ['4x-12', '4x − 12', '4(x-3)', '4(x − 3)'], explanation: 'Stap 1: Skryf y = ¼x + 3.\nStap 2: Verwissel x en y: x = ¼y + 3.\nStap 3: Los vir y op: x − 3 = ¼y → y = 4x − 12.\nDus f⁻¹(x) = 4x − 12 ✓' },

        { difficulty: 'Easy-Medium', question: 'Vind die inverse van f(x) = 8ˣ.', answer: 'f⁻¹(x) = log₈x', checkMode: 'auto', correctAnswer: 'log₈x', correctAnswers: ['log₈x', 'log8(x)', 'log_8(x)', 'log_8 x', 'log₈ x'], explanation: 'Stap 1: Skryf y = 8ˣ.\nStap 2: Verwissel x en y: x = 8ʸ.\nStap 3: Skakel om na logaritmiese vorm: y = log₈x.\nDus f⁻¹(x) = log₈x ✓' },
        { difficulty: 'Medium', question: 'Vind die inverse van f(x) = 7ˣ.', answer: 'f⁻¹(x) = log₇x', checkMode: 'auto', correctAnswer: 'log₇x', correctAnswers: ['log₇x', 'log7(x)', 'log_7(x)', 'log_7 x', 'log₇ x'], explanation: 'Stap 1: Skryf y = 7ˣ.\nStap 2: Verwissel x en y: x = 7ʸ.\nStap 3: Skakel om na logaritmiese vorm: y = log₇x.\nDus f⁻¹(x) = log₇x ✓' },
        { difficulty: 'Medium', question: 'Vind die inverse van f(x) = log x (basis 10).', answer: 'f⁻¹(x) = 10ˣ', checkMode: 'auto', correctAnswer: '10ˣ', correctAnswers: ['10ˣ', '10^x'], explanation: 'Stap 1: Skryf y = log₁₀x.\nStap 2: Verwissel x en y: x = log₁₀y.\nStap 3: Skakel om na eksponensiële vorm: 10ˣ = y.\nDus f⁻¹(x) = 10ˣ ✓' },
        { difficulty: 'Medium', question: 'As f(x) = log₃x, vind f⁻¹(x) en bereken dan f⁻¹(2).', answer: '', checkMode: 'auto', parts: [
          { label: 'f⁻¹(x) =', correctAnswer: '3ˣ', correctAnswers: ['3ˣ', '3^x'], explanation: 'Verwissel x en y in y = log₃x: x = log₃y. Skakel om na eksponensiële vorm: y = 3ˣ. Dus f⁻¹(x) = 3ˣ.' },
          { label: 'f⁻¹(2) =', correctAnswer: '9', correctAnswers: ['9'], explanation: 'f⁻¹(2) = 3² = 9. ✓' },
        ]},

        { difficulty: 'Medium', question: 'Vind die inverse van f(x) = x² − 1 vir x ≥ 0.', answer: 'f⁻¹(x) = √(x + 1)', checkMode: 'auto', correctAnswer: '√(x+1)', correctAnswers: ['√(x+1)', 'sqrt(x+1)', '√(x + 1)'], explanation: 'Stap 1: Skryf y = x² − 1 vir x ≥ 0.\nStap 2: Verwissel x en y: x = y² − 1.\nStap 3: Los vir y op: y² = x + 1 → y = ±√(x + 1). Aangesien x ≥ 0 oorspronklik was, neem ons die positiewe wortel: f⁻¹(x) = √(x + 1) ✓' },
        { difficulty: 'Medium', question: 'Vind die inverse van f(x) = x² − 16 vir x ≥ 0.', answer: 'f⁻¹(x) = √(x + 16)', checkMode: 'auto', correctAnswer: '√(x+16)', correctAnswers: ['√(x+16)', 'sqrt(x+16)', '√(x + 16)'], explanation: 'Stap 1: Skryf y = x² − 16 vir x ≥ 0.\nStap 2: Verwissel x en y: x = y² − 16.\nStap 3: Los vir y op: y² = x + 16 → y = ±√(x + 16). Aangesien x ≥ 0 oorspronklik was, neem ons die positiewe wortel: f⁻¹(x) = √(x + 16) ✓' },
        { difficulty: 'Medium-Hard', question: 'Vind die inverse van f(x) = x² + 3 vir x ≤ 0.', answer: 'f⁻¹(x) = −√(x − 3)', checkMode: 'auto', correctAnswer: '-√(x-3)', correctAnswers: ['-√(x-3)', '−√(x − 3)', '-sqrt(x-3)'], explanation: 'Stap 1: Skryf y = x² + 3 vir x ≤ 0.\nStap 2: Verwissel x en y: x = y² + 3.\nStap 3: Los vir y op: y² = x − 3 → y = ±√(x − 3). Aangesien x ≤ 0 oorspronklik was, neem ons die negatiewe wortel: f⁻¹(x) = −√(x − 3) ✓' },
        { difficulty: 'Medium-Hard', question: 'Vind die inverse van f(x) = 5x² vir x ≥ 0.', answer: 'f⁻¹(x) = √(x / 5)', checkMode: 'auto', correctAnswer: '√(x/5)', correctAnswers: ['√(x/5)', 'sqrt(x/5)'], explanation: 'Stap 1: Skryf y = 5x² vir x ≥ 0.\nStap 2: Verwissel x en y: x = 5y².\nStap 3: Los vir y op: y² = x/5 → y = ±√(x/5). Aangesien x ≥ 0 oorspronklik was, neem ons die positiewe wortel: f⁻¹(x) = √(x/5) ✓' },

        { difficulty: 'Hard', question: 'Verduidelik waarom die domein van f(x) = x² − 2 beperk moet word voordat dit ʼn inverse funksie kan hê.', answer: 'f(x) = x² − 2 is veel-tot-een — byvoorbeeld f(1) = f(−1) = −1 — dus faal dit die horisontale lyntoets. Sy volle inverse-verwantskap faal die vertikale lyntoets, dus is dit nie ʼn funksie nie tensy die domein van f beperk word om f een-tot-een te maak.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bepaal die kleinste domeinbeperking (van die vorm x ≥ 0) wat f(x) = x² − 3 een-tot-een maak, en vind dan f⁻¹(x) vir daardie beperking.', answer: 'Beperk tot x ≥ 0. Dan is f⁻¹(x) = √(x + 3).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Student sê die inverse van f(x) = x² + 9 vir x ≤ 0 is f⁻¹(x) = √(x − 9). Is dit korrek? Verduidelik en gee die korrekte inverse.', answer: 'Nee — aangesien die oorspronklike domein x ≤ 0 was, moet die uitvoere van f⁻¹ ≤ 0 wees, dus moet die negatiewe wortel gebruik word. Die korrekte inverse is f⁻¹(x) = −√(x − 9).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Parabool f(x) = x² kan beperk word tot x ≥ 0 of x ≤ 0 om ʼn inverse funksie te skep. Verduidelik hoe die keuse van beperking die teken bepaal wat in f⁻¹ gebruik word.', answer: 'Die teken van die wortel in die inverse moet ooreenstem met die beperkte domein van die oorspronklike funksie, want die waardeversameling van die inverse is gelyk aan die domein van die oorspronklike funksie. Beperking tot x ≥ 0 dwing f⁻¹ om waardes ≥ 0 te lewer (positiewe wortel); beperking tot x ≤ 0 dwing f⁻¹ om waardes ≤ 0 te lewer (negatiewe wortel).', checkMode: 'self' },

        { difficulty: 'Hard', question: 'Die punt (4, 9) lê op f(x) = 2x + 1. Gee die ooreenstemmende punt wat op f⁻¹ moet lê.', answer: '(9, 4)', checkMode: 'auto', correctAnswer: '(9,4)', correctAnswers: ['(9,4)', '(9, 4)'], explanation: 'As (a, b) op f lê, dan lê (b, a) op f⁻¹, aangesien die inverse toevoere en uitvoere verwissel. Dus gee (4, 9) op f die punt (9, 4) op f⁻¹. ✓' },
        { difficulty: 'Hard', question: 'f(x) = 4x − 8 word saam met f⁻¹ op dieselfde asse geskets, albei gespieël oor die lyn y = x. Die lyn f gaan deur die punte (0, −8) en (2, 0). Vind die vergelyking van f⁻¹.', answer: 'f⁻¹(x) = (x + 8) / 4', checkMode: 'auto', correctAnswer: '(x+8)/4', correctAnswers: ['(x+8)/4', '(x + 8)/4'], explanation: 'Verwissel x en y in y = 4x − 8: x = 4y − 8. Los vir y op: x + 8 = 4y → y = (x + 8)/4. Kontroleer met die gespieëlde punte: (0, −8) op f verwissel na (−8, 0) op f⁻¹, en (2, 0) op f verwissel na (0, 2) op f⁻¹ — albei voldoen aan y = (x + 8)/4. Dus f⁻¹(x) = (x + 8)/4 ✓' },
        { difficulty: 'Hard', question: 'ʼn Funksie f het domein x ≥ 2 en waardeversameling y ≥ −5. Gee die domein en waardeversameling van f⁻¹.', answer: 'Domein van f⁻¹ is x ≥ −5, en waardeversameling van f⁻¹ is y ≥ 2.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vind die inverse van f(x) = 6x − 2, en verifieer dan jou antwoord deur te wys dat f(f⁻¹(x)) = x.', answer: 'f⁻¹(x) = (x + 2)/6. Kontroleer: f(f⁻¹(x)) = 6·(x + 2)/6 − 2 = (x + 2) − 2 = x ✓.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan inverse-funksievaardighede — lineêr, eksponensieel en beperkte kwadratiese funksies — op ʼn wye verskeidenheid probleme toepas.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
