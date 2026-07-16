import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

export const topicData: TopicData = {
  title: 'Aansig van Voorwerpe',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — SAAMGESTELDE VOORWERPE EN HUL AANSIGTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'composite-objects-and-views',
      title: 'Saamgestelde Voorwerpe en Hul Aansigte',
      icon: '📦',
      explanation: `
<p style="margin-bottom:14px;">In vorige grade het jy geleer dat ʼn <strong>aansig</strong> is wat jy sien wanneer jy na ʼn voorwerp kyk vanaf een spesifieke <strong>gesigspunt</strong> — die voorwerp verander nooit nie, net waar jy staan verander wat jy sien. In Graad 6 pas ons hierdie idee toe op <strong>saamgestelde voorwerpe</strong>: voorwerpe wat gebou is deur twee of meer eenvoudige 3D-vorms in een struktuur te kombineer.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Wat is ʼn saamgestelde voorwerp?</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">ʼn <strong>Saamgestelde voorwerp</strong> word gemaak deur eenvoudiger 3D-vorms saam te voeg. ʼn Speelgoedhuis is ʼn reghoekige prisma (die mure) gekombineer met ʼn driehoekige prisma (die dak). ʼn Potlood is ʼn sesookige prisma gekombineer met ʼn keël (die geslypte punt). ʼn Liasseerkabinet met ʼn trap daarin kan twee reghoekige prismas van verskillende groottes wees wat op mekaar gestapel is.</p>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Hoe om ʼn saamgestelde voorwerp te bekyk 🏠</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">Dink aan elke eenvoudige deel apart, en kombineer dan wat jy sou sien. Vir ʼn speelgoedhuis: die mure (reghoekige prisma) gee ʼn reghoek van voor, en die dak (driehoekige prisma) voeg ʼn driehoek bo-op daardie reghoek by — saam maak hulle ʼn vyfhoek-vormige vooraansig, soos die buitelyn van ʼn eenvoudige tekening van ʼn huis.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Belangrike idee</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">ʼn Saamgestelde voorwerp se aansig is <strong>nie altyd net eenvoudig "bymekaar getel" nie</strong> soos jy dalk sou verwag. Soms bepaal een deel die hele buitelyn (soos die dak wat die bokant van die vooraansig bepaal), en soms is ʼn deel <strong>weggesteek</strong> agter ʼn ander deel in ʼn spesifieke aansig. Jy moet altyd noukeurig dink oor wat werklik sigbaar is vanaf elke posisie.</p>
</div>`,
      workedExamples: [
        {
          question: 'ʼn Speelgoedhuis is gemaak van ʼn reghoekige boks (die mure) met ʼn driehoekige-prisma-dak bo-op, met die nok wat van voor na agter loop. Beskryf die vooraansig, syaansig en bo-aansig.',
          steps: [
            '<strong>Vooraansig</strong> — as jy reguit na die gewelpunt kyk, sien jy die reghoek van die mure met die driehoekige dakvorm bo-op — ʼn <strong>vyfhoek</strong> (huis-vormige) buitelyn.',
            '<strong>Syaansig</strong> — as jy langs die lengte van die dak se nok kyk, is die dak se hoogste punt (die nok) dieselfde hoogte die hele pad langs, so jy kan glad nie die driehoekige helling sien nie — jy sien net ʼn <strong>eenvoudige reghoek</strong>, die volle hoogte van die mure plus die dak.',
            '<strong>Bo-aansig</strong> — as jy reguit af kyk, sien jy die reghoekige buitelyn van die hele grondvlak, met ʼn enkele lyn in die middel wat wys waar die twee dakhellings ontmoet (die noklyn).',
          ],
          answer:
            'Vooraansig: ʼn vyfhoek (reghoek + driehoek). Syaansig: ʼn eenvoudige reghoek. Bo-aansig: ʼn reghoek met ʼn middellyn wat die nok merk.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'ʼn Speelgoedhuis (reghoekige mure + driehoekige dak) gewys as ʼn eenvoudige 3D-sketse, met sy vooraansig (vyfhoek), syaansig (eenvoudige reghoek) en bo-aansig (reghoek met ʼn middel-noklyn) langsaan geteken',
      diagramSvg: '<svg viewBox="0 0 730 190" xmlns="http://www.w3.org/2000/svg"><path d="M45,140 L45,90 L85,50 L125,90 L125,140 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M45,90 L67,74 M125,90 L147,74 M85,50 L107,34 M67,74 L147,74 M107,34 L67,74 M107,34 L147,74 M125,140 L147,124 M147,124 L147,74" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M225,140 L225,90 L265,50 L305,90 L305,140 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="415" y="50" width="60" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="580" y="75" width="90" height="40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="625" y1="75" x2="625" y2="115" stroke="#2563eb" stroke-width="1.5"/><text x="90" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Die voorwerp</text><text x="270" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Vooraansig</text><text x="450" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Syaansig</text><text x="630" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Bo-aansig</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — SES GESIGSPUNTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'six-viewing-positions',
      title: 'Voor, Agter, Links, Regs, Bo en Onder',
      icon: '🧭',
      explanation: `
<p style="margin-bottom:14px;">Tot dusver het jy aansigte beskryf met net voor, kant en bo. In Graad 6 beskryf ons ʼn kyker se posisie meer presies, deur <strong>ses gesigspunte</strong> te gebruik wat heeltemal rondom ʼn voorwerp gerangskik is: <strong>voor</strong>, <strong>agter</strong>, <strong>links</strong>, <strong>regs</strong>, <strong>bo</strong> en <strong>onder</strong>.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Drie pare van teenoorgestelde posisies</div>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Voor &amp; agter</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">As jy voor staan en na die voorwerp kyk, kry jy die <strong>vooraansig</strong>. As jy heeltemal om die voorwerp loop na die teenoorgestelde kant, kry jy die <strong>agteraansig</strong>.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Links &amp; regs</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">As jy aan die voorwerp se linkerkant staan, kry jy die <strong>linkeraansig</strong>; aan die regterkant kry jy die <strong>regteraansig</strong>. Saam met voor en agter vorm hierdie vier posisies ʼn volle sirkel rondom die voorwerp.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Bo &amp; onder</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">As jy reguit af kyk, kry jy die aansig van <strong>bo</strong> (die bekende bo-/planaansig). As jy reguit op kyk van onder af, kry jy die aansig van <strong>onder</strong> — gewoonlik weggesteek omdat die voorwerp op ʼn oppervlak rus, maar dit bestaan steeds.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Voorbeeld: sokker-doelpale ⚽</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">Doelpale is twee regop pale wat deur ʼn horisontale kruisbalk verbind word. Van <strong>voor</strong> sien jy die volle raam: twee regoppale en ʼn balk oor die bokant. Van die <strong>kant</strong> af is die raam so dun van daardie rigting dat die twee pale reg agter mekaar lyn en jy amper niks sien behalwe ʼn enkele dun regoppaal nie — die kruisbalk en die verste paal is direk agter die naaste paal weggesteek.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Belangrike idee</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">Teenoorgestelde posisies gee nie altyd bypassende aansigte nie. Voor en agter kan heeltemal verskillend lyk (ʼn boks met ʼn prentjie net op die voorkant), of presies dieselfde (ʼn simmetriese gebou), afhangende van die voorwerp. Jy moet altyd kyk, nooit aanneem nie.</p>
</div>`,
      workedExamples: [
        {
          question: 'ʼn Graanboks het ʼn prentjie net op sy voorvlak gedruk, en ʼn voedingstabel net op sy agtervlak gedruk. Sou die aansig van voor en die aansig van agter dieselfde of verskillend lyk?',
          steps: [
            'Die <strong>vooraansig</strong> wys die voorvlak van die boks — die prentjie sou sigbaar wees.',
            'Die <strong>agteraansig</strong> wys die teenoorgestelde vlak — die voedingstabel sou eerder sigbaar wees, nie die prentjie nie.',
            'Aangesien hierdie twee vlakke verskillende dinge daarop gedruk het, lyk die twee aansigte <strong>verskillend</strong>, selfs al is albei eenvoudige reghoeke in buitelyn.',
          ],
          answer: 'Verskillend — die buitelyn (ʼn reghoek) is dieselfde, maar wat daarbinne gedruk is, is verskillend vir die voor- en agteraansig.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'Sokker-doelpale gewys van voor (twee regoppale verbind deur ʼn kruisbalk, wat ʼn omgekeerde U-vorm maak) en van die kant (ʼn enkele dun regoppaal, aangesien die verste paal en kruisbalk direk agter die naaste paal weggesteek is)',
      diagramSvg: '<svg viewBox="0 0 380 190" xmlns="http://www.w3.org/2000/svg"><path d="M50,140 L50,50 L130,50 L130,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="260" y="50" width="20" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="20" y1="140" x2="160" y2="140" stroke="#9ca3af" stroke-width="1.5"/><line x1="230" y1="140" x2="310" y2="140" stroke="#9ca3af" stroke-width="1.5"/><text x="90" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Vooraansig</text><text x="270" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Syaansig</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — AANSIGTE VAN KUBUSSTRUKTURE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'views-of-cube-structures',
      title: 'Aansigte van Kubusstrukture',
      icon: '🧊',
      explanation: `
<p style="margin-bottom:14px;">ʼn Baie algemene tipe saamgestelde voorwerp in Graad 6 is ʼn <strong>kubusstruktuur</strong> (of <strong>kubusstapel</strong>) — ʼn struktuur gebou uit verskeie identiese kubusse wat langs en bo-op mekaar gerangskik is. Om die aansigte van ʼn kubusstruktuur uit te werk, is uitstekende oefening vir ruimtelike redenering.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Hoe om die aansigte van ʼn kubusstruktuur te vind</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Vir die <strong>vooraansig</strong>, vind die hoogste stapel kubusse in elke kolom (links-na-regs posisie) — daardie hoogte is wat jy vir daardie kolom sien, selfs al is daar korter stapels agter dit.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Vir die <strong>syaansig</strong>, doen dieselfde ding maar skandeer van die kant af — vir elke ry (voor-na-agter posisie), vind die hoogste stapel in daardie ry.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Vir die <strong>bo-aansig</strong>, teken net aan watter posisies op die grond enige kubusstapel het (die voetspoor) — hoogte maak nie saak vir die bo-aansig nie.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Pasop hiervoor 🧱</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">ʼn Hoër stapel direk agter of langs ʼn korter een kan die korter een se ware vorm heeltemal wegsteek in daardie aansig. Dis presies waarom bouers en ontwerpers steeds <strong>meer as een aansig</strong> nodig het om ʼn struktuur volledig te beskryf — geen enkele aansig vertel die hele storie nie.</p>
</div>`,
      workedExamples: [
        {
          question: 'ʼn Struktuur is gebou uit 4 kubusse in ʼn enkele ry: 2 kubusse op mekaar gestapel aan die linkerkant, dan 1 kubus, dan nog 1 kubus, almal direk langs mekaar sonder gapings. Beskryf die vooraansig, syaansig en bo-aansig.',
          steps: [
            '<strong>Vooraansig</strong> — van links na regs kykend: die eerste kolom is 2 kubusse hoog, die volgende twee kolomme is elk net 1 kubus hoog. Dit gee ʼn <strong>trapvorm</strong>: hoog aan die linkerkant, laag aan die regterkant.',
            '<strong>Syaansig</strong> — al die kubusse staan in ʼn enkele ry met dieselfde diepte (1 kubus diep), so as jy van die kant af kyk (van die punt af), is die hoogste kolom (2 kubusse) die enigste hoogte wat jy kan meet — jy kry ʼn <strong>eenvoudige reghoek</strong> 2 kubusse hoog.',
            '<strong>Bo-aansig</strong> — as jy reguit af kyk, sien jy 3 vierkante in ʼn ry (die voetspoor van die 3 kolomme) — die bo-aansig kan nie wys dat die linker kolom hoër is nie.',
          ],
          answer:
            'Vooraansig: ʼn trapvorm (hoog, dan laag, dan laag). Syaansig: ʼn eenvoudige reghoek so hoog soos die hoogste kolom. Bo-aansig: 3 vierkante in ʼn ry.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'ʼn Kubusstruktuur met ʼn hoë kolom van 2 kubusse aan die linkerkant en twee enkelkubusse aan die regterkant, gewys as ʼn eenvoudige 3D-sketse, met sy trapvormige vooraansig, eenvoudige reghoekige syaansig en 3-vierkant bo-aansig langsaan geteken',
      diagramSvg: '<svg viewBox="0 0 730 190" xmlns="http://www.w3.org/2000/svg"><path d="M40,134 L40,86 L64,86 L64,110 L112,110 L112,134 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="88" y1="110" x2="88" y2="134" stroke="#2563eb" stroke-width="1.5"/><path d="M40,86 L62,70 M64,86 L86,70 M62,70 L86,70 M64,110 L86,94 M112,110 L134,94 M86,94 L134,94 M112,134 L134,118 M134,118 L134,94" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M220,134 L220,86 L244,86 L244,110 L292,110 L292,134 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="244" y1="110" x2="244" y2="134" stroke="#2563eb" stroke-width="1.5"/><line x1="268" y1="110" x2="268" y2="134" stroke="#2563eb" stroke-width="1.5"/><rect x="424" y="86" width="24" height="48" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="580" y="100" width="72" height="24" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="604" y1="100" x2="604" y2="124" stroke="#2563eb" stroke-width="1.5"/><line x1="628" y1="100" x2="628" y2="124" stroke="#2563eb" stroke-width="1.5"/><text x="90" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Die voorwerp</text><text x="270" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Vooraansig</text><text x="450" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Syaansig</text><text x="630" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Bo-aansig</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — PAS AANSIGTE BY SAAMGESTELDE VOORWERPE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'matching-views-composite-objects',
      title: 'Pas Aansigte by Saamgestelde Voorwerpe',
      icon: '🔍',
      explanation: `
<p style="margin-bottom:14px;">Wanneer jy ʼn saamgestelde voorwerp en verskeie moontlike aansigte kry, gebruik ʼn stelselmatige metode eerder as om te raai. Breek die voorwerp op in sy dele, werk uit wat elke deel tot elke aansig bydra, en vergelyk dan jou antwoord met die opsies.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">ʼn Stelselmatige metode</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Identifiseer die <strong>eenvoudige vorms</strong> waaruit die saamgestelde voorwerp bestaan, en hoe hulle saamgevoeg is (langs mekaar, gestapel, gesentreerd bo-op).</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Besluit of die gesigspunt (voor, kant of bo) ʼn <strong>trap, keep of geneste buitelyn</strong> sou wys waar die dele ontmoet, of dat een deel die voeg heeltemal sou wegsteek.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Skrap opsies wat die verkeerde aantal dele, verkeerde verhoudinge, of besonderhede wys wat onmoontlik vanaf daardie posisie gesien kon word.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Waarom die bo-aansig dikwels "genes" lyk 🎯</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">Wanneer ʼn kleiner boks gesentreerd bo-op ʼn groter boks sit, wys die bo-aansig <strong>twee reghoeke, een binne die ander</strong> — die buitelyn van die groter boks (verder weg, so geteken as die buitenste reghoek) en die buitelyn van die kleiner boks (nader aan jou, binne-in geteken). Hierdie "geneste reghoek" patroon is een van die duidelikste visuele leidrade dat ʼn voorwerp ʼn gestapelde saamgestelde voorwerp is, nie ʼn enkele eenvoudige vorm nie.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Belangrike idee</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">As ʼn saamgestelde voorwerp <strong>simmetries</strong> is in elke rigting (byvoorbeeld, ʼn kleiner boks presies gesentreerd bo-op ʼn groter vierkantige boks), kan sy vooraansig en syaansig <strong>identies</strong> wees, selfs al het die voorwerp duidelik diepte sowel as breedte. Kyk altyd vir simmetrie voordat jy aanneem dat twee aansigte verskillend moet lyk.</p>
</div>`,
      workedExamples: [
        {
          question: 'ʼn Wye, plat boks het ʼn kleiner boks presies gesentreerd bo-op, soos ʼn tweevlak-koekstaander. Albei bokse is vierkantig van bo gesien. Beskryf die vooraansig, syaansig en bo-aansig.',
          steps: [
            '<strong>Vooraansig</strong> — die wye boks gee ʼn lae, wye reghoek onderaan, en die kleiner boks (gesentreerd, so gelyke hoeveelhede steek aan albei kante uit) gee ʼn nouer, hoër reghoek bo-op, in die middel. Saam maak dit ʼn simmetriese <strong>tweetrap</strong>-vorm.',
            '<strong>Syaansig</strong> — aangesien albei bokse vierkantig is van bo gesien, wys die syaansig presies <strong>dieselfde tweetrap-vorm</strong> as die vooraansig.',
            '<strong>Bo-aansig</strong> — as jy afkyk, sit die kleiner boks se buitelyn binne die groter boks se buitelyn, albei gesentreerd op dieselfde punt — dit gee <strong>twee geneste (konsentriese) reghoeke</strong>.',
          ],
          answer:
            'Vooraansig en syaansig: ʼn identiese, simmetriese tweetrap-vorm. Bo-aansig: twee geneste reghoeke, een binne die ander.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'ʼn Tweevlak-boksstruktuur (ʼn wye plat boks met ʼn kleiner boks gesentreerd bo-op) gewys as ʼn eenvoudige 3D-sketse, met sy tweetrap-vooraansig, bypassende tweetrap-syaansig en geneste-reghoek bo-aansig langsaan geteken',
      diagramSvg: '<svg viewBox="0 0 730 190" xmlns="http://www.w3.org/2000/svg"><path d="M35,140 L35,105 L65,105 L65,65 L115,65 L115,105 L145,105 L145,140 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M35,105 L55,90 M65,105 L85,90 M65,65 L85,50 M115,65 L135,50 M115,105 L135,90 M145,105 L165,90 M145,140 L165,125 M55,90 L85,90 M85,90 L85,50 M85,50 L135,50 M135,50 L135,90 M135,90 L165,90 M165,90 L165,125" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M215,140 L215,105 L245,105 L245,65 L295,65 L295,105 L325,105 L325,140 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M395,140 L395,105 L425,105 L425,65 L475,65 L475,105 L505,105 L505,140 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="580" y="90" width="100" height="30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="610" y="97" width="40" height="16" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="90" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Die voorwerp</text><text x="270" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Vooraansig</text><text x="450" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Syaansig</text><text x="630" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Bo-aansig</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — SAAMGESTELDE GEBOUE EN ALLEDAAGSE STRUKTURE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'composite-buildings-and-structures',
      title: 'Saamgestelde Geboue en Alledaagse Strukture',
      icon: '🏗️',
      explanation: `
<p style="margin-bottom:14px;">Alledaagse geboue is dikwels ook saamgestelde voorwerpe — ʼn huis met ʼn aangehegte motorhuis, ʼn skool met ʼn saal wat aan die klaskamerblok verbind is, of ʼn woonstelblok met ʼn laer ingangsgedeelte. Argitekte staatmaak op aansigte vanaf verskeie posisies om hierdie strukture akkuraat te beplan en te beskryf.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">ʼn Saamgestelde gebou se aansigte lees</div>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Vooraansig</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Wys duidelik die verskillende <strong>hoogtes</strong> van die aangehegte afdelings — byvoorbeeld, ʼn trap waar ʼn hoër huisgedeelte ʼn korter motorhuisgedeelte ontmoet.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Syaansig</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">As albei afdelings dieselfde diepte (voor-na-agter afstand) deel, wys die syaansig dikwels net ʼn <strong>eenvoudige reghoek</strong> so hoog soos die hoër afdeling — die trap is weggesteek vanaf hierdie posisie.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Bo- (plan-) aansig</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">Wys die volle <strong>vloerplan</strong> van albei afdelings saamgevoeg, gewoonlik met ʼn interne lyn wat die skeidingsmuur tussen hulle merk.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Agteruit werk vanaf een aansig 🔄</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">As jy net die vooraansig van ʼn gebou gewys word en gevra word om die struktuur te beskryf, soek na trappe, kepe of veranderinge in breedte — elkeen merk gewoonlik die voeg tussen twee eenvoudige dele van ʼn saamgestelde voorwerp. ʼn Enkele trap in ʼn vooraansig beteken byna altyd twee aangehegte afdelings van verskillende hoogtes.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Belangrike idee</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">Net soos in Graad 4 en 5, is ʼn plan- (bo-) aansig die nuttigste aansig om die ware <strong>uitleg</strong> van ʼn struktuur te wys, want niks is agter iets anders weggesteek nie. Vir saamgestelde geboue is die planaansig wat jou laat sien presies hoe die afdelings saamgevoeg is en hoeveel vloerspasie elkeen gebruik.</p>
</div>`,
      workedExamples: [
        {
          question: 'ʼn Huis het ʼn hoër hoofgedeelte en ʼn korter motorhuis wat direk aan een kant aangeheg is, albei gedeeltes dieselfde diepte (voor-na-agter). Beskryf die vooraansig, syaansig en bo-aansig van hierdie saamgestelde gebou.',
          steps: [
            '<strong>Vooraansig</strong> — jy sien twee reghoeke langs mekaar wat een rand deel: ʼn hoër reghoek vir die huis en ʼn korter reghoek vir die motorhuis, wat ʼn duidelike <strong>trap</strong> vorm.',
            '<strong>Syaansig</strong> — aangesien albei gedeeltes dieselfde diepte het, kan jy van die kant af net die hoogste hoogte teenwoordig by elke diepteposisie meet, wat die huis se hoogte oral is — jy kry ʼn <strong>eenvoudige reghoek</strong>, die hoogte van die huis, met geen trap sigbaar nie.',
            '<strong>Bo-aansig</strong> — jy sien een gekombineerde reghoek (die volle vloerplan), met ʼn lyn wat die skeidingsmuur tussen die huis en die motorhuis merk.',
          ],
          answer:
            'Vooraansig: ʼn tweehoogte trapvorm. Syaansig: ʼn eenvoudige reghoek so hoog soos die hoër (huis-) gedeelte. Bo-aansig: een reghoek met ʼn skeidingsmuur-lyn.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'ʼn Huis met ʼn korter motorhuis aan een kant aangeheg, albei dieselfde diepte, gewys as ʼn eenvoudige 3D-sketse, met sy trapvormige vooraansig, eenvoudige reghoekige syaansig en enkele verdeelde-reghoek bo- (plan-) aansig langsaan geteken',
      diagramSvg: '<svg viewBox="0 0 730 190" xmlns="http://www.w3.org/2000/svg"><path d="M40,140 L40,60 L100,60 L100,90 L160,90 L160,140 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="90" x2="100" y2="140" stroke="#2563eb" stroke-width="1.5"/><path d="M40,60 L60,45 M100,60 L120,45 M100,90 L120,75 M160,90 L180,75 M160,140 L180,125 M60,45 L120,45 M120,45 L120,75 M120,75 L180,75 M180,75 L180,125" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M220,140 L220,60 L280,60 L280,90 L340,90 L340,140 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="280" y1="90" x2="280" y2="140" stroke="#2563eb" stroke-width="1.5"/><rect x="430" y="60" width="60" height="80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="575" y="90" width="130" height="30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="640" y1="90" x2="640" y2="120" stroke="#2563eb" stroke-width="1.5"/><text x="90" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Die voorwerp</text><text x="270" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Vooraansig</text><text x="450" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Syaansig</text><text x="630" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">Bo-aansig</text></svg>',
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
        // Blok 1 — Saamgestelde voorwerpe en aansigte (Maklik)
        { difficulty: 'Easy', question: 'Wat noem ons ʼn voorwerp wat gebou is deur twee of meer eenvoudige 3D-vorms te kombineer?', answer: 'ʼn Saamgestelde voorwerp', checkMode: 'auto', correctAnswer: 'ʼn Saamgestelde voorwerp', correctAnswers: ['ʼn Saamgestelde voorwerp', 'saamgestelde voorwerp', 'ʼn saamgestelde voorwerp'], explanation: 'ʼn Voorwerp gemaak deur twee of meer eenvoudige 3D-vorms saam te voeg, word ʼn saamgestelde voorwerp genoem.' },
        { difficulty: 'Easy', question: 'ʼn Speelgoedhuis is gemaak van ʼn reghoekige prisma en ʼn driehoekige prisma. Watter deel is die dak?', answer: 'Die driehoekige prisma', checkMode: 'auto', correctAnswer: 'Die driehoekige prisma', correctAnswers: ['Die driehoekige prisma', 'driehoekige prisma', 'die driehoekige prisma'], explanation: 'Die skuinsdak van ʼn speelgoedhuis is soos ʼn driehoekige prisma gevorm, terwyl die mure ʼn reghoekige prisma vorm.' },
        { difficulty: 'Easy', question: 'Buiten voor, kant en bo, noem die drie ander gesigspunte wat in Graad 6 gebruik word.', answer: 'Agter, links en regs (en onder)', checkMode: 'self', explanation: 'Graad 6 gebruik altesaam ses gesigspunte: voor, agter, links, regs, bo en onder.' },
        { difficulty: 'Easy', question: 'Watter gesigspunt is direk teenoorgesteld die vooraansig?', answer: 'Agteraansig', checkMode: 'auto', correctAnswer: 'Agteraansig', correctAnswers: ['Agteraansig', 'agteraansig', 'die agteraansig'], explanation: 'Die agteraansig word geneem vanaf die posisie direk teenoorgesteld die voorkant — jy het heeltemal om na die ander kant van die voorwerp geloop.' },

        // Blok 2 — Pas aansigte by saamgestelde voorwerpe (Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'ʼn Speelgoedhuis het ʼn driehoekige dak. Watter aansig wys die dak as ʼn driehoek bo-op ʼn reghoek (ʼn vyfhoek-vorm): die vooraansig of die syaansig (langs die nok kykend)?', answer: 'Vooraansig', checkMode: 'auto', correctAnswer: 'Vooraansig', correctAnswers: ['Vooraansig', 'vooraansig', 'die vooraansig'], explanation: 'As jy na die gewelpunt kyk (vooraansig), sien jy die volle driehoekige dakvorm bo-op die reghoekige mure.' },
        { difficulty: 'Medium', question: 'Vir dieselfde speelgoedhuis, waarom wys die syaansig (langs die nok kykend) net ʼn eenvoudige reghoek in plaas van ʼn driehoek?', answer: 'Omdat die dak se hoogte dieselfde is die hele pad langs die nok, so van die kant af kan jy die dak se helling glad nie sien nie — jy sien net die maksimum hoogte as ʼn plat bokant.', checkMode: 'self', explanation: 'As jy in die rigting van die nok kyk, is die dak se piekhoogte oral langs daardie aansig teenwoordig, so dit lyk soos ʼn platboonste reghoek eerder as ʼn skuins driehoek.' },
        { difficulty: 'Medium', question: 'ʼn Kleiner boks sit presies gesentreerd bo-op ʼn groter boks. Watter vorm sou jy verwag die bo-aansig sal wys?', answer: 'Twee geneste (konsentriese) reghoeke, een binne die ander', checkMode: 'self', explanation: 'As jy afkyk op ʼn gesentreerde, gestapelde saamgestelde voorwerp, sit die kleiner boks se buitelyn binne die groter boks se buitelyn, wat twee geneste reghoeke vorm.' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde voorwerp is gemaak van ʼn kubus met ʼn kleiner kubus aan een van sy bo-hoeke aangeheg (nie gesentreerd nie). Sou sy bo-aansig simmetries of nie-simmetries wees?', answer: 'Nie-simmetries', checkMode: 'auto', correctAnswer: 'Nie-simmetries', correctAnswers: ['Nie-simmetries', 'nie-simmetries', 'asimmetries'], explanation: 'Aangesien die kleiner kubus buite-middel (by ʼn hoek) aangeheg is, sou sy buitelyn in die bo-aansig eenkant sit eerder as in die middel, so die bo-aansig sou nie simmetries wees nie.' },

        // Blok 3 — Kubusstrukture (Medium)
        { difficulty: 'Medium', question: 'ʼn Kubusstruktuur het 3 kubusse in ʼn ry, elk op sy eie sonder stapeling (almal 1 kubus hoog). Watter vorm is die vooraansig?', answer: 'ʼn Eenvoudige reghoek', checkMode: 'auto', correctAnswer: 'ʼn Eenvoudige reghoek', correctAnswers: ['ʼn Eenvoudige reghoek', 'reghoek', 'ʼn reghoek'], explanation: 'Aangesien al 3 kubusse dieselfde hoogte is, wys die vooraansig een deurlopende reghoek, 3 kubusse wyd en 1 kubus hoog.' },
        { difficulty: 'Medium', question: 'ʼn Kubusstruktuur het een kolom wat 3 kubusse hoog is, langs twee kolomme wat elk net 1 kubus hoog is. Van voor, sou dit soos ʼn gladde reghoek of ʼn trapvorm lyk?', answer: 'ʼn Trapvorm', checkMode: 'auto', correctAnswer: 'ʼn Trapvorm', correctAnswers: ['ʼn Trapvorm', 'trapvorm', 'ʼn trap'], explanation: 'Aangesien een kolom baie hoër as die ander is, wys die vooraansig ʼn duidelike trap: hoog aan die een kant, laag aan die ander.' },
        { difficulty: 'Medium', question: 'Vir ʼn enkele ry kubuskolomme met verskillende hoogtes (almal dieselfde diepte van 1 kubus), waarom is die syaansig altyd ʼn eenvoudige reghoek?', answer: 'Omdat, van die kant af, al die kolomme reg agter mekaar lyn in dieselfde 1-kubus-diepte, so jy kan net die hoogte van die hoogste kolom sien — die verskille in hoogte tussen kolomme is weggesteek.', checkMode: 'self', explanation: 'Die syaansig laat die rigting van die ry saamval, so net die hoogste kolom se hoogte is sigbaar as ʼn enkele platboonste reghoek, wat die individuele kolomhoogtes wegsteek.' },
        { difficulty: 'Medium', question: 'ʼn Kubusstruktuur se bo-aansig wys 4 aparte vierkante in ʼn L-vorm. Vertel die bo-aansig jou enigiets oor die hoogtes van die kubusstapels by elke posisie?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Die bo-aansig wys net die voetspoor (watter posisies ʼn stapel het), nooit die hoogtes van die stapels nie.' },

        // Blok 4 — Pas/identifiseer saamgestelde voorwerpe vanaf leidrade (Medium)
        { difficulty: 'Medium', question: 'ʼn Prent wys ʼn wye, lae reghoek met ʼn nouer, hoër reghoek presies gesentreerd bo-op. Watter soort saamgestelde voorwerp kan hierdie ʼn vooraansig van wees?', answer: 'ʼn Tweevlak gestapelde voorwerp, soos ʼn klein boks op ʼn groter boks (bv. ʼn koekstaander of ʼn trap-piramide)', checkMode: 'self', explanation: 'ʼn Wye basis met ʼn nouer vorm gesentreerd bo-op is die klassieke vooraansig-buitelyn van ʼn tweevlak gestapelde saamgestelde voorwerp.', diagramSvg: '<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><path d="M25,140 L25,105 L55,105 L55,65 L105,65 L105,105 L135,105 L135,140 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'Jy word vertel ʼn saamgestelde voorwerp se vooraansig en syaansig is identiese tweetrap-vorms. Wat kan jy aflei oor die voorwerp se bo-af voetspoor?', answer: 'Dat beide die onderste en boonste dele presies dieselfde vorm en grootte in beide die breedte- en diepterigting moet wees (byvoorbeeld, beide dele is vierkantig), wat die voorwerp simmetries maak van voor en van die kant.', checkMode: 'self', explanation: 'As vooraansig en syaansig presies ooreenstem, moet die voorwerp dieselfde verhoudinge in beide horisontale rigtings hê, so dit is simmetries wanneer dit van voor of die kant bekyk word.' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde voorwerp se bo-aansig wys ʼn enkele eenvoudige reghoek sonder geneste vorms en sonder skeidingslyne. Is dit meer waarskynlik ʼn simmetriese tweevlak-stapel, of twee bokse van dieselfde hoogte langs mekaar sonder ʼn hoogtetrap?', answer: 'Twee bokse van dieselfde hoogte langs mekaar', checkMode: 'self', explanation: 'ʼn Gestapelde saamgestelde voorwerp wys gewoonlik geneste reghoeke in die bo-aansig; ʼn enkele eenvoudige reghoek sonder interne verdeling dui daarop dat die saamgevoegde dele dieselfde voetspoor-buitelyn deel en daar niks in plan te onderskei is nie.' },
        { difficulty: 'Medium', question: 'Twee identiese reghoekige bokse word einde-aan-einde geplaas (nie gestapel nie) om een lang saamgestelde vorm te maak. Sou die vooraansig ʼn trap wys, of ʼn enkele eenvoudige reghoek?', answer: 'ʼn Enkele eenvoudige reghoek', checkMode: 'auto', correctAnswer: 'ʼn Enkele eenvoudige reghoek', correctAnswers: ['ʼn Enkele eenvoudige reghoek', 'eenvoudige reghoek', 'ʼn eenvoudige reghoek', 'reghoek'], explanation: 'Aangesien albei bokse identies in hoogte is en net einde-aan-einde geplaas is (nie by verskillende hoogtes nie), is die vooraansig een deurlopende reghoek sonder ʼn sigbare trap.' },

        // Blok 5 — Saamgestelde geboue (Medium)
        { difficulty: 'Medium', question: 'ʼn Huis met ʼn korter motorhuis aangeheg wys ʼn trap in sy vooraansig. Sou die bo- (plan-) aansig gewoonlik ook ʼn trap wys, of ʼn gladde enkele buitelyn met ʼn interne skeidingslyn?', answer: 'ʼn Gladde enkele buitelyn met ʼn interne skeidingslyn', checkMode: 'self', explanation: 'Die bo-aansig wys die gekombineerde vloerplan as een buitelyn (aangesien hoogteverskille nie van reguit bo af verskyn nie), met ʼn lyn wat merk waar die twee afdelings saamvoeg.' },
        { difficulty: 'Medium', question: 'Waarom is die plan- (bo-) aansig gewoonlik die nuttigste aansig vir ʼn argitek wat ʼn saamgestelde gebou beplan?', answer: 'Omdat dit die volle vloeruitleg van elke afdeling van reguit bo af wys, met niks agter iets anders weggesteek nie, wat dit maklik maak om presies te sien hoe die afdelings saamgevoeg is en hoeveel spasie elkeen gebruik.', checkMode: 'self', explanation: 'ʼn Planaansig onthul die hele voetspoor sonder dat enige deel weggesteek is deur hoogteverskille, wat presies is wat nodig is vir akkurate vloerbeplanning.' },
        { difficulty: 'Medium', question: 'ʼn Enkelverdieping-huis het ʼn aangehegte motorhuis van presies dieselfde hoogte en dieselfde diepte. Sou die vooraansig ʼn sigbare trap tussen hulle wys?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'As albei afdelings dieselfde hoogte is, is daar geen hoogteverskil om ʼn sigbare trap in die vooraansig te skep nie — dit sou soos een deurlopende reghoek lyk (dalk met ʼn interne lyn wat die voeg merk).' },

        // Blok 6 — Multi-deel redenering (Moeilik)
        { difficulty: 'Hard', question: 'ʼn Saamgestelde voorwerp is ʼn reghoekige boks met ʼn kleiner kubus wat bo-op sit, buite-middel, nader aan die agter-regter hoek (nie enige rand raak nie).\na) Sou die vooraansig die klein kubus gesentreerd of buite-middel wys?\nb) Sou die bo-aansig die klein kubus se vierkant gesentreerd wys, of nader aan een kant?', answer: 'a) Buite-middel (na regs)   b) Buite-middel (na agter-regs)', checkMode: 'auto', parts: [
          { label: 'a) Posisie van die klein kubus in die vooraansig', correctAnswer: 'Buite-middel, na regs', correctAnswers: ['Buite-middel, na regs', 'buite-middel na regs', 'buite-middel', 'nie gesentreerd nie', 'na regs'], explanation: 'Aangesien die klein kubus nader aan die regterkant is, wys die vooraansig dit buite-middel na regs, nie in die middel nie.' },
          { label: 'b) Posisie van die klein kubus in die bo-aansig', correctAnswer: 'Buite-middel, na agter-regs', correctAnswers: ['Buite-middel, na agter-regs', 'buite-middel na agter-regs', 'buite-middel', 'nie gesentreerd nie', 'na agter-regs'], explanation: 'Die bo-aansig wys die ware voetspoor-posisie, so die klein kubus se vierkant sou nader aan die agter-regter hoek van die groot boks se buitelyn verskyn, nie in die middel nie.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy verstaan duidelik saamgestelde voorwerpe en hoe hulle van voor, agter, links, regs, bo en onder lyk.' },
        { minScore: 15, message: 'Goeie werk! Jy verstaan die meeste idees oor saamgestelde voorwerpe en hul aansigte — gaan die vrae na wat jy verkeerd gehad het.' },
        { minScore: 10, message: 'Goeie poging! Gaan deur die studiegids oor die aansig van saamgestelde voorwerpe, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Saamgestelde voorwerpe en aansigte (Maklik)
        { difficulty: 'Easy', question: 'Waar of onwaar: ʼn saamgestelde voorwerp word van slegs een eenvoudige 3D-vorm gemaak.', answer: 'Onwaar', checkMode: 'auto', correctAnswer: 'Onwaar', correctAnswers: ['Onwaar', 'onwaar'], explanation: 'ʼn Saamgestelde voorwerp word gemaak deur twee of meer eenvoudige 3D-vorms te kombineer — ʼn enkele eenvoudige vorm op sy eie is nie saamgesteld nie.' },
        { difficulty: 'Easy', question: 'Watter paar gesigspunte, saam met voor en agter, voltooi die vier posisies wat in ʼn volle sirkel rondom ʼn voorwerp gerangskik is?', answer: 'Links en regs', checkMode: 'auto', correctAnswer: 'Links en regs', correctAnswers: ['Links en regs', 'links en regs'], explanation: 'Voor, agter, links en regs is die vier gesigspunte wat in ʼn sirkel rondom ʼn voorwerp op grondvlak gerangskik is.' },
        { difficulty: 'Easy', question: 'ʼn Potlood (voor dit geslyp is) is ʼn sesookige prisma. Sodra dit geslyp is, watter vorm word bygevoeg om dit ʼn saamgestelde voorwerp te maak?', answer: 'ʼn Keël', checkMode: 'auto', correctAnswer: 'ʼn Keël', correctAnswers: ['ʼn Keël', 'keël', 'ʼn keel', 'keel'], explanation: 'Om ʼn potlood te slyp voeg ʼn keël-vormige punt by die sesookige prisma-liggaam, wat die potlood ʼn saamgestelde voorwerp maak.' },
        { difficulty: 'Easy', question: 'Waarom word die aansig van onder gewoonlik nie in die alledaagse lewe gesien nie?', answer: 'Omdat die meeste voorwerpe op ʼn oppervlak rus (soos ʼn tafel of die grond), wat die aansig van reg onder blokkeer.', checkMode: 'self', explanation: 'Die onderkant van ʼn voorwerp rus gewoonlik op ʼn oppervlak, wat die onderkant wegsteek van sig, selfs al bestaan die aansig van onder tegnies steeds.' },

        // Blok 2 — Pas aansigte by saamgestelde voorwerpe (Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'ʼn Speelgoedhuis se vooraansig is ʼn vyfhoek-vorm (reghoek + driehoek). Watter deel van die huis is verantwoordelik vir die driehoek-deel van die buitelyn?', answer: 'Die dak', checkMode: 'auto', correctAnswer: 'Die dak', correctAnswers: ['Die dak', 'dak', 'die dak'], explanation: 'Die skuins, driehoekige-prisma dak skep die driehoek-deel van die vyfhoek-vormige vooraansig-buitelyn.' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde voorwerp is ʼn reghoekige prisma met ʼn driehoekige-prisma dak, nok wat van voor na agter loop. Sou die bo-aansig die dak se noklyn wys, of sou die noklyn onsigbaar wees van reguit bo af?', answer: 'Die bo-aansig sou die noklyn wys', checkMode: 'self', explanation: 'As jy reguit af kyk, kan jy die vou-lyn sien waar die twee dakhellings ontmoet, so die nok verskyn as ʼn lyn in die middel van die reghoekige voetspoor.' },
        { difficulty: 'Medium', question: 'ʼn Wye boks het ʼn nouer boks gesentreerd bo-op, maar hierdie keer is die nouer boks baie korter (skaars hoër as ʼn dun deksel). Sou die vooraansig steeds ʼn duidelike tweetrap-vorm wys, of sou dit amper soos ʼn enkele reghoek lyk?', answer: 'Dit sou amper soos ʼn enkele reghoek lyk', checkMode: 'self', explanation: 'As die boonste boks baie kort is, is die "trap" in hoogte skaars sigbaar, so die algehele buitelyn lyk na aan ʼn eenvoudige reghoek eerder as ʼn duidelike tweetrap-vorm.' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde voorwerp is gemaak van twee identiese kubusse, een presies bo-op die ander gebalanseer, albei perfek belyn. Watter enkele eenvoudige vorm sou die vooraansig lyk?', answer: 'ʼn Hoë reghoek (twee keer so hoog soos dit wyd is)', checkMode: 'self', explanation: 'Aangesien albei kubusse dieselfde grootte is en perfek belyn, is daar glad geen trap nie — die vooraansig is eenvoudig een hoë reghoek, twee keer die hoogte van ʼn enkele kubus.' },

        // Blok 3 — Kubusstrukture (Medium)
        { difficulty: 'Medium', question: 'ʼn Kubusstruktuur het 2 kolomme langs mekaar: een 4 kubusse hoog, een 1 kubus hoog. Wat is die vooraansig-hoogteverskil tussen die twee kolomme?', answer: '3 kubusse', checkMode: 'auto', correctAnswer: '3 kubusse', correctAnswers: ['3 kubusse', '3', 'drie kubusse'], explanation: 'Die hoogteverskil is 4 kubusse min 1 kubus = 3 kubusse.', diagramSvg: '<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="90" width="30" height="40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="100" y="50" width="30" height="80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'Vir dieselfde struktuur (kolomme van 4 kubusse en 1 kubus, albei 1 kubus diep, langs mekaar), hoe sou die syaansig lyk?', answer: 'ʼn Eenvoudige reghoek, 4 kubusse hoog', checkMode: 'self', explanation: 'As jy van die kant af kyk (van die punt af na die ry), kan jy net die hoogste kolom se hoogte sien, 4 kubusse, as ʼn enkele platboonste reghoek — die korter kolom is weggesteek in hierdie projeksie.' },
        { difficulty: 'Medium', question: 'ʼn Kubusstruktuur is gebou sodat elke kolom presies dieselfde hoogte is. Sou die vooraansig enige trappe wys?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'As elke kolom dieselfde hoogte is, is die vooraansig ʼn gladde reghoek sonder trappe, ongeag hoe die voetspoor gerangskik is.' },
        { difficulty: 'Medium', question: 'Twee kubustorings van verskillende hoogtes staan apart van mekaar (met ʼn gaping tussen hulle), eerder as om te raak. Sou die vooraansig een verbinde vorm wys, of twee aparte reghoeke?', answer: 'Twee aparte reghoeke', checkMode: 'auto', correctAnswer: 'Twee aparte reghoeke', correctAnswers: ['Twee aparte reghoeke', 'twee reghoeke', 'aparte reghoeke'], explanation: 'Aangesien daar ʼn sigbare gaping tussen die torings is, wys die vooraansig twee duidelike reghoeke met ʼn gaping tussen hulle, nie een saamgevoegde buitelyn nie.' },

        // Blok 4 — Pas/identifiseer saamgestelde voorwerpe vanaf leidrade (Medium)
        { difficulty: 'Medium', question: 'ʼn Prent wys ʼn eenvoudige, hoë reghoek sonder trappe, kepe of geneste vorms enige plek. Wat kan jy aflei — is dit meer waarskynlik ʼn eenvoudige enkele vorm, of ʼn baie versigtig belynde saamgestelde voorwerp waar elke deel presies dieselfde breedte en diepte het?', answer: 'Dit kan enige een wees — die prent alleen kan hulle nie onderskei nie', checkMode: 'self', explanation: 'ʼn Enkele hoë reghoekige prisma en ʼn stapel bokse van dieselfde grootte sou albei ʼn identiese eenvoudige-reghoek aansig van voor produseer, so een aansig alleen is nie altyd genoeg om seker te wees nie.' },
        { difficulty: 'Medium', question: 'ʼn Vuurpylvormige saamgestelde voorwerp is ʼn silinder-liggaam met ʼn keël-neus bo-op. Sou jy van voor ʼn reghoek met ʼn driehoek bo-op verwag, soortgelyk aan ʼn speelgoedhuis?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'ʼn Silinder van voor gesien lyk soos ʼn reghoek, en ʼn keël bo-op lyk soos ʼn driehoek, wat dieselfde vyfhoek-styl buitelyn as ʼn speelgoedhuis gee, selfs al is die werklike 3D-vorms verskillend (silinder en keël, nie prismas nie).', diagramSvg: '<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><path d="M80,140 L80,80 L100,40 L120,80 L120,140 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde voorwerp se bo-aansig wys ʼn reghoek met ʼn klein sirkel gesentreerd daarbinne. Watter soort saamgestelde voorwerp kan dit wees (dink aan ʼn alledaagse silinder-op-boks voorwerp)?', answer: 'ʼn Boks met ʼn silinder (soos ʼn kers, ʼn koppie, of ʼn blik) gesentreerd bo-op', checkMode: 'self', explanation: 'ʼn Reghoek (die boks se voetspoor) met ʼn sirkel daarbinne (die silinder se voetspoor) pas by ʼn saamgestelde voorwerp gemaak van ʼn boks met ʼn silindriese deel gesentreerd bo-op.' },
        { difficulty: 'Medium', question: 'Waarom kan dit soms moeilik wees om ʼn saamgestelde voorwerp korrek te identifiseer vanaf net sy bo-aansig?', answer: 'Omdat die bo-aansig nooit hoogte wys nie, so verskeie baie verskillende saamgestelde voorwerpe (met verskillende hoogtes of aantal gestapelde dele) kan presies dieselfde voetspoor-buitelyn deel.', checkMode: 'self', explanation: 'Aangesien die bo-aansig hoogte heeltemal ignoreer, kan dit nie onderskei tussen saamgestelde voorwerpe wat dieselfde voetspoor deel maar verskil in hoe hoog elke deel is nie.' },

        // Blok 5 — Saamgestelde geboue (Medium)
        { difficulty: 'Medium', question: 'ʼn Woonstelblok het ʼn hoër hooftoring en ʼn korter, wyer ingangsgedeelte wat op grondvlak aangeheg is, albei met dieselfde diepte. Watter aansig sou die hoogteverskil tussen die toring en die ingang die duidelikste wys?', answer: 'Vooraansig (of syaansig wat die lengte van die ingangsgedeelte wys)', checkMode: 'self', explanation: 'Aangesien albei gedeeltes dieselfde diepte deel, wys die vooraansig (of ʼn syaansig langs die breedte van die ingangsgedeelte) die duidelikste trap tussen die hoë toring en die korter ingang.' },
        { difficulty: 'Medium', question: 'ʼn Skoolsaal is aan die kant van die klaskamerblok aangeheg, en die saal is beide hoër en verder teruggesit as die klaskamerblok. Sou ʼn eenvoudige vooraansig alleen genoeg wees om hierdie uitleg volledig te beskryf?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Aangesien die saal verder teruggesit is (ʼn diepteverskil) sowel as hoër, kan ʼn vooraansig alleen nie die diepte-verplasing wys nie — ʼn bo- (plan-) aansig sou ook nodig wees.' },
        { difficulty: 'Medium', question: 'Op ʼn plan- (bo-) aansig van ʼn huis en motorhuis, wat merk gewoonlik die grens tussen die twee gedeeltes?', answer: 'ʼn Interne lyn wat die skeidingsmuur wys', checkMode: 'self', explanation: 'ʼn Planaansig wys gewoonlik die gekombineerde buitelyn van die hele gebou met ʼn interne lyn wat merk waar die skeidingsmuur tussen gedeeltes is.' },

        // Blok 6 — Multi-deel redenering (Moeilik)
        { difficulty: 'Hard', question: 'ʼn Saamgestelde kubusstruktuur het 5 kubusse: ʼn ry van 3 kubusse langs die voorkant (elk 1 kubus hoog), plus 2 meer kubusse direk bo-op die linkerste kubus in daardie ry gestapel (wat daardie kolom altesaam 3 kubusse hoog maak).\na) Watter vorm is die vooraansig?\nb) Watter vorm is die bo-aansig?', answer: 'a) ʼn Trapvorm (hoë kolom links, 2 kort kolomme regs)   b) 3 vierkante in ʼn ry (voetspoor), wat geen hoogte-inligting wys nie', checkMode: 'auto', parts: [
          { label: 'a) Vorm van die vooraansig', correctAnswer: 'ʼn Trapvorm (hoog aan die linkerkant, laag aan die regterkant)', correctAnswers: ['ʼn Trapvorm (hoog aan die linkerkant, laag aan die regterkant)', 'trapvorm', 'ʼn trapvorm'], explanation: 'Die linkerste kolom is 3 kubusse hoog terwyl die ander twee net 1 kubus hoog is, so die vooraansig wys ʼn duidelike trap af van links na regs.' },
          { label: 'b) Vorm van die bo-aansig', correctAnswer: '3 vierkante in ʼn ry', correctAnswers: ['3 vierkante in ʼn ry', 'drie vierkante in ʼn ry', '3 vierkante'], explanation: 'Die voetspoor bly onveranderd deur die ekstra gestapelde kubusse — daar is steeds net 3 kubusposisies langs die ry, so die bo-aansig wys 3 vierkante in ʼn ry.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy verstaan duidelik saamgestelde voorwerpe en hoe hulle van voor, agter, links, regs, bo en onder lyk.' },
        { minScore: 15, message: 'Goeie werk! Jy verstaan die meeste idees oor saamgestelde voorwerpe en hul aansigte — gaan die vrae na wat jy verkeerd gehad het.' },
        { minScore: 10, message: 'Goeie poging! Gaan deur die studiegids oor die aansig van saamgestelde voorwerpe, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Saamgestelde voorwerpe en aansigte (Maklik)
        { difficulty: 'Easy', question: 'Wat is die naam van die gesigspunt wanneer jy reguit af op ʼn voorwerp kyk vanaf bo?', answer: 'Bo (bo-/planaansig)', checkMode: 'auto', correctAnswer: 'Bo', correctAnswers: ['Bo', 'bo', 'bo-aansig', 'die bo-aansig', 'planaansig'], explanation: 'Om reguit af van bo te kyk word die aansig van bo genoem, ook bekend as die bo- of planaansig.' },
        { difficulty: 'Easy', question: 'Voltooi: voor en agter is een paar teenoorgestelde posisies; links en regs is nog ʼn paar; ______ en ______ is die derde paar.', answer: 'Bo en onder', checkMode: 'auto', correctAnswer: 'Bo en onder', correctAnswers: ['Bo en onder', 'bo en onder'], explanation: 'Die drie pare teenoorgestelde gesigspunte is voor/agter, links/regs, en bo/onder.' },
        { difficulty: 'Easy', question: 'ʼn Liasseerkabinet is gemaak van twee reghoekige prismas van verskillende groottes wat saam gestapel is. Is dit ʼn saamgestelde voorwerp?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'Aangesien dit gemaak is deur twee eenvoudige 3D-vorms (twee reghoekige prismas) te kombineer, is dit ʼn saamgestelde voorwerp.' },
        { difficulty: 'Easy', question: 'Watter gesigspunt is direk teenoorgesteld die linkeraansig?', answer: 'Regteraansig', checkMode: 'auto', correctAnswer: 'Regteraansig', correctAnswers: ['Regteraansig', 'regteraansig', 'die regteraansig'], explanation: 'Links en regs is teenoorgestelde gesigspunte rondom ʼn voorwerp.' },

        // Blok 2 — Pas aansigte by saamgestelde voorwerpe (Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'Watter aansig van ʼn speelgoedhuis (mure + driehoekige dak, nok van voor na agter) sou net ʼn eenvoudige reghoek wys, met die dak se piek wat plat eerder as spits lyk?', answer: 'Syaansig (langs die nok kykend)', checkMode: 'self', explanation: 'As jy in die rigting kyk waarin die nok loop, wys die dak se maksimum hoogte oral, so dit lyk soos ʼn platboonste eenvoudige reghoek.' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde voorwerp se bo-aansig wys twee geneste reghoeke. Wat vertel dit jou oor hoe die voorwerp gebou is?', answer: 'Dit vertel jou die voorwerp is ʼn gestapelde saamgestelde voorwerp, met ʼn kleiner deel gesentreerd bo-op ʼn groter deel.', checkMode: 'self', explanation: 'Geneste reghoeke in ʼn bo-aansig is die klassieke teken van ʼn kleiner vorm wat gesentreerd bo-op ʼn groter een sit.', diagramSvg: '<svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="40" width="130" height="100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="50" y="60" width="80" height="60" fill="none" stroke="#2563eb" stroke-width="1.5"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Boks het ʼn kleiner boks aan sy kant aangeheg (nie bo-op gestapel nie, maar op dieselfde hoogte langs mekaar saamgevoeg). Sou die bo-aansig geneste reghoeke wys, of ʼn enkele wyer reghoek met ʼn interne skeidingslyn?', answer: 'ʼn Enkele wyer reghoek met ʼn interne skeidingslyn', checkMode: 'self', explanation: 'Aangesien die bokse op dieselfde hoogte langs mekaar saamgevoeg is (nie gestapel nie), wys die bo-aansig een gekombineerde buitelyn met ʼn lyn wat die voeg merk, nie geneste vorms nie.' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde voorwerp gemaak van ʼn boks met ʼn keël gesentreerd bo-op sou watter vorm as sy vooraansig hê: ʼn vyfhoek (reghoek + spits driehoek) of ʼn reghoek met ʼn plat bokant?', answer: 'ʼn Vyfhoek (reghoek + spits driehoek)', checkMode: 'auto', correctAnswer: 'ʼn Vyfhoek (reghoek + spits driehoek)', correctAnswers: ['ʼn Vyfhoek (reghoek + spits driehoek)', 'vyfhoek', 'ʼn vyfhoek', 'reghoek met ʼn driehoek bo-op'], explanation: 'ʼn Keël van voor (of die kant) gesien wys ʼn spits driehoek, so ʼn boks met ʼn gesentreerde keël bo-op gee ʼn vyfhoek-vormige vooraansig, net soos die speelgoedhuis.' },

        // Blok 3 — Kubusstrukture (Medium)
        { difficulty: 'Medium', question: 'ʼn Kubusstruktuur het 3 kolomme in ʼn ry met hoogtes 1, 3 en 1 (kort, hoog, kort). Beskryf die vorm van die vooraansig.', answer: 'ʼn Vorm wat kort is, dan opstyg na ʼn hoë piek in die middel, dan weer terugval na kort — soos ʼn nou toring tussen twee lae blokke', checkMode: 'self', explanation: 'Met hoogtes 1, 3, 1 dwarsoor die ry, wys die vooraansig ʼn lae trap op na ʼn hoë middelkolom, dan ʼn trap weer af — ʼn piekvorm in die middel.' },
        { difficulty: 'Medium', question: 'Vir dieselfde struktuur (hoogtes 1, 3, 1 in ʼn ry, almal 1 kubus diep), hoe sou die syaansig lyk?', answer: 'ʼn Eenvoudige reghoek, 3 kubusse hoog (die hoogte van die hoogste kolom)', checkMode: 'self', explanation: 'Van die kant af is net die hoogste kolom se hoogte (3 kubusse) sigbaar as ʼn platboonste reghoek — die korter kolomme aan weerskante is weggesteek in hierdie aansig.' },
        { difficulty: 'Medium', question: 'Waar of onwaar: die bo-aansig van ʼn kubusstruktuur kan gebruik word om die presiese hoogte van elke kolom uit te werk.', answer: 'Onwaar', checkMode: 'auto', correctAnswer: 'Onwaar', correctAnswers: ['Onwaar', 'onwaar'], explanation: 'Die bo-aansig wys net die voetspoor (watter posisies kubusse het), nooit die hoogtes nie — jy kan nie kolomhoogtes uit die bo-aansig alleen uitwerk nie.' },
        { difficulty: 'Medium', question: 'Twee kubusstrukture het presies dieselfde vooraansig en presies dieselfde syaansig, maar verskillende bo-aansigte. Kan hulle steeds verskillende strukture in geheel wees?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'Aangesien die voetspoor (bo-aansig) verskillend is, is die strukture verskillend gerangskik selfs al val hul voor- en sysilhoeëtte toevallig saam — dit wys waarom meer as een aansig dikwels nodig is.' },

        // Blok 4 — Pas/identifiseer saamgestelde voorwerpe vanaf leidrade (Medium)
        { difficulty: 'Medium', question: 'ʼn Saamgestelde voorwerp se vooraansig is ʼn eenvoudige reghoek, maar sy bo-aansig is ʼn L-vorm. Wat vertel dit jou oor die hoogtes van die verskillende dele van die voetspoor?', answer: 'Al die dele van die L-vormige voetspoor moet presies dieselfde hoogte wees, aangesien die vooraansig glad geen trappe wys nie.', checkMode: 'self', explanation: 'ʼn Eenvoudige reghoek vooraansig (geen trappe) gekombineer met ʼn L-vormige bo-aansig beteken die voorwerp het ʼn onreëlmatige voetspoor maar ʼn heeltemal eenvormige hoogte oral.', diagramSvg: '<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><path d="M40,90 L40,30 L70,30 L70,60 L130,60 L130,90 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="70" y1="60" x2="70" y2="90" stroke="#2563eb" stroke-width="1.5"/><line x1="100" y1="60" x2="100" y2="90" stroke="#2563eb" stroke-width="1.5"/></svg>' },
        { difficulty: 'Medium', question: 'Jy kry net ʼn saamgestelde voorwerp se vooraansig, wat ʼn wye kort reghoek met ʼn nou hoë reghoek gesentreerd bo-op wys. Kan jy vanaf hierdie aansig alleen sê of die bo-aansig geneste reghoeke of ʼn L-vorm sou wees?', answer: 'Nee — die vooraansig alleen kan jou nie die diepte-rangskikking van die dele vertel nie, net hul breedte en hoogte.', checkMode: 'self', explanation: 'Die vooraansig laat diepte-inligting heeltemal saamval, so dit kan nie onderskei tussen ʼn gesentreerde stapel (geneste reghoeke in plan) en ʼn buite-middel of langs-mekaar rangskikking nie (wat ʼn ander bo-aansig-vorm kon gee).' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde voorwerp is ʼn boks met ʼn kleiner boks bo-op, maar die kleiner boks hang oor die rand aan een kant uit eerder as om gesentreerd of heeltemal bevat te wees. Sou dit sigbaar wees in die vooraansig, die bo-aansig, of albei?', answer: 'Albei', checkMode: 'auto', correctAnswer: 'Albei', correctAnswers: ['Albei', 'albei'], explanation: 'ʼn Oorhang aan een kant sou verskyn as ʼn asimmetriese trap in die vooraansig EN as ʼn buite-middel (nie-geneste) buitelyn in die bo-aansig.' },
        { difficulty: 'Medium', question: 'Waarom verskaf ontwerpers dikwels ʼn vooraansig, ʼn syaansig ÉN ʼn bo-aansig van ʼn nuwe saamgestelde voorwerp, eerder as net een?', answer: 'Omdat geen enkele aansig elke kenmerk van ʼn saamgestelde voorwerp wys nie — hoogteverskille, voetspoor-vorm en simmetrie kan elkeen in sommige aansigte weggesteek wees en net in ander onthul word, so veelvuldige aansigte is nodig vir ʼn volledige beskrywing.', checkMode: 'self', explanation: 'Elke aansig onthul verskillende inligting en steek ander inligting weg, so ʼn volledige en akkurate beskrywing van ʼn saamgestelde voorwerp benodig gewoonlik meer as een aansig.' },

        // Blok 5 — Saamgestelde geboue (Medium)
        { difficulty: 'Medium', question: 'ʼn Blok klaskamers het ʼn hoër personeelkamer-gedeelte aan een punt aangeheg, met die personeelkamer verder teruggesit (groter diepte) as die klaskamers. Watter aansig sou die beste wys dat die personeelkamer verder teruggesit is: die vooraansig of die bo- (plan-) aansig?', answer: 'Bo- (plan-) aansig', checkMode: 'auto', correctAnswer: 'Bo- (plan-) aansig', correctAnswers: ['Bo- (plan-) aansig', 'bo-aansig', 'planaansig', 'die bo-aansig', 'die planaansig'], explanation: 'Diepteverskille (hoe ver terug ʼn gedeelte gesit is) kan net akkuraat in ʼn plan- (bo-) aansig gesien word, aangesien voor- en syaansigte nie diepte direk wys nie.', diagramSvg: '<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><path d="M30,40 L150,40 L150,70 L105,70 L105,130 L75,130 L75,70 L30,70 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'Waarom kan twee verskillende saamgestelde geboue identiese vooraansigte hê maar baie verskillende bo- (plan-) aansigte?', answer: 'Omdat die vooraansig net breedte en hoogte wys, nie diepte nie, so geboue kan presies dieselfde buitelyn van voor hê terwyl hulle baie verskillend gerangskik is in terme van diepte en vloeruitleg.', checkMode: 'self', explanation: 'Vooraansigte ignoreer diepte heeltemal, so geboue met heeltemal verskillende vloerplanne (bo-aansigte) kan steeds ʼn identiese vooraansig-silhoeët deel.' },
        { difficulty: 'Medium', question: 'ʼn Motorhuis is aan ʼn huis aangeheg sodat sy daklyn presies met die hoogte van die huismuur ooreenstem (glad geen trap nie). Sou die vooraansig enige bewys wys dat die motorhuis ʼn aparte gedeelte is?', answer: 'Moontlik net ʼn dun vertikale lyn wat die voeg merk, maar geen hoogtetrap nie', checkMode: 'self', explanation: 'As daar geen hoogteverskil is nie, wys die vooraansig ʼn gladde buitelyn met, op die meeste, ʼn lyn wat merk waar die twee gedeeltes saamgevoeg is — daar is geen sigbare trap nie.' },

        // Blok 6 — Multi-deel redenering (Moeilik)
        { difficulty: 'Hard', question: 'ʼn Saamgestelde voorwerp is gebou van ʼn wye, plat reghoekige basis met ʼn hoë, nou silinder wat regop in die presiese middel van die basis staan (soos ʼn trofee).\na) Sou die vooraansig en die syaansig identies of verskillend wees?\nb) Sou die bo-aansig een sirkel wys, of ʼn reghoek met ʼn sirkel gesentreerd daarbinne?', answer: 'a) Identies (aangesien ʼn silinder van elke kant af dieselfde lyk)   b) ʼn Reghoek met ʼn sirkel gesentreerd daarbinne', checkMode: 'auto', parts: [
          { label: 'a) Vooraansig vergeleke met syaansig', correctAnswer: 'Identies', correctAnswers: ['Identies', 'identies', 'dieselfde'], explanation: 'ʼn Silinder lyk presies dieselfde (ʼn reghoek) van elke rigting rondom, so solank die basis ook simmetries is, val die voor- en syaansig van die hele trofee ooreen.' },
          { label: 'b) Vorm gewys in die bo-aansig', correctAnswer: 'ʼn Reghoek met ʼn sirkel gesentreerd daarbinne', correctAnswers: ['ʼn Reghoek met ʼn sirkel gesentreerd daarbinne', 'reghoek met ʼn sirkel binne-in', 'ʼn reghoek met ʼn gesentreerde sirkel'], explanation: 'As jy reguit afkyk, sien jy die reghoekige basis se buitelyn met die silinder se sirkelvormige deursnee gesentreerd daarbinne.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy verstaan duidelik saamgestelde voorwerpe en hoe hulle van voor, agter, links, regs, bo en onder lyk.' },
        { minScore: 15, message: 'Goeie werk! Jy verstaan die meeste idees oor saamgestelde voorwerpe en hul aansigte — gaan die vrae na wat jy verkeerd gehad het.' },
        { minScore: 10, message: 'Goeie poging! Gaan deur die studiegids oor die aansig van saamgestelde voorwerpe, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

  ],
}
