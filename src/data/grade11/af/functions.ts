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
