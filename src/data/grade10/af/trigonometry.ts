import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (trigonometry roles) ─────────────────────────────────────
// opposite     → blue   (#2563eb)
// adjacent     → orange (#ea580c)
// hypotenuse   → green  (#16a34a)
// unknown      → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

// topicInfo — title: Trigonometrie | grade: 10 | subject: Wiskunde
export const topicData: TopicData = {
  title: 'Trigonometrie',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — TRIGONOMETRIC RATIOS IN RIGHT-ANGLED TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'trig-ratios-right-triangles',
      title: 'Trigonometriese Verhoudings in Reghoekige Driehoeke',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">In ʼn reghoekige driehoek verbind die trigonometriese verhoudings <strong>sin</strong>, <strong>cos</strong> en <strong>tan</strong> ʼn hoek aan die verhouding van twee sye. <strong>STSCASTTA</strong> help jou onthou watter sye om te gebruik: sin&nbsp;θ&nbsp;=&nbsp;${bl('teenoorstaande')}/${gr('skuinssy')}, cos&nbsp;θ&nbsp;=&nbsp;${or('aangrensende')}/${gr('skuinssy')}, tan&nbsp;θ&nbsp;=&nbsp;${bl('teenoorstaande')}/${or('aangrensende')}. Hierdie verhoudings is onafhanklik van die grootte van die driehoek en hang net van die hoek af, aangesien gelykvormige driehoeke gelyke hoekverhoudings het.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('teenoorstaande')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('aangrensende')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('skuinssy')}</span>` +
        `</div>` +

        // ── SOHCAHTOA ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">STSCASTTA</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">STS — sin</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">sin&nbsp;θ = ${bl('teenoorstaande')} / ${gr('skuinssy')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">CAS — cos</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">cos&nbsp;θ = ${or('aangrensende')} / ${gr('skuinssy')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">TTA — tan</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">tan&nbsp;θ = ${bl('teenoorstaande')} / ${or('aangrensende')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom die grootte van die driehoek nie saak maak nie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Gelykvormige driehoeke met dieselfde hoeke lewer altyd <strong>dieselfde verhouding</strong> tussen hul sye op. As die driehoek verdubbel of gehalveer word, word al die sye eweredig geskaleer, sodat die verhouding konstant bly. Dit is waarom die trigonometriese verhoudings net van die <strong>hoek</strong> afhang, nie van die grootte van die driehoek nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In reghoekige driehoek ABC met hoek B = 90°, hoek A = 30° en AB = 10 cm, bepaal die skuinssy AC.',
          answer: `${gr('AC')} ≈ 11.55 cm`,
          steps: [
            `Identifiseer die sye relatief tot hoek A. AB (= ${or('10')} cm) is die ${or('aangrensende')} sy (langs hoek A). AC is die ${gr('skuinssy')} wat ons soek.`,
            `Kies die korrekte verhouding: cos&nbsp;A = ${or('aangrensende')} / ${gr('skuinssy')}. Dus cos&nbsp;30° = ${or('10')} / ${gr('AC')}.`,
            `Herrangskik: ${gr('AC')} = ${or('10')} / cos&nbsp;30°.`,
            `Bereken: cos&nbsp;30° ≈ 0.866. ${gr('AC')} = 10 / 0.866 ≈ <strong>11.55 cm</strong>. ✓`,
          ],
        },
        {
          question: 'Sipho sê dat as jy ʼn hoek verdubbel, verdubbel jy ook sy sinuswaarde, so sin 60° = 2 × sin 30°. Is hy korrek?',
          answer: 'Nee — trigonometriese verhoudings skaleer nie lineêr met hoekgrootte nie.',
          steps: [
            `Bereken sin&nbsp;30° met ʼn sakrekenaar: sin&nbsp;30° = ${bl('0.5')}.`,
            `As Sipho korrek was, sou sin&nbsp;60° gelyk wees aan 2 × ${bl('0.5')} = ${bl('1.0')}.`,
            `Kontroleer: sin&nbsp;60° ≈ ${bl('0.866')}, wat <strong>nie</strong> gelyk is aan 1.0 nie. Sipho is <strong>verkeerd</strong>.`,
            `<strong>Gevolgtrekking:</strong> Trigonometriese verhoudings is nie eweredig aan die hoek nie. Om die hoek te verdubbel, verdubbel <em>nie</em> die sinuswaarde nie — die verwantskap is nie-lineêr.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat STSCASTTA bekendstel en wys hoe om die teenoorstaande, aangrensende en skuinssy sye relatief tot ʼn gegewe hoek in ʼn reghoekige driehoek te identifiseer" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Reghoekige driehoek gemerk met die teenoorstaande sy in blou, aangrensende sy in oranje en skuinssy in groen, met STSCASTTA-verhoudings getoon vir ʼn gegewe hoek θ" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING RIGHT-ANGLED TRIANGLES AND SIMPLE TRIG EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-right-triangles',
      title: 'Reghoekige Driehoeke en Eenvoudige Trigonometriese Vergelykings Oplos',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik trigonometriese verhoudings om <strong>onbekende sye of hoeke</strong> in reghoekige driehoeke te bepaal, en los eenvoudige trigonometriese vergelykings vir hoeke tussen 0° en 90° op met behulp van <strong>inverse trigonometriese funksies</strong> (sin⁻¹, cos⁻¹, tan⁻¹).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bekende waardes')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('onbekende waarde')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gebruikte trig-verhouding')}</span>` +
        `</div>` +

        // ── Method reference ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">ʼn Onbekende sy of hoek bepaal</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Merk')} — Identifiseer die ${bl('bekende')} sye en hoeke en die ${re('onbekende')} hoeveelheid. ʼn Vinnige diagram help.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Kies verhouding')} — Kies die ${gr('trig-verhouding')} (sin, cos, of tan) wat die ${bl('bekende')} waardes met die ${re('onbekende')} verbind.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Los op')} — Herrangskik die vergelyking en los op vir die ${re('onbekende')}. Gebruik ʼn <strong>inverse trigonometriese funksie</strong> (bv. tan⁻¹) wanneer die onbekende ʼn hoek is.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Inverse trigonometriese funksies op ʼn sakrekenaar gebruik</p>` +
        `<p style="margin:0;color:#1e3a8a;">As sin&nbsp;θ = 0.6, dan is θ = sin⁻¹(0.6). Druk die <strong>2nd</strong>- of <strong>Shift</strong>-knoppie op jou sakrekenaar, dan die trig-funksieknoppie. Die inverse funksie "keer" die verhouding "om" en gee die hoek in grade terug.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In reghoekige driehoek PQR met hoek Q = 90°, PQ = 8 cm en QR = 6 cm, bepaal hoek P.',
          answer: `Hoek P ≈ ${re('36.87°')}`,
          steps: [
            `Identifiseer die sye relatief tot hoek P. QR (= ${bl('6')} cm) is die ${bl('teenoorstaande')} sy (oorkant P). PQ (= ${bl('8')} cm) is die ${bl('aangrensende')} sy (langs P).`,
            `Kies die verhouding wat ${bl('teenoorstaande')} en ${bl('aangrensende')} verbind: ${gr('tan')} P = ${bl('teenoorstaande')} / ${bl('aangrensende')} = ${bl('QR')} / ${bl('PQ')} = ${bl('6')} / ${bl('8')} = ${bl('0.75')}.`,
            `Pas die inverse trig-funksie toe: P = ${gr('tan⁻¹')}(0.75) ≈ <strong>${re('36.87°')}</strong>. ✓`,
          ],
        },
        {
          question: 'Los op vir θ (0° ≤ θ ≤ 90°): sin θ = 0.6.',
          answer: `θ ≈ ${re('36.87°')}`,
          steps: [
            `Ons is gegee ${gr('sin')}&nbsp;θ = ${bl('0.6')} en moet die ${re('onbekende')} hoek θ bepaal.`,
            `Pas die inverse funksie toe: θ = ${gr('sin⁻¹')}(${bl('0.6')}).`,
            `Gebruik ʼn sakrekenaar: θ ≈ <strong>${re('36.87°')}</strong>. ✓`,
          ],
        },
        {
          question: 'Lerato het ʼn driehoek met skuinssy 15 cm en een hoek van 40°. Bepaal die sy teenoor hierdie hoek.',
          answer: `Teenoorstaande sy ≈ ${re('9.64')} cm`,
          steps: [
            `Identifiseer die ${bl('bekende')} waardes: ${bl('skuinssy')} = ${bl('15')} cm, hoek = ${bl('40°')}. Die ${re('onbekende')} is die teenoorstaande sy.`,
            `Kies die verhouding: ${gr('sin')} 40° = ${re('teenoorstaande')} / ${bl('skuinssy')} = ${re('teenoorstaande')} / ${bl('15')}.`,
            `Herrangskik: ${re('teenoorstaande')} = ${bl('15')} × ${gr('sin')} 40°.`,
            `Bereken: ${gr('sin')} 40° ≈ 0.6428. ${re('teenoorstaande')} = 15 × 0.6428 ≈ <strong>${re('9.64')} cm</strong>. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn onbekende sy of hoek in ʼn reghoekige driehoek te bepaal deur STSCASTTA en inverse trig-funksies op ʼn sakrekenaar te gebruik" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Reghoekige driehoek PQR met bekende sye PQ en QR uitgelig in blou en die onbekende hoek P uitgelig in rooi, wat wys hoe die tan-verhouding stap vir stap toegepas word" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — DEFINING TRIG FUNCTIONS FOR ANY ANGLE (x,y,r)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'trig-any-angle-xyr',
      title: 'Trigonometriese Funksies vir Enige Hoek Definieer (x,y,r)',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Ons brei trig-definisies uit verby reghoekige driehoeke deur ʼn punt (${bl('x')},&nbsp;${gr('y')}) op die eindarm van ʼn hoek θ te gebruik, met ${or('r')} = √(${bl('x')}²&nbsp;+&nbsp;${gr('y')}²) as die afstand vanaf die oorsprong. Dan is sin&nbsp;θ = ${gr('y')}/${or('r')}, cos&nbsp;θ = ${bl('x')}/${or('r')}, tan&nbsp;θ = ${gr('y')}/${bl('x')}. Dit maak hoeke groter as 90° moontlik en werk in al vier kwadrante van die Cartesiese vlak.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-koördinaat')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-koördinaat')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('r (afstand)')}</span>` +
        `</div>` +

        // ── General definitions ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Algemene definisies</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">sin θ</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">sin&nbsp;θ = ${gr('y')} / ${or('r')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">cos θ</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">cos&nbsp;θ = ${bl('x')} / ${or('r')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">tan θ</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">tan&nbsp;θ = ${gr('y')} / ${bl('x')}</p>` +
        `</div>` +

        `</div>` +

        // ── r is always positive ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelfeite oor ${or('r')}</p>` +
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#374151;">${or('r')} = √(${bl('x')}² + ${gr('y')}²) is altyd <strong>positief</strong> — dit is ʼn afstand. Die teken van ${bl('x')} en ${gr('y')} verander na gelang van watter kwadrant die punt in lê, en dit is wat veroorsaak dat sin, cos en tan positief of negatief is in verskillende kwadrante.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom dit verder as reghoekige driehoeke strek</p>` +
        `<p style="margin:0;color:#1e3a8a;">In ʼn reghoekige driehoek is ${bl('x')}, ${gr('y')} en ${or('r')} almal positief, wat die bekende STSCASTTA-verhoudings gee. Deur ${bl('x')} en ${gr('y')} <strong>negatief</strong> te laat wees, kan ons trig-funksies vir hoeke in <strong>al vier kwadrante</strong> definieer — insluitend hoeke groter as 90°.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Punt (3, 4) lê op die eindarm van hoek θ. Bepaal sin θ, cos θ en tan θ.',
          answer: `sin&nbsp;θ = ${gr('4')}/${or('5')}, cos&nbsp;θ = ${bl('3')}/${or('5')}, tan&nbsp;θ = ${gr('4')}/${bl('3')}`,
          steps: [
            `Identifiseer die koördinate: ${bl('x')} = ${bl('3')}, ${gr('y')} = ${gr('4')}.`,
            `Bereken ${or('r')}: ${or('r')} = √(${bl('3')}² + ${gr('4')}²) = √(9 + 16) = √25 = ${or('5')}.`,
            `Pas die definisies toe: sin&nbsp;θ = ${gr('y')} / ${or('r')} = ${gr('4')} / ${or('5')}. &nbsp; cos&nbsp;θ = ${bl('x')} / ${or('r')} = ${bl('3')} / ${or('5')}. &nbsp; tan&nbsp;θ = ${gr('y')} / ${bl('x')} = ${gr('4')} / ${bl('3')}.`,
            `Sien die diagram hieronder. ✓`,
          ],
        },
        {
          question: 'Thabo het ʼn punt (−5, 12) op die eindarm van hoek θ. Bepaal r en cos θ.',
          answer: `${or('r')} = ${or('13')}, cos&nbsp;θ = ${bl('−5')}/${or('13')}`,
          steps: [
            `Identifiseer die koördinate: ${bl('x')} = ${bl('−5')}, ${gr('y')} = ${gr('12')}.`,
            `Bereken ${or('r')}: ${or('r')} = √((${bl('−5')})² + ${gr('12')}²) = √(25 + 144) = √169 = ${or('13')}.`,
            `Pas die definisie toe: cos&nbsp;θ = ${bl('x')} / ${or('r')} = ${bl('−5')} / ${or('13')}. Die kosinus is <strong>negatief</strong> omdat ${bl('x')} negatief is — die punt lê in die tweede kwadrant. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat trig-definisies na al vier kwadrante uitbrei deur ʼn punt (x,y) op die eindarm te gebruik en wys hoe r altyd positief is terwyl x en y negatief kan wees" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="[Diagram nodig: ʼn Cartesiese vlak met ʼn punt (3,4) met die eindarm vanaf die oorsprong geteken, r gemerk as die skuinssy-afstand, en x en y gemerk langs die asse]" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — GRAPHS OF sinθ, cosθ AND tanθ
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'graphs-sin-cos-tan',
      title: 'Grafieke van sinθ, cosθ en tanθ',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">Ons teken en interpreteer grafieke van y = sin θ, y = cos θ en y = tan θ vir 0° ≤ θ ≤ 360° (en −360° ≤ θ ≤ 0° waar toepaslik). Die sinus- en kosinusgrafieke is gladde golwe wat tussen −1 en 1 ossilleer met ʼn periode van 360°. Die tangensgrafiek het ʼn periode van 180° en het vertikale asimptote waar die funksie ongedefinieerd is (by 90° en 270°).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('maksimumpunte')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('minimumpunte')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('asimptote')}</span>` +
        `</div>` +

        // ── Key features table ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleuteleienskappe op ʼn oogopslag</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">y = sin θ</p>` +
        `<p style="color:#374151;font-size:13px;margin:0 0 4px;">Bereik: −1 tot 1</p>` +
        `<p style="color:#374151;font-size:13px;margin:0 0 4px;">Periode: 360°</p>` +
        `<p style="color:#374151;font-size:13px;margin:0 0 4px;">${gr('Maksimum: 1 by 90°')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${re('Minimum: −1 by 270°')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">y = cos θ</p>` +
        `<p style="color:#374151;font-size:13px;margin:0 0 4px;">Bereik: −1 tot 1</p>` +
        `<p style="color:#374151;font-size:13px;margin:0 0 4px;">Periode: 360°</p>` +
        `<p style="color:#374151;font-size:13px;margin:0 0 4px;">${gr('Maksimum: 1 by 0° en 360°')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${re('Minimum: −1 by 180°')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">y = tan θ</p>` +
        `<p style="color:#374151;font-size:13px;margin:0 0 4px;">Bereik: alle reële getalle</p>` +
        `<p style="color:#374151;font-size:13px;margin:0 0 4px;">Periode: 180°</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${or('Asimptote by 90° en 270°')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#9a3412;margin-bottom:6px;">Waarom tan θ asimptote het</p>` +
        `<p style="margin:0;color:#7c2d12;">tan θ = sin θ / cos θ. Wanneer cos θ = 0 (by 90° en 270°), sou ons deur nul deel — dit is ongedefinieerd. Die grafiek skiet na ±∞ by hierdie waardes, wat ${or('vertikale asimptote')} tot gevolg het.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Beskryf die vorm en sleuteleienskappe van y = sin θ vir 0° ≤ θ ≤ 360°.',
          answer: `ʼn Gladde golf wat by (0°, 0) begin, ʼn ${gr('maksimum van 1 by 90°')} bereik, na 0 by 180° terugkeer, na ʼn ${re('minimum van −1 by 270°')} daal, en na 0 by 360° terugkeer.`,
          steps: [
            `Die grafiek begin by (0°, 0) — sin 0° = 0.`,
            `Dit styg na ʼn ${gr('maksimum van 1 by 90°')} — sin 90° = 1.`,
            `Dit keer terug na 0 by 180° — sin 180° = 0.`,
            `Dit daal na ʼn ${re('minimum van −1 by 270°')} — sin 270° = −1.`,
            `Dit keer terug na 0 by 360° — sin 360° = 0. Sien die diagram hieronder.`,
          ],
        },
        {
          question: 'Sipho sê tan θ is gedefinieer vir alle waardes van θ. Is hy korrek?',
          answer: `Nee — tan θ is ongedefinieerd by ${or('90°')} en ${or('270°')} (en hul ekwivalente).`,
          steps: [
            `tan θ = sin θ / cos θ.`,
            `By 90°: cos 90° = 0, so tan 90° = sin 90° / 0 — deling deur nul is ${or('ongedefinieerd')}.`,
            `By 270°: cos 270° = 0, so tan 270° is ook ${or('ongedefinieerd')}.`,
            `Die grafiek het ${or('vertikale asimptote')} by hierdie waardes. Sipho is <strong>verkeerd</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat y=sinθ, y=cosθ en y=tanθ teken vir 0° tot 360°, maksimum- en minimumpunte identifiseer en vertikale asimptote op die tangensgrafiek verduidelik" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="[Diagram nodig: drie aparte grafieke langs mekaar wat y=sinθ, y=cosθ en y=tanθ vir 0° tot 360° toon, met sleutelpunte en asimptote (vir tan) duidelik gemerk]" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — THE EFFECT OF PARAMETERS a AND q
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'effect-of-parameters',
      title: 'Die Effek van Parameters a en q',
      icon: '🔧',
      explanation:
        `<p style="margin-bottom:16px;">Vir grafieke van die vorm y = a·sin θ + q (en eweso vir cos en tan) affekteer die parameter <strong>a</strong> die amplitude (vertikale strekking) — ʼn groter |a| rek die grafiek vertikaal, en ʼn negatiewe a reflekteer dit om die θ-as. Die parameter <strong>q</strong> skuif die hele grafiek vertikaal op (as q > 0) of af (as q &lt; 0).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('amplitudeverandering (a)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vertikale skuif (q)')}</span>` +
        `</div>` +

        // ── Parameter summary ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Wat elke parameter doen</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:12px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:28px;height:28px;line-height:28px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">a</span>` +
        `<div>` +
        `<p style="margin:0 0 4px;font-weight:600;color:#1e40af;">${bl('Amplitude / vertikale strekking')}</p>` +
        `<p style="margin:0;font-size:13px;color:#374151;">|a| gee die amplitude. Die grafiek ossilleer tussen ${bl('−|a|')} en ${bl('|a|')}. As a &lt; 0, word die grafiek om die θ-as gereflekteer.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:12px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:28px;height:28px;line-height:28px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">q</span>` +
        `<div>` +
        `<p style="margin:0 0 4px;font-weight:600;color:#9a3412;">${or('Vertikale skuif')}</p>` +
        `<p style="margin:0;font-size:13px;color:#374151;">Die hele grafiek skuif ${or('op')} met q eenhede (as q > 0) of ${or('af')} met |q| eenhede (as q &lt; 0). Die vorm en amplitude bly onveranderd.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vinnige kontrole: nuwe bereik na toepassing van a en q</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vir y = a·sin θ + q, is die minimumwaarde ${bl('−|a|')} + ${or('q')} en die maksimumwaarde ${bl('|a|')} + ${or('q')}. Gebruik dit om die nuwe bereik vinnig af te lees sonder om te teken.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Beskryf hoe die grafiek van y = 3 sin θ verskil van y = sin θ.',
          answer: `Die ${bl('amplitude vermeerder van 1 na 3')} — die grafiek ossilleer nou tussen ${bl('−3')} en ${bl('3')} in plaas van −1 en 1.`,
          steps: [
            `In y = sin θ is die amplitude 1 — die grafiek ossilleer tussen −1 en 1.`,
            `In y = ${bl('3')} sin θ word elke y-waarde met ${bl('3')} vermenigvuldig.`,
            `Die ${bl('amplitude vermeerder van 1 na 3')}, sodat die grafiek tussen ${bl('−3')} en ${bl('3')} ossilleer.`,
            `Die vorm (gladde golf) en periode (360°) bly onveranderd — net die ${bl('vertikale skaal')} verander.`,
          ],
        },
        {
          question: 'Lerato vergelyk y = cos θ + 2 met y = cos θ. Beskryf die verskil.',
          answer: `Die grafiek van y = cos θ + 2 is ${or('2 eenhede opwaarts')} geskuif — dit ossilleer nou tussen ${or('1')} en ${or('3')} in plaas van −1 en 1.`,
          steps: [
            `In y = cos θ ossilleer die grafiek tussen −1 en 1.`,
            `Deur ${or('q = 2')} by te tel, skuif die hele grafiek ${or('2 eenhede opwaarts')}.`,
            `Die nuwe minimum is −1 + 2 = ${or('1')} en die nuwe maksimum is 1 + 2 = ${or('3')}.`,
            `Die vorm, amplitude en periode bly almal onveranderd — net die ${or('vertikale posisie')} verander.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die effek van parameters a en q op y=a·sinθ+q wys — met amplitudestrekking deur a en vertikale skuif deur q, aan die hand van grafieke langs mekaar" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="[Diagram nodig: y=sinθ en y=3sinθ op dieselfde asse geteken om amplitudestrekking te wys; ʼn tweede grafiek wat y=cosθ en y=cosθ+2 wys om vertikale skuif te toon]" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — SOLVING 2D PROBLEMS USING TRIGONOMETRY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-2d-problems',
      title: '2D-Probleme met Trigonometrie Oplos',
      icon: '🏗️',
      explanation:
        `<p style="margin-bottom:16px;">Ons los werklike tweedimensionele probleme op deur trigonometriese modelle te bou en te interpreteer, dikwels met <strong>hoogte- en dieptehoeke</strong>, of deur verskeie reghoekige driehoeke te kombineer om ʼn onbekende lengte of hoek te bepaal.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('hoogtehoek')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('dieptehoek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('berekende hoogte / afstand')}</span>` +
        `</div>` +

        // ── Key definitions ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoogte- en dieptehoeke</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="font-size:20px;flex-shrink:0;">⬆️</span>` +
        `<div>` +
        `<p style="margin:0 0 4px;font-weight:600;color:#1e40af;">${bl('Hoogtehoek')}</p>` +
        `<p style="margin:0;font-size:13px;color:#374151;">Die hoek gemeet ${bl('opwaarts')} vanaf die horisontaal na die sig-lyn na ʼn voorwerp bo die waarnemer.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="font-size:20px;flex-shrink:0;">⬇️</span>` +
        `<div>` +
        `<p style="margin:0 0 4px;font-weight:600;color:#9a3412;">${or('Dieptehoek')}</p>` +
        `<p style="margin:0;font-size:13px;color:#374151;">Die hoek gemeet ${or('afwaarts')} vanaf die horisontaal na die sig-lyn na ʼn voorwerp onder die waarnemer.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Method ────────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#14532d;margin-bottom:6px;">Algemene metode vir 2D-probleme</p>` +
        `<p style="margin:0 0 8px;color:#166534;font-size:13px;">1. Teken ʼn duidelike diagram en merk alle bekende sye en hoeke.</p>` +
        `<p style="margin:0 0 8px;color:#166534;font-size:13px;">2. Identifiseer die reghoekige driehoek(e) wat die ${gr('onbekende')} bevat.</p>` +
        `<p style="margin:0;color:#166534;font-size:13px;">3. Pas die toepaslike trig-verhouding (STSCASTTA) toe en los op.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vanaf ʼn punt 50 m van die basis van ʼn gebou is die hoogtehoek na die bopunt 35°. Bepaal die hoogte van die gebou.',
          answer: `Hoogte ≈ ${gr('35.01 m')}`,
          steps: [
            `Teken ʼn reghoekige driehoek: die ${bl('hoogtehoek')} is 35°, die horisontale afstand (aangrensende sy) is ${bl('50 m')}, en die ${gr('hoogte')} (teenoorstaande sy) is onbekend.`,
            `Kies die verhouding wat teenoorstaande en aangrensende verbind: tan 35° = ${gr('hoogte')} / ${bl('50')}.`,
            `Herrangskik: ${gr('hoogte')} = ${bl('50')} × tan 35°.`,
            `Bereken: tan 35° ≈ 0.7002. ${gr('hoogte')} = 50 × 0.7002 ≈ ${gr('35.01 m')}. ✓`,
          ],
        },
        {
          question: 'Thabo staan bo-op ʼn 40 m krans en sien ʼn boot teen ʼn dieptehoek van 20°. Bepaal die horisontale afstand na die boot.',
          answer: `Afstand ≈ ${gr('109.9 m')}`,
          steps: [
            `Teken ʼn diagram: die ${or('dieptehoek')} vanaf Thabo na die boot is 20°. Die kranshoogte (teenoorstaande sy) is ${or('40 m')}, en die ${gr('horisontale afstand')} (aangrensende sy) is onbekend.`,
            `Die dieptehoek is gelyk aan die hoogtehoek vanaf die boot na Thabo (verwisselende binnehoeke), sodat die hoek in die driehoek 20° is.`,
            `tan 20° = ${or('40')} / ${gr('afstand')}. Herrangskik: ${gr('afstand')} = ${or('40')} / tan 20°.`,
            `Bereken: tan 20° ≈ 0.3640. ${gr('afstand')} = 40 / 0.3640 ≈ ${gr('109.9 m')}. ✓`,
          ],
        },
        {
          question: 'Twee geboue is 30 m van mekaar af. Vanaf die bopunt van die korter gebou (15 m hoog) is die hoogtehoek na die bopunt van die hoër gebou 25°. Bepaal die hoogte van die hoër gebou.',
          answer: `Hoogte van hoër gebou ≈ ${gr('28.99 m')}`,
          steps: [
            `Die horisontale afstand tussen die bopunte van die geboue is ${bl('30 m')} (aangrensende sy). Die ${bl('hoogtehoek')} is 25°. Die hoogteverskil tussen die bopunte is onbekend.`,
            `tan 25° = hoogteverskil / ${bl('30')}. Herrangskik: hoogteverskil = ${bl('30')} × tan 25°.`,
            `Bereken: tan 25° ≈ 0.4663. hoogteverskil = 30 × 0.4663 ≈ ${gr('13.99 m')}.`,
            `Totale ${gr('hoogte van hoër gebou')} = 15 + 13.99 ≈ ${gr('28.99 m')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat werklike 2D-trigonometrieprobleme met hoogte- en dieptehoeke oplos, en wys hoe om ʼn diagram te teken en STSCASTTA stap vir stap toe te pas" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="[Diagram nodig: drie aparte diagramme — (1) hoogtehoek vanaf grond na gebou se bopunt, (2) dieptehoek vanaf kranstop na boot, (3) twee geboue langs mekaar met hoogtehoek tussen hul bopunte]" />',
    },
  ],

  topicPractice: [
    // ── V1 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'In ʼn reghoekige driehoek is hoek A = 90°, met teenoorstaande sy 6 cm en aangrensende sy 8 cm tot hoek B. Bepaal tan B.',
      answer: '0.75',
      checkMode: 'auto',
      correctAnswer: '0.75',
      explanation: 'tan B = teenoorstaande / aangrensende = 6 / 8 = 0.75 ✓',
    },

    // ── V2 Matig ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Reghoekige driehoek het skuinssy 20 cm en ʼn hoek van 50°. Bepaal die lengte van die sy teenoor die hoek.',
      answer: '15.32 cm',
      checkMode: 'auto',
      correctAnswer: '15.32',
      correctAnswers: ['15.32', '15.32cm', '15.32 cm'],
      explanation: 'sin 50° = teenoorstaande / skuinssy\nteenoorstaande = 20 × sin 50° = 20 × 0.766 ≈ 15.32 cm ✓',
    },

    // ── V3 Moeilik ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê dat as jy ʼn sylengte verdubbel, verdubbel jy ook die sinusverhouding van die teenoorstaande hoek. Is hy korrek? Verduidelik.',
      answer: 'Nee — sinusverhoudings hang net van die hoek af, nie van die sylengtes nie, aangesien gelykvormige driehoeke (verskillende groottes, dieselfde hoeke) identiese trig-verhoudings het.',
      checkMode: 'self',
    },

    // ── V4 Maklik ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los op vir θ (0° ≤ θ ≤ 90°): cos θ = 0.5.',
      answer: '60°',
      checkMode: 'auto',
      correctAnswer: '60',
      correctAnswers: ['60', '60°'],
      explanation: 'θ = cos⁻¹(0.5) = 60° ✓',
    },

    // ── V5 Matig ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Reghoekige driehoek het aangrensende sy 12 cm en skuinssy 13 cm. Bepaal die hoek aanliggend aan hierdie sye.',
      answer: '22.62°',
      checkMode: 'auto',
      correctAnswer: '22.62',
      correctAnswers: ['22.62', '22.62°'],
      explanation: 'cos θ = aangrensende / skuinssy = 12 / 13\nθ = cos⁻¹(12/13) ≈ 22.62° ✓',
    },

    // ── V6 Moeilik ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op vir θ: tan θ = 2.5, en verifieer jou antwoord met ʼn sakrekenaar-toets.',
      answer: 'θ = tan⁻¹(2.5) ≈ 68.2°. Toets: tan(68.2°) ≈ 2.5 ✓.',
      checkMode: 'self',
    },

    // ── V7 Matig ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Punt (6, 8) lê op die eindarm van hoek θ. Bepaal r.',
      answer: '10',
      checkMode: 'auto',
      correctAnswer: '10',
      explanation: 'r = √(x² + y²) = √(6² + 8²) = √(36 + 64) = √100 = 10 ✓',
    },

    // ── V8 Moeilik ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik die punt (6, 8) uit V7 en bepaal sin θ en cos θ.',
      answer: 'sin θ = 8/10 = 0.8. cos θ = 6/10 = 0.6.',
      checkMode: 'self',
    },

    // ── V9 Moeilik ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Punt (−3, 4) lê op die eindarm van hoek θ. Bepaal tan θ en verduidelik die teken.',
      answer: 'tan θ = 4/(−3) = −4/3. Die waarde is negatief aangesien x negatief is terwyl y positief is, wat θ in die tweede kwadrant plaas.',
      checkMode: 'self',
    },

    // ── V10 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Wat is die maksimumwaarde van y = sin θ?',
      answer: '1',
      checkMode: 'auto',
      correctAnswer: '1',
      explanation: 'Die sinusfunksie bereik ʼn maksimum van 1 by θ = 90°. ✓',
    },

    // ── V11 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'By watter hoeke is y = tan θ ongedefinieerd tussen 0° en 360°?',
      answer: '90° en 270°',
      checkMode: 'auto',
      correctAnswer: '90° en 270°',
      correctAnswers: ['90° en 270°', '90 en 270', '90° en 270', '90 en 270°'],
      explanation: 'tan θ = sin θ / cos θ. cos θ = 0 by 90° en 270°, wat tan θ ongedefinieerd maak by hierdie hoeke. ✓',
    },

    // ── V12 Matig ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Beskryf die amplitude van y = 4 cos θ.',
      answer: '4',
      checkMode: 'auto',
      correctAnswer: '4',
      explanation: 'In y = a cos θ gee |a| die amplitude. Hier is a = 4, sodat die amplitude 4 is. Die grafiek ossilleer tussen −4 en 4. ✓',
    },

    // ── V13 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato vergelyk y = sin θ − 3 met y = sin θ. Beskryf die transformasie en die nuwe bereik.',
      answer: 'Die grafiek skuif 3 eenhede af. Nuwe bereik: −4 tot −2 (in plaas van −1 tot 1).',
      checkMode: 'self',
    },

    // ── V14 Matig ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Beskryf die effek daarvan om y = cos θ te verander na y = −2 cos θ.',
      answer: 'Die amplitude verdubbel na 2, en die grafiek word om die θ-as gereflekteer.',
      checkMode: 'self',
    },

    // ── V15 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vanaf ʼn punt 40 m van ʼn gebou se basis is die hoogtehoek na die bopunt 30°. Bepaal die gebou se hoogte.',
      answer: '23.09 m',
      checkMode: 'auto',
      correctAnswer: '23.09',
      correctAnswers: ['23.09', '23.09m', '23.09 m'],
      explanation: 'tan 30° = hoogte / 40\nhoogte = 40 × tan 30° = 40 × 0.5774 ≈ 23.09 m ✓',
    },

    // ── V16 Matig ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Persoon staan op ʼn 25 m krans en sien ʼn boot teen ʼn dieptehoek van 15°. Bepaal die afstand na die boot.',
      answer: '93.30 m',
      checkMode: 'auto',
      correctAnswer: '93.30',
      correctAnswers: ['93.30', '93.30m', '93.30 m', '93.3', '93.3m', '93.3 m'],
      explanation: 'tan 15° = 25 / afstand\nafstand = 25 / tan 15° = 25 / 0.2679 ≈ 93.30 m ✓',
    },

    // ── V17 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Twee geboue is 25 m van mekaar af. Vanaf die bopunt van die 12 m gebou is die hoogtehoek na die bopunt van die hoër een 30°. Bepaal die hoogte van die hoër gebou.',
      answer: 'Hoogteverskil = 25 × tan 30° ≈ 14.43 m. Totale hoogte = 12 + 14.43 ≈ 26.43 m.',
      checkMode: 'self',
    },

    // ── V18 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê die hoogtehoek en dieptehoek tussen twee punte is altyd gelyk. Is hy korrek? Verduidelik.',
      answer: 'Ja — volgens die eienskap van verwisselende hoeke gevorm deur parallelle horisontale lyne en die sig-lyn, is die hoogtehoek vanaf een punt gelyk aan die dieptehoek vanaf die ander.',
      checkMode: 'self',
    },

    // ── V19 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Leer leun teen ʼn muur en maak ʼn hoek van 65° met die grond. As die onderpunt van die leer 2 m van die muur af is, bepaal die leer se lengte.',
      answer: '4.73 m',
      checkMode: 'auto',
      correctAnswer: '4.73',
      correctAnswers: ['4.73', '4.73m', '4.73 m'],
      explanation: 'cos 65° = aangrensende / skuinssy = 2 / leerlengte\nlengte = 2 / cos 65° = 2 / 0.4226 ≈ 4.73 m ✓',
    },

    // ── V20 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Landmeter staan 80 m van die basis van ʼn toring af en meet die hoogtehoek na die bopunt as 28°. Sy loop dan 20 m nader en meet die nuwe hoogtehoek. Bepaal die nuwe hoek.',
      answer: 'Oorspronklike hoogte = 80 × tan 28° ≈ 42.55 m. Nuwe afstand = 60 m. Nuwe hoek = tan⁻¹(42.55/60) ≈ 35.36°.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het trigonometrie bemeester.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer, werk deur die gids weer deur.' },
    ],
  },
}
