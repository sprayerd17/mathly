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
      diagramPlaceholder:
        'A 3D rectangular box made of unit cubes showing 3 cubes long 2 cubes wide and 2 cubes tall with each cube labelled 1cm cubed',
      videoPlaceholder:
        'Short video showing how to calculate the volume of a 3D shape by counting unit cubes and using length times width times height',
    },
  ],
  topicPractice: [

    // ── SECTION 1 — Capacity vs Volume ───────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Watter eenheid sal jy gebruik om elk van die volgende te meet?',
      checkMode: 'auto',
      answer: 'a) Milliliter (ml)   b) Liter (l)   c) Liter (l)',
      parts: [
        {
          label: 'a) \'n Teelepel medisyne',
          correctAnswer: 'ml',
          correctAnswers: ['ml', 'millilitres', 'millilitre', 'milliliters', 'milliliter'],
          explanation: "Medisyne word in baie klein hoeveelhede gemeet. Milliliter (ml) word gebruik vir klein volumes soos medisyne — 'n enkele dosis is gewoonlik net 'n paar ml.",
        },
        {
          label: 'b) \'n Emmer water',
          correctAnswer: 'l',
          correctAnswers: ['l', 'litres', 'litre', 'liters', 'liter'],
          explanation: '\'n Emmer hou \'n groot hoeveelheid water — gewoonlik omtrent 10 l. Liter (l) word gebruik vir groter volumes soos emmers, potte en houers.',
        },
        {
          label: 'c) \'n Swembad',
          correctAnswer: 'l',
          correctAnswers: ['l', 'litres', 'litre', 'liters', 'liter'],
          explanation: '\'n Swembad hou \'n enorme hoeveelheid water — duisende liters. Liter (l) word altyd gebruik vir groot volumes vloeistof.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question: '\'n Bottel het \'n inhoud van 2 l. Dit bevat tans 1 250 ml lemoensap.',
      checkMode: 'auto',
      answer: 'a) 2 000 ml   b) 750 ml   c) 0,75 l',
      parts: [
        {
          label: 'a) Hoeveel ml is die inhoud van die bottel?',
          correctAnswer: '2000ml',
          correctAnswers: ['2000ml', '2000', '2000 ml', '2 000ml', '2 000 ml'],
          explanation: 'Skakel die inhoud na ml om: 2 l × 1 000 = 2 000 ml.',
        },
        {
          label: 'b) Hoeveel meer sap kan in die bottel inpas, in ml?',
          correctAnswer: '750ml',
          correctAnswers: ['750ml', '750', '750 ml'],
          explanation: 'Trek die huidige volume van die inhoud af: 2 000 ml − 1 250 ml = 750 ml.',
        },
        {
          label: 'c) Skakel die oorblywende spasie na liter om.',
          correctAnswer: '0.75l',
          correctAnswers: ['0.75l', '0.75', '0.75 l', '0,75l', '0,75', '0,75 l'],
          explanation: 'Deel deur 1 000: 750 ÷ 1 000 = 0,75 l.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'Thabo sê \'n standaard koppie hou ongeveer 25 ml. Lerato sê dit hou ongeveer 250 ml. Wie is korrek en waarom?',
      checkMode: 'self',
      answer: 'Lerato is korrek. \'n Standaard koppie hou ongeveer 250 ml. 25 ml is net omtrent 5 teelepels, wat veels te min is vir \'n koppie.',
    },

    // ── SECTION 2 — Reading Measuring Containers ──────────────────────────────

    {
      difficulty: 'Easy',
      question: '\'n Maatbeker het merke by 0, 500 ml en 1 000 ml. Die vloeistof is presies by die 500 ml-merk. Wat is die volume?',
      checkMode: 'auto',
      answer: '500 ml',
      correctAnswer: '500ml',
      correctAnswers: ['500ml', '500', '500 ml'],
      explanation: 'Die vloeistof is presies op die 500 ml-merk, dus is die volume 500 ml.',
    },

    {
      difficulty: 'Medium',
      question: '\'n Maatbeker gaan van 0 tot 1 000 ml met 5 gelyke intervalle tussen elke 200 ml-merk.',
      checkMode: 'auto',
      answer: 'a) 40 ml   b) 520 ml   c) 700 ml',
      parts: [
        {
          label: 'a) Wat is die waarde van elke klein interval?',
          correctAnswer: '40ml',
          correctAnswers: ['40ml', '40', '40 ml'],
          explanation: 'Deel die gaping tussen gemerkte waardes deur die aantal intervalle: 200 ÷ 5 = 40 ml.',
        },
        {
          label: 'b) Wat is die volume as die vloeistof by die derde interval na 400 ml is?',
          correctAnswer: '520ml',
          correctAnswers: ['520ml', '520', '520 ml'],
          explanation: 'Begin by 400 ml en tel 3 intervalle van 40 ml: 400 + (3 × 40) = 400 + 120 = 520 ml.',
        },
        {
          label: 'c) Wat is die volume as die vloeistof halfpad tussen 600 ml en 800 ml is?',
          correctAnswer: '700ml',
          correctAnswers: ['700ml', '700', '700 ml'],
          explanation: 'Die gaping tussen 600 en 800 is 200 ml. Halfpad = 200 ÷ 2 = 100 ml verby 600. 600 + 100 = 700 ml.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: '\'n Meetsilinder het \'n inhoud van 500 ml met merke elke 100 ml. Daar is 4 klein intervalle tussen elke 100 ml-merk.',
      checkMode: 'auto',
      answer: 'a) 25 ml   b) 350 ml   c) 150 ml',
      parts: [
        {
          label: 'a) Wat is die waarde van elke klein interval?',
          correctAnswer: '25ml',
          correctAnswers: ['25ml', '25', '25 ml'],
          explanation: 'Deel die gaping tussen gemerkte waardes deur die aantal intervalle: 100 ÷ 4 = 25 ml.',
        },
        {
          label: 'b) Die vloeistof is by die tweede interval na 300 ml. Wat is die volume?',
          correctAnswer: '350ml',
          correctAnswers: ['350ml', '350', '350 ml'],
          explanation: 'Begin by 300 ml en tel 2 intervalle van 25 ml: 300 + (2 × 25) = 300 + 50 = 350 ml.',
        },
        {
          label: 'c) Hoeveel meer vloeistof word benodig om die silinder tot sy volle inhoud te vul?',
          correctAnswer: '150ml',
          correctAnswers: ['150ml', '150', '150 ml'],
          explanation: 'Trek die huidige volume van die inhoud af: 500 − 350 = 150 ml.',
        },
      ],
    },

    // ── SECTION 3 — Converting Between Millilitres and Litres ─────────────────

    {
      difficulty: 'Easy',
      question: 'Skakel die volgende om.',
      checkMode: 'auto',
      answer: 'a) 3 l   b) 2 000 ml',
      parts: [
        {
          label: 'a) 3 000 ml = ___ l',
          correctAnswer: '3l',
          correctAnswers: ['3l', '3', '3 l'],
          explanation: 'Om ml na l om te skakel, deel deur 1 000: 3 000 ÷ 1 000 = 3 l.',
        },
        {
          label: 'b) 2 l = ___ ml',
          correctAnswer: '2000ml',
          correctAnswers: ['2000ml', '2000', '2000 ml', '2 000ml', '2 000 ml'],
          explanation: 'Om l na ml om te skakel, vermenigvuldig met 1 000: 2 × 1 000 = 2 000 ml.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question: 'Skakel elke meting om na die eenheid getoon.',
      checkMode: 'auto',
      answer: 'a) 1,5 l   b) 2 500 ml   c) 0,75 l   d) 250 ml',
      parts: [
        {
          label: 'a) 1 500 ml = ___ l',
          correctAnswer: '1.5l',
          correctAnswers: ['1.5l', '1.5', '1.5 l', '1,5l', '1,5', '1,5 l'],
          explanation: 'Deel deur 1 000: 1 500 ÷ 1 000 = 1,5 l.',
        },
        {
          label: 'b) 2,5 l = ___ ml',
          correctAnswer: '2500ml',
          correctAnswers: ['2500ml', '2500', '2500 ml', '2 500ml', '2 500 ml'],
          explanation: 'Vermenigvuldig met 1 000: 2,5 × 1 000 = 2 500 ml.',
        },
        {
          label: 'c) 750 ml = ___ l',
          correctAnswer: '0.75l',
          correctAnswers: ['0.75l', '0.75', '0.75 l', '0,75l', '0,75', '0,75 l'],
          explanation: 'Deel deur 1 000: 750 ÷ 1 000 = 0,75 l.',
        },
        {
          label: 'd) 0,25 l = ___ ml',
          correctAnswer: '250ml',
          correctAnswers: ['250ml', '250', '250 ml'],
          explanation: 'Vermenigvuldig met 1 000: 0,25 × 1 000 = 250 ml.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: '\'n Resep benodig 1,5 l melk, 750 ml room en 500 ml water.',
      checkMode: 'auto',
      answer: 'a) 1 500 ml, 750 ml, 500 ml   b) 2 750 ml   c) 2,75 l',
      parts: [
        {
          label: 'a) Skakel 1,5 l na ml om.',
          correctAnswer: '1500ml',
          correctAnswers: ['1500ml', '1500', '1500 ml', '1 500ml', '1 500 ml'],
          explanation: 'Vermenigvuldig met 1 000: 1,5 × 1 000 = 1 500 ml. Die room (750 ml) en water (500 ml) is reeds in ml.',
        },
        {
          label: 'b) Wat is die totale volume in ml?',
          correctAnswer: '2750ml',
          correctAnswers: ['2750ml', '2750', '2750 ml', '2 750ml', '2 750 ml'],
          explanation: 'Tel al drie bymekaar: 1 500 + 750 + 500 = 2 750 ml.',
        },
        {
          label: 'c) Skakel die totaal na liter om.',
          correctAnswer: '2.75l',
          correctAnswers: ['2.75l', '2.75', '2.75 l', '2,75l', '2,75', '2,75 l'],
          explanation: 'Deel deur 1 000: 2 750 ÷ 1 000 = 2,75 l.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: '\'n Resep benodig 1,5 l melk, 750 ml room en 500 ml water.',
      checkMode: 'self',
      answer: 'Ja. 2,75 l is minder as 3 l, dus is die pot groot genoeg om al die vloeistof te hou.',
      parts: [
        {
          label: 'd) \'n Pot het \'n inhoud van 3 l. Is dit groot genoeg om al die vloeistof te hou? Verduidelik.',
          correctAnswer: '',
          explanation: 'Ja. Die totale volume is 2,75 l en die pot hou 3 l. Aangesien 2,75 l < 3 l, is die pot groot genoeg.',
        },
      ],
    },

    // ── SECTION 4 — Volume Using Unit Cubes ──────────────────────────────────

    {
      difficulty: 'Easy',
      question: '\'n Boks is 2 blokkies lank, 2 blokkies breed en 2 blokkies hoog. Hoeveel eenheidsblokkies pas binne-in dit?',
      checkMode: 'auto',
      answer: '8 cm³',
      correctAnswer: '8cm³',
      correctAnswers: ['8cm³', '8cm3', '8', '8cubes', '8 cubes', '8 cm³', '8 cm3', '8blokkies', '8 blokkies'],
      explanation: 'Vermenigvuldig: 2 × 2 × 2 = 8. Elke eenheidsblokkie is 1 cm³, dus is die volume 8 cm³.',
    },

    {
      difficulty: 'Medium',
      question: 'Bereken die volume van elke vorm gemaak van eenheidsblokkies.',
      checkMode: 'auto',
      answer: 'a) 24 cm³   b) 30 cm³',
      parts: [
        {
          label: 'a) 4 blokkies lank, 3 blokkies breed, 2 blokkies hoog',
          correctAnswer: '24cm³',
          correctAnswers: ['24cm³', '24cm3', '24', '24 cm³', '24 cm3'],
          explanation: 'Vermenigvuldig lengte × breedte × hoogte: 4 × 3 × 2 = 24 cm³.',
        },
        {
          label: 'b) 5 blokkies lank, 2 blokkies breed, 3 blokkies hoog',
          correctAnswer: '30cm³',
          correctAnswers: ['30cm³', '30cm3', '30', '30 cm³', '30 cm3'],
          explanation: 'Vermenigvuldig lengte × breedte × hoogte: 5 × 2 × 3 = 30 cm³.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: '\'n Boks het \'n volume van 24 cm³. Dit is 4 blokkies lank en 3 blokkies breed.',
      checkMode: 'auto',
      answer: 'a) 2   b) 36 cm³   c) 12 blokkies',
      parts: [
        {
          label: 'a) Hoeveel blokkies hoog is die boks?',
          correctAnswer: '2',
          correctAnswers: ['2', '2cubes', '2 cubes', '2blokkies', '2 blokkies'],
          explanation: 'Volume = lengte × breedte × hoogte. Dus hoogte = volume ÷ (lengte × breedte) = 24 ÷ (4 × 3) = 24 ÷ 12 = 2 blokkies.',
        },
        {
          label: 'b) As jy nog \'n laag blokkies bo-op sit, wat is die nuwe volume?',
          correctAnswer: '36cm³',
          correctAnswers: ['36cm³', '36cm3', '36', '36 cm³', '36 cm3'],
          explanation: 'Die nuwe hoogte is 2 + 1 = 3 blokkies. Nuwe volume = 4 × 3 × 3 = 36 cm³.',
        },
        {
          label: 'c) Hoeveel eenheidsblokkies sou jy moes bysit om die nuwe laag te maak?',
          correctAnswer: '12',
          correctAnswers: ['12', '12cubes', '12 cubes', '12blokkies', '12 blokkies'],
          explanation: 'Die nuwe laag dek die volle basis: 4 × 3 = 12 eenheidsblokkies.',
        },
      ],
    },

  ],
  scoreMessages: [
    { minScore: 30, message: 'Volpunte! Jy het Inhoud en Volume onder die knie.' },
    { minScore: 23, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het, weer deur en jy sal dit onder die knie hê.' },
    { minScore: 15, message: 'Goeie poging! Gaan terug en lees deur die afdelings waarmee jy gesukkel het.' },
    { minScore: 0,  message: 'Hou aan! Lees weer noukeurig deur die studiegids en probeer dan weer.' },
  ],
}
