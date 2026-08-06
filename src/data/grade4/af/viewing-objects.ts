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
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">As jy net een aansig gewys word en gevra word "watter voorwerp is dit?" of "watter aansig is dit?", verbeel jou die voorwerp in jou gedagtes en dink daaraan om daaromheen te loop. Vra watter posisie jy sou moes staan om presies daardie prentjie te sien.</p>
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
        { difficulty: 'Easy', question: 'Wat noem ons die prentjie wat jy sien wanneer jy na ʼn voorwerp kyk vanaf een spesifieke plek?', checkMode: 'auto', options: ['ʼn Gesigspunt', 'ʼn Aansig', 'ʼn Vorm', 'ʼn Diagram'], correctIndex: 1, explanation: 'Die prentjie wat jy vanaf ʼn spesifieke plek sien, word ʼn aansig genoem. ʼn Gesigspunt is die posisie waar jy staan, nie die prentjie self nie — en die voorwerp se vorm bly dieselfde, ongeag van waar jy kyk.' },
        { difficulty: 'Easy', question: 'Watter drie aansigte word gebruik om te beskryf hoe ʼn alledaagse voorwerp lyk?', checkMode: 'auto', options: ['Vooraansig, syaansig, bo-aansig', 'Vooraansig, agteraansig, bo-aansig', 'Linkeraansig, regteraansig, bo-aansig', 'Vooraansig, syaansig, binne-aansig'], correctIndex: 0, explanation: 'Die drie aansigte wat gebruik word, is die vooraansig, die syaansig en die bo-aansig (ook die planaansig genoem). ʼn "Agteraansig" en ʼn "binne-aansig" is nie een van die drie standaardaansigte nie, en om net links en regs te noem, laat die vooraansig heeltemal uit.' },
        { difficulty: 'Easy', question: 'As jy direk voor ʼn boks staan en reguit daarna kyk, watter aansig sien jy?', checkMode: 'auto', options: ['Bo-aansig', 'Syaansig', 'Vooraansig', 'Planaansig'], correctIndex: 2, explanation: 'As jy direk voor ʼn voorwerp staan en reguit daarna kyk, kry jy die vooraansig. Die bo-aansig (ook die planaansig genoem) sou beteken jy kyk reguit af van bo, en die syaansig sou beteken jy staan links of regs.' },
        { difficulty: 'Easy', question: 'Wat is nog ʼn naam vir die bo-aansig?', checkMode: 'auto', options: ['Syaansig', 'Vooraansig', 'Deursnee', 'Planaansig'], correctIndex: 3, explanation: 'Die bo-aansig word ook die planaansig genoem, want jy kyk reguit af soos op ʼn kaartplan. Die voor- en syaansigte is ander gesigspunte, nie nog ʼn naam vir die bo-aansig nie.' },

        // Blok 2 — Aansigte pas (Maklik-Medium)
        { difficulty: 'Easy', question: 'Verander ʼn voorwerp van vorm wanneer jy daarom loop en dit van ʼn ander plek af bekyk?', checkMode: 'auto', options: ['Ja, die voorwerp verander fisies van vorm soos jy beweeg', 'Nee, net die prentjie wat jy sien verander, nie die voorwerp self nie', 'Ja, maar net as die voorwerp rond is', 'Nee, want die voorwerp hou op om te bestaan tussen aansigte'], correctIndex: 1, explanation: 'Die voorwerp self verander nooit — net jou gesigspunt verander, wat maak dat jy ʼn ander prentjie (aansig) van dieselfde voorwerp sien.' },
        { difficulty: 'Medium', question: 'ʼn Koppie het ʼn handvatsel aan een kant. Vanuit watter aansig sou jy die handvatsel heeltemal nie kan sien nie?', checkMode: 'auto', options: ['Die aansig vanaf dieselfde kant as die handvatsel', 'Die bo-aansig, reguit van bo af', 'Die aansig vanaf die kant reg teenoor die handvatsel', 'Die vooraansig, na die lyf van die koppie kykend'], correctIndex: 2, explanation: 'As jy vanaf die kant reg teenoor die handvatsel kyk, is die handvatsel heeltemal weggesteek agter die lyf van die koppie. Van bo af sou jy dit steeds sien uitsteek na een kant toe, en van dieselfde kant of voor af sou dit ten minste gedeeltelik sigbaar wees.' },
        { difficulty: 'Medium', question: 'Jy kyk reguit af in ʼn oop koppie in. Watter twee ronde vorms sou jy verwag om te sien?', checkMode: 'auto', options: ['Die rand van die koppie en die opening (die binneste sirkel)', 'Die handvatsel en die basis van die koppie', 'Die rand van die koppie en sy skaduwee op die tafel', 'Twee identiese handvatsels aan teenoorgestelde kante'], correctIndex: 0, explanation: 'As jy reguit af in ʼn koppie kyk (die bo-aansig), sien jy die buitenste rand as een sirkel en die binneste opening as ʼn tweede sirkel. Die handvatsel is nie rond nie, en ʼn koppie het gewoonlik net een handvatsel.' },
        { difficulty: 'Medium', question: 'ʼn Toe kartondoos is soos ʼn reghoekige prisma gevorm. Sou die bo-aansig ʼn sirkel of ʼn reghoek wys?', checkMode: 'auto', options: ['ʼn Sirkel, want alle bo-aansigte is rond', 'ʼn Driehoek, want jy kyk af op ʼn hoek', 'ʼn Reghoek, wat by die plat bo-vlak van die boks pas', 'ʼn Vierkant, ongeag watter vorm die boks het'], correctIndex: 2, explanation: 'As jy reguit af op ʼn reghoekige prisma kyk, sien jy die plat reghoekige bokant — ʼn reghoek, nie ʼn sirkel, driehoek of (noodwendig) ʼn vierkant nie.' },

        // Blok 3 — Redenering oor wat sigbaar is (Medium)
        { difficulty: 'Medium', question: 'Waarom wys die bo-aansig van ʼn voorwerp nooit sy hoogte nie?', checkMode: 'auto', options: ['Omdat hoogte net met ʼn liniaal gemeet kan word, en nooit in enige aansig gesien kan word nie', 'Omdat die bo-aansig eintlik wel hoogte wys, net onderstebo', 'Omdat hoë voorwerpe geen bo-oppervlak het om op af te kyk nie', 'Omdat jy, as jy reguit af kyk, net die plat buitelyn van die bo-oppervlak sien — nie hoe hoog die voorwerp is nie'], correctIndex: 3, explanation: 'ʼn Bo-aansig wys breedte en lengte (die buitelyn van bo), maar nie hoogte nie, aangesien hoogte net beoordeel kan word deur ʼn voorwerp van voor of die kant te bekyk.' },
        { difficulty: 'Medium', question: 'ʼn Hoë drinkglas en ʼn kort, wye beker het altwee ʼn ronde basis van dieselfde grootte. Sou hulle bo-aansigte dieselfde of verskillend lyk?', checkMode: 'auto', options: ['Verskillend, want die hoë glas het ʼn groter bo-aansig', 'Dieselfde, want die bo-aansig wys net die buitelyn van die basis, nie die hoogte nie', 'Verskillend, want hoogte verander altyd die bo-aansig', 'Dieselfde, maar net as altwee glase leeg is'], correctIndex: 1, explanation: 'Aangesien die bo-aansig net die buitelyn van bo wys, en altwee basisse dieselfde grootte sirkel is, sou hulle bo-aansigte identies lyk, selfs al verskil hulle hoogtes.' },
        { difficulty: 'Medium', question: 'Watter aansig van ʼn partytjiehoed (ʼn keël-vorm) sou ʼn sirkel wys?', checkMode: 'auto', options: ['Die syaansig', 'Die vooraansig', 'Die bo-aansig', 'Geen van die aansigte wys ʼn sirkel nie'], correctIndex: 2, explanation: 'As jy reguit af op ʼn keël-vormige hoed kyk, sien jy die ronde rand as ʼn sirkel. Van die kant of voor af sou jy eerder ʼn driehoek-agtige buitelyn sien.' },
        { difficulty: 'Medium', question: 'ʼn Appel staan op ʼn tafel. Van die vooraansig af sien jy ʼn ronde buitelyn. Wat sou jy verwag die bo-aansig sal lyk?', checkMode: 'auto', options: ['ʼn Eenvoudige reghoek, aangesien die bo-aansig altyd reguit rande het', 'ʼn Heeltemal ander, gekartelde buitelyn', 'Ook ʼn ronde, min of meer sirkelvormige buitelyn', 'ʼn Enkele reguit lyn, aangesien vrugte geen sigbare bokant het nie'], correctIndex: 2, explanation: 'Aangesien ʼn appel rond is van elke kant af, wys beide die vooraansig en die bo-aansig ʼn soortgelyke ronde buitelyn.' },

        // Blok 4 — Identifiseer voorwerpe/aansigte vanaf leidrade (Medium)
        { difficulty: 'Medium', question: 'Jy word ʼn prent gewys met ʼn smal, hoë buitelyn en glad geen ronde vorms nie. Is dit meer waarskynlik ʼn bo-aansig of ʼn syaansig?', checkMode: 'auto', options: ['ʼn Bo-aansig, want bo-aansigte is altyd smal', 'ʼn Syaansig, want ʼn smal, hoë buitelyn dui op hoogte', 'ʼn Bo-aansig, want dit wys die vorm van die basis', 'Nie een van beide nie — dit kan net ʼn vooraansig wees'], correctIndex: 1, explanation: 'ʼn Bo-aansig wys gewoonlik die buitelyn van die basis (dikwels ronder of platter), terwyl ʼn smal, hoë buitelyn wat hoogte aandui meer tipies is van ʼn voor- of syaansig.' },
        { difficulty: 'Medium', question: 'ʼn Prent wys ʼn skoen se lang buitelyn van hak tot toon, insluitend die veters langs die boonste rand. Watter aansig is dit?', checkMode: 'auto', options: ['Bo-aansig', 'Vooraansig', 'Syaansig', 'Planaansig (reguit van bo af)'], correctIndex: 2, explanation: 'Die volle buitelyn van hak tot toon, met veters sigbaar langs die boonste rand, is wat jy sien as jy aan die kant van die skoen staan. Die bo-aansig sou eerder ʼn voetspoor-vormige buitelyn wys, en die vooraansig sou net die smal toon-kant wys.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><path d="M30 105 C30 85 40 70 60 65 C80 60 100 62 120 58 C145 53 165 48 185 55 C195 58 195 75 185 85 C160 100 100 108 60 108 C45 108 32 108 30 105 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="95" y1="60" x2="80" y2="80" stroke="#2563eb" stroke-width="2"/><line x1="110" y1="58" x2="95" y2="80" stroke="#2563eb" stroke-width="2"/><line x1="125" y1="58" x2="112" y2="80" stroke="#2563eb" stroke-width="2"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Prent wys ʼn ronde, voetspoor-vormige buitelyn met die veters sigbaar dwarsoor die middel. Watter aansig is dit heel waarskynlik?', checkMode: 'auto', options: ['Vooraansig', 'Syaansig', 'Agteraansig', 'Bo-aansig'], correctIndex: 3, explanation: 'As jy reguit af op ʼn skoen kyk, kry jy ʼn voetspoor-vormige buitelyn met die veters sigbaar op die bo-oppervlak — dit is die bo-aansig. Die syaansig sou eerder die lang hak-tot-toon buitelyn wys.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><path d="M110 15 C150 15 170 35 170 65 C170 95 155 120 110 125 C65 120 50 95 50 65 C50 35 70 15 110 15 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="45" x2="130" y2="45" stroke="#2563eb" stroke-width="2"/><line x1="85" y1="60" x2="135" y2="60" stroke="#2563eb" stroke-width="2"/><line x1="82" y1="75" x2="138" y2="75" stroke="#2563eb" stroke-width="2"/></svg>' },
        { difficulty: 'Medium', question: 'Jy kry net die syaansig van ʼn voorwerp en moet dit identifiseer. Waarom kan dit soms moeilik wees?', checkMode: 'auto', options: ['Omdat een enkele aansig net ʼn deel van die vorm wys, kan verskillende voorwerpe soortgelyk lyk vanuit net een gesigspunt', 'Omdat syaansigte altyd wasiger is as vooraansigte', 'Omdat dit nooit moontlik is om ʼn voorwerp vanuit enige enkele aansig te identifiseer nie', 'Omdat die syaansig die voorwerp se presiese hoogte in sentimeter wys, wat verwarrend is'], correctIndex: 0, explanation: 'Een aansig alleen gee nie altyd genoeg inligting nie — dis waarom veelvuldige aansigte dikwels saam gebruik word. Dit is nie onmoontlik om ʼn voorwerp vanuit een aansig te identifiseer nie, net soms dubbelsinnig.' },

        // Blok 5 — Tonele, klaskamers, geboue (Medium)
        { difficulty: 'Medium', question: 'Watter vak by die skool gebruik ook die idee van planaansigte (bo-aansigte), veral vir kaarte?', checkMode: 'auto', options: ['Musiek', 'Liggaamlike Opvoeding', 'Geskiedenis', 'Geografie'], correctIndex: 3, explanation: 'Planaansigte hou nou verband met Geografie, waar kaarte geteken word as ʼn aansig wat reguit van bo af kyk.' },
        { difficulty: 'Medium', question: 'Waarom is ʼn planaansig van ʼn klaskamer nuttiger as ʼn syaansig om presies te wys waar elke lessenaar geposisioneer is?', checkMode: 'auto', options: ['Omdat ʼn planaansig die hele vloer van bo wys sonder dat iets weggesteek is, terwyl ʼn syaansig sommige lessenaars agter ander kan wegsteek', 'Omdat ʼn planaansig altyd op ʼn groter skaal geteken word as ʼn syaansig', 'Omdat ʼn syaansig meer lessenaars wys as ʼn planaansig', 'Omdat ʼn planaansig die hoogte van elke lessenaar wys, wat ʼn syaansig nie kan nie'], correctIndex: 0, explanation: 'Van die kant af kan meubels ander meubels blokkeer. Van reguit bo af is elke voorwerp se posisie op een slag sigbaar — al wys ʼn planaansig eintlik minder oor hoogte, nie meer nie.' },
        { difficulty: 'Medium', question: 'As jy by die klaskamerdeur staan en reguit inkyk, is jy meer waarskynlik ʼn syaansig of ʼn planaansig van die kamer aan het?', checkMode: 'auto', options: ['ʼn Planaansig, want jy kan die hele kamer sien', 'ʼn Syaansig, want jy kyk oor die kamer, nie af daarop nie', 'ʼn Planaansig, want deure gee altyd ʼn voëlvlug-aansig', 'Nie een van beide nie — om by ʼn deur te staan gee geen bruikbare aansig nie'], correctIndex: 1, explanation: 'As jy by die deur staan en oor die kamer kyk (nie afkyk nie), kry jy ʼn syaansig, nie ʼn planaansig nie. ʼn Planaansig sou vereis dat jy reguit van bo af kyk, soos ʼn voël wat oor die kamer vlieg.' },

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
        { difficulty: 'Easy', question: 'Waar of onwaar: die voorwerp verander van vorm afhangende van waar die kyker staan.', checkMode: 'auto', options: ['Onwaar — die voorwerp bly dieselfde; net wat die kyker sien, verander', 'Waar — die voorwerp buig effens soos die kyker beweeg', 'Waar — maar net vir ronde voorwerpe', 'Onwaar — want kykers kan nie werklik om regte voorwerpe beweeg nie'], correctIndex: 0, explanation: 'Die voorwerp bly presies dieselfde. Net die kyker se posisie verander, wat verander wat hulle sien — dit buig nie fisies of verander van vorm nie.' },
        { difficulty: 'Easy', question: 'As jy afbuk en na ʼn voorwerp kyk vanaf sy linker- of regterkant, watter aansig sien jy?', checkMode: 'auto', options: ['Bo-aansig', 'Syaansig', 'Vooraansig', 'Planaansig'], correctIndex: 1, explanation: 'As jy na ʼn voorwerp kyk vanaf sy linker- of regterkant, kry jy die syaansig. Om af te buk na sy vlak verander nie watter aansig dit is nie — dit is waar jy staan (links/regs) wat saak maak.' },
        { difficulty: 'Easy', question: 'Watter woord beskryf presies waar ʼn kyker staan en na watter kant hulle kyk?', checkMode: 'auto', options: ['ʼn Aansig', 'ʼn Plan', 'ʼn Gesigspunt', 'ʼn Diagram'], correctIndex: 2, explanation: 'ʼn Gesigspunt is die posisie en rigting waarvandaan ʼn kyker kyk. ʼn Aansig is die prentjie wat uit daardie gesigspunt kom, nie die posisie self nie.' },
        { difficulty: 'Easy', question: 'Watter aansig kry jy deur reguit af op ʼn voorwerp te kyk vanaf bo?', checkMode: 'auto', options: ['Syaansig', 'Vooraansig', 'Agteraansig', 'Bo-aansig'], correctIndex: 3, explanation: 'As jy reguit af kyk vanaf bo, kry jy die bo-aansig, ook die planaansig genoem.' },

        // Blok 2 — Aansigte pas (Maklik-Medium)
        { difficulty: 'Easy', question: 'ʼn Wolmus het ʼn klein bolletjie bo-op. Watter aansig sou duidelik wys dat die bolletjie in die middel sit?', checkMode: 'auto', options: ['Die bo-aansig', 'Die vooraansig', 'Die syaansig', 'Geen aansig wys die bolletjie nie'], correctIndex: 0, explanation: 'As jy reguit af op die mus kyk (die bo-aansig), sien jy die bolletjie in die middel van die ronde bokant sit. Van voor of die kant af sou die bolletjie eerder aan die boonste rand verskyn, nie in ʼn sigbare middel nie.' },
        { difficulty: 'Medium', question: 'Verbeel jou die skoenboks lê plat met sy lang kant na jou toe. ʼn Prentjie is net op een van sy kort punte gedruk. Vanuit watter twee aansigte sou jy moontlik daardie prentjie kon sien?', checkMode: 'auto', options: ['Voor en bo', 'Voor en een kant', 'Bo en een kant', 'Net die bo-aansig'], correctIndex: 1, explanation: 'Die kort punt kan as óf die "voorkant" óf ʼn "sykant" bekyk word, afhangende van hoe die boks gedraai is, maar die bo-aansig sou net die plat deksel wys, nie die gedrukte punt nie.' },
        { difficulty: 'Medium', question: 'Jy kyk van die kant af na ʼn appel en sien ʼn ronde buitelyn met ʼn klein stingel wat bo-uit steek. Sou die bo-aansig ook die stingel wys?', checkMode: 'auto', options: ['Nee, die stingel is net vanaf die kant sigbaar', 'Nee, want die bo-aansig wys nooit klein besonderhede nie', 'Ja, die stingel sou as ʼn klein kolletjie of punt in die middel verskyn', 'Ja, maar net as die appel glad geen stingel het nie'], correctIndex: 2, explanation: 'As jy reguit af op die appel kyk, sou die stingel as ʼn klein kolletjie of punt in die middel van die ronde buitelyn verskyn.' },
        { difficulty: 'Medium', question: 'ʼn Toe reghoekige prisma-boks is langer as wat dit wyd is, en baie korter in hoogte as in lengte. Sou sy bo-aansig ʼn vierkant of ʼn reghoek wees?', checkMode: 'auto', options: ['ʼn Vierkant, want die boks is kort', 'ʼn Sirkel, want die boks is plat', 'ʼn Vierkant, want alle bo-aansigte is vierkantig', 'ʼn Reghoek, wat by die vorm van sy basis pas'], correctIndex: 3, explanation: 'Aangesien die boks langer is as wat dit wyd is, is sy bo-aansig (die buitelyn van sy basis) ʼn reghoek, nie ʼn vierkant nie. Sy lae hoogte beïnvloed die syaansig, nie die bo-aansig nie.' },

        // Blok 3 — Redenering oor wat sigbaar is (Medium)
        { difficulty: 'Medium', question: 'Verduidelik waarom die vooraansig en die syaansig van ʼn skoen gewoonlik verskillend van mekaar lyk.', checkMode: 'auto', options: ['Omdat die vooraansig die smaller toon-kant wys, terwyl die syaansig die lang hak-tot-toon buitelyn wys — hulle vang verskillende dele van die voorwerp vas', 'Omdat ʼn skoen van vorm verander na gelang van watter kant jy dit bekyk', 'Omdat die vooraansig altyd kleiner is as die syaansig, ongeag die voorwerp', 'Omdat net die syaansig deur die skoen se veters beïnvloed word'], correctIndex: 0, explanation: 'Voor- en syaansigte vang verskillende vlakke van die voorwerp vas, so tensy die voorwerp simmetries is vanuit elke hoek, lyk hulle gewoonlik verskillend.' },
        { difficulty: 'Medium', question: 'ʼn Bal is ʼn perfekte sfeer. Sou sy vooraansig, syaansig en bo-aansig almal dieselfde of verskillend lyk?', checkMode: 'auto', options: ['Almal verskillend, want elke aansig kyk na ʼn ander rigting', 'Almal dieselfde — elke aansig van ʼn sfeer is ʼn identiese sirkel', 'Die voor- en syaansig pas, maar die bo-aansig verskil', 'Die bo-aansig pas by die syaansig, maar die vooraansig verskil'], correctIndex: 1, explanation: 'ʼn Sfeer lyk soos ʼn sirkel vanuit elke rigting, so sy voor-, sy- en bo-aansigte is almal identiese sirkels.' },
        { difficulty: 'Medium', question: 'ʼn Boks het net ʼn handvatsel op sy bo-vlak. Watter aansig sou die handvatsel wys?', checkMode: 'auto', options: ['Die vooraansig', 'Die syaansig', 'Die bo-aansig', 'Geen aansig sou dit wys nie'], correctIndex: 2, explanation: 'Aangesien die handvatsel op die bo-vlak is, sou net die bo-aansig (reguit af kyk) dit wys.' },
        { difficulty: 'Medium', question: 'Sou die syaansig van ʼn hoë, smal drinkglas en ʼn kort, wye beker dieselfde of verskillend lyk, selfs al is hulle bo-kante dieselfde grootte?', checkMode: 'auto', options: ['Dieselfde, want bypassende bo-kant groottes beteken altyd bypassende syaansigte', 'Dieselfde, want syaansigte wys nooit hoogte nie', 'Verskillend, maar net weens die kleure van die glase', 'Verskillend, want die syaansig wys hoogte, en die twee het verskillende hoogtes'], correctIndex: 3, explanation: 'Die syaansig wys hoogte, so ʼn hoë glas en ʼn kort beker sou duidelik verskillende syaansigte hê, selfs met bypassende bo-kant groottes.' },

        // Blok 4 — Identifiseer voorwerpe/aansigte vanaf leidrade (Medium)
        { difficulty: 'Medium', question: 'ʼn Prent wys ʼn eenvoudige sirkel met ʼn klein driehoek-vormige handvatsel wat na een kant toe uitsteek. Watter alledaagse voorwerp se bo-aansig kan dit wees?', checkMode: 'auto', options: ['ʼn Koppie (of beker)', 'ʼn Bord', 'ʼn Bal', 'ʼn Boek'], correctIndex: 0, explanation: 'ʼn Koppie van bo gesien wys ʼn ronde rand met die handvatsel wat na een kant toe uitsteek. ʼn Gewone bord of bal het geen handvatsel nie, en ʼn boek se bo-aansig sou ʼn reghoek wees, nie ʼn sirkel nie.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="70" r="45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="100" cy="70" r="30" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M145 55 C170 55 170 90 145 88" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'Jy word ʼn ronde, hoë buitelyn gewys wat effens smaller word na die bokant toe, met geen plat rande nie. Watter alledaagse voorwerp kan hierdie vooraansig behoort?', checkMode: 'auto', options: ['ʼn Graankosboks', 'ʼn Appel (of soortgelyke ronde vrug)', 'ʼn Vuurhoutjiedosie', 'ʼn Skoenboks'], correctIndex: 1, explanation: 'ʼn Ronde buitelyn sonder reguit rande pas by die vooraansig van ʼn ronde voorwerp soos ʼn appel. Enige tipe boks sou eerder reguit rande wys.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><path d="M100 25 C130 25 150 45 148 70 C146 100 125 118 100 118 C75 118 54 100 52 70 C50 45 70 25 100 25 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M100 25 C98 18 102 12 108 10" fill="none" stroke="#2563eb" stroke-width="2"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Prent wys ʼn wye rand-vorm met ʼn kleiner sirkel in die middel vir die kroon. Watter voorwerp en watter aansig beskryf dit?', checkMode: 'auto', options: ['Die syaansig van ʼn hoed', 'Die vooraansig van ʼn koppie', 'Die bo-aansig van ʼn hoed', 'Die bo-aansig van ʼn skoen'], correctIndex: 2, explanation: 'As jy reguit af op ʼn hoed kyk, sien jy die wye rand as ʼn buitenste sirkel en die kroon as ʼn kleiner sirkel binne-in — dit is die bo-aansig van ʼn hoed, nie die syaansig nie (wat eerder ʼn driehoek-agtige buitelyn sou wys).', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="70" r="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="70" r="25" fill="none" stroke="#2563eb" stroke-width="2"/></svg>' },
        { difficulty: 'Medium', question: 'As twee verskillende aansigte van dieselfde voorwerp amper identies lyk, wat kan dit jou vertel oor die voorwerp se vorm?', checkMode: 'auto', options: ['Dit beteken die voorwerp het van vorm verander tussen aansigte', 'Dit beteken een van die aansigte moet verkeerd geteken wees', 'Dit beteken die voorwerp het glad geen bo-aansig nie', 'Dit kan beteken die voorwerp is simmetries of rond op ʼn manier wat soortgelyk lyk vanuit veelvuldige rigtings'], correctIndex: 3, explanation: 'Ronde of simmetriese voorwerpe, soos ʼn bal of ʼn silinder vanuit sekere hoeke bekyk, kan baie soortgelyke aansigte oplewer.' },

        // Blok 5 — Tonele, klaskamers, geboue (Medium)
        { difficulty: 'Medium', question: 'ʼn Skoolveld het ʼn netbalbaan, ʼn snoepie en ʼn hek. Watter aansig sou die beste wys hoe hierdie relatief tot mekaar geposisioneer is?', checkMode: 'auto', options: ['ʼn Planaansig, want dit wys elke posisie van bo af sonder dat iets die uitsig blokkeer', 'ʼn Syaansig, want dit wys elke gebou se hoogte', 'ʼn Vooraansig, want dit wys die hek duidelik', 'Geen aansig kan relatiewe posisies op ʼn veld wys nie'], correctIndex: 0, explanation: 'ʼn Planaansig van bo wys die posisie van elke kenmerk op die veld sonder dat enigiets die uitsig blokkeer.' },
        { difficulty: 'Medium', question: 'Waarom gebruik kaarte ʼn planaansig (bo-aansig) in plaas van ʼn syaansig?', checkMode: 'auto', options: ['Omdat ʼn syaansig nie op plat papier gedruk kan word nie', 'Omdat ʼn planaansig alles van reguit bo af wys, sonder dat iets agter geboue, bome of heuwels weggesteek is', 'Omdat ʼn planaansig altyd kleurvoller is as ʼn syaansig', 'Omdat ʼn syaansig net vir baie klein gebiede werk'], correctIndex: 1, explanation: 'ʼn Syaansig sou baie kenmerke agter ander wegsteek, terwyl ʼn planaansig elke posisie duidelik wys, en dis waarom kaarte dit gebruik.' },
        { difficulty: 'Medium', question: 'Terwyl jy by die klaskamerdeur staan, sien jy dat die lessenaars agterin gedeeltelik weggesteek is agter die lessenaars voorin. Is dit ʼn kenmerk van ʼn syaansig of ʼn planaansig?', checkMode: 'auto', options: ['ʼn Planaansig, want wegsteek is algemeen van bo af', 'ʼn Planaansig, want lessenaars word altyd oorvleuelend geteken', 'ʼn Syaansig, want voorwerpe kan mekaar blokkeer vanuit hierdie hoek', 'Nie een van beide nie — wegsteek gebeur nooit in enige aansig nie'], correctIndex: 2, explanation: 'Voorwerpe wat agter ander voorwerpe wegsteek is tipies van ʼn syaansig, aangesien ʼn planaansig van bo elke lessenaar duidelik sou wys.' },

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
        { difficulty: 'Easy', question: 'Wat noem ons dit wanneer ʼn kyker reguit af op ʼn voorwerp kyk vanaf bo?', checkMode: 'auto', options: ['ʼn Syaansig', 'ʼn Vooraansig', 'ʼn Bo-aansig (ook ʼn planaansig genoem)', 'ʼn Deursnee'], correctIndex: 2, explanation: 'Om reguit af op ʼn voorwerp te kyk vanaf bo, word die bo-aansig of planaansig genoem. ʼn Sy- of vooraansig beteken jy staan gelyk met die voorwerp, nie bo dit nie.' },
        { difficulty: 'Easy', question: 'Lewer dieselfde voorwerp altyd dieselfde aansig, ongeag waar die kyker staan?', checkMode: 'auto', options: ['Ja, want die voorwerp se vorm verander nooit nie', 'Ja, maar net vir ronde voorwerpe', 'Nee, maar net die bo-aansig verander ooit', 'Nee, die aansig verander afhangende van die kyker se posisie'], correctIndex: 3, explanation: 'Die aansig verander afhangende van die kyker se posisie, al bly die voorwerp self dieselfde.' },
        { difficulty: 'Easy', question: 'Voltooi die sin: ʼn aansig pas altyd by ʼn spesifieke _______.', checkMode: 'auto', options: ['Gesigspunt', 'Vorm', 'Kleur', 'Diagram'], correctIndex: 0, explanation: 'ʼn Aansig pas altyd by ʼn gesigspunt — die presiese posisie en rigting waarvandaan die kyker kyk.' },
        { difficulty: 'Easy', question: 'As jy links van ʼn boks staan en daarna kyk, watter aansig sien jy?', checkMode: 'auto', options: ['Bo-aansig', 'Syaansig', 'Vooraansig', 'Planaansig'], correctIndex: 1, explanation: 'As jy links of regs van ʼn voorwerp staan en daarna kyk, kry jy die syaansig.' },

        // Blok 2 — Aansigte pas (Maklik-Medium)
        { difficulty: 'Easy', question: 'ʼn Toe boks het ʼn plakker net op sy bo-vlak. Watter aansig sou die plakker wys?', checkMode: 'auto', options: ['Die vooraansig', 'Die syaansig', 'Die bo-aansig', 'Geen aansig sou dit wys nie'], correctIndex: 2, explanation: 'Aangesien die plakker op die bo-vlak is, sou net die bo-aansig (reguit af kyk) dit wys.' },
        { difficulty: 'Medium', question: 'ʼn Hoed word onderstebo neergesit, met die rand na bo. As jy nou reguit daarop afkyk, sou jy ʼn klein sirkel (die kroonpunt) of ʼn groot sirkel (die rand) sien?', checkMode: 'auto', options: ['Glad geen sirkel nie, aangesien onderstebo hoede geen bo-aansig wys nie', 'ʼn Klein sirkel, die kroonpunt, want dit wys altyd na bo', 'Altwee sirkels ewe veel, presies oorvleuelend', 'ʼn Groot sirkel, die rand, aangesien die wye rand nou na bo wys'], correctIndex: 3, explanation: 'Met die hoed onderstebo, is die wye rand na bo gedraai, so ʼn bo-aansig reguit af sou die groot randsirkel na jou toe wys.' },
        { difficulty: 'Medium', question: 'ʼn Toe vuurhoutjiedosie is baie langer as wat dit hoog of wyd is. Sou sy bo-aansig ʼn lang, dun reghoek of ʼn vierkant wees?', checkMode: 'auto', options: ['ʼn Lang, dun reghoek, wat by sy lang, smal basis pas', 'ʼn Vierkant, want alle vuurhoutjiedosies het vierkantige bo-kante', 'ʼn Sirkel, want die dosie is klein', 'ʼn Vierkant, want die dosie is toe'], correctIndex: 0, explanation: 'Aangesien die dosie baie langer is as wat dit wyd is, is sy bo-aansig (die buitelyn van sy basis) ʼn lang, dun reghoek.' },
        { difficulty: 'Medium', question: 'ʼn Appel het sy stingel reguit na bo wysend. In die vooraansig, sou die stingel soos ʼn kolletjie of soos ʼn klein lyntjie wat bo-uit steek, lyk?', checkMode: 'auto', options: ['Soos ʼn kolletjie, aangesien stingels net soos kolletjies lyk vanuit enige hoek', 'Soos ʼn klein lyntjie wat bo-uit steek, aangesien die vooraansig hoogte wys', 'Dit sou glad nie in die vooraansig verskyn nie', 'Soos ʼn groot sirkel wat die appel omring'], correctIndex: 1, explanation: 'Van voor (of die kant) gesien, verskyn die regop stingel as ʼn klein lyntjie of steeltjie wat bo die ronde lyf van die appel uitsteek. Dit sou net soos ʼn kolletjie lyk van reguit bo af.' },

        // Blok 3 — Redenering oor wat sigbaar is (Medium)
        { difficulty: 'Medium', question: 'Waarom kan die vooraansig en die bo-aansig van dieselfde boks heeltemal verskillend lyk?', checkMode: 'auto', options: ['Omdat die vooraansig altyd kleiner geteken word as die bo-aansig', 'Omdat ʼn boks van vorm verander wanneer dit vanuit verskillende hoeke bekyk word', 'Omdat die vooraansig hoogte en breedte wys, terwyl die bo-aansig lengte en breedte van die basis wys — hulle vang verskillende kante vas', 'Omdat net die bo-aansig toegelaat word om reguit rande te wys'], correctIndex: 2, explanation: 'Verskillende aansigte wys verskillende vlakke of hoeke van ʼn voorwerp, so tensy die voorwerp ʼn kubus is, lyk hierdie aansigte dikwels redelik verskillend.' },
        { difficulty: 'Medium', question: 'ʼn Kubus-vormige boks het al sy vlakke presies dieselfde grootte en vorm. Sou sy vooraansig en syaansig dieselfde of verskillend lyk?', checkMode: 'auto', options: ['Verskillend, want ʼn kubus lyk verskillend vanuit elke hoek', 'Verskillend, maar net as die kubus baie groot is', 'Dieselfde, maar net vir die voor- en bo-aansig, nie die syaansig nie', 'Dieselfde, aangesien elke vlak van ʼn kubus ʼn identiese vierkant is'], correctIndex: 3, explanation: 'Aangesien elke vlak van ʼn kubus ʼn identiese vierkant is, wys die vooraansig en syaansig van ʼn kubus-vormige boks altwee dieselfde vierkantige buitelyn.' },
        { difficulty: 'Medium', question: 'Sou die bo-aansig van ʼn hoë drinkglas jou enigiets oor sy hoogte vertel?', checkMode: 'auto', options: ['Nee, ʼn bo-aansig wys net die buitelyn van reguit bo af, nooit die hoogte nie', 'Ja, hoër glase het altyd groter bo-aansigte', 'Ja, die bo-aansig wys hoogte as ʼn geskakeerde area', 'Nee, want hoë glase het glad geen sigbare bo-aansig nie'], correctIndex: 0, explanation: 'ʼn Bo-aansig wys net die buitelyn van reguit bo af, wat die breedte of vorm van die basis openbaar, maar nooit die hoogte nie.' },
        { difficulty: 'Medium', question: 'ʼn Skoen se syaansig wys veters langs die boonste rand. Sou jy verwag dat die vooraansig (na die toon kykend) ook duidelik die veters wys?', checkMode: 'auto', options: ['Nee, veters is net vanaf die kant sigbaar', 'Ja, ten minste gedeeltelik — die veters loop van die voorkant na die middel van die skoen, so beide aansigte wys ʼn deel daarvan', 'Nee, want die vooraansig wys net die sool van die skoen', 'Ja, maar net as die skoen glad geen veters het nie'], correctIndex: 1, explanation: 'Aangesien veters gewoonlik van die voorkant na die middel van die skoen loop, sou beide die vooraansig en die syaansig ten minste ʼn deel van die veters wys.' },

        // Blok 4 — Identifiseer voorwerpe/aansigte vanaf leidrade (Medium)
        { difficulty: 'Medium', question: 'ʼn Prent wys ʼn eenvoudige reghoek met reguit rande en glad geen ronde vorms nie. Watter alledaagse voorwerp se vooraansig kan dit beskryf: ʼn appel of ʼn graankosboks?', checkMode: 'auto', options: ['ʼn Appel, aangesien appels altyd as reghoeke geteken word', 'Nie een van beide nie — geen voorwerp het ʼn reghoekige vooraansig nie', 'ʼn Graankosboks, aangesien reguit rande by ʼn boks pas, nie ʼn ronde voorwerp nie', 'ʼn Appel, want sy stingel skep reguit rande'], correctIndex: 2, explanation: 'Reguit rande en ʼn reghoekige buitelyn pas by ʼn boks, nie ʼn ronde voorwerp soos ʼn appel nie.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="20" width="110" height="100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Prent wys ʼn driehoek-agtige buitelyn met twee reguit skuins kante wat in ʼn punt bo-aan bymekaarkom, en ʼn geboë lyn onderaan. Watter aansig van ʼn partytjiehoed (keël) is dit waarskynlik?', checkMode: 'auto', options: ['Die bo-aansig, aangesien keëls net driehoeke van bo af wys', 'Dit kan glad nie aan ʼn keël-vormige hoed behoort nie', 'Die bo-aansig, aangesien geboë lyne net van reguit bo af verskyn', 'Die sy- (of voor-) aansig, aangesien die bo-aansig eerder ʼn eenvoudige sirkel vir die rand sou wys'], correctIndex: 3, explanation: 'ʼn Keël-vormige hoed van die kant (of voor) gesien wys twee reguit skuins kante wat bo-aan in ʼn punt bymekaarkom, met ʼn geboë basis onderaan. Die bo-aansig sou eerder ʼn eenvoudige sirkel vir die rand wys.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><path d="M110 15 L165 115 C165 122 140 128 110 128 C80 128 55 122 55 115 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="115" rx="55" ry="10" fill="none" stroke="#2563eb" stroke-width="1.5"/></svg>' },
        { difficulty: 'Medium', question: 'Jy word vertel ʼn voorwerp se bo-aansig is ʼn perfekte sirkel. Kan hierdie voorwerp steeds ʼn boks (reghoekige prisma) wees?', checkMode: 'auto', options: ['Nee, ʼn reghoekige prisma het altyd ʼn reghoekige (of vierkantige) bo-aansig, nooit ʼn sirkel nie', 'Ja, party bokse het sirkelvormige bo-aansigte', 'Ja, as die boks op sy kant gedraai word', 'Nee, want bokse het glad geen bo-aansig nie'], correctIndex: 0, explanation: 'ʼn Reghoekige prisma het altyd ʼn reghoekige (of vierkantige) bo-aansig, nooit ʼn perfekte sirkel nie, so die voorwerp kan nie ʼn boks wees nie.' },
        { difficulty: 'Medium', question: 'Waarom is dit soms nodig om meer as een aansig van ʼn voorwerp te sien voordat jy dit korrek kan identifiseer?', checkMode: 'auto', options: ['Omdat dit eintlik nooit moontlik is om ʼn voorwerp vanuit enige aansig te identifiseer nie', 'Omdat ʼn enkele aansig soms soortgelyk kan lyk vir verskeie verskillende voorwerpe, so meer aansigte gee ekstra leidrade', 'Omdat die bo-aansig altyd verkeerd is en dubbel nagegaan moet word', 'Omdat voorwerpe van vorm verander tussen verskillende aansigte'], correctIndex: 1, explanation: 'Een aansig alleen kan dubbelsinnig wees — die kombinasie van aansigte verminder die kans om verskillende voorwerpe wat vanuit net een hoek soortgelyk lyk, te verwar.' },

        // Blok 5 — Tonele, klaskamers, geboue (Medium)
        { difficulty: 'Medium', question: 'ʼn Planaansig van die skoolveld wys die netbalbaan as ʼn reghoek en die snoepie as ʼn klein vierkant. Wat ontbreek in hierdie planaansig wat ʼn syaansig sou wys?', checkMode: 'auto', options: ['Die presiese kleure van die geboue', 'Die name van die leerders op die veld', 'Die hoogte van die geboue en enige kenmerke wat regop staan, soos pale of bome', 'Niks nie — ʼn planaansig wys alles wat ʼn syaansig kan wys'], correctIndex: 2, explanation: 'ʼn Planaansig wys net buitelyne van bo, so hoogte-inligting (van geboue, pale, bome) ontbreek — ʼn syaansig sou nodig wees om dit te wys.' },
        { difficulty: 'Medium', question: 'ʼn Bouer wil presies weet hoe ver twee klaskamers van mekaar af op die skoolterrein is. Moet hulle ʼn syaansig of ʼn planaansig gebruik om dit te meet?', checkMode: 'auto', options: ['ʼn Syaansig, aangesien dit die klaskamers se hoogte wys', 'Enige aansig werk ewe goed om afstand te meet', 'ʼn Syaansig, aangesien planaansigte nie vir meting gebruik kan word nie', 'ʼn Planaansig, aangesien dit akkurate afstande tussen posisies op die grond wys'], correctIndex: 3, explanation: 'ʼn Planaansig van bo wys akkurate afstande tussen posisies op die grond, wat presies is wat nodig is om te meet hoe ver die klaskamers uitmekaar is.' },
        { difficulty: 'Medium', question: 'Terwyl jy buite ʼn eenvoudige gebou staan en na sy voormuur kyk, sien jy ʼn sy/voor-aansig of ʼn planaansig?', checkMode: 'auto', options: ['ʼn Sy-/vooraansig, aangesien jy na die muur kyk vanaf grondvlak, nie van bo af nie', 'ʼn Planaansig, aangesien mure altyd van bo af gesien word', 'Nie een van beide nie — mure kan in geen aansig voorgestel word nie', 'ʼn Planaansig, aangesien die voormuur die dak se buitelyn wys'], correctIndex: 0, explanation: 'As jy na die muur van ʼn gebou kyk vanaf grondvlak, eerder as van bo af, kry jy ʼn voor- (of sy-) aansig, nie ʼn planaansig nie.' },

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
