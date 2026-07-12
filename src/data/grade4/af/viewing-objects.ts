import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Aansig van Voorwerpe',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS ’N AANSIG?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-view',
      title: 'Wat is ʼn Aansig?',
      icon: '👀',
      explanation: `
<p style="margin-bottom:14px;">Wanneer jy na ʼn voorwerp kyk, hang dit wat jy sien af van <strong>waar jy staan</strong>. Die prent wat jou oë vanaf een plek opneem, word ʼn <strong>aansig</strong> genoem. Loop om dieselfde voorwerp en jy sal elke keer iets anders sien — al verander die voorwerp self nooit.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Probeer dit self 🧢</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">Sit ʼn pet op die tafel. Kyk eers reguit van voor af daarna, buk dan af en kyk van die kant af, en staan dan op en kyk van bo af daarop af. Drie heeltemal verskillende prente — maar dit is dieselfde pet die hele tyd.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Die drie aansigte wat ons gebruik</div>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Vooraansig</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Wat jy sien wanneer jy direk <strong style="color:#1e40af;">voor</strong> die voorwerp staan en reguit daarna kyk.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Syaansig</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Wat jy sien wanneer jy aan die <strong style="color:#dc2626;">kant</strong> van die voorwerp staan en van links of regs daarna kyk.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Bo-aansig</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">Wat jy sien wanneer jy <strong style="color:#16a34a;">reguit af</strong> op die voorwerp kyk vanaf bo. Dit word ook ʼn <strong>planaansig</strong> genoem.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Belangrike idee</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">Die voorwerp verander nie — net jou <strong>posisie</strong> verander. ʼn Aansig pas altyd by ʼn <strong>gesigspunt</strong>: waar die kyker staan en na watter kant hulle kyk.</p>
</div>`,
      workedExamples: [
        {
          question: 'ʼn Skoen word op ʼn tafel gesit. Beskryf wat jy sou verwag om te sien in die vooraansig, syaansig en bo-aansig.',
          steps: [
            '<strong style="color:#1e40af;">Vooraansig</strong> — as jy voor die skoen staan (na die toon kyk), sien jy die ronde toon-vorm.',
            '<strong style="color:#dc2626;">Syaansig</strong> — as jy aan die kant staan, sien jy die lang buitelyn van die skoen van hak tot toon, met die veters en die kurwe van die sool sigbaar.',
            '<strong style="color:#16a34a;">Bo-aansig</strong> — as jy reguit af kyk, sien jy die buitelyn van die skoen van bo, soos ʼn voetspoor-vorm met die veters sigbaar.',
          ],
          answer:
            'Vooraansig: die ronde toon-vorm. Syaansig: die volle buitelyn van hak tot toon. Bo-aansig: ʼn voetspoor-agtige buitelyn van bo gesien.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'ʼn Eenvoudige pet of skoen drie keer gewys, elke keer met ʼn klein figuurtjie-kyker op ʼn ander plek geposisioneer (voor, aan die kant, bo) met ʼn pyl wat na die voorwerp wys, en die gevolglike aansig langs elke kyker geskets',
      videoPlaceholder:
        'Kort video van ʼn regte voorwerp soos ʼn skoen wat van voor, die kant en bo bekyk word, wat wys hoe die prentjie verander soos die kyker beweeg',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — AANSIGTE PAS BY ALLEDAAGSE VOORWERPE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'matching-views-to-objects',
      title: 'Aansigte Pas by Alledaagse Voorwerpe',
      icon: '🔍',
      explanation: `
<p style="margin-bottom:14px;">Sodra jy weet daar is voor-, sy- en bo-aansigte, kan jy oefen om ʼn <strong>aansig by die voorwerp te pas</strong> waaraan dit behoort. Dit beteken jy kyk noukeurig na ʼn prent en vra: "Na watter deel van die voorwerp kyk ek, en vanwaar?"</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Hoe om ʼn aansig te pas</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Kyk eers na die <strong>hele voorwerp</strong> en let op sy algehele vorm.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Vra jouself: wys hierdie prent die voorwerp van <strong>voor</strong>, van die <strong>kant</strong>, of van <strong>bo</strong>?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Kyk watter kenmerke <strong>sigbaar</strong> is en watter <strong>weggesteek</strong> is in daardie aansig — dit is dikwels die grootste leidraad.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Voorbeeld: ʼn Koppie ☕</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li><strong>Vooraansig:</strong> jy kan die hoë, geboë buitelyn van die koppie sien — en die handvatsel wat na een kant toe uitsteek</li>
    <li><strong>Syaansig (vanaf die handvatsel-kant):</strong> die handvatsel oorvleuel met die lyf van die koppie, so die buitelyn lyk effens anders</li>
    <li><strong>Bo-aansig:</strong> jy kyk af in die koppie in en sien twee sirkels — die rand van die koppie en die opening — plus die handvatsel wat uitsteek</li>
  </ul>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Pasop vir hierdie algemene fout</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">Die <strong>bo-aansig</strong> lyk dikwels die mees verskillend van wat jy sou verwag, omdat jy glad nie die hoogte van die voorwerp kan sien nie — net sy buitelyn van bo. ʼn Hoë boks en ʼn kort boks met dieselfde basis lyk <strong>identies</strong> van bo af.</p>
</div>`,
      workedExamples: [
        {
          question: 'ʼn Toe skoenboks staan op ʼn tafel. Watter aansig sou twee sirkels wys as daar ʼn ronde hoed binne-in was wat plat op sy rand rus, en die deksel verwyder is?',
          steps: [
            'Met die deksel af, kyk <strong style="color:#16a34a;">reguit af</strong> in die boks in — dit is die bo-aansig.',
            'ʼn Hoed wat op sy rand rus, wys ʼn <strong>sirkel</strong> vir die rand en ʼn kleiner sirkel vir die bokant van die kroon, altwee sigbaar van reguit bo.',
            'Van voor of die kant sou die hoed eerder sy geboë buitelyn en hoogte wys, nie twee sirkels nie.',
          ],
          answer: 'Die bo-aansig — as jy reguit af kyk, sien jy die ronde rand en kroon as twee sirkels.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'ʼn Enkele alledaagse voorwerp soos ʼn appel, een keer volledig geteken, met drie klein gemerkte raampies langsaan (voor, kant, bo) wat elk die korrekte buitelyn wys wat die voorwerp vanaf daardie gesigspunt sou lewer, sonder om in die vraagteks te sê watter een "korrek" is',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — IDENTIFISEER VOORWERPE VANUIT ʼN GEGEWE AANSIG
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'identifying-objects-from-a-view',
      title: 'Identifiseer Voorwerpe Vanuit ʼn Gegewe Aansig',
      icon: '🧩',
      explanation: `
<p style="margin-bottom:14px;">Soms kry jy net <strong>een aansig</strong> — net een prentjie — en moet jy uitwerk watter regte voorwerp dit kan wees, of watter aansig (voor, kant of bo) dit moet wees. Dit is soos om ʼn klein legkaart op te los deur net die leidrade voor jou te gebruik.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Leidrade wat jou help besluit</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:150px;text-align:center;">Ronde buitelyn</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">Beteken dikwels jy kyk na ʼn <strong>bo-aansig</strong> van iets rond, soos die bokant van ʼn koppie of ʼn appel van bo gesien.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:150px;text-align:center;">Hoë, smal vorm</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">Gewoonlik ʼn <strong>voor-</strong> of <strong>syaansig</strong>, aangesien hoogte net sigbaar word wanneer jy na ʼn voorwerp van die kant of voor kyk, nie van bo nie.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:150px;text-align:center;">Ontbrekende kenmerk</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">As ʼn handvatsel, band of ander kenmerk ontbreek in ʼn aansig, is daardie aansig waarskynlik vanaf die kant <strong>teenoor</strong> waar daardie kenmerk is.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Agteruit werk 🔄</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">As jy net een aansig gewys word en gevra word "watter voorwerp is dit?" of "watter aansig is dit?", verbeel jou die voorwerp in jou gedagtes en dink daaraan om om dit te loop. Vra watter posisie jy sou moes staan om presies daardie prentjie te sien.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Belangrike idee</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">Een enkele aansig vertel jou selde alles oor ʼn voorwerp. Dis waarom bouers, kunstenaars en wetenskaplikes ʼn voorwerp dikwels vanuit <strong>meer as een</strong> gesigspunt teken of fotografeer — elke aansig vul inligting in wat die ander uitlaat.</p>
</div>`,
      workedExamples: [
        {
          question: 'Jy word ʼn prent gewys van ʼn driehoek-vorm met veters naby die bokant. Is dit heel waarskynlik die vooraansig, syaansig of bo-aansig van ʼn skoen?',
          steps: [
            'ʼn Skoen van die <strong style="color:#dc2626;">kant</strong> gesien wys sy lang buitelyn van hak tot toon, nie ʼn eenvoudige driehoek nie.',
            'ʼn Skoen van <strong style="color:#16a34a;">bo</strong> gesien wys ʼn ronde, langwerpige voetspoor-vorm, ook nie ʼn driehoek nie.',
            'ʼn Skoen van <strong style="color:#1e40af;">voor</strong> gesien (na die toon kykend) wys die smaller, meer driehoekige voorkant van die skoen, met die veters naby die bokant van die prent sigbaar.',
          ],
          answer: 'Die vooraansig — dit wys die smaller voorkant van die skoen met die veters sigbaar naby die bokant.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — AANSIGTE VAN TONELE, KLASKAMERS EN GEBOUE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'views-of-scenes-and-buildings',
      title: 'Aansigte van Tonele, Klaskamers en Geboue',
      icon: '🏫',
      explanation: `
<p style="margin-bottom:14px;">Aansigte word nie net vir klein voorwerpe soos koppies en skoene gebruik nie. Dieselfde idee werk ook vir <strong>groter tonele</strong> — ʼn klaskamer, ʼn eenvoudige gebou, of selfs ʼn skoolveld. Dit hou nou verband met die kaartvaardighede wat jy in Geografie leer.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Aansigte van groter ruimtes</div>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Syaansig</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">As jy by die klaskamerdeur staan en reguit inkyk, sien jy die lessenaars, stoele en die skryfbord van die kant af — sommige dinge agter ander weggesteek.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Planaansig</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">As jy reguit af op dieselfde klaskamer kyk vanaf bo (soos ʼn voël wat daaroor vlieg), sien jy die buitelyn en posisie van elke lessenaar en stoel, sonder dat iets agter iets anders weggesteek is. Dis waarom kaarte as planaansigte geteken word.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Waarom planaansigte nuttig is 🗺️</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">ʼn Planaansig (bo-aansig) van ʼn skoolveld wys presies waar die netbalbaan, die snoepie en die hek relatief tot mekaar geposisioneer is — sonder dat enige geboue of bome die uitsig blokkeer. Dis presies hoe ʼn kaart werk.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Belangrike idee</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">Of jy nou na ʼn klein voorwerp of ʼn hele skoolveld kyk, dieselfde reël geld: jou <strong>aansig</strong> hang af van jou <strong>gesigspunt</strong>. Om te verander waar jy staan — of om af te kyk in plaas van oorheen — verander altyd wat jy sien.</p>
</div>`,
      workedExamples: [
        {
          question: 'Waarom sou ʼn argitek ʼn planaansig (bo-aansig) van ʼn nuwe klaskamer teken voordat dit gebou word, in plaas van net ʼn syaansig?',
          steps: [
            'ʼn <strong style="color:#dc2626;">Syaansig</strong> wys net wat vanaf een posisie sigbaar is, met sommige meubels of mure agter ander weggesteek.',
            'ʼn <strong style="color:#16a34a;">Planaansig</strong> wys die hele vloer van bo, sodat elke muur, deur en stuk meubels akkuraat geposisioneer kan word sonder dat enigiets iets anders blokkeer.',
            'Dit maak ʼn planaansig baie meer nuttig om te beplan presies waar dinge moet gaan.',
          ],
          answer:
            'ʼn Planaansig wys die volle uitleg van bo sonder dat enigiets weggesteek is, wat dit baie makliker maak om te beplan waar mure, deure en meubels moet gaan.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'ʼn Eenvoudige klaskamertoneel twee keer gewys — een keer as ʼn syaansig (lessenaars, stoele en skryfbord vanaf die deur geteken, met sommige lessenaars gedeeltelik agter ander weggesteek) en een keer as ʼn plan-/bo-aansig (dieselfde lessenaars en stoele as eenvoudige reghoeke op die vloer geposisioneer, almal ten volle sigbaar, soos ʼn eenvoudige kaart)',
      videoPlaceholder:
        'Kort video wat ʼn speelgoed-klaskamer of modelgebou wys, eers vanaf ʼn sy-hoek gefilm en dan van reguit bo, wat die bo-aansig aan hoe kaarte geteken word, verbind',
    },
  ],

  topicPractice: [],

  practiceSets: [

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Wat is ʼn aansig? (Maklik)
        { difficulty: 'Easy', question: 'Wat noem ons die prentjie wat jy sien wanneer jy na ʼn voorwerp kyk vanaf een spesifieke plek?', answer: 'ʼn Aansig', checkMode: 'auto', correctAnswer: 'ʼn Aansig', correctAnswers: ['ʼn Aansig', 'Aansig', 'aansig', 'ʼn aansig'], explanation: 'Die prentjie wat jy vanaf ʼn spesifieke plek sien, word ʼn aansig genoem.' },
        { difficulty: 'Easy', question: 'Noem die drie aansigte wat gebruik word om ʼn alledaagse voorwerp te beskryf.', answer: 'Vooraansig, syaansig, bo-aansig', checkMode: 'self', explanation: 'Die drie hoofaansigte is die vooraansig, die syaansig en die bo-aansig (ook die planaansig genoem).' },
        { difficulty: 'Easy', question: 'As jy direk voor ʼn boks staan en reguit daarna kyk, watter aansig sien jy?', answer: 'Vooraansig', checkMode: 'auto', correctAnswer: 'Vooraansig', correctAnswers: ['Vooraansig', 'vooraansig', 'die vooraansig'], explanation: 'As jy direk voor ʼn voorwerp staan en reguit daarna kyk, kry jy die vooraansig.' },
        { difficulty: 'Easy', question: 'Wat is nog ʼn naam vir die bo-aansig?', answer: 'Planaansig', checkMode: 'auto', correctAnswer: 'Planaansig', correctAnswers: ['Planaansig', 'planaansig', 'die planaansig'], explanation: 'Die bo-aansig word ook die planaansig genoem, want jy kyk reguit af soos op ʼn kaartplan.' },

        // Blok 2 — Aansigte pas (Maklik-Medium)
        { difficulty: 'Easy', question: 'Verander ʼn voorwerp van vorm wanneer jy daarom loop en dit van ʼn ander plek af bekyk?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Die voorwerp self verander nooit — net jou gesigspunt verander, wat maak dat jy ʼn ander prentjie van dieselfde voorwerp sien.' },
        { difficulty: 'Medium', question: 'ʼn Koppie het ʼn handvatsel aan een kant. Vanuit watter aansig sou jy die handvatsel glad nie kan sien nie: die kant met die handvatsel, of die teenoorgestelde kant?', answer: 'Die teenoorgestelde kant', checkMode: 'self', explanation: 'As jy vanaf die kant teenoor die handvatsel kyk, is die handvatsel weggesteek agter die lyf van die koppie.' },
        { difficulty: 'Medium', question: 'Jy kyk reguit af in ʼn oop koppie in. Watter twee ronde vorms sou jy verwag om te sien?', answer: 'Die rand van die koppie en die opening (die binneste sirkel)', checkMode: 'self', explanation: 'As jy reguit af in ʼn koppie kyk (bo-aansig), sien jy die buitenste rand as een sirkel en die binneste opening as ʼn tweede sirkel.' },
        { difficulty: 'Medium', question: 'ʼn Toe kartondoos is soos ʼn reghoekige prisma gevorm. Sou die bo-aansig ʼn sirkel of ʼn reghoek wys?', answer: 'Reghoek', checkMode: 'auto', correctAnswer: 'Reghoek', correctAnswers: ['Reghoek', 'reghoek', 'ʼn reghoek'], explanation: 'As jy reguit af op ʼn reghoekige prisma kyk, sien jy die plat reghoekige bokant.' },

        // Blok 3 — Redenering oor wat sigbaar is (Medium)
        { difficulty: 'Medium', question: 'Waarom wys die bo-aansig van ʼn voorwerp nooit sy hoogte nie?', answer: 'Omdat jy, as jy reguit af van bo kyk, net die plat buitelyn van die bo-oppervlak sien — jy kan nie sien hoe hoog die voorwerp is vanaf daardie hoek nie.', checkMode: 'self', explanation: 'ʼn Bo-aansig wys breedte en lengte (die buitelyn van bo), maar nie hoogte nie, aangesien hoogte net beoordeel kan word deur ʼn voorwerp van voor of die kant te bekyk.' },
        { difficulty: 'Medium', question: 'ʼn Hoë drinkglas en ʼn kort, wye beker het altwee ʼn ronde basis van dieselfde grootte. Sou hulle bo-aansigte dieselfde of verskillend lyk?', answer: 'Dieselfde', checkMode: 'self', explanation: 'Aangesien die bo-aansig net die buitelyn van bo wys, en altwee basisse dieselfde grootte sirkel is, sou hulle bo-aansigte identies lyk, selfs al verskil hulle hoogtes.' },
        { difficulty: 'Medium', question: 'Watter aansig van ʼn partytjiehoed (ʼn keël-vorm) sou ʼn sirkel wys: die syaansig of die bo-aansig?', answer: 'Bo-aansig', checkMode: 'auto', correctAnswer: 'Bo-aansig', correctAnswers: ['Bo-aansig', 'bo-aansig', 'die bo-aansig'], explanation: 'As jy reguit af op ʼn keël-vormige hoed kyk, sien jy die ronde rand as ʼn sirkel. Van die kant af sou jy eerder ʼn driehoek-agtige buitelyn sien.' },
        { difficulty: 'Medium', question: 'ʼn Appel staan op ʼn tafel. Van die vooraansig af sien jy ʼn ronde buitelyn. Wat sou jy verwag die bo-aansig sal lyk?', answer: 'Ook ʼn ronde, min of meer sirkelvormige buitelyn', checkMode: 'self', explanation: 'Aangesien ʼn appel rond is van elke kant af, wys beide die vooraansig en die bo-aansig ʼn soortgelyke ronde buitelyn.' },

        // Blok 4 — Identifiseer voorwerpe/aansigte vanaf leidrade (Medium)
        { difficulty: 'Medium', question: 'Jy word ʼn prent gewys met ʼn smal, hoë buitelyn en glad geen ronde vorms nie. Is dit meer waarskynlik ʼn bo-aansig of ʼn syaansig?', answer: 'Syaansig', checkMode: 'auto', correctAnswer: 'Syaansig', correctAnswers: ['Syaansig', 'syaansig', 'die syaansig'], explanation: 'ʼn Bo-aansig wys gewoonlik die buitelyn van die basis, terwyl ʼn smal, hoë buitelyn wat hoogte aandui meer tipies is van ʼn voor- of syaansig.' },
        { difficulty: 'Medium', question: 'ʼn Prent wys ʼn skoen se lang buitelyn van hak tot toon, insluitend die veters langs die boonste rand. Watter aansig is dit?', answer: 'Syaansig', checkMode: 'auto', correctAnswer: 'Syaansig', correctAnswers: ['Syaansig', 'syaansig', 'die syaansig'], explanation: 'Die volle buitelyn van hak tot toon is wat jy sien as jy aan die kant van die skoen staan.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><path d="M30 105 C30 85 40 70 60 65 C80 60 100 62 120 58 C145 53 165 48 185 55 C195 58 195 75 185 85 C160 100 100 108 60 108 C45 108 32 108 30 105 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="95" y1="60" x2="80" y2="80" stroke="#2563eb" stroke-width="2"/><line x1="110" y1="58" x2="95" y2="80" stroke="#2563eb" stroke-width="2"/><line x1="125" y1="58" x2="112" y2="80" stroke="#2563eb" stroke-width="2"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Prent wys ʼn ronde, voetspoor-vormige buitelyn met die veters sigbaar dwarsoor die middel. Watter aansig is dit heel waarskynlik?', answer: 'Bo-aansig', checkMode: 'auto', correctAnswer: 'Bo-aansig', correctAnswers: ['Bo-aansig', 'bo-aansig', 'die bo-aansig'], explanation: 'As jy reguit af op ʼn skoen kyk, kry jy ʼn voetspoor-vormige buitelyn met die veters sigbaar op die bo-oppervlak.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><path d="M110 15 C150 15 170 35 170 65 C170 95 155 120 110 125 C65 120 50 95 50 65 C50 35 70 15 110 15 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="45" x2="130" y2="45" stroke="#2563eb" stroke-width="2"/><line x1="85" y1="60" x2="135" y2="60" stroke="#2563eb" stroke-width="2"/><line x1="82" y1="75" x2="138" y2="75" stroke="#2563eb" stroke-width="2"/></svg>' },
        { difficulty: 'Medium', question: 'Jy kry net die syaansig van ʼn voorwerp en moet dit identifiseer. Waarom kan dit soms moeilik wees?', answer: 'Omdat een enkele aansig net ʼn deel van die voorwerp se vorm wys, kan verskillende voorwerpe soms soortgelyk lyk vanuit net een gesigspunt.', checkMode: 'self', explanation: 'Een aansig alleen gee nie altyd genoeg inligting nie — dis waarom veelvuldige aansigte dikwels saam gebruik word.' },

        // Blok 5 — Tonele, klaskamers, geboue (Medium)
        { difficulty: 'Medium', question: 'Watter vak by die skool gebruik ook die idee van planaansigte (bo-aansigte), veral vir kaarte?', answer: 'Geografie', checkMode: 'auto', correctAnswer: 'Geografie', correctAnswers: ['Geografie', 'geografie'], explanation: 'Planaansigte hou nou verband met Geografie, waar kaarte geteken word as ʼn aansig wat reguit van bo af kyk.' },
        { difficulty: 'Medium', question: 'Waarom is ʼn planaansig van ʼn klaskamer nuttiger as ʼn syaansig om presies te wys waar elke lessenaar geposisioneer is?', answer: 'Omdat ʼn planaansig die hele vloer van bo wys sonder dat iets weggesteek is, sodat elke lessenaar se posisie sigbaar is, terwyl ʼn syaansig sommige lessenaars agter ander kan wegsteek.', checkMode: 'self', explanation: 'Van die kant af kan meubels ander meubels blokkeer. Van reguit bo af is elke voorwerp se posisie op een slag sigbaar.' },
        { difficulty: 'Medium', question: 'As jy by die klaskamerdeur staan en reguit inkyk, is jy meer waarskynlik ʼn syaansig of ʼn planaansig van die kamer aan het?', answer: 'Syaansig', checkMode: 'auto', correctAnswer: 'Syaansig', correctAnswers: ['Syaansig', 'syaansig', 'die syaansig'], explanation: 'As jy by die deur staan en oor die kamer kyk (nie afkyk nie), kry jy ʼn syaansig, nie ʼn planaansig nie.' },

        // Blok 6 — Multi-deel redenering (Moeilik)
        { difficulty: 'Hard', question: 'ʼn Toe boks (reghoekige prisma) staan op ʼn tafel. Dit is hoër as wat dit wyd is, en net die voorvlak het ʼn prentjie op gedruk.\na) Watter aansig sou die gedrukte prentjie wys: die vooraansig of die bo-aansig?\nb) Watter aansig sou net ʼn eenvoudige reghoek sonder prentjie wys: die syaansig of dieselfde vooraansig?', answer: 'a) Vooraansig   b) Syaansig', checkMode: 'auto', parts: [
          { label: 'a) Aansig wat die gedrukte prentjie wys', correctAnswer: 'Vooraansig', correctAnswers: ['Vooraansig', 'vooraansig', 'die vooraansig'], explanation: 'Die prentjie is op die voorvlak, so net die vooraansig wys dit.' },
          { label: 'b) Aansig wat ʼn eenvoudige reghoek wys', correctAnswer: 'Syaansig', correctAnswers: ['Syaansig', 'syaansig', 'die syaansig'], explanation: 'Die syvlak het geen prentjie op nie, so die syaansig wys ʼn eenvoudige reghoek.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy verstaan duidelik hoe voor-, sy- en bo-aansigte werk vir alledaagse voorwerpe en tonele.' },
        { minScore: 15, message: 'Goeie werk! Jy verstaan die meeste idees oor aansigte — gaan die vrae na wat jy verkeerd gehad het.' },
        { minScore: 10, message: 'Goeie poging! Gaan deur die studiegids oor aansigte en gesigspunte, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Wat is ʼn aansig? (Maklik)
        { difficulty: 'Easy', question: 'Waar of onwaar: die voorwerp verander van vorm afhangende van waar die kyker staan.', answer: 'Onwaar', checkMode: 'auto', correctAnswer: 'Onwaar', correctAnswers: ['Onwaar', 'onwaar'], explanation: 'Die voorwerp bly presies dieselfde. Net die kyker se posisie verander, wat verander wat hulle sien.' },
        { difficulty: 'Easy', question: 'As jy afbuk en na ʼn voorwerp kyk vanaf sy linker- of regterkant, watter aansig sien jy?', answer: 'Syaansig', checkMode: 'auto', correctAnswer: 'Syaansig', correctAnswers: ['Syaansig', 'syaansig', 'die syaansig'], explanation: 'As jy na ʼn voorwerp kyk vanaf sy linker- of regterkant, kry jy die syaansig.' },
        { difficulty: 'Easy', question: 'Watter woord beskryf presies waar ʼn kyker staan en na watter kant hulle kyk?', answer: 'Gesigspunt', checkMode: 'auto', correctAnswer: 'Gesigspunt', correctAnswers: ['Gesigspunt', 'gesigspunt', 'ʼn gesigspunt'], explanation: 'ʼn Gesigspunt is die posisie en rigting waarvandaan ʼn kyker kyk.' },
        { difficulty: 'Easy', question: 'Watter aansig kry jy deur reguit af op ʼn voorwerp te kyk vanaf bo?', answer: 'Bo-aansig', checkMode: 'auto', correctAnswer: 'Bo-aansig', correctAnswers: ['Bo-aansig', 'bo-aansig', 'die bo-aansig', 'planaansig', 'die planaansig'], explanation: 'As jy reguit af kyk vanaf bo, kry jy die bo-aansig, ook die planaansig genoem.' },

        // Blok 2 — Aansigte pas (Maklik-Medium)
        { difficulty: 'Easy', question: 'ʼn Wolmus het ʼn klein bolletjie bo-op. Watter aansig sou duidelik wys dat die bolletjie in die middel sit: die vooraansig of die bo-aansig?', answer: 'Bo-aansig', checkMode: 'auto', correctAnswer: 'Bo-aansig', correctAnswers: ['Bo-aansig', 'bo-aansig', 'die bo-aansig'], explanation: 'As jy reguit af op die mus kyk, sien jy die bolletjie in die middel van die ronde bokant sit.' },
        { difficulty: 'Medium', question: 'ʼn Toe skoenboks het ʼn prentjie net op sy kort punt gedruk. Vanuit watter twee aansigte sou jy moontlik daardie prentjie kon sien: voor en bo, of voor en een kant?', answer: 'Voor en een kant', checkMode: 'self', explanation: 'Die kort punt kan as óf die "voorkant" óf ʼn "sykant" bekyk word, afhangende van hoe die boks gedraai is, maar die bo-aansig sou net die plat deksel wys, nie die gedrukte punt nie.' },
        { difficulty: 'Medium', question: 'Jy kyk van die kant af na ʼn appel en sien ʼn ronde buitelyn met ʼn klein stingel wat bo-uit steek. Sou die bo-aansig ook die stingel wys?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'As jy reguit af op die appel kyk, sou die stingel as ʼn klein kolletjie of punt in die middel van die ronde buitelyn verskyn.' },
        { difficulty: 'Medium', question: 'ʼn Toe reghoekige prisma-boks is langer as wat dit wyd is, en baie korter in hoogte as in lengte. Sou sy bo-aansig ʼn vierkant of ʼn reghoek wees?', answer: 'Reghoek', checkMode: 'auto', correctAnswer: 'Reghoek', correctAnswers: ['Reghoek', 'reghoek', 'ʼn reghoek'], explanation: 'Aangesien die boks langer is as wat dit wyd is, is sy bo-aansig (die buitelyn van sy basis) ʼn reghoek, nie ʼn vierkant nie.' },

        // Blok 3 — Redenering oor wat sigbaar is (Medium)
        { difficulty: 'Medium', question: 'Verduidelik waarom die vooraansig en die syaansig van ʼn skoen gewoonlik verskillend van mekaar lyk.', answer: 'Omdat die vooraansig die smaller toon-kant van die skoen wys, terwyl die syaansig die lang buitelyn van die skoen van hak tot toon wys — hulle kyk na verskillende dele van dieselfde voorwerp.', checkMode: 'self', explanation: 'Voor- en syaansigte vang verskillende vlakke van die voorwerp vas, so tensy die voorwerp simmetries is vanuit elke hoek, lyk hulle gewoonlik verskillend.' },
        { difficulty: 'Medium', question: 'ʼn Bal is ʼn perfekte sfeer. Sou sy vooraansig, syaansig en bo-aansig almal dieselfde of verskillend lyk?', answer: 'Dieselfde', checkMode: 'self', explanation: 'ʼn Sfeer lyk soos ʼn sirkel vanuit elke rigting, so sy voor-, sy- en bo-aansigte is almal identiese sirkels.' },
        { difficulty: 'Medium', question: 'ʼn Boks het net ʼn handvatsel op sy bo-vlak. Watter aansig sou die handvatsel wys: die bo-aansig of die vooraansig?', answer: 'Bo-aansig', checkMode: 'auto', correctAnswer: 'Bo-aansig', correctAnswers: ['Bo-aansig', 'bo-aansig', 'die bo-aansig'], explanation: 'Aangesien die handvatsel op die bo-vlak is, sou net die bo-aansig (reguit af kyk) dit wys.' },
        { difficulty: 'Medium', question: 'Sou die syaansig van ʼn hoë, smal drinkglas en ʼn kort, wye beker dieselfde of verskillend lyk, selfs al is hulle bo-kante dieselfde grootte?', answer: 'Verskillend', checkMode: 'auto', correctAnswer: 'Verskillend', correctAnswers: ['Verskillend', 'verskillend'], explanation: 'Die syaansig wys hoogte, so ʼn hoë glas en ʼn kort beker sou duidelik verskillende syaansigte hê, selfs met bypassende bo-kant groottes.' },

        // Blok 4 — Identifiseer voorwerpe/aansigte vanaf leidrade (Medium)
        { difficulty: 'Medium', question: 'ʼn Prent wys ʼn eenvoudige sirkel met ʼn klein driehoek-vormige handvatsel wat na een kant toe uitsteek. Watter alledaagse voorwerp se bo-aansig kan dit wees?', answer: 'ʼn Koppie (of beker)', checkMode: 'self', explanation: 'ʼn Koppie van bo gesien wys ʼn ronde rand met die handvatsel wat na een kant toe uitsteek.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="70" r="45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="100" cy="70" r="30" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M145 55 C170 55 170 90 145 88" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'Jy word ʼn ronde, hoë buitelyn gewys wat effens smaller word na die bokant toe, met geen plat rande nie. Watter alledaagse voorwerp kan hierdie vooraansig behoort?', answer: 'ʼn Appel (of soortgelyke ronde vrug)', checkMode: 'self', explanation: 'ʼn Ronde buitelyn sonder reguit rande pas by die vooraansig van ʼn ronde voorwerp soos ʼn appel.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><path d="M100 25 C130 25 150 45 148 70 C146 100 125 118 100 118 C75 118 54 100 52 70 C50 45 70 25 100 25 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M100 25 C98 18 102 12 108 10" fill="none" stroke="#2563eb" stroke-width="2"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Prent wys ʼn wye rand-vorm met ʼn kleiner sirkel in die middel vir die kroon. Watter voorwerp en watter aansig beskryf dit?', answer: 'Die bo-aansig van ʼn hoed', checkMode: 'self', explanation: 'As jy reguit af op ʼn hoed kyk, sien jy die wye rand as ʼn buitenste sirkel en die kroon as ʼn kleiner sirkel binne-in.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="70" r="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="70" r="25" fill="none" stroke="#2563eb" stroke-width="2"/></svg>' },
        { difficulty: 'Medium', question: 'As twee verskillende aansigte van dieselfde voorwerp amper identies lyk, wat kan dit jou vertel oor die voorwerp se vorm?', answer: 'Dit kan beteken die voorwerp is simmetries of rond op ʼn manier wat soortgelyk lyk vanuit veelvuldige rigtings.', checkMode: 'self', explanation: 'Ronde of simmetriese voorwerpe, soos ʼn bal of ʼn silinder vanuit sekere hoeke bekyk, kan baie soortgelyke aansigte oplewer.' },

        // Blok 5 — Tonele, klaskamers, geboue (Medium)
        { difficulty: 'Medium', question: 'ʼn Skoolveld het ʼn netbalbaan, ʼn snoepie en ʼn hek. Watter aansig sou die beste wys hoe hierdie relatief tot mekaar geposisioneer is: ʼn syaansig of ʼn planaansig?', answer: 'Planaansig', checkMode: 'auto', correctAnswer: 'Planaansig', correctAnswers: ['Planaansig', 'planaansig', 'die planaansig', 'bo-aansig', 'die bo-aansig'], explanation: 'ʼn Planaansig van bo wys die posisie van elke kenmerk op die veld sonder dat enigiets die uitsig blokkeer.' },
        { difficulty: 'Medium', question: 'Waarom gebruik kaarte ʼn planaansig (bo-aansig) in plaas van ʼn syaansig?', answer: 'Omdat ʼn planaansig die posisie van alles wys vanaf reguit bo, sonder dat enigiets agter geboue, bome of heuwels weggesteek is.', checkMode: 'self', explanation: 'ʼn Syaansig sou baie kenmerke agter ander wegsteek, terwyl ʼn planaansig elke posisie duidelik wys, en dis waarom kaarte dit gebruik.' },
        { difficulty: 'Medium', question: 'Terwyl jy by die klaskamerdeur staan, sien jy dat die lessenaars agterin gedeeltelik weggesteek is agter die lessenaars voorin. Is dit ʼn kenmerk van ʼn syaansig of ʼn planaansig?', answer: 'Syaansig', checkMode: 'auto', correctAnswer: 'Syaansig', correctAnswers: ['Syaansig', 'syaansig', 'die syaansig'], explanation: 'Voorwerpe wat agter ander voorwerpe wegsteek is tipies van ʼn syaansig, aangesien ʼn planaansig van bo elke lessenaar duidelik sou wys.' },

        // Blok 6 — Multi-deel redenering (Moeilik)
        { difficulty: 'Hard', question: 'ʼn Eenvoudige gebou het ʼn driehoekige dak bo-op ʼn reghoekige prisma-basis. ʼn Venster is net op die voormuur.\na) Watter aansig sou die driehoekige vorm van die dak die duidelikste wys: die vooraansig of die bo-aansig?\nb) Watter aansig sou die venster wys: die vooraansig of die bo-aansig?', answer: 'a) Vooraansig   b) Vooraansig', checkMode: 'auto', parts: [
          { label: 'a) Aansig wat die driehoekige dak-vorm wys', correctAnswer: 'Vooraansig', correctAnswers: ['Vooraansig', 'vooraansig', 'die vooraansig'], explanation: 'As jy na die gebou kyk van voor (of die kant), sien jy die driehoekige dak-vorm wat bo die reghoekige basis uitstyg. Van bo af sou die dak soos ʼn reghoek lyk, nie ʼn driehoek nie.' },
          { label: 'b) Aansig wat die venster wys', correctAnswer: 'Vooraansig', correctAnswers: ['Vooraansig', 'vooraansig', 'die vooraansig'], explanation: 'Aangesien die venster op die voormuur is, wys net die vooraansig dit — die bo-aansig wat op die dak afkyk sou dit glad nie wys nie.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy verstaan duidelik hoe voor-, sy- en bo-aansigte werk vir alledaagse voorwerpe en tonele.' },
        { minScore: 15, message: 'Goeie werk! Jy verstaan die meeste idees oor aansigte — gaan die vrae na wat jy verkeerd gehad het.' },
        { minScore: 10, message: 'Goeie poging! Gaan deur die studiegids oor aansigte en gesigspunte, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Wat is ʼn aansig? (Maklik)
        { difficulty: 'Easy', question: 'Wat noem ons dit wanneer ʼn kyker reguit af op ʼn voorwerp kyk vanaf bo?', answer: 'Bo-aansig (of planaansig)', checkMode: 'auto', correctAnswer: 'Bo-aansig', correctAnswers: ['Bo-aansig', 'bo-aansig', 'die bo-aansig', 'planaansig', 'die planaansig', 'Bo-aansig (of planaansig)'], explanation: 'Om reguit af op ʼn voorwerp te kyk vanaf bo, word die bo-aansig of planaansig genoem.' },
        { difficulty: 'Easy', question: 'Lewer dieselfde voorwerp altyd dieselfde aansig, ongeag waar die kyker staan?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Die aansig verander afhangende van die kyker se posisie, al bly die voorwerp self dieselfde.' },
        { difficulty: 'Easy', question: 'Voltooi die sin: ʼn aansig pas altyd by ʼn spesifieke _______.', answer: 'Gesigspunt', checkMode: 'auto', correctAnswer: 'Gesigspunt', correctAnswers: ['Gesigspunt', 'gesigspunt'], explanation: 'ʼn Aansig pas altyd by ʼn gesigspunt — die presiese posisie en rigting waarvandaan die kyker kyk.' },
        { difficulty: 'Easy', question: 'As jy links van ʼn boks staan en daarna kyk, watter aansig sien jy?', answer: 'Syaansig', checkMode: 'auto', correctAnswer: 'Syaansig', correctAnswers: ['Syaansig', 'syaansig', 'die syaansig'], explanation: 'As jy links of regs van ʼn voorwerp staan en daarna kyk, kry jy die syaansig.' },

        // Blok 2 — Aansigte pas (Maklik-Medium)
        { difficulty: 'Easy', question: 'ʼn Toe boks het ʼn plakker net op sy bo-vlak. Watter aansig sou die plakker wys?', answer: 'Bo-aansig', checkMode: 'auto', correctAnswer: 'Bo-aansig', correctAnswers: ['Bo-aansig', 'bo-aansig', 'die bo-aansig'], explanation: 'Aangesien die plakker op die bo-vlak is, sou net die bo-aansig (reguit af kyk) dit wys.' },
        { difficulty: 'Medium', question: 'ʼn Hoed word onderstebo neergesit, met die rand na bo. As jy nou reguit daarop afkyk, sou jy ʼn klein sirkel (die kroonpunt) of ʼn groot sirkel (die rand) sien?', answer: 'ʼn Groot sirkel (die rand)', checkMode: 'self', explanation: 'Met die hoed onderstebo, is die wye rand na bo gedraai, so ʼn bo-aansig reguit af sou die groot randsirkel na jou toe wys.' },
        { difficulty: 'Medium', question: 'ʼn Toe vuurhoutjiedosie is baie langer as wat dit hoog of wyd is. Sou sy bo-aansig ʼn lang, dun reghoek of ʼn vierkant wees?', answer: 'ʼn Lang, dun reghoek', checkMode: 'auto', correctAnswer: 'ʼn Lang, dun reghoek', correctAnswers: ['ʼn Lang, dun reghoek', 'lang, dun reghoek', 'reghoek', 'ʼn reghoek'], explanation: 'Aangesien die dosie baie langer is as wat dit wyd is, is sy bo-aansig (die buitelyn van sy basis) ʼn lang, dun reghoek.' },
        { difficulty: 'Medium', question: 'ʼn Appel het sy stingel reguit na bo wysend. In die vooraansig, sou die stingel soos ʼn kolletjie of soos ʼn klein lyntjie wat bo-uit steek, lyk?', answer: 'ʼn Klein lyntjie wat bo-uit steek', checkMode: 'self', explanation: 'Van voor (of die kant) gesien, verskyn die regop stingel as ʼn klein lyntjie of steeltjie wat bo die ronde lyf van die appel uitsteek.' },

        // Blok 3 — Redenering oor wat sigbaar is (Medium)
        { difficulty: 'Medium', question: 'Waarom kan die vooraansig en die bo-aansig van dieselfde boks heeltemal verskillend lyk?', answer: 'Omdat die vooraansig die hoogte en breedte van die boks wys, terwyl die bo-aansig die lengte en breedte van die basis wys — hulle vang verskillende kante van dieselfde voorwerp vas.', checkMode: 'self', explanation: 'Verskillende aansigte wys verskillende vlakke of hoeke van ʼn voorwerp, so tensy die voorwerp ʼn kubus is, lyk hierdie aansigte dikwels redelik verskillend.' },
        { difficulty: 'Medium', question: 'ʼn Kubus-vormige boks het al sy vlakke presies dieselfde grootte en vorm. Sou sy vooraansig en syaansig dieselfde of verskillend lyk?', answer: 'Dieselfde', checkMode: 'self', explanation: 'Aangesien elke vlak van ʼn kubus ʼn identiese vierkant is, wys die vooraansig en syaansig van ʼn kubus-vormige boks altwee dieselfde vierkantige buitelyn.' },
        { difficulty: 'Medium', question: 'Sou die bo-aansig van ʼn hoë drinkglas jou enigiets oor sy hoogte vertel?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'ʼn Bo-aansig wys net die buitelyn van reguit bo af, wat die breedte of vorm van die basis openbaar, maar nooit die hoogte nie.' },
        { difficulty: 'Medium', question: 'ʼn Skoen se syaansig wys veters langs die boonste rand. Sou jy verwag dat die vooraansig (na die toon kykend) ook duidelik die veters wys?', answer: 'Ja, gedeeltelik — die veters sou naby die bokant van die vooraansig sigbaar wees, aangesien hulle van die voorkant af na die middel van die skoen loop.', checkMode: 'self', explanation: 'Aangesien veters gewoonlik van die voorkant na die middel van die skoen loop, sou beide die vooraansig en die syaansig ten minste ʼn deel van die veters wys.' },

        // Blok 4 — Identifiseer voorwerpe/aansigte vanaf leidrade (Medium)
        { difficulty: 'Medium', question: 'ʼn Prent wys ʼn eenvoudige reghoek met reguit rande en glad geen ronde vorms nie. Watter alledaagse voorwerp se vooraansig kan dit beskryf: ʼn appel of ʼn graankosboks?', answer: 'ʼn Graankosboks', checkMode: 'auto', correctAnswer: 'ʼn Graankosboks', correctAnswers: ['ʼn Graankosboks', 'graankosboks', 'ʼn graankosboks'], explanation: 'Reguit rande en ʼn reghoekige buitelyn pas by ʼn boks, nie ʼn ronde voorwerp soos ʼn appel nie.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="20" width="110" height="100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Prent wys ʼn wye, geboë buitelyn wat na bo toe smaller word, sonder enige reguit lyne. Watter aansig van ʼn partytjiehoed (keël) is dit waarskynlik?', answer: 'Syaansig (of vooraansig)', checkMode: 'self', explanation: 'ʼn Keël-vormige hoed van die kant (of voor) gesien wys ʼn geboë, taps toelopende buitelyn. Die bo-aansig sou eerder ʼn eenvoudige sirkel vir die rand wys.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><path d="M110 15 L165 115 C165 122 140 128 110 128 C80 128 55 122 55 115 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="115" rx="55" ry="10" fill="none" stroke="#2563eb" stroke-width="1.5"/></svg>' },
        { difficulty: 'Medium', question: 'Jy word vertel ʼn voorwerp se bo-aansig is ʼn perfekte sirkel. Kan hierdie voorwerp steeds ʼn boks (reghoekige prisma) wees?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'ʼn Reghoekige prisma het altyd ʼn reghoekige (of vierkantige) bo-aansig, nooit ʼn perfekte sirkel nie, so die voorwerp kan nie ʼn boks wees nie.' },
        { difficulty: 'Medium', question: 'Waarom is dit soms nodig om meer as een aansig van ʼn voorwerp te sien voordat jy dit korrek kan identifiseer?', answer: 'Omdat ʼn enkele aansig soms soortgelyk kan lyk vir verskeie verskillende voorwerpe, gee die sien van meer as een aansig ekstra leidrade wat die identifisering van die voorwerp meer seker maak.', checkMode: 'self', explanation: 'Een aansig alleen kan dubbelsinnig wees — die kombinasie van aansigte verminder die kans om verskillende voorwerpe wat vanuit net een hoek soortgelyk lyk, te verwar.' },

        // Blok 5 — Tonele, klaskamers, geboue (Medium)
        { difficulty: 'Medium', question: 'ʼn Planaansig van die skoolveld wys die netbalbaan as ʼn reghoek en die snoepie as ʼn klein vierkant. Wat ontbreek in hierdie planaansig wat ʼn syaansig sou wys?', answer: 'Die hoogte van die geboue en enige kenmerke wat regop staan, soos pale, bome of die hoogte van mure.', checkMode: 'self', explanation: 'ʼn Planaansig wys net buitelyne van bo, so hoogte-inligting (van geboue, pale, bome) ontbreek — ʼn syaansig sou nodig wees om dit te wys.' },
        { difficulty: 'Medium', question: 'ʼn Bouer wil presies weet hoe ver twee klaskamers van mekaar af op die skoolterrein is. Moet hulle ʼn syaansig of ʼn planaansig gebruik om dit te meet?', answer: 'Planaansig', checkMode: 'auto', correctAnswer: 'Planaansig', correctAnswers: ['Planaansig', 'planaansig', 'die planaansig', 'bo-aansig', 'die bo-aansig'], explanation: 'ʼn Planaansig van bo wys akkurate afstande tussen posisies op die grond, wat presies is wat nodig is om te meet hoe ver die klaskamers uitmekaar is.' },
        { difficulty: 'Medium', question: 'Terwyl jy buite ʼn eenvoudige gebou staan en na sy voormuur kyk, sien jy ʼn sy/voor-aansig of ʼn planaansig?', answer: 'Sy-/vooraansig', checkMode: 'self', explanation: 'As jy na die muur van ʼn gebou kyk vanaf grondvlak, eerder as van bo af, kry jy ʼn voor- (of sy-) aansig, nie ʼn planaansig nie.' },

        // Blok 6 — Multi-deel redenering (Moeilik)
        { difficulty: 'Hard', question: 'ʼn Gieter het ʼn tuit aan een kant en ʼn handvatsel aan die teenoorgestelde kant, en dit is hoër as wat dit wyd is.\na) Watter aansig sou beide die tuit en die handvatsel wys wat na teenoorgestelde kante uitsteek: die voor-/agteraansig of die bo-aansig?\nb) Watter aansig sou die beste wys hoe hoog die gieter is: die bo-aansig of die syaansig?', answer: 'a) Bo-aansig   b) Syaansig', checkMode: 'auto', parts: [
          { label: 'a) Aansig wat beide tuit en handvatsel wys', correctAnswer: 'Bo-aansig', correctAnswers: ['Bo-aansig', 'bo-aansig', 'die bo-aansig'], explanation: 'As jy reguit af van bo kyk, sou beide die tuit en die handvatsel sigbaar wees wat na teenoorgestelde kante van die ronde lyf uitsteek.' },
          { label: 'b) Aansig wat die hoogte wys', correctAnswer: 'Syaansig', correctAnswers: ['Syaansig', 'syaansig', 'die syaansig'], explanation: 'Hoogte kan net beoordeel word van ʼn voor-, agter- of syaansig, nie van reguit bo af nie — so die syaansig wys die beste hoe hoog die gieter is.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy verstaan duidelik hoe voor-, sy- en bo-aansigte werk vir alledaagse voorwerpe en tonele.' },
        { minScore: 15, message: 'Goeie werk! Jy verstaan die meeste idees oor aansigte — gaan die vrae na wat jy verkeerd gehad het.' },
        { minScore: 10, message: 'Goeie poging! Gaan deur die studiegids oor aansigte en gesigspunte, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

  ],
}
