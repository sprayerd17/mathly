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

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat STSCASTTA bekendstel en wys hoe om die teenoorstaande, aangrensende en skuinssy sye relatief tot ʼn gegewe hoek in ʼn reghoekige driehoek te identifiseer',

      diagramPlaceholder:
        'Reghoekige driehoek met die teenoorstaande sy in blou, aangrensende sy in oranje en skuinssy in groen, met die STSCASTTA-verhoudings vir hoek θ langsaan getoon',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="110" y="12" font-size="9" fill="#0f1f3d" font-weight="700" text-anchor="middle">sin θ = teenoorstaande / skuinssy</text><text x="110" y="24" font-size="9" fill="#0f1f3d" font-weight="700" text-anchor="middle">cos θ = aangrensende / skuinssy</text><text x="110" y="36" font-size="9" fill="#0f1f3d" font-weight="700" text-anchor="middle">tan θ = teenoorstaande / aangrensende</text><polygon points="30,140 170,140 30,50" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M 30,128 L 42,128 L 42,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="30" y1="140" x2="170" y2="140" stroke="#ea580c" stroke-width="3.5"/><line x1="30" y1="50" x2="30" y2="140" stroke="#2563eb" stroke-width="3.5"/><line x1="30" y1="50" x2="170" y2="140" stroke="#16a34a" stroke-width="3.5"/><path d="M 152,140 A 18 18 0 0 1 154.9,130.3" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="146" y="134" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">θ</text><text x="100" y="158" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">aangrensende</text><text x="14" y="95" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 14 95)">teenoorstaande</text><text x="100" y="85" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle" transform="rotate(33 100 85)">skuinssy</text></svg>',
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

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om ʼn onbekende sy of hoek in ʼn reghoekige driehoek te bepaal deur STSCASTTA en inverse trig-funksies op ʼn sakrekenaar te gebruik',

      diagramPlaceholder:
        'Reghoekige driehoek PQR met die bekende sye PQ en QR in blou en die onbekende hoek P in rooi, wat wys hoe die tan-verhouding gebruik word om dit op te los',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 170,140 30,50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 30,128 L 42,128 L 42,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="100" y="158" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="14" y="98" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><path d="M 152,140 A 18 18 0 0 1 154.9,130.3" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="146" y="134" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">?</text><text x="20" y="153" font-size="12" fill="#475569" font-weight="600" text-anchor="middle">Q</text><text x="180" y="153" font-size="12" fill="#475569" font-weight="600" text-anchor="middle">P</text><text x="20" y="46" font-size="12" fill="#475569" font-weight="600" text-anchor="middle">R</text><text x="110" y="18" font-size="10.5" fill="#16a34a" font-weight="700" text-anchor="middle">tan P = teenoorstaande / aangrensende</text></svg>',
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

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat trig-definisies na al vier kwadrante uitbrei deur ʼn punt (x,y) op die eindarm te gebruik en wys hoe r altyd positief is terwyl x en y negatief kan wees',

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

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat y=sinθ, y=cosθ en y=tanθ teken vir 0° tot 360°, maksimum- en minimumpunte identifiseer en vertikale asimptote op die tangensgrafiek verduidelik',

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

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat die effek van parameters a en q op y=a·sinθ+q wys — met amplitudestrekking deur a en vertikale skuif deur q, aan die hand van grafieke langs mekaar',

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

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat werklike 2D-trigonometrieprobleme met hoogte- en dieptehoeke oplos, en wys hoe om ʼn diagram te teken en STSCASTTA stap vir stap toe te pas',

      diagramPlaceholder:
        'Diagram van ʼn gebou met die hoogtehoek vanaf die grond in blou gemerk en die dieptehoek vanaf die bopunt in oranje gemerk, wat wys dat die twee hoeke gelyk is',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="140" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2"/><line x1="170" y1="140" x2="170" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 170,128 L 158,128 L 158,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="20" y1="30" x2="190" y2="30" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4,3"/><line x1="30" y1="140" x2="170" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="5,3"/><path d="M 58,140 A 28 28 0 0 0 52.0,122.7" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="50" y="130" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">θ</text><path d="M138,30 A32 32 0 0 0 144.8,49.8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="148" y="42" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">θ</text><circle cx="30" cy="140" r="3.5" fill="#16a34a"/><circle cx="170" cy="30" r="3.5" fill="#16a34a"/><text x="14" y="153" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">hoogtehoek</text><text x="30" y="22" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="middle">dieptehoek</text><text x="105" y="160" font-size="8.5" fill="#16a34a" font-weight="700" text-anchor="middle">die twee θ-hoeke is gelyk (verwisselende hoeke)</text></svg>',
    },
  ],

  topicPractice: [
    // ── V1 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'In ʼn reghoekige driehoek is hoek A = 90°, met teenoorstaande sy 6 cm en aangrensende sy 8 cm tot hoek B. Bepaal tan B.',
      checkMode: 'auto',
      options: ['0,75', '0,6', '0,8', '1,33'],
      correctIndex: 0,
      explanation: 'tan B = teenoorstaande / aangrensende = 6 / 8 = 0,75 ✓ (0,6 en 0,8 kom van die verkeerdelike gebruik van sin B of cos B met ʼn skuinssy van 10, gevind met Pythagoras; 1,33 kom van die omkeer van die verhouding na aangrensende/teenoorstaande.)',
    },

    // ── V2 Matig ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Reghoekige driehoek het skuinssy 20 cm en ʼn hoek van 50°. Bepaal die lengte van die sy teenoor die hoek.',
      checkMode: 'auto',
      options: ['12,86 cm', '15,32 cm', '26,11 cm', '23,84 cm'],
      correctIndex: 1,
      explanation: 'sin 50° = teenoorstaande / skuinssy\nteenoorstaande = 20 × sin 50° ≈ 20 × 0,766 ≈ 15,32 cm ✓ (12,86 cm kom van die verkeerdelike gebruik van cos 50° in plaas van sin 50°; 26,11 cm kom van deling deur sin 50° in plaas van vermenigvuldiging; 23,84 cm kom van die gebruik van tan 50° in plaas van sin 50°.)',
    },

    // ── V3 Moeilik ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê dat as jy ʼn sylengte verdubbel, verdubbel jy ook die sinusverhouding van die teenoorstaande hoek. Is hy korrek?',
      checkMode: 'auto',
      options: [
        'Hy is korrek — deur al die sye eweredig te vergroot, word die sinusverhouding ook met dieselfde faktor vermenigvuldig.',
        'Hy is korrek, maar net wanneer die hoek groter as 45° is.',
        'Hy is verkeerd — sinusverhoudings hang net van die hoek af, nie van die sylengtes nie, aangesien gelykvormige driehoeke (verskillende groottes, dieselfde hoeke) identiese trig-verhoudings het.',
        'Hy is verkeerd — die verdubbeling van ʼn sylengte halveer eintlik die sinusverhouding, nie verdubbel dit nie.',
      ],
      correctIndex: 2,
      explanation: 'Sinus (en alle trig-verhoudings) hang net van die hoek af, nie van hoe groot die driehoek is nie. Die verdubbeling van elke sy lewer ʼn gelykvormige driehoek met dieselfde hoeke, sodat sin van die hoek presies dieselfde bly — dit verdubbel of halveer nie. ✓',
    },

    // ── V4 Maklik ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los op vir θ (0° ≤ θ ≤ 90°): cos θ = 0,5.',
      checkMode: 'auto',
      options: ['30°', '45°', '120°', '60°'],
      correctIndex: 3,
      explanation: 'θ = cos⁻¹(0,5) = 60° ✓ (30° kom van die verkeerdelike gebruik van sin⁻¹ in plaas van cos⁻¹; 45° is ʼn algemene spesiale-hoek-raaiskoot; 120° kom van die verkeerde weerkaatsing van 60° om 90°.)',
    },

    // ── V5 Matig ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Reghoekige driehoek het aangrensende sy 12 cm en skuinssy 13 cm. Bepaal die hoek aanliggend aan hierdie sye.',
      checkMode: 'auto',
      options: ['22,62°', '67,38°', '42,71°', '0,39°'],
      correctIndex: 0,
      explanation: 'cos θ = aangrensende / skuinssy = 12 / 13\nθ = cos⁻¹(12/13) ≈ 22,62° ✓ (67,38° kom van die verkeerdelike gebruik van sin⁻¹ in plaas van cos⁻¹ — dit is eintlik die ander skerp hoek; 42,71° kom van die gebruik van tan⁻¹(12/13), wat die verkeerde sye koppel; 0,39° kom van ʼn sakrekenaar wat op radiaalmodus gelaat is.)',
    },

    // ── V6 Moeilik ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op vir θ: tan θ = 2,5, en verifieer jou antwoord met ʼn sakrekenaar-toets.',
      checkMode: 'auto',
      options: ['21,8°', '68,2°', '2,5°', '1,19°'],
      correctIndex: 1,
      explanation: 'θ = tan⁻¹(2,5) ≈ 68,2°. Toets: tan(68,2°) ≈ 2,5 ✓ (21,8° is die komplementêre hoek, van die verwarring van watter sy teenoorstaande/aangrensend is; 2,5° kom van die vergeet om die inverse tan-funksie toe te pas en bloot die verhoudingswaarde te herhaal; 1,19° kom van ʼn sakrekenaar wat op radiaalmodus gelaat is.)',
    },

    // ── V7 Matig ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Punt (6, 8) lê op die eindarm van hoek θ. Bepaal r.',
      checkMode: 'auto',
      options: ['14', '6', '10', '48'],
      correctIndex: 2,
      explanation: 'r = √(x² + y²) = √(6² + 8²) = √(36 + 64) = √100 = 10 ✓ (14 kom van die eenvoudige optel van x + y in plaas van Pythagoras; 6 gebruik verkeerdelik net die x-koördinaat; 48 kom van die vermenigvuldiging van x × y in plaas van kwadrering en optelling.)',
    },

    // ── V8 Moeilik ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik die punt (6, 8) en r = 10 uit V7 en bepaal sin θ.',
      checkMode: 'auto',
      options: ['0,6', '1,33', '0,75', '0,8'],
      correctIndex: 3,
      explanation: 'sin θ = y / r = 8 / 10 = 0,8 ✓ (0,6 kom van die verkeerdelike berekening van cos θ = x/r; 1,33 kom van die berekening van tan θ = y/x; 0,75 kom van die omruil van watter koördinaat gebruik word, wat x/y gee.)',
    },

    // ── V9 Moeilik ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Punt (−3, 4) lê op die eindarm van hoek θ. Watter stelling oor tan θ is korrek?',
      checkMode: 'auto',
      options: [
        'tan θ = −4/3, negatief omdat y positief is terwyl x negatief is, wat θ in die tweede kwadrant plaas.',
        'tan θ = 4/3, positief omdat albei koördinate positief tot die verhouding bydra.',
        'tan θ = −3/4, negatief omdat x negatief is terwyl y positief is.',
        'tan θ = 4/3, en die negatiewe teken van x word geïgnoreer aangesien tan slegs y en r gebruik.',
      ],
      correctIndex: 0,
      explanation: 'tan θ = y / x = 4 / (−3) = −4/3. Die waarde is negatief omdat y positief is en x negatief is — dit plaas θ in die tweede kwadrant, waar tangens altyd negatief is. ✓ (Opsie C ruil y en x in die verhouding om; opsie D beweer verkeerdelik dat tan nie van die teken van x afhang nie — dit doen wel, aangesien tan = y/x.)',
    },

    // ── V10 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Wat is die maksimumwaarde van y = sin θ?',
      checkMode: 'auto',
      options: ['0,5', '1', '90', '∞'],
      correctIndex: 1,
      explanation: 'Die sinusfunksie bereik ʼn maksimum van 1 by θ = 90°. ✓ (0,5 is sin 30°, nie die maksimum nie; 90 verwar die hoek waarby die maksimum voorkom met die maksimumwaarde self; ∞ neem verkeerdelik aan dat sinus onbegrens is soos tangens.)',
    },

    // ── V11 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'By watter hoeke is y = tan θ ongedefinieerd tussen 0° en 360°?',
      checkMode: 'auto',
      options: ['0° en 180°', '90° en 180°', '90° en 270°', '180° en 360°'],
      correctIndex: 2,
      explanation: 'tan θ = sin θ / cos θ. cos θ = 0 by 90° en 270°, wat tan θ ongedefinieerd maak by hierdie hoeke. ✓ (0° en 180° is waar sin θ = 0, nie cos θ nie; 90° en 180° meng die korrekte 90° met ʼn verkeerde tweede waarde; 180° en 360° is waar cos θ by sy minimum/maksimum is, nie nul nie.)',
    },

    // ── V12 Matig ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Beskryf die amplitude van y = 4 cos θ.',
      checkMode: 'auto',
      options: ['1', '8', '0,25', '4'],
      correctIndex: 3,
      explanation: 'In y = a cos θ gee |a| die amplitude. Hier is a = 4, sodat die amplitude 4 is. Die grafiek ossilleer tussen −4 en 4. ✓ (1 is die amplitude van gewone cos θ; 8 verdubbel verkeerdelik a in plaas daarvan om dit net te gebruik; 0,25 neem verkeerdelik 1/a.)',
    },

    // ── V13 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato vergelyk y = sin θ − 3 met y = sin θ. Watter stelling beskryf die transformasie en die nuwe bereik korrek?',
      checkMode: 'auto',
      options: [
        'Die grafiek skuif 3 eenhede af; die nuwe bereik is −4 tot −2.',
        'Die grafiek skuif 3 eenhede op; die nuwe bereik is 2 tot 4.',
        'Die amplitude verminder met 3; die nuwe bereik is −4 tot 4, onveranderd.',
        'Die grafiek skuif 3 eenhede af; die nuwe bereik is −1 tot 1, onveranderd, aangesien die aftrek van ʼn konstante nie die bereik beïnvloed nie.',
      ],
      correctIndex: 0,
      explanation: 'Die aftrek van q = 3 skuif die hele grafiek 3 eenhede af, sodat die nuwe minimum −1 − 3 = −4 is en die nuwe maksimum 1 − 3 = −2 is, wat ʼn bereik van −4 tot −2 gee. Die vorm en amplitude bly dieselfde. ✓',
    },

    // ── V14 Matig ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Watter stelling beskryf die effek daarvan om y = cos θ te verander na y = −2 cos θ korrek?',
      checkMode: 'auto',
      options: [
        'Die amplitude halveer na 0,5, sonder refleksie.',
        'Die amplitude verdubbel na 2, en die grafiek word om die θ-as gereflekteer.',
        'Die amplitude verdubbel na 2, maar die grafiek word nie gereflekteer nie aangesien slegs q refleksie veroorsaak.',
        'Die grafiek skuif 2 eenhede af, met die amplitude onveranderd.',
      ],
      correctIndex: 1,
      explanation: 'Die vermenigvuldiging met a = −2 verander die amplitude na |−2| = 2 (dit verdubbel vanaf 1), en die negatiewe teken reflekteer die grafiek om die θ-as (ʼn maksimum word ʼn minimum en omgekeerd). ✓',
    },

    // ── V15 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vanaf ʼn punt 40 m van ʼn gebou se basis is die hoogtehoek na die bopunt 30°. Bepaal die gebou se hoogte.',
      checkMode: 'auto',
      options: ['20 m', '34,64 m', '23,09 m', '69,28 m'],
      correctIndex: 2,
      explanation: 'tan 30° = hoogte / 40\nhoogte = 40 × tan 30° ≈ 40 × 0,5774 ≈ 23,09 m ✓ (20 m kom van die verkeerdelike gebruik van sin 30° in plaas van tan 30°; 34,64 m kom van die gebruik van cos 30° in plaas daarvan; 69,28 m kom van die gebruik van die komplementêre hoek 60° in plaas van 30°.)',
    },

    // ── V16 Matig ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Persoon staan op ʼn 25 m krans en sien ʼn boot teen ʼn dieptehoek van 15°. Bepaal die afstand na die boot.',
      checkMode: 'auto',
      options: ['96,59 m', '25,88 m', '6,70 m', '93,30 m'],
      correctIndex: 3,
      explanation: 'Die dieptehoek vanaf die bopunt van die krans is gelyk aan die hoogtehoek vanaf die boot (verwisselende hoeke), sodat die hoek in die driehoek 15° is.\ntan 15° = 25 / afstand\nafstand = 25 / tan 15° ≈ 25 / 0,2679 ≈ 93,30 m ✓ (96,59 m kom van die verkeerdelike gebruik van sin 15° in plaas van tan 15°; 25,88 m kom van die gebruik van cos 15° in plaas daarvan; 6,70 m kom van vermenigvuldiging met tan 15° in plaas van deling.)',
    },

    // ── V17 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Twee geboue is 25 m van mekaar af. Vanaf die bopunt van die 12 m gebou is die hoogtehoek na die bopunt van die hoër een 30°. Bepaal die hoogte van die hoër gebou.',
      checkMode: 'auto',
      options: ['26,43 m', '33,65 m', '14,43 m', '21,65 m'],
      correctIndex: 0,
      explanation: 'Die horisontale gaping (25 m) is aangrensend aan die 30°-hoek; die hoogteverskil tussen die dakke is teenoorstaande.\ntan 30° = hoogteverskil / 25\nhoogteverskil = 25 × tan 30° ≈ 14,43 m\nTotale hoogte van die hoër gebou = 12 + 14,43 ≈ 26,43 m ✓ (33,65 m kom van die verkeerdelike gebruik van cos 30° in plaas van tan 30° vir die hoogteverskil; 14,43 m vergeet om die 12 m basishoogte by te tel; 21,65 m gebruik cos 30° en vergeet ook om die basishoogte by te tel.)',
    },

    // ── V18 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê die hoogtehoek en dieptehoek tussen twee punte is altyd gelyk. Watter stelling is korrek?',
      checkMode: 'auto',
      options: [
        'Hy is verkeerd — die hoogtehoek is altyd groter as die dieptehoek tussen dieselfde twee punte.',
        'Hy is korrek — volgens die eienskap van verwisselende hoeke gevorm tussen ewewydige horisontale lyne en die sig-lyn, is die hoogtehoek vanaf een punt gelyk aan die dieptehoek vanaf die ander.',
        'Hy is verkeerd — die twee hoeke is slegs gelyk wanneer die twee punte dieselfde hoogte bo die grond het.',
        'Hy is korrek, maar slegs wanneer die sig-lyn presies 45° vanaf die horisontaal is.',
      ],
      correctIndex: 1,
      explanation: 'Die twee horisontale lyne (by elke waarnemer se posisie) is ewewydig, en die sig-lyn is ʼn dwarslyn. Dit maak die hoogtehoek vanaf die laer punt en die dieptehoek vanaf die hoër punt verwisselende hoeke, wat altyd gelyk is — ongeag die werklike grootte van die hoek of die hoogtes betrokke. Thabo is korrek. ✓',
    },

    // ── V19 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Leer leun teen ʼn muur en maak ʼn hoek van 65° met die grond. As die onderpunt van die leer 2 m van die muur af is, bepaal die leer se lengte.',
      checkMode: 'auto',
      options: ['2,21 m', '0,85 m', '4,73 m', '1,81 m'],
      correctIndex: 2,
      explanation: 'Die leer is die skuinssy; die 2 m basis is aangrensend aan die 65°-hoek.\ncos 65° = 2 / leerlengte\nleerlengte = 2 / cos 65° ≈ 2 / 0,4226 ≈ 4,73 m ✓ (2,21 m kom van die verkeerdelike gebruik van sin 65° in plaas van cos 65°; 0,85 m kom van vermenigvuldiging met cos 65° in plaas van deling; 1,81 m kom van vermenigvuldiging met sin 65° in plaas van deling deur cos 65°.)',
    },

    // ── V20 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Landmeter staan 80 m van die basis van ʼn toring af en meet die hoogtehoek na die bopunt as 28°. Sy loop dan 20 m nader en meet die nuwe hoogtehoek. Bepaal die nuwe hoek.',
      checkMode: 'auto',
      options: ['28°', '23,04°', '37,33°', '35,36°'],
      correctIndex: 3,
      explanation: 'Hoogte van toring = 80 × tan 28° ≈ 42,55 m (onveranderd, aangesien die toring nie beweeg het nie). Nuwe horisontale afstand = 80 − 20 = 60 m. Nuwe hoek = tan⁻¹(42,55 / 60) ≈ 35,36° ✓ (28° vergeet om weer te bereken vir die nuwe, nader afstand en herhaal net die oorspronklike hoek; 23,04° tel verkeerdelik die 20 m by in plaas daarvan om dit af te trek; 37,33° neem verkeerdelik aan dat die hoek eweredig met afstand skaal — trig-verhoudings werk nie so nie.)',
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
        { difficulty: 'Easy', question: 'In reghoekige driehoek ABC is hoek B = 90°. Relatief tot hoek A, watter sy is die skuinssy?', checkMode: 'auto', options: ['AC, omdat dit die sy oorkant die reghoek by B is.', 'AB, omdat dit die reghoek by B raak.', 'BC, omdat dit oorkant hoek A is.', 'Dit kan nie bepaal word sonder om hoek C te ken nie.'], correctIndex: 0, explanation: 'Die skuinssy is altyd die sy oorkant die reghoek. Aangesien die reghoek by B is, is die skuinssy AC — dit kan onmiddellik bepaal word, sonder enige ander hoek of sylengte. ✓ (AB is ʼn been wat die reghoek raak, nie die skuinssy nie; BC is die sy oorkant A, nie die skuinssy nie.)' },
        { difficulty: 'Easy', question: 'In reghoekige driehoek PQR is hoek Q = 90°. Skryf die verhouding vir sin P neer in terme van die sye van die driehoek.', checkMode: 'auto', options: ['PQ/PR', 'QR/PR', 'QR/PQ', 'PR/QR'], correctIndex: 1, explanation: 'sin P = teenoorstaande / skuinssy. Die sy teenoor hoek P is QR, en die skuinssy (oorkant die reghoek by Q) is PR. Dus sin P = QR/PR. ✓ (PQ/PR gebruik die aangrensende sy in plaas van die teenoorstaande sy — dit is cos P; QR/PQ is tan P; PR/QR is die korrekte verhouding onderstebo.)' },
        { difficulty: 'Medium', question: 'In reghoekige driehoek XYZ is hoek Y = 90°. Watter trigonometriese verhouding (sin, cos of tan) van hoek X verbind sy XY (aangrensend aan X) en sy XZ (die skuinssy)?', checkMode: 'auto', options: ['sin', 'tan', 'cos', 'Dit kan enige van sin, cos of tan wees, afhangende van die driehoek se grootte.'], correctIndex: 2, explanation: 'CAS: cos = aangrensende / skuinssy. XY is aangrensend aan hoek X en XZ is die skuinssy, dus is die verhouding wat hulle verbind cos X. ✓ (sin verbind teenoorstaande en skuinssy; tan verbind teenoorstaande en aangrensende — nie een betrek XY en XZ saam nie. Die verhouding hang net af van watter twee sye genoem word, nie van die driehoek se grootte nie.)' },

        // Blok 2 — Spesiale hoekwaardes onthou (Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Skryf die presiese waarde van sin 30° neer.', checkMode: 'auto', options: ['1', '0,87', '0', '0,5'], correctIndex: 3, explanation: 'sin 30° = 0,5, een van die standaard spesiale hoekwaardes. ✓ (1 is sin 90°; 0,87 is sin 60° — die komplementêre hoek; 0 is sin 0°. Om deurmekaar te raak oor watter spesiale hoek watter waarde gee, is ʼn algemene fout.)' },
        { difficulty: 'Medium', question: 'Skryf die presiese waarde van tan 45° neer.', checkMode: 'auto', options: ['1', '0', '1,73', '0,5'], correctIndex: 0, explanation: 'tan 45° = 1, aangesien in ʼn reghoekige gelykbenige driehoek die twee bene (teenoorstaande en aangrensende) gelyk is, wat hul verhouding 1 maak. ✓ (0 is tan 0°; 1,73 is tan 60°; 0,5 is nie ʼn standaard tan-waarde nie — waarskynlik verwar met sin 30°.)' },
        { difficulty: 'Medium', question: 'Bepaal, sonder om ʼn sakrekenaar te gebruik, cos 60° + sin 90°.', checkMode: 'auto', options: ['1', '1,5', '2', '0,5'], correctIndex: 1, explanation: 'cos 60° = 0,5 en sin 90° = 1. Dus cos 60° + sin 90° = 0,5 + 1 = 1,5. ✓ (1 vergeet om die 0,5 van cos 60° by te tel; 2 gebruik verkeerdelik cos 60° = 1; 0,5 vergeet om die 1 van sin 90° by te tel.)' },

        // Blok 3 — Onbekende sy gegewe een sy + een hoek (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In reghoekige driehoek ABC is die reghoek by B. Die sy aangrensend aan hoek A, AB, is 12 cm, en hoek A = 40°. Bepaal die lengte van die sy teenoor hoek A, BC, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['9,19 cm', '7,71 cm', '10,07 cm', '14,30 cm'], correctIndex: 2, explanation: 'tan A = teenoorstaande / aangrensende = BC / AB\ntan 40° = BC / 12\nBC = 12 × tan 40° ≈ 12 × 0,8391 ≈ 10,07 cm ✓ (9,19 cm kom van die verkeerdelike gebruik van cos 40° in plaas van tan 40°; 7,71 cm kom van die gebruik van sin 40° en die behandeling van 12 as die skuinssy; 14,30 cm kom van deling deur tan 40° in plaas van vermenigvuldiging.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 152.6,140 30,37.2\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"91.3\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><path d=\"M 134.6,140 A 18 18 0 0 1 138.8,128.4\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"129.1\" y=\"131.4\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">40°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"162.6\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"20\" y=\"33.2\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"14\" y=\"88.6\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'In reghoekige driehoek DEF is die reghoek by E. Die skuinssy DF = 18 cm, en hoek D = 52°. Bepaal die lengte van die sy teenoor hoek D, EF, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['11,08 cm', '23,04 cm', '22,84 cm', '14,18 cm'], correctIndex: 3, explanation: 'sin D = teenoorstaande / skuinssy = EF / DF\nsin 52° = EF / 18\nEF = 18 × sin 52° ≈ 18 × 0,7880 ≈ 14,18 cm ✓ (11,08 cm kom van die verkeerdelike gebruik van cos 52° in plaas van sin 52°; 23,04 cm kom van die gebruik van tan 52° in plaas van sin 52°; 22,84 cm kom van deling deur sin 52° in plaas van vermenigvuldiging.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 127.7,140 30,15\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"98.8\" y=\"71.5\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">18 cm</text><path d=\"M 109.7,140 A 18 18 0 0 1 116.6,125.8\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"105.2\" y=\"129\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">52°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">E</text><text x=\"137.7\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">D</text><text x=\"20\" y=\"11\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">F</text><text x=\"14\" y=\"77.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'In reghoekige driehoek GHI is die reghoek by H. Die sy teenoor hoek G, HI, is 9 cm, en hoek G = 35°. Bepaal die lengte van die skuinssy GI, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['15,69 cm', '10,99 cm', '5,16 cm', '12,85 cm'], correctIndex: 0, explanation: 'sin G = teenoorstaande / skuinssy\nsin 35° = 9 / GI\nGI = 9 / sin 35° ≈ 9 / 0,5736 ≈ 15,69 cm ✓ (10,99 cm kom van die verkeerdelike gebruik van cos 35° in plaas van sin 35°; 5,16 cm kom van vermenigvuldiging met sin 35° in plaas van deling; 12,85 cm kom van deling deur tan 35° in plaas van sin 35°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 117.5,140 30,15\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"73.8\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><path d=\"M 30,33 A 18 18 0 0 0 40.3,29.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"37.5\" y=\"38.8\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">35°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">H</text><text x=\"127.5\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">I</text><text x=\"20\" y=\"11\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">G</text><text x=\"93.8\" y=\"71.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In reghoekige driehoek JKL is die reghoek by K. Die skuinssy JL = 25 cm, en hoek J = 63°. Bepaal die lengte van die sy aangrensend aan hoek J, JK, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['22,28 cm', '11,35 cm', '55,07 cm', '49,07 cm'], correctIndex: 1, explanation: 'cos J = aangrensende / skuinssy = JK / JL\ncos 63° = JK / 25\nJK = 25 × cos 63° ≈ 25 × 0,4540 ≈ 11,35 cm ✓ (22,28 cm kom van die verkeerdelike gebruik van sin 63° in plaas van cos 63°; 55,07 cm kom van deling deur cos 63° in plaas van vermenigvuldiging; 49,07 cm kom van die gebruik van tan 63° in plaas van cos 63°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 93.7,140 30,15\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"81.8\" y=\"71.5\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">25 cm</text><path d=\"M 75.7,140 A 18 18 0 0 1 85.5,124.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"72.4\" y=\"126.9\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">63°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">K</text><text x=\"103.7\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">J</text><text x=\"20\" y=\"11\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">L</text><text x=\"61.8\" y=\"158\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Blok 4 — Onbekende hoek gegewe twee sye (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In reghoekige driehoek MNO is die reghoek by N. Die sy teenoor hoek M, NO, is 8 cm, en die sy aangrensend aan hoek M, MN, is 15 cm. Bepaal die grootte van hoek M, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['32,23°', '61,93°', '28,07°', '0,49°'], correctIndex: 2, explanation: 'tan M = teenoorstaande / aangrensende = NO / MN = 8 / 15 ≈ 0,5333\nM = tan⁻¹(0,5333) ≈ 28,07° ✓ (32,23° kom van die verkeerdelike gebruik van sin⁻¹(8/15) in plaas van tan⁻¹; 61,93° kom van die omkeer van die verhouding na 15/8; 0,49° kom van ʼn sakrekenaar wat op radiaalmodus gelaat is.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><path d=\"M 152,140 A 18 18 0 0 1 154.9,130.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">N</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">M</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">O</text></svg>"},
        { difficulty: 'Medium', question: 'In reghoekige driehoek PQR is die reghoek by Q. Die sy teenoor hoek P, QR, is 9 cm, en die skuinssy PR is 41 cm. Bepaal die grootte van hoek P, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['77,32°', '12,38°', '0,22°', '12,68°'], correctIndex: 3, explanation: 'sin P = teenoorstaande / skuinssy = QR / PR = 9 / 41 ≈ 0,2195\nP = sin⁻¹(0,2195) ≈ 12,68° ✓ (77,32° kom van die verkeerdelike gebruik van cos⁻¹(9/41) in plaas van sin⁻¹ — dit is eintlik die ander skerp hoek; 12,38° kom van die verkeerdelike gebruik van tan⁻¹(9/41); 0,22° kom van ʼn sakrekenaar wat op radiaalmodus gelaat is.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">41 cm</text><path d=\"M 152,140 A 18 18 0 0 1 154.9,130.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text></svg>"},
        { difficulty: 'Hard', question: 'In reghoekige driehoek STU is die reghoek by T. Die sy aangrensend aan hoek S, ST, is 11 cm, en die skuinssy SU is 61 cm. Bepaal die grootte van hoek S, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['79,61°', '10,39°', '10,22°', '0,18°'], correctIndex: 0, explanation: 'cos S = aangrensende / skuinssy = ST / SU = 11 / 61 ≈ 0,1803\nS = cos⁻¹(0,1803) ≈ 79,61° ✓ (10,39° kom van die verkeerdelike gebruik van sin⁻¹(11/61) in plaas van cos⁻¹ — dit is eintlik die ander skerp hoek; 10,22° kom van die verkeerdelike gebruik van tan⁻¹(11/61); 0,18° kom van ʼn sakrekenaar wat op radiaalmodus gelaat is.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">11 cm</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">61 cm</text><path d=\"M 152,140 A 18 18 0 0 1 154.9,130.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">T</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">S</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">U</text></svg>"},

        // Blok 5 — Hoogte-/dieptehoek-woordprobleme (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'Vanaf ʼn punt 60 m van die basis van ʼn toring is die hoogtehoek na die bopunt van die toring 32°. Bepaal die hoogte van die toring, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['50,88 m', '37,49 m', '31,80 m', '96,02 m'], correctIndex: 1, explanation: 'tan 32° = hoogte / 60\nhoogte = 60 × tan 32° ≈ 60 × 0,6249 ≈ 37,49 m ✓ (50,88 m kom van die verkeerdelike gebruik van cos 32° in plaas van tan 32°; 31,80 m kom van die gebruik van sin 32° in plaas daarvan; 96,02 m kom van die gebruik van die komplementêre hoek 58° in plaas van 32°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 170,128 L 158,128 L 158,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 58,140 A 28 28 0 0 0 52.8,123.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"52\" y=\"128\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">60 m</text><text x=\"188\" y=\"94\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><circle cx=\"30\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/></svg>"},
        { difficulty: 'Medium', question: 'ʼn Persoon wat bo-op ʼn 45 m krans staan, sien ʼn boot op see teen ʼn dieptehoek van 18°. Bepaal die horisontale afstand vanaf die basis van die krans na die boot, korrek tot 1 desimale plek.', checkMode: 'auto', options: ['14,60 m', '145,60 m', '138,50 m', '47,30 m'], correctIndex: 2, explanation: 'Die dieptehoek vanaf die kranstop is gelyk aan die hoogtehoek vanaf die boot (verwisselende hoeke), dus is die hoek in die reghoekige driehoek 18°.\ntan 18° = 45 / afstand\nafstand = 45 / tan 18° ≈ 45 / 0,3249 ≈ 138,5 m ✓ (14,60 m kom van vermenigvuldiging met tan 18° in plaas van deling; 145,60 m kom van die gebruik van sin 18° in plaas van tan 18°; 47,30 m kom van die gebruik van cos 18° in plaas daarvan.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"140\" x2=\"30\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"10\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><path d=\"M 42,140 L 42,128 L 30,128\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"14\" y1=\"40\" x2=\"190\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"30\" y1=\"40\" x2=\"190\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 62,40 A 32 32 0 0 1 57.1,57.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"66\" y=\"56\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><text x=\"12\" y=\"94\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">45 m</text><text x=\"112\" y=\"150\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><polygon points=\"185,140 197,140 191,133\" fill=\"#0f1f3d\"/></svg>"},
        { difficulty: 'Hard', question: 'Twee geboue staan 22 m uitmekaar. Die korter gebou is 18 m hoog. Vanaf die bopunt van die korter gebou is die hoogtehoek na die bopunt van die hoër gebou 27°. Bepaal die hoogte van die hoër gebou, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['11,21 m', '19,60 m', '37,60 m', '29,21 m'], correctIndex: 3, explanation: 'Die hoogteverskil tussen die twee dakke vorm die teenoorstaande sy van ʼn reghoekige driehoek met die 22 m horisontale gaping as die aangrensende sy.\ntan 27° = hoogteverskil / 22\nhoogteverskil = 22 × tan 27° ≈ 22 × 0,5095 ≈ 11,21 m\nTotale hoogte = 18 + 11,21 ≈ 29,21 m ✓ (11,21 m vergeet om die 18 m basishoogte by te tel; 19,60 m kom van die verkeerdelike gebruik van cos 27° en vergeet ook om die basishoogte by te tel; 37,60 m gebruik cos 27° vir die hoogteverskil en tel wel die basishoogte by.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><rect x=\"14\" y=\"90\" width=\"32\" height=\"50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><rect x=\"154\" y=\"40\" width=\"32\" height=\"100\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"46\" y1=\"90\" x2=\"186\" y2=\"90\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"46\" y1=\"90\" x2=\"186\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 76,90 A 30 30 0 0 0 74.3,79.9\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"72\" y=\"82\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><path d=\"M 174,90 L 174,78 L 186,78\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"30\" y=\"118\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">18 m</text><text x=\"116\" y=\"82\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">22 m</text><text x=\"198\" y=\"66\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Blok 6 — Gekombineerde multi-stap probleme (Medium/Hard/Hard/Hard)
        { difficulty: 'Medium', question: 'ʼn Leer leun teen ʼn vertikale muur en maak ʼn hoek van 58° met die horisontale grond. Die onderpunt van die leer is 3 m van die muur af. Bepaal die lengte van die leer, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['5,66 m', '3,54 m', '1,59 m', '1,87 m'], correctIndex: 0, explanation: 'Die leer is die skuinssy. Die 3 m onderafstand is aangrensend aan die 58°-hoek.\ncos 58° = 3 / leerlengte\nleerlengte = 3 / cos 58° ≈ 3 / 0,5299 ≈ 5,66 m ✓ (3,54 m kom van die verkeerdelike gebruik van sin 58° in plaas van cos 58°; 1,59 m kom van vermenigvuldiging met cos 58° in plaas van deling; 1,87 m kom van vermenigvuldiging met tan 58° in plaas daarvan.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"103.7\" y1=\"140\" x2=\"103.7\" y2=\"7\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"15\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><path d=\"M 91.7,140 L 91.7,128 L 103.7,128\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"140\" x2=\"103.7\" y2=\"22\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 58,140 A 28 28 0 0 0 44.8,116.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"51.9\" y=\"127.9\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">58°</text><text x=\"66.9\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">3 m</text><text x=\"88.9\" y=\"70.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In reghoekige driehoek PQR is die reghoek by Q. Die skuinssy PR = 20 cm en hoek P = 42°. Bepaal die lengte van QR (teenoor P), korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['14,86 cm', '13,38 cm', '10,00 cm', '18,01 cm'], correctIndex: 1, explanation: 'QR = PR × sin P = 20 × sin 42° ≈ 13,38 cm ✓ (14,86 cm is eintlik PQ = 20 × cos 42° — die aangrensende sy, nie QR nie; 10,00 cm halveer verkeerdelik die skuinssy; 18,01 cm kom van die verkeerdelike gebruik van 20 × tan 42°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 148.9,140 30,32.9\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"89.5\" y=\"158\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"14\" y=\"86.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"109.5\" y=\"80.5\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><path d=\"M 130.9,140 A 18 18 0 0 1 135.5,128.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"125.6\" y=\"131\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">42°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"158.9\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"20\" y=\"28.9\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text></svg>"},
        { difficulty: 'Hard', question: 'ʼn Landmeter staan 100 m van die basis van ʼn toring af en meet die hoogtehoek na die bopunt as 24°. Sy loop dan 30 m nader aan die toring en meet die nuwe hoogtehoek. Bepaal die nuwe hoogtehoek, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['24°', '18,91°', '32,46°', '34,29°'], correctIndex: 2, explanation: 'Hoogte van toring = 100 × tan 24° ≈ 44,52 m (onveranderd). Nuwe afstand = 100 − 30 = 70 m. Nuwe hoek = tan⁻¹(44,52 / 70) ≈ 32,46° ✓ (24° vergeet om weer te bereken vir die nuwe, nader afstand; 18,91° tel verkeerdelik die 30 m by in plaas daarvan om dit af te trek; 34,29° neem verkeerdelik aan dat die hoek eweredig met afstand skaal.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"140\" x2=\"210\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"190\" y1=\"140\" x2=\"190\" y2=\"64.3\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 190,128 L 178,128 L 178,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"140\" x2=\"190\" y2=\"64.3\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"80\" y1=\"140\" x2=\"190\" y2=\"64.3\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 46,140 A 26 26 0 0 0 43.8,129.4\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.1\"/><text x=\"44.5\" y=\"134.8\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">24°</text><path d=\"M 104,140 A 24 24 0 0 0 99.8,126.4\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"98\" y=\"130\" font-size=\"12\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><circle cx=\"20\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/><circle cx=\"80\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/><text x=\"20\" y=\"156\" font-size=\"10\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"80\" y=\"156\" font-size=\"10\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"50\" y=\"152\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">30 m</text><text x=\"10\" y=\"152\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\"></text><text x=\"105\" y=\"20\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">100 m</text></svg>"},
        { difficulty: 'Hard', question: 'ʼn Punt (8, −15) lê op die eindarm van hoek θ. Watter stelling oor r, sin θ en cos θ is korrek?', checkMode: 'auto', options: ['r = 7; sin θ is negatief en cos θ is positief.', 'r = 17; sin θ is positief en cos θ is negatief, aangesien y negatief is en x positief is.', 'r = 17; beide sin θ en cos θ is negatief, aangesien die punt ʼn negatiewe koördinaat het.', 'r = 17; sin θ is negatief en cos θ is positief, aangesien y negatief is en x positief is (die punt lê in die vierde kwadrant).'], correctIndex: 3, explanation: 'r = √(8² + (−15)²) = √(64 + 225) = √289 = 17. Aangesien y = −15 negatief is en x = 8 positief is, lê die punt in die vierde kwadrant, waar sin θ (= y/r) negatief is en cos θ (= x/r) positief is. ✓ (r = 7 gebruik ʼn onvolledige berekening in plaas van die volledige Pythagoras-som; opsies B en C pas die kwadrant-tekenreëls verkeerd toe.)' , diagramSvg: "<svg viewBox=\"0 0 220 220\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"110\" x2=\"210\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"10\" x2=\"110\" y2=\"210\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><polygon points=\"210,110 202,106 202,114\" fill=\"#94a3b8\"/><polygon points=\"110,10 106,18 114,18\" fill=\"#94a3b8\"/><text x=\"200\" y=\"124\" font-size=\"11\" fill=\"#64748b\">x</text><text x=\"118\" y=\"20\" font-size=\"11\" fill=\"#64748b\">y</text><line x1=\"110\" y1=\"110\" x2=\"135.6\" y2=\"158\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><circle cx=\"135.6\" cy=\"158\" r=\"4\" fill=\"#0f1f3d\"/><text x=\"149.6\" y=\"174\" font-size=\"13\" fill=\"#374151\" font-weight=\"600\" text-anchor=\"middle\">(8, −15)</text><line x1=\"135.6\" y1=\"158\" x2=\"135.6\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"3,3\"/><text x=\"147.6\" y=\"134\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">−15</text><text x=\"122.8\" y=\"100\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8</text><text x=\"140.8\" y=\"146\" font-size=\"14\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
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
        { difficulty: 'Easy', question: 'In reghoekige driehoek KLM is hoek L = 90°. Relatief tot hoek K, watter sy is die skuinssy?', checkMode: 'auto', options: ['KM, omdat dit die sy oorkant die reghoek by L is.', 'KL, omdat dit die reghoek by L raak.', 'LM, omdat dit oorkant hoek K is.', 'Dit kan nie bepaal word sonder om hoek M te ken nie.'], correctIndex: 0, explanation: 'Die skuinssy is altyd die sy oorkant die reghoek. Aangesien die reghoek by L is, is die skuinssy KM — dit kan onmiddellik bepaal word, sonder enige ander hoek of sylengte. ✓ (KL is ʼn been wat die reghoek raak, nie die skuinssy nie; LM is die sy oorkant K, nie die skuinssy nie.)' },
        { difficulty: 'Easy', question: 'In reghoekige driehoek ABC is hoek C = 90°. Skryf die verhouding vir cos A neer in terme van die sye van die driehoek.', checkMode: 'auto', options: ['BC/AB', 'AC/AB', 'BC/AC', 'AB/AC'], correctIndex: 1, explanation: 'cos A = aangrensende / skuinssy. Die sy aangrensend aan hoek A is AC, en die skuinssy (oorkant die reghoek by C) is AB. Dus cos A = AC/AB. ✓ (BC/AB is sin A — dit gebruik die teenoorstaande sy in plaas van die aangrensende; BC/AC is tan A; AB/AC is die korrekte verhouding onderstebo.)' },
        { difficulty: 'Medium', question: 'In reghoekige driehoek DEF is hoek E = 90°. Watter trigonometriese verhouding (sin, cos of tan) van hoek D verbind sy EF (teenoor D) en sy DE (aangrensend aan D)?', checkMode: 'auto', options: ['sin', 'cos', 'tan', 'Dit kan enige van sin, cos of tan wees, afhangende van die driehoek se grootte.'], correctIndex: 2, explanation: 'TTA: tan = teenoorstaande / aangrensende. EF is teenoor hoek D en DE is aangrensend aan D, dus is die verhouding wat hulle verbind tan D. ✓ (sin verbind teenoorstaande en skuinssy; cos verbind aangrensende en skuinssy — nie een betrek EF en DE saam nie. Die verhouding hang net af van watter twee sye genoem word, nie van die driehoek se grootte nie.)' },

        // Blok 2 — Spesiale hoekwaardes onthou (Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Skryf die presiese waarde van cos 0° neer.', checkMode: 'auto', options: ['0', '0,5', '0,87', '1'], correctIndex: 3, explanation: 'cos 0° = 1, een van die standaard spesiale hoekwaardes. ✓ (0 is cos 90°; 0,5 is cos 60°; 0,87 is cos 30° — om deurmekaar te raak oor watter spesiale hoek watter waarde gee, is ʼn algemene fout.)' },
        { difficulty: 'Medium', question: 'Skryf die presiese waarde van sin 90° neer.', checkMode: 'auto', options: ['1', '0', '0,87', '0,5'], correctIndex: 0, explanation: 'sin 90° = 1, die maksimumwaarde van die sinusfunksie. ✓ (0 is sin 0°; 0,87 is sin 60°; 0,5 is sin 30° — om deurmekaar te raak oor watter spesiale hoek watter waarde gee, is ʼn algemene fout.)' },
        { difficulty: 'Medium', question: 'Bepaal, sonder om ʼn sakrekenaar te gebruik, sin 60° − cos 30°.', checkMode: 'auto', options: ['1,73', '0', '0,37', '−0,37'], correctIndex: 1, explanation: 'sin 60° = 0,87 en cos 30° = 0,87 (hulle is gelyk, aangesien 60° en 30° komplementêre hoeke is). Dus sin 60° − cos 30° = 0. ✓ (1,73 kom van optel in plaas van aftrek; 0,37 en −0,37 kom van die verkeerdelike gebruik van cos 30° = 0,5, wat verwar word met sin 30°.)' },

        // Blok 3 — Onbekende sy gegewe een sy + een hoek (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In reghoekige driehoek ABC is die reghoek by B. Die sy aangrensend aan hoek A, AB, is 15 cm, en hoek A = 35°. Bepaal die lengte van die sy teenoor hoek A, BC, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['12,29 cm', '8,60 cm', '10,50 cm', '21,42 cm'], correctIndex: 2, explanation: 'tan A = teenoorstaande / aangrensende = BC / AB\ntan 35° = BC / 15\nBC = 15 × tan 35° ≈ 15 × 0,7002 ≈ 10,50 cm ✓ (12,29 cm kom van die verkeerdelike gebruik van cos 35° in plaas van tan 35°; 8,60 cm kom van die gebruik van sin 35° en die behandeling van 15 as die skuinssy; 21,42 cm kom van deling deur tan 35° in plaas van vermenigvuldiging.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 161.1,140 30,48.2\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"95.5\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><path d=\"M 143.1,140 A 18 18 0 0 1 146.3,129.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"137.2\" y=\"132.5\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">35°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"171.1\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"20\" y=\"44.2\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"14\" y=\"94.1\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'In reghoekige driehoek DEF is die reghoek by E. Die skuinssy DF = 22 cm, en hoek D = 48°. Bepaal die lengte van die sy teenoor hoek D, EF, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['14,72 cm', '29,60 cm', '24,43 cm', '16,35 cm'], correctIndex: 3, explanation: 'sin D = teenoorstaande / skuinssy = EF / DF\nsin 48° = EF / 22\nEF = 22 × sin 48° ≈ 22 × 0,7431 ≈ 16,35 cm ✓ (14,72 cm kom van die verkeerdelike gebruik van cos 48° in plaas van sin 48°; 29,60 cm kom van deling deur sin 48° in plaas van vermenigvuldiging; 24,43 cm kom van die gebruik van tan 48° in plaas van sin 48°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 137.1,140 30,21.1\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"103.5\" y=\"74.5\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">22 cm</text><path d=\"M 119.1,140 A 18 18 0 0 1 125.0,126.6\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"114.2\" y=\"129.8\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">48°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">E</text><text x=\"147.1\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">D</text><text x=\"20\" y=\"17.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">F</text><text x=\"14\" y=\"80.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'In reghoekige driehoek GHI is die reghoek by H. Die sy teenoor hoek G, HI, is 11 cm, en hoek G = 29°. Bepaal die lengte van die skuinssy GI, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['22,69 cm', '12,58 cm', '5,33 cm', '19,84 cm'], correctIndex: 0, explanation: 'sin G = teenoorstaande / skuinssy\nsin 29° = 11 / GI\nGI = 11 / sin 29° ≈ 11 / 0,4848 ≈ 22,69 cm ✓ (12,58 cm kom van die verkeerdelike gebruik van cos 29° in plaas van sin 29°; 5,33 cm kom van vermenigvuldiging met sin 29° in plaas van deling; 19,84 cm kom van deling deur tan 29° in plaas van sin 29°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 99.3,140 30,15\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"64.6\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">11 cm</text><path d=\"M 30,33 A 18 18 0 0 0 38.7,30.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"36.3\" y=\"39.2\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">29°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">H</text><text x=\"109.3\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">I</text><text x=\"20\" y=\"11\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">G</text><text x=\"84.6\" y=\"71.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In reghoekige driehoek JKL is die reghoek by K. Die skuinssy JL = 30 cm, en hoek J = 57°. Bepaal die lengte van die sy aangrensend aan hoek J, JK, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['25,16 cm', '16,34 cm', '55,08 cm', '46,20 cm'], correctIndex: 1, explanation: 'cos J = aangrensende / skuinssy = JK / JL\ncos 57° = JK / 30\nJK = 30 × cos 57° ≈ 30 × 0,5446 ≈ 16,34 cm ✓ (25,16 cm kom van die verkeerdelike gebruik van sin 57° in plaas van cos 57°; 55,08 cm kom van deling deur cos 57° in plaas van vermenigvuldiging; 46,20 cm kom van die gebruik van tan 57° in plaas van cos 57°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 111.2,140 30,15\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"90.6\" y=\"71.5\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">30 cm</text><path d=\"M 93.2,140 A 18 18 0 0 1 101.4,124.9\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"89.2\" y=\"128.1\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">57°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">K</text><text x=\"121.2\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">J</text><text x=\"20\" y=\"11\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">L</text><text x=\"70.6\" y=\"158\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Blok 4 — Onbekende hoek gegewe twee sye (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In reghoekige driehoek MNO is die reghoek by N. Die sy teenoor hoek M, NO, is 5 cm, en die sy aangrensend aan hoek M, MN, is 12 cm. Bepaal die grootte van hoek M, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['24,62°', '67,38°', '22,62°', '0,39°'], correctIndex: 2, explanation: 'tan M = teenoorstaande / aangrensende = NO / MN = 5 / 12 ≈ 0,4167\nM = tan⁻¹(0,4167) ≈ 22,62° ✓ (24,62° kom van die verkeerdelike gebruik van sin⁻¹(5/12) in plaas van tan⁻¹; 67,38° kom van die omkeer van die verhouding na 12/5; 0,39° kom van ʼn sakrekenaar wat op radiaalmodus gelaat is.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 cm</text><path d=\"M 152,140 A 18 18 0 0 1 154.9,130.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">N</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">M</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">O</text></svg>"},
        { difficulty: 'Medium', question: 'In reghoekige driehoek PQR is die reghoek by Q. Die sy teenoor hoek P, QR, is 20 cm, en die skuinssy PR is 29 cm. Bepaal die grootte van hoek P, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['46,40°', '34,59°', '0,60°', '43,60°'], correctIndex: 3, explanation: 'sin P = teenoorstaande / skuinssy = QR / PR = 20 / 29 ≈ 0,6897\nP = sin⁻¹(0,6897) ≈ 43,60° ✓ (46,40° kom van die verkeerdelike gebruik van cos⁻¹(20/29) in plaas van sin⁻¹ — dit is eintlik die ander skerp hoek; 34,59° kom van die verkeerdelike gebruik van tan⁻¹(20/29); 0,60° kom van ʼn sakrekenaar wat op radiaalmodus gelaat is.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">29 cm</text><path d=\"M 152,140 A 18 18 0 0 1 154.9,130.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text></svg>"},
        { difficulty: 'Hard', question: 'In reghoekige driehoek STU is die reghoek by T. Die sy aangrensend aan hoek S, ST, is 20 cm, en die skuinssy SU is 29 cm. Bepaal die grootte van hoek S, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['46,40°', '43,60°', '34,59°', '0,60°'], correctIndex: 0, explanation: 'cos S = aangrensende / skuinssy = ST / SU = 20 / 29 ≈ 0,6897\nS = cos⁻¹(0,6897) ≈ 46,40° ✓ (43,60° kom van die verkeerdelike gebruik van sin⁻¹(20/29) in plaas van cos⁻¹ — dit is eintlik die ander skerp hoek; 34,59° kom van die verkeerdelike gebruik van tan⁻¹(20/29); 0,60° kom van ʼn sakrekenaar wat op radiaalmodus gelaat is.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">29 cm</text><path d=\"M 152,140 A 18 18 0 0 1 154.9,130.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">T</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">S</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">U</text></svg>"},

        // Blok 5 — Hoogte-/dieptehoek-woordprobleme (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'Vanaf ʼn punt 45 m van die basis van ʼn toring is die hoogtehoek na die bopunt van die toring 28°. Bepaal die hoogte van die toring, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['39,73 m', '23,93 m', '21,13 m', '84,63 m'], correctIndex: 1, explanation: 'tan 28° = hoogte / 45\nhoogte = 45 × tan 28° ≈ 45 × 0,5317 ≈ 23,93 m ✓ (39,73 m kom van die verkeerdelike gebruik van cos 28° in plaas van tan 28°; 21,13 m kom van die gebruik van sin 28° in plaas daarvan; 84,63 m kom van die gebruik van die komplementêre hoek 62° in plaas van 28°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 170,128 L 158,128 L 158,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 58,140 A 28 28 0 0 0 52.8,123.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"52\" y=\"128\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">45 m</text><text x=\"188\" y=\"94\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><circle cx=\"30\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/></svg>"},
        { difficulty: 'Medium', question: 'ʼn Persoon wat bo-op ʼn 38 m krans staan, sien ʼn boot op see teen ʼn dieptehoek van 22°. Bepaal die horisontale afstand vanaf die basis van die krans na die boot, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['15,35 m', '101,44 m', '94,05 m', '40,98 m'], correctIndex: 2, explanation: 'Die dieptehoek vanaf die kranstop is gelyk aan die hoogtehoek vanaf die boot (verwisselende hoeke), dus is die hoek in die reghoekige driehoek 22°.\ntan 22° = 38 / afstand\nafstand = 38 / tan 22° ≈ 38 / 0,4040 ≈ 94,05 m ✓ (15,35 m kom van vermenigvuldiging met tan 22° in plaas van deling; 101,44 m kom van die gebruik van sin 22° in plaas van tan 22°; 40,98 m kom van die gebruik van cos 22° in plaas daarvan.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"140\" x2=\"30\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"10\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><path d=\"M 42,140 L 42,128 L 30,128\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"14\" y1=\"40\" x2=\"190\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"30\" y1=\"40\" x2=\"190\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 62,40 A 32 32 0 0 1 57.1,57.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"66\" y=\"56\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><text x=\"12\" y=\"94\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">38 m</text><text x=\"112\" y=\"150\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><polygon points=\"185,140 197,140 191,133\" fill=\"#0f1f3d\"/></svg>"},
        { difficulty: 'Hard', question: 'Twee geboue staan 19 m uitmekaar. Die korter gebou is 14 m hoog. Vanaf die bopunt van die korter gebou is die hoogtehoek na die bopunt van die hoër gebou 31°. Bepaal die hoogte van die hoër gebou, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['11,42 m', '16,29 m', '30,29 m', '25,42 m'], correctIndex: 3, explanation: 'Die hoogteverskil tussen die twee dakke vorm die teenoorstaande sy van ʼn reghoekige driehoek met die 19 m horisontale gaping as die aangrensende sy.\ntan 31° = hoogteverskil / 19\nhoogteverskil = 19 × tan 31° ≈ 19 × 0,6009 ≈ 11,42 m\nTotale hoogte = 14 + 11,42 ≈ 25,42 m ✓ (11,42 m vergeet om die 14 m basishoogte by te tel; 16,29 m kom van die verkeerdelike gebruik van cos 31° en vergeet ook om die basishoogte by te tel; 30,29 m gebruik cos 31° vir die hoogteverskil en tel wel die basishoogte by.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><rect x=\"14\" y=\"90\" width=\"32\" height=\"50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><rect x=\"154\" y=\"40\" width=\"32\" height=\"100\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"46\" y1=\"90\" x2=\"186\" y2=\"90\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"46\" y1=\"90\" x2=\"186\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 76,90 A 30 30 0 0 0 74.3,79.9\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"72\" y=\"82\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><path d=\"M 174,90 L 174,78 L 186,78\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"30\" y=\"118\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 m</text><text x=\"116\" y=\"82\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">19 m</text><text x=\"198\" y=\"66\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Blok 6 — Gekombineerde multi-stap probleme (Medium/Hard/Hard/Hard)
        { difficulty: 'Medium', question: 'ʼn Leer leun teen ʼn vertikale muur en maak ʼn hoek van 62° met die horisontale grond. Die onderpunt van die leer is 4 m van die muur af. Bepaal die lengte van die leer, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['8,52 m', '4,53 m', '1,88 m', '2,13 m'], correctIndex: 0, explanation: 'Die leer is die skuinssy. Die 4 m onderafstand is aangrensend aan die 62°-hoek.\ncos 62° = 4 / leerlengte\nleerlengte = 4 / cos 62° ≈ 4 / 0,4695 ≈ 8,52 m ✓ (4,53 m kom van die verkeerdelike gebruik van sin 62° in plaas van cos 62°; 1,88 m kom van vermenigvuldiging met cos 62° in plaas van deling; 2,13 m kom van vermenigvuldiging met tan 62° in plaas daarvan.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"92.7\" y1=\"140\" x2=\"92.7\" y2=\"7\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"15\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><path d=\"M 80.7,140 L 80.7,128 L 92.7,128\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"140\" x2=\"92.7\" y2=\"22\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 58,140 A 28 28 0 0 0 43.1,115.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"51.4\" y=\"127.1\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">62°</text><text x=\"61.4\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">4 m</text><text x=\"83.4\" y=\"70.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In reghoekige driehoek PQR is die reghoek by Q. Die skuinssy PR = 24 cm en hoek P = 37°. Bepaal die lengte van QR (teenoor P), korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['19,17 cm', '14,44 cm', '12,00 cm', '18,09 cm'], correctIndex: 1, explanation: 'QR = PR × sin P = 24 × sin 37° ≈ 14,44 cm ✓ (19,17 cm is eintlik PQ = 24 × cos 37° — die aangrensende sy, nie QR nie; 12,00 cm halveer verkeerdelik die skuinssy; 18,09 cm kom van die verkeerdelike gebruik van 24 × tan 37°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 157.8,140 30,43.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"93.9\" y=\"158\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"14\" y=\"91.9\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"113.9\" y=\"85.9\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">24 cm</text><path d=\"M 139.8,140 A 18 18 0 0 1 143.4,129.2\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"134.1\" y=\"132.1\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">37°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"167.8\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"20\" y=\"39.7\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text></svg>"},
        { difficulty: 'Hard', question: 'ʼn Landmeter staan 90 m van die basis van ʼn toring af en meet die hoogtehoek na die bopunt as 26°. Sy loop dan 25 m nader aan die toring en meet die nuwe hoogtehoek. Bepaal die nuwe hoogtehoek, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['26°', '20,89°', '34,03°', '36,00°'], correctIndex: 2, explanation: 'Hoogte van toring = 90 × tan 26° ≈ 43,90 m (onveranderd). Nuwe afstand = 90 − 25 = 65 m. Nuwe hoek = tan⁻¹(43,90 / 65) ≈ 34,03° ✓ (26° vergeet om weer te bereken vir die nuwe, nader afstand; 20,89° tel verkeerdelik die 25 m by in plaas daarvan om dit af te trek; 36,00° neem verkeerdelik aan dat die hoek eweredig met afstand skaal.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"140\" x2=\"210\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"190\" y1=\"140\" x2=\"190\" y2=\"57.1\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 190,128 L 178,128 L 178,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"140\" x2=\"190\" y2=\"57.1\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"80\" y1=\"140\" x2=\"190\" y2=\"57.1\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 46,140 A 26 26 0 0 0 43.4,128.6\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.1\"/><text x=\"44.4\" y=\"134.4\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">26°</text><path d=\"M 104,140 A 24 24 0 0 0 99.2,125.6\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"98\" y=\"130\" font-size=\"12\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><circle cx=\"20\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/><circle cx=\"80\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/><text x=\"20\" y=\"156\" font-size=\"10\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"80\" y=\"156\" font-size=\"10\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"50\" y=\"152\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">25 m</text><text x=\"10\" y=\"152\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\"></text><text x=\"105\" y=\"20\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">90 m</text></svg>"},
        { difficulty: 'Hard', question: 'ʼn Punt (7, −24) lê op die eindarm van hoek θ. Watter stelling oor r, sin θ en cos θ is korrek?', checkMode: 'auto', options: ['r = 17; sin θ is negatief en cos θ is positief.', 'r = 25; sin θ is positief en cos θ is negatief, aangesien y negatief is en x positief is.', 'r = 25; beide sin θ en cos θ is negatief, aangesien die punt ʼn negatiewe koördinaat het.', 'r = 25; sin θ is negatief en cos θ is positief, aangesien y negatief is en x positief is (die punt lê in die vierde kwadrant).'], correctIndex: 3, explanation: 'r = √(7² + (−24)²) = √(49 + 576) = √625 = 25. Aangesien y = −24 negatief is en x = 7 positief is, lê die punt in die vierde kwadrant, waar sin θ (= y/r) negatief is en cos θ (= x/r) positief is. ✓ (r = 17 gebruik die verkeerde paar koördinate heeltemal; opsies B en C pas die kwadrant-tekenreëls verkeerd toe.)' , diagramSvg: "<svg viewBox=\"0 0 220 220\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"110\" x2=\"210\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"10\" x2=\"110\" y2=\"210\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><polygon points=\"210,110 202,106 202,114\" fill=\"#94a3b8\"/><polygon points=\"110,10 106,18 114,18\" fill=\"#94a3b8\"/><text x=\"200\" y=\"124\" font-size=\"11\" fill=\"#64748b\">x</text><text x=\"118\" y=\"20\" font-size=\"11\" fill=\"#64748b\">y</text><line x1=\"110\" y1=\"110\" x2=\"132.4\" y2=\"186.8\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><circle cx=\"132.4\" cy=\"186.8\" r=\"4\" fill=\"#0f1f3d\"/><text x=\"146.4\" y=\"202.8\" font-size=\"13\" fill=\"#374151\" font-weight=\"600\" text-anchor=\"middle\">(7, −24)</text><line x1=\"132.4\" y1=\"186.8\" x2=\"132.4\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"3,3\"/><text x=\"144.4\" y=\"148.4\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">−24</text><text x=\"121.2\" y=\"100\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7</text><text x=\"139.2\" y=\"160.4\" font-size=\"14\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
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
        { difficulty: 'Easy', question: 'In reghoekige driehoek RST is hoek S = 90°. Relatief tot hoek R, watter sy is die skuinssy?', checkMode: 'auto', options: ['RT, omdat dit die sy oorkant die reghoek by S is.', 'RS, omdat dit die reghoek by S raak.', 'ST, omdat dit oorkant hoek R is.', 'Dit kan nie bepaal word sonder om hoek T te ken nie.'], correctIndex: 0, explanation: 'Die skuinssy is altyd die sy oorkant die reghoek. Aangesien die reghoek by S is, is die skuinssy RT — dit kan onmiddellik bepaal word, sonder enige ander hoek of sylengte. ✓ (RS is ʼn been wat die reghoek raak, nie die skuinssy nie; ST is die sy oorkant R, nie die skuinssy nie.)' },
        { difficulty: 'Easy', question: 'In reghoekige driehoek ABC is hoek B = 90°. Skryf die verhouding vir tan C neer in terme van die sye van die driehoek.', checkMode: 'auto', options: ['AB/AC', 'AB/BC', 'BC/AC', 'BC/AB'], correctIndex: 1, explanation: 'tan C = teenoorstaande / aangrensende. Die sy teenoor hoek C is AB, en die sy aangrensend aan C is BC. Dus tan C = AB/BC. ✓ (AB/AC is sin C — dit gebruik die skuinssy in plaas van die aangrensende sy; BC/AC is cos C; BC/AB is die korrekte verhouding onderstebo.)' },
        { difficulty: 'Medium', question: 'In reghoekige driehoek DEF is hoek F = 90°. Watter trigonometriese verhouding (sin, cos of tan) van hoek D verbind sy EF (teenoor D) en sy DF (die skuinssy)?', checkMode: 'auto', options: ['cos', 'tan', 'sin', 'Dit kan enige van sin, cos of tan wees, afhangende van die driehoek se grootte.'], correctIndex: 2, explanation: 'STS: sin = teenoorstaande / skuinssy. EF is teenoor hoek D en DF is die skuinssy, dus is die verhouding wat hulle verbind sin D. ✓ (cos verbind aangrensende en skuinssy; tan verbind teenoorstaande en aangrensende — nie een betrek EF en DF saam nie. Die verhouding hang net af van watter twee sye genoem word, nie van die driehoek se grootte nie.)' },

        // Blok 2 — Spesiale hoekwaardes onthou (Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Skryf die presiese waarde van tan 0° neer.', checkMode: 'auto', options: ['1', '1,73', '0,58', '0'], correctIndex: 3, explanation: 'tan 0° = 0, een van die standaard spesiale hoekwaardes. ✓ (1 is tan 45°; 1,73 is tan 60°; 0,58 is tan 30° — om deurmekaar te raak oor watter spesiale hoek watter waarde gee, is ʼn algemene fout.)' },
        { difficulty: 'Medium', question: 'Skryf die presiese waarde van cos 45° neer, korrek tot 4 desimale plekke.', checkMode: 'auto', options: ['0,7071', '0,5', '0,87', '1'], correctIndex: 0, explanation: 'cos 45° = √2/2 ≈ 0,7071, een van die standaard spesiale hoekwaardes. ✓ (0,5 is cos 60°; 0,87 is cos 30°; 1 is cos 0° — om deurmekaar te raak oor watter spesiale hoek watter waarde gee, is ʼn algemene fout.)' },
        { difficulty: 'Medium', question: 'Bepaal, sonder om ʼn sakrekenaar te gebruik, 2 × sin 30° + cos 0°.', checkMode: 'auto', options: ['1,5', '2', '3', '1,87'], correctIndex: 1, explanation: 'sin 30° = 0,5 en cos 0° = 1. Dus 2 × sin 30° + cos 0° = 2 × 0,5 + 1 = 1 + 1 = 2. ✓ (1,5 vergeet om sin 30° eers te verdubbel; 3 verdubbel verkeerdelik cos 0° ook; 1,87 gebruik verkeerdelik cos 30° in plaas van cos 0°.)' },

        // Blok 3 — Onbekende sy gegewe een sy + een hoek (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In reghoekige driehoek ABC is die reghoek by B. Die sy aangrensend aan hoek A, AB, is 20 cm, en hoek A = 48°. Bepaal die lengte van die sy teenoor hoek A, BC, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['13,38 cm', '14,86 cm', '22,21 cm', '18,01 cm'], correctIndex: 2, explanation: 'tan A = teenoorstaande / aangrensende = BC / AB\ntan 48° = BC / 20\nBC = 20 × tan 48° ≈ 20 × 1,1106 ≈ 22,21 cm ✓ (13,38 cm kom van die verkeerdelike gebruik van cos 48° in plaas van tan 48°; 14,86 cm kom van die gebruik van sin 48° en die behandeling van 20 as die skuinssy; 18,01 cm kom van deling deur tan 48° in plaas van vermenigvuldiging.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 137.1,140 30,21.1\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"83.5\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><path d=\"M 119.1,140 A 18 18 0 0 1 125.0,126.6\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"114.2\" y=\"129.8\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">48°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"147.1\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"20\" y=\"17.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"14\" y=\"80.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'In reghoekige driehoek DEF is die reghoek by E. Die skuinssy DF = 16 cm, en hoek D = 61°. Bepaal die lengte van die sy teenoor hoek D, EF, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['7,76 cm', '18,29 cm', '28,86 cm', '13,99 cm'], correctIndex: 3, explanation: 'sin D = teenoorstaande / skuinssy = EF / DF\nsin 61° = EF / 16\nEF = 16 × sin 61° ≈ 16 × 0,8746 ≈ 13,99 cm ✓ (7,76 cm kom van die verkeerdelike gebruik van cos 61° in plaas van sin 61°; 18,29 cm kom van deling deur sin 61° in plaas van vermenigvuldiging; 28,86 cm kom van die gebruik van tan 61° in plaas van sin 61°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 99.3,140 30,15\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"84.6\" y=\"71.5\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 cm</text><path d=\"M 81.3,140 A 18 18 0 0 1 90.6,124.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"77.7\" y=\"127.3\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">61°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">E</text><text x=\"109.3\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">D</text><text x=\"20\" y=\"11\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">F</text><text x=\"14\" y=\"77.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'In reghoekige driehoek GHI is die reghoek by H. Die sy teenoor hoek G, HI, is 14 cm, en hoek G = 42°. Bepaal die lengte van die skuinssy GI, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['20,92 cm', '18,84 cm', '9,37 cm', '15,55 cm'], correctIndex: 0, explanation: 'sin G = teenoorstaande / skuinssy\nsin 42° = 14 / GI\nGI = 14 / sin 42° ≈ 14 / 0,6691 ≈ 20,92 cm ✓ (18,84 cm kom van die verkeerdelike gebruik van cos 42° in plaas van sin 42°; 9,37 cm kom van vermenigvuldiging met sin 42° in plaas van deling; 15,55 cm kom van deling deur tan 42° in plaas van sin 42°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 137.1,140 30,21.1\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"83.5\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 cm</text><path d=\"M 30,39.1 A 18 18 0 0 0 42.0,34.5\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"39\" y=\"44.4\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">42°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">H</text><text x=\"147.1\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">I</text><text x=\"20\" y=\"17.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">G</text><text x=\"103.5\" y=\"74.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In reghoekige driehoek JKL is die reghoek by K. Die skuinssy JL = 33 cm, en hoek J = 69°. Bepaal die lengte van die sy aangrensend aan hoek J, JK, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['30,81 cm', '11,83 cm', '92,08 cm', '85,97 cm'], correctIndex: 1, explanation: 'cos J = aangrensende / skuinssy = JK / JL\ncos 69° = JK / 33\nJK = 33 × cos 69° ≈ 33 × 0,3584 ≈ 11,83 cm ✓ (30,81 cm kom van die verkeerdelike gebruik van sin 69° in plaas van cos 69°; 92,08 cm kom van deling deur cos 69° in plaas van vermenigvuldiging; 85,97 cm kom van die gebruik van tan 69° in plaas van cos 69°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 78,140 30,15\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"74\" y=\"71.5\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">33 cm</text><path d=\"M 60,140 A 18 18 0 0 1 71.5,123.2\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"57.4\" y=\"125.8\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">69°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">K</text><text x=\"88\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">J</text><text x=\"20\" y=\"11\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">L</text><text x=\"54\" y=\"158\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Blok 4 — Onbekende hoek gegewe twee sye (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In reghoekige driehoek MNO is die reghoek by N. Die sy teenoor hoek M, NO, is 20 cm, en die sy aangrensend aan hoek M, MN, is 21 cm. Bepaal die grootte van hoek M, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['72,25°', '46,40°', '43,60°', '0,76°'], correctIndex: 2, explanation: 'tan M = teenoorstaande / aangrensende = NO / MN = 20 / 21 ≈ 0,9524\nM = tan⁻¹(0,9524) ≈ 43,60° ✓ (72,25° kom van die verkeerdelike gebruik van sin⁻¹(20/21) in plaas van tan⁻¹; 46,40° kom van die omkeer van die verhouding na 21/20; 0,76° kom van ʼn sakrekenaar wat op radiaalmodus gelaat is.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">21 cm</text><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><path d=\"M 152,140 A 18 18 0 0 1 154.9,130.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">N</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">M</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">O</text></svg>"},
        { difficulty: 'Medium', question: 'In reghoekige driehoek PQR is die reghoek by Q. Die sy teenoor hoek P, QR, is 7 cm, en die skuinssy PR is 25 cm. Bepaal die grootte van hoek P, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['73,74°', '15,64°', '0,27°', '16,26°'], correctIndex: 3, explanation: 'sin P = teenoorstaande / skuinssy = QR / PR = 7 / 25 = 0,28\nP = sin⁻¹(0,28) ≈ 16,26° ✓ (73,74° kom van die verkeerdelike gebruik van cos⁻¹(7/25) in plaas van sin⁻¹ — dit is eintlik die ander skerp hoek; 15,64° kom van die verkeerdelike gebruik van tan⁻¹(7/25); 0,27° kom van ʼn sakrekenaar wat op radiaalmodus gelaat is.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 cm</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">25 cm</text><path d=\"M 152,140 A 18 18 0 0 1 154.9,130.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text></svg>"},
        { difficulty: 'Hard', question: 'In reghoekige driehoek STU is die reghoek by T. Die sy aangrensend aan hoek S, ST, is 7 cm, en die skuinssy SU is 25 cm. Bepaal die grootte van hoek S, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['73,74°', '16,26°', '15,64°', '0,27°'], correctIndex: 0, explanation: 'cos S = aangrensende / skuinssy = ST / SU = 7 / 25 = 0,28\nS = cos⁻¹(0,28) ≈ 73,74° ✓ (16,26° kom van die verkeerdelike gebruik van sin⁻¹(7/25) in plaas van cos⁻¹ — dit is eintlik die ander skerp hoek; 15,64° kom van die verkeerdelike gebruik van tan⁻¹(7/25); 0,27° kom van ʼn sakrekenaar wat op radiaalmodus gelaat is.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 cm</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">25 cm</text><path d=\"M 152,140 A 18 18 0 0 1 154.9,130.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">T</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">S</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">U</text></svg>"},

        // Blok 5 — Hoogte-/dieptehoek-woordprobleme (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'Vanaf ʼn punt 55 m van die basis van ʼn toring is die hoogtehoek na die bopunt van die toring 24°. Bepaal die hoogte van die toring, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['50,25 m', '24,49 m', '22,37 m', '123,53 m'], correctIndex: 1, explanation: 'tan 24° = hoogte / 55\nhoogte = 55 × tan 24° ≈ 55 × 0,4452 ≈ 24,49 m ✓ (50,25 m kom van die verkeerdelike gebruik van cos 24° in plaas van tan 24°; 22,37 m kom van die gebruik van sin 24° in plaas daarvan; 123,53 m kom van die gebruik van die komplementêre hoek 66° in plaas van 24°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 170,128 L 158,128 L 158,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 58,140 A 28 28 0 0 0 52.8,123.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"52\" y=\"128\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">55 m</text><text x=\"188\" y=\"94\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><circle cx=\"30\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/></svg>"},
        { difficulty: 'Medium', question: 'ʼn Persoon wat bo-op ʼn 52 m krans staan, sien ʼn boot op see teen ʼn dieptehoek van 25°. Bepaal die horisontale afstand vanaf die basis van die krans na die boot, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['24,25 m', '123,04 m', '111,51 m', '57,38 m'], correctIndex: 2, explanation: 'Die dieptehoek vanaf die kranstop is gelyk aan die hoogtehoek vanaf die boot (verwisselende hoeke), dus is die hoek in die reghoekige driehoek 25°.\ntan 25° = 52 / afstand\nafstand = 52 / tan 25° ≈ 52 / 0,4663 ≈ 111,51 m ✓ (24,25 m kom van vermenigvuldiging met tan 25° in plaas van deling; 123,04 m kom van die gebruik van sin 25° in plaas van tan 25°; 57,38 m kom van die gebruik van cos 25° in plaas daarvan.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"140\" x2=\"30\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"10\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><path d=\"M 42,140 L 42,128 L 30,128\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"14\" y1=\"40\" x2=\"190\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"30\" y1=\"40\" x2=\"190\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 62,40 A 32 32 0 0 1 57.1,57.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"66\" y=\"56\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><text x=\"12\" y=\"94\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">52 m</text><text x=\"112\" y=\"150\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><polygon points=\"185,140 197,140 191,133\" fill=\"#0f1f3d\"/></svg>"},
        { difficulty: 'Hard', question: 'Twee geboue staan 26 m uitmekaar. Die korter gebou is 20 m hoog. Vanaf die bopunt van die korter gebou is die hoogtehoek na die bopunt van die hoër gebou 33°. Bepaal die hoogte van die hoër gebou, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['16,88 m', '21,81 m', '41,81 m', '36,88 m'], correctIndex: 3, explanation: 'Die hoogteverskil tussen die twee dakke vorm die teenoorstaande sy van ʼn reghoekige driehoek met die 26 m horisontale gaping as die aangrensende sy.\ntan 33° = hoogteverskil / 26\nhoogteverskil = 26 × tan 33° ≈ 26 × 0,6494 ≈ 16,88 m\nTotale hoogte = 20 + 16,88 ≈ 36,88 m ✓ (16,88 m vergeet om die 20 m basishoogte by te tel; 21,81 m kom van die verkeerdelike gebruik van cos 33° en vergeet ook om die basishoogte by te tel; 41,81 m gebruik cos 33° vir die hoogteverskil en tel wel die basishoogte by.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><rect x=\"14\" y=\"90\" width=\"32\" height=\"50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><rect x=\"154\" y=\"40\" width=\"32\" height=\"100\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"46\" y1=\"90\" x2=\"186\" y2=\"90\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"46\" y1=\"90\" x2=\"186\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 76,90 A 30 30 0 0 0 74.3,79.9\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"72\" y=\"82\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><path d=\"M 174,90 L 174,78 L 186,78\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"30\" y=\"118\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 m</text><text x=\"116\" y=\"82\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">26 m</text><text x=\"198\" y=\"66\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Blok 6 — Gekombineerde multi-stap probleme (Medium/Hard/Hard/Hard)
        { difficulty: 'Medium', question: 'ʼn Leer leun teen ʼn vertikale muur en maak ʼn hoek van 55° met die horisontale grond. Die onderpunt van die leer is 2,5 m van die muur af. Bepaal die lengte van die leer, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['4,36 m', '3,05 m', '1,43 m', '1,75 m'], correctIndex: 0, explanation: 'Die leer is die skuinssy. Die 2,5 m onderafstand is aangrensend aan die 55°-hoek.\ncos 55° = 2,5 / leerlengte\nleerlengte = 2,5 / cos 55° ≈ 2,5 / 0,5736 ≈ 4,36 m ✓ (3,05 m kom van die verkeerdelike gebruik van sin 55° in plaas van cos 55°; 1,43 m kom van vermenigvuldiging met cos 55° in plaas van deling; 1,75 m kom van vermenigvuldiging met tan 55° in plaas daarvan.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"112.6\" y1=\"140\" x2=\"112.6\" y2=\"7\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"15\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><path d=\"M 100.6,140 L 100.6,128 L 112.6,128\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"140\" x2=\"112.6\" y2=\"22\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 58,140 A 28 28 0 0 0 46.1,117.1\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"52.2\" y=\"128.5\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">55°</text><text x=\"71.3\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">2,5 m</text><text x=\"93.3\" y=\"70.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In reghoekige driehoek PQR is die reghoek by Q. Die skuinssy PR = 30 cm en hoek P = 51°. Bepaal die lengte van QR (teenoor P), korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['18,88 cm', '23,31 cm', '15,00 cm', '37,05 cm'], correctIndex: 1, explanation: 'QR = PR × sin P = 30 × sin 51° ≈ 23,31 cm ✓ (18,88 cm is eintlik PQ = 30 × cos 51° — die aangrensende sy, nie QR nie; 15,00 cm halveer verkeerdelik die skuinssy; 37,05 cm kom van die verkeerdelike gebruik van 30 × tan 51°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 130.7,140 30,15.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"80.3\" y=\"158\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"14\" y=\"77.8\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"100.3\" y=\"71.8\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">30 cm</text><path d=\"M 112.7,140 A 18 18 0 0 1 119.4,126.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"108.1\" y=\"129.2\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">51°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"140.7\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"20\" y=\"11.7\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text></svg>"},
        { difficulty: 'Hard', question: 'ʼn Landmeter staan 120 m van die basis van ʼn toring af en meet die hoogtehoek na die bopunt as 21°. Sy loop dan 40 m nader aan die toring en meet die nuwe hoogtehoek. Bepaal die nuwe hoogtehoek, korrek tot 2 desimale plekke.', checkMode: 'auto', options: ['21°', '16,06°', '29,93°', '31,50°'], correctIndex: 2, explanation: 'Hoogte van toring = 120 × tan 21° ≈ 46,06 m (onveranderd). Nuwe afstand = 120 − 40 = 80 m. Nuwe hoek = tan⁻¹(46,06 / 80) ≈ 29,93° ✓ (21° vergeet om weer te bereken vir die nuwe, nader afstand; 16,06° tel verkeerdelik die 40 m by in plaas daarvan om dit af te trek; 31,50° neem verkeerdelik aan dat die hoek eweredig met afstand skaal.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"140\" x2=\"210\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"190\" y1=\"140\" x2=\"190\" y2=\"74.7\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 190,128 L 178,128 L 178,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"140\" x2=\"190\" y2=\"74.7\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"80\" y1=\"140\" x2=\"190\" y2=\"74.7\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 46,140 A 26 26 0 0 0 44.3,130.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.1\"/><text x=\"44.6\" y=\"135.4\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">21°</text><path d=\"M 104,140 A 24 24 0 0 0 100.6,127.8\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"98\" y=\"130\" font-size=\"12\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><circle cx=\"20\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/><circle cx=\"80\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/><text x=\"20\" y=\"156\" font-size=\"10\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"80\" y=\"156\" font-size=\"10\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"50\" y=\"152\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">40 m</text><text x=\"10\" y=\"152\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\"></text><text x=\"105\" y=\"20\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">120 m</text></svg>"},
        { difficulty: 'Hard', question: 'ʼn Punt (9, −40) lê op die eindarm van hoek θ. Watter stelling oor r, sin θ en cos θ is korrek?', checkMode: 'auto', options: ['r = 31; sin θ is negatief en cos θ is positief.', 'r = 41; sin θ is positief en cos θ is negatief, aangesien y negatief is en x positief is.', 'r = 41; beide sin θ en cos θ is negatief, aangesien die punt ʼn negatiewe koördinaat het.', 'r = 41; sin θ is negatief en cos θ is positief, aangesien y negatief is en x positief is (die punt lê in die vierde kwadrant).'], correctIndex: 3, explanation: 'r = √(9² + (−40)²) = √(81 + 1600) = √1681 = 41. Aangesien y = −40 negatief is en x = 9 positief is, lê die punt in die vierde kwadrant, waar sin θ (= y/r) negatief is en cos θ (= x/r) positief is. ✓ (r = 31 kom van ʼn rekenfout in die Pythagoras-som; opsies B en C pas die kwadrant-tekenreëls verkeerd toe.)' , diagramSvg: "<svg viewBox=\"0 0 220 270\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"110\" x2=\"210\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"10\" x2=\"110\" y2=\"260\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><polygon points=\"210,110 202,106 202,114\" fill=\"#94a3b8\"/><polygon points=\"110,10 106,18 114,18\" fill=\"#94a3b8\"/><text x=\"200\" y=\"124\" font-size=\"11\" fill=\"#64748b\">x</text><text x=\"118\" y=\"20\" font-size=\"11\" fill=\"#64748b\">y</text><line x1=\"110\" y1=\"110\" x2=\"138.8\" y2=\"238\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><circle cx=\"138.8\" cy=\"238\" r=\"4\" fill=\"#0f1f3d\"/><text x=\"152.8\" y=\"254\" font-size=\"13\" fill=\"#374151\" font-weight=\"600\" text-anchor=\"middle\">(9, −40)</text><line x1=\"138.8\" y1=\"238\" x2=\"138.8\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"3,3\"/><text x=\"150.8\" y=\"174\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">−40</text><text x=\"124.4\" y=\"100\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9</text><text x=\"142.4\" y=\"186\" font-size=\"14\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
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
