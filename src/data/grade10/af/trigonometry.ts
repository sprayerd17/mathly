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
          answer: `${gr('AC')} ≈ 11,55 cm`,
          steps: [
            `Identifiseer die sye relatief tot hoek A. AB (= ${or('10')} cm) is die ${or('aangrensende')} sy (langs hoek A). AC is die ${gr('skuinssy')} wat ons soek.`,
            `Kies die korrekte verhouding: cos&nbsp;A = ${or('aangrensende')} / ${gr('skuinssy')}. Dus cos&nbsp;30° = ${or('10')} / ${gr('AC')}.`,
            `Herrangskik: ${gr('AC')} = ${or('10')} / cos&nbsp;30°.`,
            `Bereken: cos&nbsp;30° ≈ 0,866. ${gr('AC')} = 10 / 0,866 ≈ <strong>11,55 cm</strong>. ✓`,
          ],
        },
        {
          question: 'Sipho sê dat as jy ʼn hoek verdubbel, verdubbel jy ook sy sinuswaarde, so sin 60° = 2 × sin 30°. Is hy korrek?',
          answer: 'Nee — trigonometriese verhoudings skaleer nie lineêr met hoekgrootte nie.',
          steps: [
            `Bereken sin&nbsp;30° met ʼn sakrekenaar: sin&nbsp;30° = ${bl('0,5')}.`,
            `As Sipho korrek was, sou sin&nbsp;60° gelyk wees aan 2 × ${bl('0,5')} = ${bl('1,0')}.`,
            `Kontroleer: sin&nbsp;60° ≈ ${bl('0,866')}, wat <strong>nie</strong> gelyk is aan 1,0 nie. Sipho is <strong>verkeerd</strong>.`,
            `<strong>Gevolgtrekking:</strong> Trigonometriese verhoudings is nie eweredig aan die hoek nie. Om die hoek te verdubbel, verdubbel <em>nie</em> die sinuswaarde nie — die verwantskap is nie-lineêr.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat STSCASTTA bekendstel en wys hoe om die teenoorstaande, aangrensende en skuinssy sye relatief tot ʼn gegewe hoek in ʼn reghoekige driehoek te identifiseer" />',

      diagramPlaceholder:
        'Reghoekige driehoek met die teenoorstaande sy in blou, aangrensende sy in oranje en skuinssy in groen, met die STSCASTTA-verhoudings vir hoek θ langsaan getoon',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="110" y="12" font-size="9" fill="#0f1f3d" font-weight="700" text-anchor="middle">sin θ = teenoorstaande / skuinssy</text><text x="110" y="24" font-size="9" fill="#0f1f3d" font-weight="700" text-anchor="middle">cos θ = aangrensende / skuinssy</text><text x="110" y="36" font-size="9" fill="#0f1f3d" font-weight="700" text-anchor="middle">tan θ = teenoorstaande / aangrensende</text><polygon points="30,140 170,140 30,50" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M 30,128 L 42,128 L 42,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="30" y1="140" x2="170" y2="140" stroke="#ea580c" stroke-width="3.5"/><line x1="30" y1="50" x2="30" y2="140" stroke="#2563eb" stroke-width="3.5"/><line x1="30" y1="50" x2="170" y2="140" stroke="#16a34a" stroke-width="3.5"/><path d="M 152,140 A 18 18 0 0 0 145,126" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="146" y="134" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">θ</text><text x="100" y="158" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">aangrensende</text><text x="14" y="95" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 14 95)">teenoorstaande</text><text x="100" y="85" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle" transform="rotate(33 100 85)">skuinssy</text></svg>',
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
        `<p style="margin:0;color:#1e3a8a;">As sin&nbsp;θ = 0,6, dan is θ = sin⁻¹(0,6). Druk die <strong>2nd</strong>- of <strong>Shift</strong>-knoppie op jou sakrekenaar, dan die trig-funksieknoppie. Die inverse funksie "keer" die verhouding "om" en gee die hoek in grade terug.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In reghoekige driehoek PQR met hoek Q = 90°, PQ = 8 cm en QR = 6 cm, bepaal hoek P.',
          answer: `Hoek P ≈ ${re('36,87°')}`,
          steps: [
            `Identifiseer die sye relatief tot hoek P. QR (= ${bl('6')} cm) is die ${bl('teenoorstaande')} sy (oorkant P). PQ (= ${bl('8')} cm) is die ${bl('aangrensende')} sy (langs P).`,
            `Kies die verhouding wat ${bl('teenoorstaande')} en ${bl('aangrensende')} verbind: ${gr('tan')} P = ${bl('teenoorstaande')} / ${bl('aangrensende')} = ${bl('QR')} / ${bl('PQ')} = ${bl('6')} / ${bl('8')} = ${bl('0,75')}.`,
            `Pas die inverse trig-funksie toe: P = ${gr('tan⁻¹')}(0,75) ≈ <strong>${re('36,87°')}</strong>. ✓`,
          ],
        },
        {
          question: 'Los op vir θ (0° ≤ θ ≤ 90°): sin θ = 0,6.',
          answer: `θ ≈ ${re('36,87°')}`,
          steps: [
            `Ons is gegee ${gr('sin')}&nbsp;θ = ${bl('0,6')} en moet die ${re('onbekende')} hoek θ bepaal.`,
            `Pas die inverse funksie toe: θ = ${gr('sin⁻¹')}(${bl('0,6')}).`,
            `Gebruik ʼn sakrekenaar: θ ≈ <strong>${re('36,87°')}</strong>. ✓`,
          ],
        },
        {
          question: 'Lerato het ʼn driehoek met skuinssy 15 cm en een hoek van 40°. Bepaal die sy teenoor hierdie hoek.',
          answer: `Teenoorstaande sy ≈ ${re('9,64')} cm`,
          steps: [
            `Identifiseer die ${bl('bekende')} waardes: ${bl('skuinssy')} = ${bl('15')} cm, hoek = ${bl('40°')}. Die ${re('onbekende')} is die teenoorstaande sy.`,
            `Kies die verhouding: ${gr('sin')} 40° = ${re('teenoorstaande')} / ${bl('skuinssy')} = ${re('teenoorstaande')} / ${bl('15')}.`,
            `Herrangskik: ${re('teenoorstaande')} = ${bl('15')} × ${gr('sin')} 40°.`,
            `Bereken: ${gr('sin')} 40° ≈ 0,6428. ${re('teenoorstaande')} = 15 × 0,6428 ≈ <strong>${re('9,64')} cm</strong>. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn onbekende sy of hoek in ʼn reghoekige driehoek te bepaal deur STSCASTTA en inverse trig-funksies op ʼn sakrekenaar te gebruik" />',

      diagramPlaceholder:
        'Reghoekige driehoek PQR met die bekende sye PQ en QR in blou en die onbekende hoek P in rooi, wat wys hoe die tan-verhouding gebruik word om dit op te los',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 170,140 30,50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 30,128 L 42,128 L 42,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="100" y="158" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="14" y="98" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><path d="M 152,140 A 18 18 0 0 0 145,126" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="146" y="134" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">?</text><text x="20" y="153" font-size="12" fill="#475569" font-weight="600" text-anchor="middle">Q</text><text x="180" y="153" font-size="12" fill="#475569" font-weight="600" text-anchor="middle">P</text><text x="20" y="46" font-size="12" fill="#475569" font-weight="600" text-anchor="middle">R</text><text x="110" y="18" font-size="10.5" fill="#16a34a" font-weight="700" text-anchor="middle">tan P = teenoorstaande / aangrensende</text></svg>',
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
        'Cartesiese vlak wat die punt (3, 4) wys met die eindarm vanaf die oorsprong geteken, r langs die arm gemerk, en x en y as stippel-aftreklyne na die asse gemerk',

      diagramSvg:
        '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="110" x2="210" y2="110" stroke="#94a3b8" stroke-width="1.5"/><line x1="110" y1="10" x2="110" y2="210" stroke="#94a3b8" stroke-width="1.5"/><polygon points="210,110 202,106 202,114" fill="#94a3b8"/><polygon points="110,10 106,18 114,18" fill="#94a3b8"/><text x="200" y="124" font-size="11" fill="#64748b">x</text><text x="118" y="20" font-size="11" fill="#64748b">y</text><line x1="110" y1="110" x2="119.6" y2="97.2" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="119.6" cy="97.2" r="4" fill="#0f1f3d"/><text x="134" y="90" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">(3, 4)</text><line x1="119.6" y1="97.2" x2="119.6" y2="110" stroke="#16a34a" stroke-width="1.3" stroke-dasharray="3,3"/><text x="132" y="106" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">4</text><line x1="110" y1="110" x2="119.6" y2="110" stroke="#2563eb" stroke-width="1.3" stroke-dasharray="3,3"/><text x="115" y="124" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="100" y="98" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">r</text></svg>',
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
        'Grafieke van y=sinθ en y=cosθ saam geteken oor 0° tot 360° met maksimum- en minimumpunte gemerk, langs ʼn grafiek van y=tanθ wat sy vertikale asimptoot by 90° wys',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="75" y="10" font-size="9" font-weight="700" fill="#0f1f3d" text-anchor="middle">y = sin θ en y = cos θ</text><line x1="15" y1="90" x2="135" y2="90" stroke="#94a3b8" stroke-width="1.2"/><path d="M15,90 L25,70 L35,55.36 L45,50 L55,55.36 L65,70 L75,90 L85,110 L95,124.64 L105,130 L115,124.64 L125,110 L135,90" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M15,50 L25,55.36 L35,70 L45,90 L55,110 L65,124.64 L75,130 L85,124.64 L95,110 L105,90 L115,70 L125,55.36 L135,50" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="45" cy="50" r="3" fill="#16a34a"/><circle cx="15" cy="50" r="3" fill="#16a34a"/><circle cx="135" cy="50" r="3" fill="#16a34a"/><circle cx="105" cy="130" r="3" fill="#dc2626"/><circle cx="75" cy="130" r="3" fill="#dc2626"/><text x="8" y="93" font-size="8" fill="#0f1f3d" font-weight="700" text-anchor="middle">sin</text><text x="8" y="53" font-size="8" fill="#2563eb" font-weight="700" text-anchor="middle">cos</text><text x="15" y="140" font-size="7" fill="#64748b" text-anchor="middle">0°</text><text x="45" y="140" font-size="7" fill="#64748b" text-anchor="middle">90°</text><text x="75" y="140" font-size="7" fill="#64748b" text-anchor="middle">180°</text><text x="105" y="140" font-size="7" fill="#64748b" text-anchor="middle">270°</text><text x="135" y="140" font-size="7" fill="#64748b" text-anchor="middle">360°</text><text x="179" y="10" font-size="9" font-weight="700" fill="#0f1f3d" text-anchor="middle">y = tan θ</text><line x1="146" y1="90" x2="212" y2="90" stroke="#94a3b8" stroke-width="1.2"/><line x1="179" y1="20" x2="179" y2="160" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M150,90 L154.8,85.98 L159.7,81.35 L164.5,75 L169.3,64.02 L174.2,34.02" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M183.8,146 L188.6,116 L193.5,105 L198.3,98.66 L203.1,94.02 L208,90" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="150" y="163" font-size="7" fill="#64748b" text-anchor="middle">0°</text><text x="179" y="163" font-size="7" fill="#ea580c" font-weight="700" text-anchor="middle">90°</text><text x="208" y="163" font-size="7" fill="#64748b" text-anchor="middle">180°</text></svg>',
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
        'Twee grafieke langs mekaar: y=3sinθ vergelyk met y=sinθ om die amplitude-strekking van parameter a te wys, en y=cosθ+2 vergelyk met y=cosθ om die vertikale skuif van parameter q te wys',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="57" y="10" font-size="8" font-weight="700" fill="#0f1f3d" text-anchor="middle">3sin θ (blou) vs sin θ (grys)</text><line x1="10" y1="87.5" x2="105" y2="87.5" stroke="#cbd5e1" stroke-width="1"/><path d="M10,87.5 L21.9,72.77 L33.8,66.67 L45.6,72.77 L57.5,87.5 L69.4,102.23 L81.3,108.33 L93.1,102.23 L105,87.5" fill="none" stroke="#94a3b8" stroke-width="1.6"/><path d="M10,87.5 L21.9,43.3 L33.8,25 L45.6,43.3 L57.5,87.5 L69.4,131.7 L81.3,150 L93.1,131.7 L105,87.5" fill="none" stroke="#2563eb" stroke-width="2.2"/><text x="162" y="10" font-size="8" font-weight="700" fill="#0f1f3d" text-anchor="middle">cos θ+2 (oranje) vs cos θ (grys)</text><line x1="115" y1="87.5" x2="210" y2="87.5" stroke="#cbd5e1" stroke-width="1"/><path d="M115,87.5 L126.9,96.65 L138.8,118.75 L150.6,140.85 L162.5,150 L174.4,140.85 L186.3,118.75 L198.1,96.65 L210,87.5" fill="none" stroke="#94a3b8" stroke-width="1.6"/><path d="M115,25 L126.9,34.15 L138.8,56.25 L150.6,78.35 L162.5,87.5 L174.4,78.35 L186.3,56.25 L198.1,34.15 L210,25" fill="none" stroke="#ea580c" stroke-width="2.2"/><text x="57" y="164" font-size="7.5" fill="#374151" text-anchor="middle">amplitude a strek die golf</text><text x="162" y="164" font-size="7.5" fill="#374151" text-anchor="middle">q skuif die golf op/af</text></svg>',
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
          answer: `Hoogte ≈ ${gr('35,01 m')}`,
          steps: [
            `Teken ʼn reghoekige driehoek: die ${bl('hoogtehoek')} is 35°, die horisontale afstand (aangrensende sy) is ${bl('50 m')}, en die ${gr('hoogte')} (teenoorstaande sy) is onbekend.`,
            `Kies die verhouding wat teenoorstaande en aangrensende verbind: tan 35° = ${gr('hoogte')} / ${bl('50')}.`,
            `Herrangskik: ${gr('hoogte')} = ${bl('50')} × tan 35°.`,
            `Bereken: tan 35° ≈ 0,7002. ${gr('hoogte')} = 50 × 0,7002 ≈ ${gr('35,01 m')}. ✓`,
          ],
        },
        {
          question: 'Thabo staan bo-op ʼn 40 m krans en sien ʼn boot teen ʼn dieptehoek van 20°. Bepaal die horisontale afstand na die boot.',
          answer: `Afstand ≈ ${gr('109,9 m')}`,
          steps: [
            `Teken ʼn diagram: die ${or('dieptehoek')} vanaf Thabo na die boot is 20°. Die kranshoogte (teenoorstaande sy) is ${or('40 m')}, en die ${gr('horisontale afstand')} (aangrensende sy) is onbekend.`,
            `Die dieptehoek is gelyk aan die hoogtehoek vanaf die boot na Thabo (verwisselende binnehoeke), sodat die hoek in die driehoek 20° is.`,
            `tan 20° = ${or('40')} / ${gr('afstand')}. Herrangskik: ${gr('afstand')} = ${or('40')} / tan 20°.`,
            `Bereken: tan 20° ≈ 0,3640. ${gr('afstand')} = 40 / 0,3640 ≈ ${gr('109,9 m')}. ✓`,
          ],
        },
        {
          question: 'Twee geboue is 30 m van mekaar af. Vanaf die bopunt van die korter gebou (15 m hoog) is die hoogtehoek na die bopunt van die hoër gebou 25°. Bepaal die hoogte van die hoër gebou.',
          answer: `Hoogte van hoër gebou ≈ ${gr('28,99 m')}`,
          steps: [
            `Die horisontale afstand tussen die bopunte van die geboue is ${bl('30 m')} (aangrensende sy). Die ${bl('hoogtehoek')} is 25°. Die hoogteverskil tussen die bopunte is onbekend.`,
            `tan 25° = hoogteverskil / ${bl('30')}. Herrangskik: hoogteverskil = ${bl('30')} × tan 25°.`,
            `Bereken: tan 25° ≈ 0,4663. hoogteverskil = 30 × 0,4663 ≈ ${gr('13,99 m')}.`,
            `Totale ${gr('hoogte van hoër gebou')} = 15 + 13,99 ≈ ${gr('28,99 m')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat werklike 2D-trigonometrieprobleme met hoogte- en dieptehoeke oplos, en wys hoe om ʼn diagram te teken en STSCASTTA stap vir stap toe te pas" />',

      diagramPlaceholder:
        'Diagram van ʼn gebou met die hoogtehoek vanaf die grond in blou gemerk en die dieptehoek vanaf die bopunt in oranje gemerk, wat wys dat die twee hoeke gelyk is',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="140" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2"/><line x1="170" y1="140" x2="170" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 170,128 L 158,128 L 158,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="20" y1="30" x2="190" y2="30" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4,3"/><line x1="30" y1="140" x2="170" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="5,3"/><path d="M 58,140 A 28 28 0 0 0 45,120" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="50" y="130" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">θ</text><path d="M138,30 A32 32 0 0 0 148,52" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="148" y="42" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">θ</text><circle cx="30" cy="140" r="3.5" fill="#16a34a"/><circle cx="170" cy="30" r="3.5" fill="#16a34a"/><text x="14" y="153" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">hoogtehoek</text><text x="30" y="22" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="middle">dieptehoek</text><text x="105" y="160" font-size="8.5" fill="#16a34a" font-weight="700" text-anchor="middle">die twee θ-hoeke is gelyk (verwisselende hoeke)</text></svg>',
    },
  ],

  topicPractice: [
    // ── V1 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'In ʼn reghoekige driehoek is hoek A = 90°, met teenoorstaande sy 6 cm en aangrensende sy 8 cm tot hoek B. Bepaal tan B.',
      answer: '0,75',
      checkMode: 'auto',
      correctAnswer: '0,75',
      explanation: 'tan B = teenoorstaande / aangrensende = 6 / 8 = 0,75 ✓',
    },

    // ── V2 Matig ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Reghoekige driehoek het skuinssy 20 cm en ʼn hoek van 50°. Bepaal die lengte van die sy teenoor die hoek.',
      answer: '15,32 cm',
      checkMode: 'auto',
      correctAnswer: '15,32',
      correctAnswers: ['15.32', '15.32cm', '15.32 cm'],
      explanation: 'sin 50° = teenoorstaande / skuinssy\nteenoorstaande = 20 × sin 50° = 20 × 0,766 ≈ 15,32 cm ✓',
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
      question: 'Los op vir θ (0° ≤ θ ≤ 90°): cos θ = 0,5.',
      answer: '60°',
      checkMode: 'auto',
      correctAnswer: '60',
      correctAnswers: ['60', '60°'],
      explanation: 'θ = cos⁻¹(0,5) = 60° ✓',
    },

    // ── V5 Matig ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Reghoekige driehoek het aangrensende sy 12 cm en skuinssy 13 cm. Bepaal die hoek aanliggend aan hierdie sye.',
      answer: '22,62°',
      checkMode: 'auto',
      correctAnswer: '22,62',
      correctAnswers: ['22.62', '22.62°'],
      explanation: 'cos θ = aangrensende / skuinssy = 12 / 13\nθ = cos⁻¹(12/13) ≈ 22,62° ✓',
    },

    // ── V6 Moeilik ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op vir θ: tan θ = 2,5, en verifieer jou antwoord met ʼn sakrekenaar-toets.',
      answer: 'θ = tan⁻¹(2,5) ≈ 68,2°. Toets: tan(68,2°) ≈ 2,5 ✓.',
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
      answer: 'sin θ = 8/10 = 0,8. cos θ = 6/10 = 0,6.',
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
      answer: '23,09 m',
      checkMode: 'auto',
      correctAnswer: '23,09',
      correctAnswers: ['23.09', '23.09m', '23.09 m'],
      explanation: 'tan 30° = hoogte / 40\nhoogte = 40 × tan 30° = 40 × 0,5774 ≈ 23,09 m ✓',
    },

    // ── V16 Matig ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Persoon staan op ʼn 25 m krans en sien ʼn boot teen ʼn dieptehoek van 15°. Bepaal die afstand na die boot.',
      answer: '93,30 m',
      checkMode: 'auto',
      correctAnswer: '93,30',
      correctAnswers: ['93.30', '93.30m', '93.30 m', '93.3', '93.3m', '93.3 m'],
      explanation: 'tan 15° = 25 / afstand\nafstand = 25 / tan 15° = 25 / 0,2679 ≈ 93,30 m ✓',
    },

    // ── V17 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Twee geboue is 25 m van mekaar af. Vanaf die bopunt van die 12 m gebou is die hoogtehoek na die bopunt van die hoër een 30°. Bepaal die hoogte van die hoër gebou.',
      answer: 'Hoogteverskil = 25 × tan 30° ≈ 14,43 m. Totale hoogte = 12 + 14,43 ≈ 26,43 m.',
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
      answer: '4,73 m',
      checkMode: 'auto',
      correctAnswer: '4,73',
      correctAnswers: ['4.73', '4.73m', '4.73 m'],
      explanation: 'cos 65° = aangrensende / skuinssy = 2 / leerlengte\nlengte = 2 / cos 65° = 2 / 0,4226 ≈ 4,73 m ✓',
    },

    // ── V20 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Landmeter staan 80 m van die basis van ʼn toring af en meet die hoogtehoek na die bopunt as 28°. Sy loop dan 20 m nader en meet die nuwe hoogtehoek. Bepaal die nuwe hoek.',
      answer: 'Oorspronklike hoogte = 80 × tan 28° ≈ 42,55 m. Nuwe afstand = 60 m. Nuwe hoek = tan⁻¹(42,55/60) ≈ 35,36°.',
      checkMode: 'self',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae) — slegs inhoud, nog geen diagramme nie (Fase 1)
    // Blok 1 (0-2):   STSCASTTA-verhoudingsidentifisering in ʼn beskrewe driehoek — abstrak, geen diagram
    // Blok 2 (3-5):   Spesiale hoekwaardes (0°/30°/45°/60°/90°) onthou            — abstrak, geen diagram
    // Blok 3 (6-9):   Onbekende sy gegewe een sy + een hoek                     — DIAGRAM NODIG (7,8,9,10)
    // Blok 4 (10-12): Onbekende hoek gegewe twee sye                            — DIAGRAM NODIG (11,12,13)
    // Blok 5 (13-15): Hoogte-/dieptehoek-woordprobleme                          — DIAGRAM NODIG (14,15,16)
    // Blok 6 (16-19): Gekombineerde multi-stap probleme                        — DIAGRAM NODIG (17,18,19,20)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — STSCASTTA-verhoudingsidentifisering (Easy/Easy/Medium)
        { difficulty: 'Easy', question: 'In reghoekige driehoek ABC is hoek B = 90°. Relatief tot hoek A, watter sy is die skuinssy?', checkMode: 'auto', correctAnswer: 'AC', correctAnswers: ['AC', 'ac'], answer: 'AC', explanation: 'Die skuinssy is altyd die sy oorkant die reghoek. Aangesien die reghoek by B is, is die skuinssy AC (die sy wat nie B raak nie). ✓' },
        { difficulty: 'Easy', question: 'In reghoekige driehoek PQR is hoek Q = 90°. Skryf die verhouding vir sin P neer in terme van die sye van die driehoek.', checkMode: 'auto', correctAnswer: 'QR/PR', correctAnswers: ['QR/PR', 'qr/pr', 'QR / PR'], answer: 'QR/PR', explanation: 'sin P = teenoorstaande / skuinssy. Die sy teenoor hoek P is QR, en die skuinssy (oorkant die reghoek by Q) is PR. Dus sin P = QR/PR. ✓' },
        { difficulty: 'Medium', question: 'In reghoekige driehoek XYZ is hoek Y = 90°. Watter trigonometriese verhouding (sin, cos of tan) van hoek X verbind sy XY (aangrensend aan X) en sy XZ (die skuinssy)?', checkMode: 'auto', correctAnswer: 'cos', correctAnswers: ['cos', 'cosinus', 'cos X'], answer: 'cos', explanation: 'CAS: cos = aangrensende / skuinssy. XY is aangrensend aan hoek X en XZ is die skuinssy, dus is die verhouding wat hulle verbind cos X. ✓' },

        // Blok 2 — Spesiale hoekwaardes onthou (Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Skryf die presiese waarde van sin 30° neer.', checkMode: 'auto', correctAnswer: '0,5', correctAnswers: ['0,5', '0.5', '1/2'], answer: '0,5', explanation: 'sin 30° = 0,5 (een van die standaard spesiale hoekwaardes). ✓' },
        { difficulty: 'Medium', question: 'Skryf die presiese waarde van tan 45° neer.', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', '1,0'], answer: '1', explanation: 'tan 45° = 1, aangesien in ʼn reghoekige gelykbenige driehoek die twee bene (teenoorstaande en aangrensende) gelyk is. ✓' },
        { difficulty: 'Medium', question: 'Bepaal, sonder om ʼn sakrekenaar te gebruik, cos 60° + sin 90°.', checkMode: 'auto', correctAnswer: '1,5', correctAnswers: ['1,5', '1.5', '3/2'], answer: '1,5', explanation: 'cos 60° = 0,5 en sin 90° = 1. Dus cos 60° + sin 90° = 0,5 + 1 = 1,5. ✓' },

        // Blok 3 — Onbekende sy gegewe een sy + een hoek (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In reghoekige driehoek ABC is die reghoek by B. Die sy aangrensend aan hoek A, AB, is 12 cm, en hoek A = 40°. Bepaal die lengte van die sy teenoor hoek A, BC, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '10,07', correctAnswers: ['10,07', '10.07', '10,07cm', '10,07 cm'], answer: '10,07 cm', explanation: 'tan A = teenoorstaande / aangrensende = BC / AB\ntan 40° = BC / 12\nBC = 12 × tan 40° ≈ 12 × 0,8391 ≈ 10,07 cm ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">40°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"14\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'In reghoekige driehoek DEF is die reghoek by E. Die skuinssy DF = 18 cm, en hoek D = 52°. Bepaal die lengte van die sy teenoor hoek D, EF, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '14,18', correctAnswers: ['14,18', '14.18', '14,18cm', '14,18 cm'], answer: '14,18 cm', explanation: 'sin D = teenoorstaande / skuinssy = EF / DF\nsin 52° = EF / 18\nEF = 18 × sin 52° ≈ 18 × 0,7880 ≈ 14,18 cm ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">18 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">52°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">E</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">D</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">F</text><text x=\"14\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'In reghoekige driehoek GHI is die reghoek by H. Die sy teenoor hoek G, HI, is 9 cm, en hoek G = 35°. Bepaal die lengte van die skuinssy GI, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '15,69', correctAnswers: ['15,69', '15.69', '15,69cm', '15,69 cm'], answer: '15,69 cm', explanation: 'sin G = teenoorstaande / skuinssy\nsin 35° = 9 / GI\nGI = 9 / sin 35° ≈ 9 / 0,5736 ≈ 15,69 cm ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><path d=\"M 30,68 A 18 18 0 0 1 46,54\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"44\" y=\"70\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">35°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">H</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">I</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">G</text><text x=\"120\" y=\"89\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In reghoekige driehoek JKL is die reghoek by K. Die skuinssy JL = 25 cm, en hoek J = 63°. Bepaal die lengte van die sy aangrensend aan hoek J, JK, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '11,35', correctAnswers: ['11,35', '11.35', '11,35cm', '11,35 cm'], answer: '11,35 cm', explanation: 'cos J = aangrensende / skuinssy = JK / JL\ncos 63° = JK / 25\nJK = 25 × cos 63° ≈ 25 × 0,4540 ≈ 11,35 cm ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">25 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">63°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">K</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">J</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">L</text><text x=\"100\" y=\"158\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Blok 4 — Onbekende hoek gegewe twee sye (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In reghoekige driehoek MNO is die reghoek by N. Die sy teenoor hoek M, NO, is 8 cm, en die sy aangrensend aan hoek M, MN, is 15 cm. Bepaal die grootte van hoek M, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '28,07', correctAnswers: ['28,07', '28.07', '28,07°'], answer: '28,07°', explanation: 'tan M = teenoorstaande / aangrensende = NO / MN = 8 / 15 ≈ 0,5333\nM = tan⁻¹(0,5333) ≈ 28,07° ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">N</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">M</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">O</text></svg>"},
        { difficulty: 'Medium', question: 'In reghoekige driehoek PQR is die reghoek by Q. Die sy teenoor hoek P, QR, is 9 cm, en die skuinssy PR is 41 cm. Bepaal die grootte van hoek P, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '12,68', correctAnswers: ['12,68', '12.68', '12,68°'], answer: '12,68°', explanation: 'sin P = teenoorstaande / skuinssy = QR / PR = 9 / 41 ≈ 0,2195\nP = sin⁻¹(0,2195) ≈ 12,68° ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">41 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text></svg>"},
        { difficulty: 'Hard', question: 'In reghoekige driehoek STU is die reghoek by T. Die sy aangrensend aan hoek S, ST, is 11 cm, en die skuinssy SU is 61 cm. Bepaal die grootte van hoek S, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '79,61', correctAnswers: ['79,61', '79.61', '79,61°'], answer: '79,61°', explanation: 'cos S = aangrensende / skuinssy = ST / SU = 11 / 61 ≈ 0,1803\nS = cos⁻¹(0,1803) ≈ 79,61° ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">11 cm</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">61 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">T</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">S</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">U</text></svg>"},

        // Blok 5 — Hoogte-/dieptehoek-woordprobleme (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'Vanaf ʼn punt 60 m van die basis van ʼn toring is die hoogtehoek na die bopunt van die toring 32°. Bepaal die hoogte van die toring, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '37,49', correctAnswers: ['37,49', '37.49', '37,49m', '37,49 m'], answer: '37,49 m', explanation: 'tan 32° = hoogte / 60\nhoogte = 60 × tan 32° ≈ 60 × 0,6249 ≈ 37,49 m ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 170,128 L 158,128 L 158,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 58,140 A 28 28 0 0 0 45,120\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"52\" y=\"128\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">60 m</text><text x=\"188\" y=\"94\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><circle cx=\"30\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/></svg>"},
        { difficulty: 'Medium', question: 'ʼn Persoon wat bo-op ʼn 45 m krans staan, sien ʼn boot op see teen ʼn dieptehoek van 18°. Bepaal die horisontale afstand vanaf die basis van die krans na die boot, korrek tot 1 desimale plek.', checkMode: 'auto', correctAnswer: '138,5', correctAnswers: ['138,5', '138.5', '138,5m', '138,5 m'], answer: '138,5 m', explanation: 'Die dieptehoek vanaf die kranstop is gelyk aan die hoogtehoek vanaf die boot (verwisselende hoeke), dus is die hoek in die reghoekige driehoek 18°.\ntan 18° = 45 / afstand\nafstand = 45 / tan 18° ≈ 45 / 0,3249 ≈ 138,5 m ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"140\" x2=\"30\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"10\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><path d=\"M 42,140 L 42,128 L 30,128\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"14\" y1=\"40\" x2=\"190\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"30\" y1=\"40\" x2=\"190\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 62,40 A 32 32 0 0 1 52,62\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"66\" y=\"56\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><text x=\"12\" y=\"94\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">45 m</text><text x=\"112\" y=\"150\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><polygon points=\"185,140 197,140 191,133\" fill=\"#0f1f3d\"/></svg>"},
        { difficulty: 'Hard', question: 'Twee geboue staan 22 m uitmekaar. Die korter gebou is 18 m hoog. Vanaf die bopunt van die korter gebou is die hoogtehoek na die bopunt van die hoër gebou 27°. Bepaal die hoogte van die hoër gebou, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '29,21', correctAnswers: ['29,21', '29.21', '29,21m', '29,21 m'], answer: '29,21 m', explanation: 'Die hoogteverskil tussen die twee dakke vorm die teenoorstaande sy van ʼn reghoekige driehoek met die 22 m horisontale gaping as die aangrensende sy.\ntan 27° = hoogteverskil / 22\nhoogteverskil = 22 × tan 27° ≈ 22 × 0,5095 ≈ 11,21 m\nTotale hoogte = 18 + 11,21 ≈ 29,21 m ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><rect x=\"14\" y=\"90\" width=\"32\" height=\"50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><rect x=\"154\" y=\"40\" width=\"32\" height=\"100\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"46\" y1=\"90\" x2=\"186\" y2=\"90\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"46\" y1=\"90\" x2=\"186\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 76,90 A 30 30 0 0 1 66,72\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"72\" y=\"82\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><path d=\"M 186,52 L 174,52 L 174,40\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"30\" y=\"118\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">18 m</text><text x=\"116\" y=\"82\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">22 m</text><text x=\"198\" y=\"66\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Blok 6 — Gekombineerde multi-stap probleme (Medium/Hard/Hard/Hard)
        { difficulty: 'Medium', question: 'ʼn Leer leun teen ʼn vertikale muur en maak ʼn hoek van 58° met die horisontale grond. Die onderpunt van die leer is 3 m van die muur af. Bepaal die lengte van die leer, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '5,66', correctAnswers: ['5,66', '5.66', '5,66m', '5,66 m'], answer: '5,66 m', explanation: 'Die leer is die skuinssy. Die 3 m onderafstand is aangrensend aan die 58°-hoek.\ncos 58° = 3 / leerlengte\nleerlengte = 3 / cos 58° ≈ 3 / 0,5299 ≈ 5,66 m ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"30\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"15\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><path d=\"M 158,140 L 158,128 L 170,128\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"140\" x2=\"170\" y2=\"45\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 58,140 A 28 28 0 0 0 47,122\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"52\" y=\"130\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">58°</text><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">3 m</text><text x=\"122\" y=\"82\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In reghoekige driehoek PQR is die reghoek by Q. Die skuinssy PR = 20 cm en hoek P = 42°. Bepaal die lengtes van beide QR (teenoor P) en PQ (aangrensend aan P), elk korrek tot 2 desimale plekke.', answer: 'QR = 20 × sin 42° ≈ 13,38 cm. PQ = 20 × cos 42° ≈ 14,86 cm.', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"14\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">42°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text></svg>"},
        { difficulty: 'Hard', question: 'ʼn Landmeter staan 100 m van die basis van ʼn toring af en meet die hoogtehoek na die bopunt as 24°. Sy loop dan 30 m nader aan die toring en meet die nuwe hoogtehoek. Bepaal die nuwe hoogtehoek, korrek tot 2 desimale plekke.', answer: 'Hoogte van toring = 100 × tan 24° ≈ 44,52 m. Nuwe afstand = 100 − 30 = 70 m. Nuwe hoek = tan⁻¹(44,52/70) ≈ 32,46°.', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"140\" x2=\"210\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"190\" y1=\"140\" x2=\"190\" y2=\"30\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 190,128 L 178,128 L 178,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"140\" x2=\"190\" y2=\"30\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"80\" y1=\"140\" x2=\"190\" y2=\"30\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 46,140 A 26 26 0 0 0 34,122\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.1\"/><text x=\"40\" y=\"130\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">24°</text><path d=\"M 104,140 A 24 24 0 0 0 92,124\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"98\" y=\"130\" font-size=\"12\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><circle cx=\"20\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/><circle cx=\"80\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/><text x=\"20\" y=\"156\" font-size=\"10\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"80\" y=\"156\" font-size=\"10\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"50\" y=\"152\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">30 m</text><text x=\"10\" y=\"152\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\"></text><text x=\"105\" y=\"20\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">100 m</text></svg>"},
        { difficulty: 'Hard', question: 'ʼn Punt (8, −15) lê op die eindarm van hoek θ. Bepaal r, en bepaal dan sin θ en cos θ.', answer: 'r = √(8² + (−15)²) = √(64 + 225) = √289 = 17. sin θ = −15/17 (negatief, aangesien y negatief is). cos θ = 8/17 (positief, aangesien x positief is).', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 220 220\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"110\" x2=\"210\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"10\" x2=\"110\" y2=\"210\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><polygon points=\"210,110 202,106 202,114\" fill=\"#94a3b8\"/><polygon points=\"110,10 106,18 114,18\" fill=\"#94a3b8\"/><text x=\"200\" y=\"124\" font-size=\"11\" fill=\"#64748b\">x</text><text x=\"118\" y=\"20\" font-size=\"11\" fill=\"#64748b\">y</text><line x1=\"110\" y1=\"110\" x2=\"135.6\" y2=\"158\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><circle cx=\"135.6\" cy=\"158\" r=\"4\" fill=\"#0f1f3d\"/><text x=\"149.6\" y=\"174\" font-size=\"13\" fill=\"#374151\" font-weight=\"600\" text-anchor=\"middle\">(8, −15)</text><line x1=\"135.6\" y1=\"158\" x2=\"135.6\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"3,3\"/><text x=\"147.6\" y=\"134\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">−15</text><text x=\"122.8\" y=\"100\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8</text><text x=\"140.8\" y=\"146\" font-size=\"14\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het trig-verhoudings, spesiale hoeke, die oplos van reghoekige driehoeke en hoogte-/dieptehoek-probleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor onbekende sye, onbekende hoeke of woordprobleme, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Werk deur die voorbeelde oor STSCASTTA en inverse trig-funksies weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer deur en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — STSCASTTA-verhoudingsidentifisering (Easy/Easy/Medium)
        { difficulty: 'Easy', question: 'In reghoekige driehoek KLM is hoek L = 90°. Relatief tot hoek K, watter sy is die skuinssy?', checkMode: 'auto', correctAnswer: 'KM', correctAnswers: ['KM', 'km'], answer: 'KM', explanation: 'Die skuinssy is altyd die sy oorkant die reghoek. Aangesien die reghoek by L is, is die skuinssy KM (die sy wat nie L raak nie). ✓' },
        { difficulty: 'Easy', question: 'In reghoekige driehoek ABC is hoek C = 90°. Skryf die verhouding vir cos A neer in terme van die sye van die driehoek.', checkMode: 'auto', correctAnswer: 'AC/AB', correctAnswers: ['AC/AB', 'ac/ab', 'AC / AB'], answer: 'AC/AB', explanation: 'cos A = aangrensende / skuinssy. Die sy aangrensend aan hoek A is AC, en die skuinssy (oorkant die reghoek by C) is AB. Dus cos A = AC/AB. ✓' },
        { difficulty: 'Medium', question: 'In reghoekige driehoek DEF is hoek E = 90°. Watter trigonometriese verhouding (sin, cos of tan) van hoek D verbind sy EF (teenoor D) en sy DE (aangrensend aan D)?', checkMode: 'auto', correctAnswer: 'tan', correctAnswers: ['tan', 'tangens', 'tan D'], answer: 'tan', explanation: 'TTA: tan = teenoorstaande / aangrensende. EF is teenoor hoek D en DE is aangrensend aan D, dus is die verhouding wat hulle verbind tan D. ✓' },

        // Blok 2 — Spesiale hoekwaardes onthou (Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Skryf die presiese waarde van cos 0° neer.', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', '1,0'], answer: '1', explanation: 'cos 0° = 1 (een van die standaard spesiale hoekwaardes). ✓' },
        { difficulty: 'Medium', question: 'Skryf die presiese waarde van sin 90° neer.', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', '1,0'], answer: '1', explanation: 'sin 90° = 1, die maksimumwaarde van die sinusfunksie. ✓' },
        { difficulty: 'Medium', question: 'Bepaal, sonder om ʼn sakrekenaar te gebruik, sin 60° − cos 30°.', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', '0,0'], answer: '0', explanation: 'sin 60° = 0,866 en cos 30° = 0,866 (hulle is gelyk, aangesien 60° en 30° komplementêre hoeke is). Dus sin 60° − cos 30° = 0. ✓' },

        // Blok 3 — Onbekende sy gegewe een sy + een hoek (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In reghoekige driehoek ABC is die reghoek by B. Die sy aangrensend aan hoek A, AB, is 15 cm, en hoek A = 35°. Bepaal die lengte van die sy teenoor hoek A, BC, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '10,50', correctAnswers: ['10,50', '10.50', '10,5', '10.5', '10,50cm', '10,50 cm'], answer: '10,50 cm', explanation: 'tan A = teenoorstaande / aangrensende = BC / AB\ntan 35° = BC / 15\nBC = 15 × tan 35° ≈ 15 × 0,7002 ≈ 10,50 cm ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">35°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"14\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'In reghoekige driehoek DEF is die reghoek by E. Die skuinssy DF = 22 cm, en hoek D = 48°. Bepaal die lengte van die sy teenoor hoek D, EF, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '16,35', correctAnswers: ['16,35', '16.35', '16,35cm', '16,35 cm'], answer: '16,35 cm', explanation: 'sin D = teenoorstaande / skuinssy = EF / DF\nsin 48° = EF / 22\nEF = 22 × sin 48° ≈ 22 × 0,7431 ≈ 16,35 cm ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">22 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">48°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">E</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">D</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">F</text><text x=\"14\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'In reghoekige driehoek GHI is die reghoek by H. Die sy teenoor hoek G, HI, is 11 cm, en hoek G = 29°. Bepaal die lengte van die skuinssy GI, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '22,69', correctAnswers: ['22,69', '22.69', '22,69cm', '22,69 cm'], answer: '22,69 cm', explanation: 'sin G = teenoorstaande / skuinssy\nsin 29° = 11 / GI\nGI = 11 / sin 29° ≈ 11 / 0,4848 ≈ 22,69 cm ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">11 cm</text><path d=\"M 30,68 A 18 18 0 0 1 46,54\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"44\" y=\"70\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">29°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">H</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">I</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">G</text><text x=\"120\" y=\"89\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In reghoekige driehoek JKL is die reghoek by K. Die skuinssy JL = 30 cm, en hoek J = 57°. Bepaal die lengte van die sy aangrensend aan hoek J, JK, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '16,34', correctAnswers: ['16,34', '16.34', '16,34cm', '16,34 cm'], answer: '16,34 cm', explanation: 'cos J = aangrensende / skuinssy = JK / JL\ncos 57° = JK / 30\nJK = 30 × cos 57° ≈ 30 × 0,5446 ≈ 16,34 cm ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">30 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">57°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">K</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">J</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">L</text><text x=\"100\" y=\"158\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Blok 4 — Onbekende hoek gegewe twee sye (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In reghoekige driehoek MNO is die reghoek by N. Die sy teenoor hoek M, NO, is 5 cm, en die sy aangrensend aan hoek M, MN, is 12 cm. Bepaal die grootte van hoek M, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '22,62', correctAnswers: ['22,62', '22.62', '22,62°'], answer: '22,62°', explanation: 'tan M = teenoorstaande / aangrensende = NO / MN = 5 / 12 ≈ 0,4167\nM = tan⁻¹(0,4167) ≈ 22,62° ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">N</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">M</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">O</text></svg>"},
        { difficulty: 'Medium', question: 'In reghoekige driehoek PQR is die reghoek by Q. Die sy teenoor hoek P, QR, is 20 cm, en die skuinssy PR is 29 cm. Bepaal die grootte van hoek P, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '43,60', correctAnswers: ['43,60', '43.60', '43,6', '43.6', '43,60°', '43,6°'], answer: '43,60°', explanation: 'sin P = teenoorstaande / skuinssy = QR / PR = 20 / 29 ≈ 0,6897\nP = sin⁻¹(0,6897) ≈ 43,60° ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">29 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text></svg>"},
        { difficulty: 'Hard', question: 'In reghoekige driehoek STU is die reghoek by T. Die sy aangrensend aan hoek S, ST, is 20 cm, en die skuinssy SU is 29 cm. Bepaal die grootte van hoek S, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '46,40', correctAnswers: ['46,40', '46.40', '46,4', '46.4', '46,40°', '46,4°'], answer: '46,40°', explanation: 'cos S = aangrensende / skuinssy = ST / SU = 20 / 29 ≈ 0,6897\nS = cos⁻¹(0,6897) ≈ 46,40° ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">29 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">T</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">S</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">U</text></svg>"},

        // Blok 5 — Hoogte-/dieptehoek-woordprobleme (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'Vanaf ʼn punt 45 m van die basis van ʼn toring is die hoogtehoek na die bopunt van die toring 28°. Bepaal die hoogte van die toring, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '23,93', correctAnswers: ['23,93', '23.93', '23,93m', '23,93 m'], answer: '23,93 m', explanation: 'tan 28° = hoogte / 45\nhoogte = 45 × tan 28° ≈ 45 × 0,5317 ≈ 23,93 m ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 170,128 L 158,128 L 158,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 58,140 A 28 28 0 0 0 45,120\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"52\" y=\"128\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">45 m</text><text x=\"188\" y=\"94\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><circle cx=\"30\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/></svg>"},
        { difficulty: 'Medium', question: 'ʼn Persoon wat bo-op ʼn 38 m krans staan, sien ʼn boot op see teen ʼn dieptehoek van 22°. Bepaal die horisontale afstand vanaf die basis van die krans na die boot, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '94,05', correctAnswers: ['94,05', '94.05', '94,05m', '94,05 m'], answer: '94,05 m', explanation: 'Die dieptehoek vanaf die kranstop is gelyk aan die hoogtehoek vanaf die boot (verwisselende hoeke), dus is die hoek in die reghoekige driehoek 22°.\ntan 22° = 38 / afstand\nafstand = 38 / tan 22° ≈ 38 / 0,4040 ≈ 94,05 m ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"140\" x2=\"30\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"10\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><path d=\"M 42,140 L 42,128 L 30,128\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"14\" y1=\"40\" x2=\"190\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"30\" y1=\"40\" x2=\"190\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 62,40 A 32 32 0 0 1 52,62\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"66\" y=\"56\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><text x=\"12\" y=\"94\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">38 m</text><text x=\"112\" y=\"150\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><polygon points=\"185,140 197,140 191,133\" fill=\"#0f1f3d\"/></svg>"},
        { difficulty: 'Hard', question: 'Twee geboue staan 19 m uitmekaar. Die korter gebou is 14 m hoog. Vanaf die bopunt van die korter gebou is die hoogtehoek na die bopunt van die hoër gebou 31°. Bepaal die hoogte van die hoër gebou, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '25,42', correctAnswers: ['25,42', '25.42', '25,42m', '25,42 m'], answer: '25,42 m', explanation: 'Die hoogteverskil tussen die twee dakke vorm die teenoorstaande sy van ʼn reghoekige driehoek met die 19 m horisontale gaping as die aangrensende sy.\ntan 31° = hoogteverskil / 19\nhoogteverskil = 19 × tan 31° ≈ 19 × 0,6009 ≈ 11,42 m\nTotale hoogte = 14 + 11,42 ≈ 25,42 m ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><rect x=\"14\" y=\"90\" width=\"32\" height=\"50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><rect x=\"154\" y=\"40\" width=\"32\" height=\"100\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"46\" y1=\"90\" x2=\"186\" y2=\"90\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"46\" y1=\"90\" x2=\"186\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 76,90 A 30 30 0 0 1 66,72\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"72\" y=\"82\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><path d=\"M 186,52 L 174,52 L 174,40\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"30\" y=\"118\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 m</text><text x=\"116\" y=\"82\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">19 m</text><text x=\"198\" y=\"66\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Blok 6 — Gekombineerde multi-stap probleme (Medium/Hard/Hard/Hard)
        { difficulty: 'Medium', question: 'ʼn Leer leun teen ʼn vertikale muur en maak ʼn hoek van 62° met die horisontale grond. Die onderpunt van die leer is 4 m van die muur af. Bepaal die lengte van die leer, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '8,52', correctAnswers: ['8,52', '8.52', '8,52m', '8,52 m'], answer: '8,52 m', explanation: 'Die leer is die skuinssy. Die 4 m onderafstand is aangrensend aan die 62°-hoek.\ncos 62° = 4 / leerlengte\nleerlengte = 4 / cos 62° ≈ 4 / 0,4695 ≈ 8,52 m ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"30\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"15\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><path d=\"M 158,140 L 158,128 L 170,128\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"140\" x2=\"170\" y2=\"45\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 58,140 A 28 28 0 0 0 47,122\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"52\" y=\"130\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">62°</text><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">4 m</text><text x=\"122\" y=\"82\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In reghoekige driehoek PQR is die reghoek by Q. Die skuinssy PR = 24 cm en hoek P = 37°. Bepaal die lengtes van beide QR (teenoor P) en PQ (aangrensend aan P), elk korrek tot 2 desimale plekke.', answer: 'QR = 24 × sin 37° ≈ 14,44 cm. PQ = 24 × cos 37° ≈ 19,17 cm.', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"14\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">24 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">37°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text></svg>"},
        { difficulty: 'Hard', question: 'ʼn Landmeter staan 90 m van die basis van ʼn toring af en meet die hoogtehoek na die bopunt as 26°. Sy loop dan 25 m nader aan die toring en meet die nuwe hoogtehoek. Bepaal die nuwe hoogtehoek, korrek tot 2 desimale plekke.', answer: 'Hoogte van toring = 90 × tan 26° ≈ 43,90 m. Nuwe afstand = 90 − 25 = 65 m. Nuwe hoek = tan⁻¹(43,90/65) ≈ 34,03°.', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"140\" x2=\"210\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"190\" y1=\"140\" x2=\"190\" y2=\"30\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 190,128 L 178,128 L 178,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"140\" x2=\"190\" y2=\"30\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"80\" y1=\"140\" x2=\"190\" y2=\"30\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 46,140 A 26 26 0 0 0 34,122\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.1\"/><text x=\"40\" y=\"130\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">26°</text><path d=\"M 104,140 A 24 24 0 0 0 92,124\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"98\" y=\"130\" font-size=\"12\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><circle cx=\"20\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/><circle cx=\"80\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/><text x=\"20\" y=\"156\" font-size=\"10\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"80\" y=\"156\" font-size=\"10\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"50\" y=\"152\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">25 m</text><text x=\"10\" y=\"152\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\"></text><text x=\"105\" y=\"20\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">90 m</text></svg>"},
        { difficulty: 'Hard', question: 'ʼn Punt (7, −24) lê op die eindarm van hoek θ. Bepaal r, en bepaal dan sin θ en cos θ.', answer: 'r = √(7² + (−24)²) = √(49 + 576) = √625 = 25. sin θ = −24/25 (negatief, aangesien y negatief is). cos θ = 7/25 (positief, aangesien x positief is).', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 220 220\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"110\" x2=\"210\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"10\" x2=\"110\" y2=\"210\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><polygon points=\"210,110 202,106 202,114\" fill=\"#94a3b8\"/><polygon points=\"110,10 106,18 114,18\" fill=\"#94a3b8\"/><text x=\"200\" y=\"124\" font-size=\"11\" fill=\"#64748b\">x</text><text x=\"118\" y=\"20\" font-size=\"11\" fill=\"#64748b\">y</text><line x1=\"110\" y1=\"110\" x2=\"132.4\" y2=\"186.8\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><circle cx=\"132.4\" cy=\"186.8\" r=\"4\" fill=\"#0f1f3d\"/><text x=\"146.4\" y=\"202.8\" font-size=\"13\" fill=\"#374151\" font-weight=\"600\" text-anchor=\"middle\">(7, −24)</text><line x1=\"132.4\" y1=\"186.8\" x2=\"132.4\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"3,3\"/><text x=\"144.4\" y=\"148.4\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">−24</text><text x=\"121.2\" y=\"100\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7</text><text x=\"139.2\" y=\"160.4\" font-size=\"14\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het trig-verhoudings, spesiale hoeke, die oplos van reghoekige driehoeke en hoogte-/dieptehoek-probleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor onbekende sye, onbekende hoeke of woordprobleme, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Werk deur die voorbeelde oor STSCASTTA en inverse trig-funksies weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer deur en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — STSCASTTA-verhoudingsidentifisering (Easy/Easy/Medium)
        { difficulty: 'Easy', question: 'In reghoekige driehoek RST is hoek S = 90°. Relatief tot hoek R, watter sy is die skuinssy?', checkMode: 'auto', correctAnswer: 'RT', correctAnswers: ['RT', 'rt'], answer: 'RT', explanation: 'Die skuinssy is altyd die sy oorkant die reghoek. Aangesien die reghoek by S is, is die skuinssy RT (die sy wat nie S raak nie). ✓' },
        { difficulty: 'Easy', question: 'In reghoekige driehoek ABC is hoek B = 90°. Skryf die verhouding vir tan C neer in terme van die sye van die driehoek.', checkMode: 'auto', correctAnswer: 'AB/BC', correctAnswers: ['AB/BC', 'ab/bc', 'AB / BC'], answer: 'AB/BC', explanation: 'tan C = teenoorstaande / aangrensende. Die sy teenoor hoek C is AB, en die sy aangrensend aan C is BC. Dus tan C = AB/BC. ✓' },
        { difficulty: 'Medium', question: 'In reghoekige driehoek DEF is hoek F = 90°. Watter trigonometriese verhouding (sin, cos of tan) van hoek D verbind sy EF (teenoor D) en sy DF (die skuinssy)?', checkMode: 'auto', correctAnswer: 'sin', correctAnswers: ['sin', 'sinus', 'sin D'], answer: 'sin', explanation: 'STS: sin = teenoorstaande / skuinssy. EF is teenoor hoek D en DF is die skuinssy, dus is die verhouding wat hulle verbind sin D. ✓' },

        // Blok 2 — Spesiale hoekwaardes onthou (Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Skryf die presiese waarde van tan 0° neer.', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', '0,0'], answer: '0', explanation: 'tan 0° = 0 (een van die standaard spesiale hoekwaardes). ✓' },
        { difficulty: 'Medium', question: 'Skryf die presiese waarde van cos 45° neer, korrek tot 4 desimale plekke.', checkMode: 'auto', correctAnswer: '0,7071', correctAnswers: ['0,7071', '0.7071', '√2/2'], answer: '0,7071', explanation: 'cos 45° = √2/2 ≈ 0,7071 (een van die standaard spesiale hoekwaardes). ✓' },
        { difficulty: 'Medium', question: 'Bepaal, sonder om ʼn sakrekenaar te gebruik, 2 × sin 30° + cos 0°.', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2,0'], answer: '2', explanation: 'sin 30° = 0,5 en cos 0° = 1. Dus 2 × 0,5 + 1 = 1 + 1 = 2. ✓' },

        // Blok 3 — Onbekende sy gegewe een sy + een hoek (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In reghoekige driehoek ABC is die reghoek by B. Die sy aangrensend aan hoek A, AB, is 20 cm, en hoek A = 48°. Bepaal die lengte van die sy teenoor hoek A, BC, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '22,21', correctAnswers: ['22,21', '22.21', '22,21cm', '22,21 cm'], answer: '22,21 cm', explanation: 'tan A = teenoorstaande / aangrensende = BC / AB\ntan 48° = BC / 20\nBC = 20 × tan 48° ≈ 20 × 1,1106 ≈ 22,21 cm ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">48°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"14\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'In reghoekige driehoek DEF is die reghoek by E. Die skuinssy DF = 16 cm, en hoek D = 61°. Bepaal die lengte van die sy teenoor hoek D, EF, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '13,99', correctAnswers: ['13,99', '13.99', '13,99cm', '13,99 cm'], answer: '13,99 cm', explanation: 'sin D = teenoorstaande / skuinssy = EF / DF\nsin 61° = EF / 16\nEF = 16 × sin 61° ≈ 16 × 0,8746 ≈ 13,99 cm ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">61°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">E</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">D</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">F</text><text x=\"14\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'In reghoekige driehoek GHI is die reghoek by H. Die sy teenoor hoek G, HI, is 14 cm, en hoek G = 42°. Bepaal die lengte van die skuinssy GI, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '20,92', correctAnswers: ['20,92', '20.92', '20,92cm', '20,92 cm'], answer: '20,92 cm', explanation: 'sin G = teenoorstaande / skuinssy\nsin 42° = 14 / GI\nGI = 14 / sin 42° ≈ 14 / 0,6691 ≈ 20,92 cm ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 cm</text><path d=\"M 30,68 A 18 18 0 0 1 46,54\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"44\" y=\"70\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">42°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">H</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">I</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">G</text><text x=\"120\" y=\"89\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In reghoekige driehoek JKL is die reghoek by K. Die skuinssy JL = 33 cm, en hoek J = 69°. Bepaal die lengte van die sy aangrensend aan hoek J, JK, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '11,83', correctAnswers: ['11,83', '11.83', '11,83cm', '11,83 cm'], answer: '11,83 cm', explanation: 'cos J = aangrensende / skuinssy = JK / JL\ncos 69° = JK / 33\nJK = 33 × cos 69° ≈ 33 × 0,3584 ≈ 11,83 cm ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">33 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">69°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">K</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">J</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">L</text><text x=\"100\" y=\"158\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Blok 4 — Onbekende hoek gegewe twee sye (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In reghoekige driehoek MNO is die reghoek by N. Die sy teenoor hoek M, NO, is 20 cm, en die sy aangrensend aan hoek M, MN, is 21 cm. Bepaal die grootte van hoek M, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '43,60', correctAnswers: ['43,60', '43.60', '43,6', '43.6', '43,60°', '43,6°'], answer: '43,60°', explanation: 'tan M = teenoorstaande / aangrensende = NO / MN = 20 / 21 ≈ 0,9524\nM = tan⁻¹(0,9524) ≈ 43,60° ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">21 cm</text><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">N</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">M</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">O</text></svg>"},
        { difficulty: 'Medium', question: 'In reghoekige driehoek PQR is die reghoek by Q. Die sy teenoor hoek P, QR, is 7 cm, en die skuinssy PR is 25 cm. Bepaal die grootte van hoek P, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '16,26', correctAnswers: ['16,26', '16.26', '16,26°'], answer: '16,26°', explanation: 'sin P = teenoorstaande / skuinssy = QR / PR = 7 / 25 = 0,28\nP = sin⁻¹(0,28) ≈ 16,26° ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 cm</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">25 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text></svg>"},
        { difficulty: 'Hard', question: 'In reghoekige driehoek STU is die reghoek by T. Die sy aangrensend aan hoek S, ST, is 7 cm, en die skuinssy SU is 25 cm. Bepaal die grootte van hoek S, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '73,74', correctAnswers: ['73,74', '73.74', '73,74°'], answer: '73,74°', explanation: 'cos S = aangrensende / skuinssy = ST / SU = 7 / 25 = 0,28\nS = cos⁻¹(0,28) ≈ 73,74° ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 cm</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">25 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">T</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">S</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">U</text></svg>"},

        // Blok 5 — Hoogte-/dieptehoek-woordprobleme (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'Vanaf ʼn punt 55 m van die basis van ʼn toring is die hoogtehoek na die bopunt van die toring 24°. Bepaal die hoogte van die toring, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '24,49', correctAnswers: ['24,49', '24.49', '24,49m', '24,49 m'], answer: '24,49 m', explanation: 'tan 24° = hoogte / 55\nhoogte = 55 × tan 24° ≈ 55 × 0,4452 ≈ 24,49 m ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 170,128 L 158,128 L 158,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 58,140 A 28 28 0 0 0 45,120\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"52\" y=\"128\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">55 m</text><text x=\"188\" y=\"94\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><circle cx=\"30\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/></svg>"},
        { difficulty: 'Medium', question: 'ʼn Persoon wat bo-op ʼn 52 m krans staan, sien ʼn boot op see teen ʼn dieptehoek van 25°. Bepaal die horisontale afstand vanaf die basis van die krans na die boot, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '111,51', correctAnswers: ['111,51', '111.51', '111,51m', '111,51 m'], answer: '111,51 m', explanation: 'Die dieptehoek vanaf die kranstop is gelyk aan die hoogtehoek vanaf die boot (verwisselende hoeke), dus is die hoek in die reghoekige driehoek 25°.\ntan 25° = 52 / afstand\nafstand = 52 / tan 25° ≈ 52 / 0,4663 ≈ 111,51 m ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"140\" x2=\"30\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"10\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><path d=\"M 42,140 L 42,128 L 30,128\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"14\" y1=\"40\" x2=\"190\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"30\" y1=\"40\" x2=\"190\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 62,40 A 32 32 0 0 1 52,62\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"66\" y=\"56\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><text x=\"12\" y=\"94\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">52 m</text><text x=\"112\" y=\"150\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><polygon points=\"185,140 197,140 191,133\" fill=\"#0f1f3d\"/></svg>"},
        { difficulty: 'Hard', question: 'Twee geboue staan 26 m uitmekaar. Die korter gebou is 20 m hoog. Vanaf die bopunt van die korter gebou is die hoogtehoek na die bopunt van die hoër gebou 33°. Bepaal die hoogte van die hoër gebou, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '36,88', correctAnswers: ['36,88', '36.88', '36,88m', '36,88 m'], answer: '36,88 m', explanation: 'Die hoogteverskil tussen die twee dakke vorm die teenoorstaande sy van ʼn reghoekige driehoek met die 26 m horisontale gaping as die aangrensende sy.\ntan 33° = hoogteverskil / 26\nhoogteverskil = 26 × tan 33° ≈ 26 × 0,6494 ≈ 16,88 m\nTotale hoogte = 20 + 16,88 ≈ 36,88 m ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><rect x=\"14\" y=\"90\" width=\"32\" height=\"50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><rect x=\"154\" y=\"40\" width=\"32\" height=\"100\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"46\" y1=\"90\" x2=\"186\" y2=\"90\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"46\" y1=\"90\" x2=\"186\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 76,90 A 30 30 0 0 1 66,72\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"72\" y=\"82\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><path d=\"M 186,52 L 174,52 L 174,40\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"30\" y=\"118\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 m</text><text x=\"116\" y=\"82\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">26 m</text><text x=\"198\" y=\"66\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Blok 6 — Gekombineerde multi-stap probleme (Medium/Hard/Hard/Hard)
        { difficulty: 'Medium', question: 'ʼn Leer leun teen ʼn vertikale muur en maak ʼn hoek van 55° met die horisontale grond. Die onderpunt van die leer is 2,5 m van die muur af. Bepaal die lengte van die leer, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '4,36', correctAnswers: ['4,36', '4.36', '4,36m', '4,36 m'], answer: '4,36 m', explanation: 'Die leer is die skuinssy. Die 2,5 m onderafstand is aangrensend aan die 55°-hoek.\ncos 55° = 2,5 / leerlengte\nleerlengte = 2,5 / cos 55° ≈ 2,5 / 0,5736 ≈ 4,36 m ✓' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"30\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"15\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><path d=\"M 158,140 L 158,128 L 170,128\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"140\" x2=\"170\" y2=\"45\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 58,140 A 28 28 0 0 0 47,122\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"52\" y=\"130\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">55°</text><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">2,5 m</text><text x=\"122\" y=\"82\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In reghoekige driehoek PQR is die reghoek by Q. Die skuinssy PR = 30 cm en hoek P = 51°. Bepaal die lengtes van beide QR (teenoor P) en PQ (aangrensend aan P), elk korrek tot 2 desimale plekke.', answer: 'QR = 30 × sin 51° ≈ 23,31 cm. PQ = 30 × cos 51° ≈ 18,88 cm.', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"14\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">30 cm</text><path d=\"M 152,140 A 18 18 0 0 0 145,126\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">51°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text></svg>"},
        { difficulty: 'Hard', question: 'ʼn Landmeter staan 120 m van die basis van ʼn toring af en meet die hoogtehoek na die bopunt as 21°. Sy loop dan 40 m nader aan die toring en meet die nuwe hoogtehoek. Bepaal die nuwe hoogtehoek, korrek tot 2 desimale plekke.', answer: 'Hoogte van toring = 120 × tan 21° ≈ 46,06 m. Nuwe afstand = 120 − 40 = 80 m. Nuwe hoek = tan⁻¹(46,06/80) ≈ 29,93°.', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"140\" x2=\"210\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"190\" y1=\"140\" x2=\"190\" y2=\"30\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 190,128 L 178,128 L 178,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"140\" x2=\"190\" y2=\"30\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"80\" y1=\"140\" x2=\"190\" y2=\"30\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 46,140 A 26 26 0 0 0 34,122\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.1\"/><text x=\"40\" y=\"130\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">21°</text><path d=\"M 104,140 A 24 24 0 0 0 92,124\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"98\" y=\"130\" font-size=\"12\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><circle cx=\"20\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/><circle cx=\"80\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/><text x=\"20\" y=\"156\" font-size=\"10\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"80\" y=\"156\" font-size=\"10\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"50\" y=\"152\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">40 m</text><text x=\"10\" y=\"152\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\"></text><text x=\"105\" y=\"20\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">120 m</text></svg>"},
        { difficulty: 'Hard', question: 'ʼn Punt (9, −40) lê op die eindarm van hoek θ. Bepaal r, en bepaal dan sin θ en cos θ.', answer: 'r = √(9² + (−40)²) = √(81 + 1600) = √1681 = 41. sin θ = −40/41 (negatief, aangesien y negatief is). cos θ = 9/41 (positief, aangesien x positief is).', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 220 220\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"110\" x2=\"210\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"10\" x2=\"110\" y2=\"210\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><polygon points=\"210,110 202,106 202,114\" fill=\"#94a3b8\"/><polygon points=\"110,10 106,18 114,18\" fill=\"#94a3b8\"/><text x=\"200\" y=\"124\" font-size=\"11\" fill=\"#64748b\">x</text><text x=\"118\" y=\"20\" font-size=\"11\" fill=\"#64748b\">y</text><line x1=\"110\" y1=\"110\" x2=\"138.8\" y2=\"238\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><circle cx=\"138.8\" cy=\"238\" r=\"4\" fill=\"#0f1f3d\"/><text x=\"152.8\" y=\"254\" font-size=\"13\" fill=\"#374151\" font-weight=\"600\" text-anchor=\"middle\">(9, −40)</text><line x1=\"138.8\" y1=\"238\" x2=\"138.8\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"3,3\"/><text x=\"150.8\" y=\"174\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">−40</text><text x=\"124.4\" y=\"100\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9</text><text x=\"142.4\" y=\"186\" font-size=\"14\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het trig-verhoudings, spesiale hoeke, die oplos van reghoekige driehoeke en hoogte-/dieptehoek-probleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor onbekende sye, onbekende hoeke of woordprobleme, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Werk deur die voorbeelde oor STSCASTTA en inverse trig-funksies weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer deur en probeer hierdie stel weer.' },
      ],
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
