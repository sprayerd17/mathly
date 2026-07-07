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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
      videoPlaceholder:
        'Kort video wat wys hoe om woordprobleme oor lengte op te los deur sleutelwoorde te identifiseer en die korrekte bewerking te kies',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok A — Eenheidsin en kies eenhede (0-3, Maklik)
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die lengte van ʼn potlood te meet: mm, cm, m of km?', answer: 'cm', checkMode: 'auto', correctAnswer: 'cm', correctAnswers: ['cm', 'sentimeter', 'sentimeters'], explanation: 'ʼn Potlood is ʼn klein voorwerp, die beste gemeet in sentimeter (cm) ✓' },
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die afstand tussen twee dorpe te meet: mm, cm, m of km?', answer: 'km', checkMode: 'auto', correctAnswer: 'km', correctAnswers: ['km', 'kilometer', 'kilometers'], explanation: 'Die afstand tussen dorpe is baie lank, die beste gemeet in kilometer (km) ✓' },
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die dikte van ʼn muntstuk te meet: mm, cm, m of km?', answer: 'mm', checkMode: 'auto', correctAnswer: 'mm', correctAnswers: ['mm', 'millimeter', 'millimeters'], explanation: 'ʼn Muntstuk is baie dun, die beste gemeet in millimeter (mm) ✓' },
        { difficulty: 'Easy', question: 'Die dikte van ʼn muntstuk word in millimeter gemeet, maar die hoogte van ʼn huis word in meter gemeet. Waarom gebruik ons nie dieselfde eenheid vir albei nie?', answer: 'Omdat mm vir ʼn huis ʼn enorme, moeilik-leesbare getal sou gee, en m vir ʼn muntstuk ʼn baie klein desimale getal sou gee. Die regte eenheid hou die getal redelik en maklik om mee te werk vir die grootte van die voorwerp wat gemeet word.', checkMode: 'self' },

        // Blok B — Enkelstap-omskakelings (4-8, Maklik-Medium)
        { difficulty: 'Easy', question: 'Skakel 45 mm om na cm.', answer: '4,5 cm', checkMode: 'auto', correctAnswer: '4,5cm', correctAnswers: ['4,5cm', '4,5', '4,5 cm', '4.5cm', '4.5 cm'], explanation: 'Om mm na cm om te skakel, deel deur 10. 45 ÷ 10 = 4,5 cm ✓' },
        { difficulty: 'Easy', question: 'ʼn Liewenheersbesie se lyf is 9 cm lank. (Net gekskeer — dit sou ʼn reuse-liewenheersbesie wees! Maar kom ons oefen in elk geval.) Hoeveel millimeter is 9 cm?', answer: '90 mm', checkMode: 'auto', correctAnswer: '90mm', correctAnswers: ['90mm', '90', '90 mm'], explanation: 'Om cm na mm om te skakel, vermenigvuldig met 10. 9 × 10 = 90 mm ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Tuinslang is 600 cm lank. Wat is die lengte daarvan in meter?', answer: '6 m', checkMode: 'auto', correctAnswer: '6m', correctAnswers: ['6m', '6', '6 m'], explanation: 'Om cm na m om te skakel, deel deur 100. 600 ÷ 100 = 6 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Padteken wys die volgende dorp is 3 km ver. Hoeveel meter sal die motor moet ry om dit te bereik?', answer: '3 000 m', checkMode: 'auto', correctAnswer: '3000m', correctAnswers: ['3000m', '3000', '3 000m', '3000 m', '3 000 m'], explanation: 'Om km na m om te skakel, vermenigvuldig met 1 000. 3 × 1 000 = 3 000 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê: "Om 8 m na cm om te skakel, deel ek deur 100, so 8 m = 0,08 cm." Is die leerder korrek? Verduidelik die fout.', answer: 'Nee, die leerder is verkeerd. Om van m na cm om te skakel beteken jy gaan na ʼn kleiner eenheid, dus moet jy vermenigvuldig, nie deel nie: 8 × 100 = 800 cm. Deel sou net korrek wees die ander kant toe, van cm na m.', checkMode: 'self' },

        // Blok C — Meerstap- / gemengde-eenheid-omskakelings (9-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Vislyn is 480 cm lank. Skryf hierdie lengte met meter en sentimeter saam.', answer: '4 m 80 cm', checkMode: 'auto', correctAnswer: '4m80cm', correctAnswers: ['4m80cm', '4 m80cm', '480cm', '480'], explanation: '480 cm = 400 cm + 80 cm = 4 m 80 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Fietsryer het vandag reeds 1 350 m gery. Haar toepassing wys hierdie afstand liewer met km en m saam. Wat sou dit wys?', answer: '1 km 350 m', checkMode: 'auto', correctAnswer: '1km350m', correctAnswers: ['1km350m', '1 km350m', '1350m', '1350'], explanation: '1 350 m = 1 000 m + 350 m = 1 km 350 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Kaart wys ʼn wandelroete van 2 km 600 m. Vir ʼn wedloop-inskrywingsvorm moet die afstand as ʼn enkele getal in meter geskryf word. Wat moet ingevul word?', answer: '2 600 m', checkMode: 'auto', correctAnswer: '2600m', correctAnswers: ['2600m', '2600', '2 600m', '2600 m', '2 600 m'], explanation: '2 km 600 m = 2 000 m + 600 m = 2 600 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Skrynwerker het ʼn plank as 6 m 25 cm gemeet, maar haar metertjie wys net sentimeter. Watter enkele getal in sentimeter moet sy neerskryf?', answer: '625 cm', checkMode: 'auto', correctAnswer: '625cm', correctAnswers: ['625cm', '625', '625 cm'], explanation: '6 m 25 cm = 600 cm + 25 cm = 625 cm ✓' },

        // Blok D — Vergelyk en orden lengtes (13-15, Medium)
        { difficulty: 'Medium', question: 'Wat is langer: 50 mm of 4 cm? Verduidelik hoe jy weet.', answer: '50 mm is langer. Skakel om na dieselfde eenheid: 50 mm = 5 cm, en 5 cm is groter as 4 cm.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer dat 1 200 m langer is as 1 km 500 m. Is die leerder korrek? Wys die vergelyking om jou antwoord te bewys.', answer: 'Nee, die leerder is verkeerd. Skakel albei om na meter: 1 200 m bly 1 200 m, en 1 km 500 m = 1 500 m. Aangesien 1 500 m groter as 1 200 m is, is 1 km 500 m eintlik langer.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Orden hierdie drie lengtes van kleinste na grootste: 950 mm, 1 m 20 cm, 87 cm.', answer: '87 cm, 950 mm, 1 m 20 cm', checkMode: 'auto', correctAnswer: '87cm,950mm,1m20cm', correctAnswers: ['87cm,950mm,1m20cm', '87 cm, 950 mm, 1 m 20 cm', '87cm 950mm 1m20cm', '87cm950mm1m20cm'], explanation: 'Skakel alles om na cm: 950 mm = 95 cm, 1 m 20 cm = 120 cm, 87 cm bly 87 cm. Van kleinste na grootste: 87 cm, 95 cm, 120 cm — dus 87 cm, 950 mm, 1 m 20 cm ✓' },

        // Blok E — Woordprobleme (16-18, Medium-Hard)
        { difficulty: 'Medium', question: 'ʼn Lint is 2 m 30 cm lank. ʼn Ander lint is 1 m 45 cm lank. Wat is die totale lengte van albei linte?', answer: '3 m 75 cm', checkMode: 'auto', correctAnswer: '3m75cm', correctAnswers: ['3m75cm', '3 m75cm', '375cm', '375'], explanation: 'Tel die cm op: 30 + 45 = 75 cm. Tel die m op: 2 + 1 = 3 m. Totaal: 3 m 75 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Tou is 8 m lank. Sipho sny 2 m 40 cm af om ʼn hek vas te maak. Hoeveel tou is oor?', answer: '5 m 60 cm', checkMode: 'auto', correctAnswer: '5m60cm', correctAnswers: ['5m60cm', '5 m60cm', '560cm', '560'], explanation: '8 m = 800 cm. 800 cm − 240 cm = 560 cm = 5 m 60 cm ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Wandelpad is 12 km lank. ʼn Wandelaar het reeds 7 km 500 m geloop. Hoeveel verder moet sy nog loop om die pad te voltooi?', answer: '4 km 500 m', checkMode: 'auto', correctAnswer: '4km500m', correctAnswers: ['4km500m', '4 km500m', '4500m', '4500'], explanation: '"Hoeveel verder" beteken trek af: 12 km − 7 km 500 m = 4 km 500 m ✓' },

        // Blok F — Bekroningsvraag (19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Reghoekige tuin is 10 m lank en 7 m breed. ʼn Tuinier wil heeltemal om die tuin heining aanbring, en nog ʼn ekstra lengte heining reguit oor die middel (parallel aan die lengte) byvoeg om dit in twee gelyke dele te verdeel. Hoeveel heining word altesaam benodig?', answer: '44 m', checkMode: 'auto', correctAnswer: '44m', correctAnswers: ['44m', '44', '44 m'], explanation: 'Omtrek = 2 × (10 + 7) = 34 m. ʼn Verdelende heining parallel aan die lengte loop die volle 10 m. Totaal = 34 + 10 = 44 m ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het eenheidsin, omskakelings en lengte-woordprobleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van die meeste hiervan — gaan enige gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die omskakelingsreëls en woordprobleem-sleutelwoorde weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok A — Eenheidsin en kies eenhede (0-3, Maklik)
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die hoogte van ʼn huis te meet: mm, cm, m of km?', answer: 'm', checkMode: 'auto', correctAnswer: 'm', correctAnswers: ['m', 'meter', 'meters'], explanation: 'ʼn Huis is ʼn medium-tot-groot struktuur, die beste gemeet in meter (m) ✓' },
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die breedte van ʼn klaskamerdeur te meet: mm, cm, m of km?', answer: 'm', checkMode: 'auto', correctAnswer: 'm', correctAnswers: ['m', 'meter', 'meters'], explanation: 'ʼn Deur is ʼn medium-grootte voorwerp, die beste gemeet in meter (m) ✓' },
        { difficulty: 'Easy', question: 'Skat die lengte van ʼn volwassene se voet. Kies die mees redelike skatting: 3 cm, 25 cm of 3 m.', answer: '25 cm', checkMode: 'auto', correctAnswer: '25cm', correctAnswers: ['25cm', '25', '25 cm'], explanation: 'ʼn Volwasse voet is omtrent so lank soos ʼn potlood en ʼn bietjie meer — ongeveer 25 cm is realisties. 3 cm is veels te klein en 3 m is veels te groot ✓' },
        { difficulty: 'Easy', question: 'Waarom sou ʼn bouer hout in meter bestel eerder as in sentimeter, al is sentimeter meer presies?', answer: 'Meter gee ʼn eenvoudiger, hanteerbaarder getal vir lang stukke hout — om "6 m" te skryf is vinniger en duideliker as "600 cm" wanneer jy oor lang stukke praat. Sentimeter is meer presies, maar om groot hoeveelhede materiaal te bestel, is ʼn eenvoudiger eenheid makliker om te kommunikeer en minder geneig tot foute.', checkMode: 'self' },

        // Blok B — Enkelstap-omskakelings (4-8, Maklik-Medium)
        { difficulty: 'Easy', question: 'Skakel 65 mm om na cm.', answer: '6,5 cm', checkMode: 'auto', correctAnswer: '6,5cm', correctAnswers: ['6,5cm', '6,5', '6,5 cm', '6.5cm', '6.5 cm'], explanation: 'Om mm na cm om te skakel, deel deur 10. 65 ÷ 10 = 6,5 cm ✓' },
        { difficulty: 'Easy', question: 'ʼn Ruspe word in ʼn wetenskapeksperiment gemeet as 12 cm lank. Die resultatetabel benodig die lengte in millimeter. Watter waarde gaan in die tabel?', answer: '120 mm', checkMode: 'auto', correctAnswer: '120mm', correctAnswers: ['120mm', '120', '120 mm'], explanation: 'Om cm na mm om te skakel, vermenigvuldig met 10. 12 × 10 = 120 mm ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Mark-stalletjie verkoop tou per meter. ʼn Klant koop 9 m. Hoeveel sentimeter tou is dit?', answer: '900 cm', checkMode: 'auto', correctAnswer: '900cm', correctAnswers: ['900cm', '900', '900 cm'], explanation: 'Om m na cm om te skakel, vermenigvuldig met 100. 9 × 100 = 900 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Fietsryer se opsporingtoepassing wys sy het 8 000 m gery. Hoeveel kilometer moet die toepassing eerder wys?', answer: '8 km', checkMode: 'auto', correctAnswer: '8km', correctAnswers: ['8km', '8', '8 km'], explanation: 'Om m na km om te skakel, deel deur 1 000. 8 000 ÷ 1 000 = 8 km ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê: "1 m is dieselfde as 10 cm, want daar is ook 10 mm in ʼn cm." Is die leerder korrek? Verduidelik die fout.', answer: 'Nee, die leerder verwar twee verskillende omskakelingsfeite. Daar is 100 cm in 1 m, nie 10 nie — die 10 mm in 1 cm is ʼn aparte feit. Dus is 1 m = 100 cm, nie 10 cm nie.', checkMode: 'self' },

        // Blok C — Meerstap- / gemengde-eenheid-omskakelings (9-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Gordynrail meet 640 cm. Skryf hierdie lengte met meter en sentimeter saam.', answer: '6 m 40 cm', checkMode: 'auto', correctAnswer: '6m40cm', correctAnswers: ['6m40cm', '6 m40cm', '640cm', '640'], explanation: '640 cm = 600 cm + 40 cm = 6 m 40 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Hardloper het 2 175 m van ʼn wedloop voltooi. Die telbord wys afstande liewer met km en m saam. Wat sou dit wys?', answer: '2 km 175 m', checkMode: 'auto', correctAnswer: '2km175m', correctAnswers: ['2km175m', '2 km175m', '2175m', '2175'], explanation: '2 175 m = 2 000 m + 175 m = 2 km 175 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Wandeltoepassing teken ʼn stap aan as 3 km 400 m. Vir ʼn fiksheidsverslag moet die afstand as ʼn enkele getal in meter ingevoer word. Wat moet ingevoer word?', answer: '3 400 m', checkMode: 'auto', correctAnswer: '3400m', correctAnswers: ['3400m', '3400', '3 400m', '3400 m', '3 400 m'], explanation: '3 km 400 m = 3 000 m + 400 m = 3 400 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Naaldwerkster het ʼn gordyn as 4 m 15 cm gemeet, maar haar faktuur laat net sentimeter toe. Watter enkele getal in sentimeter moet sy skryf?', answer: '415 cm', checkMode: 'auto', correctAnswer: '415cm', correctAnswers: ['415cm', '415', '415 cm'], explanation: '4 m 15 cm = 400 cm + 15 cm = 415 cm ✓' },

        // Blok D — Vergelyk en orden lengtes (13-15, Medium)
        { difficulty: 'Medium', question: 'Wat is korter: 999 mm of 1 m? Verduidelik hoe jy weet.', answer: '999 mm is korter. Skakel om na dieselfde eenheid: 1 m = 1 000 mm, en 999 mm is 1 mm minder as 1 000 mm.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer dat 2 500 m korter is as 2 km, omdat "2 500 meer syfers het, dus moet dit ʼn kleiner hoeveelheid wees." Is die leerder korrek? Wys die vergelyking om jou antwoord te bewys.', answer: 'Nee, die leerder is verkeerd (en die redenasie maak nie sin nie). Skakel albei om na meter: 2 km = 2 000 m, en 2 500 m bly 2 500 m. Aangesien 2 500 m groter is as 2 000 m, is 2 500 m eintlik langer as 2 km, nie korter nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Orden hierdie drie lengtes van kleinste na grootste: 3 200 m, 2 km 900 m, 3 km 50 m.', answer: '2 km 900 m, 3 km 50 m, 3 200 m', checkMode: 'auto', correctAnswer: '2km900m,3km50m,3200m', correctAnswers: ['2km900m,3km50m,3200m', '2 km 900 m, 3 km 50 m, 3 200 m', '2km900m 3km50m 3200m', '2km900m3km50m3200m'], explanation: 'Skakel alles om na meter: 3 200 m bly 3 200 m, 2 km 900 m = 2 900 m, 3 km 50 m = 3 050 m. Van kleinste na grootste: 2 900 m, 3 050 m, 3 200 m — dus 2 km 900 m, 3 km 50 m, 3 200 m ✓' },

        // Blok E — Woordprobleme (16-18, Medium-Hard)
        { difficulty: 'Medium', question: 'ʼn Stuk draadheining is 3 m 60 cm lank. ʼn Ander stuk is 2 m 85 cm lank. Wat is die totale lengte van albei stukke?', answer: '6 m 45 cm', checkMode: 'auto', correctAnswer: '6m45cm', correctAnswers: ['6m45cm', '6 m45cm', '645cm', '645'], explanation: 'Tel die cm op: 60 + 85 = 145 cm. Aangesien 145 ≥ 100, skakel om: 145 cm = 1 m 45 cm. Tel die m op: 3 + 2 + 1 (oorgedra) = 6 m. Totaal: 6 m 45 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Pyp is 9 m lank. ʼn Loodgieter sny 3 m 65 cm af om onder ʼn wasbak in te pas. Hoeveel pyp is oor?', answer: '5 m 35 cm', checkMode: 'auto', correctAnswer: '5m35cm', correctAnswers: ['5m35cm', '5 m35cm', '535cm', '535'], explanation: '9 m = 900 cm. 900 cm − 365 cm = 535 cm = 5 m 35 cm ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Afleweringsbestelwa moet 15 km ry om ʼn pakhuis te bereik. Dit het reeds 9 km 750 m gery. Hoeveel verder moet dit nog ry?', answer: '5 km 250 m', checkMode: 'auto', correctAnswer: '5km250m', correctAnswers: ['5km250m', '5 km250m', '5250m', '5250'], explanation: '"Hoeveel verder" beteken trek af: 15 km − 9 km 750 m = 5 km 250 m ✓' },

        // Blok F — Bekroningsvraag (19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Draadheining benodig pale elke 4 m langs ʼn reguit 32 m heininglyn, met ʼn paal aan elke punt. As elke paal R95 kos, wat is die totale koste van die pale?', answer: 'R855', checkMode: 'auto', correctAnswer: '855', correctAnswers: ['855', 'R855'], explanation: 'Aantal gapings: 32 ÷ 4 = 8. Aangesien ʼn paal aan albei punte nodig is, pale = gapings + 1 = 8 + 1 = 9 pale. Totale koste: 9 × R95 = R855 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het eenheidsin, omskakelings en lengte-woordprobleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van die meeste hiervan — gaan enige gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die omskakelingsreëls en woordprobleem-sleutelwoorde weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok A — Eenheidsin en kies eenhede (0-3, Maklik)
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die lengte van ʼn sokkerveld te meet: mm, cm, m of km?', answer: 'm', checkMode: 'auto', correctAnswer: 'm', correctAnswers: ['m', 'meter', 'meters'], explanation: 'ʼn Sokkerveld is ʼn medium-tot-groot area, die beste gemeet in meter (m) ✓' },
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die breedte van ʼn vingernael te meet: mm, cm, m of km?', answer: 'mm', checkMode: 'auto', correctAnswer: 'mm', correctAnswers: ['mm', 'millimeter', 'millimeters'], explanation: 'ʼn Vingernael is baie dun, die beste gemeet in millimeter (mm) ✓' },
        { difficulty: 'Easy', question: 'Skat die afstand wat jy in omtrent 10 minute kan loop. Kies die mees redelike skatting: 1 m, 100 m of 1 km.', answer: '1 km', checkMode: 'auto', correctAnswer: '1km', correctAnswers: ['1km', '1', '1 km'], explanation: 'Om vir ongeveer 10 minute te loop, dek jy ongeveer 1 km — dit stem ooreen met die verwysingsfeit vir ʼn kilometer ✓' },
        { difficulty: 'Easy', question: 'ʼn Liniaal langs ʼn potlood geplaas wys die potlood strek van die 0 cm-merk tot die 12 cm-merk. Wat is die gemete lengte van die potlood, en waarom lees ons van die 0-merk af eerder as van die fisiese rand van die liniaal af?', answer: 'Die potlood meet 12 cm. Ons lees van die 0-merk af omdat dit die ware beginpunt van die skaal is — die fisiese rand van die liniaal is dikwels effens verweer of lyn nie presies met 0 op nie, dus gee dit ʼn akkurate lesing om die voorwerp met die 0-merk (nie die fisiese rand nie) te belyn.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="100" width="190" height="26" fill="none" stroke="#0f1f3d" stroke-width="2"/><g stroke="#0f1f3d" stroke-width="1.5"><line x1="15" y1="100" x2="15" y2="126"/><line x1="30" y1="100" x2="30" y2="114"/><line x1="45" y1="100" x2="45" y2="120"/><line x1="60" y1="100" x2="60" y2="114"/><line x1="75" y1="100" x2="75" y2="120"/><line x1="90" y1="100" x2="90" y2="114"/><line x1="105" y1="100" x2="105" y2="120"/><line x1="120" y1="100" x2="120" y2="114"/><line x1="135" y1="100" x2="135" y2="120"/><line x1="150" y1="100" x2="150" y2="114"/><line x1="165" y1="100" x2="165" y2="120"/><line x1="180" y1="100" x2="180" y2="114"/><line x1="195" y1="100" x2="195" y2="126"/></g><text x="15" y="140" font-size="13" font-weight="700" fill="#374151" text-anchor="middle">0</text><text x="105" y="140" font-size="13" font-weight="700" fill="#374151" text-anchor="middle">6</text><text x="195" y="140" font-size="13" font-weight="700" fill="#374151" text-anchor="middle">12</text><rect x="15" y="70" width="180" height="14" fill="#fde68a" stroke="#0f1f3d" stroke-width="2"/><polygon points="195,70 205,77 195,84" fill="#fde68a" stroke="#0f1f3d" stroke-width="2"/><text x="105" y="60" font-size="14" font-weight="700" fill="#2563eb" text-anchor="middle">potlood</text></svg>' },

        // Blok B — Enkelstap-omskakelings (4-8, Maklik-Medium)
        { difficulty: 'Easy', question: 'Skakel 75 mm om na cm.', answer: '7,5 cm', checkMode: 'auto', correctAnswer: '7,5cm', correctAnswers: ['7,5cm', '7,5', '7,5 cm', '7.5cm', '7.5 cm'], explanation: 'Om mm na cm om te skakel, deel deur 10. 75 ÷ 10 = 7,5 cm ✓' },
        { difficulty: 'Easy', question: 'ʼn Stapel van 6 identiese muntstukke is presies 6 cm hoog. Skryf hierdie hoogte in millimeter.', answer: '60 mm', checkMode: 'auto', correctAnswer: '60mm', correctAnswers: ['60mm', '60', '60 mm'], explanation: 'Om cm na mm om te skakel, vermenigvuldig met 10. 6 × 10 = 60 mm ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Rol lint is gemerk 250 cm. ʼn Handwerkresep lys lintlengtes in meter — hoeveel meter is op die rol?', answer: '2,5 m', checkMode: 'auto', correctAnswer: '2,5m', correctAnswers: ['2,5m', '2,5', '2,5 m', '2.5m', '2.5 m'], explanation: 'Om cm na m om te skakel, deel deur 100. 250 ÷ 100 = 2,5 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Weerberig sê ʼn storm beweeg na die kus toe, tans 6 km ver. Hoeveel meter ver is die storm?', answer: '6 000 m', checkMode: 'auto', correctAnswer: '6000m', correctAnswers: ['6000m', '6000', '6 000m', '6000 m', '6 000 m'], explanation: 'Om km na m om te skakel, vermenigvuldig met 1 000. 6 × 1 000 = 6 000 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder skakel 250 cm om na meter soos volg: "250 ÷ 10 = 25, so 250 cm = 25 m." Is dit korrek? Verduidelik die fout.', answer: 'Nee, die leerder het deur die verkeerde getal gedeel. Daar is 100 cm in 1 m, nie 10 nie, so die korrekte werk is 250 ÷ 100 = 2,5 m. Om deur 10 te deel sou mm na cm omskakel, nie cm na m nie.', checkMode: 'self' },

        // Blok C — Meerstap- / gemengde-eenheid-omskakelings (9-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Mark-tafel is 720 cm lank. Skryf hierdie lengte met meter en sentimeter saam.', answer: '7 m 20 cm', checkMode: 'auto', correctAnswer: '7m20cm', correctAnswers: ['7m20cm', '7 m20cm', '720cm', '720'], explanation: '720 cm = 700 cm + 20 cm = 7 m 20 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Afleweringsbestuurder het 4 080 m van haar roete afgelê. Haar paneelbord wys afstande liewer met km en m saam. Wat sou dit wys?', answer: '4 km 80 m', checkMode: 'auto', correctAnswer: '4km80m', correctAnswers: ['4km80m', '4 km80m', '4080m', '4080'], explanation: '4 080 m = 4 000 m + 80 m = 4 km 80 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Padwyser wys die kampeerterrein is 5 km 90 m ver. Vir ʼn GPS-toestel moet dit as ʼn enkele getal in meter ingevoer word. Wat moet ingevoer word?', answer: '5 090 m', checkMode: 'auto', correctAnswer: '5090m', correctAnswers: ['5090m', '5090', '5 090m', '5090 m', '5 090 m'], explanation: '5 km 90 m = 5 000 m + 90 m = 5 090 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Elektrisiën het ʼn kabel as 2 m 8 cm gemeet, maar die faktuurkolom laat net sentimeter toe. Watter enkele getal in sentimeter moet geskryf word?', answer: '208 cm', checkMode: 'auto', correctAnswer: '208cm', correctAnswers: ['208cm', '208', '208 cm'], explanation: '2 m 8 cm = 200 cm + 8 cm = 208 cm ✓' },

        // Blok D — Vergelyk en orden lengtes (13-15, Medium)
        { difficulty: 'Medium', question: 'Wat is langer: 300 cm of 3 m 50 cm? Verduidelik hoe jy weet.', answer: '3 m 50 cm is langer. Skakel om na dieselfde eenheid: 300 cm = 3 m, en 3 m 50 cm is 50 cm groter as 3 m.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer dat 650 mm korter is as 60 cm, omdat "650 het 3 syfers maar 60 het net 2." Is die leerder korrek? Wys die vergelyking om jou antwoord te bewys.', answer: 'Nee, die leerder is verkeerd — jy kan nie lengtes net volgens aantal syfers vergelyk as die eenhede verskil nie. Skakel albei om na dieselfde eenheid: 650 mm = 65 cm, en 60 cm bly 60 cm. Aangesien 65 cm groter is as 60 cm, is 650 mm eintlik langer as 60 cm.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Orden hierdie drie lengtes van kleinste na grootste: 1 450 mm, 1 m 30 cm, 138 cm.', answer: '1 m 30 cm, 138 cm, 1 450 mm', checkMode: 'auto', correctAnswer: '1m30cm,138cm,1450mm', correctAnswers: ['1m30cm,138cm,1450mm', '1 m 30 cm, 138 cm, 1 450 mm', '1m30cm 138cm 1450mm', '1m30cm138cm1450mm'], explanation: 'Skakel alles om na cm: 1 450 mm = 145 cm, 1 m 30 cm = 130 cm, 138 cm bly 138 cm. Van kleinste na grootste: 130 cm, 138 cm, 145 cm — dus 1 m 30 cm, 138 cm, 1 450 mm ✓' },

        // Blok E — Woordprobleme (16-18, Medium-Hard)
        { difficulty: 'Medium', question: 'ʼn Plank hout is 4 m 55 cm lank. ʼn Ander plank is 3 m 70 cm lank. Wat is die totale lengte van albei planke?', answer: '8 m 25 cm', checkMode: 'auto', correctAnswer: '8m25cm', correctAnswers: ['8m25cm', '8 m25cm', '825cm', '825'], explanation: 'Tel die cm op: 55 + 70 = 125 cm. Aangesien 125 ≥ 100, skakel om: 125 cm = 1 m 25 cm. Tel die m op: 4 + 3 + 1 (oorgedra) = 8 m. Totaal: 8 m 25 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Rol stof is 6 m lank. ʼn Kleremaker sny 2 m 55 cm af om ʼn rok te maak. Hoeveel stof is oor?', answer: '3 m 45 cm', checkMode: 'auto', correctAnswer: '3m45cm', correctAnswers: ['3m45cm', '3 m45cm', '345cm', '345'], explanation: '6 m = 600 cm. 600 cm − 255 cm = 345 cm = 3 m 45 cm ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Draad wat 340 cm lank is, word in 4 gelyke stukke gesny om raamhakies te maak. Hoe lank is elke stuk, en is daar enige draad oor?', answer: '85 cm', checkMode: 'auto', correctAnswer: '85cm', correctAnswers: ['85cm', '85', '85 cm', 'elkestukis85cmniksoornie'], explanation: '"Gelyke stukke" beteken deel: 340 ÷ 4 = 85 cm, met geen res nie ✓' },

        // Blok F — Bekroningsvraag (19, Moeilik)
        { difficulty: 'Hard', question: 'Verduidelik hoe jy sonder ʼn sakrekenaar sou nagaan of 4 200 cm meer of minder is as 4 km 100 m. Beskryf jou metode in woorde.', answer: 'Skakel albei lengtes na dieselfde eenheid om, soos meter. 4 200 cm ÷ 100 = 42 m, en 4 km 100 m = 4 100 m. Deur 42 m met 4 100 m te vergelyk, wys dit dat 4 200 cm baie minder is as 4 km 100 m.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het eenheidsin, omskakelings en lengte-woordprobleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van die meeste hiervan — gaan enige gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die omskakelingsreëls en woordprobleem-sleutelwoorde weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
