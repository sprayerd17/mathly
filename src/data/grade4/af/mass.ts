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
    // STEL 1 (20 vrae) — brood / suiker / skuifspeld / skooltas konteks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1: Eenhede kies & kern-omskakelingsfeit (0-3, Maklik)
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die massa van ʼn lekkergoedjie te meet — gram of kilogram?', answer: 'Gram', checkMode: 'auto', correctAnswer: 'g', correctAnswers: ['g', 'gram'], explanation: 'ʼn Lekkergoedjie is ʼn baie ligte voorwerp. Gram (g) word vir ligte voorwerpe gebruik omdat die massa heeltemal te klein is om betekenisvol in kilogram te meet.' },
        { difficulty: 'Easy', question: 'Skakel 1 kg om na gram.', answer: '1 000 g', checkMode: 'auto', correctAnswer: '1000g', correctAnswers: ['1000g', '1000', '1000 g', '1 000g', '1 000 g'], explanation: 'Om kg na g om te skakel, vermenigvuldig met 1 000: 1 × 1 000 = 1 000 g.' },
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die massa van ʼn skooltas te meet — gram of kilogram?', answer: 'Kilogram', checkMode: 'auto', correctAnswer: 'kg', correctAnswers: ['kg', 'kilogram'], explanation: 'ʼn Skooltas is ʼn redelik swaar voorwerp, gewoonlik ongeveer 3–5 kg. Kilogram (kg) word vir swaarder voorwerpe gebruik omdat die aantal gram ongemaklik groot sou wees.' },
        { difficulty: 'Easy', question: 'Verduidelik waarom ons nie die massa van ʼn brood slegs in heelgetal-kilogram sou meet nie.', answer: 'ʼn Brood het ʼn massa van ongeveer 700 g, wat minder as 1 kg is. As ons net heel kilogram gebruik, sou die massa afrond na 1 kg of 0 kg, wat nie akkuraat is nie. Gram laat ons toe om massas kleiner as 1 kg presies te beskryf.', checkMode: 'self' },

        // Blok 2: Omskakeling g <-> kg (heelgetal, desimaal & saamgestel) (4-8, Maklik-Medium)
        { difficulty: 'Easy', question: 'Skakel 3 000 g om na kilogram.', answer: '3 kg', checkMode: 'auto', correctAnswer: '3kg', correctAnswers: ['3kg', '3', '3 kg'], explanation: 'Deel deur 1 000: 3 000 ÷ 1 000 = 3 kg.' },
        { difficulty: 'Medium', question: 'Skakel 2,5 kg suiker om na gram.', answer: '2 500 g', checkMode: 'auto', correctAnswer: '2500g', correctAnswers: ['2500g', '2500', '2500 g', '2 500g', '2 500 g'], explanation: 'Vermenigvuldig met 1 000: 2,5 × 1 000 = 2 500 g.' },
        { difficulty: 'Medium', question: 'ʼn Sak suiker het ʼn massa van 750 g. Skryf hierdie massa in kilogram.', answer: '0,75 kg', checkMode: 'auto', correctAnswer: '0.75kg', correctAnswers: ['0.75kg', '0.75', '0.75 kg', '0,75kg', '0,75', '0,75 kg'], explanation: 'Deel deur 1 000: 750 ÷ 1 000 = 0,75 kg.' },
        { difficulty: 'Medium', question: 'ʼn Brood het ʼn massa van 1 kg 300 g. Skryf hierdie massa slegs in gram.', answer: '1 300 g', checkMode: 'auto', correctAnswer: '1300g', correctAnswers: ['1300g', '1300', '1300 g', '1 300g', '1 300 g'], explanation: '1 kg = 1 000 g, dus 1 kg 300 g = 1 000 g + 300 g = 1 300 g.' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê dat 4 200 g dieselfde is as 4 kg 200 g. Is dit korrek? Verduidelik.', answer: 'Ja, dit is korrek. 4 200 g = 4 000 g + 200 g. Aangesien 4 000 g = 4 kg, is dit 4 kg + 200 g = 4 kg 200 g.', checkMode: 'self' },

        // Blok 3: Massa op ʼn skaal lees & vergelyk (9-12, Medium)
        { difficulty: 'Easy', question: 'ʼn Kombuisskaal gaan van 0 tot 300 g met 3 gelyke intervalle. Wat is die waarde van elke interval?', answer: '100 g', checkMode: 'auto', correctAnswer: '100g', correctAnswers: ['100g', '100', '100 g'], explanation: '300 ÷ 3 = 100 g per interval.', diagramSvg: '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg"><circle cx="115" cy="100" r="62" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.2" y1="143.8" x2="79.6" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="71.2" y1="56.2" x2="79.6" y2="64.6" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="50.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100 g</text><line x1="158.8" y1="56.2" x2="150.4" y2="64.6" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="50.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">200 g</text><line x1="158.8" y1="143.8" x2="150.4" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">300 g</text><line x1="115" y1="100" x2="153.2" y2="61.8" stroke="#dc2626" stroke-width="3"/><circle cx="115" cy="100" r="4" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Op dieselfde skaal wys die wyser na die tweede merk vanaf 0. Watter massa toon dit?', answer: '200 g', checkMode: 'auto', correctAnswer: '200g', correctAnswers: ['200g', '200', '200 g'], explanation: 'Elke interval is 100 g werd. Die tweede merk vanaf 0 is 0 + 100 + 100 = 200 g.', diagramSvg: '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg"><circle cx="115" cy="100" r="62" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.2" y1="143.8" x2="79.6" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="71.2" y1="56.2" x2="79.6" y2="64.6" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="50.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100 g</text><line x1="158.8" y1="56.2" x2="150.4" y2="64.6" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="50.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">200 g</text><line x1="158.8" y1="143.8" x2="150.4" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">300 g</text><line x1="115" y1="100" x2="153.2" y2="61.8" stroke="#dc2626" stroke-width="3"/><circle cx="115" cy="100" r="4" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Watter een is swaarder: 900 g of 1 kg?', answer: '1 kg', checkMode: 'auto', correctAnswer: '1kg', correctAnswers: ['1kg', '1 kg'], explanation: '1 kg = 1 000 g, en 1 000 g is meer as 900 g, dus is 1 kg swaarder.' },
        { difficulty: 'Medium', question: 'Rangskik hierdie massas van ligste na swaarste: 1 kg, 850 g, 1 200 g.', answer: '850 g, 1 kg, 1 200 g', checkMode: 'auto', correctAnswer: '850g, 1kg, 1200g', correctAnswers: ['850g, 1kg, 1200g', '850 g, 1 kg, 1 200 g', '850g,1kg,1200g'], explanation: 'Skakel om na gram: 1 kg = 1 000 g. Die massas is dus 850 g, 1 000 g, 1 200 g — reeds in volgorde van ligste na swaarste.' },

        // Blok 4: Realistiese massa skat (13-15, Medium)
        { difficulty: 'Medium', question: 'Watter een is die meer realistiese skatting vir die massa van ʼn snytjie brood: 30 g of 30 kg?', answer: '30 g', checkMode: 'auto', correctAnswer: '30g', correctAnswers: ['30g', '30 g'], explanation: 'ʼn Snytjie brood is ʼn baie ligte voorwerp — ongeveer 30 g. 30 kg sou swaarder wees as ʼn Graad 4-leerder.' },
        { difficulty: 'Medium', question: 'ʼn Skooltas vol boeke staan op ʼn tafel. Watter een is die meer realistiese massa daarvoor: 4 kg of 40 g?', answer: '4 kg', checkMode: 'auto', correctAnswer: '4kg', correctAnswers: ['4kg', '4 kg'], explanation: 'ʼn Skooltas vol boeke is redelik swaar — ongeveer 4 kg. 40 g sou ligter wees as ʼn snytjie brood.' },
        { difficulty: 'Medium', question: 'Karabo skat dat sy volgepakte pennnale ʼn massa van ongeveer 3 kg het. Is dit ʼn redelike skatting? Verduidelik jou redenering.', answer: 'Nee, dit is nie redelik nie. ʼn Pennnale het gewoonlik ʼn massa van ongeveer 200-300 g. 3 kg sou so swaar wees soos drie sakke suiker, wat veels te swaar is vir ʼn pennnale.', checkMode: 'self' },

        // Blok 5: Woordprobleme (16-18, Medium-Hard)
        { difficulty: 'Medium', question: 'ʼn Resep gebruik 300 g meel. As Naledi die resep 4 keer bak, hoeveel meel gebruik sy in totaal?', answer: '1 200 g of 1 kg 200 g', checkMode: 'auto', correctAnswer: '1200g', correctAnswers: ['1200g', '1200', '1200 g', '1 200g', '1 200 g', '1kg200g', '1 kg 200 g'], explanation: 'Vermenigvuldig: 300 g × 4 = 1 200 g = 1 kg 200 g.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Bakker het ʼn sak van 5 kg suiker. Sy gebruik 1 kg 250 g om ʼn bondel koeke te bak. Hoeveel suiker bly oor?', answer: '3 kg 750 g', checkMode: 'auto', correctAnswer: '3kg750g', correctAnswers: ['3kg750g', '3750g', '3750', '3 kg 750 g', '3kg 750g'], explanation: 'Skakel om: 5 kg = 5 000 g. Trek af: 5 000 g − 1 250 g = 3 750 g = 3 kg 750 g.' },
        { difficulty: 'Hard', question: 'ʼn Mark-stalletjie pak lekkers in klein sakkies van 60 g elk. As die stalletjie 1 kg 800 g lekkers het, hoeveel volle sakkies kan gepak word?', answer: '30 sakkies', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 sakkies'], explanation: 'Skakel om: 1 kg 800 g = 1 800 g. Deel: 1 800 g ÷ 60 g = 30 sakkies.' },

        // Blok 6: Multi-stap redenasie, regverdiging & foutopsporing (19, Moeilik)
        { difficulty: 'Hard', question: 'Thabo sê dat 2,5 kg dieselfde is as 2 kg 500 g. Is hy korrek? Verduidelik jou redenering.', answer: 'Ja, Thabo is korrek. 2,5 kg beteken 2 volle kilogram plus 0,5 van ʼn kilogram. Aangesien 0,5 kg = 0,5 × 1 000 g = 500 g, is 2,5 kg = 2 kg 500 g presies.', checkMode: 'self' },
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
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die massa van ʼn druif te meet — gram of kilogram?', answer: 'Gram', checkMode: 'auto', correctAnswer: 'g', correctAnswers: ['g', 'gram'], explanation: 'ʼn Druif is ʼn baie ligte voorwerp. Gram (g) word vir ligte voorwerpe gebruik, want kilogram sou ʼn ongemaklike klein desimaal gee.' },
        { difficulty: 'Easy', question: 'Skakel 1 000 g om na kilogram.', answer: '1 kg', checkMode: 'auto', correctAnswer: '1kg', correctAnswers: ['1kg', '1', '1 kg'], explanation: 'Om g na kg om te skakel, deel deur 1 000: 1 000 ÷ 1 000 = 1 kg.' },
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die massa van ʼn kissie groente te meet — gram of kilogram?', answer: 'Kilogram', checkMode: 'auto', correctAnswer: 'kg', correctAnswers: ['kg', 'kilogram'], explanation: 'ʼn Kissie groente is swaar, dikwels verskeie kilogram. Kilogram (kg) word vir swaarder voorwerpe gebruik sodat die getalle hanteerbaar bly.' },
        { difficulty: 'Easy', question: 'Verduidelik waarom boere ʼn kissie groente in kilogram, nie gram nie, weeg.', answer: 'ʼn Kissie groente kan ʼn massa van baie duisende gram hê, wat ʼn ongerieflik groot getal is om mee te werk. Kilogram gee ʼn kleiner, makliker getal vir swaar voorwerpe soos ʼn vol kissie.', checkMode: 'self' },

        // Blok 2: Omskakeling g <-> kg (4-8, Maklik-Medium)
        { difficulty: 'Easy', question: 'Skakel 6 kg om na gram.', answer: '6 000 g', checkMode: 'auto', correctAnswer: '6000g', correctAnswers: ['6000g', '6000', '6000 g', '6 000g', '6 000 g'], explanation: 'Vermenigvuldig met 1 000: 6 × 1 000 = 6 000 g.' },
        { difficulty: 'Medium', question: 'ʼn Boks lemoene het ʼn massa van 3,5 kg. Skryf hierdie massa in gram.', answer: '3 500 g', checkMode: 'auto', correctAnswer: '3500g', correctAnswers: ['3500g', '3500', '3500 g', '3 500g', '3 500 g'], explanation: 'Vermenigvuldig met 1 000: 3,5 × 1 000 = 3 500 g.' },
        { difficulty: 'Medium', question: 'ʼn Bakkie aarbeie het ʼn massa van 250 g. Skryf hierdie massa in kilogram.', answer: '0,25 kg', checkMode: 'auto', correctAnswer: '0.25kg', correctAnswers: ['0.25kg', '0.25', '0.25 kg', '0,25kg', '0,25', '0,25 kg'], explanation: 'Deel deur 1 000: 250 ÷ 1 000 = 0,25 kg.' },
        { difficulty: 'Medium', question: 'ʼn Pakkie groente het ʼn massa van 2 kg 400 g. Skryf hierdie massa slegs in gram.', answer: '2 400 g', checkMode: 'auto', correctAnswer: '2400g', correctAnswers: ['2400g', '2400', '2400 g', '2 400g', '2 400 g'], explanation: '2 kg = 2 000 g, dus 2 kg 400 g = 2 000 g + 400 g = 2 400 g.' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê 0,5 kg en 500 g is nie gelyk nie, want "500 is ʼn veel groter getal as 0,5". Is die leerder korrek? Verduidelik.', answer: 'Nee, die leerder is nie korrek nie. 0,5 kg = 0,5 × 1 000 g = 500 g, dus verteenwoordig 0,5 kg en 500 g presies dieselfde massa. Om die getalle sonder om die eenhede na te gaan te vergelyk, is misleidend, want kg en g is verskillende groottes eenhede.', checkMode: 'self' },

        // Blok 3: Massa op ʼn skaal lees & vergelyk (9-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Kombuisskaal gaan van 0 tot 500 g met 5 gelyke intervalle tussen elke 100 g-merk. Wat is die waarde van elke klein interval?', answer: '20 g', checkMode: 'auto', correctAnswer: '20g', correctAnswers: ['20g', '20', '20 g'], explanation: 'Elke 100 g-afdeling word in 5 gelyke intervalle verdeel. 100 ÷ 5 = 20 g per interval.', diagramSvg: '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg"><circle cx="115" cy="100" r="62" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="64.8" y1="136.4" x2="70.5" y2="132.3" stroke="#9ca3af" stroke-width="1.5"/><line x1="59.8" y1="128.1" x2="66.0" y2="125.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="56.0" y1="119.2" x2="62.7" y2="117.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="53.8" y1="109.7" x2="60.7" y2="108.6" stroke="#9ca3af" stroke-width="1.5"/><line x1="53.0" y1="100.0" x2="60.0" y2="100.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="56.0" y1="80.8" x2="62.7" y2="83.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="59.8" y1="71.9" x2="66.0" y2="75.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="64.8" y1="63.6" x2="70.5" y2="67.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="71.2" y1="56.2" x2="76.1" y2="61.1" stroke="#9ca3af" stroke-width="1.5"/><line x1="78.6" y1="49.8" x2="82.7" y2="55.5" stroke="#9ca3af" stroke-width="1.5"/><line x1="95.8" y1="41.0" x2="98.0" y2="47.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="105.3" y1="38.8" x2="106.4" y2="45.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="115.0" y1="38.0" x2="115.0" y2="45.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="124.7" y1="38.8" x2="123.6" y2="45.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="134.2" y1="41.0" x2="132.0" y2="47.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="151.4" y1="49.8" x2="147.3" y2="55.5" stroke="#9ca3af" stroke-width="1.5"/><line x1="158.8" y1="56.2" x2="153.9" y2="61.1" stroke="#9ca3af" stroke-width="1.5"/><line x1="165.2" y1="63.6" x2="159.5" y2="67.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="170.2" y1="71.9" x2="164.0" y2="75.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="174.0" y1="80.8" x2="167.3" y2="83.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="177.0" y1="100.0" x2="170.0" y2="100.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="176.2" y1="109.7" x2="169.3" y2="108.6" stroke="#9ca3af" stroke-width="1.5"/><line x1="174.0" y1="119.2" x2="167.3" y2="117.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="170.2" y1="128.1" x2="164.0" y2="125.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="165.2" y1="136.4" x2="159.5" y2="132.3" stroke="#9ca3af" stroke-width="1.5"/><line x1="71.2" y1="143.8" x2="79.6" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="53.8" y1="90.3" x2="65.6" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="39.9" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100 g</text><line x1="86.9" y1="44.8" x2="92.3" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="80.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">200 g</text><line x1="143.1" y1="44.8" x2="137.7" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="149.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">300 g</text><line x1="176.2" y1="90.3" x2="164.4" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="190.1" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">400 g</text><line x1="158.8" y1="143.8" x2="150.4" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">500 g</text></svg>' },
        { difficulty: 'Medium', question: 'Op dieselfde skaal wys die wyser halfpad tussen 300 g en 400 g. Wat is die massa?', answer: '350 g', checkMode: 'auto', correctAnswer: '350g', correctAnswers: ['350g', '350', '350 g'], explanation: 'Die gaping tussen 300 en 400 is 100 g. Halfpad = 100 ÷ 2 = 50 g na 300. 300 + 50 = 350 g.', diagramSvg: '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg"><circle cx="115" cy="100" r="62" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="64.8" y1="136.4" x2="70.5" y2="132.3" stroke="#9ca3af" stroke-width="1.5"/><line x1="59.8" y1="128.1" x2="66.0" y2="125.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="56.0" y1="119.2" x2="62.7" y2="117.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="53.8" y1="109.7" x2="60.7" y2="108.6" stroke="#9ca3af" stroke-width="1.5"/><line x1="53.0" y1="100.0" x2="60.0" y2="100.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="56.0" y1="80.8" x2="62.7" y2="83.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="59.8" y1="71.9" x2="66.0" y2="75.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="64.8" y1="63.6" x2="70.5" y2="67.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="71.2" y1="56.2" x2="76.1" y2="61.1" stroke="#9ca3af" stroke-width="1.5"/><line x1="78.6" y1="49.8" x2="82.7" y2="55.5" stroke="#9ca3af" stroke-width="1.5"/><line x1="95.8" y1="41.0" x2="98.0" y2="47.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="105.3" y1="38.8" x2="106.4" y2="45.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="115.0" y1="38.0" x2="115.0" y2="45.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="124.7" y1="38.8" x2="123.6" y2="45.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="134.2" y1="41.0" x2="132.0" y2="47.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="151.4" y1="49.8" x2="147.3" y2="55.5" stroke="#9ca3af" stroke-width="1.5"/><line x1="158.8" y1="56.2" x2="153.9" y2="61.1" stroke="#9ca3af" stroke-width="1.5"/><line x1="165.2" y1="63.6" x2="159.5" y2="67.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="170.2" y1="71.9" x2="164.0" y2="75.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="174.0" y1="80.8" x2="167.3" y2="83.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="177.0" y1="100.0" x2="170.0" y2="100.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="176.2" y1="109.7" x2="169.3" y2="108.6" stroke="#9ca3af" stroke-width="1.5"/><line x1="174.0" y1="119.2" x2="167.3" y2="117.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="170.2" y1="128.1" x2="164.0" y2="125.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="165.2" y1="136.4" x2="159.5" y2="132.3" stroke="#9ca3af" stroke-width="1.5"/><line x1="71.2" y1="143.8" x2="79.6" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="53.8" y1="90.3" x2="65.6" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="39.9" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100 g</text><line x1="86.9" y1="44.8" x2="92.3" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="80.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">200 g</text><line x1="143.1" y1="44.8" x2="137.7" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="149.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">300 g</text><line x1="176.2" y1="90.3" x2="164.4" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="190.1" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">400 g</text><line x1="158.8" y1="143.8" x2="150.4" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">500 g</text><line x1="115" y1="100" x2="150.6" y2="74.1" stroke="#dc2626" stroke-width="3"/><circle cx="115" cy="100" r="4" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Watter een is swaarder: 1,2 kg of 1 200 g, of is hulle gelyk?', answer: 'Gelyk', checkMode: 'auto', correctAnswer: 'gelyk', correctAnswers: ['gelyk', 'dieselfde', 'hulle is gelyk'], explanation: '1,2 kg = 1,2 × 1 000 = 1 200 g, dus is 1,2 kg en 1 200 g presies gelyk.' },
        { difficulty: 'Medium', question: 'Rangskik hierdie pakkie-massas van swaarste na ligste: 3,2 kg, 2 900 g, 3 kg.', answer: '3,2 kg, 3 kg, 2 900 g', checkMode: 'auto', correctAnswer: '3.2kg, 3kg, 2900g', correctAnswers: ['3.2kg, 3kg, 2900g', '3.2 kg, 3 kg, 2 900 g', '3.2kg,3kg,2900g', '3,2kg, 3kg, 2900g', '3,2 kg, 3 kg, 2 900 g'], explanation: 'Skakel om na gram: 3,2 kg = 3 200 g, 3 kg = 3 000 g, 2 900 g bly dieselfde. Van swaarste na ligste: 3 200 g, 3 000 g, 2 900 g.' },

        // Blok 4: Realistiese massa skat (13-15, Medium)
        { difficulty: 'Medium', question: 'Watter een is die meer realistiese skatting vir die massa van ʼn tros druiwe: 400 g of 40 kg?', answer: '400 g', checkMode: 'auto', correctAnswer: '400g', correctAnswers: ['400g', '400 g'], explanation: 'ʼn Tros druiwe is ʼn ligte vrugitem — ongeveer 400 g is realisties. 40 kg sou swaarder wees as ʼn volwassene.' },
        { difficulty: 'Medium', question: 'ʼn Groentehandelaar weeg ʼn vol kissie tamaties. Watter een is die meer realistiese massa: 8 kg of 8 g?', answer: '8 kg', checkMode: 'auto', correctAnswer: '8kg', correctAnswers: ['8kg', '8 kg'], explanation: 'ʼn Vol kissie tamaties is swaar — ongeveer 8 kg is realisties. 8 g sou ligter wees as een druif.' },
        { difficulty: 'Medium', question: 'Palesa skat dat een wortel ʼn massa van ongeveer 500 g het. Is dit ʼn redelike skatting? Verduidelik jou redenering.', answer: 'Nee, dit is nie redelik nie. ʼn Enkele wortel het gewoonlik ʼn massa van ongeveer 50-100 g. 500 g sou so swaar wees soos vyf of meer wortels saam.', checkMode: 'self' },

        // Blok 5: Woordprobleme (16-18, Medium-Hard)
        { difficulty: 'Medium', question: 'ʼn Sak appels het ʼn massa van 1 200 g en ʼn sak pere het ʼn massa van 800 g. Wat is die totale massa van albei sakke?', answer: '2 000 g of 2 kg', checkMode: 'auto', correctAnswer: '2000g', correctAnswers: ['2000g', '2000', '2000 g', '2 000g', '2 000 g', '2kg', '2 kg'], explanation: 'Tel die massas op: 1 200 g + 800 g = 2 000 g = 2 kg.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Groentekissie het ʼn massa van 6 kg. As 2 kg 400 g groente verkoop word, watter massa bly in die kissie oor?', answer: '3 kg 600 g', checkMode: 'auto', correctAnswer: '3kg600g', correctAnswers: ['3kg600g', '3600g', '3600', '3 kg 600 g', '3kg 600g'], explanation: 'Skakel om: 6 kg = 6 000 g en 2 kg 400 g = 2 400 g. Trek af: 6 000 g − 2 400 g = 3 600 g = 3 kg 600 g.' },
        { difficulty: 'Hard', question: 'ʼn Afleweringsvragmotor vervoer 6 identiese pakkies, elk met ʼn massa van 850 g. Wat is die totale massa van al 6 pakkies, in kilogram?', answer: '5,1 kg', checkMode: 'auto', correctAnswer: '5.1kg', correctAnswers: ['5.1kg', '5.1', '5.1 kg', '5,1kg', '5,1', '5,1 kg', '5100g', '5 100 g'], explanation: 'Vermenigvuldig: 6 × 850 g = 5 100 g. Deel deur 1 000: 5 100 ÷ 1 000 = 5,1 kg.' },

        // Blok 6: Multi-stap redenasie, regverdiging & foutopsporing (19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Balansskaal het ʼn sak lemoene aan een kant. Om dit te balanseer, word twee gewigte van 250 g en een gewig van 150 g aan die ander kant geplaas. Wat is die massa van die lemoene, en wat sou daardie massa in kilogram wees?', answer: '650 g, wat 0,65 kg is. Tel die gewigte op: 250 g + 250 g + 150 g = 650 g. Deel deur 1 000: 650 ÷ 1 000 = 0,65 kg.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><polygon points="88,155 132,155 110,63" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="55" x2="110" y2="65" stroke="#0f1f3d" stroke-width="2.5"/><line x1="32" y1="55" x2="188" y2="55" stroke="#0f1f3d" stroke-width="3"/><circle cx="110" cy="55" r="4" fill="#0f1f3d"/><line x1="32" y1="55" x2="32" y2="87" stroke="#0f1f3d" stroke-width="1.8"/><line x1="188" y1="55" x2="188" y2="87" stroke="#0f1f3d" stroke-width="1.8"/><path d="M10,87 Q32,101 54,87" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M166,87 Q188,101 210,87" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M16,85 Q12,63 24,57 L40,57 Q52,63 48,85 Z" fill="#fef3c7" stroke="#0f1f3d" stroke-width="2"/><text x="32" y="75" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">?</text><text x="32" y="117" font-size="12" fill="#374151" text-anchor="middle">lemoene</text><rect x="166" y="65" width="16" height="20" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2"/><text x="174" y="79" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">250g</text><rect x="183" y="65" width="16" height="20" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2"/><text x="191" y="79" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">250g</text><rect x="200" y="71" width="14" height="14" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2"/><text x="197" y="82" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">150g</text></svg>' },
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
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die massa van ʼn stukkie kryt te meet — gram of kilogram?', answer: 'Gram', checkMode: 'auto', correctAnswer: 'g', correctAnswers: ['g', 'gram'], explanation: 'ʼn Stukkie kryt is ʼn baie ligte voorwerp. Gram (g) word vir ligte voorwerpe gebruik, want kilogram sou ʼn baie klein, ongemaklike desimaal gee.' },
        { difficulty: 'Easy', question: 'Skakel 8 kg om na gram.', answer: '8 000 g', checkMode: 'auto', correctAnswer: '8000g', correctAnswers: ['8000g', '8000', '8000 g', '8 000g', '8 000 g'], explanation: 'Om kg na g om te skakel, vermenigvuldig met 1 000: 8 × 1 000 = 8 000 g.' },
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die massa van ʼn sak rys te meet — gram of kilogram?', answer: 'Kilogram', checkMode: 'auto', correctAnswer: 'kg', correctAnswers: ['kg', 'kilogram'], explanation: 'ʼn Sak rys is swaar, dikwels verskeie kilogram. Kilogram (kg) word vir swaarder voorwerpe gebruik sodat die getalle hanteerbaar bly.' },
        { difficulty: 'Easy', question: 'Verduidelik waarom ʼn boer kilogram, nie gram nie, sou gebruik om die massa van ʼn bok te beskryf.', answer: 'ʼn Bok het ʼn massa van baie duisende gram, wat ʼn ongerieflik groot getal is om te sê of te skryf. Kilogram gee ʼn baie kleiner, makliker getal vir groot massas soos ʼn bok of ander vee.', checkMode: 'self' },

        // Blok 2: Omskakeling g <-> kg (4-8, Maklik-Medium)
        { difficulty: 'Easy', question: 'Skakel 7 000 g om na kilogram.', answer: '7 kg', checkMode: 'auto', correctAnswer: '7kg', correctAnswers: ['7kg', '7', '7 kg'], explanation: 'Deel deur 1 000: 7 000 ÷ 1 000 = 7 kg.' },
        { difficulty: 'Medium', question: 'ʼn Sak mieliemeel het ʼn massa van 4,5 kg. Skryf hierdie massa in gram.', answer: '4 500 g', checkMode: 'auto', correctAnswer: '4500g', correctAnswers: ['4500g', '4500', '4500 g', '4 500g', '4 500 g'], explanation: 'Vermenigvuldig met 1 000: 4,5 × 1 000 = 4 500 g.' },
        { difficulty: 'Medium', question: 'ʼn Boks klaskamerkryt het ʼn massa van 600 g. Skryf hierdie massa in kilogram.', answer: '0,6 kg', checkMode: 'auto', correctAnswer: '0.6kg', correctAnswers: ['0.6kg', '0.6', '0.6 kg', '0.60', '0.60kg', '0.60 kg', '0,6kg', '0,6', '0,6 kg'], explanation: 'Deel deur 1 000: 600 ÷ 1 000 = 0,6 kg.' },
        { difficulty: 'Medium', question: 'ʼn Kissie oefeningboeke het ʼn massa van 3 kg 150 g. Skryf hierdie massa slegs in gram.', answer: '3 150 g', checkMode: 'auto', correctAnswer: '3150g', correctAnswers: ['3150g', '3150', '3150 g', '3 150g', '3 150 g'], explanation: '3 kg = 3 000 g, dus 3 kg 150 g = 3 000 g + 150 g = 3 150 g.' },
        { difficulty: 'Medium', question: 'ʼn Leerder tel 1 kg en 500 g op en skryf die antwoord as "1 500" sonder ʼn eenheid. Is dit aanvaarbaar om net "1 500" te skryf? Verduidelik wat ontbreek en gee die korrekte antwoord.', answer: 'Nee, die eenheid ontbreek. Om net "1 500" te skryf sê nie of dit 1 500 g of iets anders beteken nie — eenhede moet altyd ingesluit word. Aangesien 1 kg = 1 000 g, is die korrekte totaal 1 000 g + 500 g = 1 500 g (of 1,5 kg).', checkMode: 'self' },

        // Blok 3: Massa op ʼn skaal lees & vergelyk (9-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Kombuisskaal gaan van 0 tot 1 000 g met 10 gelyke intervalle. Wat is die waarde van elke klein interval?', answer: '100 g', checkMode: 'auto', correctAnswer: '100g', correctAnswers: ['100g', '100', '100 g'], explanation: '1 000 ÷ 10 = 100 g per interval.', diagramSvg: '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg"><circle cx="115" cy="100" r="62" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.2" y1="143.8" x2="79.6" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="56.0" y1="119.2" x2="67.4" y2="115.5" stroke="#0f1f3d" stroke-width="2"/><line x1="53.8" y1="90.3" x2="65.6" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="39.9" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">200</text><line x1="64.8" y1="63.6" x2="74.5" y2="70.6" stroke="#0f1f3d" stroke-width="2"/><line x1="86.9" y1="44.8" x2="92.3" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="80.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">400</text><line x1="115.0" y1="38.0" x2="115.0" y2="50.0" stroke="#0f1f3d" stroke-width="2"/><line x1="143.1" y1="44.8" x2="137.7" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="149.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">600</text><line x1="165.2" y1="63.6" x2="155.5" y2="70.6" stroke="#0f1f3d" stroke-width="2"/><line x1="176.2" y1="90.3" x2="164.4" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="190.1" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">800</text><line x1="174.0" y1="119.2" x2="162.6" y2="115.5" stroke="#0f1f3d" stroke-width="2"/><line x1="158.8" y1="143.8" x2="150.4" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">1000 g</text></svg>' },
        { difficulty: 'Medium', question: 'Op dieselfde skaal wys die wyser na die merk net voor 1 000 g. Watter massa toon dit?', answer: '900 g', checkMode: 'auto', correctAnswer: '900g', correctAnswers: ['900g', '900', '900 g'], explanation: 'Elke interval is 100 g werd. Die merk net voor 1 000 g is 1 000 − 100 = 900 g.', diagramSvg: '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg"><circle cx="115" cy="100" r="62" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.2" y1="143.8" x2="79.6" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="56.0" y1="119.2" x2="67.4" y2="115.5" stroke="#0f1f3d" stroke-width="2"/><line x1="53.8" y1="90.3" x2="65.6" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="39.9" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">200</text><line x1="64.8" y1="63.6" x2="74.5" y2="70.6" stroke="#0f1f3d" stroke-width="2"/><line x1="86.9" y1="44.8" x2="92.3" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="80.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">400</text><line x1="115.0" y1="38.0" x2="115.0" y2="50.0" stroke="#0f1f3d" stroke-width="2"/><line x1="143.1" y1="44.8" x2="137.7" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="149.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">600</text><line x1="165.2" y1="63.6" x2="155.5" y2="70.6" stroke="#0f1f3d" stroke-width="2"/><line x1="176.2" y1="90.3" x2="164.4" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="190.1" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">800</text><line x1="174.0" y1="119.2" x2="162.6" y2="115.5" stroke="#0f1f3d" stroke-width="2"/><line x1="158.8" y1="143.8" x2="150.4" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">1000 g</text><line x1="115" y1="100" x2="156.8" y2="113.6" stroke="#dc2626" stroke-width="3"/><circle cx="115" cy="100" r="4" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Watter een is swaarder: 2,05 kg of 2 500 g?', answer: '2 500 g', checkMode: 'auto', correctAnswer: '2500g', correctAnswers: ['2500g', '2500 g', '2 500g', '2 500 g'], explanation: '2,05 kg = 2 050 g. Aangesien 2 500 g > 2 050 g, is 2 500 g swaarder.' },
        { difficulty: 'Medium', question: 'Rangskik hierdie sak-massas van ligste na swaarste: 5 kg, 4 800 g, 5,2 kg.', answer: '4 800 g, 5 kg, 5,2 kg', checkMode: 'auto', correctAnswer: '4800g, 5kg, 5.2kg', correctAnswers: ['4800g, 5kg, 5.2kg', '4 800 g, 5 kg, 5.2 kg', '4800g,5kg,5.2kg', '4800g, 5kg, 5,2kg', '4 800 g, 5 kg, 5,2 kg'], explanation: 'Skakel om na gram: 5 kg = 5 000 g, 5,2 kg = 5 200 g, 4 800 g bly dieselfde. Van ligste na swaarste: 4 800 g, 5 000 g, 5 200 g.' },

        // Blok 4: Realistiese massa skat (13-15, Medium)
        { difficulty: 'Medium', question: 'Watter een is die meer realistiese skatting vir die massa van ʼn sak rys wat by ʼn markstalletjie verkoop word: 2 kg of 2 g?', answer: '2 kg', checkMode: 'auto', correctAnswer: '2kg', correctAnswers: ['2kg', '2 kg'], explanation: 'ʼn Klein sakkie rys wat verkoop word, is ʼn redelik swaar kruidenieritem — ongeveer 2 kg is realisties. 2 g sou ligter wees as twee skuifspelde.' },
        { difficulty: 'Medium', question: 'ʼn Boer weeg ʼn jong bokkie. Watter een is die meer realistiese massa: 15 kg of 150 g?', answer: '15 kg', checkMode: 'auto', correctAnswer: '15kg', correctAnswers: ['15kg', '15 kg'], explanation: 'ʼn Jong bokkie is ʼn redelik groot dier — ongeveer 15 kg is realisties. 150 g sou ligter wees as ʼn snytjie brood.' },
        { difficulty: 'Medium', question: 'Boitumelo skat dat ʼn vol kissie oefeningboeke ʼn massa van ongeveer 500 g het. Is dit ʼn redelike skatting? Verduidelik jou redenering.', answer: 'Nee, dit is nie redelik nie. ʼn Vol kissie oefeningboeke het gewoonlik ʼn massa van etlike kilogram, nie ʼn paar honderd gram nie. 500 g sou ligter wees as een enkele brood, wat veels te lig is vir ʼn vol kissie boeke.', checkMode: 'self' },

        // Blok 5: Woordprobleme (16-18, Medium-Hard)
        { difficulty: 'Medium', question: 'ʼn Winkelier het ʼn sak rys van 5 kg en verkoop 1 kg 250 g daarvan aan ʼn kliënt. Hoeveel rys bly oor?', answer: '3 kg 750 g', checkMode: 'auto', correctAnswer: '3kg750g', correctAnswers: ['3kg750g', '3750g', '3750', '3 kg 750 g', '3kg 750g'], explanation: 'Skakel om: 5 kg = 5 000 g. Trek af: 5 000 g − 1 250 g = 3 750 g = 3 kg 750 g.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Klaskamer stoor 4 identiese kissies oefeningboeke, elk met ʼn massa van 6 kg 500 g. Wat is die totale massa van al 4 kissies?', answer: '26 kg', checkMode: 'auto', correctAnswer: '26kg', correctAnswers: ['26kg', '26', '26 kg', '26000g', '26 000 g'], explanation: 'Vermenigvuldig: 6 kg 500 g = 6 500 g. 6 500 g × 4 = 26 000 g = 26 kg.' },
        { difficulty: 'Hard', question: 'ʼn Handelaar het 18 kg meel om in sakkies van 750 g elk vir die mark te pak. Hoeveel volle sakkies kan sy maak?', answer: '24 sakkies', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 sakkies'], explanation: 'Skakel om: 18 kg = 18 000 g. Deel: 18 000 g ÷ 750 g = 24 sakkies.' },

        // Blok 6: Multi-stap redenasie, regverdiging & foutopsporing (19, Moeilik)
        { difficulty: 'Hard', question: 'Verduidelik waarom jy twee massas na dieselfde eenheid moet omskakel voordat jy hulle optel of aftrek, met 2 kg en 500 g as jou voorbeeld.', answer: 'As massas in verskillende eenhede is, verteenwoordig die syfers nie dieselfde grootte eenheid nie, dus gee dit ʼn betekenislose resultaat om hulle direk op te tel of af te trek — byvoorbeeld "2 + 500 = 502" is verkeerd. Jy moet eers albei na dieselfde eenheid omskakel: 2 kg = 2 000 g, dus 2 kg + 500 g = 2 000 g + 500 g = 2 500 g. Om eers om te skakel verseker dat die berekening gelyke eenhede vergelyk.', checkMode: 'self' },
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
