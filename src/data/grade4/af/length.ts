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
      diagramSvg:
        '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="60" r="20" fill="none" stroke="#1e40af" stroke-width="2.5"/><line x1="20" y1="60" x2="60" y2="60" stroke="#1e40af" stroke-width="1.5" stroke-dasharray="3,3"/><text x="40" y="105" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Muntstuk</text><text x="40" y="122" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">mm</text><rect x="90" y="52" width="60" height="14" fill="none" stroke="#16a34a" stroke-width="2.5"/><polygon points="150,52 150,66 165,59" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="125" y="105" font-size="12" font-weight="700" fill="#16a34a" text-anchor="middle">Potlood</text><text x="125" y="122" font-size="12" font-weight="700" fill="#16a34a" text-anchor="middle">cm</text><rect x="200" y="20" width="40" height="80" fill="none" stroke="#dc2626" stroke-width="2.5"/><circle cx="232" cy="62" r="2.5" fill="#dc2626"/><text x="220" y="115" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">Deur</text><text x="220" y="132" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">m</text><line x1="270" y1="45" x2="270" y2="100" stroke="#ea580c" stroke-width="2.5"/><rect x="252" y="25" width="36" height="24" fill="none" stroke="#ea580c" stroke-width="2.5"/><text x="270" y="41" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">10km</text><text x="270" y="118" font-size="12" font-weight="700" fill="#ea580c" text-anchor="middle">Teken</text><text x="270" y="135" font-size="12" font-weight="700" fill="#ea580c" text-anchor="middle">km</text></svg>',
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
      diagramSvg:
        '<svg viewBox="0 0 220 320" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="14" width="80" height="32" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="35" font-size="15" font-weight="700" fill="#0f1f3d" text-anchor="middle">km</text><rect x="70" y="94" width="80" height="32" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="115" font-size="15" font-weight="700" fill="#0f1f3d" text-anchor="middle">m</text><rect x="70" y="174" width="80" height="32" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="195" font-size="15" font-weight="700" fill="#0f1f3d" text-anchor="middle">cm</text><rect x="70" y="254" width="80" height="32" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="275" font-size="15" font-weight="700" fill="#0f1f3d" text-anchor="middle">mm</text><line x1="165" y1="46" x2="165" y2="90" stroke="#dc2626" stroke-width="2"/><polygon points="165,94 160,86 170,86" fill="#dc2626"/><text x="185" y="74" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">×1000</text><line x1="165" y1="126" x2="165" y2="170" stroke="#dc2626" stroke-width="2"/><polygon points="165,174 160,166 170,166" fill="#dc2626"/><text x="185" y="154" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">×100</text><line x1="165" y1="206" x2="165" y2="250" stroke="#dc2626" stroke-width="2"/><polygon points="165,254 160,246 170,246" fill="#dc2626"/><text x="185" y="234" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">×10</text><line x1="55" y1="90" x2="55" y2="46" stroke="#2563eb" stroke-width="2"/><polygon points="55,42 50,50 60,50" fill="#2563eb"/><text x="30" y="74" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">÷1000</text><line x1="55" y1="170" x2="55" y2="126" stroke="#2563eb" stroke-width="2"/><polygon points="55,122 50,130 60,130" fill="#2563eb"/><text x="30" y="154" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">÷100</text><line x1="55" y1="250" x2="55" y2="206" stroke="#2563eb" stroke-width="2"/><polygon points="55,202 50,210 60,210" fill="#2563eb"/><text x="30" y="234" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">÷10</text></svg>',
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
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die lengte van ʼn potlood te meet: mm, cm, m of km?', checkMode: 'auto', options: ['mm', 'cm', 'm', 'km'], correctIndex: 1, explanation: 'ʼn Potlood is ʼn klein voorwerp, die beste gemeet in sentimeter (cm) — mm sou ʼn vreemd klein, ongemaklike getal gee, en m of km sou veels te groot wees.' },
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die afstand tussen twee dorpe te meet: mm, cm, m of km?', checkMode: 'auto', options: ['mm', 'cm', 'm', 'km'], correctIndex: 3, explanation: 'Die afstand tussen dorpe is baie lank, die beste gemeet in kilometer (km) — mm, cm of m sou almal ʼn enorme, moeilik-leesbare getal gee.' },
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die dikte van ʼn muntstuk te meet: mm, cm, m of km?', checkMode: 'auto', options: ['mm', 'cm', 'm', 'km'], correctIndex: 0, explanation: 'ʼn Muntstuk is baie dun, die beste gemeet in millimeter (mm) — cm, m of km sou dit tot byna niks afrond.' },
        { difficulty: 'Easy', question: 'Die dikte van ʼn muntstuk word in millimeter gemeet, maar die hoogte van ʼn huis word in meter gemeet. Watter stelling verduidelik korrek waarom ons nie dieselfde eenheid vir albei gebruik nie?', checkMode: 'auto', options: ['Millimeter kan net gebruik word om ronde voorwerpe te meet, nie hoë dinge soos huise nie.', 'Om mm vir ʼn huis te gebruik sou ʼn enorme getal gee, en om m vir ʼn muntstuk te gebruik sou ʼn baie klein desimale getal gee — die regte eenheid hou die getal redelik vir die grootte van die voorwerp.', 'Dit maak nie saak watter eenheid gebruik word nie — mm en m gee altyd presies dieselfde getal.', 'Meter kan net afstande tussen plekke meet, nie die grootte van ʼn enkele voorwerp nie.'], correctIndex: 1, explanation: 'Die regte eenheid hou die getal ʼn redelike grootte: mm vir ʼn huis sou enorm wees (honderdduisende), en m vir ʼn muntstuk sou ʼn klein desimale getal wees (soos 0,001 m) — dus kies ons die eenheid wat by die grootte van die voorwerp pas.' },

        // Blok B — Enkelstap-omskakelings (4-8, Maklik-Medium)
        { difficulty: 'Easy', question: 'Skakel 45 mm om na cm.', checkMode: 'auto', options: ['0,45 cm', '45 cm', '4,5 cm', '450 cm'], correctIndex: 2, explanation: 'Deel deur 10 om mm na cm om te skakel: 45 ÷ 10 = 4,5 cm. (0,45 cm kom van deel deur 100; 45 cm vergeet om om te skakel; 450 cm vermenigvuldig in plaas van deel.)' },
        { difficulty: 'Easy', question: 'ʼn Liewenheersbesie se lyf is 9 cm lank. (Net gekskeer — dit sou ʼn reuse-liewenheersbesie wees! Maar kom ons oefen in elk geval.) Hoeveel millimeter is 9 cm?', checkMode: 'auto', options: ['0,9 mm', '9 mm', '90 mm', '900 mm'], correctIndex: 2, explanation: 'Vermenigvuldig met 10 om cm na mm om te skakel: 9 × 10 = 90 mm. (0,9 mm deel in plaas van vermenigvuldig; 9 mm vergeet om om te skakel; 900 mm vermenigvuldig met 100 in plaas van 10.)' },
        { difficulty: 'Easy-Medium', question: 'ʼn Tuinslang is 600 cm lank. Wat is die lengte daarvan in meter?', checkMode: 'auto', options: ['0,6 m', '6 m', '60 m', '600 m'], correctIndex: 1, explanation: 'Deel deur 100 om cm na m om te skakel: 600 ÷ 100 = 6 m. (0,6 m deel deur 1 000 in plaas van 100; 60 m en 600 m deel nie korrek nie.)' },
        { difficulty: 'Medium', question: 'ʼn Padteken wys die volgende dorp is 3 km ver. Hoeveel meter sal die motor moet ry om dit te bereik?', checkMode: 'auto', options: ['30 m', '300 m', '3 000 m', '30 000 m'], correctIndex: 2, explanation: 'Vermenigvuldig met 1 000 om km na m om te skakel: 3 × 1 000 = 3 000 m. (30 m en 300 m vermenigvuldig met die verkeerde mag van 10; 30 000 m vermenigvuldig met 10 000.)' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê: "Om 8 m na cm om te skakel, deel ek deur 100, so 8 m = 0,08 cm." Watter stelling evalueer dit korrek?', checkMode: 'auto', options: ['Die leerder is korrek — deel deur 100 word altyd gebruik wanneer eenhede verander.', 'Die leerder is verkeerd — om m na cm om te skakel beteken jy gaan na ʼn kleiner eenheid, dus moet jy vermenigvuldig: 8 × 100 = 800 cm.', 'Die leerder is korrek, maar die antwoord moet as 0,8 cm geskryf word.', 'Die leerder is verkeerd — die korrekte omskakeling is 8 ÷ 10 = 0,8 cm.'], correctIndex: 1, explanation: 'Om van m (ʼn groter eenheid) na cm (ʼn kleiner eenheid) te gaan beteken jy vermenigvuldig, nie deel nie: 8 × 100 = 800 cm. Die leerder het gedeel toe hy moes vermenigvuldig het.' },

        // Blok C — Meerstap- / gemengde-eenheid-omskakelings (9-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Vislyn is 480 cm lank. Skryf hierdie lengte met meter en sentimeter saam.', checkMode: 'auto', options: ['8 m 40 cm', '4 m 80 cm', '4 m 8 cm', '48 m 0 cm'], correctIndex: 1, explanation: '480 cm = 400 cm + 80 cm = 4 m 80 cm. (8 m 40 cm verwissel die syfers; 4 m 8 cm laat ʼn nul in die cm-deel weg; 48 m 0 cm plaas die desimale punt verkeerd.)' },
        { difficulty: 'Medium', question: 'ʼn Fietsryer het vandag reeds 1 350 m gery. Haar toepassing wys hierdie afstand liewer met km en m saam. Wat sou dit wys?', checkMode: 'auto', options: ['13 km 50 m', '1 km 35 m', '1 km 350 m', '3 km 50 m'], correctIndex: 2, explanation: '1 350 m = 1 000 m + 350 m = 1 km 350 m. (1 km 35 m laat ʼn nul weg; 13 km 50 m en 3 km 50 m plaas die syfers verkeerd.)' },
        { difficulty: 'Medium', question: 'ʼn Kaart wys ʼn wandelroete van 2 km 600 m. Vir ʼn wedloop-inskrywingsvorm moet die afstand as ʼn enkele getal in meter geskryf word. Wat moet ingevul word?', checkMode: 'auto', options: ['260 m', '2 060 m', '26 000 m', '2 600 m'], correctIndex: 3, explanation: '2 km 600 m = 2 000 m + 600 m = 2 600 m. (260 m laat ʼn nul weg; 2 060 m verloor ʼn nul uit die 600; 26 000 m voeg ʼn ekstra nul by.)' },
        { difficulty: 'Medium', question: 'ʼn Skrynwerker het ʼn plank as 6 m 25 cm gemeet, maar haar metertjie wys net sentimeter. Watter enkele getal in sentimeter moet sy neerskryf?', checkMode: 'auto', options: ['6 025 cm', '625 cm', '652 cm', '62,5 cm'], correctIndex: 1, explanation: '6 m 25 cm = 600 cm + 25 cm = 625 cm. (6 025 cm hou die meter-syfer apart in plaas van om te skakel; 652 cm verwissel die syfers; 62,5 cm deel per ongeluk deur 10.)' },

        // Blok D — Vergelyk en orden lengtes (13-15, Medium)
        { difficulty: 'Medium', question: 'Wat is langer: 50 mm of 4 cm?', checkMode: 'auto', options: ['50 mm, want 50 is ʼn groter getal as 4', '4 cm, want sentimeter is altyd groter as millimeter', '50 mm, want 50 mm = 5 cm, wat groter is as 4 cm', 'Hulle is presies dieselfde lengte'], correctIndex: 2, explanation: 'Skakel om na dieselfde eenheid: 50 mm = 5 cm, en 5 cm is groter as 4 cm, dus is 50 mm langer. Om rou getalle sonder omskakeling te vergelyk (soos 50 met 4) is ʼn algemene fout.' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer dat 1 200 m langer is as 1 km 500 m. Is die leerder korrek?', checkMode: 'auto', options: ['Ja — 1 200 is ʼn groter getal as 1 500.', 'Nee — skakel albei om na meter, 1 200 m bly 1 200 m en 1 km 500 m = 1 500 m, dus is 1 km 500 m eintlik langer.', 'Ja — kilometer is altyd korter as meter.', 'Nee — 1 200 m is gelyk aan 1 km 200 m, wat langer is as 1 500 m.'], correctIndex: 1, explanation: 'Skakel albei om na meter: 1 200 m bly 1 200 m, en 1 km 500 m = 1 500 m. Aangesien 1 500 m > 1 200 m, is die leerder verkeerd — 1 km 500 m is die langer lengte.' },
        { difficulty: 'Medium', question: 'Orden hierdie drie lengtes van kleinste na grootste: 950 mm, 1 m 20 cm, 87 cm.', checkMode: 'auto', options: ['950 mm, 87 cm, 1 m 20 cm', '1 m 20 cm, 950 mm, 87 cm', '87 cm, 950 mm, 1 m 20 cm', '87 cm, 1 m 20 cm, 950 mm'], correctIndex: 2, explanation: 'Skakel alles om na cm: 950 mm = 95 cm, 1 m 20 cm = 120 cm, 87 cm bly 87 cm. Van kleinste na grootste: 87 cm, 95 cm, 120 cm — dus 87 cm, 950 mm, 1 m 20 cm. (Die ander ordes verwar watter omgeskakelde waarde die kleinste is.)' },

        // Blok E — Woordprobleme (16-18, Medium-Hard)
        { difficulty: 'Medium', question: 'ʼn Lint is 2 m 30 cm lank. ʼn Ander lint is 1 m 45 cm lank. Wat is die totale lengte van albei linte?', checkMode: 'auto', options: ['3 m 85 cm', '4 m 75 cm', '3 m 15 cm', '3 m 75 cm'], correctIndex: 3, explanation: 'Tel die cm op: 30 + 45 = 75 cm. Tel die m op: 2 + 1 = 3 m. Totaal: 3 m 75 cm. (3 m 85 cm en 3 m 15 cm tel die cm verkeerd op; 4 m 75 cm voeg ʼn ekstra meter by.)' },
        { difficulty: 'Medium', question: 'ʼn Tou is 8 m lank. Sipho sny 2 m 40 cm af om ʼn hek vas te maak. Hoeveel tou is oor?', checkMode: 'auto', options: ['6 m 60 cm', '5 m 60 cm', '5 m 40 cm', '6 m 40 cm'], correctIndex: 1, explanation: '8 m = 800 cm. 800 cm − 240 cm = 560 cm = 5 m 60 cm. (Die ander opsies kom van ʼn leen- of aftrekfout.)' },
        { difficulty: 'Medium-Hard', question: 'ʼn Wandelpad is 12 km lank. ʼn Wandelaar het reeds 7 km 500 m geloop. Hoeveel verder moet sy nog loop om die pad te voltooi?', checkMode: 'auto', options: ['5 km 500 m', '4 km 400 m', '4 km 500 m', '5 km 400 m'], correctIndex: 2, explanation: '12 km − 7 km 500 m: leen 1 km (1 000 m) om 11 km 1 500 m te maak, trek dan 7 km 500 m af om 4 km 500 m te kry. (Die ander opsies kom van ʼn leenfout.)' },

        // Blok F — Bekroningsvraag (19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Reghoekige tuin is 10 m lank en 7 m breed. ʼn Tuinier wil heeltemal om die tuin heining aanbring, en nog ʼn ekstra lengte heining reguit oor die middel (parallel aan die lengte) byvoeg om dit in twee gelyke dele te verdeel. Hoeveel heining word altesaam benodig?', checkMode: 'auto', options: ['34 m', '41 m', '54 m', '44 m'], correctIndex: 3, explanation: 'Omtrek = 2 × (10 + 7) = 34 m. Die ekstra verdelende heining parallel aan die lengte loop die volle 10 m. Totaal = 34 + 10 = 44 m. (34 m vergeet die ekstra verdelende heining; 41 m voeg per ongeluk die breedte 7 m by in plaas van die lengte 10 m; 54 m tel een kant dubbel.)' },
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
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die hoogte van ʼn huis te meet: mm, cm, m of km?', checkMode: 'auto', options: ['mm', 'cm', 'm', 'km'], correctIndex: 2, explanation: 'ʼn Huis is ʼn medium-tot-groot struktuur, die beste gemeet in meter (m) — mm of cm sou ʼn onredelik groot getal gee, en km sou veels te groot wees.' },
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die breedte van ʼn klaskamerdeur te meet: mm, cm, m of km?', checkMode: 'auto', options: ['mm', 'cm', 'm', 'km'], correctIndex: 2, explanation: 'ʼn Deur is ʼn medium-grootte voorwerp, die beste gemeet in meter (m) — mm of cm sou ʼn vreemd groot getal gee, en km sou veels te groot wees.' },
        { difficulty: 'Easy', question: 'Skat die lengte van ʼn volwassene se voet. Kies die mees redelike skatting.', checkMode: 'auto', options: ['3 cm', '3 m', '30 cm', '25 cm'], correctIndex: 3, explanation: 'ʼn Volwasse voet is omtrent so lank soos ʼn potlood en ʼn bietjie meer — ongeveer 25 cm is realisties. 3 cm is veels te klein (meer soos ʼn vingernael se breedte), 3 m sou enorm wees vir ʼn voet, en 30 cm oorskat deur te veel op te rond.' },
        { difficulty: 'Easy', question: 'Waarom sou ʼn bouer hout in meter bestel eerder as in sentimeter, al is sentimeter meer presies?', checkMode: 'auto', options: ['Omdat sentimeter nie gebruik kan word om hout te meet nie.', 'Omdat meter ʼn eenvoudiger, hanteerbaarder getal gee vir lang lengtes, wat bestellings vinniger en duideliker maak om te kommunikeer, al is sentimeter meer presies.', 'Omdat 1 meter en 1 sentimeter eintlik dieselfde lengte is.', 'Omdat houtverskaffers net in heel meters verkoop, nooit in sentimeter nie.'], correctIndex: 1, explanation: 'Meter gee ʼn eenvoudiger, hanteerbaarder getal vir lang stukke hout — om "6 m" te skryf is vinniger en duideliker as "600 cm". Sentimeter is meer presies, maar om groot hoeveelhede materiaal te bestel, verminder die eenvoudiger eenheid die kans op foute.' },

        // Blok B — Enkelstap-omskakelings (4-8, Maklik-Medium)
        { difficulty: 'Easy', question: 'Skakel 65 mm om na cm.', checkMode: 'auto', options: ['0,65 cm', '65 cm', '6,5 cm', '650 cm'], correctIndex: 2, explanation: 'Deel deur 10 om mm na cm om te skakel: 65 ÷ 10 = 6,5 cm. (0,65 cm deel deur 100; 65 cm vergeet om om te skakel; 650 cm vermenigvuldig in plaas van deel.)' },
        { difficulty: 'Easy', question: 'ʼn Ruspe word in ʼn wetenskapeksperiment gemeet as 12 cm lank. Die resultatetabel benodig die lengte in millimeter. Watter waarde gaan in die tabel?', checkMode: 'auto', options: ['1,2 mm', '120 mm', '12 mm', '1 200 mm'], correctIndex: 1, explanation: 'Vermenigvuldig met 10 om cm na mm om te skakel: 12 × 10 = 120 mm. (1,2 mm deel in plaas van vermenigvuldig; 12 mm vergeet om om te skakel; 1 200 mm vermenigvuldig met 100 in plaas van 10.)' },
        { difficulty: 'Easy-Medium', question: 'ʼn Mark-stalletjie verkoop tou per meter. ʼn Klant koop 9 m. Hoeveel sentimeter tou is dit?', checkMode: 'auto', options: ['9 cm', '90 cm', '9 000 cm', '900 cm'], correctIndex: 3, explanation: 'Vermenigvuldig met 100 om m na cm om te skakel: 9 × 100 = 900 cm. (9 cm en 90 cm vermenigvuldig nie korrek nie; 9 000 cm vermenigvuldig met 1 000 in plaas van 100.)' },
        { difficulty: 'Medium', question: 'ʼn Fietsryer se opsporingtoepassing wys sy het 8 000 m gery. Hoeveel kilometer moet die toepassing eerder wys?', checkMode: 'auto', options: ['0,8 km', '80 km', '8 km', '800 km'], correctIndex: 2, explanation: 'Deel deur 1 000 om m na km om te skakel: 8 000 ÷ 1 000 = 8 km. (0,8 km deel deur 10 000; 80 km en 800 km deel nie korrek nie.)' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê: "1 m is dieselfde as 10 cm, want daar is ook 10 mm in ʼn cm." Is die leerder korrek?', checkMode: 'auto', options: ['Ja — 1 m is altyd gelyk aan 10 cm.', 'Nee — die leerder verwar twee verskillende feite; daar is 100 cm in 1 m, nie 10 nie — die 10 mm in 1 cm is ʼn aparte feit.', 'Ja, maar net wanneer kort voorwerpe gemeet word.', 'Nee — trouens, 1 m = 1 000 cm.'], correctIndex: 1, explanation: 'Daar is 100 cm in 1 m (nie 10 nie). Die leerder het dit verwar met die aparte feit dat daar 10 mm in 1 cm is.' },

        // Blok C — Meerstap- / gemengde-eenheid-omskakelings (9-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Gordynrail meet 640 cm. Skryf hierdie lengte met meter en sentimeter saam.', checkMode: 'auto', options: ['64 m 0 cm', '6 m 4 cm', '4 m 60 cm', '6 m 40 cm'], correctIndex: 3, explanation: '640 cm = 600 cm + 40 cm = 6 m 40 cm. (64 m 0 cm plaas die desimale punt verkeerd; 6 m 4 cm laat ʼn nul in die cm-deel weg; 4 m 60 cm verwissel die syfers.)' },
        { difficulty: 'Medium', question: 'ʼn Hardloper het 2 175 m van ʼn wedloop voltooi. Die telbord wys afstande liewer met km en m saam. Wat sou dit wys?', checkMode: 'auto', options: ['21 km 75 m', '2 km 175 m', '2 km 17 m', '12 km 75 m'], correctIndex: 1, explanation: '2 175 m = 2 000 m + 175 m = 2 km 175 m. (2 km 17 m laat ʼn syfer weg; 21 km 75 m en 12 km 75 m plaas die syfers verkeerd.)' },
        { difficulty: 'Medium', question: 'ʼn Wandeltoepassing teken ʼn stap aan as 3 km 400 m. Vir ʼn fiksheidsverslag moet die afstand as ʼn enkele getal in meter ingevoer word. Wat moet ingevoer word?', checkMode: 'auto', options: ['340 m', '3 400 m', '3 040 m', '34 000 m'], correctIndex: 1, explanation: '3 km 400 m = 3 000 m + 400 m = 3 400 m. (340 m laat ʼn nul weg; 3 040 m verloor ʼn nul uit die 400; 34 000 m voeg ʼn ekstra nul by.)' },
        { difficulty: 'Medium', question: 'ʼn Naaldwerkster het ʼn gordyn as 4 m 15 cm gemeet, maar haar faktuur laat net sentimeter toe. Watter enkele getal in sentimeter moet sy skryf?', checkMode: 'auto', options: ['4 015 cm', '451 cm', '41,5 cm', '415 cm'], correctIndex: 3, explanation: '4 m 15 cm = 400 cm + 15 cm = 415 cm. (4 015 cm hou die meter-syfer apart in plaas van om te skakel; 451 cm verwissel die syfers; 41,5 cm deel per ongeluk deur 10.)' },

        // Blok D — Vergelyk en orden lengtes (13-15, Medium)
        { difficulty: 'Medium', question: 'Wat is korter: 999 mm of 1 m?', checkMode: 'auto', options: ['1 m, want 1 is ʼn kleiner getal as 999', '999 mm, want 999 is ʼn kleiner getal as 1 000', '999 mm, want 1 m = 1 000 mm, en 999 mm is 1 mm minder as 1 000 mm', 'Hulle is presies dieselfde lengte'], correctIndex: 2, explanation: 'Skakel om na dieselfde eenheid: 1 m = 1 000 mm, en 999 mm is 1 mm minder, dus is 999 mm korter. Om die rou getalle 999 en 1 sonder omskakeling te vergelyk is nie ʼn geldige metode nie, al lyk die antwoord soortgelyk.' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer dat 2 500 m korter is as 2 km, omdat "2 500 meer syfers het, dus moet dit ʼn kleiner hoeveelheid wees." Is die leerder korrek?', checkMode: 'auto', options: ['Die leerder is korrek — meer syfers beteken altyd ʼn kleiner getal.', 'Die leerder is verkeerd — skakel albei om na meter, 2 km = 2 000 m, en aangesien 2 500 m groter is as 2 000 m, is 2 500 m eintlik langer as 2 km.', 'Die leerder is korrek — 2 500 m is presies gelyk aan 2 km.', 'Die leerder is verkeerd — 2 km is eintlik gelyk aan 2 500 m.'], correctIndex: 1, explanation: 'Aantal syfers is nie ʼn geldige manier om lengtes in verskillende eenhede te vergelyk nie. Skakel albei om na meter: 2 km = 2 000 m, en 2 500 m bly 2 500 m. Aangesien 2 500 m > 2 000 m, is 2 500 m langer, nie korter nie.' },
        { difficulty: 'Medium', question: 'Orden hierdie drie lengtes van kleinste na grootste: 3 200 m, 2 km 900 m, 3 km 50 m.', checkMode: 'auto', options: ['3 200 m, 2 km 900 m, 3 km 50 m', '2 km 900 m, 3 200 m, 3 km 50 m', '2 km 900 m, 3 km 50 m, 3 200 m', '3 km 50 m, 2 km 900 m, 3 200 m'], correctIndex: 2, explanation: 'Skakel alles om na meter: 3 200 m bly 3 200 m, 2 km 900 m = 2 900 m, 3 km 50 m = 3 050 m. Van kleinste na grootste: 2 900 m, 3 050 m, 3 200 m — dus 2 km 900 m, 3 km 50 m, 3 200 m. (Die ander ordes verwar watter omgeskakelde waarde die kleinste is.)' },

        // Blok E — Woordprobleme (16-18, Medium-Hard)
        { difficulty: 'Medium', question: 'ʼn Stuk draadheining is 3 m 60 cm lank. ʼn Ander stuk is 2 m 85 cm lank. Wat is die totale lengte van albei stukke?', checkMode: 'auto', options: ['6 m 35 cm', '6 m 45 cm', '7 m 45 cm', '6 m 55 cm'], correctIndex: 1, explanation: 'Tel die cm op: 60 + 85 = 145 cm. Aangesien 145 ≥ 100, skakel om: 145 cm = 1 m 45 cm. Tel die m op: 3 + 2 + 1 (oorgedra) = 6 m. Totaal: 6 m 45 cm. (Die ander opsies hanteer die oordrag verkeerd.)' },
        { difficulty: 'Medium', question: 'ʼn Pyp is 9 m lank. ʼn Loodgieter sny 3 m 65 cm af om onder ʼn wasbak in te pas. Hoeveel pyp is oor?', checkMode: 'auto', options: ['5 m 35 cm', '6 m 35 cm', '5 m 45 cm', '5 m 65 cm'], correctIndex: 0, explanation: '9 m = 900 cm. 900 cm − 365 cm = 535 cm = 5 m 35 cm. (Die ander opsies kom van ʼn leen- of aftrekfout.)' },
        { difficulty: 'Medium-Hard', question: 'ʼn Afleweringsbestelwa moet 15 km ry om ʼn pakhuis te bereik. Dit het reeds 9 km 750 m gery. Hoeveel verder moet dit nog ry?', checkMode: 'auto', options: ['6 km 250 m', '5 km 250 m', '5 km 750 m', '4 km 250 m'], correctIndex: 1, explanation: '15 km − 9 km 750 m: leen 1 km (1 000 m) om 14 km 1 000 m te maak, trek dan 9 km 750 m af om 5 km 250 m te kry. (Die ander opsies kom van ʼn leenfout.)' },

        // Blok F — Bekroningsvraag (19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Draadheining benodig pale elke 4 m langs ʼn reguit 32 m heininglyn, met ʼn paal aan elke punt. As elke paal R95 kos, wat is die totale koste van die pale?', checkMode: 'auto', options: ['R760', 'R950', 'R855', 'R665'], correctIndex: 2, explanation: 'Gapings = 32 ÷ 4 = 8. Aangesien ʼn paal aan albei punte nodig is, pale = gapings + 1 = 9. Totale koste = 9 × R95 = R855. (R760 vergeet die ekstra eindpaal en gebruik net 8 pale; R950 gebruik per ongeluk 10 pale; R665 gebruik te min pale.)' },
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
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die lengte van ʼn sokkerveld te meet: mm, cm, m of km?', checkMode: 'auto', options: ['mm', 'cm', 'm', 'km'], correctIndex: 2, explanation: 'ʼn Sokkerveld is ʼn medium-tot-groot area, die beste gemeet in meter (m) — mm of cm sou ʼn onredelik groot getal gee, en km sou veels te groot wees.' },
        { difficulty: 'Easy', question: 'Watter eenheid sou jy gebruik om die breedte van ʼn vingernael te meet: mm, cm, m of km?', checkMode: 'auto', options: ['km', 'cm', 'm', 'mm'], correctIndex: 3, explanation: 'ʼn Vingernael is baie dun, die beste gemeet in millimeter (mm) — cm, m of km sou almal te grof wees om die breedte daarvan vas te vang.' },
        { difficulty: 'Easy', question: 'Skat die afstand wat jy in omtrent 10 minute kan loop. Kies die mees redelike skatting.', checkMode: 'auto', options: ['1 m', '100 m', '1 km', '10 km'], correctIndex: 2, explanation: 'Om vir ongeveer 10 minute te loop, dek jy ongeveer 1 km — dit stem ooreen met die verwysingsfeit vir ʼn kilometer. 1 m en 100 m is veels te kort vir 10 minute se loop, en 10 km sou meer as ʼn uur neem.' },
        { difficulty: 'Easy', question: 'ʼn Liniaal langs ʼn potlood geplaas wys die potlood strek van die 0 cm-merk tot die 12 cm-merk. Watter stelling gee korrek die gemete lengte van die potlood, en die rede waarom ons van die 0-merk af lees?', checkMode: 'auto', options: ['12 cm — ons lees van die 0-merk af omdat liniale altyd van die rand af begin tel, en 0 merk net daardie punt vir versiering.', '12 cm — ons lees van die 0-merk af omdat dit die ware beginpunt van die skaal is; die fisiese rand van die liniaal kan verweer wees en nie met 0 belyn nie.', '13 cm — ons lees van die 0-merk af en tel die aantal roosterlyne wat gekruis word, insluitend die beginlyn.', '12 cm — maar dit maak nie saak of jy van die rand of die 0-merk af lees nie, hulle gee altyd dieselfde antwoord.'], correctIndex: 1, explanation: 'Die potlood strek van die 0-merk tot die 12 cm-merk, dus meet dit 12 cm. Ons lees van die 0-merk af, nie die fisiese rand nie, omdat die rand dikwels effens verweer is en nie altyd presies met die ware nulpunt van die skaal belyn nie.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="100" width="190" height="26" fill="none" stroke="#0f1f3d" stroke-width="2"/><g stroke="#0f1f3d" stroke-width="1.5"><line x1="15" y1="100" x2="15" y2="126"/><line x1="30" y1="100" x2="30" y2="114"/><line x1="45" y1="100" x2="45" y2="120"/><line x1="60" y1="100" x2="60" y2="114"/><line x1="75" y1="100" x2="75" y2="120"/><line x1="90" y1="100" x2="90" y2="114"/><line x1="105" y1="100" x2="105" y2="120"/><line x1="120" y1="100" x2="120" y2="114"/><line x1="135" y1="100" x2="135" y2="120"/><line x1="150" y1="100" x2="150" y2="114"/><line x1="165" y1="100" x2="165" y2="120"/><line x1="180" y1="100" x2="180" y2="114"/><line x1="195" y1="100" x2="195" y2="126"/></g><text x="15" y="140" font-size="13" font-weight="700" fill="#374151" text-anchor="middle">0</text><text x="105" y="140" font-size="13" font-weight="700" fill="#374151" text-anchor="middle">6</text><text x="195" y="140" font-size="13" font-weight="700" fill="#374151" text-anchor="middle">12</text><rect x="15" y="70" width="180" height="14" fill="#fde68a" stroke="#0f1f3d" stroke-width="2"/><polygon points="195,70 205,77 195,84" fill="#fde68a" stroke="#0f1f3d" stroke-width="2"/><text x="105" y="60" font-size="14" font-weight="700" fill="#2563eb" text-anchor="middle">potlood</text></svg>' },

        // Blok B — Enkelstap-omskakelings (4-8, Maklik-Medium)
        { difficulty: 'Easy', question: 'Skakel 75 mm om na cm.', checkMode: 'auto', options: ['0,75 cm', '75 cm', '750 cm', '7,5 cm'], correctIndex: 3, explanation: 'Deel deur 10 om mm na cm om te skakel: 75 ÷ 10 = 7,5 cm. (0,75 cm deel deur 100; 75 cm vergeet om om te skakel; 750 cm vermenigvuldig in plaas van deel.)' },
        { difficulty: 'Easy', question: 'ʼn Stapel van 6 identiese muntstukke is presies 6 cm hoog. Skryf hierdie hoogte in millimeter.', checkMode: 'auto', options: ['6 mm', '600 mm', '60 mm', '0,6 mm'], correctIndex: 2, explanation: 'Vermenigvuldig met 10 om cm na mm om te skakel: 6 × 10 = 60 mm. (6 mm vergeet om om te skakel; 600 mm vermenigvuldig met 100 in plaas van 10; 0,6 mm deel in plaas van vermenigvuldig.)' },
        { difficulty: 'Easy-Medium', question: 'ʼn Rol lint is gemerk 250 cm. ʼn Handwerkresep lys lintlengtes in meter — hoeveel meter is op die rol?', checkMode: 'auto', options: ['25 m', '2,5 m', '0,25 m', '250 m'], correctIndex: 1, explanation: 'Deel deur 100 om cm na m om te skakel: 250 ÷ 100 = 2,5 m. (25 m deel deur 10 in plaas van 100; 0,25 m deel deur 1 000; 250 m vergeet om om te skakel.)' },
        { difficulty: 'Medium', question: 'ʼn Weerberig sê ʼn storm beweeg na die kus toe, tans 6 km ver. Hoeveel meter ver is die storm?', checkMode: 'auto', options: ['600 m', '6 000 m', '60 000 m', '60 m'], correctIndex: 1, explanation: 'Vermenigvuldig met 1 000 om km na m om te skakel: 6 × 1 000 = 6 000 m. (600 m en 60 m vermenigvuldig met die verkeerde mag van 10; 60 000 m vermenigvuldig met 10 000.)' },
        { difficulty: 'Medium', question: 'ʼn Leerder skakel 250 cm om na meter soos volg: "250 ÷ 10 = 25, so 250 cm = 25 m." Is dit korrek?', checkMode: 'auto', options: ['Ja, die leerder is korrek.', 'Nee — die leerder het deur die verkeerde getal gedeel; daar is 100 cm in 1 m, nie 10 nie, so die korrekte werk is 250 ÷ 100 = 2,5 m.', 'Nee — die leerder moes met 10 vermenigvuldig het in plaas van deel.', 'Ja, maar die antwoord moet as 2,5 m geskryf word, nie 25 m nie.'], correctIndex: 1, explanation: 'Daar is 100 cm in 1 m, so die korrekte omskakeling is 250 ÷ 100 = 2,5 m. Om deur 10 te deel sou mm na cm omskakel, nie cm na m nie — dit is die fout hier.' },

        // Blok C — Meerstap- / gemengde-eenheid-omskakelings (9-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Mark-tafel is 720 cm lank. Skryf hierdie lengte met meter en sentimeter saam.', checkMode: 'auto', options: ['72 m 0 cm', '7 m 2 cm', '2 m 70 cm', '7 m 20 cm'], correctIndex: 3, explanation: '720 cm = 700 cm + 20 cm = 7 m 20 cm. (72 m 0 cm plaas die desimale punt verkeerd; 7 m 2 cm laat ʼn nul in die cm-deel weg; 2 m 70 cm verwissel die syfers.)' },
        { difficulty: 'Medium', question: 'ʼn Afleweringsbestuurder het 4 080 m van haar roete afgelê. Haar paneelbord wys afstande liewer met km en m saam. Wat sou dit wys?', checkMode: 'auto', options: ['40 km 8 m', '4 km 8 m', '4 km 80 m', '48 km 0 m'], correctIndex: 2, explanation: '4 080 m = 4 000 m + 80 m = 4 km 80 m. (4 km 8 m laat ʼn nul weg; 40 km 8 m en 48 km 0 m plaas die syfers verkeerd.)' },
        { difficulty: 'Medium', question: 'ʼn Padwyser wys die kampeerterrein is 5 km 90 m ver. Vir ʼn GPS-toestel moet dit as ʼn enkele getal in meter ingevoer word. Wat moet ingevoer word?', checkMode: 'auto', options: ['590 m', '5 090 m', '5 900 m', '50 090 m'], correctIndex: 1, explanation: '5 km 90 m = 5 000 m + 90 m = 5 090 m. (590 m laat ʼn nul weg; 5 900 m verloor ʼn nul uit die 90; 50 090 m voeg ʼn ekstra nul by.)' },
        { difficulty: 'Medium', question: 'ʼn Elektrisiën het ʼn kabel as 2 m 8 cm gemeet, maar die faktuurkolom laat net sentimeter toe. Watter enkele getal in sentimeter moet geskryf word?', checkMode: 'auto', options: ['28 cm', '208 cm', '280 cm', '2 008 cm'], correctIndex: 1, explanation: '2 m 8 cm = 200 cm + 8 cm = 208 cm. (28 cm laat die meter heeltemal weg; 280 cm verwissel die syfers; 2 008 cm hou die meter-syfer apart in plaas van om te skakel.)' },

        // Blok D — Vergelyk en orden lengtes (13-15, Medium)
        { difficulty: 'Medium', question: 'Wat is langer: 300 cm of 3 m 50 cm?', checkMode: 'auto', options: ['300 cm, want 300 is ʼn groter getal as 3,50', '3 m 50 cm, want 300 cm = 3 m, en 3 m 50 cm is 50 cm meer as dit', 'Hulle is presies dieselfde lengte', '300 cm, want sentimeter is altyd die groter eenheid'], correctIndex: 1, explanation: 'Skakel om na dieselfde eenheid: 300 cm = 3 m, en 3 m 50 cm is 50 cm groter as 3 m, dus is 3 m 50 cm langer.' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer dat 650 mm korter is as 60 cm, omdat "650 het 3 syfers maar 60 het net 2." Is die leerder korrek?', checkMode: 'auto', options: ['Die leerder is korrek — meer syfers beteken altyd ʼn langer meting.', 'Die leerder is verkeerd — skakel albei om na dieselfde eenheid, 650 mm = 65 cm, en aangesien 65 cm groter is as 60 cm, is 650 mm eintlik langer as 60 cm.', 'Die leerder is korrek — 650 mm is presies gelyk aan 60 cm.', 'Die leerder is verkeerd — 650 mm is eintlik gelyk aan 6,5 cm, wat korter is as 60 cm.'], correctIndex: 1, explanation: 'Jy kan nie lengtes volgens aantal syfers vergelyk as die eenhede verskil nie. Skakel om na dieselfde eenheid: 650 mm = 65 cm, en 60 cm bly 60 cm. Aangesien 65 cm > 60 cm, is 650 mm langer as 60 cm, nie korter nie.' },
        { difficulty: 'Medium', question: 'Orden hierdie drie lengtes van kleinste na grootste: 1 450 mm, 1 m 30 cm, 138 cm.', checkMode: 'auto', options: ['1 450 mm, 138 cm, 1 m 30 cm', '1 m 30 cm, 138 cm, 1 450 mm', '138 cm, 1 m 30 cm, 1 450 mm', '1 m 30 cm, 1 450 mm, 138 cm'], correctIndex: 1, explanation: 'Skakel alles om na cm: 1 450 mm = 145 cm, 1 m 30 cm = 130 cm, 138 cm bly 138 cm. Van kleinste na grootste: 130 cm, 138 cm, 145 cm — dus 1 m 30 cm, 138 cm, 1 450 mm. (Die ander ordes verwar watter omgeskakelde waarde die kleinste is.)' },

        // Blok E — Woordprobleme (16-18, Medium-Hard)
        { difficulty: 'Medium', question: 'ʼn Plank hout is 4 m 55 cm lank. ʼn Ander plank is 3 m 70 cm lank. Wat is die totale lengte van albei planke?', checkMode: 'auto', options: ['7 m 25 cm', '8 m 25 cm', '8 m 15 cm', '9 m 25 cm'], correctIndex: 1, explanation: 'Tel die cm op: 55 + 70 = 125 cm. Aangesien 125 ≥ 100, skakel om: 125 cm = 1 m 25 cm. Tel die m op: 4 + 3 + 1 (oorgedra) = 8 m. Totaal: 8 m 25 cm. (Die ander opsies hanteer die oordrag verkeerd.)' },
        { difficulty: 'Medium', question: 'ʼn Rol stof is 6 m lank. ʼn Kleremaker sny 2 m 55 cm af om ʼn rok te maak. Hoeveel stof is oor?', checkMode: 'auto', options: ['3 m 55 cm', '3 m 45 cm', '4 m 45 cm', '3 m 35 cm'], correctIndex: 1, explanation: '6 m = 600 cm. 600 cm − 255 cm = 345 cm = 3 m 45 cm. (Die ander opsies kom van ʼn leen- of aftrekfout.)' },
        { difficulty: 'Medium-Hard', question: 'ʼn Draad wat 340 cm lank is, word in 4 gelyke stukke gesny om raamhakies te maak. Hoe lank is elke stuk, en is daar enige draad oor?', checkMode: 'auto', options: ['85 cm, met 4 cm oor', '85 cm, met niks oor nie', '80 cm, met 20 cm oor', '86 cm, met niks oor nie'], correctIndex: 1, explanation: '"Gelyke stukke" beteken deel: 340 ÷ 4 = 85 cm presies, met geen res nie.' },

        // Blok F — Bekroningsvraag (19, Moeilik)
        { difficulty: 'Hard', question: 'Watter metode wys korrek of 4 200 cm meer of minder is as 4 km 100 m?', checkMode: 'auto', options: ['Vergelyk die rou getalle 4 200 en 4 100 direk — aangesien 4 200 > 4 100, is 4 200 cm meer.', 'Skakel albei om na meter: 4 200 cm ÷ 100 = 42 m, en 4 km 100 m = 4 100 m. Aangesien 42 m baie minder is as 4 100 m, is 4 200 cm minder as 4 km 100 m.', 'Skakel albei om na kilometer: 4 200 cm = 4,2 km, wat meer is as 4 km 100 m.', 'Aangesien cm ʼn kleiner eenheid as km is, is enige getal in cm outomaties meer as enige getal in km.'], correctIndex: 1, explanation: 'Skakel albei lengtes om na dieselfde eenheid, bv. meter: 4 200 cm ÷ 100 = 42 m, en 4 km 100 m = 4 100 m. Deur 42 m met 4 100 m te vergelyk, wys dit dat 4 200 cm baie minder is as 4 km 100 m — om rou getalle of nie-omgeskakelde eenhede te vergelyk (soos in die ander opsies) gee die verkeerde antwoord.' },
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
