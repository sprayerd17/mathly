import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Lengte',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — LENGTE-EENHEDE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'units-of-length',
      title: 'Lengte-eenhede',
      icon: '📏',
      explanation: `
<p style="margin-bottom:14px;"><strong>Lengte</strong> vertel ons <strong>hoe lank of hoog iets is</strong>, of <strong>hoe ver twee punte uitmekaar is</strong>. Ons meet lengte deur standaard-eenhede te gebruik sodat almal dieselfde resultaat kry. Deur die regte eenheid te kies, word meet baie makliker — ons sou nie die afstand tussen twee stede in millimeter meet nie!</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Die vier lengte-eenhede</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Millimeter<br/><span style="font-weight:400;font-size:12px;">(mm)</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Baie klein lengtes.</strong> ʼn Millimeter is omtrent so dik soos ʼn muntstuk of ʼn vingernael. Daar is <strong>10 mm in 1 cm</strong>. Gebruik mm wanneer jy baie klein dinge meet, soos die dikte van ʼn potloodlyn of ʼn klein insek.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Sentimeter<br/><span style="font-weight:400;font-size:12px;">(cm)</span></span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong>Klein lengtes.</strong> ʼn Sentimeter is omtrent so breed soos jou pinkie. Gebruik cm wanneer jy ʼn potlood, jou handspan, ʼn boek of ʼn stuk papier meet. Daar is <strong>100 cm in 1 m</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Meter<br/><span style="font-weight:400;font-size:12px;">(m)</span></span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong>Medium lengtes.</strong> ʼn Meter is ongeveer so hoog soos ʼn kombuistoonbank of so breed soos ʼn deur. Gebruik m wanneer jy ʼn kamer, ʼn heining of die hoogte van ʼn gebou meet. Daar is <strong>1 000 m in 1 km</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Kilometer<br/><span style="font-weight:400;font-size:12px;">(km)</span></span>
      <span style="color:#7c2d12;font-size:15px;padding-top:2px;"><strong>Baie lang afstande.</strong> ʼn Kilometer is omtrent die afstand wat jy in 10–12 minute kan loop. Gebruik km wanneer jy die afstand tussen dorpe, stede of langs ʼn pad meet.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Omskakelingsfeite 🔢</span>
  <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:10px;">
    <span style="background:#1e40af;color:#fff;border-radius:8px;padding:6px 16px;font-weight:700;font-size:15px;">10 mm = 1 cm</span>
    <span style="background:#16a34a;color:#fff;border-radius:8px;padding:6px 16px;font-weight:700;font-size:15px;">100 cm = 1 m</span>
    <span style="background:#dc2626;color:#fff;border-radius:8px;padding:6px 16px;font-weight:700;font-size:15px;">1 000 m = 1 km</span>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Kies die regte eenheid</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Eenheid</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Gebruik wanneer jy meet …</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Voorbeelde uit die werklike lewe</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">mm</td>
          <td style="padding:8px 14px;color:#475569;">Baie klein dinge</td>
          <td style="padding:8px 14px;color:#475569;">Dikte van ʼn muntstuk, breedte van ʼn vingernael</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">cm</td>
          <td style="padding:8px 14px;color:#475569;">Klein dinge</td>
          <td style="padding:8px 14px;color:#475569;">Lengte van ʼn potlood, breedte van jou hand</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:700;color:#dc2626;">m</td>
          <td style="padding:8px 14px;color:#475569;">Kamers en geboue</td>
          <td style="padding:8px 14px;color:#475569;">Hoogte van ʼn deur, breedte van ʼn klaskamer</td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#ea580c;">km</td>
          <td style="padding:8px 14px;color:#475569;">Lang afstande</td>
          <td style="padding:8px 14px;color:#475569;">Afstand tussen twee dorpe, lengte van ʼn pad</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Watter eenheid sou jy gebruik om die lengte van jou klaskamer te meet?',
          steps: [
            'ʼn Klaskamer is ʼn <strong>medium-grootte</strong> ruimte — jy kan in ʼn paar treë daaroor stap.',
            'Dit is <strong>te groot</strong> vir sentimeter (jy sou ʼn baie groot getal kry) en <strong>te klein</strong> vir kilometer.',
            '<strong style="color:#dc2626;">Meter (m)</strong> is die regte keuse om kamers en geboue te meet.',
          ],
          answer: 'Meter (m). ʼn Klaskamer word die beste in meter gemeet.',
        },
        {
          question:
            'Watter eenheid sou jy gebruik om die afstand van Kaapstad na Johannesburg te meet?',
          steps: [
            'Kaapstad na Johannesburg is ʼn <strong>baie lang afstand</strong> — dit neem ure om te ry.',
            'As ons meter gebruik, sal ons ʼn enorme getal kry (ongeveer 1 400 000 m), dus gebruik ons ʼn groter eenheid.',
            '<strong style="color:#ea580c;">Kilometer (km)</strong> word gebruik vir lang afstande tussen dorpe en stede.',
          ],
          answer: 'Kilometer (km). Die afstand tussen twee stede word in kilometer gemeet.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Vier voorwerpe getoon met hul metings — ʼn muntstuk gemerk in mm, ʼn potlood gemerk in cm, ʼn deur gemerk in m en ʼn padteken gemerk in km',
      videoPlaceholder:
        'Kort video wat die vier lengte-eenhede verduidelik met voorbeelde uit die werklike lewe van wanneer om elkeen te gebruik',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — SKAT EN MEET LENGTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating-measuring-length',
      title: 'Skat en Meet Lengte',
      icon: '📐',
      explanation: `
<p style="margin-bottom:14px;"><strong>Skat</strong> beteken om ʼn <strong>versigtige raaiskoot</strong> te maak voordat jy meet. ʼn Goeie skatting is nie net ʼn lukrake raaiskoot nie — dit gebruik iets wat jy reeds weet as ʼn <strong>verwysingspunt</strong>. Nadat jy geskat het, meet jy om die <strong>werklike meting</strong> te vind.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Nuttige verwysingslengtes om te onthou</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 1 cm</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Jou <strong>pinkie</strong> is omtrent <strong>1 cm</strong> breed — gebruik dit om klein lengtes te skat.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 30 cm</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">ʼn Standaard <strong>liniaal</strong> is <strong>30 cm</strong> lank — gebruik dit om lengtes tot ongeveer 30 cm voor te stel.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 2 m</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">ʼn <strong>Klaskamerdeur</strong> is omtrent <strong>2 m</strong> hoog — gebruik dit om medium lengtes in meter te skat.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 20 m</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">ʼn <strong>Krieketbaan</strong> is omtrent <strong>20 m</strong> lank — gebruik dit om langer afstande te skat.</span>
    </div>

  </div>
</div>

<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#c2410c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Skatting vs werklike meting</div>
  <div style="display:flex;flex-wrap:wrap;gap:10px;">
    <div style="background:#fff;border:1.5px solid #fdba74;border-radius:8px;padding:10px 16px;flex:1;min-width:180px;">
      <div style="font-size:12px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px;">Skatting</div>
      <div style="color:#7c2d12;font-size:14px;">Jou versigtige raaiskoot <em>voordat</em> jy meet. Geskryf as <strong style="color:#ea580c;">≈ 18 cm</strong> (die ≈-simbool beteken "ongeveer").</div>
    </div>
    <div style="background:#fff;border:1.5px solid #bfdbfe;border-radius:8px;padding:10px 16px;flex:1;min-width:180px;">
      <div style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px;">Werklike meting</div>
      <div style="color:#1e3a8a;font-size:14px;">Die presiese lengte wat deur meting gevind is. Geskryf as <strong style="color:#1e40af;">= 17 cm</strong>.</div>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Hoe om met ʼn liniaal te meet</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;">Plaas die <strong>nulmerk</strong> van die liniaal aan een punt van die voorwerp.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;">Lees die meting aan die <strong>ander punt</strong> van die voorwerp.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;"><strong>Skryf</strong> die meting neer met die korrekte eenheid (bv. 17 cm, nie net 17 nie).</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Skat en meet dan ʼn potlood.',
          steps: [
            '<strong style="color:#ea580c;">Skat eers:</strong> ʼn Potlood lyk omtrent so lank soos ʼn liniaal. ʼn Liniaal is 30 cm, maar ʼn potlood is ʼn bietjie korter — <strong style="color:#ea580c;">skat ≈ 18 cm</strong>.',
            '<strong>Meet met ʼn liniaal:</strong> Plaas die nulmerk van die liniaal aan een punt van die potlood.',
            'Lees die meting aan die ander punt van die potlood.',
            '<strong style="color:#1e40af;">Werklike meting = 17 cm.</strong>',
            'Vergelyk: die skatting was 18 cm en die werklike lengte is 17 cm — <strong>die skatting was naby</strong>, slegs 1 cm verkeerd.',
          ],
          answer: 'Die potlood meet 17 cm. Die skatting van 18 cm was naby.',
        },
        {
          question: 'Skat die hoogte van ʼn klaskamerdeur.',
          steps: [
            '<strong style="color:#ea580c;">Dink aan ʼn verwysing:</strong> ʼn Volwassene is omtrent 1,7 m lank.',
            'ʼn Deur is hoër as die meeste volwassenes — dit moet hoog genoeg wees sodat mense maklik kan deurloop.',
            '<strong style="color:#ea580c;">Skat ≈ 2 m</strong> — ʼn bietjie hoër as ʼn volwasse persoon.',
            'ʼn Standaard klaskamerdeur is <strong style="color:#1e40af;">omtrent 2 m hoog</strong>.',
          ],
          answer: 'ʼn Standaard klaskamerdeur is omtrent 2 m hoog. Die skatting van 2 m was korrek.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'ʼn Liniaal wat sentimetermerke toon met ʼn potlood daarlangs geplaas van nul tot 17 cm duidelik gemerk',
      videoPlaceholder:
        'Kort video wat wys hoe om ʼn liniaal korrek te plaas om ʼn voorwerp te meet en die meting akkuraat te lees',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — OMSKAKELING TUSSEN LENGTE-EENHEDE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-units-of-length',
      title: 'Omskakeling Tussen Lengte-eenhede',
      icon: '🔄',
      explanation: `
<p style="margin-bottom:14px;"><strong>Omskakel</strong> beteken om ʼn meting van <strong>een eenheid na ʼn ander</strong> te verander. Die hoeveelheid bly dieselfde — slegs die eenheid en die getal verander. Byvoorbeeld, 100 cm en 1 m is presies dieselfde lengte, net anders geskryf.</p>

<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Geheue-wenk 💡</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="color:#7f1d1d;font-size:15px;">Na ʼn <strong>kleiner eenheid</strong> toe (bv. m → cm) → <strong style="color:#dc2626;">vermenigvuldig</strong> → die getal word <strong>groter</strong>.</div>
    <div style="color:#7f1d1d;font-size:15px;">Na ʼn <strong>groter eenheid</strong> toe (bv. cm → m) → <strong style="color:#dc2626;">deel</strong> → die getal word <strong>kleiner</strong>.</div>
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
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">mm</td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">cm</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#dc2626;">÷ 10</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">30 mm</span> = <span style="color:#16a34a;font-weight:700;">3 cm</span></td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">cm</td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">mm</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#dc2626;">× 10</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">5 cm</span> = <span style="color:#16a34a;font-weight:700;">50 mm</span></td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">cm</td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">m</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#dc2626;">÷ 100</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">200 cm</span> = <span style="color:#16a34a;font-weight:700;">2 m</span></td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">m</td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">cm</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#dc2626;">× 100</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">4 m</span> = <span style="color:#16a34a;font-weight:700;">400 cm</span></td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">m</td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">km</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#dc2626;">÷ 1 000</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">3 000 m</span> = <span style="color:#16a34a;font-weight:700;">3 km</span></td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">km</td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">m</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#dc2626;">× 1 000</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">2 km</span> = <span style="color:#16a34a;font-weight:700;">2 000 m</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Skakel 45 mm om na cm.',
          steps: [
            'Om van <strong style="color:#1e40af;">mm</strong> na <strong style="color:#16a34a;">cm</strong> te gaan — <strong style="color:#dc2626;">deel deur 10</strong> (na ʼn groter eenheid toe, dus word die getal kleiner).',
            '<strong style="color:#1e40af;">45</strong> ÷ <strong style="color:#dc2626;">10</strong> = <strong style="color:#16a34a;">4,5</strong>',
          ],
          answer: '45 mm = 4,5 cm',
        },
        {
          question: 'Skakel 3 m om na cm.',
          steps: [
            'Om van <strong style="color:#1e40af;">m</strong> na <strong style="color:#16a34a;">cm</strong> te gaan — <strong style="color:#dc2626;">vermenigvuldig met 100</strong> (na ʼn kleiner eenheid toe, dus word die getal groter).',
            '<strong style="color:#1e40af;">3</strong> × <strong style="color:#dc2626;">100</strong> = <strong style="color:#16a34a;">300</strong>',
          ],
          answer: '3 m = 300 cm',
        },
        {
          question: 'Skakel 2 500 m om na km.',
          steps: [
            'Om van <strong style="color:#1e40af;">m</strong> na <strong style="color:#16a34a;">km</strong> te gaan — <strong style="color:#dc2626;">deel deur 1 000</strong> (na ʼn groter eenheid toe, dus word die getal kleiner).',
            '<strong style="color:#1e40af;">2 500</strong> ÷ <strong style="color:#dc2626;">1 000</strong> = <strong style="color:#16a34a;">2,5</strong>',
          ],
          answer: '2 500 m = 2,5 km',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'ʼn Omskakelingsleer wat mm, cm, m, km van onder na bo toon met vermenigvuldig-pyle wat afgaan en deel-pyle wat opgaan en die omskakelingsfaktore gemerk',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — BEREKEN MET LENGTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-with-length',
      title: 'Bereken met Lengte',
      icon: '➕',
      explanation: `
<p style="margin-bottom:14px;">Ons kan lengtes <strong>optel</strong> en <strong>aftrek</strong> om probleme op te los. Voordat jy bereken, maak altyd seker dat albei lengtes in <strong>dieselfde eenheid</strong> is. As dit nie so is nie, skakel eers een van hulle om.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Hoe om gemengde lengtes (m en cm) op te tel en af te trek</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;">Werk <strong>eers met die sentimeter</strong> — tel of trek die cm-waardes op of af.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;">Werk <strong>dan met die meter</strong> — tel of trek die m-waardes op of af.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;">As die cm-totaal <strong>100 of meer</strong> is, skakel om — elke 100 cm word 1 m.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;">As jy meer cm moet aftrek as wat jy het, <strong>leen 1 m</strong> (= 100 cm) van die meter-kolom.</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Tel 2 m 45 cm en 1 m 30 cm op.',
          steps: [
            'Tel die sentimeter op: <strong style="color:#1e40af;">45 cm</strong> + <strong style="color:#16a34a;">30 cm</strong> = <strong style="color:#dc2626;">75 cm</strong>',
            'Tel die meter op: <strong style="color:#1e40af;">2 m</strong> + <strong style="color:#16a34a;">1 m</strong> = <strong style="color:#dc2626;">3 m</strong>',
            '75 cm is minder as 100, dus is geen omskakeling nodig nie.',
          ],
          answer: '2 m 45 cm + 1 m 30 cm = 3 m 75 cm',
        },
        {
          question: 'Trek 1 m 20 cm af van 3 m 50 cm.',
          steps: [
            'Trek die sentimeter af: <strong style="color:#1e40af;">50 cm</strong> − <strong style="color:#16a34a;">20 cm</strong> = <strong style="color:#dc2626;">30 cm</strong>',
            'Trek die meter af: <strong style="color:#1e40af;">3 m</strong> − <strong style="color:#16a34a;">1 m</strong> = <strong style="color:#dc2626;">2 m</strong>',
          ],
          answer: '3 m 50 cm − 1 m 20 cm = 2 m 30 cm',
        },
        {
          question: 'ʼn Stuk tou is 5 m lank. Thabo sny 1 m 75 cm af. Hoeveel tou is oor?',
          steps: [
            'Skryf 5 m as <strong style="color:#1e40af;">5 m 00 cm</strong> sodat albei lengtes in dieselfde formaat is.',
            'Probeer cm aftrek: 00 cm − 75 cm — ons kan dit nie doen nie, dus moet ons leen.',
            'Leen 1 m van die meter-kolom: <strong style="color:#1e40af;">4 m 100 cm</strong> − <strong style="color:#16a34a;">1 m 75 cm</strong>',
            'Trek cm af: 100 − 75 = <strong style="color:#dc2626;">25 cm</strong>',
            'Trek m af: 4 − 1 = <strong style="color:#dc2626;">3 m</strong>',
          ],
          answer: '3 m 25 cm tou is oor.',
        },
      ],
      practiceQuestions: [],
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — WOORDPROBLEME MET LENGTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'length-word-problems',
      title: 'Woordprobleme met Lengte',
      icon: '📝',
      explanation: `
<p style="margin-bottom:14px;">Woordprobleme oor lengte vra jou om meetvaardighede te gebruik om werklike-lewe-situasies op te los. Voordat jy bereken, <strong>lees die vraag versigtig</strong> en soek na <strong>sleutelwoorde</strong> wat jou vertel watter bewerking om te gebruik.</p>

<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#c2410c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Sleutelwoorde om na te soek</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">

    <div style="background:#fff;border:1.5px solid #bfdbfe;border-radius:8px;padding:10px 16px;flex:1;min-width:200px;">
      <div style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;">Optelling ➕</div>
      <div style="display:flex;flex-direction:column;gap:4px;">
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">totale lengte</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">altesaam</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">gekombineer</strong></span>
      </div>
    </div>

    <div style="background:#fff;border:1.5px solid #bfdbfe;border-radius:8px;padding:10px 16px;flex:1;min-width:200px;">
      <div style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;">Aftrekking ➖</div>
      <div style="display:flex;flex-direction:column;gap:4px;">
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">verskil</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">hoeveel langer / korter</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">oorblywend</strong></span>
      </div>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Stappe om ʼn woordprobleem op te los</div>
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
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Maak seker die eenhede stem ooreen</strong> — skakel om indien nodig.</span>
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
            'ʼn Tuinpad is 12 m 50 cm lank. ʼn Ander pad is 8 m 75 cm lank. Wat is die totale lengte van albei paaie?',
          steps: [
            'Sleutelwoord: <strong style="color:#ea580c;">totaal</strong> — dit beteken <strong>optelling</strong>.',
            'Tel op: <strong style="color:#1e40af;">12 m 50 cm</strong> + <strong style="color:#16a34a;">8 m 75 cm</strong>',
            'Tel die cm op: 50 + 75 = 125 cm. Aangesien 125 ≥ 100, skakel om: 125 cm = 1 m 25 cm.',
            'Tel die m op: 12 + 8 + 1 (oorgedra) = <strong style="color:#dc2626;">21 m</strong>',
            'Oorblywende cm: <strong style="color:#dc2626;">25 cm</strong>',
          ],
          answer: 'Die totale lengte van albei paaie is 21 m 25 cm.',
        },
        {
          question:
            'Lerato hardloop 3 km 500 m. Sipho hardloop 2 km 750 m. Hoeveel verder hardloop Lerato?',
          steps: [
            'Sleutelwoord: <strong style="color:#ea580c;">hoeveel verder</strong> — dit beteken <strong>aftrekking</strong>.',
            'Trek af: <strong style="color:#1e40af;">3 km 500 m</strong> − <strong style="color:#16a34a;">2 km 750 m</strong>',
            'Probeer m aftrek: 500 m − 750 m — ons kan dit nie doen nie, dus moet ons leen.',
            'Leen 1 km: <strong style="color:#1e40af;">2 km 1 500 m</strong> − <strong style="color:#16a34a;">2 km 750 m</strong>',
            'Trek m af: 1 500 − 750 = <strong style="color:#dc2626;">750 m</strong>',
            'Trek km af: 2 − 2 = <strong style="color:#dc2626;">0 km</strong>',
          ],
          answer: 'Lerato hardloop 750 m verder as Sipho.',
        },
      ],
      practiceQuestions: [],
      videoPlaceholder:
        'Kort video wat wys hoe om woordprobleme oor lengte op te los deur sleutelwoorde te identifiseer en die korrekte bewerking te kies',
    },
  ],
  topicPractice: [

    // ── AFDELING 1 — Lengte-eenhede ───────────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Watter eenheid sou jy gebruik om elk van die volgende te meet?',
      checkMode: 'auto',
      answer: 'a) Millimeter (mm)   b) Meter (m)   c) Kilometer (km)',
      parts: [
        {
          label: 'a) Die lengte van jou vingernael',
          correctAnswer: 'mm',
          correctAnswers: ['mm', 'millimeter', 'millimeters'],
          explanation: 'ʼn Vingernael is ʼn baie klein lengte — millimeter (mm) word gebruik vir baie klein metings soos die dikte van ʼn muntstuk of ʼn vingernael.',
        },
        {
          label: 'b) Die hoogte van ʼn deur',
          correctAnswer: 'm',
          correctAnswers: ['m', 'meter', 'meters'],
          explanation: 'ʼn Deur is ʼn medium-lengte (omtrent 2 m hoog) — meter (m) word gebruik vir kamers, deure en geboue.',
        },
        {
          label: 'c) Die afstand van Durban na Kaapstad',
          correctAnswer: 'km',
          correctAnswers: ['km', 'kilometer', 'kilometers'],
          explanation: 'Durban na Kaapstad is ʼn baie lang afstand — kilometer (km) word gebruik vir afstande tussen dorpe en stede.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question: 'Skryf die korrekte omskakelingsfeite.',
      checkMode: 'auto',
      answer: 'a) 10   b) 100   c) 1 000',
      parts: [
        {
          label: 'a) Hoeveel mm is in 1 cm?',
          correctAnswer: '10',
          correctAnswers: ['10', 'tien'],
          explanation: 'Daar is 10 mm in 1 cm. Om cm na mm om te skakel, vermenigvuldig jy met 10, en om mm na cm om te skakel, deel jy deur 10.',
        },
        {
          label: 'b) Hoeveel cm is in 1 m?',
          correctAnswer: '100',
          correctAnswers: ['100', 'een honderd', 'honderd'],
          explanation: 'Daar is 100 cm in 1 m. Om m na cm om te skakel, vermenigvuldig jy met 100, en om cm na m om te skakel, deel jy deur 100.',
        },
        {
          label: 'c) Hoeveel m is in 1 km?',
          correctAnswer: '1000',
          correctAnswers: ['1000', '1 000', 'een duisend', 'duisend'],
          explanation: 'Daar is 1 000 m in 1 km. Om km na m om te skakel, vermenigvuldig jy met 1 000, en om m na km om te skakel, deel jy deur 1 000.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'Thabo sê ʼn klaskamer is omtrent 8 mm breed. Lerato sê dit is omtrent 8 m breed. Wie is korrek en waarom?',
      checkMode: 'self',
      answer: 'Lerato is korrek. ʼn Klaskamer is ʼn groot ruimte en word in meter gemeet. 8 mm is kleiner as 1 cm, wat veels te klein is vir ʼn klaskamer. 8 m is ʼn realistiese breedte vir ʼn klaskamer.',
    },

    // ── AFDELING 2 — Skat en Meet Lengte ───────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'ʼn Potlood word met ʼn liniaal gemeet. Die nulmerk word aan een punt geplaas en die meting aan die ander punt lees 16. Wat is die lengte van die potlood in cm?',
      checkMode: 'auto',
      answer: '16 cm',
      correctAnswer: '16cm',
      correctAnswers: ['16cm', '16'],
      explanation: 'Wanneer die liniaal 16 lees met die nul aan een punt, is die potlood 16 cm lank. Sluit altyd die eenheid in — die antwoord is 16 cm.',
    },

    {
      difficulty: 'Medium',
      question: 'Skryf vir elke voorwerp of jy dit met ʼn liniaal of ʼn meetlint sou meet. Gee ʼn redelike skatting van sy lengte.',
      checkMode: 'self',
      answer: 'a) Liniaal — ʼn boek is omtrent 20 cm breed (enige skatting tussen 15 cm en 30 cm is redelik)   b) Meetlint — ʼn swembad is omtrent 25 m lank (enige skatting tussen 15 m en 50 m is redelik)',
    },

    {
      difficulty: 'Hard',
      question: 'ʼn Leerder meet ʼn tafel en kry 120. ʼn Ander leerder meet dieselfde tafel en kry 1 m 20 cm.',
      checkMode: 'auto',
      answer: 'a) Ja   b) Sentimeter (cm)   c) 1 200 mm',
      parts: [
        {
          label: 'a) Is hierdie twee metings dieselfde lengte?',
          correctAnswer: 'ja',
          correctAnswers: ['ja', 'Ja', 'hulleisdieselfde', 'dieselfde'],
          explanation: '120 cm = 1 m 20 cm. Hulle is presies dieselfde lengte, net op verskillende maniere geskryf.',
        },
        {
          label: 'b) Watter eenheid het die eerste leerder gebruik?',
          correctAnswer: 'cm',
          correctAnswers: ['cm', 'sentimeter', 'sentimeters'],
          explanation: 'Die eerste leerder het 120 sonder ʼn eenheidsetiket geskryf, maar aangesien 120 cm = 1 m 20 cm, moet die eenheid sentimeter (cm) wees.',
        },
        {
          label: 'c) Wat sou die meting in mm wees?',
          correctAnswer: '1200mm',
          correctAnswers: ['1200mm', '1200', '1 200mm', '1200 mm', '1200millimeter', '1200millimeters'],
          explanation: 'Om cm na mm om te skakel, vermenigvuldig met 10. 120 cm × 10 = 1 200 mm.',
        },
      ],
    },

    // ── AFDELING 3 — Omskakeling Tussen Lengte-eenhede ────────────────────────

    {
      difficulty: 'Easy',
      question: 'Skakel die volgende om.',
      checkMode: 'auto',
      answer: 'a) 3 cm   b) 40 mm',
      parts: [
        {
          label: 'a) 30 mm = ___ cm',
          correctAnswer: '3cm',
          correctAnswers: ['3cm', '3', '3 cm'],
          explanation: 'Om mm na cm om te skakel, deel deur 10. 30 ÷ 10 = 3 cm.',
        },
        {
          label: 'b) 4 cm = ___ mm',
          correctAnswer: '40mm',
          correctAnswers: ['40mm', '40', '40 mm'],
          explanation: 'Om cm na mm om te skakel, vermenigvuldig met 10. 4 × 10 = 40 mm.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question: 'Skakel die volgende om.',
      checkMode: 'auto',
      answer: 'a) 2,5 m   b) 300 cm   c) 4,5 km   d) 2 000 m',
      parts: [
        {
          label: 'a) 250 cm = ___ m',
          correctAnswer: '2.5m',
          correctAnswers: ['2.5m', '2.5', '2.5 m', '2,5m', '2,5'],
          explanation: 'Om cm na m om te skakel, deel deur 100. 250 ÷ 100 = 2,5 m.',
        },
        {
          label: 'b) 3 m = ___ cm',
          correctAnswer: '300cm',
          correctAnswers: ['300cm', '300', '300 cm'],
          explanation: 'Om m na cm om te skakel, vermenigvuldig met 100. 3 × 100 = 300 cm.',
        },
        {
          label: 'c) 4 500 m = ___ km',
          correctAnswer: '4.5km',
          correctAnswers: ['4.5km', '4.5', '4.5 km', '4,5km', '4,5'],
          explanation: 'Om m na km om te skakel, deel deur 1 000. 4 500 ÷ 1 000 = 4,5 km.',
        },
        {
          label: 'd) 2 km = ___ m',
          correctAnswer: '2000m',
          correctAnswers: ['2000m', '2000', '2 000m', '2000 m', '2 000 m'],
          explanation: 'Om km na m om te skakel, vermenigvuldig met 1 000. 2 × 1 000 = 2 000 m.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'Sipho sê 3 500 cm is meer as 3 km. Is hy korrek? Wys jou werk deur albei metings na dieselfde eenheid om te skakel.',
      checkMode: 'self',
      answer: 'Nee, Sipho is verkeerd. Skakel albei na meter om: 3 500 cm ÷ 100 = 35 m. 3 km × 1 000 = 3 000 m. Aangesien 35 m baie minder as 3 000 m is, is 3 500 cm veels kleiner as 3 km.',
    },

    // ── AFDELING 4 — Bereken met Lengte ──────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Tel die volgende lengtes op: 1 m 30 cm + 2 m 45 cm',
      checkMode: 'auto',
      answer: '3 m 75 cm',
      correctAnswer: '3m75cm',
      correctAnswers: ['3m75cm', '3 m75cm', '375cm', '375'],
      explanation: 'Tel die cm op: 30 + 45 = 75 cm. Tel die m op: 1 + 2 = 3 m. Antwoord: 3 m 75 cm.',
    },

    {
      difficulty: 'Medium',
      question: 'Bereken die volgende.',
      checkMode: 'auto',
      answer: 'a) 7 m 15 cm   b) 3 m 15 cm   c) 1 m 65 cm',
      parts: [
        {
          label: 'a) 4 m 60 cm + 2 m 55 cm',
          correctAnswer: '7m15cm',
          correctAnswers: ['7m15cm', '715cm', '7 m 15 cm', '7m 15cm'],
          explanation: 'Tel cm op: 60 + 55 = 115 cm = 1 m 15 cm. Tel m op: 4 + 2 + 1 (oorgedra) = 7 m. Antwoord: 7 m 15 cm.',
        },
        {
          label: 'b) 5 m 30 cm − 2 m 15 cm',
          correctAnswer: '3m15cm',
          correctAnswers: ['3m15cm', '315cm', '3 m 15 cm', '3m 15cm'],
          explanation: 'Trek cm af: 30 − 15 = 15 cm. Trek m af: 5 − 2 = 3 m. Antwoord: 3 m 15 cm.',
        },
        {
          label: 'c) 3 m 10 cm − 1 m 45 cm',
          correctAnswer: '1m65cm',
          correctAnswers: ['1m65cm', '165cm', '1 m 65 cm', '1m 65cm'],
          explanation: 'Ons kan nie 45 van 10 aftrek nie, dus leen ons 1 m: 2 m 110 cm − 1 m 45 cm. Trek cm af: 110 − 45 = 65 cm. Trek m af: 2 − 1 = 1 m. Antwoord: 1 m 65 cm.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'ʼn Bouer het ʼn plank hout wat 6 m lank is. Hy sny twee stukke af — een wat 1 m 75 cm is en ʼn ander wat 2 m 40 cm is.',
      checkMode: 'auto',
      answer: 'a) 4 m 15 cm   b) 1 m 85 cm',
      parts: [
        {
          label: 'a) Wat is die totale lengte van die twee stukke wat afgesny is?',
          correctAnswer: '4m15cm',
          correctAnswers: ['4m15cm', '415cm', '4 m 15 cm', '4m 15cm'],
          explanation: 'Tel die twee stukke op: 1 m 75 cm + 2 m 40 cm. Tel cm op: 75 + 40 = 115 cm = 1 m 15 cm. Tel m op: 1 + 2 + 1 (oorgedra) = 4 m. Totaal afgesny: 4 m 15 cm.',
        },
        {
          label: 'b) Hoeveel hout is oor?',
          correctAnswer: '1m85cm',
          correctAnswers: ['1m85cm', '185cm', '1 m 85 cm', '1m 85cm'],
          explanation: '6 m − 4 m 15 cm. Skryf 6 m as 5 m 100 cm (leen 1 m). Trek cm af: 100 − 15 = 85 cm. Trek m af: 5 − 4 = 1 m. Hout oor: 1 m 85 cm.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'ʼn Bouer het ʼn plank hout wat 6 m lank is. Hy sny 1 m 75 cm en 2 m 40 cm af, wat 1 m 85 cm laat oorbly. Hy het nog een stuk van 1 m 50 cm nodig.',
      checkMode: 'self',
      answer: 'Ja, hy het genoeg hout. Hy het 1 m 85 cm oor en het slegs 1 m 50 cm nodig. Aangesien 1 m 85 cm > 1 m 50 cm, is daar genoeg hout oor.',
    },

    // ── AFDELING 5 — Woordprobleme met Lengte ─────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'ʼn Lint is 3 m 50 cm lank. ʼn Ander lint is 2 m 20 cm lank. Wat is die totale lengte van albei linte?',
      checkMode: 'auto',
      answer: '5 m 70 cm',
      correctAnswer: '5m70cm',
      correctAnswers: ['5m70cm', '5 m70cm', '570cm', '570'],
      explanation: 'Tel die cm op: 50 + 20 = 70 cm. Tel die m op: 3 + 2 = 5 m. Totale lengte: 5 m 70 cm.',
    },

    {
      difficulty: 'Medium',
      question: 'ʼn Skoolbaan is 400 m lank. Thabo hardloop 3 keer daar rond.',
      checkMode: 'auto',
      answer: 'a) 1 200 m   b) 1,2 km   c) 800 m',
      parts: [
        {
          label: 'a) Hoe ver hardloop Thabo altesaam?',
          correctAnswer: '1200m',
          correctAnswers: ['1200m', '1200', '1 200m', '1200 m', '1 200 m'],
          explanation: '400 m × 3 = 1 200 m. Thabo hardloop altesaam 1 200 m.',
        },
        {
          label: 'b) Hoeveel km is dit?',
          correctAnswer: '1.2km',
          correctAnswers: ['1.2km', '1.2', '1.2 km', '1,2km', '1,2'],
          explanation: 'Om m na km om te skakel, deel deur 1 000. 1 200 ÷ 1 000 = 1,2 km.',
        },
        {
          label: 'c) Hy wil altesaam 2 km hardloop. Hoeveel meer meter moet hy nog hardloop?',
          correctAnswer: '800m',
          correctAnswers: ['800m', '800', '800 m'],
          explanation: '2 km = 2 000 m. 2 000 − 1 200 = 800 m. Thabo moet nog 800 m hardloop.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'Drie leerders meet die hoogte van ʼn muur. Sipho meet 2 m 45 cm. Lerato meet 245 cm. Thabo meet 2 450 mm.',
      checkMode: 'auto',
      answer: 'a) Almal is gelyk aan 245 cm   b) Ja   c) 55 cm',
      parts: [
        {
          label: 'a) Wat is al drie metings gelyk aan wanneer dit na cm omgeskakel word?',
          correctAnswer: '245cm',
          correctAnswers: ['245cm', '245', '245 cm'],
          explanation: 'Sipho: 2 m 45 cm = 200 + 45 = 245 cm. Lerato: reeds in cm = 245 cm. Thabo: 2 450 mm ÷ 10 = 245 cm. Al drie is gelyk aan 245 cm.',
        },
        {
          label: 'b) Is al drie metings dieselfde?',
          correctAnswer: 'ja',
          correctAnswers: ['ja', 'Ja', 'dieselfde', 'hulleisdieselfde'],
          explanation: 'Ja — 2 m 45 cm = 245 cm = 2 450 mm. Hulle is presies dieselfde lengte, in verskillende eenhede geskryf.',
        },
        {
          label: 'c) Die muur moet 3 m hoog wees. Hoeveel hoër moet dit wees? Gee jou antwoord in cm.',
          correctAnswer: '55cm',
          correctAnswers: ['55cm', '55', '55 cm'],
          explanation: '3 m = 300 cm. 300 − 245 = 55 cm. Die muur moet 55 cm hoër wees.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'Die muur is 245 cm hoog en moet 3 m (300 cm) bereik, dus is 55 cm meer nodig. Elke baksteen is 8 cm hoog. Hoeveel meer bakstene word benodig om 3 m te bereik? Wys jou werk.',
      checkMode: 'self',
      answer: '7 bakstene. Deel 55 cm deur 8 cm: 55 ÷ 8 = 6,875. Aangesien jy nie ʼn gedeelte van ʼn baksteen kan gebruik nie, rond op na die volgende heelgetal: 7 bakstene word benodig.',
    },

  ],
  scoreMessages: [
    { minScore: 34, message: 'Volpunte! Uitstekende werk — jy het al die aspekte van lengte vir Graad 4 bemeester!' },
    { minScore: 26, message: 'Uitstekende werk! Jy het ʼn sterk begrip van lengte. Gaan enige vrae wat jy lastig gevind het, weer deur en jy sal ten volle gereed wees.' },
    { minScore: 17, message: 'Goeie poging! Jy verstaan die basiese beginsels van lengte. Gaan weer deur die afdelings oor die omskakeling van eenhede en berekening met lengte om jou vaardighede te versterk.' },
    { minScore: 0, message: 'Hou aan probeer! Lengte kan aanvanklik lastig wees. Lees die studiemateriaal weer versigtig deur en probeer dan die vrae weer — jy kan dit doen!' },
  ],
}
