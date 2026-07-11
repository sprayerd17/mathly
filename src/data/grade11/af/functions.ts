import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (function transformation roles) ─────────────────────────
// original graph        → blue   (#1e40af)
// shifted / transformed → orange (#f59e0b)
// solved parameter      → green  (#16a34a)
const bl = (t: string) => `<span style="color:#1e40af;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#f59e0b;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Funksies',
  grade: 11,
  sections: [

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — THE EFFECT OF k AND p ON LINEAR AND QUADRATIC FUNCTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'linear-quadratic-k-p',
      title: 'Die Effek van k en p op Lineêre en Kwadratiese Funksies',
      icon: 'f',
      explanation:
        `<p style="margin-bottom:16px;">Ons brei Graad 10 se werk oor die parameters <em>a</em> en <em>q</em> uit om nou <strong>k</strong> en <strong>p</strong> in te sluit, wat funksies <em>horisontaal</em> beïnvloed. Vir y=f(x+p) skuif die parameter <strong>p</strong> die grafiek horisontaal — links as p positief is, regs as p negatief is. Verwys na die diagram hieronder wat ${bl('y=x²')} vergelyk met ${or('y=(x+3)²')}, waar die hele parabool 3 eenhede na links skuif, en die draaipunt van ${bl('(0,0)')} na ${or('(−3,0)')} beweeg.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike grafiek')}</span>` +
        `<span style="background:#fffbeb;border:1px solid #fde68a;border-radius:6px;padding:3px 10px;font-size:13px;">${or('geskuifde grafiek')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die effek van p op y=f(x+p)</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:4px;">p &gt; 0 (positief)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Grafiek skuif <strong>links</strong> met p eenhede. Die draaipunt van ${bl('y=x²')} beweeg na ${or('(−p, 0)')}.</p>` +
        `</div>` +
        `<div style="background:#fffbeb;border:1.5px solid #fde68a;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#d97706;margin-bottom:4px;">p &lt; 0 (negatief)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Grafiek skuif <strong>regs</strong> met |p| eenhede. Die draaipunt van ${bl('y=x²')} beweeg na ${or('(|p|, 0)')}.</p>` +
        `</div>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die rigting is teenoorgesteld aan die teken</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn <strong>+3</strong> binne die hakie skuif die grafiek <strong>links</strong>; ʼn <strong>−2</strong> binne skuif dit <strong>regs</strong>. Dit is omdat die funksie by x+p in plaas van x geëvalueer word — die grafiek bereik elke y-waarde p eenhede vroeër op die x-as.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gebruik die diagram en beskryf hoe die draaipunt van y=(x+3)² met y=x² vergelyk.',
          answer: `Die draaipunt skuif van ${bl('(0,0)')} na ${or('(−3,0)')} — ʼn horisontale skuif van 3 eenhede na links`,
          steps: [
            `Soos in die diagram gewys, skuif die draaipunt van ${bl('(0,0)')} na ${or('(−3,0)')} — ʼn horisontale skuif van 3 eenhede na links, wat ooreenstem met die ${or('+3')} binne die hakie.`,
          ],
        },
        {
          question: 'Sipho vergelyk y=x² met y=(x−2)². Gebruik dieselfde skuiflogika soos in die diagram gewys en beskryf die transformasie.',
          answer: `Die grafiek skuif ${or('2 eenhede na regs')}, met die draaipunt wat van ${bl('(0,0)')} na ${or('(2,0)')} beweeg`,
          steps: [
            `Aangesien p=−2 binne die hakie is (geskryf as x−2), skuif die grafiek ${or('2 eenhede na regs')}, met die draaipunt wat van ${bl('(0,0)')} na ${or('(2,0)')} beweeg.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining how the parameter p shifts quadratic graphs horizontally, using y=x² and y=(x+3)² as shown in the diagram" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THE EFFECT OF k AND p ON THE HYPERBOLIC FUNCTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'hyperbolic-k-p',
      title: 'Die Effek van k en p op die Hiperboliese Funksie',
      icon: 'f',
      explanation:
        `<p style="margin-bottom:16px;">Vir die hiperboliese funksie y=a/(x+p)+q skuif die parameter <strong>p</strong> die <strong>vertikale asimptoot</strong> horisontaal. Verwys na die diagram hieronder wat ${bl('y=1/x')} met ${or('y=1/(x−2)')} vergelyk, waar die vertikale asimptoot van ${bl('x=0')} na ${or('x=2')} skuif, terwyl die horisontale asimptoot (y=0) onveranderd bly.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike asimptoot')}</span>` +
        `<span style="background:#fffbeb;border:1px solid #fde68a;border-radius:6px;padding:3px 10px;font-size:13px;">${or('geskuifde asimptoot')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Asimptote van y=a/(x+p)+q</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:4px;">Vertikale asimptoot</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">x = −p (die waarde van x wat die noemer nul maak)</p>` +
        `</div>` +
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Horisontale asimptoot</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">y = q (nie deur p beïnvloed nie — soos in die diagram gewys)</p>` +
        `</div>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">p skuif die vertikale asimptoot, nie die horisontale nie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die vertikale asimptoot beweeg na x = −p, en volg dieselfde links/regs-logika as die kwadratiese funksie: positiewe p skuif die asimptoot links, negatiewe p skuif dit regs. Die horisontale asimptoot y=q word uitsluitlik deur q bepaal en beweeg nooit wanneer p verander nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gebruik die diagram en gee die vertikale asimptoot van y=1/(x−2).',
          answer: `Vertikale asimptoot: ${or('x=2')}`,
          steps: [
            `Soos in die diagram gewys, skuif die vertikale asimptoot van ${bl('x=0')} (vir y=1/x) na ${or('x=2')}, aangesien p=−2 binne die hakie is.`,
          ],
        },
        {
          question: 'Lerato het y=3/(x+4)+1. Vind albei asimptote.',
          answer: `Vertikale asimptoot: ${or('x=−4')} &nbsp;&nbsp; Horisontale asimptoot: ${gr('y=1')}`,
          steps: [
            `<strong>Vertikale asimptoot:</strong> x=−4 (aangesien p=4, wat ${or('links')} skuif, dieselfde rigting soos in die diagram vir positiewe p gewys).`,
            `<strong>Horisontale asimptoot:</strong> ${gr('y=1')} (die q-waarde, nie deur p beïnvloed nie, net soos die diagram se horisontale asimptoot y=0 nie beweeg het nie).`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how the parameter p shifts the vertical asymptote of a hyperbolic function, comparing y=1/x and y=1/(x-2) using the diagram" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THE EFFECT OF k AND p ON THE EXPONENTIAL FUNCTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'exponential-k-p',
      title: 'Die Effek van k en p op die Eksponensiële Funksie',
      icon: 'f',
      explanation:
        `<p style="margin-bottom:16px;">Vir die eksponensiële funksie y=a·b^(x+p)+q skuif die parameter <strong>p</strong> die grafiek horisontaal, terwyl <strong>k</strong> (in y=a·b^(kx)+q) beïnvloed hoe vinnig die grafiek groei. Verwys na die diagram hieronder wat ${bl('y=2ˣ')} met ${or('y=2^(x+2)')} vergelyk — let op hoe die ${or('oranje kurwe')} enige gegewe hoogte veel verder na links bereik, aangesien dit effektief 2 stappe voor die ${bl('blou kurwe')} is by elke punt.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike grafiek')}</span>` +
        `<span style="background:#fffbeb;border:1px solid #fde68a;border-radius:6px;padding:3px 10px;font-size:13px;">${or('getransformeerde grafiek')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die twee horisontale parameters: p en k</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:4px;">Parameter p — horisontale skuif</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Positiewe p skuif die grafiek <strong>links</strong>; negatiewe p skuif dit <strong>regs</strong>. Die horisontale asimptoot y=q bly onveranderd.</p>` +
        `</div>` +
        `<div style="background:#fffbeb;border:1.5px solid #fde68a;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#d97706;margin-bottom:4px;">Parameter k — groeitempo</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">k &gt; 1 maak die kurwe <strong>steiler</strong> (groei vinniger); 0 &lt; k &lt; 1 maak dit <strong>platter</strong> (groei stadiger).</p>` +
        `</div>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die asimptoot bly onveranderd deur p</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die horisontale asimptoot y=q <strong>beweeg nie</strong> wanneer p verander nie — slegs die horisontale posisie van die kurwe skuif. Die y-afsnit verander wel met p, net soos die diagram se ${or('oranje kurwe')} die y-as op ʼn ander hoogte as die ${bl('blou kurwe')} sny.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gebruik die diagram en verduidelik waarom y=2^(x+2) links van y=2ˣ lê.',
          answer: `Om 2 binne die eksponent by te tel, skuif die hele kurwe ${or('2 eenhede na links')}`,
          steps: [
            `Soos gewys, beteken die byvoeging van 2 binne die eksponent dat elke x-waarde effektief soos ${or('x+2')} op die oorspronklike grafiek optree, wat die hele kurwe ${or('2 eenhede links')} skuif — sigbaar in die diagram waar die ${or('oranje kurwe')} dieselfde hoogtes as die ${bl('blou kurwe')} bereik, maar vroeër (verder links).`,
          ],
        },
        {
          question: 'Thabo het y=3^(2x). Vergelyk sy groeitempo met y=3ˣ, deur dieselfde "steiler/vinniger"-idee te gebruik soos in die diagram gewys.',
          answer: `Met k=2 groei die grafiek ${or('twee keer so vinnig')} as y=3ˣ`,
          steps: [
            `Met k=2 groei die grafiek ${or('twee keer so vinnig')} — soortgelyk aan hoe die diagram se geskuifde kurwe hoogtes vroeër bereik, maak ʼn k-waarde groter as 1 die kurwe selfs steiler styg, en bereik dit groot waardes veel gouer.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video comparing y=2^x and y=2^(x+2) to show how p shifts exponential graphs, and explaining how k affects the growth rate" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — PROBLEM SOLVING AND GRAPH WORK WITH ALL PRESCRIBED FUNCTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'problem-solving-graph-work',
      title: 'Probleemoplossing en Grafiekwerk met Alle Voorgeskrewe Funksies',
      icon: 'f',
      explanation:
        `<p style="margin-bottom:16px;">Ons kombineer ons kennis van al die parameters oor ${bl('lineêre')}, ${bl('kwadratiese')}, ${bl('hiperboliese')} en ${bl('eksponensiële')} funksies om vergelykings uit grafieke te bepaal en werklike-lewe-probleme op te los. Verwys na die diagram hieronder, wat ʼn hiperbool met sy sleutelkenmerke gemerk wys — die vertikale asimptoot, horisontale asimptoot, en ʼn bekende punt op die kurwe — presies die soort inligting wat aan jou gegee sal word om ʼn onbekende vergelyking te vind.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bekende inligting')}</span>` +
        `<span style="background:#fffbeb;border:1px solid #fde68a;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vervanging')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('opgeloste parameter')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategie: ʼn vergelyking uit ʼn grafiek vind</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#1e40af;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Lees die grafiek')} — identifiseer alle ${bl('bekende inligting')}: asimptote, draaipunt, afsnitte, of gemerkte punte.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fffbeb;border:1.5px solid #fde68a;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#d97706;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Vervang')} — gebruik die bekende waardes om in die algemene vorm van die vergelyking te ${or('vervang')} en die onbekende parameter te vind.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Los op')} — bereken die onbekende parameter en skryf die ${gr('volledige vergelyking')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Asimptote gee jou p en q direk</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vir hiperboliese en eksponensiële funksies gee die aflees van die asimptote uit die grafiek jou onmiddellik die waardes van p en q. Gebruik die gemerkte punt slegs om die waarde van <em>a</em> te vind.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Parabool het dieselfde vorm as y=x², maar sy draaipunt is by (2,−5). Skryf sy vergelyking.',
          answer: `y=${gr('(x−2)²−5')}`,
          steps: [
            `Aangesien die vorm (breedte) onveranderd is, is a=1. Die ${bl('draaipunt (2,−5)')} gee p=−2 en q=−5.`,
            `Vergelyking: y=(x−${or('2')})²${gr('−5')} &nbsp;→&nbsp; ${gr('y=(x−2)²−5')}`,
          ],
        },
        {
          question: 'ʼn Eksponensiële grafiek gaan deur (0,4) met horisontale asimptoot y=1, in die vorm y=a·bˣ+1. Vind a.',
          answer: `${gr('a=3')}`,
          steps: [
            `${bl('Vervang')} die bekende punt ${bl('(0,4)')} in die vergelyking: ${or('4=a·b⁰+1=a+1')} (aangesien b⁰=1 ongeag b).`,
            `Los op: ${gr('a=4−1=3')}`,
          ],
        },
        {
          question: 'Gebruik die diagram hieronder en vind die vergelyking van die getoonde hiperbool, in die vorm y=a/(x−3)−1.',
          answer: `${gr('y=2/(x−3)−1')}`,
          steps: [
            `Uit die diagram is die ${bl('vertikale asimptoot x=3')} en die ${bl('horisontale asimptoot y=−1')}, wat die vorm y=a/(x−3)−1 bevestig.`,
            `Die gemerkte punt ${or('(4,1)')} is op die kurwe. ${or('Vervang')} om a te vind: ${or('1=a/(4−3)−1')}.`,
            `Vereenvoudig: ${or('1=a/1−1=a−1')}, dus ${gr('a=2')}.`,
            `<strong>Vergelyking:</strong> ${gr('y=2/(x−3)−1')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the equation of a hyperbola from a graph using asymptotes and a known point, matching the diagram in the study guide" />',
    },
  ],

  topicPractice: [

    // ── Q1 Easy — turning point of a shifted parabola ────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die draaipunt van y=(x+5)².',
      answer: '(−5,0)',
      checkMode: 'auto',
      correctAnswer: '(-5,0)',
      correctAnswers: ['(-5,0)', '(−5,0)', '(-5, 0)', '(−5, 0)'],
      explanation: 'Vir y=(x+p)², is die draaipunt (−p, 0). Hier is p=5, dus is die draaipunt (−5, 0). ✓',
    },

    // ── Q2 Medium — turning point with vertical shift ────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die draaipunt van y=(x−3)²+2.',
      answer: '(3,2)',
      checkMode: 'auto',
      correctAnswer: '(3,2)',
      correctAnswers: ['(3,2)', '(3, 2)'],
      explanation: 'Vir y=(x−p)²+q, is die draaipunt (p, q). Hier is p=3 en q=2, dus is die draaipunt (3, 2). ✓',
    },

    // ── Q3 Hard — horizontal vs vertical shift misconception ─────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê y=(x+1)² en y=x²+1 verteenwoordig dieselfde horisontale skuif. Is hy korrek? Verduidelik.',
      answer: 'Nee — y=(x+1)² skuif die hele grafiek 1 eenheid links, terwyl y=x²+1 dit 1 eenheid op skuif (ʼn vertikale skuif, nie horisontaal nie).',
      checkMode: 'self',
    },

    // ── Q4 Easy — vertical asymptote of a hyperbola ──────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die vertikale asimptoot van y=1/(x−5).',
      answer: 'x=5',
      checkMode: 'auto',
      correctAnswer: 'x=5',
      explanation: 'Die noemer is gelyk aan nul wanneer x−5=0, dus is die vertikale asimptoot x=5. ✓',
    },

    // ── Q5 Medium — both asymptotes of a hyperbola ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind albei asimptote van y=4/(x+2)−3.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'Vertikale asimptoot',
          correctAnswer: 'x=-2',
          correctAnswers: ['x=-2', 'x=−2', 'x = -2', 'x = −2'],
          explanation: 'Die noemer is gelyk aan nul wanneer x+2=0, dus is die vertikale asimptoot x=−2. ✓',
        },
        {
          label: 'Horisontale asimptoot',
          correctAnswer: 'y=-3',
          correctAnswers: ['y=-3', 'y=−3', 'y = -3', 'y = −3'],
          explanation: 'Die horisontale asimptoot is y=q=−3. ✓',
        },
      ],
    },

    // ── Q6 Hard — substituting into a hyperbola ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato het y=2/(x+6)+1, wat deur ʼn punt met x=−5 gaan. Vind die ooreenstemmende y-waarde.',
      answer: 'y=2/(−5+6)+1=2/1+1=3.',
      checkMode: 'self',
    },

    // ── Q7 Medium — exponential horizontal shift direction ───────────────────
    {
      difficulty: 'Medium',
      question: 'Vergelyk y=2ˣ met y=2^(x−3). Beskryf die transformasie.',
      answer: 'skuif 3 eenhede na regs',
      checkMode: 'auto',
      correctAnswer: 'skuif 3 eenhede na regs',
      correctAnswers: ['skuif 3 eenhede na regs', '3 eenhede na regs', 'regs met 3 eenhede', 'regs 3 eenhede'],
      explanation: 'Aangesien p=−3 binne die eksponent is (geskryf as x−3), skuif die grafiek 3 eenhede na regs. ✓',
    },

    // ── Q8 Hard — exponential growth rate with k ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo het y=5^(3x). Vergelyk sy groeitempo met y=5ˣ.',
      answer: 'Met k=3 groei die grafiek drie keer so vinnig — die eksponent verdriedubbel vir enige gegewe x-waarde in vergelyking met y=5ˣ.',
      checkMode: 'self',
    },

    // ── Q9 Medium — parabola equation from turning point ─────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Parabool het dieselfde vorm as y=x² met draaipunt (−1,4). Skryf sy vergelyking.',
      answer: 'y=(x+1)²+4',
      checkMode: 'auto',
      correctAnswer: 'y=(x+1)²+4',
      correctAnswers: ['y=(x+1)²+4', 'y=(x+1)^2+4'],
      explanation: 'Draaipunt (−1,4) gee p=1 en q=4. Aangesien a=1 (dieselfde vorm as y=x²): y=(x+1)²+4. ✓',
    },

    // ── Q10 Hard — hyperbola equation from graph features ────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Hiperbool het vertikale asimptoot x=2, horisontale asimptoot y=3, en gaan deur (5,4). Vind sy vergelyking in die vorm y=a/(x−2)+3.',
      answer: 'Vervang (5,4): 4=a/3+3. 1=a/3. a=3. Vergelyking: y=3/(x−2)+3.',
      checkMode: 'self',
    },

    // ── Q11 Medium — finding a in an exponential from a point ────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Eksponensiële grafiek gaan deur (0,6) met horisontale asimptoot y=2, in die vorm y=a·bˣ+2. Vind a.',
      answer: '4',
      checkMode: 'auto',
      correctAnswer: '4',
      explanation: 'Vervang (0,6): 6=a·b⁰+2=a+2 (aangesien b⁰=1). Dus a=6−2=4. ✓',
    },

    // ── Q12 Hard — finding a in a parabola from two pieces of information ─────
    {
      difficulty: 'Hard',
      question: "Amahle se parabool het draaipunt (3,−2) en gaan deur (5,6). Vind a in y=a(x−3)²−2.",
      answer: 'Vervang (5,6): 6=a(2)²−2. 8=4a. a=2.',
      checkMode: 'self',
    },

    // ── Q13 Medium — hyperbola equation with q=0 ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die vergelyking van ʼn hiperbool met asimptote x=−1 en y=0, wat deur (0,4) gaan.',
      answer: 'y=4/(x+1)',
      checkMode: 'auto',
      correctAnswer: 'y=4/(x+1)',
      correctAnswers: ['y=4/(x+1)', 'y = 4/(x+1)'],
      explanation: 'Asimptote gee p=1 en q=0: y=a/(x+1). Vervang (0,4): 4=a/(0+1)=a. Vergelyking: y=4/(x+1). ✓',
    },

    // ── Q14 Hard — y-intercept of exponential always at a+q ─────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê alle eksponensiële grafieke van die vorm y=a·bˣ+q gaan deur die punt (0,a+q). Is hy korrek? Verduidelik.',
      answer: 'Ja — deur x=0 te vervang, kry ons y=a·b⁰+q=a(1)+q=a+q, aangesien enige nie-nul basis tot die mag 0 gelyk is aan 1.',
      checkMode: 'self',
    },

    // ── Q15 Hard — parabola with given width and turning point ───────────────
    {
      difficulty: 'Hard',
      question: 'Vind die vergelyking van ʼn parabool met dieselfde breedte as y=2x² en draaipunt by (1,3).',
      answer: 'y=2(x−1)²+3.',
      checkMode: 'self',
    },

    // ── Q16 Hard — finding a in a hyperbola from a point ─────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato het ʼn hiperbool y=a/(x+3)−2 wat deur (−1,2) gaan. Vind a.',
      answer: '8',
      checkMode: 'auto',
      correctAnswer: '8',
      explanation: 'Vervang (−1,2): 2=a/(−1+3)−2=a/2−2. 4=a/2. a=8. ✓',
    },

    // ── Q17 Hard — exponential with p: shift and y-intercept effect ──────────
    {
      difficulty: 'Hard',
      question: 'Thabo vergelyk y=3^(x+2) met y=3ˣ, en beskryf beide die skuifrigting en die waarde by x=0 vir elk.',
      answer: "y=3^(x+2) skuif 2 eenhede links. By x=0: y=3^(0+2)=9, in vergelyking met y=3⁰=1 vir die oorspronklike — die geskuifde grafiek bereik ʼn veel hoër waarde by x=0 aangesien dit effektief verder langs die kurwe is.",
      checkMode: 'self',
    },

    // ── Q18 Hard — finding both a and b in an exponential ────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Eksponensiële grafiek het horisontale asimptoot y=−3 en gaan deur (0,1) en (1,5), in die vorm y=a·bˣ−3. Vind a en b.',
      answer: 'By x=0: 1=a−3, dus a=4. By x=1: 5=4b−3. 8=4b. b=2.',
      checkMode: 'self',
    },

    // ── Q19 Hard — turning point and min/max from vertex form ────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die draaipunt van y=3(x+4)²−7, en gee aan of dit ʼn minimum of maksimum verteenwoordig.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'Draaipunt',
          correctAnswer: '(-4,-7)',
          correctAnswers: ['(-4,-7)', '(−4,−7)', '(-4, -7)', '(−4, −7)'],
          explanation: 'Vir y=a(x+p)²+q, is die draaipunt (−p, q). Met p=4 en q=−7: draaipunt is (−4, −7). ✓',
        },
        {
          label: 'Minimum of maksimum?',
          correctAnswer: 'minimum',
          correctAnswers: ['minimum', 'min', 'Minimum', 'Min'],
          explanation: 'Aangesien a=3>0, open die parabool opwaarts — die draaipunt is ʼn minimum. ✓',
        },
      ],
    },

    // ── Q20 Hard — full hyperbola equation from asymptotes and a point ────────
    {
      difficulty: 'Hard',
      question: 'ʼn Hiperbool y=a/(x−p)+q het asimptote x=4 en y=−1, en gaan deur (6,1). Vind a, p en q, en skryf dan die volledige vergelyking.',
      answer: 'p=4, q=−1 (vanaf asimptote). Vervang (6,1): 1=a/(6−4)−1. 2=a/2. a=4. Vergelyking: y=4/(x−4)−1.',
      checkMode: 'self',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // Blokke: 0-2 Parabool draaipunt (Maklik) | 3-5 Hiperbool asimptote (Maklik-Medium) |
    // 6-8 Eksponensiële transformasies (Maklik-Medium) | 9-12 Vergelyking uit beskrywing (Medium) |
    // 13-16 Gemiddelde gradiënt (Medium-Moeilik) | 17-19 Gemengde redenering & grafieklees (Moeilik)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Vind die draaipunt van y=(x−4)²+3, en gee aan of dit ʼn minimum of maksimum is.', answer: '', checkMode: 'auto', parts: [
          { label: 'Draaipunt', correctAnswer: '(4,3)', correctAnswers: ['(4,3)', '(4, 3)'], explanation: 'Vir y=a(x−p)²+q, is die draaipunt (p, q). Hier is p=4 en q=3, dus is die draaipunt (4, 3). ✓' },
          { label: 'Minimum of maksimum?', correctAnswer: 'minimum', correctAnswers: ['minimum', 'min', 'Minimum', 'Min'], explanation: 'Aangesien a=1>0, open die parabool opwaarts — die draaipunt is ʼn minimum. ✓' },
        ]},
        { difficulty: 'Easy', question: 'Vind die draaipunt van y=−2(x+1)²−6, en gee aan of dit ʼn minimum of maksimum is.', answer: '', checkMode: 'auto', parts: [
          { label: 'Draaipunt', correctAnswer: '(-1,-6)', correctAnswers: ['(-1,-6)', '(−1,−6)', '(-1, -6)', '(−1, −6)'], explanation: 'Vir y=a(x+p)²+q, is die draaipunt (−p, q). Hier is p=1 en q=−6, dus is die draaipunt (−1, −6). ✓' },
          { label: 'Minimum of maksimum?', correctAnswer: 'maksimum', correctAnswers: ['maksimum', 'max', 'Maksimum', 'Max'], explanation: 'Aangesien a=−2<0, open die parabool afwaarts — die draaipunt is ʼn maksimum. ✓' },
        ]},
        { difficulty: 'Easy', question: 'Vind die draaipunt van y=3(x−2)²+5.', answer: '(2,5)', checkMode: 'auto', correctAnswer: '(2,5)', correctAnswers: ['(2,5)', '(2, 5)'], explanation: 'Vir y=a(x−p)²+q, is die draaipunt (p, q). Hier is p=2 en q=5, dus is die draaipunt (2, 5). ✓' },

        { difficulty: 'Easy', question: 'Vind die vertikale en horisontale asimptote van y=2/(x−3)+1.', answer: '', checkMode: 'auto', parts: [
          { label: 'Vertikale asimptoot', correctAnswer: 'x=3', correctAnswers: ['x=3', 'x = 3'], explanation: 'Die noemer is gelyk aan nul wanneer x−3=0, dus is die vertikale asimptoot x=3. ✓' },
          { label: 'Horisontale asimptoot', correctAnswer: 'y=1', correctAnswers: ['y=1', 'y = 1'], explanation: 'Die horisontale asimptoot is y=q=1. ✓' },
        ]},
        { difficulty: 'Easy-Medium', question: 'ʼn Hiperbool y=6/(x+2)−4 gaan deur ʼn punt met x=1. Vind die ooreenstemmende y-waarde.', answer: '−2', checkMode: 'auto', correctAnswer: '-2', correctAnswers: ['-2', '−2'], explanation: 'Vervang x=1: y=6/(1+2)−4=6/3−4=2−4=−2. ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Hiperbool het vertikale asimptoot x=1 en horisontale asimptoot y=2, en gaan deur (3,5), in die vorm y=a/(x−1)+2. Vind a.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Vervang (3,5): 5=a/(3−1)+2. 3=a/2. a=6. ✓' },

        { difficulty: 'Easy-Medium', question: 'Vergelyk y=2ˣ met y=2^(x−1)+3. Gee die horisontale asimptoot en beskryf die skuif.', answer: '', checkMode: 'auto', parts: [
          { label: 'Horisontale asimptoot', correctAnswer: 'y=3', correctAnswers: ['y=3', 'y = 3'], explanation: 'Die horisontale asimptoot is y=q=3. ✓' },
          { label: 'Skuifrigting', correctAnswer: '1 eenheid regs', correctAnswers: ['1 eenheid regs', 'skuif 1 eenheid na regs', 'regs 1 eenheid', '1 eenheid na regs'], explanation: 'Aangesien p=−1 binne die eksponent is (geskryf as x−1), skuif die grafiek 1 eenheid na regs. ✓' },
        ]},
        { difficulty: 'Easy-Medium', question: 'Vind die y-afsnit van y=3·2ˣ−1.', answer: '2', checkMode: 'auto', correctAnswer: '2', explanation: 'Vervang x=0: y=3·2⁰−1=3(1)−1=3−1=2 (aangesien 2⁰=1). ✓' },
        { difficulty: 'Medium', question: 'ʼn Eksponensiële grafiek gaan deur (0,5) met horisontale asimptoot y=−3, in die vorm y=a·2ˣ−3. Vind a.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Vervang (0,5): 5=a·2⁰−3=a−3 (aangesien 2⁰=1). Dus a=5+3=8. ✓' },

        { difficulty: 'Medium', question: 'ʼn Eksponensiële grafiek in die vorm y=a·bˣ−1 gaan deur (0,2) en (1,8). Vind a en b.', answer: '', checkMode: 'auto', parts: [
          { label: 'Waarde van a', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Vervang (0,2): 2=a·b⁰−1=a−1 (aangesien b⁰=1). Dus a=2+1=3. ✓' },
          { label: 'Waarde van b', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Vervang (1,8) met a=3: 8=3b−1. 9=3b. b=3. ✓' },
        ]},
        { difficulty: 'Medium', question: 'ʼn Parabool het dieselfde vorm as y=x² met draaipunt (3,−2). Skryf sy vergelyking.', answer: 'y=(x−3)²−2', checkMode: 'auto', correctAnswer: 'y=(x-3)²-2', correctAnswers: ['y=(x-3)²-2', 'y=(x−3)²−2', 'y=(x-3)^2-2'], explanation: 'Draaipunt (3,−2) gee p=3 en q=−2. Aangesien a=1 (dieselfde vorm as y=x²): y=(x−3)²−2. ✓' },
        { difficulty: 'Medium', question: 'ʼn Parabool in die vorm y=a(x+2)²+4 het draaipunt (−2,4) en gaan deur (0,0). Vind a.', answer: '−1', checkMode: 'auto', correctAnswer: '-1', correctAnswers: ['-1', '−1'], explanation: 'Vervang (0,0): 0=a(0+2)²+4=4a+4. −4=4a. a=−1. ✓' },
        { difficulty: 'Medium', question: 'ʼn Hiperbool het asimptote x=−3 en y=2, en gaan deur (−1,5), in die vorm y=a/(x+3)+2. Vind a.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Vervang (−1,5): 5=a/(−1+3)+2. 3=a/2. a=6. ✓' },

        { difficulty: 'Medium', question: 'Vir f(x)=x², bereken die gemiddelde gradiënt tussen x=1 en x=4.', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Gemiddelde gradiënt = (f(4)−f(1))/(4−1) = (16−1)/3 = 15/3 = 5. ✓' },
        { difficulty: 'Medium', question: 'Vir f(x)=x²−3, bereken die gemiddelde gradiënt tussen x=−1 en x=2.', answer: '1', checkMode: 'auto', correctAnswer: '1', explanation: 'Gemiddelde gradiënt = (f(2)−f(−1))/(2−(−1)) = ((4−3)−(1−3))/3 = (1−(−2))/3 = 3/3 = 1. ✓' },
        { difficulty: 'Medium-Hard', question: 'Vir f(x)=2x²+1, bereken die gemiddelde gradiënt tussen x=0 en x=3.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Gemiddelde gradiënt = (f(3)−f(0))/(3−0) = (19−1)/3 = 18/3 = 6. ✓' },
        { difficulty: 'Medium-Hard', question: 'Vir f(x)=−x²+4x, bereken die gemiddelde gradiënt tussen x=1 en x=3.', answer: '0', checkMode: 'auto', correctAnswer: '0', explanation: 'Gemiddelde gradiënt = (f(3)−f(1))/(3−1) = (3−3)/2 = 0/2 = 0. ✓' },

        { difficulty: 'Hard', question: 'ʼn Hiperbool word op ʼn stel asse getoon met vertikale asimptoot x=2, horisontale asimptoot y=−1, en gaan deur die punt (4,1), in die vorm y=a/(x−2)−1. Gebruik die diagram om a te vind en skryf die volledige vergelyking.', answer: 'Vervang (4,1): 1=a/(4−2)−1. 2=a/2. a=4. Vergelyking: y=4/(x−2)−1.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="194" x2="218" y2="194" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="170" x2="218" y2="170" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="146" x2="218" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="122" x2="218" y2="122" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="98" x2="218" y2="98" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="74" x2="218" y2="74" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="50" x2="218" y2="50" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="26" x2="218" y2="26" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="98" x2="218" y2="98" stroke="#374151" stroke-width="1.5"/><text x="210" y="92" font-size="11" fill="#374151">x</text><line x1="86" y1="2" x2="86" y2="218" stroke="#374151" stroke-width="1.5"/><text x="92" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="110" x2="203.12" y2="110" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="180.08" y="104" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = -1</text><line x1="110" y1="203.12" x2="110" y2="16.88" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="116" y="16" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">x = 2</text><path d="M115.76,10 L117.44,32.58 L119.12,46.84 L120.8,56.67 L122.48,63.85 L124.16,69.32 L125.84,73.64 L127.52,77.12 L129.2,80 L130.88,82.41 L132.56,84.47 L134.24,86.24 L135.92,87.78 L137.6,89.13 L139.28,90.33 L140.96,91.4 L142.64,92.35 L144.32,93.22 L146,94 L147.68,94.71 L149.36,95.37 L151.04,95.96 L152.72,96.52 L154.4,97.03 L156.08,97.5 L157.76,97.94 L159.44,98.35 L161.12,98.73 L162.8,99.09 L164.48,99.43 L166.16,99.74 L167.84,100.04 L169.52,100.32 L171.2,100.59 L172.88,100.84 L174.56,101.08 L176.24,101.3 L177.92,101.52 L179.6,101.72 L181.28,101.92 L182.96,102.11 L184.64,102.28 L186.32,102.45 L188,102.62 L189.68,102.77 L191.36,102.92 L193.04,103.06 L194.72,103.2 L196.4,103.33 L198.08,103.46 L199.76,103.58 L201.44,103.7 L203.12,103.81 L204.8,103.92 L206.48,104.03 L208.16,104.13 L209.84,104.23 L211.52,104.33 L213.2,104.42 L214.88,104.51 L216.56,104.59 L218.24,104.68 L219.92,104.76 L221.6,104.84 L223.28,104.92 L224.96,104.99 L226.64,105.06 L228.32,105.13 L230,105.2" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M104.24,210 L102.56,187.42 L100.88,173.16 L99.2,163.33 L97.52,156.15 L95.84,150.68 L94.16,146.36 L92.48,142.88 L90.8,140 L89.12,137.59 L87.44,135.53 L85.76,133.76 L84.08,132.22 L82.4,130.87 L80.72,129.67 L79.04,128.6 L77.36,127.65 L75.68,126.78 L74,126 L72.32,125.29 L70.64,124.63 L68.96,124.04 L67.28,123.48 L65.6,122.97 L63.92,122.5 L62.24,122.06 L60.56,121.65 L58.88,121.27 L57.2,120.91 L55.52,120.57 L53.84,120.26 L52.16,119.96 L50.48,119.68 L48.8,119.41 L47.12,119.16 L45.44,118.92 L43.76,118.7 L42.08,118.48 L40.4,118.28 L38.72,118.08 L37.04,117.89 L35.36,117.72 L33.68,117.55 L32,117.38 L30.32,117.23 L28.64,117.08 L26.96,116.94 L25.28,116.8 L23.6,116.67 L21.92,116.54 L20.24,116.42 L18.56,116.3 L16.88,116.19 L15.2,116.08 L13.52,115.97 L11.84,115.87 L10.16,115.77 L8.48,115.67 L6.8,115.58 L5.12,115.49 L3.44,115.41 L1.76,115.32 L0.08,115.24 L-1.6,115.16 L-3.28,115.08 L-4.96,115.01 L-6.64,114.94 L-8.32,114.87 L-10,114.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="134" cy="86" r="3.5" fill="#2563eb"/><text x="141" y="78" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(4, 1)</text></svg>' },
        { difficulty: 'Hard', question: 'Sipho sê die gemiddelde gradiënt van f(x)=x² tussen twee punte is altyd gelyk aan die gradiënt by die middelpunt van daardie twee x-waardes. Is hy korrek vir f(x)=x²? Verduidelik deur x=0 en x=4 te toets.', answer: 'Sy bewering geld toevallig vir f(x)=x² — die gemiddelde gradiënt tussen x=0 en x=4 is (16−0)/4=4, en dit is gelyk aan die werklike (oombliklike) gradiënt van die kurwe by die middelpunt x=2. Dit is ʼn spesiale eienskap van parabole, nie waar vir alle funksies in die algemeen nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Parabool word op ʼn stel asse getoon met draaipunt (−1,−4), en gaan deur die punt (1,4), in die vorm y=a(x+1)²−4. Gebruik die diagram om a te vind en skryf die volledige vergelyking.', answer: 'Vervang (1,4): 4=a(1+1)²−4. 8=4a. a=2. Vergelyking: y=2(x+1)²−4.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="26" y1="2" x2="26" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="2" x2="50" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="74" y1="2" x2="74" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="98" y1="2" x2="98" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="122" y1="2" x2="122" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="146" y1="2" x2="146" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="170" y1="2" x2="170" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="194" y1="2" x2="194" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#374151" stroke-width="1.5"/><text x="210" y="56" font-size="11" fill="#374151">x</text><line x1="122" y1="2" x2="122" y2="218" stroke="#374151" stroke-width="1.5"/><text x="128" y="12" font-size="11" fill="#374151">y</text><path d="M86,14 L89,36.5 L92,56 L95,72.5 L98,86 L101,96.5 L104,104 L107,108.5 L110,110 L113,108.5 L116,104 L119,96.5 L122,86 L125,72.5 L128,56 L131,36.5 L134,14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="110" r="3.5" fill="#2563eb"/><text x="116" y="126" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(-1, -4)</text><circle cx="134" cy="14" r="3.5" fill="#2563eb"/><text x="141" y="6" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(1, 4)</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het Graad 11-funksies bemeester — parabole, hiperbole, eksponensiële funksies en gemiddelde gradiënt.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae) — dieselfde bloklaaiuit as Stel 1, vars getalle
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Vind die draaipunt van y=(x+2)²−5, en gee aan of dit ʼn minimum of maksimum is.', answer: '', checkMode: 'auto', parts: [
          { label: 'Draaipunt', correctAnswer: '(-2,-5)', correctAnswers: ['(-2,-5)', '(−2,−5)', '(-2, -5)', '(−2, −5)'], explanation: 'Vir y=a(x+p)²+q, is die draaipunt (−p, q). Hier is p=2 en q=−5, dus is die draaipunt (−2, −5). ✓' },
          { label: 'Minimum of maksimum?', correctAnswer: 'minimum', correctAnswers: ['minimum', 'min', 'Minimum', 'Min'], explanation: 'Aangesien a=1>0, open die parabool opwaarts — die draaipunt is ʼn minimum. ✓' },
        ]},
        { difficulty: 'Easy', question: 'Vind die draaipunt van y=−3(x−1)²+4, en gee aan of dit ʼn minimum of maksimum is.', answer: '', checkMode: 'auto', parts: [
          { label: 'Draaipunt', correctAnswer: '(1,4)', correctAnswers: ['(1,4)', '(1, 4)'], explanation: 'Vir y=a(x−p)²+q, is die draaipunt (p, q). Hier is p=1 en q=4, dus is die draaipunt (1, 4). ✓' },
          { label: 'Minimum of maksimum?', correctAnswer: 'maksimum', correctAnswers: ['maksimum', 'max', 'Maksimum', 'Max'], explanation: 'Aangesien a=−3<0, open die parabool afwaarts — die draaipunt is ʼn maksimum. ✓' },
        ]},
        { difficulty: 'Easy', question: 'Vind die draaipunt van y=2(x+5)²−1.', answer: '(−5,−1)', checkMode: 'auto', correctAnswer: '(-5,-1)', correctAnswers: ['(-5,-1)', '(−5,−1)', '(-5, -1)', '(−5, −1)'], explanation: 'Vir y=a(x+p)²+q, is die draaipunt (−p, q). Hier is p=5 en q=−1, dus is die draaipunt (−5, −1). ✓' },

        { difficulty: 'Easy', question: 'Vind die vertikale en horisontale asimptote van y=4/(x+2)−3.', answer: '', checkMode: 'auto', parts: [
          { label: 'Vertikale asimptoot', correctAnswer: 'x=-2', correctAnswers: ['x=-2', 'x=−2', 'x = -2', 'x = −2'], explanation: 'Die noemer is gelyk aan nul wanneer x+2=0, dus is die vertikale asimptoot x=−2. ✓' },
          { label: 'Horisontale asimptoot', correctAnswer: 'y=-3', correctAnswers: ['y=-3', 'y=−3', 'y = -3', 'y = −3'], explanation: 'Die horisontale asimptoot is y=q=−3. ✓' },
        ]},
        { difficulty: 'Easy-Medium', question: 'ʼn Hiperbool y=5/(x−1)+2 gaan deur ʼn punt met x=6. Vind die ooreenstemmende y-waarde.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Vervang x=6: y=5/(6−1)+2=5/5+2=1+2=3. ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Hiperbool het vertikale asimptoot x=−2 en horisontale asimptoot y=−1, en gaan deur (0,3), in die vorm y=a/(x+2)−1. Vind a.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Vervang (0,3): 3=a/(0+2)−1. 4=a/2. a=8. ✓' },

        { difficulty: 'Easy-Medium', question: 'Vergelyk y=3ˣ met y=3^(x+2)−1. Gee die horisontale asimptoot en beskryf die skuif.', answer: '', checkMode: 'auto', parts: [
          { label: 'Horisontale asimptoot', correctAnswer: 'y=-1', correctAnswers: ['y=-1', 'y=−1', 'y = -1', 'y = −1'], explanation: 'Die horisontale asimptoot is y=q=−1. ✓' },
          { label: 'Skuifrigting', correctAnswer: '2 eenhede links', correctAnswers: ['2 eenhede links', 'skuif 2 eenhede na links', 'links 2 eenhede', '2 eenhede na links'], explanation: 'Aangesien p=2 binne die eksponent is (geskryf as x+2), skuif die grafiek 2 eenhede na links. ✓' },
        ]},
        { difficulty: 'Easy-Medium', question: 'Vind die y-afsnit van y=2·3ˣ+4.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Vervang x=0: y=2·3⁰+4=2(1)+4=2+4=6 (aangesien 3⁰=1). ✓' },
        { difficulty: 'Medium', question: 'ʼn Eksponensiële grafiek gaan deur (0,7) met horisontale asimptoot y=1, in die vorm y=a·3ˣ+1. Vind a.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Vervang (0,7): 7=a·3⁰+1=a+1 (aangesien 3⁰=1). Dus a=7−1=6. ✓' },

        { difficulty: 'Medium', question: 'ʼn Eksponensiële grafiek in die vorm y=a·bˣ+2 gaan deur (0,5) en (1,11). Vind a en b.', answer: '', checkMode: 'auto', parts: [
          { label: 'Waarde van a', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Vervang (0,5): 5=a·b⁰+2=a+2 (aangesien b⁰=1). Dus a=5−2=3. ✓' },
          { label: 'Waarde van b', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Vervang (1,11) met a=3: 11=3b+2. 9=3b. b=3. ✓' },
        ]},
        { difficulty: 'Medium', question: 'ʼn Parabool het dieselfde vorm as y=x² met draaipunt (−4,1). Skryf sy vergelyking.', answer: 'y=(x+4)²+1', checkMode: 'auto', correctAnswer: 'y=(x+4)²+1', correctAnswers: ['y=(x+4)²+1', 'y=(x+4)^2+1'], explanation: 'Draaipunt (−4,1) gee p=4 en q=1. Aangesien a=1 (dieselfde vorm as y=x²): y=(x+4)²+1. ✓' },
        { difficulty: 'Medium', question: 'ʼn Parabool in die vorm y=a(x−1)²−3 het draaipunt (1,−3) en gaan deur (3,5). Vind a.', answer: '2', checkMode: 'auto', correctAnswer: '2', explanation: 'Vervang (3,5): 5=a(3−1)²−3=4a−3. 8=4a. a=2. ✓' },
        { difficulty: 'Medium', question: 'ʼn Hiperbool het asimptote x=2 en y=−3, en gaan deur (4,−1), in die vorm y=a/(x−2)−3. Vind a.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'Vervang (4,−1): −1=a/(4−2)−3. 2=a/2. a=4. ✓' },

        { difficulty: 'Medium', question: 'Vir f(x)=x², bereken die gemiddelde gradiënt tussen x=2 en x=5.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Gemiddelde gradiënt = (f(5)−f(2))/(5−2) = (25−4)/3 = 21/3 = 7. ✓' },
        { difficulty: 'Medium', question: 'Vir f(x)=x²+2, bereken die gemiddelde gradiënt tussen x=−2 en x=1.', answer: '−1', checkMode: 'auto', correctAnswer: '-1', correctAnswers: ['-1', '−1'], explanation: 'Gemiddelde gradiënt = (f(1)−f(−2))/(1−(−2)) = ((1+2)−(4+2))/3 = (3−6)/3 = −3/3 = −1. ✓' },
        { difficulty: 'Medium-Hard', question: 'Vir f(x)=3x²−2, bereken die gemiddelde gradiënt tussen x=0 en x=2.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Gemiddelde gradiënt = (f(2)−f(0))/(2−0) = (10−(−2))/2 = 12/2 = 6. ✓' },
        { difficulty: 'Medium-Hard', question: 'Vir f(x)=−2x²+3x, bereken die gemiddelde gradiënt tussen x=−1 en x=2.', answer: '1', checkMode: 'auto', correctAnswer: '1', explanation: 'Gemiddelde gradiënt = (f(2)−f(−1))/(2−(−1)) = ((−8+6)−(−2−3))/3 = (−2−(−5))/3 = 3/3 = 1. ✓' },

        { difficulty: 'Hard', question: 'ʼn Hiperbool word op ʼn stel asse getoon met vertikale asimptoot x=−1, horisontale asimptoot y=2, en gaan deur die punt (1,5), in die vorm y=a/(x+1)+2. Gebruik die diagram om a te vind en skryf die volledige vergelyking.', answer: 'Vervang (1,5): 5=a/(1+1)+2. 3=a/2. a=6. Vergelyking: y=6/(x+1)+2.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="26" y1="2" x2="26" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="2" x2="50" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="74" y1="2" x2="74" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="98" y1="2" x2="98" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="122" y1="2" x2="122" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="146" y1="2" x2="146" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="170" y1="2" x2="170" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="194" y1="2" x2="194" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#374151" stroke-width="1.5"/><text x="210" y="128" font-size="11" fill="#374151">x</text><line x1="122" y1="2" x2="122" y2="218" stroke="#374151" stroke-width="1.5"/><text x="128" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="110" x2="203.12" y2="110" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="212" y="104" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = 2</text><line x1="110" y1="203.12" x2="110" y2="16.88" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="116" y="16" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">x = -1</text><path d="M119.12,15.26 L120.8,30 L122.48,40.77 L124.16,48.98 L125.84,55.45 L127.52,60.68 L129.2,65 L130.88,68.62 L132.56,71.7 L134.24,74.36 L135.92,76.67 L137.6,78.7 L139.28,80.49 L140.96,82.09 L142.64,83.53 L144.32,84.83 L146,86 L147.68,87.07 L149.36,88.05 L151.04,88.95 L152.72,89.78 L154.4,90.54 L156.08,91.25 L157.76,91.91 L159.44,92.52 L161.12,93.1 L162.8,93.64 L164.48,94.14 L166.16,94.62 L167.84,95.06 L169.52,95.48 L171.2,95.88 L172.88,96.26 L174.56,96.62 L176.24,96.96 L177.92,97.28 L179.6,97.59 L181.28,97.88 L182.96,98.16 L184.64,98.42 L186.32,98.68 L188,98.92 L189.68,99.16 L191.36,99.38 L193.04,99.6 L194.72,99.8 L196.4,100 L198.08,100.19 L199.76,100.37 L201.44,100.55 L203.12,100.72 L204.8,100.89 L206.48,101.04 L208.16,101.2 L209.84,101.35 L211.52,101.49 L213.2,101.63 L214.88,101.76 L216.56,101.89 L218.24,102.02 L219.92,102.14 L221.6,102.26 L223.28,102.37 L224.96,102.48 L226.64,102.59 L228.32,102.7 L230,102.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M100.88,204.74 L99.2,190 L97.52,179.23 L95.84,171.02 L94.16,164.55 L92.48,159.32 L90.8,155 L89.12,151.38 L87.44,148.3 L85.76,145.64 L84.08,143.33 L82.4,141.3 L80.72,139.51 L79.04,137.91 L77.36,136.47 L75.68,135.17 L74,134 L72.32,132.93 L70.64,131.95 L68.96,131.05 L67.28,130.22 L65.6,129.46 L63.92,128.75 L62.24,128.09 L60.56,127.48 L58.88,126.9 L57.2,126.36 L55.52,125.86 L53.84,125.38 L52.16,124.94 L50.48,124.52 L48.8,124.12 L47.12,123.74 L45.44,123.38 L43.76,123.04 L42.08,122.72 L40.4,122.41 L38.72,122.12 L37.04,121.84 L35.36,121.58 L33.68,121.32 L32,121.08 L30.32,120.84 L28.64,120.62 L26.96,120.4 L25.28,120.2 L23.6,120 L21.92,119.81 L20.24,119.63 L18.56,119.45 L16.88,119.28 L15.2,119.11 L13.52,118.96 L11.84,118.8 L10.16,118.65 L8.48,118.51 L6.8,118.37 L5.12,118.24 L3.44,118.11 L1.76,117.98 L0.08,117.86 L-1.6,117.74 L-3.28,117.63 L-4.96,117.52 L-6.64,117.41 L-8.32,117.3 L-10,117.2" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="134" cy="74" r="3.5" fill="#2563eb"/><text x="141" y="66" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(1, 5)</text></svg>' },
        { difficulty: 'Hard', question: 'Lerato sê die gemiddelde gradiënt van enige funksie tussen twee punte is altyd positief omdat "gradiënte meet hoe vinnig ʼn grafiek toeneem." Gebruik f(x)=−x²+4x tussen x=1 en x=3 om haar bewering te toets, en kommentaar of sy in die algemeen korrek is.', answer: 'Vir f(x)=−x²+4x is die gemiddelde gradiënt tussen x=1 en x=3 gelyk aan (3−3)/2=0, wat nie positief of negatief is nie. Dit weerlê haar bewering reeds — gemiddelde gradiënt kan nul, of negatief wees, afhangende van of die funksie toeneem, afneem, of onveranderd bly oor die interval.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Parabool word op ʼn stel asse getoon met draaipunt (2,−5), en gaan deur die punt (4,3), in die vorm y=a(x−2)²−5. Gebruik die diagram om a te vind en skryf die volledige vergelyking.', answer: 'Vervang (4,3): 3=a(4−2)²−5. 8=4a. a=2. Vergelyking: y=2(x−2)²−5.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="194" x2="218" y2="194" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="170" x2="218" y2="170" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="146" x2="218" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="122" x2="218" y2="122" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="98" x2="218" y2="98" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="74" x2="218" y2="74" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="50" x2="218" y2="50" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="26" x2="218" y2="26" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="50" x2="218" y2="50" stroke="#374151" stroke-width="1.5"/><text x="210" y="44" font-size="11" fill="#374151">x</text><line x1="86" y1="2" x2="86" y2="218" stroke="#374151" stroke-width="1.5"/><text x="92" y="12" font-size="11" fill="#374151">y</text><path d="M86,14 L89,36.5 L92,56 L95,72.5 L98,86 L101,96.5 L104,104 L107,108.5 L110,110 L113,108.5 L116,104 L119,96.5 L122,86 L125,72.5 L128,56 L131,36.5 L134,14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="110" r="3.5" fill="#2563eb"/><text x="116" y="126" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(2, -5)</text><circle cx="134" cy="14" r="3.5" fill="#2563eb"/><text x="141" y="6" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(4, 3)</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue parabole, hiperbole, eksponensiële funksies en gemiddelde gradiënt hanteer.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae) — dieselfde bloklaaiuit, vars getalle, meer grafieklees-klem
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Vind die draaipunt van y=(x−6)²−2, en gee aan of dit ʼn minimum of maksimum is.', answer: '', checkMode: 'auto', parts: [
          { label: 'Draaipunt', correctAnswer: '(6,-2)', correctAnswers: ['(6,-2)', '(6,−2)', '(6, -2)', '(6, −2)'], explanation: 'Vir y=a(x−p)²+q, is die draaipunt (p, q). Hier is p=6 en q=−2, dus is die draaipunt (6, −2). ✓' },
          { label: 'Minimum of maksimum?', correctAnswer: 'minimum', correctAnswers: ['minimum', 'min', 'Minimum', 'Min'], explanation: 'Aangesien a=1>0, open die parabool opwaarts — die draaipunt is ʼn minimum. ✓' },
        ]},
        { difficulty: 'Easy', question: 'Vind die draaipunt van y=−4(x+3)²+7, en gee aan of dit ʼn minimum of maksimum is.', answer: '', checkMode: 'auto', parts: [
          { label: 'Draaipunt', correctAnswer: '(-3,7)', correctAnswers: ['(-3,7)', '(−3,7)', '(-3, 7)', '(−3, 7)'], explanation: 'Vir y=a(x+p)²+q, is die draaipunt (−p, q). Hier is p=3 en q=7, dus is die draaipunt (−3, 7). ✓' },
          { label: 'Minimum of maksimum?', correctAnswer: 'maksimum', correctAnswers: ['maksimum', 'max', 'Maksimum', 'Max'], explanation: 'Aangesien a=−4<0, open die parabool afwaarts — die draaipunt is ʼn maksimum. ✓' },
        ]},
        { difficulty: 'Easy', question: 'Vind die draaipunt van y=5(x−1)²−4.', answer: '(1,−4)', checkMode: 'auto', correctAnswer: '(1,-4)', correctAnswers: ['(1,-4)', '(1,−4)', '(1, -4)', '(1, −4)'], explanation: 'Vir y=a(x−p)²+q, is die draaipunt (p, q). Hier is p=1 en q=−4, dus is die draaipunt (1, −4). ✓' },

        { difficulty: 'Easy', question: 'Vind die vertikale en horisontale asimptote van y=3/(x−5)+2.', answer: '', checkMode: 'auto', parts: [
          { label: 'Vertikale asimptoot', correctAnswer: 'x=5', correctAnswers: ['x=5', 'x = 5'], explanation: 'Die noemer is gelyk aan nul wanneer x−5=0, dus is die vertikale asimptoot x=5. ✓' },
          { label: 'Horisontale asimptoot', correctAnswer: 'y=2', correctAnswers: ['y=2', 'y = 2'], explanation: 'Die horisontale asimptoot is y=q=2. ✓' },
        ]},
        { difficulty: 'Easy-Medium', question: 'ʼn Hiperbool y=8/(x+4)−1 gaan deur ʼn punt met x=−2. Vind die ooreenstemmende y-waarde.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Vervang x=−2: y=8/(−2+4)−1=8/2−1=4−1=3. ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Hiperbool het vertikale asimptoot x=3 en horisontale asimptoot y=1, en gaan deur (5,4), in die vorm y=a/(x−3)+1. Vind a.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Vervang (5,4): 4=a/(5−3)+1. 3=a/2. a=6. ✓' },

        { difficulty: 'Easy-Medium', question: 'Vergelyk y=4ˣ met y=4^(x−3)+2. Gee die horisontale asimptoot en beskryf die skuif.', answer: '', checkMode: 'auto', parts: [
          { label: 'Horisontale asimptoot', correctAnswer: 'y=2', correctAnswers: ['y=2', 'y = 2'], explanation: 'Die horisontale asimptoot is y=q=2. ✓' },
          { label: 'Skuifrigting', correctAnswer: '3 eenhede regs', correctAnswers: ['3 eenhede regs', 'skuif 3 eenhede na regs', 'regs 3 eenhede', '3 eenhede na regs'], explanation: 'Aangesien p=−3 binne die eksponent is (geskryf as x−3), skuif die grafiek 3 eenhede na regs. ✓' },
        ]},
        { difficulty: 'Easy-Medium', question: 'Vind die y-afsnit van y=4·2ˣ−5.', answer: '−1', checkMode: 'auto', correctAnswer: '-1', correctAnswers: ['-1', '−1'], explanation: 'Vervang x=0: y=4·2⁰−5=4(1)−5=4−5=−1 (aangesien 2⁰=1). ✓' },
        { difficulty: 'Medium', question: 'ʼn Eksponensiële grafiek gaan deur (0,10) met horisontale asimptoot y=−2, in die vorm y=a·4ˣ−2. Vind a.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Vervang (0,10): 10=a·4⁰−2=a−2 (aangesien 4⁰=1). Dus a=10+2=12. ✓' },

        { difficulty: 'Medium', question: 'ʼn Eksponensiële grafiek in die vorm y=a·bˣ−3 gaan deur (0,1) en (1,5). Vind a en b.', answer: '', checkMode: 'auto', parts: [
          { label: 'Waarde van a', correctAnswer: '4', correctAnswers: ['4'], explanation: 'Vervang (0,1): 1=a·b⁰−3=a−3 (aangesien b⁰=1). Dus a=1+3=4. ✓' },
          { label: 'Waarde van b', correctAnswer: '2', correctAnswers: ['2'], explanation: 'Vervang (1,5) met a=4: 5=4b−3. 8=4b. b=2. ✓' },
        ]},
        { difficulty: 'Medium', question: 'ʼn Parabool het dieselfde vorm as y=x² met draaipunt (5,−3). Skryf sy vergelyking.', answer: 'y=(x−5)²−3', checkMode: 'auto', correctAnswer: 'y=(x-5)²-3', correctAnswers: ['y=(x-5)²-3', 'y=(x−5)²−3', 'y=(x-5)^2-3'], explanation: 'Draaipunt (5,−3) gee p=5 en q=−3. Aangesien a=1 (dieselfde vorm as y=x²): y=(x−5)²−3. ✓' },
        { difficulty: 'Medium', question: 'ʼn Parabool in die vorm y=a(x+1)²+2 het draaipunt (−1,2) en gaan deur (1,10). Vind a.', answer: '2', checkMode: 'auto', correctAnswer: '2', explanation: 'Vervang (1,10): 10=a(1+1)²+2=4a+2. 8=4a. a=2. ✓' },
        { difficulty: 'Medium', question: 'ʼn Hiperbool het asimptote x=−4 en y=1, en gaan deur (−2,4), in die vorm y=a/(x+4)+1. Vind a.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Vervang (−2,4): 4=a/(−2+4)+1. 3=a/2. a=6. ✓' },

        { difficulty: 'Medium', question: 'Vir f(x)=x², bereken die gemiddelde gradiënt tussen x=−3 en x=0.', answer: '−3', checkMode: 'auto', correctAnswer: '-3', correctAnswers: ['-3', '−3'], explanation: 'Gemiddelde gradiënt = (f(0)−f(−3))/(0−(−3)) = (0−9)/3 = −9/3 = −3. ✓' },
        { difficulty: 'Medium', question: 'Vir f(x)=x²−1, bereken die gemiddelde gradiënt tussen x=1 en x=3.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'Gemiddelde gradiënt = (f(3)−f(1))/(3−1) = (8−0)/2 = 8/2 = 4. ✓' },
        { difficulty: 'Medium-Hard', question: 'Vir f(x)=2x²−5, bereken die gemiddelde gradiënt tussen x=−2 en x=1.', answer: '−2', checkMode: 'auto', correctAnswer: '-2', correctAnswers: ['-2', '−2'], explanation: 'Gemiddelde gradiënt = (f(1)−f(−2))/(1−(−2)) = (−3−3)/3 = −6/3 = −2. ✓' },
        { difficulty: 'Medium-Hard', question: 'Vir f(x)=−x²+5x, bereken die gemiddelde gradiënt tussen x=0 en x=4.', answer: '1', checkMode: 'auto', correctAnswer: '1', explanation: 'Gemiddelde gradiënt = (f(4)−f(0))/(4−0) = (4−0)/4 = 4/4 = 1. ✓' },

        { difficulty: 'Hard', question: 'ʼn Hiperbool word op ʼn stel asse getoon met vertikale asimptoot x=4, horisontale asimptoot y=−2, en gaan deur die punt (6,1), in die vorm y=a/(x−4)−2. Gebruik die diagram om a te vind en skryf die volledige vergelyking.', answer: 'Vervang (6,1): 1=a/(6−4)−2. 3=a/2. a=6. Vergelyking: y=6/(x−4)−2.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#374151" stroke-width="1.5"/><text x="210" y="80" font-size="11" fill="#374151">x</text><line x1="62" y1="2" x2="62" y2="218" stroke="#374151" stroke-width="1.5"/><text x="68" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="110" x2="203.12" y2="110" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="156.08" y="104" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = -2</text><line x1="110" y1="203.12" x2="110" y2="16.88" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="116" y="16" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">x = 4</text><path d="M119.12,15.26 L120.8,30 L122.48,40.77 L124.16,48.98 L125.84,55.45 L127.52,60.68 L129.2,65 L130.88,68.62 L132.56,71.7 L134.24,74.36 L135.92,76.67 L137.6,78.7 L139.28,80.49 L140.96,82.09 L142.64,83.53 L144.32,84.83 L146,86 L147.68,87.07 L149.36,88.05 L151.04,88.95 L152.72,89.78 L154.4,90.54 L156.08,91.25 L157.76,91.91 L159.44,92.52 L161.12,93.1 L162.8,93.64 L164.48,94.14 L166.16,94.62 L167.84,95.06 L169.52,95.48 L171.2,95.88 L172.88,96.26 L174.56,96.62 L176.24,96.96 L177.92,97.28 L179.6,97.59 L181.28,97.88 L182.96,98.16 L184.64,98.42 L186.32,98.68 L188,98.92 L189.68,99.16 L191.36,99.38 L193.04,99.6 L194.72,99.8 L196.4,100 L198.08,100.19 L199.76,100.37 L201.44,100.55 L203.12,100.72 L204.8,100.89 L206.48,101.04 L208.16,101.2 L209.84,101.35 L211.52,101.49 L213.2,101.63 L214.88,101.76 L216.56,101.89 L218.24,102.02 L219.92,102.14 L221.6,102.26 L223.28,102.37 L224.96,102.48 L226.64,102.59 L228.32,102.7 L230,102.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M100.88,204.74 L99.2,190 L97.52,179.23 L95.84,171.02 L94.16,164.55 L92.48,159.32 L90.8,155 L89.12,151.38 L87.44,148.3 L85.76,145.64 L84.08,143.33 L82.4,141.3 L80.72,139.51 L79.04,137.91 L77.36,136.47 L75.68,135.17 L74,134 L72.32,132.93 L70.64,131.95 L68.96,131.05 L67.28,130.22 L65.6,129.46 L63.92,128.75 L62.24,128.09 L60.56,127.48 L58.88,126.9 L57.2,126.36 L55.52,125.86 L53.84,125.38 L52.16,124.94 L50.48,124.52 L48.8,124.12 L47.12,123.74 L45.44,123.38 L43.76,123.04 L42.08,122.72 L40.4,122.41 L38.72,122.12 L37.04,121.84 L35.36,121.58 L33.68,121.32 L32,121.08 L30.32,120.84 L28.64,120.62 L26.96,120.4 L25.28,120.2 L23.6,120 L21.92,119.81 L20.24,119.63 L18.56,119.45 L16.88,119.28 L15.2,119.11 L13.52,118.96 L11.84,118.8 L10.16,118.65 L8.48,118.51 L6.8,118.37 L5.12,118.24 L3.44,118.11 L1.76,117.98 L0.08,117.86 L-1.6,117.74 L-3.28,117.63 L-4.96,117.52 L-6.64,117.41 L-8.32,117.3 L-10,117.2" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="134" cy="74" r="3.5" fill="#2563eb"/><text x="141" y="66" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(6, 1)</text></svg>' },
        { difficulty: 'Hard', question: 'Thabo sê dat as ʼn parabool afwaarts open, sy gemiddelde gradiënt tussen enige twee punte altyd negatief moet wees. Gebruik f(x)=−x²+5x tussen x=0 en x=4 om sy bewering te toets, en kommentaar of hy in die algemeen korrek is.', answer: 'Vir f(x)=−x²+5x (wat afwaarts open aangesien a=−1<0), is die gemiddelde gradiënt tussen x=0 en x=4 gelyk aan (4−0)/4=1, wat positief is. Dit weerlê sy bewering — selfs ʼn afwaarts-openende parabool kan ʼn positiewe gemiddelde gradiënt hê oor ʼn interval waar die funksie steeds oorhoofs toeneem (voordat dit sy draaipunt bereik).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Parabool word op ʼn stel asse getoon met draaipunt (3,2), en gaan deur die punt (5,10), in die vorm y=a(x−3)²+2. Gebruik die diagram om a te vind en skryf die volledige vergelyking.', answer: 'Vervang (5,10): 10=a(5−3)²+2. 8=4a. a=2. Vergelyking: y=2(x−3)²+2.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="2" x2="20" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="2" x2="50" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="80" y1="2" x2="80" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="140" y1="2" x2="140" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="170" y1="2" x2="170" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="2" x2="200" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="190" x2="218" y2="190" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="160" x2="218" y2="160" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="130" x2="218" y2="130" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="100" x2="218" y2="100" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="70" x2="218" y2="70" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="40" x2="218" y2="40" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="130" x2="218" y2="130" stroke="#374151" stroke-width="1.5"/><text x="210" y="124" font-size="11" fill="#374151">x</text><line x1="80" y1="2" x2="80" y2="218" stroke="#374151" stroke-width="1.5"/><text x="86" y="12" font-size="11" fill="#374151">y</text><path d="M88,13.2 L90.75,35.89 L93.5,55.55 L96.25,72.19 L99,85.8 L101.75,96.39 L104.5,103.95 L107.25,108.49 L110,110 L112.75,108.49 L115.5,103.95 L118.25,96.39 L121,85.8 L123.75,72.19 L126.5,55.55 L129.25,35.89 L132,13.2" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="110" r="3.5" fill="#2563eb"/><text x="116" y="126" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(3, 2)</text><circle cx="130" cy="30" r="3.5" fill="#2563eb"/><text x="137" y="22" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(5, 10)</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan Graad 11-funksietransformasies en gemiddelde gradiënt op ʼn wye reeks probleme toepas.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het funksies bemeester.' },
      { minScore: 15, message: 'Goeie werk!' },
      { minScore: 10, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },

  scoreMessages: [
    { minScore: 33, message: 'Uitstekend! ʼn Volmaakte telling — jy het Funksies vir Graad 11 heeltemal bemeester. Hou so aan!' },
    { minScore: 27, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van funksietransformasies. Gaan enige gemiste dele weer deur en jy sal dit perfek hê.' },
    { minScore: 20, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 12, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: "Moenie tou opgooi nie — elke kenner was eers ʼn beginner! Gaan die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling weer deur, en probeer dan weer." },
  ],
}
