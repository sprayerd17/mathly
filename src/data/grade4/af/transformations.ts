import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Transformasies',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT ARE TRANSFORMATIONS?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-are-transformations',
      title: 'Wat is Transformasies?',
      icon: '🔀',
      explanation: `
<p style="margin-bottom:14px;">'n <strong>Transformasie</strong> is 'n manier om 'n vorm <strong>te beweeg of die posisie daarvan te verander</strong> sonder om die grootte daarvan te verander. Watter transformasie jy ook al toepas, die vorm waarmee jy eindig is presies dieselfde grootte en vorm as die een waarmee jy begin het — net die <strong>posisie of oriëntasie</strong> daarvan kan verskil.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Sleutelreël 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">Na enige transformasie bly die vorm presies dieselfde <strong>grootte</strong> en <strong>vorm</strong>. Slegs die <strong>posisie</strong> (waar dit is) of <strong>oriëntasie</strong> (watter kant dit toe kyk) verander. Dink daaraan soos wanneer jy 'n legkaartstukkie optel en beweeg — dit is steeds dieselfde stukkie.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Die drie tipes transformasie</div>
  <div style="display:flex;flex-direction:column;gap:14px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Translasie<br/><span style="font-weight:400;font-size:12px;">(gly)</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong style="color:#1e40af;">'n Vorm in enige rigting beweeg</strong> — op, af, links, regs of diagonaal — sonder om dit te draai of om te flip. Die vorm gly asof dit op 'n plat oppervlak beweeg. Elke punt op die vorm beweeg dieselfde <strong>afstand</strong> in dieselfde <strong>rigting</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Refleksie<br/><span style="font-weight:400;font-size:12px;">(flip)</span></span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong style="color:#dc2626;">'n Vorm oor 'n lyn omflip</strong> (genoem die spieëllyn of refleksielyn) om 'n <strong>spieëlbeeld</strong> aan die ander kant te skep. Die gereflekteerde vorm kyk in die teenoorgestelde rigting. Die afstand vanaf elke punt tot die spieëllyn bly dieselfde aan albei kante.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Rotasie<br/><span style="font-weight:400;font-size:12px;">(draai)</span></span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">'n Vorm om 'n vaste punt draai</strong> wat die draaipunt (middelpunt van rotasie) genoem word. Die vorm kan kloksgewys of anti-kloksgewys draai met 'n kwartdraai (90°), 'n halwe draai (180°) of 'n volle draai (360°). Die vorm se grootte verander nie — dit verander net watter kant dit toe kyk.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Vinnige vergelyking</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:10px 14px;text-align:left;color:#1e40af;font-weight:700;">Transformasie</th>
          <th style="padding:10px 14px;text-align:left;color:#1e40af;font-weight:700;">Ander naam</th>
          <th style="padding:10px 14px;text-align:left;color:#1e40af;font-weight:700;">Wat gebeur</th>
          <th style="padding:10px 14px;text-align:left;color:#1e40af;font-weight:700;">Verander grootte?</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:700;color:#1e40af;">Translasie</td>
          <td style="padding:10px 14px;color:#64748b;">Gly</td>
          <td style="padding:10px 14px;color:#475569;">Vorm beweeg na 'n nuwe posisie</td>
          <td style="padding:10px 14px;color:#16a34a;font-weight:700;">Nee</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:700;color:#dc2626;">Refleksie</td>
          <td style="padding:10px 14px;color:#64748b;">Flip</td>
          <td style="padding:10px 14px;color:#475569;">Vorm flip om 'n spieëlbeeld te skep</td>
          <td style="padding:10px 14px;color:#16a34a;font-weight:700;">Nee</td>
        </tr>
        <tr>
          <td style="padding:10px 14px;font-weight:700;color:#16a34a;">Rotasie</td>
          <td style="padding:10px 14px;color:#64748b;">Draai</td>
          <td style="padding:10px 14px;color:#475569;">Vorm draai om 'n vaste punt</td>
          <td style="padding:10px 14px;color:#16a34a;font-weight:700;">Nee</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: "'n Vierkant word 3 blokke na regs geskuif. Watter tipe transformasie is dit?",
          steps: [
            "Vra: gly die vorm sonder om te draai of te flip?",
            "Die vierkant beweeg 3 blokke na regs — elke hoekpunt beweeg dieselfde afstand in dieselfde rigting.",
            "Daar is geen flip oor 'n lyn nie en geen draai om 'n punt nie.",
            'Beweeg sonder om te draai of te flip is \'n <strong style="color:#1e40af;">translasie</strong>.',
          ],
          answer: "Translasie. Die vierkant gly na regs sonder om te draai of te flip.",
        },
        {
          question: "'n Driehoek word oor 'n vertikale lyn geflip. Watter tipe transformasie is dit?",
          steps: [
            'Vra: word die vorm oor \'n lyn <strong style="color:#dc2626;">geflip</strong>?',
            "Die driehoek flip oor 'n vertikale lyn — dit skep 'n spieëlbeeld aan die ander kant.",
            "Die driehoek kyk nou in die teenoorgestelde rigting, asof dit in 'n spieël kyk.",
            'Flip oor \'n lyn is \'n <strong style="color:#dc2626;">refleksie</strong>.',
          ],
          answer: "Refleksie. Die driehoek skep 'n spieëlbeeld aan die ander kant van die lyn.",
        },
      ],
      practiceQuestions: [],
      videoPlaceholder:
        'Kort video wat die drie tipes transformasies bekendstel — translasie, refleksie en rotasie — met eenvoudige vormvoorbeelde',
      diagramPlaceholder:
        "Drie voorbeelde langs mekaar wat dieselfde L-vorm wys — eers word dit na regs geskuif (translasie), dan oor 'n lyn geflip (refleksie), dan 90 grade gedraai (rotasie)",
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — TRANSLATION (SLIDING)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'translation-sliding',
      title: 'Translasie (Gly)',
      icon: '➡️',
      explanation: `
<p style="margin-bottom:14px;"><strong>Translasie</strong> beteken <strong>'n vorm van een posisie na 'n ander te skuif</strong>. Wanneer 'n vorm getransleer word, draai dit nie en flip dit nie — dit beweeg net. Elke enkele punt op die vorm beweeg dieselfde <strong>afstand</strong> in dieselfde <strong>rigting</strong>, sodat die vorm identies lyk wanneer dit by sy nuwe posisie aankom.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Sleutelreël 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">In 'n translasie <strong>draai die vorm nie</strong> en <strong>flip dit nie</strong>. Die oorspronklike vorm (<strong style="color:#1e40af;">blou</strong>) en die getransleerde vorm (<strong style="color:#16a34a;">groen</strong>) is identies — dieselfde grootte, dieselfde hoeke, dieselfde syklengtes, net op 'n ander plek.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Hoe om 'n translasie te beskryf</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Sê hoeveel eenhede</strong> die vorm beweeg het — tel die blokkies op die rooster.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Sê in watter rigting</strong> dit beweeg het — <strong style="color:#dc2626;">links</strong>, <strong style="color:#dc2626;">regs</strong>, <strong style="color:#dc2626;">op</strong> of <strong style="color:#dc2626;">af</strong> (of 'n kombinasie van twee rigtings).</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Voorbeeld</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">"Die vorm het <strong>4 eenhede na regs</strong> en <strong>2 eenhede op</strong> beweeg." — dit beskryf die translasie volledig.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Kleurgids vir diagramme</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:3px;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blou = oorspronklike vorm</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:3px;background:#16a34a;display:inline-block;"></span>
      <span style="color:#16a34a;font-weight:700;">Groen = getransleerde vorm</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Rooi pyl = rigting van beweging</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            "'n Reghoek is by posisie A op 'n rooster. Dit word 5 eenhede na regs en 3 eenhede af getransleer. Beskryf wat met elke hoekpunt gebeur.",
          steps: [
            'In \'n translasie beweeg <strong style="color:#1e40af;">elke hoekpunt presies dieselfde afstand in dieselfde rigting</strong>.',
            'Elke hoekpunt beweeg <strong style="color:#dc2626;">5 eenhede na regs</strong> en <strong style="color:#dc2626;">3 eenhede af</strong>.',
            'Die vorm lyk <strong>identies</strong> in sy nuwe posisie — dieselfde grootte, dieselfde vorm, dieselfde oriëntasie.',
            'Slegs die <strong style="color:#16a34a;">posisie</strong> het verander. Die reghoek is nie gedraai of geflip nie.',
          ],
          answer:
            "Die reghoek gly na 'n nuwe posisie. Al die hoekpunte beweeg 5 eenhede regs en 3 eenhede af. Die vorm bly onveranderd in grootte en oriëntasie.",
        },
        {
          question:
            "'n Driehoek het 'n hoekpunt by (2, 3) op 'n rooster. Dit word 4 eenhede links en 1 eenheid op getransleer. Waar is daardie hoekpunt nou?",
          steps: [
            '<strong style="color:#dc2626;">Beweeg 4 eenhede links</strong> — begin by kolom 2 en tel 4 blokkies na links. Die hoekpunt beweeg na kolomposisie 2 − 4, wat 4 blokkies links van waar dit begin het, is.',
            '<strong style="color:#dc2626;">Beweeg 1 eenheid op</strong> — begin by ry 3 en tel 1 blokkie op. Die nuwe ry is 3 + 1 = <strong>4</strong>.',
            "Die hoekpunt is nou by 'n posisie <strong>4 blokkies na links</strong> en <strong>1 blokkie hoër</strong> as voorheen.",
          ],
          answer:
            "Die hoekpunt is nou 4 blokkies na links en 1 blokkie hoër as sy oorspronklike posisie.",
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        "Rooster wat 'n blou reghoek in sy oorspronklike posisie wys, met 'n groen reghoek wat wys waar dit land nadat dit 5 eenhede regs en 3 eenhede af geskuif is, met 'n rooi pyl wat die rigting van beweging wys",
      videoPlaceholder:
        'Kort video wat translasie van vorms op \'n rooster wys, en verduidelik dat elke punt dieselfde afstand in dieselfde rigting beweeg',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — REFLECTION (FLIPPING)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reflection-flipping',
      title: 'Refleksie (Flip)',
      icon: '🪞',
      explanation: `
<p style="margin-bottom:14px;"><strong>Refleksie</strong> beteken <strong>'n vorm oor 'n lyn te flip</strong> om 'n <strong>spieëlbeeld</strong> aan die ander kant te skep. Die lyn waaroor dit flip, word die <strong>refleksielyn</strong> of <strong>spieëllyn</strong> genoem. Dink daaraan asof jy 'n vorm voor 'n spieël hou — die refleksie is dieselfde vorm, maar dit kyk in die teenoorgestelde rigting.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Sleutelreël 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">Elke punt van die vorm is <strong>dieselfde afstand vanaf die spieëllyn</strong> aan albei kante. As 'n hoekpunt 3 blokke links van die lyn is, sal sy spieëlbeeld presies 3 blokke regs wees. Die oorspronklike (<strong style="color:#1e40af;">blou</strong>) en gereflekteerde vorm (<strong style="color:#16a34a;">groen</strong>) is altyd dieselfde grootte.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Reëls van refleksie</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Die gereflekteerde vorm is <strong>dieselfde grootte en vorm</strong> as die oorspronklike — dit is 'n perfekte spieëlbeeld.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Die gereflekteerde vorm <strong>kyk in die teenoorgestelde rigting</strong> — dit is geflip, nie net verskuif nie.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Elke punt</strong> van die oorspronklike vorm is dieselfde afstand vanaf die <strong style="color:#dc2626;">spieëllyn</strong> as die ooreenstemmende punt van die gereflekteerde vorm.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Die <strong style="color:#dc2626;">spieëllyn</strong> kan <strong>vertikaal</strong> (op-af), <strong>horisontaal</strong> (links-regs) of <strong>diagonaal</strong> wees.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Kleurgids vir diagramme</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:3px;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blou = oorspronklike vorm</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:3px;background:#16a34a;display:inline-block;"></span>
      <span style="color:#16a34a;font-weight:700;">Groen = gereflekteerde vorm</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:3px;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Rooi lyn = spieëllyn</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: "'n Driehoek word oor 'n vertikale spieëllyn gereflekteer. Beskryf wat gebeur.",
          steps: [
            '<strong style="color:#1e40af;">Meet elke hoekpunt</strong> van die driehoek vanaf die <strong style="color:#dc2626;">spieëllyn</strong> — tel hoeveel blokke elke hoekpunt vanaf die lyn is.',
            '<strong style="color:#16a34a;">Teken die spieëlbeeld</strong> — plot elke hoekpunt dieselfde aantal blokke aan die ander kant van die spieëllyn.',
            'Verbind die hoekpunte om die gereflekteerde driehoek te voltooi.',
            "Die gereflekteerde driehoek <strong>kyk nou in die teenoorgestelde rigting</strong> — dit is 'n spieëlbeeld.",
          ],
          answer:
            "Die gereflekteerde driehoek is 'n spieëlbeeld — dieselfde grootte en vorm as die oorspronklike, maar dit kyk in die teenoorgestelde rigting.",
        },
        {
          question:
            "'n Vorm het 'n hoekpunt 3 blokke links van 'n vertikale spieëllyn. Waar is die spieëlbeeld van daardie hoekpunt?",
          steps: [
            'Die hoekpunt is <strong style="color:#1e40af;">3 blokke links</strong> van die <strong style="color:#dc2626;">spieëllyn</strong>.',
            'Die reël van refleksie: elke punt is <strong>dieselfde afstand</strong> vanaf die spieëllyn aan albei kante.',
            'Dus moet die spieëlbeeld van daardie hoekpunt <strong style="color:#16a34a;">3 blokke regs</strong> van die spieëllyn wees.',
          ],
          answer: "Die spieëlbeeld van daardie hoekpunt is 3 blokke regs van die spieëllyn.",
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        "Rooster wat 'n blou pylvorm links van 'n vertikale rooi spieëllyn wys, met sy groen gereflekteerde beeld regs, met gelyke afstande van elke hoekpunt tot die lyn gemerk",
      videoPlaceholder:
        'Kort video wat refleksie van vorms oor vertikale en horisontale spieëllyne wys, en verduidelik dat elke punt dieselfde afstand vanaf die spieëllyn aan albei kante is',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — ROTATION (TURNING)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rotation-turning',
      title: 'Rotasie (Draai)',
      icon: '🔄',
      explanation: `
<p style="margin-bottom:14px;"><strong>Rotasie</strong> beteken <strong>'n vorm om 'n vaste punt te draai</strong>. Daardie vaste punt word die <strong>middelpunt van rotasie</strong> genoem. Die vorm draai soos 'n wiel om hierdie punt — elke deel van die vorm draai deur dieselfde hoek. Die grootte en vorm van die figuur verander nooit tydens rotasie nie.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Sleutelreël 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">Die oorspronklike vorm (<strong style="color:#1e40af;">blou</strong>) en die geroteerde vorm (<strong style="color:#16a34a;">groen</strong>) is altyd dieselfde grootte. Slegs die <strong>oriëntasie</strong> (watter kant die vorm toe kyk) verander. Die <strong style="color:#dc2626;">middelpunt van rotasie</strong> bly vas — dit beweeg glad nie.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Sleutelterme</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Middelpunt van rotasie</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Die <strong style="color:#dc2626;">vaste punt</strong> waarom die vorm draai. Dit kan binne die vorm, op die rand, of heeltemal buite die vorm wees.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Rigting</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Kloksgewys</strong> — draai in dieselfde rigting as die horlosiewysers (regs, dan af, dan links, dan op). <strong>Anti-kloksgewys</strong> — draai in die teenoorgestelde rigting.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Hoek van rotasie</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">Hoe ver die vorm draai: <strong style="color:#16a34a;">kwartdraai = 90°</strong>, <strong style="color:#16a34a;">halwe draai = 180°</strong>, <strong style="color:#16a34a;">volle draai = 360°</strong>.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Opsommingstabel van rotasie</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:10px 14px;text-align:left;color:#1e40af;font-weight:700;">Draai</th>
          <th style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;">Grade</th>
          <th style="padding:10px 14px;text-align:left;color:#1e40af;font-weight:700;">Hoe dit lyk</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:700;color:#16a34a;">Kwartdraai</td>
          <td style="padding:10px 14px;text-align:center;font-weight:700;color:#0f1f3d;">90°</td>
          <td style="padding:10px 14px;color:#475569;">Vorm het een slag na regs (of links) gedraai. Soos 'n horlosiewyser wat van 12 na 3 beweeg.</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:700;color:#1e40af;">Halwe draai</td>
          <td style="padding:10px 14px;text-align:center;font-weight:700;color:#0f1f3d;">180°</td>
          <td style="padding:10px 14px;color:#475569;">Vorm lyk onderstebo in vergelyking met die oorspronklike. Soos 'n horlosiewyser wat van 12 na 6 beweeg.</td>
        </tr>
        <tr>
          <td style="padding:10px 14px;font-weight:700;color:#dc2626;">Volle draai</td>
          <td style="padding:10px 14px;text-align:center;font-weight:700;color:#0f1f3d;">360°</td>
          <td style="padding:10px 14px;color:#475569;">Vorm keer terug na presies waar dit begin het — dit lyk dieselfde as die oorspronklike.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            "'n Vierkant word 'n kwartdraai kloksgewys om sy middelpunt geroteer. Beskryf wat gebeur.",
          steps: [
            'Die vierkant draai <strong style="color:#16a34a;">90° kloksgewys</strong> om sy middelpunt.',
            'Die grootte en vorm bly presies dieselfde — al vier sye is steeds gelyk en al vier hoeke is steeds 90°.',
            "Omdat 'n vierkant <strong>4 gelyke sye en 4 gelyke hoeke</strong> het, lewer 'n kwartdraai 'n vorm wat identies aan die oorspronklike lyk.",
          ],
          answer:
            "Die vierkant lyk onveranderd na 'n kwartdraai omdat dit 4 gelyke sye en 4 gelyke hoeke het — dit het rotasiesimmetrie.",
        },
        {
          question:
            "'n L-vorm word 'n halwe draai kloksgewys geroteer. Beskryf hoe die geroteerde vorm lyk.",
          steps: [
            'Die L-vorm draai <strong style="color:#1e40af;">180° kloksgewys</strong> om die middelpunt van rotasie.',
            'Die vorm is nou <strong>onderstebo</strong> in vergelyking met die oorspronklike.',
            'Die kort arm wat na bo gewys het, wys nou af; die lang arm wat na regs gewys het, wys nou links.',
            "Dit lyk soos 'n gereflekteerde en geflipte weergawe — soortgelyk aan 'n onderstebo L of 'n Γ-vorm, afhangende van die presiese oriëntasie.",
          ],
          answer:
            "Na 'n halwe draai lyk die L-vorm onderstebo in vergelyking met die oorspronklike.",
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        "Vier posisies van 'n L-vorm wat wys hoe dit 'n kwartdraai, halwe draai, drie-kwartdraai en volle draai kloksgewys draai, met die middelpunt van rotasie in rooi gemerk",
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — TESSELLATING PATTERNS USING TRANSFORMATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tessellating-patterns-using-transformations',
      title: 'Teëlpatrone met Transformasies',
      icon: '🧩',
      explanation: `
<p style="margin-bottom:14px;"><strong>Teëlwerk (tessellasie)</strong> is 'n patroon wat gemaak word deur 'n vorm oor en oor te herhaal sodat dit 'n plat oppervlak bedek <strong>sonder gapings en sonder oorvleueling</strong>. Transformasies — translasie, refleksie en rotasie — is die gereedskap wat ons gebruik om vorms na hul teëlposisies te beweeg.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Hoe elke transformasie 'n teëlpatroon skep</div>
  <div style="display:flex;flex-direction:column;gap:14px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Translasie<br/><span style="font-weight:400;font-size:12px;">(gly)</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong style="color:#1e40af;">Skuif die vorm</strong> herhaaldelik in rye en kolomme. Elke kopie van die vorm is in presies dieselfde oriëntasie — geeneen word geflip of gedraai nie. Vierkante, reghoeke en reëlmatige seshoeke teëlwerk perfek deur translasie alleen.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Refleksie<br/><span style="font-weight:400;font-size:12px;">(flip)</span></span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong style="color:#dc2626;">Flip die vorm afwisselend</strong> om ruimte te vul. Reghoekige driehoeke teëlwerk pragtig deur refleksie — flip een driehoek om en dit pas perfek teen die oorspronklike om 'n reghoek te vorm, wat dan getransleer kan word.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Rotasie<br/><span style="font-weight:400;font-size:12px;">(draai)</span></span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Draai die vorm</strong> om 'n gedeelde hoekpunt om ruimte te vul. Parallelogramme teëlwerk deur rotasie — draai een 180° om die middelpunt van 'n sy en dit pas perfek teen sy buurman.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Teëlwerk in die regte lewe 🌍</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li>Vloerteëls in 'n badkamer — vierkante getransleer in rye en kolomme</li>
    <li>'n Heuningkoek — reëlmatige seshoeke wat teëlwerk deur translasie</li>
    <li>Baksteenmure — reghoeke getransleer met afwisselende verskuiwings</li>
    <li>Kwiltlappiesgoed — driehoeke en vierkante gekombineer deur refleksie en rotasie</li>
  </ul>
</div>
`,
      workedExamples: [
        {
          question:
            "Hoe kan jy translasie gebruik om 'n teëlpatroon met vierkante te skep?",
          steps: [
            "Plaas <strong style=\"color:#1e40af;\">een vierkant</strong> op die rooster.",
            '<strong style="color:#1e40af;">Skuif dit na regs</strong> totdat sy linkerrand die regterrand van die eerste vierkant raak — geen gaping, geen oorvleueling nie.',
            "Hou aan skuif na regs totdat die hele ry gevul is.",
            '<strong style="color:#1e40af;">Skuif die voltooide ry opwaarts</strong> totdat sy onderrand die bo-rand van die eerste ry raak, en herhaal.',
          ],
          answer:
            "Deur vierkante links, regs en opwaarts te transleer, skep jy 'n perfekte teëlroosterpatroon sonder gapings en sonder oorvleueling.",
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        "Drie klein roosters langs mekaar — eerste wys teëlwerk deur translasie van vierkante, tweede wys teëlwerk deur refleksie van reghoekige driehoeke, derde wys teëlwerk deur rotasie van 'n parallelogram",
      videoPlaceholder:
        'Kort video wat wys hoe translasie, refleksie en rotasie gebruik word om teëlpatrone te skep',
    },
  ],

  topicPractice: [

    // ── SECTION 1 — What are Transformations ─────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Noem die drie tipes transformasies wat in Graad 4 gedek word.',
      checkMode: 'auto',
      answer: 'Translasie, refleksie en rotasie',
      correctAnswer: 'translation, reflection and rotation',
      correctAnswers: [
        // with "and" — all 6 orderings
        'translation, reflection and rotation',
        'translation, rotation and reflection',
        'reflection, translation and rotation',
        'reflection, rotation and translation',
        'rotation, translation and reflection',
        'rotation, reflection and translation',
        // without "and" — all 6 orderings
        'translation, reflection, rotation',
        'translation, rotation, reflection',
        'reflection, translation, rotation',
        'reflection, rotation, translation',
        'rotation, translation, reflection',
        'rotation, reflection, translation',
      ],
      explanation:
        'Die drie tipes transformasies is translasie (gly), refleksie (flip) en rotasie (draai).',
    },

    {
      difficulty: 'Medium',
      question: 'Pas elke beskrywing by die korrekte tipe transformasie.',
      checkMode: 'auto',
      answer: 'a) Refleksie   b) Translasie   c) Rotasie',
      parts: [
        {
          label: "a) 'n Vorm word oor 'n lyn geflip om 'n spieëlbeeld te skep",
          correctAnswer: 'Reflection',
          correctAnswers: ['Reflection', 'reflection'],
          explanation: "Om 'n vorm oor 'n spieëllyn te flip om 'n spieëlbeeld te skep, is 'n refleksie.",
        },
        {
          label: "b) 'n Vorm word van een posisie na 'n ander geskuif sonder om te draai",
          correctAnswer: 'Translation',
          correctAnswers: ['Translation', 'translation'],
          explanation: "Om 'n vorm na 'n nuwe posisie te skuif sonder om dit te draai of te flip, is 'n translasie.",
        },
        {
          label: "c) 'n Vorm word om 'n vaste punt gedraai",
          correctAnswer: 'Rotation',
          correctAnswers: ['Rotation', 'rotation'],
          explanation: "Om 'n vorm om 'n vaste punt (die middelpunt van rotasie) te draai, is 'n rotasie.",
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'Na enige transformasie bly twee dinge oor die vorm presies dieselfde.',
      checkMode: 'auto',
      answer: 'a) Grootte   b) Vorm   c) Posisie of oriëntasie',
      parts: [
        {
          label: 'a) Eerste ding wat dieselfde bly',
          correctAnswer: 'size',
          correctAnswers: ['size', 'Size', 'the size'],
          explanation: "Die grootte van die vorm verander nooit na 'n transformasie nie — dit bly presies dieselfde.",
        },
        {
          label: 'b) Tweede ding wat dieselfde bly',
          correctAnswer: 'shape',
          correctAnswers: ['shape', 'Shape', 'the shape'],
          explanation: "Die vorm (sy hoeke, verhoudings en aantal sye) verander nooit na 'n transformasie nie.",
        },
        {
          label: 'c) Wat is die enigste ding wat verander?',
          correctAnswer: 'position or orientation',
          correctAnswers: [
            'position or orientation',
            'position',
            'orientation',
            'position and orientation',
            'positionororientation',
            'positionandorientation',
          ],
          explanation: "Slegs die posisie (waar die vorm is) of oriëntasie (watter kant dit toe kyk) kan tydens 'n transformasie verander.",
        },
      ],
    },

    // ── SECTION 2 — Translation ───────────────────────────────────────────────

    {
      difficulty: 'Easy',
      question: "'n Vierkant word 4 eenhede na regs geskuif. Watter tipe transformasie is dit?",
      checkMode: 'auto',
      answer: 'Translasie',
      correctAnswer: 'Translation',
      correctAnswers: ['Translation', 'translation', 'a translation'],
      explanation: "Die vierkant gly na regs sonder om te draai of te flip — dit is 'n translasie.",
    },

    {
      difficulty: 'Medium',
      question: "'n Vorm word 3 eenhede regs en 2 eenhede op getransleer.",
      checkMode: 'auto',
      answer: 'a) 3 eenhede   b) 2 eenhede   c) Nee',
      parts: [
        {
          label: 'a) Hoe ver beweeg elke hoekpunt van die vorm na regs?',
          correctAnswer: '3',
          correctAnswers: ['3', 'three', '3 units', '3units'],
          explanation: "In 'n translasie beweeg elke punt dieselfde afstand. Al die hoekpunte beweeg 3 eenhede na regs.",
        },
        {
          label: 'b) Hoe ver beweeg elke hoekpunt op?',
          correctAnswer: '2',
          correctAnswers: ['2', 'two', '2 units', '2units'],
          explanation: 'Al die hoekpunte beweeg 2 eenhede op — elke punt reis dieselfde afstand in dieselfde rigting.',
        },
        {
          label: 'c) Verander die vorm van grootte of vorm na die translasie?',
          correctAnswer: 'No',
          correctAnswers: ['No', 'no', 'No it does not', 'no it does not', 'neitherchanges', 'neither'],
          explanation: 'Translasie beweeg net die vorm — dit verander nooit die grootte of vorm daarvan nie.',
        },
      ],
    },

    // Q6 a/b/c — auto checked
    {
      difficulty: 'Hard',
      question:
        "'n Reghoek word 5 eenhede links en 4 eenhede af getransleer.",
      checkMode: 'auto',
      answer: 'a) Links   b) Af   c) 1 eenheid van die linkerrand',
      parts: [
        {
          label: 'a) In watter rigting beweeg die vorm horisontaal?',
          correctAnswer: 'Left',
          correctAnswers: ['Left', 'left', 'to the left'],
          explanation: 'Die vorm word 5 eenhede na links getransleer, so die horisontale rigting is links.',
        },
        {
          label: 'b) In watter rigting beweeg dit vertikaal?',
          correctAnswer: 'Down',
          correctAnswers: ['Down', 'down', 'downward', 'downwards'],
          explanation: 'Die vorm word 4 eenhede af getransleer, so die vertikale rigting is af.',
        },
        {
          label: 'c) \'n Hoekpunt was 6 eenhede vanaf die linkerrand. Waar is dit nadat dit 5 eenhede links beweeg het?',
          correctAnswer: '1 unit from the left edge',
          correctAnswers: [
            '1 unit from the left edge',
            '1unitfromtheleftedge',
            '1',
            '1 unit',
            '1unit',
          ],
          explanation: 'Die hoekpunt het 6 eenhede vanaf die linkerrand begin. Deur 5 eenhede links te beweeg: 6 − 5 = 1 eenheid vanaf die linkerrand.',
        },
      ],
    },

    // Q6 d — self mark
    {
      difficulty: 'Hard',
      question:
        "'n Reghoek word 5 eenhede links en 4 eenhede af getransleer.\nd) Moet die reghoek herteken word, of net na sy nuwe posisie geskuif word?",
      checkMode: 'self',
      answer:
        'Net na sy nuwe posisie geskuif. Die reghoek is identies in grootte en vorm — al die sye en hoeke bly onveranderd. Slegs sy posisie op die rooster het verander.',
    },

    // ── SECTION 3 — Reflection ────────────────────────────────────────────────

    {
      difficulty: 'Easy',
      question: "'n Vorm word oor 'n vertikale spieëllyn geflip. Watter tipe transformasie is dit?",
      checkMode: 'auto',
      answer: 'Refleksie',
      correctAnswer: 'Reflection',
      correctAnswers: ['Reflection', 'reflection', 'a reflection'],
      explanation: "Om 'n vorm oor 'n spieëllyn te flip skep 'n spieëlbeeld — dit is 'n refleksie.",
    },

    {
      difficulty: 'Medium',
      question: "'n Driehoek het 'n hoekpunt 4 blokke links van 'n vertikale spieëllyn.",
      checkMode: 'auto',
      answer: 'a) 4 blokke   b) Die regterkant   c) Nee',
      parts: [
        {
          label: 'a) Hoe ver is die spieëlbeeld van daardie hoekpunt vanaf die spieëllyn?',
          correctAnswer: '4',
          correctAnswers: ['4', 'four', '4 blocks', '4blocks'],
          explanation: 'Elke punt is dieselfde afstand vanaf die spieëllyn aan albei kante. Die oorspronklike hoekpunt is 4 blokke weg, so die gereflekteerde hoekpunt is ook 4 blokke weg.',
        },
        {
          label: 'b) Aan watter kant van die spieëllyn is die gereflekteerde hoekpunt?',
          correctAnswer: 'right',
          correctAnswers: [
            'right', 'Right',
            'the right side', 'therightside',
            'right side', 'rightside',
            'to the right', 'totheright',
          ],
          explanation: 'Die oorspronklike hoekpunt is links van die lyn, so die spieëlbeeld verskyn aan die teenoorgestelde kant — regs.',
        },
        {
          label: 'c) Verander die driehoek van grootte na refleksie?',
          correctAnswer: 'No',
          correctAnswers: ['No', 'no', 'no it does not', 'noidoesnot'],
          explanation: "Refleksie verander nooit die grootte van 'n vorm nie — slegs die oriëntasie daarvan verander.",
        },
      ],
    },

    // Q9 a/b/c — auto checked
    {
      difficulty: 'Hard',
      question:
        "'n Vorm word oor 'n horisontale spieëllyn gereflekteer. Die oorspronklike vorm is bo die lyn.",
      checkMode: 'auto',
      answer: 'a) Onder die lyn   b) 5 blokke onder die spieëllyn   c) Spieëlbeeld',
      parts: [
        {
          label: 'a) Waar verskyn die gereflekteerde vorm?',
          correctAnswer: 'below the line',
          correctAnswers: [
            'below the line', 'belowtheline',
            'below', 'below the mirror line', 'belowthemirrorline',
            'underneath the line', 'under the line',
          ],
          explanation: "Wanneer 'n vorm oor 'n horisontale lyn gereflekteer word, verskyn die spieëlbeeld aan die teenoorgestelde kant — onder die lyn.",
        },
        {
          label: 'b) \'n Hoekpunt is 5 blokke bo die spieëllyn — waar is die gereflekteerde hoekpunt?',
          correctAnswer: '5 blocks below the mirror line',
          correctAnswers: [
            '5 blocks below the mirror line',
            '5blocksbelowthemirrorline',
            '5 blocks below',
            '5blocksbelow',
            '5',
          ],
          explanation: 'Elke punt is dieselfde afstand vanaf die spieëllyn aan albei kante. 5 blokke bo → 5 blokke onder.',
        },
        {
          label: 'c) Watter woord beskryf die verband tussen die oorspronklike vorm en sy refleksie?',
          correctAnswer: 'mirror image',
          correctAnswers: [
            'mirror image', 'mirrorimage',
            'a mirror image', 'amirrorimage',
          ],
          explanation: 'Die gereflekteerde vorm is die spieëlbeeld van die oorspronklike — dieselfde grootte en vorm, maar dit kyk in die teenoorgestelde rigting.',
        },
      ],
    },

    // Q9 d — self mark
    {
      difficulty: 'Hard',
      question:
        "'n Vorm word oor 'n horisontale spieëllyn gereflekteer. Die oorspronklike vorm is bo die lyn.\nd) Kyk die gereflekteerde vorm in dieselfde rigting as die oorspronklike?",
      checkMode: 'self',
      answer:
        'Nee. Die gereflekteerde vorm kyk in die teenoorgestelde rigting. Refleksie flip die vorm, so wat in die oorspronklike na bo gewys het, wys nou na onder in die refleksie.',
    },

    // ── SECTION 4 — Rotation ──────────────────────────────────────────────────

    {
      difficulty: 'Easy',
      question: "'n Vorm word 90 grade kloksgewys om 'n vaste punt gedraai. Watter tipe transformasie is dit?",
      checkMode: 'auto',
      answer: 'Rotasie',
      correctAnswer: 'Rotation',
      correctAnswers: ['Rotation', 'rotation', 'a rotation'],
      explanation: "Om 'n vorm om 'n vaste punt te draai, is 'n rotasie. 90° kloksgewys is 'n kwartdraai kloksgewys.",
    },

    {
      difficulty: 'Medium',
      question: "'n L-vorm word 'n kwartdraai kloksgewys geroteer.",
      checkMode: 'auto',
      answer: 'a) 90 grade   b) Kloksgewys   c) Nee',
      parts: [
        {
          label: "a) Hoeveel grade is 'n kwartdraai?",
          correctAnswer: '90',
          correctAnswers: ['90', '90 degrees', '90degrees', '90°', 'ninety'],
          explanation: "'n Kwartdraai is 90 grade — soos 'n horlosiewyser wat van 12 na 3 beweeg.",
        },
        {
          label: 'b) In watter rigting draai die vorm?',
          correctAnswer: 'Clockwise',
          correctAnswers: ['Clockwise', 'clockwise'],
          explanation: "Die vraag sê dat die vorm 'n kwartdraai kloksgewys geroteer word.",
        },
        {
          label: 'c) Verander die grootte van die vorm na rotasie?',
          correctAnswer: 'No',
          correctAnswers: ['No', 'no', 'no it does not', 'noidoesnot'],
          explanation: "Rotasie verander nooit die grootte van 'n vorm nie — slegs die oriëntasie daarvan verander.",
        },
      ],
    },

    // Q12 a/b — auto checked
    {
      difficulty: 'Hard',
      question: "'n Vorm word 'n halwe draai anti-kloksgewys geroteer.",
      checkMode: 'auto',
      answer: 'a) 180 grade   b) Af',
      parts: [
        {
          label: "a) Hoeveel grade is 'n halwe draai?",
          correctAnswer: '180',
          correctAnswers: ['180', '180 degrees', '180degrees', '180°', 'one hundred and eighty'],
          explanation: "'n Halwe draai is 180 grade — soos 'n horlosiewyser wat van 12 na 6 beweeg.",
        },
        {
          label: "b) As die vorm voorheen na bo gewys het, in watter rigting wys dit na 'n halwe draai?",
          correctAnswer: 'Down',
          correctAnswers: ['Down', 'down', 'downward', 'downwards'],
          explanation: "'n Halwe draai (180°) flip die oriëntasie. As die vorm na bo gewys het, wys dit na 'n halwe draai na onder.",
        },
      ],
    },

    // Q12 c/d — self mark
    {
      difficulty: 'Hard',
      question:
        "'n Vorm word 'n halwe draai anti-kloksgewys geroteer.\nc) Hoe verskil 'n halwe draai kloksgewys van 'n halwe draai anti-kloksgewys?\nd) Na 'n volle draai, waar eindig die vorm?",
      checkMode: 'self',
      answer:
        'c) Hulle eindig in dieselfde finale posisie — beide \'n halwe draai kloksgewys en \'n halwe draai anti-kloksgewys draai die vorm 180°, wat dieselfde resultaat lewer.\nd) Na \'n volle draai (360°) eindig die vorm terug in sy oorspronklike posisie, en kyk dit in dieselfde rigting as toe dit begin het.',
    },

    // ── SECTION 5 — Tessellating Patterns Using Transformations ───────────────

    {
      difficulty: 'Easy',
      question:
        "Watter transformasie sou jy gebruik om 'n vierkant herhaaldelik na regs te skuif om 'n ry vierkante te skep?",
      checkMode: 'auto',
      answer: 'Translasie',
      correctAnswer: 'Translation',
      correctAnswers: ['Translation', 'translation', 'a translation'],
      explanation:
        "Om 'n vorm herhaaldelik in een rigting te skuif sonder om dit te draai of te flip, is 'n translasie.",
    },

    // Q14a — auto checked
    {
      difficulty: 'Medium',
      question:
        "'n Patroon word geskep deur 'n driehoek afwisselend te flip om 'n ry sonder gapings te vul.",
      checkMode: 'auto',
      answer: 'a) Refleksie',
      parts: [
        {
          label: 'a) Watter transformasie word gebruik?',
          correctAnswer: 'Reflection',
          correctAnswers: ['Reflection', 'reflection', 'a reflection'],
          explanation:
            "Om 'n vorm oor 'n lyn te flip om 'n spieëlbeeld te skep, is 'n refleksie.",
        },
      ],
    },

    // Q14 b/c — self mark
    {
      difficulty: 'Medium',
      question:
        "'n Patroon word geskep deur 'n driehoek afwisselend te flip om 'n ry sonder gapings te vul.\nb) Waarom skep dit 'n teëlpatroon?\nc) Noem een ander vorm wat kan teëlwerk deur refleksie te gebruik.",
      checkMode: 'self',
      answer:
        'b) Wanneer \'n reghoekige driehoek geflip (gereflekteer) word, pas sy spieëlbeeld perfek langs die skuinssy — die twee driehoeke vorm saam \'n reghoek. Reghoeke kan dan getransleer word om \'n ry sonder gapings te vul.\nc) Aanvaar enige geldige vorm — bv. \'n reghoek, \'n vierkant, \'n parallelogram of \'n reëlmatige seshoek.',
    },

    // Q15 — all self mark
    {
      difficulty: 'Hard',
      question:
        "'n Leerder wil 'n teëlpatroon met 'n L-vorm skep.\na) Watter transformasie sal die L-vorm in staat stel om sonder gapings saam te pas?\nb) Beskryf hoe jy die L-vorms sou rangskik om te teëlwerk.\nc) Kan jy meer as een tipe transformasie gebruik om 'n teëlpatroon te skep?\nd) Noem 'n voorbeeld uit die regte lewe van 'n teëlpatroon wat met rotasie geskep is.",
      checkMode: 'self',
      answer:
        'a) Rotasie — deur \'n L-vorm 180° te draai, kan dit perfek teen die oorspronklike inskuif.\nb) Draai afwisselende L-vorms 180° (\'n halwe draai) om die punt waar hulle ontmoet, sodat elke geroteerde stuk stewig teen sy buurman pas soos legkaartstukkies, sonder gapings.\nc) Ja — baie teëlpatrone gebruik \'n kombinasie van translasie, refleksie en rotasie saam.\nd) Aanvaar enige geldige voorbeeld soos \'n waaierpatroon, sommige vloerteëlontwerpe, of \'n draaiende-waaier-teëlpatroon.',
    },

  ],

  scoreMessages: [
    { minScore: 34, message: 'Volpunte! Jy het Transformasies bemeester.' },
    { minScore: 26, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het weer deur en jy sal dit bemeester.' },
    { minScore: 17, message: 'Goeie poging! Gaan terug en lees deur die afdelings waarmee jy gesukkel het.' },
    { minScore: 0, message: 'Hou aan probeer! Lees weer deur die studiegids noukeurig en probeer dan weer.' },
  ],
}
