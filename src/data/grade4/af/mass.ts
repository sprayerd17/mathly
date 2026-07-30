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
          question: 'ʼn Skaal gaan van 0 tot 500 g met 5 klein intervalle tussen elke 100 g-merk. Wat is elke klein interval werd?',
          steps: [
            'Elke genommerde afdeling dek <strong style="color:#1e40af;">100 g</strong> en word in <strong style="color:#1e40af;">5</strong> klein intervalle verdeel.',
            'Deel die afdeling deur die aantal intervalle: <strong style="color:#1e40af;">100</strong> ÷ <strong style="color:#1e40af;">5</strong> = <strong style="color:#ea580c;">20</strong>',
          ],
          answer: 'Elke klein interval is 20 g werd.',
        },
        {
          question: 'ʼn Skaal se wyser wys presies halfpad tussen 300 g en 400 g. Wat is die massa?',
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
          question: 'ʼn Sak appels weeg 1 kg 500 g en ʼn sak lemoene weeg 750 g. Wat is die totale massa?',
          steps: [
            'Sleutelwoord: <strong style="color:#ea580c;">totale massa</strong> — dit beteken <strong>optelling</strong>.',
            'Skakel om na dieselfde eenheid: <strong style="color:#dc2626;">1 kg 500 g</strong> = <strong style="color:#1e40af;">1 500 g</strong>.',
            'Tel op: <strong style="color:#1e40af;">1 500 g</strong> + <strong style="color:#1e40af;">750 g</strong> = <strong style="color:#1e40af;">2 250 g</strong>.',
            'Skakel terug om: 2 250 g = <strong style="color:#dc2626;">2 kg 250 g</strong>.',
          ],
          answer: 'Die totale massa is 2 kg 250 g.',
        },
        {
          question: 'ʼn Boks weeg 5 kg. Nadat sekere boeke verwyder is, weeg dit 2 kg 300 g. Hoeveel het die boeke geweeg?',
          steps: [
            'Sleutelwoord: <strong style="color:#ea580c;">verwyder</strong> — dit beteken <strong>aftrekking</strong>.',
            'Skakel om na dieselfde eenheid: <strong style="color:#dc2626;">5 kg</strong> = <strong style="color:#1e40af;">5 000 g</strong> en <strong style="color:#dc2626;">2 kg 300 g</strong> = <strong style="color:#1e40af;">2 300 g</strong>.',
            'Trek af: <strong style="color:#1e40af;">5 000 g</strong> − <strong style="color:#1e40af;">2 300 g</strong> = <strong style="color:#1e40af;">2 700 g</strong>.',
            'Skakel om: 2 700 g = <strong style="color:#dc2626;">2 kg 700 g</strong>.',
          ],
          answer: 'Die boeke het 2 kg 700 g geweeg.',
        },
        {
          question: 'ʼn Resep benodig 750 g meel. Lerato het 2 kg meel. Hoeveel meel sal sy oorhê na die bak?',
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
    // STEL 1 (20 vrae) — brood / suiker / skuifspeld / skooltas konteks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1: Eenhede kies & kern-omskakelingsfeit (0-3, Maklik)
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die massa van ʼn lekkergoedjie te meet — gram of kilogram?', checkMode: 'auto', options: ['Gram', 'Kilogram', 'Liter', 'Millimeter'], correctIndex: 0, explanation: 'ʼn Lekkergoedjie is ʼn baie ligte voorwerp. Gram (g) word vir ligte voorwerpe gebruik omdat die massa heeltemal te klein is om betekenisvol in kilogram te meet. Liter meet vloeistofvolume en millimeter meet lengte — nie een van die twee meet massa nie.' },
        { difficulty: 'Easy', question: 'Skakel 1 kg om na gram.', checkMode: 'auto', options: ['100 g', '1 000 g', '10 000 g', '0,001 g'], correctIndex: 1, explanation: 'Om kg na g om te skakel, vermenigvuldig met 1 000: 1 × 1 000 = 1 000 g. 100 g verwar die omskakelingsfaktor met 100, 10 000 g vermenigvuldig met 10 000 in plaas daarvan, en 0,001 g deel verkeerdelik in plaas van vermenigvuldig.' },
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die massa van ʼn skooltas te meet — gram of kilogram?', checkMode: 'auto', options: ['Gram', 'Kilogram', 'Liter', 'Sentimeter'], correctIndex: 1, explanation: 'ʼn Skooltas is ʼn redelik swaar voorwerp, gewoonlik ongeveer 3–5 kg. Kilogram (kg) word vir swaarder voorwerpe gebruik omdat die aantal gram ongemaklik groot sou wees. Liter meet vloeistofvolume en sentimeter meet lengte — nie een van die twee meet massa nie.' },
        { difficulty: 'Easy', question: 'ʼn Brood het ʼn massa van ongeveer 700 g. Watter stelling verduidelik waarom ons hierdie massa nie net in heel kilogram sou beskryf nie?', checkMode: 'auto', options: ['Kilogram kan slegs vir massas oor 10 kg gebruik word.', '700 g is presies halfpad tussen 0 kg en 1 kg, dus kan dit glad nie afgerond word nie.', '700 g is minder as 1 kg, dus sou afronding na ʼn heel getal kilogram (0 kg of 1 kg) nie akkuraat wees nie — gram laat ons toe om massas kleiner as 1 kg presies te beskryf.', 'ʼn Brood moet altyd op ʼn balansskaal geweeg word, nooit op ʼn kombuisskaal nie.'], correctIndex: 2, explanation: 'ʼn Brood het ʼn massa van ongeveer 700 g, wat minder as 1 kg is. As ons net heel kilogram gebruik, sou die massa afrond na 1 kg of 0 kg, wat nie akkuraat is nie. Gram laat ons toe om massas kleiner as 1 kg presies te beskryf.' },

        // Blok 2: Omskakeling g <-> kg (heelgetal, desimaal & saamgestel) (4-8, Maklik-Medium)
        { difficulty: 'Easy', question: 'Skakel 3 000 g om na kilogram.', checkMode: 'auto', options: ['0,3 kg', '3 kg', '30 kg', '300 kg'], correctIndex: 1, explanation: 'Deel deur 1 000: 3 000 ÷ 1 000 = 3 kg. 30 kg kom van deling deur 100 in plaas van 1 000, 300 kg van deling deur 10, en 0,3 kg van deling deur 10 000.' },
        { difficulty: 'Medium', question: 'Skakel 2,5 kg suiker om na gram.', checkMode: 'auto', options: ['25 g', '250 g', '2 500 g', '25 000 g'], correctIndex: 2, explanation: 'Vermenigvuldig met 1 000: 2,5 × 1 000 = 2 500 g. Die ander opsies vermenigvuldig met 10, 100 of 10 000 in plaas van 1 000.' },
        { difficulty: 'Medium', question: 'ʼn Sak suiker het ʼn massa van 750 g. Skryf hierdie massa in kilogram.', checkMode: 'auto', options: ['0,075 kg', '0,75 kg', '7,5 kg', '75 kg'], correctIndex: 1, explanation: 'Deel deur 1 000: 750 ÷ 1 000 = 0,75 kg. Die ander opsies skuif die desimale punt die verkeerde aantal plekke.' },
        { difficulty: 'Medium', question: 'ʼn Brood het ʼn massa van 1 kg 300 g. Skryf hierdie massa slegs in gram.', checkMode: 'auto', options: ['130 g', '1 300 g', '1 030 g', '13 000 g'], correctIndex: 1, explanation: '1 kg = 1 000 g, dus 1 kg 300 g = 1 000 g + 300 g = 1 300 g. 1 030 g verwissel die syfers van 300, 130 g laat ʼn nul weg, en 13 000 g voeg ʼn ekstra nul by.' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê dat 4 200 g dieselfde is as 4 kg 200 g. Watter stelling is korrek?', checkMode: 'auto', options: ['Die leerder is korrek: 4 200 g = 4 000 g + 200 g, en aangesien 4 000 g = 4 kg, is dit 4 kg 200 g.', 'Die leerder is verkeerd: 4 200 g is eintlik 42 kg.', 'Die leerder is verkeerd: jy kan nie gram in kilogram en gram saam verdeel nie.', 'Die leerder is korrek, maar net omdat 4 200 ʼn ewe getal is.'], correctIndex: 0, explanation: 'Ja, dit is korrek. 4 200 g = 4 000 g + 200 g. Aangesien 4 000 g = 4 kg, is dit 4 kg + 200 g = 4 kg 200 g. 42 kg verwar die omskakelingsfaktor, en massa in kg en g kan altyd saam gekombineer word — die "ewe getal"-redenasie is irrelevant.' },

        // Blok 3: Massa op ʼn skaal lees & vergelyk (9-12, Medium)
        { difficulty: 'Easy', question: 'ʼn Kombuisskaal gaan van 0 tot 300 g met 3 gelyke intervalle. Wat is die waarde van elke interval?', checkMode: 'auto', options: ['50 g', '100 g', '150 g', '300 g'], correctIndex: 1, explanation: '300 ÷ 3 = 100 g per interval. 50 g sou die resultaat wees van deling deur 6, 150 g deur 2, en 300 g vergeet heeltemal om te deel.', diagramSvg: '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg"><circle cx="115" cy="100" r="62" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.2" y1="143.8" x2="79.6" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="71.2" y1="56.2" x2="79.6" y2="64.6" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="50.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100 g</text><line x1="158.8" y1="56.2" x2="150.4" y2="64.6" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="50.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">200 g</text><line x1="158.8" y1="143.8" x2="150.4" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">300 g</text><line x1="115" y1="100" x2="153.2" y2="61.8" stroke="#dc2626" stroke-width="3"/><circle cx="115" cy="100" r="4" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Op dieselfde skaal wys die wyser na die tweede merk vanaf 0. Watter massa toon dit?', checkMode: 'auto', options: ['100 g', '200 g', '300 g', '250 g'], correctIndex: 1, explanation: 'Elke interval is 100 g werd. Die tweede merk vanaf 0 is 0 + 100 + 100 = 200 g. 100 g stop by die eerste merk, 300 g skiet verby na die derde merk, en 250 g is nie ʼn gemerkte interval op hierdie skaal nie.', diagramSvg: '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg"><circle cx="115" cy="100" r="62" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.2" y1="143.8" x2="79.6" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="71.2" y1="56.2" x2="79.6" y2="64.6" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="50.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100 g</text><line x1="158.8" y1="56.2" x2="150.4" y2="64.6" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="50.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">200 g</text><line x1="158.8" y1="143.8" x2="150.4" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">300 g</text><line x1="115" y1="100" x2="153.2" y2="61.8" stroke="#dc2626" stroke-width="3"/><circle cx="115" cy="100" r="4" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Watter een is swaarder: 900 g of 1 kg?', checkMode: 'auto', options: ['900 g', '1 kg', 'Hulle is gelyk', 'Kan nie vergelyk word nie'], correctIndex: 1, explanation: '1 kg = 1 000 g, en 1 000 g is meer as 900 g, dus is 1 kg swaarder. Hulle is nie gelyk nie, en massas in verskillende eenhede kan altyd vergelyk word sodra hulle na dieselfde eenheid omgeskakel is.' },
        { difficulty: 'Medium', question: 'Rangskik hierdie massas van ligste na swaarste: 1 kg, 850 g, 1 200 g.', checkMode: 'auto', options: ['1 kg, 850 g, 1 200 g', '850 g, 1 kg, 1 200 g', '1 200 g, 1 kg, 850 g', '850 g, 1 200 g, 1 kg'], correctIndex: 1, explanation: 'Skakel om na gram: 1 kg = 1 000 g. Die massas is dus 850 g, 1 000 g, 1 200 g — reeds in volgorde van ligste na swaarste: 850 g, 1 kg, 1 200 g. Die ander volgordes begin óf met die verkeerde massa óf lys die massas van swaarste na ligste.' },

        // Blok 4: Realistiese massa skat (13-15, Medium)
        { difficulty: 'Medium', question: 'Watter een is die meer realistiese skatting vir die massa van ʼn snytjie brood: 30 g of 30 kg?', checkMode: 'auto', options: ['30 g', '30 kg', '3 g', '300 g'], correctIndex: 0, explanation: 'ʼn Snytjie brood is ʼn baie ligte voorwerp — ongeveer 30 g. 30 kg sou swaarder wees as ʼn Graad 4-leerder. 3 g sou ligter wees as ʼn skuifspeld, en 300 g sou so swaar wees soos byna ʼn halwe brood.' },
        { difficulty: 'Medium', question: 'ʼn Skooltas vol boeke staan op ʼn tafel. Watter een is die meer realistiese massa daarvoor: 4 kg of 40 g?', checkMode: 'auto', options: ['40 g', '4 kg', '400 g', '40 kg'], correctIndex: 1, explanation: 'ʼn Skooltas vol boeke is redelik swaar — ongeveer 4 kg. 40 g sou ligter wees as ʼn snytjie brood, 400 g is steeds te lig vir ʼn volgepakte tas, en 40 kg sou veel swaarder wees as die leerder wat dit dra.' },
        { difficulty: 'Medium', question: 'Karabo skat dat sy volgepakte pennalesak ʼn massa van ongeveer 3 kg het. Watter stelling oor sy skatting is korrek?', checkMode: 'auto', options: ['Ja, dit is redelik, want die meeste skoolitems het ʼn massa van ongeveer 3 kg.', 'Nee, dit is nie redelik nie — ʼn pennalesak het gewoonlik ʼn massa van ongeveer 30 kg.', 'Ja, dit is redelik, aangesien kilogram altyd vir skoolbenodigdhede gebruik word.', 'Nee, dit is nie redelik nie — ʼn pennalesak het gewoonlik ʼn massa van ongeveer 200-300 g, en 3 kg sou so swaar wees soos drie sakke suiker.'], correctIndex: 3, explanation: 'Nee, dit is nie redelik nie. ʼn Pennalesak het gewoonlik ʼn massa van ongeveer 200-300 g. 3 kg sou so swaar wees soos drie sakke suiker, wat veels te swaar is vir ʼn pennalesak.' },

        // Blok 5: Woordprobleme (16-18, Medium-Hard)
        { difficulty: 'Medium', question: 'ʼn Resep gebruik 300 g meel. As Naledi die resep 4 keer bak, hoeveel meel gebruik sy in totaal?', checkMode: 'auto', options: ['900 g', '1 200 g', '1 500 g', '75 g'], correctIndex: 1, explanation: 'Vermenigvuldig: 300 g × 4 = 1 200 g = 1 kg 200 g. 900 g kom van vermenigvuldiging met 3 in plaas van 4, 1 500 g voeg ʼn ekstra 300 g by, en 75 g deel verkeerdelik in plaas van vermenigvuldig.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Bakker het ʼn sak van 5 kg suiker. Sy gebruik 1 kg 250 g om ʼn bondel koeke te bak. Hoeveel suiker bly oor?', checkMode: 'auto', options: ['3 kg 750 g', '4 kg 250 g', '3 kg 250 g', '6 kg 250 g'], correctIndex: 0, explanation: 'Skakel om: 5 kg = 5 000 g. Trek af: 5 000 g − 1 250 g = 3 750 g = 3 kg 750 g. 4 kg 250 g trek slegs die gram-deel af, 3 kg 250 g trek per ongeluk 1 kg 500 g af, en 6 kg 250 g tel op in plaas van af te trek.' },
        { difficulty: 'Hard', question: 'ʼn Mark-stalletjie pak lekkers in klein sakkies van 60 g elk. As die stalletjie 1 kg 800 g lekkers het, hoeveel volle sakkies kan gepak word?', checkMode: 'auto', options: ['18 sakkies', '30 sakkies', '108 sakkies', '3 sakkies'], correctIndex: 1, explanation: 'Skakel om: 1 kg 800 g = 1 800 g. Deel: 1 800 g ÷ 60 g = 30 sakkies. 18 sakkies deel deur 100 in plaas van 60, 108 sakkies vermenigvuldig in plaas van te deel, en 3 sakkies vergeet om die kilogram eers na gram om te skakel.' },

        // Blok 6: Multi-stap redenasie, regverdiging & foutopsporing (19, Moeilik)
        { difficulty: 'Hard', question: 'Thabo sê dat 2,5 kg dieselfde is as 2 kg 500 g. Watter stelling is korrek?', checkMode: 'auto', options: ['Thabo is verkeerd: 2,5 kg is dieselfde as 2 kg 50 g.', 'Thabo is korrek: 0,5 kg = 0,5 × 1 000 g = 500 g, dus is 2,5 kg = 2 kg 500 g presies.', 'Thabo is verkeerd: desimale kan nie saam met kilogram gebruik word nie.', 'Thabo is verkeerd: 2,5 kg is dieselfde as 2 kg 5 g.'], correctIndex: 1, explanation: 'Ja, Thabo is korrek. 2,5 kg beteken 2 volle kilogram plus 0,5 van ʼn kilogram. Aangesien 0,5 kg = 0,5 × 1 000 g = 500 g, is 2,5 kg = 2 kg 500 g presies. 2 kg 50 g en 2 kg 5 g plaas albei die desimaal verkeerd, en desimale word gereeld saam met kilogram gebruik.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Perfek! Jy het eenhede van massa, omskakelings en woordprobleme onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige vrae wat jy verkeerd gehad het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Hersien die omskakelingsreëls en voorbeelde.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — vrugte / groente / pakkies konteks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1: Eenhede kies & kern-omskakelingsfeit (0-3, Maklik)
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die massa van ʼn druif te meet — gram of kilogram?', checkMode: 'auto', options: ['Gram', 'Kilogram', 'Liter', 'Meter'], correctIndex: 0, explanation: 'ʼn Druif is ʼn baie ligte voorwerp. Gram (g) word vir ligte voorwerpe gebruik, want kilogram sou ʼn ongemaklike klein desimaal gee. Liter meet vloeistofvolume en meter meet lengte — nie een van die twee meet massa nie.' },
        { difficulty: 'Easy', question: 'Skakel 1 000 g om na kilogram.', checkMode: 'auto', options: ['0,1 kg', '1 kg', '10 kg', '100 kg'], correctIndex: 1, explanation: 'Om g na kg om te skakel, deel deur 1 000: 1 000 ÷ 1 000 = 1 kg. 0,1 kg deel deur 10 000, en 10 kg en 100 kg deel deur 100 of 10 in plaas van 1 000.' },
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die massa van ʼn kissie groente te meet — gram of kilogram?', checkMode: 'auto', options: ['Gram', 'Kilogram', 'Liter', 'Milliliter'], correctIndex: 1, explanation: 'ʼn Kissie groente is swaar, dikwels verskeie kilogram. Kilogram (kg) word vir swaarder voorwerpe gebruik sodat die getalle hanteerbaar bly. Liter en milliliter meet vloeistofvolume, nie massa nie.' },
        { difficulty: 'Easy', question: 'ʼn Kissie groente het ʼn massa van baie duisende gram. Watter stelling verduidelik waarom boere dit in kilogram, eerder as gram, weeg?', checkMode: 'auto', options: ['Gram kan slegs vir massas onder 100 g gebruik word.', 'Kilogram is meer akkuraat as gram vir enige meting.', 'Baie duisende gram is ʼn ongerieflik groot getal om mee te werk, dus gee kilogram ʼn kleiner, makliker getal vir swaar voorwerpe soos ʼn vol kissie.', 'Groente moet altyd op ʼn badkamerskaal geweeg word, wat slegs kilogram toon.'], correctIndex: 2, explanation: 'ʼn Kissie groente kan ʼn massa van baie duisende gram hê, wat ʼn ongerieflik groot getal is om mee te werk. Kilogram gee ʼn kleiner, makliker getal vir swaar voorwerpe soos ʼn vol kissie. Gram werk vir enige massa, kilogram is nie inherent "meer akkuraat" nie, en groente kan ook op ʼn kombuisskaal geweeg word.' },

        // Blok 2: Omskakeling g <-> kg (4-8, Maklik-Medium)
        { difficulty: 'Easy', question: 'Skakel 6 kg om na gram.', checkMode: 'auto', options: ['600 g', '6 000 g', '60 000 g', '0,006 g'], correctIndex: 1, explanation: 'Vermenigvuldig met 1 000: 6 × 1 000 = 6 000 g. 600 g vermenigvuldig met 100 in plaas daarvan, 60 000 g vermenigvuldig met 10 000, en 0,006 g deel verkeerdelik.' },
        { difficulty: 'Medium', question: 'ʼn Boks lemoene het ʼn massa van 3,5 kg. Skryf hierdie massa in gram.', checkMode: 'auto', options: ['350 g', '3 500 g', '35 000 g', '3 050 g'], correctIndex: 1, explanation: 'Vermenigvuldig met 1 000: 3,5 × 1 000 = 3 500 g. 350 g vermenigvuldig met 100 in plaas van 1 000, 35 000 g vermenigvuldig met 10 000, en 3 050 g hanteer die desimale punt verkeerd.' },
        { difficulty: 'Medium', question: 'ʼn Bakkie aarbeie het ʼn massa van 250 g. Skryf hierdie massa in kilogram.', checkMode: 'auto', options: ['0,025 kg', '0,25 kg', '2,5 kg', '25 kg'], correctIndex: 1, explanation: 'Deel deur 1 000: 250 ÷ 1 000 = 0,25 kg. Die ander opsies skuif die desimale punt die verkeerde aantal plekke.' },
        { difficulty: 'Medium', question: 'ʼn Pakkie groente het ʼn massa van 2 kg 400 g. Skryf hierdie massa slegs in gram.', checkMode: 'auto', options: ['240 g', '2 040 g', '2 400 g', '24 000 g'], correctIndex: 2, explanation: '2 kg = 2 000 g, dus 2 kg 400 g = 2 000 g + 400 g = 2 400 g. 2 040 g verwissel die syfers van 400, 240 g laat ʼn nul weg, en 24 000 g voeg ʼn ekstra nul by.' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê 0,5 kg en 500 g is nie gelyk nie, want "500 is ʼn veel groter getal as 0,5". Watter stelling is korrek?', checkMode: 'auto', options: ['Die leerder is verkeerd: 0,5 kg = 0,5 × 1 000 g = 500 g, dus is die twee massas presies gelyk — jy kan nie die getalle vergelyk sonder om die eenhede na te gaan nie.', 'Die leerder is reg: 500 g is altyd swaarder as enige desimale getal kilogram.', 'Die leerder is reg: 0,5 kg is gelyk aan 50 g, wat veel minder as 500 g is.', 'Die leerder is verkeerd: 0,5 kg is gelyk aan 5 000 g, wat veel meer as 500 g is.'], correctIndex: 0, explanation: 'Nee, die leerder is nie korrek nie. 0,5 kg = 0,5 × 1 000 g = 500 g, dus verteenwoordig 0,5 kg en 500 g presies dieselfde massa. Om die getalle sonder om die eenhede na te gaan te vergelyk, is misleidend, want kg en g is verskillende groottes eenhede.' },

        // Blok 3: Massa op ʼn skaal lees & vergelyk (9-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Kombuisskaal gaan van 0 tot 500 g met 5 gelyke intervalle tussen elke 100 g-merk. Wat is die waarde van elke klein interval?', checkMode: 'auto', options: ['10 g', '20 g', '50 g', '100 g'], correctIndex: 1, explanation: 'Elke 100 g-afdeling word in 5 gelyke intervalle verdeel. 100 ÷ 5 = 20 g per interval. 10 g deel deur 10 in plaas van 5, 50 g deel deur 2, en 100 g vergeet heeltemal om die afdeling te deel.', diagramSvg: '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg"><circle cx="115" cy="100" r="62" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="63.7" y1="134.8" x2="69.5" y2="130.9" stroke="#9ca3af" stroke-width="1.5"/><line x1="58.1" y1="124.6" x2="64.5" y2="121.8" stroke="#9ca3af" stroke-width="1.5"/><line x1="54.5" y1="113.5" x2="61.3" y2="112.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="53.0" y1="101.9" x2="60.0" y2="101.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="56.7" y1="79.0" x2="63.3" y2="81.4" stroke="#9ca3af" stroke-width="1.5"/><line x1="61.6" y1="68.4" x2="67.7" y2="72.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="68.5" y1="59.0" x2="73.7" y2="63.6" stroke="#9ca3af" stroke-width="1.5"/><line x1="77.0" y1="51.0" x2="81.3" y2="56.5" stroke="#9ca3af" stroke-width="1.5"/><line x1="97.7" y1="40.5" x2="99.7" y2="47.2" stroke="#9ca3af" stroke-width="1.5"/><line x1="109.2" y1="38.3" x2="109.8" y2="45.2" stroke="#9ca3af" stroke-width="1.5"/><line x1="120.8" y1="38.3" x2="120.2" y2="45.2" stroke="#9ca3af" stroke-width="1.5"/><line x1="132.3" y1="40.5" x2="130.3" y2="47.2" stroke="#9ca3af" stroke-width="1.5"/><line x1="153.0" y1="51.0" x2="148.7" y2="56.5" stroke="#9ca3af" stroke-width="1.5"/><line x1="161.5" y1="59.0" x2="156.3" y2="63.6" stroke="#9ca3af" stroke-width="1.5"/><line x1="168.4" y1="68.4" x2="162.3" y2="72.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="173.3" y1="79.0" x2="166.7" y2="81.4" stroke="#9ca3af" stroke-width="1.5"/><line x1="177.0" y1="101.9" x2="170.0" y2="101.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="175.5" y1="113.5" x2="168.7" y2="112.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="171.9" y1="124.6" x2="165.5" y2="121.8" stroke="#9ca3af" stroke-width="1.5"/><line x1="166.3" y1="134.8" x2="160.5" y2="130.9" stroke="#9ca3af" stroke-width="1.5"/><line x1="71.2" y1="143.8" x2="79.6" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="53.8" y1="90.3" x2="65.6" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="39.9" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100 g</text><line x1="86.9" y1="44.8" x2="92.3" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="80.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">200 g</text><line x1="143.1" y1="44.8" x2="137.7" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="149.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">300 g</text><line x1="176.2" y1="90.3" x2="164.4" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="190.1" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">400 g</text><line x1="158.8" y1="143.8" x2="150.4" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">500 g</text></svg>' },
        { difficulty: 'Medium', question: 'Op dieselfde skaal wys die wyser halfpad tussen 300 g en 400 g. Wat is die massa?', checkMode: 'auto', options: ['320 g', '340 g', '350 g', '380 g'], correctIndex: 2, explanation: 'Die gaping tussen 300 en 400 is 100 g. Halfpad = 100 ÷ 2 = 50 g na 300. 300 + 50 = 350 g. Die ander opsies skat verkeerd waar die halfpad-punt tussen die twee merke val.', diagramSvg: '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg"><circle cx="115" cy="100" r="62" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="63.7" y1="134.8" x2="69.5" y2="130.9" stroke="#9ca3af" stroke-width="1.5"/><line x1="58.1" y1="124.6" x2="64.5" y2="121.8" stroke="#9ca3af" stroke-width="1.5"/><line x1="54.5" y1="113.5" x2="61.3" y2="112.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="53.0" y1="101.9" x2="60.0" y2="101.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="56.7" y1="79.0" x2="63.3" y2="81.4" stroke="#9ca3af" stroke-width="1.5"/><line x1="61.6" y1="68.4" x2="67.7" y2="72.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="68.5" y1="59.0" x2="73.7" y2="63.6" stroke="#9ca3af" stroke-width="1.5"/><line x1="77.0" y1="51.0" x2="81.3" y2="56.5" stroke="#9ca3af" stroke-width="1.5"/><line x1="97.7" y1="40.5" x2="99.7" y2="47.2" stroke="#9ca3af" stroke-width="1.5"/><line x1="109.2" y1="38.3" x2="109.8" y2="45.2" stroke="#9ca3af" stroke-width="1.5"/><line x1="120.8" y1="38.3" x2="120.2" y2="45.2" stroke="#9ca3af" stroke-width="1.5"/><line x1="132.3" y1="40.5" x2="130.3" y2="47.2" stroke="#9ca3af" stroke-width="1.5"/><line x1="153.0" y1="51.0" x2="148.7" y2="56.5" stroke="#9ca3af" stroke-width="1.5"/><line x1="161.5" y1="59.0" x2="156.3" y2="63.6" stroke="#9ca3af" stroke-width="1.5"/><line x1="168.4" y1="68.4" x2="162.3" y2="72.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="173.3" y1="79.0" x2="166.7" y2="81.4" stroke="#9ca3af" stroke-width="1.5"/><line x1="177.0" y1="101.9" x2="170.0" y2="101.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="175.5" y1="113.5" x2="168.7" y2="112.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="171.9" y1="124.6" x2="165.5" y2="121.8" stroke="#9ca3af" stroke-width="1.5"/><line x1="166.3" y1="134.8" x2="160.5" y2="130.9" stroke="#9ca3af" stroke-width="1.5"/><line x1="71.2" y1="143.8" x2="79.6" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="53.8" y1="90.3" x2="65.6" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="39.9" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100 g</text><line x1="86.9" y1="44.8" x2="92.3" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="80.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">200 g</text><line x1="143.1" y1="44.8" x2="137.7" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="149.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">300 g</text><line x1="176.2" y1="90.3" x2="164.4" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="190.1" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">400 g</text><line x1="158.8" y1="143.8" x2="150.4" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">500 g</text><line x1="115" y1="100" x2="150.6" y2="74.1" stroke="#dc2626" stroke-width="3"/><circle cx="115" cy="100" r="4" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Watter een is swaarder: 1,2 kg of 1 200 g, of is hulle gelyk?', checkMode: 'auto', options: ['1,2 kg is swaarder', '1 200 g is swaarder', 'Hulle is gelyk', 'Kan nie vergelyk word nie'], correctIndex: 2, explanation: '1,2 kg = 1,2 × 1 000 = 1 200 g, dus is 1,2 kg en 1 200 g presies gelyk. Nie een is swaarder nie, en massas kan altyd vergelyk word sodra hulle na dieselfde eenheid omgeskakel is.' },
        { difficulty: 'Medium', question: 'Rangskik hierdie pakkie-massas van swaarste na ligste: 3,2 kg, 2 900 g, 3 kg.', checkMode: 'auto', options: ['3,2 kg, 3 kg, 2 900 g', '2 900 g, 3 kg, 3,2 kg', '3 kg, 3,2 kg, 2 900 g', '2 900 g, 3,2 kg, 3 kg'], correctIndex: 0, explanation: 'Skakel om na gram: 3,2 kg = 3 200 g, 3 kg = 3 000 g, 2 900 g bly dieselfde. Van swaarste na ligste: 3 200 g, 3 000 g, 2 900 g — dit is 3,2 kg, 3 kg, 2 900 g. Die ander volgordes keer óf die reeks om óf verwissel twee van die massas.' },

        // Blok 4: Realistiese massa skat (13-15, Medium)
        { difficulty: 'Medium', question: 'Watter een is die meer realistiese skatting vir die massa van ʼn tros druiwe: 400 g of 40 kg?', checkMode: 'auto', options: ['400 g', '40 kg', '4 g', '4 kg'], correctIndex: 0, explanation: 'ʼn Tros druiwe is ʼn ligte vrugitem — ongeveer 400 g is realisties. 40 kg sou swaarder wees as ʼn volwassene, 4 g sou ligter wees as ʼn enkele druif, en 4 kg sou so swaar wees soos vier sakke suiker.' },
        { difficulty: 'Medium', question: 'ʼn Groentehandelaar weeg ʼn vol kissie tamaties. Watter een is die meer realistiese massa: 8 kg of 8 g?', checkMode: 'auto', options: ['8 g', '8 kg', '80 g', '80 kg'], correctIndex: 1, explanation: 'ʼn Vol kissie tamaties is swaar — ongeveer 8 kg is realisties. 8 g sou ligter wees as een druif, 80 g is steeds veels te lig vir ʼn vol kissie, en 80 kg sou swaarder wees as ʼn volwassene.' },
        { difficulty: 'Medium', question: 'Palesa skat dat een wortel ʼn massa van ongeveer 500 g het. Watter stelling oor haar skatting is korrek?', checkMode: 'auto', options: ['Ja, dit is redelik, want die meeste groente het ʼn massa van ongeveer 500 g.', 'Nee, dit is nie redelik nie — ʼn enkele wortel het gewoonlik ʼn massa van ongeveer 5 kg.', 'Ja, dit is redelik, aangesien wortels altyd in gram gemeet word.', 'Nee, dit is nie redelik nie — ʼn enkele wortel het gewoonlik ʼn massa van ongeveer 50-100 g, en 500 g sou so swaar wees soos vyf of meer wortels saam.'], correctIndex: 3, explanation: 'Nee, dit is nie redelik nie. ʼn Enkele wortel het gewoonlik ʼn massa van ongeveer 50-100 g. 500 g sou so swaar wees soos vyf of meer wortels saam.' },

        // Blok 5: Woordprobleme (16-18, Medium-Hard)
        { difficulty: 'Medium', question: 'ʼn Sak appels het ʼn massa van 1 200 g en ʼn sak pere het ʼn massa van 800 g. Wat is die totale massa van albei sakke?', checkMode: 'auto', options: ['400 g', '2 000 g', '1 960 g', '2 400 g'], correctIndex: 1, explanation: 'Tel die massas op: 1 200 g + 800 g = 2 000 g = 2 kg. 400 g trek per ongeluk af in plaas van op te tel, en 1 960 g en 2 400 g is eenvoudige optelfoute.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Groentekissie het ʼn massa van 6 kg. As 2 kg 400 g groente verkoop word, watter massa bly in die kissie oor?', checkMode: 'auto', options: ['3 kg 600 g', '4 kg 400 g', '3 kg 400 g', '8 kg 400 g'], correctIndex: 0, explanation: 'Skakel om: 6 kg = 6 000 g en 2 kg 400 g = 2 400 g. Trek af: 6 000 g − 2 400 g = 3 600 g = 3 kg 600 g. 4 kg 400 g trek slegs die kilogram-deel af, 3 kg 400 g bereken die gram verkeerd, en 8 kg 400 g tel op in plaas van af te trek.' },
        { difficulty: 'Hard', question: 'ʼn Afleweringsvragmotor vervoer 6 identiese pakkies, elk met ʼn massa van 850 g. Wat is die totale massa van al 6 pakkies, in kilogram?', checkMode: 'auto', options: ['5,1 kg', '4,8 kg', '51 kg', '0,51 kg'], correctIndex: 0, explanation: 'Vermenigvuldig: 6 × 850 g = 5 100 g. Deel deur 1 000: 5 100 ÷ 1 000 = 5,1 kg. 4,8 kg kom van afronding van 850 g af na 800 g voor vermenigvuldiging, 51 kg vergeet om deur 1 000 te deel, en 0,51 kg plaas die desimale punt verkeerd.' },

        // Blok 6: Multi-stap redenasie, regverdiging & foutopsporing (19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Balansskaal het ʼn sak lemoene aan een kant. Om dit te balanseer, word twee gewigte van 250 g en een gewig van 150 g aan die ander kant geplaas. Wat is die massa van die lemoene, en wat sou daardie massa in kilogram wees?', checkMode: 'auto', options: ['400 g, wat 0,4 kg is', '650 g, wat 0,65 kg is', '750 g, wat 0,75 kg is', '650 g, wat 6,5 kg is'], correctIndex: 1, explanation: 'Tel die gewigte op: 250 g + 250 g + 150 g = 650 g. Deel deur 1 000: 650 ÷ 1 000 = 0,65 kg. 400 g vergeet om een van die 250 g-gewigte in te sluit, 750 g verwar die 150 g-gewig met nog ʼn 250 g-gewig, en 6,5 kg plaas die desimale punt verkeerd tydens omskakeling.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><polygon points="88,155 132,155 110,63" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="55" x2="110" y2="65" stroke="#0f1f3d" stroke-width="2.5"/><line x1="32" y1="55" x2="188" y2="55" stroke="#0f1f3d" stroke-width="3"/><circle cx="110" cy="55" r="4" fill="#0f1f3d"/><line x1="32" y1="55" x2="32" y2="87" stroke="#0f1f3d" stroke-width="1.8"/><line x1="188" y1="55" x2="188" y2="87" stroke="#0f1f3d" stroke-width="1.8"/><path d="M10,87 Q32,101 54,87" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M166,87 Q188,101 210,87" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M16,85 Q12,63 24,57 L40,57 Q52,63 48,85 Z" fill="#fef3c7" stroke="#0f1f3d" stroke-width="2"/><text x="32" y="75" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">?</text><text x="32" y="117" font-size="12" fill="#374151" text-anchor="middle">lemoene</text><rect x="166" y="65" width="16" height="20" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2"/><text x="174" y="79" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">250g</text><rect x="183" y="65" width="16" height="20" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2"/><text x="191" y="79" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">250g</text><rect x="200" y="71" width="14" height="14" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2"/><text x="197" y="82" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">150g</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue massas omskakel, vergelyk en op skale lees.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige vrae wat jy verkeerd gehad het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Hersien hoe om skaalintervalle te lees en massas te vergelyk.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — rys / meel / klaskamer-voorrade / vee konteks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1: Eenhede kies & kern-omskakelingsfeit (0-3, Maklik)
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die massa van ʼn stukkie kryt te meet — gram of kilogram?', checkMode: 'auto', options: ['Gram', 'Kilogram', 'Liter', 'Kilometer'], correctIndex: 0, explanation: 'ʼn Stukkie kryt is ʼn baie ligte voorwerp. Gram (g) word vir ligte voorwerpe gebruik, want kilogram sou ʼn baie klein, ongemaklike desimaal gee. Liter meet vloeistofvolume en kilometer meet lang afstande — nie een van die twee meet massa nie.' },
        { difficulty: 'Easy', question: 'Skakel 8 kg om na gram.', checkMode: 'auto', options: ['80 g', '800 g', '8 000 g', '80 000 g'], correctIndex: 2, explanation: 'Om kg na g om te skakel, vermenigvuldig met 1 000: 8 × 1 000 = 8 000 g. 800 g vermenigvuldig met 100 in plaas daarvan, 80 000 g vermenigvuldig met 10 000, en 80 g deel in plaas van te vermenigvuldig.' },
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die massa van ʼn sak rys te meet — gram of kilogram?', checkMode: 'auto', options: ['Gram', 'Kilogram', 'Milliliter', 'Sentimeter'], correctIndex: 1, explanation: 'ʼn Sak rys is swaar, dikwels verskeie kilogram. Kilogram (kg) word vir swaarder voorwerpe gebruik sodat die getalle hanteerbaar bly. Milliliter meet vloeistofvolume en sentimeter meet lengte — nie een van die twee meet massa nie.' },
        { difficulty: 'Easy', question: 'ʼn Bok het ʼn massa van baie duisende gram. Watter stelling verduidelik waarom ʼn boer sy massa in kilogram, eerder as gram, sou beskryf?', checkMode: 'auto', options: ['Gram kan nie vir lewende diere gebruik word nie.', 'Kilogram is die enigste eenheid wat op ʼn plaas toegelaat word.', 'ʼn Bok se massa verander te vinnig om gram akkuraat te gebruik.', 'Baie duisende gram is ʼn ongerieflik groot getal om te sê of te skryf, dus gee kilogram ʼn baie kleiner, makliker getal vir groot massas soos ʼn bok.'], correctIndex: 3, explanation: 'ʼn Bok het ʼn massa van baie duisende gram, wat ʼn ongerieflik groot getal is om te sê of te skryf. Kilogram gee ʼn baie kleiner, makliker getal vir groot massas soos ʼn bok of ander vee. Gram kan enige massa meet, en kilogram is eenvoudig ʼn geriefliker keuse hier.' },

        // Blok 2: Omskakeling g <-> kg (4-8, Maklik-Medium)
        { difficulty: 'Easy', question: 'Skakel 7 000 g om na kilogram.', checkMode: 'auto', options: ['0,7 kg', '7 kg', '70 kg', '700 kg'], correctIndex: 1, explanation: 'Deel deur 1 000: 7 000 ÷ 1 000 = 7 kg. 0,7 kg deel deur 10 000, en 70 kg en 700 kg deel deur 100 of 10 in plaas van 1 000.' },
        { difficulty: 'Medium', question: 'ʼn Sak mieliemeel het ʼn massa van 4,5 kg. Skryf hierdie massa in gram.', checkMode: 'auto', options: ['450 g', '4 500 g', '45 000 g', '4 050 g'], correctIndex: 1, explanation: 'Vermenigvuldig met 1 000: 4,5 × 1 000 = 4 500 g. 450 g vermenigvuldig met 100 in plaas van 1 000, 45 000 g vermenigvuldig met 10 000, en 4 050 g hanteer die desimale punt verkeerd.' },
        { difficulty: 'Medium', question: 'ʼn Boks klaskamerkryt het ʼn massa van 600 g. Skryf hierdie massa in kilogram.', checkMode: 'auto', options: ['0,06 kg', '0,6 kg', '6 kg', '60 kg'], correctIndex: 1, explanation: 'Deel deur 1 000: 600 ÷ 1 000 = 0,6 kg. Die ander opsies skuif die desimale punt die verkeerde aantal plekke.' },
        { difficulty: 'Medium', question: 'ʼn Kissie oefeningboeke het ʼn massa van 3 kg 150 g. Skryf hierdie massa slegs in gram.', checkMode: 'auto', options: ['315 g', '3 015 g', '3 150 g', '31 500 g'], correctIndex: 2, explanation: '3 kg = 3 000 g, dus 3 kg 150 g = 3 000 g + 150 g = 3 150 g. 3 015 g verwissel die syfers van 150, 315 g laat ʼn nul weg, en 31 500 g voeg ʼn ekstra nul by.' },
        { difficulty: 'Medium', question: 'ʼn Leerder tel 1 kg en 500 g op en skryf die antwoord as "1 500" sonder ʼn eenheid. Watter stelling is korrek?', checkMode: 'auto', options: ['Dit is nie aanvaarbaar nie — die eenheid ontbreek, en die korrekte totaal is 1 000 g + 500 g = 1 500 g (of 1,5 kg).', 'Dit is aanvaarbaar, want almal weet groot getalle soos hierdie beteken gram.', 'Dit is nie aanvaarbaar nie — die korrekte totaal is eintlik 1 500 kg.', 'Dit is aanvaarbaar, want eenhede is opsioneel sodra jy twee massas bymekaargetel het.'], correctIndex: 0, explanation: 'Nee, die eenheid ontbreek. Om net "1 500" te skryf sê nie of dit 1 500 g of iets anders beteken nie — eenhede moet altyd ingesluit word. Aangesien 1 kg = 1 000 g, is die korrekte totaal 1 000 g + 500 g = 1 500 g (of 1,5 kg).' },

        // Blok 3: Massa op ʼn skaal lees & vergelyk (9-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Kombuisskaal gaan van 0 tot 1 000 g met 10 gelyke intervalle. Wat is die waarde van elke klein interval?', checkMode: 'auto', options: ['10 g', '100 g', '200 g', '1 000 g'], correctIndex: 1, explanation: '1 000 ÷ 10 = 100 g per interval. 10 g deel deur 100 in plaas van 10, 200 g deel deur 5, en 1 000 g vergeet heeltemal om te deel.', diagramSvg: '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg"><circle cx="115" cy="100" r="62" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.2" y1="143.8" x2="79.6" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="56.0" y1="119.2" x2="67.4" y2="115.5" stroke="#0f1f3d" stroke-width="2"/><line x1="53.8" y1="90.3" x2="65.6" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="39.9" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">200</text><line x1="64.8" y1="63.6" x2="74.5" y2="70.6" stroke="#0f1f3d" stroke-width="2"/><line x1="86.9" y1="44.8" x2="92.3" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="80.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">400</text><line x1="115.0" y1="38.0" x2="115.0" y2="50.0" stroke="#0f1f3d" stroke-width="2"/><line x1="143.1" y1="44.8" x2="137.7" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="149.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">600</text><line x1="165.2" y1="63.6" x2="155.5" y2="70.6" stroke="#0f1f3d" stroke-width="2"/><line x1="176.2" y1="90.3" x2="164.4" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="190.1" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">800</text><line x1="174.0" y1="119.2" x2="162.6" y2="115.5" stroke="#0f1f3d" stroke-width="2"/><line x1="158.8" y1="143.8" x2="150.4" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">1000 g</text></svg>' },
        { difficulty: 'Medium', question: 'Op dieselfde skaal wys die wyser na die merk net voor 1 000 g. Watter massa toon dit?', checkMode: 'auto', options: ['800 g', '900 g', '950 g', '1 000 g'], correctIndex: 1, explanation: 'Elke interval is 100 g werd. Die merk net voor 1 000 g is 1 000 − 100 = 900 g. 800 g spring twee merke terug in plaas van een, 950 g neem intervalle van 50 g aan, en 1 000 g is die finale merk self, nie die een net voor dit nie.', diagramSvg: '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg"><circle cx="115" cy="100" r="62" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.2" y1="143.8" x2="79.6" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="56.0" y1="119.2" x2="67.4" y2="115.5" stroke="#0f1f3d" stroke-width="2"/><line x1="53.8" y1="90.3" x2="65.6" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="39.9" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">200</text><line x1="64.8" y1="63.6" x2="74.5" y2="70.6" stroke="#0f1f3d" stroke-width="2"/><line x1="86.9" y1="44.8" x2="92.3" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="80.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">400</text><line x1="115.0" y1="38.0" x2="115.0" y2="50.0" stroke="#0f1f3d" stroke-width="2"/><line x1="143.1" y1="44.8" x2="137.7" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="149.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">600</text><line x1="165.2" y1="63.6" x2="155.5" y2="70.6" stroke="#0f1f3d" stroke-width="2"/><line x1="176.2" y1="90.3" x2="164.4" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="190.1" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">800</text><line x1="174.0" y1="119.2" x2="162.6" y2="115.5" stroke="#0f1f3d" stroke-width="2"/><line x1="158.8" y1="143.8" x2="150.4" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">1000 g</text><line x1="115" y1="100" x2="156.8" y2="113.6" stroke="#dc2626" stroke-width="3"/><circle cx="115" cy="100" r="4" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Watter een is swaarder: 2,05 kg of 2 500 g?', checkMode: 'auto', options: ['2,05 kg', '2 500 g', 'Hulle is gelyk', 'Kan nie vergelyk word nie'], correctIndex: 1, explanation: '2,05 kg = 2 050 g. Aangesien 2 500 g > 2 050 g, is 2 500 g swaarder. Hulle is nie gelyk nie, en albei massas kan altyd vergelyk word sodra hulle na dieselfde eenheid omgeskakel is.' },
        { difficulty: 'Medium', question: 'Rangskik hierdie sak-massas van ligste na swaarste: 5 kg, 4 800 g, 5,2 kg.', checkMode: 'auto', options: ['4 800 g, 5 kg, 5,2 kg', '5,2 kg, 5 kg, 4 800 g', '5 kg, 4 800 g, 5,2 kg', '4 800 g, 5,2 kg, 5 kg'], correctIndex: 0, explanation: 'Skakel om na gram: 5 kg = 5 000 g, 5,2 kg = 5 200 g, 4 800 g bly dieselfde. Van ligste na swaarste: 4 800 g, 5 000 g, 5 200 g — dit is 4 800 g, 5 kg, 5,2 kg. Die ander volgordes keer óf die reeks om óf verwissel twee van die massas.' },

        // Blok 4: Realistiese massa skat (13-15, Medium)
        { difficulty: 'Medium', question: 'Watter een is die meer realistiese skatting vir die massa van ʼn sak rys wat by ʼn markstalletjie verkoop word: 2 kg of 2 g?', checkMode: 'auto', options: ['2 g', '2 kg', '20 g', '20 kg'], correctIndex: 1, explanation: 'ʼn Klein sakkie rys wat verkoop word, is ʼn redelik swaar kruidenieritem — ongeveer 2 kg is realisties. 2 g sou ligter wees as twee skuifspelde, 20 g is steeds veels te lig, en 20 kg sou so swaar wees soos ʼn jong bokkie.' },
        { difficulty: 'Medium', question: 'ʼn Boer weeg ʼn jong bokkie. Watter een is die meer realistiese massa: 15 kg of 150 g?', checkMode: 'auto', options: ['150 g', '15 kg', '1,5 kg', '150 kg'], correctIndex: 1, explanation: 'ʼn Jong bokkie is ʼn redelik groot dier — ongeveer 15 kg is realisties. 150 g sou ligter wees as ʼn snytjie brood, 1,5 kg is steeds veels te lig vir ʼn bokkie, en 150 kg sou swaarder wees as verskeie volwassenes.' },
        { difficulty: 'Medium', question: 'Boitumelo skat dat ʼn vol kissie oefeningboeke ʼn massa van ongeveer 500 g het. Watter stelling oor haar skatting is korrek?', checkMode: 'auto', options: ['Ja, dit is redelik, want oefeningboeke is altyd lig.', 'Nee, dit is nie redelik nie — ʼn vol kissie oefeningboeke het gewoonlik ʼn massa van etlike kilogram, en 500 g sou ligter wees as een enkele brood.', 'Nee, dit is nie redelik nie — ʼn vol kissie oefeningboeke het gewoonlik ʼn massa van ongeveer 5 g.', 'Ja, dit is redelik, aangesien kissies nooit swaarder as 1 kg is nie.'], correctIndex: 1, explanation: 'Nee, dit is nie redelik nie. ʼn Vol kissie oefeningboeke het gewoonlik ʼn massa van etlike kilogram, nie ʼn paar honderd gram nie. 500 g sou ligter wees as een enkele brood, wat veels te lig is vir ʼn vol kissie boeke.' },

        // Blok 5: Woordprobleme (16-18, Medium-Hard)
        { difficulty: 'Medium', question: 'ʼn Boer het ʼn sak hoendervoer van 12 kg en gebruik 3 kg 400 g daarvan om die hoenders vir die week te voer. Hoeveel voer bly oor?', checkMode: 'auto', options: ['8 kg 600 g', '9 kg 400 g', '8 kg 400 g', '15 kg 400 g'], correctIndex: 0, explanation: 'Skakel om: 12 kg = 12 000 g. Trek af: 12 000 g − 3 400 g = 8 600 g = 8 kg 600 g. 9 kg 400 g trek slegs die kilogram-deel af, 8 kg 400 g bereken die gram verkeerd, en 15 kg 400 g tel op in plaas van af te trek.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Klaskamer stoor 4 identiese kissies oefeningboeke, elk met ʼn massa van 6 kg 500 g. Wat is die totale massa van al 4 kissies?', checkMode: 'auto', options: ['26 kg', '24 kg', '28 kg', '10,5 kg'], correctIndex: 0, explanation: 'Vermenigvuldig: 6 kg 500 g = 6 500 g. 6 500 g × 4 = 26 000 g = 26 kg. 24 kg kom van die ignorering van die 500 g en vermenigvuldiging van slegs 6 kg × 4, 28 kg kom van afronding van 6,5 kg op na 7 kg eers, en 10,5 kg tel per ongeluk die massas op in plaas van te vermenigvuldig.' },
        { difficulty: 'Hard', question: 'ʼn Handelaar het 18 kg meel om in sakkies van 750 g elk vir die mark te pak. Hoeveel volle sakkies kan sy maak?', checkMode: 'auto', options: ['24 sakkies', '18 sakkies', '2,4 sakkies', '13 500 sakkies'], correctIndex: 0, explanation: 'Skakel om: 18 kg = 18 000 g. Deel: 18 000 g ÷ 750 g = 24 sakkies. 18 sakkies verwar die aantal sakkies met die kilogram wat gegee is, 2,4 sakkies vergeet om die kilogram eers na gram om te skakel, en 13 500 sakkies vermenigvuldig in plaas van te deel.' },

        // Blok 6: Multi-stap redenasie, regverdiging & foutopsporing (19, Moeilik)
        { difficulty: 'Hard', question: 'Watter stelling verduidelik korrek waarom 2 kg en 500 g na dieselfde eenheid omgeskakel moet word voordat hulle bymekaargetel word?', checkMode: 'auto', options: ['Dit is eintlik nie nodig nie — 2 kg + 500 g is altyd gelyk aan 502, ongeag die eenhede.', 'Omskakeling is slegs nodig by aftrekking, nooit by optelling nie.', 'As die eenhede verskil, verteenwoordig die syfers nie dieselfde grootte nie, dus is dit betekenisloos om hulle direk op te tel (bv. "2 + 500 = 502") — om eers om te skakel (2 kg = 2 000 g, dus 2 000 g + 500 g = 2 500 g) verseker dat jy gelyke eenhede vergelyk.', 'Dit is nodig omdat gram nie by ander gram getel kan word nie, slegs by kilogram.'], correctIndex: 2, explanation: 'As massas in verskillende eenhede is, verteenwoordig die syfers nie dieselfde grootte eenheid nie, dus gee dit ʼn betekenislose resultaat om hulle direk op te tel of af te trek — byvoorbeeld "2 + 500 = 502" is verkeerd. Jy moet eers albei na dieselfde eenheid omskakel: 2 kg = 2 000 g, dus 2 kg + 500 g = 2 000 g + 500 g = 2 500 g. Om eers om te skakel verseker dat die berekening gelyke eenhede vergelyk. Die reël geld vir beide optelling en aftrekking, en gram kan sonder probleme by gram getel word sodra beide massas in dieselfde eenheid is.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan met selfvertroue massas skat, omskakel en woordprobleme oplos.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige vrae wat jy verkeerd gehad het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Hersien die alledaagse verwysingspunte en woordprobleem-stappe.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },
  ],
}
