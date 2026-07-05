import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Inhoud en Volume',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — CAPACITY VS VOLUME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'capacity-vs-volume',
      title: 'Inhoud teenoor Volume',
      icon: '🧴',
      explanation: `
<p style="margin-bottom:14px;">Wanneer ons van vloeistowwe in houers praat, gebruik ons twee verskillende woorde: <strong style="color:#1e40af;">inhoud</strong> en <strong style="color:#16a34a;">volume</strong>. Hulle klink amper dieselfde, maar hulle beteken verskillende dinge.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Inhoud teenoor Volume</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Inhoud<br/><span style="font-weight:400;font-size:12px;">(die houer)</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong style="color:#1e40af;">Inhoud</strong> is die <strong>maksimum hoeveelheid</strong> wat 'n houer kan hou wanneer dit heeltemal vol is. Dit beskryf die grootte van die houer self.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Volume<br/><span style="font-weight:400;font-size:12px;">(wat binne-in is)</span></span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Volume</strong> is die <strong>werklike hoeveelheid</strong> vloeistof of stof wat op hierdie oomblik binne-in die houer is. Dit kan minder as die inhoud wees.</span>
    </div>

  </div>
</div>

<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#15803d;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Voorbeeld uit die alledaagse lewe 💧</div>
  <p style="font-size:15px;color:#14532d;margin-bottom:8px;">'n Bottel het 'n <strong style="color:#1e40af;">inhoud</strong> van <strong>2 liter</strong> — dit is die meeste wat dit ooit kan hou.</p>
  <p style="font-size:15px;color:#14532d;margin-bottom:0;">Die bottel het tans 1,5 liter water daarin. Die <strong style="color:#16a34a;">volume</strong> water is <strong>1,5 l</strong>.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Eenhede van inhoud en volume</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Milliliter<br/><span style="font-weight:400;font-size:12px;">(ml)</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Klein hoeveelhede.</strong> Gebruik <strong style="color:#1e40af;">milliliter (ml)</strong> vir baie klein hoeveelhede vloeistof — soos 'n dosis medisyne of 'n teelepel olie. 1 ml is 'n baie klein druppel.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Liter<br/><span style="font-weight:400;font-size:12px;">(l)</span></span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong>Groter hoeveelhede.</strong> Gebruik <strong style="color:#16a34a;">liter (l)</strong> vir groter hoeveelhede vloeistof — soos 'n bottel water of 'n pot sop.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Omskakelingsfeit 🔢</span>
  <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:10px;">
    <span style="background:#1e40af;color:#fff;border-radius:8px;padding:6px 16px;font-weight:700;font-size:15px;">1 000 <span style="color:#bfdbfe;">ml</span> = 1 <span style="color:#bbf7d0;">l</span></span>
  </div>
  <p style="margin-top:10px;font-size:14px;color:#78350f;">Om <strong style="color:#16a34a;">l na ml</strong> om te skakel — <strong>vermenigvuldig met 1 000</strong>. &nbsp;&nbsp; Om <strong style="color:#1e40af;">ml na l</strong> om te skakel — <strong>deel deur 1 000</strong>.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Verwysingspunte uit die alledaagse lewe</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 5 ml</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">'n <strong>Teelepel</strong> hou ongeveer <strong style="color:#1e40af;">5 ml</strong> — 'n nuttige verwysing vir baie klein volumes.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 250 ml</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">'n <strong>Koppie</strong> hou ongeveer <strong style="color:#1e40af;">250 ml</strong> — 'n kwart van 'n liter.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">500 ml / 1 l</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">'n <strong>Standaard waterbottel</strong> hou óf <strong style="color:#16a34a;">500 ml</strong> óf <strong style="color:#16a34a;">1 l</strong> — baie algemene groottes.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 5 l</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">'n <strong>Groot pot</strong> hou ongeveer <strong style="color:#16a34a;">5 l</strong> — gebruik om sop te kook of water te kook vir 'n gesin.</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question: "Watter eenheid sal jy gebruik om die inhoud van 'n swembad te meet?",
          steps: [
            "'n Swembad hou 'n <strong>baie groot hoeveelheid</strong> water.",
            'Milliliter is veels te klein — jy sou miljoene daarvan nodig hê, wat nie prakties sin maak nie.',
            '<strong style="color:#16a34a;">Liter (l)</strong> word gebruik vir groot volumes vloeistof.',
          ],
          answer: "Liter (l). 'n Swembad hou 'n baie groot hoeveelheid water, dus is liter die korrekte eenheid.",
        },
        {
          question: 'Watter eenheid sal jy gebruik om \'n dosis medisyne te meet?',
          steps: [
            "'n Dosis medisyne is 'n <strong>baie klein hoeveelheid</strong> vloeistof.",
            'Liter sal veels te groot wees — \'n dosis medisyne is net \'n klein breukdeel van \'n liter.',
            '<strong style="color:#1e40af;">Milliliter (ml)</strong> word gebruik vir klein hoeveelhede soos medisyne, oogdruppels of kookbestanddele.',
          ],
          answer: 'Milliliter (ml). Medisyne word in baie klein hoeveelhede gemeet, dus is milliliter die korrekte eenheid.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A 1 litre bottle shown with markings at 250ml 500ml 750ml and 1000ml with the current volume shown at 750ml to illustrate capacity vs volume',
      videoPlaceholder:
        'Short video explaining the difference between capacity and volume with real life examples of millilitres and litres',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — READING MEASURING CONTAINERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-measuring-containers',
      title: 'Lees van Maatbekers',
      icon: '🧪',
      explanation: `
<p style="margin-bottom:14px;">Maathouers soos <strong>beker</strong> en <strong>meetsilinders</strong> het lyne op die kant gedruk wat <strong style="color:#1e40af;">graderings</strong> genoem word. Hierdie merke help ons om die <strong style="color:#16a34a;">volume</strong> vloeistof binne-in te lees. Om 'n akkurate lesing te kry, moet jy die intervalle noukeurig tel en op ooghoogte lees.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Hoe om 'n maathouer te lees</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Vind die <strong>maksimum inhoud</strong> wat op die houer gemerk is — dit vertel jou die totale omvang van die skaal.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Tel die aantal intervalle</strong> tussen twee <strong style="color:#1e40af;">gemerkte waardes</strong> (die genommerde lyne op die kant).</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Bereken die waarde van elke klein interval</strong> deur die gaping tussen twee gemerkte waardes deur die aantal intervalle te deel.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Lees die <strong style="color:#16a34a;">vlak van die vloeistof</strong> op <strong>ooghoogte</strong> — kyk altyd reguit oor, nie van bo of onder nie.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">5</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Skryf die <strong style="color:#dc2626;">meting</strong> neer met die korrekte eenheid (ml of l).</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Sleutelterme</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="font-size:15px;color:#1e3a8a;"><strong style="color:#1e40af;">Gradering</strong> — 'n lyn op 'n maathouer gemerk om 'n spesifieke volume aan te dui.</div>
    <div style="font-size:15px;color:#1e3a8a;"><strong style="color:#16a34a;">Vloeistofvlak</strong> — waar die oppervlak van die vloeistof op die skaal sit.</div>
    <div style="font-size:15px;color:#1e3a8a;"><strong style="color:#dc2626;">Lesing</strong> — die volume-waarde wat jy neerskryf deur die skaal op die vloeistofvlak te lees.</div>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            "'n Maatbeker gaan van 0 tot 1 000 ml met merke elke 200 ml. Daar is 4 klein intervalle tussen elke 200 ml-merk. Wat is elke klein interval werd?",
          steps: [
            'Elke <strong style="color:#1e40af;">200 ml-afdeling</strong> word in <strong>4 klein intervalle</strong> verdeel.',
            'Deel: <strong style="color:#1e40af;">200</strong> ÷ <strong>4</strong> = <strong style="color:#dc2626;">50</strong>.',
          ],
          answer: 'Elke klein interval is 50 ml werd.',
        },
        {
          question:
            "'n Beker het merke by 0, 500 ml en 1 000 ml. Die vloeistofvlak is halfpad tussen 500 ml en 1 000 ml. Wat is die volume?",
          steps: [
            'Die gaping tussen <strong style="color:#1e40af;">500 ml</strong> en <strong style="color:#1e40af;">1 000 ml</strong> is <strong>500 ml</strong>.',
            'Halfpad = 500 ÷ 2 = <strong>250 ml</strong> bo die 500 ml-merk.',
            '<strong style="color:#1e40af;">500</strong> + <strong>250</strong> = <strong style="color:#dc2626;">750</strong>.',
          ],
          answer: 'Die volume is 750 ml.',
        },
        {
          question:
            "'n Meetsilinder het merke elke 100 ml tot by 500 ml. Daar is 5 klein intervalle tussen elke 100 ml-merk. Die vloeistof is by die derde klein interval na 300 ml. Wat is die volume?",
          steps: [
            'Elke klein interval = <strong style="color:#1e40af;">100</strong> ÷ <strong>5</strong> = <strong>20 ml</strong>.',
            '3 intervalle verby 300 ml: <strong style="color:#1e40af;">300</strong> + (3 × <strong>20</strong>) = 300 + <strong>60</strong> = <strong style="color:#dc2626;">360</strong>.',
          ],
          answer: 'Die volume is 360 ml.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A measuring jug showing markings at 0 200 400 600 800 and 1000ml with the liquid level at 600ml clearly marked with a red line',
      videoPlaceholder:
        'Short video showing how to read a measuring jug or cylinder correctly at eye level and calculate the value of intervals',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CONVERTING BETWEEN MILLILITRES AND LITRES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-ml-litres',
      title: 'Omskakeling Tussen Milliliter en Liter',
      icon: '🔄',
      explanation: `
<p style="margin-bottom:14px;"><strong>Omskakeling</strong> beteken om 'n meting van een eenheid na 'n ander te verander sonder om die werklike hoeveelheid te verander. Alle omskakelings tussen milliliter en liter gebruik een sleutelfeit: <strong style="color:#16a34a;">1 000 ml = 1 l</strong>.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Omskakelingsreëls</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">ml → l<br/><span style="font-weight:400;font-size:12px;">kleiner → groter</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Om van <strong style="color:#1e40af;">ml</strong> na <strong style="color:#dc2626;">l</strong> te gaan — <strong>deel deur <span style="color:#16a34a;">1 000</span></strong>. Die getal word kleiner omdat liter 'n groter eenheid is.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">l → ml<br/><span style="font-weight:400;font-size:12px;">groter → kleiner</span></span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">Om van <strong style="color:#dc2626;">l</strong> na <strong style="color:#1e40af;">ml</strong> te gaan — <strong>vermenigvuldig met <span style="color:#16a34a;">1 000</span></strong>. Die getal word groter omdat milliliter 'n kleiner eenheid is.</span>
    </div>

  </div>
</div>

<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Geheuetruuk 💡</div>
  <div style="color:#7f1d1d;font-size:15px;">Om na 'n <strong>kleiner eenheid</strong> te gaan (<strong style="color:#dc2626;">l</strong> → <strong style="color:#1e40af;">ml</strong>) → <strong style="color:#16a34a;">vermenigvuldig met 1 000</strong> → die getal word <strong>groter</strong>.<br/>Om na 'n <strong>groter eenheid</strong> te gaan (<strong style="color:#1e40af;">ml</strong> → <strong style="color:#dc2626;">l</strong>) → <strong style="color:#16a34a;">deel deur 1 000</strong> → die getal word <strong>kleiner</strong>.</div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Omskakelingsfeit 🔢</span>
  <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:10px;">
    <span style="background:#1e40af;color:#fff;border-radius:8px;padding:6px 16px;font-weight:700;font-size:15px;"><span style="color:#bfdbfe;">1 000 ml</span> = <span style="color:#fca5a5;">1 l</span></span>
  </div>
  <p style="margin-top:10px;font-size:14px;color:#78350f;">Om <strong style="color:#1e40af;">ml na l</strong> om te skakel — <strong>deel deur <span style="color:#16a34a;">1 000</span></strong>. &nbsp;&nbsp; Om <strong style="color:#dc2626;">l na ml</strong> om te skakel — <strong>vermenigvuldig met <span style="color:#16a34a;">1 000</span></strong>.</p>
</div>
`,
      workedExamples: [
        {
          question: 'Skakel 2 500 ml na liter om.',
          steps: [
            'Ons skakel van <strong style="color:#1e40af;">ml</strong> na <strong style="color:#dc2626;">l</strong> om — deel deur <strong style="color:#16a34a;">1 000</strong>.',
            '<strong style="color:#1e40af;">2 500</strong> ÷ <strong style="color:#16a34a;">1 000</strong> = <strong style="color:#dc2626;">2,5</strong>.',
          ],
          answer: '2 500 ml = 2,5 l.',
        },
        {
          question: 'Skakel 3,75 l na ml om.',
          steps: [
            'Ons skakel van <strong style="color:#dc2626;">l</strong> na <strong style="color:#1e40af;">ml</strong> om — vermenigvuldig met <strong style="color:#16a34a;">1 000</strong>.',
            '<strong style="color:#dc2626;">3,75</strong> × <strong style="color:#16a34a;">1 000</strong> = <strong style="color:#1e40af;">3 750</strong>.',
          ],
          answer: '3,75 l = 3 750 ml.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder:
        'Short video showing how to convert between millilitres and litres by multiplying or dividing by 1 000 with worked examples',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — VOLUME USING UNIT CUBES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'volume-unit-cubes',
      title: 'Volume met Eenheidsblokkies',
      icon: '🧊',
      explanation: `
<p style="margin-bottom:14px;">Die <strong>volume</strong> van 'n 3D-voorwerp vertel ons hoeveel spasie dit inneem. Ons kan volume meet deur te tel hoeveel <strong style="color:#1e40af;">eenheidsblokkies</strong> in die voorwerp inpas. 'n Eenheidsblokkie het kante van <strong>1 cm</strong> en 'n volume van <strong style="color:#dc2626;">1 cm³</strong> (een kubieke sentimeter).</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Wat is 'n eenheidsblokkie?</div>
  <div style="display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">1 cm³</span>
    <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">'n <strong style="color:#1e40af;">Eenheidsblokkie</strong> is 'n kubus waar elke kant presies <strong>1 cm</strong> lank is. Die volume daarvan is <strong style="color:#dc2626;">1 kubieke sentimeter (1 cm³)</strong>. Deur te tel hoeveel eenheidsblokkies 'n vorm vul, vind ons die volume daarvan.</span>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Metode: eenheidsblokkies tel</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Tel hoeveel <strong style="color:#1e40af;">eenheidsblokkies</strong> langs die <strong>lengte</strong> inpas.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Tel hoeveel <strong style="color:#1e40af;">eenheidsblokkies</strong> langs die <strong>breedte</strong> inpas.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Tel hoeveel <strong>lae</strong> (die hoogte) daar is.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Vermenigvuldig</strong>: lengte × breedte × hoogte = <strong style="color:#dc2626;">volume in cm³</strong>.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Formule 🔢</span>
  <div style="margin-top:10px;">
    <span style="background:#1e40af;color:#fff;border-radius:8px;padding:6px 16px;font-weight:700;font-size:15px;">Volume = lengte × breedte × hoogte</span>
  </div>
  <p style="margin-top:10px;font-size:14px;color:#78350f;">Elke meting is in <strong style="color:#1e40af;">cm</strong>, dus is die antwoord in <strong style="color:#dc2626;">cm³</strong> (kubieke sentimeter).</p>
</div>
`,
      workedExamples: [
        {
          question:
            "'n Boks is 3 blokkies lank, 2 blokkies breed en 2 blokkies hoog. Wat is die volume daarvan?",
          steps: [
            'Tel die <strong style="color:#1e40af;">blokkies in een laag</strong>: <strong>3</strong> × <strong>2</strong> = <strong>6 blokkies</strong>.',
            'Tel die <strong>lae</strong>: daar is <strong>2 lae</strong>.',
            'Totale volume: <strong>6</strong> × <strong>2</strong> = <strong style="color:#dc2626;">12 cm³</strong>.',
          ],
          answer: 'Die volume is 12 cm³.',
        },
        {
          question:
            "'n Vorm is gemaak van eenheidsblokkies. Deur al die sigbare en verskuilde blokkies te tel, kry jy 18 blokkies. Wat is die volume?",
          steps: [
            "Elke <strong style=\"color:#1e40af;\">eenheidsblokkie</strong> het 'n volume van <strong style=\"color:#dc2626;\">1 cm³</strong>.",
            'Tel al die blokkies — sigbaar en verskuil: <strong>18 blokkies</strong>.',
          ],
          answer: 'Die volume is 18 cm³.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A 3D rectangular box made of unit cubes showing 3 cubes long 2 cubes wide and 2 cubes tall with each cube labelled 1cm cubed',
      videoPlaceholder:
        'Short video showing how to calculate the volume of a 3D shape by counting unit cubes and using length times width times height',
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — GRONDLIGGENDE EENHEIDSOMSKAKELINGS (ml ↔ l) (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Milliliter en Liter',
      questions: [
        { difficulty: 'Easy', question: 'Skakel 1 000 ml om na liter.', answer: '1 l', checkMode: 'auto', correctAnswer: '1l', correctAnswers: ['1l', '1', '1 l'], explanation: 'Deel deur 1 000: 1 000 ÷ 1 000 = 1 l.' },
        { difficulty: 'Easy', question: 'Skakel 2 000 ml om na liter.', answer: '2 l', checkMode: 'auto', correctAnswer: '2l', correctAnswers: ['2l', '2', '2 l'], explanation: 'Deel deur 1 000: 2 000 ÷ 1 000 = 2 l.' },
        { difficulty: 'Easy', question: 'Skakel 3 000 ml om na liter.', answer: '3 l', checkMode: 'auto', correctAnswer: '3l', correctAnswers: ['3l', '3', '3 l'], explanation: 'Deel deur 1 000: 3 000 ÷ 1 000 = 3 l.' },
        { difficulty: 'Easy', question: 'Skakel 4 000 ml om na liter.', answer: '4 l', checkMode: 'auto', correctAnswer: '4l', correctAnswers: ['4l', '4', '4 l'], explanation: 'Deel deur 1 000: 4 000 ÷ 1 000 = 4 l.' },
        { difficulty: 'Easy', question: 'Skakel 5 000 ml om na liter.', answer: '5 l', checkMode: 'auto', correctAnswer: '5l', correctAnswers: ['5l', '5', '5 l'], explanation: 'Deel deur 1 000: 5 000 ÷ 1 000 = 5 l.' },
        { difficulty: 'Easy', question: 'Skakel 500 ml om na liter.', answer: '0,5 l', checkMode: 'auto', correctAnswer: '0.5l', correctAnswers: ['0.5l', '0.5', '0.5 l', '0,5l', '0,5', '0,5 l'], explanation: 'Deel deur 1 000: 500 ÷ 1 000 = 0,5 l.' },
        { difficulty: 'Easy', question: 'Skakel 250 ml om na liter.', answer: '0,25 l', checkMode: 'auto', correctAnswer: '0.25l', correctAnswers: ['0.25l', '0.25', '0.25 l', '0,25l', '0,25', '0,25 l'], explanation: 'Deel deur 1 000: 250 ÷ 1 000 = 0,25 l.' },
        { difficulty: 'Easy', question: 'Skakel 750 ml om na liter.', answer: '0,75 l', checkMode: 'auto', correctAnswer: '0.75l', correctAnswers: ['0.75l', '0.75', '0.75 l', '0,75l', '0,75', '0,75 l'], explanation: 'Deel deur 1 000: 750 ÷ 1 000 = 0,75 l.' },
        { difficulty: 'Medium', question: 'Skakel 1 500 ml om na liter.', answer: '1,5 l', checkMode: 'auto', correctAnswer: '1.5l', correctAnswers: ['1.5l', '1.5', '1.5 l', '1,5l', '1,5', '1,5 l'], explanation: 'Deel deur 1 000: 1 500 ÷ 1 000 = 1,5 l.' },
        { difficulty: 'Medium', question: 'Skakel 2 500 ml om na liter.', answer: '2,5 l', checkMode: 'auto', correctAnswer: '2.5l', correctAnswers: ['2.5l', '2.5', '2.5 l', '2,5l', '2,5', '2,5 l'], explanation: 'Deel deur 1 000: 2 500 ÷ 1 000 = 2,5 l.' },
        { difficulty: 'Medium', question: 'Skakel 6 000 ml om na liter.', answer: '6 l', checkMode: 'auto', correctAnswer: '6l', correctAnswers: ['6l', '6', '6 l'], explanation: 'Deel deur 1 000: 6 000 ÷ 1 000 = 6 l.' },
        { difficulty: 'Medium', question: 'Skakel 7 500 ml om na liter.', answer: '7,5 l', checkMode: 'auto', correctAnswer: '7.5l', correctAnswers: ['7.5l', '7.5', '7.5 l', '7,5l', '7,5', '7,5 l'], explanation: 'Deel deur 1 000: 7 500 ÷ 1 000 = 7,5 l.' },
        { difficulty: 'Easy', question: 'Skakel 1 l om na milliliter.', answer: '1 000 ml', checkMode: 'auto', correctAnswer: '1000ml', correctAnswers: ['1000ml', '1000', '1000 ml', '1 000ml', '1 000 ml'], explanation: 'Vermenigvuldig met 1 000: 1 × 1 000 = 1 000 ml.' },
        { difficulty: 'Easy', question: 'Skakel 2 l om na milliliter.', answer: '2 000 ml', checkMode: 'auto', correctAnswer: '2000ml', correctAnswers: ['2000ml', '2000', '2000 ml', '2 000ml', '2 000 ml'], explanation: 'Vermenigvuldig met 1 000: 2 × 1 000 = 2 000 ml.' },
        { difficulty: 'Easy', question: 'Skakel 3 l om na milliliter.', answer: '3 000 ml', checkMode: 'auto', correctAnswer: '3000ml', correctAnswers: ['3000ml', '3000', '3000 ml', '3 000ml', '3 000 ml'], explanation: 'Vermenigvuldig met 1 000: 3 × 1 000 = 3 000 ml.' },
        { difficulty: 'Medium', question: 'Skakel 0,5 l om na milliliter.', answer: '500 ml', checkMode: 'auto', correctAnswer: '500ml', correctAnswers: ['500ml', '500', '500 ml'], explanation: 'Vermenigvuldig met 1 000: 0,5 × 1 000 = 500 ml.' },
        { difficulty: 'Medium', question: 'Skakel 1,5 l om na milliliter.', answer: '1 500 ml', checkMode: 'auto', correctAnswer: '1500ml', correctAnswers: ['1500ml', '1500', '1500 ml', '1 500ml', '1 500 ml'], explanation: 'Vermenigvuldig met 1 000: 1,5 × 1 000 = 1 500 ml.' },
        { difficulty: 'Medium', question: 'Skakel 2,5 l om na milliliter.', answer: '2 500 ml', checkMode: 'auto', correctAnswer: '2500ml', correctAnswers: ['2500ml', '2500', '2500 ml', '2 500ml', '2 500 ml'], explanation: 'Vermenigvuldig met 1 000: 2,5 × 1 000 = 2 500 ml.' },
        { difficulty: 'Medium', question: 'Skakel 0,25 l om na milliliter.', answer: '250 ml', checkMode: 'auto', correctAnswer: '250ml', correctAnswers: ['250ml', '250', '250 ml'], explanation: 'Vermenigvuldig met 1 000: 0,25 × 1 000 = 250 ml.' },
        { difficulty: 'Medium', question: 'Skakel 0,75 l om na milliliter.', answer: '750 ml', checkMode: 'auto', correctAnswer: '750ml', correctAnswers: ['750ml', '750', '750 ml'], explanation: 'Vermenigvuldig met 1 000: 0,75 × 1 000 = 750 ml.' },
        { difficulty: 'Medium', question: 'Skakel 4,5 l om na milliliter.', answer: '4 500 ml', checkMode: 'auto', correctAnswer: '4500ml', correctAnswers: ['4500ml', '4500', '4500 ml', '4 500ml', '4 500 ml'], explanation: 'Vermenigvuldig met 1 000: 4,5 × 1 000 = 4 500 ml.' },
        { difficulty: 'Medium', question: 'Skakel 6 l om na milliliter.', answer: '6 000 ml', checkMode: 'auto', correctAnswer: '6000ml', correctAnswers: ['6000ml', '6000', '6000 ml', '6 000ml', '6 000 ml'], explanation: 'Vermenigvuldig met 1 000: 6 × 1 000 = 6 000 ml.' },
        { difficulty: 'Hard', question: 'Skakel 3,25 l om na milliliter.', answer: '3 250 ml', checkMode: 'auto', correctAnswer: '3250ml', correctAnswers: ['3250ml', '3250', '3250 ml', '3 250ml', '3 250 ml'], explanation: 'Vermenigvuldig met 1 000: 3,25 × 1 000 = 3 250 ml.' },
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om \'n lepel hoesstroop te meet — milliliter of liter?', answer: 'Milliliter (ml)', checkMode: 'auto', correctAnswer: 'ml', correctAnswers: ['ml', 'millilitres', 'millilitre', 'milliliters', 'milliliter'], explanation: '\'n Lepel is \'n baie klein hoeveelheid vloeistof, dus word milliliter (ml) gebruik.' },
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die water in \'n bad te meet — milliliter of liter?', answer: 'Liter (l)', checkMode: 'auto', correctAnswer: 'l', correctAnswers: ['l', 'litres', 'litre', 'liters', 'liter'], explanation: '\'n Bad hou \'n groot hoeveelheid water, dus word liter (l) gebruik.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Volpunte! Jy het omskakeling tussen milliliter en liter onder die knie.' },
        { minScore: 19, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het, weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die omskakelingsreëls weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Lees weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — VEELSTAP-OMSKAKELINGS, VERGELYKING EN MAATHOUERS LEES (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Vergelyking en Maathouers Lees',
      questions: [
        { difficulty: 'Easy', question: '\'n Maatbeker het merke by 0, 500 ml en 1 000 ml. Die vloeistof is presies by die 500 ml-merk. Wat is die volume?', answer: '500 ml', checkMode: 'auto', correctAnswer: '500ml', correctAnswers: ['500ml', '500', '500 ml'], explanation: 'Die vloeistof is presies op die 500 ml-merk, dus is die volume 500 ml.' },
        { difficulty: 'Medium', question: '\'n Beker gaan van 0 tot 1 000 ml met 5 gelyke intervalle tussen elke 200 ml-merk. Wat is die waarde van elke klein interval?', answer: '40 ml', checkMode: 'auto', correctAnswer: '40ml', correctAnswers: ['40ml', '40', '40 ml'], explanation: 'Deel die gaping tussen gemerkte waardes deur die aantal intervalle: 200 ÷ 5 = 40 ml.' },
        { difficulty: 'Medium', question: 'Met die beker hierbo (intervalle van 40 ml), wat is die volume as die vloeistof by die derde interval na 400 ml is?', answer: '520 ml', checkMode: 'auto', correctAnswer: '520ml', correctAnswers: ['520ml', '520', '520 ml'], explanation: 'Begin by 400 ml en tel 3 intervalle van 40 ml: 400 + (3 × 40) = 400 + 120 = 520 ml.' },
        { difficulty: 'Medium', question: '\'n Beker het merke by 600 ml en 800 ml. Die vloeistofvlak is presies halfpad tussen hulle. Wat is die volume?', answer: '700 ml', checkMode: 'auto', correctAnswer: '700ml', correctAnswers: ['700ml', '700', '700 ml'], explanation: 'Die gaping tussen 600 en 800 is 200 ml. Halfpad = 200 ÷ 2 = 100 ml verby 600 ml. 600 + 100 = 700 ml.' },
        { difficulty: 'Medium', question: '\'n Beker gaan van 0 tot 2 000 ml met 5 gelyke intervalle tussen elke 500 ml-merk. Wat is die waarde van elke klein interval?', answer: '100 ml', checkMode: 'auto', correctAnswer: '100ml', correctAnswers: ['100ml', '100', '100 ml'], explanation: 'Deel die gaping tussen gemerkte waardes deur die aantal intervalle: 500 ÷ 5 = 100 ml.' },
        { difficulty: 'Medium', question: 'Met die beker hierbo (intervalle van 100 ml), wat is die volume as die vloeistof by die tweede interval na 1 000 ml is?', answer: '1 200 ml', checkMode: 'auto', correctAnswer: '1200ml', correctAnswers: ['1200ml', '1200', '1200 ml', '1 200ml', '1 200 ml'], explanation: 'Begin by 1 000 ml en tel 2 intervalle van 100 ml: 1 000 + (2 × 100) = 1 000 + 200 = 1 200 ml.' },
        { difficulty: 'Medium', question: '\'n Beker gaan van 0 tot 1 000 ml met 5 gelyke intervalle tussen elke 250 ml-merk. Wat is die waarde van elke klein interval?', answer: '50 ml', checkMode: 'auto', correctAnswer: '50ml', correctAnswers: ['50ml', '50', '50 ml'], explanation: 'Deel die gaping tussen gemerkte waardes deur die aantal intervalle: 250 ÷ 5 = 50 ml.' },
        { difficulty: 'Hard', question: 'Met die beker hierbo (intervalle van 50 ml), wat is die volume as die vloeistof by die derde interval na 250 ml is?', answer: '400 ml', checkMode: 'auto', correctAnswer: '400ml', correctAnswers: ['400ml', '400', '400 ml'], explanation: 'Begin by 250 ml en tel 3 intervalle van 50 ml: 250 + (3 × 50) = 250 + 150 = 400 ml.' },
        { difficulty: 'Medium', question: 'Watter is groter: 1,5 l of 1 400 ml?', answer: '1,5 l', checkMode: 'auto', correctAnswer: '1.5l', correctAnswers: ['1.5l', '1.5 l', '1,5l', '1,5 l', '1500ml', '1 500ml', '1500 ml', '1 500 ml'], explanation: 'Skakel 1,5 l na ml om: 1,5 × 1 000 = 1 500 ml. Aangesien 1 500 ml > 1 400 ml, is 1,5 l groter.' },
        { difficulty: 'Medium', question: 'Watter is kleiner: 0,8 l of 750 ml?', answer: '750 ml', checkMode: 'auto', correctAnswer: '750ml', correctAnswers: ['750ml', '750 ml'], explanation: 'Skakel 0,8 l na ml om: 0,8 × 1 000 = 800 ml. Aangesien 750 ml < 800 ml, is 750 ml kleiner.' },
        { difficulty: 'Hard', question: 'Rangskik hierdie van kleinste na grootste: 750 ml, 0,8 l, 700 ml.', answer: '700 ml, 750 ml, 0,8 l', checkMode: 'auto', correctAnswer: '700ml,750ml,0.8l', correctAnswers: ['700ml,750ml,0.8l', '700 ml, 750 ml, 0.8 l', '700ml, 750ml, 0.8l', '700 ml, 750 ml, 0,8 l', '700ml, 750ml, 0,8l'], explanation: 'Skakel alles na ml om: 750 ml, 800 ml (0,8 l), 700 ml. Kleinste na grootste: 700 ml, 750 ml, 0,8 l.' },
        { difficulty: 'Medium', question: '\'n Bottel het \'n inhoud van 2 l. Dit bevat tans 1 300 ml lemoensap. Hoeveel meer sap, in ml, kan in die bottel inpas?', answer: '700 ml', checkMode: 'auto', correctAnswer: '700ml', correctAnswers: ['700ml', '700', '700 ml'], explanation: 'Skakel die inhoud na ml om: 2 × 1 000 = 2 000 ml. Trek af: 2 000 ml − 1 300 ml = 700 ml.' },
        { difficulty: 'Medium', question: 'Met die bottel hierbo, skakel die oorblywende spasie (700 ml) om na liter.', answer: '0,7 l', checkMode: 'auto', correctAnswer: '0.7l', correctAnswers: ['0.7l', '0.7', '0.7 l', '0,7l', '0,7', '0,7 l'], explanation: 'Deel deur 1 000: 700 ÷ 1 000 = 0,7 l.' },
        { difficulty: 'Medium', question: 'Twee identiese bottels hou elk 750 ml. Wat is hulle totale volume in liter?', answer: '1,5 l', checkMode: 'auto', correctAnswer: '1.5l', correctAnswers: ['1.5l', '1.5', '1.5 l', '1,5l', '1,5', '1,5 l'], explanation: 'Tel bymekaar: 750 ml + 750 ml = 1 500 ml. Skakel na liter om: 1 500 ÷ 1 000 = 1,5 l.' },
        { difficulty: 'Hard', question: '\'n Houer hou 3 l lemoensap en word gelykop in 6 koppies uitgegooi. Hoeveel sap, in ml, kry elke koppie?', answer: '500 ml', checkMode: 'auto', correctAnswer: '500ml', correctAnswers: ['500ml', '500', '500 ml'], explanation: 'Skakel na ml om: 3 × 1 000 = 3 000 ml. Deel gelykop: 3 000 ÷ 6 = 500 ml per koppie.' },
        { difficulty: 'Hard', question: '5 bottels hou elk 400 ml. Wat is hulle totale volume in liter?', answer: '2 l', checkMode: 'auto', correctAnswer: '2l', correctAnswers: ['2l', '2', '2 l'], explanation: 'Vermenigvuldig: 5 × 400 = 2 000 ml. Skakel na liter om: 2 000 ÷ 1 000 = 2 l.' },
        { difficulty: 'Hard', question: '\'n Beker bevat 1,8 l water. As 950 ml uitgegooi word, hoeveel water, in ml, bly oor?', answer: '850 ml', checkMode: 'auto', correctAnswer: '850ml', correctAnswers: ['850ml', '850', '850 ml'], explanation: 'Skakel 1,8 l na ml om: 1,8 × 1 000 = 1 800 ml. Trek af: 1 800 ml − 950 ml = 850 ml.' },
        { difficulty: 'Medium', question: '\'n Houer het \'n inhoud van 1,5 l en is presies halfvol. Hoeveel vloeistof, in ml, is binne-in dit?', answer: '750 ml', checkMode: 'auto', correctAnswer: '750ml', correctAnswers: ['750ml', '750', '750 ml'], explanation: 'Skakel na ml om: 1,5 × 1 000 = 1 500 ml. Die helfte van 1 500 ml is 750 ml.' },
        { difficulty: 'Medium', question: '4 glase hou elk 200 ml. Wat is hulle totale volume in liter?', answer: '0,8 l', checkMode: 'auto', correctAnswer: '0.8l', correctAnswers: ['0.8l', '0.8', '0.8 l', '0,8l', '0,8', '0,8 l'], explanation: 'Vermenigvuldig: 4 × 200 = 800 ml. Skakel na liter om: 800 ÷ 1 000 = 0,8 l.' },
        { difficulty: 'Medium', question: '\'n Meetsilinder het \'n inhoud van 500 ml met merke elke 100 ml, en 4 klein intervalle tussen elke merk. Wat is die waarde van elke klein interval?', answer: '25 ml', checkMode: 'auto', correctAnswer: '25ml', correctAnswers: ['25ml', '25', '25 ml'], explanation: 'Deel die gaping tussen gemerkte waardes deur die aantal intervalle: 100 ÷ 4 = 25 ml.' },
        { difficulty: 'Hard', question: 'Met die silinder hierbo (intervalle van 25 ml), die vloeistof is by die tweede interval na 300 ml. Hoeveel meer vloeistof, in ml, word benodig om dit tot sy 500 ml-inhoud te vul?', answer: '150 ml', checkMode: 'auto', correctAnswer: '150ml', correctAnswers: ['150ml', '150', '150 ml'], explanation: 'Die vloeistofvlak is 300 + (2 × 25) = 350 ml. Om die 500 ml-inhoud te bereik: 500 − 350 = 150 ml.' },
        { difficulty: 'Medium', question: 'Skakel 1 200 ml om na liter.', answer: '1,2 l', checkMode: 'auto', correctAnswer: '1.2l', correctAnswers: ['1.2l', '1.2', '1.2 l', '1,2l', '1,2', '1,2 l'], explanation: 'Deel deur 1 000: 1 200 ÷ 1 000 = 1,2 l.' },
        { difficulty: 'Medium', question: 'Skakel 3,4 l om na milliliter.', answer: '3 400 ml', checkMode: 'auto', correctAnswer: '3400ml', correctAnswers: ['3400ml', '3400', '3400 ml', '3 400ml', '3 400 ml'], explanation: 'Vermenigvuldig met 1 000: 3,4 × 1 000 = 3 400 ml.' },
        { difficulty: 'Medium', question: 'Skakel 1 800 ml om na liter.', answer: '1,8 l', checkMode: 'auto', correctAnswer: '1.8l', correctAnswers: ['1.8l', '1.8', '1.8 l', '1,8l', '1,8', '1,8 l'], explanation: 'Deel deur 1 000: 1 800 ÷ 1 000 = 1,8 l.' },
        { difficulty: 'Medium', question: 'Skakel 4 200 ml om na liter.', answer: '4,2 l', checkMode: 'auto', correctAnswer: '4.2l', correctAnswers: ['4.2l', '4.2', '4.2 l', '4,2l', '4,2', '4,2 l'], explanation: 'Deel deur 1 000: 4 200 ÷ 1 000 = 4,2 l.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan met selfvertroue maathouers lees en inhoud vergelyk.' },
        { minScore: 19, message: 'Goeie werk! Gaan die vrae wat jy verkeerd gehad het, weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die voorbeelde oor die lees van maathouers weer deur.' },
        { minScore: 0, message: 'Hou aan! Lees weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — INHOUD SKAT, EENHEIDSBLOKKIES EN WOORDPROBLEME (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Skatting en Eenheidsblokkies',
      questions: [
        { difficulty: 'Easy', question: 'Skat \'n realistiese inhoud vir \'n teelepel: 5 ml of 5 l?', answer: '5 ml', checkMode: 'auto', correctAnswer: '5ml', correctAnswers: ['5ml', '5 ml'], explanation: '\'n Teelepel hou \'n baie klein hoeveelheid vloeistof — omtrent 5 ml, nie 5 l nie.' },
        { difficulty: 'Easy', question: 'Skat \'n realistiese inhoud vir \'n standaard koppie: 250 ml of 250 l?', answer: '250 ml', checkMode: 'auto', correctAnswer: '250ml', correctAnswers: ['250ml', '250 ml'], explanation: '\'n Koppie hou ongeveer \'n kwart van \'n liter — 250 ml, nie 250 l nie.' },
        { difficulty: 'Easy', question: 'Skat \'n realistiese inhoud vir \'n groot kookpot: 5 l of 5 ml?', answer: '5 l', checkMode: 'auto', correctAnswer: '5l', correctAnswers: ['5l', '5 l'], explanation: '\'n Groot pot wat vir sopkook gebruik word, hou \'n groot hoeveelheid — omtrent 5 l, nie 5 ml nie.' },
        { difficulty: 'Easy', question: 'Skat \'n realistiese inhoud vir \'n standaard waterbottel: 500 ml of 500 l?', answer: '500 ml', checkMode: 'auto', correctAnswer: '500ml', correctAnswers: ['500ml', '500 ml'], explanation: '\'n Standaard waterbottel hou omtrent 500 ml, nie 500 l nie.' },
        { difficulty: 'Medium', question: 'Skat \'n realistiese inhoud vir \'n bad: 150 l of 150 ml?', answer: '150 l', checkMode: 'auto', correctAnswer: '150l', correctAnswers: ['150l', '150 l'], explanation: '\'n Bad hou \'n baie groot hoeveelheid water — omtrent 150 l, nie 150 ml nie.' },
        { difficulty: 'Medium', question: 'Skat \'n realistiese inhoud vir \'n emmer: 10 l of 10 ml?', answer: '10 l', checkMode: 'auto', correctAnswer: '10l', correctAnswers: ['10l', '10 l'], explanation: '\'n Emmer hou omtrent 10 l water — veel meer as 10 ml.' },
        { difficulty: 'Medium', question: 'Skat \'n realistiese inhoud vir \'n oogdruppelaar: 1 ml of 1 l?', answer: '1 ml', checkMode: 'auto', correctAnswer: '1ml', correctAnswers: ['1ml', '1 ml'], explanation: '\'n Oogdruppelaar laat \'n baie klein hoeveelheid vloeistof vry — omtrent 1 ml, nie 1 l nie.' },
        { difficulty: 'Medium', question: 'Skat \'n realistiese inhoud vir \'n klein vistenk: 20 l of 20 ml?', answer: '20 l', checkMode: 'auto', correctAnswer: '20l', correctAnswers: ['20l', '20 l'], explanation: '\'n Klein vistenk hou \'n groot hoeveelheid water — omtrent 20 l, nie 20 ml nie.' },
        { difficulty: 'Easy', question: '\'n Boks is 2 blokkies lank, 2 blokkies breed en 2 blokkies hoog. Hoeveel eenheidsblokkies pas binne-in dit?', answer: '8 cm³', checkMode: 'auto', correctAnswer: '8cm³', correctAnswers: ['8cm³', '8cm3', '8', '8cubes', '8 cubes', '8 cm³', '8 cm3', '8blokkies', '8 blokkies'], explanation: 'Vermenigvuldig: 2 × 2 × 2 = 8. Elke eenheidsblokkie is 1 cm³, dus is die volume 8 cm³.' },
        { difficulty: 'Easy', question: '\'n Boks is 3 blokkies lank, 2 blokkies breed en 2 blokkies hoog. Hoeveel eenheidsblokkies pas binne-in dit?', answer: '12 cm³', checkMode: 'auto', correctAnswer: '12cm³', correctAnswers: ['12cm³', '12cm3', '12', '12cubes', '12 cubes', '12 cm³', '12 cm3', '12blokkies', '12 blokkies'], explanation: 'Vermenigvuldig: 3 × 2 × 2 = 12. Elke eenheidsblokkie is 1 cm³, dus is die volume 12 cm³.' },
        { difficulty: 'Medium', question: '\'n Boks is 4 blokkies lank, 3 blokkies breed en 2 blokkies hoog. Wat is die volume daarvan?', answer: '24 cm³', checkMode: 'auto', correctAnswer: '24cm³', correctAnswers: ['24cm³', '24cm3', '24', '24 cm³', '24 cm3'], explanation: 'Vermenigvuldig lengte × breedte × hoogte: 4 × 3 × 2 = 24 cm³.' },
        { difficulty: 'Medium', question: '\'n Boks is 5 blokkies lank, 2 blokkies breed en 3 blokkies hoog. Wat is die volume daarvan?', answer: '30 cm³', checkMode: 'auto', correctAnswer: '30cm³', correctAnswers: ['30cm³', '30cm3', '30', '30 cm³', '30 cm3'], explanation: 'Vermenigvuldig lengte × breedte × hoogte: 5 × 2 × 3 = 30 cm³.' },
        { difficulty: 'Medium', question: '\'n Boks is 3 blokkies lank, 3 blokkies breed en 3 blokkies hoog. Wat is die volume daarvan?', answer: '27 cm³', checkMode: 'auto', correctAnswer: '27cm³', correctAnswers: ['27cm³', '27cm3', '27', '27 cm³', '27 cm3'], explanation: 'Vermenigvuldig lengte × breedte × hoogte: 3 × 3 × 3 = 27 cm³.' },
        { difficulty: 'Medium', question: '\'n Boks is 4 blokkies lank, 2 blokkies breed en 2 blokkies hoog. Wat is die volume daarvan?', answer: '16 cm³', checkMode: 'auto', correctAnswer: '16cm³', correctAnswers: ['16cm³', '16cm3', '16', '16 cm³', '16 cm3'], explanation: 'Vermenigvuldig lengte × breedte × hoogte: 4 × 2 × 2 = 16 cm³.' },
        { difficulty: 'Medium', question: '\'n Boks is 4 blokkies lank, 4 blokkies breed en 2 blokkies hoog. Wat is die volume daarvan?', answer: '32 cm³', checkMode: 'auto', correctAnswer: '32cm³', correctAnswers: ['32cm³', '32cm3', '32', '32 cm³', '32 cm3'], explanation: 'Vermenigvuldig lengte × breedte × hoogte: 4 × 4 × 2 = 32 cm³.' },
        { difficulty: 'Medium', question: '\'n Vorm is gemaak van eenheidsblokkies. Deur al die sigbare en verskuilde blokkies te tel, kry jy 18 blokkies. Wat is die volume?', answer: '18 cm³', checkMode: 'auto', correctAnswer: '18cm³', correctAnswers: ['18cm³', '18cm3', '18', '18 cm³', '18 cm3'], explanation: 'Elke eenheidsblokkie het \'n volume van 1 cm³. Deur al 18 blokkies te tel, kry jy \'n totale volume van 18 cm³.' },
        { difficulty: 'Hard', question: '\'n Boks het \'n volume van 24 cm³. Dit is 4 blokkies lank en 3 blokkies breed. Hoeveel blokkies hoog is die boks?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2cubes', '2 cubes', '2blokkies', '2 blokkies'], explanation: 'Volume = lengte × breedte × hoogte. Hoogte = 24 ÷ (4 × 3) = 24 ÷ 12 = 2 blokkies.' },
        { difficulty: 'Hard', question: '\'n Boks het \'n volume van 30 cm³. Dit is 5 blokkies lank en 3 blokkies breed. Hoeveel blokkies hoog is die boks?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2cubes', '2 cubes', '2blokkies', '2 blokkies'], explanation: 'Volume = lengte × breedte × hoogte. Hoogte = 30 ÷ (5 × 3) = 30 ÷ 15 = 2 blokkies.' },
        { difficulty: 'Medium', question: '4 sapboksies hou elk 250 ml. Wat is hulle totale volume in liter?', answer: '1 l', checkMode: 'auto', correctAnswer: '1l', correctAnswers: ['1l', '1', '1 l'], explanation: 'Vermenigvuldig: 4 × 250 = 1 000 ml. Skakel na liter om: 1 000 ÷ 1 000 = 1 l.' },
        { difficulty: 'Medium', question: '6 koppies hou elk 150 ml. Wat is hulle totale volume in ml?', answer: '900 ml', checkMode: 'auto', correctAnswer: '900ml', correctAnswers: ['900ml', '900', '900 ml'], explanation: 'Vermenigvuldig: 6 × 150 = 900 ml.' },
        { difficulty: 'Hard', question: '3 bekers hou elk 1,2 l water. Wat is hulle totale volume in milliliter?', answer: '3 600 ml', checkMode: 'auto', correctAnswer: '3600ml', correctAnswers: ['3600ml', '3600', '3600 ml', '3 600ml', '3 600 ml'], explanation: 'Skakel een beker na ml om: 1,2 × 1 000 = 1 200 ml. Vermenigvuldig met 3: 1 200 × 3 = 3 600 ml.' },
        { difficulty: 'Hard', question: '\'n Tenk het \'n inhoud van 5 l. As 3 200 ml gebruik word, hoeveel water, in liter, bly oor in die tenk?', answer: '1,8 l', checkMode: 'auto', correctAnswer: '1.8l', correctAnswers: ['1.8l', '1.8', '1.8 l', '1,8l', '1,8', '1,8 l'], explanation: 'Skakel die inhoud na ml om: 5 × 1 000 = 5 000 ml. Trek af: 5 000 − 3 200 = 1 800 ml. Skakel na liter om: 1 800 ÷ 1 000 = 1,8 l.' },
        { difficulty: 'Hard', question: '\'n Ketel hou 1,7 l water. Skakel dit om na milliliter.', answer: '1 700 ml', checkMode: 'auto', correctAnswer: '1700ml', correctAnswers: ['1700ml', '1700', '1700 ml', '1 700ml', '1 700 ml'], explanation: 'Vermenigvuldig met 1 000: 1,7 × 1 000 = 1 700 ml.' },
        { difficulty: 'Hard', question: '\'n Akwarium het \'n inhoud van 12 l. As 4 500 ml water reeds daarin is, hoeveel meer water, in liter, word benodig om dit heeltemal te vul?', answer: '7,5 l', checkMode: 'auto', correctAnswer: '7.5l', correctAnswers: ['7.5l', '7.5', '7.5 l', '7,5l', '7,5', '7,5 l'], explanation: 'Skakel die inhoud na ml om: 12 × 1 000 = 12 000 ml. Trek af: 12 000 − 4 500 = 7 500 ml. Skakel na liter om: 7 500 ÷ 1 000 = 7,5 l.' },
        { difficulty: 'Medium', question: '\'n Pasiënt moet 3 dosisse medisyne neem, elk 5 ml. Wat is die totale hoeveelheid medisyne, in ml, geneem?', answer: '15 ml', checkMode: 'auto', correctAnswer: '15ml', correctAnswers: ['15ml', '15', '15 ml'], explanation: 'Vermenigvuldig: 3 × 5 = 15 ml.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan met selfvertroue inhoud skat en volume met eenheidsblokkies bereken.' },
        { minScore: 19, message: 'Goeie werk! Gaan die vrae wat jy verkeerd gehad het, weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die voorbeelde oor eenheidsblokkies en werklike inhoud weer deur.' },
        { minScore: 0, message: 'Hou aan! Lees weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — VEELSTAP EN GEKOMBINEERDE PROBLEME (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Veelstap en Gekombineerde Probleme',
      questions: [
        { difficulty: 'Hard', question: '\'n Resep benodig 1,5 l melk, 750 ml room en 500 ml water. Wat is die totale volume in milliliter?', answer: '2 750 ml', checkMode: 'auto', correctAnswer: '2750ml', correctAnswers: ['2750ml', '2750', '2750 ml', '2 750ml', '2 750 ml'], explanation: 'Skakel 1,5 l na ml om: 1,5 × 1 000 = 1 500 ml. Tel al drie bymekaar: 1 500 + 750 + 500 = 2 750 ml.' },
        { difficulty: 'Hard', question: 'Met die resep hierbo, skakel die totale volume (2 750 ml) om na liter.', answer: '2,75 l', checkMode: 'auto', correctAnswer: '2.75l', correctAnswers: ['2.75l', '2.75', '2.75 l', '2,75l', '2,75', '2,75 l'], explanation: 'Deel deur 1 000: 2 750 ÷ 1 000 = 2,75 l.' },
        { difficulty: 'Hard', question: '\'n Pot het \'n inhoud van 3 l. Is dit groot genoeg om die 2,75 l resep hierbo te hou? Verduidelik jou redenasie.', answer: 'Ja. 2,75 l is minder as 3 l, dus is die pot groot genoeg om al die vloeistof te hou.', checkMode: 'self' },
        { difficulty: 'Hard', question: '3 bottels hou elk 500 ml, en 1 bottel hou 250 ml. Wat is die totale volume in liter?', answer: '1,75 l', checkMode: 'auto', correctAnswer: '1.75l', correctAnswers: ['1.75l', '1.75', '1.75 l', '1,75l', '1,75', '1,75 l'], explanation: 'Tel bymekaar: (3 × 500) + 250 = 1 500 + 250 = 1 750 ml. Skakel na liter om: 1 750 ÷ 1 000 = 1,75 l.' },
        { difficulty: 'Hard', question: 'Twee identiese bokse is elk gemaak van eenheidsblokkies: 3 blokkies lank, 2 blokkies breed en 2 blokkies hoog. Wat is hulle gekombineerde volume?', answer: '24 cm³', checkMode: 'auto', correctAnswer: '24cm³', correctAnswers: ['24cm³', '24cm3', '24', '24 cm³', '24 cm3'], explanation: 'Een boks: 3 × 2 × 2 = 12 cm³. Twee bokse: 12 × 2 = 24 cm³.' },
        { difficulty: 'Hard', question: '\'n Tenk het \'n inhoud van 10 l. Water word teen \'n tempo van 500 ml per minuut bygevoeg. Hoeveel minute sal dit neem om die tenk heeltemal te vul?', answer: '20 minute', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 minutes', '20minutes', '20 min', '20 minute'], explanation: 'Skakel die inhoud na ml om: 10 × 1 000 = 10 000 ml. Deel deur die tempo: 10 000 ÷ 500 = 20 minute.' },
        { difficulty: 'Hard', question: '4 bekers van 1,5 l elk word in \'n tenk met \'n inhoud van 6 l uitgegooi. Hoeveel spasie, in ml, bly oor in die tenk?', answer: '0 ml', checkMode: 'auto', correctAnswer: '0ml', correctAnswers: ['0ml', '0', '0 ml'], explanation: 'Totaal uitgegooi: 4 × 1,5 = 6 l = 6 000 ml. Die tenk se inhoud is ook 6 000 ml, dus 6 000 − 6 000 = 0 ml bly oor — die tenk is presies vol.' },
        { difficulty: 'Medium', question: 'Vier metings is 250 ml, 500 ml, 750 ml en 1 000 ml. Wat is hulle totaal in milliliter?', answer: '2 500 ml', checkMode: 'auto', correctAnswer: '2500ml', correctAnswers: ['2500ml', '2500', '2500 ml', '2 500ml', '2 500 ml'], explanation: 'Tel bymekaar: 250 + 500 + 750 + 1 000 = 2 500 ml.' },
        { difficulty: 'Medium', question: 'Met die metings hierbo, skakel die totaal (2 500 ml) om na liter.', answer: '2,5 l', checkMode: 'auto', correctAnswer: '2.5l', correctAnswers: ['2.5l', '2.5', '2.5 l', '2,5l', '2,5', '2,5 l'], explanation: 'Deel deur 1 000: 2 500 ÷ 1 000 = 2,5 l.' },
        { difficulty: 'Hard', question: '\'n Boks gemaak van eenheidsblokkies is 5 blokkies lank, 4 blokkies breed en 3 blokkies hoog. Wat is die volume daarvan?', answer: '60 cm³', checkMode: 'auto', correctAnswer: '60cm³', correctAnswers: ['60cm³', '60cm3', '60', '60 cm³', '60 cm3'], explanation: 'Vermenigvuldig lengte × breedte × hoogte: 5 × 4 × 3 = 60 cm³.' },
        { difficulty: 'Hard', question: '\'n Resep benodig 1,25 l aftreksel en 375 ml wyn. Wat is die totale volume in milliliter?', answer: '1 625 ml', checkMode: 'auto', correctAnswer: '1625ml', correctAnswers: ['1625ml', '1625', '1625 ml', '1 625ml', '1 625 ml'], explanation: 'Skakel 1,25 l na ml om: 1,25 × 1 000 = 1 250 ml. Tel bymekaar: 1 250 + 375 = 1 625 ml.' },
        { difficulty: 'Hard', question: '\'n Beker het \'n inhoud van 2 l. Zanele gooi 850 ml in, dan nog 650 ml. Hoeveel meer, in ml, kan die beker hou voordat dit vol is?', answer: '500 ml', checkMode: 'auto', correctAnswer: '500ml', correctAnswers: ['500ml', '500', '500 ml'], explanation: 'Skakel die inhoud na ml om: 2 × 1 000 = 2 000 ml. Totaal ingegooi: 850 + 650 = 1 500 ml. Oorblywende spasie: 2 000 − 1 500 = 500 ml.' },
        { difficulty: 'Hard', question: '\'n Vistenk in die vorm van \'n boks is 6 blokkies lank, 3 blokkies breed en 2 blokkies hoog (met eenheidsblokkies gemodelleer). Wat is die volume daarvan?', answer: '36 cm³', checkMode: 'auto', correctAnswer: '36cm³', correctAnswers: ['36cm³', '36cm3', '36', '36 cm³', '36 cm3'], explanation: 'Vermenigvuldig lengte × breedte × hoogte: 6 × 3 × 2 = 36 cm³.' },
        { difficulty: 'Medium', question: 'Thabo sê \'n standaard koppie hou ongeveer 25 ml. Lerato sê dit hou ongeveer 250 ml. Wie is korrek? Verduidelik jou redenasie.', answer: 'Lerato is korrek. \'n Standaard koppie hou ongeveer 250 ml. 25 ml is net omtrent 5 teelepels, wat veels te min is vir \'n koppie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho het drie houers: 1,2 l, 850 ml en 0,6 l. Rangskik hulle van kleinste na grootste en verduidelik hoe jy dit uitgewerk het.', answer: 'Van kleinste na grootste: 0,6 l (600 ml), 850 ml, 1,2 l (1 200 ml). Ek het elke meting eers na milliliter omgeskakel sodat ek hulle regverdig kon vergelyk (1,2 l = 1 200 ml en 0,6 l = 600 ml), en toe die ml-waardes van kleinste na grootste gerangskik.', checkMode: 'self' },
        { difficulty: 'Hard', question: '\'n Waterverspreider vul bottels teen \'n tempo van 250 ml elke 10 sekondes. Hoeveel milliliter sal dit in 1 minuut (60 sekondes) versprei?', answer: '1 500 ml', checkMode: 'auto', correctAnswer: '1500ml', correctAnswers: ['1500ml', '1500', '1500 ml', '1 500ml', '1 500 ml'], explanation: 'In 60 sekondes is daar 60 ÷ 10 = 6 intervalle van 10 sekondes. Vermenigvuldig: 6 × 250 = 1 500 ml.' },
        { difficulty: 'Hard', question: '\'n Groot dromm het \'n inhoud van 20 l. Dit word met \'n 2 l-emmer gevul. Hoeveel vol emmers word benodig om die dromm te vul?', answer: '10 emmers', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 buckets', '10buckets', '10 emmers', '10emmers'], explanation: 'Deel die inhoud deur die emmergrootte: 20 ÷ 2 = 10 emmers.' },
        { difficulty: 'Hard', question: '3 bottels van 1,5 l elk word in \'n beker uitgegooi, en dan word \'n ekstra 250 ml bygevoeg. Wat is die totale volume in milliliter?', answer: '4 750 ml', checkMode: 'auto', correctAnswer: '4750ml', correctAnswers: ['4750ml', '4750', '4750 ml', '4 750ml', '4 750 ml'], explanation: 'Skakel die bottels na ml om: 3 × 1,5 × 1 000 = 4 500 ml. Tel die ekstra 250 ml by: 4 500 + 250 = 4 750 ml.' },
        { difficulty: 'Hard', question: '\'n Tenk hou 8 l water. Die helfte van die water word uitgegooi. Hoeveel water, in ml, word uitgegooi?', answer: '4 000 ml', checkMode: 'auto', correctAnswer: '4000ml', correctAnswers: ['4000ml', '4000', '4000 ml', '4 000ml', '4 000 ml'], explanation: 'Skakel na ml om: 8 × 1 000 = 8 000 ml. Die helfte van 8 000 ml is 4 000 ml.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom ons met 1 000 vermenigvuldig wanneer ons liter na milliliter omskakel, maar deur 1 000 deel wanneer ons milliliter na liter omskakel.', answer: '\'n Liter is \'n baie groter eenheid as \'n milliliter — daar is 1 000 milliliter in elke liter. Wanneer ons na \'n kleiner eenheid omskakel (l na ml), word die aantal eenhede benodig groter, dus vermenigvuldig ons. Wanneer ons na \'n groter eenheid omskakel (ml na l), word minder eenhede benodig, dus deel ons.', checkMode: 'self' },
        { difficulty: 'Medium', question: '\'n Boks gemaak van eenheidsblokkies het \'n volume van 40 cm³. Dit is 5 blokkies lank en 4 blokkies breed. Hoeveel blokkies hoog is dit?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2cubes', '2 cubes', '2blokkies', '2 blokkies'], explanation: 'Volume = lengte × breedte × hoogte. Hoogte = 40 ÷ (5 × 4) = 40 ÷ 20 = 2 blokkies.' },
        { difficulty: 'Hard', question: '\'n Swembad word geskat om 40 000 l water te hou. Skakel dit om na milliliter.', answer: '40 000 000 ml', checkMode: 'auto', correctAnswer: '40000000ml', correctAnswers: ['40000000ml', '40000000', '40000000 ml', '40 000 000ml', '40 000 000 ml'], explanation: 'Vermenigvuldig met 1 000: 40 000 × 1 000 = 40 000 000 ml. Dit wys waarom liter, en nie milliliter nie, vir baie groot volumes gebruik word.' },
        { difficulty: 'Hard', question: '\'n Resep vir sop benodig 2 l aftreksel, gelykop verdeel in 4 bakkies. Hoeveel aftreksel, in ml, kry elke bakkie?', answer: '500 ml', checkMode: 'auto', correctAnswer: '500ml', correctAnswers: ['500ml', '500', '500 ml'], explanation: 'Skakel na ml om: 2 × 1 000 = 2 000 ml. Deel gelykop: 2 000 ÷ 4 = 500 ml per bakkie.' },
        { difficulty: 'Hard', question: '\'n Tenk bevat 6,4 l water. As 2 750 ml verwyder word, hoeveel water, in liter, bly oor?', answer: '3,65 l', checkMode: 'auto', correctAnswer: '3.65l', correctAnswers: ['3.65l', '3.65', '3.65 l', '3,65l', '3,65', '3,65 l'], explanation: 'Skakel 6,4 l na ml om: 6,4 × 1 000 = 6 400 ml. Trek af: 6 400 − 2 750 = 3 650 ml. Skakel na liter om: 3 650 ÷ 1 000 = 3,65 l.' },
        { difficulty: 'Hard', question: 'Verduidelik hoe jy die volume van \'n onreëlmatige vorm gebou van eenheidsblokkies sou vind as sommige blokkies weggesteek is.', answer: 'Ek sou noukeurig elke blokkie in elke laag tel, insluitend die verskuilde blokkies deur uit te werk hoeveel daar onder of agter die sigbare blokkies moet wees op grond van die vorm. Dan sou ek die blokkies in al die lae bymekaartel. Aangesien elke eenheidsblokkie \'n volume van 1 cm³ het, gee die totale aantal blokkies die totale volume in cm³.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het veelstap Inhoud en Volume-probleme onder die knie.' },
        { minScore: 19, message: 'Goeie werk! Gaan die vrae wat jy verkeerd gehad het, weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die veelstap-voorbeelde weer deur.' },
        { minScore: 0, message: 'Hou aan! Lees weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
