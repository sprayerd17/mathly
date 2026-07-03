import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Massa',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — EENHEDE VAN MASSA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'units-of-mass',
      title: 'Eenhede van Massa',
      icon: '⚖️',
      explanation: `
<p style="margin-bottom:14px;"><strong>Massa</strong> vertel ons <strong>hoe swaar ʼn voorwerp is</strong>. Ons meet massa met behulp van standaardeenhede sodat almal dieselfde resultaat kry. Om die regte eenheid te kies, maak die meet baie makliker — ons sou nie die massa van ʼn persoon in gram meet nie!</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Die twee eenhede van massa</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Gram<br/><span style="font-weight:400;font-size:12px;">(g)</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Ligte voorwerpe.</strong> ʼn Gram is ʼn baie klein hoeveelheid massa. Gebruik <strong style="color:#1e40af;">gram (g)</strong> wanneer jy ligte voorwerpe soos ʼn snytjie brood, ʼn lekkergoedjie of ʼn pen meet. Daar is <strong>1 000 g in 1 kg</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Kilogram<br/><span style="font-weight:400;font-size:12px;">(kg)</span></span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong>Swaarder voorwerpe.</strong> ʼn Kilogram is baie swaarder as ʼn gram. Gebruik <strong style="color:#dc2626;">kilogram (kg)</strong> wanneer jy swaarder voorwerpe soos ʼn sak suiker, ʼn persoon of ʼn skooltas meet.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Omskakelingsfeit 🔢</span>
  <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:10px;">
    <span style="background:#1e40af;color:#fff;border-radius:8px;padding:6px 16px;font-weight:700;font-size:15px;">1 000 <span style="color:#bfdbfe;">g</span> = 1 <span style="color:#fca5a5;">kg</span></span>
  </div>
  <p style="margin-top:10px;font-size:14px;color:#78350f;">Om <strong style="color:#1e40af;">kg na g</strong> om te skakel — <strong>vermenigvuldig met 1 000</strong>. &nbsp;&nbsp; Om <strong style="color:#1e40af;">g na kg</strong> om te skakel — <strong>deel deur 1 000</strong>.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Alledaagse verwysingspunte</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 1 g</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">ʼn <strong>Skuifspeld</strong> weeg ongeveer <strong style="color:#1e40af;">1 g</strong> — gebruik dit om jou voor te stel hoe lig ʼn gram werklik is.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 700 g</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">ʼn <strong>Brood</strong> weeg ongeveer <strong style="color:#1e40af;">700 g</strong> — ligter as 1 kg, maar steeds in gram gemeet.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">1 kg</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">ʼn <strong>Sak suiker</strong> weeg presies <strong style="color:#dc2626;">1 kg</strong> — ʼn wonderlike voorwerp om op te tel en te voel hoe swaar 1 kg is.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 30 kg</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">ʼn <strong>Graad 4-leerder</strong> weeg ongeveer <strong style="color:#dc2626;">30 kg</strong> — groot massas van mense en diere word altyd in kilogram gemeet.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Die regte eenheid kies</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Eenheid</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Gebruik wanneer jy meet …</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Alledaagse voorbeelde</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">g</td>
          <td style="padding:8px 14px;color:#475569;">Ligte voorwerpe</td>
          <td style="padding:8px 14px;color:#475569;">ʼn Lekkergoedjie, ʼn pen, ʼn snytjie brood</td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#dc2626;">kg</td>
          <td style="padding:8px 14px;color:#475569;">Swaarder voorwerpe</td>
          <td style="padding:8px 14px;color:#475569;">ʼn Skooltas, ʼn persoon, ʼn sak suiker</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Watter eenheid sal jy gebruik om die massa van ʼn skooltas te meet?',
          steps: [
            'ʼn Skooltas is ʼn <strong>redelik swaar</strong> voorwerp — dit hou boeke, skryfbehoeftes en ʼn kosblik.',
            'Dit is <strong>te swaar</strong> vir gram om prakties te wees — ʼn skooltas is duisende gram, wat ʼn ongemaklike getal is.',
            '<strong style="color:#dc2626;">Kilogram (kg)</strong> is die regte keuse vir swaarder voorwerpe soos skooltasse.',
          ],
          answer: 'Kilogram (kg). ʼn Skooltas is ʼn swaar voorwerp wat die beste in kilogram gemeet word.',
        },
        {
          question: 'Watter eenheid sal jy gebruik om die massa van ʼn lekkergoedjie te meet?',
          steps: [
            'ʼn Lekkergoedjie is ʼn <strong>baie ligte voorwerp</strong> — jy kan dit skaars in jou hand voel.',
            '<strong style="color:#1e40af;">Gram (g)</strong> word gebruik vir ligte voorwerpe soos lekkergoed, omdat die massa heeltemal te klein is om in kilogram te meet.',
          ],
          answer: 'Gram (g). ʼn Lekkergoedjie is ʼn baie ligte voorwerp wat die beste in gram gemeet word.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Vier voorwerpe getoon met hul massa — ʼn skuifspeld wat 1g toon, ʼn snytjie brood wat ongeveer 30g toon, ʼn sak suiker wat 1kg toon en ʼn skooltas wat ongeveer 3kg toon',
      videoPlaceholder:
        'Kort video wat gram en kilogram verduidelik met alledaagse voorbeelde van wanneer om elke eenheid te gebruik',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — MASSA SKAT EN LEES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating-reading-mass',
      title: 'Massa Skat en Lees',
      icon: '🔍',
      explanation: `
<p style="margin-bottom:14px;"><strong>Skat</strong> van massa beteken om ʼn <strong>versigtige raaiskoot</strong> te maak voordat jy meet. ʼn Goeie skatting gebruik ʼn <strong>verwysingspunt</strong> — iets waarvan jy die massa reeds ken — om jou te help beoordeel hoe swaar ʼn voorwerp is. Nadat jy geskat het, meet jy om die <strong>werklike meting</strong> te vind.</p>

<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="display:flex;flex-wrap:wrap;gap:10px;">
    <div style="background:#fff;border:1.5px solid #fdba74;border-radius:8px;padding:10px 16px;flex:1;min-width:180px;">
      <div style="font-size:12px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px;">Skatting</div>
      <div style="color:#7c2d12;font-size:14px;">Jou versigtige raaiskoot <em>voordat</em> jy meet. Geskryf as <strong style="color:#ea580c;">≈ 250 g</strong> (die ≈-simbool beteken "ongeveer").</div>
    </div>
    <div style="background:#fff;border:1.5px solid #bfdbfe;border-radius:8px;padding:10px 16px;flex:1;min-width:180px;">
      <div style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px;">Werklike meting</div>
      <div style="color:#1e3a8a;font-size:14px;">Die presiese massa wat gevind word deur op ʼn skaal te meet. Geskryf as <strong style="color:#1e40af;">= 260 g</strong>.</div>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Tipes skale</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Kombuisskaal</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Het ʼn <strong>wyserplaat of digitale skerm</strong>. Plaas die voorwerp op die platform en lees die getal wat getoon word. Word gebruik om kos in <strong>gram of kilogram</strong> te meet.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Badkamerskaal</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong>Staan daarop</strong> en lees die getal wat in <strong>kilogram</strong> getoon word. Word gebruik om die massa van ʼn persoon te meet.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Balansskaal</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">Plaas die voorwerp aan <strong>een kant</strong> en bekende massas aan die ander kant totdat die twee kante <strong>eweredig balanseer</strong>. Die massa van die voorwerp is gelyk aan die totaal van die bekende massas.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Hoe om ʼn skaal met intervalle te lees</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;"><strong>Vind die maksimum waarde</strong> op die skaal — dit is die grootste getal wat getoon word.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;"><strong>Tel die aantal intervalle</strong> tussen twee genommerde getalle.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;"><strong>Bereken die waarde van elke interval</strong> deur die gaping tussen twee genommerde getalle deur die aantal intervalle te deel.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;"><strong>Lees waar die wyser wys</strong> deur van die naaste genommerde getal af te tel.</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'ʼn Skaal gaan van 0 tot 500 g met 5 klein intervalle tussen elke 100 g-merk. Wat is elke klein interval werd?',
          steps: [
            'Elke genommerde afdeling dek <strong style="color:#1e40af;">100 g</strong> en word in <strong style="color:#1e40af;">5</strong> klein intervalle verdeel.',
            'Deel die afdeling deur die aantal intervalle: <strong style="color:#1e40af;">100</strong> ÷ <strong style="color:#1e40af;">5</strong> = <strong style="color:#ea580c;">20</strong>',
          ],
          answer: 'Elke klein interval is 20 g werd.',
        },
        {
          question:
            'ʼn Skaal se wyser wys presies halfpad tussen 300 g en 400 g. Wat is die massa?',
          steps: [
            'Die wyser is <strong>halfpad</strong> tussen <strong style="color:#1e40af;">300 g</strong> en <strong style="color:#1e40af;">400 g</strong>.',
            'Die gaping tussen 300 en 400 is 100 g. Halfpad = 100 ÷ 2 = 50 g na 300.',
            '<strong style="color:#1e40af;">300</strong> + <strong style="color:#ea580c;">50</strong> = <strong style="color:#ea580c;">350</strong>',
          ],
          answer: 'Die massa is 350 g.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'ʼn Ronde kombuisskaal-wyserplaat wat 0 tot 1000g toon met die wyser wat na 350g wys en elke interval duidelik gemerk',
      videoPlaceholder:
        'Kort video wat wys hoe om verskillende tipes skale te lees, insluitend kombuisskale en balansskale',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — OMSKAKELING TUSSEN GRAM EN KILOGRAM
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-grams-kilograms',
      title: 'Omskakeling Tussen Gram en Kilogram',
      icon: '🔄',
      explanation: `
<p style="margin-bottom:14px;"><strong>Omskakel</strong> beteken om ʼn meting van een eenheid na ʼn ander te verander. Die hoeveelheid bly dieselfde — net die eenheid en die getal verander. Alle omskakelings tussen gram en kilogram gebruik een feit: <strong style="color:#16a34a;">1 000 g = 1 kg</strong>.</p>

<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Geheue-wenk 💡</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="color:#7f1d1d;font-size:15px;">Na ʼn <strong>kleiner eenheid</strong> toe (<strong style="color:#dc2626;">kg</strong> → <strong style="color:#1e40af;">g</strong>) → <strong style="color:#16a34a;">vermenigvuldig met 1 000</strong> → die getal word <strong>groter</strong>.</div>
    <div style="color:#7f1d1d;font-size:15px;">Na ʼn <strong>groter eenheid</strong> toe (<strong style="color:#1e40af;">g</strong> → <strong style="color:#dc2626;">kg</strong>) → <strong style="color:#16a34a;">deel deur 1 000</strong> → die getal word <strong>kleiner</strong>.</div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Omskakelingsreëls</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Van</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Na</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Bewerking</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Voorbeeld</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">g</td>
          <td style="padding:8px 14px;font-weight:700;color:#dc2626;">kg</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#16a34a;">÷ 1 000</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">2 000 g</span> = <span style="color:#dc2626;font-weight:700;">2 kg</span></td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#dc2626;">kg</td>
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">g</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#16a34a;">× 1 000</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#dc2626;font-weight:700;">3 kg</span> = <span style="color:#1e40af;font-weight:700;">3 000 g</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Skakel 3 500 g om na kg.',
          steps: [
            'Om van <strong style="color:#1e40af;">g</strong> na <strong style="color:#dc2626;">kg</strong> te gaan — <strong style="color:#16a34a;">deel deur 1 000</strong> (na ʼn groter eenheid toe, dus word die getal kleiner).',
            '<strong style="color:#1e40af;">3 500</strong> ÷ <strong style="color:#16a34a;">1 000</strong> = <strong style="color:#dc2626;">3,5</strong>',
          ],
          answer: '3 500 g = 3,5 kg',
        },
        {
          question: 'Skakel 2,75 kg om na g.',
          steps: [
            'Om van <strong style="color:#dc2626;">kg</strong> na <strong style="color:#1e40af;">g</strong> te gaan — <strong style="color:#16a34a;">vermenigvuldig met 1 000</strong> (na ʼn kleiner eenheid toe, dus word die getal groter).',
            '<strong style="color:#dc2626;">2,75</strong> × <strong style="color:#16a34a;">1 000</strong> = <strong style="color:#1e40af;">2 750</strong>',
          ],
          answer: '2,75 kg = 2 750 g',
        },
      ],
      practiceQuestions: [],
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — BEREKENINGE MET MASSA EN WOORDPROBLEME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-mass-word-problems',
      title: 'Berekeninge met Massa en Woordprobleme',
      icon: '📝',
      explanation: `
<p style="margin-bottom:14px;">Woordprobleme oor massa vra jou om massas <strong>bymekaar te tel</strong> of <strong>af te trek</strong> om alledaagse situasies op te los. Voordat jy bereken, moet jy altyd die vraag <strong>versigtig lees</strong>, na <strong>sleutelwoorde</strong> soek, en seker maak dat albei massas in <strong>dieselfde eenheid</strong> is.</p>

<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#c2410c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Sleutelwoorde om na te soek</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">

    <div style="background:#fff;border:1.5px solid #bfdbfe;border-radius:8px;padding:10px 16px;flex:1;min-width:200px;">
      <div style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;">Optelling ➕</div>
      <div style="display:flex;flex-direction:column;gap:4px;">
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">totale massa</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">altesaam</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">gekombineer</strong></span>
      </div>
    </div>

    <div style="background:#fff;border:1.5px solid #bfdbfe;border-radius:8px;padding:10px 16px;flex:1;min-width:200px;">
      <div style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;">Aftrekking ➖</div>
      <div style="display:flex;flex-direction:column;gap:4px;">
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">verskil</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">hoeveel swaarder / ligter</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">oorblywend</strong></span>
      </div>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Stappe om ʼn woordprobleem oor massa op te los</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Lees</strong> die vraag versigtig.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Vind die sleutelwoord</strong> en besluit of jy moet optel of aftrek.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Skakel om</strong> sodat albei massas in dieselfde eenheid is.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Bereken</strong> en skryf die antwoord met die korrekte eenheid.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'ʼn Sak appels weeg 1 kg 500 g en ʼn sak lemoene weeg 750 g. Wat is die totale massa?',
          steps: [
            'Sleutelwoord: <strong style="color:#ea580c;">totale massa</strong> — dit beteken <strong>optelling</strong>.',
            'Skakel om na dieselfde eenheid: <strong style="color:#dc2626;">1 kg 500 g</strong> = <strong style="color:#1e40af;">1 500 g</strong>.',
            'Tel op: <strong style="color:#1e40af;">1 500 g</strong> + <strong style="color:#1e40af;">750 g</strong> = <strong style="color:#1e40af;">2 250 g</strong>.',
            'Skakel terug om: 2 250 g = <strong style="color:#dc2626;">2 kg 250 g</strong>.',
          ],
          answer: 'Die totale massa is 2 kg 250 g.',
        },
        {
          question:
            'ʼn Boks weeg 5 kg. Nadat sekere boeke verwyder is, weeg dit 2 kg 300 g. Hoeveel het die boeke geweeg?',
          steps: [
            'Sleutelwoord: <strong style="color:#ea580c;">verwyder</strong> — dit beteken <strong>aftrekking</strong>.',
            'Skakel om na dieselfde eenheid: <strong style="color:#dc2626;">5 kg</strong> = <strong style="color:#1e40af;">5 000 g</strong> en <strong style="color:#dc2626;">2 kg 300 g</strong> = <strong style="color:#1e40af;">2 300 g</strong>.',
            'Trek af: <strong style="color:#1e40af;">5 000 g</strong> − <strong style="color:#1e40af;">2 300 g</strong> = <strong style="color:#1e40af;">2 700 g</strong>.',
            'Skakel om: 2 700 g = <strong style="color:#dc2626;">2 kg 700 g</strong>.',
          ],
          answer: 'Die boeke het 2 kg 700 g geweeg.',
        },
        {
          question:
            'ʼn Resep benodig 750 g meel. Lerato het 2 kg meel. Hoeveel meel sal sy oorhê na die bak?',
          steps: [
            'Sleutelwoord: <strong style="color:#ea580c;">oorhê</strong> — dit beteken <strong>aftrekking</strong>.',
            'Skakel <strong style="color:#dc2626;">2 kg</strong> om na gram: <strong style="color:#dc2626;">2</strong> × <strong style="color:#16a34a;">1 000</strong> = <strong style="color:#1e40af;">2 000 g</strong>.',
            'Trek af: <strong style="color:#1e40af;">2 000 g</strong> − <strong style="color:#1e40af;">750 g</strong> = <strong style="color:#1e40af;">1 250 g</strong>.',
            'Skakel om: 1 250 g = <strong style="color:#dc2626;">1 kg 250 g</strong>.',
          ],
          answer: 'Lerato sal 1 kg 250 g meel oorhê.',
        },
      ],
      practiceQuestions: [],
      videoPlaceholder:
        'Kort video wat wys hoe om woordprobleme oor massa op te los deur sleutelwoorde te identifiseer en om te skakel na dieselfde eenheid voordat jy bereken',
    },
  ],
  topicPractice: [

    // ── AFDELING 1 — Eenhede van Massa ─────────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Watter eenheid sal jy gebruik om die massa van elke voorwerp te meet?',
      checkMode: 'auto',
      answer: 'a) Gram (g)   b) Kilogram (kg)   c) Kilogram (kg)',
      parts: [
        {
          label: 'a) ʼn Lekkergoedjie',
          correctAnswer: 'g',
          correctAnswers: ['g', 'gram'],
          explanation: 'ʼn Lekkergoedjie is ʼn baie ligte voorwerp. Gram (g) word gebruik vir ligte voorwerpe soos lekkergoed — die massa is heeltemal te klein om betekenisvol in kilogram te meet.',
        },
        {
          label: 'b) ʼn Skooltas',
          correctAnswer: 'kg',
          correctAnswers: ['kg', 'kilogram'],
          explanation: 'ʼn Skooltas is ʼn redelik swaar voorwerp, gewoonlik ongeveer 3–5 kg. Kilogram (kg) word gebruik vir swaarder voorwerpe omdat die aantal gram ongemaklik groot sou wees.',
        },
        {
          label: 'c) ʼn Sak aartappels',
          correctAnswer: 'kg',
          correctAnswers: ['kg', 'kilogram'],
          explanation: 'ʼn Sak aartappels is swaar — gewoonlik 2 tot 5 kg. Kilogram (kg) word altyd gebruik vir swaar voorwerpe soos sakke produkte of kruideniersware.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question: 'Hoeveel gram is in elk van die volgende?',
      checkMode: 'auto',
      answer: 'a) 1 000 g   b) 2 000 g   c) 500 g',
      parts: [
        {
          label: 'a) 1 kg',
          correctAnswer: '1000g',
          correctAnswers: ['1000g', '1000', '1000 g', '1 000g', '1 000 g'],
          explanation: 'Daar is 1 000 g in 1 kg. Om kg na g om te skakel, vermenigvuldig met 1 000: 1 × 1 000 = 1 000 g.',
        },
        {
          label: 'b) 2 kg',
          correctAnswer: '2000g',
          correctAnswers: ['2000g', '2000', '2000 g', '2 000g', '2 000 g'],
          explanation: 'Om kg na g om te skakel, vermenigvuldig met 1 000: 2 × 1 000 = 2 000 g.',
        },
        {
          label: 'c) Halwe kg',
          correctAnswer: '500g',
          correctAnswers: ['500g', '500', '500 g'],
          explanation: 'Die helfte van 1 kg = die helfte van 1 000 g = 500 g. 0,5 × 1 000 = 500 g.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'Thabo sê ʼn penkoker weeg ongeveer 2 kg en ʼn sak suiker weeg ongeveer 200 g. Is hy korrek? Verduidelik jou antwoord vir albei voorwerpe.',
      checkMode: 'self',
      answer: 'Nee, Thabo is nie korrek vir enige van die voorwerpe nie. ʼn Penkoker weeg ongeveer 200 g tot 300 g — 2 kg sou so swaar wees soos twee sakke suiker, wat heeltemal te swaar is vir ʼn penkoker. ʼn Sak suiker weeg 1 kg (1 000 g), nie 200 g nie — 200 g is nader aan die massa van ʼn sjokoladelekker.',
    },

    // ── AFDELING 2 — Massa Skat en Lees ───────────────────────────────

    {
      difficulty: 'Easy',
      question: 'ʼn Skaal gaan van 0 tot 1 000 g. Die wyser wys presies halfpad. Wat is die massa?',
      checkMode: 'auto',
      answer: '500 g',
      correctAnswer: '500g',
      correctAnswers: ['500g', '500', '500 g'],
      explanation: 'Halfpad tussen 0 en 1 000 is 500. 1 000 ÷ 2 = 500 g.',
    },

    {
      difficulty: 'Medium',
      question: 'ʼn Skaal gaan van 0 tot 500 g met 5 gelyke intervalle tussen elke 100 g-merk.',
      checkMode: 'auto',
      answer: 'a) 20 g   b) 240 g   c) 350 g',
      parts: [
        {
          label: 'a) Wat is die waarde van elke klein interval?',
          correctAnswer: '20g',
          correctAnswers: ['20g', '20', '20 g'],
          explanation: 'Elke 100 g-afdeling word in 5 gelyke intervalle verdeel. 100 ÷ 5 = 20 g per interval.',
        },
        {
          label: 'b) As die wyser by die tweede interval na 200 g wys, wat is die massa?',
          correctAnswer: '240g',
          correctAnswers: ['240g', '240', '240 g'],
          explanation: 'Begin by 200 g en tel 2 intervalle van 20 g elk: 200 + 20 + 20 = 240 g.',
        },
        {
          label: 'c) As die wyser presies halfpad tussen 300 g en 400 g wys, wat is die massa?',
          correctAnswer: '350g',
          correctAnswers: ['350g', '350', '350 g'],
          explanation: 'Die gaping tussen 300 en 400 is 100 g. Halfpad = 100 ÷ 2 = 50 g na 300. 300 + 50 = 350 g.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'ʼn Balansskaal het ʼn sak meel aan een kant. Om dit te balanseer, word twee 500 g-gewigte en een 250 g-gewig aan die ander kant geplaas.',
      checkMode: 'auto',
      answer: 'a) 1 250 g   b) 1 250 g   c) 1,25 kg',
      parts: [
        {
          label: 'a) Wat is die totale massa van die gewigte?',
          correctAnswer: '1250g',
          correctAnswers: ['1250g', '1250', '1250 g', '1 250g', '1 250 g'],
          explanation: 'Tel die gewigte op: 500 g + 500 g + 250 g = 1 250 g.',
        },
        {
          label: 'b) Wat is die massa van die meel?',
          correctAnswer: '1250g',
          correctAnswers: ['1250g', '1250', '1250 g', '1 250g', '1 250 g'],
          explanation: 'ʼn Balansskaal balanseer wanneer albei kante gelyke massa het. Die meel is gelyk aan die totale massa van die gewigte: 1 250 g.',
        },
        {
          label: 'c) Skakel die massa van die meel om na kg.',
          correctAnswer: '1.25kg',
          correctAnswers: ['1.25kg', '1.25', '1.25 kg', '1,25kg', '1,25', '1,25 kg'],
          explanation: 'Om g na kg om te skakel, deel deur 1 000: 1 250 ÷ 1 000 = 1,25 kg.',
        },
      ],
    },

    // AFDELING 3 — Omskakeling Tussen Gram en Kilogram
    {
      difficulty: 'Easy',
      question: 'Skakel die volgende massas om.',
      checkMode: 'auto',
      answer: 'a) 2 kg   b) 3 000 g',
      parts: [
        {
          label: 'a) 2 000 g = ___ kg',
          correctAnswer: '2kg',
          correctAnswers: ['2kg', '2', '2 kg'],
          explanation: 'Om g na kg om te skakel, deel deur 1 000: 2 000 ÷ 1 000 = 2 kg.',
        },
        {
          label: 'b) 3 kg = ___ g',
          correctAnswer: '3000g',
          correctAnswers: ['3000g', '3000', '3000 g', '3 000g', '3 000 g'],
          explanation: 'Om kg na g om te skakel, vermenigvuldig met 1 000: 3 × 1 000 = 3 000 g.',
        },
      ],
    },
    {
      difficulty: 'Medium',
      question: 'Skakel elke massa om na die eenheid getoon.',
      checkMode: 'auto',
      answer: 'a) 4,5 kg   b) 1 500 g   c) 0,75 kg   d) 2 250 g',
      parts: [
        {
          label: 'a) 4 500 g = ___ kg',
          correctAnswer: '4.5kg',
          correctAnswers: ['4.5kg', '4.5', '4.5 kg', '4,5kg', '4,5', '4,5 kg'],
          explanation: 'Deel deur 1 000: 4 500 ÷ 1 000 = 4,5 kg.',
        },
        {
          label: 'b) 1,5 kg = ___ g',
          correctAnswer: '1500g',
          correctAnswers: ['1500g', '1500', '1500 g', '1 500g', '1 500 g'],
          explanation: 'Vermenigvuldig met 1 000: 1,5 × 1 000 = 1 500 g.',
        },
        {
          label: 'c) 750 g = ___ kg',
          correctAnswer: '0.75kg',
          correctAnswers: ['0.75kg', '0.75', '0.75 kg', '0,75kg', '0,75', '0,75 kg'],
          explanation: 'Deel deur 1 000: 750 ÷ 1 000 = 0,75 kg.',
        },
        {
          label: 'd) 2,25 kg = ___ g',
          correctAnswer: '2250g',
          correctAnswers: ['2250g', '2250', '2250 g', '2 250g', '2 250 g'],
          explanation: 'Vermenigvuldig met 1 000: 2,25 × 1 000 = 2 250 g.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'Drie pakkies het massas van 1 kg 250 g, 900 g, en 1 kg 600 g.',
      checkMode: 'auto',
      answer: 'a) 1 250 g   b) 3 750 g   c) 3,75 kg',
      parts: [
        {
          label: 'a) Skakel 1 kg 250 g om na gram.',
          correctAnswer: '1250g',
          correctAnswers: ['1250g', '1250', '1250 g', '1 250g', '1 250 g'],
          explanation: '1 kg = 1 000 g, dus 1 kg 250 g = 1 000 g + 250 g = 1 250 g.',
        },
        {
          label: 'b) Wat is die totale massa van al drie pakkies in gram?',
          correctAnswer: '3750g',
          correctAnswers: ['3750g', '3750', '3750 g', '3 750g', '3 750 g'],
          explanation: 'Tel al drie op: 1 250 g + 900 g + 1 600 g = 3 750 g.',
        },
        {
          label: 'c) Skakel die totale massa om na kg.',
          correctAnswer: '3.75kg',
          correctAnswers: ['3.75kg', '3.75', '3.75 kg', '3,75kg', '3,75', '3,75 kg'],
          explanation: 'Deel deur 1 000: 3 750 ÷ 1 000 = 3,75 kg.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'Drie pakkies het massas van 1 kg 250 g, 900 g, en 1 kg 600 g.',
      checkMode: 'self',
      answer: 'Minder as 4 kg. Aangesien 3,75 kg < 4 kg, is die totale massa minder as 4 kg.',
      parts: [
        {
          label: 'd) Is die totale massa meer of minder as 4 kg? Verduidelik.',
          correctAnswer: '',
          explanation: 'Minder as 4 kg. Aangesien 3,75 kg < 4 kg, is die totale massa minder as 4 kg.',
        },
      ],
    },

    // AFDELING 4 — Berekeninge met Massa en Woordprobleme
    {
      difficulty: 'Easy',
      question: 'ʼn Sak appels het ʼn massa van 1 500 g. ʼn Sak pere het ook ʼn massa van 500 g. Wat is die totale massa van albei sakke?',
      checkMode: 'auto',
      answer: '2 kg of 2 000 g',
      correctAnswer: '2kg',
      correctAnswers: ['2kg', '2', '2 kg', '2000g', '2000', '2000 g', '2 000g', '2 000 g'],
      explanation: 'Tel die massas op: 1 500 g + 500 g = 2 000 g = 2 kg.',
    },
    {
      difficulty: 'Medium',
      question: 'ʼn Winkelier het ʼn 7 kg-sak rys. Sy verkoop 1 kg 750 g rys aan ʼn kliënt.',
      checkMode: 'auto',
      answer: 'a) Aftrekking   b) 5 kg 250 g',
      parts: [
        {
          label: 'a) Watter bewerking gebruik jy om die oorblywende massa te vind?',
          correctAnswer: 'aftrekking',
          correctAnswers: ['aftrekking', 'trek af', 'minus'],
          explanation: 'Ons trek die verkoopte hoeveelheid van die totaal af: 7 kg − 1 kg 750 g.',
        },
        {
          label: 'b) Watter massa rys bly oor?',
          correctAnswer: '5kg250g',
          correctAnswers: ['5kg250g', '5250g', '5250', '5 kg 250 g', '5kg 250g'],
          explanation: 'Skakel om: 7 kg = 7 000 g. Trek af: 7 000 g − 1 750 g = 5 250 g = 5 kg 250 g.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'ʼn Bakker gebruik 1 kg 750 g meel vir brood en 1 kg 500 g meel vir muffins.',
      checkMode: 'auto',
      answer: 'a) 3 kg 250 g   b) 1 kg 750 g',
      parts: [
        {
          label: 'a) Wat is die totale massa meel wat gebruik is?',
          correctAnswer: '3kg250g',
          correctAnswers: ['3kg250g', '3250g', '3250', '3.25kg', '3.25', '3,25kg', '3,25', '3 kg 250 g', '3kg 250g'],
          explanation: 'Tel op: 1 750 g + 1 500 g = 3 250 g = 3 kg 250 g.',
        },
        {
          label: 'b) Die bakker het met 5 kg meel begin. Hoeveel bly oor?',
          correctAnswer: '1kg750g',
          correctAnswers: ['1kg750g', '1750g', '1750', '1.75kg', '1.75', '1,75kg', '1,75', '1 kg 750 g', '1kg 750g'],
          explanation: 'Skakel om: 5 kg = 5 000 g. Trek af: 5 000 g − 3 250 g = 1 750 g = 1 kg 750 g.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'ʼn Bakker gebruik 1 kg 750 g meel vir brood en 1 kg 500 g meel vir muffins.',
      checkMode: 'self',
      answer: 'R15 × 3,25 = R48,75. Die totale koste is R48,75.',
      parts: [
        {
          label: 'c) Meel kos R15 per kg. Wat is die koste van die meel wat gebruik is? Wys jou berekening.',
          correctAnswer: '',
          explanation: 'Totale meel = 3 250 g = 3,25 kg. Koste = R15 × 3,25 = R48,75.',
        },
      ],
    },

  ],
  scoreMessages: [
    { minScore: 30, message: 'Volpunte! Jy het Massa baasgeraak.' },
    { minScore: 23, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het weer deur en jy sal dit baasraak.' },
    { minScore: 15, message: 'Goeie poging! Gaan terug en lees weer deur die afdelings waarmee jy gesukkel het.' },
    { minScore: 0,  message: 'Hou aan! Lees die studiegids weer versigtig deur en probeer dan weer.' },
  ],
}
