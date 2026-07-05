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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
      videoPlaceholder:
        'Kort video wat wys hoe om woordprobleme oor massa op te los deur sleutelwoorde te identifiseer en om te skakel na dieselfde eenheid voordat jy bereken',
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 — GRONDLIGGENDE EENHEID-OMSKAKELINGS (g ↔ kg) (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Grondliggende Omskakelings',
      questions: [
        { difficulty: 'Easy', question: 'Skakel 1 kg om na gram.', answer: '1 000 g', checkMode: 'auto', correctAnswer: '1000g', correctAnswers: ['1000g', '1000', '1000 g', '1 000g', '1 000 g'], explanation: 'Om kg na g om te skakel, vermenigvuldig met 1 000: 1 × 1 000 = 1 000 g.' },
        { difficulty: 'Easy', question: 'Skakel 2 kg om na gram.', answer: '2 000 g', checkMode: 'auto', correctAnswer: '2000g', correctAnswers: ['2000g', '2000', '2000 g', '2 000g', '2 000 g'], explanation: 'Vermenigvuldig met 1 000: 2 × 1 000 = 2 000 g.' },
        { difficulty: 'Easy', question: 'Skakel 3 kg om na gram.', answer: '3 000 g', checkMode: 'auto', correctAnswer: '3000g', correctAnswers: ['3000g', '3000', '3000 g', '3 000g', '3 000 g'], explanation: 'Vermenigvuldig met 1 000: 3 × 1 000 = 3 000 g.' },
        { difficulty: 'Easy', question: 'Skakel 4 kg om na gram.', answer: '4 000 g', checkMode: 'auto', correctAnswer: '4000g', correctAnswers: ['4000g', '4000', '4000 g', '4 000g', '4 000 g'], explanation: 'Vermenigvuldig met 1 000: 4 × 1 000 = 4 000 g.' },
        { difficulty: 'Easy', question: 'Skakel 5 kg om na gram.', answer: '5 000 g', checkMode: 'auto', correctAnswer: '5000g', correctAnswers: ['5000g', '5000', '5000 g', '5 000g', '5 000 g'], explanation: 'Vermenigvuldig met 1 000: 5 × 1 000 = 5 000 g.' },
        { difficulty: 'Easy', question: 'Skakel 7 kg om na gram.', answer: '7 000 g', checkMode: 'auto', correctAnswer: '7000g', correctAnswers: ['7000g', '7000', '7000 g', '7 000g', '7 000 g'], explanation: 'Vermenigvuldig met 1 000: 7 × 1 000 = 7 000 g.' },
        { difficulty: 'Easy', question: 'Skakel 9 kg om na gram.', answer: '9 000 g', checkMode: 'auto', correctAnswer: '9000g', correctAnswers: ['9000g', '9000', '9000 g', '9 000g', '9 000 g'], explanation: 'Vermenigvuldig met 1 000: 9 × 1 000 = 9 000 g.' },
        { difficulty: 'Easy', question: 'Skakel 10 kg om na gram.', answer: '10 000 g', checkMode: 'auto', correctAnswer: '10000g', correctAnswers: ['10000g', '10000', '10000 g', '10 000g', '10 000 g'], explanation: 'Vermenigvuldig met 1 000: 10 × 1 000 = 10 000 g.' },
        { difficulty: 'Easy', question: 'Skakel 1 000 g om na kilogram.', answer: '1 kg', checkMode: 'auto', correctAnswer: '1kg', correctAnswers: ['1kg', '1', '1 kg'], explanation: 'Om g na kg om te skakel, deel deur 1 000: 1 000 ÷ 1 000 = 1 kg.' },
        { difficulty: 'Easy', question: 'Skakel 2 000 g om na kilogram.', answer: '2 kg', checkMode: 'auto', correctAnswer: '2kg', correctAnswers: ['2kg', '2', '2 kg'], explanation: 'Deel deur 1 000: 2 000 ÷ 1 000 = 2 kg.' },
        { difficulty: 'Easy', question: 'Skakel 3 000 g om na kilogram.', answer: '3 kg', checkMode: 'auto', correctAnswer: '3kg', correctAnswers: ['3kg', '3', '3 kg'], explanation: 'Deel deur 1 000: 3 000 ÷ 1 000 = 3 kg.' },
        { difficulty: 'Easy', question: 'Skakel 4 000 g om na kilogram.', answer: '4 kg', checkMode: 'auto', correctAnswer: '4kg', correctAnswers: ['4kg', '4', '4 kg'], explanation: 'Deel deur 1 000: 4 000 ÷ 1 000 = 4 kg.' },
        { difficulty: 'Easy', question: 'Skakel 5 000 g om na kilogram.', answer: '5 kg', checkMode: 'auto', correctAnswer: '5kg', correctAnswers: ['5kg', '5', '5 kg'], explanation: 'Deel deur 1 000: 5 000 ÷ 1 000 = 5 kg.' },
        { difficulty: 'Easy', question: 'Skakel 6 000 g om na kilogram.', answer: '6 kg', checkMode: 'auto', correctAnswer: '6kg', correctAnswers: ['6kg', '6', '6 kg'], explanation: 'Deel deur 1 000: 6 000 ÷ 1 000 = 6 kg.' },
        { difficulty: 'Easy', question: 'Skakel 8 000 g om na kilogram.', answer: '8 kg', checkMode: 'auto', correctAnswer: '8kg', correctAnswers: ['8kg', '8', '8 kg'], explanation: 'Deel deur 1 000: 8 000 ÷ 1 000 = 8 kg.' },
        { difficulty: 'Easy', question: 'Skakel 10 000 g om na kilogram.', answer: '10 kg', checkMode: 'auto', correctAnswer: '10kg', correctAnswers: ['10kg', '10', '10 kg'], explanation: 'Deel deur 1 000: 10 000 ÷ 1 000 = 10 kg.' },
        { difficulty: 'Medium', question: 'Skakel ʼn halwe kilogram om na gram.', answer: '500 g', checkMode: 'auto', correctAnswer: '500g', correctAnswers: ['500g', '500', '500 g'], explanation: 'Die helfte van 1 kg = die helfte van 1 000 g. 0,5 × 1 000 = 500 g.' },
        { difficulty: 'Medium', question: 'Skakel 0,5 kg om na gram.', answer: '500 g', checkMode: 'auto', correctAnswer: '500g', correctAnswers: ['500g', '500', '500 g'], explanation: 'Vermenigvuldig met 1 000: 0,5 × 1 000 = 500 g.' },
        { difficulty: 'Medium', question: 'Skakel 1,5 kg om na gram.', answer: '1 500 g', checkMode: 'auto', correctAnswer: '1500g', correctAnswers: ['1500g', '1500', '1500 g', '1 500g', '1 500 g'], explanation: 'Vermenigvuldig met 1 000: 1,5 × 1 000 = 1 500 g.' },
        { difficulty: 'Medium', question: 'Skakel 2,5 kg om na gram.', answer: '2 500 g', checkMode: 'auto', correctAnswer: '2500g', correctAnswers: ['2500g', '2500', '2500 g', '2 500g', '2 500 g'], explanation: 'Vermenigvuldig met 1 000: 2,5 × 1 000 = 2 500 g.' },
        { difficulty: 'Medium', question: 'Skakel 250 g om na kilogram.', answer: '0,25 kg', checkMode: 'auto', correctAnswer: '0.25kg', correctAnswers: ['0.25kg', '0.25', '0.25 kg', '0,25kg', '0,25', '0,25 kg'], explanation: 'Deel deur 1 000: 250 ÷ 1 000 = 0,25 kg.' },
        { difficulty: 'Medium', question: 'Skakel 750 g om na kilogram.', answer: '0,75 kg', checkMode: 'auto', correctAnswer: '0.75kg', correctAnswers: ['0.75kg', '0.75', '0.75 kg', '0,75kg', '0,75', '0,75 kg'], explanation: 'Deel deur 1 000: 750 ÷ 1 000 = 0,75 kg.' },
        { difficulty: 'Medium', question: 'Skakel 100 g om na kilogram.', answer: '0,1 kg', checkMode: 'auto', correctAnswer: '0.1kg', correctAnswers: ['0.1kg', '0.1', '0.1 kg', '0.10', '0.10kg', '0.10 kg', '0,1kg', '0,1', '0,1 kg', '0,10', '0,10kg', '0,10 kg'], explanation: 'Deel deur 1 000: 100 ÷ 1 000 = 0,1 kg.' },
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die massa van ʼn lekkergoedjie te meet — gram of kilogram?', answer: 'Gram', checkMode: 'auto', correctAnswer: 'g', correctAnswers: ['g', 'gram'], explanation: 'ʼn Lekkergoedjie is ʼn baie ligte voorwerp. Gram (g) word gebruik vir ligte voorwerpe omdat die massa heeltemal te klein is om betekenisvol in kilogram te meet.' },
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die massa van ʼn skooltas te meet — gram of kilogram?', answer: 'Kilogram', checkMode: 'auto', correctAnswer: 'kg', correctAnswers: ['kg', 'kilogram'], explanation: 'ʼn Skooltas is ʼn redelik swaar voorwerp, gewoonlik ongeveer 3–5 kg. Kilogram (kg) word gebruik vir swaarder voorwerpe omdat die aantal gram ongemaklik groot sou wees.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Perfek! Jy het die omskakeling tussen gram en kilogram baasgeraak.' },
        { minScore: 19, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die omskakelingsreëls en voorbeelde weer deur.' },
        { minScore: 0, message: 'Hou aan — gaan die studiegids weer deur en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 — VEELSTAP-OMSKAKELINGS, VERGELYK EN SKALE LEES (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Veelstap-omskakelings en Skale',
      questions: [
        { difficulty: 'Easy', question: 'Skakel 1 kg 500 g om na gram.', answer: '1 500 g', checkMode: 'auto', correctAnswer: '1500g', correctAnswers: ['1500g', '1500', '1500 g', '1 500g', '1 500 g'], explanation: '1 kg = 1 000 g, dus 1 kg 500 g = 1 000 g + 500 g = 1 500 g.' },
        { difficulty: 'Easy', question: 'Skakel 2 kg 250 g om na gram.', answer: '2 250 g', checkMode: 'auto', correctAnswer: '2250g', correctAnswers: ['2250g', '2250', '2250 g', '2 250g', '2 250 g'], explanation: '2 kg = 2 000 g, dus 2 kg 250 g = 2 000 g + 250 g = 2 250 g.' },
        { difficulty: 'Medium', question: 'Skakel 3 kg 100 g om na gram.', answer: '3 100 g', checkMode: 'auto', correctAnswer: '3100g', correctAnswers: ['3100g', '3100', '3100 g', '3 100g', '3 100 g'], explanation: '3 kg = 3 000 g, dus 3 kg 100 g = 3 000 g + 100 g = 3 100 g.' },
        { difficulty: 'Medium', question: 'Skakel 1 kg 750 g om na gram.', answer: '1 750 g', checkMode: 'auto', correctAnswer: '1750g', correctAnswers: ['1750g', '1750', '1750 g', '1 750g', '1 750 g'], explanation: '1 kg = 1 000 g, dus 1 kg 750 g = 1 000 g + 750 g = 1 750 g.' },
        { difficulty: 'Medium', question: 'Skakel 4 kg 20 g om na gram.', answer: '4 020 g', checkMode: 'auto', correctAnswer: '4020g', correctAnswers: ['4020g', '4020', '4020 g', '4 020g', '4 020 g'], explanation: '4 kg = 4 000 g, dus 4 kg 20 g = 4 000 g + 20 g = 4 020 g.' },
        { difficulty: 'Medium', question: 'Skakel 2 500 g om na kg en g.', answer: '2 kg 500 g', checkMode: 'auto', correctAnswer: '2kg500g', correctAnswers: ['2kg500g', '2 kg 500 g', '2kg 500g'], explanation: '2 500 g = 2 000 g + 500 g = 2 kg 500 g.' },
        { difficulty: 'Medium', question: 'Skakel 3 750 g om na kg en g.', answer: '3 kg 750 g', checkMode: 'auto', correctAnswer: '3kg750g', correctAnswers: ['3kg750g', '3 kg 750 g', '3kg 750g'], explanation: '3 750 g = 3 000 g + 750 g = 3 kg 750 g.' },
        { difficulty: 'Medium', question: 'Skakel 5 250 g om na kg en g.', answer: '5 kg 250 g', checkMode: 'auto', correctAnswer: '5kg250g', correctAnswers: ['5kg250g', '5 kg 250 g', '5kg 250g'], explanation: '5 250 g = 5 000 g + 250 g = 5 kg 250 g.' },
        { difficulty: 'Medium', question: 'Skakel 1 200 g om na kg en g.', answer: '1 kg 200 g', checkMode: 'auto', correctAnswer: '1kg200g', correctAnswers: ['1kg200g', '1 kg 200 g', '1kg 200g'], explanation: '1 200 g = 1 000 g + 200 g = 1 kg 200 g.' },
        { difficulty: 'Hard', question: 'Skakel 6 080 g om na kg en g.', answer: '6 kg 80 g', checkMode: 'auto', correctAnswer: '6kg80g', correctAnswers: ['6kg80g', '6 kg 80 g', '6kg 80g'], explanation: '6 080 g = 6 000 g + 80 g = 6 kg 80 g.' },
        { difficulty: 'Easy', question: 'Wat is swaarder: 900 g of 1 kg?', answer: '1 kg', checkMode: 'auto', correctAnswer: '1kg', correctAnswers: ['1kg', '1 kg'], explanation: '1 kg = 1 000 g, en 1 000 g is meer as 900 g, dus is 1 kg swaarder.' },
        { difficulty: 'Medium', question: 'Wat is swaarder: 1,2 kg of 1 200 g, of is hulle gelyk?', answer: 'Gelyk', checkMode: 'auto', correctAnswer: 'gelyk', correctAnswers: ['gelyk', 'dieselfde', 'hulle is gelyk'], explanation: '1,2 kg = 1,2 × 1 000 = 1 200 g, dus is 1,2 kg en 1 200 g presies gelyk.' },
        { difficulty: 'Medium', question: 'Wat is swaarder: 2,05 kg of 2 500 g?', answer: '2 500 g', checkMode: 'auto', correctAnswer: '2500g', correctAnswers: ['2500g', '2500 g', '2 500g', '2 500 g'], explanation: '2,05 kg = 2 050 g. Aangesien 2 500 g > 2 050 g, is 2 500 g swaarder.' },
        { difficulty: 'Medium', question: 'Rangskik hierdie massas van ligste na swaarste: 1 kg, 850 g, 1 200 g.', answer: '850 g, 1 kg, 1 200 g', checkMode: 'auto', correctAnswer: '850g, 1kg, 1200g', correctAnswers: ['850g, 1kg, 1200g', '850 g, 1 kg, 1 200 g', '850g,1kg,1200g'], explanation: 'Skakel om na gram: 1 kg = 1 000 g. Dus is die massas 850 g, 1 000 g, 1 200 g — reeds in volgorde van ligste na swaarste.' },
        { difficulty: 'Hard', question: 'Rangskik hierdie massas van swaarste na ligste: 3,2 kg, 2 900 g, 3 kg.', answer: '3,2 kg, 3 kg, 2 900 g', checkMode: 'auto', correctAnswer: '3.2kg, 3kg, 2900g', correctAnswers: ['3.2kg, 3kg, 2900g', '3.2 kg, 3 kg, 2 900 g', '3.2kg,3kg,2900g', '3,2kg, 3kg, 2900g', '3,2 kg, 3 kg, 2 900 g', '3,2kg,3kg,2900g'], explanation: 'Skakel om na gram: 3,2 kg = 3 200 g, 3 kg = 3 000 g, 2 900 g bly dieselfde. Van swaarste na ligste: 3 200 g, 3 000 g, 2 900 g.' },
        { difficulty: 'Easy', question: 'ʼn Skaal gaan van 0 tot 1 000 g. Die wyser wys presies halfpad. Wat is die massa?', answer: '500 g', checkMode: 'auto', correctAnswer: '500g', correctAnswers: ['500g', '500', '500 g'], explanation: 'Halfpad tussen 0 en 1 000 is 1 000 ÷ 2 = 500 g.' },
        { difficulty: 'Easy', question: 'ʼn Skaal gaan van 0 tot 300 g met 3 gelyke intervalle. Wat is die waarde van elke interval?', answer: '100 g', checkMode: 'auto', correctAnswer: '100g', correctAnswers: ['100g', '100', '100 g'], explanation: '300 ÷ 3 = 100 g per interval.' },
        { difficulty: 'Medium', question: 'ʼn Skaal gaan van 0 tot 500 g met 5 gelyke intervalle tussen elke 100 g-merk. Wat is die waarde van elke klein interval?', answer: '20 g', checkMode: 'auto', correctAnswer: '20g', correctAnswers: ['20g', '20', '20 g'], explanation: 'Elke 100 g-afdeling word in 5 gelyke intervalle verdeel. 100 ÷ 5 = 20 g per interval.' },
        { difficulty: 'Medium', question: 'ʼn Skaal gaan van 0 tot 500 g met 5 gelyke intervalle tussen elke 100 g-merk. As die wyser by die tweede interval na 200 g wys, wat is die massa?', answer: '240 g', checkMode: 'auto', correctAnswer: '240g', correctAnswers: ['240g', '240', '240 g'], explanation: 'Elke interval is 20 g werd. Begin by 200 g en tel 2 intervalle: 200 + 20 + 20 = 240 g.' },
        { difficulty: 'Medium', question: 'ʼn Skaal gaan van 0 tot 500 g met 5 gelyke intervalle tussen elke 100 g-merk. As die wyser presies halfpad tussen 300 g en 400 g wys, wat is die massa?', answer: '350 g', checkMode: 'auto', correctAnswer: '350g', correctAnswers: ['350g', '350', '350 g'], explanation: 'Die gaping tussen 300 en 400 is 100 g. Halfpad = 100 ÷ 2 = 50 g na 300. 300 + 50 = 350 g.' },
        { difficulty: 'Medium', question: 'ʼn Skaal gaan van 0 tot 1 000 g met 10 gelyke intervalle. Wat is die waarde van elke klein interval?', answer: '100 g', checkMode: 'auto', correctAnswer: '100g', correctAnswers: ['100g', '100', '100 g'], explanation: '1 000 ÷ 10 = 100 g per interval.' },
        { difficulty: 'Medium', question: 'ʼn Skaal gaan van 0 tot 200 g met 4 gelyke intervalle. Wat is die waarde van elke klein interval?', answer: '50 g', checkMode: 'auto', correctAnswer: '50g', correctAnswers: ['50g', '50', '50 g'], explanation: '200 ÷ 4 = 50 g per interval.' },
        { difficulty: 'Hard', question: 'ʼn Skaal gaan van 0 tot 1 000 g met intervalle van 20 g. As die wyser by die 3de interval na 600 g wys, wat is die massa?', answer: '660 g', checkMode: 'auto', correctAnswer: '660g', correctAnswers: ['660g', '660', '660 g'], explanation: 'Elke interval is 20 g. Begin by 600 g en tel 3 intervalle: 600 + 20 + 20 + 20 = 660 g.' },
        { difficulty: 'Hard', question: 'ʼn Balansskaal het ʼn sak meel aan een kant. Om dit te balanseer, word twee 500 g-gewigte en een 250 g-gewig aan die ander kant geplaas. Wat is die massa van die meel?', answer: '1 250 g', checkMode: 'auto', correctAnswer: '1250g', correctAnswers: ['1250g', '1250', '1250 g', '1 250g', '1 250 g'], explanation: 'ʼn Balansskaal balanseer wanneer albei kante gelyke massa het. Tel die gewigte op: 500 g + 500 g + 250 g = 1 250 g, dus het die meel ʼn massa van 1 250 g.' },
        { difficulty: 'Hard', question: 'Skakel die massa van die meel in die vorige vraag (1 250 g) om na kilogram.', answer: '1,25 kg', checkMode: 'auto', correctAnswer: '1.25kg', correctAnswers: ['1.25kg', '1.25', '1.25 kg', '1,25kg', '1,25', '1,25 kg'], explanation: 'Deel deur 1 000: 1 250 ÷ 1 000 = 1,25 kg.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan met selfvertroue omskakel, vergelyk en massaskale lees.' },
        { minScore: 19, message: 'Goeie werk! Gaan die vrae wat jy verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan weer deur hoe om skaalintervalle te lees en massas te vergelyk.' },
        { minScore: 0, message: 'Hou aan — gaan die studiegids weer deur en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 — REALISTIESE MASSAS SKAT EN WOORDPROBLEME (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Skat en Woordprobleme',
      questions: [
        { difficulty: 'Easy', question: 'Watter is die meer realistiese skatting vir die massa van ʼn appel: 150 g of 150 kg?', answer: '150 g', checkMode: 'auto', correctAnswer: '150g', correctAnswers: ['150g', '150 g'], explanation: 'ʼn Appel is ʼn ligte voorwerp wat jy maklik in een hand kan hou — ongeveer 150 g. 150 kg sou so swaar wees soos twee volwassenes.' },
        { difficulty: 'Easy', question: 'Watter is die meer realistiese skatting vir die massa van ʼn Graad 4-leerder: 30 kg of 30 g?', answer: '30 kg', checkMode: 'auto', correctAnswer: '30kg', correctAnswers: ['30kg', '30 kg'], explanation: 'ʼn Graad 4-leerder het ʼn redelik groot massa, gemeet in kilogram — ongeveer 30 kg. 30 g sou ligter wees as ʼn snytjie brood.' },
        { difficulty: 'Easy', question: 'Watter is die meer realistiese skatting vir die massa van ʼn brood: 700 g of 7 kg?', answer: '700 g', checkMode: 'auto', correctAnswer: '700g', correctAnswers: ['700g', '700 g'], explanation: 'ʼn Brood het ʼn matige massa — ongeveer 700 g. 7 kg sou so swaar wees soos ʼn groot sak aartappels.' },
        { difficulty: 'Easy', question: 'Watter is die meer realistiese skatting vir die massa van ʼn skooltas vol boeke: 4 kg of 4 g?', answer: '4 kg', checkMode: 'auto', correctAnswer: '4kg', correctAnswers: ['4kg', '4 kg'], explanation: 'ʼn Volgepakte skooltas is redelik swaar — ongeveer 4 kg. 4 g sou ligter wees as vier skuifspelde.' },
        { difficulty: 'Medium', question: 'Watter is die meer realistiese skatting vir die massa van ʼn sak suiker: 1 kg of 100 g?', answer: '1 kg', checkMode: 'auto', correctAnswer: '1kg', correctAnswers: ['1kg', '1 kg'], explanation: 'ʼn Standaard sak suiker het ʼn massa van presies 1 kg (1 000 g). 100 g sou veels te lig wees.' },
        { difficulty: 'Medium', question: 'Watter is die meer realistiese skatting vir die massa van ʼn skuifspeld: 1 g of 1 kg?', answer: '1 g', checkMode: 'auto', correctAnswer: '1g', correctAnswers: ['1g', '1 g'], explanation: 'ʼn Skuifspeld is uiters lig — ongeveer 1 g. 1 kg sou so swaar wees soos ʼn sak suiker.' },
        { difficulty: 'Medium', question: 'Skat die massa van ʼn sak aartappels. Kies die mees realistiese opsie: 3 kg, 3 g, of 300 kg.', answer: '3 kg', checkMode: 'auto', correctAnswer: '3kg', correctAnswers: ['3kg', '3 kg'], explanation: 'ʼn Sak aartappels is ʼn redelik swaar kruideniersware-item — ongeveer 3 kg is realisties.' },
        { difficulty: 'Medium', question: 'Lindiwe skat ʼn waatlemoen het ʼn massa van ongeveer 4 kg. Is dit ʼn realistiese skatting? Antwoord ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'ʼn Waatlemoen is ʼn groot, swaar vrug — 4 kg is ʼn realistiese massa daarvoor.' },
        { difficulty: 'Medium', question: 'Sipho skat sy penkoker het ʼn massa van ongeveer 2 kg. Is dit ʼn realistiese skatting? Antwoord ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'ʼn Penkoker het gewoonlik ʼn massa van ongeveer 200–300 g. 2 kg sou veels te swaar wees — dit is nader aan twee sakke suiker.' },
        { difficulty: 'Easy', question: 'ʼn Sak appels het ʼn massa van 1 200 g. ʼn Sak pere het ʼn massa van 800 g. Wat is die totale massa van albei sakke?', answer: '2 000 g of 2 kg', checkMode: 'auto', correctAnswer: '2000g', correctAnswers: ['2000g', '2000', '2000 g', '2 000g', '2 000 g', '2kg', '2 kg'], explanation: 'Tel die massas op: 1 200 g + 800 g = 2 000 g = 2 kg.' },
        { difficulty: 'Easy', question: 'ʼn Resep gebruik 300 g meel. As Naledi die resep 4 keer maak, hoeveel meel gebruik sy altesaam?', answer: '1 200 g of 1 kg 200 g', checkMode: 'auto', correctAnswer: '1200g', correctAnswers: ['1200g', '1200', '1200 g', '1 200g', '1 200 g', '1kg200g', '1 kg 200 g'], explanation: 'Vermenigvuldig: 300 g × 4 = 1 200 g = 1 kg 200 g.' },
        { difficulty: 'Medium', question: 'ʼn Resep benodig 750 g meel. Lerato het 2 kg meel. Hoeveel meel sal sy oorhê na die bak?', answer: '1 250 g of 1 kg 250 g', checkMode: 'auto', correctAnswer: '1250g', correctAnswers: ['1250g', '1250', '1250 g', '1 250g', '1 250 g', '1kg250g', '1 kg 250 g'], explanation: 'Skakel 2 kg om na gram: 2 × 1 000 = 2 000 g. Trek af: 2 000 g − 750 g = 1 250 g = 1 kg 250 g.' },
        { difficulty: 'Medium', question: 'Twee pakkies het massas van 1 500 g en 2 500 g. Wat is hulle totale massa in kilogram?', answer: '4 kg', checkMode: 'auto', correctAnswer: '4kg', correctAnswers: ['4kg', '4', '4 kg', '4000g', '4 000 g'], explanation: 'Tel op: 1 500 g + 2 500 g = 4 000 g = 4 kg.' },
        { difficulty: 'Medium', question: 'ʼn Winkelier het ʼn 5 kg-sak rys. Sy verkoop 1 kg 250 g rys aan ʼn kliënt. Hoeveel rys bly oor?', answer: '3 kg 750 g', checkMode: 'auto', correctAnswer: '3kg750g', correctAnswers: ['3kg750g', '3750g', '3750', '3 kg 750 g', '3kg 750g'], explanation: 'Skakel om: 5 kg = 5 000 g. Trek af: 5 000 g − 1 250 g = 3 750 g = 3 kg 750 g.' },
        { difficulty: 'Medium', question: 'ʼn Boks appels het ʼn massa van 10 kg. ʼn Kleiner boks lemoene het ʼn massa van 2 kg 500 g. Wat is die verskil in massa tussen die twee bokse?', answer: '7 kg 500 g', checkMode: 'auto', correctAnswer: '7kg500g', correctAnswers: ['7kg500g', '7500g', '7500', '7 kg 500 g', '7kg 500g'], explanation: 'Skakel om: 10 kg = 10 000 g en 2 kg 500 g = 2 500 g. Trek af: 10 000 g − 2 500 g = 7 500 g = 7 kg 500 g.' },
        { difficulty: 'Medium', question: 'Drie klein sakke het massas van 500 g, 750 g en 250 g. Wat is hulle totale massa?', answer: '1 500 g of 1,5 kg', checkMode: 'auto', correctAnswer: '1500g', correctAnswers: ['1500g', '1500', '1500 g', '1 500g', '1 500 g', '1.5kg', '1.5 kg', '1,5kg', '1,5 kg'], explanation: 'Tel op: 500 g + 750 g + 250 g = 1 500 g = 1,5 kg.' },
        { difficulty: 'Hard', question: 'ʼn Klaskamer het 25 leerders met ʼn gemiddelde massa van 30 kg elk. Wat is die totale massa van al die leerders?', answer: '750 kg', checkMode: 'auto', correctAnswer: '750kg', correctAnswers: ['750kg', '750', '750 kg'], explanation: 'Vermenigvuldig: 25 × 30 kg = 750 kg.' },
        { difficulty: 'Hard', question: 'Twee sakke suiker het elk ʼn massa van 1 kg. Wat is hulle gesamentlike massa in gram?', answer: '2 000 g', checkMode: 'auto', correctAnswer: '2000g', correctAnswers: ['2000g', '2000', '2000 g', '2 000g', '2 000 g'], explanation: '1 kg + 1 kg = 2 kg = 2 × 1 000 g = 2 000 g.' },
        { difficulty: 'Hard', question: 'ʼn Bakker gebruik 1 kg 750 g meel vir brood en 1 kg 500 g meel vir muffins. Wat is die totale massa meel wat gebruik is?', answer: '3 kg 250 g', checkMode: 'auto', correctAnswer: '3kg250g', correctAnswers: ['3kg250g', '3250g', '3250', '3.25kg', '3.25', '3,25kg', '3,25', '3 kg 250 g', '3kg 250g'], explanation: 'Tel op: 1 750 g + 1 500 g = 3 250 g = 3 kg 250 g.' },
        { difficulty: 'Hard', question: 'Die bakker in die vorige vraag het met 5 kg meel begin. Hoeveel meel bly oor nadat 3 kg 250 g gebruik is?', answer: '1 kg 750 g', checkMode: 'auto', correctAnswer: '1kg750g', correctAnswers: ['1kg750g', '1750g', '1750', '1.75kg', '1.75', '1,75kg', '1,75', '1 kg 750 g', '1kg 750g'], explanation: 'Skakel om: 5 kg = 5 000 g. Trek af: 5 000 g − 3 250 g = 1 750 g = 1 kg 750 g.' },
        { difficulty: 'Medium', question: 'ʼn Vrugtemandjie het 6 appels, elk met ʼn massa van ongeveer 150 g. Skat die totale massa van die appels.', answer: '900 g', checkMode: 'auto', correctAnswer: '900g', correctAnswers: ['900g', '900', '900 g'], explanation: 'Vermenigvuldig: 6 × 150 g = 900 g.' },
        { difficulty: 'Medium', question: 'ʼn Groenteboks het ʼn massa van 6 kg. As 2 kg 400 g groente verwyder word, watter massa bly oor?', answer: '3 kg 600 g', checkMode: 'auto', correctAnswer: '3kg600g', correctAnswers: ['3kg600g', '3600g', '3600', '3 kg 600 g', '3kg 600g'], explanation: 'Skakel om: 6 kg = 6 000 g en 2 kg 400 g = 2 400 g. Trek af: 6 000 g − 2 400 g = 3 600 g = 3 kg 600 g.' },
        { difficulty: 'Hard', question: 'ʼn Ma het ʼn massa van 3 kg 500 g meer as haar kleuter. As die kleuter ʼn massa van 12 kg 800 g het, wat is die totale massa van beide die ma en die kleuter saam? (Wenk: vind eers die ma se massa.)', answer: '29 kg 100 g', checkMode: 'auto', correctAnswer: '29kg100g', correctAnswers: ['29kg100g', '29100g', '29100', '29 kg 100 g', '29kg 100g'], explanation: 'Ma se massa = 12 kg 800 g + 3 kg 500 g = 16 kg 300 g. Totaal = 16 kg 300 g + 12 kg 800 g = 29 kg 100 g.' },
        { difficulty: 'Hard', question: 'ʼn Afleweringsvoertuig dra 8 bokse, elk met ʼn massa van 500 g. Wat is die totale massa wat die voertuig dra, in kilogram?', answer: '4 kg', checkMode: 'auto', correctAnswer: '4kg', correctAnswers: ['4kg', '4', '4 kg'], explanation: 'Vermenigvuldig: 8 × 500 g = 4 000 g = 4 kg.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom ʼn badkamerskaal gebruik word om ʼn persoon se massa te meet in plaas van ʼn kombuisskaal.', answer: 'ʼn Kombuisskaal is ontwerp vir klein, ligte items soos kosbestanddele en meet gewoonlik net tot ʼn paar kilogram. ʼn Badkamerskaal is ontwerp om baie swaarder massas te meet, soos ʼn persoon se liggaam, wat tientalle kilogram kan wees — veels meer as wat ʼn kombuisskaal kan hanteer.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Fantasties! Jy kan realistiese massas skat en woordprobleme oor massa met selfvertroue oplos.' },
        { minScore: 19, message: 'Goeie werk! Gaan die vrae wat jy verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan weer deur die alledaagse verwysingspunte en die stappe vir woordprobleme.' },
        { minScore: 0, message: 'Hou aan — gaan die studiegids weer deur en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 4 — VEELSTAP-, GEKOMBINEERDE EN SELFNASIEN-PROBLEME (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Veelstap- en Gekombineerde Probleme',
      questions: [
        { difficulty: 'Hard', question: 'Drie pakkies het massas van 1 kg 250 g, 900 g, en 1 kg 600 g. Wat is die totale massa van al drie pakkies in gram?', answer: '3 750 g', checkMode: 'auto', correctAnswer: '3750g', correctAnswers: ['3750g', '3750', '3750 g', '3 750g', '3 750 g'], explanation: 'Skakel alles om na gram: 1 250 g + 900 g + 1 600 g = 3 750 g.' },
        { difficulty: 'Hard', question: 'Skakel die totale massa van die drie pakkies in die vorige vraag (3 750 g) om na kilogram.', answer: '3,75 kg', checkMode: 'auto', correctAnswer: '3.75kg', correctAnswers: ['3.75kg', '3.75', '3.75 kg', '3,75kg', '3,75', '3,75 kg'], explanation: 'Deel deur 1 000: 3 750 ÷ 1 000 = 3,75 kg.' },
        { difficulty: 'Hard', question: 'Is die totale massa van die drie pakkies (3,75 kg) meer of minder as 4 kg? Verduidelik jou antwoord.', answer: 'Minder as 4 kg. Aangesien 3,75 kg < 4 kg, is die totale massa minder as 4 kg.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Meel kos R15 per kg. Wat is die koste van 3,25 kg meel? Wys jou berekening.', answer: 'R15 × 3,25 = R48,75. Die totale koste is R48,75.', checkMode: 'auto', correctAnswer: '48.75', correctAnswers: ['48.75', 'R48.75', '48.75rand', 'R48.75rand', '48,75', 'R48,75', '48,75rand', 'R48,75rand'], explanation: 'Koste = R15 × 3,25 = R48,75.' },
        { difficulty: 'Hard', question: 'Meel kos R20 per kg. Wat is die koste van 2,5 kg meel?', answer: 'R50', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', 'R50'], explanation: 'Koste = R20 × 2,5 = R50.' },
        { difficulty: 'Hard', question: 'ʼn Bakker het 4 sakke meel, elk met ʼn massa van 250 g. Wat is die totale massa meel in gram?', answer: '1 000 g of 1 kg', checkMode: 'auto', correctAnswer: '1000g', correctAnswers: ['1000g', '1000', '1000 g', '1 000g', '1 000 g', '1kg', '1 kg'], explanation: 'Vermenigvuldig: 4 × 250 g = 1 000 g = 1 kg.' },
        { difficulty: 'Hard', question: 'ʼn Winkel het 6 sakke rys, elk met ʼn massa van 500 g. Wat is die totale massa rys in kilogram?', answer: '3 kg', checkMode: 'auto', correctAnswer: '3kg', correctAnswers: ['3kg', '3', '3 kg'], explanation: 'Vermenigvuldig: 6 × 500 g = 3 000 g = 3 kg.' },
        { difficulty: 'Hard', question: 'ʼn Resep gebruik 300 g meel per lot. As ʼn bakker 4 lotte maak, hoeveel meel word altesaam gebruik? Gee jou antwoord in kg en g.', answer: '1 kg 200 g', checkMode: 'auto', correctAnswer: '1kg200g', correctAnswers: ['1kg200g', '1200g', '1200', '1 kg 200 g', '1kg 200g'], explanation: 'Vermenigvuldig: 300 g × 4 = 1 200 g = 1 kg 200 g.' },
        { difficulty: 'Hard', question: 'ʼn Groentestalletjie verkoop 1 kg 750 g tamaties en 1 kg 500 g uie. Wat is die totale massa wat verkoop is, en is dit meer as 3 kg?', answer: '3 kg 250 g, wat meer is as 3 kg. 1 750 g + 1 500 g = 3 250 g = 3 kg 250 g, en 3 kg 250 g > 3 kg.', checkMode: 'auto', correctAnswer: '3kg250g', correctAnswers: ['3kg250g', '3250g', '3250', '3 kg 250 g', '3kg 250g'], explanation: 'Tel op: 1 750 g + 1 500 g = 3 250 g = 3 kg 250 g. Aangesien 3 250 g > 3 000 g, is die totaal meer as 3 kg.' },
        { difficulty: 'Hard', question: 'ʼn Boks het ʼn massa van 10 kg. Nadat sekere blikkies verwyder is, het dit ʼn massa van 6 kg 400 g. Watter massa blikkies is verwyder?', answer: '3 kg 600 g', checkMode: 'auto', correctAnswer: '3kg600g', correctAnswers: ['3kg600g', '3600g', '3600', '3 kg 600 g', '3kg 600g'], explanation: 'Skakel om: 10 kg = 10 000 g en 6 kg 400 g = 6 400 g. Trek af: 10 000 g − 6 400 g = 3 600 g = 3 kg 600 g.' },
        { difficulty: 'Hard', question: 'ʼn Vragmotor dra 3 kratte met massas van 12 kg 500 g, 9 kg 750 g en 15 kg 250 g. Wat is die totale massa van al drie kratte?', answer: '37 kg 500 g', checkMode: 'auto', correctAnswer: '37kg500g', correctAnswers: ['37kg500g', '37500g', '37500', '37 kg 500 g', '37kg 500g'], explanation: 'Skakel alles om na gram: 12 500 g + 9 750 g + 15 250 g = 37 500 g = 37 kg 500 g.' },
        { difficulty: 'Hard', question: 'ʼn Boer pak 5 kratte groente, elk met ʼn massa van 8 kg 400 g. Wat is die totale massa van al 5 kratte?', answer: '42 kg', checkMode: 'auto', correctAnswer: '42kg', correctAnswers: ['42kg', '42', '42 kg', '42000g', '42 000 g'], explanation: 'Vermenigvuldig: 8 kg 400 g = 8 400 g. 8 400 g × 5 = 42 000 g = 42 kg.' },
        { difficulty: 'Hard', question: 'Twee vriende, Kagiso en Zanele, dra saam ʼn totale massa van 9 kg. As Kagiso 3 kg 750 g dra, hoeveel dra Zanele?', answer: '5 kg 250 g', checkMode: 'auto', correctAnswer: '5kg250g', correctAnswers: ['5kg250g', '5250g', '5250', '5 kg 250 g', '5kg 250g'], explanation: 'Skakel om: 9 kg = 9 000 g en 3 kg 750 g = 3 750 g. Trek af: 9 000 g − 3 750 g = 5 250 g = 5 kg 250 g.' },
        { difficulty: 'Hard', question: 'ʼn Baba het ʼn massa van 3 kg 500 g by geboorte. Na 6 maande het die baba 4 kg 300 g bygekom. Wat is die baba se massa nou?', answer: '7 kg 800 g', checkMode: 'auto', correctAnswer: '7kg800g', correctAnswers: ['7kg800g', '7800g', '7800', '7 kg 800 g', '7kg 800g'], explanation: 'Tel op: 3 kg 500 g + 4 kg 300 g = 3 500 g + 4 300 g = 7 800 g = 7 kg 800 g.' },
        { difficulty: 'Hard', question: 'ʼn Skool se snoepiewinkel het 20 kg appels. As elke sak wat verkoop word 500 g bevat, hoeveel sakke kan gevul word?', answer: '40 sakke', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40 sakke'], explanation: 'Skakel om: 20 kg = 20 000 g. Deel: 20 000 g ÷ 500 g = 40 sakke.' },
        { difficulty: 'Hard', question: 'ʼn Winkel het 15 kg rys om in sakke van 750 g elk te verpak. Hoeveel volle sakke kan gemaak word?', answer: '20 sakke', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 sakke'], explanation: 'Skakel om: 15 kg = 15 000 g. Deel: 15 000 g ÷ 750 g = 20 sakke.' },
        { difficulty: 'Hard', question: 'Verduidelik die stappe wat jy sou volg om hierdie probleem op te los: "ʼn Boks het ʼn massa van 4 kg 250 g. ʼn Sak binne-in dit het ʼn massa van 1 kg 800 g. Wat is die massa van die boks sonder die sak?" Jy hoef nie die finale antwoord te bereken nie — beskryf net jou metode.', answer: 'Skakel eers albei massas om na dieselfde eenheid (gram): 4 kg 250 g = 4 250 g en 1 kg 800 g = 1 800 g. Aangesien die vraag vra wat oorbly nadat die sak verwyder is, trek af: 4 250 g − 1 800 g. Skakel laastens die antwoord terug om na kg en g indien nodig.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Boks het ʼn massa van 4 kg 250 g. ʼn Sak binne-in dit het ʼn massa van 1 kg 800 g. Wat is die massa van die boks sonder die sak?', answer: '2 kg 450 g', checkMode: 'auto', correctAnswer: '2kg450g', correctAnswers: ['2kg450g', '2450g', '2450', '2 kg 450 g', '2kg 450g'], explanation: 'Skakel om: 4 kg 250 g = 4 250 g en 1 kg 800 g = 1 800 g. Trek af: 4 250 g − 1 800 g = 2 450 g = 2 kg 450 g.' },
        { difficulty: 'Hard', question: 'Thabo sê 2,5 kg is dieselfde as 2 kg 500 g. Is hy korrek? Verduidelik jou redenasie.', answer: 'Ja, Thabo is korrek. 2,5 kg beteken 2 volle kilogram plus 0,5 van ʼn kilogram. Aangesien 0,5 kg = 0,5 × 1 000 g = 500 g, is 2,5 kg = 2 kg 500 g presies.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Resep vir een koek benodig 450 g meel. Zanele wil 3 koeke bak maar het net 1 kg meel. Het sy genoeg meel? Verduidelik jou redenasie.', answer: 'Nee, sy het nie genoeg nie. 3 koeke benodig 450 g × 3 = 1 350 g meel, maar sy het net 1 kg = 1 000 g. Sy kort 350 g.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Resep vir een koek benodig 450 g meel. Hoeveel meel, in gram, word benodig vir 3 koeke?', answer: '1 350 g', checkMode: 'auto', correctAnswer: '1350g', correctAnswers: ['1350g', '1350', '1350 g', '1 350g', '1 350 g'], explanation: 'Vermenigvuldig: 450 g × 3 = 1 350 g.' },
        { difficulty: 'Hard', question: 'ʼn Pakkie weeg 2 kg 300 g. Posgeld kos R10 vir elke volle of gedeeltelike kilogram. Hoeveel sal posgeld vir hierdie pakkie kos?', answer: 'R30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', 'R30'], explanation: '2 kg 300 g rond op na 3 volle kilogram (aangesien enige deel van ʼn kilogram as ʼn volle kilogram tel). Koste = 3 × R10 = R30.' },
        { difficulty: 'Hard', question: 'ʼn Pakkie van 12 identiese sjokoladelekkers het ʼn totale massa van 600 g. Wat is die massa van een sjokoladelekker?', answer: '50 g', checkMode: 'auto', correctAnswer: '50g', correctAnswers: ['50g', '50', '50 g'], explanation: 'Deel: 600 g ÷ 12 = 50 g per sjokoladelekker.' },
        { difficulty: 'Hard', question: 'ʼn Pakkie van 8 identiese appels het ʼn totale massa van 1 200 g. Wat is die massa van een appel?', answer: '150 g', checkMode: 'auto', correctAnswer: '150g', correctAnswers: ['150g', '150', '150 g'], explanation: 'Deel: 1 200 g ÷ 8 = 150 g per appel.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom dit belangrik is om twee massas na dieselfde eenheid om te skakel voordat jy hulle optel of aftrek.', answer: 'As twee massas in verskillende eenhede is (soos kg en g), gee dit ʼn betekenislose resultaat om die getalle direk op te tel of af te trek, omdat die syfers nie dieselfde grootte eenheid verteenwoordig nie. Deur albei massas eers na dieselfde eenheid om te skakel, verseker jy dat die berekening soortgelyke dinge vergelyk, wat ʼn korrekte antwoord gee.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het veelstap- en gekombineerde massaprobleme baasgeraak.' },
        { minScore: 19, message: 'Goeie werk! Gaan die vrae wat jy verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die veelstap-voorbeelde weer deur.' },
        { minScore: 0, message: 'Hou aan — gaan die studiegids weer deur en probeer hierdie stel weer.' },
      ],
    },
  ],
}
