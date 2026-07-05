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
    // STEL 1 — GRONDSLAE: BASIESE EENHEID-OMSKAKELINGS (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Grondslae',
      questions: [
        { difficulty: 'Easy', question: 'Skakel 50 mm om na cm.', answer: '5 cm', checkMode: 'auto', correctAnswer: '5cm', correctAnswers: ['5cm', '5', '5 cm'], explanation: 'Om mm na cm om te skakel, deel deur 10. 50 ÷ 10 = 5 cm ✓' },
        { difficulty: 'Easy', question: 'Skakel 30 mm om na cm.', answer: '3 cm', checkMode: 'auto', correctAnswer: '3cm', correctAnswers: ['3cm', '3', '3 cm'], explanation: 'Om mm na cm om te skakel, deel deur 10. 30 ÷ 10 = 3 cm ✓' },
        { difficulty: 'Easy', question: 'Skakel 80 mm om na cm.', answer: '8 cm', checkMode: 'auto', correctAnswer: '8cm', correctAnswers: ['8cm', '8', '8 cm'], explanation: 'Om mm na cm om te skakel, deel deur 10. 80 ÷ 10 = 8 cm ✓' },
        { difficulty: 'Easy', question: 'Skakel 40 mm om na cm.', answer: '4 cm', checkMode: 'auto', correctAnswer: '4cm', correctAnswers: ['4cm', '4', '4 cm'], explanation: 'Om mm na cm om te skakel, deel deur 10. 40 ÷ 10 = 4 cm ✓' },
        { difficulty: 'Easy', question: 'Skakel 7 cm om na mm.', answer: '70 mm', checkMode: 'auto', correctAnswer: '70mm', correctAnswers: ['70mm', '70', '70 mm'], explanation: 'Om cm na mm om te skakel, vermenigvuldig met 10. 7 × 10 = 70 mm ✓' },
        { difficulty: 'Easy', question: 'Skakel 9 cm om na mm.', answer: '90 mm', checkMode: 'auto', correctAnswer: '90mm', correctAnswers: ['90mm', '90', '90 mm'], explanation: 'Om cm na mm om te skakel, vermenigvuldig met 10. 9 × 10 = 90 mm ✓' },
        { difficulty: 'Easy', question: 'Skakel 2 cm om na mm.', answer: '20 mm', checkMode: 'auto', correctAnswer: '20mm', correctAnswers: ['20mm', '20', '20 mm'], explanation: 'Om cm na mm om te skakel, vermenigvuldig met 10. 2 × 10 = 20 mm ✓' },
        { difficulty: 'Easy', question: 'Skakel 11 cm om na mm.', answer: '110 mm', checkMode: 'auto', correctAnswer: '110mm', correctAnswers: ['110mm', '110', '110 mm'], explanation: 'Om cm na mm om te skakel, vermenigvuldig met 10. 11 × 10 = 110 mm ✓' },
        { difficulty: 'Medium', question: 'Skakel 120 mm om na cm.', answer: '12 cm', checkMode: 'auto', correctAnswer: '12cm', correctAnswers: ['12cm', '12', '12 cm'], explanation: 'Om mm na cm om te skakel, deel deur 10. 120 ÷ 10 = 12 cm ✓' },
        { difficulty: 'Medium', question: 'Skakel 200 mm om na cm.', answer: '20 cm', checkMode: 'auto', correctAnswer: '20cm', correctAnswers: ['20cm', '20', '20 cm'], explanation: 'Om mm na cm om te skakel, deel deur 10. 200 ÷ 10 = 20 cm ✓' },
        { difficulty: 'Medium', question: 'Skakel 14 cm om na mm.', answer: '140 mm', checkMode: 'auto', correctAnswer: '140mm', correctAnswers: ['140mm', '140', '140 mm'], explanation: 'Om cm na mm om te skakel, vermenigvuldig met 10. 14 × 10 = 140 mm ✓' },
        { difficulty: 'Easy', question: 'Skakel 500 cm om na m.', answer: '5 m', checkMode: 'auto', correctAnswer: '5m', correctAnswers: ['5m', '5', '5 m'], explanation: 'Om cm na m om te skakel, deel deur 100. 500 ÷ 100 = 5 m ✓' },
        { difficulty: 'Easy', question: 'Skakel 700 cm om na m.', answer: '7 m', checkMode: 'auto', correctAnswer: '7m', correctAnswers: ['7m', '7', '7 m'], explanation: 'Om cm na m om te skakel, deel deur 100. 700 ÷ 100 = 7 m ✓' },
        { difficulty: 'Easy', question: 'Skakel 100 cm om na m.', answer: '1 m', checkMode: 'auto', correctAnswer: '1m', correctAnswers: ['1m', '1', '1 m'], explanation: 'Om cm na m om te skakel, deel deur 100. 100 ÷ 100 = 1 m ✓' },
        { difficulty: 'Easy', question: 'Skakel 900 cm om na m.', answer: '9 m', checkMode: 'auto', correctAnswer: '9m', correctAnswers: ['9m', '9', '9 m'], explanation: 'Om cm na m om te skakel, deel deur 100. 900 ÷ 100 = 9 m ✓' },
        { difficulty: 'Easy', question: 'Skakel 400 cm om na m.', answer: '4 m', checkMode: 'auto', correctAnswer: '4m', correctAnswers: ['4m', '4', '4 m'], explanation: 'Om cm na m om te skakel, deel deur 100. 400 ÷ 100 = 4 m ✓' },
        { difficulty: 'Easy', question: 'Skakel 3 m om na cm.', answer: '300 cm', checkMode: 'auto', correctAnswer: '300cm', correctAnswers: ['300cm', '300', '300 cm'], explanation: 'Om m na cm om te skakel, vermenigvuldig met 100. 3 × 100 = 300 cm ✓' },
        { difficulty: 'Easy', question: 'Skakel 8 m om na cm.', answer: '800 cm', checkMode: 'auto', correctAnswer: '800cm', correctAnswers: ['800cm', '800', '800 cm'], explanation: 'Om m na cm om te skakel, vermenigvuldig met 100. 8 × 100 = 800 cm ✓' },
        { difficulty: 'Easy', question: 'Skakel 6 m om na cm.', answer: '600 cm', checkMode: 'auto', correctAnswer: '600cm', correctAnswers: ['600cm', '600', '600 cm'], explanation: 'Om m na cm om te skakel, vermenigvuldig met 100. 6 × 100 = 600 cm ✓' },
        { difficulty: 'Easy', question: 'Skakel 2 000 m om na km.', answer: '2 km', checkMode: 'auto', correctAnswer: '2km', correctAnswers: ['2km', '2', '2 km'], explanation: 'Om m na km om te skakel, deel deur 1 000. 2 000 ÷ 1 000 = 2 km ✓' },
        { difficulty: 'Easy', question: 'Skakel 5 000 m om na km.', answer: '5 km', checkMode: 'auto', correctAnswer: '5km', correctAnswers: ['5km', '5', '5 km'], explanation: 'Om m na km om te skakel, deel deur 1 000. 5 000 ÷ 1 000 = 5 km ✓' },
        { difficulty: 'Easy', question: 'Skakel 1 000 m om na km.', answer: '1 km', checkMode: 'auto', correctAnswer: '1km', correctAnswers: ['1km', '1', '1 km'], explanation: 'Om m na km om te skakel, deel deur 1 000. 1 000 ÷ 1 000 = 1 km ✓' },
        { difficulty: 'Easy', question: 'Skakel 4 km om na m.', answer: '4 000 m', checkMode: 'auto', correctAnswer: '4000m', correctAnswers: ['4000m', '4000', '4 000m', '4000 m', '4 000 m'], explanation: 'Om km na m om te skakel, vermenigvuldig met 1 000. 4 × 1 000 = 4 000 m ✓' },
        { difficulty: 'Medium', question: 'Skakel 9 km om na m.', answer: '9 000 m', checkMode: 'auto', correctAnswer: '9000m', correctAnswers: ['9000m', '9000', '9 000m', '9000 m', '9 000 m'], explanation: 'Om km na m om te skakel, vermenigvuldig met 1 000. 9 × 1 000 = 9 000 m ✓' },
        { difficulty: 'Medium', question: 'Skakel 7 000 m om na km.', answer: '7 km', checkMode: 'auto', correctAnswer: '7km', correctAnswers: ['7km', '7', '7 km'], explanation: 'Om m na km om te skakel, deel deur 1 000. 7 000 ÷ 1 000 = 7 km ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het die basiese omskakelings tussen mm, cm, m en km bemeester.' },
        { minScore: 19, message: 'Goeie werk! Jy is seker van die basiese beginsels — gaan enige gemiste vrae weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan die omskakelingsreëltabel weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 — MOEILIKER VARIANTE: MEERSTAP-OMSKAKELINGS EN VERGELYKINGS (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Meerstap-omskakelings en Vergelykings',
      questions: [
        { difficulty: 'Medium', question: 'Skakel 2 000 mm om na m.', answer: '2 m', checkMode: 'auto', correctAnswer: '2m', correctAnswers: ['2m', '2', '2 m'], explanation: 'Daar is 1 000 mm in 1 m. 2 000 ÷ 1 000 = 2 m ✓' },
        { difficulty: 'Medium', question: 'Skakel 5 000 mm om na m.', answer: '5 m', checkMode: 'auto', correctAnswer: '5m', correctAnswers: ['5m', '5', '5 m'], explanation: 'Daar is 1 000 mm in 1 m. 5 000 ÷ 1 000 = 5 m ✓' },
        { difficulty: 'Medium', question: 'Skakel 3 500 mm om na cm.', answer: '350 cm', checkMode: 'auto', correctAnswer: '350cm', correctAnswers: ['350cm', '350', '350 cm'], explanation: 'Om mm na cm om te skakel, deel deur 10. 3 500 ÷ 10 = 350 cm ✓' },
        { difficulty: 'Medium', question: 'Skakel 4 200 mm om na cm.', answer: '420 cm', checkMode: 'auto', correctAnswer: '420cm', correctAnswers: ['420cm', '420', '420 cm'], explanation: 'Om mm na cm om te skakel, deel deur 10. 4 200 ÷ 10 = 420 cm ✓' },
        { difficulty: 'Easy', question: 'Skakel 450 mm om na cm.', answer: '45 cm', checkMode: 'auto', correctAnswer: '45cm', correctAnswers: ['45cm', '45', '45 cm'], explanation: 'Om mm na cm om te skakel, deel deur 10. 450 ÷ 10 = 45 cm ✓' },
        { difficulty: 'Medium', question: 'Skakel 650 mm om na cm.', answer: '65 cm', checkMode: 'auto', correctAnswer: '65cm', correctAnswers: ['65cm', '65', '65 cm'], explanation: 'Om mm na cm om te skakel, deel deur 10. 650 ÷ 10 = 65 cm ✓' },
        { difficulty: 'Medium', question: 'Skakel 1 250 mm om na cm.', answer: '125 cm', checkMode: 'auto', correctAnswer: '125cm', correctAnswers: ['125cm', '125', '125 cm'], explanation: 'Om mm na cm om te skakel, deel deur 10. 1 250 ÷ 10 = 125 cm ✓' },
        { difficulty: 'Medium', question: 'Skakel 1 750 mm om na cm.', answer: '175 cm', checkMode: 'auto', correctAnswer: '175cm', correctAnswers: ['175cm', '175', '175 cm'], explanation: 'Om mm na cm om te skakel, deel deur 10. 1 750 ÷ 10 = 175 cm ✓' },
        { difficulty: 'Medium', question: 'Skakel 200 cm om na m.', answer: '2 m', checkMode: 'auto', correctAnswer: '2m', correctAnswers: ['2m', '2', '2 m'], explanation: 'Om cm na m om te skakel, deel deur 100. 200 ÷ 100 = 2 m ✓' },
        { difficulty: 'Medium', question: 'Skakel 350 cm om na m.', answer: '3 m 50 cm', checkMode: 'auto', correctAnswer: '3m50cm', correctAnswers: ['3m50cm', '3 m50cm', '350cm', '350'], explanation: '350 cm = 300 cm + 50 cm = 3 m 50 cm ✓' },
        { difficulty: 'Medium', question: 'Skakel 550 cm om na m.', answer: '5 m 50 cm', checkMode: 'auto', correctAnswer: '5m50cm', correctAnswers: ['5m50cm', '5 m50cm', '550cm', '550'], explanation: '550 cm = 500 cm + 50 cm = 5 m 50 cm ✓' },
        { difficulty: 'Medium', question: 'Skakel 750 cm om na m.', answer: '7 m 50 cm', checkMode: 'auto', correctAnswer: '7m50cm', correctAnswers: ['7m50cm', '7 m50cm', '750cm', '750'], explanation: '750 cm = 700 cm + 50 cm = 7 m 50 cm ✓' },
        { difficulty: 'Medium', question: 'Skakel 1 500 m om na km.', answer: '1 km 500 m', checkMode: 'auto', correctAnswer: '1km500m', correctAnswers: ['1km500m', '1 km500m', '1500m', '1500'], explanation: '1 500 m = 1 000 m + 500 m = 1 km 500 m ✓' },
        { difficulty: 'Medium', question: 'Skakel 2 500 m om na km.', answer: '2 km 500 m', checkMode: 'auto', correctAnswer: '2km500m', correctAnswers: ['2km500m', '2 km500m', '2500m', '2500'], explanation: '2 500 m = 2 000 m + 500 m = 2 km 500 m ✓' },
        { difficulty: 'Medium', question: 'Skakel 4 500 m om na km.', answer: '4 km 500 m', checkMode: 'auto', correctAnswer: '4km500m', correctAnswers: ['4km500m', '4 km500m', '4500m', '4500'], explanation: '4 500 m = 4 000 m + 500 m = 4 km 500 m ✓' },
        { difficulty: 'Medium', question: 'Skakel 850 m om na km. Gee jou antwoord met km en m.', answer: '0 km 850 m', checkMode: 'auto', correctAnswer: '0km850m', correctAnswers: ['0km850m', '0 km850m', '850m', '850'], explanation: '850 m is minder as 1 000 m, dus is dit 0 km 850 m — nog nie ʼn volle kilometer nie ✓' },
        { difficulty: 'Hard', question: 'Skakel 1 250 m om na km en m.', answer: '1 km 250 m', checkMode: 'auto', correctAnswer: '1km250m', correctAnswers: ['1km250m', '1 km250m', '1250m', '1250'], explanation: '1 250 m = 1 000 m + 250 m = 1 km 250 m ✓' },
        { difficulty: 'Medium', question: 'Skakel 1 km 500 m om na m.', answer: '1 500 m', checkMode: 'auto', correctAnswer: '1500m', correctAnswers: ['1500m', '1500', '1 500m', '1500 m', '1 500 m'], explanation: '1 km 500 m = 1 000 m + 500 m = 1 500 m ✓' },
        { difficulty: 'Hard', question: 'Skakel 1 km 750 m om na m.', answer: '1 750 m', checkMode: 'auto', correctAnswer: '1750m', correctAnswers: ['1750m', '1750', '1 750m', '1750 m', '1 750 m'], explanation: '1 km 750 m = 1 000 m + 750 m = 1 750 m ✓' },
        { difficulty: 'Hard', question: 'Skakel 2 km 750 m om na m.', answer: '2 750 m', checkMode: 'auto', correctAnswer: '2750m', correctAnswers: ['2750m', '2750', '2 750m', '2750 m', '2 750 m'], explanation: '2 km 750 m = 2 000 m + 750 m = 2 750 m ✓' },
        { difficulty: 'Medium', question: 'Wat is langer: 300 cm of 3 m 50 cm? Skryf jou antwoord in die gemengde vorm (m en cm).', answer: '3 m 50 cm', checkMode: 'auto', correctAnswer: '3m50cm', correctAnswers: ['3m50cm', '3 m50cm', '350cm', '350'], explanation: '300 cm = 3 m. Aangesien 3 m 50 cm groter as 3 m is, is 3 m 50 cm langer ✓' },
        { difficulty: 'Medium', question: 'Wat is langer: 2 500 m of 2 km? Skryf jou antwoord met sy eenheid.', answer: '2 500 m', checkMode: 'auto', correctAnswer: '2500m', correctAnswers: ['2500m', '2500', '2 500m', '2500 m', '2 500 m'], explanation: '2 500 m = 2 km 500 m. Aangesien dit groter as 2 km is, is 2 500 m langer ✓' },
        { difficulty: 'Medium', question: 'Wat is langer: 50 mm of 4 cm? Skryf jou antwoord met sy eenheid.', answer: '50 mm', checkMode: 'auto', correctAnswer: '50mm', correctAnswers: ['50mm', '50', '50 mm'], explanation: '50 mm = 5 cm. Aangesien 5 cm groter as 4 cm is, is 50 mm langer ✓' },
        { difficulty: 'Hard', question: 'Wat is korter: 1 200 m of 1 km 500 m? Skryf jou antwoord met sy eenheid.', answer: '1 200 m', checkMode: 'auto', correctAnswer: '1200m', correctAnswers: ['1200m', '1200', '1 200m', '1200 m', '1 200 m'], explanation: '1 200 m = 1 km 200 m. Aangesien dit kleiner as 1 km 500 m is, is 1 200 m korter ✓' },
        { difficulty: 'Hard', question: 'Wat is korter: 999 mm of 1 m? Skryf jou antwoord met sy eenheid.', answer: '999 mm', checkMode: 'auto', correctAnswer: '999mm', correctAnswers: ['999mm', '999', '999 mm'], explanation: '1 m = 1 000 mm. Aangesien 999 mm kleiner as 1 000 mm is, is 999 mm korter ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan met selfvertroue meerstap-omskakelings hanteer en lengtes in verskillende eenhede vergelyk.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die omskakelingsreëls weer deur en oefen om na ʼn gemeenskaplike eenheid om te skakel voordat jy vergelyk.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 — REALISTIESE LENGTES SKAT EN WOORDPROBLEME (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Skat en Woordprobleme',
      questions: [
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die lengte van ʼn potlood te meet: mm, cm, m of km?', answer: 'cm', checkMode: 'auto', correctAnswer: 'cm', correctAnswers: ['cm', 'sentimeter', 'sentimeters'], explanation: 'ʼn Potlood is ʼn klein voorwerp, die beste gemeet in sentimeter (cm) ✓' },
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die hoogte van ʼn huis te meet: mm, cm, m of km?', answer: 'm', checkMode: 'auto', correctAnswer: 'm', correctAnswers: ['m', 'meter', 'meters'], explanation: 'ʼn Huis is ʼn medium-tot-groot struktuur, die beste gemeet in meter (m) ✓' },
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die afstand tussen twee dorpe te meet: mm, cm, m of km?', answer: 'km', checkMode: 'auto', correctAnswer: 'km', correctAnswers: ['km', 'kilometer', 'kilometers'], explanation: 'Die afstand tussen dorpe is baie lank, die beste gemeet in kilometer (km) ✓' },
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die dikte van ʼn muntstuk te meet: mm, cm, m of km?', answer: 'mm', checkMode: 'auto', correctAnswer: 'mm', correctAnswers: ['mm', 'millimeter', 'millimeters'], explanation: 'ʼn Muntstuk is baie dun, die beste gemeet in millimeter (mm) ✓' },
        { difficulty: 'Easy', question: 'ʼn Liniaal is ʼn goeie skatting vir watter lengte: die breedte van ʼn boek (≈ 20 cm) of die lengte van ʼn sokkerveld (≈ 100 m)?', answer: 'Die breedte van ʼn boek', checkMode: 'auto', correctAnswer: 'diebreedtevanʼnboek', correctAnswers: ['diebreedtevanʼnboek', 'boek', 'breedte van ʼn boek', 'die breedte van ʼn boek', 'die breedte van n boek'], explanation: 'ʼn Liniaal (30 cm) is ʼn goeie verwysing vir voorwerpe van omtrent 20-30 cm, soos ʼn boek. ʼn Sokkerveld is veels te lank vir ʼn liniaal-gebaseerde skatting ✓' },
        { difficulty: 'Medium', question: 'Skat die lengte van ʼn volwassene se voet. Kies die mees redelike skatting: 3 cm, 25 cm of 3 m.', answer: '25 cm', checkMode: 'auto', correctAnswer: '25cm', correctAnswers: ['25cm', '25', '25 cm'], explanation: 'ʼn Volwasse voet is omtrent so lank soos ʼn potlood en ʼn bietjie meer — ongeveer 25 cm is realisties. 3 cm is te klein en 3 m is veels te groot ✓' },
        { difficulty: 'Medium', question: 'Skat die hoogte van ʼn dubbelverdieping-huis. Kies die mees redelike skatting: 6 cm, 60 cm of 6 m.', answer: '6 m', checkMode: 'auto', correctAnswer: '6m', correctAnswers: ['6m', '6', '6 m'], explanation: 'ʼn Dubbelverdieping-huis is baie hoër as ʼn persoon — omtrent 6 m is realisties. 6 cm en 60 cm is veels te klein ✓' },
        { difficulty: 'Medium', question: 'Skat die breedte van ʼn klaskamerdeur. Kies die mees redelike skatting: 8 mm, 8 cm of 80 cm.', answer: '80 cm', checkMode: 'auto', correctAnswer: '80cm', correctAnswers: ['80cm', '80', '80 cm'], explanation: 'ʼn Deur moet breed genoeg wees vir ʼn persoon om deur te loop — omtrent 80 cm is realisties. 8 mm en 8 cm is veels te klein ✓' },
        { difficulty: 'Medium', question: 'Skat die lengte van ʼn skoolbus. Kies die mees redelike skatting: 10 cm, 1 m of 10 m.', answer: '10 m', checkMode: 'auto', correctAnswer: '10m', correctAnswers: ['10m', '10', '10 m'], explanation: 'ʼn Skoolbus is ʼn groot voertuig — omtrent 10 m is realisties. 10 cm en 1 m is veels te klein ✓' },
        { difficulty: 'Medium', question: 'Skat die afstand wat jy in omtrent 12 minute kan loop. Kies die mees redelike skatting: 1 m, 100 m of 1 km.', answer: '1 km', checkMode: 'auto', correctAnswer: '1km', correctAnswers: ['1km', '1', '1 km'], explanation: 'Om vir ongeveer 10-12 minute te loop, dek jy ongeveer 1 km — dit stem ooreen met die verwysingsfeit vir ʼn kilometer ✓' },
        { difficulty: 'Easy', question: 'ʼn Lint is 2 m 30 cm lank. ʼn Ander lint is 1 m 45 cm lank. Wat is die totale lengte van albei linte?', answer: '3 m 75 cm', checkMode: 'auto', correctAnswer: '3m75cm', correctAnswers: ['3m75cm', '3 m75cm', '375cm', '375'], explanation: 'Tel die cm op: 30 + 45 = 75 cm. Tel die m op: 2 + 1 = 3 m. Totaal: 3 m 75 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Tuinpad is 5 m lank. ʼn Ander pad langs dit is 3 m 50 cm lank. Wat is die totale lengte van albei paaie in cm?', answer: '850 cm', checkMode: 'auto', correctAnswer: '850cm', correctAnswers: ['850cm', '850', '850 cm'], explanation: '5 m = 500 cm en 3 m 50 cm = 350 cm. Totaal: 500 + 350 = 850 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Tou is 8 m lank. Sipho sny 2 m 40 cm af. Hoeveel tou is oor, in die gemengde vorm (m en cm)?', answer: '5 m 60 cm', checkMode: 'auto', correctAnswer: '5m60cm', correctAnswers: ['5m60cm', '5 m60cm', '560cm', '560'], explanation: '8 m = 800 cm. 800 cm − 240 cm = 560 cm = 5 m 60 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige tuinheining het 4 gelyke kante, elk 6 m lank. Wat is die totale lengte heining wat nodig is?', answer: '24 m', checkMode: 'auto', correctAnswer: '24m', correctAnswers: ['24m', '24', '24 m'], explanation: '"Totale" beteken tel al 4 kante op: 6 + 6 + 6 + 6 = 24 m (of 4 × 6 = 24 m) ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige tuin is 10 m lank en 7 m breed. Wat is die omtrek van die tuin?', answer: '34 m', checkMode: 'auto', correctAnswer: '34m', correctAnswers: ['34m', '34', '34 m'], explanation: 'Omtrek = 2 × (lengte + breedte) = 2 × (10 + 7) = 2 × 17 = 34 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Hardloopbaan is 400 m lank. As ʼn atleet 4 rondtes hardloop, hoe ver hardloop sy altesaam? Gee jou antwoord in meter.', answer: '1 600 m', checkMode: 'auto', correctAnswer: '1600m', correctAnswers: ['1600m', '1600', '1 600m', '1600 m', '1 600 m'], explanation: '400 m × 4 = 1 600 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Draad wat 250 cm lank is, word in 5 gelyke stukke gesny. Hoe lank is elke stuk?', answer: '50 cm', checkMode: 'auto', correctAnswer: '50cm', correctAnswers: ['50cm', '50', '50 cm'], explanation: '"Gelyke stukke" beteken deel: 250 ÷ 5 = 50 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Muur moet 3 m hoog wees. As elke baksteen 25 cm hoog is en die bakstene direk bo-op mekaar gestapel word, hoeveel bakstene word benodig?', answer: '12 bakstene', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 bakstene', '12bakstene'], explanation: '3 m = 300 cm. Deel deur die hoogte van een baksteen: 300 ÷ 25 = 12 bakstene ✓' },
        { difficulty: 'Medium', question: 'ʼn Leer moet ʼn totale hoogte van 2 m 50 cm bereik, gemaak van twee dele wat aanmekaar gesit word: een deel is 1 m 75 cm. Hoe lank moet die tweede deel wees?', answer: '75 cm', checkMode: 'auto', correctAnswer: '75cm', correctAnswers: ['75cm', '75', '75 cm'], explanation: '2 m 50 cm = 250 cm en 1 m 75 cm = 175 cm. 250 − 175 = 75 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Plank hout is 6 m lank. Dit word in 3 gelyke stukke gesny. Hoe lank is elke stuk?', answer: '2 m', checkMode: 'auto', correctAnswer: '2m', correctAnswers: ['2m', '2', '2 m'], explanation: '"Gelyke stukke" beteken deel: 6 ÷ 3 = 2 m ✓' },
        { difficulty: 'Hard', question: 'Drie linte meet 1 m 20 cm, 1 m 35 cm en 1 m 45 cm. Wat is hulle gekombineerde lengte in meter?', answer: '4 m', checkMode: 'auto', correctAnswer: '4m', correctAnswers: ['4m', '4', '4 m'], explanation: 'Tel die cm op: 20 + 35 + 45 = 100 cm = 1 m. Tel die m op: 1 + 1 + 1 + 1 (oorgedra) = 4 m. Totaal: 4 m ✓' },
        { difficulty: 'Hard', question: 'ʼn Klaskamer is 9 m lank en 6 m breed. Wat is die omtrek van die klaskamer?', answer: '30 m', checkMode: 'auto', correctAnswer: '30m', correctAnswers: ['30m', '30', '30 m'], explanation: 'Omtrek = 2 × (lengte + breedte) = 2 × (9 + 6) = 2 × 15 = 30 m ✓' },
        { difficulty: 'Hard', question: 'ʼn Wandelpad is 12 km lank. ʼn Wandelaar het reeds 7 km 500 m geloop. Hoeveel verder moet sy nog loop?', answer: '4 km 500 m', checkMode: 'auto', correctAnswer: '4km500m', correctAnswers: ['4km500m', '4 km500m', '4500m', '4500'], explanation: '"Hoeveel verder" beteken trek af: 12 km − 7 km 500 m = 4 km 500 m ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder loop 1 km 500 m skool toe en daarna nog 2 km 300 m om ʼn vriend te besoek. Wat is die totale afstand geloop?', answer: '3 km 800 m', checkMode: 'auto', correctAnswer: '3km800m', correctAnswers: ['3km800m', '3 km800m', '3800m', '3800'], explanation: '"Totaal" beteken tel op: 1 km 500 m + 2 km 300 m = 3 km 800 m ✓' },
        { difficulty: 'Hard', question: 'Skat die hoogte van ʼn skoolbank in cm, en verduidelik watter werklike-lewe voorwerp jy as verwysing gebruik het om jou skatting te maak.', answer: 'ʼn Skoolbank is omtrent 70-75 cm hoog. ʼn Redelike verwysing is jou eie hoogte wanneer jy sit, of die hoogte van ʼn klaskamerdeur (omtrent 2 m) vergeleke met die bank (ongeveer ʼn derde van daardie hoogte).', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan met selfvertroue realistiese lengtes skat en werklike-lewe lengte-woordprobleme oplos.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die verwysingslengtes en woordprobleem-sleutelwoorde weer deur.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 4 — MEERSTAP / GEKOMBINEERDE PROBLEME (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Meerstap- en Gekombineerde Probleme',
      questions: [
        { difficulty: 'Medium', question: 'ʼn Bouer het 3 planke wat elk 1 m 50 cm meet. Wat is die totale lengte van die 3 planke, in die gemengde vorm (m en cm)?', answer: '4 m 50 cm', checkMode: 'auto', correctAnswer: '4m50cm', correctAnswers: ['4m50cm', '4 m50cm', '450cm', '450'], explanation: '3 × 1 m 50 cm = 3 × 150 cm = 450 cm = 4 m 50 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn 20 m heining het ʼn paal elke 2 m geplant, insluitend een paal aan elke punt. Hoeveel pale word benodig?', answer: '11 pale', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', '11 pale', '11pale'], explanation: 'Aantal gapings = 20 ÷ 2 = 10. Aangesien ʼn paal aan albei punte nodig is, pale = gapings + 1 = 10 + 1 = 11 ✓' },
        { difficulty: 'Medium', question: 'ʼn 500 cm lint word in 4 stukke van 75 cm elk gesny. Hoeveel lint is oor?', answer: '200 cm', checkMode: 'auto', correctAnswer: '200cm', correctAnswers: ['200cm', '200', '200 cm', '2m', '2 m'], explanation: '4 stukke gebruik: 4 × 75 = 300 cm. Oor: 500 − 300 = 200 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Boom is 3 m 50 cm hoog. ʼn Parkeerterrein-ingang het ʼn hoogtebeperking van 3 m. Met hoeveel sentimeter is die boom te hoog om onder die ingang deur te pas?', answer: '50 cm', checkMode: 'auto', correctAnswer: '50cm', correctAnswers: ['50cm', '50', '50 cm'], explanation: '"Met hoeveel" beteken trek af: 3 m 50 cm − 3 m = 50 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Tou van 15 m word in gelyke stukke van 3 m elk gesny. Hoeveel stukke word gemaak?', answer: '5 stukke', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 stukke', '5stukke'], explanation: '"Gelyke stukke" beteken deel: 15 ÷ 3 = 5 stukke ✓' },
        { difficulty: 'Hard', question: 'ʼn Stapel van 20 identiese boeke is 40 cm hoog. Hoe dik is elke boek?', answer: '2 cm', checkMode: 'auto', correctAnswer: '2cm', correctAnswers: ['2cm', '2', '2 cm'], explanation: 'Deel die totale hoogte deur die aantal boeke: 40 ÷ 20 = 2 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Leer bereik 2 m 50 cm teen ʼn muur met een deel, plus nog 1 m 75 cm met ʼn tweede deel. Wat is die totale hoogte bereik, in die gemengde vorm (m en cm)?', answer: '4 m 25 cm', checkMode: 'auto', correctAnswer: '4m25cm', correctAnswers: ['4m25cm', '4 m25cm', '425cm', '425'], explanation: '2 m 50 cm = 250 cm en 1 m 75 cm = 175 cm. Totaal: 250 + 175 = 425 cm = 4 m 25 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Plank hout van 6 m lank word in 3 stukke van 2 m elk gesny. As elke stuk dan in twee gesny word, hoe lank is elke finale stuk?', answer: '1 m', checkMode: 'auto', correctAnswer: '1m', correctAnswers: ['1m', '1', '1 m'], explanation: 'Eerste snit: 6 ÷ 3 = 2 m stukke. Tweede snit: 2 ÷ 2 = 1 m finale stukke ✓' },
        { difficulty: 'Hard', question: 'ʼn Motor ry 3 km 200 m, en dan nog ʼn verdere 1 km 800 m. Hoeveel verder het die motor op die eerste been gery as op die tweede been?', answer: '1 km 400 m', checkMode: 'auto', correctAnswer: '1km400m', correctAnswers: ['1km400m', '1 km400m', '1400m', '1400'], explanation: '"Hoeveel verder" beteken trek af: 3 km 200 m − 1 km 800 m = 1 km 400 m ✓' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige landerye meet 30 m by 20 m. As ʼn boer een keer heeltemal om die landerye loop, hoe ver loop hy?', answer: '100 m', checkMode: 'auto', correctAnswer: '100m', correctAnswers: ['100m', '100', '100 m'], explanation: 'Omtrek = 2 × (30 + 20) = 2 × 50 = 100 m ✓' },
        { difficulty: 'Hard', question: 'ʼn Muur is 250 cm hoog. Dit moet opgebou word tot 4 m. Hoeveel meer sentimeter moet dit nog groei?', answer: '150 cm', checkMode: 'auto', correctAnswer: '150cm', correctAnswers: ['150cm', '150', '150 cm', '1.5m', '1.5 m', '1,5m', '1,5 m'], explanation: '4 m = 400 cm. 400 − 250 = 150 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Fietsryer ry 4 km oos, en draai dan om nog 3 km verder oos te ry. Hoe ver oos van die begin is die fietsryer nou?', answer: '7 km', checkMode: 'auto', correctAnswer: '7km', correctAnswers: ['7km', '7', '7 km'], explanation: 'Albei afstande is in dieselfde rigting, dus tel op: 4 km + 3 km = 7 km ✓' },
        { difficulty: 'Hard', question: 'ʼn Lint van 1 m 80 cm word gelyk tussen 3 vriende gedeel. Hoeveel lint kry elke vriend, in cm?', answer: '60 cm', checkMode: 'auto', correctAnswer: '60cm', correctAnswers: ['60cm', '60', '60 cm'], explanation: '1 m 80 cm = 180 cm. Gelyk gedeel: 180 ÷ 3 = 60 cm ✓' },
        { difficulty: 'Hard', question: 'Twee stukke tou meet 2 m 25 cm en 3 m 40 cm. Wat is die verskil in hulle lengtes?', answer: '1 m 15 cm', checkMode: 'auto', correctAnswer: '1m15cm', correctAnswers: ['1m15cm', '115cm', '1 m 15 cm', '1m 15cm', '1.15m', '1,15m'], explanation: 'Trek cm af: 40 − 25 = 15 cm. Trek m af: 3 − 2 = 1 m. Verskil: 1 m 15 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Skool het ʼn 2 km wandelroete. As ʼn leerder die roete 3 keer loop, hoeveel meter het sy altesaam geloop?', answer: '6 000 m', checkMode: 'auto', correctAnswer: '6000m', correctAnswers: ['6000m', '6000', '6 000m', '6000 m', '6 000 m', '6km', '6 km'], explanation: '2 km = 2 000 m. 3 rondtes: 2 000 × 3 = 6 000 m ✓' },
        { difficulty: 'Hard', question: 'ʼn Prentraam benodig ʼn houtrand. Die raam is 40 cm by 30 cm. Wat is die totale lengte hout wat nodig is om heeltemal om die raam te gaan?', answer: '140 cm', checkMode: 'auto', correctAnswer: '140cm', correctAnswers: ['140cm', '140', '140 cm', '1.4m', '1.4 m', '1,4m', '1,4 m'], explanation: 'Omtrek = 2 × (40 + 30) = 2 × 70 = 140 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Afleweringsbestelwa ry 850 m na ʼn winkel, en dan nog ʼn verdere 1 250 m na ʼn tweede winkel. Wat is die totale afstand gery, in km en m?', answer: '2 km 100 m', checkMode: 'auto', correctAnswer: '2km100m', correctAnswers: ['2km100m', '2 km100m', '2100m', '2100'], explanation: 'Totale afstand: 850 + 1 250 = 2 100 m = 2 km 100 m ✓' },
        { difficulty: 'Hard', question: 'ʼn Tuinier het 18 m randwerk. Hy gebruik 6 m 50 cm om een blombedding en 4 m 25 cm om ʼn ander. Hoeveel randwerk het hy oor?', answer: '7 m 25 cm', checkMode: 'auto', correctAnswer: '7m25cm', correctAnswers: ['7m25cm', '725cm', '7 m 25 cm', '7m 25cm', '7.25m', '7,25m'], explanation: 'Totaal gebruik: 6 m 50 cm + 4 m 25 cm = 10 m 75 cm. Oor: 18 m − 10 m 75 cm = 7 m 25 cm ✓' },
        { difficulty: 'Hard', question: 'Verduidelik waarom dit belangrik is om twee lengtes na dieselfde eenheid om te skakel voordat jy hulle optel of aftrek. Gebruik ʼn voorbeeld in jou verduideliking.', answer: 'Jy moet eers na dieselfde eenheid omskakel omdat die getalle net dieselfde beteken sodra die eenhede ooreenstem — byvoorbeeld, om 2 m en 50 cm direk op te tel as "2 + 50 = 52" is verkeerd, maar om 2 m eers na 200 cm om te skakel gee 200 + 50 = 250 cm, wat die korrekte totaal is.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo sê dat 1 500 mm langer is as 1 m 40 cm. Is hy korrek? Wys jou werk deur albei na dieselfde eenheid om te skakel.', answer: 'Ja, Thabo is korrek. Skakel albei om na sentimeter: 1 500 mm ÷ 10 = 150 cm, en 1 m 40 cm = 140 cm. Aangesien 150 cm groter as 140 cm is, is 1 500 mm inderdaad langer.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige groentetuin is 12 m lank en 5 m breed. ʼn Heining is nodig om die hele tuin, plus een ekstra lengte heining reguit oor die middel (parallel aan die breedte) om dit in twee te verdeel. Hoeveel heining word altesaam benodig?', answer: '39 m', checkMode: 'auto', correctAnswer: '39m', correctAnswers: ['39m', '39', '39 m'], explanation: 'Omtrek = 2 × (12 + 5) = 34 m. Ekstra verdelende heining (parallel aan die breedte) = 5 m. Totaal = 34 + 5 = 39 m ✓' },
        { difficulty: 'Hard', question: 'ʼn Draadheining benodig pale elke 5 m langs ʼn reguit 40 m heininglyn, met ʼn paal aan elke punt. As elke paal R85 kos, wat is die totale koste van die pale?', answer: 'R765', checkMode: 'auto', correctAnswer: '765', correctAnswers: ['765', 'R765'], explanation: 'Aantal pale: (40 ÷ 5) + 1 = 9 pale. Totale koste: 9 × R85 = R765 ✓' },
        { difficulty: 'Hard', question: 'ʼn Aflosspan hardloop ʼn totale afstand van 1 km 200 m, gelyk verdeel tussen 4 hardlopers. Hoe ver hardloop elke hardloper, in meter?', answer: '300 m', checkMode: 'auto', correctAnswer: '300m', correctAnswers: ['300m', '300', '300 m'], explanation: '1 km 200 m = 1 200 m. Gelyk gedeel: 1 200 ÷ 4 = 300 m ✓' },
        { difficulty: 'Hard', question: 'ʼn Bouer benodig 5 stukke pyp, elk 1 m 60 cm lank, gesny uit een lang pyp. Wat is die minimum totale lengte pyp benodig, in meter?', answer: '8 m', checkMode: 'auto', correctAnswer: '8m', correctAnswers: ['8m', '8', '8 m'], explanation: '5 × 1 m 60 cm = 5 × 160 cm = 800 cm = 8 m ✓' },
        { difficulty: 'Hard', question: 'Verduidelik hoe jy sonder ʼn sakrekenaar sou nagaan of 3 500 cm meer of minder is as 3 km 400 m. Beskryf jou metode in woorde.', answer: 'Skakel albei lengtes na dieselfde eenheid om, soos meter. 3 500 cm ÷ 100 = 35 m, en 3 km 400 m = 3 400 m. Deur 35 m met 3 400 m te vergelyk, wys dit dat 3 500 cm baie minder is as 3 km 400 m.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het meerstap- en gekombineerde lengteprobleme bemeester.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die meerstap-voorbeelde oor optel, aftrek en omskakeling van lengte weer deur.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
